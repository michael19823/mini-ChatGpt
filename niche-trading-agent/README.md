# Niche Trading Agent 🧪

An **experimental, paper-trading-only** multi-agent system. Instead of trying to
out-run industrial trading systems on mega-caps, it deploys **domain-expert
agents** that watch **under-followed niche sectors** and react to **discrete news
catalysts** (an export ban, a contract award, a reactor restart, a drought).

> ⚠️ **No real money. Not investment advice.** This is a research toy for learning
> how news-reactive agents behave. Prices are mock by default; every "trade" is a
> line in a log file. See the caveats at the bottom.

The sector research behind the chosen domains lives in
[`../docs/trading-agent/niche-domains.md`](../docs/trading-agent/niche-domains.md).

## Why niche?

You can't beat the big quant funds on speed or on names everyone watches (AAPL,
SPY). The edge — if any — is in corners they ignore, where prices move on
**events you can read in plain text** and the whole investable universe is a
handful of tickers an agent can hold in its head. This project is a harness for
testing that idea honestly.

## How it works

```
 news source ──> router ──> specialist agent(s) ──> paper-trade ledger
 (fixture/RSS)   (which     (reads the headline,     (append-only JSONL:
                 domains?)   picks buy/sell/hold      decision + headline
                             + confidence)            + entry price)
```

- **Experts** (`experts/<id>/`) — each specialist is a self-contained **skill
  package**: an `expert.json` spec (watchlist + catalyst taxonomy) and an
  auto-generated `SKILL.md` brief (the persona an LLM backend reads). Currently:
  **uranium, agriculture, shipping, defense/space, cannabis**. Add one by
  dropping in a folder — see [`experts/README.md`](experts/README.md).
- **Router** (`src/router.ts`) — matches a news item to relevant domain(s).
- **Agent** (`src/llm/`) — analyzes the item in the domain's context and returns
  `{action, tickers, confidence, direction, rationale}`. Two interchangeable
  backends: a deterministic **heuristic** (default, no model needed) and an
  optional **Ollama** model.
- **Ledger** (`src/ledger.ts`) — append-only record for honest scoring later.

## Quick start

Requires **Node ≥ 22.6** (uses native TypeScript execution — no build step, no
`npm install`, zero dependencies).

```bash
cd niche-trading-agent

npm run domains    # list the specialist experts and their watchlists
npm run once       # process the sample news once, record paper trades
npm run report     # show the paper-trade ledger
npm run gen:briefs # regenerate experts/*/SKILL.md from the specs
npm test           # run the test suite
```

Out of the box everything is offline: news comes from
`data/fixtures/sample-news.json`, the agent is the heuristic, prices are mock.

### Example (`npm run once`)

```
[Uranium & Nuclear Fuel Cycle] BUY LEU, CCJ  (conf 0.9)  ✓ recorded
   ↳ US moves to ban Russian uranium enrichment imports
   ↳ Matched "Russian enrichment sanctions / ban". Sanctions on Russian
     enrichment → bullish Western enrichers (LEU). → BUY LEU, CCJ.

[Shipping] SELL FRO, STNG, INSW  (conf 0.65)  ✓ recorded
   ↳ OPEC agrees to deep output cut to support oil prices
   ↳ Less oil to move → lower ton-mile demand → bearish crude tankers.
```

## Making it "real" (all optional)

Copy `.env.example` to `.env` and set only what you want:

| Variable | Default | Effect |
|---|---|---|
| `LLM_PROVIDER` | `mock` | `ollama` uses a local model at `OLLAMA_URL` (reads each expert's SKILL.md as its system prompt) |
| `NEWS_SOURCE` | `fixture` | `rss` (from `NEWS_RSS_FEEDS`), `edgar` (SEC 8-K filings), or `all` |
| `PRICE_PROVIDER` | `mock` | `stooq` (real quotes, no key) or `finnhub` (real-time, needs `FINNHUB_API_KEY`) |
| `MIN_CONFIDENCE` | `0.4` | confidence bar to record a trade |
| `LOOP_INTERVAL_SECONDS` | `300` | interval for `npm run loop` |

Run continuously with `npm run loop`. Live sources need outbound access to their
hosts (`stooq.com`, `finnhub.io`, `www.sec.gov`, your RSS hosts); if a host is
unreachable the provider returns nothing and the pipeline degrades gracefully
rather than crashing. SEC requires a real contact string in `EDGAR_USER_AGENT`.

## MCP server

The system also ships as a **dependency-free MCP server** (stdio, JSON-RPC 2.0)
so any MCP client — Claude Code, or the mini-ChatGPT backend — can drive the
experts as tools:

```bash
npm run mcp     # speaks MCP over stdin/stdout
```

Tools exposed: `list_experts`, `get_expert_brief`, `get_price`, `get_news`,
`analyze_headline` (route + decide a headline, no recording), and `run_pipeline`
(a full pass that records paper trades). Register it in a client's MCP config by
pointing the command at `node src/mcp/server.ts`.

## Project layout

```
experts/            one skill package per specialist (drop-in)
  <id>/expert.json  the spec: watchlist + catalyst taxonomy (source of truth)
  <id>/SKILL.md     the brief: LLM persona (auto-generated from the spec)
  README.md         how to add an expert + schema
src/
  experts.ts        loads & validates experts/*/expert.json into the registry
  domains.ts        exposes the loaded registry (DOMAINS, getDomain)
  genBriefs.ts      regenerates SKILL.md from expert.json (npm run gen:briefs)
  router.ts         news → relevant expert(s)
  text.ts           word-boundary term matching (shared by router + agent)
  llm/
    mock.ts         deterministic heuristic "expert" (default)
    ollama.ts       optional real-model backend (uses SKILL.md as system prompt)
    index.ts        backend factory
  news/index.ts     news sources: fixture (offline), RSS/Atom, SEC EDGAR, multi
  prices.ts         price providers: mock, Stooq (no key), Finnhub (key)
  ledger.ts         append-only paper-trade log
  orchestrator.ts   one pass of the whole pipeline
  mcp/
    tools.ts        MCP tool defs + dispatcher (list_experts, analyze_headline, …)
    server.ts       dependency-free stdio JSON-RPC 2.0 MCP server
  cli.ts            once | loop | report | domains
data/
  fixtures/sample-news.json
test/               router, agent, pipeline, term-matching, experts,
                    providers (feed/CSV parsers), and MCP protocol tests
```

## Adding a new specialist expert

No code changes needed — create `experts/<id>/expert.json`, run
`npm run gen:briefs`, and the router, agents, ledger and CLI pick it up. Full
schema and a worked example are in [`experts/README.md`](experts/README.md).

## Honest caveats

- **Direction ≠ profit.** A headline being "bullish" doesn't mean you're early —
  liquid names may have already moved. The edge lives in less-liquid names, which
  are also the riskiest and hardest to fill.
- **Scheduled events price the *surprise*, not the event.** A real edge models the
  expectation (this heuristic does not).
- **Mock prices are fake.** Wire a real price feed before drawing any conclusions,
  and model slippage or you'll fool yourself.
- **This is a toy.** Treat every "win" as possibly luck until you have a long,
  honest, forward paper-trading record.
