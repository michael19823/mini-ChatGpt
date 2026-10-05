# Plan #10: Mining local-content reporting kit (Tanzania first, then Zambia and Senegal)

*Plan date: 2026-10-05. Ranked #10 in `research/global-ranking.md` (score 6.5).
Source reports: `research/countries/tanzania.md`, `zambia.md`, `senegal.md`.*

**Evidence limits.** This plan rests on 15 WebSearch calls (the cap) and the three country
reports. WebFetch was blocked, so no regulation text, Fourth Schedule template, portal or
registry was opened. Every fact marked **unverified** or **estimate** needs checking in the
validation phase (section 13) before any code is written. Exchange rates are working
assumptions: about TZS 2,550, ZMW 22.6 and XOF 600 per USD.

---

## 1. Verdict up front

**Interview first. Do not build yet.** The legal trigger is real and stronger than the report
said. Tanzania requires a quarterly local-content report, reportedly **within 14 days of quarter
end**, with a **TZS 10 million fine** for each missed report and a **ban on bidding** if reports
stay missing. Zambia's SI 68 adds criminal fines of **up to ZMW 400,000 plus ZMW 20,000 a day,
with personal liability for directors**. No affordable product for suppliers and contractors
showed up in any of the three countries. The only software found is enterprise or Gulf-focused
(DAI's in-house local-content models, Penny AI on SAP Ariba for Saudi Arabia). The idea is held
back by two unknowns that only interviews can settle. First, how many entities actually file
every quarter. Second, what the filing physically looks like: a Fourth Schedule Excel sheet
emailed to the Mining Commission, or an online form. Planned as a regional "one engine, three
rule-packs" product, it is a plausible US$15–30k MRR lifestyle business for a solo founder with
a Dar es Salaam partner. It is not a venture-scale market.

**The 3 deciding facts**
1. **The penalty is per report, quarterly and fixed** (TZS 10m ≈ US$3.9k, plus a bidding ban),
   and the filing window is short (14 days, reported by one secondary source). A US$150–300
   monthly tool is cheap insurance against that.
2. **No dedicated competitor at the SME/contractor tier** in Tanzania, Zambia or Senegal. The
   price anchor is consultants and law firms (FB Attorneys, Bowmans, Clyde & Co, CM Advocates,
   M&J Consultants, DAI SBG).
3. **The buyer count is unverified in all three countries.** Zambia had 78 mining companies on
   LOCAS by August 2026. Tanzania and Senegal have no public count. If fewer than ~300 entities
   file quarterly across Tanzania and Zambia combined, this is a consulting practice, not a
   SaaS.

---

## 2. Verification results

| Claim from report | What you found | Source | Status |
|---|---|---|---|
| GN 563/2025 published 12 Sep 2025, amending the Mining (Local Content) Regulations 2018 | Confirmed by Clyde & Co, Bowmans, FB Attorneys (which hosts the GN PDF) and LEX Africa (29 Jan 2026) | clydeco.com; fbattorneys.co.tz GN PDF; lexafrica.com/2026/01 | Confirmed |
| TZS 10m fine for a missed quarterly or annual report; bidding ban for continued non-submission | Confirmed: Reg. 49(7) amended to add TZS 10m; continued non-submission or non-payment blocks bidding until cured | clydeco.com; fbattorneys.co.tz | Confirmed |
| Quarterly reports required; annual report within 60 days of year start | Confirmed. New detail: quarterly report due **no later than 14 days after quarter end**, and it must list contracts/POs to be **sole-sourced** | discoveryalert.com.au (secondary); clydeco.com | Confirmed (14-day deadline from a secondary source only) |
| Regulation 13A reserved items | List of **20 goods and services** reserved for 100% Tanzanian-owned companies, announced 5 Jan 2026. Commission verifies ownership beyond registration documents | tanzaniainvest.com; discoveryalert.com.au | Confirmed, more specific |
| JV rule for non-indigenous suppliers | Indigenous partner must be 100% Tanzanian-owned, same line of business, **≥20% equity**; JV agreement approved by the Commission before operations | lexafrica.com; thecitizen.co.tz | Confirmed, more specific |
| (new) Sole-sourcing threshold; deemed approval | Sole-source threshold = TZS equivalent of **US$10,000**; revised plans **deemed approved after 50 working days** | lexafrica.com/2026/01 | New |
| Tanzania: Commission may have its own reporting portal | No evidence of an online structured local-content reporting portal. The Commission publishes lists on its website. Format and channel unknown | Search on Commission portal returned nothing specific | Unverified (top validation item) |
| Tanzania: buyer count "a few hundred to low thousands" | No public count of approved LC plans or registered suppliers found. A supplier association exists: **TAMISA** (Tanzania Mining Industry Suppliers Association) | thecitizen.co.tz (TAMISA launch) | Unverified, but new channel found |
| No Tanzania-specific software | None found. Global options: **DAI Sustainable Business Group** (custom local-content templates, plus its proprietary "Local Content Optimization Model"; worked in Senegal and studied Tanzania); **Penny AI** (Saudi, local-content tracker on SAP Ariba); NOGIC JQS (Nigeria's government platform). None serves African SMEs off the shelf; no prices published | dai.com; sap.com partner page; petrocom.gov.gh | Confirmed (no direct competitor found) |
| Zambia SI 68 in force 1 Jan 2026, LOCAS live 20 Mar 2026, Q1 due 15 Apr 2026 | Confirmed. Reports go to the Director of Large-Scale Mining and include procurement, beneficial ownership, **employee statistics** and supplier development. Afriwise dates the regulations to 14 Oct 2025, with the 20% target due by 30 Jun 2026 | zambiamonitor.com; afriwise.com | Confirmed |
| Zambia penalty "unverified" | Fine **up to ZMW 400,000 (~US$17.7k) + ZMW 20,000/day**; directors and managers personally liable if they knew or consented | afriwise.com; bowmanslaw.com (Zambia) | Changed (stronger) |
| Zambia: MinesConnect may already compete | Search returned nothing on MinesConnect's features. Still the first thing to check | — | Unverified |
| Senegal: CNSCL platform, 177,000 FCFA fee, ≥10 contracts/week | Confirmed; more than 1,000 contracts reviewed under CNSCL supervision. Mining has its own decree, **2023-979 on local supply of goods and services in mining** | fr.allafrica.com (27 Mar 2026); vie-publique.sn | Confirmed, plus a mining-specific decree |
| Data residency | Tanzania PDPA 2022 + GN 449C/2023: transferring personal data abroad needs a **permit from the PDPC** unless the destination is deemed adequate | afriwise.com; clydeco.com (2024) | New constraint |
| Foreign SaaS VAT | Tanzania: B2B e-services to VAT-registered users are **reverse-charged** (the customer accounts for the 18% VAT); non-resident B2C suppliers must register | afriwise.com; trykintsugi.com | New, favourable |

---

## 3. Customer and problem

**Buyer (who signs):** finance manager or managing director of a mining contractor,
subcontractor or supplier with roughly 30–500 staff: drilling, explosives, haulage, catering,
security, engineering, camp services, equipment dealers. In Tanzania many are foreign-owned
firms now in JVs with indigenous partners. **Secondary buyer:** the local-content or
supply-chain officer at mid-tier mines and mineral-right holders (e.g. the Sotta Mining
"Supply Chain Compliance Supervisor" role in the Tanzania report).

**User (who uses it every quarter):** procurement officer, accountant or the HR/admin person
who builds the quarterly spreadsheet.

**Job-to-be-done:** "Every quarter, within 14 days, turn our purchase ledger and headcount into
a local-content report the Commission accepts, and prove every supplier we call local really
is, so we keep bidding."

**Current workflow (estimates, not observed first-hand):**

| # | Step | Who | Time per quarter | Cost (estimate) |
|---|---|---|---|---|
| 1 | Export the quarter's AP/PO ledger from Sage, QuickBooks, Odoo, Pastel or SAP into Excel | Accountant | 1–2 h | — |
| 2 | Classify every supplier as indigenous/non-indigenous, by ownership %, and check against the 20 reserved items and the US$10k sole-source threshold | Procurement + accountant | 6–16 h (200–1,500 lines) | — |
| 3 | Chase ownership evidence (BRELA extracts, shareholding, JV agreements) for new suppliers | Admin | 3–8 h | BRELA search fees (small) |
| 4 | Pull banking/insurance usage (Banking Services Sub-Plan) and headcount, nationality and training from HR | Finance + HR | 3–6 h | — |
| 5 | Fill the Fourth Schedule template; reconcile with the approved Local Content Plan and Procurement Sub-Plan targets; write variance explanations | Finance manager | 4–8 h | — |
| 6 | Submit to the Mining Commission (channel unverified), answer queries, archive evidence | Finance manager | 1–3 h | — |
| | **Total** | | **~18–43 h/quarter** | ≈ US$400–1,200 of staff time, or US$1,000–3,000/quarter if a consultant does it (estimate) |

**Cost of failure:**
- TZS 10m (≈ US$3.9k) per missed quarterly or annual report.
- Bidding ban until the report is cured. For a contractor this can mean losing the next
  contract round at its main client.
- Misclassifying a supplier on the reserved list: the mine's own report becomes non-compliant,
  so the mine pressures or drops the contractor.
- In Zambia: up to ZMW 400k plus ZMW 20k/day, and personal liability for directors.

---

## 4. Product definition

**Core loop (per quarter):** import ledger → match each supplier to the ownership register →
classify lines (reserved / sole-source / local / foreign) → review exceptions → generate the
quarterly report and evidence pack → mark as submitted → reminders for next quarter.

**MVP (must-have, Tanzania only)**
- Excel/CSV import of AP or PO lines, with column mapping saved per customer and per ERP.
- Supplier register: legal name, TIN, BRELA number, ownership %, indigenous flag, JV partner
  and equity, evidence files with expiry dates.
- Rules pack TZ-2025: the 20 reserved categories, indigenous test (100%), JV test (≥20%), the
  US$10k sole-source flag, and local bank/insurer flags.
- Exceptions queue: unknown supplier, missing evidence, reserved item bought from a
  non-indigenous supplier, sole-source above threshold.
- Output: a Fourth Schedule quarterly report in the official Excel layout (once obtained), plus
  a PDF summary and a zipped evidence pack.
- Deadline calendar: quarter end + 14 days; annual report within 60 days; email and WhatsApp
  reminders.
- Immutable report snapshots (what was filed, when, by whom).

**v1 (months 6–12)**
- Headcount/training import (nationality, grade, training hours) for employment sections.
- Annual report and annual LC-plan targets vs. actuals, with a quarterly glide-path dashboard.
- Multi-entity support (contractor plus JV entity) and an accountant/consultant workspace that
  manages many clients.
- Zambia rules pack SI-68 with a LOCAS-shaped export (see section 14).
- Supplier self-service evidence requests: the supplier uploads its BRELA/PACRA certificate
  via a link.

**Later**
- Mine-side consolidation of subcontractor submissions; Senegal pack (French); direct ERP
  connectors (Odoo, QuickBooks Online, Sage Business Cloud); Ghana/Nigeria/Mozambique packs.

**Explicitly out of scope:** writing the Local Content Plan itself (leave that to law-firm
partners); legal opinions on JV structuring; auto-submitting to government portals; payroll;
procurement/tendering; supplier marketplaces.

**Key screens and flows**
1. **Quarter dashboard:** the current quarter's status (imported, exceptions, ready, filed),
   days left to the deadline, and local-spend % vs. plan target.
2. **Import and map:** drop a file, confirm the column mapping (supplier, TIN, description,
   amount, currency, date, PO number), then preview totals that must match the ledger total.
3. **Supplier register:** a table of suppliers with a status badge (indigenous / JV /
   non-indigenous / unknown), evidence expiry, and a "request evidence" button.
4. **Exceptions queue:** one card per issue with the rule cited (e.g. "Reg. 13A reserved item
   #7 bought from a non-indigenous supplier"), and actions: reclassify, attach a justification,
   accept the risk.
5. **Report preview and lock:** the Fourth Schedule rendered as a sheet, a sign-off checkbox,
   then lock, download the Excel/PDF/evidence zip, and record the submission date and reference.

---

## 5. Technical design

**Architecture.** A single web app (server-rendered) with a background job worker. Files go to
object storage; data to Postgres. Ingestion parses Excel/CSV into staging rows, then a rules
engine produces classifications and exceptions, then a report generator fills Excel
templates (openpyxl-style templating) and PDFs. Email and WhatsApp reminders are sent via a
transactional provider. No government integration in the MVP.

**Hosting.** Start on a managed host in an EU or South African region (e.g. a South Africa
cloud region) with encrypted storage. Before storing personal data (beneficial owners, staff
nationality), choose one of two routes: (a) obtain the PDPC cross-border transfer permit
under the PDPA 2022 and GN 449C/2023, or (b) keep identifiable personal data minimal: store
company ownership percentages, not ID documents, and keep headcount aggregated by
nationality and grade. Route (b) is the MVP default. Keep in-country hosting with a Tanzanian
data centre as a fallback if a customer's legal team requires it (cost unverified).

**Stack for a solo developer.** Django + Postgres + Celery/Redis (or RQ), HTMX for interaction,
pandas/openpyxl for Excel in and out, WeasyPrint for PDFs. Reasons: Python is the best
ecosystem for messy spreadsheets; Django's admin gives a free back office for the concierge
phase; one deployable unit; i18n built in for French later.

**Data model (main entities)**
- `Organisation` (customer group) → `Entity` (legal entity: country, TIN, licence/contract
  refs, approved LC plan targets).
- `ReportingPeriod` (entity, quarter/year, deadline, status, locked snapshot).
- `Import` (file, mapping, row count, ledger total) → `SpendLine` (supplier ref, description,
  amount, currency, TZS amount, category, flags).
- `Supplier` (shared per organisation: name, TIN, BRELA/PACRA/NINEA number, ownership %,
  citizen-owned flag, JV partner, verified-at) → `Evidence` (file, type, issued, expires).
- `RulePack` (country, version, effective dates) → `Rule` (code, legal citation, predicate,
  severity).
- `Exception` (line or supplier, rule, resolution, justification, user, timestamp).
- `Report` (period, template version, generated files, hash, submitted-at, reference).
- `AuditEvent` (append-only).

**Integrations**

| Integration | Method | Fallback |
|---|---|---|
| Customer ERP/accounting | Excel/CSV upload with saved mappings | Concierge: the founder maps the first file by hand |
| Mining Commission (Tanzania) | Generated Excel/PDF; the customer submits through the official channel (email/portal/hand delivery, unverified) | Assisted manual submission checklist |
| BRELA company data | Customer-uploaded extracts. A BRELA online search (ORS) exists, but API access is unverified | Manual entry plus evidence upload |
| Zambia LOCAS | LOCAS-shaped Excel/CSV export. Bulk upload unverified; browser-assist only if the customer asks and the terms allow it | Field-by-field "copy panel" mirroring LOCAS screens |
| Senegal CNSCL | Report in the CNSCL/operator format (French) | Same as above |
| FX rates | Bank of Tanzania / Bank of Zambia published rates, entered monthly | Rate uploaded by the customer |
| Reminders | Email; WhatsApp Business API via a provider | Email only |

**Rules engine and validation.** Rules are versioned data plus small Python predicates, each
with a legal citation and an effective-date range so past quarters re-run under past rules.
Validations:
- the ledger total equals the sum of imported lines;
- currency conversion is applied consistently;
- every supplier is classified;
- reserved items are bought from indigenous suppliers or carry a justification;
- sole-source items above US$10k are listed;
- JV equity is ≥20%;
- evidence has not expired on the period end date.

Classification of free-text descriptions into the 20 reserved categories starts as keyword
rules plus a per-customer learned mapping (supplier → category). An LLM suggestion can be added
later, but a human always confirms.

**Security, privacy, residency.**
- Tanzania: Personal Data Protection Act No. 11 of 2022, with GN 449C/2023 (cross-border
  permit). Register as a data processor if required (verify), sign a DPA with each customer,
  and minimise personal data.
- Zambia: Data Protection Act No. 3 of 2021 (not re-verified in this pass).
- Senegal: Law 2008-12 on personal data, overseen by the CDP (not re-verified in this pass).
- Controls: TLS, encryption at rest, per-organisation row scoping, 2FA, signed URLs for
  evidence, daily backups, a 7-year retention option.

**Audit trail and liability.**
- Locked reports are hashed snapshots; every reclassification and override is logged with
  user, time and reason.
- Terms say the customer is the filer and remains responsible; the product is a preparation
  tool, and liability is capped at 12 months' fees.
- If a filed report is later found wrong, the tool regenerates a corrected report with a
  change log the customer can send to the Commission.
- Rule-pack updates are published with a changelog and the legal source.

**Localisation.**
- English UI for Tanzania and Zambia. The Tanzanian regulations and the Commission work in
  English; Swahili labels are a later nicety.
- French for Senegal from v1+.
- Currencies: TZS, ZMW, XOF plus USD, with stored rates.
- IDs: TIN (TRA), BRELA registration number, ZRA TPIN, PACRA number, CEEC certificate,
  NINEA/RCCM.

**Testing.**
- Golden-file tests: anonymised ledgers from 3 design-partner customers, run through the
  engine, must reproduce the report they filed by hand, line for line.
- Template tests: the generated Excel must open and match the official Fourth Schedule
  cell-for-cell (snapshot diff).
- Rule tests per citation.
- A quarterly "regulation watch" check of Commission notices and law-firm updates (FB
  Attorneys, Bowmans) before each deadline.

---

## 6. Build plan

**Effort to first paying customer: about 8–10 weeks after a successful validation (≈ 6
developer-weeks of code). v1 at about week 30.**

| Week | Milestone | Dev-weeks |
|---|---|---|
| 0–3 | Validation (section 13): 12+ interviews, obtain the Fourth Schedule template and 2–3 real past filings, sign 3 paid pilots / LOIs | 0 |
| 4 | Concierge: the founder builds the Q3-2026 reports (due ~14 Oct 2026, likely already filed; target **Q4-2026, due ~14 Jan 2027**) in a spreadsheet for 3 pilots, charging a setup fee | 0.5 |
| 5–6 | Django skeleton, auth, organisations/entities, Excel import with mapping, supplier register | 2 |
| 7–8 | Rules pack TZ-2025, exceptions queue, Fourth Schedule Excel generator, PDF summary | 2 |
| 9 | Evidence vault, deadline reminders, lock and audit trail; golden-file tests against pilot data | 1 |
| 10 | Pilots run Q4-2026 through the app (deadline mid-Jan 2027). **First paying subscription** | 0.5 |
| 11–16 | Headcount/training import, annual report (due within 60 days of year start: ~1 Mar 2027), multi-entity support, accountant workspace | 4 |
| 17–22 | Zambia SI-68 pack with LOCAS export, built with 2 Zambian design partners (Q1-2027 report due ~15 Apr 2027) | 4 |
| 23–30 | Supplier self-service evidence requests, glide-path dashboard, hardening; v1 | 4 |

**Faked or manual at first:**
- Column mapping and supplier classification done by the founder in the Django admin.
- Reserved-category tagging by hand.
- Evidence chasing by email from the founder.
- The Fourth Schedule filled from a template with the founder checking every cell.
- Zambia LOCAS entry done by screen-share with the customer.

---

## 7. Go-to-market

**Ideal first 10 customers (Tanzania):** foreign-owned or JV contractors serving the large
mines around Geita, Kahama, Shinyanga and Mara: drilling, explosives, haulage, camp/catering,
security, equipment dealers. They have the most to lose (JV scrutiny plus bidding ban), have
English-speaking finance teams, already use an ERP, and pay consultants.

**How to reach them:**
- **TAMISA** (Tanzania Mining Industry Suppliers Association): pitch a members' webinar,
  "Quarterly local-content reporting after GN 563", and offer a members' discount.
- **TCME** (Tanzania Chamber of Minerals and Energy) member list and events.
- Exhibitor lists from the **Mining Commission's annual local-content forum** and the
  **Tanzania Mining & Investment Forum**.
- Supplier/vendor-day attendee lists at the large mines.
- LinkedIn: titles "local content", "supply chain compliance", "finance manager" + mining +
  Tanzania.
- Law firms that publish GN 563 updates (FB Attorneys, CM Advocates, Bowmans, Clyde & Co,
  Theodore, FIN & LAW): referral partnership; they keep plan drafting, we do the quarterly
  data.

**Outreach angles:**
1. "Your Q4 report is due about 14 January. Missing it costs TZS 10m and your next bid."
2. "Which of your suppliers fail the new 100%-Tanzanian test for the 20 reserved items? We'll
   check your last quarter for free."
3. "Stop paying a consultant every quarter for spreadsheet work; keep them for the plan."
4. For finance managers: "Upload your Sage export, get the Fourth Schedule back with an
   evidence pack."

**Channel partners:**
- Law and advisory firms: 20% recurring referral fee, or a white-label for firms that want to
  serve many clients.
- Accounting firms with mining clients in Mwanza and Dar es Salaam.
- Local Sage/Odoo resellers.
- Later: mines that want their subcontractors' data in a consistent format.

**Launch timing:**
- Q3-2026 is due about 14 Oct 2026, too soon to catch; use it as an interview hook ("how did
  this quarter go?").
- Sell the concierge for **Q4-2026 (due ~14 Jan 2027)** and the **annual report (due ~1 Mar
  2027)**.
- Zambia: target the **Q1-2027 LOCAS deadline (~15 Apr 2027)**.
- Every quarter-end is a natural campaign.

**Content and SEO (English first, Swahili headings; French for Senegal):**
- "GN 563 of 2025 quarterly report checklist".
- "The 20 reserved goods and services list explained".
- "JV 20% rule: what contractors must file".
- "Fourth Schedule template guide".
- Zambia: "SI 68 LOCAS quarterly report: what to prepare".
- Senegal: "rapport de contenu local CNSCL : guide sous-traitants".
- Swahili: "ripoti ya robo mwaka ya maudhui ya ndani (local content) Tume ya Madini".

---

## 8. Pricing and unit economics

| Tier | Price | For |
|---|---|---|
| Supplier | US$150/month (TZS ~380k), billed annually at US$1,500 | One entity, up to 500 lines/quarter |
| Contractor | US$300/month (TZS ~765k), US$3,000/year | Up to 3 entities (incl. JV), unlimited lines, headcount module |
| Zambia contractor | US$400/month (ZMW ~9,000) | LOCAS pack; higher penalty and firm size support the price |
| Done-with-you add-on | US$400–800 per quarter | The founder or partner prepares the report |
| Onboarding | US$400 one-off | Mapping plus supplier-register build |

- **Expected ACV:** about US$2,600 (Tanzania blend) to US$4,800 (Zambia), plus onboarding.
  Blended about US$3,000–3,500.
- **CAC by channel (estimates):**
  - association webinar or event: US$300–600 per customer (travel plus booth);
  - law-firm referral: 20% of first-year revenue ≈ US$550;
  - direct LinkedIn/email: US$200–400 of founder time;
  - in-person trips to Mwanza/Geita: US$800–1,500 per customer if a trip closes 3–4.
- **Gross margin:** about 85% for software only (hosting, WhatsApp, storage under US$15 per
  customer per month). Blended about 70% while partner commissions and concierge time
  continue.
- **Payment rails:**
  - Invoice in USD from a foreign entity (e.g. a UK Ltd or US LLC), paid by SWIFT transfer.
    Mining contractors routinely pay foreign suppliers in USD.
  - Card through Stripe or Paddle for smaller customers. Paddle as merchant of record covers
    the VAT side but takes about 5%+.
  - Later, a local partner can invoice in TZS and collect by bank transfer or M-Pesa for
    small suppliers.
- **FX risk:** pricing in USD moves the risk to the customer. The risk is affordability if the
  TZS or ZMW falls. Offer TZS/ZMW-denominated annual prices reviewed yearly. Withholding tax
  on payments abroad may be deducted by customers (rates unverified; build gross-up clauses
  into contracts).

---

## 9. Company and legal setup

- **Entity:** start with the founder's home-country company or a UK Ltd/US LLC. No Tanzanian
  entity is needed for MVP B2B sales (verify with a local tax adviser). Open a Tanzanian
  company only if public bodies or large mines insist on local invoicing.
- **Local partner:** essential. Choose a Dar es Salaam or Mwanza consultant or accounting firm
  that already advises mining suppliers, on a 20–25% revenue share. It provides in-person
  demos, TZS invoicing if needed, and regulator relationships. Zambia: a Lusaka/Kitwe partner
  (e.g. a consultancy that publishes SI 68 guides). Senegal: a Dakar partner.
- **Tax/VAT:**
  - Tanzania: e-services to VAT-registered business customers are reverse-charged, so the
    customer accounts for the 18% VAT. Non-resident suppliers selling to non-registered
    businesses must register through the TRA simplified portal. Most targets are
    VAT-registered.
  - Possible withholding tax on service fees paid abroad: confirm.
  - Zambia and Senegal: confirm the reverse-charge treatment before selling there (not
    verified).
- **Contracts:**
  - SaaS terms plus a data processing agreement (PDPA 2022 aligned).
  - An explicit "preparation tool, customer is the filer" clause.
  - Liability capped at 12 months' fees.
  - A rule-pack update SLA (update within 30 days of a published regulatory change).
  - Partner referral agreement.
- **Professional liability:** buy tech E&O / professional indemnity insurance (estimate
  US$1.5–2.5k per year) before the done-with-you add-on, because that service looks like
  advice. Keep legal interpretation with the partner law firms.

---

## 10. Financial model (base case)

**Assumptions:**
- Prices as in section 8: Tanzania ARPA US$220/month, Zambia US$400, Senegal US$250.
- Onboarding fee US$400 per new customer.
- Customer counts are **net of churn**; about 2% a month churn is assumed as contracts end.
- Partner commission is 20% of MRR.
- Base running costs: US$400/month, rising to US$550 from month 4 (with insurance) and US$700
  from month 13.
- Trips: Tanzania in month 2 (US$4,000), Zambia in months 7 and 11 (US$3,500 each), then
  about US$4,000 a quarter.
- Formation/legal US$2,500 in month 3; Senegal localisation and legal US$3,000 in Q6.
- **Founder salary is excluded.** Validation starts in month 1 (Oct 2026), and the first
  subscriptions come in month 4 (Jan 2027, on the Q4 deadline).

| Period | Customers (TZ/ZM/SN) | MRR (US$) | Costs in period (US$) | Net in period (US$) | Cumulative cash (US$) |
|---|---|---|---|---|---|
| M1 | 0 | 0 | 400 | -400 | -400 |
| M2 | 0 | 0 | 4,400 | -4,400 | -4,800 |
| M3 | 0 (3 LOIs) | 0 | 2,900 | -2,900 | -7,700 |
| M4 | 2 (2/0/0) | 440 | 638 | +602 | -7,098 |
| M5 | 4 | 880 | 726 | +954 | -6,144 |
| M6 | 6 | 1,320 | 814 | +1,306 | -4,838 |
| M7 | 8 | 1,760 | 4,402 | -1,842 | -6,680 |
| M8 | 10 | 2,200 | 990 | +2,010 | -4,670 |
| M9 | 12 | 2,640 | 1,078 | +2,362 | -2,308 |
| M10 | 15 (13/2/0) | 3,660 | 1,282 | +3,578 | +1,270 |
| M11 | 18 (14/4/0) | 4,680 | 4,986 | +894 | +2,164 |
| M12 | 21 (15/6/0) | 5,700 | 1,690 | +5,210 | +7,374 |
| Q5 (M13–15) | 28 (18/10/0) | 7,960 | 10,240 | +13,260 | +20,634 |
| Q6 (M16–18) | 35 (21/12/2) | 9,920 | 14,470 | +15,180 | +35,814 |
| Q7 (M19–21) | 42 (23/15/4) | 12,060 | 12,700 | +23,100 | +58,914 |
| Q8 (M22–24) | 48 (25/17/6) | 13,800 | 13,858 | +27,332 | +86,246 |

(Net in period includes onboarding fees. MRR is the value at period end.)

- **Break-even:**
  - Cash break-even excluding founder pay: **month 10** (cumulative turns positive).
  - Covering a modest US$4,000/month founder draw needs about US$5,700 MRR: **month 12–13**.
- **Downside case:** if only half the customers sign (about 10 by month 12, MRR ≈ US$2.6k),
  cash break-even slips to about month 16. The product is then a side business unless Zambia
  pulls harder.
- **Realistic ceiling (estimate):**
  - Serviceable market: Tanzania 300–800 recurring filers (licensees, contractors,
    subcontractors; unverified); Zambia 78 mines plus ~200–400 mining-related companies;
    Senegal ~200–400 suppliers with recurring reporting. Total about **800–1,600 entities**.
  - Achievable share 8–10% → **65–160 accounts × ~US$3.3k ACV ≈ US$215k–530k ARR**, roughly
    **US$18k–44k MRR**.
  - A lifestyle business ceiling, unless mine-side consolidation or more countries (Ghana,
    Mozambique, DRC, Namibia) are added.

---

## 11. Team and founder fit

- **Skills:**
  - Python/Django and spreadsheet engineering (core).
  - Comfort reading regulations.
  - B2B selling to finance managers.
  - Accounting literacy (AP ledgers, FX, VAT).
- **Language:** English is enough for Tanzania and Zambia; Swahili helps with relationships,
  not filings. French is required for Senegal.
- **Non-local founder realistic?** Yes for the software. Only partly for sales: mining
  procurement runs on relationships and site visits. Plan for 2–3 trips a year and a paid
  local partner.
- **Local help needed:**
  - A Tanzanian consultant or accountant (demos, regulator contact, the official template,
    TZS invoicing).
  - A Tanzanian law firm to review rule packs each time regulations change (paid per review,
    ~US$500–1,000, estimate).
  - Equivalent partners in Zambia (Copperbelt) and Senegal.
- **A team of two:** one developer plus one Africa-based operator/seller who has worked in
  mining supply chains is the ideal shape.

---

## 12. Risks and mitigations

| Type | Risk | Mitigation |
|---|---|---|
| Regulatory | Rules change again (GN 563 is itself the 3rd amendment since 2018; lists change by ministerial announcement) | Versioned rule packs with citations; law-firm partner on retainer; sell "we track the changes" as a feature |
| Regulatory | Reversal or softening (Zambian Chamber of Mines lobbying on SI 68) | Run three countries so no single regime is fatal |
| Platform/government | The Tanzanian Commission launches an online form that pulls data automatically (as LOCAS did in Zambia) | A portal still needs prepared, classified data; pivot output to "portal-ready" exports and copy panels. Kill if the portal computes classifications from ledger uploads |
| Platform/government | Submissions require a certified preparer or the Commission rejects third-party-prepared reports | Customer always files under its own login; we only prepare |
| Competitive | Law/Big-4 firms productise, MinesConnect (Zambia) or DAI/Penny-type tools move downmarket | Partner with law firms rather than compete; price below a single consultant quarter; speed of rule updates |
| Competitive | Large mines impose their own subcontractor templates | Add multi-template output; later sell mine-side consolidation |
| Operational | Small market and a long, relationship-driven sale; buyers' contracts end (churn) | Annual billing; multi-country; target firms with multi-year contracts |
| Operational | A wrong report causes a fine and a reputational blow-up | Exceptions-first design, sign-off step, audit trail, liability cap, PI insurance |
| Data | PDPA 2022 cross-border permit friction | Minimise personal data; seek the permit early; in-country hosting fallback |
| FX/payment | TZS/ZMW depreciation, SWIFT friction, withholding tax deducted at source | USD pricing with annual local-currency option; gross-up clause; Paddle for card payers |

---

## 13. Validation plan before writing code

**Interview targets (12–15):**
1. 4 finance/procurement managers at foreign-owned or JV contractors (drilling, explosives,
   haulage, catering) supplying the large Tanzanian gold mines. Source: TAMISA, TCME, LinkedIn.
2. 2 local-content officers at mid-tier Tanzanian mines or mineral-right holders.
3. 2 indigenous Tanzanian suppliers in reserved categories.
4. 2 Tanzanian law/advisory firms that publish on GN 563 (FB Attorneys, CM Advocates or
   similar), as partners.
5. 1 Mining Commission local-content officer, or a former one (format and channel).
6. 2 Zambian mining-related companies already filing on LOCAS, plus check MinesConnect.
7. 1 Senegalese CNSCL-registered subcontractor (French), for the expansion check only.

**Questions:**
- Walk me through your last quarterly report: who, which files, how many hours, how many
  supplier lines?
- How do you submit it (email, portal, hand delivery)? Can I see the template?
- Did the Commission query or reject anything? Have you or a peer been fined or blocked from
  bidding?
- How do you decide whether a supplier is indigenous? Where is the evidence kept?
- Who did it before GN 563? Do you pay a consultant? How much per quarter or year?
- Does your mine client ask for its own local-content template on top of the Commission's?
- What ERP or accounting system do you use? Can you export the AP ledger by supplier?
- How many entities in your group file separately?
- If a tool produced the report from your export in an hour, what would that be worth per
  quarter? Who would sign?

**Pass/fail thresholds:**
- **Pass:**
  - ≥7 of 10 obliged interviewees file quarterly and spend ≥8 hours per quarter, or pay a
    consultant ≥US$500 per quarter;
  - the official template is obtained and is an Excel/Word form we can generate;
  - credible evidence of ≥300 recurring filers in Tanzania and Zambia combined;
  - ≥3 paid pilots.
- **Fail (kill or shelve):**
  - the Commission runs an online form that computes classifications;
  - most contractors say the mine's local-content team does it for them;
  - effort is under 2–3 hours per quarter;
  - fewer than 2 of 10 would pay ≥US$100 per month.

**Pre-sale / LOI test:**
- Offer a **"Q4-2026 report done for you" pilot at US$400** (onboarding plus first quarter),
  convertible to an annual subscription at a 20% founding discount.
- Target: 3 paid pilots from Tanzania by 15 Dec 2026, and 1 signed referral MoU with a law or
  advisory firm.
- Zambia: 2 LOIs for the Q1-2027 LOCAS cycle.

---

## 14. Expansion path: one engine, three rule packs

The engine runs the same steps in every country: ledger import, supplier ownership register,
category classification, rule checks, report template and evidence pack. Each country adds a
**rule pack** (tests, categories, thresholds), a **template pack** (output layout, language)
and an **ID pack** (registry numbers).

| Component | Tanzania (GN 563/2025) | Zambia (SI 68/2025, LOCAS) | Senegal (CNSCL; Law 2019-04, decree 2020-2047; mining decree 2023-979) |
|---|---|---|---|
| "Local" test | Indigenous = 100% Tanzanian-owned; JV with ≥20% indigenous equity | "Local company" ownership test (≥25% citizen ownership per report; verify) plus CEEC status | Senegalese company test via NINEA/RCCM (definition to verify for mining vs. hydrocarbons) |
| Category rules | 20 reserved goods/services; US$10k sole-source list | Core spend target 20% → 25% → 35% → 40%; 100% local for reserved non-core (security, catering, logistics, ICT, labour hire…) | Plan-based: local purchasing, Senegalese staff share, training; operator-specific templates |
| Period / deadline | Quarterly, +14 days; annual within 60 days | Quarterly (Q1 due 15 Apr); annual procurement plan | Annual plans plus periodic reports to prime contractor and CNSCL (frequency unverified) |
| Extra data | Banking/insurance sub-plan; headcount and training | Beneficial ownership; employee stats; supplier-development spend (0.05%) | Payroll by nationality; training evidence; subcontractor list |
| Output | Fourth Schedule (Excel/PDF; channel unverified) | LOCAS fields (online; bulk upload unverified) | CNSCL platform plus operator Excel (French) |
| Penalty | TZS 10m per missed report plus bidding ban | Up to ZMW 400k plus ZMW 20k/day; director liability | USD 1–20m fines (mainly at contractor level); prior-control blocks |
| Sequence | Months 1–10 | Months 6–12 (v1) | Months 15–20, French UI |

**Engineering cost per extra country (estimate):** 3–5 developer-weeks (rule pack, template,
IDs, translation) plus a local partner and a law-firm review.

**Adjacent workflows:**
- Mine-side consolidation of subcontractor data (higher ACV, US$500–1,500/month).
- Supplier "local-status dossier" for reserved-category SMEs. Low price, but it feeds the
  supplier register with verified data.
- The annual Local Content Plan builder (with law-firm partners).
- Oil and gas regimes on the same pattern: Ghana Petroleum Commission in-country spend
  reporting, Nigeria NCDMB/NOGIC, Mozambique, Uganda/Tanzania petroleum (EACOP), Guyana.
  These are larger regulators with their own platforms, so they come after the mining packs
  are proven.

---

## 15. Reassessment scorecard

| Criterion | Original (report) | New | Reason |
|---|---|---|---|
| Pain | 7 | 7 | Fixed fine plus bidding ban and a 14-day window are confirmed; hours per quarter still unobserved |
| Frequency | 7 | 7 | Quarterly plus annual, confirmed in Tanzania and Zambia |
| Mandatory nature | 9 | 9 | Statutory, with fines; Zambia adds director liability |
| Fragmentation | 6 | 7 | Three countries with different tests, categories and templates make the multi-pack engine defensible |
| Existing competition (10 = weak) | 7 | 7 | No SME tool found; DAI/Penny AI are enterprise or Gulf; MinesConnect still unchecked |
| Incumbent gap | 7 | 7 | ERPs hold the data; portals and consultants do not compute or evidence it |
| Buyer accessibility | 6 | 6 | TAMISA, TCME, LOCAS list and the CNSCL registry exist, but no public counts |
| Willingness to pay | 6 | 6 | Penalties and consultant fees anchor US$150–400 per month; unproven by interviews |
| MVP simplicity | 7 | 6 | Simple engine, but the official template and channel are unknown and PDPA transfer rules add friction |
| Distribution | 5 | 5 | Relationship-driven and needs a local partner and trips |
| **Overall** | **6.5** | **6.5** | Stronger penalties and the multi-country fit offset the unverified buyer count and template; the score holds. Rises to ~7 if interviews confirm ≥300 filers and a generatable template; falls to ~5 if the Commission launches a computing portal |

---

## Sources

- Clyde & Co, GN 563/2025 amendment: https://www.clydeco.com/en/insights/2025/09/amendment-to-the-mining-local-content-regulations
- FB Attorneys, GN 563/2025 text (PDF): https://fbattorneys.co.tz/wp-content/uploads/2025/09/GN-NO.-563-OF-2025-THE-MINING-LOCAL-CONTENT-AMENDMENT-REGULATIONS-2025-1.pdf
- FB Attorneys legal update: https://fbattorneys.co.tz/mining-local-content-regulations-amended-2/
- Bowmans, Tanzania amendments: https://bowmanslaw.com/insights/tanzania-amendments-to-the-mining-local-content-regulations/
- LEX Africa (29 Jan 2026): https://lexafrica.com/2026/01/tanzania-mining-local-content-regulations/
- TanzaniaInvest, 20 reserved goods and services (2026): https://www.tanzaniainvest.com/mining/mining-local-content-regulations-goods-services-list-2026
- Discovery Alert, Tanzania compliance 2026 (14-day deadline; secondary source): https://discoveryalert.com.au/tanzania-mining-local-content-compliance-2026-rules/
- The Citizen, TAMISA launch: https://thecitizen.co.tz/tanzania/news/national/local-content-in-mining-gets-fresh-impetus-with-launch-of-new-body-4763762
- The Citizen, JV rules: https://thecitizen.co.tz/tanzania/business/new-mining-rules-force-joint-ventures-to-boost-citizen-participation-5210186
- The Guardian (IPP), 90% target: https://ippmedia.co.tz/the-guardian/news/local-news/read/mining-sector-rules-push-local-content-bid-to-90pc-2026-07-23-100702
- Afriwise, Zambia local-content requirements: https://www.afriwise.com/blog/zambia-local-content-requirements-in-the-mining-sector
- Bowmans, Zambia: https://bowmanslaw.com/insights/zambia-local-content-requirements-in-mining-sector/
- Zambia Monitor, reporting directive: https://www.zambiamonitor.com/?p=82936
- IEA policy entry SI 68: https://www.iea.org/policies/29702
- LOCAS portal: https://locas.mmmd.gov.zm/ (from the Zambia report; not opened)
- AllAfrica, CNSCL private-sector campaign (Mar 2026): https://fr.allafrica.com/stories/202603270154.html
- Vie-publique.sn, decree 2023-979 (mining local supply): https://www.vie-publique.sn/documents/11019/decret-2023-979-fourniture-locale-biens-services-secteur-minier-senegal
- CNSCL decrees: https://cnscl.sn/wp-content/uploads/Decrets-CNSCL-et-FADCL-Hydrocarbures-Mines.pdf
- DAI, Senegal local-content support: https://www.dai.com/our-work/projects/senegal-local-content-support
- DAI, Local Content Optimization Model: https://www.dai.com/our-work/local-content-optimization-model
- SAP partner page, Penny AI local-content tracker: https://www.sap.com/canada/products/financial-management/partners/penny-software-arabia-for-information-local-content-tracker.html
- Afriwise, Tanzania cross-border data transfers: https://www.afriwise.com/blog/legal-and-compliance-requirements-for-cross-border-personal-data-transfers-under-tanzanias-personal-data-protection-framework
- Clyde & Co, cross-border personal data transfers (2024): https://www.clydeco.com/en/insights/2024/10/cross-border-personal-data-transfers
- Afriwise, Tanzania digital services taxation: https://www.afriwise.com/blog/taxation-of-digital-services-in-tanzania-navigating-the-law-enforcement-and-new-challenges
- Kintsugi, Tanzania VAT guide 2026: https://trykintsugi.com/sales-tax-guides/africa/tanzania
