# Uzbekistan: Offline (Quiet) Industries Pass

**Status: complete within budget.** The run used 20 WebSearch calls, in two sittings: 8 searches, then a usage-limit stop, then 12 more after the reset. Queries were in Russian and Uzbek (Latin script). WebFetch was not used, so no law text was read in full. Details beyond the search snippets are marked **unverified** or **inferred**.

The existing country report (`research/countries/uzbekistan.md`) covers Asl Belgisi product marking for agro-input dealers and retailers. Those ideas are not repeated here.

Frictions that apply to every idea below (from the country report, **unverified**):

- Personal data of Uzbek citizens must be hosted in Uzbekistan.
- Payments run on local rails (UzCard/Humo, Payme, Click).
- Business is done in Russian and Uzbek.
- The state builds its own free platforms quickly: my.soliq, Uztrans, E-lom, the animal registry.

That last point is the main competitive threat in this country. A non-local solo founder would need a local partner for everything below.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Scrap metal collection points | New licence for collection (purchase), processing and sale of ferrous and non-ferrous scrap: Law ZRU-1113 of 15.01.2026, state fee 10 BRV. Licensing passports under Cabinet Resolution No. 175 of 16.04.2026. **From 1 Oct 2026, an electronic purchase act is required when ferrous scrap is bought from individuals for cash.** The state "E-lom" platform to track ferrous metal turnover was ordered launched from 1 Aug 2026 (daryo.uz, buxgalter.uz, gazeta.uz, uzdaily.uz) | Cash purchases from individuals at yards. The President cited 500k t/yr of scrap in "shadow" circulation, against 700k t delivered officially (gazeta.uz, uzdaily.uz) | Unknown number of points. No register found | **Candidate** | Fresh per-transaction trigger (1 Oct 2026). But the state provides the act (my.soliq) and E-lom for free |
| Beekeepers, and the farmers and clusters that spray pesticides | Cabinet Resolution No. 189 of 20.04.2026: rules for placing and moving bee colonies and preventing bee deaths, including notification of pesticide treatments. Duties fall on the "O'zbekiston asalarichilari" association, the Farmers Council, khokimiyats and all land users (lex.uz) | Mass bee deaths near cotton fields reported (gazeta.uz 2025). Notification today is presumably by word of mouth or the mahalla (inferred) | Unknown. The association has 27 central staff (beekeepers.uz). Beekeeper count not found | **Candidate (weak)** | A "one job, many recipients" pattern. But who pays is unclear |
| Animal identification specialists / private vets | Law ZRU-1079 (in force 07.08.2026): tag and register cattle, sheep, goats and camels within 14 days of birth, imports within 21 days. Movements, treatments and slaughter go into a state database run by the Animal Identification Centre under the Veterinary Committee (lex.uz, gazeta.uz, kun.uz) | Rural field work; tags sold by suppliers such as ERKSONS | Unknown | **Candidate (weak)** | Per-event field data entry. The state probably ships its own app (**unverified**) |
| Livestock smallholders | Same law | Households | Millions of animals (estimate) | Reject | Won't pay. The state registry is free |
| Pet owners | Same law; owner bans from 01.01.2028 | Consumers | n/a | Reject | Consumer buyer; one-off per pet |
| Pawnshops | CBU licensing and reporting | Gold-pawn counters | **90** at 1 Aug 2026 (cbu.uz / uzdaily.uz) | Reject | Too few buyers; reporting already formalised |
| Small passenger and freight carriers | Waybill plus pre-trip technical and medical checks per trip (norma.uz). E-waybill system "Elektron yo'l varaqa" inside the Transport Ministry's Uztrans system (Cabinet Resolution No. 44 of 22.01.2024). A single digital transport system was proposed in Sep 2026 (lex.uz, spot.uz) | Paper waybill with four signatories | Unknown | Reject | The state runs the e-waybill and is consolidating further |
| Taxi drivers | Monthly medical check at clinics connected to Uztrans; Resolution No. 200 of 02.04.2025 on passenger carriage (norma.uz, lex.uz) | Individuals | Large | Reject | Individual buyer; Uztrans and aggregators sit in the flow |
| Halal-certified food producers | Cabinet Resolution No. 57 of 01.02.2025: voluntary halal certification by bodies accredited by the Technical Regulation Agency and the Religious Affairs Committee. 3-year certificate, mark from 1 May 2025 (gazeta.uz, norma.uz) | Small food producers | Unknown | Reject | Voluntary, once every 3 years, and done by certification bodies (e.g. certin.uz) |
| Catering and exporters buying farm produce from individuals | Electronic purchase act in my3.soliq.uz (catering from Dec 2024; exporters from 1 Mar 2025) (spot.uz, upl.uz) | Cash bazaar purchases | **239** catering companies adopted it in the first 6 months (spot.uz) | Reject (but a precedent) | Free in my.soliq and Didox/Soliqservis. This shows how the scrap act will work |
| Money changers | Exchange runs through banks (**unverified**) | n/a | n/a | Reject | No small independent operators |
| Household employers, dehqon bazaar traders, cemeteries | Not researched (budget) | n/a | n/a | Not screened | Budget spent on stronger leads |

