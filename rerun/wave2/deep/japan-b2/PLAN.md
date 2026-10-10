# Japan: 動物取扱業 records, ledger and annual report tool — full plan

Combined plan from four deep-research parts (written 10 Oct 2026):

- [01 Law and product requirements](01-law-and-requirements.md): the Act, the Order, the Rules and the keeping Standards; 30 duties with penalties; filing channels; enforcement figures; 54 testable requirements (R1-R54).
- [02 Market and competition](02-market-and-competition.md): buyer counts from the MOE tables and two public registers, buyer profile, prices, competitors, channels, Taiwan and Korea.
- [03 Product and technical design](03-product-and-tech.md): users, features, flows, screens, data model, architecture, privacy, liability, running costs, agent work plan and build budget.
- [04 Go-to-market, company and finance](04-gtm-company-finance.md): pricing, channels, 90-day launch, payments and tax, company set-up, contracts, 36-month model and kill criteria.

Earlier work: [the B2 report and its re-assessment](../reports/japan-b2.md) (6/10, "maybe").

Facts are sourced in those files; the main ones are linked again here. "My estimate" marks numbers derived in this plan. "(unverified)" marks claims nobody could confirm. Money: ¥158 = US$1 and ¥177 = €1, the Bank of Japan rates of 2 Oct 2026 ([BoJ](https://www.boj.or.jp/en/statistics/market/forex/fxdaily/fxlist/fx261002.pdf)). The 02 and 03 files used ¥150; this changes no conclusion.

## Reconciliation notes: where the files disagree and what this plan uses

| Topic | What the files say | This plan uses | Why |
|---|---|---|---|
| Buyer counts | Re-assessment: MOE R6 table (1 Apr 2024), 28,555 registrations with the duty. 01, 02, 04: MOE R7 table (1 Apr 2025), 28,857 registrations; 13,347 dog and cat breeders | **R7 figures.** About 25,000 distinct sites (range 24,000-26,000) | Newest official table ([MOE R7 2_1_1](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_1.pdf)). The distinct-site range is 02's estimate from the Fukuoka register |
| Chip portal | 02's competitor table: "one animal at a time". 01 and 03: a bulk CSV channel exists (4 file types, manual v2.7, July 2026) | **Bulk CSV exists; its columns are unconfirmed** | 01 and 03 cite the manual itself ([MOE manual v2.7](https://reg.mc.env.go.jp/owner/file/%E4%B8%80%E6%8B%AC%E6%89%8B%E7%B6%9A%E7%94%A8CSV%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E4%BD%9C%E6%88%90%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB%28%E4%BB%A4%E5%92%8C8%E5%B9%B47%E6%9C%88%29.pdf)). The PDF returned HTTP 403 from abroad |
| Price | Re-assessment: ¥1,980-2,980 a month. 02: ¥1,480 a month or ¥14,800 a year; shop ¥4,980 a month (¥59,760 a year in its sizing). 04: ¥14,800 a year; shop ¥49,800 a year or ¥4,980 a month | **04's prices**: Breeder ¥14,800 a year; Shop ¥49,800 a year per site | 84% of sites are individuals with about 10 animals (02). Both annual prices equal 10 months of the monthly price |
| ¥4,980 "report season pack" | 02 and 04 propose it. 03 says drop it unless a lawyer approves, because of the 行政書士 Act | **On hold until a written opinion.** Launch without it | Since 1 Jan 2026 the Act bans paid preparation of filings by non-行政書士 "under any name" ([JEMCA](https://www.jemca.or.jp/wp-content/uploads/2026/01/gyoiseisyoshihoukaisei.pdf)); a ministry answer warns that "free form, paid extras" can count as pay ([MLIT](https://www1.mlit.go.jp/jidosha/content/001747440.pdf)) |
| MVP scope | 03: Excel import, chip CSV and LINE in v1 (end Feb 2027); staff ratio in the MVP. 04's 90-day plan lists Excel import and chip CSV in the MVP and staff ratio late | **03's cut, with the staff ratio in the MVP and in every paid plan** | 03 is the product plan. The chip CSV columns are unconfirmed. The staff-ratio rule binds breeders most, so it cannot be a Shop-only feature |
| Interviews | 03: 10 in weeks 2-3. 04: 20 breeders and 5 shops by 25 Oct | **20 breeders + 5 shops by Fri 30 Oct** | The Japanese contractor must be hired first. One extra week costs little, because the big spend (lawyer, security test) starts in week 6 |
| Japanese contractor | 03: 30-60 hours of language help. 04's model: from month 3; 04's 90-day plan: hire in days 1-14 | **From week 1** at about ¥100,000 a month | Interviews need it. It adds about ¥0.2M to 04's year-1 costs |
| Timing | 03: MVP feature-complete about 6 Nov, paid launch Mon 7 Dec. 04: sellable late Nov to early Dec | **Paid launch 7 Dec 2026**; v1 by 28 Feb 2027 | Same in substance; matches "MVP in about 3-4 weeks, sellable in 8" |
| Year-3 revenue | Re-assessment: about ¥21M (with boarding). 02: base about ¥14M (824 customers, no churn). 04: ARR ¥13.0M at month 36 (684 active) | **04's model** | It nets out churn and timing; it is within 10% of 02. The ¥21M is superseded because boarding is dropped and the price is lower |
| Build cash | 03: US$5,600-16,200 to sellable, likely US$9,000-12,000 (no trademark, little language help). 04: inside a ¥6.3M year-1 cost model | **¥1.0-2.7M, base ¥2.0M (US$12,700)** to sellable (§7) | Merges 03's lines with 04's legal, security, trademark and contractor costs |
| Channel order | 02 ranks auction houses first (reach). 04 ranks free tools and search first, auctions fourth | **04's order for year-1 targets.** Auctions and marketplaces are the lever for the high case | 02 ranks by reach; 04 ranks by what one founder can deliver in year 1. Auction deals have long cycles |
| Training frequency | 02 and 04: "yearly". 01: set by each authority; Iwate moved to once every 2 years | "Yearly in most places; frequency set locally" | 01 read the current Rules ([MOE R7 2_1_4](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_4.pdf)) |
| Saitama filing | Re-assessment: LoGo e-filing. 01: e-mail accepted; LoGo not seen | E-mail | 01 read the current page ([Saitama](https://www.pref.saitama.lg.jp/a0706/doubutu-touroku/teikihoukoku.html)) |
| Local company | All files: none needed at launch. 03 adds that an EU/EEA or UK seller makes the privacy rules easiest | **No Japanese company at launch** | §9 |

---

## 1. Decision in one page

**Verdict: maybe. Worth a cheap, staged test with hard gates. Not worth more until breeders pay.**

**New score: 5/10** (re-assessment: 6/10). The deep dive made the pain more solid, but the prize smaller and the route harder. It would be a 6 if the founder reads Japanese and the October interviews show willingness to pay. It is a 4 if neither holds.

**The case for it.**

- **The duty is national, in force and checked.**
  - Sale, rental, exhibition and 譲受飼養 registrants must keep a 13-item animal ledger for 5 years and file 様式第十一の二 with monthly counts by 30 May (Act Art. 21-5; Rules Arts. 10-2, 10-3) ([e-Gov Act](https://laws.e-gov.go.jp/law/348AC1000000105); [e-Gov Rules](https://laws.e-gov.go.jp/law/418M60001000001)).
  - The keeping Standards add a daily check log, a breeding log with lifetime litter limits, health and caesarean certificates and staff ratios, all kept 5 years ([e-Gov Standards](https://laws.e-gov.go.jp/law/503M60001000007)).
  - 28,857 registrations carry the ledger and report; 13,347 of them are dog and cat breeders ([MOE R7 2_1_1](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_1.pdf)).
- **Inspectors find exactly these gaps.** In a November 2023 national sweep of about 1,400 breeder sites, 665 broke the law. 496 had ledger defects and 314 had breeding-log defects. By August 2025, 92 of 384 re-inspected ledger cases were still not fixed ([MOE council paper 資料2](https://www.env.go.jp/council/content/i_10/000357242.pdf)).
- **Inspections are frequent and rising:** 23,914 on-site inspections at 20,215 sites in FY2024, up from 19,135 in FY2023 ([MOE R7 2_1_3](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_3.pdf); [MOE R6 2_1_3](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r06/2_1_3.pdf)).
- **Nobody sells software for it.** About 45 searches found only free prefecture templates, filing routes, the state chip portal, generic POS, kintone builds and English breeder apps (02). The real competitor is a free Excel sheet.
- **The build is small.** Forms, an event ledger, date rules and Excel/PDF output. No authority offers a filing API, so there is no integration risk (01). One useful integration exists: the chip database's bulk CSV.
- **No Japanese company is needed.** Japanese cards (Visa, Mastercard, JCB, Amex) work on a foreign Stripe account ([Stripe](https://docs.stripe.com/payments/cards/supported-card-brands)). A foreign seller owes no consumption tax until its Japanese sales pass ¥10M ([NTA](https://www.nta.go.jp/publication/pamph/pdf/0024003-087_01.pdf)).

**What the deep dive changed** (compared with the re-assessment at 6/10):

- **Smaller prize.** Base ARR is about **¥13M at month 36, not ¥21M**. Boarding sites were dropped (no ledger or report duty). The buyers are tiny: in the Fukuoka register 84% of sites are individuals and the median dog and cat seller declares about 10 animals (02, own count of [Fukuoka's register](https://www.pref.fukuoka.lg.jp/contents/animalhandlingbusiness-type1-inspection.html)). So the price falls to ¥14,800 a year.
- **New legal limit: the 行政書士 Act** (amended, in force 1 Jan 2026). No paid "we do your report" service. A written opinion is needed even for the self-serve report generator ([JEMCA](https://www.jemca.or.jp/wp-content/uploads/2026/01/gyoiseisyoshihoukaisei.pdf)).
- **Formal sanctions fell further.** FY2024 had 14 recommendations, 0 orders and 2 cancellations nationwide ([MOE R7 2_1_3](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_3.pdf)). No imposed ¥200,000 過料 was found. Buyers fear the inspection, not the fine.
- **Language is a fixed cost.** Buyers are rural, Japanese-speaking home businesses, many likely older (unverified). Support, interviews and outreach need a native speaker (about ¥100,000 a month in year 1, rising).
- **Bank transfer is hard from abroad.** A wire from Japan costs the buyer about ¥3,000 ([MUFG](https://www.bk.mufg.jp/tesuuryou/gaitame.html)). Cards only at first.
- **Stronger pain evidence** (the 2023 sweep), and **a real chip integration** (bulk CSV), which the re-assessment said did not exist.
- **Low cash need.** About ¥2.0M (US$12,700) to a sellable product; peak cash about ¥5.6-5.8M in the base case.

**What it is worth** (04's model; founder unpaid; my US$ conversion):

| | Low | Base | High (auction or marketplace partner) |
|---|---|---|---|
| Paying customers at month 12 / 36 | 57 / 221 | 174 / 684 | 390 / 1,703 |
| ARR at month 36 (Sep 2029) | ¥3.5M (US$22,000) | **¥13.0M (US$82,000)** | ¥36.0M (US$228,000) |
| Year-3 profit before founder pay | −¥1.5M | **+¥3.2M (US$20,000)** | +¥14.8M (US$94,000) |
| Peak cash need | ¥8.3M | **¥5.6M (US$35,000)** | ¥6.6M |
| Operating break-even | not within 36 months | month 28 (Jan 2029) | month 20 (May 2028) |

- **Japan alone is a side business.** It becomes a living only in the high case, or with other segments and Taiwan added (§11).
- **Exit:** about 1-2× ARR, so ¥13-26M in the base case ([BigIdeasDB](https://bigideasdb.com/state-of-saas-valuations-2026), asking prices).

**Against the owner's criteria.**

- **Free state tools:** not a reason to reject. The state gives blank templates and filing forms only. Totals from the ledger, warnings, the inspection view, the chip CSV and an audit trail are left undone (§4).
- **Small market:** about 25,000 obliged sites, 13,347 breeders, 684 customers in the base case. Acceptable at this build cost; the cap is the price tiny home businesses will pay, not the count.
- **Incumbents:** none. The substitute is a free Excel sheet. That is an opening, but also the price anchor.
- **Build:** MVP feature-complete in about 4 weeks and sellable in about 8 with Claude Code and parallel agents; about ¥2.0M cash (§7).
- **Company:** none needed in Japan at launch. Stripe from the founder's company works; Paddle would add 10% tax for no benefit (§9).

**Key conditions.**

1. **Japanese capacity.** The founder reads Japanese, or hires a native contractor in week 1. Every screen, form, call and LINE message is Japanese.
2. **Willingness to pay**, shown in 25 interviews by 30 October: at least 5 of 20 breeders would pay ¥980 or more a month, and 3 agree to pilot.
3. **A written opinion** that a self-serve report generator inside a subscription does not breach the 行政書士 Act.
4. **The selling company sits in the EU/EEA or the UK** if possible. Japan treats both as having equivalent privacy law, so customers need no buyer consent to use a foreign tool ([PPC](https://www.ppc.go.jp/enforcement/cooperation/cooperation/sougoninshou/)).
5. **For more than a side business:** one auction house or marketplace partner (the high case).

**Do this first** (3 weeks, about ¥0.3-0.5M, my estimate):

1. Hire the Japanese contractor. Run 20 breeder and 5 shop interviews. Pre-sell founding pilots at ¥9,800 for the first year.
2. Get the written 行政書士 Act opinion and a short privacy note.
3. Let the agents build the MVP in parallel. Tools cost about ¥30,000-60,000 a month, so building before the gate risks little.
4. **Gate on Fri 30 Oct 2026** (§13). Spend on the lawyer's full work, the security test and marketing only after it.

---

## 2. Why now: the law and enforcement

**Be honest about timing.** The duty is not new. The ledger and report scope dates from 1 June 2020, the keeping Standards from 1 June 2021, breeding limits from 1 June 2022 and staff ratios fully from 1 June 2024 (01). There is no "new law" rush. The case for now is different:

- **The 2023 sweep and its 2025 follow-up** put record-keeping at the top of MOE's breach list ([MOE 資料2](https://www.env.go.jp/council/content/i_10/000357242.pdf)).
- **Pressure moves down the trade chain.** On 19 September 2024 MOE asked auction houses and pet shops to check each puppy's birth date (teeth, weight, caesarean certificate) before buying (same source, p. 4). Clean breeder records now have value to the buyer.
- **Inspections rose 25%** from FY2023 to FY2024 (above).
- **New keeping standards for other mammals** (rabbits, hamsters, guinea pigs and others) are expected to be promulgated in autumn 2026 and to apply from about spring 2027 ([MOE 答申案の概要](https://www.env.go.jp/council/content/i_10/000418179.pdf)). They do not change the ledger or report, but add rules a records tool can track (01).
- **The 1 April - 30 May 2027 report window** is a fixed selling date eight months away.
- **AI-agent building** makes a market of a few thousand small buyers worth serving.

### Who is obliged

- **Type-1 animal businesses** (第一種動物取扱業者): anyone handling mammals, birds or reptiles as a business must register with the prefecture or designated city. There is no size threshold (Act Art. 10) ([e-Gov Act](https://laws.e-gov.go.jp/law/348AC1000000105)).
- **Ledger and report** apply to sale, rental, exhibition and 譲受飼養 registrants (Art. 21-5; Order Art. 2). Boarding, training and auction-only registrants are exempt from these two, but keep the Standards' logs (01).
- **Dog and cat sellers** carry extra duties: health and safety plan, the 8-week sale bar, microchips, breeding limits and staff ratios (Arts. 22-2 to 22-6, 39-2 to 39-6).
- **Type-2 handlers** (non-profit shelters that rehome) keep a per-animal ledger but file no report (Art. 24-4; Rules Art. 10-10).

### What must exist, and when

| Duty | Deadline or frequency | Basis | Penalty |
|---|---|---|---|
| Animal ledger, 13 items: breed, breeder, birth date, acquired from and when, sold or handed to and when, how the counterparty's legality was checked, selling staff, face-to-face explanation and signed confirmation, rental details, death date and cause. Per animal for dogs and cats; per breed for others | As events happen; keep 5 years; electronic allowed | Act 21-5(1); Rules 10-2 | 過料 up to ¥200,000 (Art. 49) |
| Annual report 様式第十一の二: held on 1 April; new, sold or handed over, and dead **by month**; held on 31 March; 5 kinds (dogs, cats, other mammals, birds, reptiles). One per registration category in Tokyo | Period April-March; **file by 30 May** | Act 21-5(2); Rules 10-3 | 過料 up to ¥200,000 (Art. 49) |
| Breeding log; copy handed on with each dog or cat sold to another business | Each mating and birth; keep 5 years | Standards 2(6)ハ, ニ | Order route* |
| Breeding limits: dogs at most 6 litters, mating up to age 6 (7 with proof of fewer than 6 litters); cats mating up to age 6 (7 with proof of fewer than 10) | Each mating | Standards 2(6)ホ, ヘ ([MOE guide](https://www.env.go.jp/nature/dobutsu/aigo/2_data/pamph/r0305a/03_6.pdf)) | Order route |
| Daily facility check and daily animal count and condition log | Daily; keep 5 years | Standards 2(1)イ(3), 2(7)ム | Order route |
| Trade record (waived if the animal ledger is kept) | Each trade; 5 years | Standards 2(7)エ | Order route |
| Yearly vet health check for dogs and cats held 1 year or more; caesarean certificates | Yearly; each caesarean; 5 years | Standards 2(4)ハ, 2(6)チ, リ | Order route |
| Staff ratio: per keeper at most 20 dogs (15 breeding) or 30 cats (25 breeding) | Ongoing | Standards 2(2) | Order route; registration-refusal ground |
| 18-item face-to-face explanation before a consumer sale, with signed confirmation; B2B document with receipt | Each sale | Act 21-4; Rules 8-2; Standards 2(7)ホ, ヘ | Order route |
| No sale or display of a dog or cat bred by the seller before 57 days of age (50 for six native breeds) | Each sale | Act 22-5 ([MOE checklist p.7](https://www.env.go.jp/nature/dobutsu/aigo/2_data/pamph/r0305a/02.pdf)) | Order route |
| Microchip fitting, then registration on the MOE database (¥400 online, ¥1,400 paper); change of owner | Within 30 days, or before handover if earlier | Act 39-2, 39-5, 39-6 ([MOE chip page](https://www.env.go.jp/nature/dobutsu/aigo/pickup/chip.html); [Mie](https://www.pref.mie.lg.jp/SHOKUSEI/HP/p0015300021.htm)) | Order route (my reading) |
| Registration renewal | Every 5 years; apply in the 2 months before expiry; health centres in principle send no notice ([Saitama guide p.7](https://www.pref.saitama.lg.jp/documents/281787/doutoriminasamahe260831.pdf)) | Act 13 | Trading unregistered: fine up to ¥1,000,000 (Art. 46) |
| Responsible-person training, and briefing all staff on it | Set by each authority; yearly in most places | Act 22; Standards 2(7)コ | Order route |
| Change and closure notices | Within 30 days | Act 14, 16 | Fine up to ¥300,000 / 過料 up to ¥200,000 |

\* "Order route": recommendation (勧告), publication, then an order (命令) under Art. 23; breaking an order carries a fine up to ¥1,000,000 (Art. 46). Any breach is also a ground to cancel the registration or suspend business for up to 6 months (Art. 19). Refusing or obstructing an inspection: fine up to ¥300,000 (Art. 47). Full table with 30 duties in [01](01-law-and-requirements.md#duty-by-duty-table).

### Who supervises and how hard

- **67 authorities** (47 prefectures and 20 designated cities), plus some core cities by delegation (Kawagoe, Kawaguchi, Koshigaya, Kurume) ([MOE R7 2_1_2](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_2.pdf); [Saitama](https://www.pref.saitama.lg.jp/a0706/doubutu-touroku/teikihoukoku.html)). The work is done by health centres and animal welfare centres. MOE writes the rules but does not inspect.

| Measure (type-1 businesses) | FY2023 | FY2024 |
|---|---|---|
| On-site inspections | 19,135 | 23,914 |
| Sites inspected | 15,034 | 20,215 |
| Recommendations (勧告) | 15 | 14 |
| Orders (命令) | 31 | 0 |
| Suspensions | 1 | 0 |
| Cancellations | 4 | 2 |

Sources: [MOE R6 2_1_3](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r06/2_1_3.pdf); [MOE R7 2_1_3](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_3.pdf).

- About 40% of sites got at least one inspection in FY2024 (20,215 / 51,198, my arithmetic). Intensity varies: Nagano 63%, Hyogo 44%, Aichi 34%, Saitama 26%, Kyoto 14% (01, from the same tables).
- **What inspectors ask for:** the logs kept 5 years, the ledger, the breeding log, certificates and staff-number papers. MOE says failing any checklist item "can be the subject of an administrative measure" ([MOE checklist](https://www.env.go.jp/nature/dobutsu/aigo/2_data/pamph/r0305a/02.pdf)). Okayama City asks to see the records "in a form that can be viewed at once" (すぐ閲覧できる形) ([Okayama City](https://www.city.okayama.jp/kurashi/0000016268.html)).
- **The report numbers are watched.** A rise in dog or cat deaths can trigger an order to file vet post-mortem certificates (Act 22-6; [Saitama guide p.7](https://www.pref.saitama.lg.jp/documents/281787/doutoriminasamahe260831.pdf)). Journalists have added up the reports to count deaths in the trade ([Saitama assembly record](https://www.pref.saitama.lg.jp/e1601/gikai-gaiyou/h2812/h080.html)).
- **Soft on filing.** In 2015 more than 2,200 dog and cat sellers had not filed; prefectures relied on reminders ([参議院 190-7](https://www.sangiin.go.jp/japanese/joho1/kousei/syuisyo/190/syuh/s190007.htm)). No imposed 過料 for the ledger or report was found (unverified).

### How the report is filed today

| Authority | Channels | Source |
|---|---|---|
| Tokyo | Two LoGo web forms (23 wards and islands; Tama), one Excel file per registration category; post; counter | [Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html) |
| Kumamoto | LoGo form taking an uploaded file (doc, xls, pdf or even jpg) | [Kumamoto](https://www.pref.kumamoto.jp/soshiki/30/167649.html) |
| Chiba | ちば電子申請サービス or paper | [Chiba](https://www.pref.chiba.lg.jp/eishi/pet/doubutsu/animal-business.html) |
| Saitama Pref., Sendai, Hiroshima City | E-mail (Hiroshima City also fax); post; counter | [Saitama](https://www.pref.saitama.lg.jp/a0706/doubutu-touroku/teikihoukoku.html); [Sendai](https://www.city.sendai.jp/dobutsu/oshirase/r7_teikihoukoku.html); [Hiroshima City](https://www.city.hiroshima.lg.jp/living/pet-doubutsu/1021301/1026247/1023072.html) |

- **No API anywhere.** Software can only compute the numbers and produce the Excel or PDF; the user submits (01).
- **Counting rules** are mostly settled by filled-in examples. "New" includes births and breeding parents brought in; "out" includes sales, gifts, retirements and moves to another own site; stillbirths and the owner's own pets are excluded; a year with no animals still needs a zero report ([Tokyo example](https://www.hokeniryo.metro.tokyo.lg.jp/documents/d/hokeniryo/teikihoukoku-kisairei2); [Aomori example](https://www.pref.aomori.lg.jp/soshiki/kenko/dobutu/files/20210108kisaireiteikihoukoku.pdf)). Splitting animals between two registrations at one site is still open (unverified).
- **2027 date trap.** 30 May 2027 is a Sunday. The local-government holiday rule may move the deadline to Monday 31 May (my reading of 地方自治法 Art. 4-2(4)), but authorities publish "30 May" even on weekends ([Kumamoto](https://www.pref.kumamoto.jp/soshiki/30/167649.html)). Remind for 30 May.

### Still moving

- **Other-mammal keeping standards:** council report draft July 2026; promulgation expected autumn 2026; in force about spring 2027; one-year transition for cage sizes ([MOE 答申案の概要](https://www.env.go.jp/council/content/i_10/000418179.pdf); [66th subcommittee](https://www.env.go.jp/council/14animal/66_1_00001.html)). Not yet in the e-Gov text on 10 Oct 2026 (promulgation unverified).
- **The Act's 5-year review.** Sapporo's training slides show "2026: amendment?" ([Sapporo](https://www.city.sapporo.jp/inuneko/main/documents/r7_houritsu_kisoku.pdf)). No bill was found (unverified). A 2025 government answer favoured the existing registration and penalty system over new licensing ([参議院 217](https://www.sangiin.go.jp/japanese/joho1/kousei/syuisyo/217/touh/t217089.htm)).
- **Chip CSV format** changes from time to time (v2.6 in September 2025, v2.7 in July 2026) (01).
- **No sign of repeal.** The duty has only been widened (2020) and tightened (2021-2024).

---

## 3. Customers

All counts are at 1 April 2025 from [MOE R7 2_1_1](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_1.pdf) unless marked. Category registrations overlap: one site can hold several.

| Segment | Count | Duty load | Role in this plan |
|---|---|---|---|
| **Dog and cat breeders** | **13,347** | Heaviest: ledger, report, breeding log and limits, daily logs, chips, staff ratio, certificates, sale documents | **Beachhead** |
| Dog and cat sellers that do not breed (shops, brokers) | 3,442 | Ledger, report, chips, sale documents, 2-day observation, buyer-side checks | Second: Shop plan |
| Sellers of other animals only (birds, reptiles, small mammals) | 5,615 | Ledger by breed, report; new mammal standards from about 2027 | From month 9 |
| Exhibition (zoos, animal cafés, petting farms) | 4,541 | Ledger, report, daily logs | From month 9 |
| Rental | 1,622 | Ledger, report | From month 9 |
| 譲受飼養 (paid take-in homes) | 290 | Ledger, report | From month 9 |
| **Registrations with ledger + report duty** | **28,857** | | about 24,000-26,000 distinct sites (02 estimate) |
| Boarding (pet hotels, salons) | 32,576 | Daily logs, trade record, health certificates; no ledger or report | Later "light" plan |
| Training | 5,234 | Daily logs, trade record | Later |
| Type-2 shelters that rehome | 1,844 | Per-animal ledger | Free plan (goodwill) |
| All type-1 sites | 51,198 | | |

- **Flat market.** Sale registrations have stayed at 20,700-22,400 since 2014; breeders at about 13,300 (same source). Feared exits under the staff ratios have not shown up in the register (02).
- **Where breeders are.** Outside the big cities: Saitama 736, Chiba 721, Aichi 702, Fukuoka Pref. 560, Ibaraki 515, Hyogo 430, Gunma 426. Tokyo has 5,387 sites but only 625 breeders ([MOE R7 2_1_2](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_2.pdf)).
- **Volume proxy.** About 603,000 dogs and cats were newly chip-registered in FY2024 ([MOE R7 2_7](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_7.pdf), 02's arithmetic).

### Buyer profile

- **Tiny and mostly individual.** In Fukuoka Prefecture's register, 84% of 1,229 sites are individuals. The median dog and cat seller declares 10 animals; 55% hold 10 or fewer; 7% hold more than 50 ([Fukuoka](https://www.pref.fukuoka.lg.jp/contents/animalhandlingbusiness-type1-inspection.html), 02's count). Kagoshima City: 24% companies, median 10 animals ([Kagoshima City](https://www.city.kagoshima.lg.jp/kenkofukushi/hokenjo/seiei-jueki/kurashi/dobutsu/toriatsukaigyo/index.html), 02's count).
- **A bigger commercial tier** sells through auctions. In a 2020 survey, members over the staff-ratio limit kept on average 28.9 breeding dogs or 42.6 breeding cats ([digitalpr](https://digitalpr.jp/r/41597)).
- **How they comply today.** Free prefecture Excel or Word templates, or paper; filing by post, counter, e-mail or LoGo ([Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html); [Kobe example](https://www.city.kobe.lg.jp/documents/15108/teikihoukoku~kisairei~.pdf); [Kyoto breeding ledger](https://www.pref.kyoto.jp/doubutsu/documents/05nisyucyoubo.pdf)).
- **Pain is proven by inspectors, not by complaints.** No forum threads, videos or blog posts complaining about the ledger were found (02, unverified that none exist).

### Jobs to be done (in the buyer's words; 03)

1. "When the inspector comes, show 5 years of records in a minute."
2. "Enter a litter once; update the ledger, breeding log and chip deadlines together."
3. "Tell me before I mate a dam whether she is still allowed."
4. "Print the explanation sheet at a sale, close the ledger, and stop me if the puppy is too young or not chipped."
5. "Get the April report right without counting sheets by hand, and tell me where to send it."
6. "One reminder list: chips, vet checks, the report, training, renewal."
7. "Stop using paper without retyping my old ledger."
8. Shops: "Track the 2-day observation and chip change of owner when I buy at auction."

### What they already pay

| Item | Price | Source |
|---|---|---|
| Registration, per category, every 5 years | ¥15,000 (Aichi); renewal ¥10,000 (Saitama) | [Aichi](https://www.pref.aichi.jp/site/gyoute/75190.html); [Saitama guide p.16](https://www.pref.saitama.lg.jp/documents/281787/doutoriminasamahe260831.pdf) |
| Responsible-person training, per person | ¥1,000 (Kanagawa, Aichi) to ¥2,500 (Tokyo) | [Kanagawa](https://www.pref.kanagawa.jp/osirase/1594/awc/dealers/kensyuu2025.html); [Aichi](https://www.pref.aichi.jp/soshiki/doukan-c/doutorikennsyuukai.html); [Tokyo R8](https://www.hokeniryo.metro.tokyo.lg.jp/documents/d/hokeniryo/2026-07-14-152055-700) |
| Chip registration, per animal | ¥400 online, ¥1,400 paper | [MOE chip page](https://www.env.go.jp/nature/dobutsu/aigo/pickup/chip.html) |
| Marketplace success fee | ¥15,000 per sale (ブリーダーズナビ, 2015) | [Makuake](https://www.makuake.com/project/breedersnavi/) |
| 行政書士 fee for a registration | ¥100,000-180,000 (one firm; weak source) | [鮎澤パートナーズ](https://ayusawa-partners.jp/column/pet-doubutsu-toriatsukai) |
| Sole-trader accounting app | freee ¥980-1,980 a month; Money Forward ¥10,800 a year | [atsoho](https://atsoho.com/apps/compare/freee-kaikei-vs-mf-cloud-kakuteishinkoku) (third party) |
| One puppy | about ¥100,000-300,000 | [Makuake](https://www.makuake.com/project/breedersnavi/) |

**Reading.** Breeders pay for what keeps them trading. Nobody pays for a ledger today. ¥14,800 a year sits in the accounting-app band and is 5-15% of one puppy. Willingness to pay is plausible but unproven until the interviews (unverified).

---

## 4. Competition

| Alternative | What it does | Price | What it means for us |
|---|---|---|---|
| **Prefecture Excel/Word templates** (Tokyo, Saitama, Kyoto, Kobe, Ibaraki, Sendai and others) | Blank ledger, logs and report form, with filled-in examples | Free | **The real competitor.** No totals from the ledger, no checks, no reminders, one sheet per form ([Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html)) |
| LoGo forms, Chiba e-filing, e-mail, post | Take the finished report | Free | Take the numbers; do not make them. Our output feeds them |
| **MOE chip database** (run by the Japan Veterinary Medical Association) | Chip registration and changes; bulk CSV with 4 file types | ¥400 per animal online | No seller ledger, report or deadline list. **Integrate:** export its CSV ([MOE chip page](https://www.env.go.jp/nature/dobutsu/aigo/pickup/chip.html)) |
| Generic POS and booking (Square, STORES, RESERVA) | Sales, bookings | ¥0-15,000 a month | None of the legal records. Possible later link ([Square JP](https://squareup.com/jp/ja/solutions/pet-services); [Aurant](https://aurant-technologies.com/?p=27904)) |
| kintone builds | Low-code, could be built to do it | At least ¥18,000 a month (10-user minimum) plus build | Fits a chain; too dear for a home breeder ([hatenabase](https://hatenabase.jp/?p=15816); [Aurant guide](https://aurant-technologies.com/blog/kintone-pet-shop-management/)) |
| Vet record systems (Vetect, anivet and others) | Clinic records | Not checked | Not aimed at breeders; possible partner or entrant (02) |
| **Puppy marketplaces** (みんなのブリーダー: 3,854 breeders, 12,148 puppies listed) | Listings; own 35-item breeder screening | Success fees | **Biggest hidden risk.** They hold breeder data and could add a free ledger. No such feature found ([min-breeder.com](https://www.min-breeder.com/)) |
| **Auction houses** (25 registered) | Their own lot records | Commission | Under MOE's 2024 birth-date request. Partner or risk ([MOE 資料2](https://www.env.go.jp/council/content/i_10/000357242.pdf)) |
| Foreign breeder apps (BreederHQ, BreederBuddy, Pawfolio and others) | Litters, health, buyers | Free to about US$15 a month | English only; no Japanese forms or rules ([G2](https://www.g2.com/products/breederhq/discuss); [Capterra](https://www.capterra.co.uk/software/1079350/BreederBuddy); [Pawfolio](https://pawfoliobreeder.com/pricing)) |
| "Pet management software" at ¥80,000-200,000 a year (jisaku.com) | Claimed | Claimed | Product names look invented. Ignore ([jisaku.com](https://jisaku.com/posts/retail-pet-shop-it-pc)) |
| Big chains' in-house systems | Probably ledger, report, chips | — | Not a target (unverified) |

**What the free tools leave undone** (the opening):

1. **Totals from the ledger.** The template makes the user count by hand, by month and by kind, and reconcile 5 + 6 − 7 − 8 = 9.
2. **Warnings.** Litter limits, age 6 and 7 rules, the 57-day sale bar, staff ratios, chip deadlines, vet checks, renewal (no notice is sent).
3. **Inspection view.** Five years of records, shown at once.
4. **Chip CSV.** The portal's bulk route needs a CSV built by hand from a manual; the product can export it.
5. **Audit trail.** No-delete history and late-entry reasons, which protect against "false entry" claims.

**Conclusion.** No local product does the job. The likely reason the gap is so clean is that the buyers are small, rural and not tech-savvy (02). That cuts both ways: no competitor, but a hard sale. The likely future competitor is a platform, not a start-up. Get there first, and offer platforms an export.

---

## 5. Product

### Positioning

> 「検査で慌てない帳簿」 — inspection-ready records for dog and cat breeders, with the 30 May report done in one click.

- **Sell the records, not the report.** The report is a by-product of the ledger. The message is the 2023 sweep: about 35% of breeders inspected had ledger defects and 22% breeding-log defects ([MOE 資料2](https://www.env.go.jp/council/content/i_10/000357242.pdf)).
- **A tool, not a service.** The user enters the data, checks the totals and files the report. The app never files and never "prepares documents for" the user. This keeps it on the safe side of the 行政書士 Act (§9).
- **Welfare-compliance framing.** Evasion-resistant by design: birth-date changes after a sale or after day 56 need a reason and show in the inspection pack; no feature hides deaths. The 2023 sweep found 50 cases of breaking the 8-week rule, for example by changing birth dates (same source).
- **Phone first, Japanese only, large type.** The user is usually one person doing every role, in a kennel.

### Users (03)

| Role | Who | Main jobs | Rights |
|---|---|---|---|
| Owner (代表者) | The registered breeder or shop owner | Set up registrations; approve the report; pay; export | Everything; billing; users |
| Responsible person (動物取扱責任者) | One per site, often the owner | Daily checks, sales, breeding, training records | All but billing and users |
| Staff (従業員, family helpers) | Keepers, shop staff | Daily log, births, deaths, arrivals, prepare a sale | Cannot delete; cannot finalise the report |
| Read-only viewer (v1) | Vet, partner, accountant | View | Time-limited |
| Inspector (not a user) | Health-centre staff | Sees the screen or takes the PDF pack | Never logs in |
| Trade partner (later) | Auction, shop, marketplace | Receives a per-puppy record | Export only |
| Our support | The founder or contractor | Fix problems | Only with logged, time-limited customer consent |

### Feature map (03, reconciled)

| Area | MVP (paid launch 7 Dec 2026) | v1 (by 28 Feb 2027) | Later |
|---|---|---|---|
| Set-up | Business, sites, registrations; site address → receiving authority (67 authorities plus delegated core cities); duty engine switches records on and off by category (R1-R5); staff with hours | Registration certificate photo read by AI | Multi-site chain admin |
| Animal ledger | Dogs and cats one per animal; others by breed lot; all 13 items with legal fallbacks; events (born, acquired, sold, handed over, rented, returned, died); counterparties; photos; correction history; **no hard delete inside 5 years**; opening-balance wizard; "own pet" flag (R6-R12) | **Excel import** of Tokyo 都参考様式1-4 and common sheets (R13); **photo import** of paper ledgers (AI reads, user confirms each row); bulk litter actions | Chip-reader shortcuts |
| Sales | Sale wizard with age, chip and observation checks; 18-item explanation sheet; signature on screen or photo of the signed paper; B2B document and receipt; certificates handed over; buyer-side intake with supplier check and birth-date plausibility (R23-R26, R53) | Display card; ad footer and sign data; breeding-log copy for B2B buyers (R25, R27, R33) | POS link (Square, STORES) |
| Breeding | Matings, litters, lifetime litter count, dog and cat limits; caesarean certificates; 57/50-day sale lock (R28, R30-R32, R34) | Heat and due-date calendar; past litters with proof photos | Pedigrees (not a legal duty) |
| Health and staff | Yearly vet check due dates and certificates; daily check log; **staff-ratio warning incl. the mixed dog/cat table**; 2-day observation timer (R29, R35, R36, R38) | Monthly self-check against the MOE checklist; training and staff-briefing records (R45, R48) | Vet system links |
| Microchips | 15-digit chip number with format check; fitting and registration deadlines; handover block (R39, R40, R42) | **MOE bulk CSV export**, versioned format (R41) | Direct submission only if MOE opens an API |
| Annual report | Per-registration computation, reconcile block, death-rate warning, 様式第十一の二 Excel and PDF, addressee from the authority table, channel helper, submission record, reminders from 1 April (R14-R22) | **Free public report calculator** (upload an Excel ledger, see monthly totals; no account) | E-mail sending where accepted |
| Inspection | Inspection pack for a date range: one merged PDF plus Excel (R12, R47) | Offline read-only view (PWA cache) | Time-limited inspector link, if wanted |
| Reminders | E-mail; dashboard task list | LINE messages; weekly digest | SMS |
| Admin duties | Registration expiry | Renewal window, change and closure timers, health and safety plan versions (R43-R46) | — |
| Account | Roles; audit log; billing; free tier up to 5 animals; full export; archive after cancellation (R52) | Read-only viewer; LINE Login | Partner feeds |
| New rules | Rules carry effective dates | Other-mammal standards switched on when in force (R54) | Type-2 shelter mode; boarding/training light plan |

**Why this cut.** The MVP must beat the free template on its three gaps: totals, warnings and the inspection view. The chip CSV waits because its columns are unconfirmed. Import waits because the December pilots can start from an opening balance; it must be live before the spring push. LINE waits because e-mail is enough for 15-20 pilots (03).

**The legal acceptance list.** The 54 testable requirements R1-R54, each traced to an article, are in [01 §PRODUCT REQUIREMENTS](01-law-and-requirements.md#product-requirements). Treat them as the acceptance checklist. The R-numbers above point into it.

### Key flows (03)

1. **First set-up: under 20 minutes for 15 animals.** Sign up → registration data (two registrations if sale plus exhibition) → postal code picks the receiving authority → the app shows the duties it switched on → staff and hours (ratio shows at once) → opening balance, with each dam's past litters → optional last-year monthly counts for the death-rate comparison.
2. **Mating, birth and litter.** Log the mating; the app checks the dam's age and lifetime litters and blocks a 7th dog litter or an over-age mating. Log the birth (live, stillborn, caesarean papers). One ledger record per live puppy. Deadlines appear: 57-day bar, chip fitting and registration, dam's next eligibility.
3. **Buying in.** Chip reader in keyboard mode types the number ([Datamars](https://pet.datamars.com/wp-content/uploads/2025/03/DS001097-datasheet-animal-ID.pdf)). Supplier registration number, legality check, birth-date plausibility, B2B papers. The 2-day observation timer and the 30-day change-of-owner deadline start.
4. **Sale to a consumer: under 5 minutes.** Checks (age, observation, chip, vet certificates) block with a plain reason. The 18-item sheet is generated from the animal and a vet-reviewed breed library. The customer signs on screen or on paper (photo). Buyer details and selling staff recorded. The event lands in the right month of the report.
5. **Sale to a business.** Same, with the B2B document and receipt; in v1 also the breeding-log copy and a per-puppy record the auction can check.
6. **Death.** Date and cause both mandatory; death-rate monitor updates.
7. **Daily check: 30 seconds.** Tick cleaning, disinfection, maintenance; "abnormal" needs a remark. Missed days show as gaps; entries more than 7 days late need a reason.
8. **Annual report: under 15 minutes per registration.** From 1 April: computed grid per kind and month; reconcile (opening + new − out − dead = closing) blocks "final" on a mismatch and lists the causes; death-rate and zero-report checks; owner confirms; Excel and PDF with 令和 dates; channel helper (Tokyo shows the right LoGo link; e-mail authorities get a draft; post authorities a print-ready PDF and address); the user records the filing and the filed copy is frozen.
9. **Inspection visit.** "立入検査モード": registration and sign data, staff ratio, ledger, breeding log, daily logs, certificates, last report with filing proof, in large type. One tap makes a merged PDF.
10. **Leaving.** Full archive download (PDF, Excel, CSV, attachments). A cheap "archive only" plan keeps records readable for 5 years.

### Screens (03)

1. Home: today's tasks, today's daily check, animals on hand, staff-ratio badge.
2. Animals list with filters and a "+" sheet for birth, purchase, sale, death.
3. Animal detail: timeline, documents, litters and eligibility for dams, edit history.
4. Breeding board: one row per female, traffic light.
5. Sale wizard (5 steps).
6. Counterparties.
7. Daily check with a month calendar of gaps.
8. Staff and the ratio calculation, step by step.
9. Chip tasks (and CSV export in v1).
10. Annual report: grid as on the form, reconcile panel, warnings, downloads, channel helper, filing record.
11. Inspection mode.
12. Documents.
13. Settings.
14. Imports (v1): upload, column mapping, row-by-row confirmation.

Design rules: Japanese only, one column, 16-18 px base font, text labels on every action, no hidden swipes, everything printable on A4.

---

## 6. Technical design

### Stack (03)

One plain monolith that one founder and his agents can run:

- **App:** Python, Django 5.2 LTS, server-rendered pages with HTMX and a little Alpine.js; Tailwind. No single-page app. The Django admin is the content tool for the authority table, breed library and explanation texts.
- **Database:** PostgreSQL 16/17, managed; row-level security as a second wall between tenants; JSONB for report snapshots and rule parameters.
- **Jobs:** a Postgres-backed queue (Procrastinate or Django-Q2), no Redis. Nightly task generation; reminders at 07:00 Japan time; monthly postal-code and holiday refresh; weekly law-text watch.
- **Documents:** openpyxl fills a copy of the official 様式第十一の二 Excel; WeasyPrint with Noto Sans JP renders A4 PDFs; pypdf merges the inspection pack; a tested function gives 令和 dates.
- **Rules engine:** plain Python functions with effective dates and parameters (litter limits, sale age, other-mammal standards). Every rule has passing and failing "time-travel" tests written from the R-numbers **before** the code. This is where AI-written bugs would hurt most.
- **Files:** S3-compatible storage in Tokyo, encrypted, per-business keys for signatures and certificates, copies in Osaka.
- **Japanese text:** NFKC normalisation for full-width digits; Excel import reads .xlsx, .xls and CSV in UTF-8 or Shift_JIS.
- **Deploy:** Docker Compose on AWS Lightsail Tokyo behind Caddy; managed PostgreSQL; CI with unit, rule, golden-file, tenant-isolation and Playwright tests.
- **No native app** (two stores, second codebase), **no kintone** (per-user licences, weak rule logic), **no microservices**.

### Data model in one paragraph

Business → Sites → Registrations (category, number, dates, dog/cat-seller and breeds flags) → Authority. Dogs and cats are `Animal` rows; other kinds are `BreedLot` rows with counted events. **Everything that happens is an `Event`** (born, acquired, sold, given, rented, returned, retired, moved, died) with date, quantity, counterparty and staff. Reports are queries over events, frozen as a hashed snapshot once filed; later edits show "report differs from ledger" instead of changing the filed copy. Plus `Mating`/`Litter`, `ChipRecord`, `HealthCheck`, `DailyCheck`, `Sale`, `Document`, `Task`, `RuleSet`, `ContentItem` and an append-only, hash-chained `AuditLog`. Full model in [03 §Data model](03-product-and-tech.md#data-model).

### Data sources and integrations

| Source | Use | Access | Cost |
|---|---|---|---|
| MOE chip database bulk procedure (一括手続) | Chip registration and changes (v1) | User uploads our CSV; 4 types; manual v2.7 with breed and coat-colour codes; columns unconfirmed ([manual](https://reg.mc.env.go.jp/owner/file/%E4%B8%80%E6%8B%AC%E6%89%8B%E7%B6%9A%E7%94%A8CSV%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E4%BD%9C%E6%88%90%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB%28%E4%BB%A4%E5%92%8C8%E5%B9%B47%E6%9C%88%29.pdf)) | ¥400 per registration, paid by the user |
| Report filing channels | Channel helper | Web forms, e-mail, post; no API (§2) | Free |
| Prefecture templates and filled-in examples | Output layout; golden tests; import mapping | Tokyo Excel as the golden file; Aomori and Nagano examples ([Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html)) | Free |
| Authority table | Site → authority, addressee, channels | Our own curated table, about 70-90 rows, each with a source URL and "checked on" date | Founder time |
| Japan Post KEN_ALL | Postal code → municipality | CSV download ([Japan Post](https://www.post.japanpost.jp/zipcode/download.html)) | Free |
| Cabinet Office holidays | Deadlines | CSV ([syukujitsu.csv](https://www8.cao.go.jp/chosei/shukujitsu/syukujitsu.csv)) | Free |
| e-Gov law data | Weekly law-change watch | API ([e-Gov](https://laws.e-gov.go.jp/api/1/lawdata/348AC1000000105)) | Free |
| LINE Messaging API (v1) | Reminders | Official account: free 200 messages a month; Light ¥5,000 for 5,000 ([ligla](https://ligla.jp/blog/line-official/cost/)); an unverified account is open to any company ([LINE](https://www.lycbiz.com/jp/column/line-official-account/guideline/20240805)) | By volume |
| Claude API (v1) | Read photographed paper ledgers | Opt-in per upload; user confirms every row ([pricing](https://platform.claude.com/docs/en/about-claude/pricing)) | About US$0.01-0.03 a page (03 estimate) |
| Stripe | Subscriptions, Japanese receipts | §9 | About 6% of an annual plan |

### Security and privacy

- **Privacy law (APPI).** Every breeder holding buyers' names and addresses is covered; we handle that data for them as a contractor (委託) ([e-Gov APPI](https://laws.e-gov.go.jp/law/415AC0000000057)). A foreign vendor is a "third party in a foreign country" (Art. 28). **If the seller is an EU/EEA or UK company, no buyer consent is needed**, because the PPC designates both as equivalent ([PPC](https://www.ppc.go.jp/enforcement/cooperation/cooperation/sougoninshou/)). Elsewhere, use APPI-standard contract terms and publish country information ([PPC offshore guideline](https://www.ppc.go.jp/personalinfo/legal/guidelines_offshore)). We are also directly subject to APPI (Art. 171, my reading).
- **Breach reporting** to the PPC: a quick report in about 3-5 days and a full report within 30 days (60 if malicious) ([MIC guideline](https://www.soumu.go.jp/main_content/000937727.pdf)).
- **Controls (MVP):** TLS and HSTS; Argon2 passwords; optional TOTP or e-mail one-time codes; roles plus row-level security with cross-tenant tests; envelope encryption for signatures and certificates; hash-chained audit log; daily snapshots, point-in-time recovery, Osaka copies, monthly restore test; support access only with logged consent; an external web-application test before paid launch.
- **Agents never see real customer data.** They work on a synthetic breeder (20 dams over 3 years).
- **Data we do not collect:** ID cards, bank details. Photo import to a US AI processor is opt-in and disclosed.

### Liability design (03, 04)

- The user is the filer. The reconcile block and the confirmation step protect against a false report (過料 up to ¥200,000, Act 49).
- Terms cap liability at 12 months of fees; no liability where warnings were ignored. Each rule shows "checked by [expert] on [date]". 30-day rule-update promise.
- No "approved by the Ministry" claims; 「行政書士監修」 only once a named 行政書士 has reviewed the content.

### Hosting and running cost (03; US$ a month, my estimates)

| Customers | Total | Per customer | Share of revenue at ¥14,800 a year |
|---|---|---|---|
| 50 | about 32-100 | 0.65-2.00 | 8-24% |
| 300 | about 165-265 | 0.55-0.88 | 7-11% |
| 1,000 | about 400-610 | 0.40-0.61 | 5-7% |

Lightsail instances cost US$5-44 a month and managed databases US$15-230 ([AWS](https://aws.amazon.com/lightsail/pricing/)). People, not servers, are the cost.

---

## 7. Development steps

### Basis

- The founder builds with Claude Code and **4-6 agents in parallel**, each in its own git worktree, against frozen interfaces. The founder writes specs, reviews every merge and owns the golden files. No hired developers.
- **Japanese is the bottleneck, not code.** A native reviewer checks every screen, form, PDF and e-mail. If the founder does not speak Japanese, the contractor also interprets interviews.
- **Spec first.** Week 1 freezes the data model, the event model, the rule interface, the report fixtures and the synthetic breeder.
- **Start Monday 12 October 2026.**

### Agent work streams (from week 2)

| Stream | Scope | Done when |
|---|---|---|
| A. Platform | Auth, roles, tenancy, row-level security, audit log, settings, billing webhooks, export | Cross-tenant tests pass; no hard delete possible; export works |
| B. Ledger core | Animals, breed lots, events, counterparties, attachments, opening balance, corrections | R6-R12 tests pass |
| C. Rules engine | Duty engine; breeding limits; sale age; observation; chip deadlines; vet checks; staff ratio with the mixed table; death rate; report period and holiday rule | Every rule has passing and failing fixed-date tests |
| D. Documents | 様式第十一の二 Excel and PDF; ledger, breeding and daily-log exports; explanation sheet; B2B document; inspection pack; 令和 dates | Cell-by-cell match with the Tokyo golden Excel; PDFs pass the Japanese reviewer |
| E. Mobile UI | All MVP screens; Japanese copy catalogue | Playwright flows 1-9 pass on a phone viewport |
| F. Tasks and reminders | Task generation, e-mail, dashboard order (LINE in v1) | Time-travel test fires every reminder on the right day |
| G. QA and security (throughout) | Synthetic breeder generator; nightly "full year" run; threat model; dependency scan; restore script | Nightly run green; restore drill documented |
| H. Content (founder + AI, expert-reviewed) | Authority table; channel table; breed library (top 40 dog and 20 cat breeds); help texts; disclaimers | Every row sourced and dated; breed texts vet-reviewed |

A separate review agent checks each pull request against the spec and the security checklist before the founder's review. Merge daily. Real pilot data never enters agent sessions.

### Calendar

| Week (start) | Product, legal, pilots | Engineering | Checkpoint |
|---|---|---|---|
| 1 (12 Oct) | Hire the Japanese contractor; book 25 interviews; engage a 行政書士 who handles animal-business registrations (domain expert, content review, Act opinion) and a lawyer (terms, APPI); collect the Tokyo, Aomori and Nagano files; ask a Japanese contact for the chip CSV manual | Repo, CI, hosting; data and event model; rule interface; synthetic breeder; golden report fixtures | **Spec freeze Fri 16 Oct** |
| 2 (19 Oct) | Interviews 1-12; expert settles the open counting questions; authority table v0 | Streams A-F in parallel; G throughout | |
| 3 (26 Oct) | Interviews 13-25; collect 3-5 real ledgers from willing pilots; landing page and waitlist | First end-to-end run on synthetic data | **Gate: Fri 30 Oct** (§13) |
| 4 (2 Nov) | Expert reviews rules and the generated report; vet starts the breed library | Integration; bug bash; Japanese copy pass 1 | **MVP feature-complete about 6 Nov** |
| 5 (9 Nov) | **Dry-run pilots:** 3-5 breeders re-create FY2025 and compare with what they filed in May 2026 | Fixes; 100-animal performance | Report matches, or each difference explained |
| 6 (16 Nov) | Lawyer drafts terms, privacy policy, data-handling terms, 特商法-style page; copy pass 2 | Encryption, audit chain, restore drill; JPY billing | **LC1:** rules and outputs signed off by the expert |
| 7 (23 Nov) | External security test (3-4 days) | Fix findings; accessibility pass | |
| 8 (30 Nov) | Lawyer signs off; pricing page; 3 short how-to videos | Re-test; monitoring | **LC2:** legal documents approved; no open high or critical findings |
| 9 (7 Dec) | **Paid launch** to pilots and waitlist at the founding price | Support | **Sellable** |
| 10-12 (14 Dec-3 Jan) | Japan closes about 28 Dec-3 Jan; light support | v1: Excel import, LINE, chip CSV (once the manual is in hand) | |
| Jan 2027 | Pilots use the app daily; measure the daily-log burden | Photo import; free report calculator; renewal and training reminders; display card | Calculator live by mid-January |
| Feb 2027 | Search pages for 定期報告 書き方 and 様式第11の2; partner talks | **v1 release**; other-mammal toggles if promulgated | **v1 live by 28 Feb** |
| Mar 2027 | Sales push; report-season support plan | April load test | |
| 1 Apr-31 May 2027 | **Report season** | Hot fixes only | Count reports made and filed |

**If time slips:** drop on-screen signatures (keep the photo of the signed paper) and training records. Never drop the no-delete history, tenant isolation, the reconcile block, expert sign-off or the security test. If paid launch slips past mid-January, still ship import and the report wizard before 1 April. The spring window is the one date that matters (03).

### MVP definition of done (03)

1. For at least 3 pilot breeders, the app's FY2025 report matches what they filed in May 2026, or every difference is explained and the expert agrees the app is right.
2. A breeder with 15 animals finishes set-up in under 20 minutes without help, in at least 4 of 5 tries.
3. A consumer sale takes under 5 minutes and stores the 18-item sheet and a confirmation.
4. Rules for R28-R31, R35, R36, R38 and R40 have passing and failing tests, including R31's breeding-limit cases.
5. The 様式第十一の二 Excel matches the Tokyo template cell by cell; PDFs print on A4 with 令和 dates.
6. The inspection pack contains all 12 parts in R47 and opens offline.
7. Reminders fire on the right day in a time-travel test, including the 30/31 May 2027 weekend case.
8. Tenant-isolation tests pass; no hard delete; restore drill done; no open high or critical security findings.
9. Terms, privacy policy and data-handling terms approved by a Japanese lawyer; **the 行政書士 Act opinion received and not negative**; rules signed off by the expert; breed texts reviewed by a vet.
10. At least 5 pilots say they will pay ¥14,800 a year.

### Budget to a sellable product (founder unpaid; reconciled; ¥)

| Item | Low | Base | High | Basis |
|---|---|---|---|---|
| Claude Max and extra API, 3 months | 40,000 | 100,000 | 140,000 | US$100-200 a month ([Claude pricing](https://claude.com/pricing)) plus spill-over (03) |
| Hosting, domain, e-mail during build and pilot | 16,000 | 30,000 | 40,000 | 03 |
| 行政書士 (domain expert, content review, Act opinion) and lawyer (terms, privacy, data terms, APPI) | 300,000 | 600,000 | 800,000 | 03: ¥190,000-710,000; 04: ¥600,000; terms alone ¥200,000-350,000 at one firm ([tangram](https://tangram.gr.jp/blog/detail/20260616114948/)) |
| Vet review of the breed library | 50,000 | 100,000 | 150,000 | 03 (unverified) |
| Japanese contractor, 2 months (interviews, copy review) | 100,000 | 200,000 | 300,000 | 04: about ¥2,500 an hour (unverified) |
| External security test with re-test | 300,000 | 500,000 | 700,000 | ¥200,000-1,000,000 for small sites ([IT-trend](https://it-trend.jp/security_assessment_service/article/61-7052)) |
| Pilot incentives and interview gifts | 50,000 | 60,000 | 80,000 | 03 |
| Trademark | 0 (defer) | 150,000 | 150,000 | 04 (unverified) |
| Contingency 15% | 130,000 | 260,000 | 350,000 | |
| **Total** | **about ¥1.0M (US$6,300)** | **about ¥2.0M (US$12,700)** | **about ¥2.7M (US$17,000)** | my sums |

Not included: marketing (§8), the founder's own company abroad and the Tokyo virtual office (§9).

**First-year running costs after launch** (03, converted): hosting and services, Claude Max, a security re-test, legal updates and expert hours come to about ¥0.8-2.1M (US$4,850-13,370). The Japanese contractor (about ¥1.2M a year) and marketing (¥2.0M) are on top. 04's model puts total year-1 costs at about ¥6.3M in the base case (§10).

---

## 8. Go-to-market

### Pricing (reconciled)

Prices are the full price. While the seller is a foreign company below Japan's ¥10M consumption-tax (JCT) threshold, **no JCT is added** (§9). The page says so: 「表示価格がお支払い総額です（当社は消費税の免税事業者のため消費税はかかりません）」.

| Plan | Who | Price | Includes |
|---|---|---|---|
| **無料 Free** | Hobby breeders, try-out | ¥0, up to 5 dogs or cats | Per-animal ledger, report totals, Excel export. Lead magnet |
| **ブリーダー Breeder** | Breeders, small shops, single-site exhibitors | **¥14,800 a year** (default) or ¥1,480 a month | Unlimited animals; breeding log with limits; daily log; **staff ratio**; chip deadlines (CSV from v1); 様式第十一の二 Excel/PDF; inspection mode; LINE support |
| **ショップ Shop / multi-site** | Pet shops, chains, large kennels | **¥49,800 a year per site** or ¥4,980 a month | Breeder features plus several staff accounts, several sites with per-site reports and a combined task list, and trade records |
| **Archive only** | Leavers who must keep 5 years of records | Low yearly fee (my suggestion ¥3,000; unverified) | Read and export only |
| 初期データ移行 Import help | Customers with an Excel ledger | Free in the first season for annual buyers; then ¥9,800 | We map **their** Excel columns. Typing from paper is done by the customer or a partner 行政書士. Include in the lawyer's question list |
| ~~定期報告パック ¥4,980~~ | — | **On hold** | Re-add only if the written 行政書士 Act opinion clears a separately priced self-serve report product |

**Launch offers (04):**

- **Founding price ¥9,800** for the first year of the Breeder plan, for the first 100 paying customers, until 31 May 2027. It sets a deadline inside the report window.
- **Partner code:** 20% off the first year for customers sent by an auction house, an association or a 行政書士; the partner gets 20% of the first year (market practice unverified).

**Why these numbers.** ¥14,800 a year is about ¥40 a day. It sits beside freee at ¥980-1,980 a month and Money Forward at ¥10,800 a year ([atsoho](https://atsoho.com/apps/compare/freee-kaikei-vs-mf-cloud-kakuteishinkoku)). The Shop plan is under a third of the cheapest kintone build (¥18,000 a month, [hatenabase](https://hatenabase.jp/?p=15816)). Annual billing is the default because card fees have a fixed part (§9). After discounts and plan mix, revenue per customer is about ¥14,000 in year 1, ¥16,500 in year 2 and ¥18,000 in year 3 (04's estimate).

### Channels, in priority order for year 1

| # | Channel | Why | Motion | Share of new customers, year 1 (04 estimate) |
|---|---|---|---|---|
| 1 | **Free tools and spring search** | Every search for the ledger or report returns prefecture pages, not vendors (02) | Free report calculator, breeding-limit checker, template converter; 20 Japanese articles reviewed by a 行政書士; search ads February-May; self-serve trial → card | 35% |
| 2 | **Direct outreach** | Many kennels publish a website and a business e-mail; some authorities publish registers | E-mail to published business addresses is allowed with an opt-out ([総務省](https://www.soumu.go.jp/main_sosiki/joho_tsusin/d_syohi/pdf/m_mail_pamphlet.pdf)); letters (¥110 postage, [総務省](https://www.soumu.go.jp/main_content/000979809.pdf)); phone and LINE follow-up by the contractor; Instagram messages | 25% |
| 3 | **行政書士 partners** | They register businesses (¥100,000-180,000, [鮎澤](https://ayusawa-partners.jp/column/pet-doubutsu-toriatsukai)) and are the only ones allowed to sell done-for-you filing | Recruit 10-20 who advertise 動物取扱業 work; 20% referral fee, free account, co-branded guide; they sell their own set-up service | 15% |
| 4 | **Auction houses and ペットパーク流通協会** | MOE's 2024 birth-date request makes clean breeder records useful to them ([MOE 資料2](https://www.env.go.jp/council/content/i_10/000357242.pdf)); the association surveyed 1,109 breeders in 2020 ([digitalpr](https://digitalpr.jp/r/41597)) | One pilot auction with a per-lot "records kept in [app]" export; aim for one signed partner by June 2027 | 10%, rising. **The lever for the high case** |
| 5 | Breeder communities | Breeders sell on Instagram and YouTube (unverified) | Short videos: "inspection in 5 minutes", "how to fill 様式第11の2" | 10% |
| 6 | Puppy marketplaces | みんなのブリーダー lists 3,854 breeders ([min-breeder.com](https://www.min-breeder.com/)); its operator settled a JFTC case in 2018 over restricting breeders' listings elsewhere ([JFTC](https://www.jftc.go.jp/houdou/pressrelease/h30/may/180523.html)) | Offer a badge or data export; partner-or-threat; never depend on it | 0-5% |
| 7 | Training sessions, vets, insurers, Interpets | Training reaches every site, but public bodies are unlikely to endorse a product (unverified) | Offer a free "how to fill the report" guide; Interpets visit in year 1, booth in year 2 ([Interpets](https://interpets.jp.messefrankfurt.com/)) | 0% in year 1 |

**Sales motion.** Self-serve Japanese site and checkout; 30-day trial without a card; human help in Japanese by LINE, e-mail and phone (contractor, about 40 hours a month in year 1); onboarding by Excel upload from v1. Trust signals: 行政書士監修 badge, Tokyo virtual office and 050 number, real testimonials, Japanese terms under Japanese law. Price framing: 「1日あたり約40円」. Renewal drivers: 5 years of records live in the app, yearly report, new rules.

### Selling calendar (04)

| When | What happens | What we do |
|---|---|---|
| Oct-Feb | Responsible-person training season (Tokyo online 2 Nov 2026-31 Jan 2027; Aichi 6 venues 13 Nov-16 Feb) ([Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/documents/d/hokeniryo/2026-07-14-152055-700); [Aichi](https://www.pref.aichi.jp/soshiki/doukan-c/doutorikennsyuukai.html)) | Awareness: articles and small search ads on 研修 and 帳簿 keywords; pilots; founding price |
| 28 Dec-3 Jan | New Year closure | No outreach |
| Feb-Mar | Fiscal year closes 31 March | "Import your year now" campaign |
| **1 Apr-30 May** | **Report window** | **Peak conversion.** Calculator push; ads at full budget; founding price ends 31 May |
| Early April | Interpets Tokyo | Visit (year 1) |
| Late Apr-early May | Golden Week | Send reminders before it, not during |
| Jun-Sep | Quiet; inspections continue all year | Partners, testimonials, product |

### Marketing budget, year 1 (Nov 2026-Oct 2027): ¥2.0M (US$12,700) plus partner fees (04)

| Item | ¥ |
|---|---|
| Two founder trips to Japan (kennels, a 行政書士, an auction; one timed with Interpets) | 700,000 |
| Search ads (Google, Yahoo! JAPAN), mostly Feb-May | 350,000 |
| Social ads (Instagram, Facebook, YouTube) | 250,000 |
| Japanese content: 20 articles, 4 short videos | 250,000 |
| Postal letters (about 1,500) | 200,000 |
| Partner co-marketing | 150,000 |
| LINE, webinar and e-mail tools | 60,000 |
| Contingency | 40,000 |
| **Total** | **2,000,000** |

Partner fees add about 6% of new-customer revenue. The Japanese contractor (about ¥100,000 a month in year 1, ¥150,000 in year 2, ¥220,000 in year 3) is costed separately. Years 2 and 3 marketing: ¥2.6M and ¥3.0M.

### First 90 days (from Mon 12 Oct 2026; day 90 is Sat 9 Jan 2027)

- **Days 1-14 (12-25 Oct): validate and set up.**
  - Hire the Japanese contractor (outreach, interviews, support).
  - Start 20 breeder and 5 shop interviews by video or phone. Find them through kennel websites, Instagram and the Fukuoka and Kagoshima City registers. Ask about tools, the last inspection, time spent on the report, and price. Pre-sell pilots at ¥9,800.
  - Engage the 行政書士 (content review, Act opinion, first referral partner) and the lawyer (terms, privacy, data terms).
  - Stripe in JPY with Japanese checkout; apply for a Payoneer JPY receiving account; Tokyo virtual office and 050 number (about ¥12,000 a month, 04 estimate); J-PlatPat name check.
  - Japanese landing page with a waitlist. Spec freeze on 16 Oct.
- **Days 15-42 (26 Oct-22 Nov): gate, build, recruit.**
  - **Gate on 30 Oct** (§13).
  - MVP feature-complete about 6 Nov; dry-run pilots from 9 Nov.
  - Recruit 15-20 pilot users; enter their real data.
  - Draft the first 8 articles; the 行政書士 reviews them. Book the security test.
  - Pitch partners: ペットパーク流通協会, two auction operators, 全国ペット協会 and 3-5 行政書士 offices, with a short Japanese deck and demo video.
- **Days 43-70 (23 Nov-20 Dec): first paid customers.**
  - Security test and fixes; terms and privacy policy live.
  - **Paid launch 7 Dec** at the founding price. Convert 10-15 pilots by 20 Dec.
  - Outreach wave 1: 300 e-mails to published kennel addresses and 300 letters, with phone follow-up.
  - 3 testimonials with photos. Small search ads while the Tokyo online training runs.
- **Days 71-90 (21 Dec-9 Jan): quiet build.**
  - Japan is closed about 28 Dec-3 Jan; no outreach.
  - Build v1: Excel import, LINE, chip CSV (if the manual is in hand), calculator.
  - Prepare the spring campaign. **Day-90 review** against §13.

---

## 9. Payments, company and legal

### Payments: Stripe from the founder's company, in yen, no JCT added

- **Cards work.** Stripe accepts JCB (Japan's own brand) on accounts in the EEA (except Iceland), the UK, the US and others; 3-D Secure for JCB works on EEA and UK accounts ([Stripe card brands](https://docs.stripe.com/payments/cards/supported-card-brands)).
- **Fees on an Irish/EU Stripe account:** international cards 3.15% + €0.25, plus 2% currency conversion, plus 0.7% Stripe Billing ([Stripe IE pricing](https://stripe.com/ie/pricing)). On a ¥14,800 annual plan that is about ¥910 (6.1%); on a ¥1,480 monthly charge about ¥131 (8.8%) (04's arithmetic). Hence annual billing by default.
- **Paddle is worse here.** Paddle charges 10% Japanese consumption tax on B2B and B2C sales ([Paddle tax table](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)) and takes 5% + 50¢ ([Paddle pricing](https://www.paddle.com/pricing)). The buyer pays ¥16,280 instead of ¥14,800 for the same net to us. A merchant of record mainly files tax; below ¥10M there is no tax to file. Revisit only once the seller becomes taxable in Japan.
- **Konbini, PayPay and Stripe's Japanese bank transfer** need a Japan-based Stripe account, so a Japanese company ([Stripe konbini](https://support.stripe.com/questions/enabling-konbini-payments-for-japan-based-stripe-accounts); [Stripe Japan pricing](https://stripe.com/jp/pricing)). Business buyers do not need them.
- **Bank transfer is the gap.** Japanese B2B still prefers bank transfer ([Infcurion survey](https://digitalpr.jp/r/116809)). A wire abroad costs the buyer about ¥3,000 at MUFG, 20% of the plan ([MUFG](https://www.bk.mufg.jp/tesuuryou/gaitame.html)). Airwallex's JPY account is SWIFT-only and Wise UK gives no JPY local details ([Airwallex help](https://help.airwallex.com/hc/en-gb/articles/900001759623-Which-currencies-can-I-get-a-Global-Account-in-and-what-payments-can-I-receive); [Wise](https://wise.com/gb/account/jpy-account)). **Test Payoneer's local JPY receiving account** ([Payoneer](https://www.payoneer.com/local-receiving-accounts/)); whether a foreign SaaS can use it is unverified. Otherwise: cards first; bank-transfer buyers wait for a Japanese company.
- **Some Japanese issuers may decline foreign-merchant charges** (unverified). Use 3-D Secure and a Japanese FAQ.

### Tax

- **Self-serve SaaS is a "consumer-type" electronic service.** The foreign seller, not the buyer, owes JCT, but only once its Japanese taxable sales pass ¥10M in the base period (normally two years earlier) ([NTA pamphlet](https://www.nta.go.jp/publication/pamph/pdf/0024003-087_01.pdf)). Base-case receipts are ¥2.9M in 2027, ¥7.6M in 2028 and ¥10.5M in 2029, so the seller is taxable from 2031 at the earliest (04's model). In the high case it would be taxable from 2029, which is why the high case bills from a Japanese company from month 13.
- **Buyers lose nothing.** Most are tax-exempt or use simplified taxation, so a JCT-free price is simply cheaper. Buyers on the standard method can deduct a monthly charge under ¥10,000 under the small-amount rule until 30 Sep 2029 ([NTA](https://www.nta.go.jp/publication/pamph/shohi/kaisei/202304/02.htm)); on the annual plan their net cost equals a taxed competitor's.
- **If the foreign company ever registers:** it needs a Japanese tax administrator, cannot use simplified taxation, and pays close to 10/110 of receipts; a tax agent costs about ¥300,000-600,000 a year (04 estimate, unverified).
- **No withholding tax** on a SaaS subscription: it is a service fee, not a royalty. Word the terms as 「本サービスの利用権」, not a software licence ([鮎澤パートナーズ](https://ayusawa-partners.jp/column/it-kenkyukaihatsu-zeigaku)).
- **Receipts:** a plain 領収書 with the foreign company's name and "消費税：免税事業者のため対象外". Track Japanese receipts by year and half-year; act at ¥7M.

### Company: no Japanese company at launch

**Recommendation.** Sell from the founder's existing company abroad, ideally in the EU/EEA or the UK (privacy equivalence, §6). Open a Japanese 合同会社 (GK) only when one of these fires:

1. Japanese receipts approach ¥10M a year. A new GK with capital under ¥10M starts with two JCT-exempt years (04's reading; confirm with a 税理士).
2. A channel partner insists on a Japanese counterparty, pay-by-invoice or konbini, or too many buyers refuse cards.
3. The Ministry of Justice starts pressing small foreign online sellers (next point).
4. The founder hires a full-time employee in Japan.

In the base case none is likely before month 24-30.

**The grey area: "continuous transactions in Japan".** A foreign company that continuously transacts business in Japan must register as a foreign company with a representative resident in Japan (Company Act Arts. 817-818); failure can bring a 過料 of up to ¥1M ([MOJ](https://www.moj.go.jp/MINJI/minji07_00275.html); [RSM Shiodome](https://shiodome.co.jp/js/blog/12027)). In 2022 the ministries asked 48 foreign IT companies to register ([Bengo4](https://www.bengo4.com/c_23/n_14775/)). No case against a small foreign SaaS was found (unverified). The risk is low but real. Mitigation: self-serve website, no Japanese office or staff, contractor on a service contract with the foreign company; a GK removes the risk.

**Real costs of a Japanese company.**

| Route | One-off cost | Time | Notes |
|---|---|---|---|
| GK, official fees, electronic articles | **about ¥75,000** (registration tax 0.7% of capital, minimum ¥60,000, plus sundries) | — | No notary needed for a GK ([創業手帳](https://sogyotecho.jp/company_fee/)) |
| GK, official fees, paper articles | about ¥112,000 (adds ¥40,000 stamp duty) | — | same |
| KK (株式会社), official fees | about ¥196,000 electronic / ¥233,000 paper (registration tax minimum ¥150,000; notary ¥30,000-50,000) | — | same |
| **In person, Japanese-speaking resident**, with a cheap filing service (freee 登記おまかせ ¥50,000) | about ¥125,000 for a GK (my sum) | 1-2 weeks (unverified) | [freee](https://www.freee.co.jp/kb/kb-launch/kaisyasetsuritsu-costs/) |
| **In person, foreign founder** | Official fees, plus a Japanese registered address, a Japanese account (or paid agent) to receive capital, a home-country notarised signature certificate, all papers in Japanese | — | Not really cheaper in practice ([Kaizen](https://kaizencpa.com/download/jp/Japan%20Goudou%20Kaisha%20Registration%20Procedures%20and%20Fees%28JP%29.PDF)) |
| **Remote, full service for a foreign owner** (one firm's 2026 list, net of JCT) | **about ¥1,178,000 (US$7,500)**: formation ¥400,000; government fees and sundries ¥70,000; capital-receiving agent ¥88,000; tax registrations incl. the Bank of Japan foreign-investment report ¥200,000; bank-account support ¥420,000 (40% refunded if the bank refuses) | about 4-5 weeks plus bank time | Banks may refuse a virtual-office address; the firm advises ¥5M+ capital for the bank ([Kaizen](https://kaizencpa.com/download/jp/Japan%20Goudou%20Kaisha%20Registration%20Procedures%20and%20Fees%28JP%29.PDF)) |
| Remote, formation only (same firm, without tax registrations and bank help) | about ¥558,000 | about 4-5 weeks | Cheaper 司法書士 firms exist; their prices for foreign owners were not collected (unverified) |

- A non-resident can be the sole member and representative; no resident director has been needed since 2015 ([RSM Shiodome](https://shiodome.co.jp/js/blog/889)). Minimum capital is ¥1.
- **Ongoing GK costs: about ¥0.7-0.8M (US$4,500-5,000) a year.** Per-capita local tax ¥70,000 even at a loss ([freee](https://www.freee.co.jp/kb/kb-launch/kaisyasetsuritsu-costs/)); tax accountant about ¥400,000 ([meetsmore](https://meetsmore.com/services/tax-accountant/media/270)); virtual office about ¥186,000 (¥15,500 a month); bank and sundries ¥50,000-100,000. Plus corporate tax on profit, and a transfer-pricing basis for fees to the founder's company (unverified).
- **No visa is needed** for an online business. The business-manager visa now needs ¥30M of capital and a full-time local employee ([solution-supporter](https://solution-supporter.jp/keiei-kanri-visa-500man-kaisei/)).
- **Until then, a Japan presence costs about ¥12,000 a month** (virtual office and 050 number, 04 estimate). The founder's own company abroad is budgeted at about ¥40,000 a month in 04's model (depends on the country, unverified).

### Legal documents and rules

- **Documents (all Japanese):** 利用規約 as standard terms; privacy policy; data-handling terms (個人データの取扱いに関する覚書); a 特商法-style seller page; a plain "what the app does and does not do" page. Budget ¥600,000 one-off (lawyer plus 行政書士 content review and opinion), then about ¥30,000 a month (04).
- **Standard terms** bind if shown and agreed, but unfair clauses can be struck out (Civil Code Art. 548-2) ([e-Gov](https://laws.e-gov.go.jp/law/129AC0000000089)). Business buyers are not "consumers" under the Consumer Contract Act ([e-Gov](https://laws.e-gov.go.jp/law/412AC0000000061)). Choose Japanese law and the Tokyo District Court.
- **行政書士 Act.** From 1 Jan 2026 only 行政書士 may prepare filings for others for pay "under any name"; penalties now reach the company ([総務省](https://www.soumu.go.jp/main_sosiki/jichi_gyousei/gyouseishoshi/index.html); [JEMCA](https://www.jemca.or.jp/wp-content/uploads/2026/01/gyoiseisyoshihoukaisei.pdf)). The ledger and logs are not filed, so they are outside it. The annual report is filed. A self-serve tool where the user enters his own data and makes his own report is probably his own preparation, as with self-filing tax software (my reading, unverified). One firm reports a ministry view that electronic data entry can count as "preparing" (unverified, [dsg.or.jp](https://dsg.or.jp/column/other-visas/21254/)). So: report inside the subscription only; no done-for-you service; no staff typing customers' paper ledgers into reports for a fee; done-for-you help through partner 行政書士 who bill the customer directly. **Get the written opinion in week 1.**
- **Insurance:** cyber and professional liability about ¥200,000 a year (unverified). **Trademark:** about ¥150,000 (unverified).

---

## 10. Financials

04's monthly model; month 1 = October 2026, month 36 = September 2029; founder unpaid unless stated; ¥ million.

**Main assumptions (base):** new customers 180 / 300 / 380 in years 1-3; 70% annual billing; renewals 72% first, 85% later; revenue per customer ¥14,000 / 16,500 / 18,000; marketing ¥2.0M / 2.6M / 3.0M; contractor ¥100k / 150k / 220k a month; legal ¥600k up front then ¥30k a month; security test ¥500k, retests ¥300k in months 15 and 27; payment fees 6.5% of cash in; no Japanese company. Seasonality puts 2.4× and 2.0× an average month's sales in April and May.

**Adjustment:** 04's model starts the contractor in month 3; this plan hires in week 1. That adds about ¥0.2M, so base peak cash need is about **¥5.8M** (my estimate).

### Scenarios

| Measure | Low | Base | High (partner; GK from month 13) |
|---|---|---|---|
| Paying customers at month 6 / 12 / 24 / 36 | 20 / 57 / 138 / 221 | 61 / 174 / 415 / 684 | 135 / 390 / 996 / 1,703 |
| ARR at month 12 / 24 / 36 | ¥0.7M / 2.0M / 3.5M | ¥2.6M / 7.2M / **13.0M** | ¥6.2M / 18.9M / 36.0M |
| Cash in, years 1 / 2 / 3 | ¥0.6M / 1.9M / 3.3M | ¥2.2M / 6.6M / 12.3M | ¥5.2M / 17.3M / 33.8M |
| Costs, years 1 / 2 / 3 | ¥4.8M / 4.4M / 4.8M | ¥6.3M / 7.3M / 9.1M | ¥8.8M / 15.6M / 19.0M |
| Year-3 profit before founder pay | −¥1.5M | **+¥3.2M (US$20,000)** | +¥14.8M (US$94,000) |
| Operating break-even | not within 36 months | month 28 (Jan 2029) | month 20 (May 2028) |
| **Peak cash need, founder unpaid** | ¥8.3M | **¥5.6M (US$35,000); about ¥5.8M with the earlier contractor** | ¥6.6M |
| Peak cash need with founder pay (¥250k a month in year 2, ¥400k in year 3) | ¥16.1M | ¥10.0M (US$64,000) | ¥7.6M |
| Acquisition cost per customer, years 1 / 2 / 3 | ¥24,500 / 16,400 / 13,900 | ¥14,500 / 12,400 / 12,200 | ¥11,500 / 11,600 / 11,800 |

### Base case by quarter (04)

| Quarter | New | Active (end) | Cash in | ARR (end) | Costs | Net | Cumulative |
|---|---|---|---|---|---|---|---|
| Oct-Dec 26 | 5 | 5 | 0.05 | 0.08 | 2.45 | −2.40 | −2.40 |
| Jan-Mar 27 | 56 | 61 | 0.59 | 0.90 | 1.27 | −0.68 | −3.07 |
| Apr-Jun 27 | 91 | 149 | 1.05 | 2.21 | 1.32 | −0.27 | −3.35 |
| Jul-Sep 27 | 28 | 174 | 0.47 | 2.56 | 1.24 | −0.78 | −4.12 |
| Oct-Dec 27 | 45 | 214 | 0.83 | 3.71 | 2.11 | −1.28 | −5.41 |
| Jan-Mar 28 | 85 | 283 | 1.79 | 4.92 | 1.70 | +0.08 | −5.32 |
| Apr-Jun 28 | 130 | 388 | 2.77 | 6.77 | 1.80 | +0.97 | −4.35 |
| Jul-Sep 28 | 40 | 415 | 1.25 | 7.23 | 1.64 | −0.39 | −4.74 |
| Oct-Dec 28 | 57 | 455 | 1.81 | 8.64 | 2.53 | −0.71 | −5.45 |
| Jan-Mar 29 | 108 | 533 | 3.30 | 10.13 | 2.17 | +1.13 | −4.32 |
| Apr-Jun 29 | 165 | 655 | 4.92 | 12.46 | 2.32 | +2.60 | −1.72 |
| Jul-Sep 29 | 51 | 684 | 2.23 | 13.00 | 2.05 | +0.18 | −1.53 |

October-December loses money every year (one-off costs, few sales). Keep a 6-month cash buffer each autumn.

### Sensitivity of the base case (04)

| Change | ARR month 36 | Year-3 profit | Peak cash | Break-even |
|---|---|---|---|---|
| None | ¥13.0M | +¥3.2M | ¥5.6M | month 28 |
| Price 20% lower | ¥10.4M | +¥1.0M | ¥7.4M | month 32 |
| 30% fewer new customers | ¥9.1M | −¥0.2M | ¥8.4M | not within 36 months |
| Renewals 60% / 75% | ¥11.6M | +¥2.0M | ¥6.0M | month 30 |
| Marketing 50% higher, same sales | ¥13.0M | +¥1.7M | ¥8.1M | month 31 |
| Japanese GK from month 22 | — | +¥2.7M | ¥6.9M | month 31 |

### Unit economics (base)

| Measure | Value |
|---|---|
| Acquisition cost | about ¥12,000-14,500 |
| First-year revenue net of fees | about ¥14,000-16,500 |
| Payback | about 12 months |
| Gross margin (after fees, hosting, support) | about 75-80% |
| Lifetime value (capped at 5 years) | about ¥65,000-70,000 |
| LTV / CAC | about 5 |

### What the numbers mean

- **The limit is the small, price-sensitive market, not the unit economics.** The base case reaches only 2.7% of obliged sites.
- **The base case has about 17% fewer customers than the market file's** (684 against 824), because it nets out churn and the late start. Revenue is only about 7% lower (¥13.0M against ¥14M) because of the Shop plan and monthly billing. Both are far below the re-assessment's ¥21M.
- **This is a side business.** ¥3.2M of year-3 profit does not pay a founder. A living needs the high case (an auction or marketplace partner) or the extra segments and Taiwan (§11).
- **The first spring decides it.** By 30 June 2027 the base case has about 150 paying customers and the low case about 50. That gap shows within 9 months.
- **Exit:** small SaaS listings ask a median 2.0× revenue ([BigIdeasDB](https://bigideasdb.com/state-of-saas-valuations-2026)); base about ¥13-26M (US$80,000-165,000), high about ¥36-100M. Likely buyers: a marketplace or auction operator, a pet-software or vet-software vendor (interest unverified). A Japanese buyer would prefer a Japanese entity.

---

## 11. Regional expansion

**Order: widen inside Japan first (same language, law and payments), then Taiwan, then maybe Korea.**

| Step | Market | Size | Fit and notes | When |
|---|---|---|---|---|
| 1 | Japan: exhibitors and rental | 4,541 + 1,622 registrations | By-breed ledger, report, daily logs; Breeder plan ([MOE R7 2_1_1](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_1.pdf)) | From month 9 |
| 1 | Japan: sellers of other animals | 5,615 | Same; the new mammal standards (about spring 2027) add rules to track ([MOE 答申案の概要](https://www.env.go.jp/council/content/i_10/000418179.pdf)) | From month 9 |
| 1 | Japan: boarding and training | 32,576 + 5,234 registrations | Daily logs and trade record only; a ¥980-a-month light plan (my estimate). Low pain | Year 2 |
| 1 | Japan: type-2 shelters that rehome | 1,844 | Per-animal ledger; **free** (goodwill; hedge against welfare criticism) | Year 2 |
| 2 | **Taiwan** | 3,733 valid licences on 10 Oct 2026: 1,845 breeding, 2,409 selling (overlapping), by 02's count of the open register ([data.gov.tw](https://data.gov.tw/dataset/97070)) | Closest analogue: 3-year sales record; quarterly chip-use report; lifetime litter limits ([Taipei law text](https://laws.gov.taipei/Law/LawSearch/LawArticleContent/FL014743), via search snippet). Needs Traditional Chinese. Business buyers self-account for 5% VAT; a foreign e-service seller registers only above NT$600,000 of consumer sales ([Kintsugi](https://trykintsugi.com/sales-tax-guides/apac/taiwan.md), third party, unverified). Entry cost about ¥1.0-1.5M; potential about ¥3-7M a year (04 estimates) | Prepare from month 18; launch month 24-30 if Japan is at or above base |
| 3 | South Korea | 2,010 producers, 3,114 sellers (2024) ([DailyVet](https://www.dailyvet.co.kr/?p=250744)) | Monthly trade report to local government, possibly through a state system (draft rules, [DailyVet](https://www.dailyvet.co.kr/?p=179481); final form unverified). Needs Korean and a separate check | Third choice; decide after a check |

Other countries were not checked.

---

## 12. Risks and mitigations

| Risk | Likelihood / impact | Mitigation |
|---|---|---|
| **Breeders will not pay**; the free Excel is "good enough" | High / high | 25 interviews before the main spend; founding price; free tier and calculator; lead with the inspection, not the report; kill tests on 30 Oct 2026 and 30 Jun 2027 |
| **行政書士 Act** (amended 1 Jan 2026) catches the report generator | Medium / high | Self-serve only; report inside the subscription; no paid form-filling or report pack; written opinion in week 1; done-for-you only through partner 行政書士 |
| **A marketplace or auction adds a free ledger** | Medium / high | Approach them first as partners; offer a per-puppy export; win breeders early; 5 years of history as the moat |
| **Founder abroad, Japanese-only buyers** | Medium / medium-high | Native contractor from week 1; 行政書士 content review; every AI-drafted text checked by a native speaker; two trips a year |
| **Daily logging feels heavier than paper** → churn after one season | Medium / medium | 30-second daily check; bulk litter actions; photo import; measure time per task in pilots; renewal kill test |
| Older, offline users | Medium / medium | Large text; LINE reminders; printed quick guide; offline inspection PDF; phone support in April-May |
| Wrong totals lead to a false report | Low / medium | Expert sign-off on counting rules; dry-run against filed FY2025 reports; reconcile block; user confirms; liability cap |
| AI-written rule bugs | Medium / medium | Tests from the R-numbers before code; golden files owned by the founder; expert review |
| Chip CSV format unknown; MOE site blocks foreign access | Medium / low | Get the manual through a pilot; data-driven format; deadline tracker as fallback |
| State tool creep (the chip database holds some breeding data; prefectures move to e-forms) | Low-medium / medium | Integrate (CSV); focus on daily logs, breeding limits and the inspection view, which the state does not offer |
| Foreign-company registration (Company Act 817-818) | Low / medium | Self-serve; no Japanese office or staff; GK when a trigger fires |
| Crossing the ¥10M JCT threshold unnoticed | Low / medium | Track receipts by year and half-year; act at ¥7M |
| Card declines; payment-provider review of an "animal trade" customer base | Medium / low | 3-D Secure; Payoneer test; tell Stripe we sell software, not animals |
| Data breach or privacy complaint | Low / high | EU/UK seller entity; data-handling terms; Tokyo hosting; encryption; security test; breach plan; US AI processing opt-in |
| Reputation (the pet-sales trade is publicly criticised) | Medium / medium | Welfare-compliance framing; evasion-resistant design; free plan for shelters; no marketing that praises volume breeding |
| Law and form changes | Low / low-medium | Rules with effective dates; weekly e-Gov watch; 30-day update promise; new mammal standards as an upsell |
| Seasonal cash dips (Oct-Dec) | High / low | Annual prepayment; 6-month cash buffer each autumn |
| Exchange rate | Medium / low | Keep Japanese costs (contractor, ads) in yen; yearly price review |

---

## 13. Milestones and kill criteria

| When | Target (base) | Stop or change if |
|---|---|---|
| Fri 16 Oct 2026 | Spec frozen; contractor hired; 行政書士 and lawyer engaged; 25 interviews booked | — |
| **Fri 30 Oct 2026** (day 19) | 20 breeder and 5 shop interviews done; 行政書士 Act opinion in hand | **Stop or rethink if fewer than 5 of 20 breeders would pay ¥980+ a month, or fewer than 3 agree to pilot.** **Stop or redesign if the opinion says the self-serve report breaches the Act** |
| Fri 6 Nov | MVP feature-complete | — |
| Fri 13 Nov | Dry run: at least 3 pilots' FY2025 reports match or every difference is explained | Fix the counting rules before selling |
| Sun 22 Nov (day 42) | 15 pilot users with real data | If pilots will not enter their data, onboarding is wrong: fix before selling |
| **Mon 7 Dec** | Paid launch after LC1 and LC2 | Do not open paid plans before the legal review and the security test |
| Sun 20 Dec | 10-15 paying | — |
| Sat 9 Jan 2027 (day 90) | 10+ paying; 2+ 行政書士 partners; 1 auction or association in talks | Day-90 review: continue, change price, or stop |
| Sun 28 Feb 2027 | v1 live: Excel import, chip CSV, LINE, calculator | If v1 slips, ship import and the report wizard before 1 April regardless |
| Wed 31 Mar 2027 | 60 paying; one channel partner signed or piloting | — |
| **Wed 30 Jun 2027** | **150 paying** (end of the first report season) | **Kill or pivot if fewer than 50** (the low case). Pivot: a cheap report-only tool, or sell the code to a partner |
| 30 Sep 2027 | 170+ active; support under 2 hours per customer a year | — |
| Jun 2028 | First-year renewals 65% or more | **Kill if renewals are below 50%** |
| 30 Jun 2028 | 380+ active; ARR ¥6.5M+ | **If below 150 active, stop investing**; run for cash or sell |
| Early 2029 | Decide on the GK, Taiwan and founder pay | GK if Japanese receipts approach ¥10M a year or a partner needs it |
| 30 Sep 2029 | About 680 active; ARR about ¥13M | — |
| Any time | — | A marketplace or auction launches a free ledger, or MOE adds a seller ledger to the chip system: re-plan within 30 days |

---

## 14. Open questions to settle first

1. **Does the founder read and speak Japanese?** If not, the contractor line rises and a native support person is needed before April 2027.
2. **Where is the founder's company?** It decides Stripe fees, the bank-transfer route and the privacy route (EU/EEA or UK is easiest).
3. **Willingness to pay at ¥14,800 a year.** Only the October interviews can settle it.
4. **行政書士 Act:** is a self-serve report generator inside a paid subscription "preparation for others for pay"? Is Excel import help? Would a separate report pack be? Is the chip registration body a "public office"? (Written opinion.)
5. **Counting rules:** how to split animals between two registrations at one site; transfers between registrations; a returned rental animal; a retired breeder kept as a pet; zero reports; whether all authorities want one report per category as Tokyo does (01, 03).
6. **MOE chip CSV:** columns, encoding, row limits, log-in method; is a business account needed (01, 03)?
7. **Platforms:** will auction operators, みんなのペットオンライン or ペットパーク流通協会 partner or build their own? Do auctions already collect per-puppy data electronically (02, 04)?
8. **Payments:** can a foreign SaaS receive domestic yen transfers through Payoneer, and at what fee? How often do Japanese issuers decline foreign-merchant charges (04)?
9. **Inspection practice:** do inspectors accept a ledger on a tablet and an on-screen customer signature as 署名等 (01, 03)?
10. **Search demand:** volume and cost per click for 定期報告, 帳簿 and 繁殖台帳 keywords in March-May (02, 04).
11. **Breeder size nationally:** only Fukuoka and Kagoshima City were counted (02).
12. **Rule timing:** promulgation date of the other-mammal standards; any 2026-27 Act amendment touching the ledger, report or chips (01).
13. **Costs to confirm:** Japanese contractor rates (assumed ¥2,500 an hour), security-test quotes, insurance and trademark (04).

---

## 15. Next steps this week (Mon 12 - Fri 16 Oct 2026)

1. **Decide** who handles Japanese (founder or contractor) and which company sells (EU/EEA or UK if available).
2. **Hire the Japanese contractor** (about 40 hours a month). Write the interview script: current tools, last inspection, hours spent on the report, and a price test at ¥980 and ¥1,480 a month and ¥14,800 a year. Book 25 interviews from kennel websites, Instagram and the [Fukuoka](https://www.pref.fukuoka.lg.jp/contents/animalhandlingbusiness-type1-inspection.html) and [Kagoshima City](https://www.city.kagoshima.lg.jp/kenkofukushi/hokenjo/seiei-jueki/kurashi/dobutsu/toriatsukaigyo/index.html) registers.
3. **Shortlist 3 行政書士** who advertise 動物取扱業 registration. Brief one on a fixed fee: content review, the written Act opinion, and first referral partner. Brief a lawyer on the terms and the APPI note.
4. **Freeze the spec by Fri 16 Oct:** data model, event model, rule interface keyed to R1-R54, golden report fixtures from the [Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html), [Aomori](https://www.pref.aomori.lg.jp/soshiki/kenko/dobutu/files/20210108kisaireiteikihoukoku.pdf) and [Nagano](https://www.pref.nagano.lg.jp/shokusei/kurashi/aigo/aigo/toriatsukaigyo/documents/kisokuyousiki11-2kinyuurei.pdf) files, a synthetic breeder, and the repo's CLAUDE.md. Launch agent streams on Mon 19 Oct.
5. **Put up a Japanese landing page** with a waitlist and the ¥9,800 founding offer.
6. **Set up Stripe** in JPY with Japanese checkout; apply for a Payoneer JPY receiving account; check the brand name on J-PlatPat; order a Tokyo virtual office and 050 number.
7. **Ask a Japanese contact** to download the chip CSV manual v2.7 and to screenshot the fields of Tokyo's LoGo report form, since both are blocked or do not render from abroad.
