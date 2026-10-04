# Australia

Researched 2026-10-04. About 11 searches. WebFetch was blocked, so findings come from search snippets only. Anything not seen in a snippet is marked unverified. Australia is open and accessible: no sanctions, normal payment rails, English-language, and government APIs go through registered DSPs (ATO/NDIA/ABF), so a small vendor can register.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Construction / contract labour | Portable long service leave (Vic, Qld levy, NSW/SA/ACT/WA/NT variants) | Candidate | Scope widened by Vic Court of Appeal (May 2026); multi-scheme fragmentation; payroll tools generic |
| Waste transport (hazardous / liquid) | NSW IWTS, Vic Waste Tracker, Qld IWTS joining | Weak candidate | Mandatory and fragmented, but government portals and incumbent waste-ERP are unverified; the gap is unproven |
| Payroll / small employers | Payday Super from 1 July 2026, SBSCH closure | Rejected | Xero, MYOB, QuickBooks, Employment Hero, KeyPay and others all shipped it |
| Disability care (NDIS) | Bulk claims, PRODA sunset 30 Sep 2026, new registration rules from 1 July 2026 | Too competitive | ShiftCare, CareMaster and many more already exist |
| Fire safety contractors | NSW AFSS, AS1851 servicing requirement from 13 Feb 2026, Vic AESMR | Too competitive | FieldInsight, SafetyCulture and other field-service tools target it directly |
| Agriculture (sheep/goat eID) | NSW eID phases to 1 Jan 2027, NLIS uploads | Poor distribution | Hardware-heavy (readers/tags), saleyard and processor systems incumbent, buyers fragmented |
| Customs brokers / freight | ICS and the CRST consultation (submissions closed mid-2026) | Rejected | Mature broker software ecosystem; the ICS replacement is years away |
| Aged care | New Aged Care Act from 1 Nov 2025: ACFR by 31 Oct, quarterly financial reports, care minutes | Not pursued | Heavy enterprise and consultant market; little solo-founder fit; competitor research not done |
| Cyber / privacy | Ransomware payment reporting; Privacy Act small-business exemption removed 1 July 2026 | Rejected | Generic compliance, consultant-driven, not a recurring structured workflow |
| E-invoicing | Peppol PINT A-NZ | Rejected | B2B not mandatory; government-side only; accounting software covers it |

## Opportunities

### Opportunity: Portable Long Service Leave multi-scheme compliance (construction, cleaning, security)

**Industry:**
Construction subcontractors, plus other industries covered by portable long service leave (PLSL) schemes (contract cleaning and security, by state).

**Buyer:**
Bookkeeper or office manager, or payroll bureau, at a small-to-mid contractor (5-100 workers) working across state lines. Also construction-focused bookkeepers and accountants.

**Trigger / Why now:**
In May 2026 the Victorian Court of Appeal confirmed the broad scope of the Vic construction PLSL scheme. Liability depends mainly on the nature of the work performed, not the employer's primary business, so more employers are caught (Baker McKenzie, Sept 2026). Qld charges a project levy of 0.575% (0.35% portable LSL) on projects of $150k or more, payable before the development permit issues. Vic uses periodic employer contributions on reported wages, so cross-border builders pay both ways.

**Current workflow:**
1. Work out which workers and which jobs fall into which state's scheme (job-by-job classification).
2. Qld: calculate and pay the levy per project before the permit.
3. Vic and others: report wages and contributions periodically via each scheme's portal or form.
4. Reconcile against payroll and back-pay when classification is disputed.

**Pain:**
Classification risk is now higher and back-payment liability is real. Scheme rules differ by state. Evidence is real but I did not see complaint or time-cost data (unverified).