Country-specific groups found through regulators:

- scrap licensing and e-purchase acts;
- bee-colony placement and spray notification;
- animal identification specialists;
- carriers' e-waybills;
- halal certification;
- e-purchase acts for farm produce.

## 2. Strongest opportunities (provisional)

### Opportunity: Counter-side capture for scrap yards' e-purchase acts and E-lom

**Industry:**
Scrap metal collection (ferrous first, non-ferrous later).

**Buyer:**
The owner of a licensed scrap collection point or yard, or the outsourced accountant who serves several yards.

**Trigger / Why now:**
Four rules arrived in 2026:

- Law ZRU-1113 (15.01.2026) made scrap collection, processing and sale a licensed activity.
- Resolution No. 175 (16.04.2026) approved the licensing passports.
- **From 1 October 2026**, a business buying ferrous scrap from individuals for cash must issue an *electronic purchase act* in the tax system. Before this, the duty applied only to farm produce (buxgalter.uz).
- The President ordered the "E-lom" platform launched from 1 Aug 2026 to monitor all ferrous metal turnover in real time, citing about 500k t/yr in shadow circulation (gazeta.uz, uzdaily.uz, yuz.uz).

**Current workflow (inferred from the farm-produce precedent):**
1. An individual brings scrap. The yard weighs it and pays cash.
2. Someone writes the seller's details and weight on paper.
3. Later, with the company's e-signature (EDS) key, the accountant logs into my3.soliq.uz, Didox or Soliqservis and keys in each purchase act. In the farm-produce flow this happens under "Electronic document flow → acts of purchase".
4. The same lots presumably must also reflect in E-lom when sold on to the metallurgical plant (Uzmetkombinat). This is **unverified**.

**Pain:**
- Many small cash purchases per day, each one now a separate e-document.
- The EDS key and the accountant are usually not at the yard.
- If acts are missing, the cash spent is not supported by purchase documents, a tax exposure (inferred).
- Licence loss is a risk.

There is no direct complaint evidence yet; the rule is days old. Slow uptake in the precedent (239 catering companies in 6 months) suggests friction or weak enforcement.

**Existing solutions:**
- my3.soliq.uz e-purchase act (free).
- Didox.uz and Soliqservis.uz (licensed e-document operators).
- The E-lom state platform.
- 1C configurations from local franchisees (inferred).
- Accountants who key in the acts.

**Offline evidence:**
- Cash-at-the-counter trade, and the regulator itself describes 40% of volume as shadow.
- Searches surfaced no Uzbek scrap-yard software vendor (only Russian ones).

**Offline channel:**
- Walk-in visits to the yards, which cluster on the edges of cities.
- Accountants who serve several yards.
- Uzmetkombinat's supplier base, since the plant is the main off-taker.
- The licence register on licence.gov.uz once licences are issued (**unverified** that it is public).

**Market count:**
Unknown. No register count was found. Volume is about 700k t/yr official plus 500k t shadow (gazeta.uz). An **estimate** of low thousands of points is unverified.

**The gap:**
The state tools cover the document, not the capture at the yard. What is missing is a phone flow at the scale: scan or type the seller's ID (PINFL), weight, photo of the load and cash paid. It would queue the acts and push them in bulk through a licensed e-document operator's API (Didox has an API, **unverified**), then reconcile purchases with sales and E-lom.

**Possible product:**
A Telegram mini-app or PWA for yards. Each purchase becomes a draft act that is signed in batch, with a daily register and a stock balance by metal grade.

**MVP:**
A phone form plus a batch export to Didox or Soliqservis for one yard group.

**Pricing hypothesis:**
$15–40 per month per yard (estimate). Buyers are more likely to pay as a done-for-you "we file your acts" service delivered through accountants.

**Founder access:**
Needs a local: Uzbek/Russian, yard visits, local data hosting, and partnership with an e-document operator.

**Risks:**
- E-lom or my.soliq ships its own mobile capture app. This is likely.
- Didox adds a mobile act feature.
- Yards stay informal.
- The e-document operator may refuse API access.

**Kill condition:**
E-lom or the Soliq mobile app already lets a cashier create purchase acts on a phone, or there is no third-party API for purchase acts.

**Score:** 4/10

