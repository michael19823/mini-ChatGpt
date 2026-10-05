# Kazakhstan: Offline-Industries Pass

Research date: 2026-10-05. Budget: 20 WebSearch calls, all used. Six ran before a usage-limit refusal and 14 after the reset. All queries were in Russian, in extended mode. WebFetch was not used. Facts come from search-result snippets and the search tool's summaries of them. Anything not confirmed is marked *unverified* or *estimate*.

The existing country report (`research/countries/kazakhstan.md`) covers ESF/SNT/virtual-warehouse reconciliation, construction supervision journals and ПЭК (production environmental control) environmental reporting. None of those is repeated here.

**Bottom line:** Kazakhstan's quiet industries are mostly regulated through **state systems run by the state itself**: state vets key in livestock identification (ИСЖ), elicense.kz issues permits and veterinary certificates, the AFM portal takes financial-monitoring reports, and akimats keep cemetery and land journals. That leaves the small operator with little data entry to buy software for. The one place where a mandatory, per-transaction **paper** record sits with the operator is scrap metal. It has a fresh 2026 trigger, but its economics are weak.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Scrap metal collection points | Akimat **permit**, issued via elicense.kz in 15 working days, replacing the older notification regime. New permit requirements were approved by order of 2026-09-28 and apply from **2026-12-30**: siting at least 9 m from homes; rails and manhole covers banned from individuals; equipment and staff requirements. Daily intake journal, purchase contract or waybill per intake. Scrap export ban from 2026-05-01. | The intake journal must be **stitched, numbered and sealed**, with daily totals, and kept 3 years (adilet V2200028082). Police raids, e.g. Pavlodar: about 150 points checked, 20 violations. | "About 2,000" points under the old notification regime (inbusiness.kz, article date unverified). One region had 28 licensed and 220 unlicensed points (same source). | **Opportunity, weak (5/10)** | Real trigger and per-transaction records, but low margins, paper written into law, and a grey market that avoids records. |
| Well owners: special water use (new Water Code, No. 178-VIII of 2025-04-09) | Special-water-use permit for using groundwater. Above 50 m³/day: approved reserves. Above 1,000 m³/day: monitoring programme. Measuring devices, observation journal, production control, agreed consumption norms. From **2027-01-01** a 5-year water-saving / best-available-technology plan is required to get a permit. Industrial plans for recycled water are due by 2027-06-10. | Done by consultants. Observation journals and paper monitoring programmes (prg.kz 2026-06-03; inbusiness.kz). Small wells under 100 m³/day were exempted from reserve assessment in 2015 but still need gauges and a journal (zhaik.su). | Not found | **Opportunity, consultant-led (4/10)** | Real 2027 trigger, but the count is unknown, the work is mostly an annual permit cycle, and it overlaps the ПЭК consultant idea in the country report. |
| Slaughter points (убойные пункты) | Veterinary accounting number (учетный номер), valid 3 years, needs a vet-sanitary conclusion. A veterinary-expertise lab is required to sell meat. A state proposal would issue expertise acts with a QR code. | Paper vet acts. The state is digitising itself (eldala.kz). | **937 slaughter facilities**, and accounting numbers were revoked from 661 sites since early 2023 (eldala.kz, ~2023 data) | Rejected (3/10) | Mandatory documents are issued by state vets, and digitisation is state-led, so there is no operator-side workflow to sell into. |
| Livestock owners (ИСЖ identification) | Tags or brands plus vet passport. Deadlines: fish by 2026-03-01; camels, poultry, deer, rabbits and small ruminants in private farms by 2026-09-01. | State vets enter the data. Passports are applied for via egov. | Millions of household farms (not counted) | Rejected | The state vet is the integration layer. |
| Livestock traders (movement certificates) | Vet certificate per movement, applied for electronically on elicense.kz with an e-signature (ЭЦП) | Already electronic through a state portal | Not found | Rejected | The free state portal is the substitute. Only a thin form-filling helper is left. |
| Beekeepers | **Apiary veterinary passport**, newly mandatory under rules of MoA order No. 343, in force 2026-10-05 per snippet (dates *unverified*). Apiaries must be at least 5 km apart. Subsidies only for apiaries with 100 or more colonies. | The passport is issued by a state vet on the owner's application | Not found | Rejected | One-off, state-issued, no recurring operator workflow. A pesticide-spraying notification duty to beekeepers could not be verified for KZ. |
| Pawnshops | AFM threshold (≥1m KZT) and suspicious-operation reports via the AFM portal or XML. New suspicious-operation list from 2026-04-01. | Not offline | Not retrieved | Rejected: too competitive | SmartLombard, PawnShop (10,975 KZT/month, includes AFM reporting) and 1C-Lombard already cover it. |
| Currency exchange offices | National Bank licence for cash currency exchange. Crypto exchangers have needed a licence since 2026-05-01. | Licensing and supervision are central (NBK) | Not retrieved | Rejected | Few large operators, supervision by the central bank, and the reporting interface could not be verified. Not a quiet small-operator workflow. |
| Taxi operators | From **2026-07-05** carriers must notify the local executive body with per-vehicle data (make, plate, year). Aggregators must screen drivers against the offences register. | The notification is a one-off form | Not retrieved | Rejected | The aggregators (Yandex Go, inDrive) absorb the work. The notification is not recurring. |
| Commercial transport (waybills, pre-trip medical checks) | Paper waybill and waybill-register journals (buh.mcfr.kz) | Paper | Not retrieved | Rejected (no trigger) | No KZ mandate for electronic waybills was found. The 2026 e-waybill results were all Russian. |
| Pesticide sellers and aerial/fumigation applicators | MoA licence (10 MRP). Chlorpyrifos registrations withdrawn from 2026-12-17. | Licence via egov | **298 licences** as of 2026-06-01 (274 private, 24 state). Search summary; attribution to this specific licence *unverified*. | Rejected | Too few buyers. |
| Cemeteries and burial | New burial rules from January 2026. Akimat or cemetery administration keeps the burial accounting journal. | Paper journals are being digitised by cities | Astana: 28 cemeteries / 140k graves digitised. Jerleu.kz: 750k graves. | Rejected | The buyer is the municipality (procurement), and orynai.kz, Jerleu.kz and pomnim.kz already exist. |
| Households employing domestic workers | Labour contract registered in ESUTD within 3 days, plus standard contributions | No household-specific workflow found | Not retrieved | Not established | Likely informal (*unverified*). HR.enbek is free. |

