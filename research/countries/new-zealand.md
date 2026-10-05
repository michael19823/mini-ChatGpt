# New Zealand: indie-hacker opportunity research

Research date: 2026-10-05 (deep pass). Budget used: about 51 WebSearch calls in this pass plus about 13 in the first pass. WebFetch was blocked, so every claim comes from search-result summaries and should be checked against the source before anyone acts on it.

**Market context.** New Zealand is small (about 5.2M people) and highly digitised, with a mature local SaaS scene (Xero, Fergus, Tradify, Storypark, TradeWindow). Government often supplies its own free tool (BRANZ Artisan, VisaView, Death Documents, Hinekōrako, MyOSPRI). The current government is deregulating: in 2025–26 it narrowed health and safety duties, freshwater farm plans, ECE licensing criteria and WoF frequency. As a result, several regimes that looked like triggers are actually shrinking. The best 2026 triggers are new building-system "fast lanes" (plumber and drainlayer self-certification from 7 Sep 2026, the granny-flat consent exemption from 15 Jan 2026), tighter enforcement of AEWV employer accreditation, and the drinking-water rules cycle under Taumata Arowai.

**Accessibility.** The market is open. There are no sanctions or data-localisation barriers. NZD card payments work through Stripe, and English is the business language. The small market size is the binding constraint, so any NZ product should be built so it can also be sold in Australia where the regimes are similar.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Employers of migrant workers (hospitality, construction, aged care, dairy, horticulture) | AEWV accreditation upkeep: settlement info within 30 days, payroll vs job-check wage, departure notices within 10 working days, renewal, post-accreditation checks | **Candidate (Opp 1)** | About 24–27k accredited employers. INZ revoked or suspended about 2,100 accreditations by March 2026. No dedicated self-serve tool found. |
| Plumbers and drainlayers | New self-certification scheme (live 7 Sep 2026): evidence via Artisan, CoC to owner, BCA and PGDB within 10 working days | **Candidate (Opp 2)** | Brand-new per-job mandatory workflow for endorsed firms. Duplicate entry between job software and the PGDB register / Artisan. |
| Small drinking-water suppliers (rural schemes, marae, campgrounds, schools, businesses) | Monitoring records and annual compliance reporting to Taumata Arowai via Hinekōrako Excel templates; new Rules 2026 in effect 1 Jul 2027 | **Candidate (Opp 3)** | 1,595 registered supplies report today. More unregistered supplies must register by Nov 2028. Reporting is done by spreadsheet upload. |
| Building compliance (BWOF / IQP) | Form 12A collection, BWOF lodgement to about 66 councils | Candidate, downgraded (Opp 4) | BC Group manages about 10% of all compliance-schedule sites nationally (25% in Auckland). Argest has an online tracker and InspectPro serves IQPs. A self-serve tool is still possible but the gap is thin. |
| Granny-flat builders / kitset suppliers | PIM application (forms 2A/2AA) and the completion notification pack to council within 20 working days | Candidate, weak (Opp 5) | New since 15 Jan 2026, and being expanded. Volume is unknown (an MBIE PIM dashboard exists). One-off per build. |
| Animal-product exporters | Requests in MPI Trade Certification (replaced AP E-cert 17 Aug 2026) | Rejected | TradeWindow Prodoc already integrates with MPI certification and Libretto does it as a service. The system takes XML uploads only one request per file, plus B2G. |
| Micro-abattoirs / small food operators | RMP template and Food Control Plan records | Rejected (poor distribution) | Tiny pool. FCPmate already offers digital FCP records. The MPI template update was minor. |
| Backflow testers | Annual test certificate (12A) emailed to the council or water supplier | Rejected | Backflow Manager targets NZ testers (guided tests, auto 12A). Fergus and Tradify store backflow results. Submission by email is low pain. |
| Food premises grease traps | Trade-waste bylaw cleaning records | Rejected | Unlike Florida there is no manifest submission. Records stay on-site and the council inspects them annually. |
| Electricians | Electrical CoC / Record of Work | Rejected | Already covered by trade job-management apps (first pass). |
| Commercial fishing | Electronic catch and position reporting | Rejected | MPI lists at least 9 e-logbook providers (Deckhand, eCatch, OLRAC and others). |
| Horticulture | Spray diaries for NZGAP / export residue audits | Rejected | AgWorld and Hectre already produce NZGAP reports. Hectre links to AsureQuality. |
| Dairy and pastoral farms | Freshwater farm plans | Rejected | The August 2026 decisions cut scope: about 8,000 small farms exempted, audit only for higher-risk farms, an industry-organisation pathway, and Fonterra Tiaki FEPs. |
| Livestock farms | NAIT animal movements | Rejected | OSPRI is rebuilding NAIT/MyOSPRI by the end of 2027, and farm software already integrates. |
| Payroll bureaus / employers | Employment Leave Bill (replaces the Holidays Act, hours-based accrual) | Rejected | Takes effect about 2028. Payroll vendors (Xero, MYOB, Employment Hero and others) must rebuild anyway. |
| Government suppliers | Peppol e-invoicing | Rejected | Agencies must receive by 1 Jan 2026 and suppliers above NZ$33m must send from 2027. There is no SME or B2B mandate. |
| AML/CFT reporting entities | DIA becomes sole supervisor on 1 Jul 2026, new levy | Rejected (too competitive) | Crowded KYC/AML market (not re-verified this pass). |
| Garages / WoF inspectors | WoF reform from 1 Nov 2026 | Rejected | Reform reduces inspection frequency. Workshop systems already handle WoF. |
| Workplaces with hazardous substances | Transfer of HSNO workplace rules to HSW regulations (2026) | Rejected | Mostly a consolidation. SDS and chemical-register vendors exist. HSW Amendment Act 2026 (in force 1 Apr 2027) lowers duties for PCBUs with fewer than 20 workers. |
| Early childhood education | Licensing criteria (20 Apr 2026, 98 to 80 criteria). ERO took over licensing from 1 Sep 2026 | Rejected | Burden is falling and Storypark, Educa and others are entrenched. |
| Funeral directors | Death registration and cremation forms (new Form BA from 7 May 2026) | Rejected | Death Documents (government) covers 99% of deaths online. Small market. |
| Community pharmacy | ICPSA claiming, controlled drugs | Not screened in depth | Dispensing-system incumbents. Funding-model change slated for 2026/27 (no software angle found). |
| Waste facilities / forestry ETS | Waste levy returns, ETS returns | Rejected (first pass) | Few operators, government portals, consultants. |
| Climate / modern slavery reporting | CRD, proposed modern slavery law | Rejected (first pass) | Thresholds aimed at large entities. |

