import { test } from "node:test";
import assert from "node:assert/strict";
import { generateScenarios, scenarioFromCatalyst, crossDomainCount } from "../src/scenarios/planner.ts";
import { matchScenarios } from "../src/scenarios/match.ts";
import { getDomain } from "../src/domains.ts";
import type { NewsItem } from "../src/types.ts";

test("the council generates a scenario per catalyst across all experts", () => {
  const scenarios = generateScenarios();
  assert.ok(scenarios.length >= 15, "several scenarios");
  // Every scenario has a first-order chain link and a playbook.
  for (const s of scenarios) {
    assert.ok(s.chain.some((l) => l.order === 1), `${s.id}: no first-order link`);
    assert.ok(s.triggers.length > 0, `${s.id}: no triggers`);
  }
});

test("a catalyst with secondOrder produces a cross-domain chain link", () => {
  const shipping = getDomain("shipping")!;
  const canal = shipping.catalysts.find((c) => c.id === "canal-disruption")!;
  const s = scenarioFromCatalyst(shipping, canal);
  const second = s.chain.find((l) => l.order === 2);
  assert.ok(second, "expected a second-order link");
  assert.notEqual(second!.domainId, "shipping", "second-order effect lands in another domain");
  // Playbook includes both primary and secondary (chain) actions.
  assert.ok(s.playbook.some((a) => a.weight === "primary"));
  assert.ok(s.playbook.some((a) => a.weight === "secondary"));
});

test("crossDomainCount finds scenarios that ripple into other domains", () => {
  const scenarios = generateScenarios();
  assert.ok(crossDomainCount(scenarios) >= 2, "shipping + defense encode cross-domain chains");
});

test("a real headline matches the pre-computed scenario and yields a playbook", () => {
  const scenarios = generateScenarios();
  const news: NewsItem = {
    id: "e",
    title: "Red Sea attacks force ships to reroute around Africa",
    publishedAt: "2026-07-14T00:00:00Z",
  };
  const matches = matchScenarios(news, scenarios);
  assert.ok(matches.length > 0, "should match at least one scenario");
  const top = matches[0].scenario;
  assert.equal(top.domainId, "shipping");
  // Its playbook buys shipping names primarily and ripples to another domain.
  assert.ok(top.playbook.some((a) => a.action === "buy" && a.weight === "primary"));
  assert.ok(top.chain.some((l) => l.domainId !== "shipping"));
});

test("an unrelated headline matches no scenario (fast no-op)", () => {
  const scenarios = generateScenarios();
  const news: NewsItem = { id: "x", title: "Museum unveils a sculpture exhibit this weekend", publishedAt: "2026-07-14T00:00:00Z" };
  assert.equal(matchScenarios(news, scenarios).length, 0);
});
