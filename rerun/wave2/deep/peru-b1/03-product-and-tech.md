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
