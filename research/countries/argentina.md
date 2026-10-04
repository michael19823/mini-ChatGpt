# Argentina: Indie-Hacker Opportunity Research

*Research date: 2026-10-04. Method: Spanish and English web searches only. WebFetch was blocked by network policy and the shared search budget ran out partway through, so every claim below rests on search-result summaries, not full documents. Anything not confirmed by a cited source is marked **unverified** or **estimate**. Prices are in USD equivalent because the peso is volatile. Argentine SME SaaS normally bills in ARS and sits well below US price points.*

## Context: why Argentina is unusual in 2025–2026

- The Milei government is deregulating at national level. UIF thresholds were raised (Res. UIF 78/2025) and ARCA is offering relief plans (RG 5875/2026). Several obvious national compliance ideas are therefore **shrinking, not growing**.
- New mandatory workflows are appearing mainly in **provincial agro and environmental rules**, **SENASA traceability** (driven by exports), and a few **sector-specific digital mandates**. Provincial fragmentation (Buenos Aires vs Córdoba vs Santa Fe and others) is where defensibility lies.

## Industries screened

| # | Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|---|
| 1 | Agrochemical dealers / agronomists | Mandatory agronomic prescription (receta agronómica), now digital via SIGIRAO in Buenos Aires province (Res. MDA 567/2025, extended by Res. 104/2026) | **Opportunity (best)** | New mandatory per-sale and per-application recording, government-only web tool, about 800 dealers, no third-party integration found |
| 2 | Private schools (Buenos Aires province) | Teacher payroll → IPS "Archivo Salarial" (SALARIO.txt) + DIEGEP20 planilla + national filings | **Opportunity (needs verification)** | Monthly, mandatory, province-specific file formats; about 6,000 private establishments; competition not mapped |
| 3 | Cattle: feedlots, consignatarios, auction yards | SENASA electronic ID (SNIEA, Res. 530/2025 and 841/2025): RFID reads → individual movement registration | **Opportunity (medium, political risk)** | Mandatory from 2026; humans reconcile reader files with SENASA; tag vendors (Allflex holds about 60% share) own the device layer |
| 4 | Hazardous / special waste transporters | Manifests across national SIMEL and Buenos Aires province electronic manifest (credit-based) | **Weak opportunity** | Real fragmentation, but government portals already cover it and the transporter base is small |
| 5 | Occupational health & safety (HyS) | SRT "Ecosistema Prevención 4.0" (Res. SRT 48/2025, Disp. GG 15/2026): digital PPE (EPP)/training/visit evidence | **Too competitive / watch** | Voluntary scheme; IfsinRem, SafetyCulture and the insurers' (ART) own tools already exist |
| 6 | Construction / industry contractor management | Contractor documentation control (F.931, ART certificates, non-repetition clauses) | **Rejected** | Certronic and Exactian are established local vendors |
| 7 | Clinics / health providers | Billing to obras sociales (health insurers) and prepagas (private plans), claim rejections (débitos) | **Rejected** | Traditum connects more than 90,000 providers; many clinic-billing SaaS products |
| 8 | Real-estate brokers / notaries | UIF AML: monthly and annual systematic reports, KYC files | **Rejected (regulatory relaxation)** | Res. UIF 78/2025 raised reporting thresholds (to about USD 200k for property purchases), so pain is falling |
| 9 | All SMEs / accountants | ARCA e-invoicing expansion (2026) | **Rejected** | Commodity; ARCA's free tools plus many invoicing SaaS products |
| 10 | Private security companies | Buenos Aires province Ley 12.297: guard (vigilador) lists, site (objetivo) lists, annual fitness certificates | **Not pursued** | Province-by-province rules but no 2025–2026 trigger found; evidence too thin |

---

## Opportunities

### Opportunity: SIGIRAO bridge for agrochemical dealers and agronomists ("one sale/one application → compliant prescription")

**Industry:**
Agrochemical distribution and crop advisory (agronomías / expendedores de agroquímicos, independent agronomists) in Buenos Aires province, with later expansion to Córdoba, San Luis and others.

**Buyer:**
Owner or administrative manager of an agronomía (agrochemical retailer/distributor). Secondary buyer: the independent agronomist who signs prescriptions for many farms.

