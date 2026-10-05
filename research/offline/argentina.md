# Argentina: Offline-Industries Pass

*Research date: 2026-10-05. I used 39 WebSearch calls out of a 40 budget, in Spanish first. WebFetch and curl were blocked: a direct fetch of the CABA open-data CSV listing elevator maintenance firms returned proxy 403. Every claim therefore rests on search-result summaries and article titles, not full documents. Anything I could not confirm is marked **unverified** or **estimate**. The existing country report already covers SIGIRAO agrochemical prescriptions, Buenos Aires province private-school IPS payroll, SNIEA cattle e-ID and hazardous-waste manifests, so none of those is repeated here.*

## Context

- At national level the Milei government is deregulating.
- Even so, SENASA keeps adding traceability systems driven by exports and sanitary policy: DT-e for honey supers from August 2026, and SIGTRAZAVET for veterinary medicines from July 2026.
- Provinces are passing anti-cable-theft scrap registers one at a time: Santa Fe, Mendoza, San Luis, Entre Ríos, Río Negro, and a Buenos Aires province bill in 2026.
- Those are the two sources of new, quiet, mandatory work found in this pass.
- National household-employer obligations also changed (RG 5850/2026), but free government tools cover them.

## 1. Quiet industries screened

| # | Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|---|
| 1 | Agroveterinarias, veterinary distributors, rural vets | SENASA Res. 654/2026: SIGTRAZAVET real-time sale and movement registration, plus electronic veterinary prescription (RVE) for scoped products | Rural entities complain about connectivity and red tape; the paper prescription is being replaced | Unknown. SENASA publishes no store count in search results; thousands of outlets is an **estimate** | **Opportunity (best)** | New trigger (July 2026), per-sale registration, angry users. Narrowed to a list of controlled products |
| 2 | Scrap and non-ferrous metal dealers (chatarrerías) | Provincial registers plus a foliated, rubricated book plus a digital operations log plus a sworn declaration per load (Santa Fe Ley 14.191; Mendoza; San Luis Nov 2025; Entre Ríos 2025) | Laws require a paper "libro foliado y rubricado"; enforcement raids find unregistered yards | Unknown; many informal. Santa Fe RE.DE runs inspection campaigns | **Opportunity (weak)** | Real fragmentation and a trigger, but low willingness to pay and an informal, wary buyer |
| 3 | Beekeepers and honey extraction rooms (salas de extracción) | SENASA DT-e for moving honey supers from apiary to extraction room, mandatory from August 1, 2026; RENAPA registration | Replaces a paper remito. Older beekeepers object (Bichos de Campo, CARBAP) | More than 19,000 RENAPA beekeepers nationally (about 2023); 6,777 in Buenos Aires province (mid-2024) | **Opportunity (service-led, weak)** | Clear trigger and pain, but the DT-e is free and self-service, so this only works as a done-for-you service run through the salas |
| 4 | Households employing domestic workers | ARCA RG 5850/2026: electronic payslip mandatory from May 2026 wages, plus monthly F.102 contributions | Many employers are older households, and the payslip used to be on paper | More than 600,000 registered employment relationships (ARCA) | **Rejected** | ARCA's free web service and app, the UPACP union's free calculator, many free calculators, an open-source tool, and accountants already cover it. Buyers are consumers |
| 5 | Elevator maintenance firms (conservadoras) | CABA "Ascensores Registrados" (validate each elevator, digital inspection book, yearly QR sticker); Rosario Ordinance 6035/1995 register; Córdoba register | Municipal portals and PDF lists of licensed firms | CABA publishes an open-data CSV of conservadoras (count not read, fetch blocked); Rosario publishes a PDF list | **Watch** | "One job, many receiving authorities" shape, but CABA is already digital and no 2025–2026 trigger was confirmed. Content of Disp. DGFYCO 751/2026 not verified |
| 6 | Pest control and water-tank cleaning firms (CABA and other municipalities) | Monthly disinfection and six-monthly tank-cleaning certificates; firm registers; security stickers (obleas); APRA's EDA digital certificate system | Each municipality has its own register and oblea (CABA, Mar del Plata, Santa Fe city) | Unknown | **Rejected for now** | CABA, the largest market, already sells certificates online through APRA's EDA (since 2015). Other cities are small and no trigger was found |
| 7 | Vehicle dismantlers and used-parts dealers (RUDAC) | Ley 25.761; DNRPA Disp. 730/2025 moved registration online (TAD) | Registration awareness campaign; illegal yards raided | Unknown | **Rejected** | The national regulator itself digitised the process in 2025. What remains is registration, not a recurring report |
| 8 | Rural employers and seasonal-labour contractors | RENATRE registration and contributions | Free RENATRE portal; new free PER job platform (Res. 20/2026) | Unknown | **Rejected** | No new recurring obligation in 2025–2026; payroll vendors and accountants cover it |
| 9 | Tattoo and piercing studios | Provincial health permits; client register book (La Pampa); minors' consent | Paper books required by old provincial laws | Unknown | **Rejected** | Laws date from 2005–2012 with no trigger; studios are online-native |
| 10 | CNG conversion workshops (talleres de montaje GNC) | ENARGAS yearly inspection and sticker; national CNG sticker traceability system (2025) | Regulator-run systems through PECs (licensed CNG equipment producers) | ENARGAS list (count not retrieved) | **Rejected** | ENARGAS and the PECs own the data flow, so there is no room for a third party |
| 11 | Lottery agencies (agencias de quiniela) | Provincial lottery rules, anti-money-laundering training | Provincial lottery terminals | More than 4,300 agencies in Buenos Aires province (Lotería BA) | **Rejected** | Every transaction runs on the lottery's own terminal; no independent workflow |
| 12 | Honey extraction rooms (as a buyer, not a channel) | SENASA Res. 353/2002 room approval; receiving DT-e | Same as row 3 | Unknown | **Folded into #3** | Better as a channel than as the buyer |
| 13 | Livestock transport and hacienda movements | SENASA DT-e | Already electronic for years | — | **Rejected** | Mature government system; cattle e-ID already covered in the country report |

