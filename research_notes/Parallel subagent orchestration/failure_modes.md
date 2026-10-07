# Failure Modes of Parallel Sub-Agent (Fan-Out) LLM Systems, and Documented Fixes

Scope note: compiled 2026-10-07. Key primary sources are from June 2025 (Anthropic, Cognition, LangChain); they are more than a year old but remain the canonical references, and Cognition published a 2026 follow-up. Academic material runs from March 2025 to August 2026. Several 2026 arXiv papers are preprints (flagged below). Claude Code GitHub issues are user reports, not confirmed root causes.

## 1. Anthropic's "How we built our multi-agent research system": early failures and the fix for each

### Takeaway
Anthropic's early lead agents over-spawned subagents, searched endlessly, duplicated each other's work, picked SEO farms over authoritative sources, wrote over-specific queries, and kept going after they already had enough. Each fix was a prompt-level change: effort-scaling rules, detailed delegation briefs, a start-wide-then-narrow rule, source-quality heuristics, and stopping rules. Separately, writing results to the filesystem avoided "telephone game" loss.

### Cited Findings
**Source metadata**
- Published June 13, 2025 on Anthropic Engineering. The architecture is an Opus 4 lead with Sonnet 4 subagents, which beat single-agent Opus 4 by 90.2% on Anthropic's internal research eval — [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system)

