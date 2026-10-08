# Pilot rerun of the offline-industries pass (2026-10-08)

Question: with the same worker model (Sonnet) and the same research question, does the
`parallel-subagents` method produce better country reports than the original run?

## Design

- **Countries**: the six whose original Sonnet reports were audited in
  `research/offline/_sonnet-review.md` (branch `claude/subagents-parallel-research-3qanjz`):
  Portugal, Lithuania, Kosovo, Egypt, Gambia, and Jamaica as a control rated "sound".
- **Same as before**: worker model (Sonnet), research question, Opportunity template and scoring
  criteria (`rerun/inputs/brief.md`), and the round-1 country report as an overlap check.
- **Changed, per the skill**: one shared, self-contained contract (`rerun/contract.md`) with the
  country last; mandatory competitor, duty and jurisdiction checks before any score of 4 or more;
  a minimum and maximum search budget by market size; full pages read with WebFetch instead of
  snippets only; scores tied to their sub-scores; a search log; effort set to `high`; today's date
  and a check-things-that-change instruction. Workers never saw the old reports.
- **Afterwards**: an Opus check of every opportunity scored 4 or more, as the original review
  recommended, then a comparison against the checkpoints below.

## Checkpoints from the original Opus review

| Country | What the old Sonnet report got wrong | Pass if the new report |
|---|---|---|
| Portugal | Missed Gouwin (Inforbarras) and Ponto25 Ourives, which already produce the PJ declarations for used-gold buyers; hunting-zone count and deadline unconfirmed; 4/10 not backed by its sub-scores | finds those products (or equivalents) and kills or downgrades the gold idea; confirms or labels the hunting figures |
| Lithuania | Missed eAgronom LT, Agro247, Geoface and FarmEasy; the law makes the farmer, not the contractor, file the PPP journal; the deadline is 15 days, not 30; the 300-dismantler count was unconfirmed | finds the farm-software competitors, names the right duty holder and deadline |
| Kosovo | Cited Albania's beekeeping law (Fletorja Zyrtare 59/2023, FAOLEX Albania) as Kosovo's | cites only Kosovo law (Gazeta Zyrtare e Republikës së Kosovës) |
| Egypt | Counts slightly off (30-35k bakeries; about 75% or 36k nurseries unlicensed); missed that direct deduction is a step towards a cash bread subsidy | gets the counts and the subsidy context right |
| Gambia | Used only 3 of 8 searches; most seed groups never screened | uses at least the small-market minimum and screens the seed groups |
| Jamaica | Rated sound (receipt-book traceability; security-guard payroll, with HeadOffice and YaadBooks as incumbents) | stays sound: no regression |

Old reports for comparison stay outside the workers' view until the pilot ends.