---

## 2. Opportunities

### Opportunity: SIGTRAZAVET "sell once, report once" bridge for agroveterinarias and rural vets

**Industry:**
Veterinary product retail and distribution (agroveterinarias, veterinary pharmacies, regional distributors) and rural large-animal vets.

**Buyer:**
Owner or counter manager of a rural agroveterinaria. Secondary buyers:
- regional distributors, who must register each dispatch and have receipts confirmed;
- rural vets issuing electronic veterinary prescriptions (RVEs).

**Trigger / Why now:**
- **SENASA Res. 654/2026** (Boletín Oficial, July 21, 2026) creates **SIGTRAZAVET** and the **electronic veterinary prescription (RVE)**.
- Use is mandatory for everyone in the chain: importers, labs, packers, distributors, **retail stores**, vets and producers.
- Each user registers by CUIT and georeferences every warehouse.
- **Distribution and sales must be registered in real time.** Manufacturing and imports have 96 hours.
- The receiving party must confirm each movement within 20 days.
- SENASA later clarified that the system applies to a **list of products**, not all medicines. Examples given:
  - psychotropics (ketamine);
  - hormones (estradiol);
  - antimicrobials reserved for human health (fosfomycin, polymyxin B; already under the virtual prescription since Res. 80/2025);
  - official-programme biologics (foot-and-mouth and Aujeszky vaccines).
- The rollout is progressive by product category.

**Current workflow (inferred from the regulation; unverified in interviews):**
1. The store sells the product at the counter in its own invoicing or POS system (ARCA e-invoice), often in a rural town with poor connectivity.
2. For a scoped product, the store must check the buyer's RVE, which the vet issued separately in SENASA's system.
3. The store then registers the sale in SIGTRAZAVET in real time: product, lot, quantity, buyer, prescription.
4. When the distributor delivers, the store confirms receipt within 20 days.
5. Stock in SIGTRAZAVET must match physical stock and the store's own system, so someone reconciles the two by hand.

