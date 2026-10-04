# Chile — Indie-Hacker Opportunity Research

*Research date: 2026-10-04. The session had limited tools: the shared WebSearch budget ran out partway through, and WebFetch was blocked for most domains. Every fact below comes from search-result summaries of the cited URLs. Anything marked **(unverified)** or **(estimate)** comes from prior knowledge or inference and still needs a first-hand check. Treat the scores as provisional until customer interviews are done.*

---

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Private security (security companies + "entidades obligadas") | Personnel credentialing and security studies (*estudios de seguridad*) under the new Ley 21.659 / DS 209 | **Opportunity** | New regime began on 28 Nov 2025. Compliance has collapsed (2,688 of more than 35,000 personnel credentialed), and the deadline was extended to 28 May 2027. |
| Mining / industrial subcontractors | Monthly labor-compliance packs (F30, F30-1, Previred, payslips) uploaded to many client (*mandante*) portals | **Opportunity** | Humans are the integration layer across SIGA, Webcontrol, Pronexo, ControlDoc, SUCAL, Achilles and SICEP. All existing tools sit on the client side. |
| Electronics / battery importers (Ley REP) | Producer registration and reporting for the new REP decree on electronics and batteries (DS 22/2025) plus the packaging REP | **Opportunity (moderate)** | Decree published 7 May 2026. New obligated importers, and SMA's SISREP system is operational with sanctions underway. |
| Industrial wastewater dischargers (food plants, agro-industry) | Monthly self-monitoring (*autocontrol*) reports for liquid industrial waste (RILes) to SMA under DS 90 / DS 46 | **Opportunity (weak why-now)** | Mandatory monthly report from lab PDFs into the RETC single window. Labs and consultants already bundle the service. |
| Solar installers (net billing) | Connection request to the distributor plus the SEC TE4 declaration per installation | **Watch / weak** | Volume is growing fast (39,636 installs, +42% a year), but no pain evidence was found and the per-job value is small. |
| Hazardous-waste generators / transporters | SIDREP waste manifests per shipment | **Not validated** | A free government system exists and dedicated waste SaaS exists locally (not verified). Search budget ran out before competitor diligence. |
| All SMEs (personal-data law) | Ley 21.719 compliance before 1 Dec 2026 | **Too generic / competitive** | Strong why-now (774,908 SMEs in scope), but it is horizontal "generic compliance". Consultants and privacy SaaS will crowd it. |
| Buildings / elevator maintainers | Elevator certification under Ley 20.296, presented to the municipal works department (DOM) | **Reject (small market)** | About 37,000 certified elevators. Big manufacturers dominate maintenance, so the buyer pool is thin. |
| Payroll / HR (42-hour week from Apr 2026, pension reform employer contribution, electronic payroll book) | Payroll and attendance compliance | **Reject — too competitive** | Buk, Talana, Rex+ and GeoVictoria already cover this. |
| Workplace safety (DS 44 risk-management regulation) | Risk matrices and prevention programs | **Reject — free substitute** | The mutual insurers (ACHS, Mutual de Seguridad, IST) give affiliated employers free tools (not re-verified). |

---

## Opportunities

### Opportunity: Private-security compliance desk (Ley 21.659 credential and security-study tracker)

**Industry:**
Private security: guard and watchman companies, plus businesses legally obliged to keep security measures.

**Buyer:**
Operations or compliance manager at a security-services company. Secondary buyer: the security lead at an obliged entity such as a fuel-station network, a cash-in-transit firm, a bank-support company, or an entity declared obliged by resolution.

**Trigger / Why now:**
- Ley 21.659 (published 21 Mar 2024) took effect on 28 Nov 2025 with its regulation, Decreto 209 (published 27 May 2025).
- The first security studies were due by 28 May 2026, and all personnel had to renew authorizations under the new regime.
- Ley 21.825 (2026) extended both deadlines to 28 May 2027. It was passed because only 2 of 393 obliged entities had filed studies, and only 2,688 of more than 35,000 guards, watchmen, porters and patrol staff had the new credential.
- The government's digital platform was cited as delayed.

**Current workflow:**
1. The security company keeps each guard's file in spreadsheets or folders: ID, criminal-record certificate, health and psych checks, OS-10 era course certificates, and the new training.
2. Staff track expiry dates by hand and enrol guards in courses at authorized training providers (OTECs).
3. They submit each person's credential application on the Subsecretaría de Prevención del Delito platform and chase status.
4. For each client site, they keep site-specific documentation. Obliged clients additionally prepare and submit a security study, using consultants or law firms.
5. They re-check credential status whenever a guard is rotated to another site or client.

