# Models, effort and cost

Checked 2026-10-07 against Anthropic's pricing, effort and model-prompting docs, the Claude Code
docs, and the claude-api skill's model table (cached 2026-10-06). Prices and defaults change
often: before quoting a number to the user, re-check with the `claude-api` skill or
platform.claude.com/docs/en/about-claude/pricing. Figures marked *vendor* are Anthropic's own
measurements; *dated* means measured on 2025-or-earlier models; *illustrative* means arithmetic on
stated assumptions.

Contents
1. Prices
2. What each tier is good and bad at
3. Effort
4. How Claude Code picks a sub-agent's model
5. Prompt caching in a fan-out
6. Estimating cost
7. Escalation and routing evidence
8. Measured in a real pilot

## 1. Prices

First-party Claude API, US dollars per million tokens:

| Model | ID | Input | Output | Cache read | Notes |
|---|---|---|---|---|---|
| Fable 5.1 | `claude-fable-5-1` | $10 | $50 | $0.25 | Top tier, 2.5x Opus |
| Opus 5.5 | `claude-opus-5-5` | $4 | $20 | $0.20 | Default model; thinking can't be turned off |
| Sonnet 5.5 | `claude-sonnet-5-5` | $2 | $10 | $0.20 | |
| Haiku 5.5 | `claude-haiku-5-5` | $0.10 | $0.50 | $0.01 | Prompts over 100K tokens: $0.50 / $2.50 |
| Haiku 4.5 (older) | `claude-haiku-4-5` | $1 | $5 | | 10x Haiku 5.5; what `haiku` means on every provider except the Anthropic API |
| Sonnet 4.6 (older) | `claude-sonnet-4-6` | $3 | $15 | | |

- Cache writes: 1.25x input for the 5-minute TTL, 2x for 1 hour. Cache reads: 0.1x input
  (0.05x on Opus 5.5, 0.025x on Fable 5.1).
- Batch API: 50% off input and output. Results come back in any order; key them by `custom_id`.
- Web search: $10 per 1,000 searches, on top of the tokens its results add. Web fetch: tokens only.
- Amazon Bedrock and Google Vertex AI price Claude separately.
- Ratios that drive decisions: **Opus 5.5 is 2x Sonnet 5.5** (the gap used to be 5x), **Sonnet 5.5
  is 20x Haiku 5.5**, Fable 5.1 is 2.5x Opus 5.5. The big price step is between Haiku and Sonnet.

## 2. What each tier is good and bad at

**Haiku 5.5**: strong on bounded, checkable work.
- 85% on GPQA Diamond against Opus 5.5's 91%, at about a twentieth of the cost per question
  (vendor).
- Anthropic's multi-agent guidance: delegated research "is mostly searching, reading, and
  extracting: many input tokens, little hard reasoning", so use Haiku 5.5 workers, "or Claude
  Sonnet 5.5 when the worker needs more judgment".
- Weak spots (Anthropic's Haiku 5.5 guide): skips searches and stops early at `low` effort and
  with long prompts; may skip a needed tool call when also asked for JSON; at `low` and `medium`
  sometimes reports a change as done without running a check.
- On a 10-claim fact-checking eval in Anthropic's August 2026 cost cookbook, quality held at
  10/10 through Sonnet at `medium`, slipped at Sonnet `low`, and fell to about 55% on Haiku
  (vendor). Use Haiku for extraction and classification, not open-ended verification.

**Sonnet 5.5**: the default research and judging worker.
- Sometimes answers from training memory when a search would catch changed details; at `low` and
  `medium` effort on long tasks it is more likely to stop and check in before finishing; at
  `xhigh` and `max` it launches its own review rounds and reviewer sub-agents, and a "stop and
  report" instruction cut session cost by about a third with no change in quality (Anthropic's
  Sonnet 5.5 guide).
- Sonnet 5 interprets prompts literally and "does not silently generalize an instruction from one
  item to another".
- On DeepResearch Bench II, Sonnet 5 scored 56% at $1.20 per task against Opus 5's 71% at $6.71
  (vendor; Sonnet 5, not 5.5).

**Opus 5.5**: the default for judgment, repairs and synthesis, and worth piloting as a worker.
- At `low` effort on SWE-bench Pro, Opus 5.5 solved 87.4% of tasks at $0.12 per solved task,
  against 77.4% at $0.84 for Sonnet 5 at its default (vendor; coding, older Sonnet).
- Opus 5 verifies its own work unprompted, over-verifies when told to, widens scope, and
  delegates to sub-agents more readily than earlier models.

