# Chile: Offline / Quiet-Industries Pass

*Research date: 2026-10-05. I used 34 of the 40 WebSearch calls. One call was refused by a session limit and later retried. WebFetch was not used. Every fact comes from search-result summaries of the cited URLs. Items marked **(unverified)** or **(estimate)** still need a first-hand check. This pass does not repeat the opportunities in `research/countries/chile.md`: private security under Ley 21.659, subcontractor accreditation packs, REP for electronics, RILes self-monitoring, and net-billing paperwork.*

---

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| **Farmers / growers who spray bee-toxic pesticides** | Ley Apícola 21.489: before each application, give 48-hour notice to every registered beekeeper in the farm's "area of influence" by a verifiable means (email, SMS or written note). In force for "very toxic" products since 26 Jan 2026 and for "moderately toxic" products since 26 Apr 2026. | SAG only publishes a lookup site (cpa.sag.gob.cl). It does not send the notices. The farmer looks up contacts and sends emails, SMS or paper notes by hand, and must keep proof. | 176,570 farm units (Censo Agropecuario 2021); about 383,000 ha of fruit (Catastro Frutícola 2025); 10,504 registered beekeepers (SAG, 2023) | **Opportunity** | A fresh 2026 trigger with a per-application frequency. The government tool stops at lookup, and no vendor was found automating the notice-plus-proof step. |
| **Groundwater-right holders, small standards (farmers, rural water systems)** | DGA Res. 1238 Effective-Extraction Monitoring (MEE): install a flowmeter and report readings to DGA. The "Menor" standard reports monthly by form and "Caudales muy pequeños" reports twice a year. | Readings are typed by hand into the DGA's MEE software. DGA extended the deadlines to 60 and 72 months because it had reached too few small holders. | Not found. Applies only in basins under a regional MEE resolution. MEE breaches are 38% of the most-fined Water Code infractions (cruzat.com). | **Opportunity (moderate)** | A mandatory, enforced, recurring manual report, with small holders now in their compliance window. But MiPozo.cl and telemetry vendors already target it. |
| **Horse owners: rodeo, breeding, equestrian** | SAG Res. Ex. 7,392/2026 requires a microchip (DIIO) and SIPEC registration. Sport and breeding premises have been covered since 25 Aug 2026. The round-trip FMA was abolished, so every rodeo trip now needs two FMAs. | FMAs are filed on SIPECweb or on paper at SAG offices, and owners need a RUP. SAG ran an inspection campaign in Fiestas Patrias 2026. | 300 clubs and 42 associations; more than 650 rodeos in 2024–25 (Federación del Rodeo) | **Weak opportunity** | Per-event frequency and a new rule, but the form is free and simple and the money per owner is small. |
| Livestock fairs (ferias ganaderas) | Record entries and exits in the SIPEC fair module within 3 business days. FMA required before receiving animals. | Paper and electronic FMAs coexist. | About 80% of cattle pass through fairs, but the sector is concentrated (FEGOSA and Tattersall own about 85% of facilities in one region) | Reject | Few buyers, and the large operators run in-house systems (unverified). |
| Beekeepers | Annual registration and apiary declaration (FRADA) each October in SIPEC Apícola | Can still be filed on paper at SAG offices | 10,504 registered (SAG, 2023) | Reject | Annual, free and low-value. Beekeepers are the *receivers* in opportunity #1, not the payers. |
| Households employing domestic workers | Register the contract with the DT within 15 days. Monthly contributions including a 4.11% severance fund and 3% unemployment insurance. Finiquito within 10 business days. | Much is done at the counter or by the household itself | About 300,000 workers (DT, Ley 20.786 material) | Reject | Previred's free household module and the DT portal cover the core workflow. Willingness to pay is very low and the buyer is a consumer. |
| Scrap / copper dealers | No national dealer register exists. Only bills exist, such as making ENAMI the sole copper buyer (Cámara Res. 511). | n/a | Cable thefts rose from 172 to 461 between 2021 and 2025 (reporteminero) | Reject (no trigger) | No enacted register obligation as of Oct 2026. Re-check if a cable-theft law passes. |
| Firewood producers and sellers | Ley 21.499 requires SEC registration and producer certification | Informal sector, sales largely in cash | Unknown | Watch | The regulation was still unpublished (public consultation closed May 2025). There is no live obligation yet. |
| Rural sanitary services (SSR, formerly APR) | Ley 20.998: licence, SISS oversight and tariff-setting | Volunteer committees, often keeping paper ledgers | About 2,400–2,600 SSR (DOH; DF) | Reject | APR Software already serves more than 300 SSR with billing and IoT. Buyers are cash-poor committees. |
| Artisanal fishers | Landing declaration (DA) to Sernapesca per trip | Electronic is the default; paper only in force majeure | Not found | Reject | Free government system, already digital. |
| Agricultural labour contractors | Sworn registration as an agricultural intermediary with the DT (Mi DT); shearing gangs must also register (Labour Code art. 92 bis) | Online via Mi DT, or at the counter | Not found | Reject | Essentially a one-off registration. The monthly payroll work is covered by payroll SaaS (see the country report). |
| Pesticide sellers and stores (SAG Res. 243/2025) | Lot number on sales documents, storage rules, applicator certification. In force since 20 Jan 2026, with a modification published Sept 2025. | Not verified | Not found | Fold into #1 | The status of the separate 48-hour notice *to SAG* after the Sept 2025 change is **unverified**. |

