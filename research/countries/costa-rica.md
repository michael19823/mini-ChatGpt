# Costa Rica: Indie-Hacker Opportunity Research

Research date: 2026-10-04

> **Research limits (read first).** This track was badly constrained. The session-wide WebSearch cap (200 calls, shared by all agents) ran out twice: after 6 searches, and again after 6 more once the cap reset. WebFetch was blocked by network policy for every domain I tried (hacienda.go.cr, ministeriodesalud.go.cr, sugef.fi.cr, delfino.cr, crhoy.com, KPMG, Wikipedia). So I only saw search-result summaries and could not read any primary document in full. Each claim below is marked one of two ways:
> - **[V]**: verified from a search result in this session (URL given).
> - **[U]**: from background knowledge. **Not verified** in this session; check it before any interview or build decision.
>
> Competitor diligence is thinner than the brief requires. Treat the scores as provisional. **Recommendation: re-run Costa Rica once the search budget is raised.**

---

## Industries screened

| # | Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|---|
| 1 | Accountants / accounting firms | Reconciling e-invoice v4.4 XMLs with TRIBU-CR's cross-checks and the new D-150 VAT form; monthly receiver-acceptance messages | **Opportunity (contested)** | Strong why-now (TRIBU-CR Oct 2025; pre-filled prorrata Dec 2026), but Alegra, Softland and others are moving in fast |
| 2 | Solar installers (distributed generation) | Interconnection paperwork for self-consumption systems, with a different process at each of ~8 distributors (ICE, CNFL, coops…) | **Opportunity** | Multi-step process repeated per job and fragmented by utility; no dedicated tool found; market is small |
| 3 | Tour operators / travel agencies | Buying SINAC national-park tickets per tour in SICORE, under per-operator daily caps | **Opportunity (hypothesis)** | Per-job duplicate entry with hard caps; the booking tools' integration status is unverified |
| 4 | Designated non-financial businesses: real estate, car dealers, pawn shops, lenders, notaries | SUGEF Art. 15 bis AML/KYC, per-transaction files, UIF reporting | **Opportunity (weak why-now)** | Mandatory and per-transaction, with a public registry of obligated parties. The rule has been in force since 2019, so there is no 2026 trigger |
| 5 | Wastewater generators (condos, hotels, agro-industry, plants) | Operational wastewater reports (Decreto 33601-S-MINAE), lab results feeding Ministry of Health reports | **Opportunity (low frequency)** | Mandatory and recurring; a 2025 Ministry of Health audit targets enforcement; consultants currently do this work |
| 6 | Small water utilities (ASADAS, ~1,500) | Billing, meter reading, e-invoice v4.4 | **Too competitive** | At least 5 ASADA-specific billing products already exist, one offered free |
| 7 | Payroll bureaus / employers | CCSS SICERE + INS work-risk insurance payroll + Hacienda withholding | **Not assessed (unverified)** | Couldn't verify whether CCSS and INS payroll is already unified, or who the local payroll vendors are |
| 8 | Coffee mills / exporters | EUDR geolocation due diligence | **Rejected** | EUDR pushed back to Dec 2026 / Jun 2027 [U]; Costa Rica may be benchmarked low-risk [U]; the US is the main coffee market; global EUDR tools exist |
| 9 | Construction professionals | CFIA APC permit platform, digital site logbook | **Rejected** | APC is already a centralized, institution-integrated government platform [U]; little gap left |
| 10 | Multi-location businesses | Municipal business-license (patente) declarations across 84 municipalities | **Poor frequency** | Fragmented, but filed annually [U] |
| 11 | Customs brokers | Migration from TICA to the new ATENA customs system | **Not assessed** | Couldn't verify rollout status; needs deep government integration and broker licensing |

---

## Opportunities

### Opportunity: TRIBU-CR exception desk for accounting firms (VAT D-150 ↔ e-invoice reconciliation)

**Industry:**
Accounting firms ("despachos contables"), private accountants (CPI) and in-house bookkeepers at SMEs.

**Buyer:**
Owner of a small accounting firm managing 20–150 client tax IDs. Secondary buyer: the controller at a mid-size SME.

**Trigger / Why now:**
- [V] Hacienda launched TRIBU-CR on **6 Oct 2025**, replacing ATV. It takes every e-invoice a company issued or received, compares it with the VAT, income-tax and withholding returns, and keeps the differences.
- [V] The new VAT form (D-150) is organized by tax rate instead of economic activity. It adds sections for the proportionality rule (prorrata) and for non-creditable VAT.
- [V] Pre-filling is being rolled out in stages. D-150 did not arrive fully pre-filled in May 2026. The prorrata calculation is to be pre-filled starting **December 2026**.
- [V] E-invoice v4.4 has been mandatory since Sept 2025.
- [V] The accountants' professional body (Colegio de Contadores Privados) asked for deadline extensions because of TRIBU-CR "failures and inconsistencies". The platform reportedly cannot save drafts, so data entered can be processed directly as a filed return.