## 2. Strongest opportunities

### Opportunity: Scrap-point intake register and permit-compliance kit

**Industry:**
Ferrous and non-ferrous scrap collection, storage and resale.

**Buyer:**
Owner or manager of a legal entity (ТОО) running one to five scrap intake points, or the compliance manager of a regional scrap consolidator that buys from many points.

**Trigger / Why now:**
- The activity has moved from notification to a **permit** issued by the akimat via elicense.kz. MPS order No. 327 of 2024-09-17 sets out the service rules and was amended in September 2026 (ecogosfond.kz).
- **New permit requirements** were approved by order of 2026-09-28 and apply from **2026-12-30** (zakon.kz 2026-10-02; inform.kz). They cover siting at least 9 m from homes, a ban on accepting rails, track parts and manhole covers from individuals, and equipment, transport and staff requirements.
- Scrap **export ban from 2026-05-01** (mybuh.kz). All volume now goes to domestic processors, which raises the value of clean paperwork for those buyers.

**Current workflow:**
1. A seller arrives. The clerk checks ID and the item against the prohibited list.
2. Weighing, then a handwritten purchase act or contract.
3. An entry goes into the **stitched, numbered, sealed** intake journal, with daily totals.
4. Journals are kept 3 years and shown to police and akimat inspectors.
5. Sales to processors go through ESF/SNT (covered in the country report).

