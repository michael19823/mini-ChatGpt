# Canada - indie-hacker opportunity research

Date: 2026-10-05 (deep pass, about 57 searches). Anything not backed by a source URL is marked "unverified" or "estimate". Product names I know of but could not confirm through a search in this pass are also marked "unverified".

**Accessibility:** Canada is fully open to a foreign solo founder: no sanctions, normal payment rails (Stripe, card, PAD). Quebec in practice needs a French UI and French support. Provincial and municipal government portals are the integration surface for most ideas below. Only some of them have APIs (RPRA does; most childcare portals and the CCQ do not, as far as I could find).

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Licensed childcare (ON, BC, AB, QC) | Monthly subsidy attendance, operating-grant claims, ECE wage top-up reports to provincial or municipal portals | **Opportunity (best)** | Monthly and mandatory, and payments depend on it. ON, BC and AB all changed portals or funding models in 2025-2026. Fragmented across 10 provinces and 47 Ontario service managers. Childcare apps track attendance, but I found no evidence that any of them file into the portals |
| Hazardous / liquid industrial waste carriers (ON) | Per-load e-manifests in RPRA HWP Registry | **Opportunity** | 252,613 manifests in 2025 and about 40,000 regulated parties. RPRA offers an external API, but small carriers re-key loads into the free HazTrack app |
| SME manufacturers / exporters / importers | CUSMA origin certification, supplier declarations; Sept 2026 U.S. surtax remission | **Opportunity (weak)** | A real recurring trigger (35% U.S. tariff on non-CUSMA goods; Canadian surtax from 2026-09-08), but customs brokers own most of the workflow and policy is volatile |
| Funeral homes (ON, NS, MB) | Death registration in new provincial EDR systems | **Opportunity (weak)** | Ontario EDR went province-wide 2026-08-30. Funeral software has no confirmed EDR link. Small market |
| Construction (Quebec) | CCQ monthly report (Chantier numériccq, Jan 2026) | **Opportunity (weak), downgraded** | Messy launch, but there is a CCQ list of authorized providers (Acomba, Avantage, Maestro, Logiciels Maximum) plus a free dynamic form |
| Consumer-goods producers | Packaging EPR (RPRA, Recycle BC, EEQ, others) + Federal Plastics Registry | Rejected | Annual. Circular Materials administers most non-Quebec provinces, which reduces fragmentation. Consultants (Rev-Log, RWDI, H2 Compliance) serve it. Federal Plastics Registry phases 2-3 delayed |
| Construction / soil | Ontario excess soil (O. Reg. 406/19) registry, hauling records | Too competitive | SoilFLO (Metrolinx contract, Procore/Sage integrations), DirtMarket/DirtTrack, Corfix. The regulation is being loosened |
| Leasing / factoring / mortgage | FINTRAC AML programs (new reporting entities from Oct 2024 / Apr 2025) | Poor distribution / competitive | ReallyTrusted, Centum and Finmo serve mortgage. Leasing/factoring is a small, law-firm-served niche. KYC is mostly generic |
| Employers of temporary foreign workers | TFWP compliance evidence, 8-week advertising | Poor fit | Penalties doubled, but only about 1,488 inspections a year. Low-wage LMIA shrinking. Immigration lawyers and consultants own it |
| BC employers 50+ | Pay transparency report (due Nov 1, 2026; about 8,500 employers) | Rejected | Annual, and the BC government provides a free Pay Transparency Reporting Tool |
| Short-term rental hosts (BC) | Provincial STR registry | Rejected | Annual registration by consumers. Platforms do the enforcement |
| Cosmetics brands | Fragrance-allergen labels (Apr/Aug 2026), Cosmetic Notification Form | Rejected | Mostly one-time relabelling. Regulatory consultants (Biorius, CIRS) serve it |
| Livestock (CFIA traceability) | Movement reporting | Rejected | CFIA dropped cattle/bison movement reporting in June 2026. Pigs already go through existing systems |
| Pesticide applicators (QC) | Code de gestion des pesticides records | Not pursued | Amendments in force 2026-03-01, but I found no new digital filing duty. Pest-control field software covers record keeping (unverified) |
| Fire-protection contractors | ITM report submission to fire departments | Not pursued | No Canadian municipal portal mandate found. The Compliance Engine / BuildingReports are U.S.-centric |
| Importers / customs brokers | CBSA CARM | Rejected (first pass, still holds) | Brokers, Descartes and carriers cover it. Setup is one-off |
| Dental offices | Canadian Dental Care Plan claims | Rejected (first pass) | Goes through existing practice-management EDI |
| Cannabis licence holders | CTLS monthly report | Rejected (first pass) | Health Canada CSV tool. Small, mature niche |
| Mid-size companies | Forced/child labour supply-chain report | Poor fit (first pass) | Annual and narrative. Law firms handle it |

