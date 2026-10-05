# Ecuador: Indie-Hacker Opportunity Research

Research date: 2026-10-04/05. Mid-size market, 12 web searches used (WebSearch only, no WebFetch). Market counts marked "estimate" or "unverified" could not be confirmed from an official source in this pass.

**Accessibility:** Ecuador is not sanctioned and uses the USD, so card and Stripe-style payments are easy to set up. A foreign solo founder can legally sell SaaS there. Two practical points: Spanish-language support is mandatory, and anything that issues tax documents must comply with SRI e-invoicing (the SRI is Ecuador's tax authority). Since July 2026 e-invoicing providers must register with the SRI ([Teleamazonas](https://www.teleamazonas.com/actualidad/noticias/economia/sri-dispone-registro-obligatorio-proveedores-facturacion-electronica-ecuador-124276/)), so build around invoicing rather than issuing invoices yourself.

---

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Cocoa / coffee collection centres (acopiadores) and small exporters | Linking purchase lots to farms registered for the EU deforestation rule (EUDR) and preparing due-diligence packages | **Shortlist** | EU dates are now fixed (30 Dec 2026 for most operators, 30 Jun 2027 for micro and small ones). The state registers farms in GUIA/SURO, but nothing free connects the middlemen's lots to those farms. |
| Pharmacies (controlled medicines) | ARCSA monthly report on controlled-substance movements, plus retained special prescriptions | **Shortlist (weak)** | Mandatory every month and still sent by email on a signed form, but most outlets belong to chains or franchises and willingness to pay is low. |
| Construction subcontractors | Occupational safety (SST) paperwork under the new construction safety regulation MDT-2025-122 and Decree 255/MDT-2024-196 | **Shortlist (weak)** | The regulation is new (Sept 2025) and the paperwork repeats per site, but consultants and generic inspection apps already serve it. |
| Hazardous-waste generators and managers | Annual MAATE declaration of hazardous/special waste | Reject | It is annual and environmental consultants already file it. |
| Agro-input / veterinary stores | Agrocalidad GUIA registration and post-registration controls | Reject | Registration is one-time with a free annual update. I found no recurring reporting burden. |
| Shrimp farms / packers | Movement guides, traceability and export health certificates | Poor distribution | Shrimp is concentrated in large integrated exporters that run in-house ERPs, and I could not verify the details of the reporting system. |
| All SMEs: tax | SRI e-invoicing with immediate transmission (Jan 2026), and the rule that VAT returns are valid only with full payment (Jun 2026) | Too competitive | Dozens of e-invoicing vendors, the SRI's free invoicing tool, and accounting software already cover it. |
| All SMEs: data protection (LOPDP) | Appointing and registering a data protection officer with the SPDP (deadline 31 Dec 2025) | Reject | Essentially a one-time task, and law firms plus GRC tools already sell it. |
| Small-scale mining | SRI mining information form (formerly "Anexo Minero"), production reports | Poor distribution | The sector is partly informal and reputationally risky, and buyers are hard to reach. |

---

## Opportunity: Lot-to-farm traceability bridge for Ecuadorian cocoa and coffee middlemen

**Industry:**
Cocoa and coffee: collection centres (acopiadores), associations and cooperatives, and small and mid-size exporters.

**Buyer:**
The owner or administrator of a collection centre or cooperative that buys beans from many smallholders and sells to exporters. A secondary buyer is the compliance/quality lead at a small or mid-size exporter selling to EU importers.

**Trigger / Why now:**
Regulation (EU) 2025/2650 (published 23 Dec 2025) fixed EUDR application at **30 Dec 2026** for most operators and **30 Jun 2027** for micro and small ones. Ecuador's Ministry of Agriculture (MAG) launched SURO in April 2025, and Agrocalidad registered more than 100,000 cocoa and coffee producers in GUIA through the "Mi finca, mi huella" campaign. Farm geolocation is now held by the state. What remains is proving that each export lot came only from registered, deforestation-free farms. EU buyers will start asking Ecuadorian suppliers for this in Q4 2026.

**Current workflow:**
1. The collection centre buys wet or dry beans from dozens of farmers each week. It issues an SRI purchase settlement (liquidación de compra) or keeps a paper or Excel log.
2. Someone has to look up each farmer's GUIA/SURO registration and plot code by hand, or the link is never made.
3. Lots are mixed, dried and sold to an exporter. The exporter asks for a list of source farms with geolocation, usually in Excel by email.
4. The exporter re-keys or merges these lists, checks deforestation status, and assembles data for the EU importer's due-diligence statement (DDS) in TRACES.
5. When a farmer is unregistered or a volume doesn't add up (a farm sells more than its area could produce), it is handled by phone or WhatsApp.

**Pain:**
Training programmes reached more than 2,000 cocoa-chain actors in nine provinces and about 1,800 people who register producers, because collection centres and cooperatives lack the capacity to do this ([AL-INVEST Verde](https://alinvest-verde.eu/en_gb/mas-de-2-000-personas-de-nueve-provincias-de-ecuador-se-forman-en-trazabilidad-y-eudr/)). Press coverage lists traceability as a pending task to protect Ecuadorian exports to Europe ([Expreso](https://www.expreso.ec/economia-y-negocios/ecuador-tareas-pendientes-blindar-ingreso-oferta-exportable-agricola-europa-288100.html)). If a lot can't be traced, the EU buyer won't take it or pays a lower price.

**Existing solutions:**
- Government GUIA/SURO (Agrocalidad/MAG): free farm registration and geolocation, but it does not manage the middlemen's purchases or lots.
- International EUDR/traceability platforms: osapiens (has a Spanish-language EUDR FAQ for Latin American exporters), Koltiva, Farmforce, Satelligence. They sell mainly to large exporters and multinationals.
- Programmes funded by importers or development agencies (GIZ, AL-INVEST Verde, WWF guides) that hand tools or templates to cooperatives.
- Excel plus consultants.

**The gap:**
No cheap Spanish-language tool sits at the collection-centre level. None ties each purchase (already documented as an SRI liquidación de compra or receipt) to a farmer's GUIA/SURO registration, keeps a running volume-versus-area check per farm, and exports a per-lot farm list with geolocation in the format exporters and importers' DDS tools need. Enterprise platforms are licensed to the exporter, not to the thousands of middlemen upstream. *Caveat (unverified): it is not confirmed whether GUIA exposes any API or bulk export, so the integration may have to be manual import or browser automation.*

**Possible product:**
A mobile-friendly purchase book for collection centres. It records each purchase against a registered farm, flags unregistered farmers and over-volume farms, and generates per-lot traceability files (GeoJSON plus a farm list) for the exporter. It could also produce the liquidación de compra through a registered SRI e-invoicing provider.

**MVP:**
A web app with these pieces:
- farmer list imported from a GUIA export or CSV
- purchase entry: date, farmer, kg, quality
- lot builder that groups purchases into a lot
- per-lot export in GeoJSON and Excel, in the format one or two named exporters ask for
- "risk" flags for unregistered farmers and farms selling more than their area could produce

**Pricing hypothesis:**
USD 30–60/month per collection centre. An exporter plan for USD 200–400/month would onboard its own supplier collection centres.

**How to find first customers:**
- Lists of collection centres and cooperatives from the AL-INVEST Verde / GIZ training cohorts
- ANECACAO (the cocoa exporters' association) member exporters
- Coffee sector associations
- Agrocalidad's registers of operators
- Selling through 2–3 exporters who push the tool to their suppliers

**Risks:**
- Exporters or multinationals may hand out free tools (Koltiva-type apps) to their suppliers.
- The EU or Ecuador may simplify further; for example, the simplified one-time declaration for micro and small primary operators in low-risk countries cuts the work needed.
- GUIA access may be closed, with no API or export.
- Collection centres pay very little.

**Kill condition:**
Interviews with 10 collection centres show that their exporters already give them a free app, or that exporters do all the farm matching themselves.

**Score:** 6/10

**Sources:**
- https://www.eldiario.ec/ecuador/ecuador-registrara-a-mas-de-100-000-productores-de-cacao-y-cafe-para-cumplir-normas-de-la-union-europea-09092025/
- https://www.eldiario.ec/manabi/ministerio-de-agricultura-presento-el-sistema-de-registro-para-exportacion-bajo-normativa-europea-11042025/
- https://www.expreso.ec/actualidad/economia/agro-ecuador-nuevo-sistema-registro-exportar-ue-238477.html
- https://alinvest-verde.eu/en_gb/mas-de-2-000-personas-de-nueve-provincias-de-ecuador-se-forman-en-trazabilidad-y-eudr/
- https://primicias.ec/economia/ecuador-trazabilidad-cadena-productiva-cacao-exportaciones-europa-76829
- https://www.eloriente.com/articulo/ecuador-exporta-cafe-con-certificacion-libre-de-deforestacion-por-mas-de-usd-17-millones/56426
- https://vinciworks.com/blog/eudr-delayed-again-what-changed-what-is-now-fixed-and-what-businesses-should-do-in-2026/
- https://www.stibbe.com/publications-and-insights/the-amended-eudr-what-has-changed-and-what-has-remained
- https://osapiens.com/es/eudr-for-exporters-faq
- https://www.giz.de/sites/default/files/media/els-document/2026-06/gui-uea-sdd-eudr-para-productores-libres-de-deforestacio-uen_0.pdf

---

## Opportunity: ARCSA monthly controlled-medicines report generator for independent pharmacies

**Industry:**
Pharmacies and drugstores (boticas).

**Buyer:**
The owner or responsible pharmacist (químico farmacéutico responsable) of an independent pharmacy or a small chain of 2–10 outlets.

**Trigger / Why now:**
This is not a new rule, but enforcement is rising: ARCSA (the health regulator) closed pharmacies for selling psychotropics in Cuenca and Guayaquil in late 2025 and ran operations near schools. The monthly report is still sent **by email to the regional office, on a format signed by the responsible pharmacist and the legal representative, within the first 10 business days of each month**.

**Current workflow:**
1. The pharmacy sells controlled medicines only against a special prescription, which it keeps on paper.
2. At month-end, someone pulls opening stock, purchases, sales and closing stock for each controlled product from the POS or a notebook.
3. They fill in the ARCSA Excel/PDF monthly format, reconcile it against the retained prescriptions, sign it and email it to the regional coordination office.
4. Losses or theft require a separate stock write-off request.

**Pain:**
- Mandatory monthly filing on official forms, with the official procedure pages linked below.
- Pharmacies have been closed for psychotropic irregularities.
- Reconciling stock and prescriptions by hand is error-prone.

**Existing solutions:**
- Pharmacy POS and e-invoicing software. Generic SRI invoicing apps (FacturaHero, GoTribux, Facturec) offer no ARCSA-specific features.
- Chain and franchise systems: Difare/Cruz Azul, Fybeca/Sana Sana and others likely handle this centrally (unverified).
- Accountants and pharmacists filling the form in Excel.

**The gap:**
A cheap add-on that reads the pharmacy's existing sales and purchase exports (or SRI XML invoices), maintains a register of controlled products and prescriptions, and fills in the ARCSA monthly format automatically, with a reconciliation check.

**Possible product:**
"Upload your month's SRI XML invoices and purchase invoices and get the ARCSA monthly report plus a prescription register." Matching to controlled products would run off the ARCSA controlled-substances product list.

**MVP:**
1. A parser for SRI XML sales and purchase invoices.
2. A controlled-product mapping table.
3. The ARCSA format generated in Excel or PDF.
4. Flags for sales without a recorded prescription.

**Pricing hypothesis:**
USD 10–20/month per outlet. The price ceiling is low.

**How to find first customers:**
- ARCSA's register of authorised establishments (permisos de funcionamiento)
- Provincial pharmacist associations (colegios de químicos farmacéuticos)
- Pharmacy distributors' sales reps

**Risks:**
- Most outlets belong to chains or franchises that have central systems.
- ARCSA may launch an electronic reporting platform.
- Very low willingness to pay.
- Number of independent pharmacies is unverified.

**Kill condition:**
Fewer than about 2,000 independent outlets exist, or ARCSA announces an online system that takes data directly from the POS.

**Score:** 4/10

**Sources:**
- https://www.gob.ec/arcsa/tramites/reporte-movimientos-mensuales-farmacia
- https://www.gob.ec/arcsa/tramites/entrega-reportes-mensuales-manuales-medicamentos-contengan-sustancias-catalogadas-sujetas-fiscalizacion
- https://www.gob.ec/arcsa/tramites/autorizar-baja-inventarios-medicamentos-contengan-sustancias-catalogadas-sujetas-fiscalizacion-hurtos-robos-derrames-perdidas
- https://elmercurio.com.ec/cuenca/2025/12/02/farmacia-cuenca-clausura-psicotropicos/
- https://www.extra.ec/noticia/actualidad/vender-medicinas-vencidas-psicotropicos-arcsa-clausura-farmacia-guayaquil-130452.html

---

## Opportunity: Per-site safety file for small construction contractors (MDT-2025-122)

**Industry:**
Construction contractors and subcontractors, public and private works.

**Buyer:**
The owner, site resident engineer (residente de obra) or part-time safety technician at a small contractor or subcontractor (roughly 5–50 workers) bidding for public works or working under larger builders.

**Trigger / Why now:**
- Executive Decree 255 (May 2024) introduced the new Occupational Safety and Health Regulation.
- MDT-2024-196 (Oct 2024) added the Labour Ministry's control and sanctions rules: registration on the ministry platform, safety officers, a risk-prevention plan, and health surveillance, with 12-month deadlines for employers of 1–10 workers.
- MDT-2025-122 (8 Sept 2025, published 18 Sept 2025) is a dedicated construction regulation that sets duties for employers, builders, contractors, subcontractors, site supervisors (fiscalizadores) and resident engineers.

**Current workflow:**
1. For each site, the contractor assembles worker induction and training records, PPE delivery logs, work permits (heights and similar), and inspection checklists, mostly on paper or in Excel/WhatsApp photos.
2. The main contractor, site supervisor or ministry inspector asks for these documents. Subcontractors re-send them per site.
3. The company-level safety data is entered separately on the Labour Ministry's online platform.

**Pain:**
Construction is singled out as the sector with the most workplace accidents. The new rules spread liability across contractors and subcontractors, and inspections can bring sanctions.

**Existing solutions:**
- Local occupational-safety consultancies, which are very numerous.
- Generic inspection and checklist apps such as SafetyCulture.
- Spanish-language safety and quality-management software (Isotools-type).
- Main contractors' own document portals.

**The gap:**
A tool for subcontractors of the kind "one worker roster, then the per-site safety file auto-built to the MDT-2025-122 checklist." It is possible, but differentiating it from consultants and checklist apps is hard.

**Possible product:**
A mobile safety file per site for the MDT-2025-122 checklist: worker roster with training and PPE delivery history, digital work permits, and a per-site PDF dossier for the main contractor or inspector.

**MVP:**
A checklist template set for MDT-2025-122, the worker roster, and PDF dossier export.

**Pricing hypothesis:**
USD 25–50/month per company.

**How to find first customers:**
- SERCOP (public procurement) registry of construction suppliers
- Construction chambers (Cámaras de la Construcción) in Quito and Guayaquil
- Occupational-safety consultants as resellers

**Risks:**
Consultants bundle paperwork with their service, and generic apps are cheap.

**Kill condition:**
Interviews show that inspectors and main contractors accept consultant-produced paper files, and that subcontractors won't pay for software.

**Score:** 4/10

**Sources:**
- https://nmslaw.com.ec/blog/2025/09/14/reglamento-seguridad-laboral-construccion-ecuador/
- https://www.lexis.com.ec/noticias/ministerio-del-trabajo-expide-nuevo-reglamento-para-seguridad-laboral-en-la-construccion
- https://nmslaw.com.ec/blog/2024/05/13/reglamento-seguridad-salud-trabajo-ecuador/
- https://ey.com/content/dam/ey-unified-site/ey-com/es-ec/technical/tax/documents/ey-labor-alert-oct15-normas-de-seguridad-salud.pdf
- https://procuraduria.utpl.edu.ec/NormativaExterna/ACUERDO%20MINISTERIAL%20Nro.%20MDT-2024-196.pdf

---

## Rejected after competitor research

- **Hazardous-waste annual declaration (MAATE):** the filing is annual, environmental consultants and licensed waste managers do it as part of their service, and frequency is too low. ([gob.ec](https://www.gob.ec/mae/tramites/emision-pronunciamiento-declaracion-gestion-anual-residuos-desechos-peligrosos-especiales-marco-responsabilidad-extendida-productor))
- **Data-protection officer registration and LOPDP compliance:** the main deadline (31 Dec 2025) was essentially one-time, and it is served by law firms (for example NMSLaw, EY) and GRC tools. ([NMSLaw](https://nmslaw.com.ec/blog/2025/12/15/recordatorio-plazo-delegado-proteccion-datos-personales-ecuador/))
- **Agro-input store compliance (Agrocalidad):** registration is one-time with a free annual update in GUIA, and I found no recurring reporting pain. ([gob.ec](https://www.gob.ec/regulaciones/resolucion-0227-manual-registro-control-post-registro-almacenes))

## Too competitive

- **SRI e-invoicing and real-time transmission (2026), and VAT-with-payment (June 2026):** saturated by local e-invoicing providers (FacturaHero, GoTribux, Facturec, open-source libraries), the SRI's free invoicing tool, and accounting ERPs. ([Primicias](https://www.primicias.ec/economia/transmision-facturas-electronicas-sri-obligatoria-enero2026-112780/), [Expreso](https://www.expreso.ec/actualidad/economia/factura-electronica-2026-el-cambio-obligatorio-del-sri-que-rige-desde-enero-269991.html))

## Attractive problem, poor distribution

- **Shrimp aquaculture traceability and export documents:** a large, high-value sector, but concentrated in integrated exporters with in-house systems. I could not verify the official movement and traceability reporting details.
- **Small-scale mining reporting (SRI mining information form, production reports):** buyers are partly informal and the sector carries reputational and legal risk. ([EY](https://www.ey.com/content/dam/ey-unified-site/ey-com/es-ec/technical/tax/documents/ey-tax-alert-8sept-reformas-al-anexo-minero.pdf))

## Bottom line

Ecuador's best lead is EUDR traceability at the middleman level: the state has registered the farms, but no one links purchases to them, and the EU dates are now fixed. It is only worth doing if exporters are not already handing their collection centres free tools. Everything else is weak or crowded. Next step: interview 10 collection centres and 3 exporters (from ANECACAO members) before writing any code.
