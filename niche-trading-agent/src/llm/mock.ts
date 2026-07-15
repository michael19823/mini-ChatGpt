import type { Action, Catalyst, Decision, Direction, Domain, NewsItem } from "../types.ts";
import type { LlmBackend } from "./types.ts";
import { matchingTerms } from "../text.ts";

// Words that flip or confirm a catalyst's base direction.
const BULLISH_WORDS = ["surge", "jump", "soar", "rise", "gain", "approval", "wins", "win", "boost", "record", "shortage", "restart", "success", "beat"];
const BEARISH_WORDS = ["fall", "drop", "plunge", "slump", "reject", "rejected", "failure", "fails", "halt", "glut", "oversupply", "miss", "delay", "recall", "crl"];

function textOf(news: NewsItem): string {
  return `${news.title} ${news.summary ?? ""}`.toLowerCase();
}

function countHits(text: string, terms: string[]): string[] {
  return matchingTerms(text, terms);
}

function directionToAction(direction: Direction): Action {
  if (direction === "bullish") return "buy";
  if (direction === "bearish") return "sell";
  return "hold";
}

/**
 * Deterministic, explainable "expert" with no external model. It matches the
 * news against the domain's catalysts, resolves a direction (catalyst base
 * bias, nudged by sentiment words), and emits a decision. This makes the whole
 * pipeline runnable offline and gives real LLM output something to be compared
 * against.
 */
export class MockLlm implements LlmBackend {
  readonly name = "mock-heuristic";

  async analyze(news: NewsItem, domain: Domain): Promise<Decision> {
    const text = textOf(news);

    // Rank catalysts by keyword overlap with the news text.
    const scored = domain.catalysts
      .map((c) => ({ catalyst: c, hits: countHits(text, c.keywords) }))
      .filter((s) => s.hits.length > 0)
      .sort((a, b) => b.hits.length - a.hits.length);

    if (scored.length === 0) {
      return {
        domainId: domain.id,
        action: "hold",
        tickers: [],
        confidence: 0,
        direction: "context",
        matchedCatalysts: [],
        rationale: `No catalyst pattern matched for ${domain.name}.`,
      };
    }

    const top = scored[0];
    const bullSentiment = countHits(text, BULLISH_WORDS).length;
    const bearSentiment = countHits(text, BEARISH_WORDS).length;

    // Resolve direction: "context" catalysts lean on sentiment; directional
    // catalysts keep their base bias unless sentiment strongly contradicts.
    let direction: Direction = top.catalyst.direction;
    if (direction === "context") {
      if (bullSentiment > bearSentiment) direction = "bullish";
      else if (bearSentiment > bullSentiment) direction = "bearish";
    } else if (direction === "bullish" && bearSentiment > bullSentiment + 1) {
      direction = "bearish";
    } else if (direction === "bearish" && bullSentiment > bearSentiment + 1) {
      direction = "bullish";
    }

    const action = directionToAction(direction);
    const tickers = pickTickers(top.catalyst, domain, action);

    // Confidence: more keyword hits + aligned sentiment ⇒ higher, capped at 0.9.
    const sentimentAlign = direction === "bullish" ? bullSentiment : direction === "bearish" ? bearSentiment : 0;
    const confidence = clamp(0.35 + 0.15 * top.hits.length + 0.1 * sentimentAlign, 0, 0.9);

    return {
      domainId: domain.id,
      action,
      tickers,
      confidence: round2(confidence),
      direction,
      matchedCatalysts: scored.map((s) => s.catalyst.id),
      rationale:
        `Matched "${top.catalyst.title}" (keywords: ${top.hits.join(", ")}). ` +
        `${top.catalyst.logic} Sentiment +${bullSentiment}/-${bearSentiment} ⇒ ${direction}. ` +
        `→ ${action.toUpperCase()} ${tickers.join(", ") || "(no tickers)"}.`,
    };
  }
}

function pickTickers(catalyst: Catalyst, domain: Domain, action: Action): string[] {
  if (action === "hold") return [];
  const base = catalyst.tickers && catalyst.tickers.length > 0 ? catalyst.tickers : domain.tickers;
  return base.slice(0, 3); // keep positions concentrated for a paper system
}

function clamp(x: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, x));
}
function round2(x: number): number {
  return Math.round(x * 100) / 100;
}