---

## 2. Strongest opportunities

### Opportunity: Bee-notice router for pesticide applications (Ley Apícola "avisaje")

**Industry:**
Fruit and field-crop growers, plus the contract spray services and farm advisers (asesores) who plan their applications.

**Buyer:**
The field manager or agronomist (jefe de campo / asesor técnico) at a medium fruit or seed farm. A second buyer is the contract spraying company, which runs many applications for many farms.

**Trigger / Why now:**
Ley 21.489 and its technical standard. Since **26 Jan 2026**, applications of products classed "very toxic" to bees need 48 hours' notice to every beekeeper in the area of influence. Since **26 Apr 2026**, the rule also covers "moderately toxic" products. SAG's "Consulta para Avisaje" site (cpa.sag.gob.cl) only shows the beekeeper contacts. SAG states it does not send the notices. The applicator must notify by a verifiable means.

**Current workflow:**
1. The agronomist decides on a spray and checks the product's bee-toxicity class.
2. They open cpa.sag.gob.cl and look up the beekeepers registered near the field (contacts come from SIPEC Apícola).
3. They copy the contacts and send each beekeeper an email or SMS, or deliver a written note, at least 48 hours before the application.
4. They keep screenshots and sent emails as proof, and respect the application time windows (dawn and dusk).
5. They repeat this for every application, every block and every farm. Migratory beekeepers change the list during the season.

**Pain:**
The duty applies per application, so it can happen several times a week in season. If the farmer fails to notify and bees die, the beekeeper can sue in civil court (sancarlosonline, Jun 2026). Agro media framed the duty as burdensome when it was announced ("Insólito: ahora los agricultores tendrán que avisar…", araucaniadiario). Migratory beekeepers make the recipient list change during the season. I found no direct quote counting hours lost **(gap: confirm in interviews)**.

**Existing solutions:**
- SAG cpa.sag.gob.cl: free lookup only. It sends no notices and keeps no proof log.
- Manual email or SMS from the agronomist's phone, plus WhatsApp.
- Farm-record and GlobalG.A.P. field-notebook software, which records the application but was not found sending beekeeper notices **(unverified; check the Chilean agtech players)**.
- An Argentine precedent: a georeferenced bee-alert platform for locust control (bichosdecampo). It is not available in Chile.

**Offline evidence:** The notice must be email, SMS or *written in person*. Beekeeper contacts live in a SAG lookup that was itself fed partly by paper FRADA forms. No commercial listings or reviews exist for this task.

**Offline channel:** Grower associations (Fedefruta, SNA, ANPROS seed growers, which published a notice on the April start). Agrochemical distributors and their technical reps, who already visit every grower. SAG regional briefings. Agronomist consultancies, where one adviser covers 10–30 farms.

**Market count:** 176,570 farm units in total (INE Censo 2021). The realistic target is fruit and seed growers who spray bee-toxic products: about 383,000 ha of fruit (Catastro Frutícola 2025). An **estimate** of 5,000–15,000 farms run by professional managers.

**The gap:**
Nothing links "I plan an application" to "every registered beekeeper is notified by a verifiable means, and proof is stored". The SAG lookup ends at the contact list.

**Possible product:**
The farm draws its blocks once. For each planned application, the user picks the product (a lookup flags its bee-toxicity class) and the time. The tool sends timestamped SMS or email notices to the beekeepers in range and stores a proof PDF per application. It can also warn when the planned time falls outside the allowed windows.

