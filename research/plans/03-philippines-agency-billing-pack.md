# Plan 03: Philippines per-principal statutory billing pack for security, janitorial and manpower contractors

**Global rank:** #3 (report score 7.0) · **Plan date:** 2026-10-05 · **Source:** `research/countries/philippines.md`
**Verification budget used:** 15 web searches, snippets only (WebFetch is blocked). Anything not traced to a cited source is marked *unverified* or *estimate*.

---

## 1. Verdict up front

**Interview first. Don't build yet. New score: 6.0, down from 7.0.**

The problem is real, recurring and tied to cash flow. Government bid documents issued in 2026 still say monthly billing won't be paid without proof of remittance stamped by SSS, PhilHealth and Pag-IBIG. No product I found builds the per-principal pack. The idea is still weaker than the report suggested, for three reasons:

1. **There is no fresh trigger.** DO 174-17 has not been amended (no 2026 amendment found), and the contract clause has been standard for years. Agencies have already absorbed this work with clerks and Excel, so we are selling against a habit, not a deadline.
2. **The market is modest, and the only count is old.** DOLE reported 4,717 contractors with valid registration in March 2019, 3,271 of them under DO 174. I found no current count and no count of licensed security agencies. Security agencies may be regulated under a separate DOLE order (*unverified*), so the two groups may not overlap.
3. **Integration is easy, but so is substitution.** There are no government APIs. The data comes from files that agencies already download: the SSS e-Collection List, PhilHealth EPRS remittance reports, and Pag-IBIG remittance schedules. That makes a file-in, PDF-out MVP feasible in 6–8 developer-weeks with no certification. The same thing also means any payroll vendor serving agencies (Parfait, NBS, AanyaHR) could add a "per-cost-centre evidence export" as a feature.

The idea earns a build only if interviews show three things: agencies lose real days of collection time per month, principals reject packs often, and owners will pay at least ₱5,000 a month.

---

## 2. Verification results

