# Uzbekistan: Offline (Quiet) Industries Pass

**Status: partial.** The search tool refused the 9th WebSearch call ("You've hit your usage limit"), so research stopped as the instructions require. 8 searches ran, all in Russian (one Uzbek-language query was refused). WebFetch was not used. As a result:

- No law text, register or form was read in full. Every workflow detail beyond the search snippets is marked **unverified** or **inferred**.
- Most market counts could not be sourced.
- All scores are provisional. They are low partly because of the evidence gaps.

The existing country report (`research/countries/uzbekistan.md`) covers Asl Belgisi product marking for agro-input dealers and retailers. Those ideas are not repeated here.

General frictions (from the country report, **unverified**):

- Personal data of Uzbek citizens must be hosted inside Uzbekistan.
- Payments run on local rails (UzCard/Humo, Payme, Click).
- Business is done in Russian and Uzbek, and Uzbek is written in both Latin and Cyrillic script.
- The state relies heavily on its own portals: my.gov.uz, licence.gov.uz and state information systems.

Together these make it hard for a non-local solo founder to sell here.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Scrap metal collection points (ferrous and non-ferrous) | **New licence** for collecting (buying), processing and selling metal scrap and waste. Introduced by Law ZRU-1113 of 15.01.2026; state fee 10 BRV (yuz.uz, lex.uz) | Yard-based cash buyers, mostly invisible online. The licence is new, so there is no compliance tooling yet (inferred) | Unknown. No register found | **Candidate (weak)** | Fresh trigger. But whether ongoing record-keeping or reporting duties exist (and not just a one-time licence) is **unverified** |
| Livestock owners and dehqon farms | Law ZRU-1079 "On identification, registration and tracing of animals" (06.08.2025, in force 07.08.2026). Cattle, sheep, goats and camels must be tagged and registered within 14 days of birth, imports within 21 days. Movements, diseases, treatments and slaughter go into an electronic database (gazeta.uz, kun.uz, lex.uz) | Smallholders with a few animals; tags sold by suppliers such as ERKSONS (erksons.uz) | Millions of households (estimate; no figure sourced) | Reject as SaaS buyer | Consumers and smallholders won't pay. The state Animal Identification Centre runs the database |
| Identification specialists / private vets doing tagging | The same law gives powers to "identification specialists" and to the Centre for Identification, Registration and Monitoring of Animals under the Veterinary Committee (lex.uz summary) | Rural field work; birth and movement events entered per animal | Unknown. Private vet licences are issued by the Veterinary Committee via my.gov.uz; the FAO is assessing private vet capacity (uzdaily.uz). No count found | **Candidate (weak)** | Per-animal, per-event data entry by field workers is the classic pattern. But the state system probably ships its own app (**unverified**) |
| Private veterinary practices | Licence for veterinary activity (my.gov.uz service 225); register of notifications about starting treatment and preventive activity | Small rural practices | Unknown | Folded into the row above | No recurring reporting duty found in snippets |
| Pet owners (dogs and cats) | Registration and chipping within 3 months under the same law; ban on keeping unregistered pets from 01.01.2028 (fergana.agency, afisha.uz, anhor.uz) | Consumers | Urban households (no count) | Reject | Consumer behaviour change. The buyer would be a vet clinic, and its work is a one-off per pet |
| Pawnshops | CBU licensing, statistical reporting, consumer-interaction rules (cbu.uz) | Gold-pawn counters | **90 pawnshops** at 1 Aug 2026; 68 hold 97.6% of assets (cbu.uz / uzdaily.uz) | Reject | Market too small, and CBU reporting is already formalised |
| Taxi drivers (self-employed and individuals) | Monthly medical checks at clinics connected to the "Uztrans" unified system; physical persons allowed to work as taxi drivers (norma.uz, autostrada.uz) | Individual drivers | Unknown (large) | Reject | Aggregators (Yandex Go etc.) and the state Uztrans system already sit in this flow (**unverified**). The buyer is an individual |
| Small passenger and freight carriers (minibus, intercity, trucking) | Waybills mandatory; pre-trip technical and medical checks before every trip, recorded on the waybill (norma.uz). Digital waybill/document-flow pilot from 1 April 2024 under Cabinet resolution No. 44 of 22.01.2024 (norma.uz) | Paper waybills completed by dispatcher, mechanic, medic and driver (norma.uz instruction) | Unknown | **Candidate (weak)** | Daily per-vehicle paper workflow with a pending e-waybill system. Whether it is mandatory now, and whether the state system is free, is **unverified** |
| Money changers | Currency exchange is done through banks, not independent bureaus (**unverified**, background knowledge) | n/a | n/a | Reject | No independent small operators to sell to |
| Household employers (domestic workers) | Not researched (budget) | n/a | n/a | Not screened | No search budget |
| Beekeepers | Not researched (budget). Hives probably fall under animal registration (**unverified**) | n/a | n/a | Not screened | No search budget |
| Halal certification / food producers at markets | Not researched (budget) | n/a | n/a | Not screened | No search budget |
| Dehqon bazaar traders | Not researched (budget) | n/a | n/a | Not screened | No search budget |
| Cemeteries / monument makers | Not researched (budget). Mahalla-run, likely unregulated as businesses (**unverified**) | n/a | n/a | Not screened | No search budget |

