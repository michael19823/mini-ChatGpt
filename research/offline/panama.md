# Panama: Offline-Industries Pass

_Research date: 2026-10-05. 16 WebSearch calls (budget 20). The run was cut short twice by usage-limit errors, so this is a deliberately short report. WebFetch was not used. Every fact below comes from search-result extracts. Anything I could not confirm in an extract is marked **unverified** or **estimate**._

Overlap check: the country report (`research/countries/panama.md`) covered resident agents, CUSCAR manifests, real-estate AML, pharmacies, fire contractors, e-invoicing and CSS payroll. None of those is repeated here.

---

## 1. Quiet industries screened

| # | Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|---|
| 1 | **Scrap-metal collectors and exporters** (chatarreras) | **Ley 542 (published 7 Jul 2026)** creates a Registro Nacional. Firms must prove where the scrap came from (*procedencia*) before export. Fines run USD 5,000–150,000, plus suspension and seizure | The law is new and the implementing rules have not been found. Today's yards buy material at a counter from walk-in collectors, paid in cash (**inferred**) | "Amplio número" of urban collectors. One ship-breaking concessionaire, PAMERSA (Intelcom report). There is also an older exporter register. **No count found** | **Opportunity #1 (provisional)** | New law, enforced through export, with a large penalty. The rules and the size of the market are both unknown |
| 2 | Cattle producers / livestock traders | Movements between zoosanitary zones need a digital movement certificate in **Trazar-Agro** (MIDA/OIRSA). Animals must be identified and registered. Screwworm restrictions apply (e.g. Barú/Renacimiento) | Producers are elderly: 65.9% are 45 or older (CNA 2024). MIDA vets run in-person induction sessions to teach producers the platform | **38,819 farms with cattle** and 1.40M head (CNA 2024). 53,025 producers and 106,341 movements in Trazar-Agro by Dec 2025 (MIDA) | **Opportunity #2 (weak)** | Mandatory and frequent, but the government platform is free and MIDA staff assist. At best a paid service |
| 3 | Households as employers (domestic workers) | Register the worker with CSS. Monthly payroll in SIPE. Employer pays 11.75% + 1.5% | Reportedly 87% of domestic workers have no social security (Panamá América, older article) | Large but informal (**no count found**) | Rejected | SIPE is free and handles domestic employers. The real gap is evasion, not tooling. Few households would pay |
| 4 | Pawnshops (casas de empeño) | MICI licence under Ley 16/2005 and DE 65/2006. Signed contract copy for each loan. Likely an AML obligated subject (**unverified**) | Licence application is at the MICI counter (MICI Guía No. 2) | **No count found** | Rejected (unverified) | Contract and loan software already exists in the region (**unverified**). No new trigger found |
| 5 | Artisanal fishers | ARAP vessel licence. Landing forms are recorded by ARAP inspectors. Zarpe permits | ARAP introduced new paper landing forms and trained regional inspectors. Fishers complain about sanctions and permits | **6,387 registered artisanal vessels (3,709 active), 21,164 fishers** (ARAP Boletín Estadístico 2025) | Rejected | The inspector fills in the form, not the fisher. Very low willingness to pay. FENAPESCA is the channel, but there is nothing to sell |
| 6 | Taxi owners / certificate holders | ATTT *certificado de operación*. Annual *revisado* at authorised workshops | Cupos (taxi quotas) are disputed in person; drivers have protested at ATTT offices | **~45–47k certificates** but fewer than 30k active taxis (La Estrella) | Rejected | ATTT is building its own official trip app (Dec 2026), and it is voluntary. No recurring filing for owners to outsource |
| 7 | Revisado workshops (authorised by ATTT) | Issue vehicle inspection certificates. ATTT validates them and inspects the workshops | ATTT runs an annual call with paper submissions (29 Sep – 31 Oct 2025) and an enforcement campaign against offending workshops | **No count found** | Watch | Possibly a "one inspection → ATTT system" pattern, but ATTT controls the validation system. Too little evidence |
| 8 | Pesticide applicators / drone sprayers | MIDA DNSV rules for aerial application by RPAS drones (draft out for public consultation, Nota DNSV 0775-2026) | Regulation still in draft. Pesticide use is supervised jointly by MIDA, MINSA and MiAmbiente | **No count found.** Drone sprayers are probably a few dozen (**estimate**) | Watch | Could create per-application logs once final. The market is likely tiny |
| 9 | Aquaculture farms | Trazar-Agro traceability is being extended to aquaculture (MIDA training, Aug 2025) | Training is delivered in person by MIDA | **No count found** | Rejected | Same free government platform as cattle. Small sector |
| 10 | School minibuses (busitos colegiales) | ATTT verification campaign in the capital | In-person checks | **No count found** | Rejected | Inspection is a physical check, with no recurring filing found |
| 11 | Poultry farms | Census and traceability survey of birds in Trazar-Agro (San Carlos) | MIDA staff did field data entry ("levantamiento catastral") | **No count found** | Rejected | Government staff do the data capture |