**Pain:**
Documented compliance collapse (2,688 of more than 35,000 personnel; 2 of 393 entities). Congress had to pass an emergency extension to avoid paralyzing the sector. Guards without valid authorization cannot legally work, which hits revenue directly.

**Existing solutions:**
- Law firms and consultancies offering compliance advice (AZ, Prieto, Guerrero Olivos and others publish guides).
- OTEC training providers.
- Generic workforce and attendance tools such as GeoVictoria (unverified feature fit).
- The government platform itself.
- No dedicated compliance software for Ley 21.659 appeared in the searches (a limited search, so this is not proof of absence).

**The gap:**
Nothing on the security company's side links each guard's documents, training, credential status and expiry to a deployment-readiness view ("who can legally work at which site, and when do they expire"). Nothing pre-validates files before they reach the slow government platform.

**Possible product:**
A credential-and-deployment compliance tracker for security companies. It holds a per-guard digital file, rules for each credential type, expiry alerts, a pre-submission checklist built from DS 209 requirements, and a client-facing compliance certificate per site.

**MVP:**
Spreadsheet import of the guard roster, a document checklist per credential type, an expiry and status dashboard, and a CSV/PDF "compliance pack" per client site. No integration with the government platform at first; it just tracks the submission status.

**Pricing hypothesis:**
About CLP 1,500–3,000 per active guard per month (estimate), or a CLP 150k–600k monthly tier per company.

**How to find first customers:**
- The public registry of authorized security companies (formerly Carabineros OS-10; now the Subsecretaría, unverified).
- Industry associations: ASEVA, which the press cites, and guard-company groups.
- Lists of OTEC training providers authorized for security courses.
- Fuel-station networks and cash-handling firms named in the law as obliged.

**Risks:**
- The government platform is the only filing channel, and it is unknown whether it allows bulk or automated filing.
- After May 2027 the work shifts from a one-off scramble to periodic renewals (renewal frequency unverified).
- Large incumbents (Prosegur, G4S-type firms) build their own tooling.
- The long tail of small guard companies has low willingness to pay.

**Kill condition:**
- The government platform adds employer-side bulk management and expiry tracking, or
- Interviews show small security firms keep doing this with a part-time clerk and a spreadsheet and won't pay at least CLP 100k a month.

**Score:** 6.5/10

**Sources:**
- https://actualidadjuridica.doe.cl/nueva-ley-amplia-plazos-para-presentar-estudios-de-seguridad-hasta-2027/
- https://g5noticias.cl/2026/09/21/ley-corta-de-seguridad-privada-los-escenarios-que-se-abren-tras-la-aprobacion-de-la-prorroga-2/
- https://www.diarioconstitucional.cl/2026/05/13/iniciativa-prorroga-plazos-de-regularizacion-en-seguridad-privada-para-evitar-crisis-operativa-en-el-sector/
- https://www.diariooficial.interior.gob.cl/publicaciones/2025/05/27/44158/01/2649270.pdf (Decreto 209)
- https://www.diariooficial.interior.gob.cl/publicaciones/2024/03/21/43807/01/2468993.pdf (Ley 21.659)
- https://vlex.cl/vid/resolucion-num-2310-exenta-1097846790 (Res. Ex. 2.310/2025 on transition rules)
- https://www.theclinic.cl/2025/08/25/medidas-urgentes-seguridad-privada-aseva/
- https://www.az.cl/nueva-ley-de-seguridad-privada-plantea-desafios-para-las-empresas-este-2026/

---

### Opportunity: Subcontractor "accreditation once, push everywhere" pack

**Industry:**
Subcontractors in mining, industry and construction (Ley 20.123 subcontracting regime).

**Buyer:**
The administration or HR lead, or the "encargado de acreditaciones" (accreditation officer), at a contractor with roughly 20–500 workers serving two or more client companies.

**Trigger / Why now:**
Client companies keep adding stricter, AI-assisted accreditation platforms. Codelco's SUCAL now covers about 80,000 contractor workers across all its divisions. The Ministry of Labor now recognizes third-party "verification entities": for example, Webcontrol Certify SpA was accredited under Res. Ex. 903, published July 2026. This is not a single new-law trigger, so the why-now is moderate.

