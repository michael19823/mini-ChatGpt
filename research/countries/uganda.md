# Uganda: opportunity research

**Status: incomplete, low confidence.** The session's shared WebSearch cap ran out after 3 searches
("You've hit your usage limit"), so this report covers only what those searches could confirm.
Industries not searched are listed as "not researched" and are not rejected. Every figure below is
from the cited sources unless it is marked *estimate* or *unverified*.

**Accessibility:** Uganda is not under broad US, EU or UK sanctions on software or IT services.
URA lets foreign or local software integrators get EFRIS accreditation, and it publishes the list of
accredited integrators. Payment rails were not researched: MTN MoMo and Airtel Money are the likely
route (*unverified*). There is no sign the market is closed to a foreign solo founder.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Retail / wholesale / hardware / hospitality SMEs (EFRIS sectors) | Issuing e-invoices and e-receipts through URA EFRIS; reconciling EFRIS data with the books | Weak opportunity (5/10) | The rule is mandatory and expanding, with penalties of double the tax or UGX 200k. But URA has accredited many integrators, so only a narrow reconciliation angle is left. |
| Accounting firms serving SMEs | Monthly EFRIS reconciliation against VAT returns and books for several clients | Weak opportunity (part of the item above) | Possible wedge, but there is no direct complaint evidence yet. |
| Coffee exporters and traders | EUDR due-diligence package: farm geolocation/polygons, chain of custody, risk assessment | Too competitive (4/10) | EUDR applies from 30 Dec 2026 and 60% of exports go to the EU, but TraceX, the government National Traceability System and buyer-funded programmes already cover it. |
| Pharmacies (NDA), clearing agents (URA customs), private schools, NSSF/PAYE payroll | n/a | Not researched | Search cap reached. |

## Opportunities

### Opportunity: EFRIS reconciliation and exception desk for accountants serving newly covered SMEs

**Industry:**
Accounting firms and tax agents serving retail, wholesale and hospitality SMEs pulled into EFRIS.

**Buyer:**
Owner or partner of a small accounting or tax-agent firm with 10–100 SME clients, or the finance
manager of a multi-branch SME.

**Trigger / Why now:**
Since 1 July 2025, URA requires businesses in twelve named sectors to issue EFRIS e-invoices and
e-receipts even if they are not VAT-registered. URA repeated this in a public notice on
11 Aug 2026. The penalty for failing to issue an e-invoice or e-receipt is double the tax due or
UGX 200,000, whichever is higher.

**Current workflow:**
1. The SME issues receipts through the EFRIS portal or app, or through an accredited POS/ERP integration.
2. Its books (QuickBooks, Sage, Excel) are kept separately, and credit notes, voids and stock
   adjustments are often done in only one of the two systems (*unverified*: the typical failure mode,
   not confirmed by sources).
3. At month-end, the accountant downloads the EFRIS invoice data, matches it against the sales ledger
   by hand, and prepares the VAT or income-tax return.

**Pain:**
The requirement and the penalty are official. Evidence of the manual reconciliation burden is
inferred, not sourced (*unverified*).

**Existing solutions:**
- URA's free EFRIS portal and app.
- A long list of URA-accredited EFRIS software integrators (lists published Jan 2024, Apr 2024,
  Dec 2024 and Feb 2025).
- Greytrix (Sage ERP to URA e-invoicing connector).
- Local POS vendors with EFRIS built in (*unverified* names).

**The gap:**
The integrators push invoices into EFRIS. None of the results showed a tool built for accountants
that reconciles EFRIS-issued documents with the ledger and the tax return across many clients and
flags exceptions such as missing receipts, unmatched credit notes and wrong tax codes.
*Unverified: needs interviews.*

**Possible product:**
A multi-client dashboard. It imports EFRIS invoice exports and the accounting ledger, matches them
automatically, flags exceptions and penalty exposure, and prepares the monthly return figures.

**MVP:**
CSV/Excel import of the EFRIS invoice list and the QuickBooks sales report, a matching engine, an
exception list, and a per-client monthly PDF report.

**Pricing hypothesis:**
About USD 5–10 per client company per month, or USD 50–150 per month per accounting firm (*estimate*).

**How to find first customers:**
The ICPAU member and firm directory, URA's list of registered tax agents, and the accredited
integrators as resale partners (all *unverified* as available lists).

