# Peru — Indie-Hacker Opportunity Research

*Research date: 2026-10-04. Method: Spanish-language WebSearch only. WebFetch was blocked by network policy and the shared search budget ran out twice, so this track ran about 19 searches in total. No page was read in full; every fact below comes from search-result summaries of the cited URLs. Anything not confirmed that way is marked **unverified** or **estimate**. Market sizes are mostly estimates and need checking before interviews.*

**Headline finding:** **Ley 32412** (published 12 Jul 2025) and **SUNAT RS 000135-2026** (published 17–20 Jul 2026) create a *daily operations register* for controlled chemical inputs: mercury, sodium and potassium cyanide, and hydrocarbons (diesel/biodiesel blends, gasolines, gasohols). The register is filed through SUNAT Operaciones en Línea. It has applied to mercury and cyanide users since **1 Sep 2026**. For hydrocarbon users, fuel stations included, **RS 000170-2026 postponed the start to 1 Feb 2027** because the operation volume was too large to adapt in time. This is the clearest "new rule → thousands of small operators → new recurring mandatory task → a window before vertical software catches up" pattern found for Peru.

---

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Fuel stations (grifos) / fuel distributors | SUNAT daily register of hydrocarbon inflows and outflows (Ley 32412, RS 135-2026) | **Opportunity #1** | Brand-new mandatory daily record, starts 1 Feb 2027, thousands of small stations, no vendor product found yet |
| Mining processors / chemical distributors | Same register for mercury and cyanide; 1-day incident reporting | **Opportunity #2** | Already live since Sep 2026; buyers are fewer but each one is worth more; sector carries reputational risk |
| Waste operators (EO-RS) and non-municipal generators | Hazardous-waste manifests and declarations in SIGERSOL No Municipal 2.0 | **Opportunity #3** | Mandatory, quarterly per generator, fines up to 3 UIT, new 2.0 platform needed a deadline extension; consultants do it by hand |
| Mining and industrial contractors | Worker accreditation documents (SCTR, EMO, inductions) re-uploaded to each client's portal | **Opportunity #4 (weak, needs diligence)** | Many accreditation job postings show real manual work; competitor scan incomplete |
| Pharmacies / boticas | DIGEMID Observatorio price reporting (DS 014-2011-SA) | Rejected | Pharmacy POS vendors already bundle it (Sysfarma from S/69/month includes DIGEMID reports) |
| Accountants | SUNAT SIRE purchase and sales registers | Too competitive | SIRE has an API and every accounting vendor supports it; SUNAT keeps extending flexibility to 2027, which weakens the why-now |
| Coffee / cocoa exporters | EUDR geolocation and traceability | Rejected | State tool (MIDAGRI Agrodigital, 181,731 polygons) plus PROMPERÚ and NGO programs; smallholders have low willingness to pay |
| Government vendors | Ley 32069 / Pladicop migration (SEACE, RNP, catalogs) | Rejected | Free state platform; the gap is training, which consultancies and universities already sell |
| Restaurants / industrial sewer users | SEDAPAL/EPS VMA (DS 010-2019-VIVIENDA) non-domestic user declaration and sampling | Poor fit | Annual or one-off cadence; lab and consultant driven; fragmented across water utilities but low frequency |
| Pest control (empresas de saneamiento ambiental) | DIGESA-authorised service certificates | Poor distribution / unverified | Could not verify a recurring report-to-regulator duty or a public registry; no local software found either way |

---

## Opportunity 1: "Registro Diario" for fuel stations (Ley 32412 hydrocarbon register)

**Industry:**
Fuel retail: independent grifos and estaciones de servicio, plus fuel distributors and transporters.

**Buyer:**
The owner or administrator of a single independent station or a small chain (2–10 stations). Also the external accountant who already handles the station's SUNAT obligations, who could buy for several stations.

**Trigger / Why now:**
- Ley 32412 (12 Jul 2025) brings diesel, biodiesel blends, gasolines and gasohols under SUNAT control as chemical inputs that can be diverted to illegal mining.
- RS 000135-2026/SUNAT (published 17–20 Jul 2026) creates the *Registro Diario de Operaciones*. Every inflow and outflow is recorded, supporting documents must be kept, and losses, spills, surpluses, shrinkage or theft must be reported within **one calendar day**. Information is filed through SUNAT Operaciones en Línea.
- RS 000170-2026/SUNAT postponed the start for hydrocarbon users to **1 Feb 2027**, because volumes were too large to adapt to in time. The first reported month is all of February 2027.
- The law also sets mandatory fiscal routes and video surveillance at stations. A related decree adds special controls on hydrocarbon sales in Madre de Dios.