**Current workflow:**
1. Each month the contractor pays salaries and social-security contributions (Previred), produces payslips, and loads its electronic payroll book to the labor authority (DT).
2. It requests the DT's F30 / F30-1 labor-and-pension compliance certificate.
3. It downloads the PDFs and re-uploads the same pack to each client's portal (SIGA, Webcontrol, Pronexo, ControlDoc, Codelco SUCAL / SIIRLL-VP, Achilles, SICEP), each with its own naming conventions and fields.
4. It accredits each worker separately on each client platform: contract, medical exams, safety-induction and risk-briefing records, PPE delivery, licences.
5. It tracks expiries in Excel and fixes rejections one by one. Workers can't enter the site, and invoices are held, until accreditation passes.

**Pain:**
- Dedicated job roles exist ("Acreditación y control documental", "Técnico prevencionista de riesgos – acreditación y gestión documental"), and postings explicitly ask for experience with several portals. That points to many staff-hours.
- Payment and site access depend on it, because clients withhold payment under their joint liability.
- About 1.4 million people work under subcontracting (INE figure cited by Buk / Simplo).

**Existing solutions:**
- Client-side platforms: Webcontrol, SIGA, Pronexo, ControlDoc, Workmate, Codelco SUCAL, Achilles, SICEP.
- Payroll SaaS (Buk, Talana, Rex+) generates the source documents.
- Freelance "acreditadores" and outsourced accreditation services.

**The gap:**
Every platform is bought by the client and built for the client. The contractor has no single source of truth that maps its monthly pack and its worker files to each client portal's format and expiry rules. It still re-uploads by hand and handles rejections.

**Possible product:**
A contractor-side document vault and mapper. It holds company-level monthly documents and worker files once, knows each portal's document checklist and naming rules, flags what's missing or expiring per client, and produces ready-to-upload bundles. Browser-assisted upload comes later.

**MVP:**
Per-portal checklists for the three most common platforms (for example SIGA, Webcontrol, Pronexo), an expiry dashboard per worker, and bulk renaming and bundling of the monthly pack, ingested from Buk or Talana exports and the F30-1 PDF.

**Pricing hypothesis:**
CLP 100k–400k a month per contractor, or about CLP 2,000 per accredited worker per month (estimate). The benchmark is the salary of an accreditation clerk.

**How to find first customers:**
- Supplier registries: Achilles and SICEP supplier lists.
- Member directories of mining-supplier associations such as AIA Antofagasta and the CChC (Cámara Chilena de la Construcción).
- Job boards (chiletrabajos.cl, computrabajo) listing "acreditación" roles, which identify companies with the pain.

**Risks:**
- Portal terms may forbid automation, and the portals may build contractor-side multi-client views themselves.
- Webcontrol and similar firms could add a contractor-facing product.
- Fragmented portal formats raise maintenance cost.

**Kill condition:**
- A dominant portal already offers contractors a free multi-client "passport", or
- Interviews show most contractors serve a single client, so there's little duplication.

**Score:** 6.5/10

**Sources:**
- https://www.mintrab.gob.cl/wp-content/uploads/2026/07/ResEx_N903_Webcontrol.pdf
- https://codelco.com/codelco-implementa-una-pionera-plataforma-de-control-y-acreditacion-para
- https://www.codelco.com/proveedores/portal-de-acreditacion-para-las-empresas-contratistas-de-vicepresidencia
- https://www.chiletrabajos.cl/trabajo/acreditacion-y-control-documental-3858527
- https://www.chiletrabajos.cl/trabajo/tecnico-prevencionista-de-riesgos-acreditacion-y-gestion-documental-sso-3846002
- https://dt.gob.cl/portal/1626/w3-article-98244.html
- https://www.mintrab.gob.cl/ley-de-subcontratacion/
- https://simplo.cl/subcontratacion-servicios-externos-y-cadena-de-proveedores/

---

### Opportunity: REP reporting for electronics and battery importers (DS 22/2025)

**Industry:**
Importers and brand owners of electrical and electronic equipment and batteries, plus packaging producers.

**Buyer:**
The owner or finance and compliance lead at an SME importer of appliances, phones, IT accessories, tools, lighting or batteries.

