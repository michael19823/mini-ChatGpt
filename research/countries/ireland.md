# Ireland - research report (2026-10-04)

Scope note: about 10 searches, no page fetches (WebFetch blocked), so detail is search-snippet level. Anything not in a source is marked "unverified". Ireland is a high-income, well-digitised, English-language, EU market with mature local software vendors, so most workflows are already served. No sanctions or accessibility issue: a foreign solo founder can sell here freely (EUR payments, GDPR applies).

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Residential letting / letting agents | RTB tenancy registration, RPZ rent-review notices (nationwide RPZ since 20 Jun 2025, new rules from 1 Mar 2026) | Weak candidate | Real mandatory recurring task, but RTB gives a free calculator and portal; third-party landlord software not verified |
| Payroll bureaus / employers | Auto-enrolment (My Future Fund) live 1 Jan 2026 | Reject / too competitive | Sage, Zellis, Brightsg, Azets, etc. already updating payroll packages |
| All VAT-registered SMEs | B2B e-invoicing mandate (Nov 2028 large corporates, Nov 2029 cross-border SMEs, 2030 EU ViDA) | Too early, too competitive | Basware, Comarch, Banqup, Sage already marketing |
| Waste collectors / hazardous haulers | NWCPO annual return (due 28 Feb), hazardous Waste Transfer Forms via DCC portal (EUR 6/form) | Possible niche | Small operators, fragmented, portal-based; competition unverified |
| Agriculture (cattle) | AIM herd registrations, calf registration | Reject | DAFM/ICBF systems dominate; no new 2026 paperwork found; farmers served by ICBF/Herdwatch-style apps (unverified) |
| Childcare / early learning | Core Funding, chart of accounts, Tusla registration | Poor distribution | Heavy admin burden, but government-set systems and thin margins; vendors unverified |
| Digital waste tracking | Ireland-specific mandate | Not found | Search returned only the UK system (Oct 2026 rollout); no Irish equivalent verified |

## Opportunities

### Opportunity: RPZ and RTB compliance desk for small letting agents

**Industry:**
Property management / residential letting

**Buyer:**
Small letting agencies and property managers handling 20-300 tenancies for private landlords.

**Trigger / Why now:**
All of Ireland became a Rent Pressure Zone from 20 June 2025. New regime from 1 March 2026 allows rent reset at the end of a six-year term with a 2% cap during the term. RTB audits registrations and can sanction up to EUR 15,000. A major landlord was fined EUR 26,000 (Irish Times, 29 May 2026).

**Current workflow:**
1. Agent tracks each tenancy start, last rent-set date and tenancy-term status in a spreadsheet or generic property tool.
2. For each review, uses the RTB RPZ calculator, prints the result and attaches it to a Notice of Rent Review (90 days notice).
3. Updates rent on the RTB registration account manually per tenancy; registers new tenancies within one month (EUR 40, EUR 4,000 fine if late).

**Pain:**
Per-tenancy manual double entry (own system plus RTB) with fines for lateness or wrong rent. Evidence is rules-based; no complaint data found (unverified).

**Existing solutions:**
RTB free calculator and portal; general property-management software (specific Irish vendors not verified); an Irish site (auctioneera.ie) offers RPZ calculator guidance; accountants/solicitors manually.

**The gap:**
A deadline engine that computes the lawful rent and notice date per tenancy (incl. 6-year-term and exemption cases), generates the notice with calculator evidence, and flags registration deadlines. Whether RTB offers any bulk upload or API is unverified (likely none).

**Possible product:**
Compliance calendar and notice generator for tenancy portfolios, importing from CSV.

**MVP:**
CSV import, rent-cap calculation, notice PDF, deadline email reminders. No RTB integration at first.

**Pricing hypothesis:**
EUR 1-2 per tenancy per month, EUR 40-100/month per agency.

**How to find first customers:**
PSRA licensed property services providers register (psr.ie, verify), IPAV and IAVI member directories, Daft.ie agent listings.

