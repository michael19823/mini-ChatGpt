# Mexico: Indie-Hacker Opportunity Research (as of 2026-10-04)

## Verification status (read first)

This track had very limited web access. Only **6 WebSearch calls** went through before the shared session search budget ran out (200 calls across all parallel agents). **WebFetch returned `EGRESS_BLOCKED` for every domain tried** (11 domains: idconline.mx, elcontribuyente.mx, hklaw.com, dsiappsdev.semarnat.gob.mx, imcp.org.mx, kpmg.com, kyc-systems.com, www.gob.mx, regcheq.com.mx, platiica.economia.gob.mx, artu.ai). Tags used below:

- **[V]**: verified this session from search-result summaries that cite the linked URL. The pages themselves could not be opened, so fine details are "per secondary summary".
- **[BK]**: background knowledge (model knowledge to mid-2026), **not** re-verified this session. Products tagged [BK] are real to my knowledge, but their current features and prices were not checked.
- *estimate*: my own number.
- Scores are lowered by about 0.5–1 point for the incomplete competitor checks. Before any interviews, a follow-up pass with search budget should run the kill-condition checks and the "Unverified leads" list at the end.

**Bottom line for Mexico:** the 2025–2026 "why now" comes mainly from three federal mandates:
- **AML for "actividades vulnerables" (LFPIORPI):** verified as crowded.
- **The 2027 electronic working-hours registry:** crowded for generic tools, but open for multi-site and outsourced workforces and for the payroll-bureau channel.
- **Hazardous-waste traceability (draft NOM-160):** best match to the Florida-grease benchmark, but its competitors could not be checked.

## Verified 2025–2026 regulatory calendar

| Date | Event | Status |
|---|---|---|
| 2025-07-16 | LFPIORPI (anti-money-laundering law) reform published in DOF. Adds a risk-based approach and a wider beneficial-owner concept, and new vulnerable activities incl. **real-estate development** ("construction of real estate or subdivision of lots for sale or lease") and virtual assets. Avisos are due by the 17th of the following month | [V] |
| 2026-03-27 | LFPIORPI *Reglamento* reform (in force 2026-03-28): six operational changes for real-estate intermediaries, developers and notaries | [V, secondary summary] |
| 2026-05-01 | LFT decree: 48→40 h week phased in by 2030 (46 h in 2027). **Mandatory electronic registry of each worker's entry/exit from 2027** for all employers (exceptions set by the labor authority). Fines **250–5,000 UMA per affected worker**. Salaries cannot be cut during the transition | [V] |
| 2026-06-09 | PROY-NOM-160-SEMARNAT-2026 (hazardous-waste management plans) published for consultation (closed 2026-08-08). Adds traceability, collection and valorization duties for used oils, batteries, electronics and biological-infectious waste (RPBI) | [V] |
| 2026-08-07 | Acuerdo 115/2026 amends the LFPIORPI general rules, **in force 2026-11-30**: documented risk methodology, ≥3-level client risk rating, re-rating at least every 6 months, mitigation within 12 months of new risks | [V] |
| 2025 data | 167,706 companies registered with SEMARNAT as hazardous-waste generators reported 4,759,096 t; most are microgenerators (<400 kg/yr) | [V] |

UMA 2026 = MXN 117.31. This is derived from the verified figure 8,025 UMA ≈ MXN 941,412.75. So the hours-registry fine range is about **MXN 29,328–586,550 per affected worker** (my calculation; the UMA updates each February).

## Industries screened

