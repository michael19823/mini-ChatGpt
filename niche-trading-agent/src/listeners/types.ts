import type { NewsItem } from "../types.ts";

/** Called for each news item a listener receives (push). */
export type OnNews = (item: NewsItem) => void | Promise<void>;

/**
 * A push-based news source: holds a persistent connection (WebSocket, etc.) and
 * invokes `onNews` the instant an item arrives — as opposed to a polling
 * NewsSource that is pulled on an interval. `start` resolves when the stream
 * ends (finite sources like replay) or when `stop` is called.
 */
export interface Listener {
  readonly name: string;
  start(onNews: OnNews): Promise<void>;
  stop(): Promise<void>;
}

/** Minimal WebSocket surface we depend on (matches Node 22's global WebSocket). */
export interface WebSocketLike {
  send(data: string): void;
  close(): void;
  addEventListener(type: string, cb: (ev: unknown) => void): void;
}
