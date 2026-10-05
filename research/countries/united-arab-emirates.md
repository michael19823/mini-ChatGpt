# United Arab Emirates

Research date: 2026-10-05 (deep pass). Budget: about 52 WebSearch calls (standard and extended, in English and Arabic). WebFetch was blocked, so all facts come from search-result snippets. Anything marked "unverified" comes from a single secondary source or could not be confirmed. Anything marked "estimate" is my own estimate.

**Accessibility:** The market is open. There is no sanctions barrier for a foreign solo founder, and Stripe and local gateways are normal. The main caveat is government systems, which are mostly closed to third parties: FTA e-invoicing runs through 56+ accredited ASPs, MPCI cargo filing through NAIC-accredited providers, goAML through the FIU, and the Dubai Municipality platforms (FoodWatch, Rasid, the Contractor Register on Invest in Dubai) through user logins. A solo founder should expect to prepare data and evidence for these systems and leave the submission to the customer's own login. Unless an API is confirmed, assume the product cannot submit directly. The UAE is not one market. Dubai, Abu Dhabi and Sharjah each run their own municipal systems, which creates both fragmentation and a reason to sell into each emirate separately.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Construction contractors and subcontractors (Dubai) | Law 7/2025 Contractor Register, classification, staff PCCs, prior approval of each subcontract | **Opportunity** | Mandatory, new (in force 8 Jan 2026, regularisation deadline 8 Jan 2027) and per-project. One small competitor (ContractorPass) already exists. |
| Waste collection and transport (Dubai, Abu Dhabi) | Transfer notes and manifests, Rasid tracking, Bolisaty (AD), records under Admin. Res. 34/2026 | **Opportunity (needs validation)** | New Dubai implementing bylaw (Mar 2026) and new activity-specific technical guides (Jun 2026). Systems differ by emirate. |
| VAT-registered SMEs and accounting firms | PINT AE e-invoicing exceptions and reconciliation | **Opportunity, weakened** | 56 accredited ASPs, many with free SME tiers and multi-entity consoles. Only the exception and reconciliation layer remains open. |
| Pest control, grease-trap and tank-cleaning contractors (Dubai) | Per-visit service records in the DM FoodWatch supplier system | **Opportunity, small** | Per job and mandatory, but only about 270 pest firms plus a few hundred others, and FoodWatch API access is unknown. |
| Real estate brokers and DPMS (gold) | goAML REAR/DPMSR filing, CDD, screening | Too competitive | RapidAML, Citadel365, InfoAML, DPMS Global, Zigram and the amluae toolkits all target this sector. |
| Labour-heavy employers | WPS salary-day compliance (Res. 340/2026) | Rejected | Darwinbox, Peko, HONO and others already market Res. 340-specific payroll checks. |
| Employers with 50+ staff | Emiratisation targets | Rejected | ZenHR and HONO track Nafis quotas, and free calculators exist. |
| Pharmacies | Tatmeen dispensing scans (GS1 EPCIS) | Rejected | Pharmacy management systems (HealthCluster, FactsERP, Masirat) already integrate. |
| Real estate brokers | Trakheesi ad permit per listing | Rejected | PropSpace checks permits before syndication, and DLD exposes a listing-validation API to CRMs. |
| Freight forwarders and NVOCCs | MPCI pre-load cargo filing (penalties after 30 Sep 2026) | Rejected | Filing requires NAIC accreditation. ODeX, CrimsonLogic, TradeTech and GlobalEtrade already file. |
| All emitting entities | Climate law Scope 1/2 MRV reporting | Rejected | Annual. Government provides a free tool (IEQT/mrv.ae), many ESG vendors compete, and obligations for small emitters are unclear. |
| Fire-safety AMC contractors | DCD quarterly maintenance, Hassantuk | Rejected | No duplicate government re-entry found (DCD monitors via Hassantuk). Generic inspection apps (InspectOps, SafetyQube, Synchroteam) exist. |
| Clinics (DHA/DOH) | Insurance claim denials | Too competitive | HIS and RCM vendors and outsourcers own it (from the first pass, not re-searched successfully). |
| Jointly owned property managers (Dubai) | Mollak service-charge budgets and invoices | Poor distribution / small | Few buyers. The Mollak API is already used by Rioo/NetSuite add-ons and custom developers. |
| Private schools and nurseries (Dubai) | KHDA compliance handbooks (Sep 2026), data platforms | Poor distribution / small | About 200+ nurseries. SIS and nursery apps already exist. |
| Beverage producers and importers | Sugar-tier excise: MoIAT conformity certificate plus FTA re-registration (1 Jan 2026) | Weak | Mostly a one-time per-SKU task done by tax consultants. |
| Food importers | FIRS/ZAD consignment permits, product registration | Weak | Clearing agents and consultants do it, and DM's own digital stack is strong. |
| SMEs and accountants | Corporate tax after Small Business Relief ends (31 Dec 2026) | Rejected | Annual, generic accounting and tax work served by Zoho, Wafeq, ClearTax and others. |
| Lift owners and inspection bodies | DM lift certification (EIAC third-party) | Not pursued | Small number of inspection bodies. Not deepened. |

