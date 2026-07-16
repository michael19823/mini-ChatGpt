import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import type { Scenario } from "./types.ts";

const DEFAULT_PATH = fileURLToPath(new URL("../../data/scenarios.json", import.meta.url));
/** Shipped LLM-generated scenario set (produced by the multi-agent foresight council). */
const LLM_FIXTURE_PATH = fileURLToPath(new URL("../../data/fixtures/llm-scenarios.json", import.meta.url));

/** Persists the generated scenario/playbook set (the team's pre-computed thinking). */
export class ScenarioStore {
  private path: string;
  constructor(path = DEFAULT_PATH) {
    this.path = path;
  }

  async save(scenarios: Scenario[]): Promise<void> {
    await mkdir(dirname(this.path), { recursive: true });
    await writeFile(this.path, JSON.stringify(scenarios, null, 2), "utf8");
  }

  async load(): Promise<Scenario[]> {
    return readScenarios(this.path);
  }

  /**
   * Load the active scenario set: a locally-generated data/scenarios.json takes
   * precedence (e.g. after `npm run plan`); otherwise fall back to the shipped
   * LLM-generated set so `react`/`scenarios` work out of the box.
   */
  async loadWithFallback(): Promise<Scenario[]> {
    const local = await readScenarios(this.path);
    if (local.length > 0) return local;
    return readScenarios(LLM_FIXTURE_PATH);
  }
}

async function readScenarios(path: string): Promise<Scenario[]> {
  try {
    const parsed = JSON.parse(await readFile(path, "utf8"));
    return Array.isArray(parsed) ? (parsed as Scenario[]) : [];
  } catch {
    return [];
  }
}
