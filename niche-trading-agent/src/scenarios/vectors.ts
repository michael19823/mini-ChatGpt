import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import type { Scenario } from "./types.ts";

const DEFAULT_PATH = fileURLToPath(new URL("../../data/scenario-embeddings.json", import.meta.url));

export interface VectorFile {
  model: string;
  vectors: Record<string, number[]>; // scenarioId -> embedding
}

/**
 * The text we embed for a scenario: title + hypothesis + triggers + the chain's
 * effects/rationales. This gives the embedder the scenario's full meaning, so a
 * differently-worded headline can still match it semantically.
 */
export function scenarioText(s: Scenario): string {
  const chain = (s.chain ?? []).map((l) => `${l.effect} ${l.rationale}`).join(" ");
  return `${s.title}. ${s.hypothesis} Signals: ${s.triggers.join(", ")}. ${chain}`.trim();
}

/** Persists precomputed scenario embeddings alongside the scenarios. */
export class VectorStore {
  private path: string;
  constructor(path = DEFAULT_PATH) {
    this.path = path;
  }

  async save(file: VectorFile): Promise<void> {
    await mkdir(dirname(this.path), { recursive: true });
    await writeFile(this.path, JSON.stringify(file), "utf8");
  }

  async load(): Promise<VectorFile | null> {
    try {
      const parsed = JSON.parse(await readFile(this.path, "utf8")) as VectorFile;
      return parsed && parsed.vectors ? parsed : null;
    } catch {
      return null;
    }
  }
}
