# Costa Rica: Offline (quiet) industries pass

Research date: 2026-10-05. Budget: 20 WebSearch calls, all used. WebFetch was not used (blocked). Everything below comes from search-result summaries; I did not read any primary document in full. Figures I derived myself are marked **estimate**. Claims I could not confirm are marked **unverified**.

The existing country report (`research/countries/costa-rica.md`) already covers TRIBU-CR for accountants, solar interconnection, SINAC park tickets, SUGEF 15 bis AML, wastewater reports and ASADA billing. They are not repeated here.

**Bottom line:** one quiet industry has a real, dated trigger: **cattle traceability (areteo)**. Its mandatory deadline is **26 Oct 2026**, three weeks from today. Even so, the software gap is narrow. The state runs the platform (Trazar-Agro, with the regional animal-health body OIRSA), it has its own app, and herd apps already market themselves on the back of the areteo. No idea in this pass scores above 5.

---

## 1. Quiet industries screened

| # | Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|---|
| 1 | Cattle and buffalo ranchers, livestock auctions, slaughterhouses | RFID ear tag plus registration in Trazar-Agro for every animal. A digital movement guide (GMG) for every move. Auctions and slaughterhouses may only receive tagged animals. The deadline was pushed 3 times and is now **26 Oct 2026**. After that date, only animals aged 6 months or less can be newly registered | 41% of movement guides were still on paper in the last reported period. The system "collapsed" before the April deadline. Producers had trucks ready but no tagging service available | More than 24,000 establishments registered = 65.77% of the target, so about **36,500** in total (**estimate**). About 1.4M head (**estimate** from 558k = 39%). 221,407 guides per period. 6,284 bovine CVOs granted for the first time | **Opportunity (moderate)** | Hard trigger, per-movement frequency, third-party "officialized operators" exist. But the state platform and existing herd apps cover most of it |
| 2 | Livestock auctions (subastas) | Must be on the traceability system and check guides and tags for every lot | 8 Chorotega auctions were only recently connected to the system | Dozens (**unverified**; 8 in Chorotega alone) | Folded into #1 | Too few buyers on their own; Trazar-Agro already has an auction module |
| 3 | Households employing domestic workers | Register with CCSS within 8 business days. A mandatory INS work-risk policy (RT-Hogar). Monthly payroll. Aguinaldo (year-end bonus) | Most are informal: about 170,575 domestic workers, only about 14% properly insured | About 170k workers; the number of insured employers is much lower (**unverified**) | **Rejected** | CCSS's own Oficina Virtual module has automatic bank debit. A consumer app (mabbi.app) already exists. The real gap is formalization, which depends on consumers changing behaviour (a trap in the brief) |
| 4 | Water-well drilling companies | Registered with the Dirección de Agua (DA). Drilling permit. A Final Drilling Report (IFP) filed digitally to the **DA and SENARA within 10 business days** (Decreto 43053-MINAE, 2021) | Report signed by a geologist; small firms; filed to two receiving bodies | Public DA register of drilling companies (count not visible in the summary; likely dozens, **estimate**) | **Weak opportunity** | Fits the "one job, two authorities" pattern, but there are too few firms and consulting geologists do the work |
| 5 | Second-hand dealers and pawnshops (compraventas, casas de empeño) | 2019 law (bill 21.120): identify every seller, keep a register of objects bought or pawned, closing hours 7 pm–6 am. Municipalities can suspend the licence | Paper register books; enforcement is municipal; the OIJ said data at these shops was "scarce or non-existent" | Unknown (**unverified**) | **Rejected** | No recurring filing to a central body, so the register is only a book. Weak enforcement evidence. Already under SUGEF 15 bis AML (country report) |
| 6 | Scrap-metal dealers (chatarreras) | Found no specific dealer register or 2024–26 regulation; only an INS salvage regulation | n/a | Unknown | **Rejected** | No obligation found to build on |
| 7 | Septic-tank pumpers / sludge haulers | Ministry of Health operating permit. Annual emergency card. MOPT weight card. Trucks authorized and labelled. Must dump at a permitted treatment plant (1992 regulation) | Permits only; small family firms advertising on Wix and directories | Unknown (**unverified**) | **Rejected** | No per-job manifest found (unlike Florida); obligations are annual |
| 8 | Artisanal fishers (INCOPESCA) | Commercial fishing licence and card; landing inspections on request with a fee; renewal forms in .doc | Forms downloadable as Word documents, filed in person | Unknown (**unverified**) | **Rejected (not researched deeply)** | Licence work is annual. No electronic logbook mandate found. Low ability to pay |
| 9 | Pesticide sellers and applicators (SFE) | Product and company registration with SFE; unloading authorizations | Mostly a burden on importers and registrants | Not counted | **Rejected** | Burden sits with importers and formulators, who are not small quiet operators. No sales-register filing found |
| 10 | Bovine establishments needing a CVO (SENASA veterinary operating certificate) | CVO required to operate (Decreto 34859-MAG) | 6,284 bovine establishments got their CVO for the first time | 6,284 (MAG via observador.cr) | Folded into #1 | Mostly a one-time certificate; renewal frequency unverified |
| 11 | Tattoo studios, barbers, cemeteries, beekeepers, taxi/porteador drivers, market traders | Ministry of Health operating permits; SENASA beekeeper registration; CTP concessions | Not searched (budget) | — | **Not assessed** | Budget used up |

