import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { loadExperts, getExpertBrief } from "../src/experts.ts";
import { DOMAINS, getDomain } from "../src/domains.ts";

test("loads every expert package from disk", () => {
  const experts = loadExperts();
  assert.ok(experts.length >= 5, "at least the 5 shipped experts");
  const ids = experts.map((e) => e.id);
  for (const id of ["uranium", "agriculture", "shipping", "defense", "cannabis"]) {
    assert.ok(ids.includes(id), `missing expert: ${id}`);
  }
});

test("DOMAINS registry is backed by the loader", () => {
  assert.equal(DOMAINS.length, loadExperts().length);
  assert.equal(getDomain("uranium")?.name, "Uranium & Nuclear Fuel Cycle");
});

test("every expert is well-formed and self-consistent", () => {
  for (const d of loadExperts()) {
    assert.ok(d.id && d.name && d.edge, `${d.id}: missing metadata`);
    assert.ok(d.tickers.length > 0, `${d.id}: empty watchlist`);
    assert.ok(d.matchTerms.length > 0, `${d.id}: empty matchTerms`);
    assert.ok(d.catalysts.length > 0, `${d.id}: no catalysts`);
    for (const c of d.catalysts) {
      assert.ok(["bullish", "bearish", "context"].includes(c.direction), `${d.id}/${c.id}: bad direction`);
      // Catalyst-scoped tickers must be a subset of the watchlist.
      for (const t of c.tickers ?? []) {
        assert.ok(d.tickers.includes(t), `${d.id}/${c.id}: ticker ${t} not in watchlist`);
      }
    }
  }
});

test("each expert ships a SKILL.md brief usable as an LLM persona", () => {
  for (const d of loadExperts()) {
    assert.ok(d.briefPath && existsSync(d.briefPath), `${d.id}: no SKILL.md`);
    const brief = getExpertBrief(d);
    assert.ok(brief && brief.includes(d.name), `${d.id}: brief missing name`);
    assert.ok(brief!.includes("Catalysts"), `${d.id}: brief missing catalysts section`);
  }
});