## Opportunities

### Opportunity: AEWV Accreditation Evidence Vault for SME Employers

**Industry:**
Employers of migrant workers: hospitality, construction, aged care, dairy farming, horticulture, retail, transport.

**Buyer:**
Owner-operators, HR/payroll administrators and office managers at SME accredited employers (5–100 staff, 1–20 AEWV holders). Secondary buyers and channel: licensed immigration advisers and employment-law firms who manage many employer clients.

**Trigger / Why now:**
INZ is enforcing harder. Its statistics page reports about 1,316 accreditations revoked and 845 suspended as of March 2026 (figures from a search summary; another source gives smaller April 2026 counts, so verify). INZ aims to check about 16% of accredited employers each year, at any point in the accreditation period. Renewals run 12 months for the first accreditation and 24 months after that. 2026 brought policy changes and warnings that employers must hire locals or lose accreditation. Employers must keep evidence on hand and can be asked for it at any time.

**Current workflow:**
1. The employer (often with an immigration adviser) obtains accreditation, then a job check per role, with the wage, hours and job description declared.
2. When an AEWV holder starts, the employer must provide settlement-support information within 30 days and keep proof.
3. Each pay run, the employer must pay at or above the job-check terms. Evidence sits in Xero, MYOB or Employment Hero payroll exports, timesheets and employment agreements.
4. When a worker leaves, the employer must notify INZ within 10 working days (unless within 1 month of visa expiry). Visa status is checked in VisaView.
5. For a post-accreditation check or renewal, someone scrambles to assemble contracts, payslips, timesheets, GST/PAYE evidence, induction/settlement records and notifications into a pack, often paying an adviser.

