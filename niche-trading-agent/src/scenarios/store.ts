import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import type { Scenario } from "./types.ts";

const DEFAULT_PATH = fileURLToPath(new URL("../../data/scenarios.json", import.meta.url));

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
    try {
      return JSON.parse(await readFile(this.path, "utf8")) as Scenario[];
    } catch {
      return [];
    }
  }
}
