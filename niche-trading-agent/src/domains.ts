import type { Domain } from "./types.ts";
import { loadExperts } from "./experts.ts";

/**
 * The registry of specialist experts. Previously this file hard-coded the
 * domains; they now live as self-contained skill packages under ../experts/,
 * loaded at startup. Add a specialist by dropping in a new folder — see
 * experts/README.md.
 */
export const DOMAINS: Domain[] = loadExperts();

export function getDomain(id: string): Domain | undefined {
  return DOMAINS.find((d) => d.id === id);
}
