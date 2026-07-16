/**
 * A small, fast text-embedding model. Turns text into a vector so we can match
 * by MEANING (cosine similarity) instead of shared keywords. Deliberately batch
 * (`embed(texts)`) so callers can embed many scenarios in one shot.
 */
export interface EmbeddingBackend {
  readonly name: string;
  embed(texts: string[]): Promise<number[][]>;
}
