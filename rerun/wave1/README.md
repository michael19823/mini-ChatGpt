# Wave 1 of the full rerun: 20 countries (2026-10-08)

Question: does the recall-first design find enough new opportunities, at a low enough cost per
lead, to justify rerunning the remaining countries? This file was committed before the run, so the
sample, the counting rule and the stop rule can't drift to fit the results.

## Sample

A seeded random draw (seed 20261008) within the old study's market-size tiers
(`research/method/offline-batches.md` on branch `claude/subagents-parallel-research-3qanjz`),
excluding the six pilot countries and 19 closed markets (sanctions, conflict, no market):

| Tier (old search budget) | Population | Drawn |
|---|---|---|
| Large (40-45) | 52 | Hungary, Austria, Morocco, Ghana, Colombia, Hong Kong, Brazil |
| Medium (20) | 84 | Georgia, Latvia, Zimbabwe, Mozambique, Costa Rica, Suriname, Palestine, Armenia |
| Small and microstates (8) | 38 accessible | Palau, Monaco, Grenada, Guinea-Bissau, Liechtenstein |

Large countries are slightly oversampled (7 drawn where a proportional draw would give 5);
extrapolation weights results by tier.

## Design: the recall test's pipeline with these changes

1. **Wider coverage map** (`contract.md`, `discovery_v2`): the 20 quiet-industry categories plus
   10 categories where the old study's strongest leads came from (fuel stations, commodity
   traders, co-operatives, clinics billing insurers, pharmacies and controlled chemicals,
   manpower agencies, construction and mining contractors, notaries and brokers, hotels and
   short-term rentals, small exporters), plus at least 5 country-specific categories.
2. **Known ideas**: each worker reads its country file (`items/<slug>.md`) listing what the old
   study already has (round-1 and offline-pass opportunities, rejected ideas with the reason, and
   revisit checks), and marks each candidate new, known or revive. A candidate is skipped as known
   only if both the worker and triage say so.
3. **Two discovery workers** for large and medium countries (group A: categories 1-20; group B:
   21-30 plus the country-specific ones); one worker for small countries. Sonnet, effort `high`.
4. **Critic and gap fill** for large countries. Medium and small countries get a gap fill only for
   categories a worker didn't reach or didn't report (checked in code).
5. **Triage** on Sonnet, with the study's definitions and the known list: it may only merge
   duplicates, mark known ideas and drop what the definitions put out of scope.
6. **Verify every new candidate scored 3 or more**: Opus for 4+, Sonnet for 3s and for any 4+
   beyond the Opus cap; a Sonnet check of 4+ escalates to Opus; every Opus 4+ gets an adversarial
   Opus challenge (try to refute: competitors, exemptions, market size). Caps on first checks per
   country, with every candidate left over logged: large 6 Opus + 9 Sonnet, medium 4 + 6, small
   2 + 3. Verifier rubric and budget are the recall test's (6 searches, 5 fetches).
7. **Medium-effort test**: Hungary, Colombia, Zimbabwe and Armenia also get a shadow discovery at
   effort `medium`. Its candidates join triage, so leads it finds are verified too.

Prompts: `contract.md` (discovery and gap fill), `prompts.md` (critic, triage, verifiers),
`workflow.js` (the script, run as 5 Workflows of 4 countries: `groups.json`).

## Counting rule (fixed before the run)

- **New verified lead**: a candidate marked new or revive, scored 4 or more by an Opus check
  (first check or escalation) without being refuted, that then survives the adversarial challenge
  with a score of 4 or more.
- Also reported: leads at 4+ after one check whose challenge was unclear or scored lower
  (disputed), leads refuted on challenge, and every candidate left unverified by a cap.

## Stop rule (fixed before the run)

- Fewer than 5 new verified leads across the 20 countries: don't rerun the remaining countries
  with this design.
- 5 or more: estimate the full run's cost and yield by tier from this wave's measured costs, and
  propose it with that estimate.
- Medium effort is good enough for discovery if, across the four shadow countries, it screens at
  least 85% as many categories and finds at least 85% as many candidates scored 3 or more as the
  `high` run, and misses no new verified lead that the `high` run found.

## Budget

Expected about $95-105, most of it verification. The run is stopped if measured spend passes
$110.