---

## 2. Strongest opportunities

### Opportunity: Areteo field kit for officialized traceability operators (agroveterinarias, ranchers' chambers, dairy co-ops)

**Industry:**
Cattle and buffalo traceability services: third parties "officialized" by SENASA to tag and register animals.

**Buyer:**
The owner of an agroveterinaria (farm-supply store) or a ranchers' chamber (cámara de ganaderos) that runs a tagging service for its members, or the coordinator at a cooperative such as Dos Pinos with authorized technicians. The secondary buyer is a mid-size rancher with more than 25 head.

**Trigger / Why now:**
- The areteo decree requires an RFID tag and Trazar-Agro registration before an animal can move to an auction or slaughterhouse. The deadline was extended three times. The latest extension runs to **26 Oct 2026**, which the government says is final.
- After that date, only animals aged 6 months or less can be newly registered. Every calf must therefore be tagged within its first 6 months: a permanent recurring workflow.
- Every movement needs a digital guide, and 41% of guides were still on paper.
- The system "collapsed" before the April deadline. In March 2026 CORFOGA (the national cattle corporation) asked for a 9-month extension. A southern ranchers' chamber reported trucks ready to go with no tagging service available.

**Current workflow:**
1. The rancher calls the agroveterinaria, chamber or MAG for a tagging visit.
2. An officialized technician (an agricultural professional with a laptop and internet who passed the SENASA course) tags the animals.
3. The technician records each animal's RFID, sex, age and owner, and the farm's geolocation, then enters them into Trazar-Agro, often after returning from the farm because rural connectivity is poor (**unverified**).
4. The rancher, or a helper, issues movement guides in the Trazar-Agro app or by phone. The auction or slaughterhouse checks them.
5. Births, deaths and sales must be kept up to date; calves must be tagged within 6 months.

**Pain:**
- Three deadline extensions, a reported system collapse, and producers unable to sell cattle.
- A ranchers' union calls the decree illegal.
- Cost of about ₡850–1,500 per tag for herds over 25 head; tags are free for herds under 25.
- About 20% of the herd was still untagged on 2 Oct 2026.

**Existing solutions:**
- **Trazar-Agro** (MAG and OIRSA): web platform and iOS/Android app with registration, guides and an auction module. Free, and it is the receiving system.
- **Identigan**: herd software with a Bluetooth RFID reader, marketed specifically as an "App Ganadera para Costa Rica — Aprovecha el Areteo".
- **GanApp**: herd-management app.
- MAG technicians who tag small herds for free.
- Paper notebooks and WhatsApp.

**Offline evidence:**
- 41% of guides were on paper.
- The ranchers are older and rural.
- Registration is done by technicians on visits and arranged through agroveterinarias and chambers.
- There are no forums. The pain shows up only in newspapers (Semanario Universidad, La Nación, Monumental).

**Offline channel:**
- Agroveterinarias and ranchers' chambers already accredited as officialized operators. SENASA's officialization course is a point where every operator passes through.
- CORFOGA.
- Livestock auctions such as the 8 in Chorotega and ACGUS in Pérez Zeledón, where ranchers gather every week.

**Market count:**
- About 36,500 bovine establishments (**estimate** from more than 24,000 = 65.77%).
- 6,284 new CVOs.
- Operator count unknown, probably low hundreds (**estimate**).

**The gap:**
Hypothesis to verify in interviews. Trazar-Agro serves one user entering one farm. Identigan serves one rancher's own herd. Nothing found serves the **operator that tags for many farms**:
- an offline-first capture app that reads RFID in the corral and queues uploads;
- a scheduled list of visits with each farm's calves due before they turn 6 months;
- billing to the rancher per tag or visit;
- reconciliation of tags issued against tags registered.

Big caveat: if Trazar-Agro has no API or bulk import, the product is a front end plus re-keying, which is fragile.

**Possible product:**
A field app and back office for officialized operators: capture in the corral offline, push to Trazar-Agro (by API if it exists, otherwise an assisted export), a due-calf calendar per client farm, and invoicing per tagging service.

