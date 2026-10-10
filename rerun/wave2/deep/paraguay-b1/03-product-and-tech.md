# Paraguay AML kit for vehicle dealers: product, technical design and development plan (deep dive 03)

Date: 10 Oct 2026. This builds on [the B1 report](../reports/paraguay-b1.md), [01-law-and-requirements.md](01-law-and-requirements.md) and [02-market-and-competition.md](02-market-and-competition.md). The 118 numbered requirements in 01 are cited here as "R1" to "R118". The sibling real-estate dive ([paraguay-b2/03](../paraguay-b2/03-product-and-tech.md)) designs the same kind of engine for real-estate firms under Res 201/2020, so this file reuses its checked facts with credit and concentrates on what is different for vehicles.

Conventions: "my estimate" marks numbers I derived. "(unverified)" marks facts I could not confirm. Money is in US dollars at about Gs 6,000 per USD, the rate used in [02](02-market-and-competition.md) (itself unverified against the central bank).

Status: complete as of 10 Oct 2026. Open questions are listed at the end.

## Summary

- **What to build.** A Spanish web app, usable on a phone at the lot, that runs a vehicle firm's SEPRELAD file between filings. It has six parts:
  - a vehicle stock and operations register (import, purchase, consignment, sale) that produces the quarterly operations report (RO);
  - client files with the right due-diligence level chosen automatically;
  - UN, OFAC and EU list checks with a log;
  - the Res 196/2020 documents (manual, code of ethics, officer appointment, risk self-assessment, training plan);
  - a deadline calendar with proof of filing;
  - the yearly internal-control report, the Annual Form (FA) figures and an audit and inspection pack.

  It never files in SIRO and never holds SIRO passwords. Filings stay the firm's own sworn acts.
