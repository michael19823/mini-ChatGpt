# Paraguay SEPRELAD compliance pack: product, technical design and development plan (deep dive 03)

Status: draft complete as of 10 Oct 2026 (this file is updated as work continues). It builds on [01-law-and-requirements.md](01-law-and-requirements.md) (duties and 96 product requirements), [02-market-and-competition.md](02-market-and-competition.md) (buyers, prices, competitors) and the [B2 report](../reports/paraguay-b2.md). "My estimate" marks numbers I derived. "(unverified)" marks facts I could not confirm. Requirement numbers like "R53" refer to the list in 01.

## Summary

- **What to build.** A Spanish-language web app that runs a real-estate firm's SEPRELAD file between filings: a deadline calendar with proof of filing, a client file with KYC and list checks, a deal register that produces the quarterly operations report (RO), the Res 201/2020 documents (manual, code of ethics, risk assessment, training plan), and the yearly internal-control (CI) report, Annual Form (FA) figures and an audit pack. It never files in SIRO and never holds SIRO passwords. SIRO has no public API, and filings are the firm's sworn declarations ([01, rule G1](01-law-and-requirements.md); [Res 165/2022 annex](https://www.seprelad.gov.py/resoluciones/resoluciones/anexos-res-n-165-22-formulario-anualso-sector-inmobiliario.pdf)).
- **The gap the software fills.** SIRO only receives filings. The warnings SEPRELAD sent to 1,238 real-estate firms in 2024 were for missed calendar items: RN, RO, FA, CI and AE ([Res 681/2024](https://www.seprelad.gov.py/resoluciones/resoluciones/res-n681-24.pdf); [Memoria 2024](https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf)). Reminders plus proof of filing cover most of that.
- **SIRO's file formats were checked on 10 Oct 2026.**
  - SEPRELAD's RO specification links a reference Excel file with **37 columns**, a city table (**245 codes**) and an economic-activity table (**243 entries**, text only, no codes), all as Google Sheets dated 19 Dec 2024 ([RO spec PDF](https://www.seprelad.gov.py/resoluciones/resoluciones/contenido-archivo-excel-ro-inmobiliarias.pdf)).
  - The column order in the Excel file differs from the order in the PDF. The sample rows break the PDF's own phone and date formats. The PDF has no matrícula/finca field, although 01 found one in the Res 003/2025 annex. So the export must follow the reference file, and it must be tested against live SIRO in the pilot.
  - Since Aug 2025, bulk RO upload uses JSON, enabled on request by a note to mesaentrada@seprelad.gov.py. Once it is enabled, the firm can no longer key ROs one by one ([SEPRELAD, 22 Aug 2025](https://www.seprelad.gov.py/?p=3156)). No JSON schema is published, so ask for it in week 0.
- **Free data feeds work.** On 10 Oct 2026:
  - the UN consolidated list downloaded as XML (2.19 MB; 736 individuals and 274 entities; generated 9 Oct 2026) ([UN XML](https://scsanctions.un.org/resources/xml/en/consolidated.xml));
  - OFAC's SDN file answered ([OFAC](https://sanctionslistservice.ofac.treas.gov/api/PublicationPreview/exports/SDN.XML));
  - the tax office (DNIT) publishes the whole RUC register as ten monthly zip files. One of them, `ruc0.zip`, holds 201,867 rows in the form `RUC|name|check digit|old RUC|status|`, last updated 1 Oct 2026. That allows name autofill, check-digit validation and a flag for cancelled RUCs at no cost ([DNIT](https://www.dnit.gov.py/web/portal-institucional/listado-de-ruc-con-sus-equivalencias)).

  **PEP data is the weak spot.** OpenSanctions has only one Paraguay-specific dataset, members of Congress (483 entities) ([OpenSanctions index](https://data.opensanctions.org/datasets/latest/index.json)). The signed PEP sworn declaration that Res 50/2019 requires stays the main control, with a local PEP database as a paid add-on later.
- **Stack: one plain monolith a solo founder and AI agents can hold in their heads.** Django 6.1 (or 5.2 LTS) with HTMX, PostgreSQL with row-level security, a Postgres job queue, docxtpl and openpyxl for documents and exports, and rapidfuzz for name matching (versions checked on PyPI, 10 Oct 2026). Host it on AWS Lightsail in São Paulo. The bundle prices are the same as in US regions ([Lightsail pricing](https://aws.amazon.com/lightsail/pricing/)), and the data stays in a country with a data-protection law (LGPD).
- **Privacy.** Paraguay's Ley 7593/2025 applies fully from 27 Nov 2027. Secondary sources say it requires adequacy or safeguards for transfers abroad, 72-hour breach notices and impact assessments for high-risk processing ([Clym](https://www.clym.io/regulations/law-no-7593-paraguay); [Kiteworks brief](https://www.kiteworks.com/sites/default/files/resources/kiteworks-brief-habilita-soporte-para-la-ley-de-proteccion-de-datos-personales-de-paraguay.pdf)). Build to that standard now. The firm is the controller and we are its processor. The 5-year AML retention duty overrides erasure requests (Ley 1015/97 art. 18).
- **Running cost is small:** about US$115-190 a month at 50 customers, US$330-520 at 300 and US$780-1,240 at 1,000. That is about 2-7% of expected revenue (my estimates). Card fees through Paddle (5% + US$0.50 per payment) cost more than the servers, so sell annual plans.
- **Build plan: MVP in 3 weeks, sellable in 8.** Week 0 (12-18 Oct 2026) covers interviews, the JSON request to SEPRELAD and hiring the lawyer. Week 1 builds the foundation. Weeks 2-3 run six AI agent work streams in parallel, giving an MVP on Fri 6 Nov 2026. Weeks 4-8 cover integration, legal sign-off, a security test, a pilot with 5-10 firms through 1-2 registered auditors, and billing. The product is sellable on Fri 11 Dec 2026, in time for the RN window (1-10 Jan 2027) and the RO window (11-20 Jan 2027) for Q4 2026. The CI report generator must ship by February (CI due 30 Mar 2027), the FA calculator by April (FA due 31 May) and the audit pack by May (AE due 30 Jun).
- **Cash budget to "sellable": about US$7,000-16,000**, with no salaries. Lawyer and AML-expert review of templates costs US$2,000-5,000. A scoped security test costs US$3,000-8,000. Claude Code (Max 20x, US$200 a month, possibly two seats) and other tools cost US$600-1,400. Hosting during the build costs US$150-300. A buffer and optional pilot travel make up the rest. All figures are my estimates, except the Claude plan price ([Anthropic](https://support.claude.com/en/articles/11049744-how-much-does-the-max-plan-cost)).

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