**Pain:**
- Eight rural associations in northern Buenos Aires province publicly rejected the system: the Sociedades Rurales of San Antonio de Areco, Rojas, Baradero, Pergamino, Lincoln and Colón, plus ARPA and APRA. They cite new red tape and costs, and asked for suspension (La Nación, July 31, 2026; Agroempresario).
- Bichos de Campo carried the quote "not only unpronounceable but an illegal and unconstitutional delusion". The equine sector asked to exclude sport horses.
- The real-time requirement is flagged as a connectivity and operational problem.
- The Colegio de Veterinarios de la Provincia de Buenos Aires (CVPBA) published guidance on the new rules and on issuing RVEs, which shows professionals need help.

**Existing solutions:**
- **SIGTRAZAVET itself** (free SENASA web system), plus SENASA's RVE module.
- **Verifarma Vet**: an established traceability service (Verifarma is the incumbent in human-pharma ANMAT traceability) that markets SENASA-compliant veterinary traceability. It is the most likely competitor for labs and distributors. Its retail pricing and its SIGTRAZAVET integration are **unverified**.
- **General ERPs** used by distributors (Tango, Tryton-based deployments such as Profeed): SIGTRAZAVET modules **unverified**.
- **Clinic software** (GVET and similar): aimed at pet clinics, not rural counters.
- **Paper, WhatsApp and the store's accountant.**

**Offline evidence:**
- The buyers are rural counter shops with poor connectivity.
- The complaints come from rural societies (sociedades rurales), not from forums.
- No SaaS review pages for agroveterinaria software turned up.
- The prescription moved from paper to electronic only with this resolution.

**Offline channel:**
- The CVPBA and other provincial veterinary colleges, which already run information sessions on the RVE.
- Regional veterinary distributors, which must get their customers to confirm receipts and so have a reason to push a tool down to stores.
- The entes sanitarios and fundaciones that run foot-and-mouth vaccination: SENASA presented system updates at their national congress, and they handle scoped vaccines.
- The sociedades rurales that complained, as a sign of where demand sits.

**Market count:**
- Unknown. SENASA did not surface a count of registered veterinary stores.
- **Estimate:** several thousand retail outlets nationally (unverified). First step: request the SENASA register or the provincial colleges' listings.

**The gap:**
- No source shows a light tool for **small retail counters** that:
  - checks the RVE;
  - captures lot data at sale;
  - queues registrations offline and syncs them when connectivity returns;
  - reconciles SIGTRAZAVET stock with the shop's invoicing.
- Verifarma-style services target labs and distributors. Clinic software targets pet clinics.

**Possible product:**
A tablet or phone counter app for agroveterinarias. It scans the product barcode or lot, looks up the buyer's RVE, records the sale, and pushes it to SIGTRAZAVET (via API if SENASA exposes one, or else assisted form fill). It also keeps an inspection-ready ledger and a daily stock reconciliation against the store's ARCA invoices.

**MVP:**
- An offline-first mobile web app covering the scoped product list only.
- Lot capture, RVE number capture, a queue with "registered / pending" status, and a CSV of sales the store owner can hand to an accountant or inspector.
- A Chrome-extension filler for SIGTRAZAVET if no API exists.

**Pricing hypothesis:**
- USD 15–40/month per store (ARS equivalent).
- Distributors pay USD 100–300/month to bundle it for their customer stores.
- Willingness to pay: probably **software only if bundled by a distributor**. Small stores may only pay for a done-for-you or bundled option.

**How to find first customers:**
- The CVPBA and other provincial veterinary college member lists.
- Distributor customer lists, approached through 2–3 regional distributors.
- Stores in the towns whose sociedades rurales signed the rejection letter (Pergamino, Rojas, Areco, Lincoln, Colón, Baradero, Arrecifes).

**Founder access:**
Needs a local, or at least a Spanish-speaking founder with a local partner. Selling runs through veterinary colleges and distributors in person, and SENASA access needs a CUIT.

**Risks:**
- Political pushback could lead SENASA to suspend or delay the resolution. The government is otherwise deregulating.
- The scope is narrow (a controlled list), so per-store volume of scoped sales may be low. Foot-and-mouth vaccines flow mostly through entes sanitarios, not retail.
- Verifarma or ERPs may add retail modules.
- SENASA may publish no API.

