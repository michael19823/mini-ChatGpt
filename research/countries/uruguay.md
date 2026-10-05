# Uruguay: Country Research (Global Indie-Hacker Opportunity Study)

Research date: 2026-10-04. Market size class: **small** (about 3.4M people). Search budget used: 10 of 10.
Accessibility: no sanctions or software-sale restrictions. Gub.uy digital identity is needed for most government portals, and foreign vendors can sell SaaS normally. Electronic invoicing (CFE) is mandatory, so local invoicing matters if you sell to local businesses.

Overall verdict: Uruguay is a small, well-digitized market. The state already provides many free unified tools (BPS–MTSS unified payroll, SNIG cattle traceability, the MGAP EUDR platform), so classic "fragmented portal" pain is rarer than elsewhere in LatAm. The strongest 2025–2026 regulatory trigger I found is in **waste management**: the national waste traceability system and the e-waste (RAEE) extended-producer-responsibility regime. Both are real but small, and both carry the risk that the government ships its own free system. None of these ideas is strong enough to build without interviews. They would work best as add-ons to a wider Southern Cone (Argentina/Chile) waste-compliance product.

---

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Waste transport / industrial waste generators | Transporter service reports (Excel .xlsm template), generator sworn statements (Decreto 182/013), new national waste traceability system | **Candidate** | Mandatory, recurring, Excel-based today. A national traceability system is being put in place in 2025–2026. |
| Electronics importers (RAEE / e-waste EPR) | Registration, management plan, traceability of devices put on the market | **Weak candidate** | New regime: since 19 Nov 2025 only registered importers with an approved plan may import. Transition for waste operators runs to 19 Nov 2026. Group plans may absorb the demand. |
| Fire-safety technicians (Bomberos/DNB) | Authorization and renewal of premises under Decreto 372/023 on the new Gub.uy platform | **Weak candidate** | Renewal every 4 years at most, so frequency is low. The DNB platform is already digital. |
| Agro-exporters (beef, leather, soy, wood): EUDR | Due-diligence and traceability packages for the EU | **Rejected** | The government's SVAPAAG platform (MGAP) plus SNIG cattle traceability cover it for free. |
| Payroll / labor compliance | Planilla de Trabajo Unificada BPS–MTSS, monthly nominated declaration | **Rejected** | The state already unified the filing (BPS registration serves both agencies). Payroll vendors and accounting firms dominate. |
| Short-term rental intermediaries | DGI Res. 1518/2026 quarterly reporting (from 1 Jul 2026) | **Rejected** | The obligated parties are digital platforms (Airbnb-type), not a large base of small businesses. |
| Pharmacies (controlled drugs) | Psychotropic/narcotic prescriptions and registers (MSP) | **Not enough evidence** | Only found the MSP paper prescription-pad process. No 2025–2026 digital mandate found in Uruguay (the Argentine digital-register rules came up instead). |

---

## Opportunities

### Opportunity: Waste-transporter reporting and traceability bridge

**Industry:**
Solid waste transport (industrial, commercial, construction and healthcare waste) and the industrial generators who hire these transporters.

**Buyer:**
Owner or operations/admin manager of a licensed waste-transport company (small fleets, often 2–20 trucks). Secondary buyer: the environmental manager or consultant at a mid-sized industrial generator who files the Decreto 182/013 sworn statement.

**Trigger / Why now:**
- The 2025 waste regulations call for a waste traceability system covering generation, collection, transport and final destination (recycling, valorization, disposal). The Ministry of Environment was to set its operating conditions within 6 months of publication, possibly phased in. The search linked this to Decreto 213/025 (Diario Oficial, 29 Oct 2025), but I could not confirm the exact decree number and article. Verify before relying on it.
- Transporters already report their services to the Ministry using an official Excel macro template (.xlsm). The Ministry publishes a list of waste-transport companies as an Excel file updated to May 2026.
- Montevideo runs a separate requirement: every company transporting waste there must be registered and authorized by the city's inspection service. That means two layers (national and departmental) to satisfy.

