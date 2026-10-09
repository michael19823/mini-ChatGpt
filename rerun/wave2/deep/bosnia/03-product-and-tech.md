# BiH AML/CFT compliance SaaS: product and technical design

Part 3 of the Bosnia deep dive: product, technical design and development plan. Last updated 9 Oct 2026. Builds on the B1 re-assessment ([../reports/bosnia-and-herzegovina-b1.md](../reports/bosnia-and-herzegovina-b1.md)). "My estimate" marks numbers I derived; "(unverified)" marks facts I could not confirm.

## Summary

- **Build a plain, server-rendered web app** (Python/Django, PostgreSQL, HTMX) hosted in an EU region, with a lawyer-editable content layer: Word templates with simple tags, risk rules as tables with golden tests, indicator and questionnaire libraries, all versioned. One senior developer can build it; two make it fast.
- **The FUZIP questionnaire is the product spec.** The 2026 bookkeeper questionnaire has 49 items (numbered up to 60) and asks for annexes: risk assessment with a written analysis per factor, policies, PEP procedure, AP decision, training plan, indicator list and records. Item 39 asks whether the firm has an *information system* for client risk and monitoring. The product answers that item by existing ([questionnaire](https://fuzip.gov.ba/wp-content/uploads/2026/10/UPITNIK-ZSPNFT_Racunovodstvene-i-knjigovodstvene-usluge.pdf)).
- **The law text gives hard deadlines the app can own:** risk assessment updated yearly (Art. 10); AP and deputy notified to the FOO within 8 days (Art. 48(5)); own indicator list sent to the FOO and supervisor within 30 days (Art. 57(3)); training plan by end of March (Art. 54(3)); 10-year retention of client data and 4 years for AP, training and control records, then deletion (Art. 92) ([gazette](https://portalfo1.pravosudje.ba/vstvfo-api/vijest/download/127392)). FUZIP's Apr 2026 guidelines add a 4-level firm rating, 3 client risk levels plus "unacceptable", and re-rating triggers.
- **MVP (12 weeks):** onboarding wizard to firm risk assessment; internal acts generator (DOCX/PDF); AP register; training plan, log and one course with quiz; client register with CDD, BO and PEP statement; UN/EU/OFAC screening with review; client risk scoring with approvals; reminders; one-click FUZIP inspection pack. Bosnian UI; Bosnian and Serbian Cyrillic documents; FBiH, RS and Brcko variants (mainly supervisor and questionnaire differences, since the AML law is state-level).
- **v1 (months 4-9):** client self-service link, MRZ OCR, Excel import, confidential case log with STR and 30,000 KM cash-report drafts (filed by the user in the FOO's AMLS, which has no known API), real estate pack, RS and Brcko questionnaires, Croatian and Serbian Latin, consultant dashboard, retention engine and an "archive only" plan.
- **Data sources:** UN, EU and OFAC lists are free XML and were all downloaded on 9 Oct 2026 (UN 1,010 records; EU about 6,200; OFAC 19,416). The EU public-token file was 17 days old, so use a personal token. No machine-readable BiH sanctions list exists yet. PEP data is the weak spot: OpenSanctions has 266 BiH PEPs and charges EUR 0.03-0.10 per check; the law's domestic PEP list is far wider, so combine self-declaration, OpenSanctions and a curated BiH list. Business registers: Brcko publishes a daily open-data XML (6,689 entities, no owners); the FBiH register is an old web app with no API found; RS's beneficial-owner register is in test.
- **IDs and signatures:** BiH ID cards follow ICAO 9303 (ID-1, TD1 MRZ, chip). Read the MRZ in-house (Tesseract and PassportEye, MIT); do not send IDs to US OCR clouds. Four qualified e-signature issuers exist, IDDEEA's is free, and FBiH tax e-services now use them, so accepting QES-signed PDFs in v1 is realistic.
- **Privacy:** BiH's GDPR-style law (Sl. glasnik BiH 12/2025) applies: 72-hour breach notice, fines up to 40 million KM, transfers abroad need an adequacy decision or safeguards. I found no adequacy list or standard clauses, so get a lawyer's opinion on EU hosting in week 1. We are processor for client data; the 10-year AML hold overrides erasure requests.
- **Running cost is small:** about EUR 70-135 a month at 50 customers, EUR 310-445 at 300, EUR 800-1,135 at 1,000 (my estimates), about 4-14% of expected revenue. People are the cost.
- **Build cost:** MVP about EUR 27,000-47,000 cash; a full first year with two developers about EUR 95,000-150,000, which is more than the B1 year-3 revenue estimate (EUR 69,000-115,000 a year). A bootstrapped founder should go lean: concierge kits first (EUR 3,000-6,000), then one developer, about EUR 55,000-80,000 in year 1; or about EUR 15,000-25,000 if the founder codes.
- **Do the concierge MVP now.** FUZIP inspections run to end-2026, before any software could ship. Sell semi-manual document kits from week 3 (Nov-Dec 2026), then pilot the software in Jan-Feb 2027 and launch on 1 Mar 2027, before the end-of-March training-plan deadline.

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

### Legal requirements behind the features (from the law text)

These come from the gazette text of the Law on Prevention of Money Laundering and Financing of Terrorist Activities, Sl. glasnik BiH 13/2024, 19 Feb 2024 ([gazette PDF](https://portalfo1.pravosudje.ba/vstvfo-api/vijest/download/127392)). The law and Rulebook are covered in full in [01-law-and-requirements.md](01-law-and-requirements.md). These are the articles that drive features.

- **Risk assessment.** Must cover client, country or area, product or service, and channel risk. It must be documented and updated at least once a year (Art. 10(1)-(2)). Feature: firm risk assessment wizard with a yearly review task.
- **Policies.** Approved by top management (Art. 9(4)); internal acts must define identification procedures (Art. 11(2)). Feature: internal acts generator with an approval/signature step.
- **Authorised person and deputy.** Every obliged entity appoints one, plus one or more deputies (Art. 48(1)). In firms with four or fewer employees, the legal representative counts as the authorised person if nobody is appointed (Art. 48(4)). Name and job title of both, and of the senior manager responsible, go to the FOO within 8 days of appointment or change (Art. 48(5)). Feature: authorised person register with a "notify FOO within 8 days" task.
- **Authorised person must have unrestricted access, and others must not know why** (Art. 51(1)(a)). Feature: suspicious-activity cases visible only to the authorised person and deputy.
- **Indicator list.** Each obliged entity draws up its own list of indicators, following FOO and supervisor guidance, and keeps it updated (Art. 57(1)). It must send the list and every update to the FOO and its supervisor within 30 days (Art. 57(3)). The official list must form part of the firm's own list (Art. 57(5)). The FOO publishes sector lists as Word files on the SIPA site, including "revizija, računovodstvo" (audit, accounting), "nekretnine" (real estate), "terorizam" and a list of countries with strategic deficiencies ([SIPA FOO documents](https://www.sipa.gov.ba/bs/dokumenti/foo-podzakonski-akti), checked 9 Oct 2026); the Rulebook says the FOO updates them at least every two years (Rulebook Art. 7, per [01-law-and-requirements.md](01-law-and-requirements.md)). Feature: indicator list generator (FOO sector list + firm additions) with a "send within 30 days" task, and a re-send prompt whenever the FOO list changes.
- **Copies of ID.** The firm keeps a copy of the ID document, noting that the original was seen, with the date and the employee who did the check (Art. 15(14), Art. 61). Paper or electronic copies are both allowed (Art. 15 and Art. 60 last paragraph). Feature: ID upload with "original seen by / on" stamp.
- **Remote identification.** Video identification is allowed under conditions (Art. 21). Identification by a qualified certificate for e-signature or e-seal is allowed (Art. 22). Feature for later: accept a qualified-signature-signed client form.
- **PEPs.** Defined as holding a prominent public function now or in the last 12 months (Art. 4(r)). The domestic list is broad: Presidency members, chair of the Council of Ministers, ministers, deputy ministers and other heads of state institutions and agencies; presidents, prime ministers, ministers and deputies at entity, Brcko and canton level; mayors and municipal heads, all legislators down to canton level, members of party presidencies and party governing bodies, top judges and prosecutors, Central Bank board, diplomats, Joint Staff, and board members and directors of companies majority-owned by any level of government (Art. 4(s)). Family members and close associates are covered (Art. 4(u)-(v)). Firms must have a procedure to find out whether a client or its beneficial owner is a PEP. PEP clients need written senior-management approval and enhanced monitoring, and measures last at least 12 months after the person leaves office (Art. 34). A Council of Ministers by-law will set how the official list of public functions is formed and published (Art. 34, last paragraph). Feature: PEP self-declaration in the CDD form, PEP screening, and a "senior management approval" step.
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
- **FUZIP questionnaire for bookkeeping and accounting providers (2026).** 49 items in 11 sections (numbered 1-47, then 59-60; numbers 48-58 are skipped in the published form), signed by the authorised person "under full material and criminal liability". Many items ask for annexes: the risk assessment with a written analysis of each risk factor (item 21), policies, the PEP procedure, the AP appointment decision, the training plan, the indicator list and the records ([questionnaire PDF](https://fuzip.gov.ba/wp-content/uploads/2026/10/UPITNIK-ZSPNFT_Racunovodstvene-i-knjigovodstvene-usluge.pdf)). Item 39 asks whether the firm has an information system supporting client risk assessment and monitoring, and to describe it.
- **RS inspectorate.** In Jan 2026 it asked randomly chosen bookkeepers, accountants and auditors for internal acts, a 13-item questionnaire and a checklist within 10 days ([Paragraf, 29 Jan 2026](https://www.paragraf.ba/dnevne-vijesti/29012026/29012026-vijest1.html)). I could not see the 13 items (unverified). We need a copy from a pilot customer.

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
| Internal acts generator | Policy and procedures (PKP); risk assessment document; decision appointing the authorised person and deputy; notice of the authorised person to the FOO and AMLS registration letter; annual training plan; indicator list and cover letter to the FOO and supervisor; PEP procedure; client CDD form; PEP and BO statement. DOCX and PDF, versioned, with an approval record and upload of the signed scan | Internal control checklist and internal audit report (firms with more than 4 staff); data protection notice for clients; record of refused clients | Qualified e-signature of acts |
| Authorised person register | Current and past appointments, deputy, qualifications (Art. 49), FOO notice date | Absence/substitution log | |
| Training | Annual plan by 31 March; log (date, topic, trainer, attendees, hours, evidence); 1 short course with a 10-question quiz and certificate | 4-6 micro-courses (law basics, CDD and BO, PEPs, indicators for bookkeepers, indicators for real estate, data protection); per-person history | Paid courses for CPD points if the professional bodies allow it (unverified) |
| Client register and CDD | Person, sole trader (obrt), company; BO tree with the 25% rule; purpose and nature; source of funds; ID upload with "original seen by/on" stamp (Art. 15(14)); ID expiry; register extract upload with the date of the check; PEP self-declaration | Client self-service link; Excel import; ID MRZ reading; JMBG check-digit validation; proxy/representative handling (FUZIP item 33) | Register look-ups (FBiH/Brcko bizreg, RS BO register) |
| Sanctions and PEP screening | UN, EU, OFAC lists refreshed every 6 hours; fuzzy matching with diacritics and Cyrillic; review screen (true/false match with reason); nightly re-screen of all clients against changes; PEP self-declaration | OpenSanctions PEP check on demand; curated BiH PEP list (state, entity, canton, mayors); BiH domestic list entered by hand from the gazette | Adverse media search with a saved result |
| Client risk scoring | Rules from a lawyer-edited catalogue; low / medium / high / unacceptable (FUZIP guidelines Art. 8 and 10); explanation; manual override with reason; senior-management approval for PEP and high risk | Re-rating triggers from FUZIP guidelines Art. 13(4) (unusual activity, authority request, sanctions, big change, adverse media) | |
| Ongoing monitoring and reminders | Review dates by risk (default high 6 months, medium 12, low 24; firm can change); ID expiry; yearly risk assessment; training plan by 31 March; new staff trained within 60 days (Rulebook Art. 43(2)); 8-day AP notice; 30-day indicator list notice; weekly e-mail digest | Event log per client ("client changed activity"), with a 2-line note and a document, as A-count recommends | |
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

**At a glance**

| Source | Use | Access | Cost |
|---|---|---|---|
| UN Security Council Consolidated List | Sanctions screening (binding) | XML download | Free |
| EU consolidated financial sanctions list | Sanctions screening (EU alignment, best practice) | XML download with token | Free |
| OFAC SDN | Sanctions screening (best practice) | XML download | Free |
| BiH Council of Ministers decisions | Domestic freezes | Gazette, manual entry | Free, staff time |
| OpenSanctions API | Foreign and top BiH PEPs | REST API | EUR 0.03-0.10 per check; 2,000 free credits |
| Curated BiH PEP list | Domestic PEP long tail | Our own research | About 10-20 researcher hours a month (my estimate) |
| Brcko e-Registar open data | Company autocomplete and validation (Brcko) | Daily XML | Free |
| FBiH and RS business registers | Company checks | Web portals, no API found | Free, manual |
| ID cards and passports | CDD data entry | In-house MRZ OCR | Free (open source) |
| Qualified e-signature issuers | Signed client statements and acts | PDF signature validation | Free to validate |
| FOO sector indicator lists and country list (SIPA site) | Indicator library; high-risk country rules | Word (.doc) files, checked weekly for changes | Free |
| FOO AMLS | Reports | Manual filing by the user | Free |

### Sanctions lists (all free, all machine-readable; checked 9 Oct 2026)

| List | Endpoint | Format and size | Licence/cost | Notes |
|---|---|---|---|---|
| UN Security Council Consolidated List | `https://scsanctions.un.org/resources/xml/en/consolidated.xml` (redirects to a signed Azure blob URL) | XML, about 2.2 MB; 736 individuals and 274 entities on 9 Oct 2026 | Free, public | Tested by download on 9 Oct 2026. Schema at `https://www.un.org/sc/resources/sc-sanctions.xsd`. The UN describes the list and formats at [un.org](https://www.un.org/sc/suborg/en/sanctions/un-sc-consolidated-list.html). |
| EU Financial Sanctions Files (consolidated list) | `https://webgate.ec.europa.eu/fsd/fsf/public/files/xmlFullSanctionsList_1_1/content?token=dG9rZW4tMjAxNw` | XML v1.1, about 25.8 MB; 6,241 sanction entries (about 4,465 persons) | Free, public | The public-token file downloaded on 9 Oct 2026 was generated on 22 Sep 2026, so it can lag by weeks. A vendor note says an EU Login account can generate a personal token URL ([STP/LEXolution](https://support.stp.one/hc/en-us/articles/33434862798877-LEXolution-Sanctions-Lists)). Use a personal token in production and alert if the file is older than 3 days. |
| US OFAC SDN | `https://sanctionslistservice.ofac.treas.gov/api/PublicationPreview/exports/SDN.XML` (also `.../api/download/sdn_advanced.xml`; legacy `https://www.treasury.gov/ofac/downloads/sdn.xml`) | XML, about 29 MB; 19,416 records (7,497 individuals), published 9 Oct 2026 | Free, public | All three answered on 9 Oct 2026. Not legally binding in BiH, but banks and inspectors expect it as good practice (my view). |
| OpenSanctions (aggregated sanctions + PEPs) | Bulk: `https://data.opensanctions.org/datasets/latest/<dataset>/...`; API: `https://api.opensanctions.org/match/<dataset>` | FollowTheMoney JSON, CSV | CC BY-NC 4.0; commercial use needs a paid licence ([licensing](https://www.opensanctions.org/licensing/)). API: prepaid bundles from EUR 50 for 500 credits (EUR 0.10 per query) down to EUR 0.03 per query at 500,000 credits ([OpenSanctions API](https://www.opensanctions.org/api/)). Bulk licence was EUR 595 a month in 2022; current price on request ([2022 post](https://opensanctions.org/articles/2022-10-04-saas-api/)) | See PEP section below. |

### BiH-specific lists

- **No machine-readable BiH sanctions list was found.** The Council of Ministers has adopted ad-hoc decisions freezing assets of persons linked to terrorism ([RFE/RL](https://www.slobodnaevropa.org/a/isil-bosna-hercegovina-sankcije/33683345.html)). A new state law on restricting the disposal of assets to prevent terrorism, its financing and proliferation financing was adopted by the Council of Ministers in March 2026 and by the House of Peoples on 4 May 2026. It is meant to give BiH a working mechanism for UN sanctions, which MONEYVAL found missing in Dec 2024 ([tportal, 4 May 2026](https://www.tportal.hr/vijesti/clanak/bih-deblokiran-dom-naroda-s-vaznom-odlukom-ali-i-dalje-rizik-sive-liste-moneyvala-20260504); [Paragraf, 16 Mar 2026](https://www.paragraf.ba/dnevne-vijesti/16032026/16032026-vijest6.html)). The other house, publication and entry into force were not confirmed in my searches; nor whether it creates a national designation list (unverified). Design: a "BiH domestic list" table that staff fill by hand from Sl. glasnik BiH decisions until an official feed exists.

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
| RS Unified Information System for business registration (JIS, run with APIF) | RS registration portal (`bizreg.esrpska.com`, unreachable from my test environment) | Main ledger is public by law ([RS registration law](https://www.paragraf.ba/propisi/republika-srpska/zakon-o-registraciji-poslovnih-subjekata-u-republici-srpskoj.html)). Today firms buy extracts through APIF. A reform started in Oct 2025 would end the need to fetch APIF extracts every three months and give direct register access when contracts are signed ([Paragraf, 9 Oct 2025](https://www.paragraf.ba/dnevne-vijesti/09102025/09102025-vijest4.html)). The Dec 2025 bill (urgent procedure) gives notaries electronic access to the main ledger and creates the legal basis for a beneficial owner register ([Paragraf, 3 Dec 2025](https://www.paragraf.ba/dnevne-vijesti/03122025/03122025-vijest4.html)) | No public API found (unverified) | Deep link and upload now; watch for direct-access rules that might extend to AML obliged entities |
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
- AMLS access starts with a registration letter to the FOO: the AP appointment decision with names, phones and e-mails, firm data and JIB, plus (for non-financial firms) a court-register extract and the statistical classification notice (Rulebook Art. 42, per [01-law-and-requirements.md](01-law-and-requirements.md)). The MVP generates this letter with the AP decision.
- An EU-funded new AMLS is planned for mid-2027 (FOO 2025 report, per [01-law-and-requirements.md](01-law-and-requirements.md)). Keep report drafts as data plus a template, so the layout can change without code.

## Data model

### Main entities

Tenant boundary: every customer-data table carries `firm_id`. Content tables (templates, rules, lists) are global and versioned.

**Accounts and access**
- `Organization` (consultancy or billing account): name, tax ID, billing details.
- `Firm` (the obliged entity, our tenant): name, JIB/ID number, legal form, seat, `legal_variant` (FBIH, RS, BD), `supervisor`, sectors, employee count, default language and script, plan, `organization_id` (who pays).
- `User`: e-mail, name, MFA secret, locale.
- `Membership` (User x Firm): role (owner, authorised_person, deputy, staff, consultant, read_only), valid_from, valid_to.
- `ConsultantGrant` (Organization x Firm): granted_by, scope, granted_at, revoked_at.

**Firm-level compliance**
- `FirmProfile`: versioned answers to the wizard (JSON plus key columns).
- `FirmRiskAssessment`: profile version, `ruleset_version`, factor scores, 4-level rating, editable text per factor, approved_by/at, effective_from, next_update_due, sent_to_supervisor_at.
- `Document`: template code and version, language/script, legal variant, data snapshot (JSON), DOCX/PDF file keys, status (draft, approved, signed), approved_by/at, signed scan key, superseded_by.
- `APAppointment`: person, role (AP or deputy), from/to, decision document, `foo_notified_at`, qualifications note.
- `StaffMember`: name, job title, user_id (optional), start/end.
- `TrainingPlan` (firm, year, document, adopted_at), `TrainingSession` (date, topic, trainer, hours, evidence file), `TrainingAttendance` (session x staff, quiz score, certificate key).
- `FirmIndicatorList`: version, items (copied from library + own), sent_to_foo_at, sent_to_supervisor_at.
- `InternalControlCheck` (v1): year, checklist answers, findings.

**Clients and CDD**
- `Client`: type (natural person, sole trader, legal entity, legal arrangement), names, JMBG or JIB, addresses, nationality or seat country, activity (NACE), purpose and nature, source of funds, relationship start/end, status (prospect, active, refused, ended), `risk_level`, `next_review_at`, `retention_until`.
- `Person`: natural person data (name, date and place of birth, JMBG or foreign ID, nationality, address). Shared across a firm's clients so one BO linked to two companies is screened once.
- `ClientPerson` (Client x Person): role (self, legal representative, director, beneficial owner, proxy, PEP family/associate), ownership %, control type, how verified, verification difficulties (feeds the Art. 60(c) register).
- `IdentityDocument`: person, type, number, issuing authority and country, issue/expiry dates, MRZ raw, encrypted image keys, `original_seen_by`, `original_seen_at`.
- `RegisterExtract`: client, source, file, `checked_at`.
- `Declaration`: client or person, type (PEP, BO, source of funds), answers, method (paper scan, e-mail link, QES PDF), signed_at, file.
- `RiskScore`: client, `ruleset_version`, inputs, per-factor results, computed level, final level, override reason, `approved_by/at` (senior management for PEP/high).
- `Review` and `MonitoringEvent`: due/done dates, user, outcome, note, file.

**Screening**
- `WatchlistSource` (UN, EU, OFAC, BIH_MANUAL, OPENSANCTIONS) and `WatchlistVersion` (fetched_at, checksum, counts, diff stats).
- `WatchlistEntry`: source, external ID, schema (person/entity), names and aliases (normalised forms), dates of birth, nationalities, programme, listed_on, raw record; valid_from_version, valid_to_version.
- `ScreeningRun`: firm, subject (Person or Client), trigger (onboarding, delta, weekly, manual), list versions used.
- `ScreeningHit`: run, entry, score, explanation, status (open, false positive, possible, confirmed), decided_by/at, reason.

**Suspicion and reports (restricted)**
- `InternalReport`: staff concern on a client (who, when, text, indicators).
- `Case`: client, linked reports, indicators, analysis, decision (report/not), decided_by/at, reasons, `foo_filed_at`, `amls_reference`. Row-level access only for AP and deputy.
- `TransactionRecord` (v1): for 30,000 KM cash and linked cash, high-risk-country transactions, unusual transactions (Art. 33, 43), real estate deals: date, amount, currency, method, parties, purpose, origin of funds, flags.

**Records, retention, audit**
- `RetentionRule` (global content): category, years, trigger (relationship end, appointment, training, control). Defaults: 10 years for client and CDD data, 4 years for AP, training and internal control (Art. 92).
- `DeletionLog`: what was deleted, when, by which rule (no personal data kept in the log).
- `AuditEvent`: firm, actor, action, object type and ID, field-level diff hash, IP, time, `prev_hash` (hash chain so tampering shows).
- `InspectionPack`: supervisor, questionnaire version, computed answers, annex list, files, generated_at, generated_by.

**Content (global, versioned, edited by the lawyer)**
- `Template`: code, doc type, sector, legal variant (or ALL), language/script, version, status, DOCX file, variable schema, effective_from, reviewed_by, change note.
- `Clause`: reusable text blocks (DOCX sub-documents) with the same versioning.
- `RuleSet`: version, factor tables, hard rules, thresholds, golden test cases.
- `IndicatorLibraryItem`: code, text per language, sector, source, version.
- `Questionnaire`: supervisor, sector, version, items with answer mapping and annex mapping.
- `HighRiskCountryList`: source (EU, FATF, Art. 86 list), countries, valid dates.
- `Course`, `Lesson`, `Quiz`, `Question`: text per language, version.

### Key relations (simplified)

```
Organization 1--* ConsultantGrant *--1 Firm 1--* Membership *--1 User
Firm 1--* FirmProfile 1--1 FirmRiskAssessment
Firm 1--* Document *--1 Template(version)
Firm 1--* APAppointment, TrainingPlan 1--* TrainingSession 1--* TrainingAttendance
Firm 1--* Client 1--* ClientPerson *--1 Person 1--* IdentityDocument
Client 1--* RiskScore *--1 RuleSet(version)
Person|Client 1--* ScreeningRun 1--* ScreeningHit *--1 WatchlistEntry *--1 WatchlistVersion
Client 1--* Case (restricted) 1--* InternalReport
Firm 1--* InspectionPack *--1 Questionnaire(version)
everything --> AuditEvent
```

### Rules and template engine (lawyer edits without code)

- **Risk rules as tables, not code.** Each factor has: code, category (client, geography, product/service, channel), question, options and points, and optional "floor" rules. Example floors: confirmed sanctions match means "unacceptable"; PEP, family member or close associate means at least "high"; client or BO linked to a high-risk third country means at least "high"; non-face-to-face without qualified e-ID means at least "medium". The overall level comes from thresholds on the summed points, then the floors apply. Under the hood the conditions are stored as JSON Logic, but the lawyer only sees dropdowns and number fields.
- **Golden tests.** Each rule set carries 20-40 sample clients and firms with the expected result. The admin will not publish a rule set unless all tests pass. A second person must approve.
- **Every result is reproducible.** A risk score stores the rule-set version and the inputs, so an inspector can see why a client was "medium" in March 2027 even after the rules changed.
- **Templates are Word files.** The lawyer edits DOCX in Word with simple tags: `{{ firm.name }}`, `{% if firm.employees <= 4 %} ... {% endif %}`, `{{ clause("ap_small_firm") }}`. Rendering uses `docxtpl` (LGPL-2.1; fine as an unmodified library) and LibreOffice (through Gotenberg) for PDF. The admin shows the list of available variables and previews the document with 3 test firms (FBiH bookkeeper with 1 person, RS office with 8 staff, Brcko real estate agency).
- **Variants with a fallback chain.** The engine looks for `doc_type + sector + legal_variant + language`, then falls back to `ALL` variants. Most text is common because the AML law is state-level. Variant files hold supervisor names, addresses, questionnaire references and script.
- **Languages.** The lawyer writes the Bosnian master. A reviewer produces Croatian and Serbian (ijekavian) versions using a term list (for example član/članak, lice/osoba, finansiranje/financiranje). Serbian Cyrillic is generated from Serbian Latin at render time with `cyrtranslit` (MIT) and an exception list for acronyms (FOO, JIB, PEP, UN, EU) and foreign names. A diff tool flags when the master changed but a translation did not.
- **Publishing.** Draft, lawyer review, second approval, publish with an effective date and a short change note. Customers' existing documents never change silently. They see "New version available: what changed" and regenerate with one click.
- **Questionnaire mapping.** Each item maps to an expression over stored data (for example, item 46 "training plan adopted by March" is true if `TrainingPlan(year).adopted_at <= 31 March`) plus the annexes to attach. Gaps are shown before export.

## Architecture and stack

### Recommendation: one boring monolith

- **Language and framework:** Python 3.13 with Django (5.2 LTS, or 6.x; 6.1.2 is current on PyPI, checked 9 Oct 2026). Reasons: built-in admin for the lawyer's content area, mature auth and i18n (with `sr-latn` and Cyrillic `sr` locales), strong form handling, and the best libraries for this job are Python: `docxtpl` for Word templates, `followthemoney`/`rigour`/`nomenklatura` and `rapidfuzz` for name matching (all MIT), `PassportEye` for MRZ (MIT), `pypdf` and WeasyPrint for PDFs (BSD) (PyPI metadata, checked 9 Oct 2026). A PHP team could use Laravel with Livewire instead, with similar effort, but would lose the Python matching and DOCX tools.
- **Front end:** server-rendered HTML with HTMX and a little Alpine.js. No SPA. The app is forms, lists and documents. This keeps one codebase, fast pages on weak connections, and easy printing.
- **Database:** PostgreSQL 17 or later. `pg_trgm` for fuzzy candidate search, JSONB for profile answers and rule tables, row-level security for tenant isolation.
- **Background jobs:** Procrastinate (Postgres-backed queue, MIT), so no Redis is needed at first. Jobs: list refresh every 6 hours; delta screening nightly; full re-screen weekly; reminders daily at 07:00; weekly digest e-mail; retention sweep weekly; document rendering on demand.
- **Documents:** `docxtpl` renders DOCX; a Gotenberg container (LibreOffice) converts to PDF; `pypdf` merges the inspection pack; WeasyPrint for HTML-to-PDF records (screening certificates, CDD records).
- **Files:** S3-compatible object storage in the EU. Envelope encryption for ID images and declarations (per-firm data key, AES-256-GCM, master key outside the database). Virus scan on upload (ClamAV).
- **Screening service:** a module in the monolith. Normalise names (lower case, strip or map diacritics: č/ć to c, đ to dj, dž to dz, š to s, ž to z; Cyrillic to Latin; drop legal suffixes like d.o.o.), pull candidates with trigram search, score with token-based Jaro-Winkler/Levenshtein, raise or lower by birth year and nationality, and store the explanation. The lists are small (UN 1,010 records, EU about 6,200, OFAC SDN about 19,400 on 9 Oct 2026), so this is cheap. Later, self-host `yente` if we license OpenSanctions bulk data.
- **Multi-tenancy:** one database; `firm_id` on every tenant row; Django query scoping plus Postgres RLS (`SET app.firm_id` per request) as a second wall; automated tests that try cross-tenant reads. Consultants switch firm in the session; every query is still scoped to one firm at a time.
- **i18n:** UI strings in gettext `.po` files (bs, hr, sr-latn, sr-cyrl), translated in Weblate or similar. Dates, numbers and KM currency formats per locale.
- **E-mail:** an EU transactional e-mail provider; SPF/DKIM/DMARC on our domain.
- **Payments:** invoices with bank transfer (virman) first. That is normal for BiH B2B. Stripe does not appear to serve BiH-registered businesses (third-party claim, unverified; [incorpuk](https://incorpuk.com/blog/how-to-open-stripe-account-in-bosnia-herzegovina/)). Add a local card gateway later if needed.
- **Deploy:** Docker Compose on 1-3 VMs behind Caddy (automatic TLS), or a container PaaS in an EU region. CI runs unit tests, tenant-isolation tests, template render tests and golden rule tests on every change.
- **Observability:** structured logs with no personal data; error tracking (self-hosted GlitchTip, or an EU-hosted service); uptime checks; a status page.

### Diagram

```
Browser (HTMX)  ->  Caddy (TLS)  ->  Django app (web)  ->  PostgreSQL (RLS, PITR backups)
                                        |   ^                     ^
                                        v   |                     |
                                   Procrastinate workers ---------+
                                     |        |        |
                     UN/EU/OFAC feeds   Gotenberg   Object storage (encrypted files)
                     OpenSanctions API  (DOCX->PDF)  + offsite backup copy
                     E-mail provider
```

## Security, privacy and liability

### Data protection law

- **New law.** BiH adopted a GDPR-style Law on Personal Data Protection, Sl. glasnik BiH 12/2025 ([DLA Piper](https://www.dlapiperdataprotection.com/index.html?c=BA&t=law); [fiscal-requirements](https://www.fiscal-requirements.com/news/4520-bosnia-and-herzegovina-aligns-with-gdpr-new-data-protection-law-from-october-5-2025); [CEELM](https://ceelm.com/jpm-jankovic-popovic-mitic/31249-new-personal-data-protection-law-enters-into-force-in-bosnia-and-herzegovina)). It was adopted on 30 Jan 2025. DLA Piper says it entered into force on 8 Mar 2025; other sources say it applies from early October 2025 after a 210-day transition. Either way it applies now. Regulator: the Personal Data Protection Agency (AZLP).
- **What it means for us** ([DLA Piper](https://www.dlapiperdataprotection.com/index.html?c=BA&t=law)):
  - Breach notice to the Agency within 72 hours; tell the people affected if the risk is high.
  - Risk-based security measures, tested and documented.
  - No central filing; records of processing must be kept (firms under 250 staff are generally exempt unless the processing is high-risk, regular or involves sensitive or criminal data, which AML data arguably is).
  - DPO required for large-scale systematic monitoring or large-scale sensitive/criminal data. Our screening of many firms' clients may count; appoint a DPO (can be external) from the pilot stage to be safe (my view).
  - Fines up to 40 million KM or 4% of worldwide turnover.
  - Transfers abroad: to countries the Agency assesses as adequate and the Council of Ministers confirms, or with safeguards such as Agency-adopted standard contractual clauses, or explicit consent.
- **Transfer gap.** I could not find a Council of Ministers adequacy list or Agency standard clauses (unverified). This decides whether EU hosting is simple. Ask the lawyer for a written opinion in week 1. Arguments for EU hosting: EU states have GDPR, BiH aims for EU alignment, and BiH ratified Council of Europe Convention 108 ([FENA, Jan 2023](https://fena.ba/article/1303653/reljic-after-ratification-of-convention-108-the-priority-is-to-pass-a-new-law)). Fallback: a BiH-hosted deployment for customers who require it.
- **Roles.** Each obliged firm is the controller of its client data. We are its processor. We sign a processing agreement (DPA) with every customer, list sub-processors (hosting, e-mail, OpenSanctions), and process only on instructions. We are controller for our own user accounts and billing.
- **AML vs deletion.** The AML law requires 10-year retention of client and CDD data after the relationship ends, and 4 years for AP, training and internal control records. After that, personal data must be destroyed (Art. 92, [gazette](https://portalfo1.pravosudje.ba/vstvfo-api/vijest/download/127392)). So:
  - retention clocks start when the user marks a relationship "ended";
  - deletion runs automatically after the period, with a 30-day warning and a log;
  - right-to-erasure requests from the firm's clients are refused for data under the AML hold, with the legal basis shown;
  - when a customer leaves, we offer a full export (PDFs plus CSV/JSON) and an "archive only" plan, because the firm's 10-year duty continues. A-count deletes data a month after a subscription ends ([A-count FAQ](https://a-count.hr/faq)); we should not.
- **Special care data.** ID images, JMBG, PEP status and suspicion cases are the most sensitive. Suspicion data also falls under the AML confidentiality and tipping-off rules (the AP must have access others lack, Art. 51(1)(a)). Keep cases in a restricted area with separate encryption and access logs.

### Security baseline (MVP)

- TLS everywhere; HSTS.
- MFA (TOTP) required for owners, authorised persons, deputies and consultants; optional for staff.
- Argon2 password hashing; login rate limits; session timeout after 30 minutes idle.
- Role-based access plus RLS; restricted case log.
- Encryption at rest (disk and database by the provider; envelope encryption for files).
- Append-only audit log with hash chain; shown to the AP; exported in the inspection pack on request.
- Daily encrypted backups plus continuous WAL archiving (point-in-time recovery 14-30 days) to a second EU provider; monthly restore test; recovery targets: data loss under 15 minutes, back online within 8 hours.
- Support access only with the customer's time-limited consent; logged.
- Dependency updates weekly; an external penetration test before the paid launch and yearly.
- Written policies: information security, incident response (72-hour notice), access control, backup, vendor list. These also answer customers' due diligence.

### Liability and disclaimers

- **Position the product as a tool plus vetted templates, not legal advice.** Every document shows "template version X, reviewed by [law firm] on [date]". The user must review, adapt and approve. The owner's approval is recorded.
- **Terms:** liability capped at fees paid in the last 12 months; no liability for fines where the user did not follow the tasks or ignored hits; a clear statement that the product does not file with the FOO or the supervisor.
- **Screening disclaimer:** screening covers listed sources at a stated time; a "no match" is not a guarantee; the user decides.
- **Change duty:** we commit to update templates within 30 days of a relevant law or by-law change and notify users; this is also our renewal story.
- **Insurance:** professional indemnity or cyber cover for the company (availability and price in BiH unverified).
- **Lawyer relationship:** a written agreement with the AML lawyer on content review hours and responsibility; consider a "lawyer-reviewed" badge and an optional paid review service through the lawyer (referral, not our advice).

## Hosting and running costs

### Choice: EU region (Germany or France), not local

- **Why EU:** cheap and reliable; GDPR-grade providers; managed databases exist; A-count uses EU hosting as a selling point ([A-count FAQ](https://a-count.hr/faq)). Local BiH providers exist (for example HT Eronet's cloud servers in its Mostar data centre ([HT Eronet terms](https://www.hteronet.ba/dokumenti/download/502))), but I found no public prices, managed Postgres or object storage (unverified). Keep local hosting as an option for a customer or regulator that insists.
- **Provider note:** Hetzner raised cloud prices on 15 Jun 2026 for new orders: CX23 from EUR 3.99 to 5.49, CPX22 from 7.99 to 19.49, CCX13 from 15.99 to 42.99 a month, and its CX/CAX lines could not be ordered on 1 Oct 2026 ([wz-it](https://wz-it.com/en/blog/hetzner-price-increase-june-2026-cpx-ccx-alternatives/)). Scaleway's managed PostgreSQL starts around EUR 11-17 a month for the smallest nodes, with block storage at about EUR 0.10/GB and backups at EUR 0.03/GB a month ([Scaleway pricing](https://www.scaleway.com/en/pricing/managed-databases-pricing/)). Prices move, so budget with headroom.

### Monthly running cost estimate (my estimates, EUR, excluding VAT and staff)

| Item | 50 customers | 300 customers | 1,000 customers |
|---|---|---|---|
| App servers | 1 VM, 4 vCPU/8 GB: 20-45 | 1-2 VMs: 45-90 | 2-3 VMs + load balancer: 120-200 |
| PostgreSQL | on the app VM, self-managed: 0 | managed, small: 25-60 | managed, HA pair: 120-250 |
| Object storage (IDs, documents) + offsite backup | 5-10 (under 50 GB) | 10-25 (about 200 GB) | 30-60 (about 700 GB) |
| Gotenberg/worker VM | shared: 0 | 15-20 | 20-45 |
| Transactional e-mail | 0-15 | 15-30 | 30-60 |
| Error tracking, uptime, logs | 0-20 | 20-40 | 40-80 |
| OpenSanctions PEP checks (see PEP section) | about 35 | about 170 | about 420 |
| Domain, certificates, misc. | 10 | 10 | 20 |
| **Total** | **about 70-135** | **about 310-445** | **about 800-1,135** |
| Per customer per month | about 1.4-2.7 | about 1.0-1.5 | about 0.8-1.1 |

At the planned average price of about 450 KM (EUR 230) a year, or about EUR 19 a month per customer (from the [B1 re-assessment](../reports/bosnia-and-herzegovina-b1.md)), infrastructure is about 4-14% of revenue. People, not servers, are the cost.

One-off and yearly extras: penetration test EUR 2,000-5,000 a year; DPO service EUR 100-300 a month if external; legal content upkeep (see budget). All my estimates (unverified).

## Development roadmap (12-week plan, then 6-12 months)

### Timing matters

FUZIP's AML inspection programme runs to the end of 2026 ([Paragraf, 1 Oct 2026](https://www.paragraf.ba/dnevne-vijesti/01102026/01102026-vijest1.html)). A 12-week software build that starts in mid-October ends in January 2027, after that wave. So run a **concierge MVP from week 3** to sell document kits during the Oct-Dec wave, and use the software pilot to catch the next deadlines: the training plan due by end of March (Art. 54(3)) and yearly risk-assessment updates.

The plan assumes a start on Mon 19 Oct 2026, with a holiday buffer from 28 Dec 2026 to 10 Jan 2027 (New Year and Orthodox Christmas).

### Phases

| Phase | When | Goal |
|---|---|---|
| 0. Discovery | Weeks 1-2 (19 Oct-1 Nov 2026) | Interviews, real documents and questionnaires in hand, content outline, hosting/transfer opinion, tech skeleton |
| 1. Concierge MVP | Weeks 3-10 (Nov-Dec 2026), in parallel | Sell and deliver document kits made semi-manually; learn what buyers really need |
| 2. Software MVP | Weeks 2-10 | Build the MVP column of the feature map |
| 3. Pilot | Weeks 11-16 (mid-Jan to end-Feb 2027) | 10-15 firms using the software; fix; prove the inspection pack |
| 4. v1 | Mar-Aug 2027 | Client portal, OCR, case log and FOO drafts, real estate pack, RS/Brcko questionnaires, more languages, consultant dashboard, retention engine |
| 5. v2 | Sep 2027-Feb 2028 | Register look-ups, qualified signatures, inspection room, curated PEP list at scale, preparation for Montenegro/Serbia |

### Week by week (first 12 weeks)

| Week (start date) | Product and content | Engineering | Sales and pilot | Legal checkpoint |
|---|---|---|---|---|
| 1 (19 Oct) | 10-12 interviews: 5 FBiH bookkeepers (1-2 in Croat-majority areas), 3 RS bookkeepers, 1 Brcko, 2 real estate agencies, 1 consultant. Collect their current AML papers, the FUZIP questionnaires, and the RS 13-item questionnaire | Repo, CI, hosting account, Django skeleton, auth with MFA, tenant model | Landing page "FUZIP kontrole do kraja 2026" with a waitlist and kit pre-order | Kick-off with the lawyer: scope, hours, liability split |
| 2 (26 Oct) | Document list and variable dictionary; risk factor catalogue v0 (from the law and FUZIP guidelines); FUZIP item map | Data model, roles, RLS policies and tests; i18n scaffolding | Pick concierge price (for example 199-299 KM per kit) | **LC1:** content outline approved; written opinion on EU hosting and transfers |
| 3 (2 Nov) | Lawyer drafts Bosnian master: policy (PKP), risk assessment, AP decision, AP notice to FOO, training plan | Onboarding wizard (firm profile); document pipeline (docxtpl + Gotenberg) | **Concierge starts:** online form -> script -> lawyer/founder check -> DOCX by e-mail | **LC2a:** the 5 core kit documents approved for concierge sales (nothing is sold before this) |
| 4 (9 Nov) | Indicator library v0 from the FOO lists (accounting/audit, real estate, terrorism) plus firm-specific examples; PEP and BO statement; CDD form | Rules engine v0 with golden tests; firm risk assessment output | First 5-10 paid kits delivered; note every manual fix | |
| 5 (16 Nov) | Training course 1 text and 10-question quiz | Second developer joins. Client register, persons, BO tree, ID upload with encryption | Webinar with an association or seminar organiser (target 50 attendees) | |
| 6 (23 Nov) | Serbian (ijekavian) variant and Cyrillic check | Sanctions ingestion (UN, EU, OFAC), versioning, diffs; matching; hit review screen | 20-30 kits sold (target) | **LC2b:** full template set v1 (incl. CDD forms, indicator list, Serbian variant) signed off |
| 7 (30 Nov) | Client risk factor tables; review intervals | Client risk scoring, overrides, senior-management approval; tasks and reminders; weekly digest e-mail | Recruit 10-15 pilot firms from kit buyers | |
| 8 (7 Dec) | Questionnaire mapping text for all 49 items | Training module (plan, log, course player, certificate); AP register; indicator list builder | | |
| 9 (14 Dec) | ToS, DPA, privacy notice, disclaimers, security policies | Inspection pack (pre-filled questionnaire, annexes incl. item 39 "information system" description, ZIP and merged PDF); Cyrillic output | | **LC3:** risk rules, questionnaire mapping, ToS/DPA and disclaimers approved |
| 10 (21 Dec, light week) | Pilot onboarding guide and 5 short videos | Hardening: audit log hash chain, backup and restore drill, load test, external light penetration test | Pilot contracts (free until 1 Mar 2027 in exchange for weekly feedback) | |
| Buffer (28 Dec-10 Jan) | Holidays | Fix pen-test findings | | |
| 11 (11 Jan 2027) | Watch users onboard live (screen share) | Fixes; data import of concierge customers into the app | Pilot starts: 10-15 firms incl. 1-2 consultants and 2 agencies | |
| 12 (18 Jan) | Pilot review; MVP definition of done check | Fixes; monitoring dashboards | Price and plan decision; paid launch set for 1 Mar 2027 | **LC4:** pilot findings, any new by-laws (indicator list, PEP functions list), mock inspection of 2 pilot packs |

### Definition of done for the MVP

1. A new firm in any of the three variants goes from sign-up to a full, approved document set in **under 60 minutes**, without our help, in at least 8 of 10 pilot firms.
2. The inspection pack answers **all 49 FUZIP bookkeeper items**, with annexes, for a pilot firm with real data; the lawyer's mock inspection finds no missing document.
3. Client onboarding with ID, BO, PEP statement, screening and risk level takes **under 10 minutes** for a simple client.
4. Screening: lists refresh automatically; a test set of 50 known listed names (with diacritics, Cyrillic and spelling variants) is caught; false positives stay under 1 per 20 BiH clients on a pilot data set (target to tune).
5. Reminders fire correctly for all deadline types in an automated time-travel test.
6. Tenant isolation tests pass; penetration test has no open high or critical findings; restore from backup tested.
7. All templates show version and legal review date; LC1-LC3 signed off.
8. Bosnian Latin UI; documents in Bosnian and Serbian Cyrillic; RS and Brcko variants produce correct supervisor names and addresses.
9. At least 5 pilot firms say they would pay the planned price.

### If there is only one developer

The 12-week plan assumes a second developer from week 5. With one developer, plan 16-18 weeks for the same scope, or keep 12-14 weeks by moving the course player, Cyrillic output and the consultant role to v1. Keep the concierge track unchanged either way.

### After week 12: months 4-12

- **Months 4-6 (Feb-Apr 2027):** paid launch 1 Mar; client self-service link with e-mail OTP signature; Excel import; MRZ OCR; Croatian and Serbian Latin; consultant portfolio dashboard; training courses 2-4; yearly update wizard. Legal: quarterly law watch.
- **Months 7-9 (May-Jul 2027):** confidential case log, indicator checklist, STR and 30,000 KM cash report drafts; unusual-transaction and other Art. 60 registers; real estate sector pack and FUZIP real estate questionnaire; RS and Brcko questionnaires; retention engine and "archive only" plan; OpenSanctions PEP checks.
- **Months 10-12 (Aug-Oct 2027):** curated BiH PEP list v1; QES-signed PDF validation; Brcko register autocomplete; read-only inspection room; second pen test; review of Montenegro and Serbia law fit for the same engine.

### Concierge MVP option

- **What:** a simple online form (25-35 questions) feeds the same Word templates through a script. The founder or a trained assistant checks the output, the lawyer spot-checks, and the customer gets DOCX/PDF files by e-mail plus a client register spreadsheet template and a one-page "what to do yearly" checklist. Price as a one-off kit (for example 199-299 KM), with a credit toward the software subscription later.
- **Cost:** about EUR 3,000-6,000 (lawyer drafting most of the templates, a form tool, a 2-3 day script) (my estimate). Time to first sale: 2-3 weeks.
- **Choose it when:** (1) the deadline wave is now (Oct-Dec 2026) and software cannot be ready in time; (2) willingness to pay is unproven; (3) the content is not yet stable (for example, the indicator-list and PEP-functions by-laws are still pending); or (4) money for two developers is not secured.
- **Move to software when:** about 30 or more kits are sold, buyers ask for the client register and reminders, or manual work per kit exceeds about 1 hour. The templates and the rules from the concierge phase move into the product as they are, so little work is wasted.

## Team and build budget

### Team

| Role | Load | When | Notes |
|---|---|---|---|
| Founder (product, content PM, sales, QA) | Full-time | Throughout | Owns interviews, questionnaire mapping, pilot support |
| Senior full-stack developer (Python/Django) | Full-time | From week 1 | Tech lead; architecture, security, screening |
| Second developer (mid-level) | Full-time | From week 5 | Forms, documents, training module, admin |
| AML lawyer | 80-120 hours for the MVP, then about 10-15 hours a month | From week 1 | Content and legal checkpoints LC1-LC4 |
| Translator/proofreader (hr, sr, Cyrillic) | 20-30 hours | Weeks 5-9 | Term list and variants |
| UX/UI designer (freelance) | 40-60 hours | Weeks 2-6 | Forms, dashboard, PDF layouts |
| Penetration tester (external) | One test | Week 10 | Then yearly |
| PEP researcher (part-time) | 10-20 hours a month | From month 7 | Curated BiH PEP list |

### Cost basis (estimates)

- BiH average net wage was 1,675 KM a month in Jan-Jun 2026 ([BHAS](https://bhas.gov.ba/data/Publikacije/Saopstenja/2026/LAB_04_2026_H1_1_HR.pdf)). Developers earn several times more: Levels.fyi shows a median software-engineer total pay of about 45,000 KM a year (25th-75th percentile 31,700-92,900 KM) ([Levels.fyi](https://www.levels.fyi/t/software-engineer/locations/bosnia-and-herzegovina)). Senior contractors charge USD 28-55 an hour, median USD 44 ([Lemon.io, Sep 2026](https://lemon.io/rate-calculator/bosnia-and-herzegovina/)).
- I assume employer cost of about EUR 3,000-4,000 a month for a senior developer and EUR 1,800-2,600 for a mid-level one; contractors EUR 30-40 an hour senior, EUR 20-28 mid (my estimates, unverified).
- FBiH lawyers bill by a point tariff; the point value rose from 3.00 to 5.60 KM in 2025 ([Paragraf, 13 Jun 2025](https://www.paragraf.ba/dnevne-vijesti/13062025/13062025-vijest5.html)). For advisory work I assume a negotiated EUR 50-75 an hour (unverified).

### Build budget (EUR, cash costs, founder unpaid)

| Item | MVP (12 weeks) | v1 (months 4-9) | Months 1-9 total |
|---|---|---|---|
| Senior developer | 10,000-16,000 | 18,000-24,000 | 28,000-40,000 |
| Mid developer | 4,000-7,000 | 11,000-16,000 | 15,000-23,000 |
| AML lawyer | 4,000-9,000 | 4,000-6,000 | 8,000-15,000 |
| Translation and proofreading | 800-1,500 | 800-1,500 | 1,600-3,000 |
| UX/UI freelance | 1,500-3,000 | 1,000-2,000 | 2,500-5,000 |
| Pen test | 2,000-3,000 | 2,000-3,000 | 4,000-6,000 |
| Infrastructure and tools | 500 | 1,000-2,000 | 1,500-2,500 |
| Training course production | 500 | 2,000-3,000 | 2,500-3,500 |
| PEP research | — | 1,500-3,000 | 1,500-3,000 |
| Pilot travel and events | 500-1,000 | 1,000-2,000 | 1,500-3,000 |
| Contingency (about 15%) | 3,500-6,000 | 6,000-9,000 | 9,500-15,000 |
| **Total** | **about 27,000-47,000** | **about 48,000-71,000** | **about 75,000-118,000** |

Months 10-12 add about EUR 20,000-30,000 at the same team size. So a **full first year with two developers costs about EUR 95,000-150,000** (about 186,000-293,000 KM). The MVP alone is about 53,000-92,000 KM (at 1.95583 KM/EUR).

**Reality check.** The B1 re-assessment puts year-3 revenue at about EUR 69,000-115,000 a year ([B1 report](../reports/bosnia-and-herzegovina-b1.md)). A full two-developer first year costs more than that. A bootstrapped founder should take the **lean path**:

- concierge kits first (EUR 3,000-6,000), which also pay for themselves if 30 or more sell;
- one senior developer only, with the founder as product owner, content manager and tester; v1 stretches to month 12;
- lean first-year cash cost about EUR 55,000-80,000 (about 108,000-156,000 KM): developer EUR 36,000-48,000, lawyer EUR 8,000-12,000, the rest design, pen test, translation, tools and contingency (my estimate);
- add the second developer only at about 150 paying customers (about EUR 35,000 a year of revenue).

If the founder writes the code, first-year cash cost falls to about EUR 15,000-25,000 (lawyer, design, pen test, translation, tools).

## Risks

| Risk | Why it matters | Mitigation |
|---|---|---|
| **Content liability** | A customer is fined and blames our templates | Lawyer review with dated versions; owner approval recorded; liability cap; insurance; "tool, not advice" positioning |
| **Rules and lists change** | FOO sector indicator lists are updated at least every 2 years; the list of public functions for PEPs (Art. 34) is still to come (unverified); the new asset-freeze law may create a BiH list; a new AMLS is planned for mid-2027 | Content in tables and templates, not code; weekly check of the SIPA files; quarterly law watch; 30-day update promise |
| **Data breach of ID images and JMBGs** | High harm, 72-hour notice, fines up to 40 million KM | Envelope encryption, MFA, minimal staff access, pen tests, no US OCR, incident plan |
| **Transfer rules unclear for EU hosting** | No adequacy list or Agency clauses found (unverified) | Lawyer opinion in week 1; DPA with customers; BiH-hosted fallback |
| **Screening noise** | Common BiH names produce false hits; users stop looking | Birth date and nationality scoring; tuned thresholds; one-click "not the same person" with reason; re-alert only on list changes |
| **PEP coverage gaps** | OpenSanctions covers 266 BiH PEPs; the law covers thousands | Self-declaration plus a curated list; say clearly what is covered |
| **Registers lack APIs** | FBiH register is an old web app; RS unreachable from tests; BO registers not public | Upload with "date checked" in MVP; Brcko open data; add look-ups only where terms allow |
| **AMLS has no interface** | We cannot file for users | Prepare drafts and log references; never claim to file |
| **Supplier price shocks** | Hetzner raised prices sharply in Jun 2026; OpenSanctions bundles may change | Keep infrastructure under 15% of revenue; portable Docker setup; official lists are free |
| **Bus factor** | One developer holds everything | Boring stack, docs, CI, infrastructure as code, second developer or retained contractor |
| **Language and script politics** | Users in RS expect Cyrillic; Croat-majority areas expect Croatian | Variants planned; auto-Cyrillic in the MVP; Croatian in v1 |
| **Low digital comfort** | Older sole bookkeepers may struggle | Printable everything, video help, phone onboarding in the pilot, consultant channel |
| **Competitor localises** | A-count already has the full workflow for Croatia | Move first; BiH-specific inspection packs and RS/Brcko variants; association partnerships |
| **Churn after documents exist** | Firms may stop paying | Client register, screening, reminders, training log and 10-year archive are ongoing value |

## Open questions

1. Has the list of public functions for PEPs (Art. 34) been adopted and published? (The FOO sector indicator lists are published on the SIPA site.)
2. Has the 2026 law on restricting the disposal of assets (terrorism, proliferation) been published, and does it create a BiH designation list with a machine-readable feed?
3. What is the exact RS inspectorate questionnaire (13 items) and checklist? Does Brcko's Finance Directorate use its own questionnaire?
4. Does the FOO's AMLS offer obliged entities any import format (XML/CSV) or only manual entry? What fields does the STR form have?
5. Under the new data protection law, has the Council of Ministers confirmed any adequacy list, or has the Agency adopted standard contractual clauses? Is EU hosting allowed on a simple processor agreement?
6. Does the AML law's 10-year retention clock, as interpreted by inspectors, start at the end of the relationship for all CDD data, including ID copies? (Art. 92(1) suggests yes.)
7. Is the JMBG in the BiH ID card MRZ, or only in the visual zone and chip?
8. Do the FBiH register, the RS APIF portal and the RS BO register allow automated look-ups, and on what terms?
9. Are CIK asset declarations public again? Is there any machine-readable list of elected officials?
10. Will OpenSanctions agree a small-vendor bulk licence price that beats per-query API costs at our scale?
11. Can the professional bodies (SRR FBiH, RS association) give CPD credit for our courses?
12. Is professional indemnity insurance for a software/template vendor available in BiH, and at what price?

## Sources

URLs cited in the text, grouped. Local downloads and tests were run on 9 Oct 2026.

**Law, by-laws and regulators**

- https://fuzip.gov.ba/wp-content/uploads/2026/10/UPITNIK-ZSPNFT_Racunovodstvene-i-knjigovodstvene-usluge.pdf
- https://portalfo1.pravosudje.ba/vstvfo-api/vijest/download/127392
- https://fuzip.gov.ba/obaveze-u-oblasti-sprecavanja-pranja-novca-upitnik-za-pruzaoce-knjigovodstvenih-i-racunovodstvenih-usluga/
- https://fuzip.gov.ba/wp-content/uploads/2026/04/Smjernice-za-procjenu-rizika-od-pranja-novca-i-finansiranja-teroristickih-aktivnosti-april-2026.pdf
- https://advokat-prnjavorac.com/zakoni/Uredba-o-vodenju-registra-poslovnih-subjekata-FBiH.pdf
- https://www.paragraf.ba/propisi/republika-srpska/zakon-o-registraciji-poslovnih-subjekata-u-republici-srpskoj.html

**Sanctions, PEP and registers**

- https://www.un.org/sc/suborg/en/sanctions/un-sc-consolidated-list.html
- https://support.stp.one/hc/en-us/articles/33434862798877-LEXolution-Sanctions-Lists
- https://www.opensanctions.org/licensing/
- https://www.opensanctions.org/api/
- https://opensanctions.org/articles/2022-10-04-saas-api/
- https://www.slobodnaevropa.org/a/isil-bosna-hercegovina-sankcije/33683345.html
- https://www.tportal.hr/vijesti/clanak/bih-deblokiran-dom-naroda-s-vaznom-odlukom-ali-i-dalje-rizik-sive-liste-moneyvala-20260504
- https://www.paragraf.ba/dnevne-vijesti/16032026/16032026-vijest6.html
- https://www.opensanctions.org/countries/ba/
- https://www.opensanctions.org/faq/api/metering/
- https://www.novosti.rs/republika-srpska/vesti/1075224/imovinu-skrivaju-mare-izabrani-predstavnici-gradjana-bih-ignorisu-dostavljanje-izjava-imovinskom-stanju
- https://www.slobodnaevropa.org/a/gradjani_uskraceni_za_uvid_u_imovinu_politicara_nvo_razocarane/24285780.html
- https://www.paragraf.ba/dnevne-vijesti/09102025/09102025-vijest4.html
- https://www.paragraf.ba/dnevne-vijesti/03122025/03122025-vijest4.html
- https://www.paragraf.ba/dnevne-vijesti/11052026/11052026-vijest3.html

**Competitors and UX references**

- https://a-count.hr/blog/vodic-spnft-bez-stresa-5-koraka-do-sustava-koji-stvarno-radi
- https://a-count.hr/blog/spnft-zakon-vam-nece-reci-kako-se-radi-dubinska-analiza-evo-kako-je-radimo-mi
- https://a-count.hr
- https://a-count.hr/faq
- https://figsflow.com/uk/best-aml-software-for-accountants-figsflow/
- https://figsflow.com/us/best-aml-software-solutions-for-accountants/
- https://blog.finexer.com/aml-software-for-accountants-bank-verified-data/
- https://support.thirdfort.com/hc/en-gb/articles/28359965339805-Can-I-pass-on-the-cost-of-a-Thirdfort-check-to-a-Client

**Privacy, e-signature and ID documents**

- https://www.iddeea.gov.ba/wp-content/uploads/IDDEEA/eID/20_03_2023_Arhitektura_elektronskih_licnih_karti_BiH_V2.pdf
- https://www.paragraf.ba/dnevne-vijesti/27082025/27082025-vijest4.html
- https://www.iddeea.gov.ba/wp-content/uploads/2025/12/Nova-Odluka-o-visini-naknade-za-izdavanje-kvalifikovane-potvrde-107.docx
- https://www.paragraf.ba/dnevne-vijesti/26122025/26122025-vijest4.html
- https://www.paragraf.ba/dnevne-vijesti/02102026/02102026-vijest4.html
- https://www.dlapiperdataprotection.com/index.html?c=BA&t=law
- https://www.fiscal-requirements.com/news/4520-bosnia-and-herzegovina-aligns-with-gdpr-new-data-protection-law-from-october-5-2025
- https://ceelm.com/jpm-jankovic-popovic-mitic/31249-new-personal-data-protection-law-enters-into-force-in-bosnia-and-herzegovina
- https://fena.ba/article/1303653/reljic-after-ratification-of-convention-108-the-priority-is-to-pass-a-new-law

**Costs, hosting and team**

- https://incorpuk.com/blog/how-to-open-stripe-account-in-bosnia-herzegovina/
- https://www.hteronet.ba/dokumenti/download/502
- https://wz-it.com/en/blog/hetzner-price-increase-june-2026-cpx-ccx-alternatives/
- https://www.scaleway.com/en/pricing/managed-databases-pricing/
- https://bhas.gov.ba/data/Publikacije/Saopstenja/2026/LAB_04_2026_H1_1_HR.pdf
- https://www.levels.fyi/t/software-engineer/locations/bosnia-and-herzegovina
- https://lemon.io/rate-calculator/bosnia-and-herzegovina/
- https://www.paragraf.ba/dnevne-vijesti/13062025/13062025-vijest5.html

**News and context**

- https://www.paragraf.ba/dnevne-vijesti/29012026/29012026-vijest1.html
- https://www.paragraf.ba/dnevne-vijesti/01102026/01102026-vijest1.html

**Data endpoints tested directly**

- https://scsanctions.un.org/resources/xml/en/consolidated.xml (downloaded 9 Oct 2026)
- https://webgate.ec.europa.eu/fsd/fsf/public/files/xmlFullSanctionsList_1_1/content?token=dG9rZW4tMjAxNw (downloaded 9 Oct 2026)
- https://sanctionslistservice.ofac.treas.gov/api/PublicationPreview/exports/SDN.XML (downloaded 9 Oct 2026)
- https://data.opensanctions.org/datasets/latest/index.json (dataset catalogue, checked 9 Oct 2026)
- https://bizreg.osbd.ba/Public/PublicPortal/OpenData?handler=ExportXML (downloaded 9 Oct 2026)
- https://bizreg.pravosudje.ba/pls/apex/f?p=186:20 (checked 9 Oct 2026)
- https://pypi.org (licence metadata for yente, followthemoney, nomenklatura, rigour, docxtpl, procrastinate, PassportEye, mrz, rapidfuzz, weasyprint, pypdf, django, cyrtranslit; checked 9 Oct 2026)
