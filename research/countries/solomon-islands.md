# Solomon Islands — Indie Software Opportunity Research

Research date: 2026-10-05. Treated as a **small market** (search budget used: 8 of 10).

## Bottom line

Solomon Islands (pop. ~0.75m, formal private sector concentrated in Honiara) has **no viable
standalone indie-SaaS opportunity** today. The only real "regulatory trigger" in sight is the
**Value Added Tax Bill 2025** (15% VAT replacing Goods Tax, Sales Tax, stamp duty and the
accommodation levy), but as of September 2026 it was still before Parliament with no announced
commencement date. The formal buyer pool is tiny (a DFAT review cites ~2,071 registered
businesses, 85% in Honiara; >10,000 business names, most of them micro/informal). The best use of
this market is as an **add-on to a Pacific-wide VAT/accounting-compliance product** (e.g. built for
Fiji/PNG/Vanuatu/Samoa/Tonga), switched on once the VAT Act commences.

**Accessibility:** no US/EU/UK sanctions; normal internet access; foreign software can be sold
(card payments / bank transfer via ANZ, BSP). No data-localization regime found. Accessible, just
very small.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| All VAT-registrable businesses / accountants | VAT registration, invoicing, 30-day VAT returns under the proposed VAT Bill 2025 | Watch / add-on only | Real trigger, but law not yet passed (Sept 2026) and only a few hundred businesses will cross the SBD 2m registration threshold |
| Accounting / payroll bureaus | PAYE, Goods Tax and Sales Tax filing via IRD "E-Tax"; SINPF contributions | Reject | IRD already offers E-Tax filing + internet-banking payment; Xero/MYOB plus local accountants cover the small buyer pool |
| Tuna fisheries / processors | EU catch certificates, CDS, TRACES export docs | Reject | Handful of large operators; donor/regional systems (Noro e-port CDS, EU TRACES, FFA tools) already in place |
| Customs brokers / importers | ASYCUDA World declarations, mandatory scanned supporting docs (since Dec 2020), EMPP | Reject | Few dozen brokers at most; ASYCUDA World is the government system with online pre-clearance; no integration surface for third parties confirmed |
| Logging / round-log exporters | Export licensing, log export documentation | Reject | Few foreign-owned operators, governance/political sensitivity, buyers unlikely to pay for compliance tooling |

## Strongest opportunities

### Opportunity: VAT transition kit for Solomon Islands businesses (Pacific add-on)

**Industry:**
Cross-industry: retailers, wholesalers, hotels/resorts, importers, and the accounting firms serving them.

**Buyer:**
Finance manager / owner of a Honiara business likely to exceed the SBD 2m VAT registration threshold; small accounting practices filing on behalf of clients.

**Trigger / Why now:**
VAT Bill 2025 introduced in mid-2025 (single 15% rate on taxable supplies, imports and imported services; compulsory registration above SBD 2,000,000 turnover; returns due within 30 days of each VAT period). Bills and Legislation Committee inquiry opened 12 March 2026. In September 2026 the Finance Minister reaffirmed intent to legislate, but **no commencement date** has been announced.

**Current workflow:**
1. Today businesses file Goods Tax / Sales Tax / PAYE returns via IRD E-Tax or paper and pay by internet banking.
2. Under VAT they would need to: register, issue tax invoices, track input VAT on imports (ASYCUDA customs entries) and local purchases, reconcile, and file periodic returns.
3. Most small firms use Excel or a desktop/cloud ledger (MYOB/Xero, unverified locally) configured by an outside accountant.

**Pain:**
Transitional pain is real (new invoicing rules, input-tax credits for import VAT paid at customs, transitional stock rules), but evidence of actual complaints is absent because the law is not yet in force. Opposition has questioned the economic case, which signals political uncertainty.

**Existing solutions:**
Xero and MYOB (generic VAT/GST engines usable with a 15% rate), IRD E-Tax (government filing portal; VAT module expected), local accounting firms and law firms (e.g. PALS publishes VAT guidance), donor-funded IRD training.

**The gap:**
Possibly: reconciling input VAT paid on imports (ASYCUDA entries) against ledger purchases, and producing the IRD VAT return in the exact form required. Unconfirmed; depends on the final IRD return format and whether E-Tax accepts uploads.

**Possible product:**
A VAT-return preparation and import-VAT reconciliation layer on top of Xero/MYOB/Excel, configured for multiple Pacific VAT regimes, with Solomon Islands as one jurisdiction.

**MVP:**
Excel/Xero export → mapping to the Solomon Islands VAT return boxes, with a customs-entry import-VAT matcher.

**Pricing hypothesis:**
USD 30–60/month per business; USD 150–300/month per accounting practice (estimate).

**How to find first customers:**
Institute of Solomon Islands Accountants (ISIA) members; Solomon Islands Chamber of Commerce & Industry; Company Haus business registry (solomonbusinessregistry.gov.sb); IRD VAT-readiness workshops once announced.

**Risks:**
Law may stall or be amended; IRD may ship a free filing module; buyer pool of perhaps a few hundred VAT-registered firms is too small standalone; Xero/MYOB cover most of the need.

**Kill condition:**
VAT Act not passed by mid-2027, or IRD E-Tax provides direct return entry with no upload or reconciliation step, or fewer than ~300 businesses register.

**Score:** 3/10 (standalone); meaningful only as a jurisdiction add-on to a regional Pacific VAT product.

**Sources:**
- https://www.vatcalc.com/solomon-islands/solomon-island-vat-implementation/
- https://www.vatupdate.com/2025/07/15/solomon-islands-introduces-vat-bill-to-modernize-tax-system-and-unify-tax-base/
- https://www.pals.com.sb/single-post/solomon-islands-introduces-value-add-tax-bill-vat-bill
- https://theislandsun.com.sb/inquiry-into-value-added-tax-bill-2025-commences/
- https://indepthsolomons.com.sb/solomon-islands-opposition-leader-questions-governments-economic-case-for-vat-reform/
- https://indepthsolomons.com.sb/vat-is-coming-businesses-told-to-get-ready/
- https://www.ird.gov.sb/
- https://www.dfat.gov.au/sites/default/files/solomon-islands-private-sector-portfolio-review.pdf

No other candidate cleared the bar for a write-up in the Opportunity template.

## Rejected after competitor research

- **Fisheries catch documentation / EU export paperwork:** the Noro e-port digital Catch Documentation System (launched 2021, the first in the Pacific) and EU TRACES (Solomon Islands registered since 2015) already cover this, and the buyers are a few large processors (e.g. SolTuna). Sources: https://pina.com.fj/2021/07/23/noro-port-first-e-port-in-the-pacific-introduces-digital-catch-documents-and-tracing/, https://www.atuna.com/?p=92092
- **Customs broker declaration prep:** ASYCUDA World is the government system and offers online pre-clearance. Scanned supporting documents have been mandatory since Dec 2020. There are very few brokers. Sources: https://www.sibconline.com.sb/?p=13753, https://asycuda.org/wp-content/uploads/casestudy-solomonislands.pdf
- **Tax/payroll filing for SMEs:** IRD E-Tax already handles PAYE, Goods Tax and Sales Tax filing and internet-banking payment. Generic Xero/MYOB plus local accountants cover the rest. Source: https://www.ird.gov.sb/

## Attractive problem, poor distribution

- **Round-log export compliance:** documentation and governance problems are real, but the buyers are a handful of foreign logging firms with little incentive to buy compliance tooling, and the sector is politically sensitive. (No sources verified in this pass.)

## Too competitive

- None in the usual sense. The constraint here is market size, not competition.
