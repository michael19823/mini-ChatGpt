import type { EmbeddingBackend } from "./types.ts";
import { OllamaEmbedder } from "./ollama.ts";

/**
 * Selects the embedding backend from EMBEDDING_PROVIDER. Returns null for
 * "none" (the default) — the caller then falls back to keyword-only matching,
 * so the system still runs fully offline with no model.
 */
export function createEmbedder(provider = process.env.EMBEDDING_PROVIDER ?? "none"): EmbeddingBackend | null {
  switch (provider) {
    case "ollama":
      return new OllamaEmbedder();
    case "none":
    default:
      return null;
  }
}

export type { EmbeddingBackend };
