# Spain - opportunity research (2026-10-04)

Accessibility: open EU market; no sanctions/payment issues. Needs Spanish-language product, AEAT/regulator portals often need digital certificate/Cl@ve/apoderamiento. ~10 searches used; competitor depth is partly unverified (marked).

## Industries screened
| Industry | Workflow | Verdict | Reason |
|---|---|---|---|
| Small business invoicing | VeriFactu (deadline pushed to 1 Jan 2027 companies / 1 Jul 2027 autonomos, RDL 15/2025) | Too competitive | Dozens of billing vendors (Billin etc.) already marketing it |
| Road freight | Electronic DeCA mandatory 5 Oct 2026 (Resolution 5 Jun 2026) | Too competitive | bluecmr, logitrack, kaleidotrans, metotrans plus free government app controldigitaltransporte.es |
| Tourist lodging | SES.HOSPEDAJES traveller registry (since Dec 2024, 42 data points) | Too competitive | Chekin, Avirato and PMS/channel managers integrate it |
| Veterinary | PRESVET antibiotic prescription reporting (RD 666/2023) | Rejected | ~80% of vets already report automatically via clinic software web services |
| Excise (wine/beer/spirits) | SILICIE electronic books | Rejected | In force since 2020; AEAT FAQs/ERPs cover; producers under 100,000 L may keep paper |
| Construction | Libro de subcontratacion habilitation + REA | Poor/unclear | Habilitation per autonomous community, but REA tooling believed dominated by incumbents (unverified) |
| Small farms | Fertiliser records (mandatory from 1 Jan 2026), phyto records electronic 1 Jan 2027 | Candidate | Digital notebook voluntary (RD 34/2025), weak pain |
| Waste producers/transporters | Archivo cronologico, annual memoria per CCAA, e-SIR | Candidate | Fragmented by region, mandatory recurring |
| Gestorias / companies | Beneficial-owner (titularidad real) declaration with each accounts filing | Candidate | Registry closure risk, 2026 enforcement |
| HR / payroll | Pay-transparency directive 2023/970 (deadline 7 Jun 2026, Spain draft RD only) | Candidate | Law not final; HR suites likely to cover |
| Time tracking | Mandatory digital registro de jornada (RD expected 2026) | Too competitive | Factorial, Sage, Tamigo and others already sell it |
| Packaging (RD 1055/2022) | Annual packaging declaration, SCRAP/SIRAP | Poor | Collective schemes (Ecoembes, Ecovidrio) provide guides/portals |
| B2B e-invoicing | Ley Crea y Crece, RD 238/2026; public AEAT solution; obligation 12/24 months after ministerial order (draft target 1 Oct 2026) | Watch | Free public solution plus private platforms; wait for the order |

## Opportunities

### Opportunity: Waste-record compliance router for small waste producers and transporters (Spain)

**Industry:**  
Waste management / hazardous-waste producers (workshops, clinics, small industry), small waste transporters

**Buyer:**  
Environmental consultancies and prevention/ environmental services firms managing 50-500 small clients; secondarily workshops and small manufacturers

**Trigger / Why now:**  
Ley 7/2022 requires producers to keep a chronological archive and send an annual memoria (before 1 March) to their autonomous community; e-SIR has been the state platform for waste transfer documents since 2021/2024; from 21 May 2026 EU shipments must go through DIWASS (operator registration from 21 Apr 2026). Small producers (<10 t) become subject once regional tools exist.

**Current workflow:**  
1. Log each waste generation/handover in Excel or paper archivo cronologico.  
2. Issue identification documents / notifications via e-SIR or regional portal.  
3. Each March, rebuild the annual memoria in that region's specific form/portal (Madrid, Castilla-La Mancha, Aragon, Cantabria all use different forms).  
4. Reconcile with gestor's invoices and certificates.

**Pain:**  
Regional form fragmentation evident from separate instructions per region; sanction exposure. Evidence of employee-hours is thin (unverified).

**Existing solutions:**  
Government e-SIR (free), regional portals, environmental consultancies doing it manually, general EHS/waste software (not verified by search).

**The gap:**  
A multi-region memoria generator that ingests the client's archive plus e-SIR exports and outputs each region's required format, for consultancies managing many sites.

**Possible product:**  
Multi-tenant tool for consultancies: import e-SIR/Excel, validate LER codes, produce regional memoria and reminder calendar.

**MVP:**  
Memoria exporter for 3-4 largest regions (Madrid, Catalonia, Andalusia, Valencia) from CSV.

