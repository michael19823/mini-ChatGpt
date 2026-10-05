# United States: offline-industries pass (2026-10-05)

**Scope:** this pass covers quiet, regulator-documented industries only. It does not repeat the ideas in `research/countries/united-states.md`. That report already covered and rejected backflow, septic, scrap/catalytic converters, well drillers, CA pesticide PUR, vet rabies certificates, weights and measures, and others. About 45 WebSearch calls were used, and the last one was refused because the session limit was hit. WebFetch was not used. Figures without a source are marked *estimate* or *unverified*.

**Bottom line:** the US quiet-industry space is better served than expected. In most cases the substitute is a free state portal (VESL, NERIS, state forestry notification systems), a mandated vendor (LeadsOnline), or a cheap vertical app (Captira, FieldClock, Poppins). Three narrow leads survive, and none scores above 5.

## 1. Quiet industries screened

| # | Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|---|
| 1 | Elevator inspectors and small elevator companies (Florida) | Inspection report to DBPR within 5 days. Paper scantron was banned from Jan 1 2026, so filing is now TXT/CSV **plus** a fillable PDF. Five local AHJs run their own programs | Scantron forms were still used until 2025. Other states take fax or mail (MD fax, TX mail with $20/unit fee) | 663 certified elevator inspectors and 66,601 conveyances in FL (Bureau of Elevator Safety, June 2024) | **Opportunity (5)** | New 2026 format change, per-job duplicate filing, and a named licensee list |
| 2 | Charitable gaming orgs (VFW, Legion, Lions, fire auxiliaries) | Monthly or quarterly gaming tax returns and financial reports (KY, ND, NE, TX, MN) | State paper worksheets (KY CG-FIN forms, NE Form 35C). Volunteer treasurers do the work | MN 1,130 licensed orgs. KY 621 licensed plus 889 exempt. ND 337 (FY2025). TX and NE not counted | **Opportunity (4)** | MN is already served by CG Made Easy. Other states look unserved, but each state needs its own build |
| 3 | Traveling carnivals / midway operators | Per-state ride permits, inspection affidavits at each setup or every 30 days, itineraries filed about 15 days ahead, insurance certificates naming each state | State forms and fax/email. Family-run firms | OABA: 200 carnivals and hundreds of concessionaires among 2,500+ members | **Opportunity (4)** | Real multi-state paperwork per stop, but a tiny market |
| 4 | Driver-education providers (TX, NY) | TX: upload completion data as CSV within 15 days of each phase (new TDLR system, 2025). NY: e-certificate in the DMV portal within 24 h (Feb 2026, replaces paper MV-285) | Paper certificates until 2025-26 | Not counted | Watch (3) | The trigger is real, but driving-school software (Drive Scout and others) can add a CSV export easily, and each school deals with one state |
| 5 | Households employing nannies and caregivers | Payroll, Schedule H, state UI, new MN Paid Leave wage reports (first premiums due Apr 30 2026) | Done by an accountant or not at all | Not counted | Rejected | Poppins $49/mo, HomePay $59, GTM $70, SurePayroll $39 |
| 6 | Second-hand / precious-metal dealers, pawn | Daily transaction reports to police within 24 h, plus hold periods | Ordinances still exist on paper | Not counted | Rejected | Ordinances name LeadsOnline as the required system |
| 7 | Bail bond agents | Monthly outstanding-liability reports (NC SBS Connect; VA email by the 5th; OK by the 30th) | Word/PDF forms sent by email | Not counted | Rejected | Captira ($99/mo) and BailBooks ($55/mo) generate state and surety reports |
| 8 | Feed, fertilizer and pet-treat makers | Product registration and quarterly or semiannual tonnage reports per state (IN quarterly, WV semiannual, and others) | Paper or PDF tonnage forms per state | Not counted | Rejected | Kelly Registration Systems, Sagentia, PLCompliance, AgroCertify, Verdant, Spring Regulatory |
| 9 | Small / custom-exempt meat processors | HACCP records and custom-exempt owner records | Paper and Excel logs | Not counted | Rejected | FoodReady, and We R Food Safety's FSP-LITE built for small and custom plants. Record-keeping only, no filing |
| 10 | Livestock auction markets | ADT rule: EID 840 tags since Nov 5 2024, ICVIs for interstate moves | Sale barns tag animals. States hand out free EID readers (Iowa) | Not counted | Rejected | Vets and eCVI tools carry the paperwork. States subsidise the hardware. Little left to file |
| 11 | Hunting and fishing outfitters | USFS/BLM/NPS actual-use reports, state client logs (MT Madison River), AK hunt records | Agency paper forms | Not counted | Rejected | LodgeRunner and Flybook already format reports per agency. Mostly annual |
| 12 | Seafood dealers / fish houses | Trip ticket per transaction (FL weekly, NC monthly) | NC dealers had to move off the old PC program by end of 2025 | Not counted | Rejected | Free state software (VESL, SAFIS eDR, Gulf States Trip Ticket) |
| 13 | H-2A growers / farm labor contractors | AEWR changed by the Oct 2 2025 IFR (skill levels, housing adjustment). Three-fourths guarantee. CA FLCs register each year in every county they work ($30-75) | Paper county registration forms | Not counted | Rejected | FieldClock ($7/employee/mo), AgriERP, PickApp. DLL FLC is a service firm. County registration is annual |
| 14 | Volunteer fire departments | All incidents reported in NERIS from Jan 1 2026, after NFIRS was retired | Volunteer chiefs used paper and NFIRS | Not counted | Rejected | FEMA provides a free NERIS app. RMS vendors (ESO and others) integrate. Buyer is a municipality with low WTP |
| 15 | Hardwood sawmills and loggers | EUDR geolocation (large firms Dec 30 2026, small Jun 30 2027). State harvest notifications | Many small private woodlots | Not counted | Rejected | AHEC's AHA statements are free per consignment, using county-level geolocation. State notifications are free (Oregon) |
| 16 | Tattoo / piercing studios | Keep consent forms and ID copies for 2-7 years (by county or state) | Paper binders | Not counted | Rejected | Retention only, nothing to submit. Generic e-consent tools are enough |
| 17 | Inflatable (bounce house) rental firms | Ride registration and annual inspection (OK $1/unit, MD, TX via TDI) | n/a | Not counted | Rejected | Not quiet (online booking businesses). Single-state firms. Louisiana bill would drop inflatables from regulation |

