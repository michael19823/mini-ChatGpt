# Sri Lanka: Indie Software Opportunity Research

Researched 2026-10-05, using 15 web searches (mid-size market budget). WebFetch was not used, so all facts come from search result summaries. Anything marked "unverified" or "estimate" was not confirmed from a primary source.

**Accessibility:** Sri Lanka is not under US, EU or UK sanctions. A foreign solo founder can sell SaaS there, and LKR card and bank payments work through local resellers or Stripe-alternative gateways (gateway specifics not verified). Since 2022 the macro environment has been fragile (IMF programme, tax hikes), so SME budgets in LKR are tight. Two things would block a foreign vendor: no local entity, and LKR price sensitivity. Neither is a legal barrier.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| All VAT-registered businesses (traders, distributors, manufacturers) | Sending real-time VAT invoices to IRD RAMIS through the Web API (2026 Budget e-invoicing) | **Opportunity** | New mandate. Phase 2 covers all VAT-registered persons, and SMEs on QuickBooks, Tally, Excel or legacy local ERPs have no connector. |
| Natural rubber (dealers, processors, exporters) | EUDR geolocation and Due Diligence Statement per shipment, due 30 Dec 2026 | **Opportunity (moderate)** | Hard deadline and a smallholder-heavy supply chain. The market is small, and TraceX/SGS plus an EU-funded programme compete. |
| Importers / customs house agents | Getting SLSI CIIS and other agency approvals before cargo arrives and before the CusDec can be filed | **Opportunity (weak, time-limited)** | Clear pain, but the Trade National Single Window pilot (end 2026, full 2027) may absorb it. |
| Tea (bought-leaf factories, brokers) | Green-leaf supplier payouts; tea brokers' e-invoice transmission | Rejected | AgriGEN ERP and broker systems already cover it. Brokers have been on the RAMIS API since 1 May 2026. |
| Fisheries exporters | EU CATCH digital catch certificate (from 10 Jan 2026) | Rejected / poor distribution | Mandatory for EU importers, voluntary for non-EU operators. Few exporters, and the state (DFAR) issues the certificates. |
| Employers (payroll) | EPF/ETF monthly e-returns via the EPF Online Services System | Rejected | Payroll software already covers it. The CBSL portal was consolidated in 2025 and a Labour–CBSL integration is under way. |
| Pharmacies | NMRA licence renewal (online-only portal since 21 Apr 2026) | Rejected | Annual frequency, and the regulator's portal is the tool. |
| Factories (all categories) | CEA Environmental Protection Licence renewal and compliance | Poor distribution / frequency | Real penalties (41 factories closed in 2025), but renewals are infrequent and consultants handle them. |
| All mid-size firms | PDPA (Act No. 9 of 2022): DPO, DPIA, breach notification, effective 1 Jan 2027 | Too competitive / generic | Global privacy SaaS plus local consultancies (Xapi, EY, law firms). It is the "generic compliance" trap. |

---

### Opportunity: RAMIS e-Invoice Connector for SME VAT Filers

**Industry:**
Cross-industry: VAT-registered SMEs (distributors, wholesalers, mid-size manufacturers, service firms) and the accounting/audit firms that keep their books.

**Buyer:**
The finance manager or owner of a VAT-registered company with annual turnover from Rs 60m (about US$200k) to roughly Rs 2bn, using QuickBooks, Tally, Excel or a small local ERP. Second buyer: chartered/tax accounting practices that file VAT for many such clients.

**Trigger / Why now:**
IRD Notice SEC/PN/VAT/2026-03 (4 May 2026) launched the National e-Invoicing System under Budget 2026. ERP systems send VAT invoice and schedule data to RAMIS in real time over a Web API. The schedules are Sch 01 output tax, Sch 04 credit/debit notes and Sch 07 zero-rated supplies. The pilot covered garment exporters, tea exporters and tea manufacturers (through brokers, from 1 May 2026). Phase 1 extends to export-oriented firms, Phase 2 to all VAT-registered persons, and a later phase adds B2C via POS. Full Web API integration is targeted for end 2026. The proposed threshold cut to Rs 36m was abandoned on 23 Jun 2026, so the threshold stays at Rs 60m per year or Rs 15m per quarter.

