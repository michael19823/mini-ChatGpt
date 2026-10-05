# Guatemala: offline (quiet) industries

Research date: 2026-10-05. I used 19 of 20 WebSearch calls (the 20th was refused for a usage limit). Searches were mostly in Spanish. WebFetch was not used, so every finding comes from search-result summaries. Anything I could not confirm is marked "unverified".

**Bottom line:** Guatemala's quiet industries are mostly regulated **on paper, if at all**. Enforcement is weak: the regulators themselves report that only a small share of operators are registered. The one real 2026 trigger I found is MAGA's new national traceability system for animals and animal products, **SINART** (Acuerdos Ministeriales 119-2026 and 120-2026, published July 2026). It is free, run by the government, and built with OIRSA, so the gap for software is thin. The most "software-shaped" obligation is the DIGESSP annual report from private-security companies, which is enforced with fines, but there are only about 180–250 licensed firms. Nothing here reaches the brief's bar of "5,000 buyers, weak competition, simple MVP". The three leads below are weak and should be checked with interviews before any build.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Private security companies | DIGESSP licence (renewed every 3 yrs); **annual report** listing all staff, weapons, ammunition, vehicles and GPS devices, due in the first 8 business days (Decreto 52-2010, art. 30); guard credentialing | In one reporting year only 33 of 184 providers had filed. Of 45,563 registered guards, only 18,614 were accredited. | 254 licensed entities and ~20,600 agents (AGN); 184 providers in an earlier year (La Hora) | **Lead (4/10)** | Real fine (up to 20 minimum wages) and a heavy annual inventory, but a tiny buyer pool |
| Livestock producers, traders and transporters | SINART (AM 119/120-2026): registration of people, establishments, animals and movements; GUIASA movement guide; registration certificates for livestock transport units and drivers | Movement guides and transport registration are done at MAGA offices and in field "jornadas". The OIRSA platform is used for export herds. | Herd of 1.8M head; 1,471 producers registered with VISAR; only ~34k cattle in the traceability system; 80 farms certified for export to Mexico | **Lead (3/10)** | New 2026 trigger, but the guide is free (Q0) and the platform belongs to the government. Mostly a done-for-you service. |
| Households employing domestic workers | IGSS PRECAPI enrolment (form DRPT-63), quarterly advance contribution of Q455.49 in 2026; minimum wage, Bono 14, aguinaldo, vacations | Enrolment on paper at IGSS. PRECAPI only covers the Department of Guatemala. About 90% of domestic workers earn below minimum wage and have no social security (UN Women). | Number of PRECAPI employers not found (unverified); the eligible pool is middle-class households in the Department of Guatemala | **Lead (3/10)** | Compliance is voluntary in practice; would need consumer-style selling |
| Scrap metal dealers (chatarreros) | No specific dealer register found; only rules on vehicle scrapping (SAT/traffic) and disposal of state assets (AG 86-2025) | Informal sector; sales happen through TikTok and street buyers | Unknown | Rejected | No register obligation to build on |
| Pawnshops (casas de empeño) | No Guatemala-specific register or police reporting duty found | Searches returned only Mexico and Puerto Rico | Unknown | Rejected / unverified | No obligation found |
| Arms dealers (armerías) | DIGECAM licence; every sale recorded in **SIDIGECAM in real time**, under penalty of closure | Already a government system, used in real time | Small number (unverified) | Rejected | The government system already captures each transaction |
| Moto-taxis / tuc-tucs | Municipal authorization; some municipalities ban them; MINGOB has drafted a regulation | There is no reliable national registry | Unknown (no registry, per Prensa Libre) | Rejected | Each municipality differs, there is no money for software, and buyers are individual drivers |
| Extra-urban buses and heavy vehicles | DGT documents and inspections; mandatory **speed limiters** (only 5.7% of 277k units fitted by March 2026) | Roadside inspections by DGT and PROVIAL | 277k units | Rejected | The obligation is hardware; selling software means joining device installers |
| Agro-input shops (agroservicios) and pesticide sellers | MAGA registration and renewal of "expendios de insumos agrícolas" plus a technical regent (Decreto 5-2010, AG 255-2019) | The renewal file is reviewed by an analyst at MAGA | Count not found (unverified) | Rejected (weak) | Renewal happens only every few years; no recurring report found |
| Beekeepers | REGAPI registration; honey traceability; 31 registered processing establishments | Registry covers only about half of producers | 1,421 registered beekeepers (95k hives) out of ~3,000; exports about Q1.9M in Jan–Apr 2026 | Rejected | Too small and too poor |
| Funeral homes and cemeteries | MSPAS sanitary rules (AG 215-2021); licence to move bodies abroad; RENAP death registration | MSPAS says control is minimal and many funeral homes operate unregistered | 27 registered funeral establishments in the Department of Guatemala, plus 4 embalming labs | Rejected | Tiny registered base; repatriation of bodies is occasional work |
| Tortillerías and street food sellers | MSPAS/DRCA licencia sanitaria | Licence handled at a counter; complaints-based enforcement | Over 12k establishments in total hold valid sanitary licences (AGN; date unverified) | Rejected | Licence obtained once; renewal is rare; no recurring paperwork; micro budgets |
| Well drillers | No Guatemalan register found (Guatemala has no general water law) | Searches returned only Peru and Nicaragua | Unknown | Rejected / unverified | No obligation found |

