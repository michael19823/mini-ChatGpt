import type { LlmBackend } from "./types.ts";
import { MockLlm } from "./mock.ts";
import { OllamaLlm } from "./ollama.ts";

/** Selects the LLM backend from LLM_PROVIDER (default: mock). */
export function createLlm(provider = process.env.LLM_PROVIDER ?? "mock"): LlmBackend {
  switch (provider) {
    case "ollama":
      return new OllamaLlm();
    case "mock":
    default:
      return new MockLlm();
  }
}

export type { LlmBackend };
