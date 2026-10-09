# Bosnia and Herzegovina: AML compliance tool for small obliged firms — full plan

Combined plan from four deep-research parts (written 9-10 Oct 2026):

- [01 Law and product requirements](01-law-and-requirements.md): the Law, the Rulebook and the inspectors' forms, and 71 testable requirements, each traced to an article.
- [02 Market and competition](02-market-and-competition.md): buyer counts from the professional registers, prices, competitors and channels.
- [03 Product and technical design](03-product-and-tech.md): users, features, flows, screens, data sources, architecture, security, roadmap and build budget.
- [04 Go-to-market, company and finance](04-gtm-finance-company.md): pricing, channels, 90-day launch, company setup, payments, 36-month model and kill criteria.

Every fact below is sourced in those files. This page reconciles them where they disagree and gives one plan. "My estimate" marks numbers derived here.

---

## 1. Decision in one page

**Verdict: worth a cheap, staged test. Not worth a full two-developer build for Bosnia alone.**

**The case for it.**

- The duty is real, new and enforced.
  - The state AML Law (Sl. glasnik BiH 13/2024) has applied since 27 Feb 2024. Its Rulebook (8/2026) has applied since 11 Feb 2026.
  - Bookkeepers, accountants, auditors, tax advisers, real estate agents and dealers must keep a set of documents and records: a risk assessment, policies, an authorised person, a training plan, client files with beneficial-owner and politically-exposed-person (PEP) checks, an indicator list and 11 registers.
  - The Federation inspectorate (FUZIP) fined 14 times for 392,010 KM in 2024 and runs a special AML inspection programme to end-2026. FATF grey-listed BiH on 19 June 2026, which keeps the pressure on to about 2028.
- Nobody sells software for this job in BiH. Croatia's A-count, at EUR 0-540 a year, proves that the product shape sells.
- The product is simple to build: forms, documents, a client register, list screening and reminders. It needs no government integration.

**What the deep dive changed** (compared with the re-assessment that scored it 7/10):

- **Fewer buyers.** The registers give about **2,000** obliged small firms (range 1,700-2,900), not 3,000. About 1,500 of them are accounting providers, mostly one-person offices.
- **The documents are already free in Republika Srpska.** The RS accountants' association (SRRRS) gives away a 62-page Word pack of model AML documents. **A paid "document kit" is no longer a product.** The paid product is the *running file*: the client register, checks, reminders, training log and inspection pack.
- **The vendor cannot do the monitoring for the customer.** The law forbids outsourcing it, so this must stay a tool, not a done-for-you service.
- **Reports to the FIU go through its own system (AMLS), which has no public interface.** The product prepares drafts; the user files them.
- **Domestic PEP data is thin.** There is no official list, and OpenSanctions covers only 266 BiH PEPs.

**What it is worth.**

| | Customers | Recurring revenue | Profit before founder pay |
|---|---|---|---|
| Base case, year 3 | about 200 | about 85,000-90,000 KM a year (about EUR 45,000) | about 20,000-30,000 KM a year |
| Good case, year 3 | 2,500 × 15% | about 170,000 KM a year | — |

These are my rescale of the finance model to the 2,000-firm pool. Peak cash need is about 25,000-30,000 KM if the founder builds the software and takes no pay.

- **Bosnia alone is a solid side business, not a living.** The real upside is the same engine in Serbia (about 5,500 accounting providers), then Montenegro and North Macedonia.

**The key condition is who builds it.**

- **If the founder can code**, or builds with AI tools plus a freelancer for about 25,000-40,000 KM, the test is cheap and the numbers work.
- **If a salaried developer is needed** (about EUR 55,000-80,000 in year 1 on the lean path), Bosnia alone does not pay back within 3 years in the base case. Then commit only if Serbia is part of the plan from day one.

**Do this first, before any big build** (about 6-8 weeks, under about 10,000 KM):

1. Sign up 10-15 paying pilot firms.
2. Agree one partnership: SRRRS, or an approved FBiH training provider.
3. Pass the kill criteria in section 13.

---

## 2. Why now: the law and enforcement

**Who is obliged** (Law Art. 5):

- audit firms;
- bookkeeping and accounting companies and sole traders;
- tax advisers;
- real estate intermediaries: all sales, but rentals only from 20,000 KM a month;
- dealers in precious metals, stones and art from 20,000 KM;
- vehicle, vessel and aircraft dealers;
- trust and company service providers.

There is no micro-firm exemption. Firms with 4 or fewer employees get only two reliefs: the owner is the default authorised person, and there is no yearly independent audit.

**What must exist, and when:**

