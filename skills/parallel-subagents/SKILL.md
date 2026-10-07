---
name: parallel-subagents
description: Plan, brief, run and check parallel sub-agents so cheaper worker models (Sonnet, Haiku) return high-quality, consistent results at low cost. Use this skill whenever you are about to launch several sub-agents or Agent/Task calls at once, delegate work to a cheaper model, fan one task out over a list (per country, company, file, URL, ticket, document), split a big job into parallel parts (research subtopics, codebase areas, review lenses, independent fixes), run voting or verification panels, or write a Workflow script with many agents. Also use it when the user asks why sub-agent results were poor, inconsistent or expensive, or wants a multi-agent job cheaper or more reliable, even if they never say "parallel". Skip it for a single quick sub-agent lookup.
---

# Parallel sub-agents

You are the orchestrator. Your workers are capable but literal strangers: each sees only the
brief you send, can't ask you anything, and, on cheaper models especially, takes instructions at
face value, stops early and fills gaps with guesses. Most disappointing multi-agent results come
from the orchestration, not the worker model: vague briefs, decisions left to each worker, the
wrong model or effort, results flooding the orchestrator's context, and nothing checking the output.

Three ideas carry most of the weight:

1. **Decide once, centrally.** Every choice a worker would otherwise make alone (definitions,
   scope, format, sources, what to do when stuck) is made by you, written once, and sent
   identically to every worker.
2. **Pay for the finished task, not the token.** Pick model and effort per role, cap tool calls,
   keep returns short, share a cacheable prefix, re-run only what failed. A cheap worker that
   fails still bills its tokens, then the retry.
3. **Check before you trust.** Cheap code checks on everything, a judge where it matters, a
   fresh-context verifier on what's flagged, a human look at a sample.

## Scale the process to the job

| Job | Follow |
|---|---|
| **Quick**: 2-5 agents, one-off | The quick path below |
| **Medium**: 6-20 agents, or one template over a short list | Sections 1-11; the pilot (7) when a fan-out has more than about 10 items |
| **Large**: 20+ agents, a long item list, or a job you'll repeat | Everything, including the pilot (7) |

**Quick path.** (a) Confirm parallel is worth it (section 1). (b) Write each brief with the
checklist in section 4 and the matching recipe in `references/task-playbooks.md`; this decides
quality more than anything else. (c) Set model and effort on every launch (section 5). (d) Launch
the agents in one message and ask for short, structured returns. (e) Check every result before you
use it: did the agent actually do the work (tool calls, sources read, tests run), does it answer
the brief, does it contradict the others? For review or verification findings, have a
fresh-context validator check each finding before you report it (section 9). (f) Synthesize,
stating gaps and conflicts openly.

## 1. Decide whether to go parallel, and in what shape

Parallel agents buy breadth, speed and clean contexts, not savings: they use more total tokens
than one agent (Anthropic measured multi-agent research at about 15x the tokens of a chat).
They pay off when the work splits into independent pieces and adds up to more than one context
can hold well, or when independent perspectives raise confidence. For one dependent chain of
work, or work that fits in one context, a single agent at lower effort was cheaper in every case
Anthropic measured.

- **Good fits**: reading, searching, researching, reviewing, extracting, classifying, testing
  separate hypotheses. Read-heavy work with independent parts.
- **Careful**: parallel writes. Only with disjoint write sets (different files or modules),
  interfaces agreed first, worktree isolation, and one integrator afterwards. Parallel writers
  make conflicting implicit decisions.
- **Don't**: for a dependent chain, a small task, work that needs a shared evolving context, or a
  lookup you could do with one tool call. If you are yourself a sub-agent, don't fan out further
  unless your brief asks you to.

Pick the shape (most jobs combine them):

| Shape | What it is | Main risk | Key control |
|---|---|---|---|
| **Fan-out** | One template over N items (countries, files, URLs, tickets, documents) | Inconsistent results across items | Shared contract, item last, schema, manifest |
| **Split** | One goal cut into different sub-tasks (subtopics, code areas, review lenses) | Overlaps and gaps | Mutually exclusive, jointly complete split; tell each agent what the others cover |
| **Redundant** | The same question to k independent agents (votes, refuters, best-of-N designs) | Correlated errors | Independence, different lenses or prompts, aggregation rule fixed in advance |
| **Staged** | Work, check, repair, synthesize, with a model per stage | Paying top price everywhere | Cheap stages first; escalate on an external signal |

