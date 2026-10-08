# Pilot rerun results (2026-10-08)

Same worker model (Sonnet 5.5), same research question and template; new brief and process (see
`README.md`). Old results: `research/offline/` on branch `claude/subagents-parallel-research-3qanjz`,
with the Opus review in `research/offline/_sonnet-review.md`.

## Old vs new, per country

Scores are "Sonnet's score -> score after the Opus check". Old checks are from the original Opus
review; new checks are in `checks/`.

| Country | Old Sonnet report | New Sonnet report | Checkpoint |
|---|---|---|---|
| Portugal | Used-gold PJ register 4 -> 2 (missed Ponto25 and Gouwin); hunting zones 4 -> 3 | F-gas records 4.5 -> 4.5; Legionella pack 4 -> 4. Gold idea killed by Ponto25 "Ourives"; hunting rejected | Pass |
| Lithuania | Farm spray/fertiliser journal 4 -> 3 (missed four farm-software competitors, wrong duty holder); car dismantlers 3 -> 3 | Scrap-yard purchase desk 4.5 -> 4; precious-metal log 4 -> 3.5 (cited a repealed order; missed Rivilė's jewellery module). Farm journal killed by Geoface and CropPLAN | Pass |
| Kosovo | Farm file 3 -> 2 (cited Albania's beekeeping law) | Foreign-worker permit tracker 4 -> 3 (weak trigger; repeats the round-1 report); guest register 3. Beekeeping rejected: "only Albania's law exists" | Pass |
| Egypt | Bakery reconciliation 5 -> 5; nursery tracker 4 -> 4; gold e-receipt 3 -> 3 | Recruitment-agency desk 5 -> 5; NGO pack 3.5; broker kit 3.5. Gold shops killed by Dexef, Daftra and Qoyod | Partial: accurate, but bakeries and nurseries were never screened |
| Gambia | None; 3 of 8 searches used | None; customs-agent tracker 3; 15 searches, 11 pages read | Pass |
| Jamaica (control) | Receipt-book traceability 4 -> 4; guard payroll 4 -> 4 | Guard payroll 3 (same incumbents found); receipt-book rejected (buyer is the state) | Partial: stricter; disagrees with an Opus-confirmed old lead |

## What changed

- **The documented failure types are gone.** Missed incumbents (Portugal, Lithuania), a
  neighbouring country's law (Kosovo) and starved effort (Gambia) did not recur. The required
  local-language "software + register + industry" search is what found Ponto25.
- **Effort is steadier.** New searches per country: 15-31, plus 11-20 full pages read. The old run
  could read no pages and ranged from 3 to 34 searches.
- **Remaining Sonnet errors are smaller and flagged.** The Opus check cut 2 of 6 new leads below 4
  (old run: 3 of 7), by 0.5-1 point (old: 1-2 points). In each case the worker had already marked
  the weak fact as unverified.
- **Different leads.** Four leads scored 4 or higher after checks in each run, with no overlap. A
  single worker per country samples the space; Egypt's strongest old lead was not found this time.

## Measured cost

Input tokens are exact from the transcripts; output tokens are not recorded there and are estimated.

| Agent | Calls | Peak context | Input cost | Searches | Total (with search fees and estimated output) |
|---|---|---|---|---|---|
| Portugal worker | 35 | 220K | $1.50 | 25 | ~$1.9 |
| Lithuania worker | 21 | 188K | $0.94 | 25 | ~$1.3 |
| Kosovo worker | 34 | 175K | $1.21 | 15 | ~$1.5 |
| Egypt worker | 28 | 309K | $1.77 | 31 | ~$2.2 |
| Gambia worker | 18 | 118K | $0.58 | 15 | ~$0.9 |
| Jamaica worker | 18 | 139K | $0.66 | 20 | ~$1.0 |
| Six Opus checks | 11-24 each | 76-104K | $3.15 total | 62 total | ~$4.5 total |
| **Pilot total** | | | | | **~$13-14** (plus the orchestrator's own context) |

Every agent starts with a ~45K-token prompt (Claude Code's system prompt and tools); the brief is
about 2K of it. Parallel launches each paid to cache it separately.

## Recommendations for the full run

1. Keep the new brief and the Opus check on every lead scored 4 or more.
2. Don't discard the old reports: give each worker its country's old leads to re-check, then
   explore for new ones. Blind runs were right for the pilot, not for production.
3. Run from a fresh, small orchestrator session as a Workflow (staggered starts, one return,
   files plus a code merge), with a slim worker definition holding only the tools it uses.
4. Budget about $300-350 for ~200 countries on the measured per-country costs (large markets
   about $2, small about $0.9), plus checks.