**Current workflow:**
1. The driver collects waste and records the pickup on paper or in WhatsApp (generator, waste type, volume, destination).
2. Office staff key the pickups into internal spreadsheets for invoicing.
3. Staff re-key the same services into the Ministry's .xlsm reporting template and submit it.
4. Generators ask the transporter for proof (destination receipts) to support their own Decreto 182/013 sworn statement, and staff compile these by email.
5. Montevideo jobs also need to meet the city's registration and authorization rules.
6. Once the national traceability system is live, staff will likely have to enter each movement a third time.

**Pain:**
Mandatory reporting on an Excel macro template is a clear sign of manual re-keying. Generators depend on transporter documentation for their own sworn statements. Missing traceability exposes both parties to Ministry sanctions. I found no complaint posts. Pain intensity is inferred from the form-based workflow (estimate).

**Existing solutions:**
- The government's own template and procedure system (bpmgob.ambiente.gub.uy), plus the coming national traceability system. This is free and could become the main substitute.
- Environmental consultancies that prepare management plans and sworn statements by hand.
- ABITO, a B2B/B2C platform linking generators to recycling and composting plants. It is a marketplace, not a compliance tool for transporters.
- Generic fleet and route software, and spreadsheets.
- No Uruguay-specific waste-transport compliance SaaS surfaced in search. I only checked lightly, so treat "none found" with caution.

**The gap:**
No tool turns one pickup record into all the required outputs: the transporter's Ministry report, the generator's proof for the sworn statement, the Montevideo authorization record and, soon, a traceability-system entry.

**Possible product:**
A mobile pickup log for drivers (generator, waste category, quantity, destination, photo or signature) that automatically fills the Ministry's .xlsm template and generates per-generator certificates. Once the national traceability system is live, it would submit to it, by API if one exists or by assisted upload if not.

**MVP:**
A web app plus a mobile form that exports the official .xlsm template correctly filled in, and a monthly per-client "certificate of transport and destination" PDF.

**Pricing hypothesis:**
USD 40–120 per month per transporter, depending on trucks. An optional generator portal at USD 20–50 per month (estimate).

**How to find first customers:**
Start with the Ministry's public Excel list of waste-transport companies (updated May 2026) and Montevideo's registered transporters. Then reach out through environmental consultancies and the Cámara de Industrias del Uruguay.

**Risks:**
- The national traceability system may come with free mobile entry, which would kill the product.
- The market is small: the transporter list probably holds a few hundred firms (estimate, not verified).
- The traceability system may have no API, which limits integration.
- Regulators could change the template.

**Kill condition:**
The Ministry's traceability system offers free per-trip mobile entry that also produces the required reports. Or fewer than about 150 active transporters appear on the list.

**Score:** 5/10

**Sources:**
- https://www.gub.uy/ministerio-ambiente/tramites-y-servicios/formularios/plantilla-informe-servicios-transporte-residuos-solidos
- https://www.gub.uy/ministerio-ambiente/tramites-y-servicios/formularios/listado-empresas-transporte-residuos
- https://www.impo.com.uy/bases/decretos/213-2025
- https://www.guyer.com.uy/informes-&-noticias/marco-regulatorio-ambiental-de-2025-un-panorama-de-la-normativa-relevante-del-ano
- https://www.impo.com.uy/bases/decretos/182-2013
- https://www.gub.uy/tramites/declaracion-jurada-residuos-solidos-industriales-asimilados
- https://www.gub.uy/ministerio-ambiente/institucional/normativa/decreto-62022-modificacion-del-decreto-182013
- https://montevideo.gub.uy/sites/default/files/biblioteca/protocoloderegistro_0.pdf
- https://bpmgob.ambiente.gub.uy/
- https://innovacionpublica.anii.org.uy/wp-content/uploads/2022/02/Bases_desafio_MA_Vfinal-20220328.pdf (Ministry/ANII challenge fund for IT applied to waste, a sign the state may build its own tools)

---

### Opportunity: RAEE (e-waste EPR) reporting for small electronics importers

**Industry:**
Importers and distributors of electrical and electronic equipment.

**Buyer:**
Owner or comex/admin manager of a small or mid-sized importer of appliances, IT gear, tools or lighting. Secondary buyer: customs brokers serving these importers.

