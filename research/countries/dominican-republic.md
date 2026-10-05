# Dominican Republic: Indie-Hacker Opportunity Research

Research date: 2026-10-05

> **Method and limits.** I used 18 WebSearch calls, the cap for a large market. I did not use WebFetch, which is blocked by policy. I only saw search-result summaries and did not read primary documents in full. Claims are marked one of two ways:
> - **[V]**: seen in a search result in this session; the source URL is listed.
> - **[U]**: unverified or an estimate. Check it before any interview.
>
> **Headline finding.** The country's biggest 2026 compliance trigger is mandatory e-invoicing (e-CF) under Ley 32-23. Micro, small and unclassified taxpayers must comply by **15 Nov 2026**. But the market is already saturated: there are 47 certified providers, a free DGII invoicing tool, and accounting and medical software that already handle e-CF and generate the 606/607 reports. The strongest remaining ideas are smaller and weaker. All of them need interviews before anyone builds anything.

---

## Industries screened

| # | Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|---|
| 1 | All SMEs / liberal professionals | e-CF issuance under Ley 32-23 (deadline 15 Nov 2026 after a 6-month extension) | **Too competitive** | 47 DGII-certified providers plus the free DGII invoicing tool (Facturador Gratuito) |
| 2 | Accounting firms | Building the monthly 606 (purchases) and 607 (sales) reports from e-CF XMLs received across many clients | **Rejected** | Alegra Contador, Galileo Contabilidad (multi-company), ContApp and FacturaSimple already do this |
| 3 | Clinics / independent physicians | ARS (health insurer) claims, ARS authorizations and e-CF on medical fees | **Too competitive** | Onniprac, Core Salud, SolMed, HMLR and Dentera all advertise ARS + e-CF for DR practices |
| 4 | Realtors, builders, car dealers, notaries, lawyers, accountants, jewellers, pawn shops | AML/CFT compliance under Ley 155-17: client due-diligence files, cash-transaction reports above US$15k and suspicious-activity reports via goAML, supervised by DGII | **Opportunity (weak why-now)** | Mandatory, done per transaction, buyers are identifiable, and DGII publishes sanctions. No dedicated SMB tool found (gap unverified) |
| 5 | Government suppliers (MIPYMEs) | Bid-document compliance under the new procurement law, Ley 47-25 (in force Jan 2026; regulation Decreto 52-26) | **Opportunity (hypothesis)** | New law and a 30% MIPYME set-aside; every bid needs current DGII/TSS certificates and supplier registration (RPE). Competition not checked |
| 6 | Cocoa exporters | EU deforestation regulation (EUDR) due diligence: plot geolocation, traceability packages (applies from 30 Dec 2026 for medium/large operators) | **Poor distribution / competitive** | Few exporters; the funded Cacao Trace program plus osapiens and other global EUDR tools |
| 7 | Waste generators / waste managers | Ley 225-20 management plans, logbooks and traceability | **Insufficient evidence** | The obligation exists (Decreto 320-21), but no evidence of 2025–26 enforcement or a reporting portal |
| 8 | All taxpayers | Re-setting withholdings after the Ley 30-26 tax reform (effective 1 Jul 2026) | **Rejected** | A one-off change, handled by invoicing/ERP vendors and accountants |

---

## Opportunities

### Opportunity: AML/CFT case file and goAML report prep for DGII-supervised non-financial obligated subjects

**Industry:**
Real-estate agents, construction companies/developers, car dealers, notaries, lawyers, accountants, jewellers and pawn shops (Ley 155-17, art. 33).

**Buyer:**
The compliance officer at a small real-estate brokerage, developer or dealer. Often this is the owner or the administrator doing the job part-time. Secondary buyer: AML compliance consultants serving several obligated subjects.