**Pain:**
Losing accreditation stops all migrant hiring and can trigger stand-downs. The 1,316 revocations and 2,625 complaints against accredited employers show the stakes. Advisers' guidance stresses "a simple, centralised system" with well-organised records (James McLeod, Anderson Lloyd), which is evidence of the manual pain. Hours per check and adviser fees are unverified.

**Existing solutions:**
- Immigration advisers and law firms (Pathways NZ, NZ Shores, ImmigrationWise and similar) do accreditation and renewal as a service.
- Payroll/HR suites (Employment Hero, Xero Payroll, MYOB). No AEWV-specific compliance module was found (unverified).
- INZ VisaView (free visa-status check).
- Employer-of-record providers for firms that want to outsource entirely.
- Spreadsheets.

**The gap:**
No tool was found that continuously reconciles each AEWV holder's actual pay and hours (from payroll) against their job-check terms, tracks the 30-day settlement and 10-working-day departure obligations, and produces an INZ-ready evidence pack on demand. Advisers do this episodically and by hand. Absence of competition is unverified and needs interview checks.

**Possible product:**
Connect payroll (Xero/MYOB/Employment Hero APIs) and a worker register. The system flags any pay period below job-check terms, any overdue settlement pack or missed departure notice, and upcoming visa or accreditation expiries. It assembles a one-click "post-accreditation check" bundle. Advisers get a multi-client dashboard.

**MVP:**
Xero Payroll connector only, a manual job-check entry form, an obligations calendar (30-day settlement, 10-working-day departure, renewal dates), a document upload per worker, and a PDF/zip evidence-pack generator.

**Pricing hypothesis:**
NZ$49–149 per month per employer (scaled by AEWV headcount), or NZ$300–800 per month for an adviser managing 20+ employers. Estimate.

**How to find first customers:**
Accredited-employer lists: public INZ search, third-party compiled lists (ApplyWave about 24.8k, hired.co.nz claims 27k+), and full lists released under the OIA (fyi.org.nz requests). Also the Immigration Advisers Authority register of licensed advisers, Hospitality NZ, Federated Farmers and aged-care associations.

**Risks:**
INZ could add an employer compliance portal. Payroll vendors could add a module. Employers may treat the adviser as the solution. Policy churn is high. Dependence on payroll APIs.

**Kill condition:**
Interviews show advisers already run a cheap retainer that covers this, employers only care at renewal time, or Employment Hero / Xero already ship visa-condition tracking.

**Score:** 6/10

**Sources:**
- https://www.immigration.govt.nz/about-us/news-centre/accredited-employer-work-visa-aewv-key-information-and-statistics
- https://www.immigration.govt.nz/work/for-employers/getting-accreditation-or-approval-to-hire/employer-accreditation-for-the-aewv/aewv-employer-accreditation-and-job-check-process/
- https://www.immigration.govt.nz/work/for-employers/getting-accreditation-or-approval-to-hire/employer-accreditation-for-the-aewv/applying-for-aewv-employer-accreditation-process-steps/renewing-your-aewv-employer-accreditation/
- https://www.immigration.govt.nz/work/for-employers/resources-services-and-information-to-help-employers/visaview-for-employers/
- https://www.jamesmcleod.co.nz/news/aewv-employer-accreditation-compliance-risks
- https://www.al.nz/onus-on-employers-in-work-visa-system-compliance/
- https://www.hcamag.com/nz/specialisation/recruitment/firms-warned-hire-locals-or-get-accreditation-revoked/554840
- https://applywave.app/blog/nz-accredited-employers
- https://hired.co.nz/accreditedemployers
- https://fyi.org.nz/request/35092-official-information-act-request-aewv-accredited-employer-list