**Orchestration as a whole**
- A Fable 5.1 lead with 25 Sonnet 5 workers cost 47-55% less than Fable 5.1 alone on a
  21.6M-token corpus task, and scored 10-12 points lower (vendor). Expect a quality discount
  that checks and repairs have to buy back.
- In 2025, an Opus 4 lead with Sonnet 4 workers beat a single Opus 4 agent by 90.2% on
  Anthropic's research eval; token usage alone explained 80% of the variance, and upgrading the
  model helped more than doubling the token budget (vendor, dated).

## 3. Effort

- Levels: `low`, `medium`, `high`, `xhigh`, `max`. Effort governs thinking, text and tool calls
  together; lower effort means fewer and terser tool calls.
- Defaults: on the API, Opus 5.5 and Haiku 5.5 default to `medium` and Sonnet 5.5 to `high`. In
  Claude Code, all three 5.5 models default to `medium`.
- Thinking can't be turned off on Opus 5.5, Sonnet 5.5, Haiku 5.5 or Fable in Claude Code;
  thinking tokens bill as output. Telling a model to "answer directly" doesn't stop it thinking;
  lower the effort instead.
- On research benchmarks (Fable 5), `medium` matched the default's accuracy at 70-87% of the cost,
  and `low` gave up 1-3 points for a third to half off (vendor).
- The exception that matters for workers: Haiku 5.5 at `low` skips searches, stops early and
  skips checks; moving it to `medium` roughly halved early stopping and more than doubled output
  tokens. Sonnet 5.5 at `low` can skip verifying a change.
- Starting points: search or verification workers at `medium` (Haiku at `medium` or `high`);
  short mechanical stages at `low`; judges at `medium`; the hardest checks at `high`.
- In Claude Code, an agent definition's `effort` overrides the session's level but not the
  `CLAUDE_CODE_EFFORT_LEVEL` environment variable, and sub-agents inherit the main
  conversation's thinking settings (there is no per-sub-agent thinking switch).

## 4. How Claude Code picks a sub-agent's model

1. The per-call model: the Agent tool's `model` parameter, or `model` in a Workflow `agent()` call.
2. The agent definition's `model` frontmatter (`inherit` means the main conversation's model).
3. The `CLAUDE_CODE_SUBAGENT_MODEL` environment variable.
4. The main conversation's model.

`CLAUDE_CODE_SUBAGENT_MODEL_FORCE=1` forces one model on every sub-agent, overriding the rest.

- Built-in types: Explore uses the main conversation's model, Plan inherits it, and
  general-purpose uses `CLAUDE_CODE_SUBAGENT_MODEL` if set, otherwise the main model. A "quick
  Explore search" from an Opus or Fable session runs on that model unless you pass one.
- Definition frontmatter accepts `sonnet`, `opus`, `haiku`, `fable`, a full ID such as
  `claude-sonnet-5-5`, or `inherit`.
- What the aliases mean depends on the provider:

  | Provider | `opus` | `sonnet` | `haiku` |
  |---|---|---|---|
  | Anthropic API | Opus 5.5 | Sonnet 5.5 | Haiku 5.5 |
  | Claude Platform on AWS | Opus 5.5 | Sonnet 4.6 | Haiku 4.5 |
  | Amazon Bedrock, Google Cloud | Opus 5.5 | Sonnet 4.5 | Haiku 4.5 |
  | Microsoft Foundry | Opus 4.6 | Sonnet 4.5 | Haiku 4.5 |

  Anywhere but the Anthropic API, pin full IDs or set `ANTHROPIC_DEFAULT_SONNET_MODEL` /
  `_HAIKU_MODEL` / `_OPUS_MODEL`; a "cheap Haiku worker" there is the older model at 10x the
  price.
- Switching with `/model` also switches every sub-agent that inherits the main model.

## 5. Prompt caching in a fan-out

- Caching is a prefix match over tools, then system prompt, then messages. Any byte that differs
  invalidates everything after it, so keep the shared contract first and the item last.
- Minimum cacheable prefix: 512 tokens on the 5.x models (up to 4,096 on older ones such as Haiku
  4.5). Shorter prefixes silently don't cache.
- Caches are model-scoped and per workspace: workers on another model can't read the
  orchestrator's cache, and the same prompt sent from two workspaces caches twice.
- TTL: 5 minutes by default, refreshed on each hit; 1 hour costs 2x to write. In Workflows,
  `subagentPromptCacheTtl: 1h` extends sub-agent caches.
- **Concurrency**: an entry becomes readable only once the first response begins streaming, so N
  identical requests sent at once all pay full price. Send one, wait for its first token, then
  send the rest. Workflow holds sibling agents with the same configuration for up to 5 seconds
  (`CLAUDE_CODE_WORKFLOW_PREFIX_STAGGER_MS`) so they read the first one's cache.
