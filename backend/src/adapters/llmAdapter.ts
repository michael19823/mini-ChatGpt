export interface LlmAdapter {
  complete(
    messages: { role: "user" | "assistant"; content: string }[],
    signal?: AbortSignal
  ): Promise<{ completion: string }>;
}