**Current workflow:**
1. Download issued and received XMLs from each client's e-invoicing system or email inbox, and the received-invoice list from TRIBU-CR.
2. Send acceptance or rejection messages for supplier invoices within the first 8 business days of the following month [V]. Missing the window loses the VAT credit and the expense deduction.
3. Match these against the ledger. Classify each purchase as creditable or not, and by rate.
4. Compute the prorrata, then key the D-150 into TRIBU-CR by hand.
5. Investigate and justify the differences TRIBU-CR flags: rejected invoices, invoices never received, misclassified invoices, credit notes, imports.

**Pain:**
- [V] Industry guides say reconciliation "has become a daily and critical task". Software that doesn't automate it forces accountants to work "invoice by invoice, each month".
- [V] There are public complaints about inconsistencies, and the professional body requested extensions.
- The pain is multiplied across every client a firm manages, every month.

**Existing solutions:**
- [V] **Alegra**: sells accounting software for firms ("software contable para despachos") and markets automatic VAT declaration.
- [V] **Softland CR**: an ERP publishing TRIBU-CR and 2026 tax content.
- [V] Generic "accounting software with AI" that claims D-150 pre-fill from XML 4.4 (siemprealdia guide; vendors not named).
- [U] Hacienda's free e-invoicing tool, plus Gosocket and many local e-invoice vendors (ticontable, Factura Profesional), which have received-invoice inboxes.
- Excel, done manually.

**The gap:**
Existing tools work per company and cover the client's own invoices well. What's missing, as a hypothesis to verify in interviews, is a **multi-client exception queue for the firm**:
- which clients have unaccepted invoices with the 8-day deadline approaching;
- which ones TRIBU-CR will flag (invoice issued to the wrong ID, supplier-side credit notes, duplicate XMLs);
- a prorrata check before December 2026;
- an audit trail that justifies each difference.

The gap is real only for clients who don't already use Alegra or Softland end to end.

**Possible product:**
A firm-level dashboard. It ingests each client's XMLs (mailbox plus uploads), sends acceptance messages in bulk, builds a draft D-150 by rate, and lists the exceptions to fix before filing, across all clients.

**MVP:**
- Mailbox/XML ingestion for N clients.
- Countdown to the 8-day acceptance deadline, with bulk acceptance messages through Hacienda's reception API.
- A D-150 worksheet by rate, with an exception list.

**Pricing hypothesis:**
$3–6 per client tax ID per month. A firm with 40 clients pays about $150–250 per month.

**How to find first customers:**
- Members of the Colegio de Contadores Privados and Colegio de Contadores Públicos.
- Facebook groups for Costa Rican accountants.
- Firms that publicly complained about TRIBU-CR.

**Risks:**
- Hacienda finishes pre-filling and its own comparison engine makes the tool redundant.
- Alegra adds multi-client exception views.
- Changes to the TRIBU-CR or API.

**Kill condition:**
In interviews, more than half of firms already reconcile inside Alegra/Softland or Hacienda's tools and spend under 1 hour per client per month on it.

**Score:** 5.5/10. The why-now is strong; competition is high and rising.

**Sources:**
- https://siemprealdia.co/costa-rica/impuestos/conciliar-la-facturacion-electronica-4-4-con-iva-en-tribu-cr/
- https://siemprealdia.co/costa-rica/impuestos/comprobantes-electronicos-recibidos-en-tribu-cr/
- https://delfino.cr/2026/03/tribu-cr-ya-compara-sus-facturas-con-sus-declaraciones-coinciden
- https://www.diarioextra.com/noticia/cambios-en-declaracion-del-iva-quedan-para-2026/
- https://crhoy.com/economia/experto-advierte-que-tribu-cr-sigue-presentando-inconsistencias/
- https://www.nacion.com/economia/tribu-cr-tributacion-no-dara-prorroga-para/ECKIEBQJ6BFHZHNCDNQ36PPIHY/story/
- https://revistasumma.com/?p=237713
- https://blog.alegra.com/costa-rica/automatizar-declaracion-de-iva/
- https://blog.alegra.com/costa-rica/software-contable-para-despachos/
- https://softland.com/cr/impuesto-sobre-la-renta-en-costa-rica-2026/
- https://www.deloitte.com.mx/archivos/2025/cr-Res-Num-MH-DGT-RES-0033-2025.pdf (D-150 form resolution)