**Current workflow:**
1. Invoices are issued from QuickBooks, Tally, Excel or a local billing package. Many of these lack the SL-specific VAT invoice fields.
2. Every month, an accountant exports sales and credit notes and rebuilds the VAT schedules in the IRD's Excel/CSV format.
3. The schedules are uploaded to the RAMIS e-services portal with the VAT return. Errors (wrong buyer TIN, missing invoice numbers) are fixed by hand.
4. Under e-invoicing, every invoice must go out in real time over the API. Packages that cannot call the API leave a gap that humans or the vendor have to fill.

**Pain:**
The mandate is official, real-time and per-invoice, so frequency is daily. VAT mismatches lead to IRD queries and denied input credit. The pilot was limited to firms "whose ERP systems have been upgraded", which signals that most SME systems have not been. Local vendors already market "IRD-compliant ERP" (accsoft.lk). That shows demand, and it also shows the competition.

**Existing solutions:**
- Large-company ERP partners (SAP, Oracle, IFS and Microsoft Dynamics resellers in Colombo) building custom connectors.
- Global e-invoicing networks: Pagero / Thomson Reuters track Sri Lanka, and Sovos and others are likely to follow (unverified).
- Local ERP and accounting vendors adding native RAMIS API support, such as AccSoft (accsoft.lk).
- IRD's own RAMIS portal: Excel schedule upload for non-API filers, if the IRD keeps it.
- Accounting firms filing schedules by hand.

**The gap:**
No neutral, low-cost middleware has been confirmed that takes invoices from QuickBooks Online/Desktop, Tally, Zoho Books or CSV exports, validates them against the IRD schema (buyer TIN, zero-rating codes, credit-note links) and pushes them to RAMIS with retry and exception queues. Global vendors target large companies. Local ERP vendors only connect their own product. Accountants handling 20–100 clients need a multi-client console.

**Possible product:**
A cloud connector that pulls invoices from popular SME accounting tools, or accepts CSV/Excel, and validates them against RAMIS rules. It transmits each invoice in real time, reconciles what was accepted against the books, and builds the monthly VAT schedules automatically. There is also a multi-client dashboard for accounting firms.

**MVP:**
QuickBooks Online plus CSV upload → TIN/field validation → RAMIS Web API submission → exception queue → month-end Sch 01/04/07 reconciliation report. This only works if the IRD lets third-party intermediaries or service providers call the API on a taxpayer's behalf.

**Pricing hypothesis:**
LKR 6,000–15,000 (about US$20–50) per company per month by invoice volume. For accounting firms, LKR 2,500 per client per month. Value comes from avoiding VAT penalties and denied input credit.

**How to find first customers:**
- IRD publishes VAT registrant lookups by TIN, but no bulk list was confirmed.
- CA Sri Lanka (Institute of Chartered Accountants) member-firm directory.
- CMA Sri Lanka and AAT Sri Lanka practitioner networks.
- Chambers: Ceylon Chamber of Commerce, National Chamber, regional chambers.
- Local QuickBooks/Tally reseller partners as a channel.
- Tax-advisory publishers already covering the topic (taxadvisor.lk, Lanka Tax Club).

**Risks:**
- The IRD may only certify ERP vendors or approved service providers, and a foreign solo founder may struggle to qualify.
- The IRD may keep a free Excel upload path for small filers, which would make the product a nice-to-have.
- Phase 2 dates may slip, as Sri Lankan reforms often do.
- Tally and QuickBooks may add native connectors, as Tally did in India.
- Customers are price-sensitive in LKR.

**Kill condition:**
The IRD does not allow third-party intermediaries to transmit on a taxpayer's behalf. Or the IRD launches a free web invoice-entry portal that SMEs are allowed to use instead of the API. Or Tally/QuickBooks announce native RAMIS support before Phase 2.

**Score:** 6.5/10

