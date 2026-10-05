# New Zealand: offline-industries pass

Research date: 2026-10-05. Budget used: 42 WebSearch calls. WebFetch was blocked, so every claim below comes from search-result summaries and should be checked against the source before anyone acts on it. Opportunities in the existing report (`research/countries/new-zealand.md`: AEWV, plumber self-certification, small drinking-water suppliers, BWOF, granny flats, and others) are not repeated here.

**Context.** NZ's quiet industries are unusually well served by *free government tools*. Beekeepers have HiveHub, firearms dealers have MyFirearms, deaths go through Death Documents, and drinking water goes through Hinekōrako. The current government is also deregulating: homekill rules, the firearms registry and freshwater plans are all being loosened. So the usual pattern of "new rule, paper form, no software" is rare. The live pattern is **council enforcement of an existing rule**, for example Auckland's Safe Septic crackdown in June 2026.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Septic / onsite-wastewater servicers (Auckland, Bay of Plenty) | Inspect and pump out every 3 years. Servicer files a standard form with council for the owner (Auckland Unitary Plan). BoP requires a 3-yearly pump-out report to the regional council | Auckland's standard "septic tank pump out form" is a PDF. Some firms use a council digital form, others send paper. No NZ-specific septic software found | About 45,000 onsite systems in Auckland, about 30,000 verified, more than 11,000 non-compliant now facing enforcement (Auckland Council, June 2026). Servicer count: tens (estimate, from the council's approved-provider list) | **Opportunity 1 (4/10)** | Real enforcement trigger and per-job filing, but few buyers and the council's free digital form is the substitute |
| Firearms dealers | Record every sale in the Registry at the time of sale. Arms Act 2026 (in force 23 Sep 2026) keeps the Registry. Dealer stock must be in the Registry by 24 Jun 2027. Ammunition sellers still keep record books | Ammunition sales still go in paper record books. Dealers are onboarded one by one by Te Tari Pūreke | 429 dealer's licences, unchanged through 2024/25 (Firearms Safety Authority, Delivery and Performance Summary 2025) | **Opportunity 2 (3/10)** | Dated trigger, but tiny market, free portal, and ACT is contesting the Registry |
| Second-hand dealers, pawnbrokers, scrap metal | Licence from the Licensing Authority (Ministry of Justice). Record seller ID and goods, and give copies to Police on request (Secondhand Dealers and Pawnbrokers Act 2004) | Police say "most dealers keep only handwritten records or print computer copies". The 2021 Electronic Records member's bill was voted down at first reading | Over 400 in Auckland alone (Police SNAC note). National count not found | Rejected | No mandate to go digital and no 2025–26 trigger. Cash for scrap is still legal in NZ. Police's own SNAC tool reads paper records |
| Beekeepers | Register apiaries. Annual Disease Return by 1 June. Certificate of Inspection 1 Aug–30 Nov. AFB levy (American Foulbrood National Pest Management Plan) | Many hobbyists, older operators, paper apiary books | 8,218 registered beekeepers, 50,966 apiaries, 522,569 colonies (Nov 2024, down about 10% a year; AFB Management Agency report to ApiNZ) | Rejected | The official free app **HiveHub** already files ADRs, registers apiaries and reports AFB. Industry is shrinking |
| Homekill and recreational-catch service providers (mobile butchers, dual-operator butchers) | Annual MPI listing (NZ$274.90). Records under the Homekill Records and Information Specifications. MPI consultation (31 Aug–5 Oct 2026) on the 28-day rule, who may eat homekill, and **possible labelling** | Rural, owner-operated. Records spec is a notice, with no software listed | Public MPI listing on data.govt.nz. Count not retrieved (unverified, likely a few hundred) | Watchlist | Rules are being loosened. Revisit only if mandatory labelling is adopted |
| Well/bore drillers | Bore/well log to the regional council within about 1 month of completion (form differs per council: GWRC PDF, Environment Southland online form, HBRC application) | GWRC log is a PDF sent by post or email | Small, likely around 100 firms (estimate, unverified) | Rejected | One filing per bore, few buyers. "Many authorities" exist, but volume is too low |
| Agrichemical spraying contractors | Regional plan rules (e.g. Waikato rule 6.2): spray plan, neighbour notification within 50 m, spray diary, Registered Chemical Applicator (RCA) certificate | Notification letters and paper diaries | Not counted | Rejected | Records stay on file and are not submitted. Horticulture is already covered by AgWorld and Hectre (country report) |
| Households employing nannies or domestic workers | Domestic worker under 30 h/week is an IR56 taxpayer who pays own tax. Above that, household registers as employer: PAYE, KiwiSaver, payday filing within 2 working days | Small and informal | Not counted | Rejected | Low volume. Thankyou Payroll (free) and Smartly cover it. Most nannies are IR56 |
| Recognised Seasonal Employer (RSE) employers | Agreement to Recruit, 10 pastoral-care areas, accommodation standards. 2026 review adds internet access and new Minimum Accommodation Standards "at pace" | Accommodation inspections | A few hundred employers (unverified) | Rejected | Buyers are large horticulture firms with HR staff, not quiet operators. Overlaps the AEWV opportunity |
| Small passenger services (taxi, shuttle) | Work-time logbooks | — | — | Rejected | At least 8 NZTA-approved e-logbooks (EROAD, Logmate and others). Uber drivers must use Logmate |
| Independently qualified pool inspectors (IQPIs) | Residential pool barriers inspected every 3 years. IQPI emails a Certificate of Periodic Inspection to each council (about 67 councils, each with its own address) | Certificates sent by email (e.g. Dunedin complianceteam@ address) | About 200,000 pools. IQPI register held by MBIE (count not found) | Rejected | Councils do most inspections themselves, so few IQPIs. A 3-yearly cycle is a weak software pull |
| Campgrounds | Camping-Ground Regulations 1985, annual council registration | — | Not counted | Not screened in depth | Searches returned only freedom-camping changes (self-contained vehicles, end of transition 7 Jun 2026) |
| Funeral directors, cemeteries | Death registration, cremation forms | — | — | Rejected (country report) | Government Death Documents covers 99% of deaths |

