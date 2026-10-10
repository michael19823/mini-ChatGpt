# Argentina INAES and UIF compliance desk: product, technical design and development plan (deep dive 03)

Status: complete, 10 Oct 2026. Part 3 of the Argentina B2 deep dive: product, technical design and development plan.

Builds on [the B2 report](../reports/argentina-b2.md), [01 law and requirements](01-law-and-requirements.md) and [02 market and competition](02-market-and-competition.md). "Estimate" marks numbers I derived. "(unverified)" marks facts I could not confirm. Money is in US dollars unless marked ARS or EUR. Working name: **"Mutual al Día"**.

## Summary

- **What to build.** "Mutual al Día": a preparation, calendar and evidence tool for accountants who serve lending mutuales and credit co-ops, and for the entities themselves. It computes and checks what INAES asks for, then the user files. It never files and never holds INAES passwords.
- **The gap is confirmed from INAES's own user guide.** The new monthly SAEM form has about 300 input boxes. Each starts at "0" and is typed by hand. The consistency check runs only at the end. No upload, paste or API is described ([guide](https://contadoresenred.com/wp-content/uploads/2026/06/Instructivo.pdf)). The form computes subtotals, but someone must still sort every loan by situation, type, maturity band and guarantee, and pick the 20 largest savers. **That calculation, from the loan ledger, is the product.**
- **MVP (sellable in about 8 weeks):** deadline engine and cross-client board; Excel import of loans, savings and balances; Annexes I-V and VII computed and checked; a "copy sheet" in the form's exact order; arrears queue; member register with export of the Res 756 roll CSV (INAES publishes the layout); evidence vault; card billing. **v1 (Jan-Apr 2027):** a browser extension that fills the open INAES form; the AML pack (Res 1567 data pack, UIF self-assessment, manual, training log, member risk ratings, RePET screening); WhatsApp reminders; ERP presets.
- **Integrations are thin by necessity.** No INAES system has a public API. Only the roll accepts a file (semicolon CSV). RePET publishes free JSON lists, updated daily (959 persons and 269 entities on 10 Oct 2026; UN list included). There is no official PEP database. ARCA's taxpayer web services need an Argentine CUIT and certificate, so the MVP only validates the CUIT check digit. Holidays change at short notice (a 9 Nov 2026 holiday for the Pope's visit), so the calendar needs overrides.
- **Stack for one founder with AI agents:** one Django + HTMX + PostgreSQL monolith with a Postgres job queue, hosted in the EU. The form specification, rules and legal parameters are versioned data, not code, so an INAES change is a content edit plus golden tests.
- **Privacy.** Under Law 25.326 we are a processor (art. 25): no other use, and deletion at the end of the service, with at most two years' archive if the client authorises it. The entity keeps its 10-year UIF record duty, so the app gives a full export at exit. The EU is on Argentina's adequate list, so EU hosting avoids transfer contracts. No breach-notice duty was found; notify within 72 hours anyway.
- **Running costs are small:** about USD 35-60 a month at 50 entities, USD 140-230 at 300 and USD 350-600 at 1,000 (estimates), or 1-3% of revenue at USD 40 per entity. Card fees (about 6%), an expert retainer and support time cost more.
- **Calendar (start 12 Oct 2026):** spec pack and golden test data (week 0); foundation (week 1); two waves of parallel agent streams (weeks 2-3, MVP demo 6 Nov); integration (week 4); expert reconciliation and legal texts (week 5); penetration test and shadow pilot (week 6); fixes and real filings of the October return, due 1 Dec (week 7); paid launch about 14 Dec, ahead of the January cluster (November return due 31 Dec, Q4 roll about 10 Jan, AML yearly filing 20 Jan).
- **Cash budget:** about USD 7,000-15,300 to sellable (AI tools, hosting, a co-op accountant for 30-40 hours, an Argentine lawyer, a penetration test, contingency), then about USD 6,900-14,400 for the first year of running. Running costs are covered at about 15-35 paying entities (estimate).
- **Main risks:** a calculation error inside a sworn statement; unclear definitions (how "promedio período" is computed; which guarantee-fund rules survived a 2016 suspension); INAES changing the form without notice; and whether INAES tolerates a fill-assist extension. The first three weeks should settle the definitions with a domain expert and real past filings.

## Users and jobs

### Who uses the product

