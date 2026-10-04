# South Africa — Indie Opportunity Research (as of 2026-10-04)

> **Research-limit disclosure.** This track was cut short by tooling, not by lack of leads. WebFetch was blocked by the egress proxy for every domain tried (sars.gov.za, gov.za, engineeringnews, itweb, lawlibrary, sapvia, dailymaverick, pv-magazine, george.gov.za, wetility, wikipedia). The shared WebSearch cap (200 per session across all parallel agents) ran out twice, so this track got about 20 searches. Every fact below comes from search-result summaries, with the URLs listed. Primary documents were **not** opened. Anything marked *unverified* comes from background knowledge and needs checking before an interview or build decision. Scores are a little conservative to reflect this.

---

## Industries screened

| # | Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|---|
| 1 | Solar PV installers / electricians | SSEG (rooftop solar) registration with Eskom and ~180 municipal distributors | **Opportunity (best)** | Eskom deadline of 30 Sep 2026, plus municipal requirements that differ, backlogs, and different paper/portal routes |
| 2 | Agriculture / forestry / mining contractors | Diesel refund logbooks and claims moving to a new standalone SARS system | **Opportunity (contested)** | Biggest change in 25 years: refund rose to 100% on 1 Apr 2026 and a new platform went live in Sep 2026. But at least 6 vendors are already moving in |
| 3 | Construction subcontractors | Per-project H&S ("safety") files under Construction Regulations 2014 | **Opportunity (narrow angle)** | Required on every job, every principal contractor has its own spec, and consultants and template sellers do this by hand today |
| 4 | Payroll bureaus / employers under bargaining councils | Monthly council returns, levies and benefit-fund schedules | **Provisional / likely too competitive** | SimplePay and AllWage already handle councils. Only the long tail of smaller councils may be open |
| 5 | Healthcare providers | COIDA (injury-on-duty) medical claims to the Compensation Fund via CompEasy | Rejected | The root problem is the Fund paying (average 347 days), not software. CompSol and billing agents already act as intermediaries |
| 6 | Producers / importers (packaging, EEE, lighting, etc.) | EPR registration, PRO fees and reporting | Rejected | PROs take on the reporting. 2025 amendments only proposed. Buyers' WTP for a separate tool is unclear |
| 7 | Waste transporters / recyclers | Municipal transporter registration, SAWIS reporting, hazardous-waste manifests | Attractive problem, poor distribution/WTP | Real fragmentation (each municipality has its own by-law registration), but buyers are small and low-margin and no 2025–26 trigger was found |
| 8 | Private security companies | NBCPSS / PSSPF contributions, PSIRA compliance | Attractive problem, poor distribution | Non-payment is often deliberate (Adjudicator cases), so the buyers who need it most don't want transparency |
| 9 | Mining / large-site contractors | Principal-side contractor compliance portals | Too competitive | Contractor Compliance, mai Contractor Portal, LinkSafe, Verature and Contractor Check are already listed on Capterra ZA |

---

## Opportunity: SSEG Registration Pack Router for Solar Installers

**Industry:**
Solar PV / battery installation (residential and small commercial), electrical contracting

**Buyer:**
Owner or office admin of small–mid PV installation companies, and DoEL-registered electricians or ECSA engineers who do sign-offs and CoCs in volume. Do **not** sell to homeowners, because that is a consumer trap.

**Trigger / Why now:**
- Eskom set **30 Sep 2026** as the deadline for registering residential low-voltage PV and battery systems, and its registration-fee waiver ended the same day. In Aug 2026 Eskom backtracked on fines and disconnections for residential non-registration, but it still says it can disconnect "unsafe" systems.
- Municipal penalties are reported at **R6,000–R30,000** depending on the municipality.
- Since 1 Oct 2025, Eskom residential systems can be signed off by a DoEL-registered person instead of an ECSA professional. This moves the paperwork onto electricians.
- Municipalities run their own registration drives. For example, Midvaal ran a window from 1 Sep–30 Dec 2025 at a 50%-discounted fee of R969.11.
- SAPVIA says inconsistent municipal by-laws create a growing backlog. It also flags legacy applications from 2022 to Aug 2025 that are still unprocessed, and it is in talks with City Power (Apr 2026) and Tshwane about their backlogs.
- Insurers and brokers (FIA) warn that unregistered systems are a claims risk.