**Trigger / Why now:**
- Res. MDA (Buenos Aires province) 567/2025, November 2025, makes SIGIRAO mandatory. SIGIRAO digitises the whole Ley 10.699 regime:
  - a purchase prescription (or the alternative "Remito A");
  - an application prescription with diagnosis and method of use;
  - a "Registro de Condiciones Técnicas de Trabajo" with environmental data at the time of application;
  - georeferenced protected areas (schools, apiaries) and 2,000 m exclusion zones.
- The dealer deadline was extended to **March 1, 2026** (Res. 104/2026). Agronomists had 120 business days.
- Training sessions for agronomists were still running in **August 2026**, so adoption is in progress now.
- The digital prescription is required to buy red- and yellow-band (higher-toxicity) products.

**Current workflow (inferred from system description; unverified in interviews):**
1. Agronomist visits or diagnoses a field and writes a recommendation in their own notes, WhatsApp or farm-management app.
2. Dealer sells the product in its own ERP and invoicing system (ARCA e-invoice, remito).
3. Someone separately enters the purchase prescription or Remito A in SIGIRAO (mi.mda.gba.gob.ar), re-keying the product, dose, lot and buyer.
4. After spraying, the agronomist enters the application prescription and the weather/working conditions in SIGIRAO, re-keying field location and environmental data.
5. Dealers and agronomists working across provincial borders repeat this in Córdoba's Receta Fitosanitaria Digital or other provincial systems, each with its own format.

