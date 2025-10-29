import axios from "axios";
import { LlmAdapter } from "./llmAdapter";

export class OllamaAdapter implements LlmAdapter {
  constructor(private baseUrl: string, private model: string) {}

  async complete(
    messages: { role: "user" | "assistant"; content: string }[],
    signal?: AbortSignal
  ) {
    const res = await axios.post(
      `${this.baseUrl}/api/chat`,
      {
        model: this.model,
        messages,
        stream: false,
      },
      {
        timeout: 12000,
        signal,
      }
    );

    return { completion: res.data.message.content };
  }
}
