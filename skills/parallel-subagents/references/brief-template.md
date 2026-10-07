# Brief templates

Contents
1. How to assemble a brief
2. The worker brief template
3. Tested lines for specific models
4. Judge prompt (Tier 1)
5. Verifier prompt (Tier 2)
6. Repair prompt
7. Before and after: a fan-out item
8. Before and after: a split task

## 1. How to assemble a brief

- **Shared part first, variable part last.** Everything before the `<item>` block is the same,
  byte for byte, for every worker of the same kind. That keeps results comparable and lets
  workers share a prompt cache. Never put a timestamp, counter, item name or worker number
  before the item block.
- **Inline beats "go read this file"** for the contract. A pointer to a file works for long
  reference material (over about 1,500 words), at the cost of one extra tool call per worker.
- **Fill every `{placeholder}` or delete the line.** An unfilled placeholder is a decision you
  left to the worker.
- **Length**: about 300-800 words in total. If it's longer, cut explanation before you cut rules.
- **Tags** such as `<task>` and `<contract>` help models keep sections apart; any consistent
  structure works.

## 2. The worker brief template

```
<context>
Today's date is {DATE}. {Only when facts can change since training:} Your training data ends
well before this date. {THINGS THAT CHANGE, e.g. "prices, laws, office holders, versions,
statistics"} may have changed since then, so check them with {TOOL} before you answer, even when
you feel sure. Things that can't change need no check.
Overall goal: {1-3 sentences on what the whole job is for}.
The user asked: "{the user's words, verbatim}".
Your part: {how this piece fits the whole}.
{For splits:} Other agents are covering {LIST}. Don't cover those; if you find something
important there, mention it in one line under "notes".
Your output will be read by {code that merges N results | the orchestrator | a person}.
</context>

<task>
Objective: {one sentence}.
Done means: {a completion condition a stranger could check}.
Apply every rule below to every {item | field | file}, not just the first.
In scope: {...}
Out of scope: {...}
Do not: {e.g. edit files; launch sub-agents; add fields, files or features that weren't asked for}.
</task>

<contract version="{contract_v1}">
Definitions: {each field or deliverable: exact meaning, unit, period, scope, edge cases}.
Conventions: {formats, naming, language, units, currency, reference date}.
Sources: prefer {primary}; acceptable {secondary}; avoid {content farms, aggregators, undated
pages, AI-written summaries}. {For code: the conventions to follow and the files that are in
or out of bounds.}
Missing information: use status "not_found" and list what you tried. A clear "not_found" is a
useful answer; a guessed value is not. Never fill a gap from memory.
Conflicts: use status "conflict", keep the best-supported value in "value", and add each other
value to "alternatives" with its source and quote.
Blocked (no access, a tool fails, the brief is ambiguous): use status "blocked" and say what you
would need.
</contract>

<method>
Start with {where to look first}. Use {tools}.
{Research:} Use short search queries, broad first and then narrower. Don't repeat a query. Read
the full page for anything you record; snippets aren't enough. Run independent searches in
parallel.
{Code:} Read the files that define {X} before the files that use it. Run {check} after changes.
Budget: about {N-M} tool calls; stop at {K}. Stop as soon as {stopping rule, e.g. "every field
has a status"}.
</method>

<output>
{Exact format or schema, field by field.} {Length limit, e.g. "under 300 words" or "no prose
outside the JSON".}
Include "queries_tried" (or "files_read"): every query you ran or file you opened. An empty list
means the work wasn't done.
Write the result to {OUT_DIR}/{ITEM_ID}.{json|md}, then return only:
{"id": "{ITEM_ID}", "status": "ok|partial|failed", "path": "...", "summary": "<one line>"}
<example> Fictional values, for format only; don't reuse them.
{A complete example that includes at least one "not_found" case.}
</example>
</output>

<before_returning>
Check: every {field} has a status; every value has a source you actually opened, with a short
quote and a date; nothing came from memory; {the file parses | the tests ran}; you did only
what the brief asked.
</before_returning>

<finish>
{Tested lines for the worker's model, from section 3.}
</finish>

<item>
{The only part that varies: ID, name, disambiguation, item-specific starting points.}
</item>
{One-line reminder of the most important rule, e.g. "Values only from pages you fetched;
not_found when you can't confirm."}
```

## 3. Tested lines for specific models

Anthropic tested these phrasings in system prompts, not in delegation messages, so treat them as
strong starting points and confirm in your pilot. Quotes are from Anthropic's model prompting
guides (platform.claude.com), checked 2026-10-07.

**Sonnet 5.5**

