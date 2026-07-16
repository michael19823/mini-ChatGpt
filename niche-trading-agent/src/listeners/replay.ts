import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import type { NewsItem } from "../types.ts";
import type { Listener, OnNews } from "./types.ts";

/**
 * A finite, offline listener that replays news items (from a fixture) through
 * the push interface — used to exercise the daemon end-to-end without a network
 * or API key. `start` resolves once every item has been dispatched.
 */
export class ReplayListener implements Listener {
  readonly name = "replay";
  private items: NewsItem[] | null;
  private path: string;
  private stopped = false;

  constructor(itemsOrPath?: NewsItem[] | string) {
    if (Array.isArray(itemsOrPath)) {
      this.items = itemsOrPath;
      this.path = "";
    } else {
      this.items = null;
      this.path = itemsOrPath ?? fileURLToPath(new URL("../../data/fixtures/sample-news.json", import.meta.url));
    }
  }

  async start(onNews: OnNews): Promise<void> {
    const items = this.items ?? (JSON.parse(await readFile(this.path, "utf8")) as NewsItem[]);
    for (const item of items) {
      if (this.stopped) break;
      await onNews(item);
    }
  }

  async stop(): Promise<void> {
    this.stopped = true;
  }
}