**Kill condition:**
Kill the idea if any of these turns out true:
- SENASA suspends or delays Res. 654/2026 beyond 2027;
- interviews show fewer than about 5 scoped sales per store per day;
- distributors say Verifarma or their ERP already pushes registrations on stores' behalf.

**Score:** 5/10. Strong trigger, mandatory, angry users, reachable through colleges and distributors. The narrowed product scope, political-suspension risk and an existing traceability incumbent (Verifarma) cap it.

**Sources:**
- Res. 654/2026, Boletín Oficial: https://www.boletinoficial.gob.ar/detalleAviso/primera/344632/20260721
- CIRA summary: https://www.cira.org.ar/es/servicios/normativas-servicios/resolucion/resolucion-654-2026/
- Estudio O'Farrell: https://www.estudio-ofarrell.com/el-senasa-crea-un-sistema-integral-de-trazabilidad-de-productos-veterinarios-y-reglamenta-la-receta-veterinaria-electronica/
- Infobae, July 25, 2026: https://www.infobae.com/revista-chacra/2026/07/25/el-senasa-digitaliza-el-control-de-los-medicamentos-veterinarios-y-fortalece-la-trazabilidad-sanitaria/
- La Nación, rejection by eight entities: https://www.lanacion.com.ar/economia/campo/ocho-entidades-rurales-rechazaron-el-nuevo-sistema-de-trazabilidad-de-medicamentos-veterinarios-del-nid31072026/
- Agroempresario, suspension request: https://agroempresario.com/publicacion/120182/entidades-rurales-cuestionan-el-nuevo-sistema-de-trazabilidad-del-senasa-y-piden-suspender-su-implementacion/
- Bichos de Campo, "delirio ilegal": https://bichosdecampo.com/no-solo-es-impronunciable-sino-que-constituye-un-delirio-ilegal-e-inconstitucional-crece-el-rechazo-del-sector-privado-al-nuevo-sistema-de-senasa-para-regular-la-venta-de-los-produc/
- Bichos de Campo, SENASA clarifies the scope: https://bichosdecampo.com/recien-ahora-se-acordaron-de-informar-frente-al-aluvion-de-criticas-a-su-nuevo-sistema-de-trazabilidad-senasa-aclaro-que-sera-solo-para-algunos-medicamentos-veterinarios/
- Bichos de Campo, equine sector: https://bichosdecampo.com/el-sector-equino-tampoco-esta-contento-con-el-nuevo-sistema-para-trazar-productos-veterinarios-de-senasa-y-pidio-excluir-a-los-caballos-deportivos-de-la-norma/
- CVPBA guidance: https://cvpba.org/nuevas-normativas-de-trazabilidad-y-emision-de-rev-senasa/
- Res. 80/2025 (fosfomycin and polymyxin virtual prescription): https://www.cira.org.ar/es/servicios/normativas-servicios/resolucion/resolucion-80-2025/
- Verifarma Vet: https://verifarma.com/verifarmavet/
- SENASA at the fundaciones and entes congress: https://www.argentina.gob.ar/noticias/actualizaciones-del-sistema-veterinario-en-el-congreso-nacional-de-fundaciones-y-entes

---

### Opportunity: Digital operations book for scrap and non-ferrous metal dealers across provincial registers

**Industry:**
Scrap and non-ferrous metal collection and trading (chatarrerías, metal collectors, small foundries), plus used-goods and used-parts traders covered by the same registers.

**Buyer:**
Owner of a licensed chatarrería or metal collection yard, typically family-run.

**Trigger / Why now:**
Provinces are passing cable-theft laws one at a time:
- **Santa Fe Ley 14.191** creates a non-ferrous metals register under the RE.DE (the provincial register of dismantlers, scrap and used goods). Its regulation requires a numbered, rubricated book and gave existing businesses 30 days. Rosario is adhering by ordinance.
- **Mendoza** has a copper trading law.
- **San Luis** promulgated a law in November 2025.
- **Entre Ríos** published one in the provincial gazette in May 2025 (details **unverified**).
- **Río Negro** has a bill on non-ferrous trade.
- A **Buenos Aires province** bill for a recovered-metals traceability register was advancing in August 2026 (La Plata YA headline; text **unverified**).