**Trigger / Why now:**
- DGII supervises these businesses and publishes final sanctions. Aviso 24-25 updated the sanctions list as of Oct 2025 [V].
- Since April 2021, cash-transaction reports (RTE) and suspicious-operation reports (ROS) go only through the UAF's goAML platform [V].
- The trigger is enforcement pressure, not a new law, so the why-now is moderate. Pressure from GAFILAT evaluations is a recurring theme [V]. The date of the next DR mutual evaluation is [U].

**Current workflow:**
1. For each sale, rental above the threshold, or company formation, collect ID, source of funds, beneficial-owner and PEP information, usually as paper, PDF or WhatsApp photos.
2. Screen against lists by hand. Fill out a risk matrix in Excel.
3. Where cash exceeds US$15,000, prepare an RTE and enter it in goAML by hand (web form or XML) [V for the threshold and goAML].
4. Keep the records for DGII inspections, and keep the compliance manual and training records current.

**Pain:**
- Reporting is mandatory and penalised; the DGII sanctions list is public [V].
- The UAF had 5,519 registered obligated subjects at end-2024, 76.7% of them non-financial (about 4,200) [V].
- GAFILAT has flagged reporting as a weakness in DR [V for the article title; details U].

**Existing solutions:**
- goAML itself (government; entry only, no case management).
- AML consultants and law firms (manual service) [U].
- Enterprise AML suites built for banks [U].
- Excel templates.
- I found no SMB product focused on DR non-financial obligated subjects in 1 search. That is weak diligence, and the gap is unverified.

**The gap:**
A cheap per-transaction case file built for DR rules: a checklist that changes with the risk level, client and beneficial-owner capture, a cash-threshold flag, and RTE data exported in a goAML-ready format. Plus an "inspection binder" export for DGII visits.

**Possible product:**
A web app where a realtor or dealer opens one file per deal. A client link collects KYC documents. The app scores risk with the DGII matrix, prepares the RTE/ROS data for goAML, and keeps an audit-ready record.

**MVP:**
Deal file, KYC upload link, risk checklist based on DGII rules, cash-threshold detection, a goAML XML/CSV export for RTEs, and a PDF dossier for inspections.

**Pricing hypothesis:**
US$40–120/month per office, or US$5–10 per deal file. Consultants could pay US$200+/month for multiple clients [estimate].

**How to find first customers:**
- The DGII sanctions list.
- Real-estate associations, for example AEI (Asociación de Empresas Inmobiliarias) [U].
- Car dealers in ASOCIVU [U].
- The notaries' college.
- DGII PLAFT training events.

**Risks:**
- The goAML XML schema is DR-specific, and access to it is unverified.
- Small businesses may comply only on paper.
- Consultants may resist.
- Local AML-software competitors may exist that I did not find.

**Kill condition:**
- Interviews show fewer than about 10 reportable transactions a month per office, or
- an established local SMB AML tool already sells for under US$50/month.

**Score:** 5/10

**Sources:**
- https://siemprealdia.co/republica-dominicana/impuestos/sujetos-obligados-no-financieros/
- https://dgii.gov.do/legislacion/prevencionLavado/informacionEspecializada/Documents/BrochureLavadoDeActivos.pdf
- https://www.dgii.gov.do/publicacionesOficiales/avisosInformativos/Documents/2025/24-25.pdf
- https://www.dgii.gov.do/publicacionesOficiales/avisosInformativos/Documents/2021/5-21.pdf
- https://www.elcaribe.com.do/panorama/dinero/disminuyen-reportes-de-pagos-en-efectivo/
- https://eldinero.com.do/72236/gafilat-los-reportes-aun-son-un-desafio-para-republica-dominicana/
- https://eldia.com.do/sectores-no-financieros-son-puerta-para-lavado/

---

### Opportunity: Bid-readiness tracker for MIPYME government suppliers under Ley 47-25

**Industry:**
Small and micro businesses that sell to the Dominican state (construction, supplies, services).

