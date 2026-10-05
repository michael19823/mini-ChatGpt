# Sweden - offline-industries pass (2026-10-05)

Method: 37 WebSearch calls, Swedish first. The search tool refused calls three times with a usage-limit message and was resumed when the coordinator said so. WebFetch was not used. Evidence comes from search summaries of official pages (Folkhälsomyndigheten, SGU, Livsmedelsverket, E-hälsomyndigheten, Polisen, Transportstyrelsen, Jordbruksverket, municipal pages, riksdagen.se). Anything not confirmed is marked "unverified" or "estimate".

Context from the existing country report (`research/countries/sweden.md`): Sweden is highly digitised. Regulators usually ship a free e-service, and vertical vendors adapt fast. This pass confirms that for quiet industries too. Almost every "paper" duty on the seed list already has a state e-service, a municipal e-form (often on the shared Open ePlatform "getflowform" platform, which lets an installer fill in the form and send a BankID signing link to the owner), or a certified intermediary. **No quiet-industry opportunity in Sweden scores above 3/10.**

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Energy-well drillers and ground-source heat-pump installers | Per job: municipal notification for the heat-pump installation (6 weeks before work, fee e.g. SEK 2,448 in Herrljunga in 2025, site plan at 1:400, neighbour consent within 10 m) and a drilling protocol to SGU Brunnsarkivet (duty since 1976/1985) | Each municipality has its own form or PDF; an unclear site plan is "one of the most common reasons" for requests to supplement | About 25,000 well records a year, of which about 20,000 are energy wells (SGU) | Weak candidate (opp. 1) | Real "one job, two receivers" pattern, but SGU has a free web form, SDF integrates with it, and municipal e-forms already support installer pre-fill |
| Small commercial drinking-water facilities (campsites, farm shops, rental housing, restaurants with own well) | LIVSFS 2022:12: hazard analysis, examination programme set by the municipality (valid at most 6 years), sampling at an accredited lab; from 1 Jan 2026 raw-water sampling, new parameters and lower limits for lead, arsenic, cadmium and chromium | Municipal PDF programme templates; the operator is a non-expert owner | Not found (estimate: several thousand; unverified) | Weak candidate (opp. 2) | Real 2026 trigger and a quiet buyer, but 1–4 samples a year and labs and consultants already do the work |
| Small alcohol producers with farm-gate sales (gårdsförsäljning) | Municipal permit (from 1 Jun 2025), own-control programme, sales only during visitor arrangements, per-visit limits (0.7 l spirits, 3 l wine, 3 l strong beer, 3 l other), statistics to Folkhälsomyndigheten | Municipal forms; rural owner-operators | 178 permits (Folkhälsomyndigheten, 30 Apr 2026); 188 by 15 Jun 2026 (CAN) | Rejected (kill condition met) | Fewer than 300 permits nationally; Spiris (Visma) already publishes guidance aimed at these firms |
| Shops selling over-the-counter medicines | Notification to Läkemedelsverket; **monthly** sales report to E-hälsomyndigheten, including "zero sales" months | Web form or tab-delimited file upload | About 5,200 outlets, about 500 with e-commerce (SOU 2023:101) | Rejected | Mostly grocery and chain stores reporting through head office or POS files; no new trigger (prop. 2025/26:247 from 1 Jan 2027 concerns a pharmacy-advice drug class) |
| Scrap-metal dealers | Old police regime; cash ban proposed in SOU 2014:72 and riksdag motions | Not checked | Not found | Rejected | Cash ban still not law and Miljöstraffrättsutredningen chose not to propose it, so there is no trigger |
| Second-hand goods dealers | Registration with Polisen before trading in listed goods (phones, computers, bicycles, mopeds, boats, cameras, art, etc.) plus a purchase ledger (lag 1999:271) | Police PDF forms (Polisens blankett 572.4/572.5) | Not found | Rejected | Old law, no trigger, and dealers' POS or marketplace tools hold the records |
| Households as employers (nanny, cleaner) | Simplified employer declaration SKV 4805 (edition 31, Dec 2025) | Skatteverket e-service exists | Not found | Rejected | Free e-service, occasional use; RUT firms absorb most of the market |
| LSS "own employer" assistance users | Payroll plus time reports to Försäkringskassan | Approved ELT suppliers (see country report) | Not found | Rejected | Covered by Försäkringskassan-approved systems |
| Chimney sweeps | Fire-safety inspection protocols to the municipality; the kontrollbok register (SKL/SSR definition) | The kontrollbok **must be digital** | About 290 municipal areas, often one contracted sweep each | Rejected | Already digital, few buyers, municipal contracts |
| Taxi operators | Taxameter data to a licensed redovisningscentral at least weekly | Fully digital by law; Transportstyrelsen monitors gaps | Not found | Rejected | Already digital and intermediated |
| Livestock traders and exporters, animal keepers | Exporter registration (30 days before first export, valid 1 year), CDB movement reporting, keeper registration of horses, poultry etc. since 2021 | Jordbruksverket e-services ("Registrera anläggning", CDB) | Not found | Rejected | State e-services plus farm software |
| Tattoo studios | Municipal health-protection supervision; EU REACH ink restriction | No new Swedish duty found | Not found | Rejected | No recurring filing, no trigger |
| Nicotine-pouch and tobacco retailers | Notification or permit to the municipality, own-control (law 2022:1257) | Municipal e-forms | Not found | Rejected | One-off notification; trigger was 2022 |
| Beekeepers, kennels, fishermen, monument makers | Registration or permit duties | Not checked this pass (searches spent elsewhere) | Not found | Rejected (unverified) | Hobby-heavy or served by state e-services (HaV, Jordbruksverket) |

