import { appendFile, readFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import type { LedgerEntry } from "./types.ts";

const DEFAULT_PATH = fileURLToPath(new URL("../data/ledger.jsonl", import.meta.url));

/**
 * Append-only paper-trade ledger (JSON Lines). Every recorded decision is one
 * line: the action, the triggering headline, the entry price, and the
 * rationale — everything you need to score the agent honestly later.
 */
export class Ledger {
  private path: string;
  constructor(path = DEFAULT_PATH) {
    this.path = path;
  }

  async append(entry: LedgerEntry): Promise<void> {
    await mkdir(dirname(this.path), { recursive: true });
    await appendFile(this.path, JSON.stringify(entry) + "\n", "utf8");
  }

  async all(): Promise<LedgerEntry[]> {
    try {
      const raw = await readFile(this.path, "utf8");
      return raw
        .split("\n")
        .filter((l) => l.trim())
        .map((l) => JSON.parse(l) as LedgerEntry);
    } catch {
      return [];
    }
  }
}
