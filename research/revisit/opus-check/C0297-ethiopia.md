# C0297 — Ethiopia: payroll / PAYE + POESSA pension

## Verdict and score
**Still closed: 3.8/10.** Sonnet judged each named rival in isolation as weak or beatable. Taken
together, the field is crowded for a low-value, single-regime calculation:
- **local:** HST payroll (Amharic, cloud, local payment rails), Lenvica (HR/payroll/attendance for
  Ethiopia), payroll outsourcers (YES, africa-hr);
- **pan-African and global suites:** SeamlessHR, WebHR, peopleHum, PaySpace (which published
  Ethiopian tax-table updates for July 2025);
- **Odoo:** a $59 module already on Proclamation 1395/2025 bands with an MoR/pension remittance
  summary;
- **free:** PAYE calculators (countrytaxcalc, afrotools) and Excel.

Filing is done by the employer on the MoR e-Tax portal and with the pension agency using its own
credentials. That leaves no integration moat, and the rule change (new bands from July 2025) is
already absorbed by vendors. The most likely buyer, a micro employer, mostly runs Excel and pays
little.

## What changed versus the Sonnet evidence
- Sonnet missed Lenvica, SeamlessHR, WebHR, peopleHum and PaySpace. Several of these explicitly
  market Ethiopian PAYE and pension compliance with Amharic and mobile support.
- Sonnet's "cheap, birr-priced, Amharic self-serve tool is open" opening has no demand evidence:
  no complaints, no penalties story, no filing-API gap. The 2025 tax-band change was a one-time
  trigger that has now passed.

## Competitors (corrected)
| Competitor | Type | Notes |
|---|---|---|
| HST payroll | Local cloud payroll | Amharic, ESS, Excel/PDF exports; price not public |
| Lenvica | Local HR/payroll/attendance | Ethiopia-specific; price unverified |
| SeamlessHR, WebHR, peopleHum | Pan-African / global HR suites | Market "Ethiopia-ready" payroll |
| PaySpace | African payroll platform | Ethiopian tax tables updated July 2025 |
| Odoo `l10n_et_payroll` (Pokutsoft, $59) / `modern_ethiopian_payroll` | ERP add-ons | Current bands, remittance summary |
| Deel, Multiplier, Ontop, Mercans | EOR / global payroll | For foreign employers |
| Outsourcers (YES, africa-hr), accountants | Services | Common for SMEs |
| Free calculators + Excel | Free | The default for micro employers |

## Barriers
- None regulatory: no certification is needed. The barrier is economic. A single national rule
  set is easily copied, and willingness to pay is low.
- Foreign-exchange and payment collection from Ethiopian SMEs in birr is hard for a foreign
  founder (general knowledge, unverified for 2026).

## Buyer and price
The buyer is the owner or accountant of a 10–100-employee Addis firm or NGO. Price anchors are the
Odoo module at $59 one-off, EOR pricing in hundreds of USD per employee (irrelevant to SMEs), and
local tools that don't publish prices. A plausible SME price is ≈ETB 1,000–3,000/month (unverified).

## Scorecard
| # | Criterion | Score | Reason |
|---|---|---|---|
| 1 | Pain | 4 | A spreadsheet handles it; no penalty stories found |
| 2 | Frequency | 8 | Monthly |
| 3 | Mandatory | 8 | PAYE and pension withholding are mandatory |
| 4 | Fragmentation | 2 | One national regime |
| 5 | Competition | 2 | Many local, regional and Odoo options plus free calculators |
| 6 | Incumbent gap | 2 | Rule changes already absorbed; no filing gap |
| 7 | Buyer accessibility | 5 | Chamber directories, NGO lists |
| 8 | Willingness to pay | 3 | Low; Excel default |
| 9 | MVP simplicity | 8 | Rules engine plus payslips |
| 10 | Distribution | 3 | No natural channel a newcomer owns |
| | **Overall** | **3.8** | Commodity payroll; rule change already covered by many vendors |

## Sources
- https://hst-et.com/services/technology/payroll-management-system
- https://lenvica.com/?p=44610
- https://seamlesshr.com/blog/best-hr-management-software-in-ethiopia-for-businesses/
- https://www.peoplehum.com/blog/top-10-hr-software-in-ethiopia
- https://web.hr/get/hr-software-in-ethiopia
- https://payspace.com/blog/ethiopia-income-tax-amendments-key-payroll-changes-2025
- https://apps.odoo.com/apps/modules/19.0/l10n_et_payroll
- https://apps.odoo.com/apps/modules/17.0/modern_ethiopian_payroll
- https://www.countrytaxcalc.com/tax-guides/africa/ethiopia-paye-guide-2026/
- https://africa-hr.com/ethiopia-payroll-outsourcing/
- research/revisit/competitors/ethiopia--{demoz,hst-payroll,modern-ethiopian-payroll,odoo-l10n-et-payroll,peachtree-payroll}.md
- Searches used: 3 of 8 (the Amharic query returned English results only).