## Opportunity: Law 7/2025 subcontract-approval and PCC compliance pack for Dubai contractors

**Industry:**
Construction contracting in Dubai: building contractors, MEP, fit-out and specialist subcontractors.

**Buyer:**
Contracts or compliance manager, or the owner, of a small or mid-sized main contractor that engages many subcontractors. A second buyer is the specialist subcontractor that has to keep its own register and classification evidence current for every main contractor it works for.

**Trigger / Why now:**
- Dubai Law No. 7 of 2025 came into force on 8 Jan 2026.
- All contractors and subcontractors, including those in free zones and DIFC, must be on a unified Dubai Municipality Contractor Register, hold a classification tier, and have Professional Competency Certificates (PCCs) for technical staff.
- Subcontracting needs prior approval from the Municipality or Committee under Article 17. This applies down the chain.
- Records must be retained for 10 years (Art. 15.17, per a vendor summary, unverified).
- Registration lasts one year and is renewable.
- The regularisation deadline is 8 Jan 2027.
- Construction activity is high: over 10,700 building permits were issued in Q1 2026.

**Current workflow:**
1. The main contractor collects each subcontractor's trade licence, register entry, classification tier and category, PCCs of named staff, insurance and similar documents, by email and WhatsApp.
2. Staff check by hand that the subcontractor's tier and category cover the package value and scope.
3. They prepare and submit the subcontract approval request on the DM / Invest in Dubai platform.
4. They track expiries (register renewal, PCCs, licences) in spreadsheets.
5. They keep everything for a decade for audits and disputes.

**Pain:**
- Working outside your classification, or subcontracting without approval, is now illegal and affects the contractor's compliance track record, which feeds its classification. Consultants' guides describe this.
- The approval step happens per subcontract, so it repeats on every project. It also has to fit into tight project start dates.
- No user complaints were found yet, because the regime is 9 months old.

**Existing solutions:**
- **ContractorPass (contractorpass.ae)**, apparently by Anis Infotech. It is a Law 7 compliance tracker covering register status, classification, PCC expiry, subcontractor prior approvals and document retention. It is the main competitor. Its pricing and traction are unverified.
- Global prequalification and supplier-compliance tools (Avetta, ISN, Procore and others), which are not Dubai-specific (unverified for UAE).
- Law firms and setup consultants (Bizgate, Al Tamimi guides) for registration.
- The free DM platform itself.

**The gap:**
ContractorPass shows that the tracker idea is already taken. The remaining gap is specific: a classification-fit check per package and a ready-to-submit approval pack. That means (a) checking each proposed subcontractor's tier and category against the package value and scope before award, and (b) generating the approval request evidence bundle from the subcontract and the subcontractor's shared profile. On the supply side, a subcontractor "compliance passport" shared with many main contractors would avoid repeating document collection. This is unverified as a real gap until a user confirms what the DM approval form asks for.

**Possible product:**
A shared subcontractor-profile network plus a main-contractor approval queue. A subcontractor keeps its register, classification and PCCs current once. A main contractor runs the fit check and gets the approval pack for each package.

**MVP:**
- A subcontractor register for main contractors, with expiry alerts.
- A rules table mapping classification tier and category to the allowed package value and scope.
- A per-package approval checklist and PDF bundle for manual submission on the DM platform.

**Pricing hypothesis:**
AED 400–1,500 per month per main contractor, depending on active projects. Subcontractor profiles would be free, to seed the network (estimate).

**How to find first customers:**
- DM consultant, contractor and supplier data pages, and the new Contractor Register if it is public (unverified).
- Building-permit records naming contractors.
- The Dubai Contractors Association and MEP associations (unverified names).
- LinkedIn contracts and QS managers.
- Law firms that publish Law 7 guides could be a referral channel.