## Opportunities

### Opportunity: Childcare Funding-Claims Bridge (attendance to provincial/municipal portals)

**Industry:**  
Licensed childcare centres and home-childcare agencies, Canada (start in Ontario + BC + Alberta)

**Buyer:**  
Owner-director or office administrator of independent and small multi-site childcare centres (for-profit and non-profit). Bookkeepers who serve several centres are a secondary buyer.

**Trigger / Why now:**  
The $10/day CWELCC system has turned every licensed centre into a monthly government claimant, and the systems keep changing:
- **Ontario** moved to a cost-based funding approach from 2025-01-01 and published a new cost-based funding guideline in July 2026. 5,556 sites (92%) were enrolled in CWELCC as of March 2025. Each municipal service manager runs its own process: OCCMS Record of Attendance in Peel and York, Toronto "Online Services".
- **BC** retired the Child Care Web Application and ECE-WE Reporting Tool and moved enrolment reports and monthly ECE Wage Enhancement reports (hours per educator) to My ChildCareBC Services.
- **Alberta** required every child to be registered in a new Childcare Licensing Portal by June 2025 and moved monthly Affordability Grant claims (affordability, subsidy, wage top-ups) to a new Claims Submission Service from mid-2025.

**Current workflow:**  
1. Staff record daily sign-in/out in a childcare app (Lillio/HiMama, Sandbox, KidReports, ChildFriendly, Timesavr, Childcare Pro) or on paper.
2. Each month the administrator pulls attendance and enrolment reports and re-keys per-child attendance and absence days into the municipal or provincial portal. In Ontario, OCCMS ROA has to be done by the 9th business day; in Alberta, claims by the 20th for the next month's advance.
3. For ECE wage top-ups (BC, AB), the administrator exports educator hours from payroll and re-enters them per educator.
4. Municipal or provincial staff query discrepancies. Corrections delay payment.

**Pain:**  
Payment depends on it: Peel says CSR verification gates CWELCC payment and that delays "could impact payment", and Alberta pays the next month's advance only if the claim is in by the 20th. The work is monthly and per child or per educator. Ontario's Auditor General (Oct 2025) found the rapid CWELCC rollout created "administrative burdens and instability" for operators. AECEO published a report on operators' "hurdles" with the CWELCC system. The amount of re-keying per centre (hours a month) is unverified and is the key interview question.

**Existing solutions:**  
- Childcare management apps: Lillio (formerly HiMama); Sandbox ($29-99/month); KidReports (markets "subsidy management", mainly U.S.); ChildFriendly (Alberta subsidy customisation); Timesavr (Edmonton, subsidy tracking since 2008); Childcare Pro (Winnipeg).
- Government portals themselves (OCCMS, Toronto Online Services, My ChildCareBC Services, Alberta CSS), free.
- Bookkeepers.

**The gap:**  
I found no evidence that any childcare app pushes data into OCCMS, My ChildCareBC Services or Alberta CSS. They produce reports that humans re-key. The national players are generic. The regional players (ChildFriendly, Timesavr, Childcare Pro) each cover one province. Nobody reconciles "what the app says" against "what was claimed and paid" across months.

**Possible product:**  
A claims workbench. It imports attendance from the centre's existing app (CSV export or API) and payroll hours, applies each province's or service manager's claim rules, flags exceptions (absence limits, unregistered children, ECE certification gaps), and produces a filled claim. Where a portal accepts uploads, it uploads; where it does not, a browser extension fills the portal form. Each month it reconciles paid against claimed.

