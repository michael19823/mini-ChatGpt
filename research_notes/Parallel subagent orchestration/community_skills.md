# Community (non-Anthropic) Claude Code skills, plugins and prompts for parallel sub-agent orchestration and cost-aware model routing

Research date: 2026-10-07. Star counts and "updated" dates come from the GitHub repository search API, queried 2026-10-07 ([GitHub search](https://github.com/search?q=claude+code+subagents+orchestration&type=repositories)). Caveat: the API's `updated_at` field changes on any repo activity, starring included, so it is not a last-commit date. I could not get `pushed_at` because per-repo API access was blocked in this environment. Every repo below showed `updated_at` between 2026-09-06 and 2026-10-07. Only one candidate is archived: stefanoginella/auto-bmad.

Note on model names: several 2026 sources refer to "Claude Fable 5" as a tier above Opus, alongside Opus 5.5 and Sonnet 5. wshobson's docs say Fable is "the tier above Opus. It is opt-in in Claude Code (v2.1.170+, never the default) and carries roughly 2.6× the effective cost of Opus" ([wshobson/agents docs/agents.md](https://github.com/wshobson/agents/blob/main/docs/agents.md#model-configuration)). These names are reported here as the sources state them.

---

## Q1. Curated lists and marketplaces: which entries cover parallel agents, orchestration, delegation or cost routing?

### Takeaway
The big awesome lists are huge but thin on this specific topic. Only a handful of entries deal with fanning one task out across many targets with cheap models. The useful ones are concentrated in hesreallyhim's "Agent Orchestration" section, VoltAgent's awesome-agent-skills, and VoltAgent's subagent "Meta & Orchestration" category. Most "orchestration" entries are SDLC/coding pipelines, Ralph-style loops, or terminal multiplexers, not N-way research fan-out.

### Cited Findings
- **hesreallyhim/awesome-claude-code**: 55,203 stars. Has dedicated "Agent Orchestration" and "Usage & Cost" sections ([README](https://github.com/hesreallyhim/awesome-claude-code)). Relevant Agent Orchestration entries include:
  - **Agent Collab Skills** (WenyuChiou): "task splitter, output reconciler, adversarial debate, shared memory, acceptance gate". 30 stars.
  - **Harness** (revfactory): "A meta-skill that designs domain-specific agent teams". 9,131 stars.
  - **fable-mode** (mrtooher): "multi-stage planning, sub-agent delegation, and self-verification". 870 stars.
  - **Superpowers** (obra).
  - **Dynamic Workflow Design Patterns** (zircote/workflows-plugin): patterns for the Claude Code Workflow tool. 2 stars.
  - **Claude Squad** (smtg-ai): a terminal manager for parallel sessions. 8,574 stars.
  - Several Ralph-loop runners (ralph-orchestrator, ralph-claude-code, The Ralph Playbook). These are iterative loops, not fan-out.

  The list also has **llm-router** (ypollak2, "sends each prompt to the cheapest capable model", 95 stars), **compass** (dshakes, "cost-tiered subagents", 19 stars) and **CC Harness** (lookfree, which renders "subagent and workflow topology… with per-node latency, token cost"). Usage & Cost covers usage/cost trackers such as ccusage and cc-probeline, which "prices every turn, your subagents, cache rebuilds".
- **VoltAgent/awesome-agent-skills**: 35,326 stars, "1000+ agent skills" ([README](https://github.com/VoltAgent/awesome-agent-skills)). Relevant entries:
  - `obra/dispatching-parallel-agents` ("Coordinate multiple simultaneous agents")
  - `obra/subagent-driven-development`
  - `deusyu/translate-book` ("Translate books… via parallel sub-agents with resume")
  - `zscole/model-hierarchy-skill` ("Cost-optimized model routing based on task complexity")
  - `NeoLabHQ/sadd`
  - `muratcankoylan/multi-agent-patterns` ("Master orchestrator, peer-to-peer, and hierarchical multi-agent architectures")
  - `amirkiarafiei/subagent-cli-skills` ("Delegate heavy work to 15 other agent CLIs as subagents")
  - `Charlie85270/Dorothy` ("Orchestrate multiple AI CLI agents")
- **VoltAgent/awesome-claude-code-subagents**: 25,562 stars. Its "09. Meta & Orchestration" category (plugin `voltagent-meta`) includes agent-organizer ("Multi-agent coordinator"), multi-agent-coordinator ("Advanced multi-agent orchestration"), task-distributor ("Task allocation specialist"), workflow-orchestrator, context-manager and knowledge-synthesizer ("Knowledge aggregation expert") ([README](https://github.com/VoltAgent/awesome-claude-code-subagents)).
- **ComposioHQ/awesome-claude-skills**: 76,660 stars, 1,654 open issues. Only a few delegation entries: NeoLab `subagent-driven-development`, `great_cto` (7 SDLC subagents), and `jules`/`manus` delegate-to-external-agent skills. Nothing on N-way fan-out or model tiering ([README](https://github.com/ComposioHQ/awesome-claude-skills)).
- **BehiSecc/awesome-claude-skills**: 10,219 stars. Relevant entries:
  - `swarmclaw` ("self-hosted multi-agent runtime for delegating work across coding CLIs")
  - `suede-creator-skills` ("23-skill pack for agent orchestration with WIP collision detection")
  - `crowdcast` ("Spawns dozens of AI agents… then writes a prediction report")
  - `manus` (delegation "with parallel processing")

  ([README](https://github.com/BehiSecc/awesome-claude-skills))
- **travisvn/awesome-claude-skills**: 15,299 stars. The only orchestration entry is `loki-mode` ("orchestrates 37 AI agents across 6 swarms to build, deploy, and operate a complete startup") ([README](https://github.com/travisvn/awesome-claude-skills)).
- **Marketplaces**: skills.sh lists `obra/superpowers/dispatching-parallel-agents` under "Agent workflows", installable with `npx skills add https://github.com/obra/superpowers --skill dispatching-parallel-agents` ([skills.sh](https://www.skills.sh/obra/superpowers/dispatching-parallel-agents)). The same skill is mirrored on tessl.io, mondoo.com, hackernoon.com/skills, vibeindex.ai and agentskillsfinder.com. I saw those only as search-result listings and did not open them. One search summary said VibeIndex's description ("intelligent workload balancing") does not match the skill's actual text. Another said a Mondoo security review found the skill is "only markdown… no executable code" ([Mondoo listing](https://mondoo.com/ai-agent-security/skills/github/obra/superpowers/dispatching-parallel-agents/c4bbe651cb1b)).

### Inferences
- No list has a category for "fan out one templated research task over a long list of items with cheap models". The nearest analogues are generic: translate-book (chunk fan-out), Weizhena/Deep-Research-skills (items × fields), and NeoLab `do-in-parallel` (`--targets` list).
- Directory mirrors re-describe skills inaccurately, so the report should link canonical GitHub sources.

### Gaps
- I did not open claude-plugins.dev, skillsmp.com or agentskills.io. I can't say whether they list anything beyond the GitHub entries above.
- I did not check install or download counts on marketplaces. skills.sh did not show a count in the rendered text I captured.

---

## Q2. Notable skills and plugins: what each actually says, how it briefs sub-agents, and whether it handles model selection and cost

### Takeaway
Nothing found does exactly what the user wants: brief ~200 cheap sub-agents uniformly, collect structured per-item output, verify it and keep cost low. The strongest building blocks are:
- **NeoLab `do-in-parallel`**: per-target model tiering, a reusable judge spec for "same task across targets", retries and an escalation ladder.
- **deusyu/translate-book**: batching (8 at a time), a manifest, resume, a consistency glossary and a completeness check.
- **obra/superpowers**: brief anatomy, plus the "turn count beats token price" model rule.
- **SirRuggie/claude-code-orchestration-kit**: the best compact brief template, with an output budget.

Almost all cost-routing plugins (senior-fable, fable-baton, Rylaa's orchestrator) are coding-oriented "expensive lead + cheap workers" setups. They don't describe large fan-outs, and the one with a published benchmark did not show lower total cost.

### Cited Findings

**1. obra/superpowers: `dispatching-parallel-agents`.** Author Jesse Vincent. Repo has 296,326 stars and was created 2025-10-09 ([repo](https://github.com/obra/superpowers)).
- Trigger: "Use when facing 2+ independent tasks that can be worked on without shared state or sequential dependencies" ([SKILL.md](https://github.com/obra/superpowers/blob/main/skills/dispatching-parallel-agents/SKILL.md)).
- Briefing principle, verbatim: "By precisely crafting their instructions and context, you ensure they stay focused and succeed at their task. They should never inherit your session's context or history — you construct exactly what they need. This also preserves your own context for coordination work." ([SKILL.md](https://github.com/obra/superpowers/blob/main/skills/dispatching-parallel-agents/SKILL.md))
- Brief anti-patterns, verbatim: "❌ Too broad: 'Fix all the tests' - agent gets lost"; "❌ No context"; "❌ No constraints: Agent might refactor everything"; "❌ Vague output: 'Fix it' - you don't know what changed". The example brief ends with "Return: Summary of what you found and what you fixed." ([SKILL.md](https://github.com/obra/superpowers/blob/main/skills/dispatching-parallel-agents/SKILL.md))
- Post-merge checks: "Check for conflicts", "Run full suite", and "Spot check - Agents can make systematic errors" ([SKILL.md](https://github.com/obra/superpowers/blob/main/skills/dispatching-parallel-agents/SKILL.md)).
- It says nothing about model selection, cost, batch size or structured output schemas. It is aimed at debugging 2–5 independent failures ([SKILL.md](https://github.com/obra/superpowers/blob/main/skills/dispatching-parallel-agents/SKILL.md)).

**2. obra/superpowers: `subagent-driven-development`.** This is the one superpowers skill with explicit model tiering ([SKILL.md](https://github.com/obra/superpowers/blob/main/skills/subagent-driven-development/SKILL.md)). Verbatim:
- "Use the least powerful model that can handle each role to conserve cost and increase speed."
- "**Always specify the model explicitly when dispatching a subagent.** An omitted model inherits your session's model — often the most capable and most expensive — which silently defeats this section."
- "**Turn count beats token price.** Wall-clock and context cost scale with how many turns a subagent takes, and the cheapest models routinely take 2-3× the turns on multi-step work — costing more overall. Use a mid-tier model as the floor for reviewers and for implementers working from prose descriptions."

Other details:
- Briefing is file-based. Each task's text goes into its own brief file and the subagent never reads the whole plan. A dispatch holds only the task, the interfaces it touches, global constraints and a report path.
- Status codes: DONE / DONE_WITH_CONCERNS / NEEDS_CONTEXT / BLOCKED. A BLOCKED implementer is never retried unchanged. In fix-loop rounds 4–5, "use a model at least one tier above the implementer that got stuck."
- Gap relative to the user's goal: it says "Never run multiple implementers in parallel." This skill is sequential by design.

**3. NeoLabHQ/context-engineering-kit: SADD plugin, `/do-in-parallel` and `/launch-sub-agent`.** Repo has 1,748 stars ([repo](https://github.com/NeoLabHQ/context-engineering-kit); [SADD README](https://github.com/NeoLabHQ/context-engineering-kit/tree/master/plugins/sadd)). This is the closest existing match to "same task × many targets, cheap models, verified".
- Signature: `do-in-parallel Task description [--files ...] [--targets "target1,target2,..."] [--model haiku|sonnet|opus] [--output <path>] [--strict]`. Description: "Run independent tasks concurrently across multiple files or targets using parallel sub-agents, with per-task model selection and LLM-as-a-judge verification" ([SKILL.md](https://github.com/NeoLabHQ/context-engineering-kit/blob/master/plugins/sadd/skills/do-in-parallel/SKILL.md)).
- Model policy, verbatim: "Picking the model is the **single highest-leverage decision** you make — more than any prompt wording…". Also: "`sonnet` and `haiku` are the default. `opus` is reserved and opt-in — it MUST be *earned*". Tie-breaker: "pick the **cheaper** tier. You MUST NOT bias up to `opus` to hedge" ([SKILL.md](https://github.com/NeoLabHQ/context-engineering-kit/blob/master/plugins/sadd/skills/do-in-parallel/SKILL.md)).
- Escalation: "Ladder: `haiku` → `sonnet` → `opus`. `opus` is the **ceiling**… If `opus`-tier work still fails, escalate to the **user**, never loop." Escalation is "Scoped to the failing task only… It does NOT re-tier the batch". It also says "re-dispatching the same prompt at a higher tier and hoping is prohibited" ([SKILL.md](https://github.com/NeoLabHQ/context-engineering-kit/blob/master/plugins/sadd/skills/do-in-parallel/SKILL.md)).
- Role pairing lets a cheaper worker be judged by a stronger evaluator: "Sharpened-haiku | `sonnet` [judge] | `haiku` [worker] | The work is trivial, but what counts as 'correct' is not obvious" ([SKILL.md](https://github.com/NeoLabHQ/context-engineering-kit/blob/master/plugins/sadd/skills/do-in-parallel/SKILL.md)).
- "Requirement grouping": "repeatable groups (same task across targets) share one meta-judge spec". One meta-judge writes a reusable rubric, applied by a judge for each target. Max 3 retries per target ([SKILL.md](https://github.com/NeoLabHQ/context-engineering-kit/blob/master/plugins/sadd/skills/do-in-parallel/SKILL.md)).
- Worker prompts carry a "Let's think step by step" Reasoning Approach prefix and a mandatory "Self-Critique Verification" suffix: "Do not submit until ALL verification questions have satisfactory answers" ([SKILL.md](https://github.com/NeoLabHQ/context-engineering-kit/blob/master/plugins/sadd/skills/do-in-parallel/SKILL.md)).
- Orchestrator RED FLAGS include "Read judge reports in full (only parse structured headers)" and "Wait for one agent to complete before starting another" ([SKILL.md](https://github.com/NeoLabHQ/context-engineering-kit/blob/master/plugins/sadd/skills/do-in-parallel/SKILL.md)).
- A cross-provider table maps tiers to other vendors (e.g. `sonnet` ≈ "gemini-pro class… GPT-5-mini class") ([SKILL.md](https://github.com/NeoLabHQ/context-engineering-kit/blob/master/plugins/sadd/skills/do-in-parallel/SKILL.md)).
- Conflict: the sibling `/launch-sub-agent` uses the opposite default, "**Default** (when uncertain) | `opus` | Optimize for quality over cost" ([launch-sub-agent SKILL.md](https://github.com/NeoLabHQ/context-engineering-kit/blob/master/plugins/sadd/skills/launch-sub-agent/SKILL.md)).
- Gaps: the file is very large (~118 KB) and code-centric. Each target gets a worker plus a judge, which roughly doubles agent count. I found no explicit concurrency cap or batching guidance for ~200 targets.

**4. deusyu/translate-book.** 2,085 stars, created 2026-03-15 ([repo](https://github.com/deusyu/translate-book)). This is a non-coding mass fan-out skill, structurally closest to "one agent per country".
- "Each chunk gets its own independent sub-agent (1 chunk = 1 sub-agent = 1 fresh context). This prevents context accumulation and output truncation." Batches are "up to `concurrency` sub-agents in parallel (default: 8)" and the skill says "Wait for the current batch to complete before launching the next" ([SKILL.md](https://github.com/deusyu/translate-book/blob/main/SKILL.md)).
- Robustness mechanisms ([README](https://github.com/deusyu/translate-book)):
  - A `manifest.json` with SHA-256 hashes ("prevents stale or corrupt outputs from being merged")
  - Chunk-level resume via `run_state.json`
  - A glossary built from sampled chunks and injected into each prompt "as a hard constraint", to stop proper nouns drifting across fresh-context sub-agents
  - Neighbor-context excerpts
- Completeness check: "use Glob to check that every source chunk has a corresponding output file. If any are missing, retry them — each missing chunk as its own sub-agent. Maximum 2 attempts per chunk" ([SKILL.md](https://github.com/deusyu/translate-book/blob/main/SKILL.md)).
- Structured side-output: each sub-agent writes a `.meta.json` against a schema. The skill warns "**Do NOT include a `chunk_id` field** — chunk identity is derived from the filename. Putting it in the payload creates a hallucination hole" and "never invent entities to 'look productive'" ([SKILL.md](https://github.com/deusyu/translate-book/blob/main/SKILL.md)).
- It does not address model selection or cost.

**5. Weizhena/Deep-Research-skills.** 2,309 stars, created 2025-12-29 ([repo](https://github.com/Weizhena/Deep-Research-skills)).
- Workflow: `/research` builds an outline of **items** and **fields** to collect for each, extendable with `/research-add-items` and `/research-add-fields`. `/research-deep` investigates each item "with parallel agents". `/research-report` builds a report from "JSON results".
- This items × fields structure maps directly onto countries × attributes.
- Ships a Claude Code `web-search-agent.md` and a Codex `web-researcher.toml`.
- Gaps: the README contradicts itself ("parallel agents" vs. an example that searches "one by one"). It gives no JSON schema, no subagent model and no cost guidance (README only; I did not read the agent files).

**6. 199-biotechnologies/claude-deep-research-skill.** 1,173 stars ([repo](https://github.com/199-biotechnologies/claude-deep-research-skill)).
- An 8-phase pipeline. Retrieval uses "5-10 concurrent searches plus 2-3 focused sub-agents" that return "structured evidence objects".
- Includes `verify_citations.py` (DOI/URL checks) and a validate → fix → retry loop of up to 3 cycles.
- No model or cost guidance. The fan-out is small (2–3 agents). Its tagline ("Outperforms OpenAI, Gemini…") is an unsubstantiated self-claim.

**7. SirRuggie/claude-code-orchestration-kit.** 31 stars, created 2026-09-12, 3 commits ([repo](https://github.com/SirRuggie/claude-code-orchestration-kit)). Tagline: "One expensive model orchestrates, five pinned cheaper subagents do the work." Roster: scout=haiku, researcher=sonnet, builder=sonnet, refuter=opus, debugger=opus ([core/CLAUDE.md](https://github.com/SirRuggie/claude-code-orchestration-kit/blob/main/core/CLAUDE.md)). This is the best concise brief template found. Verbatim from core/CLAUDE.md:
  ```
  1. CURRENT STATE  settled facts only; not reopenable by this agent
  2. DO NEXT        ONE objective, one sentence
  3. DO NOT         no scope expansion, no adjacent work, no next task
  4. CONTEXT        exact files, commands, constraints — nothing more
  5. SUCCESS        exact completion condition, checkable by a stranger
  6. STOP           report found/changed/need-to-know/my actions/blockers, then halt
  ```
  Plus: "an output budget: 'Under N tokens. Cite `file:line`. No pasted diffs.'"; "**Banned:** 'think deeply', 'explore all approaches', 'be thorough'…"; "'As we discussed' is a bug."; "Write the brief to `briefs/` before spawning; never edit it after."; "Anything off-roster gets an explicit model and effort."; "Never `fable` on a subagent."; "Read-only work parallelizes freely."; "Agents are sent to **refute**, not confirm."; "**Absent result file = UNKNOWN.** Not failed, not finished."; "**Every launched agent must have a recorded result.**"; "Ultracode and large workflows stay off unless you ask; if you ask, cap the agent count."

  README cost notes (author's claims): "Fable spawning Fable to run a grep is how a week of quota disappears in a day". `CLAUDE_CODE_SUBAGENT_MODEL=sonnet` together with `CLAUDE_CODE_SUBAGENT_MODEL_FORCE=1` forces all subagents to Sonnet ([README](https://github.com/SirRuggie/claude-code-orchestration-kit)). The default loop is sequential (orchestrate → builder → refuter), with no fan-out mechanism. It is very new and has low adoption.

**8. AndyShaman/senior-fable.** 27 stars, created 2026-07-02 ([repo](https://github.com/AndyShaman/senior-fable)). Tagline: "The expensive model decides. The cheap models type."
- Roles: Lead = session model; Implementer = Opus; Worker = Sonnet `fast-worker`; Investigator = Sonnet `deep-reasoner` (read-only); Reviewer = Opus.
- Briefs must contain goal, file scope, constraints, definition of done, and a **"User's words" line quoting the request**, because a lead that paraphrases tends to narrow or widen it. An optional "Report to" line writes long reports to disk so only a summary and path return.
- Blind cross-role review. A spec that produced a wrong result is not resent unchanged.
- Cost notes: a stronger model at low effort "can beat a weaker one at high effort, for less". On Max plans Fable is capped at 50% of the weekly limit. Measured: of 247 resumes, 77% within five minutes hit the prompt cache; after that the ~130K-token prefix is rewritten, so a fresh compact spawn can be cheaper.
- Warns "avoid 'fleets' when one agent will do". It does not describe a fan-out mechanism.

**9. realgarit/fable-baton.** 26 stars, created 2026-07-10 ([repo](https://github.com/realgarit/fable-baton)).
- Roster: scout=Haiku, executor=Sonnet, architect=Opus, verifier=Haiku.
- Hooks: SessionStart injects the policy, UserPromptSubmit restates the delegation rules, and a PostToolUse "tripwire" warns after 4 consecutive inline tool calls without delegating.
- Anti-waste rules include "no pointless fan-out".
- **Honest benchmark** (n=2 per cell, one small Node project). Total cost was about the same or higher with the plugin: bugfix $0.96 off vs. $1.15 on; feature $1.52 vs. $1.50; review $2.13 vs. $2.71. Its claimed gain is shifting tokens off the top model: Fable output fell ~44% on the feature task. The author calls the results "directional".

**10. Rylaa/fable5-opus5.5-orchestrator ("Fable Orchestrator").** 80 stars, created 2026-06-12 ([repo](https://github.com/Rylaa/fable5-opus5.5-orchestrator)).
- Fable 5 "keeps the chair" (plan, arbitrate, decide) and "sizes tier + effort per task".
- Sonnet 5 runs at low effort for bulk gathering (fetch/grep/scan) and med–high for implementation, briefs and review. Opus 5.5 takes architecture, migrations and security.
- "Escalation is one-way. Sonnet returns 'uncertain' and it goes to Opus, never back to the chair."
- A "solo guard" hook watches the chair. The author dropped earlier ledger/interview gates after finding that "A chair that never delegated never met a gate at all".
- It needs tmux, runs on macOS/Linux only, and targets agent-teams teammates rather than many short-lived subagents.

**11. mrtooher/fable-mode.** 870 stars, created 2026-06-13 ([repo](https://github.com/mrtooher/fable-mode)).
- Ladder "Haiku → Sonnet → Opus → Fable 5.1 → the user", with one skill per rung "tuned to that tier's known failure mode":
  - `fable-sonnet`: "skips the failable check, substitutes 'looks right'"
  - `fable-haiku`: "bulk, cheap, parallel mechanical work" and "skips verification under time pressure"
  - `fable-opus`: "orchestrates Sonnet/Haiku workers" and "trusts its own introspection; scope growth"
- Core rule: "Verify with a check that can fail… 'I reviewed it and it looks right' is not a check."
- Key field finding, verbatim: "Field feedback on v2 (r/claudeskills): telling a model *in prose* to spawn a worker almost always runs the task inline. So v3 moves the discipline into real agent definitions… `fable-orchestrator` — **no Write/Edit tool**."
- A `double-check` delivery gate uses a panel of fresh checkers: "Haiku for mechanical checks, Sonnet for requirements, Opus to adjudicate".

**12. wshobson/agents.** 40,271 stars; 94 plugins, 202 agents, 184 skills ([repo](https://github.com/wshobson/agents)).
- Model distribution by agent: Fable 2, Opus 54, Sonnet 70, Haiku 24, Inherit 52.
- Criteria: Haiku for "Generating code from well-defined specifications… Writing documentation with clear templates". Sonnet for "Orchestrating multi-agent workflows".

([docs/agents.md](https://github.com/wshobson/agents/blob/main/docs/agents.md#model-configuration)) It is a model-tiered agent catalog. The README gives no fan-out or briefing guidance ([README](https://github.com/wshobson/agents)).

**13. VoltAgent/awesome-claude-code-subagents.** 25,562 stars. Each agent's frontmatter `model` field "automatically routes it to the right Claude model":
- `opus`: "Deep reasoning — architecture reviews, security audits"
- `sonnet`: "Everyday coding"
- `haiku`: "Quick tasks — docs, search, dependency checks"

Tools are scoped by role, e.g. "Research agents… `Read, Grep, Glob, WebFetch, WebSearch`" ([README](https://github.com/VoltAgent/awesome-claude-code-subagents)). These are persona definitions, not an orchestration method.

**14. zscole/model-hierarchy-skill.** 346 stars ([repo](https://github.com/zscole/model-hierarchy-skill)).
- Generic routing skill: "80% of agent tasks are janitorial". It routes to Tier 1/2/3, escalates when "previousAttemptFailed", and for sub-agents says "Default to Tier 1… Batch similar tasks to amortize overhead… Report failures back to parent for escalation" ([SKILL.md](https://github.com/zscole/model-hierarchy-skill/blob/main/SKILL.md)).
- Built for OpenClaw; Claude Code is secondary. Its price table is dated "Feb 2026" and lists older models (e.g. Claude Opus at $15/$75). Its "~10x cost reduction" is unsubstantiated.

**15. muratcankoylan/Agent-Skills-for-Context-Engineering: `multi-agent-patterns`.** 18,087 stars ([SKILL.md](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/multi-agent-patterns)).
- Architecture guidance rather than a runnable orchestrator.
- "Context isolation is the primary benefit". "Budget for substantially higher token costs". "upgrading to better models often provides larger performance gains than doubling token budgets".
- Warns of the supervisor "telephone game": "supervisor architectures initially perform approximately 50% worse than optimized versions… (LangGraph benchmarks). Supervisors paraphrase sub-agent responses, losing fidelity". It proposes a `forward_message` pass-through.
- Also warns of a "Supervisor Bottleneck": the supervisor "accumulates context from all workers".

**16. revfactory/harness (v2).** 9,131 stars, created 2026-03-26 ([repo](https://github.com/revfactory/harness)).
- A meta-skill that generates agent teams from six patterns, including "Fan-out/Fan-in" and "Supervisor".
- Maps fan-outs to "**Workflow orchestration** — deterministic scripts (`pipeline()` / `parallel()` / schemas / budgets) for fan-outs, verification loops, and large-scale runs". It picks the mode "from the **shape of the control flow**, not from team size".
- "v1 pinned every agent to `model: "opus"`. v2 selects a tier per agent… and forbids unjustified blanket pins."
- Docs are partly in Korean.

**17. ruvnet/ruflo.** 74,052 stars ([repo](https://github.com/ruvnet/ruflo)). A heavy swarm framework: "314 MCP tools", "Queen-led hierarchy (Raft, Byzantine, Gossip)", multi-provider "smart routing", and a cost-tracker plugin. It claims "Intelligent routing (89% accuracy)" without a method. The repo search for `ruvnet/claude-flow` returned only `ruflo`, so this appears to be the renamed claude-flow (inference).

**Other repos seen, not deeply examined:**
- **josstei/maestro-orchestrate** (465 stars): "39 specialists, parallel subagents" across Gemini CLI, Claude Code, Codex and Qwen.
- **barkain/claude-code-workflow-orchestration** (87 stars): "automatic task decomposition, parallel agent execution".
- **rokoss21/swarm-iosm** (37 stars): "Parallel Subagent Orchestration Engine… Continuous dispatch scheduling, quality gates".
- **shinpr/sub-agents-skills** (91 stars): cross-LLM routing to Codex, Gemini, Kimi and others.
- **stefanoginella/auto-bmad**: "model/effort-tuned subagents". **Archived.**

([GitHub search](https://github.com/search?q=claude+code+subagents+orchestration&type=repositories))

### Inferences
- For the user's 195-country case, the strongest design to borrow combines:
  - translate-book's batch + manifest + resume + completeness-check skeleton
  - Weizhena's items × fields outline
  - NeoLab's reusable-rubric judge for "repeatable groups" and its per-item escalation ladder (Haiku/Sonnet → Opus only for failing items)
  - SirRuggie's six-part brief with an explicit output budget
  - superpowers' "always specify the model" and "turn count beats token price" rules
- Common gaps across all of them:
  - No per-item **output schema** with explicit "unknown/not found" handling and source fields (translate-book's meta schema is the only partial example).
  - No **concurrency/batch sizing** guidance for 100+ agents (translate-book's default of 8 is the only number).
  - No guidance on **brief caching**, i.e. one shared template plus a per-item variable to keep a stable prompt prefix.
  - No **cost accounting** per run.
  - No **sampling-based QA** (spot-check k of N rather than a judge per item).
- The fable-mode finding that prose-only instructions to delegate get ignored, and Rylaa's equivalent hook observation, suggest a skill should give the orchestrator a concrete dispatch procedure, or a script/Workflow, rather than exhortation.

### Gaps
- I could not get true last-commit dates (`pushed_at`). Activity is inferred from `updated_at` only.
- I did not read the NeoLab file in full (118 KB), Weizhena's agent definitions, or Rylaa's/senior-fable's actual SKILL texts (only READMEs). Their verbatim briefing prompts are therefore not quoted.
- The cost claims (fable-baton's benchmark, senior-fable's cache numbers, zscole's "~10x") are the authors' own and not independently verified.

---

## Q3. Skills or prompts specifically about writing delegation briefs, or about Haiku/Sonnet workers under an Opus (or Fable) orchestrator

### Takeaway
Brief-writing guidance converges on a small, consistent anatomy across independent authors:
- one objective
- explicit scope and "do not" constraints
- only the context needed (never "as we discussed")
- a checkable success condition
- a defined return format with an output budget
- results written to files

Expensive-lead / cheap-worker routing is now a common 2026 plugin genre, almost always as "Opus/Fable lead + Sonnet workers + Haiku scouts + Opus reviewer".

### Cited Findings
- **Brief anatomy, by source:**
  - superpowers: specific scope, clear goal, constraints, pasted errors/context, explicit return summary ([dispatching-parallel-agents](https://github.com/obra/superpowers/blob/main/skills/dispatching-parallel-agents/SKILL.md)).
  - SirRuggie: CURRENT STATE / DO NEXT / DO NOT / CONTEXT / SUCCESS / STOP plus a token budget ([core/CLAUDE.md](https://github.com/SirRuggie/claude-code-orchestration-kit/blob/main/core/CLAUDE.md)).
  - senior-fable: goal / file scope / constraints / definition of done / "User's words" / optional "Report to" file ([senior-fable](https://github.com/AndyShaman/senior-fable)).
  - superpowers SDD: brief written to its own file; dispatch holds only task + interfaces + global constraints + report path; returns status codes DONE / DONE_WITH_CONCERNS / NEEDS_CONTEXT / BLOCKED ([subagent-driven-development](https://github.com/obra/superpowers/blob/main/skills/subagent-driven-development/SKILL.md)).
- **Banned brief phrases**: "'think deeply', 'explore all approaches', 'be thorough', project history, bundled future tasks" ([SirRuggie core/CLAUDE.md](https://github.com/SirRuggie/claude-code-orchestration-kit/blob/main/core/CLAUDE.md)). Compare NeoLab, which *adds* "Let's think step by step" and a mandatory self-critique block to every worker prompt ([NeoLab do-in-parallel](https://github.com/NeoLabHQ/context-engineering-kit/blob/master/plugins/sadd/skills/do-in-parallel/SKILL.md)). The two sources disagree on whether to push workers toward more reasoning.
- **Don't paraphrase the user**: senior-fable requires a "User's words" line because paraphrasing leads narrow or widen the request ([senior-fable](https://github.com/AndyShaman/senior-fable)). The context-engineering skill makes the related point that supervisors paraphrasing *results* lose fidelity ("telephone game") ([multi-agent-patterns](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/multi-agent-patterns)).
- **Explicit model on every dispatch**: "Always specify the model explicitly when dispatching a subagent" ([superpowers SDD](https://github.com/obra/superpowers/blob/main/skills/subagent-driven-development/SKILL.md)) and "Anything off-roster gets an explicit model and effort" ([SirRuggie](https://github.com/SirRuggie/claude-code-orchestration-kit/blob/main/core/CLAUDE.md)).
- **Env-var overrides**: `CLAUDE_CODE_SUBAGENT_MODEL` overrides per-agent choices ([senior-fable](https://github.com/AndyShaman/senior-fable)). Pinning resolution order: "per-invocation `model` → agent frontmatter (`inherit` = main model) → `CLAUDE_CODE_SUBAGENT_MODEL` → main conversation's model" ([SirRuggie core/CLAUDE.md](https://github.com/SirRuggie/claude-code-orchestration-kit/blob/main/core/CLAUDE.md)). The two sources describe the precedence somewhat differently; check against official docs.
- **Cheap-worker caveat**: "the cheapest models routinely take 2-3× the turns on multi-step work — costing more overall" ([superpowers SDD](https://github.com/obra/superpowers/blob/main/skills/subagent-driven-development/SKILL.md)). Per-tier failure modes: Sonnet "substitutes 'looks right'"; Haiku "skips verification under time pressure" ([fable-mode](https://github.com/mrtooher/fable-mode)).
- **Effort as a lever alongside model**: Rylaa's plugin runs Sonnet 5 at "low" effort for bulk fetch/scan and "med–high" for judgment ([Rylaa](https://github.com/Rylaa/fable5-opus5.5-orchestrator)). senior-fable says a stronger model at low effort "can beat a weaker one at high effort, for less" ([senior-fable](https://github.com/AndyShaman/senior-fable)).
- **Delegation must be structural**: prose instructions to spawn workers "almost always" ran inline, so fable-mode v3 gives its orchestrator no Write/Edit tools ([fable-mode](https://github.com/mrtooher/fable-mode)). fable-baton uses a PostToolUse tripwire after 4 inline calls ([fable-baton](https://github.com/realgarit/fable-baton)).

### Inferences
- For a research fan-out, a brief template could merge SirRuggie's six sections with a per-item output schema and an output-token budget. The "User's words" line and an explicit model/effort per dispatch would counter the two most-cited failure modes: scope drift and silent inheritance of an expensive model.
- The conflict between "ban 'be thorough'" and "add CoT + self-critique" is worth testing empirically for Sonnet research workers. Neither source shows evidence for its position on research tasks.

### Gaps
- I found no community skill dedicated solely to "how to write a subagent brief" as a standalone, reusable artifact. Brief guidance is always embedded in a larger workflow.
- A `paulrberg/agent-skills` "claude-handoff" skill appeared in search results ("Sonnet by default, Opus where reasoning difficulty demands it"), but the raw path I tried returned 404, so it is unverified.

---

## Q4. Equivalent material from other ecosystems that could be adapted

### Takeaway
Other frameworks have first-class primitives for exactly this "map over a list" pattern (LangGraph `Send`, CrewAI's per-input crew kickoff), which Claude Code skills lack. Several Claude Code community skills are already cross-harness (Codex, Gemini CLI, OpenCode) and include tier-equivalence tables.

### Cited Findings
- **LangGraph**: the Graph API docs have a "Map-Reduce and the Send API" section. The old how-to URL redirects there ([LangGraph Graph API](https://docs.langchain.com/oss/python/langgraph/graph-api#map-reduce-and-the-send-api)). The page describes super-steps in which "Nodes that run in parallel are part of the same super-step" ([LangGraph Graph API](https://docs.langchain.com/oss/python/langgraph/graph-api#map-reduce-and-the-send-api)).
- **CrewAI** hierarchical process: "a 'manager' agent coordinates the workflow, delegates tasks, and validates outcomes"; "designed to leverage advanced models like GPT-4, optimizing token usage". The docs nav also lists "Kickoff Crew for Each" and a "Strategic LLM Selection Guide" ([CrewAI Hierarchical Process](https://docs.crewai.com/en/learn/hierarchical-process)). I did not open those two pages.
- **Cross-harness Claude Code skills**:
  - NeoLab `do-in-parallel` has a "Cross-Provider Equivalence" table: `haiku` ≈ gemini-flash-lite / gpt-oss class; `sonnet` ≈ gemini-pro / GPT-5-mini class; `opus` ≈ GPT-5.5 / deep-think modes ([NeoLab](https://github.com/NeoLabHQ/context-engineering-kit/blob/master/plugins/sadd/skills/do-in-parallel/SKILL.md)).
  - Weizhena ships a Codex `web-researcher.toml` agent and runs on OpenCode ([Weizhena](https://github.com/Weizhena/Deep-Research-skills)).
  - maestro-orchestrate targets Gemini CLI, Claude Code, Codex and Qwen Code ([GitHub search](https://github.com/search?q=claude+code+subagents+orchestration&type=repositories)).
  - VoltAgent maintains a sibling `awesome-codex-subagents` list ([awesome-agent-skills README badge link](https://github.com/VoltAgent/awesome-codex-subagents)).
- **Cheaper non-Anthropic workers under a Claude orchestrator**:
  - Rayline (Show HN, 2026-06-08) routes Claude Code subagents to on-device and open models. Its founder claims open models "complete tasks with less tokens and cost less per token than both Sonnet and Haiku" ([HN 48448372](https://news.ycombinator.com/item?id=48448372)).
  - hughminhphan/claudemix (Claude orchestrator + GPT executor subagents) and ZSeven-W/dsh-crew (DeepSeek workers) do similar things ([GitHub search](https://github.com/search?q=claude+code+subagents+orchestration&type=repositories)).

### Inferences
- LangGraph's `Send` and CrewAI's for-each kickoff confirm that "map one template over N inputs, then reduce" is the canonical shape. A Claude Code skill could reproduce it with a script or Workflow-driven fan-out, as harness v2 recommends ([revfactory/harness](https://github.com/revfactory/harness)), instead of hoping the orchestrator issues 195 Agent calls correctly.

### Gaps
- I did not research the OpenAI Agents SDK, Codex-specific orchestration skills, Cursor background-agent rules, or Gemini CLI subagent docs in depth. Tool-call budget ran out; nothing verified there beyond the cross-harness repos above.
- I did not read the LangGraph Send section body or the CrewAI for-each page beyond confirming they exist.

---

## Q5. Community discussion: best practices and common complaints

### Takeaway
Recurring themes:
- Subagents are best for independent, analysable or read-heavy work.
- Fresh-context workers drift out of sync with each other and with project conventions.
- Parallelism buys wall-clock time, not token savings.
- Cheap models can cost more if they take more turns.
- Orchestrators often fail to delegate unless forced.

There is little rigorous public data. The one shared benchmark (fable-baton) showed no total-cost saving.

### Cited Findings
- **HN, "How to use Claude Code subagents to parallelize development"** (288 points, 128 comments, 2025-09-09) ([HN 45181577](https://news.ycombinator.com/item?id=45181577)):
  - User CuriouslyC: "this is incredibly unreliable. Subagents don't get a full system prompt (including stuff like CLAUDE.md directions) so they are flying very blind… will tend to get derailed… and veer into mock solutions".
  - User theshrike79: "I don't use subagents to do things, they're best for analysing things… the 'main' context only gets the report".
  - **Conflict**: 2026 plugin authors say subagents do load CLAUDE.md. "Subagents load this file too, so it is directives only" ([SirRuggie core/CLAUDE.md](https://github.com/SirRuggie/claude-code-orchestration-kit/blob/main/core/CLAUDE.md)); "Subagents see CLAUDE.md but not the conversation" ([senior-fable](https://github.com/AndyShaman/senior-fable)). The 2025 complaint may be outdated.
- **HN, "My Seven Claude Code Subagents Did the Easy Part"** (2026-06-03), commenter hipvlady: "each subagent has its own understanding of the plan… You get work that's similar but doesn't fit together… The easy part is parallelism" ([HN 48382744](https://news.ycombinator.com/item?id=48382744)).
- **HN, Rayline thread**, commenter Hans_Cui: "The hard part with these routers is deciding the cheap model is 'good enough' without already knowing the answer" ([HN 48448372](https://news.ycombinator.com/item?id=48448372)).
- **Prose-only delegation fails**: "Field feedback on v2 (r/claudeskills): telling a model *in prose* to spawn a worker almost always runs the task inline" ([fable-mode](https://github.com/mrtooher/fable-mode)). Similarly, "A chair that never delegated never met a gate at all — measured in the wild, five consecutive sessions…" ([Rylaa](https://github.com/Rylaa/fable5-opus5.5-orchestrator)).
- **Cost reality**:
  - fable-baton's benchmark showed equal or higher total cost with delegation (e.g. review $2.13 → $2.71) while cutting top-model output tokens ~38–44% ([fable-baton](https://github.com/realgarit/fable-baton)).
  - "the cheapest models routinely take 2-3× the turns" ([superpowers SDD](https://github.com/obra/superpowers/blob/main/skills/subagent-driven-development/SKILL.md)).
  - multi-agent systems "can cost far more tokens than single-agent chat" ([multi-agent-patterns](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/multi-agent-patterns)).
  - Prompt-cache timing matters: 77% of resumes within 5 minutes hit cache ([senior-fable](https://github.com/AndyShaman/senior-fable)).
- **Quota blowups from expensive subagents**: "Fable spawning Fable to run a grep is how a week of quota disappears in a day" ([SirRuggie README](https://github.com/SirRuggie/claude-code-orchestration-kit)).
- **Usage-limit interruptions** are a recognised pain point. A Show HN (2026-09-24) offers "Resume Claude Code subagents killed by a usage limit, don't redo them" ([HN 49831324](https://news.ycombinator.com/item?id=49831324); not opened beyond its title).

### Inferences
- For a 195-agent run, the community evidence points to these design requirements:
  - resumable, file-based per-item outputs, so usage-limit kills don't force a rerun
  - forced, procedural dispatch
  - an explicit cheap model per dispatch
  - a shared glossary/definitions block for cross-item consistency (translate-book's fix for fresh-context drift)
  - an expectation that total tokens rise, not fall; the saving comes from cheap-model pricing and quota-tier separation, not from parallelism itself

### Gaps
- I could not open Reddit directly. One search summary described an April 2026 r/ClaudeAI-mirror post (Opus main + Sonnet sub-agents, Haiku only for mechanical work, with doubts that Haiku can follow Opus-written structured prompts; 1 point, 3 comments). It is unverified, so I don't cite it as a finding.
- Blog figures surfaced by search, such as CloudZero's "one Opus orchestrator + four Sonnet workers ≈ 40% cheaper than five Opus" and MindStudio's "3–6x cost, 50–80% wall-clock reduction", come from vendor blogs I did not open. Treat them as unverified.
- I found no community benchmark of Sonnet vs. Haiku vs. Opus sub-agent quality on research or extraction tasks (as opposed to coding).