Country-specific groups added via registers: the scrap metal licence (new in 2026), animal identification specialists (new in 2026) and the waybill and pre-trip check regime for carriers.

## 2. Strongest opportunities (provisional)

### Opportunity: Licence-and-ledger kit for newly licensed scrap metal buyers

**Industry:**
Scrap metal collection, processing and resale (ferrous and non-ferrous).

**Buyer:**
Owner of a scrap collection yard or point (a small LLC or individual entrepreneur), or the accountant serving several yards.

**Trigger / Why now:**
Law ZRU-1113 of 15.01.2026 (a WTO-accession package) makes the collection (purchase), processing and sale of ferrous and non-ferrous scrap and waste a licensed activity. The state fee for the licence is 10 BRV. The licensing regulation with detailed conditions (record books, acceptance acts, site requirements) was **not read**. In comparable post-Soviet regimes, such as Russia's scrap licensing rules, licensees must keep a register of acceptance acts recording each seller's identity document and an inspection that the scrap is not explosive or radioactive. Whether Uzbekistan copies this is **unverified**.

**Current workflow (inferred):**
1. Apply for the licence through licence.gov.uz / my.gov.uz with an e-signature, attaching site and equipment documents.
2. At the counter, weigh the scrap, pay cash, and handwrite or Excel an acceptance record, which probably includes the seller's passport details.
3. Resell to metallurgical plants (e.g. Uzbek Metallurgical Plant/Uzmetkombinat, Almalyk MMC for non-ferrous) with invoices through the e-invoice (ESF) system.
4. Keep records for licence inspections.

**Pain:**
Not evidenced. Scrap theft (cables, manhole covers) typically drives seller ID checks in this region (inferred), and licence loss would close the business. No enforcement data was collected.

**Existing solutions:**
- Paper acceptance-act books from stationers (inferred).
- 1C configurations from local franchisees (inferred).
- Licensing consultants and law firms that prepare applications (inferred, by analogy with Russia).
- The state licence.gov.uz portal for the licence itself.

**Offline evidence:**
Cash-at-the-counter trade. No Uzbek-language vendor or forum results surfaced, and the search returned mostly Russian licensing consultants.

**Offline channel:**
- The buyers: large off-takers (metallurgical plants) that set supplier documentation requirements.
- Accountants and licensing consultants in Tashkent.
- Physical walk-in to scrap yards, which cluster on city outskirts.
- The public licence register once licences are issued (licence.gov.uz shows issued licences, **unverified**).

**Market count:**
Unknown. No register found yet. **Estimate:** low thousands of points nationwide (unverified).

**The gap:**
No app or vendor shows up for a phone-based acceptance register (seller ID photo, weight, photo of the load, auto-numbered act) that produces whatever ledger the licensing regulation requires and exports into the ESF invoice to the plant.

**Possible product:**
A done-for-you licence application service plus a mobile acceptance register, priced as a service.

**MVP:**
A Telegram mini-app or PWA that creates numbered acceptance acts with seller ID and photos, prints a monthly ledger, and keeps a licence-document checklist.

**Pricing hypothesis:**
- Licence preparation: one-off $100–300.
- Register: $10–20 per month per point.

These are estimates. Buyers would most likely pay only for the done-for-you licence service.

**Founder access:**
Needs a local (Russian/Uzbek, in-person yard visits, local hosting of passport data).

**Risks:**
- The licensing regulation may impose no per-transaction record-keeping.
- Informal operators may stay unlicensed.
- Personal-data localization.
- The licence work is a one-off.

**Kill condition:**
The licensing regulation contains no ongoing ledger or reporting duty, or a free state register already covers it.

**Score:** 3/10 (provisional; obligation detail unverified)

