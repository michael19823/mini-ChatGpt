# Egypt — Indie-Hacker Opportunity Research (as of 2026-10-04)

**Research constraints (read first):** WebFetch was blocked by network policy for nearly every domain (eta.gov.eg, edaegypt.gov.eg, ahram, zawya, cargox.io, etc.), and the session-wide WebSearch budget ran out partway through. Everything below comes from search-result titles and snippets (about 30 searches, Arabic and English). Facts I could not confirm from a primary source are marked **unverified** or **estimate**. Several of the brief's priority industries could not be screened at all; they are listed at the end as follow-up leads, with no claims made about them.

**Big picture:** Egypt's 2025–2026 "why now" story is dominated by four state-run digital mandates:
1. **ETA e-invoice / e-receipt.** B2C e-receipt has rolled out in waves since 2022, with more phases in 2025. Law 6/2025's simplified SME regime requires these systems to be in use.
2. **ACI / Nafeza.** Pre-registration became mandatory for **air freight from 1 Jan 2026**.
3. **EDA pharmaceutical track-and-trace (EPTTS).** Imported finished medicines from **1 Feb 2026**, local products from **1 Aug 2026**.
4. **The new Labour Law 14/2025**, in force since 1 Sep 2025.

The state usually builds the core portal itself and offers free tools. Large vendors and ERP connectors then cover the mainstream case quickly. The indie gaps are in **file-format/exception layers that the state's first phase leaves manual** (EPTTS Phase 1 = CSV only, no API) and in **multi-party coordination** that falls outside any single portal (ACI air).

---

## Industries screened

| # | Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|---|
| 1 | Pharma importers / MAHs / toll manufacturers | EDA EPTTS serialization event reporting (commissioning/packing CSV upload) | **Opportunity (best)** | Phase 1 is manual CSV with strict validation rules and no API; the importer is legally accountable; enterprise T&T vendors target big manufacturers |
| 2 | Customs brokers / freight forwarders / SME importers | ACI air freight (ACID on Nafeza + exporter upload on CargoX before arrival) | **Opportunity (moderate)** | New Jan-2026 per-shipment mandate with rejection risk; but core steps sit inside government/CargoX platforms and brokers bundle the service |
| 3 | Accounting firms serving SMEs | Multi-client ETA e-invoice/e-receipt monitoring for simplified-regime (Law 6/2025) clients | **Opportunity (weak/needs interviews)** | Tens of thousands of SMEs newly forced onto ETA systems; but accounting SaaS (Wafeq, Daftra, Dexef) already market e-invoicing to accountants |
| 4 | Retail / restaurants / small shops | B2C e-receipt issuance (72-hour transmission) | Too competitive | ETA free POS devices, ETA mobile app, accredited POS vendors, Odoo/ERPNext/Shopify connectors |
| 5 | Doctors / clinics / freelancers | e-receipt per patient visit | Too competitive | Same e-receipt stack; ETA free tools; clinic and accounting software. Simple issuance is not a moat |
| 6 | Pharmacies (~80k) | EPTTS scanning plus e-receipt | Rejected for now | EDA connects pharmacies directly (internet plus an ordinary scanner); dispensing events are out of Phase 1 scope; pharmacy POS vendors are the natural owners |
| 7 | Payroll bureaus / HR | Salary-tax monthly form, NOSI, Labour Law 14/2025 changes | Too competitive | ZenHR, Mercans, ERPNext payroll apps, ETA's unified salary-tax calculation system |
| 8 | Heavy exporters (steel, aluminium, fertilizer, cement) | EU CBAM verified emissions data from 2026 | Too competitive / wrong buyer | Few large buyers; CBAM SaaS already marketed in Egypt; enterprise sales |
| 9 | Agricultural exporters (citrus, strawberries, grapes…) | CAPQ farm coding (التكويد) and shipment traceability | Poor distribution / unverified | Government system plus export council; the recurring paperwork gap could not be verified |
| 10 | Exporters (all sectors) | New EGP 45bn export rebate program FY2025/26–27/28: claim documentation | Attractive problem, unverified workflow | Revenue-linked (cash rebates paid within 90 days of a complete file), but the claim workflow and portal details could not be verified |
| 11 | Healthcare waste generators (clinics/hospitals) | Medical-waste tracking (Ministry of Environment/WMRA website) | Rejected (insufficient evidence) | A government website tracks volumes; no evidence of a per-pickup manifest that generators fill in |