**MVP:**  
One portal, one app: Ontario OCCMS Record of Attendance from a Lillio or Sandbox CSV export. Pre-validation plus a browser-extension autofill, and a monthly reconciliation sheet. Then BC ECE-WE hours from payroll CSV.

**Pricing hypothesis:**  
CAD 39-79/month per site; CAD 150-300/month for bookkeepers or multi-site agencies (estimate). A centre with 20 subsidised children likely spends several hours a month on this (unverified).

**How to find first customers:**  
- Ontario's public licensed-childcare locator and each service manager's lists of CWELCC-participating centres (e.g., OneList).
- BC's and Alberta's public licensed-facility lookups.
- Operator associations: AECEO, ADCO (Association of Day Care Operators of Ontario; unverified), Alberta's AECCA (unverified).
- Facebook groups for daycare owners.

**Risks:**  
- Portal terms of use may forbid automation, and portals change without notice. Alberta CSS was brand-new in 2025.
- Childcare app vendors could add exports or integrations quickly.
- Provinces may build bulk-upload or vendor APIs themselves, as U.S. states did.
- Funding instability: Ontario's Auditor General projects a shortfall of about CAD 2B for 2026/27.

**Kill condition:**  
Interviews show monthly re-keying takes under about 1 hour per centre. Or the main portals already accept file upload from the major apps. Or a province bans automated entry.

**Score:** 6/10

**Sources:**  
- https://peelregion.ca/sites/default/files/2026-08/occms-user-guide.pdf
- https://peelregion.ca/sites/default/files/2024-04/user-guide-cwelcc_reporting-occms-childcare-agencies-fee-subsidy-cwelcc-funding.pdf
- https://www.ontario.ca/files/2026-07/edu-chapter-2-division-2-cwelcc-cost-based-funding-guideline-en-2026-07-22.pdf
- https://www.toronto.ca/wp-content/uploads/2025/10/95d7-2026-TCS-Funding-Requirement-Guideline.pdf
- https://www.ontario.ca/page/ontarios-early-years-and-child-care-annual-report-2025
- https://auditor.on.ca/en/content/specialreports/specialreports/en25/AR-PA_CELandCCP_en25.pdf
- https://assets.nationbuilder.com/aeceo/pages/2524/attachments/original/1783871952/Navigating_the_Hurdles_of_the_CWELCC_System.pdf
- https://www2.gov.bc.ca/gov/content/family-social-supports/caring-for-young-children/childcarebc-programs/child-care-operating-funding/ece-we-reporting
- https://www2.gov.bc.ca/assets/gov/family-and-social-supports/child-care/childcarebc-programs/ecewe/ece-we_funding_guidelines_26_27.pdf
- https://www.alberta.ca/submit-a-monthly-claim
- https://www.accessnewswire.com/newsroom/en/education/every-alberta-child-in-care-must-be-registered-by-june-26-albertas-childcare-system-begin-1042126
- https://www.lillio.com/blog/canada-child-care-management-software-overview
- https://www.getapp.ca/software/2078729/childfriendly
- https://mykidreports.com/childcare-subsidy-management-software

### Opportunity: RPRA HWP Registry Manifest Bridge for Small Ontario Waste Carriers

**Industry:**  
Hazardous and liquid industrial waste transport (vacuum trucks, used-oil, solvent, and possibly grease-trap haulers; grease-trap classification unverified), Ontario

**Buyer:**  
Owner or dispatcher of small and mid carriers (2-30 trucks) that run their own dispatch and invoicing software, and carriers acting as Authorized Generator Delegates for many small generators (garages, dental offices, restaurants, print shops).

**Trigger / Why now:**  
Since 2023-01-01 every load must be manifested electronically in RPRA's HWP Registry or the HazTrack app; paper and HWIN are gone. RPRA updated HazTrack in September 2025, consulted on registrant service standards in September 2025, and offers an external API for "high volume manifesting". In 2026 Ontario is the only Canadian province with a fully digital registry that has an API. The trigger is not brand-new; the API availability is the opening.