| Duty | Deadline or frequency | Basis |
|---|---|---|
| Firm-wide risk assessment with a written analysis per factor, a 4-level rating, approved by management | Updated and **sent to the supervisor at least yearly** | Law Art. 10; Rulebook Art. 3-15 |
| Written risk-assessment programme (client risk method) | Kept current | Rulebook Art. 5 |
| Internal acts covering the 13 elements of Art. 56(3), plus CDD, PEP, internal-control, data-security and whistleblowing procedures | Aligned with the Rulebook by 12 May 2026 | Law Art. 56; Rulebook Art. 46 |
| Authorised person and deputy, notified to the FIU (FOO) | **Within 8 days** of appointment or change | Law Art. 48(5); Rulebook Art. 42 |
| Training plan; register of sessions; new staff trained | Plan **by 31 March**; new staff **within 60 days** | Law Art. 54; Rulebook Art. 43-45 |
| Own indicator list built on the FOO sector list, sent to the FOO and the supervisor | **Within 30 days** of creating or changing it | Law Art. 57 |
| Client due diligence: fixed data fields, ID copy stamped with time and employee, beneficial owner at 25%, PEP check not resting only on the client's word | At onboarding, then reviews by risk | Law Art. 11-36; Rulebook Art. 22 |
| UN sanctions check; UN-listed persons are "unacceptable clients" | At onboarding and on list changes | Rulebook Art. 13, 32 |
| Suspicious transaction report, **before execution** | Immediately; fallback by the next working day | Law Art. 42, 46 |
| Cash of 30,000 KM or more (single or linked), and deals with listed countries | **Within 3 days** | Law Art. 43 |
| 11 registers (Art. 60), kept 10 years (4 years for training and control records), then deleted | Ongoing | Law Art. 59-61, 92 |

**Who inspects:**

- FUZIP in the Federation;
- the RS Inspection Administration (RUIP) in Republika Srpska;
- the Directorate for Finance in Brčko.

The law is the same in all three. Only the supervisor, its forms and the language or script differ.

**FUZIP's 49-item questionnaires** for accountants and for real estate agents (Oct 2026) list every document an inspector wants attached. They are the product spec. Item 39 asks whether the firm has "an information system supporting client risk assessment and monitoring", so the product answers that item by existing.

**Fines** (Art. 100):

- 5,000-200,000 KM for a company;
- 1,000-20,000 KM for the responsible person;
- 2,000-10,000 KM for a sole trader.

**Enforcement evidence:**

- FUZIP issued 14 fines totalling 392,010 KM from 7 AML inspections in 2024.
- FUZIP's special programme runs from 28 Sep 2026 to end-2026.
- In January 2026 RS gave randomly chosen accountants 10 days to hand in their internal acts and a 13-item questionnaire.
- The FATF action plan of June 2026 asks for consistent supervision of these firms.

**Still moving:**

- A new state law on freezing assets (terrorism and proliferation) passed the House of Peoples in May 2026. Its final duties are unconfirmed.
- The by-law listing domestic PEP *functions* is not yet published.
- A new FOO reporting system (AMLS) is planned for mid-2027.
- The beneficial-owner registers are in test in RS and absent in FBiH.

---

## 3. Customers

| Segment | Count | Confidence |
|---|---|---|
| FBiH accounting firms with a certified accountant in public practice | 847 (695 of them have just one) | medium-high: register count |
| RS accounting firms and sole traders | about 450-800 | low: estimated, since the new RS register will give the true number |
| Brčko accounting providers | about 40-80 | low |
| Audit firms | 86 in FBiH, plus about 30-40 in RS | high (FBiH) |
| Real estate agencies | about 135-150 in FBiH, plus about 85-165 in RS and Brčko | medium-low |
| Vehicle dealers, precious-metal and art dealers | unknown; possibly several hundred | unknown |
| **Working base** | **about 2,000 (range 1,700-2,900)** | medium |

**Buyer profile.** Mostly one-person bookkeeping offices that resent the duty. They are busy from December to March: annual statements are due 28 February. They already pay for:

- core bookkeeping software: 360-960 KM a year;
- the Paragraf Lex legal database: 645 KM plus VAT;
- AML seminars: 175-199 KM a day.

**The real jobs, in their words:**

1. "Get me through the inspection."
2. "Onboard a client properly in 10 minutes."
3. "Tell me what is due."
4. "Tell me what to do if something looks wrong."
5. "Prove training happened."
6. "Keep it 10 years, then delete it."

---

## 4. Competition

