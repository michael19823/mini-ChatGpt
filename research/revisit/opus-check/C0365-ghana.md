# C0365 — Ghana: statutory payroll (PAYE + SSNIT Tier 1 + Tier 2)

## Verdict and score
**Still closed: 3.7/10.** The "unnamed packages" turn out to be a long, real list:
- **Sage:** Sage VIP / Pastel payroll via Multisoft Solutions, Sage's Ghana partner;
- **regional suites:** SeamlessHR, Cohrus HRMS (pitched at SMEs), PayrollGhana, Lenvica, ClayHR,
  Workpay;
- **Odoo:** Ghana payroll *and* a separate Odoo `l10n_gh_paye_return` module that produces the GRA
  monthly PAYE return;
- **EOR and global:** Ontop, Mercans, Rivermate;
- **payout tools:** MoMo-payout and wage-access players (Aketua, Cadana, XenFlex).

The Ghana rule set is a single national regime with stable structure. A payroll engine is a
commodity, and the "filing-ready output" gap Sonnet proposed is already covered for Odoo users and
claimed by the suites.

## What changed versus the Sonnet evidence
- Sonnet treated "unnamed packages" as beatable because no single tool dominates. The fuller list
  (Sage VIP via a Ghana partner, Cohrus aimed at SMEs, and an Odoo module dedicated to the GRA PAYE
  return) closes the "filing-ready output for small firms" opening.
- Penalties are real (3% a month on late SSNIT, interest on late PAYE), but they arise from late
  *payment*, not from difficult data preparation.
- I found no 2025–26 rule change that resets the market.

## Competitors (corrected)
| Competitor | Type | Notes |
|---|---|---|
| Sage VIP / Pastel Payroll (Multisoft Solutions) | Incumbent payroll via local partner | Established |
| SeamlessHR, ClayHR, Workpay, BambooHR | Pan-African / global HR | SeamlessHR targets mid/large firms |
| Cohrus HRMS, PayrollGhana | Local SME payroll | Cohrus pitched at SMEs; prices unverified |
| Odoo `l10n_gh_payroll` ($129) + `l10n_gh_paye_return` | ERP add-ons | GRA PAYE return output |
| Lenvica, Kolonell | Regional SaaS | Kolonell 24,900 FCFA/mo (Ghana applicability unverified) |
| Ontop, Mercans, Rivermate | EOR / global payroll | Foreign employers |
| Accountants + Excel | Manual | The SME default |

## Barriers
- No certification is needed, but the market is crowded and commoditised.
- Filing still goes through the GRA Taxpayer Portal and the SSNIT systems with employer
  credentials (no third-party API found).

## Buyer and price
The buyer is the owner or accountant of a 10–50-staff Accra SME. Price anchors are the Odoo module
at $129 one-off and Kolonell at ≈24,900 FCFA/month (~US$40). Other suites don't publish prices. A
plausible SME price is ≈GHS 200–500/month (unverified).

## Scorecard
| # | Criterion | Score | Reason |
|---|---|---|---|
| 1 | Pain | 4 | Excel works; penalties come from late payment |
| 2 | Frequency | 8 | Monthly |
| 3 | Mandatory | 8 | PAYE and SSNIT mandatory |
| 4 | Fragmentation | 3 | One regime; Tier 2 trustees vary |
| 5 | Competition | 2 | Many local, regional and global vendors plus Odoo |
| 6 | Incumbent gap | 2 | Filing-return output already exists |
| 7 | Buyer accessibility | 5 | Chamber and GRA lists |
| 8 | Willingness to pay | 4 | Modest |
| 9 | MVP simplicity | 8 | Rules engine |
| 10 | Distribution | 3 | No owned channel |
| | **Overall** | **3.7** | Commodity payroll with many local and regional vendors |

## Sources
- https://communityhub.sage.com/za/sage-vip-payroll-hr/f/general-discussion/255136/payroll-software-for-use-in-ghana/611115
- https://linkedin.com/company/multisoft-solutions
- https://seamlesshr.com/blog/top-hr-payroll-software-in-ghana-for-2026/
- https://www.clayhr.com/payroll-software-ghana-ga
- https://myworkpay.com/blogs/ghana-payroll-a-guide-for-local-and-global-businesses
- https://apps.odoo.com/apps/modules/19.0/l10n_gh_paye_return
- https://apps.odoo.com/apps/modules/18.0/l10n_gh_payroll
- https://blog.faciotech.com/payroll-compliance-ghana-business
- https://www.countrytaxcalc.com/tax-guides/ghana-paye-tax-guide-2026/
- research/revisit/competitors/ghana--payroll-packages-unnamed.md
- Searches used: 3 of 8.