**Current workflow (expected; confirm in interviews):**
1. Fuel arrives by tanker with a SUNAT electronic remission guide (GRE) and an invoice. Pump-level sales go out on boletas and facturas from the station's POS or the controller of the forecourt dispensers.
2. Station staff reconcile tank readings, dispenser totals and sales each day.
3. From Feb 2027, someone must turn each day's movements into the SUNAT register format, file it in SOL and keep the evidence.
4. Gaps between book stock and physical stock (evaporation, measurement drift, theft) become "incidents" that must be reported within a day.
5. Corrections are made under the rectification rules in RS 135-2026.

**Pain:**
- SUNAT itself admitted that hydrocarbon users could not adapt in time "because of the greater volume of their operations."
- The record is daily and transaction-based, and penalties attach to a regime that also enforces seizures. News reports describe SUNAT seizing fuel from clandestine grifos supplying the Huallaga.
- Stock-variance incidents are inherently messy, and that is exactly where the 24-hour clock bites.

**Existing solutions:**
- SUNAT SOL manual entry or file upload. The exact format was not verified.
- Station back-office and forecourt software from local and regional vendors. No vendor advertising Registro Diario support was found in one targeted search.
- Accountants and tax consultancies. bybconsultores.pe has already published a guide to RS 135-2026.
- Spreadsheets.

**The gap:**
Station POS and controller systems record sales but were not built to produce a SUNAT-format daily movement register, to reconcile it against tank measurements and GRE inbound guides, or to raise and file a variance as an "incidencia" within 24 hours. That exception layer of reconciliation, variance and incident filing is where humans will sit.