**Sources:**
- https://daryo.uz/2026/01/16/ozbekistonda-qora-va-rangli-metall-parcha-hamda-chiqindilarini-tayyorlash-faoliyati-litsenziyalanadi/
- https://lex.uz/uz/docs/-8144362?ONDATE=17.04.2026
- https://lex.uz/doc-passport/7999051
- https://buxgalter.uz/oz/publish/doc/text173612_kundalik_bilishingiz_zarur_bulgan_sunggi_yangiliklar
- https://buxgalter.uz/publish/doc/text173497_ejednevnik_poslednie_novosti_o_kotoryh_nujno_znat
- https://www.gazeta.uz/oz/2026/07/13/e-lom/
- https://www.uzdaily.uz/en/uzbekistan-to-launch-e-lom-platform-for-scrap-metal-tracking/
- https://yuz.uz/uz/news/prezident-mutasaddilarga-e-lom-elektron-platformasini-ishga-tushirib-qora-metall-aylanmasini-nazoratga-olishni-topshirdi
- https://www.spot.uz/ru/2025/06/05/food-procurement (precedent: 239 companies)
- https://upl.uz/economy/49581-news.html (precedent: exporters)

### Opportunity: Spray-to-apiary notification router (Resolution No. 189)

**Industry:**
Beekeeping and crop protection (cotton-textile clusters, farms, spraying contractors).

**Buyer:**
- Primary: the agronomist at a cotton-textile cluster or large farm that sprays.
- Alternative: the "O'zbekiston asalarichilari" association or regional khokimiyats, as a B2G deal.

**Trigger / Why now:**
Cabinet Resolution No. 189 of 20.04.2026 approved rules for placing and moving bee colonies and preventing their death, including notification of pesticide treatments. Duties are assigned to the "O'zbekiston asalarichilari" association, the Farmers Council, regional authorities and all land users (lex.uz snippet). Mass bee deaths near cotton fields were reported in 2025 (gazeta.uz). The notice period and the penalties were **not read**.

**Current workflow (inferred):**
1. A beekeeper places hives near fields, possibly registering the placement with the khokimiyat or mahalla.
2. The farm or cluster plans a spray.
3. Someone has to find which apiaries lie within the radius and warn them by phone or through the mahalla.
4. When bees die, there is a dispute with no proof of notification.

**Pain:**
Documented bee kills (gazeta.uz 2025). A cluster faces liability and has no proof that it notified anyone (inferred).

**Existing solutions:**
- Phone calls and Telegram groups.
- Mahalla and khokimiyat announcements (inferred).
- In Russia, where similar rules changed on 1 Mar 2026, a dedicated service exists: Polevizor (polevizor.ru), a notification service for field treatments for farmers and beekeepers. It is the closest analog and a possible entrant.
- No Uzbek equivalent was found.

**Offline evidence:**
Rural beekeepers; an association that distributes hives on credit; no software listings found.

**Offline channel:**
- The "O'zbekiston asalarichilari" association (beekeepers.uz), which has regional structures.
- The Farmers Council of Uzbekistan.
- Cluster agronomists.
- Pesticide dealers, who face Asl Belgisi marking from May 2026 per the country report.

**Market count:**
Unknown. Neither the beekeeper count nor the cluster count was sourced.

**The gap:**
No map-based register of hive placements, and no automatic radius-based warnings with a timestamped proof of notice, in Uzbek.

**Possible product:**
- Beekeepers register hive locations through a Telegram bot.
- Sprayers enter planned treatments.
- The system sends SMS or Telegram alerts to apiaries in the radius and stores the proof of notice.

**MVP:**
A Telegram bot plus a map for one region, run with the association's regional branch.

**Pricing hypothesis:**
Beekeepers won't pay. Possible payers:

- clusters: $30–100 per month per cluster (estimate);
- an association or khokimiyat contract;
- pesticide dealers as sponsors.

Willingness to pay is weak; the realistic model is a service contract.

**Founder access:**
Needs a local, and probably association endorsement.

**Risks:**
- Free alternatives: a Telegram group, or the association or Ministry building it themselves.
- Low enforcement.
- B2G sales cycles.

**Kill condition:**
Resolution 189 does not require documented notice, or the Ministry or association already runs a notification channel.

**Score:** 3/10

**Sources:**
- https://www.lex.uz/uz/docs/-8149189
- https://www.gazeta.uz/oz/2025/07/25/beekeeping/
- https://uz.beekeepers.uz/
- https://polevizor.ru/ (Russian analog)
- https://kasharynews.ru/s-1-marta-menyayutsya-pravila-vzaimodejstviya-agrariev-i-pchelovodov-chto-vazhno-znat/ (Russian rule change, analog)

