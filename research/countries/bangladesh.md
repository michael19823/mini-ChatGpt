# Bangladesh — Indie Software Opportunity Research

Research date: 2026-10-05. 18 WebSearch calls (large-market budget). WebFetch not used. Anything not confirmed by a source below is marked "unverified" or "estimate".

## Accessibility check (read first)

Bangladesh is not sanctioned and software can legally be sold there, but **getting paid is the main practical barrier for a foreign solo founder**:
- Bangladeshi SMEs face tight outward-remittance limits. Since Oct 2025, SMEs can remit only **up to USD 3,000 a year** for business expenses abroad, via bank transfer or an SME card capped at USD 600, and only after registering with the SME Foundation ([Future Startup](https://futurestartup.com/2025/10/07/thoughts-on-bangladesh-banks-sme-remittance-facility-progress-and-barriers/)). IT firms get a larger allowance (USD 40,000 a year) ([TBS](https://www.tbsnews.net/node/36185)). Larger exporters (garment factories) hold foreign-currency retention accounts and can pay more easily (unverified per company).
- In practice, a foreign founder would need either a **local reseller or partner** that bills in BDT (through bKash, SSLCommerz or bank transfer) or a local entity. For any product sold to SMEs, assume this before anything else.
- VAT software used by businesses with turnover above BDT 5 crore (50 million) must be **NBR-approved** ([Financfy](https://financfy.com/blog/online-vat-submission-in-bangladesh/), [ibos Prime VAT](https://ibos.io/primevat-details/)). That is a certification hurdle for anything that claims to be a VAT system.
- Price levels are low: local SaaS is priced in BDT, often a few thousand taka a month (estimate).

Verdict: **accessible, but only through a local partner.** Opportunities below are scored with that cost included.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| RMG / textile / accessories exporters (bonded warehouses) | UP via CBMS (mandatory from 1 Jan 2026), e-UD (BGMEA/BKMEA), electronic bond register, co-efficient, annual bond audit | **Opportunity** | New mandatory portal + ~3,000 active licensees + garment ERPs are not built around CBMS reconciliation (unverified) |
| VAT-registered mid-size suppliers / VAT consultants | Monthly Mushak 9.1 online return (manual filing ended 1 Jul 2026), Mushak 6.6 VDS certificate reconciliation | **Opportunity (narrow)** | Strong trigger, but the core VAT software market is crowded; only the VDS reconciliation and consultant-practice angle is left |
| Customs brokers (C&F agents) | Bill of Entry in ASYCUDA World + CLPs through BSW (mandatory from 1 Jul 2025) + job billing | **Opportunity (weak)** | ~3,000 licensed agents in Chittagong; only generic local software found; low willingness to pay |
| Factories with 100+ workers (payroll / HR) | Mandatory provident fund under the Labour Amendment Ordinance 2025 (effective 17 Nov 2025) | Too competitive | ProFund (SMAC IT), PeopleDesk (iBOS), AccordHRM and garment ERPs already offer PF modules |
| Pharmacies | DGDA licence renewal, model-pharmacy records | Rejected | Government's free online licensing system; 173k pharmacies but very low willingness to pay; crowded POS market |
| Shrimp / frozen fish exporters | EU traceability, DoF FIQC health certificates | Rejected | DoF farm registration + SourceTrace/WorldFish e-traceability; few exporters; slow recent momentum |
| Dyeing / washing factories (environment) | ETP online monitoring, DoE environmental clearance renewal | Poor distribution / rejected | Monitoring is hardware and IP cameras run by the government; clearance is already online at DoE |
| Corporate withholding agents | Quarterly TDS returns (changed from monthly from AY 2025–26) | Rejected | Frequency dropped to quarterly; handled by tax consultants and payroll/ERP vendors (unverified); free NBR portal |
| Individual taxpayers | Mandatory online e-return (AY 2025–26) | Rejected | Consumer product, free NBR portal, annual |

---

### Opportunity: Bond Ledger Copilot (CBMS / e-UD reconciliation for bonded-warehouse exporters)

**Industry:**
RMG, knitwear, textile and accessories export manufacturers operating under a customs bonded-warehouse licence.

**Buyer:**
The "commercial" or bond department head (Commercial Manager / Bond In-charge) at a mid-sized export factory (roughly 300–3,000 workers), or the bond consultant who handles several factories.

**Trigger / Why now:**
- The NBR's Customs Bond Management System (CBMS) launched on 1 Jan 2025. **From 1 Jan 2026 it is mandatory for all Utilisation Permission (UP) services.** Nearly 25,000 UPs were issued online between 1 Jan and 16 Mar 2026.
- ASYCUDA World was integrated with BGMEA's e-UD platform on 11 Jan 2026. Automated e-UD write-off is planned next.
- CBMS modules include Entitlement, Co-efficient, Electronic Bond Register, UD/ePassbook and Risk Management & Audit, so the data factories submit is now cross-checked automatically.
- LDC graduation in Nov 2026 plus tighter scrutiny of bond misuse raises the cost of errors.

**Current workflow:**
1. The merchandising team confirms an export LC or contract. Commercial staff open back-to-back LCs for fabric and trims.
2. Staff apply for a UD on the BGMEA/BKMEA e-UD platform with consumption details.
3. Staff apply for a UP in CBMS against DEDO-approved input–output co-efficients.
4. Staff re-key import Bill of Entry (ASYCUDA) and export data into Excel bond registers or the garment ERP's commercial module to track entitlement balance by HS code.
5. At annual bond audit or licence renewal, staff reconcile imports vs. consumption vs. exports by hand, chasing amendments, wastage and transfers to subcontractors.

**Pain:**
- An industry representative said of the NBR software: "Even if 10 files are submitted for UP online, the system cannot process them" ([TBS](https://www.tbsnews.net/economy/customs-bond-automation-why-hasnt-it-taken-after-all-these-years-1114456)).
- Bond misuse is heavily enforced. 750 licence holders have been barred from export/import in the past, and many BINs are locked ([FE](https://thefinancialexpress.com.bd/print/750-bond-licence-holders-stopped-from-export-import-activities-for-flouting-rules-1605585943)).
- The workflow repeats per order or LC, so dozens to hundreds of times a year per factory.

**Existing solutions:**
- Government systems: CBMS and the BGMEA/BKMEA e-UD platform.
- Garment ERPs with commercial/LC modules: Leotech Bondhon/RUP, Fusion Infotech, Smart Software, GCTL, Xponent's top-10 list ([Xponent](https://www.xponent.com.bd/blog/garments-erp-software-in-bangladesh)).
- Large groups use in-house ERP or SAP.
- Many factories use Excel plus bond consultants.

**The gap:**
- No product was found that **ingests CBMS UP, e-UD and ASYCUDA BoE records and keeps a live reconciled entitlement/consumption ledger per HS code, flagging mismatches before the audit.**
- Garment ERPs track LCs and inventory, but CBMS integration is not advertised (unverified).

**Possible product:**
A reconciliation layer that sits beside the ERP. It imports or exports CBMS/e-UD/ASYCUDA data (PDF/Excel exports or browser automation), keeps a running entitlement ledger by co-efficient, and produces audit-ready bond registers and an exception queue (overdrawn entitlement, expired UD, unmatched BoE).

**MVP:**
Upload UD + UP + BoE exports in Excel or PDF → per-HS-code entitlement balance → mismatch list → printable bond register in the commissionerate format.

**Pricing hypothesis:**
BDT 8,000–20,000 (≈ USD 65–165) per factory per month. Bond consultants buy a multi-factory tier. Estimate; needs validation.

**How to find first customers:**
- BGMEA (~1,800+ member factories, unverified count) and BKMEA member directories.
- Customs Bond Commissionerate (Dhaka/Chattogram) licence lists: 6,684 licensees, about 3,014 active ([FE](https://thefinancialexpress.com.bd/trade/automated-bond-utilisation-permission-mandatory-for-export-industries)).
- Bond consultants who advertise on Facebook / LinkedIn.

**Risks:**
- CBMS has no public API, so integration means exports or scraping.
- The NBR may build reconciliation into CBMS itself through its Risk/Audit module.
- Local ERPs can add the feature.
- Payment and partner barrier; requires Bangla-language support and an on-site sales culture.

**Kill condition:**
Interviews with 10 commercial managers show the CBMS "Electronic Bond Register / ePassbook" already gives them a reconciled balance, or their ERP vendor already ships a CBMS sync.

**Score:** 6/10

**Sources:**
- https://www.thedailystar.net/business/news/nbr-makes-online-customs-bond-system-mandatory-january-2026-4048236
- https://www.bssnews.net/business/371151
- https://unb.com.bd/category/bangladesh/nbr-issues-around-25000-ups-online-in-two-and-a-half-months-via-cbms/182104
- https://thefinancialexpress.com.bd/home/nbr-integrates-asycuda-world-system-with-bgmeas-e-ud-platform
- https://www.tbsnews.net/economy/customs-bond-automation-why-hasnt-it-taken-after-all-these-years-1114456
- https://thefinancialexpress.com.bd/trade/automated-bond-utilisation-permission-mandatory-for-export-industries
- https://www.xponent.com.bd/blog/garments-erp-software-in-bangladesh

---

### Opportunity: VDS (Mushak 6.6) reconciliation and multi-client e-VAT workbench for VAT consultants

**Industry:**
VAT consultants and accounting firms serving SMEs, plus suppliers to VDS-withholding entities (banks, telcos, government, large corporates).

**Buyer:**
- A VAT consultant / small accounting practice handling 20–100 VAT-registered clients' monthly returns.
- The accounts manager at a supplier whose invoices are subject to VDS.

**Trigger / Why now:**
- **Manual VAT return filing was abolished from 1 Jul 2026.** Every monthly Mushak 9.1 must now be filed through the NBR's e-VAT portal by the 15th.
- Businesses had until 30 Jun 2026 to back-enter paper returns into e-VAT.
- In 2026 the NBR is reported to be cross-matching vendor revenue with buyer VDS deductions.

**Current workflow:**
1. The supplier receives payments net of VDS. The buyer is supposed to issue a Mushak 6.6 within 3 working days of depositing the VAT.
2. Accounts staff chase missing 6.6 certificates by email or phone and match them to invoices and treasury challans in Excel.
3. The consultant compiles the 6.1/6.2 registers and VDS adjustments and keys them into the 9.1 form on e-VAT for each client, every month.

**Pain:**
- Missing or incorrect 6.6 certificates mean the supplier cannot claim the VDS adjustment, so it overpays VAT or faces a mismatch ([guide](https://rakibhassan.eu/mushak-6-6-vds-certificate-guide-in-bd-2026/)).
- Filing is monthly and now mandatory online.

**Existing solutions:**
- Prime VAT by iBOS (NBR-approved, covers 6.1/6.2/6.3/6.6/9.1).
- Odoo l10n_bd_mushak_vat module.
- ERPNext Bangladesh VAT apps (ECOSIRE, Frappe vat_compliance).
- Many other local VAT software firms (unverified count).
- The free NBR e-VAT portal.
- Consultants using Excel.

**The gap:**
- Existing tools are single-company VAT systems.
- No product was found for **(a) chasing and matching VDS certificates across many counterparties**, or **(b) a consultant workbench that runs 50 clients' monthly e-VAT filings with status, deadlines and pre-validation.** This gap is not confirmed.

**Possible product:**
A consultant dashboard: client list → monthly checklist → upload of sales/purchase Excel → 9.1 draft values with a VDS-certificate match report and automatic chaser emails to buyers for missing 6.6s.

**MVP:**
A VDS tracker. Import receivables with VDS deductions, record received 6.6 certificates (with PDF parsing), list missing ones, and export the 9.1 adjustment schedule.

**Pricing hypothesis:**
BDT 300–800 per client company per month for consultants; BDT 3,000–6,000 a month for a direct SME. Estimate.

**How to find first customers:**
- Members of the Bangladesh VAT Professionals Forum (exists; unverified size).
- ICAB / ICMAB member directories.
- VAT consultants advertising on Facebook and YouTube (e-VAT walkthroughs).

**Risks:**
- Prime VAT and other incumbents can add the feature quickly.
- The NBR could auto-populate VDS credits in e-VAT (making this a feature, not a product).
- The NBR-approval requirement for businesses with turnover above BDT 5 crore.
- Very low price point.

**Kill condition:**
e-VAT already auto-pulls buyer-issued 6.6 data into the supplier's return, or consultants say they would not pay more than about BDT 1,000 a month in total.

**Score:** 5/10

**Sources:**
- https://www.bssnews.net/business/393281
- https://thefinancialexpress.com.bd/economy/bangladesh/businesses-get-until-june-30-to-upload-paper-vat-returns-to-e-vat-system
- https://financfy.com/blog/online-vat-submission-in-bangladesh/
- https://ismailandassociates.com/complete-guide-to-vat-return-in-bangladesh-finance-act-2026/
- https://rakibhassan.eu/mushak-6-6-vds-certificate-guide-in-bd-2026/
- https://ibos.io/primevat-details/
- https://apps.odoo.com/apps/modules/19.0/l10n_bd_mushak_vat
- https://www.vatupdate.com/2026/08/28/bangladesh-e-invoicing-e-reporting-country-booklet/

---

### Opportunity: C&F agent job-file and BSW/ASYCUDA document tracker

**Industry:**
Customs brokers (C&F agents) at Chattogram, Benapole and Dhaka ICD/airport.

**Buyer:**
The owner or office manager of a small or medium C&F agency (5–40 staff).

**Trigger / Why now:**
- **CLP submission through the Bangladesh Single Window became mandatory from 1 Jul 2025** for 19 agencies (DGDA, BSTI, DoE, DLS, PQW, BGMEA, BKMEA and others).
- Bill of Entry continues in ASYCUDA World; e-UD verification has run through ASYCUDA since Jan 2026.
- Each consignment now touches more online systems, while agents still bill importers manually.

**Current workflow:**
1. The importer sends LC, invoice, packing list and B/L by email or WhatsApp.
2. The agent prepares the Bill of Entry in ASYCUDA World and the required CLP applications in BSW.
3. Staff track assessment, duty payment, examination and port charges on paper or in Excel.
4. Staff prepare the bill to the importer: duty, port, shipping-line and agency charges, plus advances reconciliation.

**Pain:**
- Importers and their C&F agents account for nearly 80% of port-clearance time at Chattogram ([FE](https://thefinancialexpress.com.bd/trade/importers-limiting-benefits-of-customs-automation)).
- The work is per consignment, so frequency is high.
- Disputes over advances and expenses with importers are common (unverified).

**Existing solutions:**
- Generic "C&F management software" listed on BDStall ([BDStall](https://www.bdstall.com/details/clearing-forwarding-cf-management-software-108353/)).
- Cargovioso (China→Bangladesh logistics ERP).
- Pakistani-built Hysabone C&F accounting.
- Tally or Excel.
- The ASYCUDA and BSW portals themselves.

**The gap:**
A per-consignment job file that links ASYCUDA BoE status, BSW CLP status and the expense ledger, and produces the importer bill and advance reconciliation automatically. Local tools appear to be accounting-centric and not portal-aware (unverified).

**Possible product:**
A shared job board per consignment with document checklists by HS code, which CLPs are needed, a duty/expense ledger, an importer statement, and status updates sent to importers.

**MVP:**
Job file + CLP checklist rules by HS code / agency + expense ledger + PDF bill to importer.

**Pricing hypothesis:**
BDT 2,000–5,000 a month per agency, or BDT 50–100 per job. Estimate.

**How to find first customers:**
- Chittagong Customs C&F Agents Association (~3,000 licensed agents at Chattogram Customs).
- Benapole and Dhaka C&F associations.
- NBR C&F licence lists.

**Risks:**
- Low willingness to pay.
- Relationship-driven, informal industry (the strike culture shows bargaining power sits with the associations).
- No API to ASYCUDA or BSW for third parties (unverified).
- Local copycats.

**Kill condition:**
Agents report that billing and expense tracking is solved by Tally and that portal status lives fine inside ASYCUDA/BSW themselves.

**Score:** 4.5/10

**Sources:**
- https://unb.com.bd/category/Bangladesh/online-clp-submission-for-import-export-via-bsw-mandatory-from-july-1-nbr/163107
- https://thefinancialexpress.com.bd/home/full-single-window-digital-trade-processing-starts
- https://thefinancialexpress.com.bd/analysis/understanding-the-cf-industry-in-bangladesh
- https://thefinancialexpress.com.bd/trade/importers-limiting-benefits-of-customs-automation
- https://www.bdstall.com/details/clearing-forwarding-cf-management-software-108353/
- https://cargovioso.codevioso.com/

---

## Rejected after competitor research

- **NBR VAT management software (Mushak 6.3 invoicing, 6.1/6.2 registers, 9.1 return).**
  - Trigger: online-only 9.1 from July 2026.
  - Killed by: Prime VAT (iBOS, NBR-approved), Odoo `l10n_bd_mushak_vat`, ERPNext Bangladesh VAT apps (ECOSIRE, Frappe `vat_compliance`), plus NBR approval required above BDT 5 crore turnover.
- **Provident fund administration for factories with 100+ workers.**
  - Trigger: Labour Amendment Ordinance, effective 17 Nov 2025, makes PF mandatory.
  - Killed by: SMAC IT "ProFund", iBOS PeopleDesk PF/loan module, AccordHRM, Prism ERP's retirement-fund module, and garment payroll ERPs.
- **Pharmacy licence / records software.**
  - Killed by: DGDA's free online licensing and renewal system (with pharmacy management software given to licensees), extremely low willingness to pay across ~173k pharmacies, and a crowded POS market.
- **Shrimp e-traceability for EU exports.**
  - Killed by: DoF farm registration (2.07 lakh farms), SourceTrace / WorldFish e-traceability app, and a small exporter base.
- **Quarterly TDS (withholding) return tool.**
  - Frequency dropped from monthly to quarterly from AY 2025–26.
  - Killed by: tax consultants and payroll/ERP vendors (unverified specifics) and the free NBR portal.

## Attractive problem, poor distribution

- **ETP / effluent compliance for dyeing and washing factories.**
  - 2,046 factories received final notices in Feb 2025, but the government's online ETP monitoring is IP-camera and hardware based.
  - The buyer-side (ZDHC/brand) wastewater reporting is controlled by brand platforms (unverified in this session).
- **RMG supply-chain due diligence / GSP+ readiness after LDC graduation (Nov 2026; EU transition to 2029).**
  - The pain is real, but brands pick the platforms (Higg/Worldly, Sedex, RSC; unverified in this session), and factories do not choose the tools.

## Too competitive

- Garment ERP (Leotech, Fusion, Smart Software, GCTL, and many others).
- Payroll / HRMS with PF.
- Generic VAT software.

## Inaccessible markets

- None. Bangladesh is legally accessible, but SME outward-remittance caps (USD 3,000 a year) make direct foreign-billed SaaS impractical without a local billing partner.
