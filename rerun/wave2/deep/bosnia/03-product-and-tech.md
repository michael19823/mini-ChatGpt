# BiH AML/CFT compliance SaaS: product and technical design

Draft, in progress. Last updated 9 Oct 2026. Part 3 of the Bosnia deep dive (product, technical design and development plan).

## Summary

(being written; see end of research)

## Legal hooks that shape the product (from the law text)

These come from the gazette text of the Law on Prevention of Money Laundering and Financing of Terrorist Activities, Sl. glasnik BiH 13/2024, 19 Feb 2024 ([gazette PDF](https://portalfo1.pravosudje.ba/vstvfo-api/vijest/download/127392)). The law agent covers the law in full. These are the articles that drive features.

- **Risk assessment.** Must cover client, country or area, product or service, and channel risk. It must be documented and updated at least once a year (Art. 10(1)-(2)). Feature: firm risk assessment wizard with a yearly review task.
- **Policies.** Approved by top management (Art. 9(4)); internal acts must define identification procedures (Art. 11(2)). Feature: internal acts generator with an approval/signature step.
- **Authorised person and deputy.** Every obliged entity appoints one, plus one or more deputies (Art. 48(1)). In firms with four or fewer employees, the legal representative counts as the authorised person if nobody is appointed (Art. 48(4)). Name and job title of both, and of the senior manager responsible, go to the FOO within 8 days of appointment or change (Art. 48(5)). Feature: authorised person register with an "notify FOO within 8 days" task.
- **Authorised person must have unrestricted access, and others must not know why** (Art. 51(1)(a)). Feature: suspicious-activity cases visible only to the authorised person and deputy.
- **Indicator list.** Each obliged entity draws up its own list of indicators, following FOO and supervisor guidance, and keeps it updated (Art. 57(1)). It must send the list and every update to the FOO and its supervisor within 30 days (Art. 57(3)). A Council of Ministers by-law sets a mandatory core list (Art. 57(5)). Feature: indicator list generator (core list + sector list + firm additions) with a "send within 30 days" task.
- **Copies of ID.** The firm keeps a copy of the ID document, noting that the original was seen, with the date and the employee who did the check (Art. 15(14), Art. 61). Paper or electronic copies are both allowed (Art. 15 and Art. 60 last paragraph). Feature: ID upload with "original seen by / on" stamp.
- **Remote identification.** Video identification is allowed under conditions (Art. 21). Identification by a qualified certificate for e-signature or e-seal is allowed (Art. 22). Feature for later: accept a qualified-signature-signed client form.
- **PEPs.** Defined as holding a prominent public function now or in the last 12 months (Art. 4(r)). The domestic list is broad: Presidency, ministers and deputies at state, entity, Brcko and canton level, mayors and municipal heads, all legislators down to canton level, members of party presidencies and party governing bodies, top judges and prosecutors, Central Bank board, diplomats, Joint Staff, and board members and directors of companies majority-owned by any level of government (Art. 4(s)). Family members and close associates are covered (Art. 4(u)-(v)). PEP clients need written senior-management approval and enhanced monitoring, and measures last at least 12 months after the person leaves office (Art. 34). A Council of Ministers by-law will set how the official list of public functions is formed and published (Art. 34, last paragraph). Feature: PEP self-declaration in the CDD form, PEP screening, and a "senior management approval" step.
- **Reporting to the FOO.** Suspicious transactions and clients must be reported immediately and before the transaction (Art. 42(1)-(2)). Cash transactions of 30,000 KM or more, single or linked, must be reported within 3 days (Art. 43). Reports go through the FOO's own software, AMLS (Art. 46(1), Art. 47). Post, courier, e-mail, phone or fax are allowed only in exceptional cases, with formal follow-up by the next working day (Art. 46(2)-(3)). Feature: the product prepares the report data and a PDF; the user files it in AMLS. The product does not file.
- **Records the firm must keep.** Art. 60 lists 11 registers (a-k): access to public registers and ongoing monitoring; clients, relationships and transactions; difficulties in BO verification; unusual transactions and their analysis; STRs sent; cash/high-risk-country reports sent; real estate and loan contract reports (notaries, lawyers); disclosures within a group; data exchanged under Art. 88; FOO orders to stop a transaction; FOO orders for ongoing monitoring. Records may be paper or electronic (Art. 60). Art. 61 lists the minimum fields (name, address, date and place of birth, JMBG, ID issuer, purpose of the relationship, dates, amounts, source of funds, reasons for suspicion, and every natural person holding 25% or more). Feature: these map directly onto the data model.
- **Retention.** Client, transaction and CDD data: 10 years from the end of the relationship or transaction (Art. 92(1); also Art. 59(1)). Records on authorised persons, training and internal control: at least 4 years after the appointment, training or control (Art. 92(2)). After the period ends, personal data must be destroyed under the data protection law (Art. 92(6)). Feature: retention clock per record and a deletion job.

- **Supervisors for our segment.** Accountants, auditors, tax advisers and real estate agents are supervised by the RS Inspection Administration (Republička uprava za inspekcijske poslove), FUZIP in FBiH, and the Brcko Finance Directorate (Tax Administration) (Art. 93(1)(k)). So the "legal variant" is mostly about the supervisor, its questionnaire and the script, not about different law.
- **Training plan deadline.** The yearly training plan must be ready by the end of March for the current year (Art. 54(3)). Training covers the law, by-laws, internal acts, the indicator list and data protection (Art. 54(2)).
- **Internal control and audit.** Internal control in proportion to size; an independent internal and external audit at least yearly where size and nature require it (Art. 55). FUZIP says this does not apply to firms with 4 or fewer employees (questionnaire footnote 3).
- **FUZIP risk-assessment guidelines (Apr 2026).** Issued under the new Rulebook, Sl. glasnik BiH 8/26 ([FUZIP guidelines PDF, scanned](https://fuzip.gov.ba/wp-content/uploads/2026/04/Smjernice-za-procjenu-rizika-od-pranja-novca-i-finansiranja-teroristickih-aktivnosti-april-2026.pdf)). Points that shape the rules engine:
  - the firm's risk assessment must be updated at least yearly **and sent to FUZIP** (Art. 6(3));
  - firms must adopt a written internal programme with a method to identify, assess, reduce and monitor risk, and keep records of changes in client risk levels (Art. 6(5)-(6));
  - risk factor sub-lists for client, product/service/transaction, geography and channel (Art. 7);
  - clients go into low, medium or high risk (Art. 8, 10), plus an "unacceptable" group such as sanctioned persons (Art. 10(2));
  - the whole-business rating has four levels: less significant, moderately significant, significant, very significant (Art. 12(2));
  - client risk must be re-rated after triggers: unusual activity or reports, authority requests, sanctions breaches, big changes in activity, adverse media (Art. 13(4));
  - CDD data fields to collect (Art. 17) and the ID copy rule with the time and the employee's name (Art. 18).
- **FUZIP questionnaire for bookkeeping and accounting providers (2026).** 60 numbered items in 11 sections, signed by the authorised person "under full material and criminal liability". Many items ask for annexes: the risk assessment with a written analysis of each risk factor (item 21), policies, the PEP procedure, the AP appointment decision, the training plan, the indicator list and the records ([questionnaire PDF](https://fuzip.gov.ba/wp-content/uploads/2026/10/UPITNIK-ZSPNFT_Racunovodstvene-i-knjigovodstvene-usluge.pdf)). Item 39 asks whether the firm has an information system supporting client risk assessment and monitoring, and to describe it.
- **RS inspectorate.** In Jan 2026 it asked randomly chosen bookkeepers, accountants and auditors for internal acts, a 13-item questionnaire and a checklist within 10 days ([Paragraf, 29 Jan 2026](https://www.paragraf.ba/dnevne-vijesti/29012026/29012026-vijest1.html)). I could not see the 13 items (unverified). We need a copy from a pilot customer.

## Users and jobs

### Who uses the product

| Role (Bosnian label) | Who it is | Main jobs | Rights |
|---|---|---|---|
| **Firm owner / legal representative** (zakonski zastupnik, odgovorno lice) | Owner or director of the bookkeeping office, audit firm or agency | Approve policies (Art. 9(4)); give written senior-management approval for PEP and high-risk clients (Art. 34); pay; sign the questionnaire if no authorised person | Everything in own firm, billing, grant/revoke consultant access |
| **Authorised person and deputy** (ovlašteno lice, zamjenik) | Often the owner in firms with 4 or fewer staff (Art. 48(4)) | Run the AML programme; keep the indicator list; training plan by end of March (Art. 54(3)); handle suspicious-activity cases; file with FOO; sign the FUZIP questionnaire (its footnote 5) | Everything, plus the confidential case log that others must not see (Art. 51(1)(a)) |
| **Staff** (zaposlenik) | Bookkeepers, agents, assistants | Onboard clients, collect IDs and declarations, flag unusual things, do training | Clients they are assigned to; can raise an internal "something looks odd" report but cannot see case outcomes |
| **External consultant** (vanjski konsultant / knjigovođa koji vodi više obveznika) | A consultant or a bookkeeping office that runs AML for several obliged firms (car dealers, small agencies, other bookkeepers) | Set up and maintain many firms; watch deadlines across all of them | Per-firm grant from each firm owner; a portfolio dashboard; cannot see a firm's case log unless also appointed as its authorised person |
| **Inspector (read-only)** | FUZIP, RS inspectorate, Brcko Finance Directorate inspector | Check documents | No login in the MVP. They get an export pack by e-mail or on paper, which is how they ask for it today ([FUZIP questionnaire page](https://fuzip.gov.ba/obaveze-u-oblasti-sprecavanja-pranja-novca-upitnik-za-pruzaoce-knjigovodstvenih-i-racunovodstvenih-usluga/)). Later: a time-limited read-only "inspection room" link |
| **End client of the firm** | The firm's own customer (person, sole trader, company) | Fill in the CDD form, upload ID, sign PEP and beneficial-owner statements | No account; a one-time secure link (v1) |
| **Content editor (lawyer)** | Our AML lawyer | Edit templates, risk rules, indicator lists, courses and quizzes; publish new versions | Admin content area only; no customer data |
| **Platform admin** | Founder/developer | Support, billing, list feeds | Support access only with the customer's time-limited consent, logged |

### Jobs to be done (in the buyer's words)

1. "Get me through the inspection." Produce every document on the FUZIP questionnaire, signed and dated, in one pack.
2. "Onboard a new client properly in 10 minutes." ID, beneficial owner, PEP check, sanctions check, risk level, all recorded with a date.
3. "Tell me what is due." Yearly risk assessment update, training plan by end of March, ID expiry, client reviews, the 8-day and 30-day notices to the FOO.
4. "Tell me what to do if something looks wrong." Indicators, a case log, and a report draft for the FOO.
5. "Prove that training happened." Plan, attendance, quiz results, certificates.
6. "Keep it for 10 years, then delete it." Retention clocks and a full export if they leave.

A-count's founder, who runs an accounting office, lists the failures inspectors find most often: the system exists only on paper; no record of ongoing monitoring; no record of training; no fixed onboarding process; register extracts dated differently from the review; expired IDs not replaced ([A-count blog, Jul 2026](https://a-count.hr/blog/vodic-spnft-bez-stresa-5-koraka-do-sustava-koji-stvarno-radi)). The product should make each of these impossible to miss.

## Feature map (MVP / v1 / later)

### What to copy from A-count and UK tools

- **A-count (Croatia).** Enter the client's company ID, and data is pulled from the court register. The ID card is read and the fields fill in. Sanctions lists are checked. The PEP statement is e-mailed to the client and comes back signed with no printing. A risk level is proposed, but the user decides: "the algorithm must not decide instead of a person". Each step leaves a dated record ([A-count blog, Aug 2026](https://a-count.hr/blog/spnft-zakon-vam-nece-reci-kako-se-radi-dubinska-analiza-evo-kako-je-radimo-mi)). Other features: smart reminders for expiring documents and due risk assessments, PDF records, Excel import, training with a certificate, data stored in the EU, free plan up to 5 clients ([A-count](https://a-count.hr); [FAQ](https://a-count.hr/faq)). A-count deletes data one month after a subscription ends ([FAQ](https://a-count.hr/faq)). That clashes with a 10-year retention duty, so we should do better (see Retention).
- **FigsFlow (UK).** Client risk templates by client type (property, trusts, trading businesses, high-net-worth, cross-border), ID checks with face match and MRZ reading, full audit trail. Price from about GBP 2.10 per check plus a small monthly fee (vendor pages, inconsistent) ([FigsFlow](https://figsflow.com/uk/best-aml-software-for-accountants-figsflow/)).
- **Credas, Thirdfort, SmartSearch (UK).** Branded client portal and onboarding journey builder, ongoing PEP/sanctions monitoring with alerts, source-of-funds checks, mobile app for the client ([FigsFlow comparison](https://figsflow.com/us/best-aml-software-solutions-for-accountants/); [Finexer](https://blog.finexer.com/aml-software-for-accountants-bank-verified-data/)). Thirdfort suggests firms recharge checks to clients (for example GBP 5 for monitoring) ([Thirdfort support](https://support.thirdfort.com/hc/en-gb/articles/28359965339805-Can-I-pass-on-the-cost-of-a-Thirdfort-check-to-a-Client)).
- **What not to copy for BiH now:** biometric liveness and bank-data checks. They cost per check, need vendors that may not read BiH documents well, and small BiH firms meet clients in person. Remote video ID is allowed under Art. 21 of the law and Art. 23 of the FUZIP guidelines, but only with conditions ([FUZIP guidelines, Apr 2026](https://fuzip.gov.ba/wp-content/uploads/2026/04/Smjernice-za-procjenu-rizika-od-pranja-novca-i-finansiranja-teroristickih-aktivnosti-april-2026.pdf)). Leave it for later.

### Feature map

| Module | MVP (weeks 1-12) | v1 (months 4-9) | Later (v2+) |
|---|---|---|---|
| Accounts and roles | Firm workspace; roles owner, authorised person, deputy, staff; MFA; consultant with many firms | Consultant portfolio dashboard; bulk actions; white-label PDF headers for consultants | SSO; API |
| Onboarding wizard -> firm risk assessment | 25-35 questions (supervisor/entity, sector, staff, clients by type, services, cash, foreign links, channels, PEPs in ownership). Draft with a written analysis per risk factor and a 4-level rating (less significant, moderately significant, significant, very significant), as the FUZIP guidelines Art. 12 ask | Yearly update wizard that shows what changed; the "new product/technology" assessment (FUZIP questionnaire items 22-23) | Benchmark against peers (anonymised) |
| Internal acts generator | Policy and procedures (PKP); risk assessment document; decision appointing the authorised person and deputy; notice of the authorised person to the FOO; annual training plan; indicator list and cover letter to the FOO and supervisor; PEP procedure; client CDD form; PEP and BO statement. DOCX and PDF, versioned, with an approval record and upload of the signed scan | Internal control checklist and internal audit report (firms with more than 4 staff); data protection notice for clients; record of refused clients | Qualified e-signature of acts |
| Authorised person register | Current and past appointments, deputy, qualifications (Art. 49), FOO notice date | Absence/substitution log | |
| Training | Annual plan by 31 March; log (date, topic, trainer, attendees, hours, evidence); 1 short course with a 10-question quiz and certificate | 4-6 micro-courses (law basics, CDD and BO, PEPs, indicators for bookkeepers, indicators for real estate, data protection); per-person history | Paid courses for CPD points if the professional bodies allow it (unverified) |
| Client register and CDD | Person, sole trader (obrt), company; BO tree with the 25% rule; purpose and nature; source of funds; ID upload with "original seen by/on" stamp (Art. 15(14)); ID expiry; register extract upload with the date of the check; PEP self-declaration | Client self-service link; Excel import; ID MRZ reading; JMBG check-digit validation; proxy/representative handling (FUZIP item 33) | Register look-ups (FBiH/Brcko bizreg, RS BO register) |
| Sanctions and PEP screening | UN, EU, OFAC lists refreshed every 6 hours; fuzzy matching with diacritics and Cyrillic; review screen (true/false match with reason); nightly re-screen of all clients against changes; PEP self-declaration | OpenSanctions PEP check on demand; curated BiH PEP list (state, entity, canton, mayors); BiH domestic list entered by hand from the gazette | Adverse media search with a saved result |
| Client risk scoring | Rules from a lawyer-edited catalogue; low / medium / high / unacceptable (FUZIP guidelines Art. 8 and 10); explanation; manual override with reason; senior-management approval for PEP and high risk | Re-rating triggers from FUZIP guidelines Art. 13(4) (unusual activity, authority request, sanctions, big change, adverse media) | |
| Ongoing monitoring and reminders | Review dates by risk (default high 6 months, medium 12, low 24; firm can change); ID expiry; yearly risk assessment; training plan by 31 March; 8-day AP notice; 30-day indicator list notice; weekly e-mail digest | Event log per client ("client changed activity"), with a 2-line note and a document, as A-count recommends | |
| Indicators and case log | Indicator library (core + sector) used to build the firm's list | Confidential case log for authorised persons; indicator checklist per case; decision record (report / do not report, with reasons); unusual-transaction register (Art. 33) | |
| FOO reports | Not in MVP (rare event; give a Word template) | Draft STR and 30,000 KM cash report in the AMLS field order, PDF copy, log of filing date and AMLS reference. The product never files | AMLS integration only if the FOO ever opens an interface (unverified that any exists) |
| Records and retention | Registers per Art. 60 shown as lists; retention date on every record | Retention engine: 10 years after the relationship ends; 4 years for AP, training and internal control records (Art. 92); deletion job with a log; full export; low-cost "archive only" plan | |
| Inspection pack | FUZIP bookkeeping questionnaire pre-filled from stored data, plus annexes; the "information system" description that item 39 asks for; one ZIP and one merged PDF | FUZIP real estate questionnaire; RS inspectorate questionnaire; Brcko variant | Read-only inspection room link |
| Languages | Bosnian (Latin) UI and documents; Serbian Cyrillic documents for RS | Croatian and Serbian Latin; Cyrillic UI | Montenegrin, Macedonian for new markets |

### Why this cut for the MVP

- Everything in the MVP column maps to an item in the FUZIP bookkeeper questionnaire (items 12-60). That questionnaire is what inspectors use until end-2026 ([FUZIP questionnaire PDF, Oct 2026](https://fuzip.gov.ba/wp-content/uploads/2026/10/UPITNIK-ZSPNFT_Racunovodstvene-i-knjigovodstvene-usluge.pdf)).
- Item 39 asks: "Have you set up an information system that supports client risk assessment and ongoing monitoring? If yes, attach its characteristics." The product answers this item by itself. Use it in sales.
- The questionnaire wants numbers the firm rarely has: clients by type, refused clients this year, unusual transactions this year (items 10-11, 31, 36). The register produces them.
- Item 20 (internal control and audit) does not apply to firms with 4 or fewer staff (questionnaire footnote 3). The wizard should hide it for them.

## Key flows

### Flow 1: First day (target: documents in under 60 minutes)

1. Sign up with e-mail and password, then turn on MFA. Pick a plan (free trial 30 days).
2. Firm details: name, company ID (JIB/ID broj), seat, legal form, entity (FBiH, RS or Brcko). The entity picks the supervisor and the document variant: FUZIP in FBiH, the RS Inspection Administration in RS, and the Brcko Finance Directorate (Tax Administration) in Brcko (Art. 93(1)(k) of the law, [gazette](https://portalfo1.pravosudje.ba/vstvfo-api/vijest/download/127392)).
3. Sector: bookkeeping/accounting, audit, tax advice, real estate (more later).
4. People: who is the authorised person, who is the deputy, how many staff. If 4 or fewer, explain that the legal representative is the authorised person by default (Art. 48(4)).
5. Risk questionnaire (25-35 questions, 10-15 minutes). Each answer shows a one-line "why we ask".
6. Review screen: the 4-level firm rating, the written analysis per factor, and what drove it. The user can edit the text.
7. Generate the document set. Preview, then download DOCX/PDF.
8. Approve: the owner clicks "approve" (records name, time, version). Print, sign, stamp, upload the scan (optional in MVP).
9. Tasks are created: send the AP notice to the FOO within 8 days; send the indicator list to the FOO and supervisor within 30 days; training plan by 31 March; review in 12 months.

### Flow 2: New client onboarding (staff, about 10 minutes)

1. "New client": choose person, sole trader or company.
2. Enter or (v1) scan the ID. Tick "original seen", which stamps the user and time (Art. 15(14)).
3. For companies: upload or (later) fetch the register extract; record the check date; add directors and beneficial owners (25% rule), with the reason if BO cannot be verified (Art. 60(c) register).
4. Purpose and nature of the relationship; source of funds; expected services.
5. PEP and BO self-declaration: print-and-sign in MVP; e-mail link with signature in v1.
6. Automatic sanctions screening of the client, directors and BOs. Any possible match stops the flow until reviewed.
7. Risk score with reasons. The user confirms or overrides with a reason. PEP or high risk needs owner approval before the relationship starts (Art. 34).
8. Client record is saved with a review date and an ID expiry reminder. A dated CDD record PDF is stored.

### Flow 3: Daily screening (automatic)

1. Every 6 hours: download the UN, EU and OFAC files; store a version; compute added/changed/removed entries.
2. Nightly: screen all active clients, directors and BOs against new or changed entries only; full re-screen weekly.
3. A possible match creates a task for the authorised person and an e-mail. Review screen shows both records side by side.
4. Decision is recorded (false positive with reason, or true match, which opens a case and freezes the client).

### Flow 4: Something looks suspicious

1. Any staff member clicks "Report concern" on a client: free text and indicators ticked. The staff member sees only "sent to authorised person".
2. The authorised person sees the case in the confidential log, adds analysis, and decides: report or do not report, with reasons.
3. If reporting: the product produces the STR data in AMLS order. The user files in AMLS and records the date and reference. The law requires reporting before the transaction where possible, else by the next working day (Art. 42).
4. Tipping-off warning on every case screen.

### Flow 5: Yearly cycle

- January: training plan for the year (deadline end of March, Art. 54(3)).
- Anniversary of the risk assessment: update wizard shows last year's answers. The guidelines say update at least yearly and send it to FUZIP (FUZIP guidelines Art. 6(3), Art. 13).
- Client reviews come due through the year by risk level.
- Any time: "Prepare inspection pack" in two clicks.

### Flow 6: Consultant with many firms

1. Consultant creates a "consultancy" account.
2. Creates a firm, or asks an existing firm owner to grant access (e-mail invite, owner accepts).
3. Portfolio dashboard: one row per firm, traffic lights for risk assessment age, AP appointed, training plan, overdue reviews, open screening hits.
4. Billing: the consultant pays for all firms, or each firm pays (choice per firm).
5. The firm owner can revoke access at any time. Data stays with the firm.

## Screens (described)

1. **Dashboard (firm).** Top: compliance status as 8 tiles that mirror the FUZIP checklist (risk assessment, policies, CDD, monitoring, authorised person, training, indicator list, records). Each tile is green, amber or red, with the reason ("Risk assessment is 13 months old"). Below: "Due this week" task list and "Screening hits to review".
2. **Onboarding wizard.** One question per card, progress bar, "why we ask" link, save and continue later. Final review page with the rating and editable text.
3. **Documents.** List of generated documents with version, language, status (draft, approved, signed scan uploaded), last legal review date. Buttons: preview, download DOCX/PDF, regenerate after profile change (shows a diff).
4. **People and authorised person.** Staff list with role, training status and AP/deputy flags. Appointment history.
5. **Training.** Year plan (table of planned sessions), log of sessions with attendees, course player (short text pages plus quiz), certificates.
6. **Clients list.** Search, filters (risk level, review due, PEP, open hits, ID expiring), counts by type (feeds questionnaire items 10-11). Import from Excel (v1).
7. **Client file.** Tabs: Identity (ID images, "original seen" stamp, expiry), Ownership (BO tree), Purpose and funds, Screening (history of checks and decisions), Risk (score, reasons, approvals), Documents, Timeline (every event with user and time), Reviews.
8. **Screening hit review.** Left: our client data. Right: list entry (names, aliases, birth date, nationality, programme, listing date). Match score and why. Buttons: "Not the same person" (reason required), "Possible", "Confirmed".
9. **Indicators.** The firm's indicator list (core + sector + own), last update, "send to FOO and supervisor" record.
10. **Cases (authorised persons only).** Confidential list; case page with facts, indicators, analysis, decision, FOO filing record.
11. **Records and retention.** The Art. 60 registers as tabs; each row has a retention date; export.
12. **Inspection pack.** Choose supervisor and questionnaire; see the pre-filled answers with links to evidence; fix gaps; generate ZIP and merged PDF.
13. **Consultant portfolio.** Table of firms with traffic lights and next deadlines; switch firm in one click.
14. **Content admin (lawyer).** Templates (upload DOCX, preview with test firm, publish), clause library, risk rule tables, indicator library, courses and quizzes, change log. Each publish needs a second person to approve.

UX rules: mobile-friendly but desktop-first (bookkeepers work at desks); plain language with the legal article in a tooltip; never a blank page (every list has a "how to start" card); everything printable.

## Data sources and integrations (with endpoints, licences, costs)

### Sanctions lists (all free, all machine-readable; checked 9 Oct 2026)

| List | Endpoint | Format and size | Licence/cost | Notes |
|---|---|---|---|---|
| UN Security Council Consolidated List | `https://scsanctions.un.org/resources/xml/en/consolidated.xml` (redirects to a signed Azure blob URL) | XML, about 2.2 MB; 736 individuals and 274 entities on 9 Oct 2026 | Free, public | Tested by download on 9 Oct 2026. Schema at `https://www.un.org/sc/resources/sc-sanctions.xsd`. The UN describes the list and formats at [un.org](https://www.un.org/sc/suborg/en/sanctions/un-sc-consolidated-list.html). |
| EU Financial Sanctions Files (consolidated list) | `https://webgate.ec.europa.eu/fsd/fsf/public/files/xmlFullSanctionsList_1_1/content?token=dG9rZW4tMjAxNw` | XML v1.1, about 25.8 MB | Free, public | The public token URL returned the full file on 9 Oct 2026. A vendor note says an EU Login account can generate a personal token URL ([STP/LEXolution](https://support.stp.one/hc/en-us/articles/33434862798877-LEXolution-Sanctions-Lists)). Use a personal token in production. |
| US OFAC SDN | `https://sanctionslistservice.ofac.treas.gov/api/PublicationPreview/exports/SDN.XML` (also `.../api/download/sdn_advanced.xml`; legacy `https://www.treasury.gov/ofac/downloads/sdn.xml`) | XML | Free, public | All three answered on 9 Oct 2026. Not legally binding in BiH, but banks and inspectors expect it as good practice (my view). |
| OpenSanctions (aggregated sanctions + PEPs) | Bulk: `https://data.opensanctions.org/datasets/latest/<dataset>/...`; API: `https://api.opensanctions.org/match/<dataset>` | FollowTheMoney JSON, CSV | CC BY-NC 4.0; commercial use needs a paid licence ([licensing](https://www.opensanctions.org/licensing/)). API: EUR 0.10 per query, prepaid bundles from EUR 50 for 500 credits down to EUR 0.03 per query at 500,000 credits (changelog 24 Sep 2026, via [FAQ/metering](https://www.opensanctions.org/faq/api/metering/)). Bulk licence was EUR 595 a month in 2022; current price on request ([2022 post](https://opensanctions.org/articles/2022-10-04-saas-api/)) | See PEP section below. |

### BiH-specific lists

- **No machine-readable BiH sanctions list was found.** The Council of Ministers has adopted ad-hoc decisions freezing assets of persons linked to terrorism ([RFE/RL](https://www.slobodnaevropa.org/a/isil-bosna-hercegovina-sankcije/33683345.html)). A new state law on restricting the disposal of assets to prevent terrorism, its financing and proliferation financing was adopted by the Council of Ministers in March 2026 and by the House of Peoples on 4 May 2026. It is meant to give BiH a working mechanism for UN sanctions, which MONEYVAL found missing in Dec 2024 ([tportal, 4 May 2026](https://www.tportal.hr/vijesti/clanak/bih-deblokiran-dom-naroda-s-vaznom-odlukom-ali-i-dalje-rizik-sive-liste-moneyvala-20260504); [Paragraf, 16 Mar 2026](https://www.paragraf.ba/dnevne-vijesti/16032026/16032026-vijest6.html)). Whether it is published and creates a national designation list is (unverified). Design: a "BiH domestic list" table that staff fill by hand from Sl. glasnik BiH decisions until an official feed exists.

### PEP data

- **There is no official BiH PEP list yet.** The law says a Council of Ministers by-law will set how the list of public functions is formed, updated and published (Art. 34, [gazette](https://portalfo1.pravosudje.ba/vstvfo-api/vijest/download/127392)). I found no published list (unverified). Note that it would list *functions*, not names.
- **OpenSanctions.** It counts 266 PEPs connected with BiH. It has two BiH sources: the state Parliamentary Assembly (58 members, weekly, started 16 Jun 2026) and an enrichment-only business register feed (7 entities) ([OpenSanctions BiH page](https://www.opensanctions.org/countries/ba/); dataset index files `ba_parliament` and `ext_ba_companies`, checked 9 Oct 2026). The rest comes from Wikidata. So coverage is good for top national figures and foreign PEPs, and poor for the long BiH tail the law covers: canton ministers, mayors, canton assembly members, party presidency members, and directors and board members of the many government-owned companies (Art. 4(s)).
- **Hosted API pricing (checked 9 Oct 2026).** 2,000 free credits on sign-up. Bundles: 500 credits EUR 50 (EUR 0.10 each); 5,000 for EUR 400 (0.08); 30,000 for EUR 2,000 (0.067); 100,000 for EUR 5,000 (0.05); 500,000 for EUR 15,000 (0.03); prices exclude VAT; credits last one year; data updated 4 times a day; "in-house or embedded" use ([OpenSanctions API](https://www.opensanctions.org/api/)). One credit is one `/match` query; `/entities` and `/statements` are free ([metering FAQ](https://www.opensanctions.org/faq/api/metering/)). Bulk data is CC BY-NC 4.0, so commercial bulk use needs a paid licence with the price on request ([licensing](https://www.opensanctions.org/licensing/)). The self-hosted API `yente` and the matching libraries (`followthemoney`, `nomenklatura`, `rigour`) are MIT-licensed (PyPI metadata, checked 9 Oct 2026); only the data needs a licence.
- **CIK (Central Election Commission).** CIK runs all elections and receives asset declarations from elected officials at the start and end of their terms ([Novosti](https://www.novosti.rs/republika-srpska/vesti/1075224/imovinu-skrivaju-mare-izabrani-predstavnici-gradjana-bih-ignorisu-dostavljanje-izjava-imovinskom-stanju)). The Personal Data Protection Agency told CIK to stop publishing them, and NGOs objected ([RFE/RL](https://www.slobodnaevropa.org/a/gradjani_uskraceni_za_uvid_u_imovinu_politicara_nvo_razocarane/24285780.html)). Whether declarations are public today is (unverified). I found no CIK open-data download of elected officials (unverified). Election results pages can be used by hand to build a list of mayors and assembly members.
- **Design.**
  1. MVP: PEP self-declaration in every CDD form (what most small firms do), with the categories of Art. 4(s)-(v) spelled out in plain words.
  2. v1: one OpenSanctions `/match` call per new natural person and per review. Estimate: 50 customers about 5,000 calls a year (about EUR 400); 300 customers about 30,000 (about EUR 2,000); 1,000 customers about 100,000 (about EUR 5,000). My estimate assumes about 60 clients and 2 persons per client, 20% new each year, and a review every 18 months.
  3. v1: a curated "BiH domestic PEP" table built by hand from public pages (governments of the state, entities, Brcko and 10 cantons; mayors; assemblies; boards of public companies). About 2,000-4,000 names, refreshed after elections and quarterly (my estimate). This is a real moat but needs a part-time researcher. Offer it to OpenSanctions as a contribution, or license it.

### Business registers and beneficial ownership

| Register | URL | What it offers | Machine access | Use in product |
|---|---|---|---|---|
| FBiH court register of business entities (Federal Ministry of Justice) | `https://bizreg.pravosudje.ba/pls/apex/f?p=186:20` (Bosnian; 183/185/187 for other languages) | Search by name or ID; main ledger is public (FBiH regulation on the register, [Uredba 93/23](https://advokat-prnjavorac.com/zakoni/Uredba-o-vodenju-registra-poslovnih-subjekata-FBiH.pdf)) | An old Oracle APEX web app; no API or open data found (unverified). Scraping is fragile and terms are unclear | MVP: deep link and "upload extract + date checked". Later: on-demand look-up with the user watching, if terms allow |
| Brcko District e-Registar (Judicial Commission of Brcko) | `https://bizreg.osbd.ba/` | Search, decisions, and **open data**: daily XML of all entities at `https://bizreg.osbd.ba/Public/PublicPortal/OpenData?handler=ExportXML` | Yes. 4.3 MB XML, 6,689 entities on 9 Oct 2026, fields: name, tax ID, legal form, MBS, status, NACE, address, registration and last-change dates. No owners or directors | MVP+: autocomplete and validation for Brcko clients. Side note: 64 active companies with main activity 69.20 (accounting/bookkeeping/audit/tax) and 16 with 68.31 (real estate agencies) in Brcko on 9 Oct 2026 (sole traders are not in this register) |
| RS Unified Information System for business registration (APIF) | RS registration portal (`bizreg.esrpska.com`, unreachable from my test environment) | Main ledger public by law ([RS registration law](https://www.paragraf.ba/propisi/republika-srpska/zakon-o-registraciji-poslovnih-subjekata-u-republici-srpskoj.html)) | Unknown (unverified) | Deep link and upload |
| RS register of beneficial owners | Through the RS unified registration system website | In a first test phase with over 90% of data entered; a special law is still to come ([Paragraf, 11 May 2026](https://www.paragraf.ba/dnevne-vijesti/11052026/11052026-vijest3.html)) | Unknown | Watch; add when public |
| FBiH and Brcko beneficial owner registers | — | None found (unverified) | — | BO must come from the client's statement plus register extracts. The law says BO data for registered entities is taken from the registration decision or a register extract (Art. 18(10)) |

Obrti (sole traders) are registered by municipalities, not courts, so there is no single source for them (my understanding; unverified).

### ID documents (MRZ) and OCR

- **BiH ID card.** ID-1 card format under ICAO Doc 9303 (the TD1 MRZ size), with a contactless NXP chip holding the MRZ data, the face image and signing certificates. The 6-digit Card Access Number sits in the first MRZ line after the document number, in the optional-data field ([IDDEEA eID architecture v2.0, Mar 2023](https://www.iddeea.gov.ba/wp-content/uploads/IDDEEA/eID/20_03_2023_Arhitektura_elektronskih_licnih_karti_BiH_V2.pdf)). Because the CAN uses that field, the 13-digit JMBG is probably not in the MRZ (unverified). Read the JMBG from the visual zone or type it, and check it with the JMBG check digit (mod 11).
- **BiH passport.** Biometric passport with a standard TD3 MRZ (ICAO 9303; the eID document says the card's ICAO application matches the passport's) (same source).
- **Neighbours.** Clients often hold Croatian, Serbian or Montenegrin IDs. All use ICAO MRZ formats (unverified per country).
- **How to read them.** MVP: manual entry plus photo upload. v1: in-browser photo, server-side OCR of the MRZ with Tesseract and `PassportEye` (MIT) or our own parser; validate check digits; prefill fields; the user confirms. Avoid the GPL-3 `mrz` package in closed code (PyPI metadata, checked 9 Oct 2026). Do not send ID images to US cloud OCR, to keep data in the EU. Chip reading (NFC) needs PACE/BAC keys and a phone app, so leave it for later.

### Qualified e-signature

- Four qualified signature issuers are on the Ministry of Communications and Transport register: the Indirect Taxation Authority (UIO), Halcom, IDDEEA and BH Pošta. IDDEEA issues qualified signatures to citizens free of charge; the others charge their own tariffs. Signatures rest on the Law on Electronic Signature, Sl. glasnik BiH 91/2006 ([Paragraf, 27 Aug 2025](https://www.paragraf.ba/dnevne-vijesti/27082025/27082025-vijest4.html)). An IDDEEA draft decision (Dec 2025) says 5-year certificates on ID cards will be free ([IDDEEA draft](https://www.iddeea.gov.ba/wp-content/uploads/2025/12/Nova-Odluka-o-visini-naknade-za-izdavanje-kvalifikovane-potvrde-107.docx)).
- The FBiH Tax Administration moved its e-services to qualified signatures. It integrated BH Pošta and Halcom first ([Paragraf, 26 Dec 2025](https://www.paragraf.ba/dnevne-vijesti/26122025/26122025-vijest4.html)), then IDDEEA in Oct 2026, so citizens can file tax returns online with an IDDEEA signature ([Paragraf, 2 Oct 2026](https://www.paragraf.ba/dnevne-vijesti/02102026/02102026-vijest4.html)). This matters: FBiH bookkeepers who file for clients will increasingly hold a qualified signature already, so accepting signed PDFs is realistic.
- The AML law accepts identification by a qualified certificate (Art. 22).
- **Design.** MVP: print, sign, stamp and upload a scan. This is what inspectors are used to. v1: accept PDFs signed with a qualified signature and validate the signature (PAdES) against the issuers' certificate chains. Later: signing inside the app through a qualified issuer, if one offers an API and the price fits.

### FOO reporting (AMLS)

- Reports go through the FOO's AMLS software (Art. 46-47 of Law 13/2024, [gazette](https://portalfo1.pravosudje.ba/vstvfo-api/vijest/download/127392)). I found no public API for obliged entities (unverified). The product should generate a filled-in report draft (PDF and a copy-paste view in the AMLS field order) and log the filing date and AMLS reference that the user enters.

## Data model

(being written)

## Architecture and stack

(being written)

## Security, privacy and liability

- **Data protection law.** BiH adopted a new Law on Personal Data Protection aligned with GDPR (EU 2016/679). It was adopted by both houses in Jan 2025 and published in Sl. glasnik BiH 12/2025 on 28 Feb 2025 ([fiscal-requirements](https://www.fiscal-requirements.com/news/4520-bosnia-and-herzegovina-aligns-with-gdpr-new-data-protection-law-from-october-5-2025); [CEELM](https://ceelm.com/jpm-jankovic-popovic-mitic/31249-new-personal-data-protection-law-enters-into-force-in-bosnia-and-herzegovina)). Sources give different start dates; most point to early October 2025 after a 210-day vacatio legis (exact date unverified). The regulator is the Personal Data Protection Agency (AZLP).

(more being written)

## Hosting and running costs

(being written)

## Development roadmap (12-week plan, then 6-12 months)

(being written)

## Team and build budget

(being written)

## Risks

(being written)

## Open questions

(being written)

## Sources

- https://portalfo1.pravosudje.ba/vstvfo-api/vijest/download/127392 (Sl. glasnik BiH 13/2024, full gazette text)
- https://a-count.hr
- https://www.un.org/sc/suborg/en/sanctions/un-sc-consolidated-list.html
- https://support.stp.one/hc/en-us/articles/33434862798877-LEXolution-Sanctions-Lists
- https://www.opensanctions.org/countries/ba/
- https://www.opensanctions.org/licensing/
- https://www.opensanctions.org/faq/api/metering/
- https://opensanctions.org/articles/2022-10-04-saas-api/
- https://www.slobodnaevropa.org/a/isil-bosna-hercegovina-sankcije/33683345.html
- https://www.tportal.hr/vijesti/clanak/bih-deblokiran-dom-naroda-s-vaznom-odlukom-ali-i-dalje-rizik-sive-liste-moneyvala-20260504
- https://www.paragraf.ba/dnevne-vijesti/16032026/16032026-vijest6.html
- https://www.fiscal-requirements.com/news/4520-bosnia-and-herzegovina-aligns-with-gdpr-new-data-protection-law-from-october-5-2025
- https://ceelm.com/jpm-jankovic-popovic-mitic/31249-new-personal-data-protection-law-enters-into-force-in-bosnia-and-herzegovina
