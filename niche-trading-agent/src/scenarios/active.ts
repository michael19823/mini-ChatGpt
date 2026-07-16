import type { Scenario } from "./types.ts";
import { ScenarioStore } from "./store.ts";
import { generateScenarios } from "./planner.ts";

/**
 * The scenario set the runtime should react against, in precedence order:
 *   1. a locally-generated data/scenarios.json (e.g. from `npm run plan`),
 *   2. the shipped LLM-generated set (multi-agent foresight council output),
 *   3. the deterministic heuristic set (always available as a last resort).
 */
export async function activeScenarios(): Promise<Scenario[]> {
  const stored = await new ScenarioStore().loadWithFallback();
  return stored.length > 0 ? stored : generateScenarios();
}
