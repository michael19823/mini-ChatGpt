# C1165 — Zimbabwe: ZIMRA fiscalisation (FDMS) reconciliation

## Verdict and score
**Narrow: 5.1/10.** The **sales-side** reconciliation the idea first had in mind is mostly
built into the system. FDMS refuses to close a fiscal day if the Z-report doesn't match its records
or the receipt sequence has gaps. The FDMS portal offers Z-reports, error reporting and invoice
validation. Issuance connectors are plentiful:
- ZIMRA-approved device suppliers (Axis Solutions' RevMax, Microwarehouse, Fiscal Support
  Services and others);
- Odoo modules (Pokutsoft FDMS invoice and credit-note modules, at about $118);
- PyPI libraries, freelancers, and Roundihmp at $10/month for virtual fiscalisation.

A newer, **purchase-side** gap has opened. For VAT periods from **1 January 2026, manual input-tax
schedules are discontinued and only FDMS-validated invoices support an input-tax claim**. To be
valid, an invoice must carry the buyer's TIN and VAT details, required since 31 May 2025. TaRMS now
auto-generates the input-tax schedule from FDMS data (Public Notice 22/2025). So every VAT operator
must reconcile its **purchase ledger** against what TaRMS pulled from FDMS. Any supplier invoice
that was not fiscalised, or was fiscalised without the buyer's TIN, is lost input VAT unless the
supplier is chased into issuing a corrected invoice. This is the Zimbabwean version of India's
GSTR-2B reconciliation. No Zimbabwe tool for it was found.

Narrow segment: **mid-size VAT operators (and their accounting firms) with many suppliers**, for
input-tax matching against TaRMS and supplier follow-up. The market is about 22,679 onboarded
fiscalised taxpayers (ZIMRA H1 2026).

## What changed versus the Sonnet evidence
- Sonnet's "beatable" verdicts aimed at a sales-side reconciliation layer. That is weaker than it
  claimed: FDMS fiscal-day closure already enforces Z-report and sequence matching, and the FDMS
  portal shows the records.
- New fact both previous passes missed: the 1 Jan 2026 rule that input tax depends on FDMS
  validation, plus TaRMS auto-schedules. That shifts the real pain to the buyer side and
  gives a concrete, recurring, money-at-stake trigger.
- Accredited vendors and Odoo modules cover issuance, not input-tax matching (absence of evidence
  only).

## Competitors (corrected)
| Competitor | Type | Coverage |
|---|---|---|
| ZIMRA TaRMS (auto input-tax schedule) + FDMS portal (validation, Z-reports) | Free government | Pre-fills what ZIMRA has; doesn't match it against the buyer's ledger (unverified) |
| Approved fiscal-device suppliers (Axis RevMax, Microwarehouse, Fiscal Support Services, Rumikon, Global Horizons etc.) | Issuance | Sales side |
| Pokutsoft Odoo FDMS invoice/credit-note modules (~$118), other Odoo modules | Issuance | Sales side |
| Roundihmp ($10/mo), PyPI libs, freelancers | Virtual fiscalisation | Sales side |
| Sage/Pastel, Manager, Zoho + add-ons | Accounting | Submission via add-ons; no input matching found |
| Accounting firms (manual Excel) | Services | Likely the current input-matching method (unverified) |

## Barriers
- It depends on getting TaRMS input-schedule data out (export or CSV availability unverified). If
  TaRMS adds its own "missing invoices" view, the gap shrinks.
- Small market: ~22.7k fiscalised taxpayers, many of them small.
- USD/ZiG multi-currency and payment-collection frictions.
- Accounting vendors could add a matching report.

## Buyer and price
The buyer is the finance manager or tax accountant at a mid-size VAT operator (distributors,
manufacturers, hotels, mining suppliers), or an accounting firm filing VAT for many clients. The
value is recovered input VAT at 15.5%: one missed US$10k purchase invoice costs US$1,550. Price
anchors are Roundihmp at $10/month and the Odoo module at $118. A matching tool at about
US$30–150/month per entity is plausible (unverified).

## Scorecard
| # | Criterion | Score | Reason |
|---|---|---|---|
| 1 | Pain | 7 | Input VAT lost on non-validated invoices; audits for non-compliance |
| 2 | Frequency | 8 | Monthly VAT, per purchase invoice |
| 3 | Mandatory | 8 | Statutory since 1 Jan 2026 |
| 4 | Fragmentation | 3 | One national system |
| 5 | Competition | 6 | Many issuance tools; no input-matching tool found |
| 6 | Incumbent gap | 6 | TaRMS pre-fills; the ledger matching and supplier chase is manual |
| 7 | Buyer accessibility | 5 | Accounting firms (ICAZ, PAAB registers), CZI members |
| 8 | Willingness to pay | 5 | Clear money at stake; tight market |
| 9 | MVP simplicity | 6 | CSV matcher plus supplier chase list; TaRMS export is the unknown |
| 10 | Distribution | 3 | Small market; accountants are the channel |
| | **Overall** | **5.1** | Narrow: purchase-side input-tax matching after the Jan 2026 rule |

## Sources
- https://lookuptax.com/docs/country/zimbabwe (input tax only on FDMS-validated invoices from 1 Jan 2026)
- https://rtcsuite.com/zimbabwe-completes-fiscalisation-overhaul-mandatory-buyer-detail-transmission-and-tarms-fdms-integration-effective-31-may-2025/
- https://www.fiscal-requirements.com/news/3942-zimbabwe-mandates-fiscal-device-upgrade-for-buyer-detail-transmission
- https://www.comarch.com/trade-and-services/data-management/legal-regulation-changes/zimbabwe-introduces-vat-system-modernization-measures/
- https://allafrica.com/stories/202610010402.html (22,679 onboarded taxpayers; 20.4M fiscal invoices H1 2026)
- https://www.fiscal-requirements.com/news/2510-changes-in-fiscalization-in-zimbabwe-fiscalization-data-management-system
- https://apps.odoo.com/apps/modules/19.0/l10n_zw_fdms_fiscalisation
- https://apps.odoo.com/apps/modules/19.0/l10n_zw_fdms_credit_note
- https://forum.manager.io/t/fiscalisation-options-for-manager-users-in-zimbabwe/58129
- https://techcabal.com/?p=157643 (Roundihmp)
- research/revisit/competitors/zimbabwe--{accounting-packages,zimra-accredited-fiscal-device-pos-and-erp-vendors}.md
- Searches used: 5 of 8.
