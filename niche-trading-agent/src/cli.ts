import { setTimeout as sleep } from "node:timers/promises";
import { loadEnv, num } from "./config.ts";
import { createLlm } from "./llm/index.ts";
import { createNewsSource } from "./news/index.ts";
import { createPriceProvider } from "./prices.ts";
import { Ledger } from "./ledger.ts";
import { runOnce, domainName, type OrchestratorOptions } from "./orchestrator.ts";
import { DOMAINS } from "./domains.ts";

loadEnv();

function buildOptions(): OrchestratorOptions {
  return {
    llm: createLlm(),
    news: createNewsSource(),
    prices: createPriceProvider(),
    ledger: new Ledger(),
    minConfidence: num("MIN_CONFIDENCE", 0.4),
  };
}

async function cmdOnce(): Promise<void> {
  const opts = buildOptions();
  console.log(`\n▶ Running one pass  [llm=${opts.llm.name}, news=${opts.news.name}, minConf=${opts.minConfidence}]\n`);
  const result = await runOnce(opts);

  console.log(`Fetched ${result.processed} items, ${result.routed} routed to a specialist.\n`);
  for (const { news, decision } of result.decisions) {
    if (decision.action === "hold") continue;
    const flag = decision.confidence >= opts.minConfidence ? "✓ recorded" : "· below threshold";
    console.log(`  [${domainName(decision.domainId)}] ${decision.action.toUpperCase()} ${decision.tickers.join(", ")}  (conf ${decision.confidence})  ${flag}`);
    console.log(`     ↳ ${news.title}`);
    console.log(`     ↳ ${decision.rationale}\n`);
  }
  console.log(`Recorded ${result.recorded.length} paper trade(s) → data/ledger.jsonl`);
}

async function cmdLoop(): Promise<void> {
  const interval = num("LOOP_INTERVAL_SECONDS", 300);
  console.log(`▶ Loop mode — every ${interval}s. Ctrl-C to stop.`);
  // eslint-disable-next-line no-constant-condition
  while (true) {
    await cmdOnce();
    await sleep(interval * 1000);
  }
}

async function cmdReport(): Promise<void> {
  const entries = await new Ledger().all();
  if (entries.length === 0) {
    console.log("Ledger empty. Run `npm run once` first.");
    return;
  }
  console.log(`\nPaper-trade ledger — ${entries.length} entry(ies)\n`);
  const byDomain = new Map<string, number>();
  for (const e of entries) {
    byDomain.set(e.domainId, (byDomain.get(e.domainId) ?? 0) + 1);
    const price = e.entryPrice === null ? "n/a" : `$${e.entryPrice}`;
    console.log(`  ${e.timestamp.slice(0, 10)}  ${e.action.toUpperCase().padEnd(4)} ${e.ticker.padEnd(6)} @ ${price.padEnd(9)} conf ${e.confidence}  [${domainName(e.domainId)}]`);
  }
  console.log("\nBy domain:");
  for (const [id, count] of byDomain) console.log(`  ${domainName(id)}: ${count}`);
}

function cmdDomains(): void {
  console.log(`\n${DOMAINS.length} specialist domains registered:\n`);
  for (const d of DOMAINS) {
    console.log(`  ${d.name}  [${d.id}]`);
    console.log(`     edge: ${d.edge}`);
    console.log(`     watchlist: ${d.tickers.join(", ")}`);
    console.log(`     catalysts: ${d.catalysts.map((c) => c.id).join(", ")}\n`);
  }
}

const cmd = process.argv[2] ?? "once";
const commands: Record<string, () => void | Promise<void>> = {
  once: cmdOnce,
  loop: cmdLoop,
  report: cmdReport,
  domains: cmdDomains,
};

const handler = commands[cmd];
if (!handler) {
  console.error(`Unknown command "${cmd}". Use: once | loop | report | domains`);
  process.exit(1);
}
await handler();