**Risks:**
- Accredited integrators or URA could add reconciliation reports.
- Willingness to pay among Ugandan SMEs is low.
- Exports may not be available through an API.
- A crowded integrator market.

**Kill condition:**
Interviews show that the integrators' POS/ERP connectors already keep the books and EFRIS in sync,
or that accountants will not pay more than about USD 20 per month.

**Score:** 5/10

**Sources:**
- https://www.vatupdate.com/2026/08/27/uganda-expands-efris-e-invoicing-requirements-to-additional-sectors/
- https://beancount.io/blog/2026/09/24/uganda-efris-e-invoicing-expansion-12-sectors-penalties-guide
- https://www.pkfea.com/media/pz5ldarv/uganda-tax-alert-additional-taxpayers-required-to-use-efris.pdf
- https://ura.go.ug/en/download/list-of-accredited-efris-software-integrators-as-at-25-february-2025/
- https://www.greytrix.com/africa/product/other-solutions/e-invoicing-solutions/e-invoicing-for-uganda-ura/

### Opportunity: EUDR due-diligence package for mid-size Ugandan coffee exporters and consolidators

**Industry:**
Coffee export.

**Buyer:**
Compliance or quality manager at a licensed coffee exporter or primary processor selling to EU buyers.

**Trigger / Why now:**
EUDR applies from 30 December 2026. About 60% of Uganda's coffee exports go to the EU. As of
April 2025, about 812,000 of an estimated 3 million farmers had been registered. The government
budgeted UGX 13.9bn for a National Traceability System.

**Current workflow:**
1. Collect farmer details and GPS points or polygons (polygons for farms over 10 acres).
2. Link lots to farms through middlemen and hullers.
3. Assemble the due-diligence and risk-assessment package for the EU importer.

**Pain:**
The requirement is mandatory for EU-bound coffee. Smallholder supply runs through multiple
middlemen, which makes lot-to-farm linkage hard.

**Existing solutions:**
- TraceX (sells EUDR compliance to Ugandan coffee exporters).
- The government National Traceability System and farmer registration.
- Buyer and trader programmes, such as StoneX's coverage of Uganda's readiness.
- Others not verified here: Farmforce, Koltiva, Enveritas.

**The gap:**
A possible gap is a light "lot-file assembler" for exporters that already hold farmer data, turning
national-registry data plus trader records into the EU importer's due-diligence statement format.
*Unverified.*

**Possible product:**
A tool that converts existing registry, cooperative and trader data into a per-shipment EUDR
evidence pack.

**MVP:**
GeoJSON/CSV import, plot validation, lot-to-plot mapping and a due-diligence export.

**Pricing hypothesis:**
USD 100–300 per month per exporter, or per shipment (*estimate*).

**How to find first customers:**
The coffee regulator's list of licensed exporters. The coffee-regulation function moved from UCDA
to MAAIF (*unverified* current list location).

**Risks:**
- Well-funded traceability vendors already sell here.
- The government system could make a private tool redundant.
- EU rules keep changing.
- The buyer is often the EU importer, not the Ugandan exporter.

**Kill condition:**
The National Traceability System produces EUDR-ready exports, or the main EU importers mandate their
own platforms.

**Score:** 4/10

**Sources:**
- https://www.foodbusinessmea.com/uganda-accelerates-coffee-farmer-registration-to-meet-eu-deforestation-regulation-compliance/
- https://tracextech.com/uganda-coffee-supply-chain/
- https://www.stonex.com/en-us/insights/uganda-on-track-to-meet-new-eudr-compliance-deadline/

## Rejected after competitor research

- **Generic EFRIS invoicing / POS connector.** Killed by the large URA-accredited integrator list
  and Greytrix's Sage connector, plus URA's free portal and app.

## Attractive problem, poor distribution

- **Smallholder coffee farm mapping.** The buyers are cooperatives and exporters, government already
  funds the registration, and farmers will not pay.

## Too competitive

- **EUDR traceability for coffee:** TraceX, the national traceability system and buyer-led
  programmes. It is kept above at 4/10 only as a narrow add-on.

## Gaps and next steps

Repeat with search budget for:
- NDA pharmacy and controlled-drug reporting
- URA customs/ASYCUDA for clearing agents
- NSSF and PAYE payroll bureaus
- PDPO data-protection registration
- private-school reporting (EMIS)
- fuel-station digital tax stamps