The common requirements, as summarised across laws:
- a seller ID record;
- a sworn declaration for loads over 3 kg or any utility cable;
- a digital record of each operation (buyer, seller, metal type, quantity, price, declared origin, transport guide number);
- a paper book foliated and rubricated by the authority.

**Current workflow (inferred):**
1. A seller arrives with metal and the yard weighs it.
2. The yard writes the seller's name, DNI, material and weight in a paper book.
3. For cable or loads over 3 kg, it fills in a sworn-declaration form.
4. Where the law requires a digital record, it re-types the same data into a spreadsheet or government system (form and format **unverified** per province).
5. It shows the book at police or registry inspections. Raids (for example Santa Fe RE.DE) shut unregistered yards.

**Pain:**
- Per-transaction recording. Enforcement is visible: RE.DE joint inspections with municipalities, and the seizure of 400 tonnes of parts, cables and bronze in Santa Fe.
- Closure is the consequence.

**Existing solutions:**
- Paper books (stationers; rubricated by the authority).
- Any provincial or police system (**unverified** whether Santa Fe or Mendoza offer an online log).
- Generic scale or weighbridge software.
- No Argentine scrap-yard compliance software found.

**Offline evidence:**
- The laws mandate paper books.
- The operators are informal and often older.
- No forum or SaaS presence. Evidence comes only from gazettes, legislatures and police news.

**Offline channel:**
- The RE.DE (Santa Fe) and other provincial registers, which list registered yards and run inspections.
- Municipal licensing (registration is a precondition for municipal licence).
- Scale and weighbridge suppliers.
- Large metal buyers and foundries, which could require their supplying yards to keep a clean digital trail.

**Market count:**
Unknown. No register size surfaced. **Estimate:** hundreds per large province, many unregistered.

**The gap:**
One capture at the scale, using DNI photo or scan, weight, material and photo, could produce both the per-province digital record and a printable page for the rubricated book, plus a sworn-declaration PDF.

**Possible product:**
A phone app at the scale. It photographs the seller's DNI and the load, records weight and material, auto-generates the sworn declaration, and exports in each province's required format. It prints daily pages matching the official book.

**MVP:**
Santa Fe only: DNI scan, transaction record, sworn-declaration PDF, daily book printout and monthly export.

**Pricing hypothesis:**
USD 10–25/month per yard. Low willingness to pay; more likely sold to foundries or large buyers as a supplier-compliance tool.

**How to find first customers:**
RE.DE public listings, if any (**unverified**); municipal licence lists in Rosario and Santa Fe city; scale suppliers.

**Founder access:**
Requires a local. The buyers are wary of outsiders and of anything that looks like a police tool.

**Risks:**
- Informality: many yards avoid registration altogether.
- The digital record format is undefined or not yet regulated in several provinces.
- Provinces may build their own app.
- The product may be perceived as a surveillance tool.

**Kill condition:**
Kill the idea if a province publishes a free mobile app for the operations log, or if interviews show yards keep only the paper book and are never asked for a digital record.

**Score:** 3.5/10. Real fragmentation and enforcement, but poor willingness to pay, an informal buyer and an unclear digital format.

**Sources:**
- Santa Fe Ley 14.191 regulation: https://www.ellitoral.com/politica/metales-no-ferrosos-acopiadores-ejecutivo-santa-fe-registro-reglamentacion-ley-boletin-oficial_0_T1ggYNNiGe.html
- Santa Fe government note: https://www.santafe.gob.ar/noticias/noticia/280920/
- Rosario adhesion: https://www.lacapital.com.ar/la-ciudad/aprobaron-comision-la-adhesion-la-ley-que-crea-el-registro-chatarrerias-n10085904.html
- RE.DE: https://www.santafe.gov.ar/index.php/web/content/view/full/237360/(subtema)/252250
- Seizure of 400 tonnes: https://www.ellitoral.com/area-metropolitana/incautaron-400-toneladas-repuestos-autos-cables-placas-bronce-cobre_0_eUxIZ2zj0C.amp.html
- Mendoza law: https://www.sitioandino.com.ar/politica/es-ley-la-regulacion-compraventa-cobre-mendoza-evitar-robos-n5643441
- San Luis law (November 2025): https://agenciasanluis.com/2025/11/20/1118710-el-gobernador-promulgo-la-ley-que-pondra-freno-al-robo-de-cables-de-cobre-y-metales-ferrosos/
- Entre Ríos gazette (May 23, 2025): https://www.entrerios.gov.ar/boletin/calendario/Boletin/2025/Mayo/23-05-25.pdf
- Buenos Aires province bill (August 2026): https://laplataya.com.ar/2026/08/14/avanza-un-proyecto-de-ley-para-frenar-el-mercado-ilegal-de-cobre-y-metales-recuperados-en-la-provincia/
- Río Negro: https://rionegro.gov.ar/articulo/47087/el-gobierno-provincial-busca-regular-el-comercio-de-metales-no-ferrosos