---

## Opportunity: EPTTS Serialization File Compiler for Small Pharma Importers & Toll Manufacturers

**Industry:**
Pharmaceutical import / contract (toll) manufacturing / marketing-authorization holders (MAHs).

**Buyer:**
The regulatory affairs or supply-chain manager at small and mid-size Egyptian pharma importers, MAHs that use toll manufacturers (شركات التصنيع لدى الغير), and logistics service providers that handle imported medicines. These are companies too small to buy a TraceLink/Optel/rfxcel-class platform.

**Trigger / Why now:**
- EDA Decree 161/2025 (29 Apr 2025) set unified GS1 coding for every pack.
- Decree 475/2025 sets the timelines and penalties: **imported finished medicines from 1 Feb 2026, locally produced/packed from 1 Aug 2026**.
- Decree 804/2025 issued the regulatory guideline for the National Unified Electronic Drug Traceability System. It applies to manufacturers, importers, distributors, MAHs and logistics companies.
- EDA's own EPTTS technical FAQ (Phase 1, 2026) states:
  - **CSV is the mandatory submission format in Phase 1.** XML and API come "in later phases".
  - Manual uploads are required.
  - Phase 1 upload supports only the **commissioning and packing** business steps.

**Current workflow (inferred from EDA's Phase-1 rules; to confirm in interviews):**
1. The foreign manufacturer or CMO serializes packs (GTIN, serial, batch, expiry in a GS1 DataMatrix) and aggregates them into cases/pallets.
2. The manufacturer sends serial and aggregation data to the Egyptian importer in its own format (EPCIS XML from its L4 system, Excel, or proprietary exports).
3. The importer, who is **legally accountable** for reporting commissioning, aggregation, shipping and receiving, reformats the data into EDA's CSV template.
4. The importer has to respect EDA's rules:
   - at most 50,000 serials per file;
   - at most 5 batches per commissioning file;
   - production date earlier than event time;
   - events in chronological order;
   - each EIC commissioned before packing;
   - **atomic processing, where any error rejects the entire file**.
5. Staff upload manually to EPTTS, read the rejections, fix them and re-upload, then repeat for every incoming lot.

**Pain:**
- An all-or-nothing file rejection on a 50k-row file, combined with format conversion from many different foreign suppliers, gives the classic "humans are the integration layer" shape.
- The frequency is per import lot.
- It is mandatory, and non-compliant product cannot be sold. The penalties are in Decree 475/2025 (details unverified).
- Law-firm commentary calls drug track-and-trace "the top 2026 compliance risk" (Consortio Law Firm).

**Market size:**
- EDA reports **4,909 importers-register licenses (new or renewal)** issued in 2025, and **2,700+ importers-register procedures and 1,678 importation plans** approved. This likely includes non-medicine importers (unverified split).
- EDA also issued **227 new or renewed warehouse licenses** and **23 toll-manufacturer license addenda** in 2025.
- **Estimate:** a few hundred to roughly 1,500 entities need EPTTS commissioning/packing submissions for medicines.

**Existing solutions:**
- Enterprise T&T vendors explicitly marketing Egypt compliance: **Optel** ("Get ready for Egypt's EDA Track & Trace"), **TraceLink**, **rfxcel**, **LSPedia**, **Vimachem**, **Visiott**, **1DTS TraceHub** (which publishes Egypt regulatory news and EPCIS guides).
- Consultancies: **Freyr**, **Maven Regulatory Solutions**.
- Foreign manufacturers' own L4 systems (they can produce EPCIS, but not necessarily EDA's CSV).
- Substitute: Excel macros built in-house.

**The gap:**
- Enterprise vendors sell full L3–L5 serialization stacks to manufacturers.
- Nobody visibly sells a cheap, importer-side **"any-supplier-format → EDA Phase-1 CSV" converter, pre-validator and splitter**. It would:
  - enforce the 50k/5-batch/chronology/commissioning-before-packing rules;
  - auto-split files;
  - produce a rejection-free upload;
  - keep an audit trail per lot.
- This is a narrow, rules-engine product that the regulator's Phase-1 design creates.

**Possible product:**
A web app where an importer drops the supplier's serial/aggregation export (EPCIS XML, CSV or XLSX). The app maps it to EDA's CSV schema, validates it against every published Phase-1 rule, and splits it into compliant files. It then tracks upload status and rejections per lot, keeps a lot-by-lot evidence archive for EDA inspections, and is ready to switch to API mode when EDA opens Phase 2.