## 2. Opportunities

### Opportunity: Energy-well Permit Pack (heat-pump notification + SGU protocol)

**Industry:**
Drilling firms and ground-source heat-pump installers (bergvärme)

**Buyer:**
The owner or office manager of a small drilling firm or heat-pump installer who prepares the municipal notification for the homeowner and files the SGU drilling protocol

**Trigger / Why now:**
No new rule. The "why now" is volume: ground-source heat-pump sales rose 14% in 2025 (Svenska Kyl & Värmepumpföretagen), with growth in every quarter. Each job needs a municipal notification at least 6 weeks before work, and work started without one draws an environmental sanction fee.

**Current workflow:**
1. Agree the borehole position with the homeowner, check for wells and water sources within about 150 m and the 10 m boundary rule.
2. Draw a 1:400 site plan with scale bar and north arrow, and collect neighbour consent if needed.
3. Fill in that municipality's form (e-form with a BankID link to the owner, or a PDF) and pay a fee of about SEK 2,400–4,100.
4. Wait up to 6 weeks (decision within 30 working days); answer requests to supplement.
5. After drilling, file the protocol to SGU (web form, field app, or SDF integration).

**Pain:**
Moderate. Municipalities say an unclear site plan is one of the most common reasons for supplementation, and a delayed decision delays the job. Bergvärmeguiden says most installers already handle the application as part of their service, which is unpaid admin per job.

**Existing solutions:**
- SGU's free Brunnsarkivet web form, which generates the protocol PDF with company logos.
- Svensk Dataförvaltning (SDF) service system with an SGU integration and field reporting.
- Municipal e-forms (Trosa, Varberg, Herrljunga, Timrå, Vilhelmina, Sala and others) that let the installer fill in everything and send a BankID link to the owner.
- Lantmäteriet maps and SGU open well data as free inputs.
- The installer's own office staff.

**Offline evidence:**
Each of the 290 municipalities has its own form, fee and rules (PDF forms in Emmaboda, Ystad, Kalix and Grästorp). The firms are small rural trade companies. The trade press is Borrsvängen.

**Offline channel:**
Borrsvängen magazine and the drillers' trade body (Borrföretagen, which has a "find your driller" directory; membership count not found), heat-pump makers' dealer networks (NIBE, Thermia; unverified), and SITAC-certified driller lists.

**Market count:**
About 20,000 energy wells a year (SGU). The number of drilling firms was not found (estimate: a few hundred; unverified). Several thousand heat-pump installers is an estimate.

**The gap:**
A site-plan generator: property boundary plus borehole plus nearby wells pulled automatically from SGU open data and other features within 150 m, plus a per-municipality rules and fee table and an attachment checklist. SDF covers the SGU end; nobody visible covers the municipal package.

**Possible product:**
Enter the property ID and borehole points, and get a compliant 1:400 site plan, a neighbour-consent letter and a pre-filled answer sheet for that municipality's form. After drilling, the same record feeds the SGU protocol.