## 2. Opportunities

### Opportunity: Florida Elevator Inspection E-Filing Router (CSV + PDF + local AHJ)

**Industry:**
Elevator inspection and maintenance: private Certified Elevator Inspectors (CEIs) and small registered elevator companies.

**Buyer:**
Owner-operator CEIs and inspection firms with 1-10 inspectors. Also office managers at independent (non-OEM) elevator contractors.

**Trigger / Why now:**
From January 1 2026 the Florida Bureau of Elevator Safety no longer accepts scantron inspection reports. Every submission must be e-filed as TXT or CSV through DBPR Online Services, and **both** the e-file and a fillable PDF form are required. Inspections in Broward, Miami-Dade, City of Miami, Miami Beach and Reedy Creek go to those local programs instead.

**Current workflow:**
1. The inspector inspects the unit and fills in a checklist, on paper or in a generic forms app.
2. Back at the office, someone types the results into the Bureau's CSV/Excel template, row by row.
3. They fill in the separate fillable PDF report with the same data.
4. They upload through DBPR Online Services under the inspector's or company's licence login.
5. For units in a local AHJ, they file in that program's format instead.
6. They chase rejections and keep a copy for the owner. Under Texas-style rules (other states) the owner then mails the report and fee.

**Pain:**
The same data is entered twice, in the CSV and the PDF. The format change in 2026 forces new work on inspectors who used to bubble scantrons. The 5-day filing deadline applies to every unit. Florida's auditor has repeatedly criticised how the Bureau monitors inspections (Florida Trend, FL Auditor General 2024-034), so the regulator is tightening up.

**Existing solutions:**
- DBPR's own CSV template and online upload (free, manual).
- Elevator field-service software such as FieldBoss, which writes about NYC DOB elevator filings. Whether it outputs the Florida CSV is *unverified*.
- Generic forms apps (GoCanvas and others).
- Office staff typing data in by hand.

**Offline evidence:** the state used paper scantron forms until the end of 2025. Maryland still accepts third-party reports by fax, and Texas owners mail reports with a check.

**Offline channel:** the DBPR public licensee search lists all 663 CEIs, so a phone or email campaign is possible. Other channels are Elevator World magazine and the Florida elevator industry's continuing-education providers.

**Market count:** 663 Certified Elevator Inspectors and 2,284 Certified Elevator Technicians; 66,601 licensed conveyances (Bureau of Elevator Safety, June 2024). At about one inspection per unit per year, that is roughly 66k filings a year in FL (*estimate*).

**The gap:**
Nothing visible turns one inspection checklist into the Bureau's CSV plus the matching PDF plus the local-AHJ variant. Field-service tools focus on maintenance, not third-party inspection filing (*unverified*).

