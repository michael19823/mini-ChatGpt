import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import type { NewsItem } from "../types.ts";

export interface NewsSource {
  readonly name: string;
  fetch(): Promise<NewsItem[]>;
}

// --- feed parsing (pure, testable) ---------------------------------------

/**
 * Parses either RSS (`<item>`) or Atom (`<entry>`) feeds into NewsItems.
 * Deliberately dependency-free: a tolerant regex parser, good enough for the
 * handful of feeds an experimental system polls.
 */
export function parseFeed(xml: string, source: string): NewsItem[] {
  const isAtom = /<feed[\s>]/i.test(xml) && /<entry[\s>]/i.test(xml);
  const blockRe = isAtom ? /<entry[\s\S]*?<\/entry>/gi : /<item[\s\S]*?<\/item>/gi;
  const blocks = xml.match(blockRe) ?? [];
  const items: NewsItem[] = [];

  for (const block of blocks) {
    const title = tag(block, "title");
    if (!title) continue;
    const link = isAtom ? atomLink(block) : tag(block, "link");
    const published = isAtom
      ? tag(block, "updated") || tag(block, "published")
      : tag(block, "pubDate");
    items.push({
      id: tag(block, "guid") || tag(block, "id") || link || title,
      title,
      summary: tag(block, "summary") || tag(block, "description") || undefined,
      url: link || undefined,
      source,
      publishedAt: normalizeDate(published),
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
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .trim();
}

/** Atom links are attributes: <link href="..." rel="alternate"/>. */
function atomLink(block: string): string {
  const alt = block.match(/<link[^>]*rel=["']alternate["'][^>]*href=["']([^"']+)["']/i);
  if (alt) return alt[1];
  const any = block.match(/<link[^>]*href=["']([^"']+)["']/i);
  return any ? any[1] : "";
}

function normalizeDate(raw: string): string {
  if (!raw) return new Date(0).toISOString();
  const d = new Date(raw);
  return Number.isNaN(d.getTime()) ? new Date(0).toISOString() : d.toISOString();
}

/** Newest-first, de-duplicated by id, capped at `limit`. */
export function normalizeItems(items: NewsItem[], limit = 100): NewsItem[] {
  const seen = new Set<string>();
  const unique = items.filter((i) => (seen.has(i.id) ? false : (seen.add(i.id), true)));
  unique.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
  return unique.slice(0, limit);
}

// --- sources --------------------------------------------------------------

/** Reads news from a local JSON fixture — the default, fully-offline source. */
export class FixtureSource implements NewsSource {
  readonly name = "fixture";
  private path: string;
  constructor(path = fileURLToPath(new URL("../../data/fixtures/sample-news.json", import.meta.url))) {
    this.path = path;
  }
  async fetch(): Promise<NewsItem[]> {
    return JSON.parse(await readFile(this.path, "utf8")) as NewsItem[];
  }
}

/** Fetches and parses one or more RSS/Atom feeds. */
export class RssSource implements NewsSource {
  readonly name = "rss";
  private feeds: string[];
  constructor(feeds: string[] = envFeeds("NEWS_RSS_FEEDS", DEFAULT_RSS_FEEDS)) {
    this.feeds = feeds;
  }
  async fetch(): Promise<NewsItem[]> {
    return normalizeItems(await fetchFeeds(this.feeds, "rss"));
  }
}

/**
 * SEC EDGAR "latest filings" Atom feed — real material-event signal (8-K by
 * default). SEC requires a descriptive User-Agent with contact info; set
 * EDGAR_USER_AGENT="you you@example.com" or it uses a generic one.
 */
export class EdgarSource implements NewsSource {
  readonly name = "edgar";
  private url: string;
  private ua: string;
  constructor(
    filingType = process.env.EDGAR_FILING_TYPE ?? "8-K",
    count = Number(process.env.EDGAR_COUNT ?? "40"),
  ) {
    this.url = `https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent&type=${encodeURIComponent(filingType)}&company=&dateb=&owner=include&count=${count}&output=atom`;
    this.ua = process.env.EDGAR_USER_AGENT ?? "niche-trading-agent experimental@example.com";
  }
  async fetch(): Promise<NewsItem[]> {
    try {
      const res = await fetch(this.url, { headers: { "user-agent": this.ua } });
      if (!res.ok) return [];
      return normalizeItems(parseFeed(await res.text(), "edgar"));
    } catch {
      return [];
    }
  }
}

/** Combines several sources, isolating failures so one dead feed can't break the run. */
export class MultiSource implements NewsSource {
  readonly name: string;
  private sources: NewsSource[];
  constructor(sources: NewsSource[]) {
    this.sources = sources;
    this.name = `multi(${sources.map((s) => s.name).join("+")})`;
  }
  async fetch(): Promise<NewsItem[]> {
    const batches = await Promise.all(this.sources.map((s) => s.fetch().catch(() => [])));
    return normalizeItems(batches.flat());
  }
}

const DEFAULT_RSS_FEEDS = [
  "https://feeds.a.dj.com/rss/RSSMarketsMain.xml",
  "https://www.investing.com/rss/news.rss",
];

function envFeeds(name: string, fallback: string[]): string[] {
  const v = process.env[name];
  if (!v) return fallback;
  const list = v.split(",").map((s) => s.trim()).filter(Boolean);
  return list.length > 0 ? list : fallback;
}

async function fetchFeeds(feeds: string[], source: string): Promise<NewsItem[]> {
  const results = await Promise.all(
    feeds.map(async (url) => {
      try {
        const res = await fetch(url, { headers: { "user-agent": "niche-trading-agent/0.1" } });
        if (!res.ok) return [];
        return parseFeed(await res.text(), source);
      } catch {
        return [];
      }
    }),
  );
  return results.flat();
}

/** Selects the news source from NEWS_SOURCE (default: fixture). */
export function createNewsSource(kind = process.env.NEWS_SOURCE ?? "fixture"): NewsSource {
  switch (kind) {
    case "rss":
      return new RssSource();
    case "edgar":
      return new EdgarSource();
    case "all":
      return new MultiSource([new RssSource(), new EdgarSource()]);
    case "fixture":
    default:
      return new FixtureSource();
  }
}
