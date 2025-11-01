import axios from "axios";
import { LlmAdapter } from "./llmAdapter";

export class OllamaAdapter implements LlmAdapter {
  constructor(private baseUrl: string, private model: string) {}

  async complete(
    messages: { role: "user" | "assistant"; content: string }[],
    signal?: AbortSignal
  ) {
    try {
      const res = await axios.post(
        `${this.baseUrl}/api/chat`,
        {
          model: this.model,
          messages,
          stream: false,
        },
        {
          timeout: 120000,
          signal,
        }
      );

      return { completion: res.data.message.content };
    } catch (err: any) {
      if (err.request && !err.response) {
        if (err.code === "ECONNABORTED" && err.message.includes("timeout")) {
          throw new Error(
            `Ollama request timed out after 120 seconds. The model may still be loading or Ollama may need more resources.`
          );
        }
      }

      if (err.response) {
        const status = err.response.status;
        if (status === 404) {
          throw new Error(
            `Ollama model "${this.model}" not found. Please wait for the model to finish downloading.`
          );
        }
        if (status === 500) {
          const errorData = err.response.data || {};
          const errorText =
            typeof errorData === "string"
              ? errorData
              : JSON.stringify(errorData);
          throw new Error(
            `Ollama returned a 500 error: ${errorText}. This may indicate Ollama is out of resources, the model is still loading, or there's an internal error.`
          );
        }
        throw new Error(
          `Ollama returned ${status}: ${JSON.stringify(
            err.response.data || {}
          )}`
        );
      }

      throw err;
    }
  }
}