**Sources:**
- https://www.ird.gov.lk/en/Lists/Latest%20News%20%20Notices/Attachments/781/PN_VAT_2026-03_E.pdf
- https://www.taxadvisor.lk/article/einvoicing
- https://www.vatupdate.com/2026/05/09/sri-lanka-launches-national-e-invoicing-system-for-vat-under-2026-budget-full-rollout-by-year-end/
- https://www.vatupdate.com/2026/05/14/sri-lanka-ird-announces-vat-invoice-data-integration-via-web-api-for-erp-systems/
- https://www.globalvatcompliance.com/globalvatnews/sri-lanka-e-invoicing-system/
- https://www.vatupdate.com/2025/12/26/sri-lanka-unveils-three-phase-electronic-invoicing-reform-to-modernise-vat-and-boost-digital-economy/
- https://europe.thomsonreuters.com/uk/compliance/regulatory-updates/sri-lanka
- https://accsoft.lk/blog/ird-compliant-erp-software-for-vat-invoicing-in-sri-lanka/
- https://lankataxclub.lk/sri-lankas-digital-tax-revolution-5-things-you-need-to-know-about-the-new-national-e-invoicing-system/
- https://beancount.io/blog/2026/09/24/sri-lanka-vat-threshold-reversal-60-million-registration-guide
- https://kpmg.com/us/en/taxnewsflash/news/2025/11/sri-lanka-budget-2026-tax-proposals.html

---

### Opportunity: EUDR Plot-to-Shipment Pack for Sri Lankan Rubber Dealers and Exporters

**Industry:**
Natural rubber: smallholder collection, dealers, crepe and sheet processors, exporters and rubber-product manufacturers supplying the EU.

**Buyer:**
The compliance or export manager at a mid-size rubber exporter or processor, or a rubber-products manufacturer (gloves, tyres, mats) exporting to the EU. Also smallholder societies supplying them.

**Trigger / Why now:**
EUDR due-diligence obligations apply to large and medium operators from 30 Dec 2026. Every EU shipment needs a Due Diligence Statement traceable to the farm plot with geolocation. Sri Lanka is classified "low risk", so simplified due diligence applies, but plot geolocation is still required. An EU-funded Green Recovery Facility workshop in June 2026, with 80+ stakeholders, set out the gaps.

**Current workflow:**
1. Dealers buy latex and sheet from many smallholders, recording it in paper books or Excel with no plot coordinates.
2. Exporters ask suppliers for land deeds or GPS points ad hoc and get them by WhatsApp or paper.
3. EU buyers send their own questionnaires. Exporters assemble PDFs per shipment by hand.
4. Each lot must be mapped to plots for the DDS reference, and mixing at the processor breaks the chain.

**Pain:**
The requirement is mandatory and per shipment. The EU importer can reject non-compliant lots. About 70% of global natural rubber comes from smallholders, which makes the supply chain hard to trace. Sri Lanka's rubber sector is already described as "struggling" (LNW), so losing EU access would be costly.

**Existing solutions:**
- TraceX (EUDR rubber tools for exporters).
- SGS Sri Lanka (EUDR verification services).
- The EU Green Recovery Facility capacity-building programme, which offers free assessments.
- Large plantation companies' in-house estate systems.
- EU buyers' supplier portals.
- Global EUDR SaaS (Koltiva, Satelligence and others, not verified for Sri Lanka).

**The gap:**
A cheap, Sinhala-language, dealer-level tool is missing. It would collect smallholder plot polygons on a phone, link daily purchases to plots, and roll lots up into a buyer-ready EUDR data file (GeoJSON plus DDS fields). Global tools are priced for the importer or large exporter. Plantation companies only cover their own estates.

**Possible product:**
A mobile-plus-web app for rubber dealers and processors with plot capture, purchase-to-plot ledger, lot mass-balance and EU-buyer export pack.

**MVP:**
Smallholder registry with GPS polygon capture (offline), purchase receipts linked to plot IDs, and lot export to GeoJSON and CSV in EU TRACES DDS format.

**Pricing hypothesis:**
US$50–150 per month per dealer or processor, or US$1–3 per smallholder plot per year paid by the exporter.

**How to find first customers:**
- Rubber Development Department and Rubber Research Institute registries of dealers and processors (unverified availability).
- Sri Lanka Association of Manufacturers and Exporters of Rubber Products (SLAMERP).
- Colombo Rubber Traders' Association.
- Participants in the EU Green Recovery Facility workshops.
- EDB exporter directory.

**Risks:**
- The market is small: EU-bound volume is a fraction of a niche export.
- The "low risk" classification may reduce what buyers demand.
- EUDR has already been delayed twice and could be simplified again.
- Donor programmes may give away free tools, and TraceX already targets the segment.

