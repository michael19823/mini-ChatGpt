# Plan 01: Peru "Registro Diario" for fuel stations (Ley 32412 hydrocarbon register)

*Development plan prepared 2026-10-05. Source: `research/countries/peru.md`, Opportunity 1 (ranked #1 globally, 7.5/10). Verification used 15 WebSearch queries in Spanish and English. No page was read in full; every fact comes from search-result summaries of the cited URLs. Anything not confirmed is marked **unverified** or **estimate**.*

---

## 1. Verdict up front

**Interview first, and expect a downgrade. Do not write code yet.** The legal trigger is real and confirmed. RS 000135-2026/SUNAT requires a daily operations register per establishment, consolidated and filed **monthly** through SUNAT Operaciones en Línea. It also requires incidents to be reported within one calendar day. RS 000170-2026 moved the start for hydrocarbon users to 1 Feb 2027. Verification changed three things, and together they shrink the opportunity from "a national fuel-station product" to "a niche tool for stations in illegal-mining zones":

1. **Scope is geographic, not national.** The hydrocarbon obligation covers OSINERGMIN-registered users "who operate in zones demanding hydrocarbons that may be used in illegal mining". That means the Régimen Complementario de Control de Insumos Químicos zones (Madre de Dios, plus parts of Puno, Cusco and others) and the Registro Especial of DS 016-2014-EM, art. 8. The report assumed several thousand stations nationally. The realistic set of obliged stations is closer to **~600–1,500 (estimate)**, plus direct and minor consumers, distributors and transporters in those zones.
2. **It is not a blank slate.** SUNAT has run a registro de operaciones for bienes fiscalizados for years, with a downloadable "Cliente Registro de Operaciones" application (v2.10 training material exists). Many stations in the special-regime zones have already filed SUNAT operation registers and OSINERGMIN SCOP quotas. Local station software already advertises it: **Rayo Fact** lists "reportes de insumos químicos" for grifos. Station POS vendors (Pecano, OpenSoft with 200+ stations, Gasolutions/Infogas, Netgas, Quesito) sit on the sales data and can add an export cheaply.
3. **A second, national daily duty already exists.** Since 15 May 2026, every station must log inventory daily on OSINERGMIN's Plataforma Virtual (PVO) (RCD 060-2026-OS/CD). A station that doesn't report can't place SCOP purchase orders. The "one daily tank reading → OSINERGMIN PVO + SUNAT register + variance incidents" reconciliation layer is the only part that may still be unserved. It is narrower and more contestable than the report assumed.

If interviews in Puno, Madre de Dios and Cusco show that (a) the stations' POS vendors will not ship the SUNAT monthly file by Feb 2027, and (b) owners or their accountants will pay at least S/150 per station per month, build the concierge version below. Otherwise drop it, or fold it into a broader controlled-chemicals register (Peru Opportunity 2) sold to the same accountants.

---

## 2. Verification results

| Claim from report | What you found | Source | Status |
|---|---|---|---|
| Ley 32412 (Jul 2025) puts hydrocarbons under SUNAT chemical-input control | Confirmed. Ley 32412 covers mercury, cyanide and hydrocarbons; SUNAT is the competent authority. Its regulation, **DS 117-2026-EF**, was published 26 Jun 2026 | lpderecho.pe; ccfirma.com; prcp Lexmail on the regulation; orientacion.sunat.gob.pe/ley-32412 | Confirmed (regulation added) |
| RS 000135-2026 creates a daily register, filed through SOL | Daily register per establishment. The information is presented **consolidated and monthly** (00:00 of day 1 to 23:59:59 of the last day) through SOL | busquedas.elperuano.pe/dispositivo/NL/2535975-1; elperuano.pe/noticia/300684 | Changed: daily record-keeping, monthly filing |
| Losses, spills, surpluses and theft must be reported within one calendar day | Confirmed in news coverage of RS 135-2026 | larepublica.pe, 20 Jul 2026 | Confirmed |
| Hydrocarbon users postponed to 1 Feb 2027 | Confirmed by RS 000170-2026 because of "the larger volume of their operations". The first month to declare is Feb 2027 for automatically incorporated users | orientacion.sunat.gob.pe RS 170-2026 PDF; elperuano.pe/noticia/303640; revistaeconomia.com | Confirmed |
| Fuel stations across the country are obliged | Applies to hydrocarbon users in the OSINERGMIN Registro de Hidrocarburos **operating in zones that demand hydrocarbons usable in illegal mining**: retail stations, direct and minor consumers, wholesale distributors and transporters. Tied to the Registro Especial of DS 016-2014-EM, art. 8 | elperuano.pe search snippets on DS 117-2026-EF and Ley 32412; leap.unep.org (DS 016-2014-EM); sni.org.pe | **Changed (major):** zone-limited |
| "Several thousand stations nationally" | A third-party mirror of the OSINERGMIN registry lists **3,429** EVPC/stations nationally (likely partial). Puno 375, Arequipa 260, Cajamarca 175, Ayacucho 150, Piura 148, San Martín 132, Lambayeque 130. The full list of zones in scope was not found; DS 013-2015-EM and DS 036-2015-EM modify the zones | tramitesperu.com/osinergmin/grifos-autorizados | Changed; national count unverified, in-scope count is an estimate |
| SOL accepts manual entry or file upload; format unknown | SUNAT historically gave users a downloadable "Cliente Registro de Operaciones" app (Registro Diario de Operaciones aplicativo v2.10). Whether RS 135-2026 keeps a file-import path or uses a web form was **not confirmed**. No public API was found | orientacion.sunat.gob.pe/node/2424; contenido.app.sunat.gob.pe training PDF; orientacion.sunat.gob.pe/6346-04-registro-de-operaciones | Unverified (biggest technical unknown) |
| No vendor advertises Registro Diario support | **Rayo Fact** (grifo e-invoicing) advertises "reportes de insumos químicos". Pecano (ERP with POS Grifo, PSE), OpenSoft (200+ stations, 4M e-invoices/month), Gasolutions (backed by Infogas), ASPS Netgas and Quesito all hold station sales data. None was found advertising RS 135-2026 by name | rayofact.com/grifos; pecano.pe; opensysperu.com; gasolutions.pe; aspsperu.com/netgas; quesito.pe | Contradicted in part |
| Third parties can file for the user | Filing uses the user's own Clave SOL. A secondary SOL user for an accountant or vendor is standard SUNAT practice, but this was **not verified** for this module. No homologation or certification was found | — | Unverified |
| (New) Daily OSINERGMIN inventory duty | RCD 060-2026-OS/CD: since 15 May 2026, stations must log liquid-fuel and LPG inventory daily on PVO. Non-compliance blocks SCOP purchase orders | gob.pe/institucion/osinergmin/noticias/1389286; rumbominero.com; elperuano.pe/noticia/295760 | New fact (national) |
| (New) Special Madre de Dios controls | DS 009-2026-EM sets special controls on hydrocarbon sale, transport and use in Madre de Dios and nearby zones | busquedas.elperuano.pe/dispositivo/NL/2529540-2; estudio-castillo.com | New fact |
| Penalties | The law sets an infractions and sanctions scheme (fines, seizure, suspension from the register). The amounts in UIT were **not found** | ccfirma.com; lpderecho.pe | Unverified amounts |

---

## 3. Customer and problem

**Buyer:**
- The owner or administrator of an independent grifo or a small chain (1–10 stations) in the in-scope zones: Puno (Juliaca, Puno, Azángaro, San Antonio de Putina), Madre de Dios (Puerto Maldonado, Mazuko) and Cusco (Quispicanchi and the Ocongate–Marcapata corridor). The exact provinces are unverified.
- Second buyer: the **external contador** who already files the station's SUNAT obligations and could buy for 5–20 stations.

**User:** the station's administrative assistant or *jefe de playa*, who closes the shift; and the accountant who files.

**Job to be done:** "Every day, turn what came in (GRE plus invoice) and what went out (boletas, facturas, dispenser totals) into a register SUNAT accepts. Make it agree with the tank stick reading I already send to OSINERGMIN. Tell me within hours when the numbers don't match, so I can file the incident inside the one-day window. At month end, hand me the file to present."

**Current workflow (expected; confirm in interviews; times and costs are estimates):**

| Step | Who | Time | Cost (estimate) |
|---|---|---|---|
| 1. Receive tanker: check GRE and invoice, measure the tank before and after | Jefe de playa | 20–30 min per delivery, 2–8 deliveries per month | — |
| 2. Daily close: dispenser totals, stick readings per tank, POS sales report | Jefe de playa | 20–40 min per day | — |
| 3. Log the daily inventory in OSINERGMIN PVO (already required) | Admin | 10–15 min per day | — |
| 4. From Feb 2027: re-key the day's inflows and outflows into the SUNAT register format (spreadsheet or SUNAT app) | Admin or accountant | 15–45 min per day, depending on whether sales are aggregated or per receipt (format unknown) | S/ 300–800 per month of staff time |
| 5. Investigate variance against book stock; decide whether it is an "incidencia" (shrinkage or surplus) and report within one day | Owner and admin | 0–2 h per event | Risk of penalty |
| 6. Month end: consolidate and present through SOL; rectify errors | Accountant | 2–6 h per month | S/ 150–400 per month extra fee |
| 7. Keep supporting documents for inspection | Admin | ongoing | — |

**Cost of failure:**
- Sanctions under Ley 32412 (amounts unverified), possible seizure of product, and suspension from the SUNAT register. Suspension would in practice stop the station buying controlled fuel.
- Seizures of fuel from clandestine grifos supplying the Huallaga show that enforcement is real (proactivo.com.pe).
- OSINERGMIN already blocks SCOP purchases when daily PVO inventory is missing. That is a revenue stop, and a precedent for how harsh daily controls can be.

---

## 4. Product definition

**Core loop:** daily close input (tank readings, deliveries, sales) → automatic reconciliation of book stock against physical stock per tank and product → variance flag with the incident deadline → monthly SUNAT file and PVO-ready daily figures → evidence vault.

**MVP (must-have):**
1. Station and tank setup: products such as Diesel B5 S50, Gasohol 90/95/97 and GLP if relevant; tank capacities; the station's SUNAT establishment code.
2. Daily close form, mobile-first. Opening and closing stick per tank, dispenser totals, deliveries linked to the GRE number.
3. Import sales from the POS or e-invoice provider: a CSV or XLSX daily sales report, or a ZIP of UBL 2.1 XML e-invoices. Map item codes to fuel products.
4. Import inbound GREs from the XML or PDF the supplier sends.
5. Reconciliation engine. Book stock = opening + receipts − sales. Variance against physical stock, with a configurable tolerance. Above tolerance, flag a possible incident with a countdown to the one-calendar-day deadline.
6. Monthly export in SUNAT's register structure: a file for upload if SOL accepts one, or a field-by-field "assisted entry" sheet if it doesn't.
7. Evidence vault per day: photos of stick readings, GREs and the incident draft.

**v1:**
- Accountant multi-station dashboard.
- WhatsApp or email alert for missed closes and variances.
- PVO daily-figure helper: copy-ready values, or a browser extension that pre-fills PVO.
- Incident draft text and rectification workflow.
- Direct POS connectors for the top 2 vendors in the zone.

**Later:**
- Transporter and distributor module (GRE-driven).
- Mercury and cyanide variant (Peru Opportunity 2).
- Automated SOL submission, only if SUNAT exposes a sanctioned channel.

**Explicitly out of scope:**
- Being the POS or issuing e-invoices.
- Dispenser or ATG hardware integration.
- Automated SOL login with stored client passwords at first.
- Legal advice on whether a variance is a crime.
- Stations outside the in-scope zones.

**Key screens and flows:**
1. **"Cierre del día"**: one screen per tank, with the stick reading and a photo, dispenser totals and the deliveries received today. A green or red result appears immediately.
2. **Variance and incident**: a red tank card showing book vs. physical, gallons and percentage, a countdown, a suggested classification (merma, excedente, derrame, robo), the draft text to file in SOL, and a "filed" checkbox with a SOL constancia upload.
3. **Monthly presentation**: completeness checklist (all days closed, every GRE matched), "Download SUNAT file", and the upload steps with screenshots.
4. **Accountant view**: a grid of stations by day showing closed, variance or missing; bulk monthly export.
5. **Import center**: drag in the POS sales report, e-invoice XML ZIP or GRE files, then review the mapping.

---

## 5. Technical design

**Architecture:**
- A single web app (server-rendered plus some interactivity) with a Postgres database and object storage for evidence.
- Background jobs for parsing imports, daily reminders and deadline alerts.
- Data flow: imports or forms → normalized movements table → per-tank daily ledger → variance rules → exports.
- Hosting: a managed PaaS in a US or São Paulo region (for example Render, Fly.io or Railway) with managed Postgres. Peru has no data-localisation rule for this kind of data (see the privacy row below). Cost about US$50–150 per month at the start.

**Stack for a solo developer:** Ruby on Rails or Django, plus Postgres, plus S3-compatible storage, plus a job queue.
- Batteries-included admin and auth.
- Fast CRUD and form building.
- Mature XML (UBL) and XLSX libraries.
- Easy Spanish i18n.
- A PWA for the mobile daily close; no native app.

**Data model:**

| Entity | Main fields / relations |
|---|---|
| Organization | RUC, razón social; can be a station owner or an accounting firm |
| Station (establishment) | SUNAT establishment code, OSINERGMIN registro number, zone |
| Tank | Product, capacity |
| Product | Mapped to SUNAT's controlled-product code |
| DailyClose | Station, date, status |
| TankReading | Opening and closing levels, photo |
| Delivery | GRE series and number, supplier RUC, invoice, gallons, tank |
| SaleAggregate | Per product per day; source = POS report or XML |
| Movement | Normalized in/out lines, for the register |
| Variance | Computed; tolerance; classification |
| Incident | Type, detected_at, deadline, filed_at, SOL constancia |
| MonthlyFiling | Period, file hash, presented_at, rectifications |
| EvidenceFile | — |
| AuditEvent | — |

**Integrations:**

| Integration | Method | Fallback |
|---|---|---|
| SUNAT register presentation | Generate the file or structure the new SOL option expects; the user (or the accountant as a secondary SOL user) uploads it. Format not yet published or verified | Assisted manual entry: a printable sheet in field order; concierge entry by our staff with the client's secondary SOL user and written authorization |
| SUNAT incident report (one day) | Draft text and data; the user files in SOL | Concierge filing as above |
| OSINERGMIN PVO daily inventory | Show copy-ready values. Later, maybe a browser extension that fills the form the user already has open | Manual copy |
| POS / e-invoice sales | CSV/XLSX daily report import; UBL 2.1 XML ZIP import from the PSE/OSE or POS | Manual daily totals per product |
| Inbound GRE | XML or PDF parse; SUNAT's GRE consultation for validation (manual) | Manual entry of GRE number and gallons |
| Tank gauges (ATG) | Out of scope | Stick readings with a photo |

**Rules engine and validation:**
- Per-tank continuity: closing level of day N equals opening level of day N+1, within tolerance.
- No negative stock.
- Each delivery must have a GRE, and the GRE product must match the tank product.
- Sales by product must equal dispenser total deltas, within tolerance.
- Variance above X% or Y gallons opens an incident candidate, with a 24-hour timer.
- Monthly completeness: every day closed, no unresolved incidents.
- Register-file schema validation: field lengths, codes, dates, RUC check digit (módulo 11).
- Rules are versioned, so a change in SUNAT's format doesn't rewrite history.

**Security, privacy and data residency:**
- Peru's **Ley 29733** (Ley de Protección de Datos Personales) and its regulation apply. A newer regulation, DS 016-2024-JUS, is believed to be in force since 2025 (**not verified this session**). Data here is mostly business data, plus some personal data (employee names, sole-trader RUCs).
- Register any personal-data bank with the ANPD if required. Cross-border transfer is permitted with notice and adequate safeguards (unverified). No in-country hosting requirement was found.
- Never store client SOL primary passwords. Use secondary SOL users created by the client, with limited profiles, stored encrypted only if concierge filing needs them.
- TLS, encryption at rest, 2FA for accountant accounts, per-organization row-level isolation.

**Audit trail and liability:**
- Every movement, edit and export is an immutable AuditEvent with user, timestamp and before/after.
- Exports carry a hash. Monthly filings are locked after presentation; corrections go through a rectification record.
- Terms state that the client is the obligated party and is responsible for reviewing and presenting. The tool is a preparation aid. Liability is capped at 12 months of fees.
- If a submission is wrong because of a rules bug: notify affected clients, generate corrected files, and support the rectification. RS 135-2026 contains rectification rules, whose details are unverified.

**Localisation:**
- Spanish (Peru) only.
- Soles (PEN), with gallons as the native unit (Peru sells fuel by gallon). Convert to the unit SUNAT requires (unverified).
- RUC, 11 digits with check digit; DNI for individuals.
- SUNAT document series formats (F001-, B001-, T001-/EG01- for GRE).
- Lima time zone (UTC−5) for the one-day deadline.

**Testing:**
- Golden-file tests against SUNAT's published structure or examples once available, plus any validator SUNAT ships.
- Fixtures from real (anonymized) pilot-station months.
- Property tests on ledger continuity.
- Before launch, file February 2027 for 3 pilot stations side by side with their accountant and compare against SUNAT acceptance.

---

## 6. Build plan

Effort assumes one full-time developer-founder. Weeks run from the start, Oct 2026.

| Week | Milestone | Dev-weeks |
|---|---|---|
| 0–3 (Oct) | Validation only (section 13): calls with 10–15 stations and accountants, collect POS exports and GREs, obtain the RS 135-2026 annex and any SUNAT format | 0 |
| 4 | Go/no-go. If go: sign 3–5 pilot LOIs | 0 |
| 5–7 (Nov) | Station/tank setup, daily close PWA, evidence upload, ledger and variance rules | 3 |
| 8–10 | Sales import (CSV/XLSX for the 2 most common POS reports in the pilots; UBL XML ZIP), GRE import | 3 |
| 11–12 (Dec) | Monthly register export, or assisted-entry sheet, per the SUNAT format; accountant grid | 2 |
| 13–15 (Jan 2027) | Pilot dry run: stations close January daily in the tool (not legally required yet); fix mappings; onboarding docs and video in Spanish | 2 |
| 16–19 (Feb 2027) | Live month 1. Pilots convert to paid from 1 Feb. **First paying customer: about week 16** | 1 (support) |
| 20 (early Mar) | First real monthly presentation (Feb 2027 period); concierge alongside each client | 1 |
| 21–28 (Mar–Apr) | v1: alerts (WhatsApp/email), incident drafts and rectification, PVO helper, first direct POS connector | 6 |

**Effort:** about **11 developer-weeks to first paying customer**, about **18 developer-weeks to v1**.

**What to fake or do manually (concierge MVP):**
- For pilots, the founder or a local assistant receives the station's daily WhatsApp photo of the closing sheet plus the POS report and keys it in.
- Month-end filing is done in a screen-share with the client's accountant.
- Incident drafting is done by hand.
- Automate only after 3 months of seeing which POS formats and variance patterns recur.

---

## 7. Go-to-market

**Ideal first 10 customers:**
- Independent single-site grifos and 2–5-station chains in **Juliaca and Puno** (375 stations listed in Puno), **Puerto Maldonado** and the Interoceánica corridor (Madre de Dios), and **Quispicanchi, Cusco**.
- Priority goes to owners who use a POS that exports to Excel, and to those already filing SUNAT bienes-fiscalizados registers, who know the pain.

**How to reach them:**
- OSINERGMIN Registro de Hidrocarburos (public establishment list) and Facilito price data (unverified): build a list of in-scope stations with address and RUC.
- Look up the RUC in SUNAT's consulta RUC for the legal name and the representative.
- Visit in person in Juliaca and Puerto Maldonado: 2 trips of 5 days, about 40 visits each.
- Approach accountants who serve several grifos (ask stations "¿quién le lleva la contabilidad?").
- Contact the regional chambers of commerce (Cámara de Comercio de Puno, of Madre de Dios) and any regional grifo association (none verified).

**Outreach angles (Spanish):**
- "Desde el 1 de febrero de 2027 SUNAT le pide registro diario de combustibles; nosotros lo armamos con lo que ya hace para Osinergmin."
- "Si su stock no cuadra, tiene 1 día para reportarlo; le avisamos el mismo día."
- "Su contador le presenta el mes en 10 minutos, no en una tarde."
- For accountants: "Un tablero para todos sus grifos; cobre el servicio, nosotros hacemos el cuadre."

**Channel partners:**
1. Accountants serving grifos (revenue share of 20% or a wholesale price).
2. Small regional POS and e-invoice vendors with no compliance module (white-label export). Rayo Fact and OpenSoft are more likely competitors than partners.
3. Consultancies already publishing on RS 135-2026, such as bybconsultores, as a referral source.
4. Fuel distributors and wholesalers supplying these zones, who also want clean GRE matching.

**Launch timing:**
- Validate in Oct–Nov 2026, pilot in Jan 2027, go live on 1 Feb 2027. The first filing deadline is in Mar 2027 (exact day unverified).
- The peak selling window is Dec 2026–Mar 2027. Watch for another postponement, which SUNAT has already done once.

**Content and SEO (Spanish):**
- "registro diario de operaciones combustibles SUNAT"
- "Resolución 135-2026 grifos"
- "incidencias mermas combustible SUNAT 1 día"
- "inventario diario Osinergmin PVO grifos"
- "Ley 32412 grifos Puno / Madre de Dios"
- A free downloadable Excel "plantilla de cuadre diario de tanques" as the lead magnet.
- A YouTube walkthrough of the SOL presentation once the option is live.

---

## 8. Pricing and unit economics

**Tiers (estimate, untested):**

| Tier | Price | Includes |
|---|---|---|
| Básico | S/ 149 per station per month (~US$40) | Daily close, reconciliation, monthly file, vault |
| Acompañado | S/ 249 per station per month (~US$67) | Básico, plus concierge review of the monthly file and incident drafting |
| Contador | S/ 99 per station per month, minimum 5 stations | Multi-station dashboard; the accountant resells |

**Expected ACV:** about US$45 blended per station per month, about **US$540 per station per year**. A 3-station chain is about US$1,600 per year.

**CAC by channel (estimates):**

| Channel | Cost per paying station |
|---|---|
| Field visits | ~US$150–250 (trip cost about US$2,500 per 40 visits; assume 10–15 conversions) |
| Accountant channel | ~US$50–100 plus 20% revenue share |
| SEO / content | ~US$30–80 once ranking, slow start |

**Gross margin:** about 80% on software alone. About 55–65% on the concierge tier (assistant time about 1–2 h per station per month at about S/ 15/h). Payment fees are 3.5–4.5% (Culqi, Izipay, Mercado Pago; rates unverified).

**Payment rails:**
- Peruvian SMEs pay by bank transfer (BCP, Interbank), Yape/Plin, or card through local processors.
- They need a **factura electrónica** with IGV to deduct the expense.
- A foreign entity cannot easily issue a Peruvian factura. Peruvian payers of foreign digital services may also face income-tax withholding (believed 30% for non-domiciled digital services, **unverified**) and must self-assess IGV.

**Options:**
1. A local **S.A.C.** (foreign shareholders allowed; needs a resident general manager or attorney-in-fact) that invoices in soles.
2. Bill through a local partner company (the accounting firm or a reseller) under a reseller agreement. Recommended for year 1.
3. A merchant of record (Paddle or Lemon Squeezy) for card payments. It won't issue a Peruvian factura, so expect friction.

**FX risk:**
- Prices are in PEN, costs in USD. The sol has been relatively stable among LatAm currencies, but budget for a ±10% swing.
- Reprice annually. Keep the PEN balance short by converting monthly.

---

## 9. Company and legal setup

- **Entity:** start with a reseller agreement through a Peruvian accounting firm or partner that invoices clients and remits net of tax. Form a S.A.C. once there are more than 40 paying stations (about US$800–1,500 setup through a local firm, plus an accountant at about S/ 300–500 per month; estimates).
- **Local representative:** a part-time field and support person in Juliaca or Puno (Spanish, ideally Quechua or Aymara), about US$600 per month.
- **Tax:**
  - IGV at 18% applies to the local invoice.
  - Selling cross-border triggers IGV on digital services from non-domiciled providers (in force since late 2024 for B2C; B2B is self-assessed by the client) and possible income-tax withholding. All of this is **unverified this session**; confirm with a Peruvian tax adviser before the first invoice.
- **Contracts:**
  - SaaS terms in Spanish: the client is the obligated party; liability is capped; a data-processing clause under Ley 29733.
  - A concierge mandate letter that authorizes use of a secondary SOL user with a defined profile.
  - Data retention for at least the SUNAT retention period (unverified; plan for 5 years).
- **Professional liability:** E&O or professional liability insurance through a local broker once revenue justifies it (about US$500–1,500 per year, estimate). Until then, the contractual cap plus "client reviews and presents".

---

## 10. Financial model (24 months)

**Assumptions:**
- Month 1 = Nov 2026. Paying customers start in Feb 2027 (month 4).
- ARPU US$45 per station per month.
- Fixed costs: US$250 per month for tools, hosting and domain; local part-time rep at US$600 per month from month 3, rising to US$900 per month from month 13.
- One-off costs: US$1,500 setup in month 1; field trips at US$2,500 in months 2, 4 and 13.
- 15% partner revenue share plus 5% payment and processing costs.
- **No founder salary.** Station counts are cumulative paying stations net of churn.

| Period | Paying stations | MRR (US$) | Period costs (US$) | Period net (US$) | Cumulative cash (US$) |
|---|---|---|---|---|---|
| M1 Nov-26 | 0 | 0 | 1,750 | −1,750 | −1,750 |
| M2 Dec-26 | 0 | 0 | 2,750 | −2,750 | −4,500 |
| M3 Jan-27 | 0 (pilots free) | 0 | 850 | −850 | −5,350 |
| M4 Feb-27 | 5 | 225 | 3,395 | −3,170 | −8,520 |
| M5 Mar-27 | 12 | 540 | 958 | −418 | −8,938 |
| M6 Apr-27 | 20 | 900 | 1,030 | −130 | −9,068 |
| M7 May-27 | 28 | 1,260 | 1,102 | +158 | −8,910 |
| M8 Jun-27 | 35 | 1,575 | 1,165 | +410 | −8,500 |
| M9 Jul-27 | 42 | 1,890 | 1,228 | +662 | −7,838 |
| M10 Aug-27 | 48 | 2,160 | 1,282 | +878 | −6,960 |
| M11 Sep-27 | 54 | 2,430 | 1,336 | +1,094 | −5,866 |
| M12 Oct-27 | 60 | 2,700 | 1,390 | +1,310 | −4,556 |
| Q5 (M13–15) | 75 | 3,375 | 7,840 | +1,610 | −2,946 |
| Q6 (M16–18) | 90 | 4,050 | 5,745 | +5,730 | +2,784 |
| Q7 (M19–21) | 105 | 4,725 | 6,150 | +7,350 | +10,134 |
| Q8 (M22–24) | 120 | 5,400 | 6,555 | +8,970 | +19,104 |

- **Operating break-even** (excluding the founder): month 7 (May 2027).
- **Cash payback:** Q6, around month 17.
- **Paying a founder** US$3,000 per month would need about 90–100 stations. That is reached only around month 18.

**Realistic ceiling:**
- SAM is about 600–1,500 in-scope retail stations (estimate), plus perhaps a few hundred direct and minor consumers and transporters.
- At 10–15% share, that is 90–220 stations, or **US$4k–10k MRR (US$50k–120k ARR)**. This is a lifestyle business at best, unless the product extends to the national OSINERGMIN PVO workflow or to other controlled chemicals.
- If scope turned out to be national (about 3,400–5,000+ stations), the ceiling would be roughly 3× higher.

---

## 11. Team and founder fit

**Skills:**
- Full-stack web development; parsing XML, XLSX and PDF.
- Fluent Spanish, including the regulatory reading of SUNAT resolutions.
- Comfort doing field sales in provincial Peru.

**Language:** Spanish is mandatory. Quechua or Aymara is useful for rapport in Puno and Cusco, through the local rep.

**Non-local founder:**
- Feasible only with a Peruvian partner or rep on the ground. The buyers are provincial, relationship-driven and partly cash-economy, and the zones are linked to illegal mining.
- A remote-only sale is unrealistic for the first 20 customers.

**Local help needed:**
- A Peruvian tax and legal adviser for the entity and SUNAT interpretation.
- A field rep in Juliaca, Puno.
- Ideally one accountant partner who serves 10 or more grifos.

---

## 12. Risks and mitigations

| Risk | Type | Likelihood / impact | Mitigation |
|---|---|---|---|
| Scope narrower than assumed (zones only) | Regulatory / market | **High / high** (confirmed direction) | Size the zone list precisely before building; widen via the PVO helper and the mercury/cyanide variant |
| SUNAT pre-fills the register from GRE and e-invoice data (confirm-only) | Government | Medium / fatal | Kill condition. Ask SUNAT orientation and early filers in Sep–Dec 2026 how the mercury/cyanide filing works in practice |
| POS / e-invoice vendors (Rayo Fact, OpenSoft, Pecano, Gasolutions) ship the export | Competitive | **High** / high | Position as the reconciliation-and-incident layer across POS brands. Partner with smaller vendors. Go to the accountant channel first |
| Another postponement past Feb 2027 | Regulatory | Medium / medium | Keep burn near zero until the go-live is confirmed; sell PVO and variance value regardless |
| SOL accepts only a web form (no file upload) | Platform | Medium / medium | Assisted entry plus concierge with a secondary SOL user; browser-extension fill as v1 |
| Clients' stock data reveals diversion (illegal sales) | Reputational / legal | Medium / high | KYC on clients (valid OSINERGMIN registro, no SUNAT suspension); refuse "make the numbers fit" requests; terms forbid falsification; keep an audit trail |
| Price sensitivity; informal payment culture | Commercial | High / medium | Accountant bundle; annual prepay discount; Yape/transfer payment |
| Getting paid as a foreign founder (withholding, factura) | FX / payment | High / medium | Bill through a local partner, then a S.A.C. |
| Physical safety and travel in mining zones | Operational | Low–medium | Use a local rep; stay in urban hubs (Juliaca, Puerto Maldonado) |

---

## 13. Validation plan before writing code

**Interview targets (12–15):**
- 6 independent grifo owners or administrators in Puno and Juliaca (from the OSINERGMIN list).
- 3 in Puerto Maldonado and Madre de Dios.
- 2 in Cusco (Quispicanchi).
- 3 accountants who serve at least 3 grifos each.
- 1 regional POS or e-invoice vendor (for example Rayo Fact, or an OpenSoft reseller), to learn their roadmap.
- 1 SUNAT orientation call or a bybconsultores-type consultant on the actual SOL mechanics.
- 1 mercury or cyanide user already filing since Sep 2026, to learn how the live filing actually works.

**Questions:**
1. Did SUNAT notify you that you were incorporated into the Registro? Are you in a régimen complementario zone?
2. Did you already file SUNAT operation registers for bienes fiscalizados before 2026? With what tool, and how long did it take?
3. Walk me through yesterday's close: what readings, which system, who, how long?
4. How do you log the OSINERGMIN PVO inventory today? How long does it take? Have you ever been blocked in SCOP?
5. Which POS or e-invoice provider do you use? Can you export daily sales by product to Excel? Has your vendor said anything about RS 135-2026?
6. How often does book stock differ from the stick reading by more than 0.5%? What do you do then?
7. Who will prepare the monthly SUNAT presentation, and what will they charge?
8. If a tool did the daily reconciliation and gave the accountant a ready file, what would you pay per month? Would your accountant buy it?
9. (Mercury/cyanide filers) Does SOL accept a file, or is it a form? Does it pre-fill anything from GRE or e-invoices?

**Pass / fail thresholds:**
- **Pass:**
  - at least 60% of owners in scope confirm they must file from Feb 2027;
  - at least 50% report daily close and reconciliation taking 20 minutes or more, or hiring the accountant for it;
  - fewer than 30% say their POS vendor has committed to RS 135-2026 export;
  - SOL is shown not to auto-build the register;
  - at least 5 say "yes" at S/ 149 or more per station per month.
- **Fail:**
  - SUNAT pre-fills from GRE and e-invoices; or
  - the 2–3 dominant POS vendors in the zones commit to the export before Dec 2026; or
  - fewer than 3 of 12 say they would pay S/ 100 or more.

**Pre-sale / LOI test:**
- Offer a "plan fundador": S/ 99 per station per month locked for 12 months, with 3 months' prepayment (S/ 297) refundable if the tool isn't ready for the February 2027 period.
- Target: **at least 5 prepaid stations** (or 3 stations plus 1 accountant LOI covering 10 or more stations) by 30 Nov 2026. Otherwise stop.

---

## 14. Expansion path

**Adjacent workflows in Peru:**
- **OSINERGMIN PVO daily inventory** for all stations nationally. Low pain per day but national; a cheap add-on if it can be pre-filled.
- **Mercury and cyanide register** (Peru Opportunity 2, live since Sep 2026), using the same engine.
- Transporter and distributor register (GRE-centric).
- **DS 009-2026-EM** Madre de Dios special controls.
- SIGERSOL hazardous waste (used oils and contaminated sludge from stations).

**Other countries with the same pattern:**
- **Colombia**: SICOM fuel controls and controlled substances (CCITE) in border and mining zones.
- **Bolivia**: ANH fuel controls and the B-SISA sticker system.
- **Ecuador**: ARCERNH fuel control at stations.
- **Brazil and Argentina**: controlled chemical registers, per the global ranking.

All of these are unverified for software gaps.

---

## 15. Reassessment scorecard

The original report gave only an overall 7.5. The per-criterion "original" scores below are **inferred** from the report's text.

| Criterion | Original (inferred) | New | Reason |
|---|---|---|---|
| Pain | 7 | 6 | Real daily reconciliation, but stations in these zones already do SCOP/PVO and some do SUNAT registers; the filing itself is monthly |
| Frequency | 9 | 8 | Daily record-keeping, monthly presentation, incidents ad hoc |
| Mandatory nature | 9 | 9 | Law plus regulation plus RS 135/170-2026 confirmed; postponement already used once |
| Fragmentation | 5 | 5 | Single regulator (SUNAT) plus OSINERGMIN; fragmentation comes only from the many POS formats |
| Existing competition | 7 | 4 | Rayo Fact advertises chemical-input reports; 5+ grifo POS/ERP vendors hold the data; an earlier SUNAT application exists |
| Incumbent gap | 8 | 6 | The gap is the cross-POS reconciliation and incident layer, not the register itself |
| Buyer accessibility | 7 | 7 | Public OSINERGMIN list, but buyers are provincial and need field visits |
| Willingness to pay | 6 | 5 | Small independents in cash-heavy regions; accountants may absorb it into their fees |
| MVP simplicity | 7 | 6 | Simple CRUD and rules, but the SUNAT format is unknown and many POS import formats are needed |
| Distribution | 7 | 5 | Concrete, but a small zone-limited SAM and in-person sales |
| **Overall** | **7.5** | **5.5** | **Down 2 points.** Scope is limited to illegal-mining zones (SAM roughly 600–1,500 stations, not several thousand), and existing grifo software already sits on the data, with at least one vendor advertising chemical-input reports |

---

## Sources

- RS 000170-2026/SUNAT (SUNAT orientation PDF): https://orientacion.sunat.gob.pe/sites/default/files/2026-08/Resolucion%20000170-2026.pdf
- RS 000170-2026 (LP Derecho PDF): https://img.lpderecho.pe/wp-content/uploads/2026/09/Resolucion-000170-2026-Sunat-LPDerecho.pdf
- El Peruano, postponement to Feb 2027: https://elperuano.pe/noticia/303640-usuarios-de-hidrocarburos-tendran-hasta-febrero-de-2027-para-adecuarse-a-nuevas-reglas-de-sunat
- RS 000135-2026/SUNAT (El Peruano): https://busquedas.elperuano.pe/dispositivo/NL/2535975-1
- El Peruano, "Sunat refuerza control…": https://elperuano.pe/noticia/300684-sunat-refuerza-control-de-insumos-quimicos-fiscalizados-para-hacer-frente-a-la-mineria-ilegal
- El Peruano, "¿Comercializa insumos químicos?…": https://elperuano.pe/noticia/300679-comercializa-insumos-quimicos-revise-las-nuevas-obligaciones-impuestas-por-sunat
- Revista Economía: https://www.revistaeconomia.com/sunat-posterga-hasta-2027-nuevas-obligaciones-para-usuarios-de-hidrocarburos-que-deben-preparar-las-empresas/
- La República, 24-hour reporting: https://larepublica.pe/economia/2026/07/20/mineria-ilegal-sunat-exigira-reportar-en-un-dia-el-robo-o-perdida-de-mercurio-y-otros-quimicos-hnews-1962440
- Surtidores LATAM on grifos: https://surtidoreslatam.com/sunat-registro-diario-operaciones-combustibles-grifos-peru/
- Ley 32412 (LP Derecho): https://lpderecho.pe/ley-32412-control-fiscalizacion-insumos-quimicos-usados-mineria/
- Ley 32412 (SUNAT orientation): https://orientacion.sunat.gob.pe/ley-32412
- Regulation DS 117-2026-EF (PRC Lexmail): https://blog.prcp.com.pe/minero/lexmil-aprueban-el-reglamento-de-la-ley-n-32412-ley-que-establece-medidas-de-control-y-de-fiscalizacion-en-la-distribucion-el-transporte-y-la-comercializacion-de-insumos-quimicos-susceptibl/
- DS 117-2026-EF (SUNAT): https://orientacion.sunat.gob.pe/sites/default/files/2026-09/1.%20DS_117_2026_EF_Ley_32412.docx
- Caro & Asociados on the DS: https://ccfirma.com/decreto-supremo-refuerza-el-control-sobre-insumos-quimicos-vinculados-a-mineria-ilegal/
- DS 009-2026-EM, Madre de Dios: https://busquedas.elperuano.pe/dispositivo/NL/2529540-2 ; https://www.estudio-castillo.com/2026/06/26/decreto-supremo-n-009-2026-em/
- DS 016-2014-EM (FAOLEX/LEAP): https://leap.unep.org/en/countries/pe/national-legislation/decreto-supremo-no-016-2014-em-mecanismos-especiales-de
- Régimen Complementario measures (SNI): https://sni.org.pe/establecen-medidas-relacionadas-al-regimen-complementario-control-insumos-quimicos/
- SUNAT historical registro de operaciones and application: https://orientacion.sunat.gob.pe/node/2424 ; https://orientacion.sunat.gob.pe/6346-04-registro-de-operaciones ; http://contenido.app.sunat.gob.pe/insc/Insumos+Quimicos+IQPF/Material+de+capacitacion/010+REGISTRO+DE+OPERACIONES++APLICATIVO.pdf
- OSINERGMIN daily PVO inventory: https://www.gob.pe/institucion/osinergmin/noticias/1389286-osinergmin-establece-que-grifos-reporten-sus-inventarios-de-combustibles-de-manera-digital ; https://www.rumbominero.com/peru/noticias/hidrocarburos/osinergmin-grifos-reporte-diario-combustibles/
- Station counts (third-party mirror of the OSINERGMIN registry): https://tramitesperu.com/osinergmin/grifos-autorizados/ ; https://tramitesperu.com/osinergmin/grifos-autorizados-en-puno/
- Competitors: https://rayofact.com/grifos/ ; https://pecano.pe/ ; https://opensysperu.com/sistema-de-grifos-peru/ ; https://www.gasolutions.pe/sistema-para-grifos ; https://aspsperu.com/netgas/ ; https://www.quesito.pe/factura-electronica-para/grifos
- Consultant guide: https://bybconsultores.pe/insumos-quimicos-fiscalizados/registro-operaciones-insumos-quimicos-fiscalizados-resolucion-135-2026-sunat/
- SUNAT seizures (Huallaga): https://proactivo.com.pe/sunat-incauto-combustible-de-grifos-clandestinos-que-abastecian-al-huallaga/
