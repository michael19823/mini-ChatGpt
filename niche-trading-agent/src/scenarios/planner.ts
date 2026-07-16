import type { Action, Catalyst, Direction, Domain } from "../types.ts";
import type { ChainLink, PlaybookAction, Scenario } from "./types.ts";
import { DOMAINS, getDomain } from "../domains.ts";

/**
 * The foresight layer ("the team thinking ahead").
 *
 * For every catalyst each expert knows, it builds a Scenario: the hypothesized
 * event, its causal chain (first-order impact plus any second-order/cross-domain
 * effects the expert has encoded), the triggers that would confirm it, and a
 * pre-decided playbook. This is deterministic and runs offline; an LLM planner
 * can later enrich the same Scenario shape.
 */

function directionToAction(direction: Direction): Action {
  if (direction === "bullish") return "buy";
  if (direction === "bearish") return "sell";
  return "hold"; // context = watch
}

function topTickers(tickers: string[], n = 3): string[] {
  return tickers.slice(0, n);
}

/** Builds one scenario from a single catalyst, tracing its chain. */
export function scenarioFromCatalyst(domain: Domain, catalyst: Catalyst): Scenario {
  const primaryTickers = topTickers(catalyst.tickers && catalyst.tickers.length > 0 ? catalyst.tickers : domain.tickers);

  const chain: ChainLink[] = [
    {
      order: 1,
      cause: catalyst.title,
      effect: `${domain.name} producers repriced`,
      domainId: domain.id,
      direction: catalyst.direction,
      tickers: primaryTickers,
      rationale: catalyst.logic,
    },
  ];

  // Second-order / cross-domain links encoded on the catalyst.
  for (const link of catalyst.secondOrder ?? []) {
    const target = getDomain(link.domainId);
    const tickers = topTickers(link.tickers && link.tickers.length > 0 ? link.tickers : target?.tickers ?? []);
    chain.push({
      order: 2,
      cause: `${domain.name} move (${catalyst.title})`,
      effect: link.note,
      domainId: link.domainId,
      direction: link.direction,
      tickers,
      rationale: link.note,
    });
  }

  const playbook: PlaybookAction[] = [];
  for (const link of chain) {
    const action = directionToAction(link.direction);
    for (const ticker of link.tickers) {
      playbook.push({
        action,
        ticker,
        weight: link.order === 1 ? "primary" : "secondary",
        rationale: `${link.order === 1 ? "First" : "Second"}-order: ${link.rationale}`,
      });
    }
  }

  const likelihood = catalyst.direction === "context" ? "high" : "medium"; // scheduled events are ~certain to occur

  return {
    id: `${domain.id}:${catalyst.id}`,
    domainId: domain.id,
    title: catalyst.title,
    hypothesis: `If ${catalyst.title.toLowerCase()} occurs, ${catalyst.logic}`,
    likelihood,
    triggers: catalyst.keywords,
    chain,
    playbook,
    source: "heuristic",
  };
}

/** The whole council: every expert generates scenarios for every catalyst. */
export function generateScenarios(domains: Domain[] = DOMAINS): Scenario[] {
  return domains.flatMap((d) => d.catalysts.map((c) => scenarioFromCatalyst(d, c)));
}

/** How many scenarios carry a cross-domain (second-order into another domain) chain. */
export function crossDomainCount(scenarios: Scenario[]): number {
  return scenarios.filter((s) => s.chain.some((l) => l.order >= 2 && l.domainId !== s.domainId)).length;
}
