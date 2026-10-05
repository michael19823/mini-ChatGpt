# Plan 05: Australia — payroll-agnostic portable LSL return builder (Xero first, MYOB second)

*Development plan written 2026-10-05. Source: `research/countries/australia.md` (ranked #5 globally, 6.5/10,
current build pick). Verification used 15 WebSearch queries (WebFetch was blocked), so every point below
comes from search snippets or the author's existing knowledge of public developer docs, and is labelled
as such. Nothing here has been checked with a customer yet.*

---

## 1. Verdict up front

**Interview first, then build: a narrow, credible, modest business. It is not a large one.** The gap is
still open in October 2026. Xero still has no portable long service leave (PLSL) report, the feature
request is still active and now asks for SA as well, no PLSL app turned up in the Xero App Store, and no
payroll vendor announced one in 2026. The payroll data needed is available through the Xero Payroll AU
API and MYOB's `sme-payroll` scope. Every scheme accepts a spreadsheet or CSV upload, so no
government certification is needed.

The ceiling is the issue. Community-services, cleaning and security schemes cover roughly 9–11k
employers nationally (estimate), and perhaps 4–5k of them run Xero or MYOB payroll. At about AUD 125–135
per customer per month, that is a business of roughly AUD 1M ARR, not a venture-scale one. Construction
schemes could double it later.

**Three facts decide it:**

1. **The incumbent gap is confirmed.** Xero has not shipped a PLSL report: snippets describe the state
   "as of mid-2026", and the ideas thread is still collecting requests for NSW, Vic and the new SA
   schemes. The only scheme-aware automated builder is still PayCat's, and it only works with PayCat
   Payroll.
2. **The triggers are real and still multiplying.** NSW community services started 1 Jul 2025, with
   2,100+ employers filing in the first portal window and an 80% completion rate. SA community services
   started 1 Oct 2025 (2.2% levy, penalties up to AUD 10,000 per contravention). The NT community
   services Act was due to start by 16 Mar 2026 at the latest (2.05% levy). Vic's Court of Appeal
   widened construction coverage in 2026.
3. **The integration needs no permission.** The data comes from open payroll APIs (Xero is free up to
   5 connections and has paid tiers from about USD 22 a month). Output is the scheme's own upload file,
   which the employer, or their bookkeeper as an authorised portal user, uploads themselves. The real
   cost is per-scheme rules knowledge, not access.

---

## 2. Verification results

| Claim from report | What you found | Source | Status |
|---|---|---|---|
| Xero has no PLSL report; long-running ideas thread | Still no dedicated report "as of mid-2026". The thread is active and now cites SA's two schemes (construction bi-monthly, community services quarterly). "Upwards of 3 hours each quarter" is quoted again | productideas.xero.com thread 47693666 | **Confirmed** |
| MYOB has no PLSL report | No MYOB PLSL feature surfaced in 2026 searches. The only evidence is the community thread from the report | community.myob.com thread 896422 (from report); 2026 search found nothing new | Confirmed (weak; absence of evidence) |
| PayCat Toolbox is the only automated builder; AUD 2/employee/month; PayCat-only | Still PayCat-only. It runs as a Google Sheets toolbox that pre-ticks reportable pay categories per scheme and generates the upload file | paycat.com.au/portable-long-service-leave-toolbox | Confirmed (price not re-checked) |
| No other vendor has added it | No 2026 announcements from Employment Hero, KeyPay, Payroller, Deputy or Astute. No PLSL app found in the Xero App Store (searches only returned leave-calendar apps such as LeaveCal) | WebSearch, 3 queries | Confirmed, with low confidence (search can miss small apps) |
| NSW CSI scheme: 1 Jul 2025, 1.7% levy, ~2,400 employers, Appian portal Apr 2026, 2,100+ employers / 8,200+ returns | All confirmed, with an 80% completion rate. **New:** the levy for FY2025-26 was cut to **1.3%** by the Levy Determinations Order 2026, and goes back to 1.7% from 1 Jul 2026 | itbrief.com.au; Bloomberg Tax; longservice.nsw.gov.au | **Changed** (levy detail) |
| NSW return content | A service return lists every active worker for the period, with **total gross ordinary wages** and start/finish dates. Workers can be added one by one or by **CSV upload** (name, DOB, start date, contact and address). The exact service-return column layout is only visible inside the portal | longservice.nsw.gov.au CSI employer portal guide and FAQ | Confirmed (column layout unverified) |
| SA CSI scheme: 1 Oct 2025, 2.2% levy, first return 21 Jan 2026 | Confirmed. Returns are quarterly, the levy is described as 2.2% on "total wages", registration is through an online portal, and penalties are up to AUD 10,000 per contravention. Upload format not found | HWL Ebsworth; BDO; SA Portable Long Service Leave Act 2024 and Regulations 2025 | Confirmed (format unverified) |
| NT CSI scheme "expected 2025-26 (unverified)" | The Portable Long Service Leave (Community Services Sector) Act 2024 received assent on 11 Jun 2024. It starts on a gazetted date or, by default, **16 Mar 2026**. The levy is **2.05%** | legislation.nt.gov.au; Bloomberg Tax; nt.gov.au | **Changed**: now likely live (operational detail unverified) |
| Vic PLSA spreadsheet upload | Pre-populated spreadsheet with 3 tabs (current workers, new workers, reference lists). Hours go in col L, ordinary pay in col M, termination date in O, termination reason in P and comments in Q. A new portal guide was published in June 2026 | plsa.vic.gov.au upload guide; Guide to quarterly return process (June 2026) | **Confirmed**, with detail |
| Qld (QLeave) spreadsheet upload | Pre-filled spreadsheet. Columns A–G (name, QLeave registration number, gender, DOB) must not be changed, and columns, tabs or rows must not be added. QLeave also runs a contract-cleaning scheme with the same mechanism | qleave.qld.gov.au community services and contract cleaning pages | **Confirmed** |
| ACT upload | Quarterly returns are entered in the portal, or a CSV is downloaded, completed and uploaded | actleave.act.gov.au community quarterly returns | Confirmed |
| Market: "10-20k covered employers nationally incl. construction" | Vic PLSA had 2,540 employers in 2020-21 and "over 3,000" in 2022-23 (290k workers). NSW CSI has about 2,400. Qld, SA, ACT and NT counts were not found | PLSA annual reports 2020-21 and 2022-23; LSC | Partly confirmed; the remainder is an estimate |
| Xero API access to pay-item detail "likely available; unverified" | The Payroll AU API exposes PayRuns, Payslips (earnings lines) and PayItems (earnings rates). Field-level detail comes from the author's knowledge of Xero's AU Payroll API v1.0 docs and was not re-read this pass. A third-party data model (CData) confirms PayRuns, PaySlips and PaySlipEarnings | cdata.com Xero Payroll AU data model; developer.xero.com (not fetched) | Confirmed in substance |
| (new) Xero API commercial model | From 2 Mar 2026 the 15% revenue share was replaced by 5 tiers: Starter (free, ≤5 connections), Core (~USD 22/mo), Plus (~USD 152/mo), Advanced (~USD 895/mo, needed only for Journals/XPM), Enterprise. Uncertified apps are capped at **25 connections**, and App Partner certification removes the cap. Egress costs about AUD 2.40 per extra GB | truto.one; apideck; codat docs; developer.xero.com/pricing (titles only) | New; tier prices from third parties (currency and connection limits per tier unverified) |
| (new) MYOB API access | The MYOB Business API `sme-payroll` scope covers PayrollCategory (Wage/Entitlement/Deduction/…), Timesheet, EmployeePayrollDetails and the **EmployeePayrollAdvice** report (pay history per pay). The same API serves AccountRight, Essentials and MYOB Business | developer.myob.com scope and endpoint pages | Confirmed (no pay-history field check) |

