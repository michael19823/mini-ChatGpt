import { test } from "node:test";
import assert from "node:assert/strict";
import { computeReturn, scoreEntries, summarize } from "../src/scoring.ts";
import type { LedgerEntry } from "../src/types.ts";

function entry(over: Partial<LedgerEntry>): LedgerEntry {
  return {
    timestamp: "2026-07-14T00:00:00Z",
    domainId: "uranium",
    action: "buy",
    ticker: "CCJ",
    confidence: 0.8,
    entryPrice: 100,
    news: { id: "n", title: "t" },
    rationale: "r",
    ...over,
  };
}

test("computeReturn: a BUY profits when price rises", () => {
  assert.equal(computeReturn("buy", 100, 110), 0.1);
  assert.equal(computeReturn("buy", 100, 90), -0.1);
});

test("computeReturn: a SELL (short) profits when price falls", () => {
  assert.equal(computeReturn("sell", 100, 90), 0.1);
  assert.equal(computeReturn("sell", 100, 110), -0.1);
});

test("scoreEntries skips rows with a missing entry or current price", () => {
  const entries = [
    entry({ ticker: "CCJ", entryPrice: 100 }),
    entry({ ticker: "UEC", entryPrice: null }), // no entry price
    entry({ ticker: "DNN", entryPrice: 50 }), // no current price below
  ];
  const prices: Record<string, number> = { CCJ: 120 };
  const { scored, skipped } = scoreEntries(entries, (t) => prices[t] ?? null);
  assert.equal(scored.length, 1);
  assert.equal(skipped.length, 2);
  assert.equal(scored[0].returnPct, 0.2);
  assert.equal(scored[0].outcome, "win");
});

test("summarize computes hit rate, wins/losses, and best/worst", () => {
  const entries = [
    entry({ ticker: "A", action: "buy", entryPrice: 100, confidence: 0.9 }), // +20% win
    entry({ ticker: "B", action: "buy", entryPrice: 100, confidence: 0.5 }), // -10% loss
    entry({ ticker: "C", action: "sell", entryPrice: 100, confidence: 0.9 }), // price up 5% -> short loss
  ];
  const prices: Record<string, number> = { A: 120, B: 90, C: 105 };
  const { scored, skipped } = scoreEntries(entries, (t) => prices[t] ?? null);
  const s = summarize(scored, skipped);

  assert.equal(s.scored, 3);
  assert.equal(s.wins, 1);
  assert.equal(s.losses, 2);
  assert.equal(s.hitRate, round4(1 / 3));
  assert.equal(s.best?.entry.ticker, "A");
  assert.equal(s.worst?.entry.ticker, "B"); // -10% is worst
  assert.equal(s.byAction.buy.scored, 2);
  assert.equal(s.byAction.sell.scored, 1);
});

test("summarize splits average return by confidence bucket", () => {
  const entries = [
    entry({ ticker: "A", entryPrice: 100, confidence: 0.9 }), // +10%
    entry({ ticker: "B", entryPrice: 100, confidence: 0.4 }), // -10%
  ];
  const prices: Record<string, number> = { A: 110, B: 90 };
  const { scored } = scoreEntries(entries, (t) => prices[t] ?? null);
  const s = summarize(scored);
  assert.equal(s.highConfAvgReturnPct, 0.1);
  assert.equal(s.lowConfAvgReturnPct, -0.1);
});

test("empty ledger summarizes to zeros without throwing", () => {
  const s = summarize([], []);
  assert.equal(s.scored, 0);
  assert.equal(s.hitRate, 0);
  assert.equal(s.best, null);
});

function round4(x: number): number {
  return Math.round(x * 10000) / 10000;
}
