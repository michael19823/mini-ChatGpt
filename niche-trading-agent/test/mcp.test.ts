import { test } from "node:test";
import assert from "node:assert/strict";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { handleMessage } from "../src/mcp/server.ts";
import { TOOLS, type ToolDeps } from "../src/mcp/tools.ts";
import { MockLlm } from "../src/llm/mock.ts";
import { FixtureSource } from "../src/news/index.ts";
import { MockPriceProvider } from "../src/prices.ts";
import { Ledger } from "../src/ledger.ts";

function deps(): ToolDeps {
  return {
    llm: new MockLlm(),
    news: new FixtureSource(),
    prices: new MockPriceProvider(),
    ledger: new Ledger(join(tmpdir(), `nta-mcp-${process.pid}-${process.hrtime.bigint()}.jsonl`)),
    minConfidence: 0.4,
  };
}

function req(method: string, params?: Record<string, unknown>, id: number | null = 1) {
  return { jsonrpc: "2.0" as const, id, method, params };
}

test("initialize returns protocol version and server info", async () => {
  const res = await handleMessage(req("initialize"), deps());
  assert.ok(res);
  const result = res!.result as { protocolVersion: string; serverInfo: { name: string } };
  assert.ok(result.protocolVersion);
  assert.equal(result.serverInfo.name, "niche-trading-agent");
});

test("notifications/initialized yields no response", async () => {
  const res = await handleMessage({ jsonrpc: "2.0", method: "notifications/initialized" }, deps());
  assert.equal(res, null);
});

test("tools/list returns all tools with schemas", async () => {
  const res = await handleMessage(req("tools/list"), deps());
  const { tools } = res!.result as { tools: typeof TOOLS };
  assert.equal(tools.length, TOOLS.length);
  for (const t of tools) assert.ok(t.name && t.description && t.inputSchema);
});

test("tools/call list_experts returns the 5 experts", async () => {
  const res = await handleMessage(req("tools/call", { name: "list_experts", arguments: {} }), deps());
  const { content } = res!.result as { content: { text: string }[] };
  const experts = JSON.parse(content[0].text) as { id: string }[];
  assert.ok(experts.length >= 5);
  assert.ok(experts.some((e) => e.id === "uranium"));
});

test("tools/call analyze_headline routes and decides without recording", async () => {
  const res = await handleMessage(
    req("tools/call", {
      name: "analyze_headline",
      arguments: { title: "Kazatomprom announces uranium production cut" },
    }),
    deps(),
  );
  const { content } = res!.result as { content: { text: string }[] };
  const out = JSON.parse(content[0].text) as { routedTo: string[]; decisions: { action: string }[] };
  assert.ok(out.routedTo.includes("uranium"));
  assert.equal(out.decisions[0].action, "buy");
});

test("tools/call get_price uses the provider", async () => {
  const res = await handleMessage(req("tools/call", { name: "get_price", arguments: { ticker: "CCJ" } }), deps());
  const { content } = res!.result as { content: { text: string }[] };
  const out = JSON.parse(content[0].text) as { ticker: string; price: number; provider: string };
  assert.equal(out.ticker, "CCJ");
  assert.equal(out.provider, "mock");
  assert.ok(out.price > 0);
});

test("an unknown tool is reported as an isError tool result, not a crash", async () => {
  const res = await handleMessage(req("tools/call", { name: "nope", arguments: {} }), deps());
  const result = res!.result as { isError?: boolean; content: { text: string }[] };
  assert.equal(result.isError, true);
  assert.match(result.content[0].text, /unknown tool/);
});

test("unknown method returns a JSON-RPC method-not-found error", async () => {
  const res = await handleMessage(req("bogus/method"), deps());
  assert.equal(res!.error?.code, -32601);
});

test("tools/call score_ledger returns a summary shape", async () => {
  const res = await handleMessage(req("tools/call", { name: "score_ledger", arguments: {} }), deps());
  const { content } = res!.result as { content: { text: string }[] };
  const out = JSON.parse(content[0].text) as { provider: string; summary: { scored: number; hitRate: number } };
  assert.equal(out.provider, "mock");
  assert.ok(typeof out.summary.scored === "number");
  assert.ok(typeof out.summary.hitRate === "number");
});