**Net effect:** nothing kills the idea. Two things improve it: NT is now live, and the incumbent gap
held through mid-2026. Two things temper it: the market is smaller than the report's upper bound, and
Xero's new API pricing plus the 25-connection certification gate add cost and a hard step around
customer 25.

---

## 3. Customer and problem

**Buyer:** the finance manager or CEO at a not-for-profit or for-profit community-services provider
(NDIS, disability, youth, family, homelessness, community health) with 10–300 workers, running Xero
Payroll AU (MYOB second). The secondary buyer is the **outsourced bookkeeper or payroll bureau** that
runs payroll for 5–40 such organisations, which is the best channel in the long run.

**User:** the payroll officer or bookkeeper who prepares the quarterly return.

**Job to be done:** *"Each quarter, give each scheme a correct return (the right workers, the right
ordinary wages and hours, and correct starts and terminations) that uploads first time, and tell me the
levy to pay, without me rebuilding the spreadsheet by hand."*

**Current workflow (per scheme, per quarter; times are estimates, anchored on the "3+ hours" forum
quote):**

| Step | What happens | Time (estimate) | Cost at AUD 60/h bookkeeper rate |
|---|---|---|---|
| 1 | Run Payroll Activity Details for the quarter in Xero and export to Excel | 15 min | 15 |
| 2 | Strip non-reportable pay items (overtime, some allowances, reimbursements, leave treatment, which differs by scheme) | 45–75 min | 45–75 |
| 3 | Pivot to totals per worker; for Vic compute hours; for NSW, ordinary wages plus start/finish dates | 30–45 min | 30–45 |
| 4 | Decide eligibility: who is a covered worker, part-industry workers, new starters and terminations; reconcile against the scheme's pre-filled list | 30–60 min | 30–60 |
| 5 | Download the scheme's pre-populated template, paste into fixed columns without breaking the format, upload | 15–30 min | 15–30 |
| 6 | Fix rejected rows (name/DOB mismatches, missing workers), resubmit, pay the levy | 15–45 min | 15–45 |
| **Total** | | **2.5–4.5 h per scheme per quarter** | **AUD 150–270** |

A multi-state employer repeats this for each scheme. A bureau with 15 clients spends roughly 40–60 hours
a quarter on it. An employer running AUD 150–270 a quarter internally (AUD 50–90 a month) is the
in-house anchor. The bigger value is in accuracy and peace of mind (see below), plus the bureau's
capacity.

**Cost of failure:**

- **Under-reporting:** levy back-payments with interest, and worker claims disputes. In SA the
  penalties are up to AUD 10,000 per contravention. NSW and Vic have similar offence provisions in
  their Acts (amounts not re-verified).
- **Over-reporting:** overpaying the levy, which is 1.3–2.2% of ordinary wages. For a 60-worker
  provider with an AUD 4.5M payroll, a 10% mis-scoping error is about AUD 6–10k a year.
- **Missed deadlines:** reminder letters and audits, and the scheme can assess levy itself.
- **Coverage errors:** the Vic Court of Appeal ruling (2026) makes construction coverage depend on the
  work performed, which raises the risk of being wrongly out of scope. This matters for later
  construction expansion.

---

## 4. Product definition

**Core loop (quarterly):**

1. Connect payroll once.
2. Once only, map pay items to each scheme's categories and tag employees to schemes.
3. At quarter end, pull the pay runs.
4. The rules engine computes ordinary wages, hours and service per worker per scheme.
5. The exception queue shows new starters, terminations, missing DOB, workers in more than one scheme,
   unmapped new pay items and large variances.
6. The user resolves exceptions.
7. Download the filled scheme file.
8. Upload it to the scheme portal.
9. Record submission, levy and receipt.
10. An archived evidence pack is kept.

**MVP (must-have):**