**Sources:**
- https://lex.uz/doc-passport/7999051
- https://yuz.uz/ru/news/budet-litsenzirovatsya-zagotovka-loma-i-otxodov-chernx-i-tsvetnx-metallov
- https://www.gazeta.uz/ru/2025/07/02/licensing/
- https://ruslom.com/v-uzbekistane-vvoditsya-litsenzionnyy-poryadok-dlya-deyatelnosti-po-zagotovke-pererabotke-i-realizatsii-loma-i-othodov-chernyh-i-tsvetnyh-metallov/

### Opportunity: Field event logger for animal identification specialists and private vets

**Industry:**
Livestock identification and veterinary field services.

**Buyer:**
A private vet practice or identification contractor that tags and registers animals for many smallholders. A livestock farm or cluster with hundreds of head is a secondary buyer.

**Trigger / Why now:**
Law ZRU-1079 "On identification, registration and tracing of animals" (06.08.2025) entered into force on 07.08.2026.

- Animals are identified with visual tags, microchips or combined tags carrying a unique code.
- Cattle, sheep, goats and camels must be registered within 14 days of birth, horses within 4 months and pigs within 1 month. Imported animals must be registered within 21 days.
- The electronic database records each animal's owner, origin, movements, diseases, treatments, slaughter and export.
- A Centre for Identification, Registration and Monitoring of Animals under the Veterinary Committee runs it. The law defines "identification specialists".
- Owner-side bans on unregistered pets start on 01.01.2028.

**Current workflow (inferred):**
1. The specialist visits a household or farm and applies tags.
2. They write down tag number, species, sex, age and owner on paper.
3. Later they enter each record into the state database.
4. Movements and treatments have to be entered as further events.

**Pain:**
Many events per animal, and tight deadlines (14 days from birth). Rural villages have patchy connectivity (inferred). No complaint evidence was collected.

**Existing solutions:**
- The state database and its interface, probably with its own mobile app (**unverified**).
- Tag suppliers such as ERKSONS (Tashkent), which supply tags for cattle and small ruminants.
- Paper notebooks.

**Offline evidence:**
Smallholder livestock is kept by rural households. The work happens in the field and in the village (mahalla).

**Offline channel:**
- Tag suppliers (ERKSONS and others) bundling an app with tag orders.
- District veterinary offices of the Veterinary Committee.
- The FAO private-veterinary programme.

**Market count:**
Unknown number of identification specialists and private vets. The animals number in the millions (estimate, not sourced).

**The gap:**
Offline-first bulk capture (scan the tag barcode, apply a default owner and location, queue and sync) is the gap, but only if the state system has no good field app or permits third-party API access. Neither is verified.

**Possible product:**
An offline mobile batch-entry tool that syncs to the state database, or exports in its import format, plus a herd book for farms.

**MVP:**
An offline PWA for batch tag-scan entry, exporting a CSV in the state database's format.

**Pricing hypothesis:**
$5–15 per month per specialist, or a per-animal fee bundled with tag sales (estimate). Willingness to pay for software alone is low. Bundling with tag suppliers is more realistic.

**Founder access:**
Needs a local partner. Likely requires state accreditation for API access.

**Risks:**
- The state builds or mandates its own app. This is likely, since it has done so for other systems (inferred).
- No third-party API.
- Low prices.

**Kill condition:**
The Centre provides a free mobile app with offline mode, or forbids third-party submission.

**Score:** 3/10 (provisional)

**Sources:**
- https://lex.uz/ru/docs/7676785?ONDATE=07.08.2026
- https://www.gazeta.uz/ru/2025/08/07/animals/
- https://kun.uz/ru/news/2025/08/07/v-uzbekistane-vvoditsya-obyazatelnaya-registratsiya-jivotnyx
- https://erksons.uz/news/registraciya-zhivotnyh-zakon-2026
- https://www.norma.uz/novoe_v_zakonodatelstve/sozdaetsya_elektronnyy_reestr_jivotnyh
- https://www.uzdaily.uz/ru/fao-otsenivaet-perspektivy-chastnoi-veterinarii-v-uzbekistane/

### Opportunity: Waybill and pre-trip check log for small carriers (watch-list)

**Industry:**
Small passenger carriers (minibus/route operators, intercity) and small trucking companies.

**Buyer:**
The dispatcher or owner of a carrier with 5–50 vehicles.

**Trigger / Why now:**
Several rules already apply:

- Carriers may not carry passengers, baggage or cargo without a pre-trip technical inspection and a driver medical check, both recorded on the waybill.
- Vehicles may not be dispatched without a properly completed waybill.
- Taxi drivers must have monthly medical checks at clinics connected to the "Uztrans" unified information system.