Not screened, because the search budget ran out: well drillers (MiAmbiente water concessions), funeral homes and cemeteries, tattoo and barber permits (MINSA), street vendors (buhoneros) and lottery sellers (billeteros, LNB), beekeepers.

---

## 2. Opportunities

### Opportunity: Ley 542 scrap-provenance ledger and export dossier for scrap yards

**Industry:**
Scrap-metal collection and export: ferrous and non-ferrous scrap (steel, iron, aluminium, copper, zinc, bronze, brass).

**Buyer:**
The owner or manager of small and mid-size scrap yards (*chatarreras*) that buy from walk-in collectors and sell to exporters, and of the exporting consolidators.

**Trigger / Why now:**
- **Ley 542 was published on 7 July 2026.** It is the first specific legal framework for collecting, processing and exporting ferrous and non-ferrous recyclables.
- It creates a **Registro Nacional** of sector companies. Before exporting, firms must **prove where the scrap came from** and meet national and international standards.
- Sanctions: **USD 5,000–150,000**, suspension or cancellation of the registration, a ban on operating for up to 5 years, and **seizure of goods that are contaminated or lack certification** (Infobae, 15 Jul 2026).
- The implementing regulation (*reglamento*) and its dates were **not found**, so the start date of the operational obligation is **unverified**. Sales should start as soon as the reglamento is published.
- The law's stated aim includes preventing illicit trafficking in metals. That points to a per-purchase seller ID and origin record.

**Current workflow:** (inferred, **unverified**; confirm in interviews)
1. A collector brings material to the yard. It is weighed and paid for in cash, and at best noted in a notebook or receipt book.
2. Material is consolidated into containers for export. The exporter assembles customs documents and the existing exporter registration.
3. Under Ley 542, the yard will also need to show the provenance of each container's contents: seller identities and the purchase lots behind each shipment. Most yards have no system that links purchases to shipments.

**Pain:**
- Fines of USD 5k–150k and **seizure of uncertified cargo** fall on the export container. That is the moment of maximum value at risk.
- The Asamblea framed the law as a response to non-compliant exporters.
- Copper cable and manhole-cover theft is a public issue across the region. In Panama this is **unverified**, apart from the law's stated anti-trafficking aim.

**Existing solutions:**
- Paper purchase books and receipt pads from stationers (**inferred**).
- Customs brokers, who assemble the export file but not purchase-level provenance.
- Generic scale/ERP software for recyclers, such as US scrap-yard systems (e.g. ScrapRight, Recycling Software). These are **unverified for Panama** and not in Spanish or built for Ley 542.
- The government registry itself. Whether it will have an online portal is unknown.

**Offline evidence:**
- The trade is cash and counter-based, and the sellers are informal collectors.
- The search found no Panama vendor listing or software page for scrap yards.
- The law is so new that consultants have not yet published guides about it (none surfaced).