### Opportunity: Offline field logger for animal identification specialists

**Industry:**
Livestock identification and veterinary field services.

**Buyer:**
- A private vet practice or identification contractor.
- Secondary: livestock farms with hundreds of head.

**Trigger / Why now:**
Law ZRU-1079 "On identification, registration and tracing of animals" entered into force on 07.08.2026.

- Animals carry visual tags, chips or combined tags.
- Cattle, sheep, goats and camels must be registered within 14 days of birth, horses within 4 months and pigs within 1 month. Imports must be registered within 21 days.
- A veterinary passport records vaccinations and treatments.
- The database is run by the Centre for Identification, Registration and Monitoring of Animals under the Veterinary Committee, and the law defines "identification specialists".

**Current workflow (inferred):**
1. A specialist visits the household and tags the animals.
2. The data is written on paper.
3. Each animal is keyed into the state database later.
4. Treatments and movements are added as further events.

**Pain:**
High event volume with 14-day deadlines and patchy rural connectivity (inferred). No complaint evidence.

**Existing solutions:**
- The state database and its interface (likely its own app, **unverified**).
- Tag suppliers such as ERKSONS.
- Paper.

**Offline evidence:**
Smallholder livestock, village-based work.

**Offline channel:**
- Tag suppliers bundling the tool with tag orders.
- District veterinary offices.
- The FAO private-veterinary programme (uzdaily.uz).

**Market count:**
Unknown.

**The gap:**
Offline-first batch tag scanning with sync. This exists only if the state app lacks it and allows third-party submission.

**Possible product:**
An offline PWA for batch tag-scan entry, with export to the state database's format and a herd book for farms.

**MVP:**
Batch capture plus CSV export.

**Pricing hypothesis:**
$5–15 per month per specialist, or bundled per tag (estimate). Low.

**Founder access:**
Needs a local; probably needs accreditation.

**Risks:**
- The state app.
- No API.
- Low prices.

**Kill condition:**
The Centre ships a free offline app, or bans third-party submission.

**Score:** 3/10

**Sources:**
- https://lex.uz/ru/docs/7676785?ONDATE=07.08.2026
- https://www.gazeta.uz/ru/2025/08/07/animals/
- https://kun.uz/ru/news/2025/08/07/v-uzbekistane-vvoditsya-obyazatelnaya-registratsiya-jivotnyx
- https://www.uzdaily.uz/uz/7-avgustdan-ozbekistonda-hayvonlarni-royxatdan-otkazish-boshlanadi/
- https://erksons.uz/news/registraciya-zhivotnyh-zakon-2026
- https://www.norma.uz/novoe_v_zakonodatelstve/sozdaetsya_elektronnyy_reestr_jivotnyh

## 3. Rejected

- **Carrier waybills and pre-trip checks.** The e-waybill already runs in the Transport Ministry's Uztrans system ("Elektron yo'l varaqa", Resolution No. 44/2024), and a single digital transport system was proposed in Sep 2026. Sources: https://www.lex.uz/docs/-6774924, https://www.spot.uz/oz/2026/09/21/transport-system
- **Pawnshops.** Only 90, per the CBU. Source: https://cbu.uz/ru/credit-organizations/pawn-shops/
- **Halal certification.** Voluntary and needed once every 3 years, handled by accredited certification bodies (e.g. certin.uz). Sources: https://www.gazeta.uz/ru/2025/02/04/halal-certification/, https://www.norma.uz/novoe_v_zakonodatelstve/vvoditsya_procedura_sertifikacii_produkcii_i_uslug_halyal
- **E-purchase acts for farm produce (catering, exporters).** Free in my.soliq and Didox. Kept only as the precedent for scrap.
- **Taxi medical checks, pet registration, smallholder livestock owners.** Individual or consumer buyers, and state systems already sit in the flow.
- **Money changers.** Bank-only (**unverified**).

## 4. Method notes

What worked:

- Uzbek Latin-script queries with the legal phrasing ("litsenziyalash", "nizom", "majburiy", resolution numbers). These hit lex.uz, daryo.uz, gazeta.uz/oz and buxgalter.uz, and found the strongest triggers: the 1 Oct 2026 scrap e-purchase act, E-lom, and Resolution 189 on bees.
- Russian queries on norma.uz and buxgalter.uz for the workflow details.
- CBU statistics for exact operator counts.

What didn't work:

- Russian queries without "Узбекистан" up front drift to Russian Federation results.
- No search returned operator counts for scrap yards, beekeepers or vets.

Overall pattern: in Uzbekistan the state builds its own free platform for every new duty (my.soliq, Uztrans, E-lom, the animal registry). The only realistic gap is field or counter-side capture feeding those platforms, sold through local partners.
