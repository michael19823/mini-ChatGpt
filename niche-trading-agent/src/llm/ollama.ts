import type { Action, Decision, Direction, Domain, NewsItem } from "../types.ts";
import type { LlmBackend } from "./types.ts";
import { MockLlm } from "./mock.ts";
import { getExpertBrief } from "../experts.ts";

/**
 * Optional real-model backend. Talks to a local Ollama server via its OpenAI-
 * compatible-ish /api/chat endpoint and asks for a structured JSON decision.
 * Falls back to the heuristic mock if the model errors or returns junk, so the
 * pipeline never hard-fails on a flaky model.
 */
export class OllamaLlm implements LlmBackend {
  readonly name = "ollama";
  private fallback = new MockLlm();
  private url: string;
  private model: string;

  constructor(
    url = process.env.OLLAMA_URL ?? "http://localhost:11434",
    model = process.env.OLLAMA_MODEL ?? "llama3.1",
  ) {
    this.url = url;
    this.model = model;
  }

  async analyze(news: NewsItem, domain: Domain): Promise<Decision> {
    try {
      const res = await fetch(`${this.url}/api/chat`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          model: this.model,
          format: "json",
          stream: false,
          messages: [
            { role: "system", content: systemPrompt(domain) },
            { role: "user", content: userPrompt(news) },
          ],
        }),
      });
      if (!res.ok) throw new Error(`ollama ${res.status}`);
      const data = (await res.json()) as { message?: { content?: string } };
      const parsed = JSON.parse(data.message?.content ?? "{}");
      return normalize(parsed, domain);
    } catch (err) {
      const decision = await this.fallback.analyze(news, domain);
      decision.rationale = `[ollama unavailable: ${(err as Error).message}; used heuristic] ${decision.rationale}`;
      return decision;
    }
  }
}

function systemPrompt(domain: Domain): string {
  // Prefer the expert's SKILL.md brief (the "skill body") as the persona; fall
  // back to a brief synthesized from the structured spec if none ships.
  const brief =
    getExpertBrief(domain) ??
    [
      `You are a specialist trading analyst for: ${domain.name}.`,
      `Watchlist tickers: ${domain.tickers.join(", ")}.`,
      `Known catalysts:\n` +
        domain.catalysts.map((c) => `- ${c.id}: ${c.title} (${c.direction}). ${c.logic}`).join("\n"),
    ].join("\n");

  return [
    brief,
    ``,
    `Given a news item, decide whether it is a catalyst for this domain and how to react.`,
    `Reply ONLY with JSON: {"action":"buy|sell|hold","tickers":["..."],"confidence":0..1,`,
    `"direction":"bullish|bearish|context","matchedCatalysts":["catalyst id"],"rationale":"one sentence"}.`,
    `Only use tickers from the watchlist. Use "hold" with empty tickers if not relevant.`,
  ].join("\n");
}

function userPrompt(news: NewsItem): string {
  return `Headline: ${news.title}\nSummary: ${news.summary ?? "(none)"}\nSource: ${news.source ?? "unknown"}`;
}

function normalize(raw: unknown, domain: Domain): Decision {
  const o = (raw ?? {}) as Record<string, unknown>;
  const action = (["buy", "sell", "hold"].includes(o.action as string) ? o.action : "hold") as Action;
  const direction = (["bullish", "bearish", "context"].includes(o.direction as string) ? o.direction : "context") as Direction;
  const allowed = new Set(domain.tickers);
  const tickers = Array.isArray(o.tickers) ? (o.tickers as unknown[]).map(String).filter((t) => allowed.has(t)) : [];
  const confidence = typeof o.confidence === "number" ? Math.max(0, Math.min(1, o.confidence)) : 0.4;
  const matchedCatalysts = Array.isArray(o.matchedCatalysts) ? (o.matchedCatalysts as unknown[]).map(String) : [];
  return {
    domainId: domain.id,
    action: tickers.length === 0 ? "hold" : action,
    tickers,
    confidence: Math.round(confidence * 100) / 100,
    direction,
    matchedCatalysts,
    rationale: typeof o.rationale === "string" ? o.rationale : "(no rationale)",
  };
}