**Possible product:**
A mobile inspection checklist for Florida conveyance types that outputs a DBPR-valid CSV, a filled PDF, and the local-AHJ form in one step, with a filing tracker for the 5-day deadline. It could later add NYC DOB NOW ELV3 data prep, the Maryland third-party report, and Colorado's third-party form.

**MVP:**
Web form plus CSV/PDF generator for Florida only, with a batch upload file per day. No mobile app at first.

**Pricing hypothesis:**
$3-5 per filed unit, or $79-149 per inspector per month. At 100 inspectors on $99, that is about $120k ARR.

**How to find first customers:**
DBPR licensee search (CEI licence type). Florida elevator continuing-education classes. Elevator World classifieds.

**Risks:**
- The market is small (663 inspectors).
- The Bureau could publish a better free tool.
- The large OEMs (Otis, TK Elevator, Schindler, KONE) have in-house systems, so only independents are buyers.
- Founder access is fine for a non-local US founder. The sale is by phone and email.

**Kill condition:**
- Interviews show inspectors already export the CSV from an existing app, or
- the PDF requirement is dropped and the CSV takes under 2 minutes per unit.

**Score:** 5/10 (Pain 5, Frequency 7, Mandatory 9, Fragmentation 5, Competition 6, Incumbent gap 6, Buyer access 8, WTP 4 (software, not service), MVP 9, Distribution 6)

**Sources:**
- https://www2.myfloridalicense.com/elevator-safety/inspections/
- https://www2.myfloridalicense.com/elevator-safety/bureau-information/
- https://www2.myfloridalicense.com/hr/contact_us/documents/ESTAC%20minutes%202024-06.pdf
- https://FLAuditor.gov/pages/pdf_files/2024-034.pdf
- https://www.floridatrend.com/article/38331/audit-finds-florida-agency-didnt-properly-monitor-elevator-safety-programs/
- https://www.broward.org/Building/Elevators/Pages/Third-Party-CEIs-Elevator-Owners.aspx
- https://labor.maryland.gov/labor/safety/elevthirdpartyprocedure.shtml
- https://www.nyc.gov/site/buildings/industry/dob-now-safety-elevator-faqs.page
- https://fieldboss.com/?p=11094

---

### Opportunity: Charitable Gaming Returns for Volunteer-Run Organizations Outside Minnesota

**Industry:**
Charitable gaming: bingo, pull-tabs, raffles and e-tabs run by veterans', fraternal, civic and fire-department organizations.

**Buyer:**
The gambling manager or volunteer treasurer of the club, or the small-town accountant who prepares returns for several clubs.

**Trigger / Why now:**
- Texas abolished the Lottery Commission. Charitable bingo moved to TDLR on Sep 1 2025, its rules were transferred on Oct 1 2025, and SB 3070 added distributor record-keeping changes.
- North Dakota moved licensing, renewals and tax reporting into a new online portal, and its 2025 laws changed eligibility and expense rules (SB 2035, SB 2288).
- Kentucky issued an updated gaming policy in Feb 2026 (seen via a diocese circular).

**Current workflow:**
1. Volunteers record every session or game on state worksheets (KY session and event worksheets, NE Form 35C).
2. They reconcile cash, pull-tab inventory and prizes, and keep 3 years of records (KY).
3. The treasurer or accountant transfers the totals to the quarterly or monthly return and pays the tax (ND to the AG each quarter; TX via the Bingo Service Portal by the 25th).
4. They track the share of net proceeds spent on lawful purposes and any expense caps.

**Pain:**
- Late filing carries penalties (TX up to $300 per late quarterly report).
- The work is done by ageing volunteers, and Kentucky's license is required above $25k a year in receipts.
- The money involved is large: KY gross receipts $1.37B (2024), MN $4.9B (FY2025), ND about $2B.

**Existing solutions:**
- **CG Made Easy**: Minnesota only. It e-files G1 returns to MN Revenue and the Gambling Control Board, and has served clubs since 2014.
- State paper and Excel worksheets.
- Local accountants.
- Distributor and e-tab vendor back-office reports (Pilot Games, Charitable Gaming Distributors in ND), *unverified* in detail.

**Offline evidence:** the state forms are worksheets meant to be filled by hand. Clubs are run by volunteers. No review-site category exists for this.

**Offline channel:**
- State associations of veterans' posts (VFW and Legion departments).
- Distributors who sell paper pull-tabs and bingo paper to every licensed club.
- Accountants who prepare returns for several clubs.
- The state licence lists, phoned directly.

**Market count:** KY 621 licensed (plus 889 exempt) organizations; ND 337; MN 1,130 (already served); TX and NE not counted (*unverified*).

