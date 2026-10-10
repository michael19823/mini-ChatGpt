# Mexico private-security register keeper: product, technical design and development plan (deep dive 03)

Status: draft 2, 10 Oct 2026 (risks, open questions and sources being filled).

Builds on [the B1 report](../reports/mexico-b1.md), [01 law and requirements](01-law-and-requirements.md) (88 numbered requirements, cited here as **R1-R88**) and [02 market and competition](02-market-and-competition.md). "My estimate" marks numbers I derived. "(unverified)" marks facts I could not confirm. Working name of the product: **"Registro al día"** (from B1). Amounts: USD at about MXN 18, as in B1.

## Summary

- **There is no government system to plug into, so the product makes the filing, it does not send it.** The DGSP keeps the Registro Nacional in internal systems. Firms have no login. DGSP staff key in what firms bring to the "ventanilla única" ([ASF audit 2020-0095](https://www.asf.gob.mx/Trans/Informes/IR2020b/Documentos/Auditorias/2020_0095_a.pdf), via [01](01-law-and-requirements.md)). Baja California takes its monthly pack by email, Puebla in person ([BC guide](https://www.seguridadbc.gob.mx/Planeacion/padron/GUIA%20LLENADO%20CORRECTO%20DEL%20INFORME%20MENSUAL.pdf); 01). I found no SSPC, CDMX or Nuevo León online filing system in October 2026 (searches; no URL for a negative result). The product's output is a **ready-to-sign pack** (PDF cover, Excel annexes, evidence folder with an index), plus a record of the stamped receipt (acuse).
- **The real formats are simple and downloadable.** I downloaded Baja California's five official files on 10 Oct 2026: a Cardex workbook with a 15-column header (surnames, name, full name, company, state and municipality of posting, post, CUIP, CURP, RFC, birth date, birth state, start date, salary), an arms workbook with 13 columns, and three Word forms (monthly altas, one baja cédula per leaver, monthly activities and services) ([BC formats page](https://www.seguridadbc.gob.mx/contenidos/DSP.php)). The federal DGSP forms could not be opened: the 2016 gob.mx PDFs now return 404, and dgsp.sspc.gob.mx returned 503 or reset the connection on every try. **Getting a real federal monthly report and acuse from a pilot firm is task one.**
- **The core is a small, event-based register.** People, equipment, offices, clients and sites. Every change is a dated event with a cause and evidence. Reports are queries over events for a period. Filed reports are frozen snapshots. Rules (deadlines, fields, formats, fees) are data with an effective date and a legal source, as R7 asks.
- **Inbound data is where software beats the gestor.** Import the current Excel cardex, the CFDI payroll XML files (CFDI 4.0 with complemento de nómina 1.2, which carries CURP, NSS and start date) and later the IMSS movement files (168-position text, one file per movement type) ([SAT guide via BHR](https://bhrmx.com/wp-content/uploads/2022/01/GuiallenadoNominaCFDI4.0.pdf); [IMSS layout](https://www.imss.gob.mx/sites/all/statics/sua/dispmag/EstructuraMovimientosAfiliatorios.pdf)). Then show "paid but not registered" and "registered but not paid". Baja California's guide says the cardex, the state system and the payroll "must be exactly the same" ([BC guide](https://www.seguridadbc.gob.mx/Planeacion/padron/GUIA%20LLENADO%20CORRECTO%20DEL%20INFORME%20MENSUAL.pdf)).
- **MVP (3-4 weeks with parallel agents):** firm profile and obligation calendar; people master with CURP and RFC checks; alta and baja workflows with causes; exams and training with expiry; uniforms (4 photos per model), vehicles, arms and radios; offices; clients and sites; Excel and CFDI import with reconciliation; the federal monthly pack; the Baja California pack; acuse tracking; inspection pack; audit log; Spanish UI. **v1 (months 2-4):** CDMX, Estado de México, Nuevo León, Jalisco and Puebla modules; IMSS file import; WhatsApp reminders; guard self-service upload; self-audit; revalidation pack.
- **Stack for a solo founder with AI agents:** one Django (Python) monolith, PostgreSQL, server-rendered pages with HTMX, a Postgres-backed job queue, Word and Excel templates filled in Python, PDF by LibreOffice. Python has the best libraries for the Excel, Word and XML work this product is made of. Host on a managed platform (Render, US region) with files on Cloudflare R2. Move to AWS's Mexico region (Querétaro, open since Jan 2025) only if buyers insist on data in Mexico ([AWS](https://aws.amazon.com/blogs/aws/aws-weekly-roundup-new-aws-mexico-central-region-simultaneous-sign-in-for-multiple-aws-accounts-and-more-january-20-2025)).
- **Privacy is the main technical risk.** The new data-protection law (DOF 20 Mar 2025, last reform 14 Nov 2025) treats health data as sensitive, needs express written consent for it, allows fines up to 320,000 UMA (up to double for sensitive data) and prison of up to 3 years for a profit-driven breach, doubled for sensitive data ([LFPDPPP](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf), arts. 2-VI, 8, 59, 62, 64). The vendor is the firm's "persona encargada" (processor). A communication to the processor is not a "transferencia" (art. 2-XX). Store exam outcomes as pass/fail plus an encrypted certificate, not clinical detail.
- **Running costs are tiny:** about USD 110-170 a month at 50 customers, 330-450 at 300, 850-1,150 at 1,000 (my estimates from [Render](https://render.com/pricing), [R2](https://developers.cloudflare.com/r2/pricing/), [Resend](https://resend.com/pricing) and Meta's Mexico rate of USD 0.0085 per utility WhatsApp message ([Meta rate card](https://developers.facebook.com/docs/whatsapp/pricing))). That is 1-4% of expected revenue.
- **Cash budget to "sellable" (8 weeks): about USD 7,000-19,000**, with no salaried developers. The big items are a scoped penetration test (USD 3,000-8,000; vendors quote USD 5,000-15,000 for a narrow web app ([Blaze](https://www.blazeinfosec.com/post/how-much-does-penetration-testing-cost/))), a Mexican lawyer and a private-security gestor to approve templates, rules and privacy papers (USD 3,000-6,500, my estimate, unverified), and AI tools (Claude Max at USD 200 a month plus API overflow).
- **Calendar:** discovery from Mon 12 Oct 2026; foundation week from 19 Oct; parallel modules 26 Oct-6 Nov; integration and MVP demo by 13 Nov; legal approval, pilots and state modules 16-27 Nov; penetration test and fixes 30 Nov-4 Dec; pilots file the **November reports in early December** with the tool (federal due Thu 10 Dec); paid launch in the week of 7 Dec 2026.

## Users and jobs

### Who uses the product

| Role (Spanish label in the UI) | Who it is | Main jobs | Rights |
|---|---|---|---|
| **Owner or legal representative** (propietario / representante legal) | Owner of a small guard firm, or the director of a mid-sized one | Sign every monthly report and form (the BC guide allows the legal representative or a person with a simple power to sign); approve altas and bajas; see the risk light; pay | Everything in own firm; billing; grant consultant access |
| **Compliance coordinator or in-house gestor** (gestor / encargado de trámites) | The person a CDMX firm hires at about MXN 18,000 a month to handle DGSP, state permits and CUIP ([Computrabajo ad](https://mx.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-gestor-gubernamental-en-cuauhtemoc-BA3B0D3F75D2544A61373E686DCF3405), via 02) | Keep the register; prepare monthly packs; chase exam and training expiries; take packs to the ventanilla; upload acuses; prepare for inspections | Everything except billing and user admin |
| **HR or payroll clerk** (nóminas / recursos humanos) | Runs CONTPAQi Nóminas, Aspel NOI or similar | Hires and leavers; uploads payroll files each month; fixes name and CURP mismatches | People, imports, reconciliation; no exam results |
| **Operations supervisor** (jefe de operaciones / supervisor) | Assigns guards to client sites | Check that a guard may be posted (inscribed, exams valid, trained); record incidents; assign equipment | Sites, assignments, incidents, equipment; sees "fit / not fit", never exam detail |
| **External gestor or consultant** (gestoría externa) | Gestoría or lawyer serving several firms | Run month-end for 5-20 firms; one dashboard for all | Per-firm access granted by each owner; all actions logged |
| **Guard** (elemento) | Operational staff | v1 only: upload own documents and sign the privacy consent through a one-time link | Own file only, no account |
| **Inspector or client** (verificador / prestatario) | DGSP or state inspector, or a corporate client | No login. Receives the inspection pack or a site compliance certificate (R73, R86) | Read-only exports |

### Jobs to be done (in the buyer's words)

1. "Tell me what is due this month, for the DGSP and for each state, and what is missing." (R3, R4, R48)
2. "When I hire or let go of a guard, make sure I do every step and keep the proof." (R12, R18-R26)
3. "Make the monthly report for me from what already happened, even when nothing happened." (R49, R51, R56)
4. "Make sure the cardex, the register and the payroll match before I send." (R16, R57)
5. "Warn me before an exam, a course, a licence or the authorisation expires." (R28, R32, R69, R85)
6. "When the inspector comes, give me everything in one file." (R73)
7. "Show the client that the guards on their site are legal." (R86)
8. (Gestoría) "Let me run month-end for all my firms from one screen." (R3, R48)

## Feature map

### How the feature map follows the law

The 01 file turns the law into 88 testable requirements. The MVP takes the ones behind the 2026 sanctions (unreported altas, bajas, uniforms, branches, managers, training: [SIDOF 5799650](https://sidof.segob.gob.mx/notas/docFuente/5799650); [SIDOF 5797220](https://sidof.segob.gob.mx/notas/docFuente/5797220); [SIDOF 5798715](https://sidof.segob.gob.mx/notas/docFuente/5798715)) and the monthly reports. It leaves modality-specific duties and smaller states for later.

### Feature map (MVP / v1 / later)

| Module | MVP (weeks 1-4) | v1 (months 2-4) | Later |
|---|---|---|---|
| **Firm set-up** | Firm profile: legal form, RFC, DGSP number, authorisation dates, modalities, states (R1); state authorisation records and the "federal authorisation required" alert (R2); obligation calendar from the profile (R3) | Modality switches for alarms, valuables, prevention, linked activities (R5); notice tasks to each state within 30 days of a federal authorisation (R6) | Multi-company groups |
| **Rules engine** | Deadlines, fields and fees as data with effective date, legal basis and URL (R7); business-day calculator with a holiday table per authority (R4) | Admin screen for the founder or the lawyer to edit rules; change log shown to customers | Public "what changed" feed |
| **People** | One record per CURP, CURP and RFC checks (R8); RLFSP 33 fields (R9); roles (R10); dated events with reason codes (R12); RNPSP/CUIP status (R13); DGSP ID-card tracking (R14) | Eligibility checklist per role (R11); sanctions and court cases per person (R17); "double assignment" and "baja previa" (R21) | RENAPO CURP lookup through a paid API (about USD 0.20 a check, vendor claim: [Didit](https://didit.me/es/blog/mexico-curp-database-validation-es/)) |
| **Onboarding gate** | Checklist per guard with dates and DGSP folios (R18); block posting a guard who is not inscribed or whose exams lapsed, with logged override (R20); age of each pending DGSP request with warning at 60 business days (R22) | Record-check list and pre-filled CUIP form (R19); company credential PDF (R15) | Guard self-service by WhatsApp link |
| **Bajas** | Baja with date, cause, proof; DGSP baja form; ID-card return task due in 3 business days (R23); BC "Cédula personal de baja" per leaver (R24) | Loss path (R25); closure path (R26) | |
| **Exams and training** | Exam record with certificate; next due = last + 12 months with alerts at 60, 30, 7 days (R27, R28); training record with DC-3 per participant; flags for a modality and a human-rights course in the last 12 months (R31, R32) | Failed-exam workflow (R29); CDMX 10-business-day exam notice (R30); training plan and DC-2 store (R33) | Course catalogue from training centres |
| **Equipment** | Uniform models with 4 photo slots and marks check (R34); uniform stock with altas from invoices and bajas with cause (R35); vehicles with VIN check (R37); firearms with licence data (R38); radios (R39); export of equipment altas and bajas to a configurable DGSP Excel layout (R41); block unregistered equipment (R42) | Photo size and resolution checks once the DGSP limits are known (R36); dogs (R40); SEDENA collective licence tracker (R85) | QR labels for equipment |
| **Offices and corporate** | Offices with evidence and dated changes; branch closure creates a report line (R43, R44); partners and legal representatives (R46, basic) | Signage checklist (R45); training-centre and range addresses (R47); "Cambios" filing pack (R46 full) | |
| **Clients, sites and incidents** | One contracts and services register feeding all reports (R62); incident log (R67, basic) | Site compliance certificate for clients (R86) | Client portal |
| **Import and reconciliation** | Excel import with a column mapper and saved mappings; CFDI nómina XML (ZIP of many files) import; discrepancy list (R16); BC "cardex = register = payroll" block (R57) | IMSS movement files and SUA exports; monthly import reminder | Direct connectors to payroll vendors (CONTPAQi, Vigon) if they offer APIs (unverified) |
| **Federal monthly report** | Period and due date (10th calendar day) with status draft, signed, filed, acuse uploaded (R48); events under the 12 LFSP art. 12 headings plus a snapshot (R49); exams, training and incident statement (R50); "no changes" report (R51); signed cover, Excel and PDF annexes, evidence folder with index file (R52); pre-export checks (R53); late items carried forward (R54); acuse required, else "not proven filed" (R55) | Layout swap once the real DGSP format is known (configuration, no code) | Electronic filing if the DGSP opens a portal. The Feb 2026 Acuerdo gives it one year to adapt its registry systems ([SIDOF 5784083](https://sidof.segob.gob.mx/notas/docFuente/5784083), via 01) |
| **State modules** | **Baja California** full pack in the official formats (R56, R57) | CDMX (R58), Estado de México (R59), Jalisco (R60), Nuevo León (R61), Puebla | Other states on demand; each is a template set plus rules |
| **Event notices** | (none) | Theft or loss of IDs, suspension, asset freeze, alarm-firm notices, each with its clock (R63-R66) | Buyer register for linked activities every 6 months (R68) |
| **Authorisation** | Revalidation date and alerts from 90 days (R69) | Revalidation pack with Anexo III inventories (R70); bond tracker (R71); first-authorisation clocks (R72) | |
| **Inspection readiness** | One-click inspection pack for a date (R73) | Self-audit score with sanction ranges (R74); sanctions log with 6-month reincidence window (R75) | |
| **Fees** | Fee table per filing (R76, basic) | Fee receipts linked to events | |
| **Audit and retention** | Append-only log with event date apart from entry date (R77); evidence files with content hash, photos never overwritten (R78); retention settings and legal hold (R79) | Hash-chain verification report | Qualified time-stamps (NOM-151) for evidence, if buyers value them (unverified cost) |
| **Privacy and security** | Staff privacy-notice and consent templates (R80); exam and criminal-check data limited to named roles and encrypted at field level (R81); processor agreement and sub-processor list (R82); MFA, encryption, daily backups, breach plan (R83) | Consent capture by guard self-service; ARCO request helper (export, correct) | |
| **Adjacent trackers** | (none) | REPSE registration and ICSOE/SISUB reminders in Jan, May, Sep (R84) | |
| **Multi-firm (gestoría)** | Consultant account with access to many firms; portfolio due-list | Bulk month-end; consultant billing | White-label for large gestorías |
| **Language and output** | Mexican Spanish, legal terms, DD/MM/YYYY, MXN (R87); DGSP number, name, address and phone on every export (R88) | | |
| **Reminders** | Email; in-app task list | WhatsApp utility templates | |
| **Billing** | Card checkout and subscription (Paddle or Stripe; see the company and payments files of this deep dive) | Annual plans; consultant plans | |

### Why this cut for the MVP

- **It covers the 2026 sanction findings one for one.** Unreported staff altas and bajas, uniforms, branches, managers and training all become events that must appear in the next monthly report (R12, R35, R44, R46, R31).
- **Baja California first among states.** It has public, downloadable formats and an email channel. It ranks third after Jalisco and CDMX by one count ([Zeta Tijuana](https://zetatijuana.com/2026/08/advierten-aumento-de-empresas-irregulares-de-seguridad-privada-piden-padron-unico/)), and INEGI's 2026 census shows 316 registered firms there ([INEGI](https://www.inegi.org.mx/contenidos/programas/cnspe/2026/doc/cnspe_2026_resultados.pdf), via 02). It is also revalidating every firm after finding 80 with no activity records ([El Imparcial](https://www.elimparcial.com/mxl/mexicali/2025/07/04/pausa-en-certificaciones-de-guardias-es-por-irregularidades-en-empresas-de-seguridad/), via 02).
- **CDMX and Estado de México come in v1**, as soon as a pilot shares their current forms. Together they hold about half of federal head offices (CDMX 444 and Edomex 204 of 1,232 on the 2018 federal list, per 02).
- **The federal layout stays configurable** until a pilot gives a real report and acuse. Build the content (R49-R55) now. Mapping it to the final layout is then a small template job.

## Key flows

### Flow 1: First day for a new firm (target: under 2 hours to a first dashboard)

1. The owner signs up, pays by card or starts a pilot, and sets up MFA.
2. Firm profile wizard: legal form, RFC, DGSP number, authorisation dates, modalities, states worked (R1, R2). The system creates the obligation calendar: federal report on the 10th, each state's report on its day, revalidation dates (R3).
3. Import the current staff list: upload the cardex or a payroll Excel. A column mapper suggests matches (APELLIDO PATERNO, CURP, RFC, FECHA DE INGRESO...). Mappings are saved for next month.
4. Validation report: bad CURPs and RFCs (structure and check digit), duplicate CURPs, missing start dates, people with no CUIP. The user fixes them in a grid or re-uploads.
5. Optional: upload a ZIP of last month's CFDI payroll XMLs. The system lists who is paid but not in the register, and who is in the register but not paid (R16).
6. Equipment quick start: uniform models (count by model), vehicles, arms and radios from an Excel template.
7. The dashboard shows a traffic light per obligation and a "missing data" list. The firm is ready for its next month-end.

### Flow 2: Hiring a guard (alta)

1. HR adds the person, or the person arrives from a payroll import as "paid, not registered".
2. The onboarding checklist opens (R18): record check, viability, certified birth certificate, proof of address under 3 months old, ID, exam certificates, CUIP form, RNPSP inscription, DGSP ID card; for armed guards the DGSP opinion and SEDENA steps. Each step has a date, a folio and a file. Fees come from the fee table (R76).
3. The guard stays "in process" and cannot be posted to a site until inscribed or holding a valid folio, with exams valid and the right training (R20). An override needs a reason and is logged.
4. The alta event is dated. It lands in the next federal monthly report and in each state report where the guard is posted.

### Flow 3: A guard leaves (baja)

1. HR or a supervisor records the baja: date, cause (from a code list), free text, proof (resignation, IMSS weeks report) (R23).
2. The system makes the DGSP baja form and, for Baja California, the "Cédula personal de baja" with RFC, start date, leaving date, cause and description ([BC formats page](https://www.seguridadbc.gob.mx/contenidos/DSP.php), Word form downloaded 10 Oct 2026).
3. A task opens: return the DGSP ID card within 3 business days (R23). The due date skips weekends and holidays.
4. Equipment issued to the guard (uniform items, radio, arm) must be returned or written off, which creates equipment events.

### Flow 4: Buying uniforms

1. Upload the purchase invoice (PDF or CFDI XML). For a new model, fill the model page with 4 photos (front, back, both sides) and the marks check (R34).
2. The system creates a pending alta of N items for that model (R35). The 01 test case: an invoice for 205 shirts creates a pending alta of 205 items.
3. Export the DGSP equipment Excel and request form (R41). The coordinator files it at the ventanilla on any business day, then uploads the acuse. The items become "registered" and can be issued.

### Flow 5: Month-end close (the main monthly ritual)

1. On day 1 the system builds a draft pack for each jurisdiction for the closed month: federal, plus each state module.
2. A pre-export check lists blockers and warnings (R53): bajas without cause, altas without inscription, equipment not registered, expired exams, payroll mismatches, Cardex differences for Baja California (R57).
3. The user fixes or explains each item. Items found after a period closed go into this pack marked "late, event date X" (R54).
4. The owner reviews and signs. Federal: download the ZIP (signed cover, Excel and PDF annexes, evidence folder with an index file) and take it to the ventanilla (R52). Baja California: download the 8-part pack and send it by email to the state inbox, with the firm's name as the subject, as the state guide says ([BC guide](https://www.seguridadbc.gob.mx/Planeacion/padron/GUIA%20LLENADO%20CORRECTO%20DEL%20INFORME%20MENSUAL.pdf)). The product shows the address and the exact subject line to paste.
5. Upload the acuse or the sent email (PDF or .eml). Without it the month stays "not proven filed" (R55).
6. The pack is frozen as a snapshot. Later edits create new events, never changes to a filed pack.

### Flow 6: Inspection visit

1. The inspector arrives. The coordinator presses "Inspection pack" and picks today's date (R73).
2. The ZIP holds: authorisations and state permits; current staff with CUIP, ID card, exam and training status; managers and branch heads; equipment with registration proofs; the last 12 monthly reports with acuses; the service register and contracts.
3. v1: a self-audit before the visit scores the firm and shows each gap with its sanction level (R74).

### Flow 7: Gestoría month-end for many firms

1. The gestor logs in once and sees a portfolio list: each firm, each jurisdiction, status and blockers.
2. The gestor opens each firm's draft pack, fixes it, and sends it to the owner for signature (email link to a sign-off page), then files and uploads acuses.

### Flow 8: A rule changes

1. A DOF publication or a state change is spotted (weekly law watch).
2. The founder or the lawyer edits the rule row: new deadline, field or template, with effective date, legal basis and URL (R7).
3. Periods from the effective date use the new rule. Customers get an in-app notice "what changed and from when".

## Screens

1. **Panel (dashboard).** One traffic-light card per obligation and jurisdiction for this month and next, for example "Informe DGSP noviembre: vence 10/12/2026, 3 bloqueos". Below: expiring exams, courses, licences, revalidation, and pending DGSP requests by age.
2. **Personal (people list).** Grid with filters: role, state, site, status (activo, en proceso, baja), CUIP status, exam status, training status. Bulk actions: export cardex, assign site.
3. **Expediente (person file).** Tabs: data (RLFSP 33 fields), events timeline, onboarding checklist, exams (restricted), training, equipment issued, sites, documents, sanctions. Red banner when not fit to post.
4. **Alta wizard** and **Baja wizard.** Step by step with required evidence. Each shows which reports the event will land in.
5. **Equipo (equipment).** Tabs: uniforms (model cards with 4 photo slots and stock counts, registered versus physical), vehicles, arms, radios, dogs (v1). Each item has its event history and DGSP registration status.
6. **Oficinas y empresa.** Head office and branches with evidence; partners and legal representatives.
7. **Clientes y servicios.** Clients (prestatarios), contracts with dates, sites with address, modality, staff and arms assigned, incidents.
8. **Importar.** Upload Excel, CFDI ZIP or (v1) IMSS files; mapping screen with preview; import history with counts.
9. **Conciliación.** Three-way comparison: register, payroll, state cardex. Each difference has a "fix in register" or "explain" action.
10. **Informes (reports).** Periods by jurisdiction with status. Report page: blockers and warnings, preview of each annex, sign-off, download, acuse upload.
11. **Calendario.** All obligations with due dates, a link to the legal basis and status.
12. **Inspección.** Pack builder for a date; (v1) self-audit score.
13. **Configuración.** Firm profile, states and modalities, users and roles, templates (read-only for customers), saved import mappings, retention settings.
14. **Cartera (gestoría portfolio).** Many firms on one screen.
15. **Bitácora (audit log).** Filter by person, object, user, date; export.
16. **Privacidad.** Consent status per person, privacy-notice versions, ARCO request log, data export.
17. **Admin (founder only).** Rules table, holiday tables, fee table, templates with versions, and a support view that opens a tenant only with the customer's consent and logs it.

Design notes: desktop first (the gestor works on a PC), but every list and the person file must work on a phone for supervisors. Plain Spanish labels with the legal term in brackets. No feature needs a native app.

## Data sources and integrations

### The key fact: no government API, no upload portal

- **Federal (DGSP).** Firms file at the DGSP "ventanilla única" with signed forms plus Excel and PDF annexes. DGSP staff type the data into internal systems (a "Sistema de Registro de Empresas de Seguridad Privada", a "Registro de Equipamiento" and the police register on Plataforma México). Firms have no login ([ASF audit 2020-0095](https://www.asf.gob.mx/Trans/Informes/IR2020b/Documentos/Auditorias/2020_0095_a.pdf), as summarised in 01). The DGSP equipment guide says equipment registration "se realiza directamente en ventanilla única" (search snippet of [dgsp.sspc.gob.mx guide](https://dgsp.sspc.gob.mx/static/contenido/Guia_Solicitud_Alta_Baja_Equipo.pdf), via 01; not opened). So the product cannot submit anything. It prepares and proves.
- **Why that is good for a small vendor.** There is no API to break, no certificate to obtain, no government approval to wait for. The risk is the opposite one: the DGSP may build its own portal (see Risks).
- **States.** Baja California: email to reportesdsp@seguridadbc.gob.mx with Excel and Word or PDF files ([BC guide](https://www.seguridadbc.gob.mx/Planeacion/padron/GUIA%20LLENADO%20CORRECTO%20DEL%20INFORME%20MENSUAL.pdf)). Puebla: in person with .xlsx annexes; email only for a "no movements" month ([Puebla ficha](https://ventanilla.puebla.gob.mx/web/fichaAsunto.do?opcion=0&asas_ide_asu=2414&ruta=%2Fweb%2FasuntosMasUsuales.do%3Fopcion%3D0%21periodo%3D0), via 01, snippet). CDMX, Estado de México, Jalisco, Nuevo León: no online filing system found; formats not found online (searches on 10 Oct 2026; no URL for a negative result).

### Source-by-source table

| Source | What it gives | Format and channel | Uploads or manual entry? | API? | Cost or licence | Use in product | Phase |
|---|---|---|---|---|---|---|---|
| **DGSP monthly report (LFSP art. 13)** | The federal monthly filing | Format **not found**; channel unconfirmed (01, open question 1) | Manual: DGSP staff key it in | No | Free to file | Generate pack; store acuse | MVP (layout configurable) |
| **DGSP equipment request "Solicitud_Alta_Baja_Equipo_DGSP"** | Equipment altas and bajas | Excel plus signed request; uniforms need invoice and 4 images each | Ventanilla, in person | No | Fee per filing under LFD 195-X (01) | Export one file per filing, one row per item (R41) | MVP, layout from a pilot |
| **DGSP forms seen in search: Cedula_RNPSP.pdf (CUIP form), FORMATO_BAJA.pdf, Cedula_FIESP.pdf (incidents)** | Person inscription, baja, incidents | PDF forms; personnel folder of colour scans with an index file | Ventanilla | No | Free | Pre-fill PDFs; build the indexed folder (R19, R23, R52) | MVP (baja), v1 (CUIP) |
| **gob.mx 2016 equipment forms (aparatos, armas, canes, fornituras, radios, uniformes, vehículos)** | Old blank forms | PDF links on the [gob.mx page](https://www.gob.mx/segob/acciones-y-programas/inscripcion-de-armamento-vehiculos-y-equipo-incluyendo-los-cambios-en-los-inventarios-correspondientes-y-demas-medios-relacionados-con-los-servicios-de-seguridad-privada) | n/a | No | Free | None: the files return 404 (tested 10 Oct 2026) | n/a |
| **Baja California formats** | Cardex (xlsx), arms summary (xlsx), monthly altas (doc), baja cédula (doc), activities and services (doc) | Download from the [BC formats page](https://www.seguridadbc.gob.mx/contenidos/DSP.php); send by email | Email with attachments | No | Free | Fill the official files exactly (R56, R57) | MVP |
| **Other state formats (CDMX, Edomex, Jalisco, NL, Puebla, Tamaulipas, Guerrero)** | Monthly reports | Unknown (unverified) | Paper, email or in person | No | Free | Template sets per state | v1, from pilots |
| **CFDI nómina XML** (CFDI 4.0 + complemento nómina 1.2) | Who was paid, CURP, NSS, start date, post, state of work | XML files exported by the payroll system; SAT changed validation rules from 1 Jan 2026 ([KPMG](https://kpmg.com/mx/es/tendencias/2025/12/flash-sat-cfdi-de-nomina-2026-version-1-2-del-complemento.html)); field guide ([SAT guide via BHR](https://bhrmx.com/wp-content/uploads/2022/01/GuiallenadoNominaCFDI4.0.pdf)) | User uploads a ZIP | SAT has a bulk-download service, but it needs the firm's e.firma (unverified detail). Do not hold e.firmas. | Free | Reconciliation (R16); BC payroll proof | MVP |
| **IMSS movement files (IDSE / DISPMAG)** | Altas, salary changes, bajas with cause | Text file, 168 positions, one file per movement type, required for 5+ movements ([IMSS layout](https://www.imss.gob.mx/sites/all/statics/sua/dispmag/EstructuraMovimientosAfiliatorios.pdf)); baja cause at position 149, codes 1-10 (IDSE error text, [contadormx](https://contadormx.com/errores-en-movimientos-afiliatorios-idse-y-como-resolverlos/), snippet) | User uploads the file the payroll system already made | No | Free | Detect altas and bajas the register missed | v1 |
| **Payroll Excel exports (CONTPAQi Nóminas, Aspel NOI, others)** | Staff master | Excel, columns vary by vendor and firm | Upload | Vendor APIs unverified | Free | Column mapper with saved mappings | MVP |
| **SUA export** | IMSS contributions per worker | Format unverified | Upload | No | Free | BC accepts SUA as payroll proof ([BC guide](https://www.seguridadbc.gob.mx/Planeacion/padron/GUIA%20LLENADO%20CORRECTO%20DEL%20INFORME%20MENSUAL.pdf)) | v1 |
| **CURP and RFC checks** | Valid identifiers | Structure and check digit, computed offline. CURP rules: Instructivo Normativo, DOF 18 Jun 2018, its later modification, and RENAPO rules of Oct 2021 with a section on positions 17 and 18 ([SIDOF 5526717](https://sidof.segob.gob.mx/notas/docFuente/5526717); [SIDOF 5632965](https://sidof.segob.gob.mx/notas/docFuente/5632965); [RENAPO rules](https://www.gob.mx/cms/uploads/attachment/file/681698/reglas_para_la_ejecucion_de_los_procedimientos_asignacion_de_la_curp.pdf); search snippets only, so which SIDOF note is which text is unverified) | n/a | RENAPO lookup only through vendors: about USD 0.20 a check with 500 free a month (vendor claim, [Didit](https://didit.me/es/blog/mexico-curp-database-validation-es/)) | Free offline | Block bad CURPs at import (R8) | MVP offline; vendor later |
| **Holiday and business-day tables** | Deadlines in business days (R4) | Federal rest days (LFT art. 74) plus each authority's "días inhábiles" acuerdo. Example: the 2026 list of the Secretaría Anticorrupción y Buen Gobierno adds 1-6 Jan, 2 Feb, 16 Mar, 2-3 Apr, 1 and 5 May, 16 Sep, 2 and 16 Nov ([SABG list via INAH](https://inah.gob.mx/images/transparencia/2025_11_27_MAT_sabg2.pdf), snippet). The SSPC's own 2026 list was not found (unverified) | n/a | No | Free | Holiday table per authority as data | MVP |
| **UMA value and fee table** | Fine sizes and filing fees | UMA MXN 117.31 in a Sep 2026 sanction ([SIDOF 5799650](https://sidof.segob.gob.mx/notas/docFuente/5799650)); fees from LFD 195-X (record check MXN 77.46, RNPSP inscription 260.11, ID card 73.51, "Cambios" 11,570.03, per 01) | n/a | No | Free | Fee table (R76); sanction ranges (R74) | MVP |
| **State padrones and DOF sanctions** | Lists of authorised and sanctioned firms | PDF lists (e.g. [NL padrón](https://www.nl.gob.mx/sites/default/files/repositorio/Dependencias/Secretar%C3%ADa%20de%20Seguridad/Repositorios/20260721_padron_empresas_seguridad_julio.pdf)); [SIDOF](https://sidof.segob.gob.mx/notas/docFuente/5799650) notices | n/a | No | Free, public | Sales leads; check a firm's state permit number at sign-up | MVP (manual) |
| **WhatsApp Cloud API** | Reminders to the coordinator and (v1) links to guards | Message templates approved by Meta | n/a | Yes | Mexico, Oct 2026 rate card: utility USD 0.0085 (MXN 0.1565) per message; marketing MXN 0.7298; utility messages inside an open service window are free ([Meta pricing](https://developers.facebook.com/docs/whatsapp/pricing), rate-card files) | Due-date and expiry nudges | v1 |
| **Email** | Notifications, sign-off links | SMTP/API | n/a | Yes | Resend Pro USD 20 a month for 50,000 emails ([Resend](https://resend.com/pricing)) | All notices | MVP |
| **Card payments** | Subscriptions | Paddle (merchant of record) or Stripe | n/a | Yes | See the payments and company files of this deep dive | Billing | MVP |

### What the product does about "the portal does not exist"

- **Make the pack perfect.** Fill the official files cell by cell (for Baja California the Cardex header sits in row 13 and the arms header in row 15; the files have no drop-down lists to respect, checked 10 Oct 2026). Never convert the Cardex to PDF, as the BC guide demands.
- **Prove the filing.** Store the acuse, the sent email or a photo of the stamped copy for each pack (R55).
- **Keep the history the DGSP's own systems do not show the firm.** The firm cannot log in to see what the DGSP holds. The product is the firm's only full copy, with dates.
- **Be ready for a portal.** Keep the report content separate from the layout, so a future upload file or API is one more output format.

## Data model

### Principles

1. **Every row belongs to one tenant (firm).** Consultants get access through memberships, never by sharing rows.
2. **Events, not overwrites.** A change to a person, item or office is an event with an event date (when it happened), an entry date (when it was typed), a cause code, free text, the user, and evidence. Current state is derived from events, and cached for speed.
3. **Filed packs are frozen.** A filing stores a snapshot (JSON plus the generated files and their hashes). Later corrections become "late" events in the next period (R54).
4. **Rules are data.** Deadlines, required fields, templates and fees have an effective-from date, a legal basis and a source URL (R7).
5. **Sensitive fields are separate and encrypted.** Exam outcomes, criminal-check results and similar live in their own tables with field-level encryption and role checks (R81).

### Main entities

| Entity | Key fields | Notes |
|---|---|---|
| **Tenant (Firm)** | legal name, legal form, RFC, DGSP registration number, address, phone, logo | Printed on every export (R88) |
| **Authorisation** | jurisdiction (federal or state), number, authority, issue and expiry dates, modalities and sub-modalities | Drives the obligation calendar (R1-R3, R69) |
| **Office** | type (head office, branch, training centre, range), address, person in charge, opened and closed dates, evidence | Events: open, move, change of head, close (R43-R47) |
| **CorporateParty** | partner or legal representative, share %, powers, dates | Changes create "Cambios" tasks (R46) |
| **Person** | CURP (unique per tenant), RFC, NSS, names, sex, birth date and state, address, education, CUIP, photo | RLFSP 33 fields (R9) |
| **Employment** | person, role (partner, director, admin, technical, operational), start and end dates, state and municipality of posting, post, salary | One person can have several over time |
| **PersonEvent** | type (alta, baja, transfer, rank change, activity change, sanction, court case), event date, entry date, cause code, text, user, evidence | The heart of every report (R12, R17) |
| **OnboardingStep** | person, step type, status, dates, DGSP folio, fee, file | Gate for posting (R18-R22) |
| **IdCard (cédula)** | person, number, request, issue, validity and return dates | R14, R23 |
| **Exam** (sensitive) | person, type (medical, psychological, toxicological), institution and its authorisation reference, date, outcome (pass/fail), certificate file | Encrypted; next due = date + 12 months (R27-R29) |
| **Training** and **TrainingAttendance** | course, modality, topic tags, trainer or centre, date, hours; per person a DC-3 file | R31-R33 |
| **UniformModel** | name, 4 photos, marks check, DGSP status | R34 |
| **StockMovement** | model, quantity, direction (alta/baja), cause, invoice, DGSP filing | Counts registered versus physical (R35) |
| **Vehicle** | type, make, model, plates, VIN, armour level and certificate, photos, assignment | R37 |
| **Firearm** | serial (matrícula), type, make, calibre, licence number and type, licence expiry, ballistics test, assigned person, storage address | Matches the BC arms workbook columns (R38) |
| **Device** (radio etc.) and **Dog** | identifiers, permits or papers | R39, R40 |
| **EquipmentEvent** | item, type, date, cause, evidence, DGSP filing | Same pattern as PersonEvent |
| **Client (prestatario)**, **Contract**, **Site** | name and address; contract dates and term; site address, modality | Feeds the federal service register and state activity reports (R62) |
| **Assignment** | person or item to a site, from and to dates | Blocked if the person is not fit (R20) |
| **Incident** | site, date, people, description, authority report, DGSP notice | Monthly statement (R50, R67) |
| **ImportBatch**, **PayrollRecord**, **Discrepancy** | source type, file hash, mapping used; per-person pay period; difference type and resolution | R16, R57 |
| **Rule** | jurisdiction, obligation type, deadline formula (calendar or business days, offset, anchor), fields required, template set, effective from/to, legal basis, source URL | Edited by the founder or lawyer only (R7) |
| **HolidayCalendar** | authority, date, label, source URL | R4 |
| **FeeSchedule** | filing type, amount, year, legal basis | R76 |
| **Obligation** | tenant, rule, period, due date, status | The calendar and dashboard |
| **Filing** | obligation, period, status (draft, signed, filed, acuse), snapshot JSON, generated files with hashes, acuse file, late items | Frozen once filed (R48-R55) |
| **TemplateVersion** | template set, file, version, effective dates, approved by | Lawyer sign-off recorded |
| **Document** | owner object, type, file key, SHA-256, uploaded by, date, retention class | Never overwritten (R78) |
| **Consent** (sensitive) | person, privacy-notice version, consent type, signed file or e-signature, date, revoked date | R80; LFPDPPP art. 8 |
| **User**, **Membership** | user; tenant, role, granted by, expiry | Consultant access is a membership |
| **AuditLog** | actor, tenant, object, action, before and after, time, previous-entry hash | Append-only, hash-chained (R77) |
| **Task**, **Notification** | due date, owner, channel, status | Reminders |

### Key relations (simplified)

```
Tenant 1-n Authorisation, Office, CorporateParty, Person, Client, Filing
Person 1-n Employment, PersonEvent, OnboardingStep, IdCard, Exam, TrainingAttendance, Assignment, Consent
UniformModel/Vehicle/Firearm/Device/Dog 1-n EquipmentEvent, Assignment
Client 1-n Contract 1-n Site 1-n Assignment, Incident
Rule 1-n Obligation 1-1 Filing --> TemplateVersion; Filing n-n PersonEvent/EquipmentEvent (snapshot)
ImportBatch 1-n PayrollRecord 1-n Discrepancy --> Person
```

### How a report is built

1. Pick the rule and period. 2. Select all events with an event date in the period, plus late events entered since the last filing. 3. Take a status snapshot at period end (active staff by role, equipment counts, offices). 4. Run the pre-export checks. 5. Fill the template set (Word, Excel, PDF). 6. Zip with an index file. 7. On "filed", freeze the snapshot and file hashes.

## Architecture and stack

### Recommendation: one boring monolith that AI agents can work on safely

| Layer | Choice | Why |
|---|---|---|
| Language and framework | **Python 3.12+, Django 5.2 LTS** | Mature, with auth, admin, migrations and forms built in. AI coding agents produce good Django. The Django admin gives the founder a back office (rules, templates, holidays) for free |
| Database | **PostgreSQL** (managed) | Relational data, JSON for snapshots, row-level security as a second tenant guard |
| UI | **Server-rendered templates + HTMX**, light CSS framework | Fast to build, few moving parts, works on cheap phones; no separate front-end app to keep in sync |
| Background jobs | **Postgres-backed queue** (e.g. Procrastinate or Django-Q2) plus a cron for day-1 report drafts and daily reminders | No Redis to run at first |
| Excel | **openpyxl**: open the official workbook, write into the data rows, keep the header blocks and formats | The BC Cardex and arms files must stay Excel |
| Word | **docxtpl** (Jinja tags inside .docx), templates converted once from the official .doc | Lawyer-editable templates; the lawyer edits Word, not code |
| PDF | **LibreOffice headless** in a worker container (or a Gotenberg service); **pypdf** to merge | Turns Word into PDF; signed covers |
| XML | **lxml** for CFDI nómina | Fast, standard |
| Files | **Cloudflare R2** (S3 API) via django-storages; short-lived signed URLs | USD 0.015 per GB-month, no egress fee ([R2](https://developers.cloudflare.com/r2/pricing/)) |
| Auth | django-allauth with MFA (TOTP; passkeys in v1) | R83 |
| Encryption | Envelope encryption: a data key per tenant, wrapped by a master key held in the host's secret store (later a KMS) | Sensitive fields (R81) |
| Email | Resend (API) | USD 20 a month covers 50,000 emails ([Resend](https://resend.com/pricing)) |
| Errors and uptime | Sentry (free or team tier) and an uptime checker | Small cost |
| CI/CD | GitHub, GitHub Actions, required checks, Dependabot; auto-deploy main to staging, manual promote to production | Agents open pull requests; the founder merges |
| Tests | pytest-django, factory_boy with Faker es_MX for synthetic guards; golden-file tests that compare every generated cell and field against expected outputs | Catch template drift |

**Why not a JavaScript single-page app?** It would work, but this product is forms, tables and documents. The Python document libraries (openpyxl, docxtpl, lxml) are the heart of it. One language and one deployable unit are easier for one person and several agents to keep consistent.

### Module layout (one Django app per module, which is also one agent work stream)

```
core/         tenants, users, memberships, roles, audit log, encryption helpers, files
rules/        rules, holiday calendars, fee schedule, business-day calculator, obligations
people/       person, employment, events, onboarding gate, id cards, exams, training
equipment/    uniforms, stock, vehicles, firearms, devices, dogs, equipment events
org/          offices, corporate parties, clients, contracts, sites, assignments, incidents
imports/      excel mapper, CFDI parser, IMSS parser (v1), reconciliation
reports/      report engine, template sets (federal, BC, ...), packs, filings, inspection pack
notify/       tasks, reminders, email, WhatsApp (v1)
billing/      plans, checkout webhooks, entitlements
portal/       dashboard, portfolio (gestoría), screens glue
```

### Diagram

```
 Browser (gestor, owner, HR, supervisor)            Guard link (v1)
            |  HTTPS                                      |
   +--------v------------------------------------------v--------+
   |  Django web (HTMX pages, MFA, tenant middleware, RLS)      |
   +----+--------------------+--------------------+-------------+
        |                    |                    |
   PostgreSQL           Job queue (Postgres)   Cloudflare R2 (files, packs,
   (data, snapshots,    workers: imports,      photos, evidence; hashes in DB)
    audit chain)        packs, LibreOffice PDF,
                        reminders, backups
        |                    |
   Nightly encrypted DB dump to R2 (second account)    Email (Resend), WhatsApp (v1),
                                                      Paddle/Stripe webhooks
```

## Security, privacy and liability

### Data protection law that applies

- **Law.** Ley Federal de Protección de Datos Personales en Posesión de los Particulares, new law of DOF 20 Mar 2025, text with last reform DOF 14 Nov 2025 ([LFPDPPP](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf)). The authority is now the Secretaría Anticorrupción y Buen Gobierno ([Hogan Lovells](https://www.hoganlovells.com/es/publications/mexicos-new-federal-data-protection-law-what-it-means-for-companies)). I found no new implementing Reglamento published (search, Oct 2026; unverified).
- **Roles.** The guard firm is the "responsable" (controller). The vendor is the "persona encargada" (processor, art. 2-XII). A communication of data to the processor is not a "transferencia" (art. 2-XX), so hosting by the vendor does not need the guards' consent as a transfer. The vendor still needs a written processing agreement with each firm (R82; contract content to be drafted by the lawyer).
- **Sensitive data.** Health data is sensitive (art. 2-VI). Medical, psychological and toxicology results are health data. Art. 8 needs the person's **express written consent** for sensitive data, by handwritten signature, electronic signature or another authentication mechanism. Art. 9 lists exceptions, including when a legal provision requires the processing (I) and when it is needed to meet obligations of a legal relationship (IV). Whether the LFSP duty lets the firm skip consent for exam results is **a question for the lawyer**. The product should capture consent anyway: a signed privacy notice per guard, stored with its version (R80).
- **Minimise.** The law requires an exam and a passing result, not the clinical detail (RLFSP 47-50, per 01). Store pass/fail, date, institution and the certificate file. Do not store test scores or diagnoses.
- **Security duty.** Administrative, technical and physical measures, no weaker than for the firm's own data, scaled to the risk and the sensitivity (art. 18). Confidentiality duty for everyone who handles the data (art. 20).
- **Breaches.** The controller must inform affected people "de forma inmediata" when a breach significantly affects their rights (art. 19). The processor contract must make the vendor tell the firm within 24-48 hours (my proposal).
- **ARCO rights.** The controller answers within at most 20 days (art. 31). The product gives the firm an export and a correction log per person.
- **Penalties.** Fines of 100-160,000 UMA or 200-320,000 UMA by breach type, extra fines for repeat breaches, and up to double for sensitive data (art. 59). Prison of 3 months to 3 years for an authorised person who causes a breach for profit, and 6 months to 5 years for processing by deceit for profit; doubled for sensitive data (arts. 62-64). At MXN 117.31 per UMA, 320,000 UMA is about MXN 37.5 million (my arithmetic).
- **Security-sector rule.** The national security law makes registry data on private-security staff and equipment reserved information (LGSNSP art. 101, via 01: [LGSNSP](https://www.diputados.gob.mx/LeyesBiblio/pdf/LGSNSP.pdf)). This applies to the national registers. Whether it limits a firm's own copy held by a vendor abroad is **a question for the lawyer**.
- **Hosting abroad.** I found no rule in the LFPDPPP text that forces private data to stay in Mexico (my reading of the text; confirm with the lawyer). The privacy notice must name the processor and its locations. Keep an AWS Mexico (Querétaro) migration plan for buyers who ask.

### Security baseline for the MVP

1. MFA for every user; passkeys in v1. Session timeout 30 minutes idle for roles that see sensitive data.
2. Tenant isolation twice: every query filtered by tenant in a base manager, plus PostgreSQL row-level security. An automated test calls every URL as a user of another tenant and expects 404.
3. Field-level encryption for exam, criminal-check and consent tables; per-tenant data keys.
4. Files in a private bucket; signed URLs valid for 5 minutes; content hash stored; virus scan on upload (ClamAV in the worker).
5. Append-only audit log with a hash chain; daily chain check.
6. Encrypted nightly database dumps to a second storage account; restore drill before launch and every quarter.
7. Dependency updates weekly; secret scanning; no secrets in the repo.
8. Role checks in one place (a permissions module), with tests per role (R81 test: a site supervisor cannot open exam results).
9. Rate limits on login and on file downloads; alert on mass exports.
10. **AI agents never see real personal data.** Development and tests use synthetic guards from Faker es_MX. Pilot data never enters an AI tool. Production access is limited to the founder, logged, and needs the customer's consent in the support view.
11. An external penetration test before the paid launch, then yearly.

### Liability and how to limit it

- **The tool prepares; the firm files and signs.** The product never claims to file on the firm's behalf. The legal representative signs every pack. This keeps the vendor out of the "gestor" role.
- **Every rule shows its legal basis and source link**, and the lawyer's approval date. The firm can check it.
- **Terms of service:** no promise that an authority accepts a pack; a commitment to update rules and templates within a set number of business days after a DOF or state change (for example 10; my proposal); liability capped at 12 months of fees; the customer answers for the accuracy of its data. Mexican-law drafting by the lawyer.
- **Marketing:** never "cero multas garantizado". Say "every change recorded and reported on time, with proof".
- **Insurance:** professional indemnity and cyber cover once revenue allows (cost unverified).

## Hosting and running costs

### Choice: managed platform in a US region now; Mexico region as an option

- **Render (US region)** for the web service, worker, cron and PostgreSQL. Prices on 10 Oct 2026: Pro workspace USD 25 a month plus compute; web service 1 CPU / 2 GB USD 25, 2 CPU / 4 GB USD 85; PostgreSQL 0.5 CPU / 1 GB USD 19, 1 CPU / 4 GB USD 55, 2 CPU / 8 GB USD 100, storage USD 0.30 per GB; Pro includes 25 GB bandwidth, then USD 0.15 per GB ([Render pricing](https://render.com/pricing)). Point-in-time recovery is listed for paid Postgres (same page).
- **Why not a cheap VPS?** Hetzner repriced its cloud on 15 Jun 2026; some lines, including US CPX servers, rose to about 2-3 times their old price ([PrivateDevOps](https://privatedevops.com/news/hetzner-june-2026-cloud-price-increase-what-to-do), secondary). A managed platform costs a little more but saves the founder's time on patching, backups and failover.
- **Files:** Cloudflare R2 at USD 0.015 per GB-month, 10 GB free, no egress fee ([R2 pricing](https://developers.cloudflare.com/r2/pricing/)).
- **Option for "data in Mexico":** AWS Mexico (Central) region, mx-central-1, three availability zones in Querétaro, open since 14 Jan 2025 ([AWS blog](https://aws.amazon.com/blogs/aws/aws-weekly-roundup-new-aws-mexico-central-region-simultaneous-sign-in-for-multiple-aws-accounts-and-more-january-20-2025)). Whether standard RDS for PostgreSQL runs there was not confirmed (unverified). Budget about 1.5-2x the Render cost and a week of migration work (my estimate).

### Assumptions (my estimates)

- Average paying firm: 60 staff on file, 30-60 documents and photos per person over a year at about 0.3 MB each, so about 10-20 MB per person-year. Uniform, vehicle and office photos add little.
- Reminders: about 40 WhatsApp utility messages per firm a month from v1 (many will fall inside free service windows; I count all as paid).
- Revenue for comparison: 02 suggests MXN 750-1,900 a month per firm; I use an average of about MXN 1,200 (USD 67) a month.

### Monthly running cost estimate (USD, excluding taxes and staff)

| Item | 50 customers | 300 customers | 1,000 customers |
|---|---|---|---|
| Render Pro workspace | 25 | 25 | 25 |
| Web service | 1 x 1 CPU/2 GB: 25 | 1 x 2 CPU/4 GB: 85 | 2 x 2 CPU/4 GB: 170 |
| Worker (imports, packs, LibreOffice) + cron | 1 x 1 CPU/2 GB: 25 | 1 x 1 CPU/2 GB: 25 | 1 x 2 CPU/4 GB: 85 |
| PostgreSQL + storage | 0.5 CPU/1 GB + 10 GB: about 22 | 1 CPU/4 GB + 50 GB: about 70 | 2 CPU/8 GB + 150 GB: about 145; add a standby if offered: 100-245 more (unverified) |
| Files on R2 (incl. backup copies) | about 60 GB: 1 | about 350 GB: 5 | about 1.2 TB: 18 |
| Email (Resend) | 0-20 | 20 | 20-90 |
| WhatsApp utility messages (v1) | 2,000 msgs: 17 | 12,000: 102 | 40,000: 340 |
| Error tracking, uptime, logs | 0-26 | 26-50 | 50-100 |
| Domain, DNS, misc. | 5 | 5 | 10 |
| **Total** | **about 110-170** | **about 330-450** | **about 850-1,150** |
| Per customer per month | about 2.2-3.4 | about 1.1-1.5 | about 0.85-1.15 |
| Share of revenue (at USD 67 per customer) | about 3-5% | about 2% | about 1.5% |

One-off and yearly extras: penetration test USD 3,000-8,000 a year; legal content upkeep (see Budget). Servers are not the cost of this business; the founder's time and sales are.

## Development plan (with agent work streams and calendar)

### How the build works

- **Who builds.** The founder is product owner, architect, reviewer and integrator. Claude Code agents write most of the code, each in its own git worktree and branch, each owning one Django app and its tests. No hired developers.
- **Foundation first, then parallel.** Shared code (tenancy, roles, audit, rules engine, event base classes, template engine interface, UI shell) is built in one sequential week. Parallel agents start only when those contracts are frozen, so they do not collide.
- **Tests first, from the law.** The 01 file already gives a "Test:" sentence for most requirements (for example R23: "baja on Fri 5 Jun 2026 → return due Wed 10 Jun 2026"). Each agent turns its requirement list into failing acceptance tests on day one, then builds until they pass.
- **Daily rhythm.** Morning: the founder reviews and merges pull requests, updates each stream's brief. Day: agents work. Evening: CI green, auto-deploy to staging, the founder clicks through the flows on the synthetic firm.
- **Helper agents.** A **fixtures agent** builds a synthetic firm (150 guards, 2 states, 12 months of events, Mexican names and valid-format CURPs) used by every test. A **reviewer agent** checks each pull request for tenant leaks, missing permission checks, unsafe file handling and English strings. A **docs agent** writes Spanish help pages and onboarding guides.
- **Rules for agents.** One `CLAUDE.md` with the glossary (alta, baja, cédula, prestatario, acuse...), architecture rules, "never touch another app's models", "no real personal data", and how to run tests. Shared-code changes go through the founder.
- **Tool limits.** Running 4-6 sessions at once can hit plan usage windows. Stagger the streams and keep an API pay-as-you-go budget for overflow. Claude Max costs USD 100 (5x) or 200 (20x) a month according to third-party summaries ([heyuan110](https://www.heyuan110.com/posts/ai/2026-02-25-claude-code-pricing/); check [claude.com/pricing](https://claude.com/pricing)).

### Agent work streams for the MVP

| Stream | App(s) | Requirements (01) | Main outputs | Depends on |
|---|---|---|---|---|
| **F. Foundation** (week 1; founder + 2 agents) | core, rules, portal shell | R4, R7, R77-R79, R81-R83, R87-R88 | Tenancy with RLS, users, roles, MFA, audit hash chain, encrypted fields, file store with hashes, rules table, holiday tables, business-day calculator, obligation generator, event base class, template-engine interface, CI/CD, staging | — |
| **S1. People** | people | R8-R10, R12-R14, R18, R20, R22-R24, R27-R28, R31-R32 | Person file, CURP/RFC validators, alta and baja wizards, onboarding checklist and posting gate, ID cards, exams (encrypted), training with DC-3 | F |
| **S2. Equipment** | equipment | R34-R35, R37-R39, R41-R42 | Uniform models with 4 photos, stock movements from invoices, vehicles (VIN check), firearms, radios, equipment events, DGSP equipment Excel export (configurable layout) | F |
| **S3. Organisation** | org | R1-R3 (profile part), R43-R44, R46, R62, R67 | Firm profile wizard, authorisations, offices, partners and representatives, clients, contracts, sites, assignments, incidents | F |
| **S4. Imports** | imports | R16, R57 | Excel column mapper with saved mappings, CFDI nómina ZIP parser, discrepancy list, BC three-way check | F, S1 models (frozen day 2 of week 2) |
| **S5. Reports** | reports | R48-R56, R73 | Report engine (events + snapshot), federal pack (cover, annexes, indexed evidence folder), BC pack in the official files, pre-export checks, late items, acuse upload, filing freeze, inspection pack | F; reads S1-S3 through query interfaces |
| **S6. Shell and money** | portal, notify, billing | R3 (dashboard), R69, R76 | Dashboard, calendar, task list, email reminders, gestoría portfolio, fee table, Paddle or Stripe checkout and webhooks, Spanish copy pass | F |
| **Fixtures / reviewer / docs** | tests, docs | all | Synthetic firm, review reports, help pages | F |

### Calendar (start Monday 12 Oct 2026)

| Week | Dates | Engineering (agents + founder) | Content, legal and sales | Exit check |
|---|---|---|---|---|
| 0. Discovery and set-up | 12-16 Oct | Repo, CLAUDE.md, backlog from R1-R88, Render and R2 accounts, CI | 8-12 calls with firms (DOF-sanctioned firms, AMESP members, BC and CDMX firms) and 1-2 gestorías. **Collect a real federal monthly report with acuse, the DGSP equipment Excel, CDMX and Edomex forms, and a payroll export.** Engage a lawyer and a gestor reviewer. File a transparency (PNT) request to the SSPC on the monthly report format and channel | At least one real federal pack in hand, or a plan to get it in week 2 |
| 1. Foundation | 19-23 Oct | Stream F | Lawyer starts on privacy notice, consent, processor agreement, terms | Contracts frozen; staging live; synthetic firm loads |
| 2-3. Parallel modules | 26 Oct-6 Nov | Streams S1-S6 in parallel; daily merges | Gestor reviews rule table and BC templates; recruit 3-5 pilot firms | All MVP acceptance tests written; most passing |
| 4. Integration | 9-13 Nov | End-to-end tests over 12 synthetic months; performance; reviewer-agent security pass; backup and restore drill | Pilot agreements (free until the January filing, in exchange for feedback and a reference) | **MVP done** (definition below); demo to pilots |
| 5-6. Legal approval and pilots | 16-27 Nov (16 Nov is a holiday) | Fixes from pilots; CDMX and Estado de México modules start as soon as forms arrive; WhatsApp template approval | Lawyer and gestor sign off templates, rules, privacy papers and terms; founder imports each pilot's data with them on a call | Signed approvals; pilots live with real data |
| 7. Security test | 30 Nov-4 Dec | External penetration test (3-5 testing days); fix high and critical findings | Pilots close November in the tool. Baja California's pack is due in the first 5 business days, i.e. by Mon 7 Dec 2026 (my count) | No open high or critical findings |
| 8. Launch | 7-11 Dec | Retest; production hardening; monitoring | Federal November reports due Thu 10 Dec; collect acuses as proof; paid plans open; convert pilots | **Sellable** (definition below) |
| Months 2-4 | Jan-Mar 2027 | v1: state modules, IMSS import, WhatsApp, guard self-service, self-audit, revalidation pack, event notices | First paid customers; gestoría partners | Monthly releases |

**Is "MVP in about 3 weeks" realistic?** Yes for code, if week 1 delivers frozen foundations and six streams run in weeks 2-3. Plan one more week for integration. The real bottleneck is not coding but the federal format (from pilots) and the legal approval. If the federal format is late, ship the MVP with the configurable layout and a signed cover plus annexes, and swap the layout when the sample arrives.

### Definition of done for the MVP (end of week 4)

1. Every MVP requirement in the feature map has an acceptance test that passes. These include the 01 test cases: business-day deadline over a holiday (R4); baja on Fri 5 Jun 2026 gives a card-return date of Wed 10 Jun 2026 (R23); exam on 1 Jan 2026 flags the guard on 2 Jan 2027 (R28); an invoice for 205 shirts creates a pending alta of 205 (R35); the March report is due 10 Apr (R48); an empty month still yields a signed "no changes" report (R51); a baja without cause blocks export (R53); a late January baja appears in February marked "late" (R54); a month without an acuse shows "not proven filed" (R55); one misspelt name blocks the BC export (R57); a site supervisor cannot open exam results (R81).
2. The synthetic firm (150 guards, CDMX and Baja California, 12 months) produces a federal pack and a BC pack. The BC Cardex and arms files open in Excel with the official header blocks unchanged and pass cell-by-cell golden tests.
3. An Excel cardex of 500 rows imports in under 30 seconds after mapping; a ZIP of 500 CFDI payroll XMLs reconciles in under 60 seconds.
4. The tenant-isolation test passes on every URL; MFA is enforced; the audit chain verifies; a restore from backup has been done.
5. All MVP screens are in Spanish; no English strings remain.
6. Staging and production run; error tracking and uptime alerts are on.
7. A new firm can go through Flows 1-6 on staging in under 2 hours.

**"Sellable" (end of week 8)** adds: the lawyer and gestor have signed off templates, rules, privacy papers and terms; the penetration test has no open high or critical findings; at least 3 pilot firms have produced a real month with the tool and uploaded acuses; billing is live.

## Budget

### Cash to "sellable" (8 weeks; USD; founder unpaid; company set-up excluded, see the company file)

| Item | Low | High | Basis |
|---|---|---|---|
| Claude Max 20x, 2 months | 400 | 400 | USD 200 a month (third-party summaries; [heyuan110](https://www.heyuan110.com/posts/ai/2026-02-25-claude-code-pricing/)) |
| API overflow or a second plan for parallel agents | 200 | 800 | my estimate |
| GitHub and CI minutes | 0 | 100 | my estimate |
| Hosting during build and pilots (staging + production, 2 months) | 100 | 250 | [Render](https://render.com/pricing), [R2](https://developers.cloudflare.com/r2/pricing/) |
| Domain, email sending, error tracking | 50 | 150 | [Resend](https://resend.com/pricing); domain price unverified |
| Mexican lawyer (private security + data protection): rule table and template review, privacy notice and consent form, processor agreement, terms | 2,200 | 4,500 | MXN 40,000-80,000, my estimate; I found no published fees (search, Oct 2026) |
| Private-security gestor or ex-DGSP adviser: 10-20 paid hours, sample filings | 500 | 1,500 | MXN 9,000-27,000, my estimate (unverified) |
| Penetration test, scoped web app with retest | 3,000 | 8,000 | Vendor guides give USD 5,000-15,000 for a narrow web app ([Blaze](https://www.blazeinfosec.com/post/how-much-does-penetration-testing-cost/)); a small boutique can be lower (unverified) |
| Pilot visits (CDMX, Tijuana), optional | 0 | 1,500 | my estimate |
| Contingency (10%) | 650 | 1,700 | |
| **Total** | **about 7,100** | **about 18,900** | |

### Monthly running cost after launch (first year)

| Item | USD a month |
|---|---|
| Hosting and services at 50 customers | 110-170 |
| AI tools (one Max plan) | 200 |
| Lawyer on a small retainer for law watch and template updates | 170-330 (MXN 3,000-6,000, my estimate) |
| **Total** | **about 480-700** |

The next penetration test falls due a year after the first, so outside year 1. **Year-1 cash total, excluding the company and marketing: about USD 12,000-26,000** (my estimate: the build budget plus 10 months of running costs). The 02 base case puts year-3 revenue at about MXN 3.8m (USD 210,000), so the build cost is small against it ([02](02-market-and-competition.md)).

## Risks
(pending)

## Open questions
(pending)

## Sources
(pending)
