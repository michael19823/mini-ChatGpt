import { test } from "node:test";
import assert from "node:assert/strict";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { rm } from "node:fs/promises";
import { runOnce } from "../src/orchestrator.ts";
import { MockLlm } from "../src/llm/mock.ts";
import { FixtureSource } from "../src/news/index.ts";
import { MockPriceProvider } from "../src/prices.ts";
import { Ledger } from "../src/ledger.ts";

function freshLedger(): Ledger {
  return new Ledger(join(tmpdir(), `nta-ledger-${process.pid}-${process.hrtime.bigint()}.jsonl`));
}

test("runOnce over the fixtures records paper trades and de-dupes on re-run", async () => {
  const ledger = freshLedger();
  const opts = {
    llm: new MockLlm(),
    news: new FixtureSource(),
    prices: new MockPriceProvider(),
    ledger,
    minConfidence: 0.4,
  };

  const first = await runOnce(opts);
  assert.ok(first.processed >= 8, "should read all fixture items");
  assert.ok(first.routed >= 5, "most fixtures route to a domain");
  assert.ok(first.recorded.length > 0, "should record at least one trade");

  const entries = await ledger.all();
  assert.equal(entries.length, first.recorded.length);
  for (const e of entries) {
    assert.ok(["buy", "sell"].includes(e.action));
    assert.ok(e.entryPrice !== null && e.entryPrice > 0);
    assert.ok(e.news.title.length > 0);
  }

  // Second pass over identical news must not double-record.
  const second = await runOnce(opts);
  assert.equal(second.recorded.length, 0, "de-dup on news id");

  await rm((ledger as unknown as { path: string }).path, { force: true });
});
