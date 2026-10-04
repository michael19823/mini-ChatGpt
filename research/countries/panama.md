# Panama: Indie-Hacker Opportunity Research

_Research date: 2026-10-04. Panama track. Searches were mostly in Spanish, with some in English._

**Method and limitations (read first).** About 28 WebSearch queries in total. WebFetch was blocked by the network egress proxy for every domain tried (ana.gob.pa, dgi.mef.gob.pa, minsa.gob.pa, prensa.com, laestrella.com.pa, ey.com, kpmg.com, fiata.org and others). That means **the facts below come from search-result extracts of the cited pages, not from reading the full documents.** I prioritized official sources: ANA, DGI, SSNF, MINSA, Bomberos, Asamblea and Gaceta. Anything not confirmed in an extract is marked **unverified** or **estimate**. Where a competitor is tagged "(unverified for Panama)", the name comes from my background knowledge and must be checked before interviews. There are no reliable buyer counts for Panama yet. Getting them is the first diligence task.

---

## Industries screened

| # | Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|---|
| 1 | Corporate services (law firms acting as *agente residente*) | Annual collection of accounting records under Ley 254/2021, the DGI sworn declaration (e-Tax 1054/1055, Excel template), the BO register (RUBF) | **Opportunity #1** | DE 42 (7 Nov 2025) fixed the 15 July deadline and removed RAs' relief from record custody. Volume runs to thousands of entities per firm. No Panama-specific tool found |
| 2 | Freight forwarders / NVOCCs / cargo agents | Maritime manifest and BL transmission to ANA SIGA in CUSCAR D11A | **Opportunity #2 (downgraded)** | Mandatory since 23 Mar 2026, with a 24h pre-arrival deadline. But Global eTrade Services already sells Panama manifest filing to "mid/small carriers and cargo agents" |
| 3 | Real-estate brokers and developers (AML, non-financial obligated subjects) | Cash reports ≥B/.10,000 per transaction or per working week to UAF, due-diligence (DD) files, SSNF self-assessment (Res. S-022-2025) | **Opportunity #3 (borderline)** | Mandatory and supervised, but close to the "generic KYC" trap and the reporting frequency is unknown |
| 4 | Fire-protection contractors | Certificates → Bomberos DINASEPI inspection / occupancy certificate | Poor distribution / watch | DINASEPI Online (launched 25 Apr 2026) serves owners and professionals and promotes "cero intermediarios". No evidence that contractors upload anything |
| 5 | SMEs / accountants | E-invoicing migration (Res. 201-6299, effective 1 Jan 2026); Informe de Compras (Form 43) | Too competitive / rejected | Crowded PAC market (EDICOM etc.), plus Alegra and Softland. Form 43 applies only to taxpayers with ≥B/.1M income or ≥B/.3M assets |
| 6 | Employers / payroll bureaus | CSS reform Ley 462/2025: employer quota 13.25% → 14.25% → 15.25% | Rejected | SIPE (the CSS platform) computes the quota itself; for software it's a parameter change |
| 7 | Pharmacies | Quarterly controlled-substances report to DNFD/MINSA by email | Poor distribution | Real and mandatory, but quarterly, a small market, and MINSA is modernizing its portal |
| 8 | Food importers | APA import notifications in SIT, plus MIDA/MINSA checks | Rejected | Customs brokers bundle this into their fee, and APA is building its own PDA module and single window |
| 9 | Hotels / short-term rentals | Foreign-guest registration with Migración | Rejected | No Panama mandate found. Peru has one, with a free government platform plus Chekin |
| 10 | Property managers (PH administrators) | Ley 284/2022 duties: budgets, reports | Too competitive / not triggered | The regulations are still pending (MIVIOT targets 2026), and Propiedata already operates in Panama |
| 11 | Environmental testing / wastewater | Effluent characterization under COPANIT 35-2000 / 39-2000 | Poor distribution | Run through labs and consultants. No recurring portal upload found |
| 12 | Customs brokers / Colón logistics | SIGA declarations; Colón transit digitization (Aug 2026) | Watch | The government itself is digitizing transit (9 documents → online), which narrows the third-party gap |
| 13 | Non-bank financial obligated subjects (supervised by SBP) | New AML information requirements (Res. SBP-RG-PSO-R-2025-00671, 22 Oct 2025) | Lead, unverified | Couldn't retrieve what the resolution actually requires |

