# Argentina B1: UIF compliance tool for real estate brokers: product and technical design

Part 3 of the Argentina B1 deep dive: product, technical design and development plan. Written 10 Oct 2026. Builds on the [B1 report](../reports/argentina-b1.md), [01 Law and requirements](01-law-and-requirements.md) and [02 Market and competition](02-market-and-competition.md). "Duty #n" refers to the numbered duty table in 01, and "R#" to the 80 testable requirements in its "PRODUCT REQUIREMENTS" section. "My estimate" marks numbers I derived. "(unverified)" marks facts I could not confirm. Exchange rate: ARS 1,517 per USD, the BCRA official rate on 9 Oct 2026 ([BCRA API](https://api.bcra.gob.ar/estadisticascambiarias/v1.0/Cotizaciones/USD?fechadesde=2026-10-05&fechahasta=2026-10-10)).

Status: complete draft as of 10 Oct 2026 (open questions at the end).

## Summary

- **What to build.** A plain web app, in Spanish (es-AR), that keeps a broker's UIF file up to date between filings. It holds the client file (legajo), the sworn statements, RePET checks, the client risk rating, the operation log, the alerts register, the manual and the training log. It turns that data into the monthly report (RSM) files, the annual report (RSA) figures and an inspection pack. The UIF portal only receives reports; everything before filing is the product ([01](01-law-and-requirements.md), "The UIF portal stops at filing").
- **The UIF accepts bulk files, but only through a Windows app.** The RSM can be typed into the SRO+ web form or sent in bulk with SROMasivo, a Windows desktop app that reads one XML file per operation ([UIF RSM-Masivo](https://www.argentina.gob.ar/uif/rsm); [SROM manual](https://www.argentina.gob.ar/sites/default/files/manual_usuario_srom_v2.pdf)). I unpacked the v7.2 installer. It talks to a SOAP service at `masivo.uif.gob.ar/rsmservice.asmx`, downloads the XSD schemas for the logged-in subject type, and has an "Exportar esquemas" button ([installer zip](https://www.argentina.gob.ar/sites/default/files/sromasivoinstallerv7-2_.zip); my inspection, 10 Oct 2026). **The broker XSDs are not public, but any registered broker can export them.** Getting them from the first pilot broker is the critical path of the build.
- **No other report has a bulk channel.** The RSA, the suspicious report (ROS) and registration changes are web forms in SRO+ ([UIF RSA guide](https://www.argentina.gob.ar/uif/reporte-sistematico-anual-rsa); [UIF ROS guide](https://www.argentina.gob.ar/uif/instructivos/rosrft)). The product prepares the figures and texts, shows them field by field in the same order as the form, and records the control number the broker gets back. It never files on the broker's behalf and never stores SRO+ passwords.
- **Good free data exists.** RePET publishes its list as JSON: 959 persons (736 from the UN list, 223 Argentine entries) and 269 entities, last updated 9 Oct 2026 ([RePET personas.json](https://repet.jus.gob.ar/xml/personas.json); my download). The minimum wage (SMVM) series, needed for the 300 SMVM lease test, is a free government API with values up to April 2027 ([datos.gob.ar series API](https://apis.datos.gob.ar/series/api/series/?ids=57.1_SMVMM_0_M_34)). The BCRA publishes the official USD rate by API. CUIT check digits can be validated offline with an open-source library ([python-stdnum](https://pypi.org/project/python-stdnum/)).
- **PEP data is the weak spot.** There is no official PEP list. OpenSanctions holds 1,854 Argentine PEPs, mostly national legislators ([OpenSanctions Argentina](https://www.opensanctions.org/countries/ar/)), far fewer than the functions listed in Res. 35/2023. The signed PEP sworn statement stays the main control, with OpenSanctions as a paid helper at EUR 0.03-0.10 per check ([OpenSanctions API](https://www.opensanctions.org/api/)).
- **MVP scope (about 3 weeks of agent coding, sellable in 8 weeks):** firm set-up; client file with a WhatsApp-shareable client form and e-signed PEP, beneficial-owner and funds statements; RePET screening with dated evidence; client risk rating with 1/3/5-year refresh clocks; operation log with the 300 SMVM lease tracker; alert checklist and a restricted unusual-operations register with the 24-hour ROS clock; RSM XML export plus a field-by-field copy sheet; RSA calculator; manual generator with staff sign-off; training log; deadline calendar; inspection pack under 20 MB. **v1:** self-assessment (ITAER) wizard, reviewer (REI) and accountant workspace, OpenSanctions PEP checks, DNI barcode scan, Excel and Tokko imports, ROS draft builder. **Later:** colegio white-label, remote identity check through RENAPER, Uruguay.
- **Where it beats the incumbent.** AMLify (BDO) already covers most duties, sells by demo and shows no price ([02](02-market-and-competition.md)). The MVP's edge is self-serve set-up in one evening, a public price, the lease threshold tracker, a manual generator, an inspection pack and a seat for accountants.
- **Stack.** One Django monolith with HTMX and PostgreSQL, hosted in Frankfurt, which Argentina treats as an adequate country for data transfers ([Disp. 60/2016](https://www.argentina.gob.ar/normativa/nacional/267922/texto)). Python is chosen for lxml (XSD validation), docxtpl (Word templates) and rapidfuzz (name matching). Each Django app is one agent work stream.
- **Privacy.** Argentina's Law 25.326 applies. The broker is the data controller and we are its processor (Art. 25). Art. 25 also says a processor must destroy the data when the contract ends, which clashes with the broker's 10-year AML retention, so the product needs a full export and a cheap "archive only" plan ([Law 25.326](https://www.argentina.gob.ar/normativa/nacional/ley-25326-64790/actualizacion)). ROS work must be hidden from staff, colegios and reviewers (Res. 43 Art. 33).
- **Running cost:** about USD 100-170 a month at 50 customers, USD 350-380 at 300 and USD 690-1,040 at 1,000, including paid PEP checks from v1 (my estimates from [Render](https://render.com/pricing), [R2](https://developers.cloudflare.com/r2/pricing/), [Resend](https://resend.com/pricing) and [OpenSanctions](https://www.opensanctions.org/api/) prices). That is about USD 0.7-3.4 per customer a month, against a planned price of USD 12-49 ([02](02-market-and-competition.md)).
- **Cash to "sellable":** about USD 7,200-20,100 over 8 weeks, founder unpaid. Most of it is the penetration test (USD 3,000-8,000) and the Argentine lawyer and AML expert (USD 2,750-6,500). AI tools are about USD 600-1,200 (my estimates).
- **No local company is needed for the product.** Every MVP integration is either public (RePET, datos.gob.ar, BCRA) or run by the broker (SRO+, SROMasivo). Only direct links to RENAPER or the ARCA tax register need an Argentine taxpayer ID, and both can wait or go through a foreign vendor ([AFIP WSAA](https://www.afip.gob.ar/ws/documentacion/wsaa.asp); [Didit](https://didit.me/es/blog/argentina-renaper-dni-verification-api/)).

## Users and jobs

### Who uses the product

| Role (Spanish label) | Who it is | Main jobs | Rights in the app |
|---|---|---|---|
| **Sole broker** (corredor matriculado, sujeto obligado persona humana) | The licensed broker who works alone or with one assistant. About three in four Buenos Aires city brokers use a free webmail address, which suggests micro offices ([02](02-market-and-competition.md)) | Does everything: board duties and officer tasks fall on him (Res. 43 Art. 9, 11; [01](01-law-and-requirements.md) "Sole broker versus company") | Everything, including the restricted ROS area and billing |
| **Agency board** (órgano de administración) | Owners or directors of a brokerage company | Approve the manual, the ITAER, the officer's annual plan and the remediation plan (duties #6, #7, #11) | Approve documents; see dashboards; no ROS area unless also officer |
| **Compliance officer, titular and alternate** (oficial de cumplimiento titular y suplente) | Two board members, registered with the UIF (duty #2) | Run the programme; approve high-risk and PEP clients; analyse alerts; decide and file ROS; keep the unusual-operations register | Everything, including the restricted ROS area |
| **Staff** (colaboradores, martilleros, asistentes) | Agents and assistants who meet clients | Collect client data and documents; log operations; tick alert checklists; flag "something looks odd"; do yearly training | Own clients and operations; can raise a flag; never see the outcome of a flag (no tipping-off, Law Art. 21(c)) |
| **Accountant or consultant** (contador, asesor) | A firm that supports several brokers, often also an REI or the internal auditor ([02](02-market-and-competition.md) "Channels") | Set up and watch many brokers; prepare RSA figures; build the evidence pack | Per-broker grant from the broker; portfolio dashboard; no ROS area |
| **External reviewer** (revisor externo independiente, REI) | A UIF-registered natural person (duty #9) | Review two years of the programme and rate it | Read-only, time-limited workspace. Sees the monitoring process, but ROS identities are removed (Res. 43 Art. 33, [01](01-law-and-requirements.md) duty #26) |
| **Internal auditor** (companies without REI) | Staff or contractor | Yearly audit of AML areas (duty #10) | Read-only workspace, same redaction |
| **End client** (comprador, vendedor, locador, locatario, apoderado) | The broker's own customer | Fill in the identity form, upload the DNI, sign the PEP, beneficial-owner and funds statements | No account. A one-time secure link sent by e-mail or WhatsApp |
| **Colegio admin** (white-label, later) | A provincial broker colegio that resells the tool | Brand, members list, aggregate adoption figures | Never any client data and never ROS data. ROS must not reach the bodies that license brokers (Res. 43 Art. 33, [01](01-law-and-requirements.md) duty #26) |
| **Content editor** | Our Argentine AML lawyer and AML expert | Edit templates, risk tables, alert checklists, training text | Content area only; no customer data |
| **Platform admin** | The founder | Support, billing, list feeds | Support access only with the customer's time-limited consent, logged |
| **UIF inspector** | UIF Dirección de Supervisión | Asks for documents | No login. Gets one ZIP under 20 MB through the UIF's upload link ([UIF requests guide](https://www.argentina.gob.ar/instructivos/requerimientos)) |

### Jobs to be done (in the broker's words)

1. **"Is this deal in scope?"** Every sale is. A lease is only if the client's leases reach 300 SMVM in a year, at the SMVM of 31 Dec or 30 Jun ([01](01-law-and-requirements.md) "Who is obliged").
2. **"Get the client's data without chasing him."** Send a link on WhatsApp; get the DNI photo, the data list of Res. 43 Art. 19-20 and signed statements back, timestamped.
3. **"Check RePET and keep proof."** The UIF tells obliged subjects to keep a printed record of each RePET search with the date ([UIF RePET guide](https://www.argentina.gob.ar/uif/busqueda-del-terrorista)). Do it automatically, and again whenever the list changes.
4. **"Tell me the client's risk and when to refresh the file."** Low, medium or high, with reasons, and a 5, 3 or 1-year refresh date (duties #16, #19).
5. **"Do my monthly report by the 15th without retyping."** Every sale and qualifying lease in the UIF's format, checked against the UIF's own rules before upload (duty #28).
6. **"Fill in the annual report between 2 January and 15 March."** Counts of operations, volumes, clients by type and risk (duty #29).
7. **"If something is odd, tell me what to do, and start the clock."** Register the alert, analyse it, decide, and file a ROS within 24 hours of concluding there is suspicion (duties #24-26).
8. **"Have the manual, the sign-offs and the training ready."** Manual reviewed every 2 years; staff acknowledgements; yearly training with certificates (duties #6, #8).
9. **"Be ready if the UIF writes."** On-site requests need documents within 3 business days; remote ones the same, uploaded as one ZIP or RAR under 20 MB ([01](01-law-and-requirements.md) duty #31; [UIF requests guide](https://www.argentina.gob.ar/instructivos/requerimientos)).
10. **"Build the 2028 self-assessment from what I already have."** Clients, services, channels and geography, scored from two years of data (duty #5).
11. **(Accountant) "Show me all my brokers' gaps on one screen, and give the reviewer what he needs."**

The 2022 UIF fines on brokers list what inspectors punish: a deficient manual, no audits, no training, weak client files, no monitoring tools, missing PEP statements and no terrorist-list checks ([01](01-law-and-requirements.md) "What the broker cases punished"). Each MVP feature closes one of these.

## Feature map

### How the feature map follows the law

Every feature traces to a duty in the 01 table. The MVP covers what a broker needs every month and what inspectors fined in 2022. The v1 covers the biennial work (ITAER, REI) due again in April and August 2028, and the multi-client accountant view. "Later" holds items that need partners or a local entity.

### Feature map (MVP / v1 / later)

| Area | MVP (sellable in week 8) | v1 (months 2-6) | Later | 01 refs (duty #, requirement R#) |
|---|---|---|---|---|
| **Firm set-up** | Wizard: sole broker or company; colegio and licence number; UIF registration data; officer titular and alternate; branches; services (sales, leases); channels. Produces the firm profile used by every template | Change log for UIF data with the 5-business-day reminder | Multi-branch groups (Art. 13) | duties 1, 2, 34; R1, R2, R8, R10-R13, R80 |
| **Client file (legajo)** | Natural persons (fields a-i) and legal persons (fields a-m); representatives and proxies; beneficial owners at 10% or more; document uploads with "original seen by / on"; CUIT/CUIL check digit; ID number 3-8 digits | Excel/CSV import; duplicate merge; DNI PDF417 barcode scan on the phone | ARCA register look-up; RENAPER identity check via a vendor | duties 12, 13, 21, 35; R15-R22, R25 |
| **Client self-service link** | One-time link (e-mail or WhatsApp) to a mobile form: identity data, DNI photos, PEP sworn statement with the Res. 35/2023 text, beneficial-owner statement, source-of-funds statement, e-signature by OTP with timestamp and document hash | Liveness and RENAPER check (optional, paid per use) | Signed PDF with firma digital | duties 12-14, 20; R23, R26-R28 |
| **Screening** | RePET persons and entities, refreshed several times a day (RePET also carries the UN 1718 and 1737 proliferation lists: 80 DPRK and 43 Iran persons, 66 and 64 entities in my 10 Oct 2026 download); fuzzy matching; hit review with reasons; dated screening certificate; re-screen of the whole client base when the list changes; a confirmed match blocks the operation and opens a 24-hour RFT task with a neutral client status (R31) | OpenSanctions PEP and sanctions check; freeze-order sweep: paste a UIF freeze order and check every client within minutes | Paid local data (Nosis, Worldsys) if pilots ask | duties 14, 15; R29-R33 |
| **Client risk** | Rule table from Art. 23 factors (client type, activity, funds, volume, nationality, residence, geography, service, channel, payment method, PEP); low, medium or high; override with reason; approval by officer for high risk and PEP; refresh clock of 5, 3 or 1 years; transactional profile | Tunable weights per firm, with the lawyer's default; batch re-rating when rules change | duties 16-19, 33; R34-R39 |
| **Operations** | Sales and leases; parties with roles and shares; payments by method and currency; ARS equivalent at the BCRA rate; property with cadastral or registry ID; co-broker licence; **lease tracker** that sums each client's leases against 300 SMVM; habitual-client test at 700 SMVM | Tokko Broker import of contacts and closed deals; export of the CABA operations book (R79) | Other CRM connectors | duties 12, 18, 28, 35; R3-R7, R40, R71 |
| **Alerts and unusual operations** | The 15 indicators of Res. 43 Art. 31 that can be computed (for example cash, virtual assets, third-party payer, accounts in other names, shared addresses, border-zone property, resale within a year at 30% or more price change, sale 30% or more off the offer price, owner change just before closing, proceeds to a high-risk country), as listed in 01 R41; a closing checklist for the 16 that cannot be computed (R42); a review alert for every PEP operation (R43); staff "odd" flag; restricted unusual-operations register with the 8 fields of Art. 32; ROS clock (24 hours from conclusion, 90 days from the operation) | ROS draft builder in the SRO+ field order (persons, facts, four free-text boxes); RFT and proliferation drafts | duties 24-27; R41-R48 |
| **RSM (monthly report)** | One XML file per operation, built from the broker XSD exported from SROMasivo, validated with the XSD and the UIF's extra rules; ZIP to drop into SROMasivo's import folder; copy sheet for typing into the SRO+ web form; control-number capture; "nothing to report this month" record | Rectification files (original control number block); annulment guide | duty 28; R49-R53 |
| **RSA (annual report)** | Calculator for sections 3 and 4 (services, operations, volumes, cash volume, client counts and risk percentages) and a checklist for sections 1 and 2; constancia upload | Year-on-year comparison | duty 29; R54 |
| **Manual and governance** | Manual generator (lawyer-approved Word template filled with the firm profile); version history; staff acknowledgement by e-signature; 2-year review reminder | Officer's annual work plan and report templates; board approval records; remediation plan tracker | duties 3, 6, 7, 11; R59-R61, R65 |
| **Training** | Training register; certificate upload (for example free GAFILAT courses); yearly reminder per person | Our own 45-minute course with quiz and certificate, by role; staff screening records (R63) | Colegio-branded courses | duty 8; R62, R63 |
| **Self-assessment (ITAER)** | Data collection only (the MVP records what the 2028 report needs) | Wizard: inherent risk by factor from real data, control effectiveness, residual risk, risk tolerance statement, methodology document, PDF; board approval | Versioned methodology for the 2030 review | duties 4, 5; R55-R58 |
| **REI and audit** | — | Reviewer workspace with redacted ROS identities; reviewer file (15 items); findings and action plan | duties 9-11; R64, R66-R69 |
| **Accountant seat** | — | Portfolio dashboard across brokers; per-broker grants; RSA preparation for many clients | R69 |
| **Deadlines and reminders** | Calendar with RSM (1st-15th), RSA (2 Jan-15 Mar), ITAER (30 Apr 2028), REI (about 28 Aug 2028), manual review, file refreshes, training, ID expiry; e-mail digest | WhatsApp reminders through the Business API | duties 5, 9, 19, 28, 29; R8, R9, R11, R13, R14 |
| **Inspection pack** | One click: index PDF plus manual, approvals, training log, risk model, client list with ratings, screening certificates, RSM receipts; images downscaled so the ZIP stays under 20 MB; scope picker | Read-only "inspection room" link | duty 31; R73, R74 |
| **Records** | 10-year retention clocks from the operation or the end of the relationship; append-only audit log; full export (PDF, CSV, JSON, original files) | "Archive only" plan after cancellation | duty 30; R70-R72, R75-R78 |
| **Billing** | Card checkout in USD through Stripe Billing or Paddle (choice in [04](04-gtm-company-finance.md)); plans per seat type | Colegio invoicing | | — |

### Why this cut for the MVP

- **Monthly pain first.** The RSM is the only duty that comes back every month, and BDO wrote that brokers faced "muchas horas de trabajo extra" for it ([02](02-market-and-competition.md)). The lease tracker and the RSM export are the daily reasons to log in.
- **Inspection-proof second.** The 2022 fines were for missing paper, not for wrong analysis. The manual, sign-offs, training log, PEP statements and RePET proof are cheap to build and close those charges.
- **RSA by January.** The next RSA window opens 2 Jan 2027 ([01](01-law-and-requirements.md) "Upcoming changes"). A launch in mid-December 2026 must already include the RSA calculator.
- **ITAER and REI can wait.** They fall due again in April and August 2028. They are v1 features and a renewal story, not a launch need.
- **Nothing that needs a contract with the state.** RENAPER and ARCA links need an Argentine taxpayer ID and a certificate. They add little to a micro office in month one.

## Key flows

### Flow 1: First evening (target: under 60 minutes to a usable file)

1. The broker signs up with e-mail and a TOTP second factor. He picks "sole broker" or "company".
2. The wizard asks about 25 questions: licence and colegio, UIF registration date, services, branches, staff, channels, typical clients, payment habits, provinces. It takes 10-15 minutes.
3. The app generates the manual (Word and PDF) from the lawyer-approved template, fills in the firm's data, and asks the broker (or board) to approve it with an e-signature.
4. The broker adds staff by e-mail. Each one gets the manual and signs the acknowledgement on the phone.
5. The broker imports or types his open clients (MVP: typing or a simple CSV). Each client is screened against RePET at once.
6. The dashboard shows what is missing: "12 clients without PEP statement", "3 clients due for a refresh", "next RSM due 15 Nov".

### Flow 2: New client by WhatsApp (target: under 10 minutes of broker time)

1. The agent creates the client with name, role and phone, and taps "Send form". The app builds a one-time link and opens WhatsApp with a ready message, using WhatsApp's click-to-chat link format, which needs no paid API ([WhatsApp click to chat](https://faq.whatsapp.com/5913398998672934)).
2. The client opens the link on his phone. He fills in the Art. 19-20 fields, photographs both sides of the DNI, reads the PEP rule and signs the PEP sworn statement, the beneficial-owner statement (for companies) and the source-of-funds statement. Signing uses a 6-digit code sent to the same phone or e-mail. The app stores the text shown, the timestamp, the IP address and a SHA-256 hash of the signed PDF. This is an electronic signature under Law 25.506 Art. 5 ([Law 25.506](https://www.argentina.gob.ar/normativa/nacional/ley-25506-70749/actualizacion)). The PEP rule allows electronic statements with evidence ([01](01-law-and-requirements.md) duty #14).
3. The app checks CUIT/CUIL check digits, screens the client and any beneficial owners against RePET, and proposes a risk level with reasons.
4. If the risk is high or the client is a PEP, the officer (or sole broker) gets an approval task. The operation cannot be marked "closed" until it is approved.
5. The client file shows "complete" with a refresh date.

### Flow 3: Sale closed, and the monthly report

1. The agent logs the operation: date, amount and currency, property (cadastral reference or registry number and address), payments (method, currency, amount), and the parties with their shares. Parties are picked from the client file, so nothing is typed twice.
2. The app converts foreign-currency amounts to pesos at the BCRA rate of the operation date (editable), checks that buyer shares and seller shares each total 100,00, and runs the alert rules.
3. On the 1st of the next month the dashboard shows "RSM October: 3 operations ready, 1 with a missing field".
4. The broker fixes the gap and clicks "Prepare RSM". The app writes one XML file per operation, validates each against the stored UIF XSD and the UIF's extra checks, and offers a ZIP.
5. **Path A (Windows):** the broker unzips into SROMasivo's import folder, clicks "Refrescar", "Importar y Validar", picks the period and "Reportar Operaciones" ([SROM manual](https://www.argentina.gob.ar/sites/default/files/manual_usuario_srom_v2.pdf)). **Path B (Mac, phone, or one or two operations):** the app shows a copy sheet that follows the SRO+ web form field by field, with copy buttons.
6. The broker pastes the control numbers back (or uploads the SROMasivo log file, which the app parses, v1). The month shows "filed" with proof.

### Flow 4: Lease that crosses the threshold

1. Leases are logged with start and end dates and the annual rent.
2. The app keeps a running yearly total per client across all his leases. It compares it with 300 times the SMVM in force on 31 December of the previous year and on 30 June of the current year, taking the lower value by default ([01](01-law-and-requirements.md) "SMVM reference values"). The SMVM values come from the official series ([datos.gob.ar](https://apis.datos.gob.ar/series/api/series/?ids=57.1_SMVMM_0_M_34)): ARS 334,800 for Dec 2025 and ARS 367,800 for Jun 2026, so 300 SMVM is ARS 100.4-110.3 million.
3. When a client crosses the line, the app marks his leases "in scope", asks for any missing due diligence, and adds them to the next RSM with the lease fields (contract dates, annual rent, landlord shares) ([UIF RSM lease guide](https://www.argentina.gob.ar/uif/instructivos/rsm-operaciones-de-locacion-de-inmuebles-cuyo-monto-anual-sea-igual-o-superior-300)).
4. Whether "several operations" can add up across separate leases of one client is an open legal question ([01](01-law-and-requirements.md)). The rule is a setting the lawyer controls, not code.

### Flow 5: Something looks odd

1. An automatic flag fires (for example "cash payment" or "payer is not a party"), or an agent taps "Something looks odd" and writes a line. The agent sees only "sent to the compliance officer".
2. The officer gets a case in the restricted area. The case carries the 8 fields of Art. 32: client risk, profile, operation, detection method, alert date and source, type, steps taken, and the final decision with reasons ([01](01-law-and-requirements.md) duty #25).
3. If the officer concludes there is suspicion, a 24-hour clock starts, capped at 90 days from the operation ([01](01-law-and-requirements.md) duty #26). The app produces a draft that follows the SRO+ ROS form (v1: full draft builder) and a reminder every few hours.
4. The officer files in SRO+ and records the control number. No message, e-mail subject or client-facing status mentions the case.
5. If the case is closed as "not suspicious", the reasons and documents stay in the register for 10 years.

### Flow 6: RSA in January

1. On 2 January the dashboard opens the RSA task for the previous year.
2. The app fills sections 3 and 4: operations and volumes by service, cash volume, total clients, natural and legal persons, and the percentages of high-risk clients, domestic PEPs, non-residents and non-resident PEPs ([UIF RSA guide](https://www.argentina.gob.ar/uif/reporte-sistematico-anual-rsa)).
3. For sections 1 and 2 (shareholders, board, employees, financial statement figures) it shows a checklist with the stored firm data and asks for the accounting figures.
4. The broker types the figures into SRO+, then uploads the constancia. The task closes.

### Flow 7: The UIF writes

1. The broker forwards or pastes the UIF request and picks the scope (period, clients, topics).
2. The app builds a ZIP: an index PDF, the manual and its approvals, acknowledgements, training log, risk model, client list with ratings and refresh dates, screening certificates, RSM receipts and selected client files. Images are downscaled so the ZIP stays under 20 MB, the UIF's upload limit ([UIF requests guide](https://www.argentina.gob.ar/instructivos/requerimientos)). If it would not fit, the app splits it and says so.
3. The restricted register is never included unless the officer adds it on purpose.

### Flow 8: Accountant with many brokers (v1)

1. Each broker grants the accountant access from his settings. The accountant sees a portfolio: overdue RSMs, missing statements, refreshes due, training gaps, RSA status.
2. In January the accountant prepares RSA figures for each broker in turn.
3. If the accountant is also the broker's REI, he opens the reviewer workspace, which shows the monitoring process with identities removed from ROS cases.

### Flow 9: A rule or a number changes

1. A new SMVM is published: the nightly job reads the series API and updates the threshold table. A new módulo value or a UIF resolution: the content editor updates the parameter table and templates, with a version and a legal-review date.
2. The UIF changes the RSM schema: SROMasivo warns that "el esquema utilizado para generar el archivo xml está desactualizado" (text found in the app). A pilot broker exports the new XSDs, we load them as a new version, and the golden tests show what changed.
3. Affected customers get one e-mail and a banner: what changed, what to do, by when.

## Screens

Mobile-first for the client form and staff screens; desktop-first for the officer and accountant screens. Spanish (Argentina) throughout, with "vos" in staff screens and "usted" in client-facing forms (my design choice).

| # | Screen | What it shows | Who |
|---|---|---|---|
| 1 | **Panel (dashboard)** | Next deadlines; RSM status for this month; counts of incomplete files, refreshes due, open alerts (for the officer only), training gaps; a "health" checklist that mirrors the inspector's list | All internal roles (alerts box only for officer) |
| 2 | **Set-up wizard** | 25 questions in 5 steps, with progress; preview of the manual | Broker, board |
| 3 | **Clientes (list)** | Search; filters by risk, completeness, refresh due, screening status; badge for PEP and for "lease in scope" | Staff, officer |
| 4 | **Ficha de cliente** | Tabs: data, documents, statements (signed PDFs with hash), beneficial owners and representatives, screening history with certificates, risk rating with reasons and approval, operations, timeline | Staff (no alert outcomes), officer |
| 5 | **Formulario del cliente** (public link) | 4 short steps on the phone: identity, DNI photos, statements, sign with code. Plain Spanish, large buttons, works on 3G | End client |
| 6 | **Operaciones (list) and Operación (detail)** | Sale or lease; property; parties with shares; payments; alerts fired; RSM status and control number | Staff, officer |
| 7 | **Locaciones (lease tracker)** | Per client: leases this year, running total, threshold at each SMVM reference, status "below", "near" (80%) or "in scope" | Staff, officer |
| 8 | **Reporte mensual (RSM)** | Month picker; operations included and excluded with reasons; validation results per operation; "Download ZIP for SROMasivo"; copy sheet; control-number entry | Officer, sole broker |
| 9 | **Reporte anual (RSA)** | Section-by-section values with the source of each number; checklist for sections 1-2; constancia upload | Officer, accountant |
| 10 | **Casos (restricted register)** | Unusual-operations register with the 8 fields; ROS clock; draft; decision log; export | Officer, sole broker only |
| 11 | **Documentos** | Manual versions, approvals, acknowledgements by person, other generated documents | Board, officer |
| 12 | **Capacitación** | People and their yearly training status; certificates; course player (v1) | Officer, staff |
| 13 | **Calendario** | All duties with dates; iCal feed | All internal roles |
| 14 | **Inspección** | Scope picker; preview of the index; size meter against 20 MB; download | Officer |
| 15 | **Configuración** | Users and roles, accountant grants, branches, parameters, billing, export, audit log | Broker, board |
| 16 | **Cartera (v1)** | Accountant's grid of brokers and their gaps | Accountant |
| 17 | **Contenido (admin)** | Templates, rule tables, alert checklist, parameter tables, versions with review dates | Content editor |

## Data sources and integrations

### The key fact: filing is manual or through a Windows app, and there is no public API

| Filing | Channel | Upload or manual? | What the product does | Source |
|---|---|---|---|---|
| RSM, sales and qualifying leases | SRO+ web form, or SROMasivo desktop app (Windows installer v7.2, .msi) | **Both.** Bulk: one XML file per operation in a folder; the app validates against XSDs it downloads for the subject type, asks for the period, sends, returns a control number per operation and moves files to "sent" or "error" folders | Generates and validates the XML files; ZIP; copy sheet for the web form; records control numbers | [UIF RSM-Masivo](https://www.argentina.gob.ar/uif/rsm); [SROM manual](https://www.argentina.gob.ar/sites/default/files/manual_usuario_srom_v2.pdf) |
| RSM rectification | SROMasivo, with a block that names the original control number | Upload | v1: generates rectification files | [rectification guide (zip)](https://www.argentina.gob.ar/sites/default/files/intructivo_rectificacionesmasivas_rsms.zip) |
| RSA | SRO+ web form ("RSA" tab) | **Manual entry only** (no bulk path found) | Calculates the values; copy sheet; constancia upload | [UIF RSA guide](https://www.argentina.gob.ar/uif/reporte-sistematico-anual-rsa) |
| ROS, RFT, proliferation report | SRO+ web form | **Manual entry only** | Draft in the form's order (v1); clock; control number | [UIF ROS guide](https://www.argentina.gob.ar/uif/instructivos/rosrft) |
| Registration and data changes | SRO+ online, with PDF attachments up to 20 MB each | Upload of PDFs | Reminder within 5 business days of a change; generates the model notes (v1) | [01](01-law-and-requirements.md) "Filing channels and formats" |
| ITAER self-assessment | "Sent to the UIF" (Res. 43 Art. 5). No broker guide found | Unclear (unverified) | v1: PDF report and methodology ready for whatever channel applies | [01](01-law-and-requirements.md) |
| UIF information requests | Link sent by e-mail | Upload of one ZIP or RAR under 20 MB | Inspection pack sized to fit | [UIF requests guide](https://www.argentina.gob.ar/instructivos/requerimientos) |

**What I found inside SROMasivo** (my inspection of the [v7.2 installer](https://www.argentina.gob.ar/sites/default/files/sromasivoinstallerv7-2_.zip), built 20 Sep 2024, on 10 Oct 2026):

- It is a .NET Windows app. Its configuration file names the service `https://masivo.uif.gob.ar/rsmservice.asmx`, a SOAP endpoint. Its error text points to `https://sro.uif.gob.ar` on port 443.
- No XSD files ship with the installer. The app's own strings include "Cargando Esquemas...", "Descargar esquemas", "Exportar esquemas", "Se exportaron los esquemas satisfactoriamente!" and "El sujeto especificado no posee Esquemas asociados". So the schemas are downloaded per subject type after login, and a logged-in user can export them.
- It checks a required `Version` attribute and warns when a file was built on an outdated schema.
- The one schema the UIF publishes openly (for a different report) shows the style: root element `<Operacion>`, odd element names such as `Reporte_de_Registraci93n_y_Cumplimiento` (with "93" in place of "ó"), and UIF-specific annotations such as `ValidarCUIT`, `ValidationExpression` regexes and `grupocondicional` rules ([sample XSD zip](https://www.argentina.gob.ar/sites/default/files/reporte_de_registracion_y_cumplimiento_v.1.2.zip)).

**Consequences for the build:**

- **Get the broker XSDs in week 0.** Ask the first pilot broker to install SROMasivo, log in and click "Exportar esquemas". Without them, the MVP falls back to the copy sheet only.
- **Generate element names from the XSD, never by hand.** The names contain encoded characters.
- **Validate twice.** lxml validates structure against the XSD. A small interpreter applies the UIF annotations (CUIT check, regexes, conditional groups) and the published rules: period not after the report date, CUIT/CUIL/CDI check digit matching the person type, DNI 3-8 digits, at least one payment, at least one buyer and one seller, a linked natural person for every legal person, and shares of 100,00 per side ([UIF RSM sale guide](https://www.argentina.gob.ar/uif/instructivos/rsm-compra-yo-venta-de-bienes-inmuebles)).
- **Do not call the SOAP service.** Sending from our servers would mean holding the broker's SRO+ password and using an undocumented interface. The broker clicks "send" in the UIF's own app. This also keeps the legal duty, and the liability for filing, with the broker.

### Source-by-source table

| Source | What we use it for | Format and endpoint | Licence and cost | Checked |
|---|---|---|---|---|
| **RePET** (Ministry of Justice terrorist register) | Screening of clients, beneficial owners, representatives and payers | JSON files: `https://repet.jus.gob.ar/xml/personas.json` (1.4 MB, 959 persons: 736 UN list, 223 Argentine list) and `.../entidades.json` (0.26 MB, 269 entities: 25 Argentine). Fields include names, aliases, dates of birth, documents, nationality, list type and source (UN committee, UIF, INTERPOL red notice, judicial orders). HTTP `Last-Modified` and `ETag` headers allow cheap polling | Public; free. The JSON path is not documented as an API, so it could change (my observation) | Downloaded 10 Oct 2026; Last-Modified 9 Oct 2026 07:13 GMT |
| UIF RePET guide | Evidence standard: keep a dated record of every search; RePET includes the UN Security Council consolidated list | Web page | Free | [UIF](https://www.argentina.gob.ar/uif/busqueda-del-terrorista) |
| **SMVM series** | 300 and 700 SMVM thresholds; 875 SMVM REI test | REST: `https://apis.datos.gob.ar/series/api/series/?ids=57.1_SMVMM_0_M_34` (monthly, pesos). Values already published to Apr 2027 (ARS 437,000) | Open data; free | Queried 10 Oct 2026 |
| **BCRA exchange rates** | ARS equivalent of USD operations in the RSM | REST: `https://api.bcra.gob.ar/estadisticascambiarias/v1.0/Cotizaciones/USD?fechadesde=...&fechahasta=...` | Free | Queried 10 Oct 2026 (ARS 1,517 on 9 Oct) |
| **CUIT/CUIL check digit** | Validate tax IDs offline, like the UIF app does | Python `stdnum.ar.cuit` | LGPL; free. Version 2.2 ([PyPI](https://pypi.org/project/python-stdnum/)) | Tested 10 Oct 2026 |
| **OpenSanctions** (v1) | Help with PEP detection; international sanctions beyond RePET | REST API, or bulk data under licence. 1,854 Argentine PEPs (sources: Chamber of Deputies 1,128 entities, Senate 291, plus RePET) | 2,000 free credits at sign-up; then EUR 50 for 500 queries (EUR 0.10) down to EUR 0.03 at 500,000 ([pricing](https://www.opensanctions.org/api/)) | [Argentina page](https://www.opensanctions.org/countries/ar/), 10 Oct 2026 |
| Res. 35/2023 PEP functions list | Text of the PEP sworn statement; "public function" questions | Legal text (via [01](01-law-and-requirements.md) duty #14) | Free | — |
| FATF high-risk lists; tax non-cooperative jurisdictions; Border Security Zones (Decree 253/2018) | Country and geography risk; border-zone alert | Parameter tables kept by the content editor | Free | [01](01-law-and-requirements.md) duties #33 and "Data differences" |
| **Didit RENAPER check** (later) | Remote identity check against the national registry, with selfie match | REST: one POST to `verification.didit.me/v3/database-validation/` with `services=arg_renaper` | USD 0.20 per conclusive check; the page also mentions 500 free verifications a month ([Didit, 20 May 2026](https://didit.me/es/blog/argentina-renaper-dni-verification-api/)). Avoids a direct RENAPER agreement. RENAPER sells web-service validation to entities that show a legitimate interest, per automatic query ([Boletín Oficial resolution](https://www.boletinoficial.gob.ar/pdf/linkQR/YmR6UGQ0Z2UvS2srdTVReEh2ZkU0dz09)); its fees were raised again in March 2026 ([Diario de Cuyo](https://www.diariodecuyo.com.ar/argentina/aumentan-los-dni-pasaportes-y-otros-tramites-cuales-son-los-nuevos-valores-del-renaper-n6567218)). Didit's own legal set-up and data location (unverified) | Not tested |
| ARCA (tax agency) register look-up (later) | Prefill company data from the CUIT | SOAP web services `ws_sr_padron_a13` and `ws_sr_constancia_inscripcion`, behind WSAA authentication with an X.509 certificate issued by ARCA and linked to a CUIT through "clave fiscal" ([AFIP WSAA](https://www.afip.gob.ar/ws/documentacion/wsaa.asp); [AfipSDK docs](https://docs.afipsdk.com/siguientes-pasos/web-services/padron-alcance-13)) | Free, but needs an Argentine taxpayer and certificate. Not for the MVP | — |
| **DNI barcode** (v1) | Prefill name, DNI number, sex and birth date from the PDF417 code on the DNI front | Read in the browser with an open-source barcode library | Free. The DNI front carries a PDF417 code with the holder's data ([yo-facturo](https://yo-facturo.com/blog/escanear-el-dni-en-tu-comercio-que-datos-trae-el-codigo-pdf417/); [Regula](https://regulaforensics.com/blog/argentine-id-card-processing/)). Exact field order (unverified) | — |
| **Tokko Broker** (v1) | Import contacts and closed deals for agencies on Tokko | REST API v1; the public root lists `contact`, `property`, `operations` and `signed_operations` resources; calls without an agency key return 401 ([API root](https://www.tokkobroker.com/api/v1/?format=json); [developers hub](https://developers.tokkobroker.com/)) | Free with the agency's own key (unverified); partnership terms unknown | Probed 10 Oct 2026 |
| WhatsApp | Send the client link and reminders | MVP: click-to-chat link opened on the agent's phone ([WhatsApp](https://faq.whatsapp.com/5913398998672934)). v1: Business API for reminders | Click-to-chat is free; Business API per-message fees (unverified) | — |
| Firma digital | Optional higher-grade signature for the manual and ITAER | The government's remote digital signature platform ([PFDR](https://firmar.gob.ar/)); a firma digital meets any legal requirement for a handwritten signature (Law 25.506 Art. 3) | Free for individuals (unverified) | — |

### What the product does about "the portal only takes reports"

- It keeps every record the portal does not: the 10-year client file, statements, screening proof, risk reasons, alerts and decisions, the manual and sign-offs, training.
- It makes the portal step short: a validated ZIP for SROMasivo, or a copy sheet for the web forms.
- It closes the loop: control numbers and constancias are stored next to the data they came from.

## Data model

### Principles

- **One firm, one tenant.** Every row carries `firm_id`. Accountants and reviewers get grants to a firm; they never see two firms in one query.
- **People once, roles many.** A person or company is stored once per firm and linked to operations by role (buyer, seller, landlord, tenant, proxy, beneficial owner, payer). The RSM is built from these links, so nothing is typed twice.
- **Evidence is immutable.** Signed statements, screening results, generated reports and approvals are stored as files with a SHA-256 hash and never edited. Corrections create a new version.
- **Rules and numbers are data.** SMVM values, the módulo, risk weights, alert rules, deadlines, templates and the RSM schema are versioned tables or files with a legal-review date. A UIF change is a content release, not a code change.
- **The restricted area is separate.** Unusual-operation cases and ROS drafts live in their own tables, with their own encryption key and access log, and are excluded from every export and every non-officer query by default.

### Main entities

| Entity | Key fields | Notes and source |
|---|---|---|
| `Firm` | type (sole broker or company), legal name, CUIT, colegio, licence number, UIF registration date, services, channels, provinces | Firm profile feeds templates and the ITAER ([01](01-law-and-requirements.md) duty #1) |
| `Branch` | address, locality, province | RSA section 3 lists branches |
| `User`, `Membership` | e-mail, MFA, role (broker, board, officer titular, officer alternate, staff, accountant, reviewer, auditor), valid from/to | Officer changes drive the 24-hour and 15-day UIF notices (duty #2) |
| `Person` | names (with a "UIF-safe" form without special characters), ID type and number, CUIT/CUIL/CDI, nationality, birth date and place, marital status, address, phone, e-mail, occupation, PEP status, is_foreign | Res. 43 Art. 19 fields a-i (duty #12); the UIF wants "D'angelo" sent as "Dangelo" ([UIF RSM sale guide](https://www.argentina.gob.ar/uif/instructivos/rsm-compra-yo-venta-de-bienes-inmuebles)) |
| `Entity` | legal name, company type, registration data, CUIT or foreign tax ID, legal address, activity, board list | Art. 20 fields a-m |
| `Relationship` | from, to, kind (beneficial owner, shareholder, director, proxy, guardian, representative), percentage, evidence | Beneficial owners at 10% or more (duty #13) |
| `Client` | person or entity, first contact date, habitual or occasional (computed), current risk, refresh due, status (active, ended), ended_at | Retention clock starts at the end of the relationship or the last activity (duty #30) |
| `Document` | owner, kind (DNI front/back, statute, proof of funds...), file, hash, "original seen by/on", expiry | ID copy and verification evidence |
| `Declaration` | client, kind (PEP, beneficial owner, source of funds), template version, answers, signed file, hash, signer, channel, OTP evidence, timestamp, IP | PEP sworn statement under Res. 35/2023 (duty #14) |
| `ListVersion` | source (RePET persons, RePET entities, OpenSanctions), fetched_at, Last-Modified, ETag, record count, file hash | Proves which list a check used |
| `ScreeningRun`, `ScreeningHit` | subject, list version, score, matched record, reviewer, decision, reason, certificate file | The UIF asks for a dated record of every RePET search ([UIF](https://www.argentina.gob.ar/uif/busqueda-del-terrorista)) |
| `RiskRating` | client, rule-set version, factor scores, level, override and reason, approver, approved_at, next_refresh | Art. 23 factors; refresh at 1/3/5 years (duties #16, #19) |
| `Profile` | client, purpose, expected operations and amounts, declared income or wealth, documents | Transactional profile (duty #18) |
| `Property` | cadastral reference or registry number, province, locality, street, number, floor, unit, postcode, border-zone flag | RSM accepts either ID ([01](01-law-and-requirements.md)) |
| `Operation` | kind (sale or lease), date, currency, amount, ARS equivalent and rate source, property, lease start and end, annual rent, co-broker licence, in_scope (computed), RSM period | Duties #28, #35 |
| `OperationParty` | operation, person or entity, role, share % (two decimals), linked persons | Shares must total 100,00 per side |
| `Payment` | operation, method (cash, transfer, cheque, virtual asset, other), detail text, currency, amount, ARS equivalent, payer | At least one payment per sale |
| `Parameter` | key (SMVM, módulo, FX), valid_from, value, source URL | SMVM from the series API; módulo ARS 54,140 (Res. UIF 95/2025, per [01](01-law-and-requirements.md)) |
| `Alert` | operation or client, rule id and version, fired_at, severity, status | Duty #24 |
| `Case` (restricted) | the 8 fields of Art. 32, linked alerts, analysis notes, documents, decision, decided_at, ROS due_at, ROS control number | Duties #25-26; separate key |
| `RosDraft` (restricted, v1) | persons, PEP details, link to facts, predicate offence, done or attempted, dates, place, amounts in figures and words, four text boxes | Mirrors the SRO+ ROS form ([UIF ROS guide](https://www.argentina.gob.ar/uif/instructivos/rosrft)) |
| `Filing` | kind (RSM, RSA, ROS, ITAER, registration change), period, files, schema version, validation report, control numbers, constancia, filed_at, filed_by | Proof of filing |
| `Schema` | report kind, UIF version, XSD files, imported_at, source (which pilot exported it) | Versioned RSM schemas |
| `Template`, `GeneratedDocument` | template kind, version, legal review date and reviewer; generated file, hash, data snapshot | Manual, statements, notes |
| `Approval`, `Acknowledgement` | document, approver or signer, method, timestamp, evidence | Board approval; staff sign-off (duty #6) |
| `TrainingEvent`, `TrainingRecord` | topic list (a-f of Art. 16), date, provider, person, certificate, score | Duty #8 |
| `Task` | duty, due date, rule that created it, status, assignee | Deadlines engine |
| `FirmRiskAssessment` (v1) | period, factor scores (clients, services, channels, geography), controls, residual risk, tolerance statement, methodology version, approval, file | ITAER (duty #5) |
| `ReviewEngagement` (v1) | reviewer, UIF registration, period, scope, findings, action plan | REI (duty #9) |
| `InspectionRequest` | received_at, scope, deadline (3 business days), pack files, size | Duty #31 |
| `AuditEvent` | actor, action, object, before/after hash, previous event hash | Append-only hash chain |

### Key relations (simplified)

```
Firm 1-n Membership n-1 User
Firm 1-n Client 1-1 (Person | Entity)
Entity 1-n Relationship n-1 Person            (beneficial owners, directors, proxies)
Client 1-n Declaration, Document, ScreeningRun, RiskRating, Profile
Operation n-1 Property
Operation 1-n OperationParty n-1 (Person | Entity)
Operation 1-n Payment
Operation 1-n Alert n-1 Case (restricted) 1-0..1 RosDraft
Filing(RSM, period) 1-n Operation              (each with its XML file and control number)
Template 1-n GeneratedDocument 1-n Approval | Acknowledgement
```

### How the RSM is built

1. Select operations of the period that are sales, or leases with `in_scope = true` in that period.
2. Map each one to the stored `Schema` version with a declarative mapping file (field path in our model to element path in the XSD). The mapping is the only place that knows the UIF names.
3. Write one XML per operation, run XSD validation and the UIF annotation rules, and store the files, the report and the schema version in a `Filing`.

## Architecture and stack

### Recommendation: one boring monolith that agents can work on in parallel

| Layer | Choice | Why |
|---|---|---|
| Language and framework | **Python, Django 5.2 LTS** (6.1.2 is the newest on PyPI; LTS is safer for a 10-year records product) | Auth, admin, forms, migrations and i18n built in. AI agents write good Django. The admin gives the lawyer a content area for free ([PyPI Django](https://pypi.org/project/Django/)) |
| Database | **PostgreSQL** (managed, with point-in-time recovery) | Relational data; JSONB for rule tables and answers; row-level security as a second tenant wall |
| UI | **Server-rendered templates with HTMX** ([django-htmx 1.29](https://pypi.org/project/django-htmx/)) and a small CSS framework | Forms and tables, fast on cheap phones and 3G; one codebase |
| Jobs | **Procrastinate** (Postgres-backed queue, [3.10](https://pypi.org/project/procrastinate/)) | No Redis to run. Jobs: RePET poll every 2 hours, re-screen on change, nightly SMVM and FX update, daily reminders, document rendering |
| XML | **lxml** ([6.1, BSD](https://pypi.org/project/lxml/)) | XSD validation and XML writing; plus our small interpreter for UIF annotations |
| Word and PDF | **docxtpl** ([0.20, LGPL](https://pypi.org/project/docxtpl/)) for lawyer-editable Word templates; LibreOffice headless in a worker to make PDFs; WeasyPrint ([70.0](https://pypi.org/project/weasyprint/)) for HTML records such as screening certificates | The lawyer edits Word, not code |
| Name matching | **rapidfuzz** ([3.14](https://pypi.org/project/RapidFuzz/)) with our normaliser (lower case, strip accents, order-free tokens, Arabic name particles such as "al", "bin", "abu") | RePET has about 1,200 records, so matching is cheap |
| IDs | **python-stdnum** for CUIT/CUIL and DNI ([2.2, LGPL](https://pypi.org/project/python-stdnum/)) | Same check-digit logic the UIF app applies |
| Auth | **django-allauth** with TOTP MFA ([65.19, MIT](https://pypi.org/project/django-allauth/)) | MFA required for broker, board, officer, accountant and reviewer |
| Files | **Cloudflare R2** bucket with the EU jurisdiction restriction ([R2 data location](https://developers.cloudflare.com/r2/reference/data-location/)) | USD 0.015 per GB-month, no egress fee ([R2 pricing](https://developers.cloudflare.com/r2/pricing/)) |
| Encryption | Envelope encryption: one data key per firm, plus a separate key for the restricted area, wrapped by a master key in the host's secret store | DNI images, statements and cases |
| E-mail | **Resend** | Free up to 3,000 e-mails a month (100 a day); USD 20 a month for 50,000 ([Resend](https://resend.com/pricing)). No client names in e-mail bodies |
| Payments | **Stripe Billing or Paddle**, behind one small `billing` interface | Paddle charges 5% + USD 0.50 per transaction and handles tax ([Paddle](https://www.paddle.com/pricing)). The company file finds Argentina needs no seller VAT registration, so plain Stripe is cheaper for Argentina alone ([04](04-gtm-company-finance.md)). Annual plans keep the fixed fee small |
| Hosting | **Render, Frankfurt region** | Managed web, workers and Postgres with PITR in one place ([Render pricing](https://render.com/pricing); [regions](https://render.com/docs/regions)) |
| Errors and uptime | Sentry (EU data region if available, unverified) and an uptime checker | Logs carry no personal data |
| CI/CD | GitHub, GitHub Actions, required checks, Dependabot; auto-deploy `main` to staging; manual promote | Agents open pull requests; the founder merges |
| Tests | pytest-django; factory_boy with Faker `es_AR`; golden-file tests for every generated XML and document | Catch template and schema drift |

**Why not a JavaScript single-page app?** It would work. But the heart of this product is XML, Word and PDF generation, and the best libraries for those are in Python. One language and one deployable unit are easier for one founder and several agents to keep consistent.

**Why not a desktop tool next to SROMasivo?** Brokers work from phones and several places, and clients must sign from their own phones. A web app also keeps the 10-year archive safe from a broken laptop.

### Module layout (one Django app per module; each is one agent work stream)

```
core/        firms, users, memberships, roles, grants, audit chain, encryption, files, parameters, i18n
clients/     persons, entities, relationships, documents, declarations, client link and e-signature
screening/   list ingestion (RePET; OpenSanctions in v1), normaliser, matcher, hits, certificates
risk/        rule tables, scoring, overrides, approvals, profiles, refresh clocks
operations/  properties, operations, parties, payments, FX, lease tracker, habitual-client test
alerts/      alert rules and checklist, staff flags; cases/ (restricted) register, ROS clock and drafts
reports/     schema store, mapping, RSM XML writer and validator, copy sheets, RSA calculator, filings
programme/   templates, manual generator, approvals, acknowledgements, training, ITAER (v1)
portal/      dashboard, calendar, tasks, reminders, inspection pack, accountant portfolio (v1)
billing/     plans, Stripe or Paddle checkout and webhooks, entitlements
```

### Diagram

```
Client phone ──(one-time link)──┐
Broker / staff browser (HTMX) ──┼──> Render web (Django, Frankfurt) ──> Postgres (RLS, PITR)
Accountant / reviewer ──────────┘            │      ^
                                             v      │
                                   Procrastinate workers ──> R2 (EU): encrypted files, backups
                                    │      │       │
               RePET JSON (2-hourly) │  datos.gob.ar SMVM, BCRA FX (nightly)
               OpenSanctions API (v1)│  LibreOffice (DOCX -> PDF)   Resend (e-mail)   Stripe/Paddle

Broker's own PC: ZIP of XML ──> SROMasivo (Windows) ──> UIF masivo.uif.gob.ar     (broker clicks "send")
Broker's browser: copy sheet ──> SRO+ web forms (RSA, ROS, RSM by hand)          (broker types)
```

## Security, privacy and liability

### Data protection law that applies

- **Law 25.326 (2000) still governs.** It is in force with its regulation (Decree 1558/2001). A bill to replace it, 3397-D-2026, was filed on 16 Jul 2026; it would add a 72-hour breach notice to the authority ([abogados.com.ar](https://abogados.com.ar/nuevo-proyecto-de-ley-de-proteccion-de-datos-personales/39762); [Diario Judicial](https://www.diariojudicial.com/news-103126-proteccion-de-datos-personales-sigue-siendo-suficiente-la-ley-25326-en-2026)). The authority is the AAIP. Build to the stricter future rule now (my view).
- **Security duty.** The controller must take the technical and organisational measures needed to keep data safe and confidential; storing personal data in systems without integrity and security is prohibited (Art. 9) ([Law 25.326](https://www.argentina.gob.ar/normativa/nacional/ley-25326-64790/actualizacion)). The AAIP's recommended measures are in Res. 47/2018, which replaced the older mandatory list with recommendations that can be swapped for better ones ([Res. 47/2018](https://www.argentina.gob.ar/normativa/nacional/resolución-47-2018-312662/texto); [Marval](https://www.marval.com/Publicacion/nueva-resolucion-sobre-medidas-de-seguridad-y-datos-personales-13216)). We will map our controls to it in a one-page table for customers.
- **Roles.** The broker is the controller ("responsable") of its clients' data. We provide data processing services on its behalf, which Art. 25 governs: we may use the data only for the contracted purpose and may not pass it on, "ni aun para su conservación" ([Law 25.326 Art. 25](https://www.argentina.gob.ar/normativa/nacional/ley-25326-64790/actualizacion)). We are controller only for our own users and billing data.
- **The exit problem.** Art. 25.2 says that when the service ends, the data must be destroyed, unless the customer expressly authorises storage for up to two years when further work is likely. The broker, however, must keep AML records for 10 years (Res. 43 Art. 15, duty #30). So:
  - on cancellation, the broker gets a full export (PDF bundle, CSV/JSON, original files) and a signed hash list, and must confirm he has it;
  - he can choose an "archive only" plan, which keeps the service contract alive for retention; or
  - he can authorise a two-year hold under Art. 25.2; after that we delete.
- **Database registration.** Art. 21 requires public databases, and private ones "destinados a proporcionar informes", to register with the AAIP's register ([Law 25.326 Art. 21](https://www.argentina.gob.ar/normativa/nacional/ley-25326-64790/actualizacion)). Whether a broker's AML client file must be registered is a question for the lawyer (unverified). The app can print the data the register asks for (Art. 21.2: owner, purpose, data types, collection, recipients, security).
- **Transfers abroad.** Art. 12 bans transfers to countries without adequate protection, with exceptions ([Law 25.326 Art. 12](https://www.argentina.gob.ar/normativa/nacional/ley-25326-64790/actualizacion)). EU and EEA states, the UK, Switzerland, Uruguay and a few others are on the adequate list ([Disp. 60/2016](https://www.argentina.gob.ar/normativa/nacional/267922/texto), as amended for the UK by [Res. AAIP 34/2019](https://www.boletinoficial.gob.ar/detalleAviso/primera/202373/20190226); [IAPP](https://iapp.org/news/a/el-reino-unido-se-incorpora-a-la-lista-argentina-de-paises-adecuados-para-la-transferencia-internacional-de-datos-personales)). The US and Brazil are not. So:
  - keep the database and files in the EU (Frankfurt; R2 EU jurisdiction);
  - US-based sub-processors (e-mail, error tracking, billing) get no client data, or are covered by the model clauses Disp. 60/2016 provides (unverified that the annex model contract is still the AAIP's standard);
  - development uses synthetic data only; no customer data goes into AI tools.
- **Electronic statements.** Law 25.506 recognises electronic signatures; if one is disputed, the party relying on it must prove it (Art. 5). A firma digital equals a handwritten signature (Art. 3) ([Law 25.506](https://www.argentina.gob.ar/normativa/nacional/ley-25506-70749/actualizacion)). So the OTP signing flow must keep strong evidence: the exact text shown, the OTP channel, timestamps, IP, device, and a hash of the signed PDF.
- **AML secrecy.** Disclosing ROS work to the client or third parties is a crime (Law 25.246 Art. 21(c), 22), and ROS must never reach the licensing colegios (Res. 43 Art. 33) ([01](01-law-and-requirements.md) duties #26-27). This shapes access rules, notifications and the white-label design.

### Security baseline for the MVP

- TLS everywhere with HSTS; secure cookies; CSRF protection; strict content security policy.
- MFA (TOTP) required for broker, board, officer, accountant and reviewer roles; optional for staff. Passkeys in v1.
- Argon2 password hashing; login rate limits; 30-minute idle timeout; re-authentication before exports and restricted-area access.
- Tenant isolation in two layers: Django query scoping and Postgres row-level security keyed on a per-request setting. Automated tests try cross-tenant reads on every URL.
- Restricted area (cases, ROS drafts): separate permission, separate data key, separate access log, excluded from search, counts and exports for other roles. No e-mail or WhatsApp message ever names a case or a client in connection with one.
- Client links: single use, 7-day expiry, rate-limited, bound to the client record; uploads virus-scanned (ClamAV) and stripped of metadata.
- Encryption at rest: provider disk encryption plus envelope encryption for files and sensitive fields.
- Append-only audit log with a hash chain, viewable by the officer and exportable.
- Backups: managed PITR (7 days on Render's paid workspace, per [Render](https://render.com/pricing)) plus a nightly encrypted dump to a second R2 bucket kept 35 days; a monthly restore test.
- Support access only with the customer's time-limited consent, logged.
- Dependency updates weekly (Dependabot); an external penetration test before the paid launch and then yearly.
- Written policies: information security, incident response (notify customers within 72 hours, matching the bill), access control, backup, sub-processor list.

### Liability and how to limit it

- **A tool with reviewed templates, not legal advice.** Every generated document shows "template version X, reviewed by [lawyer] on [date]". The broker approves and signs. Risk levels are proposals the broker or officer confirms.
- **We never file.** The broker sends every report from his own UIF account. Our validator mirrors the UIF's published rules, but the UIF's own app is the final check.
- **Screening disclaimer.** A "no match" covers the named list at the stated time. The certificate shows the list version.
- **Terms.** Liability capped at 12 months of fees; no liability for fines where the user ignored tasks, hits or alerts; foreign governing law for the contract (to be set in the company file).
- **Change promise.** Templates and rules updated within 30 days of a relevant UIF resolution, with a notice. This is also the renewal story.
- **Insurance.** Professional indemnity and cyber cover for the operating company once revenue allows (price unverified).
- **Lawyer agreement.** A written scope with the Argentine lawyer and the AML expert: what they review, when, and their responsibility for the content.

## Hosting and running costs

### Choice: a managed platform in Frankfurt

- **Why the EU.** Argentina lists EU states as adequate for transfers, so no extra paperwork is needed for the main database ([Disp. 60/2016](https://www.argentina.gob.ar/normativa/nacional/267922/texto)). A US region would need model clauses for every customer.
- **Why managed.** One founder cannot also be a database administrator. Render runs web services, workers and Postgres with point-in-time recovery, and has a Frankfurt region ([Render regions](https://render.com/docs/regions)). Files go to an R2 bucket restricted to the EU jurisdiction.
- **Latency.** Buenos Aires to Frankfurt adds round-trip time (unverified figure), but HTMX pages are small. Measure with pilots; a São Paulo region would need a transfer review, since Brazil is not on the adequate list.

### Assumptions (my estimates)

- Per customer: 30 clients a year, 25 operations a year, 2 DNI photos and 3 signed PDFs per client, about 0.4-0.7 GB of files a year after downscaling.
- 4 new parties a month per customer checked against OpenSanctions (v1). RePET checks are free and unlimited.
- About 40 e-mails a month per customer (reminders, client links, sign-offs).

### Monthly running cost estimate (USD, excluding taxes and staff)

| Item | 50 customers | 300 customers | 1,000 customers | Price basis |
|---|---|---|---|---|
| Render Pro workspace | 25 | 25 | 25 | USD 25 a month plus compute ([Render](https://render.com/pricing)) |
| Web service | 1 × 1 CPU/2 GB: 25 | 1 × 2 CPU/4 GB: 85 | 2 × 2 CPU/4 GB: 170 | same |
| Worker (jobs, LibreOffice) | 1 × 1 CPU/2 GB: 25 | 1 × 1 CPU/2 GB: 25 | 2 × 1 CPU/2 GB: 50 | same |
| Postgres plus storage | 1 GB RAM + 10 GB: 22 | 4 GB RAM + 50 GB: 70 | 8 GB RAM + 150 GB: 145; standby copy optional, +145 | USD 19/55/100 a month plus USD 0.30 per GB (same) |
| R2 files and backup copies | 1-2 | 3-5 | 10-15 | USD 0.015 per GB-month ([R2](https://developers.cloudflare.com/r2/pricing/)) |
| E-mail | 0-20 | 20 | 20-90 | Free to 3,000 a month; USD 20 for 50,000; USD 90 for 100,000 ([Resend](https://resend.com/pricing)) |
| Error tracking, uptime | 0-26 | 26 | 26-80 | my estimate |
| Domain and misc. | 2 | 5 | 10 | my estimate |
| **Infrastructure subtotal** | **about 100-145** | **about 260-265** | **about 455-730** | |
| PEP checks (v1, OpenSanctions) | 0-25 | 90-110 | 230-310 | EUR 0.10 down to 0.05 per query by bundle ([OpenSanctions](https://www.opensanctions.org/api/)); USD 1.15 per EUR assumed |
| **Total** | **about 100-170** | **about 350-375** | **about 690-1,040** | |
| Per customer per month | about 2.0-3.4 | about 1.2 | about 0.7-1.0 | |

- Against the planned price of USD 12-19 (sole broker) and USD 29-49 (agency) ([02](02-market-and-competition.md)), infrastructure is about 3-17% of revenue (my arithmetic at an average of USD 20 a month).
- Payment fees are larger than hosting at small tickets. Paddle's 5% + USD 0.50 is 8.3% of a USD 15 monthly payment but 5.3% of a USD 180 annual one ([Paddle](https://www.paddle.com/pricing); my arithmetic). Stripe is cheaper per charge ([04](04-gtm-company-finance.md)). Either way, push annual billing.
- Optional per-use costs are passed through: a RENAPER check via Didit at USD 0.20 ([Didit](https://didit.me/es/blog/argentina-renaper-dni-verification-api/)).
- At 50 customers the Hobby workspace (USD 0) would also work, but its PITR window is 3 days instead of 7 ([Render](https://render.com/pricing)). Use Pro from launch.

## Development plan (with agent work streams and calendar)

### How the build works

- **Who builds.** The founder is product owner, architect, reviewer and integrator. Claude Code agents write most of the code, each in its own git worktree and branch, each owning one Django app and its tests. No hired developers.
- **The real critical path is not code.** It is three things outside the code: the broker XSDs exported from SROMasivo, the lawyer's approval of the templates and rules, and pilot brokers willing to file a real RSM with the tool. Start all three in week 0.
- **Foundation first, then parallel.** Shared code (tenancy, roles, the restricted-area guard, audit chain, encryption, file store, parameter tables, task engine, UI shell, Spanish strings) is built in one week by the founder and two agents. Parallel streams start only when those interfaces are frozen.
- **Tests first, from the law.** Each stream turns its duties from the 01 table into failing acceptance tests on day one (examples in the definition of done), then builds until they pass.
- **Daily rhythm.** Morning: the founder reviews and merges pull requests and updates each stream's brief. Day: agents work. Evening: CI green, auto-deploy to staging, the founder clicks through the flows with the synthetic agency.
- **Helper agents.**
  - A **fixtures agent** builds a synthetic agency: 120 clients (natural and legal persons, valid CUITs computed with python-stdnum, Argentine names from Faker `es_AR`), 40 sales and 15 leases over 12 months, 2 PEPs, 1 RePET near-match, 1 lease that crosses 300 SMVM in July.
  - A **reviewer agent** checks every pull request for tenant leaks, restricted-area leaks, tipping-off text, missing permission checks, unsafe file handling and English strings.
  - A **docs agent** writes Spanish help pages, the onboarding guide and short how-to videos' scripts.
- **Rules for agents.** One `CLAUDE.md` with: the glossary (legajo, sujeto obligado, oficial de cumplimiento, RSM, RSA, ROS, RFT, RePET, SMVM, PEP, beneficiario final, REI, ITAER); the architecture rules; "never touch another app's models"; "never put real personal data in code, tests or prompts"; "anything in `cases/` needs the founder's review"; how to run tests.
- **Tool limits.** Running 4-6 sessions at once can hit plan usage windows. Stagger streams and keep a pay-as-you-go API budget for overflow. Claude Max starts at USD 100 a month (5x) and includes Claude Code; the 20x tier comes with USD 200 a month of API credits ([Claude pricing](https://claude.com/pricing)). The 20x price is USD 200 a month in third-party summaries (unverified on the official page in this pass).

### Agent work streams for the MVP

| Stream | App(s) | 01 refs (duty #, R#) | Main outputs | Depends on |
|---|---|---|---|---|
| **F. Foundation** (week 1; founder + 2 agents) | core, portal shell | duties 1, 2, 27, 30; R1, R2, R8, R9, R70, R75-R77 | Tenancy with RLS; users, roles, grants; MFA; restricted-area guard and tests; audit hash chain; envelope encryption; file store with hashes and virus scan; parameter table with the SMVM and BCRA importers; task and deadline engine with Argentine business days and holidays; Spanish UI shell; CI/CD; staging | — |
| **S1. Client file** | clients | duties 12-14, 20-23, 35; R15-R28 | Person, entity, relationship models; Art. 19-20 field sets; CUIT/DNI validators; documents with "original seen"; client link with OTP e-signature and evidence; PEP, beneficial-owner and funds statements (lawyer text as templates) | F |
| **S2. Screening** | screening | duty 15; R29-R33 | RePET ingestion with ETag polling and list versions; normaliser and matcher; hit review screen; certificate PDF; re-screen on list change; stale-list alarm | F; S1 models frozen on day 2 of week 2 |
| **S3. Risk** | risk | duties 16-19, 33; R34-R39 | Rule table loader; scoring with reasons; override and approval; profile; refresh clocks; country and border-zone tables | F; S1 |
| **S4. Operations and alerts** | operations, alerts, cases | duties 18, 24-26, 28, 35; R3-R7, R40-R48 | Property, operation, parties, payments; FX conversion; lease tracker and habitual-client test; alert rules and checklist; staff flag; restricted case register with the 8 Art. 32 fields; ROS clock | F; S1 |
| **S5. Reports** | reports | duties 28, 29, 31; R49-R54, R71-R74 | Schema store; mapping file; RSM XML writer; XSD and annotation validator; ZIP; copy sheets for RSM and RSA; control-number capture; RSA calculator; inspection pack with size control | F; reads S1 and S4 through query interfaces |
| **S6. Programme and shell** | programme, portal, billing | duties 3, 6, 8; R10-R14, R59-R62 | Set-up wizard; manual generator (docxtpl, LibreOffice); approvals and acknowledgements; training register; dashboard; calendar; e-mail reminders; Stripe or Paddle checkout and webhooks | F |
| **Helpers** | tests, docs | all | Synthetic agency, review reports, Spanish help | F |

### Calendar (start Monday 12 Oct 2026)

Argentine holidays inside the plan: Mon 12 Oct, Mon 23 Nov (moved from 20 Nov), Mon 7 Dec (non-working day), Tue 8 Dec and Fri 25 Dec ([Contadores en Red, 2026 holiday calendar](https://contadoresenred.com/calendario-de-feriados-2026/); [El Economista](https://eleconomista.com.ar/actualidad/se-viene-nuevo-feriado-argentina-cuando-cae-cuantos-fines-semana-largos-quedan-2026-n97521)). The founder works from abroad, but pilots and the lawyer follow these dates.

| Week | Dates | Engineering (agents + founder) | Content, legal and pilots | Exit check |
|---|---|---|---|---|
| 0. Discovery and set-up | 12-16 Oct | Repo, CLAUDE.md, backlog from the 01 duty table, Render, R2, Resend and Stripe or Paddle accounts, CI | 8-10 video calls: sole brokers and small agencies in Córdoba, Santa Fe and Mendoza, 2 in Buenos Aires city, 2 accountants who act as REI. **Ask one broker to export the RSM schemas from SROMasivo** and share an anonymised SRO+ screenshot set (RSM and RSA). Engage the lawyer and an AML expert. Request an AMLify demo (price and features) | Broker XSDs in hand, or a named broker who will export them in week 1 |
| 1. Foundation | 19-23 Oct | Stream F | Lawyer starts: manual template, PEP/BO/funds statements, client form wording, terms, processor agreement, privacy policy. AML expert starts: risk factor table, alert checklist | Interfaces frozen; staging live; synthetic agency loads |
| 2-3. Parallel modules | 26 Oct-6 Nov | Streams S1-S6 in parallel; daily merges | Recruit 5-8 pilot brokers and 1-2 accountants; use the 8 Nov start of the property-registry regime (Res. UIF 93/2026) as the hook ([02](02-market-and-competition.md)) | All MVP acceptance tests written; most passing |
| 4. Integration | 9-13 Nov | End-to-end tests over 12 synthetic months; XML dry-run: a pilot imports our files into SROMasivo with "Importar y Validar" without sending; reviewer-agent security pass; backup and restore drill | Pilot agreements: free until 31 Mar 2027 in exchange for feedback and a reference | **MVP done** (definition below) |
| 5-6. Legal approval and pilots | 16-27 Nov (23 Nov holiday) | Fixes from pilots; copy-sheet polish; Spanish copy pass | Lawyer and AML expert sign off templates, statements, rule table, alert checklist, privacy policy, terms and processor agreement. Founder onboards each pilot on a call; they enter October and November operations | Signed approvals; pilots live with real data |
| 7. Security test | 30 Nov-4 Dec | External penetration test (3-4 testing days); fix high and critical findings | Pilots prepare the November RSM in the tool | No open high or critical findings |
| 8. Launch | 9-11 Dec (7-8 Dec off) | Retest; production hardening; monitoring and status page | **Pilots file the November RSM (window 1-15 Dec) with our files** and store control numbers; paid plans open; landing page with public prices | **Sellable** (definition below) |
| After launch | 14 Dec-15 Mar | RSA calculator hardening before 2 Jan; v1 starts | RSA window 2 Jan-15 Mar 2027 is the first sales push | RSAs filed by pilots |
| v1 | Jan-May 2027 | ITAER wizard; reviewer and accountant workspace; OpenSanctions; DNI barcode; Excel and Tokko imports; ROS draft builder; course player | Accountant partners; first colegio talks | Monthly releases |

**Is "MVP in about 3 weeks" realistic?** Yes for the code, if week 1 delivers frozen foundations and six streams run in weeks 2-3, with week 4 for integration. The schedule risk is outside the code: the XSD export and the legal sign-off. If the XSDs are late, ship the MVP with the copy sheet and add the XML export when they arrive; that costs about two agent-days (my estimate).

### Definition of done for the MVP (end of week 4)

1. Every MVP feature has passing acceptance tests, including:
   - Lease tracker (R3): a lease of ARS 9 million a month (108 million a year) is in scope at the ARS 334,800 basis (threshold 100.44 million) and out of scope at the ARS 367,800 basis (110.34 million); the screen shows both and applies the default. Two leases of one client that together pass the threshold are flagged under the aggregation setting.
   - Alerts (R41): the same cadastral reference sold for 100 and then 145 within 11 months raises the resale alert; an offer of 100 and a sale at 69 raises the offer-gap alert. An operation cannot close until the R42 checklist is answered.
   - RSM validator: rejects buyer shares of 60,00 + 30,00; a DNI of 9 digits; a CUIT with a wrong check digit; a legal-person party without a linked natural person; an operation with no payment; a period later than the report date.
   - ROS clock: suspicion concluded Tue 10:00 gives a due time of Wed 10:00, never later than day 90 after the operation.
   - Refresh clock: a high-risk client rated 15 Jan 2027 is due 15 Jan 2028; low risk 15 Jan 2032.
   - Screening: a test set of 50 RePET names with accent, order and alias variants is caught; the certificate shows the list's Last-Modified date.
   - Access: a staff user gets 403 on every `cases/` URL and sees no case counts; an accountant cannot reach a second broker without a grant.
2. The synthetic agency's RSM files validate against the exported broker XSD, and one pilot's SROMasivo shows status "Ok" on import of our files.
3. The synthetic agency's inspection pack is under 20 MB and opens on Windows and macOS.
4. Tenant isolation tests pass on every URL; MFA is enforced for the required roles; the audit chain verifies; a restore from backup has been done.
5. All screens and documents are in Spanish (es-AR); no English strings remain.
6. A new firm completes Flows 1-3 on staging in under 60 minutes.

**"Sellable" (end of week 8)** adds: the lawyer and AML expert have signed off the content and legal papers; the penetration test has no open high or critical findings; at least 3 pilot brokers have filed a real RSM with our files and stored the control numbers; billing is live; a status page and a support channel exist.

## Budget

### Cash to "sellable" (8 weeks; USD; founder unpaid; company set-up excluded)

| Item | Low | High | Basis |
|---|---|---|---|
| Claude Max 20x, 2 months | 400 | 400 | USD 200 a month (20x tier; see "Tool limits"; [Claude pricing](https://claude.com/pricing)) |
| API overflow or a second plan for parallel agents | 200 | 800 | my estimate |
| GitHub and CI minutes | 0 | 50 | my estimate |
| Hosting during build and pilots (staging and production, 2 months) | 150 | 300 | [Render](https://render.com/pricing), [R2](https://developers.cloudflare.com/r2/pricing/) |
| Domain, e-mail sending, error tracking | 50 | 150 | [Resend](https://resend.com/pricing); domain price unverified |
| Argentine lawyer (AML and data protection): template and statement review, rule-table review, terms, processor agreement, privacy policy | 2,000 | 4,500 | Fixed-fee estimate (unverified). For scale, the court fee unit (UMA) was ARS 89,875, about USD 59, from 1 Jan 2026 ([Palabras del Derecho](https://www.palabrasdelderecho.com.ar/articulo/6534/Se-actualizo-el-valor-de-la-UMA); unverified) |
| AML expert (an REI-registered accountant or a former UIF analyst): risk factors, alert checklist, RSM mapping check, mock inspection; 15-30 hours | 750 | 2,000 | my estimate (unverified) |
| Penetration test, scoped web app, with retest | 3,000 | 8,000 | Guides put a small single-app test at USD 5,000-15,000 and a 3-4 day minimum, and warn that quotes under about USD 2,000-4,000 are usually automated scans ([Startup Defense](https://www.startupdefense.io/es-us/blog/cuanto-cuesta-un-pentest); [Andersen](https://andersenlab.com/blueprint/penetration-testing-costs-2026)). A local boutique may be cheaper (unverified) |
| Windows machine time to test SROMasivo imports | 0 | 50 | Use a pilot's PC, or a cloud Windows VM for a few hours (my estimate) |
| Pilot trip (Córdoba, Rosario, Buenos Aires), optional | 0 | 2,000 | my estimate |
| Contingency (10%) | 650 | 1,850 | |
| **Total** | **about 7,200** | **about 20,100** | |

### Monthly running cost after launch (first year)

| Item | USD a month |
|---|---|
| Hosting and services at 50 customers | 100-170 |
| AI tools for maintenance and v1 (Max 5x to 20x) | 100-200 |
| Lawyer and AML expert on a small retainer (law watch, template updates) | 100-250 (my estimate) |
| **Total** | **about 300-620** |

- **Year-1 cash, excluding the company and marketing:** the build (USD 7,200-20,100) plus 10 months of running costs (USD 3,000-6,200) is about **USD 10,200-26,300** (my arithmetic). The second penetration test falls in month 13.
- **Against revenue.** The 02 base case is about USD 80,000-90,000 a year by year 3 ([02](02-market-and-competition.md)). The build is small against that; the risk is sales, not cost.
- **Company.** The product needs no Argentine company: no MVP integration requires an Argentine tax ID. Company set-up costs (foreign entity, card payments, invoicing to Argentine brokers) are in the company file ([04](04-gtm-company-finance.md)).

### Concierge fallback

If the XSDs or pilots are late, sell the programme pieces first: the manual generator, the statements kit, the training log and a monthly "RSM copy sheet" service done with the broker on a call. This needs only streams F, S1 and S6 and can be sold from week 5, while the RSM export catches up (my estimate).

## Risks

| Risk | Why it matters | Mitigation |
|---|---|---|
| **The broker XSDs cannot be obtained** | No bulk RSM export; the main monthly time-saver is weaker | Ask pilots to use SROMasivo's "Exportar esquemas" in week 0; ask the UIF at sujetosobligados@uif.gob.ar; ship the copy sheet first |
| **SROMasivo is Windows-only** | Many brokers use Macs or phones (unverified) | Copy sheet for the SRO+ web form; few operations per month make typing acceptable |
| **The UIF changes the schema or version** | Files rejected as outdated | Schemas stored as versions with golden tests; a pilot re-exports; customers get a banner |
| **RePET's JSON path is undocumented** | It could move or break silently | ETag polling with a "list is stale after 48 hours" alarm; OpenSanctions also carries RePET as a second feed ([OpenSanctions Argentina](https://www.opensanctions.org/countries/ar/)) |
| **PEP coverage is thin** | Domestic PEPs (provincial and municipal officials, judges) are missed by data | The signed statement stays mandatory; "public function" questions; OpenSanctions as a helper; an honest disclaimer |
| **Security flaws in agent-written code** | A tenant leak or a ROS leak would end the business and could be a crime (tipping-off) | RLS as a second wall; restricted-area tests; reviewer agent on every PR; founder review of `cases/`; external penetration test before launch |
| **Tipping-off through the product** | A notification or a client-facing status that reveals a hit or a case | No case data in e-mails or WhatsApp; neutral client statuses; content rules checked by tests |
| **Liability for a missed report or a wrong rating** | Fines run to 2,500 módulos per breach ([01](01-law-and-requirements.md)) | The broker approves and files; disclaimers; liability cap; reviewed templates; insurance later |
| **Processor rules vs 10-year retention** | Law 25.326 Art. 25 requires destruction at contract end | Export at exit, "archive only" plan, or an express two-year authorisation |
| **Transfers to US sub-processors** | Art. 12 bans transfers to non-adequate countries | EU hosting; no client data to US tools; model clauses where unavoidable |
| **Scope changes (deregulation, new UIF rule)** | Who is obliged and which fields apply could change ([01](01-law-and-requirements.md) "Upcoming changes") | Rules and thresholds as data; change promise in the terms |
| **AMLify moves first in more colegios** | Fewer open channels ([02](02-market-and-competition.md)) | Public price, self-serve, accountant seat, provinces first |
| **Founder abroad; support in Spanish** | Micro-office buyers want WhatsApp help during Argentine hours | Help centre; fixed WhatsApp support hours; accountant partners as first-line support |
| **Usage limits slow the parallel agents** | Weeks 2-3 can slip | Stagger streams; overflow API budget; freeze scope |
| **Pilots stall in December** | Holidays and the southern summer | Recruit in October; pilots' first real use is the November RSM, before the holidays |

## Open questions

1. What exactly do the broker RSM XSDs contain (sale and lease), and which version is current? Must a broker file a "nil" RSM in a month with no operations? (unverified)
2. How did brokers file the ITAER in April 2026: an SRO+ upload, an e-mail, or something else? (unverified)
3. Does an OTP-based electronic signature, with stored evidence, satisfy the Res. 35/2023 PEP statement rule? The lawyer should confirm.
4. Must a broker register its AML client database with the AAIP under Law 25.326 Art. 21? (unverified)
5. 01 splits the 31 alert situations into 15 computable ones and 16 for a checklist (R41-R42). Do pilots actually hold the data the computable ones need, such as offer prices and reference values? The AML expert and pilots should confirm.
6. Does "300 SMVM in one or several operations" add up separate leases of one client? (open legal question in [01](01-law-and-requirements.md))
7. Does AMLify produce SROMasivo XML or only spreadsheets, and what does it charge? ([02](02-market-and-competition.md))
8. Will Tokko allow a third-party app to use an agency's API key, and what does `signed_operations` contain? (unverified)
9. Where does Didit store Argentine data, and will it sign a processor agreement that meets Law 25.326? (unverified)
10. Is the Disp. 60/2016 model contract still the AAIP's standard for transfers to the US? (unverified)
11. What is the real round-trip time from Argentine provinces to Frankfurt on mobile networks? Measure with pilots.

## Sources

Sibling files: [01 Law and requirements](01-law-and-requirements.md); [02 Market and competition](02-market-and-competition.md); [04 Go-to-market, company and finance](04-gtm-company-finance.md); [B1 report](../reports/argentina-b1.md).

UIF filing channels and formats
- https://www.argentina.gob.ar/uif/rsm
- https://www.argentina.gob.ar/sites/default/files/manual_usuario_srom_v2.pdf
- https://www.argentina.gob.ar/sites/default/files/sromasivoinstallerv7-2_.zip (inspected 10 Oct 2026: .NET app; config names https://masivo.uif.gob.ar/rsmservice.asmx; schema download and export functions)
- https://www.argentina.gob.ar/sites/default/files/reporte_de_registracion_y_cumplimiento_v.1.2.zip
- https://www.argentina.gob.ar/sites/default/files/intructivo_rectificacionesmasivas_rsms.zip
- https://www.argentina.gob.ar/uif/instructivos/rsm-compra-yo-venta-de-bienes-inmuebles
- https://www.argentina.gob.ar/uif/instructivos/rsm-operaciones-de-locacion-de-inmuebles-cuyo-monto-anual-sea-igual-o-superior-300
- https://www.argentina.gob.ar/uif/reporte-sistematico-anual-rsa
- https://www.argentina.gob.ar/uif/instructivos/rosrft
- https://www.argentina.gob.ar/instructivos/requerimientos
- https://www.argentina.gob.ar/normativa/nacional/397424/actualizacion

Data sources and integrations
- https://www.argentina.gob.ar/uif/busqueda-del-terrorista
- https://repet.jus.gob.ar/xml/personas.json and https://repet.jus.gob.ar/xml/entidades.json (downloaded 10 Oct 2026)
- https://apis.datos.gob.ar/series/api/series/?ids=57.1_SMVMM_0_M_34
- https://api.bcra.gob.ar/estadisticascambiarias/v1.0/Cotizaciones/USD?fechadesde=2026-10-05&fechahasta=2026-10-10
- https://pypi.org/project/python-stdnum/
- https://www.opensanctions.org/countries/ar/
- https://www.opensanctions.org/api/
- https://didit.me/es/blog/argentina-renaper-dni-verification-api/
- https://www.boletinoficial.gob.ar/pdf/linkQR/YmR6UGQ0Z2UvS2srdTVReEh2ZkU0dz09
- https://www.diariodecuyo.com.ar/argentina/aumentan-los-dni-pasaportes-y-otros-tramites-cuales-son-los-nuevos-valores-del-renaper-n6567218
- https://www.afip.gob.ar/ws/documentacion/wsaa.asp
- https://docs.afipsdk.com/siguientes-pasos/web-services/padron-alcance-13
- https://yo-facturo.com/blog/escanear-el-dni-en-tu-comercio-que-datos-trae-el-codigo-pdf417/
- https://regulaforensics.com/blog/argentine-id-card-processing/
- https://www.tokkobroker.com/api/v1/?format=json
- https://developers.tokkobroker.com/
- https://faq.whatsapp.com/5913398998672934
- https://firmar.gob.ar/

Privacy, signatures and law
- https://www.argentina.gob.ar/normativa/nacional/ley-25326-64790/actualizacion
- https://www.argentina.gob.ar/normativa/nacional/267922/texto
- https://www.boletinoficial.gob.ar/detalleAviso/primera/202373/20190226
- https://iapp.org/news/a/el-reino-unido-se-incorpora-a-la-lista-argentina-de-paises-adecuados-para-la-transferencia-internacional-de-datos-personales
- https://www.argentina.gob.ar/normativa/nacional/resolución-47-2018-312662/texto
- https://www.marval.com/Publicacion/nueva-resolucion-sobre-medidas-de-seguridad-y-datos-personales-13216
- https://abogados.com.ar/nuevo-proyecto-de-ley-de-proteccion-de-datos-personales/39762
- https://www.diariojudicial.com/news-103126-proteccion-de-datos-personales-sigue-siendo-suficiente-la-ley-25326-en-2026
- https://www.argentina.gob.ar/normativa/nacional/ley-25506-70749/actualizacion

Stack, hosting and costs
- https://pypi.org/project/Django/
- https://pypi.org/project/django-htmx/
- https://pypi.org/project/procrastinate/
- https://pypi.org/project/lxml/
- https://pypi.org/project/docxtpl/
- https://pypi.org/project/weasyprint/
- https://pypi.org/project/RapidFuzz/
- https://pypi.org/project/django-allauth/
- https://render.com/pricing
- https://render.com/docs/regions
- https://developers.cloudflare.com/r2/pricing/
- https://developers.cloudflare.com/r2/reference/data-location/
- https://resend.com/pricing
- https://www.paddle.com/pricing
- https://claude.com/pricing
- https://www.startupdefense.io/es-us/blog/cuanto-cuesta-un-pentest
- https://andersenlab.com/blueprint/penetration-testing-costs-2026
- https://www.palabrasdelderecho.com.ar/articulo/6534/Se-actualizo-el-valor-de-la-UMA
- https://contadoresenred.com/calendario-de-feriados-2026/
- https://eleconomista.com.ar/actualidad/se-viene-nuevo-feriado-argentina-cuando-cae-cuantos-fines-semana-largos-quedan-2026-n97521