| Role (Spanish label) | Who it is | Main jobs in the product | Rights |
|---|---|---|---|
| **Accountant or co-op graduate** (contador, licenciado en cooperativismo) | Outside professional who serves 3-20 mutuales or co-ops. The main buyer (see [02](02-market-and-competition.md)). | Prepare each client's monthly return; keep the calendar for all clients; produce the member-roll file; prepare the AML filing; keep evidence. | All entities in his firm; invite client staff; billing. |
| **Entity staff** (administrativo, tesorero) | Paid clerk or volunteer treasurer of the mutual | Upload the loan and savings ledger each month; keep the member list; upload signed minutes and receipts. | Own entity only. |
| **Compliance officer** (oficial de cumplimiento, titular and suplente) | Usually a board member, registered with the UIF (UIF Res 99/2023 art. 11, see [01](01-law-and-requirements.md)) | Approve member risk ratings; keep the training log; review alerts; own the UIF self-assessment and manual (v1). | Own entity, plus the confidential alerts area (v1). |
| **Board signers** (presidente, secretario, tesorero, 3 members of the junta fiscalizadora) | Volunteers | Approve the monthly figures before filing. Their names and CUITs go on every monthly filing ([INAES user guide p.16](https://contadoresenred.com/wp-content/uploads/2026/06/Instructivo.pdf)). | Read and approve only. |
| **External auditor** (auditor externo) | Certified accountant who must check the annex sheets and copy them into the special audit book (Res 1418/03 art. 17, as amended by [Res 1424/2017](https://consejosalta.org.ar/wp-content/uploads/INAES-1424.pdf)) | Read the prepared annexes and the checks; download the audit pack. | Read only, per entity. Often the same person as the accountant. |
| **External independent reviewer** (revisor externo independiente) | Reviews the AML system once a year (UIF Res 99/2023 art. 19, see [01](01-law-and-requirements.md)) | Read the AML evidence pack (v1). | Read only, time-limited link. |
| **Platform editor** (the founder, later a paid domain expert) | Us | Update the form specification, the rules, the deadlines, the holiday calendar and the templates when INAES or the UIF changes them. | Content admin, no access to customer data by default. |

### Jobs to be done (in the buyer's words, my wording)
1. "Que no se me pase ningún vencimiento de ninguna de mis mutuales." Do not miss any deadline for any client. Each lending mutual has about 20 filing events a year: 12 monthly returns, 4 quarterly rolls, the yearly AML module, the UIF self-assessment, the external review and the assembly filings ([02](02-market-and-competition.md)).
2. "Pasar del Excel de la cartera a los anexos del SAEM sin tipear 300 números a mano." The new monthly web form has about 300 input boxes when all annexes are full (my count from the screenshots in the [INAES user guide](https://contadoresenred.com/wp-content/uploads/2026/06/Instructivo.pdf): Annex I about 30, Annex II 70, Annex III 9, Annex IV about 48, Annex V 60, Annex VII about 80 for 20 members x 4 typed columns). Every box starts at "0" and is typed by hand (same guide, p.9).
3. "Saber antes de cargar si va a dar error." The form's "Validar Consistencia" check runs only after all annexes are typed (guide p.15). The user wants to know first.
4. "Que el CSV de la nómina no rebote." The member-roll bulk load accepts a semicolon CSV with fixed columns and shows rows with errors after upload ([Res 756/2025 manual](https://servicios.infoleg.gob.ar/infolegInternet/anexos/410000-414999/411657/res756-1.pdf)).
5. "Ponerme al día con los períodos atrasados." Overdue periods must also be filed through the new form ([Res 1279/2026 art. 2](https://www.argentina.gob.ar/normativa/nacional/norma-427021/texto)). 302 brokering mutuales were named for missing every quarterly return to end-2025 ([Res 1687/2026 annex, my colleague's count in 02](02-market-and-competition.md)).
6. "Tener todo guardado por si viene una inspección." Keep receipts, minutes and member files for 10 years (UIF Res 99/2023 art. 17, see [01](01-law-and-requirements.md)).
7. (v1) "Armar la autoevaluación y el manual sin empezar de cero", and keep the member risk ratings and the training log current.

## Feature map

### What the portal leaves undone (the product's reason to exist)
- **No import.** The monthly form is manual entry only. The user guide shows no upload, paste or API ([guide](https://contadoresenred.com/wp-content/uploads/2026/06/Instructivo.pdf)). The resolution says the form "sustituye por completo el flujo de descarga y carga de archivos externos de planilla de cálculo" ([Res 1279/2026](https://www.argentina.gob.ar/normativa/nacional/norma-427021/texto)).
- **No calculation from source data.** The form computes subtotals, totals, the guarantee fund at the 10% shown in an editable box, the savings limits (capital líquido x 25 and patrimonio neto x 15) and the provisions at the Annex V rates, but only from numbers the user has already typed (guide screenshots, Annexes III-V). Someone still has to bucket every loan by situation (1-5), by type (pago íntegro or amortizable), by maturity band and by guarantee type, and pick the 20 largest savers. That is the hard, error-prone work.
- **No multi-entity view, no calendar, no reminders, no history across years** (none described in the guide or the Res 756 manual).
- **No UIF records.** No portal keeps the risk self-assessment, the manual, the training log, the member risk ratings or the alerts register ([01](01-law-and-requirements.md)).
- **Separate logins per entity.** Each entity enters with its own CUIT and an INAES access code that only its apoderados (authorised representatives) can request through TAD ([INAES vigencia page](https://www.argentina.gob.ar/certificado-de-vigencia-de-matricula); [guide p.2](https://contadoresenred.com/wp-content/uploads/2026/06/Instructivo.pdf)). An accountant with 10 clients juggles 10 logins.

### Feature map

| Area | MVP (sellable in 6-8 weeks) | v1 (months 3-6) | Later |
|---|---|---|---|
| **Workspace** | Accountant firm with many entities; entity profile (CUIT, matrícula, type, province, lending rule number and date, balance-sheet closing date, UIF-obligated yes/no, small-lender biennial option); roles above; Spanish UI; ARS number format. | Entity staff self-service; per-entity audit pack. | White-label for federations. |
| **Deadline engine** | Obligation catalogue (monthly SAEM return, quarterly or yearly roll, authorities update, AML module initial and yearly, UIF self-assessment 30 April, external review, IT technical report, assembly pre- and post-filing); due dates with Argentine business days and holidays; status per period; email reminders; iCal feed; cross-client board. | WhatsApp reminders; per-province local-authority variants; "what changed" feed when INAES issues a new resolution. | Co-op (Law 20.337) assembly rules in full. |
| **Monthly SAEM return** | Excel templates for the loan book, savings accounts and balances; column mapping for any spreadsheet; loan bucketing into situations 1-5, types, maturity bands and guarantee types; Annexes I-V and VII computed; our own re-implementation of the form's subtotals and cross-annex checks; prior-period comparison; **copy sheet** in the exact field order of the form (on screen with copy buttons, and PDF); arrears queue for overdue periods; upload the INAES PDF as proof; mark filed. | **Browser extension "Completar SAEM"** that fills the open form from the prepared figures while the user is logged in; the user still presses "Validar Consistencia" and "Grabar formulario". ERP export presets (Bambú, SIGMA). | Read-back check of what was filed (if INAES's reprint PDF can be parsed). |
| **Member register and roll** | Member register (import from Excel/CSV or ERP); validation of CUIT/CUIL check digit, dates, document types and INAES locality codes; **Res 756 CSV export** for additions and removals since the last remito; authorities register with mandates and minutes; PEP, risk level, country of residence and CRS fields stored per member. | Member self-service form link (CDD data, PEP and CRS self-certification); RePET and UN list screening. | CRS report file once ARCA sets the format. |
| **AML (UIF Res 99/2023 and INAES Res 1567/2026)** | Checklist and evidence slots only (manual, compliance-officer minutes, UIF registration, PEP statements per board member, training records). | Data pack for the INAES AML module (Annexes I-IV); PEP-statement tracker per board member (signed in TAD yes/no); risk self-assessment wizard to DOCX; manual and risk-tolerance templates; training plan and log; member risk rating with refresh dates (1/3/5 years); unusual-operations register; flag of operations at or above 12 SMVM. | Monitoring rules; REI reviewer portal. |
| **Evidence vault** | Upload and tag PDFs (INAES receipts, minutes, remitos, TAD receipts); 10-year retention; audit log. | Inspection pack export (ZIP with index). | Digital member-register book (if INAES allows). |
| **Billing** | Card billing through a merchant of record such as Paddle (5% + USD 0.50 per transaction, tax handling included, [Paddle](https://www.paddle.com/pricing)); plans per entity and per accountant (prices in [02](02-market-and-competition.md) and [04](04-gtm-company-finance.md)). | Annual prepay discount. | Federation invoicing. |

### Why this cut for the MVP
- The **monthly return** is the only duty that recurs 12 times a year and has a fresh, documented pain (new manual form from the July 2026 period, arrears must be re-entered). It is also the feature no competitor claims ([02](02-market-and-competition.md)).
- The **roll export** is cheap to build because INAES publishes the exact CSV layout ([Res 756 manual](https://servicios.infoleg.gob.ar/infolegInternet/anexos/410000-414999/411657/res756-1.pdf)). The quarterly roll for UIF-obligated entities is due within 10 days of each quarter end, so the Q4 roll falls due about 10 Jan 2027 ([01](01-law-and-requirements.md)).
- The **calendar** is what makes an accountant log in every week.
- The **AML pack waits for v1** because the content (self-assessment, manual) needs careful expert review and CONLAFT already sells it ([02](02-market-and-competition.md)). The MVP still stores AML evidence, so the AML module's initial filing (about 1 Dec 2026) and the yearly filing (by 20 Jan 2027) can be tracked in the calendar.
- The **browser extension waits for v1** because the live form was not seen (the guide shows screenshots only), its terms of use are unknown, and INAES can change the page at any time. The copy sheet works without any of that.

## Key flows

### Flow 1: Accountant signs up and adds the first client (target: 30 minutes)
1. Sign up with e-mail and password, then turn on two-factor login.
2. "Agregar entidad": type the CUIT. The app checks the check digit. Choose the type (mutual or co-op), province and services (ayuda económica, gestión de préstamos, other).
3. Answer five questions: lending rule number and date; balance-sheet closing month; UIF-obligated; own funds only or payroll-deduction only (biennial UIF option); electronic channels used (IT report duty).
4. The app builds the obligation list and the calendar for the next 12 months, plus any overdue periods the user ticks.
5. Upload the member list (Excel or the INAES roll export). The app maps columns and flags errors.
6. Invite the entity's treasurer to upload ledgers each month (optional).

### Flow 2: Monthly SAEM return (target: 20 minutes per entity once set up)
1. Day 1 after month end: reminder to the treasurer and the accountant.
2. Upload: loan book (one row per loan), savings accounts (one row per account), and a small balances sheet (cash, banks, investments, patrimonio neto items, accumulated provisions). Templates are provided; an ERP export can be mapped once and reused.
3. The app classifies each loan: days overdue to situation 1-5, type, maturity band, guarantee type, currency. It computes monthly averages from the daily or month-start and month-end balances supplied (method shown to the user).
4. The app shows Annexes I-V and VII in the same layout as the INAES form, with each value traceable to the source rows.
5. Checks run: our re-implementation of the form's totals and cross-annex relations, plus sanity checks (change versus last month, negative values, members in Annex VII not in the register). Red items must be fixed or explained.
6. Approval: the treasurer or the accountant approves. Optional in-app approval by the president, secretary and treasurer (the annex sheets must be signed by them and by the auditor and the supervisory body, Res 1418/03 art. 17 per [Res 1424/2017](https://consejosalta.org.ar/wp-content/uploads/INAES-1424.pdf)).
7. Filing: the user opens the INAES form in another tab and works down the copy sheet (MVP), or presses "Completar" in the extension (v1). The user presses "Validar Consistencia", then "Grabar formulario", enters the authorities and downloads the PDF ([guide pp.15-17](https://contadoresenred.com/wp-content/uploads/2026/06/Instructivo.pdf)).
8. The user drops the INAES PDF into the app. The period turns green.

### Flow 3: Quarterly or yearly member roll
1. Reminder 10 days before the due date.
2. Upload the current member list. The app compares it with the last filed list and shows additions, removals and changes.
3. Download two CSV files: additions (altas) and removals (bajas), in the INAES layout.
4. Upload them in the INAES roll system, generate the remito and upload the remito PDF to the app.

### Flow 4: Arrears catch-up
1. The user ticks the overdue periods (for example July to September 2026).
2. The app asks for each period's ledgers, or for a single loan book with origination and payment dates from which it rebuilds month-end positions (v1).
3. Each period goes through Flow 2. The board shows progress, for example "4 of 6 periods filed".

### Flow 5: Yearly AML cycle (v1)
1. December: update board composition and PEP statements; tracker shows who has signed in TAD.
2. By 20 January: AML module data pack ready (entity, compliance officer, manual minute, gross loans of the year, representatives).
3. By 30 April: risk self-assessment and risk tolerance documents generated, approved by the board, filed at the UIF and INAES.
4. About 28 August: external review report filed (120 days after the self-assessment deadline, see [01](01-law-and-requirements.md)).

### Flow 6: Accountant's Monday morning
1. Open the board: one row per entity, one column per obligation, colours for done, due soon, late.
2. Filter "due in the next 10 days". Open the next entity. Work. Repeat.

## Screens
1. **Firm board.** Grid of entities by obligations, with due dates and colours; filters by province, type and status; counts at the top ("3 late, 7 due this week").
2. **Entity home.** Profile, open obligations, last filings, members count, alerts, documents.
3. **Calendar.** Month and list views; iCal subscribe link; holiday source shown.
4. **Monthly return: upload.** Three drop zones (loans, savings, balances), template downloads, mapping dialog the first time.
5. **Monthly return: annexes.** Tabs I, II, III, IV, V, VII laid out like the INAES form; computed cells grey; click any number to see the source rows; check results panel on the right.
6. **Monthly return: copy sheet.** One long list in the form's order: annex, row label (exact INAES wording), column, value, copy button, tick box. Print-friendly PDF.
7. **Member register.** Table with search; per-member card (identity, address, category, dates, PEP, risk, country of residence, CRS fields, documents); import and export buttons; "roll changes since last remito".
8. **Authorities.** Current board and supervisory body with mandates and minutes; history.
9. **Documents.** Evidence vault by obligation and period; upload; retention date.
10. **Settings.** Users and roles, two-factor, billing, data export, delete account.
11. **(v1) AML.** Self-assessment wizard, manual, training log, risk ratings, unusual-operations register (restricted to the compliance officer).
12. **(Admin) Content.** Form specification versions, rule tables, obligation catalogue, holiday overrides, templates. Changes need a test run before publishing.

## Data sources and integrations

None of the INAES systems has a public API. Every filing ends with a person, logged in as the entity, typing or uploading in the INAES web site or in TAD. The product prepares, checks, stores and reminds. It does not file.

| Source | What it holds or accepts | Access and format | Cost and licence | How the product uses it |
|---|---|---|---|---|
| **INAES SAEM web form** (Res 1279/2026, monthly) | Annexes I-V and VII, header (period, acta number and date, cash-count date), authorities | INAES site, "Acceso Entidades Registradas", entity CUIT + password, then "Sistemas Habilitados" > "RES.1418/03". Manual entry only; partial save per annex; "Validar Consistencia"; "Grabar formulario"; PDF download; "Reimprimir" tab for past filings ([guide pp.2-17](https://contadoresenred.com/wp-content/uploads/2026/06/Instructivo.pdf)). No upload, paste or API described. | Free | MVP: copy sheet in the same order. v1: browser extension fills the open form. Store the INAES PDF as proof. |
| **INAES access code** | The entity's login | Requested in TAD ("Solicitud de Código de Acceso"), only by the entity's apoderados ([certificado de vigencia page](https://www.argentina.gob.ar/certificado-de-vigencia-de-matricula)) | Free | Never stored by us. The user logs in himself. |
| **INAES member and authorities roll** (Res 756/2025) | Members, removals, authorities | Web system with bulk load: .TXT or .CSV, semicolon separator, header row; template download; Excel export of the current roll; "Generar remito"; locality codes from INAES's own nomenclator ([manual IF-2025-35836690](https://servicios.infoleg.gob.ar/infolegInternet/anexos/410000-414999/411657/res756-1.pdf); field list in [01](01-law-and-requirements.md)). The published layout has no columns for risk level, PEP or country of residence, so how those Res 756 art. 5 fields are captured is unknown (unverified). | Free | MVP: generate the additions and removals files; import INAES's Excel export to seed the register; keep the locality-code table. |
| **INAES AML module "Módulo II"** (Res 1567/2026) | Annex I entity and compliance, II board and supervisory PEP statements, III representatives, IV co-op capital, ROS statistics ([Res 1567 text and Tributum summary](https://www.consejosalta.org.ar/wp-content/uploads/INAES-1567.pdf)) | Web. INAES says its two modules "interactúan entre sí" and "permiten la migración de datos y su carga automática" (same source). My reading: data from the roll module pre-fills the AML module (inference). Items (a)-(c) also go through TAD. User manual IF-2026-67633405 not read. | Free | v1: data pack and checklist; tracker of PEP statements signed in TAD. |
| **INAES loan-brokering quarterly return** (Res 1481/2009 art. 18, as replaced by Res 7536/2012) | Annex I information on brokered loans | Online on the INAES site with the access code; issues a "Constancia". Help desk: gestionprestamos@inaes.gob.ar; system errors: consultasweb@inaes.gob.ar ([INAES "Gestionar préstamos"](https://www.argentina.gob.ar/node/109047)). Annex I field list not seen (unverified). | Free | v1, once a pilot shows the form. Important for the 302 entities named in Res 1687/2026 ([02](02-market-and-competition.md)). |
| **TAD** (Trámites a Distancia) | PEP sworn statements, assembly documents (Res 3108/2018), access-code requests | Web, apoderados with clave fiscal ([Res 3108/2018](https://www.argentina.gob.ar/normativa/nacional/norma-316294/texto)) | Free | Checklist and evidence slots only. No integration found (unverified). |
| **UIF SRO** (reporting system) | Suspicious transaction reports, monthly and yearly systematic reports | Web. Periods without activity must still be reported ([Decisio calendar 2024](https://www.decisiola.com/wp-content/uploads/2023/12/Decisio-Calendario-2024.pdf)). File format for mutuales not found (unverified). | Free | v1: flag operations at or above 12 SMVM; deadline reminders. We never transmit STRs. |
| **RePET** (terrorism and financing list, Ministry of Justice) | Persons and entities | Free JSON downloads at `https://repet.jus.gob.ar/xml/personas.json` and `/xml/entidades.json` ([RePET](https://repet.jus.gob.ar/)). My download on 10 Oct 2026: 959 persons (736 tagged "UN List", 223 "ARG List") and 269 entities; the server's Last-Modified was the same morning, so it looks daily (inference). | Free | v1: nightly sync; fuzzy name match against members and authorities; review queue. The UN list is already inside it. |
| **PEP data** | Domestic and foreign PEPs | No official Argentine PEP database found. OpenSanctions has Argentine datasets (for example the Chamber of Deputies) and sells commercial licences through sales; its API is listed at EUR 0.10 per call ([OpenSanctions API](https://www.opensanctions.org:443/api/); [Argentine deputies dataset](https://opensanctions.org/datasets/ar_parliament)). | Licence needed for commercial use | MVP: self-declaration field per member. Later: optional paid check. |
| **ARCA taxpayer register** (CUIT data) | Name and tax status of a CUIT | SOAP web services (constancia de inscripción, padrón A13) need an X.509 certificate from ARCA linked to a CUIT through clave fiscal ([ARCA WSAA](https://arca.gob.ar/ws/documentacion/wsaa.asp); [ARCA catalogue](https://www.afip.gob.ar/ws/documentacion/catalogo.asp)) | Free, but needs an Argentine CUIT | MVP: check-digit validation only. A foreign company has no CUIT, so no lookup (later, possibly through a local partner; unverified). |
| **Holidays** | National holidays and bridge days | Community API `api.argentinadatos.com/v1/feriados/{year}` (fetched 10 Oct 2026). It lists the 9 Nov 2026 holiday for the Pope's visit and bridge days on 23 Mar, 10 Jul and 7 Dec 2026; 2027 bridge days are not yet set. | Free | Seed table plus an admin override, because holidays are added at short notice. Whether bridge days count as non-business days for INAES deadlines is (unverified). |
| **SMVM** (minimum wage) | Threshold unit for UIF reports | ARS 391,200 a month in October 2026, rising to ARS 437,000 by April 2027 (Res 4/2026 of the wage council, BO 2 Sep 2026) ([Colegio de Escribanos copy](https://www.colegio-escribanos.org.ar/noticias/2026_09_02_Consejo_Salario_Res-4-26.pdf); [iProfesional](https://www.iprofesional.com/impuestos/463576-se-oficializaron-los-nuevos-montos-del-salario-minimo-vital-y-movil-hasta-abril-de-2027)). So 12 SMVM = ARS 4,694,400, about USD 3,095 at ARS 1,517. | Free | Dated parameter table. |
| **Mutual ERPs** (Bambú, SIGMA, Nexa, GEM) | Loan and savings ledgers | Export formats unknown (unverified). Bambú claims "exportación de archivos para INAES" ([02](02-market-and-competition.md)). | n/a | MVP: generic Excel mapping. v1: saved presets per ERP from pilot files. |
| **Paddle** | Card billing, tax as merchant of record | API and checkout | 5% + USD 0.50 per transaction, no monthly fee ([Paddle](https://www.paddle.com/pricing)) | Subscriptions per entity or per accountant. |
| **E-mail** | Reminders, invites | SMTP or API | Scaleway Transactional Email (France): 300 free, then EUR 0.25 per 1,000 ([Scaleway](https://www.scaleway.com/en/pricing/managed-services/)) | Reminders and alerts. |
| **WhatsApp** (v1) | Reminders | Meta WhatsApp Business Platform; billed per template message by recipient country | Utility template in Argentina about USD 0.026 per message from 1 Jul 2026 (third-party table, [Zernio](https://zernio.com/blog/whatsapp-business-api-pricing); official rate card at [Meta](https://developers.facebook.com/docs/whatsapp/pricing), not checked) | Opt-in reminders to treasurers. |

### Browser extension "Completar SAEM" (v1): design and limits
- **What it does.** The user opens the INAES form and logs in himself. He clicks the extension, picks the entity and the period, and enters a short one-time code from our app. The extension downloads the prepared figures and types them into the open annex. It highlights every filled box. The user then checks, saves each annex, runs "Validar Consistencia" and presses "Grabar formulario" himself.
- **What it never does.** It never stores or sees the INAES password. It never presses "Grabar". It only runs on the INAES domain and only on the user's click.
- **Precedent.** Argentine accountants already use small Chrome extensions on government sites, for example "Arca Cuits Guardados", which fills ARCA login CUITs for firms with many clients ([Chromeboard listing](https://chromeboard.com/extension/arca-cuits-guardados-kjchgfacnigoofoffeneloimeknoiihe)).
- **Unknowns.** The live form's page structure was not seen; the field identifiers must be mapped from a pilot's screen (with permission). INAES's terms of use for its site were not found (unverified). Ask the INAES help desk (consultasweb@inaes.gob.ar, [INAES](https://www.argentina.gob.ar/node/109047)) before release.
- **Cost.** The Chrome Web Store charges a one-time USD 5 developer registration fee ([Chromium blog](https://blog.chromium.org/2020/03/new-developer-dashboard-and.html?hl=fr)).

### The calculation is the product: what must be specified
- **Loan classification.** Situation 1-5 by days overdue (to 30, 31-90, 91-180, 181-365, over 365); type (pago íntegro or amortizable); for pago íntegro: overdue, due within 30 days, 30-89 days, 90 days or more; for amortizable: overdue, due within 3, 6, 12 months, rest ([guide, Annex IV screenshot](https://contadoresenred.com/wp-content/uploads/2026/06/Instructivo.pdf)).
- **Provisions.** Rates by situation and guarantee as shown on Annex V: no guarantee 1/5/20/50/100%; personal guarantee 1/5/20/25/50%; real guarantee 1/3/10/15/25%, in pesos and in foreign currency (same source).
- **Relations (Annex III).** Guarantee fund = average mutual savings x the percentage of art. 9(b), shown as 10.00% in an editable box; capital líquido = patrimonio neto minus real estate, other fixed assets, deferred charges and non-service non-current assets; savings limit = capital líquido x 25 and patrimonio neto x 15 (same source). INAES suspended the guarantee-fund rule of Res 611/2015 and art. 9(c.5) of Res 1418/03 in 2016 by Res 142/16 ([BO 30 Oct 2019](https://www.boletinoficial.gob.ar/detalleAviso/primera/220214/20191030)); which parts apply today is (unverified). So every rate and multiplier must be a dated parameter, not code.
- **Averages.** Annexes I-II ask for a "promedio período" for each line. Whether INAES means the average of daily balances or of opening and closing balances was not found (unverified). The importer must accept daily balances and fall back to a stated method. This is the first question for the domain expert.
- **Annex VII.** The 20 members with the largest accumulated operations in the month, with name, CUIT/CUIL/CDI, member number and largest savings balance (guide).

## Data model

### Main tables (PostgreSQL)

| Table | Key fields | Notes |
|---|---|---|
| `firm` | name, country, billing account, plan | An accounting firm, or a single entity that buys directly. |
| `user` | e-mail, name, 2FA secret, locale | One login can belong to several firms. |
| `membership` | user, firm or entity, role (firm_admin, accountant, entity_staff, compliance_officer, board_signer, auditor_readonly, reviewer_readonly) | Role-based access. |
| `entity` | firm, CUIT, matrícula, legal name, type (mutual / co-op), province, address, balance-sheet closing month, services (ayuda económica, gestión de préstamos, crédito), lending-rule resolution number and date, UIF-obligated flag, UIF registration date, biennial-option flag, uses electronic channels flag, status | The client mutual or co-op. |
| `obligation_type` | code (SAEM_MONTHLY, ROLL_QUARTERLY, ROLL_YEARLY, AUTHORITIES_UPDATE, AML_MODULE_INITIAL, AML_MODULE_YEARLY, UIF_SELF_ASSESSMENT, UIF_EXTERNAL_REVIEW, IT_TECH_REPORT, ASSEMBLY_PRE, ASSEMBLY_POST, BROKERING_QUARTERLY...), legal basis, applies-when rule, due-date rule, valid from / to | Content, edited by the platform editor and versioned. |
| `obligation_instance` | entity, type, period, due date, status (not started, in progress, ready, filed, late, not applicable), filed at, filed by, proof document | One row per entity per period per duty. |
| `holiday` | date, kind (national, bridge, provincial), source, override flag | Seeded, then editable. |
| `parameter` | key (SMVM, PROVISION_RATE_*, GUARANTEE_FUND_PCT, LIMIT_MULTIPLIERS), value, valid from / to, source URL | Every legal number with its date and source. |
| `member` | entity, CUIT/CUIL/CDI, person type, category, member number, names or company name, document type and number, address fields, INAES locality code, postcode, admission date, exit date and cause, disciplinary flag, e-mail, phone, PEP status, risk level, country of residence, tax residence and foreign TIN (CRS), date of birth, nationality | Mirrors the Res 756 layout plus the UIF and CRS fields. |
| `member_risk_review` (v1) | member, level, factors, approved by, approved at, next review date | Refresh at 1, 3 or 5 years by level (UIF Res 99/2023 art. 30, see [01](01-law-and-requirements.md)). |
| `authority` | entity, member, body (consejo directivo, junta fiscalizadora), office, mandate start and end, acta number and date | Feeds the monthly filing's signer list and the roll. |
| `roll_submission` | entity, period, type (additions, removals), file, row count, remito number, remito PDF | Lets the app compute "changes since last remito". |
| `import_batch` | entity, kind (loans, savings, balances, members), source file, mapping used, row count, errors, uploaded by | Raw file kept for audit. |
| `loan` | entity, period, member, loan number, type, currency, guarantee type, origination date, maturity, instalments, balance, days overdue, computed situation and band | One snapshot per period. |
| `savings_account` | entity, period, member, product (a término, variable común, variable especial, otros), currency, closing balance, average balance, rate | Same. |
| `balance_item` | entity, period, code (cash, bank, fixed deposit, public bonds, patrimonio neto, fixed assets...), currency, closing, average | Small manual sheet. |
| `form_spec` | form code (SAEM), version, valid from, JSON of annexes, rows, columns, field codes, labels, input or computed, formulas, checks | One source of truth for the calculator, the screens, the copy sheet and the extension. |
| `monthly_return` | entity, period, form_spec version, header (acta number and date, cash-count date), values JSON (field code to amount), check results, status, approvals, INAES PDF | Versioned; any re-run creates a new version. |
| `document` | entity, obligation instance, kind, file (object storage key), hash, uploaded by, retention until | Evidence vault. |
| `audit_event` | actor, entity, action, object, before / after hash, IP, time | Append-only. |
| `reminder` | obligation instance, channel, send at, sent at | E-mail in MVP, WhatsApp in v1. |
| `aml_case` (v1) | entity, member, alert source, dates, analyst, decision and reasons, STR filed yes/no | Unusual-operations register (UIF Res 99/2023 art. 35). Restricted to the compliance officer. |
| `training_record` (v1) | entity, person, course, date, test result | UIF Res 99/2023 art. 18. |

### Rules and content kept out of code
- The **form specification** (about 300 input fields, their order and labels) lives in a versioned YAML or JSON file that the platform editor can change and test. When INAES changes the form, only this file and its golden tests change.
- **Obligation rules** (who, how often, due-date rule) live in a table with valid-from dates.
- **Legal parameters** (rates, multipliers, SMVM) are dated rows with a source URL, shown on every output ("rules as of 10 Oct 2026").
- **Templates** (v1: self-assessment, manual, minutes) are Word files with simple tags, editable by the domain expert.

## Architecture and stack

### Recommendation: one plain monolith that AI agents can build and test in parallel
- **Language and framework:** Python 3.12 + Django 5 with server-rendered pages and HTMX. Django gives login, permissions, an admin for the content tables, migrations and Spanish translation out of the box. Python is strong at the two hard jobs: reading messy Excel files (openpyxl, pandas) and exact money arithmetic (Decimal).
- **Database:** PostgreSQL 16. Every tenant-owned table carries `firm_id`; every query goes through one scoped manager; tests try cross-tenant reads on every endpoint.
- **Background jobs:** a Postgres-backed queue (for example Procrastinate), so there is no Redis to run. Jobs: imports, PDF rendering, reminders, nightly RePET sync (v1).
- **Documents:** WeasyPrint for the copy sheet and audit-pack PDFs; docxtpl for Word templates (v1).
- **Files:** S3-compatible object storage in the EU with versioning and object lock for the 10-year evidence vault.
- **Browser extension (v1):** TypeScript, Chrome Manifest V3, a few hundred lines. It reads the same form specification (field code to page element) as the server.
- **LLM use (optional):** only to suggest column mappings from spreadsheet headers, never with member data. Claude Haiku 5.5 is listed at USD 0.10 per million input tokens and USD 0.50 per million output tokens ([Anthropic pricing, as listed on 6 Oct 2026](https://platform.claude.com/docs/en/about-claude/pricing)), so this costs cents a month.
- **Hosting:** an EU region (Germany, Finland or France). See the privacy section for why.
- **Why not microservices, a SPA or a low-code tool:** one founder must debug it at 11 pm on a deadline day. One codebase, one database, one deploy.

### How the pieces fit
```
Browser (accountant, treasurer)          Chrome extension (v1)
        |  HTTPS, server-rendered pages            |  one-time code, JSON "fill package"
        v                                          v
   Django app ---- form_spec + rules + parameters (versioned content)
        |   \
        |    \--> job queue (Postgres): imports, PDFs, reminders, list sync
        v
   PostgreSQL (EU)      Object storage (EU, versioned, object lock)
        |
        +--> e-mail (EU provider), Paddle (billing), RePET JSON (v1, read-only)
User files at INAES and TAD by hand, then uploads the INAES PDF back into the app.
```

## Security, privacy and liability

### Data held
- Member identity (name, DNI, CUIL/CUIT), address, contact, admission and exit.
- Loan and savings balances per member, days overdue.
- PEP status and risk level per member.
- v1: unusual-operations cases. These are among the most sensitive data in the system, because a suspicious-transaction report must stay confidential under UIF Res 99/2023 ([01](01-law-and-requirements.md)).

### Argentine data protection law (Law 25.326) applied
- **Our role.** We process data on the entity's behalf. Art. 25 says a provider of data-processing services may not use the data for any other purpose or pass it on, and must destroy it when the service ends, unless the client expressly authorises keeping it for up to two years ([Law 25.326](https://www.argentina.gob.ar/normativa/nacional/ley-25326-64790/texto)).
  - Design consequence: the UIF 10-year retention duty belongs to the entity. On cancellation the app gives a full export (ZIP with CSV and PDFs), offers a read-only archive for at most two years if the client authorises it in writing, then deletes.
- **Security and secrecy.** Art. 9 requires the technical and organisational measures needed to keep data secure and confidential; art. 10 imposes professional secrecy on everyone who handles the data (same source). The AAIP's Res 47/2018 lists recommended (not mandatory) security measures for computerised data ([Res 47/2018](https://www.argentina.gob.ar/normativa/nacional/resolución-47-2018-312662/texto); [Marval](https://www.marval.com/publicacion/nueva-resolucion-sobre-medidas-de-seguridad-y-datos-personales-13216)). Use it as the checklist.
- **Transfers abroad.** Art. 12 prohibits transfers to countries without adequate protection (Law 25.326). The adequate list in Disp. 60-E/2016 art. 3 includes the EU and EEA states, Switzerland, Guernsey, Jersey, the Isle of Man, the Faroe Islands, Canada (private sector), Andorra, New Zealand, Uruguay and Israel (automated data); the UK was added in 2019 by Res AAIP 34/2019 ([Disp. 60-E/2016](https://www.argentina.gob.ar/normativa/nacional/267922/texto); [IAPP on the UK](https://iapp.org/news/a/el-reino-unido-se-incorpora-a-la-lista-argentina-de-paises-adecuados-para-la-transferencia-internacional-de-datos-personales)). The US and Brazil are not on that list (as of the 2019 change found; later changes unverified). For non-adequate countries, the AAIP's model clauses apply: Disp. 60-E/2016 and the Ibero-American clauses adopted by Res AAIP 198/2023 ([abogados.com.ar](https://abogados.com.ar/la-aaip-aprobo-clausulas-contractuales-modelo-para-transferencia-internacional-de-datos-personales/33646); [BO 18 Oct 2023](https://www.boletinoficial.gob.ar/detalleAviso/primera/296189/20231018)).
  - Design consequence: host the database, files, backups and e-mail in the EU. Keep US sub-processors away from member data. Paddle sees only the payer's billing data.
- **Database registration.** Art. 21 requires registration of public databases and of private ones "destinado a proporcionar informes" (Law 25.326). Whether each mutual, or we as processor, must register with the AAIP today was not confirmed (unverified). Ask the lawyer in week 5.
- **Breach notice.** Law 25.326 has no breach-notification duty that I found. A bill to replace the law (file 3397-D-2026, July 2026) adds the concept of a security incident ([abogados.com.ar](https://abogados.com.ar/nuevo-proyecto-de-ley-de-proteccion-de-datos-personales/39762)). Policy anyway: tell affected customers within 72 hours.
- **Sanctions.** The AAIP can warn, suspend, fine or close a database (art. 31, Law 25.326).

### Security baseline for the MVP
- Two-factor login required for all firm users; short sessions; login rate limits.
- Tenant isolation enforced in one place and tested on every endpoint (an agent writes a cross-tenant test for each new view).
- Encryption in transit (TLS) and at rest (encrypted disks and backups); per-environment secrets; no secrets in the repository.
- Founder access to customer data only through a logged "break-glass" path.
- Uploads: size and type checks, antivirus scan, stored outside the web root, served through signed links.
- Append-only audit log of every change, import, approval and download.
- Daily encrypted backups to a second EU provider; a restore drill before launch and every quarter.
- Dependency and code scanning in CI (for example pip-audit, Bandit, Semgrep); Content Security Policy; CSRF protection (Django default).
- External penetration test before the first paid customer, and yearly.
- v1: the unusual-operations register in its own permission scope, visible only to the compliance officer.

### Liability
- **Every filing is a sworn statement by the entity.** The roll is a sworn statement (Res 756/2025 art. 8) and so is the AML module (Res 1567/2026 art. 7) ([01](01-law-and-requirements.md)). The monthly annexes are signed by the president, secretary, treasurer, auditor and supervisory body (Res 1418/03 art. 17, [Res 1424/2017](https://consejosalta.org.ar/wp-content/uploads/INAES-1424.pdf)).
- **The product prepares drafts from the customer's own data.** Terms of service must say: the user reviews and files; we give no legal or accounting advice; we do not act as compliance officer; liability is capped at 12 months of fees; we are not liable for wrong source data or for INAES changes we could not know about.
- **Every output shows its "rules as of" date** and the form-specification version. A public changelog records each rule update.
- **Fast updates are the real protection.** When INAES publishes a resolution, the platform editor updates the content within days and tells affected users.
- **Insurance.** Professional indemnity or cyber cover becomes worth pricing once revenue starts (cost unverified).

## Hosting and running costs

### Choice: EU region, small and boring
- **Why the EU:** Argentine law treats the EU as adequate (see above), so no transfer contracts are needed with the host. Latency from Argentina to Europe is acceptable for form-based pages (not measured).
- **Provider:** Hetzner (Germany or Finland) is the cheapest, but it raised prices twice in 2026: for example CPX22 went from EUR 7.99 to EUR 19.49 a month and CCX13 from EUR 15.99 to EUR 42.99 for new orders from 15 June 2026; its cheapest line showed "Currently not available", and a notice since 26 June 2026 describes limited provisioning for new customers ([wz-it](https://wz-it.com/en/blog/hetzner-price-increase-june-2026-cpx-ccx-alternatives/); [Northflank](https://northflank.com/blog/hetzner-cloud-server-price-increases)). Plan B is Scaleway or OVHcloud in France (prices not checked).

### Monthly running cost (my estimates, before staff; "customer" = one paying entity)

| Item | 50 entities | 300 entities | 1,000 entities | Basis |
|---|---|---|---|---|
| App and database servers (EU) | EUR 20-45 | EUR 60-120 | EUR 150-300 | 1 server; then app + database servers; then 2 app servers + a dedicated database server with a standby. Hetzner prices above (estimate). |
| Backups and object storage (10-year vault) | EUR 5 | EUR 10 | EUR 25 | About 50 MB of documents per entity a year (estimate). |
| E-mail | EUR 0-1 | EUR 3 | EUR 10 | About 40 e-mails per entity a month; Scaleway EUR 0.25 per 1,000 after 300 free ([Scaleway](https://www.scaleway.com/en/pricing/managed-services/)). |
| WhatsApp reminders (v1, opt-in) | USD 5 | USD 30 | USD 105 | 4 utility messages per entity a month at about USD 0.026 ([Zernio](https://zernio.com/blog/whatsapp-business-api-pricing)). |
| Monitoring, error tracking, uptime | EUR 0 | EUR 25 | EUR 25-80 | Free tiers first (estimate). |
| LLM column-mapping hints | < USD 1 | < USD 5 | < USD 15 | Haiku 5.5 prices above (estimate). |
| Domain, DNS, Chrome store | USD 2 | USD 2 | USD 2 | .com about USD 12 a year (estimate). |
| **Infrastructure total** | **about USD 35-60** | **about USD 140-230** | **about USD 350-600** | |
| Card fees (Paddle 5% + USD 0.50) at USD 40 per entity a month | USD 125 | USD 750 | USD 2,500 | Lower when an accountant pays one invoice for many entities. |
| Yearly penetration test, spread monthly | USD 300-500 | USD 300-500 | USD 400-700 | See budget. |
| Domain-expert retainer for rule updates | USD 300 | USD 500 | USD 800 | A few hours a month from a co-op accountant (estimate). |
| **Revenue at USD 40 per entity a month** | USD 2,000 | USD 12,000 | USD 40,000 | Price band from [02](02-market-and-competition.md). |

Infrastructure is about 2-3% of revenue at 50 entities and about 1-1.5% at 1,000. Card fees, the expert retainer and the founder's support time are the real costs.

## Development plan

### Basis
- The founder builds with Claude Code and several AI agents in parallel. No salaried developers.
- The founder's job is product owner, spec writer, reviewer and integrator. Agents write code and tests. Paid humans only check the law, the arithmetic and the security.
- The binding constraint is not coding speed. It is (1) a correct form specification and golden test data, (2) the founder's review capacity, and (3) the outside steps: expert sign-off, lawyer, penetration test and pilots.

### Timing that matters (dates are my calculation)
- Monthly return due dates, counting 20 business days after month end and skipping weekends and the national holidays and bridge days in the [ArgentinaDatos list](https://api.argentinadatos.com/v1/feriados/2026): September 2026 period due 29 Oct 2026; **October due 1 Dec 2026**; **November due 31 Dec 2026**; December due 29 Jan 2027 (estimate; whether bridge days and 24 or 31 December count is unverified).
- AML module initial filing about **1 Dec 2026**, then yearly by **20 Jan 2027** ([Res 1567 summary](https://www.consejosalta.org.ar/wp-content/uploads/INAES-1567.pdf)).
- Quarterly roll for UIF-obligated entities within 10 calendar days of quarter end, so Q4 2026 about **10 Jan 2027** ([01](01-law-and-requirements.md)).
- UIF risk self-assessment by **30 April 2027** ([01](01-law-and-requirements.md)).
- So: pilots must use the product on the October period (due 1 Dec), and the paid launch must land before the January cluster (November return, Q4 roll, AML yearly filing).

### Calendar (start Monday 12 Oct 2026)

| Week | Dates | Phase | What gets done | Exit test |
|---|---|---|---|---|
| 0 | 12-16 Oct | **Spec pack** | Transcribe the SAEM form from the guide screenshots into `form_spec` (every row, column, label, input or computed, formula). Write the Res 756 CSV spec, the obligation catalogue, the holiday and parameter seeds. Build a synthetic mutual (about 500 loans, 300 savings accounts, 2 currencies) and hand-compute its annexes in a spreadsheet: the golden case. Write the interface contracts (below). Recruit the domain expert and 3 pilot accountants. Set up the repository, CI, staging in the EU, and the agent rules file. | Expert has agreed to review; golden case exists; contracts frozen. |
| 1 | 19-23 Oct | **Foundation** (1-2 agents, serial) | Django project, login with 2FA, firms, entities, roles, tenant scoping, audit log, base Spanish UI, file storage, job queue, deploy pipeline, test fixtures, cross-tenant test helper. | A user can sign up, add an entity, invite a treasurer; cross-tenant tests green. |
| 2 | 26-30 Oct | **Parallel wave A** (4 agents + QA agent) | S1 deadline engine and calendar; S2 import pipeline; S3 SAEM calculator core; S4 member register and roll CSV export. | Each stream's acceptance tests green; golden case reproduced by S3. |
| 3 | 2-6 Nov | **Parallel wave B** (3 agents + QA agent) | S5 annex screens, copy sheet (HTML and PDF), arrears queue, filing proof; S6 firm board and e-mail reminders; S7 evidence vault, Paddle billing, settings, data export and delete. | **MVP demo (about 3 build weeks):** a pilot's anonymised file goes from upload to copy sheet; roll CSV generated. |
| 4 | 9-13 Nov | **Integration and hardening** | One integration agent merges and fixes; one security agent runs scans and fixes; one docs agent writes Spanish help pages; founder runs end-to-end on 3 anonymised pilot datasets. Restore drill. | No open high bugs; end-to-end tests green. |
| 5 | 16-20 Nov | **Expert reconciliation and legal content** | Expert compares the app's annexes with 2-3 returns pilots already filed (their ledgers plus the INAES PDF). Every difference is fixed or explained. Lawyer drafts terms, privacy policy and the data-processing agreement (Law 25.326 art. 25), and answers the registration and extension questions. | Zero unexplained differences; legal texts drafted. |
| 6 | 23-27 Nov | **Penetration test; shadow pilot** | External test, 3-4 tester-days, on staging. Pilots prepare the October period in the app in parallel with their usual method (shadow mode, under a signed pilot agreement and DPA). | Test report received; shadow figures match. |
| 7 | 30 Nov-4 Dec | **Fix and file** | Fix high and medium findings; retest. Pilots file the October period (due 1 Dec) from the copy sheet if they are comfortable. Roll file tested on at least 2 entities. | Retest clean of high and critical issues; at least 3 real returns filed from the copy sheet. |
| 8 | 9-11 Dec (7-8 Dec are holidays in Argentina) | **Sellable** | Legal texts live; prices live; onboarding e-mails; launch to the pilots' networks and the lead lists in [02](02-market-and-competition.md). | Paid launch about 14 Dec 2026. |
| v1 | Jan-Apr 2027 | **v1** | Browser extension (January, after INAES help-desk check); AML data pack and PEP tracker before 20 Jan if feasible; UIF self-assessment wizard, manual template, training log, risk ratings and RePET screening before 30 April; WhatsApp reminders; ERP presets; brokering quarterly return if its form is seen. | AML content signed off by an expert. |

### Interface contracts written in week 0 (so agents do not collide)
1. `form_spec` schema: annex, row code, label (exact INAES wording), column, input or computed, formula, check rules, page-element hint for the extension.
2. Calculator output: `{entity, period, spec_version, values: {field_code: decimal}, checks: [{rule, status, message, fields}]}`.
3. Import batch: canonical loan, savings and balance row schemas with validation errors per row.
4. Obligation catalogue and due-date rule language (for example "20 business days after period end", "10 calendar days after quarter end", "fixed 30 April").
5. Roll export: exact column order and encodings of the Res 756 layout.

### Agent work streams (each in its own git worktree and Django app)

| Stream | Owns | Depends on | Key tests |
|---|---|---|---|
| S0 Foundation | `accounts`, `tenancy`, `audit`, base templates, CI | none | Auth, 2FA, roles, cross-tenant denial |
| S1 Deadlines | `obligations`, `calendar` | S0, contract 4 | Due dates for every obligation in 2026-2027 against a hand-made table; holiday overrides; iCal |
| S2 Imports | `imports` | S0, contract 3 | Messy Excel fixtures (merged cells, text numbers, Argentine decimal commas, dates as text); CUIT check digit; row-level errors |
| S3 SAEM calculator | `saem` (engine only) | contracts 1-3 | Golden case; property tests (totals equal sums; every loan lands in exactly one bucket); parameter changes by date |
| S4 Members and roll | `members`, `roll` | S0, S2, contract 5 | Round-trip with INAES Excel export; altas and bajas since last remito; length limits |
| S5 Return screens and copy sheet | `saem` (views, PDF) | S3 | Snapshot tests of each annex; copy sheet order equals form order |
| S6 Board and reminders | `board`, `notify` | S1 | Status colours; reminder schedule; unsubscribe |
| S7 Vault, billing, settings | `vault`, `billing`, `settings` | S0 | Signed links expire; retention dates; Paddle webhooks; full export ZIP; delete |
| QA (continuous) | `e2e/` | all | Playwright end-to-end flows 1-4; cross-tenant tests for every new URL; dependency audit |
| Reviewer (on every PR) | none | all | Reads the diff against the stream brief and the contracts before the founder merges |

Rules for the agents: one stream per worktree; no stream edits another stream's models; database migrations only in the stream's own app; every PR must keep the golden case and the cross-tenant suite green; Spanish strings go into translation files; the founder merges at least once a day.

### Definition of done for the MVP
1. Three pilot accountants with at least 5 entities in total are onboarded.
2. For at least 3 past periods, the app's annexes equal the figures the entities actually filed, or every difference is explained and accepted by the domain expert.
3. At least 3 real monthly returns are filed at INAES from the copy sheet, and the pilots report how many boxes "Validar Consistencia" flagged.
4. A roll CSV from the app is accepted by INAES with zero row errors for at least 2 entities.
5. Each pilot entity's calendar lists every applicable obligation with due dates checked by the expert.
6. Cross-tenant tests pass on every URL; the penetration test has no open high or critical finding after retest.
7. A backup restore drill has succeeded; a full customer data export works.
8. Terms, privacy policy and DPA are live; the form specification and rules carry the expert's sign-off and a "rules as of" date.
9. Billing works end to end (Paddle sandbox and one real payment).
10. Help pages in Argentine Spanish exist for flows 1-4.

### Concierge bridge (optional, from week 3)
- Offer arrears catch-up and monthly preparation as a done-for-you service using the app internally. It earns early revenue, tests the calculator on real files and fits the 302 brokering mutuales named in Res 1687/2026 ([02](02-market-and-competition.md)). Only do this with the entity's signed authorisation and DPA.

## Budget

Cash costs only; the founder is unpaid. USD at ARS 1,517 ([BCRA via 02](02-market-and-competition.md)). Company registration and payment set-up are in [04](04-gtm-company-finance.md).

### To sellable (October to mid-December 2026)

| Item | Low | High | Basis |
|---|---|---|---|
| Claude subscription for Claude Code (Max, 3 months) | USD 300 | USD 600 | Max "from USD 100" a month ([Claude pricing](https://claude.com/pricing)); Max 20x at USD 200 a month per third-party guides ([Superblocks](https://www.superblocks.com/blog/claude-code-pricing)) |
| Extra AI capacity for parallel agents (second seat or API credits) | USD 0 | USD 600 | Estimate |
| Hosting (staging and production, 3 months) | USD 100 | USD 250 | Table above |
| Domain, e-mail, small tools | USD 50 | USD 150 | Estimate |
| Domain expert: co-op accountant who files SAEM returns (spec check, reconciliation, calendar check), 30-40 hours | USD 1,200 | USD 2,400 | USD 40-60 an hour (estimate). Local reference: a UIF advice job carries a minimum ethical fee of about USD 41 in Santiago del Estero ([CPCESE via 02](02-market-and-competition.md)). |
| Argentine lawyer: terms, privacy policy, DPA, registration and extension questions | USD 1,500 | USD 3,000 | Fixed-fee estimate. Reference: the federal fee unit (UMA) was ARS 87,342 (about USD 58) from 1 Dec 2025 ([Microjuris](https://aldiaargentina.microjuris.com/2026/02/12/legislacion-honorarios-profesionales-nuevo-valor-de-la-uma-a-partir-de-diciembre-2025/)); a later ARS 89,875 value is (unverified). |
| External penetration test with retest | USD 3,000 | USD 6,000 | Vendor guides put small scoped web-app tests at about USD 5,000-15,000 and 3-4 tester-days minimum ([Blaze InfoSec](https://www.blazeinfosec.com/post/how-much-does-penetration-testing-cost/); [Helix](https://helix.ml/blog/penetration-testing-cost)); a regional boutique may be cheaper (unverified). |
| Pilot thank-you (free months, no cash) | USD 0 | USD 300 | Estimate |
| Contingency (about 15%) | USD 900 | USD 2,000 | |
| **Total to sellable** | **about USD 7,000** | **about USD 15,300** | |

### First 12 months after launch (excluding company and payment set-up)

| Item | Low | High |
|---|---|---|
| AI tools (Claude subscription, API) | USD 1,200 | USD 3,600 |
| Hosting at 50-150 entities | USD 500 | USD 1,500 |
| Domain-expert retainer for rule updates | USD 3,600 | USD 6,000 |
| v1 AML content review (self-assessment, manual, training templates) | USD 1,500 | USD 3,000 |
| Chrome Web Store, domains, tools | USD 100 | USD 300 |
| **Total** | **about USD 6,900** | **about USD 14,400** |

Card fees (about 6% at USD 40 per entity) and the next yearly penetration test come out of revenue. At 50 entities paying USD 40, revenue is about USD 24,000 a year, so year-1 running costs are covered at about 15-35 paying entities (estimate: about USD 450 a year per entity after card fees).

## Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| A calculation error lands in a sworn statement | Medium | High: trust and liability | Golden tests, reconciliation with past filings, expert sign-off, "rules as of" date, user approval step, liability cap in the terms. |
| INAES changes the form, its rules or its validations without notice | High | Medium | Form spec as data; monitor the Boletín Oficial daily; expert retainer; version per period. |
| INAES adds an import or an API | Medium | Mixed | Good for us: generate its file instead of a copy sheet. The calculation and calendar stay valuable. |
| Unclear definitions (averages, guarantee-fund rule after the 2016 suspension) | High | Medium | Ask the expert in week 0; make each method explicit and switchable. |
| Browser extension breaks or is unwelcome to INAES | Medium | Low (MVP does not need it) | Copy sheet stays the fallback; ask the help desk first; never touch credentials or press "Grabar". |
| Data breach of member financial and AML data | Low-medium | High | Security baseline, EU hosting, penetration test, least privilege, encrypted backups, AML cases in a separate scope. |
| Processor duties conflict with 10-year retention | Medium | Medium | Export at exit; written authorisation for up to 2 years' archive (Law 25.326 art. 25); the entity keeps the 10-year duty. |
| Hosting provider limits or price rises (Hetzner 2026) | Medium | Low | Infrastructure as code; Postgres dumps portable; plan B in France. |
| AI-written code hides subtle bugs | Medium | Medium | Contracts, property tests, reviewer agent, founder review, external test. |
| Founder overload at deadline peaks (the 20th business day) | High | Medium | Status board, help pages, early reminders (day 1, day 10, day 15), concierge only by appointment. |
| Poor source data (no days-overdue field, merged cells) | High | Medium | Template-first onboarding; importer reports row errors in plain Spanish; derive days overdue from due dates when missing. |
| INAES's own "automatic loading" in the AML module shrinks the v1 value | Medium | Medium | Focus v1 on UIF records no portal keeps. |

## Open questions
1. How does INAES compute "promedio período" in Annexes I and II: daily balances or something simpler? (Domain expert, week 0.)
2. What does the live SAEM form's page look like (field identifiers), and does INAES object to a fill-assist extension? (Pilot screen-share; consultasweb@inaes.gob.ar.)
3. Where do the Res 756 art. 5 fields (risk level, PEP, country of residence) go, since the published CSV layout lacks them?
4. Which Annex I fields does the quarterly loan-brokering return (Res 1481/2009 art. 18) ask for?
5. What are the UIF SRO formats for the monthly and yearly systematic reports of mutuales?
6. Do bridge days and 24 and 31 December count as business days for INAES deadlines?
7. Must each mutual, or the processor, register the database with the AAIP?
8. Which parts of the guarantee-fund and savings-limit rules apply after Res 142/16?
9. What export formats do Bambú and SIGMA produce, and do pilots use them?
10. What does the AML Module II manual (IF-2026-67633405) say about migration and automatic loading?
11. Can a foreign company register a .com.ar domain, and does it matter for trust? (The 2024 fee was ARS 8,500 a year, [El Litoral](https://www.ellitoral.com/nacionales/costos-tener-pagina-web-aumentaran-gobierno-establece-nuevos-aranceles-dominios-ar_0_O80A0GMccS.html); registrant rules unverified.)

## Sources

Primary and official
- INAES SAEM user guide IF-2026-57548748 (text and screenshots read): https://contadoresenred.com/wp-content/uploads/2026/06/Instructivo.pdf
- INAES Res 1279/2026: https://www.argentina.gob.ar/normativa/nacional/norma-427021/texto
- INAES Res 1424/2017 (amending Res 1418/03 art. 17): https://consejosalta.org.ar/wp-content/uploads/INAES-1424.pdf
- INAES Res 756/2025 manual IF-2025-35836690: https://servicios.infoleg.gob.ar/infolegInternet/anexos/410000-414999/411657/res756-1.pdf
- INAES Res 1567/2026 (text via Consejo Salta and Tributum): https://www.consejosalta.org.ar/wp-content/uploads/INAES-1567.pdf
- INAES Res 3108/2018: https://www.argentina.gob.ar/normativa/nacional/norma-316294/texto
- INAES "Gestionar préstamos" page: https://www.argentina.gob.ar/node/109047
- INAES certificate of registration and access code: https://www.argentina.gob.ar/certificado-de-vigencia-de-matricula
- Boletín Oficial notice citing Res 142/16: https://www.boletinoficial.gob.ar/detalleAviso/primera/220214/20191030
- RePET (JSON downloads checked 10 Oct 2026): https://repet.jus.gob.ar/
- Law 25.326: https://www.argentina.gob.ar/normativa/nacional/ley-25326-64790/texto
- Disp. 60-E/2016: https://www.argentina.gob.ar/normativa/nacional/267922/texto
- Res AAIP 198/2023 (BO): https://www.boletinoficial.gob.ar/detalleAviso/primera/296189/20231018
- Res AAIP 47/2018: https://www.argentina.gob.ar/normativa/nacional/resolución-47-2018-312662/texto
- ARCA WSAA and web-service catalogue: https://arca.gob.ar/ws/documentacion/wsaa.asp ; https://www.afip.gob.ar/ws/documentacion/catalogo.asp
- SMVM Res 4/2026: https://www.colegio-escribanos.org.ar/noticias/2026_09_02_Consejo_Salario_Res-4-26.pdf
- Holidays (community API): https://api.argentinadatos.com/v1/feriados/2026 ; https://api.argentinadatos.com/v1/feriados/2027

Secondary and commercial
- Decisio compliance calendar 2024: https://www.decisiola.com/wp-content/uploads/2023/12/Decisio-Calendario-2024.pdf
- iProfesional on SMVM: https://www.iprofesional.com/impuestos/463576-se-oficializaron-los-nuevos-montos-del-salario-minimo-vital-y-movil-hasta-abril-de-2027
- abogados.com.ar on AAIP model clauses: https://abogados.com.ar/la-aaip-aprobo-clausulas-contractuales-modelo-para-transferencia-internacional-de-datos-personales/33646
- abogados.com.ar on the 2026 data protection bill: https://abogados.com.ar/nuevo-proyecto-de-ley-de-proteccion-de-datos-personales/39762
- IAPP on the UK adequacy addition: https://iapp.org/news/a/el-reino-unido-se-incorpora-a-la-lista-argentina-de-paises-adecuados-para-la-transferencia-internacional-de-datos-personales
- Marval on Res 47/2018: https://www.marval.com/publicacion/nueva-resolucion-sobre-medidas-de-seguridad-y-datos-personales-13216
- OpenSanctions API and Argentine deputies dataset: https://www.opensanctions.org:443/api/ ; https://opensanctions.org/datasets/ar_parliament
- Chromeboard, "Arca Cuits Guardados": https://chromeboard.com/extension/arca-cuits-guardados-kjchgfacnigoofoffeneloimeknoiihe
- Chromium blog on the USD 5 fee: https://blog.chromium.org/2020/03/new-developer-dashboard-and.html?hl=fr
- Paddle pricing: https://www.paddle.com/pricing
- Scaleway pricing: https://www.scaleway.com/en/pricing/managed-services/
- Zernio WhatsApp pricing table: https://zernio.com/blog/whatsapp-business-api-pricing ; Meta: https://developers.facebook.com/docs/whatsapp/pricing
- Hetzner 2026 price changes: https://wz-it.com/en/blog/hetzner-price-increase-june-2026-cpx-ccx-alternatives/ ; https://northflank.com/blog/hetzner-cloud-server-price-increases
- Claude plans: https://claude.com/pricing ; https://www.superblocks.com/blog/claude-code-pricing
- Anthropic API pricing: https://platform.claude.com/docs/en/about-claude/pricing
- Penetration test pricing guides: https://www.blazeinfosec.com/post/how-much-does-penetration-testing-cost/ ; https://helix.ml/blog/penetration-testing-cost
- UMA value: https://aldiaargentina.microjuris.com/2026/02/12/legislacion-honorarios-profesionales-nuevo-valor-de-la-uma-a-partir-de-diciembre-2025/
- .com.ar fees (2024): https://www.ellitoral.com/nacionales/costos-tener-pagina-web-aumentaran-gobierno-establece-nuevos-aranceles-dominios-ar_0_O80A0GMccS.html

Sibling sections: [01 law and requirements](01-law-and-requirements.md) ; [02 market and competition](02-market-and-competition.md) ; [04 go-to-market, company and finance](04-gtm-company-finance.md)