A pilot of digital document flow for passenger and freight transport records started on 1 April 2024 under Cabinet resolution No. 44 of 22.01.2024. A draft also proposed a new waybill form for cars. Whether the electronic waybill system is now mandatory, and who may act as operator, is **unverified**. This is the decisive fact.

**Current workflow (from norma.uz instruction snippets):**
1. The dispatcher issues a paper waybill.
2. The mechanic signs off the technical check.
3. The medic records the driver's medical check.
4. The driver completes the trip.
5. The waybill is returned and processed for fuel and accounting records.

**Pain:**
A paper form with four signatories per vehicle per day. No complaint evidence was collected.

**Existing solutions:**
- Pre-printed waybill blanks from printers and stationers (inferred).
- 1C transport configurations (inferred).
- The state pilot e-document system and Uztrans.
- In Russia, where e-waybills became mandatory, a large vendor ecosystem exists (Kontur, Taxcom and others), and those vendors could enter Uzbekistan.

**Offline evidence:**
Paper waybill instructions are published on norma.uz, and the e-system is only at pilot stage.

**Offline channel:**
- Associations of carriers (AIRCUZ for international hauliers, **unverified** relevance).
- Licensed medical-check clinics.
- Bus stations and route operator tenders run by regional khokimiyats (inferred).

**Market count:**
Unknown.

**The gap:**
If e-waybills become mandatory, there may be room for a cheap, Uzbek-language e-waybill and medical/technical check app connected to the state system. The gap does not exist until there is a mandate and an operator accreditation regime.

**Possible product:**
A dispatcher app that produces e-waybills with medic and mechanic sign-off on a phone.

**MVP:**
Not worth building before the mandate is confirmed.

**Pricing hypothesis:**
$2–5 per vehicle per month (estimate).

**Founder access:**
Needs a local. Russian e-waybill vendors are the natural entrants.

**Risks:**
- Russian incumbents porting their products.
- A free state system.

**Kill condition:**
No mandatory e-waybill date, or a free state app.

**Score:** 2/10 (watch-list)

**Sources:**
- https://www.norma.uz/novoe_v_zakonodatelstve/ustanovlen_poryadok_provedeniya_predreysovyh_tehnicheskih_i_medosmotrov
- https://www.norma.uz/novoe_v_zakonodatelstve/kak_budet_rabotat_sistema_ucheta_elektronnyh_putevyh_listov
- https://www.norma.uz/uz/novoe_v_zakonodatelstve/proekty_npa_vvedut_novuyu_formu_putevyh_listov_dlya_legkovyh_avto
- https://www.norma.uz/deyatelnost_otdelnyh_otrasley/instrukciya_po_izgotovleniyu

## 3. Rejected

- **Pawnshop compliance:** only 90 pawnshops (CBU, 1 Aug 2026), with assets concentrated in 68 of them. The market is too small, and CBU reporting is already formalised. Sources: https://cbu.uz/ru/credit-organizations/pawn-shops/, https://www.uzdaily.uz/ru/aktivy-lombardov-uzbekistana-vyrosli-na-50-za-god/
- **Pet registration for owners:** a consumer buyer and a one-off event. Vet clinics would do it with the state system. Owner obligations start only on 01.01.2028.
- **Smallholder livestock owners as buyers:** they will not pay. The state database is free.
- **Taxi driver medical checks:** individual buyers, and Uztrans plus aggregators already sit in the flow (**unverified**).
- **Money changers:** no independent small operators (currency exchange runs through banks; **unverified**).

## 4. Method notes

- **What worked:** Russian-language queries of the form "<industry> Узбекистан лицензия/закон 2025/2026". They surfaced news on gazeta.uz, kun.uz, norma.uz and yuz.uz, plus lex.uz law passports. That was enough to find two 2026 triggers: scrap licensing (ZRU-1113) and animal identification (ZRU-1079).
- **What didn't:** Russian queries without "Узбекистан" near the front return mostly Russian Federation results, as with waybills and scrap licences. CBU statistics pages give exact counts for financial operators only.
- **Not done:** no Uzbek-language query succeeded (it was refused), and none of the law texts was opened.
- **Next run:**
  - Read the licensing regulation for scrap (look for "журнал", "приемо-сдаточный акт").
  - Read ZRU-1079 for who may act as an identification specialist and whether third parties can submit data.
  - Check the status of the electronic waybill system after the 2024 pilot.
  - Screen domestic workers, beekeepers, halal and bazaar traders.