**MVP:**
A site-plan generator from Lantmäteriet maps plus SGU open well data, with a static table of municipal forms and fees for the 50 largest bergvärme municipalities.

**Pricing hypothesis:**
SEK 150–300 per job, or SEK 500–1,000 per month per firm.

**How to find first customers:**
The Borrföretagen directory, SITAC certification lists, Borrsvängen advertising, and heat-pump brand dealer locators.

**Risks:**
Lantmäteriet map licensing; municipal e-forms already reduce typing; SDF could add a site-plan feature; installers may see this as 20 minutes of admin.

**Kill condition:**
Interviews show the site plan takes less than 30 minutes per job, or SDF or the municipal platforms already generate it.

**Score:** 3/10

**Sources:**
- https://resource.sgu.se/dokument/produkter/oppnadata/brunnar-oppnadata-beskrivning.pdf
- https://www.sgu.se/produkter-och-tjanster/inrapporteringstjanster/
- https://support.sdfab.se/hc/sv/articles/9551466725276-SGU-s-Brunnsarkiv
- https://xn--borrsvngen-v5a.se/svensk-dataforvaltning-skraddarsyr-digitala-servicesystem/
- https://etjanst.trosa.se/varmepump
- https://sjalvservice.herrljunga.se/oversikt/getflowform/449/203
- https://danderyd.se/globalassets/globala-filer/bygga-bo-och-miljo/miljo/blanketter-ansokan-varmepump/anvisning-varmepump-2024.pdf
- https://bergvarmeguiden.se/bergvarme/tillstand
- https://borrforetagen.se/hitta-din-borrare/
- https://www.mynewsdesk.com/se/kyl-vaermepumpfoeretagen

### Opportunity: Own-well Water Compliance Calendar (LIVSFS 2022:12)

**Industry:**
Small commercial and public drinking-water facilities: campsites, farm shops, rural restaurants, B&Bs, small schools and rental housing with their own well

**Buyer:**
The owner-operator who is legally the drinking-water producer (often also a food business)

