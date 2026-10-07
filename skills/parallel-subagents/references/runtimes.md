# Runtimes

How to run parallel workers in Claude Code and around it. Limits and flags were checked against
the Claude Code docs on 2026-10-07; confirm against the current docs if something fails.

Contents
1. Agent tool (Task in some versions)
2. A reusable worker definition
3. Workflow tool
4. Headless loop with `claude -p`
5. Agent SDK
6. Message Batches API

## 1. Agent tool (Task in some versions)

- **Launch together**: put several Agent calls in one message and they run concurrently. They run
  in the background by default and notify you when done; run one in the foreground only when your
  very next step needs its result.
- **Per-call settings**: `subagent_type`, `model` (an alias: `haiku`, `sonnet`, `opus`, `fable`),
  `isolation: "worktree"` for agents that edit files in parallel, and, in current Claude Code,
  `effort`. If your Agent tool has no `effort` parameter, set effort in a worker definition
  (section 2).
- **Types**: `general-purpose` has all tools. `Explore` is read-only, skips CLAUDE.md and reads
  excerpts, which is good for locating code but not for review. Custom types come from
  `.claude/agents/*.md`.
- **Limits**: 20 sub-agents running at once by default (`CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS`);
  a 21st launch fails with "Concurrent subagent limit reached". Nesting goes up to 3 levels below
  the main conversation (`CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH`). There's no cap on the total
  launched in a session.
- **Context cost**: each result lands in your context, so ask for short returns and have workers
  write details to files.
- **Tool limits**: a per-call prompt can't enforce which tools a worker uses. To restrict tools,
  use a custom agent definition with a `tools` list.

## 2. A reusable worker definition

A definition fixes the model, effort, tools and turn cap for every worker of one kind, and its
system prompt is identical across workers, which helps caching. Put generic process rules here and
the job-specific contract at the start of each task message.

```markdown
---
name: item-researcher
description: Researches exactly one assigned item for a fan-out job and writes one JSON record. Use only when an orchestrator assigns an item.
tools: WebSearch, WebFetch, Read, Write
model: sonnet
effort: medium
maxTurns: 25
---
You research one item per task for an orchestrator that merges many records like yours.
Follow the contract in the task message exactly, and apply every rule to every field.
Record a value only if you read it on a page you fetched in this session, and cite that page.
"not_found" with the queries you tried is a useful answer; a guessed value is not.
Write exactly one file, at the path the task gives, then return only the status object it asks for.
Do the work yourself; don't launch sub-agents. Keep working until every field has a status, then
stop and return.
```

- Frontmatter `model` accepts `sonnet`, `opus`, `haiku`, `fable`, a full ID such as
  `claude-sonnet-5-5`, or `inherit`. Use full IDs on Bedrock, Google Cloud or Foundry, where the
  aliases point at older models.
- `maxTurns` ends a runaway worker; its output is then marked partial.
- Other fields include `disallowedTools`, `isolation: worktree`, `omitClaudeMd` and `background`.

## 3. Workflow tool