---

### Opportunity: DT-e honey-super transit filing as a service run through extraction rooms

**Industry:**
Beekeeping and honey extraction.

**Buyer:**
The owner of a SENASA-approved extraction room (sala de extracción) or a beekeeping cooperative, filing on behalf of the beekeepers who bring supers to it. The individual beekeeper is the end user.

**Trigger / Why now:**
- SENASA and the Agriculture Secretariat made the **DT-e mandatory for moving honey supers (alzas melarias) from apiary to extraction room from August 1, 2026**, replacing the paper remito. It is part of the beekeeping traceability system (SITA).
- The rollout is gradual for the current harvest.
- Both the origin (the RENAPA record and every apiary) and the destination (the room) must be registered and current.

**Current workflow:**
1. The beekeeper harvests supers.
2. The beekeeper self-issues a DT-e online, which needs Clave Fiscal access, a current RENAPA record and apiary georeferencing.
3. The beekeeper transports the supers.
4. The extraction room receives them against the DT-e.

Older beekeepers without digital habits fall back on the room, an agronomist or relatives.

**Pain:**
- Bichos de Campo ran "persiste la molestia… desde agosto será obligatorio un nuevo trámite para la cosecha de miel" ("annoyance persists… from August a new procedure will be mandatory for the honey harvest").
- CARBAP accused SENASA of adding unnecessary procedures. The rejection is said to come mainly from veteran beekeepers.
- The harvest is the scarcest time of the season.

**Existing solutions:**
- The free SENASA DT-e (self-managed).
- Help from the extraction room or cooperative.
- Provincial beekeeping programmes and agronomists.
- Not found: any beekeeping app that issues DT-e.

**Offline evidence:**
A paper remito until 2026, a veteran user base, and complaints channelled through rural associations and agro press.

**Offline channel:**
- SENASA-approved extraction rooms (each sees dozens of beekeepers per season).
- Beekeeping cooperatives.
- Provincial beekeeping tables (the Buenos Aires province Mesa Apícola).
- National Honey Week events.

**Market count:**
- More than 19,000 RENAPA beekeepers nationally (about 2023).
- 6,777 in Buenos Aires province and 20,050 georeferenced apiaries (mid-2024).
- Number of extraction rooms unknown.

**The gap:**
The room or cooperative has no tool to batch-file and track DT-e for its suppliers, or to keep each supplier's RENAPA and apiary data current.

**Possible product:**
A cooperative or extraction-room dashboard. It holds each supplier's RENAPA, apiaries and delegated access, pre-fills DT-e for each harvest load, and reconciles received supers against DT-e and honey drum labelling.

**MVP:**
A spreadsheet-backed web form plus a filing checklist service for one cooperative during the 2026–27 harvest.

**Pricing hypothesis:**
USD 20–50/month per room or cooperative, or a per-DT-e service fee. Beekeepers would pay only for done-for-you filing, not for software.

**How to find first customers:**
The SENASA register of approved extraction rooms (public availability **unverified**), beekeeping cooperatives, and the Buenos Aires province Mesa Apícola.

**Founder access:**
Requires a local, because the channel is in-person through cooperatives.

**Risks:**
- The DT-e is free and simple once the RENAPA record is clean.
- It is seasonal (harvest only), so frequency is low.
- Margins in the honey business are thin.
- SENASA may soften the requirement after protests.

