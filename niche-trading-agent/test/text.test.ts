import { test } from "node:test";
import assert from "node:assert/strict";
import { containsTerm } from "../src/text.ts";
import { routeNews } from "../src/router.ts";
import type { NewsItem } from "../src/types.ts";

test("short terms match as whole words only ('dea' ≠ 'deal')", () => {
  assert.equal(containsTerm("procurement deal signed", "dea"), false);
  assert.equal(containsTerm("the DEA announced", "dea"), true);
});

test("longer terms match inflections as a prefix", () => {
  assert.equal(containsTerm("new sanctions imposed", "sanction"), true);
  assert.equal(containsTerm("rescheduling advances", "reschedul"), true);
  assert.equal(containsTerm("red sea attacks", "attack"), true);
});

test("prefix match still requires a word boundary ('gain' ≠ 'against')", () => {
  assert.equal(containsTerm("voted against it", "gain"), false);
});

test("regression: a defense contract 'deal' no longer routes to cannabis", () => {
  const news: NewsItem = {
    id: "r",
    title: "Kratos wins $500M Pentagon drone contract award",
    summary: "The defense firm was awarded a major procurement deal for unmanned systems.",
    publishedAt: "2026-07-14T00:00:00Z",
  };
  const ids = routeNews(news).map((m) => m.domain.id);
  assert.ok(ids.includes("defense"));
  assert.ok(!ids.includes("cannabis"), "should not misroute to cannabis via 'deal'");
});
