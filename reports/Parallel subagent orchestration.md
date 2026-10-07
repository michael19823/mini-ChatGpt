# Fix the brief before blaming Sonnet

A one-agent-per-country fan-out is exactly the job where an expensive orchestrator with cheap parallel workers pays off: the work is read-only, the pieces are independent, and the whole is larger than one context window, so when 195 Sonnet sub-agents come back disappointing, the evidence points at the system around the workers rather than at Sonnet. The likely culprits are briefs that leave definitions, sources, stopping rules and "not found" handling to each worker; Sonnet 5.5's documented habits at Claude Code's default `medium` effort (answering from training memory, stopping early, skipping checks); turn-by-turn dispatch that pours several hundred thousand tokens of results back into the orchestrator's context; and no verification layer at all. The remedy is to move the loop into code (a Claude Code dynamic workflow or a headless script), give every worker a byte-identical "job contract" (schema, definitions, source policy, today's date, budget, not-found rule) in which only the country varies, pin model and effort explicitly, pilot on five hard countries, verify in layers from code checks up to a human sample, re-run only failing items on a stronger configuration, and synthesize from files rather than summaries. Current pricing reshapes the cost advice: Opus 5.5 costs only 2× Sonnet 5.5 per token while Haiku 5.5 is 20× cheaper than Sonnet, so the big savings come from capping searches per worker (cost grows roughly with the square of search count), caching the shared prompt prefix and keeping outputs short, not from swapping Opus for Sonnet. No public skill does this end to end; NeoLab's `do-in-parallel`, translate-book, obra's superpowers and SirRuggie's orchestration kit each supply pieces, and Anthropic's own code-review plugin and claude-security scan workflow are the best patterns to copy. The final section turns all of this into a draft SKILL.md, a reusable worker brief and a before/after for the country job.

*How to read the labels.* A claim followed by a citation is **sourced**; recommendations marked **(synthesized)** are my inference from combining sources, and no single source states them. Figures carry one of four flags: **vendor-reported** means Anthropic or a plugin author measured it on their own benchmark and nobody has replicated it; **dated** means it was measured on 2025-or-earlier models such as Opus 4 or Sonnet 4, so its direction is more reliable than its size; **unverified** means it was seen only in a search summary, a mirror site or an author's claim; and **illustrative** means it is my own arithmetic on stated assumptions. Prices, defaults and product limits are as of 2026-10-07 and change often.

## A per-country fan-out is the right shape, usually run the wrong way