**Kill condition:**
EU importers accept country-level low-risk declarations without plot geolocation. Or a donor-funded national rubber traceability system is made free to dealers. Or fewer than about 50 EU-exporting rubber firms exist.

**Score:** 5/10

**Sources:**
- https://www.eeas.europa.eu/delegations/sri-lanka/sri-lanka%E2%80%99s-rubber-industry-prepares-eu-deforestation-regulations-through-eu-funded-capacity_en
- https://tracextech.com/eudr-compliance-tools-rubber-exporters/
- https://tracextech.com/eudr-rubber/
- https://growbeyondborders.ai/insights/market-insight/eudr-enforcement-2026-exporter-guide/
- https://www.sgs.com/en-lk/service-groups/eu-deforestation-regulation-eudr
- https://lankanewsweb.net/archives/220509/eu-support-offers-lifeline-to-struggling-sri-lanka-rubber-sector/
- https://themorningmoney.com/articles/cmrsxu7ca00033j6s9alluddk

---

### Opportunity: Pre-Arrival Import Approval Tracker (SLSI CIIS and Other Agency Approvals) for Customs House Agents

**Industry:**
Customs house agents (CHAs), freight forwarders and SME importers of regulated goods: food, cosmetics, electricals, building materials and toys.

**Buyer:**
Operations head at a CHA or forwarder handling many importers. Second buyer: the import manager at a mid-size trading company.

**Trigger / Why now:**
SLSI Compulsory Import Inspection Scheme schedules were expanded: Schedule I(A) to 127 goods from 17 May 2024 and Schedule I(B) to 34 goods from 15 Nov 2024. Consignments need a CoC from an accredited lab or the exporting country's standards body, or must come from an SLSI-registered plant. The CusDec cannot be filed until the Delivery Order is issued. The Trade National Single Window pilot (six agencies) is due by end 2026, with all 18 agencies by 2027.

**Current workflow:**
1. The importer places an order without checking whether the HS code falls under SLSI CIIS or another agency's approval list (food control, NMRA, TRC and others).
2. Cargo arrives. The CHA discovers the missing approvals and chases CoCs and test reports from the overseas supplier by email.
3. Approval applications go agency by agency, while demurrage and storage charges build up.
4. The CHA files the CusDec in ASYCUDA once approvals and the DO are in hand.

**Pain:**
Sources say Sri Lanka's most frequent import failures come from approvals not being in place before cargo arrives. SLSI non-compliance means sampling and testing delays or rejection. Every day of delay costs demurrage.

**Existing solutions:**
- CHA staff knowledge and Excel HS lists.
- Sri Lanka Trade Information Portal (World Bank–backed, free HS-to-requirements lookup).
- Global freight-forwarding software (CargoWise and others, used by large forwarders; local adoption unverified).
- Importer-of-record service providers.
- The coming TNSWS.

**The gap:**
No tool was found that checks an importer's purchase order or proforma HS codes against current SLSI, food and NMRA schedules before shipment, then tracks CoC collection from the supplier through to approval status. The Trade Information Portal tells you the rules but does not track your shipments.

**Possible product:**
An HS-code pre-shipment checker plus a per-shipment approval and document tracker with supplier upload links, aimed at CHAs managing dozens of importers.

**MVP:**
An HS-code rules table (SLSI Schedules I(A)/I(B) plus 2–3 other agencies), a PO upload that flags required approvals, a supplier document-request link, and a status board per shipment.

**Pricing hypothesis:**
US$30–80 per month per CHA seat, or US$3–5 per shipment.

**How to find first customers:**
- Sri Lanka Customs licensed CHA list (published, but not verified in this session).
- Sri Lanka Freight Forwarders Association (SLFFA) member directory.
- Import Section of the Ceylon Chamber of Commerce.

**Risks:**
- TNSWS may integrate approvals and pre-arrival checks for free from 2027.
- Keeping the rules up to date is constant manual work.
- CHAs are low-margin and may resist paying.
- Willingness to pay is unvalidated.

**Kill condition:**
The TNSWS pilot includes SLSI and food-control pre-arrival approval with HS-based alerts. Or interviews show CHAs rarely get caught by missing approvals.

**Score:** 4/10

