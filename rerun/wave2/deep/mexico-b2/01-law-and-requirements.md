# Mexico ICSOE/SISUB law for REPSE contractors, turned into product requirements

Status: IN PROGRESS (2026-10-10, resumed run). Working notes kept below; final sections being written.

## Summary
(pending)

## Who is obliged
(pending)

## Duty-by-duty table
(pending)

## Filing channels and formats
(pending)

## Supervisors and enforcement evidence
(pending)

## Regional differences
(pending)

## Upcoming changes
(pending)

## PRODUCT REQUIREMENTS
(pending)

## Open questions
(pending)

## Sources
(pending)


## Working notes (primary texts read so far)

- LSS consolidated text, last reform DOF 15-01-2026 (Cámara de Diputados): https://www.diputados.gob.mx/LeyesBiblio/pdf/LSS.pdf
  - Art. 15-A para 3: contractor reports by the 17th of Jan, May, Sep the contracts "celebrados en el cuatrimestre". Fr. I parties (name, RFC, address if different from tax address, e-mail, phone). Fr. II per contract: object, term, list of workers with name, CURP, NSS, SBC, plus name and RFC of beneficiary. Fr. III copy of STPS (REPSE) registration. Last amended DOF 23-04-2021.
  - Art. 304-A fr. XXII: not filing / filing late the art. 15-A information. Art. 304-B fr. V: 500 to 2,000 UMA. Art. 304-C: no fine if spontaneous, or force majeure.
  - Art. 15 fr. II: keep payroll records 5 years.
- Ley del INFONAVIT, last reform DOF 21-02-2025: https://www.diputados.gob.mx/LeyesBiblio/pdf/LIFNVT.pdf
  - Art. 29 Bis (added 2015, reformed 23-04-2021): registered under LFT art. 15; same 17 Jan/May/Sep; a) general data b) service contracts c) amounts of aportaciones and amortizaciones d) worker information e) determination of salario base de aportación f) copy of STPS registration. Procedures "que el Instituto publique a través de medios electrónicos". Art. 55: fines 3-350 UMA.
- IMSS Lineamientos ICSOE, ACDO.AS2.HCT.300322/68.P.DIR, DOF 13-04-2022: https://www.imss.gob.mx/sites/all/statics/icsoe/ACUERDO_68PDIR_LINEAMIENTOS_ICSOE.pdf
  - e.firma (SAT) required; s-icsoe.imss.gob.mx; Central Mexico time; windows 1-17 May/Sep/Jan; next business day; types Normal / Sin Información / Complementaria (Corrección, Sin Efectos, Actualización); max 4 complementarias per period except Actualización; Actualización filed in May/Sep/Jan; corrección and sin efectos any time; acuse = proof; public list monthly; contractor can authorise client via Buzón IMSS; IMSS may e-mail correction request, 10 business days; info requests to clients 15 days; differences notified, 15 business days.
- IMSS ICSOE microsite https://www.imss.gob.mx/icsoe : company e.firma (not legal rep's); capturista role (username = CURP; captures and sends to contractor for signing); Sep 1-17 2026 signing window; support orientacion.icsoe@imss.gob.mx, 800 623 2323.
- IMSS ICSOE FAQ https://www.imss.gob.mx/icsoe/preguntas : all contracts celebrated in the period; contracts in force from 24-04-2021 reported; foreign firms without PE not reported; SBC = last SBC registered in the period; same worker can be on several contracts, not twice in one; "Servicio" field = REPSE folio + authorised service text; Corrección is substitutive.
- IMSS bulk guide v2.0 Jan 2023: NSS 11 digits; CURP 18 alnum; SBC numeric 2 decimals; CSV comma-delimited; rejections: bad structure, NSS not in IMSS DB, NSS/CURP already registered.
- IMSS Boletín 300/2025 (16-06-2025): Listado Público + Listado con Información Inconsistente, 7 types a-g.
- IMSS-STPS Boletín 396/2025 (7-08-2025): 14,455 REPSE firms with non-positive opinion, exhorto 31-07-2025; agreement 22-11-2023.
- LFT (last reform DOF 14-05-2026): art. 12 ban, 13 permitted if REPSE, 14 written contract with object and approx number of workers; joint liability; 15 registration, current with tax & SS; renewal every 3 years; 1004-C fine 2,000-50,000 UMA for providing without registration and for beneficiary.
- STPS Acuerdo REPSE DOF 24-05-2021, modified DOF 03-02-2023 and 21-02-2024 (control2000 copy): renewal module 3 months before expiry by calendar; non-renewal -> cancellation (art. 15 g); art. 18 para 2: inform clients of renewal; 3-year term counted from inscription.
- STPS Acuerdo simplificación DOF 09-06-2026 (codigo 5790015), in force next business day: STPS-086-002 Alta/Actualización/Cancelación; up to 10 workers: online form + RFC certificate / acta constitutiva; >10 workers also ID, power, payroll receipt, registros patronales, SUA cédula; resolution 5 business days (<=10 workers), 15 (>10); transitory 4: STPS adapts systems within one year.
- LISR art. 27 fr. V para 3 (DOF 23-04-2021): client must verify REPSE at payment and obtain copies of payroll CFDI, bank receipt for withheld tax, IMSS quotas payment, INFONAVIT contributions payment; contractor must deliver. LIVA art. 5 fr. II para 2: VAT return + payment acknowledgement, by last day of the month after payment. CFF 15-D. CFF art. 30: keep accounting 5 years (check).