- Keep working, then stop (quoted; it was written for a user-facing agent, so "the user" means
  whoever gave the task):
  > Keep working until everything the user asked for is done, and only stop to ask when you
  > can't go on without the user or before a risky step. When the work the user asked for is
  > done and checked, stop and report. Don't add features, tests, files, docs or refactors that
  > weren't asked for. If you think one would help, mention it at the end instead of doing it.

  Worker adaptation: "Keep working until everything this brief asks for is done. Stop to report
  only if you can't go on without more information. When the work is done and checked, stop and
  return. Don't add anything that wasn't asked for; mention it in notes instead."
- Search instead of memory. Anthropic's fix is to delete wording like "only use tools when
  strictly necessary" or "minimize tool calls", then add a line of this kind (lightly
  shortened): "Use the search tool to check specifics that may have changed since your training,
  even when you feel confident. For researched work such as a report or a comparison, gather
  current sources rather than writing from your training knowledge."
- Reasoning before structured answers: on totals, rules and rankings Sonnet 5.5 often answers
  without thinking first at `low` and `medium` effort. Add:
  > Think the problem through before you answer.

**Haiku 5.5**

- Give today's date whenever it has a search tool; this grounded its answers in recent results.
- Search nudge (quoted from Anthropic's tested paragraph, which continues with more detail; it
  raised searches on changed facts and added needless searches in only 0-3% of tries):
  > Your training data ends well before today's date. Records, office holders, prices, versions,
  > rules and anything 'latest' may have changed since then, so search for those before you
  > answer, even when you feel sure. Facts that can't change need no search.
- JSON plus tools: Haiku may skip a tool call it needs when you also ask for JSON. Add (lightly
  shortened): "The JSON output format applies to your final answer only. When you need a tool,
  call it first, and write the JSON once you have the results."
- Checks: at `low` and `medium` effort it sometimes reports a change as done without running a
  check. Add: "Before you report a change as done, run {check}. If you couldn't run a check, say
  which one and why."
- Don't use blanket rules such as "search for any present-day factual question regardless of how
  confident you are": they caused searches on half of the prompts that needed none, with no gain
  in correct answers.
- Telling it to "answer directly" doesn't reduce its thinking; lower the effort instead.

**Opus 5 and 5.5 (as workers, or as the orchestrator)**

- It verifies its own work without being told to, so don't add extra review rounds; name the one
  check you want.
- It widens scope and delegates readily. In worker briefs say "Do the work yourself; don't launch
  sub-agents" unless you want nesting. Anthropic's suggested orchestrator line: "Delegate to a
  subagent only for large tasks that are genuinely independent and parallelizable... If one
  subagent can complete the task, use one rather than several, and keep spawn counts low."

**Any model**

- Replace "be thorough", "think deeply" and "explore all approaches" with specific requirements:
  how many sources, which checks, what "complete" means.
- "Apply this to every item, not just the first" for any rule that repeats.

## 4. Judge prompt (Tier 1)

Use a different prompt from the worker's, and ideally a different model. Binary verdicts per
dimension are more reliable than 1-5 scores.

```
You are checking one result produced by another agent. You did not produce it.

<brief>{the worker's full brief: contract and item}</brief>
<result>{the worker's output}</result>

For each dimension, answer "pass", "fail" or "unknown" with a one-line reason:
- follows_contract: uses the definitions, units, format and status rules exactly
- supported: every value or claim is backed by the cited source or evidence shown
- complete: every required field or part has a status
- {task-specific dimension, e.g. "sources_primary" or "tests_ran"}
Fail a dimension only for problems that change whether the result is correct or usable, not for
style. Use "unknown" when you can't tell from what's in front of you.
Return JSON: {"id": "...", "verdicts": {"<dimension>": {"verdict": "...", "reason": "..."}},
"overall": "pass|fail|unknown", "critique": "<what to fix, one or two sentences>"}
```

## 5. Verifier prompt (Tier 2)

Run with a fresh context on failures, low-confidence items and outliers. Give it the claim, not
the worker's reasoning.

```
Check whether this claim is true. Try to refute it.
Claim: {value or finding}   Cited source: {URL, file:line, or test}
Open the cited source yourself (or reproduce the bug, or run the test). Then report one of:
- "confirmed": the source states it (quote the exact passage)
- "refuted": the source or a better source contradicts it (quote and link)
- "unverifiable": you couldn't check it (say why: page down, paywall, can't reproduce)
"Unverifiable" is not "refuted". Report only problems that change whether the claim is correct.
```

## 6. Repair prompt