**How many agents**: the fewest that cover the work. Anthropic's research lead used 1 agent for
simple fact-finding, 2-4 for comparisons and 10+ only for broad research with clearly divided
responsibilities; spawning 50 agents for a simple query was one of its documented early failures.
In a fan-out, give each tool-using item its own agent (packing items into one agent re-reads all
earlier items' results on every turn and degrades recall). Group only tool-free items (classify or
extract text you already have), 4-8 per call, and check grouped results against single-item ones.

**When the user has already chosen** the model, the number of agents or the split, follow that
choice. If another option looks clearly cheaper or better, say so in one line with the reason,
rather than overriding it.

## 2. Choose the runtime

| Situation | Runtime |
|---|---|
| Up to about 10 open-ended tasks, or up to 20 short ones | Agent tool (Task in some versions): all calls in one message, so they run concurrently |
| A known list of ~20+ items, or work with check and repair stages | Workflow tool: `pipeline()` over the items (opt-in rule below) |
| Very large or unattended runs, or outside Claude Code | A script looping headless `claude -p` with `--json-schema`, or the Agent SDK with a budget cap |
| Tool-free calls over inputs you already have | Message Batches API (50% off) |

- **Agent tool**: by default up to 20 sub-agents run at once, and every result lands in your
  context; 195 returns of 1,500 tokens is about 290K tokens. Ask for short returns and have
  workers write details to files.
- **Workflow**: the script owns the loop, which gives deterministic coverage, schema-validated
  returns, labels and resume. Up to 16 agents run concurrently (fewer on small machines),
  1,000 agents per run. Agents with the same model, effort, agent type, tools, schema and working
  directory share a prompt-cache prefix.
