import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { loadExperts } from "./experts.ts";
import type { Domain } from "./types.ts";

/**
 * Generates each expert's SKILL.md brief from its expert.json spec, so the two
 * never drift. Run with `npm run gen:briefs` after editing any expert.json.
 *
 * The brief is the "skill body": the persona an LLM backend reads to become the
 * expert. Frontmatter (name/description) mirrors the Claude Skill convention.
 */
function briefFor(d: Domain): string {
  const description =
    `Specialist trading agent for ${d.name}. Reacts to: ` +
    d.catalysts.map((c) => c.title.toLowerCase()).join("; ") + ".";

  const catalystSections = d.catalysts
    .map((c) => {
      const scope = c.tickers && c.tickers.length > 0 ? c.tickers.join(", ") : "whole watchlist";
      const lines = [
        `### ${c.title}  →  ${c.direction}`,
        `- **Trigger keywords:** ${c.keywords.join(", ")}`,
        `- **Affected tickers:** ${scope}`,
        `- **Direction logic:** ${c.logic}`,
      ];
      for (const link of c.secondOrder ?? []) {
        const t = link.tickers && link.tickers.length > 0 ? ` (${link.tickers.join(", ")})` : "";
        lines.push(`- **Chain effect → ${link.domainId} [${link.direction}]${t}:** ${link.note}`);
      }
      return lines.join("\n");
    })
    .join("\n\n");

  return `---
name: ${d.name} Expert
description: ${description}
tickers: ${d.tickers.join(", ")}
---

# ${d.name} Expert

> Auto-generated from expert.json by \`npm run gen:briefs\`. Edit the JSON, not this file.

**Why this niche:** ${d.edge}

You are a specialist analyst for **${d.name}**. Given a news item, decide whether
it is a catalyst for this domain and how to react. Only trade tickers from the
watchlist below. If the item is not relevant, hold.

## Watchlist
${d.tickers.join(", ")}

## Catalysts

${catalystSections}

## Match terms (routing)
${d.matchTerms.join(", ")}
`;
}

function main(): void {
  const experts = loadExperts();
  for (const d of experts) {
    const outPath = fileURLToPath(new URL(`../experts/${d.id}/SKILL.md`, import.meta.url));
    writeFileSync(outPath, briefFor(d), "utf8");
    console.log(`wrote experts/${d.id}/SKILL.md`);
  }
  console.log(`\nGenerated ${experts.length} briefs.`);
}

main();
