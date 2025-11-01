import { MockAdapter } from './mockAdapter';
import { OllamaAdapter } from './ollamaAdapter';
import { LlmAdapter } from './llmAdapter';

export function createLlmAdapter(): LlmAdapter {
  const provider = process.env.LLM_PROVIDER || 'mock';

  if (provider === 'mock') {
    const url = process.env.MOCK_LLM_BASE_URL || 'http://mock-llm:8080';
    return new MockAdapter(url);
  }

  if (provider === 'ollama') {
    const url = process.env.OLLAMA_BASE_URL || 'http://ollama:11434';
    const model = process.env.OLLAMA_MODEL || 'llama3';
    return new OllamaAdapter(url, model);
  }

  throw new Error(`Unknown LLM_PROVIDER: ${provider}`);
}