**Current workflow:**
1. The installer designs the system, installs it and issues an electrical CoC.
2. The installer collects the customer ID, proxy authorisation, SLD/schematic, inverter NRS 097-2-1 certificate, test/commissioning report and labelling evidence.
3. The installer works out which distributor applies (Eskom direct, a metro, or one of ~180 municipalities) and which channel it uses:
   - Cape Town e-Services with a proxy grant,
   - SEA's shared `apply.sseg.org.za` portal (George, Overstrand, others),
   - Tshwane's portal (slow confirmations),
   - City Power's process,
   - Eskom's process,
   - paper forms (e.g. Theewaterskloof).
4. The installer re-keys the same data into each portal or form and chases approvals by email.
5. Rejections and requests for more information are handled by hand. Legacy systems need retroactive packs.

**Pain:**
- SAPVIA and OUTA publicly complain about parallel, inconsistent processes and backlogs.
- Cost shocks are a deterrent: City Power's move from prepaid at about R230 to postpaid at R1,070–R1,360 was cited.
- Sign-off rules are confusing (ECSA vs DoEL).
- Penalty risk for homeowners creates demand for the installer to "just handle it".

**Existing solutions:**
- SEA / GIZ **apply.sseg.org.za** (free, multi-municipality, municipal-side)
- City of Cape Town e-Services (proxy applications)
- Eskom's own process and assistance campaign (up to R10,000 assistance)
- **SurgePV** publishes SA municipality and Eskom compliance guides (what its product does was *unverified*)
- General design tools (*unverified* for SA SSEG output)
- Consultants and engineers who charge for sign-off and paperwork

**The gap:**
No source showed an **installer-side** tool that holds one job record (customer, site, components, CoC, test results) and produces the right application pack for each distributor. Such a tool would:
- fill each distributor's form or portal fields,
- track status across many municipalities,
- keep a certificate library (NRS 097 by inverter model),
- produce bulk retroactive packs for an installer's legacy customer base.

The SEA portal reduces fragmentation only where municipalities adopt it.

**Possible product:**
"One install record → compliant SSEG pack for any South African distributor." It would include a rules table per distributor, auto-generated forms and SLD templates, a component-certificate library, and a status tracker.

**MVP:**
- Coverage of Eskom plus the 5 largest distributors by installs (City Power, Tshwane, Ekurhuleni, Cape Town, eThekwini).
- PDF/form generation and a document checklist.
- An inverter certificate library.
- A "legacy batch" mode that imports a CSV of past installs and outputs per-customer packs.

**Pricing hypothesis:**
R150–R400 per pack, or R1,500–R4,000 per month for installers doing 20+ jobs a month (*estimate*). Installers already charge homeowners for "registration admin", so the cost can be passed through.

**How to find first customers:**
- PV GreenCard certified-installer directory (pvgreencard.co.za)
- SAPVIA member list
- ECA(SA) electrical contractors
- Municipal "approved installer" lists, where they exist
- Google Maps listings for "solar installer" per metro