**MVP:**
- EPCIS 1.2/2.0 XML and generic CSV/XLSX parsers.
- EDA Phase-1 CSV generator.
- A validator implementing the FAQ rules.
- An automatic splitter for files over 50k serials or 5 batches.
- A per-lot log.
- No EDA integration needed, because Phase 1 is a manual upload.

**Pricing hypothesis:**
- EGP 4,000–10,000/month (about $80–200) per importer, by lot volume; or
- a per-lot fee of $15–40.
- Benchmark: enterprise T&T platforms are typically priced well above this (estimate; vendor pricing not public).

**How to find first customers:**
- EDA's importers register and licensed-establishment lists (public listing unverified).
- The Chamber of Pharmaceutical Industries and the Federation of Egyptian Industries pharma chamber.
- Pharmacist syndicate and EDA training events for EPTTS. EDA ran nationwide trainings and a launch conference.
- LinkedIn regulatory-affairs managers at Egyptian importers.
- EDA guidance workshops for manufacturers.

**Risks:**
- EDA moves fast to Phase 2 (API/XML), which reduces conversion pain, although an integration layer is still needed.
- EDA publishes a free converter.
- Big vendors bundle a cheap "Egypt importer" tier.
- Foreign suppliers deliver EDA-ready CSV directly.
- Data format changes between FAQ versions (v3 was issued 23 Apr 2026, per the EDA file title).

**Kill condition:**
If 5 of 10 interviewed importers say their foreign suppliers or their forwarder already deliver EDA-ready CSV files that upload without rejections, kill. Also kill if EDA has announced API-only submission with a free mapping tool for H1 2027.

**Score:** 7/10. The trigger is strong and dated, the regulator's own rules are explicit, and the MVP is pure rules and file processing. The market is small, and the window may close when Phase 2 lands.

**Sources:**
- EDA EPTTS Technical FAQ Phase 1 (2026): https://edaegypt.gov.eg/media/paif1cpf/egyptian-track-trace-for-pharmaceutical-eptts-technical-faq-phase-1-_2026.pdf
- EDA EPTTS Technical FAQ v3 (2026): https://www.edaegypt.gov.eg/media/fs1folht/egyptian-track-trace-for-pharmaceutical-eptts-technical-faq-v3_20262.pdf
- EDA Notice to Applicant, EPTTS Phase 1 CSV: https://www.edaegypt.gov.eg/media/11dbtsln/eptts_phase1_csv_.pdf
- 1DTS TraceHub on EDA Decision 804/2025: https://tracehub.1dts.com/RegulationHub/News/113
- Freyr, Decrees 475/2025 & 161/2025: https://www.freyrsolutions.com/blog/egypt-pharma-serialization-track-and-trace-compliance-navigating-decrees-4752025-1612025
- Maven RS 2026 guide: https://www.mavenrs.com/blog/egypt-pharmaceutical-serialization-track-and-trace-compliance-2026
- Optel: https://www.optelgroup.com/en/compliance/egypt-eda-track-and-trace/
- Vimachem: https://www.vimachem.com/resources/blog/egypt-pharma-track-trace-whats-coming-in-2026-and-how-vimachem-can-help-you-comply/
- rfxcel: https://rfxcel.com/egypt-pharmaceutical-supply-chain/
- Consortio Law Firm: https://consortiolawfirm.com/egypt-drug-track-and-trace-compliance/
- EDA 2025 licensing stats: https://edaegypt.gov.eg/en/media-center/news/egyptian-drug-authority-achieves-significant-milestones-in-licensing-pharmaceutical-establishments-during-2025/

---

## Opportunity: ACI Air-Shipment Readiness Desk for Customs Brokers & Forwarders

**Industry:**
Customs brokerage / freight forwarding / SME importers bringing goods to Egypt by air (spare parts, samples, pharma inputs, electronics).

**Buyer:**
The operations manager at Egyptian customs-brokerage and forwarding firms handling air imports for many importers. Secondary buyers are import managers at SMEs with frequent air shipments, and European/Asian forwarders shipping into Egypt.

**Trigger / Why now:**
- **ACI became mandatory for air freight on 1 Jan 2026.** The test phase ran from Sep 2025, and sea freight has been covered since 2021 (Decision 38/2021).
- An air shipment cannot be loaded without a valid ACID registered on Nafeza.
- The government temporarily cut air-cargo fees to US$95 per consignment for six months to protect throughput.
- Transit cargo was exempted from 9 Mar 2026 for three months.