**Risks:**
- ContractorPass or a bigger ERP adds the same features.
- DM's platform may do the fit check automatically.
- Approval may turn out to be a light, one-time-per-subcontractor step instead of per package.
- Construction buyers are slow to buy and price-sensitive.

**Kill condition:**
- Interviews show that subcontract approval is a quick online form with no evidence burden.
- Or ContractorPass already has a shared subcontractor network at low cost.

**Score:** 5.5/10

**Sources:**
- https://www.tamimi.com/our-knowledge/publications/eyes-on-2026/articles/a-new-era-for-contractors-in-dubai-an-overview-of-law-no-7-of-2025-2/
- https://www.kennedyslaw.com/en/thought-leadership/article/2025/dubai-law-no-7-of-2025-a-new-era-for-the-construction-sector/
- https://www.charlesrussellspeechlys.com/en/insights/quick-reads/102ls3d-dubai-law-no-7-of-2025-regulatory-shifts-in-the-contracting-sector/
- https://www.dm.gov.ae/wp-content/uploads/2025/08/قانون-رقم-7-لسنة-2025-بشأن-تنظيم-مزاولة-أنشطة-المقاولات.pdf
- https://contractorpass.ae/
- https://www.g2.com/sellers/anis-infotech
- https://gulfnews.com/business/property/dubai-issues-over-10700-building-permits-in-q1-2026-as-construction-activity-accelerates-1.500486766

## Opportunity: Multi-emirate waste-transport compliance layer (Dubai Res. 34/2026 plus Abu Dhabi Bolisaty)

**Industry:**
Waste collection and transport: hazardous waste, used oil, C&D waste, organic and grease-trap waste, scrap trading.

**Buyer:**
Operations or compliance manager at a licensed waste transporter or collector, typically with 5–100 vehicles, often operating in both Dubai and the Northern Emirates or Abu Dhabi.

**Trigger / Why now:**
- Dubai Law No. 18 of 2024 on waste management is in force.
- Its implementing bylaw, Administrative Resolution No. 34 of 2026, took effect around 10 Mar 2026. Fines go up to AED 500,000, doubled for repeats, plus suspension, licence revocation and vehicle impounding.
- In June 2026 DM published a new set of activity-specific technical guides: used oil, hazardous waste collection and transport, C&D waste, organic waste, scrap trade and chemicals transport.
- In January 2026 DM published a guide to assessing and grading waste collection and transport facilities.
- Abu Dhabi runs its own e-manifest system, Bolisaty (Tadweer), which has existed since 2016.

**Current workflow:**
1. The transporter's own system or spreadsheet holds customers, jobs, vehicles and billing.
2. Each collection needs a transfer note or manifest in the relevant emirate's system. Dubai tracks vehicles via Rasid GPS. A secondary source says Dubai uses a Waste Transfer Note "via Montaji" within 24 h, which is unverified. Abu Dhabi uses Bolisaty.
3. Waste producers (hotels, commercial complexes, industrial sites, which must keep waste records under Res. 34) ask for disposal certificates and receipts.
4. Before inspections and the new grading assessment, staff compile evidence.

**Pain:**
- Regulatory: there are new rules, high fines and a new grading regime. Pain is inferred from the rules only, since no operator complaints were found.
- Operational: an older report (The National, undated in the snippet) said the DM Al Aweer plant handled about 10,000 tanker deliveries a day through about 40 outlets. The figure is old, but it shows the volume.