| Claim from report | What I found | Source | Status |
|---|---|---|---|
| Government janitorial/security contracts make monthly payment conditional on remittance proof | Still standard in 2026. DSWD FO IV-B's Supplemental Bid Bulletin (Jan 2026, ITB DSWD4B-2026-006) demands PhilHealth/Pag-IBIG/SSS remittances and clearances for CY2024–2025. Contract terms require "receipts and prescribed reports stamped by SSS, PhilHealth and Pag-IBIG" as proof of remittance by the 25th calendar day after the reference month. DBM RO8's FY2026 security and janitorial bid supplement carries similar terms. | [DSWD FO4B SBB Jan 2026](https://fo4b.dswd.gov.ph/wp-content/uploads/2026/01/SUPPLEMENTAL-BID-BULLETIN-NO.1-Janitorial-Services.pdf); [DBM RO8 FY2026](https://www.dbm.gov.ph/wp-content/uploads/Bids/Supplement/Supplement2025/RO8/Bid-Supplement-Delivery-of-FY-2026-Security-and-Janitorial-Services.pdf); [PSA bid bulletin](https://procurement.psa.gov.ph/sites/default/files/BID%20BULLETIN%20NO.%201%20-%20JANITORIAL%20SERVICES.pdf) | **Confirmed.** It also adds a hard monthly clock: the 25th of the following month. |
| A certified payroll signed by each worker is required | Seen in report snippets (PSA, PhilGuarantee). Not re-confirmed in 2026 snippets. RA 8792 makes e-signatures legally valid, and bank-credit advisories count as substantial proof of wage payment. Whether a given principal accepts an e-signature is unknown. | [RA 8792 explainer](https://batasnatin.com/laws/e-commerce-act-ra-8792-electronic-contracts-and-digital-signatures); [NDV Law on e-payroll proof](https://ndvlaw.com/proof-of-payment-of-wages-to-employees-done-through-electronic-payroll-or-bank-credit/) | **Partly confirmed.** E-signature acceptance by principals is **unverified**. |
| DO 174 contractors file a semi-annual report (contracts, workers per contract, SSS/Pag-IBIG/PhilHealth/ECC/BIR proof, NLRC/DOLE case list) | Confirmed: submitted in triplicate on a prescribed form to the DOLE Regional Office. | [laborlaw.ph](https://laborlaw.ph/do-174-semi-annual-reports/) | **Confirmed** |
| Any 2026 change to DO 174 | None found. DO 174-17 (March 2017) remains the framework. | [laborlaw.ph](https://laborlaw.ph/do-174-semi-annual-reports/); [batasnatin DO 174-17](https://batasnatin.com/doctrine/hr-dole-do-174-17-contracting-subcontracting-2017) | **Confirmed: there is no new trigger** |
| DO 174 registration: renewal needs updated proofs | Registration requires ₱5M paid-up capital and a ₱100,000 fee. Certificate validity is cited as **2 years** (Triple i/Emerhub). | [Triple i](https://www.tripleiconsulting.com/dole-174-compliance-guide-key-rules-every-philippine-business-must-know/); [Emerhub](https://emerhub.com/glossaries/dole-department-order-no-174-d-o-174/) | **Confirmed.** The ₱5M capital floor means buyers are real companies, not micro-firms. |
| RA 12009 (New Government Procurement Act) changes procurement | Signed 20 July 2024. IRR approved by GPPB Resolution 02-2025 on 4 Feb 2025. DOLE's standard administrative fee for service agreements is at least 10% of contract cost. I found no new payment-documentation rule for service contracts. | [GPPB Res. 02-2025 / IRR](https://www.dbm.gov.ph/wp-content/uploads/Issuances/2025/GPPB-Resolution/IRR-RA-12009-Resolution-No-02-2025.pdf); [batasnatin IRR](https://batasnatin.com/laws/irr-of-ra-12009-8211-1st-edition) | **Confirmed in force.** No added trigger found. |
| Market size: number of obliged contractors | 4,717 contractors with valid registration in March 2019, 3,271 of them under DO 174. Central Visayas had 243 (April 2019). No current figure found. | [Inquirer 2019](https://newsinfo.inquirer.net/890588/dole-45000-employees-regularized-through-do-174) | **Changed:** the data is old. Treat it as an order of magnitude only. |
| PNP-SOSIA licensed agency lists can be used for prospecting | No total count of licensed security agencies found. RA 11917 caps any one agency at 2,000 security professionals. Government security bids require PADPAO membership in good standing plus a PNP-SOSIA LTO held for at least 5 years. | [DFA SBB Security 2025](https://dfa.gov.ph/images/BAC/2024/PB-GS-22-2024/Signed_Supplemental_Bid_Bulletin_No._1_Security_Services_2025-complete_set.pdf); [jur.ph RA 11917](https://jur.ph/law/summary/the-private-security-services-industry-act) | **Changed.** PADPAO is a de facto required association for government work, which helps distribution. Agency count is **unverified**. |
| Integration: remittance data obtainable | SSS: employers download the electronic Contribution Collection List (e-CL) from My.SSS, edit offline, upload, and get a PRN per coverage period. PhilHealth: EPRS is mandatory for employers with more than 10 employees and generates the employee premium list (PEPRL) and Statement of Premium Account. Pag-IBIG: eSRS covers employers with 30 or fewer employees; larger employers use other channels (*unverified* format). **No public API for any of the three.** | [Sprout SSS portal guide](https://sprout.ph/articles/sss-portal-guide-for-members-and-employers/); [Filipiknow PRN](https://filipiknow.net/how-to-get-prn-number/); [PhilHealth Circ. 25-2012](https://www.philhealth.gov.ph/circulars/2012/circ25_2012.pdf); [Pag-IBIG eSRS FAQ](https://www.pagibigfund.gov.ph/FAQ_ESRS.html) | **Confirmed: file-based.** Exact file layouts are **unverified**; collect samples in interviews. |
| No competitor produces per-principal packs | **Generic PH payroll:** Parfait (explicitly targets "employment agencies", supports divisions, branches and cost centres), NBS Payroll, AanyaHR, PayrollHero, plus Sprout, Juan, MiHCM and others. **Guard-management suites:** Guardhouse (company located in the Philippines but marketed to AU/NZ/UK/US), EasyGuarding, SecurityTime, GuardsPro and WorkWave/TEAM do scheduling, attendance, invoicing and payroll export. None advertises statutory remittance evidence packs per client. | [Parfait](https://www.parfait.com.ph/); [NBS](https://payrollsolutions.ph/); [AanyaHR](https://www.aanyahr.com/copy-of-payroll-management-system); [PayrollHero](https://payrollhero.com/philippine_payroll); [Guardhouse Capterra](https://capterra.com/p/181579/Guardhouse/); [EasyGuarding G2](https://www.g2.com/products/easyguarding/reviews) | **Confirmed as a gap, with caveats.** Parfait and Guardhouse are the closest threats. Small custom local "agency systems" probably exist but are not searchable (**unverified**). |
| Pricing ₱3–10k/month | No comparable price found. Guardhouse quotes on request. | [Capterra](https://capterra.com/p/181579/Guardhouse/) | **Unverified** |
| Selling SaaS into PH from abroad | RA 12023 (signed 2 Oct 2024; RR 3-2025) imposes 12% VAT on digital services. For **B2B**, the Philippine buyer withholds and remits the VAT. Non-resident registration applies above ₱3M for B2C. In effect since June 2025. | [PwC PH](https://www.pwc.com/ph/en/tax/tax-publications/taxwise-or-otherwise/2025/soon-taking-effect-the-12-vat-on-digital-services.html); [Fonoa](https://www.fonoa.com/resources/blog/philippines-introduces-vat-on-nonresident-digital-service-providers); [Forvis Mazars RR 3-2025](https://forvismazars.com/ph/en/insights/tax-alerts/bir-rr-03-2025) | **Confirmed** |

---

## 3. Customer and problem

**Buyer:** The owner or general manager of a DOLE-registered contractor (janitorial, manpower or general services) or a PNP-SOSIA-licensed security agency. The best targets have 100–1,500 deployed workers across 5–60 principals, with government agencies or GOCCs among them.

**User:** The billing/collections clerk and the payroll supervisor. Mid-size agencies often have 1–3 people whose job is effectively "billing documentation".

**Job to be done:** "Every month, for every client, prove that every worker I billed for was paid and covered by SSS, PhilHealth and Pag-IBIG/ECC, so the client releases payment on the first submission."

**Current workflow** (all times are *estimates* to validate in interviews; mid-size agency with 300 workers and 20 principals):

| # | Step | Who | Time per month | Cost (₱18–25k/month clerk) |
|---|---|---|---|---|
| 1 | Run payroll (Excel or payroll tool), semi-monthly | Payroll | already done | — |
| 2 | Generate and pay SSS e-CL/PRN, PhilHealth EPRS, Pag-IBIG schedule; download receipts and lists | Payroll | 0.5–1 day | — |
| 3 | For each principal: filter workers deployed there (roster in Excel) | Billing clerk | 15–30 min × 20 = 5–10 h | |
| 4 | Find those workers' lines in each agency-wide list (three lists), highlight or extract, and photocopy the stamped receipt | Billing clerk | 30–60 min × 20 = 10–20 h | |
| 5 | Print the per-site payroll, collect wet signatures from guards or janitors at the post, scan | Supervisors and clerk | 1–2 h × 20, plus travel | |
| 6 | Attach payslips, the latest no-delinquency certifications, DTR/attendance and the billing statement; compile PDF or paper | Billing clerk | 30 min × 20 = 10 h | |
| 7 | Submit; respond to principal's compliance checks; fix rejects (missing worker, name mismatch, replacement guard mid-month) | Clerk and manager | 5–15 h | |
| 8 | Twice a year: rebuild everything per contract for the DO 174 semi-annual report | Manager | 2–4 days per semester | |

**Total (estimate):** 40–80 staff-hours a month, which is roughly 0.3–0.5 FTE, or about ₱8–12k a month in clerk salary. That cost alone sets a soft price ceiling near ₱5–10k a month.

**Cost of failure:**
- **Delayed collection.** Contracts state the agency is not entitled to payment until the documents are complete. One public example: the PCW awarded a one-year janitorial contract worth ₱2.23M for 2026 ([PCW](https://pcw.gov.ph/summary-of-awarded-bids-and-contracts-cy-2026/)), about ₱186k a month. A month's delay on 10 such contracts ties up about ₱1.9M of working capital, while the agency must still pay wages semi-monthly.
- **Thin margins.** The DOLE-mandated administrative fee is at least 10%. A one-month delay can wipe out the profit on that contract for the period (*estimate*).
- **Disqualification.** Remittance gaps show up in post-qualification for the next bid and in DO 174 renewal. They can also lead to solidary liability findings against the principal, which makes principals stricter.

---

## 4. Product definition

**Working name:** *Pakete* (Filipino for "package"; check for trademark conflicts).

**Core loop (monthly):**
1. The clerk uploads the payroll register (Excel), the deployment roster (worker ↔ principal ↔ post) and the month's statutory files and receipts (SSS e-CL plus PRN receipt, PhilHealth PEPRL or RF-1 plus SPA/receipt, Pag-IBIG MCRF or schedule plus receipt).
2. The system matches each deployed worker by SSS number, PhilHealth PIN and Pag-IBIG MID, with fuzzy name matching as a fallback, and flags every exception: missing from a list, wrong amount, a replacement worker not on the roster, an expired clearance.
3. The clerk resolves the exceptions.
4. The system generates one pack per principal:
   - a cover checklist following that principal's required document order;
   - the worker roster;
   - extracted remittance lines plus the stamped agency-level receipts;
   - payslips;
   - a payroll acknowledgement sheet;
   - the attached clearance certificates.
5. The billing status board tracks each pack: Submitted → Accepted / Returned (reason) → Paid.

**MVP (must-have):**
- Excel/CSV import with a column-mapping wizard for payroll and roster.
- Parsers for the three agencies' common exports (Excel/CSV first; PDF tables second) plus manual line entry as a fallback.
- A worker-matching engine and an exceptions list.
- Per-principal PDF pack with a configurable checklist template per principal.
- A certificate vault (SSS, PhilHealth and Pag-IBIG clearances, DO 174 certificate, PNP-SOSIA LTO, mayor's permit) with expiry alerts, auto-attached to packs.
- A billing status board with ageing in days and pesos.

**v1:**
- A mobile payslip-acknowledgement page with SMS link, OTP and typed-name e-signature under RA 8792, plus a timestamp. It produces a printable "signed payroll" sheet. Wet-sign scan upload stays as a fallback.
- A DO 174 semi-annual report generator: contracts in the period, workers per contract, remittance proofs.
- Mid-month replacement and relief worker handling (pro-rated lines).
- Principal-specific templates library (DSWD, DBM, PSA, LGU formats).
- Team roles: clerk, approver.

**Later:**
- A read-only principal portal where the client's compliance officer checks packs online.
- Bid post-qualification pack (12–36 months of remittance history per worker).
- Payroll-vendor integrations (Parfait, Sprout export formats).
- A 13th-month and final-pay evidence pack.
- Other countries (section 14).

**Out of scope:**
- Running payroll.
- Paying contributions.
- Logging in to SSS, PhilHealth or Pag-IBIG portals on the client's behalf (no credential storage in the MVP).
- Scheduling, guard tracking and GPS (Guardhouse and similar own that).
- Submitting anything to DOLE electronically.
- Legal advice.

**Key screens and flows:**
1. **Month setup:** pick the period and drag in the files. The parsers show detected type and row counts. The mapping wizard runs on first use only.
2. **Exceptions queue:** a list grouped by principal ("Post: DSWD Calamba – 2 of 14 workers missing in PhilHealth PEPRL"). Each row offers fix actions: map to a different ID, mark as paid separately and attach an OR, exclude with a reason.
3. **Pack builder / preview:** a per-principal checklist with ticks. Missing items block the "Generate" button unless overridden with a reason. One-click export of a merged PDF, or ZIP plus PDF.
4. **Billing board:** a kanban-style board per principal per month (Draft / Submitted / Returned / Accepted / Paid), with amounts and days outstanding. It feeds the owner's cash-flow view.
5. **Certificate vault:** each certificate with its expiry, the principals that require it, and auto-renewal reminders 30 days ahead.

---

## 5. Technical design

**Architecture:**
- A single web app plus a background job worker.
- Uploads go to object storage.
- Parse jobs normalise rows into Postgres. The matching engine writes exceptions.
- A pack generator renders HTML to PDF and merges the scanned or receipt PDFs (pdf-lib or qpdf).
- An SMS gateway handles e-acknowledgements.

**Stack (solo developer):**
- **Rails 8 or Django 5** (pick whichever you know) with Postgres. Server-rendered pages with htmx or Hotwire, so there is no SPA to maintain.
- Background jobs: Sidekiq or Solid Queue for Rails; Celery or RQ for Django.
- Parsing: Python libraries (pandas/openpyxl, pdfplumber/camelot) are the strongest reason to choose **Django**.
- PDF output: WeasyPrint for rendering, pypdf for merging.

**Hosting:**
- Use a managed provider with a Singapore region (AWS ap-southeast-1, DigitalOcean SGP or Render Singapore). This keeps latency low and keeps the legal position simple: the Philippines has no data-localisation rule (see Security).
- Expected cost is about $60–150 a month at under 100 customers.

**Data model (main entities):**
- `Agency` (tenant) with users and roles.
- `Principal` with its checklist template, billing cycle and contacts.
- `Contract`: principal, period, value, headcount; the DO 174 report source.
- `Post`/`Site`.
- `Worker`: name, SSS number, PhilHealth PIN, Pag-IBIG MID, TIN, status.
- `Deployment`: worker ↔ post with date range.
- `Period` (month).
- `PayrollLine`.
- `RemittanceFile` (agency, type, period, source file, receipt) and its `RemittanceLine`s.
- `Match` and `Exception`.
- `Certificate`: type, number, issuer, validity, file.
- `Pack`: principal, period, status history, generated PDF hash.
- `Acknowledgement`: worker, period, method, timestamp, IP/phone, OTP reference.
- `AuditEvent`.

**Integrations:**

| Integration | Method | Fallback |
|---|---|---|
| Payroll register | Excel/CSV upload with saved column mapping. Later, named export presets for common PH payroll tools. | Manual template download/fill |
| SSS e-CL / contribution list and PRN receipt | File upload: the e-CL is downloadable and editable offline (format *unverified*, likely CSV/Excel). Receipt PDF or scan is attached as-is. | PDF table extraction. Manual entry of totals per worker. |
| PhilHealth EPRS (PEPRL, SPA) and RF-1 | File upload (Excel/PDF *unverified*) | Same as SSS |
| Pag-IBIG eSRS / MCRF schedule and receipt | File upload | Same as SSS |
| ECC | ECC is paid with the SSS employer share, so the SSS receipt is the evidence (*background knowledge, verify*). | — |
| Payslip e-acknowledgement | SMS via a PH gateway such as Semaphore or similar (*vendor choice unverified*), plus a mobile web page. | Printable signature sheet, then scan upload |
| Government portals (My.SSS etc.) | **No automation in MVP.** Browser automation is possible later only with the client's explicit credentials and consent; it is high risk and fragile. | — |
| DOLE semi-annual report | Generate the prescribed form as PDF/Excel for printing in triplicate | — |

**Rules engine and validation** (each rule is a row in a rules table, editable without a deploy):
- An ID-format check for each identifier (SSS, PhilHealth PIN, Pag-IBIG MID, TIN).
- A rule that every deployed worker-day maps to a payroll line and to one line in each remittance list for the period.
- Contribution amount within the official table for the worker's salary bracket. Load the 2026 SSS, PhilHealth and Pag-IBIG tables as data, versioned by effective date.
- A remittance date check against the principal's deadline, such as the 25th of the following month.
- Certificate validity covering the pack period.
- A per-principal checklist completeness gate.
- A minimum-wage check against the regional wage order. This is v1: load per-region wage orders as data and flag pay below the order for the post's region.

**Security, privacy, residency:**
- **RA 10173 (Data Privacy Act of 2012)** and its IRR apply. SSS, PhilHealth, Pag-IBIG and TIN numbers are government-issued identifiers, which the Act classifies as *sensitive personal information*.
- The agency is the personal information controller and we are the **personal information processor**, so a Data Processing Agreement (outsourcing agreement) with each customer is needed.
- NPC registration of the data processing system may be required once we process sensitive data of 1,000 or more individuals (*threshold per NPC Circular 2022-04, unverified*). Plan to register and appoint a DPO (the founder) by the time we reach about 3 customers.
- No data-localisation law; cross-border transfer is allowed under the accountability principle (*background knowledge, verify with a PH lawyer*).
- Controls:
  - encryption at rest (managed DB plus storage SSE) and TLS;
  - per-tenant row scoping;
  - MFA for users;
  - signed short-lived download URLs;
  - retention policy (default: keep packs 5 years, raw uploads 1 year; configurable);
  - breach notification runbook (the DPA requires notification to the NPC within 72 hours).

**Audit trail and liability:**
- Each pack stores the input file hashes, rule results, overrides with user and reason, and the output PDF hash.
- The product **assembles** evidence that the agency itself certifies. It does not submit to government or certify compliance.
- Terms state the agency remains responsible for the accuracy of payroll and remittances.
- Liability is capped at 12 months of fees.
- If a pack is wrong (for example, a worker's line was mis-matched), the audit log shows what was matched and why, and the pack can be regenerated in minutes.

**Localisation:**
- UI in English. Business English is the norm in PH back offices; Filipino/Taglish for SMS and worker-facing acknowledgement pages.
- Currency is PHP.
- IDs: TIN (000-000-000-000), SSS, PhilHealth PIN, Pag-IBIG MID.
- Dates are mm/dd/yyyy.
- Regional wage orders vary by region.

**Testing:**
- Build a fixture library of **real anonymised export files** from every design partner. This is the most important asset, because formats are unverified.
- Golden-file tests: input set → expected exceptions → expected pack page list.
- Rule-table tests against official contribution tables.
- Each month, re-run all fixtures against the latest parsers to catch silent format changes.
- Before going live with a customer, run one month in parallel with their manual pack and diff the results.

---

## 6. Build plan

**Concierge first.** For the first 3 design partners, the founder builds packs with scripts plus manual work for 1–2 billing cycles, *before* the UI exists. This validates that principals accept the output and reveals the real file formats.

| Week | Milestone | Dev-weeks |
|---|---|---|
| 0–3 | Validation interviews (section 13). Collect sample files from 5+ agencies. Sign 3 paid or LOI design partners. | 0 (founder time) |
| 3–5 | Concierge: Python scripts parse the files, match workers and produce per-principal PDFs for 3 partners' September/October cycles. Measure hours saved and principal acceptance. | 1.5 |
| 5–8 | MVP app: tenants and auth, uploads, mapping wizard, parsers (SSS, PhilHealth, Pag-IBIG; Excel/CSV), matching and exceptions, pack generator, certificate vault | 3.5 |
| 8–9 | Billing board, DPA/terms, invoicing. **First paying customer by about week 9** (a partner converts from concierge). | 1 |
| 9–14 | PDF-table parsers, per-principal template library (top 5 government formats), onboarding of customers 2–8 | 2.5 |
| 14–20 | v1: SMS e-acknowledgement, DO 174 semi-annual generator (ready before the January report window), relief-worker handling | 3.5 |
| 20–26 | v1 hardening: roles, wage-order rule, NPC registration, self-serve onboarding | 2 |

**Effort:**
- To first paying customer: about **6 developer-weeks**, roughly 9 calendar weeks including validation.
- To v1: about **14 developer-weeks**, roughly 26 calendar weeks.

**Fake at first:**
- Parser coverage: the founder hand-maps odd files.
- Principal templates: build them on request.
- E-signature: accept scanned wet-signature sheets.
- Billing: manual invoices.
- Onboarding: done over a call.

---

## 7. Go-to-market

**Ideal first 10 customers:**
- Mid-size janitorial or manpower contractors and security agencies (150–1,000 workers).
- They hold **5 or more government contracts**, since government principals are the strictest checkers.
- Based in NCR, CALABARZON or Central Visayas (Cebu) so the founder or a local associate can visit.

**How to find them:**
1. **Awarded contracts (best source).** Agencies publish their awards: DBM ROs, PSA RSSOs, DSWD FOs, DILG ROs and the PCW post NOA/NTP and "Summary of Awarded Contracts" PDFs. Scrape or skim 2025–2026 janitorial and security awards to build a list of winning bidders with contract values. Bidders who win many contracts are prime targets.
2. **PADPAO.** Membership in good standing is required in government security bids, so the association reaches the right security agencies. Approach it for a members' seminar slot or newsletter.
3. **DOLE Regional Office lists of DO 174 registered contractors.** Their public availability is *unverified*; request them under FOI.
4. **Facebook groups** for HR/payroll practitioners and security-agency operators (*unverified group names*), plus JobStreet/Bossjob postings for "billing clerk – security agency", which reveal agencies with the pain.

**Outreach script angles (email, Viber or phone to owner or operations manager):**
- "How many days after month-end does DSWD/DBM actually release your payment? We cut the documentation part to one afternoon."
- "Your clerk spends about 2 weeks a month cutting SSS/PhilHealth/Pag-IBIG lists per client. Upload once, get every client's pack."
- "Never get a billing returned for a missing worker line again: we flag it before you submit."
- An offer: "We'll build this month's packs for 3 of your clients free. If your principals accept them, keep going at ₱X."

**Channel partners:**
- **Accounting and bookkeeping firms** serving agencies, such as Triple i Consulting, which publishes DO 174 guides. Offer a referral fee of 20% of the first year.
- **Payroll vendors without the feature** (NBS, AanyaHR, small local developers). Offer an export integration plus a referral fee. Be wary: they may copy the feature.
- **PADPAO** and any janitorial or manpower contractors' association (*existence unverified*).
- **Labour-law consultants** who prepare DO 174 registrations and renewals.

**Timing:**
- Launch in **November–December 2026**, when agencies are bidding for 2027 contracts, renewing clearances and preparing 13th-month pay.
- The first DO 174 semi-annual roll-up demo should land before the January 2027 filing window. The exact deadline is *unverified*; the DO 174 rules set report periods, so check with DOLE.
- Government contracts mostly start on 1 January, which creates new principal setups.

**Content and SEO (English and Taglish):**
- "DO 174 semi-annual report template 2026"
- "proof of remittance SSS PhilHealth Pag-IBIG for billing"
- "paano mag-billing sa government janitorial contract" ("how to do billing for a government janitorial contract")
- "security agency billing requirements DSWD"
- "PADPAO requirements checklist"
- Free downloadable Excel checklist templates per government agency as lead magnets.

---

## 8. Pricing and unit economics

**Tiers** (monthly, ex-VAT; *hypotheses to test*):

| Tier | Limit | Price |
|---|---|---|
| Starter | up to 5 principals / 150 workers | ₱4,500 |
| Growth | up to 20 principals / 600 workers | ₱9,000 |
| Pro | up to 60 principals / 2,000 workers, DO 174 report, SMS acknowledgements | ₱18,000 (SMS at cost plus margin) |

Annual prepay gets 2 months free. Concierge setup costs ₱10,000 one-off, waived for design partners.

**Expected ACV:** blended ARPA is about ₱8,000 a month, so ACV is about **₱96,000 (about US$1,700 at ₱57/US$, estimate)**.

**CAC by channel** (*estimates*):

| Channel | Estimated CAC | Notes |
|---|---|---|
| Founder direct from award lists | ₱15–25k | Mostly time plus travel; long cycles with owner-led decisions |
| Accountant referral | about ₱19k | 20% of first-year ACV |
| PADPAO seminar | ₱5–10k per customer | If the seminar converts 2–3 agencies |
| Content/SEO | Low cash, slow | Expected to matter from month 9 onward |

**Gross margin:** about 88–92%. Costs are hosting (about ₱5k a month total), SMS, PDF storage and payment fees. Support load during format changes is the hidden cost.

**Payment rails:**
- PH SMEs pay by bank transfer (InstaPay/PESONet), cheque, GCash/Maya and some card.
- PH processors (PayMongo, Xendit PH) need a PH entity (*background knowledge*).
- A foreign founder can start by invoicing from a home-country entity and collecting through **Wise PHP account details** or SWIFT, plus Stripe for card payers.
- Corporate buyers will want an official invoice and may ask for a BIR-registered receipt. A foreign invoice is acceptable for B2B import of services, but the buyer must withhold the 12% VAT under RA 12023. That is friction: some customers will gross up or refuse.
- From around 15 customers, either move billing to a **local reseller/partner** (an accounting firm that invoices locally and keeps a margin) or set up a PH entity.

**FX risk:**
- Revenue is in PHP. The peso has been broadly in the ₱55–59/US$ range in recent years (*approximate*).
- Price in PHP, convert monthly, and keep costs in USD minimal.
- A 10% depreciation reduces USD MRR 10%. That is acceptable at this scale.

---

## 9. Company and legal setup

- **Entity:** Start with the founder's existing home-country company (or a US LLC/UK Ltd) selling cross-border. A PH domestic corporation with more than 40% foreign ownership serving the domestic market generally needs US$200k paid-in capital under the Foreign Investments Act, with lower thresholds in some cases (*unverified, check with a PH lawyer*). For a solo founder, that pushes toward:
  - (a) a cross-border sale, or
  - (b) a Filipino co-founder or partner holding at least 60% of a local sales and support entity, or
  - (c) a reseller agreement with a local accounting or IT firm.
- **Local partner:** A part-time PH-based customer-success and sales associate is essential, as a contractor and not an employee, to avoid creating a PE/employer. Budget ₱30–40k a month from month 3. If they are paid through an EOR, budget more.
- **Tax:**
  - RA 12023: B2B buyers withhold and remit the 12% VAT. A nonresident only registers for B2C sales above ₱3M a year.
  - Watch whether buyers also withhold income tax on payments to non-residents. Possible final withholding on "royalties" or "services" depends on the treaty (*unverified, get a PH tax opinion before the first invoice*).
  - Home-country VAT/GST: export of services is typically zero-rated.
- **Contracts:**
  - MSA plus Terms of Service.
  - **Data Processing Agreement** compliant with RA 10173 and NPC rules.
  - Order form, with fees in PHP.
  - Acceptable use.
  - Philippine-law governing clause, or the home country with arbitration; customers will prefer PH courts.
- **Professional liability:**
  - Disclaimer that the tool does not certify compliance.
  - Liability cap of 12 months of fees.
  - Tech E&O insurance in the home country (about US$1–2k a year, *estimate*) once revenue starts.
  - Cyber cover, given the sensitive personal information.

---

## 10. Financial model (24 months)

**Assumptions:**
- Validation in months 1–2. Three free concierge pilots in month 3. First paid customers in month 4.
- Early-adopter ARPA is ₱6,000 in months 4–6, then ₱8,000.
- Monthly churn of about 2% is absorbed in the net-add numbers.

**Costs** (cash costs exclude founder pay):
- Hosting and tools: ₱10k a month.
- Legal and DPA setup: ₱60k one-off in month 1.
- Interview travel: ₱15k in month 2.
- PH associate: ₱35k a month from month 3.
- Marketing and events: ₱15k a month from month 3.
- Payment and FX fees: 4% of MRR.
- From month 13, costs step up to cover a second part-time associate, insurance and NPC/legal (₱80k to ₱110k a month).

**FX:** ₱57/US$ (*estimate*).

| Period | Customers (end) | MRR (₱) | Costs (₱) | Net (₱) | Cumulative cash (₱) |
|---|---|---|---|---|---|
| M1 | 0 | 0 | 70,000 | -70,000 | -70,000 |
| M2 | 0 | 0 | 25,000 | -25,000 | -95,000 |
| M3 | 0 (3 pilots) | 0 | 60,000 | -60,000 | -155,000 |
| M4 | 2 | 12,000 | 60,500 | -48,500 | -203,500 |
| M5 | 4 | 24,000 | 61,000 | -37,000 | -240,500 |
| M6 | 6 | 36,000 | 61,400 | -25,400 | -265,900 |
| M7 | 8 | 64,000 | 62,600 | +1,400 | -264,500 |
| M8 | 11 | 88,000 | 63,500 | +24,500 | -240,000 |
| M9 | 14 | 112,000 | 64,500 | +47,500 | -192,500 |
| M10 | 17 | 136,000 | 65,400 | +70,600 | -121,900 |
| M11 | 20 | 160,000 | 66,400 | +93,600 | -28,300 |
| M12 | 23 | 184,000 (≈US$3.2k) | 67,400 | +116,600 | +88,300 |
| Q5 (M13–15) | 32 | 256,000 | 268,000 | +428,000 | +516,300 |
| Q6 (M16–18) | 41 | 328,000 | 306,000 | +606,000 | +1,122,300 |
| Q7 (M19–21) | 50 | 400,000 | 345,000 | +783,000 | +1,905,300 |
| Q8 (M22–24) | 59 | 472,000 (≈US$8.3k) | 384,000 | +960,000 | +2,865,300 |

Quarterly rows show the quarter's total revenue net of costs, with MRR at quarter end. The quarter revenues are ₱696k, ₱912k, ₱1,128k and ₱1,344k.

**Break-even:**
- **Operating break-even is month 7**, excluding founder pay. Cumulative cash turns positive in **month 12**.
- Paying the founder ₱150k a month (about US$2.6k) needs about ₱220k MRR, or about 28 customers. On this curve that happens in **about month 14**.

**Ceiling (SAM × share), estimate:**
- Serviceable market: about **2,000–3,000** multi-principal contractors and security agencies with government or large-corporate clients. This starts from 4,717 registered contractors in 2019, adds an unknown number of security agencies, and keeps only those with 5 or more principals. *Estimate.*
- At a 5–8% achievable share, that is **100–240 customers**. At ₱9k ARPA, that is **₱0.9–2.2M MRR (about US$16–38k)**, or ₱11–26M ARR.
- This is a good lifestyle business, not a venture-scale one.

---

## 11. Team and founder fit

**Skills:**
- Pragmatic full-stack web development.
- Messy-file parsing (Excel/PDF).
- PDF generation.
- Comfort with sales calls to owner-operators.

**Language:** English is enough for business. Taglish or Cebuano matters for worker-facing SMS and rapport.

**Non-local founder:** feasible, but only with a **PH-based associate** who:
- visits agencies (owners buy in person and on Viber);
- collects sample files;
- runs onboarding;
- handles "can you come to our office" requests.

The time zone (UTC+8) suits founders in Asia or Australia; a Europe or US-based founder will be working odd hours.

**Local help needed:**
- PH labour/tax lawyer: entity, withholding, DPA. A one-off ₱50–100k.
- A friendly accounting firm as channel and possible billing partner.
- An ex-billing clerk from an agency as a paid advisor. This person is the best source of real formats and principal quirks.

---

## 12. Risks and mitigations

| Risk | Type | Likelihood | Mitigation |
|---|---|---|---|
| No urgency: agencies have lived with this for years, and "the clerk does it" | Market | **High** | Lead with days-sales-outstanding and cash, not time saved. Target agencies with many government principals. Offer the concierge pilot with measured payment-release time. |
| Principals require wet signatures or their own forms | Operational | Medium | Keep the printable signature sheet. Template engine per principal. |
| Payroll vendors serving agencies (Parfait, NBS) add per-cost-centre evidence exports | Competitive | Medium | Be format-agnostic (works with any payroll). Go deep on principal templates, the billing board and the DO 174 report. Partner rather than compete where possible. |
| Guardhouse or a foreign guard suite localises for PH | Competitive | Low–medium | Their focus is AU/UK/US scheduling. Our wedge is statutory evidence, not rostering. |
| SSS, PhilHealth or Pag-IBIG change export formats or portals | Platform | Medium | File fixtures and monthly regression runs. Manual-entry fallback. Treat parsers as config. |
| A government initiative lets principals verify remittances online directly | Regulatory | Low–medium | It would remove the core pain. Watch SSS/PhilHealth employer verification features. Pivot to the billing board and DO 174/bid packs. |
| Sensitive-data breach (government IDs of thousands of workers) | Legal | Low | DPA controls, MFA, encryption, minimal retention, insurance, NPC registration. |
| Payment friction: buyers want a BIR receipt or balk at VAT withholding | Payment | **High** | Local reseller partner early. PHP pricing. Clear withholding guide in the invoice pack. |
| PHP depreciation | FX | Medium | Low USD cost base. Annual price review. |
| Low willingness to pay in a thin-margin industry | Market | Medium–high | Price below one clerk-week. Pre-sell before building. |

**Biggest risk:** inertia. The work is painful but already absorbed into clerk salaries. Without a fresh rule, agencies may not switch even if the product works.

---

## 13. Validation plan before writing code

**Interview targets (12–15):**
- 6 janitorial/manpower contractors and 4 security agencies, taken from 2025–2026 government award lists (DBM RO8, PSA RSSOs, DSWD FOs, DFA, PCW). Mix sizes: 2 small (fewer than 100 workers), 6 mid-size (100–600), 2 large.
- 2 billing clerks: separately, or through JobStreet/Bossjob/Facebook groups.
- 2 principal-side people: a BAC secretariat or accounting/disbursement officer at a government agency, plus a corporate facilities or procurement compliance officer.
- 1 accounting or consulting firm serving contractors (for example, a DO 174 consultant).
- 1 PADPAO officer.

**Questions:**
1. Walk me through last month's billing for one client. Which documents, in what order, how long did it take?
2. How many principals do you bill? How many returned a billing in the last 6 months, and why?
3. Average days from month-end to payment, for government versus private clients? What was the worst case?
4. Who builds the packs? How many hours a month? What does that person cost?
5. Which files do you download from SSS, PhilHealth and Pag-IBIG? Can you show me (anonymised)?
6. Do principals require worker-level proof, or do they accept agency-level receipts? *This is a kill question.*
7. Do principals accept e-signed or bank-advisory payroll proof?
8. What payroll or other software do you use? Have you asked them for this?
9. How do you prepare the DO 174 semi-annual report?
10. If this were done in one afternoon, what would you pay monthly? Who decides?

**Pass/fail thresholds:**
- **Pass:**
  - at least 7 of 10 agencies say principals require *worker-level* matching or per-site lists;
  - median pack effort of 30 hours a month or more, or at least 1 returned billing a month on average;
  - at least 5 agencies say they would pay ₱5,000 a month or more;
  - no interviewee names a tool that already does it.
- **Fail (kill or reshape):**
  - principals mostly accept agency-level receipts;
  - pack effort under 10 hours a month;
  - most agencies are fine with existing payroll exports;
  - a local "security agency system" already outputs per-client packs (check names mentioned).

**Pre-sale test:**
- Offer a **paid concierge pilot**: ₱3,000 for the first month's packs for up to 5 principals, credited against the subscription.
- Goal: 3 paying pilots, plus 2 signed LOIs at ₱5,000 a month or more, within 4 weeks of first contact.
- Fewer than 2 paid pilots after 12 interviews means stop.

---

## 14. Expansion path

**Adjacent workflows (same customer):**
- Post-qualification bid packs: remittance histories, clearances and financial documents for each new tender.
- 13th-month and final-pay evidence.
- DO 174 registration renewal dossier.
- PNP-SOSIA LTO renewal checklists for security agencies.
- Minimum-wage-order compliance alerts.
- Principal-side view: sell to large corporate principals who audit many contractors (solidary liability).

**Same pattern in other countries:**
- **Chile:** subcontractor F30-1 / labour-compliance certificates per principal. The report lists a Chile accreditation-pack idea (6.5) and a private-security compliance desk.
- **Cambodia:** "one payroll run, three submissions" (6.5).
- **Australia:** cleaning and security contractors proving award and super compliance to principals.
- **Peru:** service contractors proving PLAME/T-Registro payments to mining principals (*not researched*).
- **Colombia:** PILA payment proof per contract for public contractors (*not researched*).

---

## 15. Reassessment scorecard

The country report gave only an overall 7.0, with no per-criterion scores. The "original" column shows the level implied by the report text (*inferred*).

| Criterion | Original (implied) | New | Reason |
|---|---|---|---|
| Pain | 8 | 7 | Cash flow does depend on the pack, but agencies have absorbed the work into clerk roles for years. |
| Frequency | 9 | 9 | Monthly per principal, plus semi-annual DO 174, renewals and bids. |
| Mandatory nature | 9 | 9 | 2026 contract terms make payment conditional and set a deadline of the 25th of the following month. |
| Fragmentation | 7 | 7 | Each principal has its own checklist; three statutory agencies; regional wage orders. |
| Existing competition | 7 | 6 | No direct pack product. Parfait targets employment agencies, and Guardhouse is a PH-based guard suite. Custom local systems are likely. |
| Incumbent gap | 8 | 7 | Payroll tools stop at agency-level files, a classic last-mile gap. A payroll vendor could close it as a feature. |
| Buyer accessibility | 8 | 8 | Government award notices name winning bidders and contract values. PADPAO is effectively mandatory for government security work. |
| Willingness to pay | 6 | 5 | Thin margins; the value proxy is about ₱8–12k a month of clerk time; payment and VAT-withholding friction for a foreign seller. |
| MVP simplicity | 8 | 8 | File in, PDF out; no API or certification; about 6 developer-weeks to the first paying customer. File formats are unverified. |
| Distribution | 7 | 6 | Lists exist, but owner-operators buy in person. A non-local founder needs a PH associate. |
| **Overall** | **7.0** | **6.0** | Down 1.0. There is no new regulatory trigger (DO 174 is unchanged since 2017 and the clause is chronic), the market count is from 2019, and payment friction for a foreign seller is real. Keep as interview-first. Promote to build only if interviews hit the pass thresholds in section 13. |
