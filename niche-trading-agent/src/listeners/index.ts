import type { Listener } from "./types.ts";
import { AlpacaListener } from "./alpaca.ts";
import { ReplayListener } from "./replay.ts";

/**
 * Selects the listener from LISTENER, or auto-detects: use Alpaca when API keys
 * are present, otherwise fall back to the offline replay listener so
 * `npm run listen` still does something without a network or key.
 */
export function createListener(kind = process.env.LISTENER): Listener {
  const resolved = kind ?? (process.env.APCA_API_KEY_ID ? "alpaca" : "replay");
  switch (resolved) {
    case "alpaca":
      return new AlpacaListener();
    case "replay":
    default:
      return new ReplayListener();
  }
}

export type { Listener };
