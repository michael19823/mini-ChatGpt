# C0359 · Ghana · E-VAT sales-invoice clearance / POS–ERP integration for SMEs

## Verdict and score
**Narrow. 5/10.** The "cheap bridge for micro and small sellers" thesis is mostly gone. The VAT Act 2025 (Act 1151) raised the goods registration threshold from GHS 200k to **GHS 750k** from Jan 2026 and abolished the flat-rate scheme, which removes most micro goods sellers. Any VAT-registered business without a billing system also gets a **free GRA-certified web invoicing app**, installed through its Taxpayer Service Centre.

What remains is a narrow segment: **mid-size retailers and distributors above GHS 750k turnover running local or legacy POS/ERP software** that must integrate through the GRA API. Uptake has been slow: "not even a third" of targeted firms had integrated, with reports of GRA support failures and downtime. These firms need a certified middleware connector plus hands-on integration. A second, related wedge is selling a certified connector to **local POS developers**, who can embed it rather than certify their own.

Both wedges need GRA certification. The third-party integrator framework was still "being designed" at last report.

## What changed versus the Sonnet evidence
- Sonnet treated six foreign or generic vendors and never checked the two things that define the market: the GHS 750k threshold, and the free GRA app plus POS-certification route.
- Sonnet also missed the cheap ready-made Odoo modules by Pokutsoft: Ghana E-VAT POS USD 217, e-Invoice USD 118, Inbound USD 59. ECOSIRE's ERPNext E-VAT app starts at USD 999, as Powersoft's file noted.
- The verdicts on DDD Invoices, Enerpize and Voxel (not real competitors) hold. ClearTax and EDICOM are real but enterprise-focused.
- There is evidence of pain (slow onboarding, support failures, firms refusing to integrate), but it reads as reluctance as much as an unmet tooling need.

## Competitors (corrected list)
| Competitor | Offer | Evidence |
|---|---|---|
| GRA free e-invoicing web app | Free for VAT-registered businesses without a billing system | Verified (gra.gov.gh/e-vat, Ghanaian Times) |
| GRA-certified POS software (local developers) | POS certified by GRA | Verified (route exists); list unverified |
| Pokutsoft Odoo modules | E-VAT POS USD 217, e-invoice USD 118, inbound USD 59 | Verified (apps.odoo.com) |
| ECOSIRE ERPNext E-VAT | From USD 999 | Per Sonnet (Powersoft file) |
| ClearTax, EDICOM | ERP-level E-VAT connectors | Verified |
| Fonoa, Voxel, DDD | Reporting guides or APIs; no Ghana product found | Not real competitors |

## Barriers
- **Certification.** POS and accounting software must be GRA-certified. A third-party integration provider framework was pending (unverified whether it has been published).
- **Free tool.** The GRA web app is a zero-price anchor for low-volume issuers.
- **Threshold.** GHS 750k for goods; services have no threshold, but low-volume service firms can use the free app.
- **Enforcement.** Enforcement has been inconsistent, which weakens urgency.

## Buyer and price
- **Buyer.** Finance or IT lead at a Ghanaian supermarket, pharmacy chain or distributor (above GHS 750k) on local POS. Or a local POS software house wanting an embeddable certified connector.
- **Price anchors.** USD 59–217 one-off Odoo modules; USD 999+ ERPNext app. A middleware subscription could plausibly be USD 30–100 a month per entity (unverified).

## Scorecard
| # | Criterion | Score | Reason |
|---|---|---|---|
| 1 | Pain | 6 | Integration friction and GRA support issues are reported. |
| 2 | Frequency | 9 | Every invoice, in real time. |
| 3 | Mandatory | 8 | Statutory, but enforcement is patchy. |
| 4 | Fragmentation | 4 | One national API; fragmentation is across POS stacks. |
| 5 | Competition | 5 | Free GRA app plus cheap Odoo modules, but the legacy-POS middle is thin. |
| 6 | Incumbent gap | 6 | The gap is integrating legacy POS that won't migrate. |
| 7 | Buyer access | 6 | GRA large and medium taxpayer lists are not public; retail chains are visible. |
| 8 | WTP | 5 | Penalties exist; a cedi budget. |
| 9 | MVP simplicity | 5 | API connector is simple; certification and on-site integration are not. |
| 10 | Distribution | 5 | Through POS developers and accountants. |
| | **Overall** | **5** | |

## Sources
- https://gra.gov.gh/e-vat/
- https://ghanaiantimes.com.gh/gra-digital-vat-invoicing-takes-off-today-set-to-eliminate-abuse-increase-revenue
- https://www.deloitte.com/gh/en/services/tax/perspectives/electronic-invoicing-regime-update-on-implementation.html
- https://www.myjoyonline.com/vat-reforms-gra-raises-registration-threshold-to-gh¢750000-cuts-rate-to-20-from-jan-2026/
- https://www.crowe.com/gh/news/ghana-vat-reform-2026
- https://apps.odoo.com/apps/modules/19.0/l10n_gh_evat_pos
- https://www.graphic.com.gh/news/general-news/ghana-news-2-years-after-e-vat-gra-slow-to-sign-on-businesses-low-compliance-amid-revenue-leakage.html
- https://www.graphic.com.gh/news/general-news/ghana-news-e-vat-in-limbo-retail-outlets-suck-economy-dry-nation-loses-billions-in-revenue.html
- https://www.cleartax.com/gh/e-invoicing-ghana