**MVP:**
A web form for the block, product and date. The user pastes or uploads the beekeeper contacts from cpa.sag.gob.cl, since no API is known. The tool sends the SMS and email batch through a gateway and produces a proof PDF. Integrating with field-notebook software comes later.

**Pricing hypothesis:**
About CLP 15,000–40,000 per month per farm in season, or per-application credits of about CLP 1,000–2,000. Contract sprayers and advisers pay about CLP 80,000+ per month for multiple farms. Whether this is software or a done-for-you service: software, because the agronomist already does the task. Willingness to pay is modest. The value is avoided liability, not hours saved.

**How to find first customers:**
ANPROS and Fedefruta member lists. Agrochemical distributors' grower lists, through a co-marketing pitch ("comply when you buy"). Agronomist consultancies.

**Risks:**
- cpa.sag.gob.cl may forbid bulk export or scraping, which would keep the contact step manual.
- SAG could add automatic notices to SIPEC, as the Argentine precedent did.
- Field-notebook vendors could add the feature quickly.
- The season is short in the far south.
- **Founder access:** a non-local founder could build it, but selling through distributors and associations needs a Spanish-speaking local partner.

**Kill condition:**
SAG announces that it will send the notices itself. Or 10 agronomist interviews show that they notify by one WhatsApp group in 2 minutes and feel no liability.

**Score:** 6/10 *(Pain 6, Frequency 8, Mandatory 9, Fragmentation 4, Competition 7, Incumbent gap 7, Buyer access 6, WTP 4, MVP 8, Distribution 6)*

**Sources:**
- https://www.sag.gob.cl/noticias/sag-llama-informarse-ante-nueva-obligacion-de-avisar-aplicaciones-de-plaguicidas-toxico-para-las-abejas
- https://www.radiosago.cl/ley-apicola-desde-el-26-de-abril-es-obligatorio-avisar-la-aplicacion-de-plaguicidas-moderadamente-toxicos/
- https://www.anproschile.cl/comenzo-obligacion-de-avisar-la-aplicacion-de-plaguicidas-moderadamente-toxicos-para-las-abejas/
- https://www.latribuna.cl/agroforestal/2026/02/04/agricultores-deberan-avisar-con-48-horas-de-anticipacion-el-uso-de-plaguicidas-revisa-las-restricciones.html
- https://www.sancarlosonline.cl/2026/06/apicultores-advierten-fallas-en-la.html
- https://www.sag.cl/sites/default/files/Aviso_aplicacion_plaguicidas_Art_12_Ley_apicola_para_CP..pdf
- https://araucaniadiario.cl/contenido/27762/insolito-ahora-los-agricultores-tendran-que-avisar-al-sag-antes-de-fumigar
- https://www.sag.gob.cl/noticias/aumenta-numero-de-apicultoresas-registrados-en-el-sag
- https://www.odepa.gob.cl/publicaciones/articulos/censo-agropecuario-y-forestal-2021-distribucion-de-las-unidades-productivas
- https://bichosdecampo.com/abejas-georeferenciadas-disenaron-una-plataforma-que-busca-evitar-la-mortandad-de-colmenas-a-causa-de-intoxicaciones-por-agroquimicos

---

### Opportunity: MEE small-well reporting service for farmers and rural water systems

**Industry:**
Groundwater-right holders on the "Menor" and "Caudales muy pequeños" standards: small farmers, irrigators, livestock farms and rural water systems (SSR).

**Buyer:**
The farm owner or administrator, or the SSR committee treasurer. Irrigation-community managers (comunidades de aguas / juntas de vigilancia) are possible aggregators.

**Trigger / Why now:**
DGA Res. 1238 (2019) and its regional MEE resolutions. The deadlines for small standards were extended to 60 months for installing the meter and 72 months for starting transmission. As of April 2026, large and medium extractors have passed their deadlines and small extractors are in their compliance window (cruzat.com). DGA published a new web-service manual in July 2025 and an updated MEE user manual in November 2025.

**Current workflow:**
1. The holder installs a flowmeter (the "Caudales muy pequeños" standard needs only a totalizer).
2. Every month (Menor) or twice a year (Caudales muy pequeños), someone reads the meter.
3. They log into the DGA MEE software and type each reading by hand into the form.
4. They keep records against inspections. Missing reports draw fines of 1st or 2nd degree and can lead to the right being suspended or reduced.

**Pain:**
MEE breaches are 38% of the most-fined Water Code infractions. DGA resolved more than 1,000 inspections in 2025, with 434 infractions fined. DGA itself says it reached small holders too poorly, and the trade press called DGA's push "disproportionate and unfair".