### Working notes, resumed run (2026-10-10)
- Re-read primary texts locally (diputados.gob.mx PDFs): LSS (last reform DOF 15-01-2026) art. 15-A text confirmed; 304-A XXII "no presentar o presentar fuera del plazo"; 304-B V 500-2,000 UMA (added DOF 23-04-2021); 304-C spontaneous = no fine, not spontaneous if IMSS discovered it or after a notified requirement; 304-D IMSS may cancel fine on documents. LSS art. 15 fr. II: payroll records kept 5 years.
- Ley INFONAVIT art. 29 Bis scope wording: registered under LFT art. 15 for services "que no forman parte del objeto social ni de la actividad económica preponderante de la beneficiaria"; 6 items a-f; procedures published electronically by INFONAVIT; transitory 8th of DOF 23-04-2021: INFONAVIT to issue rules within 60 days. Art. 55: fines 3-350 UMA, and for missing info that blocks individualisation the higher of 50% of non-individualised contributions or the max.
- LFT (last reform DOF 14-05-2026): arts 12-15 and 1004-C as noted. 2026 reforms: DOF 01-05-2026 working-week cut to 40 h by 2030 (48 in 2026, 46 in 2027...) and art. 132 fr. XXXIV electronic working-time register (general rules in force 1-01-2027; fine 250-5,000 UMA art. 994 IV Bis); DOF 14-05-2026 artists chapter. Nothing changed in arts 12-15.
- Lineamientos ICSOE (DOF 13-04-2022) full text read: numerals 4.2 e.firma, 5.1 steps, 5.3 Central time, 5.4 windows, 5.5 next business day, 5.6 types, max 4 complementarias except actualización, 5.7 acuse = proof, 5.8 consult, 5.9 actualización in May/Sep/Jan, corrección/sin efectos any time, 6.1 public list fields, 6.2 monthly, 7 authorisation to client via Buzón IMSS, 8.1 correction request by e-mail 10 business days, 8.2 not an audit, 9.2-9.3 cross-checks, 10.1 info requests to clients 15 days, 10.2 differences 15 business days, 11 Buzón IMSS + SMS, 13 data protection.
- IMSS listado público page: inconsistent list has 7 types (contractor=client; Normal/Corrección without service description; no start date or inconsistent date; contracts without workers; returns with no contracts; multiple returns per period; number of contracts declared differs from contracts in return). Remedy: Complementaria de Corrección. Published in the first 5 business days of each month.
- IMSS now offers a pre-validator: /icsoe/plantilla -> plantilla_carga_trabajadores.xlsm + "Guia-para-usar-la-plantilla-de-carga-v2708.pdf".
- OWN ANALYSIS of IMSS list LPP2026.xlsx (Jan-Apr 2026, downloaded 10-10-2026): 356,095 rows; 142,661 unique contractor names (91,705 personas morales, 50,956 personas físicas); 59,209 unique client names; informativas: 93,055 Sin información, 46,566 Normal, 3,149 Corrección; 49,705 contractors with >=1 contract; contracts per contractor median 2, p90 11; headcount per contractor (sum over contracts) median 11, p90 102. Filed after the 18-05-2026 deadline (17 May was a Sunday): 30,279 Sin información, 16,149 Normal, 2,711 Corrección; 46,361 of 139,515 contractors' first filing was late (33%). Inconsistent list LIIP2026: only 15 rows (5 contractors); LIIT2025: 5 rows.
