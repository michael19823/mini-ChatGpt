import type { NewsItem } from "../types.ts";
import type { Scenario } from "./types.ts";
import { containsTerm } from "../text.ts";

export interface ScenarioMatch {
  scenario: Scenario;
  matchedTriggers: string[];
  score: number; // number of trigger hits
}

const STOP = new Set(["a", "an", "the", "of", "for", "to", "with", "and", "or", "in", "on", "at", "by", "vs", "s"]);

function contentTokens(s: string): string[] {
  return s
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length > 0 && !STOP.has(t));
}

/**
 * A trigger matches the text if EITHER it appears as a contiguous phrase
 * (handles short signals like "red sea"), OR — for multi-word triggers — a
 * majority of its key words appear somewhere in the text (handles LLM-written
 * phrase triggers like "shadow fleet designation" that a real headline expresses
 * with different wording). We favor recall here: a scenario has several triggers
 * and ranks by how many hit, so the best-fitting scenario still surfaces first.
 * Word-boundary rules from containsTerm keep short tokens precise.
 */
export function matchTrigger(text: string, trigger: string): boolean {
  if (containsTerm(text, trigger)) return true; // contiguous phrase / single keyword
  const tokens = contentTokens(trigger);
  if (tokens.length < 2) return false;
  const present = tokens.filter((tok) => containsTerm(text, tok)).length;
  const required = Math.max(2, Math.ceil(tokens.length * 0.6));
  return present >= required;
}

/**
 * The fast-reaction path. When a real event arrives, match it against the
 * pre-computed scenarios' triggers. A hit means the thinking is already done —
 * the scenario's playbook is the decision, returned instantly (no fresh
 * analysis, no model call).
 */
export function matchScenarios(news: NewsItem, scenarios: Scenario[]): ScenarioMatch[] {
  const text = `${news.title} ${news.summary ?? ""}`;
  const matches: ScenarioMatch[] = [];
  for (const scenario of scenarios) {
    const matchedTriggers = scenario.triggers.filter((t) => matchTrigger(text, t));
    if (matchedTriggers.length > 0) {
      matches.push({ scenario, matchedTriggers, score: matchedTriggers.length });
    }
  }
  return matches.sort((a, b) => b.score - a.score);
}