**Current workflow:**  
1. Dispatcher books the pickup in the carrier's own system or spreadsheet and invoices from it.
2. The driver (or office staff) separately creates or signs the manifest in HazTrack or the web registry, choosing generator, waste class and receiver.
3. Receiver completes it. Corrections are made in the registry.
4. For delegated generators, the carrier also handles generator registration, fees and on-site reporting.
5. Office staff reconcile registry manifests against invoices and weight tickets.

**Pain:**  
Per-load, mandatory, provincial-offence exposure (transporting waste without a valid generator registration is an offence). Scale: 252,613 manifests filed in 2025, and the registry serves "more than 40,000" generators, carriers and receivers. The existence of the API and of an RPRA "manifesting model" RFI suggests high-volume users wanted alternatives to manual entry. Complaints from small carriers specifically are unverified.

**Existing solutions:**  
- RPRA HWP Registry web portal and HazTrack app (free).
- Large carriers (GFL, Clean Harbors, Safety-Kleen: unverified) likely integrate directly through the API.
- Waste and vacuum-truck field software (U.S.-centric products such as ServiceCore; unverified whether any integrate with RPRA).
- Environmental consultants acting as delegates.

**The gap:**  
For small carriers, "dispatch job → RPRA manifest → invoice" is three systems with no link. I found no vendor that advertises an RPRA API integration for small haulers. Exceptions (multi-carrier loads, refused waste, corrections, delegate reporting for dozens of small generators) are handled by hand.

**Possible product:**  
A thin manifest hub. Create a job once; it pre-builds the RPRA manifest through the API (generator registration lookup, waste class, receiver), pushes it to drivers, pulls back signatures and receiver weights, and outputs invoice lines. It also includes a delegate dashboard for generator registrations and fees.

**MVP:**  
CSV or Google-Sheet job import → RPRA API manifest creation and status sync → daily exception list (unsigned, refused, corrections due) → invoice export to QuickBooks.

**Pricing hypothesis:**  
CAD 10-20 per truck per week, or CAD 1-2 per manifest; about CAD 150-600/month for a typical small carrier (estimate).

**How to find first customers:**  
- RPRA's public HWP Registry datasets (carrier and receiver data; the 2025 set was temporarily withdrawn in May 2026).
- MECP Environmental Compliance Approval records for waste haulage systems (unverified searchability).
- OWMA (Ontario Waste Management Association) members.

**Risks:**  
- RPRA API access terms for third-party vendors (unverified).
- RPRA could improve HazTrack.
- The market may be concentrated in large carriers that already integrate.
- Ontario-only (other provinces still use paper or their own systems).

**Kill condition:**  
RPRA will not grant API access to a small vendor. Or interviews show small carriers do fewer than about 100 manifests a month and find HazTrack sufficient. Or an existing hauler platform already ships an RPRA integration.

**Score:** 5/10

**Sources:**  
- https://rpra.ca/programs/hwp/hazardous-waste-program-carriers-and-receivers
- https://rpra.ca/programs/hwp/
- https://rpra.ca/rpras-2025-annual-report/
- https://rpra.ca/2026/04/2025-excess-soil-and-hazardous-waste-program-registry-datasets-now-available/
- https://rpra.ca/wp-content/uploads/Hazardous-Waste-Registry-Manifesting-Model-RFI.pdf
- https://hazmatmag.com/2025/10/09/recent-updates-to-the-ontario-haztrack-mobile-app/
- https://www.matrix-solutions.com/ontarios-new-online-registry-for-industrial-hazardous-and-liquid-waste-reporting/
- https://www.ontario.ca/document/registration-guidance-manual-generators-liquid-industrial-and-hazardous-waste/6-manifesting

### Opportunity: CUSMA Origin and Surtax-Remission Evidence Kit for SME Manufacturers

**Industry:**  
Small and mid manufacturers and distributors exporting to the U.S. and importing U.S. inputs

**Buyer:**  
Controller, owner or logistics coordinator at 10-200 employee manufacturers. Customs brokers serving SMEs are a possible channel.

