import { test } from "node:test";
import assert from "node:assert/strict";
import { activeScenarios } from "../src/scenarios/active.ts";
import { matchScenarios, matchTrigger } from "../src/scenarios/match.ts";
import type { NewsItem } from "../src/types.ts";

function ev(title: string): NewsItem {
  return { id: "e", title, publishedAt: "2026-07-14T00:00:00Z" };
}

test("the shipped LLM council scenario set loads as the active set", async () => {
  const scenarios = await activeScenarios();
  assert.ok(scenarios.length >= 15, "the foresight council produced a rich set");
  assert.ok(scenarios.some((s) => s.source === "llm"), "includes LLM-generated scenarios");
  // Every scenario is well-formed enough to react against.
  for (const s of scenarios) {
    assert.ok(s.triggers.length > 0 && s.playbook.length > 0, `${s.id}: missing triggers/playbook`);
  }
});

test("multi-word triggers match on a majority of key words, not verbatim", () => {
  // "shadow fleet designation" should fire on a differently-worded headline.
  assert.equal(matchTrigger("OFAC blacklists shadow fleet tankers carrying Russian crude", "shadow fleet designation"), true);
  assert.equal(matchTrigger("Microsoft signs nuclear PPA with Oklo", "Microsoft nuclear PPA"), true);
  // But an unrelated headline with only one shared word does not.
  assert.equal(matchTrigger("Museum unveils a new fleet of e-bikes", "shadow fleet designation"), false);
});

test("a real event maps to a pre-computed LLM playbook with cross-domain chain", async () => {
  const scenarios = await activeScenarios();
  const matches = matchScenarios(ev("Microsoft signs nuclear PPA with Oklo to power an AI datacenter"), scenarios);
  assert.ok(matches.length > 0, "should match the hyperscaler-nuclear scenario");
  const top = matches[0].scenario;
  assert.equal(top.domainId, "uranium");
  assert.ok(top.playbook.some((a) => a.action === "buy" && a.weight === "primary"));
  assert.ok(top.chain.length > 1, "carries a multi-link chain");
});

test("an unrelated headline still matches no scenario", async () => {
  const scenarios = await activeScenarios();
  assert.equal(matchScenarios(ev("Museum unveils a sculpture exhibit this weekend"), scenarios).length, 0);
});