| Alternative | What it does | Price | What it means for us |
|---|---|---|---|
| **SRRRS model pack** (RS) | 62-page Word pack: authorised-person decision, FOO letters, rulebook, risk assessment with 3 worked examples, KYC and PEP forms, client risk tables, 7 registers. No automation, storage or reminders. Accounting and audit firms only; Cyrillic | Free | Kills a paid document kit in RS. **Best partner:** offer a co-branded digital version |
| SRR FBiH framework (8 Oct 2026) | 40-page guidance, indicator and risk-country lists. No fill-in forms | Free | Room for a tool in FBiH |
| FUZIP questionnaires and guidelines | What inspectors check | Free | Product input, not a competitor |
| Paragraf (database, seminars) | Legal texts and training; an AML model act is not confirmed | 645 KM a year; seminars 175-199 KM | Channel, and a possible template entrant |
| Consultants and law firms | Bespoke documents | Not published | Resellers |
| **A-count** (Croatia) | Full workflow: data capture, CDD, risk, screening, reminders, training with a certificate, PDFs | EUR 0 / 281 / 540 a year | The right shape and fair for Croatia. No BiH law or language. **Threat if it localises; possible partner** |
| Datalab PANTHEON (BiH office) | Accounting software with a paid add-on model, no AML module | from EUR 15 a month | **Most likely local entrant**, or the best integration partner |
| International KYC tools (Sumsub, ComplyCube and others) | ID and screening only | Per check | Possible back-end, not a competitor |

**Conclusion:** no local product does the job.

- The free documents mean the money is in **running the AML file**, not writing it.
- Real estate agencies and car dealers have **no free pack**. They are a small, clean niche.

---

## 5. Product

### Positioning

> "Vaš AML dosije, uvijek spreman za inspekciju" — your AML file, always ready for inspection.

- **The documents are free.** They are generated in the SRRRS structure, in FBiH, RS and Brčko variants, in Latin and Cyrillic.
- **The subscription is paid.** It covers:
  - the client register with CDD, beneficial-owner and PEP data;
  - logged sanctions and PEP checks;
  - client risk scores with approvals;
  - review and expiry reminders;
  - the training plan and log;
  - the 11 registers;
  - the one-click inspection pack that answers the FUZIP or RS questionnaire;
  - 10-year retention.
- **It is a tool, not advice.** Every decision is recorded as made by a named user of the firm, because the law forbids outsourcing monitoring (Art. 27(4)).

### Users

- **Inside the firm:**
  - the firm owner, who approves and pays;
  - the authorised person and deputy, who run the programme and alone see the confidential case log;
  - staff, who onboard clients and can raise a concern without seeing the outcome.
- **Around the firm:**
  - the external consultant, who manages many obliged firms;
  - the inspector, who in the MVP gets an export pack, not a login;
  - the firm's client, who later gets a one-time link to fill in the form;
  - our AML lawyer, who edits content.

### Feature map

| Module | MVP (first 12 weeks) | v1 (months 4-9) | Later |
|---|---|---|---|
| Set-up wizard and firm risk assessment | 25-35 questions; written analysis per factor; 4-level rating; yearly review task | Yearly update wizard showing changes; new-service assessment | Peer benchmarks |
| Internal acts (free) | Policy and procedures, risk assessment, authorised-person decision and FOO letter, training plan, indicator list and cover letter, PEP procedure, CDD and PEP/beneficial-owner forms. DOCX/PDF, versioned, with an approval record | Internal-control checklist and audit report (firms over 4 staff); client privacy notice | Qualified e-signature of acts |
| Authorised person | Register, with the 8-day FOO notice task | Absence and substitution log | |
| Training | Plan by 31 March; log; 1 course with a 10-question quiz and certificate; new-staff 60-day check | 4-6 micro-courses (accounting and real estate indicators, PEPs, data protection) | CPD-credited courses, if allowed |
| Clients and CDD | Person, sole trader, company; beneficial-owner tree with the 25% rule; ID upload stamped "original seen by / on"; expiry; register extract with check date; PEP self-declaration | Client self-service link; Excel import; ID reading (MRZ); JMBG check | Register look-ups where allowed |
| Screening | UN, EU and OFAC lists refreshed every 6 hours; fuzzy matching across diacritics and Cyrillic; hit review with reasons; nightly re-screen | OpenSanctions PEP check; curated BiH PEP list (2,000-4,000 names) | Adverse media |
| Client risk | Rule tables edited by the lawyer; low / medium / high / unacceptable; override with reason; senior-management approval for PEP and high risk | Re-rating triggers | |
| Reminders | Reviews by risk; ID expiry; yearly risk assessment; 31 March; 8 and 30 days; weekly digest | Event log per client | |
| Cases and FOO reports | Word template only | Confidential case log; indicator checklist; draft suspicious-transaction and cash reports in AMLS field order. The user files | AMLS link, if the FOO ever opens one |
| Records | Registers as lists; retention date on every record | Retention engine and deletion log; low-cost "archive only" plan | |
| Inspection pack | FUZIP accounting questionnaire pre-filled, with annexes; ZIP plus merged PDF | FUZIP real estate, RS and Brčko questionnaires | Read-only "inspection room" link |
| Languages | Bosnian interface; Bosnian and Serbian Cyrillic documents | Croatian and Serbian Latin; Cyrillic interface | Montenegrin, Macedonian |
| Consultants | One login for many firms | Portfolio dashboard with traffic lights; own logo on documents | |

