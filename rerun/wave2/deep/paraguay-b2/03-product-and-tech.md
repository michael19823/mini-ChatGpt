# Paraguay SEPRELAD compliance pack: product, technical design and development plan (deep dive 03)

Status: complete as of 10 Oct 2026. It builds on [01-law-and-requirements.md](01-law-and-requirements.md) (duties and 96 product requirements), [02-market-and-competition.md](02-market-and-competition.md) (buyers, prices, competitors) and the [B2 report](../reports/paraguay-b2.md). "My estimate" marks numbers I derived. "(unverified)" marks facts I could not confirm. Requirement numbers like "R53" refer to the list in 01.

## Summary

- **What to build.** A Spanish-language web app that runs a real-estate firm's SEPRELAD file between filings: a deadline calendar with proof of filing, a client file with KYC and list checks, a deal register that produces the quarterly operations report (RO), the Res 201/2020 documents (manual, code of ethics, risk assessment, training plan), and the yearly internal-control (CI) report, Annual Form (FA) figures and an audit pack. It never files in SIRO and never holds SIRO passwords. SIRO has no public API, and filings are the firm's sworn declarations ([01, rule G1](01-law-and-requirements.md); [Res 165/2022 annex](https://www.seprelad.gov.py/resoluciones/resoluciones/anexos-res-n-165-22-formulario-anualso-sector-inmobiliario.pdf)).
- **The gap the software fills.** SIRO only receives filings. The warnings SEPRELAD sent to 1,238 real-estate firms in 2024 were for missed calendar items: RN, RO, FA, CI and AE ([Res 681/2024](https://www.seprelad.gov.py/resoluciones/resoluciones/res-n681-24.pdf); [Memoria 2024](https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf)). Reminders plus proof of filing cover most of that.
- **SIRO's file formats were checked on 10 Oct 2026.**
  - SEPRELAD's RO specification links a reference Excel file with **37 columns**, a city table (**245 codes**) and an economic-activity table (**243 entries**, text only, no codes), all as Google Sheets dated 19 Dec 2024 ([RO spec PDF](https://www.seprelad.gov.py/resoluciones/resoluciones/contenido-archivo-excel-ro-inmobiliarias.pdf)).
  - The column order in the Excel file differs from the order in the PDF. The sample rows break the PDF's own phone and date formats. The PDF has no matrícula/finca field, although 01 found one in the Res 003/2025 annex. So the export must follow the reference file, and it must be tested against live SIRO in the pilot.
  - Since Aug 2025, SEPRELAD also offers bulk RO upload as JSON, enabled on request by a note to mesaentrada@seprelad.gov.py. Once it is enabled, the firm can no longer key ROs one by one ([SEPRELAD, 22 Aug 2025](https://www.seprelad.gov.py/?p=3156)). Whether the Excel bulk route still works is unclear. No JSON schema is published, so ask for it in week 0.
- **Free data feeds work.** On 10 Oct 2026:
  - the UN consolidated list downloaded as XML (2.19 MB; 736 individuals and 274 entities; generated 9 Oct 2026) ([UN XML](https://scsanctions.un.org/resources/xml/en/consolidated.xml));
  - OFAC's SDN file answered ([OFAC](https://sanctionslistservice.ofac.treas.gov/api/PublicationPreview/exports/SDN.XML));
  - the tax office (DNIT) publishes the whole RUC register as ten monthly zip files. One of them, `ruc0.zip`, holds 201,867 rows in the form `RUC|name|check digit|old RUC|status|`, last updated 1 Oct 2026. That allows name autofill, check-digit validation and a flag for cancelled RUCs at no cost ([DNIT](https://www.dnit.gov.py/web/portal-institucional/listado-de-ruc-con-sus-equivalencias)).

  **PEP data is the weak spot.** OpenSanctions has only one Paraguay-specific dataset, members of Congress (483 entities) ([OpenSanctions index](https://data.opensanctions.org/datasets/latest/index.json)). The signed PEP sworn declaration that Res 50/2019 requires stays the main control, with a local PEP database as a paid add-on later.
- **Stack: one plain monolith a solo founder and AI agents can hold in their heads.** Django 6.1 (or 5.2 LTS) with HTMX, PostgreSQL with row-level security, a Postgres job queue, docxtpl and openpyxl for documents and exports, and rapidfuzz for name matching (versions checked on PyPI, 10 Oct 2026). Host it on AWS Lightsail in São Paulo. Lightsail lists one bundle price for all regions ([Lightsail pricing](https://aws.amazon.com/lightsail/pricing/)), and the data stays in a country with a data-protection law (LGPD).
- **Privacy.** Paraguay's Ley 7593/2025 applies fully from 27 Nov 2027. Secondary sources say it requires adequacy or safeguards for transfers abroad, 72-hour breach notices and impact assessments for high-risk processing ([Clym](https://www.clym.io/regulations/law-no-7593-paraguay); [Kiteworks brief](https://www.kiteworks.com/sites/default/files/resources/kiteworks-brief-habilita-soporte-para-la-ley-de-proteccion-de-datos-personales-de-paraguay.pdf)). Build to that standard now. The firm is the controller and we are its processor. The 5-year AML retention duty overrides erasure requests (Ley 1015/97 art. 18).
- **Running cost is small:** about US$75-125 a month at 50 customers, US$235-335 at 300 and US$490-805 at 1,000. That is about 2-10% of expected revenue (my estimates). Card fees through Paddle (5% + US$0.50 per payment) cost as much as the servers or more, so sell annual plans. Fixed costs (Claude Code, a content retainer, a yearly security retest) bring total running costs to about US$650-1,300 a month at 50 customers. Break-even is about 50-60 firms on full plans.
- **Build plan: MVP in 3 weeks, sellable in 8.**
  - Week 0 (12-18 Oct 2026) covers interviews, the JSON request to SEPRELAD, hiring the lawyer, and a one-script RO export spike for a friendly firm to try in the live Q3 RO window (11-20 Oct 2026).
  - Week 1 builds the foundation.
  - Weeks 2-3 run six build streams and one QA agent in parallel, giving an MVP on Fri 6 Nov 2026.
  - Weeks 4-8 cover integration, legal sign-off, a security test, a pilot with 5-10 firms through 1-2 registered auditors, and billing.

  The product is sellable on Fri 11 Dec 2026, in time for the RN window (1-10 Jan 2027) and the RO window (11-20 Jan 2027) for Q4 2026. The CI report generator must ship by February (CI due 30 Mar 2027), the FA calculator by April (FA due 31 May) and the audit pack by May (AE due 30 Jun).
- **Cash budget to "sellable": about US$6,400-20,600, with a middle case of about US$12,000.** There are no salaries. Lawyer and AML-expert review of templates costs US$2,000-5,000. A scoped security test plus retest costs US$3,000-8,000. Claude Code (Max 20x, US$200 a month per seat, 1-2 seats) costs US$600-1,200. Hosting during the build costs US$150-300. Small tools, a 10% buffer and an optional trip to Asunción make up the rest. All figures are my estimates, except the Claude plan price ([Anthropic](https://support.claude.com/en/articles/11049744-how-much-does-the-max-plan-cost)) and Lightsail prices.

## Users and jobs

### Who uses the product

| Role (Spanish label) | Who it is | Main jobs | Rights in the product |
|---|---|---|---|
| **Top authority** (máxima autoridad: owner, partners or board) | Owner of the agency, developer or lot seller | Approve the manual, code, CO appointment, training plan, alert rules, enhanced-CDD clients and **every ROS** ([Res 201/2020 art. 7](https://www.seprelad.gov.py/resoluciones/resoluciones/res-n201-2020-reglamentacion-para-inmobiliarias.pdf)); pay | Everything in own firm; billing; grant or revoke auditor and consultant access |
| **Compliance officer** (Oficial de Cumplimiento, CO) | Often the owner: a one-owner firm may name the owner (Res 201 art. 7(4), 8) | Run the file; file in SIRO; keep the unusual-operation register; write the CO annual report (art. 9(9), 9(11)) | Everything, plus the confidential area (alerts, ROS) that others must not see (Ley 1015/97 art. 20; Res 201 art. 33, 36) |
| **Assistant** (asistente / administración) | Secretary, admin or bookkeeper | Enter clients and deals, upload documents, prepare exports | Clients and deals; confidential area only if named as CO assistant (Res 201 art. 33) |
| **Agent or broker** (corredor / agente) | Employee or exclusive contractor of the firm, covered by its file ([Circular 001/2022](https://www.seprelad.gov.py/resoluciones/resoluciones/circular-uif-sepreladsen001-22.pdf)) | Collect buyer and seller data at the deal; raise "something looks odd" | Own clients and deals; cannot see whether a ROS exists |
| **Branch compliance lead** (Encargado de Cumplimiento) | Larger firms with branches (Res 201 art. 8) | Same as the assistant, for one branch | Branch-scoped |
| **External auditor** (auditor externo registrado) | One of 182 SEPRELAD-registered auditors, in about 140 practices ([02](02-market-and-competition.md)) | Yearly audit under Res 201 art. 14 and the Res 411/2013 standards, which include testing the firm's IT tools ([Res 411/2013](https://www.seprelad.gov.py/resoluciones/resoluciones/resolucion-n-4112013.pdf)) | Read-only per invited firm; audit pack download; record findings; practice dashboard |
| **Consultant or accountant** | Outsourced compliance helper. SEPRELAD expects private advisers to do this work and bars its own staff from it ([Circular 2/2025](https://www.seprelad.gov.py/resoluciones/resoluciones/CIRCULAR%202-2025.pdf)) | Set up and run several firms' files | Per-firm grant; portfolio deadline view; no confidential area unless also appointed CO assistant |
| **End client** (comprador / vendedor) | The firm's buyer or seller | Fill in the KYC form, upload ID, sign the PEP sworn declaration | No account; a one-time secure link (launch release) |
| **Content editor** | Our Paraguayan AML lawyer or a registered auditor under contract | Edit templates, red flags, parameters; publish new versions | Content admin only; no customer data |
| **Platform admin** | The founder | Support, list feeds, billing | Support access only with the firm's time-limited consent, logged |

### Jobs to be done (in the buyer's words)

1. **"Don't let me miss a SEPRELAD deadline again."** RN on days 1-10 and RO on days 11-20 of Jan, Apr, Jul and Oct; CI by 30 March; FA by 31 May; AE by 30 June; the canon; yearly SIRO data confirmation ([Circular 2/2025](https://www.seprelad.gov.py/resoluciones/resoluciones/CIRCULAR%202-2025.pdf); [Res 326/2022](https://www.seprelad.gov.py/resoluciones/resoluciones/resn326-22-implementacionsiro-r-n.pdf); [Res 003/2025](https://www.seprelad.gov.py/resoluciones/resoluciones/resol-03-2025-ro-inmobiliarias.pdf); [Res 435/2026](https://www.seprelad.gov.py/resoluciones/resoluciones/435_2026.pdf)).
2. **"Type each deal once."** Today small firms key every RO operation into SIRO by hand. Bulk upload needs a JSON file most cannot make ([SEPRELAD, 22 Aug 2025](https://www.seprelad.gov.py/?p=3156); [Memoria 2024](https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf)).
3. **"Have my file ready when the auditor or an inspector asks."** Inspectors ask first for the manual, the CO appointment and proof of training ([Ferrere on Res 36/21](https://ferrere.com/es/novedades/inspecciones-aleatorias-de-seprelad-bajo-resolucion-36-21/)). Auditors sample client files and test the IT tools ([Res 411/2013](https://www.seprelad.gov.py/resoluciones/resoluciones/resolucion-n-4112013.pdf)).
4. **"Onboard a buyer properly in 10 minutes, without losing the sale."** Car-dealer owners said in 2019 that paperwork lost them sales ([Última Hora, Nov 2019](https://www.ultimahora.com/seprelad-el-50-playa-autos-eluden-el-control-antilavado-n2852685)). Real-estate firms face the same form.
5. **"Write the yearly reports for me."** The CI report's 12 Annex II items, the FA figures and the CO's annual report all come from data the firm already has.
6. **"I got a warning letter. Show me what to fix."** Res 681/2024 sent warning notes plus remedial notes to the e-mail registered in SIRO ([Res 681/2024](https://www.seprelad.gov.py/resoluciones/resoluciones/res-n681-24.pdf)).
7. **Auditor: "Let me review 20 client firms in the time 5 take now."**

## Feature map

The cut follows two things: what SEPRELAD checks in SIRO (RN, RO, FA, CI, AE) and the first deadlines after launch, which are RN on 1-10 Jan 2027 and RO on 11-20 Jan 2027.

| Module | MVP (built weeks 1-3, done 6 Nov 2026) | Launch (weeks 4-8, sellable 11 Dec 2026) | Later (2027) |
|---|---|---|---|
| Accounts, roles, security | Firm workspace; roles (top authority, CO, assistant, agent); MFA for top authority and CO; tamper-evident audit log; Spanish (Paraguay) UI (R89, R88, G2) | Auditor and consultant roles; consultant switches between firms; support-access consent | SSO; API for partners |
| Parameters and rules | Dated parameter store: minimum wage (Gs 3,044,000 from 1 Jul 2026, [Decreto 6225/2026](https://impuestospy.com/impuestos/decreto-n-6225-2026/)), simplified-CDD ceilings, deadlines, risk zones, enum and code tables (G3) | Regulation register: each resolution linked to the templates and rules it affects (R94) | Sector packs by configuration: car dealers (Res 196/2020), jewellers (R95) |
| Onboarding wizard | Scope questions (habitual, rental-only, agent status) (R1-R3); firm data; CO and top authority; SIRO registration status and certificate; fiscal year | RUC autofill from DNIT files; registration pack for firms not yet registered (R5-R7) | Deregistration (Res 460/2025) checklist |
| Obligation calendar and status | All periodic SIRO obligations with reminders at 30, 7 and 1 days; business days with Paraguayan holidays; "semáforo" dashboard; proof-of-filing upload; RN auto-task when no ROS in the quarter (R68-R70, R72, R74) | SEPRELAD notices log with remediation checklist (R73); yearly SIRO data confirmation and 5-business-day change tasks (R8-R9); canon tracking (R10); ICS calendar feed | WhatsApp reminders |
| Clients and KYC | Natural and legal persons; general, simplified and enhanced regimes from dated thresholds (R34-R38); PEP sworn declaration PDF to sign and upload (R44); BO certificate upload (R47); document upload with hash (R43); client risk score v0 with reasons (R41) | Client self-service link (mobile form, upload, signature); deferred-verification clock (R39); CDD-failure outcomes (R40); periodic review dates | ID OCR; liveness and remote ID only if clients ask |
| Screening | UN list (binding) plus OFAC and EU; FATF country lists entered by hand; nightly re-screen of clients and BOs on list changes; hit review with a reason; 5-year log (R48-R50) | Confirmed UN match triggers a freeze task, blocks the operation and drafts the report (R51); upload of SEPRELAD list circulars (R52) | Paid PEP data: OpenSanctions API or a local PEP database (Compliance Paraguay) |
| Operations register and RO | Every operation with all RO fields, validated against SEPRELAD enums and code tables (R53-R54); quarterly Excel export in the reference column order; a "copy sheet" in SIRO screen order for one-by-one entry; mark exported, filed or nil (R55, R58) | JSON export once SEPRELAD supplies the schema; FX source and rate per operation (R57); code-table refresh check (R56) | Optional browser helper that fills SIRO's one-by-one form, only if SEPRELAD agrees |
| Documents | Template engine; AML manual covering every Annex I heading (R26-R28); code of ethics (R29); CO appointment act and CO notification pack (R13); approvals; DOCX and PDF | Risk self-assessment wizard (4 factors, zones, ENR version) with the method document (R19-R25); acknowledgements by staff, reset on each new version (R31); association code option (R30); update flags when a rule changes (R33) | Qualified e-signature |
| Training | Training-session log (date, topics, attendees) kept 5 years (R83) | Annual plan with the 10 minimum topics (R82); missed-training flags (R84); "not CECAD-certified" label on our own content (R85) | Short courses with a quiz |
| Monitoring and confidential area | "ROS filed this quarter: yes/no, date, SIRO receipt" only (drives the RN logic) | Alert register with Annex III red flags, 30-day classification clock and reasoned decisions (R59-R61, R66); restricted visibility (R65) | ROS draft with name-leak check and 24-hour clock (R62-R64, R67) |
| Annual reports | (none) | CI report with the 12 Annex II items, filled from data (R75-R76), live by Feb 2027; FA figures in SIRO screen order (R71), live by Apr 2027; CO annual report (R17) | Year-on-year comparison |
| Auditor and consultant | (none) | Practice dashboard across firms; read-only access; audit pack ZIP (R77-R78); auditor registration and expiry check (R79); findings to closure (R80) | Audit sampling helper; white-label PDF headers |
| External-audit exemption | (none) | (none) | Res 328/2026 exemption or deferral workflow, before 30 Jun 2027 (R81) |
| Records and exit | 5-year retention dates on every record (R86) | Full export (PDF, CSV and original files with an index) and a cheap "archive only" plan (R87) | Automated purge after both clocks run out, with CO approval |
| Billing | Paddle checkout, webhooks to subscription state, annual and monthly plans | Practice plan with client seats; invoices | Local payment methods if card payments block sales |

**Why this cut**
- The MVP covers every obligation SEPRELAD checked in its 2024 sweep (RN, RO, FA, AE and CI) at the level of "never miss it, and keep proof". The annual-report generators can wait until February-April 2027 because their first deadlines are 30 March and 31 May 2027.
- KYC, screening and the deal register come first. The RO is built from the deal register, and auditors sample client files first.
- The full ROS workflow is the most sensitive and the least used feature. Real estate filed only 90 ROS in 2025 against 7,474 negative reports (B2 report, from the [stats portal](https://www.seprelad.gov.py/siro/estadisticaExterna/estadistica.xhtml)). Keeping ROS content out of the MVP lowers the risk of a confidentiality breach.

## Key flows

### Flow 1: First day (target: under 45 minutes)
1. Sign up with e-mail, then set up MFA.
2. Scope check. "Do you buy, sell or broker property habitually?" The app states that the number and value of deals do not matter (Res 201 art. 1, footnote 2). A rental-only answer shows the deregistration route ([Res 460/2025](https://www.seprelad.gov.py/resoluciones/resoluciones/Resolucion%20N%C2%B0%20460_25%20-%20Se%20autoriza%20la%20implement%20del%20modulo%20BAJA%20DE%20SUJETOS%20OBLIG%20desarrollado%20en%20el%20SIRO.pdf)).
3. Firm data. Type the RUC and the app fills the name, check digit and status from the DNIT file (launch release). Then add legal form, departments, branches and fiscal-year end.
4. People. Add the top authority and the CO, or tick "owner is CO" if there is one owner. Add staff and agents with their status (employee, exclusive or independent, per Circular 001/2022).
5. SIRO status. Registered? Enter the registration date and upload the QR certificate. Enter the SIRO contact e-mail and the date it was last confirmed (R7, R9). Is the canon paid for this year? Has the CO been notified?
6. The app builds the calendar and shows the "semáforo": green, amber or red per obligation. It asks for proof of past filings: last RN, last RO, last CI, AE and FA.
7. It drafts the manual, code of ethics and CO appointment act from the answers. The top authority approves them, then staff get acknowledgement requests.

### Flow 2: New deal with a new buyer (agent or assistant, about 10 minutes)
1. Create the operation: property type and class, cadastral account, city, operation type, date, currency, payment mode and form, amounts.
2. Add buyer and seller. Search by CI or RUC. Existing clients are reused. New clients open the KYC form for a natural or legal person (8 or 9 items, Res 201 art. 21).
3. The app proposes the CDD regime from the risk score, any open suspicion flag and the dated thresholds: 150 minimum wages for one payment in 12 months, or 20 a year in instalments (Res 201 art. 22). Every decision shows its reason and the parameter version used.
4. The PEP sworn declaration prints with a short summary of Res 50/2019. The client signs, and the scan or photo is uploaded ([Res 50/2019](https://www.seprelad.gov.py/resoluciones/resoluciones/resolucion-n-50-19-por-el-cual-se-aprueba-el-reglamento-de-identificacion-de-personas-expuestas-politicamente.pdf)). In the launch release the client can do this through a phone link.
5. Screening runs at once against UN, OFAC and EU. A possible hit goes to the CO's review queue, and the operation cannot complete until the hit is resolved.
6. Enhanced CDD applies to PEPs, non-residents, trusts and non-profits. It needs top-authority approval to accept and to continue (Res 201 art. 24).
7. The operation can be marked "completed" only when every party's KYC file is complete (R34). It then counts toward this quarter's RO.

### Flow 3: Quarter close (RN and RO)
1. On day 1 of Jan, Apr, Jul and Oct, the app checks whether any ROS was marked filed in the quarter that just ended. If none was, it creates an RN task due on day 10 (Res 326/2022 sets days 1-10, which is stricter than Res 201 art. 37). The task screen links to SIRO and has a "file and attach receipt" button.
2. On day 11 the RO task opens, due on day 20 ([Res 003/2025](https://www.seprelad.gov.py/?p=1528)). The app validates every operation in the quarter: codes, formats and missing fields. It lists the errors with links to fix them.
3. The user picks a way to file:
   - (a) download the Excel file in the reference layout, for the bulk path, if SIRO still offers it;
   - (b) download JSON, if the firm has asked SEPRELAD to switch;
   - (c) open the "copy sheet", which shows each operation's fields in SIRO screen order with copy buttons, for one-by-one entry.
4. The user uploads the SIRO receipt and the task turns green. A quarter with no operations is marked "nil", with a note (R58).

### Flow 4: List update and re-screening (automatic)
1. Every 6 hours a job downloads the UN, OFAC and EU files, stores a version with a checksum and computes the entries added, changed and removed.
2. New or changed entries are matched against all clients, BOs and operation counterparties (R49). Hits go to the CO's queue, and an e-mail goes out the same day.
3. If the CO confirms a UN match, the app opens a "freeze and report immediately" task, blocks the client's open operations and drafts the communication (Res 201 art. 38; [Decreto 5920/2021](https://www.seprelad.gov.py/resoluciones/resoluciones/Decreto-5920-2021.pdf)). This step is in the launch release.
4. SEPRELAD circulars that add names are entered by hand by the content editor, or uploaded by the CO (R52).

### Flow 5: Something looks unusual (launch release: register only)
1. A red-flag rule fires (Annex III), or a user presses "Esto me parece raro". Either opens an alert in the register, visible only to the CO, assistants and the top authority.
2. Clocks start: 30 days to classify the alert as unusual or not (Res 201 art. 29(8)), and up to 90 days of analysis. Every decision needs written reasons, kept 5 years (R66).
3. Later release: when the top authority approves "suspicious", a 24-hour ROS clock starts. The draft uses SEPRELAD codes instead of the firm and CO names, and a check blocks export if they appear (R62-R64). The CO files in SIRO and marks it filed. That flag feeds Flow 3.

### Flow 6: The yearly cycle
- **January.** The CI report draft opens from system data: KYC actions, risk results, monthly statistics of unusual operations and ROS, training statistics, manual changes and the other Annex II items. The CO edits and approves it, then uploads it to SIRO under Obligaciones > Informes. The status becomes "Presentado" and the app stores the SIRO "constancia" ([SIRO CI/AE manual](https://www.seprelad.gov.py/resoluciones/resoluciones/manual-de-usuario-remision-informe-cumplimiento-s-o.pdf)). Due 30 March.
- **April.** The FA figures are computed from the deal register: counts and amounts by operation type, clients that are national, foreign or PEP, cash versus the financial system, and departments mapped to zones. They are shown in SIRO screen order. A check confirms they equal the sum of the year's RO exports (R71). Due 31 May.
- **May-June.** The audit pack goes to the registered auditor. For an inactive or very small firm, the app offers the exemption or deferral request, which must reach SEPRELAD before 30 June ([Res 328/2026](https://www.seprelad.gov.py/resoluciones/resoluciones/Res.%20328.26_Excepci%C3%B3n%20de%20auditor%C3%ADa%20externa.pdf)). The canon is due 30 June, with a 2% monthly surcharge after that ([Res 56/2026](https://www.seprelad.gov.py/resoluciones/resoluciones/RESOLUCION%20N%C2%B0%2056.pdf)).
- **Every year.** Confirm the SIRO data ([Res 435/2026](https://www.seprelad.gov.py/resoluciones/resoluciones/435_2026.pdf)), approve the training plan, and review the risk assessment every 24 months and the method every 48 (Res 201 art. 3).

### Flow 7: Auditor or consultant with many firms
1. The practice signs up and invites client firms, or a firm invites its auditor. Each firm's owner must accept, and access is per firm.
2. The portfolio view shows each firm's semáforo and next deadlines.
3. "Audit pack" builds one ZIP and one merged PDF: manual, code, acknowledgements, risk assessments, training records, a client-file sample with scores, the alert-register summary (no ROS content unless the CO releases it), RN, RO, FA and CI history with SIRO receipts, past findings, and a system description for the Res 411/2013 IT test (R77-R78).
4. The auditor records findings, and each finding becomes a task for the firm (R80).

### Flow 8: A warning letter arrives
The CO logs the note: number, date and obligations cited. The app builds a remediation checklist from the cited obligations, sets due dates and links to the evidence. It keeps the note and the response in the SEPRELAD notices log (R73). This doubles as a sales trigger: "got a warning? fix it in an afternoon".

### Flow 9: Leaving
The firm downloads everything as PDF, CSV and original files, with an index. The AML duty to keep records for 5 years stays with the firm (Ley 1015/97 art. 18; R87), so the app offers a low-cost read-only "archive" plan rather than deleting the data a month later.

## Screens

All screens are server-rendered, in Spanish, and work on a phone. Agents and owners often work from a phone.

1. **Public site and pricing.** Plain Spanish. Lead with "Tu legajo SEPRELAD siempre listo para el auditor" ("your SEPRELAD file, always ready for the auditor"). Show the next real deadline as a countdown, for example "RN del 4T: 1-10 de enero". State clearly that the product does not file for you and is not endorsed by SEPRELAD ([Circular 2/2025](https://www.seprelad.gov.py/resoluciones/resoluciones/CIRCULAR%202-2025.pdf)).
2. **Onboarding wizard.** Six steps (scope, firm, people, SIRO status, past filings, documents), with a progress bar. It can be paused and resumed.
3. **Dashboard ("Semáforo SEPRELAD").** One tile per obligation: RN, RO, CI, FA, AE, canon, data confirmation, risk assessment, training plan, CO notice. Each tile shows its state (done with proof, due, overdue) and its next date. Below the tiles: open tasks, screening hits to review, KYC files incomplete, and documents waiting for approval.
4. **Calendar.** Month and list views, filters by obligation, and a personal ICS feed for Google or Outlook.
5. **Filing screen** (for example "RO 3T 2026"). It shows a checklist, validation errors grouped by operation, export buttons (Excel, JSON, copy sheet), an upload for the SIRO receipt, the history of past filings, and a "nil quarter" button.
6. **Clients list.** Filters by regime, risk, PEP, incomplete file and review due. A bulk "request update" action is in the launch release.
7. **Client file.** Tabs: Datos (KYC form), Documentos (files with uploader, date and hash), PEP (declaration and checks), Beneficiarios finales, Riesgo (score with reasons, override with a reason, approval), Screening (every check and decision), Operaciones, Historial (versions).
8. **New operation.** A three-part form (property, parties, payment) with live validation against SEPRELAD codes. A party chip shows that party's KYC state.
9. **Screening review.** The client's data side by side with the list entry: name parts, dates, nationality, list and programme. Buttons: "true match", "not the same person" (reason required), "need more data".
10. **Documents library.** Manual, code, CO act, CO notice pack, risk assessment, training plan. Each shows version, status (draft, approved, superseded) and approver. Download DOCX or PDF. Acknowledgement progress per person.
11. **Risk self-assessment wizard** (launch). Four factors, the firm's own indicators, SEPRELAD zones pre-loaded, and the ENR version used. Output: a written report plus a method document.
12. **Training.** Plan, sessions, attendance, missed-training list.
13. **Confidential area** (CO, assistants, top authority only). Alert register, unusual-operation cases with clocks, the ROS log.
14. **Annual reports.** CI report builder with an item-by-item coverage check; FA figures in SIRO order with a "copy" button per field; CO annual report.
15. **Practice dashboard** (auditor or consultant). A grid of firms by obligation, invitations, audit packs, findings.
16. **Settings.** Firm and SIRO data (with the yearly-confirmation banner), users and roles, parameter history (minimum wage, thresholds), billing, data export, support-access consent.
17. **SEPRELAD notices.** Warning and remedial notes with their checklists.

## Data sources and integrations

### SEPRELAD SIRO: what it accepts (checked 10 Oct 2026)

SIRO is a web application behind each firm's own username and password. I found no public API. All filings are sworn declarations by the firm ([01](01-law-and-requirements.md); [Circular 2/2025](https://www.seprelad.gov.py/resoluciones/resoluciones/CIRCULAR%202-2025.pdf)). **The product prepares the data, the user files, and the user uploads the proof.**

| Filing | How SIRO takes it | Uploads accepted? | What the product produces | Source |
|---|---|---|---|---|
| Registration | Web pre-registration form plus PDF attachments (scans accepted since 2024) | Yes, PDFs of documents | Pre-filled field sheet and document checklist; 30-day query countdown | [Res 483/2021](https://www.seprelad.gov.py/resoluciones/resoluciones/resolucion-n-483-21-siro.pdf); [Res 258/2023](https://www.seprelad.gov.py/resoluciones/resoluciones/resn258-23.pdf); [Res 203/2024](https://www.seprelad.gov.py/resoluciones/resoluciones/ResolucionN203_2024.pdf) |
| CO notice | SIRO CO module (self-service since 2024) | Attachments such as CV and utility bill (format unverified) | CO notice pack with the 7 items; 5-business-day task | Res 201 art. 10; [Memoria 2024](https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf) |
| Data update and yearly confirmation | Web form; a forced update form for real estate from 5 Oct 2026 | No (form) | Yearly task; change detection | [Res 435/2026](https://www.seprelad.gov.py/resoluciones/resoluciones/435_2026.pdf); [SEPRELAD, 2 Oct 2026](https://www.seprelad.gov.py/?p=4412) |
| RN (negative report) | Web declaration | No | Task with the RN decision logic; receipt upload | [Res 326/2022](https://www.seprelad.gov.py/resoluciones/resoluciones/resn326-22-implementacionsiro-r-n.pdf) |
| RO (operations report) | (1) Web form, one operation at a time; (2) bulk upload of the "Formulario RO Inmobiliario" Excel file, per the Res 003/2025 annex as read in 01; (3) JSON bulk upload, enabled on request since 22 Aug 2025, after which one-by-one entry is switched off | Yes for bulk (Excel, or JSON on request) | Excel in the reference layout; JSON once the schema is obtained; copy sheet | [Res 003/2025](https://www.seprelad.gov.py/resoluciones/resoluciones/resol-03-2025-ro-inmobiliarias.pdf); [RO spec](https://www.seprelad.gov.py/resoluciones/resoluciones/contenido-archivo-excel-ro-inmobiliarias.pdf); [JSON notice](https://www.seprelad.gov.py/?p=3156) |
| FA (Annual Form) | Web form that SIRO pre-fills ("Generado"); the firm edits ("Modificado") and submits ("Presentado") with a sworn declaration; printable "ticket de cumplimiento" | No (form) | Figures in screen order; ticket upload | [Res 165/2022 annex](https://www.seprelad.gov.py/resoluciones/resoluciones/anexos-res-n-165-22-formulario-anualso-sector-inmobiliario.pdf) |
| CI and AE reports | Obligaciones > Informes: pick obligation and period (and, for AE, the auditor from SEPRELAD's list), add an optional 250-character comment, "Generar Obligación", attach the document, "Guardar". The status becomes "Presentado" and a "constancia" can be viewed. SEPRELAD can revert it to "Generado"; the old file stays. The manual names no file type or size limit. | Yes, one document | CI report as PDF (and DOCX); constancia upload | [SIRO CI/AE manual](https://www.seprelad.gov.py/resoluciones/resoluciones/manual-de-usuario-remision-informe-cumplimiento-s-o.pdf) |
| ROS | SIRO ROS module; SEPRELAD can return a ROS | Attachments (format unverified) | Later: draft with name-leak check | Res 201 art. 33-36; [01](01-law-and-requirements.md) |
| ITC (SEPRELAD information requests) | SIRO ITC module; JSON attachments mandatory only for banks and finance companies | Yes | Response log | [Res 321/2022](https://www.seprelad.gov.py/resoluciones/resoluciones/575-resolucion-n321-2022.pdf) |
| Canon | Payment slip downloaded in SIRO "Cuentas" | n/a | Reminder; receipt upload | [Res 56/2026](https://www.seprelad.gov.py/resoluciones/resoluciones/RESOLUCION%20N%C2%B0%2056.pdf) |

**The RO file in detail** (from the spec PDF and its three linked Google Sheets, downloaded 10 Oct 2026):
- **Reference file.** The [reference Excel](https://docs.google.com/spreadsheets/d/1u6C6V7Dy13EyIGRyxyaYUZn2gYVD4Tfo/edit) has one sheet, "RooInmobiliarias_202412191055", with 37 header columns. In order:
  - deal: `fechaOperacion, tipoInmueble, clasificacion, ctaCteCatastral, modalidadOperacion, formaPago, nombreEdificio, tipoOperacion, pisoNumero, montoEntrega, montoFinanciado, cantidadCuotas, montoCompensacion`;
  - buyer: `compradorTipoPersona … compradorPep`;
  - seller: `vendedorTipoPersona … vendedorPep`;
  - activity, nationality, residence and city codes for buyer and seller;
  - `ciudad_codigo, monedaOperacion_codigo`;
  - and **last**, `compradorNumeroCelular, vendedorNumeroCelular`.
- **Order mismatch.** The PDF lists the mobile-phone fields in other places. If SIRO maps columns by position, the PDF order would fail. The export follows the reference file's order and header names exactly.
- **The sample rows contradict the PDF rules.** Dates are Excel dates, not the `dd-MM-yyyy` string the PDF asks for. Document numbers are numbers, not text. Phones are written like `(021) 646-253`, not 9 or 10 bare digits. In the two sample rows, a COMPRA fills only the seller block and a VENTA only the buyer block, because the firm itself is the other party. An INTERMEDIACIÓN probably needs both blocks (unverified).
- **What follows for the export.** Write dates as `dd-MM-yyyy` text, document numbers as text and phones as bare digits. Keep a switch in case SIRO wants the sample's style instead. Confirm both against live SIRO with a pilot firm in week 5. This is the single most important integration test.
- **Code tables.** Cities use numeric codes: 245 rows, for example 1 = ASUNCION ([city table](https://docs.google.com/spreadsheets/d/18nOtPJojzxbgYWCf-lYxGwKKHcdgIKTf/edit)). Economic activities are 243 text labels with no codes ([activity table](https://docs.google.com/spreadsheets/d/1XMr8idLq1Lbo3p0r5Io0Dr4aceEAT4qR/edit)). Countries use ISO 3166-1 alpha-3 and currencies ISO 4217. Enums: property type URBANO or RURAL; 10 classes; CRÉDITO or CONTADO; 4 payment forms; COMPRA, VENTA or INTERMEDIACIÓN; FISICA or JURÍDICA; 7 document types (CI, PA, RUC, CRP, CRT, TDEF, CRC) ([RO spec](https://www.seprelad.gov.py/resoluciones/resoluciones/contenido-archivo-excel-ro-inmobiliarias.pdf)). Store each table as a dated version and check monthly for changes (R56).
- **Matrícula field.** The Res 003/2025 annex, as read in 01, lists a matrícula-finca field for sales. The Excel file has none. Ask SEPRELAD, and keep the field in our data model anyway.
- **JSON.** The camelCase field names look like JSON keys. The JSON schema itself is not published (unverified). Ask for it in week 0 with the formal note to mesaentrada@seprelad.gov.py that the [JSON notice](https://www.seprelad.gov.py/?p=3156) describes. Warn each firm that switching to JSON removes one-by-one entry, which matters for firms that depend on us for the file.

**SEPRELAD public data used by the product.** The public lookup exports the register of obligated subjects and the register of external auditors as Excel files ([lookup](https://www.seprelad.gov.py/siro/consultaExterna/consultaExternaSoAe.xhtml); counts in [02](02-market-and-competition.md)). The product uses the auditor export to pick a firm's auditor and to warn when a registration expires before the report date (R79). The register of obligated subjects is for marketing only, and must be used lawfully (see Security).

### Sanctions and country lists

| Source | Endpoint and format | Size or state | Cost and licence | Use |
|---|---|---|---|---|
| UN Security Council Consolidated List (binding in Paraguay through Ley 6419/2019 and [Decreto 5920/2021](https://www.seprelad.gov.py/resoluciones/resoluciones/Decreto-5920-2021.pdf)) | `https://scsanctions.un.org/resources/xml/en/consolidated.xml` (redirects; a HEAD request returned 404, a GET returned 200) | 2,186,496 bytes; 736 individuals and 274 entities; `dateGenerated` 9 Oct 2026 23:00 UTC (my download, 10 Oct 2026) | Free, public | Onboarding, operations, every-6-hour diff and re-screen |
| US OFAC SDN | `https://sanctionslistservice.ofac.treas.gov/api/PublicationPreview/exports/SDN.XML` | Answered 200 on 10 Oct 2026; about 19,400 records on 9 Oct 2026 ([Bosnia 03](../bosnia/03-product-and-tech.md)) | Free | Res 201 Annex IV names OFAC ([01](01-law-and-requirements.md)) |
| EU consolidated list | `https://webgate.ec.europa.eu/fsd/fsf/public/files/xmlFullSanctionsList_1_1/content?token=…`. The public token file can lag by weeks, so use a personal token from an EU Login account. | About 6,200 entries (9 Oct 2026, [Bosnia 03](../bosnia/03-product-and-tech.md)) | Free | Res 201 Annex IV names the EU terrorist list |
| FATF high-risk and increased-monitoring jurisdictions | Published after each FATF plenary (February, June, October) as web pages, not as a feed (unverified) | About 25 countries (unverified) | Free | Entered by hand into a dated table; used in country risk |
| SEPRELAD circulars on designations | Published by circular and on the website ([01](01-law-and-requirements.md)); no machine-readable national list found (2 searches) | n/a | Free | Manual upload by the content editor |

**Matching approach.** Normalise names: upper case, strip accents (Á to A; Ñ is kept and also tried as N), drop particles (DE, DEL, LA), handle "APELLIDO, NOMBRE" order and compound surnames, drop company suffixes (S.A., S.R.L., E.A.S.). Pull candidates with PostgreSQL trigram search. Score with rapidfuzz token-set and Jaro-Winkler. Adjust the score up or down with year of birth and nationality. Store the explanation with each hit. The lists hold about 26,000 records in total, so this runs on one small server.

### PEP data

| Source | What it gives | Access and cost | Verdict |
|---|---|---|---|
| **Client's signed PEP sworn declaration** | Self-declared PEP status, role, dates, family links | Required by [Res 50/2019 art. 6, 8](https://www.seprelad.gov.py/resoluciones/resoluciones/resolucion-n-50-19-por-el-cual-se-aprueba-el-reglamento-de-identificacion-de-personas-expuestas-politicamente.pdf) | **MVP core control** |
| OpenSanctions | Global PEPs and sanctions. Paraguay-specific: only `py_congreso`, members of Congress, 483 entities, last changed 25 Jun 2026 ([index](https://data.opensanctions.org/datasets/latest/index.json), my check 10 Oct 2026). Other Paraguayan PEPs come only through global sources such as Wikidata (unverified coverage). | Bulk data is CC BY-NC (non-commercial), so commercial use needs a licence. API prepaid from about €0.10 down to €0.03 a query ([licensing](https://www.opensanctions.org/licensing/); [API](https://www.opensanctions.org/api/), per the check in [Bosnia 03](../bosnia/03-product-and-tech.md)) | Launch or later: API check at onboarding only |
| Compliance Paraguay (Gregorio Mayor) | About 9,000 Paraguayan PEPs built on the Res 50/2019 positions, sold to real-estate firms among others | Price not published ([La Nación, Aug 2024](https://www.lanacion.com.py/negocios/2024/08/13/consultora-presenta-herramienta-que-identifica-a-personas-expuestas-politicamente/)) | **Best local partner**: resell as an add-on or license the data |
| SEPRELAD's suggested civic site aquieneselegimos.org.py | Profiles of elected officials | No API or bulk download found (1 search) ([Res 165/2022 annex](https://www.seprelad.gov.py/resoluciones/resoluciones/anexos-res-n-165-22-formulario-anualso-sector-inmobiliario.pdf) names it) | Link to it from the PEP check screen |
| Public-payroll open data (former Secretaría de la Función Pública) | Names and posts of public employees | Published as open data; licence and current URL not confirmed; the publisher warns the data must be checked with each institution ([OGP commitment](https://www.opengovpartnership.org/members/paraguay/commitments/PY0026/); [VCHGO note](https://contrataciones.gov.py/api/resultado/1ef030dd-07cd-6a2c-b6be-b11eb010357b/files/ae34f5ec-81b4-499d-ac31-61a76f00a9bf/download)) (unverified) | Later: build our own senior-post PEP list from it |

### Registers and identity

| Source | Endpoint and format | Cost | Use |
|---|---|---|---|
| **DNIT RUC register** | Ten files, `ruc0.zip` to `ruc9.zip`, on the [DNIT page](https://www.dnit.gov.py/web/portal-institucional/listado-de-ruc-con-sus-equivalencias). `ruc0.zip` is 4.25 MB zipped and holds `ruc0.txt` (12.2 MB, UTF-8, 201,867 lines). Each line is `RUC|NAME|DV|OLD_RUC|STATUS|`, for example `1000060|BENITEZ CENTURION, CARLOS ADAN|7|BECC623200D|CANCELADO|`. Statuses in ruc0: ACTIVO 89,893; CANCELADO 67,453; SUSPENSION TEMPORAL 41,326; BLOQUEADO 3,158. File timestamp 1 Oct 2026. (My download, 10 Oct 2026.) | Free; reuse terms not found (unverified) | Launch: monthly import (about 2 million rows in total, my estimate); autofill names; validate the check digit; warn on a cancelled or blocked RUC. For individuals the RUC base is usually the CI number ([Lookuptax](https://lookuptax.com/docs/de/steuerliche-identifikationsnummer/paraguay-ruc-steuer-id), secondary). |
| Cédula verification | No public API found (unverified). The credit bureau Criterion S.A. sells people search ([Criterion](https://criterion.com.py/)). | Per query (price unknown) | Later, as an optional paid check |
| Beneficial-owner register (Ministerio de Economía) | No public API found (unverified). Res 202/2020 makes the firm ask the corporate client for the BO register certificate ([Res 202/2020](https://www.seprelad.gov.py/resoluciones/resoluciones/resolucion-n-202-2020.pdf)) | n/a | Upload the certificate; record the BOs |
| Minimum wage | A decree each July, for example [Decreto 6225/2026](https://impuestospy.com/impuestos/decreto-n-6225-2026/) (Gs 3,044,000 from 1 Jul 2026) | Free | Entered by hand as a dated parameter; thresholds recompute only for operations on or after the date (G3) |
| Exchange rates for Gs amounts | Banco Central del Paraguay reference rates (endpoint unverified) | Free | Stored per operation with source and date (R57) |
| Public holidays | Python `holidays` 0.106 covers Paraguay; for 2027 it lists 14 dates, including 14-15 May and 8 Dec (my run, 10 Oct 2026; [PyPI](https://pypi.org/project/holidays/)) | Free (MIT) | Seed table, editable by hand, because Paraguay sometimes moves holidays by law (unverified) |

### Signatures, messages, payments and AI

- **Electronic signature.** Ley 6822/2021 on trust services recognises simple and qualified electronic signatures. It took effect in May 2022, with the Ministry of Industry and Commerce as authority ([DPL News](https://dplnews.com/?p=324911); [ABC](https://www.abc.com.py/nacionales/2022/04/26/recuerdan-que-desde-el-1-de-mayo-rige-ley-de-servicios-de-confianza-para-transacciones-electronicas/); [Decreto 7576/2022](https://www.mic.gov.py/wp-content/uploads/2025/06/Decreto_7576-2022.pdf)).
  - Staff acknowledgements and approvals: logged simple e-signature (click, MFA, timestamp, document hash).
  - PEP sworn declaration from clients: wet signature, scanned, in the MVP.
  - Ask the lawyer to confirm that a simple e-signature is enough for each document type.
- **E-mail.** Amazon SES in the same AWS region. Reminders and digests carry no personal data in the subject line.
- **WhatsApp reminders (later).** Utility template messages for "Rest of Latin America" cost about US$0.011-0.013 each on third-party rate cards from 2026 ([Zernio](https://zernio.com/blog/whatsapp-business-api-pricing); [Sleekflow](https://help.sleekflow.io/en_US/whatsapp/pricing)). Check against [Meta's page](https://developers.facebook.com/docs/whatsapp/pricing) (unverified).
- **Payments.** Paddle as merchant of record charges 5% + US$0.50 per transaction and handles tax in many countries. Products under US$10 get custom pricing ([Dodo Payments review of Paddle](https://dodopayments.com/blogs/paddle-review); [Costbench](https://costbench.com/software/subscription-billing/paddle/)) (third-party; check on [paddle.com](https://www.paddle.com/pricing)). Company and tax set-up is covered in the go-to-market and payments sections, not here.
- **AI inside the product (optional, after launch).** Use it for drafting the narrative parts of the CI and CO annual reports from structured data. Personal data stays out of prompts in the first version. API prices: Claude Haiku 5.5 US$0.10/0.50 per million input/output tokens; Claude Sonnet 5.5 US$2/10; Claude Opus 5.5 US$4/20 ([Anthropic pricing](https://platform.claude.com/docs/en/about-claude/pricing); model table cached 6 Oct 2026). One CI narrative of about 20,000 tokens in and 5,000 out costs about US$0.09 on Sonnet 5.5 (my calculation). Decisions (KYC regime, risk, screening) stay rule-based and explainable.

## Data model

PostgreSQL. Every tenant table carries `firm_id`, with row-level security on it. Every record carries `created_by`, `created_at`, `retain_until` and a version or history row.

**Tenancy and people**
- `Firm`:
  - identity: RUC and DV, name, person type, legal form, sector rulebook (`RES_201_2020` at launch), fiscal-year end, departments, branches;
  - SIRO data: `siro_registered_at`, `siro_cert_file`, `siro_contact_email`, `siro_data_confirmed_at`;
  - `seprelad_co_code` (confidential), plan.
- `Practice`: auditor or consultant firm, with SEPRELAD auditor registration number and expiry. `PracticeFirmGrant` (firm_id, practice_id, scope, granted_by, expires_at).
- `User`; `Membership` (user, firm, role: TOP_AUTHORITY, CO, ASSISTANT, AGENT, BRANCH_LEAD, AUDITOR_RO, CONSULTANT); `MfaDevice`.
- `OfficerAppointment`: CO, interim CO or branch lead; dates; notified_at; objection-period end; documents.

**Rules, parameters and content**
- `Parameter`: key, value, unit, `valid_from`, `valid_to`, source URL. Examples: minimum wage; simplified-CDD multipliers per sector; deadline rules; zones.
- `CodeTable` and `CodeValue`: cities, activities, countries, currencies, enums, with a version and source file hash.
- `Regulation`: number, date, title, URL, articles. `RegulationLink` ties a regulation to the templates and rules it drives.
- `Template`: DOCX with tags, version, legal reviewer, review date, regulation links. `RuleSet`: risk-scoring and red-flag rules as data tables, versioned, with golden tests.

**Documents and approvals**
- `GeneratedDocument`: type (MANUAL, CODE, CO_ACT, CO_NOTICE, RISK_ASSESSMENT, METHOD, TRAINING_PLAN, CI_REPORT, CO_ANNUAL, AUDIT_PACK), version, template version, data snapshot (JSON), file, status.
- `Approval`: polymorphic target, approver, role, time, document hash, MFA flag.
- `Acknowledgement`: person, document version, time, method (e-sign or uploaded scan).

**Clients and KYC**
- `Client`: kind (natural or legal), document type and number (CI, PA, RUC, CRP, CRT, TDEF, CRC), names, nationality and residence (ISO alpha-3), city code, activity, contacts, purpose and nature, expected volume, source of funds.
- `ClientVersion`: a snapshot on each change, for the "updated per CDD regime" rule.
- `BeneficialOwner`: person, percentage, control type, certificate.
- `ClientDocument`: kind, file key, SHA-256, uploader, `original_seen_by`, expiry.
- `PepDeclaration`: signed file, declared status, role, institution, dates, family links.
- `CddDecision`: regime, reasons, parameter versions, approvals.
- `RiskScore`: rule-set version, factor scores, total, level, override and reason, next review date.

**Operations and filings**
- `Operation` holds every RO field:
  - property: type, class, cadastral account, matrícula/finca, building, floor, city code;
  - deal: operation type, date, currency, modality, payment form, amounts (delivered, financed, instalments, compensation), Gs equivalents with FX source;
  - status: draft, completed, cancelled.
- `OperationParty`: operation, client, role (BUYER or SELLER), PEP flag at the time.
- `Obligation`: type (RN, RO, CI, FA, AE, CANON, DATA_CONFIRM, CO_NOTICE, RISK_REVIEW, METHOD_REVIEW, TRAINING_PLAN, AE_EXEMPTION), period, due date, rule reference, state.
- `Filing`: obligation, export files with hashes, filed_at, SIRO receipt file, "nil" note. `Task`: owner, due date, links.
- `SepreladNotice`: number, date, cited obligations, remediation items.

**Screening**
- `WatchlistSource`; `WatchlistVersion` (fetched_at, checksum, counts, diff); `WatchlistEntry` (normalised names, birth dates, nationalities, programme).
- `ScreeningRun`: trigger (onboarding, operation, list update), subject. `ScreeningHit`: score, explanation, decision, reviewer, reason.

**Confidential area** (separate schema, separate encryption key, access logged on every read)
- `Alert`: rule or manual, operation, time, source.
- `UnusualCase`: clocks, analysis notes, decision with reasons.
- `RosRecord`: decision time, approval, filed_at, receipt, no-ROS-in-quarter flag. In the MVP, only the date and receipt are stored, not the narrative.

**Training and audit**
- `TrainingPlan`, `TrainingSession`, `Attendance`.
- `AuditEngagement`: auditor, registration number and expiry, year. `AuditFinding`: status, due date, evidence.

**System**
- `AuditLog`: append-only, hash-chained (each row stores the hash of the previous one), with before and after values, kept 5 years (R88).
- `RetentionClock` fields, purge requests and approvals.
- `SupportAccessGrant`.

## Architecture and stack

### Principles for software built by one founder with AI agents

- **Boring and conventional.** Pick a framework with strong conventions and lots of public code. Agents then write idiomatic code and the founder can review it fast.
- **One repository, one deployable app.** Split the work into internal modules with clear owners, not services. Parallel agents work in separate modules and meet at agreed interfaces.
- **Rules are data, not code.** Thresholds, deadlines, enums and red flags live in versioned tables with tests. A rule change then becomes a data change the lawyer can check.
- **No AI on the compliance path.** The KYC regime, risk score, screening and deadlines are deterministic and explainable. An auditor tests the tool under [Res 411/2013](https://www.seprelad.gov.py/resoluciones/resoluciones/resolucion-n-4112013.pdf). AI only drafts text a human approves.

### Recommended stack (library versions as listed on PyPI, 10 Oct 2026)

| Layer | Choice | Why |
|---|---|---|
| Language and framework | Python 3.13; **Django 6.1.2**, or 5.2 LTS for a longer support window | Built-in admin for the content editor; mature auth, forms and i18n (`es-PY`); the best document and Excel libraries are in Python |
| Front end | Server-rendered templates with **HTMX** (django-htmx 1.29.0) and a little Alpine.js; a light CSS framework | The app is forms, lists and documents. No separate front end to keep in sync. Fast on weak mobile connections. |
| Database | PostgreSQL with `pg_trgm` for fuzzy search, JSONB for snapshots, and **row-level security** keyed on `firm_id` | One database for a small multi-tenant app. RLS is a second wall behind the framework's query scoping. |
| Background jobs | **procrastinate 3.10.0** (Postgres-backed queue) | No Redis to run. Jobs: list refresh every 6 hours, re-screening, reminders at 07:00 Paraguay time, the monthly DNIT import, document rendering. |
| Documents | **docxtpl 0.20.2** for DOCX templates; LibreOffice headless (for example in a Gotenberg container) for DOCX to PDF; WeasyPrint 70.0 for HTML to PDF (screening certificates, the copy sheet) | The lawyer edits Word templates with simple tags. Users get DOCX to adapt and PDF to file. |
| Excel and JSON exports | **openpyxl 3.1.5**; a JSON schema validator once SEPRELAD's schema arrives | Exact header order; golden-file tests against the reference file |
| Name matching | **rapidfuzz 3.14.6**, unidecode 1.4.0, pg_trgm | Spanish names, accents, compound surnames |
| Auth | Django auth, Argon2 password hashing, **django-otp 1.7.4** (TOTP) | MFA required for top authority, CO, auditor and consultant |
| Files | S3-compatible object storage in the same region; server-side encryption with a KMS key; per-firm prefixes; short-lived signed URLs; ClamAV scan on upload | ID copies and declarations are the most sensitive data |
| E-mail | Amazon SES in the same region; SPF, DKIM, DMARC | Cheap, close to the app |
| Payments | Paddle Billing: hosted checkout plus webhooks into a `Subscription` table | Merchant of record handles tax; no card data touches our servers |
| Monitoring | Error tracking (Sentry, or self-hosted GlitchTip), uptime checks, structured logs with no personal data | Small and cheap |
| Deploy | Docker Compose on AWS Lightsail in São Paulo behind Caddy (automatic TLS); GitHub Actions for CI and CD; staging and production | One command to deploy; easy to move to ECS or RDS later |
| Tests | pytest, factory_boy, Playwright 1.63.0 for end-to-end tests, semgrep or bandit for static security checks, pip-audit | Agents must make tests pass before merging |

**Why not a JavaScript stack.** Next.js or Remix with TypeScript would also work, and AI agents are good at it. Python wins here on DOCX and Excel tooling, the Django admin for legal content, and name-matching libraries. Either choice is fine if the founder knows it better.

**Lightsail caveat.** Lightsail's managed PostgreSQL is standard PostgreSQL, so RLS works. Whether it allows the `pg_trgm` extension is unverified. If it does not, use Amazon RDS for PostgreSQL in the same region (price not checked, unverified) or run PostgreSQL on the VM at the 50-customer stage.

### Module map (Django apps; one owner stream each)

`core` (tenancy, users, roles, MFA, audit log, support access) · `params` (parameters, code tables, regulations) · `calendar` (obligations, tasks, reminders, filings, notices) · `clients` (KYC, BO, PEP declarations, documents, risk score) · `screening` (sources, versions, matching, hits) · `operations` (deals, RO validation and export) · `documents` (templates, generation, approvals, acknowledgements) · `training` · `confidential` (alerts, cases, ROS log) · `reports` (CI, FA, CO annual, audit pack) · `practice` (auditor and consultant portal) · `billing` · `public` (site, help, legal pages).

### Diagram

```
Phone/PC browser (HTMX)
      |
   Caddy (TLS) -- Django web app -------- PostgreSQL (RLS, PITR backups)
                     |    ^                    ^
                     v    |                    |
               procrastinate workers ----------+
               |        |          |          |
     UN/OFAC/EU feeds  DNIT RUC   LibreOffice  S3 bucket (KMS-encrypted files)
     (XML, 6-hourly)   (monthly)  (DOCX->PDF)  + encrypted copy in 2nd region
               |
     Amazon SES e-mail · Paddle webhooks · (later) WhatsApp, OpenSanctions API
```

## Security, privacy and liability

### Main threats and controls

| Threat | Control |
|---|---|
| One firm sees another firm's clients | `firm_id` scoping in every query manager, plus PostgreSQL RLS (`SET app.firm_id` per request); automated cross-tenant read and write tests in CI; consultants work in one firm at a time |
| Takeover of a CO or owner account | TOTP MFA required for these roles; login rate limits; 30-minute idle timeout; new-device e-mail alerts |
| Leak of ID copies and declarations | KMS-encrypted object storage; no public buckets; signed URLs valid for minutes; virus scan; only metadata in logs |
| Tipping off through the app (Ley 1015/97 art. 20; Res 201 art. 33, 36; [Circular 01/2025](https://www.seprelad.gov.py/resoluciones/resoluciones/circular0125.pdf)) | Confidential area in a separate schema with its own key; visible only to top authority, CO and named assistants; every read logged; client-facing exports and data-subject answers exclude ROS and ITC data; MVP stores no ROS narrative |
| Tampering with evidence | Hash-chained append-only audit log; SHA-256 on every uploaded file; approvals store the document hash |
| Insecure code written by AI agents | Human review of every change to auth, tenancy and file access; static analysis and dependency audit in CI; pinned dependencies; agents never get production credentials or real client data; external security test before launch and every year |
| SIRO credential exposure | The product never asks for or stores SIRO usernames or passwords ([01, rule G1](01-law-and-requirements.md)) |
| Data loss | Managed database backups plus point-in-time recovery; nightly encrypted dump copied to a second region; a restore test each month; targets of under 1 hour of data loss and back online within 8 hours |

### Data protection: Ley 7593/2025

- **Status.** Promulgated 27 Nov 2025 and published in the Official Gazette Nº 287. Main duties apply after a two-year transition, on 27 Nov 2027. An implementing decree is pending ([Clym](https://www.clym.io/regulations/law-no-7593-paraguay); [La Nación](https://www.lanacion.com.py/politica/2025/11/28/nueva-ley-de-datos-personales-refuerza-la-privacidad-sin-recortar-la-transparencia-publica/); [IAPP](https://iapp.org/news/a/paraguay-da-un-paso-hacia-un-marco-moderno-de-protecci-n-de-la-privacidad); [Ferrere](https://ferrere.com/es/novedades/paraguay-adopta-su-ley-de-proteccion-de-datos-personales/)).
- **What secondary sources say it requires.** I did not read the official text, so article numbers and details are unverified:
  - a new Agencia Nacional de Protección de Datos Personales within MITIC, with sanctioning powers;
  - transfers abroad only to adequate countries or with safeguards such as contractual clauses or binding corporate rules;
  - breach notice within 72 hours to the authority and to the people affected;
  - impact assessments for high-risk processing, with prior consultation if the risk stays high;
  - rights of access, rectification, erasure, objection, portability and review of automated decisions;
  - fines from 20 to 2,500 minimum daily wages for general infractions, with higher caps for sensitive data ([Clym](https://www.clym.io/regulations/law-no-7593-paraguay); [Kiteworks brief](https://www.kiteworks.com/sites/default/files/resources/kiteworks-brief-habilita-soporte-para-la-ley-de-proteccion-de-datos-personales-de-paraguay.pdf); [DPL News](https://dplnews.com/?p=297606)).
- **Roles.** Each firm is the controller of its clients' data. We are its processor. We are controller only for our own users and billing. Every customer signs a processing agreement (DPA) covering purpose, instructions, confidentiality, security, the sub-processor list (AWS, Paddle, Amazon SES, the error tracker, and later Meta for WhatsApp, OpenSanctions or the PEP vendor, and Anthropic if AI drafting is switched on), the transfer basis, breach notice within 48 hours to the firm, and return or deletion.
- **Hosting choice and transfers.** Production runs in AWS São Paulo. Brazil has its own data-protection law (LGPD). Paraguay has no adequacy list yet, so rely on contractual clauses in the DPA (my view; ask the lawyer). The encrypted backup copy goes to a second region. A US region is fine technically, but harder to defend. Show the hosting location in the DPA (R92).
- **Impact assessment and records.** Write a DPIA before the pilot. The data includes ID copies, PEP status, source of funds and suspicion records, which is likely high-risk. Keep a record of processing.
- **AML law beats erasure.** Operation records are kept 5 years from the operation. CDD records are kept 5 years after the relationship ends (Ley 1015/97 art. 18; Res 201 art. 20, 32). Erasure requests for data under this hold are declined, with the legal basis stated. After both clocks run out, data is purged with CO approval (R86). On exit, the firm gets a full export and an archive plan (R87).
- **Public registers used for sales.** The SEPRELAD register and the DNIT RUC files include individuals (21% of real-estate rows, per [02](02-market-and-competition.md)). Use them for B2B outreach only, keep an opt-out list, and get the lawyer's view before Nov 2027.

### Liability and positioning

- **A tool, not legal advice.** Every generated document shows "template version X, reviewed by [lawyer or auditor] on [date]". The firm must review, adapt and approve it, and the approval is recorded.
- **No endorsement claims.** SEPRELAD does not approve or recommend vendors, and its staff may not act as advisers ([Circular 2/2025](https://www.seprelad.gov.py/resoluciones/resoluciones/CIRCULAR%202-2025.pdf)). The site and the app say so (R96).
- **Filing stays with the firm.** The product exports. The firm files in SIRO under its own sworn declaration.
- **Screening disclaimer.** A check covers the named lists at the stated time. "No match" is not a guarantee. The CO decides.
- **Training.** Our help content is not CECAD-certified training ([Res 174/2023](https://www.seprelad.gov.py/resoluciones/resoluciones/resn174-23.pdf); R85).
- **Terms of service.** Liability capped at the fees paid in the last 12 months. No liability where the user ignored a task or a hit. A commitment to update templates within 30 days of a relevant SEPRELAD resolution, and to notify users. That commitment is also the renewal story.
- **Insurance.** Cyber and professional-indemnity cover for the foreign company once revenue starts. Price unknown (unverified).

## Hosting and running costs

**Hosting choice:** AWS Lightsail in São Paulo (sa-east-1).
- The pricing page lists one bundle price for all regions. A 4 GB server costs US$24 a month and an 8 GB server US$44. Managed PostgreSQL costs US$30 for 2 GB, US$60 for 4 GB, and US$120 for 4 GB with high availability. Object storage starts at US$1-5 a month. São Paulo plans include half the usual data-transfer allowance, and overage there costs US$0.15/GB ([Lightsail pricing](https://aws.amazon.com/lightsail/pricing/), fetched 10 Oct 2026).
- Data transfer is negligible for a forms app.

**Monthly running cost (US$, excluding VAT, staff and payment fees; my estimates)**

| Item | 50 customers | 300 customers | 1,000 customers |
|---|---|---|---|
| App and worker servers | 1 × 4 GB: 24 | 8 GB app + 4 GB worker: 68 | 2 × 8 GB app + 8 GB worker + load balancer (18): 150 |
| PostgreSQL (managed) | 2 GB: 30 | 4 GB: 60 | 4 GB HA (120) to 8 GB HA (230) |
| File storage (ID copies, documents) | about 10 GB: 1-3 | about 60 GB: 3-5 | about 200 GB: 5-10 |
| Encrypted backup copy, second region | 1-3 | 3-6 | 8-15 |
| Staging server | 12 | 12 | 24 |
| E-mail (SES) | 1 | 2-5 | 5-15 |
| Error tracking, uptime, logs | 0-26 | 26-50 | 50-100 |
| Domain, DNS, KMS keys, misc. | 5 | 5-10 | 10-20 |
| PEP API checks at onboarding (optional; about 40 new clients per firm a year at €0.03-0.10 each) | 0-18 | 50-100 | 100-180 |
| WhatsApp reminders (optional; about 40 a year per firm at about US$0.012) | 0-3 | 5-15 | 20-45 |
| AI drafting (optional) | under 1 | under 5 | under 15 |
| **Total** | **about 75-125** | **about 235-335** | **about 490-805** |
| Per customer per month | 1.5-2.5 | 0.8-1.1 | 0.5-0.8 |

**Revenue context.**
- 02 suggests US$10 a month for a basic plan, US$25-35 for the full plan and US$100-150 for an auditor practice. At an average of about US$25 per customer a month, infrastructure is about 6-10% of revenue at 50 customers, 3-4.5% at 300 and 2-3% at 1,000 (my estimate).
- **Payment fees match or exceed hosting.** At 300 customers they are about US$450 a month against US$235-335 for hosting. Paddle's 5% + US$0.50 takes US$2.00 (6.7%) of a US$30 monthly payment, but US$15.50 (5.2%) of a US$300 annual one. Plans under US$10 need custom pricing ([Dodo Payments review](https://dodopayments.com/blogs/paddle-review)). Sell the basic plan yearly only.

**Fixed operating costs after launch (US$ a month; my estimates)**
- Claude Code for ongoing development: 200, the Max 20x plan ([Anthropic](https://support.claude.com/en/articles/11049744-how-much-does-the-max-plan-cost)).
- Lawyer or AML-expert retainer to watch new resolutions and update templates: 100-300.
- Yearly security retest, spread over the year: 250-670.
- Insurance: unverified.

These fixed costs come to **about US$650-1,300 a month** with hosting at 50 customers. The business covers its costs at roughly 50-60 paying firms on full plans (my estimate).

## Development plan

### Calendar anchors

- **Today** is Sat 10 Oct 2026. The Q3 2026 RO window is open now, on 11-20 Oct 2026 ([Res 003/2025](https://www.seprelad.gov.py/?p=1528)).
- **First deadlines after launch:** RN for Q4 2026 on 1-10 Jan 2027, and RO on 11-20 Jan 2027.
- **First annual deadlines:** CI on 30 Mar 2027, FA on 31 May 2027, AE and canon on 30 Jun 2027 ([Circular 2/2025](https://www.seprelad.gov.py/resoluciones/resoluciones/CIRCULAR%202-2025.pdf)).
- **Holidays in the build window:** 8 Dec (Caacupé) and 25 Dec ([holidays library](https://pypi.org/project/holidays/)). January is the summer holiday month, but the RN and RO windows force activity then.

### Phases

| Phase | Dates | Goal | Exit check |
|---|---|---|---|
| 0. Prepare | Mon 12 - Sun 18 Oct 2026 | Interviews, artefacts, spec pack for agents, accounts; RO format spike tested in the live Q3 window | Spec pack approved; lawyer engaged; at least 2 pilot firms or 1 auditor committed |
| 1. Foundation | 19 - 25 Oct | Skeleton, tenancy, auth, audit log, parameters, all models, CI and CD, staging | "Contract freeze": models and service interfaces merged; CI green |
| 2. Parallel modules | 26 Oct - 6 Nov | Six agent streams build the MVP column | **MVP definition of done met, Fri 6 Nov** |
| 3. Integration and launch scope | 9 - 20 Nov | Hardening; auditor portal and audit pack; RUC autofill; alert register; export and archive; client self-service link | End-to-end flows 1-4 and 7 pass |
| 4. Legal sign-off | Drafts sent 30 Oct; sign-off by 20 Nov | Templates v1.0, terms, privacy notice, DPA, disclaimers | Written sign-off from the lawyer |
| 5. Security test | Test 23-27 Nov; fixes 30 Nov - 4 Dec; retest by 9 Dec | External grey-box test of the app and infrastructure | No open high or critical findings |
| 6. Pilot | 16 Nov - 11 Dec | 5-10 firms through 1-2 registered auditors, free until 31 Jan 2027 | 5 firms active; 2 with a complete file; NPS and time-to-file measured |
| 7. Sellable | **Fri 11 Dec 2026** | Billing live, help pages, pricing page | "Sellable" definition met |
| 8. First live season | 14 Dec 2026 - 31 Jan 2027 | Support firms through the RN and RO windows; fix the export from real SIRO feedback | RO files accepted by SIRO for at least 10 firms |
| 9. Annual-report releases | CI generator by 15 Feb 2027; FA calculator by 15 Apr; AE exemption workflow and audit-pack polish by 15 May | Meet the CI, FA and AE deadlines | Firms file CI and FA using our output |
| 10. Second vertical and add-ons | Jun - Sep 2027 | Car-dealer pack (Res 196/2020; 845 fee payers); PEP data add-on; WhatsApp; ROS draft | Car-dealer pilot with 5 dealers |

### Week 0: preparation (12-18 Oct 2026)

- **RO format spike (highest value).** Build a stand-alone script that turns a filled spreadsheet into the SIRO RO Excel file in the reference layout. Have a friendly firm or auditor try it in the live Q3 window, which closes 20 Oct. This tests the riskiest integration months before the January season. If no firm is ready in time, the first live test moves to January 2027.
- **Ask SEPRELAD for the JSON schema.** The bulk-JSON route is requested by an obligated subject, with its name, RUC and CO ([JSON notice](https://www.seprelad.gov.py/?p=3156)), so a pilot firm must send the note. We can also ask the E-porandu help desk for the technical specification.
- **Interviews.** Talk to 5 agencies or developers, 3 registered auditors (from SEPRELAD's auditor export) and 1-2 consultants. Collect real artefacts: an existing manual, a CI report, an FA ticket, SIRO screenshots of the RO and FA forms, a warning letter.
- **Hire the content reviewer.** A Paraguayan AML lawyer, or a registered auditor with a lawyer, on a fixed fee. Agree the deliverables: manual, code of ethics, CO act and notice pack, risk-assessment method, CI report template, PEP declaration, terms, DPA and privacy notice.
- **Write the spec pack for the agents.** It holds:
  - `CLAUDE.md` with conventions;
  - a domain glossary (Spanish to English);
  - the 96 requirements from 01, each mapped to a module and an acceptance test;
  - the data model;
  - a UI pattern sheet;
  - fixtures: a synthetic firm with 30 clients and 60 operations.
- **Accounts.** AWS (São Paulo), domain, GitHub, Paddle sandbox, SES, error tracker.

### How the founder runs parallel AI agents

- **Contract first.** In week 1 the founder and one agent write every module's models, service-function signatures and URL map, plus failing end-to-end smoke tests. After the freeze, each stream owns one Django app and makes its tests pass. Changes to shared models need the founder's approval.
- **Isolation.** Each stream works in its own git worktree and branch, in its own Claude Code session. Pull requests stay small (under about 400 changed lines) and need green CI: lint, types, unit, tenancy and end-to-end tests. A separate reviewer agent comments on every pull request. The founder merges twice a day. `main` is always deployable, and staging updates on each merge.
- **Golden tests for the legal parts.**
  - The RO export header must equal the reference header exactly.
  - Deadline rules have one test per obligation and edge case: weekends, holidays, 31 December fiscal year, other fiscal years.
  - The CDD regime is tested at threshold values, before and after the 1 July minimum-wage change.
  - The manual must cover every Annex I heading.
- **Guardrails.** Agents get synthetic data only, no production access and no secrets. New dependencies need approval. Auth, RLS, file access and the confidential area are reviewed line by line by the founder.
- **Capacity.** One founder can steer about 5-7 parallel streams if each is well specified. More streams create merge and review queues (my judgement).

### Work streams for the MVP (weeks 2-3)

| Stream | Scope | Main requirements | Depends on | Agent-days (my estimate) | Done when |
|---|---|---|---|---|---|
| **WS1 Calendar and obligations** | Obligation engine from the parameter tables; business days with holidays; tasks; e-mail reminders at 30, 7 and 1 days; semáforo dashboard; filing records with receipt upload; RN logic; ICS feed | R68-R70, R72, R74 | Foundation; WS4 for the "ROS filed in quarter" flag | 6-8 | All FY2026-27 deadlines are correct in tests; the dashboard shows proof per obligation |
| **WS2 Clients and KYC** | Natural- and legal-person forms; versions; documents with hash; BO; PEP declaration PDF and upload; CDD regime engine; risk score v0; enhanced-CDD approval | R34-R38, R41, R43-R47 | Foundation, params | 8-10 | Threshold tests pass; a complete file blocks or unblocks operations |
| **WS3 Screening** | Fetchers for UN, OFAC and EU with versions and diffs; FATF table; name normaliser; matcher; hit review screen; scheduled re-screen; logs | R48-R50 | Foundation; WS2 client model | 6-8 | A seeded list name produces a hit within one refresh cycle; decisions are logged |
| **WS4 Operations and RO** | Operation form with all fields; enum and code-table validation; quarterly Excel export; copy sheet; JSON exporter behind a flag; exported, filed or nil states | R53-R58 | Foundation; WS2 | 6-8 | Golden header test passes; a 100-operation quarter exports in under 5 seconds; the validator flags each bad field |
| **WS5 Documents and approvals** | docxtpl engine; manual (Annex I), code, CO act, CO notice pack; versions; approvals; DOCX and PDF; acknowledgement requests | R11, R13, R26-R29, R31 | Foundation | 6-8 | Coverage test passes; approval stores the hash; a new version resets acknowledgements |
| **WS6 Onboarding, billing, public site** | Six-step wizard; Paddle checkout and webhooks; plan limits; Spanish landing page, pricing, terms, privacy and DPA pages (placeholder text until sign-off) | R1-R3, R7, R9 | Foundation; WS1 | 5-7 | A new firm reaches the dashboard in under 45 minutes; a sandbox subscription toggles access |
| **WS7 QA and security (continuous)** | Playwright flows 1-4; cross-tenant tests; static analysis and dependency audit; accessibility; review comments on every pull request | R88-R90 | All | 5-8 | CI blocks merges on failure; no high findings from static analysis |

**Launch-scope streams (weeks 4-6):**
- WS8: practice portal and audit pack (R77-R80).
- WS9: DNIT RUC monthly import and autofill.
- WS10: alert register with Annex III red flags and the confidential area (R59-R61, R65-R66).
- WS11: full export and archive plan (R86-R87).
- WS12: client self-service KYC link.
- WS13: SEPRELAD notices log and SIRO data-confirmation tasks (R8, R73).
- WS14: risk self-assessment wizard (R19-R25).

The CI report generator (R75-R76) and the FA calculator (R71) follow in January-March 2027.

**Effort check.** The MVP is about 42-57 agent-days of work, the sum of WS1-WS7. Seven streams over 10 working days give about 70 stream-days of capacity. The plan fits, with some slack for review and merge delays. Cut first: the ICS feed, the JSON exporter and the copy-sheet styling.

### Definition of done: MVP (Fri 6 Nov 2026)

1. A test user sets up a firm in under 45 minutes on staging (timed with two people).
2. The calendar creates every periodic obligation for Oct 2026 to Dec 2027 with the right dates. Unit tests cover RN 1-10, RO 11-20, CI 30 March, FA 31 May, AE 30 June, the CO notice in 5 business days, risk reviews at 24 months and method reviews at 48.
3. Client files work for natural and legal persons. The regime logic passes boundary tests at 150 and 20 minimum wages on both sides of 1 Jul 2026. The PEP declaration PDF generates. Uploads store a hash.
4. UN, OFAC and EU lists load on schedule with versions. A seeded test name produces a hit. Each decision and its reason are logged. A list change triggers re-screening.
5. Operations hold every RO field. The validator rejects bad codes and formats. The Excel export matches the reference header order exactly. A filing can be marked exported, filed (with receipt) or nil.
6. The manual covers every Annex I heading, and the code and CO act generate. Approvals are recorded with hashes. DOCX and PDF download.
7. MFA is enforced for CO and top authority. Cross-tenant tests pass. The audit-log hash chain verifies. One backup has been restored.
8. End-to-end flows 1-4 pass in CI. No open priority-1 bugs.

### Definition of "sellable" (Fri 11 Dec 2026)

- MVP done, plus: practice portal and audit pack, RUC autofill, alert register, full export, client self-service link.
- Templates v1.0 and legal pages signed off in writing by the lawyer.
- Security test complete, with no open high or critical findings.
- 5 or more pilot firms active, at least 2 with a complete file. RO export reviewed by at least one auditor.
- Paddle live with monthly, annual and practice plans.
- Help pages for the January windows. DPIA, incident-response plan and sub-processor list published.

## Budget

**Cash budget to "sellable" (Oct-Dec 2026; US$; no salaries; my estimates unless cited)**

| Item | Low | Middle | High | Notes |
|---|---|---|---|---|
| Claude Code Max 20x, 1-2 seats for 3 months | 600 | 1,200 | 1,200 | US$200 per seat a month ([Anthropic](https://support.claude.com/en/articles/11049744-how-much-does-the-max-plan-cost)) |
| Claude API for testing AI drafting | 10 | 20 | 50 | Prices from [Anthropic](https://platform.claude.com/docs/en/about-claude/pricing) |
| Lawyer or AML-expert review: templates, terms, privacy notice, DPA | 2,000 | 3,500 | 5,000 | Fixed fee (my estimate; no published Paraguayan rates found) |
| Registered auditor as paid design partner (CI template, audit pack) | 0 | 500 | 1,000 | Can be paid in free licences |
| External security test plus retest | 3,000 | 5,000 | 8,000 | 2026 guides put a small web-app test at about US$5,000-15,000. Quotes under about US$2,000 are often just scans ([Blaze Information Security](https://www.blazeinfosec.com/post/how-much-does-penetration-testing-cost/); [Redfox Security](https://www.redfoxsec.com/blog/how-much-does-web-application-penetration-testing-cost-2026-pricing-guide)). A scoped 3-4 day test of a small app is the low end. |
| Hosting, production and staging, 3 months | 150 | 200 | 300 | [Lightsail pricing](https://aws.amazon.com/lightsail/pricing/) |
| Domain, e-mail, monitoring, password manager, small SaaS | 50 | 100 | 200 | |
| Spanish (Paraguay) copy-editing of UI and help | 0 | 300 | 500 | |
| Optional one-week trip to Asunción (auditors, ACIP, pilots) | 0 | 0 | 2,500 | Unverified prices |
| Contingency (10%) | 580 | 1,080 | 1,875 | |
| **Total** | **about 6,400** | **about 11,900** | **about 20,600** | |

**What is not in this table:**
- The founder's time.
- Company formation abroad and any local company. These are covered in the go-to-market and payments sections.
- Marketing.

**Year 1 after launch (my estimates):**
- Hosting: about US$1,000-2,500 for the year as customers grow.
- Claude Code: US$2,400.
- Content retainer: US$1,200-3,600.
- Yearly security retest: US$3,000-8,000.
- PEP data: pass-through.
- Paddle fees: about 5-7% of revenue.

## Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| SIRO rejects our RO file: column order, date, number or phone formats, or a missing matrícula field | Medium | High: RO is a headline feature | Week-0 spike in the live Q3 window; switchable format options; the copy sheet as a fallback; ask SEPRELAD for the JSON schema |
| SEPRELAD changes forms or adds fields (it has added SIRO modules every year: supervision 2024, JSON 2025, data update Oct 2026) | High | Medium | Code tables and enums as dated data; a monthly check of the spec PDF and linked sheets; the regulation register flags affected templates |
| A firm switches to JSON and loses one-by-one entry, then depends on us | Medium | Medium | Explain the trade-off; recommend JSON only for firms with many operations; keep the JSON exporter tested |
| SEPRELAD adds free reminders or record-keeping to SIRO | Medium | High | Compete on the client file, audit pack and auditor channel, which a filing portal is unlikely to cover; keep prices low |
| Errors in legal templates or rules | Medium | High | Lawyer sign-off; version stamps; golden tests; 30-day update promise; liability cap |
| Data breach of ID copies | Low | Very high | Encryption, MFA, RLS, minimal logs, security test, DPIA, 72-hour breach plan |
| AI-written code hides security bugs | Medium | High | Human review of the sensitive modules; static analysis; external test; no production access for agents |
| Over-scoping the 3-week MVP | High | Medium | A strict MVP column; cut list ready (ICS feed, JSON, styling); launch scope moves out, not the date |
| PEP coverage gaps | High | Medium | Signed declaration as the core control; paid local PEP data as an add-on; clear disclaimer |
| Ley 7593/2025 decree adds local-hosting or registration demands | Low-Medium | Medium | Container-based deploy that can move to a Paraguayan provider; a DPA with transfer clauses |
| One founder is a single point of failure | Medium | High | Documented runbooks; infrastructure as code; a support SLA sized to one person; escrow of the code for big customers (later) |
| Card payment friction in Paraguay | Medium | Medium | Annual plans; practice plans billed to auditors; check local payment options in the payments section |

## Open questions

1. Does SIRO's RO module still accept the Excel bulk upload, or only one-by-one entry and JSON? Does it map columns by position or by header? Which date, number and phone formats does it accept? ([RO spec](https://www.seprelad.gov.py/resoluciones/resoluciones/contenido-archivo-excel-ro-inmobiliarias.pdf); [JSON notice](https://www.seprelad.gov.py/?p=3156))
2. What is the JSON schema for bulk RO? Can a vendor ask for it, or only an obligated subject?
3. Is the matrícula/finca field required in the RO, as the Res 003/2025 annex suggests ([01](01-law-and-requirements.md))?
4. Is there a SEPRELAD test environment for SIRO uploads? (None found.)
5. Does SEPRELAD publish a machine-readable list of national designations?
6. Does Lightsail's managed PostgreSQL allow `pg_trgm`? If not, use RDS or a self-managed database.
7. Under Ley 7593/2025, what will the decree require for transfers abroad, breach notices and a DPO? Is Brazil or the EU likely to be declared adequate?
8. Is a logged simple e-signature (Ley 6822/2021) enough for staff acknowledgements of the manual and code, and for top-authority approvals?
9. What do Compliance Paraguay and OpenSanctions charge for PEP data at our volumes, and may it be resold inside a SaaS?
10. What are the reuse terms of the DNIT RUC files?
11. Will registered auditors accept our system description as the "IT tool" evidence for Res 411/2013, and our audit pack as their working file?
12. Can a firm's CI report be in our format, or does SEPRELAD expect a set layout beyond the 12 Annex II items?

## Sources

**SEPRELAD and official Paraguayan sources** (accessed 10 Oct 2026 unless noted)
- RO Excel specification (fields, enums, links to code tables): https://www.seprelad.gov.py/resoluciones/resoluciones/contenido-archivo-excel-ro-inmobiliarias.pdf
- RO reference Excel (Google Sheet linked from the spec; downloaded and inspected): https://docs.google.com/spreadsheets/d/1u6C6V7Dy13EyIGRyxyaYUZn2gYVD4Tfo/edit
- City code table (245 rows): https://docs.google.com/spreadsheets/d/18nOtPJojzxbgYWCf-lYxGwKKHcdgIKTf/edit
- Economic-activity table (243 rows): https://docs.google.com/spreadsheets/d/1XMr8idLq1Lbo3p0r5Io0Dr4aceEAT4qR/edit
- SEPRELAD notice on JSON bulk RO upload (22 Aug 2025): https://www.seprelad.gov.py/?p=3156
- SEPRELAD notice on Res 003/2025 RO module (8 Jan 2025): https://www.seprelad.gov.py/?p=1528
- SIRO user manual for CI and AE uploads: https://www.seprelad.gov.py/resoluciones/resoluciones/manual-de-usuario-remision-informe-cumplimiento-s-o.pdf
- SEPRELAD notice on the real-estate data-update form (2 Oct 2026, via 02): https://www.seprelad.gov.py/?p=4412
- Res 201/2020: https://www.seprelad.gov.py/resoluciones/resoluciones/res-n201-2020-reglamentacion-para-inmobiliarias.pdf
- Res 003/2025: https://www.seprelad.gov.py/resoluciones/resoluciones/resol-03-2025-ro-inmobiliarias.pdf
- Res 326/2022: https://www.seprelad.gov.py/resoluciones/resoluciones/resn326-22-implementacionsiro-r-n.pdf
- Res 165/2022 annex (FA; PEP sources; risk zones): https://www.seprelad.gov.py/resoluciones/resoluciones/anexos-res-n-165-22-formulario-anualso-sector-inmobiliario.pdf
- Circular 2/2025 (deadline table; no official advisers): https://www.seprelad.gov.py/resoluciones/resoluciones/CIRCULAR%202-2025.pdf
- Circular 01/2025 (confidentiality): https://www.seprelad.gov.py/resoluciones/resoluciones/circular0125.pdf
- Circular 001/2022 (agents): https://www.seprelad.gov.py/resoluciones/resoluciones/circular-uif-sepreladsen001-22.pdf
- Res 435/2026 (yearly data confirmation): https://www.seprelad.gov.py/resoluciones/resoluciones/435_2026.pdf
- Res 328/2026 (AE exemption or deferral): https://www.seprelad.gov.py/resoluciones/resoluciones/Res.%20328.26_Excepci%C3%B3n%20de%20auditor%C3%ADa%20externa.pdf
- Res 681/2024 (warnings to 1,238 real-estate firms): https://www.seprelad.gov.py/resoluciones/resoluciones/res-n681-24.pdf
- Res 56/2026 (canon): https://www.seprelad.gov.py/resoluciones/resoluciones/RESOLUCION%20N%C2%B0%2056.pdf
- Res 50/2019 (PEPs): https://www.seprelad.gov.py/resoluciones/resoluciones/resolucion-n-50-19-por-el-cual-se-aprueba-el-reglamento-de-identificacion-de-personas-expuestas-politicamente.pdf
- Res 202/2020 (BO certificate): https://www.seprelad.gov.py/resoluciones/resoluciones/resolucion-n-202-2020.pdf
- Res 411/2013 (audit standards, IT-tool testing): https://www.seprelad.gov.py/resoluciones/resoluciones/resolucion-n-4112013.pdf
- Res 174/2023 (CECAD training): https://www.seprelad.gov.py/resoluciones/resoluciones/resn174-23.pdf
- Res 483/2021, 258/2023, 203/2024 (registration): https://www.seprelad.gov.py/resoluciones/resoluciones/resolucion-n-483-21-siro.pdf ; https://www.seprelad.gov.py/resoluciones/resoluciones/resn258-23.pdf ; https://www.seprelad.gov.py/resoluciones/resoluciones/ResolucionN203_2024.pdf
- Res 460/2025 (deregistration): https://www.seprelad.gov.py/resoluciones/resoluciones/Resolucion%20N%C2%B0%20460_25%20-%20Se%20autoriza%20la%20implement%20del%20modulo%20BAJA%20DE%20SUJETOS%20OBLIG%20desarrollado%20en%20el%20SIRO.pdf
- Res 321/2022 (ITC): https://www.seprelad.gov.py/resoluciones/resoluciones/575-resolucion-n321-2022.pdf
- Decreto 5920/2021 (UN targeted sanctions): https://www.seprelad.gov.py/resoluciones/resoluciones/Decreto-5920-2021.pdf
- SEPRELAD Memoria 2024: https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf
- SEPRELAD public register and auditor lookup: https://www.seprelad.gov.py/siro/consultaExterna/consultaExternaSoAe.xhtml
- SEPRELAD statistics portal: https://www.seprelad.gov.py/siro/estadisticaExterna/estadistica.xhtml
- Decreto 6225/2026 (minimum wage, via impuestospy): https://impuestospy.com/impuestos/decreto-n-6225-2026/
- DNIT RUC files (ruc0.zip downloaded and inspected): https://www.dnit.gov.py/web/portal-institucional/listado-de-ruc-con-sus-equivalencias
- Decreto 7576/2022 (trust services): https://www.mic.gov.py/wp-content/uploads/2025/06/Decreto_7576-2022.pdf

**Sanctions and PEP data**
- UN consolidated list XML (downloaded): https://scsanctions.un.org/resources/xml/en/consolidated.xml
- OFAC SDN XML (checked): https://sanctionslistservice.ofac.treas.gov/api/PublicationPreview/exports/SDN.XML
- OpenSanctions dataset index (checked): https://data.opensanctions.org/datasets/latest/index.json ; licensing: https://www.opensanctions.org/licensing/ ; API: https://www.opensanctions.org/api/
- EU sanctions file and token note (via the Bosnia deep dive): ../bosnia/03-product-and-tech.md
- La Nación on Compliance Paraguay's PEP database (Aug 2024): https://www.lanacion.com.py/negocios/2024/08/13/consultora-presenta-herramienta-que-identifica-a-personas-expuestas-politicamente/
- OGP commitment on public-payroll open data: https://www.opengovpartnership.org/members/paraguay/commitments/PY0026/
- VCHGO note on open-data accuracy: https://contrataciones.gov.py/api/resultado/1ef030dd-07cd-6a2c-b6be-b11eb010357b/files/ae34f5ec-81b4-499d-ac31-61a76f00a9bf/download
- Criterion S.A.: https://criterion.com.py/
- Lookuptax on the RUC format (secondary): https://lookuptax.com/docs/de/steuerliche-identifikationsnummer/paraguay-ruc-steuer-id

**Law: data protection and e-signature**
- Clym summary of Ley 7593: https://www.clym.io/regulations/law-no-7593-paraguay
- Kiteworks brief on Ley 7593: https://www.kiteworks.com/sites/default/files/resources/kiteworks-brief-habilita-soporte-para-la-ley-de-proteccion-de-datos-personales-de-paraguay.pdf
- La Nación (28 Nov 2025): https://www.lanacion.com.py/politica/2025/11/28/nueva-ley-de-datos-personales-refuerza-la-privacidad-sin-recortar-la-transparencia-publica/
- IAPP: https://iapp.org/news/a/paraguay-da-un-paso-hacia-un-marco-moderno-de-protecci-n-de-la-privacidad
- Ferrere on Ley 7593: https://ferrere.com/es/novedades/paraguay-adopta-su-ley-de-proteccion-de-datos-personales/
- DPL News on the agency: https://dplnews.com/?p=297606
- DPL News on electronic identity and signature: https://dplnews.com/?p=324911
- ABC Color on Ley 6822/2021 entering into force: https://www.abc.com.py/nacionales/2022/04/26/recuerdan-que-desde-el-1-de-mayo-rige-ley-de-servicios-de-confianza-para-transacciones-electronicas/
- Ferrere on Res 36/21 inspections: https://ferrere.com/es/novedades/inspecciones-aleatorias-de-seprelad-bajo-resolucion-36-21/
- Última Hora on car-dealer paperwork (Nov 2019): https://www.ultimahora.com/seprelad-el-50-playa-autos-eluden-el-control-antilavado-n2852685

**Tools, hosting and prices**
- AWS Lightsail pricing (fetched): https://aws.amazon.com/lightsail/pricing/
- Claude Max plan price: https://support.claude.com/en/articles/11049744-how-much-does-the-max-plan-cost
- Claude API pricing (model table cached 6 Oct 2026): https://platform.claude.com/docs/en/about-claude/pricing
- Paddle fees (third-party reviews; check on paddle.com/pricing): https://dodopayments.com/blogs/paddle-review ; https://costbench.com/software/subscription-billing/paddle/
- WhatsApp utility rates (third-party): https://zernio.com/blog/whatsapp-business-api-pricing ; https://help.sleekflow.io/en_US/whatsapp/pricing ; Meta: https://developers.facebook.com/docs/whatsapp/pricing
- Penetration-test price guides (2026): https://www.blazeinfosec.com/post/how-much-does-penetration-testing-cost/ ; https://www.redfoxsec.com/blog/how-much-does-web-application-penetration-testing-cost-2026-pricing-guide ; https://kolonell.com/en/blog/web-application-penetration-test-cost-before-launch-2026
- PyPI pages (versions checked with `pip index`, 10 Oct 2026): https://pypi.org/project/Django/ ; https://pypi.org/project/docxtpl/ ; https://pypi.org/project/openpyxl/ ; https://pypi.org/project/rapidfuzz/ ; https://pypi.org/project/procrastinate/ ; https://pypi.org/project/weasyprint/ ; https://pypi.org/project/django-htmx/ ; https://pypi.org/project/django-otp/ ; https://pypi.org/project/playwright/ ; https://pypi.org/project/holidays/

**Sibling files used**
- 01 law and requirements: ./01-law-and-requirements.md
- 02 market and competition: ./02-market-and-competition.md
- B2 report: ../reports/paraguay-b2.md