**Kill condition:**
Kill the idea if rooms report that beekeepers file a DT-e in under 5 minutes, or if rooms already file for free as a courtesy.

**Score:** 3/10. Clear trigger and offline channel, but seasonal, free government tool and very low willingness to pay.

**Sources:**
- Argentina.gob.ar, DT-e for extraction rooms: https://www.argentina.gob.ar/noticias/apicultura-encuentro-con-el-sector-sobre-el-uso-del-dt-e-en-envios-salas-de-extraccion-de
- La Gaceta: https://www.lagaceta.com.ar/nota/1139918/economia/rige-dte-para-llevar-alzas-melarias.html
- Bichos de Campo, annoyance: https://bichosdecampo.com/persiste-la-molestia-entre-los-apicultores-porque-desde-agosto-sera-obligatorio-un-nuevo-tramite-para-la-cosecha-de-miel/
- Bichos de Campo, CARBAP: https://bichosdecampo.com/polemica-en-torno-al-nuevo-dt-e-apicola-carbap-acusa-al-senasa-de-desconocer-la-realidad-del-sector-y-agregar-tramites-innecesarios-a-los-productores/
- Bichos de Campo, Córdoba veteran in favour: https://bichosdecampo.com/sergio-toranzo-es-un-veterano-apicultor-de-cordoba-que-banca-que-senasa-exija-el-dt-e-para-el-traslado-de-las-colmenas-sus-razones/
- 19,000 RENAPA beekeepers (Res. 1186/2023 programme context): https://contadoresenred.com/programa-de-fortalecimiento-productivo-de-la-cadena-apicola-resolucion-1186-2023/
- 6,777 beekeepers in Buenos Aires province: https://www.lacapitalmdp.com/crece-la-actividad-apicola-en-la-provincia-de-buenos-aires/

---

## 3. Rejected

- **Household employers of domestic workers:**
  - The trigger is real. ARCA RG 5850/2026 made the electronic payslip mandatory from May 2026 wages, covering more than 600,000 relationships.
  - Substitutes are free and good enough:
    - ARCA's "Registro Especial del Personal de Casas Particulares" web service and the Casas Particulares app;
    - the UPACP union's free calculator;
    - many free calculators (calcularsueldo.com.ar, espaciolegal.ar);
    - an open-source tool on GitHub;
    - accountants.
  - The buyer is a consumer household, which runs into the "consumer behaviour change" trap.
- **Pest control and tank cleaning certificates (CABA):** APRA's EDA system already sells and generates certificates online with QR stickers (since 2015). Other municipalities are fragmented but small, and no 2025–2026 trigger was found.
- **Elevator maintenance firms:** CABA's "Ascensores Registrados" and its digital inspection book already exist. Rosario and Córdoba registers exist but no new obligation was confirmed. Revisit if Disp. DGFYCO 751/2026 turns out to be a new reporting duty.
- **RUDAC dismantlers (Ley 25.761):** DNRPA Disp. 730/2025 put registration fully online through TAD. It is one-off registration and renewal, not a recurring filing.
- **RENATRE rural labour:** no new recurring duty; the PER job platform is free.
- **Tattoo studios:** old provincial laws, no trigger, an online-native trade.
- **CNG workshops:** ENARGAS and the PECs own the system end to end.
- **Lottery agencies:** every transaction runs on the provincial lottery's own terminals.

## 4. Method notes

What worked:
- Agro-press headlines (Bichos de Campo especially) combined with the Boletín Oficial and CIRA summaries surfaced the 2026 SENASA triggers (SIGTRAZAVET, honey DT-e) together with insider complaints.
- Provincial-newspaper queries ("registro de chatarrerías", "robo de cables ley") revealed the province-by-province scrap laws.
- Official Buenos Aires city portal searches showed the field-trade registers (elevators, pest control, tanks) are already digital.

What did not work:
- Register counts (veterinary stores, scrap yards, elevator firms, extraction rooms) rarely appear in search summaries.
- The CABA open-data CSV exists but could not be fetched (proxy 403).
- Queries on dealer-register software and on vendor pricing returned almost nothing, which is consistent with offline industries but leaves competitor diligence thin.

Research model: Opus