Anthropic's own evidence supports the architecture the user chose. Its 2025 research system, an Opus 4 lead spawning Sonnet 4 workers, "outperformed single-agent Claude Opus 4 by **90.2%**" on an internal research eval (vendor-reported, dated). It did best on "breadth-first queries that involve pursuing multiple independent directions simultaneously" ([Anthropic, multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system)). Anthropic's 2026 cost guide draws the line sharply: "Use an orchestrator only when work splits into many independent pieces, ideally more than one context window's worth. For one dependent chain, or work that fits in one context, a single model at lower effort was cheaper in every measured case" ([Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)). Cognition, the best-known skeptic of multi-agent designs, partly revised its 2025 position in April 2026. It now endorses read-only subagents and keeps only writes single-threaded ([Cognition, Multi-Agents: What's Actually Working](https://cognition.com/blog/multi-agents-working)). One hundred ninety-five independent, read-only country lookups pass every one of these tests.

The architecture does carry a built-in quality discount that has to be bought back. On Anthropic's 21.6M-token corpus benchmark, a Fable 5.1 lead with 25 Sonnet 5 workers cost **47–55% less** than Fable 5.1 alone but scored **10–12 points lower**. On DeepResearch Bench II, Sonnet 5 scored **56%** against Opus 5's **71%** ([Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence); vendor-reported). Those runs used Sonnet 5, not the current Sonnet 5.5, and no one has published an Opus 5.5 lead with Sonnet 5.5 workers. The 2025 post also found that **token usage alone explained 80%** of performance variance on BrowseComp ([Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system); dated). A worker on a starvation budget will therefore be shallow by construction.

The documented failure modes point at configuration ahead of model weakness. The table ranks the likely causes of a disappointing 195-country run. The ranking and the "looks like" column are synthesized; the evidence cells are sourced.

| Likely cause | What it looks like in a 195-country run | Evidence | Fix (section) |
|---|---|---|---|
| Brief leaves shared decisions to each worker | Rows use different units, years, scopes and definitions; some workers misread the task | Vague briefs caused misreads and duplicated work ([Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system)); "actions carry implicit decisions" ([Cognition 2025](https://cognition.ai/blog/dont-build-multi-agents)) | Job contract (2) |
| Worker answers from memory | Confident, outdated figures | Sonnet 5.5 "sometimes answers from its training knowledge when a web search would catch details that have changed" ([Prompting Sonnet 5.5](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-sonnet-5-5)) | Date plus a tested search line (2) |
| Early stopping or a shallow budget | One or two searches, then an answer | At low/medium effort Sonnet 5.5 stops early on long tasks (same source); premature termination and unawareness of when to stop are 18.6% of failures in the MAST taxonomy ([MAST](https://arxiv.org/abs/2503.13657)) | Budget range, sufficiency rule, `medium`+ effort (2, 3) |
| Fabrication under "fill every field" pressure | Plausible numbers, dead links | 3–13% of citation URLs fabricated across ~221K checked ([arXiv 2604.03173](https://arxiv.org/pdf/2604.03173); unverified) | `not_found` as a legitimate status; cite only fetched pages (2, 4) |
| Silently wrong model | Older Sonnet, or Opus inherited | The `sonnet` alias is Sonnet 4.5 on Bedrock and Google Cloud ([model config](https://code.claude.com/docs/en/model-config)); an unset `model` inherits the main model ([subagents](https://code.claude.com/docs/en/sub-agents)) | Pin full model IDs (3) |
| Orchestrator context flood | Lead drops countries, paraphrases, merges contradictions | 84.7% of final-report errors in one deep-research system originate at the orchestrator ([arXiv 2608.24306](https://arxiv.org/abs/2608.24306)) | Files plus a code merge (4) |
| Turn-by-turn dispatch | Coverage holes, work done inline, waves of 20 | 20-concurrent subagent cap ([subagents](https://code.claude.com/docs/en/sub-agents)); prose delegation "almost always runs the task inline" ([fable-mode](https://github.com/mrtooher/fable-mode); anecdotal) | Workflow plus manifest (4) |
| No verification | "Done" reports with zero tool calls | Confident off-topic completions from subagents ([GitHub #59903](https://github.com/anthropics/claude-code/issues/59903)) | Layered checks (4) |

The diagnosis matters because it changes the remedy. Anthropic found that "upgrading to Claude Sonnet 4 is a larger performance gain than doubling the token budget on Claude Sonnet 3.7" (dated). That argues for a stronger worker when the worker really is the bottleneck. But Anthropic's own 90.2% gain was achieved *with Sonnet workers*. Moving all 195 workers to Opus without fixing the brief buys a more expensive version of the same inconsistencies **(synthesized)**. A cheap test separates the two cases. Re-run five of the disappointing countries on Sonnet with the contract in the final section. If quality jumps, the brief was the problem. If particular kinds of country still fail, escalate those kinds **(synthesized)**.

## Brief every worker as a literal stranger who cannot ask back

A Claude Code subagent "starts with a fresh, isolated context window. It doesn't see your conversation history, the skills you've already invoked, or the files Claude has already read." It receives its own system prompt, the delegation message, CLAUDE.md (except for Explore, Plan or `omitClaudeMd`), a git-status snapshot and any preloaded skills. Any rule that must reach it has to be restated in the delegation prompt ([Claude Code subagents](https://code.claude.com/docs/en/sub-agents)). The Agent SDK docs are blunter: "The only content you pass from parent to subagent is the Agent tool's prompt string" ([Agent SDK subagents](https://code.claude.com/docs/en/agent-sdk/subagents)). A 2025 Hacker News complaint that subagents miss "CLAUDE.md directions" ([HN](https://news.ycombinator.com/item?id=45181577)) is outdated against the current docs. Everything the orchestrator absorbed in conversation exists for the worker only if the brief states it: what the user will do with the table, which list defines "195 countries", whether Taiwan or Kosovo count, which currency to use. Cognition calls the cost of skipping this "conflicting implicit decisions". In its Flappy Bird example, one subagent built a Super Mario background and the other a bird that "moves nothing like the one in Flappy Bird" ([Cognition 2025](https://cognition.ai/blog/dont-build-multi-agents)). In a country fan-out, the same failure appears as one worker reporting monthly gross wages in local currency and the next reporting hourly USD **(synthesized illustration)**.

Anthropic's core rule is that "each subagent needs an objective, an output format, guidance on the tools and sources to use, and clear task boundaries. Without detailed task descriptions, agents duplicate work, leave gaps, or fail to find necessary information" ([Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system)). Its open-sourced lead prompt expands this into a per-delegation checklist: one core objective, the expected output format, background and how this piece contributes, key questions, suggested sources with a definition of what counts as reliable and a list of sources to avoid, specific tools, and precise scope boundaries. It also gives the orchestrator a test to run on its own plan: "Make sure that IF all the subagents followed their instructions very well, the results in aggregate would allow you to give an EXCELLENT answer" ([research_lead_agent.md](https://github.com/anthropics/claude-cookbooks/blob/main/patterns/agents/prompts/research_lead_agent.md)). Its worked example turns "research the semiconductor shortage" into a roughly 150-word brief. That brief names TSMC, Samsung and Intel investor-relations pages, SEC EDGAR, SEMI/Gartner/IDC and commerce.gov, says "Prioritize original sources over news aggregators," and specifies the shape of the report. Independent community authors reached the same anatomy. SirRuggie's orchestration kit uses six slots: CURRENT STATE, DO NEXT ("ONE objective, one sentence"), DO NOT, CONTEXT, SUCCESS ("exact completion condition, checkable by a stranger") and STOP, plus an explicit output-token budget ([SirRuggie core/CLAUDE.md](https://github.com/SirRuggie/claude-code-orchestration-kit/blob/main/core/CLAUDE.md)). AndyShaman's senior-fable adds a "User's words" line that quotes the request verbatim, because leads that paraphrase tend to narrow or widen it ([senior-fable](https://github.com/AndyShaman/senior-fable)).

The less obvious lesson from Anthropic's 2026 model guides is that cheap and frontier models need **opposite steering**. **Sonnet 5** "interprets prompts literally... It does not silently generalize an instruction from one item to another," so scope must be stated outright, for example "every field, not just the first" ([Prompting Sonnet 5](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-sonnet-5)). **Sonnet 5.5** sometimes answers from training memory; the fix is to delete phrases like "minimize tool calls" and add a tested line telling it to check specifics that may have changed "even when you feel confident." At low and medium effort it is also "more likely to stop and check in with the user before it finishes," and it "often answers without thinking first" on JSON answers that need multi-step work, which Anthropic fixes with a persistence-and-stop paragraph and the line "Think the problem through before you answer" ([Prompting Sonnet 5.5](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-sonnet-5-5)). **Haiku 5.5** needs today's date plus a calibrated nudge ("Records, office holders, prices, versions, rules and anything 'latest' may have changed since then, so search for those before you answer"). That nudge raised search rates on changed facts while adding needless searches in only 0–3% of tries, whereas a blanket "always search" rule made Haiku search on half of the prompts that needed none, with no accuracy gain ([Prompting Haiku 5.5](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-haiku-5-5); vendor-reported). **Opus 5** sits at the other end: it "verifies its own work without being told to," over-verifies when told to anyway, widens scope, and "delegates to subagents more readily than prior models" ([Prompting Opus 5](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-opus-5)). An Opus orchestrator that writes briefs the way it would like to be briefed will leave out exactly the push Sonnet and Haiku need **(synthesized)**. One caveat: Anthropic measured these lines in system prompts, not in orchestrator-to-worker task messages, and tells readers to re-check model-specific techniques against their own evals ([Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)).

Community authors disagree about generic encouragement. SirRuggie bans "think deeply", "explore all approaches" and "be thorough" from briefs. NeoLab's `do-in-parallel` does the opposite: it prepends "Let's think step by step" and appends a mandatory self-critique block to every worker prompt ([NeoLab do-in-parallel](https://github.com/NeoLabHQ/context-engineering-kit/blob/master/plugins/sadd/skills/do-in-parallel/SKILL.md)). Neither shows evidence on research tasks. The defensible middle **(synthesized)** has two parts. Drop generic exhortations in favor of Anthropic's specific, tested lines. Turn "self-critique" into a concrete pre-return checklist: every field present, a URL and a date on every value, nothing from memory. Claude Code's best-practices page gives the reason: "Claude stops when the work looks done. Without a check it can run, 'looks done' is the only signal available" ([Claude Code best practices](https://code.claude.com/docs/en/best-practices)).

Literal workers turn every unstated convention into a private decision. The orchestrator should therefore make those decisions once, in a shared **job contract** pasted byte-for-byte into every brief **(synthesized from the sources above)**. The contract holds field definitions and units ("population = latest UN WPP mid-year estimate"), a reference-year rule, entity identity (which list defines the 195, "Georgia = the country, not the US state," how to treat Kosovo, Taiwan or Palestine), a source priority list (national ministry or statistics office first, then World Bank/IMF/UN/ILO, then reputable press, never content farms), and conventions for missing and conflicting data. The source list matters because Anthropic's human testers found early agents "consistently chose SEO-optimized content farms over authoritative but less highly-ranked sources" until source-quality heuristics went into the prompts ([Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system)). The community skill translate-book fans a book out to one fresh sub-agent per chunk. It solved the same drift problem by building a glossary from sampled chunks and injecting it into every prompt "as a hard constraint" ([translate-book](https://github.com/deusyu/translate-book)). Version the contract (`contract_v3`) and stamp the version into each record. Drift then becomes detectable, and records written under an older version can be re-run **(synthesized)**.

Missing data needs a legitimate exit. Anthropic's subagent prompt tells workers to put unresolved conflicts in their report "for the lead researcher to resolve" rather than choose silently ([research_subagent.md](https://github.com/anthropics/claude-cookbooks/blob/main/patterns/agents/prompts/research_subagent.md)). OpenAI's GPT-4.1 guide (older, non-Claude) warns that "must" rules push models to "hallucinate tool inputs" when information is missing ([OpenAI GPT-4.1 guide](https://cookbook.openai.com/examples/gpt4-1_prompting_guide)). Combining the two **(synthesized)**: every field carries a status of `found`, `not_found`, `not_applicable` or `conflict`. A `not_found` must come with the queries tried. Estimates are forbidden unless a field explicitly allows them with a stated basis. Fabricated citations are common enough to design against. One preprint found 3–13% of citation URLs from commercial LLMs and deep-research agents were hallucinated, and suggested restricting cited URLs to pages the agent actually visited ([arXiv 2604.03173](https://arxiv.org/pdf/2604.03173); unverified, read via search summary). No controlled study shows that an explicit "not found is acceptable" rule lowers hallucination for Sonnet or Haiku; the rule rests on mechanism.

Length and ordering matter for cheap models. Anthropic's model brief is about 150 words, and its context-engineering guidance stresses that "minimal does not necessarily mean short" ([Effective context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)). Longer is not free. On IFScale, "even the best frontier models only achieve 68% accuracy at the max density of 500 instructions," with a bias toward earlier instructions ([IFScale](https://arxiv.org/abs/2507.11538)). Haiku 5.5 skips searches "most at `low` effort and with long system prompts" ([Prompting Haiku 5.5](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-haiku-5-5)). Anthropic also reports that putting the query after long documents "can improve response quality by up to 30 percent" ([Prompting best practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices)). The synthesized rule is **300–800 words**, critical rules first and restated in the item tail, the variable item last, and one or two complete examples with clearly fictional values. Include a `not_found` field in the example; a literal model shown only filled fields learns that every field always gets a value. Academic evidence on few-shot gains for small models is mixed. A July 2026 study found one example rescued an 8B model while extra examples hurt a 17B model ([arXiv 2607.22969](https://arxiv.org/abs/2607.22969)). For search behavior, Anthropic's subagent prompt supplies production heuristics: queries under five words, broad then narrow, never repeat a query, fetch full pages rather than snippets, and a budget of about 5 calls for medium tasks and 10 for hard ones, stopping around 15 ([research_subagent.md](https://github.com/anthropics/claude-cookbooks/blob/main/patterns/agents/prompts/research_subagent.md); dated heuristics, not tuned per model).

## Price the completed task, not the token

Prices as of 2026-10-07 put the real cost cliff between Haiku and Sonnet, not between Sonnet and Opus.

| Model (API ID) | Input / output per MTok | Cache read per MTok | Note |
|---|---|---|---|
| Fable 5.1 (`claude-fable-5-1`) | $10 / $50 | $0.25 | Top widely released tier |
| Opus 5.5 (`claude-opus-5-5`) | $4 / $20 | $0.20 | Anthropic's recommended starting model at default `medium` |
| Sonnet 5.5 (`claude-sonnet-5-5`) | $2 / $10 | $0.20 in the table; $0.10 in the page's prose (unresolved conflict) | |
| Haiku 5.5 (`claude-haiku-5-5`) | $0.10 / $0.50 for prompts ≤100K tokens; $0.50 / $2.50 above | $0.01 (≤100K) | 5× price step past 100K tokens |

Batch processing is 50% off. A 5-minute cache write costs 1.25× input, and web search costs $10 per 1,000 searches ([Anthropic pricing](https://platform.claude.com/docs/en/about-claude/pricing)). Late-September secondary coverage said Haiku 5.5 was unreleased ([qcode.cc tracker](https://qcode.cc/en/claude-haiku-5-5-status-tracker)). Anthropic's live docs on 2026-10-07 list its prices and a prompting guide, and Claude Code's `haiku` alias resolves to it on the Anthropic API, so the docs win. The arithmetic reshapes the usual advice. Opus 5.5 is **2×** Sonnet 5.5 per token and the same price on cache reads, while Sonnet is **20×** Haiku. For a read-heavy research loop where most input is cached, the Opus–Sonnet gap shrinks below 2× **(synthesized)**.

Anthropic's own Claude API skill puts the governing principle plainly: "API spend is optimized in units of **cost per completed task, not cost per token**... a cheaper model that fails still bills its tokens, then the retry" ([claude-api cost guide](https://github.com/anthropics/skills/blob/main/skills/claude-api/shared/cost-optimization.md)). On SWE-bench Pro, Opus 5.5 at `low` effort solved **87.4%** of tasks at **$0.12** per solved task, while Sonnet 5 at default solved 77.4% at $0.84 ([Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence); vendor-reported, coding rather than research, and against the older Sonnet 5). The superpowers skill reports that "the cheapest models routinely take 2-3× the turns on multi-step work — costing more overall" ([subagent-driven-development](https://github.com/obra/superpowers/blob/main/skills/subagent-driven-development/SKILL.md); author claim, unverified). Together these make **Opus 5.5 at low effort a credible worker to pilot against Sonnet 5.5 at medium**, judged on cost per passing country **(synthesized)**.

Cheaper tiers hold up on bounded, checkable work and slip on long research loops. Haiku 5.5 scored **85%** on GPQA Diamond against Opus 5.5's **91%** at about one-twentieth the cost per question ([Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence); vendor-reported). Anthropic's Managed Agents guidance says delegated research "is mostly searching, reading, and extracting: many input tokens, little hard reasoning". It suggests Haiku 5.5 workers, "or Claude Sonnet 5.5 when the worker needs more judgment" ([managed-agents multiagent reference](https://github.com/anthropics/skills/blob/main/skills/claude-api/shared/managed-agents-multiagent.md)). Anthropic's cost-optimization cookbook, run on a 10-claim fact-checking eval, found quality held at 10/10 "through `sonnet · medium`," began slipping at `sonnet · low`, and dropped to about 55% on Haiku ([cost_optimization notebook](https://github.com/anthropics/claude-cookbooks/blob/main/cost_optimization/cost_optimization.ipynb); vendor-reported; the full results table could not be captured). The two published revisions of Anthropic's own code-review plugin differ in a telling way. One scores findings with Haiku agents. The other validates bug findings with Opus subagents ([official copy](https://github.com/anthropics/claude-plugins-official/blob/main/plugins/code-review/commands/code-review.md); [claude-code copy](https://github.com/anthropics/claude-code/blob/main/plugins/code-review/commands/code-review.md)). That suggests cheap validators were not enough for judgment-heavy checks, though which revision is newer is unconfirmed.

The synthesized routing map follows: **Haiku 5.5** for extraction from text already fetched, classification and mechanical checks; **Sonnet 5.5 at medium** (high for hard countries) for multi-source research per country and for the per-item judge; and **Opus 5.5** for writing the contract, adjudicating conflicts, repairs and the final synthesis.

Effort is the second dial, and **`low` is a trap for search workers**. Anthropic's effort docs describe `low` as suited to "simpler tasks... such as subagents" ([Effort](https://platform.claude.com/docs/en/build-with-claude/effort)). On Fable 5 research benchmarks, `low` gave up only 1–3 points for a third to half off, and `medium` matched default accuracy at 70–87% of the cost ([Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence); vendor-reported). The model-specific guides show what happens to cheaper models in long agent prompts. At `low`, Haiku 5.5 "is more likely to skip a search, stop early, or skip a check". Moving it to `medium` "roughly halved early stopping" but "more than doubled the output tokens" ([Prompting Haiku 5.5](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-haiku-5-5)). Sonnet 5.5 at `low` "can skip verifying a change" ([Prompting Sonnet 5.5](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-sonnet-5-5)). Defaults differ by surface. The API defaults Sonnet 5.5 to `high`, while Claude Code defaults Opus 5.5, Sonnet 5.5 and Haiku 5.5 all to `medium` ([Claude Code model config](https://code.claude.com/docs/en/model-config)). In Claude Code, a subagent's `effort` frontmatter overrides the session level but not the `CLAUDE_CODE_EFFORT_LEVEL` variable, and there is no per-subagent thinking switch ([Claude Code subagents](https://code.claude.com/docs/en/sub-agents)). The synthesized default: `medium` for research workers, `high` for Haiku doing knowledge work, never `low` for Haiku or Sonnet workers that must search.

The quietest cost and quality trap is **model resolution**. Claude Code picks a subagent's model in this order: the per-invocation `model` parameter, then the definition's `model` frontmatter, then `CLAUDE_CODE_SUBAGENT_MODEL`, then the main conversation's model ([Claude Code subagents](https://code.claude.com/docs/en/sub-agents)). Aliases also depend on provider. On Bedrock and Google Cloud's Agent Platform, `sonnet` resolves to **Sonnet 4.5** and `haiku` to Haiku 4.5. On Claude Platform on AWS, `sonnet` is Sonnet 4.6. On Microsoft Foundry, even `opus` is Opus 4.6 ([Claude Code model config](https://code.claude.com/docs/en/model-config)). A "Sonnet sub-agent" run through a cloud provider may therefore have been two generations old. superpowers states the companion rule: "**Always specify the model explicitly when dispatching a subagent.** An omitted model inherits your session's model — often the most capable and most expensive" ([subagent-driven-development](https://github.com/obra/superpowers/blob/main/skills/subagent-driven-development/SKILL.md)).

A per-worker cost model shows where the money goes. Let P be the shared prefix, N the number of searches, R the tokens per search result and O the output tokens. With every new block cached once, each worker costs roughly `p_write·(P + N·R) + p_read·(N·P + R·N(N−1)/2) + p_out·O + $0.01·N`. The R·N² term exists because each search result is re-read on every later turn ([Anthropic pricing](https://platform.claude.com/docs/en/about-claude/pricing) on search results counted as input across turns). Assume P = 3,000, N = 10, R = 5,000 and O = 4,000 (all assumptions; replace them with pilot measurements). Then 195 workers cost about **$22 on Haiku 5.5, $63 on Sonnet 5.5 ($147 without caching), $97 on Opus 5.5 and $200 on Fable 5.1** (illustrative). Search count dominates. The same Sonnet run costs about $23 at 3 searches, $34 at 5, $136 at 20 and $229 at 30 (illustrative).

Running the formula on the batching question gives a result that runs against intuition **(synthesized, illustrative)**:

| Countries per Sonnet 5.5 worker | Workers | Total cost | Peak context per worker |
|---|---|---|---|
| 1 | 195 | ~$63 | ~53K tokens |
| 2 | ~98 | ~$72 | ~103K |
| 3 | 65 | ~$82 | ~153K |
| 5 | 39 | ~$101 | ~253K |
| 10 | ~20 | ~$150 | ~503K |

For search-heavy work, packing countries into one agent raises cost, because each extra country's results are re-read on every later turn. It also pushes context into the range where recall degrades ([Effective context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)). On Haiku, any batch past two countries crosses the 100K-token price step. This contradicts the cookbook's advice to split "Fortune 500 CEOs" into "10 subagents handling 50 CEOs each" and to "never create more than 20 subagents unless strictly necessary" ([research_lead_agent.md](https://github.com/anthropics/claude-cookbooks/blob/main/patterns/agents/prompts/research_lead_agent.md)). That guidance was written for an LLM lead that received every result in its own context. Once a script holds the results and workers write files, most of that overhead disappears **(synthesized)**. The model assumes every result stays in context. Server-side search filtering or context clearing would shrink the gap but not reverse it. Batching studies on single-call classification agree that small batches are nearly free but larger ones degrade and become position-dependent. One 2026 study found accuracy stable below about 16 items per batch on AGNews and about 8 on GSM8K, then sharply worse ([arXiv 2605.28268](https://arxiv.org/pdf/2605.28268); not opened in full). Batch only cheap, tool-free items.

Caching is the largest free lever. Anthropic measured it cutting agent-loop cost by **2.7–5.3×**. Sonnet 5 on DeepResearch Bench II fell from $3.20 to $1.20 per task with caching, and a 25-token timestamp at the front of a system prompt raised a run from **$0.59 to $4.24** ([Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence); vendor-reported). Parallel fan-outs need care. "A cache entry becomes readable only after the first response begins streaming. N parallel requests with identical prefixes all pay full price," so the fix is to warm one request and then fire the rest ([Prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching); via the Claude API skill's cached reference). Claude Code workflows automate this. Agents with the same model, effort, agent type, tools, output schema and working directory share a prefix, and siblings wait up to five seconds for the first agent's cache. The TTL is five minutes unless `subagentPromptCacheTtl: 1h` is set ([Claude Code workflows](https://code.claude.com/docs/en/workflows)). Three more levers follow. **Search fees** of $0.01 per search are fixed regardless of model, so they make up about 90% of a Haiku worker's cost in the illustrative model, which makes `max_uses` and a tight search budget the main Haiku levers. **Output length** matters too: a one-line answer cost $0.49 against $1.40 for a memo at similar 78–85% accuracy ([Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)). And **the Batch API** takes 50% off stages with no tool loop, such as extraction from pages already fetched ([Batch processing](https://platform.claude.com/docs/en/build-with-claude/batch-processing)).

Escalation works only when something other than the cheap model decides when to escalate. Anthropic's April 2026 advisor post reported Haiku with an Opus advisor scoring 41.2% on BrowseComp against 19.7% alone ([Claude blog, advisor strategy](https://claude.com/blog/the-advisor-strategy); vendor-reported, earlier models). Its 2026 cost guide, however, found that Haiku 5.5 and Sonnet 5.5 executors with an Opus 5.5 advisor "never consulted on any of 198 questions". It concludes that gating consults "requires a cheap signal" because asking the executor to spot hard cases "demands the very judgment it's missing" ([Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)). The measured cascade that does work uses an external signal. Running Opus 5.5 at `low` and re-running only failures at `high` reached about **97% at $0.17** per task, against 95.3% at $0.29 for always-high (same source; vendor-reported, using tests as the failure signal). Academic routers reported much larger savings: FrugalGPT up to 98% ([arXiv 2305.05176](https://arxiv.org/abs/2305.05176)) and RouteLLM over 85% on MT Bench at 95% of GPT-4 quality ([LMSYS](https://lmsys.org/blog/2024-07-01-routellm/)). Both were dated, measured on GPT-4-era gaps far wider than today's 2× Opus/Sonnet ratio. **(Synthesized:)** the routing upside now sits at the Haiku/Sonnet boundary and in check-then-retry, not in Sonnet versus Opus.

One community finding tempers expectations. The only shared benchmark of a delegation plugin, fable-baton's (n=2 per cell), found equal or higher total cost with delegation. Review went from $2.13 to $2.71, though top-model output fell about 44% ([fable-baton](https://github.com/realgarit/fable-baton); author-reported). Parallelism buys wall-clock time and cheaper per-token rates; it does not reduce total tokens. Claude Code's agent teams use "approximately 7x more tokens than standard sessions" in plan mode ([Claude Code costs](https://code.claude.com/docs/en/costs)), which rules them out for a cost-focused fan-out.

## Move the loop into code, then verify in layers

Claude Code offers a ladder of parallelism, and a 195-item job belongs at the top rung. Agent-tool subagents suit "a few delegated tasks per turn". Their results land in the orchestrator's context, and spawning a 21st concurrent subagent fails with "Concurrent subagent limit reached" ([Claude Code subagents](https://code.claude.com/docs/en/sub-agents)). Dynamic workflows are built for this job: Claude writes a JavaScript script that a runtime executes in the background, scaling to "dozens to hundreds of agents per run," keeping intermediate results in script variables and staying "resumable in the same session" ([Claude Code workflows](https://code.claude.com/docs/en/workflows)). They run **16 concurrent agents by default** (configurable from 1 to 256), accept 4,096 items per `pipeline()` call and 1,000 agents per run, and raise a "Large workflow" warning above 25 agents or 1.5M projected tokens. The size guideline defaults to `medium` (fewer than 10 agents), or `small` on Pro, and the docs call it "advice, not a cap." **(Synthesized:)** an orchestrator asked to "cover 195 countries" may silently pack countries into a few agents to stay under it, so the skill should state the intended agent count outright. For very long or unattended runs, an external script looping `claude --bare -p --json-schema --output-format json` gives a real filesystem, exit codes and `total_cost_usd` per call ([Claude Code headless](https://code.claude.com/docs/en/headless)). The Agent SDK adds `max_budget_usd`, which "counts the call's own spend, subagent requests included" ([Agent SDK subagents](https://code.claude.com/docs/en/agent-sdk/subagents)). Anthropic's older framework guidance says the same thing in general terms: use predefined code paths for predictable tasks and orchestrator-workers only "where you can't predict the subtasks needed" ([Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)).

Code-driven dispatch also settles a behavioral question either way. With the `claude_code` preset on Opus 5, Claude Code adds a line "telling Claude not to call the Agent tool unless it's asked to" ([Agent SDK subagents](https://code.claude.com/docs/en/agent-sdk/subagents)). fable-mode's author reports that "telling a model *in prose* to spawn a worker almost always runs the task inline" ([fable-mode](https://github.com/mrtooher/fable-mode); anecdotal). A script that owns the item list makes both problems moot.

Run a pilot, then a canary, then the full set. Anthropic found its worst multi-agent failures by building simulations "with the exact prompts and tools" and watching agents step by step ([Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system)). Claude Code's docs say to "run the workflow on a small slice first" ([workflows](https://code.claude.com/docs/en/workflows)) and to "refine your prompt based on what goes wrong with the first 2-3 files, then run on the full set" ([best practices](https://code.claude.com/docs/en/best-practices)). **(Synthesized:)** pilot five deliberately hard countries (a data-rich federal country, a data-poor small island state, one with contested status, one whose primary sources are not in English, and one with a recent currency or regime change), and iterate until two rounds produce no new failure mode, borrowing Hamel Husain's "until no new failure modes appear" stopping rule ([Hamel Husain, LLM-as-a-judge](https://hamel.dev/blog/posts/llm-judge/)). Freeze the contract, write the judge rubric from what you saw, canary 10–20 countries with full checks, then run the rest. Budget 20–40% above pilot cost per item × 195, because spending concentrates in the tail. On one 20-problem run, the two most expensive problems carried 43% of spend ([Optimizing for cost and intelligence](https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence)).

Structured outputs are the strongest lever for consistency across workers, but they come with constraints to design around. Constrained decoding guarantees valid JSON with required fields at every layer: the API's `output_config.format`, `claude -p --json-schema`, the SDK, and workflow `agent(..., {schema})`, which retries validation five times ([Structured outputs](https://platform.claude.com/docs/en/build-with-claude/structured-outputs); [workflows](https://code.claude.com/docs/en/workflows)). The constraints are specific: no numeric min/max or length limits; at most 24 optional and 16 union-typed parameters per request, with every `["string","null"]` counting toward the 16; no guarantee on enum casing; a 400 error if native Citations are combined with a JSON schema; and `claude -p` treating `format: uri` as an annotation it does not enforce ([Claude Code headless](https://code.claude.com/docs/en/headless)). **(Synthesized:)** make every field required. Replace nullable fields with a sibling `status` enum, and keep values as strings parsed in code. Give each fact `source_url`, a verbatim `quote` and an `as_of` date, use lowercase enums, and post-validate URLs and dates in code. Item identity should come from the script's label or filename, with the worker's echoed ID only as a cross-check. translate-book removed `chunk_id` from its payload because "putting it in the payload creates a hallucination hole" ([translate-book](https://github.com/deusyu/translate-book)).

Results belong in files and script variables, not in the orchestrator's context. Anthropic's workers "store their work in external systems, then pass lightweight references back to the coordinator," which avoids a "game of telephone" ([Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system)). Its context-engineering guidance puts returns at "often 1,000-2,000 tokens" ([Effective context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)). Even at 1,500 tokens, 195 returns add about **290K tokens** to the lead (illustrative). That is past the 200K point where Anthropic's lead began saving its plan to memory against truncation. In one deep-research system, **84.7%** of final-report errors originated at the orchestrator ([arXiv 2608.24306](https://arxiv.org/abs/2608.24306); EMNLP 2026, one system). math-olympiad adds a practical rule: set a label on every `agent()` call, or "36 results come back with no problem association" ([math-olympiad SKILL.md](https://github.com/anthropics/claude-plugins-official/blob/main/plugins/math-olympiad/skills/math-olympiad/SKILL.md)). SirRuggie's kit adds "Absent result file = UNKNOWN. Not failed, not finished" ([SirRuggie](https://github.com/SirRuggie/claude-code-orchestration-kit/blob/main/core/CLAUDE.md)). A manifest that marks every country ok, failed or missing closes the coverage holes that waves of 16–20 agents otherwise create **(synthesized)**.

Verification should run from cheapest and most deterministic to most expensive. Anthropic's Agent SDK guidance calls LLM-as-judge "generally not a very robust method" and prefers "clearly defined rules for an output, then explaining which rules failed and why" ([Building agents with the Claude Agent SDK](https://claude.com/blog/building-agents-with-the-claude-agent-sdk)). The four tiers that follow are synthesized, though each component is sourced. **Tier 0 is code on every country**: schema, a status on every field, URLs that resolve, dates that parse, plausible ranges, allowed units, and at least one tool call by the worker. That last check exists because one Claude Code bug report describes subagents returning confident "completed" messages with zero tool calls, which the reporter nearly missed because "only the final summary was checked" ([GitHub #59903](https://github.com/anthropics/claude-code/issues/59903)). Code should also compare each country with its peers for outliers and unit or year mismatches, a kind of drift no single-item judge can see. **Tier 1 is one judge per country**, using a different prompt from the worker and ideally a different model to blunt self-enhancement and verbosity bias ([Zheng et al.](https://arxiv.org/abs/2306.05685); dated), with binary pass/fail verdicts per dimension rather than 1–5 scales ([Hamel Husain](https://hamel.dev/blog/posts/llm-judge/)) and an "unknown" escape hatch ([Demystifying evals](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)). **Tier 2 is a fresh-context verifier run only on failures, low-confidence fields and outliers.** It fetches the cited page, checks the quote, and reports refuted and unverifiable claims separately, as Claude Code's bundled `/deep-research` does when it lists uncheckable claims "as unverified instead of counting it as refuted" ([workflows](https://code.claude.com/docs/en/workflows)). Tell it to "flag only gaps that affect correctness," since a reviewer told to find gaps "will usually report some, even when the work is sound" ([best practices](https://code.claude.com/docs/en/best-practices)). **Tier 3 is a human sample** of a random 5–10% plus every fail and unknown, used to calibrate the judge by true-positive and true-negative rates rather than raw agreement ([Hamel Husain](https://hamel.dev/blog/posts/llm-judge/)).

Anthropic's sources conflict on judge structure. In June 2025, "a single LLM call with a single prompt outputting scores from 0.0-1.0 and a pass-fail grade" was the most consistent judge for research outputs ([Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system)). In January 2026, Anthropic recommended grading each dimension with an isolated judge ([Demystifying evals](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)). **(Synthesized:)** at 195 items, one call per country with per-dimension binary verdicts is the cost-sane default. Reserve isolated judges for the single highest-stakes field. Also keep the workflow agent cap in mind. Workers, judges and repairs together fit under 1,000 agents, but a separate verifier for each of five fields across 195 countries (975 agents) would not.

Repair should be selective and should change something **(synthesized protocol, built from sourced parts)**. Infrastructure failures (null results, errors, truncation) get one plain retry. Schema failures get a retry that includes the validator's message. Quality failures get the original brief plus the judge's specific critique, one tier up, for that country only. NeoLab's skill makes this explicit: the ladder runs "`haiku` → `sonnet` → `opus`," escalation is "scoped to the failing task only," and "re-dispatching the same prompt at a higher tier and hoping is prohibited" ([NeoLab do-in-parallel](https://github.com/NeoLabHQ/context-engineering-kit/blob/master/plugins/sadd/skills/do-in-parallel/SKILL.md)). Cap repairs at two rounds, then mark the country `needs_human`. Run repairs as a new pass over failing IDs only. When a workflow is relaunched after a failure, the failed agent "runs again, and so does every agent that started after it, even ones that completed" ([workflows](https://code.claude.com/docs/en/workflows)). If many countries fail the same way, the contract is wrong; fix it and re-pilot rather than patching items. No source quantifies how much escalation improves repair success.

Synthesis should read a table, not prose. Merge, normalize and compute coverage per field in code. Hand the synthesizer the normalized table plus a coverage report, and have it copy values and URLs verbatim, listing `not_found` and `conflict` countries explicitly. Synthesize by region first if the table is large **(synthesized)**. To evaluate the skill itself, use skill-creator's harness. It spawns "two subagents in the same turn — one with the skill, one without" and records `total_tokens` and `duration_ms` per run ([skill-creator](https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md)). Grade against 10–20 hand-researched gold countries. Measure consistency by re-running about 10 countries two or three times and checking field-level agreement, a pass^k-style metric ([Demystifying evals](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)) **(synthesized application)**. Anthropic notes that on its first ~20 queries, "a prompt tweak might boost success rates from 30% to 80%" ([Anthropic](https://www.anthropic.com/engineering/multi-agent-research-system)), so small gold sets are enough to see the large effects.

## No public skill does the whole job, but several supply the parts

Anthropic's public skills repository holds 21 skills covering documents, design, APIs and skill authoring, and none covers orchestration or research ([anthropics/skills](https://github.com/anthropics/skills/tree/main/skills)). The large community lists have dedicated orchestration sections but almost nothing on fanning one templated task over a long list with cheap models ([awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code); [awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)). The user's skill would not duplicate an existing one. The most useful official material is spread across plugins, docs and cookbooks.

| Official resource | What's good | What's missing | Use it for |
|---|---|---|---|
| code-review plugin ([official](https://github.com/anthropics/claude-plugins-official/blob/main/plugins/code-review/commands/code-review.md); [claude-code copy](https://github.com/anthropics/claude-code/blob/main/plugins/code-review/commands/code-review.md)) | Haiku gatekeepers; parallel Sonnet/Opus reviewers with distinct lenses; one validator per finding; a verbatim 0–100 rubric with an 80 cut-off; "If you are not certain an issue is real, do not flag it" | Built for one PR, not N entities; no cost data; two divergent revisions | Pattern for cheap breadth plus stronger validation |
| claude-security `workflows/scan.js` ([link](https://github.com/anthropics/claude-plugins-official/blob/main/plugins/claude-security/workflows/scan.js)) | Production workflow with per-component fan-out, schema returns, a per-run agent budget, effort tiers, a 3-voter panel, and repo text fenced as "evidence to check, not instructions" | Minified and hard to read | Closest template for a budgeted, schema-typed fan-out |
| math-olympiad and `/siege` ([olympiad](https://github.com/anthropics/claude-plugins-official/blob/main/plugins/math-olympiad/skills/math-olympiad/SKILL.md); [siege](https://github.com/anthropics/claude-plugins-official/blob/main/plugins/math-proof/skills/siege/SKILL.md)) | Fresh-context verifiers that never see the solver's reasoning; labels per agent; retry once; orchestrator does no work and passes files, not summaries | Expensive by design | Verification and bookkeeping rules |
| feature-dev ([link](https://github.com/anthropics/claude-plugins-official/blob/main/plugins/feature-dev/commands/feature-dev.md)) | 2–3 parallel `model: sonnet` agents with different focuses that return file pointers | Small N | Multi-lens pattern |
| Bundled `/deep-research` workflow ([workflows doc](https://code.claude.com/docs/en/workflows)) | Cross-checks sources, votes per claim, filters failures, keeps "unverified" separate from "refuted" | Script, models and counts undocumented | Claim-voting design |
| Cookbook research prompts ([lead](https://github.com/anthropics/claude-cookbooks/blob/main/patterns/agents/prompts/research_lead_agent.md); [subagent](https://github.com/anthropics/claude-cookbooks/blob/main/patterns/agents/prompts/research_subagent.md)) | Delegation checklist, a worked good brief, tool-call budgets, source red flags, date injection | Written for claude.ai's tool; caps at about 20 subagents and batches entities; no model routing; contains a "MINIMUM of five" vs "under 5" contradiction | Prompt text to adapt nearly verbatim |
| Cookbook `08_Dynamic_workflows` and `cost_optimization` ([08](https://github.com/anthropics/claude-cookbooks/blob/main/claude_agent_sdk/08_Dynamic_workflows.ipynb); [cost](https://github.com/anthropics/claude-cookbooks/blob/main/cost_optimization/cost_optimization.ipynb)) | Extract, then one verifier per claim, then a skeptic, then a report, for about $2–4 a run; measured routing results | Notebooks, not skills | Worked examples with costs |
| skill-creator ([link](https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md)) | Skill format, "pushy" descriptions, a body under 500 lines, paired with/without-skill evals | Nothing on fan-out | Building and testing the skill |
| deep-research example skill (synced to claude.ai accounts; no public URL) | Coordinator never researches; fixed researcher template; notes written to files; at most one extra round; separate report writer | No per-worker model, no per-claim verification, no cost tracking | Skeleton to extend |

Community skills are newer and less proven, but a few contribute ideas the official material lacks. Star counts come from the GitHub search API on 2026-10-07. The API's `updated_at` field reflects any activity, not last commit.

| Community skill | Stars | What's good | What's missing |
|---|---|---|---|
| NeoLab SADD `do-in-parallel` ([link](https://github.com/NeoLabHQ/context-engineering-kit/blob/master/plugins/sadd/skills/do-in-parallel/SKILL.md)) | 1,748 (repo) | Closest match: a `--targets` list, per-target model choice ("single highest-leverage decision"), Sonnet/Haiku default with Opus "earned", one shared meta-judge rubric for "same task across targets", a per-item escalation ladder, at most 3 retries | ~118 KB and code-centric; worker plus judge doubles agent count; no concurrency or batching guidance for ~200 targets; its sibling `/launch-sub-agent` defaults to Opus |
| deusyu/translate-book ([link](https://github.com/deusyu/translate-book)) | 2,085 | One fresh sub-agent per chunk, batches of 8, SHA-256 manifest, resume, glossary as a "hard constraint", Glob completeness check with at most 2 attempts | No model choice or cost guidance |
| obra/superpowers `dispatching-parallel-agents` ([link](https://github.com/obra/superpowers/blob/main/skills/dispatching-parallel-agents/SKILL.md)) | 296,326 (repo); ~204.7K installs listed on [skills.sh](https://www.skills.sh/obra/superpowers/dispatching-parallel-agents) | Clear brief anti-patterns; "never inherit your session's context"; spot checks after merging | Aimed at 2–5 debugging tasks; no model, cost, schema or batch guidance |
| obra/superpowers `subagent-driven-development` ([link](https://github.com/obra/superpowers/blob/main/skills/subagent-driven-development/SKILL.md)) | same repo | "Always specify the model explicitly"; "turn count beats token price"; DONE/DONE_WITH_CONCERNS/NEEDS_CONTEXT/BLOCKED status codes | Sequential by design ("Never run multiple implementers in parallel") |
| SirRuggie/claude-code-orchestration-kit ([link](https://github.com/SirRuggie/claude-code-orchestration-kit)) | 31 | Best compact brief template; output budget; "Absent result file = UNKNOWN"; agents "sent to **refute**, not confirm" | Three commits; sequential loop with no fan-out |
| Weizhena/Deep-Research-skills ([link](https://github.com/Weizhena/Deep-Research-skills)) | 2,309 | Items × fields outline maps onto countries × attributes | No schema, model or cost guidance; README contradicts itself on parallelism |
| 199-biotechnologies/claude-deep-research-skill ([link](https://github.com/199-biotechnologies/claude-deep-research-skill)) | 1,173 | `verify_citations.py`; validate → fix → retry loop | 2–3 agents; unsubstantiated "outperforms" claim |
| mrtooher/fable-mode ([link](https://github.com/mrtooher/fable-mode)) | 870 | Per-tier skills tuned to each tier's failure mode; "verify with a check that can fail"; orchestrator given no Write/Edit tool so it must delegate | Coding focus; field reports are anecdotal |
| AndyShaman/senior-fable ([link](https://github.com/AndyShaman/senior-fable)) | 27 | "User's words" line; long reports written to disk | No fan-out mechanism |
| realgarit/fable-baton ([link](https://github.com/realgarit/fable-baton)) | 26 | The only honest cost benchmark found (n=2) | Tiny coding sample |
| revfactory/harness v2 ([link](https://github.com/revfactory/harness)) | 9,131 | Routes fan-outs to workflow scripts with `pipeline()`, schemas and budgets; forbids blanket Opus pins | Meta-skill; docs partly in Korean |
| zscole/model-hierarchy-skill ([link](https://github.com/zscole/model-hierarchy-skill/blob/main/SKILL.md)) | 346 | Escalate on prior failure; batch similar sub-tasks | Prices dated Feb 2026 (Opus at $15/$75); "~10x" claim unsubstantiated; built for OpenClaw first |
| muratcankoylan `multi-agent-patterns` ([link](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering/tree/main/skills/multi-agent-patterns)) | 18,087 (repo) | Names the supervisor "telephone game" and bottleneck | Architecture notes; its "~50% worse" claim is unverified |
| wshobson/agents, VoltAgent subagents ([wshobson](https://github.com/wshobson/agents); [VoltAgent](https://github.com/VoltAgent/awesome-claude-code-subagents)) | 40,271; 25,562 | Large model-tiered persona catalogs | No orchestration method |
| ruvnet/ruflo ([link](https://github.com/ruvnet/ruflo)) | 74,052 | Swarm framework with cost tracking | Heavyweight; "89% accuracy" routing claim has no method |

Every one of these misses the same pieces: a per-item output schema with first-class `not_found` and per-field sources, concurrency and batch sizing for 100+ agents, deliberate prompt-prefix caching, per-run cost accounting, sampling-based human QA, and the Sonnet- and Haiku-specific prompt lines Anthropic has tested. **(Synthesized:)** those gaps define what the user's skill should add. The best combination to borrow is translate-book's manifest and completeness check, NeoLab's shared rubric and per-item escalation, SirRuggie's brief slots and output budget, superpowers' explicit-model rule, and the code-review and scan.js verification patterns, all running on Claude Code workflows.

## A SKILL.md you can ship, with the brief and the before/after

The draft follows skill-creator's conventions. The `description` carries all trigger conditions and is deliberately "pushy," because Claude "has a tendency to 'undertrigger' skills". The body stays well under 500 lines, with detail in `references/`. Scripts are bundled for work every run repeats. Instructions are imperative and explain why "in lieu of heavy-handed musty MUSTs" ([skill-creator](https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md)). The suggested layout is `SKILL.md`; `references/brief-template.md` (below); `references/model-routing.md` (price table, effort notes, alias table); `references/cost-model.md` (the formula above); `scripts/validate_outputs.py` (Tier 0); `scripts/merge.py` (table plus coverage report); and `workflows/fanout.js` (a pipeline template, checked against `/workflow-authoring`).

Each rule carries a provenance tag: (S) sourced, (Syn) synthesized. Strip the tags or keep them.

### The SKILL.md body fits in about 150 lines

```markdown
---
name: cheap-worker-fanout
description: >-
  Plan, run and quality-check a fan-out where one task template is applied to many items
  (countries, companies, products, documents, files, URLs) by parallel sub-agents on cheaper
  models (Sonnet, Haiku) under a stronger orchestrator. Use this skill whenever the user wants
  the same research, extraction, classification or check done for each item in a list; says
  "for each", "per country", "one agent per", "fan out", "in parallel", "sub-agents" or
  "batch"; or wants a multi-agent job to cost less or come back more consistent, even if they
  never say "fan-out". Not for one dependent chain of work or for fewer than about 5 items.
---

# Cheap-worker fan-out

You are the orchestrator. Settle every shared decision before dispatch, dispatch identical
briefs mechanically, check what comes back, repair only what failed, and synthesize from
files. Do not do per-item work yourself and do not re-paraphrase worker results: synthesis is
where most final-report errors enter. (S)

## 1. Decide whether to fan out
- Fan out only when the work splits into many independent pieces, ideally more than one
  context window's worth; otherwise one model at lower effort is cheaper. (S)
- Fan out reads, not interdependent writes. (S)
- Under ~5 items, work directly or use 1-3 subagents. (Syn)
- This skill is the user's request to delegate. Dispatch through a runtime (section 2), not
  turn by turn; prose-only delegation tends to run inline. (S, anecdotal)

## 2. Choose the runtime
| Situation | Use |
|---|---|
| Known list of >= ~20 items, same task, tools needed | Dynamic workflow: pipeline() over items (S) |
| Very long/unattended run, or N > ~500 | Script looping `claude --bare -p --json-schema --output-format json`, or Agent SDK with max_budget_usd (S/Syn) |
| Inputs already fetched, no tool loop | Message Batches API (50% off, structured outputs, results by custom_id) (S) |
| Open-ended split into < 10 parts | Agent-tool subagents (S) |
- State the agent count when starting a workflow ("one agent per country, 195 agents"); the
  default size guideline targets < 10 agents and can push you into silent batching. (S/Syn)
- Read /workflow-authoring before writing a script. Pass the run date in args (Date.now()
  throws). Filter null results. Label every agent with its item ID. (S)
- Defaults: 16 concurrent workflow agents, 20 concurrent Agent-tool subagents, 1,000 agents
  per workflow run. Keep workers + judges + repairs under the cap. (S/Syn)

## 3. Write the job contract once
Fill references/brief-template.md before any dispatch. (S/Syn)
- Part A (shared) is byte-identical for every worker; Part B (the item) goes last. This
  keeps outputs comparable and lets workers share a prompt-cache prefix. (S)
- Decide everything a worker would otherwise decide alone: field definitions, units,
  reference date, entity identity, source priority, missing/conflict handling. (S/Syn)
- Include today's date and the user's verbatim words. (S)
- One objective; explicit out-of-scope list; budget range + hard stop + "stop when every
  field has a status"; one fictional example record containing a not_found field. (S/Syn)
- Add the tested lines for the worker's model (search nudge, persistence/stop, "Think the
  problem through before you answer", Haiku's JSON-after-tools line). Remove "minimize tool
  calls", "only search if necessary", "be thorough", "think deeply". (S)
- Version it (contract_v1) and stamp the version into every record. (Syn)
- Stranger test: could a capable contractor with no access to this conversation do the job
  from the brief alone? If not, add what they would ask for. (S)

## 4. Pick model and effort for every stage, explicitly
| Stage | Default | Effort | Escalate to |
|---|---|---|---|
| Contract, pilot review, adjudication, synthesis | orchestrator (Opus 5.5) | medium | - |
| Multi-source web research per item | Sonnet 5.5 | medium; high if long/hard | Opus 5.5 (repairs) |
| Extraction/classification from fetched text | Haiku 5.5 | medium; high for strict schemas | Sonnet 5.5 |
| Per-item judge | Sonnet 5.5, prompt distinct from worker | medium | Opus 5.5 |
| Claim verifier on flagged items | Opus 5.5 (or Sonnet 5.5 high), fresh context | medium | human |
| Mechanical checks | code | - | - |
- Never leave model unset: it inherits your model. Use a dedicated worker definition
  (.claude/agents/<name>.md) with model, effort, tools and maxTurns; tool limits cannot be
  enforced per Agent-tool call. (S)
- Off the first-party Anthropic API, pin full IDs (claude-sonnet-5-5): there the `sonnet`
  alias resolves to Sonnet 4.5/4.6 and `haiku` to Haiku 4.5. (S)
- Do not run Haiku or Sonnet workers that must search at low effort: they skip searches,
  stop early and skip checks. (S)
- In the pilot, also try Opus 5.5 at low as the worker; keep the config with the lowest
  cost per *passing* item. (Syn)

## 5. Pilot, canary, full run
1. Pilot 5 deliberately hard items (data-rich, data-poor, ambiguous identity, non-English
   sources, recent change). Read transcripts, not just outputs. (S/Syn)
2. Fix the contract; re-pilot until two rounds show no new failure mode. Freeze it and
   write the judge rubric from what you saw. (Syn)
3. Estimate: pilot cost/item x N x 1.2-1.4. Tell the user. Set a hard cap (workflow agent
   budget, --max-budget-usd, or max_budget_usd). (S/Syn)
4. Canary 10-20 items with full verification, then run the rest. (Syn)

## 6. Dispatch rules
- One item per worker for tool-heavy research: batching search-heavy items raises cost
  (re-read search results) and context rot. Batch only cheap tool-free items, <= 4-8 per
  call, checked against single-item results in the pilot. (Syn; S batching studies)
- Identical model, effort, agent type, tools, schema and working directory across workers;
  nothing variable (timestamps, counters) before the item tail. (S)
- Workers write out/<ID>.json and return only a status object. Identity comes from the
  label/filename; the echoed ID is a cross-check. (S/Syn)
- Keep a manifest: every launched item ends ok, failed or missing. A missing file is
  UNKNOWN, not done. (S)

## 7. Verify in layers, cheapest first
- Tier 0, code, every item: schema; a status on every field; URLs well-formed and
  resolving; dates parse; plausible ranges; allowed units; >= 1 tool call by the worker;
  outliers and unit/year mismatches versus peers. (Syn; S)
- Tier 1, one judge per item: pass/fail per dimension (value matches quote, citation
  supports claim, completeness, source quality) plus "unknown", one-line critique. (S/Syn)
- Tier 2, fresh-context verifier on Tier 1 fails, low-confidence fields and outliers:
  fetch source_url, confirm quote and value; report refuted vs unverifiable separately;
  flag only issues that affect correctness. (S)
- Tier 3, human: random 5-10% plus all fails/unknowns; calibrate the judge on TPR/TNR. (S/Syn)

## 8. Repair only what failed
- infra_fail (null, error, truncation): same brief, retry once. (S)
- schema_fail: retry with the validator's message. (S/Syn)
- quality_fail: brief + judge critique, one tier up (haiku -> sonnet -> opus), that item
  only. Never resend an unchanged brief at a higher tier. (S)
- Max 2 repair rounds, then needs_human. (Syn)
- Run repairs as a new pass over failing IDs; relaunching a workflow reruns every agent
  started after a failure. (S)
- Many items failing the same way = contract bug: fix and re-pilot. (Syn)

## 9. Synthesize from files
Merge, normalize and compute coverage in code (scripts/merge.py). Give the synthesizer the
table + coverage report, not worker prose. Copy values and URLs verbatim. List not_found
and conflict items. For large N, synthesize by group, then overall. (S/Syn)

## 10. Pre-flight checklist
- [ ] Fan-out justified (independent pieces, > one context's worth)
- [ ] Contract filled, versioned, piloted, frozen
- [ ] Model + effort pinned per stage; full IDs off the Anthropic API
- [ ] Item is the last thing in the prompt; nothing variable before it
- [ ] Budget range, hard stop, sufficiency rule; maxTurns set
- [ ] not_found / not_applicable / conflict exits in schema and example
- [ ] Files out, status objects back, manifest kept
- [ ] Tiers 0-3 planned; repairs as a separate pass
- [ ] Cost estimate shown; hard cap set
```

### The worker brief puts shared rules first and the country last

The template merges Anthropic's delegation checklist, SirRuggie's slots and the tested Sonnet/Haiku lines quoted earlier; the assembly is synthesized. Part A can live partly in the worker's agent definition (generic process and output discipline) and partly at the start of the task message (job-specific definitions). Either way, everything before Part B must be identical across workers.

```markdown
## PART A: SHARED JOB CONTRACT   (contract_version: {CONTRACT_VERSION})

<context>
Today's date is {RUN_DATE}. Your training data ends well before this date. {CHANGEABLE_THINGS,
e.g. "rates, laws, office holders, statistics"} may have changed since then, so search for them
before you answer, even when you feel sure. Facts that cannot change need no search.
Project goal: {1-3 sentences}. The user's words: "{verbatim request}".
Your record is one of {N} records that code will merge into {artifact}. Matching fields, units
and reference dates across records matters more than prose, so follow the definitions exactly.
</context>

<hard_rules>
1. Record a value only if you read it on a page you fetched in this session, and cite that
   page. Never fill a value from memory.
2. If you cannot confirm a value from an acceptable source within budget, set status
   "not_found", leave value empty, and list the queries you tried. "not_found" is a useful,
   acceptable answer; a guessed value is not.
3. If acceptable sources disagree, set status "conflict" and give both values with URLs.
4. Write exactly one JSON file at {OUT_DIR}/<ITEM_ID>.json matching <output>, then return only
   the status object. Write no other files.
</hard_rules>

<task>
Objective (one): for the item in PART B, find {FIELD_LIST}.
Why: {downstream use}, so prefer {precision | recency | coverage}.
Apply every rule below to every field, not just the first.
Out of scope: other items; opinions or analysis; fields not listed; derived metrics; narrative.
</task>

<definitions>
{field_1}: {exact definition, unit, period, scope; how to treat sub-national/sectoral cases}.
{field_2}: ...
Reference date: the value in force on {RUN_DATE}; record its effective or as-of date.
Units/currency: {e.g. local currency as ISO 4217 code; no conversion}.
Entity identity: {which list; disambiguation; territories in or out}.
</definitions>

<sources>
Prefer (primary): {e.g. national ministry, official gazette, national statistics office}.
Acceptable (secondary): {e.g. ILOSTAT, World Bank, IMF, UN; reputable national press}.
Avoid: aggregators, SEO/content farms, AI-generated summaries, undated pages.
Recency: prefer sources dated {window}; explain in "note" if you use an older one.
</sources>

<process>
Plan briefly. Search with short queries (under five words), broad first, then narrow; never
repeat a query. Fetch the full page for any value you record; do not rely on snippets. Run
independent searches in parallel.
Budget: expect about {5-10} tool calls; stop at {15}. Stop early once every field has a status.
</process>

<output>
Per field: {"status": "found|not_found|not_applicable|conflict", "value": "", "unit": "",
"qualifier": "", "as_of": "YYYY-MM-DD", "source_url": "", "source_type": "primary|secondary",
"quote": "", "confidence": "high|medium|low", "note": ""}. Values are strings; code parses them.
Record: {"id", "contract_version", "fields": {...}, "queries_tried": [...], "open_issues": [...]}
<example> (fictional; do not reuse its values)
{"id":"XEX","contract_version":"contract_v1","fields":{
 "statutory_minimum_wage":{"status":"found","value":"1250.00","unit":"EXD per month",
   "qualifier":"national","as_of":"2026-01-01","source_url":"https://labour.example.gov/decree-114",
   "source_type":"primary","quote":"the minimum monthly wage is set at EXD 1,250.00",
   "confidence":"high","note":""},
 "standard_weekly_hours":{"status":"not_found","value":"","unit":"hours per week","qualifier":"",
   "as_of":"","source_url":"","source_type":"primary","quote":"","confidence":"low",
   "note":"labour code page returned an error"}},
 "queries_tried":["exampleland working hours","exampleland labour code"],"open_issues":[]}
</example>
After writing the file, return: {"id":"<ITEM_ID>","status":"ok|partial|failed","path":"...",
"found":n,"not_found":n,"conflict":n}
</output>

<before_returning>
Check: every listed field has a status; every found value has a fetched source_url, a quote and
an as_of date; nothing came from memory; the file parses as JSON.
</before_returning>

<finish>
Keep working until every field has a final status, then stop and return. Do not add fields,
files or commentary that weren't asked for; put anything else useful in "note".
Think the problem through before you write the JSON.
[Haiku workers only] The JSON format applies to your final answer only. When you need a tool,
call it first, and write the JSON once you have the results.
</finish>

## PART B: ITEM (the only part that varies)
<item>
id: {ISO3}   name: {short name}   disambiguation: {e.g. "the country, not the US state"}
starting points: {optional item-specific source hint}
</item>
Return the record for {ISO3} only. Values only from pages you fetched; "not_found" when unconfirmed.
```

### The country job, before and after

The user did not share the original prompt, so the "before" is a reconstruction of the common pattern, using a minimum-wage survey as the stand-in topic.

```text
BEFORE
User -> Opus: "Use a Sonnet sub-agent for each of the 195 countries to research minimum wage
and labour rules, then combine everything into a table."
Opus, turn by turn, issues calls like:
  Agent(model="sonnet",
        prompt="Research France's minimum wage and labour rules. Be thorough and report back.")
...then reads 195 prose reports into its own context and writes the table from them.
```

```text
AFTER
1. Opus 5.5 fills contract_v1: fields statutory_minimum_wage, standard_weekly_hours,
   paid_annual_leave_days. Minimum wage = lowest statutory rate for adult workers in force on
   2026-10-07, local currency (ISO 4217), period and scope (national|subnational|sectoral)
   stated; countries that set wages only through collective agreements -> "not_applicable"
   with a note. Sources: labour ministry / official gazette > statistics office > ILOSTAT >
   reputable press. Entity list and disambiguation rules fixed.
2. Pilot 5: a federal country with sub-national rates, a country with no statutory minimum,
   a small island state, a country with non-English primary sources, a country with a recent
   rate or currency change. Read transcripts; revise; repeat until no new failure modes.
3. Workflow, stated as "one agent per country, 195 agents" (sketch; check option names in
   /workflow-authoring):
     pipeline(countries, c => agent(CONTRACT + itemTail(c),
       {label: c.iso3, agentType: "country-researcher", model: "claude-sonnet-5-5",
        effort: "medium", schema: STATUS}))
   country-researcher.md: tools WebSearch, WebFetch, Write; maxTurns 20.
4. Tier 0 validate_outputs.py -> Tier 1 Sonnet judge per country (shared rubric) ->
   Tier 2 fresh-context Opus verifier on fails, low-confidence fields and outliers ->
   Tier 3 human check of 15 random countries plus every fail.
5. Repair pass over failing IDs only: brief + judge critique on Opus 5.5 medium; max 2 rounds;
   then needs_human.
6. merge.py -> minimum_wage.csv + coverage.md; Opus writes the summary from the table,
   copying values and URLs verbatim.
```

| Change | Failure it prevents | Basis |
|---|---|---|
| Shared contract with definitions, units, reference date and entity rules | Incomparable rows from private decisions | Sourced (Anthropic checklist; Cognition) + synthesized contract |
| Today's date and a calibrated search line; "be thorough" removed | Stale answers from training memory | Sourced (Sonnet/Haiku 5.5 guides) |
| `not_found`/`not_applicable`/`conflict` statuses with queries tried | Fabricated values under "fill every field" pressure | Synthesized (mechanism) |
| `source_url` plus `quote` from fetched pages; URL checks | Hallucinated or dead citations | Sourced (arXiv 2604.03173, unverified) + synthesized checks |
| Budget range, hard stop, sufficiency rule, `medium` effort, `maxTurns` | Early stopping and endless searching | Sourced (cookbook; Sonnet 5.5 guide) |
| Full model ID and dedicated agent type | Silent alias downgrade or Opus inheritance | Sourced (model-config; subagents docs) |
| Workflow pipeline with labels and a manifest | Coverage holes, inline work, 20-agent waves | Sourced (workflows doc; math-olympiad) + synthesized manifest |
| Files out, status back, merge in code | Orchestrator context flood and synthesis errors | Sourced (Anthropic; arXiv 2608.24306) |
| Five-country pilot | Systematic brief bugs found at full cost | Sourced (Anthropic; workflows doc) + synthesized selection |
| Tiered checks and targeted repair | Unchecked fabrications; paying Opus for all 195 | Sourced (code-review plugin; re-run-failures result) + synthesized tiers |

Assume about 8 searches per worker, a Sonnet judge on every country, an Opus verifier on 25% of countries and Opus repairs on 10%. Then the "after" pipeline costs roughly **$70**: about $49 for the worker pass and about $21 for checks, repairs and synthesis (illustrative, same assumptions as the earlier cost model). Quality control adds about 45% to the worker pass. That is still cheaper than re-running all 195 countries once, and far cheaper than running every country on Opus to compensate for a vague brief.

## Conclusion

The evidence shifts the question from "which model should the workers be?" to "which decisions are workers allowed to make?" Cheaper models execute a well-specified lookup reliably. They are bad at making the shared, invisible decisions (definitions, units, what counts as a source, when to stop, what to do when data is missing) that an orchestrator takes for granted. They are also documented to be more literal and more likely to stop early than the model writing their briefs. A skill that centralizes those decisions in a frozen contract, and moves dispatch, bookkeeping and merging into code, does the work the user's 195-agent run was missing. On 2026 prices, the Sonnet-versus-Opus choice is second-order. Search counts, prefix caching, compact outputs and the Haiku/Sonnet boundary move cost far more, and escalation pays only when an external check, not the worker's own confidence, decides who gets a second try.

Two uncertainties remain. No one has published results for Sonnet 5.5 or Haiku 5.5 workers under an Opus 5.5 lead on research fan-outs. Anthropic's tested prompt lines were measured in system prompts, not delegation messages. The skill should therefore treat its own pilot, gold set and cost-per-passing-item comparison (Sonnet 5.5 at medium against Opus 5.5 at low) as the real source of truth, and update the contract template whenever the pilot finds a failure mode this report did not predict.
