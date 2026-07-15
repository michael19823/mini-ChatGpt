import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import type { NewsItem } from "../types.ts";

export interface NewsSource {
  readonly name: string;
  fetch(): Promise<NewsItem[]>;
}

/** Reads news from a local JSON fixture — the default, fully-offline source. */
export class FixtureSource implements NewsSource {
  readonly name = "fixture";
  private path: string;
  constructor(path = fileURLToPath(new URL("../../data/fixtures/sample-news.json", import.meta.url))) {
    this.path = path;
  }

  async fetch(): Promise<NewsItem[]> {
    const raw = await readFile(this.path, "utf8");
    return JSON.parse(raw) as NewsItem[];
  }
}

/**
 * Minimal RSS source (optional). Uses built-in fetch and a tiny regex parser —
 * no dependencies. Good enough for experimental use; swap for a real parser if
 * you get serious.
 */
export class RssSource implements NewsSource {
  readonly name = "rss";
  private feeds: string[];
  constructor(feeds: string[] = (process.env.NEWS_RSS_FEEDS ?? "").split(",").map((s) => s.trim()).filter(Boolean)) {
    this.feeds = feeds;
  }

  async fetch(): Promise<NewsItem[]> {
    const all: NewsItem[] = [];
    for (const url of this.feeds) {
      try {
        const res = await fetch(url, { headers: { "user-agent": "niche-trading-agent/0.1" } });
        if (!res.ok) continue;
        all.push(...parseRss(await res.text(), url));
      } catch {
        // Skip unreachable feeds; experimental system stays resilient.
      }
    }
    return all;
  }
}

function parseRss(xml: string, source: string): NewsItem[] {
  const items: NewsItem[] = [];
  const blocks = xml.match(/<item[\s\S]*?<\/item>/gi) ?? [];
  for (const block of blocks) {
    const title = tag(block, "title");
    if (!title) continue;
    items.push({
      id: tag(block, "guid") || tag(block, "link") || title,
      title,
      summary: tag(block, "description"),
      url: tag(block, "link"),
      source,
      publishedAt: tag(block, "pubDate") || new Date(0).toISOString(),
    });
  }
  return items;
}

function tag(block: string, name: string): string {
  const m = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`, "i"));
  if (!m) return "";
  return m[1]
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, "")
    .trim();
}

/** Selects the news source from NEWS_SOURCE (default: fixture). */
export function createNewsSource(kind = process.env.NEWS_SOURCE ?? "fixture"): NewsSource {
  return kind === "rss" ? new RssSource() : new FixtureSource();
}
