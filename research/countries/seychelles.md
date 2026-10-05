# Seychelles: Indie Software Opportunity Research

**Research date:** 2026-10-05
**Market type:** Microstate. Population is roughly 100k (estimate, not verified this session) and the economy rests on tourism, tuna fisheries and processing, offshore financial services and government.
**Search budget used:** 3 searches (2 returned results; the 3rd, on fisheries, was refused because the session's search cap was hit, so research stopped there as instructed).
**Accessibility:** Open market. As far as I know there are no sanctions or internet restrictions, but I did not check this with a search this session. English is an official language, and the regulator publishes regulations and returns online (src.gov.sc).

## Bottom line

**Seychelles cannot support a standalone indie software business.** Two regulatory triggers are real and current:
- mandatory VAT e-invoicing, now in final procurement with an end-2026 target
- the Tourism Environmental Sustainability Levy (TESL) changes effective 1 Jan 2026

But the buyer pool is tiny. The e-invoicing rollout is being run through a government-procured central solution plus about six local POS/billing vendors. The 2026 levy change *removed* the obligation for the many small guesthouses (1–24 rooms), so that trigger shrank rather than grew. At most, Seychelles could be added as a country module to a product sold mainly in Mauritius, other Indian Ocean islands or East Africa.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| VAT-registered SMEs / POS & billing | Mandatory e-invoicing to SRC (target end-2026) | Weak / add-on only | Real trigger, but SRC is procuring a central solution and has already surveyed 6 local POS/e-billing providers. Few buyers, and the incumbents will be told how to integrate. |
| Tourism accommodation (guesthouses, hotels) | Monthly TESL return to SRC by the 21st | Rejected | From 1 Jan 2026, establishments with 1–24 rooms no longer collect the levy. Only medium/large hotels, island resorts and yachts remain, and they run hotel PMS/ERP. |
| Tourism accommodation | Licensing / guest registration | Not assessed (no search budget) | Unverified |
| Fisheries / tuna processing / exporters | EU IUU catch certificates and traceability (EU CATCH system) | Not assessed (search refused) | The handful of industrial operators and the Seychelles Fishing Authority (SFA) are likely enterprise or state-run. Unverified. |
| Offshore corporate service providers | AML/KYC, beneficial ownership filings to the FSA | Not assessed | Likely served by global KYC/registry vendors. The registered-agent market is small. Unverified. |

## Opportunities

No opportunity meets the brief's quality bar. The single candidate below is recorded for completeness at a low score.

### Opportunity: E-invoicing readiness connector for small VAT-registered businesses (add-on module)

**Industry:**
Retail, hospitality and services SMEs registered for VAT

**Buyer:**
Owner/accountant at a small VAT-registered business using spreadsheets or a non-local accounting tool (e.g. a generic cloud ledger) that will not connect natively to the SRC e-invoicing system

**Trigger / Why now:**
The Cabinet approved procurement of an e-invoicing solution in Feb 2024. On 25 Jul 2026 the SRC said the project was in the final procurement stage, and it has announced an end-2026 rollout target. On 16 Sep 2026 the SRC confirmed it had completed a market survey of 6 local POS/e-billing providers. No technical specifications or binding effective date have been published yet.

**Current workflow:**
1. Issue invoices from a POS, accounting software or Word/Excel templates.
2. Have the accountant compile the VAT return manually from sales records.
3. After the mandate: each invoice must reach the SRC system (format unknown; specifications not yet published).

**Pain:**
Expected to come from the new mandate. No complaints were found yet because the system is not live.

**Existing solutions:**
- The government-procured SRC e-invoicing solution (vendor not yet announced; it may include a free portal for low-volume issuers)
- 6 local POS/e-billing providers surveyed by the SRC (names not found)
- Global e-invoicing compliance vendors that track Seychelles (e.g. EDICOM publishes a Seychelles status page)

**The gap:**
Possibly a bridge between foreign cloud accounting tools and SRC for SMEs not on a local POS. This depends entirely on the unpublished specifications and on whether the SRC provides a free portal.

**Possible product:**
A connector that sends invoices from common accounting exports to the SRC e-invoicing interface. Sold only as one country module inside a wider Indian Ocean or African e-invoicing product.

**MVP:**
Wait for the SRC specifications. Then build a CSV/accounting export → SRC API submission tool with error handling.

**Pricing hypothesis:**
SCR 300–700 per month per business (about USD 20–50; estimate)

**How to find first customers:**
Through accounting firms in Victoria, the SRC's VAT-registered taxpayer outreach, and the Seychelles Chamber of Commerce and Industry. No public VAT registrant list was verified.

**Risks:**
- The SRC may provide a free portal or a mandated certified-vendor scheme.
- The 6 local POS vendors will cover most retail.
- Tiny total addressable market.
- The timeline may slip.

**Kill condition:**
The SRC specifications include a free web portal for manual or low-volume invoicing, or require vendor certification that a foreign solo founder cannot obtain.

**Score:** 3/10

**Sources:**
- https://nation.sc/articles/31652/src-moves-to-final-stage-of-einvoicing-procurement
- https://edicomgroup.com/electronic-invoicing/seychelles
- https://www.vatcalc.com/tag/seychelles/
- https://orbitax.com/news/country/article/The-Republic-of-Seychelles-con_c0c0c60b-b22a-11f1-8c93-b26f21b19a18

## Rejected after competitor research

- **TESL levy return automation for guesthouses.** It looked like a classic monthly mandatory return (due to the SRC by the 21st of each month, with penalties). It was rejected because from 1 Jan 2026 the levy no longer applies to establishments with 1–24 rooms. That removes the long tail of small buyers. The remaining payers are medium (25–50 rooms, SCR 75 per person per night), large (51+ rooms, SCR 100), island resorts and yachts, and those are covered by their hotel PMS or finance teams. The substitute that killed this idea is the regulation change itself plus hotel PMS/ERP. (Sources disagree on whether medium starts at 24 or 25 rooms.)
  - https://src.gov.sc/amendments-made-to-environment-protection-act-2016-related-to-tourism-environmental-sustainability-levy/
  - https://src.gov.sc/wp-content/uploads/2025/12/SI-90-2025-Environment-Protection-Tourism-Environmental-Sustainability-Levy-Amendment-Regulations-2025-1.pdf
  - https://www.finance.gov.sc/blog/2026/01/07/removal-of-tourism-environmental-sustainability-levy-for-small-tourism-establishments/
  - https://tourism.gov.sc/?p=8950

## Attractive problem, poor distribution

- **SRC e-invoicing compliance for SMEs.** This is a real mandate, but the market is microscopic and procurement is centralised. It only works as an add-on to a regional product (e.g. Mauritius MRA e-invoicing).

## Too competitive

- **Fisheries export traceability / EU catch certificates.** Not verified (search refused). It is likely handled by the SFA and a few large industrial operators (tuna canning, purse-seine fleets) that have enterprise or in-house systems.

## Notes / unverified

- Not researched because the search cap was reached: fisheries IUU/EU CATCH workflows, FSA offshore/AML filings, and accommodation licensing.