NZ-specific groups added from registers: firearms dealers (Te Tari Pūreke dealer licences), homekill service providers (MPI listing), IQPIs (MBIE register), Auckland onsite-wastewater service providers (council list).

## 2. Opportunities

### Opportunity: Septic Service-to-Council Compliance Router (Auckland Safe Septic + Bay of Plenty)

**Industry:**
Onsite wastewater servicing: septic pump-out, aerated wastewater treatment system (AWTS) servicing and drainage firms.

**Buyer:**
Owner-operators and office administrators of small septic, pump-out and drainage firms (1–15 staff) on Auckland Council's approved onsite-wastewater service-provider list, and certified septic-tank inspectors in Bay of Plenty.

**Trigger / Why now:**
Auckland Council announced in June 2026 that its Safe Septic programme is moving from education to enforcement. Abatement notices, LIM notations and infringement fines now apply to more than 11,000 non-compliant properties. Compliance rose from 25% to 75% over six years, with more than 30,000 systems verified. Since 2023 every tank must be inspected and emptied every 3 years. Council sends letters to about 1,000 owners a month asking for proof. Each letter becomes a job for a servicer, and each job must end with a filed record. In Bay of Plenty, a septic tank must be pumped every 3 years and a report given to the regional council.

**Current workflow:**
1. The owner gets a council letter and phones a servicer.
2. The servicer books the job (paper diary, Tradify or Fergus), pumps or inspects, and fills in Auckland's standard "septic tank pump out form" (PDF), or the council digital form that "some service companies use".
3. The office sends the form to council on the owner's behalf. Council warns that an invoice is not enough proof.
4. The servicer tracks when each customer is due again (3-yearly pump-out; AWTS often 6-monthly) and repeats the cycle. Firms in Bay of Plenty file a separate report to BOPRC.

**Pain:**
The servicer is effectively council's data-entry clerk for every job, and a missed or wrong filing means the customer gets an enforcement letter or fine and phones the servicer. Firms advertise "we lodge directly with council" as a selling point (The Drain Company, isukup), so filing is a competitive feature. Hours per filing and rejection rates are unverified.

**Existing solutions:**
- Auckland Council's own digital form and the PDF standard form (free; the main substitute).
- Generic trade job software: Fergus, Tradify, ServiceM8. These have no council submission (unverified).
- US septic software (ServiceCore, Septic BizMan, Service Fusion, Tank Track) does routes and pump records, but has no NZ council output.
- Paper diaries and the owner's filing cabinet.

**Offline evidence:**
The council form is a PDF. Servicers are small drainage firms found through council lists and local directories. No NZ septic software listings or review pages exist. Search results returned only US vendors.