- Workers whose prompts differ slightly each write their own entry and read none of the others'.
- Measured: caching cut agent-loop cost by 2.7-5.3x, and a 25-token timestamp at the start of a
  system prompt raised one run from $0.59 to $4.24 (vendor).

## 6. Estimating cost

For one worker with a shared prefix of P tokens, N tool calls each returning about R tokens, O
output tokens and S billable searches, with caching:

```
cache writes  = P + N*R                        (each new block written once)
cache reads   = N*P + R*N*(N-1)/2              (every turn re-reads everything before it)
cost          = writes*write_price + reads*read_price + O*output_price + S*$0.01
```

Without caching, input is `(N+1)*P + R*N*(N+1)/2` at the full input price. The `R*N^2` term is why
cost grows faster than the number of tool calls. `scripts/estimate_cost.py` runs this per turn,
applies Haiku's 100K-token price step, compares models, and prints a tool-call sensitivity table.

Illustrative run: 195 workers, P = 3,000, N = 10 searches, R = 5,000, O = 4,000, with caching.

| Model | Total |
|---|---|
| Haiku 5.5 | about $22 (search fees are about 90% of it) |
| Sonnet 5.5 | about $63 (about $147 without caching) |
| Opus 5.5 | about $97 |
| Fable 5.1 | about $200 |

The same Sonnet run costs about $23 at 3 searches per worker, $34 at 5, $136 at 20 and $229 at 30.

- In Claude Code, P includes the agent's own system prompt and tool definitions, often several
  thousand tokens. Measure a pilot instead of guessing: `total_cost_usd` in
  `claude -p --output-format json`, the token view in `/workflows`, or `/usage`.
- Costs concentrate in the hard items: in one 20-task run, the two most expensive tasks were 43%
  of spend (vendor). Add 20-40% to a pilot-based estimate.
- Keep Haiku workers under 100K tokens of context: past that, every turn bills at 5x.
- Budget for the checks. In an illustrative 195-country pipeline, judging, verifying flagged items,
  repairs and synthesis added about 45% to the worker pass; that is still far cheaper than
  re-running everything or putting every worker on a bigger model.

## 7. Escalation and routing evidence

- **Escalate on an external signal, not self-assessment.** Haiku 5.5 and Sonnet 5.5 executors
  given an Opus 5.5 advisor consulted it on 0 of 198 questions (vendor): spotting your own hard
  cases takes the judgment a cheaper model lacks. Let tests, validators and judges decide.
- **Cheap first, retry failures higher.** Running Opus 5.5 at `low` and re-running only failures
  at `high` reached about 97% at $0.17 per task, against 95.3% at $0.29 for running everything at
  `high` (vendor; tests were the failure signal).
- **Cost per completed task, not per token.** A cheaper model that fails still bills its tokens,
  then the retry. The superpowers skill reports the cheapest models "routinely take 2-3x the
  turns on multi-step work" (author's claim).
- **One model can beat a cascade.** Measure the most capable model at lower effort before building
  a multi-model cascade: one model keeps one cache namespace.

- Parallelism raises total tokens. The only public delegation benchmark found (fable-baton,
  n=2 per case) saw total cost stay the same or rise, e.g. a review going from $2.13 to $2.71,
  while tokens on the top model fell. Savings come from cheaper per-token rates and less waste,
  not from running in parallel.

## 8. Measured in a real pilot

A six-country discovery pilot in Claude Code (October 2026): Sonnet 5.5 workers at `high` effort,
each doing 15-31 web searches and reading 11-20 pages, then an Opus 5.5 check per lead scored 4
or more. Measured with `scripts/measure_usage.py`; output tokens are estimated.

- **Per worker**: about $0.90 for a small market and $1.90-2.20 for a large one, including search
  fees. Peak context was 118K-309K tokens, and each worker re-read 1.4-5.0M tokens from cache.
  Without caching each would have cost several times more.
- **Per Opus check**: about $0.50-0.80, with 9-12 searches each.
- **Fixed overhead**: every agent's first prompt was about 43-45K tokens, of which the brief was
  about 2K. The rest is Claude Code's system prompt and tool definitions.
- **Parallel launches missed the cache**: workers started within a second of each other, and each
  paid to write the full 45K prompt. Stagger starts by a few seconds, or let a Workflow do it.
- **Orchestrator overhead**: the orchestrating session had grown to about 540K tokens, so every
  wake-up cost about $0.11 in re-reads before it did anything. Large jobs belong in a fresh
  session or a Workflow.
- **Searches were batched**: 35-60 tool calls took only 18-35 model calls, because workers ran
  independent searches in parallel. Ask for that in the brief.