### Opportunity: Self-Certification Evidence and CoC Router for Plumbers and Drainlayers

**Industry:**
Plumbing and drainlaying (residential and light commercial).

**Buyer:**
Owners and office managers of small plumbing and drainlaying firms (2–30 staff) holding PGDB self-certifying endorsements.

**Trigger / Why now:**
The Building and Construction Sector (Self-certification by Plumbers and Drainlayers) Amendment Act 2026 passed on 2 June 2026, and the scheme launched on 7 September 2026. Endorsed practitioners can sign off eligible consented work without BCA inspection. In return they must capture evidence (photos, test results, as-builts) in the BRANZ Artisan app or the PGDB Self-certification Register. They must issue a Certificate of Compliance to the owner, the BCA and the PGDB within 10 working days, and the PGDB can audit them. Endorsement costs NZ$2,260 per 3 years (fee plus audit levy), so endorsed firms are committed. A parallel residential builders scheme is in design.

**Current workflow:**
1. The consent applicant provides the BCA with a written declaration from the endorsed practitioner that the work is self-certifiable.
2. The job is scheduled and run in Fergus, Tradify, AroFlo or ServiceM8, where photos, test results and records of work already live.
3. The practitioner re-captures the inspection evidence in Artisan or the PGDB register at key stages.
4. On completion, they generate the CoC in the PGDB register and send it to the owner, the BCA and the PGDB within 10 working days.
5. They keep an evidence file for any PGDB audit, plus gas certificates and records of work, which go to different places.

**Pain:**
A new statutory deadline with disciplinary consequences, layered on top of job software that does not talk to the PGDB register or Artisan (no integration found). Every self-certified job means double entry. Error rates and hours are unverified because the scheme is only weeks old.

**Existing solutions:**
- PGDB Self-certification Register and BRANZ Artisan, which are free and official.
- Fergus, Tradify and AroFlo for job management. Tradify has published a self-certification explainer. Fergus has digital certification forms. No integration has been announced (unverified).
- Master Plumbers guidance.
- Paper and phone photos.

**The gap:**
Moving evidence and job data from the job-management system into the PGDB/Artisan record, pre-checking completeness against the scheme's evidence requirements, tracking the 10-working-day clock per job, and keeping an audit-ready file. Whether Artisan or the PGDB register exposes an API is the critical unknown.

**Possible product:**
A Fergus/Tradify add-on that tags self-certified jobs, enforces the evidence checklist per work type, tracks deadlines, and prepares (or pushes, if an API exists) the CoC package and declaration for the BCA, owner and PGDB.

**MVP:**
A Fergus or Tradify API pull of job photos and notes, a per-work-type evidence checklist, a deadline tracker, and an audit-pack PDF. Data goes into the PGDB register by copy-assist, not integration, until access is confirmed.

**Pricing hypothesis:**
NZ$39–99 per month per firm, or NZ$5–10 per self-certified job. Estimate.

**How to find first customers:**
The PGDB public register (it is to publish CoCs and endorsed practitioners), Master Plumbers membership, Fergus and Tradify marketplaces, and trade merchants (PlaceMakers, Plumbing World).

**Risks:**
Fergus or Tradify build it natively (high likelihood, and Fergus is NZ-based). PGDB or BRANZ may refuse API access. Voluntary scheme uptake may be low. The NZ-only market is small.

**Kill condition:**
Fewer than about 500 endorsed practitioners by mid-2027, Fergus or Tradify announce integration, or no programmatic access to Artisan/PGDB is possible.

**Score:** 5/10