**When you may use it**: only after the user opts in: they typed `/parallel-subagents` (loading
the skill yourself doesn't count), asked in their own words for parallel agents or a workflow, or
turned ultracode on. Otherwise describe the plan, the agent count and the cost, and ask; if they
decline, use Agent-tool waves of up to 20 or the headless loop (section 4). The session's size
guideline (under 10 agents by default, under 5 on Pro) is advice: when the job needs more, state
the count and the cost before running.

**Load the `workflow-authoring` skill before writing a script.** The essentials:

- `agent(prompt, {label, phase, schema, model, effort, isolation, agentType})` spawns one agent.
  With `schema` it returns a validated object (Claude Code retries validation up to 5 times);
  without, its final text. It returns `null` when the agent is skipped or dies, so filter with
  `.filter(Boolean)`.
- `pipeline(items, stage1, stage2, ...)` runs each item through the stages with no barrier
  between them. Stages get `(previousResult, originalItem, index)`. Make it your default.
- `parallel(thunks)` is a barrier; use it only when a stage needs every earlier result (dedup,
  "zero found, skip verification").
- `args` carries input from the tool call: pass the date, the item list and the contract here.
  `Date.now()`, `Math.random()` and argument-less `new Date()` throw, so the date must arrive
  through `args`.
- The script itself has no filesystem access. Agents with a write tool can write files.
- Limits: up to 16 agents run at once (fewer on small machines; up to 256 with
  `CLAUDE_CODE_WORKFLOW_MAX_CONCURRENT_AGENTS`), 1,000 agents per run, 4,096 items per
  `pipeline()` or `parallel()` call. A "Large workflow" warning appears above 25 agents or 1.5M
  projected tokens.
- Caching: agents with the same model, effort, agent type, tools, schema and working directory
  share a cached prefix, and siblings wait up to 5 seconds for the first one to start.
- Resume: relaunching after a failure reuses completed agents up to the first failed one, then
  re-runs it and every agent started after it. Run repairs as a separate workflow over the
  failing IDs.
- Spend: a token target in the user's message, such as "+500k", is a hard ceiling on output
  tokens; the script reads it through `budget` (`budget.total`, `budget.remaining()`). Without
  one, bound the agent count and the tool calls per agent.
- A run can be saved from `/workflows` as a reusable command that takes `args`.

**What the script returns lands in your context.** Up to a few dozen small records, return them
directly. For bigger jobs, have workers write `out/<id>.json` and return a short status, have
judges read the file, and return only statuses and verdicts. Then run
`scripts/check_outputs.py` on the folder.

Sketch of a large fan-out with checks (adapt the schemas and prompts; check option names against
`workflow-authoring`):

```javascript
export const meta = {
  name: 'fanout-with-checks',
  description: 'Research each item into a file, judge each record, return statuses and verdicts',
  phases: [{ title: 'Research' }, { title: 'Judge' }],
}
// args: { date: 'YYYY-MM-DD', outDir: 'out', contract: '<shared contract text>',
//         judgeRubric: '<rubric text>', items: [{ id: 'FRA', name: 'France' }, ...] }
const { date, outDir, contract, judgeRubric, items } = args

const STATUS = { type: 'object', required: ['id', 'status', 'path'], properties: {
  id: { type: 'string' }, status: { type: 'string', enum: ['ok', 'partial', 'failed'] },
  path: { type: 'string' }, summary: { type: 'string' } } }
const VERDICT = { type: 'object', required: ['id', 'overall', 'critique'], properties: {
  id: { type: 'string' }, overall: { type: 'string', enum: ['pass', 'fail', 'unknown'] },
  critique: { type: 'string' } } }

// Shared text first, item last: identical prefixes keep results comparable and share the cache.
const brief = (it) => `${contract}\nToday's date is ${date}.\n<item>\nid: ${it.id}\nname: ${it.name}\n</item>\n` +
  `Write ${outDir}/${it.id}.json, then return the status object.`
const judge = (it) => `${judgeRubric}\n${contract}\nRead ${outDir}/${it.id}.json and judge the record for ${it.id}.`

const results = await pipeline(
  items,
  (_prev, it) => agent(brief(it), { label: `research:${it.id}`, phase: 'Research',
    agentType: 'general-purpose', model: 'sonnet', effort: 'medium', schema: STATUS }),
  (st, it) => st ? agent(judge(it), { label: `judge:${it.id}`, phase: 'Judge',
    agentType: 'general-purpose', model: 'sonnet', effort: 'medium', schema: VERDICT })
    .then((v) => ({ id: it.id, status: st.status, verdict: v ? v.overall : 'unknown',
      critique: v ? v.critique : '' }))
    : { id: it.id, status: 'missing', verdict: 'unknown', critique: 'no result' },
)
const rows = results.map((r, i) => r || { id: items[i].id, status: 'missing', verdict: 'unknown', critique: 'stage failed' })
const toRepair = rows.filter((r) => r.status !== 'ok' || r.verdict !== 'pass')  // unknown is not a pass
log(`${rows.length - toRepair.length}/${rows.length} passed; ${toRepair.length} to repair or recheck`)
return { rows, toRepair: toRepair.map((r) => r.id) }
```

Repairs then go in a second, smaller workflow over `toRepair`, with each brief carrying the
judge's critique and a model one tier up.

## 4. Headless loop with `claude -p`

Good for very large or unattended runs, or when you want a plain script you can rerun. Each call
is independent; `--bare` skips local hooks, skills, plugins, MCP servers, memory and CLAUDE.md, so
results don't depend on the machine.

```bash
# brief.txt: the shared contract. items.txt: one ID per line. schema.json: the record schema.
mkdir -p out logs
run_one() {
  id="$1"
  prompt="$(cat brief.txt; printf '\n<item>\nid: %s\n</item>\n' "$id")"
  CLAUDE_CODE_EFFORT_LEVEL=medium claude --bare -p "$prompt" \
    --model claude-sonnet-5-5 \
    --allowedTools "WebSearch,WebFetch" \
    --output-format json --json-schema "$(cat schema.json)" \
    --max-budget-usd 1.00 \
    > "logs/$id.json" 2> "logs/$id.err"
  jq '.structured_output' "logs/$id.json" > "out/$id.json"
}
export -f run_one
head -n 1 items.txt | xargs -I{} bash -c 'run_one "$1"' _ {}                 # warm the cache
tail -n +2 items.txt | xargs -P 8 -I{} bash -c 'run_one "$1"' _ {}           # then fan out
jq -s 'map(.total_cost_usd // 0) | add' logs/*.json                          # total spend
```

- In this mode the worker returns the whole record as structured output, so drop the template's
  "Write the result to ..." line and make `schema.json` the record schema.
- `--output-format json` includes `total_cost_usd`; `--json-schema` puts the validated result in
  `structured_output`. The CLI doesn't enforce `format` keywords such as `uri` or `date`, so check
  those in code.
- Needs `jq`. `--max-budget-usd` caps each call. Keep parallelism modest (`-P 8` here) and ramp up gradually
  to avoid rate-limit errors.
- Re-run only the IDs that `scripts/check_outputs.py --write-failing` lists.

## 5. Agent SDK

The SDK (`claude-agent-sdk` for Python, `@anthropic-ai/claude-agent-sdk` for TypeScript) gives the
same sub-agent machinery in code: agent definitions with `model`, `tools`, `effort`, `maxTurns`,
plus caps on depth, concurrency and spend. `max_budget_usd` counts the call's own spend including
sub-agent requests, refuses new spawns once reached, and ends with `error_max_budget_usd`. Docs:
code.claude.com/docs/en/agent-sdk.

## 6. Message Batches API

For per-item calls that need no tools: classifying, extracting or rewriting text you already have.
Batches are 50% off and accept structured outputs; results arrive in any order, keyed by
`custom_id`. Use the `claude-api` skill for the code. Whether server tools such as web search work
inside batches wasn't verified for this skill; test before relying on it.
