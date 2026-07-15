import { test } from "node:test";
import assert from "node:assert/strict";
import { MockLlm } from "../src/llm/mock.ts";
import { getDomain } from "../src/domains.ts";
import type { NewsItem } from "../src/types.ts";

const llm = new MockLlm();
function item(title: string, summary = ""): NewsItem {
  return { id: "t", title, summary, publishedAt: "2026-07-14T00:00:00Z" };
}

test("supply cut news → BUY on uranium miners", async () => {
  const d = getDomain("uranium")!;
  const decision = await llm.analyze(item("Kazatomprom announces uranium production cut"), d);
  assert.equal(decision.action, "buy");
  assert.equal(decision.direction, "bullish");
  assert.ok(decision.tickers.length > 0);
  assert.ok(decision.confidence > 0);
});

test("OPEC output cut → SELL crude tankers (bearish catalyst)", async () => {
  const d = getDomain("shipping")!;
  const decision = await llm.analyze(item("OPEC agrees deep output cut to oil supply"), d);
  assert.equal(decision.action, "sell");
  assert.equal(decision.direction, "bearish");
});

test("launch failure → context catalyst resolves bearish via sentiment", async () => {
  const d = getDomain("defense")!;
  const decision = await llm.analyze(item("Rocket launch fails to reach orbit after anomaly", "mission failure"), d);
  assert.equal(decision.direction, "bearish");
  assert.equal(decision.action, "sell");
});

test("no catalyst match → HOLD with zero confidence", async () => {
  const d = getDomain("uranium")!;
  const decision = await llm.analyze(item("Company hosts annual charity gala"), d);
  assert.equal(decision.action, "hold");
  assert.equal(decision.confidence, 0);
  assert.equal(decision.tickers.length, 0);
});

test("decision only ever uses tickers from the domain watchlist", async () => {
  const d = getDomain("cannabis")!;
  const decision = await llm.analyze(item("DEA advances marijuana rescheduling to schedule iii"), d);
  for (const t of decision.tickers) assert.ok(d.tickers.includes(t), `${t} not in watchlist`);
});