**Sources:**
- https://legislation.govt.nz/act/public/2026/24/en/2026-06-02B/
- https://www.pgdb.co.nz/manage_your_licence/self_certification/
- https://www.pgdb.co.nz/manage_your_licence/self_certification/self_certify_work/
- https://www.pgdb.co.nz/manage_your_licence/self_certification/apply_for_endorsement/
- https://www.building.govt.nz/projects-and-consents/self-certification-schemes/plumbers-and-drainlayers-scheme/overview
- https://www.building.govt.nz/projects-and-consents/self-certification-schemes/plumbers-and-drainlayers-scheme/building-consent-authorities
- https://masterplumbers.org.nz/Web/Latest-News/Articles/2026/Self-certification-scheme-officially-launches-for-plumbers-and-drainlayers.aspx
- https://www.branz.co.nz/about/ourstories/2022-2023/transforming-the-building-inspection-process-with-artisan
- https://www.tradifyhq.com/blog/plumbers-drainlayers-self-certification
- https://fergus.com/tradehub/how-to-videos/certification/

### Opportunity: Compliance Logbook and Hinekōrako Report Builder for Small Drinking-Water Suppliers

**Industry:**
Small drinking-water supplies: rural and community water schemes, marae, campgrounds, schools, lodges, rest homes and businesses that supply water.

**Buyer:**
Scheme secretaries or committee members, facility managers, and small water-treatment contractors or consultants who operate supplies for several owners.

**Trigger / Why now:**
The Water Services (Drinking Water Quality Assurance) Rules 2026 were published in 2026 and take effect on 1 July 2027. They move reporting to the financial year and set a reduced six-month transition round from January to June 2027, following the full 2026 calendar-year round. The rules for very small to medium supplies were updated on 1 January 2025. Existing unregistered supplies must register by November 2028. Suppliers report by uploading specially formatted Excel spreadsheets to the Hinekōrako portal.

**Current workflow:**
1. The operator does routine checks (UV, chlorine, turbidity, filter changes) and logs them on paper or in a spreadsheet.
2. They send samples to labs (Hill Labs, Analytica and others) and receive results as PDF or CSV.
3. Each year, someone transcribes monitoring results and rule-by-rule compliance into Taumata Arowai's Excel templates and uploads them to Hinekōrako.
4. They manage the source-water and drinking-water safety plans (or the Acceptable Solution path) and respond to queries.

**Pain:**
Volunteer-run schemes face regulator reporting through Excel templates with module codes. The transition rounds in 2026–27 mean template and period changes. Evidence is structural (rules plus template format). Hours and complaint volume are unverified.

**Existing solutions:**
- Hinekōrako (government portal and templates).
- Large-utility platforms such as Water Outlook and Info360 (aimed at councils; whether they fit small suppliers is unverified).
- Lab client portals.
- Equipment and service firms (Puretec, WaterForce, Watersmart WaterSAFE) that bundle advice.
- Consultants.

**The gap:**
A cheap tool that turns operator logs and lab CSVs into a correctly formatted Hinekōrako upload for the right rule modules (for example G + S1 + T1 + D1), with reminders for monitoring frequency.

**Possible product:**
A mobile logbook plus a lab-result importer that tracks monitoring against the supply's rule modules and exports the annual and transition-period Hinekōrako spreadsheet.

**MVP:**
Support for one module set (small supplies of 26–100 people), manual and CSV lab import, a monitoring-frequency calendar, and an Excel export matching the current template.

**Pricing hypothesis:**
NZ$30–80 per month per supply, or NZ$200–500 per month for a contractor operating 10+ supplies. Estimate.

**How to find first customers:**
The Taumata Arowai Public Register of Drinking Water Supplies, the Rural Water Supplies association (unverified name), regional water-treatment contractors and labs as referral partners.

**Risks:**
A small and price-sensitive pool. Many supplies move to the Acceptable Solution path or are absorbed by Local Water Done Well entities. Taumata Arowai may improve Hinekōrako. Template changes create maintenance burden.

**Kill condition:**
Fewer than about 500 non-council supplies report under the Rules modules (rather than Acceptable Solutions or exemption), or operators say the Excel template takes under an hour a year.

