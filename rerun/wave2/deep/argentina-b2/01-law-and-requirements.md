# Argentina: INAES and UIF duties of small co-operatives and mutuales, turned into product requirements

Status: complete as of 2026-10-10 (open questions at the end). Article numbers come from the official texts where I could read them (Boletín Oficial, argentina.gob.ar/normativa, Infoleg annexes, official INAES user guides). Where only a secondary summary was available, the text says so.

Abbreviations:
- INAES = Instituto Nacional de Asociativismo y Economía Social, the national regulator of co-operatives (Law 20.337) and mutuales (Law 20.321).
- UIF = Unidad de Información Financiera, Argentina's financial intelligence unit (Law 25.246).
- ARCA = Agencia de Recaudación y Control Aduanero, the federal tax agency (ex AFIP).
- SAEM = Servicio de Ayuda Económica Mutual, the lending and savings service of a mutual (Res INAES 1418/03).
- TAD = Trámites a Distancia, the federal online filing platform (needs the entity's CUIT and the clave fiscal of an authorised representative).
- Local body = "órgano local competente", the provincial authority for co-operatives and mutuales.
- DDJJ = declaración jurada (sworn statement).
- ROS = reporte de operación sospechosa (suspicious transaction report).
- PEP = politically exposed person. CRS = OECD Common Reporting Standard.
- SMVM = salario mínimo, vital y móvil (national minimum wage), used as a threshold unit.
- "Business days" = días hábiles administrativos (weekdays that are not national holidays or declared non-working days).

## Summary

- **Three stacks of duties, one buyer.** A small lending mutual or credit co-operative now carries:
  - INAES information regimes, all filed on free INAES web systems or TAD;
  - UIF anti-money-laundering (AML) duties, which are mostly records and documents that no portal keeps;
  - governance filings around the yearly assembly.
  The INAES filings are sworn statements (DDJJ). Missing them leads to suspension, loss of the lending rule, or withdrawal of the licence ([Res 878/2024](https://contadoresenred.com/resolucion-878-2024/); [Res 565/2026](https://www.boletinoficial.gob.ar/detalleAviso/primera/339254/20260310); [Res 3034/2024 art. 10](https://www.boletinoficial.gob.ar/detalleAviso/primera/318057/20241212)).
- **The monthly SAEM return moved to a manual web form.** Res INAES 1279/2026 (BO 25/06/2026) applies from the July 2026 period. It "completely replaces" the old spreadsheet download and upload. Overdue months must be re-sent in the new system ([Res 1279/2026](https://www.argentina.gob.ar/normativa/nacional/norma-427021/texto)).
  - The official guide shows six annexes. Each field starts at "0" and is typed in by hand. A "Validar Consistencia" check runs at the end. Then the president, treasurer, secretary and three supervisory-board members must be entered by CUIT. The output is a PDF ([guide IF-2026-57548748](https://contadoresenred.com/wp-content/uploads/2026/06/Instructivo.pdf)).
  - The guide shows no file import (the live system was not seen).
  - The figures need real calculation from the loan book: arrears buckets in five risk situations, provisions by guarantee type, guarantee fund, savings-capture limits, and the 20 largest savers.
- **The member roll does accept a file.** Res INAES 756/2025 requires every co-op and mutual to file its member roll by 10 January each year. UIF-obligated entities file every quarter, within 10 days, and add risk level, PEP status and country of residence ([Res 756/2025](https://contadoresenred.com/cooperativas-y-mutuales-sistema-integrado-de-nomina-de-asociados-y-autoridades/)).
  - The system takes a semicolon-separated CSV with 23 defined columns, and a 5-column removals file ([manual IF-2025-35836690](https://servicios.infoleg.gob.ar/infolegInternet/anexos/410000-414999/411657/res756-1.pdf)).
  - Software can generate this file exactly.
- **A new AML filing is due on 1 December 2026.** Res INAES 1567/2026 is in force from 02/09/2026. The first filing is due within 90 days, then every year by 20 January. It covers the UIF registration, compliance officers, AML manual and board minutes, gross loans, representatives, and the top 20 capital holders (co-ops only). Board and supervisory members also file PEP DDJJs, signed in TAD ([Res 1567/2026](https://www.consejosalta.org.ar/wp-content/uploads/INAES-1567.pdf)).
- **UIF Res 99/2023 sets the record-keeping core.** No portal does this work ([UIF 99/2023 consolidated](https://www.consejo.org.ar/storage/attachments/Resoluci%C3%B3n%20UIF%2099-2023%20-%20Asoc%20mutuales%20-5PZL7x2v5w.pdf)):
  - a risk self-assessment, a risk-tolerance statement and the method behind them, sent by 30 April;
  - a yearly external review, due 120 days later;
  - an AML manual, reviewed every year;
  - a training plan and register;
  - client risk rating and file refresh every 1, 3 or 5 years;
  - a log of unusual transactions;
  - ROS within 24 hours;
  - a monthly report of transactions of 12 SMVM or more (RMT) and a yearly report (RSA);
  - 10-year retention.
  Small lenders that only broker loans, or that lend their own funds collected by payroll deduction, may do several of these every two years.
- **CRS identification is new and still half-defined.** Res INAES 1038/2026 makes mutuales that take members' savings collect nationality, tax residence, foreign tax number, and date and place of birth, for CRS and FATCA. The reporting regime to ARCA is still "to be set" ([Res 1038/2026](https://www.boletinoficial.gob.ar/detalleAviso/primera/342341/20260526?busqueda=1)).
- **Assembly cycle.** Mutuales must file pre-assembly documents 10 business days before the assembly, and post-assembly documents within 30 calendar days, through TAD ([Res 3108/2018](https://www.argentina.gob.ar/normativa/nacional/norma-316294/texto)). Co-ops must hold the assembly within 4 months of year end and send the documents at least 15 days before it ([Law 20.337 arts. 41, 47, 48](https://faolex.fao.org/docs/pdf/arg162229.pdf)).
- **Enforcement is administrative and real.**
  - INAES: mass suspensions and licence withdrawals for missing filings ([Res 878/2024](https://contadoresenred.com/resolucion-878-2024/); [Res 565/2026](https://www.boletinoficial.gob.ar/detalleAviso/primera/339254/20260310)).
  - INAES: lending rules lapse after 3 missed monthly periods and a 20-day warning ([Res 3034/2024 art. 10](https://www.boletinoficial.gob.ar/detalleAviso/primera/318057/20241212)).
  - UIF: fines of 15 to 2,500 módulos per breach, at ARS 54,140 per módulo, so ARS 0.8 million to ARS 135 million ([Law 25.246 art. 24](https://stabogados.com.ar/penal/leyes-penales-especiales/ley-25246/arts-24-26/); [Res UIF 95/2025](https://www.argentina.gob.ar/normativa/nacional/norma-414295/texto)).
- **Product.** The 88 requirements below center on:
  - an applicability and deadline engine;
  - a member register that exports the INAES CSV and holds UIF and CRS fields;
  - a loan-book calculator that produces the six SAEM annexes in the form's order, with the same checks;
  - an AML pack (self-assessment, manual, training, risk rating, unusual-operations log, STR and RMT timers);
  - assembly checklists;
  - a multi-entity accountant view.
  The product prepares and tracks. It never files or signs for the entity: every filing is a DDJJ, and TAD needs the representative's own clave fiscal.

## Who is obliged

There is no size threshold or micro-entity exemption in any INAES rule I read. Volunteer-run entities are covered like any other. Small entities get relief from the UIF in one case only: the "biennial" option.

| Duty set | Who | Threshold, exemption or relief | Source |
|---|---|---|---|
| Member and authorities roll | All co-ops and mutuales, "whatever their object and services" | None. UIF-obligated entities file quarterly and add 3 fields | [Res 756/2025 arts. 2, 3, 5, 6](https://contadoresenred.com/cooperativas-y-mutuales-sistema-integrado-de-nomina-de-asociados-y-autoridades/) |
| Assembly documents and financial statements | All co-ops (Law 20.337) and mutuales (Law 20.321) | None. In Res 878/2024, community mutuales and public-service co-ops were spared only the automatic suspension | [Res 3108/2018](https://www.argentina.gob.ar/normativa/nacional/norma-316294/texto); [Law 20.337](https://faolex.fao.org/docs/pdf/arg162229.pdf); [Res 878/2024 art. 4](https://contadoresenred.com/resolucion-878-2024/) |
| SAEM monthly return (Annexes I-V, VII) | Mutuales with an INAES-approved SAEM rule | Also mutuales with an approved rule that do not run the service: they must still report | [Res 1424/2017 art. 1](https://consejosalta.org.ar/wp-content/uploads/INAES-1424.pdf); [Res 1279/2026](https://www.argentina.gob.ar/normativa/nacional/norma-427021/texto) |
| SAEM quarterly external-audit report | Same mutuales | None found | [Res 1424/2017 arts. 1-2](https://consejosalta.org.ar/wp-content/uploads/INAES-1424.pdf); [Res 3034/2024 art. 4](https://www.boletinoficial.gob.ar/detalleAviso/primera/318057/20241212) |
| SAEM IT technical report | SAEM mutuales that use electronic or digital channels (art. 19 bis) | Only if electronic channels are used | [Res 3034/2024 arts. 11, 13](https://www.boletinoficial.gob.ar/detalleAviso/primera/318057/20241212) |
| CRS and FATCA identification | Mutuales authorised for SAEM funded by members' savings | Mutuales that lend only their own capital are not named | [Res 1038/2026 arts. 1, 4](https://www.boletinoficial.gob.ar/detalleAviso/primera/342341/20260526?busqueda=1) |
| UIF AML system (UIF 99/2023) and INAES AML module (Res 1567/2026) | (1) co-ops authorised to give credit; (2) mutuales authorised for SAEM, with own capital or members' savings, from approval of the rule; (3) co-ops and mutuales that broker loans (gestión de préstamos), from authorisation | Biennial self-assessment, tolerance statement, external review and RSA for entities that only broker loans, or that lend own funds collected by payroll deduction | [Res 1567/2026 recitals, art. 2](https://www.consejosalta.org.ar/wp-content/uploads/INAES-1567.pdf); [UIF 99/2023 arts. 5, 6, 19, 39](https://www.consejo.org.ar/storage/attachments/Resoluci%C3%B3n%20UIF%2099-2023%20-%20Asoc%20mutuales%20-5PZL7x2v5w.pdf) |
| Loan-brokering regime (gestión de préstamos) | Co-ops and mutuales with an approved gestión de préstamos rule | None found | [Res 7536/2012 art. 18, quoted in search](https://www.ignacioonline.com.ar/resolucion-7536-12-inaes-sustituyense-los-articulos-3-y-18-de-la-resolucion-1481-2009/); [Res 3036/2024](https://www.adeba.com.ar/?p=39934) |

Notes:
- The UIF says a mutual or credit co-op is obliged "from approval" of its lending rule, not from the first loan ([Res 1567/2026 recitals](https://www.consejosalta.org.ar/wp-content/uploads/INAES-1567.pdf)). A dormant lender with an approved rule is still in scope.
- A co-op that gives credit may not use loan brokering as its only lending mode (Res 2363/2019, per a search summary; unverified).
- Not all mutuales are UIF-obligated. Only those with SAEM or loan brokering are ([contadoresenred on Res 1038](https://contadoresenred.com/mutuales-que-prestan-ayuda-economica-ley-20-321-medidas-necesarias-para-identificar-a-los-asociados-y-sus-beneficiarios/)).

## Duty-by-duty table

Penalty abbreviations used in the table:
- "INAES-M" = Law 20.321 art. 35 for mutuales: (a) fine, (b) disqualification, (d) withdrawal of the authorisation to operate. Applied only after a sumario ([BO, Res 565/2026](https://www.boletinoficial.gob.ar/detalleAviso/primera/339254/20260310)).
- "INAES-C" = Law 20.337 art. 101 for co-ops: warning; fine; withdrawal of authorisation. Applied only after a sumario. The statutory peso amounts are obsolete and the current fine range was not found (unverified) ([Law 20.337](https://faolex.fao.org/docs/pdf/arg162229.pdf)).
- "UIF" = Law 25.246 art. 24 as replaced by Decree 274/2025:
  - warning, or warning plus publication;
  - for a missing, late or defective ROS: a fine of 1 to 10 times the value of the operation;
  - for any other breach: 15 to 2,500 módulos (ARS 812,100 to 135,350,000 at ARS 54,140);
  - up to 5 years' disqualification of the compliance officer;
  - board members are jointly liable.
  Sources: [Law 25.246 arts. 24-25 bis](https://stabogados.com.ar/penal/leyes-penales-especiales/ley-25246/arts-24-26/); [Res UIF 95/2025](https://www.argentina.gob.ar/normativa/nacional/norma-414295/texto).
- "Evidence" says what an inspector would ask for. I found no published INAES inspection checklist. Unless a source is given, the evidence column is my inference from the rule's own wording (inferred).

| # | Duty | Legal basis | What must exist or be done | Frequency / deadline | Evidence an inspector asks for | Penalty |
|---|---|---|---|---|---|---|
| 1 | SAEM monthly return | Res 1418/03 art. 17(b) (t.o. Res 3034/2024), text by Res 1424/2017; Res 1279/2026 arts. 1-2 | Report compliance with arts. 5, 6, 9, 10 through Annexes I, II, III, IV, V, VII on the INAES web system. Send to INAES and to the local body. Sheets signed by president, secretary, treasurer, external auditor and all supervisory-body members. The auditor checks the signatures and copies the sheets into the "libro especial de auditoría" ([Res 1424](https://consejosalta.org.ar/wp-content/uploads/INAES-1424.pdf); [Res 1279](https://www.argentina.gob.ar/normativa/nacional/norma-427021/texto)) | Monthly, within 20 business days of month end. New system from the July 2026 period. Arrears re-sent in the new system | Web PDF of each period; signed sheets; libro especial de auditoría with the copies and quarterly reports (Res 1424) | Lending rule may lapse (caducidad) after 3 consecutive missed periods, after a 20-day demand ([Res 3034 art. 10](https://www.boletinoficial.gob.ar/detalleAviso/primera/318057/20241212)); INAES-M |
| 2 | Record loans analytically | Res 1418/03 art. 17(a) as replaced by Res 3034/2024 art. 10 | Record loan movements analytically, separating original loans from refinancings and renewals | Ongoing | Loan ledger showing the split (inferred) | INAES-M |
| 3 | Member file (legajo) proving creditworthiness | Res 1418/03 art. 3(g) as replaced by Res 3034/2024 art. 3 | A file per member supporting creditworthiness. Electronic and digital means and digital signatures allowed | At each loan | Legajos (inferred) | INAES-M |
| 4 | Inter-entity loan cap | Res 1418/03 art. 5, final para., added by Res 3034/2024 art. 4 | Loans to other mutuales or co-ops may exceed normal limits only up to 20% of lending capacity. Any excess needs a real guarantee or a 100% provision. The auditor reports these loans in the quarterly report | Ongoing; quarterly report | Auditor's quarterly report | INAES-M |
| 5 | SAEM quarterly external-audit report | Res 1418/03 art. 17(c)-(d), (d.2) as replaced by Res 1424/2017 art. 2 | External auditor (registered with INAES) reports quarterly. The report is filed via TAD per Annex VI apart. A. Paper is no longer accepted (Res 1424 art. 4) | Quarterly. The day count was not found (unverified); a 2019 extension shows a fixed deadline exists ([Res 2748/2019](https://www.argentina.gob.ar/normativa/nacional/norma-332407/texto)) | TAD filing; libro especial de auditoría | INAES-M |
| 6 | SAEM IT technical report | Res 1418/03 art. 17(e), added by Res 3034/2024 art. 11; art. 19 bis | If electronic channels are used: a technical report by a certified IT professional to INAES and the local body. Channels must ensure integrity, authorship, consent, confidentiality and availability | Yearly, within 30 days after calendar year end | The signed report (inferred) | INAES-M |
| 7 | Solvency or liquidity problem plan | Res 1418/03 art. 18 as replaced by Res 3034/2024 art. 12 | Regularisation plan to the assembly within 90 days; inform the auditor; notify INAES within 10 days | Event-driven | Plan, minutes, notice (inferred) | Measures and suspension of the affected services |
| 8 | Member roll (yearly) | Res 756/2025 arts. 2, 3, 8 | Transmit the member register to INAES as a DDJJ through the "Sistema Integrado de Nómina" | Yearly, within 10 calendar days after 31 December. Initial filing was due 180 days from 15/04/2025, extended 60 days by Res 2147/2025 ([Res 2147](https://www.argentina.gob.ar/normativa/nacional/norma-418827/texto)) | System "remito" receipts (manual) | Breach of an INAES rule: INAES-M / INAES-C |
| 9 | Member roll (quarterly, UIF entities) | Res 756/2025 arts. 5, 6, replacing Res 5586/2012 arts. 2-3 | Same roll plus, per member: assigned risk level, PEP status, country of residence | Quarterly, within 10 calendar days after each quarter end | Remitos; risk-rating records | INAES-M / INAES-C; UIF for wrong risk data |
| 10 | Authorities roll | Res 756/2025 art. 7 (adds art. 3 bis to Res 5587/2012) | File the composition of the board, supervisory body and management, picked from the member roll, with mandate dates and minutes | Within 30 calendar days after the ordinary assembly, and within 30 calendar days of any new composition (elections, resignations, absences) | Remitos; minutes | INAES-M / INAES-C |
| 11 | AML compliance DDJJ (INAES Module) | Res 1567/2026 arts. 2, 4, 6, 7 | DDJJ with: (a) UIF registration certificate; (b) compliance officer and deputy, UIF registration, appointing minutes; (c) AML manual and approving minute; (d) total gross loans per calendar year; (e) legal representative, managers, attorneys, authorised signatories; (f) co-ops only: top 20 holders of share capital at 31/12. Items (a)-(c) also via TAD | Initial: within 90 calendar days of 02/09/2026, i.e. 01/12/2026 ([Tributum summary in same PDF](https://www.consejosalta.org.ar/wp-content/uploads/INAES-1567.pdf)). Then yearly within 20 calendar days after year end (20 January). Update at each change | System DDJJ and TAD receipts | INAES-M / INAES-C; UIF |
| 12 | PEP DDJJ of board and supervisory members | Res 1567/2026 art. 3; Res UIF 35/2023 as amended by Res UIF 192/2024 | Each member of the board and supervisory body files a PEP DDJJ electronically and signs it in TAD | Same as #11 | Signed TAD DDJJ per person | Same |
| 13 | ROS statistics to INAES | Res INAES 806/2018 arts. 1-3; now via the Res 1567 system (art. 5) | Number of ROS filed with the UIF, or a negative report | Quarterly, within 10 calendar days after each quarter (Res 806 art. 3). Tributum describes a "ROS – Estadístico" block in the new module ([Res 806](https://www.argentina.gob.ar/normativa/nacional/norma-308815/texto)) | Receipts | INAES-M / INAES-C |
| 14 | Risk self-assessment report and method | UIF 99/2023 art. 5 | A documented technical report covering the art. 4 risk factors per service line, inherent risk, mitigation, and national risk assessment inputs. Kept with its supporting data at the domicile registered with the UIF. New entities do it before starting | Yearly, sent to UIF and INAES by 30 April, and whenever the risk level changes. Biennial option for the small category, declared in the report | The report, its method and data (art. 5(c)) | UIF |
| 15 | Risk-tolerance statement | UIF 99/2023 art. 6 | Statement approved by the board, setting the ML/TF risk margin the board accepts | With #14 by 30 April (biennial option) | Approved statement and minute | UIF |
| 16 | Policies and controls (minimum list) | UIF 99/2023 art. 8(a)-(x) | 24 minimum policies, e.g. RePET terrorist-list check before onboarding and continuously; PEP; CDD for all; beneficial owners; risk rating; ongoing CDD; accept or reject high-risk and foreign PEPs with reasons; alerts; unusual-operations log; ROS; systematic reports; training; compliance officers; record keeping; internal audit and external review; staff screening; code of conduct; FATF lists | Kept current, consistent with #14 | The written policies (in the manual) | UIF |
| 17 | AML manual | UIF 99/2023 art. 9; Res 1567/2026 art. 2(c) | Manual containing the art. 8 policies and referring to the monitoring method; available to staff, UIF and INAES at all times. Documented acknowledgement by directors, staff and collaborators | Reviewed yearly; updated with rule changes; board minute approving it | Manual, approval minute, acknowledgement records | UIF |
| 18 | Compliance officer and deputy | UIF 99/2023 art. 11 | Appoint both; register with the UIF; trained or experienced; a domicile in Argentina | Deputy taking over: notify the UIF within 24 hours (sujetosobligados@uif.gob.ar). Removal: notify with reasons and replacements within 15 days. Former officers keep their domicile updated for 5 years | Appointment minutes, UIF registration, e-mails | UIF, including up to 5 years' disqualification of the officer |
| 19 | Training | UIF 99/2023 art. 18 | Yearly plan covering all directors, staff and collaborators; 7 minimum topics (a)-(g); deeper training for compliance staff; new joiners trained within 60 business days; proof of training and tests kept | Yearly plan; ongoing | Plan, attendance and test records | UIF |
| 20 | Independent external review | UIF 99/2023 art. 19(a) | Report by an independent external reviewer on the quality and effectiveness of the AML system, sent electronically to the UIF | Yearly, within 120 calendar days after the self-assessment deadline (about 28 August). Biennial option | Reviewer's report and UIF receipt | UIF |
| 21 | Internal audit | UIF 99/2023 art. 19(b) | The yearly internal-audit programme covers the AML system. Findings, fixes and deadlines go to the compliance officer and then to the board | Yearly | Programme and reports | UIF |
| 22 | Client identification (natural persons) | UIF 99/2023 art. 22 | Full name; ID type and number with verified copy; nationality; date and place of birth; marital status; CUIL/CUIT/CDI; real address (street, number, locality, province, country, postcode); phone; e-mail; main occupation; PEP and TF checks. The same for attorneys, guardians, guarantors and authorised persons, plus proof of the mandate | At onboarding | Client files (legajos) | UIF |
| 23 | Client risk rating and DD level | UIF 99/2023 arts. 26-29 | Rate each client high, medium or low using the listed factors. Simplified, medium or enhanced DD to match. Foreign PEPs and FATF "call for action" countries are always high risk | At onboarding and on change | Rating with reasons | UIF |
| 24 | Ongoing DD and file refresh | UIF 99/2023 art. 30 | Refresh files at least every 1 year (high risk), 3 years (medium) or 5 years (low). Low risk: information only. Medium: information and documents. High: documents only | Cyclical | Dated refresh evidence | UIF |
| 25 | Monitoring and unusual-operations register | UIF 99/2023 arts. 34-35 | Automated control rules and alerts. A register of all unusual operations with fields (a) client and risk level, (b) profile, (c) operation (product, amount), (d) date, time and source of the alert, (e) type of unusualness, (f) analyst, (g) actions, (h) date and reasoned decision | Continuous | Register and supporting documents | UIF |
| 26 | Suspicious transaction report (ROS) | UIF 99/2023 art. 36 | Reasoned report with supporting documents to the UIF. Confidential: not shown to supervisors except INAES on-site work. External reviewers see anonymised data | ML: within 24 hours of concluding the operation is suspicious, and at most 90 calendar days after the operation. TF and PF: within 24 hours of the operation | UIF receipts (kept confidential) | UIF: 1-10 times the value of the operation |
| 27 | Cash and cheque deposits | UIF 99/2023 art. 38 | Deposits of 12 SMVM or more in a month: identify the depositor and any third party behind them | Per deposit | Records | UIF |
| 28 | Monthly transaction report (RMT) | UIF 99/2023 art. 39(a) | All operations of 12 SMVM or more in the second previous month (any amount for cash from non-residents): client ID, type, date, amount, currency | Monthly, between day 1 and day 15 | UIF receipts | UIF |
| 29 | Yearly systematic report (RSA) | UIF 99/2023 art. 39(b) | General data, ownership structure, accounting data, business data, client types and counts | 2 January to 15 March for the prior year (every 2 years for the small category) | UIF receipts | UIF |
| 30 | Record retention | UIF 99/2023 art. 17 | Operation records: 10 years from the operation. CDD files: 10 years from the end of the relationship or the last transaction. Digital, protected, with a backup copy | 10 years | Retrieval on request | UIF |
| 31 | CRS / FATCA identification | Res INAES 1038/2026 arts. 1-4 | Identify members and beneficiaries covered by the CRS. Natural persons and controlling persons: nationality, country of tax residence, foreign TIN, domicile, place and date of birth. Entities: tax-residence country, foreign TIN, domicile. Keep secrecy under Law 25.326 art. 5(2)(e). Send to ARCA under the regime ARCA sets | No deadline in the text. The ARCA reporting regime for mutuales is not yet issued (unverified as of 10/10/2026) | Member files with self-certification (inferred) | None stated in Res 1038 (unverified) |
| 32 | Loan-brokering information | Res 1481/2009 art. 18 as replaced by Res 7536/2012 | Quarterly electronic transmission of Annex I data. File the system receipt, signed by the board, supervisory body and external auditor, with the signature certified by the Consejo Profesional | Quarterly. 20 business days after quarter end per a press source (unverified) ([search summary](https://www.ignacioonline.com.ar/resolucion-7536-12-inaes-sustituyense-los-articulos-3-y-18-de-la-resolucion-1481-2009/)) | Receipts | Caducidad of the brokering rule; Res 1687/2026 gave a last 30 calendar days ([blogdelcontador](https://siap.blogdelcontador.com.ar/novedades/inaes-30-dias-mutuales-presentar-informacion-adeudada-prestamos/)) |
| 33 | Loan-brokering files and IT opinion | Res 3036/2024 (amends Res 1481/2009) | A legajo per member. For legal-person lenders, a file on their solvency and AML profile. A yearly technical opinion by a licensed IT professional on system security and compliance | Opinion within 30 days after calendar year end | Legajos; signed opinion ([ADEBA](https://www.adeba.com.ar/?p=39934)) | INAES-M / INAES-C |
| 34 | Mutual: pre-assembly filing | Law 20.321 art. 19 (as quoted in recitals); Res 3108/2018 arts. 1, 4 | Convocation, agenda and memoria signed by president and secretary; financial statements and inventory signed by president, secretary and treasurer; supervisory-body report signed by all its members; auditor report certified by the Consejo Profesional. Filed via TAD | 10 business days before the assembly | TAD receipts | INAES-M (withdrawal used in Res 565/2026) |
| 35 | Mutual: post-assembly filing | Res 3108/2018 art. 2 | To INAES and the local body: signed minutes; the newspaper page with the convocation; board minutes approving the election lists; list of titular and alternate board and supervisory members (domicile, ID, CUIT/CUIL/CDI, term); board minutes allocating posts; amended financial statements if changed; signed attendance register | Within 30 calendar days after the assembly | TAD receipts | INAES-M |
| 36 | Mutual: change of authorities | Res 3108/2018 art. 3; Res 756/2025 art. 7 | Report the new composition with the minutes | Within 30 calendar days | TAD receipt and remito | INAES-M |
| 37 | Co-op: assembly cycle | Law 20.337 arts. 39, 41, 47, 48 | Yearly inventory, balance sheet and results. Ordinary assembly within 4 months of year end. Convocation at least 15 days before, notified to INAES and the local body. Balance, results, annexes, memoria, síndico and auditor reports made available to members and sent to INAES and the local body at least 15 days before | Yearly | Filing receipts | INAES-C (Res 878/2024 cites arts. 41, 48, 56) |
| 38 | Co-op: external audit | Law 20.337 art. 81 | External audit by a registered public accountant (CPN), from formation to liquidation. Reports at least quarterly, entered in the special audit book | Quarterly | Audit book | INAES-C |
| 39 | Books | Co-ops: Law 20.337 art. 38. Mutuales: Res INAM 115/88 and Res 3684/18 (per the INAES page) | Co-ops: member register, assembly minutes, board minutes, audit reports, plus Commercial Code books; rubric by the local body. Mutuales: assembly minutes, board, supervisory body, attendance register, journal, cash book, inventory and balance, member register; rubric requests only via TAD | Ongoing | The rubricated books ([INAES rubric page](https://www.argentina.gob.ar/inaes/rubricar-libros-mutuales)) | INAES-M / INAES-C |
| 40 | National data update (actualización de datos) | Res INAES 580/2018 and 2432/2018 (cited in Res 878/2024 recitals) | Entities must have completed the national data update before making any filing with INAES. Done via TAD | Before filings (details unverified) | TAD receipt ([blogdelcontador](https://blogdelcontador.com.ar/resolucion-2432-18-inaes-cooperativas-y-mutuales-actualizacion-nacional-de-datos-se-establece-su-obligatoriedad-previo-a-efectuar-presentaciones-ante-el-inaes/)) | Filings blocked (inferred) |

Rule details that the product must encode. These come from the screens in the official SAEM guide, not from the resolution text, which I did not read in consolidated form ([guide IF-2026-57548748](https://contadoresenred.com/wp-content/uploads/2026/06/Instructivo.pdf)):
- Arrears situations (Annex IV):
  - 1 normal, up to 30 days;
  - 2 low risk, 31-90 days;
  - 3 medium risk, 91-180 days;
  - 4 high risk, 181-365 days;
  - 5 irrecoverable, over 365 days.
- Provision rates for situations 1-5 (Annex V):

  | Loan type | 1 | 2 | 3 | 4 | 5 |
  |---|---|---|---|---|---|
  | Without guarantee | 1% | 5% | 20% | 50% | 100% |
  | Personal guarantee | 1% | 5% | 20% | 25% | 50% |
  | Real guarantee | 1% | 3% | 10% | 15% | 25% |

  Peso and foreign-currency loans go in separate tables.
- Guarantee fund (Annex III A): the average balance of mutual savings accounts x the percentage of "art. 9 inc. b" (shown as 10%), compared with the average cash and investments. The result is a margin or a deficiency.
- Savings-capture limit (Annex III B):
  - "liquid capital" = net equity minus real estate, other fixed assets, deferred charges, and non-current assets not tied to the service (net of related liabilities);
  - the form computes liquid capital x 25 and net equity x 15;
  - it then counts loans and savings above the per-member maximum (amounts and number of members).
  - The exact legal wording of arts. 5, 6, 9, 10 was not read (unverified).

## Filing channels and formats

| Channel | Used for | Access | Format | Import? | Receipt |
|---|---|---|---|---|---|
| INAES web, "Acceso Entidades Registradas" → "Sistemas Habilitados" → "RES.1418/03" (SAEM WEB) | SAEM monthly annexes (#1) | Entity CUIT + password | Web form. Header: period, acta number, acta date, cash-count date (fecha de arqueo). Shows the approved rule (resolution no. and date) and a list of pending periods | None shown in the guide. It replaced the spreadsheet upload ([Res 1279 recitals](https://www.argentina.gob.ar/normativa/nacional/norma-427021/texto)) | Downloadable PDF of the annexes; a "Reimprimir" tab ([guide](https://contadoresenred.com/wp-content/uploads/2026/06/Instructivo.pdf)) |
| INAES web, "Nómina de Asociados" / "Nómina de autoridades" | Roll (#8-#10) | "Sistemas habilitados" on the INAES site | Single entry, or CSV bulk add and bulk removal | Yes: .TXT or .CSV, ";" separator, CR+LF or CR row ends, first row = headers (skipped). Template button "Descargar CSV con estructura válida". Errors are shown per row | "Generar remito" counts additions and removals since the last remito ([manual](https://servicios.infoleg.gob.ar/infolegInternet/anexos/410000-414999/411657/res756-1.pdf)) |
| INAES "Sistema de Cumplimiento en Prevención de LA/FT/FP" (Module II) | #11-#13 | INAES site (manual IF-2026-67633405 not read) | DDJJ with attachments | INAES says the modules "allow data migration and automatic loading" ([Res 1567 recitals](https://www.consejosalta.org.ar/wp-content/uploads/INAES-1567.pdf)). The file format is unknown (unverified) | Unknown (unverified) |
| TAD | Assembly documents (#34-#36), Res 1567 items (a)-(c) and PEP DDJJ signatures (#11-#12), SAEM quarterly audit report (#5), book rubric (#39), data update (#40) | Entity CUIT; clave fiscal of an authorised representative (apoderado) ([Res 3108 TAD procedure](https://www.argentina.gob.ar/normativa/nacional/norma-316294/texto)) | Uploaded PDF or JPG scans of signed originals. Digitised first-generation originals are legally valid (Res 3108 art. 7) | Document upload only | TAD file number |
| UIF site (argentina.gob.ar/uif) | ROS, RMT, RSA (#26, #28, #29), self-assessment and tolerance (#14-#15), external review (#20) | UIF registration of the obliged entity | Per the UIF technical rules (not researched; unverified) | Not researched | UIF receipt |
| E-mail sujetosobligados@uif.gob.ar | Compliance-officer changes (#18) | — | E-mail | — | — |
| ARCA (CRS regime) | #31 | Not yet defined for mutuales | Not yet defined (unverified) | — | — |

Roll CSV, members file (Annex I of the Res 756 manual). M = mutuales, C = co-ops. "Mand." = mandatory.

| ID | Field | Format | Rule |
|---|---|---|---|
| 1 | CUIT Entidad | digits only | Mand. |
| 2 | Fecha Ingreso | DD-MM-AAAA | Mand. |
| 3 | CUIT / CUIL / CDI of the member | digits only | Mand. |
| 4 | Tipo Persona | 1 natural, 2 legal | Mand. |
| 5 | Categoría | 1 activos, 2 adherentes, 3 participantes, 4 otros | Mand. for M; optional for C |
| 6 | Número Asociado | number | Optional for M; for C mandatory if natural person (my reading of the table) |
| 7 | Denominación | max 255 | Mand. if legal person |
| 8 | Apellido | max 60 | Mand. if natural person |
| 9 | Nombre | max 60 | Mand. if natural person |
| 10 | Tipo Documento | 1 CI, 2 DNI, 3 LC, 4 LE, 5 passport | Mand. if natural person |
| — | Número de Documento | max 8 | Mand. if natural person |
| — | Calle | max 100 | Mand. |
| 11 | Número | max 100 | Optional |
| 12 | Piso | max 10 | Optional |
| 13 | Departamento | max 100 | Optional |
| 14 | Código Provincia-Depto-Localidad | INAES nomenclator code | Mand. ("H" allowed only in the initial migration of UIF entities) |
| 15 | Código Postal | max 8 | Optional |
| 16 | Fecha Resolución | DD-MM-AAAA | Optional for M; mand. for C |
| 17 | Órgano Emisor | max 100 | Mand. for C |
| 18 | Cuotas Sociales Suscriptas | number | Mand. for C |
| 19 | Cuotas Sociales Integradas | number | Mand. for C |
| 20 | Mail | e-mail format | Optional |
| 21 | Teléfono | digits only | Optional |
| 22 | Observación | text | Optional |
| 23 | Valor Cuota | number | Mand. for C |

The manual's numbering repeats IDs 8 and 10. I list the columns in the order shown. The exact header strings must be taken from the downloadable template (unverified).

Removals file: CUIT Entidad; CUIT/CUIL/CDI; Fecha Egreso (DD-MM-AAAA); Causa egreso (max 300); Medida disciplinaria (SI/NO). All mandatory.

Authorities form fields: member (must already be in the roll); mandate start; mandate end; acta number; acta date; type; post (or "otro cargo" plus a description). The authorities module stays locked until the member roll is complete ([manual](https://servicios.infoleg.gob.ar/infolegInternet/anexos/410000-414999/411657/res756-1.pdf)).

UIF entities migrating from Res 5586/12: download the old roll as .xlsx, fix it, save as CSV and upload. Keep each file to 50,000 members or fewer ([migration guide IF-2025-35835605](https://servicios.infoleg.gob.ar/infolegInternet/anexos/410000-414999/411657/res756-2.pdf)).

Gap: the published CSV has no columns for risk level, PEP status or country of residence, which Res 756 art. 5 requires of UIF entities. How these are captured is (unverified).

SAEM WEB annex layout (from [the guide](https://contadoresenred.com/wp-content/uploads/2026/06/Instructivo.pdf)):
- **Annex I, Disponibilidad e Inversiones.** Two columns: end-of-period balance and period average.
  - Cash in pesos: caja, cuenta corriente, otros. The same three in foreign currency.
  - Investments in pesos: caja de ahorro, plazo fijo, títulos públicos, a line read as "TICOCA" (unclear on the scan), otros.
  - Investments in foreign currency: caja de ahorro, plazo fijo, títulos públicos, otros.
  - Subtotals and totals are computed by the form.
- **Annex II, Ahorros y Ayudas.** Columns: debit, credit, end balance, period average, number of members or accounts, estimated effective monthly rate.
  - A. Savings taken, in pesos and in foreign currency: ahorro a término, variable común, variable especial, otros.
  - B. Loans, in pesos and in foreign currency: pago íntegro (bullet), amortizable, otros.
- **Annex III, Relaciones.** A guarantee fund; B savings-capture limit; D average loan per member (average, number of current accounts, maximum average).
- **Annex IV, Estado de las Ayudas.** Amounts by situation 1-5.
  - Bullet loans: past due; and due within 30 days, 30-89 days, 90+ days.
  - Amortising loans: past due; and due within 3, 6, 12 months, and later.
  - Also: % of loans with real guarantee and with personal guarantee; accumulated provisions; provisions to set up (from Annex V).
- **Annex V, Pautas de Previsionamiento.** Amounts by situation x guarantee type, with the rates above.
- **Annex VII, Asociados con Mayor Volumen.** The 20 members with the largest accumulated monthly operations. Columns: order, name, CUIT/CUIL/CDI, member number, largest savings balances. Rows are added with "Agregar fila".
- **Then:**
  - "Validar Consistencia" checks the numeric relations across annexes;
  - "Grabar formulario" saves;
  - the authorities screen asks for CUIT and printed name of the president, treasurer, secretary and 3 Junta Fiscalizadora members;
  - the PDF is downloaded.

## Supervisors and enforcement evidence

Who supervises:
- **INAES** is the national enforcement authority for Laws 20.321 and 20.337 and the "órgano de contralor específico" for AML. It helps the UIF with on-site and off-site supervision (Law 25.246 art. 14 inc. 7, cited in [Res 1567 recitals](https://www.consejosalta.org.ar/wp-content/uploads/INAES-1567.pdf)).
  - Units named in the rules: Dirección Nacional de Control de Ahorro y Crédito Cooperativo y Mutual ([Res 756 art. 9](https://contadoresenred.com/cooperativas-y-mutuales-sistema-integrado-de-nomina-de-asociados-y-autoridades/)); Dirección de Análisis de Servicios de Ahorro y Crédito ([Res 3034 art. 8](https://www.boletinoficial.gob.ar/detalleAviso/primera/318057/20241212)); Dirección Nacional de Cumplimiento y Fiscalización ([Res 878](https://contadoresenred.com/resolucion-878-2024/)).
  - INAES sits under the Ministerio de Capital Humano: the guide's access URL is argentina.gob.ar/capital-humano/inaes ([guide](https://contadoresenred.com/wp-content/uploads/2026/06/Instructivo.pdf)).
  - Powers over co-ops: demand documents, inspect books, attend assemblies, call assemblies, declare acts ineffective, ask a judge for intervention ([Law 20.337 art. 100](https://faolex.fao.org/docs/pdf/arg162229.pdf)).
- **UIF** receives ROS, RMT, RSA, the self-assessment and the external review. It runs sumarios under Law 25.246 ch. IV, with the procedure in Res UIF 90/2024 (per [search summary](https://consejo.org.ar/storage/attachments/Resoluci%C3%B3n%20UIF%2090-2024.pdf-ZeFbCvkfvJ.pdf)). It can reject or demand changes to a self-assessment. Filing is not tacit approval ([UIF 99/2023 art. 5](https://www.consejo.org.ar/storage/attachments/Resoluci%C3%B3n%20UIF%2099-2023%20-%20Asoc%20mutuales%20-5PZL7x2v5w.pdf)).
- **Provincial local bodies** receive copies of the SAEM return, the assembly documents and changes of authorities. They rubricate co-op books, and may exercise supervision and impose warnings and fines by agreement with INAES (Law 20.337 arts. 38, 99, 101; [Res 1424](https://consejosalta.org.ar/wp-content/uploads/INAES-1424.pdf); [Res 3108 art. 2](https://www.argentina.gob.ar/normativa/nacional/norma-316294/texto)).
- **ARCA** will receive CRS data ([Res 1038 art. 3](https://www.boletinoficial.gob.ar/detalleAviso/primera/342341/20260526?busqueda=1)).
- **Consejos Profesionales de Ciencias Económicas** certify auditor reports ([Res 3108 art. 1](https://www.argentina.gob.ar/normativa/nacional/norma-316294/texto)). CPCECABA publishes model accountant reports on Res 1418 compliance; I did not read them ([model RT 37](https://consejo.org.ar/storage/attachments/31.%28RT%2037%20-%20VIII%29.doc-yw6LrymcAv.doc); [special report model](https://www.consejo.org.ar/storage/attachments/VII.C_Informe%20Especial%20de%20Contador%20Publi-xfmvLO1mA0.docx)).

Enforcement evidence:
- **Res 878/2024** (25/03/2024, BO 03/04/2024). It targeted co-ops and mutuales formed up to 31/12/2022 that had not filed assembly documents and financial statements from 01/02/2017 to 29/02/2024. They got 30 administrative business days to file. Other requests were frozen. Automatic suspension of the authorisation to operate followed, plus a sumario. The number of entities is in an annex that was not read ([contadoresenred](https://contadoresenred.com/resolucion-878-2024/)).
- **Res 565/2026** (05/03/2026) withdrew the authorisation of mutuales that had missed assembly documents and financial statements for 2017-2024 (Law 20.321 art. 35(d)) ([BO](https://www.boletinoficial.gob.ar/detalleAviso/primera/339254/20260310)).
- **Res 1687/2026** (BO 31/08/2026) gave mutuales with a brokering rule a last 30 calendar days to send the Res 1481/2009 data, or lose the rule. Secondary source; text not seen ([blogdelcontador](https://siap.blogdelcontador.com.ar/novedades/inaes-30-dias-mutuales-presentar-informacion-adeudada-prestamos/)).
- **SAEM caducidad.** After 3 consecutive missed monthly periods and a 20-day demand, the lending rule can lapse ([Res 3034 art. 10](https://www.boletinoficial.gob.ar/detalleAviso/primera/318057/20241212)). INAES has published lapses of lending rules in the Boletín Oficial ([BO 316954](https://www.boletinoficial.gob.ar/detalleAviso/primera/316954/1), cited in the lead report).
- **History of mass suspensions.** In 2019, 20,612 co-ops and 1,847 mutuales were suspended ([Diario de Cuyo](https://www.diariodecuyo.com.ar/noticias/hay-1-700-puestos-de-trabajo-en-juego-por-la-medida-de-suspender-a-las-cooperativas-330303.html)).
- **UIF.** A UIF edict in the Boletín Oficial notified a mutual ("Asociación Mutual de Profesionales Solidarios") and other persons. The sanction content was not seen ([BO 329111, per search](https://www.boletinoficial.gob.ar/detalleAviso/primera/329111/20250731)). No published UIF fine against a lending mutual was confirmed (unverified).
- **Pattern.** Enforcement is mostly administrative and wholesale: lists of non-filers, freezes, suspension, lapse of rules, licence withdrawal. For a lender, losing the SAEM rule ends the business, so the threat is credible even without cash fines.

Inspection practice: I found no published INAES or UIF questionnaire for co-ops and mutuales. INAES issued an implementation guide for UIF 99/2023 (Res INAES 5077/2023), which was not read ([contadoresenred](https://contadoresenred.com/resolucion-5077-2023/)). The best proxy for "what is checked" is the content list of Res 1567 and the auditor's duty to verify the SAEM signatures (Res 1424).

## Regional differences

- **The law is national.** Laws 20.321 and 20.337, INAES resolutions and UIF resolutions apply in every province. I found no provincial rule that adds a separate SAEM, roll or AML filing (search in Spanish; unverified for all 24 jurisdictions).
- **Copies go to the local body of the entity's domicile.**
  - SAEM monthly return ([Res 1424 art. 1](https://consejosalta.org.ar/wp-content/uploads/INAES-1424.pdf));
  - SAEM IT report ([Res 3034 art. 11](https://www.boletinoficial.gob.ar/detalleAviso/primera/318057/20241212));
  - mutual post-assembly documents and changes of authorities ([Res 3108 arts. 2-3](https://www.argentina.gob.ar/normativa/nacional/norma-316294/texto));
  - co-op pre-assembly documents and convocation ([Law 20.337 arts. 41, 48](https://faolex.fao.org/docs/pdf/arg162229.pdf)).
- **Río Negro example.** The Subsecretaría de Cooperativas y Mutuales calls itself the local body. It says all SAEM filings "must be made only through the new INAES web system", including overdue periods. It mentions no separate copy to the province ([Río Negro](https://rionegro.gov.ar/info/297/servicio-de-ayuda-economica-mutual-se-pone-en-marcha-el-nuevo-sistema-de-transmision-web)). Whether other provinces still expect a separate copy is (unverified).
- **Books.** Co-op books are rubricated by the local body where one exists (Law 20.337 art. 38). Mutual books are rubricated through INAES TAD, with a "Certificado de Libros ante el Órgano Local" for mutuales that rubricate locally ([INAES page](https://www.argentina.gob.ar/inaes/rubricar-libros-mutuales); search summary).
- **Delegated supervision.** INAES may supervise through agreements with provinces. Warnings and fines can be delegated; withdrawal of authorisation stays with INAES. Co-op fines go to the INAES fund or to the provincial treasury, depending on domicile (Law 20.337 arts. 99, 101).
- **Product implication.** Store the province and local body per entity. Show the local-body copy as a checklist item unless the province confirms that the INAES filing suffices.

## Upcoming changes

- **01/12/2026: first Res 1567 AML filing.** This is the first full DDJJ of compliance officers, manual, representatives and PEP declarations. Then 20/01/2027 for the 2026 year ([Res 1567 arts. 4, 6, 9](https://www.consejosalta.org.ar/wp-content/uploads/INAES-1567.pdf)).
- **January 2027 stack** (from the rules above): 10 Jan yearly roll (all entities) and Q4 roll (UIF entities); 20 Jan AML yearly DDJJ; 30 Jan SAEM IT report and brokering IT opinion. Then 15 Mar RSA, 30 Apr self-assessment, about 28 Aug external review.
- **CRS reporting to ARCA.** Res 1038/2026 leaves the reporting regime to ARCA. ARCA RG 5887/2026 (BO 18/08/2026) adjusted the general CRS rule (RG 4056) from period 2026, without mentioning mutuales ([ARCA](https://servicioscf.afip.gob.ar/publico/sitio/contenido/novedad/ver.aspx?id=5857)). A mutual-specific ARCA regime is expected but not yet issued (unverified).
- **INAES keeps digitising.** Res 756 art. 9 ordered a unified system, and Res 1567 delivered the second stage. INAES states that its modules allow "data migration and automatic loading" ([Res 1567 recitals](https://www.consejosalta.org.ar/wp-content/uploads/INAES-1567.pdf)). An import feature for SAEM WEB could appear at any time. The product's copy-sheet approach must then switch to file generation.
- **Constitution controls.** Res INAES 1060/2026 adds ARCA validation of founders' CUIT/CUIL/CDI and origin-of-funds checks for credit entities (secondary summary; text not read) ([Consejo Salta](https://www.consejosalta.org.ar/wp-content/uploads/INAES-1060.pdf)).
- **UIF fine module.** The UIF may update the módulo every budget year. The last value found is ARS 54,140 (Res UIF 95/2025). A 2026 update was not found (unverified).
- **Rule churn.** Res 756/2025, 2147/2025, 1038/2026, 1060/2026, 1279/2026, 1567/2026 and 1687/2026 all affect these entities and came within 18 months. The rule set must be data-driven and versioned.

## PRODUCT REQUIREMENTS

Each requirement is testable. "Basis" gives the legal source; full links are in the sections above. Key: "1418" = Res INAES 1418/03 (t.o. Res 3034/2024), "UIF" = Res UIF 99/2023, "756" = Res INAES 756/2025, "1567" = Res INAES 1567/2026, "3108" = Res INAES 3108/2018, "LC" = Law 20.337, "LM" = Law 20.321, "Guide" = SAEM WEB guide IF-2026-57548748, "Manual" = roll manual IF-2025-35836690.

**A. Entity profile and applicability**

1. The system must store per entity: type (co-op or mutual); CUIT; INAES matrícula; province and local body; financial year end; and the approved services: SAEM funded by savings, SAEM with own capital only, credit service (co-op), loan brokering, and electronic channels (art. 19 bis). Test: each combination produces exactly the duty set in "Who is obliged". Basis: 756 art. 2; 1567 art. 2; UIF art. 1; 1038 art. 4; 1418 art. 17(e).
2. The system must mark an entity "UIF-obligated" when it has a credit, SAEM or brokering approval, from the approval date, even if no loan was ever granted. Test: an entity with an approved but unused SAEM rule still gets UIF tasks and the monthly SAEM return. Basis: 1567 recitals; Res 1424/2017 art. 1.
3. The system must offer the biennial option only to entities that (a) only broker loans or (b) lend only their own funds collected by payroll deduction. If chosen, it must schedule the self-assessment, tolerance statement, external review and RSA every 2 years, and add a statement of the option to the self-assessment text. Test: a savings-funded mutual cannot select it. Basis: UIF arts. 5, 6, 19(a), 39(b).
4. The system must not switch off any INAES duty because the entity is small or volunteer-run. Test: a 30-member mutual with an approved SAEM rule still gets 12 monthly returns. Basis: no size threshold in 756, 1418, 1567.

**B. Deadline engine**

5. The system must hold an Argentine national-holiday and non-working-day calendar, editable by an admin, and compute "business days" from it. Test: the July 2026 SAEM due date equals 31 July plus 20 business days, skipping every national holiday and non-working day in that window. Basis: 1418 art. 17(b).
6. The system must generate these recurring deadlines per applicable entity:
   - SAEM return: month end + 20 business days;
   - roll: 10 calendar days after year end (all) or after each quarter end (UIF entities);
   - authorities roll: 30 calendar days after the ordinary assembly or a change;
   - Res 1567 DDJJ: 20 calendar days after year end;
   - ROS statistics: 10 calendar days after each quarter end;
   - self-assessment and tolerance statement: 30 April;
   - external review: 30 April + 120 calendar days;
   - RMT: day 1-15 monthly;
   - RSA: 2 January to 15 March;
   - SAEM IT report and brokering IT opinion: 30 days after year end;
   - mutual pre-assembly: assembly date minus 10 business days;
   - mutual post-assembly: assembly date + 30 calendar days;
   - co-op assembly: within 4 months of year end, with documents and convocation at least 15 days before.
   Test: one fixture entity per profile produces the expected dates for 2027. Basis: the rules in the duty table (#1-#38).
7. The system must create the one-off Res 1567 initial filing task due 01/12/2026 for every UIF-obligated entity. Test: an entity added on 15/11/2026 shows it as due in 16 days. Basis: 1567 arts. 6, 9.
8. The system must keep a queue of overdue SAEM periods and show them as one list, matching INAES's "Tiene pendiente de transmisión los siguientes períodos". Test: an entity with May-August 2026 unfiled shows 4 items. Basis: Res 1279 art. 2; Guide p. 4.
9. The system must raise a red "caducidad risk" alert when 2 consecutive SAEM periods are unfiled, and a critical alert at 3. Test: on the third missed period the dashboard shows "lending rule at risk". Basis: 1418 art. 17(d.2) via Res 3034 art. 10.
10. All deadline rules must be stored as versioned data that cites the resolution and article. A rule change must apply from its stated period without code changes. Test: changing the SAEM deadline to 15 business days for periods from a given month recalculates only those periods. Basis: rule churn (Upcoming changes).
11. The system must send reminders by e-mail at 14, 7, 3 and 1 days before each deadline, and on the due date, to the users assigned to that duty. Test: reminder logs exist for a fixture deadline. Basis: product need derived from the deadline density above.

**C. Member register and INAES roll export**

12. The member record must hold every field of the Res 756 CSV (23 columns plus the document number and street), with the same length limits and code lists. Test: entering a 61-character surname is rejected. Basis: Manual Annex I.
13. Mandatory-field rules must depend on entity type and person type exactly as the manual states. Examples: Categoría is mandatory for mutuales only; cuotas suscriptas, integradas and valor cuota are mandatory for co-ops; surname, first name and document are mandatory for natural persons; name is mandatory for legal persons. Test: a co-op natural-person row without "cuotas integradas" fails validation. Basis: Manual Annex I.
14. The system must export the roll as a ";"-separated .CSV with a header row, dates as DD-MM-AAAA, CUIT and phone as digits only, and the INAES province-department-locality code. Header text must match the official template byte for byte. Test: the exported file passes the INAES bulk upload in a pilot with zero format errors. Basis: Manual Annex I "Respecto del archivo".
15. The system must export removals as a separate CSV (CUIT entidad; CUIT/CUIL/CDI; fecha egreso; causa egreso ≤300 chars; medida disciplinaria SI/NO). It must export only the changes since the last confirmed INAES remito. Test: 3 members leaving after the last remito produce a 3-row removals file. Basis: Manual Annex II; "Generar remito".
16. The system must include a lookup of INAES locality codes and refuse to export a member without a valid code. The one exception is "H" for a flagged initial migration. Test: exporting a member with code "H" outside migration mode fails. Basis: Manual p. 5; migration guide.
17. The system must split any export above 50,000 members into files of 50,000 or fewer. Test: 120,000 members produce 3 files. Basis: migration guide IF-2025-35835605.
18. The system must import the .xlsx roll that INAES lets UIF entities download from the old Res 5586/12 system, and map it to the register. Test: a sample file imports with a per-row error report. Basis: migration guide.
19. For UIF-obligated entities, the member record must hold assigned risk level (high, medium, low), PEP status and country of residence. A quarterly roll cannot be marked "ready" while any active member lacks them. Test: one member without a risk level blocks the quarterly status. Basis: 756 art. 5; UIF art. 26.
20. The system must store the INAES remito number, date and the counts of additions and removals for each roll filing, plus an uploaded PDF or screenshot. Test: the filing history shows each remito. Basis: Manual "Generar remito"; 756 art. 8 (DDJJ).

**D. Authorities and PEP declarations**

21. The authorities register must link each post holder to a member record and store type, post (or "otro cargo" plus description), mandate start and end, acta number and acta date. Test: a person not in the member register cannot be added. Basis: Manual "Módulo Nómina de autoridades".
22. Any change in the composition (election, resignation, absence) must open a task due in 30 calendar days for the INAES authorities roll and, for mutuales, a TAD filing under Res 3108 art. 3. Test: a resignation dated 1 March creates tasks due 31 March. Basis: 756 art. 7; 3108 art. 3.
23. For UIF-obligated entities, the system must track one PEP DDJJ per board and supervisory member, with states "draft", "signed in TAD" and "transmitted", and the TAD number. Test: the Res 1567 task cannot be marked complete while any member is not "transmitted". Basis: 1567 art. 3.
24. The PEP DDJJ template must follow the current UIF PEP rule (Res UIF 35/2023 as amended by 192/2024). The rule version must show on every generated form. Test: the generated PDF footer names the rule version. Basis: 1567 art. 3.
25. The system must hold the SAEM signatory set: president, secretary, treasurer, external auditor, and the supervisory-body members (at least 3). Each needs a CUIT and printed name. Test: the SAEM pre-fill shows all 6 authorities required by the web form and flags any missing CUIT. Basis: Res 1424 art. 1; Guide p. 15-16.

**E. SAEM monthly return preparation**

26. The system must import a loan ledger and a savings ledger from Excel or CSV with a column-mapping step. Minimum loan fields: member, loan id, type (bullet or amortising), currency, guarantee type (none, personal, real), original or refinancing/renewal flag, principal, balance, due dates of instalments, days past due. Test: a sample ledger maps and imports. Basis: 1418 art. 17(a); Guide Annexes II, IV, V.
27. The system must keep originals separate from refinancings and renewals in all loan totals, and show both. Test: a refinanced loan appears in the refinancing subtotal, not in originals. Basis: 1418 art. 17(a).
28. The system must classify each loan into situations 1-5 by days past due (≤30, 31-90, 91-180, 181-365, >365). It must also bucket by remaining term: bullet loans ≤30 days, 30-89, 90+; amortising loans ≤3, ≤6, ≤12 months, and later. Test: a 95-day overdue amortising loan lands in situation 3, "vencido". Basis: Guide Annex IV.
29. The system must compute the required provisions by situation x guarantee type with a versioned rate table preloaded as: none 1/5/20/50/100%, personal 1/5/20/25/50%, real 1/3/10/15/25%. Pesos and foreign currency are computed separately. Test: ARS 100,000 unsecured in situation 4 gives ARS 50,000. Basis: Guide Annex V (rates as shown on the form; legal text unverified).
30. The system must compute Annex I (end balance and period average for each cash and investment line), Annex II (debit, credit, end balance, average, number of accounts, estimated effective monthly rate per savings and loan line), Annex III (guarantee fund at the configured percentage, default 10%; liquid capital; ×25 and ×15 limits; loans and savings above the limit, by amount and count; average loan per member), Annex IV, Annex V and Annex VII (top 20 by accumulated monthly operations). Test: a fixture month reproduces the expected values to the cent. Basis: Guide Annexes I-V, VII; 1418 arts. 5, 6, 9, 10.
31. The system must define "period average" the same way the INAES form does and document the method (e.g. average of daily balances). Until confirmed, the method must be configurable and flagged "to confirm with INAES". Test: the method is shown on the copy sheet. Basis: Guide Annexes I-II (method not stated; unverified).
32. Before export, the system must run its own consistency checks that mirror the cross-annex relations of "Validar Consistencia". At a minimum: Annex IV totals equal the Annex II loan balances; Annex V provisions equal "previsiones a constituir" in Annex IV; Annex III uses the Annex I and II averages. The system must block "ready" status on any failure. Test: changing one loan balance by ARS 1 produces a named error. Basis: Guide "Validación y Control de Errores".
33. The system must produce a "copy sheet" (on screen and PDF) that lists every input field in the exact order and with the exact labels of SAEM WEB. Each field shows its value in the form's number format (comma decimal), and greyed computed fields are excluded. Test: a user can enter a full month by tabbing through the copy sheet, with zero lookups. Basis: Guide p. 8-15.
34. The copy sheet must include the header data: period (month), acta number, acta date, fecha de arqueo. It must warn if the acta date is after the filing date or if the arqueo date is outside the period. Test: a missing arqueo date blocks "ready". Basis: Guide p. 3.
35. The copy sheet must include the authorities block (CUIT and printed name of president, treasurer, secretary and 3 supervisory members). Test: the block shows exactly 6 rows. Basis: Guide p. 15-16.
36. The system must generate a signature sheet of Annexes I-V and VII for the president, secretary, treasurer, external auditor and every supervisory-body member. It must track the signature status of each. Test: the sheet lists every signatory by name. Basis: Res 1424 art. 1.
37. After the user files on SAEM WEB, the system must accept upload of the INAES PDF. It must then mark the period filed, with the filing date and user. Test: a period without a PDF stays "prepared, not filed". Basis: Guide p. 16; evidence for audit.
38. The system must keep a "libro especial de auditoría" log listing, per period, whether the signed sheets were copied by the auditor, with the date and folio. Test: the quarterly audit task shows the 3 monthly items. Basis: Res 1424 art. 1; 1418 art. 17(d).
39. The system must not log in to INAES or submit data on the user's behalf in the first release. Any later browser-assist feature must (a) run in the user's own browser session, (b) never store the INAES password or any clave fiscal, (c) stop before "Grabar formulario" for human review. Test: the codebase holds no credential fields for INAES or ARCA. Basis: filings are DDJJ (756 art. 8; 1567 art. 7; 3108 art. 8); TAD needs the representative's own clave fiscal (3108 TAD procedure); INAES terms of use not reviewed (unverified).
40. The system must check the inter-entity loan cap: loans to other mutuales or co-ops above normal limits may total at most 20% of lending capacity. Any excess must show as needing a real guarantee or a 100% provision. Test: a loan to a co-op that pushes the total to 21% raises the flag. Basis: 1418 art. 5 (Res 3034 art. 4).
41. The system must keep a per-member legajo with creditworthiness documents for each loan, accepting digitally signed files. Test: a loan cannot be marked "complete file" without at least one creditworthiness document. Basis: 1418 art. 3(g).
42. For entities using electronic channels, the system must schedule the yearly IT technical report (due 30 days after year end) and store the professional's name, licence number and the signed report. Test: the task appears only if "electronic channels" is ticked. Basis: 1418 art. 17(e), 19 bis.
43. The system must schedule the quarterly external-audit report and its TAD filing for SAEM entities. It must store the auditor's INAES registration and each report. Test: four tasks per year exist per SAEM entity. Basis: 1418 art. 17(c)-(d.2); Res 1424 art. 2.
44. The system must offer a "solvency/liquidity event" workflow: a 10-day INAES notice task, a 90-day assembly task for the regularisation plan, and an auditor notification. Test: logging an event on 1 June creates tasks due 11 June and 30 August. Basis: 1418 art. 18.

**F. INAES AML module (Res 1567) and ROS statistics**

45. The system must build the Res 1567 DDJJ pack with the items (a)-(f) and attachments: UIF registration certificate; compliance officer and deputy data with UIF registration and appointing minutes; AML manual with approving minute; total gross loans granted in the calendar year (computed from the ledger); representatives, managers, attorneys and authorised signatories; and, for co-ops, the top 20 share-capital holders at 31/12 (computed from the register). Test: a co-op fixture produces all six blocks; a mutual fixture produces five. Basis: 1567 art. 2.
46. The system must flag items (a), (b) and (c) as "also file in TAD" and track the TAD number for each. Test: the pack is incomplete until three TAD numbers are entered. Basis: 1567 art. 2 last para.
47. Any change to items (a)-(f) or to a PEP status must open an "update Res 1567 DDJJ" task. Test: replacing the compliance officer creates the task. Basis: 1567 art. 4.
48. The system must keep the quarterly count of ROS filed with the UIF and prompt a negative report when the count is zero. This must not reveal ROS content to users without the compliance-officer role. Test: a quarter with no ROS produces a "negative report" task. Basis: Res 806/2018 arts. 1, 3; 1567 art. 5; UIF art. 36(d).

**G. UIF AML programme**

49. The system must provide a self-assessment wizard covering the art. 4 risk factors for each service line. It must record inherent risk, mitigation and residual risk, and use the national risk assessment and UIF typologies as inputs. Its output is a self-contained report plus the method document. Test: the report has a section per factor and per service line. Basis: UIF art. 5(a)-(c).
50. The self-assessment must be versioned with board approval (minute number and date), send dates to UIF and INAES, and receipts. It must reopen automatically when the user records a change in the entity's risk level. Test: recording a new service line reopens it. Basis: UIF art. 5(d)-(e).
51. The system must generate a risk-tolerance statement for board approval and bundle it with the self-assessment and method for the 30 April filing. Test: the 30 April task lists three documents. Basis: UIF art. 6.
52. The manual generator must produce an AML manual whose coverage checklist maps every policy (a)-(x) of UIF art. 8. Export must be blocked if any item is missing. Test: removing the RePET section fails the check. Basis: UIF arts. 8, 9.
53. The manual must have a yearly review task, a board-approval record, and an acknowledgement log in which each director, staff member and collaborator confirms reading each version (name, role, date, version). Test: a new manual version resets acknowledgements to "pending". Basis: UIF art. 9.
54. The system must hold the compliance officer and deputy with UIF registration, domicile and training evidence. It must create a 24-hour task to e-mail sujetosobligados@uif.gob.ar when the deputy takes over, and a 15-day task when the officer is removed. For former officers it must keep their domicile for 5 years. Test: setting "deputy acting" at 10:00 creates a task due 10:00 the next day. Basis: UIF art. 11.
55. The training module must hold a yearly plan approved by the board that covers all directors, staff and collaborators and the 7 minimum topics (a)-(g). It must keep a register per session (date, content, attendees, tests). It must flag any new joiner not trained within 60 business days. Test: a joiner on day 61 without a session appears on the overdue list. Basis: UIF art. 18.
56. The system must track the independent external reviewer (name, registration) and the review report. The report is due 120 calendar days after the self-assessment deadline. Test: for a 30 April deadline, the due date shows 28 August. Basis: UIF art. 19(a).
57. The system must give reviewers a read-only view of monitoring rules and of unusual-operations analysis with client identities masked. Test: a reviewer account sees no names, CUITs or document numbers in the unusual-operations register. Basis: UIF art. 36(d).
58. The client file must hold all UIF art. 22 fields for natural persons (and those of arts. 23-24 for legal persons; not detailed here). It must have a slot for the verified ID copy and evidence of the verification source. The same fields apply to attorneys, guardians, guarantors and authorised persons, plus proof of the mandate. Test: a guarantor without a mandate document is "incomplete". Basis: UIF art. 22.
59. The risk-rating engine must apply the art. 26 factors and force "high" for foreign PEPs and for links to FATF call-for-action countries. Test: a member with residence in a call-for-action country is rated high regardless of score. Basis: UIF arts. 26, 29.
60. The system must schedule file refreshes at no more than 1 year (high), 3 years (medium) and 5 years (low) since the last refresh. It must record the evidence type allowed per level (information only; information and documents; documents only). Test: a high-risk member last refreshed 13 months ago is overdue. Basis: UIF art. 30.
61. The system must screen members, beneficial owners and representatives against the RePET terrorist list before onboarding and again whenever the list changes. It must log each screening (date, list version, result). Test: a planted name produces a hit and blocks onboarding until reviewed. Basis: UIF art. 8(a)-(b).
62. The system must screen PEP status at onboarding and at each refresh, and store the member's PEP DDJJ. Test: a member without a PEP DDJJ is "incomplete". Basis: UIF art. 8(c); Res UIF 35/2023.
63. The system must run configurable monitoring rules on imported transactions, at a minimum for the art. 34(b) scenarios: unusual size or frequency; amounts not matching the profile; structuring; refusal to give information; pressure for speed. Alerts go to an unusual-operations register with fields (a)-(h) of art. 35. Test: 5 deposits just under the threshold in 3 days raise a structuring alert with all 8 fields recorded at closure. Basis: UIF arts. 34-35.
64. When an alert is closed as suspicious, the system must start ROS timers: 24 hours from the decision for ML, capped at 90 calendar days from the operation; 24 hours from the operation for TF and PF. The ROS record must be visible only to the compliance-officer role. Test: closing an ML alert on a 100-day-old operation shows "deadline exceeded". Basis: UIF art. 36.
65. The system must flag deposits of 12 SMVM or more in a month and require identification of the depositor and of any third party (name and CUIT/CUIL/CDI). The SMVM value must be a versioned parameter (value at 31 December of the prior year and at 30 June). Test: a month crossing the threshold opens an identification task. Basis: UIF arts. 2(ñ), 38.
66. The system must build the monthly RMT list: all operations of 12 SMVM or more in the second previous month (any amount for cash from non-residents), with client ID, type, date, amount and currency. It must schedule it for days 1-15. Test: the October run lists August operations. Basis: UIF art. 39(a).
67. The system must assemble RSA data (general data, ownership structure, accounting data, products and channels, client types and counts) and schedule it for 2 January to 15 March (or every 2 years under the biennial option). Test: client counts by type equal the register. Basis: UIF art. 39(b).
68. Records must be retained for at least 10 years: operations from the operation date; CDD files from the end of the relationship or the last transaction, whichever is later. Records must be stored digitally with a backup copy. Deletion before expiry must be blocked. Test: deleting a member who left 9 years ago is refused. Basis: UIF art. 17.
69. The system must export any member's full file, and any period's operations, as a single bundle within minutes, to answer an authority's request. Test: a bundle for one member builds in under 2 minutes. Basis: UIF art. 17(c).
70. The system must track the yearly internal-audit programme item for AML, its findings, fixes and deadlines, and the compliance officer's notice to the board. Test: a finding without a deadline cannot be saved. Basis: UIF art. 19(b).

**H. CRS identification**

71. For mutuales with savings-funded SAEM, the member record must hold: nationality; one or more countries of tax residence with the foreign TIN for each; domicile; date and place of birth. Entity members need tax-residence country, foreign TIN and domicile, plus controlling persons with the same personal fields. Test: a member with a foreign tax residence and no TIN is "CRS incomplete". Basis: Res 1038 art. 1.
72. The system must produce a CRS self-certification form for members to sign and store the signed copy. Test: the form pre-fills from the register. Basis: Res 1038 arts. 1-2 (OECD CRS due diligence).
73. The system must keep CRS data under the secrecy rule and record which users accessed it. Test: an access log entry exists for every view of CRS fields. Basis: Res 1038 art. 3; Law 25.326 art. 5(2)(e).
74. The ARCA CRS export must be a pluggable module, disabled until ARCA issues the regime for mutuales. Test: the feature flag is off by default. Basis: Res 1038 art. 3 ("régimen que esa Administración establezca").

**I. Assembly, books and governance**

75. For mutuales, the assembly planner must create the pre-assembly TAD task due 10 business days before the date. Its checklist must show the signature roles: convocation, agenda and memoria (president and secretary); financial statements and inventory (president, secretary, treasurer); supervisory report (all supervisory members); auditor report certified by the Consejo Profesional. Test: an assembly on 30 April creates a task due 10 business days earlier. Basis: LM art. 19 (as quoted in Res 3108 recitals); 3108 art. 1.
76. For mutuales, it must create the post-assembly task due 30 calendar days after the assembly. The checklist must have 7 items: minutes; newspaper page; minutes approving the lists; list of authorities with domicile, ID, CUIT/CUIL/CDI and term; minutes allocating posts; amended statements if any; signed attendance register. Test: the task shows 7 items. Basis: 3108 art. 2.
77. For co-ops, the planner must check the assembly date is within 4 months of year end. It must create a task, due 15 days before the assembly, to send the documents and convocation to INAES and the local body. Test: an assembly 5 months after year end raises an error. Basis: LC arts. 41, 47, 48.
78. The system must generate the document set (convocation, agenda, memoria template, attendance register, list of authorities) as PDFs ready to sign and scan. Test: the list of authorities pulls from the authorities register. Basis: 3108 arts. 1-2, 7.
79. The system must keep a book register per entity (book name, rubric number, date, authority) with the legal list preloaded per type. Mutuales: assembly minutes, board, supervisory body, attendance register, journal, cash, inventory and balance, member register. Co-ops: member register, assembly minutes, board minutes, audit reports. Test: a new mutual shows 8 required books. Basis: LC art. 38; INAES rubric page (Res 115/88, 3684/18).
80. The system must record whether the national data update (Res 580/2018) is complete. It must warn before any INAES filing task if it is not. Test: the warning shows when the flag is off. Basis: Res 2432/2018 (secondary).

**J. Loan brokering**

81. For entities with a brokering rule, the system must schedule the quarterly Res 1481/2009 Annex I transmission. It must track the receipt signed by the board, supervisory body and external auditor, with the Consejo Profesional certification. Test: four tasks a year, each with a 3-signature checklist. Basis: Res 1481 art. 18 (Res 7536/2012).
82. It must schedule the yearly IT technical opinion (due 30 days after year end) and keep legajos for members and for legal-person lenders with solvency and AML-profile documents. Test: a legal-person lender without a solvency document is "incomplete". Basis: Res 3036/2024.

**K. Accountant workspace, evidence and audit trail**

83. One accountant account must manage many entities. A status board must show every entity's next deadlines and overdue items, filterable by duty and province. Test: 15 fixture entities show on one screen, with correct counts. Basis: product need; deadline density.
84. Every filing task must store the evidence of completion: INAES PDF or remito, TAD number, UIF receipt, signed documents. A task cannot be "done" without evidence. Test: marking done without a file is refused. Basis: sworn-statement nature of filings (756 art. 8; 1567 art. 7; 3108 art. 8).
85. The system must keep an immutable audit trail of who changed which figure, document or status, and when, for at least 10 years. Test: editing a provision rate creates an audit entry that cannot be deleted. Basis: UIF art. 17; DDJJ liability.
86. Every generated document must carry a notice that the entity and its signatories are responsible for its content, and that the system does not file anything for them. Test: the footer is present on all PDFs. Basis: DDJJ under arts. 109-110 Decree 1759/72 (756 art. 8; 1567 art. 7; 3108 art. 8).

**L. Security and data protection**

87. Personal data must be hosted in a country that Argentina treats as adequate (EU/EEA, UK, Switzerland, Uruguay, Canada private sector, Israel for automated data). Otherwise the customer contract must include the AAIP model clauses (Disposición 60-E/2016, as amended by Res AAIP 34/2019; or the Ibero-American network clauses, Res AAIP 198/2023). The customer contract must cast the vendor as a service provider processing data on the entity's behalf (Law 25.326 art. 25; unverified detail). Test: a hosting region outside the list cannot be selected without the clause flag. Basis: Law 25.326 art. 12; [AAIP adequate-country list](https://www.argentina.gob.ar/transferencias-internacionales); [Marval on clauses](https://www.marval.com/Publicacion/transferencia-internacional-de-datos-nuevas-clausulas-modelo-15673).
88. Data must be encrypted at rest and in transit, with role-based access. Defined roles: compliance officer (sees ROS), board member, staff, accountant, external reviewer (masked), auditor. Pass an external penetration test before sale. Test: a "staff" user cannot open any ROS record or RePET hit detail. Basis: UIF arts. 17, 36(d); Res 1038 art. 3.

## Open questions

1. Does SAEM WEB really have no import? The guide shows none, but INAES says its newer modules allow "automatic loading". A pilot user should check the live system and ask the Coordinación de Servicios Digitales e Informáticos.
2. What is the exact legal text of Res 1418/03 arts. 5, 6, 9, 10, 17(c)-(d) in the 2024 consolidated text (IF-2024-133511984-APN-DTYOD#INAES)? This covers the per-member limits, the guarantee-fund percentage, how "promedio" is defined, and the quarterly audit-report deadline. It was not read.
3. How do UIF entities send the three extra roll fields (risk level, PEP, country of residence)? The published CSV has no columns for them.
4. What are the screens and import format of the Res 1567 "Sistema de Cumplimiento" (manual IF-2026-67633405-APN-CSDI#INAES, not read)?
5. When will ARCA issue the CRS reporting regime for mutuales, and with what format and deadline?
6. Do provinces other than Río Negro still expect a separate copy of the SAEM return or assembly documents? Which local body is it in each province?
7. What is the current fine range under Law 20.337 art. 101 (updated amounts) and Law 20.321 art. 35(a)?
8. Did the UIF update the módulo for 2026? The last found value is ARS 54,140.
9. Is there any INAES or UIF on-site inspection checklist for co-ops and mutuales? None was found.
10. What is the exact Res 1481/2009 Annex I content and deadline for brokering entities (20 business days per one press source)?
11. Do INAES's terms of use allow browser-assisted filling? Relevant for any later automation (requirement 39).
12. What is the full text of Res 1687/2026 and Res 1060/2026? Only secondary summaries were seen.

## Sources

Primary (official texts and official annexes):
- Res INAES 1279/2026: https://www.argentina.gob.ar/normativa/nacional/norma-427021/texto
- SAEM WEB user guide IF-2026-57548748-APN-CSDI#INAES (official annex, hosted by Contadores en Red): https://contadoresenred.com/wp-content/uploads/2026/06/Instructivo.pdf
- Res INAES 3034/2024 (BO 12/12/2024): https://www.boletinoficial.gob.ar/detalleAviso/primera/318057/20241212
- Res INAES 1424/2017 (copy by Consejo Salta): https://consejosalta.org.ar/wp-content/uploads/INAES-1424.pdf
- Res INAES 756/2025 (full text reproduced): https://contadoresenred.com/cooperativas-y-mutuales-sistema-integrado-de-nomina-de-asociados-y-autoridades/
- Res 756/2025 manual IF-2025-35836690 (Infoleg): https://servicios.infoleg.gob.ar/infolegInternet/anexos/410000-414999/411657/res756-1.pdf
- Res 756/2025 migration guide IF-2025-35835605 (Infoleg): https://servicios.infoleg.gob.ar/infolegInternet/anexos/410000-414999/411657/res756-2.pdf
- Res INAES 2147/2025: https://www.argentina.gob.ar/normativa/nacional/norma-418827/texto
- Res INAES 1567/2026 (full text, Tributum via Consejo Salta): https://www.consejosalta.org.ar/wp-content/uploads/INAES-1567.pdf
- Res UIF 99/2023 consolidated with UIF 56/2024 (CPCECABA): https://www.consejo.org.ar/storage/attachments/Resoluci%C3%B3n%20UIF%2099-2023%20-%20Asoc%20mutuales%20-5PZL7x2v5w.pdf
- Res INAES 806/2018: https://www.argentina.gob.ar/normativa/nacional/norma-308815/texto
- Res INAES 1038/2026 (BO 26/05/2026): https://www.boletinoficial.gob.ar/detalleAviso/primera/342341/20260526?busqueda=1
- Res INAES 3108/2018: https://www.argentina.gob.ar/normativa/nacional/norma-316294/texto
- Law 20.337 (FAO copy of the Infoleg text): https://faolex.fao.org/docs/pdf/arg162229.pdf
- Res INAES 565/2026 (BO 10/03/2026): https://www.boletinoficial.gob.ar/detalleAviso/primera/339254/20260310
- Res UIF 95/2025: https://www.argentina.gob.ar/normativa/nacional/norma-414295/texto
- Res INAES 2748/2019: https://www.argentina.gob.ar/normativa/nacional/norma-332407/texto
- ARCA news on RG 5887/2026: https://servicioscf.afip.gob.ar/publico/sitio/contenido/novedad/ver.aspx?id=5857
- INAES rubric of mutual books: https://www.argentina.gob.ar/inaes/rubricar-libros-mutuales
- AAIP international transfers: https://www.argentina.gob.ar/transferencias-internacionales
- Río Negro local body on SAEM WEB: https://rionegro.gov.ar/info/297/servicio-de-ayuda-economica-mutual-se-pone-en-marcha-el-nuevo-sistema-de-transmision-web
- BO lapse of SAEM rules (cited in lead report): https://www.boletinoficial.gob.ar/detalleAviso/primera/316954/1

Secondary (summaries, professional sites):
- Res 878/2024 text summary: https://contadoresenred.com/resolucion-878-2024/
- Law 25.246 arts. 24-25 bis consolidated (law firm): https://stabogados.com.ar/penal/leyes-penales-especiales/ley-25246/arts-24-26/
- Res 3036/2024 (ADEBA): https://www.adeba.com.ar/?p=39934
- Res 1687/2026 summary: https://siap.blogdelcontador.com.ar/novedades/inaes-30-dias-mutuales-presentar-informacion-adeudada-prestamos/ ; https://siap.blogdelcontador.com.ar/numero/1687/
- Res 7536/2012 (art. 18 of Res 1481/2009): https://www.ignacioonline.com.ar/resolucion-7536-12-inaes-sustituyense-los-articulos-3-y-18-de-la-resolucion-1481-2009/
- Res 2147/2025 summary: https://blogdelcontador.com.ar/news-46291-inaes-prorrogo-60-dias-el-plazo-para-que-cooperativas-y-mutuales-presenten-la-nomina-de-asociados-y-autoridades
- Res 1567/2026 summary: https://abogados.com.ar/el-inaes-unifica-y-digitaliza-el-regimen-informativo-para-cooperativas-y-mutuales/39763
- Res 1038/2026 summary: https://contadoresenred.com/mutuales-que-prestan-ayuda-economica-ley-20-321-medidas-necesarias-para-identificar-a-los-asociados-y-sus-beneficiarios/
- Res 2432/2018 summary: https://blogdelcontador.com.ar/resolucion-2432-18-inaes-cooperativas-y-mutuales-actualizacion-nacional-de-datos-se-establece-su-obligatoriedad-previo-a-efectuar-presentaciones-ante-el-inaes/
- Res 5077/2023 (UIF 99 implementation guide): https://contadoresenred.com/resolucion-5077-2023/
- Res 1060/2026 (Consejo Salta copy, not read): https://www.consejosalta.org.ar/wp-content/uploads/INAES-1060.pdf
- Res UIF 90/2024 (sumario procedure): https://consejo.org.ar/storage/attachments/Resoluci%C3%B3n%20UIF%2090-2024.pdf-ZeFbCvkfvJ.pdf
- CPCECABA model reports: https://consejo.org.ar/storage/attachments/31.%28RT%2037%20-%20VIII%29.doc-yw6LrymcAv.doc ; https://www.consejo.org.ar/storage/attachments/VII.C_Informe%20Especial%20de%20Contador%20Publi-xfmvLO1mA0.docx
- Marval on data-transfer clauses: https://www.marval.com/Publicacion/transferencia-internacional-de-datos-nuevas-clausulas-modelo-15673
- 2019 suspensions: https://www.diariodecuyo.com.ar/noticias/hay-1-700-puestos-de-trabajo-en-juego-por-la-medida-de-suspender-a-las-cooperativas-330303.html
- UIF edict naming a mutual (seen only in search results): https://www.boletinoficial.gob.ar/detalleAviso/primera/329111/20250731
