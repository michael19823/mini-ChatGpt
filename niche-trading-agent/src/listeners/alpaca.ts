import type { NewsItem } from "../types.ts";
import type { Listener, OnNews, WebSocketLike } from "./types.ts";

const DEFAULT_URL = "wss://stream.data.alpaca.markets/v1beta1/news";

/** A raw event from Alpaca's stream (news, or a control message). */
export interface AlpacaEvent {
  T: string; // "n" = news, "success", "subscription", "error"
  [k: string]: unknown;
}

interface AlpacaNews {
  T: "n";
  id: number;
  headline: string;
  summary?: string;
  author?: string;
  created_at: string;
  updated_at?: string;
  url?: string;
  symbols?: string[];
  source?: string;
}

/** Parse a raw stream message (Alpaca batches events into a JSON array). */
export function parseAlpacaMessage(data: string): AlpacaEvent[] {
  try {
    const parsed = JSON.parse(data);
    if (Array.isArray(parsed)) return parsed.filter((e) => e && typeof e.T === "string");
    if (parsed && typeof parsed.T === "string") return [parsed];
    return [];
  } catch {
    return [];
  }
}

/** Map an Alpaca news event to our NewsItem. The symbols[] become the summary tail so the router/experts can see the tickers. */
export function alpacaNewsToItem(n: AlpacaNews): NewsItem {
  const syms = Array.isArray(n.symbols) && n.symbols.length > 0 ? ` [${n.symbols.join(", ")}]` : "";
  return {
    id: `alpaca:${n.id}`,
    title: n.headline,
    summary: `${n.summary ?? ""}${syms}`.trim() || undefined,
    url: n.url,
    source: `alpaca:${n.source ?? "benzinga"}`,
    publishedAt: n.created_at,
  };
}

export interface AlpacaOptions {
  url?: string;
  key?: string;
  secret?: string;
  /** Injectable connector (default: Node's global WebSocket) — lets tests use a fake. */
  connect?: (url: string) => WebSocketLike;
  /** Injectable scheduler for reconnects (default: setTimeout). */
  schedule?: (fn: () => void, ms: number) => void;
}

/**
 * Real-time news listener over Alpaca's free WebSocket (Benzinga-sourced).
 * On connect it authenticates, subscribes to all news, and pushes each item to
 * `onNews`. Reconnects with exponential backoff so a dropped socket self-heals.
 * Zero-dependency: uses Node 22's built-in global WebSocket.
 */
export class AlpacaListener implements Listener {
  readonly name = "alpaca";
  private url: string;
  private key: string;
  private secret: string;
  private connect: (url: string) => WebSocketLike;
  private schedule: (fn: () => void, ms: number) => void;

  private ws: WebSocketLike | null = null;
  private onNews: OnNews = () => {};
  private stopped = false;
  private attempt = 0;
  private resolveStart: (() => void) | null = null;

  constructor(opts: AlpacaOptions = {}) {
    this.url = opts.url ?? process.env.ALPACA_NEWS_URL ?? DEFAULT_URL;
    this.key = opts.key ?? process.env.APCA_API_KEY_ID ?? "";
    this.secret = opts.secret ?? process.env.APCA_API_SECRET_KEY ?? "";
    this.connect = opts.connect ?? ((u) => new (globalThis as unknown as { WebSocket: new (u: string) => WebSocketLike }).WebSocket(u));
    this.schedule = opts.schedule ?? ((fn, ms) => setTimeout(fn, ms));
  }

  async start(onNews: OnNews): Promise<void> {
    this.onNews = onNews;
    this.stopped = false;
    this.open();
    // Resolves when stop() is called; keeps the process alive meanwhile.
    return new Promise<void>((resolve) => {
      this.resolveStart = resolve;
    });
  }

  async stop(): Promise<void> {
    this.stopped = true;
    try {
      this.ws?.close();
    } catch {
      /* ignore */
    }
    this.ws = null;
    this.resolveStart?.();
    this.resolveStart = null;
  }

  private open(): void {
    const ws = this.connect(this.url);
    this.ws = ws;
    ws.addEventListener("open", () => this.send({ action: "auth", key: this.key, secret: this.secret }));
    ws.addEventListener("message", (ev) => this.handleMessage(ev));
    ws.addEventListener("error", () => this.reconnect());
    ws.addEventListener("close", () => this.reconnect());
  }

  /** Exposed for the socket handler and tests; processes one raw message payload. */
  handleMessage(ev: unknown): void {
    const data = extractData(ev);
    if (data === null) return;
    for (const e of parseAlpacaMessage(data)) {
      if (e.T === "success" && e.msg === "authenticated") {
        this.attempt = 0; // healthy connection
        this.send({ action: "subscribe", news: ["*"] });
      } else if (e.T === "n") {
        void this.onNews(alpacaNewsToItem(e as unknown as AlpacaNews));
      }
      // "connected", "subscription", "error" are ignored/logged upstream.
    }
  }

  private reconnect(): void {
    if (this.stopped) return;
    const delay = Math.min(30_000, 1000 * 2 ** this.attempt);
    this.attempt++;
    this.schedule(() => {
      if (!this.stopped) this.open();
    }, delay);
  }

  private send(obj: unknown): void {
    try {
      this.ws?.send(JSON.stringify(obj));
    } catch {
      /* ignore */
    }
  }
}

function extractData(ev: unknown): string | null {
  if (typeof ev === "string") return ev;
  if (ev && typeof ev === "object" && "data" in ev) {
    const d = (ev as { data: unknown }).data;
    return typeof d === "string" ? d : null;
  }
  return null;
}