**Risks:**
- Enforcement is softening (Eskom's no-fine stance; OUTA disputes the legal basis).
- Much of the demand is a one-time legacy wave.
- The SEA portal or a national unified standard could remove fragmentation.
- New residential installs have slowed since load-shedding eased (*unverified*).
- Portals have no APIs, so the tool would be form-fill or RPA.

**Kill condition:**
Kill the idea if either of these turns out true:
- Fewer than ~20% of installers say registration admin costs them more than 2 hours per job.
- Eskom plus the top 3 metros move onto one common portal or form in 2026–27.

**Score:** 6/10 (strong why-now and fragmentation; risk of short-lived demand and weak enforcement)

**Sources:**
- https://www.pv-magazine.com/2026/08/19/south-africas-eskom-backtracks-on-proposed-solar-registration-fines/
- https://solarquarter.com/2026/08/17/eskom-clarifies-no-fines-or-disconnections-for-unregistered-rooftop-solar-systems-in-south-africa/
- https://businesstech.co.za/news/energy/819070/eskoms-warning-to-solar-users-in-south-africa/
- https://businesstech.co.za/news/energy/870113/important-update-about-r30000-fine-for-people-with-solar-in-south-africa/
- https://www.midvaal.gov.za/wp-content/uploads/2025/09/e7ef6995fc1acf06e4297c35c8d3a4e73538674612e67f93ee5b48a491c.pdf
- https://www.outa.co.za/blog/newsroom-1/31-march-solar-deadline-nears-as-eskom-overreach-clouds-the-rules-1476
- https://iol.co.za/business/2026-01-29-unfair-and-confusing-outa-advises-south-africans-against-rushing-solar-registration/
- https://sapvia.co.za/sapvia-welcomes-eskoms-extension-of-solar-registration-fee-waiver-calls-for-urgent-municipal-alignment-to-support-solar-pv-adoption/
- https://www.engineeringnews.co.za/article/sapvia-city-power-discuss-joburg-solar-registration-challenges-2026-04-16
- https://sapvia.co.za/?p=107000
- https://sapvia.co.za/wp-content/uploads/2025/08/SAPVIA-SSEG-WG-Draft-White-Paper_v1-for-comments-.docx
- https://capechamber.co.za/sites/default/files/2026-04/Copy%20of%20Annexure%20E%20-%20Municipal%20Support%20Sheet_GEES%202.pdf
- https://www.george.gov.za/?p=22665
- https://www.overstrand.gov.za/?p=23741
- https://www.capetown.gov.za/applyforsseg
- https://polity.org.za/article/eskom-simplifies-sseg-registration-process-lowers-cost-2025-10-22
- https://www.eskom.co.za/solar-pv-registration-legal-compliance-campaign-update-act-now-stay-legal-stay-safe-eskom-continues-to-provide-up-to-r10000-assistance/
- https://www.surgepv.com/solar-compliance/south-africa/municipalities/city-power-johannesburg
- https://fia.org.za/2025/04/09/the-hidden-risk-in-unregistered-solar-installations-what-brokers-and-clients-need-to-know/

---

## Opportunity: Diesel Refund Transition Kit (records → new SARS DRS claim and audit pack)

**Industry:**
Commercial agriculture, forestry, and on-land mining contractors

**Buyer:**
Farm or agribusiness bookkeeper, the external accountant or tax practitioner who files diesel refunds for farm clients, and small mining or earthmoving contractors without telematics.

**Trigger / Why now:**
- SARS is moving the diesel refund off the VAT201 onto a **standalone Diesel Refund System** under Schedule 6, Part 3, Note 6. It was announced in Dec 2025, piloted from Jan 2026, then delayed in Mar 2026.
- Registration went live on **18 Sep 2026**, with relationship management on eFiling.
- The refund for on-land primary producers rose from 80% to **100% from 1 Apr 2026**.
- The new system brings a **pre-defined logbook format** tailored by entity type, mandatory registration of diesel sellers, and automated validations.

**Current workflow:**
1. Record purchases from supplier invoices, then tank storage and dispensing (pump records, often paper or Excel).
2. Allocate each issue to a vehicle or machine and to an eligible or non-eligible activity.
3. Build a logbook in Excel and claim through the VAT201.
4. During a SARS audit, reconstruct the evidence by hand or pay a consultant (often on contingency, *unverified*).

**Pain:**
- Professional advisors (Cartrack, PKF, BDO) say manual and estimated logbooks are a major audit risk under automated validation.
- A 100% rebate means more money at stake per litre.
- Everyone has to re-learn a new registration and claim process.

**Existing solutions:**
- **Cartrack** (logbook app)
- **AgriTrekker** (offline fuel management and logbook)
- **LAS OptiMIM** diesel rebate module
- **Refuel** with **Deloitte Africa** (hardware and software, Aug 2026)
- **digitFMS**
- **Gilbarco** (pump-side diesel rebate)
- Consulting firms (BDO, PKF, Deloitte)

**The gap:**
Most incumbents are **hardware- or telematics-led** (tracking units, pump automation). Two needs looked open, though neither is confirmed:
- A bring-your-own-data tool that turns existing invoices, pump sheets and job cards into the **new SARS pre-defined logbook format** and the claim schedule.
- A practitioner-side multi-client dashboard for accountants who file for 20–200 farms.

**Possible product:**
A web tool where farm admins or their accountants upload diesel invoices and pump/issue sheets. It assigns usage to activities using rules, flags gaps, and exports the SARS-format logbook, claim schedule and an audit-defence pack.

**MVP:**
- An Excel/photo intake template.
- A rules engine for eligible vs non-eligible activities.
- Output of the SARS logbook format for one entity type (farming).
- A multi-client view for accountants.

**Pricing hypothesis:**
R300–R1,000 per farm per month, or 1–3% of refunds processed. That is well below consultant contingency fees (*estimate*).

**How to find first customers:**
- Agri SA and provincial agricultural unions (e.g. Agri Western Cape, TLU SA)
- Grain SA and citrus/deciduous grower associations
- Farm accounting practices (SAIPA/SAICA practitioner directories, filtered by rural towns)
- Co-ops (e.g. agri retail co-ops), *unverified* as a channel

**Risks:**
- Six or more vendors are already selling to the same trigger.
- SARS's simplified logbooks may make the job easy enough to do in a free template.
- The system rollout keeps slipping.
- Farmers already on Cartrack and similar get logbooks bundled in.

**Kill condition:**
- SARS publishes a free downloadable logbook and claim template that accountants find sufficient, or
- interviews show more than 70% of target farms already have telematics-based rebate reports.

**Score:** 5/10 (excellent why-now and money at stake; competition is closing the gap fast, like the brief's fire-inspection benchmark)

**Sources:**
- https://www.sars.gov.za/latest-news/excise-enhanced-diesel-fund-registration/
- https://www.sars.gov.za/customs-and-excise/excise/diesel-refund-system/
- https://www.sars.gov.za/wp-content/uploads/Docs/CandE/Letter-to-trade_DRS_12122025.pdf
- https://www.bdo.co.za/en-za/insights/2026/tax/diesel-refunds-is-there-progress-in-2026
- https://pkf.co.za/news/2026/upcoming-roll-out-of-sars/
- https://www.accountingweekly.com/sars-updates/diesel-refund-increased-to-100-percent-for-onland-primary-sector-users
- https://businesstech.co.za/news/motoring/847949/big-changes-coming-for-major-diesel-users-in-south-africa/
- https://www.cartrack.co.za/blog/sars-diesel-refund-how-to-pass-a-logbook-audit-and-get-your-100-percent-refund
- https://agritrekker.co.za/products/fuel-management-system
- https://las.co.za/liquid-automation-products/automated-diesel-rebate-reporting/
- https://www.itnewsafrica.com/2026/08/deloitte-africa-and-refuel-partner-to-simplify-sars-diesel-rebate-claims/
- https://digitfms.co.za/news/sars-diesel-refund-fleet-compliance-south-africa-2026/
- https://www.bizcommunity.com/article/sars-diesel-rebate-system-overhaul-paves-way-for-automated-fuel-monitoring-847223a

---

## Opportunity: Subcontractor Safety-File Builder ("one profile → every principal contractor's spec")

**Industry:**
Construction subcontractors (electrical, plumbing, painting, scaffolding, roofing, solar), and contractors on mines and industrial sites

**Buyer:**
Owner or admin of small subcontractors (5–100 staff) that start several new sites a month. A secondary buyer is the freelance SHEQ consultant who compiles files for many subcontractors.

**Trigger / Why now:**
No new 2025–26 law was confirmed in this session. The duty is ongoing: Construction Regulations 2014 (GN R84) require every contractor to open and keep an H&S file on site. Each principal contractor or client has its own requirements list (e.g. ArcelorMittal SA's "SHE Contractor requirements" document, rev 05). *Unverified:* the DEL has been revising the Construction Regulations, which would give a why-now if it is confirmed.

**Current workflow:**
1. The subcontractor receives a principal contractor's H&S specification for a new site.
2. A consultant or admin compiles the file per site:
   - appointments (OHS Act s16(2) / CR 2014),
   - HIRA and risk assessments, method statements, fall-protection plan,
   - medicals, competency certificates,
   - COIDA Letter of Good Standing, induction records.
3. The file is printed, re-done for the next site in that client's format, and expiring documents are chased by hand.

**Pain:**
- An active consultant and template market exists: Rules Health & Safety builds "client-spec safety files from scratch", digital safety-file templates are sold on Payhip, and safety-file compilation is advertised on Gumtree.
- Without a file, the subcontractor cannot work on site, so revenue depends on it.

**Existing solutions:**
- Consultants (Rules Health & Safety and many others)
- Template sellers (Payhip, Gumtree ads)
- Principal-side portals: Contractor Compliance, mai Contractor Portal, LinkSafe, Verature, Contractor Check, HSEC Online

**The gap:**
The incumbents are **principal-side** portals: the big client collects and checks documents. Nothing was found that works **subcontractor-side**: keep one master record of staff, certificates and medicals with expiry dates, and generate each principal contractor's required file format and appointments per site on demand.

**Possible product:**
"Safety file in 10 minutes." The subcontractor keeps its people, certificates and activities. The tool generates a site-specific file (appointments, HIRA, method statements by activity) matched to the chosen principal contractor's checklist, and sends expiry alerts.

**MVP:**
- Master library of employees, certificates and medicals with expiry dates.
- 15 activity-based risk-assessment and method-statement templates.
- A generic CR 2014 checklist plus 3 big principal contractors' checklists.
- PDF output.

**Pricing hypothesis:**
R400–R900 per month, or R350 per generated file. Consultants charge thousands per file (*unverified* typical range R2,500–R10,000).

**How to find first customers:**
- CIDB Register of Contractors (public search, grades 1–6)
- ECA(SA) and plumbing (PIRB) registers
- Principal contractors' approved-subcontractor lists
- Freelance SHEQ consultants as a reseller channel

**Risks:**
- Principal contractors may insist on their own portal.
- Liability if generated risk assessments are wrong.
- Low-WTP grade 1–2 contractors.
- "Generic document collection" trap if the product is not rules-driven.

**Kill condition:**
- The top 10 principal contractors already accept a standard portable profile through one of the existing portals, or
- subcontractors say they spend under 2 hours per site on the file.

**Score:** 5/10 (per-job and mandatory, with fragmentation by client; why-now unconfirmed; the competitor field needs a proper check)

**Sources:**
- https://www.acts.co.za/occupational-health-/cr2014_nr84_7__duties_of_principal_co
- https://arcelormittalsa.com/Portals/0/AMSASHE00084 (AMSA SHE Contractor requirements and expectations)(rev 05).pdf
- https://rules-safety.lovable.app/services
- https://smesouthafrica.co.za/safety-files-for-low-risk-and-high-risk-industries/
- https://www.capterra.co.za/reviews/177871/contractor-compliance
- https://www.capterra.co.za/software/191465/mai-contractor-portal
- https://www.capterra.co.za/software/207817/linksafe
- https://www.capterra.co.za/software/1033719/verature
- https://www.capterra.co.za/software/219267/contractor-check
- https://www.engineeringnews.co.za/print-version/the-future-of-health-and-safety-compliance-is-now-with-hsec-online-2022-05-04

---

## Opportunity (provisional): Long-tail Bargaining-Council Return Router for Payroll Bureaus

**Industry:**
Payroll bureaus and accountants serving SMEs that fall under extended bargaining-council agreements (motor, metal, road freight, civil engineering, building, clothing, private security, etc.)

**Buyer:**
Payroll bureau owner, or payroll administrator at an SME with 20–300 staff

**Trigger / Why now:**
Weak. No 2025–26 rule change was found. The workflow itself is a monthly statutory duty: the LRA Schedule 3 monthly return, plus council levies and benefit-fund contributions.

**Current workflow:**
1. Run payroll.
2. Export the council-specific schedule for each council the client falls under (levies, sick fund, provident/pension, holiday fund).
3. Re-key it into the council's or fund administrator's spreadsheet or portal.
4. Reconcile the arrears notices.

**Pain:**
Monthly, with penalties and arrears for errors. Each council and fund administrator uses a different format.

**Existing solutions:**
- **SimplePay** (bargaining-council setup, plus an MIBFA report for MEIBC levies, sick pay, EIPF/MIPF)
- **AllWage** (councils module)
- **PaySpace** and Sage (statutory reports; council depth *unverified*)

**The gap:**
Possibly only the **smaller and regional councils** (e.g. regional building councils), plus multi-council reconciliation for bureaus. This is *unverified*.

**Possible product / MVP:**
Upload a payroll export, map it to the target council's return format, and produce a reconciliation of what was paid against what was invoiced. Start with the 3 councils that the major payroll tools don't cover.

**Pricing hypothesis:**
R250–R600 per employer entity per month (*estimate*)

**How to find first customers:**
- SAPA (South African Payroll Association) members
- Payroll bureau listings
- Council-registered employer lists (councils hold these; not public)

**Risks:**
Payroll vendors can add formats cheaply. This is the brief's "certified payroll" lesson: pain is real, competition is stronger than it looks.

**Kill condition:**
SimplePay, PaySpace and Sage already cover the councils that more than 80% of in-scope employers fall under.

**Score:** 4/10 (provisional)

**Sources:**
- https://simplepay.co.za/help/payroll-setup/company-setup/bargaining-councils
- https://simplepay.co.za/help/payroll-setup/company-setup/bargaining-councils/meibc
- https://simplepay.co.za/blog/2023/05/12/new-report-mibfa-payment-reports
- https://help.allwage.com/modules/councils
- https://source.acts.co.za/labour-relations-act-1995/n4_schedule_3_monthly_return.php

---

## Rejected after competitor research

- **COIDA injury-on-duty medical claims (healthcare providers → Compensation Fund / CompEasy).** The pain is extreme: average payment time is about 347 days, and practitioners refuse COIDA patients. But the bottleneck is the Fund's administration and payment, which software cannot fix. Intermediaries such as **CompSol** already fund and manage claims, and billing agents abound.
  - https://samedical.org/downloads/coid/coid_feb_2021.pdf
  - https://pmg.org.za/files/210421SAMA.pdf
  - https://www.moonstone.co.za/compensation-fund-vs-netcare-high-court-judgment-exposes-deep-fault-lines/
- **EPR reporting for producers.** **PROs** (e.g. eWASA, plus the packaging PROs) take on registration and reporting for members, the 2025 amendments are only proposed, and smaller producers mainly pay fees through their PRO.
  - https://ewasa.org/resources/epr-waste-legislation-and-regulations-south-africa
  - https://www.iges.or.jp/sites/default/files/2026-07/3.%20EPR%20models%20and%20lessons%20from%20South%20Africa.pdf
- **Telematics-style diesel logbooks.** Killed by **Cartrack, AgriTrekker, LAS OptiMIM, Refuel/Deloitte, digitFMS and Gilbarco**. Only the bring-your-own-data / accountant angle above survives.
- **Principal-side contractor compliance portals.** Killed by **Contractor Compliance, mai Contractor Portal, LinkSafe, Verature and Contractor Check**.

## Attractive problem, poor distribution

- **Waste transporter registration and reporting.** Every municipality can require its own transporter registration under its by-laws (e.g. Overstrand, Mogale City, Buffalo City, Tshwane permits for vehicles of 1,000 kg and up), on top of SAWIS reporting and hazardous-waste manifests. The fragmentation is real, but buyers are small, low-margin hauliers and recyclers, and no 2025–26 trigger was found.
  - https://old.overstrand.gov.za/en/media-section/news/226-registration-of-contractors-tasked-with-transporting-refuse-from-private-properties-to-municipal-facilities
  - https://pretorianews.co.za/news/2023-04-05-valid-permit-required-for-waste-disposal-transporters-using-vehicles-with-1-000kg-capacity/
  - https://source.acts.co.za/national-environmental-management-waste-act-2008/25__duties_of_persons_transporting_waste.php
- **Private security payroll and benefit compliance (PSSPF / NBCPSS).** The compliance failures are often deliberate (Pension Funds Adjudicator cases; 2026 Tshwane firm accused of not paying pensions), so the firms that most need it are unlikely to buy.
  - https://www.sowetan.co.za/news/2026-05-21-listen-tshwane-security-firm-implicated-in-madlanga-inquiry-accused-of-not-paying-workers-pensions/
  - https://businesstech.co.za/news/business/536774/heres-how-many-private-security-guards-there-are-in-south-africa-and-what-they-earn/

## Too competitive

- Diesel-refund telematics and pump automation (vendors listed above)
- Principal-side contractor compliance portals (vendors listed above)
- Bargaining councils already covered by mainstream payroll software (SimplePay, AllWage)

## Not screened (tool limits), worth a follow-up pass

FMD livestock-movement traceability (2025–26 outbreaks), ECD subsidy claims (Bana Pele registration drive), Employment Equity sectoral targets (effective 2025), fruit-export PPECB/PhytClean workflows, SARS e-invoicing timeline, and CIPC beneficial-ownership filings for accountants. All are *unverified* leads.
