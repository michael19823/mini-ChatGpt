import { setTimeout as sleep } from "node:timers/promises";
import { loadEnv, num } from "./config.ts";
import { createLlm } from "./llm/index.ts";
import { createNewsSource } from "./news/index.ts";
import { createPriceProvider } from "./prices.ts";
import { Ledger } from "./ledger.ts";
import { runOnce, domainName, type OrchestratorOptions } from "./orchestrator.ts";
import { DOMAINS } from "./domains.ts";
import { scoreEntries, summarize } from "./scoring.ts";
import { generateScenarios, crossDomainCount } from "./scenarios/planner.ts";
import { ScenarioStore } from "./scenarios/store.ts";
import { matchScenarios } from "./scenarios/match.ts";

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

function pct(x: number): string {
  return `${x >= 0 ? "+" : ""}${(x * 100).toFixed(2)}%`;
}

async function cmdScore(): Promise<void> {
  const entries = await new Ledger().all();
  if (entries.length === 0) {
    console.log("Ledger empty. Run `npm run once` first.");
    return;
  }
  const prices = createPriceProvider();
  console.log(`\n▶ Scoring ${entries.length} paper trade(s) against current prices [provider=${prices.name}]\n`);

  // Fetch each ticker's current price once.
  const tickers = [...new Set(entries.map((e) => e.ticker))];
  const priceMap = new Map<string, number | null>();
  await Promise.all(tickers.map(async (t) => priceMap.set(t, await prices.getPrice(t))));

  const { scored, skipped } = scoreEntries(entries, (t) => priceMap.get(t) ?? null);
  const s = summarize(scored, skipped);

  if (prices.name === "mock") {
    console.log("⚠ mock prices are deterministic, so current == entry and every return is 0%.");
    console.log("  Score against a snapshot with `PRICE_PROVIDER=fixture npm run score`, or live with `PRICE_PROVIDER=stooq`.\n");
  }

  console.log(`Scored ${s.scored}/${s.entries}  (skipped ${s.skipped} for missing price)`);
  console.log(`Hit rate:    ${(s.hitRate * 100).toFixed(1)}%   (${s.wins}W / ${s.losses}L / ${s.flats} flat)`);
  console.log(`Avg return:  ${pct(s.avgReturnPct)}   (equal-weight, per trade)`);
  console.log(`By action:   BUY ${pct(s.byAction.buy.avgReturnPct)} (${(s.byAction.buy.hitRate * 100).toFixed(0)}% hit) · SELL ${pct(s.byAction.sell.avgReturnPct)} (${(s.byAction.sell.hitRate * 100).toFixed(0)}% hit)`);
  if (s.highConfAvgReturnPct !== null || s.lowConfAvgReturnPct !== null) {
    const hi = s.highConfAvgReturnPct === null ? "n/a" : pct(s.highConfAvgReturnPct);
    const lo = s.lowConfAvgReturnPct === null ? "n/a" : pct(s.lowConfAvgReturnPct);
    console.log(`Confidence:  high(>=0.7) ${hi}  vs  low(<0.7) ${lo}   (does confidence pay?)`);
  }

  console.log("\nBy domain (best avg return first):");
  for (const d of s.byDomain) {
    console.log(`  ${domainName(d.domainId).padEnd(42)} ${pct(d.avgReturnPct).padStart(8)}   ${(d.hitRate * 100).toFixed(0)}% hit  (${d.scored} trades)`);
  }

  if (s.best) console.log(`\nBest:  ${s.best.entry.action.toUpperCase()} ${s.best.entry.ticker}  ${pct(s.best.returnPct)}  ($${s.best.entryPrice} → $${s.best.currentPrice})`);
  if (s.worst) console.log(`Worst: ${s.worst.entry.action.toUpperCase()} ${s.worst.entry.ticker}  ${pct(s.worst.returnPct)}  ($${s.worst.entryPrice} → $${s.worst.currentPrice})`);
  console.log("\n(Reminder: paper-trade scores. Mock/fixture prices are not real market outcomes.)");
}

async function cmdPlan(): Promise<void> {
  console.log("\n▶ Foresight: the expert team pre-computes scenarios, chain effects, and playbooks...\n");
  const scenarios = generateScenarios();
  await new ScenarioStore().save(scenarios);
  const cross = crossDomainCount(scenarios);
  const links = scenarios.reduce((n, s) => n + s.chain.length, 0);
  console.log(`Generated ${scenarios.length} scenario(s) across ${DOMAINS.length} experts.`);
  console.log(`Chain links: ${links}  (${cross} scenario(s) carry a cross-domain second-order effect).`);
  console.log(`Saved → data/scenarios.json.  View with \`npm run scenarios\`, react with \`npm run react -- "<headline>"\`.`);
}

async function cmdScenarios(): Promise<void> {
  const filter = process.argv[3];
  const scenarios = (await new ScenarioStore().load()).filter((s) => !filter || s.domainId === filter);
  if (scenarios.length === 0) {
    console.log(filter ? `No scenarios for "${filter}". Run \`npm run plan\` first.` : "No scenarios. Run `npm run plan` first.");
    return;
  }
  console.log(`\n${scenarios.length} scenario(s)${filter ? ` for ${filter}` : ""}:\n`);
  for (const s of scenarios) {
    console.log(`  [${domainName(s.domainId)}]  ${s.title}   (likelihood: ${s.likelihood})`);
    for (const link of s.chain) {
      const arrow = link.order === 1 ? "①" : "②";
      console.log(`     ${arrow} ${link.direction.toUpperCase()} ${link.tickers.join(", ")} in ${domainName(link.domainId)} — ${link.effect}`);
    }
    console.log(`     triggers: ${s.triggers.join(", ")}\n`);
  }
}

async function cmdReact(): Promise<void> {
  const headline = process.argv.slice(3).join(" ").trim();
  if (!headline) {
    console.log('Usage: npm run react -- "<headline text>"');
    return;
  }
  const scenarios = await new ScenarioStore().load();
  if (scenarios.length === 0) {
    console.log("No scenarios yet. Run `npm run plan` first.");
    return;
  }
  const matches = matchScenarios({ id: "adhoc", title: headline, publishedAt: "1970-01-01T00:00:00Z" }, scenarios);
  console.log(`\n▶ Event: "${headline}"\n`);
  if (matches.length === 0) {
    console.log("No pre-computed scenario matched. (Consider adding a catalyst/scenario for this.)");
    return;
  }
  console.log(`Matched ${matches.length} pre-computed scenario(s) — running their playbooks:\n`);
  for (const { scenario, matchedTriggers } of matches) {
    console.log(`  ✔ ${scenario.title}  [${domainName(scenario.domainId)}]   (matched: ${matchedTriggers.join(", ")})`);
    for (const a of scenario.playbook) {
      if (a.action === "hold") continue;
      const tag = a.weight === "primary" ? "▸" : "  ↳ chain";
      console.log(`     ${tag} ${a.action.toUpperCase()} ${a.ticker}   ${a.rationale}`);
    }
    console.log("");
  }
  console.log("(Pre-computed playbook = instant decision. Paper trading only, not investment advice.)");
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
  score: cmdScore,
  plan: cmdPlan,
  scenarios: cmdScenarios,
  react: cmdReact,
  domains: cmdDomains,
};

const handler = commands[cmd];
if (!handler) {
  console.error(`Unknown command "${cmd}". Use: once | loop | report | score | plan | scenarios | react | domains`);
  process.exit(1);
}
await handler();
