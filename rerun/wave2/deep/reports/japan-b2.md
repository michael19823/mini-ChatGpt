# Japan: animal-business ledger and annual report tool (動物取扱業 帳簿・定期報告)

## Re-assessment (owner's criteria)

**Verdict: maybe. New score: 6/10 (old score: 5/10).**

**The case.** The annual 定期報告 is only one part of the job. A type-1 animal business must keep up to six records for 5 years. They are the facility and animal check record, the breeding record, the trade record, the per-animal ledger, health certificates and the annual report ([Saitama 狭山保健所 guide, 25.11.20版](https://www.pref.saitama.lg.jp/documents/281787/doutoriminasamahe260831.pdf)). Inspectors check these records often. In FY2023 prefectures made 19,135 on-site inspections of type-1 businesses, at 15,034 sites, out of about 50,000 registrations ([環境省 R6 table 2_1_3](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r06/2_1_3.pdf); [環境省 R6 2_1_1](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r06/2_1_1.pdf)). No Japanese software that keeps these records or produces the report was found in 12 more searches. Today people use free paper and Excel templates. A cheap "inspection-ready records" app for dog and cat breeders and small pet shops could reach about ¥20 million a year by year 3. Willingness to pay is still unproven, so this is a maybe and not a go.

### Room for improvement over the portal or current practice

- **No portal for the records at all.** The state gives only reference forms (参考様式 9, 10 and 11, plus a ledger with no set form). The business fills them in by hand or in Excel ([Saitama guide](https://www.pref.saitama.lg.jp/documents/281787/doutoriminasamahe260831.pdf); [Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html)). Only the annual report can be e-filed, through LoGo forms in Tokyo and Saitama ([Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html)).
- **Many records, by category.** The facility and animal check record applies to every category with a facility, boarding and training included. The trade record also covers boarding, training and auction businesses ([Saitama guide](https://www.pref.saitama.lg.jp/documents/281787/doutoriminasamahe260831.pdf)). So the record-keeping duty reaches far beyond the 28,555 registrations that file the report.
- **The report should come from the ledger.** The 定期報告 must be based on the per-animal ledger. It gives counts owned, handed over and dead in the year, and is due by 30 May ([Saitama guide](https://www.pref.saitama.lg.jp/documents/281787/doutoriminasamahe260831.pdf)). A rise in dog or cat deaths can lead to an order to submit death certificates (same source). Software can add up the counts and flag unusual death rates before filing.
- **Breeding limits need a lifetime count.** A dog may be mated only up to age 6 and have at most 6 litters. A cat may be mated only up to age 6. The age-7 exception needs proof from the breeding record of fewer than 6 litters for dogs or fewer than 10 for cats ([環境省 運用指針 extract](https://www.env.go.jp/nature/dobutsu/aigo/2_data/pamph/r0305a/03_6.pdf); [Kyoto](https://www.pref.kyoto.jp/doubutsu/6doubutuwohansyoku.html)). This was unverified in the first pass. It is a natural automatic warning.
- **Deadlines with no reminders.** Registration lasts 5 years. Health centres in principle send no expiry notice ([Saitama guide](https://www.pref.saitama.lg.jp/documents/281787/doutoriminasamahe260831.pdf)). Other dated tasks are the yearly responsible-person training, the yearly report, and the microchip deadlines of 30 days or before sale.
- **Microchip portal friction.** Registration and changes cost ¥400 online and ¥1,400 on paper, one animal at a time ([環境省 chip](https://www.env.go.jp/nature/dobutsu/aigo/pickup/chip.html)). The ministry page mentions no bulk upload, CSV or business account (same source). The earlier ¥300/¥1,000 figures were the old fees ([Mie](https://www.pref.mie.lg.jp/SHOKUSEI/HP/p0015300021.htm)). One vendor article says shops type chip data into the database by hand ([jisaku.com](https://jisaku.com/posts/retail-pet-shop-it-pc), weak source).
- **Inspection readiness.** Inspections are frequent, but formal sanctions are rare. In FY2023 there were 15 recommendations (勧告), 31 orders, 1 suspension and 4 cancellations nationwide ([環境省 R6 2_1_3](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r06/2_1_3.pdf)). The practical pain is the inspector's request to see 5 years of records, not the fine.
- **Weak evidence of pain.** No user complaints, help videos or consultants selling filing help were found. No 行政書士 fee for the report was found either. The pain case rests on the volume of records and on inspection frequency, not on direct complaints (unverified).

### Competitor reality check

- **Japanese products.** None was found that keeps the 帳簿 or the breeding record, or outputs 様式第11の2. This held in 12 more Japanese searches, after about 20 earlier ones. Search results returned only prefecture templates and foreign apps ([search hits: Kyoto](https://www.pref.kyoto.jp/doubutsu/documents/dai1doutori.pdf); [Kumamoto](https://www.pref.kumamoto.jp/uploaded/attachment/160283.pdf)).
- **jisaku.com "pet management software" (¥80,000-200,000 a year).** The listed product names could not be confirmed and look invented, so this is not a real benchmark ([jisaku.com](https://jisaku.com/posts/retail-pet-shop-it-pc)).
- **Generic pet-shop POS and kintone builds.** These handle sales, not the legal ledgers ([aurant-technologies](https://aurant-technologies.com/?p=27904)).
- **Foreign breeder apps.** BreederHQ, Breeder Cloud Pro and Husbandry.Pro track litters and health. None has Japanese forms or a Japanese interface ([G2](https://www.g2.com/products/breederhq/discuss); [GetApp](https://www.getapp.com/sales-software/a/breeder-cloud-pro/)).
- **Puppy marketplaces and big chains.** Their breeder-side tools and in-house systems could not be checked (unverified). These are the most likely hidden competitors.
- **Conclusion.** No incumbent was found. The substitutes are free templates and paper, which leaves an opening.

### Price per customer

- **Benchmarks.** Registration costs ¥15,000 per category, renewed every 5 years ([Aichi](https://www.pref.aichi.jp/site/gyoute/75190.html)). The legal maximum fine is ¥200,000 for the ledger or report ([e-Gov Art. 49](https://laws.e-gov.go.jp/api/1/lawdata/348AC1000000105)). No consultant fee for this work was found (unverified).
- **Breeder or small pet shop.** About ¥1,980-2,980 a month, or ¥24,000-36,000 a year. That is below generic cloud POS at up to ¥15,000 a month ([aurant-technologies](https://aurant-technologies.com/?p=27904)). This is a guess (unverified).
- **Boarding, training and exhibition sites.** A lighter check-record and trade-record plan at about ¥980 a month, or ¥12,000 a year (unverified).
- **Chains and multi-site operators.** About ¥3,000 a month per site, which is ¥36,000 a year per site (unverified).
- **Season pack.** About ¥4,980 one-off for the April-May report only, for very small users (unverified).
- **Per-accountant pricing.** Not relevant, because no accountant or 行政書士 market for this report was found.

### Revenue estimate (year 3)

Buyer counts come from [環境省 R6 2_1_1](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r06/2_1_1.pdf). Shares and prices are estimates (unverified).

| Segment | Buyers | Share | Customers | Price per year | Revenue |
|---|---|---|---|---|---|
| Dog and cat sellers (breeders and shops) | 16,886 | 3% | ~507 | ¥30,000 | ¥15.2M |
| Other sellers, exhibitors, renters, 譲受飼養 | ~11,600 (22,334 − 16,886 + 4,352 + 1,601 + 268) | 1.5% | ~174 | ¥20,000 | ¥3.5M |
| Boarding and training only (lighter plan) | ~20,000 (unverified, after overlap) | 1% | 200 | ¥12,000 | ¥2.4M |
| **Total** | | | **~880** | | **≈ ¥21M (about US$140,000)** |

Arithmetic: 507 × ¥30,000 = ¥15.2M; 174 × ¥20,000 = ¥3.5M; 200 × ¥12,000 = ¥2.4M; total ¥21.1M. A few chain deals could add more, but none was confirmed. If willingness to pay is only ¥1,000 a month, the total drops to about ¥10M.

### Ease of implementation and sale

- **Build: easy.** The forms are national and uniform (様式第11の2 and the 参考様式). The data model is simple: animals, events, dams and litters, staff and dates ([Saitama guide](https://www.pref.saitama.lg.jp/documents/281787/doutoriminasamahe260831.pdf)). Electronic records are allowed ([Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html)). No API is needed. LoGo filing can be done by copying the generated totals.
- **Onboarding: easy to medium.** Users can import an existing Excel ledger. Older home breeders may resist apps (unverified).
- **Sale: medium to hard.** Buyers are many and small. Channels are SEO around the spring report (定期報告 書き方), yearly responsible-person training, auction houses, breed clubs and vets. All are unconfirmed (unverified).

### Remaining risks

- **Low willingness to pay.** Formal sanctions are rare: 4 cancellations and 31 orders nationwide in FY2023 ([環境省 R6 2_1_3](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r06/2_1_3.pdf)).
- **Hidden competitors.** Marketplace or chain tools could not be checked (unverified).
- **State tool creep.** The 環境省 chip database already holds breeding-related fields ([データモデル](https://showcase.env.go.jp/wp-content/uploads/A024025_動物愛護管理法に基づく犬猫へのマイクロチップ装着義務化に係る情報登録電子システム_概念データモデル_v1.0.pdf)).
- **Law changes.** No current law-review document was found that changes the ledger rules (unverified).
- **Reputation.** The pet-sales sector is publicly criticised. Serving it may draw attention from welfare groups (unverified).

### New sources

- https://www.pref.saitama.lg.jp/documents/281787/doutoriminasamahe260831.pdf
- https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r06/2_1_3.pdf
- https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/gyosei-jimu_r06.html
- https://www.env.go.jp/nature/dobutsu/aigo/pickup/chip.html
- https://www.env.go.jp/nature/dobutsu/aigo/2_data/pamph/r0305a/03_6.pdf
- https://www.pref.kyoto.jp/doubutsu/6doubutuwohansyoku.html
- https://www.pref.mie.lg.jp/SHOKUSEI/HP/p0015300021.htm
- https://www.pref.aichi.jp/site/gyoute/75190.html
- https://www.pref.kumamoto.jp/uploaded/attachment/160283.pdf

## Summary

**Verdict: maybe. Score: 5/10.**

The duty is real and current. About 22,000 registered sales businesses and about 6,000 rental, exhibition and 譲受飼養 businesses must keep a 5-year ledger and file a yearly count report between 1 April and 30 May ([環境省 統計 R6](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r06/2_1_1.pdf); [Saitama](https://www.pref.saitama.lg.jp/a0706/doubutu-touroku/teikihoukoku.html)). No Japanese software that produces the ledger or the report was found. Prefectures give out free Excel templates, and Tokyo takes e-filing through LoGo forms ([Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html)). The penalty is an administrative fine (過料) of up to ¥200,000, and enforcement looks soft. In 2015 more than 2,200 dog and cat sellers did not file ([参議院 質問主意書 190-7](https://www.sangiin.go.jp/japanese/joho1/kousei/syuisyo/190/syuh/s190007.htm)). The annual report alone is too thin to sell. A wider "breeder compliance notebook" could sell at a low monthly price to the roughly 13,400 registered dog and cat breeders. It would cover the per-animal ledger, the breeding ledger with lifetime litter counts, the staff-to-animal ratio check, microchip tracking and the annual report. The biggest risk is low willingness to pay.

## Duty

**Legal basis.** The law is the 動物の愛護及び管理に関する法律 (Act No. 105 of 1973) ([e-Gov](https://laws.e-gov.go.jp/api/1/lawdata/348AC1000000105)).
- **Art. 21-5(1)**: 動物販売業者等 (sale, rental, exhibition and 譲受飼養 registrants) must keep a ledger. It records, for each animal, acquisition, sale or handover, death and other items set by ordinance, and must be kept for 5 years ([e-Gov](https://laws.e-gov.go.jp/api/1/lawdata/348AC1000000105); [Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html)).
- **Art. 21-5(2)**: the same businesses report to the governor each year. The report gives counts held at the start and end of the year, plus monthly counts of new animals, animals sold or handed over, and deaths ([e-Gov](https://laws.e-gov.go.jp/api/1/lawdata/348AC1000000105); [Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html)).
- **Scope.** Dogs and cats are recorded one by one. Other mammals, birds and reptiles are recorded by breed. The wider scope has applied since 2020-06-01; before that only dog and cat sellers had the duty ([Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html); [Saitama 改正](https://www.pref.saitama.lg.jp/a0706/doubutu/douaihoukaisei-reiwa1.html)).
- **Ledger fields** include breed, the breeder's name and registration number or address, date of birth, where the animal came from, buyer or recipient, death date and cause ([Kagawa leaflet](https://www.pref.kagawa.lg.jp/documents/566/doubutsutoriatukaigyousya_tirasi.pdf); [Okayama City](https://www.city.okayama.jp/kurashi/0000022635.html)).
- **Electronic records are allowed** if they can be shown on request ([Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html); [Ibaraki](https://www.pref.ibaraki.jp/hokenfukushi/doshise/aigo/tyoubo-teikihoukoku.html)).
- **Deadline.** File between 1 April and 30 May for the previous fiscal year. Filing is by post, at the counter, or by LoGo form e-filing in Tokyo and Saitama. Sendai also takes email ([Saitama](https://www.pref.saitama.lg.jp/a0706/doubutu-touroku/teikihoukoku.html); [Chiba](https://www.pref.chiba.lg.jp/eishi/pet/doubutsu/animal-business.html); [Sendai](https://www.city.sendai.jp/dobutsu/oshirase/r7_teikihoukoku.html)).
- **Form.** Every prefecture uses 様式第11の2 (動物販売業者等定期報告届出書), set by national ordinance, so the format looks uniform nationally ([Aomori sample](https://www.pref.aomori.lg.jp/soshiki/kenko/dobutu/files/20210108kisaireiteikihoukoku.pdf); [Sendai](https://www.city.sendai.jp/dobutsu/oshirase/r7_teikihoukoku.html)). Tokyo uses separate LoGo forms for the 23 wards and islands and for the Tama area ([Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html)).

**Related recurring duties for dog and cat sellers.** A tool can bundle these.
- **Breeding records.** Since 2021-06-01 the ordinance on keeping standards (飼養管理基準省令) requires a breeding ledger (繁殖実施状況記録台帳) that records each female's lifetime litter count. It must be kept for 5 years ([Kyoto](https://www.pref.kyoto.jp/doubutsu/r3kaiseihou.html)). The national limits on mating age and litter count were not confirmed in this pass (unverified).
- **Staff ratios.** Since June 2024, type-1 businesses may keep at most 20 dogs (15 of them breeding) or 30 cats (25 breeding) per staff member ([Kyoto](https://www.pref.kyoto.jp/doubutsu/r3kaiseihou.html)).
- **Health checks.** Breeding animals need an annual health check ([Kyoto](https://www.pref.kyoto.jp/doubutsu/r3kaiseihou.html)).
- **Microchips.** Since 2022-06-01, sellers must microchip every dog and cat within 30 days of acquiring it, or by 90 days of age (and before sale). They must register it on the national 環境省 database and file changes within 30 days ([e-Gov Arts. 39-2, 39-5, 39-6](https://laws.e-gov.go.jp/api/1/lawdata/348AC1000000105); [Chiba](https://www.pref.chiba.lg.jp/eishi/pet/doubutsu/inunekohanbaimc.html)). The fee is ¥400 per animal online and ¥1,400 on paper ([Shizuoka City](https://www.city.shizuoka.lg.jp/016_000001_00035.html)). Registering with a private registry does not count ([Shizuoka City](https://www.city.shizuoka.lg.jp/016_000001_00035.html)).

**Penalties** ([e-Gov, penal chapter](https://laws.e-gov.go.jp/api/1/lawdata/348AC1000000105)):
- Art. 49 sets a 過料 (administrative fine) of up to ¥200,000 for two things: not filing or filing falsely under Art. 21-5(2), and not keeping, falsifying or not retaining the ledger under Art. 21-5(1).
- Refusing or obstructing a report request or an on-site inspection under Art. 24 carries a criminal fine of up to ¥300,000 (Art. 47).
- Breaking an Art. 23 order or a business-suspension order under Art. 19, or trading without registration, carries a fine of up to ¥1,000,000 (Art. 46).
- Under Art. 19 the governor can cancel a registration or suspend the business for up to 6 months.
- No direct penalty article for the microchip duties was found. Breaches lead to guidance, and then possibly to cancellation or suspension ([Kyoto MC leaflet](https://www.pref.kyoto.jp/doubutsu/documents/03microchip.pdf)).

**Enforcement evidence.**
- In 2015, more than 2,200 dog and cat sellers nationwide did not file. A Diet member asked why prefectures rely on spoken reminders instead of 過料 ([参議院 190-7](https://www.sangiin.go.jp/japanese/joho1/kousei/syuisyo/190/syuh/s190007.htm)).
- No case of a 過料 actually being imposed for the ledger or the report was found (unverified).
- Cancellations do happen for poor keeping conditions, for example a Tokushima case that went from suspension to cancellation ([環境省 資料](https://www.env.go.jp/council/content/i_10/900435340.pdf)). Prefectures publish disposal criteria ([Tottori City](https://www.city.tottori.lg.jp/www/contents/1398651300623/simple/annzennhoushobun.pdf); [Nagano](https://www.pref.nagano.lg.jp/shokusei/documents/doubutsu_furiekishobun_honbun.pdf)).
- A 2025 Diet answer says the government will rely on the existing penalties and registration system rather than new licensing ([参議院 217](https://www.sangiin.go.jp/japanese/joho1/kousei/syuisyo/217/touh/t217089.htm)).

**Upcoming changes.** No new amendment touching the ledger or the report was found. The last major amendment was in 2019, with staged effect in 2020, 2021 and 2022 ([環境省 law page](https://www.env.go.jp/nature/dobutsu/aigo/1_law/index.html)). A five-year review of the 2019 law is expected around now (unverified).

## Buyers

National registrations of type-1 animal businesses, as of 2024-04-01 ([環境省 総括表 R6](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r06/2_1_1.pdf)):

| Category | Count | Ledger and report duty? |
|---|---|---|
| All type-1 establishments | 50,335 | — |
| Sale (販売) | 22,334 | Yes |
| – of which dog and cat sellers (犬猫等販売業) | 16,886 | Yes, plus microchips and the breeding ledger |
| – of which breeders (繁殖を行う者) | 13,362 | Yes, plus microchips and the breeding ledger |
| Boarding (保管) | 31,629 | No |
| Rental (貸出し) | 1,601 | Yes |
| Training (訓練) | 5,197 | No |
| Exhibition (展示) | 4,352 | Yes |
| Auction (競りあっせん) | 27 | No |
| 譲受飼養 | 268 | Yes |

- **Obliged entities.** The duty applies to 28,555 registrations in total, counted with overlap. The number of distinct establishments is probably 23,000-26,000 (estimate, unverified).
- **Growth.** Sales registrations have been flat at 21,000-22,000 since 2014. The total keeps rising because boarding grows ([環境省 R6](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r06/2_1_1.pdf)).
- **Regional check.** Kanagawa, excluding its four big cities, has 1,964 type-1 facilities as of 2026-03-31, of which 502 are sales ([Kanagawa](https://www.pref.kanagawa.jp/docs/e8z/doubutsu_toukei/toriatukaigyou.html)).
- **Segments:**
  1. About 13,400 dog and cat breeders. Many are home or family operations (unverified). They carry the heaviest record load: per-animal ledger, breeding ledger, microchips and staff ratios.
  2. About 3,500 dog and cat retailers that are not breeders (16,886 − 13,362). These include chains with their own systems (unverified).
  3. About 5,400 other sellers (birds, reptiles, small mammals), recorded by breed.
  4. About 6,000 exhibitors and renters (zoos, animal cafés, petting farms, film animal agencies).
- **How they comply today.** They use free prefectural Excel or Word templates and paper, and file by post, at the counter or through LoGo ([Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html); [Ibaraki](https://www.pref.ibaraki.jp/hokenfukushi/doshise/aigo/tyoubo-teikihoukoku.html); [Sendai](https://www.city.sendai.jp/dobutsu/oshirase/r7_teikihoukoku.html)). One vendor article says most pet shops still rely on paper ledgers or complex Excel sheets. It also says shops enter microchip data into the 環境省 database by hand ([jisaku.com](https://jisaku.com/posts/retail-pet-shop-it-pc)). No accountant or 行政書士 service for this report was found. 行政書士 do offer registration applications (unverified).

## Competition

- **Free state tools.** Prefectures and cities publish free Excel templates for the ledger and the report, with filled-in examples: Tokyo (様式11の2, ledger 参考様式1, and sales, rental and death sheets 2-4), Sendai, Saitama, Ibaraki, Kyoto and Sakai ([Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html); [Sendai](https://www.city.sendai.jp/dobutsu/oshirase/r7_teikihoukoku.html); [Kyoto PDF](https://www.pref.kyoto.jp/doubutsu/documents/dai1doutori.pdf)). Tokyo and Saitama take LoGo e-filing. These templates cover the report fully for a small operator, but they do not total the counts automatically from a per-animal ledger.
- **National microchip portal.** It is free to use; fees are ¥400 per registration online ([環境省 chip](https://www.env.go.jp/nature/dobutsu/aigo/pickup/chip.html); [Shizuoka City](https://www.city.shizuoka.lg.jp/016_000001_00035.html)). No bulk upload or API for sellers was confirmed (unverified). The system's published data model includes dam chip numbers, litter counts and mating dates ([環境省 データモデル](https://showcase.env.go.jp/wp-content/uploads/A024025_動物愛護管理法に基づく犬猫へのマイクロチップ装着義務化に係る情報登録電子システム_概念データモデル_v1.0.pdf)). So the state already holds part of the breeding data.
- **Japanese software.** None found that outputs the 帳簿 or 様式11の2. This held across 20 searches in Japanese and English, here and in the two earlier checks. One article lists "pet management software" with annual licences of ¥80,000-200,000 (PetManager Pro, AnimalCare Cloud, ZooLogic and others) ([jisaku.com](https://jisaku.com/posts/retail-pet-shop-it-pc)). The article is internally inconsistent and cites no sources. These products could not be confirmed to exist (unverified, likely unreliable).
- **Do-it-yourself builds.** There is a kintone guide for pet-shop management ([aurant-technologies](https://aurant-technologies.com/?p=27904)). Generic cloud POS costs ¥0-15,000 per month, with no animal-ledger features ([aurant-technologies](https://aurant-technologies.com/?p=27904)).
- **Foreign breeder software.** BreederHQ, Breeder Cloud Pro, BreedTracker, Whelper and Husbandry.Pro cover litters, health and buyers. None has a Japanese interface or the Japanese report format ([G2 BreederHQ](https://www.g2.com/products/breederhq/discuss); [GetApp Breeder Cloud Pro](https://www.getapp.com/sales-software/a/breeder-cloud-pro/); [Whelper](https://apps.apple.com/us/app/whelper-breeding-companion/id6751021305)).
- **Possible hidden competitors.** Puppy marketplaces (みんなのブリーダー and others) may give breeders management screens. Big chains and auction houses run in-house systems. Neither could be checked (unverified).

## Willingness to pay

- **Cost of not complying.** The legal maximum is a ¥200,000 過料 ([e-Gov Art. 49](https://laws.e-gov.go.jp/api/1/lawdata/348AC1000000105)). In practice the outcome is a reminder from the health centre ([参議院 190-7](https://www.sangiin.go.jp/japanese/joho1/kousei/syuisyo/190/syuh/s190007.htm)). The real threat is an inspection that finds a missing breeding ledger or staff-ratio breaches. That can lead to an order and then cancellation (Arts. 19, 23).
- **Staff time.** A shop that keeps a per-animal ledger in Excel spends perhaps a few hours a year adding up monthly counts (estimate, unverified). The daily ledger work is the larger cost, and it is hard to avoid.
- **Price benchmarks.** Generic cloud POS runs ¥0-15,000 per month ([aurant-technologies](https://aurant-technologies.com/?p=27904)). Claimed pet-management software runs ¥80,000-200,000 per year ([jisaku.com](https://jisaku.com/posts/retail-pet-shop-it-pc), unverified).
- **Plausible price.** About ¥980-2,980 per month (roughly ¥12,000-36,000 per year) for a breeder or small shop app. That is a guess, not tested (unverified).
- **Revenue at 2% of breeders.** About 270 users × ¥24,000 per year ≈ ¥6.5 million per year (estimate). That is a side business, not a large one.

## Channels

- **Responsible-person training.** Every prefecture and designated city runs 動物取扱責任者研修 for every registered site under Art. 22 ([Kagoshima](https://www.pref.kagoshima.jp/ae09/kenko-fukushi/yakuji-eisei/dobotu/toriatukai/sekininsyakensyuu.html); [Nagoya](https://www.city.nagoya.jp/kurashi/pet/1015199/1034043/1011611/1011612.html)). Every obliged business attends, so getting a handout or a slot there would reach the whole market. That depends on the prefecture agreeing (unverified).
- **Prefecture template pages.** Template downloads are where operators look each spring. Ads or SEO around keywords like 定期報告 書き方 and 様式11の2 Excel would catch them.
- **Industry bodies.** 全国ペット協会 runs the 家庭動物管理士 qualification used for responsible-person eligibility ([Kitakyushu list](https://www.city.kitakyushu.lg.jp/files/000917394.pdf); [Tokyo list](https://www.hokeniryo.metro.tokyo.lg.jp/documents/d/hokeniryo/2026-08-26-120928-538)). Its member count was not found; the site returned an error.
- **Breed clubs and kennel clubs** (JKC and others), **pet auction houses** (27 registered auction businesses where many breeders sell; [環境省 R6](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r06/2_1_1.pdf)), and **vets who implant chips**. Each is a concentrated route to breeders (unverified as channels).
- **Public registers.** Prefectures keep public registers of registered businesses, and some publish lists online. These could support direct mail (unverified).

## Risks

- **Low willingness to pay (main risk).** The report is once a year and simple. Templates are free. Enforcement is reminder-based, with more than 2,200 non-filers in 2015 ([参議院 190-7](https://www.sangiin.go.jp/japanese/joho1/kousei/syuisyo/190/syuh/s190007.htm)). Many breeders are small home businesses (unverified).
- **State tool creep.** 環境省 already runs the microchip database, which holds breeding fields ([データモデル](https://showcase.env.go.jp/wp-content/uploads/A024025_動物愛護管理法に基づく犬猫へのマイクロチップ装着義務化に係る情報登録電子システム_概念データモデル_v1.0.pdf)). It could later produce the 定期報告 for dogs and cats from chip data (speculative). Prefectures are moving to LoGo e-forms.
- **Platform bundling.** Puppy marketplaces or auction houses could give away a ledger tool to keep breeders loyal (unverified).
- **Market size.** Sales registrations are flat at about 22,000 ([環境省 R6](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r06/2_1_1.pdf)). The breeder count could shrink under the staff-ratio rules phased in to 2024 ([Kyoto](https://www.pref.kyoto.jp/doubutsu/r3kaiseihou.html)).
- **Language and trust.** Everything must be in Japanese, with a Japanese support line, invoice-system (インボイス) receipts and local payment options.
- **Reputation.** The pet-sales industry is criticised in public. Being seen to serve it may draw NGO attention.
- **Liability.** If the tool's totals are wrong, the user files a false report, which is subject to 過料. The product needs clear disclaimers and a review step.
- **No repeal risk.** No sign the duty will be dropped. It has only been widened (2020) and tightened (2021-2022).

## First product

**Version 1: a mobile-first web app for dog and cat breeders and small pet shops.**
1. **Per-animal register.** Record chip number, breed, sex, date of birth, dam and sire, and source. Log acquisition, sale or handover, buyer details, the face-to-face explanation done, and death date and cause. These fields match the ordinance ([Kagawa](https://www.pref.kagawa.lg.jp/documents/566/doubutsutoriatukaigyousya_tirasi.pdf)).
2. **Breeding ledger.** Track each dam's lifetime litters and mating dates, with warnings near limits ([Kyoto](https://www.pref.kyoto.jp/doubutsu/r3kaiseihou.html)).
3. **Staff-ratio check.** Compare the head count with staff numbers (20 dogs, 15 of them breeding, or 30 cats, 25 of them breeding, per staff member).
4. **Microchip deadlines.** Track the 30-day and 90-day-age deadlines and the change-of-owner filing. Produce a checklist for each animal to enter on the 環境省 portal.
5. **Annual report.** One click produces 様式第11の2 as Excel or PDF, plus a CSV for LoGo. A "show inspector" mode opens the 5-year ledger.

**First 30 days.**
- Week 1: get the 様式11の2 and ledger templates from 5-6 prefectures (Tokyo, Saitama, Sendai, Aomori, Kyoto, Ibaraki) and confirm the fields match.
- Week 1: interview 10 breeders, found through auction houses or breeder forums, on their current tools and price tolerance.
- Weeks 2-3: build the register and report export.
- Week 4: free beta for the April-May 2027 filing window, plus a landing page targeting "定期報告 書き方" searches.
- Week 4: test a ¥980 per month plan against a ¥4,980 one-off "report season" pack.

## Open questions

- How many 過料 or orders have prefectures issued for the ledger or report since 2020 (unverified)?
- What are the national limits on mating age and litter count, and must they be shown at inspection (unverified)?
- Does the 環境省 chip system offer seller bulk upload, CSV or an API (unverified)?
- Do puppy marketplaces or auction houses already give breeders a ledger tool (unverified)?
- How are breeders split by size (number of dams), and how many are sole traders (unverified)?
- Will prefectures let a vendor present at 動物取扱責任者研修 sessions (unverified)?
- Is the five-year review of the 2019 amendment under way, and does it touch the ledger rules (unverified)?

## Sources

- https://laws.e-gov.go.jp/api/1/lawdata/348AC1000000105
- https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r06/2_1_1.pdf
- https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r04/2_1_1.pdf
- https://www.env.go.jp/nature/dobutsu/aigo/1_law/index.html
- https://www.env.go.jp/nature/dobutsu/aigo/pickup/chip.html
- https://www.env.go.jp/council/content/i_10/900435340.pdf
- https://showcase.env.go.jp/wp-content/uploads/A024025_動物愛護管理法に基づく犬猫へのマイクロチップ装着義務化に係る情報登録電子システム_概念データモデル_v1.0.pdf
- https://www.sangiin.go.jp/japanese/joho1/kousei/syuisyo/190/syuh/s190007.htm
- https://www.sangiin.go.jp/japanese/joho1/kousei/syuisyo/217/touh/t217089.htm
- https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html
- https://www.hokeniryo.metro.tokyo.lg.jp/documents/d/hokeniryo/2026-08-26-120928-538
- https://www.pref.saitama.lg.jp/a0706/doubutu-touroku/teikihoukoku.html
- https://www.pref.saitama.lg.jp/a0706/doubutu/douaihoukaisei-reiwa1.html
- https://www.pref.chiba.lg.jp/eishi/pet/doubutsu/animal-business.html
- https://www.pref.chiba.lg.jp/eishi/pet/doubutsu/inunekohanbaimc.html
- https://www.city.sendai.jp/dobutsu/oshirase/r7_teikihoukoku.html
- https://www.pref.aomori.lg.jp/soshiki/kenko/dobutu/files/20210108kisaireiteikihoukoku.pdf
- https://www.pref.ibaraki.jp/hokenfukushi/doshise/aigo/tyoubo-teikihoukoku.html
- https://www.pref.kyoto.jp/doubutsu/r3kaiseihou.html
- https://www.pref.kyoto.jp/doubutsu/documents/dai1doutori.pdf
- https://www.pref.kyoto.jp/doubutsu/documents/03microchip.pdf
- https://www.pref.kagawa.lg.jp/documents/566/doubutsutoriatukaigyousya_tirasi.pdf
- https://www.city.okayama.jp/kurashi/0000022635.html
- https://www.city.shizuoka.lg.jp/016_000001_00035.html
- https://www.pref.kanagawa.jp/docs/e8z/doubutsu_toukei/toriatukaigyou.html
- https://www.city.tottori.lg.jp/www/contents/1398651300623/simple/annzennhoushobun.pdf
- https://www.pref.nagano.lg.jp/shokusei/documents/doubutsu_furiekishobun_honbun.pdf
- https://www.pref.kagoshima.jp/ae09/kenko-fukushi/yakuji-eisei/dobotu/toriatukai/sekininsyakensyuu.html
- https://www.city.nagoya.jp/kurashi/pet/1015199/1034043/1011611/1011612.html
- https://www.city.kitakyushu.lg.jp/files/000917394.pdf
- https://jisaku.com/posts/retail-pet-shop-it-pc
- https://aurant-technologies.com/?p=27904
- https://www.g2.com/products/breederhq/discuss
- https://www.getapp.com/sales-software/a/breeder-cloud-pro/
- https://apps.apple.com/us/app/whelper-breeding-companion/id6751021305