**Offline channel:**
- The **Registro Nacional itself**, once it is published. A list of registered firms is a ready prospect list.
- The customs brokers who file the export declarations for scrap (a narrow, findable set).
- Shipping lines and port terminals that load scrap containers in Colón and Balboa.
- In-person visits to yards clustered in industrial zones of Panamá and Panamá Oeste (**estimate**).

**Market count:**
**Unknown.** The only source says there is a "wide number" of urban collector firms and one ship-breaking concessionaire (PAMERSA). My estimate is 50–200 formal yards and exporters (**estimate**, unverified). Iron and steel scrap appeared among Panama's main export products in a 2021 Intelcom report, which suggests the trade has real value.

**The gap:**
A purchase-to-container provenance trail: seller ID and photo at the scale, lot weights, which lots went into which container, and an export provenance dossier in whatever format the reglamento requires.

**Possible product:**
A tablet or phone app at the scale. It captures the seller's cédula, a photo of the material and the weight, issues the receipt, and assigns lots to containers. When a container ships, it outputs a provenance file per container for the exporter and customs broker.

**MVP:**
A mobile purchase log (cédula scan, photo, weight, price) plus container assignment and a PDF provenance dossier. Sold together with a done-for-you service to set up the Registro Nacional registration.

**Pricing hypothesis:**
USD 99–249/month per yard, or USD 20–40 per export container dossier (**estimate**). The registration setup could be a one-off USD 300–800 service fee.

**Willingness to pay:**
Exporters would likely pay, because seizure of a container is a large loss. Small collector yards would pay little, if anything, and probably only for a done-for-you service.

**Founder access:**
This needs someone local and Spanish-speaking. Yards are reached in person, deals are relationship-based and payments are often in cash. A non-local solo founder could only sell to the exporter tier through customs brokers.

**How to find first customers:**
The new Registro Nacional, customs brokers handling HS 7204/7404 exports, and port and terminal contacts.

**Risks:**
- The reglamento might specify a government portal or form that already covers provenance.
- Concentration: a few exporters may account for most volume and could build their own systems.
- Informality: yards may simply not record sellers.
- The law's details are known only from news extracts.

**Kill condition:**
Kill it if the reglamento puts provenance into a free MICI/ANA online form with no per-purchase record, or if there are fewer than about 40 registered exporters and yards.

**Score:** 5/10.
- Mandatory 9; pain 7 (seizure risk); frequency 7 (every purchase and every container); fragmentation 3; competition 7 (no local tool found); incumbent gap 6.
- Buyer access 4: the register is not yet public.
- Willingness to pay 5; MVP 7.
- Distribution 4: the offline channel is real but needs a local.
- Big unknowns: the reglamento and the market count.

**Sources:**
- Infobae, 15 Jul 2026, "Panamá endurece el control sobre la exportación de chatarra con multas de hasta $150 mil": https://www.infobae.com/panama/2026/07/15/panama-endurece-el-control-sobre-la-exportacion-de-chatarra-con-multas-de-hasta-150-mil/
- Asamblea Nacional, sanctions for non-compliant exporters of ferrous materials: https://www.asamblea.gob.pa/Noticias/Actualidad/SANCIONES-PARA-EMPRESAS-QUE-INCUMPLAN-CON-LA-EXPORTACION-DE-MATERIALES-FERROSOS
- Intelcom (MICI) export report, 2021 (scrap among main exports; PAMERSA; the existing exporter register): https://intelcom.gob.pa/storage/informes/March2021/a0YVyUS5iogkgHl51hT7.pdf

---

### Opportunity: Trazar-Agro movement-certificate service for elderly cattle producers, sold through agro-veterinary stores

**Industry:**
Cattle ranching and livestock trading.