**MVP:**
- An Android app that reads a Bluetooth RFID wand and stores animal records offline.
- A CSV in exactly Trazar-Agro's field order.
- A dashboard per operator, by farm, with calves approaching 6 months and WhatsApp reminders to the ranchers.

**Pricing hypothesis:**
$30–80 per month per operator, or ₡100–200 per animal registered. A service-plus-software model (the operator charges ranchers for the visit) is more realistic than ranchers paying for software. Ranchers already resist paying for the tags.

**How to find first customers:**
- SENASA's list of officialized operators (whether it is public is **unverified**).
- Agroveterinarias in Guanacaste, San Carlos and the Zona Sur.
- CORFOGA and the regional chambers.
- In person at weekly auctions.
- **Founder access:** needs a Spanish-speaking local who can visit rural agroveterinarias and auctions. A non-local solo founder would struggle.

**Risks:**
- The state platform is the receiving system and is improving its own app.
- No API.
- The decree is politically contested and could be repealed or extended again.
- After the October rush, volume falls to calves only.
- Identigan could add multi-farm features.

**Kill condition:**
- Trazar-Agro offers no import or API and SENASA forbids third-party entry tools, or
- interviews show operators spend under 5 minutes per animal on data entry, or
- the decree is repealed.

**Score:** 4.5/10. Strong trigger and an offline channel exist. The software gap is thin and depends on access to a state platform; most ranchers will only pay for a service.

**Sources:**
- https://semanariouniversidad.com/pais/gobierno-pospone-hasta-el-26-de-octubre-la-obligatoriedad-del-areteo-de-ganado-ante-colapso-del-sistema/
- https://semanariouniversidad.com/pais/a-partir-del-27-de-abril-es-obligatorio-el-arete-en-el-ganado-para-poder-movilizarlo-y-recibirlo-en-subastas-y-mataderos/
- https://semanariouniversidad.com/pais/productores-ganaderos-con-mas-de-25-animales-deberan-pagar-entre-%c2%a2850-y-%c2%a21-200-por-arete-para-cumplir-con-trazabilidad/
- https://semanariouniversidad.com/pais/ganaderos-piden-al-gobierno-derogar-decreto-de-areteo-por-considerarlo-ilegal-y-por-generar-un-impacto-pais/
- https://www.monumental.co.cr/2026/10/02/8-de-cada-10-animales-estan-areteados-a-dias-de-que-empiece-a-regir-decreto-de-trazabilidad-bovina/
- https://www.monumental.co.cr/2026/09/25/en-un-mes-vence-plazo-para-colocar-aretes-y-monitorear-el-ganado-del-pais/
- https://www.nacion.com/economia/areteo-del-ganado-sera-obligatorio-hasta-octubre/XVACVJPJAZCEVDJA7XWK5Y54FE/story/
- https://observador.cr/sistema-nacional-de-trazabilidad-bovina-alcanza-un-millon-de-animales-registrados/
- https://observador.cr/6-284-establecimientos-de-actividad-bovina-en-costa-rica-obtuvieron-por-primera-vez-su-certificado-veterinario-de-operacion/
- https://www.elfinancierocr.com/economia-y-politica/que-es-el-areteo-y-por-que-el-gobierno-esta-tan/UKHLBYBQGNCLJPIPAGUFLVU5IM/story/
- https://mag.go.cr/uso-de-guias-digitales-supera-al-papel-en-la-movilizacion-de-ganado-bovino/
- https://www.mag.go.cr/trazabilidad-bovina-y-bufalina/Preguntas-frecuentes-TRAZABILIDAD.pdf
- https://www.senasa.go.cr/informacion/noticias/591-8-subastas-ganaderas-de-la-region-chorotega-se-unen-a-sistema-nacional-de-trazabilidad-bovina
- https://apps.apple.com/cr/app/trazar-agro/id1561999368
- https://www.identigan.com/app-ganadera/costa-rica
- https://ganapp.net/

---

### Opportunity: Well-drilling final-report (IFP) packager for drilling firms

**Industry:**
Groundwater well drilling.

**Buyer:**
The owner or responsible geologist at a drilling company registered with the Dirección de Agua.

**Trigger / Why now:**
Decreto 43053-MINAE (Sept 2021) requires, within **10 business days** of finishing a well, a digital Final Drilling Report (IFP) and a technical geological report sent to **both** the DA and SENARA. Drilling permits are valid for only 3 months, extendable by 2. There is no 2025–26 trigger; this is the weak point.

**Current workflow:**
1. Get the drilling permit, backed by SENARA's binding technical criterion.
2. Drill, keeping a paper log of lithology, depths, casing and the pumping test (**unverified**).
3. The geologist writes the report in Word.
4. File it with the DA and SENARA.
5. Track the 3-month permit expiry across jobs.