**Existing solutions:**
- The DGA MEE software (free form, Excel or online upload).
- MiPozo.cl, a dedicated MEE guidance and service site (offer and pricing **unverified**).
- Telemetry vendors such as Peregrine Telemetry and Clickie, plus many flowmeter installers. These serve the larger standards.
- Water-law firms (Carey, Guerrero, Cruzat) for larger clients.

**Offline evidence:** Readings are typed by hand. The target holders are older farmers and volunteer water committees, and the DGA runs online training sessions to reach them.

**Offline channel:** Juntas de vigilancia and comunidades de aguas (one manager reaches dozens of wells), flowmeter installers, INDAP extension programmes, and DGA regional training sessions.

**Market count:** Not found. The obligation is limited to basins under a regional MEE resolution (Valparaíso, O'Higgins, Coquimbo, Tarapacá, Atacama and others). **Estimate:** thousands to low tens of thousands of wells. The DGA's list of obliged works could be requested under the transparency law.

**The gap:**
A cheap "read-and-report for me" service for wells that are too small to justify telemetry, plus deadline tracking across a junta's wells.

**Possible product:**
An SMS or WhatsApp photo-of-meter capture. The service, or a staffer at the junta, files the reading on the DGA form, and a dashboard shows each well's compliance status. It is a service plus software.

**MVP:**
A monthly reminder, then a photo upload, then a human or browser automation that files with DGA, then a receipt PDF. One pilot with one junta de vigilancia.

**Pricing hypothesis:**
CLP 5,000–10,000 per well per month, or a bulk rate for juntas. This is service revenue, because buyers will pay for done-for-you filing, not for software.

**How to find first customers:**
The list of obliged works from DGA regional MEE resolutions. Junta de vigilancia directories. Flowmeter installers' customer lists.

**Risks:**
- MiPozo and the installers may already bundle filing.
- Per-well revenue is low.
- DGA could simplify the form further.
- Rules depend on the basin.
- **Founder access:** this needs a local operator for field relationships, so a non-local solo founder is not realistic.

**Kill condition:**
MiPozo or installers already offer filing at about CLP 5,000 per well. Or the obliged small-well count is under about 3,000.

**Score:** 5/10

**Sources:**
- https://dga.mop.gob.cl/uploads/sites/13/2024/08/Triptico_MEE-Aguas-subterraneas.pdf
- https://dga.mop.gob.cl/uploads/sites/13/2024/08/MANUAL-DE-USUARIO-MONITOREO-EXTRACCIONES-EFECTIVAS-NOVIEMBRE-2025.pdf
- https://cruzat.com/noticias/control-de-extracciones-efectivas
- https://dga.mop.gob.cl/direccion-general-de-aguas-del-mop-lleva-mas-de-mil-fiscalizaciones-resueltas-en-2025-casi-el-doble-que-en-la-misma-fecha-de-2022/
- https://www.guiaminera.cl/llamado-de-la-dga-a-cumplir-con-monitoreo-de-extracciones-efectivas-de-agua-es-desproporcionado-e-injusto
- https://mipozo.cl/dga/normativa/monitoreo-extracciones-efectivas
- https://www.carey.cl/nuevas-condiciones-tecnicas-y-plazos-para-la-instalacion-de-sistemas-de-monitoreo-y-reporte-de-extraccion-de-aguas-subterraneas
- https://www.peregrinetelemetry.com/en/mee-dga

---

### Opportunity: Horse movement and microchip paperwork for rodeo and breeding stables

**Industry:**
Chilean rodeo and horse breeding (criaderos, rodeo clubs, equestrian centres).

**Buyer:**
The stable or criadero administrator who moves horses to rodeos most weekends of the season. Rodeo clubs and associations are possible aggregators.

**Trigger / Why now:**
SAG Res. Ex. 7,392/2026, published 25 Feb 2026 and updated Aug 2026.
- Every horse needs a microchip DIIO registered in SIPEC.
- Equestrian centres have been covered since March 2026, and sport and breeding premises since **25 Aug 2026**.
- The round-trip FMA for events has been **abolished**, so every rodeo trip now needs one FMA out and one FMA back.
- SAG reinforced traceability inspections during Fiestas Patrias in Sept 2026.

**Current workflow:**
1. A vet implants the chip, and the owner registers the DIIO in SIPEC under their RUP.
2. Before each rodeo, someone issues an FMA in SIPECweb (or on paper at a SAG office) for the batch of horses.
3. After the rodeo, they issue a second FMA for the return.
4. They repeat this across a season of more than 650 rodeos.

**Pain:**
Doubled paperwork per event, new chip deadlines, and roadside and event inspections. The Federación de Criadores met SAG to clarify the change (caballoyrodeo, Aug 2026). I found no hard complaint numbers.

**Existing solutions:** SIPECweb (free) and paper FMAs at SAG offices. Rodeo-federation systems handle horse registration for competition but were not found issuing FMAs **(unverified)**.

**Offline evidence:** Paper FMAs are still accepted at SAG counters, and the users are rural, traditional owners.

**Offline channel:** The rodeo federation and its 42 associations and 300 clubs, the Federación de Criadores, equine vets who implant chips, and in-person contact at rodeos.

**Market count:** 300 clubs and 42 associations; more than 650 rodeos in the 2024–25 season (Federación del Rodeo memoria). Stable count: **unknown**.

**The gap:** Pre-filled, recurring FMA pairs for the same horse batches, plus a chip and SIPEC status per horse.

**Possible product / MVP:** A "rodeo calendar" that generates both FMAs from a saved horse roster. In the MVP, that means pre-filled data and a guided SIPECweb filing, or a filing service done by the club secretary.

**Pricing hypothesis:** About CLP 5,000–15,000 per month per stable, or a club licence. Low.

**How to find first customers:** Club and association directories from the federation, and equine vets.

**Risks:** The form is free and quick for regulars, the money is small, and there is no known SIPEC API. **Founder access:** this needs a local insider in rodeo culture.

**Kill condition:** Stable managers say filing an FMA takes under 5 minutes and they are not fined.

**Score:** 4/10

**Sources:**
- https://www.sag.gob.cl/noticias/sag-actualiza-normativa-sobre-trazabilidad-de-equinos-mulares-y-asnales
- https://www.sancarlosonline.cl/2026/03/trazabilidad-obligatoria-para-equinos.html
- https://m.caballoyrodeo.cl/portal_rodeo/site/artic/20260807/pags-movil/20260807193721.html
- https://www.paislobo.cl/2026/09/sag-refuerza-fiscalizaciones-de.html
- https://www.sag.gob.cl/guia-de-tramite/obtencion-del-formulario-de-movimiento-animal-fma
- https://www.caballoyrodeo.cl/portal_rodeo/site/docs/20250725/20250725201210/memoriarodeo_2025_vdigital.pdf

---

## 3. Rejected

- **Domestic-worker employer admin:** Previred's free household module and the DT online contract registration cover the workflow. The buyer is a household with very low willingness to pay (about 300,000 workers; DT).
- **Scrap and second-hand dealer registers:** Chile has no enacted dealer register. Copper cable theft is high (461 cases in 2025), but there are only bills (ENAMI as sole buyer). Re-check if a law passes.
- **Beekeeper registration (FRADA):** annual, free in SIPEC Apícola, low value.
- **Rural sanitary services (SSR) management:** APR Software already serves more than 300 of about 2,600 SSR, and the buyers are cash-poor volunteer committees.
- **Artisanal fishing landing declarations:** Sernapesca's free electronic system is the default.
- **Livestock-fair traceability:** too concentrated (FEGOSA, Tattersall).
- **Firewood (Ley 21.499) SEC register:** the regulation is still unpublished three years late, so there is no live obligation.
- **Agricultural-intermediary registration:** a one-off DT registration. The recurring payroll work is served by payroll SaaS.
- **Res. 243 pesticide trade and storage rules:** a real 2026 trigger, but the post-Sept-2025 content (including whether a 48-hour notice to SAG survived) is unverified. Distributors' ERPs likely handle lot numbers on invoices.

## 4. Method notes

- **What worked:** regulator-first Spanish queries on SAG, DGA and DT pages and ChileAtiende "fichas", which show the exact form and whether paper filing is accepted. Regional radio and newspaper reposts of SAG press releases dated 2026 gave the triggers (Ley Apícola notice duty, equine Res. 7,392). Censo Agropecuario and federation annual reports (memorias) gave the counts.
- **What didn't:** English queries on Chilean topics returned Argentine results (scrap). Market counts per obligation (MEE wells, agricultural contractors, domestic employers) are rarely published, so a transparency-law request would be needed. Competitor diligence for quiet agri tasks is thin online, so "no vendor found" should be confirmed in interviews.

Research model: Opus