| # | Industry | Workflow examined | Verdict | One-line reason | Evidence |
|---|---|---|---|---|---|
| 1 | Hazardous-waste (RPBI / used-oil) collectors | Per-pickup manifest → generator's file → SEMARNAT reporting; NOM-160 traceability | **Opportunity 1** (provisional) | Mandatory paperwork on every job, new draft NOM, and collectors are a licensed population you can list. Competitors not yet checked | [V] trigger, [BK] workflow |
| 2 | Private security & cleaning/facility (REPSE) contractors | 2027 hours registry across many client sites + coverage billing + REPSE evidence | **Opportunity 2** (provisional) | Daily, mandatory, fined per worker. Client-site work breaks generic tools, but the time-tracking market is crowded | [V] trigger, [BK] workflow |
| 3 | Payroll bureaus / accounting firms (despachos) | Client attendance → payroll incidences in NOI/CONTPAQi; keeper of the 2027 registry | **Opportunity 3** (provisional) | Humans re-key incidences; one bureau reaches dozens of employers. Incumbents may build it in | [V] trigger, [BK] workflow |
| 4 | Producers/importers/distributors of oils, batteries, electronics | NOM-160 management-plan (take-back) traceability | Watchlist | Draft rule with unknown final text; buyers are mid-size or large firms | [V] |
| 5 | Micro/small hazardous-waste generators (clinics, dental, vets, auto shops) | Bitácora + manifests + inspection file | Poor distribution | 167k registered, mostly micro, low willingness to pay. Reach them through collectors (Opp 1) | [V] |
| 6 | Real-estate developers / lot subdividers | New LFPIORPI activity: identify every client, aviso ≥8,025 UMA, 6-month risk re-rating | Too competitive (small leftover wedge) | KYC Systems ships a dedicated construction/real-estate AML product; ≥8 vendors on Acuerdo 115/2026 | [V] |
| 7 | Vehicle dealers | LFPIORPI aviso ≥6,420 UMA (≈MXN 753,130) per sale | Rejected | KYC Systems vehicle product; Grant Thornton aviso generator | [V] |
| 8 | Notaries | LFPIORPI avisos + March 2026 Reglamento changes | Rejected | KYC Systems notary product from MXN 5,000/month | [V] |
| 9 | All SME employers | Generic electronic time clock for the 2027 mandate | Too competitive | Biometric clocks and HR/payroll SaaS will absorb the mandate | [BK] |
| 10 | Trucking | SAT Carta Porte CFDI complement | Too competitive | Mandatory since 2024; served by invoicing/PAC and TMS vendors | [BK] |
| 11 | Fuel stations | SAT volumetric controls (RMF Anexos 30/31) | Too competitive | Specialized providers and equipment vendors are entrenched | [BK] |
| 12 | Produce exporters to the US | FSMA 204 traceability records | Deprioritized | FDA moved compliance to July 2028, so the 2026 "why now" is weak | [BK] |

---

## Opportunities

### Opportunity: Digital manifest + client compliance file for hazardous-waste (RPBI / used-oil) collectors

**Industry:**
Hazardous-waste collection and transport: biological-infectious waste (RPBI) from clinics, dental offices, labs and vet clinics; used oil and batteries from auto workshops.

**Buyer:**
Owner or operations manager of a SEMARNAT-authorized hazardous-waste collection and transport company (*estimate*: typically 2–30 trucks). Secondary buyer: the compliance lead at multi-site generators (clinic/lab chains). Market size: the number of authorized collectors was not verified (*estimate*: hundreds nationally). The 167,706 registered generators [V] form the client base those collectors serve.

**Trigger / Why now:**
- PROY-NOM-160-SEMARNAT-2026 (DOF 2026-06-09; consultation closed 2026-08-08) adds traceability, collection and valorization obligations. Obligated groups: large generators; producers/importers/distributors of oils, batteries and electronics; and **generators of biological-infectious waste** [V]. The final NOM's publication date is unknown.
- SEMARNAT's 2026 national inventory: 167,706 registered generator companies, 4.76 Mt in 2025, most of them microgenerators [V]. That is a long tail of small generators served by collectors.

**Current workflow:** [BK / inferred, confirm in interviews]
1. At each generator, the driver fills a multi-part paper *manifiesto de entrega, transporte y recepción*, signed by the generator and the transporter. The treatment or disposal site signs later.
2. Copies are split between generator, transporter and receiver. The generator files its copy (often losing it) for COFEPRIS/PROFEPA/state inspections and also keeps a waste log (bitácora).
3. The collector's office re-keys manifests into Excel to issue CFDI invoices, to track tonnage per client, and to compile its periodic SEMARNAT reports. Treatment/disposal certificates are emailed back later.
4. Before inspections or audits, clients call asking for missing manifests or certificates. Large generators then need the same data again for their annual COA (Cédula de Operación Anual).

**Pain:**
- High-frequency paperwork on every job: weekly or monthly pickups × hundreds of clients per collector.
- A missing manifest copy exposes the generator in inspections.
- Collectors re-key the same data 2–3 times (manifest → Excel → invoice → regulatory report).
- NOM-160 adds traceability expectations.