**Buyer:**
The owner or administrator of a MIPYME that holds supplier registration (RPE) and bids regularly on the procurement portal (portaltransaccional.gob.do). Also procurement consultants (gestores de licitaciones) who handle bids for several firms [U].

**Trigger / Why now:**
- Ley 47-25 on public procurement replaced Ley 340-06 and took effect in January 2026 [V].
- Its regulation, Decreto 52-26, was issued on 28 Jan 2026 [V].
- The MIPYME set-aside rises from 20% to 30% of purchasing budgets, which pulls more small firms into bidding [V].

**Current workflow:**
1. Watch the portal for tenders.
2. For each bid, collect the current DGII "al día" certificate and the TSS certificate, the RPE record, the MIPYME certificate, the company's legal documents and the specific bid forms [V for the DGII/TSS/RPE requirements].
3. Reformat everything to each set of bid conditions. Documents expire, so they are re-downloaded often.
4. Bids get disqualified over expired or missing documents [U; to be confirmed in interviews].

**Pain:**
- The required documents are confirmed in published terms of reference [V].
- Rejection rates and hours spent per bid are unverified.

**Existing solutions:**
- The government portal itself (alerts and submission).
- Procurement consultants.
- Generic document tools.
- Tender-alert services: not checked [U].

**The gap (hypothesis):**
A "document wallet" that tracks the expiry of each certificate, maps each tender's checklist under the new law to the documents the firm already holds, and builds the submission package.

**Possible product:**
A per-company vault plus a tender checklist parser. It alerts before certificates expire and assembles the envelopes for each bid.

**MVP:**
- Certificate expiry tracker for DGII, TSS, RPE, MIPYME and bonds.
- Manual entry of a tender's checklist.
- A ZIP/PDF package builder.

**Pricing hypothesis:**
US$25–60/month per supplier; US$150+/month for consultants [estimate].

**How to find first customers:**
- The public supplier registry (RPE) via DGCP.
- Award notices on the procurement portal, which name winning suppliers.
- MIPYME associations and MICM programmes [U].

**Risks:**
- DGCP may add document-reuse features to the portal under the new law.
- Low willingness to pay among micro firms.
- Competition not checked.

**Kill condition:**
- The new regulation lets the portal pull DGII/TSS status automatically (interoperability), removing the document chase, or
- tender-alert and bid services already bundle this.

**Score:** 4/10

**Sources:**
- https://presidencia.gob.do/noticias/entra-en-vigencia-la-nueva-ley-47-25-de-contrataciones-publicas-en-la-republica-dominicana
- https://transparencia.dgjp.gob.do/wp-content/uploads/2026/04/Decreto-No.52-26-Reglamento-Aplicacion-Ley-No.47-25-de-Contrataciones-Publicas.pdf
- https://eldia.com.do/entrada-en-vigencia-de-la-ley-47-25-de-compras-y-contrataciones-publicas/
- https://elnuevodiario.com.do/que-novedades-trae-la-contratacion-publica-dominicana-con-la-entrada-en-vigencia-de-la-nueva-ley-de-compras-47-25/
- https://www.dgcp.gob.do/transparencia/documentos/compras_y_contrataciones/comparaciones_de_precios/INVITACIÓN A PRESENTAR OFERTAS.pdf
- https://tss.gob.do/transparencia/assets/tss-daf-cm-2025-0010ft.pdf

---

### Opportunity: EUDR lot-level due-diligence pack for Dominican cocoa exporters

**Industry:**
Cocoa export. Cocoa brings in about US$700M a year, mostly from the EU [V].

**Buyer:**
The export or quality manager at a cocoa exporter or cooperative.

**Trigger / Why now:**
- EUDR obligations apply from 30 Dec 2026 for medium and large operators, and from 30 Jun 2027 for micro and small ones [V].
- EU buyers already ask for plot-level geolocation before they confirm orders [V].