**Current workflow:**
1. The Egyptian importer requests an ACID on Nafeza using the proforma invoice. The ACID is issued within up to about 48 hours.
2. The importer sends the ACID to the foreign exporter. The exporter must be registered on CargoX (with a fee) and include the ACID on the AWB and all shipping documents.
3. The exporter uploads the commercial invoice and other documents to CargoX, at least 48 hours before arrival according to one guide.
4. Final documents must match the ACID data. Mismatches or a missing ACID mean rejection or return at the exporter's expense, and repeat offenders can be cut off from future ACIDs.
5. The broker clears the goods and pays the filing fees. These are US$160 per ACI filing plus $3 per document (capped at $15) for sea; air fees were temporarily reduced.

**Pain:**
- Per-shipment coordination across three or four parties in different countries, under time pressure (air freight is chosen precisely because it is urgent).
- Failure means returned cargo, fees and supplier blacklisting.
- Evidence: German chambers (IHK/GTAI/AHK) and many European forwarders (Kadmar, Nicola Bernard, mid-trans) published dedicated circulars, which signals widespread confusion among foreign exporters.
- I found **no published evidence of widespread 2026 delays**, so pain intensity is unverified.

**Existing solutions:**
- **Nafeza**, the government platform.
- **CargoX**, the mandated document-transfer platform, which has its own dashboard.
- Customs brokers and forwarders who do it manually as a bundled service.
- Large forwarder TMS platforms (e.g., CargoWise; Egypt usage unverified).
- European forwarders' "ACI handling" services.

**The gap:**
- Nobody visibly provides a **cross-party readiness tracker** for a broker managing dozens of importers. It would:
  - pre-check proforma versus commercial invoice consistency (values, HS codes, quantities, exporter tax/registration ID);
  - confirm the exporter's CargoX registration;
  - generate exporter instructions in the exporter's language;
  - flag "ACID not yet on AWB" or "docs not uploaded T-48h" before the flight.
- Whether Nafeza or CargoX expose APIs to third parties is **unverified**. Without them, the product is a coordination and validation layer, which is close to the brief's "generic document collection" trap.

**Possible product:**
A per-shipment checklist and validation board for brokers. The broker creates a shipment and attaches the proforma and ACID. The app sends the exporter a magic link with exact field-level instructions, validates the final invoice against the proforma, and shows red/amber/green status before departure.

**MVP:**
- Shipment board.
- Invoice field extraction and comparison (PDF), done narrowly on ACI-relevant fields.
- Exporter instruction pages in EN/ZH/TR/DE.
- Deadline reminders.
- No government integration.

**Pricing hypothesis:**
$3–8 per shipment, or EGP 3,000–8,000/month per brokerage firm. Compare the per-filing government fee of US$95–175 and the cost of a returned air shipment.

**How to find first customers:**
- The Egyptian customs-brokers register and freight-forwarder associations (exact directories unverified).
- Cairo Cargo Village broker offices.
- LinkedIn.
- European forwarders' Egypt desks (they publish ACI circulars).

**Risks:**
- No API access.
- CargoX or Nafeza add the same checks.
- Brokers see the work as their own value-add.
- Low per-shipment value in a price-sensitive market.

**Kill condition:**
If brokers report fewer than about 3% problem shipments, or if CargoX/Nafeza already provide pre-validation and exporter notifications, kill.

**Score:** 5/10.

**Sources:**
- AHK Egypt: https://aegypten.ahk.de/en/news2/egypt-to-enforce-mandatory-aci-for-air-freight-starting-january-1-2026
- CargoX notice: https://cargox.io/content-hub/mandatory-aci-implementation-for-air-shipments-to-egypt
- Enterprise (27 Aug 2025): https://enterpriseam.com/logistics/2025/08/27/egypt-targets-early-2026-for-nafeza-air-freight-rollout/
- Kadmar circular 64/2025: https://kadmar.com/kadmar-circular-no-64-2025-mandatory-implementation-of-advance-cargo-information-aci-for-air-freight-shipments-to-egypt-effective-1-jan-2026/
- Air Cargo Week (fee cut): https://aircargoweek.com/cairos-digital-customs-reset-egypt-cuts-air-cargo-fees-to-protect-throughput-as-aci-goes-mandatory/
- GTAI: https://www.gtai.de/de/trade/aegypten/zoll/aegypten-vorabregistrierung-von-luftfracht-ab-2026-900750
- AEB (fees): https://www.aeb.com/en/magazine/articles/egypt-cargox-aci-seafreight-airfreight.php
- AHK FAQ: https://aegypten.ahk.de/en/faqs-concerning-the-advanced-cargo-system
- S-GE: https://www.s-ge.com/export/en/article/news/2025-e-egypt-ct10-advanced-cargo-information

