import axios from "axios";
import { LlmAdapter } from "./llmAdapter";

export class OllamaAdapter implements LlmAdapter {
  constructor(private baseUrl: string, private model: string) {}

  async complete(
    messages: { role: "user" | "assistant"; content: string }[],
    signal?: AbortSignal
  ) {
    console.log('[OLLAMA ADAPTER] Starting complete()');
    console.log('[OLLAMA ADAPTER] Base URL:', this.baseUrl);
    console.log('[OLLAMA ADAPTER] Model:', this.model);
    console.log('[OLLAMA ADAPTER] Messages count:', messages.length);
    console.log('[OLLAMA ADAPTER] Signal aborted:', signal?.aborted || false);
    console.log('[OLLAMA ADAPTER] Request URL:', `${this.baseUrl}/api/chat`);

    const startTime = Date.now();
    
    try {
      console.log('[OLLAMA ADAPTER] Making POST request to Ollama...');
      const res = await axios.post(
        `${this.baseUrl}/api/chat`,
        {
          model: this.model,
          messages,
          stream: false,
        },
        {
          timeout: 120000, // 120s - allows time for model loading + generation, and to catch Ollama's actual error responses
          signal,
        }
      );

      const duration = Date.now() - startTime;
      console.log('[OLLAMA ADAPTER] ✅ Request completed successfully');
      console.log('[OLLAMA ADAPTER] Duration:', duration, 'ms');
      console.log('[OLLAMA ADAPTER] Response status:', res.status);
      console.log('[OLLAMA ADAPTER] Response data keys:', Object.keys(res.data || {}));
      console.log('[OLLAMA ADAPTER] Completion length:', res.data?.message?.content?.length || 0);

      return { completion: res.data.message.content };
    } catch (err: any) {
      const duration = Date.now() - startTime;
      console.error('[OLLAMA ADAPTER] ❌ Error occurred');
      console.error('[OLLAMA ADAPTER] Duration before error:', duration, 'ms');
      console.error('[OLLAMA ADAPTER] Error name:', err.name);
      console.error('[OLLAMA ADAPTER] Error message:', err.message);
      console.error('[OLLAMA ADAPTER] Error code:', err.code);
      console.error('[OLLAMA ADAPTER] Signal aborted:', signal?.aborted || false);
      
      if (err.response) {
        console.error('[OLLAMA ADAPTER] Response status:', err.response.status);
        console.error('[OLLAMA ADAPTER] Response data:', err.response.data);
      }
      
      if (err.request && !err.response) {
        console.error('[OLLAMA ADAPTER] Request was made but no response received (timeout or connection error)');
        console.error('[OLLAMA ADAPTER] Request config:', {
          url: err.config?.url,
          method: err.config?.method,
          timeout: err.config?.timeout,
        });
        // If timeout and no response, Ollama likely timed out internally
        if (err.code === 'ECONNABORTED' && err.message.includes('timeout')) {
          console.error('[OLLAMA ADAPTER] ⚠️ Ollama timed out after 60s - this may indicate:');
          console.error('[OLLAMA ADAPTER]   1. Model is still loading into memory');
          console.error('[OLLAMA ADAPTER]   2. Ollama is out of memory/CPU resources');
          console.error('[OLLAMA ADAPTER]   3. Model generation is taking longer than expected');
          throw new Error(`Ollama request timed out after 60 seconds. The model may still be loading or Ollama may need more resources.`);
        }
      }

      // Check for HTTP error responses from Ollama
      if (err.response) {
        const status = err.response.status;
        if (status === 404) {
          const errorMsg = `Ollama model "${this.model}" not found. Please wait for the model to finish downloading.`;
          console.error('[OLLAMA ADAPTER] Model not found error:', errorMsg);
          throw new Error(errorMsg);
        }
        if (status === 500) {
          const errorData = err.response.data || {};
          const errorText = typeof errorData === 'string' ? errorData : JSON.stringify(errorData);
          const errorMsg = `Ollama returned a 500 error: ${errorText}. This may indicate Ollama is out of resources, the model is still loading, or there's an internal error.`;
          console.error('[OLLAMA ADAPTER] ⚠️ Ollama 500 error response received!');
          console.error('[OLLAMA ADAPTER] Error data:', errorData);
          console.error('[OLLAMA ADAPTER] Error headers:', err.response.headers);
          console.error('[OLLAMA ADAPTER] Full error response:', JSON.stringify(err.response.data, null, 2));
          throw new Error(errorMsg);
        }
        // Other HTTP errors
        const errorMsg = `Ollama returned ${status}: ${JSON.stringify(err.response.data || {})}`;
        console.error('[OLLAMA ADAPTER] Ollama HTTP error:', errorMsg);
        throw new Error(errorMsg);
      }
      
      // Re-throw other errors as-is
      console.error('[OLLAMA ADAPTER] Re-throwing error');
      throw err;
    }
  }
}