---

## Opportunities

### Opportunity: Ley 254 "registros contables" campaign + custody vault + DGI 1054 generator for resident agents

**Industry:**
Corporate services: Panamanian law firms and lawyers acting as *agente residente* for sociedades anónimas and foundations.

**Buyer:**
The partner or head of the corporate/compliance department (and the firm's compliance officer) at small and mid-size law firms that are resident agent for hundreds to thousands of entities.

**Trigger / Why now:**
- **Ley 254 of 11 Nov 2021** (amending Ley 52/2016). Legal entities must keep accounting records and deliver the records or copies to their resident agent by **30 April** each year. The RA then files a **Declaración Jurada de Registros Contables** with the DGI.
- **DE 177 of 30 Dec 2024** regulates Ley 52/2016. **DE 42 of 7 Nov 2025** fixed the RA filing deadline at **15 July every year** (it was 15 June). It also **deleted the paragraph that relieved RAs of keeping custody of the records** once filed. So RAs now have a continuing custody burden.
- The DGI has repeatedly extended deadlines (EY: "los agentes residentes tendrán hasta el 31 de diciembre"; Forvis Mazars: extension of the deadline). That suggests the industry struggles to comply.
- Parallel obligation: RAs must register with the SSNF and maintain beneficial-owner data in the Sistema Privado y Único de Registro de Beneficiarios Finales (Ley 129/2020).
- Timing: the 2027 cycle (records due 30 Apr 2027, filing due 15 Jul 2027) is the second under DE 42, so the sales window is Oct 2026 – Mar 2027.

**Current workflow:**
1. January to April: the RA emails each client or intermediary (often foreign) asking for the year's accounting records or copies, then chases the non-responders.
2. Staff classify each entity. The obligation applies to entities that don't operate in Panama or that only hold assets. They log receipts in spreadsheets or the practice-management system and file the documents.
3. By 15 July: staff download the DGI Excel template and fill one row per entity. The file must be named `Informe1054_[RUC]_[Año]`. They upload one declaration covering all entities via e-Tax 2.0 from the RA's own RUC. e-Tax validates the file, generates form 1055 and then 1054/1055, and issues a receipt.
4. Non-compliant clients get follow-ups. What happens after that (resignation or suspension steps) is **unverified**.
5. Year-round: keep BO data current in the SSNF register, do due diligence following the SSNF guide, and (since DE 42) retain custody of the records.

**Pain:**
- A single consolidated declaration means late clients or bad rows hold up the whole filing.
- Fines of **USD 5,000 to USD 1,000,000** have been reported. The exact article is not verified.
- Clients are often foreign and slow to respond. This is plausible but **unverified**; confirm it in interviews.
- Volume per RA is likely in the thousands of entities (**estimate**).

**Existing solutions:**
- The DGI e-Tax 2.0 Excel template, which handles submission only.
- The SSNF RUBF platform, which handles beneficial owners only.
- Global entity-management / CSP platforms such as Diligent Entities, Athennian and NavPass (all **unverified for Panama**). None appears to produce the DGI 1054 file.
- In-house systems at large firms; spreadsheets and email at small firms (**unverified**).
- Outsourced accountants and compliance consultants.
- A targeted search for "software Ley 254 agente residente" returned only law-firm and advisor explainers (PwC, Matapitti, OMC Group, IPAL, Fábrega Molino). No product came up.

**The gap:**
No tool was found that runs the Panama-specific annual cycle end to end:
1. a client-facing request and upload link per entity,
2. a status board and reminders,
3. classification under Ley 254,
4. a custody vault with retention rules,
5. a DGI-exact 1054 Excel export,
6. later, BO-change tracking against the RUBF.

Global CSP tools are built for BVI/Cayman-style registers and KYC, not for the DGI template. That is likely why incumbents haven't fixed it: the market is too small for them.

**Possible product:**
A white-label Spanish/English client portal. Each entity contact gets a magic link to upload statements or ledgers, or to declare where the records are kept and attest to it. The RA works from a compliance board with automated chasing, exports the DGI 1054 file in one click, and keeps an audit-ready custody vault.

**MVP:**
CSV import of the RA's entity list (name, folio, RUC, contact) → bulk request emails with upload links → status dashboard → DGI 1054 Excel export that matches the instructivo. No integrations at first.

**Pricing hypothesis:**
USD 2–4 per entity per year, with a minimum of USD 150/month. A 2,000-entity firm would pay roughly USD 4–8k a year. RAs bill clients annual fees, so a per-entity pass-through looks plausible (**unverified**).

**How to find first customers:**
- The SSNF register of resident agents. Registration is mandatory ("Manual de Registro AR"; SSNF ran a mass registration drive), but whether a public list exists is **unverified**.
- Colegio Nacional de Abogados.
- Chambers / Legal 500 Panama corporate rankings.
- Firms that publish Ley 254 explainers (Matapitti, Fábrega Molino, IPAL, OMC Group).

Market size: **unverified**. My estimate is several hundred RA firms, heavily concentrated in the top tier.

**Risks:**
- Confidentiality. Law firms may require local hosting or on-prem, and Ley 81/2019 data protection applies.
- Concentration: the large firms probably have in-house systems.
- Seasonal usage means churn risk.
- DGI can change the template from year to year.

**Kill condition:**
Abandon if 10 interviews with small and mid-size RAs show an average of fewer than 300 entities per firm and that their existing tools already handle the cycle. Also abandon if the DGI moves to per-entity, API-based or prefilled declarations that remove the Excel step.

**Score:** 6.5/10. Breakdown: mandatory 10, pain 7, frequency 5 (an annual peak plus ongoing custody and BO work), competition gap 7, distribution 6, MVP simplicity 8.

**Sources:**
- DGI, Agente Residente FAQ: https://dgi.mef.gob.pa/Preguntas/AgenteR
- DGI instructivo: https://dgi.mef.gob.pa/Ti/nuevostramites/Instructivo-Registro-Contable-Agentes-Residentes.pdf
- DGI DJRC 2024 instructivo V2: https://dgi.mef.gob.pa/Ti/nuevostramites/DJRC%202024%20Instructivo%20de%20Registro%20Contable%20de%20Agentes%20Residentes%20V%202%20mb.pdf
- DGI e-Tax manual for resident agents: https://dgi.mef.gob.pa/Ti/nuevostramites/Manual%20de%20Usuario%20para%20agente%20residente%20contribuyente_V2.pdf
- DGI news, 19 Jun 2025: https://dgi.mef.gob.pa/New/news.php?n=281
- DGI on X: https://x.com/DGIpma/status/1943845391285252440
- EY on DE 42: https://www.ey.com/es_ce/technical/tax/tax-alerts/panama-decreto-ejecutivo-42-establece-la-obligacion-de-mantener-registros-contables-para-determinadas-personas-juridicas-y-dicta-otras-disposiciones
- EY on the extension: https://www.ey.com/es_ce/technical/tax/tax-alerts/panama-los-agentes-residentes-tendran-hasta-el-31-de-diciembre
- Forvis Mazars: https://www.forvismazars.com/co/es/acerca-de-nosotros/noticias-publicaciones-y-media/nuestras-publicaciones/tax-legal/extension-del-plazo-para-la-declaracion-jurada
- Asuntos Legales (Jun 2026): https://www.asuntoslegales.com.co/analisis/mario-felipe-tovar-aragon-3290321/registros-contables-de-las-sociedades-panamenas-ley-254-de-2021-3290307
- PwC on Ley 254: https://www.pwc.com/ia/es/publicaciones/Noticias-Tax-Legal/PDF/Tax-and-Legal-News-Ley-254-de-2021.pdf
- Matapitti: https://www.matapitti.com/law-254-on-accounting-records/
- Fábrega Molino: https://fmm.com.pa/accounting-records-and-registry-of-final-benificiaries-law-254/
- SSNF Manual de Registro AR: https://ssnf.gob.pa/wp-content/uploads/2024/05/Manual-de-Registro-AR.pdf
- SSNF due-diligence guide: https://ssnf.gob.pa/wp-content/uploads/2022/11/Guía-de-debida-diligencia-para-el-adecuado-cumplimiento.pdf
- Ley 129/2020: https://cnbc.mef.gob.pa/wp-content/uploads/2022/10/ley-129-de-2020.pdf
- Panamá América on the SSNF registration drive: https://www.panamaamerica.com.pa/economia/ssnf-anuncia-registro-masivo-de-agentes-residentes-1218290

---

### Opportunity: CUSCAR D11A manifest filing for small Panamanian cargo agents (Excel/pre-alert → SIGA)

**Industry:**
Freight forwarding: NVOCCs, consolidators and *agentes de carga* handling sea cargo into or through Panama, including the Colón ports.

**Buyer:**
The documentation or operations manager, or the owner, at small and mid-size freight agencies with no in-house EDI capability.

**Trigger / Why now:**
- From **23 March 2026**, ANA requires all shipping lines **and cargo agents** to transmit the cargo manifest and transport documents (bills of lading) through SIGA.
- The format is **UN/EDIFACT CUSCAR D11A**, with mandatory fields, sent **at least 24h before the vessel arrives**.
- Manifest access under "Regla 1" in SIGA was switched off on that date. Filers must now transmit under Regla 2 (CUSCAR).
- Penalties fall under Ley 30 of 8 Nov 1984. The mandate had been pending since 2022.
- ANA publishes a CUSCAR SIGA D11A implementation guide (v1.4.7, per a search extract).

**Current workflow:**
1. The origin agent emails a pre-alert as PDF or Excel (house BLs, packing list).
2. A clerk re-keys the data into the forwarding system or a spreadsheet.
3. Before March 2026, the manifest could be entered through SIGA's Regla 1 route. That this was a manual or web route is my inference (**unverified**). Now a CUSCAR message is required, either in-house or through a provider.
4. Exceptions: amendments, late pre-alerts, master/house mismatches, rejected messages (**inferred, unverified**).

**Pain:**
There is a hard deadline on every vessel call, with sanctions, and small agencies can't produce EDIFACT from Excel. Hours and penalty amounts are **unverified**.

**Existing solutions:**
- **Global eTrade Services**, which explicitly markets "Panama cargo manifest filing solutions for mid/small size carriers and cargo agents". This is the main competitor; its pricing is unknown.
- CargoWise, through integration partners such as IntegrationGo. Its Panama coverage is mentioned in search extracts.
- Magaya and Descartes EDI (Panama SIGA coverage **unverified**).
- EDICOM, which is present in Panama as an e-invoicing PAC; whether it offers CUSCAR is **unverified**.
- Carriers' own EDI, which covers master BLs only.

**The gap:**
The gap is narrower than it first looked. What may remain open:
- Spanish-language, local, per-manifest pricing.
- Automatic parsing of pre-alert PDFs and Excel files into D11A.
- An ETA-minus-24h deadline board and amendment handling.

That only matters if Global eTrade and CargoWise partners turn out to be expensive or English-only (**to verify**).

**Possible product:**
The agent uploads or forwards a pre-alert. The tool maps it to SIGA D11A fields, validates it, generates the CUSCAR message, then transmits it or hands back an upload-ready file, and tracks acknowledgements and deadlines.

**MVP:**
An Excel template, a validator and a D11A generator for sea-import house manifests, plus a deadline board, piloted with 3 design partners.

**Pricing hypothesis:**
USD 6–12 per manifest with a USD 99/month minimum (**estimate**; needs benchmarking against Global eTrade).

**How to find first customers:**
- The FIATA directory for Panama.
- Members of the Asociación Panameña de Agencias de Carga (APAC).
- Lists of the top Panama freight forwarders (for example bansarchina.com).
- ANA's register of cargo agents (public availability **unverified**).

Market size: **unverified**. My estimate is low hundreds of agents.

**Risks:**
- The mandate is already six months old, so most agents have probably picked a provider by now.
- A direct competitor exists.
- SIGA may require certification for third-party transmitters (**unverified**).
- ANA's planned SIGA redesign could change the requirements.

**Kill condition:**
Abandon if Global eTrade, a CargoWise partner or a local bureau charges ≤USD 5 per manifest with Spanish support, if fewer than about 100 agents file house-level data, or if third-party transmission requires certification a solo founder can't get.

**Score:** 5.5/10. Breakdown: mandatory 10, frequency 9, pain 8, competition 4, timing 4, distribution 6, MVP 6.

**Sources:**
- ANA, 20 Mar 2026: https://www.ana.gob.pa/index.php/2026/03/20/aduanas-implementa-medidas-para-mayor-trazabilidad-de-la-carga/
- ANA notice deactivating Regla 1 (10 Mar 2026): https://www.ana.gob.pa/index.php/2026/03/10/comunicado-desactivacion-del-acceso-a-la-manifestacion-de-carga-maritima-bajo-la-regla-1-en-el-siga/
- ANA SIGA-PORTCEL: https://ana.gob.pa/w_ana/index.php/servicios-y-plataformas/siga-portel
- ANA SIGA guide for shipping lines: https://www.ana.gob.pa/wp-content/uploads/cursos_seminarios/Guia_Navieras_JS_VERSION_1.0.pdf
- Panamá América: https://www.panamaamerica.com.pa/provincias/aduanas-activa-partir-de-este-lunes-una-medida-clave-para-seguridad-logistica-1259866
- Nexo: https://nexo.la/panama-obliga-envio-electronico-de-manifiestos-maritimos-desde-el-23-de-marzo/
- La Estrella: https://www.laestrella.com.pa/economia/aduanas-panama-nueva-regla-de-trazabilidad-maritima-sera-obligatoria-desde-marzo-PD20891079
- Competitor, Global eTrade Services: https://globaletrade.services/blogs/panama-cargo-manifest-filing-solutions-mid-small-size-carriers-and-cargo-agents
- Global eTrade Services: https://globaletrade.services/blogs/cargo-manifest-panama
- CargoWise partner: https://cargowise.com/partners/find-a-partner/eb-commerce
- FIATA directory, Panama: https://fiata.org/directory/pa/
- Context, Colón transit digitization (Aug 2026): https://thelogisticsworld.com/comercio-internacional/aduanas-de-panama-agilizan-el-traslado-de-mercancias

---

### Opportunity: AML "cash-week" monitor + UAF report prep + SSNF self-assessment kit for real-estate brokers and developers

**Industry:**
Real-estate brokerage and residential development. Both are non-financial obligated subjects under Ley 23/2015, regulated by DE 35/2022.

**Buyer:**
The compliance officer (often the owner, or an outsourced officer) at licensed brokerages and *promotoras*.

**Trigger / Why now:**
- **SSNF Res. S-022-2025 (21 Mar 2025)** requires non-financial obligated subjects to complete risk self-assessment questionnaires.
- The SSNF sector guide requires reporting cash transactions **≥B/.10,000, either in one transaction or accumulated within a working week**, via the UAF online platform.

**Current workflow:**
1. Collect KYC/DD documents per the SSNF guide at reservation or promise of sale.
2. Track deposits and instalments in a sales spreadsheet or ERP.
3. Manually add up cash per client per working week, and fill in the UAF form when the total reaches the threshold.
4. Complete the self-assessment, keep the manual and training records, and prepare for SSNF inspections.

**Pain:**
- Inspection and sanction risk (amounts **unverified**).
- Weekly aggregation across instalments is manual.

**Existing solutions:**
- Generic AML/KYC screening SaaS (vendors **unverified for Panama non-financial subjects**; search found only generic content).
- Big-4 and boutique compliance consultants (for example, KPMG publishes a guide to these obligations).
- Outsourced compliance officers.

**The gap:**
The Panama-specific pieces that generic screening tools skip: the working-week cash-aggregation rule, data prepared for the UAF form, and an evidence pack for S-022-2025, all inside the developer's sales flow.

**Possible product:**
A weekly ledger upload that flags clients crossing B/.10,000, prefilled UAF report data, a DD checklist per buyer, and a self-assessment workspace.

**MVP:**
CSV payment-ledger import → threshold flags → printable report data sheet → document checklist.

**Pricing hypothesis:**
USD 79–199/month for brokers; USD 300–600/month for developers.

**How to find first customers:**
- The Junta Técnica de Bienes Raíces licensee list (public availability **unverified**).
- The ACOBIR and CONVIVIENDA associations (names from background knowledge, **unverified**).
- The SSNF registration of obligated subjects.

**Risks:**
- This is close to the "generic KYC" trap.
- Most payments go by bank transfer, so there may be few cash reports.
- Consultants bundle tools into their service.

**Kill condition:**
Abandon if a typical broker or developer files fewer than 5 cash reports a year and consultants already handle the DD files.

**Score:** 5/10.

**Sources:**
- SSNF, real estate and construction guide: https://ssnf.gob.pa/wp-content/uploads/2020/03/Inmobiliario-y-Construcción.pdf
- Res. S-022-2025: https://www.organojudicial.gob.pa/uploads/blogs.dir/2/2026/06/728/resolucion-n0-s-022-2025-de-21-de-marzo-de-2025-uso-de-cuestionarios-de-autoevaluacion-para-medir-los-riesgos-asociados-al-blanqueo-de-capitales-63-66.pdf
- KPMG, obligations of non-financial obligated subjects: https://assets.kpmg.com/content/dam/kpmg/pa/pdf/GRCS-Obligaciones-SONF-en-Panama.pdf
- PwC on DE 35/2022: https://pwc.com/ia/es/publicaciones/Noticias-Tax-Legal/Tax-and-Legal-2022/Tax-and-Legal-News-Decreto-Ejecutivo-35-de-2022-que-reglamenta-la-Ley-23-de-2015.pdf
- La Estrella on the registration process: https://www.laestrella.com.pa/economia/establecen-proceso-registro-sujetos-financieros-BKLE473552

---

## Rejected after competitor research

- **E-invoicing for SMEs forced off the free DGI invoicer.** Res. 201-6299, effective 1 Jan 2026, limits the free invoicer to taxpayers with ≤B/.36,000 income and ≤100 documents a month. **Killed by** the PAC market (EDICOM and others), Alegra, Softland and the free DGI invoicer.
  - Sources: https://blog.alegra.com/panama/facturacion-electronica-panama/ , https://edicomgroup.com/es/blog/estado-factura-electronica-panama , https://edicom.mx/pac-panama , https://softland.com/pa/?p=14071
- **Purchases-report (Form 43) reconciliation from received e-invoices.** **Killed:** Form 43 applies only to taxpayers with ≥B/.1M income or ≥B/.3M assets, who already run ERPs.
  - Source: https://dgi.mef.gob.pa/Ti/nuevostramites/Instructivo%20Informe%2043.pdf
- **CSS reform payroll (Ley 462/2025).** Employer quota rises to 13.25% from April 2025, 14.25% from March 2027 and 15.25% from March 2029. **Killed by** SIPE, which computes the quota itself, plus existing payroll and EOR providers (Deel).
  - Sources: https://www.tvn-2.com/nacionales/reformas-a-la-css-aumento-escalonado-cuota-patronal-caja-de-seguro-social_1_2182102.html , https://www.deel.com/es/blog/css-panama-seguridad-social-eor/
- **APA food-import notification helper.** **Killed by** customs brokers who bundle the SIT notifications, and by APA's own PDA module and planned single window.
  - Source: https://www.laestrella.com.pa/economia/sistema-movil-optimizara-las-verificaciones-de-alimentos-importados-en-panama-HB11892984
- **Hotel / Airbnb guest registration.** **Killed:** no Panama mandate found. Peru shows the likely end state if one appears: a free Migraciones platform plus Chekin.
  - Sources: https://www.gob.pe/110824-todo-sobre-el-registro-de-huespedes-extranjeros , https://chekin.com/blog/guia-de-registro-en-hospederias-obligaciones-legales-2025/
- **Fire-contractor → Bomberos submission router.** **Killed or parked:** DINASEPI Online (launched 25 Apr 2026; OG DG-BCBRP 120-2025) is the government's own owner- and professional-facing portal for plan review, occupancy and fire-safety certificates, and it is explicitly "cero intermediarios". There is no evidence that contractors upload anything.
  - Sources: https://www.bomberos.gob.pa/2026/04/25/aig-y-bomberos-lanzan-dinasepi-online-tramites-digitales-mas-transparencia-y-cero-intermediarios/ , https://www.prensa.com/sociedad/bomberos-lanzan-nueva-plataforma-que-agiliza-los-procesos-de-inspeccion-y-que-busca-eliminar-las-coimas/

## Attractive problem, poor distribution

- **Pharmacy controlled-substances report.** Since Q1 2024 every pharmacy has emailed a quarterly report to monitoreoanalisis@minsa.gob.pa. It is mandatory and manual, but quarterly, a small market with low willingness to pay, the chains have their own systems, and the DNFD is modernizing its portal.
  - Sources: https://www.minsa.gob.pa/sites/default/files/publicacion-general/comunicado_de_informes.pdf , https://www.laestrella.com.pa/panama/informacion-util/minsa-estrena-web-para-tramites-medicamentos-y-alertas-sanitarias-PA16707686
- **Wastewater effluent characterization (COPANIT 35-2000 / 39-2000).** The work runs through labs and consultants and is tied to environmental impact studies (EIA). Buyers are scattered, and no recurring portal was found.
  - Source: https://documentoesia.miambiente.gob.pa/12796.pdf
- **Fire-protection contractors' certificate and renewal tracking.** A real field-service need, but a small market with low willingness to pay, now that DINASEPI Online sidelines intermediaries.

## Too competitive

- **E-invoicing (PACs).** See the rejected list above.
- **PH / condo administration** under Ley 284/2022. The regulations are still pending (MIVIOT targets 2026), and Propiedata already markets itself in Panama. Watch for whatever administrator registration the regulations create.
  - Sources: https://www.laestrella.com.pa/economia/reglamentacion-de-la-ley-de-propiedad-horizontal-se-proyecta-para-2026-FI20937929 , https://www.g2.com/products/propiedata/discuss
- **CUSCAR manifest filing**, if interviews show that Global eTrade or CargoWise partners already serve small agents cheaply.

## Leads to verify next

- What Res. SBP-RG-PSO-R-2025-00671 requires of non-bank financial obligated subjects (remittance firms, finance companies).
  - Source: https://www.superbancos.gob.pa/documentos/leyes_y_regulaciones/resolucion_prevencion_RG/2025/Resolucion-RG-PSO-2025-00671.pdf
- Whether the SSNF publishes its list of resident agents, and how many entities each RA holds.
- Global eTrade Services' pricing and language support for Panama manifest filing.