**Trigger / Why now:**
Under the RAEE regulation, from 19 Nov 2025 only registered importers and manufacturers with an approved management plan (individual or group) may import or manufacture general-use electrical and electronic equipment. Plans must include traceability mechanisms. Existing waste operators have a transition period to 19 Nov 2026.

**Current workflow:**
1. The importer registers with the Ministry of Environment and joins a group plan or files an individual one.
2. Staff pull the quantities and weights put on the market by category from customs declarations (DUA) and the ERP.
3. Staff compile reports for the plan administrator or the Ministry in spreadsheets.
4. Staff collect collection and treatment evidence from authorized operators.

**Pain:**
This is a new, mandatory, recurring reporting duty. Mapping customs tariff codes to RAEE categories and weights is tedious. Reporting frequency and format are **unverified**.

**Existing solutions:**
Group (collective) management plans, likely run by industry chambers (unverified), consultancies, law firms (RSM, Guyer, GRO publish guides), and spreadsheets. The ERP modules of Uruguayan distributors do not handle this (unverified).

**The gap:**
Turning import/customs line items into RAEE category, weight and reporting tables, and keeping the evidence trail for the plan.

**Possible product:**
Upload DUA/ERP exports, auto-classify the lines into RAEE categories with default weights, and produce the periodic declaration and an audit pack.

**MVP:**
Spreadsheet in, classified report out, with a reusable tariff-code-to-category mapping per importer.

**Pricing hypothesis:**
USD 30–80 per month, or a fee per reporting period (estimate).

**How to find first customers:**
The Ministry's RAEE registry of producers/importers (if public), customs broker networks, the Cámara de Comercio and electronics importer associations.

**Risks:**
- A collective plan operator may provide the reporting tool for free.
- Reporting may be annual only.
- A small market.

**Kill condition:**
The group plan administrator already collects data through its own portal, or reporting is annual and only a few lines long.

**Score:** 4/10

**Sources:**
- https://www.gub.uy/ministerio-ambiente/tematica/residuos-aparatos-electricos-electronicos
- https://www.guyer.com.uy/informes-&-noticias/decreto-sobre-la-gestion-de-los-residuos-electro-electronicos
- https://www.gro.com.uy/single-post/ministerio-de-ambiente-instrumentaci%C3%B3n-de-reglamento-para-la-gesti%C3%B3n-de-residuos-de-aparatos-el%C3%A9ct
- https://www.rsm.global/uruguay/es/news/sostenibilidad-y-gestion-de-residuos-electricos-y-electronicos-en-uruguay

---

### Opportunity: Fire-authorization portfolio manager for DNB-registered technicians

**Industry:**
Fire safety (premises authorization by the Dirección Nacional de Bomberos).

**Buyer:**
DNB-registered technicians (engineers, architects, fire-protection technicians) who manage authorizations and renewals for many client premises.

**Trigger / Why now:**
Decreto 372/023 replaced Decretos 260/013, 150/016 and 184/018. Authorizations and renewals now last up to 4 years. A new DNB platform has been mandatory since 7 Jan 2024, with Gub.uy login. Fire-protection measures must be advised by a registered technician.

**Current workflow:**
1. The technician surveys the premises and prepares plans and the fire-protection report.
2. The technician uploads the case to the DNB platform under Gub.uy identity.
3. The technician tracks observations, inspections and the expiry date for each client in spreadsheets or a calendar.

**Pain:**
Moderate. Many clients have overlapping expiry dates, and DNB observations need follow-up. Frequency per client is low (every 4 years at most).

**Existing solutions:**
The DNB platform (free), generic CRM and calendars, and spreadsheets.

**The gap:**
Renewal pipeline and evidence management across a technician's portfolio. The core submission is already digital.

**Possible product:**
A portfolio tracker for registered technicians: expiry alerts, a client document vault, a checklist per type of premises under Decreto 372/023, and renewal quote automation.

**MVP:**
Client and premises list with expiry dates, reminders and a document checklist.

**Pricing hypothesis:**
USD 15–40 per month per technician.

