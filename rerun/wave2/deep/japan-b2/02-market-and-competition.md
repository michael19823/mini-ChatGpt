# Japan animal-business records tool: market size, buyers and competition (deep dive 02)

Date: 10 Oct 2026. Builds on [the B2 report](../reports/japan-b2.md). Scope: market size, buyers, competition, channels and regional expansion. Status: complete (10 Oct 2026). Law detail is in the 01 file.

## Summary

- **Buyers: about 25,000 sites carry the ledger and annual-report duty.** On 1 April 2025 there were 28,857 registrations with the duty (sale 22,404, exhibition 4,541, rental 1,622, 譲受飼養 290; one site can hold several). The core target is the **13,347 dog and cat breeders**, plus about 3,400 dog and cat shops that do not breed ([MOE R7 2_1_1](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_1.pdf)). The numbers are flat since 2014.
- **They are tiny.** In my count of Fukuoka's register, 84% of sites are individuals and the median dog and cat seller declares about 10 animals. Kagoshima City looks the same.
- **Pain is proven by inspectors, not by complaints.** In MOE's November 2023 sweep of about 1,400 breeders, 665 broke the law. **496 had ledger defects and 314 had breeding-ledger defects.** By the August 2025 follow-up, 92 ledger cases and 79 breeding-ledger cases were still not fixed among those re-inspected ([MOE council paper](https://www.env.go.jp/council/content/i_10/000357242.pdf)). No forum complaints were found.
- **No Japanese product does the job.** About 45 searches across passes found only free prefecture templates, e-filing routes (LoGo, Chiba e-filing, email), the state chip portal, generic POS, kintone builds and English-language breeder apps. The free Excel template is the real competitor.
- **Hidden competitors are platforms.** みんなのブリーダー lists 3,854 breeders and runs its own 35-item screening ([min-breeder.com](https://www.min-breeder.com/)). The 25 auction businesses were told in 2024 to check puppies' birth dates. Either could add a ledger, so treat them as partners first.
- **Willingness to pay is plausible but unproven.** Breeders already pay registration (¥15,000 per category), yearly training (¥1,000-2,000), chip fees (¥400 per animal) and per-sale marketplace fees (¥15,000 at one site in 2015). Nobody pays for the ledger today. Sole-trader accounting apps at about ¥1,000 a month are the natural price anchor.
- **Positioning:** "inspection-ready records for dog and cat breeders", with the 30 May report as a free by-product. Suggested price ¥1,480 a month or ¥14,800 a year. Year-3 base case **about ¥14M a year** (low ¥3.5M, high ¥32M with a marketplace or auction partner). This is below the main report's ¥21M because boarding sites are dropped.
- **Channels:** auction houses and ペットパーク流通協会, marketplaces, the yearly training run by 67 authorities, spring search traffic, vets, and Interpets in early April.
- **Regional:** Taiwan is the closest analogue. It has a 3-year sales record, a quarterly chip report and lifetime litter limits, and 3,733 valid licences by my count of the open register (1,845 breeding, 2,409 selling). Korea (2,010 producers, 3,114 sellers) has a monthly trade report, possibly filed through a state system. Both are small, need their own language, and come later.

## Buyer segments

National counts are from the Ministry of the Environment (環境省) yearly admin statistics, 令和7年度版, table 2_1_1, as of 1 April 2025 ([環境省 R7 2_1_1](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_1.pdf)). "Category registrations" overlap: one site can hold several categories.

| Segment | Count | Source | Year | Confidence |
|---|---|---|---|---|
| All type-1 animal business sites (第一種動物取扱業 総事業所数) | 51,198 | [環境省 R7 2_1_1](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_1.pdf) | 2025-04-01 | high |
| Sale (販売) registrations | 22,404 | same | 2025-04-01 | high |
| - of which dog and cat sellers (犬猫等販売業) | 16,789 | same | 2025-04-01 | high |
| - of which dog and cat breeders (繁殖を行う者) | 13,347 | same | 2025-04-01 | high |
| - dog and cat sellers that do not breed (shops, brokers) | 3,442 (16,789 − 13,347) | my arithmetic | 2025-04-01 | high |
| - sellers of other animals only (birds, reptiles, small mammals, fish-adjacent) | 5,615 (22,404 − 16,789) | my arithmetic | 2025-04-01 | high |
| Rental (貸出し) | 1,622 | same | 2025-04-01 | high |
| Exhibition (展示: zoos, animal cafés, petting farms) | 4,541 | same | 2025-04-01 | high |
| 譲受飼養 (take-in keeping, e.g. "old dog homes") | 290 | same | 2025-04-01 | high |
| **Registrations with the ledger + annual report duty** (sale + rental + exhibition + 譲受飼養) | **28,857** (with overlap) | my sum of the above | 2025-04-01 | high |
| Boarding (保管: pet hotels, trimming salons) | 32,576 | same | 2025-04-01 | high |
| Training (訓練) | 5,234 | same | 2025-04-01 | high |
| Auction (競りあっせん) | 25 | same | 2025-04-01 | high |
| Type-2 (non-profit shelters, 第二種) sites | 2,224 | same | 2025-04-01 | high (not a target) |
| Distinct sites with the ledger + report duty | about 24,000-26,000 (estimate) | my estimate from the overlap seen in the Fukuoka register below | 2025 | medium |
| Fukuoka Prefecture (excluding Fukuoka City, Kitakyushu, Kurume): category registrations / distinct sites | 1,550 / 1,229 | my count of the 9 health-centre Excel registers on [Fukuoka Pref.](https://www.pref.fukuoka.lg.jp/contents/animalhandlingbusiness-type1-inspection.html) | 2026-06-30 | high |
| Fukuoka: sites held by a company or other legal person | 16% (199 of 1,229); 84% are individuals | my count, same files (name contains 株式会社, 有限会社, 合同会社, 法人 etc.) | 2026-06-30 | medium-high |
| Fukuoka: dog and cat sale registrations, by dogs + cats declared | 396 parsed. Median 10 animals; 55% hold 10 or fewer; 7% hold more than 50; 2 hold more than 100 | my count, same files (field 主として取り扱う動物の種類及び数) | 2026-06-30 | medium (declared, not actual, numbers) |
| Kagoshima City: sites / company share / dog and cat sellers' median declared head count | 188 / 24% / 10 animals (65 dog and cat sale registrations) | my count of [Kagoshima City list (Excel)](https://www.city.kagoshima.lg.jp/kenkofukushi/hokenjo/seiei-jueki/kurashi/dobutsu/toriatsukaigyo/index.html) | 2025-01-15 | high |
| Dogs and cats newly microchip-registered per year (proxy for animals passing through sellers) | about 603,000 in FY2024 (cumulative 1,905,653 at FY2024 end minus 1,302,424 at FY2023 end; deaths are removed, so this understates new registrations) | [環境省 R7 2_7](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_7.pdf) | FY2024 | medium |
| On-site inspections of type-1 businesses | 23,914 inspections at 20,215 sites; 14 written recommendations (勧告) | my reading of [環境省 R7 2_1_3](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_3.pdf) (Tokyo counts gross visits only) | FY2024 | medium (column layout hard to read) |
| Dog breeders listed on the largest puppy marketplace (みんなのブリーダー) | 3,854 breeders; 12,148 puppies listed; 480,000 cumulative matches | [min-breeder.com front page](https://www.min-breeder.com/) | Oct 2026 | medium (site's own figures) |
| Breeding facilities (2020 industry figure) | 12,730 registered facilities that breed; 11,743 breed dogs, 4,557 breed cats | [犬猫適正飼養推進協議会 and ペットパーク流通協会 survey release](https://digitalpr.jp/r/41597) | 2020 | medium |
| Size of larger commercial breeders | Association members over the staff-ratio limit kept on average 28.9 breeding dogs or 42.6 breeding cats | [same survey](https://digitalpr.jp/r/41597) (1,109 valid replies, self-selected) | Jul 2020 | medium |
| Breeders inspected in the national sweep / with ledger defects / with breeding-ledger defects | about 1,400 / 496 / 314 | [MOE council paper 資料2](https://www.env.go.jp/council/content/i_10/000357242.pdf) | Nov 2023 | high |
| Registering authorities (each runs the yearly training) | 67 (47 prefectures, 20 designated cities) | my count of [MOE R7 2_1_2](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_2.pdf) | 2025-04-01 | high |

**Trend.** Sale registrations have been flat at 20,700-22,400 since 2014. Dog and cat sellers peaked at 16,887 in 2022 and slipped to 16,789 in 2025. Breeders are flat at about 13,300. Boarding grows every year, from 22,575 in 2014 to 32,576 in 2025 ([環境省 R7 2_1_1](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_1.pdf)).

**Where they are.** Tokyo has the most sites (5,387) but only 625 breeders. Breeders cluster outside the big cities: Ibaraki 515, Saitama 736, Chiba 721, Aichi 702, Fukuoka Pref. 560, Gunma 426, Hyogo 430 ([環境省 R7 2_1_2](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_2.pdf); prefecture figures exclude their designated cities).

## Buyer profile and pain

**Who they are.** Most buyers are tiny. In the Fukuoka register 84% of sites are held by individuals, not companies. The median dog and cat seller declares about 10 animals. Kagoshima City looks the same: 24% companies, median 10 animals (my counts; see table above). Breeders are mostly rural home or family kennels (犬舎) and catteries (猫舎). Shops are a mix of chains and single stores. The commercial breeders who sell through auctions are bigger: members over the staff-ratio limit kept on average 28.9 breeding dogs or 42.6 breeding cats in 2020. In that survey 32.3% of dog breeders and 18.9% of cat breeders said they might close under the new staff ratios ([survey release](https://digitalpr.jp/r/41597)). Yet the breeder count has stayed at about 13,300 ([MOE R7 2_1_1](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_1.pdf)). So the feared mass exit has not shown up in the register.

**How they comply today.** They use free prefecture Excel or Word templates, or paper. Prefectures publish a reference ledger, monthly count sheets and a filled-in example of the report form (様式第11の2) ([Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html); [Kobe example](https://www.city.kobe.lg.jp/documents/15108/teikihoukoku~kisairei~.pdf); [Kyoto breeding ledger](https://www.pref.kyoto.jp/doubutsu/documents/05nisyucyoubo.pdf)). They file by post, at the counter, by email (Saitama, Shiga) or through LoGo forms (Tokyo) ([Saitama](https://www.pref.saitama.lg.jp/a0706/doubutu-touroku/teikihoukoku.html); [Shiga](https://www.pref.shiga.lg.jp/doubutsuhogo/tourokukyoka/343567.html)).

**The strongest pain evidence: a national inspection sweep.** In November 2023 the Ministry of the Environment (環境省, MOE) had prefectures inspect about 1,400 breeder sites at once. About half (665 sites) broke the law ([MOE council paper 資料2](https://www.env.go.jp/council/content/i_10/000357242.pdf)). The main breaches were:
- **Ledger defects (帳簿の不備, Act Art. 21-5): 496 cases**, about 35% of the sites inspected.
- **Breeding-ledger defects (繁殖台帳の不備): 314 cases**, about 22%.
- Missing birth certificates for Caesarean births: 128 cases.
- Breaking the 8-week sale ban, for example by changing birth dates: 50 cases.

The follow-up survey (August 2025) shows the record problems are sticky. Of the 496 ledger cases, 384 were re-inspected and 92 were still not fixed. Of the 314 breeding-ledger cases, 225 were re-inspected and 79 were still not fixed. The 8-week cases were almost all fixed (44 of 45). MOE lists "lack of understanding" and "forgetting" among the reasons ([same paper](https://www.env.go.jp/council/content/i_10/000357242.pdf)). **So record-keeping, not cruelty, is the commonest breach. It is also the hardest one to fix by a one-off visit. That is exactly the job a simple app does.**

**Pressure flows down the trade chain.** In September 2024 MOE formally asked industry bodies that auction houses and pet shops check each puppy's birth date before buying, against teeth, weight and the Caesarean birth certificate ([same paper, p. 4](https://www.env.go.jp/council/content/i_10/000357242.pdf)). So shops and auctions now need clean breeder records. A breeder who can hand over a tidy per-animal record has a selling point.

**The report data is watched.** Asahi Shimbun and AERA added up the 定期報告 forms themselves. For 2014 they found about 750,000 dogs and cats sold or handed over and 23,181 deaths in the trade (3.08%). This was quoted in the Saitama assembly ([Saitama assembly record, 2016](https://www.pref.saitama.lg.jp/e1601/gikai-gaiyou/h2812/h080.html)). High death counts can trigger a post-mortem order (Act Art. 22-6). So the numbers in the report have consequences, and a tool that flags unusual death rates before filing is useful.

**Direct complaints are scarce.** No forum threads (Yahoo!知恵袋), videos or blog posts complaining about the ledger or report turned up in four searches (unverified that none exist). The pain case rests on inspection findings, not on voiced demand.

## Willingness to pay

What buyers already pay around this duty (all figures per business unless stated):

| Item | Price | Source | Note |
|---|---|---|---|
| Registration fee, per category | ¥15,000 (Aichi, Nagasaki); selling plus boarding = ¥30,000 (Hiroshima) | [Aichi](https://www.pref.aichi.jp/site/gyoute/75190.html); [Nagasaki](https://www.pref.nagasaki.jp/fs/4/6/7/8/_/_________________.pdf); [Hiroshima](https://www.pref.hiroshima.lg.jp/site/apc/contents-daiissyu.html) | Renewed every 5 years. |
| 行政書士 (administrative scrivener) fee to prepare a registration | ¥100,000-180,000 including fees | [鮎澤パートナーズ accountant column](https://ayusawa-partners.jp/column/pet-doubutsu-toriatsukai) | One firm's cost table; weak source (unverified as a market rate). |
| Yearly responsible-person training (動物取扱責任者研修) | ¥1,000 (Kanagawa), ¥1,050 (Shiga), ¥2,000 (Chiba City) per person | [Kanagawa 2025](https://www.pref.kanagawa.jp/osirase/1594/awc/dealers/kensyuu2025.html); [Shiga](https://www.pref.shiga.lg.jp/doubutsuhogo/tourokukyoka/335740.html); [Chiba City](https://www.city.chiba.jp/hokenfukushi/iryoeisei/seikatsueisei/dobutsuhogo/sekininsyakensyu.html) | Every site pays it every year. |
| Microchip registration | ¥400 online, ¥1,400 paper, per animal | [MOE chip page](https://www.env.go.jp/nature/dobutsu/aigo/pickup/chip.html) | A breeder selling 50 puppies a year pays about ¥20,000 in chip fees alone. |
| Puppy marketplace success fee | ¥15,000 per sale (ブリーダーズナビ, 2015) | [Makuake project page](https://www.makuake.com/project/breedersnavi/) | Breeders already pay per animal to sell online. Current fees of the biggest site (みんなのブリーダー) not found (unverified). |
| Generic cloud POS or booking | ¥0 to about ¥15,000 a month | [Square JP](https://squareup.com/jp/ja/solutions/pet-services); [Aurant](https://aurant-technologies.com/?p=27904) | Free tiers set a low anchor for small shops and salons. |
| Sole-trader accounting SaaS (freee, Money Forward) | about ¥980-1,280 a month on annual plans | [atsoho comparison, Jul 2026](https://atsoho.com/apps/compare/freee-kaikei-vs-mf-cloud-kakuteishinkoku) | The price breeders who file 確定申告 already know (third-party comparison; check official pages). |
| Foreign breeder software | about US$15 a month (BreederBuddy); some are free (Pawfolio) | [Capterra BreederBuddy](https://www.capterra.co.uk/software/1079350/BreederBuddy); [Pawfolio pricing](https://pawfoliobreeder.com/pricing) | English only; no Japanese forms. |
| Legal maximum fine for ledger or report breaches | ¥200,000 過料 | [e-Gov Act Art. 49](https://laws.e-gov.go.jp/law/348AC1000000105) | Rarely imposed (no case found). |
| Real cost of a bad inspection | An order, then suspension or cancellation of the registration, i.e. loss of the business | Act Arts. 19, 23 (see 01 file) | The real threat for a breeder whose income is puppies. |

**Reading.** These buyers do pay for things that let them keep trading: registration, training, chip fees and marketplace commissions. A puppy sells for roughly ¥100,000-300,000 (toy poodle range quoted on [Makuake](https://www.makuake.com/project/breedersnavi/)). So a tool at ¥1,000-3,000 a month is cheap next to one puppy. But nobody pays today for the ledger itself; the anchor is a free Excel sheet. And 84% of sites are individuals with about 10 animals. Willingness to pay will be decided by fear of the next inspection, not by the yearly report. It stays unproven until breeders are interviewed (unverified).

## Competitor table and discussion

Duty list used for the check (from the 01 file): A = per-animal ledger (13 items); B = annual report 様式第11の2 by 30 May; C = breeding ledger with lifetime litters and mating-age limits; D = staff-to-animal ratio check; E = microchip deadlines and change filings; F = face-to-face sale explanation record and signature; G = facility and animal check records; H = trade record; I = registration expiry, training and change-notice reminders.

| Alternative | Type | Covers | Price | Customers | Verdict |
|---|---|---|---|---|---|
| Prefecture Excel/Word templates (Tokyo, Saitama, Kyoto, Kobe, Ibaraki, Sendai and others) | Free state forms | A, B, C, G, H as blank sheets; B with a worked example | Free | Most of the market (my reading) | Main substitute. No totals from the ledger, no reminders, no checks, one sheet per form ([Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html); [Kyoto breeding ledger](https://www.pref.kyoto.jp/doubutsu/documents/05nisyucyoubo.pdf); [Kobe example](https://www.city.kobe.lg.jp/documents/15108/teikihoukoku~kisairei~.pdf)). |
| LoGo forms, email, post (filing routes) | Free state filing | B (filing only) | Free | Tokyo uses e-filing (LoGo); Chiba has its own e-filing service; Kumamoto has used LoGo since April 2023; Saitama and Shiga take email | Takes the numbers; does not produce them ([Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html); [Chiba](https://www.pref.chiba.lg.jp/eishi/pet/doubutsu/animal-business.html); [Kumamoto](https://www.pref.kumamoto.jp/soshiki/30/167649.html); [Saitama](https://www.pref.saitama.lg.jp/a0706/doubutu-touroku/teikihoukoku.html); [Shiga](https://www.pref.shiga.lg.jp/doubutsuhogo/tourokukyoka/343567.html)). |
| MOE microchip database (run by the Japan Veterinary Medical Association) | State portal | E (registration only) | ¥400 / ¥1,400 per animal | All dog and cat sellers by law | One animal at a time; blocks foreign access (my test, Oct 2026). No seller-side ledger, report or deadline list ([MOE chip page](https://www.env.go.jp/nature/dobutsu/aigo/pickup/chip.html)). |
| Generic POS and booking (Square, STORES, RESERVA, salon tools) | Japanese SaaS | Sales and bookings; none of A-I | ¥0-15,000 a month | Many shops and salons | Not a competitor for the duty; possible integration ([Square JP](https://squareup.com/jp/ja/solutions/pet-services); [RESERVA release](https://www.dreamnews.jp/press/0000135073); [STORES レジ](https://apps.apple.com/jp/app/stores-%E3%83%AC%E3%82%B8/id1559518799)). |
| kintone do-it-yourself builds (Aurant guide and plugins) | Low-code | Could cover A-I if built | kintone licence plus build cost (price not found) | Unknown | Possible for chains; too costly and complex for a home breeder ([Aurant kintone guide](https://aurant-technologies.com/blog/kintone-pet-shop-management/)). |
| Vet record systems (Vetect, anivet, ペットカルテ, ANELLAS and others) | Japanese vet SaaS | Vet records; chips implanted by vets | Not checked | Animal hospitals | Not aimed at breeders. A possible future entrant or partner ([Aurant guide](https://aurant-technologies.com/?p=27904)). |
| Puppy marketplaces (みんなのブリーダー, ブリーダーズナビ and others) | Japanese platforms | Listings and sales; no ledger features found | Success fees, e.g. ¥15,000 per sale (ブリーダーズナビ, 2015) | みんなのブリーダー claims over 300,000 matches by Feb 2024 | Biggest hidden risk: they hold breeders' sales data and could add a ledger. No such feature found ([Makuake](https://www.makuake.com/project/breedersnavi/); [PR, Feb 2024](https://resemom.jp/release/prtimes/20240206/110664.html); [JFTC 2018](https://www.jftc.go.jp/houdou/pressrelease/h30/may/180523.html)). |
| Pet auction houses (25 registered auction businesses; MOE surveyed 19 venues in 9 prefectures) | Trade intermediaries | Their own lot records; breeder-side ledger not found | Commission (not checked) | Most commercial breeders sell through them (unverified) | Could push a standard record to breeders after MOE's 2024 birth-date request. Partner or risk ([MOE council paper](https://www.env.go.jp/council/content/i_10/000357242.pdf); [Bunshun, 3 Apr 2024](https://bunshun.jp/articles/-/69941); [MOE R7 2_1_1](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_1.pdf)). |
| Foreign breeder apps (BreederHQ, Breeder Cloud Pro, BreederBuddy, BreedTracker, Husbandry.Pro, Pawfolio) | Foreign SaaS | Litters, health, buyers (partly A, C) | Free to about US$15+ a month | Western breeders | English only; no Japanese forms or rules ([G2 BreederHQ](https://www.g2.com/products/breederhq/discuss); [GetApp](https://www.getapp.com/sales-software/a/breeder-cloud-pro/); [Capterra](https://www.capterra.co.uk/software/1079350/BreederBuddy); [Pawfolio](https://pawfoliobreeder.com/pricing)). |
| "Pet management software" listed on jisaku.com (¥80,000-200,000 a year) | Claimed products | Claimed | ¥80,000-200,000 a year | — | Product names could not be confirmed and look invented. Ignore ([jisaku.com](https://jisaku.com/posts/retail-pet-shop-it-pc)). |
| Big chains' in-house systems | Private | Probably A, B, E | — | Large chains (count not found) | Not a target (unverified). |
| Japanese livestock breeding apps (e.g. 繁殖管理アドバイスシステム) | Japanese app | Cattle breeding only | — | Farmers | Wrong animal and wrong law ([App Store](https://apps.apple.com/us/app/%E7%B9%81%E6%AE%96%E7%AE%A1%E7%90%86%E3%82%A2%E3%83%89%E3%83%90%E3%82%A4%E3%82%B9%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0/id1468040052)). |

**Discussion.**
- **No Japanese product does A-I or even A + B.** This now holds across about 45 searches in this and earlier passes. They used Japanese, English and trade words (犬舎管理, 生体管理, 繁殖台帳, 定期報告 自動作成, kintone). Every search returned only prefecture templates and foreign apps. A gap this clean in a market of about 25,000 obliged sites is unusual. The likely reason is that the buyers are small, rural and not tech-savvy. That cuts both ways.
- **The free template is the real competitor.** It costs nothing, the inspector knows it, and a breeder with 10 dogs can live with it. The product must beat it on three things the template cannot do: (1) totals for the annual report straight from the ledger; (2) warnings for litter limits, age 6 and 7 rules, staff ratios and chip deadlines; (3) an "inspection mode" that shows 5 years of records in seconds.
- **The likely future competitor is a platform, not a start-up.** Marketplaces and auction houses already hold breeder and puppy data and are under MOE pressure about birth dates. One could add a ledger as a free extra. Best defence: get there first, and offer them an export or partnership.

## Channels

Ranked by how directly they reach dog and cat breeders, the core segment.

1. **Pet auction houses and ペットパーク流通協会 (Pet Park Distribution Association).** There are 25 registered auction businesses ([MOE R7 2_1_1](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_1.pdf)); MOE's 2023 survey covered 19 auction venues in nine prefectures ([Bunshun, 3 Apr 2024](https://bunshun.jp/articles/-/69941)). A search snippet said 15 of the 19 auction companies belong to this association (unverified; the article itself does not say so). In 2020 it ran a breeder survey that got 1,109 valid replies from members in all 47 prefectures ([digitalpr release, 25 Sep 2020](https://digitalpr.jp/r/41597)). Since September 2024 MOE has told auctions to check birth dates and Caesarean birth certificates before accepting puppies ([MOE council paper](https://www.env.go.jp/council/content/i_10/000357242.pdf)). A tool that turns a breeder's ledger into a clean per-puppy record for the auction solves their problem too. **Best single channel; partnership needed.**
2. **Puppy marketplaces.** みんなのブリーダー lists 3,854 breeders and 12,148 puppies, and claims 480,000 matches (front page, Oct 2026) ([min-breeder.com](https://www.min-breeder.com/)). It runs its own 35-item breeder screening with on-site audits when needed (same page). A "records kept in [tool]" badge or a data feed fits that screening. Breeders there are already online. **Second-best channel, and the biggest platform risk.**
3. **Yearly responsible-person training (動物取扱責任者研修).** All 67 registering authorities (47 prefectures and 20 designated cities, per [MOE R7 2_1_2](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_2.pdf)) must train every site's responsible person. Fees run ¥1,000-2,000 ([Kanagawa](https://www.pref.kanagawa.jp/osirase/1594/awc/dealers/kensyuu2025.html); [Chiba City](https://www.city.chiba.jp/hokenfukushi/iryoeisei/seikatsueisei/dobutsuhogo/sekininsyakensyu.html)). It reaches every buyer once a year. Public bodies are unlikely to endorse a private product, but a free "how to fill the report" guide could be offered (unverified).
4. **Spring search traffic.** Every search in this pass for the ledger or report returned prefecture pages, not vendors. A free page that turns an Excel ledger into 様式第11の2 totals, published before 1 April, could catch the yearly search peak. Search volume not measured (unverified).
5. **Industry bodies.** 犬猫適正飼養推進協議会 (founded 1 March 2016) promotes breeders' self-inspection, work records and seminars. Its listed related bodies include ペットパーク流通協会, 全国ペット協会, JKC, the Japan Veterinary Medical Association and 中央ケネル事業協同組合連合 ([MOE material, via search snippet](https://www.env.go.jp/nature/dobutsu/aigo/2_data/tekisei/h29_05/mat01_01_3.pdf)). 全国ペット協会 runs the 家庭動物管理士 qualification, which counts toward responsible-person eligibility ([Tokyo qualification list](https://www.hokeniryo.metro.tokyo.lg.jp/documents/d/hokeniryo/2026-08-26-120928-538)). Member counts were not found.
6. **Vets.** Vets implant the chips, and the chip database is run by the Japan Veterinary Medical Association (seen on its access page, Oct 2026). Vet record vendors (Vetect, anivet, ペットカルテ and others; [Aurant](https://aurant-technologies.com/?p=27904)) could resell or refer.
7. **Trade show.** Interpets Tokyo ran 2-5 April 2026 at Tokyo Big Sight, with 600+ exhibitors from 13 countries ([PR via netshop.impress](https://netshop.impress.co.jp/index%2Ephp/r/prtimes/items/000000099.000039004)). It falls in the first week of the report window.
8. **Public registers for direct mail.** Some authorities publish registers with names and addresses (Fukuoka Pref., Kagoshima City; see table). Postal mail to 84% individuals needs care under the personal information law (unverified).

## Regional expansion

| Country | Duty | Buyers | Fit |
|---|---|---|---|
| **Taiwan** | 特定寵物業管理辦法: sellers keep a sales record for 3 years. Breeders and sellers report chip use every quarter (by end of January, April, July and October). Breeding rules: mate from age 1; at most 3 litters in 2 years and 7 in a lifetime; sterilise after 7 unless declared ([Taipei law database text](https://laws.gov.taipei/Law/LawSearch/LawArticleContent/FL014743), via search snippet). Taichung publishes a daily in/out count sheet ([Taichung form](https://www.animal.taichung.gov.tw/media/1275776/飼養管理所需文件-全.pdf)). | My count of the Ministry of Agriculture open register ([data.gov.tw 97070](https://data.gov.tw/dataset/97070)): 5,952 records, 3,733 with a licence valid on 10 Oct 2026. Of these 1,845 breed, 2,409 sell and 3,217 board (combined licences overlap). About 13% have a company name. | Best second market. Same data model (per-animal ledger, litter limits, periodic counts), and quarterly reports mean more frequent pain. Small (about 2,400 breeders and sellers) and needs Traditional Chinese. |
| **South Korea** | Animal producers, importers and sellers report each month's trades (date, kind and number of animals, buyer or seller) to the local government by the 10th of the next month, and keep them 2 years. This was in the January 2023 draft rules ([DailyVet, 27 Jan 2023](https://www.dailyvet.co.kr/?p=179481)); final form and filing system unverified. Parent dogs at breeding sites must be registered from 3 June 2026 ([MAFRA](https://www.mafra.go.kr/bbs/home/792/574327/artclView.do), via search snippet). | 2,010 producers (생산업), 3,114 sellers (판매업), 604 exhibitors and 5,603 boarding businesses in 2024; 23,565 pet businesses in all ([DailyVet, 3 Jul 2025](https://www.dailyvet.co.kr/?p=250744); [MAFRA](https://www.mafra.go.kr/bbs/home/792/574273/artclView.do)). | Monthly duty is a stronger pull, but the state system may already take the data. Needs Korean and a separate check. Third choice. |

Other countries were not checked in this pass.

## Implications for positioning and pricing

- **Do not sell "the annual report".** Sell "inspection-ready records for dog and cat breeders": the ledger, breeding ledger, chip deadlines and staff ratio, with the 30 May report as a free by-product. The 2023 sweep found ledger defects at about 35% of breeders inspected, and breeding-ledger defects at 22% ([MOE](https://www.env.go.jp/council/content/i_10/000357242.pdf)). That is the message.
- **Beachhead: the 13,347 dog and cat breeders** ([MOE R7 2_1_1](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_1.pdf)). Start with the online ones (about 3,854 on みんなのブリーダー) and auction suppliers. Pet shops (about 3,400 non-breeding dog and cat sellers) come second, through a multi-site plan. Boarding and training sites (about 37,000 registrations) have lighter duties and low pain; leave them out of version 1.
- **Price against sole-trader software, not against POS.** Breeders who file 確定申告 already see accounting apps at about ¥980-1,280 a month on annual plans ([atsoho comparison](https://atsoho.com/apps/compare/freee-kaikei-vs-mf-cloud-kakuteishinkoku)). Suggested tiers (to test):
  - Free: up to 5 animals, plus a free annual-report calculator as a lead magnet.
  - Breeder: ¥1,480 a month or ¥14,800 a year; unlimited dogs and cats, breeding ledger, chip and litter warnings, inspection mode.
  - Shop or multi-site: ¥4,980 a month per site.
  - Optional ¥4,980 one-off "report season" pack for April-May only.
- **Year-3 sizing (my estimate, unverified shares).**

| Case | Breeders | Shops and others | Revenue a year |
|---|---|---|---|
| Low | 1% of 13,347 = 133 × ¥14,800 = ¥2.0M | 100 × ¥14,800 = ¥1.5M | **≈ ¥3.5M** |
| Base | 4% = 534 × ¥14,800 = ¥7.9M | 250 × ¥14,800 = ¥3.7M, plus 40 shop sites × ¥59,760 = ¥2.4M | **≈ ¥14M** |
| High (marketplace or auction partner) | 12% = 1,602 × ¥14,800 = ¥23.7M | ¥8M | **≈ ¥32M** |

  The base case is a side business of roughly US$90,000 a year (at about ¥150 per US$, unverified rate). It sits below the main report's ¥21M because boarding sites are excluded. The high case needs a channel partner.
- **Build for a phone, not a desk.** 84% of sites are individuals with about 10 animals (Fukuoka count). Import from the prefecture Excel templates on day 1.
- **Make the platforms friends.** Offer marketplaces and auctions a free export of a breeder's verified per-puppy record (birth date, dam, litter number, chip). That turns the most likely competitor into the channel.

## Open questions

- Will breeders pay ¥1,000-1,500 a month? Interview 20 breeders (via auctions and みんなのブリーダー) before building more than the MVP.
- What do breeders pay みんなのブリーダー today, and would it partner or build its own ledger? Its breeder fee page was not found.
- Do auction houses already collect per-puppy data from breeders electronically, and in what format?
- How are breeders spread by size nationally? Only Fukuoka and Kagoshima City were counted here.
- Will prefectures let a vendor hand out material at the yearly training?
- Has Korea's monthly trade report come into force, and through which system? How does Taiwan collect its quarterly chip report?
- Is MOE planning a traceability system that would take the per-puppy record from breeders (state tool creep)? No 2026 proposals were found in one search.
- Search volume for 定期報告 and 帳簿 keywords in April and May (not measured).

## Sources

Primary and official:
- https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_1.pdf
- https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_2.pdf
- https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_3.pdf
- https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_7.pdf
- https://www.env.go.jp/council/content/i_10/000357242.pdf
- https://www.env.go.jp/press/press_04322.html
- https://www.env.go.jp/nature/dobutsu/aigo/pickup/chip.html
- https://www.env.go.jp/nature/dobutsu/aigo/2_data/tekisei/h29_05/mat01_01_3.pdf
- https://laws.e-gov.go.jp/law/348AC1000000105
- https://www.pref.fukuoka.lg.jp/contents/animalhandlingbusiness-type1-inspection.html
- https://www.city.kagoshima.lg.jp/kenkofukushi/hokenjo/seiei-jueki/kurashi/dobutsu/toriatsukaigyo/index.html
- https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html
- https://www.hokeniryo.metro.tokyo.lg.jp/documents/d/hokeniryo/2026-08-26-120928-538
- https://www.pref.saitama.lg.jp/a0706/doubutu-touroku/teikihoukoku.html
- https://www.pref.saitama.lg.jp/e1601/gikai-gaiyou/h2812/h080.html
- https://www.pref.shiga.lg.jp/doubutsuhogo/tourokukyoka/343567.html
- https://www.pref.shiga.lg.jp/doubutsuhogo/tourokukyoka/335740.html
- https://www.pref.chiba.lg.jp/eishi/pet/doubutsu/animal-business.html
- https://www.pref.kumamoto.jp/soshiki/30/167649.html
- https://www.city.kobe.lg.jp/documents/15108/teikihoukoku~kisairei~.pdf
- https://www.pref.kyoto.jp/doubutsu/documents/05nisyucyoubo.pdf
- https://www.pref.aichi.jp/site/gyoute/75190.html
- https://www.pref.nagasaki.jp/fs/4/6/7/8/_/_________________.pdf
- https://www.pref.hiroshima.lg.jp/site/apc/contents-daiissyu.html
- https://www.pref.kanagawa.jp/osirase/1594/awc/dealers/kensyuu2025.html
- https://www.city.chiba.jp/hokenfukushi/iryoeisei/seikatsueisei/dobutsuhogo/sekininsyakensyu.html
- https://www.jftc.go.jp/houdou/pressrelease/h30/may/180523.html
- https://data.gov.tw/dataset/97070 (data file: https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=fNT9RMo8PQRO&IsTransData=1)
- https://laws.gov.taipei/Law/LawSearch/LawArticleContent/FL014743
- https://www.animal.taichung.gov.tw/media/1275776/飼養管理所需文件-全.pdf
- https://www.mafra.go.kr/bbs/home/792/574273/artclView.do
- https://www.mafra.go.kr/bbs/home/792/574327/artclView.do

Industry, press and vendors:
- https://digitalpr.jp/r/41597
- https://www.min-breeder.com/
- https://resemom.jp/release/prtimes/20240206/110664.html
- https://www.makuake.com/project/breedersnavi/
- https://bunshun.jp/articles/-/69941
- https://netshop.impress.co.jp/index%2Ephp/r/prtimes/items/000000099.000039004
- https://ayusawa-partners.jp/column/pet-doubutsu-toriatsukai
- https://aurant-technologies.com/?p=27904
- https://aurant-technologies.com/blog/kintone-pet-shop-management/
- https://jisaku.com/posts/retail-pet-shop-it-pc
- https://squareup.com/jp/ja/solutions/pet-services
- https://www.dreamnews.jp/press/0000135073
- https://apps.apple.com/jp/app/stores-%E3%83%AC%E3%82%B8/id1559518799
- https://apps.apple.com/us/app/%E7%B9%81%E6%AE%96%E7%AE%A1%E7%90%86%E3%82%A2%E3%83%89%E3%83%90%E3%82%A4%E3%82%B9%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0/id1468040052
- https://atsoho.com/apps/compare/freee-kaikei-vs-mf-cloud-kakuteishinkoku
- https://www.g2.com/products/breederhq/discuss
- https://www.getapp.com/sales-software/a/breeder-cloud-pro/
- https://www.capterra.co.uk/software/1079350/BreederBuddy
- https://pawfoliobreeder.com/pricing
- https://www.dailyvet.co.kr/?p=179481
- https://www.dailyvet.co.kr/?p=250744
