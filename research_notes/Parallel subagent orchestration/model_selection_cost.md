# Model Selection and Cost Optimization for Multi-Agent Fan-Out on Claude (orchestrator + many parallel sub-agents)

Research date: 2026-10-07. Live pages fetched today: the Anthropic Pricing, "Optimizing for cost and intelligence", Effort, and Prompting Haiku 5.5 / Sonnet 5.5 docs, plus the Claude Code subagents, costs and model-config docs. Some figures (model context windows, prompt-cache minimums, concurrent-cache timing, Managed Agents multiagent notes) come from the Claude API skill's bundled reference files, cached 2026-10-06. Those are marked "(via Claude API skill, cached 2026-10-06; not live-fetched)".

## 1. Current Claude model lineup and API pricing (as of 2026-10-07)

### Takeaway
The current generation is Opus 5.5 ($4/$20), Sonnet 5.5 ($2/$10) and Haiku 5.5 ($0.10/$0.50 up to 100K-token prompts). Fable 5.1 ($10/$50) sits above Opus as the top widely released tier. Batch is 50% off, cache writes cost 1.25x (5-minute) or 2x (1-hour), and cache reads cost 0.1x on most models but 0.05x on Opus 5.5 and 0.025x on Fable 5.1. On this generation Opus is only 2x Sonnet per token, much narrower than the old 5x Opus/Sonnet gap. That changes the fan-out math.

### Cited Findings
**Per-model prices (USD per million tokens, Claude API first-party; Pricing page fetched 2026-10-07):**

| Model (API ID) | Input | 5m cache write | 1h cache write | Cache hit | Output | Batch in / out |
|---|---|---|---|---|---|---|
| Claude Fable 5.1 (`claude-fable-5-1`) | $10 | $12.50 | $20 | $0.25 (0.025x) | $50 | $5 / $25 |
| Claude Fable 5 (`claude-fable-5`) | $10 | $12.50 | $20 | $1 | $50 | $5 / $25 |
| Claude Opus 5.5 (`claude-opus-5-5`) | $4 | $5 | $8 | $0.20 (0.05x) | $20 | $2 / $10 |
| Claude Opus 5 (`claude-opus-5`) | $5 | $6.25 | $10 | $0.50 | $25 | $2.50 / $12.50 |
| Claude Opus 4.8 / 4.7 / 4.6 / 4.5 | $5 | $6.25 | $10 | $0.50 | $25 | $2.50 / $12.50 |
| Claude Sonnet 5.5 (`claude-sonnet-5-5`) | $2 | $2.50 | $4 | $0.20 in table; text says $0.10 (see conflict) | $10 | $1 / $5 |
| Claude Sonnet 5 (`claude-sonnet-5`) | $2 | $2.50 | $4 | $0.20 | $10 | $1 / $5 |
| Claude Sonnet 4.6 / 4.5 | $3 | $3.75 | $6 | $0.30 | $15 | $1.50 / $7.50 |
| Claude Haiku 5.5 (`claude-haiku-5-5`), prompts ≤100K tokens | $0.10 | $0.125 | $0.20 | $0.01 | $0.50 | $0.05 / $0.25 |
| Claude Haiku 5.5, prompts >100K tokens | $0.50 | $0.625 | $1 | $0.05 | $2.50 | $0.25 / $1.25 |
| Claude Haiku 4.5 (`claude-haiku-4-5`) | $1 | $1.25 | $2 | $0.10 | $5 | $0.50 / $2.50 |

