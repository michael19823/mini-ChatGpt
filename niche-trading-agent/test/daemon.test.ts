import { test } from "node:test";
import assert from "node:assert/strict";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { rm } from "node:fs/promises";
import { runDaemon } from "../src/daemon.ts";
import { ReplayListener } from "../src/listeners/replay.ts";
import { MockPriceProvider } from "../src/prices.ts";
import { Ledger } from "../src/ledger.ts";
import { SeenStore } from "../src/seen.ts";
import type { NewsItem, Scenario } from "../src/types.ts";
import type { HybridMatch } from "../src/scenarios/semanticMatch.ts";

function scenario(): Scenario {
  return {
    id: "s1", domainId: "shipping", title: "Tanker squeeze", hypothesis: "", likelihood: "high",
    triggers: ["shadow fleet"],
    chain: [{ order: 1, cause: "", effect: "", domainId: "shipping", direction: "bullish", tickers: ["FRO"], rationale: "" }],
    playbook: [
      { action: "buy", ticker: "FRO", weight: "primary", rationale: "vlcc leverage" },
      { action: "buy", ticker: "STNG", weight: "secondary", rationale: "products" },
    ],
    source: "llm",
  };
}

// Resolver stub: fires the scenario only for the shadow-fleet headline.
async function resolve(news: NewsItem): Promise<{ matches: HybridMatch[] }> {
  if (/shadow fleet/i.test(news.title)) {
    return { matches: [{ scenario: scenario(), matchedTriggers: ["shadow fleet"], similarity: null, via: "keyword", score: 1 }] };
  }
  return { matches: [] };
}

function freshLedger(): Ledger {
  return new Ledger(join(tmpdir(), `nta-daemon-${process.pid}-${process.hrtime.bigint()}.jsonl`));
}
function freshSeen(): SeenStore {
  return new SeenStore(join(tmpdir(), `nta-seen-${process.pid}-${process.hrtime.bigint()}.log`));
}

const news: NewsItem[] = [
  { id: "a", title: "OFAC sanctions shadow fleet tankers", publishedAt: "2026-07-14T00:00:00Z" },
  { id: "b", title: "Museum unveils sculpture exhibit", publishedAt: "2026-07-14T00:00:00Z" },
  { id: "a", title: "OFAC sanctions shadow fleet tankers", publishedAt: "2026-07-14T00:00:00Z" }, // dup id
];

test("daemon reacts to pushed events, records playbooks, ignores non-matches", async () => {
  const ledger = freshLedger();
  const result = await runDaemon({
    listener: new ReplayListener(news),
    prices: new MockPriceProvider(),
    ledger,
    seen: freshSeen(),
    resolve,
    log: () => {},
  });

  assert.equal(result.processed, 2, "3 items but one is a duplicate id");
  assert.equal(result.fired, 1, "only the shadow-fleet item matched");
  assert.equal(result.recorded.length, 2, "primary FRO + secondary STNG");
  const entries = await ledger.all();
  assert.deepEqual(entries.map((e) => e.ticker).sort(), ["FRO", "STNG"]);
  for (const e of entries) {
    assert.equal(e.action, "buy");
    assert.equal(e.confidence, 0.8, "high likelihood → 0.8");
    assert.ok(e.entryPrice && e.entryPrice > 0);
  }
  await rm((ledger as unknown as { path: string }).path, { force: true });
});

test("daemon dedups against ids already in the ledger (restart safety)", async () => {
  const ledger = freshLedger();
  const seen = freshSeen();
  await runDaemon({ listener: new ReplayListener(news), prices: new MockPriceProvider(), ledger, seen, resolve, log: () => {} });

  // Re-run with a fresh seen store: the ledger seeding should prevent re-recording.
  const second = await runDaemon({
    listener: new ReplayListener(news), prices: new MockPriceProvider(), ledger, seen: freshSeen(), resolve, log: () => {},
  });
  assert.equal(second.recorded.length, 0, "already-recorded news id is skipped on restart");
  await rm((ledger as unknown as { path: string }).path, { force: true });
});