**Trigger / Why now:**  
- U.S. tariffs (25% from March 2025, 35% from August 2025) apply only to goods not certified under CUSMA, so origin certification went from optional to existential. About 90% of Canadian goods entered the U.S. tariff-free as of July 2026.
- The first CUSMA joint review (July 1, 2026) ended without renewal. The agreement stays in force, but the review now repeats annually.
- From 2026-09-08 Canada's new United States Surtax Order (15/25/50%) applies to U.S.-origin goods. Standing remission categories (for example, inputs for manufacturing, agriculture and food packaging) plus case-by-case requests to Finance create a new recurring evidence burden for importers.

**Current workflow:**  
1. Classify each product (HS code) and test it against its CUSMA rule of origin using the bill of materials.
2. Email suppliers each year for origin declarations on inputs (blanket certifications cover at most 12 months) and chase the missing ones.
3. Put the 9 data elements on invoices or a separate certification. Keep support for 5 years.
4. On imports of U.S. goods, decide the surtax and remission code per line with the broker, and keep end-use proof for remission.

**Pain:**  
Losing CUSMA status means a 35% U.S. tariff on that shipment. Annual supplier re-certification and per-shipment invoice statements. The government set up a dedicated SME CUSMA hotline. Interview-level evidence of SME hours spent is unverified.

**Existing solutions:**  
- Customs brokers (Livingston, GHY, Farrow, A&A, Axxess, J.W. Smith) give free templates and guides, and handle import surtax codes.
- Enterprise trade-compliance suites with FTA qualification and supplier solicitation: Thomson Reuters ONESOURCE, e2open/Amber Road, Descartes, Integration Point, SAP GTS (all unverified in this pass).
- Trade consultants. Spreadsheets.

**The gap:**  
Enterprise suites are priced for large companies, and brokers handle the border filing but not the manufacturer's upstream evidence (BOM-level origin analysis and supplier declaration chasing). There is also no SME tool that links remission claims to end-use records. This gap is plausible but unverified; there may be SME tools I did not find.

**Possible product:**  
Supplier-declaration portal plus BOM origin worksheet. It requests and tracks supplier CUSMA declarations, computes qualification per product against its rule, issues invoice certification text, and keeps a 5-year audit binder. An add-on tags imported U.S. inputs with remission category and end-use evidence.

**MVP:**  
Upload BOM CSV → send supplier declaration requests and collect them → per-SKU "qualifies / missing evidence" status → PDF certification and audit binder.

**Pricing hypothesis:**  
CAD 99-299/month per company (estimate). Brokers could resell it.

**How to find first customers:**  
Canadian Manufacturers & Exporters (CME) members, provincial exporter directories, Trade Commissioner Service client events, and broker partnerships.

**Risks:**  
- Policy volatility both ways: a deal could remove the tariffs, or the U.S. could change the rules.
- Brokers may bundle this work for free.
- Enterprise vendors move down-market.
- Rules-of-origin logic errors carry liability.

**Kill condition:**  
Brokers already give SMEs supplier-declaration tooling for free, or a U.S.-Canada deal removes the tariff gap for non-CUSMA goods.

**Score:** 4/10

**Sources:**  
- https://www.ghy.com/trade-compliance/resources-to-support-canadian-exporters-facing-us-tariffs/
- https://www.canada.ca/en/global-affairs/news/2025/04/trade-commissioner-service-announces-new-resources-to-support-canadian-exporters-facing-u-s-tariffs.html
- https://blog.igus.ca/2026/03/20/cusma-101/
- https://www.prodensa.com/insights/blog/usmca-certificate-of-origin-requirements-guide
- https://mcmillan.ca/insights/following-july-1st-review-cusma-remains-in-effect-until-2036-on-going-negotiations-as-part-of-annual-reviews-to-agree-on-north-american-free-trade-will-continue/
- https://www.ctvnews.ca/business/article/a-tariff-exemption-was-canadas-salvation-in-2025-its-absolutely-at-risk-in-2026/
- https://www.cbsa-asfc.gc.ca/publications/cn-ad/cn26-23-eng.html
- https://www.livingstonintl.com/u-s-surtax-remission-updates/
- https://laws-lois.justice.gc.ca/eng/Regulations/SOR-2020-155/page-15.html

### Opportunity: Funeral-Home EDR Bridge (Ontario first, then NS/MB)