**Pain:**
- Police inspection campaigns: Pavlodar checked about 150 points and found 20 violations (nur.kz).
- Permit revocation risk under the tighter 2026 requirements.
- The trade press describes a large unlicensed grey market: in one region 28 points were licensed and 220 were not (inbusiness.kz).
- No operator complaints about the paperwork itself were found, so the pain level is an **estimate**.

**Existing solutions:**
- Paper journals (stationers; *assumed*).
- Weighbridge software and 1C configurations (KZ-specific products *unverified*).
- Russian scrap-yard software vendors (KZ presence *unverified*).
- Consultants and lawyers who prepare permit applications (dogovor24.kz Q&A).

**Offline evidence:**
The legal text requires a physical sealed journal. The industry's web presence is 2GIS listings and single-page sites (for example kazlom.kz). No KZ scrap-yard SaaS turned up in results.

**Offline channel:**
- The elicense.kz permit register and 2GIS rubric "пункты приёма металлолома" by city, followed by phone or WhatsApp outreach.
- Domestic processors and consolidators: after the export ban they buy from the points and can push a tool to their suppliers.
- Weighbridge verification and service firms.

**Market count:**
About 2,000 points under the old notification regime, with fewer licensed (inbusiness.kz, date *unverified*). After the move to permits, the legal count is probably several hundred (*estimate*).

**The gap:**
Nobody turns one intake into the full compliance trail: an ID scan, a prohibited-item check, the printed legal journal page and act, and an inspection-ready archive.

**Possible product:**
Tablet intake that prints the daily journal sheet and purchase act in the legal format, blocks prohibited items, stores ID and scrap photos for 3 years, and produces a permit-requirements self-check before the 2026-12-30 changes.

**MVP:**
Intake form, prohibited-list rules, daily printout, archive search for inspectors.