*No direct complaint evidence was collected (search budget exhausted). This must come from interviews.*

**Existing solutions:**
- Paper manifest books plus Excel.
- Generic route / field-service apps and ERPs [BK].
- In-house systems at large national waste companies [BK, unverified].
- **Mexico-specific waste-manifest software was not checked.** This is the first diligence item.

**The gap:**
No single per-pickup record that does all three:
- (a) serves as the legally required manifest, with signatures, photos and weights;
- (b) lands automatically in each generator's inspection-ready file (manifests + final-disposal certificates + bitácora entries);
- (c) rolls up into the collector's SEMARNAT reporting, its CFDI invoicing and, once NOM-160 is final, the management-plan traceability metrics.

**Possible product:**
"Do the pickup once." Offline-first mobile manifest capture with e-signature and weight/photo evidence, which auto-generates the manifest PDF in SEMARNAT's format. Generators get a free portal holding all manifests and certificates as an inspection binder. The collector gets a dashboard that exports tonnage by client, waste type and period for regulatory reports and invoicing.

**MVP:**
Android app + web, covering two waste streams only (RPBI and used oil):
- manifest form with signature + photos, and a generated PDF;
- per-client portal link sent by WhatsApp or email;
- monthly Excel export per client and per waste code.

No ERP integration at first.

**Pricing hypothesis:**
- MXN 2,500–6,000/month per collector, tiered by trucks or manifests (≈USD 135–325 at an assumed ~MXN 18.5/USD) (*estimate*).
- Optional per-manifest fee of MXN 5–15 for high volume.
- Generator portal free, or MXN 99–199/month premium for multi-site chains.

**How to find first customers:**
- SEMARNAT's authorization procedure for hazardous-waste transport is public [V]. SEMARNAT also publishes lists of authorized companies by activity [BK: verify the current list is still downloadable].
- State environmental agencies' registries of special-handling-waste carriers [BK].
- Collectors' clinic customers as a referral channel (dental and veterinary associations).

**Risks:**
- Legal validity of electronic manifests and signatures (SEMARNAT sets the format).
- SEMARNAT could launch its own e-manifest platform.
- The final NOM-160 may change scope or timing.
- Small collectors are price-sensitive; big collectors build in-house.

**Kill condition:**
Any one of these:
1. SEMARNAT accepts only paper manifests, or announces a mandatory free government e-manifest system.
2. Diligence finds a Mexican waste-compliance SaaS already used by more than ~20% of authorized collectors.
3. Ten collector interviews show willingness to pay below MXN 1,500/month.

**Score:** 6/10 (provisional)

Pain 6 · Frequency 9 · Mandatory 9 · Fragmentation 5 (federal hazardous rules + state special-handling rules) · Competition (unknown) 5 · Gap 6 · Buyer access 7 · Willingness to pay 5 · MVP 8 · Distribution 6.

**Sources:**
- SEMARNAT, Comunicado Inventario Nacional de Residuos Peligrosos (2026): https://dsiappsdev.semarnat.gob.mx/datos/portal/publicaciones/2026/Comunicado_Inventario_RP.pdf
- PROY-NOM-160-SEMARNAT-2026, draft text (Economía regulatory-standards repository): https://platiica.economia.gob.mx/wp-content/uploads/sites/2/historialdocumental/PROY-NOM-160-SEMARNAT-2026.pdf
- Holland & Knight on SEMARNAT redefining hazardous-waste management obligations (15 Jun 2026): https://www.hklaw.com/en/insights/publications/2026/06/la-semarnat-redefine-las-obligaciones-para-el-manejo
- Hogan Lovells, new NOM on hazardous-waste management plans published for consultation: https://hlc.com/es/publications/new-nom-on-hazardous-waste-management-plans-publication-for-public-consultation
- Milenio, "Nueva NOM obligaría a empresas a fortalecer el manejo de residuos peligrosos": https://www.milenio.com/negocios/nom-obligara-empresas-mejorar-manejo-residuos
- Hazardous-waste transport authorization procedure (secondary aggregator): https://papelea.com/mx/secretaria-de-medio-ambiente-y-recursos-naturales/autorizacion-para-transporte-de-residuos-peligrosos-gobmx

---

### Opportunity: Multi-site electronic hours registry for security & cleaning contractors

