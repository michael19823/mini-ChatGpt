# Slovakia: offline-industries pass

Researched 2026-10-05 with 19 WebSearch calls (budget 20) and no WebFetch. Most searches were in Slovak, with one in Czech and one in German.
Read alongside `research/countries/slovakia.md`. That report covers waste collectors and ISOH, DIWASS, the building portal, e-invoicing, guest registers and EUDR, and none of those is repeated here.

**Summary:** The Slovak state has already digitised most of the quiet-industry registers, and the receiving bodies give the tools away free.
- **Farm records:** ÚKSÚP runs IS CÚR for pesticide, fertiliser and wine reports. CEHZ offers a free "elektronický prístup farmára" (farmer's electronic access) for livestock and, from 2026, for bees.
- **Hunting:** the Slovak Hunting Chamber (SPK) gives away the electronic visit book DoReviru.sk.
- **Cemeteries:** cintoriny.sk already sells cemetery mapping to municipalities.

What is left is small and mostly hobby-scale: about 19,000 beekeepers, small livestock keepers and farm-gate sellers.
The one industry that is small, inspected heavily, family-run and keeps records per job is the roughly **200 contract fruit distilleries (pestovateľské pálenice)**, but 200 buyers is a tiny market.
**Nothing here scores above 4/10.**

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Contract fruit distilleries (pestovateľské pálenice) | Customs registration. They must notify start, stop and breakdowns of production. Each grower's batch is recorded and excise is paid. | Family-run, seasonal (the distilling year runs 1 Jul to 30 Jun), and inspected about 11 times a year each (220 customs checks on 20 distilleries in the Žilina region). I found no Slovak software listing. | About 200 nationally; 20 in Žilina and 22 in Trnava region (press, citing Customs) | **Opportunity, 4/10** | Real per-job records and heavy inspection, but a tiny market. It only works as a combined Czech and Slovak product. |
| Chimney sweeps (kominári) | Owners must have chimneys checked and cleaned every 4, 6 or 12 months (Decree 401/2007). The sweep issues a written report on each check. | Small trades with paper reports. No filing to an authority. | Unknown (no register found) | **Weak opportunity, 3/10** | Per-job and recurring, but no "many receiving authorities" pattern. The software is a reminder and records tool. |
| Beekeepers | Register colonies and sites in CEHZ, report migrations, and report the colony count as of 30 Sep. From 1 Jan 2026 the whole process moved from the regional vet offices (RVPS) to CEHZ. | Paper forms sent by post or as scans to vcelycrhz@pssr.sk | 19,150 beekeepers, 305,000 colonies (SITA, citing CEHZ) | Rejected | Hobbyists averaging about 16 colonies. The Slovak Beekeepers' Union (SZV) and its local branches handle forms and subsidies. Willingness to pay is near zero. |
| Livestock keepers (sheep, goats, pigs, cattle) | CEHZ notification of changes and movement document within 7 days | Post, or the free electronic farmer access | Not found | Rejected | The free state portal plus breeders' herd software. Small keepers won't pay. |
| Farmers applying pesticides | Records under EU Reg. 2023/564 (electronic from 2026) plus consumption reports to ÚKSÚP | ÚKSÚP's own free web form in IS CÚR for consumption records | Not quantified | Rejected | The receiving body's free tool and farm-management software (agro ERPs, e-LOS, international apps such as Agroptima) cover it |
| Winemakers | Register with ÚKSÚP. Report production and stocks (by 10 Dec, and stocks by 7 Sep 2026). Keep a cellar record book, on paper or electronic. Transport needs an accompanying document. | Reports already go electronically into IS CÚR, and the record book is still allowed on paper | Not found | Rejected (unverified) | Annual reports go through the free portal. The record book is a possible niche, but Czech wine software probably covers it (unverified). |
| Hunting associations (poľovnícke združenia) | Visit book, hunting plans and statistics. The draft new hunting act (2025) requires electronic documentation in the hunting information system and photos of shot ungulates. | Historically paper books | About 1,900 hunting grounds (estimate, unverified) | Rejected | SPK's free DoReviru.sk, plus polovnyrevir.sk and the "Kniha návštev revíru" app |
| Scrap-metal buyers (výkupne) | No cash payment. Photo or video record of each purchase of metal waste. Records kept 5 years (Act 79/2015). | Old obligation since 2016, and these buyers are also waste collectors in ISOH | Not found | Rejected | No new trigger. It overlaps the waste-collector idea in the country report, and Czech scrap software crosses the border. |
| Cemetery operators (municipalities) | Grave-site register and lease contracts (Act 131/2010) | Paper ledgers in small villages | About 2,900 municipalities | Rejected | cintoriny.sk already sells mapping and grave registers to municipalities (contracts in the public contract register CRZ, about €1.20 per grave site). The buyer is a municipality. |
| Farm-gate sellers (predaj z dvora) | Register with the regional vet office (RVPS). Simple record of product type, quantity and date. | Paper | Not found | Rejected | Trivial obligation with no money in it. predajzdvora.sk is already the channel. |
| Slovak 24-hour caregivers in Austria and their placement agencies | Austrian trade licence, the Austrian self-employed insurer (SVS), A1 certificates, Austrian tax returns, and the agency running caregiver rotations | Agencies and paid tax-return services do it manually | About 20,000–23,000 caregivers (Amnesty and SAV estimates) | Poor distribution / unverified | The paperwork is real, but services already exist (opatrovanie-rakusko.sk, Agentúra Matlovičová). Agency software was not verified. The regime is Austrian. |
| Households as employers | Rare in Slovakia. Domestic care is either done by the state's carers or exported to Austria. | | | Rejected | No local market |

## 2. Strongest opportunities

### Opportunity: Grower-batch register and customs filing for contract fruit distilleries

**Industry:**
Contract fruit distilling (pestovateľské pálenie ovocia). These are small, registered distilleries ("liehovarnícky závod na pestovateľské pálenie") that distil households' own fruit for a fee.

**Buyer:**
The owner-operator of the distillery. Often a family firm, a cooperative or a municipal enterprise.

**Trigger / Why now:**
There is no new 2026 trigger. The pressure is constant enforcement: Customs runs about 220 inspections a year on the 20 distilleries in the Žilina region alone, which is about 11 per distillery. Each grower is capped per household per year (the 43 l cap is widely cited but unverified in this run), and excise is charged on every batch.

**Current workflow:**
1. A grower brings mash. The distillery records the grower's identity, address and quantity, and checks the grower's remaining annual allowance.
2. The distillery distils, measures volume and alcohol content, and calculates excise.
3. It writes the batch into its register and issues the grower a document.
4. It notifies Customs of start and stop of production and of any breakdowns, and files excise returns.
5. It shows the register to customs inspectors on demand.

**Pain:**
Constant inspections and a per-grower cap that the distillery has to police. Errors expose the distillery to excise and penalty claims (the size of the penalty was not verified). The season is concentrated, so batches arrive in peaks.

**Existing solutions:**
- A paper register book, Excel, or a generic accounting tool.
- The Finance Administration's registration and records guidance (financnasprava.sk), which provides forms but no tool.
- Czech customs explicitly allows records in .xls, .xlsx or .ods.
- No dedicated Slovak or Czech distillery software appeared in two searches. That is unverified rather than proven absent.

**Offline evidence:**
Distilleries are listed in Azet's business directory (56–59 entries) and on the hobby portal palenice.sk, not on any software review site. News coverage is about customs inspections, not tools.

**Offline channel:**
- Distillery equipment makers and sellers (for example destilacnezariadenie.sk, vlastnapalenica.sk).
- The Azet "Pálenice" directory and palenice.sk, which publish phone numbers.
- Visits in the pre-season (June), and a pitch timed around customs inspections.

**Market count:**
About 200 nationally (press, citing Customs; Žilina region 20, Trnava region 22). The Czech Republic adds several hundred more (estimate, unverified).

**The gap:**
A grower register that checks each grower's annual allowance, calculates excise per batch and prints the customs-ready records and the grower's document. Today this is a paper book.

**Possible product:**
An offline-capable desktop or tablet app. It logs each batch, checks the grower's allowance, calculates excise, prints receipts and exports the monthly customs records. Sold as one product in Slovak and Czech.

**MVP:**
A batch-intake form, a grower database with an allowance counter, excise calculation, and PDF and Excel exports that match the customs register format.

**Pricing hypothesis:**
€150–300 per season as a licence, or €20–30 a month. Owners would pay for software if it is set up for them. Many would want a set-up service bundled in.

**How to find first customers:**
Call the distilleries listed on Azet and palenice.sk, partner with still suppliers, and get customs-inspection referrals by word of mouth.

**Risks:**
- The market is tiny: 200 × €250 is about €50k a year at best.
- Seasonality.
- Older owners who are attached to paper.
- Possibly an unknown Czech incumbent.

**Kill condition:**
A Czech or Slovak distillery program already exists, or Customs accepts the paper book without friction (owners say it causes no problems at inspection).

**Founder access:**
Needs Slovak or Czech language and phone selling. A non-local solo founder would struggle.

**Score:** 4/10 (pain 6, frequency 8, mandatory 9, fragmentation 2, competition 7, gap 6, accessibility 7, willingness to pay 4, MVP 9, distribution 6, then capped for market size)

**Sources:**
- https://www.financnasprava.sk/sk/podnikatelia/dane/spotrebne-dane/spotrebne-dane-alkoholicke-n/registr-evid-zapis-spd-alk
- https://www.teraz.sk/zilinsky-kraj/v-zilinskom-kraji-je-20-legalnych-pal/359534-clanok.html
- https://www.zilinak.sk/clanky/16627/zilinsky-kraj-je-stvrty-v-paleni-alkoholu-20-palenic-u-nas-vyrobilo-medzirocne-o-tretinu-viac-liehovin
- https://ttkraj.sk/v-okresoch-skalica-a-senica-je-10-oficialnych-palenic/
- https://podnikatelskecentrum.sk/palenie-alkoholu-vyrobne-obdobie-v-paleniciach-na-slovensku-zakladne-informacie-pre-pestovatelov-ktori-vyuziju-sluzby-palenic/
- https://www.azet.sk/katalog/palenice/abc/slovensko
- https://www.vlastnapalenica.sk/informacia-sukromnej-vyrobe-destilatu

### Opportunity: Chimney-inspection reports and recall scheduling for sweeps

**Industry:**
Chimney sweeps (kominári): sole traders and small firms.

**Buyer:**
The owner-sweep.

**Trigger / Why now:**
There is no new trigger. Decree 401/2007 sets mandatory intervals: 4 months for solid and liquid fuels, 6 months for gas chimneys without a liner, 12 months for gas chimneys with a liner, and shorter intervals above 50 kW. Media keep reminding owners of fines, which drives demand.

**Current workflow:**
1. The sweep visits and cleans or checks the chimney.
2. The sweep writes a paper report on the check (správa o kontrole) for the owner.
3. The sweep remembers or calendars the next due date, or waits for the owner to call.

**Pain:**
Lost repeat business when sweeps don't remind owners, and handwritten reports. Moderate pain with no penalty for the sweep.

**Existing solutions:**
Paper report pads, generic field-service and invoicing apps, and Czech chimney-sweep apps (unverified).

**Offline evidence:**
Sweep websites only republish the decree. Only consumer media (SITA) discuss it. No software listings were found.

**Offline channel:**
Chimney-liner and flue suppliers (for example bfhakes.sk), sweeps' guild meetings (the guild was not verified), and phone outreach to sweeps listed in directories.

**Market count:**
Unknown. No register was found.

**The gap:**
A pre-filled digital report for each household plus automatic recall SMS messages based on fuel type and liner.

**Possible product:**
A mobile report form that knows the decree's intervals, signs and prints or emails the report, and schedules recalls.

**MVP:**
A form, a PDF and an SMS reminder queue.

**Pricing hypothesis:**
€10–15 a month. Owners would pay only if it brings repeat jobs.

**How to find first customers:**
Directory listings and supplier partnerships.

**Risks:**
- It is close to a generic field-service tool, which the brief calls a trap.
- There is no authority filing.
- Low willingness to pay.

**Kill condition:**
Sweeps say their repeat customers already call them, or that a generic field-service app already does recalls.

**Founder access:**
Needs a local.

**Score:** 3/10

**Sources:**
- https://zakony.judikaty.info/predpis/vyhlaska-401/2007
- https://sita.sk/byvaniehrou/kontrolu-komina-uklada-zakon-a-za-zanedbanie-hrozi-pokuta-kolko-zaplatite-kominarovi/

## 3. Rejected

- **Beekeepers (CEHZ change from 1 Jan 2026).** There are 19,150 hobbyist beekeepers. Forms go by post or e-mail to CEHZ, and the Slovak Beekeepers' Union (SZV) handles them. Willingness to pay is near zero.
  - Sources:
    - https://vcelari.sk/registracia-chovu-vciel/
    - https://sita.sk/nasvidiek/pocet-vcelarov-na-slovensku-sa-rapidne-zvysil-matecna-ich-chce-naďalej-podporovat/
    - https://www.podnikajte.sk/zakonne-povinnosti-podnikatela/povinnosti-vcelara-pri-kocovani-co-musi-nahlasit
- **Hunting-ground records under the draft new hunting act.** SPK's free DoReviru.sk and two other apps already cover them.
  - Sources:
    - https://polovnickakomora.sk/sk/3399-spk-ponuka-vlastnu-elektronicku-knihu-navstev-polovneho-reviru.html
    - https://hsr.rokovania.sk/data/att/186771_subor.pdf
- **Pesticide-use records (EU 2023/564).** Substitutes are ÚKSÚP's free IS CÚR form and farm software.
  - Sources:
    - https://www.uksup.sk/storage/app/media/Navody_CUR/Manu%C3%A1l%20pre%20Elektronick%C3%BA%20evidenciu%20spotreby%20POR%20a%20hnoj%C3%ADv.pdf
    - https://eur-lex.europa.eu/eli/reg_impl/2023/564/oj?locale=sk
- **Livestock movement notifications.** The substitute is CEHZ's free electronic farmer access.
  - Source: https://pssr.sk/wp-content/uploads/cehz/subory/ovky/OVKZpokynyFIN.pdf
- **Wine reports.** Annual reports go into the free IS CÚR. The cellar book is a possible niche, but a Czech competitor is likely (unverified).
  - Sources:
    - https://www.uksup.sk/sk/aktualita/402/hlasenie-o-hrozne-vine-a-muste-do-10122024
    - https://www.uksup.sk/vinar
- **Cemetery grave registers.** The cintoriny.sk mapping service already sells this to municipalities, with contracts in the public contract register (CRZ).
  - Source: https://www.crz.gov.sk//data/att/4865967.pdf
- **Scrap-metal purchase records.** The rule dates from 2016, so there is no trigger. It overlaps with ISOH waste software.
  - Sources:
    - https://static.slov-lex.sk/static/SK/ZZ/2015/79/20170501.html
    - https://www.odpadovyhospodar.sk/hovori-sa-ze-od-1-januara-uz-za-kovovy-odpad-v-zberni-nedostanete-peniaze-v-hotovosti-my-tvrdime-opak/
- **Farm-gate sales.** The record-keeping obligation is trivial.
  - Sources:
    - https://svps.sk/potraviny/predaj-z-dvora/
    - https://www.predajzdvora.sk/poradenstvo/najcastejsie-otazky/
- **Slovak 24-hour caregivers in Austria.** Done-for-you tax and A1 services already exist, and the regime is Austrian. Software for placement agencies was not verified.
  - Sources:
    - https://www.opatrovanie-rakusko.sk/opatrovanie-rakusko/21-Formulare-E106-a-E101
    - https://agenturamatlovicova.sk/rakuske-danove-priznanie-pre-opatrovatelky/
    - https://www.sav.sk/news/8040

## 4. Method notes

**What worked:**
- Slovak queries naming the receiving body (CEHZ, ÚKSÚP, RVPS, colný úrad) together with "povinnosť", "hlásenie" or "tlačivo". These quickly showed whether a free state portal exists.
- Regional press articles about customs inspections, which gave distillery counts.

**What didn't work:**
- Queries for software in Slovak ("softvér pre ...") returned law texts, not vendors. Competitor diligence for distilleries, chimney sweeps and wine is therefore incomplete.
- No national counts were found for chimney sweeps, livestock keepers or scrap buyers.

**The main structural finding:** in Slovakia the regulator itself usually supplies a free electronic channel, through IS CÚR, CEHZ farmer access or the SPK's DoReviru. That removes most of the "paper to portal" gap that this pass looks for.