---

## Opportunity: Multi-Client ETA Compliance Monitor for Accounting Firms (Simplified-Regime SMEs)

**Industry:**
Accounting / bookkeeping firms (مكاتب المحاسبة) serving micro and small businesses and freelancers.

**Buyer:**
Partners and managers of small Egyptian accounting firms with 30–300 SME clients.

**Trigger / Why now:**
- **Law 6/2025** (the simplified turnover-tax regime, effective 2025) offers SMEs with turnover of EGP 20m or less a tax of roughly 0.4–1.5% of revenue. Benefiting is **conditional on joining and complying with the e-invoice and e-receipt systems** (ETA head, Ahram/Zawya).
- The e-receipt has kept expanding:
  - Decision 455/2024: phase 6, from 15 Jan 2025.
  - Decision 281/2025: phase 8 sub-phase 2, from 15 Sep 2025.
  - Decision 361/2025: phase 9 sub-phase 1, from 15 Nov 2025.
- The ETA is also calling on freelancers and professionals (doctors and others) to register.
- One vendor guide claims the e-invoicing threshold was cut to EGP 250k with registration due by 31 Mar 2026. This is **unverified and conflicts with Arabic sources**, which describe Decision 281/2025 as an e-receipt phase decision.

**Current workflow (hypothesis):**
1. Each client issues e-invoices/receipts, via the ETA portal or mobile app, a free ETA POS, or an ERP/POS.
2. The accountant logs into each client's ETA portal separately to download issued and received documents.
3. The accountant reconciles them with the books and the VAT/simplified return, chases rejected or cancelled documents and missing receipts, and checks that the client stays compliant enough to keep the simplified regime.

**Pain:**
- Many small clients are newly onboarded and each has a separate portal login.
- Losing simplified-regime eligibility is a real financial consequence.
- No direct complaint evidence was found, so pain is **unverified**.

**Existing solutions:**
- **Wafeq** (ETA-certified e-invoicing, Egypt guides).
- **Daftra**.
- **Dexef** (e-invoice software).
- **Qoyod** (pharmacy e-invoicing content).
- **ECOSIRE** connectors for Odoo ($349), ERPNext ($499) and Shopify ($499), one-time.
- The ETA's free portal, mobile app and free POS devices for e-receipt taxpayers without ERP or POS.
- Six-plus ETA-accredited POS suppliers.

**The gap:**
These tools are single-company. A **firm-level dashboard** across all clients would cover:
- compliance status;
- un-submitted receipts beyond 72h;
- received invoices to accept or reject;
- the turnover trend against the EGP 20m regime ceiling.

Whether existing accounting SaaS already has an "accountant portal" doing this is **unverified**.

**Possible product:**
A read-only monitoring console. The accountant enters each client's ETA API client credentials. The app pulls documents nightly and shows exceptions and monthly reconciliation exports.

**MVP:**
- ETA document search/download per client.
- An exception list.
- An Excel export in the VAT/simplified-return layout.

**Pricing hypothesis:**
EGP 50–150 per client per month (a firm with 100 clients pays EGP 5–15k a month). This is an estimate; Egyptian willingness to pay for accounting tools is low.

**How to find first customers:**
- Egyptian Society of Accountants & Auditors and syndicate of commercial professions (member directories unverified).
- Facebook accountant groups.
- ETA workshops.

**Risks:**
- The ETA adds multi-taxpayer views for tax agents.
- Wafeq or Daftra add an accountant hub.
- Credential-sharing concerns.
- Low prices.

**Kill condition:**
Kill if the ETA portal already supports delegated tax-agent access with exception reporting, or if Wafeq/Daftra offer a multi-client compliance view.

**Score:** 4.5/10. The trigger is real, but competition is heavy and the gap is unverified.