**Pain:**
- A deadline per well, two receiving bodies, and a professional signature.
- No complaint evidence found.

**Existing solutions:**
- Consulting firms that handle the paperwork (Geo Costa Rica advertises SENARA and DA procedures).
- Word and Excel templates.
- The DA's own digital submission channel.

**Offline evidence:**
Small specialist firms, a permit-driven trade, and no software listings found.

**Offline channel:**
Call down the DA's public register of drilling companies (da.go.cr/empresas-perforadoras); the Colegio de Geólogos (**unverified**).

**Market count:**
The DA register lists the firms; the count was not visible, probably a few dozen (**estimate**).

**The gap:**
Turning a field drilling log into the IFP format, plus a permit-expiry and 10-day-deadline tracker across jobs.

**Possible product:**
A log template app that produces the IFP and the geological-report draft and tracks deadlines.

**MVP:**
A form-to-Word/PDF generator in the DA and SENARA format, with a deadline calendar.

**Pricing hypothesis:**
$30–60 per month per firm, or $20 per report.

**How to find first customers:**
The DA register, by phone.

**Risks:**
- The market is tiny.
- Geologists may see the report as their professional deliverable.

**Kill condition:**
Fewer than 50 active firms, or the report takes under 2 hours.

**Score:** 3/10. A textbook "one job, two authorities" pattern, but too few buyers.

**Sources:**
- https://da.go.cr/empresas-perforadoras/
- https://da.go.cr/wp-content/uploads/2016/06/Decreto-Reglamento-de-Perforacion.-DE-43053-MINAE.pdf
- https://geocostarica.com/es/tramites-que-realizamos/senara/perforacion-de-pozos

---

## 3. Rejected

- **Domestic-worker payroll for households.**
  - About 170,575 workers, only about 14% properly insured. Employers must register with CCSS within 8 days and buy INS RT-Hogar.
  - CCSS's Oficina Virtual has a dedicated domestic module with automatic bank debit, and part-time contribution bases exist.
  - mabbi.app already targets domestic employers.
  - The remaining problem is informality, which depends on households choosing to comply. That is not a workflow gap.
  - Sources: https://www.ccss.sa.cr/web/trabajadora-domestica/ ; https://elmundo.cr/costa-rica/aseguramiento-de-trabajadoras-domesticas-sobrepasa-expectativas-de-la-ccss/ ; https://mabbi.app/incapacidad-empleada-domestica-ccss-ins/
- **Pawnshop and compraventa digital register.**
  - The 2019 law (bill 21.120) requires seller identification and an object register, enforced by municipalities.
  - It has no central filing, so there is no data flow to automate. Pawnshops already sit under SUGEF AML rules.
  - Sources: https://presidencia.gobiernocarlosalvarado.cr/comunicados/2019/07/legislacion-sobre-casas-de-empeno-ayudara-a-combatir-delitos-contra-la-propiedad/ ; https://www.nacion.com/economia/negocios/gobierno-pretende-regular-las-compraventas-y-las-casas-de-empeno/QVQCAMWLRNAG5CMJJVPJ4WCFVY/story/
- **Septic and sludge haulers.**
  - The 1992 regulation imposes permits, an annual emergency card and labelled trucks, but no per-load manifest was found.
  - Source: https://pgrweb.go.cr/scij/Busqueda/Normativa/Normas/nrm_texto_completo.aspx?param1=NRTC&nValor1=1&nValor2=16934&nValor3=18093&strTipM=TC
- **Scrap dealers.** No dealer-specific register or regulation found.
- **Artisanal fishers.** INCOPESCA licence renewals use .doc forms, but the work is annual and no logbook mandate was found. Source: https://www.incopesca.go.cr/tramites_servicios/
- **Pesticide sellers and applicators.** SFE's burden falls on importers and registrants, not on small quiet operators. Source: https://www.sfe.go.cr/SitePages/Tramites/tramites_otros_agroquimicos.aspx
- **Herd-management app for ranchers.** Identigan and GanApp already sell to ranchers using the areteo as their hook, and Trazar-Agro's own app is free.

## 4. Method notes

- **What worked:** Spanish queries naming the regulator and the instrument: "arete", "guía de movilización", "Trazar-Agro", "Decreto 43053-MINAE", "empresas perforadoras". Costa Rican news sites (Semanario Universidad, Observador, Monumental, La Nación) report regulator deadlines and extensions well, and that is where the areteo trigger surfaced.
- **What didn't:** dealer registers (chatarra, compraventas) returned law announcements but no operator counts. Domestic-worker counts came only from older news. Searches for competitor apps were the most useful way to kill ideas.
- **Not assessed (budget):** tattoo studios, cemeteries and funeral, beekeepers (SENASA apiary registration), taxi and porteador operators (CTP), farmers' market vendors, small slaughterhouses.