**Trigger / Why now:**
- DS 22/2025 (Ministry of the Environment), covering electronics and batteries, was published on 7 May 2026 and took effect immediately.
- Collection and recovery targets apply from May 2028, 24 months after publication. Producers must organize through a collective management scheme in the meantime.
- A separate draft decree on industrial batteries went to public consultation in February 2026.
- SMA's SISREP reporting system went live in 2025, and SMA opened its first sanction proceedings against producers that hadn't joined a scheme.

**Current workflow:**
1. Pull import declarations (DIN customs forms) and sales data.
2. Map each SKU to an equipment category and estimate its weight (product and packaging) by hand.
3. Register in the RETC portal and with a collective management scheme.
4. Report quantities placed on the market, in a different format for each channel.
5. Repeat each period and reconcile against customs data.

**Pain:**
New obligated population. Sanctions have started. SKU-to-weight-and-category mapping is tedious for importers with thousands of SKUs (estimate).

**Existing solutions:**
- The collective management schemes' own templates.
- Environmental law firms (Carey, Prieto, JDF publish guides).
- Waste-traceability SaaS such as Recylink (unverified coverage).
- RETC / SISREP portals (free).

**The gap:**
A tool for SME importers that turns customs declarations and SKU data into category and weight tallies for SISREP and the management scheme (assumed gap, not verified).

**Possible product:**
"REP ledger": upload customs-declaration XMLs or an ERP sales export, auto-classify SKUs into the decree's categories with weight lookups, and output the declaration files.

**MVP:**
CSV upload, a SKU classification table with manual override, and a quarterly or annual report export in the scheme's template.

**Pricing hypothesis:**
CLP 50k–200k a month by SKU volume, or CLP 500k–2M for each annual declaration.

**How to find first customers:**
- Customs import data by HS code (public trade databases).
- Members of the collective management schemes.
- SMA lists of producers not affiliated with a scheme, if published.

**Risks:**
- Reporting may be annual only, which means low frequency.
- Management schemes may give members free calculators.
- Targets only bite from 2028.

**Kill condition:**
The schemes do the category and weight calculation for members for free, or reporting is a simple annual total.

**Score:** 6/10

**Sources:**
- https://www.carey.cl/publican-decreto-que-establece-metas-de-recoleccion-y-valorizacion-de-residuos-de-pilas-y-aparatos-electricos-y-electronicos
- https://jdf.cl/en/metas-de-recoleccion-valorizacion-y-otras-obligaciones-asociadas-de-pilas-y-aparatos-electricos-y-electronicos/
- https://www.prieto.cl/ley-rep-aplicacion-2025-y-lo-que-viene-en-2026/
- https://economiacircular.mma.gob.cl/wp-content/uploads/2026/02/1.-RE-821-2026-Aprueba-Anteproyecto-REP-Baterias.pdf
- https://www.emol.com/noticias/Nacional/2026/05/08/1199499/medio-ambiente-decreto-basura-electronica.html

---

### Opportunity: Monthly RILes self-monitoring reporter (DS 90 / DS 46)

**Industry:**
Food processors, agro-industry, fish plants, wineries and slaughterhouses that discharge liquid industrial waste (RILes).

**Buyer:**
The environmental or plant manager at a discharging facility. Secondary buyer: accredited environmental labs (ETFAs) that report on clients' behalf.

**Trigger / Why now:**
No new law; the why-now is enforcement. The SMA keeps opening compliance programs for DS 90 breaches (many SNIFA files). Monthly self-monitoring must be submitted through the RETC single window within the first 20 business days of the following month (SMA Res. Ex. 117/2013).

**Current workflow:**
1. The lab samples and sends PDF results.
2. Staff transcribe the parameters into the RETC / SMA form.
3. They check results against the facility's own limits.
4. They file, and handle any exceedance or reporting gap, which can trigger a sanction case.

**Pain:**
Missed or late reports and exceedances end up in SMA sanction cases and compliance programs, which are visible in SNIFA.

**Existing solutions:**
ETFA labs bundling the reporting, environmental consultancies, and in-house spreadsheets.

**The gap:**
Automated lab-PDF to portal transcription, with limit checks against the facility's own monitoring resolution (unverified that no lab offers this).

**Possible product:**
A parser for ETFA result PDFs plus a limit checker, a pre-filled monthly declaration, and an exceedance alert log.

**MVP:**
PDF-to-table parsing for 3–5 major labs' formats, a limits table per facility, and an export matching the RETC form.

**Pricing hypothesis:**
CLP 60k–150k per facility per month.