**Industry:**
Private security guard services; cleaning and facility services (specialized-service providers registered in REPSE).

**Buyer:**
Operations director or HR/payroll manager at private security or cleaning companies with 50–2,000 workers deployed across client sites. Market size was not verified; it can be sized from the REPSE and private-security registries (see below).

**Trigger / Why now:**
- The LFT decree (DOF 2026-05-01) lowers the weekly maximum from 48 h to 40 h by 2030 (46 h in 2027) [V].
- **From 2027 every employer must electronically record each worker's entry and exit, keep it, and show it on request.** Fines are 250–5,000 UMA per affected worker (≈MXN 29k–587k at the 2026 UMA) [V].
- Salaries cannot be reduced during the transition [V], so every hour above the falling cap becomes paid overtime.
- Long-shift industries are most exposed. 12x12 and 24x24 shift patterns are common in Mexican private security [BK].

**Current workflow:** [BK / inferred]
1. Guards or cleaners sign a paper attendance book at each client post, or clock in on the client's device. Reliefs and double shifts are arranged by WhatsApp.
2. Supervisors photograph the lists and send them to HQ, which re-keys them into Excel.
3. Payroll staff compute absences and overtime, load the incidences into payroll software, and stamp CFDI payroll receipts.
4. Separately, HQ builds each client's monthly coverage report for billing (posts covered or uncovered). It also assembles the REPSE evidence packs clients request (payroll CFDI, IMSS/INFONAVIT payment proofs) [BK].
5. Coverage disputes end in invoice deductions.

**Pain:**
- Daily workflow, mandatory from 2027, with fines per worker.
- Long shift patterns collide with the falling weekly cap.
- Revenue depends on proving coverage to clients.

*Direct complaints were not collected; validate in interviews.*

**Existing solutions:** (none verified this session for LFT-2027 registry features)
- Biometric clocks such as ZKTeco devices [BK].
- HR/payroll SaaS with attendance: Runa, Worky, Buk, Factorial [BK].
- Desktop payroll: CONTPAQi Nóminas, Aspel NOI [BK].
- Guard-management platforms such as TrackTik [BK].

**The gap:**
Generic attendance tools assume workers clock in at the employer's own site. Outsourced workforces clock in at *client* sites, often with poor connectivity, shared phones and rotating reliefs. What is missing is one tool that:
- keeps a legally defensible per-worker registry across many client sites;
- computes the weekly cap and overtime against each year's phased limit;
- reuses the same check-in data for client coverage billing and REPSE evidence.

In short: one check-in → legal registry + payroll incidences + backup for the client invoice.

**Possible product:**
- Offline-first mobile check-in (geofence + selfie, or supervisor-assisted for whole crews).
- Per-site rosters with relief swaps.
- Rules engine for the weekly cap and overtime by year.
- Exports of payroll incidences and per-client monthly coverage/REPSE packs, plus an inspector-ready registry export.

**MVP:**
- Supervisor Android app that clocks in a whole post crew.
- Web roster.
- Weekly hours / overtime report.
- CSV export in a payroll incidence layout.
- Per-client PDF coverage report.

Pilot with 2–3 security firms before the STPS implementing rules for the registry are final.

**Pricing hypothesis:**
MXN 30–50 per active worker/month (*estimate*). A 200-worker firm would pay ≈MXN 6,000–10,000/month (≈USD 325–540).

**How to find first customers:**
- The STPS public REPSE registry of specialized-service providers [BK: verify public search/export].
- Federal (SSPC) and state private-security authorization registries [BK: verify].
- Security-industry associations [BK: verify names and member directories].
- Job boards with heavy "guardia de seguridad" hiring, which identify active employers [BK].

**Risks:**
- STPS implementing rules (format, exceptions) are not yet known.
- Parts of the industry may evade rather than comply.
- HR vendors could add multi-site features.
- Thin-margin industry, so price pressure.

**Kill condition:**
Either of these:
- STPS rules allow a simple Excel or paper-equivalent registry, or exempt outsourced multi-site staff.
- Diligence finds a guard-management or HR vendor already selling an LFT-2027 registry to Mexican security firms at under MXN 30/worker.

**Score:** 5/10 (provisional)

Pain 7 · Frequency 10 · Mandatory 9 · Fragmentation 4 · Competition 3 · Gap 5 · Buyer access 6 · Willingness to pay 6 · MVP 5 · Distribution 5.

