/**
 * Term matching used by both the router and the heuristic agent.
 *
 * Plain substring matching is dangerous for short terms: "dea" would match
 * inside "deal", routing a defense contract to the cannabis desk. So:
 *   - terms of 3 chars or fewer must match as a WHOLE WORD ("dea" ≠ "deal"),
 *   - longer terms match as a PREFIX at a word boundary, which keeps useful
 *     inflections ("sanction"→"sanctions", "reschedul"→"rescheduling",
 *     "attack"→"attacks") while still requiring the word to start cleanly.
 */
export function containsTerm(text: string, term: string): boolean {
  const t = term.toLowerCase().trim();
  if (!t) return false;
  const escaped = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = t.length <= 3 ? `\\b${escaped}\\b` : `\\b${escaped}`;
  return new RegExp(pattern, "i").test(text);
}

/** Returns the subset of `terms` present in `text` (by containsTerm rules). */
export function matchingTerms(text: string, terms: string[]): string[] {
  return terms.filter((term) => containsTerm(text, term));
}