**How to find first customers:**
SNIFA public enforcement records list sanctioned dischargers. Lists of the facilities the SMA supervises (public data).

**Risks:**
Labs giving this away as part of their service, few facilities, and the lack of an API for the RETC portal.

**Kill condition:**
Major ETFA labs already file on clients' behalf at no extra cost.

**Score:** 5.5/10

**Sources:**
- https://snifa.sma.gob.cl/General/Descargar/20801007551
- https://snifa.sma.gob.cl/General/DescargarPdcReporte/2243
- https://portalvu.mma.gob.cl/wp-content/uploads/2021/11/Manual-SINADER-2021.pdf

---

### Opportunity: Net-billing paperwork router for solar installers

**Industry:**
Residential and commercial solar installers.

**Buyer:**
The owner or permitting staff at a solar installer, who are SEC-licensed electricians.

**Trigger / Why now:**
Growth. Net-billing capacity reached 466.7 MW (+42% in 12 months) across 39,636 installations. Distributors must answer connection requests within 20 business days.

**Current workflow:**
1. Submit the connection request to the specific distributor (Enel, CGE, Saesa group, Chilquinta, and others, each with its own channel).
2. Track the 20-business-day response.
3. Install the system.
4. Declare the TE4 at the SEC.
5. Send the TE4 certificate and documents back to the distributor to have the bidirectional meter installed.

**Pain:**
Plausible, but this session found no direct complaints about the process.

**Existing solutions:**
SEC online TE4 filing, distributor portals, and general solar design tools such as OpenSolar and Aurora (no Chile paperwork; unverified).

**The gap:**
One project record that generates each distributor's forms, tracks the response deadline and its expiry, and links to the TE4.

**Possible product:**
A net-billing project tracker that auto-fills forms and raises deadline alerts.

**MVP:**
Forms for Enel and CGE, plus a status board.

**Pricing hypothesis:**
CLP 5k–15k per project, or CLP 40k–100k a month.

**How to find first customers:**
The SEC registry of licensed installers, and the ACESOL solar association.

**Risks:**
Small installers have low willingness to pay, and a distributor or SEC portal unification would remove the need.

**Kill condition:**
Installers report that the process takes under 1 hour per project.

**Score:** 5/10

**Sources:**
- https://www.reporteminero.cl/noticia/energias-limpias/2026/04/net-billing-chile-466-mw-crecimiento
- https://www.chileatiende.gob.cl/fichas/48597-declaracion-de-puesta-en-servicio-de-generadoras-residenciales-te4
- https://www.carey.cl/ley-de-net-billing
- https://eepa.cl/pdfs/Instructivo_ley20.571_NetBilling_mayo2026.pdf

---

## Rejected after competitor research

- **Client-side contractor accreditation platform:** killed by Webcontrol, SIGA, Pronexo, ControlDoc and Codelco's in-house SUCAL. That market is saturated, which is why the contractor-side angle above is the only one kept.
- **Payroll and attendance compliance** (42-hour week from April 2026, pension-reform employer contribution, electronic payroll book, F30-1 inputs): killed by Buk, Talana, Rex+ and GeoVictoria.
- **DS 44 workplace-safety management for SMEs:** killed by the mutual insurers' free tools (ACHS, Mutual de Seguridad, IST); not re-verified this session.
- **Condominium administration under Ley 21.442:** killed by ComunidadFeliz and similar condominium SaaS (from prior knowledge; not re-verified this session).

## Attractive problem, poor distribution

- **Elevator certification and municipal submission (Ley 20.296):** about 37,000 elevators, maintenance dominated by large manufacturers, and municipal submission processes that vary across 345 municipalities. Too few independent buyers.
- **SIDREP hazardous-waste manifests:** real per-shipment obligation, but the government system is free and waste SaaS may already cover it. Not validated.

## Too competitive

- **Ley 21.719 data-protection compliance** (effective 1 Dec 2026; 774,908 SMEs): strong why-now, but it is horizontal and generic, and consultants and privacy SaaS will crowd it. It's only worth revisiting as a narrow vertical, such as clinics handling sensitive health data. Sources: https://www.diarioconstitucional.cl/2026/06/12/la-ley-21-719-entra-en-vigor-el-1-de-diciembre-y-expone-vacios-en-regulacion-de-pequenas-empresas/ and https://www.emol.com/noticias/Economia/2026/07/13/1205543/nueva-ley-datos-personales.html