- Xero Payroll AU OAuth connection, read-only scopes.
- Pay item mapping wizard with scheme defaults ("ordinary time earnings → reportable; overtime → not
  reportable; allowance type X → per scheme"), editable and versioned.
- Employee-to-scheme tagging, including bulk tagging by Xero employee group or tracking category,
  default on.
- Two schemes: **NSW CSI** and **Vic PLSA** (community services, cleaning and security).
- Vic output: fill the user's uploaded **pre-populated PLSA template** in place (cols L, M, O, P, Q,
  plus new-worker tab). Keeping the user's own template avoids reverse-engineering hidden columns.
- NSW output: a service-return file in the portal's upload layout (to be confirmed with the first
  customer's portal), plus a worker-add CSV for new starters.
- Exception queue and quarter-on-quarter variance report.
- Levy estimate (rate table per scheme and financial year; NSW 1.3% for FY25-26 and 1.7% from FY26-27).
- PDF/CSV evidence pack of the inputs, mapping version, outputs and user sign-off.

**v1 (by about month 7):**

- QLeave (community services and contract cleaning), SA CSI, ACT community, NT CSI (once the format is
  confirmed).
- MYOB Business / AccountRight connection.
- Bureau dashboard: many client organisations, a deadline calendar, status per client and scheme, and
  bulk reminders.
- Deadline emails.
- Xero App Store listing after certification.
- CSV import fallback (Payroll Activity Details export) for any other payroll, such as Employment Hero
  and KeyPay users who dislike their generic report.

**Later:** construction schemes (CoINVEST, QLeave building, LSC BCI, MyLeave WA, SA construction
bi-monthly, NT Build, TasBuild), which need days or hours plus coverage-by-work-performed logic. Also
contract cleaning in NSW, worker self-check exports, and an accountant "coverage review" add-on.

**Explicitly out of scope:**