---

### Opportunity: Solar interconnection tracker for Costa Rican distributors

**Industry:**
Solar PV installers and electrical engineering firms.

**Buyer:**
Owner or project coordinator at a solar installer doing 5–40 self-consumption projects per month.

**Trigger / Why now:**
- [V] Ley 10086 governs distributed renewable energy. ICE has published temporary procedures for self-consumption distributed energy resources under that law.
- [V] CNFL publishes its own multi-stage interconnection procedure, citing Decreto 39220-MINAE.
- [U] Electricity tariff increases and the 2024 power rationing pushed up solar demand. Unverified.

**Current workflow:**
The CNFL process [V], repeated with variations at each distributor:
1. Request power availability.
2. Build the system.
3. Verification of the installation.
4. Inspection of metering and communications.
5. Pay interconnection costs.
6. Sign the interconnection contract.
7. Install the generation meter and the bidirectional meter.
8. Later inspections.

The installer also has engineering responsibility records with CFIA [U]. Each distributor has its own forms and portal or email [U for distributors other than ICE/CNFL].

**Pain:**
- About 8 steps per project, with waits and document resubmissions at each one.
- The installer gets paid, or the customer starts saving, only once the meter is installed.
- Evidence for the process is [V]. Evidence for the pain itself is inferred; I found no complaint data.

**Existing solutions:**
- [U] Aurora Solar and OpenSolar cover design and proposals, not Costa Rican utility paperwork.
- Spreadsheets, WhatsApp and email.
- [U] Generic project management tools (Trello, Monday).
- No Costa Rica–specific interconnection tracker found. Note that I had only 1 search for this.

**The gap:**
A per-distributor template library (forms, required documents, stage SLAs), plus auto-filled applications built from one project record, plus a status board per utility.

**Possible product:**
"One project record → each distributor's application package plus a stage tracker." It mirrors the US solar-permitting benchmark, at Costa Rica scale.

**MVP:**
- Templates for ICE and CNFL.
- Document checklist and auto-generated PDF forms.
- Kanban board by stage, with reminders for inspections and payments.

**Pricing hypothesis:**
$79–199 per month per installer, or $10–20 per project.

**How to find first customers:**
- Members of the solar industry association (ACESOLAR [U]).
- Installers listed or registered with the distributors [U].
- Google Maps "paneles solares" listings.
- CFIA engineering firms.

**Risks:**
- The market is small: probably low hundreds of installers [U, estimate].
- Utilities could digitize onto one shared portal.
- Shifting regulation.

**Kill condition:**
Fewer than about 150 active installers, or interviews show applications take under 2 hours per project.

**Score:** 5/10

**Sources:**
- https://apps.grupoice.com/CenceWeb/documentos/1/1006/8/CNFL%20Procedimiento%20y%20requisitos%20GD.pdf
- https://apps.grupoice.com/CenceWeb/documentos/1/1006/30/La%20Gaceta127%20_Disposiciones%20Temporales%20para%20la%20Atenci%C3%B3n%20de%20los%20Recursos%20Energ%C3%A9ticos%20Distribuidos%20para%20Autoconsomo%20en%20el%20ICE.pdf

---

### Opportunity: SINAC park-ticket allocation for tour operators

**Industry:**
Inbound tour operators and travel agencies.

**Buyer:**
Operations manager at a tour operator licensed by ICT that runs park tours (Manuel Antonio, Poás, Irazú, Tortuguero, Rincón de la Vieja and others).

**Trigger / Why now:**
- [V] SINAC's online system (SICORE, serviciosenlinea.sinac.go.cr) is now **mandatory** for 13+ parks. Manuel Antonio is online-only, with a 600/day cap that sells out in high season. Los Quetzales went web-only in April 2025.
- [V] Operators with the ICT travel-agency category are capped at **50 reservations per day** and **10 transactions per day per credit card**.

**Current workflow:**
1. A booking comes in through a booking system or an OTA.
2. Staff re-key the guest details into SICORE for each tour.
3. They juggle the per-card and daily caps across several cards.
4. They reconcile tickets against bookings and refunds.

**Pain:**
- Per-job duplicate entry, with hard caps and sell-outs [V]. If a ticket isn't obtained, the tour can't run.
- Pain intensity has not been measured.

**Existing solutions:**
- [U] Bókun, Rezdy and FareHarbor are used by Costa Rican operators. No SICORE integration found. Unverified.
- Manual entry.
- [V] Some operators "secure ticket blocks".