**Offline channel:**
Phone the firms on Auckland Council's approved service-provider list (published with names and service areas). Also reach them through drainlayer merchants, the Water New Zealand SWANS onsite-wastewater special-interest group, and AWTS manufacturers (e.g. Innoflow) who require approved service agents.

**Market count:**
About 45,000 onsite systems in Auckland, which is about 15,000 compulsory pump-outs a year at a 3-yearly cycle (estimate), plus Bay of Plenty. Buyer count: tens of servicing firms in Auckland (estimate; the council list was not counted).

**The gap:**
A pump-out record captured once on a phone does not reach council, the customer and the reminder schedule all at once. The council digital form covers council filing only. It does not store the history, schedule the next service or handle the Bay of Plenty report.

**Possible product:**
A mobile job sheet for septic servicers that fills Auckland's standard form fields and files it with council (through the council digital form, or a PDF emailed to safeseptic@), sends the owner a proof copy, and books the next due date. Bay of Plenty report format added second.

**MVP:**
A phone form that mirrors the Auckland pump-out form, PDF generation, email to council and owner, and a customer list with a 3-yearly due-date reminder. Single council.

**Pricing hypothesis:**
NZ$49–129 per firm per month, or NZ$3–5 per filed job (estimate). Buyers would pay for software if it removes office time. A done-for-you filing service is not needed.

**How to find first customers:**
The Auckland Council approved-provider list (phone outreach), AWTS manufacturers' service-agent networks, and drainage merchants.

**Founder access:**
A non-local founder could sell this by phone and email (English, small firms). An Auckland visit helps for the first five customers.

**Risks:**
Council's free digital form may already do 80% of the job. The buyer pool is too small for more than a lifestyle business. Fergus or Tradify could add a template. No other council has an equivalent enforced regime (Northland and Whangārei rely on maintenance contracts without filing).

**Kill condition:**
Interviews show the council digital form already lets servicers file in under 2 minutes per job, or fewer than about 40 active Auckland servicing firms exist.

**Score:** 4/10 (pain 5, frequency 7, mandatory 8, fragmentation 3, competition 5, incumbent gap 4, buyer access 7, WTP 4, MVP 9, distribution 6. Main limit: market size.)

**Sources:**
- https://ourauckland.aucklandcouncil.govt.nz/media-centre/2026/june/safe-septic/
- https://www.aucklandcouncil.govt.nz/en/environment/looking-after-aucklands-water/water-quality-targeted-rate/onsite-wastewater-system-compliance.html
- https://www.aucklandcouncil.govt.nz/en/environment/looking-after-aucklands-water/maintain-septic-tank.html
- https://new.aucklandcouncil.govt.nz/content/dam/ac/docs/environment/septic-tank-pump-out-form.pdf
- https://insidegovernment.co.nz/auckland-council-welcomes-septic-tank-compliance-lift/
- https://www.boprc.govt.nz/environment/resource-consents/holding-a-resource-consent/consent-and-compliance/wastewater/
- https://thedraincompany.co.nz/services/septic-system-compliance/
- https://www.isukup.co.nz/septic-tank-services/council-inspections
- https://servicecore.com/septic-business-software/

### Opportunity: Firearms Dealer Stock-to-Registry Reconciler

**Industry:**
Licensed firearms dealers: gun shops, hunting retailers, gunsmiths, and small rural dealers.

**Buyer:**
Owner-operators of small independent dealers (not the national chains).

**Trigger / Why now:**
The Arms Act 2026 received Royal Assent on 5 August 2026 and took effect on 23 September 2026. It creates a separate Arms Regulator and keeps the Firearms Registry. Dealers must record every sale or supply in the Registry at the time of sale. Dealer stock must be entered in the Registry by **24 June 2027**, on a date the Commissioner sets per dealer. Ammunition sellers still record ammunition sales in record books.

**Current workflow:**
1. The dealer keeps stock in a POS or spreadsheet, or on paper.
2. For each sale, staff verify the licence and re-key the item and buyer into the online Dealer Transaction form in MyFirearms.
3. Before June 2027, the dealer must load all stock serials into the Registry, then keep POS and Registry stock in line.
4. Ammunition sales go into a separate paper record book.

**Pain:**
Every sale is double entry (POS plus Registry), and a one-off bulk stock load is coming. Errors are offences under the Arms Act. Hours and error rates are unverified.