## 2. Opportunities

### Opportunity: DIGESSP annual-report and personnel/arms register for small private-security firms

**Industry:**  
Private security services (guards, escorts, armored transport, monitoring)

**Buyer:**  
Owner, operations manager or administrative head of a small to mid-size licensed security company (tens to a few hundred guards)

**Trigger / Why now:**  
- This is not a new law. Decreto 52-2010 has been fully in force since 2011.
- Enforcement is visible: there are supervision visits, a licence renewal every 3 years that starts with a "supervisión preliminar", and a third guard-certification round announced in 2026 (DIGESSP Resolution 1024-2026).
- The annual report under art. 30 must list all staff, documents of ownership, the full weapons and ammunition inventory, numbered identification plates, vehicles and GPS devices. It is due within the first 8 business days, and missing that window costs a fine of up to 20 minimum wages.
- **The "why now" is weak.** It is enforcement pressure, not a new rule.

**Current workflow (partly unverified):**  
1. HR keeps the guard roster in Excel and payroll. Guards rotate often.
2. Each weapon's DIGECAM registration and tenure documents sit in binders. Ammunition stock is counted by hand.
3. Credential status per guard (certified, pending, expired) is tracked separately.
4. Once a year, staff compile the art. 30 report and deliver it to DIGESSP. The format is unverified; it is probably a printed and signed file.
5. Before licence renewal, they gather the same evidence again for the preliminary supervision.

**Pain:**  
- Compliance is low: only 33 of 184 providers had filed their annual report by the reporting date (La Hora).
- Only 18,614 of 45,563 registered guards were accredited (Prensa Libre).
- The fine is up to 20 minimum wages, about Q80k (roughly US$10k) at the 2026 non-agricultural minimum of Q4,002.28.
- High guard turnover makes the roster go stale constantly.

**Existing solutions:**  
- Generic guard-tour and workforce apps sold across Latin America. I could not run the competitor search because the search budget ran out, so the products are unverified.
- Payroll and ERP software for HR.
- Spreadsheets and binders.
- Lawyers and consultants who handle licence and adequation files.
- DIGESSP itself has no known self-service portal (unverified).

**Offline evidence:**  
- The filing rate is low.
- Renewal requires a physical supervision visit.
- Forms are published as PDFs on digessp.gob.gt.
- I found no Guatemala-specific compliance software in the results.

