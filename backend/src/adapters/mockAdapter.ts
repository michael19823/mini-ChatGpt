import axios from 'axios';
import { LlmAdapter } from './llmAdapter';

export class MockAdapter implements LlmAdapter {
  constructor(private baseUrl: string) {}

  async complete(messages: { role: string; content: string }[]) {
    const content = messages.map(m => `${m.role}: ${m.content}`).join('\n');
    const res = await axios.post(`${this.baseUrl}/complete`, { content }, { timeout: 12000 });
    return { completion: res.data.completion };
  }
}