**Industry:**  
Funeral homes and transfer services

**Buyer:**  
Funeral director or office manager at independent funeral homes and small chains.

**Trigger / Why now:**  
- Ontario's Office of the Registrar General launched the province-wide Electronic Death Registration (EDR) system on 2026-08-30. It digitises Form 15 (Statement of Death) and Form 16 (Medical Certificate of Death) and delivers burial permits electronically. From 2026-03-30, cremation certificates and out-of-province shipment certificates also moved to EDR.
- Toronto and some municipalities are not yet onboarded, so a hybrid paper/electronic process continues.
- Nova Scotia relaunched its EDR in November 2025, and Manitoba has been rolling one out since 2025.

**Current workflow:**  
1. Arrangement conference data goes into funeral software (FrontRunner, Osiris, Passare, etc.).
2. Staff re-enter the same decedent data into EDR, track whether the physician has completed Form 16, then obtain the burial permit or cremation certificate.
3. In municipalities not yet onboarded, they use the old paper route.

**Pain:**  
Every case requires it, and it gates burial or cremation. This is a direct analogue of the U.S. EDRS benchmark. Specific complaints are unverified, and EDR itself removes paper pain, so the remaining pain is duplicate entry and status chasing.

**Existing solutions:**  
- The EDR web portal itself.
- Funeral software: FrontRunner Professional (Canadian), Osiris, Passare. No EDR integration found in their listings.
- Doing it by hand.

**The gap:**  
Re-keying from funeral software into EDR, plus tracking status across a hybrid paper/EDR province. I found no API.

**Possible product:**  
Browser extension or desktop helper that maps a case record (export or API from the funeral software) into EDR fields, and a case board that shows certifier status, permits and missing items.

**MVP:**  
Ontario-only Chrome extension that fills EDR Form 15 from a CSV or PDF of the funeral software's arrangement form, plus a per-case checklist.

**Pricing hypothesis:**  
CAD 49-99/month per location (estimate).

**How to find first customers:**  
BAO public register of licensed funeral establishments and transfer services, OAFHA (Ontario Association of Funeral Service Professionals; unverified name), and funeral software user groups.

**Risks:**  
- Small market: Ontario likely has about 500-700 funeral establishments (estimate, unverified).
- Funeral software vendors could add EDR mapping.
- Government portals may block automation.
- Low willingness to pay for "autofill".

**Kill condition:**  
FrontRunner, Osiris or Passare announces EDR integration, or Ontario publishes no API and forbids browser automation.

**Score:** 4/10

**Sources:**  
- https://www.toronto.ca/community-people/health-wellness-care/health-programs-advice/respiratory-viruses/covid-19/city-of-toronto-online-burial-permit/
- https://www.amcto.com/network-community/blog/new-electronic-death-registration-system
- https://thebao.ca/wp-content/uploads/2021/11/EDR-Newsletter-1-English-version-Final-1-MGCS.pdf
- https://novascotia.ca/electronic-death-registration-modernization/
- https://www.mltaikins.com/wills-trusts-estates-litigation/manitoba-to-modernize-vital-statistics-through-new-electronic-death-registration
- https://www.capterra.ca/software/116028/websuite
- https://www.capterra.ca/software/124753/osiris

### Opportunity: CCQ Monthly Report Validator for Quebec Construction Employers

**Industry:**  
Construction (Quebec), bookkeepers and payroll bureaus

**Buyer:**  
Small R-20 construction employers (27,606 employers under the four collective agreements) and the bookkeepers or accounting firms that file for them.

**Trigger / Why now:**  
Chantier numériccq launched 2026-01-12 with a modernised monthly report:
- online only, with mandatory electronic payment (bank or pre-authorised debit);
- progressive late penalties based on days late;
- November/December 2025 reports postponed to the end of January 2026 because call volumes overwhelmed support;
- a dedicated portal for accounting firms.

**Current workflow:**  
1. Record hours per employee per trade/sector.
2. Each month, enter or upload them through CCQ online services, the free dynamic form, or an authorized software provider's file.
3. Pay through the bank. Amend errors.

