import { appendFile, readFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const DEFAULT_PATH = fileURLToPath(new URL("../data/seen.log", import.meta.url));

/**
 * Durable dedup for the live listener: remembers processed news ids across
 * restarts (append-only log), so a reconnect or a repeated frame never
 * reprocesses the same item. In-memory Set for fast lookup, file for durability.
 */
export class SeenStore {
  private path: string;
  private set = new Set<string>();
  constructor(path = DEFAULT_PATH) {
    this.path = path;
  }

  async load(): Promise<this> {
    try {
      const raw = await readFile(this.path, "utf8");
      for (const line of raw.split("\n")) {
        const id = line.trim();
        if (id) this.set.add(id);
      }
    } catch {
      /* no file yet */
    }
    return this;
  }

  has(id: string): boolean {
    return this.set.has(id);
  }

  async add(id: string): Promise<void> {
    if (this.set.has(id)) return;
    this.set.add(id);
    await mkdir(dirname(this.path), { recursive: true });
    await appendFile(this.path, id + "\n", "utf8");
  }

  seed(ids: Iterable<string>): void {
    for (const id of ids) this.set.add(id);
  }
}