**Existing solutions:**
Scheme portals themselves (LeavePlus, Qld's scheme and others, unverified); payroll packages with levy fields (unverified); the Plexa levy calculator (a calculator, not a reporting workflow); consultants and accountants; calculators like FairWorkMate and ScaleSuite (informational).

**The gap:**
No evidence found of a tool that classifies workers and jobs by scheme and then prepares per-state submissions from payroll exports. Not confirmed absent.

**Possible product:**
Upload payroll and timesheet exports, tag jobs with state and work type, get a per-scheme contribution and levy report and a deadline calendar, with an audit trail for classification decisions.

**MVP:**
Vic and Qld only. CSV import from Xero/MYOB/KeyPay, a rules engine, and exportable report packs.

**Pricing hypothesis:**
AUD 49-149/month per employer. Bureau tier of AUD 299+/month.

**How to find first customers:**
QBCC and Vic VBA licence directories, plus construction accountant networks (unverified as listings).

**Risks:**
Scheme rules are legal grey zones, so liability is a concern. Payroll vendors could add a module. Market size is unknown. A solo founder cannot submit via the portals unless they have an API (unverified).

**Kill condition:**
The schemes already provide free bulk upload and payroll integrations that cover Xero and MYOB. Or interviews show bookkeepers treat this as a few minutes per quarter.

**Score:** 5/10

**Sources:**
- https://www.bakermckenzie.com/en/insight/publications/2026/09/australia-court-decision-broadens-application-of-portable-lsl
- https://thegoodbuilder.com.au/portable-long-service-leave-is-funded-two-different-ways-across-australia-builders-working-across-borders-pay-both/
- https://www.legislation.qld.gov.au/view/whole/pdf/inforce/current/sl-2026-0095
- https://leaveplus.com.au/leaveplus-loop-edition-1-2026/

### Opportunity: Multi-state hazardous and liquid waste tracking router

**Industry:**
Waste transport (liquid, grease and hazardous).

**Buyer:**
Dispatch or compliance coordinator at a small transporter or receiver operating across NSW, Vic and Qld.

**Trigger / Why now:**
NSW IWTS replaced the Online Waste Tracking, WasteLocate tyres and asbestos systems (2023-24). Qld is co-delivering IWTS with the NSW EPA. Vic EPA runs Waste Tracker and has made snap inspections of transporters. Digital certificates are replacing paper.

**Current workflow:**
1. Collect a job in the field.
2. Re-key consignment details into each state's tracking system.
3. Reconcile with customer dockets and invoices.
4. Fix exceptions (rejected loads, mismatched receivers).

**Pain:**
Fragmentation across states and double entry is plausible; no complaint evidence seen (unverified).

**Existing solutions:**
The state EPA portals (free); waste-industry ERP and dispatch software (unverified names); consultants.

**The gap:**
A single job record that pushes to multiple state systems. Whether the state systems offer APIs or bulk upload to third parties was not verified, which makes it risky.

**Possible product:**
Job record to multi-state tracking submission and exception queue.

**MVP:**
Build around NSW IWTS bulk upload, only if it exists (unverified).

**Pricing hypothesis:**
AUD 99-299/month per depot.

**How to find first customers:**
EPA licence and transporter registers (unverified), Waste Management Association of Australia members.

**Risks:**
No public API, and the market is small.

**Kill condition:**
No third-party submission interface exists, or dispatch software already integrates.

**Score:** 3/10

**Sources:**
- https://www.epa.nsw.gov.au/your-environment/waste/integrated-waste-tracking-solution
- https://www.epa.vic.gov.au/snap-epa-inspections-put-waste-transporters-notice
- https://www.desi.qld.gov.au/our-department/news-media/mediareleases/2023/joint-approach-to-cut-down-paper-waste-certificates

## Rejected after competitor research

- Payday Super tooling: Xero, MYOB, QuickBooks, Reckon, KeyPay, Employment Hero and Sage confirmed releases by Q2 2026; the SBSCH replacement is already served by clearing houses.
- Fire AFSS / essential safety measures reporting: FieldInsight, SafetyCulture and similar field-service tools already target it.
- NDIS claims and compliance: ShiftCare, CareMaster and others sell this today.
- Customs broker tooling: a mature software ecosystem exists (FTA/APSA submission says so).
- E-invoicing and Privacy Act compliance: generic; no mandatory recurring structured filing for small business.

## Attractive problem, poor distribution

- Sheep and goat eID (NSW full mandate 1 Jan 2027): real deadline, but it is hardware-led and fragmented across producers, saleyards and processors.
- Aged care financial reporting (ACFR due 31 Oct, new Act): sells to larger providers via consultants.

## Too competitive

- NDIS provider management, fire safety inspection, Payday Super payroll, customs brokerage software.

## Honest summary

Australia is a mature, software-saturated market, and none of the screened ideas is strong. The only decent lead is portable LSL, which needs interviews. Further screening of Australian niches (food safety, pesticide, vet, funeral) was not done due to search budget.