**Score:** 5/10

**Sources:**
- https://www.taumataarowai.govt.nz/drinking-water-suppliers-and-operators/for-drinking-water-suppliers/ways-to-comply/drinking-water-quality-assurance-rules/updates-to-the-drinking-water-quality-assurance-rules
- https://www.taumataarowai.govt.nz/assets/Uploads/Rules-and-standards/Water-Services-Drinking-Water-Quality-Assurance-Rules-2026-in-effect-from-1-July-2027.pdf
- https://www.taumataarowai.govt.nz/drinking-water-suppliers-and-operators/for-drinking-water-suppliers/how-to-guidance/monitoring-and-reporting
- https://www.taumataarowai.govt.nz/assets/Portal/Drinking-Water-Quality-Assurance-Rules-Reporting-Guidance.pdf
- https://www.taumataarowai.govt.nz/assets/Uploads/Network-Performance/Factsheet-DWRR-2025.pdf
- https://www.taumataarowai.govt.nz/home/articles/taumata-arowai-launches-public-register-of-drinking-water-supplies
- https://www.localmatters.co.nz/health/water-supply-rules-updated/

### Opportunity: BWOF / Form 12A Evidence Tracker for Self-Managing Owners and Small IQP Firms

**Industry:**
Commercial property, and building specified-systems compliance (fire, backflow, lifts, HVAC).

**Buyer:**
Small commercial property managers and body-corporate managers who run BWOFs in-house, and small IQP firms issuing 12As across many buildings.

**Trigger / Why now:**
Section 108A (in force 26 Nov 2024) prohibits an IQP from certifying a specified system unless every procedure was fully met in the previous 12 months. That raises the evidence burden on IQPs. MBIE circulated a draft Compliance Schedule Handbook in November 2025. The Association of Building Compliance is lobbying for a national IQP register and a national compliance register. Councils' portals keep changing (Auckland online BWOF requires one combined PDF; Simpli is rolling out at other councils). This is still a moderate trigger.

**Current workflow:**
1. Track the compliance schedule's specified systems and inspection frequencies in a spreadsheet.
2. Chase each IQP for monthly, quarterly and annual inspections and the signed 12A.
3. Combine all 12As into one PDF and lodge them via the council portal or by email before the anniversary.
4. Display the BWOF and fix any gaps that block the next 12A under s108A.

**Pain:**
The BWOF cannot be issued without all 12As. Compliance-schedule non-compliance is one of the most common findings in BCA accreditation assessments. Per-building hours are unverified.

**Existing solutions:**
- BC Group, the largest provider (about 10% of compliance-schedule sites nationally and 25% in Auckland), with an online platform.
- Argest, which offers a BWOF service with an online tracking tool.
- WSP and other consultancies.
- InspectPro, a fire-inspection app with NZ BWOF reporting.
- Backflow Manager for backflow IQPs.

**The gap:**
A cheap self-serve tool for owners who do not want a full-service provider, and an IQP-side log that proves s108A completeness across many clients. The gap is real but narrow, because services dominate.

**Possible product:**
Building register plus per-system inspection-frequency engine. IQPs log each periodic inspection through a magic link. The system warns in advance when a missed inspection will block the 12A, and it generates the council-specific single-PDF BWOF pack.

**MVP:**
Specified-system register, frequency calendar, IQP upload link, s108A gap warnings, and the combined-PDF pack.

**Pricing hypothesis:**
NZ$8–15 per building per month, or NZ$99–299 per month per manager or IQP firm. Estimate.

**How to find first customers:**
Council IQP registers (the national IQP register is hosted by Timaru DC), ABC IQP member list, Property Council and Facilities Management Association NZ.

**Risks:**
BC Group and Argest already provide online access. Owners prefer to outsource. The market is small.

**Kill condition:**
Interviews show self-managing owners are rare or IQPs already use InspectPro or their own systems for s108A evidence.