**Pain:**
- The obligation is legal and per transaction, with sanctions; press headlines say "para evitar sanciones, habrá que declarar la receta… en SIGIRAO".
- Only 164 agronomías (about 20% of the province's dealers) were in the pilot, so about 650+ dealers had to onboard in 2026.
- Every red- or yellow-band sale and every application is a record.
- Córdoba's equivalent system had issued 58,000 digital prescriptions by March 2023, which shows per-job volume.

**Existing solutions:**
- **SIGIRAO itself** (free, government web app on Mi MDA).
- **Córdoba RFD** (government).
- **Agro ERPs** such as ERPagro (FAO agritech listing) and generic ERPs (Tango, Finnegans; unverified whether they have SIGIRAO modules).
- **Brazilian "receituário agronômico" ERP modules** (Agrotis, Senior), which show the pattern is productised in Brazil but say nothing about Buenos Aires province integration.
- **Paper notes and WhatsApp.**

**The gap:**
No source found any private software that pushes dealer sales or agronomist field records into SIGIRAO. The government tool is a standalone form entry. Duplicate entry between the dealer ERP sale and the SIGIRAO purchase prescription, and between field notes or weather and the "condiciones técnicas" record, falls on humans. No API was found (**unverified**: SIGIRAO may expose one, or may never).

**Possible product:**
A prescription workspace for agronomías. It turns each sale line into a pre-filled SIGIRAO purchase prescription or Remito A, keeps a farm/lot/protected-area library, and auto-fills the application record with weather data from a weather API at the application timestamp. The data is pushed via API if one exists, or otherwise via a browser extension that fills the SIGIRAO forms, keeping a ledger for inspections.

**MVP:**
A Chrome extension plus a small web app:
- import the dealer's daily sales (CSV export from the ERP);
- map products to the SIGIRAO dropdown;
- one-click fill of the purchase record;
- a per-customer log printable for inspections.

**Pricing hypothesis:**
USD 30–80/month per dealer (ARS equivalent), or USD 0.30–0.50 per prescription for low-volume dealers. Agronomists pay USD 10–20/month.

**How to find first customers:**
- The Buenos Aires province registry of expendedores (agrochemical retailers, about 800) and the 164 pilot agronomías.
- CEDASAB (Buenos Aires province dealer chamber; **unverified** that it publishes a member list).
- The Colegio de Ingenieros Agrónomos of Buenos Aires province, and municipal training sessions (e.g., San Cayetano, August 2026 sessions).
- Brand distributor networks (Bayer/Syngenta/Corteva dealer programmes).

**Risks:**
- SIGIRAO may publish an API that ERPs adopt, or may block form automation.
- The ministry may add bulk upload itself.
- Small dealers may tolerate manual entry.
- Provincial politics: Ley 10.699 enforcement intensity may vary.

**Kill condition:**
Kill the idea if any of these turns out true in interviews:
- dealers say SIGIRAO entry takes under 2 minutes per sale and fewer than about 10 records/day;
- the ministry or major ERPs announce native integration;
- SIGIRAO terms prohibit automated entry and offer no API.

**Score:** 6.5/10. Strong trigger, per-job frequency and an identifiable buyer list. Moderate market size (about 800 dealers in one province) and integration uncertainty.

**Sources:**
- Res. MDA 567/2025: https://normas.gba.gob.ar/ar-b/resolucion/2025/567/549242
- Res. 104/2026 (extension to March 1, 2026): https://normas.gba.gob.ar/ar-b/resolucion/2026/104/575269
- Ámbito: https://www.ambito.com/ambito-nacional/buenos-aires-implementa-el-sigirao-un-sistema-obligatorio-controlar-el-uso-agroquimicos-n6214534
- Bichos de Campo, pilot with 160+ dealers: https://bichosdecampo.com/la-receta-agronomica-ahora-100-digital-el-ministerio-de-desarrollo-agrario-bonaerense-presento-un-nuevo-sistema-que-ya-fue-testeado-por-mas-de-160-expendedores-de-agroquimicos/
- Bichos de Campo, sanctions: https://bichosdecampo.com/rige-un-nuevo-regimen-para-la-aplicacion-de-agroquimicos-en-la-provincia-de-buenos-aires-para-evitar-sanciones-habra-que-declarar-la-receta-agronomica-en-una-nueva-aplicacion-llamada-sigirao/
- Infocampo, red/yellow bands: https://www.infocampo.com.ar/buenos-aires-exigira-receta-agronomica-digital-para-comprar-agroquimicos-banda-roja-y-amarilla/
- Cadena Nueve (2025-11-14): https://www.cadenanueve.com/2025/11/14/el-ministerio-de-desarrollo-agrario-bonaerense-lanzo-un-nuevo-sistema-para-la-utilizacion-de-la-receta-agronomica-obligatoria/
- Diario Actualidad, August 2026 training: https://diarioactualidad.com/blog/2026/08/17/capacitacion-para-ingenieros-agronomos-sobre-la-receta-agronomica-obligatoria/
- San Cayetano municipality session: https://sancayetano.gob.ar/ingenieros-explicaron-el-sistema-para-usar-la-receta-agronomica-obligatoria/
- Córdoba RFD (58,000 prescriptions, digital since 2021): https://opendata.fi.uncoma.edu.ar/jornadasIDERA/trabajos2023/Balbi2_etal.pdf
- San Luis digital prescription: https://bichosdecampo.com/era-hora-san-luis-digitalizo-la-receta-fitosanitaria-y-elimino-el-uso-del-papel-para-las-aplicaciones-en-el-campo/
- CASAFE, prescription rules by province: https://www.casafe.org/requisitos-de-recetas-agronomicas-por-provincia/
- ERPagro: https://agritechobservatory.review.fao.org/ar/erpagro
- Agrotis: https://www.agrotis.com/en/segments/agronomic-recipe

---

### Opportunity: Buenos Aires province private-school teacher payroll → IPS / DIEGEP file generator

**Industry:**
Private schools (educación de gestión privada), especially state-subsidised ones in Buenos Aires province.

**Buyer:**
School administrator or legal representative (representante legal), or the external payroll accountant serving several schools.

**Trigger / Why now:**
- Buenos Aires province private-school teachers contribute to **IPS (provincial pension institute)**, not to the national SIPA system.
- IPS publishes a user manual (version dated June 2024) for the **Archivo Salarial (SALARIO.txt)**, built from the SAP system data plus each teacher's payslip, concept by concept.
- A separate **DIEGEP20** planilla applies to non-subsidised posts.
- DIEGEP periodically changes subsidy rules, for example withdrawing subsidies for some cases (managers holding teaching hours, retired teachers still working, teachers with more than 20 hours).
- High inflation produces frequent salary-scale updates.

**Current workflow (from IPS manuals; partly inferred):**
1. Run payroll in generic payroll software or a spreadsheet.
2. Re-key each payslip concept into the IPS Archivo Salarial tool to build SALARIO.txt.
3. Prepare DIEGEP planillas and cross-check subsidised vs non-subsidised posts.
4. File national obligations for non-teaching staff separately (**unverified** split).
5. Fix rejections, then repeat monthly.

**Pain:**
- Monthly, mandatory and tied to money: subsidy payments and pension contributions.
- Union reports of unpaid salaries show the financial stakes (SADOP: "more than 10 thousand teachers did not get paid"; cause not verified as administrative).
- Province-specific rules make generic payroll software awkward.

**Existing solutions:**
- IPS's own Archivo Salarial tool (free).
- Generic Argentine payroll software and accounting firms (**unverified** whether they have IPS/DIEGEP modules).
- Spreadsheets.

**The gap:**
Unverified, which is the key open question. The hypothesis is that generic payroll does not emit IPS SALARIO.txt or DIEGEP planillas natively, so schools re-key data.

**Possible product:**
Import a school's payroll export (or run a teacher-specific payroll), validate it against DIEGEP subsidy rules, and generate IPS SALARIO.txt and DIEGEP files with pre-submission checks.

**MVP:**
CSV/Excel payroll → SALARIO.txt generator with rule checks (subsidised hours caps, retired-teacher flags) for Buenos Aires province only.

**Pricing hypothesis:**
USD 25–60/month per school, or USD 150–400/month per accounting firm handling 10+ schools.

**How to find first customers:**
- The Buenos Aires province school directory (public establishment registers).
- Private-school associations such as AIEPBA (**unverified** member list).
- Catholic school boards (diocesan education boards).
- Accounting firms that specialise in schools.

**Risks:**
- A local payroll vendor may already do this well (not ruled out).
- Schools have tight budgets.
- IPS could change formats; the political dispute between the province and the national government over private-teacher contributions could change the regime.

**Kill condition:**
Kill the idea if two or more established payroll vendors already generate SALARIO.txt and DIEGEP files, or if schools report the IPS step takes under 1 hour/month.

**Score:** 5/10. Promising shape (monthly, fragmented, money-linked) but competitor diligence is incomplete.

**Sources:**
- IPS Archivo Salarial manual (13-06-2024): https://www.ips.gba.gob.ar/sites/default/files/documentos/Manual_Usuario_ArchivoSalarial%20110%2013062024_1.pdf
- IPS SAP/DIEGEP20 manual: https://www.ips.gba.gob.ar/sites/default/files/documentos/Manual%20de%20Usuario-%20SAP-Escuelas%20Privadas-Diegep20.pdf
- Letra P, subsidy rules: https://www.letrap.com.ar/nota/2018-5-23-13-29-0-vidal-encontro-en-los-colegios-subvencionados-un-nuevo-nicho-de-ahorro
- Letra P, IPS vs ANSES dispute: https://www.letrap.com.ar/politica/los-aportes-docentes-privados-el-centro-una-pulseada-axel-kicillof-y-javier-milei-n5424836
- La Capital MdP, SADOP: https://www.lacapitalmdp.com/sadop-denuncia-que-mas-de-10-mil-docentes-no-cobraron-el-sueldo/
- About 6,000 private establishments, about 4,000 subsidised (from search summary of Buenos Aires province press; exact source page **unverified**)
- Santa Fe payroll guide (shows other provinces have their own rules): https://educacion.santafe.gob.ar/wp-content/uploads/sites/2/2026/03/Guia-Practica-docente-Marzo-2026.pdf

---

### Opportunity: SNIEA cattle e-ID reconciliation (RFID reader file → SENASA individual movement record)

**Industry:**
Livestock: feedlots, consignatarios and auction yards (remates-feria), and large breeders.

**Buyer:**
Administrative manager at a consignataria or feedlot, or a veterinary practice offering traceability services to producers.

**Trigger / Why now:**
- SENASA Res. 530/2025 and 841/2025 make the electronic identification system (SNIEA) mandatory from **January 1, 2026**.
- Calves born from 2026 must be identified with RFID at weaning or first movement (from March 1, 2026).
- **All movements must be registered for individual traceability.** Coverage phases up to 100% of the herd.

**Current workflow (inferred):**
1. Read tags in the handling chute with an RFID stick reader (data goes via Bluetooth to whatever software is attached).
2. Export the read list.
3. Match it against the lot, owner and destination.
4. Enter the individual IDs into SENASA's movement and registration systems.
5. Fix mismatches (unread tags, lost tags, mixed lots at auctions).

**Pain:**
- Mandatory, per movement, and penalties apply.
- Auctions mix animals from many owners.
- Tag sales grew about 400% in an earlier period, which shows rapid adoption.

**Existing solutions:**
- **Tag/reader vendors:** Allflex holds about 60% of the Argentine e-tag market and bundles software and readers.
- **Livestock management apps** (several, **unverified** names/features).
- **SENASA systems** (free).
- **Veterinarians and local animal-health bodies (entes sanitarios)** doing it manually.

**The gap (hypothesis):**
Multi-owner reconciliation at consignatarias, auctions and feedlots between reader files and SENASA records, plus exception queues (missing or duplicate tags). Vendor software targets the single farm.

**Possible product:**
"Read once, register everywhere": upload reader files, auto-match to the lot and owner, flag exceptions, and produce SENASA-ready individual lists (via API if one exists, otherwise assisted entry).

**MVP:**
CSV reader-file reconciliation and exception dashboard for one feedlot or consignataria.

**Pricing hypothesis:**
USD 100–300/month per consignataria or feedlot, or USD 0.02–0.05 per head moved.

**How to find first customers:**
- SENASA registries of feedlots (establecimientos de engorde a corral) and consignatarios (Ministerio/ONCCA-successor registry; **unverified** public access).
- Cámara Argentina de Consignatarios de Ganado.
- Auction yard (remate) listings.

**Risks:**
- **Political:** bill 2282-D-2026 proposes exempting cow-calf (cría) producers.
- Allflex or other incumbents may already do multi-owner workflows.
- SENASA system access may be unclear.

**Kill condition:**
Kill the idea if the exemption passes broadly, or if Allflex/vendor software already handles multi-owner reconciliation and SENASA upload.

**Score:** 5/10.

**Sources:**
- Res. 841/2025: https://www.argentina.gob.ar/normativa/nacional/norma-419696/texto
- Boletín Oficial: https://www.boletinoficial.gob.ar/detalleAviso/primera/333885/20251103
- CIRA summary: https://www.cira.org.ar/?p=23923
- Bichos de Campo: https://bichosdecampo.com/senasa-reglamento-la-trazabilidad-ganadera-que-sera-obligatoria-desde-2026-para-bovinos-y-equinos-optativa-para-el-resto-de-las-especies-y-que-podra-utilizar-otros-dispositivos-ademas-de-las-carava/
- Exemption bill 2282-D-2026: https://bichosdecampo.com/wp-content/uploads/2026/05/2282-D-2026-EXENCION-DE-OBLIGATORIEDAD-DEL-SISTEMA-ELECTRONICO-DE-IDENTIFICACION-PARA-PRODUCTORES-DE-CRIA-VACUNA.pdf
- Allflex market share / 400% growth: https://bichosdecampo.com/hay-un-insumo-ganadero-cuyas-ventas-crecen-al-400-anual-y-podrian-aumentar-mas-si-no-hubiera-problemas-de-importacion-sabes-cual-es/
- La Nación: https://www.lanacion.com.ar/economia/campo/opciones-y-caracteristicas-todo-lo-que-hay-que-saber-sobre-la-identificacion-electronica-del-ganado-nid04082024/
- Dólar Hoy: https://dolarhoy.com/economia/ganado-con-identificacion-electronica-desde-2026-2025113111357

---

### Opportunity: Multi-jurisdiction hazardous-waste manifest router for transporters

**Industry:**
Hazardous / special waste transport and treatment.

**Buyer:**
Operations manager at a licensed waste transporter or treatment operator.

**Trigger / Why now:**
- Buenos Aires province's electronic manifest has an updated **2026 manual** and is credit-based:
  - generators and transporters must buy manifest credits;
  - operators approve manifests, then issue treatment certificates;
  - forms have sworn-declaration status.
- Interjurisdictional loads also fall under the national Ley 24.051 **SIMEL** online manifest system.

**Current workflow:**
1. Create the manifest per pickup in the jurisdiction's portal (Buenos Aires province or SIMEL; CABA/Córdoba **unverified**).
2. The operator confirms quantities.
3. The operator issues the treatment certificate.
4. Each jurisdiction is reconciled separately against the transporter's own dispatch records and invoices.

**Pain:**
Per job and mandatory, with sworn-declaration liability. Duplicate entry across portals and internal systems (inferred).

**Existing solutions:**
Government portals (free). Waste-management ERPs (**unverified**).

**The gap:**
A single dispatch record does not flow to multiple jurisdictional manifests or reconcile certificates back to invoices.

**Possible product:**
A dispatch board that generates the right manifest for each jurisdiction and tracks certificate closure.

**MVP:**
Buenos Aires province manifest pre-fill plus certificate tracker.

**Pricing hypothesis:**
USD 80–200/month per transporter.

**How to find first customers:**
Public registers of licensed transporters (Buenos Aires province Ministry of Environment; national registry under Ley 24.051).

**Risks:**
- Small number of buyers (likely hundreds, **estimate**).
- No APIs.
- Portal changes.

**Kill condition:**
Kill the idea if fewer than about 150 active transporters exist, or if portals add bulk upload.

**Score:** 4/10.

**Sources:**
- Buenos Aires province manual 2026: https://www.ambiente.gba.gob.ar/sites/default/files/instructivos/instructivos_2026/Manifiesto_Electronico_Residuos_2026.pdf
- Ley 24.051: https://www.argentina.gob.ar/normativa/nacional/450/texto
- Resolución 120/2020 (SIMEL-related, per search summary): https://www.argentina.gob.ar/normativa/nacional/norma-336566/texto

---

## Rejected after competitor research

- **Contractor documentation control** (F.931, ART certificate with non-repetition clause, life insurance): **Certronic** (Argentine, links validation to plant access control) and **Exactian** (cloud document and expiry control) already serve this.
  - https://www.itsitio.com/ar/software/certronic-el-software-argentino-que-transformo-el-control-de-contratistas-en-el-mundo/
  - https://mercado.com.ar/protagonistas/control-de-contratistas-incorporan-plataforma-cloud
- **Obras sociales / prepagas billing and claim rejections:** **Traditum** connects more than 90,000 providers and processes 52 million transactions a year. Plus YoFacturo, TusFacturasAPP and many clinic systems.
  - https://developargentina.com/blog/software-clinicas-consultorios-argentina-2026
  - https://yo-facturo.com/clinicas/
- **HyS / PPE digital records under SRT Prevención 4.0** (Res. SRT 48/2025, Disp. GG 15/2026): the trigger is real but the scheme is voluntary. **IfsinRem** (digital Res. 299/11 PPE delivery with e-signature and QR, from about ARS 200,000/month), SafetyCulture templates for Dec. 351/79 audits, and the insurers themselves (Prevención ART joined the 4.0 provider registry in September 2026) already cover it.
  - https://www.iproup.com/startups/71259-startup-saltena-digitaliza-entregas-de-elementos-de-seguridad-y-se-expande-por-el-mundo.amp
  - https://www.argentina.gob.ar/normativa/nacional/norma-419733/texto
  - https://www.informeoperadores.com.ar/2026/09/23/prevencion-art-se-incorpora-al-registro-de-prestadores-de-soluciones-4-0-de-la-srt/
- **ARCA e-invoicing expansion (2026):** commodity product, with ARCA's free tools plus numerous invoicing SaaS products.
  - https://www.noticiasnqn.com.ar/amp/noticias/2026/09/01/350608-arca-amplio-la-obligacion-de-emitir-facturas-electronicas-a-quienes-alcanza-y-desde-cuando

## Rejected for regulatory direction (not competitor)

- **UIF AML for real-estate brokers and notaries:**
  - Res. UIF 43/2024 created monthly and annual systematic reports for brokers (first due February 2025).
  - Res. UIF 78/2025 (June 2025) then raised thresholds; notaries and registries now report only property purchases above 750 minimum wages (about USD 200k).
  - Pain and frequency are falling under deregulation.
  - Sources: https://www.marval.com/Publicacion/la-uif-actualiza-la-normativa-aplicable-a-los-agentes-o-corredores-inmobiliarios-15804 and https://www.colegio-escribanos.org.ar/noticias/2025_06_05_Informe_Res_UIF_78-25.pdf

## Attractive problem, poor distribution

- **Private security companies** (Buenos Aires province Ley 12.297 / Decreto 1897/2002: guard and site lists, annual fitness certificates; every province differs). Fragmented and recurring, but no 2025–2026 trigger was found and the buyer list is not easily obtainable. https://normas.gba.gob.ar/ar-b/decreto/2002/1897/52266
- **Hazardous-waste transporters** (above): a real problem, but likely only hundreds of buyers.

## Too competitive

- Contractor control (Certronic, Exactian).
- Health billing (Traditum and others).
- HyS/PPE apps (IfsinRem, SafetyCulture, the insurers' own tools).
- E-invoicing (ARCA plus many SaaS products).

## Recommended next step

Interview 10 Buenos Aires province agronomías (start with the 164 SIGIRAO pilot dealers). Measure:
- prescriptions per day;
- minutes per entry;
- which ERP they use;
- whether SIGIRAO offers any API or bulk upload.

In parallel, ask 3–5 school payroll accountants whether their payroll tool already generates IPS SALARIO.txt.