**Pricing hypothesis:**  
EUR 5-15 per client site per month, EUR 150-400/month per consultancy.

**How to find first customers:**  
Regional registers of waste producers/gestores, environmental consultancy associations, LinkedIn.

**Risks:**  
Annual rhythm; e-SIR may add memoria generation (the Madrid source says memoria is satisfied when data is in the e-SIR repository, which may eliminate the task); regional portal access.

**Kill condition:**  
Consultancies confirm e-SIR already auto-satisfies the memoria in most regions.

**Score:** 4.5/10

**Sources:**  
- https://www.miteco.gob.es/es/calidad-y-evaluacion-ambiental/temas/prevencion-y-gestion-residuos/traslados/procedimiento-traslado-residuos-interior-territorio-estado.html  
- https://www.comunidad.madrid/sites/default/files/cma-ma-acuerdo-memoria-anual-rp-productores.pdf  
- https://emprendedores.es/actualidad/obligacion-memoria-residuos-peligrosos/  
- https://www.garrigues.com/es_ES/noticia/traslado-residuos-adapta-normativa-ue-mejora-trazabilidad-inspeccion-control-territorio

### Opportunity: Titularidad real (beneficial owner) monitor for gestorias

**Industry:**  
Accounting/gestoria services, corporate secretarial

**Buyer:**  
Small and mid gestorias/asesorias handling 100-1,000 companies

**Trigger / Why now:**  
RCTR (RD 609/2023) is live; beneficial-owner declaration is now an independent ground for registry closure (cierre registral) separate from missing accounts; must be declared with each accounts deposit.

**Current workflow:**  
1. Gestor collects ownership data per client.  
2. Checks structure changes manually.  
3. Declares at the Registro Mercantil with accounts deposit; chases clients for updates.  
4. Discovers blocked registry sheet only when a filing is rejected.

**Pain:**  
Closure risk and fines; recurring on each deposit. Hours evidence unverified.

**Existing solutions:**  
copilotgestoria (a guide/product for gestorias), law-firm services, Registradores' own tools, general gestoria software (unverified details).

**The gap:**  
Portfolio-level tracking of which clients have stale/missing declarations, plus document pack (escrituras, shareholder changes) tied to deposit deadlines.

**Possible product:**  
Dashboard that tracks client ownership changes and deposit deadlines, with checklists and client reminders.

**MVP:**  
Spreadsheet/CSV import, status per client, reminder emails, checklist export.

**Pricing hypothesis:**  
EUR 1-2 per company per month, EUR 50-200/month per gestoria.

**How to find first customers:**  
Colegios de gestores administrativos directories, asesoria associations.

**Risks:**  
No registry API for small vendors (unverified); peak seasonality; generic-document-collection trap; incumbent gestoria suites can add it cheaply.

**Kill condition:**  
Gestoria suites already include portfolio tracking, or gestors report no pain in interviews.

**Score:** 3.5/10

**Sources:**  
- https://copilotgestoria.com/blog/titularidad-real-cierre-registral-2026-guia-gestorias  
- https://www.ecija.com/actualidad-insights/puesta-en-marcha-del-registro-central-de-titularidades-reales-rctir/  
- https://elderecho.com/las-claves-del-nuevo-registro-central-de-titularidades-reales

### Opportunity: Farm fertiliser and phytosanitary record tool for advisors (CUE-compliant)

**Industry:**  
Agriculture / agricultural advisory cooperatives (ADV, ATRIA)

**Buyer:**  
Agricultural advisory services, cooperatives, farm management consultancies

**Trigger / Why now:**  
From 1 Jan 2026 fertiliser applications must be recorded (paper or digital); phyto treatment records must be electronic interoperable from 1 Jan 2027; RD 34/2025 keeps the digital notebook voluntary overall.

**Current workflow:**  
1. Farmer/technician notes treatments on paper or phone.  
2. Advisor transcribes into notebook/SIEX-compatible app.  
3. Data re-keyed for PAC (CAP) interventions and regional submissions.

**Pain:**  
Re-entry across regional systems; but voluntary status and weak penalties lower urgency.

**Existing solutions:**  
Government CUE/SIEX, many private cuaderno de campo apps (e.g. Agroptima - from general knowledge, unverified), cooperative software.

**The gap:**  
Exception handling/regional interoperability; unclear.

**Possible product:**  
Import/export bridge from advisors' spreadsheets to the interoperable CUE format.

**MVP:**  
CSV to CUE-format validator/converter.

**Pricing hypothesis:**  
EUR 20-60/month per advisor.

