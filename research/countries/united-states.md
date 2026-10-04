# United States - research report (2026-10-04)

**Coverage caveat:** the shared WebSearch budget ran out after 6 searches (limit 200 per session). The benchmark ideas from the brief (FL grease, funeral EDRS, solar permitting, certified payroll, fire inspection) are not re-reported. Everything below rests on thin evidence, and anything not tied to a source URL is marked unverified. Treat this as a lead list for follow-up, not validated findings. The searches that did run covered septic haulers, backflow testing, California pesticide use reporting, lead service lines, towing liens and rental registration. HVAC refrigerant (AIM Act), dental amalgam, Medicaid EVV, scrap/secondhand dealers, MS4/stormwater and lien waivers were never searched.

## Industries screened
| Industry | Workflow | Verdict | Reason |
|---|---|---|---|
| Septic / liquid-waste pumpers | Per-county monthly/quarterly pumping reports, disposal records, Texas trip tickets | Maybe | County-fragmented and mandatory, but Tank Track already covers septic (Texas trip ticket) |
| Backflow assembly testers | Same test result entered into each water utility's portal (Tokay, BSI Online) | Maybe (best of set) | Utility-side portals are fragmented. Tester-side tooling not found in the searches |
| Pest control / ag pesticide applicators (CA) | Monthly PUR to county ag commissioner | Weak | Free CalAgPermits online system provided by counties/state |
| Small water utilities | LCRI service line inventory, due Nov 1 2027 | Too competitive / poor distribution | 120Water, Fulcrum, Stantec, Esri already serve it; buyers are tiny and procure via consultants |
| Towing / impound | Owner/lienholder lookup and state lien notices | Rejected | Autura and others automate DMV lookup and notices |
| Property managers / landlords | City rental registration, inspection, renewals | Weak-maybe | City-fragmented, but municipal-side vendors dominate; landlord-side tracker is generic |
| HVAC refrigerant (AIM Act ER&R, 2026) | Leak repair records | Not researched | Search budget exhausted |
| Home care EVV | State aggregator submission | Not researched | Budget exhausted; known incumbents (unverified) |

## Opportunities

### Opportunity: Backflow Tester Multi-Utility Submission Hub

**Industry:**
Water utilities' cross-connection control, tester side (certified backflow assembly testers, irrigation and plumbing contractors)

**Buyer:**
Owner of a 1-10 person backflow testing company, or a plumbing/irrigation contractor that tests for many utilities

**Trigger / Why now:**
More utilities are moving to portal-only submission. Yakima accepts reports only through Tokay. Oak Harbor required electronic submission through its new portal from January 2024. Round Rock, New West and others use BSI Online. Each utility picks its own system, so a tester working in several jurisdictions logs into several portals.

**Current workflow:**
1. Tester performs the test and fills in a paper or app form on site.
2. Tester looks up the customer's confirmation number (BSI) or account per utility.
3. Tester logs into the correct utility's Tokay or BSI portal and re-types the results, per device.
4. Failed tests go through repair and retest, with a second submission and notices.
5. Tester tracks their own certification and gauge calibration records separately.

**Pain:**
Per-device duplicate entry, with a rejection or late-fee risk to the customer. Portal instructions are published as PDFs by individual cities (sources). Hours per week are unquantified (unverified).

**Existing solutions:**
Tokay Web Test and BSI Online (utility-side systems that testers must use). Tester-side field apps probably exist but were not searched (unverified). Utility-run free portals.

**The gap:**
No evidence found of a tester-side tool that pushes one test record into several utilities' Tokay/BSI portals. Whether the portals expose APIs or allow automation is unknown, and this is the kill risk.

**Possible product:**
A field test-report app that stores results once and formats or submits them to each utility's portal (by API if offered, otherwise browser automation or a paste-ready format).

**MVP:**
Mobile test form plus export to the 2-3 most common portals in one metro area, with a retest and fail-notice tracker.

**Pricing hypothesis:**
$40-100/month per tester; or $1-2 per report.

**How to find first customers:**
Approved-tester lists published by utilities (for example the Approved Backflow Testing Companies list on BSI Online), ABPA/state certification rosters, utility PDFs naming testers.

**Risks:**
Portal terms of service may forbid automation, and Tokay or BSI could launch a tester app. Seasonal annual testing means low frequency per device, though volume per tester is high. Total tester count is unverified.

**Kill condition:**
Portals prohibit automated submission and no API is offered, or testers say they already use a tester app that exports to the portals.

**Score:** 5/10

**Sources:**
- https://www.yakimawa.gov/services/water-irrigation/files/Tokay-User-Guide.pdf
- https://oakharbor.gov/DocumentCenter/View/2084/Tokay-Webtest-Instructions-2023
- https://www.roundrocktexas.gov/wp-content/uploads/2022/09/BSI-Online-Tester-Instructions-USA_9.6.22-3.pdf
- https://bsionlinetracking.com/default/terms-conditions

### Opportunity: Septic and Liquid-Waste Hauler County Reporting Router

**Industry:**
Septic pumping / liquid waste hauling

**Buyer:**
Owner or office manager of a small septic pumping company working across several counties

**Trigger / Why now:**
No new 2026 rule verified. This is a standing, county-fragmented mandate: Madera County requires monthly reports by the 5th, Yolo requires quarterly pumping reports with permit-suspension risk, and Texas requires trip tickets and manifests. Many other counties publish their own forms (SLO "report of disposal", Placer, Lake County IL, Blount TN and others).

