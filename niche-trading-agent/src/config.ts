import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

/**
 * Tiny zero-dependency .env loader. Loads KEY=VALUE lines from a .env file at
 * the project root into process.env (without overriding already-set vars).
 * Silently does nothing if the file is absent.
 */
export function loadEnv(): void {
  try {
    const path = fileURLToPath(new URL("../.env", import.meta.url));
    const raw = readFileSync(path, "utf8");
    for (const line of raw.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      const value = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
      if (!(key in process.env)) process.env[key] = value;
    }
  } catch {
    // no .env — rely on defaults
  }
}

export function num(name: string, fallback: number): number {
  const v = process.env[name];
  const n = v === undefined ? NaN : Number(v);
  return Number.isFinite(n) ? n : fallback;
}
