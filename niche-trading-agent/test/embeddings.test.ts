import { test } from "node:test";
import assert from "node:assert/strict";
import { cosine } from "../src/embeddings/cosine.ts";
import { hybridMatch } from "../src/scenarios/semanticMatch.ts";
import { scenarioText } from "../src/scenarios/vectors.ts";
import type { EmbeddingBackend } from "../src/embeddings/types.ts";
import type { Scenario } from "../src/scenarios/types.ts";
import type { NewsItem } from "../src/types.ts";

test("cosine similarity basics", () => {
  assert.equal(cosine([1, 0, 0], [1, 0, 0]), 1);
  assert.equal(cosine([1, 0, 0], [0, 1, 0]), 0);
  assert.equal(cosine([1, 0], [0, 0]), 0); // zero vector
  assert.ok(cosine([2, 1, 0], [1, 1, 0]) > 0.9);
});

// A deterministic fake embedder: projects text onto three concept axes so we can
// test the semantic pipeline without a real model.
const CONCEPTS: Record<string, string[]> = {
  nuclear: ["nuclear", "reactor", "uranium", "smr", "enrichment", "datacenter", "fuel"],
  tanker: ["tanker", "shipping", "freight", "vessel", "crude", "fleet", "rate"],
  cannabis: ["cannabis", "marijuana", "dea", "schedule", "banking", "dispensary"],
};
class FakeEmbedder implements EmbeddingBackend {
  readonly name = "fake";
  async embed(texts: string[]): Promise<number[][]> {
    return texts.map((t) => {
      const lc = t.toLowerCase();
      return Object.values(CONCEPTS).map((words) => words.filter((w) => lc.includes(w)).length);
    });
  }
}

function scn(id: string, domainId: string, title: string, hypothesis: string, triggers: string[]): Scenario {
  return {
    id, domainId, title, hypothesis, likelihood: "high", triggers,
    chain: [{ order: 1, cause: "", effect: `${domainId} repriced`, domainId, direction: "bullish", tickers: ["X"], rationale: "" }],
    playbook: [{ action: "buy", ticker: "X", weight: "primary", rationale: "" }],
    source: "llm",
  };
}

const scenarios: Scenario[] = [
  scn("u1", "uranium", "Nuclear fuel-cycle rerate", "Reactor and SMR buildout lifts uranium demand", ["SMR certification", "uranium supply cut"]),
  scn("s1", "shipping", "Tanker squeeze", "Fewer compliant vessels spike freight rates", ["shadow fleet designation", "VLCC rates surge"]),
  scn("c1", "cannabis", "Rescheduling breakthrough", "Federal reform lifts operators", ["DEA rescheduling", "safe banking act"]),
];

async function vectorsFor(s: Scenario[], emb: FakeEmbedder): Promise<Record<string, number[]>> {
  const vecs = await emb.embed(s.map(scenarioText));
  const out: Record<string, number[]> = {};
  s.forEach((x, i) => (out[x.id] = vecs[i]));
  return out;
}

function ev(title: string): NewsItem {
  return { id: "e", title, publishedAt: "2026-07-14T00:00:00Z" };
}

test("semantic matching catches a paraphrase that shares NO trigger words", async () => {
  const emb = new FakeEmbedder();
  const vectors = await vectorsFor(scenarios, emb);
  // No trigger word appears here, but it's clearly about nuclear/reactors.
  const news = ev("Major reactor buildout accelerates to power hyperscaler datacenters");

  // Keyword-only: misses it.
  const kwOnly = await hybridMatch(news, scenarios, {});
  assert.equal(kwOnly.length, 0, "keyword matching should find nothing");

  // Hybrid: finds the uranium scenario semantically.
  const hybrid = await hybridMatch(news, scenarios, { embedder: emb, vectors, threshold: 0.5 });
  assert.ok(hybrid.length > 0, "semantic matching should recognize it");
  assert.equal(hybrid[0].scenario.id, "u1");
  assert.equal(hybrid[0].via, "semantic");
  assert.ok((hybrid[0].similarity ?? 0) >= 0.5);
});

test("keyword and semantic agree → via 'both'", async () => {
  const emb = new FakeEmbedder();
  const vectors = await vectorsFor(scenarios, emb);
  const news = ev("Regulators advance DEA rescheduling; cannabis banking access nears");
  const hybrid = await hybridMatch(news, scenarios, { embedder: emb, vectors, threshold: 0.4 });
  const top = hybrid.find((m) => m.scenario.id === "c1");
  assert.ok(top, "should match the cannabis scenario");
  assert.equal(top!.via, "both");
});

test("threshold gates weak semantic matches", async () => {
  const emb = new FakeEmbedder();
  const vectors = await vectorsFor(scenarios, emb);
  const news = ev("City council debates park bench budget"); // no concept words
  const hybrid = await hybridMatch(news, scenarios, { embedder: emb, vectors, threshold: 0.5 });
  assert.equal(hybrid.length, 0);
});

test("no embedder → identical to keyword-only", async () => {
  const news = ev("Shadow fleet designation strands tankers");
  const hybrid = await hybridMatch(news, scenarios, {});
  assert.ok(hybrid.every((m) => m.via === "keyword"));
});
