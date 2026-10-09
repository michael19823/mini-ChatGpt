# Uzbekistan B1: Compliance tracker for small gas-station, AGNKS and propane-station owners

## Re-assessment (owner's criteria)

**Verdict: maybe. New score: 5/10. Old score: 3/10.**

### The case

Resolution No. 315 puts a stack of paper duties on every fuel and gas station. These include monthly valve test acts, 6-monthly tank valve tests, vessel passports, staff certificates, insurance, and U-Gas notices with 1-day and 5-day deadlines (https://lex.uz/ru/docs/8280849). The state systems named in the resolution are built for inspectors, not for operators. TRIS lets inspectors watch metrology dates, the Licence system tracks staff for the ministry, and point 4(b) is a task for two ministries (https://lex.uz/ru/docs/8280849). No operator-side tool was found. Enforcement is heavy: 46,737 violations, 3,354 officials held liable and 464 stations suspended (https://yuz.uz/uz/news/146318). A cheap station compliance file with a Telegram reminder bot is easy to build. But the buyer base is about 6,200 sites with unknown ownership, part of it (methane) is in distress, and willingness to pay is unproven. That caps this at "maybe".

### Room for improvement over the portal or current practice

- **No operator register.** Res. 315 needs many records but sets no journal and offers no tool to keep them. The list covers valve test acts with a tag showing the next test date, vessel and valve passports, manometer checks, staff certificates, orders appointing responsible persons, an evacuation plan and an insurance e-policy (https://lex.uz/ru/docs/8280849). Today these are paper files at the station (unverified).
- **Deadline tracking.** There are monthly spring-valve tests, 6-monthly tank valve tests and yearly tests of other valves (Annex 3, items 12-13). Vessel inspection and hydraulic tests are periodic (https://lex.uz/ru/docs/8280849). From 1 Jan 2027, stations with uncertified staff are suspended (https://lex.uz/ru/docs/8280849). A calendar per station and per staff member fits this well.
- **U-Gas notice clocks.** Operators must report a fixed violation within 1 day, a suspension within 5 days and an owner or lease change within 1 day, through the personal cabinet. A sync gap of more than one working day is a violation (https://lex.uz/ru/docs/8280849). Software can flag these clocks. U-Gas itself records dispensing, not the operator's safety file (https://www.spot.uz/ru/2025/09/24/ugaz/).
- **Inspection readiness.** Inspectors found 46,737 violations and wrote 79,049 orders to operators (https://yuz.uz/uz/news/146318). Sources disagree on whether 7,166 items were left unfixed or were fixed (https://yuz.uz/uz/news/146318; https://www.spot.uz/oz/2026/06/29/gas-station-safety/). Either way, tracking open orders until they are closed is a real job.
- **Pressure equipment flag.** From 1 Sep 2026 to 1 Jan 2030, equipment past its service life or with an unknown date is restricted (https://lex.uz/ru/docs/8280849). An equipment register with build dates shows owners their exposure.
- **Multi-client work.** Expert organisations, safety outsourcers and attestation centres could run many stations from one account. Such firms exist (https://www.goldenpages.uz/rubrics/?Id=1697; https://glotr.uz/showcase/ooo-xavfsiz-hayot-15597/), but their number and prices were not found (unverified).
- **Portal pain.** No public complaints about U-Gas or the Committee's e-services were found in Russian or Uzbek searches (unverified). The pain shown is enforcement, not a slow portal.

### Competitor reality check

- **State tools.** U-Gas covers gas metering, vehicle and cylinder checks, dispenser use and staff on shift (https://www.spot.uz/ru/2025/09/24/ugaz/). It does not hold valve acts, vessel passports or certificate expiry. TRIS, the Licence system and the point 8 oil-and-gas online control are inspector-side (https://lex.uz/ru/docs/8280849). The online control project for oil and gas products is only a draft due 1 Dec 2026 and is about fuel volumes (https://www.spot.uz/ru/2026/06/28/gas-monitoring/). So the state does not do the operator's job. It is not a killer.
- **1C.** 1C:KA AZS does fuel trade, stock and payroll, not safety deadlines (https://solutions.1c.ru/upload/reestr/2c0/oy7en9yzhj2lv0qwl980qgkrrf1pjxa8/Opisanie-funktsionalnykh-kharakteristik-1S-KA-AZS.pdf). 1C:Production Safety covers labour safety and industrial safety in Russia (https://v8.1c.ru/upload/static/1s-proizvodstvennaya-bezopasnost.pdf), but no Uzbek version or price was found (unverified). It is a heavy enterprise product and a poor fit for a one-station owner.
- **Chains.** Lukoil runs its own station management system (https://lukoil.ru/api/presscenter/exportpressrelease?id=207502). Chains are not the target.
- **Local products.** Searches for Uzbek station automation or industrial-safety software found none (searches in this pass; no URL to cite).
- **Net.** No product does the whole job. The gap is open.

### Price per customer

- **What non-compliance costs.** Stations sold 3.6 trillion soums of fuel in June 2026 (https://podrobno.uz/cat/economic/azs-uzbekistana-zarabotali-za-mesyats-3-6-trilliona-sumov/). Over about 6,200 sites that is about 580 million soums of sales per site per month, or about 19 million soums (about USD 1,500) per day (own estimate). One day of suspension costs more than a year of software.
- **Fines.** Fire-safety fines on officials are 3-10 BRV, about 1.2-4.1 million soums (https://www.spot.uz/ru/2026/04/23/fire-fines/). 3,354 officials were held liable in the inventory (https://yuz.uz/uz/news/146318).
- **Staff alternative.** A part-time safety engineer or an outsourced safety service is the current option. No price was found (unverified).
- **Proposed price.**
  - Single station: 200,000-300,000 soums (about USD 16-24) a month, so about USD 200-290 a year (own estimate).
  - Consultant or expert firm: about USD 60-100 a month for up to 20 client stations (own estimate).
  - One-off "pre-inspection audit plus digital file" service: 2-5 million soums per station (own estimate, unverified).

### Revenue estimate (year 3)

- Buyer base: 6,196 sites (https://www.spot.uz/oz/2026/06/29/gas-station-safety/). Assume about 20% belong to chains with their own systems. That leaves about 5,000 sites (own estimate).
- Base case: 8% of 5,000 = 400 sites x USD 240 a year = **USD 96,000**. Add 25 consultant accounts x USD 960 = USD 24,000. Total **about USD 120,000 a year**.
- Low case: 4% = 200 sites x USD 240 = USD 48,000, plus 10 consultants x USD 960 = USD 9,600. Total **about USD 58,000**.
- High case: 15% = 750 sites x USD 240 = USD 180,000, plus 40 consultants x USD 960 = USD 38,400. Total **about USD 218,000**.
- Upside if the same engine is extended to other hazardous production facilities. Uzbekistan has more than 59,000 industrial enterprises (https://gov.uz/ru/cirns/news/view/196046), but how many run registered hazardous facilities is not known (unverified).

### Ease of implementation and sale

- **Build: easy.** It is a checklist from Annexes 1-5, an equipment and staff register, a deadline engine, a photo archive of signed acts and a Telegram bot in Uzbek and Russian (https://lex.uz/ru/docs/8280849). No integration with U-Gas is needed for version 1.
- **Onboarding: easy.** One visit or one call per station to enter vessels, valves, meters and staff.
- **Sale: medium to hard.** Owners are scattered. No owners' association was found (https://www.base.spinform.ru/show_red.fwx?rid=72099). The best route is through expert organisations and attestation centres, which see every station and gain from the 1 Jan 2027 staff rule (https://lex.uz/ru/docs/8280849).
- **Overall: medium.**

### Remaining risks

- **Methane stress.** Methane stations were cut to 6 hours a day and closed to private cars in March 2026 (https://www.spot.uz/ru/2026/03/06/methane-closed/). Owners were selling stations in bulk as early as 2023 (https://podrobno.uz/cat/obchestvo/v-uzbekistane-vladeltsy-gazovykh-zapravok-massovo-prodayut-svoy-biznes-/). Cash-strapped owners spend on equipment first.
- **Capex dominates.** The costly part is replacing old vessels and tanks (https://lex.uz/ru/docs/8280849). A tracker does not pay for that.
- **Unknown ownership.** The number of distinct owners and single-site owners is still not found (unverified).
- **State creep.** From 1 Jan 2027, automated control data will feed permits for hazardous facilities (https://yuz.uz/uz/news/146318). A future state operator cabinet could absorb deadline alerts (unverified).
- **Weak facts fixed.** The violation breakdown differs between sources. Spot.uz (Uzbek) gives 7,949 fire, 7,875 process, 3,354 ecology and 2,218 construction (https://www.spot.uz/oz/2026/06/29/gas-station-safety/). Yuz.uz uses 3,354 for officials held liable and 7,875 for fixed items (https://yuz.uz/uz/news/146318). Treat the sub-totals as unverified. The 46,737 total and 464 suspensions agree across sources.
- **Liability.** If a station misses a reminder and then has an accident, the vendor's name is attached to it.

### New sources

- https://yuz.uz/uz/news/146318
- https://www.spot.uz/oz/2026/06/29/gas-station-safety/
- https://www.spot.uz/ru/2026/06/28/gas-monitoring/
- https://gov.uz/ru/cirns/news/view/196046
- https://v8.1c.ru/upload/static/1s-proizvodstvennaya-bezopasnost.pdf
- https://glotr.uz/showcase/ooo-xavfsiz-hayot-15597/
- https://podrobno.uz/cat/obchestvo/v-uzbekistane-vladeltsy-gazovykh-zapravok-massovo-prodayut-svoy-biznes-/
- https://lex.uz/ru/docs/8280849 (re-read for operator record duties and U-Gas notice deadlines)

## Summary

**Verdict: no-go. Score: 3/10.**

Cabinet Resolution No. 315 of 18 June 2026 is real, in force since 22 June 2026, and creates recurring duties for fuel and gas stations. These include monthly valve test-openings, 6-monthly valve checks, vessel inspections, metrology and staff attestation (https://lex.uz/ru/docs/8280849). Enforcement is real. A 2026 inventory of 6,196 sites found 46,737 violations and 464 stations were suspended (https://podrobno.uz/cat/obchestvo/sotni-zapravok-ostanovili-rabotu-posle-masshtabnoy-proverki-po-vsey-strane/). But the same resolution tells the state to build the tracking itself. It plans online monitoring of equipment tests, metrology deadlines via TRIS, staff-certification monitoring through the "Licence" system, U-Gas for every AGNKS, and an online oil-and-gas control system (https://lex.uz/ru/docs/8280849). On top of that, the core methane (CNG) segment is shrinking: winter gas cuts closed stations to private cars, and new AGNKS are discouraged (https://www.spot.uz/ru/2026/03/06/methane-closed/). The real pain is capital spending on equipment, not keeping a calendar. The named killer is that the state is digitising the same deadlines for free, into a small and squeezed buyer base.

## Duty

- **Legal basis.** Cabinet of Ministers Resolution No. 315, "On measures to prevent accidents and emergencies at fuel filling stations and gas filling facilities", dated 18 June 2026, in force 22 June 2026 (https://lex.uz/ru/docs/8280849). Annexes 1-4 set minimum fire, technical, industrial-safety and environmental requirements for AZS (petrol), AGZS (LPG/propane) and AGNKS (CNG/methane) (https://lex.uz/ru/docs/8280849; https://gov.uz/oz/cirns/news/view/205851).
- **Background law.** Law on industrial safety of hazardous production facilities (2006) (https://faolex.fao.org/docs/pdf/uzb102889.pdf). Technical-examination guidance for pressure vessels, No. 253 of 2007 (https://lex.uz/docs/1944423).
- **Recurring duties in the annexes** (https://lex.uz/ru/docs/8280849):
  - Safety valves on gas lines: test by brief opening at least monthly (Annex 3, item 12).
  - Vessel shut-off valves: check at least every 6 months; other discharge valves at least yearly (Annex 3, item 13). Each valve carries a tag with the next test date (item 14).
  - Pressure vessels: keep passports; periodic internal inspection and hydraulic tests (Annex 3, items 4 and 6). Manometers verified (item 5).
  - Measuring instruments verified on schedule (Annex 2, items 6-7).
  - Staff training, attestation and periodic knowledge tests (Annex 3, item 10; Annex 2, item 11).
  - Documents to keep: liability insurance, design and technical passports, environmental approval, hose and valve test records, evacuation plan, fire instructions (Annexes 1-5).
- **Dated measures** (https://lex.uz/ru/docs/8280849):
  - 1 Sep 2026 to 1 Jan 2030: use of pressure equipment past its service life, or with unknown manufacture date, is restricted.
  - 1 Sep 2026: register of stations that fail safety or protection-zone rules, with relocation plans; metrology data via TRIS; Interior Ministry data linked to "Eco-Himoya" cylinder data.
  - About 1 month after adoption: proposals for online monitoring of equipment testing (point 4b).
  - 1 Dec 2026: draft online oil-and-gas control system; rules for replacing above-ground LPG tanks with double-wall or underground tanks.
  - 1 Jan 2027: stations using uncertified staff are suspended, with automatic restart once fixed.
  - 1 Sep 2027: "Licence" system linked to the unified labour system to monitor staff certification.
- **U-Gas.** Mandatory for AGNKS. Built and run by Uzinfocom. It records gas dispensed, checks vehicle inspection and cylinder permits, and is linked to tax, Interior Ministry and Energokontrol (https://www.spot.uz/ru/2025/09/24/ugaz/). Under Res. 315, U-Gas data is official evidence, a sync gap over one working day is a violation, and uncorrected issues can lead to gas cut-off within 24 hours (https://lex.uz/ru/docs/8280849).
- **Oversight.** Committee for Industrial, Radiation and Nuclear Safety, Emergency Ministry (MChS), Uzenergoinspeksiya and the Ecology Committee (https://lex.uz/ru/docs/8280849).
- **Penalties.**
  - Suspension is the main sanction seen: 464 stations suspended after the 2026 inventory (https://podrobno.uz/cat/obchestvo/sotni-zapravok-ostanovili-rabotu-posle-masshtabnoy-proverki-po-vsey-strane/; https://ru.themoscowtimes.com/2026/06/23/uzbekistan-vremenno-zakryl-464-azs-iz-za-problem-s-bezopasnostyu-a198927).
  - Fines on legal entities for industrial-safety breaches apply from 1 July 2025, but amounts were not found (https://anhor.uz/news/radiation/) (amounts unverified).
  - Industrial-safety fines on officials (Admin Code art. 97) are 3-5 BRV now, with a draft to raise them to 5-10 BRV (about 2.1-4.1 million soums); still a draft as of 5 Aug 2026 (https://www.spot.uz/ru/2026/08/05/geology-safety/).
  - Fire-safety fines on officials (art. 211) rose to 3-10 BRV (about 1.2-4.1 million soums) by a law of 20 April 2026, and MChS may suspend businesses (https://www.spot.uz/ru/2026/04/23/fire-fines/).
- **Enforcement evidence.** 46,737 violations at 6,196 sites: 25,300 industrial/technical safety, about 8,000 fire, 7,900 process, 3,400 technical regulation, 2,200 construction (https://podrobno.uz/cat/obchestvo/sotni-zapravok-ostanovili-rabotu-posle-masshtabnoy-proverki-po-vsey-strane/). Inventory was prompted by explosions, including one in Kashkadarya that killed six (https://ru.themoscowtimes.com/2026/06/23/uzbekistan-vremenno-zakryl-464-azs-iz-za-problem-s-bezopasnostyu-a198927). The Committee is running explanatory visits to stations in Tashkent (https://gov.uz/ru/cirns/news/view/196047).
- **Whether the 1 Sep 2026 register was published:** not found (unverified).

## Buyers

- **Count of sites.** 6,196 fuel and gas sites inventoried (AZS, AGZS, AGNKS, cylinder refill points) (https://lex.uz/ru/docs/8280849). 1,553 AGNKS registered in U-Gas, 1,459 connected (https://gov.uz/ru/cirns/news/view/196046).
- **Count of owners.** Not found. No source splits sites by private, chain or state ownership (unverified). In Dec 2023, Hududgaztaminot said only 547 of 1,179 gas stations in Tashkent and five regions were working, which shows scale but not ownership (https://anhor.uz/news/agnks-work/). In 2022, one quality check covered 117 stations owned by 113 private firms, which hints that many owners hold one station (https://www.spot.uz/ru/tag/автозаправка/) (indirect).
- **Segments.**
  - CNG (AGNKS): about 1,550 sites, likely mostly small private owners (unverified). This segment is under heavy stress (see Risks).
  - LPG (AGZS/propane): count not found. Since 2017, new land for AGZS was stopped and stations were pushed to convert to methane (https://www.norma.uz/novoe_v_zakonodatelstve/propanovyh_zapravok_stanet_menshe).
  - Petrol (AZS): chains are growing. Gulf Oil plans 100 stations and was offered about 200 by local governments; Lukoil and Saneg run their own (https://www.spot.uz/ru/tag/автозаправка/). Chains have in-house systems (https://lukoil.ru/api/presscenter/exportpressrelease?id=207502).
- **How they comply today.** Paper passports and logs at the station; accredited expert organisations for inspections and tests (e.g. TEXNOPROMEKSPERTIZA, https://www.goldenpages.uz/company/?Id=94237); training and attestation centres listed in directories (https://www.goldenpages.uz/rubrics/?Id=1697); outsourced accountants for books. Exact practice at small stations: unverified.

## Competition

- **Free state tools (the main competitor).**
  - U-Gas covers AGNKS operations monitoring, vehicle and cylinder checks (https://www.spot.uz/ru/2025/09/24/ugaz/).
  - TRIS to hold metrology deadlines from 1 Sep 2026 (https://lex.uz/ru/docs/8280849).
  - Online monitoring of equipment testing ordered under point 4b (https://lex.uz/ru/docs/8280849).
  - "Licence" system plus unified labour system to track staff certification from 1 Sep 2027 (https://lex.uz/ru/docs/8280849).
  - Resolution No. 325 of 25 June 2026 moves industrial-safety state services online (https://gov.uz/ru/cirns/news/view/196044).
  - The Committee's "Unified integrated ecosystem" information system, due end of 2025 under a presidential decree (https://anhor.uz/news/radiation/). Live status: unverified.
  - Plain fact: no free state tool yet covers the whole station checklist in one place, but the state has been ordered to build most of the pieces.
- **Private software.** 1C:KA AZS covers accounting, stock and payroll for station networks, not safety deadlines (https://solutions.1c.ru/upload/reestr/2c0/oy7en9yzhj2lv0qwl980qgkrrf1pjxa8/Opisanie-funktsionalnykh-kharakteristik-1S-KA-AZS.pdf). Russian 1C setups need rework for Uzbek rules (https://www.1cbit.kz/blog/business-cases/kompleksnaya-avtomatizatsiya-biznes-protsessov-u-importyera-nefteproduktov-oiltech-service-za-odin-mesyats/). No private compliance or inspection-readiness tracker for Uzbek stations was found in Russian or Uzbek searches.
- **Services.** Accredited expert organisations do vessel examinations and safety expertise (https://www.goldenpages.uz/company/?Id=94237); labour-safety training and attestation firms exist (https://www.goldenpages.uz/rubrics/?Id=1697). Prices not found (unverified).

## Willingness to pay

- No price for station inspection, expertise or attestation was found (unverified). Accounting outsourcers in Tashkent advertise on OLX without public prices (https://www.olx.uz/uslugi/finansovye-uslugi/tashkent/).
- Cost of non-compliance is high in lost days, not fines. A suspended station earns nothing. Fuel stations sold 3.6 trillion soums of fuel in June 2026 (https://podrobno.uz/cat/economic/azs-uzbekistana-zarabotali-za-mesyats-3-6-trilliona-sumov/), roughly 580 million soums per site per month on average across about 6,200 sites (own estimate; mix of AZS and gas sites).
- Fines on officials are small: about 1.2-4.1 million soums (about USD 100-330) for fire breaches (https://www.spot.uz/ru/2026/04/23/fire-fines/).
- But the expensive part of compliance is capex: replacing old pressure vessels, double-wall tanks, relocation. A reminder tool does not fix that. CNG owners also face months of forced closures (https://www.spot.uz/ru/2026/03/06/methane-closed/; https://www.spot.uz/ru/2026/02/01/warming/).
- Plausible price: about 150,000-400,000 soums (USD 12-30) per site per month for software, or a one-off "readiness audit plus binder" service at a few million soums (own estimate, unverified).

## Channels

- Committee for Industrial Safety outreach visits to stations in Tashkent (https://gov.uz/ru/cirns/news/view/196047) and its list of accredited expert organisations (https://gov.uz/ru/cirns/news/view/196047).
- Expert organisations and equipment suppliers for AGNKS (https://www.goldenpages.uz/rubrics/?Id=4002) as resellers or partners.
- Training and attestation centres (https://www.goldenpages.uz/rubrics/?Id=1697), which will see demand from the 1 Jan 2027 staff rule.
- Hududgaztaminot and local governments, which approve which AGNKS reopen (https://anhor.uz/news/restoration-work/).
- No owners' association for AGNKS was found. A 2011 rule on regional AZS associations is no longer in force (https://www.base.spinform.ru/show_red.fwx?rid=72099).
- Telegram groups of station owners: likely, not found (unverified).

## Risks

- **State builds the tool (killer).** Point 4b online equipment-test monitoring, TRIS for metrology, Licence-system staff tracking, U-Gas, and Res. 325 e-services cover the core calendar items (https://lex.uz/ru/docs/8280849; https://gov.uz/ru/cirns/news/view/196044).
- **Shrinking core segment.** Methane stations closed to private cars on 6 March 2026 and limited to 6 hours a day in winter (https://www.spot.uz/ru/2026/03/06/methane-closed/; https://www.spot.uz/ru/2026/02/01/warming/). Entrepreneurs were advised not to build new methane stations (https://podrobno.uz/cat/obchestvo/predprinimatelyam-posovetovali-ne-stroit-novye-metanovye-zapravki-v/; full text not read). LPG stations have been under phase-down policy since 2017 (https://www.norma.uz/novoe_v_zakonodatelstve/propanovyh_zapravok_stanet_menshe).
- **Consolidation.** Chains such as Gulf Oil buying local stations shrink the small-owner pool (https://www.spot.uz/ru/tag/автозаправка/).
- **Small market.** About 6,200 sites, unknown owner count. At USD 20/month and 10% uptake that is about USD 150,000 a year at best (own estimate).
- **Liability.** A missed reminder before an explosion is a reputational and legal hazard.
- **Language.** Must work in Uzbek (Latin and Cyrillic) and Russian.
- **Rule changes.** Many items are "proposals" or drafts due later in 2026; detail may change.

## First product

If pursued despite the verdict, build a service, not pure software.

- **Version 1:** one-page station profile (type, vessels, valves, meters, staff); auto-generated calendar from Res. 315 rules (monthly valve test, 6-monthly valve check, vessel inspection, metrology, attestation, insurance renewal); Telegram bot reminders in Uzbek and Russian; printable inspection-ready binder and checklist mapped to Annexes 1-5; flag for pressure equipment past service life or with unknown date.
- **First 30 days:**
  1. Week 1: turn Annexes 1-5 into a structured checklist with item numbers.
  2. Week 2: Telegram bot with reminders and a photo log of signed acts.
  3. Week 3: test with 5-10 AGNKS owners via one expert organisation.
  4. Week 4: price a "pre-inspection audit" service with the partner and check whether owners pay.

## Open questions

- How many distinct legal owners run the 6,196 sites, and how many own just one?
- Has the point 4b online equipment-test monitoring been built, and does it let owners see their own deadlines?
- Was the 1 Sep 2026 non-compliance register published, and is it public?
- Fine amounts for legal entities under the 1 July 2025 regime.
- Prices charged by expert organisations and attestation centres per station.
- How many AGNKS were working through summer and autumn 2026?

## Sources

- https://lex.uz/ru/docs/8280849
- https://gov.uz/oz/cirns/news/view/205851
- https://gov.uz/ru/cirns/news/view/196044
- https://gov.uz/ru/cirns/news/view/196046
- https://gov.uz/ru/cirns/news/view/196047
- https://podrobno.uz/cat/obchestvo/sotni-zapravok-ostanovili-rabotu-posle-masshtabnoy-proverki-po-vsey-strane/
- https://ru.themoscowtimes.com/2026/06/23/uzbekistan-vremenno-zakryl-464-azs-iz-za-problem-s-bezopasnostyu-a198927
- https://www.spot.uz/ru/2025/09/24/ugaz/
- https://www.spot.uz/ru/2026/03/06/methane-closed/
- https://www.spot.uz/ru/2026/02/01/warming/
- https://www.spot.uz/ru/2026/04/23/fire-fines/
- https://www.spot.uz/ru/2026/08/05/geology-safety/
- https://www.spot.uz/ru/tag/автозаправка/
- https://anhor.uz/news/radiation/
- https://anhor.uz/news/agnks-work/
- https://anhor.uz/news/restoration-work/
- https://podrobno.uz/cat/economic/azs-uzbekistana-zarabotali-za-mesyats-3-6-trilliona-sumov/
- https://podrobno.uz/cat/obchestvo/predprinimatelyam-posovetovali-ne-stroit-novye-metanovye-zapravki-v/
- https://www.norma.uz/novoe_v_zakonodatelstve/propanovyh_zapravok_stanet_menshe
- https://faolex.fao.org/docs/pdf/uzb102889.pdf
- https://lex.uz/docs/1944423
- https://www.goldenpages.uz/company/?Id=94237
- https://www.goldenpages.uz/rubrics/?Id=1697
- https://www.goldenpages.uz/rubrics/?Id=4002
- https://www.base.spinform.ru/show_red.fwx?rid=72099
- https://solutions.1c.ru/upload/reestr/2c0/oy7en9yzhj2lv0qwl980qgkrrf1pjxa8/Opisanie-funktsionalnykh-kharakteristik-1S-KA-AZS.pdf
- https://www.1cbit.kz/blog/business-cases/kompleksnaya-avtomatizatsiya-biznes-protsessov-u-importyera-nefteproduktov-oiltech-service-za-odin-mesyats/
- https://lukoil.ru/api/presscenter/exportpressrelease?id=207502
- https://www.olx.uz/uslugi/finansovye-uslugi/tashkent/
