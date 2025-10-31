import axios from "axios";
import { LlmAdapter } from "./llmAdapter";

export class MockAdapter implements LlmAdapter {
  constructor(private baseUrl: string) {}

  async complete(
    messages: { role: string; content: string }[],
    signal?: AbortSignal
  ) {
    console.log('[MOCK ADAPTER] Starting complete()');
    console.log('[MOCK ADAPTER] Base URL:', this.baseUrl);
    console.log('[MOCK ADAPTER] Messages count:', messages.length);
    console.log('[MOCK ADAPTER] Signal aborted:', signal?.aborted || false);
    
    const content = messages.map((m) => `${m.role}: ${m.content}`).join("\n");
    console.log('[MOCK ADAPTER] Request URL:', `${this.baseUrl}/complete`);
    console.log('[MOCK ADAPTER] Content length:', content.length);
    
    const startTime = Date.now();
    try {
      console.log('[MOCK ADAPTER] Making POST request to mock LLM...');
      const res = await axios.post(
        `${this.baseUrl}/complete`,
        { content },
        {
          timeout: 12000,
          signal,
        }
      );
      const duration = Date.now() - startTime;
      console.log('[MOCK ADAPTER] ✅ Request completed successfully in', duration, 'ms');
      console.log('[MOCK ADAPTER] Response status:', res.status);
      console.log('[MOCK ADAPTER] Completion length:', res.data?.completion?.length || 0);
      return { completion: res.data.completion };
    } catch (err: any) {
      const duration = Date.now() - startTime;
      console.error('[MOCK ADAPTER] ❌ Error occurred after', duration, 'ms');
      console.error('[MOCK ADAPTER] Error name:', err.name);
      console.error('[MOCK ADAPTER] Error message:', err.message);
      console.error('[MOCK ADAPTER] Error code:', err.code);
      throw err;
    }
  }
}