**How to find first customers:**  
Registered ATRIA/ADV lists in regional agriculture ministries; cooperatives.

**Risks:**  
Crowded app market; voluntary; seasonal.

**Kill condition:**  
Advisors already satisfied with existing apps' CUE export.

**Score:** 3/10

**Sources:**  
- https://boe.es/boe/dias/2025/01/22/pdfs/BOE-A-2025-998.pdf  
- https://www.mapa.gob.es/es/prensa/ultimas-noticias/el-ministerio-de-agricultura-pesca-y-alimentaci%C3%B3n-inicia-la-audiencia-p%C3%BAblica-de-la-norma-que-establece-la-voluntariedad-del-cuaderno-digital-de/tcm:30-685809  
- https://apliagri.castillalamancha.es/sites/default/files/2026-02/PRESENTACIÓN_REA_CUE_2026_smd.pdf

### Opportunity: Pay-transparency salary-audit pack for mid-size Spanish employers

**Industry:**  
HR / payroll bureaus

**Buyer:**  
Payroll bureaus and labour-law consultancies serving 50-250 employee firms

**Trigger / Why now:**  
Directive 2023/970 transposition deadline was 7 Jun 2026; a draft RD amending RD 902/2020 exists; pay registers, audits and job valuation already exist for equality plans.

**Current workflow:**  
1. Export payroll to Excel.  
2. Build the registro retributivo by category/gender manually.  
3. Compute gaps, justify differences, prepare audit report.

**Pain:**  
Annual/periodic, consultant-heavy; law still unsettled.

**Existing solutions:**  
HR suites (Factorial, Sage), equality-plan consultancies, Excel templates (not individually verified).

**The gap:**  
Payroll-agnostic registro retributivo with justification workflow.

**Possible product:**  
Payroll-export importer producing the register and gap analysis.

**MVP:**  
CSV importer plus register/ gap report.

**Pricing hypothesis:**  
EUR 50-150/month per bureau.

**How to find first customers:**  
Payroll bureau and consultancy associations.

**Risks:**  
Final rules unknown; annual; crowded HR market.

**Kill condition:**  
Final RD requires different structure, or HR suites bundle it.

**Score:** 3/10

**Sources:**  
- https://www.garrigues.com/es_ES/eventos/directiva-transparencia-retributiva-podemos-esperar-transposicion-espana  
- https://periscopiofiscalylegal.pwc.es/?p=21136  
- https://www.iberley.es/revista/la-directiva-ue-2023-970-un-nuevo-umbral-exigencia-igualdad-retributiva-partir-7-junio-2026-1569

## Rejected after competitor research
- Electronic DeCA for hauliers: bluecmr, logitrack, kaleidotrans, metotrans plus free government tool controldigitaltransporte.es.
- Vet PRESVET reporting: clinic management software already automates it (~80% of vets via web services).
- SILICIE: AEAT system since 2020, ERP/b2brouter-type vendors; small producers exempt.
- Packaging declaration: SCRAP/Ecoembes/Ecovidrio guides and portals.
- Mandatory digital time tracking: Factorial, Sage, Tamigo, Combohr, Stelorder sell it.

## Attractive problem, poor distribution
- Construction subcontracting books (per-CCAA habilitation): buyers fragmented; REA incumbents unverified.
- Small-farm fertiliser records: many micro farms, voluntary digital use.

## Too competitive
- VeriFactu / anti-fraud billing (1 Jan / 1 Jul 2027).
- SES.HOSPEDAJES traveller registry (Chekin, Avirato, PMS).
- Payroll/HR time tracking.
- B2B e-invoicing (Ley Crea y Crece, RD 238/2026): free AEAT public solution plus private platforms; revisit once the ministerial order sets the 12/24-month clock.

## Source list for rejected items
- https://www.billin.net/blog/hacienda-retrasa-verifactu-a-2027/
- https://sede.transportes.gob.es/areas-actividad/transporte-terrestre/inspeccion-sector-transporte-terrestre/documento-control-digital
- https://www.bluecmr.com/documentos/documento-control
- https://chekin.com/blog/registro-de-viajeros-ses-hospedajes-2025/
- https://www.agronewscastillayleon.com/la-receta-electronica-veterinaria-esencial-para-garantizar-la-trazabilidad
- https://sede.agenciatributaria.gob.es/Sede/impuestos-especiales-medioambientales/silicie/preguntas-frecuentes.html
- https://guiafiscal.es/autonomos/factura-electronica-2026/
