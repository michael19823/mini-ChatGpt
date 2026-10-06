# C0144 · Bulgaria · SAF-T reporting for SMEs and accounting firms

## Verdict and score
**Still closed. 4/10.** For SMEs the obligation is far off, and it lands on the software that already holds their books. Small enterprises (revenue under BGN 15M) are not obliged until 1 Jan 2030, and micro-enterprises are largely excepted. The firms obliged now (2026: revenue over BGN 300M) and from 2028 (over BGN 15M) run ERPs that are served by SAP and Dynamics add-ons and Big-4 tools. The natural SME supplier is the local accounting suite (Плюс Минус, Ажур, Микроинвест), which has to add a SAF-T export anyway. A draft law would also add NISSEF real-time e-invoicing from 2028, which may cover much of the SME data need before 2030. Re-check in 2028–29.

## What changed versus the Sonnet evidence
- Sonnet was right that Flowex, NAPplus and SAF-T Bridge do not show up as real products. My search for "saft-bridge.com" also found nothing, so the triage list was partly made up or mislabelled.
- Sonnet missed the real competitors. Several confirmed SAF-T products exist: KPMG Bulgaria's own SAF-T generator, the EY SAP SAF-T solution, SIS Technology's full generate-validate-submit system, CodeBased (SAP ECC/S4), Navtech (Dynamics 365 BC), the SNI and KGT SAP add-ons, and SB consulting.
- The real barrier is timing, not competition. Sonnet noted this but still kept the idea open.
- NAP runs a free test-submission service for software developers. Every local accounting vendor can use it to validate its own export, which lowers their cost of adding SAF-T.

## Competitors (corrected list)
| Competitor | What it is | Status |
|---|---|---|
| KPMG Bulgaria SAF-T tool | In-house generator plus advisory | Verified (KPMG BG PDF) |
| EY SAP SAF-T solution | SAP-based; webinar and demo Sept 2025 | Verified |
| SIS Technology | Automates data preparation, XML generation, validation and NRA submission | Verified |
| CodeBased, Navtech, SNI, KGT | SAP and Dynamics add-ons | Verified (search listing) |
| SB consulting | SAF-T filing service | Verified (Sonnet) |
| Плюс Минус, Ажур, Микроинвест, Бизнес Навигатор | Local accounting suites with most of the SME market | SAF-T module status unverified |
| Flowex, NAPplus, SAF-T Bridge, Plana Solutions, Gravitech | From the triage list | No product found; unverified or nonexistent |

## Barriers
- **Timing.** Phases are 2026 (revenue over BGN 300M), 2028 (over BGN 15M) and 2030 (everyone else, with exceptions such as micro-enterprises). Each phase also has a 6-month grace period.
- **Data location.** SAF-T is extracted from the general ledger, so whoever owns the ledger owns the export. A third-party tool needs a parser for each accounting system.
- **NISSEF.** Draft mandatory e-invoicing and pre-filled VAT returns from 2028 (consultation until 23 Oct 2026) may overlap with SAF-T for small firms.
- **QES.** Submission needs a qualified electronic signature. This is minor.

## Buyer and price
- **Buyer.** A mid-size Bulgarian accounting firm with 2028-cohort clients (revenue over BGN 15M) on legacy or local software, or a finance manager at one of those firms.
- **Price anchor.** No SME price is published (unverified). Big-4 and SAP add-ons sell as projects. A converter or validator might fetch EUR 30–100 per client entity per month, but that is unverified.

## Scorecard
| # | Criterion | Score | Reason |
|---|---|---|---|
| 1 | Pain | 6 | Detailed monthly file with inventory and fixed-asset data; hard for goods traders. |
| 2 | Frequency | 8 | Monthly by the 14th. |
| 3 | Mandatory | 8 | Statutory, but SMEs only from 2030. |
| 4 | Fragmentation | 4 | One national schema. |
| 5 | Competition | 3 | Big-4, SAP and Dynamics add-ons, SIS; local suites will add exports. |
| 6 | Incumbent gap | 4 | The gap exists only where the ledger software lacks an export, and that closes as vendors update. |
| 7 | Buyer access | 6 | Accounting firms are findable (e.g. via ИДЕС and kik-info audience). |
| 8 | WTP | 4 | SMEs expect it bundled in their accounting software. |
| 9 | MVP simplicity | 5 | XML and validation are easy; ledger extraction for each source system is not. |
| 10 | Distribution | 5 | Through accounting-firm channels, but there is no near-term trigger for small firms. |
| | **Overall** | **4** | |

## Sources
- https://kik-info.com/novini/nap/NAP-vnedri-nova-elektronna-usluga-za-testovo-podavane.15156.php
- https://kik-info.com/novini/novini-i-akcenti/NAP-finalizira-pravilata-za-SAF-T-Pregled-na-promenite.202890.php
- https://assets.kpmg.com/content/dam/kpmg/bg/pdf/bg-TN-bg-SAFT-28072025.pdf
- https://www.ey.com/bg_bg/insights/tax/new-ey-sap-saf-t-solution
- https://sistechnology.com/en/saf-t-submission-to-the-national-revenue-agency-nra/
- https://www.comarch.com/trade-and-services/data-management/legal-regulation-changes/bulgaria-to-mandate-saf-t-reporting-starting-in-2026/
- https://www.vatupdate.com/?p=355012 (NISSEF draft, Sept 2026)
- https://eurofast.eu/launch-of-saf-t-reporting-in-bulgaria/
