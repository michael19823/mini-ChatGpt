import type { Decision, LedgerEntry, NewsItem } from "./types.ts";
import type { LlmBackend } from "./llm/index.ts";
import type { NewsSource } from "./news/index.ts";
import type { PriceProvider } from "./prices.ts";
import { routeNews } from "./router.ts";
import { getDomain } from "./domains.ts";
import { Ledger } from "./ledger.ts";

export interface OrchestratorOptions {
  llm: LlmBackend;
  news: NewsSource;
  prices: PriceProvider;
  ledger: Ledger;
  minConfidence: number;
}

export interface RunResult {
  processed: number;
  routed: number;
  decisions: Array<{ news: NewsItem; decision: Decision }>;
  recorded: LedgerEntry[];
}

/**
 * One pass of the pipeline:
 *   fetch news → route each item to specialist domain(s) → each specialist
 *   agent decides → decisions above the confidence bar become paper trades.
 * De-dupes on news id so re-runs over the same feed don't double-record.
 */
export async function runOnce(opts: OrchestratorOptions): Promise<RunResult> {
  const seen = new Set((await opts.ledger.all()).map((e) => e.news.id));
  const items = await opts.news.fetch();
  const decisions: RunResult["decisions"] = [];
  const recorded: LedgerEntry[] = [];
  let routed = 0;

  for (const news of items) {
    const matches = routeNews(news);
    if (matches.length > 0) routed++;

    for (const { domain } of matches) {
      const decision = await opts.llm.analyze(news, domain);
      decisions.push({ news, decision });

      const actionable = decision.action !== "hold" && decision.confidence >= opts.minConfidence;
      if (!actionable || seen.has(news.id)) continue;

      for (const ticker of decision.tickers) {
        const entry: LedgerEntry = {
          timestamp: news.publishedAt || new Date().toISOString(),
          domainId: domain.id,
          action: decision.action,
          ticker,
          confidence: decision.confidence,
          entryPrice: await opts.prices.getPrice(ticker),
          news: { id: news.id, title: news.title, url: news.url, source: news.source },
          rationale: decision.rationale,
        };
        await opts.ledger.append(entry);
        recorded.push(entry);
      }
      seen.add(news.id);
    }
  }

  return { processed: items.length, routed, decisions, recorded };
}

/** Convenience: pull an entry's domain name (used by the CLI report). */
export function domainName(id: string): string {
  return getDomain(id)?.name ?? id;
}