**Risks:**
RTB can improve its own tooling; agents may already use incumbent property software with this feature; low per-account revenue; rules change often.

**Kill condition:**
Two or three major Irish property-management products already ship RPZ notice/registration features, or RTB offers bulk upload.

**Score:** 4/10

**Sources:**
- https://rtb.ie/rtb-rent-calculator/
- https://rtb.ie/registration-and-compliance/setting-and-reviewing-rent/how-do-i-make-sure-rent-is-set-correctly-in-an-rpz
- https://www.irishtimes.com/ireland/housing-planning/2026/05/29/major-landlord-fined-26000-for-rent-rule-breaches/
- https://forms-legal.com/blog/rtb-tenancy-registration-ireland-2026
- https://www.mhc.ie/latest/insights/rent-pressure-zones-extension

### Opportunity: Waste transfer and permit-return assistant for small waste hauliers

**Industry:**
Waste management (hazardous and non-hazardous collection)

**Buyer:**
Owner/office manager of a small skip, hazardous or specialist waste collector holding an NWCPO permit.

**Trigger / Why now:**
Not a verified 2026 trigger. Standing obligations: annual NWCPO return by 28 February; hazardous WTFs online via Dublin City Council's National TFS Office. No Irish digital-tracking mandate found.

**Current workflow:**
1. Buy and complete each hazardous WTF in the DCC portal; driver carries signed form.
2. Receiving facility validates online.
3. Re-key tonnages and destinations from job sheets into the NWCPO annual return.

**Pain:**
Duplicate entry and records reconciliation; severity unverified.

**Existing solutions:**
DCC WTMP portal, NWCPO online return, general waste-hauling/fleet software (names unverified).

**The gap:**
Job-ticket data converted into WTFs and the annual return automatically. Portal API availability unverified.

**Possible product:**
Job-sheet-to-WTF and annual-return preparation tool.

**MVP:**
Spreadsheet of jobs in, annual return workbook out (no portal integration).

**Pricing hypothesis:**
EUR 30-80/month.

**How to find first customers:**
NWCPO published list of permit holders (verify availability), Irish Waste Management Association (unverified).

**Risks:**
Small market (low thousands at most; unverified), portal changes, existing waste software.

**Kill condition:**
Hauliers already use vendor software that produces the return, or no portal automation and buyers show no pain in 5 interviews.

**Score:** 3/10

**Sources:**
- https://www.dublincity.ie/residential/environment/national-tfs-office/regulations-shipment-hazardous-waste-within-ireland
- https://www.sdcc.ie/en/services/environment/recycling-and-waste/waste-regulations/waste-permits

## Rejected after competitor research

- Auto-enrolment payroll tooling: Sage, Zellis, Azets and other payroll packages report My Future Fund support built in; bureaus buy from them.
- Cattle movement/herd registration: DAFM AIM and ICBF run the systems; no new paperwork requirement found.
- Digital waste tracking: Irish mandate not found (UK only).

## Attractive problem, poor distribution

- Childcare Core Funding admin (chart of accounts, reporting): providers complain of bureaucracy, but margins are thin, many may close, and the funder dictates processes. Software competitors not researched.

## Too competitive

- B2B e-invoicing readiness (2028-2030): Basware, Comarch, Banqup, Sage and accounting-software vendors already address it. Sources: https://www.matheson.com/insights/mandatory-einvoicing-and-real-time-reporting-coming-to-ireland/ , https://www.comarch.com/trade-and-services/data-management/legal-regulation-changes/ireland-reconfirms-timeline-and-scope-for-2028-b2b-e-invoicing-mandate/
- Pension auto-enrolment: https://www.forvismazars.com/ie/en/insights/news-opinions/irish-pensions-auto-enrolment

## Overall view

Ireland has no strong standalone opportunity found at this depth. Best use is as an add-on or secondary market (shared English/EU rules with the UK and EU products).
