import type { LedgerEntry, Likelihood, NewsItem } from "./types.ts";
import type { Listener } from "./listeners/index.ts";
import type { PriceProvider } from "./prices.ts";
import type { HybridMatch } from "./scenarios/semanticMatch.ts";
import { Ledger } from "./ledger.ts";
import { SeenStore } from "./seen.ts";
import { reactToEvent } from "./scenarios/react.ts";

/** How a live event is turned into scenario matches (injectable for tests). */
export type Resolver = (news: NewsItem) => Promise<{ matches: HybridMatch[] }>;

export interface DaemonDeps {
  listener: Listener;
  prices: PriceProvider;
  ledger: Ledger;
  seen?: SeenStore;
  resolve?: Resolver;
  /** Called with a human-readable status line per event (default: console.log). */
  log?: (msg: string) => void;
}

export interface DaemonResult {
  processed: number;
  fired: number;
  recorded: LedgerEntry[];
}

const LIKELIHOOD_CONFIDENCE: Record<Likelihood, number> = { high: 0.8, medium: 0.6, low: 0.4 };

/**
 * The live "fast loop": subscribe to a push listener and, for each incoming
 * news item, dedup → match against pre-computed scenarios → record the fired
 * playbooks as paper trades. Deterministic recognition, no LLM per event. The
 * heavy thinking already happened in the batch foresight layer.
 */
export async function runDaemon(deps: DaemonDeps): Promise<DaemonResult> {
  const log = deps.log ?? ((m: string) => console.log(m));
  const resolve = deps.resolve ?? reactToEvent;
  const seen = deps.seen ?? (await new SeenStore().load());

  // Seed dedup with what the ledger already recorded so restarts don't repeat.
  seen.seed((await deps.ledger.all()).map((e) => e.news.id));

  const result: DaemonResult = { processed: 0, fired: 0, recorded: [] };

  await deps.listener.start(async (news) => {
    if (seen.has(news.id)) return;
    await seen.add(news.id);
    result.processed++;

    const { matches } = await resolve(news);
    if (matches.length === 0) {
      log(`· ${news.title}  — no scenario matched`);
      return;
    }
    result.fired++;

    const tickers = new Set<string>();
    for (const m of matches) {
      const confidence = LIKELIHOOD_CONFIDENCE[m.scenario.likelihood] ?? 0.5;
      for (const a of m.scenario.playbook) {
        if (a.action === "hold") continue;
        const key = `${a.action}:${a.ticker}`;
        if (tickers.has(key)) continue; // one entry per action+ticker per event
        tickers.add(key);
        const entry: LedgerEntry = {
          timestamp: news.publishedAt || new Date().toISOString(),
          domainId: m.scenario.domainId,
          action: a.action,
          ticker: a.ticker,
          confidence,
          entryPrice: await deps.prices.getPrice(a.ticker),
          news: { id: news.id, title: news.title, url: news.url, source: news.source },
          rationale: `${m.scenario.title}: ${a.rationale}`,
        };
        await deps.ledger.append(entry);
        result.recorded.push(entry);
      }
    }
    const top = matches[0];
    const via = top.via === "semantic" ? `semantic ~${top.similarity?.toFixed(2)}` : top.via;
    log(`✔ ${news.title}  → ${matches.length} scenario(s) [${via}], ${tickers.size} action(s) recorded`);
  });

  return result;
}
