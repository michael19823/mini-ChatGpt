# Quality Control for Large-Scale LLM Fan-Out / Map-Reduce Jobs (e.g., one sub-agent per country x ~195)

Research date: 2026-10-07. Source dates are given inline; anything before mid-2025 is flagged "(older)". Claude Code docs (code.claude.com) and Claude API docs (platform.claude.com) were read live on the research date, so they reflect current behavior and version numbers.

---

## 1. Pilot-first: run a small pilot (3–5 items including hard/edge cases), watch traces, iterate the prompt before the full fan-out

### Takeaway
Every primary source says the same thing: look at real agent behavior on a few items before scaling. Anthropic found its biggest multi-agent failures (vague delegation, over-spawning, bad tool choice, verbose queries) by running simulations with the exact production prompts and tools and watching agents step by step. Claude Code's workflow docs tell users to run a workflow on a small slice first to gauge cost before committing.

### Cited Findings
- Anthropic built simulations in the Console "with the exact prompts and tools," then "watched agents work step-by-step." This surfaced agents that kept going after they already had enough results, used overly verbose search queries, and picked the wrong tools. "Effective prompting relies on developing an accurate mental model of the agent." (June 13, 2025) — [Anthropic: How we built our multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system)
- Early versions of Anthropic's research system "spawned 50 subagents for simple queries," which led to explicit effort-scaling rules in the prompt: 1 agent with 3–10 tool calls for simple fact-finding, 2–4 subagents with 10–15 calls each for comparisons, and more than 10 subagents with clearly divided responsibilities for complex research — [Anthropic multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system)
- Vague delegation was a concrete failure. Given "research the semiconductor shortage," one subagent covered the 2021 chip crisis while two others duplicated each other on 2025 supply chains. Fix: "Each subagent needs an objective, an output format, guidance on the tools and sources to use, and clear task boundaries." — [Anthropic multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system)
- Claude Code dynamic workflows, cost guidance: "To gauge the spend before committing to a large task, run the workflow on a small slice first: one directory instead of the whole repo, or a narrow question instead of a broad one." The `/workflows` view shows per-agent token usage live, and a run can be stopped "usually without losing completed work." — [Claude Code docs: Dynamic workflows](https://code.claude.com/docs/en/workflows.md)
- Trace inspection tooling. In `/workflows`, the agent detail shows "the agent's prompt, its recent tool calls, and its result," with each call's input and the start of its result. In headless mode, `--forward-subagent-text` (v2.1.211+) forwards subagent text and thinking blocks so "you can reconstruct each subagent's transcript." — [Claude Code docs: Dynamic workflows](https://code.claude.com/docs/en/workflows.md); [Claude Code docs: headless](https://code.claude.com/docs/en/headless)
- "The best way to improve an agent is to look carefully at its output, especially the cases where it fails." (Sept 29, 2025) — [Claude blog: Building agents with the Claude Agent SDK](https://claude.com/blog/building-agents-with-the-claude-agent-sdk)
- Hamel Husain on error analysis: hand-classify failing traces to find root causes and tally them. You "can get quite far in just 15 minutes." Start with about 30 examples and keep going until no new failure modes appear. (Oct 29, 2024 (older), page modified Sept 1, 2026) — [Hamel Husain: Using LLM-as-a-Judge](https://hamel.dev/blog/posts/llm-judge/)
- Criteria drift (Shankar et al., UIST 2024): the standards a reviewer brings get reshaped by reviewing outputs, and some criteria depend on which outputs the reviewer happened to see. So the grading criteria can't be fully fixed before looking at real outputs (older) — [Shankar et al., "Who Validates the Validators?" arXiv 2404.12272](https://arxiv.org/pdf/2404.12272)
- DocETL: LLM outputs for user-defined map operations over complex documents are "often inaccurate, even with optimized prompts." Fixing them often "requir[es] decomposition of the data, the task, or both." (v3 Apr 1, 2025) — [Shankar et al., DocETL, arXiv 2410.12189](https://arxiv.org/abs/2410.12189v3)

### Inferences
- For a 195-country job, a pilot should cover deliberately varied items: a data-rich country (e.g., USA), a data-poor one (e.g., a small island state), one with naming or sovereignty ambiguity (e.g., Kosovo, Taiwan, Palestine), one with non-English primary sources, and one with a recent regime or currency change. Edge cases are where vague briefs break.
- Iterate the pilot until two consecutive pilot rounds produce no new failure modes (borrowing Hamel's "until no new failure modes appear" stopping rule). Freeze the brief, schema, and rubric only after that.
- The pilot should produce three things that get reused in the full run: (a) a revised worker brief, (b) the output schema, and (c) a grading rubric with 1–2 hand-graded "gold" examples. Criteria drift means the rubric should come out of the pilot, not be written beforehand.
- Measure pilot cost per item (`total_cost_usd` in `claude -p --output-format json`, or the `/workflows` token view) and multiply by N before launching the full run.

### Gaps
- No source gives an empirically optimal pilot size. "3–5 items" is a practitioner heuristic and wasn't found stated as evidence anywhere. Anthropic's ~20 eval queries and Hamel's ~30 traces are the nearest anchors.

---

## 2. Structured outputs: fixed schemas, required fields, enums, "unknown" values, source URL per claim, confidence fields

### Takeaway
A fixed JSON schema enforced by constrained decoding is the single strongest lever for cross-worker consistency. It is available at every layer: the Messages API (`output_config.format`), `claude -p --json-schema`, the Agent SDK, and Workflow `agent(..., {schema})`. There are real constraints, though: no numeric or length constraints, limits on optional and union-typed fields, enum casing not guaranteed, and no Citations API alongside JSON outputs. Design the schema around them.

### Cited Findings
- Claude API structured outputs use constrained decoding: "Always valid: No more `JSON.parse()` errors"; "Type safe: Guaranteed field types and required fields"; "Reliable: No retries needed for schema violations." Exceptions: refusals (`stop_reason: "refusal"`) and truncation (`stop_reason: "max_tokens"`; retry with a higher `max_tokens`). `output_config.format` is GA with no beta header. The older `output_format` plus header `structured-outputs-2025-11-13` is deprecated — [Claude API docs: Structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)
- Supported models (page metadata) include claude-sonnet-5-5, claude-sonnet-5, claude-sonnet-4-6, claude-sonnet-4-5, claude-opus-5-5/5/4.x, and claude-haiku-5-5/4-5 — [Claude API docs: Structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)
- Schema support:
  - Supported: `enum` (strings, numbers, bools, or nulls only), `const`, `anyOf`, `required`, and `additionalProperties`, which must be `false`. String formats `date`, `date-time`, `uri`, and others are supported.
  - Not supported: numeric `minimum`/`maximum`, `minLength`/`maxLength`, recursive schemas, or array constraints beyond `minItems` 0/1. Unsupported features return a 400.
  - SDK helpers move unsupported constraints into field descriptions and validate them client-side.
  - [Claude API docs: Structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)
- Enum casing: "Structured outputs don't guarantee the capitalization of string `enum` and `const` values." Compare case-insensitively and avoid enum values that differ only by case — [Claude API docs: Structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)
- Complexity limits per request: 20 strict tools, 24 optional parameters total, and 16 parameters with union types (`anyOf` or type arrays like `["string","null"]`), which "are especially expensive because they create exponential compilation cost." Past these limits: "Schema is too complex for compilation," plus a 180-second compilation timeout. Advice: "Make parameters `required` where possible… Flatten structures where possible." — [Claude API docs: Structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)
- Grammar caching: "The first time you use a specific schema, there is additional latency while the grammar compiles. Compiled grammars are cached for 24 hours from last use." Changing only `name` or `description` fields doesn't invalidate the cache — [Claude API docs: Structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)
- Asking for step-by-step reasoning inside a schema property "may trigger a `reasoning_extraction` refusal. Ask for a short explanation instead." Grammars don't apply to thinking blocks, so a model can think freely and still emit strict JSON — [Claude API docs: Structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)
- Incompatibility: Citations "conflicts with strict JSON schema constraints. Returns 400 error if citations enabled with `output_config.format`." Message prefilling is also incompatible. Structured outputs do work with the Batch API (50% discount) and with streaming — [Claude API docs: Structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)
- Claude Code headless: `claude -p ... --output-format json --json-schema '<schema>'` returns the result in `structured_output`. The `format` keyword is accepted "but treats `format` as an annotation and doesn't enforce it." An invalid schema exits with an error (v2.1.205+; earlier versions silently returned unstructured text) — [Claude Code docs: headless](https://code.claude.com/docs/en/headless)
- Claude Code Workflow scripts: passing `schema` to `agent()` makes the subagent return JSON matching the shape. Claude Code rejects self-contradictory schemas before the agent starts. "If the subagent's output still fails validation after five attempts, the call fails"; this is configurable via `MAX_STRUCTURED_OUTPUT_RETRIES` — [Claude Code docs: Dynamic workflows](https://code.claude.com/docs/en/workflows.md)
- OpenAI Agents SDK lists "structured outputs" (well-formed data your code can inspect) as a core pattern of code-driven orchestration — [OpenAI Agents SDK: Orchestrating multiple agents](https://openai.github.io/openai-agents-python/multi_agent/)
- DocETL defines pipelines in YAML "facilitating complex prompts and schemas" (summary of the paper via search; the arXiv abstract confirms schema-driven map/reduce operators) — [DocETL arXiv 2410.12189](https://arxiv.org/abs/2410.12189v3)

### Inferences
- Recommended per-item schema pattern for a country job (inferred from the constraints above):
  - Every field is required, with `additionalProperties: false`. Instead of making fields optional or nullable, give each claim-bearing field a sibling `status` enum such as `found | not_found | not_applicable | conflicting`. This keeps both the 24-optional-param and 16-union-type budgets intact, since each `["string","null"]` counts against the 16.
  - Each fact is an object `{value, unit, as_of_date, source_url, source_title, quote, confidence}`. `confidence` is a small enum (`high|medium|low`), not a float, because numeric min/max can't be enforced.
  - Enums use lowercase, distinct values, and code normalizes them case-insensitively.
  - Include a fixed `item_id` (e.g., ISO 3166-1 alpha-3) that the worker must echo, so outputs join back to the input list unambiguously.
- Because Citations can't be combined with JSON outputs, per-claim sourcing in a fan-out should be a schema field (`source_url` plus a verbatim `quote`) that a downstream verifier checks. Native Citations blocks aren't an option here.
- Since `format` (e.g., `uri`, `date`) isn't enforced by `claude -p --json-schema`, post-validate URL and date fields in code.
- The same schema across all 195 workers also reuses the compiled grammar (24h cache). Workflow agents sharing an identical output schema share a prompt-cache prefix (see section 5).

### Gaps
- No public data was found on how much constrained decoding changes content quality (as opposed to format validity) in research-style extraction.
- How strictly the Agent SDK structured-outputs page enforces `format` wasn't verified; only the CLI behavior was.

---

## 3. Verification: LLM-as-judge rubrics, citation checkers, schema validators, cross-checking samples, self-critique

### Takeaway
Layer verification from cheapest and most deterministic to most expensive:
1. Code checks (schema, required fields, URL resolves, value ranges, units).
2. One LLM judge per item with a rubric and a binary pass/fail plus an "unknown" escape hatch.
3. A targeted citation or claim verifier on flagged or sampled items.
4. Human spot checks to calibrate the judge.

Anthropic itself warns LLM-as-judge is "not a very robust method" and recommends rules-based feedback wherever possible.

### Cited Findings
- Anthropic's research-eval judge rubric covered "factual accuracy, citation accuracy, completeness, source quality, and tool efficiency." Multiple judges were tried, but "a single LLM call with a single prompt outputting scores from 0.0-1.0 and a pass-fail grade" was "the most consistent and aligned with human judgements" (June 2025) — [Anthropic multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system)
- Contrasting later Anthropic guidance: "grade each dimension with an isolated LLM-as-judge rather than using one to grade all dimensions." Give the judge an escape hatch ("Unknown") to reduce hallucinated grades, build in partial credit for multi-component tasks, and calibrate judges "closely" with human experts (Jan 9, 2026) — [Anthropic: Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents). **Conflict:** the June 2025 post found one combined judge most consistent; the Jan 2026 post recommends isolated per-dimension judges. The newer guidance is general eval advice; the older is a specific empirical finding on research outputs.
- Grader trade-offs:
  - Code-based graders are fast, cheap, objective, and reproducible, but "brittle to valid variations."
  - Model-based graders are flexible but non-deterministic, costlier, and need calibration.
  - Human graders are the gold standard but expensive and slow.
  - "Grade what the agent produced, not the path it took."
  - [Anthropic: Demystifying evals](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)
- Agent SDK guidance: the best feedback is "providing clearly defined rules for an output, then explaining which rules failed and why" (e.g., linting). LLM-as-judge "is generally not a very robust method, and can have heavy latency tradeoffs" (Sept 29, 2025) — [Claude blog: Building agents with the Claude Agent SDK](https://claude.com/blog/building-agents-with-the-claude-agent-sdk)
- Citation agent: after research, a dedicated CitationAgent processes the findings to identify "specific locations for citations" so claims are attributed to sources — [Anthropic multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system)
- Human review caught what automation missed: early agents "favored SEO-optimized content farms over authoritative sources" — [Anthropic multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system)
- Claude Code's bundled `/deep-research` workflow "fetches and cross-checks the sources it finds, votes on each claim, and returns a cited report with claims that didn't survive cross-checking filtered out." Importantly, "When the verifier agents can't check a claim, such as after a rate limit or API error, the report lists that claim as unverified instead of counting it as refuted." The docs' audit example: "adversarially verify each finding before reporting it" — [Claude Code docs: Dynamic workflows](https://code.claude.com/docs/en/workflows.md)
- Workflows can "have independent agents adversarially review each other's findings before they're reported… so you get a more trustworthy result than a single pass" — [Claude Code docs: Dynamic workflows](https://code.claude.com/docs/en/workflows.md)
- Evaluator-optimizer (one LLM generates, another evaluates and gives feedback in a loop) is useful with "clear evaluation criteria, and when iterative refinement provides measurable value." Voting means "Running the same task multiple times to get diverse outputs" (Dec 19, 2024 (older)) — [Anthropic: Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)
- DocETL uses "an agent-guided plan evaluation mechanism that synthesizes and orchestrates task-specific validation prompts." These check completeness and correctness and feed back improvements, and the resulting plans were "25 to 80% more accurate than well-engineered baselines" across four document tasks (v3 Apr 2025; v1 reported 1.34–4.6x on three tasks, so numbers differ between versions) — [DocETL arXiv 2410.12189v3](https://arxiv.org/abs/2410.12189v3)
- LLM-judge biases: position bias, verbosity bias, self-enhancement bias, and limited reasoning ability. Strong judges (GPT-4) still reach "over 80% agreement, the same level of agreement between humans" (2023 (older)) — [Zheng et al., Judging LLM-as-a-Judge, arXiv 2306.05685](https://arxiv.org/abs/2306.05685)
- Use binary pass/fail with written critiques, not 1–5 scales. Scales aren't actionable and often don't correlate with expert judgment. Off-the-shelf judge metrics "tend to cause more confusion than value." (older) — [Hamel Husain: Using LLM-as-a-Judge](https://hamel.dev/blog/posts/llm-judge/)
- Self-consistency (sampling multiple reasoning paths and picking the most consistent answer) improved over chain-of-thought by +17.9% on GSM8K, +11.0% SVAMP, +12.2% AQuA, +6.4% StrategyQA, and +3.9% ARC-challenge (ICLR 2023 (older); the paper's page doesn't say absolute vs. relative) — [Wang et al., Self-Consistency, arXiv 2203.11171](https://arxiv.org/abs/2203.11171)

### Inferences
- Cost-effective layering for ~195 items:
  - Tier 0, code validation on 100% of items: schema, every required `status` set, URL well-formed and returns HTTP 200, dates parse, values in plausible ranges, units from the allowed set. Free and deterministic.
  - Tier 1, one LLM judge call per item (cheap model OK) on 100% of items: rubric with binary pass/fail per dimension plus an "unknown" option.
  - Tier 2, a claim/citation verifier only on items that fail tier 1, have `confidence: low`, or are outliers versus peers. The verifier fetches `source_url` and checks the quoted value.
  - Tier 3, human spot checks on a random sample plus all disagreements, to calibrate tier 1.
  - Voting or self-consistency (running each item 3x) roughly triples cost. Reserve it for high-stakes fields or contested items.
- To counter self-enhancement bias, the judge should be a different prompt (and ideally a different model or tier) from the worker. Rubrics should reward correctness, not length (verbosity bias).
- Separate "refuted" from "unverifiable" in the verification output, as `/deep-research` does, so infra errors don't silently become false negatives.
- Cross-item consistency checks are cheap and powerful in a fan-out. Compare each item to its peers in code (e.g., GDP per capita outliers by region, units differing from the majority) to flag drift that a per-item judge can't see.

### Gaps
- No source quantified the cost/benefit of verifying 100% of items versus a sample in a fan-out setting.
- No primary Anthropic doc on the Citations API was fetched. Its behavior when used outside JSON mode, as a separate verification step, wasn't verified.

---

## 4. Retry/escalation: re-running failed or low-quality items with a better brief or a stronger model; selective re-dispatch

### Takeaway
Retry should be selective and keyed by item ID. Infrastructure failures (errors, expirations, truncation) get a plain retry. Quality failures (judge fail, schema-valid but empty) get a revised brief that includes the judge's critique, optionally on a stronger model. Watch for one Claude Code Workflow gotcha: a failed agent reruns itself *and every agent started after it* on relaunch. For selective repair, launch a fresh pass over only the failing IDs instead of relaunching the whole script.

### Cited Findings
- Anthropic's production agents resume rather than restart, using "deterministic safeguards like retry logic and regular checkpoints." Telling the agent when a tool is failing lets it adapt — [Anthropic multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system)
- Workflow resume semantics: completed agents return saved results. A **failed** agent "runs again, and so does every agent that started after it, even ones that completed… If a script starts A, B, C, and D in that order and B fails, relaunching returns A from cache and runs B, C, and D again." `agent()` resolves to `null` on an unrecoverable API error, and `pipeline()` keeps the `null`s, so you `.filter(Boolean)` — [Claude Code docs: Dynamic workflows](https://code.claude.com/docs/en/workflows.md)
- Workflow usage-limit handling (v2.1.271+): agents that hit the claude.ai usage limit wait for the reset and then rerun, but only in interactive subscription sessions. In `claude -p`/Agent SDK, "the affected agent fails instead." A run waits at most twice — [Claude Code docs: Dynamic workflows](https://code.claude.com/docs/en/workflows.md)
- Workflow schema validation retries up to five attempts by default (`MAX_STRUCTURED_OUTPUT_RETRIES`) before the call fails — [Claude Code docs: Dynamic workflows](https://code.claude.com/docs/en/workflows.md)
- Per-stage model choice: "A model the script names for a stage counts as the per-invocation model." Subagent model resolution order is the per-invocation `model` parameter, then frontmatter `model`, then `CLAUDE_CODE_SUBAGENT_MODEL`, then the main model. Accepted values include `sonnet`, `opus`, `haiku`, or a full ID like `claude-opus-5-5` — [Claude Code docs: Dynamic workflows](https://code.claude.com/docs/en/workflows.md); [Claude Code docs: Subagents](https://code.claude.com/docs/en/sub-agents.md)
- `claude -p` exits non-zero on failure so scripts can branch on it, and emits `system/api_retry` events with error categories (`rate_limit`, `overloaded`, `max_output_tokens`, etc.) in stream-json — [Claude Code docs: headless](https://code.claude.com/docs/en/headless)
- Message Batches API results are typed per `custom_id` as `succeeded`, `errored` (not billed), or `expired` (not billed). Batches expire if not done in 24 hours. This lets a script resubmit only the errored or expired IDs — [Claude API docs: Batch processing](https://platform.claude.com/docs/en/build-with-claude/batch-processing)
- Structured-output truncation (`stop_reason: "max_tokens"`): "Retry with a higher `max_tokens`." Refusals return 200 and are billed — [Claude API docs: Structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs)
- Evaluator loop in code: "run the task agent to produce an output, then run an evaluator agent to assess that output," looping until criteria pass — [OpenAI Agents SDK: multi-agent](https://openai.github.io/openai-agents-python/multi_agent/)
- Rules-based feedback works best when it explains "which rules failed and why" — [Claude blog: Building agents with the Claude Agent SDK](https://claude.com/blog/building-agents-with-the-claude-agent-sdk)
- Workflow example pattern: "keep fixing… until the type check passes or two rounds in a row make no progress." This is a no-progress stop rule for repair loops — [Claude Code docs: Dynamic workflows](https://code.claude.com/docs/en/workflows.md)

### Inferences
- Suggested repair protocol:
  1. After the map pass, classify each item as `ok`, `infra_fail` (null result, error, expired, truncated), `schema_fail`, or `quality_fail` (judge fail or too many `not_found`).
  2. `infra_fail` gets the same brief and model, retried with backoff.
  3. `quality_fail` gets the original brief plus the judge's specific critique ("missing source for X; value Y contradicts source"), optionally on a stronger model (e.g., Sonnet to Opus).
  4. Cap at 2 repair rounds, stop on no progress, and mark remaining items `needs_human` rather than looping.
- Put repair passes in a *separate* workflow run or script invocation whose input is just the failing IDs. Relaunching the original workflow after a mid-fan-out failure reruns everything that started after the failure.
- If many items fail the same way, that's a brief or schema bug, not an item problem. Fix the brief and re-pilot instead of patching items one by one.

### Gaps
- No primary source quantifies how much escalating to a stronger model improves repair success on failed items. Escalation is common practice but undocumented with numbers in the sources reviewed.

---

## 5. Consistency across workers: shared definitions, glossaries, units, date anchors, canonical source lists, identical templates

### Takeaway
Consistency comes from making every worker's input byte-identical except the item slot. Give one frozen brief with explicit definitions, units, an as-of date, a canonical source priority list, and 1–2 canonical examples, plus one schema. In Claude Code this also pays off mechanically: workflow agents with identical model, effort, tools, schema, and working directory share a prompt-cache prefix. Workflow scripts also forbid `Date.now()`, forcing the date anchor to be passed in explicitly.

### Cited Findings
- Delegation briefs need "an objective, an output format, guidance on the tools and sources to use, and clear task boundaries." Without them, agents "duplicate work, leave gaps, or fail to find necessary information." — [Anthropic multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system)
- Source quality has to be specified. Human testers found agents preferred "SEO-optimized content farms over authoritative sources," which Anthropic fixed with source-quality heuristics in prompts — [Anthropic multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system)
- Prompt "right altitude": a Goldilocks zone between brittle hard-coded logic and vague guidance. Don't stuff edge-case lists into the prompt; "curate a set of diverse, canonical examples that effectively portray the expected behavior" (Sept 29, 2025) — [Anthropic: Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- Workflow scripts make `Date.now()`, `Math.random()`, and no-arg `new Date()` throw so relaunches repeat the same `agent()` calls. "Pass a timestamp in through `args` instead." — [Claude Code docs: Dynamic workflows](https://code.claude.com/docs/en/workflows.md)
- Prompt caching in a fan-out: two workflow agents with "the same model, effort level, agent type, tools, output schema, and working directory build the same tools-and-system-prompt prefix." Claude Code holds sibling agents up to 5 seconds (`CLAUDE_CODE_WORKFLOW_PREFIX_STAGGER_MS`) so they read the first agent's cache. The cache TTL defaults to 5 minutes; `subagentPromptCacheTtl: 1h` extends it — [Claude Code docs: Dynamic workflows](https://code.claude.com/docs/en/workflows.md)
- Cached input tokens don't count toward ITPM for most Claude models: "With a 2,000,000 ITPM limit and an 80% cache hit rate, you could effectively process 10,000,000 total input tokens per minute." — [Claude API docs: Rate limits](https://platform.claude.com/docs/en/api/rate-limits)
- For batches with shared context, consider the 1-hour prompt-cache duration, "because batches can take longer than 5 minutes to process" — [Claude API docs: Batch processing](https://platform.claude.com/docs/en/build-with-claude/batch-processing)
- `claude -p --bare` skips auto-discovery of hooks, skills, plugins, MCP servers, auto memory, and CLAUDE.md, and "is useful for CI and scripts where you need the same result on every machine." It is "the recommended mode for scripted and SDK calls" — [Claude Code docs: headless](https://code.claude.com/docs/en/headless)
- Criteria drift: raters' criteria shift as they see more outputs, and even a model swap behind an API can shift which criteria apply (older) — [Shankar et al., arXiv 2404.12272](https://arxiv.org/pdf/2404.12272)
- In batched prompts, "varying inference outcomes for the same data points appearing in different positions within a prompt" (BatchPrompt, ICLR 2024 (older)) — [BatchPrompt: Accomplish more with less (ICLR 2024)](https://proceedings.iclr.cc/paper_files/paper/2024/file/5d8c01de2dc698c54201c1c7d0b86974-Paper-Conference.pdf)

### Inferences
- The shared "job contract" handed identically to every worker should contain:
  - (a) Definitions and glossary for each field, e.g., "population = latest UN WPP mid-year estimate."
  - (b) Units and formats, e.g., USD nominal, ISO dates, ISO 3166 codes.
  - (c) An as-of date and recency rule, e.g., "prefer data dated ≤ 2026-10-07; record the as_of date."
  - (d) A canonical source priority list, e.g., official statistics office > World Bank/IMF/UN > reputable press > other, with content farms forbidden.
  - (e) What to do when data is missing (`status: not_found`, never guess) or conflicting (`status: conflicting` plus both sources).
  - (f) 1–2 fully worked example outputs from the pilot.
  - (g) Explicit scope boundaries, e.g., "do not report on territories; do not compute derived metrics."
- Version the contract, e.g., `brief_v3`, and stamp it into each output record. Drift then becomes detectable, and mixed-version outputs can be re-run.
- Keep the per-item variable part at the *end* of the prompt and everything shared at the start. That maximizes the prompt-cache prefix and guarantees identical framing.
- Shared conventions often need data the model can't infer, like which source wins for GDP. Put these in the contract instead of leaving them to each worker's judgment. That's exactly what causes "weak, inconsistent" results like the user saw.

### Gaps
- No controlled study was found measuring cross-worker variance with and without a shared glossary or canonical examples in agentic research. The recommendations rest on practitioner guidance and mechanism.

---

## 6. Batching/granularity: one item per agent vs. groups; parallelism, shared context, cost, quality; concurrency/rate limits; wave-based dispatch

### Takeaway
Evidence on packing multiple items into one LLM call is consistent: small batches cost little accuracy, but quality degrades and becomes position-dependent as batch size grows. Context rot also argues against long multi-item agent sessions. For agentic research items like countries, which need many tool calls each, one item per agent (or very small groups) is the safer default. Respect Claude Code's concurrency caps: 20 concurrent subagents, and 16 concurrent workflow agents by default. Ramp API traffic gradually.

### Cited Findings
- BatchPrompt (ICLR 2024 (older)): naive batching gave "significant performance degradation," and the same item could get different answers depending on its position. Batch Permutation and Ensembling (shuffle plus majority vote) recovered quality, roughly matching single-item prompting at batch size 32 on BoolQ/QQP/RTE using ~15.7% of the LLM calls, at extra token cost — [BatchPrompt (ICLR 2024)](https://proceedings.iclr.cc/paper_files/paper/2024/file/5d8c01de2dc698c54201c1c7d0b86974-Paper-Conference.pdf)
- BatchGEMBA (2025, MT evaluation): batching generally lowered quality. GPT-4o kept over 90% of baseline at batch size 4 with prompt compression, versus a 44.6% drop without it — [BatchGEMBA, arXiv 2503.02756](https://arxiv.org/abs/2503.02756v1)
- "Towards Cost-effective LLMs Routing with Batch Prompting" (2026; attribution confirmed via two searches, but the full paper wasn't opened):
  - It sweeps batch size from 1 to 64 across three Qwen3 models.
  - Accuracy "remains stable or declines only marginally" below ~16 queries per batch on AGNews and ~8 on GSM8K. Past that, it "drastically degrades to a low regime."
  - Qwen3-4B is hit hardest, and the 14B/32B models are more resilient.
  - [arXiv 2605.28268](https://arxiv.org/pdf/2605.28268)
- A separate pipeline paper models accuracy as exponential decay in batch size and attributes it to cross-item interference, position bias, and reduced attention per item (search summary only, not opened) — [arXiv 2512.03389](https://arxiv.org/pdf/2512.03389)
- The original batch prompting paper (Cheng et al., 2023 (older)) reports up to ~5x token and time efficiency with six samples per batch and "similar or even better downstream performance." So small batches on simple tasks can be close to free (search excerpt) — [arXiv 2301.08721](https://arxiv.org/pdf/2301.08721)
- An answer-selection study found GSM8K accuracy improving up to batch size 6, then fluctuating or declining, with some samples overflowing the context window (search excerpt; model not stated) — [arXiv 2405.12939](https://arxiv.org/pdf/2405.12939)
- Context rot: "as the number of tokens in the context window increases," recall accuracy declines. Sub-agents work in clean context and return "a condensed, distilled summary of its work (often 1,000-2,000 tokens)" — [Anthropic: Effective context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- Multi-agent systems "use about 15× more tokens than chats," and "token usage by itself explains 80% of the variance" in BrowseComp performance. Spending more tokens per item tends to buy quality — [Anthropic multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system)
- Synchronous bottleneck: lead agents wait on subagents synchronously, so "the entire system can be blocked while waiting for a single subagent to finish." Parallel subagents (3–5) plus parallel tool calls "cut research time by up to 90% for complex queries." — [Anthropic multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system)
- Claude Code subagents: "By default, when 20 subagents are running in a session, spawning another with the Agent tool fails with `Concurrent subagent limit reached`." The limit is configurable via `CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`, and there's no limit on total subagents per session. Warning: "Running many subagents that each return detailed results can consume significant context." — [Claude Code docs: Subagents](https://code.claude.com/docs/en/sub-agents.md)
- Claude Code workflows:
  - Up to 16 concurrent agents by default (fewer on low-CPU machines), adjustable 1–256 via `CLAUDE_CODE_WORKFLOW_MAX_CONCURRENT_AGENTS` (v2.1.269+).
  - Up to 4,096 items per `parallel()`/`pipeline()` call, and 1,000 agents total per run.
  - A "Large workflow" warning appears above 25 agents or 1.5M projected tokens.
  - A *size guideline* defaults to `medium` (<10 agents), or `small` (<5) on Pro. It is "advice, not a cap," and a prompt that asks for a different scale overrides it.
  - [Claude Code docs: Dynamic workflows](https://code.claude.com/docs/en/workflows.md)
- `/batch` is a bundled skill that splits one large change into 5 to 30 worktree-isolated subagents — [Claude Code docs: Run agents in parallel](https://code.claude.com/docs/en/agents.md)
- API rate limits are per model class in RPM/ITPM/OTPM, using a token bucket. They can be enforced over short intervals (60 RPM may be enforced as 1 request/second). A 429 includes `retry-after`. "To avoid hitting acceleration limits, ramp up your traffic gradually and maintain consistent usage patterns." Example: the Start tier for Sonnet 5.5 is 1,000 RPM / 2M ITPM / 400k OTPM — [Claude API docs: Rate limits](https://platform.claude.com/docs/en/api/rate-limits)
- Message Batches API:
  - Limits: up to 100,000 requests or 256 MB per batch, and 200k–500k requests in the processing queue depending on tier.
  - Turnaround: 50% cost reduction, and "most batches finishing in less than 1 hour." Batches expire at 24 hours, and results are retained 29 days.
  - Each request needs a `custom_id` matching `^[a-zA-Z0-9_-]{1,64}$`.
  - [Claude API docs: Batch processing](https://platform.claude.com/docs/en/build-with-claude/batch-processing); [Rate limits](https://platform.claude.com/docs/en/api/rate-limits)
- A third-party LangGraph playbook suggests capping concurrent branches at ~5–10 to avoid throttling and cost spikes, with per-branch timeouts and exception capture (low-authority source) — [playbooks.com langgraph-parallel](https://playbooks.com/skills/yonatangross/orchestkit/langgraph-parallel)

### Inferences
- For agentic web research per country, default to **one item per agent**. Each item needs many searches and fetches, so packing 5 countries into one agent multiplies its context (context rot) and invites cross-item contamination and position effects. It also makes a single failure affect 5 items.
- Grouping can make sense when items are *cheap and homogeneous*, e.g., classifying 195 short texts without tools. There, small batches (≤4–8) with shuffling are reasonable for cost, validated against single-item results in the pilot. Grouping by region can also help a *second-pass* consistency reviewer ("compare these 10 West African records for unit and source consistency"), even when the map step is per-item.
- Wave-based dispatch: run the pilot (3–5 items), then a canary wave (~10–20 items) with full verification, then the remainder at the concurrency cap. This both ramps API traffic gradually (acceleration limits) and catches systematic failures before most of the budget is spent.
- With the Workflow size guideline defaulting to `medium` (<10 agents), an orchestrator asked to cover 195 countries may silently batch items per agent to stay under the guideline. A skill should state the intended agent count explicitly or set `workflowSizeGuideline` to `large` or `unrestricted`.
- For non-agentic per-item calls (no tool loop needed, e.g., extraction from already-fetched documents), the Message Batches API gives 50% off, structured outputs, and per-ID results, at the cost of latency up to 24h.

### Gaps
- No study was found that directly compares one-item-per-agent versus N-items-per-agent for *agentic, tool-using* research tasks. The batching evidence above is for single-call classification and QA.
- No official Anthropic guidance was found on optimal concurrency for Claude Code subagents beyond the default caps.

---

## 7. Aggregation (the "reduce" step): files not context, dedupe, normalization, final synthesis

### Takeaway
Don't pipe 195 worker outputs through the orchestrator's context. Have each worker write a structured record to a file or store keyed by item ID and return only a lightweight reference or status. Do the merge, dedupe, and normalization in deterministic code. Use an LLM only for the final synthesis over the normalized table (hierarchically if large), and for entity resolution where needed.

### Cited Findings
- Artifact pattern: "Subagents call tools to store their work in external systems, then pass lightweight references back to the coordinator." This avoids the "game of telephone," preserves fidelity, and reduces token overhead — [Anthropic multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system)
- Just-in-time context: agents keep "lightweight identifiers (file paths, stored queries, web links, etc.)" and load content when needed. Structured note-taking outside the context window (e.g., a NOTES.md) is an example — [Anthropic: Effective context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- Subagents return "only the summary" to the main conversation. Many detailed results "can consume significant context." Full transcripts are kept at `~/.claude/projects/{project}/{sessionId}/subagents/agent-{agentId}.jsonl` — [Claude Code docs: Subagents](https://code.claude.com/docs/en/sub-agents.md)
- Workflows keep intermediate results in script variables: "A workflow script holds the loop, the branching, and the intermediate results itself, so Claude's context holds only the final answer." The documented reduce pattern: "Run a reviewer per file, then pass all the findings to one agent that ranks and deduplicates them." Workflow scripts themselves have no filesystem access ("Agents read, write, and run commands. The script coordinates the agents") — [Claude Code docs: Dynamic workflows](https://code.claude.com/docs/en/workflows.md)
- LangGraph map-reduce: a routing function returns a list of `Send` objects, and the target node runs once per `Send` in parallel. Results merge back via a reducer on the state field, typically `Annotated[list, operator.add]` (via tutorials; official doc not fetched) — [DEV: Map-reduce with the Send API in LangGraph](https://dev.to/aiengineering/map-reduce-with-the-send-api-in-langgraph-1p5o)
- DocETL has LLM-powered map and reduce operators plus *resolve* (entity resolution) and *gather* (cross-chunk context) operators. Its rewrites include decomposing data and tasks (operator list per secondary summary; abstract confirms rewrite directives) — [DocETL arXiv 2410.12189](https://arxiv.org/abs/2410.12189v3); [Moonlight review](https://www.themoonlight.io/en/review/docetl-agentic-query-rewriting-and-evaluation-for-complex-document-processing)
- Batch results come back keyed by `custom_id`, and order isn't guaranteed (the docs use `custom_id` to match results) — [Claude API docs: Batch processing](https://platform.claude.com/docs/en/build-with-claude/batch-processing)
- Context rot limits how much a single synthesizer can reliably process — [Anthropic: Effective context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)

### Inferences
- Recommended reduce pipeline:
  1. Each worker writes `out/<ISO3>.json` (schema-valid) and returns `{id, status, path}`.
  2. A code step validates all files, builds a single table (CSV, JSONL, or SQLite), and normalizes units, casing of enums, date formats, and country names to canonical IDs.
  3. Code computes coverage stats (items with `not_found` per field) and outlier flags.
  4. An LLM synthesizer reads the *normalized table plus coverage report*, not raw worker prose. For large N, synthesize per region first, then globally.
  5. The final report cites the per-item files and sources.
- Dedupe is mostly trivial when items are partitioned by a stable ID (one country per worker). It matters for open-ended discovery fan-outs (e.g., "find all companies in sector X" split by angle), where an entity-resolution step (DocETL "resolve") is needed.
- In Claude Code Workflows, since the script has no filesystem access, the worker agents write files (they have Write/Bash) or return schema JSON that a final "collector" agent writes out. Keeping results in script variables and returning only a compact summary to the main session also satisfies the "don't flood the orchestrator" principle.

### Gaps
- The official LangGraph map-reduce how-to page wasn't fetched (search returned only tutorials and mirrors), so API details come from secondary sources.
- No source compared the quality of hierarchical (region, then global) versus single-pass synthesis.

---

## 8. Deterministic orchestration: code-driven loops vs. LLM-driven orchestration for 100+ items; Claude Code features and other frameworks

### Takeaway
For 100+ homogeneous items, code-driven orchestration is the documented right tool across vendors. A script owns the item list, concurrency, retries, validation, and file writes; LLMs do only the per-item work and the synthesis. LLM-driven orchestration (a lead agent spawning subagents turn by turn) suits open-ended decomposition into a handful of tasks, not 195 known items. In Claude Code, the purpose-built options are Dynamic Workflows ("dozens to hundreds of agents per run," resumable), headless `claude -p` or Agent SDK loops from an external script, and the Message Batches API for non-agentic calls.

### Cited Findings
- "Workflows are systems where LLMs and tools are orchestrated through predefined code paths," while agents "dynamically direct their own processes." Use workflows for predictable, well-defined tasks. Orchestrator-workers fits when "subtasks can't be predicted in advance" (older, Dec 2024) — [Anthropic: Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)
- OpenAI Agents SDK: orchestrating via code makes tasks "more deterministic and predictable, in terms of speed, cost and performance." Patterns include structured outputs, chaining, evaluator `while` loops, and parallel execution with `asyncio.gather`. LLM orchestration is "great when the task is open-ended" — [OpenAI Agents SDK: Orchestrating multiple agents](https://openai.github.io/openai-agents-python/multi_agent/)
- Claude Code comparison table:
  - Subagents: Claude decides turn by turn, results land in Claude's context, scale is "a few delegated tasks per turn."
  - Agent teams: "a handful of long-running peers," experimental and disabled by default.
  - Workflows: "The script" decides, results live in "Script variables," scale is "Dozens to hundreds of agents per run," and they are "Resumable in the same session."
  - [Claude Code docs: Dynamic workflows](https://code.claude.com/docs/en/workflows.md); [Claude Code docs: Run agents in parallel](https://code.claude.com/docs/en/agents.md)
- Workflow script API: plain JavaScript with top-level `await`. `agent()` spawns one subagent (optional `schema`, `label`, model per stage), `pipeline(items, fn)` runs one per item, `parallel()` runs a set concurrently, and `phase()`/`log()` structure progress. Scripts can be saved to `.claude/workflows/` and take input via `args`. There's no mid-run user input ("For sign-off between stages, run each stage as its own workflow"). Triggered by asking "use a workflow" or the `ultracode` keyword, which does *not* trigger from `-p` prompts. The `/workflow-authoring` bundled skill holds the script reference — [Claude Code docs: Dynamic workflows](https://code.claude.com/docs/en/workflows.md)
- Headless:
  - `claude -p` with `--bare` (recommended for scripts), `--allowedTools`, and `--permission-mode` (e.g., `dontAsk`) or `--permission-prompts none` for unattended runs.
  - `--output-format json` includes `total_cost_usd`, and `--json-schema` gives schema-conforming output.
  - Exit codes signal success or failure, and `--resume <session_id>` continues a specific run.
  - Piped stdin is capped at 10MB.
  - [Claude Code docs: headless](https://code.claude.com/docs/en/headless)
- The Agent SDK offers "the same tools, agent loop, and context management that power Claude Code" as Python/TypeScript packages with structured outputs and cost tracking — [Claude Code docs: headless](https://code.claude.com/docs/en/headless); [Agent SDK structured outputs](https://code.claude.com/docs/en/agent-sdk/structured-outputs.md)
- LangGraph `Send` handles fan-out when the item count is known only at runtime, with a reducer collecting results (tutorial sources) — [DEV: Send API map-reduce](https://dev.to/aiengineering/map-reduce-with-the-send-api-in-langgraph-1p5o)
- DocETL is a declarative YAML map/reduce pipeline system with agentic rewriting and validation (v3 Apr 2025) — [DocETL arXiv 2410.12189v3](https://arxiv.org/abs/2410.12189v3)

### Inferences
- Decision rule for a skill:
  - Known list of ≥ ~20 items with the same task: use a code-driven loop. In Claude Code, that's a Workflow script, or an external Python/bash loop over `claude --bare -p ... --json-schema` / the Agent SDK.
  - Per-item work needs no tools (inputs already in hand): use the Message Batches API.
  - Open-ended decomposition into <10 parts: LLM-driven subagents are fine.
- The user's problem (one Sonnet subagent per country driven by an LLM orchestrator) hits several documented limits: the 20-concurrent-subagent cap, results flooding the orchestrator's context, non-deterministic delegation briefs, and no structured retry. A Workflow or external script fixes all four.
- An external script (Python plus Agent SDK, or `claude -p`) has advantages over a Workflow script for very large or long jobs: real filesystem access for checkpointing per item, deterministic resume (skip IDs whose output file exists and validates), no "rerun everything after the failure" semantics, and usage outside interactive sessions. Workflows win on ease: Claude writes them, they come with a progress UI and shared prompt cache, and they're resumable in-session.

### Gaps
- DSPy and the OpenAI cookbook on parallel agents weren't researched in depth (budget). No findings to report on DSPy-based fan-out optimization.
- The Agent SDK subagents page and agent teams page weren't fetched in full. Agent-team specifics beyond "experimental, disabled by default, a handful of long-running peers" weren't verified.

---

## 9. Evaluation: measuring the quality of fan-out output (small hand-graded set, rubric, spot checks)

### Takeaway
Build a small hand-graded gold set (≈20–50 items, weighted toward known-hard cases). Use binary pass/fail rubrics per dimension with written critiques. Calibrate any LLM judge against human labels using true-positive and true-negative rates, not raw agreement. Then spot-check a random sample of each production run. To measure *consistency*, the user's actual complaint, use repeated-trial metrics like pass^k and cross-item comparisons.

### Cited Findings
- Anthropic started its research-system evals with "about 20 queries representing real usage patterns," noting that early on, small samples reveal large effect sizes — [Anthropic multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system)
- "20-50 simple tasks drawn from real failures is a great start." Run multiple isolated trials per task (clean environment each time) to avoid correlated failures. Read transcripts to tell agent errors from grader errors. Eval saturation means it's time to add harder tasks — [Anthropic: Demystifying evals](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)
- pass@k ("at least one correct solution in k attempts") versus pass^k ("the probability that all k trials succeed"). pass^k suits use cases needing consistency — [Anthropic: Demystifying evals](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)
- Judge validation sizing:
  - Aim for ~100 labeled examples per failure mode. "Below 60 examples, the confidence intervals are often too wide."
  - Split labels into train (10–20%), dev, and test (40–45% each), with 30–50 examples of each label in dev and test.
  - Measure TPR/TNR, because raw agreement misleads under class imbalance (a judge that always says Pass gets 95% agreement when errors are 5%).
  - Reaching >90% agreement took three prompt iterations in the Honeycomb case.
  - (older)
  - [Hamel Husain: Using LLM-as-a-Judge](https://hamel.dev/blog/posts/llm-judge/)
- One principal domain expert should give pass/fail plus detailed critiques. Critiques become few-shot examples for the judge, and being "too terse is a common mistake." — [Hamel Husain](https://hamel.dev/blog/posts/llm-judge/)
- "Human evaluation catches what automation misses." Example: content-farm source preference — [Anthropic multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system)
- Strong LLM judges reach >80% agreement with humans, equal to human-human agreement, but show position, verbosity, and self-enhancement biases (older) — [Zheng et al., arXiv 2306.05685](https://arxiv.org/abs/2306.05685)
- EvalGen (Shankar et al.): have humans grade a sample, then keep the judge prompts or functions that best align with those grades. Expect criteria to evolve as graders see outputs (older) — [Shankar et al., arXiv 2404.12272](https://arxiv.org/pdf/2404.12272)
- Build a representative test set "based on customer usage" — [Claude blog: Building agents with the Claude Agent SDK](https://claude.com/blog/building-agents-with-the-claude-agent-sdk)

### Inferences
- A practical evaluation plan for a 195-country job:
  1. **Gold set:** hand-research 10–20 countries (including the pilot's hard cases) for the key fields. This is the reference for accuracy and for judge calibration.
  2. **Per-run metrics computed in code:** schema pass rate, coverage per field (% not `not_found`), the share of claims with a reachable `source_url`, the source-tier distribution, and the outlier count versus peers.
  3. **Judge metrics:** pass rate per rubric dimension, with the judge calibrated against the gold set by TPR/TNR.
  4. **Human spot check:** a random 5–10% sample (~10–20 items), plus every judge "fail" or "unknown," before the results are trusted.
  5. **Consistency metric:** re-run a small subset (e.g., 10 items) 2–3 times and measure field-level agreement (a pass^k analogue). Low agreement means the brief is underspecified.
- Track metrics per brief version. A brief change should improve gold-set accuracy without regressing coverage.

### Gaps
- No published benchmark was found for fan-out research quality specifically (e.g., per-entity fact tables). The sizing numbers come from general LLM-eval practice.
- Eugene Yan's writings on evals weren't fetched (budget), so no findings are attributed to him.
