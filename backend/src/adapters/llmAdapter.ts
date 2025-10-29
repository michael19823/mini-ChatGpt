export interface LlmAdapter {
  complete(messages: { role: 'user' | 'assistant'; content: string }[]): Promise<{ completion: string }>;
}