**Current workflow:**
1. Collect farmer plot polygons, through programmes or by hand.
2. Link deliveries to lots.
3. Send buyers spreadsheets or GeoJSON plus certificates for each shipment.
4. Answer each buyer's own questionnaire.

**Pain:**
- Market access depends on it: press says the DR cannot export cocoa to the EU without zero-deforestation compliance [V].

**Existing solutions:**
- The Cacao Trace programme (JAD with EU funding; georeferencing plus blockchain) [V].
- osapiens and other global EUDR platforms targeting LatAm exporters [V].
- Certification bodies (organic, Fairtrade) [U].

**The gap:**
Possibly turning one lot into each buyer's own format and handling exceptions such as mixed lots and missing polygons. But funded programmes already cover the core.

**Possible product:**
A lot-to-DDS (due-diligence statement) package generator built on existing plot data.

**MVP:**
CSV/GeoJSON import of plots and deliveries, lot linking, and an export per buyer.

**Pricing hypothesis:**
US$100–300/month per exporter [estimate].

**How to find first customers:**
- The export registry (CEI-RD/ProDominicana) [U].
- Cocoa associations.

**Risks:**
- Only a few dozen buyers [U].
- Donor-funded free tools.
- EUDR timeline politics (it has already been delayed).

**Kill condition:**
- Cacao Trace or exporters' EU buyers already provide the DDS export for free.

**Score:** 3/10

**Sources:**
- https://eldia.com.do/rd-no-podra-exportar-cacao-a-la-ue-sin-certificacion-de-no-deforestacion/
- https://zolfm.com/noticia/cacao-dominicano-acceso-a-la-ue-con-normas-de
- https://osapiens.com/es/resources/blogs/2026/guia-practica-de-preparacion-para-el-eudr-dirigida-a-exportadores-a-europa
- https://www.giz.de/sites/default/files/media/els-document/2026-06/ruta-conformidad-productores-cacao-eudr-compressed_0.pdf

---

## Rejected after competitor research

- **e-CF issuance for late-adopting micro businesses and professionals (Ley 32-23).** The trigger is strong:
  - The deadline moved from 15 May to 15 Nov 2026 [V].
  - Fines are 5–30 minimum wages plus 0.25% of the prior year's income [V].
  - 72% of receipts in H1 2026 were already electronic [V].

  The competition killed it: DGII lists 47 authorized providers (Alanube, Alegra, EDICOM, Sovos and others) and offers a free invoicing tool with free digital certificates [V].
- **Building 606/607 from received e-CF XMLs for accounting firms.** The 606 remains mandatory even for e-CF issuers [V], and the instructions were updated in Feb 2026 [V]. Killed by Alegra Contador (automated 606/607/IR-17/IT-1 across clients), Galileo Contabilidad (multi-company with its own RNC and certificate per client), ContApp Digital and FacturaSimple [V].
- **ARS claims plus e-CF for physicians and clinics.** Disputes between ARS and providers (glosas) are a real, long-running pain [V]. Killed by Onniprac, Core Salud, SolMed, HMLR and Dentera, which all market ARS management plus DGII e-CF for DR practices [V].
- **Withholding re-setup after Ley 30-26.** It is a one-time change (effective 1 Jul 2026) [V] and is handled by invoicing vendors.

## Attractive problem, poor distribution

- **EUDR cocoa traceability.** There are few buyers, and donor programmes and global platforms are already present (see above).
- **Waste traceability under Ley 225-20 (logs and management plans for generators and managers).** The obligation exists [V], but I found no 2025–26 enforcement or portal trigger, and the buyer list is unclear.

## Too competitive

- e-CF issuance / PSFE services.
- Accounting-firm 606/607 automation.
- Medical-practice ARS + e-CF billing.

## Accessibility

- No sanctions or internet restrictions [U, general knowledge].
- A foreign founder can sell SaaS.
- Note that e-CF issuance itself requires DGII provider certification. That does not affect the ideas above.
