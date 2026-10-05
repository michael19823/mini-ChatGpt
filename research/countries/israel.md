# Israel - research report (deep pass, as of 2026-10)

Depth: about 59 WebSearch calls in total (5 in the first pass, about 54 in this deep pass), mostly in Hebrew. WebFetch was blocked, so everything comes from search snippets. Anything not confirmed is marked "unverified" or "estimate".

## Accessibility check
- There are no sanctions barriers to selling software. Shekel card and bank payments are normal. A Hebrew right-to-left (RTL) interface is mandatory, and B2B buyers expect a VAT invoice with an Israel Invoice allocation number for amounts of NIS 5,000 or more from June 2026. A foreign seller would likely need a local entity or a reseller (unverified).
- Most government systems have no open API: Labor Ministry, Population and Immigration Authority (PIBA), the Ministry of Environmental Protection (MoEP) and the Education Ministry licensing portal. Customs Shaar Olami ("Global Gate") and the Israel Tax Authority (ITA) expose interfaces only to registered software houses (unverified). Products therefore need to work by preparing data, documents and deadline tracking, not by submitting to portals.
- The market is sophisticated. Local horizontal SaaS (Hilan, Priority, Morning/Green Invoice, DATwise) covers most mainstream workflows, so the gaps are mostly new regulatory obligations that incumbents have not yet turned into products.
- The war-time economy (2023-2026) delayed some regulations. Several deadlines were pushed back, so check every date before acting.