**Existing solutions:**
- MyFirearms portal (free, built on Objective RegWorks, which has dealer inventory and transaction modules).
- Retail POS (Vend/Lightspeed and others) with no Registry link (unverified).
- Spreadsheets and paper record books.

**Offline evidence:**
Ammunition record books are paper. Dealers are onboarded to the Registry individually by Te Tari Pūreke. The dealer channel is the regulator's "Dealer Pānui" newsletter, not online communities.

**Offline channel:**
Te Tari Pūreke Dealer Pānui and partnership sessions, the NZ Mountain Safety Council and hunting clubs, distributors that supply dealers, and trade days. Dealer licence lists are not public (unverified), so outreach would go through distributors.

**Market count:**
429 dealer's licences (Firearms Safety Authority 2024/25 Delivery and Performance Summary).

**The gap:**
No bulk import or POS link from dealer stock systems into the Registry was found. Whether RegWorks exposes a dealer API is unknown.

**Possible product:**
A stock-serial importer and reconciler: it takes a POS or spreadsheet export, validates it against Registry fields, assists bulk entry, and flags drift between POS stock and Registry stock.

**MVP:**
CSV import, field validation, a copy-assist entry helper, and a reconciliation report.

**Pricing hypothesis:**
NZ$300–600 one-off onboarding, plus NZ$29–49 per month (estimate). The one-off part may be a service.

**How to find first customers:**
Gun-shop directories and distributors. Te Tari Pūreke dealer partnership events.

**Founder access:**
Hard for a non-local founder. A trust-sensitive, politically charged sector would need a local with a firearms-community presence.

**Risks:**
ACT invoked "agree to disagree" on the Registry in May 2025, so the Registry could be narrowed. The regulator may add bulk upload itself. Data-security expectations are high. The market is tiny.

**Kill condition:**
Te Tari Pūreke offers bulk CSV stock upload, or interviews show most dealers have fewer than about 200 serialised items.

**Score:** 3/10

**Sources:**
- https://www.franksogilvie.co.nz/news/explainer-arms-act-2026
- https://www.legislation.govt.nz/bill/government/2025/233/en/latest/
- https://www.firearmssafetyauthority.govt.nz/firearms-registry/what-firearms-registry-means-dealers
- https://www.firearmssafetyauthority.govt.nz/manage-and-apply/firearms-dealers/firearms-dealer-requirements
- https://www.firearmssafety.govt.nz/sites/default/files/2025-12/2025%20Delivery%20and%20Performance%20Summary%20Report.pdf
- https://www.objective.com/solutions/policing
- https://www.act.org.nz/news/act-invokes-agree-to-disagree-on-firearms-registry-review

## 3. Rejected

- **Second-hand dealers, pawnbrokers and scrap metal:** a real paper workflow, but there is no legal push to go digital. The 2021 Electronic Records bill failed, cash for scrap is legal, and Police built SNAC to read paper records themselves. Revisit if National revives machine-readable records.
- **Beekeepers:** HiveHub (official and free) already covers ADRs, apiary registration and AFB reports. 8,218 beekeepers, and the number is falling about 10% a year.
- **Homekill providers:** the 2026 consultation loosens rules. Watch the labelling proposal only.
- **Bore drillers:** fragmented by regional council, but too few bores and firms.
- **Agrichemical contractors:** records stay in-house. Horticulture spray tools already exist.
- **Household employers:** IR56 and free payroll (Thankyou Payroll) cover it.
- **RSE employers:** not quiet buyers. Overlaps AEWV.
- **Taxis and shuttles:** 8+ approved e-logbooks.
- **Pool inspectors (IQPIs):** councils do most inspections, and the cycle is 3-yearly.

## 4. Method notes

What worked:
- **Regulator media releases and dashboards:** the Auckland Safe Septic June 2026 release and the Firearms Safety Authority performance report.
- **MPI consultation pages** (homekill).
- **"<regulator> number of licence holders"**, which surfaced Te Tari Pūreke statistics.

What didn't work:
- **Searches for counts from the Justice Ministry licensing authority, IQPIs and homekill:** the registers exist, but results never gave totals.
- **"Scrap metal 2025" searches:** these returned South Africa and NSW.

NZ's quiet industries often already have a free government app, so check for an official tool first. With deregulation under way, the strongest triggers are council *enforcement* of existing rules, not new laws.
