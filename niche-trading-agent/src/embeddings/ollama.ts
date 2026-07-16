import type { EmbeddingBackend } from "./types.ts";

/**
 * Local embeddings via Ollama's /api/embeddings endpoint (e.g. nomic-embed-text,
 * mxbai-embed-large). Small, fast, free, and offline — the recommended default.
 * One request per text keeps compatibility across Ollama versions.
 */
export class OllamaEmbedder implements EmbeddingBackend {
  readonly name: string;
  private url: string;
  private model: string;

  constructor(
    model = process.env.OLLAMA_EMBED_MODEL ?? "nomic-embed-text",
    url = process.env.OLLAMA_URL ?? "http://localhost:11434",
  ) {
    this.model = model;
    this.url = url;
    this.name = `ollama:${model}`;
  }

  async embed(texts: string[]): Promise<number[][]> {
    const out: number[][] = [];
    for (const text of texts) {
      const res = await fetch(`${this.url}/api/embeddings`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ model: this.model, prompt: text }),
      });
      if (!res.ok) throw new Error(`ollama embeddings ${res.status}`);
      const data = (await res.json()) as { embedding?: number[] };
      if (!Array.isArray(data.embedding)) throw new Error("ollama embeddings: no vector");
      out.push(data.embedding);
    }
    return out;
  }
}
