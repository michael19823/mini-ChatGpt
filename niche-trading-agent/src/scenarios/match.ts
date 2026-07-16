import type { NewsItem } from "../types.ts";
import type { Scenario } from "./types.ts";
import { matchingTerms } from "../text.ts";

export interface ScenarioMatch {
  scenario: Scenario;
  matchedTriggers: string[];
  score: number; // number of trigger hits
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
    const matchedTriggers = matchingTerms(text, scenario.triggers);
    if (matchedTriggers.length > 0) {
      matches.push({ scenario, matchedTriggers, score: matchedTriggers.length });
    }
  }
  return matches.sort((a, b) => b.score - a.score);
}