**The gap:**
No CG-Made-Easy-style tool was found for KY, ND, NE or TX (*absence of evidence, not proof*). Texas classifies charitable bingo accounting software as a "bingo supply", which may require a distributor licence. That is a barrier in Texas, but it also protects whoever gets licensed.

**Possible product:**
Clone the CG Made Easy model for Kentucky first: session worksheets, inventory, the CG-FIN-ORG quarterly financial report, and lawful-purpose tracking. North Dakota would be second.

**MVP:**
Kentucky quarterly report generator from session entries, with a printable state-format PDF.

**Pricing hypothesis:**
$40-80 per month per club, or $300-600 per year per club for accountants (*estimate*). A 300-club footprint across 2 states is about $150-250k ARR.

**How to find first customers:**
- KY DCG and ND AG licensee lists.
- Introductions through pull-tab distributors.
- Veterans' state conventions.

**Risks:**
- Each state is a separate product.
- E-tab systems already automate reports in ND.
- The Texas licensing barrier.
- Buyers are frugal non-profits.
- A non-local founder can sell this, but trust comes through distributors.

**Kill condition:**
- KY or ND clubs already get a complete return from their distributor or e-tab vendor, or
- CG Made Easy expands to those states.

**Score:** 4/10 (Pain 6, Frequency 7, Mandatory 9, Fragmentation 7, Competition 6, Incumbent gap 6, Buyer access 7, WTP 4, MVP 8, Distribution 5)

**Sources:**
- https://www.cgmadeeasy.com/untitled/-b94d
- https://www.revenue.state.mn.us/index.php/lawful-gambling-tax-requirements
- https://www.lrl.mn.gov/docs/2025/Mandated/250720/gambling-control-board.pdf
- https://dcg.ky.gov/Documents/2024AnnualReport.pdf
- https://dcg.ky.gov/new_docs.aspx?cat=49
- https://northdakotamonitor.com/?p=8566
- https://attorneygeneral.nd.gov/licensing-and-charitable-gaming/
- https://www.txbingo.org/export/sites/bingo/Documents/Some_notes_about_recent_legislative_changes_-_Oct_2025.pdf
- https://www.txbingo.org/export/sites/bingo/About_Us/quarterly-filing-periods-and-due-dates.html
- https://revenue.nebraska.gov/sites/default/files/doc/gaming/forms/f_35c.pdf
- https://sao.texas.gov/reports/main/11-002.html

---

### Opportunity: Per-Stop Compliance Packets for Traveling Carnivals

**Industry:**
Traveling amusement: carnivals, midways and ride concessionaires.

**Buyer:**
The owner or office manager (often a family member) of a carnival company with 10-60 rides.

**Trigger / Why now:**
There is no single new rule. The trigger is ongoing state tightening, such as Oklahoma's 2026 inflatable and ride safety campaign and Maryland's amended inflatable rules in 2026. The need comes from the constant multi-state route.

**Current workflow:**
1. Before the season, they apply for a permit per ride in each state, with the insurance certificate naming that state's labour department.
2. About 15 days before each event, they file the itinerary.
3. At each setup, or every 30 days, they file an inspection affidavit per ride.
4. They keep daily inspection logs.
5. Each fair board asks for its own copies.

**Pain:**
Dozens of rides × several states × 20-40 stops a season, all handled by phone, fax and email. A missed itinerary or affidavit means rides cannot open.

**Existing solutions:**
- GoCanvas daily inspection apps, including a TX TDI daily inspection record.
- Paperform and MiraTag maintenance-log templates.
- RationalGo's ride certification tracker.
- Insurance brokers who issue certificates.

**Offline evidence:** state forms, a trade association that meets in person (OABA, IAFE conventions), and family firms.

**Offline channel:** OABA membership, the IAFE convention, Carnival Warehouse news, and the insurance brokers who specialise in carnivals.

**Market count:** OABA lists 200 carnivals and hundreds of concessionaires.

**The gap:**
Existing tools keep maintenance logs. None was found that builds each state's itinerary, affidavit and insurance packet from the route.

**Possible product:**
Route-driven packet builder. You enter the season route and ride roster, and it outputs each state's forms, the certificates to request, and the fair-board bundles, with deadline reminders.

**MVP:**
Templates for the 5-6 states on one pilot carnival's route, plus a deadline calendar.

**Pricing hypothesis:**
$150-300 per month in season. That works out to about $50-100k ARR at full penetration of a tiny market.

**How to find first customers:**
The OABA directory and the IAFE convention floor.

**Risks:**
- The market is too small.
- Owners may delegate the work to their insurance broker.
- Many state forms change.

**Kill condition:**
Carnival-specialist insurance brokers already assemble these packets for free.

