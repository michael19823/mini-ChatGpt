import { test } from "node:test";
import assert from "node:assert/strict";
import { routeNews } from "../src/router.ts";
import type { NewsItem } from "../src/types.ts";

function item(title: string, summary = ""): NewsItem {
  return { id: "t", title, summary, publishedAt: "2026-07-14T00:00:00Z" };
}

test("routes uranium news to the uranium domain", () => {
  const matches = routeNews(item("Kazatomprom cuts uranium output"));
  assert.ok(matches.some((m) => m.domain.id === "uranium"));
});

test("routes shipping news to the shipping domain", () => {
  const matches = routeNews(item("Red Sea attacks disrupt Suez canal shipping"));
  assert.ok(matches.some((m) => m.domain.id === "shipping"));
});

test("irrelevant news routes to no domain", () => {
  const matches = routeNews(item("Local bakery wins award for sourdough"));
  assert.equal(matches.length, 0);
});

test("a single item can route to multiple domains", () => {
  const matches = routeNews(item("Nuclear-powered defense satellite launch planned"));
  const ids = matches.map((m) => m.domain.id);
  assert.ok(ids.includes("uranium"));
  assert.ok(ids.includes("defense"));
});