**Score:** 4/10 (down from 5: the BC Group scale and Argest's tracker were confirmed)

**Sources:**
- https://www.building.govt.nz/managing-buildings/managing-your-bwof/
- https://bcgroup.co.nz/
- https://argest.com/services/building-compliance-management/building-warrant-of-fitness/
- https://www.inspectpro.co.nz/fire-safety-inspection-app
- https://www.aucklandcouncil.govt.nz/en/building-and-consents/commercial-building-systems/building-warrant-of-fitness.html
- https://www.fmanz.org/wp-content/uploads/2026/02/Compliance-Schedule-Handbook-Draft-November-2025.pdf
- https://abciqp.org.nz/home/abc-newsletters-2/the-inside-word-december-2024/

### Opportunity: Granny-Flat Exemption PIM and Completion Pack for Small-Dwelling Builders

**Industry:**
Residential construction (granny flats up to 70 m², kitset and modular suppliers).

**Buyer:**
Small builders, modular and kitset granny-flat companies, and designers who deliver many consent-exempt dwellings.

**Trigger / Why now:**
The granny-flats building consent exemption took effect on 15 January 2026, and the government announced an expansion in April 2026 (Order in Council expected Q3 2026). Instead of a consent, the owner must get a PIM (council must issue within 10 working days) and, within 20 working days of completion, give council the final plans, Records of Work, certificates of compliance and energy-work certificates. Every council has its own form and portal.

**Current workflow:**
1. Prepare the PIM application with LBP forms 2A/2AA, site plan and services details, and lodge it with the council.
2. Build using LBPs, registered plumbers, drainlayers and electricians.
3. Chase every trade for its Record of Work or CoC.
4. Assemble the completion pack and lodge it with the council within 20 working days. Give copies to the owner.

**Pain:**
Builders now carry the paperwork role a BCA used to drive. They must gather multi-trade documents against a deadline across many councils. Volume is unknown: MBIE publishes a quarterly PIM dashboard that could not be read.

**Existing solutions:**
- Council portals (Simpli guidance exists).
- Builder job software (Buildxact and others; unverified for this workflow).
- Kitset suppliers' own checklists.
- Designers and consultants.

**The gap:**
A per-build document checklist and trade-chasing tool tuned to the exemption's specific list and 20-day clock. It is narrow and one-off per build.

**Possible product:**
A "granny-flat file" that tracks the PIM, the trades and their RoW/CoC uploads, and outputs the council completion pack.

**MVP:**
A checklist template, a trade upload links, a deadline timer and a PDF pack generator.

**Pricing hypothesis:**
NZ$49–99 per build, or NZ$99 per month for active builders. Estimate.

**How to find first customers:**
Kitset and modular granny-flat suppliers, Master Builders and Certified Builders members, and LBP register searches.

**Risks:**
Unknown volume. Generic document collection (a brief "trap"). Councils may simplify.

**Kill condition:**
The MBIE dashboard shows fewer than about 2,000 PIMs a year, or kitset suppliers already supply the pack.

**Score:** 4/10

**Sources:**
- https://www.building.govt.nz/about-building-performance/all-news-and-updates/new-update-page-5
- https://www.building.govt.nz/projects-and-consents/planning-a-successful-build/scope-and-design/check-if-you-need-consents/building-work-that-doesnt-need-a-building-consent/granny-flats-exemption-guidance-and-resources
- https://www.mbie.govt.nz/building-and-energy/building/building-system-insights-programme/granny-flats-project-information-memorandum-monitoring-quarterly-update
- https://www.1news.co.nz/2026/04/28/government-expands-consent-exempt-granny-flat-scheme/
- https://www.simpli.govt.nz/coe-guidance-article/article-227/0-new-processes-for-building-granny-flats

## Rejected after competitor research

- **MPI Trade Certification assistant** (first-pass Opp 2, was 4/10): killed by **TradeWindow Prodoc**, which already raises MPI health certificates for meat, seafood, dairy and other products, and by **Libretto** export-documentation services. MPI offers XML upload (one request per file) and B2G, and large exporters run ERP integrations. (mpi.govt.nz webinar May 2026; tradewindow.io; libretto.co.nz)
- **Micro-abattoir / small food records** (first-pass Opp 3, was 3/10): the pool is tiny, **FCPmate** already digitises Food Control Plan records, and the 2025 RMP template update was minor.
- **Backflow test submission:** **Backflow Manager** targets NZ testers with automatic 12As. Fergus and Tradify store results. Councils accept email.
- **Commercial fishing e-reporting:** at least 9 MPI-listed providers (Deckhand, eCatch, OLRAC, Pivotel and others).
- **Spray diaries / NZGAP:** **AgWorld** and **Hectre**.
- **Freshwater farm plans:** scope cut in August 2026. Fonterra Tiaki and industry-organisation certification pathways.
- **NAIT movements:** OSPRI rebuild (MyOSPRI) plus existing farm software.
- **Electrical CoC, SiteWise prequalification, building-consent submission tools, climate / modern slavery:** as in the first pass (Tradify/GoCanvas, Site Safe, council-procured platforms, enterprise thresholds).

## Attractive problem, poor distribution

- **Micro-abattoirs:** a real record burden, but likely only tens of operators.
- **Waste levy facility reporting and forestry ETS returns:** few operators, served by government portals and consultants.
- **Funeral directors:** cremation Form BA (May 2026) is new, but the Death Documents government service covers 99% of deaths and the number of funeral homes is small.

## Too competitive

- **AML/CFT tools for DIA-supervised entities** (crowded KYC market, not re-verified).
- **ECE centre compliance** (Storypark, Educa and others, plus regulatory relief).
- **Payroll changes under the Employment Leave Bill** (all payroll vendors must rebuild by about 2028).
- **Generic health and safety apps** (HSW Amendment Act 2026 lowers small-business duties).

## Overall assessment

New Zealand still has no outstanding standalone opportunity. The strongest is the **AEWV accreditation evidence vault (6/10)**. It has a large, listable buyer base (24–27k employers), visible enforcement, a pay-run frequency and no dedicated tool found. It needs interviews with employers and advisers, and a check whether Employment Hero or Xero already cover visa conditions. The **plumber self-certification router (5/10)** has the best fresh trigger (7 Sep 2026) but faces probable native builds by Fergus and Tradify and uncertain API access. The **small drinking-water reporting** tool (5/10) is a modest niche. NZ's deregulatory direction makes "new burden" triggers scarce. Regimes that pair a new fast-lane privilege with mandatory evidence (self-certification, the granny-flat exemption) are where new workflows are appearing. Any NZ product should be designed for Australian expansion.

## Pass history

- **First pass (2026-10-04, about 13 searches):** BWOF pack 5/10, MPI Trade Certification 4/10, micro-abattoir records 3/10.
- **Deep pass (2026-10-05, about 51 searches):** screened about 20 more industries and regimes, including AEWV, plumber self-certification, drinking water, granny flats, backflow, grease traps, fisheries, horticulture, freshwater farm plans, NAIT, Holidays Act, e-invoicing, AML, WoF, hazardous substances, ECE, funeral and H&S.
  - Added three new opportunities: AEWV vault 6/10, plumber self-certification 5/10, drinking water 5/10, plus a weak granny-flat pack at 4/10.
  - Rejected MPI Trade Certification after finding that TradeWindow Prodoc and Libretto already serve it and that MPI XML upload works one request at a time. Moved micro-abattoirs to rejected / poor distribution after finding FCPmate.
  - Lowered BWOF from 5 to 4 after confirming BC Group's scale (about 10% of sites nationally) and Argest's online tracker. Added the s108A angle and InspectPro as a competitor.
  - Still unverified: AEWV revocation figures, absence of AEWV modules in HR suites, Artisan/PGDB API availability, granny-flat PIM volumes and Backflow Manager pricing.