**Pain:**  
Monthly and mandatory, with penalties that now grow per day late. The launch was rough. However, 62% of Quebec construction firms have fewer than 5 employees, and the free CCQ dynamic form probably suffices for them.

**Existing solutions:**  
- CCQ online services and dynamic form (free).
- CCQ list of authorized providers, including Acomba (Paie Construction), Avantage PME, Maestro and Logiciels Maximum.
- Payroll services. Accountants.

**The gap:**  
Narrow: pre-submission validation and multi-client oversight for bookkeepers who file for many small contractors on generic software. This gap was not confirmed in this pass.

**Possible product:**  
Multi-client CCQ calendar and validator: import hours, check rates and classifications, flag missing or late reports, and track progressive-penalty exposure.

**MVP:**  
Excel import → validation against CCQ rules → dynamic-form-ready output plus a multi-client deadline dashboard.

**Pricing hypothesis:**  
CAD 100-250/month per bookkeeping firm (estimate).

**How to find first customers:**  
The RBQ licence registry, the CCQ "firmes comptables" programme, ACQ/APCHQ, and Quebec bookkeeper associations.

**Risks:**  
- Authorized vendors and payroll bureaus already cover employers with a payroll system.
- French-only, and CCQ certification may be needed for file transmission.

**Kill condition:**  
Bookkeepers say the new portal plus authorized software is adequate (likely).

**Score:** 4/10 (was 5/10)

**Sources:**  
- https://www.ccq.org/-/media/Project/Ccq/Ccq-Website/PDF/ChantiernumeriCCQ/Fournisseurs-homologues.pdf?rev=4f8be19bf50d470c9e464ded41d6e116
- https://www.ccq.org/fr-CA/loi-r20/etre-employeur/rapport-mensuel
- https://chantiernumericcq.ccq.org/fr-CA/Librairie/Rapport-mensuel-a-savoir
- https://chantiernumericcq.ccq.org/fr-ca/firmes-comptables
- https://www.apchq.com/actualites/rapports-mensuels-de-novembre-et-de-decembre-2025-a-la-ccq-report-en-janvier-2026/
- https://chantiernumericcq.ccq.org/EN/Librairie/rapport-mensuel-report
- https://www.cfib-fcei.ca/hubfs/advocacy/pdf/2025/2025-03-19%20Rapport%20sur%20la%20construction.pdf
- https://www.acomba.com/wp-content/uploads-svn/pdf/Plan-de-cours_Acomba_Paie-Construction.pdf

## Rejected after competitor research

- **Multi-province packaging EPR workbench** (first-pass opportunity, 4/10): rejected. Circular Materials administers Recycle BC, NB, NS, Alberta and Yukon programmes and serves SK/MB, which reduces the fragmentation a workbench would sell on. Reporting is annual (May 31). Consultants and tool vendors (Rev-Log, RWDI, H2 Compliance) already serve it. The Federal Plastics Registry phases 2-3 were delayed by ECCC. Sources: https://www.circularmaterials.ca/wp-content/uploads/2025/10/Circular-Materials-2025-Annual-Producer-Meeting-Presentation.pdf, https://rev-log.com/us/canada-packaging-epr-may-31-reporting-and-compliance-steps/, https://www.bennettjones.com/Insights/Blogs/2026/02/ECCC-Announces-Delay-to-the-Reporting-Requirements-under-the-Federal-Plastics-Registry
- **BC pay transparency reports:** the government provides a free Pay Transparency Reporting Tool, and the report is annual. Source: https://news.gov.bc.ca/releases/2026FIN0022-000633
- **Livestock movement reporting:** CFIA dropped cattle/bison movement reporting in June 2026, and pig traceability already runs through industry systems. Source: https://www.canada.ca/en/food-inspection-agency/news/2026/06/update-from-the-canadian-food-inspection-agency-on-a-revised-regulatory-approach-to-the-livestock-traceability-regulations.html
- **Cosmetic fragrance-allergen compliance:** mostly a one-time relabel. Consultants (Biorius, CIRS) serve it. Source: https://www.cirs-group.com/en/cosmetics/starting-april-12-2026-health-canada-mandates-fragrance-allergen-disclosure-on-cosmetic-labels
- **BC short-term rental registry:** annual registration by consumer hosts. Platforms enforce. Source: https://www.bennettjones.com/Insights/Blogs/Short-Term-Rental-Registry-Launches-in-British-Columbia
- **CARM importer compliance:** brokers, Descartes and carriers. One-off setup. Source: https://www.coleintl.com/how-does-carm-impact-importers
- **Canadian Dental Care Plan claims:** practice-management EDI. Source: https://www.canada.ca/en/services/benefits/dental/dental-care-plan/providers/article.html
- **Cannabis CTLS reporting:** Health Canada tool. Source: https://www.canada.ca/en/health-canada/services/drugs-medication/cannabis/tracking-system/monthly-reporting-guide.html

