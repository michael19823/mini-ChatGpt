# Bolivia: Indie-Hacker Opportunity Research

*Research date: 2026-10-05. Method: 14 WebSearch calls, in Spanish and English. WebFetch was not used because network policy blocks it. Every fact below comes from search-result summaries of the cited URLs; no page was read in full. Anything not confirmed that way is marked **unverified** or **estimate**.*

**Accessibility check:** Bolivia is open to a foreign solo founder. It is not under US, EU or UK software sanctions. The practical blocker until 2026 was the dollar shortage: from 2023, foreign card payments were restricted. In April 2026 the BCB and ASFI lifted those restrictions. Credit cards now work abroad without limit, debit cards up to US$500 a month, at the BCB reference rate, and digital subscriptions are explicitly covered ([Los Tiempos, 2026-04-09](https://www.lostiempos.com/actualidad/economia/20260409/entidades-financieras-reactivaron-pagos-internacionales-tarjetas); [Los Tiempos, 2026-04-06](https://www.lostiempos.com/actualidad/economia/20260406/terminan-restricciones-al-uso-tarjetas-credito-debito); [Bloomberg Línea](https://www.bloomberglinea.com/latinoamerica/bolivia/bolivia-libera-uso-de-tarjetas-para-pagos-internacionales-pero-la-medida-ya-enciende-alertas/)). Bloomberg Línea notes that the measure already "raises alerts", so the FX policy could still reverse. Any SIN-facing *invoicing* product must use a software provider certified by the SIN. Practically, that means a local partner or a local entity.

**Headline finding:** Bolivia is a small, low-ticket market. Purchasing power is low and most digitization is done by the state itself through SIAT, OVT, the DGSC's ED-6 system and SENAVEX tools. The 2025–2026 regulatory activity is real, but it is concentrated in **SIN e-invoicing**, which dozens of certified vendors already serve. The most interesting gap is narrower: the **DGSC controlled-chemical kardex and monthly discharge report (informe mensual de descargo)**. It is a recurring, mandatory, penalty-backed task that firms still assemble by hand around government apps. Even this scores only in the middle. **No opportunity here reaches the brief's "build" bar. Bolivia is best treated as an add-on market to a Peru product**, where Peru's Ley 32412 / SUNAT controlled-inputs register is the analogous and larger trigger.

---

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Chemical distributors, industrial users, mining processors, labs (DGSC registrants) | Kardex of controlled chemicals, route sheets, monthly discharge report by the 10th–15th of the next month (Ley 1008, DS 25846) | **Opportunity #1 (moderate)** | Mandatory, monthly, blocking sanctions; the state gives apps for authorizations and route sheets, but reconciling the kardex to the discharge report is manual |
| Accountants / SMEs | Monthly confirmation of purchase and sales invoices in the SIAT Registro de Compras y Ventas (RCV) and handling of "observed" invoices | **Opportunity #2 (weak)** | Deadline-driven monthly pain; SIAT outages cause last-minute stress; competition from local accounting software is not verified |
| Employers / payroll accountants | Monthly and quarterly OVT payroll returns, Gestora contributions, 2026 minimum-wage complementary payroll (DS 5516, RM 088/26) | **Opportunity #3 (weak, needs diligence)** | Several systems are fed from one payroll run; local payroll software is likely but not verified; low price ceiling |
| All VAT taxpayers | SIN Facturación en Línea migration (groups 9–12 deadline extended to 30 Sep 2026), product homologation (deadline 29 May 2026) | Too competitive | SIN-certified vendors (e.g. YoFacturo, US$30–90/month), EDICOM, Gosocket; certification is required |
| Traders moving goods in border zones | RND 102600000006: online-invoice proof required at customs checkpoints from 4 May 2026 | Rejected | The obligation falls on the *seller's* invoicing modality, so it is already covered by the e-invoicing vendors above; no separate workflow to sell into |
| Fuel stations | ANH B-SISA RFID and real-time sales reporting | Rejected | Hardware plus a state-run system on Entel fibre; the regulator owns the data pipe |
| Coffee, cacao, timber and leather exporters | EUDR geolocation and due diligence (large operators from 30 Dec 2026) | Rejected | Small EU-bound volume (about US$24.7M year-to-date across the four products, per the Observatorio Agro summary); free state tool from SENAVEX (EUDR self-assessment); NGO and EU programs |
| Mineral traders (comercializadoras) and mining cooperatives | SENARECOM M-02 / M-03 sworn forms, NIM, gold-origin declarations | Poor distribution | Informal, politically sensitive sector with gold-provenance and illegality risk; forms are handled by state offices; hard for a foreigner to sell into |
| Pharmacies | AGEMED psychotropic and narcotic control (Ley 1737) | Not pursued | No new 2025–2026 digital reporting trigger found; the activity found was inspections only |

---

## Opportunity 1: DGSC controlled-chemical kardex and monthly discharge assembler

**Industry:**
Chemical importers and distributors, and industries using precursors such as solvents and acids. Possibly also mining processors, laboratories and some hydrocarbon users (scope of the controlled list: **unverified**).

**Buyer:**
Regulatory or compliance officer, warehouse head, or the external accountant of a firm registered with the Dirección General de Sustancias Controladas (DGSC, Ministerio de Gobierno). For a small distributor, the buyer is the owner or manager.

**Trigger / Why now:**
There is no single new law. The workflow has been mandatory for a long time (Ley 1008, art. 42; DS 25846), but it is now partly digitized. ED-6 (Estado Digital) carries registrations, renewals and monthly discharges. Mobile apps (DGSC-Token, DGSC-Hoja de Ruta, DGSC-QR) cover authorizations, route-sheet transport records and document validation. In May 2026 the DGSC issued circulars on production lot numbers and on an extension for monthly reports (DGSC-DG Nº 05/2026). This is a moving requirement, but the why-now is **weaker than the brief's ideal**.

**Current workflow:**
1. Each purchase, import, production or sale of a controlled substance needs a prior licence or an internal local purchase authorization. Each movement travels with a route sheet (hoja de ruta) recorded in the DGSC app.
2. The firm keeps a kardex in Excel or in its ERP, tracking in and out quantities by substance, lot and authorization.
3. By the 10th (DS 25846) or the 15th (circular) of the next month, someone fills in the monthly discharge report. The legal representative signs it, and it is filed in ED-6 or at the district office, together with copies of that month's authorizations and route sheets.
4. Mismatches between kardex, authorizations and route sheets must be explained. A missing discharge report blocks every further DGSC procedure, which in practice halts purchasing.

**Pain:**
- The sanction blocks all DGSC procedures (per the DGSC descargo page and DS 25846), so it stops operations rather than producing a small fine.
- The deadline is monthly.
- The report requires cross-matching three document types.
- The 2026 extension circular suggests firms struggle to file on time (inference).

**Existing solutions:**
- DGSC's own ED-6 web system and its mobile apps. These are free, but they capture filings rather than building the reconciliation.
- Generic ERPs and inventory systems used by distributors. Whether any have DGSC report modules is **unverified**; none were found.
- Customs and regulatory consultants or tramitadores (**unverified**, but likely).
- Excel.

**The gap:**
No product was found that takes the firm's sales and purchase data, matches it to DGSC authorizations and route sheets, flags discrepancies before the deadline, and outputs the discharge report in the DGSC format. That is the "humans as integration layer" pattern from the brief.

**Possible product:**
A web app that keeps a per-substance kardex. It ingests ERP or Excel sales and purchase exports and the PDFs of authorizations and route sheets, reconciles them, and produces a ready-to-file monthly discharge report plus an exception list.

**MVP:**
- Upload of an Excel kardex plus authorization numbers.
- Rules engine for balances by substance.
- Generated discharge report following the DGSC form (formdescargo.pdf).
- Deadline reminders.
- No ED-6 integration at first; filing stays manual.

**Pricing hypothesis:**
US$25–60 per month per registrant (**estimate**; Bolivian SaaS price levels are low, e.g. invoicing at US$30–90 per month). An accountant who serves several registrants could pay US$100+ per month.

**How to find first customers:**
- DGSC registrant lists, if published. **Unverified**: no public registry was found.
- Chemical importers via the Cámara Nacional de Industrias, CAINCO (Santa Cruz) and importers' chambers.
- Accounting firms that serve industrial clients.
- Mining-supply distributors in La Paz, Oruro and Potosí.

**Risks:**
- Market size is unknown. It may be only a few hundred to low thousands of registrants (**estimate**).
- The DGSC may extend ED-6 to compute discharges automatically from route-sheet data, which would close the gap.
- The sector is security-sensitive: anti-narcotics regime, Viceministerio de Defensa Social.
- Sales are Spanish-only and relationship-driven.

**Kill condition:**
Kill the idea if ED-6 already auto-builds the discharge from app-recorded route sheets and authorizations, or if fewer than about 500 active registrants exist. Confirm both in the first five interviews.

**Score:** 5/10

**Sources:**
- https://www.dgsc.gob.bo/descargo.php
- https://dgsc.gob.bo/formularios/pdf/formdescargo.pdf
- https://www.dgsc.gob.bo/datos/CIRCULARES/DS%2025846.pdf
- https://www.dgsc.gob.bo/datos/CIRCULARES/escan-instructivos-circulares/2020-20%20DGSC-DG%20DESCARGOS.PDF
- https://estadodigital.mingobierno.gob.bo/dgsc/
- https://web.mingobierno.gob.bo/?tramite=ed6-sistema-de-gestion-y-control-de-sustancias-quimicas-controladas
- https://www.dgsc.gob.bo/
- https://web.mingobierno.gob.bo/wp-content/uploads/2025/09/Ley-N%C2%B0-1008-DEL-REGIMEN-DE-LA-COCA-Y-SUSTANCIAS-CONTROLADAS.pdf

---

## Opportunity 2: SIAT purchase-invoice (RCV) monthly reconciliation for accountants

**Industry:**
Accounting firms and SME bookkeeping.

**Buyer:**
Independent accountants and small accounting firms that file for many SMEs. As a second buyer, the in-house accountant at mid-size firms.

**Trigger / Why now:**
Facturación en Línea is expanding to the remaining taxpayer groups (deadline extended to 30 Sep 2026). Product homologation was due 29 May 2026. In 2026 the SIN opened public consultation on new invoicing specifications (RND 102600000034). Repeated SIN extensions point to unstable SIAT infrastructure. The result: more purchase invoices arrive electronically, and the RCV must be confirmed by the 9th of the following month.

**Current workflow:**
1. The accountant gathers the client's purchase invoices: e-invoices, PDF/QR, and remaining paper or manual invoices.
2. The accountant confirms or registers each one in SIAT RCV, handling observed invoices, VAT-free or zero-rated invoices, and credit and debit notes.
3. The accountant reconciles against the client's books and fixes errors before the tax return's due date to avoid fines.
4. When SIAT is slow or down close to the deadline, the accountant works around it.

**Pain:**
Blog guidance exists specifically on "what to do if SIAT fails and there is no time to fill my RCV". Repeated deadline extensions and an "observed invoices" control process show that exceptions are frequent.

**Existing solutions:**
- SIAT itself, which is free.
- Local accounting packages. Specific names and their RCV features are **unverified**: none were identified in search.
- Certified invoicing vendors (YoFacturo and others), which mainly cover the *sales* side.
- Excel.

**The gap (hypothesis, unverified):**
A tool that reconciles across many client NITs, showing which purchase invoices are in SIAT but not in the books, and the reverse. It would include a pre-deadline exception queue. The value to an accountant comes from scale across many NITs.

**Possible product:**
A multi-client dashboard. It imports SIAT RCV downloads and the client's purchase ledger, matches them by CUF (the unique invoice code), and flags mismatches and observed invoices.

**MVP:**
CSV/Excel import of RCV plus ledger, CUF matching, an exception list, and a per-client status board.

**Pricing hypothesis:**
US$15–40 per month per accountant, or about US$1 per client NIT per month (**estimate**).

**How to find first customers:**
- Colegio de Contadores / Auditores departmental membership lists.
- Bolivian tax Facebook and YouTube communities (e.g. boliviaimpuestos.com readership).

**Risks:**
- Established local accounting software may already do this. This is the main diligence gap.
- The SIN may add the feature to SIAT.
- Very low willingness to pay.
- The SIN's new specifications may change formats.

**Kill condition:**
Kill the idea if two or more local accounting packages already offer RCV-to-ledger matching, or if accountants say SIAT's own "observed invoices" view is enough.

**Score:** 4/10

**Sources:**
- https://boliviaimpuestos.com/que-hacer-si-el-siat-falla-y-no-da-tiempo-de-llenar-mis-rcv/amp/
- https://boliviaimpuestos.com/mas-prorrogas-del-sin/
- https://boliviaimpuestos.com/b/61s
- https://www.impuestos.gob.bo/wp-content/uploads/2026/03/RND-102600000007.pdf
- https://rojas-lawfirm.com/bolivia-amplia-el-plazo-para-la-homologacion-de-productos-en-los-sistemas-de-facturacion-electronica/
- https://www.impuestos.gob.bo/index.php/nota_prensa/impuestos-construye-nuevo-sistema-informatico-de-facturacion-con-aportes-tecnicos/

---

## Opportunity 3: One payroll run to OVT, Gestora and CNS filings (needs diligence)

**Industry:**
Payroll bureaus and accountants.

**Buyer:**
Accountants who run payroll for SMEs, and HR administrators at firms with 10–200 staff.

**Trigger / Why now:**
- DS 5516 (13 Jan 2026) raised the minimum wage, and RM 088/26 required a "Complementary Payroll for Adjustment to the 2026 National Minimum Wage" sworn declaration in OVT by 15 Apr 2026. This kind of ad-hoc extra filing recurs with each yearly wage increase.
- Since 2023 the Gestora Pública has replaced the private AFPs.
- The Ministry of Labour collects monthly and quarterly payroll returns in OVTPLA-T01 and T02 formats, plus filings for aguinaldo, retroactive pay and bonuses.

**Current workflow:**
1. The payroll is calculated in Excel or local software.
2. Someone re-keys or reformats it for OVT (Ministerio de Trabajo), the Gestora (the 12.71% contribution plus the Aporte Nacional Solidario), and the CNS health fund.
3. Ad-hoc complementary payrolls are prepared whenever the minimum wage or bonuses change.

**Pain:**
Several state systems run in different formats, and they take extra yearly filings. One source notes that the Aporte Nacional Solidario is "the single most commonly missed line" in Gestora audits.

**Existing solutions:**
- Local payroll and HR software. This is **unverified**: no names were confirmed in the searches, but such software almost certainly exists.
- Accountants using Excel templates.
- Global EOR/payroll providers such as Mercans, which serve multinationals.

**The gap:**
Unknown until competitor diligence is done. It might be the format conversion and validation layer, from one payroll spreadsheet to OVT, Gestora and CNS files.

**Possible product:**
A validator and converter: the user uploads a payroll Excel and gets OVT, Gestora and CNS-ready files plus error checks (ceiling of 60 minimum wages, solidarity contribution).

**MVP:**
Excel template to OVTPLA-T01/T02 export plus a Gestora contribution check.

**Pricing hypothesis:**
US$10–30 per month per accountant (**estimate**).

**How to find first customers:**
Accountants' associations, CAINCO and the Cámara Nacional de Comercio SME networks.

**Risks:**
Probable local competitors, very low prices, and state systems that change formats without notice.

**Kill condition:**
Kill the idea if there is any established local payroll package priced under about US$30 per month that exports OVT and Gestora files.

**Score:** 3/10

**Sources:**
- https://ovt.mintrabajo.gob.bo/soporte/recursos/PLANILLA%20COMPLEMENTARIA.pdf
- https://boliviaimpuestos.com/b/6gg
- https://dsr.mercans.com/?p=866
- https://anda.ine.gob.bo/index.php/catalog/219/related-materials

---

## Rejected after competitor research

- **SME migration to SIN Facturación en Línea, including product homologation.** Killed by the many SIN-certified providers: YoFacturo at US$30/45/90 per month, plus EDICOM and Gosocket. Certification is also required, which raises the bar for a foreign solo founder. Sources: [yo-facturo.com](https://yo-facturo.com/blog/como-elegir-proveedor-facturacion-siat-bolivia/), [edicomgroup.com](https://edicomgroup.com/electronic-invoicing/bolivia), [RND-102500000036](https://www.impuestos.gob.bo/wp-content/uploads/2025/10/RND-102500000036.pdf).
- **Border-zone goods-transport invoicing (RND 102600000006, from 4 May 2026).** Killed by the same e-invoicing vendors. The duty is to buy from sellers who issue online invoices, so there is no separate buyer-side workflow. Sources: [SIN press note](https://www.impuestos.gob.bo/index.php/nota_prensa/el-sin-establece-facturacion-en-linea-para-agilizar-el-traslado-de-mercancias-en-zonas-fronterizas/), [Gosocket](https://gosocket.net/centro-de-recursos/nuevas-exigencias-del-sin-en-bolivia-para-zonas-fronterizas-2026/), [RND-102600000006](https://www.impuestos.gob.bo/wp-content/uploads/2026/03/RND-102600000006.pdf).
- **EUDR traceability for coffee, cacao and timber exporters.** Killed by the free state SENAVEX EUDR self-assessment tool and the government guide, combined with a small EU-bound volume. Sources: [SENAVEX manual](https://autoevaluacioneudr.senavex.gob.bo/pdfs/manual_eudr.pdf), [Observatorio Agro guide](https://observatorioagro.gob.bo/wp-content/uploads/2025/10/GUIA-EUDR.PARA_.PRODUCTORES.CAFE_.CACAO_.pdf).
- **Fuel-station sales reporting.** Killed by the ANH's state-run B-SISA system (RFID tags, antennas, real-time fibre link to the ANH data centre). Source: [DCD](https://www.datacenterdynamics.com/es/noticias/las-estaciones-de-servicio-de-bolivia-se-conectan-por-fibra-al-cpd-de-la-anh/).

## Attractive problem, poor distribution

- **Mineral traders and cooperatives (SENARECOM M-02/M-03, gold-origin declarations, NIM).** The work is mandatory and per transaction. But the sector is informal and politically powerful, carries illegal-gold and mercury reputational risk, and paperwork is done at state offices. Hard for a foreigner to reach or sell to. Sources: [SENARECOM gold origin](https://www.senarecom.gob.bo/noticia.php?k=243), [planetGOLD guide](https://www.planetgold.org/sites/default/files/Cartilla%20Curso%20de%20Comrcializaci%C3%B3n%20de%20Oro%20Responsable%20FINAL.pdf), [DS 29165](https://www.lexivox.org/norms/BO-DS-29165.html).

## Too competitive

- SIN e-invoicing (see above).

## Notes

- Bolivia makes sense as an **add-on market**. A controlled-chemicals or precursor register product built for Peru (SUNAT Ley 32412) or Colombia could add a Bolivian DGSC discharge module at low marginal cost.
- Diligence gaps to close before interviews:
  - DGSC registrant count.
  - Whether ED-6 auto-builds discharge reports.
  - The names and features of local accounting and payroll software.