**Offline channel:**  
- The DIGESSP list of licensed companies.
- The security industry convention: DIGESSP attended the 18th Corporate Security Convention in 2026.
- Firearms suppliers and armerías that sell to security firms.
- Phone and WhatsApp outreach to the 254 firms.

**Market count:**  
254 accredited entities and ~20,600 agents (AGN, DIGESSP anniversary article). An earlier count was 184 providers (La Hora).

**The gap:**  
One register covering guard, weapon, ammunition, vehicle and GPS, which produces the art. 30 report and the renewal file in DIGESSP's layout and flags guards whose credentials have lapsed.

**Possible product:**  
A roster and arsenal register with expiry alerts that prints the DIGESSP annual report and the renewal checklist.

**MVP:**  
Excel import of guards and weapons, credential-expiry tracking, and a one-click export of the art. 30 report. The exact format must first be obtained from DIGESSP.

**Willingness to pay / founder access:**  
The firms have revenue and face a clear fine, so they would pay for software. Many would prefer a done-for-you service at the deadline. This needs a local or a Spanish-speaking partner: the sector is security-sensitive and trust-based. A non-local solo founder would struggle.

**Pricing hypothesis:**  
US$50–150/month, or a US$300–800 annual "report preparation" service.

**How to find first customers:**  
The DIGESSP licensed-company list, the security convention, and introductions through armerías.

**Risks:**  
- A tiny market (≤254 firms).
- Firms that run with unaccredited guards may avoid documenting them.
- Larger firms already use ERPs.
- DIGESSP could launch an online filing system.

**Kill condition:**  
Either of these kills it: the art. 30 report turns out to be a short form already handled in one afternoon, or fewer than 3 of 10 firms see the fine as a real risk.

**Score:** 4/10

**Sources:**  
- https://agn.gt/direccion-general-de-servicios-de-seguridad-privada-cumple-12-anos-de-servicio/
- https://lahora.gt/?p=172586
- https://www.prensalibre.com/?p=16322135
- https://mingob.gob.gt/wp-content/uploads/2020/10/DECRETO_NUMERO_52-2010.pdf
- https://digessp.gob.gt/supervision-preliminar-para-renovar-licencia-de-operacion/
- https://digessp.gob.gt/category/intitucion/
- https://insightcrime.org/es/noticias/noticias-del-dia/apenas-uno-por-ciento-guardias-seguridad-privada-guatemala-operan-legalmente/

### Opportunity: SINART livestock movement and transport-registration helper (done-for-you)

**Industry:**  
Cattle ranching, livestock trading and livestock transport

**Buyer:**  
Mid-size ranchers, cattle traders and owners of livestock trucks, especially in Petén and the south coast. The first segment is the farms exporting cattle to Mexico.

**Trigger / Why now:**  
- MAGA created SINART by AM 119-2026 and 120-2026 (published July 2026). It unifies and repeals AM 24-2014 and 213-2016.
- SINART covers the national registry of people and establishments, official animal ID (double eartag: a visual tag plus an RFID tag carrying a DIIO code), movement control, and registration certificates for transport units and drivers (in cooperation with OIRSA).
- The export protocol with Mexico requires certified farms, traceability data uploaded to the OIRSA platform, and a 21-day quarantine.
- **Phase-in deadlines are unverified.**

**Current workflow:**  
1. The rancher requests a GUIASA (unified movement and sanitary guide) from MAGA. It is free, with a 48-hour response time.
2. Animals must carry the double eartag. Data is uploaded to the OIRSA/MAGA platform, often by MAGA or OIRSA technicians.
3. Trucks and drivers register at MAGA "jornadas" (registration days).
4. Exporters keep test results (brucellosis/TB) and quarantine records.

**Pain:**  
Coverage is low: only about 34k cattle are in the official system out of 1.4M beef cattle, and 1,471 producers are registered. Movement without a guide risks seizure. Cattle smuggling to Mexico is a bilateral enforcement focus.

