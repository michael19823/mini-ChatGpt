# South Africa RMCP filing kit: product and technical design

Part 3 of the South Africa B4 deep dive: product, technical design and development plan. Written 10 Oct 2026. Builds on the B4 report ([../reports/south-africa-b4.md](../reports/south-africa-b4.md)) and the sibling files [01-law-and-requirements.md](01-law-and-requirements.md) (law, directives, guidance) and [02-market-and-competition.md](02-market-and-competition.md) (buyers, prices, competitors). Legal facts below come from primary FIC documents that the 01 file read in full; I cite the primary URL each time. "My estimate" marks numbers I derived. "(unverified)" marks facts I could not confirm.

Status: complete draft (10 Oct 2026). Open questions at the end. Searches were in English plus one in Afrikaans ("risikobestuur- en nakomingsprogram", "goedkeuring direksie"); it returned only English pages (LSSA, GoLegal, Moonstone), as FIC material and the trade press on this duty are in English.

Working name in this file: **"the product"**. Positioning from the 02 file: "your FIC year, done and provable", not "an RMCP generator".

## Summary

- **What to build.** A web app that interviews a small accountable institution, writes a short, tailored RMCP and business risk assessment, records the approval, produces the goAML-ready PDF (`YYYYMMDD_RMCP.pdf`, approval date), tracks every FIC deadline per Org ID, and builds an inspection pack. Accountants and consultants get one login for many client entities. No goAML integration is needed, and the FIC offers none: the RMCP upload is a manual attachment in goAML's "My Org Details" screen ([FIC graphic, 9 Oct 2026](https://www.fic.gov.za/wp-content/uploads/2026/10/HTSRMCP.png)).
- **What the portal leaves undone.** goAML only accepts the file. A successful upload proves format and naming, not adequacy ([FIC consultation feedback note on Directive 12, paras 18-20](https://www.fic.gov.za/wp-content/uploads/2026/09/Consultation-feedback-note-Relating-to-draft-Directive-12-on-the-submission-of-RMCPs.pdf)). Nothing in goAML drafts, tailors, approves, versions or reminds. Nothing tracks the 10-day re-filing rule after a later approval ([Directive 12, para 8](https://www.fic.gov.za/wp-content/uploads/2026/09/Directive-12-On-the-submission-of-risk-management-and-compliance-programmes.pdf)).
- **The spec is in GN 7B and PCC 53.** GN 7B (3 Aug 2026) wants a three-part RMCP (risk identification and assessment, mitigation, monitoring of control effectiveness), a documented approval that cannot be delegated, a comprehensive document that does not merely refer to other documents, and a statement of which s42(2) elements do not apply and why ([GN 7B, paras 181-185A](https://www.fic.gov.za/wp-content/uploads/2026/08/Guidance-Note-7B-%E2%80%93-Implementation-of-various-aspects-of-the-FIC-Act.pdf)). PCC 53 gives nine themes and a 5-factor client risk matrix ([PCC 53](https://www.fic.gov.za/wp-content/uploads/2023/09/2022.08-PCC-PCC-53-RMCP.pdf)). The product's question bank and clause library map one-to-one to these.
- **MVP (3 weeks of build):** org setup per Org ID; guided interview (about 50-70 questions, branching); business risk assessment; RMCP generator (DOCX and PDF) with an s42(2) coverage table; approval minute and in-app approval; version history; filing pack with goAML steps; deadline engine (9 Oct / 31 Oct, 10-day amendments, 90-day new institutions, yearly review); staff read-acknowledgements; inspection pack v0; accountant portfolio list. Sector packs at launch: **item 1 (legal practitioners) and item 2 (trust and company service providers, mainly accounting practices)**.
- **v1 (Dec 2026-Jun 2027):** sector packs for items 11 (credit providers), 20 (motor and other high-value goods dealers; shared with the A1 dealer idea) and 22 (crypto); an AI "gap check" of an existing RMCP; Directive 10 location register; training register; staff and client TFS screening log against the FIC list; RCR preparation workbook (only if the FIC calls a 2027 return); white-label for accountants.
- **Stack for one founder with AI agents:** Django + HTMX + PostgreSQL monolith; legal content kept as code (YAML questions, Jinja clauses) in git, with golden-file tests on 8-12 synthetic firms so no agent can change legal text unnoticed. DOCX via docxtpl, PDF via Gotenberg (LibreOffice). Postgres-backed job queue. Host on Fly.io in Amsterdam: Fly runs apps in Johannesburg but does not offer its managed Postgres there ([Fly regions](https://docs.fly.io/reference/regions)). Add an SA-hosted option later only if buyers insist.
- **Privacy is light by design.** The MVP holds business data plus the names of approvers, the compliance officer and staff. It holds no client CDD files. Under POPIA we are the customer's operator for that data; we need an operator agreement (s21), security safeguards (s19) and a cross-border basis if hosted abroad (s72) ([POPIA s72](https://source.acts.co.za/protection-of-personal-information-act-2013/72__transfers_of_personal_info.php)).
- **Running cost is small:** about US$85-115 a month at 50 customers, US$170-210 at 300 and US$270-610 at 1,000 (my estimates), against about US$12.5 a month of revenue per customer at R2,490 a year.
- **Cash to a sellable product: about R130,000-R400,000 (US$8,000-24,000), most likely R180,000-R250,000 (US$11,000-15,000).** The FICA attorney's content review and the security test are about 60% of it. No salaried developers.
- **Calendar:** start Mon 12 Oct 2026; MVP feature-complete Fri 30 Oct; legal sign-off, security test and 10 pilots in November; **paid launch Tue 1 Dec 2026**, before the South African December shutdown. Core v1 by end-March 2027 and the rest by June, well before the September-October 2027 peak.

## Users and jobs

### Who uses the product

| Role | Who it is | Legal hook | What they do in the product | Rights |
|---|---|---|---|---|
| **Approver** (board, directors, partners, or the sole practitioner) | The "highest authority" of the institution | RMCP must be approved by the board, senior management or highest authority (s42(2B)); approval cannot be delegated, also for sole proprietors ([GN 7B, paras 181C-E](https://www.fic.gov.za/wp-content/uploads/2026/08/Guidance-Note-7B-%E2%80%93-Implementation-of-various-aspects-of-the-FIC-Act.pdf); [FIC Act s42](https://www.acts.co.za/financial-intelligence-centre-act-2001/42__risk_management_and_compliance_.php)) | Reviews the draft; approves (in-app e-approval or signed minute); approves each later version | Approve, view all, billing |
| **Compliance officer** | Person appointed under s42A; in a sole practice usually the practitioner | Legal persons need a compliance function and a competent senior person; others (except sole practitioners) must appoint a competent person ([FIC Act s42A](https://www.acts.co.za/financial-intelligence-centre-act-2001/42a__governance_of_anti-money_.php)). The RCR must be submitted by the compliance officer ([PCC 60, para 4.10](https://www.fic.gov.za/wp-content/uploads/2026/06/2026.6-PCC-60-RCR-_On-RCR-Submission.pdf)) | Runs the interview, edits narratives, prepares the filing pack, uploads to goAML with own credentials, records the FIC acknowledgement, keeps registers | Everything except final approval (unless also an approver) |
| **Staff member** | Attorneys, candidate attorneys, bookkeepers, admin staff | RMCP must be available to employees (s42(3)); ongoing training (s43) ([FIC Act s43](https://www.acts.co.za/financial-intelligence-centre-act-2001/43__training_relating_to_.php)); employee screening (Directive 8) ([Directive 8](https://www.acts.co.za/financial-intelligence-centre-act-2001/n3257_2__directive.php)) | Reads the current RMCP; clicks "I have read it"; (v1) training and quiz | Read current approved version only |
| **Accountant or consultant** | An accounting practice, bookkeeper or compliance consultant with many small clients | goAML credentials may not be shared and third parties may not submit the RCR ([PCC 60, paras 4.10-4.11](https://www.fic.gov.za/wp-content/uploads/2026/06/2026.6-PCC-60-RCR-_On-RCR-Submission.pdf)). The client still approves and uploads | Creates client entities, runs or sends the interview, prepares documents, tracks all deadlines in one table | Per-client grant; cannot approve on behalf of a client |
| **Reviewing attorney (optional add-on)** | A partner FICA attorney who reviews a customer's draft for a fee | The customer contracts the attorney directly (see Liability) | Comments on a draft; signs a review note | Read and comment on drafts shared with them |
| **Content editor** | Our FICA attorney and compliance expert | Content must track the Act, directives, GN 7B and PCCs | Reviews and signs off content releases (questions, clauses, rules) | Content area only; no customer data |
| **Inspector** | FIC inspector | Inspections under s45B; inspectors check approval and Parts 1-3 ([GN 7B, paras 190AA-CC](https://www.fic.gov.za/wp-content/uploads/2026/08/Guidance-Note-7B-%E2%80%93-Implementation-of-various-aspects-of-the-FIC-Act.pdf)) | No login. Receives the inspection pack (PDF/ZIP) from the customer | None |
| **Platform admin** | The founder | | Support, billing, content releases | Support access only with time-limited customer consent, logged |

### Jobs to be done (in the buyer's words)

1. **"Give me an RMCP that fits my firm and that an inspector will accept."** The FIC and LSSA reject generic templates; PCC 53 "strongly cautions" against copying its template as is ([PCC 53, Annexure B](https://www.fic.gov.za/wp-content/uploads/2023/09/2022.08-PCC-PCC-53-RMCP.pdf); [LSSA guide](https://www.lssa.org.za/wp-content/uploads/2025/10/Final-Draft-RMCP-Guidelines-6-5-25-Final.pdf)). The FIC also says a one-person firm "does not need a 200-page document" ([Moonstone](https://www.moonstone.co.za/fic-urges-businesses-to-simplify-compliance-focus-on-risks-not-paperwork/)). Target: 12-25 pages for a sole practitioner (my estimate).
2. **"Get it approved properly and filed on time."** Approval documented and included in the filed PDF ([GN 7B, para 181L](https://www.fic.gov.za/wp-content/uploads/2026/08/Guidance-Note-7B-%E2%80%93-Implementation-of-various-aspects-of-the-FIC-Act.pdf)); PDF named with the approval date; filed by 9 Oct (items 1, 2, 9, 11) or 31 Oct (items 3, 14, 20, 21, 22) each year ([Directive 12, Annexure A](https://www.fic.gov.za/wp-content/uploads/2026/09/Directive-12-On-the-submission-of-risk-management-and-compliance-programmes.pdf)).
3. **"Tell me when I must file again."** The 10-day rule after any later approval, 90 days for new institutions, Directive 10 location updates, registration changes, the yearly review.
4. **"Show that I actually do what my RMCP says."** "No RMCP" and "RMCP not FICA-compliant" are the FIC's top inspection findings; KR Inc was fined R3.8m for no documented and implemented RMCP and R3.9m for no TFS screening ([Moonstone](https://www.moonstone.co.za/r7-7m-fine-stands-as-fic-appeal-board-rules-against-law-firm/); [Moonstone on FIC AR 2025/26](https://www.moonstone.co.za/?p=61901)).
5. **"Have everything ready when the inspector calls."** One pack: current RMCP, approval, history, filing proof, risk assessment, staff acknowledgements, training.
6. **Accountant: "Run this for my 30 clients without sharing their goAML logins."**
7. **"Check the RMCP I already have."** Many firms already hold an RMCP from a template, Moonstone or a consultant; GN 7B (Aug 2026) means most need revising ([nCino KYC blog](https://blog.kycafrica.ncino.com/fic-updates-directive-10-draft-directive-12-guidance-note-7b)). A gap check is the natural entry point (v1).

## Feature map (MVP / v1 / later)

### Legal requirements that drive features

All from the 01 file's reading of the primary texts.

| # | Requirement | Source | Feature |
|---|---|---|---|
| R1 | RMCP must cover s42(2)(a)-(s), including PF (since 31 Dec 2022) and group-wide programmes (qA) | [FIC Act s42](https://www.acts.co.za/financial-intelligence-centre-act-2001/42__risk_management_and_compliance_.php) | Clause library tagged by s42(2) letter; coverage table |
| R2 | State which s42(2) paragraphs do not apply and why, or what alternative controls exist | s42(2A); [GN 7B para 185A](https://www.fic.gov.za/wp-content/uploads/2026/08/Guidance-Note-7B-%E2%80%93-Implementation-of-various-aspects-of-the-FIC-Act.pdf) | "Not applicable because..." clauses driven by answers; never silently omitted |
| R3 | Approval by board/senior management/highest authority; not delegable; RMCP sent to the FIC must include the approval | s42(2B); GN 7B paras 181C-E, 181L | Approval minute generator; approval page embedded in the PDF |
| R4 | Review at regular intervals; reviews and amendments documented and approved; FIC recommends annual review | s42(2C); GN 7B para 190; [PCC 53 para 2.4](https://www.fic.gov.za/wp-content/uploads/2023/09/2022.08-PCC-PCC-53-RMCP.pdf) | Version history; review task each year |
| R5 | Three-part structure: Part 1 risk identification and assessment (incl. risk appetite), Part 2 mitigation, Part 3 monitoring of control effectiveness; entity-wide assessment first; reflect national and sector risk assessments | GN 7B paras 183A-183E | Fixed document skeleton; business risk assessment module |
| R6 | Comprehensive; documents not referenced in it are not part of it; no mere cross-references | GN 7B paras 181G, 183G; feedback note para 23 | All annexures inside the one PDF; no "see our CDD manual" clauses |
| R7 | Describe approvers, compliance function, seniority and experience; training, board reporting, risk method, escalation, onboarding, monitoring | GN 7B paras 184-184A | Governance block in the interview |
| R8 | Risk-assess new products, services, channels and technologies before launch | GN 7B para 37A | "New product" questions and a reusable assessment form |
| R9 | Client risk matrix: client, product/service, geography, channel, other; scores 1-3; totals map to SDD / standard / EDD; automatic high risk (e.g. FPPO) and automatic decline (TFS-listed) | PCC 53 para 3 and Table 1 | Matrix generated into the RMCP; (v1) per-client calculator |
| R10 | File yearly via goAML by 9 Oct or 31 Oct; new institutions within 90 days of starting business; any update approved after the yearly period within 10 days of approval; one RMCP per Org ID | [Directive 12, paras 5-8 and Annexure A](https://www.fic.gov.za/wp-content/uploads/2026/09/Directive-12-On-the-submission-of-risk-management-and-compliance-programmes.pdf); feedback note paras 5-7, 28-30 | Deadline engine per Org ID |
| R11 | PDF named `YYYYMMDD_RMCP.pdf` with the approval date; upload in goAML "My Org Details"; type "RMCP submission" in comments to activate the button | [FIC graphic](https://www.fic.gov.za/wp-content/uploads/2026/10/HTSRMCP.png); [FIC notice, 9 Oct 2026](https://www.fic.gov.za/2026/10/09/important-information-on-submission-of-rmcp-submissions-9-october-2026/) | File naming; step-by-step filing checklist |
| R12 | FIC issues an acknowledgement of receipt | [FIC notice, 9 Oct 2026](https://www.fic.gov.za/2026/10/09/important-information-on-submission-of-rmcp-submissions-9-october-2026/) | Store the acknowledgement as filing proof |
| R13 | Group-wide RMCP: submit extracts as annexures | Feedback note para 33 | Group extract option (later) |
| R14 | Locations: head office, each branch and subsidiary, with licence no., registration no., address and compliance contact; existing registrants within 90 days (29 Oct 2026 by the 01 file's count; GoLegal says 31 Oct ([GoLegal](https://www.golegal.co.za/?p=74912))), changes within 90 days | [Directive 10, para 5](https://www.fic.gov.za/wp-content/uploads/2026/07/Directive-10-On-information-pertaining-to-geographic-locations.pdf) | Location register (v1) |
| R15 | Registration details kept current; changes within 90 days | [FIC Act s43B](https://www.acts.co.za/financial-intelligence-centre-act-2001/43b__registration_by_accountable_institution_and_reporting_institution.php) | Registration-change task |
| R16 | Records 5 years; third-party record keepers allowed but particulars must go to the FIC; electronic or cloud records allowed, but keep copies in SA if foreign storage could restrict access | [s23](https://www.acts.co.za/financial-intelligence-centre-act-2001/23__period_for_which_records_must_be_kept.php); [Reg 20](https://www.acts.co.za/financial-intelligence-centre-act-2001/r1595_20__particulars_of_third_parties_keeping_records.php); GN 7B paras 168-174 | Record-keeping questions; a Reg 20 notice reminder if the firm uses a cloud store; 5-year retention of our own records |
| R17 | Employee screening for competence and integrity, and against TFS lists; record method and outcome | [Directive 8](https://www.acts.co.za/financial-intelligence-centre-act-2001/n3257_2__directive.php) | Employee screening clauses (MVP); screening log (v1) |
| R18 | RCR: one per Org ID; compliance officer submits; no third-party submission; no amendment after submission; download a copy | [Directive 11](https://www.fic.gov.za/wp-content/uploads/2026/03/Directive-11-%E2%80%93-Risk-and-compliance-return.pdf); [PCC 60](https://www.fic.gov.za/wp-content/uploads/2026/06/2026.6-PCC-60-RCR-_On-RCR-Submission.pdf) | RCR workbook (v1, only if a 2027 RCR is called) |

### Feature map

| Module | MVP (built weeks 1-3, sold from 1 Dec 2026) | v1 (Dec 2026 - Jun 2027) | Later |
|---|---|---|---|
| Accounts and roles | Organisation = one FIC Org ID; roles approver, compliance officer, staff, consultant; MFA; invite by e-mail | Bulk invites; client self-service approval link | SSO for larger firms |
| Accountant portfolio | List of client entities with item, deadline, RMCP status, last approval, 10-day clock; CSV import of entities | White-label PDF header and cover; per-client billing or bundle; portfolio export | Partner API |
| Interview | 50-70 questions in 9 blocks (profile, governance, services, clients, geography, channels, payments and cash, controls in place, new products); branching by sector and size; "why we ask" with the legal reference; save and resume; answer history | Pre-fill from the gap check; "what changed since last year" mode | Afrikaans UI (if asked for) |
| Business risk assessment | Inherent risk per factor (client, product/service, geography, channel, other, plus TF and PF); scores and narrative drafted from answers; editable text; risk appetite statements | Sector risk assessment and NRA references updated per content release | Peer benchmarks (anonymised) |
| RMCP generator | Clause library for items 1 and 2; GN 7B three-part skeleton; s42(2) coverage table (annexure); "not applicable because" clauses; client risk matrix (PCC 53 style); risk indicators annexure; DOCX and PDF; content version and reviewer stamp on every document | Items 11, 20, 22 sector packs; group-wide extract option | Items 3 (estate agents, if merged with that idea) and 9 |
| Approval | Approval minute or resolution (sole practitioner, partners, directors); in-app approval with typed name, timestamp and document hash; or upload a wet-signed scan; approval page merged into the final PDF | Approval by several approvers in sequence | Qualified e-signature (unlikely to be needed) |
| Versions | Immutable versions; diff view between versions; "approved on" date drives the clocks | Change log written as plain-English summary | |
| Filing pack | `YYYYMMDD_RMCP.pdf` file; goAML step list with screenshots; "mark as filed"; upload of the FIC acknowledgement | Filing status for Directive 10 and registration changes | goAML XML for cash threshold reports, if the FIC gives batch access (see Data sources) |
| Deadlines and reminders | Rules for Directive 12 groups, 10-day amendment clock, 90-day new institution clock, yearly review date; e-mail reminders at 30/14/7/2/1 days; weekly digest; calendar (.ics) feed | Directive 10 and s43B 90-day clocks; RCR window (when announced) | SMS or WhatsApp reminders |
| Staff | People list; "read and acknowledged" record per version (s42(3)) | Training register and one short course with quiz and certificate (s43); Directive 8 screening log | Paid CPD-style courses (if bodies allow) |
| Screening | — | TFS name check of staff and clients against the FIC list (XML), with saved evidence and re-check when the list changes | PEP data source (paid) |
| Gap check | Free 15-question "RMCP health check" on the website (lead magnet) | AI review of an uploaded RMCP against the s42(2) / GN 7B / PCC 53 rubric, with page references and a fix list | |
| RCR | — | Workbook that follows the FIC sector questionnaire numbering, pre-filled where the interview already knows the answer; PDF for the compliance officer to key in | |
| Inspection pack | One ZIP and one merged PDF: current RMCP, approval, version history, filing proofs, risk assessment, acknowledgements, index | Adds training, screening logs, location register, RCR copy | Time-limited read-only link |
| Law watch | Internal: daily poll of the FIC RSS feed; new items create a content-review ticket | Customer notices: "this change affects your RMCP" with a suggested re-approval | |
| Billing | Card checkout via merchant of record (see the 05 payments file), per Org ID; yearly plans | Accountant bundles | |

### Why this cut

- The MVP covers jobs 1-3 and 5-6 fully. These are what the yearly filing, the 10-day rule and inspections test.
- Items 1 and 2 first. Item 1 is the largest small-firm segment (9,307 firms, 75% sole practitioners) ([LSSA statistics](https://www.lssa.org.za/about-us/about-the-attorneys-profession/statistics-for-the-attorneys-profession/)). Item 2 is mostly accounting practices, which are both buyers and the channel to items 11 and 20 (02 file). Both file by 9 Oct, so pack quality matters more than launch date: the next yearly peak is Sep-Oct 2027. New institutions (90 days), late filers and amendments buy all year.
- Items 11, 20 and 22 come in v1. Each needs its own services, indicators and risk factors, and its own expert review. Item 20 overlaps the A1 dealer idea; build that pack once.
- Client-level CDD (ID documents, beneficial owners) stays out. It brings heavy POPIA duties and competes with nCino KYC, eFICA and VerifyNow, which do it already (02 file). The RMCP says how the firm does CDD; the product does not do the CDD.
- The AI gap check waits for v1 because its rubric must be reviewed by the attorney first, and the core generator must be stable.

### What competitors already do, and where the MVP must be better

From the 02 file's competitor table, checked against public pages.

| Capability | VerifyNow free generator | eFICA (Builder from Nov 2026, R3,500/yr; free RMCP Manager) | Moonstone toolkit (R4,995 once) | This MVP |
|---|---|---|---|---|
| Questionnaire that writes an RMCP | Yes, few inputs listed; PDF ([VerifyNow](https://www.verifynow.co.za/tools/rmcp-generator)) | Builder announced ([efica.co.za](https://efica.co.za/)) | No, Word template | Yes, 50-70 branching questions per sector |
| Shows which s42(2) element each section covers, and "not applicable because" | Not mentioned | Not mentioned | No | Yes (coverage table annexure) |
| Approval record embedded in the filed PDF | Not mentioned | Not mentioned | No | Yes |
| Versions and change log | Not mentioned | Yes (RMCP Manager) | No | Yes, with diffs |
| goAML file name and filing checklist, acknowledgement stored | Not mentioned | Lists the deadlines and the 10-day rule | No | Yes |
| 10-day and 90-day clocks, yearly review | No | Not confirmed | No | Yes |
| Many client entities in one login (accountants) | No | Not confirmed | No | Yes |
| Inspection pack | No | Not confirmed | No | Yes |
| Non-law sector packs (credit providers, dealers, crypto) | Generic | Lists several sectors | Generic | v1 |

The MVP must not be "another generator". Its edge is the filed-and-provable year: approval, clocks, portfolio and evidence.

## Key flows

### Flow 1: First RMCP for a sole practitioner (target: under 60 minutes, no help)

1. Sign up (e-mail, password, MFA). Pick "I run my own firm" or "I am an accountant or consultant".
2. Organisation: legal name, FIC Org ID, Schedule 1 item (one Org ID per item registration; feedback note para 7), date business started, number of attorneys and staff, branches. The app sets the deadline group (9 Oct or 31 Oct) and, if business started less than 90 days ago, the new-institution clock.
3. Interview, 30-40 minutes. Each question shows "why we ask" and the s42(2) letter or GN 7B paragraph it serves. Example branches: conveyancing yes/no; trust account investments; company formation; foreign clients; cash accepted and limits; non-face-to-face onboarding; KYC tool used; where records are kept (cloud or third party triggers the Reg 20 question).
4. Risk review screen: a table of risk factors with inherent ratings and two-line reasons, plus the overall rating and risk appetite. The user can edit each narrative. The app warns if an edit contradicts an answer.
5. Draft preview with a coverage panel: every s42(2) element shows "covered in section X" or "not applicable because ...". Gaps block approval.
6. Approval: the app generates the approval page. The practitioner approves in-app (name, capacity, date, document hash) or prints, signs and uploads the scan.
7. Filing pack: download `YYYYMMDD_RMCP.pdf` (approval date). Follow the goAML steps: My Org Details, type "RMCP submission" in the comment (the submit button stays inactive without a comment), attach, submit ([FIC graphic](https://www.fic.gov.za/wp-content/uploads/2026/10/HTSRMCP.png); [FIC notice](https://www.fic.gov.za/2026/10/09/important-information-on-submission-of-rmcp-submissions-9-october-2026/)). Upload the FIC acknowledgement (e-mail or goAML message-board screenshot) when it arrives; the app keeps reminding until it is stored.
8. Done screen: next deadlines set (yearly review, next 9 Oct, 10-day rule armed). Staff get a link to read and acknowledge.

### Flow 2: Amendment and the 10-day rule

1. Something changes (new service, new branch, new compliance officer). The user edits an answer or a narrative.
2. The app shows which sections change and creates a draft version.
3. On approval, if the approval date is after this year's Directive 12 deadline, the app starts a 10-day filing clock (Directive 12 para 8) and builds a new filing pack. If approval is before the deadline, it folds into the yearly filing.
4. Reminders at day 3, 7 and 9. Whether "days" means calendar or business days is not stated; the app uses calendar days (conservative; see Open questions).

### Flow 3: Yearly cycle

1. 60 days before the deadline: "review your RMCP" task with a "what changed since last year" wizard (only changed answers).
2. Re-approval records the review even if nothing changed (s42(2C), GN 7B para 190).
3. Filing pack, upload, acknowledgement. Dashboard shows "filed for 2027".

### Flow 4: New institution

1. Org setup with "started business on" date. The app shows the 90-day RMCP clock (Directive 12 para 7) and reminds the user that goAML registration itself is due within 90 days of opening (Reg 27A, per the [01 file](01-law-and-requirements.md)), with a link to the FIC's registration guideline ([FIC](https://www.fic.gov.za/wp-content/uploads/2023/12/User-guide-%E2%80%93-How-to-register-with-the-FIC-as-an-accountable-institution.pdf)).
2. Same as Flow 1. A "new practice starter" plan fits the LEAD Practice Management Training channel in the 02 file.

### Flow 5: Accountant with many clients

1. Add clients one by one or by CSV (name, Org ID, item, contact).
2. For each client: run the interview with the client on a call, or send the client a link to answer.
3. The client's approver approves through a secure link. The accountant cannot approve for the client (GN 7B para 181C-E).
4. The accountant downloads the filing pack and sends it to the client. The client uploads with its own goAML credentials (sharing is prohibited; KR Inc was fined R20,000 partly for credential sharing ([Moonstone](https://www.moonstone.co.za/r7-7m-fine-stands-as-fic-appeal-board-rules-against-law-firm/))). The client or accountant uploads the acknowledgement.
5. Portfolio table: filter by "due in 30 days", "10-day clock running", "not filed".

### Flow 6: Inspection notice

1. User clicks "I have an inspection".
2. The app builds the pack: current approved RMCP (with approval), all earlier versions and approvals, filing proofs and acknowledgements, the risk assessment, staff acknowledgements, and (v1) training and screening logs and the location register. An index page lists each item and its date.
3. Download ZIP and merged PDF.

### Flow 7: Gap check (v1)

1. Upload an existing RMCP (PDF or DOCX).
2. The app extracts text and asks an LLM to test it against a fixed, attorney-approved rubric: each s42(2) element, GN 7B Parts 1-3, approval evidence, no external references, PF and new-products coverage, PCC 53 themes.
3. Output: a traffic-light table with page references and quotes, and a "fix with the interview" button that pre-fills answers the model found. The user confirms every pre-filled answer. Nothing is generated from the old text.

## Screens (described)

1. **Dashboard (per organisation).** A horizontal "FIC year" line: RMCP status (draft, approved, filed, acknowledged), next deadline with days left, 10-day clock if running, review date, Directive 10 status (v1). Cards for open tasks.
2. **Portfolio (accountant).** Table of client entities: name, Org ID, item, deadline group, RMCP version, approved on, filed on, next due, flags. Bulk actions: send interview link, send reminder.
3. **Organisation setup.** Legal name, Org ID, item, start date, registration numbers (CIPC, LPC or Fidelity Fund certificate, NCR), people and roles.
4. **Interview.** Left: blocks with progress. Centre: one question group at a time, plain-English help, "why we ask" with the legal reference, examples. Right: "how this changes your RMCP" preview line.
5. **Risk assessment review.** Factors as rows (client, product/service, geography, channel, other, TF, PF), inherent rating 1-3, reasons, mitigations, residual rating, editable narratives, overall rating, risk appetite.
6. **Draft and coverage.** Document preview by section. Side panel: s42(2)(a)-(s) checklist with section links or "not applicable" reasons; GN 7B checks (three parts, approval page, no external references, PF covered, new-products covered).
7. **Approval.** Approvers, capacity, method (in-app or upload scan), the exact document hash being approved, confirmation text.
8. **Filing pack.** Download button with the correct file name, numbered goAML steps with screenshots, "mark as filed" date, upload acknowledgement.
9. **Versions.** List with status and dates; side-by-side diff of any two versions.
10. **Deadlines.** Calendar and list; .ics subscribe link.
11. **People.** Approvers, compliance officer, staff; acknowledgement status per version; (v1) training and screening.
12. **Inspection pack.** Checklist of included items, build button, download.
13. **Billing and plan.** Plan per Org ID, invoices from the merchant of record.
14. **Public health check (website).** 15 questions, score and top 5 gaps, e-mail capture.
15. **Internal content console.** Content releases, reviewer sign-offs, clause book PDF, golden-file diff report, law-watch tickets.

## Data sources and integrations

| Source | What it gives | Access, format, cost | How the product uses it |
|---|---|---|---|
| **goAML web** ([portal](https://goweb.fic.gov.za/goAMLWEb_PRD/Home)) | Registration, RMCP upload, reports, RCR access | Web only for the RMCP: attach the PDF in "My Org Details", type "RMCP submission" in the comment, submit ([FIC graphic](https://www.fic.gov.za/wp-content/uploads/2026/10/HTSRMCP.png); [FIC notice](https://www.fic.gov.za/2026/10/09/important-information-on-submission-of-rmcp-submissions-9-october-2026/)). PDF only, named for the approval date; no file-size limit published (searched FIC, Moonstone, Accounting Weekly and Acts Online pages). The FIC runs goAML version 5.4; its guides say report receipts appear on the goAML message board, which may also apply to RMCP acknowledgements (unverified) ([FIC goAML 5.4 guide](https://www.fic.gov.za/wp-content/uploads/2025/09/goAML-V5.4-Additional-Information-File-Transaction-User-Guide-V1.2-3-September-2025.pdf)). No public API found. Credentials may not be shared ([PCC 60, para 4.11](https://www.fic.gov.za/wp-content/uploads/2026/06/2026.6-PCC-60-RCR-_On-RCR-Submission.pdf)). Free | No integration. The product never logs in to goAML. It prepares the file and the steps, and stores the acknowledgement (e-mail or message-board screenshot) |
| goAML registration | New institutions register within 90 days of opening | FIC registration guideline PDF ([FIC](https://www.fic.gov.za/wp-content/uploads/2023/12/User-guide-%E2%80%93-How-to-register-with-the-FIC-as-an-accountable-institution.pdf)) | Link and checklist in the new-institution flow |
| goAML report upload (STR/CTR) | Bulk reporting | An FIC presentation says batch XML uploads exist for high-volume reporters by arrangement with the FIC (secondary summary, 2019; unverified for 2026) ([regalert summary](https://regalert.today/document/34322b55-1b86-4cf0-996f-24713dab8379)) | Later only: a cash threshold report helper for dealers |
| **RCR platform** | Yearly or ad-hoc risk and compliance return | Completed online on the FIC's RCR platform ([Directive 11, para 5.4](https://www.fic.gov.za/wp-content/uploads/2026/03/Directive-11-%E2%80%93-Risk-and-compliance-return.pdf)); the LPC told attorneys it runs through goAML ([LPC notice](https://lpc.org.za/wp-content/uploads/2026/07/Advisory-Notice-Risk-and-Compliance-returns.pdf)). Manual entry; no upload. Directive 11 covered only the 2026 return | v1 workbook, only if a new RCR is called |
| **FIC sector questionnaires** | The RCR questions per sector (e.g. legal practitioners: Parts 1-4, about 110 questions) | PDF ([legal practitioner questionnaire](https://www.fic.gov.za/wp-content/uploads/2026/05/Legal-practitioner-questionnaire.pdf)) | Map question numbers to interview answers; link to the FIC PDF rather than copy it (copyright, see below) |
| **FIC publications feed** | New directives, PCCs, guidance notes, notices | RSS 2.0 at [fic.gov.za/feed](https://www.fic.gov.za/feed/) worked on 10 Oct 2026 and listed Directive 12, GN 7B, Directive 10, draft PCC 126 and the 9 Oct RMCP notice. Free | Daily law-watch job; each new item opens a content-review ticket |
| **FIC TFS list** | UN Security Council consolidated list as applied in SA | [FIC TFS page](https://www.fic.gov.za/targeted-financial-sanctions/): download in PDF, Excel and XML; updated within 24 hours of UNSC changes; online search at [tfs.fic.gov.za](https://tfs.fic.gov.za/Pages/Search); e-mail subscriptions; latest notice seen dated 7 Oct 2026 ([tfs.fic.gov.za](https://tfs.fic.gov.za/)). No API found. Free | v1 screening log: import the XML daily, fuzzy match staff and client names, store the result and list version as evidence |
| **Legislation** | FIC Act, MLTFC Regulations, POPIA | Gazette PDFs (primary); consolidated text on Acts Online ([acts.co.za](https://www.acts.co.za/financial-intelligence-centre-act-2001/)), a commercial publisher | Clauses cite section numbers; links only; no scraping of Acts Online |
| **FIC guidance** | GN 7B, PCC 53, PCC 60, sector risk reports, PCC 47A indicators | PDFs on fic.gov.za. GN 7B and the PCCs allow reproduction only unaltered and for non-commercial use within the institution (01 file). Sector risk reports exist for legal practitioners, estate agents and Krugerrand dealers ([Moonstone](https://www.moonstone.co.za/fic-releases-risk-reports-for-krugerrand-dealers-estate-agents-and-lawyers/)) | Our own clause text, written from the guidance and citing paragraph numbers. Statutory text may be quoted: SA copyright does not subsist in "official texts of a legislative, administrative or legal nature" (Copyright Act s12(8)(a), quoted by [Wits library guide](https://libguides.wits.ac.za/LegalDeposit/Copyright)); whether guidance notes count as such is unverified |
| LSSA RMCP guide | Attorney-specific guidance (draft, May 2025, 55 pages) | [LSSA PDF](https://www.lssa.org.za/wp-content/uploads/2025/10/Final-Draft-RMCP-Guidelines-6-5-25-Final.pdf); LSSA copyright (unverified terms) | Reference for the item 1 pack; no copying |
| CIPC, LPC, NCR registers | Company, practitioner and credit-provider details | No free public API found (unverified) | Manual entry of registration numbers in the MVP |
| **Payments** | Card checkout, subscriptions, invoices, VAT | Merchant of record (Paddle) or Stripe; see the 05 payments file | Webhooks set the plan per Org ID |
| **E-mail** | Reminders, invites, approval links | Postmark Basic about US$15 a month for 10,000 e-mails (third-party price guides: [emailsoftwareinsights](https://www.emailsoftwareinsights.com/reviews/postmark/pricing/); [automationatlas](https://automationatlas.io/answers/postmark-pricing-explained-2026/)) | SPF, DKIM, DMARC on our domain |
| **Claude API** (v1 gap check; also used in content drafting) | Reads an uploaded RMCP and returns structured findings | Claude Sonnet 5.5 at US$2 input / US$10 output per million tokens; Haiku 5.5 US$0.10 / US$0.50; Opus 5.5 US$4 / US$20 (Anthropic model table, cached 6 Oct 2026; [claude.com/pricing](https://claude.com/pricing)). Batch API about 50% cheaper. Commercial terms say Anthropic may not train on customer content ([Anthropic commercial terms](https://www.anthropic.com/legal/commercial-terms)) | A 30-page RMCP is roughly 20,000-30,000 tokens in and 3,000-6,000 out (incl. reasoning), so about US$0.10-0.15 on Sonnet 5.5 per check (my estimate) |
| E-signature | Approval | ECTA requires an "advanced" e-signature only where a law requires a signature and does not specify the type ([CMS guide](https://cms.law/en/int/expert-guides/cms-expert-guide-to-e-signatures-in-commercial-contracts/south-africa); [Adobe summary](https://helpx.adobe.com/legal/esignatures/regulations/south-africa.html)). The FIC Act requires approval, not a signature (my reading; confirm with the attorney) | In-app approval record plus optional wet-signed scan. No paid e-signature vendor in the MVP |

**What the portals leave undone (the product's reason to exist).**
- goAML: no drafting, no tailoring, no approval record, no version history, no 10-day clock, no multi-entity view, no reminder ([FIC graphic](https://www.fic.gov.za/wp-content/uploads/2026/10/HTSRMCP.png)).
- RCR platform: no preparation sheet, no link to the RMCP, and the FIC flagged errors such as RMCPs uploaded instead of RCRs ([Moonstone](https://www.moonstone.co.za/fic-flags-filing-errors-as-rcr-deadline-closes/)).
- FIC TFS search: one name at a time, no saved evidence trail (my reading of the search page; unverified).
- Free generators (VerifyNow): a PDF from a few inputs; the page mentions no approval record, versions, reminders or goAML naming ([VerifyNow](https://www.verifynow.co.za/tools/rmcp-generator)).

## Data model

### Main entities

| Entity | Key fields | Notes |
|---|---|---|
| `Account` | name, billing contact, type (firm / accountant practice), merchant-of-record customer ID | The paying customer |
| `User` | e-mail, name, MFA secret, last login | |
| `Membership` | user, organisation, role (approver / compliance_officer / staff / consultant / reviewer), granted_by, expires_at | A consultant has memberships in many organisations |
| `Organisation` | legal name, trading name, FIC Org ID, Schedule 1 item, Directive 12 group (derived), business start date, goAML registration date, CIPC / LPC / NCR numbers, group parent (optional), sector pack | One per FIC registration (one Org ID per item; feedback note para 7) |
| `Location` (v1) | organisation, type (head office / SA branch / foreign branch / subsidiary head office / subsidiary branch), name, licence no., registration no., address, compliance contact, effective from/to | Directive 10 para 5.1 |
| `Person` | organisation, name, role(s), e-mail, appointed on, seniority and experience text | Approvers, compliance officer, staff |
| `ContentRelease` | version (e.g. 2026.11.1), sector packs included, legal basis date, reviewer, signed-off date, clause book PDF hash | Immutable. Every generated document points to one |
| `Question`, `Clause`, `Rule` | stored in git (YAML/Jinja), loaded per release; IDs stable across releases; each clause has s42(2) letter(s), GN 7B / PCC refs, conditions | Content as code |
| `AnswerSet` | organisation, content release, answers (JSONB keyed by question ID), created_by, created_at | New row per edit session; never overwritten |
| `RiskAssessment` | answer set, factor scores, narratives (generated and edited), overall rating, appetite text | |
| `RmcpVersion` | organisation, number, status (draft / approved / superseded), answer set, risk assessment, content release, DOCX and PDF file refs and SHA-256, coverage map (JSONB), page count | Immutable once approved |
| `Approval` | RMCP version, person, capacity, method (in-app / scan), approved_at, IP, document hash, scan file ref | Several per version if several approvers |
| `Filing` | organisation, kind (rmcp_annual / rmcp_amendment / rmcp_new / d10 / registration_change / rcr), cycle year, due date, rule ID, RMCP version, filed_at, acknowledgement file, FIC reference | |
| `Task` | organisation, type, due date, source rule, status, reminders sent | Generated nightly from rules |
| `Acknowledgement` | person, RMCP version, read_at | s42(3) evidence |
| `TrainingEvent`, `Attendance` (v1) | date, topic, trainer, duration; person, result | s43 evidence |
| `ScreeningRun`, `ScreeningHit` (v1) | list version and date, names checked, matches, reviewer decision and reason | Directive 8 and TFS evidence |
| `GapCheck` (v1) | uploaded file, rubric version, model, findings (JSONB), cost | |
| `Document` | storage key, type, SHA-256, created_by | All files |
| `AuditEvent` | actor, organisation, action, object, time, previous-hash | Append-only, hash-chained |
| `Subscription` | account, organisation(s), plan, provider IDs, status, renews_on | |

### Key rules in the model

- **Deadline rules are data with tests.** `RMCP_ANNUAL`: due 9 Oct for items 1, 2, 9, 11 and 31 Oct for items 3, 14, 20, 21, 22, every year ([Directive 12, Annexure A](https://www.fic.gov.za/wp-content/uploads/2026/09/Directive-12-On-the-submission-of-risk-management-and-compliance-programmes.pdf)). `RMCP_AMENDMENT`: approval date + 10 days when approval is after the yearly deadline (para 8). `RMCP_NEW`: business start + 90 days (para 7). `D10_INITIAL`: about 29 Oct 2026 for existing registrants; `D10_CHANGE` and `REG_CHANGE`: change date + 90 days. `REVIEW`: last approval + 12 months (FIC recommendation in PCC 53 para 2.4). If a deadline falls on a weekend, the app shows the earlier working day as the target (conservative choice; the directive does not say).
- **Approved versions are frozen.** Any change makes a new draft. The approval binds to the SHA-256 of the exact PDF.
- **Generated text is reproducible.** Same answer set + same content release = byte-identical DOCX (except timestamps). This makes golden-file tests possible and lets us prove later what the customer saw.
- **Tenant scoping.** Every tenant row carries `organisation_id`; consultants work in one organisation at a time.

## Architecture and stack

### Recommendation: one boring monolith, built for AI agents

- **Language and framework:** Python with Django 5.2 LTS ([Django downloads](https://www.djangoproject.com/download/)). Reasons: the admin covers the internal console; mature auth, forms and permissions; the best document libraries are Python; AI coding agents write conventional Django reliably (my judgement). The sibling deep dives use the same stack, so code and lessons can be shared.
- **Front end:** server-rendered HTML with HTMX and a little Alpine.js; Tailwind. No single-page app. The product is forms, lists and documents, and must work on a lawyer's old laptop and on a phone.
- **Database:** PostgreSQL (managed). JSONB for answers, coverage maps and findings. Row-level security as a second wall for tenant isolation.
- **Jobs:** a Postgres-backed queue (Procrastinate or Django-Q2), so no Redis. Jobs: nightly task generation; 07:00 SAST reminders; weekly digest; daily FIC feed poll; (v1) daily TFS list import and re-screen; document rendering on demand.
- **Content as code.** The question bank (YAML), clauses (Jinja2 Markdown with conditions), risk rules (YAML tables) and indicator lists live in a `content/` folder in git. A release script builds a **clause book PDF**: every clause, its conditions, its s42(2)/GN 7B references, and which personas trigger it. The FICA attorney reviews and signs that book, not the code. Tags mark each release.
- **Golden files.** 8 synthetic personas for the MVP (e.g. litigation-only sole practitioner; sole conveyancer; 5-attorney general practice with trust investments; 15-attorney firm with two branches; advocate with a trust account; accounting practice that forms companies; trust administrator; group company), 12+ in v1. Each persona's answers produce a committed DOCX text snapshot and coverage map. Any change shows as a diff in the pull request. Only the founder may update golden files, and content changes need a new attorney sign-off.
- **Documents:** docxtpl renders DOCX from a styled Word template ([docxtpl on PyPI](https://pypi.org/project/docxtpl/)); Gotenberg (LibreOffice in a container) converts to PDF ([Gotenberg](https://github.com/gotenberg/gotenberg)); pypdf merges the approval page and builds the inspection pack ([pypdf](https://pypi.org/project/pypdf/)). PDF/A output where Gotenberg supports it (it offers PDF/A conversion per its docs; unverified for our template).
- **Name matching (v1):** normalise names, trigram candidate search in Postgres, token-based scoring (rapidfuzz), store the score and the list version.
- **LLM use (v1):** Claude API for the gap check only, with structured output against a fixed rubric. Never for writing the RMCP text itself: generated RMCPs must be deterministic and attorney-reviewed.
- **Deploy:** Docker images on Fly.io; app and worker as separate process groups; managed Postgres; object storage for files. CI runs unit, rule (time-travel), golden-file, tenant-isolation and end-to-end (Playwright) tests on every merge.
- **Observability:** structured logs without personal data; Sentry (or self-hosted GlitchTip); uptime check; status page.

### Diagram

```
Browser (HTMX)
   |
Fly.io edge (TLS) -> Django web (ams)  ->  Fly Managed PostgreSQL (ams; RLS, backups)
                        |      ^                 ^
                        v      |                 |
                 Job workers (Postgres queue) ---+
                   |        |          |           |             |
          Gotenberg     Postmark   FIC RSS feed  FIC TFS XML   Claude API
         (DOCX->PDF)    (e-mail)   (law watch)   (v1 screening) (v1 gap check)
                   |
          Object storage (encrypted files) + nightly copy to a second provider

Outputs: RMCP DOCX/PDF (YYYYMMDD_RMCP.pdf), approval page, filing checklist,
inspection pack ZIP/PDF, .ics calendar. The user uploads to goAML; we never do.
```

### Why not something else

- **No-code or a Word template shop:** that is what Moonstone and the free templates already are (02 file). The value is in tailoring logic, versions, clocks and the portfolio view.
- **LLM-written RMCPs:** cheaper to build but unpredictable, hard to review and a liability risk. Keep LLMs to drafting content offline (reviewed by the attorney) and to the advisory gap check.
- **Microservices or a separate SPA:** one founder cannot run them well.

## Security, privacy and liability

### POPIA and our role

- **What personal information we hold.** MVP: users' names and e-mails; names, roles and experience of approvers, the compliance officer and staff; acknowledgement and approval records. v1 adds training records and names screened against the TFS list. No ID numbers or client CDD files are needed; the product should not ask for them.
- **Roles.** Each customer is the responsible party for its staff and client data; we are its **operator**. POPIA requires a written contract making the operator keep the information secure and notify the responsible party "immediately" of a compromise (s21); the Dis-Chem enforcement notice turned on a missing operator agreement and late breach notice ([Information Regulator, Dis-Chem notice](https://inforegulator.org.za/wp-content/uploads/2020/07/DIS-CHEM-ENFORCEMENT-NOTICE.pdf)). The responsible party must notify the Regulator and data subjects of a compromise (s22). We are the responsible party for our own account and billing data.
- **Cross-border.** If the founder's company is abroad, or data is hosted abroad, s72 allows transfers when the recipient is bound by law, binding corporate rules or a binding agreement giving adequate protection, among other grounds ([POPIA s72](https://source.acts.co.za/protection-of-personal-information-act-2013/72__transfers_of_personal_info.php)). Commentary says no SA adequacy list has been published (search summary of [MJK](https://mjkinc.co.za/agreements/cross-border-data-transfer-agreement), unverified). So: put s72-style transfer terms in the operator agreement, host with a GDPR-bound EU provider (Amsterdam) at launch, list sub-processors, and keep an SA-hosted option in reserve.
- **Does POPIA apply to a foreign vendor directly?** POPIA applies to responsible parties domiciled in SA, or those abroad that use automated means in SA; commentators call the second limb uncertain ([ENSafrica](https://www.ensafrica.com/news/detail/4855/extraterritorial-application-gdpr-vs-popia)). Our customers are SA responsible parties, so they will require POPIA terms from us anyway. Whether our company must register an Information Officer with the Information Regulator is for the 04 file and a lawyer (unverified).
- **FICA record rules.** GN 7B accepts electronic and cloud records, but asks for copies in SA if storage abroad could restrict access, and for an assessment of third-party storage providers ([GN 7B, paras 168-174](https://www.fic.gov.za/wp-content/uploads/2026/08/Guidance-Note-7B-%E2%80%93-Implementation-of-various-aspects-of-the-FIC-Act.pdf)). Using our product to keep compliance records may make us a third-party record keeper whose particulars the customer must give the FIC (s24, Reg 20) ([Reg 20](https://www.acts.co.za/financial-intelligence-centre-act-2001/r1595_20__particulars_of_third_parties_keeping_records.php)) (my reading; unverified). The product should (a) tell customers to download every approved PDF and acknowledgement, (b) offer a one-click full export, (c) publish a ready Reg 20 particulars sheet about us, and (d) state in writing that access will never be restricted and that a full export is always available.
- **Tipping-off.** The product does not hold STRs or suspicion cases. That keeps FICA disclosure rules out of scope (my design choice).
- **Retention.** Keep approved RMCPs, approvals and filing proofs for at least 5 years after the customer leaves, or hand them over in an export and delete on request. FICA's 5-year rule binds the customer (s23), so offer a cheap "archive only" plan rather than deleting a month after cancellation.
- **AI processing (v1).** The gap check sends the uploaded RMCP to Anthropic in the US. RMCPs hold few personal details (mainly officer names), but it is still a cross-border transfer: cover it in the operator agreement, let customers opt out, and do not send training records or screening data to the model. Default API retention is reported as 7 or 30 days (third-party; unverified).

### Security baseline (MVP)

- TLS everywhere, HSTS. MFA (TOTP) required for approvers, compliance officers and consultants.
- Argon2 password hashing, login rate limits, 30-minute idle timeout.
- Role checks in code plus Postgres row-level security; automated cross-tenant read tests in CI.
- Encryption at rest (provider disk and database); files in object storage with server-side encryption; signed, short-lived download links.
- Append-only, hash-chained audit log, shown to the compliance officer and included in the inspection pack on request.
- Daily encrypted backups plus point-in-time recovery; nightly copy to a second provider; monthly restore drill.
- Support access only with customer consent for a limited time, logged.
- Weekly dependency updates; secret scanning; an external security test before launch and yearly.
- AI-agent hygiene: agents work only on synthetic data; no production credentials in agent sessions; a review agent checks every pull request against a security checklist before the founder's review.
- Written policies (security, incident response, access, backups, sub-processors) that customers' due-diligence questionnaires will ask for.

### Liability and disclaimers

- **A tool with reviewed content, not legal advice.** The FIC itself says an upload proves format only, and that it gives no advice on materiality ([feedback note, paras 18-20 and 28](https://www.fic.gov.za/wp-content/uploads/2026/09/Consultation-feedback-note-Relating-to-draft-Directive-12-on-the-submission-of-RMCPs.pdf)). Every document shows "content release X, reviewed by [attorney] on [date]". The user confirms each answer and approves the result; the approval step says the approvers remain responsible (GN 7B para 181M says approvers can be sanctioned).
- **Terms:** liability capped at fees paid in the last 12 months; no liability for sanctions where the user's answers were wrong or the RMCP was not implemented; no promise of FIC acceptance; we do not file for the user.
- **Reserved work.** The Legal Practice Act reserves court appearances and drafting documents for court proceedings to legal practitioners, and bars others from holding themselves out as practitioners ([LPA s33](https://www.acts.co.za/legal-practice-act-2014/33__authority_to_render____)). An RMCP is not a court document, so selling the software and templates looks allowed (my reading; consultants and vendors such as eFICA and Moonstone already sell RMCP drafting, per the 02 file). The paid "attorney review" add-on should be a direct contract between the customer and an independent attorney, with us passing the referral only.
- **Copyright.** Do not copy FIC guidance or the LSSA guide into the product; write our own clauses and cite paragraphs. GN 7B and the PCCs restrict reproduction to unaltered, non-commercial use (01 file).
- **Change duty.** Promise content updates within 30 days of a relevant directive or guidance note, with a customer notice. This is also the renewal story.
- **Insurance.** Professional indemnity and cyber cover for the company (price unverified; 04 file).

## Hosting and running costs

### Choice: Fly.io Amsterdam at launch; an SA region only if buyers insist

- **Why not Johannesburg first.** Fly.io runs apps in Johannesburg (`jnb`), but its region list does not mark `jnb` for Managed Postgres. MPG regions include Amsterdam, Frankfurt and London ([Fly regions](https://docs.fly.io/reference/regions), checked 10 Oct 2026). Running the app in `jnb` against a database in Europe adds a round trip to every query; self-managing Postgres on a volume adds ops work for one founder. So start with the whole stack in Amsterdam (`ams`).
- **Prices.** Fly prices each region with a multiplier on its Ashburn base: `ams` about 1.04x, `lhr` 1.13x, `jnb` 1.30x ([Fly pricing](https://docs.fly.io/about/pricing)). In `ams` that is roughly US$7.70 a month for shared-cpu-2x 1 GB, US$13.90 for 2 GB and US$34 for performance-1x 2 GB (my calculation from Fly's Ashburn prices of US$7.39, US$13.39 and US$33). Managed Postgres: Basic (shared-2x, 1 GB) US$38 a month, Starter (2 GB) US$72, Launch (performance-2x, 8 GB) US$282, storage US$0.28/GB a month; all plans include high availability and backups ([Fly MPG docs](https://docs.fly.io/mpg)).
- **Is Europe acceptable?** Latency of roughly 150-200 ms to South Africa is fine for forms and document downloads (my estimate). POPIA s72 allows the transfer under a binding agreement with adequate protection ([POPIA s72](https://source.acts.co.za/protection-of-personal-information-act-2013/72__transfers_of_personal_info.php)), and the data is mostly business documents plus a few names. GN 7B asks for copies in SA if foreign storage could restrict access ([GN 7B, paras 172-173](https://www.fic.gov.za/wp-content/uploads/2026/08/Guidance-Note-7B-%E2%80%93-Implementation-of-various-aspects-of-the-FIC-Act.pdf)); every customer downloads the approved PDF and acknowledgement, and the export is one click.
- **SA option for later.** Vultr lists Johannesburg among its managed-database regions ([Vultr managed databases](https://www.vultr.com/products/managed-databases/)); prices for that region not confirmed. AWS (Cape Town) and Azure also have SA regions (not priced here). Hetzner has no SA region ([Hetzner cloud](https://www.hetzner.com/cloud/)). Move only if pilots or a channel partner make SA hosting a condition.

### Load assumptions (my estimates)

- One customer = one Org ID. A typical organisation stores 10-30 MB a year (DOCX/PDF versions, scans, acknowledgements). 1,000 customers = about 30 GB after a year.
- Peak load in late September and early October; a few hundred concurrent users at most at 1,000 customers. PDF rendering is the heaviest job (2-5 seconds each).
- Gap checks: about 1 per customer a year plus re-checks.

### Monthly running cost (my estimates, US$, excluding VAT and payment fees)

| Item | 50 customers | 300 customers | 1,000 customers |
|---|---|---|---|
| App machines (Fly `ams`) | 1 x shared-cpu-2x 1 GB: about 8 | 2 x shared-cpu-2x 2 GB: about 28 | 2 x performance-1x 2 GB: about 69 |
| Document worker (Gotenberg) | 1 x shared-cpu-2x 2 GB: about 14 | 1-2 machines: 14-28 | 2 machines: 28-50 |
| Managed Postgres | Basic 38 + storage 3 = about 41 | Starter 72 + storage: about 75 | Starter to Launch: 80-290 |
| Object storage and offsite backup copy | 2-5 | 5-10 | 10-25 |
| Transactional e-mail (Postmark) | 15 | 15-30 | 30-60 |
| Error tracking, uptime, status page | 0-26 | 26 | 26-80 |
| Claude API (gap checks, about US$0.15 each) | 1 | 4-10 | 15-30 |
| Domain, DNS, misc. | 5 | 5 | 10 |
| **Total** | **about 85-115** | **about 170-210** | **about 270-610** |
| Per customer per month | about 1.7-2.3 | about 0.6-0.7 | about 0.3-0.6 |

At R2,490 a year (02 file price), a customer brings about R207 a month, about US$12.5 at roughly R16.5 per US$ (mid-2026 rate, [currencyconvert.online](https://currencyconvert.online/usd/zar)). Infrastructure is about 14-18% of revenue at 50 customers, about 5% at 300 and 2-5% at 1,000. Moving to Johannesburg compute would add about 25% to the machine lines. Payment fees (merchant of record) are larger than hosting; see the 05 file. People and legal content are the real costs.

Not in the table: Claude Max for ongoing development (US$100-200 a month, see Budget), the attorney's content upkeep, and the yearly security re-test.

## Development plan (with agent work streams and calendar)

### Basis

- The founder builds with Claude Code and 4-6 agents in parallel, each in its own git worktree and branch. The founder writes specs, reviews every merge and owns integration. No hired developers.
- Tools: Claude Max "from US$100 a month", which includes Claude Code ([claude.com/pricing](https://claude.com/pricing)); the higher Max tier is commonly quoted at US$200 (unverified on the official page). Add API credits if parallel agents exceed plan limits.
- **Content is the bottleneck, not code.** The clause library for two sector packs, the question bank, the risk rules and the help texts need about 60-100 founder hours with Claude drafting from primary sources, plus 20-40 hours of FICA attorney review (my estimate).
- **Spec first.** Parallel agents are only safe with frozen interfaces. Week 1 fixes the data model, the content schema (question, clause, rule formats), the deadline rule interface, the persona fixtures and the document template.
- Start: **Monday 12 October 2026.**

### Agent work streams (parallel from week 2)

| Stream | Scope | Frozen inputs (week 1) | Done when |
|---|---|---|---|
| **A. Platform** | Auth, MFA, accounts, organisations, memberships and roles, RLS, audit log, consent-based support access, merchant-of-record webhooks, data export | Data model; role matrix | Cross-tenant tests pass; export produces every file and a JSON dump |
| **B. Interview engine** | Load questions from YAML; branching; validation; save and resume; "why we ask"; answer sets and history; consultant "send link to client" | Question schema; 9 blocks; sample questions | All 8 personas can be entered through the UI by a script; resume works |
| **C. Rules and risk** | Business risk scoring; risk appetite; client matrix generation; s42(2) coverage computation; "not applicable" logic | Rule table format; PCC 53 matrix; s42(2) element list | Every rule has passing and failing fixtures; coverage is 100% for all personas |
| **D. Documents** | Clause assembly (Jinja); docxtpl rendering; Gotenberg PDF; approval page merge; file naming; version diff; inspection pack; clause book builder | Word template; clause format; persona fixtures | Golden files stable; PDFs open in Acrobat and print on A4; file name matches the approval date |
| **E. Deadlines and notifications** | Deadline rules; task generation; e-mail reminders and digest; .ics feed; FIC RSS law-watch job | Rule interface; Directive 12 table; message templates | Time-travel tests fire every reminder type on the right day, incl. year rollover and weekend shifts |
| **F. UI** | All MVP screens; portfolio table; accessibility; phone layout; copy | Screen list; copy catalogue keys | Playwright flows 1-6 pass on desktop and phone sizes |
| **G. QA and security** (continuous) | Persona generator; end-to-end tests; threat model; dependency and secret scans; backup-restore script; review agent for pull requests | All of the above | Nightly full run green; restore drill documented |
| **H. Content** (founder + Claude, reviewed by the attorney) | Question bank; clause library for items 1 and 2; risk factors and indicators; help texts; goAML guide with screenshots; disclaimers | Content schema | Every clause has a source reference and a "checked on" date; clause book signed (LC2) |

Run 4-6 streams at once; more creates more review than one person can do well (my judgement).

### How the founder runs the agents

- One repository with a CLAUDE.md that fixes conventions: app layout, naming, "never edit golden files or `content/` without a ticket", "no personal data in logs", test commands.
- Each stream gets a one-page spec: goal, interfaces it may use, files it owns, acceptance tests, and the R-numbers (R1-R18 above) it serves.
- Tests first for rules (C, E) and documents (D). Golden files are the referee.
- A separate review agent checks each pull request against the spec and the security checklist before the founder reviews it.
- Merge daily. Nightly full run on synthetic data. Real pilot documents never enter agent sessions.
- Content drafting: Claude drafts clauses from the primary PDFs with a citation per clause; the founder checks each citation against the source; the attorney reviews the clause book.

### Calendar (start Monday 12 October 2026)

| Week (start) | Product, legal, pilots | Engineering (agent streams) | Checkpoint |
|---|---|---|---|
| 1 (12 Oct) | Engage a FICA attorney (content reviewer) and an accounting-practice compliance expert; agree scope and fixed fees. Book 10 interviews (5 sole practitioners, 3 accounting practices, 2 small firms) via LEAD/GoLegal/Accounting Weekly contacts (02 file). Collect 5-10 real RMCPs (redacted) as test material. Draft the s42(2) / GN 7B / PCC 53 requirement map | Repo, CI, Fly.io, Django skeleton, auth; data model; content schema; deadline rule interface; Word template; 8 persona fixtures | **Spec freeze (Fri 16 Oct)** |
| 2 (19 Oct) | Interviews 1-5. Question bank v0 and clause library v0 for item 1. Landing page and free health check live | Streams A-F in parallel; G continuous | Daily merges, CI green |
| 3 (26 Oct) | Interviews 6-10. Item 2 clauses. Use the Directive 10 (about 29 Oct) and 31 Oct RMCP deadlines for outreach and waitlist | First end-to-end run: interview to approved PDF to filing pack; integration | **MVP feature-complete (Fri 30 Oct)** |
| 4 (2 Nov) | Clause book v1 to the attorney. **Dry run:** 3 pilots rebuild their own RMCP in the app and compare | Bug bash; performance of PDF jobs; copy pass | **LC1:** attorney's first comments in |
| 5 (9 Nov) | Fix content; attorney second pass. Lawyer drafts terms, operator agreement (POPIA s21 and s72 terms), privacy notice | Fixes from the dry run; merchant-of-record checkout in ZAR | **LC2:** content release 1.0 (items 1 and 2) signed off |
| 6 (16 Nov) | **Pilots:** 10 firms (incl. 2 accountants with 3-5 clients each) use the app for real; at least 3 upload to goAML and receive the FIC acknowledgement | External security test (3-4 tester days) | |
| 7 (23 Nov) | Pilot feedback; pricing page; 3 short how-to videos | Fix findings; re-test; restore drill; monitoring | **LC3:** legal documents approved; no open high or critical findings |
| 8 (30 Nov) | **Paid launch Tue 1 Dec 2026**; pilots convert at a founder discount | Support; small fixes | **Sellable** |
| 9-11 (7 Dec - 8 Jan) | Light support over the December shutdown (Day of Reconciliation 16 Dec; Christmas; New Year) | v1 starts: item 11 and item 20 packs (shared with A1), Directive 10 register | |
| Jan-Mar 2027 | Accountant channel push (SAICA/SAIPA/SAIT CPD season); content packs reviewed | v1: gap check, training register, TFS screening log, white-label | **v1 live by 31 Mar 2027** |
| Apr-Aug 2027 | RCR workbook only if the FIC calls a 2027 RCR; item 22 pack; estate agents if merged | Hardening; load test for the September peak; second security test | |
| Sep-Oct 2027 | **Peak:** 9 Oct and 31 Oct deadlines | Hot fixes only | Count filings made through the app |

### Definition of done for the MVP (sellable on 1 Dec 2026)

1. At least 8 of 10 pilot users go from sign-up to an approved RMCP and filing pack without help; a sole practitioner does it in under 60 minutes, a 2-9 attorney firm in under 90.
2. For all 8 personas, the coverage map shows every s42(2)(a)-(s) element as covered or "not applicable because ..."; every RMCP has GN 7B Parts 1-3, an approval page and no references to outside documents.
3. Tailoring is visible: any two personas differ in at least 40% of paragraphs, and a sole practitioner's RMCP is 12-25 pages (my targets, to answer "template" objections).
4. The FICA attorney has signed content release 1.0 (LC2) and a mock inspection of 3 pilot RMCPs found no missing element.
5. At least 3 pilots uploaded the `YYYYMMDD_RMCP.pdf` to goAML and stored the FIC acknowledgement.
6. Time-travel tests pass for: 9 Oct / 31 Oct yearly deadlines, the 10-day amendment clock, the 90-day new-institution clock, the yearly review, year rollover.
7. Tenant-isolation tests pass; the security test has no open high or critical findings; a backup restore has been done.
8. Terms, operator agreement and privacy notice approved by a lawyer; disclaimers in the app and on every document.
9. Checkout works in ZAR; at least 5 pilots say they will pay the planned price (R2,490 a year solo; R900 per entity for accountants; 02 file).

### If time slips

- Drop the in-app approval and keep "print, sign, upload the scan". Drop the .ics feed and the digest.
- Launch with item 1 only and add item 2 in January.
- Never drop: the attorney sign-off, golden-file tests, tenant isolation, the security test, the 10-day clock.

## Budget

### Cash costs to a sellable product (founder unpaid; my estimates)

Exchange rate used: about R16.5 per US$ ([currencyconvert.online, Aug 2026](https://currencyconvert.online/usd/zar)).

| Item | Low (R) | High (R) | Basis |
|---|---|---|---|
| Claude Max, 2 months | 3,300 | 6,600 | US$100-200 a month ([claude.com/pricing](https://claude.com/pricing); US$200 tier unverified) |
| Extra API use (agent overflow, gap-check trials) | 800 | 5,000 | US$50-300, my estimate |
| FICA attorney: clause book review for items 1 and 2, two rounds, mock inspection | 40,000 | 140,000 | 20-40 hours at R2,000-R3,500; general SA attorney rates of R1,200-R4,500 an hour are quoted by a third-party guide ([Global Law Experts](https://globallawexperts.com/labour-lawyer-cost-south-africa/), unverified). Aim for a fixed fee |
| Compliance expert for the item 2 (accounting practice) pack and pilot support | 8,000 | 30,000 | 10-20 hours at R800-R1,500 (unverified) |
| Lawyer: terms, POPIA operator agreement, privacy notice | 15,000 | 45,000 | my estimate (unverified); may overlap the 04 file |
| External security test (small web app, 3-4 tester days, with re-test) | 41,000 | 99,000 | US$2,500-6,000; benchmarks for a basic external test start at about US$3,000 and web-app tests run US$5,000-25,000 in US/EU pricing ([CiphersSecurity](https://cipherssecurity.com/penetration-testing-cost-2026-smb-enterprise/); [Kolonell](https://kolonell.com/en/blog/web-application-penetration-test-price-sme-2026)); no published rand prices found |
| Hosting, e-mail, monitoring during build and pilot (2 months) | 2,500 | 5,000 | table above |
| Domains (.co.za and .com), tools (GitHub, password manager, Sentry) | 1,500 | 4,000 | my estimate |
| Pilot thank-you vouchers and two webinars | 3,000 | 10,000 | my estimate |
| Contingency (15%) | 17,300 | 52,000 | |
| **Total to sellable** | **about 132,000** | **about 397,000** | **likely about R180,000-R250,000 (US$11,000-15,000)** |

Company formation, payment set-up, insurance and marketing are not included; they are in the 04 and 05 files.

### First-year running cash after launch (my estimates)

| Item | R per year |
|---|---|
| Hosting and services at 50-300 customers (US$85-210 a month) | 17,000-42,000 |
| Claude Max for ongoing development | 20,000-40,000 |
| Claude API (gap checks, content drafting) | 2,000-8,000 |
| Attorney: law watch and updates (2-4 hours a month at R2,000-R3,500) | 48,000-168,000 |
| Attorney: v1 sector packs (items 11, 20, 22), R20,000-R50,000 fixed fee each | 60,000-150,000 |
| Security re-test after v1 (US$2,000-4,000) | 33,000-66,000 |
| **Total (excluding payment fees, insurance and marketing)** | **about 180,000-474,000** |

Against the 02 file's revenue range (R1.0m-R3.1m a year at 2-6% of the serviceable market), this is affordable from year 2. In year 1 it needs either early accountant deals or slower v1 sector packs. The attorney is the cost to negotiate: a retainer plus revenue share, or a named content partnership (e.g. with a firm that already publishes FICA guidance), would cut cash cost and add credibility.

## Risks

| Risk | Why it matters | Mitigation |
|---|---|---|
| Content error leads to a sanctioned customer | Approvers can be sanctioned for an inadequate RMCP (GN 7B para 181M); fines reach R3.8m for RMCP failures in one case ([Moonstone](https://www.moonstone.co.za/r7-7m-fine-stands-as-fic-appeal-board-rules-against-law-firm/)) | Attorney-signed content releases; coverage checks; liability cap; the customer approves; PI insurance |
| "It is just a template" objection | FIC, LSSA and NADA reject templates (02 file) | Visible tailoring (risk table and reasons from the firm's own answers); 40% paragraph-difference target; named reviewing attorney; show which answer drove which paragraph |
| AI agents change legal text or rules silently | Small code changes can alter documents | Content as code, golden files, founder-only updates, review agent, attorney sign-off per release |
| FIC changes the format or process | goAML steps, file naming or a new directive (the FIC says more directives may follow, feedback note para 11) | Daily RSS law watch; content release within 30 days; the naming rule is a single setting |
| eFICA's RMCP Builder (Nov 2026, R3,500 a year) and VerifyNow's free generator | Same core idea, existing KYC customers (02 file) | Compete on the "FIC year" (clocks, approval, filing proof, inspection pack), the accountant portfolio and non-law sectors; price below eFICA |
| Seasonality | Most demand is Sep-Oct; launch lands after the 2026 peak | Target late filers, new institutions, GN 7B rewrites and inspection prep; accountant deals; yearly billing |
| Copyright on FIC and LSSA material | GN 7B and PCCs limit reproduction (01 file) | Own wording; cite paragraphs; link to FIC PDFs; lawyer check of s12(8)(a) scope |
| POPIA and cross-border hosting | Law firms will ask where data sits | EU hosting under an operator agreement with s72 terms; minimal personal data; no CDD files; SA hosting option if a channel partner requires it |
| Third-party record keeping (s24, Reg 20) | Customers may need to report us to the FIC | Ready-made particulars sheet; export; clear wording on what we store |
| goAML acknowledgement not machine-readable | Proof of filing depends on users uploading the e-mail | Make the upload easy (forward-to-address in v1); remind until done |
| Founder is a single point of failure | Support peaks in Sep-Oct | Status page, help centre, canned answers; a part-time compliance assistant for the peak (cost in the 04 file) |
| FIC builds its own builder in goAML | Would remove the drafting job | No sign of it (02 file); the product still keeps clocks, portfolio and evidence |

## Open questions

1. **Approval form.** Is an in-app approval record (name, capacity, time, document hash) enough for GN 7B paras 181-181L, or do inspectors expect a signed minute? Ask the attorney and, if possible, the FIC.
2. **"Ten days".** Calendar or business days in Directive 12 para 8? The app uses calendar days until confirmed.
3. **goAML file limits.** Maximum file size, PDF only or also DOCX, one file or several (group extracts as annexures), and whether the comment text must be exactly "RMCP submission". The FIC promised a user guide (feedback note para 24); I found only the 9 Oct graphic and notice.
4. **Next RCR.** Will the FIC call a 2027 RCR, when, and on which platform? This decides whether the RCR workbook is built.
5. **Copyright scope.** Do GN 7B, PCCs and the sector questionnaires count as "official texts" under Copyright Act s12(8)(a)? Can the RCR workbook show the question wording?
6. **SA hosting demand.** Fly's managed Postgres is not offered in Johannesburg, so launch is in Amsterdam. Do pilot law firms or channel partners (LSSA-linked, accounting bodies) require SA hosting? If yes, price Vultr Johannesburg or AWS Cape Town.
7. **Third-party record keeper.** Does storing approved RMCPs and records in our product make us a s24 third-party record keeper that customers must report (Reg 20)?
8. **POPIA for a foreign vendor.** Must our company register an Information Officer, and which s72 ground suits hosting and the US-based AI processing best?
9. **Attorney partner.** Which FICA attorney or firm will review content at a fixed fee, and would they accept revenue share or co-branding?
10. **TFS list format.** The XML download path (`/Pages/TFSListDownload`) and schema need a test download before the v1 screening work.
11. **Sector overlap.** Build the item 20 pack jointly with the A1 dealer idea and decide whether estate agents (item 3) join as a pack.

## Sources

Primary (FIC, law):
- https://www.fic.gov.za/wp-content/uploads/2026/09/Directive-12-On-the-submission-of-risk-management-and-compliance-programmes.pdf
- https://www.fic.gov.za/wp-content/uploads/2026/09/Consultation-feedback-note-Relating-to-draft-Directive-12-on-the-submission-of-RMCPs.pdf
- https://www.fic.gov.za/wp-content/uploads/2026/10/HTSRMCP.png
- https://www.fic.gov.za/2026/10/09/important-information-on-submission-of-rmcp-submissions-9-october-2026/
- https://goweb.fic.gov.za/goAMLWEb_PRD/Home
- https://www.fic.gov.za/wp-content/uploads/2025/09/goAML-V5.4-Additional-Information-File-Transaction-User-Guide-V1.2-3-September-2025.pdf
- https://www.fic.gov.za/wp-content/uploads/2023/12/User-guide-%E2%80%93-How-to-register-with-the-FIC-as-an-accountable-institution.pdf
- https://www.fic.gov.za/wp-content/uploads/2026/08/Guidance-Note-7B-%E2%80%93-Implementation-of-various-aspects-of-the-FIC-Act.pdf
- https://www.fic.gov.za/wp-content/uploads/2023/09/2022.08-PCC-PCC-53-RMCP.pdf
- https://www.fic.gov.za/wp-content/uploads/2026/07/Directive-10-On-information-pertaining-to-geographic-locations.pdf
- https://www.fic.gov.za/wp-content/uploads/2026/03/Directive-11-%E2%80%93-Risk-and-compliance-return.pdf
- https://www.fic.gov.za/wp-content/uploads/2026/06/2026.6-PCC-60-RCR-_On-RCR-Submission.pdf
- https://www.fic.gov.za/wp-content/uploads/2026/05/Legal-practitioner-questionnaire.pdf
- https://www.fic.gov.za/feed/
- https://www.fic.gov.za/targeted-financial-sanctions/
- https://tfs.fic.gov.za/ and https://tfs.fic.gov.za/Pages/Search
- https://lpc.org.za/wp-content/uploads/2026/07/Advisory-Notice-Risk-and-Compliance-returns.pdf
- https://www.acts.co.za/financial-intelligence-centre-act-2001/42__risk_management_and_compliance_.php
- https://www.acts.co.za/financial-intelligence-centre-act-2001/42a__governance_of_anti-money_.php
- https://www.acts.co.za/financial-intelligence-centre-act-2001/43__training_relating_to_.php
- https://www.acts.co.za/financial-intelligence-centre-act-2001/23__period_for_which_records_must_be_kept.php
- https://www.acts.co.za/financial-intelligence-centre-act-2001/43b__registration_by_accountable_institution_and_reporting_institution.php
- https://www.acts.co.za/financial-intelligence-centre-act-2001/r1595_20__particulars_of_third_parties_keeping_records.php
- https://www.acts.co.za/financial-intelligence-centre-act-2001/n3257_2__directive.php
- https://source.acts.co.za/protection-of-personal-information-act-2013/72__transfers_of_personal_info.php
- https://inforegulator.org.za/wp-content/uploads/2020/07/DIS-CHEM-ENFORCEMENT-NOTICE.pdf
- https://www.acts.co.za/legal-practice-act-2014/33__authority_to_render____
- https://www.lssa.org.za/wp-content/uploads/2025/10/Final-Draft-RMCP-Guidelines-6-5-25-Final.pdf
- https://www.lssa.org.za/about-us/about-the-attorneys-profession/statistics-for-the-attorneys-profession/

Secondary (law, market, enforcement):
- https://www.moonstone.co.za/r7-7m-fine-stands-as-fic-appeal-board-rules-against-law-firm/
- https://www.moonstone.co.za/?p=61901
- https://www.moonstone.co.za/fic-flags-filing-errors-as-rcr-deadline-closes/
- https://www.moonstone.co.za/fic-urges-businesses-to-simplify-compliance-focus-on-risks-not-paperwork/
- https://www.moonstone.co.za/fic-releases-risk-reports-for-krugerrand-dealers-estate-agents-and-lawyers/
- https://blog.kycafrica.ncino.com/fic-updates-directive-10-draft-directive-12-guidance-note-7b
- https://www.verifynow.co.za/tools/rmcp-generator
- https://efica.co.za/
- https://www.golegal.co.za/?p=74912
- https://regalert.today/document/34322b55-1b86-4cf0-996f-24713dab8379
- https://www.ensafrica.com/news/detail/4855/extraterritorial-application-gdpr-vs-popia
- https://mjkinc.co.za/agreements/cross-border-data-transfer-agreement
- https://cms.law/en/int/expert-guides/cms-expert-guide-to-e-signatures-in-commercial-contracts/south-africa
- https://helpx.adobe.com/legal/esignatures/regulations/south-africa.html
- https://libguides.wits.ac.za/LegalDeposit/Copyright

Technical and costs:
- https://docs.fly.io/about/pricing
- https://docs.fly.io/mpg
- https://docs.fly.io/reference/regions
- https://www.vultr.com/products/managed-databases/
- https://www.hetzner.com/cloud/
- https://www.djangoproject.com/download/
- https://pypi.org/project/docxtpl/
- https://github.com/gotenberg/gotenberg
- https://pypi.org/project/pypdf/
- https://claude.com/pricing
- https://www.anthropic.com/legal/commercial-terms
- https://www.emailsoftwareinsights.com/reviews/postmark/pricing/
- https://automationatlas.io/answers/postmark-pricing-explained-2026/
- https://cipherssecurity.com/penetration-testing-cost-2026-smb-enterprise/
- https://kolonell.com/en/blog/web-application-penetration-test-price-sme-2026
- https://globallawexperts.com/labour-lawyer-cost-south-africa/
- https://currencyconvert.online/usd/zar
