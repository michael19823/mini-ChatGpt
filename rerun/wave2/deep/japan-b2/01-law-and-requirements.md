# Japan: 動物取扱業 ledger, records and annual report law, turned into product requirements

Status: complete as of 2026-10-10 (open questions at the end). Primary texts were read in full from e-Gov on 2026-10-10. MOE statistics are the 令和7年度版 (registrations at 1 April 2025, enforcement in FY2024).

Short names used below:
- "Act" = 動物の愛護及び管理に関する法律 (Act No. 105 of 1973), current text on e-Gov, last amended by Act No. 30 of 5 June 2026 ([e-Gov Act](https://laws.e-gov.go.jp/law/348AC1000000105)).
- "Order" = 動物の愛護及び管理に関する法律施行令 (Cabinet Order No. 107 of 1975) ([e-Gov Order](https://laws.e-gov.go.jp/law/350CO0000000107)).
- "Rules" = 動物の愛護及び管理に関する法律施行規則 (MOE Ordinance No. 1 of 2006) ([e-Gov Rules](https://laws.e-gov.go.jp/law/418M60001000001)).
- "Standards" = 第一種動物取扱業者及び第二種動物取扱業者が取り扱う動物の管理の方法等の基準を定める省令 (MOE Ordinance No. 7 of 2021, the 飼養管理基準省令, "基準省令") ([e-Gov Standards](https://laws.e-gov.go.jp/law/503M60001000007)).
- MOE = Ministry of the Environment (環境省). "Prefecture" below means the prefectural governor or, in the 20 designated cities, the mayor (Act Art. 10(1)).

## Summary

- **The duty is national, current and wider than the annual report.** The core is Act Art. 21-5 (in its current form since 1 June 2020) with Rules Arts. 10-2 and 10-3: sale, rental, exhibition and 譲受飼養 registrants keep a 13-item animal ledger (per animal for dogs and cats, per breed for others) for 5 years, and file 様式第十一の二 with monthly counts by 30 May. The Standards ordinance (in force 1 June 2021; breeding limits from 1 June 2022; staff ratios fully from 1 June 2024) adds a daily check log, a breeding log, a trade log, health and caesarean certificates, staff ratios and sale-time documents, all kept 5 years ([e-Gov Act](https://laws.e-gov.go.jp/law/348AC1000000105); [e-Gov Rules](https://laws.e-gov.go.jp/law/418M60001000001); [e-Gov Standards](https://laws.e-gov.go.jp/law/503M60001000007)).
- **Who.** 28,857 registrations carry the ledger and report (sale 22,404; exhibition 4,541; rental 1,622; 譲受飼養 290), of which 16,789 are dog and cat sellers and 13,347 breeders. Every one of the 51,198 type-1 sites has at least the daily check log ([MOE R7 2_1_1](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_1.pdf)). There is no size threshold.
- **Records are where breaches are found.** In a 2023 national sweep, about half of ~1,400 breeder sites broke the law; ledger deficiencies (496) and breeding-log deficiencies (314) were the top two breaches. Two years later about a quarter of re-inspected ledger cases were still not fixed ([MOE 資料2](https://www.env.go.jp/council/content/i_10/000357242.pdf)).
- **Inspections are frequent, sanctions rare.** 23,914 inspections at 20,215 sites in FY2024, but only 14 recommendations, 0 orders and 2 cancellations ([MOE R7 2_1_3](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_3.pdf)). The legal maximum for ledger or report breaches is a ¥200,000 過料 (Act 49); no imposed 過料 was found.
- **Filing is fragmented and manual.** One national form, filed with 67+ authorities (prefectures, designated cities and some core cities) by LoGo web form, prefectural e-application, e-mail, fax, post or counter. No API anywhere. Software can only compute the numbers and produce the Excel/PDF.
- **One correction to the earlier report.** The MOE microchip system does have a bulk CSV channel (4 file types, manual v2.7 of July 2026), so chip registration can be fed from the product (column spec unverified, the PDF was blocked from here).
- **Upcoming.** New keeping standards for other mammals (rabbits, hamsters, guinea pigs and others): council report July 2026, promulgation expected autumn 2026, in force about spring 2027. They do not change the ledger or report, but add display-hour, transport-watch and contact rules that a records tool can track. No Act amendment bill was found (unverified).
- **What this means for the product.** The legal spec below has 54 testable requirements. The core that the law forces and nobody automates: the 13-item ledger with a 5-year audit trail, the report computed from it with the form's own reconciliation, breeding-limit checks from lifetime litter counts, the daily check log, chip deadlines plus CSV export, and a one-click inspection pack.

## Who is obliged

**Type-1 animal businesses (第一種動物取扱業者).** Anyone who handles mammals, birds or reptiles as a business must register with the prefecture or designated city where the site is (Act Art. 10(1)). Livestock farming and lab animals are outside the Act's business rules (Art. 10(1)). There are seven registration categories: sale (incl. brokering), boarding, rental, training, exhibition (incl. petting/contact), auction brokering (競りあっせん) and 譲受飼養 (taking in animals for a fee paid by the giver) (Act Art. 10(1); Order Art. 1).

**The ledger and annual report duty (Act Art. 21-5).** It applies to "動物販売業者等": registrants for sale, rental, exhibition and 譲受飼養 (Act Art. 21-5(1); Order Art. 2). Boarding, training and auction-only registrants are not covered by Art. 21-5. They still have the record duties in the Standards (see table).

**Counts (MOE statistics, as of 1 April 2025).** There are 51,198 type-1 establishments. By category (one site can hold several): sale 22,404, of which dog and cat sellers (犬猫等販売業) 16,789, of which breeders 13,347; boarding 32,576; rental 1,622; training 5,234; exhibition 4,541; auction 25; 譲受飼養 290 ([MOE 2_1_1, 令和7年度版](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_1.pdf)).
- Registrations that carry the Art. 21-5 ledger and report: 22,404 + 1,622 + 4,541 + 290 = 28,857 (counted with overlap; same source).
- Distinct establishments with the duty: fewer, because one site often holds sale and exhibition (unverified, no national figure).

**Dog and cat sellers (犬猫等販売業者).** These are type-1 sellers of dogs and cats (Act Art. 10(3), 14(3)). They carry extra duties: the health and safety plan, vet links, lifelong care, the 56-day sale ban for breeders, possible post-mortem orders, and microchips (Act Arts. 22-2 to 22-6, 39-2, 39-5, 39-6).

**Second-type handlers (第二種動物取扱業者).** These are non-commercial handlers (shelters, rescue groups) with a facility and at least 10 dogs/cats-size animals, 3 large animals or 50 small ones (Act Art. 24-2-2; Rules Art. 10-5). They file a notice, not a registration. If they rehome dogs or cats as a business, they must keep the per-animal ledger (Act Art. 24-4(2); Rules Art. 10-10). They do not file the annual report. Count: 2,224 notified establishments, 1,844 doing rehoming (譲渡し) ([MOE 2_1_1](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_1.pdf)).

**Thresholds and exemptions.** There is no size threshold for type-1. A hobby breeder who sells repeatedly needs registration (Act Art. 10(1) "業として"; how "業" is judged is set by MOE guidance, not checked here) (unverified). Dogs and cats are recorded one by one. All other covered animals are recorded by breed (品種等) (Rules Art. 10-2(2)). Amphibians, fish and insects are outside the Act's business rules (Act Art. 10(1)); MOE is told to study amphibians (2019 amendment, supplementary provision Art. 8(2)).

## Duty-by-duty table

Penalty key (Act Arts. 46-50): 過料 = administrative fine imposed through a court, not a criminal record. "Order route" = the prefecture may first recommend (勧告), then order (命令) under Art. 23; breaking the order is a crime with a fine up to ¥1,000,000 (Art. 46(4)). Any breach of the Act or its ordinances is also a ground to cancel the registration or suspend business for up to 6 months (Art. 19(1)(6)).

| # | Duty | Legal basis | What must exist or be done | Frequency / deadline | Evidence an inspector asks for | Penalty |
|---|---|---|---|---|---|---|
| 1 | Animal ledger (動物に関する帳簿) | Act 21-5(1); Rules 10-2 | A ledger with 13 items: (1) breed name; (2) breeder's name and registration no. or address (exporter if imported and breeder unknown; giver if transferred; catcher and place if wild-caught); (3) date of birth (or estimated date and import date); (4) date acquired; (5) seller/giver's name and reg. no. or address; (6) date sold or handed over; (7) buyer/recipient's name and reg. no. or address; (8) how it was checked that the buyer/recipient is not breaking animal trade laws; (9) sellers: name of the staff member who sold; (10) sellers: status of the Art. 21-4 face-to-face explanation and the customer's signed confirmation; (11) renters: status of information given to the hirer, plus purpose and period of rental; (12) date of death while held; (13) cause of death. Per animal for dogs and cats; per breed for others. | Enter as events happen. Keep 5 years from the date of entry. Electronic storage allowed. Try to keep trade slips and post-mortem certificates with it. | The ledger itself, open on request. | 過料 up to ¥200,000 for no ledger, missing or false entries, or not keeping it (Act 49(2)). |
| 2 | Annual report (定期報告, 様式第十一の二) | Act 21-5(2); Rules 10-3 | Report, by kind of animal: number held on 1 April; number newly acquired, by month; number sold or handed over, and number dead, by month; number held on 31 March. | Period 1 April to 31 March. Due within 60 days after the period ends, so by 30 May. A new registrant's first period runs from the registration date to 31 March. Filed with the prefecture of the site. | Copy of the filed report; the ledger it was built from. | 過料 up to ¥200,000 for not filing or filing falsely (Act 49(1)). |
| 3 | Pre-sale information and face-to-face explanation | Act 21-4; Rules 8-2; Standards 2(7)ヘ | Before selling a mammal, bird or reptile to a consumer: show the animal in person at the site, and explain face-to-face in writing or electronic form 18 items (breed; adult size; lifespan; housing; feeding; exercise; zoonoses and common diseases; neutering method and cost; other breeding control; legal rules such as no abandonment; sex; date of birth; neutering status; breeder name and reg. no.; owner if not the seller; medical and vaccination history; hereditary disease in parents and litter; other). Get the customer's signature or similar confirmation. | Each sale. | Explanation sheets and signed confirmations; ledger item 10. | Order route (Act 23(2), 23(4), 46(4)). |
| 4 | Business-to-business sale information | Standards 2(7)ホ | When selling to another registered business: hand over a document (paper or electronic) with the same 18 items and get a receipt from the buyer. | Each B2B sale. | Copies and receipts. | Order route (Act 23(1)). |
| 5 | Facility cleaning and maintenance log | Standards 2(1)イ(1)-(3) | Clean and disinfect regularly; patrol and check the facility at least once a day; keep a log of cleaning, disinfection and checks. | Daily. Keep 5 years. | The log (台帳). | Order route (Act 23(1)). |
| 6 | Daily animal count and condition log | Standards 2(7)ム | Patrol at least once a day, check number and condition of animals, and keep a log. | Daily. Keep 5 years. | The log. | Order route. |
| 7 | Trade record (取引状況記録台帳) | Standards 2(7)エ, リ | Log purchases, sales, auctions and other trades, including buyer details. Not needed if the Art. 21-5 ledger is kept. Before trading, ask the other party whether it breaks animal trade laws; for dangerous animals (特定動物) check its permit. | Each trade. Keep 5 years. | The log; how compliance of the counterparty was checked. | Order route. |
| 8 | Breeding record (繁殖実施状況記録台帳) | Standards 2(6)ハ, ニ | Sellers, renters and exhibitors who breed must log breeding. When passing a dog or cat to another seller, renter or exhibitor, hand over a copy of the breeding log with it. | Each mating and birth. Keep 5 years. | The log; copies handed over. | Order route. |
| 9 | Breeding limits for dogs and cats | Standards 2(6)ホ, ヘ (in force 1 June 2022) | Dogs: at most 6 litters in a lifetime; female mated only up to age 6, or up to 7 if proof shows fewer than 6 litters at age 7. Cats: mated only up to age 6, or up to 7 if proof shows fewer than 10 litters at age 7. | Each mating. | Breeding log as proof of lifetime litter count. | Order route. |
| 10 | Caesarean records | Standards 2(6)チ | A caesarean must be done by a vet. Keep the birth certificate and the vet's certificate on the dam's condition and future fitness to breed. | Each caesarean. Keep 5 years. | Certificates. | Order route. |
| 11 | Annual vet health check | Standards 2(4)ハ, 2(6)リ | Every dog or cat kept for 1 year or more needs a vet health check at least once a year, including fitness to breed for breeding animals. Breeding must follow the vet's findings. | Yearly per animal. Keep certificate 5 years. | Health certificates. | Order route. |
| 12 | Staff-to-animal ratio | Standards 2(2); Rules 3(1)(8) | Per full-time-equivalent keeper (part-timers counted by hours, rounded down): at most 20 dogs (15 breeding) or 30 cats (25 breeding). Puppies/kittens living with their mother and retired breeders at the site are not counted. A fixed table (別表) sets the limits when dogs and cats are kept together. Phase-in ended 31 May 2024 for existing registrants. | Ongoing. | Staff list, hours, head counts. | Order route; also a registration-refusal ground (Rules 3(1)(8)). |
| 13 | Housing standards for dogs and cats | Standards 2(1)ロ(3), 2(3), 2(7)ソ, ツ | Cage size formulas (dog: length ≥2× body length, width ≥1.5×, height ≥2× height at withers; cat: height ≥3× and a shelf); thermometer and hygrometer; natural day-length light; 3 hours a day in the exercise area if the separate-exercise model is used; daily contact. | Ongoing. | On-site check. | Order route. |
| 14 | Sale age limit | Act 22-5; Act original supplementary provision (2) | A breeder-seller may not hand over or show for sale a dog or cat it bred until 56 days after birth have passed; MOE's checklist reads this as "57 days of age or more" ([MOE checklist p.7](https://www.env.go.jp/nature/dobutsu/aigo/2_data/pamph/r0305a/02.pdf)). For 6 native Japanese dog breeds designated as natural monuments, sold by a breeder directly to a consumer: 49 days (MOE: "50 days of age or more"). | Each sale. | Ledger dates of birth and handover. | Order route (Act 23(2)). |
| 15 | 2-day observation after transport | Standards 2(5)ロ(10), 2(7)ニ | Sellers and renters must watch dogs and cats for at least 2 days after transport, and only sell or rent animals with no visible health problem after 2 days of observation. | Each intake/sale. | Observation records (implied; no explicit log duty) (my reading). | Order route. |
| 16 | Display and night rules | Standards 2(5)イ, 2(7)ネ, ノ | Show dogs and cats only 8:00-20:00 (adult cats over 1 year: to 22:00 under conditions). No handover or contact with customers at night. Rest breaks if shown more than 6 hours. | Daily. | Opening hours; display logs (implied). | Order route. |
| 17 | Vaccination and treatment certificates to buyer | Standards 2(4)チ | Give the buyer vet certificates for treatment and vaccines given while held, plus any received from the supplier. | Each sale. | Copies (my reading). | Order route. |
| 18 | Animal information display in shop | Standards 2(7)フ | For every animal on sale: breed, adult size, sex, date of birth, place of origin, owner (if not seller), shown in writing or on screen. | Ongoing. | Display cards or screens. | Order route. |
| 19 | Advertising content | Standards 2(7)ケ | Every ad must show: name, site name and address, category, registration number, registration date and expiry, and the responsible person's name. No misleading content. | Each ad. | Ads, websites. | Order route. |
| 20 | Registration sign (標識) | Act 18; Rules 7 | Sign in form 様式第九 at the customer entrance with name, site, category, registration no., registration date and expiry, responsible person. Badge (様式第十) for staff working off-site. | Ongoing; update on change. | The sign. | 過料 up to ¥100,000 (Act 50). |
| 21 | Responsible person and training | Act 22(1), (3); Rules 9, 10 | One full-time responsible person per site who meets the qualification rules. The business must send every responsible person to the training held by its prefecture and pass on the training contents to all staff (Standards 2(7)コ). Frequency is set by each prefecture; the Rules no longer fix it (my reading of current Rules 10). | Per the authority's notice. Frequency is set locally: e.g. Iwate moved businesses to at least once every 2 years in FY2024; many authorities run it online ([MOE R7 2_1_4](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_4.pdf)). | Attendance certificates; staff briefing records. | Order route (Act 23(2)). |
| 22 | Registration renewal | Act 13; Rules 4 | Registration lapses after 5 years. Apply in the 2 months before expiry. | Every 5 years. | Registration certificate. | Lapse means operating unregistered: fine up to ¥1,000,000 (Act 46(1)). |
| 23 | Change notices | Act 14; Rules 5 | Advance notice for changes to business methods, new facility or starting dog/cat sales. Within 30 days for other changes (name, address, responsible person, animal kinds and numbers, facility, health and safety plan). | Event-driven. | Copies. | Fine up to ¥300,000 (Act 47(1)). |
| 24 | Closure notice | Act 16; Rules 6 | Notify within 30 days of closure, death, merger or dissolution; return the certificate. | Event-driven. | — | 過料 up to ¥200,000 (Act 49(1)). |
| 25 | Dog and cat health and safety plan | Act 10(3), 22-2; Rules 2-2 | Plan for health of young animals, vet links, and what happens to animals that can no longer be sold. The business must follow it. | Filed at registration; change within 30 days. | The plan. | Order route; cancellation ground (Act 19(1)(4)). |
| 26 | Death investigation order | Act 22-6; Rules 10-4 | If dog/cat deaths look high, the prefecture can order a period during which every death needs a vet post-mortem, and all certificates must be filed within 30 days after the period. | On order. | Certificates. | Fine up to ¥300,000 (Act 47(2)). |
| 27 | Microchip fitting | Act 39-2(1); Standards 2(7)ア | Fit a chip to every dog or cat acquired, within 30 days of acquiring it (or 30 days after it reaches 90 days of age), or before handing it on if earlier. | Each animal. | Chip number; vet's fitting certificate (Act 39-3). | No direct penalty; order route via Standards 2(7)ア (my reading). |
| 28 | Microchip registration and change | Act 39-5, 39-6; Order Art. 5 | Register the chip with the MOE database within 30 days of fitting (or of acquiring an unregistered chipped animal), or before handover if earlier. On acquiring a registered animal, register the change of owner within the same limits. Report changes in details within 30 days. Hand the registration certificate over with the animal. Fees: ¥400 online, ¥1,400 on paper, per animal. | Each animal. | Registration certificates; chip number in ledger (my reading). | As above. |
| 29 | Rehoming ledger for second-type handlers | Act 24-4(2); Rules 10-10; Standards 3(7)ヰ | Per-animal ledger for dogs and cats rehomed (most of the 13 items). All second-type handlers keep a log of animals in and out (acquired, rehomed, bred, died), 5 years, unless they keep the dog/cat ledger. | Ongoing. Keep 5 years. | Ledger. | 過料 up to ¥200,000 (Act 49(2)). |
| 30 | Answer report requests and inspections | Act 24 | The prefecture may ask for reports and inspect sites, facilities and "other items". | On request. | All of the above. | Fine up to ¥300,000 for refusing, obstructing or false reports (Act 47(3)). |

Sources for the table: Act ([e-Gov](https://laws.e-gov.go.jp/law/348AC1000000105)); Order ([e-Gov](https://laws.e-gov.go.jp/law/350CO0000000107)); Rules ([e-Gov](https://laws.e-gov.go.jp/law/418M60001000001)); Standards ([e-Gov](https://laws.e-gov.go.jp/law/503M60001000007)).

## Filing channels and formats

**The annual report (定期報告).**
- **Form.** 様式第十一の二 (動物販売業者等定期報告届出書), set by the national Rules, A4 ([e-Gov Rules](https://laws.e-gov.go.jp/law/418M60001000001); [Saitama guide p.14-15](https://www.pref.saitama.lg.jp/documents/281787/doutoriminasamahe260831.pdf)). Fields:
  1. Business site name; 2. site address; 3. registration date; 4. registration number.
  5. Animals held at the start of the year: dogs (頭), cats (頭), other mammals (頭), birds (羽), reptiles (頭).
  6. New animals acquired, by month April to March, by the same 5 kinds.
  7. Animals sold or handed over, by month, by 5 kinds.
  8. Animals that died, by month, by 5 kinds.
  9. Animals held at year end, by 5 kinds.
  10. Breeds (品種等) included in the non-dog/cat kinds.
  11. Remarks (name and phone of the clerk if not the filer).
  - Header: date, addressee, filer name (for a company, name and representative), address, phone.
  - Form notes: a mid-year registrant reports the count at registration in item 5 and monthly counts from registration in items 6-8 (same sources).
  - Counting rules from Aomori's filled-in example: item 6 counts animals newly bought **or born**, excluding stillbirths; item 7 counts sales plus other transfers, moves to another branch of the same chain, and animals retired from breeding (or from rental or exhibition); item 8 counts deaths while kept, excluding stillbirths; and the form checks 5 + 6 − 7 − 8 = 9 ([Aomori 記載例](https://www.pref.aomori.lg.jp/soshiki/kenko/dobutu/files/20210108kisaireiteikihoukoku.pdf)). Whether a retired breeder that stays on site as a pet counts in item 7 is not clear from the example (unverified).
- **Period and deadline.** 1 April to 31 March. File within 60 days after the period ends, so by 30 May. A new registrant's first period runs from the registration date to 31 March (Rules 10-3(1)-(3)). Monthly totals are mandatory for items 6-8 (Rules 10-3(4)).
- **One report per registration.** Tokyo asks for a separate file per registered category (sale, rental, exhibition, 譲受飼養), because each category has its own registration number ([Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html)). A site that sells and exhibits therefore files two reports.
- **Where.** The prefecture or designated city where the site is (Rules 10-3(1)). In practice the local health centre or animal welfare centre. Saitama's form is addressed to the health centre chief, e.g. 埼玉県狭山保健所長 ([Saitama guide p.14](https://www.pref.saitama.lg.jp/documents/281787/doutoriminasamahe260831.pdf)).
- **Channels found (2025-2026):**

| Authority | Channels | Source |
|---|---|---|
| Tokyo | LoGo form (one link for the 23 wards and islands, one for Tama), post, counter. Excel upload per category. | [Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html) |
| Saitama Prefecture | To the local health centre; e-mail accepted ("メール可"); due 30 May. LoGo e-filing was reported in the earlier pass but not seen on this page (unverified). Saitama City and the core cities Kawagoe, Kawaguchi and Koshigaya take reports for their own areas. | [Saitama](https://www.pref.saitama.lg.jp/a0706/doubutu-touroku/teikihoukoku.html); [Saitama 朝霞保健所](https://www.pref.saitama.lg.jp/b0702/doubutu-gaityu/teikihoukoku.html) |
| Chiba | ちば電子申請サービス (procedure "動物販売業者等定期報告届出書"), or paper | [Chiba](https://www.pref.chiba.lg.jp/eishi/pet/doubutsu/animal-business.html) |
| Kumamoto Prefecture | LoGo form, period 1 April to 30 May 2026 | [Kumamoto](https://www.pref.kumamoto.jp/soshiki/30/167649.html) |
| Sendai City | Counter, post or e-mail; FY2025 report due 30 May 2026 | [Sendai](https://www.city.sendai.jp/dobutsu/oshirase/r7_teikihoukoku.html) |
| Hiroshima City | Post, fax or e-mail | [Hiroshima City](https://www.city.hiroshima.lg.jp/living/pet-doubutsu/1021301/1026247/1023072.html) |

- **No national e-filing and no API.** No authority was found that takes a machine-readable upload other than an Excel file attached to a web form (my reading of the sources above). LoGo forms are web forms. Software can only prepare the numbers and the Excel/PDF, then the user submits.

**The ledgers and logs.** No filing. They stay at the business and are shown on inspection. The animal ledger has no set form; MOE and prefectures give reference forms only ([Saitama guide p.3-4](https://www.pref.saitama.lg.jp/documents/281787/doutoriminasamahe260831.pdf)). Electronic storage is allowed (Rules 10-2(4)) if it can be shown on request ([Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html)). The reference forms in use:
- Animal ledger: 都参考様式1 (ledger), 2 (extra sales), 3 (extra rentals), 4 (deaths), with a filled-in example ([Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html)). Tokyo suggests separate monthly sheets for mammals, birds and reptiles to make the report counts easier (same source).
- 参考様式第9 facility and animal check log; 参考様式第10 breeding log; 参考様式第11 trade log (national reference forms reproduced by Saitama, pp. 8-10) ([Saitama guide](https://www.pref.saitama.lg.jp/documents/281787/doutoriminasamahe260831.pdf)).
- Breeding log (参考様式第10) columns: category (sale, rental, exhibition); kind of animal; mating date (or start of living together); female ID (ID number, name); male ID; expected birth/laying date; birth/laying date; number born/laid; state of the female after birth (for a caesarean, the vet's findings); state of the young (healthy / ill / dead counts; hatch date for eggs); for dogs and cats also the female's age at mating, her lifetime litter count ("n-th"), whether she may be bred again (yes/no, and the date breeding stopped) for female and male; remarks ([MOE 解釈と運用指針 p.41-42, 図表20](https://www.env.go.jp/nature/dobutsu/aigo/2_data/pamph/r0305a/03_6.pdf)).

**Microchip registration (dogs and cats).** National MOE database "犬と猫のマイクロチップ情報登録" run by a designated registration body (Act 39-10) ([MOE chip page](https://www.env.go.jp/nature/dobutsu/aigo/pickup/chip.html)).
- Fees ¥400 online, ¥1,400 on paper, per registration or change of owner (from 1 April 2024) ([Mie](https://www.pref.mie.lg.jp/SHOKUSEI/HP/p0015300021.htm)).
- **A bulk CSV channel exists.** The system offers "一括手続" with four CSV file types, for example new registration of animals a seller acquired, change of owner and change of details. The manual is "一括手続用 CSV ファイル作成マニュアル" v2.7, July 2026, with breed and coat-colour code lists ([MOE system, manual PDF](https://reg.mc.env.go.jp/owner/file/%E4%B8%80%E6%8B%AC%E6%89%8B%E7%B6%9A%E7%94%A8CSV%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E4%BD%9C%E6%88%90%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB%28%E4%BB%A4%E5%92%8C8%E5%B9%B47%E6%9C%88%29.pdf)). The PDF returned HTTP 403 from this environment, so the column list is not confirmed here (unverified). This corrects the earlier report, which said no bulk upload was found.
- Registration data the law requires (Act 39-5(2); Rules 21-7(2)): owner name, address, phone, e-mail, individual/company; animal's location; chip number; application date; animal name; dog or cat; breed; coat colour; date of birth; sex; other features; rabies registration date and number (dogs); type-1 or type-2 handler, category and type-1 registration number; and the dam's chip number if she is chipped ([e-Gov Rules](https://laws.e-gov.go.jp/law/418M60001000001)).

## Supervisors and enforcement evidence

**Who supervises.** The prefecture where the site is, or the mayor of one of the 20 designated cities (政令指定都市) (Act Art. 10(1), 24). In practice the work is done by the prefectural health centre (保健所) or the animal welfare centre (動物愛護センター) ([Saitama 狭山保健所 guide](https://www.pref.saitama.lg.jp/documents/281787/doutoriminasamahe260831.pdf)). Some core cities (中核市) also handle it, for example Kawagoe, Kawaguchi and Koshigaya in Saitama and Kurume in Fukuoka (see Regional differences). The legal route is probably a delegation ordinance (事務処理特例条例) (unverified). MOE writes the law, the ordinances and the interpretation guides, and publishes national statistics. It does not inspect businesses itself.

**Powers (Act).**
- Report requests and on-site inspection of sites, facilities and "other items" (Art. 24(1)). Refusal, obstruction or a false answer: criminal fine up to ¥300,000 (Art. 47(3)).
- Recommendation (勧告) to fix a breach of the keeping standards or other duties, then publication of a non-complier, then an order (命令) (Art. 23(1)-(4)). Breaking an order: fine up to ¥1,000,000 (Art. 46(4)).
- Business suspension up to 6 months or cancellation of registration (Art. 19(1)).
- Order to submit vet post-mortem certificates for dead dogs and cats (Art. 22-6; Rules 10-4).
- 過料 (administrative fine through a district court) up to ¥200,000 for no ledger, false entries, not keeping it, or not filing or false filing of the annual report (Art. 49).

**National enforcement figures (MOE 行政事務提要).** Type-1 businesses only ([MOE R7 table 2_1_3, FY2024](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_3.pdf); [MOE R6 table 2_1_3, FY2023](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r06/2_1_3.pdf)):

| Measure | FY2023 | FY2024 |
|---|---|---|
| On-site inspections (Art. 24(1)) | 19,135 | 23,914 |
| Sites inspected | 15,034 | 20,215 |
| Recommendations (Art. 23(1)-(2)) | 15 | 14 |
| Publications of non-compliers (Art. 23(3)) | 2 | 0 |
| Orders (Art. 23(4)) | 31 | 0 |
| Business suspensions (Art. 19) | 1 | 0 |
| Registration cancellations (Art. 19) | 4 | 2 (both Osaka Prefecture) |
| Post-mortem orders (Art. 22-6) | 0 | 0 |

- Tokyo counts only total visits: 5,546 in FY2023 and 6,052 in FY2024 (same sources).
- With about 51,000 registered sites ([MOE R7 2_1_1](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_1.pdf)), about 40% of sites got at least one inspection in FY2024 (20,215 / 51,198; my arithmetic). On average that is roughly one inspection per site every 2-3 years (my arithmetic), with large regional spread (see Regional differences).
- Formal measures are rare. Most problems end with oral or written guidance (指導) at the inspection, which the table does not count (my reading).
- **Ledger gaps are the most common breach found at breeders.** In November 2023 MOE had prefectures inspect breeders nationwide. Of about 1,400 breeder sites, 665 (about half) broke the law. The main breaches: animal ledger deficiencies (Act 21-5) 496 cases; breeding-log deficiencies (Standards 2(6)ハ) 314; missing birth certificates after caesareans (Standards 2(6)チ) 128; 8-week sale rule breaches 50 (one site can have several). In August 2025 a follow-up found 502 of the 665 sites re-inspected and 396 of those (78.9%) corrected. For ledger deficiencies, 384 sites were re-inspected and 292 (76.0%) corrected; for breeding logs, 225 and 146 (64.9%). Reasons for non-correction included "the operator's lack of understanding" and "forgetting" ([MOE council paper 資料2, follow-up survey](https://www.env.go.jp/council/content/i_10/000357242.pdf)).
- **MOE's 2024 request to the trade.** On 19 September 2024 MOE asked industry bodies, auction operators and pet shops to check, when buying from breeders, tooth eruption, weight consistent with 57 days of age and consistency with the caesarean birth certificate, to detect falsified birth dates (same source, p.4).
- No case was found of a 過料 actually imposed for a missing ledger or a missing annual report (unverified; also in the earlier report). In 2015 more than 2,200 dog and cat sellers had not filed the then-required report, and prefectures relied on reminders ([参議院 質問主意書 190-7](https://www.sangiin.go.jp/japanese/joho1/kousei/syuisyo/190/syuh/s190007.htm)).

**What inspectors look at.** MOE publishes a checklist "centred on the items checked at on-site inspections", split into common items and items by activity (display, transport, breeding, sale, rehoming, rental, auction, training, boarding). It says that failing any item "can be the subject of an administrative measure" ([MOE checklist](https://www.env.go.jp/nature/dobutsu/aigo/2_data/pamph/r0305a/02.pdf)). Its record items: the cleaning, disinfection and maintenance log kept 5 years; the daily animal count and condition log kept 5 years; staff-number calculation papers; health certificates kept 5 years; the per-animal ledger kept 5 years; the breeding log kept 5 years; caesarean birth and vet certificates kept 5 years; the sign and advertising content; and passing training content to all staff (same source, pp.4-8). Saitama's guide includes a self-check sheet (自主点検票, p.20) and recommends a monthly self-check. It lists, per category, which of six records must be kept for 5 years ([Saitama guide](https://www.pref.saitama.lg.jp/documents/281787/doutoriminasamahe260831.pdf)):

| Record | Sale (non dog/cat) | Dog/cat seller | Boarding | Rental | Training | Exhibition | Auction | 譲受飼養 |
|---|---|---|---|---|---|---|---|---|
| (1) Facility and animal check log (参考様式第9) | yes* | yes* | yes* | yes* | yes* | yes* | yes* | yes* |
| (2) Breeding log (参考様式第10) | if breeding | if breeding | no | if breeding | no | if breeding | no | no |
| (3) Trade log (参考様式第11) | yes** | yes** | yes | yes** | yes | yes** | yes | yes** |
| (4) Animal ledger (no set form) | yes | yes | no | yes | no | yes | no | yes |
| (5) Vet health certificate | no | yes*** | yes*** | yes*** | no | yes*** | no | yes*** |
| (6) Birth certificate and vet certificate after a caesarean | no | on caesarean | no | on caesarean | no | on caesarean | no | no |

\* if the business has a facility. \*\* can be skipped if the animal ledger (4) is kept. \*\*\* dogs and cats kept 1 year or more. Source: [Saitama guide p.3](https://www.pref.saitama.lg.jp/documents/281787/doutoriminasamahe260831.pdf).

- The national reference forms are A4 and say on the face "keep for 5 years" (参考様式第9: day rows 1-31, columns for check time, cleaning, disinfection, maintenance check, abnormal number yes/no, abnormal condition yes/no, checker name, remarks) ([Saitama guide p.8](https://www.pref.saitama.lg.jp/documents/281787/doutoriminasamahe260831.pdf)).
- The guide warns that a rise in dog or cat deaths in the annual report can trigger an order to file post-mortem certificates (same source, p.7).
- The guide also says health centres in principle send no notice before the 5-year registration expires (same source, p.7).

## Regional differences

The duties themselves are national: the Act, the Order, the Rules and the Standards apply everywhere, and the report form 様式第十一の二 is national. What varies is who administers, how filing works, local ordinances, fees, training and how hard inspectors push.

- **Who administers.** 47 prefectures and 20 designated cities, 67 authorities in the MOE tables ([MOE R7 2_1_2](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_2.pdf)). Some core cities also handle registrations and reports by delegation. Examples: Saitama City plus the core cities Kawagoe, Kawaguchi and Koshigaya take their own reports ([Saitama](https://www.pref.saitama.lg.jp/a0706/doubutu-touroku/teikihoukoku.html)); Fukuoka City, Kitakyushu and the core city Kurume keep their own registers ([Fukuoka](https://www.pref.fukuoka.lg.jp/contents/animalhandlingbusiness-type1-inspection.html)). Tokyo publishes a table of which tasks sit with the metropolis, special wards, core cities and Hachioji by ordinance or delegation ([Tokyo 参考資料](https://www.hokeniryo.metro.tokyo.lg.jp/documents/d/hokeniryo/R2-s4sankou4)) (contents not read, unverified). The product needs an authority table keyed by site address, not by prefecture alone.
- **Filing channel.** LoGo forms (Tokyo, Kumamoto), a prefectural e-application system (Chiba), e-mail (Saitama Prefecture, Sendai, Hiroshima City), fax (Hiroshima City), and post or counter almost everywhere (see the channel table above).
- **Ledger templates.** Not uniform. Tokyo uses its own 都参考様式1-4; Saitama, Ibaraki, Kyoto and others publish their own Excel or PDF versions ([Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html); [Ibaraki](https://www.pref.ibaraki.jp/hokenfukushi/doshise/aigo/tyoubo-teikihoukoku.html); [Kyoto](https://www.pref.kyoto.jp/doubutsu/documents/dai1doutori.pdf)). Any layout is legal if the 13 items are there (Rules 10-2).
- **Local ordinances.** MOE's table of local animal ordinances shows only one extra record duty for businesses: Hokkaido requires sellers of "specified introduced animals" (特定移入動物) to record and keep sales records, with a fine up to ¥50,000 ([MOE R7 1_1_2](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/1_1_2.pdf)). Other ordinances (Tokyo, Niigata Prefecture, Niigata City, Sagamihara and others) restate business duties, add reporting and inspection powers, or set fees (same source). No ordinance found adds a second annual report.
- **Fees.** Set by each authority's fee ordinance. Examples: new registration ¥15,000 per category in Aichi ([Aichi](https://www.pref.aichi.jp/site/gyoute/75190.html)); renewal ¥10,000 in Saitama, ¥5,000 for each extra category filed at the same time ([Saitama guide p.16](https://www.pref.saitama.lg.jp/documents/281787/doutoriminasamahe260831.pdf)).
- **Responsible-person training.** Frequency and format are set locally. In FY2024 Iwate moved businesses to "at least once every 2 years"; Yokohama ran e-learning; Shizuoka City used online video; Saitama ran online video plus 4 venue sessions and lent DVDs ([MOE R7 2_1_4](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_4.pdf)).
- **Inspection intensity.** Share of registered sites inspected in FY2024 (sites inspected FY2024 / sites registered 1 April 2025, prefecture areas excluding designated cities; my arithmetic): Nagano 507/811 (63%), Hyogo 736/1,667 (44%), Aichi 759/2,229 (34%), Chiba 656/2,350 (28%), Saitama 645/2,517 (26%), Hokkaido 311/1,386 (22%), Osaka 417/2,135 (20%), Kyoto 66/461 (14%). Tokyo counted 6,052 visits for 5,387 sites ([MOE R7 2_1_3](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_3.pdf); [MOE R7 2_1_2](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_2.pdf)).

## Upcoming changes

- **Keeping standards for mammals other than dogs and cats (most important).** MOE will amend the Standards ordinance to set concrete rules for other mammals. Timeline: expert study from FY2022; draft November 2025; referred to the Central Environment Council December 2025; public comment 12 February to 13 March 2026; council report draft at the 66th Animal Welfare Subcommittee on 23 July 2026; promulgation expected around autumn 2026; entry into force around spring 2027, about 6 months after promulgation; 1-year transition for cage sizes for existing businesses ([MOE 資料2-1 答申案の概要](https://www.env.go.jp/council/content/i_10/000418179.pdf); [MOE 資料2-2 答申案](https://www.env.go.jp/council/content/i_10/000418177.pdf); [66th subcommittee](https://www.env.go.jp/council/14animal/66_1_00001.html); [Osaka notice of the public comment](https://www.pref.osaka.lg.jp/o120200/doaicenter/doaicenter/toriatsukaigyoannai.html)). As of 10 October 2026 the e-Gov text of the Standards still shows the 2023 amendment as the latest, so the new ordinance was not yet in the e-Gov text ([e-Gov Standards](https://laws.e-gov.go.jp/law/503M60001000007)) (promulgation status unverified). Content (from the summary):
  - Cage size formulas for rabbits (length ≥2×, width ≥1.5×, height ≥1.7× head-body length), hamsters (floor ≥ 7.5 × head-body length², +2.5× per extra animal; height ≥2×) and guinea pigs (floor ≥6×, +2.25× per extra; height ≥1.5×). Qualitative rules for other mammals.
  - Thermometer and hygrometer, and day-length light, for all mammals.
  - Vet care when a mammal's health worsens; ban on matted, soiled coats and overgrown nails, teeth or hooves.
  - Display of non-dog/cat mammals only 8:00-22:00 and at most 12 hours a day; rest breaks if displayed more than 6 hours.
  - 2-day visual health watch after transport for all mammals (sellers and renters); animals taken to outside events must be brought back promptly.
  - Contact rules for animal cafés and petting: a retreat place, confirm in writing or orally that customers understood the contact rules, hand disinfection, enough staff.
  - No night contact or handover (20:00-8:00) for all mammals.
  - Ledger rules (Rules 10-2) and the annual report (Rules 10-3) are not changed by this draft (my reading of the draft text; the record-keeping clauses are unchanged).
- **Next amendment of the Act.** The 2019 amending act tells the government to review the Act about 5 years after it took effect and to study wider microchip duties (2019 Act supplementary provisions Arts. 10-11, on [e-Gov Act](https://laws.e-gov.go.jp/law/348AC1000000105)). Sapporo's January 2026 training slides show "2026: amendment?" ([Sapporo](https://www.city.sapporo.jp/inuneko/main/documents/r7_houritsu_kisoku.pdf)). No bill was found in the 2026 Diet sessions (unverified). A 2025 government Diet answer favoured using the existing registration and penalty system over new licensing ([参議院 217](https://www.sangiin.go.jp/japanese/joho1/kousei/syuisyo/217/touh/t217089.htm)).
- **Latest formal amendments seen.** Act No. 30 of 5 June 2026 only renumbers a cross-reference to the Foreign Exchange Act in the registration-refusal grounds (Act Art. 12(1)(6)) ([e-Gov Act](https://laws.e-gov.go.jp/law/348AC1000000105)). The Rules were last amended by MOE Ordinance No. 3 of 17 February 2025 (forms; one provision from 1 September 2025) ([e-Gov Rules](https://laws.e-gov.go.jp/law/418M60001000001)). Neither touches the ledger or the report.
- **Microchip system.** The bulk CSV manual moved from v2.6 (September 2025) to v2.7 (July 2026), so the import format changes from time to time ([v2.6](https://reg.mc.env.go.jp/owner/file/%E4%B8%80%E6%8B%AC%E6%89%8B%E7%B6%9A%E7%94%A8CSV%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E4%BD%9C%E6%88%90%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB%28%E4%BB%A4%E5%92%8C7%E5%B9%B49%E6%9C%88%29.pdf); [v2.7](https://reg.mc.env.go.jp/owner/file/%E4%B8%80%E6%8B%AC%E6%89%8B%E7%B6%9A%E7%94%A8CSV%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E4%BD%9C%E6%88%90%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB%28%E4%BB%A4%E5%92%8C8%E5%B9%B47%E6%9C%88%29.pdf)).
- **Birds and reptiles.** The 2021 council report said standards for other mammals, birds and reptiles should be studied. This round covers mammals only, so birds and reptiles may come later (my reading of [MOE 資料2-1](https://www.env.go.jp/council/content/i_10/000418179.pdf)).

## PRODUCT REQUIREMENTS

Each requirement is testable. "Basis" gives the legal source, using the short names at the top (Act, Order, Rules, Standards). "MOE checklist" = the MOE inspection checklist in the 飼養管理基準 guide ([MOE r0305a/02](https://www.env.go.jp/nature/dobutsu/aigo/2_data/pamph/r0305a/02.pdf)). "MOE guide" = [MOE 解釈と運用指針, breeding section](https://www.env.go.jp/nature/dobutsu/aigo/2_data/pamph/r0305a/03_6.pdf). Requirements marked (practice) have no direct legal basis but follow from how the duty is done today.

**A. Business profile and duty engine**

1. The system must hold one business with one or more sites (事業所). Each site holds one or more type-1 registrations. Each registration stores: category (sale, boarding, rental, training, exhibition, auction, 譲受飼養), registration number, registration date, expiry date, responsible person(s), and flags "dog/cat seller" (犬猫等販売業者) and "breeds" (繁殖を行う). Test: a site with sale and exhibition registrations shows two registrations, two expiry dates and two annual reports. Basis: Act 10(1), 10(3), 13, 21-5; Order 1; [Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html).
2. A duty engine must switch records on and off from the registration data, following the Saitama table: check log for every category with a facility; breeding log for sale, rental and exhibition when breeding; trade log for all, waived where the animal ledger is kept; animal ledger and annual report only for sale, rental, exhibition and 譲受飼養; health certificates for dogs and cats kept 1 year or more. Test: a boarding-only site gets the check log, trade log and health-check tracker, and no animal ledger or annual report. Basis: Act 21-5; Order 2; Standards 2(1)イ(3), 2(4)ハ, 2(6)ハ, 2(7)エ, 2(7)ム; [Saitama guide p.3](https://www.pref.saitama.lg.jp/documents/281787/doutoriminasamahe260831.pdf).
3. The "dog/cat seller" flag must switch on: microchip tasks, the 56-day sale bar, staff-ratio checks, breeding limits, the health and safety plan and the death-rate warning. Test: turning the flag off hides the microchip module; turning it on adds chip deadlines to every dog and cat. Basis: Act 10(3), 22-2 to 22-6, 39-2, 39-5, 39-6; Standards 2(2), 2(6)ホ-ヘ.
4. A second-type mode (rescue groups and shelters that rehome dogs and cats) must give the per-animal ledger and the intake/outflow log, with no annual report. Test: a second-type profile has no 様式第十一の二 menu. Basis: Act 24-4(2); Rules 10-10; Standards 3(7)ヰ.
5. An authority table must map each site address to the receiving authority (one of 47 prefectures, 20 designated cities, or a core city with delegated powers), its office name for the form's addressee, and its accepted channels. Test: a site in Kawagoe routes to Kawagoe City, not Saitama Prefecture. Basis: Act 10(1); Rules 10-3(1); [Saitama](https://www.pref.saitama.lg.jp/a0706/doubutu-touroku/teikihoukoku.html).

**B. Animal ledger (動物に関する帳簿)**

6. Dogs and cats must be recorded one record per animal. All other mammals, birds and reptiles must be recorded one record per breed (品種等), with dated quantity movements. Test: adding 10 hamsters of one breed creates one breed record with 10 in, not 10 animal records. Basis: Rules 10-2(2).
7. Every record must hold the 13 items of Rules 10-2(1), with the legal fallbacks: breeder unknown and imported, then exporter name and address; breeder unknown and transferred, then transferor; wild-caught, then catcher and place of capture; birth date unknown, then estimated birth date and import date. Test: an imported reptile record cannot be saved with an empty breeder field unless the exporter fields are filled. Basis: Rules 10-2(1)(1)-(5).
8. A sale or handover cannot be closed until items 6-10 are filled: date, counterparty name and registration number (business) or address (consumer), how the counterparty's legal compliance was checked, the staff member who sold (sellers), and the status of the face-to-face explanation and the customer's confirmation (sellers). Rentals also need the information given, purpose and period. Test: saving a sale without the selling staff member fails. Basis: Rules 10-2(1)(6)-(11); Standards 2(7)リ.
9. A death while held must record date and cause; both are mandatory. Test: a death with an empty cause is rejected. Basis: Rules 10-2(1)(12)-(13).
10. Every entry must be kept at least 5 years from its entry date. Hard delete must be impossible inside that window; corrections must keep the old value, the new value, the user and the time. Test: deleting a 2-year-old record fails; editing it shows the history. Basis: Rules 10-2(3); Act 49(2) (false entries are fined).
11. Trade slips, post-mortem certificates and other papers must attach to the entry they support. Test: a death entry shows its attached certificate. Basis: Rules 10-2(5) (effort duty).
12. The ledger must be printable and exportable for any period as A4 PDF and Excel in Japanese, per site, per animal or breed, so it can be shown on request, including offline from a saved file. Test: export of 5 years for one site completes and opens without network. Basis: Act 24(1); Rules 10-2(4); [Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html).
13. (practice) Import from the common Excel templates (Tokyo 都参考様式1-4 and prefectural ledgers), mapping columns to the 13 items. Test: a filled Tokyo 様式1 sample imports with no lost fields.

**C. Annual report (定期報告, 様式第十一の二)**

14. The report must be computed from the ledger, per registration and per kind (dog, cat, other mammals, birds, reptiles): held at period start; new, by month; sold or handed over, by month; died, by month; held at period end. Births count as new and stillbirths are excluded; moves to another own site count as "handed over" at the sending site and "new" at the receiving site; retirements follow a per-authority setting. Test: seeded data with 3 purchases, a litter of 5 (1 stillborn), 2 sales and 1 death gives new = 7, handed over = 2, deaths = 1 in the right months. Basis: Act 21-5(2)(1)-(4); Rules 10-3(4); [Aomori 記載例](https://www.pref.aomori.lg.jp/soshiki/kenko/dobutu/files/20210108kisaireiteikihoukoku.pdf).
15. The system must reconcile start + new − sold/handed over − died = end (the form's own check "5 + 6 − 7 − 8 = 9"), per kind, and block "final" on a mismatch with a list of the records that cause it. Test: a sale with no matching acquisition triggers the block. Basis: Act 21-5(2); Act 49(1) (false report is fined).
16. The period must be 1 April to 31 March. For a registration made in the year, the period starts on the registration date and item 5 shows the count on that date. Test: a registration on 10 October reports months October-March only. Basis: Rules 10-3(2)-(3); form notes ([Saitama guide p.15](https://www.pref.saitama.lg.jp/documents/281787/doutoriminasamahe260831.pdf)).
17. Item 10 (breeds included in non-dog/cat kinds) must be filled from the breed records active in the period. Test: a year with rabbits and budgerigars lists both. Basis: 様式第十一の二.
18. Output must reproduce 様式第十一の二 as Excel and PDF, one per registration, with the addressee from the authority table, the filer block, and the clerk's name and phone in item 11 when the clerk is not the filer. Test: cell-by-cell match against the Tokyo Excel template. Basis: Rules 10-3(1); [Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html).
19. The system must produce a report with zeros when a registration held no animals in the year. Test: an empty registration still yields a report. Basis: Act 21-5(2) (duty every period; whether authorities expect zero reports is unverified).
20. Reminders must start on 1 April and show the due date 30 May (60 days after 31 March), with a final warning in the last week. The user records submission date, channel, reference number and the file sent. Test: on 25 May an unfiled report shows "due in 5 days". Basis: Rules 10-3(1).
21. A channel helper must show the authority's accepted channels: link to the LoGo or e-application form, copy-ready values for each web field, or an e-mail draft with the Excel attached where e-mail is accepted. Test: a Tokyo Tama site opens the Tama LoGo link. Basis: channel table above.
22. Before filing, the system must compare the dog and cat death rate (deaths / (start + new)) with the previous year and warn on a rise. Test: deaths up from 2% to 6% shows a warning. Basis: Act 22-6; Rules 10-4; [Saitama guide p.7](https://www.pref.saitama.lg.jp/documents/281787/doutoriminasamahe260831.pdf).

**D. Sale-time documents**

23. For each sale to a consumer, the system must generate the 18-item explanation sheet from the animal and breed records, record the date, site and staff who explained it face to face, and capture the customer's signature or equivalent confirmation (paper scan or e-signature). The sale cannot close without it. Test: closing a sale with no confirmation fails. Basis: Act 21-4; Rules 8-2; Standards 2(7)ヘ; Rules 10-2(1)(10).
24. For a sale to another registered business, the system must generate the same document and capture the buyer's receipt; items 2-10 may be marked "explained as needed". Test: a B2B sale stores a receipt. Basis: Standards 2(7)ホ; MOE checklist p.7.
25. The system must print a display card for each animal on sale: breed, standard adult size (標準体重・体長), sex, birth date, place of origin, owner if not the seller. Test: a card prints with all six fields. Basis: Standards 2(7)フ.
26. The system must list the vet treatment and vaccination certificates held for an animal (own and from the supplier) and record that copies went to the buyer. Basis: Standards 2(4)チ.
27. The system must produce the sign data (様式第九) and an advertising footer with name, site, category, registration number, registration date and expiry, and responsible person. Test: changing the responsible person updates both. Basis: Act 18; Rules 7; Standards 2(7)ケ.

**E. Dog and cat age and transport rules**

28. For dogs and cats bred by the seller, the system must block "display for sale", "sale" and "handover for sale" before the animal reaches 57 days of age (57日齢), and before 50 days of age for the six natural-monument Japanese breeds sold by their breeder directly to a consumer. The counting convention must be a setting (unverified, see open questions). Test: a puppy born 1 April cannot be marked sold on 20 May. Basis: Act 22-5; Act original supplementary provision para. 2 (49 days for designated natural-monument dogs); MOE checklist p.7.
29. Sellers and renters must record arrival after transport and the observation result; sale or rental must be blocked until 2 full days of observation with no visible problem. Test: a cat arriving on 1 June cannot be sold on 2 June. Basis: Standards 2(5)ロ(10), 2(7)ニ.

**F. Breeding**

30. The breeding log must hold the 参考様式第10 fields: category, kind, mating date (or start of living together), female and male IDs, expected and actual birth date, number born, state of the female after birth, state of the young (healthy, ill, dead counts), and for dogs and cats the female's age at mating, her lifetime litter number, and whether she will be bred again (with the date breeding stopped). Test: a litter entry without the female's ID fails. Basis: Standards 2(6)ハ; MOE guide 図表20.
31. Breeding limits must be checked at each mating entry. Dogs: block a 7th litter; block mating from the 7th birthday, unless the female had fewer than 6 litters on her 7th birthday, then from the 8th birthday. Cats: block mating from the 7th birthday, unless fewer than 10 litters on her 7th birthday, then from the 8th birthday. Test cases: dog aged 6y11m with 6 litters, blocked; dog aged 7y3m with 4 litters at 7, allowed; cat aged 7y1m with 10 litters at 7, blocked. Basis: Standards 2(6)ホ, ヘ; MOE guide p.41 ("6歳以下" means under 7 full years).
32. Lifetime litter counts must survive the 5-year retention rule for as long as the female is held, including litters entered as history before the system was used. Test: a litter from 6 years ago still counts. Basis: MOE guide p.41-42.
33. When a dog or cat goes to another seller, renter or exhibitor, the system must produce a copy of the relevant breeding-log entries to hand over. Test: the copy lists the dam's and sire's records for that litter. Basis: Standards 2(6)ニ.
34. A caesarean must require the vet's name, the vet's birth certificate and the vet's certificate on the dam's state and fitness to breed, all kept 5 years. Basis: Standards 2(6)チ; MOE guide p.42.

**G. Health, staff and daily logs**

35. Each dog or cat held 1 year or more must have a yearly vet check due date and a stored certificate. Certificates must be kept 5 years from the check date, even after the animal leaves. Test: a dog acquired 1 May 2025 shows "check due" on 1 May 2026. Basis: Standards 2(4)ハ, 2(6)リ; MOE guide p.42.
36. The daily check log must capture, per site per day: time, cleaning done, disinfection done, maintenance check done, animal number abnormal yes/no, condition abnormal yes/no, checker name, and remarks (required when "abnormal"). Missing days must show as gaps. Test: a day with "abnormal = yes" and no remark cannot be saved. Basis: Standards 2(1)イ(3), 2(7)ム; 参考様式第9.
37. A trade log must exist for categories without the animal ledger (boarding, training, auction): purchases, sales, auctions and counterparty details. Basis: Standards 2(7)エ.
38. The staff register must hold each keeper's working hours and compute staff numbers as: full-time staff count 1 each; other staff = their total hours / the site's full-time hours, rounded down. The system must count dogs and cats held, excluding young kept with their mother and retired breeders, and warn when the limit is exceeded: 20 dogs (15 breeding) or 30 cats (25 breeding) per staff member, and the mixed table (別表) when both are kept. Test: 2 full-time staff with 41 dogs triggers a warning. Basis: Standards 2(2), 別表; Rules 3(1)(8).

**H. Microchips (dogs and cats)**

39. Each dog and cat must hold: chip number, fitting date, fitting vet and certificate (装着証明書), registration date, registration certificate, change-of-owner date. Basis: Act 39-2, 39-3, 39-5, 39-6.
40. Deadlines: fit a chip by 30 days after acquisition (or after the day the animal passes 90 days of age, if acquired younger), or before handover if earlier; register within 30 days of fitting (or of acquiring an unregistered chipped animal), or before handover; register a change of owner within 30 days of acquiring a registered animal, or before handover; report changed details within 30 days; report a death without delay. Handover must be blocked until the chip is registered and the registration certificate is marked handed over. Test: a puppy born 1 April and kept has a fitting deadline of 30 July, i.e. 120 days of age ([Okayama City](https://www.city.okayama.jp/jigyosha/cmsfiles/contents/0000036/36684/mcseido0001.pdf); exact day count unverified); a handover on 1 June without registration is blocked. Basis: Act 39-2(1), 39-5(1), 39-5(8), 39-5(9), 39-6(1), 39-8.
41. The system must export the MOE bulk-procedure CSV files (new registration, change of owner, change of details, and the fourth type in the manual), using the breed and coat-colour code lists in the current manual. The format must be versioned so a new manual can be loaded without a code release. Test: a file of 20 puppies passes the MOE data check (to be confirmed in a pilot). Basis: Act 39-5(2); Rules 21-7(2); [MOE manual v2.7](https://reg.mc.env.go.jp/owner/file/%E4%B8%80%E6%8B%AC%E6%89%8B%E7%B6%9A%E7%94%A8CSV%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E4%BD%9C%E6%88%90%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB%28%E4%BB%A4%E5%92%8C8%E5%B9%B47%E6%9C%88%29.pdf) (columns unverified).
42. The animal record must hold every field the chip registration needs: name, dog or cat, breed, coat colour, birth date, sex, features, dam's chip number, plus the business's type-1 category and registration number. Test: CSV export never has an empty mandatory column. Basis: Rules 21-7(2).

**I. Registration administration**

43. Registration expiry reminders at 3, 2 and 1 month before expiry; the renewal window opens 2 months before expiry. Test: a registration expiring 1 March 2027 shows "renewal window open" on 1 January 2027. Basis: Act 13; Rules 4; [Saitama guide p.7](https://www.pref.saitama.lg.jp/documents/281787/doutoriminasamahe260831.pdf) (no expiry notice is sent).
44. Change notices: a 30-day timer for changes to name, address, responsible person, kinds and numbers of animals, facility and health and safety plan; an advance-notice flag for changes the Rules require before the change. Closure notice within 30 days. Basis: Act 14, 16; Rules 5, 6.
45. Responsible person: store qualification evidence, each training attended (date, authority, certificate), the authority's required frequency (a setting), and each briefing of all staff on the training content (date, attendees). Test: a staff member with no briefing record after the last training shows as open. Basis: Act 22(1), (3); Rules 9, 10; Standards 2(7)コ.
46. The dog and cat health and safety plan (犬猫健康安全計画) must be stored with versions; a change starts the 30-day change-notice timer. Basis: Act 10(3), 14, 22-2; Rules 2-2.

**J. Inspection readiness**

47. An "inspection pack" for a site must, in one action, show or export: registration data and sign, responsible person and training proof, staff list and ratio calculation, animal ledger, breeding log, daily check log, trade log, health and caesarean certificates, explanation confirmations, chip certificates, and the last annual report with proof of submission. Test: pack for a breeder site contains all 12 parts. Basis: Act 24(1); MOE checklist.
48. A monthly self-check must run the MOE checklist (common items plus the items for the site's categories) and store answers, date and checker. Test: a breeder site shows the breeding items; a boarding site does not. Basis: MOE checklist; [Saitama guide p.6](https://www.pref.saitama.lg.jp/documents/281787/doutoriminasamahe260831.pdf) (self-check about monthly).

**K. Data integrity, privacy and language**

49. All entries must carry server time stamps and user IDs. An entry dated more than 7 days back must require a reason (practice; protects against "false entry" claims under Act 49(2)).
50. Buyer and supplier names, addresses and signatures are personal information. The service must publish a privacy policy, apply security measures, and disclose any storage outside Japan as Japan's privacy law requires. Basis: 個人情報の保護に関する法律 Arts. 23, 28, 32 ([e-Gov APPI](https://laws.e-gov.go.jp/law/415AC0000000057)) (application to a foreign-hosted SaaS not checked, unverified).
51. All forms and printouts must be Japanese, A4, with Japanese-era dates (令和) where the official form uses them. Test: the report shows "令和8年5月20日". Basis: 様式第十一の二 and reference forms (A4, 平成・令和 date fields).
52. On cancellation the customer must get a full export (PDF, Excel, CSV) and the records must stay readable for 5 years from the last entry, or be handed over in a form the customer can show an inspector. Test: a cancelled account can still download its archive. Basis: Rules 10-2(3); Standards record clauses (5 years).

**L. Buyer-side checks (pet shops and auctions buying from breeders)**

53. When a dog or cat is bought from another business, the intake screen must record: the supplier's registration number, how and when the supplier was asked whether it breaks animal-trade laws, and plausibility checks of the stated birth date (tooth eruption, weight against the 57-day mark, match with any caesarean birth certificate), plus receipt of the breeding-log copy and the 18-item B2B document. Test: an intake with no supplier compliance check cannot be completed. Basis: Rules 10-2(1)(8); Standards 2(6)ニ, 2(7)ホ, 2(7)リ; MOE request of 19 September 2024 ([MOE 資料2 p.4](https://www.env.go.jp/council/content/i_10/000357242.pdf)).

**M. Upcoming rules**

54. Rules for other mammals must be switchable by effective date: display limits 8:00-22:00 and 12 hours a day, 2-day post-transport watch for all mammals, contact-rule confirmations with customers, cage-size calculators for rabbits, hamsters and guinea pigs, and the 1-year transition for existing businesses. Test: setting the effective date to 1 April 2027 turns on the rabbit cage check for new registrations then and for existing ones a year later. Basis: [MOE 答申案](https://www.env.go.jp/council/content/i_10/000418177.pdf) (not yet in force).

## Open questions

1. Does each authority expect a report from a registration that held no animals all year (zero report)? The Act implies yes; no authority text was found (unverified).
2. Is a separate 様式第十一の二 needed for each registration category at the same site everywhere, as Tokyo asks, or do some authorities accept one combined report (unverified)?
3. Exact counting conventions: the day count for "56 days after birth have passed" (MOE says "57日齢"), and for the microchip deadline of an animal born on site (Okayama City says by 120 days of age). Need the MOE Q&A text (unverified).
4. Does a retired breeder that stays on site as a pet count as "handed over" in item 7 (Aomori's example suggests retirements count; unverified)?
5. What are the exact columns, codes and limits of the 4 MOE bulk CSV files (manual v2.7)? The PDF returned 403 here. Who may use bulk procedures (business accounts only?) and are fees still ¥400 per animal (unverified)?
6. Which core cities hold delegated powers in each prefecture? Needed for the authority table (partly known: Saitama, Fukuoka; rest unverified).
7. Has any authority imposed a 過料 under Act Art. 49 for the ledger or report since 2020 (none found; unverified)?
8. When will the new mammal standards be promulgated and take effect (expected autumn 2026 and spring 2027; unverified)? Will birds and reptiles follow?
9. Will a 2026-2027 amendment of the Act change the ledger, the report or microchip scope (no bill found; unverified)?
10. Does Japan's privacy law treat a foreign-hosted SaaS holding buyer data as a "provision to a third party in a foreign country" or only as entrustment needing disclosure of the foreign environment (unverified; needs a Japanese privacy lawyer)?
11. Do inspectors accept an electronic ledger shown on a tablet, or do some still ask for printouts on the spot? The Rules allow electronic storage; practice per authority is unverified.

## Sources

All accessed 2026-10-10 unless noted. Local copies of the law texts were taken from e-Gov the same day.

**Laws (e-Gov)**
- https://laws.e-gov.go.jp/law/348AC1000000105
- https://laws.e-gov.go.jp/law/350CO0000000107
- https://laws.e-gov.go.jp/law/418M60001000001
- https://laws.e-gov.go.jp/law/503M60001000007
- https://laws.e-gov.go.jp/law/415AC0000000057

**Ministry of the Environment (MOE)**
- https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_1.pdf
- https://www.env.go.jp/council/content/i_10/000357242.pdf
- https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_3.pdf
- https://www.env.go.jp/nature/dobutsu/aigo/2_data/pamph/r0305a/02.pdf
- https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_4.pdf
- https://www.env.go.jp/nature/dobutsu/aigo/2_data/pamph/r0305a/03_6.pdf
- https://www.env.go.jp/nature/dobutsu/aigo/pickup/chip.html
- https://reg.mc.env.go.jp/owner/file/%E4%B8%80%E6%8B%AC%E6%89%8B%E7%B6%9A%E7%94%A8CSV%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E4%BD%9C%E6%88%90%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB%28%E4%BB%A4%E5%92%8C8%E5%B9%B47%E6%9C%88%29.pdf
- https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r06/2_1_3.pdf
- https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_2.pdf
- https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/1_1_2.pdf
- https://www.env.go.jp/council/content/i_10/000418179.pdf
- https://www.env.go.jp/council/content/i_10/000418177.pdf
- https://www.env.go.jp/council/14animal/66_1_00001.html
- https://reg.mc.env.go.jp/owner/file/%E4%B8%80%E6%8B%AC%E6%89%8B%E7%B6%9A%E7%94%A8CSV%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E4%BD%9C%E6%88%90%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB%28%E4%BB%A4%E5%92%8C7%E5%B9%B49%E6%9C%88%29.pdf

**Prefectures and cities**
- https://www.pref.saitama.lg.jp/documents/281787/doutoriminasamahe260831.pdf
- https://www.pref.aomori.lg.jp/soshiki/kenko/dobutu/files/20210108kisaireiteikihoukoku.pdf
- https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html
- https://www.pref.saitama.lg.jp/a0706/doubutu-touroku/teikihoukoku.html
- https://www.pref.saitama.lg.jp/b0702/doubutu-gaityu/teikihoukoku.html
- https://www.pref.chiba.lg.jp/eishi/pet/doubutsu/animal-business.html
- https://www.pref.kumamoto.jp/soshiki/30/167649.html
- https://www.city.sendai.jp/dobutsu/oshirase/r7_teikihoukoku.html
- https://www.city.hiroshima.lg.jp/living/pet-doubutsu/1021301/1026247/1023072.html
- https://www.pref.mie.lg.jp/SHOKUSEI/HP/p0015300021.htm
- https://www.pref.fukuoka.lg.jp/contents/animalhandlingbusiness-type1-inspection.html
- https://www.hokeniryo.metro.tokyo.lg.jp/documents/d/hokeniryo/R2-s4sankou4
- https://www.pref.ibaraki.jp/hokenfukushi/doshise/aigo/tyoubo-teikihoukoku.html
- https://www.pref.kyoto.jp/doubutsu/documents/dai1doutori.pdf
- https://www.pref.aichi.jp/site/gyoute/75190.html
- https://www.pref.osaka.lg.jp/o120200/doaicenter/doaicenter/toriatsukaigyoannai.html
- https://www.city.sapporo.jp/inuneko/main/documents/r7_houritsu_kisoku.pdf
- https://www.city.okayama.jp/jigyosha/cmsfiles/contents/0000036/36684/mcseido0001.pdf

**Diet**
- https://www.sangiin.go.jp/japanese/joho1/kousei/syuisyo/190/syuh/s190007.htm
- https://www.sangiin.go.jp/japanese/joho1/kousei/syuisyo/217/touh/t217089.htm