**Buyer:**
Small and mid-size cattle producers and cattle traders (*compradores de ganado*) who move animals between zoosanitary zones. A secondary buyer is the agro-veterinary store (*agroveterinaria*) or private vet that could resell the service.

**Trigger / Why now:**
- The digital **Certificado de Movilización de Animales** between zoosanitary zones is issued on **Trazar-Agro** (OIRSA platform, run by MIDA).
- Screwworm (*gusano barrenador*) controls have hardened. Barú and Renacimiento kept restrictions on moving cattle that lack traceability.
- MIDA now identifies imported cattle differently from local animals (Infobae, 2 Sep 2026).
- MIDA is still onboarding producers region by region (e.g. Panamá Oeste in Apr 2026, Veraguas).

**Current workflow:**
1. The producer registers the farm and animals in Trazar-Agro, often with a MIDA vet at an induction session.
2. Before a sale or a move, the producer or a MIDA agency requests the digital movement certificate.
3. Inventory, health events and movements must be kept up to date in the platform.

**Pain:**
- An animal without traceability cannot be moved, so a sale is blocked.
- The producers are old. The CNA 2024 found 65.9% in the 45-and-over age bands.
- Producers need training before they can use the tool on their own.

The size of the pain in hours or lost sales is **unverified**.

**Existing solutions:**
- Trazar-Agro itself, which is free and government-provided.
- MIDA agency veterinarians, who assist for free.
- Cattle associations such as ANAGAN (**unverified** whether they offer filing help).
- Private vets.

**Offline evidence:**
MIDA runs in-person induction sessions. The producers are elderly, and the system is a government web platform with no commercial vendors found.

**Offline channel:**
Agro-veterinary stores in Chiriquí, Veraguas, Coclé and Los Santos, cattle auctions (*subastas ganaderas*), ANAGAN chapters, and MIDA regional agencies.

**Market count:**
- **38,819 farms with cattle** (CNA 2024, INEC).
- **53,025 producers** registered in Trazar-Agro by Dec 2025, with **106,341 movements** and 1,165,548 animals identified (MIDA monthly report).

That works out to roughly 2 movements per producer per year on average. Frequency is low for most, but traders move animals often.

**The gap:**
None in software. The only possible gap is a done-for-you filing service for traders and producers who will not use the platform themselves.

**Possible product:**
A WhatsApp or phone-based filing service run through agroveterinarias. The producer sends ear-tag numbers and destination details, and the service files the movement on their behalf (only if a delegated or third-party user is allowed, **unverified**).

**MVP:**
A concierge pilot with one cattle trader and one agroveterinaria in Chiriquí.

**Pricing hypothesis:**
USD 3–10 per movement certificate, or USD 20–50/month for traders (**estimate**).

**Willingness to pay:**
Only for a done-for-you service, not software. Free MIDA help caps the price.

**Founder access:**
A local is required (rural, in person, Spanish). A non-local founder cannot sell this.

**How to find first customers:**
Cattle auctions and agroveterinarias in Chiriquí, which has the largest producer count (49,992 agricultural producers).

**Risks:**
- Free government help.
- Third-party filing may not be permitted.
- Thin margins.
- MIDA could add a simplified mobile app.

**Kill condition:**
Kill it if Trazar-Agro does not allow delegated users, or if MIDA agencies issue certificates the same day for free with no queue.

**Score:** 3.5/10.
- Mandatory 8; frequency 5; pain 5.
- Competition 2 (free government platform plus free staff help).
- Willingness to pay 2; distribution 6; MVP 6.

