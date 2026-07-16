import type { NewsItem } from "../types.ts";
import type { Scenario } from "./types.ts";
import type { EmbeddingBackend } from "../embeddings/index.ts";
import { cosine } from "../embeddings/cosine.ts";
import { matchScenarios } from "./match.ts";

export type MatchVia = "keyword" | "semantic" | "both";

export interface HybridMatch {
  scenario: Scenario;
  matchedTriggers: string[];
  similarity: number | null; // cosine vs the scenario, if an embedder ran
  via: MatchVia;
  score: number; // combined rank
}

export interface HybridOptions {
  embedder?: EmbeddingBackend | null;
  vectors?: Record<string, number[]> | null;
  threshold?: number; // min cosine to count as a semantic hit
  semanticWeight?: number; // how much a semantic hit contributes to ranking
}

export function newsText(news: NewsItem): string {
  return `${news.title} ${news.summary ?? ""}`.trim();
}

/**
 * Hybrid recognition: keyword trigger matching (fast, offline) UNION semantic
 * similarity (catches paraphrases with no shared words) when an embedder and
 * precomputed scenario vectors are available. A scenario is recognized if either
 * signal fires; results rank by a combined score. With no embedder/vectors this
 * degrades to pure keyword matching — identical to the offline default.
 */
export async function hybridMatch(news: NewsItem, scenarios: Scenario[], opts: HybridOptions = {}): Promise<HybridMatch[]> {
  const { embedder = null, vectors = null, threshold = 0.55, semanticWeight = 3 } = opts;

  const keyword = matchScenarios(news, scenarios);
  const kwById = new Map(keyword.map((m) => [m.scenario.id, m]));

  const sims = new Map<string, number>();
  if (embedder && vectors) {
    try {
      const [queryVec] = await embedder.embed([newsText(news)]);
      if (queryVec) {
        for (const s of scenarios) {
          const v = vectors[s.id];
          if (v) sims.set(s.id, cosine(queryVec, v));
        }
      }
    } catch {
      // Embedder unreachable → silently fall back to keyword-only.
    }
  }

  const out: HybridMatch[] = [];
  for (const s of scenarios) {
    const kw = kwById.get(s.id);
    const sim = sims.has(s.id) ? (sims.get(s.id) as number) : null;
    const semantic = sim !== null && sim >= threshold;
    if (!kw && !semantic) continue;

    const via: MatchVia = kw && semantic ? "both" : kw ? "keyword" : "semantic";
    const score = (kw ? kw.score : 0) + (sim !== null ? Math.max(0, sim) * semanticWeight : 0);
    out.push({ scenario: s, matchedTriggers: kw ? kw.matchedTriggers : [], similarity: sim, via, score });
  }
  return out.sort((a, b) => b.score - a.score);
}