**Existing solutions:**  
- MAGA/VISAR forms and the SINAT-GT/SINART platform (free).
- OIRSA field technicians.
- Veterinarians and "tramitadores" (paid paperwork runners).
- Ranch-management apps from the region (unverified in Guatemala).

**Offline evidence:**  
- Registration happens in field jornadas.
- The forms are PDFs on visar.maga.gob.gt.
- MAGA technicians enter the data.

**Offline channel:**  
- Ganadero associations, cattle fairs and auctions.
- Veterinarians and OIRSA technicians.
- Agroservicios that sell eartags and vaccines.

**Market count:**  
1,471 producers registered with VISAR; 80 farms certified for export to Mexico; 1.8M head in the national herd.

**The gap:**  
A herd register that keeps eartag IDs, tests and movements and pre-fills GUIASA requests and the export dossier. The government provides the forms but no farm-side record.

**Possible product:**  
A mobile herd book (offline-first) that exports SINART and GUIASA data and the Mexico-export checklist.

**MVP:**  
Bulk eartag scan or typed entry, test-result tracking, and a pre-filled guide request PDF for the 80 export farms.

**Willingness to pay / founder access:**  
Ranchers would pay a vet or tramitador for the service rather than pay for software. A local is required, since sales happen face to face in rural Petén and Escuintla.

**Pricing hypothesis:**  
US$20–40/month per farm, or a per-shipment dossier fee of US$30–50.

**How to find first customers:**  
The MAGA list of the 80 export-certified farms (if obtainable), cattle fairs, and vets.

**Risks:**  
- Government and OIRSA tools are free.
- Low digital literacy.
- Data entry is already done by MAGA technicians.
- Unclear deadlines and weak enforcement.

**Kill condition:**  
If MAGA or OIRSA technicians do the uploads for free, or if guide requests take under 15 minutes.

**Score:** 3/10

**Sources:**  
- https://www.maga.gob.gt/crean-el-sinart-para-el-registro-y-control-sanitario-para-las-cadenas-pecuaria-acuicola-y-apicola/
- https://www.infobae.com/guatemala/2026/07/15/el-gobierno-de-guatemala-pone-en-marcha-sistema-para-registrar-la-trazabilidad-de-los-productos-animales-vegetales-e-hidrobiologicos/
- https://lahora.gt/nacionales/kjordan/2026/07/15/maga-crea-sistema-para-rastrear-animales-productos-y-vehiculos-de-movilizacion-de-ganado-en-el-pais/
- https://www.maga.gob.gt/sitios/visar/sistema-nacional-de-trazabilidad-pecuaria-sinat-gt/
- https://www.maga.gob.gt/realizan-jornada-registro-de-unidades-de-transporte-pecuario/
- https://agn.gt/sistema-oficial-de-trazabilidad-registra-a-mas-de-34-mil-bovinos-en-el-pais/
- https://www.revistaeyn.com/centroamericaymundo/guatemala-empezara-a-exportar-ganado-en-pie-a-mexico-OCEN1334648
- https://agn.gt/maga-busca-fortalecer-exportacion-de-ganado-hacia-mexico/

### Opportunity: Household-employer payroll kit (PRECAPI, Bono 14, aguinaldo)

**Industry:**  
Households employing domestic workers

**Buyer:**  
Middle- and upper-class households, expatriates and diplomats in the Department of Guatemala who employ a domestic worker or nanny

**Trigger / Why now:**  
- Weak. PRECAPI contributions are recalculated each year from the minimum wage (Q455.49 per quarter in 2026).
- Ratification of ILO Convention 189 has been pending for years (Iniciativa 4981) and would raise obligations if it passes.

**Current workflow:**  
1. The employer files form DRPT-63 at IGSS in person, with their DPI and a utility bill.
2. They pay one quarter in advance, then each following quarter.
3. They calculate Bono 14 (July), aguinaldo (December), vacation pay and severance by hand or through an accountant.