## Industries screened
| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Cleaning / security / catering contractors and their clients (service recipients) | Quarterly per-employee wage reconciliation under the Enhanced Enforcement of Labor Laws regulations, applying to all contracts from 2025-01-01. Certified wage auditor (בודק שכר מוסמך) checks | **Candidate (best)** | New mandatory recurring obligation on every service recipient. Today it is served by audit/CPA firms and the payroll vendors on the contractor side. No recipient-side reconciliation SaaS was found |
| Construction (developers and contractors) | New construction safety regulation amendment (published 2025-10-16, effective 2026-10-16): new "safety controller" (בקר בטיחות) role appointed by the client, written report within 48 h, expanded reporting | **Candidate** | Strong why-now. But the safety software market (DATwise, Reportix, Reporto, Ramdor, eyedo) is crowded and can add a template quickly |
| Hazardous materials / toxins-permit holders | Toxins permit (היתר רעלים) conditions, toxins register, paper triplicate hazardous-waste accompanying form | Candidate (weak-medium) | About 4,500 permit holders. Permit conditions are being revised (first update since 2015) and the waste form is still printed and signed in three copies. EHS suites and consultants compete |
| Private daycares (מעונות יום) | Education Ministry operating license and renewal, staff training (220 h), background checks, cameras | Candidate (weak-medium) | About 5,060 licensed daycares and 683 found operating unlicensed (July 2025). Renewal is infrequent. Parent-communication apps exist but no licensing-file tool was found |
| Importers / customs brokers | Shaar Olami importer's declaration (new template from 2025-02-23), periodic supplier declarations, 7-year document retention | Weak | Brokers own the workflow. Interface access is restricted |
| Food importers | EU track ("what is good for Europe is good for Israel"), effective 2025-01-01, "proper importer" track | Weak / poor distribution | Consultant- and law-firm-driven. Small buyer pool. Training from the Standards Institution (SII) |
| Bookkeeping / invoicing | Israel Invoice allocation numbers (NIS 10k from 2026-01, NIS 5k from 2026-06), checking that numbers on supplier invoices are valid | **Rejected (too competitive)** | Morning, Priority, H-ERP/Hashavshevet, Formas, plus a free ITA verification service |
| Home-care (nursing) agencies | National Insurance (BTL) long-term-care tender, caregiver attendance reporting (about NIS 1,000/day fine for false reports) | **Rejected** | Dedicated vendors already exist: Siudon, Noga CARE, Menarva Adam-Care. About 380k beneficiaries but few, large agencies. BTL runs its own location-based attendance system |
| Packaging producers and importers | Packaging-law reporting of packaging weight by product family to TAMIR (the only recognized recycling body) | **Rejected** | Single channel (TAMIR's own reporting system). MoEP is considering simpler reporting for firms under 300 t/year, which removes the small-firm pain |
| Employers of foreign workers (construction, agriculture, caregiving) | Monthly deposit (12.5%), health insurance, housing, PIBA notices | Rejected (served) | Payroll bureaus and private agencies (Kav LaMaasik, Neto) already do it as a service |
| Pharmacies | 2026 opioid rules: e-prescriptions only, 5-day manual prescriptions, computerized narcotics register now allowed | Poor access | Value depends on integration with the health funds (HMO) systems. Pharmacy-system vendors would add it. Chain and HMO pharmacies dominate |
| Interest-free loan funds (גמ"חים) | New anti-money-laundering (AML) order for interest-free deposit and credit providers (approved 2025-12-14) and Capital Market Authority reporting | Too small | Only 107 gemachs registered for a license |
| Veterinary clinics | Reporting rabies vaccination and microchips to the municipal dog registry | Weak | Small market. Municipal formats vary, but vet practice software or email covers it (unverified) |
| Garages | Proposed obligation to report repairs to the Transport Ministry (MoT) | Not yet | Only at the planning stage. No effective date found |
| Agriculture (export growers) | Spray logs for GlobalG.A.P. / EU pesticide-residue limits | Not pursued | International tools (Farmable and others) plus strong Israeli agtech. No local regulatory trigger found |
| Security companies | Tracking guard firearm licenses and certifications | Insufficient evidence | Searches returned only job ads. Worth testing in interviews alongside opportunity 1 |
| Small-business income tax | Annual return for exempt small businesses (osek patur) | Rejected | Government tools plus accountants. Low willingness to pay |

## Opportunities

### Opportunity: Contractor-wage quarterly reconciliation workspace (Enhanced Enforcement regulations)

**Industry:**  
Outsourced cleaning, security/guarding and catering services (the clients that buy them)

**Buyer:**  
On the client side: the HR, payroll or procurement controller at a mid-size private company, hospital, college, local authority or housing company that uses cleaning, security or catering contractors. As a second segment: certified wage auditors and small CPA firms that sell contractor-wage audits, who would use it as a multi-client tool.

**Trigger / Why now:**  
The Enhanced Enforcement of Labor Laws regulations (2023) set out the wage components that make up the "value of a work hour" for contractor employees. They apply to new contracts from 2024-01-01 and to **all existing contracts from 2025-01-01**. Every service contract must list the wage components and the minimum wage cost. The client and the contractor must **reconcile at least once a quarter, per employee**, the variable components (seniority, job percentage, overtime, weekly rest, national insurance and so on). They also need a monthly or quarterly reporting mechanism and agreed times for reporting "qualifying events". Clients that rely on periodic checks by a certified wage auditor get a 50% reduction in fines. A 2026 law-firm outlook expects enforcement to tighten.

**Current workflow:**  
1. Each month or quarter, the contractor sends payslips, attendance reports, pension and severance deposit confirmations and an invoice as PDF or Excel.  
2. Client staff, or an outsourced wage auditor, rebuild each worker's hourly value in Excel against the contract's wage-component schedule and the Labor Ministry calculator.  
3. They chase missing documents, compute the differences (overtime, seniority steps, holiday pay, pension), agree the reconciliation with the contractor and document it for the enforcement defence. A certified auditor samples workers periodically.

**Pain:**  
- The obligation is mandatory, quarterly and per employee, and since 2025 it covers every contract.  
- Clients are directly liable, with administrative fines that are halved only if they relied on audits.  
- Job ads for "wage audit consultants" show the work is manual. CPA firms sell contractor-wage audits as a service.  
- The State Comptroller's 2024 local-government report looked at how local authorities employ contractor workers.

**Existing solutions:**  
- Certified wage audit firms using in-house software (for example pay-check.co.il, which says it uses "proprietary software"), CPA firms (cpa.co.il, BDO) and bsachar.co.il.  
- Payroll and attendance vendors used by contractors (Hilan, Malam Payroll Plus, Tamal, Ranad), which produce the contractor's side of the data. Hilan markets contractor-employee features.  
- The free Labor Ministry wage calculator, and contractor-management systems (mrcoral.co.il describes one).

**The gap:**  
No product was found that sits on the **client side**, takes the contractor's payslip and attendance exports, applies the contract's wage-component schedule and the regulation's hourly-value rules per sector, and produces the quarterly per-employee reconciliation, the missing-document list and an audit-ready evidence file. Today that work is Excel plus paid auditors. (Not finding a product is not proof that none exists. Verify in interviews.)

**Possible product:**  
A Hebrew web app with three parts: a contract wage-component template per sector, uploads of payslip and attendance files (PDF parsing plus Excel import), and a rules engine. The engine computes the expected cost per worker, flags shortfalls and prepares the quarterly reconciliation statement and the auditor's sampling pack.

**MVP:**  
Cleaning contracts only:  
- one contract template;  
- Excel/CSV import of the contractor's monthly payroll summary;  
- per-worker expected-vs-paid check for the main components (base hourly rate, overtime, pension and severance, holiday/vacation, seniority);  
- quarterly PDF statement plus a missing-documents checklist.

**Pricing hypothesis:**  
NIS 300-900/month per client organization, scaled by contractor headcount. Auditor/CPA multi-client tier at NIS 1,500-3,000/month (estimate). For comparison, external audits cost thousands of shekels per quarter (unverified).

**How to find first customers:**  
- Labor Ministry list of licensed service contractors (license service on gov.il) and their client lists from tenders.  
- Municipal and government tenders for cleaning and security on mr.gov.il (the clients are public).  
- Hospitals, colleges and housing companies.  
- Certified wage auditors (regulated profession, about 100s, unverified) as a channel.  
- Israel Chamber of Commerce labor-law updates.

**Risks:**  
- Payroll vendors (Hilan) could add a "client portal".  
- Government bodies may already use a central Accountant-General mechanism.  
- Contractors may refuse to send structured data.  
- Collective-agreement extensions and sector rates change often, so rule maintenance is a cost.

**Kill condition:**  
Interviews with 10 clients show either that they outsource the whole check to an auditor for less than NIS 500/quarter and don't want a tool, or that the large contractors already supply a reconciliation portal that clients accept.

**Score:** 6/10

**Sources:**  
- https://www.goldfarb.com/he/%D7%AA%D7%97%D7%95%D7%9C%D7%AA-%D7%94%D7%AA%D7%A7%D7%A0%D7%95%D7%AA-%D7%9C%D7%94%D7%92%D7%91%D7%A8%D7%AA-%D7%94%D7%90%D7%9B%D7%99%D7%A4%D7%94-%D7%A9%D7%9C-%D7%93%D7%99%D7%A0%D7%99-%D7%94%D7%A2%D7%91/  
- https://www.nevo.co.il/law_html/law00/217846.htm  
- https://meitar.com/wp-content/uploads/2024/12/Labor-Law-Update-Enhanced-Enforcement-Regulations.pdf  
- https://herzoglaw.co.il/en/news-and-insights/labour-law-year-in-review-2025-looking-ahead-to-2026/  
- https://www.chamber.org.il/serviceslobby/legal/1856/79616/ (certified wage auditor regulations 2017)  
- https://pay-check.co.il/ ; https://www.cpa.co.il/accounting-services/contractor-salary-audit/ ; https://www.bsachar.co.il/  
- https://library.mevaker.gov.il/sites/DigitalLibrary/Documents/2024/Shilton/2024-Shilton-204-Empoyment.pdf  
- https://www.gov.il/he/service/manpower-contractor-license-request

### Opportunity: Client-side compliance pack for the new construction safety regulations (safety controller)

**Industry:**  
Residential construction and urban renewal

**Buyer:**  
- Small and mid-size developers and urban-renewal (TAMA 38 / pinui-binui) promoters, who are now the "client" with new duties.  
- Independent civil engineers and technicians who take on the new safety-controller role for several projects.

**Trigger / Why now:**  
- The construction safety regulation amendment (2025) was published on 2025-10-16 and **takes effect on 2026-10-16**. Labor-committee commentary calls it the first major update in 37 years.  
- The client must appoint a safety controller: a registered civil engineer or technician who visits at least every three months and at critical stages. The controller must deliver a written report to the client and the contractor within 48 hours.  
- Roles are redefined (site manager, work manager), the builder's reporting duty is expanded, and a safety management plan chapter is added.  
- About 80,000 housing starts were recorded in 2025 and about 207,000 units were under active construction (September 2025).

**Current workflow:**  
1. The developer appoints a controller by letter. The contractor separately reports the work manager to the Labor Ministry through the gov.il service.  
2. The controller visits, writes a Word/PDF report with photos and emails it within 48 h.  
3. Defects are followed up by email and WhatsApp. Nobody tracks the "critical stage" triggers or whether the contractor closed the findings. The evidence trail matters after an accident.

**Pain:**  
The duty is brand new and mandatory, with legal exposure for clients who never had safety duties before. The law-firm and consultant articles (Herzog, Agmon, Gornitzky, safetyeng.co.il price guide) show confusion and demand for guidance. Workload evidence is still indirect (unverified).

**Existing solutions:**  
- DATwise, described as "the system of safety officers in Israel".  
- Reportix, a Hebrew SaaS for safety visit reports.  
- Reporto, Ramdor safety, eyedo and H.B. Innovation.  
- Construction QA/field apps such as Cemento (Israeli origin) and SafetyCulture.  
- Word templates sold by consultants.

**The gap:**  
The incumbents serve safety officers (ממוני בטיחות) inside a company. No product was found built around the **client's** new statutory chain: appoint the controller, track the critical-stage schedule, enforce the 48-hour report SLA, follow up findings to closure with the contractor, and keep a dated evidence file per project. The gap could close fast if DATwise or Reportix add a "safety controller" template.

**Possible product:**  
A per-project compliance tracker for developers and controllers. It holds the regulation-mapped visit schedule and critical-stage triggers, a mobile report template that meets the content rules, automatic timestamped delivery to client and contractor, and a findings-closure loop.

**MVP:**  
A safety-controller report app with the regulation checklist, photos, PDF output, timestamped email delivery, an open-findings dashboard per project, and reminders for the quarterly visit.

**Pricing hypothesis:**  
NIS 150-400/month per active project for developers. NIS 200-500/month per controller for unlimited reports (estimate).

**How to find first customers:**  
- Registry of engineers and technicians (Engineers Registrar).  
- Urban-renewal promoters from the Government Authority for Urban Renewal.  
- Contractors' registry (Registrar of Contractors) and builders' associations.  
- Safety-controller training courses at colleges (for example shviro-college).

**Risks:**  
- Incumbents can copy it in weeks.  
- Developers may simply contract a safety firm that brings its own tool.  
- The effective date could be postponed again.

**Kill condition:**  
By Q1 2027 DATwise, Reportix or Cemento ship a dedicated safety-controller module, or interviews show that controllers are mostly hired from safety firms that already have software.

**Score:** 5/10

**Sources:**  
- https://www.osh.org.il/heb/news/news,7385/  
- https://x.com/labor_gov_il/status/1979830894581166557  
- https://herzoglaw.co.il/he/news-and-insights/%D7%AA%D7%99%D7%A7%D7%95%D7%9F-%D7%9C%D7%AA%D7%A7%D7%A0%D7%95%D7%AA-%D7%91%D7%A2%D7%A0%D7%99%D7%99%D7%9F-%D7%91%D7%98%D7%99%D7%97%D7%95%D7%AA-%D7%91%D7%90%D7%AA%D7%A8%D7%99-%D7%91%D7%A0%D7%99%D7%94/  
- https://www.agmon-law.co.il/%D7%AA%D7%99%D7%A7%D7%95%D7%9F-%D7%AA%D7%A7%D7%A0%D7%95%D7%AA-%D7%94%D7%91%D7%98%D7%99%D7%97%D7%95%D7%AA-%D7%91%D7%A2%D7%91%D7%95%D7%93%D7%94-%D7%91%D7%A2%D7%A0%D7%A3-%D7%94%D7%91%D7%A0%D7%99%D7%99/  
- https://safetyeng.co.il/reshimat-bdikot-baker-betihut.html ; https://safetyeng.co.il/safety-inspector-price-guide.html  
- https://www.gornitzky.co.il/wp-content/uploads/2026/01/בטיחות-בעבודה-–-סיכום-שנת-2025-וניתוח-מגמות-לקראת-שנת-2026.pdf  
- https://www.gov.il/he/service/construction-actions  
- https://www.datwise.info/ ; https://www.reportix.co.il/ ; https://reporto.co.il/safety ; https://www.ramdor.co.il/safety/

### Opportunity: Toxins-permit compliance calendar and digital hazardous-waste accompanying form

**Industry:**  
Small manufacturers, labs, metal finishers, pool/cleaning-chemical distributors and other holders of a toxins permit

**Buyer:**  
The plant manager or the "toxins officer" at a 10-200 employee site holding a toxins permit, and the environmental consultants who serve many such sites.

**Trigger / Why now:**  
- MoEP is revising the general conditions of the toxins permit, the first update since 2015. The changes cover the toxins officer's presence, wastewater sampling, soil investigation, periodic inspections, Home Front Command storage and emergency rules, and changes in reporting methods. They affect about 2,500-3,000 of the roughly 4,500 permit holders. Final status and date are unverified; the draft dates from 2023.  
- PFAS-specific permit conditions were added. The pollutant release register (PRTR, מפל"ס) reporting was deferred.  
- Hazardous-waste transfers still use a printed accompanying form in three signed copies, kept for three years.

**Current workflow:**  
1. Keep the toxins register (purchases and sales) in Excel or on paper.  
2. Track permit conditions (sampling, inspections, drills, renewal) in a consultant's spreadsheet.  
3. For every waste pickup, fill in the triplicate paper form, collect signatures from carrier and site, file copies, and later reconcile them against the annual report.

**Pain:**  
- Many conditions are spread across a free-text permit.  
- Renewal and inspection risk; MoEP has imposed fines in related areas.  
- Paper forms for each waste shipment.  
- Consultants (elm.co.il, nextep, shachar-safety, enviro-services) publish guides, which shows demand. Hours spent are unverified.

**Existing solutions:**  
DATwise (EHS, including environment), Infospot (regulatory update subscription), environmental and safety consultancies, generic EHS suites (SafetyCulture), Excel.

**The gap:**  
Nothing was found that turns an individual toxins permit into a dated obligation calendar with evidence, and digitizes the per-shipment hazardous-waste form and its reconciliation for small sites. The form must still be printed and signed, so the product can only prepare and archive it, not replace it.

**Possible product:**  
Upload the permit PDF, extract the conditions into a calendar (sampling, inspections, register updates, renewal), keep the toxins register, and pre-fill and archive the hazardous-waste form with a three-year retention archive.

**MVP:**  
Permit-condition extraction checked by hand, plus a calendar, a toxins register template and a pre-filled waste-form PDF generator. Sell through two or three environmental consultants first.

**Pricing hypothesis:**  
NIS 200-500/month per site. Consultant tier at NIS 1,000-2,500/month (estimate).

**How to find first customers:**  
MoEP toxins-permit data (the permit is public in some districts; full list unverified), Manufacturers Association members, environmental consultants as a channel.

**Risks:**  
- The new conditions might not be finalized.  
- DATwise already serves larger sites.  
- MoEP may launch an electronic waste-tracking system.  
- Consultants may see it as a threat.

**Kill condition:**  
MoEP announces an electronic hazardous-waste manifest system with free web forms, or consultants say clients won't pay beyond the consultant's fee.

**Score:** 4/10

**Sources:**  
- https://infospot.co.il/n/Update_in_the_general_conditions_of_the_poisons_permit  
- https://infospot.co.il/n/Update_on_toxin_permit_conditions  
- https://www.gov.il/he/service/toxins-permit-request  
- https://www.gov.il/he/service/attached-form-dangerous-garbage  
- https://www.elm.co.il/toxins-permit-guide/  
- https://www.datwise.info/

### Opportunity: Licensing-file manager for private daycares

**Industry:**  
Private infant daycares (ages 0-3)

**Buyer:**  
Owners of private daycares (often single-site) and small chains

**Trigger / Why now:**  
- Under the Daycare Supervision Law (2018), licensing is phased in with a deadline of 2025-08-31 referenced in Education Ministry procedures.  
- There is a new licensing procedure for the 2025/26 school year.  
- The 2026 State Comptroller report found about 5,060 licensed daycares (about 212k toddlers) and 683 found operating without a license by July 2025, so enforcement is coming.  
- Licensing covers ownership, training (a 220-hour pedagogical program within two years), capacity, environmental safety, cameras, background checks and insurance. Renewal goes through the ministry's computerized system with all documents attached.

**Current workflow:**  
1. Collect staff certificates, police sex-offence clearances, training progress, safety and fire approvals, camera compliance and insurance.  
2. Upload them to the Education Ministry owners' portal for a new license or renewal.  
3. Track expiries and new staff by hand. Inspections find gaps.

**Pain:**  
Operating without a license is illegal and enforcement is rising. The document set is per staff member and changes with staff turnover. Evidence of hours spent is indirect (unverified).

**Existing solutions:**  
Parent-communication apps (GanBook, Kiddiebox), licensing consultants (unverified), Excel and folders.

**The gap:**  
No product found that tracks each staff member's licensing evidence (training hours, background check, first aid) and the site's licensing conditions, ready for portal upload and inspections.

**Possible product:**  
A licensing-readiness checklist per daycare and per staff member, with expiry alerts and a portal-ready document bundle.

**MVP:**  
Checklist built from the published procedure, staff document vault with expiry dates, and an export bundle.

**Pricing hypothesis:**  
NIS 80-200/month per daycare (estimate). This is a low-ARPU segment.

**How to find first customers:**  
Education Ministry list of licensed daycares (not verified as public), private daycare operators' associations, Facebook groups for daycare owners.

**Risks:**  
- Renewal is infrequent, so it may be a one-off need.  
- Low willingness to pay.  
- GanBook could add the feature.

**Kill condition:**  
The license is multi-year with no interim reporting, and owners say a one-time consultant is enough.

**Score:** 4/10

**Sources:**  
- https://library.mevaker.gov.il/sites/DigitalLibrary/Documents/2026/Risks/2026-Risks-104-Taktzir.pdf  
- https://meyda.education.gov.il/files/PortalBaaluyot/POB/daycare/rishui/forms/tashpav/nohal-ris-haka.pdf  
- https://meyda.education.gov.il/files/PortalBaaluyot/POB/renewal-private-operating-license.pdf  
- https://pob.education.gov.il/institutions/main-daycare/licensing-proc-daycare/  
- https://apps.apple.com/app/id658326587 (GanBook)

### Opportunity: Importer-declaration and supplier-document prep for small importers (Shaar Olami)

**Industry:**  
Import / customs

**Buyer:**  
Small and mid-size importers and small customs-broker offices

**Trigger / Why now:**  
- New importer's declaration template in Shaar Olami from 2025-02-23, with a Chamber of Commerce webinar on 2024-12-18.  
- Periodic importer declaration covering suppliers for imports above $5,000 (from 2025-03).  
- Duty to retain supplier invoices and preference documents for 7 years.  
- The "We don't stop at the port" and "what is good for Europe" reforms move standards checks to importer declarations and post-release enforcement.

**Current workflow:**  
1. The importer receives supplier invoices and packing lists.  
2. The broker re-keys the data into Shaar Olami with HS, standards and exemption codes.  
3. The importer keeps declarations and supporting documents for audits.

**Pain:**  
Driven by the rule change. Penalties for wrong declarations are mentioned in broker guides (awintl.co). No direct complaint data was found.

**Existing solutions:**  
Brokers' and forwarders' systems (FedEx/DHL clearance), Shaar Olami itself, ERP modules, international vendors such as MIC Customs (presence in Israel unverified).

**The gap:**  
Unverified: a supplier-declaration and evidence vault on the importer side, plus pre-checks before handing over to the broker.

**Possible product:**  
Invoice parser plus standards/exemption checklist that exports a broker-ready file, and a 7-year document archive per shipment.

**MVP:**  
PDF invoice to structured line items, a flag for standards-regulated HS chapters, and an archive.

**Pricing hypothesis:**  
NIS 200-600/month (estimate).

**How to find first customers:**  
Israel Chamber of Commerce importer members, licensed customs-broker list.

**Risks:**  
Brokers own the relationship. No interface access. Customs keeps changing the system.

**Kill condition:**  
Brokers say their software already does this and importers outsource it completely.

**Score:** 3.5/10

**Sources:**  
- https://www.chamber.org.il/media/169512/%D7%95%D7%95%D7%91%D7%99%D7%A0%D7%A8-%D7%AA%D7%A6%D7%94%D7%99%D7%A8-%D7%99%D7%91%D7%95%D7%90%D7%9F-%D7%94%D7%97%D7%93%D7%A9-18122024.pdf  
- https://awintl.co/port-documents/  
- https://www.freightnews.co.za/article/israeli-customs-extends-data-requirements  
- https://goldfarb.com/client-update-not-stopping-at-the-port-reform-launches-in-israel

## Rejected after competitor research
- **Allocation-number monitor for bookkeepers.** Killed by:  
  - the free ITA invoice-verification service (gov.il/he/service/verify-vendor-invoice-information);  
  - Priority and H-ERP/Hashavshevet, which fetch and verify allocation numbers on supplier invoices from inside the ERP;  
  - Formas;  
  - Morning (Green Invoice), which issues invoices with allocation numbers.  
- **E-invoicing app for SMBs.** Killed by Morning, iCount and Priority.  
- **Home-care agency operations and BTL attendance reporting.** Killed by Siudon, Noga CARE and Menarva Adam-Care (dedicated vendors with BTL funding logic and caregiver attendance apps) and by BTL's own location-based attendance system. The buyers are few, large agencies under a national tender.  
- **Packaging EPR reporting tool.** TAMIR is the only recognized recycling body and runs its own reporting system. MoEP is considering simpler reporting for producers under 300 t/year.  
- **Foreign-worker employer compliance (deposits, insurance, PIBA notices).** Already done as a service by payroll bureaus and agencies (Kav LaMaasik, Neto, manpower firms).  
- **Small-business income-tax filing helper.** Government tools plus accountants.

## Attractive problem, poor distribution
- **AML compliance for interest-free loan funds (gemachs).** A new AML order (approved 2025-12-14) and Capital Market Authority rules start about 18 months after final publication. Real, new obligations, but only 107 funds registered for a license, and the communities are hard to reach.  
- **Food-import compliance file (EU track / "proper importer").** Consultant- and law-firm-driven. Small reachable pool.  
- **Pharmacy opioid / computerized narcotics register (2026 rules).** Value depends on integration with the health-fund systems. Independent pharmacies are a minority.

## Too competitive
- Safety-officer inspection and reporting software in general: DATwise, Reportix, Reporto, Ramdor, eyedo. This is why the construction opportunity above is limited to the client-side statutory chain.  
- Payroll/attendance for contractors: Hilan, Malam Payroll Plus, Tamal, Ranad.  
- Invoicing and e-invoicing (see rejected).

## Pass history
- **First pass (5 searches):** shallow. Proposed the Shaar Olami importer tool (4/10), the food-import file (3.5/10) and the allocation-number monitor (3/10).  
- **This deep pass (about 54 searches, mostly Hebrew):**  
  - Screened pharmacies, home care, security/cleaning contractors, construction safety, daycares, hazardous materials and waste, packaging EPR, foreign workers, vets, garages, agriculture and gemachs.  
  - **New:** the contractor-wage quarterly reconciliation opportunity (6/10, now the top idea), the construction safety-controller pack (5/10), the toxins-permit calendar (4/10) and the daycare licensing file (4/10).  
  - **Re-scored:** Shaar Olami lowered from 4 to 3.5. Food import moved to poor distribution.  
  - **Killed:** the allocation-number monitor, after confirming that Priority, H-ERP and Formas verify allocation numbers inside the ERP and that ITA offers a free verification service.  
  - **Rejected with named competitors:** home care (Siudon, Noga CARE, Menarva) and packaging EPR (TAMIR as the only channel; MoEP simplifying reporting under 300 t).  
  - **Still unverified:** the number of certified wage auditors, whether a client-side reconciliation SaaS exists, the final status of the new toxins-permit conditions, and whether the list of licensed daycares is public.