## Attractive problem, poor distribution

- **FINTRAC programs for newly covered financing/leasing and factoring firms:** obligations in force from 2025-04-01, the transition ended 2026-04-01, and Bill C-2 adds mandatory enrolment and much higher penalties. But the entity count is small and unknown, buyers lean on law firms (Cassels, Goodmans, Aird & Berlis), and the mortgage side is already served by ReallyTrusted, Centum's FINTRAC dashboard and Finmo. Sources: https://cfla-acfl.ca/files/Industry-Intelligence/AML%20Changes%20to%20Leasing%20&%20Finance%20Industry%202025%20FINAL.pdf, https://fintrac-canafe.canada.ca/businesses-entreprises/changes-changements-eng, https://mpamag.com/ca/specialty/broker-networks/centum-launches-new-compliance-tool-as-fintrac-regulations-tighten/512052, https://reallytrusted.com/fintracexpress/
- **TFWP employer compliance files:** penalties more than doubled to CAD 10.2M in FY2025-26, but only 1,488 inspections were finalised, low-wage LMIAs are shrinking, and immigration lawyers own the relationship. Source: https://www.canada.ca/en/employment-social-development/news/2026/07/the-government-of-canada-highlights-doubling-of-compliance-monetary-penalties-under-the-temporary-foreign-worker-program.html
- **Forced/child labour supply-chain reports:** annual, narrative, law firms. Source: https://www.canada.ca/en/privy-council/corporate/transparency/supply-chains-act.html

## Too competitive

- **Ontario excess soil tracking:** SoilFLO (Metrolinx contract, integrations with Procore, SAP and Sage, automated manifests), DirtMarket/DirtTrack and Corfix. The province is also reducing requirements for low-risk soil. Sources: https://www.capterra.com/p/10049331/SoilFLO/, https://link2build.ca/news/articles/2023/september/metrolinx-awards-contract-for-soil-management-software-to-soilflo, https://greenbuildingcanada.ca/ontario-soil-tracker-landfill-ban/, https://environmentjournal.ca/ontario-soil-regulation-amendments-to-reduce-records-and-increase-beneficial-reuse/
- **CCQ monthly reporting for employers with payroll software:** covered by authorized vendors (see above).

## Pass history

- **First pass (2026-10-04, 9 searches):** CCQ monthly report (5/10) and multi-province EPR (4/10). Hauled waste, excess soil and other areas were left unscreened.
- **Deep pass (2026-10-05, about 57 searches, EN + FR):**
  - Screened childcare funding claims, Ontario HWP manifests, CUSMA and surtax paperwork, funeral EDR, excess soil, FINTRAC new sectors, TFWP, BC pay transparency, BC STR, cosmetics, livestock traceability, Quebec pesticides and fire inspections.
  - New top idea: the childcare funding-claims bridge (6/10). Also added the RPRA manifest bridge (5/10), the CUSMA/surtax kit (4/10) and the funeral EDR bridge (4/10).
  - Verified the CCQ authorized-provider list and the 27,606 R-20 employers. CCQ downgraded to 4/10 because of the free dynamic form and the named authorized vendors.
  - EPR moved to rejected: Circular Materials consolidates most provinces, filing is annual, and consultants serve it.
  - Excess soil marked too competitive (SoilFLO and others).
  - Still unverified: how much monthly re-keying childcare centres actually do; RPRA's API terms for third-party vendors; the number of Ontario funeral establishments; SME pricing from enterprise rules-of-origin vendors.
