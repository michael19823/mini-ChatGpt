import { MockAdapter } from './mockAdapter';
import { OllamaAdapter } from './ollamaAdapter';
import { LlmAdapter } from './llmAdapter';

export function createLlmAdapter(): LlmAdapter {
  const provider = process.env.LLM_PROVIDER || 'mock';
  console.log('[LLM FACTORY] Creating LLM adapter, provider =', provider);

  if (provider === 'mock') {
    const url = process.env.MOCK_LLM_BASE_URL || 'http://mock-llm:8080';
    console.log('[LLM FACTORY] Creating MockAdapter with URL:', url);
    return new MockAdapter(url);
  }

  if (provider === 'ollama') {
    const url = process.env.OLLAMA_BASE_URL || 'http://ollama:11434';
    const model = process.env.OLLAMA_MODEL || 'llama3';
    console.log('[LLM FACTORY] Creating OllamaAdapter with URL:', url, 'Model:', model);
    return new OllamaAdapter(url, model);
  }

  throw new Error(`Unknown LLM_PROVIDER: ${provider}`);
}