**Failure → fix pairs (all from the same source)**
- **Over-spawning:** early agents made errors like "spawning 50 subagents for simple queries." Fix: explicit effort-scaling rules in the lead prompt. Simple fact-finding gets 1 agent with 3–10 tool calls. Direct comparisons get 2–4 subagents with 10–15 calls each. Complex research gets more than 10 subagents with clearly divided responsibilities — [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system)
- **Endless searching:** agents scoured the web "endlessly for nonexistent sources." Fix: explicit guardrails and prompt heuristics — [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system)
- **Agents distracting each other:** agents sent excessive updates to one another. The only fix described is general prompt engineering — [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system)
- **Duplicated work and gaps from vague briefs:** in one example, one subagent researched the 2021 automotive chip crisis while two others duplicated each other on 2025 supply chains. Fix: every delegation states an objective, an output format, guidance on tools and sources, and clear task boundaries. Short instructions caused the duplication — [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system). LangChain quotes the same lesson: vague instructions made subagents "misinterpret the task or perform the exact same searches as other agents" — [LangChain](https://www.langchain.com/blog/how-and-when-to-build-multi-agent-systems)
- **Overly long, specific queries:** these returned few results. Fix: start with short, broad queries, survey the landscape, then narrow — [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system)
- **SEO content farms over authoritative sources:** agents chose SEO-optimized farms over academic PDFs or high-quality personal blogs. Human testers caught this; automated evals did not. Fix: source-quality heuristics added to the prompts — [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system)
- **Wrong tools and bad tool descriptions:** these sent agents down wrong paths. Fix: a tool-testing agent rewrote the tool descriptions, which cut task completion time by 40% for later agents — [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system)
- **Continuing after results were already sufficient:** step-by-step simulations with the exact prompts and tools exposed this ("think like your agents") — [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system)

**Other principles from the same post**
- **Interleaved thinking:** the lead uses extended thinking to plan. Subagents use interleaved thinking after tool results to judge quality, find gaps and refine the next query — [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system)
- **Parallelism:** the lead runs 3–5 subagents in parallel, and each subagent runs 3+ tools in parallel. This cut research time by up to 90% on complex queries — [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system)
- **Token usage drives performance:** token usage alone explained 80% of performance variance on BrowseComp. Token usage, tool-call count and model choice together explained 95%. Agents use about 4x the tokens of chat, and multi-agent systems about 15x — [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system)
- **Artifacts to the filesystem:** subagents write outputs to external systems and pass lightweight references back to the coordinator. This avoids a "game of telephone," preserves fidelity and saves tokens — [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system)
- **Memory:** the lead saves its plan to memory because context beyond 200K tokens gets truncated. Agents summarize finished phases and spawn fresh subagents with clean contexts — [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system)
- **Production issues:**
  - Errors compound in stateful agents. The fixes were resume-from-failure, checkpoints, retries, and letting agents adapt to failing tools.
  - Debugging needed full tracing.
  - Rainbow deployments kept long-running agents from breaking mid-run.
  - The lead blocks synchronously on each subagent batch, which is a bottleneck. Asynchronous execution is future work.

  — [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system)
- **Evals:** start with about 20 real queries, since large effect sizes show up in small samples. Use an LLM-as-judge rubric covering factual accuracy, citation accuracy, completeness, source quality and tool efficiency, plus human testing for edge cases — [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system)

**Anthropic's open-sourced prompts (cookbook)**
- **Lead prompt, subagent counts:** 1 subagent for simple queries, 2–3 for standard, 3–5 for medium, 5–10 for high complexity. "Never create more than 20 subagents unless strictly necessary." Prefer fewer, more capable subagents over many narrow ones — [Anthropic cookbook research_lead_agent.md](https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/research_lead_agent.md)
- **Lead prompt, what each brief contains:** one core objective, the expected output format, background context, key questions, suggested sources with reliability criteria and sources to avoid, tool guidance, and scope boundaries. Briefs must be distinct and non-overlapping — [Anthropic cookbook research_lead_agent.md](https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/research_lead_agent.md)
- **Lead prompt, synthesis rules:** the lead coordinates and synthesizes and does no primary research unless a critical gap remains. It verifies claims, compares subagent results, and resolves conflicts by recency and consistency. A subagent never writes the final report — [Anthropic cookbook research_lead_agent.md](https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/research_lead_agent.md)
- **Subagent prompt, research budget:** under 5 tool calls for simple tasks, about 5 for medium, about 10 for hard, up to 15 for very hard. The hard cap is 20 tool calls and about 100 sources, beyond which the subagent "will be terminated." The prompt also says to stop when "no longer finding new relevant information." It does contain a contradiction: a "MINIMUM of five distinct tool calls" line sits next to "under 5" for simple tasks — [Anthropic cookbook research_subagent.md](https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/research_subagent.md)
- **Subagent prompt, research rules:**
  - Queries under 5 words, moderately broad, never repeated exactly.
  - Fetch full pages rather than relying on snippets.
  - Make parallel tool calls.
  - Flag speculation ("may"/"could"), aggregators over originals, false authority, passive voice with nameless sources, marketing language and cherry-picked data.
  - Report unresolved conflicts to the lead instead of choosing silently.
  - Inject the current date with "The current date is {{.CurrentDate}}."

  — [Anthropic cookbook research_subagent.md](https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/research_subagent.md)

### Inferences
- A 195-subagent fan-out (one per country) is about 10x the cookbook's soft cap of 20 and runs against "prefer fewer, more capable subagents." Batching countries, for example by region or 5–10 countries per agent, fits Anthropic's guidance better. Either way, the per-agent brief must still give an objective, a schema, sources and boundaries.
- Since tokens explain about 80% of research performance variance, a cheap worker running a 2–3-search budget will be shallow by construction. The budget has to be stated explicitly.

### Gaps
- Anthropic does not publish per-failure before/after metrics, except the 40% speed-up from tool-description rewrites and the 90.2% multi-agent uplift.
- Anthropic gives no specific fix for "agents distracting each other" beyond general prompt engineering.

## 2. Cognition's "Don't Build Multi-Agents" (2025) and the 2026 follow-up

### Takeaway
Cognition's 2025 argument is that parallel agents working from partial context make conflicting implicit decisions. Its two principles are "share full agent traces" and "actions carry implicit decisions." Its April 2026 follow-up keeps that verdict for parallel writers, but endorses read-only subagents, generator–verifier review loops, "smart friend" consultation, and manager–child delegation. The core rule is that writes stay single-threaded.

### Cited Findings
**The original post (June 12, 2025)**
- Author and date: Walden Yan, Cognition. Principle 1: "Share context, and share full agent traces, not just individual messages." Principle 2: "Actions carry implicit decisions, and conflicting decisions carry bad results" — [Cognition](https://cognition.com/blog/dont-build-multi-agents)
- **Flappy Bird example:** one subagent "mistook your subtask and started building a background that looks like Super Mario Bros." The other built a bird that "moves nothing like the one in Flappy Bird." Even with shared context, outputs end up inconsistent because their actions "were based on conflicting assumptions not prescribed upfront" — [Cognition](https://cognition.com/blog/dont-build-multi-agents)
- **Recommendation:** "The simplest way to follow the principles is to just use a single-threaded linear agent." For very long tasks, the post suggests a separate compression LLM that turns a history "into key details, events, and decisions," while noting this is hard to get right — [Cognition](https://cognition.com/blog/dont-build-multi-agents)
- **Comment on Claude Code:** its subagents (as of mid-2025) never work in parallel with the subtask agent and are usually limited to answering questions, not writing code. The reasons given are that subagents lack the main agent's context and that parallel subagents "might give conflicting responses." The benefit is that investigative work stays out of the main history — [Cognition](https://cognition.com/blog/dont-build-multi-agents)
- **Edit-apply example (2024):** a small model rewrote files from a large model's instructions. It could "misinterpret the instructions of the large model and make an incorrect edit" when the instructions were slightly ambiguous. This is an early documented case of a weak worker misreading a strong planner — [Cognition](https://cognition.com/blog/dont-build-multi-agents)
- **2025 verdict:** "running multiple agents in collaboration only results in fragile systems." Context "isn't able to be shared thoroughly enough between the agents" — [Cognition](https://cognition.com/blog/dont-build-multi-agents)

**The follow-up, "Multi-Agents: What's Actually Working" (April 22, 2026)**
- Walden Yan writes: "Our original observations still hold today for parallel-writer swarms." The central principle is that systems work best when "writes stay single-threaded and the additional agents contribute intelligence rather than actions" — [Cognition 2026](https://cognition.com/blog/multi-agents-working)
- **Patterns that work:**
  - Read-only subagents (web and code search), which "mostly resemble tool calls rather than true multi-agent collaboration."
  - Generator–verifier review. Devin Review catches about 2 bugs per PR, about 58% of them severe, and works best when the reviewer shares no prior context with the coder.
  - "Smart friend" consultation, where the primary's full context is forked to a stronger model that can push back.
  - Manager–child "map-reduce-and-manage" delegation.

  — [Cognition 2026](https://cognition.com/blog/multi-agents-working)
- **Problems still open:**
  - Managers tend to be overly prescriptive.
  - Agents wrongly assume their children share their state.
  - Cross-agent messaging does not happen by default.
  - Unstructured swarms are "mostly a distraction."
  - An open question: "How do you transfer context between agents without drowning the receiver?"

  — [Cognition 2026](https://cognition.com/blog/multi-agents-working)
- **Weaker models:** with SWE-1.5 as the primary and Sonnet 4.5 as the smart friend, cost and speed gains were real, but "the quality ceiling was set by the primary." The key unsolved problem: "how does a dumber model know it's at its limits?" — [Cognition 2026](https://cognition.com/blog/multi-agents-working)
- **LangChain's reconciliation (June 16, 2025):** both posts agree that context engineering is the core job and that read-heavy tasks parallelize much better than write-heavy ones. In Anthropic's system, synthesis "is deliberately handled by a single main agent in one unified call." Note that LangChain is a vendor promoting LangGraph and LangSmith — [LangChain](https://www.langchain.com/blog/how-and-when-to-build-multi-agent-systems)

### Inferences
- Per-country research is read-only and independent, the category Cognition considers safe. The Cognition-style risk enters at synthesis. Each worker makes implicit choices about definitions, units, time window and what counts as a source. If the orchestrator does not fix these upfront in a shared schema, the 195 outputs will not be comparable. This is "conflicting implicit decisions" in a research setting.
- "Quality ceiling set by the primary" plus "how does a dumber model know it's at its limits" points to the same rule: cheap workers need explicit escalation and "unknown" exits rather than being trusted to self-assess.

### Gaps
- I found no published rebuttal to Cognition from Anthropic. The 2026 follow-up is effectively a partial self-revision.
- Cognition's 2026 metrics (the 8x usage growth, the bug-catch rates, and the claim that SWE-1.6 reaches Opus-4.5 level) are self-reported and not independently verified.

## 3. Academic taxonomies: MAST, error propagation, and handoff information loss

### Takeaway
MAST (Cemri et al., UC Berkeley) groups 14 failure modes into system design (about 44% of observed failures), inter-agent misalignment (about 32%) and task verification (about 24%). The most common single modes are step repetition, reasoning–action mismatch, unawareness of termination conditions, and disobeying the task spec. Newer 2026 work shows small errors cascading into "false consensus," and finds that in deep-research systems the orchestrator introduces most final-report errors.

### Cited Findings
**MAST, "Why Do Multi-Agent LLM Systems Fail?" (arXiv 2503.13657)**
- Authors: Cemri, Pan, Yang, Agrawal, Chopra, Tiwari, Keutzer, Parameswaran, Klein, Ramchandran, Zaharia, Gonzalez, Stoica. Versions: v1 March 17, 2025; v3 October 26, 2025. The taxonomy was built from 150 traces, and the released dataset (MAST-Data) holds 1,600+ annotated traces across 7 frameworks: MetaGPT, ChatDev, HyperAgent, AppWorld, AG2, Magentic-One and OpenManus. Inter-annotator kappa is 0.88 — [arXiv abs](https://arxiv.org/abs/2503.13657); [arXiv html v3](https://arxiv.org/html/2503.13657v3)
- The 14 modes and their share of observed failures (the percentages sum to about 100%, so they appear to be shares of failure annotations rather than of traces):

  | Category | Mode | Share |
  |---|---|---|
  | FC1 System design | FM-1.1 Disobey task specification | 11.8% |
  | | FM-1.2 Disobey role specification | 1.5% |
  | | FM-1.3 Step repetition | 15.7% |
  | | FM-1.4 Loss of conversation history | 2.8% |
  | | FM-1.5 Unaware of termination conditions | 12.4% |
  | FC2 Inter-agent misalignment | FM-2.1 Conversation reset | 2.2% |
  | | FM-2.2 Fail to ask for clarification | 6.8% |
  | | FM-2.3 Task derailment | 7.4% |
  | | FM-2.4 Information withholding | 0.85% |
  | | FM-2.5 Ignored other agent's input | 1.9% |
  | | FM-2.6 Reasoning–action mismatch | 13.2% |
  | FC3 Task verification | FM-3.1 Premature termination | 6.2% |
  | | FM-3.2 No or incomplete verification | 8.2% |
  | | FM-3.3 Incorrect verification | 9.1% |

  Category totals, computed by summing the modes: FC1 ≈ 44.2%, FC2 ≈ 32.4%, FC3 ≈ 23.5% — [arXiv html v3](https://arxiv.org/html/2503.13657v3)
- **Superficial verification:** verifiers often ran only shallow checks, such as whether code compiles or TODOs remain, even when prompted for a thorough review. In a ChatDev chess example the code compiled but broke the rules of chess — [arXiv html v3](https://arxiv.org/html/2503.13657v3)
- **Interventions:** on ChatDev with GPT-4o, better role specifications and giving the CEO the final say each gave +9.4% task success. Adding a high-level task-objective verification step gave +15.6% on ProgramDev. The authors conjecture that better base models alone will not fix the taxonomy, and completion rates stayed low after the interventions — [arXiv html v3](https://arxiv.org/html/2503.13657v3)

**Scaling and error propagation**
- **"Towards a Science of Scaling Agent Systems"** (Kim et al., arXiv 2512.08296, December 2025, rev. April 2026). It covers 260 configurations, 6 benchmarks, 5 architectures and 3 LLM families. Relative to a single agent, multi-agent results ranged from +80.8% on decomposable financial reasoning to −70.0% on sequential planning. Coordination has diminishing returns once single-agent baselines are strong. Tool-heavy tasks pay coordination overhead, and architectures without centralized verification propagate more errors — [arXiv](https://arxiv.org/abs/2512.08296)
  - A widely repeated "17.2x vs 4.4x error amplification" figure was not in the abstract I could read and was not verified. A TDS article attributes "17x" to a January 2026 blog post — [Towards Data Science](https://towardsdatascience.com/the-multi-agent-trap/). Treat it as unverified.
- **"From Spark to Fire"** (Xie et al., arXiv 2603.04474, March 2026, rev. May 2026). Collaboration can make "minor inaccuracies … gradually solidify into system-level false consensus." Across 6 frameworks it identifies cascade amplification, topological sensitivity and consensus inertia, and a single injected atomic error can cause widespread failure. A genealogy-graph governance plugin prevented final infection in at least 89% of runs — [arXiv](https://arxiv.org/abs/2603.04474)
- **"Who is the Agent to Blame?"** (Hirsch, Wan, Wang, Stengel-Eskin, Bansal, Dagan; arXiv 2608.24306; EMNLP 2026 Main). It defines four error types: hallucination, uncited input reliance, uncited output, and insufficient citations. In the AI-Q deep-research system, "84.7% of final-report errors … originate at the orchestrator," about 31% of them hallucinations and the rest citation mistakes. Agents that summarize a single document make few errors. Two simple interventions raised citation recall by 5% — [arXiv](https://arxiv.org/abs/2608.24306)
- **"Detecting and Correcting Reference Hallucinations in Commercial LLMs and Deep Research Agents"** (Rao, Wong, Callison-Burch; arXiv 2604.03173; preprint). Across about 221K citation URLs, 3–13% were hallucinated (no Wayback record ever) and 5–18% did not resolve. Deep-research agents cite more and fabricate at a higher rate. Giving models the open-source `urlhealth` checker sharply cut non-resolving links. The authors suggest restricting URL emission to pages the agent actually visited. This is from a search summary of the paper; I did not open the PDF — [arXiv PDF](https://arxiv.org/pdf/2604.03173)
- **"Don't Stop Early"** (Choubey et al., Salesforce; arXiv 2604.24978; ACL Industry 2026). It names three failure modes of deep research: uneven information coverage, context explosion, and premature stopping. The fixes are coverage-driven decomposition (outline plus reflection), controlled information flow (each agent sees only what it needs), and evidence-aware termination (explicit sufficiency criteria). The abstract reports the best overall results on DeepResearch Bench but no numbers — [arXiv](https://arxiv.org/abs/2604.24978)

### Inferences
- The MAST categories map directly onto a 195-country fan-out:
  - FM-1.1 (disobey task spec): workers ignore the schema.
  - FM-1.5 and FM-3.1 (termination): workers stop after one search, or never stop.
  - FM-2.2 (fail to ask for clarification): ambiguous definitions get guessed rather than flagged.
  - FM-3.2 and FM-3.3 (verification): the orchestrator accepts outputs unchecked.
- The deep-research blame study implies the orchestrator's synthesis step is the biggest single source of final errors. The orchestrator should therefore copy facts and citations from worker files rather than re-paraphrase them.

### Gaps
- I could not confirm MAST's peer-reviewed venue. NeurIPS 2025 Datasets & Benchmarks is commonly cited, but the arXiv page does not state it.
- I could not open "Facts Without Rules: Boundary Metadata Collapse in Multi-Agent LLM Handoffs" ([arXiv 2608.29028](https://arxiv.org/pdf/2608.29028)), "Hallucination Cascade" ([arXiv 2606.07937](https://arxiv.org/abs/2606.07937)) or "The Hallucination Snowball" ([arXiv 2608.14588](https://arxiv.org/pdf/2608.14588)) beyond search snippets. They look directly relevant to handoff information loss and are worth reading.

## 4. Failure modes specific to cheaper worker models

### Takeaway
There is direct evidence for six cheap-worker problems:
- shallow, budget-starved research (token usage drives quality)
- instruction-following that degrades as briefs get denser, with a bias toward earlier instructions
- fabricated citations and URLs
- confident, fabricated "completed" reports with zero tool calls
- stale knowledge presented without any sign of doubt
- weak self-assessment of their own limits

Smaller models hallucinate across more pipeline stages than strong ones, according to a search summary of the blame study that I could not confirm on the abstract page.

### Cited Findings
- **Shallow research and budget starvation:** token usage explains 80% of BrowseComp variance, and upgrading to Claude Sonnet 4 gave a larger gain than doubling the token budget on Claude Sonnet 3.7 — [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system). The cookbook subagent prompt fixes this with explicit budgets (about 5, 10 or 15 calls by difficulty) and a hard cap of 20 — [Anthropic cookbook](https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/research_subagent.md)
  - Verified quote: "upgrading to Claude Sonnet 4 is a larger performance gain than doubling the token budget on Claude Sonnet 3.7." Model capability and budget both matter, and a weaker worker cannot fully make up the gap with extra budget — [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system)
- **Premature stopping:** this is one of three core deep-research failure modes. The fix is explicit evidence sufficiency conditions per step — [Don't Stop Early, arXiv 2604.24978](https://arxiv.org/abs/2604.24978). MAST records premature termination at 6.2% and termination-condition unawareness at 12.4% — [MAST](https://arxiv.org/html/2503.13657v3)
- **Instructions dropped in long briefs:** on IFScale (500 keyword instructions, 20 models), "even the best frontier models only achieve 68% accuracy at the max density of 500 instructions." Model size and reasoning ability track three distinct degradation patterns, and models show a bias toward earlier instructions — [IFScale, arXiv 2507.11538 (July 2025)](https://arxiv.org/abs/2507.11538). Anthropic warns against "cramming long lists of edge-case rules" and recommends a few diverse canonical examples instead — [Anthropic context engineering (Sept 29, 2025)](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- **Hallucinated citations:** 3–13% of citation URLs are fabricated, and deep-research agents fabricate at higher rates than search-augmented chat — [arXiv 2604.03173](https://arxiv.org/pdf/2604.03173) (search summary)
- **Smaller models hallucinate at every stage:** a search summary of the blame study says that in stronger systems hallucination happens early and citation errors happen at the orchestrator, "while the smaller-model system hallucinates at every stage." I could not confirm this on the abstract page — [arXiv 2608.24306](https://arxiv.org/abs/2608.24306)
- **Fabricated completions with zero tool calls (Claude Code):**
  - Issue #59903 (opened May 17, 2026, Claude Code 2.1.143, Opus 4.7 subagents; closed as not planned with no maintainer response). Background subagents sometimes returned confident "completed" messages unrelated to the task. One subagent made zero tool calls. Another did 143 correct tool calls over about 21 minutes and then ended with an off-topic final message. Failures were silent and non-deterministic. The reporter nearly discarded valid work because only the final summary was checked — [GitHub #59903](https://github.com/anthropics/claude-code/issues/59903)
  - Issue #67730, per a mirror site: subagents returned fully hallucinated results with zero tool calls, and report quality correlated perfectly with actual tool use. Not verified on GitHub — [claudeissues.com #67730](https://claudeissues.com/issue/67730-subagents-return-fully-hallucinated-results-with-zero-tool-calls-leaked-tool-cal)
  - Issue #13349, per the mirror: a code-review subagent invented struct definitions and critiqued them, despite being told to say if it could not read the file — [claudeissues.com #13349](https://claudeissues.com/issue/13349-model-code-reviewer-subagent-hallucinated-file-contents-despite-successful-file)
  - Issue #40053, per the mirror: a PR-review agent analyzed the wrong PR, and the main agent caught it by checking itself — [claudeissues.com #40053](https://claudeissues.com/issue/40053-bug-claude-code-agent-hallucinating-pr-review-content-without-verifying-actual-p)
- **Outdated knowledge and missing date anchoring:** stale models answer "without indicating any uncertainty about its knowledge currency." In one example, a model applied superseded OSHA guidance and missed a February 2024 EU threshold — [LLMLagBench, arXiv 2511.12116](https://arxiv.org/html/2511.12116v1). Anthropic's subagent prompt injects "The current date is {{.CurrentDate}}" — [Anthropic cookbook](https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/research_subagent.md). Practitioner blogs report that agents state their training-cutoff year as "today" and recommend saying explicitly that the supplied date outranks the model's assumption (unverified practitioner source) — [tianpan.co](https://tianpan.co/blog/2026/04/17/knowledge-cutoff-silent-production-bug)
- **Weak self-assessment:** "how does a dumber model know it's at its limits?" With a weaker primary, "SWE 1.5 was not good enough at being the primary model for this setup to really work" — [Cognition 2026](https://cognition.com/blog/multi-agents-working)
- **Weak worker misreading a strong planner:** a small apply-model would "misinterpret the instructions of the large model" when they were slightly ambiguous — [Cognition 2025](https://cognition.com/blog/dont-build-multi-agents)
- **Escalation as a fix:** in Anthropic's advisor pattern (April 9, 2026), a cheap executor consults Opus "when the executor hits a decision it can't reasonably solve." Haiku with an Opus advisor scored 41.2% on BrowseComp versus 19.7% for Haiku alone, at 85% less cost per task than Sonnet solo. Sonnet with an Opus advisor gained +2.7 points on SWE-bench Multilingual at 11.9% lower cost. These are vendor-reported figures — [Claude blog](https://claude.com/blog/the-advisor-strategy)
- **Practitioner reports (anecdotal):**
  - One small self-run test found no significant difference between Sonnet and Opus orchestrators for PR review.
  - Practitioners doubt Haiku can follow detailed Opus-written prompts.
  - Unverified video summaries say Sonnet over-decomposes when it orchestrates.

  These come from secondary aggregators and are weak evidence — [search summary incl. claudeissues #26179](https://claudeissues.com/issue/26179-subagents-should-default-to-sonnet-not-inherit-opus)

### Inferences
- These items are my inferences from general LLM behavior. I found no dedicated study for any of them:
  - **Format drift** across 195 workers (inconsistent fields, units and date formats).
  - **Satisficing:** taking the first plausible number.
  - **"Laziness" and truncation:** emitting placeholders or "data not available" without searching.
- Mitigation for all three: give workers a strict output schema plus a few canonical examples, and validate the files mechanically.
- Combining IFScale's bias toward earlier instructions with Anthropic's context-rot guidance: put the most critical rules (schema, "unknown is OK," citation requirement, date) at the top of the brief and restate them at the end. Keep the brief short.

### Gaps
- I found no controlled study of Sonnet subagents versus Opus subagents for research quality specifically. The evidence is vendor benchmarks and anecdotes.
- I found no primary study quantifying format drift or satisficing in fan-out workers.

## 5. Orchestrator-side failures

### Takeaway
The orchestrator's typical failures are:
- vague or overlapping briefs
- over-decomposition
- under-specified output formats
- missing context, since subagents do not see the parent conversation
- flooding its own context with returned outputs
- trusting final summaries without verification
- introducing errors during synthesis

The last is the single largest source of errors in one deep-research study.

### Cited Findings
- **Vague delegation:** this leads to duplicated work and gaps — [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system). Managers can also go the other way and be "overly prescriptive" — [Cognition 2026](https://cognition.com/blog/multi-agents-working)
- **Over-decomposition:** "spawning 50 subagents for simple queries" — [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system). Prefer fewer, more capable subagents, with a soft cap of 20 — [Anthropic cookbook lead](https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/research_lead_agent.md)
- **Passing too little context:** a Claude Code subagent "doesn't see your conversation history, the skills you've already invoked, or the files Claude has already read." It gets only its own system prompt, the delegation prompt, and CLAUDE.md plus git status (except Explore and Plan). Rules have to be restated in the delegation prompt — [Claude Code docs](https://code.claude.com/docs/en/sub-agents). Agents "wrongly assume shared state with children" — [Cognition 2026](https://cognition.com/blog/multi-agents-working)
- **Flooding its own context:** "Running many subagents that each return detailed results can consume significant context." Only the subagent's summary returns to the parent — [Claude Code docs](https://code.claude.com/docs/en/sub-agents). Context rot means recall drops as tokens accumulate, so subagents should return condensed summaries of about 1,000–2,000 tokens — [Anthropic context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents). Fix: write to files and pass back lightweight references — [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system)
- **Not verifying:**
  - MAST's verification failures (no or incomplete verification at 8.2%, incorrect verification at 9.1%) and superficial checks — [MAST](https://arxiv.org/html/2503.13657v3)
  - Issue #59903 recommends re-verifying every subagent result rather than trusting final messages — [GitHub #59903](https://github.com/anthropics/claude-code/issues/59903)
  - Agents marked work complete "without proper testing," and later agents declared projects finished early — [Anthropic harnesses (Nov 26, 2025)](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
- **Synthesis errors:** 84.7% of final-report errors in AI-Q originate at the orchestrator — [arXiv 2608.24306](https://arxiv.org/abs/2608.24306). The deep-research URL study finds more citations do not mean fewer errors per citation — [arXiv 2604.03173](https://arxiv.org/pdf/2604.03173)
- **Contradictions merged without noticing:** errors solidify into "false consensus" through "consensus inertia" — [Spark to Fire](https://arxiv.org/abs/2603.04474). The lead prompt should explicitly compare results, track key facts and note discrepancies — [Anthropic cookbook lead](https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/research_lead_agent.md)
- **Silent model inheritance:** in Claude Code, a subagent with no `model` setting inherits the main model (resolution order: per-call `model`, then frontmatter, then `CLAUDE_CODE_SUBAGENT_MODEL`, then the main model). Up to 20 subagents run concurrently by default, with no limit on the total per session — [Claude Code docs](https://code.claude.com/docs/en/sub-agents)

### Inferences
- With 195 workers, even a 1,500-token summary each puts about 290K tokens into the orchestrator. That is past the 200K truncation Anthropic mentions, and context rot sets in well before it. File-based outputs plus a mechanical merge (script or table) are effectively required at this scale.
- The 20-concurrent default means a 195-agent run executes in waves. The orchestrator must track which countries are done, failed or missing, using a manifest file, or coverage holes will go unnoticed.

### Gaps
- I found no published study of synthesis accuracy as a function of the number of worker outputs. The 290K figure above is my arithmetic, not a measured result.

## 6. Documented fixes (consolidated catalog)

### Takeaway
The best-supported fixes are:
- explicit effort budgets and stopping rules
- complete delegation briefs (objective, schema, sources, boundaries, date)
- start-wide-then-narrow search
- source-quality heuristics
- mandatory citations restricted to pages actually visited
- "report conflicts or unknowns, don't guess"
- artifacts on the filesystem with lightweight references
- independent, clean-context verification
- escalation to a stronger model

### Cited Findings
**Catalog: failure → symptom → root cause → fix**

| # | Failure | Symptom | Root cause | Fix | Source |
|---|---|---|---|---|---|
| 1 | Over-spawning | Dozens of agents for a simple job | No effort-scaling rule | Tiered subagent counts (1 / 2–3 / 3–5 / 5–10, cap 20); prefer fewer, more capable agents | [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system); [cookbook lead](https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/research_lead_agent.md) |
| 2 | Duplicated work and gaps | Same searches across agents; missing subtopics | Vague, short briefs | Brief = objective, output format, tools and sources, boundaries, background, key questions | [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system); [cookbook lead](https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/research_lead_agent.md) |
| 3 | Shallow research or premature stop | 1–2 searches, then an answer | No budget or sufficiency criterion | Explicit tool-call budget by difficulty plus evidence sufficiency conditions | [cookbook subagent](https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/research_subagent.md); [Don't Stop Early](https://arxiv.org/abs/2604.24978) |
| 4 | Endless searching | Agents chase nonexistent sources | No stop rule | Hard cap (20 calls / 100 sources); stop on diminishing returns | [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system); [cookbook subagent](https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/research_subagent.md) |
| 5 | Over-specific queries | Few or no results | Long, hyper-specific queries | Queries under 5 words; start broad, then narrow; never repeat a query | [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system); [cookbook subagent](https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/research_subagent.md) |
| 6 | Low-quality sources | SEO farms and aggregators cited | No quality heuristics | Source hierarchy plus red flags (speculation, aggregators, false authority, nameless sources, marketing); fetch full pages, not snippets | [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system); [cookbook subagent](https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/research_subagent.md) |
| 7 | Fabricated facts or URLs | Plausible numbers; dead links | Pressure to answer; no visited-page constraint | Cite only visited pages; check URLs (`urlhealth`); route conflicts to the lead | [arXiv 2604.03173](https://arxiv.org/pdf/2604.03173); [cookbook subagent](https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/research_subagent.md) |
| 8 | Fabricated completion | "Done" with 0 tool calls, or an off-topic final message | Model or serving faults; unverified summaries | Check tool-call counts and transcripts; re-verify results | [GitHub #59903](https://github.com/anthropics/claude-code/issues/59903) |
| 9 | Dropped instructions | Schema fields missing; rules ignored | Dense briefs; bias toward early instructions | Short brief, critical rules first; a few canonical examples instead of rule lists | [IFScale](https://arxiv.org/abs/2507.11538); [Anthropic context eng.](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) |
| 10 | Stale knowledge | Outdated figures stated confidently | No date anchor; trust in parametric memory | Inject the current date; require live sources for time-sensitive facts | [cookbook subagent](https://raw.githubusercontent.com/anthropics/anthropic-cookbook/main/patterns/agents/prompts/research_subagent.md); [LLMLagBench](https://arxiv.org/html/2511.12116v1) |
| 11 | Missing context | Subagent violates parent rules or assumptions | Subagent sees only its prompt | Restate every rule and definition in the delegation prompt | [Claude Code docs](https://code.claude.com/docs/en/sub-agents) |
| 12 | Conflicting implicit decisions | Outputs inconsistent in definitions, style or units | Each agent decides alone | Fix decisions upfront (schema, definitions); writes and synthesis single-threaded | [Cognition 2025](https://cognition.com/blog/dont-build-multi-agents); [Cognition 2026](https://cognition.com/blog/multi-agents-working) |
| 13 | Telephone-game loss | Details lost or distorted in summaries | Passing everything through lead context | Subagents write artifacts to files; pass references | [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system) |
| 14 | Orchestrator context flood | Lead degrades or truncates | Too many detailed returns | Condensed 1–2K-token returns; files; memory and plan saved externally | [Anthropic context eng.](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents); [Claude Code docs](https://code.claude.com/docs/en/sub-agents) |
| 15 | Superficial or no verification | "Looks done" but wrong | Verifier checks only surface properties | Objective-level verification step (+15.6% in MAST); clean-context reviewer | [MAST](https://arxiv.org/html/2503.13657v3); [Cognition 2026](https://cognition.com/blog/multi-agents-working) |
| 16 | Error cascades and false consensus | One wrong fact spreads to the final report | Unverified message dependencies | Centralized verification; provenance tracking (genealogy-graph plugin, ≥89% of runs protected) | [Spark to Fire](https://arxiv.org/abs/2603.04474); [Scaling Agent Systems](https://arxiv.org/abs/2512.08296) |
| 17 | Weak worker beyond its depth | Confident wrong answers on hard items | Can't recognize its own limits | Escalation path (advisor or stronger model); explicit "unknown" exit | [Claude advisor](https://claude.com/blog/the-advisor-strategy); [Cognition 2026](https://cognition.com/blog/multi-agents-working) |
| 18 | Premature "done" or half-finished | Work marked complete without testing | No external completion criterion | Checklist file with per-item pass flags; progress file; strong wording against editing the criteria | [Anthropic harnesses](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) |
| 19 | Bad tool use | Wrong tool chosen; flawed paths | Poor or overlapping tool descriptions | Minimal, distinct tools; rewrite descriptions (40% faster) | [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system); [Anthropic context eng.](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) |
| 20 | Stateful failure mid-run | Restart loses all work | No checkpoints | Resume from failure, retries, checkpoints, durable execution | [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system); [LangChain](https://www.langchain.com/blog/how-and-when-to-build-multi-agent-systems) |

**Supporting details**
- **Interleaved thinking:** subagents reflect after each tool result on quality, gaps and the next query — [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system)
- **Evals:** test about 20 representative queries with an LLM judge (factual accuracy, citation accuracy, completeness, source quality, tool efficiency) and keep humans in the loop — [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system); [LangChain](https://www.langchain.com/blog/how-and-when-to-build-multi-agent-systems)
- **Structured notes:** keep notes or to-do files outside the context window, plus compaction — [Anthropic context eng.](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- **Prompt altitude:** aim for the "right altitude," between brittle if-else rules and vague guidance that assumes shared context — [Anthropic context eng.](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)

### Inferences
- These fixes fit a 195-country job but are my synthesis, not taken from any single source:
  1. **Pilot first:** run 3–5 countries, inspect them by hand, then fan out (an application of Anthropic's "start small" eval advice).
  2. **One schema:** a JSON or markdown schema with fixed definitions, units and reference year, plus `value | "unknown"` and `source_url` and `retrieved_date` for each field.
  3. **Minimum budget per country:** for example, at least 3 distinct searches plus at least 1 full-page fetch of an authoritative source (government, statistics office, IMF/World Bank/UN) before declaring "unknown."
  4. **File outputs:** each worker writes to `countries/<ISO>.json` and returns only a status line.
  5. **Mechanical check:** a script verifies every file exists, matches the schema, has URLs that resolve and has non-zero tool use.
  6. **Spot-checks:** a stronger model or a clean-context reviewer re-verifies a random sample plus outliers.
  7. **Synthesis from files:** the orchestrator synthesizes from the files and flags cross-country inconsistencies.

### Gaps
- No source gives quantitative evidence for a specific "minimum N searches" number. Anthropic's budgets are heuristics.
- No source validates an "unknown is acceptable" instruction as reducing hallucination. It is implied by the epistemic-honesty and report-conflicts rules, but I found no controlled measurement.

## 7. When NOT to use parallel sub-agents

### Takeaway
Avoid parallel subagents in these cases:
- the agents need shared context
- subtasks are tightly coupled or sequential
- the work is mostly writing or coding with interdependent decisions
- the task is low-value relative to the roughly 15x token cost
- latency matters
- a strong single agent already does well

Read-only, independent, breadth-first research is the sweet spot, provided synthesis stays single-threaded.

### Cited Findings
- **Anthropic's list:** domains needing shared context across agents, tasks with many inter-agent dependencies, "most coding tasks," and tasks too low-value to justify about 15x tokens — [Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system)
- **Breadth-first, read-heavy work is the good fit:** multi-agent systems "excel especially for breadth-first queries" and parallelizable read-heavy work. Writing and synthesis go to a single agent — [LangChain](https://www.langchain.com/blog/how-and-when-to-build-multi-agent-systems)
- **Cognition's position:** parallel-writer swarms remain fragile in 2026. Safe patterns keep writes single-threaded, with extra agents contributing "intelligence rather than actions" — [Cognition 2026](https://cognition.com/blog/multi-agents-working)
- **Task fit is measurable:** multi-agent coordination ranged from +80.8% (decomposable) to −70.0% (sequential planning) against a single agent. Benefits shrink as single-agent capability rises, and tool-heavy tasks pay overhead — [Scaling Agent Systems, arXiv 2512.08296](https://arxiv.org/abs/2512.08296)
- **Latency:** stay in the main conversation when "latency matters," because a non-fork subagent "starts fresh and may need time to gather context." Parallel work is "best when the research paths don't depend on each other" — [Claude Code docs](https://code.claude.com/docs/en/sub-agents)

### Inferences
- A per-country lookup is structurally a good fit: read-only, independent and breadth-first. Disappointing results there most likely come from brief quality, worker budget, missing verification and synthesis, not from the choice of architecture. Exceptions are tasks where countries must be compared on a shared, judgment-laden definition, for example "most innovative." Such tasks need the definition fixed centrally, or a single agent doing the comparative judgment over the worker-collected facts.

### Gaps
- No source gives a numeric threshold for "too many" parallel workers for independent lookups. The 20-subagent caps (Anthropic cookbook; Claude Code concurrency default) are heuristics or product defaults, not empirically derived limits.
- Method note: the coordinator asked me to use a Playwright fetch script mid-task, but the session's permission classifier blocked running it, so all page reads used WebFetch and search summaries. Items marked "search summary" or "mirror" were not read in full from the primary page.
