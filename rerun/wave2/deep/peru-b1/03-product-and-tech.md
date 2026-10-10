# Peru gaming SPLAFT kit: product, technical design and development plan (deep dive 03)

Date: 10 Oct 2026. Status: draft in progress. Sections 1-5 are written; data sources, architecture, costs and the plan are being researched.

Builds on [the B1 report](../reports/peru-b1.md), [01-law-and-requirements.md](01-law-and-requirements.md) (86 numbered product requirements, cited below as "R1"-"R86") and [02-market-and-competition.md](02-market-and-competition.md). "My estimate" marks numbers I derived. "(unverified)" marks facts I could not confirm. Money: S/ (soles) and US$ at S/ 3.45 per US$, the rate used in the B1 report.

Working name: **SPLAFT Sala**.

## Summary

(pending; written last)

## Users and jobs

### Who buys and who uses

The buyer is the obliged firm (sujeto obligado). The 02 file counted **301 land-based firms** (185 with one room, 89 with 2-3, 27 with 4 or more), **49 online companies**, and **23 betting-shop network holders** with 4,497 shops ([02 file](02-market-and-competition.md), from MINCETUR's registers). Only 60 land-based firms must run the full risk assessment (Norma Art. 4.1, [01 file](01-law-and-requirements.md)).

The champion is the compliance officer (OC). The payer is the general manager (GM). Most daily typing is done by cashiers and room staff.

| Role in the app | Who in real life | How often they use it | Device | Legal hook |
|---|---|---|---|---|
| **Oficial de cumplimiento** (officer) | Often part-time; sometimes the GM in a very small firm. One firm at a time, except a group's corporate officer | Daily to weekly; heavy in Dec-Feb | Laptop | Norma Art. 19-27; R74-R75 |
| **Oficial alterno** (alternate) | Covers absences of up to 4 months | Rarely | Laptop | Art. 22; R73 |
| **Gerente general / directorio** (approver) | Approves the manual, the code, the IAOC and IAI, and EDD clients | Monthly to yearly | Phone or laptop | Art. 10.2.2, 16, 18.3, 27.2; R21, R68, R77 |
| **Cajero / jefe de caja** (cashier) | Pays out chips and tickets at the cage | Every shift | Shared PC or tablet at the cage | Art. 14; R27-R33 |
| **Administrador de sala** (room manager) | Runs promotions and raffles, records winners, onboards staff | Daily | PC or tablet | Art. 14.2(2); R28 |
| **RR.HH.** (HR, often the administrator) | Adds new workers and directors | Weekly | PC | Art. 6.4, 11; R54-R57 |
| **Auditor interno** (IAI author) | Internal audit, or a manager who is not the officer | Once a year | Laptop | Art. 18.1-18.2; R78, R83 |
| **Asesor externo** (adviser) | Law firm, SPLAFT consultant or trainer serving many firms. Cannot be the officer of many firms, so it is a separate role | Weekly, across 5-30 firms | Laptop | Art. 13, 19.2; R75 |
| **Trabajador / director** (self-service) | Fills own sworn statement, signs manual and code receipt, attends training | A few times a year | Phone | Art. 6, 11, 16.5; R54, R69 |
| **Proveedor** (self-service) | Fills supplier form and sworn statement | Every 2 years | Phone or laptop | Art. 12; R64-R65 |
| **Cliente** (player, at the cage) | Signs the SBS sworn statement on a tablet | Per RO operation | Cage tablet | Art. 10.3; R17 |
| **Online compliance team** (v1) | Imports platform deposits, withdrawals, bets and wins | Daily | Laptop | Online norma Art. 22; R38 |
| **Agente de tienda** (betting-shop agent, later) | Captures client data at a shop till for the licence holder | Per qualifying operation | Phone | Online norma Art. 26 (agents as "annexed establishments", per 02) |
| **Our support and content editor** | Founder, the lawyer for templates | As needed | Laptop | Support access only with customer consent |

### Jobs to be done (in the user's words)

**Officer**
1. "Tell me every morning what is due, late or missing, so I am never the reason the firm gets a 5-8 UIT fine." (R9, R37, R45, R57, R77)
2. "Give me an RO that is complete, dated, backed up and ready to upload on the SBS template, without retyping the cage records." (R27-R37)
3. "When I judge something suspicious, give me a clean ROSEL draft fast. I have 24 hours." (R45-R47)
4. "Screen everyone (clients, staff, directors, suppliers) against the UN and other lists, and prove I did it on a date." (R49-R52)
5. "Build my IAOC and IAI from data I already keep, in both the UIF and MINCETUR formats, by 15 February." (R76-R78)
6. "When the inspector comes, hand them everything in one pack." (R82)

**General manager**
1. "Show me in one screen that we are compliant, and let me approve documents from my phone." (R68, R77)
2. "Keep the cost below a part-time salary and the hassle low." (02 file: an officer job ad offered S/ 2,000 a month.)

**Cashier and room manager**
1. "Let me record a big cash-out or a prize winner in under 3 minutes, with the client signing on the tablet." (R16-R17, R27-R28, R31)
2. "Do not make me type what the slot system already knows." (R35)

**Adviser (consultant)**
1. "Let me see the deadlines and gaps of all my client firms in one list, and update their manuals when the rule changes." (R75)
2. "Let me run trainings and inductions for many firms and issue the certificates." (R60-R62)

**Internal auditor**
1. "Give me a checklist of the 10 points and the evidence for each, without letting me see ROS content." (R78, R83)

## Feature map

Each feature lists the requirements it meets. "MVP" is the 3-week agent build plus 3-5 weeks of legal review, security test and pilot. It must be enough to run a small slot-room firm's SPLAFT and produce the first IAOC under the new rule, due **15 Feb 2027** for calendar year 2026 ([01 file](01-law-and-requirements.md), "Upcoming changes" item 3).

| # | Feature | MVP | v1 (Feb-Jun 2027) | Later | Requirements |
|---|---|---|---|---|---|
| 1 | **Firm profile and regime engine.** RUC, segment, rooms (pre-filled from MINCETUR's room register), machines, casino tables, departments. Computes "risk assessment required" and "GM may be officer"; flags changes | Yes | Group and corporate-officer workspaces | - | R1-R7 |
| 2 | **Deadline engine.** Peruvian business days and holidays; calendar days where the Norma says "días"; tasks with owner, due date, red/amber/green; daily e-mail digest | Yes | WhatsApp or SMS reminders | - | R9, and all deadline rules |
| 3 | **RO register (land-based).** Cash-outs of US$ 2,500 or more and every promo winner; FX = average of SBS daily selling rates of the previous month; optional lower internal threshold; day-of-operation entry; append-only with corrections; backup | Yes | - | - | R27-R34 |
| 4 | **Import of cage, ticket and promo data.** CSV or Excel upload with a column mapper; rows become suggestions that a human confirms | Yes (generic mapper) | Saved presets for common SUCTR systems once samples are in hand | Direct feed from a SUCTR vendor (partner deal) | R35 |
| 5 | **RO export and sending tracker.** Configurable mapping to the Portal PLAFT template; period, date sent, receipt upload | Yes | - | - | R36-R37 |
| 6 | **Client file and SBS sworn statement.** Art. 10.1 fields (a)-(l); SBS form rendered as PDF; on-screen signature with timestamp; history of versions; "refused" blocks the row and opens a ROS-evaluation task | Yes | Client pre-fill by DNI from a licensed source (if legal and affordable) | ID OCR | R16-R19, R22, R25 |
| 7 | **EDD routing and approvals.** Non-resident, PEP, PEP relative, linked to investigated persons; senior approval recorded | Yes | - | - | R20-R21, R23-R24 |
| 8 | **List screening.** UN Security Council consolidated list, OFAC SDN, EU consolidated list; SBS PEP positions picklist; screening of clients, beneficiaries, workers, directors, suppliers; re-screen of the whole population and RO history on every list change; hit review with reasons | Yes | Paid PEP data source as an option; FATF-list staff notices with read receipts | - | R49-R51, R53, R55 |
| 9 | **Freeze case.** A confirmed UN match opens a case with "notify UIF without delay" and evidence steps | Yes | - | - | R52 |
| 10 | **Unusual operations and ROS.** Escalation by any user; case file with fields (i)-(xi); register of non-reported cases; 24-hour countdown; ROSEL draft with an identifier-leak check; receipt entry | Yes | Alert drafts ("Crear alerta"), link alerts to later ROS | - | R26, R40, R43-R47 |
| 11 | **Detection rules.** Near-threshold cash-outs, repeat raffle winners, shared address or account, worker-client links; SBS gaming alert-signal library | Library only | Rules with configurable thresholds | Scoring | R41-R42, R48 |
| 12 | **Workers and directors.** Art. 11 files via self-service link; ID copy; yearly update check; 15-day change duty; screening; excluded roles (cleaning, security and similar) | Yes | Disciplinary register | - | R6, R54-R56, R58 |
| 13 | **Induction and training.** 30-day induction task per new hire; sessions with date, place, duration, modality, syllabus mapped to the 11 topics; officer's sworn certificate; external certificates; IAOC statistics | Yes | Built-in short video course and quiz | Course marketplace with partners | R57, R59-R63 |
| 14 | **Suppliers.** Art. 12 fields 1-11; sworn statement by person type; screening; 2-year refresh with "no change" note; contract clause tracking | Yes | Supplier self-service link | RUC auto-fill | R64-R67 |
| 15 | **Manual, code and receipts.** Lawyer-approved gaming templates (manual, code with 11 infractions, policies); versions with approval body, date and minutes; receipt statements with the 10 fields, due in 30 days; association-manual import | Yes | Template diff when the rule changes | - | R68-R71 |
| 16 | **Officer register and SISDEL deadlines.** Appointment pack (Art. 20-21 items); 15-business-day and 5-business-day clocks; vacancy and alternate rules; officer identity hidden from third-party documents; no storage of UIF secret codes | Yes (deadlines and pack) | - | - | R72-R75 |
| 17 | **IAOC and IAI.** Pre-filled IAOC with all 13 items, monthly RO, unusual and ROS statistics, shareholders, managers, rooms; two outputs (UIF and MINCETUR formats); IAI 10-point checklist by a non-officer; approval by 30 Jan; receipts by 15 Feb | Yes | - | - | R76-R78 |
| 18 | **Inspection pack.** One ZIP and merged PDF for a date range, with ROS content excluded for auditors | Yes | Read-only inspector link | - | R82-R83 |
| 19 | **Records, retention, audit log.** 5-year minimum, configurable upward; deletion blocked before then; tamper-evident log of reads and writes on RO, ROS and client data; full export on exit | Yes | - | - | R80, R84, R86 |
| 20 | **Adviser (consultant) console.** One login, many firms; firm switcher; cannot sign as officer | Switcher only | Portfolio dashboard, bulk template updates, white-label PDFs | Revenue-share billing | R75 |
| 21 | **Risk assessment module** (60 firms on the full regime, and all online firms) | Word template only | Full module: 3 factors, cage statistics, probability and impact, methodology document, 3-year review, new-zone report | - | R10-R15 |
| 22 | **Online operator pack** | - | RO for deposits, withdrawals, bets and wins of US$ 2,500 or more; platform CSV import; online IAOC | - | R3, R38 |
| 23 | **Information requests and remediation log** | Free-text IAOC item 12 | Full registers, voluntary-correction record | - | R79, R81 |
| 24 | **UIF exemptions, group policies, multiple obliged activities** | - | Yes | - | R5, R7, R39 |
| 25 | **Betting-shop network add-on** (23 holders, 4,497 shops) | - | - | Agent app for client capture at shops; agent due diligence; per-shop pricing | 02 file |

**Why this cut.** The MVP covers every duty that a small slot-room firm faces in its first year under the new rule. It leaves out the risk module (needed by only 60 of 301 firms), the online pack (49 firms, already served by platforms) and the betting-shop add-on. The first IAOC under the new content rules is the hard sales deadline, so the IAOC generator is in the MVP even though it is used once a year.

**Build nothing for screening data that can be bought, and file nothing.** Only the registered officer can use Portal PLAFT, ROSEL and SISDEL with secret codes (Norma Art. 14.6, 15.3, 26; [01 file](01-law-and-requirements.md)). The product prepares files and records receipts. It never logs in to a state portal.

## Key flows

### Flow 1: Firm set-up (target: under 45 minutes, done by the officer)

1. Sign up with the firm's RUC. The app pulls the firm's rooms, addresses, departments, machine counts and table games from MINCETUR's public room register (see Data sources).
2. The app shows the regime: "Risk assessment: required / not required" (casino room, 500+ machines, or a room in Tacna, Puno, Ucayali, Loreto, Tumbes or Madre de Dios) and "GM may act as officer: yes / no" (MEPECO, 10 or fewer workers, no group, gaming only). R2, R4.
3. The officer enters the officer and alternate data (kept in a restricted area) and the SISDEL appointment date, if any. The app sets the officer-event clocks. R72-R74.
4. The officer uploads the staff list (Excel template) and the shareholder and manager list. Excluded roles are tagged. Each in-scope person gets a self-service link for the Art. 11 sworn statement. R6, R54.
5. The officer adds suppliers that relate directly to gaming (slot vendor, SUCTR vendor, cash transport, promotions supplier). R64.
6. The app generates the manual, code of conduct and policies from lawyer-approved templates, filled with firm data. The GM approves in the app (body, date, minutes upload). Receipt statements go out with a 30-day deadline. R68-R69.
7. Screening runs on all people and suppliers loaded. The dashboard shows the first gap list.

### Flow 2: Cash-out of US$ 2,500 or more at the cage (target: under 3 minutes for a known client)

1. The cashier opens "Nueva operación" on the cage tablet. The amount in soles is converted with last month's SBS average selling rate. The app says "Registrar en RO: sí". R27, R29.
2. The cashier types the DNI or carné de extranjería number. A known client's data appears with "last verified" date. A new client gets the Art. 10.1 form. R16, R25.
3. Screening runs as the name is saved. A UN-list hit stops the flow and alerts the officer (freeze path). A PEP or non-resident answer routes to EDD: the operation can be recorded, but the client is "pending senior approval". R20-R21, R49, R52.
4. The client reviews and signs the SBS sworn statement on the tablet. The PDF, the form version, a timestamp and a hash are stored. R17.
5. If the client refuses, the cashier taps "Se niega". The app records "operation not to be executed" and opens an "evaluate ROS" task for the officer. R19.
6. The RO row is saved with the place (room), payment method, the client's own account number if paid by transfer, and origin of funds. Edits after save are corrections with a reason. R31-R32.
7. Any staff member can tap "Inusual" to escalate. Only the officer sees the escalation. R40.

### Flow 3: Promo and raffle winners (every winner, any amount)

1. The room manager creates the promotion (type, date, time, place, prize, value, currency) or imports the day's winners from the promo system's export. R28, R35.
2. Each winner is matched to a client file or a new client form opens. Winners sign the sworn statement on the tablet.
3. The app flags repeat winners and winners linked to staff (v1 rules; MVP shows a simple "won N times in 30 days" badge). R42.

### Flow 4: Daily import from the slot or cash system

1. At closing, the cashier or officer uploads the day's ticket-redemption or cash-out export (CSV or Excel). The first time, they map columns once; the mapping is saved.
2. The app lists suggested RO rows above the threshold. Each needs client data and confirmation. Rows not confirmed by day end are "late" and logged with their entry time. R32, R35.

### Flow 5: Unusual operation to ROS within 24 hours

1. The officer opens the case from the escalation or a rule hit. The case holds fields (i)-(xi) of Art. 15.2.1, person data with role, and alert signals with their source. R43.
2. Outcome A, "not suspicious": the officer must write the reason. The case goes to the register of unusual operations not reported. R44.
3. Outcome B, "suspicious": a 24-hour countdown starts, with reminders at 12 hours and 2 hours. The app builds a ROSEL draft and an attachment bundle. An automatic check blocks the export if the firm's name, RUC or the officer's name appears in the narrative. R45-R46.
4. The officer files in ROSEL with their secret codes, outside the app, and types the ROSEL number and date. The case shows "filed in X hours". R47.

### Flow 6: List update and re-screening (automatic)

1. A job fetches the UN, OFAC and EU lists several times a day and stores each version with a hash.
2. On a change, the app re-screens all clients, beneficiaries, workers, directors, suppliers and past RO rows. R51.
3. Possible matches go to the officer's review queue with the reason for the match. "False positive" needs a note.
4. A confirmed UN match opens a freeze case: freeze steps, "notify UIF without delay", and a log of the reply. R52.

### Flow 7: New hire, induction and annual training

1. HR adds the worker (role, start date). In-scope roles get a self-service link for the Art. 11 file and a 30-calendar-day induction task. R54, R57.
2. The officer runs the induction (in person or by video) and records it; the worker e-signs. The task closes only with a record. R57.
3. Once a year the officer plans sessions by role. The syllabus is checked against the 11 minimum topics. Attendance and certificates are stored per person. On 1 November the app lists who has not been trained this year. R59-R62.

### Flow 8: Year-end IAOC and IAI (1 Dec to 15 Feb)

1. On 1 December the app runs a data-quality check: RO rows with missing fields, unsigned receipts, overdue refreshes, untrained staff.
2. In early January it pre-fills the IAOC with the 13 items, including monthly statistics, and produces the UIF and MINCETUR versions. R76.
3. The internal auditor (not the officer) completes the 10-point IAI checklist with linked evidence. R78.
4. The GM approves both by 30 January; the app records body, date and minutes. R77.
5. The officer sends the IAOC and IAI to UIF via Portal PLAFT and to MINCETUR by its channel, then uploads both receipts by 15 February. R77.

### Flow 9: Adviser with many client firms

1. The adviser is invited by each firm's officer or GM. They get the "asesor" role in that firm only.
2. The portfolio view lists every firm's open deadlines and gaps. The adviser can run a training for staff from several firms and issue certificates. They cannot mark themselves as officer or open ROS content unless the officer grants it. R75, R83.

### Flow 10: Inspection

1. MINCETUR arrives. The officer selects a date range and clicks "Paquete de inspección".
2. The app builds a ZIP and a merged PDF: manual and code with receipts, officer documents, training and inductions, client files linked to RO rows, the RO with backup proof, unusual-operation and ROS registers (ROS content only for the officer), screening logs, worker and supplier files, IAOC and IAI with receipts, and the risk report where required. R82.

## Screens

1. **Panel (dashboard).** Traffic-light tiles for the 10 duty areas (RO, clients, screening, cases, staff files, induction, training, suppliers, documents, annual report). A "Today" list of tasks. A countdown banner for any open ROS clock or freeze case. Officer and GM views differ.
2. **Calendario.** Month view of all deadlines, with Peruvian holidays shaded. Filter by area and room.
3. **Caja (cage mode).** Large-button tablet screen: "Nueva operación", "Ganador de promoción", "Buscar cliente", "Inusual". Nothing else. Locks after 2 minutes idle.
4. **Registro de operaciones (RO).** Table by date with filters (room, type, month, status). Row detail shows client, amounts, FX rate used, who entered it and when, corrections history. Buttons: import, export to SBS template, backup copy, mark period as sent and upload receipt.
5. **Importar.** Upload, column mapper with a live preview, saved mappings, suggestion list with "confirm" and "discard (reason)".
6. **Cliente.** Header with name, ID, PEP and EDD badges, last verified date. Tabs: data (Art. 10.1), sworn statements (versions and PDFs), RO rows, screening history, cases (officer only).
7. **Coincidencias (screening hits).** Queue of possible matches with side-by-side comparison, match reasons and list version. Actions: false positive (note), confirm (opens freeze case or EDD).
8. **Casos (officer only).** List of unusual-operation cases with status and age; ROS countdown; register of non-reported cases. Case page with the 15.2 fields, attachments, decision, ROSEL draft export and receipt fields.
9. **Personal.** Workers and directors with file completeness, last yearly check, induction status, training this year, receipt statements. Self-service link sender.
10. **Capacitaciones.** Sessions, attendance, topic coverage against the 11 topics, certificates, the "not yet trained this year" list.
11. **Proveedores.** Register with refresh due dates, screening status, clause flags.
12. **Documentos.** Manual, code, policies and templates with versions, approval records and receipt progress (for example "41 of 45 signed").
13. **Oficial de cumplimiento.** Restricted. Appointment pack, events (change, removal, vacancy, alternate) with their clocks, SISDEL receipts.
14. **Informe anual.** Wizard: data checks, IAOC preview (UIF and MINCETUR tabs), IAI checklist, approvals, receipts.
15. **Inspección.** Date range picker and pack builder with progress.
16. **Configuración.** Firm profile, rooms, thresholds, FX table and source, holiday table, users and roles, retention, data-processing agreement.
17. **Cartera (adviser).** All firms, their scores and next deadlines.
18. **Self-service pages.** Worker, director and supplier forms and signatures, opened by a one-time link sent by e-mail or WhatsApp. Mobile-first.
19. **Bitácora (audit log).** Officer and admin only; filter by user, record and action; export.

## Data sources and integrations

**Bottom line.** No state portal has an API. The officer must file everything by hand with secret codes (Norma Art. 14.6, 15.3, 27.3, 29.3, [Res. SBS 01015-2026, MINCETUR copy](https://consultasenlinea.mincetur.gob.pe/casinos/Splaft/pdf/Resoluci%C3%B3n_SBS_01015_2026.pdf)). So the product's job is to keep the records and produce files that are ready to upload or copy. The good news: every outside data feed the MVP needs is free and machine-readable. I tested each one on 10 Oct 2026.

| # | Source | What it gives | How to get it (tested 10 Oct 2026) | Licence and cost | Portal takes uploads? | Use | Phase |
|---|---|---|---|---|---|---|---|
| 1 | **MINCETUR room register** | Per room: firm RUC and name, room name, licence resolution, room code, validity date, machines, tables, address, district, province, department | The public page ([register](https://consultasenlinea.mincetur.gob.pe/casinos/Registros/registros.html?c=r_salasjuegos)) loads its data from `POST https://consultasenlinea.mincetur.gob.pe/webCasinos/sistema/ws/wsConsultaWeb.asmx/listarConsultasRegistros` with body `{"objEnCon":{"CRITERIO":"1","DES_CRITERIO":"","OPR":12}}`. My call returned 675 rooms from 301 RUCs (578 KB JSON), matching the 02 file's count. | Free. Undocumented; no published terms (unverified). Cache nightly; allow manual edit if it breaks | n/a | Pre-fill rooms, departments and machine counts at sign-up; compute the Art. 4.1 risk-assessment trigger (R2); IAOC item 13 (room locations) | MVP |
| 2 | **MINCETUR online licence and betting-shop registers** | 49 online firms; 4,497 betting shops under 23 holders | [Licence holders](https://apuestasdeportivas.mincetur.gob.pe/Titulares_autorizacion.html); [betting shops](https://apuestasdeportivas.mincetur.gob.pe/Registro_Salas_apuestas_deportivas.html) (counts from the [02 file](02-market-and-competition.md)) | Free | n/a | Pre-fill online firms and shop lists | v1 / later |
| 3 | **FX rate for the RO threshold** | Daily "TC Sistema bancario SBS (S/ por US$) - Venta" | BCRP API, series `PD04640PD`: `https://estadisticas.bcrp.gob.pe/estadisticas/series/api/PD04640PD/json/2026-09-01/2026-09-30` returned 22 daily values ([BCRP API](https://estadisticas.bcrp.gob.pe/estadisticas/series/api/PD04640PD/json)). Their average was S/ 3.3832, so the October 2026 threshold is **S/ 8,458.07** (US$ 2,500 x 3.3832, my calculation). | Free, no key | n/a | R29: average of the previous month's SBS daily selling rates (Norma Art. 14.3). The BCRP series is labelled as the SBS rate; the officer confirms it once and can override. The SBS site itself returned a bot-protection page to my script (Incapsula), so scraping SBS is not reliable | MVP |
| 4 | **UN Security Council consolidated list** | 736 individuals and 274 entities, generated 9 Oct 2026 | `https://scsanctions.un.org/resources/xml/en/consolidated.xml` redirects to a signed download (2.2 MB XML) ([UN list](https://scsanctions.un.org/resources/xml/en/consolidated.xml)) | Free | n/a | Muy grave if not checked (8 UIT). Screen everyone; re-screen on change; freeze path (R49-R52) | MVP |
| 5 | **OFAC SDN list** | 19,416 entries, published 9 Oct 2026 (29 MB XML) | [OFAC SLS export](https://sanctionslistservice.ofac.treas.gov/api/PublicationPreview/exports/SDN.XML) | Free, US government data | n/a | Norma Art. 25(g) (R50) | MVP |
| 6 | **EU consolidated financial sanctions list** | 6,241 entries | [EU FSF XML, public token](https://webgate.ec.europa.eu/fsd/fsf/public/files/xmlFullSanctionsList_1_1/content?token=dG9rZW4tMjAxNw) returned a file generated 22 Sep 2026, so 18 days old. Register for a personal token to get the current file (free) | Free | n/a | Norma Art. 25(g) (R50) | MVP |
| 7 | **FATF high-risk and monitored jurisdictions** | Country lists after each FATF plenary | [FATF page](https://www.fatf-gafi.org/en/topics/high-risk-and-other-monitored-jurisdictions.html) (returned 403 to my script, so enter by hand about three times a year) | Free | n/a | Tag clients by nationality and residence; staff notice with read receipts (R50, R53) | v1 |
| 8 | **SBS list of PEP functions and positions** | The positions that make someone a PEP. Since Res. SBS 00199-2025 the list is closed ("taxativa"), but firms must still catch other PEPs who fit the definition | Annex to Res. SBS 4349-2016 as amended ([SBS news](https://www.sbs.gob.pe/noticia/detallenoticia/idnoticia/3801); [LP Derecho](https://lpderecho.pe/sbs-incorpora-mejoras-norma-personas-expuestas-politicamente-resolucion-00199-2025)). Load by hand as a versioned picklist | Free | n/a | PEP question on the client form and the PEP picklist (R22-R24) | MVP |
| 9 | **PEP names (optional)** | OpenSanctions shows 1,336 Peru-linked PEPs, but only one Peruvian source (Congress, 592 entities); the rest come from Wikidata ([OpenSanctions Peru](https://www.opensanctions.org/countries/pe/); [Congress dataset](https://www.opensanctions.org/datasets/pe_congreso/)) | API | Data is CC BY-NC; commercial use needs a licence. API credits cost EUR 0.10 to 0.03 per query depending on bundle ([OpenSanctions API](https://www.opensanctions.org/api/)) | n/a | Thin coverage for Peru. Rely on the client's sworn PEP answer plus the SBS positions list in the MVP; test OpenSanctions in v1. Contraloría's public interest declarations (SiDJI) list officials, but no bulk download was found ([MEF on SiDJI](https://www.mef.gob.pe/es/tematica-de-integridad/declaraciones-juradas-de-interes)) | v1 (optional) |
| 10 | **SBS client sworn-statement model** | The mandatory client form for 01015-2026 (natural person; a file of about 131 KB, per a search summary) | [SBS forms page](https://www.sbs.gob.pe/prevencion-de-lavado-activos/Supervisados-UIF/Modelo-de-Declaracion-Jurada) (blocked to my script; download by hand) | Free | n/a | Art. 10.3 says firms "must use" this format and may use "digital mechanisms" for filling in and signing ([Norma Art. 10.3](https://consultasenlinea.mincetur.gob.pe/casinos/Splaft/pdf/Resoluci%C3%B3n_SBS_01015_2026.pdf)). Render it field-for-field as a PDF; the lawyer checks the layout | MVP |
| 11 | **Portal PLAFT: RO template and instructions; IAOC to UIF** | The RO file structure; the place to send the RO and the IAOC | Only the registered officer can log in (Norma Art. 14.6, 27.3) | Free | Yes, the RO is "sent" on the template. File type and frequency are unverified | Configurable export mapping (R36). Get the template from a partner officer before coding the mapping. Whether an officer may share it is unverified | MVP (mapping placeholder until the template is in hand) |
| 12 | **ROSEL** | ROS and, since April 2026, "Crear alerta" | Officer only; uses the "Plantilla ROSEL" from Portal PLAFT (Norma Art. 15.3; [El Peruano on alerts](https://elperuano.pe/noticia/294259-sbs-aprueba-guia-de-identificacion-y-reporte-de-alertas)) | Free | Template-based; web form or file upload is unverified | ROSEL draft in the template structure plus attachments (R46). The ROS must not name the officer or the firm (Art. 15.3) | MVP |
| 13 | **SISDEL** | Officer appointment, changes, vacancy, alternate | `plaft.sbs.gob.pe/sisdel`, online request plus attachments (Norma Art. 21) | Free | Online form with attachments | Appointment pack and deadline clocks only (R72-R73) | MVP |
| 14 | **MINCETUR (DGJCMT) IAOC channel** | Where the IAOC and IAI go | "the physical or electronic means it determines" (Art. 27.3). The current channel and format are unverified; MINCETUR's 2017 talk said its format differs from the UIF's ([MINCETUR 2017](https://consultasenlinea.mincetur.gob.pe/casinos/Agenda%20_Noticias/pdfs/2017/Presentacion_Charla_SPLAFT.pdf)) | Free | Likely a PDF upload through its virtual front desk (unverified) | IAOC "MINCETUR version" as Word and PDF (R76) | MVP |
| 15 | **SUNAT reduced RUC register** | RUC, name, taxpayer status, address condition, ubigeo, tax address; annex addresses ([SUNAT guide](https://orientacion.sunat.gob.pe/padron-reducido-del-ruc-para-descarga)) | `http://www2.sunat.gob.pe/padron_reducido_ruc.zip`: 394 MB ZIP, last modified 10 Oct 2026 07:36 GMT (my HEAD request) | Free | n/a | Auto-fill suppliers and legal-person beneficiaries; flag inactive RUCs (R22, R64) | v1 |
| 16 | **RENIEC identity check (Consulta en Línea)** | Name and data behind a DNI | Needs a signed agreement with RENIEC and, since May 2024, a DNIe login. Fees in 2025 were S/ 0.90-1.60 per query by data level ([RENIEC to Congress, May 2025](https://www.congreso.gob.pe/Docs/comisiones2024/Ciencia/files/reniec_congreso_05may25_(1).pdf), per search summary; [Andina](https://andina.pe/ingles/noticia-reniec-suspendio-hasta-abril-a-71-usuarios-mal-uso-consulta-linea-982292.aspx)) | Per query, contract with the firm | n/a | Not in the MVP. Each firm would hold its own agreement. Do not use unofficial "DNI API" sites: RENIEC warns they are not official, and they create a data-protection risk | Later |
| 17 | **Cage, ticket and promotion exports (SUCTR and casino systems)** | Ticket redemptions, cash-outs, promo winners | Every room's machines link in real time to MINCETUR and SUNAT through a SUCTR (DS 015-2010-MINCETUR; [SUNAT note](https://www.sunat.gob.pe/legislacion/oficios/2012/informe-oficios/i092-2012.pdf)). 29 vendors are registered (02 file). I found no public export format | Depends on vendor | n/a | Generic CSV/XLSX mapper in the MVP; collect real exports in the pilot; vendor presets in v1 (R35) | MVP (generic) |
| 18 | **Peruvian holidays** | 16 national holidays in 2026, including 28-29 July, 8 Dec and 9 Dec ([La República](https://larepublica.pe/economia/2025/12/26/feriados-2026-en-peru-calendario-oficial-con-fines-de-semana-largos-y-puentes-para-planificar-tu-ano-1697462)). The government also declares extra non-working days for the public sector, such as 27 Jul 2026 (DS 075-2026-PCM, per [Infobae](https://www.infobae.com/peru/2026/06/30/feriados-de-julio-2026-lista-de-los-dias-libres-y-no-laborables-segun-el-calendario-oficial-en-peru/)) | No API; keep a table we update each December | Free | n/a | Business-day deadlines (R9). Keep public-sector non-working days as a separate type: they may move deadlines that fall on SBS or MINCETUR (my inference, unverified) | MVP |
| 19 | **UIT value** | S/ 5,500 in 2026 ([El Peruano](https://elperuano.pe/noticia/285208-mef-establece-en-s-5-500-la-unidad-impositiva-tributaria-para-2026)) | Yearly by hand | Free | n/a | Show fines in soles next to each gap | MVP |
| 20 | **Online platform exports** | Deposits, withdrawals, bets and wins | Vendor CSVs (SoftConstruct, Techsson, Calimaco, VPL per the 02 file); formats unknown | n/a | n/a | Online RO (R38) | v1 |

**What is missing from the state systems, and what we build instead.** The portals accept finished reports. They do not hold the client files, the RO in progress, training proof, refresh cycles, the unusual-operation analyses or the IAOC statistics ([01 file](01-law-and-requirements.md), Summary). That gap is the product.

## Data model

One PostgreSQL database. Every tenant table carries `firm_id`. Tables marked **append-only** never update or delete rows; a change is a new row that points to the old one.

**Tenancy, users and settings**
- `Firm`: RUC, legal name, segment (land, online, both), MEPECO flag, headcount, group link, risk-assessment trigger (computed), GM-as-officer eligibility (computed), retention years (default 5, R80), internal RO threshold and reason (R30).
- `Group`: name, member firms, corporate officer flag (R7).
- `Room`: MINCETUR room code, name, address, district, province, department, machines, tables, validity date, source snapshot date (R2, IAOC item 13).
- `User`, `Membership` (user, firm, role: officer, alternate, gm_approver, cashier, room_manager, hr, internal_auditor, adviser, admin), `MfaDevice`.
- `Exemption`: UIF letter number, date, duties switched off (R5).

**People and organisations**
- `Person`: names, ID type (SBS code), ID number, nationality, birth date, marital status, spouse, address, occupation (SBS code), phone, e-mail. One table for clients, workers, directors, shareholders, beneficial owners and supplier contacts, so one screening run covers all roles.
- `Organisation`: name, RUC or foreign ID, address, beneficial owners (links to `Person`).
- `PersonRole`: person, firm, role (client, worker, director, shareholder with %, manager, BO, supplier rep), start and end dates (retention starts at end).

**Client due diligence**
- `ClientProfile`: person, PEP status, PEP position (from `PepPosition` version), PEP relative, non-resident, linked to investigation, EDD flag, EDD approval (approver, date), last verified date (R20-R25).
- `SwornStatement` (**append-only**): person, SBS form version, answers (JSON), PDF file, signature image, signed-at timestamp, device ID, SHA-256 hash, refused flag (R17, R19).

**Operations register**
- `FxMonth`: month, source (BCRP series and URL), daily values, average, fetched-at, confirmed by (R29).
- `Promotion`: room, type, date and time, prize description, value, currency (R28, R31).
- `ROEntry` (**append-only**): firm, room, type (cash-out, promo prize; online: deposit, withdrawal, bet, win), operation date and time, entered-at, late flag, person, amount, currency, FX used, amount in US$, payment method, client's own account number, origin of funds, promotion link, import-row link, correction-of link and reason (R27-R33, R38).
- `ImportBatch`, `ImportMapping`, `ImportRow` (suggested, confirmed, discarded with reason) (R35).
- `ROExportMapping` (versioned field map to the Portal PLAFT template) and `ROSubmission` (period, file hash, sent date, receipt file) (R36-R37).
- `BackupCopy`: period, file location in the second storage, hash, last restore test (R34).

**Screening**
- `ListSource` and `ListVersion` (source, fetched-at, publish date, file hash, record count), `ListEntry` (normalised names, aliases, birth dates, nationality, programme).
- `ScreeningRun` (trigger: onboarding, list change, scheduled), `ScreeningResult` per person or organisation (no match, possible match with score and reasons), `HitDecision` (false positive with note, confirmed) (R49-R51, R55).

**Cases (officer-only compartment, separate encryption key)**
- `Escalation`: who raised it, when, RO or person link (R40).
- `UnusualCase`: fields (i)-(xi) of Art. 15.2.1, persons and roles, alert signals with source, decision, reasons (R43-R44).
- `RosDraft`: suspicious-at timestamp (starts the 24-hour clock), narrative, attachments, leak-check result, ROSEL number and date (R45-R47).
- `AlertDraft` (v1, R48), `FreezeCase`: list entry, steps, UIF notice date, reply (R52).

**Staff, training and suppliers**
- `StaffFile`: person, role category (in or out of scope, R6), ID copy, records, work history, assets, yearly check dates, change reports (R54-R56).
- `Induction`: person, start date, due date (+30 calendar days), record file, e-signature (R57).
- `TrainingSession`: date, place, duration, modality, trainer, syllabus topics (map to the 11 topics), certificate type; `Attendance` (R59-R63).
- `Supplier`: organisation or person, fields 1-11 of Art. 12.1, gaming-related flag, clauses included, refresh due date, `SupplierReview` notes (R64-R66); `ThirdPartyStatement` (R67).

**Documents and governance**
- `DocumentTemplate` (lawyer-owned, versioned, with legal review date), `DocumentVersion` (firm copy, generated file, approval body, date, minutes), `ReceiptStatement` (the 10 fields, due date, signed-at) (R68-R71).
- `OfficerRecord` (restricted): officer and alternate data, appointment date, SISDEL dates; `OfficerEvent` with clocks (R72-R75). No field for UIF secret codes by default.
- `AnnualReport`: year, IAOC data snapshot (frozen JSON), UIF and MINCETUR files, IAI checklist answers and author, approvals, receipts (R76-R78).
- `InfoRequest`, `Finding` and `Remediation` (v1, R79, R81).

**Engine tables**
- `DeadlineRule` (rule ID, legal basis, trigger, offset, day type: business or calendar), `Holiday` (date, type), `Task` (rule, object link, owner, due, status, red/amber/green).
- `AuditEvent` (**append-only**, hash-chained): user, firm, action, object, read or write, timestamp, previous hash (R84).
- `RetentionHold`: object, earliest deletion date; deletion is blocked until then (R80).

**Code tables (versioned, editable by our content editor):** SBS ID types, occupations, operation types, funds types ([2016 annexes](https://consultasenlinea.mincetur.gob.pe/casinos/Splaft/pdf/RESOLUCION_SBS_N1695_2016_ANEXOS.pdf), to be replaced by the current Portal PLAFT tables); PEP positions; gaming alert signals; the 11 training topics; departments and ubigeo codes.

## Architecture and stack

### Recommendation: one plain monolith that AI agents can build in parallel

- **Language and framework:** Python 3.13 and Django 5.2 LTS (security support to April 2028, per the [Django download page](https://www.djangoproject.com/download/)). Django gives a built-in admin (the lawyer edits templates and code tables there), forms with validation, auth, Spanish (`es-PE`) translations and a clear "one app per module" layout. That layout is also the natural boundary for parallel agents.
- **Front end:** server-rendered HTML with HTMX and a little Alpine.js. No single-page app. The product is forms, tables and documents. The cage screen is a responsive page that works on a cheap 10-inch Android tablet. Rooms already have a live internet link, because every machine reports in real time through the SUCTR ([SUNAT note](https://www.sunat.gob.pe/legislacion/oficios/2012/informe-oficios/i092-2012.pdf)), so no offline mode is needed in the MVP.
- **Database:** PostgreSQL 17 with `pg_trgm` (fuzzy name search), JSONB (form answers, IAOC snapshots) and row-level security as a second tenant wall.
- **Background jobs:** a Postgres-backed queue (for example Procrastinate), so no Redis. Jobs: list refresh every 6 hours; delta re-screen on list change; FX fetch on the 1st of each month; deadline sweep every night at 06:00 Lima time; daily digest e-mail; RO backup copy nightly; retention sweep weekly.
- **Documents:** `docxtpl` for Word templates the lawyer can edit; LibreOffice in a sidecar container (for example Gotenberg) for DOCX to PDF; WeasyPrint for HTML to PDF (the SBS sworn statement, certificates); `openpyxl` for Excel exports; `pypdf` to merge the inspection pack.
- **Signatures:** a canvas signature pad (for example the MIT-licensed `signature_pad`) on the tablet. The PDF stores the image, timestamp, device and a hash. This is a "simple" electronic signature. Peru's Ley 27269 recognises electronic signatures, but full legal equivalence is given to digital signatures inside the official infrastructure (DS 052-2008-PCM, Art. 3) ([DS 052-2008-PCM](https://portal.ingemmet.gob.pe/documents/59082/1380545/DS-052-2008-pcm.pdf)). The Norma itself allows "digital mechanisms" for the client to fill in and sign (Art. 10.3). The lawyer must confirm that a tablet signature is enough for the client sworn statement and the staff receipts (open question).
- **Screening:** a module in the monolith. Normalise names (lower case, strip accents, handle Spanish double surnames in either order, drop particles such as "de", "del", "de la"), pull candidates with trigram search, score with `rapidfuzz` token ratios, adjust by birth year and nationality, and store the reasons. The three lists total about 27,000 entries, so screening is fast on one server.
- **Rules as data:** thresholds, deadline rules, IAOC structure and the RO export mapping live in versioned tables, each with "golden" tests. When the SBS changes the RO template or a deadline, we change data, not code (R36).
- **Multi-tenancy:** `firm_id` everywhere, Django query scoping, and Postgres RLS (`SET app.firm_id` per request). An adviser works in one firm at a time.
- **Case compartment:** case tables (unusual operations, ROS, alerts, freezes) and officer data are encrypted at field level with a per-firm key that only officer sessions unlock. Notifications never include case content.
- **No AI model inside the product at launch.** Case data must not go to an outside AI service. The founder uses AI to build the product, not to process customer data.
- **E-mail:** a transactional e-mail service with SPF, DKIM and DMARC. WhatsApp reminders in v1 (cost unverified).
- **Billing:** a hosted checkout from the founder's foreign company (see the 04 file). Keep it in a separate module so the provider can change.
- **Deploy:** Docker images, one VM to start, managed PostgreSQL, object storage, CI on every push (tests, tenant-isolation tests, golden rule tests, `bandit`, `pip-audit`, dependency updates).
- **Observability:** structured logs with no personal data; error tracking; uptime checks; a status page.

### Why not something else

- **A JavaScript single-page app with a separate API** doubles the code agents must keep consistent and makes PDF and form work slower. No user here needs offline or rich interaction.
- **Microservices** add deployment and security work with no benefit at 350 possible customers.
- **Low-code tools** cannot enforce append-only registers, row-level security and the officer-only compartment.

### Diagram

```
Cage tablet / laptop / phone (HTMX)
            |
         TLS proxy
            |
   Django app (web) -------- PostgreSQL 17 (RLS, PITR backups)
     |    |     |                    ^
     |    |     +-- Job workers -----+
     |    |           |  UN / OFAC / EU XML feeds (6-hourly)
     |    |           |  BCRP FX API (monthly)
     |    |           |  MINCETUR room register (nightly)
     |    |           +- PDF sidecar (DOCX -> PDF)
     |    +-- Object storage (encrypted files) --> nightly copy to a second provider
     +-- E-mail service (no case content in messages)
Officer files by hand in Portal PLAFT / ROSEL / SISDEL / MINCETUR and uploads receipts.
```

## Security, privacy and liability

### AML confidentiality comes first

- **Tipping off and ROS secrecy.** Revealing that UIF asked for or received information is a very serious breach (8 UIT). Missing the 24-hour ROS deadline is also 8 UIT ([01 file](01-law-and-requirements.md), duty table rows 17 and 35).
- **Officer identity.** The firm must keep the officer's identity confidential; breach is a serious infraction of 7 UIT (row 28 of the duty table). The officer's name must never appear in exports meant for third parties (R74).
- **Third parties.** If the firm uses a third party for identification or verification, the third party must give a sworn statement and is bound by the duty of reserve (Norma Art. 13.2-13.3, [PDF](https://consultasenlinea.mincetur.gob.pe/casinos/Splaft/pdf/Resoluci%C3%B3n_SBS_01015_2026.pdf)). Our screening may make us such a third party. The safe course: offer the sworn statement as a standard annex and accept the duty of reserve in the contract.
- **What the product does about it:** officer-only case compartment with its own key; our support staff cannot open it; no case content in e-mails, push messages or logs; internal auditors see only "ROS filed on time: yes/no" (R83); the ROSEL leak check (R46).

### Peru's data protection law

- **The law.** Ley 29733 and its new regulation, DS 016-2024-JUS, published 30 Nov 2024 and in force since 30 or 31 Mar 2025 (sources differ) ([IAPP](https://iapp.org/news/a/se-publica-el-nuevo-reglamento-de-protecci-n-de-datos-personales-en-per-); [Garrigues](https://www.garrigues.com/es_ES/noticia/peru-publica-nuevo-reglamento-ley-proteccion-datos-personales)).
- **Roles.** Each casino firm is the controller (titular del banco de datos) of its client and staff data. We are its processor (encargado). We sign a processing contract with each customer and list our sub-processors (hosting, e-mail). We are controller for our own user accounts and billing.
- **Reach.** The regulation applies to foreign controllers that offer goods or services to people in Peru, and to processors that handle data for a Peruvian controller wherever they are ([IAPP](https://iapp.org/news/a/se-publica-el-nuevo-reglamento-de-protecci-n-de-datos-personales-en-per-)). Foreign firms in scope must name a **representative in Peru** ([Garrigues](https://www.garrigues.com/es_ES/noticia/peru-publica-nuevo-reglamento-ley-proteccion-datos-personales), per search summary). Cost of a representative service: unverified.
- **Cross-border transfer.** Data may go only to countries with an adequate level of protection, or the exporter must ensure adequate treatment by contract (Ley 29733 Art. 15; regulation Arts. 18-20, per [IAPP](https://iapp.org/news/a/se-publica-el-nuevo-reglamento-de-protecci-n-de-datos-personales-en-per-)). The data authority approved **model contract clauses** in October 2022 (Resolución Directoral 074, per a [CERLATAM circular](https://www.cerlatam.com/wp-content/uploads/2025/12/Circular-Externa-CCM-v.2.pdf)). Put these clauses in our customer contract and in our hosting contracts. Whether customers or MINCETUR expect data in Peru is unverified ([01 file](01-law-and-requirements.md), open question 12).
- **Breach notice.** The controller must notify the authority within **48 hours** of learning of an incident; digital incidents also go to the National Digital Security Centre, and affected people must be told in plain language ([IAPP](https://iapp.org/news/a/se-publica-el-nuevo-reglamento-de-protecci-n-de-datos-personales-en-per-), per search summary; [LexLatin, Jun 2026](https://lexlatin.com/reportajes/proteccion-datos-personales-peru-empresas-oficial-cumplimiento-reforma)). Our contract should promise to tell the customer within 24 hours, so the customer can meet its 48.
- **Data protection officer.** Phased in by annual sales: firms above 2,300 UIT from Nov 2025, 1,700-2,300 UIT from Nov 2026, small firms from Nov 2027, micro firms from Nov 2028. It applies regardless of size when the business handles sensitive data or large volumes. The officer may be external ([LexLatin](https://lexlatin.com/reportajes/proteccion-datos-personales-peru-empresas-oficial-cumplimiento-reforma)). Our case: probably triggered early because we hold criminal-record data and PEP data for many firms (my view; unverified). An external part-time DPO is the cheap answer.
- **Database registration.** Registering a database with the authority is now free and approved automatically ([LexLatin](https://lexlatin.com/reportajes/proteccion-datos-personales-peru-empresas-oficial-cumplimiento-reforma), per search summary). Missing registration is one of the most common findings (same source). The product should give each customer a pre-filled description of its SPLAFT databases to register.
- **Fines.** Up to 100 UIT per infraction (about S/ 550,000), and the authority ran 760 inspections in 2025 ([LexLatin](https://lexlatin.com/reportajes/proteccion-datos-personales-peru-empresas-oficial-cumplimiento-reforma), per search summary).
- **AML retention beats erasure.** The Norma requires at least 5 years of records (Art. 28.1). Erasure requests for data under that hold are refused with the legal basis shown. When a customer leaves, we hand over a full export (PDF, CSV, JSON) and offer a cheap "archive only" plan, because the firm's duty continues (R80, R86).

### Security baseline for the MVP

- TLS everywhere; HSTS.
- MFA (TOTP) required for officer, alternate, GM, adviser and admin. Cashiers log in on a shared tablet with a personal PIN, inside a session opened by the room manager.
- Argon2 password hashing; login rate limits; 15-minute idle timeout on the cage screen.
- Role-based access plus Postgres RLS; automated tests that try cross-tenant reads on every table.
- Encryption at rest by the provider; envelope encryption for files; a separate per-firm key for the case compartment.
- Append-only audit log with a hash chain (R84); reads of RO, client and case data are logged too.
- Nightly encrypted backups plus point-in-time recovery; a copy at a second provider; a monthly restore drill that must reproduce the RO hash (R34).
- Support access only with the customer's time-limited consent, logged, and never to the case compartment.
- Weekly dependency updates; external penetration test before paid launch and once a year.
- Written policies (information security, incident response with the 48-hour clock, access control, backup, sub-processor list). These also answer customers' supplier due diligence under Art. 12.

### Liability

- **A tool and templates, not legal advice.** Every generated document shows "template version X, reviewed by [Peruvian law firm] on [date]". The officer and GM review and approve. The approval is recorded.
- **We never file.** Only the officer can use Portal PLAFT, ROSEL and SISDEL. Terms state this plainly.
- **Screening disclaimer.** A "no match" covers the named lists at a stated time. The officer decides on matches.
- **Cap.** Liability capped at the fees paid in the last 12 months; no liability for fines where the user ignored tasks or hits.
- **Change commitment.** Update templates and rules within 30 days of a relevant SBS or MINCETUR change and notify users. This is also the renewal story.
- **Insurance.** Professional indemnity and cyber cover for the founder's company (price unverified).