**Current workflow:**
1. Driver completes a job ticket.
2. Office re-keys date, site, owner, gallons and disposal location into each county's PDF or form.
3. Reports are emailed or mailed to each county monthly or quarterly.
4. Disposal-site receipts are reconciled.

**Pain:**
Penalty is permit suspension (Yolo). Format differs by county. The pain is plausible, but quantified hours are unverified.

**Existing solutions:**
Tank Track (septic software with automated Texas trip tickets and e-signatures). General field-service and dispatch tools. County PDFs.

**The gap:**
Tank Track covers Texas; I did not verify whether it or others produce per-county reports for California and other states. Gap is unproven.

**Possible product:**
A reporting add-on that ingests job exports (CSV from existing dispatch tools) and outputs each county's required form on schedule.

**MVP:**
Ten California counties' monthly/quarterly report templates, fed from CSV.

**Pricing hypothesis:**
$29-79/month per company.

**How to find first customers:**
County septic pumper permit lists (published by Placer, Yolo and others); state pumper associations.

**Risks:**
Small market (a few thousand haulers nationally, unverified). Incumbent Tank Track could add county reports. Some counties are moving to their own portals.

**Kill condition:**
Haulers confirm their current software already prints county reports, or counties' forms change so often that maintenance outweighs revenue.

**Score:** 4/10

**Sources:**
- https://maderacounty.com/home/showpublisheddocument/914/636667292685670000
- https://yolocounty.gov/home/showpublisheddocument/22134/636287117492230000
- https://slocounty.ca.gov/departments/health-agency/public-health/environmental-health-services/forms-documents/forms-other-(not-permit-applications)/liquid-waste-program-forms-other/report-of-disposal
- https://tank-track.com/?p=3296

### Opportunity: Multi-City Rental Registration and Inspection Tracker for Small Property Managers

**Industry:**
Residential property management

**Buyer:**
Small property managers and landlords with 50-500 doors across several municipalities

**Trigger / Why now:**
No 2026 trigger verified. Cities such as Seattle (rental registration and inspection ordinance) and Ann Arbor require registration, inspections and renewals on their own cycles, and cities contact owners about 60 days before expiry.

**Current workflow:**
1. Manager tracks expiry dates per property in a spreadsheet.
2. Manager logs into each city's portal to renew, pay and upload documents.
3. Manager schedules inspections and fixes deficiencies.

**Pain:**
Missed renewals bring fines or loss of the right to lease (the ordinances say a certificate must be in effect). Frequency is annual or multi-year per property, which is low.

**Existing solutions:**
Municipal-side platforms (Cloudpermit, Diversified Technology) serve the city. DoorLoop and Process.st offer generic compliance tracking. Property-management suites (AppFolio, Buildium) are unverified for this.

**The gap:**
Unverified. A landlord-side tracker that knows each city's rules and pulls status from portals could exist, but this was not researched further.

**Possible product:**
A calendar and document vault pre-loaded with city rules and renewal forms.

**MVP:**
Ten metros' rental registration rules, expiry alerts and filled-in forms.

**Pricing hypothesis:**
$2-4 per door per month.

**How to find first customers:**
City rental registries and public rental license lists; local landlord associations.

**Risks:**
Looks like generic compliance tracking, which the brief says to downgrade. Annual frequency. Property-management suites may add it.

**Kill condition:**
Interviews show landlords tolerate the problem with a spreadsheet and pay for nothing.

**Score:** 3/10

**Sources:**
- https://seattle.gov/sdci/codes/licensing-and-registration/rental-registration-and-inspection-ordinance/owners-and-managers
- https://www.a2gov.org/building-rental-and-inspection-services/rental-housing/property-registration-and-inspection-information/
- https://www.doorloop.com/hub/licensing

## Rejected after competitor research
- **Towing/impound lien notices:** Autura already provides DMV lookup across 38+ states plus state-required notices (https://www.autura.com/towing-and-recovery/lien-processing-and-notification). Add123 and others offer similar services.
- **California pesticide use reporting (applicators/growers):** counties and the state provide free CalAgPermits, which covers monthly PUR and Notices of Intent (https://www.eldoradocounty.ca.gov/files/assets/county/v/1/documents/land-use/agriculture/calagpermits-pur-ag-how-to.docx). A paid layer would need to be a multi-county exceptions tool, with no evidence of demand.

## Attractive problem, poor distribution
- **Small public water systems, LCRI service line inventory (baseline due Nov 1 2027):** 97% of 73,000 systems serve fewer than 10,000 people, many with paper records and no GIS (https://liveinthefuture.org/startups/lead-service-line-compliance-saas.html, a startup-idea page, so a weak source). Buyers are municipal and slow, and they buy through consultants.

## Too competitive
- **Lead service line inventory software:** 120Water, Fulcrum, Stantec and Esri all have offerings (https://www.fulcrumapp.com/blog/lead-service-line-inventory-and-lcrr-compliance/, https://www.120water.com/blog/they-work-hard-for-the-money-automation-and-workforce-maximization).

## Not researched, worth a follow-up pass when search is available
AIM Act refrigerant leak-repair records (2026), Medicaid EVV state aggregators, dental amalgam separator reporting to local sewer authorities, scrap/secondhand dealer police reporting, stormwater/MS4 inspection reporting, state-specific lien waiver and notice rules. These are hypotheses only and have no verified evidence.
