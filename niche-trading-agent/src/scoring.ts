import type { Action, LedgerEntry } from "./types.ts";

export type Outcome = "win" | "loss" | "flat";

export interface ScoredEntry {
  entry: LedgerEntry;
  entryPrice: number;
  currentPrice: number;
  /** Signed return as a fraction: +0.05 = +5% in the trade's favor. */
  returnPct: number;
  outcome: Outcome;
}

export interface DomainScore {
  domainId: string;
  scored: number;
  wins: number;
  hitRate: number;
  avgReturnPct: number;
}

export interface ScoreSummary {
  entries: number; // total ledger rows
  scored: number; // rows with both an entry and a current price
  skipped: number; // rows we couldn't score (missing price)
  wins: number;
  losses: number;
  flats: number;
  hitRate: number; // wins / scored
  avgReturnPct: number; // equal-weight mean return across scored trades
  byDomain: DomainScore[];
  byAction: Record<Action, { scored: number; hitRate: number; avgReturnPct: number }>;
  best: ScoredEntry | null;
  worst: ScoredEntry | null;
  /** Mean return of high-confidence (>=0.7) trades vs the rest — does confidence pay? */
  highConfAvgReturnPct: number | null;
  lowConfAvgReturnPct: number | null;
}

/**
 * Signed return of a trade. A "buy" profits when the price rises; a "sell"
 * (short) profits when it falls. Position size is not modeled — this is a
 * per-dollar (equal-weight) return.
 */
export function computeReturn(action: Action, entryPrice: number, currentPrice: number): number {
  if (entryPrice <= 0) return 0;
  const raw = (currentPrice - entryPrice) / entryPrice;
  return action === "sell" ? -raw : raw;
}

function outcomeOf(returnPct: number): Outcome {
  if (returnPct > 0) return "win";
  if (returnPct < 0) return "loss";
  return "flat";
}

/**
 * Scores each ledger entry against a current price looked up by ticker.
 * Entries missing an entry price or a current price are skipped.
 */
export function scoreEntries(
  entries: LedgerEntry[],
  priceOf: (ticker: string) => number | null | undefined,
): { scored: ScoredEntry[]; skipped: LedgerEntry[] } {
  const scored: ScoredEntry[] = [];
  const skipped: LedgerEntry[] = [];
  for (const entry of entries) {
    const current = priceOf(entry.ticker);
    if (entry.entryPrice === null || current === null || current === undefined) {
      skipped.push(entry);
      continue;
    }
    const returnPct = computeReturn(entry.action, entry.entryPrice, current);
    scored.push({ entry, entryPrice: entry.entryPrice, currentPrice: current, returnPct, outcome: outcomeOf(returnPct) });
  }
  return { scored, skipped };
}

const mean = (xs: number[]): number => (xs.length === 0 ? 0 : xs.reduce((a, b) => a + b, 0) / xs.length);
const round4 = (x: number): number => Math.round(x * 10000) / 10000;

export function summarize(scored: ScoredEntry[], skipped: LedgerEntry[] = []): ScoreSummary {
  const wins = scored.filter((s) => s.outcome === "win");
  const losses = scored.filter((s) => s.outcome === "loss");
  const flats = scored.filter((s) => s.outcome === "flat");

  const byDomain = groupBy(scored, (s) => s.entry.domainId).map(([domainId, rows]): DomainScore => ({
    domainId,
    scored: rows.length,
    wins: rows.filter((r) => r.outcome === "win").length,
    hitRate: round4(rows.filter((r) => r.outcome === "win").length / rows.length),
    avgReturnPct: round4(mean(rows.map((r) => r.returnPct))),
  })).sort((a, b) => b.avgReturnPct - a.avgReturnPct);

  const actionScore = (action: Action) => {
    const rows = scored.filter((s) => s.entry.action === action);
    return {
      scored: rows.length,
      hitRate: rows.length ? round4(rows.filter((r) => r.outcome === "win").length / rows.length) : 0,
      avgReturnPct: round4(mean(rows.map((r) => r.returnPct))),
    };
  };

  const sortedByReturn = [...scored].sort((a, b) => b.returnPct - a.returnPct);
  const highConf = scored.filter((s) => s.entry.confidence >= 0.7);
  const lowConf = scored.filter((s) => s.entry.confidence < 0.7);

  return {
    entries: scored.length + skipped.length,
    scored: scored.length,
    skipped: skipped.length,
    wins: wins.length,
    losses: losses.length,
    flats: flats.length,
    hitRate: scored.length ? round4(wins.length / scored.length) : 0,
    avgReturnPct: round4(mean(scored.map((s) => s.returnPct))),
    byDomain,
    byAction: { buy: actionScore("buy"), sell: actionScore("sell"), hold: actionScore("hold") },
    best: sortedByReturn[0] ?? null,
    worst: sortedByReturn[sortedByReturn.length - 1] ?? null,
    highConfAvgReturnPct: highConf.length ? round4(mean(highConf.map((s) => s.returnPct))) : null,
    lowConfAvgReturnPct: lowConf.length ? round4(mean(lowConf.map((s) => s.returnPct))) : null,
  };
}

function groupBy<T>(items: T[], key: (t: T) => string): Array<[string, T[]]> {
  const map = new Map<string, T[]>();
  for (const item of items) {
    const k = key(item);
    const arr = map.get(k);
    if (arr) arr.push(item);
    else map.set(k, [item]);
  }
  return [...map.entries()];
}
