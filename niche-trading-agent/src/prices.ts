export interface PriceProvider {
  readonly name: string;
  getPrice(ticker: string): Promise<number | null>;
}

/**
 * Deterministic mock prices: hashes the ticker to a stable base price so paper
 * trades record a plausible, repeatable entry without any network or API key.
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

/**
 * Real quotes from Stooq — no API key required. Fetches the CSV endpoint and
 * returns the close. US tickers are queried as "<ticker>.us". Returns null on
 * any failure so the pipeline degrades gracefully.
 */
export class StooqPriceProvider implements PriceProvider {
  readonly name = "stooq";
  async getPrice(ticker: string): Promise<number | null> {
    try {
      const symbol = `${ticker.toLowerCase()}.us`;
      const url = `https://stooq.com/q/l/?s=${encodeURIComponent(symbol)}&f=sd2t2ohlcv&h&e=csv`;
      const res = await fetch(url, { headers: { "user-agent": "niche-trading-agent/0.1" } });
      if (!res.ok) return null;
      return parseStooqCsv(await res.text());
    } catch {
      return null;
    }
  }
}

/** Parses Stooq's quote CSV (header row + one data row) and returns the close. */
export function parseStooqCsv(csv: string): number | null {
  const lines = csv.trim().split(/\r?\n/);
  if (lines.length < 2) return null;
  const header = lines[0].split(",").map((h) => h.trim().toLowerCase());
  const row = lines[1].split(",");
  const idx = header.indexOf("close");
  if (idx === -1) return null;
  const close = Number(row[idx]);
  return Number.isFinite(close) && close > 0 ? Math.round(close * 100) / 100 : null;
}

/**
 * Real-time quotes from Finnhub. Requires FINNHUB_API_KEY. Uses the /quote
 * endpoint and returns the current price ("c"). Returns null on failure.
 */
export class FinnhubPriceProvider implements PriceProvider {
  readonly name = "finnhub";
  private key: string;
  constructor(key = process.env.FINNHUB_API_KEY ?? "") {
    this.key = key;
  }
  async getPrice(ticker: string): Promise<number | null> {
    if (!this.key) return null;
    try {
      const url = `https://finnhub.io/api/v1/quote?symbol=${encodeURIComponent(ticker)}&token=${this.key}`;
      const res = await fetch(url);
      if (!res.ok) return null;
      const data = (await res.json()) as { c?: number };
      const price = data.c;
      return typeof price === "number" && price > 0 ? Math.round(price * 100) / 100 : null;
    } catch {
      return null;
    }
  }
}

/** Selects the price provider from PRICE_PROVIDER (default: mock). */
export function createPriceProvider(kind = process.env.PRICE_PROVIDER ?? "mock"): PriceProvider {
  switch (kind) {
    case "stooq":
      return new StooqPriceProvider();
    case "finnhub":
      if (!process.env.FINNHUB_API_KEY) {
        console.warn("[prices] PRICE_PROVIDER=finnhub but FINNHUB_API_KEY is unset; falling back to mock.");
        return new MockPriceProvider();
      }
      return new FinnhubPriceProvider();
    case "mock":
    default:
      return new MockPriceProvider();
  }
}
