# awesome-claude-skills → does it help build our expert agents?

A pass over the curated `awesome-claude-skills` lists, checking each skill
against one question: **does it help us build the expert agents in
`niche-trading-agent`?**

Sources: [karanb192/awesome-claude-skills](https://github.com/karanb192/awesome-claude-skills),
[travisvn/awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills),
[ComposioHQ/awesome-claude-skills](https://github.com/ComposioHQ/awesome-claude-skills).

## Key framing

Claude Skills are **author-time** capabilities for Claude Code — they make the
assistant better at *building* the project. They are **not** runtime components
that plug into the trading agent. Only two ideas reshape the actual
architecture (skill-packaging and the data MCP server); the rest are dev aids.

## Tier 1 — directly useful for the expert agents

| Skill | How it helps build experts | Status |
|---|---|---|
| skill-creator / writing-skills / template-skill | Model each expert as a self-describing **skill package** (`experts/<id>/` = `expert.json` + `SKILL.md`), loaded dynamically. | **Done** — implemented in this project. |
| research-assistant + claude-scientific-skills | Systematically populate each expert's catalyst taxonomy, ticker universe, and data sources. | Recommended next |
| mcp-builder | Build a real **news + price MCP server** (SEC EDGAR, Finnhub, USDA, RSS) so agents use live data, not fixtures. | **Done** — stdio MCP server + RSS/EDGAR/Stooq/Finnhub providers. |
| test-driven-development + testing-anti-patterns + systematic-debugging + verification-before-completion | Harden catalyst-matching (the class of bug behind the `dea`→`deal` fix). | Applies to the 18-test suite |
| data-visualization / claude-d3js-skill | A dashboard over `ledger.jsonl` (hit-rate per expert, P&L curve). | Later |
| Skill_Seekers (tool) | Turn a data provider's API docs into a ready-made skill (shortcut for mcp-builder). | Optional |

## Tier 2 — useful for the surrounding system (not the experts)

brainstorming / writing-plans / executing-plans / get-shit-done (design &
sequencing) · csv-processing / xlsx (ingest watchlists, export ledger) ·
sql-query-builder / database-migration (move the ledger into a database) ·
api-development (wrap the agent in a standalone HTTP API/UI) · playwright-skill /
webapp-testing (scrape API-less news; test a future dashboard) · frontend-design
/ web-artifacts-builder (UI later) · ci-cd-integration / changelog-automation /
documentation-generator · git worktrees / finishing-a-branch / requesting- &
receiving-code-review · obra/superpowers (+lab) — the library most Tier-1 dev
skills come from.

## Tier 3 — not relevant

pdf, docx, pptx · algorithmic-art, canvas-design, slack-gif-creator,
web-asset-generator, frontend-slides · ios-simulator, Expo, shadcn/ui ·
ffuf-web-fuzzing, Trail of Bits security · brand-guidelines, internal-comms ·
loki-mode · condition-based-waiting, defense-in-depth, root-cause-tracing ·
sharing-skills, testing-skills-with-subagents, subagent-driven-development,
video-editing-helper, snapshot-testing, e2e-testing, performance-profiling/
optimization, load-testing, dependency-audit, refactoring-patterns,
technical-writing, security-review.

## Decision

1. **Skill-package the experts** (from skill-creator) — **implemented**:
   `experts/<id>/expert.json` + `SKILL.md`, dynamically loaded, drop-in
   extensible. See `niche-trading-agent/experts/README.md`.
2. **Data MCP server** (from mcp-builder) — **implemented**: a dependency-free
   stdio MCP server (`src/mcp/`) plus real news (RSS, SEC EDGAR) and price
   (Stooq no-key, Finnhub) providers, with graceful fallback to offline
   fixtures/mock. See `niche-trading-agent` README → "MCP server".