**Sources:**
- El Contribuyente, "Ya es ley: jornada de 40 horas, registro digital y nuevas reglas de horas extra" (May 2026): https://www.elcontribuyente.mx/2026/05/ya-es-ley-jornada-de-40-horas-registro-digital-y-nuevas-reglas-de-horas-extra/
- EY Law Flash, reducción de jornada laboral: https://www.ey.com/es_mx/technical/tax/boletines-fiscales/ey-law-flash-reduccion-jornada-laboral
- IDC Online, "La jornada laboral de 40 horas se adiciona a la LFT" (4 May 2026): https://idconline.mx/laboral/2026/05/04/historico-la-jornada-laboral-de-40-horas-se-adiciona-a-la-lft
- AMCP DF, text of the LFT decree: https://amcpdf.org.mx/decreto-por-el-que-se-reforman-adicionan-y-derogan-diversas-disposiciones-de-la-ley-federal-del-trabajo-en-materia-de-reduccion-de-la-jornada-laboral/
- BHR México payroll bulletin (decree effective 1 May 2026): https://www.bhrmx.com/wp-content/uploads/2026/04/Boletín-Reforma-a-la-Ley-General-del-Trabajo-Vigencia-del-Decreto-1-de-mayo-de-2026-Nóminas.pdf
- ConMéxico, 40-hour reform briefing (Jun 2026): https://www.conmexico.com.mx/wp-content/uploads/2026/06/INFO-40horas-Reforma-Laboral.pdf
- ContadorMX, "Jornada laboral de 46 horas en 2027": https://contadormx.com/jornada-laboral-de-46-horas-en-2027/

---

### Opportunity: Registry-to-payroll bridge for payroll bureaus (despachos de nómina)

**Industry:**
Outsourced accounting and payroll firms serving SMEs.

**Buyer:**
Owner/partner or payroll manager at a despacho running weekly or biweekly payroll for 20–200 client companies on CONTPAQi Nóminas or Aspel NOI [BK]. Market size was not verified (*estimate*: tens of thousands of accounting firms; the payroll-heavy share is unknown).

**Trigger / Why now:**
The same LFT decree [V]:
- From 2027 each client company must keep an electronic hours registry.
- The weekly cap steps down every year to 2030, with new overtime rules (details not verified).
- Fines per affected worker will push SME clients to ask their payroll provider how to comply.

**Current workflow:** [BK / inferred]
1. Each client sends attendance and incidences in a different form: photo of a paper list, Excel, biometric-clock export, WhatsApp message.
2. Despacho staff interpret them and re-key absences, delays, overtime, vacations and IMSS disability days into NOI/CONTPAQi, per client, per pay period.
3. Payroll is calculated and CFDI payroll receipts are stamped. IMSS/INFONAVIT contributions and state payroll tax follow.
4. Errors found after stamping lead to cancellation, re-stamping and client disputes.

**Pain:**
Repetitive, deadline-driven re-keying every pay period. From 2027 the despacho also needs each client's registry to exist and to back up the overtime it pays.

**Existing solutions:**
- Biometric clocks with export software [BK].
- Import layouts in desktop payroll software (Excel incidence imports) [BK].
- HR SaaS that run payroll themselves, such as Runa, Worky and Buk [BK]. These compete *with* despachos, which is the wedge.

**The gap:**
A registry the despacho can roll out to all its SME clients under its own brand. It turns messy inputs into a legal registry and produces ready-to-import incidence files for the payroll software the despacho already uses. That keeps the despacho in the loop instead of replacing it.

**Possible product:**
- White-label registry: cheap QR or mobile check-in for micro clients, clock-file import for the rest.
- Rules engine for each year's weekly cap and overtime.
- One-click incidence files for NOI/CONTPAQi.
- Inspector-ready registry export per client.

**MVP:**
- Web app with per-client QR/web check-in.
- Import of 2–3 common clock export formats.
- Weekly-hours report.
- Incidence export in one payroll layout (whichever of NOI or CONTPAQi interviews show is dominant).

**Pricing hypothesis:**
MXN 10–20 per client employee/month, billed to the despacho, which resells it with a markup (*estimate*). Minimum MXN 1,500/month. A despacho covering 1,000 client employees would pay ≈MXN 10,000–20,000/month (≈USD 540–1,080).