**Trigger / Why now:**
From 1 Jan 2026, LIVSFS 2022:12 adds raw-water sampling (one sample a year for small groundwater facilities that treat the water), new parameters (bisphenol A, haloacetic acids, chlorate, chlorite, microcystin-LR, uranium; PFAS at the user's tap) and lower limits for lead, arsenic, cadmium and chromium. Municipalities are sending notices (Säter, Södertälje, Gnesta).

**Current workflow:**
1. Write a hazard analysis and propose an examination programme, often from a municipal template.
2. The municipality sets the programme (valid at most 6 years).
3. Remember the sampling dates, order kits from an accredited lab, take samples and send them.
4. Send or let the lab send results to the municipality, and act on any limit breach.

**Pain:**
Low to moderate. Owners aren't water experts and the 2026 parameter changes force programme revisions. Missed samples show up at municipal inspection. No enforcement cases were found.

**Existing solutions:**
- Accredited labs (Eurofins, which ran a Dec 2025 webinar on clean water for food producers; municipal labs such as EEM).
- Municipal templates for hazard analysis and examination programmes (Hörby, Älvdalen, Östra Göinge, Vårgårda).
- Water-treatment and consultant firms.

**Offline evidence:**
Programmes are Word or PDF templates set by each municipal environment office. Buyers are rural micro businesses. No software listing was found.

**Offline channel:**
Municipal environment and health inspectors (who already send the notices), Visit Sweden and campsite associations (SCR Svensk Camping; unverified), the farm-shop network (Bondens egen marknad; unverified), and accredited labs as resellers.

**Market count:**
Not found. Estimate: several thousand facilities (unverified). Livsmedelsverket has no national count in the search results.

**The gap:**
A simple yearly calendar per facility that knows its programme, orders lab kits, and files results to the right municipality. Labs sell analyses, not compliance tracking across years and programme revisions.

**Possible product:**
A hazard-analysis and programme wizard that outputs the municipality's template, plus sampling reminders and a results archive for inspection.

**MVP:**
A wizard that generates a 2026-compliant examination programme from 10 questions, with email and SMS reminders.

**Pricing hypothesis:**
SEK 500–1,500 per year. In practice this is likely to work only as a lab add-on or a done-for-you service.

**How to find first customers:**
Municipal food and drinking-water registers (public documents on request) and lab partnerships.

**Risks:**
Very low frequency (1–4 samples a year); labs can add reminders; low willingness to pay; Swedish-language selling to rural owners probably needs a local founder.

**Kill condition:**
Labs already offer programme subscriptions with reminders, or there are fewer than 3,000 facilities.

**Score:** 3/10

**Sources:**
- https://sater.se/nyheter/nya-krav-for-dricksvattenproducenter-1-januari-2026/
- https://www.sodertalje.se/globalassets/miljo-och-halsa/livsmedel/information-nya-dricksvattenforeskrifter.pdf
- https://www.livsmedelsverket.se/foretagande-regler-kontroll/dricksvattenproduktion/sma-dricksvattenanlaggningar--kommersiella-och-offentliga/undersokningsprogram/
- https://faolex.fao.org/docs/pdf/swe214780.pdf
- https://cdnmedia.eurofins.com/european-east/media/vfijfiqy/webinar_rent-vatten-grunden-foer-saeker-matproduktion_251205.pdf
- https://www.horby.se/wp-content/uploads/undersokningsprogram-for-vattenverk-och-dricksvattenanlaggning.pdf

## 3. Rejected

- **Farm-gate alcohol kit (was 3/10 in the interrupted draft, now rejected):** only 178 permits by 30 Apr 2026 and 188 by 15 Jun 2026, which is below the 300 kill threshold. Spiris (Visma) already publishes guidance aimed at these firms. https://www.can.se/app/uploads/2026/04/kortfakta-09-gardsforsaljning-i-sverige-vem-ar-koparen.pdf ; https://www.spiris.se/blogg/lagar-regler/gardsforsaljning ; https://accentmagasin.se/alkohol/forsta-sommaren-med-gardsforsaljning-fa-tillstand-har-delats-ut/
- **OTC-medicine monthly sales reporting:** a monthly mandatory duty, but about 5,200 outlets, mostly chain grocery stores that report by file. The web form is free and there is no trigger. https://www.ehalsomyndigheten.se/fragor-svar/pa-vilka-satt-kan-jag-rapportera/ ; https://www.regeringen.se/rattsliga-dokument/statens-offentliga-utredningar/2024/01/sou-2023101/
- **Scrap-metal cash ban:** still not law. https://www.recyclingnet.se/article/view/1055317/dags_for_kontantforbud_i_skrothandeln
- **Second-hand goods ledger:** old police registration (lag 1999:271), no trigger. https://polisen.se/tjanster-tillstand/tillstand-ansok/begagnade-varor/
- **Household employers:** free Skatteverket e-service for SKV 4805. https://www.skatteverket.se/privat/blanketterbroschyrer/blanketter/info/4805.4.39f16f103821c58f680006744.html
- **Chimney sweeps:** the kontrollbok must already be digital. https://sklinternational.se/download/18.1f376ad3177c89481f75fc1a/1615974645767/Kontrollboken%20-%20SKL-SSR.pdf
- **Taxi:** weekly taxameter transfer to licensed redovisningscentraler. https://www.transportstyrelsen.se/sv/vagtrafik/yrkestrafik/taxi/taxiforetag/redovisningscentraler-for-taxi/
- **Livestock and animal keepers:** Jordbruksverket e-services. https://nya.jordbruksverket.se/download/18.12a76f7e1775f5d8df6ab0f7/1697463566959/Manual-till-e-tjansten-Registrera-anlaggning-tga.pdf
- **Tattoo, nicotine retail, beekeepers, kennels, fishermen, monument makers:** one-off notifications, no 2025–2027 trigger found, or hobby sectors (partly unverified).

## 4. Method notes

- What worked: Swedish regulator-first queries ("<bransch> anmälan kommun blankett", "nya krav 1 januari 2026", "antal tillstånd") quickly found official pages, and municipal e-form URLs (getflowform) revealed the shared e-form platform. Asking directly for permit counts ("antal tillstånd beviljade") produced the farm-gate number that killed that idea.
- What failed: market counts for trades (drillers, small water facilities) are not published in search-visible form. Association membership searches returned nothing useful.
- Structural point: Swedish agencies (SGU, Jordbruksverket, E-hälsomyndigheten, Skatteverket, Transportstyrelsen) almost always run their own e-service, and municipalities share e-form platforms with BankID signing. The offline gap in Sweden is small. What remains is per-municipality *content* (site plans, programmes, local rules), not the filing channel.

Research model: Opus
