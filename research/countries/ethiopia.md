# Ethiopia: country research (global opportunity study)

Research date: 2026-10-04/05. Budget: 18 WebSearch calls (large market). WebFetch not used.
Everything below comes from search-result snippets. Anything not confirmed by a source is marked **unverified** or **estimate**.

## Accessibility check

- **Sanctions:** I found no US/EU/UK sanctions regime covering software sales to Ethiopia (not separately searched, so **unverified**). Ethiopia has also opened up to foreign investors. Investment rules now use a negative list, so every sector is open unless a law restricts it. New software/cloud businesses get a 4-year income-tax holiday ([Mondaq 2026 guide](https://webiis08.mondaq.com/inward-foreign-investment/1763740/foreign-investment-in-ethiopia-the-complete-legal-guide-2026), [Shega](https://mediav3-dev.shega.co/news/software-developers-cloud-service-providers-get-tax-holidays)).
- **Payment rails:** this is the hard part. The birr was floated in 2024 (FXD/01/2024), with further easing in FXD/04/2026 ([PwC](https://taxsummaries.pwc.com/ethiopia/corporate/significant-developments)). Even so, most SMEs cannot easily pay a foreign SaaS by card. International card settlement is only now being connected: EthSwitch opened an international settlement account in Aug 2026 ([Capital](https://capitalethiopia.com/2026/08/08/ethswitch-opens-international-settlement-account-to-support-global-card-services/)). In practice a foreign founder would bill in birr through a local partner or entity (Telebirr or bank transfer) and repatriate the money.
- **Regulated software:** the new e-invoicing directive requires invoicing software vendors to be accredited and to post a guarantee of USD 15k–50k (see below). A foreign solo founder cannot realistically sell invoice-issuing software without a local accredited partner.
- **Conflict:** parts of Amhara and Tigray are unstable (general knowledge, not searched). Addis Ababa, where most buyers are, is reachable.
- **Verdict:** accessible, with a local partner. It is not a market a solo founder can enter by self-serve card billing.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| All VAT/bookkeeping taxpayers (accountants, SMEs) | Real-time e-invoice registration with MoR (Directive 1142/2026) | **Shortlist** | New mandate (June 2026); large taxpayers by end-2026; legacy/desktop accounting has no MoR connector |
| Accountants / audit firms | Purchase-side VAT input and withholding reconciliation against registered e-invoices | **Shortlist (conditional)** | New invoice registry creates matching work; depends on MoR exposing buyer-side data |
| Coffee exporters | EUDR due-diligence evidence for EU buyers | Shortlist (weak) | Real deadline (30 Dec 2026), but the free government ECTMS and foreign traceability vendors cover most of it |
| Pharma importers / wholesalers | GS1 serialization and event reporting to EFDA-MVC hub | Attractive problem, poor distribution | Mandate is real; burden falls mostly on foreign manufacturers, already served by global serialization vendors |
| Employers / payroll bureaus | PAYE (new 1395/2025 bands) + POESSA pension monthly filings | Too competitive | Demoz, Odoo l10n_et_payroll modules, HST payroll, local consultants |
| Government suppliers | e-GP supplier registration and tendering | Rejected | Free government e-GP portal; 135k suppliers already registered; low willingness to pay |
| Importers / exporters / customs brokers | eSW import/export permits, NBE account numbers | Rejected | Government eSW connects 16 agencies; brokers do the work manually at low cost; too hard to integrate |
| Withholding-tax agents | Withholding receipts after the Aug 2025 rate changes | Folded into reconciliation idea | Not a standalone product |

## Opportunities

### Opportunity: MoR e-invoice bridge for legacy/desktop accounting users

**Industry:**  
Cross-sector SMEs and mid-size VAT-registered firms (trading, construction, manufacturing, services) and the accounting firms that keep their books.

**Buyer:**  
Finance manager or chief accountant at a VAT-registered company that runs desktop accounting (Peachtree/Sage 50 is commonly reported in Ethiopia, **unverified**), Excel, or a home-grown system. A second buyer is the outsourced accounting firm serving many such clients.

**Trigger / Why now:**  
Electronic Invoicing System Administration Directive No. 1142/2026 (signed June 2026) makes e-invoicing mandatory for taxpayers required to keep books. Invoices must be transmitted in real time to MoR's central registration system, which returns an Invoice Registration Number and a QR code. Rollout is phased. Large and VAT taxpayers are targeted by end-December 2026, and MoR has not yet published the full rollout schedule. Taxpayers may not use software from uncertified vendors. Transactions recorded on unauthorized software risk being disallowed for deductions.

**Current workflow:**  
1. Invoice is created in Peachtree, Excel or a handwritten/cash-register receipt book.  
2. Monthly VAT and withholding declarations are compiled by hand from those records and filed on the MoR e-Tax portal.  
3. After the mandate, each invoice will need an API call (System Number, API Key, Client Secret), a returned IRN and QR on the printed invoice, a 72-hour offline reconciliation path, and audit logs. None of this exists in desktop or legacy tools.

**Pain:**  
Statutory and per-invoice, with penalties and loss of deductibility for non-compliant invoices. Law-firm notes say vendors and in-house developers must be certified, and accredited providers carry guarantees and liability ([Kiya Law](https://kiyalaw.com/insights/ethiopia-e-invoicing-directive-1142-2026/), [Eagle Advocates](https://eagleadvocates.com/ethiopia-electronic-invoicing-system-directive-1142/)).

**Existing solutions:**  
- Odoo-based local partners: Marakisoft (e-invoice offering), Hybrid ERP PLC (Ethiopian accounting module), Sucros Clear IT, "Ethio Custom Tax Config" module ([Odoo apps](https://apps.odoo.com/apps/modules/18.0/ethio_custom_tax_config), [Marakisoft](https://linkedin.com/company/marakisoft)).  
- Zoha Global Solutions publishes ERP e-invoicing compliance guides, so it is likely an integrator ([Zoha](https://zohaglobalsolutions.com/erp-e-invoicing-compliance-ethiopia/)).  
- Global e-invoicing vendors (EDICOM and others) for multinationals ([EDICOM](https://edicomgroup.com/blog/mandatory-electronic-invoicing-ethiopia)).  
- Existing sales-register/cash-register machine suppliers (local, not named in results).  
- MoR may offer a free web portal for low-volume issuers (**unverified**, a key risk).

**The gap:**  
The Odoo partners sell full ERP migrations. Global vendors target multinationals. Nobody has been found offering a cheap "keep your Peachtree/Excel, we register the invoice" bridge that handles:  
- import or print-intercept of invoices from desktop tools;  
- IRN/QR stamping;  
- the 72-hour offline queue;  
- reconciling registered invoices back to the books for the monthly VAT return.

**Possible product:**  
A certified SaaS invoicing layer. Invoices are typed in or imported (CSV/Peachtree export) and registered with MoR. The tool prints an Amharic/English invoice with the QR code and produces a month-end register that ties registered invoices to the VAT declaration.

**MVP:**  
Web form plus CSV import → MoR registration API → PDF invoice with IRN/QR → offline queue → monthly register export. Single tenant per accounting firm with many client companies.

**Pricing hypothesis:**  
ETB 1,500–5,000/month per company (about USD 10–35, **estimate**), or a per-invoice tier. Accounting firms resell to their clients.

**How to find first customers:**  
- MoR large-taxpayer and VAT-registrant lists (public availability **unverified**).  
- Ethiopian accounting firm associations, e.g. AABE-registered auditors (**unverified**).  
- Chambers of commerce (Addis Ababa Chamber).  
- Partnering with existing cash-register suppliers.

**Risks:**  
- Accreditation and the USD 15k–50k guarantee ([Reporter](https://www.thereporterethiopia.com/51673/)).  
- Probable local-entity requirement.  
- The MoR rollout schedule is still unpublished.  
- MoR might ship a free portal.  
- Odoo partners move fast.  
- Prices are low in USD terms.

**Kill condition:**  
Any of these: (a) MoR ships a free web/mobile issuance tool that SMEs accept; (b) accreditation requires an Ethiopian-owned entity and a foreign-backed partner is not possible; (c) Sage/Peachtree resellers ship a certified plug-in first.

**Score:** 6/10

**Sources:**  
- https://edicomgroup.com/blog/mandatory-electronic-invoicing-ethiopia  
- https://www.vatcalc.com/ethiopia/ethiopia-adopts-e-invoicing-framework/  
- https://www.thereporterethiopia.com/51673/  
- https://kiyalaw.com/insights/ethiopia-e-invoicing-directive-1142-2026/  
- https://eagleadvocates.com/ethiopia-electronic-invoicing-system-directive-1142/  
- https://www.feyselandassociates.com/insights/articles-and-updates/ethiopia-introduces-electronic-invoicing-directive-no-11422026/  
- https://lookuptax.com/tax-changes/ethiopia/electronic-invoicing-directive-1142-2026  
- https://www.vatupdate.com/2026/10/01/e-invoicing-in-ethiopia-requirements-scope-and-implementation-timeline/  
- https://www.ey.com/en_gl/technical/tax-alerts/ethiopia-introduces-new-vat-proclamation-introducing-raft-of-changes  
- https://zohaglobalsolutions.com/erp-e-invoicing-compliance-ethiopia/

---

### Opportunity: VAT-input and withholding reconciliation for accounting firms

**Industry:**  
Accounting / bookkeeping firms and in-house finance teams.

**Buyer:**  
Partner at a small accounting or audit firm handling the monthly VAT and withholding declarations of 20–200 client companies.

**Trigger / Why now:**  
- Once invoices are cleared through MoR (Directive 1142/2026), MoR can match buyers' input-VAT claims against registered supplier invoices.  
- The new VAT Proclamation 1341/2024 tightened invoice and notification rules.  
- Income Tax Amendment Proclamation 1395/2025 changed withholding rates, with domestic withholding effective 7 Aug 2025.

Mismatches between buyer claims, supplier registrations and withholding receipts become audit triggers.

**Current workflow:**  
1. Collect paper invoices and withholding receipts from the client.  
2. Key them into Excel or Peachtree.  
3. Compute VAT payable and withholding, then file on e-Tax.  
4. Answer MoR queries about mismatches by hunting for paper.

**Pain:**  
Monthly and mandatory. Denied input VAT is a direct cash cost. Evidence of the specific post-mandate mismatch pain is inferred, not observed (**unverified**).

**Existing solutions:**  
- Excel and manual work.  
- Odoo Ethiopian tax and report packs (OE Accounting Ethiopia Reports Pack, Ethio Custom Tax Config).  
- Peachtree.  
- Local accounting consultants.

**The gap:**  
No tool was found that pulls a client's registered purchase invoices (if MoR exposes them) and matches them to claimed input VAT and issued withholding receipts across many clients.

**Possible product:**  
A multi-client reconciliation dashboard. Upload purchase ledgers, match them against registered e-invoices (by IRN/QR scan or MoR data), flag invoices that are unregistered or mismatched, and produce working papers for the declaration.

**MVP:**  
QR-scan or IRN entry of purchase invoices, CSV ledger import, a matching rules engine and an exception list per client per month. This is read-only and does not issue invoices, so it may avoid the accreditation track (**unverified**).

**Pricing hypothesis:**  
ETB 300–800 per client-company per month, sold to the accounting firm (**estimate**).

**How to find first customers:**  
- Accounting firm directories and professional association member lists.  
- LinkedIn Addis Ababa accounting firms.  
- Co-selling with the e-invoice bridge above.

**Risks:**  
- MoR may not expose buyer-side invoice data via API.  
- Low prices in birr.  
- Firms may accept manual work.

**Kill condition:**  
MoR provides no buyer-side lookup or verification endpoint and the QR does not encode verifiable data. In that case matching collapses to generic OCR.

**Score:** 5/10

**Sources:**  
- https://www.ey.com/en_gl/technical/tax-alerts/ethiopia-introduces-new-vat-proclamation-introducing-raft-of-changes  
- https://kpmg.com/ke/en/home/insights/2025/08/income_tax_amendment_proclamation_no_1395_2025_ethiopia.html  
- https://www.ey.com/en_gl/technical/tax-alerts/ethiopia-issues-a-new-income-tax-proclamation  
- https://www.vatupdate.com/2026/10/02/ethiopia-e-invoicing-and-e-reporting-framework/  
- https://apps.odoo.com/apps/modules/14.0/oe_l10n_et_pack

---

### Opportunity: EUDR buyer-pack generator for Ethiopian coffee exporters

**Industry:**  
Coffee exporters (washing stations, exporter-processors, unions).

**Buyer:**  
Export/compliance manager at a licensed coffee exporter selling to EU roasters and importers.

**Trigger / Why now:**  
EUDR applies to large operators from 30 Dec 2026 and to micro/small operators from 30 Jun 2027. The national ECTMS traceability platform was handed over to ECTA in March 2026. Coffee earned more than USD 2bn in 2024/25 and the EU takes about 30% of exports.

**Current workflow:**  
1. Each EU buyer asks for geolocation polygons, lot-to-farm linkage and a deforestation-risk statement in its own template.  
2. The exporter extracts data from ECTMS or its own records and supplier lists.  
3. The exporter reformats it per buyer by email and Excel.

**Pain:**  
Losing EU market access. Some exporters are reportedly pivoting to China instead ([Capital, Sep 2026](https://capitalethiopia.com/2026/09/27/coffee-exporters-turn-to-china-as-eu-deforestation-rules-loom/)). The long value chain and informal trading make it hard to link lots to farms.

**Existing solutions:**  
- ECTMS (government, free, GIZ-built).  
- TraceX (EUDR DDS for Ethiopian coffee).  
- CropGPT and other agritech players.  
- EU importers' own platforms.  
- Specialty-coffee traceability services (e.g. ethiocoffee.co content).

**The gap:**  
Possibly only the "one export lot → N buyer-specific evidence packages" formatting from ECTMS exports. That gap is narrow and the EU's own information system standardises the DDS.

**Possible product:**  
Import ECTMS lot data, map it to each buyer's template and GeoJSON spec, and track which buyer received what.

**MVP:**  
GeoJSON validator plus a per-buyer template filler for ECTMS exports.

**Pricing hypothesis:**  
USD 50–150 per month per exporter, or per shipment (**estimate**).

**How to find first customers:**  
ECTA licensed exporter list; Ethiopian Coffee Exporters Association (**unverified** directory availability).

**Risks:**  
- ECTMS adds buyer exports itself.  
- TraceX and others are already there.  
- The EUDR timeline has been postponed before.  
- Exporters are shifting away from the EU.

**Kill condition:**  
ECTMS outputs EU-information-system-ready DDS data directly, or EU buyers accept ECTMS certificates as they are.

**Score:** 4/10

**Sources:**  
- https://www.ecofinagency.com/news/3103-54267-ethiopia-builds-digital-coffee-tracking-system-to-protect-access-to-eu-market  
- https://www.ecofinagency.com/news-agriculture/3003-54240-ethiopia-completes-coffee-traceability-system-as-eu-deforestation-deadline-nears  
- https://www.mofed.gov.et/blog/ethiopia-accelerates-efforts-to-ensure-eu-deforestation-regulation-compliance-for-coffee-exports/  
- https://efi.int/sites/default/files/2026-07/a-guide-to-the-ethiopian-coffee-value-chain-in-the-context-of-the-eudr.pdf  
- https://tracextech.com/eudr-dds/coffee-supply-chain-ethiopia/  
- https://capitalethiopia.com/2026/09/27/coffee-exporters-turn-to-china-as-eu-deforestation-rules-loom/

## Rejected after competitor research

- **Payroll/PAYE + POESSA pension filing** (new tax bands under Proclamation 1395/2025). Killed by Demoz, Odoo `l10n_et_payroll` and `modern_ethiopian_payroll` modules, HST payroll ([HST](https://hst-et.com/services/technology/payroll-management-system)), Peachtree payroll and global EOR players. Low willingness to pay ([Odoo app](https://apps.odoo.com/apps/modules/18.0/l10n_et_payroll), [Demoz](https://saasbrowser.com/ar/saas/1531667/demoz)).
- **Government-tender (e-GP) bidding assistant.** Killed by the free government e-GP portal, which already has 135k+ registered suppliers and free tender documents ([trade.gov](https://trade.gov/market-intelligence/ethiopia-e-procurement-platform-provides-easy-access-public-tenders)). Local tender-alert aggregators also exist (**unverified**, not searched). Low willingness to pay.
- **Customs/eSW import-export permit automation.** Killed by the government eSW, which connects 16 agencies, plus customs agents and transitors doing the work cheaply. No third-party API was found ([World Bank](https://www.worldbank.org/en/news/feature/2020/04/23/in-ethiopia-electronic-single-window-cuts-costs-and-time-to-trade), [NBE](https://nbe.gov.et/nbe_news/national-bank-of-ethiopia-streamlines-nbe-account-number-issuance-for-new-importers-and-exporters-through-the-customs-electronic-single-window/)).

## Attractive problem, poor distribution

- **Pharma serialization/event reporting to the EFDA-MVC Traceability Hub.** Full reporting was due 3 Jun 2026, with an aggregation grace period to 1 Dec 2026. The obligation sits mainly with foreign manufacturers and exporters, who buy from LSPedia, TraceLink and similar vendors. Local wholesaler and pharmacy obligations and timing are unclear, and EPSS (government) dominates volume ([Addis Fortune](https://addisfortune.news/efda-launches-pharmaceutical-traceability-hub/), [LSPedia](https://www.lspedia.com/regulation/ethiopia)).

## Too competitive

- Payroll / HR (see above).
- Full ERP e-invoicing migrations: Odoo local partners (Marakisoft, Hybrid ERP, Sucros Clear) plus global vendors such as EDICOM.

## Notes / unverified

- Peachtree/Sage 50 being dominant among Ethiopian SMEs is widely assumed but was **not** confirmed by search.
- Whether e-invoice accreditation requires an Ethiopian-owned entity was **not** confirmed.
- The MoR rollout schedule for e-invoicing has not been published as of early Oct 2026.