- **What the free portal leaves undone.** SIRO only receives filings ([Memoria 2025](https://www.seprelad.gov.py/wp-content/uploads/2026/02/Memoria-Anual-de-Gestion-Ano-2025.pdf)). It does not:
  - prepare data. In 2025, 453 vehicle firms reported 156,019 operations, about 86 per firm per quarter. Small firms key them in one at a time (same source; [02](02-market-and-competition.md)).
  - remind anyone. 454 vehicle firms got warning letters in 2024 for missed RN, RO, FA, internal-control and audit filings ([Memoria 2024](https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf)).
  - keep the KYC files, list-check log, manual, training records or approvals that inspectors ask for ([Ferrere on random inspections](https://ferrere.com/es/novedades/inspecciones-aleatorias-de-seprelad-bajo-resolucion-36-21/)).

  Those three gaps are the product.
- **The vehicle-specific core is the stock register.** Each car is one record keyed by its chassis number. It moves from import, purchase or consignment to sale. That one record feeds the RO, three of the Annex III red flags (many cars to one buyer, a sale below market value, an advance paid and then cancelled), the trade-in rule for simplified due diligence, and the FA totals ([Res 196](https://baselegal.com.py/docs/78668570-6ae3-11eb-990a-525400c761ca), Art. 22 and Annex III; [FA instructions](https://www.seprelad.gov.py/userfiles/files/resoluciones/06-22-instructivo-formulario-anual-automotores.pdf)).
- **Biggest technical unknown: the vehicle RO format.** SIRO takes RO data one record at a time on a web form, or as a JSON bulk file. SEPRELAD switches a firm to JSON on request, and after the switch one-by-one entry is closed ([SEPRELAD, 22 Aug 2025](https://www.seprelad.gov.py/?p=3156); [SIRO registration guide](https://www.seprelad.gov.py/wp-content/uploads/2025/05/2-Inscripcion.pdf)).
  - For real estate, SEPRELAD published the field list (Res 003/2025 annex, which I read in the scan) and a 37-column reference Excel file ([Res 003/2025](https://www.seprelad.gov.py/userfiles/files/resoluciones/resol-03-2025-ro-inmobiliarias.pdf); [RO spec, via B2](https://www.seprelad.gov.py/resoluciones/resoluciones/contenido-archivo-excel-ro-inmobiliarias.pdf)).
  - For vehicles I found no field list, no Excel file and no JSON schema. Two guessed spec URLs returned 404, SEPRELAD's media library has no such file, and two searches found nothing (my checks, 10 Oct 2026).
  - So the week-0 job is to record a pilot firm's SIRO RO screens and have the pilot ask SEPRELAD for the JSON schema.
- **Useful free data exists.**
  - DNIT publishes the full RUC register as ten monthly zip files. The B2 dive downloaded one: 201,867 rows in the form `RUC|name|check digit|old RUC|status|` ([DNIT](https://www.dnit.gov.py/web/portal-institucional/listado-de-ruc-con-sus-equivalencias)).
  - Paraguay's e-invoice XML (SIFEN) has a vehicle group (E770, "vehículos nuevos"). It carries chassis, colour, engine number, year, vehicle type and cylinder size ([open-source SIFEN library](https://github.com/IonysDev/pkuatia/blob/4d138aad1f5ba7c2474876ec2dd9504fdfb72de9/src/Core/Fields/DE/E/GVehNuevo.php)). Dealers who invoice electronically can feed sales in with no typing. E-invoicing is being phased in by group until Sep 2027 ([DNIT, RG 52/2026](https://www.dnit.gov.py/web/portal-institucional/w/dnit-designa-nuevos-facturadores-electr%C3%B3nicos)).
  - The UN, OFAC and EU lists are free XML downloads ([UN](https://scsanctions.un.org/resources/xml/en/consolidated.xml); [OFAC](https://sanctionslistservice.ofac.treas.gov/api/PublicationPreview/exports/SDN.XML)).
- **Weak data.** There is no official PEP list. OpenSanctions shows 219 Paraguay-linked PEPs, mostly from non-Paraguayan sources; its only Paraguayan dataset is members of Congress ([OpenSanctions](https://www.opensanctions.org/countries/py/); [B2 03](../paraguay-b2/03-product-and-tech.md)). The client's signed PEP declaration under Res 50/2019 stays the main control, with a local PEP database as a paid add-on later. I found no public API for the vehicle registry or for customs declarations (2 searches), so chassis and customs data come from the firm's own papers.
- **Stack.** Same engine as B2, so one codebase serves all SEPRELAD sectors. Python and Django with HTMX, PostgreSQL with row-level security, a Postgres job queue, docxtpl and openpyxl for documents and exports. Host it on AWS Lightsail in São Paulo. Rules, deadlines, thresholds and form maps are versioned data, not code.
- **Privacy.** Ley 7593/2025 applies from about late 2027. Secondary sources say it requires a breach notice within 72 hours and adequacy or safeguards for transfers abroad ([Ferrere](https://ferrere.com/es/novedades/paraguay-adopta-su-ley-de-proteccion-de-datos-personales/); [Lawwwing](https://lawwwing.com/proteccion-datos-paraguay-7593-2025/)). Build to that standard now. The 5-year AML retention duty overrides erasure requests ([Law 1015/97](https://www.seprelad.gov.py/transparencia/transparencia/ley10151997actualizada.pdf), Art. 18).
- **Running cost is small:** about USD 75-100 a month at 50 customers, 185-230 at 300 and 395-610 at 1,000. Fixed costs (Claude Code, a content retainer, a yearly security retest) bring total running costs to about USD 625-1,270 a month at 50 customers (my estimates). The vehicle market has only about 845 paying firms, so the 1,000-customer row only applies when the engine also serves real estate ([02](02-market-and-competition.md)).
- **Build plan: MVP in 3 weeks, sellable in 8.**
  - Week 0 (12-18 Oct 2026): capture the vehicle RO format in the live Q3 window (11-20 Oct), interviews, reviewer hired, spec pack for agents.
  - Week 1: foundation.
  - Weeks 2-3: eight agent streams, giving an MVP on Fri 6 Nov 2026.
  - Weeks 4-9: integration, legal sign-off, a security test and a pilot with 5-10 lots through 1-2 registered auditors.

  The product is sellable on Fri 11 Dec 2026, before the Q4 RN (about 15 Jan 2027) and the RO window (11-20 Jan 2027).
- **Cash budget to "sellable": about USD 6,400-20,600, middle case about USD 12,000.** There are no salaries. The main items are a lawyer or AML expert to review templates (USD 2,000-5,000), a security test with a retest (USD 3,000-8,000) and Claude Code (USD 600-1,200). These are my estimates, except the published plan prices.
- **If the B2 real-estate engine is built first,** the vehicle pack is an add-on: about 15-22 agent-days of work, 4-5 calendar weeks with review and pilot, and about USD 2,000-5,000 in cash (my estimate).

## Users and jobs

### Who uses the product

| Role (Spanish label) | Who it is | Main jobs | Rights in the product |
|---|---|---|---|
| **Top authority** (máxima autoridad: owner, partners or board) | The lot owner or the distributor's board. 62% of registered vehicle firms are individuals ([02](02-market-and-competition.md)). | Approve the manual, code, officer appointment, training plan, monitoring rules, enhanced-CDD clients and every ROS ([Res 196](https://baselegal.com.py/docs/78668570-6ae3-11eb-990a-525400c761ca), Art. 7, 24, 29); pay | Everything in the own firm; billing; grant or revoke auditor and consultant access |
| **Compliance officer** (oficial de cumplimiento, OC) and **interim OC** | Usually the owner. Res 196 Art. 8 lets the owner of a one-person firm be the OC. | Run the file; file in SIRO, whose login is issued to the titular OC ([SIRO guide](https://www.seprelad.gov.py/wp-content/uploads/2025/05/2-Inscripcion.pdf)); keep the register of unusual operations not reported (Art. 9); write the annual OC report | Everything, plus the confidential area (alerts, cases, ROS), which others must not see (Art. 33, 36) |
| **Salesperson** (vendedor) | Staff on the lot, often on a phone | Record the sale; capture the buyer's ID; get the declarations signed; flag "something looks odd" | Own sales and clients. Can raise an alert but never sees alert or ROS status (R80). |
| **Back office** (administración, gestor) | Admin or in-house bookkeeper | Enter purchases, imports and consignments; upload invoices and customs papers; prepare the quarter | Operations and clients; no confidential area unless named as OC assistant (Art. 33) |
| **External consultant or accountant** | Runs AML for several lots. Outsourced help is allowed for preparing documents and reports ([Circular 02/2025 via Vouga](https://www.vouga.com.py/en/la-seprelad-recuerda-plazos-y-obligaciones-de-reporte-a-los-sujetos-obligados/), unverified primary text). | Set up and run many firms; watch all deadlines | Per-firm grant; portfolio view; confidential area only if appointed OC assistant |
| **External auditor** (auditor externo registrado) | One of 183 SEPRELAD-registered AML auditors, about 138 providers ([02](02-market-and-competition.md)) | The yearly external audit, with tests on client samples (Art. 14) | Read-only workspace and sampling tool; ROS content only if the OC allows (R99) |
| **Buyer, seller or consignor** (the firm's client) | Private person or company; non-residents include Brazilian and Argentine buyers in border zones (my inference) | Give ID data, sign the source-of-funds and PEP declarations | No account. A one-time link sent by WhatsApp or e-mail (v1). |
| **Content editor** | Our Paraguayan AML lawyer or a registered auditor on contract | Edit templates, rule tables and code tables; publish versions | Admin content area only; no customer data |
| **Platform admin** | The founder | Support, list feeds, billing | Support access only with the firm's time-limited, logged consent |

### Jobs to be done (in the buyer's words)

1. **"Que no me llegue otra nota de advertencia."** (No more warning letters.) Never miss the RO, RN, FA, internal-control report, audit report or canon. The 454 warnings of 2024 were for exactly these ([Memoria 2024](https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf)).
2. **"Cargar el RO del trimestre sin tipear 90 operaciones."** (File the quarter's RO without typing 90 operations.) About 86 per firm per quarter, each with buyer, ID, payment, chassis and, for imports, customs data ([Memoria 2025](https://www.seprelad.gov.py/wp-content/uploads/2026/02/Memoria-Anual-de-Gestion-Ano-2025.pdf); [Res 85/2015 Annex A](https://baselegal.com.py/docs/cd1c84e2-67c0-11eb-86f7-525400c761ca/doc)).
3. **"Que el vendedor llene bien la ficha sin espantar al cliente."** (The seller fills the client file properly without scaring the buyer off.) CIVU said in 2019 that "many sales were lost" because buyers refused the source-of-funds form ([Última Hora, 2019](https://www.ultimahora.com/seprelad-el-50-playa-autos-eluden-el-control-antilavado-n2852685.html)). The simplified regime needs only five fields for a natural person (Art. 22).
4. **"Tener la carpeta lista si viene la SEPRELAD."** (Have the folder ready if SEPRELAD comes.) Random inspections ask for the manual, the OC appointment and training records ([Ferrere](https://ferrere.com/es/novedades/inspecciones-aleatorias-de-seprelad-bajo-resolucion-36-21/)). SEPRELAD inspected 35 vehicle firms in 2025 ([Memoria 2025](https://www.seprelad.gov.py/wp-content/uploads/2026/02/Memoria-Anual-de-Gestion-Ano-2025.pdf)).
5. **"Saber si el cliente es PEP o está en una lista."** (Know if the client is a PEP or listed.)
6. **"Que el Formulario Anual cuadre con lo que reporté."** (The Annual Form matches what I reported.) Only 331 vehicle firms filed the FA in 2025, against 453 that filed ROs (same source).
7. **"Que el auditor termine rápido."** (The auditor finishes fast.) Only 160 vehicle audits reached SEPRELAD in 2025 ([02](02-market-and-competition.md)).

## Feature map

Legend: **MVP** = built in weeks 1-3 and part of the 6 Nov 2026 cut. **Launch** = added in weeks 4-8, before "sellable" on 11 Dec 2026. **v1** = Jan-May 2027, timed to the yearly deadlines. **Later** = after June 2027.

| Module | MVP | Launch | v1 (Jan-May 2027) | Later | Requirements in 01 |
|---|---|---|---|---|---|
| **Firm set-up** | Firm profile (person type, RUC, activities, branches with department and FA zone, FY end); registration status banner; one-person flag | Registration data sheet that mirrors the SIRO form for new firms | Deregistration ("baja") checklist and read-only archive | | R1-R7 |
| **Governance and OC** | Máxima Autoridad record; approvals with name, date and file hash; OC record with the notice data; OC-change timers (5 business days; 48 h interim) | OC eligibility questions; objection window; absence and vacancy limits | OC duties map linked to evidence; OC annual report generator | Reserved codes | R8-R17 |
| **Documents** | Generators for the manual (all five Annex I blocks, with a coverage check), code of ethics and OC appointment act; DOCX and PDF; versions; staff acknowledgements | SIRO notice pack for the OC (CV, sketch map, utility bill checklist) | Update triggers when a legal source changes | Association code upload | R10-R11, R25-R31 |
| **Risk self-assessment** | v0 wizard with the four factors, pre-filled from operations; 2-year and 4-year review dates | Pre-launch risk report (new branch, new zone, new payment type) | Declaration sheet for SIRO's coming risk-matrix module | ENR update when approved | R18-R24 |
| **Training** | Annual plan with the Art. 16 minimum topics; session register with attendance | | Built-in 30-minute course for sellers with a quiz; rule-change notices | | R32-R37 |
| **Vehicle stock and operations** | Vehicle record keyed by chassis or frame number; operations: import, purchase, consignment in, sale (cash or instalments), with trade-in and payment lines by method and currency; Excel or CSV import with a column mapper and row checks | | SIFEN e-invoice XML import (group E770 fields); consignment settlement; instalment schedule tracking | Integration with a dealer system or POS vendor | R3, R25, R38, R82-R86 |
| **Client files (KYC)** | Natural and legal persons; regime engine (simplified, general, enhanced) using the dated minimum-wage table and the trade-in rule; source-of-funds declaration PDF; PEP declaration PDF; ID photo upload; beneficial owners; block on incomplete file | DNIT RUC autofill and status warning | Client self-fill link (WhatsApp or e-mail) with OTP signature; periodic review dates; deferred verification (60 days) | Cédula registry check through a vendor; MRZ reading | R39-R54 |
| **Screening** | UN, OFAC and EU lists, versioned, refreshed every 6 hours; name matcher; hit review; re-screen on list change; FATF and own country tables | Screening certificate per client (PDF) | Log of SIRO's UN-list notices | Paid PEP database add-on (local partner) | R55-R62 |
| **Risk rating** | Rating v0 with the Annex V criteria; history; high forces enhanced regime | | Model method document; weights tied to the self-assessment | | R63-R67 |
| **Monitoring and confidential area** | Staff alert button; alert register with the Art. 29(6) fields; 30-day, 90-day and 24-hour timers; register of unusual operations not reported; ROS draft with a name-leak check | Three automatic red flags: one buyer with N cars in 60 days; sale below acquisition cost by X%; cash advance above a threshold | More rules (early cash payoff of an instalment plan; advance then cancellation); rule approval and versioning | | R68-R81 |
| **Quarterly RO** | Validator; reconciliation with the register; **web-entry copy sheet** in SIRO field order; filing record with receipt upload | **JSON or Excel export**, behind a switch, once the schema is in hand | Schema versions as SEPRELAD adds fields | Browser helper that fills SIRO's web form (only if JSON is not available and SEPRELAD's terms allow it) | R87-R90 |
| **Calendar** | All periodic obligations from rule tables; business days with Paraguayan holidays; e-mail reminders at 14, 7 and 1 days; traffic-light dashboard; RN logic | WhatsApp reminders | SIRO data-confirmation task (Res 435/2026); SEPRELAD request log with a 4-business-day timer | | R91-R93, R102-R104, R116 |
| **Yearly reports** | | | Internal-control report (Annex II) generator by 15 Feb 2027; vehicle FA calculator by 15 Apr 2027 | New FA version "for the 2026 period" when published | R94-R98 |
| **Audit and inspection** | Inspection pack ZIP; gap score per duty | Auditor workspace with client sampling | Findings tracker carried into next year's audit; auditor registration check | | R99-R101, R111-R112 |
| **Practice view** | | Consultant and auditor portfolio: all firms' deadlines and gaps | Bulk set-up of many firms | | R113-R114 |
| **Platform** | MFA; roles; tenant isolation; audit log with hash chain; full export | Paddle billing; help pages | Retention engine (5 years) | Real-estate, jeweller and pawnshop packs on the same engine | R105-R110, R115-R118 |

**Why this cut.**
- The January 2027 RN and RO windows come first. So the calendar, the operations register and the RO copy sheet must be in the MVP.
- The internal-control report is due 31 March, the FA 31 May and the audit 30 June. So those generators can follow in v1, each about six weeks before its deadline ([01](01-law-and-requirements.md), duty table rows 12, 13 and 32).
- The inspection pack is cheap once the documents and registers exist, and it is the clearest selling point after a warning letter.
- The automatic red flags need clean operations data first. A manual alert button and the register cover the legal minimum at launch (Art. 29(3) lets any staff member raise an alert).

## Key flows

### Flow 1: First day (owner or OC, target under 45 minutes)

1. Sign up with e-mail and phone. Set MFA. Pick person type and RUC; the name fills from the DNIT RUC file (Launch).
2. Tick activities (import, purchase, sale, consignment). Add branches. Each branch maps to FA Zone 1, 2 or 3 ([FA instructions](https://www.seprelad.gov.py/userfiles/files/resoluciones/06-22-instructivo-formulario-anual-automotores.pdf)).
3. Enter the SEPRELAD registration number and constancia date. No constancia shows a red banner, because banks check it ([Res 85/2015](https://baselegal.com.py/docs/cd1c84e2-67c0-11eb-86f7-525400c761ca/doc), resolution Art. 4).
4. Name the Máxima Autoridad and the OC. In a one-person firm both are the owner.
5. Answer 15-20 questions on the business: cash share, typical price range, import origins (Chile, Japan, US), instalment sales, branches near borders.
6. The app drafts the manual, code of ethics, OC act, training plan and a first risk self-assessment. The owner reads, edits and approves each one. Approval stores name, date and document hash.
7. Upload last quarter's sales spreadsheet (Flow 3). The dashboard turns green, amber or red per duty.

### Flow 2: Sale at the lot (salesperson, target 5 minutes on a phone)

1. Pick the car from stock by chassis, plate or model. If it is not in stock, create it (Flow 3).
2. Enter the buyer's CI or RUC. The RUC file fills the name. Choose person type.
3. Enter price, currency, modality (cash price or credit), down payment, instalments and any trade-in car.
4. The app computes the payments that count for simplified CDD:
   - a single payment of up to 15 minimum wages (Gs 45.66 million from 1 Jul 2026), or instalments up to 20 minimum wages a year;
   - minus the value of the client's own trade-in car;
   - using the minimum wage in force on the sale date (Art. 22; [Decreto 6225/2026](https://impuestospy.com/impuestos/decreto-n-6225-2026/)).

   It proposes simplified, general or enhanced. Enhanced is mandatory for non-residents, trusts, non-profits and PEPs (Art. 24).
5. The app runs list screening at once. A possible hit stops the sale and alerts the OC.
6. It shows only the fields that regime needs. Simplified is 5 fields. General adds nationality, RUC or non-taxpayer certificate, source of funds and income evidence (Art. 21).
7. Print or show on screen the source-of-funds declaration and the PEP declaration. The buyer signs on paper (photo upload) or on screen. A v1 option sends the buyer a WhatsApp link to fill in his own data and sign with a one-time code.
8. "Complete sale" stays blocked until the file is complete, or the OC records a refusal (Art. 26).
9. A salesperson who senses something wrong taps "Algo no me cierra" (something doesn't add up). The alert goes only to the OC.

### Flow 3: Purchases, imports and consignments (back office)

- **Excel import.** Most lots already keep a sales sheet (inference). The importer maps columns once and saves the mapping. Each row is checked: ID format, required fields, chassis present, no chassis open twice in stock (R86). Bad rows are listed with the reason; good rows load.
- **Import entry.** One customs declaration can cover several cars. Fields: declaration number and date, customs office, importer, foreign seller, broker, description, weights, FOB in USD, origin and provenance, payment orders and channels (R84; [Res 85/2015](https://baselegal.com.py/docs/cd1c84e2-67c0-11eb-86f7-525400c761ca/doc) Annex A). The customs broker's spreadsheet can be imported with its own mapping.
- **Purchase from a private seller.** The seller gets a client file too. Annex III flag 4 checks the price against the car's later sale.
- **Consignment.** The consignor gets full CDD. The sale links back to the consignment and to the settlement paid to the consignor.
- **E-invoice import (v1).** Upload the dealer's SIFEN XML files. The app reads the buyer, amounts, payment condition and the vehicle group (chassis, colour, engine number, year, type, cylinder size) ([SIFEN field list](https://github.com/IonysDev/pkuatia/blob/4d138aad1f5ba7c2474876ec2dd9504fdfb72de9/src/Core/Fields/DE/E/GVehNuevo.php)). Whether used-car dealers fill the E770 group, which the manual labels "vehículos nuevos", is (unverified).

### Flow 4: Quarter close (OC, target 30 minutes)

1. On the 1st of January, April, July and October, the app opens a "close the quarter" task.
2. Reconciliation: every operation in the quarter has a complete client file, a chassis, a payment breakdown and a screening record. Gaps are listed with links.
3. The OC fixes the gaps and clicks "Preparar RO". The app produces:
   - the copy sheet, one card per operation in SIRO's field order, with copy buttons, for one-by-one entry; or
   - the JSON or Excel file, once the firm has switched and the schema is known.
4. The OC files in SIRO between the 11th and 20th ([Circular 02/2025 via Vouga](https://www.vouga.com.py/en/la-seprelad-recuerda-plazos-y-obligaciones-de-reporte-a-los-sujetos-obligados/)). Then the OC uploads the SIRO receipt or a screenshot. The filing record stores period, record count and file hash.
5. RN: if no ROS was filed in the quarter, the app opens the RN task, due 10 business days after the quarter (Art. 37). For Q4 2026 that is Fri 15 Jan 2027 (my count, with 1 Jan a holiday).

### Flow 5: Alert, unusual operation, ROS (OC only)

1. An alert comes from a salesperson, a rule or a list hit. The 30-day clock to class it starts (Art. 29(8)).
2. The OC records steps and documents. The OC classes it "not unusual" (closed, with reasons) or "unusual".
3. An unusual operation has up to 90 days to be classed (Art. 33). "Not suspicious" goes to the register of unusual operations not reported, with reasons (Art. 9).
4. "Suspicious" starts a 24-hour timer and a ROS draft with the Art. 34 content. A check warns if the draft contains the firm's name, RUC or the OC's name (Art. 36). The Máxima Autoridad approves (Art. 7).
5. The OC files in SIRO and records the time and receipt. Sellers see none of this. The client file shows no flag.

### Flow 6: The yearly cycle

| When (FY = calendar year) | What | Product output |
|---|---|---|
| January | Training plan approved | Plan with the Art. 16 topics |
| 31 Mar (Circular says 30 Mar) | Internal-control report (Annex II) in SIRO | Draft built from system data (CDD actions, monthly unusual and ROS counts, training, manual changes) for the OC to sign and upload ([SIRO CI/AE manual, via B2](https://www.seprelad.gov.py/resoluciones/resoluciones/manual-de-usuario-remision-informe-cumplimiento-s-o.pdf)) |
| 31 May | Annual Form | Every vehicle FA figure in screen order: sales, purchases and imports by client type, cash by currency at the BCP rate, zones, import countries, armoured cars, price range ([FA instructions](https://www.seprelad.gov.py/userfiles/files/resoluciones/06-22-instructivo-formulario-anual-automotores.pdf)) |
| 30 Jun (180 days = 29 Jun) | External audit report, by a registered auditor | Auditor workspace, client sample, evidence pack |
| 30 Jun 2026 (set each year) | Canon, Gs 331,000 in 2026 | Reminder; receipt upload within 24 hours ([Res 56/2026](https://www.seprelad.gov.py/resoluciones/resoluciones/RESOLUCION%20N%C2%B0%2056.pdf)) |
| Yearly | SIRO data confirmation (Res 435/2026) | Task; change trigger within 5 business days ([Vouga](https://www.vouga.com.py/en/seprelad-implementa-una-nueva-funcionalidad-para-la-actualizacion-y-confirmacion-de-datos/)) |
| Every 2 years / 4 years | Risk self-assessment / method review | Wizard pre-filled with the period's facts |

### Flow 7: Auditor or consultant with many firms

- Each firm grants access by e-mail invitation. The auditor sees a portfolio list with each firm's gap score and next deadline.
- In audit mode the auditor draws a random client sample by risk tier and exports the files as a ZIP or PDF (Art. 14(d)).
- Findings become tasks with owner and due date. Open findings carry into next year's audit as "follow-up of earlier findings" (Art. 14(g)).

### Flow 8: Inspection or warning letter

- The OC clicks "Paquete de inspección". The ZIP holds the constancia, OC appointment and notice, manual, code and approvals, acknowledgements, self-assessment, training records, monitoring rules, registers (ROS content left out unless the OC opts in), filing history and sample client files (R111).
- A warning letter is logged as a SEPRELAD request with its own timer. The missing filing gets a "catch-up" task.

## Screens

1. **Dashboard ("Semáforo").** One row per duty with green, amber or red, the next deadline and the proof on file. A banner shows missing registration or OC. A "this quarter" card shows operations entered, files incomplete and days to the RO window.
2. **Stock.** Table of cars: chassis, brand, model, year, status (in stock, consigned, sold), days in stock, source operation. Filter by status. Add by form, Excel or XML.
3. **New sale (mobile).** Three short steps: car, buyer, payment. A coloured chip shows the CDD regime and why ("Simplificado: Gs 38.000.000 ≤ 15 SM; parte de pago excluida"). Then a "Firmas" step with the declarations.
4. **Operation detail.** Parties by role, vehicle, payment lines, trade-in, documents, screening result, RO status. Edits after RO export are logged and flagged.
5. **Client file.** Identity, documents, BO tree for companies, PEP declaration, source of funds, income evidence, risk rating with each criterion, history. A completeness bar.
6. **Screening hits.** Side-by-side: our data and the list record, score explanation, decision buttons with a mandatory reason.
7. **Import wizard.** Upload, map columns (saved per source), preview with row errors, load.
8. **Quarter close.** Reconciliation checklist; "Preparar RO"; copy-sheet view with one card per operation and copy buttons; file download; receipt upload.
9. **Calendar.** Month and list views; filters by duty; ICS link; reminder settings (e-mail, WhatsApp).
10. **Documents.** List of documents with version, status (draft, approved, needs review), approver, acknowledgement count; editor with highlighted firm-specific fields; "what changed" when a legal source changes.
11. **Confidential area (OC only).** Alerts with timers, cases, unusual-not-reported register, ROS drafts and filing log. A different header colour so the OC knows when others cannot see the page.
12. **Training.** Plan, sessions, attendance, course player and quiz results (v1).
13. **Yearly reports (v1).** Internal-control report draft; FA calculator with each figure traceable to its operations.
14. **Auditor workspace.** Read-only tabs; sampling tool; findings.
15. **Practice portfolio.** All client firms with gap score, next deadline and last activity.
16. **Settings.** Users and roles, MFA, branches, fiscal year, support-access grants, export everything.
17. **Admin content area (content editor).** Parameters (minimum wage by date, canon by year, holidays), deadline rules, code tables, RO and FA field maps with versions, templates, red-flag pack, each with legal source and effective date.

## Data sources and integrations

### SEPRELAD SIRO: what it accepts

SIRO is a web application behind each firm's own login, issued to the titular OC ([SIRO guide](https://www.seprelad.gov.py/wp-content/uploads/2025/05/2-Inscripcion.pdf)). I found no public API ([01](01-law-and-requirements.md)). Some sectors have had e-mail token two-factor login since 1 Jul 2025; vehicles were not named in that notice ([SEPRELAD communiqués](https://www.seprelad.gov.py/?cat=36)). **The product prepares the data; the OC files; the OC uploads the proof.**

| Filing | How SIRO takes it | Uploads accepted? | What the product produces | Source |
|---|---|---|---|---|
| Registration | Web form plus PDF attachments; "Envío JSON" yes/no is asked at registration | PDFs | Data sheet mirroring the form; document checklist | [SIRO guide](https://www.seprelad.gov.py/wp-content/uploads/2025/05/2-Inscripcion.pdf) |
| OC appointment or change | SIRO OC module, 5 business days (48 h interim) | Attachments (format unverified) | Notice pack with the Art. 10 items | Res 196 Art. 10 |
| RO (operations report) | (1) web form, one operation at a time; (2) JSON bulk file on request, after which one-by-one entry closes. For real estate a "Formulario RO" bulk file also exists. For vehicles, the field list, any Excel route and the JSON schema are (unverified). | Bulk only after the switch | Copy sheet (MVP); JSON or Excel (Launch, once the schema is in hand) | [JSON notice](https://www.seprelad.gov.py/?p=3156); [Res 003/2025](https://www.seprelad.gov.py/userfiles/files/resoluciones/resol-03-2025-ro-inmobiliarias.pdf) (real estate); [Memoria 2025](https://www.seprelad.gov.py/wp-content/uploads/2026/02/Memoria-Anual-de-Gestion-Ano-2025.pdf) |
| RN | Web declaration | No | Task with RN logic; receipt upload | Res 196 Art. 37 |
| ROS | ROS module; SEPRELAD can return a ROS for correction within 15 business days | Attachments (format unverified) | Draft with name-leak check | Res 196 Art. 33-36 |
| FA | Web form that SIRO generates; the firm edits and submits with a sworn statement; printable "ticket de cumplimiento" | No | Figures in screen order; ticket upload | [FA instructions](https://www.seprelad.gov.py/userfiles/files/resoluciones/06-22-instructivo-formulario-anual-automotores.pdf) |
| Internal-control and external-audit reports | "Obligaciones > Informes": pick obligation and period, attach one document, save. No file type or size limit is stated. | One document | Report as PDF and DOCX | [SIRO CI/AE manual (via B2)](https://www.seprelad.gov.py/resoluciones/resoluciones/manual-de-usuario-remision-informe-cumplimiento-s-o.pdf); [Res 202/2023 via Vouga](https://www.vouga.com.py/en/la-seprelad-establece-nuevo-procedimiento-para-la-presentacion-de-informes-a-traves-del-siro/) |
| Canon | Payment slip in SIRO "Cuentas"; pay at BNF; upload receipt within 24 h | Receipt | Reminder; receipt record | [Res 56/2026](https://www.seprelad.gov.py/resoluciones/resoluciones/RESOLUCION%20N%C2%B0%2056.pdf) |
| Data confirmation | Forced pop-up form, sector by sector; vehicles not yet named on 10 Oct 2026 | No | Yearly task; change trigger | [SEPRELAD, 2 Oct 2026](https://www.seprelad.gov.py/?p=4412) |

**The vehicle RO fields: what we know and what we must capture.**
- **Known from the old rule.** Res 85/2015 Annex A lists, for sales and purchases: date; client name; CI or RUC; nationality; occupation; address; phone; cash paid; amount financed; number of instalments; brand, model, year; chassis; seller name and CI or RUC; the firm's SEPRELAD number. For imports: customs declaration number and date; customs office; importer; seller; broker; description; weights; FOB USD; origin and provenance ([Res 85/2015](https://baselegal.com.py/docs/cd1c84e2-67c0-11eb-86f7-525400c761ca/doc)).
- **The likely modern pattern, from real estate.** The Res 003/2025 annex groups fields by operation type (COMPRA, VENTA, INTERMEDIACIÓN). Each type has the asset block, an operation block (type, date, currency, modality, payment form, down payment in Gs, instalment amount in Gs, number of instalments, compensation amount in Gs, total in Gs) and buyer and seller blocks (person type, document type and number, name, nationality, PEP yes/no, country of residence, city, economic activity, landline, mobile). The annex says the list "no será taxativa", and SEPRELAD's instructions decide which fields are mandatory ([Res 003/2025](https://www.seprelad.gov.py/userfiles/files/resoluciones/resol-03-2025-ro-inmobiliarias.pdf), pp. 4-8, my reading of the scan). The real-estate Excel uses camelCase headers, `dd-MM-yyyy` dates, ISO 3166 alpha-3 countries, ISO 4217 currencies, a 245-row city code table and an activity table ([B2 03](../paraguay-b2/03-product-and-tech.md)).
- **Design consequence.** Store a superset: every Res 85 field, every real-estate-pattern field, plus "compensation" for trade-ins. Keep the RO field map as a versioned table, so the vehicle map can be loaded the day we see SIRO's screens, without a code change (R88).
- **Week-0 task.** Sit with 1-2 pilot OCs on a video call while they key their Q3 2026 RO (window 11-20 Oct 2026). Screenshot every field, drop-down and error message. Ask the pilot to send SEPRELAD the note for JSON (firm name, RUC, OC name, institutional e-mail to mesaentrada@seprelad.gov.py) and ask for the schema at the same time ([JSON notice](https://www.seprelad.gov.py/?p=3156)). Warn the pilot first that the switch closes one-by-one entry.
- **Why it matters.** At about 86 operations a quarter, keying each one with about 25-30 fields takes a small firm several hours (my estimate). A JSON or Excel file cuts that to minutes. Without bulk upload, the copy sheet still saves the hunting for data, but the product's time saving shrinks.

**SEPRELAD public data.** The public lookup exports the register of obliged firms and the register of external auditors as Excel files ([SIRO lookup](https://www.seprelad.gov.py/siro/consultaExterna/consultaExternaSoAe.xhtml)). The product uses the auditor export to check a firm's auditor (R100). It also uses the register to answer one Annex V question: is the client itself an obliged subject? The register is also a lead list, which must be used within data-protection limits.

### Tax, invoice and vehicle data

| Source | Endpoint and format | Cost | Use | Phase |
|---|---|---|---|---|
| **DNIT RUC register** | Ten files `ruc0.zip`-`ruc9.zip`, monthly. Lines `RUC|NAME|DV|OLD_RUC|STATUS|`; statuses include ACTIVO, CANCELADO, SUSPENSION TEMPORAL, BLOQUEADO ([DNIT](https://www.dnit.gov.py/web/portal-institucional/listado-de-ruc-con-sus-equivalencias); format checked by the [B2 dive](../paraguay-b2/03-product-and-tech.md), 10 Oct 2026) | Free; reuse terms not found (unverified) | Name autofill; check-digit validation; warning on a cancelled or blocked RUC | Launch |
| **SIFEN e-invoice XML** (e-Kuatia) | XML documents. The item group E770 "Grupo de detalle de vehículos nuevos" holds sale type (E771), chassis (E773), colour (E774), power, engine capacity, weights, fuel type, engine number (E781), year of manufacture (E783), vehicle type (E784), passenger capacity and cylinder size (E786) ([pkuatia library](https://github.com/IonysDev/pkuatia/blob/4d138aad1f5ba7c2474876ec2dd9504fdfb72de9/src/Core/Fields/DE/E/GVehNuevo.php); [anchor-sifen types, "page 91" of the manual](https://github.com/cachesdev/anchor-sifen/blob/4e2297ff8f61c53fd91f335284f917e3bc46b45b/packages/api/src/sifen/types/raw/e.ts)) | Free | Pre-fill sales from the dealer's own invoices; reconcile RO with invoicing | v1 |
| E-invoicing roll-out | New legal entities e-invoice only since Apr 2025; about 3,000 more taxpayers join in six groups from Jun 2026 to Sep 2027 ([DNIT](https://www.dnit.gov.py/web/portal-institucional/w/dnit-designa-nuevos-facturadores-electr%C3%B3nicos); [02](02-market-and-competition.md)) | n/a | Most individual lots probably still use printed invoices (inference), so Excel import stays the main route | n/a |
| **Vehicle registry and customs** | No public API found for the automotive registry or for customs declarations (2 searches). A shipping line notes that Paraguayan customs wants chassis, colour, brand, model, year and tariff code on the bill of lading ([Hapag-Lloyd](https://ams.hapag-lloyd.com/content/dam/website/downloads/local_info/REQUERIMIENTO_DE_LA_ADUANA_PARAGUAYA.pdf)) | n/a | Data comes from the firm's papers and the broker's spreadsheet | n/a |
| Chassis validation | Used cars come mainly from Chile and Japan ([SEPRELAD vehicle risk study](https://www.seprelad.gov.py/documentos/gu-a-de-riesgos-de-la-ft-del-sector-automotor.pdf)). Japanese domestic cars carry frame numbers, not 17-character VINs (my understanding; unverified). | n/a | Accept any format. Validate the check digit only when the number looks like a 17-character VIN. Warn on duplicates in open stock. | MVP |
| BCP reference exchange rate | Daily page with a date picker and a PDF ([BCP](https://www.bcp.gov.py/webapps/web/cotizacion/monedas), seen only in search snippets; unverified) | Free | Gs equivalent of cash in USD and other currencies for the FA | v1 (manual entry in MVP) |
| Minimum wage | A decree each July; Gs 3,044,000 from 1 Jul 2026 ([Decreto 6225/2026](https://impuestospy.com/impuestos/decreto-n-6225-2026/)) | Free | Dated parameter for the simplified-CDD test | MVP |
| Holidays | Ley 7544/2025: four movable holidays moved each year by decree, plus up to three extra holidays a year ([Ferrere](https://ferrere.com/en/news/paraguay-promulga-ley-sobre-feriados-nacionales/)). The Python `holidays` library covers Paraguay ([PyPI](https://pypi.org/project/holidays/)). | Free | Seed table, edited by hand when the yearly decree appears | MVP |

### Sanctions and country lists

| Source | Format | Use | Phase |
|---|---|---|---|
| UN Security Council Consolidated List, binding through Ley 6419/2019 | XML at `scsanctions.un.org/resources/xml/en/consolidated.xml`. The B2 dive downloaded it on 10 Oct 2026: 736 individuals and 274 entities ([UN](https://scsanctions.un.org/resources/xml/en/consolidated.xml); [B2 03](../paraguay-b2/03-product-and-tech.md)). SIRO also notifies each UN list change since Jan 2026 ([SEPRELAD](https://www.seprelad.gov.py/?p=3639)). | Onboarding, each operation, re-screen on change | MVP |
| OFAC SDN | XML ([OFAC](https://sanctionslistservice.ofac.treas.gov/api/PublicationPreview/exports/SDN.XML)) | Annex IV names OFAC | MVP |
| EU consolidated list | XML from the EU Financial Sanctions Database; use a personal EU Login token, because the public file lagged ([Bosnia 03](../bosnia/03-product-and-tech.md)) | Annex IV names the EU terrorist list | MVP |
| FATF lists | Web pages after each plenary (February, June, October); entered by hand | Country risk | MVP |

**Matching.** Upper-case, strip accents, keep Ñ and also try N, drop particles (DE, DEL, LA) and company suffixes (S.A., S.R.L., E.A.S.), handle "SURNAME, NAME" and compound surnames. Pull candidates with PostgreSQL trigram search, score with rapidfuzz, adjust with birth year and nationality, store the explanation. The lists total about 26,000 records, so one small server is enough ([B2 03](../paraguay-b2/03-product-and-tech.md)). Brazilian buyers in Ciudad del Este bring Portuguese names, so the normaliser must also handle Portuguese particles (DA, DOS) (my design choice).

### PEP data

| Source | What it gives | Access and cost | Verdict |
|---|---|---|---|
| **Client's signed PEP declaration** | Self-declared status, office, family links | Required by Res 50/2019 Art. 6 ([Res 50/2019](https://www.seprelad.gov.py/resoluciones/resoluciones/resolucion-n-50-19-por-el-cual-se-aprueba-el-reglamento-de-identificacion-de-personas-expuestas-politicamente.pdf)) | **MVP core control** |
| OpenSanctions | The country page shows 219 PEPs linked to Paraguay and says no Paraguayan official source is included ([OpenSanctions](https://www.opensanctions.org/countries/py/)). The B2 dive found one Paraguay dataset in the index, members of Congress (483 entities) ([B2 03](../paraguay-b2/03-product-and-tech.md)). Commercial use needs a licence. | API per check or bulk licence | Thin; optional later |
| Compliance Paraguay | A database of 9,000+ Paraguayan PEPs, aimed at car dealers among others ([La Nación, Aug 2024](https://www.lanacion.com.py/negocios/2024/08/13/consultora-presenta-herramienta-que-identifica-a-personas-expuestas-politicamente/)) | Price not published | **Best partner** for a paid add-on |
| Criterion S.A. (credit bureau) | Person report with PEP status, court and criminal records, bank bans, for Gs 23,000 a report ([Criterion](https://www.criterion.com.py/index.php?pag=comprar), via [02](02-market-and-competition.md)). No public API found (1 search). | Per report | Link out for enhanced-regime clients; partner later |
| Public-payroll open data (MEF, Viceministerio de Capital Humano) | Names and posts of public employees, which the publisher says must be checked with each institution ([VCHGO note](https://www.contrataciones.gov.py/api/resultado/1f0c61d3-5636-6b30-bea7-ef1a42bab02c/files/bacff8be-ecfb-4f28-a500-72acbf492341/download)) | Licence and fields (unverified) | Later: build our own senior-post list |

### Identity, signatures and messages

- **Cédula.** A chip ID card has been announced by the Police identification department ([ABC, 2023](https://www.abc.com.py/nacionales/2023/03/07/asi-se-veran-las-nuevas-cedulas-y-pasaportes-con-chips/)). Whether the card carries a standard MRZ is (unverified). The MVP stores photos of both sides with "original seen by / on" and the verification method (R46). MRZ reading waits for proof that it saves time.
- **Registry check by vendor (later).** Didit offers a check of a cédula number against the Departamento de Identificaciones registry. It costs USD 0.20 per conclusive query with 500 free checks a month (vendor claim, 20 May 2026; unverified) ([Didit](https://didit.me/blog/paraguay-cedula-database-validation/)). That adds a sub-processor that receives ID numbers, so it must be opt-in and listed in the DPA.
- **Signatures.** Ley 6822/2021 recognises non-qualified and qualified e-signatures. A non-qualified signature is valid, but if the signer denies it, the firm must prove it. A qualified one equals a handwritten signature ([ABC, Aug 2026](https://www.abc.com.py/economia/2026/08/03/firma-electronica-sepa-las-diferencias-entre-la-cualificada-y-no-cualificada/); [Decreto 7576/2022](https://www.mic.gov.py/wp-content/uploads/2025/06/Decreto_7576-2022.pdf)).
  - Staff acknowledgements and approvals: simple e-signature with MFA, timestamp and document hash.
  - Buyer declarations: wet signature photographed (MVP), then an on-screen signature with a one-time code to the buyer's phone (v1). The lawyer must confirm both are enough for sworn declarations.
- **WhatsApp.**
  - Reminders to the firm use utility templates on the WhatsApp Business Platform. A third-party table puts the "Rest of Latin America" rate at about USD 0.0113 a message from 1 Jul 2026 (unverified against [Meta's page](https://developers.facebook.com/docs/whatsapp/pricing)) ([Zernio](https://zernio.com/blog/whatsapp-business-api-pricing)).
  - Links to buyers are sent from the salesperson's own WhatsApp with a click-to-chat link. That costs nothing and looks personal, not like spam (my design choice).
- **E-mail.** Amazon SES in the same region. Subjects never carry personal data.
- **Payments.** Paddle as merchant of record; checkout and webhooks only, no card data on our servers. Fees and company set-up are in the go-to-market and payments sections.

## Data model

All tenant tables carry `firm_id`. Every legal parameter has a source and an effective date.

**Tenancy and people**
- `Firm`: person type, RUC, name, activities (import, purchase, sale, consignment), FY end, one-person flag, SEPRELAD number, constancia date, SIRO JSON switch (yes/no, date), registration status.
- `Branch`: address, department, city code, FA zone (1-3), opened on, pre-launch risk report.
- `User`, `Membership` (role per firm: top authority, OC, interim OC, OC assistant, seller, back office, auditor, consultant), `MFADevice`, `SupportAccessGrant`.
- `ComplianceOfficer`: titular or interim; the Art. 10 notice data (names, ID, nationality, office and home address, phone, e-mail, sketch map, utility bill, CV); appointed, notified and accepted dates; absences.
- `Approval`: object, approver, role, date, file hash. `Acknowledgement`: user, document version, date, method.

**Vehicles and operations (the vehicle-specific heart)**
- `Vehicle`: chassis or frame number (unique per firm while in stock), engine number, type (Art. 1 list), brand, model, year, colour, cc, armoured flag, origin country, status (in stock, consigned, sold, returned), current owner party.
- `Operation`: type (IMPORT, PURCHASE, CONSIGNMENT_IN, SALE, CONSIGNMENT_SETTLEMENT, CANCELLATION), date, vehicle, branch, currency, price, modality (CONTADO or CRÉDITO), down payment, amount financed, number of instalments, trade-in vehicle and its value, CDD regime chosen with the reason and the minimum wage used, source (manual, Excel row, SIFEN XML with its CDC), RO period, RO status (pending, exported, filed), locked-after-filing flag.
- `OperationParty`: party, role (buyer, seller, consignor, importer, foreign supplier, representative, attorney, beneficial owner, third-party payer).
- `PaymentLine`: date, method (cash, transfer, card, cheque, financial or cooperative system, crypto, trade-in or other goods), currency, amount, Gs equivalent, exchange rate and its source, through financial system yes/no.
- `InstalmentSchedule`: due dates, paid dates and amounts; used for the 20-minimum-wage yearly test and the early-payoff flag.
- `ImportDeclaration`: number, date, customs office, broker, importer, foreign seller, FOB USD, weights, origin, provenance, payment orders; links to several vehicles.

**Clients**
- `Party`: person type, names or company name, document type and number, nationality, residence country and city, activity, contacts, PEP status, non-resident flag, itself-an-SO flag.
- `PartyVersion` (snapshot on every change), `IdentityDocument` (images, hash, seen-original by and on, method), `BeneficialOwner` (person, basis of control, percentage), `Representative`.
- `Declaration` (source of funds or PEP; PDF, signature method, hash, date), `IncomeEvidence`, `RiskRating` (criteria values, score, level, reason, user, date), `ReviewSchedule`.

**Screening**
- `ListSource`, `ListVersion` (download time, hash, record count), `ListEntry`, `ScreeningCheck` (party, list version, candidates), `ScreeningHit` (score, explanation, decision, reason, user).

**Confidential area** (separate permission set, encrypted with its own key)
- `Alert` (source, operation, date and time), `Case` (steps, documents, classification, timers), `UnusualNotReported` (reasons), `ROSRecord` (decision time, approval, filing time, SIRO receipt, returned and fixed dates), `MonitoringRule` (version, thresholds, approval).

**Obligations and filings**
- `Obligation` (type, period, due date, rule version), `Task`, `Reminder`, `Filing` (period, record count, file hash, receipt, filed by, filed on), `ROExport` (period, field-map version, format, row count, hash), `FASnapshot` (figures, FA version), `AuthorityRequest` (SEPRELAD request or warning letter: received, due, reply).

**Documents, training, audit**
- `Template` (content-library item), `GeneratedDocument` (version, inputs, approval, status), `RiskAssessment` (period, factor texts, inherent and residual risk, approval), `TrainingPlan`, `TrainingSession`, `Attendance`, `QuizResult`, `AuditEngagement` (auditor, registration checked on), `Finding`.

**Content library (not tenant data)**
- `LegalSource` (resolution, URL, date), `Parameter` (minimum wage by date, canon by year, thresholds), `DeadlineRule`, `Holiday`, `CodeTable` (cities, activities, countries, currencies, document types), `FieldMap` (RO vehicle map and FA map, each versioned), `RedFlagPack`, `ExchangeRate`.

**Audit log.** Append-only, with a hash chain: every create, edit, delete, export and view of client, alert and ROS data (R107).

Key relations:
```
Firm 1-n Branch, Membership, Vehicle, Party, Operation, Obligation
Vehicle 1-n Operation   (import or purchase or consignment -> sale)
Operation n-n Party via OperationParty (role)
Operation 1-n PaymentLine ; Operation 0-1 InstalmentSchedule ; Operation 0-1 ImportDeclaration
Party 1-n Declaration, IdentityDocument, RiskRating, ScreeningCheck
Operation 0-n Alert -> Case -> (UnusualNotReported | ROSRecord)
Obligation 1-n Filing ; ROExport -> Filing
```

## Architecture and stack

### Principles for one founder with parallel AI agents

- **Boring and conventional.** A framework with strong conventions and lots of public code. Agents write idiomatic code, and the founder can review it fast.
- **One repository, one deployable app.** Internal modules with clear owners, not services. Parallel agents work in separate modules and meet at agreed interfaces.
- **Rules are data.** Thresholds, deadlines, enums, field maps and red flags live in versioned tables with tests. A rule change becomes a data change the reviewer can check. The real-estate and vehicle packs differ mostly in these tables and templates.
- **No AI on the compliance path.** The CDD regime, risk score, screening and deadlines are deterministic and explainable, because an auditor tests them. AI only drafts text that a person approves (for example the narrative of the internal-control report).

### Recommended stack

The same as the sibling B2 design, so one engine serves every SEPRELAD sector ([B2 03](../paraguay-b2/03-product-and-tech.md), which checked the versions on PyPI on 10 Oct 2026).

| Layer | Choice | Why |
|---|---|---|
| Framework | Python 3.13, Django (6.1 or 5.2 LTS) | Built-in admin for the content editor; auth, forms and Spanish i18n; best DOCX and Excel libraries |
| Front end | Server-rendered templates with HTMX and a little Alpine.js; mobile-first CSS | The app is forms, lists and documents. Works on cheap phones and weak signal at the lot. |
| Database | PostgreSQL with `pg_trgm`, JSONB snapshots and row-level security on `firm_id` | One database; RLS is a second wall behind the framework |
| Jobs | procrastinate (Postgres-backed queue) | No Redis. Jobs: list refresh every 6 hours, re-screening, reminders at 07:00 Paraguay time, monthly DNIT import, document rendering |
| Documents | docxtpl for Word templates; LibreOffice headless for PDF; WeasyPrint for HTML to PDF | The reviewer edits Word templates; users get DOCX to adapt and PDF to sign |
| Imports and exports | openpyxl; a column mapper; lxml for SIFEN XML; JSON Schema validation once SEPRELAD's schema arrives | Golden-file tests for every format |
| Matching | rapidfuzz, unidecode, pg_trgm | Spanish and Portuguese names |
| Auth | Django auth, Argon2, django-otp (TOTP) | MFA required for top authority, OC, auditor and consultant |
| Files | S3-compatible storage in the same region; KMS encryption; per-firm prefixes; short-lived signed URLs; ClamAV on upload | ID photos and declarations are the most sensitive data |
| Messages | Amazon SES; WhatsApp Cloud API for firm reminders | Cheap; same region |
| Billing | Paddle checkout and webhooks | Merchant of record |
| Monitoring | Sentry or self-hosted GlitchTip; uptime checks; logs without personal data | Small and cheap |
| Deploy | Docker Compose on AWS Lightsail, São Paulo, behind Caddy; GitHub Actions; staging and production | One command to deploy; can move to ECS and RDS later |
| Tests | pytest, factory_boy, Playwright end-to-end, semgrep or bandit, pip-audit | Agents must make tests pass before merging |

**Alternatives.** Next.js with TypeScript would also work, and agents are good at it. Python wins on DOCX and Excel tooling and the Django admin. Fly.io is a managed alternative with a São Paulo region: its managed Postgres starts at USD 38 a month (Basic) and USD 72 (Starter) ([Fly.io docs](https://fly.io/docs/mpg)). Lightsail is cheaper at this size and keeps the B2 and B1 engines in one place.

### Module map (Django apps, one owner stream each)

`core` (tenancy, users, roles, MFA, audit log, support access) · `params` (parameters, code tables, field maps, legal sources) · `calendar` (obligations, tasks, reminders, filings) · `clients` (parties, KYC, declarations, risk rating) · `screening` · `vehicles` (stock, operations, payments, instalments, imports, Excel and XML import) · `ro` (validation, reconciliation, copy sheet, exports) · `documents` (templates, generation, approvals, acknowledgements) · `training` · `confidential` (alerts, cases, ROS log, rules) · `reports` (internal-control report, FA, OC annual report, inspection and audit packs) · `practice` (auditor and consultant portal) · `billing` · `public` (site, help, legal pages).

The B2 design uses one `operations` app for real-estate deals. Here `vehicles` and `ro` replace it. Everything else is shared.

### Diagram

```
Phone or PC browser (HTMX)
      |
   Caddy (TLS) -- Django web app -------- PostgreSQL (RLS, point-in-time backups)
                     |    ^                    ^
                     v    |                    |
               procrastinate workers ----------+
               |         |          |            |
     UN/OFAC/EU feeds  DNIT RUC   LibreOffice   S3 bucket (KMS-encrypted files)
     (XML, 6-hourly)   (monthly)  (DOCX->PDF)   + encrypted copy in a 2nd region
               |
     Amazon SES · WhatsApp Cloud API · Paddle webhooks · (later) PEP partner, Didit
```

## Security, privacy and liability

### Main threats and controls

| Threat | Why it matters here | Control |
|---|---|---|
| Tipping off a buyer | Telling a client about a ROS is an offence ([Law 1015/97](https://www.seprelad.gov.py/transparencia/transparencia/ley10151997actualizada.pdf), Art. 19-20; Res 196 Art. 36). Sellers sit next to buyers. | Confidential area visible only to OC, top authority and named assistants; no flag on the client file; seller roles cannot reach alert or ROS data by screen, search or export (tested, R80) |
| Platform staff reading ROS data | Same duty | ROS and case data encrypted with a per-firm key; support access only by the OC's time-limited, logged grant; no ROS content in logs |
| Cross-tenant leak | Many small firms in one database | Framework scoping plus PostgreSQL RLS; automated cross-tenant read tests in CI |
| Stolen ID images | Each sale stores ID photos | KMS encryption; signed URLs that expire in minutes; virus scan; no ID images in e-mails |
| SIRO credential theft | The OC's SIRO login is the firm's legal channel | We never ask for, store or proxy SIRO passwords |
| Account takeover | Owners share phones and passwords (inference) | MFA mandatory for top authority, OC, auditor and consultant; session timeout; login rate limits |
| Data loss | 5-year retention duty | Daily backups plus point-in-time recovery; encrypted copy in a second region; monthly restore test |
| Tampered records | Inspectors and auditors rely on them | Hash-chained audit log; approved documents and filed ROs become read-only; edits after filing are logged and flagged |

### Data protection: Ley 7593/2025

- **Timing.** Promulgated in late November 2025. Most duties apply 24 months after publication, about November 2027 ([Ferrere](https://ferrere.com/es/novedades/paraguay-adopta-su-ley-de-proteccion-de-datos-personales/); [IAPP](https://iapp.org/news/a/paraguay-da-un-paso-hacia-un-marco-moderno-de-protecci-n-de-la-privacidad)). The implementing decree is still pending (same sources).
- **Duties that matter for us** (secondary sources; article numbers unverified):
  - breach notice to the authority and the data subject within 72 hours ([Lawwwing](https://lawwwing.com/proteccion-datos-paraguay-7593-2025/));
  - transfers abroad need adequacy, decided by the new agency, or standard clauses it will publish (same source);
  - fines from 20 to 2,500 daily minimum wages, up to 5,000 for sensitive data and 10,000 for children's data (same source; [Kiteworks brief](https://www.kiteworks.com/sites/default/files/resources/kiteworks-brief-habilita-soporte-para-la-ley-de-proteccion-de-datos-personales-de-paraguay.pdf)).
- **Roles.** Each vehicle firm is the controller of its client data. We are its processor (encargado). Every customer signs a data-processing agreement that lists sub-processors (AWS, Paddle, the e-mail and WhatsApp providers, any PEP or ID vendor). We are controller only for our own user accounts and billing.
- **Hosting abroad.** Data sits in Brazil, which has its own data-protection law (LGPD). Whether Paraguay's agency will treat Brazil as adequate is (unverified) until the agency publishes its list. Put a transfer clause in the DPA now, and get the lawyer's written view in week 0.
- **Retention beats erasure.** AML records must be kept 5 years (Res 196 Art. 20 and 32; Law 1015/97 Art. 18). So:
  - erasure requests on data under the AML hold are refused, with the legal basis shown;
  - deletion runs only after the period, with a warning and a log;
  - when a firm leaves, it gets a full export (PDF, CSV and JSON) and an "archive only" plan, because its 5-year duty continues.
- **Privacy notice for buyers.** The declarations carry a short Spanish notice saying why the data is collected (Law 1015/97 and Res 196), who keeps it and for how long.

### Liability and positioning

- **A tool plus reviewed templates, not legal advice.** Each document shows "template version X, reviewed by [reviewer] on [date]". The firm reviews, adapts and approves. The approval is recorded (R8).
- **The product never files.** Filings are the firm's sworn acts in SIRO. Circular 02/2025 lets outside services prepare and even submit reports ([Vouga](https://www.vouga.com.py/en/la-seprelad-recuerda-plazos-y-obligaciones-de-reporte-a-los-sujetos-obligados/), unverified primary text). A partner auditor or consultant may file for a firm; we do not.
- **Every decision is a person's.** Regime choice, ratings, hit decisions, alert closures and ROS decisions are recorded as made by a named user (R118).
- **Terms.** Liability capped at 12 months of fees. No liability for fines when the user ignored tasks or hits. Screening covers named lists at a stated time; "no match" is not a guarantee.
- **Change promise.** Update templates and rule tables within 30 days of a new SEPRELAD resolution, for example Res 328/2026 on the external audit, whose text is still (unverified) ([01](01-law-and-requirements.md)).
- **Insurance.** Professional-indemnity and cyber cover for the company abroad; price (unverified).

## Hosting and running costs

**Hosting choice:** AWS Lightsail in São Paulo. The B2 dive fetched the price page on 10 Oct 2026: one bundle price for all regions; 4 GB server USD 24 a month, 8 GB USD 44; managed PostgreSQL USD 30 (2 GB), USD 60 (4 GB), USD 120 (4 GB with high availability); object storage from USD 1-5 a month ([Lightsail pricing](https://aws.amazon.com/lightsail/pricing/); [B2 03](../paraguay-b2/03-product-and-tech.md)).

**Volume assumptions (my estimates).**
- A reporting vehicle firm has about 344 operations a year ([Memoria 2025](https://www.seprelad.gov.py/wp-content/uploads/2026/02/Memoria-Anual-de-Gestion-Ano-2025.pdf)), so about 200-250 counterparties to file.
- About 1-1.5 MB of ID photos and signed declarations per counterparty, so about 0.3 GB per firm per year.

**Monthly running cost (USD, excluding VAT, staff and payment fees; my estimates)**

| Item | 50 customers | 300 customers | 1,000 customers |
|---|---|---|---|
| App and worker servers | 1 × 4 GB: 24 | 8 GB app + 4 GB worker: 68 | 2 × 8 GB app + 8 GB worker + load balancer: 150 |
| PostgreSQL (managed) | 2 GB: 30 | 4 GB: 60 | 4 GB HA (120) to 8 GB HA (230) |
| File storage (about 15 / 90 / 300 GB in year 1) | 1-3 | 3-6 | 6-12 |
| Encrypted backup copy, second region | 1-3 | 3-6 | 8-15 |
| Staging server | 12 | 12 | 24 |
| E-mail (SES) | 1 | 2-5 | 5-15 |
| Error tracking, uptime, logs | 0-20 | 26-50 | 50-100 |
| Domain, DNS, KMS keys, misc. | 5 | 5-10 | 10-20 |
| WhatsApp reminders to firms (about 50 a year each at about USD 0.0113) | 0-3 | 5-15 | 20-45 |
| **Total** | **about 75-100** | **about 185-230** | **about 395-610** |
| Per customer per month | 1.5-2.0 | 0.6-0.8 | 0.4-0.6 |

**Pass-through costs, billed to the customer, not in the table:** paid PEP checks (partner price unknown) and Didit cédula checks (USD 0.20 each, vendor claim). For a firm with 200 checks a year that would be about USD 40 a year (my arithmetic), so it must be an add-on.

**Revenue context.**
- [02](02-market-and-competition.md) suggests USD 15-25 a month for a small lot, USD 30-50 for a mid firm, USD 100-200 for a large distributor and USD 100-150 for an auditor practice. At an average of about USD 25:
  - 50 customers bring about USD 1,250 a month, so infrastructure is about 6-8% of revenue;
  - 300 customers bring about USD 7,500 a month, so infrastructure is about 2.5-3%.
- **1,000 customers is not reachable on vehicles alone.** About 845 vehicle firms pay the canon ([02](02-market-and-competition.md)). That row only applies when the same engine serves real estate and other sectors.
- **Payment fees can exceed hosting.** Paddle charges about 5% + USD 0.50 per payment (third-party figure via [B2 03](../paraguay-b2/03-product-and-tech.md)). On a USD 20 monthly payment that is USD 1.50 (7.5%). Sell annual plans to small lots.

**Fixed operating costs after launch (USD a month; my estimates)**
- Claude Code Max 20x for ongoing work: 200 ([Anthropic](https://support.claude.com/en/articles/11049744-how-much-does-the-max-plan-cost); price also in [third-party guides](https://www.heyuan110.com/posts/ai/2026-02-25-claude-code-pricing/)).
- Lawyer or AML-expert retainer for new resolutions and template updates: 100-300.
- Yearly security retest spread over 12 months: 250-670.

With hosting at 50 customers, this is **about USD 625-1,270 a month**. At USD 25 average revenue and 5-7% payment fees, the vehicle pack covers its own costs at about 30-55 paying firms (my arithmetic).

## Development plan

### Calendar anchors

- **Today** is Sat 10 Oct 2026. The Q3 2026 RO window is open on 11-20 Oct 2026 ([Circular 02/2025 via Vouga](https://www.vouga.com.py/en/la-seprelad-recuerda-plazos-y-obligaciones-de-reporte-a-los-sujetos-obligados/)). It is the only chance this year to watch a real OC key a vehicle RO.
- **First deadlines after launch:** RN for Q4 2026 by about Fri 15 Jan 2027 (10 business days; my count); RO window 11-20 Jan 2027.
- **First yearly deadlines:** internal-control report 31 Mar 2027 (Circular: 30 Mar); FA 31 May 2027; external audit 30 Jun 2027 (180 days = 29 Jun); canon about 30 Jun 2027 ([01](01-law-and-requirements.md), duty table).
- **Holidays in the build window:** 8 Dec (Caacupé) and 25 Dec; January is the summer holiday month ([B2 03](../paraguay-b2/03-product-and-tech.md)).

### Phases (standalone build, vehicles first)

| Phase | Dates | Goal | Exit check |
|---|---|---|---|
| 0. Prepare | Mon 12 - Sun 18 Oct 2026 | Capture the vehicle RO screens in the live window; JSON request through a pilot; interviews; reviewer hired; spec pack; accounts | RO field map v0 from real SIRO screens; 2 pilot lots or 1 auditor committed; reviewer signed |
| 1. Foundation | 19 - 25 Oct | Skeleton, tenancy, auth, audit log, parameters, all models, CI and CD, staging | "Contract freeze": models and service interfaces merged; CI green |
| 2. Parallel modules | 26 Oct - 6 Nov | Eight agent streams build the MVP column | **MVP definition of done, Fri 6 Nov** |
| 3. Integration and launch scope | 9 - 20 Nov | Hardening; RUC autofill; three red-flag rules; auditor workspace; practice view; JSON or Excel RO export if the schema is in hand | End-to-end flows 1-5 pass |
| 4. Legal sign-off | Drafts out 30 Oct; sign-off by 20 Nov | Res 196 templates v1.0, declarations, terms, privacy notice, DPA, disclaimers | Written sign-off |
| 5. Security test | Test 23-27 Nov; fixes 30 Nov - 4 Dec; retest by 9 Dec | External grey-box test of app and infrastructure | No open high or critical findings |
| 6. Pilot | 16 Nov - 11 Dec | 5-10 lots through 1-2 registered auditors and the used-car chambers; free until 31 Jan 2027. Re-create each pilot's Q3 2026 RO from its own sales sheet and compare with what it filed in October. | 5 lots active; 2 with a complete file; time to prepare a quarter measured |
| 7. Sellable | **Fri 11 Dec 2026** | Billing live, help pages, pricing page | "Sellable" definition met |
| 8. First live season | 14 Dec 2026 - 31 Jan 2027 | Support firms through the RN and RO windows; fix the RO output from real SIRO feedback | ROs filed with our output by at least 10 firms |
| 9. Yearly-report releases | Internal-control report by 15 Feb 2027; SIFEN XML import by 28 Feb; vehicle FA calculator by 15 Apr; audit pack polish by 15 May | Meet the CI, FA and audit deadlines | Firms file CI and FA with our output |
| 10. Next | Jun - Sep 2027 | New FA version for the 2026 period; risk-matrix declarations; PEP add-on; second sector pack | Pilot of the second pack |

### Week 0: preparation (12-18 Oct 2026)

- **Capture the vehicle RO (highest value).** Find 1-2 vehicle OCs through a registered auditor such as Cáceres & Schneider, which markets to "playas de autos" ([Cáceres & Schneider](https://consultoria.com.py/prevencion-del-lavado-de-dinero-seprelad/)). Join them by video while they key their Q3 RO. Record every field, drop-down, format rule and error message. Collect their sales sheet, a few invoices (XML if they e-invoice), a customs declaration, their manual and their last FA ticket.
- **Ask for the JSON schema.** The pilot sends the note for bulk JSON ([SEPRELAD](https://www.seprelad.gov.py/?p=3156)). We also ask SEPRELAD's E-Porandu desk for the vehicle RO technical specification.
- **Interviews.** 5 lots (2 in Central, 2 in Alto Paraná, 1 in Caaguazú), 1 importer, 2-3 auditors, 1 consultant. Test the price bands from [02](02-market-and-competition.md).
- **Hire the reviewer.** A Paraguayan AML lawyer, or a registered auditor plus a lawyer, on a fixed fee. Deliverables: Res 196 manual, code of ethics, OC act and notice pack, risk-assessment method, internal-control report template, source-of-funds and PEP declarations, terms, DPA, privacy notice.
- **Spec pack for the agents.**
  - `CLAUDE.md` with conventions and the "no AI on the compliance path" rule;
  - a Spanish-English glossary;
  - the 118 requirements from 01, each mapped to a module and an acceptance test;
  - this data model;
  - a UI pattern sheet with the mobile sale flow;
  - fixtures: a synthetic lot with 80 cars, 150 operations (imports, trade-ins, instalment sales, one non-resident buyer, one PEP) and a messy sales sheet.
- **Accounts.** AWS (São Paulo), domain, GitHub, Paddle sandbox, SES, WhatsApp Business account, error tracker.

### How the founder runs parallel AI agents

- **Contract first.** In week 1 the founder and one agent write every module's models, service-function signatures and URL map, plus failing end-to-end smoke tests. After the freeze, each stream owns one Django app and makes its tests pass. Shared-model changes need the founder's approval.
- **Isolation.** Each stream runs in its own git worktree, branch and Claude Code session. Pull requests stay under about 400 changed lines and need green CI: lint, types, unit, tenancy and end-to-end tests. A reviewer agent comments on each pull request. The founder merges twice a day. `main` is always deployable.
- **Golden tests for the legal parts.**
  - CDD regime at the threshold values: Gs 45.66 million and 60.88 million, on both sides of 1 Jul 2026 (old minimum wage Gs 2,899,048; [01](01-law-and-requirements.md), R42), with and without a trade-in.
  - Deadline rules: one test per obligation, plus weekends, holidays and other fiscal years. RN for Q4 2026 = 15 Jan 2027.
  - RO output equals the captured field map and order exactly.
  - The manual covers every Annex I heading.
  - A seller account cannot reach any confidential field.
- **Guardrails.** Agents get synthetic data only, no production access and no secrets. New dependencies need approval. The founder reviews auth, RLS, file access and the confidential area line by line.
- **Capacity.** One founder can steer about 5-8 parallel streams if each is well specified (my judgement; the B2 dive says 5-7).

### Work streams for the MVP (weeks 2-3)

| Stream | Scope | Main requirements | Depends on | Agent-days (my estimate) | Done when |
|---|---|---|---|---|---|
| **S1 Calendar and obligations** | Obligation engine from rule tables; business days and holidays; tasks; e-mail reminders at 14, 7 and 1 days; dashboard; filing records with receipts; RN logic | R91-R93, R102, R116 | Foundation; S6 for "ROS filed in quarter" | 6-8 | All deadlines from Oct 2026 to Dec 2027 pass tests |
| **S2 Clients and KYC** | Natural and legal persons; versions; documents with hash; BO; PEP and source-of-funds declaration PDFs; regime engine with trade-in and instalment rules; risk rating v0; enhanced approval | R39-R54, R55-R57, R63-R67 | Foundation; params | 9-11 | Threshold tests pass; an incomplete file blocks "complete sale" |
| **S3 Screening** | UN, OFAC and EU fetchers with versions and diffs; FATF table; normaliser (Spanish and Portuguese); matcher; hit review; re-screen on change | R59-R62 | S2 party model | 6-8 | A seeded list name produces a hit within one cycle; decisions logged |
| **S4 Vehicles and operations** | Vehicle stock; import, purchase, consignment and sale forms; payment lines; trade-in links; import declarations; mobile sale flow; Excel import with mapper and row checks | R3, R38, R82-R86 | Foundation; S2 | 9-12 | A 150-row messy sheet loads with clear errors; one car cannot be open twice |
| **S5 RO and reconciliation** | Versioned field map; validator; reconciliation; copy sheet; JSON and Excel exporters behind a switch; exported and filed states | R87-R90 | S4 | 5-7 | Copy sheet matches the captured SIRO order; a 100-operation quarter renders in under 5 seconds |
| **S6 Documents, approvals and confidential area** | docxtpl engine; Res 196 manual, code, OC act; approvals; acknowledgements; alert register, cases, unusual-not-reported register, ROS draft with name-leak check and timers | R8-R11, R25-R31, R68-R81 (rules later) | Foundation | 8-10 | Coverage test passes; seller cannot see confidential data |
| **S7 Onboarding, inspection pack, billing, public site** | Set-up wizard; gap score; inspection ZIP; Paddle sandbox; Spanish landing, pricing and legal pages with placeholder text | R1-R7, R111-R112 | S1, S6 | 6-8 | A new firm reaches the dashboard in under 45 minutes; ZIP holds every listed item |
| **S8 QA and security (continuous)** | Playwright flows 1-5; cross-tenant tests; static analysis; dependency audit; accessibility on small screens; review comments | R105-R110 | All | 5-8 | CI blocks merges on failure |

**Launch-scope streams (weeks 4-6):** S9 RUC import and autofill; S10 three red-flag rules with approval; S11 auditor workspace and sampling; S12 practice portfolio; S13 JSON or Excel RO export once the schema is known; S14 WhatsApp reminders; S15 full export and archive.

**v1 streams (Jan-May 2027):** internal-control report generator; SIFEN XML import; vehicle FA calculator with BCP rates; client self-fill link with OTP signature; training course and quiz; risk-matrix declaration sheet.

**Effort check.** The MVP is about 54-72 agent-days (S1-S8). Eight streams over 10 working days give about 80 stream-days, so it fits with a small margin for review and merges. If it slips, cut in this order: the JSON exporter, the risk rating detail, the ICS feed, copy-sheet styling.

### Definition of done: MVP (Fri 6 Nov 2026)

1. A test user sets up a firm in under 45 minutes on staging (timed with two people who have not seen the app).
2. The calendar creates every periodic obligation from Oct 2026 to Dec 2027 with the right dates. Tests cover RO 11-20, RN 10 business days, internal-control report, FA 31 May, audit, OC notice in 5 business days, risk review at 24 months and method review at 48.
3. A salesperson completes a simple cash sale with a simplified-regime buyer in under 5 minutes on a mid-range phone. The regime engine passes all boundary tests, including trade-ins and instalments.
4. Client files work for natural and legal persons. Declaration PDFs generate. Uploads store a hash.
5. UN, OFAC and EU lists load on schedule with versions. A seeded name produces a hit. Each decision and its reason are logged.
6. The register holds imports, purchases, consignments and sales linked to one vehicle. The Excel import loads the synthetic messy sheet with clear row errors.
7. The RO copy sheet for a quarter follows the field order captured in week 0. Reconciliation blocks "ready to file" on any gap.
8. The manual, code and OC act generate with approvals and hashes. The confidential area is closed to seller and back-office roles.
9. MFA is enforced for OC and top authority. Cross-tenant tests pass. The audit-log chain verifies. One backup has been restored.
10. End-to-end flows 1-5 pass in CI. No open priority-1 bugs.

### Definition of "sellable" (Fri 11 Dec 2026)

- MVP done, plus RUC autofill, three red-flag rules, auditor workspace, practice view, inspection pack and full export.
- Templates v1.0, declarations and legal pages signed off in writing by the reviewer.
- Security test complete with no open high or critical findings.
- 5 or more pilot lots active, at least 2 with a complete file. At least one pilot's Q3 RO re-created from its sales sheet with no field differences.
- Paddle live with monthly, annual and practice plans.
- Help pages and short videos for the January windows. DPA, sub-processor list and incident plan published.

### If the real-estate engine (B2) is built first

The B2 plan already lists a "car-dealer pack" for Jun-Sep 2027 ([B2 03](../paraguay-b2/03-product-and-tech.md)). On that engine the vehicle pack needs:
- `vehicles` and `ro` apps (S4, S5): about 12-16 agent-days;
- vehicle rules in the regime engine (trade-in, instalments) and the vehicle FA map: about 2-4 agent-days;
- Res 196 templates and declarations: content work plus reviewer time;
- the three vehicle red-flag rules: about 1-2 agent-days.

Total about 15-22 agent-days, or 2-3 weeks with 3 streams, plus 2 weeks of review and pilot (my estimate). Cash is about USD 2,000-5,000: reviewer USD 1,000-2,500, a scoped security retest USD 1,000-2,500, plus small pilot costs (my estimate). Doing vehicles as the second pack also avoids building on an unknown RO format: by mid-2027 the vehicle field map and JSON schema should be in hand.

**Which first?** From a technical view, real estate is safer because its RO format is published. Vehicles have the sharper time-saving story (about 86 operations a quarter typed by hand). If week 0 captures the vehicle RO format, both packs can ship together on 11 Dec 2026 with two extra streams (S4 and S5), at the edge of what one founder can steer (my judgement).

## Budget

**Cash budget to "sellable" (Oct-Dec 2026; USD; no salaries; my estimates unless cited)**

| Item | Low | Middle | High | Notes |
|---|---|---|---|---|
| Claude Code Max 20x, 1-2 seats for 3 months | 600 | 1,200 | 1,200 | USD 200 per seat a month ([Anthropic](https://support.claude.com/en/articles/11049744-how-much-does-the-max-plan-cost)) |
| Lawyer or AML-expert review: Res 196 templates, declarations, terms, privacy notice, DPA | 2,000 | 3,500 | 5,000 | Fixed fee; no published Paraguayan rates found (1 search) |
| Registered auditor as paid design partner (internal-control and audit pack) | 0 | 500 | 1,000 | Can be paid in free licences |
| External security test plus retest | 3,000 | 5,000 | 8,000 | 2026 guides put a small web-app test at about USD 5,000-15,000; quotes under about USD 2,000 are often scans ([Blaze](https://www.blazeinfosec.com/post/how-much-does-penetration-testing-cost/); [Redfox](https://www.redfoxsec.com/blog/how-much-does-web-application-penetration-testing-cost-2026-pricing-guide)). A scoped 3-4 day test of a small app is the low end. |
| Hosting, production and staging, 3 months | 150 | 200 | 300 | [Lightsail pricing](https://aws.amazon.com/lightsail/pricing/) |
| Domain, e-mail, monitoring, password manager, small SaaS | 50 | 100 | 200 | |
| Spanish (Paraguay) copy-editing of UI, declarations and help | 0 | 300 | 500 | |
| Test credits (WhatsApp, Didit) | 0 | 20 | 50 | Didit gives 500 free checks a month (vendor claim) |
| Optional week in Asunción and Ciudad del Este (auditors, chambers, pilot lots) | 0 | 0 | 2,500 | Unverified prices |
| Contingency (10%) | 580 | 1,080 | 1,875 | |
| **Total** | **about 6,400** | **about 11,900** | **about 20,600** | |

**Not in this table:**
- The founder's time.
- Company formation abroad, any local company, and payment set-up. These are in the go-to-market and payments sections.
- Marketing.

**Year 1 after launch (my estimates):**
- Hosting: about USD 1,000-2,500 for the year as customers grow.
- Claude Code: USD 2,400.
- Content retainer: USD 1,200-3,600.
- Yearly security retest: USD 3,000-8,000.
- PEP and ID checks: pass-through.
- Paddle fees: about 5-8% of revenue.

## Risks

| Risk | Why it matters | Mitigation |
|---|---|---|
| Vehicle RO format unknown | The time-saving claim rests on it; a wrong field order means rejected filings | Capture SIRO screens in week 0; versioned field map; copy sheet works even without bulk upload; ask for the JSON schema through a pilot |
| JSON switch locks out one-by-one entry | A firm that switches depends on a correct file every quarter ([SEPRELAD](https://www.seprelad.gov.py/?p=3156)) | Warn before switching; keep a fallback export; test every quarter's file against the schema |
| SEPRELAD extends SIRO | The risk-matrix module pre-fills from RO data and asks firms to declare their documents ([Memoria 2025](https://www.seprelad.gov.py/wp-content/uploads/2026/02/Memoria-Anual-de-Gestion-Ano-2025.pdf)) | Position on the evidence behind each declaration, KYC files and data preparation, which SIRO does not plan |
| Rules change mid-year | New FA for the 2026 period; new RO fields under study; Res 328/2026 on audits (text unverified) | Rules, maps and templates as data; reviewer retainer; 30-day update promise |
| Sales staff resist the KYC step | Buyers refused the form in 2019 ([Última Hora](https://www.ultimahora.com/seprelad-el-50-playa-autos-eluden-el-control-antilavado-n2852685.html)) | Auto-chosen simplified regime; 5-minute flow; buyer self-fill link (v1) |
| Data breach of ID images | Reputational and legal; 72-hour notice from 2027 | Encryption, signed URLs, MFA, pen test, incident plan |
| Agent-written code hides security bugs | Fast parallel work, little human review time | Contract-first design, small PRs, reviewer agent, founder line-by-line review of auth, RLS, files and confidential area; external test before sale |
| Founder bandwidth | One person steers 8 streams, content, pilots and sales | Cut list; second pack only after launch; auditors as resellers |
| Thin PEP data | No official list; OpenSanctions coverage is small | Signed declarations; partner database as add-on; curated list later |
| Small market | About 845 paying vehicle firms ([02](02-market-and-competition.md)) | One engine for all SEPRELAD sectors; keep running costs under USD 1,300 a month |

## Open questions

1. **Vehicle RO field list, any Excel route and the JSON schema.** No public specification found (2 searches, SEPRELAD media library, 2 guessed URLs). Capture in week 0; ask SEPRELAD through a pilot. (unverified)
2. **Do vehicle firms get the same JSON switch as real estate**, and is it already live for vehicles? The SIRO registration form asks "Envío JSON" for all sectors ([SIRO guide](https://www.seprelad.gov.py/wp-content/uploads/2025/05/2-Inscripcion.pdf)), but the Aug 2025 notice names only real estate. (unverified)
3. **Does SIRO pre-fill the vehicle FA from ROs?** The FA is "Generado" by SIRO ([FA instructions](https://www.seprelad.gov.py/userfiles/files/resoluciones/06-22-instructivo-formulario-anual-automotores.pdf)). If it pre-fills, our FA calculator becomes a cross-check rather than a source. (unverified)
4. **Do used-car dealers fill the SIFEN E770 vehicle group** on their e-invoices, or only new-car dealers? Check with 2-3 pilots' XML files. (unverified)
5. **Is a simple e-signature with a one-time code enough** for the buyer's sworn source-of-funds and PEP declarations? Ask the reviewer. (unverified)
6. **Is the old Res 85/2015 Annex B declaration form still required as is**, or is any form with the Art. 21 content enough? ([01](01-law-and-requirements.md), open question 5)
7. **Brazil hosting under Ley 7593/2025.** The agency's adequacy list and standard clauses do not exist yet. Get a written lawyer's view in week 0. (unverified)
8. **Cédula MRZ.** Does the current card carry a standard MRZ that a phone can read? (unverified)
9. **Compliance Paraguay's PEP database:** price, update rhythm, licence for resale.
10. **DNIT RUC reuse terms** for a commercial product. (unverified)
11. **Volume of large importers.** The 30 large importers may have thousands of operations a quarter. Test the import and export with 5,000 rows before selling to them.

## Sources

Primary legal and regulator sources
- Res SEPRELAD 196/2020 (Base Legal): https://baselegal.com.py/docs/78668570-6ae3-11eb-990a-525400c761ca
- Law 1015/97 consolidated (SEPRELAD, June 2025): https://www.seprelad.gov.py/transparencia/transparencia/ley10151997actualizada.pdf
- Res SEPRELAD 85/2015 with RO annexes (Base Legal): https://baselegal.com.py/docs/cd1c84e2-67c0-11eb-86f7-525400c761ca/doc
- Res SEPRELAD 003/2025, real-estate RO module and field annex (scan; pages 3-9 read on 10 Oct 2026): https://www.seprelad.gov.py/userfiles/files/resoluciones/resol-03-2025-ro-inmobiliarias.pdf
- Real-estate RO Excel specification (via the B2 dive): https://www.seprelad.gov.py/resoluciones/resoluciones/contenido-archivo-excel-ro-inmobiliarias.pdf
- SEPRELAD notice on JSON bulk RO, 22 Aug 2025: https://www.seprelad.gov.py/?p=3156
- SEPRELAD notice on vehicle-sector training with Criterion, 16 Sep 2026: https://www.seprelad.gov.py/?p=4381
- SIRO registration guide v3.0: https://www.seprelad.gov.py/wp-content/uploads/2025/05/2-Inscripcion.pdf
- SIRO manual for internal-control and audit reports (via the B2 dive): https://www.seprelad.gov.py/resoluciones/resoluciones/manual-de-usuario-remision-informe-cumplimiento-s-o.pdf
- FA instructions, vehicle sector: https://www.seprelad.gov.py/userfiles/files/resoluciones/06-22-instructivo-formulario-anual-automotores.pdf
- Res 56/2026 canon: https://www.seprelad.gov.py/resoluciones/resoluciones/RESOLUCION%20N%C2%B0%2056.pdf
- Res 50/2019 PEPs: https://www.seprelad.gov.py/resoluciones/resoluciones/resolucion-n-50-19-por-el-cual-se-aprueba-el-reglamento-de-identificacion-de-personas-expuestas-politicamente.pdf
- SEPRELAD UN-list notices in SIRO: https://www.seprelad.gov.py/?p=3639
- SEPRELAD data-confirmation notice, 2 Oct 2026: https://www.seprelad.gov.py/?p=4412
- SEPRELAD communiqués: https://www.seprelad.gov.py/?cat=36
- SIRO public lookup: https://www.seprelad.gov.py/siro/consultaExterna/consultaExternaSoAe.xhtml
- SEPRELAD Memoria 2025: https://www.seprelad.gov.py/wp-content/uploads/2026/02/Memoria-Anual-de-Gestion-Ano-2025.pdf
- SEPRELAD Memoria 2024: https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf
- SEPRELAD vehicle-sector risk study: https://www.seprelad.gov.py/documentos/gu-a-de-riesgos-de-la-ft-del-sector-automotor.pdf
- Decreto 6225/2026 minimum wage: https://impuestospy.com/impuestos/decreto-n-6225-2026/
- Decreto 7576/2022 (trust services): https://www.mic.gov.py/wp-content/uploads/2025/06/Decreto_7576-2022.pdf
- DNIT RUC register: https://www.dnit.gov.py/web/portal-institucional/listado-de-ruc-con-sus-equivalencias
- DNIT, new e-invoicers (RG 52/2026): https://www.dnit.gov.py/web/portal-institucional/w/dnit-designa-nuevos-facturadores-electr%C3%B3nicos
- BCP exchange rates (snippet only): https://www.bcp.gov.py/webapps/web/cotizacion/monedas
- VCHGO public-employee register note: https://www.contrataciones.gov.py/api/resultado/1f0c61d3-5636-6b30-bea7-ef1a42bab02c/files/bacff8be-ecfb-4f28-a500-72acbf492341/download

Law-firm and press summaries
- Vouga, Circular 02/2025: https://www.vouga.com.py/en/la-seprelad-recuerda-plazos-y-obligaciones-de-reporte-a-los-sujetos-obligados/
- Vouga, Res 202/2023: https://www.vouga.com.py/en/la-seprelad-establece-nuevo-procedimiento-para-la-presentacion-de-informes-a-traves-del-siro/
- Vouga, Res 435/2026: https://www.vouga.com.py/en/seprelad-implementa-una-nueva-funcionalidad-para-la-actualizacion-y-confirmacion-de-datos/
- Ferrere, random inspections: https://ferrere.com/es/novedades/inspecciones-aleatorias-de-seprelad-bajo-resolucion-36-21/
- Ferrere, Ley 7593/2025: https://ferrere.com/es/novedades/paraguay-adopta-su-ley-de-proteccion-de-datos-personales/
- Ferrere, holidays law: https://ferrere.com/en/news/paraguay-promulga-ley-sobre-feriados-nacionales/
- IAPP on Ley 7593/2025: https://iapp.org/news/a/paraguay-da-un-paso-hacia-un-marco-moderno-de-protecci-n-de-la-privacidad
- Lawwwing on Ley 7593/2025: https://lawwwing.com/proteccion-datos-paraguay-7593-2025/
- Kiteworks brief on Ley 7593/2025: https://www.kiteworks.com/sites/default/files/resources/kiteworks-brief-habilita-soporte-para-la-ley-de-proteccion-de-datos-personales-de-paraguay.pdf
- ABC, e-signature types (Aug 2026): https://www.abc.com.py/economia/2026/08/03/firma-electronica-sepa-las-diferencias-entre-la-cualificada-y-no-cualificada/
- ABC, chip ID cards (2023): https://www.abc.com.py/nacionales/2023/03/07/asi-se-veran-las-nuevas-cedulas-y-pasaportes-con-chips/
- Última Hora, 2019 (buyers refusing the form): https://www.ultimahora.com/seprelad-el-50-playa-autos-eluden-el-control-antilavado-n2852685.html
- La Nación, Compliance Paraguay PEP database (Aug 2024): https://www.lanacion.com.py/negocios/2024/08/13/consultora-presenta-herramienta-que-identifica-a-personas-expuestas-politicamente/
- Cáceres & Schneider (auditor): https://consultoria.com.py/prevencion-del-lavado-de-dinero-seprelad/
- Hapag-Lloyd, Paraguayan customs requirements for vehicles: https://ams.hapag-lloyd.com/content/dam/website/downloads/local_info/REQUERIMIENTO_DE_LA_ADUANA_PARAGUAYA.pdf

Data feeds and vendors
- UN consolidated list XML: https://scsanctions.un.org/resources/xml/en/consolidated.xml
- OFAC SDN XML: https://sanctionslistservice.ofac.treas.gov/api/PublicationPreview/exports/SDN.XML
- OpenSanctions, Paraguay: https://www.opensanctions.org/countries/py/
- Criterion: https://www.criterion.com.py/index.php?pag=comprar
- Didit, cédula registry check: https://didit.me/blog/paraguay-cedula-database-validation/
- SIFEN vehicle group, pkuatia library: https://github.com/IonysDev/pkuatia/blob/4d138aad1f5ba7c2474876ec2dd9504fdfb72de9/src/Core/Fields/DE/E/GVehNuevo.php
- SIFEN types, anchor-sifen: https://github.com/cachesdev/anchor-sifen/blob/4e2297ff8f61c53fd91f335284f917e3bc46b45b/packages/api/src/sifen/types/raw/e.ts
- Python holidays library: https://pypi.org/project/holidays/
- WhatsApp pricing (Meta): https://developers.facebook.com/docs/whatsapp/pricing
- WhatsApp pricing table (Zernio): https://zernio.com/blog/whatsapp-business-api-pricing

Hosting, tools and services
- AWS Lightsail pricing: https://aws.amazon.com/lightsail/pricing/
- Fly.io Managed Postgres: https://fly.io/docs/mpg
- Anthropic, Max plan price: https://support.claude.com/en/articles/11049744-how-much-does-the-max-plan-cost
- Claude plan prices (third-party guide): https://www.heyuan110.com/posts/ai/2026-02-25-claude-code-pricing/
- Blaze Information Security, pen-test costs: https://www.blazeinfosec.com/post/how-much-does-penetration-testing-cost/
- Redfox Security, pen-test costs: https://www.redfoxsec.com/blog/how-much-does-web-application-penetration-testing-cost-2026-pricing-guide

Sibling files used
- 01 law and requirements: [01-law-and-requirements.md](01-law-and-requirements.md)
- 02 market and competition: [02-market-and-competition.md](02-market-and-competition.md)
- B2 real-estate product design: [../paraguay-b2/03-product-and-tech.md](../paraguay-b2/03-product-and-tech.md)
- Bosnia product design: [../bosnia/03-product-and-tech.md](../bosnia/03-product-and-tech.md)