**Pain:**  
Small in practice. Most employers don't comply: about 90% of domestic workers have no social security (UN Women).

**Existing solutions:**  
- Accountants.
- Free calculators and guides (e.g. livinginguatemala.com).
- IGSS forms.
- General payroll apps.

**Offline evidence:**  
Enrolment at an IGSS counter using a paper form.

**Offline channel:**  
- Expat relocation agents.
- Embassies' HR offices.
- Nanny and domestic-staff placement agencies.

**Market count:**  
Unverified. PRECAPI is limited to the Department of Guatemala, and I found no enrolment figure.

**The gap:**  
A done-for-you quarterly reminder, contribution calculation, payslip and benefit schedule.

**Possible product:**  
A WhatsApp-reminder service with payslips and a benefit calendar, sold through placement agencies.

**MVP:**  
A one-page calculator, plus quarterly PRECAPI reminders and a December/July benefit schedule.

**Willingness to pay / founder access:**  
Low. Only expats and diplomats would pay, and mostly for a service. A non-local founder could sell to expats online, but that market is tiny.

**Pricing hypothesis:**  
US$5–10/month per household.

**How to find first customers:**  
Relocation agencies and placement agencies.

**Risks:**  
- Voluntary compliance in practice.
- Consumer-style sale (a trap named in the brief).
- Tiny paying segment.

**Kill condition:**  
Fewer than ~2,000 PRECAPI-enrolled employers, or placement agencies not willing to resell.

**Score:** 3/10

**Sources:**  
- https://www.igssgt.org/wp-content/uploads/2025/01/Trifoliar-Programa-PRECAPI-IGSS-rev-2025.pdf
- https://livinginguatemala.com/es/tramites/igss-precapi-trabajadoras-domesticas/
- https://www.unwomen.org/es/news/stories/2019/3/feature-story-social-protection-to-domestic-workers-in-guatemala
- https://lahora.gt/?p=68682

## 3. Rejected

- **Scrap dealers and pawnshops:** I found no Guatemalan dealer register or police reporting duty. Searches only returned rules from Mexico, Puerto Rico and Spain.
- **Arms dealers:** DIGECAM already captures each sale in real time in SIDIGECAM, under penalty of closure. The government system is the substitute.
- **Moto-taxis / tuc-tucs:** Authorization is municipal, and some municipalities, such as Amatitlán, ban them outright. There is no national registry, and the buyers are individual drivers.
- **Bus and truck speed limiters (DGT, 2026):** A real 2026 enforcement push (5.7% of 277k units fitted), but the product is hardware sold by installers.
- **Beekeepers:** 1,421 are registered. Exports were about Q1.9M in four months. Too small.
- **Funeral homes:** MSPAS lists only 27 registered establishments in the Department of Guatemala and says control is minimal. Repatriation of bodies is occasional work.
- **Agro-input shops:** Registration and renewal only every few years, with no recurring report found.
- **Tortillerías and street food:** The sanitary licence is obtained once. Operators are micro businesses with no recurring paperwork.
- **Well drillers:** No Guatemalan registry found. Guatemala has no general water law.

## 4. Method notes

- What worked:
  - Regulator news on agn.gt (the government news agency) and maga.gob.gt gave counts and triggers (SINART, DIGESSP, REGAPI).
  - La Hora and Prensa Libre carried enforcement statistics, such as filing rates and accreditation rates.
  - Searching for a decree number ("Decreto 52-2010 informe anual") surfaced the exact obligation.
- What didn't work:
  - Searches for dealer registers (chatarreros, casas de empeño) and well drillers returned results for Mexico, Peru and Spain. Guatemala seems to have no such registers.
  - The search budget ran out before the competitor check for security-company software, so that part is unverified.
- General pattern: in Guatemala the regulator either runs the system itself (SIDIGECAM, SINART, IGSS) or barely enforces the rule. That leaves little room for a paid software middle layer.

Research model: Opus