**The gap:**
Batch preparation and validation of guest lists, plus cap and card scheduling, plus ticket-to-booking reconciliation.

**Possible product:**
A browser extension or assistant that pre-fills SICORE from a booking export, tracks the caps, and reconciles tickets.

**MVP:**
CSV/booking-system export → validated guest manifest → SICORE form-fill helper → reconciliation sheet.

**Pricing hypothesis:**
$49–149 per month per operator.

**How to find first customers:**
- The ICT register of tourism businesses with travel-agency/tour-operator status ("declaratoria turística") [U].
- Tourism chambers (CANATUR, ACOT) [U].

**Risks:**
- Automating a government portal may break SINAC's terms of use or trigger CAPTCHAs.
- Caps are policy-driven.
- SINAC could add an operator API.

**Kill condition:**
- SINAC prohibits automation, or
- operators already buy in bulk blocks so per-guest entry is rare, or
- Bókun/Rezdy add a SINAC connector.

**Score:** 4.5/10. The pain is plausible; legality and access are uncertain.

**Sources:**
- https://observador.cr/prepare-su-visita-estos-son-los-13-parques-nacionales-que-venden-entradas-por-internet%ef%bf%bc/amp/
- https://delfino.cr/2025/04/entradas-al-parque-nacional-los-quetzales-se-compraran-unicamente-via-web
- https://delfino.cr/2023/06/parque-nacional-manuel-antonio-anuncia-cambios-en-parametros-para-compra-de-entradas
- https://ticotravel.com/how-to-buy-costa-rica-national-park-tickets-on-sinac/
- https://www.riotimesonline.com/costa-rica-national-parks-guide-2026/

---

### Opportunity: AML file manager for designated non-financial businesses (SUGEF Art. 15 bis)

**Industry:**
- Real estate brokers and developers
- Lenders and pawn shops
- Precious-metal dealers
- Notaries and lawyers acting on transactions

**Buyer:**
Owner or compliance officer at a small obligated business.

**Trigger / Why now:**
- [V] The SUGEF 11-18 registration rule has been in force since 1 Jan 2019. Banks must end relationships with businesses that haven't registered.
- No 2025–2026 trigger was verified. This is the weak point. [U] Mutual-evaluation follow-up from GAFILAT (the regional anti-money-laundering body) could tighten supervision.

**Current workflow:**
1. Collect ID and source-of-funds documents per client or transaction.
2. Screen against lists of politically exposed persons and sanctions lists.
3. Assign a risk rating.
4. Store everything in folders or Excel.
5. Report suspicious operations to the financial intelligence unit (UIF) [U].
6. Prepare for SUGEF inspections.

**Pain:**
Mandatory, per transaction, and failing to register cuts off banking [V]. The size of the fines is unverified.

**Existing solutions:**
- [U] Local compliance consultants selling manuals and outsourced compliance officers.
- [U] Generic KYC/AML SaaS.
- Excel.
- Not adequately researched.

**The gap:**
A cheap per-transaction file built around SUGEF's 15 bis requirements, with templates per sector. Hypothesis only.

**Possible product:**
A per-transaction KYC checklist plus document vault plus risk rating, producing an inspection-ready file and a draft suspicious-operation report.

**MVP:**
Sector templates for real estate and pawn/lending, with evidence storage and expiry reminders.

**Pricing hypothesis:**
$39–99 per month.

**How to find first customers:**
- SUGEF's list of registered 15 bis entities [U: availability unverified].
- Real estate chambers.

**Risks:**
- Drifts into generic KYC/document collection, which the brief lists as a trap.
- No why-now.

**Kill condition:**
- SUGEF's registry is not public, or
- interviews show the obligation is met with a one-time consultant manual and enforcement is lax.

**Score:** 4/10

**Sources:**
- https://files.griddo.ecija.com/ecija-costa-rica-actividades-que-deberan-someterse-a-la-supervision-de-la-sugef.pdf
- https://www.nacion.com/economia/clave-fiscal-inscribirse-en-la-sugef/FVMUM5CWQFCZ7FOX2A4AZBKVNM/story/
- https://www.crowe.com/cr/noticias/301---list-with-filter/sugef

---

### Opportunity: Wastewater operational-report compiler (Decreto 33601-S-MINAE)

**Industry:**
Wastewater generators and their environmental consultants:
- condominiums and hotels with treatment plants
- pig farms and agro-industry
- universities

**Buyer:**
Environmental consultant or treatment-plant operator serving many generators. Secondary buyer: condominium administrator.

**Trigger / Why now:**
- [V] The Ministry of Health published a **2025 internal audit** of its oversight of wastewater generators (MS-AI-1002-2025). Its contents weren't readable, but tighter oversight is likely.
- [V] Operational reports are filed periodically. The examples found are semestral, and frequency varies by flow.