**Sources:**
- MIDA monthly programmes report, Dec 2025: https://mida.gob.pa/wp-content/uploads/2026/01/InformeMensualProgramas_diciembre-2025.pdf
- MIDA, Panamá Oeste onboarding in Trazar-Agro (Apr 2026): https://mida.gob.pa/2026/04/21/mida-encamina-a-productores-de-panama-oeste-en-el-uso-de-trazar-agro/
- Infobae, imported versus local bovine identification (Sep 2026): https://www.infobae.com/panama/2026/09/02/panama-identifica-de-manera-diferenciada-los-bovinos-importados-de-los-locales-como-parte-de-la-vigilancia-veterinaria/
- Panamá América, Barú and Renacimiento movement restriction: https://panamaamerica.com.pa/provincias/ganaderos-de-baru-y-renacimiento-mantienen-restriccion-para-trasladar-bovinos-sin
- INEC, VIII Censo Nacional Agropecuario 2024: https://www.inec.gob.pa/archivos/P0705547520250805075734COMENTARIOS - VIII CNA.pdf
- La Estrella, cattle herd change since 2011: https://www.laestrella.com.pa/economia/hato-vacuno-se-redujo-189-desde-2011-porcino-y-avicola-toman-fuerza-ND14178621

---

## 3. Rejected

- **Domestic-worker employer payroll.** SIPE is free and covers domestic employers. The problem is non-registration (87% reportedly uninsured), and software does not fix that. Households will not pay.
  - Sources: https://www.telemetro.com/nacionales/sipe-la-css-que-es-y-quienes-lo-utilizan-la-caja-seguro-social-n5997013 , https://panamaamerica.com.pa/nacion/el-87-de-las-domesticas-no-tienen-seguridad-social-806011
- **Pawnshop compliance.** The MICI licence (Ley 16/2005, DE 65/2006) is a one-off counter procedure. No new trigger was found, and loan software exists (**unverified**).
  - Sources: https://mici.gob.pa/wp-content/uploads/2022/04/GUIA-NO.-2-REQUISITOS-DE-CASA-EMPENO-1.pdf , https://www.panamadigital.gob.pa/informaciontramite/solicitud-de-casa-de-empeno
- **Artisanal fishers' licences and landing reports.** There are 21,164 fishers and 6,387 vessels (ARAP 2025), but landing forms are filled in by ARAP inspectors and willingness to pay is minimal.
  - Sources: https://arap.gob.pa/wp-content/uploads/2026/01/BOLETIN-ESTADISTICO-2025.pdf , https://arap.gob.pa/arap-presenta-nuevos-formularios-en-desembarque/
- **Taxi operators.** ATTT is building its own official trip and fare app (Dec 2026), which is voluntary. Owners have no recurring filing.
  - Sources: https://www.laestrella.com.pa/panama/nacional/attt-impondra-taximetro-digital-en-panama-en-diciembre-BP23974252 , https://www.laestrella.com.pa/panama/nacional/attt-avala-plataforma-digital-para-taxis-con-pagos-electronicos-y-trazabilidad-MA24066846
- **Drone and aerial pesticide applicators.** The MIDA RPAS regulation is still a consultation draft and the market is tiny. Revisit when it is final.
  - Source: https://mida.gob.pa/wp-content/uploads/2026/07/NOTA-DNSV-0775-2026-Comunicado-consulta-publica-drones.pdf
- **Aquaculture and poultry traceability.** These run on the same free Trazar-Agro platform, with MIDA staff doing the data capture.

## 4. Method notes

- **Worked:**
  - Spanish queries naming the regulator: "MIDA … Trazar Agro", "ARAP … boletín", "ATTT …".
  - "Ley … chatarra … registro" found the Ley 542 trigger through news.
  - INEC and ARAP statistical bulletins gave hard counts.
- **Didn't work:**
  - Follow-up searches on "Ley 542" returned other countries' scrap laws. Panama's Gaceta Oficial is poorly indexed.
  - Generic "registro + policía" queries found no Panama dealer registers reported to police (none seem to exist apart from pawnshop licensing).
  - Results for "Trazar Agro" mix Costa Rica's MAG system with Panama's MIDA deployment, so check which country every fact refers to.
- **Next diligence:** the Ley 542 text and reglamento in the Gaceta Oficial, and how many firms register.

Research model: Opus