- submitting into scheme portals for the user (no portal automation or credential storage in the MVP);
- paying levies;
- legal advice on whether an employer or worker is covered (the product flags; it does not decide);
- leave accrual or provision calculations for non-portable LSL (LSLcalc's territory);
- writing anything back to Xero.

**Key screens:**

1. **Connect & discover:** connect to Xero. The app lists pay items, employees and pay calendars, asks
   which schemes the organisation is registered with, and records the scheme employer numbers.
2. **Mapping matrix:** pay items as rows, schemes as columns, each cell showing *reportable / not
   reportable / hours only*, with a default and a "why" tooltip quoting the scheme guidance. Changes are
   versioned.
3. **Quarter run:** pick the scheme and quarter, then see a progress bar, then a per-worker table
   (ordinary wages, hours, start/termination) with an exceptions panel ("3 new starters need DOB and
   address", "Pay item 'Sleepover allowance' unmapped", "Worker X down 62% vs last quarter").
4. **Output & sign-off:** download the scheme file and see the levy estimate. A checkbox reads
   "I have reviewed this return". Then "Mark as submitted" with an optional upload of the portal
   receipt.
5. **Bureau board (v1):** one row per client, one column per scheme, with deadline, status and owner.

---

## 5. Technical design

**Architecture:**

- A single web app: server-rendered pages plus a small amount of interactivity.
- Background job runner to pull Xero pay runs and payslips, normalise them into `PayLine` rows, run the
  rules engine and generate files.
- Postgres for everything. Object storage for templates, outputs and evidence packs.
- Hosting in **AWS Sydney (ap-southeast-2)** or Fly.io Sydney / Render Singapore. Prefer Sydney, since
  buyers (NFPs and government-funded providers) ask about Australian residency.

**Data flow:** Xero API → raw JSON snapshot (immutable, kept for audit) → normalised pay lines →
mapping version applied → per-worker scheme totals → exception checks → file writer → user download →
submission record.

**Stack for a solo developer:**

- Python with Django (or Rails) and Postgres. The ORM, admin and auth come free; the admin doubles as
  the concierge back office.
- `openpyxl` to fill the Vic and Qld templates in place (styles and data validations preserved).
- `xero-python` official SDK; WeasyPrint for PDF evidence packs; Celery or RQ for jobs; Sentry.
- Reasons: openpyxl matters most, because the hard part is spreadsheets, and the Python SDKs for Xero
  are maintained.

**Data model:**

- `Organisation`: tenant, ABN, connected payroll, tenant ID.
- `SchemeRegistration`: organisation, scheme, employer number, frequency.
- `Scheme`: code, rules version, levy rate table, file format version.
- `PayItem`: from payroll, with type and native category.
- `MappingVersion` and `Mapping`: pay item × scheme → treatment.
- `Worker`: payroll employee ID, name, DOB, start/termination date, scheme worker number.
- `WorkerSchemeTag`.
- `PayRunSnapshot`: raw JSON and hash.
- `PayLine`: worker, pay date, pay item, units, amount.
- `ReturnRun`: organisation, scheme, period, status, mapping version, input hash.
- `ReturnLine`: worker, wages, hours, flags.
- `Exception`.
- `OutputFile`.
- `Submission`: who marked it, when, receipt.
- `AuditEvent`.

**Integrations:**

| Integration | Method | Detail | Fallback |
|---|---|---|---|
| Xero Payroll AU | REST API, OAuth 2.0 | Payroll AU API v1.0 (author's knowledge of the docs; re-verify): `GET /Employees` (start/termination date, DOB, gender, address, email); `GET /PayItems` (EarningsRates with EarningsType such as ordinary time / overtime / allowance and AllowanceType); `GET /PayRuns?where=PaymentDate...` and `GET /PayRuns/{id}` (payslip list); `GET /Payslip/{id}` (EarningsLines, LeaveEarningsLines, TimesheetEarningsLines with units and amount); optionally `GET /Timesheets` for hours. Scopes: `payroll.employees.read`, `payroll.payruns.read`, `payroll.payslip.read`, `payroll.settings.read`, `payroll.timesheets.read` (read-only). Volume: about 1 call per payslip, so a 60-worker fortnightly organisation needs about 400 calls a quarter, well within per-tenant limits (Xero's published 60/min and 5,000/day per tenant, from memory) | Upload of the Payroll Activity Details export (xlsx) parsed into the same `PayLine` table |
| MYOB Business / AccountRight (v1) | REST API, `sme-payroll` scope | `PayrollCategory/Wage`, `Contact/EmployeePayrollDetails`, `Report/Payroll/EmployeePayrollAdvice` (pay history), `Payroll/Timesheet` | Upload of the MYOB payroll activity report export |
| Vic PLSA | File (xlsx) | The user downloads the pre-populated template from the portal and uploads it to us. We fill cols L/M/O/P/Q plus the new-worker tab and return it | Generate a clean CSV with the same values and a paste guide |
| NSW LSC CSI | File (CSV per portal) | Service return (gross ordinary wages, start/finish) plus worker-add CSV. Exact columns to be captured from the first customer's portal download | Per-worker on-screen summary for manual entry |
| QLeave CSI / cleaning (v1) | File (xlsx, pre-filled A–G) | Fill only the allowed columns; never alter structure | As above |
| ACT, SA, NT (v1) | CSV / portal (formats unverified) | Capture each from a pilot customer | Manual-entry summary |
| Scheme portals (submission) | Manual by the user | No API is published for any scheme found. LSC's portal runs on Appian, which may expose APIs in future (unverified) | n/a: out of scope |

**Rules engine:**

- Declarative per-scheme YAML/JSON rule packs, versioned by effective date: reportable categories,
  hours versus wages, leave treatment, levy rate, due-date rule, and file layout spec.
- Precedence: an organisation-level mapping override beats the scheme default, which beats the payroll
  native type.
- Validation:
  - every pay item used in the period is mapped;
  - every tagged worker has DOB, start date and scheme worker number (where one is required);
  - terminations in the period have a reason code from the scheme's reference list;
  - hours are 0 or more and below 1,000 a quarter;
  - variance of more than ±40% against the prior quarter is flagged;
  - pre-filled template rows we do not match are flagged as "worker on scheme list but not in payroll";
  - the output file is re-opened and re-parsed after writing (round-trip check).

**Security, privacy and residency:**

- *Privacy Act 1988* (Cth) and the Australian Privacy Principles. Many small businesses are exempt
  below AUD 3M turnover, but we should comply anyway because customers are often government-funded,
  and NDIS providers have contractual privacy duties.
- The *Notifiable Data Breaches* scheme (Part IIIC of the Privacy Act) applies.
- NSW customers may push down *PPIP Act 1998* expectations through funding contracts (estimate).
- Do not pull TFNs or bank details; scopes don't need them.
- Encrypt at rest and in transit. Hold OAuth tokens in a KMS-encrypted column. Enforce MFA.
- Xero App Partner certification adds security checkpoints (data integrity and security, scopes
  minimisation).
- Data is hosted in Australia.
- Retention: 7 years for evidence packs (payroll-record norm under the Fair Work Regulations; NFPs
  will expect it), configurable.

**Audit trail and liability:**

- Every return is reproducible: raw snapshot hash, mapping version, rules-pack version, user sign-off
  and timestamp.
- Terms state that the customer is the lodging party, that we provide calculation tooling and not
  legal or coverage advice, and that liability is capped at 12 months' fees.
- If a return was wrong because of our rule pack, we correct and re-generate it free, help the customer
  lodge an amendment, and log an incident.
- Carry professional indemnity insurance (see §9).

**Localisation:** English (AU spelling), AUD, ABN on the organisation, scheme employer/worker numbers,
Australian financial-year quarters, date format DD/MM/YYYY in the output files (check each template).

**Testing:**

- Golden-file tests per scheme: a synthetic Xero organisation (Xero demo company with payroll AU)
  produces known pay runs, and the expected output files are checked cell by cell.
- Property tests on the mapping engine.
- Every template version is stored. CI round-trips each template: open, fill, save, re-open and check
  the structure is unchanged (sheet names, column count, data validations).
- Pilot acceptance means the scheme portal accepted the file. Record each portal acceptance as a
  regression fixture, with the customer's consent and anonymised.
- Ask LSC, PLSA and QLeave employer services to sanity-check a sample file (they want correct
  lodgements).

---

## 6. Build plan

Week 0 is the week of 12 Oct 2026. Validation (§13) runs weeks 0–3 in parallel with throwaway
prototyping. The next live deadline is the October–December 2026 quarter, with returns due mid-to-late
January 2027 (SA: 21 Jan; others unverified).

| Weeks | Milestone | Dev-weeks |
|---|---|---|
| 0–3 | 12–15 interviews. Collect 3–5 real (anonymised) Payroll Activity exports plus blank scheme templates. Pre-sell 3–5 "January return done for you" pilots at AUD 99/quarter-return | 0.5 (spike: Xero demo organisation and payslip pull) |
| 3–5 | Xero OAuth, pay-run and payslip ingestion, `PayLine` normalisation, CSV-export fallback parser | 2 |
| 5–7 | Mapping matrix and NSW CSI and Vic PLSA rule packs; Vic template filler; NSW CSV writer; exception queue v0 | 2 |
| 7–9 | Evidence pack, sign-off, levy estimate, billing (Paddle), terms and privacy policy. **Concierge:** the founder runs the tool for pilots and sends files | 1.5 |
| 10–14 (Jan 2027) | **First paying customers:** 5 pilots lodge Dec-quarter returns. Fix whatever the portals reject | 1 (fixes) |
| 14–20 | Self-serve onboarding, QLeave and ACT packs, deadline emails, bureau board v0 | 4 |
| 20–26 | MYOB connector, SA and NT packs (format from pilots), apply for Xero App Partner certification once at 3+ active connections | 4 |
| 26–30 (Apr–May 2027) | **v1:** App Store listing, March-quarter returns at scale (20–30 customers) | 2 |

**Effort:** about 7 dev-weeks to the first paying (concierge) customer, about **9–10 calendar weeks**,
landing in January 2027. About 17 more dev-weeks to v1, roughly 24 dev-weeks in total by about week 30.

**Fake or do manually at first:**

- Scheme file formats for SA, NT and ACT: capture them from each pilot's own portal download.
- Exception resolution: the founder does it on a Zoom call.
- Bureau board: a shared Google Sheet first.
- Billing: invoices by Paddle checkout links.
- Xero connection cap: stay under 25 uncertified connections until certification arrives.

---

## 7. Go-to-market

**Ideal first 10 customers:** NSW and Vic NDIS and community-services organisations with 20–150
workers that run Xero Payroll, plus 2–3 bookkeeping bureaus specialising in NFPs. How to reach them:

1. **The Xero ideas thread** (productideas.xero.com, suggestion 47693666). Commenters have public
   profiles (several named users appear in search results). Reply in-thread with a factual note ("we're
   building this; looking for 5 pilot organisations") if the forum's rules allow. Many commenters are
   bookkeepers, the highest-value segment.
2. **NSW LSC CSI business lookup and peak bodies:** NCOSS, MHCC and NADA have hosted LSC scheme
   webinars and toolkits, which is evidence they run member communications on this. Ask for a webinar
   slot or newsletter mention.
3. **Vic:** VCOSS, National Disability Services (NDS) Vic, and the Community Services Industry Alliance
   (Qld, later).
4. **The NDIS Provider Register** (public, searchable by state and registration group): filter by NSW
   and Vic and organisation size, then find the finance manager on LinkedIn.
5. **Bookkeeper networks:** the Institute of Certified Bookkeepers (ICB), the Australian Bookkeepers
   Network (ABN), and Xero partner directory filters for "not-for-profit" specialists.
6. **Scheme employer-education channels:** offer LSC and PLSA a free "how to get ordinary wages out of
   Xero" guide. They want correct, on-time lodgements, and 20% of NSW employers had not completed returns
   at the last count.

**Outreach angles:**

- *Bookkeeper:* "Your NSW CSI and Vic PLSA returns take ~3 hours each per client per quarter. Connect
  Xero once and get the filled scheme file in 10 minutes, with an audit pack. Want us to run your
  January returns as a free trial?"
- *NFP finance manager:* "The levy is 1.3–2.2% of ordinary wages. Most errors come from pay-item
  treatment. We map your Xero pay items to each scheme's rules once, and you sign off a reproducible
  return."
- *Multi-state providers:* "One mapping, five scheme files: NSW, Vic, Qld, SA and ACT."

**Channel partners:**

- NFP-specialist accounting firms (BDO and HWL Ebsworth publish PLSL content; mid-tier firms with NFP
  practices are referral partners, not resellers).
- Xero App Store, after certification.
- Payroll bureaus, which get a white-label evidence pack.
- Later, MYOB's partner network.

**Launch timing:** quarterly return deadlines drive everything.

- Prospect from late November to mid-December 2026 for the January 2027 cycle.
- The first public launch is mid-March 2027, ahead of March-quarter returns due in April.
- Each quarter-end (late Mar, Jun, Sep, Dec) gets a two-week campaign beforehand.
- July is the strongest month: FY-start levy-rate changes, plus annual wage reconciliation.

**Content and SEO (Australian English):**

- "How to do a portable long service leave report in Xero" (the exact long-tail query; the Xero thread
  ranks for it today);
- "Vic PLSA quarterly return: which Xero pay items are ordinary pay";
- "NSW community services service return: gross ordinary wages explained";
- "SA community services PLSL: first-year checklist";
- "NT community services PLSL 2026";
- "MYOB portable long service leave report".

Each guide gets a free downloadable mapping checklist that captures an email address.

---

## 8. Pricing and unit economics

**Tiers (AUD, excluding GST):**

| Tier | Price | For |
|---|---|---|
| Essentials | AUD 2.50 per covered worker per month, minimum AUD 49/month, 1 scheme | Single-state employer |
| Multi-scheme | AUD 2.50 per covered worker per month, minimum AUD 99/month, all schemes, evidence packs | Multi-state employer |
| Bureau | AUD 199/month base including 5 client organisations, then AUD 1.50 per covered worker per month across clients | Bookkeepers and payroll bureaus |
| Concierge pilot | AUD 99 per scheme return (first two quarters) | Validation phase |

Annual prepay at 2 months free fits the quarterly rhythm and NFP budgeting. PayCat (AUD 2 per employee)
is the anchor; the premium is justified because customers don't have to switch payroll.

**Expected ACV:** a median employer has about 45 covered workers, so about AUD 115/month. Blended with
bureaus, the planning figure is **AUD 125–135/month (≈ AUD 1,500–1,600 per year per account)**.

**CAC by channel (estimates):**

| Channel | CAC |
|---|---|
| Xero thread and community | ≈ AUD 50–150 (founder time) |
| Peak-body webinars | ≈ AUD 200–400 |
| Bureau partnerships | ≈ AUD 300–600 per bureau, which brings 5–20 organisations |
| Direct LinkedIn/email outreach to the NDIS register | ≈ AUD 400–800 |
| Paid search on "portable long service leave Xero" | ≈ AUD 300–600 (low volume) |

Blended target: under AUD 400, giving a payback under 4 months.

**Gross margin:** hosting under AUD 200/month at 150 customers; Xero API tier USD 22–152/month;
merchant-of-record fees about 5% plus 50c; support about 1 hour per customer per quarter (founder).
Gross margin is about **85–90%** before founder support time.

**Payment rails for a foreign founder:**

- Use **Paddle** (merchant of record). It handles Australian GST, invoices in AUD and pays out in USD
  or EUR. It also hides the founder's foreign entity from NFP procurement, which still gets a valid tax
  invoice.
- Alternative: Stripe AU through an Australian Pty Ltd, once the volume justifies it.
- Some NFPs want to pay by EFT against an invoice. Paddle supports invoice billing for annual plans
  (confirm), or use Stripe invoicing with an Australian bank account via Wise.

**FX risk:** revenue in AUD, costs mostly in USD (Xero API, SaaS tools). AUD/USD swings of ±10% move the
margin by about 1–2 points. Founder income is exposed if the founder is non-AUD based: convert
quarterly, and price in AUD only.

---

## 9. Company and legal setup

**Entity:**

- Start with the founder's home-country company selling through Paddle.
- Register an ABN only if the founder sets up in Australia.
- If the founder is non-resident and wants an Australian Pty Ltd (for procurement credibility or Xero
  partner status), the Corporations Act requires at least one director ordinarily resident in
  Australia. That needs a nominee director service (about AUD 1.5–3k/year, estimate) or a local
  co-founder.
- Not needed for the MVP.

**Local partner:** a part-time Australian bookkeeper or payroll specialist with NFP clients, as adviser
and pilot channel (paid per return or with revenue share). Strongly recommended for credibility and
rules knowledge.

**GST:**

- Offshore suppliers of digital services to Australian *GST-registered businesses* that quote their ABN
  generally do not charge GST under the reverse-charge rules.
- Sales to non-registered entities count toward the AUD 75k registration threshold (AUD 150k for NFPs
  applies to the customer, not to us).
- Many small NFPs are not GST-registered.
- Paddle as merchant of record removes the issue. Get an Australian tax adviser to check this once.

**Contracts and terms:**

- Click-through SaaS terms under NSW or Victorian law.
- A Data Processing Addendum covering APP 8 cross-border disclosure; hosting stays in Australia anyway.
- An explicit "not legal or coverage advice" clause.
- Customer responsibility for lodgement and sign-off.
- A liability cap.
- An Xero App Partner agreement once certified.

**Professional liability:** professional indemnity plus cyber cover through an Australian broker (BizCover
or similar). Estimate AUD 1.5–3k/year for AUD 1–2M PI. If the founder is offshore, check whether the
policy covers Australian claims.

---

## 10. Financial model (24 months)

**Assumptions:**

- Month 1 is Nov 2026, and the founder takes no salary.
- Customer growth steps up at each return deadline (Jan, Apr, Jul, Oct).
- Pilots pay AUD 99. Planning ARPA is AUD 110–135 as bureaus join.
- Churn: 1.5%/month after month 9 (already netted into the customer counts).
- Costs:
  - month 1: legal and setup AUD 3,000 plus running AUD 900;
  - months 2–5: AUD 1,400 per month (hosting, tools, insurance accrual, Xero API tier, marketing
    AUD 500);
  - months 6–12: AUD 1,800 per month;
  - months 13–24: AUD 2,500 per month (part-time local adviser, more events).
- Merchant-of-record fee: 5% of revenue.
- All figures in AUD.

| Period | Customers (end) | MRR (end) | Costs incl. fees (period) | Net (period) | Cumulative cash |
|---|---|---|---|---|---|
| M1 Nov-26 | 0 | 0 | 3,900 | −3,900 | −3,900 |
| M2 Dec-26 | 0 | 0 | 1,400 | −1,400 | −5,300 |
| M3 Jan-27 | 5 | 495 | 1,425 | −930 | −6,230 |
| M4 Feb-27 | 8 | 880 | 1,444 | −564 | −6,794 |
| M5 Mar-27 | 10 | 1,150 | 1,458 | −308 | −7,102 |
| M6 Apr-27 | 20 | 2,400 | 1,920 | +480 | −6,622 |
| M7 May-27 | 26 | 3,120 | 1,956 | +1,164 | −5,458 |
| M8 Jun-27 | 30 | 3,750 | 1,988 | +1,762 | −3,696 |
| M9 Jul-27 | 42 | 5,250 | 2,063 | +3,187 | −509 |
| M10 Aug-27 | 47 | 5,875 | 2,094 | +3,781 | +3,272 |
| M11 Sep-27 | 51 | 6,375 | 2,119 | +4,256 | +7,528 |
| M12 Oct-27 | 58 | 7,250 | 2,163 | +5,087 | +12,615 |
| Q5 (M13–15) | 75 | 9,750 | 8,787 | +16,953 | +29,568 |
| Q6 (M16–18) | 100 | 13,000 | 9,216 | +25,104 | +54,672 |
| Q7 (M19–21) | 125 | 16,875 | 9,788 | +35,977 | +90,649 |
| Q8 (M22–24) | 150 | 20,250 | 10,295 | +45,595 | +136,244 |

- **Break-even on cash costs:** month 6 (April 2027 return cycle). Cumulative cash turns positive in
  month 10.
- **Founder-salary break-even:** MRR covers costs plus an AUD 9k/month draw (about AUD 11.5k MRR)
  around **month 16–17**.
- **Month-12 MRR:** about **AUD 7.3k** (range AUD 4–10k depending on bureau uptake).
- **Realistic ceiling:**
  - Community services, cleaning and security covered employers: about 9–11k (estimate; Vic 3,000+ and
    NSW about 2,400 confirmed; Qld, SA, ACT and NT estimated).
  - Of these, about 40–50% use Xero or MYOB payroll (estimate), giving a **SAM of about 4–5k
    employers**.
  - At 12–15% share, that is about 500–700 accounts × AUD 130, or **about AUD 65–90k MRR (AUD
    0.8–1.1M ARR)**.
  - Construction schemes could add a similar or larger pool (unverified size), at higher complexity.

---

## 11. Team and founder fit

**Skills:** a full-stack web developer comfortable with spreadsheet generation and OAuth APIs. Payroll
literacy matters more than ML. Australian payroll concepts are needed: ordinary time earnings, award
allowances, STP pay categories, leave loading.

**Language:** English, with Australian terminology.

**Non-local founder:** realistic, since there is no government certification, portal access belongs to
the customer, and Paddle handles billing. Time-zone overlap is the main friction, because pilots need
calls during AEST business hours (UTC+10/11).

**Local help needed:**

1. A payroll or bookkeeping adviser who knows the community-services awards (SCHADS) and at least two
   schemes, about 5–10 hours a month.
2. An Australian tax adviser for a one-off GST and entity check.
3. Optionally, a nominee or local director if a Pty Ltd is needed.

A two-person team with one local bookkeeper-founder is the ideal shape.

---

## 12. Risks and mitigations

| Risk | Type | Likelihood | Mitigation |
|---|---|---|---|
| Xero ships a native PLSL report | Competitive / platform | Medium over 24 months (the request has been open for years; Xero did ship Payday Super quickly when it was mandatory) | Win on multi-scheme exceptions, evidence packs and the bureau workflow, which a generic Xero report won't do. Keep MYOB and CSV paths so we're not Xero-only. Watch the Xero ideas status |
| PayCat or Employment Hero adds Xero/MYOB import to its Toolbox | Competitive | Medium (PayCat already has the rule packs) | Speed and focus on bureaus. Consider PayCat as a partner or acquirer rather than a rival |
| Scheme template or format changes break uploads | Government / operational | High (Vic issued a new guide in June 2026; NSW's portal is new) | Store templates by version, run round-trip CI, check templates in the 2 weeks before each deadline, keep the manual-entry summary fallback |
| Wrong mapping leads to under- or over-paid levy | Liability | Medium | Defaults are conservative and quote scheme guidance. Mandatory user sign-off, an evidence pack, terms disclaiming coverage advice, PI insurance |
| Xero API pricing or certification gate (25 connections; tier cost growth) | Platform | Certain (gate); low (cost) | Start certification once 3+ active; budget Plus tier; minimise egress by pulling only new pay runs |
| Xero AU payroll API changes or versions | Platform | Low–medium (unverified) | Thin adapter layer; CSV fallback |
| Market smaller than hoped; quarterly use leads to low engagement and churn | Market | Medium | Annual prepay, bureau focus, add construction schemes |
| Seasonality: work bunches into 4 two-week windows | Operational | Certain | Pre-quarter check-ins, automation of exceptions, adviser on retainer at deadlines |
| FX / payment: NFPs want EFT and invoices; AUD weakness | FX / payment | Low–medium | Paddle invoices, annual plans, AUD pricing |

---

## 13. Validation plan before writing code

**Interview targets (12–15):**

- 5 bookkeepers or bureaus from the Xero ideas thread and the ICB/ABN directories, serving NFP or NDIS
  clients;
- 4 NSW CSI employers (20–150 workers) found through the NDIS register and NCOSS;
- 3 Vic PLSA employers (community services, cleaning, security);
- 1 SA or Qld community-services provider;
- 1 NFP-specialist accountant (BDO-type mid-tier);
- 1 employer-services contact at LSC or PLSA (informational).

**Questions:**

1. Walk me through last quarter's return, step by step. How long did it take? Who did it?
2. Which payroll do you use, and for how many workers covered by which schemes?
3. What went wrong last time (rejections, mismatches, back-payments, scheme letters)?
4. How do you decide which pay items are ordinary pay? Has a scheme or auditor ever challenged it?
5. Have you tried PayCat, Employment Hero's report, or an accountant? Why not?
6. What do you pay now for this, in staff time or bookkeeper fees per return?
7. If a tool produced the scheme's file from Xero in 10 minutes with an audit trail, what would you pay
   per month? Who signs off the purchase?
8. (Bureaus) How many clients have PLSL obligations? Would you pay per client or a flat fee?

**Pass/fail thresholds:**

- *Pass:*
  - at least 8 of 12 report 1.5 hours or more per scheme-quarter, or at least one rejection or levy
    correction in the past year;
  - at least 6 are on Xero or MYOB payroll;
  - at least 3 bureaus each have 5 or more PLSL clients;
  - median stated willingness to pay is AUD 80/month or more.
- *Fail (kill or pivot):*
  - most say the scheme template takes under 30 minutes;
  - more than half are already on Employment Hero or PayCat and happy;
  - or Xero confirms a PLSL report on its roadmap.

**Pre-sale test:**

- Offer "We do your Dec-2026 quarter return(s) from your Xero data. AUD 99 per scheme return, refunded
  if the portal rejects it", paid upfront through a Paddle link.
- Target: **5 paid pilots by 15 Dec 2026**, including at least 2 bureaus.
- Also collect 3 letters of intent from bureaus at the Bureau tier, conditional on the pilot succeeding.
- If fewer than 3 pilots pay, stop.

---

## 14. Expansion path

- **Adjacent workflows, same customers:**
  - construction PLSL across all states (CoINVEST, QLeave, LSC BCI, MyLeave WA, SA construction
    bi-monthly, NT Build, TasBuild);
  - NSW contract cleaning;
  - workers' compensation wage declarations (annual, state insurers: icare, WorkSafe Vic, WorkCover Qld),
    built on the same mapping-of-pay-items engine;
  - payroll tax grouping and monthly returns per state;
  - NDIS worker-screening reconciliations.
  The reusable core is "payroll pay items → statutory wage definitions → state-specific file".
- **Other countries with the same pattern:**
  - **New Zealand** (Xero home market): ACC wage reporting and KiwiSaver edge cases (unverified fit).
  - **Canada:** Quebec construction CCQ monthly reports and provincial WCB payroll declarations.
  - **US:** certified payroll is too competitive (per the brief), but union fringe-benefit fund
    remittance reports are similar.
  - **The Netherlands and Belgium:** sector pension funds and *bouw* funds.
  Each needs its own diligence.

---

## 15. Reassessment scorecard

The country report gave only an overall 6.5, with no per-criterion scores, so the "Original" column
shows that overall score for reference.

| # | Criterion | Original | New | Reason |
|---|---|---|---|---|
| 1 | Pain | 6.5 (overall) | 6 | 2.5–4.5 hours a quarter per scheme plus levy-accuracy risk: real but not severe for single-scheme employers |
| 2 | Frequency | — | 6 | Quarterly per scheme (bi-monthly for SA construction); not monthly |
| 3 | Mandatory nature | — | 9 | Statutory returns with levy and penalties (SA up to AUD 10k per contravention) |
| 4 | Fragmentation | — | 8 | 5–6 community-services schemes plus cleaning, security and construction, each with its own template and rules |
| 5 | Existing competition | — | 7 | Only PayCat (own-payroll only) and generic Employment Hero; nothing new in 2026 |
| 6 | Incumbent gap | — | 8 | Xero and MYOB do 90% (pay data) but stop before scheme mapping; confirmed as of mid-2026 |
| 7 | Buyer accessibility | — | 7 | NDIS register, peak bodies, a public Xero thread, bookkeeper networks |
| 8 | Willingness to pay | — | 6 | PayCat anchors AUD 2 per employee; NFP budgets are tight; per-account value is modest |
| 9 | MVP simplicity | — | 8 | Read-only API plus spreadsheet filling; about 7 dev-weeks to the first paid return |
| 10 | Distribution | — | 7 | Bureaus and the Xero App Store multiply reach, and the scheme deadlines create urgency |

**New overall: 6.5/10 (unchanged).** Verification held up the gap and added NT, while confirming that
the ceiling is about AUD 1M ARR and adding the Xero certification and pricing gate. The pluses and
minuses cancel out.

---

## Sources

- Xero ideas thread: https://productideas.xero.com/forums/967118-payroll-expenses/suggestions/47693666-au-payroll-add-portable-long-service-leave-repor
- PayCat PLSL Toolbox: https://www.paycat.com.au/portable-long-service-leave-toolbox
- NSW portal launch / stats: https://itbrief.com.au/story/new-south-wales-launches-portal-for-portable-leave ; https://appian.com/about/explore/press-releases/2026/nsw-community-services-workers-now-accessing-long-service-leave-across-multiple-employers-on-appian
- NSW levy change: https://news.bloombergtax.com/payroll/new-south-wales-lowers-community-services-long-service-leave-levy
- NSW CSI employer portal guide / FAQ: https://www.longservice.nsw.gov.au/csi/employers/employer-portal-guide ; https://www.longservice.nsw.gov.au/csi/resources/employer-frequently-asked-questions ; https://www.nsw.gov.au/employment/rights-responsibilities/portable-long-service/csi-long-service-leave-scheme/managing-employer-service-returns
- Vic PLSA upload: https://www.plsa.vic.gov.au/how-to-upload-quarterly-return-spreadsheet ; https://www.plsa.vic.gov.au/sites/default/files/2026-06/Guide-to-quarterly-return-process-via-the-portal_June-2026.pdf ; https://www.plsa.vic.gov.au/employer-information/quarterly-returns/hours-and-ordinary-pay
- Vic PLSA employer counts: https://www.plsa.vic.gov.au/portable-long-service-authority-annual-report-2020-21/overview ; https://www.plsa.vic.gov.au/2023-24-annual-report-portable-long-service-authority
- QLeave: https://www.qleave.qld.gov.au/community-services/employers/employer-returns/steps-to-submit-your-employer-return-via-spreadsheet ; https://www.qleave.qld.gov.au/contract-cleaning/employers/employer-returns/steps-to-submit-your-employer-return-via-spreadsheet
- ACT: https://actleave.act.gov.au/community/employers/quarterly-returns/
- SA: https://hwlebsworth.com.au/south-australia-introduces-portable-long-service-leave-for-the-community-services-sector/ ; https://www.bdo.com.au/en-au/insights/not-for-profit/portable-long-service-leave-for-community-sector-services-extension-into-sa-and-nsw ; https://www.legislation.sa.gov.au/_legislation-documents/lz/c/a/portable-long-service-leave-act-2024/current/2024.43.auth.pdf
- NT: https://nt.gov.au/employ/for-employees-in-nt/holidays-and-leave/portable-long-service-leave-scheme ; https://news.bloombergtax.com/payroll/northern-territory-introduces-community-long-service-leave ; https://legislation.nt.gov.au/api/sitecore/Bill/AWord?id=19324
- Xero API data model: https://cdn.cdata.com/help/DXN/ado/pg_payrollausdatamodel.htm
- Xero API pricing / certification: https://developer.xero.com/pricing ; https://truto.one/blog/xero-api-pricing-changes-2026-costs-tiers-and-how-to-minimize-egress/ ; https://apideck.com/blog/xero-api-pricing-and-the-app-partner-program ; https://docs.codat.io/integrations/accounting/xero/partner-certification/scopes
- MYOB API: https://developer.myob.com/api/myob-business-api/api-overview/scopes/sme-payroll/ ; https://developer.myob.com/api/myob-business-api/v2/contact/employee-payroll-details ; https://developer.myob.com/api/myob-business-api/v2/payroll/timesheet
- Vic construction coverage ruling (from report): https://www.bakermckenzie.com/en/insight/publications/2026/09/australia-court-decision-broadens-application-of-portable-lsl