**Existing solutions:**
- Government systems: Rasid (DM) and Bolisaty (Tadweer).
- Waste fleet and route software such as Evreka, listed on Capterra UAE and used in the region.
- AMCS / Routeware-style enterprise suites (UAE presence unverified).
- Large integrated operators (Averda, Bee'ah, Imdaad) that build their own.

**The gap:**
A small or mid-sized transporter has to reconcile its own job records with Dubai's and Abu Dhabi's systems and produce producer-facing certificates. There is no evidence that any vendor offers a multi-emirate router for this. This is unverified: the Dubai system may capture everything automatically through Rasid, which would leave little duplicate entry.

**Possible product:**
"One job record, then the right manifest data per emirate, the customer disposal certificate, and an inspection and grading evidence file." It would start as a job and evidence system for small hazardous, used-oil and grease-waste transporters.

**MVP:**
- A mobile job ticket (photo, weight or volume, waste class, destination receipt).
- Per-emirate field mapping, with copy-ready data for Rasid or Bolisaty.
- A monthly customer certificate PDF.
- An evidence binder that follows the June 2026 DM technical-guide checklists.

**Pricing hypothesis:**
AED 75–150 per vehicle per month, or AED 500–2,000 per month per company (estimate).

**How to find first customers:**
- DM publishes downloadable lists of approved hazardous waste transporters (latest seen 21 May 2026) and of companies permitted to collect waste oil.
- Tadweer's list of licensed providers.
- Waste and recycling trade shows such as the WETEX environmental exhibition, a Dubai event.

**Risks:**
- Rasid and Bolisaty may need no duplicate entry.
- No API access, so the product would only prepare data.
- The buyer pool is limited (an estimated low hundreds of transporters).
- The big operators use their own systems.

**Kill condition:**
Three transporters say the government systems already hold the manifest and certificate data, and customers accept government printouts.

**Score:** 5/10

**Sources:**
- https://dlp.dubai.gov.ae/Legislation%20Reference/2026/Administrative%20Resolution%20No.%20(34)%20of%202026%20Regulating%20Waste%20Management.html
- https://dlp.dubai.gov.ae/Legislation%20Reference/2024/Law%20No.%20(18)%20of%202024%20Regulating%20Waste%20Management.html
- https://gulfnews.com/uae/uae-environmental-fines-from-dh500-to-dh10-million-for-violations-what-to-know-1.500687661
- https://dmpmedia.dm.gov.ae/uploads/2026/06/22-الدليل-الفني-بشأن-نشاط-جمع-ونقل-النفايات-الخطرة.pdf
- https://dmpmedia.dm.gov.ae/uploads/2026/01/الدليل-الفني-لتقييم-وتصنيف-منشآت-جمع-ونقل-النفايات.pdf
- https://dmpmedia.dm.gov.ae/uploads/2026/05/Approved-Hazardous-Waste-Transporters-2026May21.pdf
- https://www.dm.gov.ae/rasid/gps-tracking/
- https://www.dubizzle.com/blog/property/bolisaty-tadweer/
- https://www.dubaiwaste.com/dubai-waste-management-guide/ (secondary, WTN claim unverified)
- https://www.capterra.ae/software/179741/evrekasoft

## Opportunity: PINT AE e-invoicing exception and reconciliation console for accounting firms

**Industry:**
Accounting, bookkeeping and VAT-agent firms serving VAT-registered SMEs.

**Buyer:**
Owner or manager of a bookkeeping or tax-agent firm with 20–300 SME clients.

**Trigger / Why now:**
- Businesses with revenue of AED 50m or more go live on 1 Jan 2027 and must appoint an ASP by 30 Oct 2026. This deadline was moved from 31 Jul under an amended Ministerial Decision 244/2025. This resolves the conflict noted in the first pass.
- Businesses below AED 50m must appoint an ASP by 31 Mar 2027 and go live on 1 Jul 2027.

**Current workflow:**
1. Clients issue invoices from Tally, Zoho, Excel or legacy ERPs.
2. The ASP converts the invoices to PINT AE and transmits them over Peppol.
3. Rejections, missing buyer TRNs or Peppol IDs, credit notes and so on are fixed by hand.
4. The accountant reconciles invoices that were delivered, rejected or reissued against the VAT return.

**Pain:**
The ClearTax Readiness Index 2026 surveyed 500+ CFOs and tax directors:
- 73.3% have not formalised post-implementation operating models for reconciliation and exception handling.
- 64.8% expect existing finance teams to absorb the extra work.

**Existing solutions:**
- **56 accredited ASPs plus 6 pre-approved** as of 23 Sep 2026, including ClearTax, Tally, Tax Star (which explicitly targets accounting firms) and Comarch.
- Many ASPs reportedly offer about 100 free invoices a year to SMEs.
- ClearTax provides multi-entity support, 150+ schema checks and rejection dashboards.
- The Zoho Books connector runs via ClearTax.
- An Odoo PINT AE module exists.
- Wafeq is a local accounting tool.

**The gap:**
A reconciliation view across ASPs and clients for accounting firms whose clients use different ASPs. This only matters if client ASP choice stays fragmented. Single-ASP practice consoles (Tax Star, ClearTax) cover the case where the firm picks the ASP for its clients.

**Possible product:**
A read-only console that ingests ASP status exports and client ledgers. It would flag unreported, rejected or mismatched invoices per client before each VAT return.

**MVP:**
CSV import of ASP status reports and sales ledgers, a match engine, and a per-client exceptions list.

**Pricing hypothesis:**
AED 15–30 per client per month, with a minimum of AED 300 per month (estimate).

**How to find first customers:**
- The FTA registered tax agents directory (publicly searchable, unverified).
- ACCA and ICAEW UAE member networks.
- LinkedIn.

**Risks:**
- Firms standardise clients on one ASP that provides the console.
- ASP data exports may not be available.
- The window closes once ASPs mature.

**Kill condition:**
Five accounting firms say they push all clients onto one ASP whose console already reconciles.

**Score:** 4.5/10 (down from 5, because ASP competition is now confirmed at 56+ and practice consoles exist).

**Sources:**
- https://gulfbusiness.com/en/2026/finance/uae-extends-e-invoicing-provider-deadline-to-oct-30-2026/
- https://gulfnews.com/business/uae-announces-extension-of-einvoicing-provider-deadline-to-october-2026-1.500535895
- https://www.aaccounting.me/insights/choosing-accredited-service-provider-asp
- https://finline.ae/en/articles/uae-e-invoicing-asp-list
- https://cxotoday.com/media-coverage/uae-e-invoicing-readiness-reaches-57-5-as-businesses-move-into-implementation-phase/
- https://britishchamberdubai.com/news-details/5425
- https://www.stackcue.com/en/ae/blog/uae-e-invoicing-sme-guide

## Opportunity: FoodWatch-ready job reports for Dubai food-service contractors (pest control, grease trap, tank cleaning)

**Industry:**
Public-health pest control and hygiene contractors that serve food establishments.

**Buyer:**
Owner or operations manager of a DM-approved pest control or grease-trap cleaning company. These are mostly groups B and C, with 1–25 qualified staff.

**Trigger / Why now:**
- FoodWatch (DM's food-safety platform, possibly renamed DMChecked in 2025, which is unverified) requires food establishments to hold digital contracts with pest, grease-trap and water-tank cleaning suppliers. Services are requested and recorded there.
- Inspectors check FoodWatch records at every visit.
- More than 70,000 mandatory PICs (persons in charge) operate in Dubai food businesses.
- Under the 2026 waste bylaw, grease and organic waste also falls under the new DM technical guides.

**Current workflow:**
1. The contractor schedules the visit (often on WhatsApp or paper).
2. The technician completes a service report: chemicals, concentrations, areas, licence number, next service date.
3. The visit is recorded or confirmed in FoodWatch, and the PDF is sent to the client.
4. For grease traps, disposal receipts are matched to manifests.

**Pain:**
- Pain is per visit and mandatory, and records are checked by inspectors.
- Vendors' marketing stresses "DM-formatted service reports".
- There are no direct complaints, and the volume of duplicate entry is unverified.

**Existing solutions:**
- The free FoodWatch app ("Manage Services").
- Generic FSM and pest software (PestPac / WorkWave and similar). UAE presence is unverified.
- Odoo-based setups used by local firms.
- Process.st templates.
- Paper.

**The gap:**
No UAE-specific pest or hygiene job app was found that produces the DM-format report and stays in sync with FoodWatch. Whether FoodWatch has a supplier API is unknown.

**Possible product:**
A technician app that captures the visit once and produces the DM-format report, the client PDF and the FoodWatch entry data, plus the grease-trap disposal pairing.

**MVP:**
A mobile service report with DM fields and an approved-pesticide list, client PDFs, and a recurring schedule per establishment.

**Pricing hypothesis:**
AED 40–80 per technician per month (estimate).

**How to find first customers:**
DM publishes a monthly list of authorised pest control companies (latest seen July 2026). Al Bayan cites about 270 approved companies. Grease-trap contractors are listed on FoodWatch.

**Risks:**
- The market is small: about 270 pest firms plus perhaps a few hundred hygiene firms (estimate).
- If FoodWatch does the job itself, the app duplicates it instead of removing duplication.
- Firms are price-sensitive.

**Kill condition:**
FoodWatch's own supplier app already produces the service report and contractors are happy with it.

**Score:** 4.5/10

**Sources:**
- https://foodwatch.dm.gov.ae/
- https://www.dm.gov.ae/wp-content/uploads/2020/11/Foodwatch_FAQs_Booklet-English.pdf
- https://www.dm.gov.ae/dubai-municipality-oversees-more-than-70000-mandatory-pics-in-dubais-food-establishments/
- https://dmpmedia.dm.gov.ae/uploads/2023/06/قائمة-شركات-مكافحة-الحشرات-المصرح-لها-بالعمل-يوليو2026.pdf
- https://www.albayan.ae/amp/news/uae/society/1542781
- https://supernovaemirates.com/blog/dubai-municipality-pest-control-restaurants/
- https://www.dm.gov.ae/wp-content/uploads/2022/04/Guideline-for-maintaining-and-cleaning-grease-tra.pdf

## Rejected after competitor research

- **WPS salary-day monitor (Res. 340/2026).** Killed by payroll suites that already market Res. 340 checks: Darwinbox (per-employee 85% pre-run check), Peko, HONO, plus WPS checklists from payroll outsourcers (fit.ae, ops.ae). The score in the first pass was 4.5.
- **Emiratisation tracker.** Killed by ZenHR (Emiratisation calculator, Nafis quota reporting) and HONO (live Emirati ratio against MOHRE targets). About 18,000 firms are in scope (secondary source). Real compliance is a hiring problem.
- **goAML for DNFBPs (DPMS and real estate).** The problem is real: 8,191 DPMS were registered on goAML by Jun 2025, 1.45M DPMSRs were filed in 2021–25, and AED 42m in fines were imposed in H1 2025. It is crowded, though: RapidAML (AML UAE), Citadel365, InfoAML (native goAML), DPMS Global, Zigram, KYCK and the amluae toolkits, and RAKEZ sells AML packages. Moved to "too competitive".
- **Pharmacy Tatmeen dispensing integration.** Killed by pharmacy management systems with Tatmeen built in (HealthCluster, FactsERP, Masirat).
- **Trakheesi listing permits.** Killed by PropSpace (checks permits before syndicating to 80+ portals) and the DLD listing-validation API.
- **MPCI cargo pre-filing.** Requires NAIC accreditation. ODeX, CrimsonLogic, TradeTech and GlobalEtrade already serve forwarders.
- **Climate law MRV.** Annual. The government provides a free IEQT tool. Zevero, 6clicks, Spectreco and consultancies compete. The 0.5 MtCO2e threshold in Cabinet Res. 67/2024 means the strict duties fall on large emitters.
- **Fire-safety AMC reporting.** No duplicate portal entry was found. Inspection apps (InspectOps, SafetyQube, Synchroteam) and fire ERPs exist.

## Attractive problem, poor distribution

- **Mollak (Dubai jointly owned property) budget and invoice sync.** The work is mandatory and recurring, but there are few management companies (estimated low hundreds) and the Mollak API is already used by custom developers and NetSuite/Rioo add-ons.
- **KHDA nursery compliance (handbooks issued Sep 2026).** There is a fresh trigger and self-assessment checklists, but only about 200+ nurseries, already served by nursery apps.
- **Food import consignment permits (FIRS/ZAD) and Montaji product registration.** The work happens per shipment, but clearing agents and consultants own the customer relationship, and DM's own digital platform is strong.

## Too competitive

- goAML/AML for DPMS and real estate brokers (see above).
- Generic PINT AE e-invoicing or acting as an ASP: 56+ accredited ASPs, many with free SME tiers.
- Clinic insurance denial management (DHA/DOH): HIS, RCM vendors and outsourcers.
- WPS payroll compliance and Emiratisation tracking: HR and payroll suites.

## Pass history

- **First pass (2026-10-04):** 6 searches, English only. It proposed e-invoicing (5), Emiratisation (4), WPS (4.5) and goAML for DNFBPs (5). It did not screen customs, waste, food, construction or other industries.
- **Deep pass (2026-10-05):** about 52 searches, including Arabic. Changes:
  - The ASP deadline conflict is resolved: 30 Oct 2026 for the large-business wave and 31 Mar 2027 for SMEs. 56 ASPs were confirmed, and e-invoicing was cut to 4.5.
  - WPS and Emiratisation were rejected after finding payroll and HR competitors (Darwinbox, Peko, HONO, ZenHR).
  - goAML was moved to "too competitive" (RapidAML, Citadel365, InfoAML and others).
  - Two new regulatory-trigger opportunities were added: Dubai contracting Law 7/2025 (5.5; competitor ContractorPass found) and Dubai waste bylaw Res. 34/2026 with multi-emirate manifests (5).
  - The FoodWatch contractor app was added (4.5).
  - Ten more industries were screened: pharmacy, real estate ads, MPCI cargo, climate MRV, fire, schools and nurseries, Mollak, sugar excise, food import and lifts.
  - Still unverified: the FoodWatch and Rasid APIs, the details of the DM subcontract-approval form, the size of the Contractor Register, and the "WTN via Montaji" claim.