**Current workflow:**
1. Sampling by an accredited lab. Required parameters [V]: flow, temperature, pH, settleable solids, total suspended solids, fats and oils, detergents (SAAM), BOD and COD.
2. Receive the lab PDF.
3. A consultant transcribes the results into the official report format and checks them against legal limits.
4. File with the regional Ministry of Health office.
5. [U] Separately, handle the MINAE discharge fee (canon por vertidos).

**Pain:**
- Mandatory, with penalties.
- Consultants such as Futuris sell this as a service [V], which shows people pay to have it done.

**Existing solutions:**
Environmental consultancies (Futuris Consulting [V]), lab reporting, Excel.

**The gap:**
For a consultant with 30–100 plants: a lab PDF → official report generator, with a limit checker, due-date calendar and portfolio view.

**Possible product:**
A tool that turns lab results into the filed operational report, plus a compliance calendar for each plant.

**MVP:**
Parser for 2–3 major labs' PDF formats, the report template, and a deadlines dashboard.

**Pricing hypothesis:**
$5–15 per plant per month, or about $100–200 per month per consultant.

**How to find first customers:**
- Environmental consultants listed with SETENA as environmental regents/consultants [U].
- Accredited labs, as a channel.
- Condominium administrators.

**Risks:**
- Low frequency (semestral).
- Small total spend.
- The Ministry may build its own digital filing.

**Kill condition:**
Interviews show reports take under 1 hour each, or the Ministry has already digitized submission with direct lab upload.

**Score:** 4/10

**Sources:**
- https://tec.ac.cr/sites/default/files/media/doc/i-reporte-operacional-2023-tec-sc.pdf
- https://futurisconsulting.com/es/reportes-operacionales-de-aguas-residuales/
- https://www.ministeriodesalud.go.cr/index.php/biblioteca-de-archivos-left/documentos-ministerio-de-salud/ministerio-de-salud/informes-institucionales/informes-de-auditoria/2025-4/10036-ms-ai-1002-2025-auditoria-sobre-vigilancia-estatal-de-los-entes-generadores-de-aguas-residuales/file (title only, not read)
- https://ampeid.org/static/80f1de9a94ebdadc6117301d25340181/cos71694..pdf (regulation text)

---

## Rejected after competitor research

- **ASADA water-utility billing and e-invoicing.** About 1,500 ASADAS and v4.4 mandatory [V], but the space is already served by:
  - **Factura Profesional** (ASADA module at no additional cost)
  - **CDG SADA Web**
  - **Ticontable AsadaCloud**
  - **SOS ASADAS PRO**
  - the **ASADA** app
  - CATIE's free **ASADAS+**

  Willingness to pay is low (community non-profits). Sources:
  - https://www.facturaprofesional.com/landings/asadas
  - https://www.cdg.co.cr/sada.html
  - https://www.ticontable.com/
  - https://sospuravida.com/ASADAS/
  - https://blog.alegra.com/costa-rica/asada-recibos/

- **Generic e-invoice v4.4 compliance for small businesses.** Saturated: Alegra, Factura Profesional, Ticontable, TusFacturas and Hacienda's free tool [U].
- **EUDR traceability for coffee.** Deadlines delayed [U]; global vendors exist (Koltiva, Sourcemap and others [U]); the main market is the US.
- **CFIA construction permits.** The government's APC platform already centralizes the workflow [U].

## Attractive problem, poor distribution / frequency

- **Municipal patente declarations across 84 municipalities.** Highly fragmented, but annual, and the buyer is diffuse [U].
- **Wastewater operational reports.** Semestral, with a consultant-mediated market (above).
- **ASADA regulatory reporting to AyA, the Ministry of Health and MINAE.** A real multi-regulator burden [U], but buyers are volunteer-run community associations with very low budgets.

## Too competitive

- E-invoicing and accounting for small businesses (Alegra, Softland, Factura Profesional and others).
- ASADA billing (6+ vendors).
- TRIBU-CR reconciliation is trending this way (Alegra already markets automated VAT and firm-level software).

## Not assessed (search budget exhausted)

These need follow-up searches:
- payroll across CCSS, INS and Hacienda
- customs migration to ATENA
- hazardous-waste manifests (Ministry of Health)
- the subsidized childcare network (REDCUDI/IMAS) attendance-to-subsidy claims
- pharmacy controlled-drug reporting
- SENASA livestock movement guides
- private security reporting to the regulator (DSSP)
- insurance brokers working across multiple insurer portals
