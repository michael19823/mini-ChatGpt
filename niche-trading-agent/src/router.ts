import type { Domain, NewsItem } from "./types.ts";
import { DOMAINS } from "./domains.ts";
import { matchingTerms } from "./text.ts";

export interface RouteMatch {
  domain: Domain;
  matchedTerms: string[];
}

/**
 * The orchestrator's dispatcher: decides which specialist domain(s) a news
 * item is relevant to, by matching the item's text against each domain's
 * `matchTerms`. A single item can route to multiple domains (e.g. "nuclear
 * powered datacenter" → uranium + grid).
 */
export function routeNews(news: NewsItem, domains: Domain[] = DOMAINS): RouteMatch[] {
  const text = `${news.title} ${news.summary ?? ""}`.toLowerCase();
  const matches: RouteMatch[] = [];
  for (const domain of domains) {
    const matchedTerms = matchingTerms(text, domain.matchTerms);
    if (matchedTerms.length > 0) matches.push({ domain, matchedTerms });
  }
  return matches;
}