**How to find first customers:**
The DNB registered-technician list (if public), professional associations of engineers and architects.

**Risks:**
This is close to a generic CRM, and willingness to pay is low. The DNB could add its own expiry alerts.

**Kill condition:**
Technicians typically manage fewer than about 30 active clients, or the DNB platform already sends expiry notices.

**Score:** 3/10

**Sources:**
- https://www.gub.uy/ministerio-interior/sites/ministerio-interior/files/documentos/publicaciones/Decreto%20372.023-Autorizaciones%20de%20Bomberos.pdf
- https://impo.com.uy/bases/decretos/372-2023/1
- https://www.gub.uy/presidencia/comunicacion/noticias/nuevo-decreto-agiliza-tramite-para-obtener-habilitacion-direccion-nacional
- https://www.gub.uy/ministerio-interior/comunicacion/noticias/actualicacion-comunicado-tecnicos-registrados

---

## Rejected after competitor research

- **EUDR traceability packages for beef, leather, soy and wood exporters.** Killed by the government's **SVAPAAG** platform (MGAP, built under EUDR 1115/2023 with AL-INVEST Verde funding) and the national **SNIG** cattle traceability system. Pilot wood shipments are already done through the state.
  Sources: https://www.gub.uy/ministerio-ganaderia-agricultura-pesca/comunicacion/noticias/primera-exportacion-chips-madera-cumpliendo-nueva-normativa-ue-sobre ; https://www.gub.uy/ministerio-ganaderia-agricultura-pesca/comunicacion/noticias/uruguay-realiza-exportacion-madera-aserrada-cumpliendo-normativa-europea ; https://www.bbva.com/es/sostenibilidad/ganaderia-sostenible-en-uruguay-carne-libre-de-deforestacion-gracias-a-la-tecnologia/
- **Payroll / labor filing (Planilla de Trabajo).** Killed by the free **BPS–MTSS Planilla de Trabajo Unificada**: registering with BPS covers both agencies, so there is no double entry. Payroll software and accounting firms serve the rest. The new remote MTSS registration for employers in paraestatal pension funds is too narrow.
  Sources: https://www.gub.uy/ministerio-trabajo-seguridad-social/comunicacion/noticias/planilla-de-trabajo-unificada-de-mtss-y-bps ; https://www.forvismazars.com/uy/es/insights/nuestras-publicaciones/contabilidad-outsourcing/planilla-de-trabajo-unificada-bps-y-mtss ; https://www.asystax.com.uy/post/mtss-nueva-reglamentaci%C3%B3n-de-planilla-de-trabajo-para-empleadores-comprendidos-en-cajas-paraestata
- **Rental-platform reporting to DGI (Res. 1518/2026).** The obligated parties are a handful of large digital platforms that will build their own reporting. Not a small-business market.
  Sources: https://taxnews.ey.com/news/2026-1430-uruguay-issues-resolution-introducing-reporting-obligations-for-digital-platforms-intermediating-real-estate-rentals ; https://ricaconsultores.com.uy/notas-de-interes/dgi-establece-nuevas-obligaciones-de-informacion-para-plataformas-digitales-que-intermedian-alquileres/
- **E-invoicing (CFE).** E-invoicing is mature and mandatory, with many certified providers. I did not research this in depth because the general picture was enough.
  Source: https://carlospicos.com/uruguay-facturacion-electronica-obligatoria/

## Attractive problem, poor distribution

- **Pharmacy controlled-drug registers.** A possible pain, but I found no 2025–2026 Uruguayan digital mandate (the MSP still issues paper prescription pads), and I did not verify who the local pharmacy-software incumbents are. Not enough evidence.
  Source: https://www.gub.uy/tramites/solicitud-recetarios-sicofarmacos-estupefacientes

## Too competitive

- Payroll / labor compliance (see above).
- E-invoicing (see above).

## Note on regional add-on

Uruguay's small buyer counts (likely hundreds, not thousands, of waste transporters and electronics importers) make standalone products marginal. The waste-traceability idea is best tested as a Uruguay module of a Southern Cone waste-manifest product, if Argentina or Chile show stronger demand.
