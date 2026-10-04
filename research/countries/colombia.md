# Colombia: Indie-Hacker Opportunity Research

**Date:** 2026-10-04
**Research constraints (please read):** I ran 22 WebSearch queries. WebFetch was blocked for every domain I tried (consultorsalud.com, minsalud.gov.co, mintransporte.gov.co, fenalco.com.co, ofima.com, asuntoslegales.com.co, tractocar.com, segurosbolivar.com), so I could not open the primary PDFs. Every claim below comes from search-result summaries of the cited URLs. Anything marked **(unverified)** comes from background knowledge and needs checking before customer interviews. Competitor diligence is thinner than the brief asks for, so the scores are deliberately conservative.

---

## Industries screened

| # | Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|---|
| 1 | Trucking / shippers (generadores de carga) | RNDC electronic manifest, logistic times, freight registration, e-invoice acceptance | **Shortlist (shipper side)** | Major rule changes in 2025–2026 (Decreto 1017/2025, logistic times since 30-Nov-2025, unified RNDC resolution of 29-Apr-2026, 4-hour confirmation window). Carrier-side tools already exist; the shipper side looks under-served. |
| 2 | Health providers (IPS, independents, HIS vendors) | Digital care summaries (RDA) sent to the national IHCE (interoperability) hub | **Shortlist** | Res. 1888/2025 is mandatory. Only 744 providers were connected after the hub launched on 15-Apr-2026. |
| 3 | Pharmacy / dispensing operators | RDA for medicine dispensing (Res. 1799/2026) | **Shortlist (merged into #2)** | New obligation with a 6-month deadline from 1-Sep-2026. |
| 4 | Multi-municipality companies and accountants | ICA / ReteICA municipal tax returns | **Shortlist** | About 1,100 municipalities with different rates, calendars and channels. No multi-municipality filing product found. |
| 5 | Gas inspection bodies (OIAs) | 5-yearly periodic inspection; conformity certificate delivered to each distributor electronically | **Shortlist (weak)** | Mandatory, high volume, a different channel for each distributor. Competition not verified. |
| 6 | Health providers | Responses to EPS objections and returned invoices (glosas/devoluciones) under Res. 2284/2023 | **Shortlist (weak)** | Real revenue pain, but ERP/HIS vendors already market "gestión de glosas". |
| 7 | Construction companies | Construction and demolition waste (RCD) registration (PIN-GEN) and quarterly reports to each environmental authority | **Poor distribution / thin evidence** | Fragmented by authority (SDA Bogotá, EPA Cartagena…), but quarterly, low value per report, and evidence is thin. |
| 8 | Health providers | FEV-RIPS JSON generation and validation (now Res. 948/2026) | **Rejected – too competitive** | Commoditised: HIS and billing vendors, new RIPS-focused startups, and Ministry-provided validation tooling. |
| 9 | Hotels / short-term rentals | Guest registration to TRA (MinCIT) and SIRE (Migración) | **Rejected – too competitive** | Chekin, ChargeAutomation and Stays already automate TRA + SIRE. |
| 10 | Trucking companies (carrier side) | RNDC manifest issuance and fleet-monitoring logistic times | **Rejected – too competitive** | TMS/ERP vendors (Ofima) and fleet-monitoring/GPS companies (Widetech, Rastrack) already sell it. |
| 11 | Pharmacies (droguerías) | Monthly controlled-medicine reports to the 32 departmental narcotics funds (FRE) | **Poor distribution** | Fragmented by department (e.g., Casanare runs its own SIMCE app), but buyers are tiny and willingness to pay is low. |
| 12 | Coffee / cocoa exporters | EUDR traceability | **Not pursued (unverified)** | The Federación Nacional de Cafeteros and global traceability vendors (Koltiva, Enveritas etc., unverified) dominate; EU dates keep shifting. |
| 13 | 24/7 shift employers (security, clinics) | Labour reform Ley 2466/2025: night and Sunday surcharges, reduced weekly hours | **Not pursued (unverified)** | Payroll vendors (Siigo, Buk, Heinsohn; unverified) will absorb the rule changes. |

---

## Opportunities

### Opportunity: RNDC "Generador de Carga" compliance cockpit (shipper side)

**Industry:**
Road freight. The buyers are the shippers (manufacturers, agro-industry, distributors, importers) that hire third-party trucking companies, not the trucking companies themselves.

**Buyer:**
Logistics/dispatch coordinator or logistics manager at a mid-size shipper that dispatches roughly 10–200 loads per day through several carriers. A second buyer could be the 3PLs that act as generador for their clients.

**Trigger / Why now:**
- Decreto 1017 de 2025: the electronic manifest becomes enforceable like a negotiable instrument ("mérito ejecutivo"), and the RNDC refuses to issue a manifest when the freight is below the SICE-TAC minimum cost.
- Since 30-Nov-2025, the 7 loading and unloading timestamps must be reported automatically through fleet monitoring companies (EMF).
- Unified RNDC regulation: Res. MinTransporte 20263040016075 of 29-Apr-2026, with standard manifest and delivery-confirmation formats mandatory from 1-May-2026.
- Shippers must register the freight they actually paid by accepting the carrier's e-invoice within the deadline (otherwise acceptance is automatic). They must also confirm logistic times, and the confirmation window falls to 4 hours after the vehicle leaves.
- Supertransporte can sanction missing, late or inconsistent reports.
- ANALDEX ran a dedicated seminar on "new RNDC provisions for generadores de carga" in Oct-2025, which signals confusion among shippers.

**Current workflow:**
1. The shipper books a truck through a carrier. The carrier issues the remesa and manifest in its own TMS, which reports to the RNDC.
2. The fleet monitoring company reports the loading and unloading timestamps.
3. The shipper's dispatcher logs into the RNDC web or mobile app, finds each trip, and confirms or disputes the times within the window.
4. The carrier's freight e-invoice arrives through DIAN e-invoicing. AP or logistics must accept it, and that acceptance is also what registers the freight in the RNDC.
5. Logistics reconciles the RNDC data against purchase orders and the carrier's invoice in Excel, especially standby time ("horas logísticas") claims and freight below SICE-TAC.

**Pain:**
- Per-load and time-boxed (4 hours). Each shipper deals with multiple carriers and multiple fleet monitoring companies.
- Penalties exist and freight disputes now carry legal enforceability.
- Evidence of confusion: ANALDEX seminar; many 2026 vendor explainers (Ofima, Widetech, Rastrack, SmartQuick, Transportando, Seguros Bolívar).
- Hours spent per load: (unverified – interview question).

**Existing solutions:**
- RNDC government web platform and mobile app (free).
- Carrier-side TMS/ERP such as Ofima.
- Fleet monitoring / GPS companies such as Widetech and Rastrack.
- Shipper ERPs (SAP, Siesa; unverified whether they cover the RNDC confirmation).
- Logistics consultants and ANALDEX/ANDI training.

**The gap:**
Existing tools serve the carrier, which issues the manifest. I found no product aimed at the generador that does all of the following:
- pulls all of its trips from the RNDC (web service and interoperability are allowed by the regulation);
- alerts before the 4-hour window closes;
- flags timestamp disputes and below-SICE-TAC freight;
- reconciles the RNDC freight record with the e-invoice and purchase order.
This gap is **unverified**: I could not check whether SAP/Siesa partners or freight-marketplace platforms already offer it.

**Possible product:**
A multi-carrier inbox for shippers listing every RNDC trip that involves the company. It shows SLA timers for confirmations and acceptance, flags disputes (standby time, SICE-TAC), and produces a monthly reconciliation pack of RNDC data, carrier e-invoices and purchase orders for AP and audit.

**MVP:**
Use RNDC credentials or the web service to list trips and their status. Add WhatsApp/email alerts before the 4-hour deadline, plus a reconciliation report that matches RNDC freight to uploaded e-invoice XMLs.

**Pricing hypothesis:**
COP 400k–1.5M per month (about USD 100–375) by load volume, or about COP 1,000–2,000 per load.

**How to find first customers:**
- ANALDEX and ANDI logistics committees; Fenalco.
- RNDC open data (freight by corridor) to identify high-volume shipping corridors and regions.
- LinkedIn "coordinador de despachos" roles.
- 3PLs and freight forwarders.

**Risks:**
- Confirmation may be a one-click step in the government app, which would remove the pain.
- Carriers may confirm on behalf of shippers.
- RNDC uptime and access; the MinTransporte draft decree of Mar-2026 shows the rules keep moving.
- SAP partners could add the feature.

**Kill condition:**
Interviews with 10 shipper dispatchers show that confirmations take under 5 minutes per day or are delegated to carriers, or that no sanction has been applied to generadores.

**Score:** 6.5/10

**Sources:**
- https://www.segurosbolivar.com/blog/logistica/decreto-1017-y-rndc-reporte-de-tiempos-logistica/
- https://plc.mintransporte.gov.co/Portals/0/Documentos/04_RESOLUCION%20RNDC%20No.%2016075%202026.pdf?ver=2026-05-06-085446-740
- https://tractocar.com/rndc-en-2026-cambios-regulatorios-y-como-afectan-al-generador-de-carga/
- https://www.ofima.com/blog/manifiesto-de-carga/
- https://widetech.co/rndc-la-guia-completa-para-evitar-sanciones-y-automatizar-tu-operacion/
- https://rastrack.com/rndc-2025-como-cumplir-tiempos-logisticos-con-emf-e-integracion-gps-rastrack/
- https://smartquick.ai/blog-rndc.html
- https://www.cerlatam.com/normatividad/proyecto-de-decreto-mintransporte-2-mar-2026/
- https://analdex.org/events/seminario-de-actualizacion-nuevas-disposiciones-del-rndc-para-los-generadores-de-carga-cambios-en-el-sice-tac-y-su-impacto-en-la-operacion-de-transporte-y-sus-costos-logisticos/
- https://www.cerlatam.com/?p=35310 (minimum logistic hours in SICE-TAC)

---

### Opportunity: RDA / IHCE interoperability gateway for small providers, small HIS vendors and dispensers

**Industry:**
Healthcare: outpatient IPS, independent professionals, small clinical-software vendors, and pharmacy dispensers.

**Buyer:**
There are two buyers:
- **(a)** Small local clinical-record and billing software vendors, which would embed the gateway as an API (B2B).
- **(b)** Administrative or IT leads at small and medium IPS and pharmacy services that run legacy or in-house software.

**Trigger / Why now:**
- Res. 1888 de 2025 makes the RDA mandatory. RDA types are: patient, hospitalisation, outpatient, emergency, and dispensing. Actors had 6 months from 15-Oct-2025 to integrate.
- The national hub went live on 15-Apr-2026. Only **744 providers with 2,456 sites** were exchanging RDAs at the time of the MinSalud report.
- Res. 1799 de 2026 (5-Aug-2026) adds the RDA for medicine dispensing. Pharmaceutical managers ("gestores farmacéuticos") and IPS with pharmacy services get 6 months from 1-Sep-2026 (to about 1-Mar-2027).
- Format: HL7 FHIR JSON. The hub returns a unique care number ("VIDA") that confirms the RDA was received and validated.

**Current workflow:**
1. Care is documented in a clinical-record system, often a local, desktop or in-house product.
2. To comply, the vendor or provider must map its data to FHIR bundles, implement OAuth against the Ministry's hub, send an RDA per care episode, handle validation errors, and store the VIDA.
3. Today most small providers do nothing yet. Their vendors are building the integration one at a time.

**Pain:**
- Per-encounter and mandatory.
- Low adoption so far (744 providers) against a provider universe in the tens of thousands (estimate; REPS registry count unverified).
- The deadlines are described as non-extendable ("perentorios"), and commentators flag them as a heavy lift for small providers.

**Existing solutions:**
- Large HIS vendors building native integrations: Servinte, Dinámica Gerencial, Medesk and others (vendor list unverified beyond Medesk's marketing).
- In-house IT at large IPS.
- Consultancies such as Consultorsalud (training).
- **The Ministry says it will define a separate mechanism for "Group 2" providers that have internet but no clinical-record software. This could become a free government tool and is the main threat.**

**The gap:**
There are hundreds of small clinical-software vendors and in-house systems. Each one has to build the same FHIR/OAuth/validation/VIDA layer. A ready-made "RDA-as-a-service" API with a validator, retry queue and error dashboard spares each of them that work.

**Possible product:**
A hosted gateway. It accepts a simple JSON or CSV episode, builds compliant FHIR bundles for every RDA type including dispensing, submits them, keeps the VIDA receipts, and shows rejections in a dashboard.

**MVP:**
Outpatient-consultation RDA only: field mapping, submission, receipt storage and error queue, plus a sandbox for vendors.

**Pricing hypothesis:**
- Vendors: COP 1–4M per month platform fee, or COP 50–150 per RDA.
- Direct small IPS: COP 150–400k per month.

**How to find first customers:**
- The REPS registry of providers (public).
- Vendor lists shown in the Ministry's IHCE implementation plan pages.
- ACEMI and ACHC member lists.
- LinkedIn and Facebook groups of IPS billing and IT staff.

**Risks:**
- A free Ministry tool for Group 2.
- Vendors may build in-house.
- Health data compliance (Ley 1581 data protection).
- Specs keep changing (manual versions 1.3 and 1.4 in 2026).

**Kill condition:**
The Ministry ships a free web form or app for small providers, or 10 small HIS vendors say they have already finished the integration.

**Score:** 6/10

**Sources:**
- https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-1888-de-2025.pdf
- https://normograma.supersalud.gov.co/compilacion/docs/resolucion_minsaludps_1888_2025.htm
- https://consultorsalud.com/colombia-resumen-digital-de-atencion-en-salud/
- https://www.minsalud.gov.co/Comunicaciones/noticias/2026/Paginas/millones-de-registros-se-intercambian-gracias-a-IHCE.aspx
- https://www.minsalud.gov.co/ihce/Paginas/plan-de-implementacion.aspx
- https://www.minsalud.gov.co/ihce/Manuales/Manual_de_operaciones_interoperabilidad_IHCE_V_1_4.pdf
- https://www.cerlatam.com/normatividad/ministerio-de-salud-y-proteccion-social-resolucion-no-001799-de-2026-5-de-agosto-de-2026/
- https://consultorsalud.com/minsalud-rda-dispensacion-medicamentos/
- https://www.medesk.net/es/blog/software-de-historias-clinicas-colombia/

---

### Opportunity: Multi-municipality ICA / ReteICA filing control tower

**Industry:**
Accounting and tax for companies operating in several municipalities: contractors, security companies, staffing firms, transport, retail chains, utilities contractors.

**Buyer:**
Tax manager or accounting lead at a mid-size company (ordinary regime) filing in 5 or more municipalities. Also mid-size accounting firms that file for such clients.

**Trigger / Why now:**
- No new national law was found.
- The trigger is persistent fragmentation plus municipalities moving online one by one. Bogotá has online declaration through "Pagos Bogotá" and contingency events. Asuntos Legales (3-Aug-2026) argues ICA compliance is an operational challenge because municipal rules, standardisation and channels all differ.
- The 2026 ReteICA calendars keep changing (Bogotá bimester deadlines).
- Note: SIMPLE-regime companies pay ICA through DIAN, so the market is limited to ordinary-regime companies.

**Current workflow:**
1. Compute ICA and withholding per municipality in the ERP (rates differ by activity code).
2. Track each municipality's calendar, which may be bimonthly, monthly or annual.
3. Fill each municipality's form (the national unified form, but submitted through local portals, email or in person).
4. Pay through the bank or PSE.
5. Archive the receipts.
6. Respond to municipal summonses for omissions.

**Pain:**
- Odoo's 2026 localisation guide notes that "5 cities means 5 ICA configurations and 5 monthly returns".
- Corporate identity tool Cerby lists a "ReteICA Municipio de Cali" integration, a signal that companies need to automate logins to municipal portals.
- Missed filings bring interest and sanctions in each municipality (unverified amounts).

**Existing solutions:**
- ERPs (Siigo, World Office, SAP) compute the withholdings but do not file across municipalities (unverified for SAP partners).
- Big-4 and local tax outsourcing firms.
- Municipal portals such as Pagos Bogotá.
- Contadia (AI tax filing, focused on individuals' income tax).
- Cerby (login automation only).

**The gap:**
No product found that maintains a living database of municipal calendars, rates, channels and form quirks and drives a filing checklist with evidence storage per municipality.

**Possible product:**
A municipal tax calendar and obligations engine:
- the client picks municipalities and activity codes;
- it imports ERP trial balances;
- it pre-fills the unified ICA form per municipality;
- it generates a task with the right link or channel and stores proof of filing and payment.

**MVP:**
Calendar plus pre-filled forms for the 30 largest municipalities, an evidence vault and deadline alerts.

**Pricing hypothesis:**
About COP 30–60k per municipality per month, roughly COP 300k–1.5M per month per company. Accounting firms on a per-client tier.

**How to find first customers:**
- Supersociedades company database (filter by number of branches).
- Large-contractor registries (RUP, Cámaras de Comercio).
- Accountants' associations and continuing-education providers.

**Risks:**
- Maintaining data for about 1,100 municipalities is labour-intensive, though the data work itself is defensible.
- Liability for wrong rates.
- A future national unified ICA portal could remove the gap.

**Kill condition:**
A product or outsourcing firm already offers an equivalent multi-municipality tracker at low price (insufficient diligence so far), or target companies file in fewer than 5 municipalities on average.

**Score:** 6/10

**Sources:**
- https://www.asuntoslegales.com.co/analisis/daniel-s-acevedo-sanchez-4020155/ica-una-oportunidad-para-facilitar-el-cumplimiento-tributario-4095148
- https://ecosire.com/es/blog/odoo-colombia-localization-guide-2026
- https://www.cerby.com/platform/integrations/reteica-municipio-de-cali
- https://www.haciendabogota.gov.co/es/noticias/el-22-de-mayo-vence-el-plazo-para-declarar-y-pagar-reteica-del-segundo-bimestre-de-2026
- https://www.valoraanalitik.com/reteica-bimestre-6-hay-estado-de-contingencia-para-efectuar-el-pago-hoy
- https://www.enter.co/empresas/colombia-digital/contadia-la-ia-que-ayuda-a-contadores-a-realizar-hasta-50-declaraciones-en-el-dia

---

### Opportunity: Gas inspection body (OIA) "one inspection, every distributor" back-office

**Industry:**
Accredited inspection bodies (OIAs) for internal natural-gas installations.

**Buyer:**
Owner or operations manager of an ONAC-accredited OIA. Many are small firms with 5–50 inspectors.

**Trigger / Why now:**
- CREG Res. 059/2012 regime: each user needs a periodic inspection every 5 years, inside a window that opens 5 months before the deadline.
- Distributors accept conformity certificates **only electronically, through the means each distributor implements**.
- Distributors must publish lists of authorised OIAs.
- There is ongoing CREG guidance (concepts from 2014–2024). Gas Caribe published 2026 documents on the topic.
- No specific 2025–2026 trigger was found, which makes this a weaker "why now".

**Current workflow:**
1. Get the list of users due from the distributor or from marketing.
2. Inspect, usually on paper or a generic app.
3. Issue the certificate.
4. Upload it to that distributor's channel, which differs per distributor (Vanti, EPM, Gases del Caribe, Gases de Occidente, Efigas, Surtigas…).
5. Track defects and re-inspections.
6. Bill the user.

**Pain:**
- Per-job and mandatory.
- Multi-distributor fragmentation.
- If the certificate does not reach the distributor in time, the user's service can be suspended (unverified detail).

**Existing solutions:**
- Distributors' own portals.
- Generic inspection apps (GoCanvas-type).
- Possibly local OIA software (**not verified**: my searches found no named product, which does not prove none exists).

**The gap:**
A single inspection record that produces each distributor's certificate format and upload, and tracks the user's 5-year cycle for remarketing (unverified).

**Possible product:**
A mobile inspection checklist aligned to the technical regulation, with certificate generation and a per-distributor submission tracker or bot, plus "due next cycle" lead lists.

**MVP:**
Checklist plus certificate PDF plus Vanti/EPM upload tracker for OIAs in Bogotá and Medellín.

**Pricing hypothesis:**
COP 150–300k per inspector per month, or COP 2–4k per certificate.

**How to find first customers:**
- The ONAC accreditation directory.
- Each distributor's mandatory public OIA list.

**Risks:**
- Distributor portals may block automation.
- Small market (OIA count unverified, likely a few hundred).
- Distributors increasingly do inspections themselves.

**Kill condition:**
An existing OIA software is widely used, or distributors converge on a single shared upload standard.

**Score:** 5/10

**Sources:**
- https://gestornormativo.creg.gov.co/gestor/entorno/docs/gn_4_1_2_2_5_5.htm
- https://gestornormativo.creg.gov.co/gestor/entorno/docs/concepto_creg_0000492_2024.htm
- https://gestornormativo.creg.gov.co/gestor/entorno/docs/concepto_creg_0012274_2014.htm
- https://gascaribe.com/wp-content/uploads/2024/05/Cartilla-Revision-Periodica.pdf
- https://gascaribe.com/wp-content/uploads/2026/04/26-240-112426-PDF.pdf

---

### Opportunity: Glosa / devolución response workbench for small IPS

**Industry:**
Healthcare billing.

**Buyer:**
Billing and accounts-receivable coordinator at a small or mid-size IPS (dental, imaging, therapy, labs) that bills several EPS.

**Trigger / Why now:**
- Res. 2284/2023 (Manual Único de Devoluciones, Glosas y Respuestas) is in force since 2025.
- Res. 948/2026 (14-May-2026) consolidates FEV-RIPS validation into a CUV.
- Payers object to invoices with standardised codes, and responses have legal deadlines.

**Current workflow:**
1. Each EPS sends objections by email or through its own portal, citing the filing number and debit note.
2. Staff decode the codes, gather supporting documents, draft a response per item, track the deadlines, and reconcile the accepted amounts.

**Pain:**
- Directly tied to revenue.
- Different format for each EPS.
- Frequent.
- Siigo and Consultorsalud publish guidance on the topic, which suggests demand.

**Existing solutions:**
- HIS and ERP modules (Siigo blog promotes glosa management).
- Billing-outsourcing firms.
- EPS portals.
- Many RIPS and billing startups (see rejected list).

**The gap (unverified):**
Ingesting multiple EPS glosa formats into one queue with code-specific response templates and deadline SLAs.

**Possible product:**
A queue that parses EPS objection notifications, maps them to the Res. 2284 codes, suggests responses and supporting documents, and tracks deadlines and recovered value.

**MVP:**
Email/CSV ingest for the top 5 EPS, deadline tracker, response templates and a recovery dashboard.

**Pricing hypothesis:**
COP 300k–1.2M per month, or 1–3% of recovered value.

**How to find first customers:**
The REPS registry, ACESI and dental associations, billing-outsourcing firms (as resellers).

**Risks:**
- Crowded billing market.
- EPS insolvency (several EPS are under state intervention) may make the payment problem unsolvable by software.

**Kill condition:**
Main HIS vendors already offer this, or recovery is blocked by EPS liquidity rather than paperwork.

**Score:** 5/10

**Sources:**
- https://www.minsalud.gov.co/Normatividad_Nuevo/Resolución%20No%202284%20de%202023.pdf
- https://www.sos.com.co/wp-content/uploads/2025/02/Entrada-en-vigencia-Res2284_2275-Version-final-30_01_2025.pdf
- https://www.siigo.com/blog/glosas-salud-gestion-eficiente
- https://consultorsalud.com/facturacion-electronica-y-gestion-de-glosas/
- https://www.cerlatam.com/normatividad/minsalud-resolucion-948-de-202614-may-2026/

---

## Rejected after competitor research

- **FEV-RIPS JSON generator / validator (Res. 2275/2023, now Res. 948/2026).** Mandatory and per-invoice, but commoditised:
  - HIS and billing vendors cover it.
  - The Ministry's validation mechanism (CUV) comes with Ministry-provided tooling.
  - New RIPS-specific startups such as RipsCloud (launched 2026), plus several public open-source validators and batch submitters I came across early in the session.
  - Conclusion: a race to the bottom.
- **Hotel / short-term rental TRA + SIRE double reporting.** Textbook "one check-in into two government systems", but already automated by Chekin, ChargeAutomation and Stays.
- **Carrier-side RNDC manifest and logistic times.** Covered by TMS/ERP vendors (Ofima), fleet monitoring / GPS companies (Widetech, Rastrack) and others (SmartQuick).

## Attractive problem, poor distribution

- **Pharmacy controlled-medicine monthly reports to 32 departmental narcotics funds (FRE).**
  - Real fragmentation: Casanare runs its own "SIMCE" app.
  - But droguerías are micro-businesses with low willingness to pay, and pharmacy POS vendors are the natural channel.
- **Construction and demolition waste (RCD) reporting.**
  - Bogotá PIN-GEN under Decreto 507/2023; quarterly reports to SDA, EPA Cartagena and other authorities.
  - Fragmented, but quarterly, owned by site environmental residents, and low value per report.
  - Sources: https://www.sdp.gov.co/sites/default/files/anexo54.pdf, https://epacartagena.gov.co/web/wp-content/uploads/2026/03/EPA-AUTO-000310-2026.pdf
- **Group-2 small providers (no clinical-record software) for the RDA.** Huge count but tiny willingness to pay, and the Ministry plans its own mechanism.

## Too competitive (or likely so, unverified)

- **Labour reform Ley 2466/2025 surcharge and schedule changes.** Payroll vendors.
- **EUDR coffee traceability.** Federación Nacional de Cafeteros plus global traceability vendors.
- **Electronic payroll, e-invoicing and electronic POS documents.** Siigo, Alegra and others (background knowledge).

## Next steps

1. Interview about 10 shipper dispatchers (via ANALDEX) about the 4-hour RNDC confirmation and e-invoice acceptance.
2. Interview about 10 small HIS vendors on their RDA integration status, and check whether the Ministry has defined the Group-2 mechanism.
3. Re-run competitor diligence on ICA multi-municipality tools and OIA software once web access is available.
