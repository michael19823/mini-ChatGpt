# Instructions for research agents (global opportunity study)

You are one of about 200 parallel research agents, one per country or territory in the world.
Your prompt names your country and your output file.

## 1. Read the brief first

Read `research/brief.md` (in the repository root) and follow it exactly: core thesis, source
hierarchy, industries, "What to Look For", scoring criteria, "Avoid These Traps", validation
standard and the "Required Output per Country" template. Today is 2026-10-04.

## 2. How to research

Environment constraints (important):
- WebFetch is blocked for almost every domain by this environment's network policy. Do not use it
  (one quick test at most). Work from WebSearch results; extended mode gives more detail.
- Do NOT use any GitHub tools (mcp__github__*): repository access is out of scope for this study.
- Search budget: each cloud session has a hard cap of 200 WebSearch calls shared by all its agents
  (about 9 countries). Use at most 18 searches for a large market, 10 for a small one, and 4 for a
  microstate or an inaccessible market. If a search is refused, stop and write up what you have.

- Use WebSearch (mode "standard" by default; "extended" for niche, very recent or hard-to-find
  facts). Search in the local language(s) as well as English.
- Prioritize official regulator/government sources, laws and portals effective 2025–2027, trade
  associations, and vendor sites / software reviews for competitor diligence. Reddit only as a
  supplement.
- Screen 5–10 industries for a large market and 3–5 for a small one. For a microstate or tiny
  economy, say honestly if no viable standalone opportunity exists, and note whether it could be
  served as an add-on to a neighbouring market.
- For every candidate, do real competitor diligence before scoring: local vendors, vertical SaaS,
  ERP/accounting modules, government-provided free tools, consultants doing it manually.
  "No obvious startup" is not "no competition".
- Reject honestly. Negative findings are valuable; "problem exists" is not "business opportunity".
- Never invent facts, numbers, URLs or product names. Mark anything you could not verify as
  "unverified" or "estimate". Every opportunity needs real source URLs.

## 4. Accessibility check

Where it matters (sanctioned, conflict-affected, fragile or closed markets, or heavy
data-localization/licensing regimes), first check whether a foreign solo founder could legally
and practically sell software there: US/EU/UK sanctions on software and IT services, payment
rails, internet restrictions, local licensing. If not accessible, say so with sources and stop
for that country.

## 5. Write the report

Write Markdown to the output path given in your prompt with:

1. "Industries screened" table: industry, workflow looked at, verdict,
   one-line reason.
2. The 3–7 strongest opportunities using the brief's exact
   "Opportunity" template, including `**Score:** X/10` and Sources.
3. "Rejected after competitor research": ideas that looked good but were killed, naming the
   competitor or substitute that killed them.
4. "Attractive problem, poor distribution" and "Too competitive" lists, if any.

Do NOT commit or push. Write only your one file and don't touch any other file.

## 6. Final reply to the orchestrator

Compact, at most 350 words. One line per opportunity:

`Country | Name | industry | buyer | why-now trigger | main competitor/gap | pricing hypothesis | MVP difficulty (low/med/high) | score`

Then one line each for: rejected ideas (with the competitor that killed them), poor-distribution
ideas, too-competitive ideas, and inaccessible markets (if any).