- **Workflow opt-in**: use the Workflow tool only when the user opted in: they typed this skill's
  name (`/parallel-subagents`; loading the skill yourself doesn't count), asked in their own words
  for parallel agents or a workflow ("one agent per country", "fan out", "use a workflow"), or
  ultracode is on. Otherwise describe the plan, the agent count and the estimated cost, and ask.
  If they decline, run Agent-tool waves of up to 20 workers that write files and return one line,
  or the headless loop in `references/runtimes.md`.
- The session's workflow size guideline (under 10 agents by default, under 5 on Pro) is advice,
  not a cap. When the job needs more agents, say the count and cost out loud ("one agent per
  country: 195 agents, about $60") instead of silently packing items into fewer agents.
- Load the `workflow-authoring` skill before writing a script. `references/runtimes.md` has a
  fan-out, check and repair sketch, a headless loop and a worker definition.

## 3. Make the shared decisions before dispatch

A literal worker turns every unstated convention into a private decision, and 20 private decisions
make 20 incompatible results. Before writing any brief, list what each worker would otherwise decide
alone, and decide it:

- what each deliverable or field means, what counts and what doesn't, and the edge cases;
- units, formats, naming, language, and the reference date ("in force on <today>");
- the source policy (preferred, acceptable, avoid), or for code the conventions and the files in
  and out of bounds;
- what to do with missing, conflicting or ambiguous information;
- identity and disambiguation ("Georgia the country, not the US state"; which list defines the items);
- the output schema and where results go.

Write this once as the **shared contract** and send it byte-identical to every worker of the same
kind, with the variable part (the item or sub-task) last. Identical text is what makes outputs
comparable, and it lets workers share a prompt cache. Give it a version (`contract_v1`) and have
workers stamp it on their output, so drift is visible and stale results can be re-run. For a split,
the contract also lists all the sub-tasks so every worker knows its boundaries.

## 4. Write each brief for a capable stranger

A sub-agent starts with a fresh context. It doesn't see this conversation, the files you read, the
skills you loaded, or what the user said. It does get CLAUDE.md (except the Explore and Plan
types), so don't paste that, but restate anything from the conversation it needs. Test every brief:
could a capable contractor who has never seen this conversation do the job well from this text
alone, without asking a single question? If not, add what they would ask for.

Every brief covers these nine parts (fill-in template: `references/brief-template.md`):

1. **Objective and why**: one objective, and what the result will be used for, so the worker can
   make sensible trade-offs.
2. **Context**: today's date; the user's request in their own words; how this piece fits; what the
   other workers cover.
3. **Inputs**: the exact items, paths, IDs or URLs, and what's already known so it isn't redone.
4. **Scope**: what's in, what's out, and what not to do (edit files, launch sub-agents, widen the task).
5. **Shared contract**: the decisions from section 3.
6. **Method and budget**: where to look first and which tools; an expected range of tool calls, a
   hard stop, and a stopping rule ("stop when every field has a status").
7. **Uncertainty rule**: "not found", "conflict" and "blocked" are acceptable answers; never fill a
   gap with a guess or from memory; list what was tried.
8. **Output contract**: the exact format or schema, a length limit, where to write files, and what
   to return (a short status object when details go to a file).
9. **Check before returning**: a concrete checklist (every field has a status, every claim has a
   source the worker actually read, the tests ran).

### Cheaper workers need push; stronger ones need restraint

These come from Anthropic's model-specific testing and from what goes wrong in practice. They are
the main levers for getting good work from Sonnet and Haiku:

- **Be specific, not exhortative.** "Be thorough" and "think deeply" add nothing. "Confirm each
  figure in two independent sources, primary first" does.
- **Spell out scope.** Literal models don't carry a rule from one item to the next. Write "apply
  this to every field, not just the first".
- **Remove anything that discourages tool use** ("minimize tool calls", "only search if
  necessary"). On Sonnet 5.5 it suppresses the very searches that catch changed facts. Use a
  budget range and a stopping rule instead.
- **Give today's date and a targeted nudge** to check things that change (the template has
  Anthropic's tested wording). Avoid blanket "always search" rules: on Haiku 5.5 they caused
  needless searches on half of the prompts that needed none, with no accuracy gain.
- **Make "not found" legitimate**, and show it: give one complete example output with clearly
  fictional values that includes a not-found case. A literal model shown only filled fields learns
  that every field always gets a value.
- **Keep briefs tight**: about 300-800 words, critical rules first and repeated in one line at the
  end, the variable item last. Long prompts made Haiku skip searches and stop early, especially at
  `low` effort.
- **Add the tested lines** for the worker's model from the template: the keep-working-then-stop
  paragraph, "Think the problem through before you answer." before structured answers, and, for
  Haiku, the line saying JSON applies only after tool calls.
- **Stronger models need the opposite.** Opus verifies on its own, over-verifies when told to,
  widens scope and delegates readily. Tell it what not to do and when to stop.

## 5. Choose model and effort for every agent, explicitly

Leaving `model` unset makes a sub-agent inherit your model, usually the most expensive one;
leaving effort unset inherits the session's. This skill is your instruction to set **both** on
every launch, per role:

| Role | Model | Effort |
|---|---|---|
| Mechanical checks: schema, counts, links, tests, diffs | code, not a model | - |
| Extracting, classifying or reformatting text already in hand; locating files | Haiku | `medium` (`high` for strict schemas or knowledge work) |
| Search-heavy research; codebase exploration that needs judgment; per-item judging | Sonnet | `medium`; `high` for long or hard items |
| Reviewing code or text through one lens (correctness, security, a style guide) | Sonnet | `medium` |
| Ambiguous judgment, conflicts, repairs after a cheap failure, hard reasoning, writing the contract, synthesis | Opus (often you) | `medium` |
| The hardest long-horizon work, rarely as a worker | Fable | as needed |

- **Never run Sonnet or Haiku workers that must search or verify at `low` effort.** Anthropic
  documents skipped searches, early stops and skipped checks there. `low` suits short mechanical
  stages.
- **Compare cost per passing result.** On current prices Opus is 2x Sonnet per token while Sonnet
  is 20x Haiku, and cheap models often need more turns and retries on multi-step work. For a large
  job, pilot Opus at `low` against Sonnet at `medium` and keep whichever is cheaper per item that
  passes your checks.
- Mechanics: the Agent tool takes `model` as an alias (`haiku`, `sonnet`, `opus`, `fable`) and, in
  current Claude Code, an `effort` parameter; if yours has no `effort` parameter, set effort in an
  agent definition (`references/runtimes.md`). Workflow `agent()` takes `model` and `effort`
  options. On every provider other than the Anthropic API the aliases point to older models
  (`haiku` is Haiku 4.5; `sonnet` is Sonnet 4.5 or 4.6), so pin full model IDs in agent
  definitions there. `CLAUDE_CODE_SUBAGENT_MODEL_FORCE` overrides every per-call choice. Prices,
  defaults and evidence are in `references/models-and-costs.md`.

## 6. Estimate and cap the cost before launch

For more than a handful of agents, estimate first. `scripts/estimate_cost.py` does the arithmetic
for every model at once; a measured pilot item times N, plus 20-40% for the expensive tail, is
better. Tell the user the estimate when it's large, and cap the spend: `--max-budget-usd` for
headless runs, `max_budget_usd` in the Agent SDK. In a Workflow, bound the agent count and the tool
calls per agent; a token target in the user's message, such as "+500k", becomes a hard ceiling on
output tokens that the script can read through `budget`.

The biggest levers, roughly in order:

1. **Fewer, right-sized agents.** Don't parallelize what doesn't need it.
2. **Tool-call budgets.** Every turn re-reads all earlier results, so cost grows faster than the
   number of tool calls: a research worker doing 30 searches costs several times one doing 10.
3. **Short returns.** Workers write details to files and return a status line. In Anthropic's
   tests a one-line answer cost about a third of a memo at similar accuracy.
4. **A byte-identical prefix for prompt caching.** Nothing variable (timestamps, item names,
   counters) before the item slot. Parallel requests can't read a cache entry until the first
   response starts streaming, so start one worker first and launch the rest a few seconds later
   (Workflow does this for you).
5. **The cheapest model and effort that passes each role's checks**, then escalate only the
   failures.
6. **The Batch API** for tool-free per-item calls (50% off).
7. **Repair only failing items**, never the whole set.
8. **No agent teams for cost-sensitive work**: they used about 7x the tokens of a standard session
   in Anthropic's measurement.

## 7. Pilot before the full run

For a fan-out of more than about 10 items, or any job you'll repeat, run 3-5 items first on the
exact brief, model, effort and tools, deliberately including hard cases (data-poor, ambiguous
identity, sources not in English, unusual structure). Have pilot workers also report the queries
they ran, the sources they opened and a three-line note on their method, and read those with the
outputs: where did a worker search badly, stop early, misread the brief or guess? Fix the contract
and re-pilot until a round turns up no new failure mode. Then freeze the contract, write the judge
rubric from what you saw, run a canary of 10-20 items with full checks, and only then run the rest.
For a split, the pilot is a dry read: re-read each brief against the stranger test, and check the
split for overlaps and gaps before launching.

## 8. Dispatch and track

- Launch independent agents together (several Agent calls in one message, or one `pipeline()`),
  not one per turn. Prose such as "I'll delegate this" doesn't launch anything; make the calls.
- Label every agent with its item or sub-task ID.
- Have workers write results to `<out_dir>/<id>.json` (or `.md`) and return a short status. Take
  the ID from the file name you assigned, not from text the worker wrote.
- Keep a manifest: every launched ID ends as ok, failed or missing. A missing result is unknown,
  not done.
- Background agents notify you when they finish. Don't poll, and don't predict results you
  haven't received.

## 9. Check in layers, cheapest first

- **Tier 0, code, on everything**: the output exists and parses; required fields are present with
  a status; values are in plausible ranges; URLs are well formed; for code, tests and lint pass;
  outliers stand out against peers; the worker actually did the work (sub-agents have reported
  "completed" after zero tool calls; a required, non-empty `queries_tried` or `files_read` list is
  a cheap proxy). `scripts/check_outputs.py` checks presence, parsing, required keys, statuses,
  the contract version and URL format, and writes the IDs to repair; dead links and outliers need
  checks of your own.
- **Tier 1, a judge per item or on a sample**: a different prompt from the worker's, ideally a
  different model; pass, fail or unknown per dimension (accurate, supported by its source,
  complete, followed the contract) with a one-line reason.
- **Tier 2, a fresh-context verifier on failures, low-confidence items and outliers**: it re-checks
  the claim against the source, or reproduces the bug, without seeing the worker's reasoning, and
  reports refuted and unverifiable separately. Tell it to flag only problems that change
  correctness; a reviewer asked to find gaps will usually report some, even in sound work.
- **Tier 3, a person**: you or the user on a random sample plus every failure.

For a split, add an integration check: do the parts contradict each other, overlap or leave gaps,
and did the workers assume different things?

## 10. Repair only what failed

| Failure | Repair |
|---|---|
| Infrastructure: error, empty, truncated | Retry once with the same brief |
| Format: schema or validation errors | Retry with the validator's message |
| Quality: the judge or verifier failed it | Original brief plus the specific critique, one tier up (Haiku, then Sonnet, then Opus), for that item only |
| The same failure on many items | The contract is wrong: fix it and re-pilot; don't patch items one by one |

Never resend an unchanged brief to a stronger model and hope. Stop after two repair rounds and mark
the item for a person. In a Workflow, run repairs as a separate pass over the failing IDs:
relaunching a failed run re-runs the failed agent and every agent started after it.

## 11. Synthesize from the records

- Merge structured results in code and compute coverage: how many items or fields were found, not
  found, or in conflict.
- Give the synthesizer the merged table or files plus the coverage report, not paraphrased
  summaries, and have it copy values and citations verbatim.
- State gaps and conflicts openly; never smooth them over.
- Don't redo a worker's job yourself. If a result is wrong, send it back through repair.

In one study of a deep-research system, 85% of the errors in final reports came from the
orchestrator, not the workers. Synthesis is where care pays most.

## Symptoms and fixes

| Symptom | Likely cause | Fix |
|---|---|---|
| Workers duplicate work or miss parts | Vague split, no boundaries | Section 1 split rules; tell each worker what the others cover |
| Results can't be compared | Private decisions on units, scope, dates | Shared contract, identical prefix (section 3) |
| Stale or confidently wrong facts | Answering from memory | Date plus change nudge; no "minimize tool calls"; cite fetched sources |
| Shallow answers after 1-2 searches | `low` effort, no budget, long brief | `medium`+, a budget range and stopping rule, a shorter brief |
| Plausible values, dead links | Pressure to fill every field | Not-found status, quotes with sources, Tier 0 link checks |
| Bill far above plan | Inherited model, unbounded tool loops, long returns | Explicit model and effort, budgets, short returns, caching |
| Orchestrator drops or garbles results | Context flood, paraphrasing | Files, a manifest, a merge in code |
| "Done" with nothing done | No checks | Tier 0 tool-use check, a verifier |
| Parallel edits conflict | Shared files, implicit design decisions | Disjoint write sets, worktrees, one integrator |
| You end up doing the work yourself | Delegation stated only in prose | Launch the agents through the runtime |

## Reference files

- `references/brief-template.md`: read before writing briefs. The fill-in template, the tested
  model-specific lines, judge, verifier and repair prompts, and a before-and-after example.
- `references/models-and-costs.md`: read when choosing models or effort, or estimating cost. Dated
  prices, effort defaults, alias pitfalls, caching rules and the evidence behind section 5.
- `references/task-playbooks.md`: read for the kind of work at hand. Per-item research,
  multi-angle research, codebase exploration, code review, parallel code changes, debugging,
  extraction and classification, content at scale, design panels, verification panels.
- `references/runtimes.md`: read when using the Agent tool at scale, a Workflow, a headless loop,
  the Agent SDK or the Batch API.
- `scripts/estimate_cost.py`: pre-launch cost estimate for every model. Run with `--help`.
- `scripts/check_outputs.py`: Tier 0 checks over a results folder, plus the IDs to repair.
