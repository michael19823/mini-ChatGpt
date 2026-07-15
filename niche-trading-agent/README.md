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

- **Domains** (`src/domains.ts`) — each is an "expert": a watchlist plus a
  taxonomy of catalysts with direction logic. Currently: **uranium, agriculture,
  shipping, defense/space, cannabis**. Add one by appending an object.
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

npm run domains   # list the specialist domains and their watchlists
npm run once      # process the sample news once, record paper trades
npm run report    # show the paper-trade ledger
npm test          # run the test suite
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
| `LLM_PROVIDER` | `mock` | `ollama` uses a local model at `OLLAMA_URL` |
| `NEWS_SOURCE` | `fixture` | `rss` pulls live headlines from `NEWS_RSS_FEEDS` |
| `PRICE_PROVIDER` | `mock` | (add real providers behind `src/prices.ts`) |
| `MIN_CONFIDENCE` | `0.4` | confidence bar to record a trade |
| `LOOP_INTERVAL_SECONDS` | `300` | interval for `npm run loop` |

Run continuously with `npm run loop`.

## Project layout

```
src/
  domains.ts        the specialist experts (watchlists + catalyst taxonomy)
  router.ts         news → relevant domain(s)
  text.ts           word-boundary term matching (shared by router + agent)
  llm/
    mock.ts         deterministic heuristic "expert" (default)
    ollama.ts       optional real-model backend (JSON-structured decisions)
    index.ts        backend factory
  news/index.ts     fixture + minimal RSS sources
  prices.ts         mock price provider (swap for a real one)
  ledger.ts         append-only paper-trade log
  orchestrator.ts   one pass of the whole pipeline
  cli.ts            once | loop | report | domains
data/
  fixtures/sample-news.json
test/               router, agent, pipeline, term-matching tests
```

## Adding a new specialist domain

Append to `DOMAINS` in `src/domains.ts`:

```ts
{
  id: "water",
  name: "Water",
  edge: "Slow-moving theme; occasional discrete drought/regulation catalysts.",
  tickers: ["XYL", "AWK", "WTRG", "ECL", "PHO", "FIW"],
  matchTerms: ["water", "drought", "pfas", "desalination"],
  catalysts: [
    { id: "pfas-rule", title: "PFAS regulation", keywords: ["pfas", "forever chemical"],
      direction: "bullish", logic: "Tighter limits drive treatment demand." },
  ],
}
```

The router, agents, ledger and CLI pick it up with no other changes.

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
