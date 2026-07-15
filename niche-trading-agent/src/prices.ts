export interface PriceProvider {
  readonly name: string;
  getPrice(ticker: string): Promise<number | null>;
}

/**
 * Deterministic mock prices: hashes the ticker to a stable base price so paper
 * trades record a plausible, repeatable entry without any network or API key.
 * Replace with a real provider (yfinance proxy, Finnhub, Alpha Vantage) later.
 */
export class MockPriceProvider implements PriceProvider {
  readonly name = "mock";
  async getPrice(ticker: string): Promise<number | null> {
    let h = 0;
    for (const ch of ticker) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    const base = 5 + (h % 20000) / 100; // $5.00 .. $205.00
    return Math.round(base * 100) / 100;
  }
}

export function createPriceProvider(kind = process.env.PRICE_PROVIDER ?? "mock"): PriceProvider {
  // Only the mock provider ships by default; add real ones behind this switch.
  return new MockPriceProvider();
}