**Score:** 4/10 (Pain 6, Frequency 7, Mandatory 9, Fragmentation 8, Competition 7, Incumbent gap 6, Buyer access 6, WTP 4, MVP 7, Distribution 5; market size caps it)

**Sources:**
- https://labor.illinois.gov/faqs/carnival-licensing-faq.html
- https://lni.wa.gov/licensing-permits/other-licenses-permits/amusement-ride-safety-permits-and-inspections/
- https://ops.colorado.gov/sites/ops/files/AmusementRegulations071519.pdf
- https://www.pa.gov/agencies/pda/consumer-protection/amusement-rides-and-attractions
- https://www.gocanvas.com/mobile-forms-apps/12133-Texas-Amusement-Ride-Safety-Inspection-and-Insurance-Act-Daily-Inspection-Record
- https://rationalgo.ai/resources/app-builder/amusement-ride-inspection-certification-tracker
- https://carnivalwarehouse.com/newsserver/oaba-honors-pugh-hauser-and-porter-with-2026-industry-awards-1773619200
- https://oklahoma.gov/labor/newsroom/2026/odol-launches-inflatable-ride-safety-campaign.html

## 3. Rejected

- **Household employers (nannies, caregivers).** Minnesota Paid Leave premiums began Apr 30 2026, but nanny payroll services already cover it:
  - Poppins $49/mo, HomePay $59, GTM $70, SurePayroll $39.
  - Sources: https://www.techrepublic.com/article/best-nanny-payroll-services/, https://www.foley.com/insights/publications/2025/11/minnesotas-new-paid-leave-law-is-here-what-employers-need-to-do-before-january-1-2026/
- **Second-hand, precious-metal and pawn reporting.** Ordinances mandate LeadsOnline. Source: https://monroecountyda.com/preciousmetalssecondhandgoods/
- **Bail agent monthly reports.** Captira ($99/mo) and BailBooks ($55/mo). Sources: https://captira.com/pages/bail-software, https://ncdoi.gov/documents/bail-bond/electronic-monthly-filing-bail-bondsman-faqs/open
- **Feed, fertilizer and pet-treat tonnage and registration.** At least six service firms or tools: Kelly Registration Systems, Sagentia, PLCompliance, AgroCertify, Verdant, Spring. Source: https://www.kelly-products.com/kelly-registration-systems/
- **Small meat processors.** FoodReady and FSP-LITE. Record-keeping only. Source: https://provisioneronline.com/articles/107447-we-r-food-safety-announces-the-launch-of-fsp-lite
- **Outfitter use reports.** LodgeRunner and Flybook. Source: https://lodgerunner.com/Fishing-Outfitter-Software.aspx
- **Seafood dealer trip tickets.** Free VESL and SAFIS eDR. Source: https://coastalreview.org/2025/11/seafood-dealers-reminded-to-switch-software-by-year-end/
- **H-2A and FLC compliance.** FieldClock, AgriERP and PickApp. County FLC registration is annual. Sources: https://www.fieldclock.com/solutions/h-2a, https://awm.sbcounty.gov/wp-content/uploads/sites/84/2026/04/2026-FARM-LABOR-CONTRACTOR-REGISTRATION-041426.pdf
- **NERIS for volunteer fire departments.** Free federal app and RMS vendors. Source: https://www.lexipol.com/resources/blog/the-switch-from-nfirs-to-neris-is-here/
- **EUDR for US hardwood.** Free AHA statements per consignment. Source: https://www.americanhardwood.org/en/node/2042
- **Driver-education completion uploads (TX, NY).** Watch only. School software can add the export, and each school deals with one state. Sources: https://www.tdlr.texas.gov/news/2025/05/05/coming-soon-in-2025-tdlr-rolls-out-new-system-for-driver-education-provider-certificate-completion-uploads/, https://www.iroquoiscsd.org/student-parent-resources/driver-education/driver-ed-certificates-of-completion
- **Tattoo record retention.** Nothing to submit.
- **Inflatable rentals.** Not quiet, and Louisiana is moving to drop inflatables from regulation.

## 4. Method notes

What worked:
- Searches like "<state> bureau <industry> e-filing CSV 2026" and "monthly report form <industry> <state>" surfaced official format changes (Florida elevators, Texas driver education, the Texas bingo transfer).
- Annual reports from the regulator gave clean licensee counts (MN GCB, KY DCG, ND AG, FL Bureau of Elevator Safety).

What did not work:
- Searches for "<industry> software" mostly returned generic forms apps.
- In the US, many quiet industries are served by a free state system or a mandated vendor, so checking the substitute early killed most leads.

The budget was used up: the 46th search was refused.