**Sources:**
- https://slsi.lk/?p=2935
- https://slsi.lk/web/wp-content/uploads/2024/07/QA_PR_7.1_07-Ruls-pro.-Sche.-doc.-Iss-05.pdf.
- https://enviliance.com/regions/south-asia/lk/report_12215
- https://carraglobe.com/importer-of-record-sri-lanka/
- https://www.dailymirror.lk/print/breaking-news/Sri-Lanka-on-track-for-2026-NSW-pilot/108-323216
- https://bizenglish.adaderana.lk/sri-lanka-advances-national-single-window-initiative-to-streamline-trade-facilitation/
- https://blogs.worldbank.org/endpovertyinsouthasia/bringing-local-traders-one-step-closer-global-market-sri-lanka

---

## Rejected after competitor research

- **Tea bought-leaf factory supplier payouts and Tea Board returns.** About 450 private bought-leaf factories make this a real workflow. It is killed by AgriGEN ERP, which specifically automates green-leaf procurement, monthly leaf-rate updates and deductions. Brokers' systems also already send tea-manufacturer invoices to RAMIS (since 1 May 2026). Sources: https://lankabusinessonline.com/?p=43897, https://www.vatupdate.com/2026/05/14/sri-lanka-expands-national-e-invoicing-pilot-with-web-api-integration-for-vat-data-transmission/
- **EPF/ETF monthly e-return automation.** E-returns are compulsory for employers with 50+ staff, and since 30 Apr 2025 uploads go only through the EPF Online Services System. It is killed by the many local payroll and HRIS packages that already generate EPF/ETF files (individual vendors not verified in this session), and by the CBSL–Labour Department integration project. Sources: https://epf.lk/?p=171, https://www.peoplesbank.lk/roastoth/2025/03/Discontinuation-Notice-of-Accepting-EPF-via-Peoples-net.pdf
- **NMRA pharmacy licence renewal helper.** Renewal is annual, and NMRA's own online-only portal (since 21 Apr 2026) is the substitute. Low frequency. Source: https://www.nmra.gov.lk/announcements
- **EU CATCH catch-certificate tool for Sri Lankan seafood exporters.** CATCH is mandatory only for EU importers and member-state authorities. Non-EU operators can use it voluntarily, and paper certificates are accepted with a scan until 2028. The flag-state authority (DFAR) validates certificates, and few exporters exist. Sources: https://www.seafoodsource.com/news/environment-sustainability/new-digital-catch-certificate-goes-into-effect-in-eu, https://agrinfo.eu/book-of-reports/eu-catch-certification-scheme/

## Attractive problem, poor distribution

- **CEA Environmental Protection Licence compliance.** Penalties are real: 41 factories were permanently closed in 2025 for operating without renewed EPLs. But renewal cycles are multi-year, forms are paper/PDF by category, and environmental consultants do the work. No buyer list exists and the work is infrequent. Sources: https://cea.lk/web/environmental-protection-licensing, https://adaderana.lk/news/cmrxi7qcn0002356qlsd1hqgg
- **Fisheries EU traceability.** As above: few exporters, and the state certifies.

## Too competitive

- **PDPA compliance (DPO, DPIA, breach logs, ROPA), effective 1 Jan 2027 under Gazette 2498/16.** The deadline is real, but this is the "generic compliance" trap. Competitors include the local Xapi PDPA playbook and framework, Securiti, ISMS.online, consentstack, flexyconsent, EY Colombo and law firms. Sources: https://www.ft.lk/front-page/Data-protection-compliance-regime-takes-effect-on-1-Jan-2027/44-795776, https://www.sundaytimes.lk/260906/business-times/xapi-launches-practical-pdpa-compliance-playbook-655571.html, https://securiti.ai/pt-br/solutions/sri-lankas-personal-data-protection-act-2022
- **Apparel exporter EU sustainability and e-invoicing.** Large groups dominate the sector, buy through enterprise procurement and are already in the RAMIS pilot (screened through the e-invoicing searches, no separate search).

## Notes and unverified items

- No source gave the number of VAT-registered persons. My estimate of tens of thousands is unverified.
- Whether the IRD will allow third-party intermediaries on the RAMIS Web API is not stated in the sources found. This is the key thing to check first, through the IRD API specification or tax-practitioner interviews.
