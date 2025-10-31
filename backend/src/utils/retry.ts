export async function withRetry<T>(
  fn: () => Promise<T>,
  retries: number,
  delayMs: number,
  signal?: AbortSignal
): Promise<T> {
  console.log('[RETRY] Starting retry wrapper, max retries:', retries, 'delayMs:', delayMs);
  let lastError;
  
  for (let i = 0; i <= retries; i++) {
    console.log('[RETRY] Attempt', i + 1, 'of', retries + 1);
    
    // Check if aborted before retry
    if (signal?.aborted) {
      console.log('[RETRY] Signal already aborted before attempt', i + 1);
      const abortError = new Error("Aborted");
      abortError.name = "AbortError";
      throw abortError;
    }

    try {
      console.log('[RETRY] Calling function...');
      const startTime = Date.now();
      const result = await fn();
      const duration = Date.now() - startTime;
      console.log('[RETRY] ✅ Function succeeded on attempt', i + 1, 'after', duration, 'ms');
      return result;
    } catch (err: any) {
      lastError = err;
      console.error('[RETRY] ❌ Attempt', i + 1, 'failed');
      console.error('[RETRY] Error name:', err.name);
      console.error('[RETRY] Error message:', err.message);
      console.error('[RETRY] Error code:', err.code);

      // Don't retry if aborted (axios throws CanceledError or AbortError)
      if (
        err.name === "AbortError" ||
        err.name === "CanceledError" ||
        signal?.aborted
      ) {
        console.log('[RETRY] Request was aborted - not retrying');
        const abortError = new Error("Aborted");
        abortError.name = "AbortError";
        throw abortError;
      }

      if (i < retries) {
        const delay = delayMs * (i + 1);
        console.log('[RETRY] Waiting', delay, 'ms before retry...');
        // Check abort during delay
        await new Promise((r, reject) => {
          const timeout = setTimeout(() => {
            signal?.removeEventListener("abort", abortHandler);
            console.log('[RETRY] Delay complete, proceeding to retry');
            r(undefined);
          }, delay);

          const abortHandler = () => {
            console.log('[RETRY] Aborted during delay');
            clearTimeout(timeout);
            signal?.removeEventListener("abort", abortHandler);
            const abortError = new Error("Aborted");
            abortError.name = "AbortError";
            reject(abortError);
          };

          signal?.addEventListener("abort", abortHandler);
        });
      } else {
        console.error('[RETRY] All retries exhausted');
      }
    }
  }
  console.error('[RETRY] Throwing last error after all retries failed');
  throw lastError;
}