— [Anthropic Pricing](https://platform.claude.com/docs/en/about-claude/pricing)

- **Internal conflict in the pricing page:** the table lists Sonnet 5.5 cache hits at $0.20/MTok. The prose says "On Claude Opus 5.5 and Claude Sonnet 5.5, a cache hit costs 5% of the standard input price ($0.20 USD per million tokens on Claude Opus 5.5, $0.10 USD on Claude Sonnet 5.5)". The skill's model notes also list Sonnet 5.5 cache reads at $0.20. Treat $0.20 as the conservative planning number until resolved. — [Anthropic Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- Caching multipliers: 5-minute write 1.25x base input; 1-hour write 2x; read 0.1x (0.025x on Fable 5.1 / Mythos 5.1; 0.05x on Opus 5.5 and Sonnet 5.5). They "stack with other pricing modifiers, including the Batch API discount and data residency." — [Anthropic Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- Batch API: "50% discount on both input and output tokens." — [Anthropic Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- Long context: "Claude 4.6 and later models (except Claude Haiku 5.5) ... include the full 1M token context window at standard pricing." Haiku 5.5 prompts over 100,000 tokens pay the higher tier. — [Anthropic Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- Tokenizer: "Claude 4.7 and later models ... use a newer tokenizer ... approximately 30% more tokens for the same text." Sonnet 4.6 and earlier use the old one. Token estimates carried over from older models undercount. — [Anthropic Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- Fast mode (research preview, Claude API only): Opus 5.5 $8/$40; Opus 5 / 4.8 $10/$50; "not available with the Batch API." — [Anthropic Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- Data residency: `inference_geo: "us"` applies 1.1x on all token categories for Claude 4.6+ models. — [Anthropic Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- Sonnet 5 pricing note: the $2/$10 "introductory pricing through August 31, 2026, is now the standard price. The previously scheduled increase to $3/$15 ... on September 1, 2026 will not occur." — [Anthropic Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- Retired on first-party API (still on some clouds): Opus 4.1, Opus 4, Sonnet 4, Haiku 3.5. — [Anthropic Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- Context / max output: Fable 5.1, Fable 5, Opus 5.5, Opus 5, Opus 4.8/4.7/4.6, Sonnet 5.5, Sonnet 5, Sonnet 4.6 and Haiku 5.5 all have 1M context and 128K max output. Haiku 4.5 has 200K context and 64K max output. — [Claude models overview](https://platform.claude.com/docs/en/about-claude/models/overview) (via Claude API skill, cached 2026-10-06; not live-fetched)
- Tool-use system prompt overhead (tool_choice auto/none): 286 tokens on Opus 5.5, Sonnet 5.5 and Haiku 5.5. — [Anthropic Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- Managed Agents: tokens at standard rates plus $0.08 per session-hour of `running` time. The Batch discount does not apply. — [Anthropic Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- Launch dates (secondary sources only): Opus 5.5 on about 2026-09-22 and Sonnet 5.5 on 2026-09-28. Both posts said Haiku 5.5 would follow "in the coming weeks". — [qcode.cc Haiku 5.5 tracker (as of 2026-09-29)](https://qcode.cc/en/claude-haiku-5-5-status-tracker); [aiweekly.co](https://aiweekly.co/alerts/introducing-claude-sonnet-55)
- **Conflict on Haiku 5.5 availability:** secondary sources from late September 2026 said Haiku 5.5 was unreleased, with no price or ID — [qcode.cc tracker](https://qcode.cc/en/claude-haiku-5-5-status-tracker); [pasqualepillitteri.it](https://pasqualepillitteri.it/en/news/17762/claude-haiku-5-5-leak-beats-opus). Anthropic's live docs fetched 2026-10-07 contradict this: they list Haiku 5.5 with prices, an effort guide, a prompting guide, and GPQA runs "on October 7, 2026". Claude Code's `haiku` alias resolves to Haiku 5.5 on the Anthropic API. — [Pricing](https://platform.claude.com/docs/en/about-claude/pricing); [Prompting Haiku 5.5](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-haiku-5-5); [Claude Code model config](https://code.claude.com/docs/en/model-config)

### Inferences
- Haiku 5.5 appears to have launched between 2026-09-29 and 2026-10-07. Prefer Anthropic's docs over the late-September secondary coverage.
- Price ratios on the current generation: Opus 5.5 is 2x Sonnet 5.5 on input and output and the same on cache reads ($0.20). Sonnet 5.5 is 20x Haiku 5.5. The real cost cliff is between Haiku and Sonnet, not between Sonnet and Opus. On cache-read-heavy agent loops, the gap between Opus 5.5 and Sonnet 5.5 workers shrinks below 2x.
- Haiku 5.5's 100K-token price step matters for research workers that pile up search results. A worker whose context passes 100K pays 5x per token from that point.

### Gaps
- Anthropic's own Opus 5.5, Sonnet 5.5 and Haiku 5.5 announcement posts were not read: the Playwright fetch was denied by the permission classifier, and WebFetch was retired by the coordinator mid-task. Exact launch dates and official benchmark tables are therefore unverified.
- The Sonnet 5.5 cache-read price ($0.20 vs $0.10) is unresolved.
- Bedrock and Vertex prices were not checked; they are partner-set.

## 2. What Anthropic says about token usage in multi-agent systems

### Takeaway
Anthropic's June 2025 multi-agent research post found that agents use about 4x the tokens of chat and multi-agent systems about 15x. Token usage alone explained 80% of BrowseComp performance variance, and upgrading the model beat doubling the token budget. Anthropic's 2026 cost guide adds that orchestration pays only when work splits into many independent pieces. For a single dependent chain, one model at lower effort was cheaper in every measured case.

### Cited Findings
- The multi-agent system (Claude Opus 4 lead + Claude Sonnet 4 subagents) "outperformed single-agent Claude Opus 4 by 90.2% on our internal research eval." — [Anthropic Engineering, "How we built our multi-agent research system" (2025-06-13)](https://www.anthropic.com/engineering/multi-agent-research-system)
- "agents typically use about 4× more tokens than chat interactions, and multi-agent systems use about 15× more tokens than chats." — [Anthropic Engineering](https://www.anthropic.com/engineering/multi-agent-research-system)
- "three factors explained 95% of the performance variance in the BrowseComp evaluation". Token usage alone explained 80%; the other two were number of tool calls and model choice. — [Anthropic Engineering](https://www.anthropic.com/engineering/multi-agent-research-system)
- "upgrading to Claude Sonnet 4 is a larger performance gain than doubling the token budget on Claude Sonnet 3.7." — [Anthropic Engineering](https://www.anthropic.com/engineering/multi-agent-research-system)
- Effort-scaling rules embedded in their lead-agent prompt: simple fact-finding uses 1 agent with 3–10 tool calls; direct comparisons use 2–4 subagents with 10–15 calls each; complex research uses more than 10 subagents with clearly divided responsibilities. — [Anthropic Engineering](https://www.anthropic.com/engineering/multi-agent-research-system)
- Running subagents in parallel, with 3+ tools in parallel, "cut research time by up to 90% for complex queries." — [Anthropic Engineering](https://www.anthropic.com/engineering/multi-agent-research-system)
- Observed failure modes: spawning 50 subagents for simple queries, searching endlessly for nonexistent sources, excessive inter-agent updates, and duplicated work from vague task descriptions (one subagent took the 2021 chip crisis while two others duplicated 2025 supply chains). — [Anthropic Engineering](https://www.anthropic.com/engineering/multi-agent-research-system)
- A good subagent task description specifies an objective, an output format, guidance on tools and sources, and clear task boundaries. — [Anthropic Engineering](https://www.anthropic.com/engineering/multi-agent-research-system)
- Subagents write outputs to external storage and pass "lightweight references back to the coordinator", avoiding information loss and the token cost of copying large outputs. — [Anthropic Engineering](https://www.anthropic.com/engineering/multi-agent-research-system)
- Poor fits: domains where all agents must share the same context or have many inter-agent dependencies, including most coding. The task's value must justify the token cost. — [Anthropic Engineering](https://www.anthropic.com/engineering/multi-agent-research-system)
- Evaluation: "a single LLM call with a single prompt outputting scores from 0.0-1.0 and a pass-fail grade" was the most consistent judge. Criteria were factual accuracy, citation accuracy, completeness, source quality and tool efficiency. — [Anthropic Engineering](https://www.anthropic.com/engineering/multi-agent-research-system)
- 2026 guidance: "Use an orchestrator only when work splits into many independent pieces, ideally more than one context window's worth. For one dependent chain, or work that fits in one context, a single model at lower effort was cheaper in every measured case." Also: "A multi-model setup that looked cheaper than the default single model still cost more than that model at lower effort in these measurements." — [Anthropic, Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)
- Cost concentrates in the tail: "On a 20-problem WideSearch run, the two most expensive problems carried 43% of spend. The cheapest half carried 10%." — [Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)
- Claude Code agent teams use "approximately 7x more tokens than standard sessions when teammates run in plan mode". — [Claude Code: Manage costs](https://code.claude.com/docs/en/costs)

### Inferences
- The 90.2% / 15x / 80%-variance figures date from 2025 and Opus 4 / Sonnet 4 / Sonnet 3.7. The direction (spend and model choice drive quality) probably still holds, but the magnitudes are not re-measured for the 5.5 generation.
- 195 independent country tasks is the "many independent pieces, more than one context window" shape where orchestration does pay. The user's weak results therefore more likely come from worker configuration (model, effort, prompt, tool budget, output format) than from the decision to fan out.
- "Upgrading the model beats raising the token budget" argues against fixing weak Sonnet workers with more searches alone. Try a stronger worker, or higher effort plus better prompts, first.

### Gaps
- Anthropic has not published a 2026 re-measurement of the "15x tokens" figure for the current models.

## 3. Sonnet vs. Haiku vs. Opus as workers: where cheaper models fall short and where they're good enough

### Takeaway
Anthropic's measurements show cheaper models hold up on bounded, checkable work: Haiku 5.5 hit 85% on GPQA Diamond vs Opus 5.5's 91% at about one-twentieth the cost. They lose 10–15 points on deep research and synthesis: Sonnet 5 scored 56% vs Opus 5's 71% on DeepResearch Bench II. Sonnet-worker orchestration cost about half as much as the frontier model solo, but scored 10–12 points lower on a large corpus task. Documented small-model failure modes in research loops: skipping searches, answering from stale training knowledge, stopping early, and skipping verification at low effort.

### Cited Findings
- GPQA Diamond: "Haiku 5.5 scored 85% at about one-twentieth of Opus 5.5's cost per question. Opus 5.5 scored 91%." — [Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)
- DeepResearch Bench II: Fable 5.1 at `low` scored 66% for $4.66 per task; Sonnet 5 scored 56% for $1.20; Opus 5 at default scored 71% for $6.71; Fable 5.1 at default scored 65% for $7.12. — [Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)
- SWE-bench Pro, cost per solved task: Opus 5.5 at `medium` (default) solved 92.8% for $0.22; Opus 5.5 at `low` 87.4% for $0.12; Sonnet 5 at default 77.4% for $0.84; Fable 5.1 at `low` 88.6% for $0.54; Fable 5.1 at default 92.3% for $1.19. A stronger model at lower effort was cheaper per solved task than the older Sonnet. — [Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)
- Orchestrator results:
  - BrowseComp routine slice: a Fable 5 coordinator with one Sonnet 5 worker cost about half of Fable 5 alone on average, and about a third at the 90th percentile ($12 vs $33).
  - Full BrowseComp: "Fable 5 alone reached the coordinator's accuracy at 22% to 30% lower cost."
  - Corpus benchmark (21.6M tokens, 130 planted defects): Fable 5.1 alone cost $468–$552 per episode. A Fable 5.1 lead with 25 Sonnet 5 workers cost 47–55% less and scored 10–12 points lower, in about 2.3 hours vs 15–20.

  — [Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)
- Summary table on the same page: Orchestrator ≈ "About half against the frontier model ... 10 to 12 points below the frontier model ... Much faster on large inputs". — [Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)
- Cost-guide guidance: the smallest model "fits high-volume work with checkable outputs, not long agentic loops." — [Claude API skill cost-optimization guide, summarizing Anthropic's Cost Optimization page](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence) (via Claude API skill, cached 2026-10-06)
- Haiku 5.5 failure modes:
  - At `low`, "In long agent prompts, the model is more likely to skip a search, stop early, or skip a check at this level."
  - "The model also sometimes needs an extra nudge to search. This happens most at `low` effort and with long system prompts."
  - With thinking off plus a JSON output format, it "might skip a tool call it needs."
  - Moving from `low` to `medium` "roughly halved early stopping" but "more than doubled the output tokens for each attempt."
  - Use `high` "for knowledge work, longer agent tasks, and strict instruction following."

  — [Prompting Claude Haiku 5.5](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-haiku-5-5)
- Haiku 5.5 search fix: give today's date, plus a nudge paragraph ("Your training data ends well before today's date... search for those before you answer, even when you feel sure"). This "raised the search rate on questions whose answers had changed" and added unneeded searches in only 0–3% of tries. Blanket "always search" instructions made it search on half of prompts needing no search, with no accuracy gain. — [Prompting Claude Haiku 5.5](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-haiku-5-5)
- Sonnet 5.5 failure modes:
  - On knowledge work, it "sometimes answers from its training knowledge when a web search would catch details that have changed."
  - Prompts saying "only use tools when strictly necessary" or "minimize tool calls" should be removed.
  - At `low` and `medium`, on long agentic tasks, it is "more likely to stop and check in with the user before it finishes."
  - At `low`, it "can skip verifying a change."
  - For JSON answers needing multi-step working, it "often answers without thinking first, particularly at `low` and `medium` effort."
  - "For the hardest long-horizon work, an Opus model is the better choice."

  — [Prompting Claude Sonnet 5.5](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-sonnet-5-5)
- Sonnet 5.5 vs Opus 5.5 benchmarks (Anthropic-reported, via secondary coverage): Terminal-Bench 4.0 70.6% vs 66.4% (Opus at xhigh); GDPval-AA 1844 vs 1846; CursorBench 4.0 about 2 points below Opus; FrontierCode 1.1 52.1% (xhigh) vs 54.4%. Anthropic reportedly says Opus 5.5 "remains clearly stronger at complex, open-ended work requiring sustained judgment." — [aiweekly.co](https://aiweekly.co/alerts/introducing-claude-sonnet-55); [codersera](https://codersera.com/blog/claude-sonnet-5-5-complete-guide-2026/amp/) (search-result summaries; not fetched or verified against Anthropic's post)
- Managed Agents guidance: "Delegated research work is mostly searching, reading, and extracting: many input tokens, little hard reasoning." Put workers on Claude Haiku 5.5, "or Claude Sonnet 5.5 when the worker needs more judgment"; the large model spends tokens on "planning, checking, and synthesis." Poor fit: "a small single-step task - every delegation costs a round-trip and a re-briefing." — [Claude Managed Agents docs](https://platform.claude.com/docs/en/managed-agents/overview) (via Claude API skill multiagent reference, cached 2026-10-06)
- Starting-model recommendation: "Claude Opus 5.5 at its default effort (`medium`) for most agent workloads"; escalate to Fable 5.1 for demanding reasoning or when Opus 5.5 at higher effort falls short. — [Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)
- Pricing page rule of thumb: "Choose Haiku for simple tasks, Sonnet for most production workloads, and Opus for the most complex reasoning." — [Anthropic Pricing](https://platform.claude.com/docs/en/about-claude/pricing)

### Inferences
- Rough task-to-worker map (inference from the above, needs validation on the user's eval):
  - Haiku 5.5 (medium/high): extraction from given text, classification, schema-filling from provided documents, simple single-fact lookups with an explicit search instruction and today's date.
  - Sonnet 5.5 (medium/high): multi-source research per entity, light synthesis, multi-step tool use.
  - Opus 5.5 (medium): open-ended judgment, conflicting-source reconciliation, final cross-entity synthesis. Opus 5.5 at `low` is a credible worker candidate: on SWE-bench Pro it beat Sonnet 5 on both score and cost per solved task.
- The user's "weak Sonnet per-country results" plausibly stem from documented Sonnet 5.5 behaviors: answering from training knowledge instead of searching, early stopping at low/medium effort, and skipping verification. Another candidate is an older Sonnet behind the `sonnet` alias on non-Anthropic platforms (see section 6).
- No published "Opus 5.5 orchestrator + Sonnet 5.5 / Haiku 5.5 workers" result was found. The published orchestrator runs use Fable 5 / 5.1 leads with Sonnet 5 workers.

### Gaps
- No published hallucination-rate comparison between Haiku 5.5, Sonnet 5.5 and Opus 5.5 was found.
- No independent practitioner benchmark of 5.5-generation models as sub-agents was found. Most third-party coverage was secondary and pre-dated Haiku 5.5's apparent launch.
- BrowseComp, tau-bench and SWE-bench leaderboard numbers for the 5.5 generation were not verified (official posts not read).

## 4. Effort / thinking controls for workers

### Takeaway
On the 5.5 generation, `budget_tokens` is gone: thinking is adaptive and the `effort` parameter (low/medium/high/xhigh/max) is the main cost-quality dial. Defaults: `medium` on Opus 5.5 and Haiku 5.5, `high` on Sonnet 5.5 via the API. Anthropic's docs suggest `low` for simple subagents. For research and knowledge work, effort curves were nearly flat (`medium` matched default accuracy at 70–87% of the cost). The documented exception is long agentic research prompts on small models, where `low` causes skipped searches and early stops.

### Cited Findings
- Effort levels: `low` is "Most efficient ... Simpler tasks that need the best speed and lowest costs, such as subagents." `medium` is "Agentic tasks that require a balance of speed, cost, and performance." `high` is "Complex reasoning, difficult coding problems, agentic tasks." `xhigh` is "Long-running agentic and coding tasks (over 30 minutes)." — [Anthropic Effort docs](https://platform.claude.com/docs/en/build-with-claude/effort)
- Defaults: "Most Claude models default to high effort ...; Claude Opus 5.5 and Claude Haiku 5.5 default to medium." Effort affects all output tokens (text, tool calls, thinking). "Lower effort also means fewer and terser tool calls." — [Effort docs](https://platform.claude.com/docs/en/build-with-claude/effort)
- Thinking on/off:
  - Opus 5.5: `thinking: {"type": "disabled"}` returns a 400 at every effort level.
  - Sonnet 5.5: use `thinking: {"type": "between_tools"}` to turn off up-front thinking; accepted at `high` or below.
  - Haiku 5.5: `disabled` is accepted at `high` or below.

  — [Effort docs](https://platform.claude.com/docs/en/build-with-claude/effort)
- Sonnet 5.5 recommendation: "For agentic coding and multistep tool use, start with `medium` for well-specified tasks and move to `high` for harder or longer ones." Effort levels are "recalibrated" vs Sonnet 5, so re-sweep. — [Effort docs](https://platform.claude.com/docs/en/build-with-claude/effort)
- Haiku 5.5 recommendation: "Start with `medium` ... Use `high` for knowledge work, longer agent tasks, and strict instruction following ... [for `xhigh`/`max`] compare them with Claude Sonnet 5.5 on performance, cost, and speed." — [Effort docs](https://platform.claude.com/docs/en/build-with-claude/effort)
- Measured effort curves (all from the same page):
  - Research and knowledge benchmarks (WideSearch, DeepWideSearch, BrowseComp, GDPval, on Fable 5): "`low` gave up 1 to 3 points for a third to a half off cost. `medium` matched the default's accuracy at about 70% to 87% of its cost. The default bought nothing measurable over `medium`."
  - DeepWideSearch wall-clock: 4.5 vs 7.9 minutes per problem (`low` vs default).
  - SWE-bench Pro, Opus 5.5 vs `high`: `medium` about 2.5 points lower at about 70% of the cost; `low` about 8 points lower at about a third of the cost; `xhigh` about 1.4 points higher at 2.5x the cost.

  — [Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)
- Re-run failures at higher effort: Opus 5.5 on SWE-bench Pro, run at `low` and re-run failures at `high`, reached "about 97% pass for about $0.17 per task", vs 95.3% for $0.29 running everything at `high`. "This needs a reliable failure signal, such as tests." — [Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)
- Task budgets (beta; advisory token ceiling the model sees): on Fable 5.1 SWE-bench Pro, a generous budget cut cost per task 44% for about 3 points of pass rate; the tightest cut it 58% for 6 points; the floor is 20,000 tokens. — [Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)
- `max_tokens`: a 16,384 cap "ended about a quarter of Opus 5.5 attempts and 43% of Fable 5.1 attempts"; the page recommends 64,000 for agentic work. — [Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)
- Time awareness (telling the model time matters and showing elapsed time): on DRACO, single-agent time fell 47% and cost 60% for a 4.1-point score drop. `low` effort instead lost 13.3 points on DRACO. — [Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)
- Changing top-level effort mid-conversation invalidates the prompt cache. Per-message effort (beta `mid-conversation-output-config-2026-07-01`) keeps it on Fable 5.1, Opus 5.5, Opus 5, Sonnet 5.5 and Haiku 5.5. — [Effort docs](https://platform.claude.com/docs/en/build-with-claude/effort)
- Claude Code: "Thinking tokens are billed as output tokens, and the default budget can be tens of thousands of tokens per request." "You can't turn off thinking on Opus 5.5, Sonnet 5.5, Haiku 5.5, or the Fable models." — [Claude Code: Manage costs](https://code.claude.com/docs/en/costs)

### Inferences
- For a per-country research worker, the evidence argues for `medium` (Haiku 5.5 / Opus 5.5 default; one step below Sonnet 5.5's API default) as the starting point. Use `high` for Haiku 5.5 if it is used for research rather than extraction. Do not use `low` for workers that must search, given the documented skipped searches and early stops.
- "Turning thinking on pays off" for workers doing multi-step reasoning into JSON (Sonnet 5.5 doc) and for any worker that must decide whether to search. On pure extraction from provided text, low effort or no up-front thinking is likely fine.
- The re-run-on-failure pattern maps onto fan-out if a per-country checker exists, for example a schema validator, a required-fields check or a citation-presence check. Run all 195 at a cheap setting and re-run only the failures at a higher effort or on a stronger model.

### Gaps
- No published effort sweep for Haiku 5.5 or Sonnet 5.5 specifically on web-research tasks was found. The research-benchmark curves are for Fable 5.

## 5. Cost levers for fan-out

### Takeaway
In order of size:
1. Prompt caching of the shared brief: 2.7–5.3x cheaper agent loops; cache reads cost 0.01–0.25 $/MTok.
2. Limiting searches: at $10 per 1,000, search fees dominate cost on Haiku workers.
3. Compressing worker outputs: a one-line answer cost $0.49 vs $1.40 for a memo at similar accuracy.
4. Batch: 50% off, but single-shot with no client tool loop.

Parallel workers need a warm-then-fan-out pattern or they each pay the full cache write.

### Cited Findings
- Caching:
  - "Cut agent-loop cost by a factor of 2.7 to 5.3 on the guide's benchmarks. On a small triage agent it cut the bill 83%, or 88% with input trimming added. Over a day of real traffic, agent loops read a median 84% of input from cache."
  - DeepResearch Bench II with and without caching: Fable 5.1 went from $37.94 to $7.12 per task; Sonnet 5 from $3.20 to $1.20.

  — [Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)
- Cache-breaker example: "A 25-token timestamp-style status line at the front of the system prompt cost $4.24 per run instead of $0.59." — [Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)
- Break-even: a 5-minute write (1.25x) pays off after one read; a 1-hour write (2x) after two reads. — [Anthropic Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- Cache TTL and duration:
  - The 5-minute TTL refreshes on every read, measured from request start.
  - Use 1-hour only for 5–60 minute start-to-start gaps.
  - Sonnet 5 / Opus 5 switched to the 1-hour cache as cheaper "once about 1 turn in 30 followed a pause."

  — [Prompt caching docs](https://platform.claude.com/docs/en/build-with-claude/prompt-caching) (via Claude API skill, cached 2026-10-06); [Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)
- Minimum cacheable prefix: 512 tokens on Opus 5.5, Opus 5, Fable 5/5.1, Sonnet 5.5 and Haiku 5.5 (the skill notes "check the prompt caching docs before relying on their values"); 1,024 on Opus 4.8, Sonnet 5, Sonnet 4.6/4.5; 2,048 on Opus 4.7; 4,096 on Opus 4.6/4.5 and Haiku 4.5. Shorter prefixes silently don't cache. — [Prompt caching docs](https://platform.claude.com/docs/en/build-with-claude/prompt-caching) (via Claude API skill, cached 2026-10-06; not live-fetched)
- **Parallel fan-out timing:** "A cache entry becomes readable only after the first response begins streaming. N parallel requests with identical prefixes all pay full price." The fix: "send 1 request, await the first streamed token ..., then fire the remaining N-1." Also: "N parallel workers each assembling a slightly different prompt over the same context write N separate cache entries and read none of each other's." — [Prompt caching docs](https://platform.claude.com/docs/en/build-with-claude/prompt-caching) (via Claude API skill, cached 2026-10-06)
- Caches are isolated per workspace and model-scoped. A multi-model cascade forfeits cache reuse across models, and a subagent "starts a fresh prefix with no cache shared with the parent." — Claude API skill prompt-caching and cost-optimization references, cached 2026-10-06 ([Prompt caching docs](https://platform.claude.com/docs/en/build-with-claude/prompt-caching))
- Batch:
  - 50% off every token including cache reads and writes; results within 24 hours.
  - "Batch requests are single-shot - no mid-batch tool loop." A tool loop can sometimes be flattened by pre-fetching inputs; in the cookbook example that ran at "roughly half the interactive config's cost" but "held its pass rate less firmly."
  - Cache hits inside a concurrent batch are best-effort.
  - Not available for Managed Agents.

  — [Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence); Claude API skill cost guide (cached 2026-10-06); [Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- Web search pricing: "$10 per 1,000 searches, plus standard token costs for search-generated content. Web search results retrieved throughout a conversation are counted as input tokens, in search iterations executed during a single turn and in subsequent conversation turns." Failed searches are not billed. — [Anthropic Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- Web fetch: no extra charge beyond tokens. An average web page (10 kB) is about 2,500 tokens, a large docs page (100 kB) about 25,000, and a research PDF (500 kB) about 125,000. Use `max_content_tokens` to cap fetches. Code execution is free when used with `web_search_20260209` / `web_fetch_20260209`. — [Anthropic Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- Search controls: the `web_search_20260209` tool supports `max_uses`, `allowed_domains`/`blocked_domains` and `user_location`, and has built-in dynamic filtering that keeps boilerplate out of context (Opus 5.5/5, Sonnet 5.5/5/4.6). — Claude API skill server-tools reference (cached 2026-10-06); [Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- Programmatic tool calling: "24% fewer input tokens on agentic search benchmarks, with a higher score." — Claude API skill cost guide (cached 2026-10-06), citing Anthropic docs ([Programmatic tool calling](https://platform.claude.com/docs/en/agents-and-tools/tool-use/programmatic-tool-calling))
- Output compression: "The one-line answer cost $0.49 per run, the two-line original $0.57, and the memo $1.40. All were 78% to 85% correct." — [Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)
- Context editing is "a context-window tool, not a savings lever"; in Anthropic's measurement it cost more than it saved because each clear rewrites the cache. Compaction saved about a third on a long run and nothing on a short one. — Claude API skill cost guide (cached 2026-10-06)
- Claude Code: subagent results return to the main conversation, and "Running many subagents that each return detailed results can consume significant context." Forks "reuse the parent's prompt cache," so "a fork costs less than a fresh subagent for tasks that need the same context." — [Claude Code subagents](https://code.claude.com/docs/en/sub-agents)

### Inferences
- For 195 parallel workers sharing one brief: put the brief (system prompt + tool list + instructions) byte-identical at the front and put the country name last. Warm the cache with one request, wait for its first token, then launch the rest within the TTL.
- Search fees are a fixed $0.01 per search regardless of model. On Haiku 5.5 they dominate (about 90% of cost in the worked example in section 8), so `max_uses` is the main Haiku cost lever. On Opus or Sonnet, input re-reading of accumulated search results is the bigger share.
- If each worker returns about 5,000 tokens, the orchestrator must ingest about 975K tokens, which is roughly the whole 1M window. Returning ≤1–2K-token structured summaries, or writing full results to files and returning references, is necessary for quality as well as cost.

### Gaps
- Whether the server-side `web_search` tool runs inside Message Batches requests, and how `pause_turn` behaves there, was not verified.
- The live prompt-caching page was not fetched to confirm the 512-token minimum for the 5.5 models.
- No public figure was found for average tokens per web-search result block. The worked example in section 8 treats it as a parameter.

## 6. Claude Code specifics: subagent model selection and costs

### Takeaway
Claude Code resolves a subagent's model in this order: the per-invocation Agent-tool `model` parameter, then the frontmatter `model` (`sonnet`/`opus`/`haiku`/`fable`/full ID/`inherit`), then `CLAUDE_CODE_SUBAGENT_MODEL`, then the main conversation's model. On the Anthropic API the aliases resolve to Opus 5.5 / Sonnet 5.5 / Haiku 5.5. On Bedrock and Google Cloud, `sonnet` resolves to Sonnet 4.5 and `haiku` to Haiku 4.5. That is a likely silent quality trap for "Sonnet sub-agents". By default only 20 subagents run concurrently.

### Cited Findings
- `model` frontmatter: "`sonnet`, `opus`, `haiku`, `fable`, a full model ID such as `claude-opus-5-5`, or `inherit`. When you omit it, Claude Code picks the model in the subagent model order." — [Claude Code subagents](https://code.claude.com/docs/en/sub-agents)
- Resolution order: "1. The per-invocation `model` parameter 2. The subagent definition's `model` frontmatter, where `inherit` selects the main conversation's model 3. The `CLAUDE_CODE_SUBAGENT_MODEL` environment variable ... 4. The main conversation's model." Before v2.1.251 the env var came first. `CLAUDE_CODE_SUBAGENT_MODEL_FORCE=1` (v2.1.257+) forces one model on every subagent. — [Claude Code subagents](https://code.claude.com/docs/en/sub-agents)
- Built-ins: Explore uses the main conversation's model (on Fable sessions it runs on Opus with Anthropic auth); Plan inherits; general-purpose uses `CLAUDE_CODE_SUBAGENT_MODEL` if set, otherwise the main model; `claude-code-guide` uses Haiku; `statusline-setup` uses Sonnet. — [Claude Code subagents](https://code.claude.com/docs/en/sub-agents)
- `effort` frontmatter: "Overrides the session effort level, but not the `CLAUDE_CODE_EFFORT_LEVEL` environment variable." Thinking: "subagents also inherit the main conversation's extended thinking configuration ... There is no per-subagent thinking setting" (v2.1.198+). — [Claude Code subagents](https://code.claude.com/docs/en/sub-agents)
- Limits:
  - `maxTurns` returns partial output when reached.
  - Nesting is allowed up to 3 layers below the main conversation (`CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH`).
  - "By default, when 20 subagents are running in a session, spawning another with the Agent tool fails with `Concurrent subagent limit reached`" (`CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`).
  - "There's no limit on the total number of subagents."

  — [Claude Code subagents](https://code.claude.com/docs/en/sub-agents)
- Isolation: "Each subagent starts with a fresh, isolated context window. It doesn't see your conversation history, the skills you've already invoked, or the files Claude has already read." Subagents "receive only this system prompt plus basic environment details." — [Claude Code subagents](https://code.claude.com/docs/en/sub-agents)
- Alias resolution by provider (`opus` / `sonnet` / `haiku`):

  | Provider | `opus` | `sonnet` | `haiku` |
  |---|---|---|---|
  | Anthropic API | Opus 5.5 | Sonnet 5.5 | Haiku 5.5 |
  | Claude Platform on AWS | Opus 5.5 | Sonnet 4.6 | Haiku 4.5 |
  | Bedrock / Google Cloud Agent Platform | Opus 5.5 | Sonnet 4.5 | Haiku 4.5 |
  | Microsoft Foundry | Opus 4.6 | Sonnet 4.5 | Haiku 4.5 |

  Override with `ANTHROPIC_DEFAULT_SONNET_MODEL` / `_HAIKU_MODEL` / `_OPUS_MODEL`. `opusplan` uses opus in plan mode and sonnet for execution. — [Claude Code model config](https://code.claude.com/docs/en/model-config)
- "If you switch models with `/model`, the switch also reaches subagents that inherit the main conversation's model ... To keep a custom subagent on a smaller model, set `model` in its definition." — [Claude Code model config](https://code.claude.com/docs/en/model-config)
- Claude Code effort defaults (per the model-config page): Opus 5.5, Sonnet 5.5 and Haiku 5.5 default to `medium`; Opus 5, Sonnet 5 and Opus 4.8 to `high`; Opus 4.7 to `xhigh`. — [Claude Code model config](https://code.claude.com/docs/en/model-config). Contrast the API, where Sonnet 5.5 defaults to `high` — [Effort docs](https://platform.claude.com/docs/en/build-with-claude/effort)
- Cost docs:
  - Average enterprise cost is "around $13 per developer per active day and $150-250 per developer per month."
  - Agent teams: "Use Sonnet for teammates," keep teams small, and token usage "is roughly proportional to team size."
  - "For simple subagent tasks, specify `model: haiku`."
  - The `/usage` "Prompt cache (main)" line "covers the main conversation only, not subagents."

  — [Claude Code: Manage costs](https://code.claude.com/docs/en/costs)
- Managed Agents (API-hosted alternative): max 25 concurrent threads; worker tokens are billed at the worker model's own rates. — [Managed Agents docs](https://platform.claude.com/docs/en/managed-agents/overview) (via Claude API skill multiagent reference, cached 2026-10-06)

### Inferences
- For a 195-country run in Claude Code: set `model` explicitly in the subagent definition (or per invocation), and on non-Anthropic providers pin a full model ID (e.g. `claude-sonnet-5-5`) instead of the `sonnet` alias. Expect about 10 waves at the default 20-concurrent limit, which interacts with the 5-minute cache TTL. Waves under 5 minutes apart keep the shared prefix warm.
- Since subagents get only their own system prompt plus environment details, the per-country brief must be self-contained. The orchestrator's context does not carry over.

### Gaps
- The Claude Code `CLAUDE_CODE_SUBAGENT_MODEL` description was truncated in the fetch.
- Whether Claude Code subagents spawned in parallel share a prompt-cache entry (beyond the documented fork case) is not documented on the pages read.

## 7. Advisor / escalation patterns and routing/cascade literature

### Takeaway
Academic cascades and routers report large savings: FrugalGPT up to 98% while matching GPT-4; RouteLLM over 85% on MT Bench at 95% of GPT-4 quality. Anthropic's own 2026 measurements are more sober. Advisor pairings with Haiku 5.5 or Sonnet 5.5 executors never consulted the Opus 5.5 advisor (0 of 198 questions), and Anthropic recommends sweeping effort on a single model before adding a second. Escalation that works needs a cheap external failure signal, not self-assessed confidence.

### Cited Findings
- FrugalGPT (Chen, Zaharia, Zou; arXiv 2305.05176, May 2023): strategies are "1) prompt adaptation, 2) LLM approximation, and 3) LLM cascade". It "can match the performance of the best individual LLM (e.g. GPT-4) with up to 98% cost reduction or improve the accuracy over GPT-4 by 4% with the same cost." — [arXiv:2305.05176](https://arxiv.org/abs/2305.05176)
- RouteLLM (Ong et al.; arXiv 2406.18665, June 2024, rev. Feb 2025): routers "reduce costs by over 2 times in certain cases without compromising the quality of responses." — [arXiv:2406.18665](https://arxiv.org/abs/2406.18665)
- The LMSYS blog (2024-07-01) reports "cost reductions of over 85% on MT Bench, 45% on MMLU, and 35% on GSM8K" vs GPT-4 only, while reaching 95% of GPT-4 performance. Only 26% of calls went to GPT-4 on MT Bench (14% with LLM-judge-augmented data) and 54% on MMLU. It was "over 40% cheaper" than commercial routers at matched MT Bench performance. — [LMSYS RouteLLM blog](https://lmsys.org/blog/2024-07-01-routellm/)
- Anthropic advisor results:
  - "Haiku 5.5 and Sonnet 5.5 executors with an Opus 5.5 advisor: Neither consulted on any of 198 questions, so neither gained beyond noise."
  - Opus 5.5 `high` + Fable 5.1 advisor scored 90.1% at $2.92 per attempt, 1.7 points above Opus 5.5 alone at about 2.1x the cost; Opus 5.5 alone at `xhigh` scored 91.1% for $4.11.
  - An Opus 5.5 `low` executor consulted on 1 of 300 Chartography tasks and scored 7 points below Opus 5.5 alone.
  - "Price the advisor's model alone at low effort first. Measure the consult rate. Prompt for consultation, since the advisor tool's built-in description alone under-calls."

  — [Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)
- Advisor tool mechanics: `advisor_20260301` (beta `advisor-tool-2026-03-01`). The advisor must be at least as capable as the executor. A Sonnet 5.5 executor accepts Opus 5.5 / Opus 5 / Fable 5.x / Sonnet 5.5 advisors but rejects Opus 4.8/4.7/4.6, Sonnet 5 and Sonnet 4.6. Options are `max_uses`, `max_tokens` and `caching`. — Claude API skill tool-use reference (cached 2026-10-06), [Advisor tool docs](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview)
- Anthropic's guidance on consult gating: "gating the consult well requires a cheap signal; asking the executor to recognize the hard cases itself demands the very judgment it's missing." — Claude API skill cost guide (cached 2026-10-06), summarizing [Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)
- Re-run failures at higher effort is a measured cascade that works: about 97% pass at $0.17 vs 95.3% at $0.29 for always-high, given a reliable failure signal (tests). — [Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)
- Cascade cache penalty: "caches are model-scoped, so a cascade forfeits cache reuse across its models"; "measure the simpler alternative first - the most capable model at lower effort." — Claude API skill (cached 2026-10-06)

### Inferences
- For per-country fan-out, the most defensible escalation is check-then-retry. Run all countries on a cheap worker config, run a deterministic or LLM-judge check per country (required fields present, citations present, dates recent, cross-source agreement), and re-run only failing countries on a stronger model or higher effort. This mirrors the measured "re-run failures" result and FrugalGPT's cascade-with-scorer design.
- Do not rely on cheap workers self-reporting low confidence or calling an advisor on their own. Anthropic measured zero consultations from Haiku 5.5 and Sonnet 5.5 executors.
- The FrugalGPT and RouteLLM savings were measured on 2023–24 model pairs (GPT-4 vs much weaker models). With today's narrow Opus 5.5 / Sonnet 5.5 price gap (2x), the upside of routing between those two is capped near 50%. The Haiku vs Sonnet/Opus gap (20–40x) is where routing has large upside.

### Gaps
- No published results were found for an Opus 5.5 orchestrator escalating failed Haiku 5.5 / Sonnet 5.5 worker outputs on research tasks.
- No 2026 routing paper evaluated on Claude 5.x models was found.

## 8. Worked cost-estimate framework (e.g., 195 sub-agents × N searches)

### Takeaway
Estimate per-worker cost from five meters: shared-prefix writes, accumulated-context cache reads (which grow with N²), new content, output and thinking, and search fees. For 195 workers × 10 searches × about 5K tokens per search result, the estimate is roughly $22 on Haiku 5.5, $63 on Sonnet 5.5, $97 on Opus 5.5 and $200 on Fable 5.1 with caching on. Without caching, Sonnet 5.5 is about $147. Cost grows super-linearly with searches per worker.

### Cited Findings
- Input meters and multipliers (5m write 1.25x, 1h write 2x, read 0.1x / 0.05x / 0.025x by model) and web search at $0.01 per search — [Anthropic Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- Web search results "are counted as input tokens, in search iterations executed during a single turn and in subsequent conversation turns", so each later iteration re-reads earlier results. — [Anthropic Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- "Every turn of an agentic task resends the entire growing conversation ... task cost grows with roughly the square of turn count. Caching ... reprices everything already cached to the model's cache-read rate." — Claude API skill cost guide (cached 2026-10-06), based on [Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)
- Typical page sizes for fetch: 10 kB page ≈ 2,500 tokens; 100 kB docs page ≈ 25,000 tokens. The 4.7+ tokenizer produces about 30% more tokens than older models. — [Anthropic Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- The Pricing page's own worked example: 10,000 support tickets at about 3,700 tokens each on Haiku 4.5 ($1/$5) comes to about $37. — [Anthropic Pricing](https://platform.claude.com/docs/en/about-claude/pricing)
- Estimating cache hit rate without data: "hit rate ~ 1 - e^(-lambda·TTL)" for Poisson arrivals. — Claude API skill cost guide (cached 2026-10-06)
- Measure before launch: the token-counting endpoint (`/v1/messages/count_tokens`) returns counts without running inference, but it rejects server tools. For those, read billed input off a `max_tokens: 1` request. — Claude API skill cost guide (cached 2026-10-06); [Token counting docs](https://platform.claude.com/docs/en/build-with-claude/token-counting)
- Cost per completed task, not per token: "a cheaper model that fails still bills its tokens, then the retry"; "Price the tail, not the median." — Claude API skill cost guide (cached 2026-10-06), summarizing [Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)

### Inferences
**Formula per worker.** Variables:

- P = shared prefix (system + tools + brief, including the 286-token tool system prompt)
- N = searches; R = tokens per search result
- O = output tokens, including thinking
- p_in, p_w, p_r, p_out = input, cache-write, cache-read and output prices

Assume each search is one model iteration and every new block is written to cache once:

- Cache writes ≈ P + N·R (billed at p_w = 1.25 × p_in for the 5m TTL)
- Cache reads ≈ N·P + R·N(N−1)/2 (billed at p_r)
- Output ≈ O (billed at p_out)
- Search fees = $0.01 × N
- Worker cost ≈ p_w·(P+N·R) + p_r·(N·P + R·N(N−1)/2) + p_out·O + 0.01·N
- Uncached variant: replace p_w and p_r with p_in.

**Worked example** (illustrative assumptions, not measured): P = 3,000, N = 10, R = 5,000, O = 4,000. That gives 53,000 write tokens, 255,000 read tokens and a peak context of about 53K. ×195 workers:

| Worker model | Per worker (cached) | ×195 (cached) | ×195 (no caching) | Search-fee share (cached) |
|---|---|---|---|---|
| Haiku 5.5 | $0.111 | ~$22 | ~$26 | ~90% |
| Sonnet 5.5 (read $0.20) | $0.324 | ~$63 | ~$147 | ~31% |
| Sonnet 5.5 (read $0.10, if the text price is right) | $0.298 | ~$58 | ~$147 | ~34% |
| Opus 5.5 | $0.496 | ~$97 | ~$275 | ~20% |
| Fable 5.1 | $1.026 | ~$200 | ~$659 | ~10% |

**Sensitivity to N** (Sonnet 5.5, cached, per 195 workers):

| N | Total | Peak context per worker |
|---|---|---|
| 3 | ~$23 | ~18K |
| 5 | ~$34 | ~28K |
| 10 | ~$63 | ~53K |
| 20 | ~$136 | ~103K |
| 30 | ~$229 | ~153K |

The roughly N² growth makes `max_uses` and narrower per-worker scope the strongest levers. At N≈20, a Haiku 5.5 worker would cross the 100K price step.

**Batch.** If the work could be flattened into single-shot batch requests, tokens would be 50% off, but search fees would not be. This is unverified for server-side web search (section 5 gaps).

**Orchestrator ingest.** 195 × k tokens per result = 97.5K (k=500), 195K (k=1K), 390K (k=2K) or 975K (k=5K). On Opus 5.5 that is $0.39–$3.90 uncached input to read once. At k=5K it nearly fills the 1M window, so cap worker outputs.

**Pre-launch checklist:**
- Measure P with count_tokens.
- Run 3–5 pilot countries and read `usage` (input, cache_creation, cache_read, output, `server_tool_use.web_search_requests`) to get the real N, R and O.
- Multiply by 195. Add about 20–40% for the tail and for re-runs; the tail figure follows Anthropic's finding that the top 10% of problems carried 43% of spend.
- Add the orchestrator synthesis cost.

### Gaps
- No published average for tokens per `web_search` result block was found. R = 5,000 is an assumption to be replaced with pilot measurements.
- Thinking-token volume per worker at each effort level for Haiku 5.5 / Sonnet 5.5 on research tasks is not published. O is an assumption.
- How the server-side web search loop iterates (one sampling pass per search vs batched searches per pass) affects the N² read term and was not verified.
