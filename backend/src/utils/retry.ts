export async function withRetry<T>(
  fn: () => Promise<T>,
  retries: number,
  delayMs: number,
  signal?: AbortSignal
): Promise<T> {
  let lastError;
  for (let i = 0; i <= retries; i++) {
    // Check if aborted before retry
    if (signal?.aborted) {
      const abortError = new Error("Aborted");
      abortError.name = "AbortError";
      throw abortError;
    }

    try {
      return await fn();
    } catch (err: any) {
      lastError = err;

      // Don't retry if aborted (axios throws CanceledError or AbortError)
      if (
        err.name === "AbortError" ||
        err.name === "CanceledError" ||
        signal?.aborted
      ) {
        const abortError = new Error("Aborted");
        abortError.name = "AbortError";
        throw abortError;
      }

      if (i < retries) {
        // Check abort during delay
        await new Promise((r, reject) => {
          const timeout = setTimeout(() => {
            signal?.removeEventListener("abort", abortHandler);
            r(undefined);
          }, delayMs * (i + 1));

          const abortHandler = () => {
            clearTimeout(timeout);
            signal?.removeEventListener("abort", abortHandler);
            const abortError = new Error("Aborted");
            abortError.name = "AbortError";
            reject(abortError);
          };

          signal?.addEventListener("abort", abortHandler);
        });
      }
    }
  }
  throw lastError;
}