**How to find first customers:**
- CONTPAQi / Aspel distributor networks and reseller events [BK].
- IMCP and the state Colegios de Contadores. IMCP is active on compliance topics: it publishes monthly AML bulletins [V].
- Accountant Facebook groups and the audiences of YouTube payroll tutorials [BK].

**Risks:**
- CONTPAQi or Aspel ship a native mobile registry tied to their payroll.
- STPS releases a free official registry app.
- Despachos push the obligation onto their clients instead of paying.

**Kill condition:**
Either of these:
- CONTPAQi or Aspel announce a 2027 registry bundled at near-zero marginal cost before mid-2027.
- Ten despacho interviews show no willingness to pay at least MXN 10/employee.

**Score:** 5/10 (provisional)

Pain 6 · Frequency 8 · Mandatory 8 · Fragmentation 5 (many client input formats) · Competition 4 · Gap 5 · Buyer access 7 · Willingness to pay 5 · MVP 6 · Distribution 7.

**Sources:**
- Same LFT decree sources as the previous opportunity (El Contribuyente, EY, IDC Online, AMCP DF, BHR, ConMéxico, ContadorMX).
- IMCP AML bulletin (evidence of IMCP's compliance-communication channel): https://imcp.org.mx/wp-content/uploads/2026/07/Bol_PLD_194_julio_26.pdf

---

## Rejected after competitor research

1. **LFPIORPI avisos and KYC for notaries.** Killer: **KYC Systems** sells a dedicated notary AML product from MXN 5,000/month, implementation and training included [V]. Notaries also run established practice-management software [BK].
2. **LFPIORPI avisos and KYC for vehicle dealers.** Killers: the **KYC Systems** vehicle-sales product (identification from 3,210 UMA, aviso from 6,420 UMA ≈ MXN 753,130) and **Grant Thornton México**'s "generador de avisos para actividades vulnerables" [V].
3. **Acuerdo 115/2026 risk-methodology and client risk-rating tool** (all vulnerable activities, in force 2026-11-30). Killer: crowded within weeks of publication. KYC Systems, Regcheq, artu.ai, Armor AML, cumplimientopld.com.mx, AP Consultores, lfpiorpi.com and pld.mx all published guidance or products [V].
4. **AML for real-estate developers / lot subdividers** (new vulnerable activity; clients must always be identified; aviso ≥8,025 UMA ≈ MXN 941k). Killer: **KYC Systems**' dedicated "Software PLD para Construcción e Inmuebles", which also claims transactional monitoring [V]. Leftover wedge: matching installment payments and third-party payers from bank statements against cumulative per-client thresholds for lot subdividers. That is a feature for incumbents, not a standalone business.

Sources:
- EY on the 2025 AML-law reform: https://www.ey.com/es_mx/technical/tax/boletines-fiscales/reforma-ley-antilavado-2025-nuevas-obligaciones
- IDC Online on the July 2025 reform: https://idconline.mx/corporativo/2025/07/17/lfpiorpi-nuevas-obligaciones-tras-reforma-publicada
- El Contribuyente on stricter identification, urgent avisos and mandatory audits: https://www.elcontribuyente.mx/2025/07/nuevas-reglas-antilavado-identificacion-mas-estricta-avisos-urgentes-y-auditorias-obligatorias/
- Pérez-Llorca note on the reform: https://www.perezllorca.com/wp-content/uploads/2025/07/Nota-Juridica-Principales-reformas-a-la-Ley-Federal-para-la-Prevencion-e-Identificacion-de-Operaciones-con-Recursos-de-Procedenc.pdf
- Garrigues on real estate: https://www.garrigues.com/es_ES/noticia/mexico-nuevas-reformas-refuerzan-control-lavado-dinero-sector-inmobiliario
- Hogan Lovells on fund receipts for real-estate developments: https://hlc.com/es/publications/client-alert-recepcion-de-recursos-para-desarrollos-inmobiliarios-como-actividad-vulnerable
- IDC Online, when developments must file avisos (Mar 2026): https://idconline.mx/corporativo/2026/03/17/desarrollos-inmobiliarios-cuando-presentan-avisos-antilavado
- KPMG flash on Acuerdo 115/2026: https://kpmg.com/mx/es/tendencias/2026/08/flash-acuerdo-por-el-que-se-modifican-las-reglas-de-caracter-general-a-que-se-refiere-la-ley-federal-para-la-prevencion-e-identificacion-de-operaciones-con-recursos-de-procedencia-ilicita.html
- Vendor and consultancy pages on the new rules:
  - https://cumplimientopld.com.mx/acuerdo-115-2026-reglas-caracter-general-lfpiorpi/
  - https://regcheq.com.mx/blog/reglas-de-car%C3%A1cter-general-de-la-lfpiorpi-2026-el-juego-cambia
  - https://artu.ai/articles/acuerdo-115-2026-reglas-caracter-general-lfpiorpi/
  - https://armor-aml.com/reglas-de-caracter-general-actividades-vulnerables/
  - https://apconsultores.com.mx/blog/reglas-caracter-general-lfpiorpi-2026
  - https://lfpiorpi.com/rcg-2026
  - https://pld.mx/lfpiorpi/2026/08/23/reglas-de-caracter-general-lfpiorpi-guia-2026/
- KYC Systems product pages:
  - https://kyc-systems.com/
  - https://kyc-systems.com/actividades-vulnerables/software-antilavado-fe-publica.html
  - https://kyc-systems.com/actividades-vulnerables/software-antilavado-vehiculos.html
  - https://kyc-systems.com/actividades-vulnerables/software-antilavado-construccion-inmuebles.html
- Grant Thornton México aviso generator: https://www.grantthornton.mx/globalassets/1.-member-firms/mexico/pdf/generador-de-avisos-para-actividades-vulnerables.pdf
- ElConta on vehicle sales and AML: https://elconta.mx/enajenacion-automoviles-materia-prevencion-de-lavado-de-dinero/

## Too competitive

- **AML suites for "actividades vulnerables"** after the July 2025 reform and Acuerdo 115/2026. At least 9 vendors and consultancies are active (see above) [V].
- **Generic electronic time clocks for SMEs** for the 2027 mandate: biometric-device makers (e.g., ZKTeco), HR/payroll SaaS (Runa, Worky, Buk, Factorial) and desktop payroll (CONTPAQi, Aspel) will absorb it [BK].
- **Carta Porte CFDI complement** for trucking: mandatory since 2024 and covered by invoicing/PAC vendors (e.g., Facturama, CONTPAQi, Aspel) and TMS products [BK].
- **SAT volumetric controls for fuel stations** (RMF Anexos 30/31): specialized providers are entrenched [BK].

## Attractive problem, poor distribution

- **Micro hazardous-waste generators' compliance file** (clinics, dental offices, vets, auto workshops). There are 167,706 registered generators, mostly microgenerators under 400 kg/yr [V]. The problem is real, but tickets are tiny and buyers dispersed. Reach them only through collectors (fold into Opportunity 1) [V count; distribution judgment is mine].

## Watchlist (timing)

- **NOM-160 take-back traceability for producers, importers and distributors of oils, batteries and electronics.** They would reconcile collection and valorization evidence from many collectors and states against units sold. The trigger is verified (draft NOM, June 2026) [V], but the final text and dates are unknown, and buyers are mid-size or large companies with longer sales cycles. Revisit when the final NOM is published.

## Unverified leads (queue for a pass with search budget)

All of these come from background knowledge [BK] and were **not** checked this session. Each is a plausible Mexico workflow fitting the thesis:

1. **Private-security registry reporting:** federal SSPC plus state-level registries, recurring personnel reports, background checks. Strong fragmentation; could combine with Opportunity 2.
2. **IMSS SIROC registration for construction contractors:** per-project registration of works and subcontracts.
3. **Electronic customs value declaration (Manifestación de Valor Electrónica) and 2026 customs-law changes** for occasional SME importers. The customs-broker software market is likely mature.
4. **USMCA origin-certification evidence for SME exporters** after the 2025 US tariff changes. US policy is volatile, and enterprise trade-compliance suites exist.
5. **COFEPRIS antibiotic and controlled-drug dispensing records** in independent pharmacies (overlap with pharmacy POS systems to check).
6. **State education-ministry (SEP) school-control systems for private schools:** 32 different state systems.
7. **CFE distributed-generation interconnection paperwork for solar installers** under the 2025 electricity-sector law. This closely mirrors the US solar-permitting benchmark.
