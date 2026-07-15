import type { Decision, Domain, NewsItem } from "../types.ts";

/**
 * An LLM backend analyzes a news item *in the context of one domain* and
 * returns a trading decision. The heuristic mock and a real model both
 * implement this same interface, so the rest of the system doesn't care which
 * is wired in.
 */
export interface LlmBackend {
  readonly name: string;
  analyze(news: NewsItem, domain: Domain): Promise<Decision>;
}