**Possible product:**
A cloud tool that ingests station sales (POS export, electronic receipt XML from the station's issuing provider), inbound GREs and daily tank readings. It builds the SUNAT daily register, flags variances above a threshold, drafts incident communications and keeps an audit vault for inspections.

**MVP:**
- Upload daily POS and electronic-receipt exports plus a tank-reading form.
- Generate the register file in SUNAT's format and flag mismatches.
- Show a monthly compliance dashboard per station.
- Bulk-file through SOL is out of scope at first; the user uploads the file manually.

**Pricing hypothesis:**
S/ 150–300 per station per month (~US$40–80). Accountant tier from S/ 600/month for 5+ stations. Estimate only, untested.

**How to find first customers:**
- OSINERGMIN's public registry of hydrocarbon establishments (Registro de Hidrocarburos), which is believed to be public. Not verified this session.
- Station price data on OSINERGMIN Facilito (not verified).
- Fuel-retail associations (not verified).
- Accountants who serve stations in Madre de Dios, Puno, Cusco, Huánuco and San Martín, where enforcement is concentrated.

**Market size:**
Several thousand stations nationally. Estimate, not verified this session.

**Risks:**
- SUNAT may publish a free spreadsheet or upload template good enough for small stations.
- Big station POS vendors may add it before Feb 2027.
- Further postponements are possible.
- Price sensitivity among independent grifos.

**Kill condition:**
- SUNAT auto-builds the register from GRE and electronic-receipt data it already holds, so users only confirm it.
- Or the top 3 station POS vendors announce built-in support by Dec 2026.

**Score:** 7.5/10. Strong mandatory why-now and daily frequency. The format and competition still need verifying.

**Sources:**
- SUNAT postpones hydrocarbon users to Feb 2027 (El Peruano): https://elperuano.pe/noticia/303640-usuarios-de-hidrocarburos-tendran-hasta-febrero-de-2027-para-adecuarse-a-nuevas-reglas-de-sunat
- RS 000170-2026 summary (GRZ Asociados): https://grzasociados.com/resolucion-n-000170-2026-sunat-se-posterga-la-aplicacion-de-la-resolucion-de-superintendencia-n-000135-2026-sunat-respecto-de-los-usuarios-de-hidrocarburos-para-facilitar-su-adec/
- RS 000170-2026 PDF (LP Derecho): https://img.lpderecho.pe/wp-content/uploads/2026/09/Resolucion-000170-2026-Sunat-LPDerecho.pdf
- RS 000135-2026 (El Peruano normas legales): https://busquedas.elperuano.pe/dispositivo/NL/2535975-1
- "¿Comercializa insumos químicos? Revise las nuevas obligaciones" (El Peruano): https://elperuano.pe/noticia/300679-comercializa-insumos-quimicos-revise-las-nuevas-obligaciones-impuestas-por-sunat
- SUNAT reinforces control (El Peruano): https://elperuano.pe/noticia/300684-sunat-refuerza-control-de-insumos-quimicos-fiscalizados-para-hacer-frente-a-la-mineria-ilegal
- SUNAT press note, July 2026: https://www.sunat.gob.pe/salaprensa/2026/julio/NotaPrensaN0472026.doc
- Postponement coverage (Revista Economía): https://www.revistaeconomia.com/sunat-posterga-hasta-2027-nuevas-obligaciones-para-usuarios-de-hidrocarburos-que-deben-preparar-las-empresas/
- Ley 32412 text (vLex): https://vlex.com.pe/vid/ley-ley-establece-medidas-1086311560
- Ley 32412 coverage (Gestión): https://gestion.pe/economia/nueva-ley-refuerza-control-de-insumos-quimicos-para-combatir-la-mineria-ilegal-en-el-peru-noticia/
- Madre de Dios hydrocarbon controls (decree): https://busquedas.elperuano.pe/dispositivo/NL/2529540-2
- Consultant guide (bybconsultores): https://bybconsultores.pe/insumos-quimicos-fiscalizados/registro-operaciones-insumos-quimicos-fiscalizados-resolucion-135-2026-sunat/
- Logística 360 coverage: https://logistica360.pe/sunat-refuerza-trazabilidad-de-insumos-quimicos-con-nuevos-controles/

---

## Opportunity 2: Cyanide and mercury daily register + 24-hour incident filing

**Industry:**
Chemical distributors of cyanide and mercury, processing plants (plantas de beneficio), and formal small and medium miners and their suppliers.

**Buyer:**
The compliance or logistics manager at a chemical distributor or importer. The administrator of a small processing plant or a formal small or medium mining operation.

**Trigger / Why now:**
RS 000135-2026 has applied since **1 Sep 2026** to users of mercury, sodium cyanide and potassium cyanide. It requires a daily register of operations, a one-calendar-day report of losses, spills, surpluses or theft, document retention and rectification rules. Ley 32412 adds labelling and fiscal routes.

**Current workflow (expected):**
1. Movements are recorded in an ERP or warehouse spreadsheet.
2. Movements are re-keyed into the SUNAT register format.
3. Lot and container labelling is reconciled against remission guides.
4. Incidents are reported manually through SOL within 24 hours.
5. The paper trail is kept for audits.

**Pain:**
- Daily obligation with criminal-adjacent exposure: illegal mining enforcement, seizures.
- Requirements stack across SUNAT (register), MTC (fiscal routes) and the mining formalisation rules.

**Existing solutions:**
- SUNAT SOL.
- ERPs (SAP and local ERPs) at large distributors.
- Legal and tax consultancies (PPU, Caro & Asociados and bybconsultores all published alerts).
- Spreadsheets.

**The gap:**
Mid-size and small users lack an ERP able to output the SUNAT register and keep incident and labelling evidence together. Large distributors will build it in SAP, so the target is the long tail.

**Possible product:**
The same engine as Opportunity 1, with a lot and container ledger and an incident workflow. One codebase can serve both opportunities.

**MVP:**
- Lot ledger (in/out/consumption).
- SUNAT register export.
- Incident form with a 24-hour timer and an evidence vault.

**Pricing hypothesis:**
S/ 300–800 per month per site. Estimate.

**How to find first customers:**
- SUNAT's Registro para el Control de Bienes Fiscalizados is not public (unverified).
- Instead use chemical-distributor directories, mining-supplier fairs, and the processing-plant concession lists of MINEM and the regional governments (unverified).
- The consultancies already advising on RS 135-2026 are a partner channel.

**Market size:**
Hundreds to low thousands of users. Estimate.

**Risks:**
- Proximity to illegal mining means know-your-customer and reputational risk for the vendor.
- Small total market.
- Rules may change again after policy shifts on mining formalisation (REINFO).

**Kill condition:**
Interviews show that users with real volume already run SAP or another ERP that will produce the register, and that the long tail is mostly informal and unwilling to pay.

**Score:** 6/10.

**Sources:**
- Ley 32412 coverage (Gestión): https://gestion.pe/economia/nueva-ley-refuerza-control-de-insumos-quimicos-para-combatir-la-mineria-ilegal-en-el-peru-noticia/
- 24-hour reporting rule (La República, 20 Jul 2026): https://larepublica.pe/economia/2026/07/20/mineria-ilegal-sunat-exigira-reportar-en-un-dia-el-robo-o-perdida-de-mercurio-y-otros-quimicos-hnews-1962440
- RS 000135-2026 (El Peruano normas legales): https://busquedas.elperuano.pe/dispositivo/NL/2535975-1
- PPU summary of RS 135-2026: https://ppulegal.com/en/insights/dictan-normas-sobre-obligaciones-del-registro-de-operaciones-y-de-informar-perdidas-derrames-excedentes-y-desmedros-de-insumos-quimicos-susceptibles-de-uso-en-la-actividad-minera-y-en-la-mineria-ile/
- Caro & Asociados summary: https://ccfirma.com/sunat-fortalece-el-control-sobre-insumos-quimicos-en-el-sector-mineria/
- Rumbo Minero coverage: https://www.rumbominero.com/peru/noticias/mineria/sunat-refuerza-control-de-insumos-quimicos-para-combatir-la-mineria-ilegal
- PRC Lexmail on chemical inputs: https://prcp-r2-prd.postedin.com/Lexmail-Insumos-químicos-minería-ilegal-1.pdf

---

## Opportunity 3: SIGERSOL manifest router for hazardous-waste operators (EO-RS)

**Industry:**
Solid-waste operating companies (EO-RS) that collect hazardous and biocontaminated waste from clinics, workshops and factories. Also environmental consultants who file on behalf of the waste generators.

**Buyer:**
The EO-RS operations or compliance manager, or the environmental consultancy that files SIGERSOL returns for many generator clients.

**Trigger / Why now:**
- Under DS 014-2017-MINAM, as modified by DS 001-2022-MINAM, non-municipal generators must file hazardous-waste manifests in SIGERSOL No Municipal within the **first 15 business days of each quarter**, plus an annual minimisation and management declaration.
- EO-RS must also report quarterly on the clients and services they handled.
- The platform moved to **SIGERSOL No Municipal 2.0**. MINAM had to extend the Q4-2025 manifest deadline to 23 Jan 2026, which suggests friction during the migration.
- Fine for non-filing: up to 3 UIT.

**Current workflow:**
1. The EO-RS collects waste and issues and signs a paper or PDF manifest per pickup.
2. The manifest goes back to the generator.
3. The generator, or its consultant, re-keys each manifest into SIGERSOL every quarter.
4. Separately, the EO-RS keys the same clients and services into its own quarterly report.
5. At year end, the annual declaration is filed.

The same pickup data is therefore entered at least twice, by two parties.

**Pain:**
- Recurring deadlines with fines.
- Consultancies advertise SIGERSOL filing as a paid service ("evita multas").
- Health regulators' inspection checklists (DIRIS Lima) explicitly check for proof of quarterly SIGERSOL manifest filing.

**Existing solutions:**
- The SIGERSOL portal itself, manual entry.
- Environmental consultancies: Perú Ambiental, ECCA Consultora, IO Group, ISOSSOMA.
- Law-firm compliance alerts (PRC).
- Generic EHS software (not verified for Peru).

**The gap:**
Nothing found turns one pickup record at the operator into both the generator's manifest entry and the operator's quarterly report. Consultants re-key data by hand.

**Possible product:**
A pickup app or backend for EO-RS. It captures each manifest once, gives each generator client a portal with filing-ready data and assisted entry, and produces the EO-RS quarterly report.

**MVP:**
- Digital manifest with e-signature at pickup.
- Quarterly export per generator in SIGERSOL field order.
- Deadline calendar for clients.

**Pricing hypothesis:**
EO-RS pays S/ 400–1,000 per month, or the generator pays S/ 30–60 per quarter, sold through the operator. Estimate.

**How to find first customers:**
- MINAM's authoritative registry of EO-RS. Believed public; not verified this session.
- Environmental consultancies as resellers.

**Market size:**
Unverified. Likely hundreds to low thousands of EO-RS, and tens of thousands of generators.

**Risks:**
- SIGERSOL 2.0 has no API (unverified), so the product would be assisted entry rather than automated filing.
- MINAM could add bulk upload or an operator-generated electronic manifest, which would close the gap.
- Quarterly frequency for generators.

**Kill condition:**
SIGERSOL 2.0 already lets the EO-RS issue the manifest electronically so it flows automatically to the generator's filing. Check the 2.0 user manual first.

**Score:** 6/10.

**Sources:**
- Q4-2025 deadline extension (CMS): https://cms.law/es/per/publication/modifican-el-plazo-de-presentacion-del-manifiesto-de-residuos-solidos-peligrosos
- SIGERSOL No Municipal 2.0 user manual: https://cms.law/content/download/723924/file/Manual de Usuario de la Plataforma Digital SIGERSOL No Municipal versión 2.0.pdf
- SIGERSOL No Municipal orientation (DIGESA): https://www.digesa.minsa.gob.pe/Orientacion/SIGERSOL_NO_MUNICIPAL.pdf
- PRC compliance alert, 2024: https://blog.prcp.com.pe/wp-content/uploads/2024/04/Alerta-Cumplimiento-de-obligaciones-en-materia-de-residuos-sólidos-1-1.pdf
- Perú Ambiental 2026 guide: https://www.peruambientalsac.com/reporte-residuos-solidos-sigersol-2026/
- ECCA Consultora guide: https://eccaconsultora.com/declaracion-anual-sobre-minimizacion-y-gestion-de-residuos-solidos-no-municipales-a-traves-del-sigersol-generador/
- IO Group guide: https://www.iogroup.pe/blog/sigersol-guia-completa
- ISOSSOMA guide: https://isossoma.pe/residuos-solidos/
- SIGERSOL overview (MINAM document on gob.pe): https://cdn.www.gob.pe/uploads/document/file/376858/INFORMACION_DEL_SIGERSOL.pdf

---

## Opportunity 4 (weak): Contractor worker-accreditation router for mine sites

**Industry:**
Mining contractors, including registered specialised contractors.

**Buyer:**
The HSE or accreditation coordinator ("acreditador") at a contractor firm.

**Trigger / Why now:**
No new 2025–2026 rule was found; the pressure is operational. Contractors must register as specialised mining contractors and cover workers with SCTR insurance. Each mine client requires the worker documents (SCTR, EMO medical exams, inductions, height-work and hot-work courses) to be uploaded and kept current in **its own accreditation platform** before badges are issued.

**Current workflow:**
1. Track expiry dates in Excel.
2. Re-upload the same PDFs to each client's portal.
3. Chase clinics and trainers for renewals.

Job postings for "acreditador(a)" ask for Excel and portal-upload experience. That is evidence of a full-time manual role.

**Existing solutions:**
- Client-side accreditation platforms, chosen by the mines.
- Generic HSE tools.
- Staffing firms (e.g. SERIMAN posting accreditation roles).

Competitor diligence is incomplete.

**The gap:**
A contractor-side, one-record-to-many-portals vault with expiry alerts.

**MVP:**
Worker document vault, expiry alerts, and a per-client checklist plus document pack export.

**Pricing hypothesis:**
S/ 10–20 per worker per month.

**How to find first customers:**
MINEM's specialised mining contractor registry (gob.pe procedure page), supplier lists at mining fairs (unverified).

**Risks:**
- Mines' portals block automation.
- Chilean and Peruvian contractor-management SaaS may already serve the contractor side (unverified).

**Kill condition:**
The main mine platforms already accept a shared contractor-side credential, or an incumbent contractor-side vault has meaningful share.

**Score:** 5/10.

**Sources:**
- Accreditation job posting (Arequipa, SERIMAN): https://cazvid.com/es/empleo/acreditadora-en-arequipa-peru
- Accreditation assistant posting (Computrabajo): https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-asistente-de-acreditacion-para-importante-contrata-minera-disponibilidad-inmediata-en-cerro-colorado-795F5344C41A6F5461373E686DCF3405
- Specialised mining contractor registration procedure (gob.pe): https://www.gob.pe/769-inscribir-y-ampliar-a-mi-empresa-como-contratista-minera-especializada

---

## Rejected after competitor research

- **Pharmacy DIGEMID price-observatory reporting.** The duty is real: DS 014-2011-SA art. 30, Directive 176/MINSA/DIGEMID, with sanctions up to closure. But pharmacy POS SaaS already bundles it: **Sysfarma**, from S/69/month, includes DIGEMID reporting, and NEOPHARM is another vendor. Sources: https://www.comparasoftware.com/sysfarma , https://www.digemid.minsa.gob.pe/Archivos/Comunicados/2023/COM_016-2023.pdf
- **EUDR traceability for coffee and cocoa.** Government-provided tool: **MIDAGRI Agrodigital**, tied to the Registro de Productores Agrarios (PPA), with 181,731 polygons geolocated. PROMPERÚ runs free workshops. Smallholders have low willingness to pay, and the EU timeline keeps moving. Sources: https://andina.pe/agencia/noticia-midagri-peru-tiene-grandes-avances-cumplimiento-norma-europea-sobre-deforestacion-1056743.aspx , https://cdn.www.gob.pe/uploads/document/file/9425111/6513789-peru-hacia-el-cumplimiento-del-reglamento-de-la-union-europea-para-productos-libres-de-deforestacion-eudr.pdf , https://agraria.pe/noticias/preparan-cadenas-de-cafe-y-cacao-para-cumplir-exigencias-eur-42348
- **Public-procurement vendors (Ley 32069 / Pladicop).** The platform is free and state-run; RNP registration is indefinite, with no renewal workflow. The remaining need is training, sold by **RC Consulting** and **PUCP** workshops. Sources: https://lpderecho.pe/contrataciones-estado-pladicop/ , https://rc-consulting.org/pdf/brochures/seace-y-pladicop-oece.pdf , https://gobierno.pucp.edu.pe/wp-content/uploads/2026/06/brochure_taller-pladicop-25julio.pdf

## Too competitive

- **SUNAT SIRE registers for accountants.** Every accounting and e-invoicing vendor supports it, and SUNAT extended its discretionary-sanction regime to 2027, which reduces urgency. Individual vendor names were not verified this session. Sources: https://lpderecho.pe/sunat-amplia-facultad-discrecional-uso-sire-hasta-2027-resolucion-000170-2026-sunat/ , https://gosocket.net/centro-de-recursos/sunat-posterga-la-obligatoriedad-de-llevar-registros-de-compra-y-venta-en-el-sire-hasta-junio-de-2026/

## Attractive problem, poor distribution

- **VMA compliance for non-domestic sewer users** (restaurants and factories under SEDAPAL and the other water utilities; DS 010-2019-VIVIENDA). It is the analogue of the Florida grease benchmark. But it is annual or one-off, driven by labs and consultants, and the buyer is fragmented across about 50 water utilities with different procedures. Sources: https://cdn.www.gob.pe/uploads/document/file/8180069/6843540-resolucion-n-121-2025-sunass-gg.pdf , https://sedaloreto.com.pe/descargas/RESOLUCION%20DE%20GG%20N°%20247%20APROBACIÓN%20DE%20LA%20IMPLEMENTACIÓN%20Y%20CONTROL%20DEL%20VMA%202026%20.pdf
- **Pest control (empresas de saneamiento ambiental).** Firms must be DIGESA-authorised. I could not verify a recurring report-to-regulator duty or a public, downloadable registry, and willingness to pay is likely low. Source: https://www.lamolina.edu.pe/eventos/lmc/2024/brochure_saneamiento_ambiental.pdf
- **Cocoa and coffee smallholder traceability:** about 70,000 cocoa families sell individually with no traceability. A real problem, but unreachable and unable to pay. Source: https://www.avsf.org/app/uploads/2025/12/note-avsf-ethiquable-RDUE_ES.pdf

## Next steps

1. Get the RS 135-2026 annex: register fields, file versus form, whether an API exists. Get OSINERGMIN station counts.
2. Interview 10 independent station owners and 5 station-serving accountants in Madre de Dios, Puno and Cusco before Dec 2026.
3. Check the station POS vendors' roadmaps.
