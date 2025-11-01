import { MockAdapter } from "./mockAdapter";
import { OllamaAdapter } from "./ollamaAdapter";
import { LlmAdapter } from "./llmAdapter";

export function createLlmAdapter(): LlmAdapter {
  // Auto-detect provider based on environment variables
  // Priority: explicit LLM_PROVIDER > presence of provider-specific env vars
  const explicitProvider = process.env.LLM_PROVIDER;
  const hasOllamaConfig = process.env.OLLAMA_BASE_URL !== undefined;
  const hasMockConfig = process.env.MOCK_LLM_BASE_URL !== undefined;

  let provider: string;

  if (explicitProvider) {
    provider = explicitProvider;
  } else if (hasOllamaConfig && !hasMockConfig) {
    provider = "ollama";
  } else if (hasMockConfig && !hasOllamaConfig) {
    provider = "mock";
  } else if (hasOllamaConfig && hasMockConfig) {
    // Both configured, default to ollama
    provider = "ollama";
  } else {
    // No config found, default to mock
    provider = "mock";
  }

  if (provider === "mock") {
    const url = process.env.MOCK_LLM_BASE_URL || "http://mock-llm:8080";
    return new MockAdapter(url);
  }

  if (provider === "ollama") {
    const url = process.env.OLLAMA_BASE_URL || "http://ollama:11434";
    const model = process.env.OLLAMA_MODEL || "tinyllama";
    return new OllamaAdapter(url, model);
  }

  throw new Error(`Unknown LLM_PROVIDER: ${provider}`);
}