**Pricing hypothesis:**
5,000–15,000 KZT/month per point (*estimate*, benchmarked against PawnShop's 10,975 KZT/month). A one-off permit-readiness package sold with a partner lawyer may sell better than software.

**How to find first customers:**
elicense.kz register, 2GIS, processor introductions.

**Willingness to pay:**
Low for software alone. Points will pay mainly for a done-for-you permit and inspection-readiness service, so a service-plus-software model is the realistic one.

**Founder access:**
Needs a local, Russian-speaking seller doing field visits. A non-local solo founder is not realistic.

**Risks:**
- The rules may require the sealed paper journal itself, so software only prints into it.
- Grey-market operators avoid records.
- A small legal market after licensing.
- Processors may impose their own forms.

**Kill condition:**
- Fewer than about 500 permitted points; or
- inspectors refuse printed or bound journal pages generated by software.

**Score:** 5/10 (Pain 5, Frequency 9, Mandatory 8, Fragmentation 3, Competition 6, Gap 5, Buyer accessibility 6, WTP 3, MVP 8, Distribution 5)

**Sources:**
- https://www.zakon.kz/pravo/6533518-razreshitelnye-trebovaniya-na-sbor-metalloloma-obnovili-v-kazakhstane.html
- https://www.inform.kz/ru/novie-pravila-priema-metalloloma-vvedut-v-kazahstane-s-30-dekabrya-32d6253a
- https://egov.kz/cms/ru/services/approval_documents/pass_EL4-R24_mps
- https://ecogosfond.kz/2026/09/16/67829/
- https://adilet.zan.kz/rus/docs/V2200028082
- https://inbusiness.kz/ru/news/priem-loma-zhdet-zakona
- https://www.nur.kz/incident/crime/2126727-byl-raskidan-policeyskie-navedalis-v-punkty-priema-metalloloma-v-pavlodarskoy-oblasti/
- https://mybuh.kz/news/v-kazakhstane-vveden-zapret-na-vyvoz-loma-i-metallicheskikh-otkhodov/
- https://exclusive.kz/skupshhikam-metalloloma-zapretjat-prinimat-relsy-i-ljuki-u-naselenija-a-punkty-prijoma-otodvinut-ot-zhilyh-zon/

### Opportunity: Well-owner water-use compliance file for consultants (2027 permit rule)

**Industry:**
Groundwater users with their own wells: agricultural enterprises, recreation bases, food plants, car washes and small industry.

**Buyer:**
Environmental and water consultants who prepare special-water-use permits and keep clients' monitoring records. The secondary buyer is the chief engineer or ecologist at a well-owning SME.

**Trigger / Why now:**
- New Water Code No. 178-VIII of 2025-04-09.
- Updated rules for issuing special-water-use permits (zakon.kz, 2025-10-20).
- From **2027-01-01** a permit requires a 5-year plan to cut water losses and adopt best available technologies (inbusiness.kz).
- Industrial enterprises must submit plans for recycled water by 2027-06-10 (kapital.kz).

**Current workflow:**
1. The consultant assembles the permit file: reserves approval if abstraction exceeds 50 m³/day, a monitoring programme if it exceeds 1,000 m³/day, and evidence of measuring devices.
2. The operator keeps a paper observation journal of levels, flow and samples, plus production control of water use.
3. The consultant compiles annual or periodic reporting and renews permits.
4. From 2027 the consultant also writes the 5-year water-saving plan.

**Pain:**
Permits cannot be obtained without the new plan. Fines apply for using groundwater without a permit (zhaik.su: "когда грозит штраф"). Consultant-led paperwork; operator pain is *unverified*.

**Existing solutions:**
- Environmental consultancies (manual work).
- The ecoportal.kz / elicense permit service.
- Generic Excel.
- Ecology software sold for ПЭК, *unverified* for water.

**Offline evidence:**
Paper observation journals and consultant-prepared permit dossiers. No KZ water-use SaaS appeared in results.

**Offline channel:**
- Environmental consultancies, the same channel as the ПЭК idea in the country report.
- Basin inspections' published lists of permit holders (existence *unverified*).
- Drilling contractors who install wells and meters.

**Market count:**
**Not found.** Needs basin inspection or ecoportal statistics.

**The gap:**
A multi-client tool that turns meter and journal readings into the permit file, the monitoring record and the 2027 water-saving plan template.

**Possible product:**
A consultant workspace that holds each client's well data, journals and permits, sends renewal and reporting reminders, and generates the 5-year plan from a template.

**MVP:**
Per-well journal capture (photo of the meter plus a form), a permit-deadline tracker, and a plan template.

**Pricing hypothesis:**
20,000–50,000 KZT/month per consultant (*estimate*).

**How to find first customers:**
Consultancies advertising "разрешение на спецводопользование" services.

**Willingness to pay:**
Consultants might pay for software. End operators would pay only for a service.

**Founder access:**
Needs a local partner; the work runs in Russian and Kazakh with ЭЦП (e-signature) filings.

**Risks:**
- Mostly an annual or permit-term cycle, so frequency is low.
- Overlaps the ПЭК consultant tool and should probably be merged into it.
- The count is unknown.

**Kill condition:**
- Fewer than about 100 consultancies doing water permits; or
- the regulator launches a free digital monitoring journal.

**Score:** 4/10 (Pain 5, Frequency 4, Mandatory 8, Fragmentation 5, Competition 6, Gap 5, Buyer accessibility 4, WTP 5, MVP 7, Distribution 4)

**Sources:**
- https://prg.kz/document/?doc_id=39205341
- https://inbusiness.kz/index.php/ru/last/voda-po-pravilam-komu-v-kazahstane-potrebuetsya-razreshenie-s-2027-goda
- https://inbusiness.kz/ru/last/komu-pridetsya-sledit-za-podzemnymi-vodami-v-rk
- https://www.zakon.kz/pravo/6494884-obnovleny-pravila-vydachi-razresheniya-na-spetsialnoe-vodopolzovanie.html
- https://kapital.kz/gosudarstvo/141538/prompredpriyatiya-obyazali-otchitatsya-o-planah-po-perehodu-na-oborotnoe-vodosnabzhenie.html
- https://zakon.mybuh.kz/rus/docs/k2500000178
- https://zhaik.su/6760/podzemnye-vody-kogda-dobycha-zakonna-kogda-grozit-shtraf

## 3. Rejected

- **Slaughter points:** 937 facilities; 661 accounting numbers revoked since 2023. The vet documents are issued by the state, and QR-coded expertise acts are a state digitisation project. Sources: https://eldala.kz/novosti/zhivotnovodstvo/16668-uboynye-punkty-ocifruyut-v-kazahstane, https://adilet.zan.kz/rus/docs/V1500010466
- **Livestock ИСЖ and movement certificates:** state vets do the entry, and certificates go through elicense.kz. Sources: https://www.zakon.kz/pravo/6477480-identifikatsiya-molodnyaka-selskokhozyaystvennykh-zhivotnykh-vneseny-izmeneniya.html, https://cdb.kz/sistema/pravovaya-baza/ob-utverzhdenii-pravil-vydachi-veterinarnykh-dokumentov-na-obekty-gosudarstvennogo-veterinarno-sanitarnogo-kontrolya-i-nadzora/
- **Beekeepers:** the new apiary vet passport is one-off and issued by the state. Sources: https://ru.sputnik.kz/20260603/v-kazakhstane-paseki-obyazali-poluchat-veterinarnye-pasporta-63899465.html, https://inbusiness.kz/index.php/ru/last/tokaev-podpisal-zakon-o-pchelovodstve-chto-izmenitsya-dlya-vladelcev-pasek
- **Pawnshops (AFM reporting):** too competitive (SmartLombard, PawnShop, 1C-Lombard). Sources: https://kz.kursiv.media/2026-01-05/fvfv-finmonitoring-usilivayut-afm-obnovilo-perechen-podozritelnyh-operaciy/, https://lombard.algo-rithm.com/lwchshie-programmy-dlya-lombarda-kazahstana/
- **Exchange offices:** supervised centrally by the National Bank and not a small-operator paper workflow. Source: https://nationalbank.kz/ru/news/osushchestvlenie-obmennyh-operaciy-s-nalichnoy-inostrannoy-valyutoy
- **Taxi:** the 2026-07-05 per-vehicle notification is one-off, and aggregators absorb compliance. Sources: https://www.lada.kz/kazakhstan-news/152814-s-5-iiulia-taksistov-v-kazakhstane-priviazhut-k-tekhpasportam.html, https://ru.sputnik.kz/20260506/v-kazakhstane-uzhestochili-trebovaniya-k-agregatoram-taksi--63207199.html
- **Pesticide licensees:** 298 licences is too few. Source: https://egov.kz/cms/ru/services/pass312_msh
- **Cemeteries:** the buyer is the akimat, and orynai.kz and Jerleu.kz already exist. Sources: https://www.zakon.kz/pravo/6504312-v-kazakhstane-utverdili-novye-pravila-pogrebeniya-na-kladbishchakh-i-v-kolumbariyakh.html, https://bes.media/news/v-almati-zarabotala-tsifrovaya-baza-zahoroneniy-844a9e/
- **Domestic workers and waybills:** no KZ-specific trigger found.

## 4. Method notes

What worked:
- Russian-language regulator queries.
- zakon.kz "правила обновили" news items, which give order dates and effective dates.
- adilet.zan.kz for the exact record-keeping wording.
- Agro and business press (eldala.kz, inbusiness.kz) for counts: 937 slaughter points, about 2,000 scrap points.

What didn't work:
- Searches on 2-ТП водхоз, e-waybills and beekeeper pesticide notification returned Russian Federation results. Adding "Казахстан" is not enough; use KZ domains (`allowed_domains`) next time.
- Operator counts are rarely in snippets.

Structural finding: in Kazakhstan the state usually digitises the obligation itself (elicense.kz, egov, ИСЖ, AFM portal), so quiet-industry opportunities are thinner than in paper-heavy markets.
