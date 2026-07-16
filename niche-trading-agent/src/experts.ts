import { readdirSync, readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import type { Catalyst, Direction, Domain, SecondOrderLink } from "./types.ts";

/**
 * Expert loader — the "skill package" runtime.
 *
 * Each specialist domain lives in its own folder under ../experts/<id>/:
 *   - expert.json  → the machine-readable spec (watchlist + catalyst taxonomy)
 *   - SKILL.md     → a human/LLM-readable brief used as the agent's persona
 *
 * This mirrors how a Claude Skill separates metadata (frontmatter) from
 * instructions (body): expert.json ≈ the structured metadata, SKILL.md ≈ the
 * brief the model reads to "become" the expert. Adding a new specialist is just
 * dropping in a new folder — no code changes anywhere else.
 */
const EXPERTS_DIR = new URL("../experts/", import.meta.url);

const DIRECTIONS: Direction[] = ["bullish", "bearish", "context"];

export function loadExperts(): Domain[] {
  const dir = fileURLToPath(EXPERTS_DIR);
  const entries = readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort(); // deterministic order

  const domains: Domain[] = [];
  for (const name of entries) {
    const specPath = fileURLToPath(new URL(`${name}/expert.json`, EXPERTS_DIR));
    if (!existsSync(specPath)) continue;
    const raw = JSON.parse(readFileSync(specPath, "utf8")) as unknown;
    const domain = validateDomain(raw, specPath);

    const briefPath = fileURLToPath(new URL(`${name}/SKILL.md`, EXPERTS_DIR));
    if (existsSync(briefPath)) domain.briefPath = briefPath;

    domains.push(domain);
  }

  if (domains.length === 0) throw new Error(`No experts found under ${dir}`);
  return domains;
}

/** Returns the raw SKILL.md brief text for a domain, or null if none. */
export function getExpertBrief(domain: Domain): string | null {
  if (!domain.briefPath || !existsSync(domain.briefPath)) return null;
  return readFileSync(domain.briefPath, "utf8");
}

// --- validation -----------------------------------------------------------

function validateDomain(raw: unknown, path: string): Domain {
  const o = asObject(raw, path);
  const domain: Domain = {
    id: str(o.id, "id", path),
    name: str(o.name, "name", path),
    edge: str(o.edge, "edge", path),
    tickers: strArray(o.tickers, "tickers", path),
    matchTerms: strArray(o.matchTerms, "matchTerms", path),
    catalysts: asArray(o.catalysts, "catalysts", path).map((c, i) => validateCatalyst(c, `${path}#catalysts[${i}]`)),
  };
  if (domain.tickers.length === 0) throw new Error(`${path}: "tickers" must not be empty`);
  if (domain.matchTerms.length === 0) throw new Error(`${path}: "matchTerms" must not be empty`);
  return domain;
}

function validateCatalyst(raw: unknown, path: string): Catalyst {
  const o = asObject(raw, path);
  const direction = str(o.direction, "direction", path);
  if (!DIRECTIONS.includes(direction as Direction)) {
    throw new Error(`${path}: "direction" must be one of ${DIRECTIONS.join(", ")}`);
  }
  const catalyst: Catalyst = {
    id: str(o.id, "id", path),
    title: str(o.title, "title", path),
    keywords: strArray(o.keywords, "keywords", path),
    direction: direction as Direction,
    logic: str(o.logic, "logic", path),
  };
  if (o.tickers !== undefined) catalyst.tickers = strArray(o.tickers, "tickers", path);
  if (o.secondOrder !== undefined) {
    catalyst.secondOrder = asArray(o.secondOrder, "secondOrder", path).map((l, i) =>
      validateSecondOrder(l, `${path}#secondOrder[${i}]`),
    );
  }
  return catalyst;
}

function validateSecondOrder(raw: unknown, path: string): SecondOrderLink {
  const o = asObject(raw, path);
  const direction = str(o.direction, "direction", path);
  if (!DIRECTIONS.includes(direction as Direction)) {
    throw new Error(`${path}: "direction" must be one of ${DIRECTIONS.join(", ")}`);
  }
  const link: SecondOrderLink = {
    domainId: str(o.domainId, "domainId", path),
    direction: direction as Direction,
    note: str(o.note, "note", path),
  };
  if (o.tickers !== undefined) link.tickers = strArray(o.tickers, "tickers", path);
  return link;
}

function asObject(v: unknown, path: string): Record<string, unknown> {
  if (typeof v !== "object" || v === null || Array.isArray(v)) throw new Error(`${path}: expected an object`);
  return v as Record<string, unknown>;
}
function asArray(v: unknown, field: string, path: string): unknown[] {
  if (!Array.isArray(v)) throw new Error(`${path}: "${field}" must be an array`);
  return v;
}
function str(v: unknown, field: string, path: string): string {
  if (typeof v !== "string" || v.length === 0) throw new Error(`${path}: "${field}" must be a non-empty string`);
  return v;
}
function strArray(v: unknown, field: string, path: string): string[] {
  return asArray(v, field, path).map((x, i) => str(x, `${field}[${i}]`, path));
}
