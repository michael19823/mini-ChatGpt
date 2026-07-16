import type { Action, Direction } from "../types.ts";

export type Likelihood = "low" | "medium" | "high";

/** One link in a causal chain: cause -> effect, landing in some domain. */
export interface ChainLink {
  order: number; // 1 = first-order, 2 = second-order (often cross-domain), ...
  cause: string;
  effect: string;
  domainId: string; // which domain this effect lands in
  direction: Direction;
  tickers: string[];
  rationale: string;
}

/** A pre-decided move in a scenario's playbook. */
export interface PlaybookAction {
  action: Action; // buy | sell | hold(=watch)
  ticker: string;
  weight: "primary" | "secondary"; // primary = first-order, secondary = chain
  rationale: string;
}

/**
 * A pre-computed "what if" the foresight layer produces ahead of time: a
 * hypothesized event, its causal chain (first- and cross-domain second-order
 * effects), the observable triggers that would confirm it is happening, and the
 * playbook to run the moment it does.
 */
export interface Scenario {
  id: string;
  domainId: string;
  title: string; // the hypothesized event
  hypothesis: string; // "If <event> occurs, ..."
  likelihood: Likelihood;
  triggers: string[]; // keywords/signals matched against real news
  chain: ChainLink[];
  playbook: PlaybookAction[];
  source: "heuristic" | "llm";
}
