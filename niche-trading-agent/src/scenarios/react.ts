import type { NewsItem } from "../types.ts";
import { num } from "../config.ts";
import { createEmbedder } from "../embeddings/index.ts";
import { activeScenarios } from "./active.ts";
import { VectorStore } from "./vectors.ts";
import { hybridMatch, type HybridMatch } from "./semanticMatch.ts";

export interface ReactResult {
  matches: HybridMatch[];
  embedderName: string | null;
  hasVectors: boolean;
}

/**
 * Env-wired recognition used by the CLI and MCP: load the active scenarios,
 * build the configured embedder (if any), load precomputed vectors (if any),
 * and hybrid-match the event. Falls back to keyword-only when either is absent.
 */
export async function reactToEvent(news: NewsItem): Promise<ReactResult> {
  const scenarios = await activeScenarios();
  const embedder = createEmbedder();
  const vectorFile = await new VectorStore().load();
  const vectors = vectorFile ? vectorFile.vectors : null;

  const matches = await hybridMatch(news, scenarios, {
    embedder,
    vectors,
    threshold: num("EMBED_THRESHOLD", 0.55),
  });

  return { matches, embedderName: embedder ? embedder.name : null, hasVectors: !!vectors };
}