```
{The original brief, unchanged.}

<repair>
An earlier attempt at this task had these problems: {the judge's or verifier's critique, or the
validator's error message}.
Fix these problems. Keep the parts that were right. If a problem can't be fixed with the
sources available, mark it not_found or conflict instead of guessing.
</repair>
```

Send repairs one tier up (Haiku, then Sonnet, then Opus) and only for the failing item. Stop after
two rounds and mark the item for a person.

## 7. Before and after: a fan-out item

Before (the common pattern behind weak per-item results):

```
Research France's minimum wage and labour rules. Be thorough and report back.
```

Every worker now decides alone: which "minimum wage" (hourly, monthly, sector), which year, which
currency, which sources, how long to search, what to do when there is no statutory minimum, and
what shape to answer in. Then 195 such answers flood the orchestrator's context.

After (shortened):

```
<context>
Today's date is 2026-10-07. Your training data ends well before this date. Minimum wages, rates
and laws change often, so check them with web search before you answer, even when you feel sure.
Overall goal: a comparable table of statutory minimum wages for 195 countries.
The user asked: "Research the minimum wage in every country and put it in one table."
Your part: one country. Code will merge 195 records like yours, so follow the definitions exactly.
</context>
<task>
Objective: find the statutory minimum wage for the country in <item>.
Done means: each field below has a status, and every found value has a source you opened.
Apply every rule to every field, not just the first.
Do not: research other countries; convert currencies; launch sub-agents.
</task>
<contract version="contract_v1">
minimum_wage: the lowest statutory rate for adult workers in force on 2026-10-07, in local
currency (ISO 4217 code), with its period (hour, day, month) and scope (national, regional,
sectoral). If wages are set only by collective agreement, use status "not_applicable" with a note.
Sources: labour ministry or official gazette first, then national statistics office, then ILO;
avoid aggregators and undated pages.
Missing: "not_found" plus the queries you tried. Conflicting sources: "conflict"; keep the
best-supported value and put each other one in "alternatives" with its source.
</contract>
<method>
Budget: about 5-10 tool calls; stop at 15. Stop when every field has a status.
</method>
<output>
Write out/{ISO3}.json:
{"id":"...","contract_version":"contract_v1","fields":{"minimum_wage":{"status":"found|not_found|
not_applicable|conflict","value":"","currency":"","period":"","scope":"","as_of":"","source_url":"",
"quote":"","alternatives":[{"value":"","source_url":"","quote":""}]}},
"queries_tried":["<every query you ran>"],"notes":""}
Then return only {"id":"...","status":"ok|partial|failed"}.
<example> Fictional: {"id":"XEX", ... "fields":{"minimum_wage":{"status":"not_found", ...}},
"queries_tried":["exampleland minimum wage 2026"], ...} </example>
</output>
<before_returning>Every field has a status; every found value has a fetched source_url, a quote and
an as_of date; nothing came from memory; the file parses.</before_returning>
<finish>Keep working until every field has a status, then stop and return.
Think the problem through before you write the JSON.</finish>
<item>id: FRA   name: France</item>
Values only from pages you fetched; not_found when you can't confirm.
```

Check the finished records in code (Tier 0) with:

```
python3 scripts/check_outputs.py --dir out --ids items.txt --required id,contract_version,fields \
  --expect contract_version=contract_v1 --nonempty queries_tried --fields-key fields \
  --required-fields minimum_wage --url-keys source_url --write-failing repair_ids.txt \
  --merge merged.jsonl
```

## 8. Before and after: a split task

Before:

```
Look at the auth code and tell me what you find.
```

After (shortened):

```
<context>
Goal: decide how to add SSO login to this repo without breaking existing sessions.
The user asked: "Can we add Google SSO? Check what the current auth does first."
Your part: map how sessions are created and validated today. Other agents are covering
(a) the user and permissions model and (b) the deploy and config setup. Don't cover those.
Your output will be read by the orchestrator, who will design the change.
</context>
<task>
Objective: explain the session lifecycle: creation, storage, validation, expiry, logout.
Done means: each stage names the function and file:line that implements it.
Do not: edit files, run migrations, or propose a design.
</task>
<method>
Start at src/auth/ and the login route. Read each definition before its call sites.
Budget: about 10-20 tool calls; stop at 30.
</method>
<output>
Under 400 words. For each stage: the function, file:line, and one sentence on what it does.
Then "risks for SSO": at most 5 bullets. Mark anything you couldn't confirm as "unconfirmed".
</output>
<before_returning>Every stage has a file:line you opened, or is marked unconfirmed.</before_returning>
```
