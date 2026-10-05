# Zambia: Indie Software Opportunity Research

Research date: 2026-10-05. Budget used: 12 WebSearch calls (medium market). No WebFetch. All facts below come from search-result summaries. Anything not confirmed by a source is marked **unverified** or **estimate**.

**Accessibility:** Zambia is not under US, EU or UK sanctions. Payments go through normal card rails, mobile money (MTN, Airtel) and bank transfer, and the internet is open. A foreign solo founder can sell SaaS there. The practical constraint is that government e-services (Zamportal, ZEMA e-licensing) require ZamPass digital-signature authentication ([mabumbe KB](https://mabumbe.com/kb/waste-management-licence-zamportal/)). Any product that touches portals will need a customer-side login or a local operator.

**Headline:** In 2026 the strongest new "why now" in Zambia is the **mining local-content regime (SI 68 of 2025)**. It took effect on 1 January 2026, and its portal (LOCAS) went live on 20 March 2026 with quarterly reporting. The other big 2025–26 trigger, **ZRA Smart Invoice**, is real but already has many integrators on the issuing side. The remaining gap there is purchase-side input-VAT reconciliation.

---

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Mining and mining contractors | SI 68 local-content annual procurement plans and quarterly reports on LOCAS | **Opportunity** | New mandatory quarterly workflow from 2026 with a fresh portal. Data lives in ERPs, while classification and supplier-ownership evidence are manual. |
| Citizen-owned mining suppliers | Proving "local" status and keeping compliance certificates valid for mines and LOCAS | **Opportunity (weaker)** | Mines must now buy 20–40% locally, and suppliers must be verified. The pain is real, but SME willingness to pay is low. |
| All VAT-registered businesses and accountants | Smart Invoice: input-VAT claims only on invoices with a ZRA Mark ID | **Opportunity (narrow)** | Issuing is solved by many vendors. Checking supplier invoices before the VAT return is less well covered. |
| All VAT-registered businesses | Smart Invoice issuing integration (VSDC) | Too competitive | Greytrix, Flick, Serpa, Upbuff, Satva, Pay-e Zambia, Zamsmart, Edicom and ClearTax all sell this. |
| Payroll and accountants | PAYE/SDL (ZRA), NAPSA and NHIMA monthly returns, 2026 PAYE bands | Too competitive | The Odoo l10n_zm_payroll module, Sage and local platforms already compute and split remittances. |
| Customs clearing agents | ASYCUDA World pre-clearance bills of entry (≥5 days before arrival) | Poor distribution / integration risk | About 700 agents and a real per-shipment pain, but whether ASYCUDA can be accessed or bulk-uploaded is unverified. |
| Pharma importers, distributors, pharmacies | ZAMRA GS1 traceability (2D DataMatrix, SSCC) | Premature / enterprise | The national master-data platform is not yet live. TraceLink and LSPedia cover manufacturers. |
| Waste and hazardous-materials handlers | ZEMA waste, hazardous-waste and emission licences | Reject | No 2025–26 trigger found. Licensing is low-frequency and ZamPass-gated. |
| Government vendors | ZPPA e-GP registration packs (tax clearance, NAPSA, WCFCB, PACRA, CEEC) | Reject | This is generic document collection and a certificate-expiry tracker. It is folded into opportunity 2 instead. |

---

## Opportunities

### Opportunity: LOCAS Quarterly Report Builder for mining-related contractors (SI 68)

**Industry:**
Mining and mining services (contract miners, drilling, engineering, haulage, maintenance contractors and equipment dealers that count as "mining-related companies").

**Buyer:**
The procurement manager, supply-chain or compliance officer, or finance controller at mid-sized mining-related companies and small or mid-tier mines. Large mines (FQM, Barrick Lumwana, KCM, Mopani) are secondary because they will likely build this inside SAP or hire Big-4 firms.

**Trigger / Why now:**
SI 68 of 2025, the Geological and Minerals Development (Local Content) Regulations, took effect on 1 January 2026. Mining **and mining-related** companies must:
- buy at least 20% of core goods and services from local companies, rising to 25%, 35% and then 40% over five years;
- buy 100% of reserved non-core categories (security, catering, logistics, ICT, labour hire and others) from local companies;
- run supplier-development programmes worth 0.05% of procurement spend;
- file Annual Procurement Plans and **Quarterly Reports** on LOCAS. LOCAS went live on 20 March 2026, and the Q1 deadline was 15 April 2026.

Reports must include procurement disclosures, **supplier beneficial-ownership information**, tender declarations and disclosures, exceptions, and supplier-development details. By August 2026, 78 mining companies were registered on LOCAS. Government data shows only about 1% of mining procurement went to Zambian-owned firms, so enforcement pressure is political and rising.

**Current workflow (inferred from the reporting requirements; not observed directly):**
1. Export purchase orders and invoices for the quarter from the ERP (SAP, Sage, Odoo, Pastel) into Excel.
2. Classify each line by hand against the SI 68 schedules (core, non-core reserved, other).
3. For every supplier, find its Zambian shareholding (PACRA printout, CEEC certificate) to decide whether it counts as "local" (≥25% citizen ownership) and record beneficial owners.
4. Compute the local-content percentages against the plan and explain exceptions (items not available locally).
5. Re-key or upload the data into LOCAS, answer MMMD queries when it flags issues, and repeat every quarter.

**Pain:**
- The obligation is mandatory and recurs every quarter.
- Thresholds step up over time, and non-compliance exposes the company to licence-related enforcement. The exact penalty schedule is unverified.
- Supplier ownership changes and certificates expire, so classification has to be re-checked every quarter.
- A new portal means no institutional muscle memory yet.

**Existing solutions:**
- LOCAS itself is free. It is a submission and verification portal, not a data-preparation tool.
- ERP procurement modules (SAP Ariba, Sage) hold the spend data but do not have Zambian SI 68 schedules or local-status flags. This is an estimate.
- Consultants: M&J Consultants (an SI 68 guide), law firms (Bowmans, Afriwise, DLA Piper Africa) and Big-4 firms do advisory work.
- "MinesConnect" (minesconnect.com/local-content) appears in search results with an SI 68 page, but its functionality and pricing are **unverified**. It is the first thing to check.
- Global local-content tools from oil and gas (Nigeria and Ghana) are not known to be localised for Zambia (unverified).

**The gap:**
No one connects ERP spend data, SI 68 schedule classification, a supplier local-status register (PACRA/CEEC evidence with expiry dates) and a LOCAS-ready output. Today this is done in spreadsheets each quarter.

**Possible product:**
Upload the quarter's AP or PO export. The tool auto-classifies lines against SI 68 schedules using rules plus a learned supplier and item mapping. It joins each line to a maintained supplier ownership register and outputs LOCAS-formatted quarterly and annual-plan data, plus an exceptions and justification log and threshold tracking against the 5-year glide path.

**MVP:**
A CSV/Excel upload, a schedule classifier with manual override, a supplier register with ownership percentage and evidence uploads, and a quarterly report export that mirrors the LOCAS fields. Getting the LOCAS field list requires one customer's login, which is unverified until then.

**Pricing hypothesis:**
$250–600 per month per entity, or $1,500–3,000 per quarter for done-with-you preparation. This is an estimate. Consulting firms are the price anchor.

**How to find first customers:**
- the LOCAS-registered company list and MMMD mining cadastre licence holders;
- Zambia Chamber of Mines members;
- the Mining Suppliers/Contractors Association on the Copperbelt (unverified name);
- tender notices from ZCCM-IH and the large mines, which name the contractors.

**Risks:**
- A small universe: 78 registered mines, plus mining-related companies that are uncounted and possibly a few hundred (estimate).
- LOCAS may add its own classification features or Excel templates.
- Large mines run this inside SAP or through Big-4 firms.
- Selling from abroad to Copperbelt procurement teams needs a local partner.
- Regulatory reversal is possible (lobbying by the Chamber of Mines).

**Kill condition:**
Kill the idea if:
- LOCAS already accepts a simple Excel template that takes under 2 hours a quarter to fill; or
- MinesConnect or another vendor already does ERP-to-LOCAS preparation; or
- fewer than about 150 entities must file.

**Score:** 6/10

**Sources:**
- [UNCTAD Investment Policy Monitor: SI 68](https://investmentpolicy.unctad.org/investment-policy-monitor/measures/5293/zambia-introduces-mandatory-local-content-requirements-and-procurement-thresholds-in-the-mining-sector-)
- [IEA policy entry SI 68 of 2025](https://www.iea.org/policies/29702-geological-and-minerals-development-local-content-preference-for-goods-and-services-in-the-mining-sector-regulations-statutory-instrument-no-68-of-2025)
- [LOCAS portal (MMMD)](https://locas.mmmd.gov.zm/)
- [Efficacy News: reports due 15 April 2026](https://efficacynews.africa/2026/03/20/mining-firms-ordered-to-submit-local-content-reports-by-15-april/)
- [Zambia Monitor: ministry enforces reporting rules](https://www.zambiamonitor.com/mines-ministry-enforces-new-local-content-reporting-rules-issues-april-15-deadline/)
- [Lusaka Times: only 1% of procurement to Zambian-owned firms](https://www.lusakatimes.com/2026/03/12/only-1-of-mining-procurement-goes-to-zambian-owned-firms/)
- [M&J Consultants SI 68 explainer](https://mjconsultants.co.zm/insights/si-68-zambia-mining/)
- [MinesConnect SI 68 page](https://www.minesconnect.com/local-content/)
- [Afriwise](https://www.afriwise.com/blog/a-new-chapter-in-resource-nationalism-zambias-local-content-push)
- [Chambers Mining 2026 Zambia](https://practiceguides.chambers.com/practice-guides/mining-2026/zambia)

---

### Opportunity: "Mine-Ready" compliance vault for Zambian citizen-owned suppliers

**Industry:**
SME suppliers to mines in the reserved categories: security companies, catering, logistics and trucking, labour hire, ICT and training providers.

**Buyer:**
The owner or managing director of citizen-owned or citizen-empowered SMEs (≥25% Zambian-owned) bidding for mine and parastatal contracts.

**Trigger / Why now:**
SI 68 reserves 100% of non-core categories for local companies, and suppliers must register on LOCAS and be verified by MMMD. Each tender, whether for a mine, ZCCM-IH or ZPPA e-GP, requires a valid pack: tax clearance, NAPSA compliance, WCFCB compliance, PACRA printout, CEEC certificate, NCC certificate (for construction) and practising licences.

**Current workflow:**
1. Renew each certificate at a different agency on a different cycle.
2. Assemble a PDF pack for each tender or supplier-registration call.
3. Fill each mine's own supplier-registration form.
4. Get disqualified when one certificate has expired.

**Pain:**
Missing or expired documents disqualify bids. The pack is reassembled for every tender. A large wave of new local-supplier demand is created by the reserved categories.

**Existing solutions:**
- Manual work by company secretaries and accountants.
- ZPPA e-GP supplier registration (free, for government tenders only).
- Each mine's own vendor portal (SAP Ariba or similar).
- LOCAS supplier registration.
- Generic document-management tools.

**The gap:**
Nothing combines expiry tracking across ZRA, NAPSA, WCFCB, PACRA and CEEC with tender-specific pack assembly and LOCAS local-status evidence.

**Possible product:**
A certificate vault with expiry alerts (WhatsApp or SMS), one-click tender pack generation per mine or agency template, and a "local status dossier" (shareholding plus beneficial owners) that matches what mines need for their SI 68 reports. A two-sided angle is possible: mines could pull verified supplier dossiers into opportunity 1.

**MVP:**
Document upload, expiry dates and reminders, and templated pack export for ZPPA plus the top 3 mines' registration lists.

**Pricing hypothesis:**
ZMW 300–700 per month (about $12–30, an estimate), or paid by mines or the Chamber as a supplier-development programme expense. This counts toward the 0.05% supplier-development obligation; that framing is speculative.

**How to find first customers:**
- the LOCAS supplier registry (if public, unverified);
- the CEEC registered-business list;
- ZPPA registered suppliers;
- the security-company licence list (Ministry of Home Affairs, unverified);
- Copperbelt business associations.

**Risks:**
This is close to the "generic document collection" trap. SME willingness to pay is low, and the product needs local sales.

**Kill condition:**
Kill the idea if LOCAS verification fully replaces per-mine supplier packs, or if suppliers will not pay over $10 a month.

**Score:** 4/10

**Sources:**
- [UNCTAD on SI 68 reserved categories](https://investmentpolicy.unctad.org/investment-policy-monitor/measures/5293/zambia-introduces-mandatory-local-content-requirements-and-procurement-thresholds-in-the-mining-sector-)
- [LOCAS](https://locas.mmmd.gov.zm/)
- [ZCCM-IH procurement notices](https://www.zccm-ih.com.zm/procurement/page/2)
- [Supplier registration call (document list)](https://gozambiajobs.com/jobs/167492350/apply)
- [EIZ supplier registration](https://eiz.org.zm/?p=6749)

---

### Opportunity: Smart Invoice input-VAT guard for accountants (purchase-side reconciliation)

**Industry:**
Accounting firms and bookkeepers serving VAT-registered SMEs, plus finance teams of mid-sized firms.

**Buyer:**
ZICA-registered accounting-firm partners and tax managers; the finance manager at mid-sized importers, distributors and contractors.

**Trigger / Why now:**
Since 1 January 2025 (with ZRA guidance restating it for 2026), input VAT and expense deductions are allowed **only** on invoices that carry a Smart Invoice Mark ID and QR code. ZRA's May 2026 campaign reported 44,110 businesses onboarded, 7 taxpayers under prosecution and **VAT refunds gated behind Smart Invoice compliance checks**. Fines go up to K120,000.

**Current workflow (inferred):**
1. Collect supplier invoices (paper, PDF, WhatsApp photos).
2. Check by eye whether each one has a ZRA QR code or Mark ID.
3. Chase non-compliant suppliers for re-issued invoices.
4. Enter the purchases into the VAT return.
5. Get claims disallowed or refunds held at audit.

**Pain:**
Every non-compliant supplier invoice is direct cash lost: 16% VAT plus the expense deduction. Refunds are held. This happens monthly, on every purchase.

**Existing solutions:**
- Smart Invoice integrators focus on the **issuing** side: Greytrix (Sage), Serpa (Odoo), Upbuff (SAP B1), Satva, Flick Network, Pay-e Zambia, Zamsmart, Edicom, ClearTax.
- The ZRA portal and taxpayer view of purchases may already list supplier invoices issued to a TPIN. This is **unverified** and is the key diligence item.
- Generic invoice OCR tools.

**The gap:**
No tool was found that scans incoming invoices, decodes and validates the ZRA QR/Mark ID, reconciles them against the purchase ledger and ZRA's view, and auto-chases offending suppliers before the VAT return deadline.

**Possible product:**
A forwarding inbox and WhatsApp intake for supplier invoices. It reads the QR code, verifies the invoice against ZRA (through the public verify endpoint, if one exists, unverified), flags invoices that are missing or mismatched, and produces a "claimable vs at-risk input VAT" report per client per month, with supplier chase messages.

**MVP:**
Upload a batch of invoice PDFs or photos. The tool decodes QR codes, flags missing ones and exports a spreadsheet of at-risk VAT. It is multi-client for accounting firms.

**Pricing hypothesis:**
$5–15 per client entity per month for accounting firms. Alternatively, $40–100 per month for a mid-sized firm. Value framing: recovering one disallowed K50,000 invoice pays for a year.

**How to find first customers:**
- the ZICA member and firm directory;
- clients of Smart Invoice integrators (a partnership channel);
- the ZRA taxpayer-education event lists.

**Risks:**
- If ZRA's portal already shows matched purchases, the product loses most of its value.
- The QR verification endpoint may not exist.
- Integrators may add the feature quickly.
- Avoid drifting into generic invoice OCR.

**Kill condition:**
Kill the idea if the ZRA taxpayer portal already shows a reconciled purchase list with a claimable flag, or if supplier compliance rises above 95% (most suppliers are already compliant).

**Score:** 5/10

**Sources:**
- [VATupdate Zambia booklet (Aug 2026)](https://www.vatupdate.com/2026/08/31/zambia-e-invoicing-e-reporting-country-booklet/)
- [M&J Consultants Smart Invoice 2026 guide](https://mjconsultants.co.zm/guides/zra-smart-invoice-2026/)
- [Diggers: ZRA to prosecute 7 taxpayers](https://diggers.news/business/2026/05/12/zra-to-prosecute-7-taxpayers-for-non-use-of-smart-invoice/)
- [Edicom](https://edicomgroup.com/blog/mandatory-electronic-invoicing-zambia-smart-invoice)
- [ClearTax ZM](https://www.cleartax.com/zm/e-invoicing-zambia)
- [Greytrix](https://www.greytrix.com/africa/product/other-solutions/e-invoicing-solutions/e-invoicing-for-zambia-zra/)
- [Flick](https://www.flick.network/en-zm/e-invoicing-in-zambia)
- [Serpa](https://serpa.africa/insights/complete-guide-to-zra-smart-invoice-integration-with-odoo-in-zambia/)
- [Zamsmart](https://www.zamsmart.co.zm/)

---

## Rejected after competitor research

- **Smart Invoice issuing integration (ERP/POS to VSDC).** Killed by a crowded integrator field: Greytrix (Sage), Serpa (Odoo), Upbuff (SAP B1), Satva, Flick Network, Pay-e Zambia, Zamsmart, Edicom and ClearTax. Fiscal devices cover the smallest shops.
- **Payroll statutory returns (PAYE/SDL, NAPSA, NHIMA, 2026 PAYE bands).** Killed by the Odoo `l10n_zm_payroll` module (v18 and v19), Sage payroll and local platforms (Satva built one for a Zambian client). This is an annual band update, not a new workflow.
- **ZPPA / government-vendor document packs as a standalone product.** This is generic document collection. ZPPA e-GP registration is free. The useful part is folded into opportunity 2.

## Attractive problem, poor distribution / premature

- **Clearing-agent ASYCUDA pre-clearance preparation.** About 700 registered agents (ZCFAA). Bills of entry have been mandatory at least 5 days before arrival since May 2024, and outages and bandwidth problems are common. It is per-shipment and mandatory. However, it is unverified whether ASYCUDA World in Zambia accepts XML or bulk upload from third-party software, and agents are price-sensitive. Worth one interview round with ZCFAA members. Sources: [Freight News](https://www.freightnews.co.za/article/speeding-up-customs-clearance), [trade.gov](https://www.trade.gov/country-commercial-guides/zambia-import-requirements-documentation).
- **ZAMRA medicine traceability (GS1).** The guideline was issued in 2023, but the national master-data platform is not live. Manufacturers use TraceLink and LSPedia. Revisit when ZAMRA sets a hard date for pharmacy and distributor scanning. Sources: [ZAMRA guideline](https://www.zamra.co.zm/wp-content/uploads/2023/08/Guildlines-of-Traceability-of-Medicines.pdf), [LSPedia](https://www.lspedia.com/regulation/zambia).
- **ZEMA environmental and waste licensing.** Licensing is low-frequency, no 2025–26 trigger was found, and the portal is ZamPass-gated. Source: [informea](https://www.informea.org/en/legislation/waste-management-licensing-transporters-wastes-and-waste-disposal-sites-regulations-cap).

## Too competitive

- ZRA Smart Invoice issuing (see above).
- Payroll statutory computation and returns (see above).

## Notes for cross-country ranking

- SI 68 / LOCAS follows the same pattern as Ghana's and Nigeria's local-content regimes (and Tanzania's). A LOCAS report builder could be one module of a multi-country "local content reporting" product, which would fix the small Zambian buyer universe.
- The Smart Invoice architecture is copied from Rwanda's EBM/VSDC, so a purchase-side "input VAT guard" could also serve Rwanda.
