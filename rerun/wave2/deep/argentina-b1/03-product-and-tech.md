# Argentina B1: UIF compliance tool for real estate brokers: product and technical design

Part 3 of the Argentina B1 deep dive: product, technical design and development plan. Written 10 Oct 2026. Builds on the [B1 report](../reports/argentina-b1.md), [01 Law and requirements](01-law-and-requirements.md) and [02 Market and competition](02-market-and-competition.md). "Duty #n" refers to the numbered duty table in 01. "My estimate" marks numbers I derived. "(unverified)" marks facts I could not confirm. Exchange rate: ARS 1,517 per USD, the BCRA official rate on 9 Oct 2026 ([BCRA API](https://api.bcra.gob.ar/estadisticascambiarias/v1.0/Cotizaciones/USD?fechadesde=2026-10-05&fechahasta=2026-10-10)).

Status: first full draft. Sections below "Data sources" are being filled in.

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
- **Running cost:** about USD 100-165 a month at 50 customers, USD 350-380 at 300 and USD 690-1,040 at 1,000, including paid PEP checks from v1 (my estimates from [Render](https://render.com/pricing), [R2](https://developers.cloudflare.com/r2/pricing/), [Resend](https://resend.com/pricing) and [OpenSanctions](https://www.opensanctions.org/api/) prices). That is about USD 0.7-3.3 per customer a month, against a planned price of USD 12-49 ([02](02-market-and-competition.md)).
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

| Area | MVP (sellable in week 8) | v1 (months 2-6) | Later | Duty # in 01 |
|---|---|---|---|---|
| **Firm set-up** | Wizard: sole broker or company; colegio and licence number; UIF registration data; officer titular and alternate; branches; services (sales, leases); channels. Produces the firm profile used by every template | Change log for UIF data with the 5-business-day reminder | Multi-branch groups (Art. 13) | 1, 2, 34 |
| **Client file (legajo)** | Natural persons (fields a-i) and legal persons (fields a-m); representatives and proxies; beneficial owners at 10% or more; document uploads with "original seen by / on"; CUIT/CUIL check digit; ID number 3-8 digits | Excel/CSV import; duplicate merge; DNI PDF417 barcode scan on the phone | ARCA register look-up; RENAPER identity check via a vendor | 12, 13, 21, 35 |
| **Client self-service link** | One-time link (e-mail or WhatsApp) to a mobile form: identity data, DNI photos, PEP sworn statement with the Res. 35/2023 text, beneficial-owner statement, source-of-funds statement, e-signature by OTP with timestamp and document hash | Liveness and RENAPER check (optional, paid per use) | Signed PDF with firma digital | 12-14, 20 |
| **Screening** | RePET persons and entities, refreshed several times a day; fuzzy matching; hit review with reasons; dated screening certificate; re-screen of the whole client base when the list changes | OpenSanctions PEP and sanctions check; freeze-order sweep: paste a UIF freeze order and check every client within minutes | Paid local data (Nosis, Worldsys) if pilots ask | 14, 15 |
| **Client risk** | Rule table from Art. 23 factors (client type, activity, funds, volume, nationality, residence, geography, service, channel, payment method, PEP); low, medium or high; override with reason; approval by officer for high risk and PEP; refresh clock of 5, 3 or 1 years; transactional profile | Tunable weights per firm, with the lawyer's default; batch re-rating when rules change | | 16-19, 33 |
| **Operations** | Sales and leases; parties with roles and shares; payments by method and currency; ARS equivalent at the BCRA rate; property with cadastral or registry ID; co-broker licence; **lease tracker** that sums each client's leases against 300 SMVM; habitual-client test at 700 SMVM | Tokko Broker import of contacts and closed deals | Other CRM connectors | 12, 18, 28, 35 |
| **Alerts and unusual operations** | Automatic flags where data allows (cash, virtual assets, third-party payer, foreign or high-risk-country party, PEP, border-zone property, quick resale of the same property); a per-operation checklist for the other listed situations; staff "odd" flag; restricted unusual-operations register with the 8 fields of Art. 32; ROS clock (24 hours from conclusion, 90 days from the operation) | ROS draft builder in the SRO+ field order (persons, facts, four free-text boxes); RFT and proliferation drafts | | 24-27 |
| **RSM (monthly report)** | One XML file per operation, built from the broker XSD exported from SROMasivo, validated with the XSD and the UIF's extra rules; ZIP to drop into SROMasivo's import folder; copy sheet for typing into the SRO+ web form; control-number capture; "nothing to report this month" record | Rectification files (original control number block); annulment guide | | 28 |
| **RSA (annual report)** | Calculator for sections 3 and 4 (services, operations, volumes, cash volume, client counts and risk percentages) and a checklist for sections 1 and 2; constancia upload | Year-on-year comparison | | 29 |
| **Manual and governance** | Manual generator (lawyer-approved Word template filled with the firm profile); version history; staff acknowledgement by e-signature; 2-year review reminder | Officer's annual work plan and report templates; board approval records; remediation plan tracker | | 3, 6, 7, 11 |
| **Training** | Training register; certificate upload (for example free GAFILAT courses); yearly reminder per person | Our own 45-minute course with quiz and certificate, by role | Colegio-branded courses | 8 |
| **Self-assessment (ITAER)** | Data collection only (the MVP records what the 2028 report needs) | Wizard: inherent risk by factor from real data, control effectiveness, residual risk, risk tolerance statement, methodology document, PDF; board approval | Versioned methodology for the 2030 review | 4, 5 |
| **REI and audit** | — | Reviewer workspace with redacted ROS identities; reviewer file (15 items); findings and action plan | | 9, 10, 11 |
| **Accountant seat** | — | Portfolio dashboard across brokers; per-broker grants; RSA preparation for many clients | | — |
| **Deadlines and reminders** | Calendar with RSM (1st-15th), RSA (2 Jan-15 Mar), ITAER (30 Apr 2028), REI (about 28 Aug 2028), manual review, file refreshes, training, ID expiry; e-mail digest | WhatsApp reminders through the Business API | | 5, 9, 19, 28, 29 |
| **Inspection pack** | One click: index PDF plus manual, approvals, training log, risk model, client list with ratings, screening certificates, RSM receipts; images downscaled so the ZIP stays under 20 MB; scope picker | Read-only "inspection room" link | | 31 |
| **Records** | 10-year retention clocks from the operation or the end of the relationship; append-only audit log; full export (PDF, CSV, JSON, original files) | "Archive only" plan after cancellation | | 30 |
| **Billing** | Card checkout through a merchant of record (Paddle) in USD; plans per seat type | Colegio invoicing | | — |

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
(pending)

## Architecture and stack
(pending)

## Security, privacy and liability
(pending)

## Hosting and running costs
(pending)

## Development plan (with agent work streams and calendar)
(pending)

## Budget
(pending)

## Risks
(pending)

## Open questions
(pending)

## Sources
(pending)