**Sources:**
- KPMG e-receipt mandate (Jan 2025): https://kpmg.com/us/en/taxnewsflash/news/2025/01/tnf-egypt-taxpayers-required-comply-mandate-electronic-receipts-b2c-transactions.html
- Comarch, Sep 2025 expansion: https://www.comarch.com/trade-and-services/data-management/legal-regulation-changes/egypt-expands-e-receipt-requirements-for-b2c-transactions-from-september-2025/
- Maspero, Decision 281/2025: https://www.maspero.eg/economy/2025/07/26/878636/
- Ahram, condition for simplified regime: https://gate.ahram.org.eg/News/5544514.aspx
- Ahram, professionals: https://gate.ahram.org.eg/News/5811815.aspx
- Zawya: https://www.zawya.com/en/economy/north-africa/e-invoice-e-receipt-compliance-required-to-benefit-from-simplified-tax-system-egypts-eta-head-b4r659j9
- Bloomberg Tax: https://news.bloombergtax.com/daily-tax-report-international/egypt-tax-agency-posts-law-enacting-small-business-tax-incentive-regime
- Hapi Journal, free ETA POS: https://hapijournal.com/2024/08/11/الضرائب-تتيح-أجهزة-نقاط-البيع-جاهزة-لل/
- Masrawy, 6 accredited POS vendors: https://www.masrawy.com/news/news_economy/details/2022/11/15/2324070/
- Wafeq e-receipt guide: https://www.wafeq.com/ar-eg/
- Dexef: https://dexef.com/apps/electronic-invoice-software
- ECOSIRE: https://ecosire.com/apps/odoo/egypt-eta-e-invoicing
- Al Mal News, doctors and e-receipt: https://almalnews.com/1594043/

---

## Rejected after competitor research

- **B2C e-receipt issuance for shops, restaurants and clinics.** Killed by ETA's own free tools: the mobile app, and free POS devices for taxpayers with no ERP or POS. Also by the accredited POS vendors (Delta for Electronic Systems, Egypt Computer, Arab Consulting Group for IT, and others), plus Odoo/ERPNext/Shopify ETA connectors (ECOSIRE from $349 one-time) and Wafeq/Daftra/Qoyod. The ETA contracted E-Tax to operate the e-receipt system.
- **Pharmacy-side track-and-trace app.** EDA connects 80,000+ pharmacies directly, and their technical requirement is just internet plus an ordinary scanner. Dispensing events are out of EPTTS Phase-1 scope. Pharmacy POS vendors will own any integration. Revisit when EDA opens Phase 2 APIs.
- **Payroll / Labour Law 14/2025 compliance.** Killed by ZenHR (Egypt payroll with tax, social insurance and Labour Law 14/2025 updates such as the 3% increment), Mercans, ERPNext Egypt payroll apps, and the ETA's unified salary-tax calculation system.
- **CBAM emissions reporting for Egyptian exporters.** Few, large buyers in steel, aluminium, fertilizer and cement. "Best CBAM software in Egypt 2026" listings show many vendors, and the government is building its own industrial emissions registry. This is an enterprise sale.
- **Healthcare-waste tracking.** The Ministry of Environment/UNDP/WMRA website already tracks generation and transfer, and no per-pickup generator workflow could be verified.

## Attractive problem, poor distribution (or unverified workflow)

- **Export rebate (رد الأعباء) claim preparation.** The new EGP 45bn, three-year program (FY2025/26–27/28) uses sector-specific criteria and pays within 90 days of a complete file. It is cash-linked, but the claim portal and documents could not be verified, and exporters often rely on export councils and consultants.
- **Agricultural export farm coding and traceability.** CAPQ codes export farms (citrus, strawberry, guava, grapes, pomegranate, pepper, mango, onion) and tracks shipments electronically. The system is government-run, and the remaining exporter-side paperwork gap could not be verified.
- **Small pharma distributors and warehouses for EPTTS shipping/receiving events.** These will matter in later phases, but timing and API are unknown.

## Too competitive

- ETA e-invoice and e-receipt integration in general (ERP connectors, accounting SaaS, POS vendors, free ETA tools).
- HR/payroll (ZenHR, Mercans, ERPNext).
- CBAM MRV software.

## Not screened (follow-up leads; no claims made)

These could not be researched because of the tool limits: UHIS/GAHAR accreditation and UHIA claims for private clinics and labs; the Personal Data Protection Law executive regulations and licensing; insurance brokers under Insurance Law 155/2024; QIZ textile exporters' per-shipment content documentation; NFSA food-establishment and export registration.
