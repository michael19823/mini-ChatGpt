# Mexico ICSOE/SISUB workbench: product and technical design

Part 3 of the Mexico B2 deep dive: product, technical design and development plan. Last updated 10 Oct 2026. It builds on [the B2 report](../reports/mexico-b2.md), [01 law](01-law-and-requirements.md) and [02 market](02-market-and-competition.md). "My estimate" marks numbers I derived. "(unverified)" marks facts I could not confirm. Prices in Mexican pesos (MXN) or US dollars (USD); I use about MXN 18 per USD, as section 02 does (unverified rate).

## Summary

- **What to build.** A web "REPSE compliance workbench" for accounting firms and payroll bureaus (main buyer) and for contractors who file themselves. It keeps a contract register, imports payroll data, assigns workers to contracts, checks everything, and produces the ICSOE and SISUB files plus a capture sheet. The user still files and signs on the government portals. Section 02 showed that plain file generation already exists cheaply (SIFO REPSE-Fácil, MXN 1,500 a year for 1-5 RFCs; CONTPAQi Nóminas worker exports), so the value must come from the contract register, checks, a deadline board across many clients, and an archive ([SIFO prices](https://sifo.com.mx/precios_sifo.php); [CONTPAQi ICSOE note](https://conocimiento.blob.core.windows.net/conocimiento/2024/Contables/Nominas/CartasTecnicas/CT_Nominas_1622/reporte_icsoe_listado_de_trabajadores.html)).
- **What the portals leave undone.** The IMSS ICSOE portal takes contract and client data **only by typing into forms**, one contract at a time, with address pickers. Only the worker list (NSS, CURP, SBC) can be uploaded as a CSV of up to 3,000 rows ([IMSS guide 2](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/2-Guia-Registro-de-Informativa-y-Contrato.pdf); [IMSS template page](https://www.imss.gob.mx/icsoe/plantilla)). IMSS's own pre-validator checks format only, not NSS or CURP ([IMSS template page](https://www.imss.gob.mx/icsoe/plantilla)). SISUB takes three CSV layouts plus PDFs, validates later and e-mails errors ([contadormx FAQ](https://contadormx.com/15-preguntas-frecuentes-del-sisub-del-infonavit/)). Neither portal keeps a contract register, maps workers to contracts, reconciles salaries, or gives a multi-client view.
- **No API, no e.firma in our hands.** I found no API for ICSOE or SISUB. Filing needs the company's e.firma (.cer, .key and password) in the IMSS portal ([IMSS guide 5](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/5-Guia-Firma-y-Presentacion.pdf)). The product must **never** ask for the e.firma. The accountant uses the IMSS "capturista" role (login by CURP, can work for several contractors), and the contractor signs ([IMSS guide 10](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/10-Guia-Ingreso-del-Capturista.pdf)). The product fits this split exactly.
- **Best data source is the payroll CFDI XML.** Every Mexican payroll receipt is a CFDI with the nómina complement. It carries NSS, CURP, salary and employer registration, and a conditional "SubContratacion" node with the client's RFC (RfcLabora) and the share of time (PorcentajeTiempo) ([El Contribuyente, Aug 2024](https://www.elcontribuyente.mx/2024/08/requisitos-para-deducir-cfdi-de-nomina-de-servicios-especializados-del-repse/)). Where payroll fills that node, worker-to-client mapping is automatic. CONTPAQi's own SISUB export also carries most fields, but leaves contract number and work-site address for the user to type ([CONTPAQi SISUB note](https://conocimiento.blob.core.windows.net/conocimiento/2022/Contables/Nominas/CartasTecnicas/CT_Nominas_1512/reporte_sisub.html)).
- **MVP (3 weeks of agent build, then 4-5 weeks to sellable):** multi-client workspace; contractor, REPSE, client and contract registers; AI-assisted contract capture from purchase-order PDFs; imports from CFDI XML, CONTPAQi exports and a generic Excel; worker-to-contract assignment; a rule engine with 26 ICSOE, SISUB and cross-checks; ICSOE worker CSVs and a capture sheet per contract; the three SISUB CSVs; a deadline board with business-day deadlines and e-mail reminders; an acknowledgement (acuse) vault. **v1 (Feb-Apr 2027):** the monthly client evidence pack, IMSS public-list monitoring, EMA/EBA salary reconciliation, corrections and IMSS request tracking, REPSE renewal tracking.
- **Stack:** one Python/Django monolith with HTMX, PostgreSQL with row-level security, a Postgres-backed job queue, S3-compatible storage, hosted in a managed US region (AWS's Mexico region in Querétaro is an option later) ([AWS](https://aws.amazon.com/blogs/aws/now-open-aws-mexico-central-region)). File layouts and rules live as versioned data files with golden tests, so a layout change is a data change.
- **Privacy:** Mexico's new data-protection law (LFPDPPP, DOF 20 Mar 2025, last reform 14 Nov 2025) applies. We are the "persona encargada" (processor) for the customer. Hosting abroad by a processor is not a "transferencia" under the law's definition. Fines run to 320,000 UMA, and misuse for profit is a crime ([LFPDPPP text](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf)).
- **Running cost is small:** about USD 40-135 a month at 50 customers, USD 140-385 at 300, and USD 400-1,150 at 1,000 (my estimates, excluding payment fees). Payment fees via a merchant of record (Paddle, 5% + USD 0.50 per transaction) will cost more than hosting ([Dodo Payments on Paddle fees](https://dodopayments.com/blogs/paddle-fees-explained)).
- **Calendar:** start Mon 12 Oct 2026; MVP feature-complete about 6 Nov; dry-run pilots on real May-Aug 2026 data in November; security test late November; paid launch about 7 Dec 2026. That is in time for the next filing window, which ends **Mon 18 Jan 2027** (17 Jan 2027 is a Sunday, so the deadline moves to the next business day under Lineamientos 5.5, see [01](01-law-and-requirements.md)).
- **Cash budget to sellable:** about USD 6,000-13,000 (AI tools, hosting, a social-security accountant's review, a Mexican lawyer for terms and privacy, and an external security test). No salaried developers (my estimate).
- **Biggest technical risks:** SISUB layouts change (June 2026 guide) and the official guide is hard to reach (INFONAVIT's site returned 503 to me; its employer portal was suspended from 27 Mar 2026 "until further notice") ([Tax Today, 27 Mar 2026](https://www.taxtodaymexico.com/infonavit-suspende-temporalmente-el-portal-empresarial/)). Manual ICSOE contract capture stays a chore until a browser assistant exists.

## Users and jobs

### Who uses the product

| Role | Who it is | Main jobs | Rights in the app |
|---|---|---|---|
| **Firm owner** (socio del despacho) | Partner of an accounting firm or payroll bureau that files for many REPSE clients | See all client RFCs and deadlines; assign staff; pay; answer to clients if a filing is late | Everything in the firm's workspace; billing; add or remove client RFCs and users |
| **Firm staff** (auxiliar de nóminas, capturista) | Payroll or social-security assistant. Often registered as the IMSS "capturista" for several contractors ([IMSS guide 9](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/9-Guia-Alta-de-usuarios.pdf)) | Import payroll; keep contracts; fix check errors; capture in ICSOE; upload SISUB; store acuses | Only the client RFCs assigned to them |
| **Contractor signer** (representante legal / dueño) | Owner of the REPSE contractor. Holds the company e.firma | Review a one-page summary; sign in the IMSS portal; receive acuses and the monthly evidence pack | Read-only on own RFC; approve the summary; download files |
| **In-house payroll lead** (direct buyer) | Payroll person at a mid-size contractor that files itself | Same as firm staff, for one RFC (or a few group RFCs) | Own RFCs only |
| **Client firm contact** (beneficiaria) | Supplier-compliance team at the contractor's client (OXXO, Bimbo, CFE...). Large clients demand ICSOE/SISUB acuses and monthly evidence ([AXA REPSE document](https://axa.mx/documents/51602/20700179/DOCUMENTO%20REPSE.pdf)) | Receive the evidence pack and acuses | No account in MVP; an expiring, read-only share link in v1 |
| **Founder / support** | Us | Publish layout and rule updates; help users; watch errors | Internal admin; no access to customer worker data by default (break-glass with audit log) |

### Jobs to be done (in the buyer's words)

1. "Before the 17th of January, May and September, file ICSOE and SISUB for every client RFC, on time, first time." About a third of returns are filed late today (section 02, from the IMSS public list).
2. "Know which workers worked on which contract, and with which salary, without re-keying from payroll." Praxium puts about 3 hours a period on pulling CURP/NSS/SBC and 3 more on reconciling with payroll and SUA ([Praxium](https://praxiumconsultores.com/blog/icsoe-y-sisub-cuanto-cuesta-cumplir-cada-cuatrimestre)).
3. "Keep the contract register up to date. Many of our 'contracts' are client purchase orders." Many ICSOE contract descriptions start with an SAP order number (section 02).
4. "Stop SISUB rejections for commas, accents and empty cells." ([contadormx](https://contadormx.com/errores-comunes-del-sisub-al-infonavit/)).
5. "Give each client the acuses and the monthly REPSE evidence so they release payment." ([AXA](https://axa.mx/documents/51602/20700179/DOCUMENTO%20REPSE.pdf); [repse.org.mx](https://www.repse.org.mx/repse-portal.html)).
6. "Never miss the nil return (sin información) for clients with no new contracts." About 96,000 contractors file only a nil ICSOE each period (section 02).
7. "Keep five years of evidence for an IMSS review." Payroll records must be kept 5 years (LSS art. 15 fr. II), and IMSS can send a correction request with 10 business days to answer (Lineamientos 8.1) (see [01](01-law-and-requirements.md); [LSS](https://www.diputados.gob.mx/LeyesBiblio/pdf/LSS.pdf); [Lineamientos](https://www.imss.gob.mx/sites/all/statics/icsoe/ACUERDO_68PDIR_LINEAMIENTOS_ICSOE.pdf)).
8. "Don't lose REPSE." Renewal is every three years, in the three months before expiry, and a negative IMSS or INFONAVIT opinion is grounds for cancellation (Acuerdo REPSE arts. 13, 15, 16; see [01](01-law-and-requirements.md)).

## Feature map

### Duties behind the features (from the law and official guides)

| Duty or portal fact | Source | Feature it drives |
|---|---|---|
| ICSOE lists contracts **started** in the period; one return per period holds them all | [IMSS guide 2](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/2-Guia-Registro-de-Informativa-y-Contrato.pdf) | Period logic "started in period"; one-return rule |
| ICSOE contract fields: object, specialised service contracted, start date, end date if known | same | Contract register fields |
| ICSOE client fields: RFC (portal fills the name), e-mail, mobile, optional landline, fiscal vs conventional/social address | same | Client register; address via postal-code catalogue |
| Worker CSV: NSS (11 digits as text), CURP (18), SBC (2 decimals); max 3,000 workers per file; 15 MB; format check only in the IMSS template | [IMSS template page](https://www.imss.gob.mx/icsoe/plantilla); [IMSS guide 3](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/3-Guia-Carga-Masiva-de-trabajadores.pdf) | ICSOE CSV generator with split; NSS/CURP/SBC checks |
| Upload rejections: bad structure; NSS not in IMSS database; NSS or CURP already registered in the contract | [IMSS guide 3](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/3-Guia-Carga-Masiva-de-trabajadores.pdf) | Duplicate check; error-file import |
| Capturista role (login = CURP; picks the contractor; sends for signature); contractor signs with .cer/.key; acuse in "Acuses de presentación" | [IMSS guide 10](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/10-Guia-Ingreso-del-Capturista.pdf); [IMSS guide 5](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/5-Guia-Firma-y-Presentacion.pdf) | Filing checklist; signer summary; acuse vault |
| Seven published inconsistency types (contractor = client; no service description; bad start date; contract with no workers; return with no contracts; multiple returns; contract count mismatch) | [IMSS Boletín 300/2025](https://www.imss.gob.mx/sites/all/statics/i2f_news/IMSS%20Boletin%20300.pdf); [01](01-law-and-requirements.md) | Rules I1-I7 |
| Return types Normal, Sin información, Complementaria (Corrección, Sin efectos, Actualización); max 4 complementarias except Actualización | [Lineamientos](https://www.imss.gob.mx/sites/all/statics/icsoe/ACUERDO_68PDIR_LINEAMIENTOS_ICSOE.pdf) (5.6) | Return-type helper; correction counter |
| SISUB: three CSV layouts (sujeto obligado, contratos, detalle de trabajadores) plus PDFs (contracts, STPS registration, deed or tax certificate); report types Normal, Sin actividad, Complementario, Datos continuos | [contadormx, Jul 2026](https://contadormx.com/sisub-infonavit-guia-art-29-bis-informe-continuo/) | SISUB generator; report-type helper; document store |
| SISUB covers contracts **active** in the period; two bimester rows per cuatrimestre; worker fields include contract number (numeric, max 30), employer registration, NSS, work-site address (7 fields), fixed and variable pay, incapacity days, non-integrable pay, capped salary | [contadormx worker layout](https://contadormx.com/sisub-plantilla-de-trabajadores/); [01](01-law-and-requirements.md) | SISUB worker rows per bimester |
| SISUB fill rules: no formulas; "N/A" if no data; no empty cells; dates DD/MM/AAAA, 31/12/9999 if open; no commas, full stops, hyphens, slashes, quotes or accents; Ñ to N if Office is in English | [contadormx worker layout](https://contadormx.com/sisub-plantilla-de-trabajadores/) | Sanitiser and rules S4-S6 |
| SISUB amounts must match SUA/SIPARE (June 2026 guide) | [contadormx, Jul 2026](https://contadormx.com/sisub-infonavit-guia-art-29-bis-informe-continuo/) | Reconciliation (v1) |
| Monthly client evidence: payroll CFDI, IMSS and INFONAVIT payment proof, withholding and VAT returns (LISR art. 27 fr. V; LIVA art. 5 fr. II) | [01](01-law-and-requirements.md); [AXA](https://axa.mx/documents/51602/20700179/DOCUMENTO%20REPSE.pdf) | Evidence pack (v1) |
| Keep records 5 years | LSS art. 15 fr. II; CFF art. 30 ([01](01-law-and-requirements.md)) | Retention policy |

### Feature map

| Area | MVP (sellable Dec 2026) | v1 (Feb-Apr 2027, before the May window) | Later |
|---|---|---|---|
| Workspace | Firm workspace with many contractor RFCs; roles; MFA; per-RFC staff assignment | Contractor signer portal (read-only, approve summary) | Client-firm (beneficiaria) view for small clients with joint liability |
| Contractor profile | RFC, name, person type, employer registrations (NRP), REPSE number, authorised services with folio and text, REPSE dates, capturista CURPs | Parse the REPSE "aviso de registro" PDF; renewal tracker (3-year term, 3-month window) | Compliance opinions tracker (SAT, IMSS, INFONAVIT) with expiry |
| Clients | Register with RFC checks, contacts, addresses (postal-code lookup) | Import clients from CFDI invoices issued | |
| Contracts | Register: client, SISUB number, object, REPSE service, dates, amount, estimated workers, work sites, PDF; "started" vs "active" per period. **AI capture from PO or contract PDF** (user confirms each field) | Bulk import from Excel; renewals and amendments | Read client portals' PO feeds (SAP Ariba exports) |
| Workers and salaries | Import: payroll CFDI XML (zip), CONTPAQi ICSOE/SISUB exports, generic Excel; identity by NSS + CURP; salary history | Aspel NOI export; IMSS EMA/EBA Excel for SBC as IMSS sees it ([Runa](https://runahr.com/mx/recursos/nomina/descarga-de-emisiones-imss-y-confronta/)) | Direct payroll connectors (APIs where they exist) |
| Assignment | Rules: SubContratacion RfcLabora, department or site, bulk select; date ranges; percentage of time | Suggestions from previous periods | |
| Checks | 26 rules: ICSOE (I1-I12), SISUB (S1-S8), cross-checks (X1-X6); errors block export, warnings do not | SUA/SIPARE amount match; SBC vs EMA; worker alta/baja vs assignment dates | Learn rejections from users' error files |
| Outputs | ICSOE worker CSV per contract (auto-split at 3,000); ICSOE capture sheet (screen order, copy buttons); three SISUB CSVs + ZIP; nil-return checklist; signer summary PDF | Parse SISUB error file ("Logmensaje") back onto rows | Browser assistant that fills the ICSOE forms (user still signs) |
| Deadlines | Board: RFC x period with statuses; business-day deadlines (Central Mexico time); e-mail reminders | Monthly evidence-pack deadlines (last day of the following month) | WhatsApp reminders |
| Archive | Acuse vault: upload ICSOE and SISUB acuses; read folio and date; 5-year retention; export all | IMSS public list monitor: download the monthly list and flag missing or mismatched filings ([IMSS public list](https://www.imss.gob.mx/icsoe/listado-publico)) | |
| Evidence pack | - | Per client and month: payroll CFDI for that client's workers, IMSS/INFONAVIT payment proof, ISR and VAT acuses, opinions, ICSOE/SISUB acuses; index PDF + ZIP; share link | Push to client platforms (Vigía, BDO, Xternall) by API if they open one |
| Corrections | Record complementarias by hand | Correction workflow with counter (max 4); IMSS request tracker (10 business days) | |
| Billing | Card checkout (merchant of record or Stripe); plans by RFC count | Annual plans; firm reseller pricing | CONTPAQi distributor channel |

### Why this cut for the MVP

- The January 2027 window is the first chance to prove value. It needs the register, imports, checks, files and deadlines. The evidence pack is the retention feature, but it is not needed to file in January.
- AI capture of purchase orders is in the MVP because contracts are the main manual typing in ICSOE and the median contract filer has 2 contracts while the top decile has 11 or more (section 02). It is cheap to build with the Claude API.
- The browser assistant that types into the IMSS forms is left for later. It depends on IMSS page markup, which can change without notice, and it needs care so the user stays in control of what is sent. One search found no existing ICSOE autofill or robot tool, so it could become a differentiator later (unverified).

## Key flows

### Flow 1: First setup of a firm (target: under 45 minutes for 10 client RFCs)

1. Sign up, verify e-mail, set MFA (TOTP app).
2. Add client RFCs from an Excel template (RFC, name, REPSE number, NRPs, contact) or one by one. The app checks RFC structure.
3. For each RFC: add REPSE services (folio and authorised text). In v1, upload the REPSE "aviso de registro" PDF and the app reads them.
4. Assign staff to RFCs.
5. Optional: import last period's accepted SISUB CSVs and ICSOE acuses, so contracts and workers carry over.

### Flow 2: Keep contracts up to date (all year)

1. Staff drops client POs or contracts (PDF) into an RFC's inbox.
2. The app extracts client RFC, PO number, object, dates, amount and site address with Claude, and shows each field next to the source text.
3. Staff confirms or edits. The app suggests the REPSE service that matches the object; staff must pick one.
4. The contract gets a stable SISUB contract number (numeric, max 30 digits) for its whole life.

### Flow 3: Prepare a period (per RFC, target under 30 minutes after the first period)

1. After the last payroll of the period, staff uploads the payroll CFDI XML ZIP (or CONTPAQi exports).
2. The app builds the worker list and salary history, and pre-assigns workers to contracts from the SubContratacion node or last period's assignment.
3. Staff reviews an assignment grid (workers x contracts x bimesters) and fixes gaps.
4. The app runs all checks. Errors are listed in plain Spanish with a "fix" link to the row.
5. When there are no errors, the app generates: the ICSOE capture sheet and worker CSVs per contract started in the period; the three SISUB CSVs for contracts active in the period; and a one-page signer summary.
6. Files are versioned and hashed, so the acuse can later be tied to the exact files filed.

### Flow 4: File ICSOE (outside the app, guided)

1. Staff logs into ICSOE as capturista (CURP + password) and picks the contractor ([IMSS guide 10](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/10-Guia-Ingreso-del-Capturista.pdf)).
2. For each contract, staff copies fields from the capture sheet in screen order: contractor address, client RFC and contacts, contract data. Then staff uploads that contract's worker CSV ([IMSS guide 2](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/2-Guia-Registro-de-Informativa-y-Contrato.pdf)).
3. If IMSS rejects workers, staff downloads the IMSS error Excel and drops it into the app; the app marks those workers.
4. Staff sends the return for signature. The contractor signs with the e.firma ([IMSS guide 5](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/5-Guia-Firma-y-Presentacion.pdf)).
5. Staff (or the signer) uploads the acuse PDF. The app reads folio and date, links it to the file versions and marks the period done.

### Flow 5: File SISUB (outside the app, guided)

1. Staff logs into INFONAVIT's employer portal and opens SISUB under "Mis trámites". One set of files per RFC goes through the main NRP ([IDC Online](https://idconline.mx/seguridad-social/2021/09/02/sisub-plataforma-de-infonavit-ayuda-a-empresas-repse-con-reforma-outsourcing); [01](01-law-and-requirements.md)).
2. Staff uploads the three CSVs and the PDFs the app lists.
3. INFONAVIT validates later and e-mails the result. If there is an error file, staff drops it into the app (v1 maps it to rows) ([contadormx FAQ](https://contadormx.com/15-preguntas-frecuentes-del-sisub-del-infonavit/)).
4. Staff uploads the acuse. If the portal is down near the deadline, the app's "outage log" stores screenshots and times as evidence, as advisers recommended during the 2026 suspension ([Tax Today](https://www.taxtodaymexico.com/infonavit-suspende-temporalmente-el-portal-empresarial/)).

### Flow 6: Nil and continuing returns

- No contract started in the period: the app tells staff to file an ICSOE "Sin información" return ([IMSS guide 2](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/2-Guia-Registro-de-Informativa-y-Contrato.pdf)).
- For SISUB, the app chooses between "Sin actividad" (no contracts in force, no workers placed) and "Datos continuos" (earlier contracts still running), and explains why ([contadormx, Jul 2026](https://contadormx.com/sisub-infonavit-guia-art-29-bis-informe-continuo/)).

### Flow 7: Monthly evidence pack (v1)

1. By the 10th, the app lists what each client wants for the previous month (template per client, such as the AXA list).
2. Staff drops the month's documents (payroll XML, SUA/SIPARE payment proof, tax and VAT acuses, opinions).
3. The app files them, checks dates and RFCs, filters payroll XML to that client's workers, and builds an index PDF and ZIP.
4. Staff sends a share link or downloads the pack for the client's supplier portal.

### Flow 8: Correction (v1)

1. IMSS e-mails a correction request, or staff spots an error after filing.
2. Staff opens a "Complementaria" on the period. The app shows how many complementarias are left (max 4, except Actualización) ([Lineamientos](https://www.imss.gob.mx/sites/all/statics/icsoe/ACUERDO_68PDIR_LINEAMIENTOS_ICSOE.pdf)).
3. The app regenerates only the changed contract's files and sets a 10-business-day deadline for IMSS requests.

## Screens

All screens are in Spanish (Mexico). Server-rendered pages with small interactive parts.

1. **Login and MFA.** E-mail + password, TOTP; device list; password reset.
2. **Deadline board (home).** A matrix of client RFCs (rows) by period (columns). Each cell shows a status (sin datos / datos listos / con errores / archivos generados / capturado / firmado / acuse guardado), the deadline with business-day adjustment, and days left. Filters: staff member, status, "nil only". A banner shows the active window (for example "1-18 ene 2027").
3. **RFC overview.** Contractor data, REPSE services and expiry, NRPs, capturistas, this period's checklist, last acuses, open tasks.
4. **Clients.** List and detail: RFC, name, contacts, fiscal and conventional address, contracts with this client.
5. **Contracts.** List filtered by period (started / active), client and status. Detail: fields, REPSE service, work sites, PDF with extracted fields highlighted, workers by bimester, history.
6. **Contract inbox (AI capture).** Upload area; per document a split view: PDF on the left, proposed fields on the right with confidence and source snippet; buttons "confirmar", "editar", "descartar".
7. **Import wizard.** Choose source (CFDI ZIP, CONTPAQi, Excel), map columns (for Excel), preview, results (new workers, salary changes, unknown NSS, duplicates).
8. **Assignment grid.** Workers (rows) x contracts (columns) per bimester; bulk actions; percentage of time; filter "not assigned".
9. **Check report.** Errors and warnings grouped by rule, with plain-language explanation, legal or guide source, and a link to the row. A count per output (ICSOE, SISUB).
10. **Outputs.** Per period: ICSOE capture sheet (printable, copy buttons), worker CSVs per contract, SISUB ZIP, signer summary; version list with hash and who generated it.
11. **Filing checklist.** Step-by-step for ICSOE and SISUB with portal links, tick boxes, error-file drop zone, acuse upload, outage log.
12. **Acuse vault.** All acuses and filed file versions per RFC and period; search; export ZIP.
13. **Settings.** Users and roles, RFC assignment, plan and billing, data export, deletion request, audit log viewer.
14. **Founder admin.** Layout and rule versions with test status; holiday calendar; announcement banner; break-glass access log.

### What the ICSOE capture sheet contains

The sheet follows the order of the IMSS screens, so staff can copy field by field ([IMSS guide 2](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/2-Guia-Registro-de-Informativa-y-Contrato.pdf)):

1. **Return:** year, period (first and last month), type (Normal or Sin información).
2. **Contractor:** is the conventional address the same as the tax address (Sí/No); if not, postal code, colonia, street, exterior and interior number, between-streets.
3. **Client (one block per contract):** RFC (the portal fills the name after "Validar"), e-mail, mobile, landline (optional); are the social and conventional addresses the same as the tax address; if not, the address fields.
4. **Contract:** "Objeto del contrato", "Servicio u obra especializado contratado" (REPSE folio + authorised text), start date, end date if known.
5. **Workers:** the name of the CSV to upload for this contract, its row count, and a warning if it was split.
6. **Check box per contract** and a final "send for signature" reminder.

## Data sources and integrations

| Source | What we use | Access, format | Licence and cost | Notes |
|---|---|---|---|---|
| **IMSS ICSOE portal** (s-icsoe.imss.gob.mx) | Filing target | Web forms for return, contractor, client and contract; worker CSV upload (3 columns, max 3,000 rows, 15 MB); e.firma signature in the browser; acuse PDF | Free | No API found. Capturista role allows a third party to capture ([IMSS guides](https://www.imss.gob.mx/icsoe/material); [template page](https://www.imss.gob.mx/icsoe/plantilla)). Whether the CSV needs a header row: follow the IMSS template exactly (unverified). |
| **IMSS pre-validator** (plantilla_carga_trabajadores.xlsm) | Reference for the CSV format | XLSM with macros | Free | Format check only; does not check NSS or CURP ([IMSS template page](https://www.imss.gob.mx/icsoe/plantilla)) |
| **INFONAVIT SISUB** (employer portal, "Mis trámites") | Filing target | Upload of 3 CSV layouts + PDFs; asynchronous validation by e-mail; acuse | Free | No API found. Official guide and FAQ updated Sep 2026 sit on portalmx.infonavit.org.mx; both returned HTTP 503 to me ([search result listing the guide](https://portalmx.infonavit.org.mx/wps/wcm/connect/8b68f970-5b08-47c3-9496-577f7928dd36/Guia_del_Sistema_de_Informacion_de_Subcontratacion.pdf?MOD=AJPERES)). The portal was suspended from 27 Mar 2026 ([Tax Today](https://www.taxtodaymexico.com/infonavit-suspende-temporalmente-el-portal-empresarial/)); whether and when it reopened: unverified. |
| **IMSS public list and inconsistent list** | Monitoring that a filing appears with the right contract and worker counts | Excel per period, updated monthly; columns include name, person type, contract folio, services, start and end dates, number of workers, period, return type, return folio, filing date (my reading of LPP2026.xlsx) | Free, public | Lists show names, not RFCs, so matching is by name ([IMSS public list](https://www.imss.gob.mx/icsoe/listado-publico)) |
| **Payroll CFDI XML** (nómina complement 1.2) | Workers (NSS, CURP, RFC, name), employer registration, salary (SBC), pay items, the SubContratacion node (RfcLabora, PorcentajeTiempo) | XML files the user exports from payroll or downloads from SAT | Free standard | Node is conditional; how many payrolls fill it is unknown (unverified) ([El Contribuyente](https://www.elcontribuyente.mx/2024/08/requisitos-para-deducir-cfdi-de-nomina-de-servicios-especializados-del-repse/)). We do not use SAT's bulk-download service, because it needs the e.firma. |
| **CONTPAQi Nóminas exports** | ICSOE worker list; SISUB worker CSV; "Datos empleados" sheet (NSS, CURP, alta and baja dates, SBC fixed, variable and capped) | CSV and Excel; file name pattern RFCEmpresa_sisub_trab_ejercicio_NumCuatrimestre.csv | User's licence | Leaves contract number and the 7 work-site fields for the user to type ([CONTPAQi SISUB note](https://conocimiento.blob.core.windows.net/conocimiento/2022/Contables/Nominas/CartasTecnicas/CT_Nominas_1512/reporte_sisub.html)) |
| **IMSS EMA/EBA** (monthly and bimonthly assessments) | IMSS's own view of each worker's SBC, to catch payroll-vs-IMSS salary gaps (v1) | ZIP with PDF, Excel, SUA and viewer versions, from the IMSS employer portal | Free | ([Runa](https://runahr.com/mx/recursos/nomina/descarga-de-emisiones-imss-y-confronta/); [Buk](https://info.buk.mx/hubfs/Descarga%20tus%20archivos%20EMA%20y%20EBA%20en%20Buk.%20(1).pdf)); exact Excel columns unverified |
| **SUA** (IMSS contribution software) | Bimester amounts (v1) | Desktop app with a local database; internal format not documented ([convert.guru](https://convert.guru/es/convertidor-de-sua); [Edifact](https://www.edifact.com.mx/masinfo/no-hay-acceso-a-la-base-de-datos-sua)) | - | Do not parse SUA's database. Use payroll exports or SUA reports in Excel (unverified format). |
| **Postal-code catalogue** | Colonia, municipality and state from the CP, for addresses | TXT, XLS or XML | Correos de México's download is free for private use only; a datos.gob.mx copy is under the "Libre Uso MX" licence ([GitHub mexico_zipcodes](https://github.com/d3249/mexico_zipcodes); [packagist sepomex](https://packagist.org/packages/eclipxe/sepomexphp)) | Use the datos.gob.mx copy for a commercial product |
| **REPSE public register** (repse.stps.gob.mx) | Check that a contractor's registration is current | Web search; one guide says lookups are one at a time ([BITAM case](https://bitam.com/newsletter/Agosto-2025/casoexito.pdf)) | Free | No bulk download or API found (unverified). Store the user's own REPSE acuse instead. |
| **RFC, CURP and NSS checks** | Catch typos before upload | Offline algorithms: RFC structure; CURP structure and check digit; NSS 11th digit is a check digit (Luhn-style) ([elconta](https://elconta.mx/como-se-saca-integra-el-numero-del-imss/); [Milenio](https://www.milenio.com/comunidad/significado-nss-11-digitos-imss-que-son)) | Free | Confirm the NSS rule on test data (unverified). Online CURP checks (RENAPO) have captchas; not used. |
| **UMA and minimum wage** | SBC cap (25 UMA) and SISUB capped salary | Yearly values | Free | UMA 2026 = MXN 117.31 per day ([01](01-law-and-requirements.md); [IDC Online](https://idconline.mx/seguridad-social/2026/02/16/obligaciones-y-multas-para-2026-imss-e-infonavit)) |
| **Holiday calendar** | Business-day deadlines | Federal rest days (LFT art. 74) plus IMSS and INFONAVIT non-working days, published yearly ([IDC, INFONAVIT 2026 calendar](https://idconline.mx/seguridad-social/2026/01/14/calendario-infonavit-2026-dias-inhabiles)) | Free | Maintained by hand each year. ICSOE moves to the next business day (Lineamientos 5.5); SISUB applies the Federal Tax Code art. 12 rule ([IDC, Jan 2025](https://idconline.mx/seguridad-social/2025/01/17/fecha-limite-para-presentar-icsoe-y-sisub-tercer-cuatrimestre-2024)) |
| **Claude API** | Extract contract fields from PO and contract PDFs | API; per-token billing | Opus 5.5 USD 4 / 20 per million input/output tokens; Haiku 5.5 USD 0.10 / 0.50 ([Anthropic pricing](https://platform.claude.com/docs/en/about-claude/pricing)) | Send no worker personal data to the model |
| **Payments** (Paddle or Stripe) | Subscriptions | Hosted checkout and webhooks | Paddle 5% + USD 0.50 per transaction ([Dodo Payments](https://dodopayments.com/blogs/paddle-fees-explained)) | Payment design is in a separate section |

**What we deliberately do not integrate:** the e.firma, SAT's bulk-download web service, IMSS IDSE login, and any screen-scraping of government portals with the user's passwords. Each would put a qualified signature or tax login in our hands, which is a large liability and a target for phishing.

## Data model

### Main entities (PostgreSQL, every row carries tenant_id)

| Entity | Key fields | Notes |
|---|---|---|
| **Tenant** (firm or direct contractor) | name, plan, billing ids, data region | One workspace |
| **User**, **Membership** | e-mail, MFA secret, role (owner, staff, signer), assigned contractor ids | |
| **Contractor** | RFC, legal name, person type (física/moral), tax address, e-mail, phone, capturista CURPs | The obligated filer |
| **EmployerRegistration** | NRP (registro patronal), main flag, risk class | SISUB uses the main NRP |
| **RepseRegistration** | number, issue date, expiry, status; **RepseService** (folio, authorised text) | ICSOE "service" field = REPSE folio + authorised text ([IMSS FAQ](https://www.imss.gob.mx/icsoe/preguntas)) |
| **Client** | RFC, name, e-mail, mobile, landline, fiscal / social / conventional addresses | |
| **Address** | street, ext no, int no, colonia, CP, municipio, entidad, between-streets | Shared by clients, contractors, work sites |
| **Contract** | client, SISUB number (numeric, max 30), PO or client reference, object, REPSE service, start, end (nullable), amount, estimated workers, status, source document | ICSOE folio stored after filing |
| **WorkSite** | contract, address | SISUB worker rows repeat the site address |
| **Worker** | NSS (encrypted + keyed hash), CURP (encrypted + hash), RFC, name (encrypted) | One per person per tenant |
| **Employment** | worker, contractor, NRP, alta date, baja date | From payroll or EMA |
| **SalaryRecord** | worker, date, SBC, SDI, source (payroll CFDI, CONTPAQi, EMA) | Lets the app pick "last SBC in period" |
| **PayrollReceipt** | CFDI UUID, worker, pay period, perception totals by type, incapacity days, SubContratacion lines (RFC, %) | Raw XML kept in object storage |
| **Assignment** | worker, contract, from, to, % time, source (rule, manual) | Core of both returns |
| **BimesterAmounts** | worker, contract, year, bimester, fixed, variable, incapacity days, non-integrable, capped salary, aportaciones, amortizaciones | SISUB detail |
| **Period** | year, cuatrimestre (1-3), legal deadline, adjusted deadline | Shared reference data |
| **Filing** | contractor, period, authority (ICSOE/SISUB), type (Normal, Sin información, Complementaria-Corrección/Sin efectos/Actualización; SISUB Normal, Sin actividad, Complementario, Datos continuos), status, folio, filed at, acuse document, complementaria count | |
| **GeneratedFile** | filing, kind (ICSOE CSV, capture sheet, SISUB layout 1-3, ZIP), layout version, SHA-256, created by, created at | Ties acuse to exact bytes |
| **CheckRun**, **CheckIssue** | rule id, rule version, severity, entity ref, message, resolved by | |
| **Document** | type (PO, contract, REPSE acuse, ICSOE acuse, SISUB acuse, error file, evidence item), storage key, hash, retention until | |
| **Task / Reminder** | due date, type, assignee, channel, sent at | |
| **AuditEvent** | who, what, when, IP, before/after hash | Append-only |
| **LayoutSpec**, **RuleSet** (global, versioned) | YAML: columns, types, lengths, allowed characters, ordering; rule ids with tests | Updated by the founder, not per tenant |

### Key relations

```
Tenant 1-n Contractor 1-n EmployerRegistration
Contractor 1-n RepseRegistration 1-n RepseService
Contractor 1-n Client 1-n Contract 1-n WorkSite
Contractor 1-n Worker 1-n Employment / SalaryRecord / PayrollReceipt
Worker n-n Contract via Assignment (dated) -> BimesterAmounts
Contractor 1-n Filing (per Period, per authority) 1-n GeneratedFile, Document(acuse)
CheckRun 1-n CheckIssue -> any entity
```

### Rule catalogue for the MVP (the product's core IP)

ICSOE rules (sources: [IMSS Boletín 300/2025](https://www.imss.gob.mx/sites/all/statics/i2f_news/IMSS%20Boletin%20300.pdf), [IMSS guides](https://www.imss.gob.mx/icsoe/material), [IMSS FAQ](https://www.imss.gob.mx/icsoe/preguntas), [Lineamientos](https://www.imss.gob.mx/sites/all/statics/icsoe/ACUERDO_68PDIR_LINEAMIENTOS_ICSOE.pdf)):
- I1 One Normal return per contractor per period.
- I2 Client RFC differs from contractor RFC.
- I3 Each contract has an object and a REPSE service (folio + authorised text).
- I4 Start date present and inside the period; end date blank or on/after start.
- I5 Each contract has at least one worker.
- I6 A Normal return has at least one contract; otherwise file Sin información.
- I7 No worker twice in one contract (a worker may be in several contracts).
- I8 NSS: 11 digits, kept as text with leading zeros, check digit valid.
- I9 CURP: 18 characters, valid structure and check digit.
- I10 SBC: number with 2 decimals, above zero, not above 25 UMA; equals the last SBC in the period.
- I11 Worker file under 3,000 rows and 15 MB, else split.
- I12 Client e-mail and mobile present.

SISUB rules (sources: [contadormx layouts](https://contadormx.com/sisub-plantilla-de-trabajadores/), [contadormx Jul 2026](https://contadormx.com/sisub-infonavit-guia-art-29-bis-informe-continuo/), [contadormx errors](https://contadormx.com/errores-comunes-del-sisub-al-infonavit/)):
- S1 All three layouts present; contract numbers in the worker layout exist in the contract layout; numeric, max 30.
- S2 Every contract active in the period appears, not only new ones.
- S3 Two bimester rows per worker per active bimester.
- S4 No empty cells; "N/A" where text is missing; dates DD/MM/AAAA; 31/12/9999 if open-ended.
- S5 No forbidden characters (, . - / " and accents); optional Ñ to N.
- S6 Capped salary not above the legal cap (the regulation says 25 times the minimum wage; check against current practice) (unverified).
- S7 Report type consistent with data (Normal, Sin actividad, Complementario, Datos continuos).
- S8 Amounts match SUA/SIPARE for the bimester (v1, when SUA data is loaded).

Cross-checks (my design):
- X1 Every contract in the ICSOE return is in the SISUB contract layout.
- X2 Every ICSOE worker on a contract is in the SISUB worker detail for that contract.
- X3 Worker's SBC in ICSOE equals payroll (and EMA in v1).
- X4 Worker had an active employment (alta) during the assignment dates.
- X5 Payroll SubContratacion RFC, where present, matches the contract's client.
- X6 Number of contracts and workers matches what the signer summary and evidence pack show.

Each rule has an id, a version, a plain-Spanish message, a source link, and at least one passing and one failing test fixture.

## Architecture and stack

### Recommendation: one boring monolith, built for AI agents

- **Language and framework:** Python 3.12 + Django + HTMX (server-rendered pages, small interactive bits). Why: Python has the best libraries for the real work here (lxml for CFDI XML, openpyxl for Excel, csv, pdfplumber/pypdf for acuse text); Django gives authentication, an admin back office, migrations and forms for free; it is a widely documented framework, which helps AI agents write consistent code (my judgement).
- **Database:** PostgreSQL 16 with row-level security policies on tenant_id as a second safety net under the ORM's tenant filter.
- **Jobs:** a Postgres-backed queue (for example Procrastinate or Django-Q2) for imports, checks, file generation, PDF parsing and reminders. No Redis needed at first (my judgement).
- **Storage:** S3-compatible object storage for XML, PDFs and generated files, encrypted at rest, with per-tenant prefixes.
- **Domain core as a pure package:** `repse_core` (no Django imports) holds layout specs, validators, rule engine and generators. It takes plain data and returns files and issues. This is the part that must be exactly right, and it can be tested and built in parallel.
- **Layouts and rules as data:** YAML specs for each output (columns, order, type, length, allowed characters, sanitising), versioned by effective date. When INFONAVIT changes a layout, we add a version and its golden files.
- **AI extraction:** a small service module that sends PDF pages to the Claude API with a strict JSON schema, stores the result with confidence and source spans, and never auto-saves without human confirmation.
- **Front end:** Django templates + HTMX + a small CSS framework; one JavaScript component for the assignment grid.
- **E-mail:** a transactional e-mail provider (Postmark, Resend or SES) for reminders and invitations.
- **Observability:** Sentry for errors, an uptime monitor, structured logs without personal data.
- **CI/CD:** GitHub Actions: lint, type check, unit and golden tests, Playwright end-to-end tests, dependency and secret scanning; deploy on merge to main with migrations.

### Diagram

```
 Browser (staff, signer)
     |  HTTPS, MFA
     v
 Django app (web) ---- Claude API (PO/contract PDFs only)
     |      \
     |       \---- E-mail provider (reminders)
     v
 PostgreSQL (RLS by tenant) <---- Job workers (imports, checks, generators, reminders)
     |                                   |
     +------------ Object storage (XML, PDFs, generated files; encrypted)
                                         |
 repse_core (pure Python: layouts, validators, rules, generators, golden tests)

 Outside the app, done by the user: IMSS ICSOE portal (capture + e.firma), INFONAVIT SISUB (upload)
```

### Why not something else

- **No microservices, no Kubernetes:** one founder must run it.
- **No mobile app:** the work happens at a desk with Excel and the portals.
- **No direct portal automation in the MVP:** no API exists, and handling e.firma or portal passwords would change the risk profile of the whole business.

## Security, privacy and liability

### Data protection law

- **Law:** Ley Federal de Protección de Datos Personales en Posesión de los Particulares, new law in DOF 20 Mar 2025, last reform DOF 14 Nov 2025. The regulator is now the Secretaría Anticorrupción y Buen Gobierno ("la Secretaría") ([LFPDPPP text](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf); [IDC Online](https://idconline.mx/corporativo/2025/03/28/lfpdppp-5-cambios-clave-en-el-manejo-de-datos-personales)).
- **Our role:** the customer (contractor or its accountant) is the "responsable". We process "por cuenta del responsable", so we are the "persona encargada" (art. 2 fr. XII) ([LFPDPPP](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf)). For our own users' account data we are the responsable and need our own privacy notice (aviso de privacidad).
- **Hosting abroad:** the law defines "transferencia" as a communication to someone other than the data subject, the responsable or the persona encargada (art. 2 fr. XX). So sending data to us, as encargada, hosted in the US, is not a transfer that needs consent under arts. 35-36 (my reading of [LFPDPPP](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf); confirm with the lawyer). Our sub-processors (hosting, e-mail, Anthropic, payment provider) must be named in the data processing agreement.
- **Consent:** salary data is "financial or patrimonial" and needs express consent, except under arts. 9 and 36 (art. 7). Art. 9 fr. I (a legal duty) and fr. IV (the employment relationship) cover the contractor's use of its workers' data for ICSOE and SISUB (my reading; confirm with the lawyer) ([LFPDPPP](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf)). NSS, CURP and salary are not on the law's "sensitive" list, which covers the most intimate data (art. 2 fr. VI).
- **Security duty:** administrative, technical and physical measures, not weaker than for our own data, scaled to risk (art. 18). Breaches that significantly affect people must be reported to them "de forma inmediata" by the responsable (art. 19), so our contract must notify the customer without delay. Staff confidentiality (art. 20).
- **Sanctions:** 100 to 160,000 UMA, or 200 to 320,000 UMA for the worse infringements (art. 59), doubled for sensitive data; a security breach caused for profit by someone authorised to process data is a crime with 3 months to 3 years in prison (art. 62) ([LFPDPPP](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf)). At UMA MXN 117.31, 320,000 UMA is about MXN 37.5 million (my calculation).
- **Regulations:** the law refers to a Reglamento (art. 2 fr. XIII). Whether a new one has been issued, and whether the 2011 rules on cloud services still apply, is unverified. Ask the lawyer.

### Security baseline (MVP)

1. MFA (TOTP) mandatory for every user; session timeout; login rate limits.
2. Tenant isolation in the ORM and in Postgres row-level security; automated tests that try cross-tenant reads on every model.
3. Field-level encryption for NSS, CURP and worker names, with keyed hashes for matching; keys in the host's secret manager; TLS everywhere.
4. Object storage encrypted; private buckets; signed short-lived download links.
5. Append-only audit log for logins, exports, file generation, role changes and support access.
6. No e.firma, no SAT or IMSS passwords, ever. A visible notice in the app and in onboarding e-mails, to blunt phishing.
7. AI calls carry only PO and contract PDFs. Worker files never go to the model.
8. Backups: daily encrypted database backups kept 30 days; a restore test before launch and each quarter.
9. Dependency scanning, secret scanning, and an external web application test before launch (see Budget).
10. Data lifecycle: keep filed evidence for 5 years by default (LSS art. 15 fr. II; CFF art. 30, see [01](01-law-and-requirements.md)); full export at any time; deletion within 30 days after a customer leaves, except what the customer asks us to keep (my policy).

### Liability and disclaimers

- The user files and signs. The product prepares and checks. The terms must say that the customer is responsible for what it files, and that the app is not legal or tax advice.
- Cap liability at the fees paid in the last 12 months; exclude indirect losses such as fines and lost client payments (to be drafted by the Mexican lawyer; enforceability unverified).
- Every rule shows its source and review date. Layout changes are announced in the app with the date they take effect.
- A domain expert (social-security accountant) signs off the rule catalogue and layouts before launch and after each official change.
- Keep the hash of every generated file and the matching acuse, so we can show exactly what the app produced if a dispute arises.

## Hosting and running costs

### Choice

- **Start in a managed US region** (for example DigitalOcean NYC/SFO or AWS us-east). Latency to Mexico is fine for a form-and-file app, prices are low, and the law does not require hosting in Mexico (see Privacy).
- **Keep a path to AWS Mexico (Central), Querétaro, launched January 2025** if a large customer asks for data in Mexico ([AWS](https://aws.amazon.com/blogs/aws/now-open-aws-mexico-central-region)). Which managed services run there was not checked (unverified).
- **Reference prices (third-party, unverified against the vendor):** DigitalOcean basic VM from USD 4 a month; managed PostgreSQL from USD 15 a month single node and about USD 60 for high availability; Spaces object storage USD 5 a month for 250 GiB and 1 TiB transfer ([Kuberns](https://kuberns.com/blogs/digitalocean-pricing/); [Valebyte](https://valebyte.com/en/blog/digitalocean-pricing-overview-and-5-cheaper-alternatives-in-2026/)).

### Load assumptions (my estimates)

- Customer mix: 40% accounting firms with about 12 client RFCs each, 60% direct contractors with 1 RFC. So 50 customers = about 270 RFCs; 300 = about 1,600; 1,000 = about 5,400.
- About 30 workers and 5 new contracts per RFC per period (section 02: 263,040 contracts for 49,705 contract filers, median 11 workers, long tail).
- Storage: payroll XML about 10 MB per RFC a year, PDFs and evidence about 50 MB per RFC a year once the evidence pack exists. At 1,000 customers that is about 300 GB a year.
- Load is spiky: most work happens in the first 18 days of January, May and September.
- AI extraction: about 1.5 contract PDFs per RFC per month, about 6,000 input and 800 output tokens each (my estimate). With Opus 5.5 that is about USD 0.04 per document; with Haiku 5.5 about USD 0.001 ([Anthropic pricing](https://platform.claude.com/docs/en/about-claude/pricing)). Test both on real POs during the pilot and choose on accuracy.

### Monthly running cost (my estimates, USD, excluding VAT and payment fees)

| Item | 50 customers | 300 customers | 1,000 customers |
|---|---|---|---|
| App and worker servers | 1-2 small VMs or app instances: 12-30 | 2-3 instances: 50-90 | 3-5 instances + load balancer: 150-250 |
| PostgreSQL (managed) | single node: 15-30 | single node, larger: 30-60 | high-availability pair: 120-250 |
| Object storage + offsite backup | 5-10 | 10-20 | 25-60 |
| Transactional e-mail | 0-15 | 15-30 | 30-60 |
| Error tracking, uptime, logs | 0-26 | 26-60 | 60-120 |
| Claude API for PO extraction | 1-20 | 5-120 | 10-400 |
| Domain, DNS, misc. | 5 | 5 | 10 |
| **Total** | **about 40-135** | **about 140-385** | **about 400-1,150** |

Plan for the upper end of each range during the three filing windows, when imports and checks peak (my estimate).

**Payment fees are bigger than hosting.** At an average of MXN 500 (about USD 28) a month per customer billed monthly, Paddle's 5% + USD 0.50 is about USD 1.90 per customer a month: about USD 95 at 50 customers, USD 570 at 300 and USD 1,900 at 1,000 (my calculation from [Dodo Payments](https://dodopayments.com/blogs/paddle-fees-explained)). Annual billing cuts the fixed part. Payment options are covered in another section.

**Margin check.** At 300 customers paying an average of MXN 500 a month (about USD 8,300), hosting plus payment fees come to about USD 710-955 a month, a gross margin of about 88-91% before support time (my calculation; the price points are section 02's proposals).

**Yearly extras:** an external security re-test (USD 2,500-6,000), the social-security accountant's review of layout changes (3 periods x 3-5 hours), and legal updates (my estimates).

## Development plan

### Basis

- The founder builds with Claude Code and several agents working in parallel on separate branches (git worktrees). The founder writes the specs, reviews every merge and owns integration. No hired developers.
- Tooling: Claude Max at USD 100 or 200 a month (5x or 20x Pro usage, Claude Code included) ([noqta](https://noqta.tn/en/blog/claude-code-pricing-2026); [heyuan110](https://www.heyuan110.com/posts/ai/2026-02-25-claude-code-pricing/)), plus API credits if parallel agents exceed plan limits (unverified how much).
- Parallel work is safe only if interfaces are frozen first. Week 1 therefore produces the data model, the layout spec format, the rule interface and synthetic test companies before any feature work.

### Agent work streams (parallel from week 2)

| Stream | Scope | Inputs frozen in week 1 | Done when |
|---|---|---|---|
| **A. Platform** | Auth, MFA, tenants, roles, RLS, audit log, settings, billing webhooks | Data model, role matrix | Cross-tenant tests pass; MFA forced; audit events written |
| **B. Registers + AI capture** | Contractor, REPSE, clients, contracts, work sites, documents; postal-code lookup; PO/contract extraction with Claude and the review screen | Models; extraction JSON schema; 20 sample POs (anonymised) | 20 sample POs extract with field accuracy measured; nothing saves without confirmation |
| **C. Importers** | CFDI nómina XML (zip), CONTPAQi exports, generic Excel mapper; worker identity; salary history; SubContratacion parsing | Models; sample files from pilots; synthetic XML generator | 3 real payroll sets import with 0 unmatched workers after review |
| **D. Rules engine** | Layout spec loader; NSS, CURP, RFC validators; rules I1-I12, S1-S8 (S8 stub), X1-X6; messages in Spanish | Rule interface; rule list above | Every rule has passing and failing fixtures; 100% rule coverage |
| **E. Generators** | ICSOE worker CSVs (split at 3,000), capture sheet (HTML/PDF), SISUB three CSVs + ZIP, signer summary, file hashing | Layout specs; golden files from pilots' accepted filings | Byte-exact match with golden files; sanitiser passes S4-S5 |
| **F. Workflow + UI** | Deadline board, period state machine, business-day calendar, reminders, filing checklist, acuse upload and parsing, outage log | Status list; holiday table 2026-2028 | Time-travel test fires all reminders; acuse folio read from 10 sample PDFs |
| **G. QA and security** (runs throughout) | Synthetic data generator, Playwright end-to-end tests, threat model, dependency scan, backup-restore script | All of the above | End-to-end "period" test green in CI; restore drill documented |

Rule of thumb: run 4-6 streams at once. More creates more review than one founder can do well (my judgement).

### How the founder runs the agents (my method)

- One repository with a CLAUDE.md that fixes conventions: module layout, naming, Spanish UI strings in one catalogue, "no personal data in logs", test commands.
- Each stream gets a short spec file (goal, interfaces it may use, files it owns, acceptance tests) and works in its own git worktree and branch.
- Tests first for `repse_core`: golden input and output files are the referee. An agent may not change a golden file; only the founder can, after the expert agrees.
- A separate review agent reads each pull request against the spec and the security checklist before the founder's own review.
- Merge daily; run the full end-to-end "period" test nightly on synthetic companies.
- Keep real pilot data out of agent sessions. Agents work on synthetic data and anonymised samples only.

### Calendar (start Monday 12 Oct 2026)

| Week (start) | Product, legal, pilots | Engineering (agent streams) | Checkpoint |
|---|---|---|---|
| 1 (12 Oct) | 8-10 calls with accountants who file ICSOE/SISUB; ask each for an anonymised past period (accepted CSVs, acuses, payroll export); get the current SISUB guide and layouts from a pilot (INFONAVIT's site returned 503 to me); hire the social-security accountant (domain expert) | Repo, CI, hosting, Django skeleton; data model; layout spec format; rule interface; synthetic data generator | **Spec freeze:** models, specs and fixtures merged |
| 2 (19 Oct) | Expert reviews the rule catalogue and layout specs (first pass); landing page with waitlist | Streams A-F in parallel | Daily merges; CI green |
| 3 (26 Oct) | Collect 20 real POs and 3 payroll sets from pilots | Streams continue; first end-to-end run on synthetic company | |
| 4 (2 Nov) | Expert reviews generated files against pilots' accepted filings | Integration week: one flow from PDF + XML to ICSOE/SISUB files; bug bash | **MVP feature-complete (about 6 Nov)** |
| 5 (9 Nov) | **Dry-run pilots:** 3-5 firms re-prepare their May-Aug 2026 period in the app and compare with what they filed in September | Fixes from pilots; performance on a 1,000-worker RFC | Generated files match accepted filings, or differences are explained |
| 6 (16 Nov) | Lawyer drafts terms, privacy notice and data processing agreement in Spanish; expert signs off rules v1 (Mon 16 Nov is the Revolution Day rest day under LFT art. 74, third Monday of November (unverified for 2026)) | Hardening: encryption, audit, backup-restore drill; billing | **LC1:** rules and layouts signed off by the expert |
| 7 (23 Nov) | External security test (3-4 days) | Fix findings; accessibility and Spanish copy pass | |
| 8 (30 Nov) | Lawyer signs off documents; pricing page; onboarding videos | Re-test of fixed findings; monitoring dashboards | **LC2:** legal documents approved; no open high or critical findings |
| 9 (7 Dec) | **Paid launch.** Annual plans offered before the January window; pilots convert | Support rota; small fixes | Sellable |
| 10-11 (14-27 Dec) | Load contracts and workers for customers; holidays from about 24 Dec | v1 start: public-list monitor, SISUB error-file parser | |
| Window (1-18 Jan 2027) | Live filing of Sep-Dec 2026 by pilots and customers; daily check-ins | On call; hot fixes only | Count on-time filings and rejections |
| Feb-Apr 2027 | Interview customers about the evidence pack; collect client templates (AXA-style) | v1: evidence pack, EMA/EBA reconciliation, corrections, REPSE renewal tracker, signer portal | v1 live before the 1-17 May 2027 window |

### Definition of done for the MVP

1. For at least 3 pilot RFCs with real May-Aug 2026 data, the app's ICSOE worker CSVs and SISUB CSVs match what the pilot filed and IMSS/INFONAVIT accepted, or every difference is explained and approved by the expert.
2. A staff user prepares a 5-contract, 20-worker RFC in under 45 minutes the first time and under 20 minutes the next period (Praxium's benchmark is about 12 hours a period for 5 clients and 18 workers) ([Praxium](https://praxiumconsultores.com/blog/icsoe-y-sisub-cuanto-cuesta-cumplir-cada-cuatrimestre)).
3. All rules I1-I12, S1-S7 and X1-X6 have passing and failing tests; the IMSS seven inconsistency types are caught.
4. AI capture: on 20 real POs, at least 90% of fields are right before human review, and no field is saved without confirmation (target to check in pilot).
5. Deadline board shows correct business-day deadlines for all 2027 periods (18 Jan, 17 May, 17 Sep 2027) and reminders fire in a time-travel test.
6. Tenant isolation tests pass; MFA enforced; field encryption on; backup restored in a drill; external test has no open high or critical findings.
7. Spanish terms, privacy notice and data processing agreement signed off by a Mexican lawyer; rules and layouts signed off by the social-security accountant.
8. Billing works end to end in MXN.
9. At least 5 pilot firms say they will pay the planned price before the January window.

### If time slips

- Drop AI capture to v1 and keep a fast manual contract form; the rest of the MVP still stands.
- Drop the CONTPAQi importer if pilots use CFDI XML; keep the generic Excel mapper.
- Never drop tenant isolation, encryption, the expert sign-off or the security test.
- If the paid launch slips past mid-December, run the January 2027 window as a concierge service for the pilots: the founder operates the app on their data and hands back files and capture sheets. This keeps the January learning cycle (my suggestion).

## Budget

### Cash costs to a sellable product (founder unpaid; my estimates)

| Item | Low (USD) | High (USD) | Basis |
|---|---|---|---|
| Claude Max (2-3 months) | 300 | 600 | USD 100-200 a month ([noqta](https://noqta.tn/en/blog/claude-code-pricing-2026)) |
| Extra API usage for parallel agents and AI extraction tests | 100 | 600 | my estimate |
| Hosting, domain, e-mail, monitoring during build and pilot | 150 | 400 | table above |
| Social-security accountant (domain expert): 20-35 hours | 900 | 2,000 | Ad-hoc accountant advice runs MXN 700-1,000 an hour in Guadalajara ([Praxium](https://praxiumconsultores.com/blog/cuanto-cobra-un-contador-en-guadalajara)); about MXN 16,000-35,000 |
| Mexican lawyer: terms, privacy notice, data processing agreement, liability review, remote | 1,400 | 3,300 | about MXN 25,000-60,000; no published package prices found (unverified) |
| External web application security test, small scope, with re-test | 2,500 | 6,000 | Guides put a single web app test at USD 5,000-15,000 for startups and warn that very cheap quotes are scans; a small scoped 3-4 day test from a boutique may be lower ([Startup Defense](https://www.startupdefense.io/es-us/blog/cuanto-cuesta-un-pentest); [7ASecurity](https://7asecurity.com/blog/2026/04/the-2026-guide-to-penetration-testing-pricing-and-scoping/)) (unverified for Mexico) |
| Pilot incentives (free months) and interview costs | 0 | 300 | my estimate |
| Contingency (15%) | 800 | 2,000 | |
| **Total to sellable** | **about 6,150** | **about 15,200** | **likely about USD 6,000-13,000** |

Company formation, payment set-up and marketing are not included; they are in the go-to-market and company sections.

### First-year running cash (after launch, my estimates)

| Item | USD per year |
|---|---|
| Hosting and services at 50-300 customers | 500-4,600 |
| Claude Max for ongoing development | 1,200-2,400 |
| Expert review of layout changes (3 windows) | 600-1,500 |
| Legal updates | 500-1,500 |
| Security re-test | 2,500-6,000 |
| **Total (excluding payment fees)** | **about 5,300-16,000** |

## Risks

| Risk | Effect | Mitigation |
|---|---|---|
| **SISUB layout changes** (Dec 2023, Jun 2026) and the official guide is hard to obtain (INFONAVIT site 503; portal suspended from 27 Mar 2026) ([contadormx](https://contadormx.com/sisub-infonavit-guia-art-29-bis-informe-continuo/); [Tax Today](https://www.taxtodaymexico.com/infonavit-suspende-temporalmente-el-portal-empresarial/)) | Wrong files; rejections in the window | Layouts as versioned data; pilot accountants send new guides; expert retainer; status banner |
| **ICSOE contract capture stays manual** | Time saving smaller for firms with many contracts | Capture sheet with copy buttons; later a browser assistant that fills forms while the user watches |
| **IMSS adds pre-filling or an API** | Less need for generation | Value sits in the register, checks, multi-client board and evidence pack; an API would also make our integration easier |
| **CONTPAQi adds a contract layer** (section 02) | Strong incumbent for its users | Import CONTPAQi exports and sell to mixed-payroll firms; partner with distributors |
| **Payroll does not fill SubContratacion** | Manual assignment work | Rules by department or site; carry over last period; bulk actions |
| **Data breach** | Fines, contract loss, reputation | Baseline above; least data (no e.firma); encryption; external test |
| **Wrong output causes a fine or late filing** | Customer loss, claims | Expert sign-off; golden tests; terms with liability cap; hashes of what was generated |
| **AI extraction errors** | Wrong contract data | Human confirmation; show source text; measure accuracy in pilot |
| **Seasonal use (three windows)** | Churn between windows | Monthly evidence pack in v1; annual plans |
| **Founder bottleneck in review** | Bugs slip through with many agents | Freeze interfaces; 4-6 streams max; CI gates; golden tests as the arbiter |
| **Government portal outages near deadlines** | Late filings not caused by us | Outage log with evidence; early-filing reminders |

## Open questions

1. What exactly do the current SISUB layouts (Sep 2026 guide) contain, column by column, and do they need header rows? INFONAVIT's guide URL returned 503; get the files from a pilot.
2. Did INFONAVIT's employer portal reopen after the 27 Mar 2026 suspension, and how did filers meet the May and September 2026 deadlines?
3. Does the ICSOE worker CSV need a header row, and can a capturista upload and then delete a test return without filing, to validate our files safely?
4. How many payroll systems fill the CFDI SubContratacion node for REPSE workers?
5. What are the columns of the IMSS EMA/EBA Excel files, and do accountants have them for each client?
6. Which SUA report gives bimester amounts per worker in a usable format?
7. Does a new LFPDPPP Reglamento exist, and do the 2011 cloud-service rules still apply?
8. Will customers accept hosting in the US, or will some demand AWS Mexico?
9. Which model (Opus 5.5 or Haiku 5.5) gives acceptable accuracy on real Mexican POs and contracts?
10. Is a browser assistant that fills ICSOE forms acceptable to users and safe against IMSS page changes?

## Sources

Official (IMSS, INFONAVIT, law)
- https://imss.gob.mx/icsoe
- https://www.imss.gob.mx/icsoe/material
- https://www.imss.gob.mx/sites/all/statics/icsoe/guias/2-Guia-Registro-de-Informativa-y-Contrato.pdf
- https://www.imss.gob.mx/sites/all/statics/icsoe/guias/3-Guia-Carga-Masiva-de-trabajadores.pdf
- https://www.imss.gob.mx/sites/all/statics/icsoe/guias/5-Guia-Firma-y-Presentacion.pdf
- https://www.imss.gob.mx/sites/all/statics/icsoe/guias/9-Guia-Alta-de-usuarios.pdf
- https://www.imss.gob.mx/sites/all/statics/icsoe/guias/10-Guia-Ingreso-del-Capturista.pdf
- https://www.imss.gob.mx/icsoe/plantilla
- https://www.imss.gob.mx/sites/all/statics/icsoe/pre-validador/plantilla_carga_trabajadores.xlsm
- https://www.imss.gob.mx/icsoe/preguntas
- https://www.imss.gob.mx/icsoe/listado-publico
- https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPP2026.xlsx
- https://www.imss.gob.mx/sites/all/statics/icsoe/ACUERDO_68PDIR_LINEAMIENTOS_ICSOE.pdf
- https://www.imss.gob.mx/sites/all/statics/i2f_news/IMSS%20Boletin%20300.pdf
- https://portalmx.infonavit.org.mx/wps/wcm/connect/8b68f970-5b08-47c3-9496-577f7928dd36/Guia_del_Sistema_de_Informacion_de_Subcontratacion.pdf?MOD=AJPERES (returned 503)
- https://portalmx.infonavit.org.mx/wps/portal/infonavitmx/mx2/patrones/mis_obligaciones/sisub/ (returned 503)
- https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf
- https://www.diputados.gob.mx/LeyesBiblio/pdf/LSS.pdf

Practitioner and secondary
- https://contadormx.com/sisub-infonavit-guia-art-29-bis-informe-continuo/
- https://contadormx.com/sisub-plantilla-de-trabajadores/
- https://contadormx.com/15-preguntas-frecuentes-del-sisub-del-infonavit/
- https://contadormx.com/errores-comunes-del-sisub-al-infonavit/
- https://www.taxtodaymexico.com/infonavit-suspende-temporalmente-el-portal-empresarial/
- https://idconline.mx/seguridad-social/2021/09/02/sisub-plataforma-de-infonavit-ayuda-a-empresas-repse-con-reforma-outsourcing
- https://idconline.mx/seguridad-social/2026/02/16/obligaciones-y-multas-para-2026-imss-e-infonavit
- https://idconline.mx/corporativo/2025/03/28/lfpdppp-5-cambios-clave-en-el-manejo-de-datos-personales
- https://idconline.mx/seguridad-social/2026/01/14/calendario-infonavit-2026-dias-inhabiles
- https://idconline.mx/seguridad-social/2025/01/17/fecha-limite-para-presentar-icsoe-y-sisub-tercer-cuatrimestre-2024
- https://www.elcontribuyente.mx/2024/08/requisitos-para-deducir-cfdi-de-nomina-de-servicios-especializados-del-repse/
- https://conocimiento.blob.core.windows.net/conocimiento/2022/Contables/Nominas/CartasTecnicas/CT_Nominas_1512/reporte_sisub.html
- https://conocimiento.blob.core.windows.net/conocimiento/2024/Contables/Nominas/CartasTecnicas/CT_Nominas_1622/reporte_icsoe_listado_de_trabajadores.html
- https://runahr.com/mx/recursos/nomina/descarga-de-emisiones-imss-y-confronta/
- https://info.buk.mx/hubfs/Descarga%20tus%20archivos%20EMA%20y%20EBA%20en%20Buk.%20(1).pdf
- https://convert.guru/es/convertidor-de-sua
- https://www.edifact.com.mx/masinfo/no-hay-acceso-a-la-base-de-datos-sua
- https://elconta.mx/como-se-saca-integra-el-numero-del-imss/
- https://www.milenio.com/comunidad/significado-nss-11-digitos-imss-que-son
- https://github.com/d3249/mexico_zipcodes
- https://packagist.org/packages/eclipxe/sepomexphp
- https://bitam.com/newsletter/Agosto-2025/casoexito.pdf
- https://praxiumconsultores.com/blog/icsoe-y-sisub-cuanto-cuesta-cumplir-cada-cuatrimestre
- https://praxiumconsultores.com/blog/cuanto-cobra-un-contador-en-guadalajara
- https://axa.mx/documents/51602/20700179/DOCUMENTO%20REPSE.pdf
- https://www.repse.org.mx/repse-portal.html
- https://sifo.com.mx/precios_sifo.php

Technology and costs
- https://aws.amazon.com/blogs/aws/now-open-aws-mexico-central-region
- https://kuberns.com/blogs/digitalocean-pricing/
- https://valebyte.com/en/blog/digitalocean-pricing-overview-and-5-cheaper-alternatives-in-2026/
- https://platform.claude.com/docs/en/about-claude/pricing
- https://noqta.tn/en/blog/claude-code-pricing-2026
- https://www.heyuan110.com/posts/ai/2026-02-25-claude-code-pricing/
- https://dodopayments.com/blogs/paddle-fees-explained
- https://www.startupdefense.io/es-us/blog/cuanto-cuesta-un-pentest
- https://7asecurity.com/blog/2026/04/the-2026-guide-to-penetration-testing-pricing-and-scoping/

## Working notes
- Status: COMPLETE (10 Oct 2026). Still open: whether SISUB reopened after the Mar 2026 suspension (two searches found no reopening notice; INFONAVIT's SISUB page shows an update of 10 Sep 2026 in search results but returned 503); whether the ICSOE CSV takes a header row; no ICSOE autofill or robot tool found in one search.
- Budget used: 21 WebSearch, 7 WebFetch (2 returned 503). IMSS guides 2, 3, 5, 9 and 10, the IMSS template page and the LFPDPPP consolidated text were downloaded and read directly. Column names of the IMSS public lists were read from the files section 02 downloaded.