The full list of **71 legal requirements**, with tests, is in [01 §PRODUCT REQUIREMENTS](01-law-and-requirements.md#product-requirements). Treat it as the acceptance checklist.

### Key flows

1. **First day: documents in under 60 minutes.**
   1. Sign up, then firm details. The entity picks the supervisor and the document variant.
   2. Sector, then people (who is the authorised person).
   3. Risk questionnaire.
   4. Review the rating and the editable text.
   5. Generate the documents, then the owner approves.
   6. Tasks are created: FOO notice within 8 days, indicator list within 30 days, training plan by 31 March, review in 12 months.
2. **New client: about 10 minutes.**
   1. Enter the ID (scan it in v1) and tick "original seen".
   2. Enter the beneficial owners and the purpose and source of funds.
   3. Collect the PEP and beneficial-owner statement.
   4. Screening runs automatically.
   5. The tool proposes a risk score; the user confirms it. A PEP or high-risk client needs owner approval.
   6. The tool stores a dated CDD record and sets reminders.
3. **Daily screening, automatic.** Lists are pulled, changes found and clients re-screened. Any hit goes to the authorised person.
4. **Something looks suspicious.**
   1. A staff member clicks "Report concern".
   2. The authorised person analyses it and decides.
   3. The tool drafts the report and the user files it in AMLS. A tipping-off warning shows throughout.
5. **The yearly cycle:**
   - January: the training plan;
   - the risk-assessment anniversary: the update wizard;
   - client reviews through the year;
   - an inspection pack in two clicks at any time.
6. **A consultant with many firms.** Firm owners grant access. The consultant sees one dashboard. Owners can revoke access.

### Screens

1. Dashboard with 8 traffic-light tiles that mirror the FUZIP checklist.
2. Set-up wizard.
3. Documents.
4. People.
5. Training.
6. Client list.
7. Client file.
8. Screening hit review.
9. Indicators.
10. Cases (authorised person only).
11. Records.
12. Inspection pack.
13. Consultant portfolio.
14. Content admin for the lawyer: each change needs a second person to approve.

Design rules: desktop first, plain language with the article number in a tooltip, everything printable.

---

## 6. Technical design

**Stack.** One plain monolith that one developer can run:

- **App:** Python and Django, server-rendered pages with HTMX, no single-page app.
- **Database:** PostgreSQL, with row-level security for tenant isolation and trigram search for name matching.
- **Background jobs:** Procrastinate, a Postgres-backed queue, so no Redis.
- **Documents:** docxtpl renders Word templates; Gotenberg (LibreOffice) converts to PDF; pypdf merges the inspection pack.
- **Files:** EU object storage with per-firm encryption keys and a virus scan on upload.

**Content layer the lawyer can edit without code:**

- Word templates with simple tags;
- risk rules as tables with fixed test cases ("golden tests");
- indicator and questionnaire libraries;
- everything versioned and showing the law version it relies on (Requirement 71).

**Multi-tenancy.** One database with a firm ID on every row. Isolation is enforced twice: in Django and in Postgres row-level security. Automated tests try to read across firms. A consultant works in one firm at a time.

**Languages.** gettext files for Bosnian, Croatian, Serbian Latin and Serbian Cyrillic, with automatic Cyrillic output for RS.

**Data sources:**

| Source | Use | Access | Cost |
|---|---|---|---|
| UN consolidated list | Binding sanctions check | XML (1,010 entries on 9 Oct 2026) | Free |
| EU consolidated list | Good practice | XML. Use a personal EU Login token, because the public file was 17 days old | Free |
| OFAC SDN | Good practice | XML (19,416 entries) | Free |
| BiH freezing decisions | Domestic list | Entered by hand from the gazette until a feed exists | Staff time |
| OpenSanctions | Foreign and top BiH PEPs | API | EUR 0.03-0.10 per check |
| Curated BiH PEP list | The long domestic tail: cantons, mayors, public-company boards | Our own research | 10-20 hours a month |
| Business registers | Company checks | Brčko publishes daily open XML; FBiH and RS have no API, so upload the extract and record the check date | Free |
| ID cards and passports | Fill in client data | In-house MRZ reading (Tesseract, PassportEye); never US cloud OCR | Free |
| Qualified e-signatures | Signed statements | 4 issuers; IDDEEA's is free; validate signed PDFs in v1 | Free to validate |
| FOO indicator and country lists | Indicator library | Word files on the SIPA site, checked weekly | Free |

**Security and privacy.**

- **Data protection law.** BiH's GDPR-style law (12/2025) applies. It requires breach notice within 72 hours, and fines go up to 40 million KM.
- **Our role.** We are the processor, so each customer signs a data-processing agreement.
- **Retention.** The 10-year AML retention overrides erasure requests.
- **Controls:**
  - two-factor login;
  - envelope encryption for ID images;
  - an append-only, hash-chained audit log;
  - staff support access only with the customer's logged consent;
  - a penetration test before the pilot, then yearly.
- **Hosting.** EU (Germany or France), with a BiH-hosted fallback. **Get a lawyer's opinion on transfers abroad in week 1**, because no BiH adequacy list or standard clauses were found.

**Running cost** (excluding staff):

| Customers | Per month | Share of revenue |
|---|---|---|
| 50 | about EUR 70-135 | |
| 300 | about EUR 310-445 | |
| 1,000 | about EUR 800-1,135 | |
| All | | about 4-14% |

People, not servers, are the cost.

---

## 7. Development steps

### Reconciled timeline

- The software cannot be ready for FUZIP's current wave, which ends in December 2026.
- Accountants are unreachable from December to March.

So:

1. **Now to December 2026:** sell *founding pilots* with done-with-you documents (concierge), and build the software in parallel.
2. **January to February 2027:** run the software pilot with 10-15 firms.
3. **March 2027:** paid launch, using the 31 March training-plan deadline as the hook.
4. **From mid-April 2027:** the main selling push.

The finance plan's "MVP in 4 weeks" is not realistic. Use the 12-week plan below.

### Phases

| Phase | When | Output |
|---|---|---|
| 0. Discovery | Weeks 1-2 | 10-12 interviews (FBiH, RS, Brčko, agencies, a consultant); real documents and the RS 13-item questionnaire collected; content outline; lawyer's hosting opinion; tech skeleton |
| 1. Concierge pilots | Weeks 3-10 | Founding-pilot customers get their documents tailored with them (form → script → lawyer check) plus a client-register spreadsheet. **Target FBiH firms and real estate agencies**, because RS already has the free pack |
| 2. Software MVP | Weeks 2-10 | The MVP column of the feature map |
| 3. Pilot | Weeks 11-16 (mid-Jan to end-Feb 2027) | 10-15 firms on the software, including 1-2 consultants and 2 agencies. Concierge data is imported |
| 4. v1 | March to August 2027 | Client link, ID reading, case log and report drafts, real estate pack, RS and Brčko questionnaires, more languages, consultant dashboard, retention engine |
| 5. v2 | September 2027 to February 2028 | Register look-ups, qualified signatures, inspection room, curated PEP list, Serbia and Montenegro preparation |

### First 12 weeks (start Monday 19 Oct 2026)

| Week | Product and content | Engineering | Sales | Legal checkpoint |
|---|---|---|---|---|
| 1 | Interviews; collect real papers | Repo, CI, hosting, Django skeleton, login with two-factor, tenant model | Landing page "FUZIP kontrola: AML dosije za 1 sat"; waitlist | Lawyer kick-off |
| 2 | Variable dictionary; risk factor catalogue; FUZIP item map | Data model, roles, row-level security tests, languages | Fix the pilot offer (see §8) | **LC1:** outline approved; hosting opinion |
| 3 | Lawyer drafts the 5 core documents | Set-up wizard; document pipeline | Concierge pilots start | **LC2a:** core documents approved |
| 4 | Indicator library from the FOO lists; CDD and PEP forms | Rules engine with golden tests; firm risk assessment output | First pilots delivered | |
| 5 | Training course 1 and quiz | Client register, beneficial-owner tree, encrypted ID upload | Webinar with an association or Paragraf | |
| 6 | Serbian and Cyrillic variant | Sanctions lists, matching, hit review | | **LC2b:** full template set |
| 7 | Client risk tables | Risk scoring, approvals, reminders, weekly digest | Recruit 10-15 software pilots | |
| 8 | Map all 49 questionnaire items | Training module; authorised-person register; indicator list builder | | |
| 9 | Terms, data-processing agreement, privacy notice, disclaimers | Inspection pack (questionnaire, annexes, item-39 description, ZIP and PDF) | | **LC3:** rules, mapping and terms approved |
| 10 | Pilot guide and 5 short videos | Hardening: audit chain, backup and restore drill, penetration test | Pilot agreements | |
| Buffer (28 Dec-10 Jan) | Holidays | Fix penetration-test findings | | |
| 11-12 | Watch users onboard | Fixes; import concierge customers | Pilot live; set price; launch 1 Mar 2027 | **LC4:** mock inspection of 2 pilot packs |

With **one developer**, the same scope takes 16-18 weeks. Alternatively, move the course player, Cyrillic interface and consultant role to v1.

### MVP definition of done

1. 8 of 10 pilot firms get from sign-up to an approved document set in under 60 minutes, without our help.
2. The inspection pack answers all 49 FUZIP items with annexes, and a lawyer's mock inspection finds nothing missing.
3. A simple client is onboarded in under 10 minutes.
4. Screening catches a test set of 50 listed names, including diacritics, Cyrillic and spelling variants. False positives stay under 1 per 20 BiH clients.
5. Every deadline type fires in an automated time-travel test.
6. Tenant isolation tests pass; no high or critical penetration-test findings remain; restore from backup works.
7. Every template shows its version and legal review date, and checkpoints LC1-LC3 are signed off.
8. Correct supervisor and script for each of FBiH, RS and Brčko.
9. At least 5 pilot firms say they would pay the planned price.

### Team and build budget (cash, founder unpaid)

| Option | Team | Year-1 cash | When to choose |
|---|---|---|---|
| **A. Founder codes** (recommended if possible) | Founder plus a lawyer (80-120 hours, then 10-15 hours a month), a freelance designer, a translator and a penetration tester | **about EUR 15,000-25,000** (30,000-50,000 KM) | Founder can build a Django app, with AI tools |
| B. Founder plus a freelancer | Founder as product owner; freelancer builds the MVP | about EUR 25,000-40,000 | Founder does not code |
| C. Lean hire | One senior developer; founder as product owner, content lead and tester | about EUR 55,000-80,000 | Only if Serbia is in the plan |
| D. Full team | Two developers | about EUR 95,000-150,000 | Not justified by Bosnia alone |

The lawyer's fixed review fee is about 4,000-6,000 KM for the template set in three variants.

---

## 8. Go-to-market

### Pricing (reconciled)

The finance plan priced a paid document set. The market study shows the documents are free in RS. Final packaging:

| Plan | Who | Price (net, yearly in advance) | Includes |
|---|---|---|---|
| **Free** | Anyone | 0 | Self-check against the FUZIP and RS questionnaires; **the full document set**; up to 5 client files |
| **Solo** | Sole bookkeeper, tax adviser, small agency | **290 KM** (about 24 KM a month) | 1 user, up to 40 clients, screening, reminders, training log, registers, inspection pack, yearly rule updates |
| **Office** | Office with staff | **590 KM** | Up to 5 users, unlimited clients, Excel import, roles, a yearly staff-training webinar with certificates |
| **Consultant** | Runs AML for several firms | **1,190 KM** for 10 firms, plus 90 KM per extra firm | Separate file per firm, own logo, portfolio dashboard |
| **Real estate / dealer** | Agencies, car dealers | 290 or 590 KM | Sector templates and the FUZIP real estate checklist |

**Add-ons**, delivered by partner consultants, who keep about half:

- inspection-pack review: 150 KM;
- done-with-you setup: 450 KM.

**Pilot offer:** 149 KM for the first year for 15-30 founding pilots, in return for feedback and a testimonial.

**Discounts:** 15% for association members; 20% in the first year for the first 100 customers signing by 31 March 2027.

**VAT.** Publish prices "net, VAT added where applicable". A new BiH company stays under the 100,000 KM VAT threshold for about two years, which is a 17% edge with non-VAT-registered bookkeepers.

### Channels, in priority order

1. **Associations.**
   - SRRRS: a co-branded digital version of its own pack.
   - SRRiF-FBiH, plus an approved CPD training provider (Finconsult, Revicon). FBiH accountants need 40 CPD hours a year, delivered only through the association and its approved providers.
   - "Glas računovođa i revizora", a new RS association.
2. **Paragraf:** seminars and articles, possibly as reseller.
3. **Bookkeeping-software vendors:** PK Office/Porezni kalkulator, Billans and Softkom for referrals, and **Datalab PANTHEON** for integration or white-label.
4. **Direct outreach** from the public registers. Go phone-first, because the new data protection law bans newsletters without consent.
5. **Referrals**, and consultants as resellers.

**Sales motion:** self-serve trial plus a short phone call; yearly pro-forma invoice paid by bank transfer.

**Renewal drivers:** the client register holds 10 years of records; the yearly risk-assessment update and training plan; rule updates.

### Selling calendar

| Period | Accountants' state | Our action |
|---|---|---|
| Oct-Dec | FUZIP programme running | Founding pilots, webinar no. 1 |
| Dec-Mar | Busy (statements due 28 Feb) | Quiet build. Training-plan deadline campaign 31 Mar |
| Mid-Apr to Jun | Open | **Main push**; RS association symposium (May); FATF June plenary |
| Sep-Nov | Open; autumn inspections; FATF October plenary | Yearly risk-assessment review campaign; renewals |

### Marketing budget, year 1: about 24,000 KM (EUR 12,300) plus 8% partner commissions

| Item | KM |
|---|---|
| 8-10 webinars | 3,400 |
| Events and stands | 6,000 |
| Paid social and search | 5,000 |
| Content and free tools | 2,600 |
| Paragraf placement | 1,500 |
| Outreach data and tools | 1,500 |
| Founder travel | 3,000 |
| Contingency | 1,000 |

Years 2 and 3: about 20,000 and 18,000 KM.

### First 90 days (from mid-October 2026)

- **Days 1-14:**
  - 20-30 interviews, including the Paragraf AML seminars in Sarajevo (14 Oct) and Banja Luka (15 Oct);
  - hire the lawyer;
  - collect the source texts and the RS questionnaire;
  - start company registration;
  - landing page with a free checklist.
- **Days 15-42:**
  - concierge pilots, with documents tailored with the firm;
  - free self-check live;
  - pitch SRRRS, SRRiF-FBiH and its CPD providers, Paragraf, PK Office, Billans and Datalab;
  - software build under way.
- **Days 43-70:**
  - convert 15-30 founding pilots at 149 KM;
  - webinar no. 1, "FUZIP upitnik: šta inspektor traži";
  - outreach to 500 firms by phone first;
  - 5 testimonials.
- **Days 71-90:**
  - holidays: build, don't push;
  - prepare the spring campaign;
  - **day-90 review against the kill criteria.**

---

## 9. Company, payments and legal

- **Set up a BiH d.o.o. in month 1.**
  - RS: 1 KM capital, about 3-5 days once documents are ready.
  - FBiH: 1,000 KM capital, 4-8 weeks with a foreign founder.
  - The founder can live abroad and act through an apostilled power of attorney. Budget 2,500-4,000 KM.
  - Pick RS unless the first local hire or partner is in FBiH.
- **Don't sell from an EU company.** Unclear reverse-charge VAT for non-registered buyers, and possible withholding-tax forms, would stop a 290 KM sale.
- **Payments: bank transfer against a pro-forma invoice first.** Cards through Monri later, after the company bookkeeper confirms the fiscal-receipt rules. In RS, card payments need fiscal receipts; the new FBiH fiscalisation law is pending.
- **Running costs:** a local bookkeeper at about 150-250 KM a month; statements due by 28 February.
- **Legal documents:**
  - terms of service with a liability cap and "tool, not advice" wording;
  - a data-processing agreement;
  - a privacy notice;
  - an "inspection promise": we fix and refund, we don't pay fines;
  - professional and cyber insurance: price unknown, ask locally;
  - a trademark.

---

## 10. Financials

The finance agent's model used 3,000 buyers. On the register-based pool of about 2,000, I scaled customers and revenue by about two-thirds and kept staff part-time in years 2-3. These are my estimates.

| | Low | Base | High |
|---|---|---|---|
| Customers at month 12 / 36 | 30 / 70 | 90 / 200 | 150 / 360 |
| Recurring revenue at month 36 | about 25,000 KM | **about 85,000-90,000 KM** | about 170,000 KM |
| Year-3 profit before founder pay | about 0 | **about 20,000-30,000 KM** | about 90,000-110,000 KM |
| Peak cash need (founder builds, no pay) | about 35,000 KM, never pays back in 3 years | **about 25,000-30,000 KM** | about 15,000 KM |

**The original model on 3,000 buyers** (for reference) gave:

- base: 290 customers, 123,000 KM recurring revenue and 55,000 KM year-3 profit;
- break-even from month 14;
- peak cash 18,600 KM.

**Unit economics (base):**

| Measure | Value |
|---|---|
| First-year price | about 350-425 KM |
| Blended customer acquisition cost | about 260-370 KM |
| Payback | 9-12 months |
| Renewals | 75%, then 85% |
| Gross margin | about 90% |
| Lifetime value | about 1,400 KM |
| Lifetime value / acquisition cost | about 4 |

**The limit is the small pool, not the unit economics.**

**Founder income.** Bosnia alone pays a founder about 2,000-3,000 KM a month only from year 3 in the base case. A real income needs **Serbia**:

- the same engine plus a Serbian legal layer;
- about 5,500 accounting providers;
- its FIU published risk guidelines for accountants in May 2025.

Serbia would roughly double or treble the base.

**Exit.** Paragraf, Datalab, a regional legal publisher or A-count could buy it at about 2-4× revenue. On the BiH-only base that is about 170,000-350,000 KM.

---

## 11. Regional expansion

| Market | Size | Notes | When |
|---|---|---|---|
| Serbia | about 5,476 accounting providers (2023) | FIU risk guidelines for accountants (May 2025); a new accounting law is in draft; no local tool found | Only if the month-18 milestone is met. Prepare the legal layer from month 12 |
| Montenegro | small | AML law amended May 2026; the FIU is building electronic questionnaires that generate risk analyses, which could become a free substitute | After Serbia |
| North Macedonia | about 2,040 registered providers | Needs a Macedonian interface | Later |
| Croatia | A-count's home | Enter only through a deal with A-count | Partnership only |

---

## 12. Risks and mitigations

| Risk | Mitigation |
|---|---|
| Associations or regulators extend free templates into a tool | Partner with them first (co-branded SRRRS version); compete on the running file, not documents |
| Datalab or Paragraf add a module | Approach both early for integration, white-label or resale; keep the cost base low |
| A-count localises for BiH | Move first; lock in the associations; price 35-50% lower; offer A-count a partnership |
| Customers buy once and cancel | No document-only plan; 10-year records live in the register; yearly duties; measure first-year renewal (kill criterion) |
| Smaller market than hoped | Consultant, real estate and dealer plans; Serbia |
| Liability if a customer is fined | Lawyer-reviewed, dated templates; owner approval recorded; liability cap; insurance; tool-not-advice positioning |
| Rules change (PEP functions by-law, freezing law, new AMLS mid-2027) | Content in tables and templates, not code; weekly check of the SIPA files; quarterly law watch; 30-day update promise |
| Data breach of IDs and JMBGs | Encryption, two-factor login, minimal access, penetration tests, no US OCR, incident plan |
| EU-hosting transfer rules unclear | Lawyer opinion in week 1; BiH-hosted fallback |
| Screening noise on common names | Birth year and nationality scoring; one-click "not the same person" with reason; re-alert only on list changes |
| Thin PEP coverage | Self-declaration plus OpenSanctions plus a curated BiH list; say plainly what is covered |
| Founder abroad | Local part-time customer-success person from month 4; local phone number; quarterly trips; partners do face-to-face work |
| Grey-list exit around 2028 lowers urgency | Yearly duties keep value; Serbia before 2028 |

---

## 13. Milestones and kill criteria

| When | Target (base) | Stop or pivot if |
|---|---|---|
| Day 30 (mid-Nov 2026) | 30 conversations, 10 pilot sign-ups, lawyer hired, company filed | **Fewer than 3 pre-orders from 30 conversations** |
| Day 90 (early Jan 2027) | 15-30 paying pilots; one association or Paragraf webinar; one partnership in talks; 5 testimonials | **Fewer than 8 paying pilots** |
| Month 6 (end Apr 2027) | 40-50 paying customers; 2 working channels | **Fewer than 25 paying customers.** Stop new spending |
| Month 12 (Oct 2027) | 90 customers; about 35,000 KM recurring revenue | **Fewer than 50 customers** |
| Months 13-15 | 75% of the first cohort renews | **Renewal below 50%.** It is a one-off product: run it as side income |
| Month 18 (Apr 2028) | about 60,000 KM recurring revenue and trailing profit | Go to Serbia only if this is met |
| Any time | | A free official tool covers the register, or A-count launches in BiH below our price: re-plan within 30 days |

---

## 14. Open questions to settle first

1. **Who builds it**, and therefore which budget option applies (§7).
2. Will **SRRRS** agree a co-branded digital version of its pack? Will an approved FBiH CPD provider partner?
3. The **RS inspectorate's 13-item questionnaire**, and any Brčko form. Get them from pilot customers.
4. **Hosting opinion:** may client data sit in the EU under the 2025 data protection law on a processor agreement alone?
5. The **true RS firm count**, from the new RS Ministry of Finance register of accounting firms, and the number of vehicle dealers.
6. Does the **PEP-functions by-law** exist yet? What does the **2026 freezing law** require, and will there be a BiH list feed?
7. How do small firms **get AMLS access**, and does AMLS accept any import format?
8. Does **Paragraf** already sell an AML model act? What do BiH consultants charge for AML packages?
9. Fiscal-receipt rule for **B2B bank transfers**; Monri fees; insurance and trademark costs.
10. Is **Datalab** open to an integration or white-label deal? Does A-count plan regional expansion?

---

## 15. Next steps this week

1. Decide build option A, B or C.
2. Book 10 interview calls, and attend or contact attendees of the **Paragraf AML seminars in Sarajevo (14 Oct) and Banja Luka (15 Oct)**.
3. Shortlist and brief an AML lawyer who knows FBiH and RS practice. Ask for a fixed fee for templates in three variants and a hosting opinion.
4. Email SRRRS and SRRiF-FBiH with a one-page partnership proposal.
5. Put up the landing page and free checklist; open the founding-pilot waitlist at 149 KM.
6. Start the d.o.o. paperwork: apostilled power of attorney.
