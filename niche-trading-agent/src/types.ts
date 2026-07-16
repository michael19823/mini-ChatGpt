// Core domain model shared across the system.

/** A directional bias a catalyst tends to imply for a domain's producers. */
export type Direction = "bullish" | "bearish" | "context";

/** buy = long, sell = short/exit, hold = no action. */
export type Action = "buy" | "sell" | "hold";

/**
 * A second-order (often cross-domain) effect of a catalyst — the next link in
 * the causal chain. E.g. a shipping disruption raises energy costs, which lifts
 * fertilizer prices (an agriculture effect). This is the knowledge the foresight
 * layer uses to build chain effects across experts.
 */
export interface SecondOrderLink {
  /** The domain this downstream effect lands in (may differ from the source). */
  domainId: string;
  direction: Direction;
  /** Optional specific tickers; defaults to that domain's watchlist. */
  tickers?: string[];
  /** Why the effect propagates this way. */
  note: string;
}

/**
 * A catalyst is a *type of event* a specialist agent knows how to react to.
 * `keywords` are matched (case-insensitive) against news text; `direction`
 * is the typical impact on the domain's producers when this event fires.
 */
export interface Catalyst {
  id: string;
  title: string;
  keywords: string[];
  direction: Direction;
  /** Optional: restrict impact to a subset of the domain's tickers. */
  tickers?: string[];
  /** Short note explaining the direction logic (used in rationales). */
  logic: string;
  /** Downstream / cross-domain effects — the chain the foresight layer traces. */
  secondOrder?: SecondOrderLink[];
}

/** A specialist domain: a watchlist plus the catalysts that move it. */
export interface Domain {
  id: string;
  name: string;
  /** Full investable universe the agent watches. */
  tickers: string[];
  /** Names the router matches against news text to decide relevance. */
  matchTerms: string[];
  catalysts: Catalyst[];
  /** One-line reminder of why this corner is under-followed. */
  edge: string;
  /** Filesystem path to the expert's SKILL.md brief, if the package ships one. */
  briefPath?: string;
}

/** A raw news item from any source. */
export interface NewsItem {
  id: string;
  title: string;
  summary?: string;
  url?: string;
  source?: string;
  /** ISO timestamp. */
  publishedAt: string;
}

/** A specialist agent's decision on one news item. */
export interface Decision {
  domainId: string;
  action: Action;
  tickers: string[];
  confidence: number; // 0..1
  direction: Direction;
  matchedCatalysts: string[]; // catalyst ids
  rationale: string;
}

/** An append-only record of a paper trade triggered by a decision. */
export interface LedgerEntry {
  timestamp: string;
  domainId: string;
  action: Action;
  ticker: string;
  confidence: number;
  entryPrice: number | null;
  news: { id: string; title: string; url?: string; source?: string };
  rationale: string;
}
