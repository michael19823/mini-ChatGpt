# Japan animal-business records tool: go-to-market, payments, company setup and financials (deep dive 04)

Date: 10 Oct 2026. Status: complete (resumed after an interruption; bank-transfer, Stripe-fee, small-amount-rule and postage points re-checked on 10 Oct 2026). Builds on [the B2 report](../reports/japan-b2.md), [01 law](01-law-and-requirements.md) and [02 market](02-market-and-competition.md).

Conventions:
- Money is in yen (¥). Planning rates: ¥158 = US$1 and ¥177 = €1, from the Bank of Japan 5 pm rates of 2 Oct 2026 (USD/JPY 157.57, EUR/JPY 177.43) ([BoJ](https://www.boj.or.jp/en/statistics/market/forex/fxdaily/fxlist/fx261002.pdf)). The 02 file used ¥150; the difference does not change any conclusion.
- "JCT" is Japan's consumption tax (消費税), 10% on software.
- "My estimate" marks numbers I derived. "(unverified)" marks facts I could not confirm.
- The founder builds the software with Claude Code and parallel AI agents and is unpaid unless stated. He sells from his own company abroad.

## Summary

- **Price it like an accounting app.** Breeder plan **¥14,800 a year** (or ¥1,480 a month); Shop plan ¥49,800 a year per site; a ¥4,980 one-off report pack; free up to 5 animals. Founding price ¥9,800 for the first 100 customers until 31 May 2027.
  - Anchors: sole traders already pay about ¥980-1,980 a month for freee and ¥10,800 a year for Money Forward ([atsoho](https://atsoho.com/apps/compare/freee-kaikei-vs-mf-cloud-kakuteishinkoku)).
  - A kintone build costs at least ¥18,000 a month ([hatenabase](https://hatenabase.jp/?p=15816)).
  - One puppy sells for ¥100,000-300,000 ([Makuake](https://www.makuake.com/project/breedersnavi/)).
- **Sell in spring, warm up in winter.** The 定期報告 window (1 April-30 May) is when people convert. The yearly responsible-person training (October-February; Tokyo online 2 Nov-31 Jan) is the awareness season ([Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/documents/d/hokeniryo/2026-07-14-152055-700)). Lead with inspections, not the report: in the 2023 national sweep, 496 of about 1,400 breeder sites had ledger defects ([MOE](https://www.env.go.jp/council/content/i_10/000357242.pdf)).
- **Channels in order:**
  1. free web tools and spring search;
  2. direct email, post and phone to breeders (published business emails are allowed with an opt-out);
  3. 行政書士 referral partners;
  4. auction houses and ペットパーク流通協会;
  5. breeder social media and LINE;
  6. marketplaces as partners, not dependencies.

  Year-1 marketing is **¥2.0M (US$12,700)**, plus a part-time Japanese contractor at about ¥100,000 a month.
- **Payments: Stripe from the founder's company, in yen, with no JCT added.** Japanese Visa, Mastercard, JCB and Amex work on foreign Stripe accounts in the EEA, UK, US and others ([Stripe](https://docs.stripe.com/payments/cards/supported-card-brands)). Fees are about 6% on an annual plan and 9% on a monthly one ([Stripe IE](https://stripe.com/ie/pricing)).
  - Konbini and PayPay need a Japanese company.
  - Bank transfer is the weak spot. Airwallex and Wise give foreign firms no domestic JPY details (Airwallex JPY is SWIFT-only), so a Japanese buyer would pay about ¥3,000 to wire abroad ([Airwallex help](https://help.airwallex.com/hc/en-gb/articles/900001759623-Which-currencies-can-I-get-a-Global-Account-in-and-what-payments-can-I-receive); [MUFG](https://www.bk.mufg.jp/tesuuryou/gaitame.html)). Test Payoneer's local JPY receiving account; otherwise bank transfer waits for a Japanese company.
- **Tax friction is low.**
  - Self-serve SaaS is a "consumer-type" electronic service. So the foreign seller, not the buyer, owes JCT, but only once its Japanese sales pass ¥10M in a base year ([NTA](https://www.nta.go.jp/publication/pamph/pdf/0024003-087_01.pdf)). In the base case that is about 2031.
  - Most buyers are tax-exempt or use simplified taxation, so a JCT-free price is cheaper for them and neutral for the rest.
  - There is no withholding tax: SaaS is a service, not a royalty ([鮎澤パートナーズ](https://ayusawa-partners.jp/column/it-kenkyukaihatsu-zeigaku)).
  - Paddle (5% + 50¢) would add 10% JCT, so it is worse here.
- **No Japanese company at launch.**
  - A 合同会社 costs about ¥75,000 in official fees (electronic articles; a KK about ¥196,000) ([創業手帳](https://sogyotecho.jp/company_fee/)). Done remotely by a full-service firm for a foreign owner, it costs about **¥1.18M** including bank-account help, and takes 4-5 weeks plus bank time ([Kaizen](https://kaizencpa.com/download/jp/Japan%20Goudou%20Kaisha%20Registration%20Procedures%20and%20Fees%28JP%29.PDF)).
  - Running it costs about ¥0.7-0.8M a year: ¥70,000 local tax even at a loss, plus a tax accountant and an address.
  - Open one when Japanese sales near ¥10M, a partner needs it, or the Ministry of Justice presses foreign online sellers to register (it asked 48 foreign IT firms in 2022, [Bengo4](https://www.bengo4.com/c_23/n_14775/)).
- **Legal watch-outs.**
  - The amended 行政書士 Act (from 1 Jan 2026) bans paid preparation of government filings by non-行政書士 "whatever the name" of the fee ([総務省](https://www.soumu.go.jp/main_sosiki/jichi_gyousei/gyouseishoshi/index.html)). Stay strictly self-serve and route done-for-you help through 行政書士 partners.
  - For data, an EU or UK seller entity avoids APPI consent problems, because both are designated equivalent ([JIPDEC](https://www.jipdec.or.jp/library/report/i5citv00000010va-att/20230905_s01.pdf)).
- **Financials (founder builds with AI agents, unpaid).**
  - Base: 684 paying customers and **ARR ¥13.0M (US$82,000) at month 36**. Operating break-even in month 28 (January 2029). Year-3 profit about ¥3.2M. **Peak cash need ¥5.6M (US$35,000)**, or ¥10M with modest founder pay.
  - Low: 221 customers, ARR ¥3.5M, never breaks even, peak ¥8.3M.
  - High (needs an auction or marketplace partner): 1,703 customers, ARR ¥36M, profit ¥14.8M in year 3.
- **It is a side business in Japan alone.** The upside is Japanese segment expansion (exhibitors, small-animal sellers, boarding), then Taiwan (about 3,700 licences). Exit at 1-2× ARR to a marketplace, auction operator or pet-software firm is about ¥13-26M in the base case ([BigIdeasDB](https://bigideasdb.com/state-of-saas-valuations-2026)).
- **Kill criteria:**
  - fewer than 5 of 20 interviewed breeders willing to pay by 25 Oct 2026;
  - **fewer than 50 paying customers by 30 June 2027** (end of the first report season);
  - first-year renewals below 50% in June 2028;
  - fewer than 150 active customers by June 2028.

## Pricing and packaging

### What buyers already pay (anchors)

| Item | Price | Source |
|---|---|---|
| Registration as a type-1 animal business, per category | ¥15,000, renewed every 5 years | [Aichi](https://www.pref.aichi.jp/site/gyoute/75190.html) (via 02) |
| Yearly responsible-person training (動物取扱責任者研修) | ¥1,000 (Aichi), ¥2,500 (Tokyo) per person | [Aichi R8](https://www.pref.aichi.jp/soshiki/doukan-c/doutorikennsyuukai.html); [Tokyo R8 notice](https://www.hokeniryo.metro.tokyo.lg.jp/documents/d/hokeniryo/2026-07-14-152055-700) |
| Microchip registration on the state portal | ¥400 online, ¥1,400 on paper, per animal | [MOE chip page](https://www.env.go.jp/nature/dobutsu/aigo/pickup/chip.html) |
| 行政書士 fee to prepare a registration | ¥100,000-180,000 including fees (one firm) | [鮎澤パートナーズ](https://ayusawa-partners.jp/column/pet-doubutsu-toriatsukai) (via 02; weak source) |
| freee 会計 for sole traders | ¥980 (Starter) or ¥1,980 (Standard) a month on annual plans | [atsoho comparison](https://atsoho.com/apps/compare/freee-kaikei-vs-mf-cloud-kakuteishinkoku) (third party; [freee pricing](https://www.freee.co.jp/pricing/)) |
| マネーフォワード クラウド確定申告, パーソナルミニ | ¥1,280 a month, or ¥10,800 a year | same atsoho comparison (third party) |
| kintone (do-it-yourself build for a chain) | ¥1,800 per user a month, minimum 10 users, so at least ¥18,000 a month | [hatenabase 2026 guide](https://hatenabase.jp/?p=15816); [NTT East](https://business.ntt-east.co.jp/column/service/ohs/kintone-price.html) (third party) |
| Generic cloud POS or booking | ¥0 to about ¥15,000 a month | [Aurant](https://aurant-technologies.com/?p=27904) (via 02) |
| One puppy | roughly ¥100,000-300,000 (toy poodle range) | [Makuake](https://www.makuake.com/project/breedersnavi/) (via 02) |

Reading: the price a breeder already knows for "office software" is the sole-trader accounting app, about ¥1,000-2,000 a month. Nobody pays for a ledger tool today, because the competitor is a free prefecture Excel sheet ([02 file](02-market-and-competition.md)). So the price must sit in the accounting-app band and be easy to justify against one puppy.

### Proposed plans

Prices are in yen and are the full price. While the seller is a foreign company below Japan's ¥10 million JCT threshold, **no consumption tax is added** (see "Payments and tax friction"). The page should say so in Japanese: 「表示価格がお支払い総額です（当社は消費税の免税事業者のため消費税はかかりません）」.

| Plan | For whom | Price | What is in it |
|---|---|---|---|
| **無料 (Free)** | Hobby breeders, try-out | ¥0, up to 5 dogs or cats on the books | Per-animal ledger, annual-report calculator, export to Excel. Lead magnet. |
| **ブリーダー (Breeder)** | Dog and cat breeders, small shops, exhibitors with one site | **¥14,800 a year** (default) or ¥1,480 a month | Unlimited animals, breeding ledger with litter and age warnings, daily check log, chip deadlines and CSV, annual report 様式第11の2 (Excel/PDF), "inspection mode", LINE support. |
| **ショップ (Shop / multi-site)** | Pet shops, chains, large kennels | **¥49,800 a year per site** or ¥4,980 a month per site | Breeder features plus staff accounts, staff-to-animal ratio check, trade records, per-site reports. |
| **定期報告パック (Report pack)** | Exhibitors, small-animal and bird sellers who count by breed | ¥4,980 one-off, 60 days | Import the year's Excel, produce the report, keep the file. Upsell to the Breeder plan. |
| **初期データ移行 (Import help)** | Anyone with a paper or Excel ledger | Free in the first season for annual buyers; then ¥9,800 | We map their Excel into the app. Data entry from paper is done by the customer or a partner 行政書士 (see "Contracts and liability"). |

Launch offers:
- **Founding price:** ¥9,800 for the first year of the Breeder plan, for the first 100 paying customers, until 31 May 2027. It creates a deadline inside the report window.
- **Partner code:** 20% off the first year for customers sent by an auction house, an association or a 行政書士. The partner gets a 20% referral fee on the first year (my estimate of market practice, unverified).

Why these numbers:
- ¥14,800 a year is ¥40 a day and about 5-10% of one puppy's price. It sits next to freee's ¥980-1,980 a month and above Money Forward's ¥10,800 a year (anchors above).
- It matches the 02 file's suggested price, so the market sizing there still holds ([02 file](02-market-and-competition.md)).
- Annual is the default because card fees have a fixed part (about ¥44 per charge on Stripe; see "Payments"). The monthly price is 20% higher.
- The shop price is about a third of the cheapest kintone build (¥18,000 a month) and buys the legal forms ready-made.

Effective price used in the model (my estimate): about 85-90% of customers on Breeder, 7-10% on Shop (average 1.5 sites), the rest report packs; 70% annual billing. After founding and partner discounts, revenue per customer is about **¥14,000 in year 1, ¥16,500 in year 2 and ¥18,000 in year 3** (base case).

### Tax on the price

- **While exempt (base case: about the first 4 years):** charge the plan price, no JCT. Issue a plain receipt (領収書) with the seller's foreign company name and address. No 適格請求書 (qualified invoice) registration number.
- **Once taxable:** register as a qualified-invoice issuer and add 10% JCT on top (¥14,800 + ¥1,480). Customers who use 原則課税 can then deduct it.
- The rules and why this is neutral or better for every buyer type are in "Payments and tax friction".

## Go-to-market

### Positioning

**"検査で慌てない帳簿" — inspection-ready records for dog and cat breeders, with the 30 May report done in one click.** The pain proof is the 2023 national sweep: of about 1,400 breeder sites inspected, 496 had ledger defects and 314 had breeding-ledger defects ([MOE 資料2](https://www.env.go.jp/council/content/i_10/000357242.pdf), via [02 file](02-market-and-competition.md)). Lead with the inspection, not the yearly report.

Beachhead: the 13,347 dog and cat breeders, then about 3,400 dog and cat shops that do not breed, then exhibitors and other sellers ([MOE R7 2_1_1](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_1.pdf)). Boarding and training sites wait for a later light plan.

### Selling calendar

| When | What happens | What we do |
|---|---|---|
| Oct-Feb | Yearly responsible-person training. Tokyo streams it online 2 Nov 2026-31 Jan 2027 (¥2,500); Aichi runs 6 venues 13 Nov 2026-16 Feb 2027; Hiroshima ran 23 Oct ([Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/documents/d/hokeniryo/2026-07-14-152055-700); [Aichi](https://www.pref.aichi.jp/soshiki/doukan-c/doutorikennsyuukai.html); [Hiroshima](https://www.pref.hiroshima.lg.jp/site/apc/r8-sekininsya-kensyu.html)) | Awareness: search ads and articles on 研修 and 帳簿 keywords; free checklist |
| 28 Dec-3 Jan | New Year holidays | No outreach |
| Feb-Mar | Fiscal year closes 31 March; the report covers April-March | "Import your year now" campaign; founding-price deadline |
| 1 Apr-30 May | 定期報告 filing window ([01 file](01-law-and-requirements.md)) | **Peak conversion.** Free report calculator; ads at full budget |
| Early April | Interpets Tokyo (2-5 Apr 2026; 60,019 visitors and 633 exhibitors in 2026; 2027 standard booths still open) ([Interpets](https://interpets.jp.messefrankfurt.com/)) | Visit in year 1; consider a booth in year 2 (price unverified) |
| Late Apr-early May | Golden Week, inside the filing window | Send reminders before it, not during |
| Jun-Sep | Quiet season; inspections go on all year (23,914 in FY2024, [MOE R7 2_1_3](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_3.pdf)) | Partners, product, testimonials |
| Every 5 years per business | Registration renewal | The 行政書士 partner channel |

### Channels in priority order

| # | Channel | Why it works | Motion | Year-1 share of new customers (my estimate) |
|---|---|---|---|---|
| 1 | **Free tools + search** | Every search for the ledger or report returns prefecture pages, not vendors ([02 file](02-market-and-competition.md)). | Free web tools: 定期報告 calculator (paste or upload the prefecture Excel → totals for 様式第11の2), breeding-limit checker (dam age, litter count), 帳簿 template converter. 20 Japanese articles reviewed by a 行政書士. Search ads Feb-May. Self-serve signup → 30-day trial → card. | 35% |
| 2 | **Direct outreach to breeders** | Many kennels publish a website and business email. Some authorities publish registers with addresses (Fukuoka Pref., Kagoshima City; see [02 file](02-market-and-competition.md)). | Email to published business addresses, allowed under the anti-spam law's published-address exception with an opt-out ([総務省](https://www.soumu.go.jp/main_sosiki/joho_tsusin/d_syohi/pdf/m_mail_pamphlet.pdf)). Postal letters to registers. Phone or LINE follow-up by a Japanese contractor. Instagram DMs to kennel accounts. | 25% |
| 3 | **行政書士 partners** | They register businesses (¥100,000-180,000 per registration, [鮎澤パートナーズ](https://ayusawa-partners.jp/column/pet-doubutsu-toriatsukai)) and are the only people allowed to sell done-for-you filing (see "Contracts"). | Recruit 10-20 who advertise 動物取扱業 registration. They get 20% of first-year fees, a free account and a co-branded guide. They sell their own paid setup service on top. | 15% |
| 4 | **Auction houses and ペットパーク流通協会** | Since Sept 2024 MOE has asked auctions and shops to check each puppy's birth date ([MOE 資料2](https://www.env.go.jp/council/content/i_10/000357242.pdf)). A breeder who hands over a clean per-puppy record helps them. | One pilot auction: a "records kept in [app]" export per lot. Long sales cycle; aim for one signed partner by June 2027. | 10% (rising later) |
| 5 | **Breeder communities** | Breeders sell on Instagram and YouTube and talk in LINE groups (unverified). | Short videos: "inspection in 5 minutes", "how to fill 様式第11の2". A LINE official account for support (free up to 200 messages a month; about ¥5,000 a month for 5,000) ([LINE Yahoo](https://www.lycbiz.com/jp/news/line-official-account/20260216/?o=IM0021); [ligla](https://ligla.jp/blog/line-official/cost/)). | 10% |
| 6 | **Puppy marketplaces** | みんなのブリーダー lists 3,854 breeders ([min-breeder.com](https://www.min-breeder.com/)). It is run by みんなのペットオンライン株式会社, which settled a JFTC case in 2018 over limiting breeders' listings on other sites ([JFTC](https://www.jftc.go.jp/houdou/pressrelease/h30/may/180523.html)). It has power over breeders. | Offer a data export or badge, not a fight. Treat it as a partner-or-threat; do not depend on it. | 0-5% |
| 7 | **Vets, pet insurers, trade shows** | Vets implant chips; insurers work through shops (unverified). | Year 2. | 0% |

### Sales motion

1. **Self-serve first.** Japanese website, Japanese checkout, 30-day free trial with no card, then card or bank transfer.
2. **Human help in Japanese.** A part-time Japanese contractor answers LINE, email and phone, about 40 hours a month in year 1 (¥2,500 an hour, my estimate, unverified). The founder handles product and partners from abroad, in English or with AI help.
3. **Onboarding in 15 minutes.** Upload the prefecture Excel ledger; the app maps the columns; the customer checks and confirms. The customer's own data, entered by the customer, keeps this on the right side of the 行政書士 Act.
4. **Conversion triggers in the app:** the April report, a dam reaching age 6, a chip deadline, and an "inspection mode" demo.
5. **Price framing:** 「1日あたり約40円」, and 「子犬1頭の価格の1割以下で、1年分の帳簿」.
6. **Trust signals:** 行政書士監修 badge, a Tokyo address (virtual office) and 050 phone number, real breeder testimonials, Japanese terms under Japanese law.
7. **Renewal:** in-app 5-year record counter ("your records since 2027 are safe here"), free export promise, and a renewal email 30 days before.

## 90-day launch plan

Start Monday 12 October 2026. Day 90 is Saturday 9 January 2027. The MVP takes about 3 weeks with AI agents. "Sellable" (legal content checked, security test done, pilots running) takes 6-8 weeks, i.e. late November to early December.

**Days 1-14 (12-25 Oct): validate and set up.**
- Interview 20 breeders and 5 shops by video or phone, in Japanese through a contractor. Find them via kennel websites, Instagram and the Fukuoka and Kagoshima City registers. Ask about current tools, last inspection, time spent on the report, and price. Pre-sell pilots at the founding price.
- Hire the Japanese contractor (outreach, interviews, support), 40 hours a month.
- Engage a 行政書士 who handles 動物取扱業 registrations: fixed fee to review the ledger fields, report output and article content, plus a written view on the 行政書士 Act question. Ask whether they want to be the first referral partner.
- Engage a Japanese lawyer for the terms, privacy policy and data-processing terms.
- Set up Stripe (JPY, Billing, Japanese checkout) and apply for a Payoneer JPY local receiving account (test whether a Japanese payer can use it). Get a Tokyo virtual office and an 050 phone number (about ¥12,000 a month in total, my estimate).
- Check the brand name on J-PlatPat and file a Japanese trademark (budget ¥150,000, unverified).
- Japanese landing page with a waitlist.

**Days 15-42 (26 Oct-22 Nov): build and recruit.**
- Build the MVP (see the 03 product file): ledger, breeding ledger with warnings, daily check log, chip deadlines and CSV, report export, inspection mode, Excel import.
- Recruit 15-20 pilot users from the interviews. Import their real data.
- Publish the free report calculator and the first 8 articles. The 行政書士 reviews them.
- Book the security test (budget ¥500,000, unverified).
- Pitch partners: ペットパーク流通協会, two auction operators, 全国ペット協会 and 3-5 行政書士 offices. Send a short Japanese deck and a demo video.

**Days 43-70 (23 Nov-20 Dec): first paid customers.**
- Security test done and fixes shipped. Terms and privacy policy live.
- Open paid plans with the founding price (¥9,800 for the first year, first 100 customers, until 31 May 2027).
- Convert pilots: target 10-15 paying by 20 December.
- First outreach wave: 300 emails to published kennel addresses and 300 postal letters, with phone follow-up.
- Collect 3 testimonials with photos.
- Run search ads on training and ledger keywords at a small budget while the Tokyo online training runs.

**Days 71-90 (21 Dec-9 Jan): quiet build and spring preparation.**
- Japan is closed about 28 Dec-3 Jan. No outreach.
- Ship: chip-portal CSV export, staff-ratio check, monthly count sheets matching the Tokyo and Saitama templates.
- Prepare the spring campaign: Feb-Mar "import your year" emails, April calculator push, partner webinars.
- **Day-90 review** against the milestones below: interviews done, pilots active, paid customers, partner talks. Continue, change price or stop.

## 12-month marketing plan and budget

Period: November 2026 to October 2027. Base-case budget **¥2.0 million (about US$12,700)**, plus partner fees of 20% of first-year revenue from partner-sourced customers. All lines are my estimates.

| Quarter | Focus | Main activities | Budget (¥) |
|---|---|---|---|
| Q1 Nov-Jan | Pilots and training season | Trip 1 to Japan (visit kennels, a 行政書士, an auction); content; LINE account; small search ads; outreach wave 1 | 600,000 |
| Q2 Feb-Apr | Pre-season and report window | Search and social ads at full budget from late February; postal and email wave 2; trip 2 timed with Interpets (early April); 2 partner webinars; founding-price deadline | 850,000 |
| Q3 May-Jul | End of window, proof | Retargeting to calculator users; testimonials; first case study; partner pilot with an auction | 300,000 |
| Q4 Aug-Oct | Renewals, training season prep | Renewal campaign for the first annual customers (from December); outreach wave 3; content refresh | 250,000 |
| **Total** | | | **2,000,000** |

By line item:

| Item | ¥ a year | Notes |
|---|---|---|
| Founder trips to Japan (2 × about ¥350,000: flights, hotels, rail to rural kennels) | 700,000 | my estimate |
| Search ads (Google, Yahoo! JAPAN), mostly Feb-May | 350,000 | CPC not measured (unverified) |
| Social ads (Instagram, Facebook, YouTube) to breeders | 250,000 | |
| Japanese content: 20 articles and 4 short videos by native writers | 250,000 | 行政書士 review sits in the legal budget |
| Postal letters (about 1,500 × ¥130 print and postage) | 200,000 | standard letter postage ¥110 up to 50 g since 1 Oct 2024 ([総務省](https://www.soumu.go.jp/main_content/000979809.pdf); [ecnomikata](https://ecnomikata.com/ecnews/43374/)) |
| Partner co-marketing (association newsletter, webinar, sample kits) | 150,000 | |
| LINE official account, webinar and email tools | 60,000 | [LINE](https://ligla.jp/blog/line-official/cost/) |
| Contingency | 40,000 | |
| **Total** | **2,000,000** | |
| Partner fees (not in the total) | about 6% of new-customer revenue | 30% of customers via partners × 20% |

Years 2 and 3 (base case): ¥2.6 million and ¥3.0 million. Add an Interpets booth in year 2 if year-1 base targets are met.

The Japanese support and outreach contractor is costed separately in the model: ¥100,000 a month in year 1, ¥150,000 in year 2 and ¥220,000 in year 3 (base case).

## Payments and tax friction

### Short answer

- **Sell from the founder's company with Stripe, priced in yen, with no JCT added.** Japanese Visa, Mastercard, JCB and Amex cards can pay a foreign Stripe account. Fees are about 6% on an annual plan.
- **The seller does not need to register for Japanese JCT** until its Japanese sales pass ¥10 million in a "base period" (two years earlier). In the base case that is not before about 2031.
- **There is no withholding tax** on a SaaS subscription paid to a foreign company. It is a service fee, not a royalty.
- **A merchant of record (Paddle) is worse here.** It adds 10% JCT to a price that would otherwise carry none, and costs about the same in fees.
- **Konbini and PayPay need a Japanese Stripe account**, so a Japanese company. They are not needed for business buyers.
- **Bank transfer is the gap.** Foreign fintech accounts mostly cannot receive domestic yen transfers. Try a Payoneer JPY local receiving account; otherwise push cards and accept that strict bank-transfer buyers wait for a Japanese company.

### Do Japanese cards work with a foreign seller?

- **Yes for Visa, Mastercard, JCB and Amex.** Stripe accepts JCB on accounts in Australia, Canada, Hong Kong, Japan, New Zealand, Singapore, Switzerland, the UK, the US and every EEA country except Iceland. 3-D Secure for JCB works on EEA, UK, Swiss, Hong Kong, Singapore and Japanese accounts ([Stripe card brands](https://docs.stripe.com/payments/cards/supported-card-brands)). JCB is Japan's own card brand, so this matters.
- **Konbini (convenience-store cash payment) is only for Japan-based Stripe accounts.** Activation needs a Japanese website and a 30-day partner review ([Stripe support](https://support.stripe.com/questions/enabling-konbini-payments-for-japan-based-stripe-accounts)).
- **Card refusals:** some Japanese issuers may decline foreign-merchant charges (unverified). Mitigation: show "海外決済" in the FAQ, use 3-D Secure, and offer bank transfer.

### Stripe fees (founder's company abroad, Ireland pricing as the example)

- **Card fees:** EEA cards 1.5% + €0.25; UK cards 2.5% + €0.25; **international cards (Japanese cards) 3.15% + €0.25**, plus **2% when currency conversion is needed** ([Stripe Ireland pricing](https://stripe.com/ie/pricing)).
- **Add-ons:** Stripe Billing (subscriptions) is 0.7% of billing volume. Stripe Invoicing is 0.4% per paid invoice. Stripe Tax is 0.5% per transaction where you are registered (same source). Stripe Tax is not needed while exempt.
- **Other countries (third-party summaries, check Stripe's live page):** a UK account pays 3.25% + 20p for non-EEA cards plus 2% for currency conversion ([Wise guide](https://wise.com/gb/blog/stripe-payments-charges-uk); [Xero](https://www.xero.com/pricing-plans/pricing-and-fees-for-stripe/)). A US account pays 2.9% + 30¢, plus 1.5% for international cards and 1% for conversion ([checkoutpage](https://checkoutpage.com/blog/stripe-international-fees)). So a US company keeps a little more than an EU one (about 5.4% + 30¢ plus Billing), and a UK one a little less (about 5.25% + 20p plus Billing).

**Example: a ¥14,800 annual plan on a euro-based Stripe account** (my arithmetic at ¥177/€):
- Fees: 3.15% + 2% FX + 0.7% Billing = 5.85%, which is ¥866, plus €0.25 (¥44). Total ¥910, or **6.1%**. Net ¥13,890.
- The same on a ¥1,480 monthly charge: ¥87 + ¥44 = ¥131, or **8.8%**. This is why annual billing is the default.

### Merchant of record options

| Option | Japan support | Fee | Effect here |
|---|---|---|---|
| **Paddle** | Charges 10% Japanese Consumption Tax on both B2B and B2C sales ([Paddle tax table, updated 1 Aug 2025](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)). Whether it issues Japanese qualified invoices with a registration number is not stated (unverified). | 5% + 50¢ per transaction ([Paddle pricing](https://www.paddle.com/pricing)) | On ¥14,800 + ¥1,480 JCT = ¥16,280: fee ¥814 + ¥79 = ¥893. We net ¥13,907, but the buyer pays 10% more than with direct Stripe. On a monthly ¥1,628 charge the fee is about 11%. |
| **Stripe Managed Payments** (Stripe's own merchant of record; Lemon Squeezy now belongs to Stripe) | Seller may be based in the US, Canada, EU/EEA countries, Switzerland, the UK, Australia, Hong Kong, Japan or Singapore. Customers in 195+ countries; Japan is not on the restricted list. SaaS is eligible ([Stripe eligibility](https://docs.stripe.com/payments/managed-payments/eligibility)). | Standard Stripe fees plus 3.5% ([dodopayments](https://dodopayments.com/blogs/stripe-managed-payments-fees-explained), competitor blog; unverified) | About 9.4% + €0.25 on top of the 10% JCT. The dearest route. |
| **Lemon Squeezy** | Now inside Stripe | 5% + 50¢ ([dodopayments](https://dodopayments.com/blogs/lemon-squeezy-vs-stripe/), competitor blog; unverified) | Same logic as Paddle. |

**Why a merchant of record does not pay off here.** Its main job is collecting and filing tax. Below ¥10 million of Japanese sales a foreign seller owes no JCT (next section). So a merchant of record would add tax that the seller does not owe and pass it to small breeders who mostly cannot reclaim it. Revisit only once the founder's company becomes taxable in Japan and does not want to file there.

### Bank transfer

- **Bank transfer is still the norm in Japanese B2B.** A 2025 survey of 1,236 small-business owners and sole traders found bank transfer still dominant. About 6 in 10 knew of paying invoices by card and 4 in 10 wanted to ([Infcurion survey via digitalpr](https://digitalpr.jp/r/116809)).
- **A wire from Japan costs the buyer about ¥3,000.** MUFG charges ¥3,000 for an internet-banking remittance to another bank abroad, against ¥154-220 for a domestic transfer ([MUFG foreign-exchange fees](https://www.bk.mufg.jp/tesuuryou/gaitame.html); [MUFG domestic fees](https://www.bk.mufg.jp/tesuuryou/furikomi.html)). Correspondent-bank charges may come on top (unverified). That is 20% of a ¥14,800 plan, so it does not work.
- **Foreign multi-currency accounts do not fix it.** Airwallex's JPY Global Account receives SWIFT payments only, with no domestic JPY route, and is offered only to Hong Kong, Singapore and Denmark accounts. UK and EEA accounts get no JPY account at all ([Airwallex help centre](https://help.airwallex.com/hc/en-gb/articles/900001759623-Which-currencies-can-I-get-a-Global-Account-in-and-what-payments-can-I-receive)). Wise's UK page lists local account details for eight currencies, and JPY is not one of them ([Wise JPY page](https://wise.com/gb/account/jpy-account)). An earlier draft of this file said Airwallex gives local Japanese details; that was wrong.
- **One option to test: Payoneer.** Payoneer lists Japan as a "LOCAL JPY" receiving-account market ([Payoneer](https://www.payoneer.com/local-receiving-accounts/)). A user forum says payments arrive over the domestic Zengin network from business accounts in 1-2 days ([ProZ forum](https://connect.proz.com/topic/359222), user-generated). Whether a foreign SaaS company can use it for subscription receipts, and its fees, are unverified.
- **Fallback.** Card first. A customer who will only pay by bank transfer either pays the wire fee (offer ¥3,000 off the Shop plan to cover it) or waits until the Japanese company exists. Stripe's own Japanese bank-transfer method (1.5%) needs a Japan-based account ([Stripe Japan pricing](https://stripe.com/jp/pricing)).
- **Use bank transfer (if Payoneer works) for:** annual Shop plans, partner invoices and customers who refuse cards. Send a 請求書 (invoice) PDF with the account details. Match payments by hand at first.
- The buyer pays the domestic transfer fee, as is normal in Japan (unverified).

### Buyer-side tax: how JCT treats this sale

The National Tax Agency (NTA) pamphlet on cross-border services ([NTA, Jul 2024, revised Jun 2026](https://www.nta.go.jp/publication/pamph/pdf/0024003-087_01.pdf)) settles the main points:

1. **Cloud software is an "electronic service" (電気通信利用役務の提供).** It is taxed where the customer lives, so a sale to a Japanese breeder is a Japanese domestic sale.
2. **A self-serve web signup counts as "consumer-type" (消費者向け), even if the site says "for businesses".** The NTA says that a cloud service sold through a website, where sign-ups by non-businesses cannot in practice be blocked, is consumer-type. Only individually negotiated business contracts count as "business-type" (事業者向け). A business-type sale would use reverse charge.
3. **For consumer-type sales the foreign seller is the taxpayer, not the buyer.** But the foreign seller also gets the small-business exemption (事業者免税点制度).
4. **The buyer's input-tax credit needs a qualified invoice (適格請求書) from the seller.** The 80/70/50/30% transitional relief for purchases from non-registered sellers **does not apply** to consumer-type services from foreign businesses. **The small-amount rule (少額特例) does apply.** Smaller businesses can deduct purchases under ¥10,000 including tax on their books alone, until 30 Sep 2029. "Smaller" means base-period taxable sales of ¥100 million or less, or specified-period sales of ¥50 million or less. The test is per transaction, and it applies even when the seller is not registered ([NTA 2023 reform page](https://www.nta.go.jp/publication/pamph/shohi/kaisei/202304/02.htm); [Money Forward](https://biz.moneyforward.com/invoice/basic/60404/)).
5. **Platform taxation (from 1 Apr 2025)** moves the tax to app-store operators for consumer-type services sold through designated platforms. This only matters if the app is sold through Apple or Google stores.

**What this means for each buyer type** (my reading of the rules above):

| Buyer type | Likely share (my estimate) | Effect of buying from an exempt foreign seller at ¥14,800, no JCT |
|---|---|---|
| 免税事業者 (taxable sales ≤ ¥10M): most home breeders | majority | Cannot deduct anything anyway. **Pays ¥1,480 less** than with a taxed competitor at ¥14,800 + tax. |
| 簡易課税 or 2割/3割特例 users | many of the rest | Input tax is deemed from their sales, so supplier invoices do not matter ([NTA 簡易課税](https://www.nta.go.jp/taxes/shiraberu/taxanswer/shohi/6505.htm)). Pays ¥1,480 less. |
| 原則課税, monthly plan (¥1,480 < ¥10,000) | few | Can deduct under the small-amount rule to Sep 2029. |
| 原則課税, annual plan (≥ ¥10,000) or chains | few | Cannot deduct. But net cost is ¥14,800, the same as a taxed competitor's ¥16,280 minus the ¥1,480 deduction. Only friction: the accounts team asks for a T-number. Answer it in the FAQ. |

So not charging JCT is neutral for the few large buyers and cheaper for everyone else.

### Seller side: when must the foreign company register for JCT?

- **Not below the ¥10 million threshold.** A foreign business is covered by the small-business exemption ([NTA pamphlet](https://www.nta.go.jp/publication/pamph/pdf/0024003-087_01.pdf)). The test is Japanese taxable sales in the base period, normally the year two years earlier. There is also a "specified period" test on the first half of the previous year. Since the 2024 reform, foreign businesses cannot use salary paid in place of sales for that test ([Yamada & Partners](https://www.yamada-partners.jp/reform/r6/c01-review-of-the-application-of-special-provisions-of-the-business-tax-exemption-point-system-for-foreign-businesses); [Zeiken](https://www.zeiken.co.jp/kokusaizeimu/article/202407/KZ2024070230101.php)).
- **New-company rule.** The "new corporation" exemption for a company with capital of ¥10 million or more is now judged from the date the foreign company starts business in Japan (same sources). A founder company with small capital is not caught.
- **Model check.** Base-case Japanese receipts by calendar year: 2027 ¥2.9M, 2028 ¥7.6M, 2029 ¥10.5M (model below). So the foreign company would become taxable for 2031 at the earliest. In the high case, the first half of 2028 alone brings ¥11.9M, so it would be taxable from 2029. That is one reason the high case moves billing to a Japanese company in month 13.
- **If it registers (voluntarily or because it must):**
  - It files the foreign-business version of the qualified-invoice application. A foreign business with no office in Japan must name a tax administrator (納税管理人). A "specified foreign business" also attaches a tax-agent authority form (税務代理権限証書), in effect a Japanese 税理士 ([NTA invoice procedure](https://www.nta.go.jp/taxes/tetsuzuki/shinsei/annai/hojin/annai/invoice_01.htm); [NTA invoice Q&A](https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/pdf/qa/16.pdf)).
  - **It cannot use simplified taxation (簡易課税) or the 20% special rule.** These have been barred for foreign businesses with no permanent establishment since the 2024 reform ([Shin-Nippon Hoki](https://www.sn-hoki.co.jp/article/tamasters/tamaster3288922/); [Koyano CPA](https://koyano-cpa.gr.jp/wordpress/wp-content/uploads/2024/12/merumaga241212-1.pdf)). With almost no Japanese input tax, it pays close to 10/110 of receipts.
  - Cost of a Japanese tax agent: ¥300,000-600,000 a year (my estimate, unverified).

### Withholding tax on payments to a non-resident

- **None for a plain SaaS subscription.** A Japanese tax firm's 2026 guide treats SaaS and cloud fees as payment for a service, not a royalty, because the customer gets no right to copy the software. Withholding at 20.42% arises only if the contract grants copying or distribution rights ([鮎澤パートナーズ, updated 5 Sep 2026](https://ayusawa-partners.jp/column/it-kenkyukaihatsu-zeigaku)).
- **Contract wording matters.** The terms should say 「本サービスの利用権」 (right to use the service), not 「ソフトウェアの使用許諾・複製」.
- **Treaties.** If a payment were ever treated as a royalty, a tax treaty between Japan and the founder's country may cut the rate ([MOF treaty list](https://www.mof.go.jp/tax_policy/summary/international/tax_convention/tax_convetion_list_jp.html)). The rate depends on the country (unverified).

### Fee comparison for one ¥14,800 annual Breeder plan

My arithmetic, at ¥158/US$ and ¥177/€.

| Route | Buyer pays | Fees | Tax remitted | We keep | Needs |
|---|---|---|---|---|---|
| **Stripe, founder's EU company, no JCT (recommended)** | ¥14,800 | ¥910 (6.1%) | ¥0 while exempt | **¥13,890** | Nothing in Japan |
| Paddle (merchant of record) | ¥16,280 | ¥893 | ¥1,480 | ¥13,907 | Nothing in Japan; buyer pays 10% more |
| Paddle, keeping the buyer price at ¥14,800 | ¥14,800 | ¥819 | ¥1,345 | ¥12,636 | — |
| Stripe Managed Payments | ¥16,280 | ~¥1,566 (unverified) | ¥1,480 | ~¥13,234 | — |
| Stripe Japan through a Japanese GK (3.6% + 0.7% Billing) | ¥14,800 | ¥636 (4.3%) ([Stripe Japan pricing](https://stripe.com/jp/pricing)) | ¥0 for the GK's first 2 years if capital < ¥10M | ¥14,164 | A Japanese company (see next section) |
| Bank transfer into a Payoneer JPY receiving account (to be tested) | ¥14,800 + the buyer's domestic transfer fee (¥154-220 at MUFG) | receiving and FX fees, about 1-2% (unverified) | ¥0 while exempt | ~¥14,500 (unverified) | Payoneer approval |
| SWIFT wire from the buyer's bank | ¥14,800 + about ¥3,000 wire fee | our bank's incoming and FX fees (unverified) | ¥0 while exempt | ~¥14,000-14,500 (unverified) | Nothing; but buyers will balk |

Stripe Japan also offers konbini at 3.6% (minimum ¥120), bank transfer at 1.5% and PayPay at 3.98% ([Stripe Japan pricing](https://stripe.com/jp/pricing)).

### Setup checklist

1. Stripe on the founder's company: JPY prices, Stripe Billing, Japanese-language Checkout and customer portal, 3-D Secure on.
2. Payoneer JPY local receiving account: apply, then test one real transfer from a Japanese pilot customer before offering bank transfer.
3. Japanese receipt template: seller name and address, "消費税：免税事業者のため対象外", plan, period.
4. Japanese FAQ on why there is no qualified-invoice number. Point 原則課税 buyers to the monthly plan (small-amount rule).
5. A spreadsheet that tracks Japanese receipts by calendar year and by half-year against the ¥10M tests. Act at ¥7M.

## Company setup (needed or not, costs)

### Recommendation

**Do not open a Japanese company at launch.** Sell from the founder's company abroad with Stripe, as above. Open a Japanese 合同会社 (GK, the Japanese LLC) only when one of these triggers fires:
1. Japanese receipts approach ¥10 million a year. The foreign company would then need a Japanese tax agent anyway, and a new GK with capital under ¥10 million starts with two JCT-exempt years (my reading of the new-company rule; confirm with a 税理士).
2. A channel partner (auction house, marketplace, chain) insists on a Japanese counterparty, 請求書払い (pay-by-invoice) or konbini, or too many buyers refuse cards. A foreign company cannot cheaply receive domestic yen transfers (see "Bank transfer"); a GK with a Japanese bank account or Stripe Japan can.
3. The Ministry of Justice starts pressing small foreign online sellers to register (next point).
4. The founder hires a full-time employee in Japan.

In the base case none of these is likely before about month 24-30. The base model therefore has no GK; a variant with a GK from month 22 is shown in the financial model. The high case opens one in month 13.

### The one legal grey area: "continuous transactions in Japan"

- **The rule.** A foreign company that "continuously transacts business in Japan" must appoint a representative in Japan and register as a foreign company. At least one representative must live in Japan. Until it registers it may not continue transacting (Company Act Arts. 817-818). Failing to register can bring a 過料 of up to ¥1 million (Art. 976), or a fine equal to the registration tax (Art. 979) ([Ministry of Justice](https://www.moj.go.jp/MINJI/minji07_00275.html); [RSM Shiodome](https://shiodome.co.jp/js/blog/12027)).
- **It has been used against online services.** In March 2022 the Justice and Internal Affairs ministries asked 48 foreign IT companies (Google, Meta, Twitter and others) that serve Japanese users to register ([Bengo4](https://www.bengo4.com/c_23/n_14775/)). By August 2022, 28 had registered or applied ([Arab News Japan](https://www.arabnews.jp/en/business/article_78947)).
- **What it means for a tiny SaaS.** No case against a small foreign SaaS was found (unverified that none exist). Market research and one-off sales are not "continuous", but a subscription business serving hundreds of Japanese customers arguably is. The risk is low but real. A GK removes it, and so would a foreign-company registration with a resident representative. The GK is the more useful of the two.
- **Mitigation until then:** sell through a self-serve website, keep no office or staff in Japan, and keep the Japanese contractor on a service contract with the foreign company.

### Real costs of a Japanese company

**Official fees** (paid by anyone, in person or through an agent):

| Item | 合同会社 (GK) | 株式会社 (KK) | Source |
|---|---|---|---|
| Registration licence tax (登録免許税) | 0.7% of capital, minimum ¥60,000 | 0.7% of capital, minimum ¥150,000 | [創業手帳](https://sogyotecho.jp/company_fee/); [all-senmonka](https://www.all-senmonka.jp/moneyizm/4690/) |
| Notary certification of the articles (定款認証) | Not needed | ¥30,000-50,000 by capital (¥15,000 in some small cases) | same |
| Stamp duty on paper articles | ¥40,000 (¥0 with electronic articles) | ¥40,000 (¥0 electronic) | same |
| **Typical official total** | **about ¥75,000 (electronic) to ¥112,000 (paper)** | **about ¥196,000 (electronic) to ¥233,000 (paper)** | same |
| Minimum capital | ¥1 | ¥1 | [Kaizen quote](https://kaizencpa.com/download/jp/Japan%20Goudou%20Kaisha%20Registration%20Procedures%20and%20Fees%28JP%29.PDF) |

A non-resident can be the sole member and representative. Since 2015 Japanese KK and GK can register with no representative living in Japan ([RSM Shiodome](https://shiodome.co.jp/js/blog/889)).

**"In person" is not really cheaper for a foreigner.** Even in Japan the founder needs these things:
- a Japanese registered address (a lease, or a virtual office that accepts company registration);
- a Japanese personal bank account to receive the capital before the company exists, or a paid "capital-receiving agent";
- a signature certificate from a notary in his home country, in place of a Japanese seal certificate;
- all documents in Japanese ([Kaizen quote](https://kaizencpa.com/download/jp/Japan%20Goudou%20Kaisha%20Registration%20Procedures%20and%20Fees%28JP%29.PDF)).

A Japanese-speaking resident can do it for the official fees plus a cheap service (freee's 登記おまかせ plan is ¥50,000, against a market rate of about ¥100,000) ([freee](https://www.freee.co.jp/kb/kb-launch/kaisyasetsuritsu-costs/)). A foreign founder abroad realistically pays a full-service firm.

**Remote, full service for a foreign owner** (one firm's 2026 price list, net of JCT) ([Kaizen quote](https://kaizencpa.com/download/jp/Japan%20Goudou%20Kaisha%20Registration%20Procedures%20and%20Fees%28JP%29.PDF)):

| Item | ¥ |
|---|---|
| GK formation service (name search, articles, seals, filing; one member, capital up to ¥8M, Tokyo) | 400,000 |
| Government fees (budget) + sundries | 60,000 + 10,000 |
| Capital-receiving agent (optional) | 88,000 |
| **Formation subtotal** | **558,000** |
| Tax registrations, including the Bank of Japan report on foreign direct investment (外為法) | 200,000 |
| Corporate bank account support (40% refunded if the bank refuses) | 420,000 |
| **Total** | **about ¥1,178,000 (about US$7,500)** |
| Virtual office in Tokyo (Ueno) | ¥15,500 a month + ¥22,000 up front |
| Time | about 4-5 weeks, plus bank account time |

Warnings in the same quote:
- Banks have tightened account opening and may refuse a company whose address is a virtual office.
- The firm advises capital of ¥5 million or more to help the bank account succeed.

Cheaper Japanese 司法書士 firms exist; prices for foreign-owned set-ups were not collected (unverified).

**Ongoing costs of a GK (my estimate from the sources cited):**

| Item | ¥ a year | Source |
|---|---|---|
| Per-capita local tax (法人住民税 均等割), due even with losses (Tokyo 23 wards, capital ≤ ¥10M, ≤ 50 staff) | 70,000 | [freee](https://www.freee.co.jp/kb/kb-launch/kaisyasetsuritsu-costs/) |
| Tax accountant: about ¥25,000 a month plus about ¥100,000 for the year-end return | about 400,000 | [meetsmore](https://meetsmore.com/services/tax-accountant/media/270); [biz.ne.jp request](https://www.biz.ne.jp/subject/toi_detail.html?tid=990214) (English-speaking firms likely cost more, unverified) |
| Virtual office | 186,000 | Kaizen quote above |
| Bank, seals, certificates, sundries | about 50,000-100,000 | my estimate |
| **Total** | **about ¥0.7-0.8 million (US$4,500-5,000)** | plus corporate tax on any profit |

**Living in Japan to run it is a separate, much bigger step.** Since 16 Oct 2025 the 経営・管理 (business manager) visa needs ¥30 million of capital, at least one full-time employee who is Japanese or a permanent-type resident, and Japanese at about N2 level from the applicant or that employee ([solution-supporter](https://solution-supporter.jp/keiei-kanri-visa-500man-kaisei/); [office-tree](https://office-tree.jp/blog/immigration/keiei-kanri-visa-2025-kaisei/)). An online business does not need it.

### What a Japanese company would change

- **Payments:** Stripe Japan at 3.6% + 0.7% Billing with no currency conversion. Konbini, bank transfer and PayPay become available ([Stripe Japan pricing](https://stripe.com/jp/pricing)).
- **Trust:** a 特商法 page and invoices with a Japanese company name, address and phone. Japanese partners can sign with a Japanese entity.
- **Tax:** Japanese corporate tax on the GK's profit. Because the software is built and owned abroad, a fee between the founder's company and the GK needs a simple transfer-pricing basis (unverified; ask the 税理士).

## Contracts and liability

### Documents needed (all in Japanese, English copy for the founder)

1. **利用規約 (terms of service)** as standard terms (定型約款).
2. **プライバシーポリシー (privacy policy).**
3. **個人データの取扱いに関する覚書 (data-processing terms).** The ledger holds the breeder's buyers' names, addresses and signatures.
4. **A 特商法-style disclosure page.** It gives seller name, address, contact, prices, payment timing and cancellation.
5. **A plain-Japanese "what the app does and does not do" page** for the legal duties.

Budget: ¥600,000 one-off for a Japanese lawyer's review of the terms and a 行政書士's review of the legal content, then about ¥30,000 a month for yearly updates (my estimate). Market prices for terms drafting vary widely: lawyers set their own fees, and individual buyers ask 行政書士 for ¥100,000-150,000 packages ([atsoho](https://atsoho.com/blog/terms-of-service-drafting-side-job); [biz.ne.jp](https://www.biz.ne.jp/subject/toi_detail.html?tid=988054)) (unverified as a market rate).

### Rules that shape the terms

- **Standard-terms rules (Civil Code Arts. 548-2 to 548-4).** The terms bind the customer if the customer agrees to use them, or if they were shown in advance. Clauses that unfairly harm the customer against good faith are not included. The provider may change the terms without new consent only if the change benefits customers, or is reasonable and announced in advance ([e-Gov 民法](https://laws.e-gov.go.jp/law/129AC0000000089)).
- **Consumer Contract Act does not apply.** An individual acting for business is not a "consumer" ([e-Gov 消費者契約法 Art. 2](https://laws.e-gov.go.jp/law/412AC0000000061)). Breeders and shops buy for business. Still, avoid a clause that excludes all liability; Japanese courts may not enforce caps against gross negligence (unverified).
- **Specified Commercial Transactions Act.** Its mail-order rules exclude purchases made for business ([e-Gov 特定商取引法 Art. 26](https://laws.e-gov.go.jp/law/351AC0000000057)). The disclosure page is still expected by Japanese buyers.
- **Governing law.** For business contracts the parties may choose the law ([e-Gov 法の適用に関する通則法 Art. 7](https://laws.e-gov.go.jp/law/418AC0000000078)). Choose Japanese law and the Tokyo District Court. It costs little extra and builds trust with Japanese buyers (my judgement).

### Liability design

- **Cap:** fees paid in the last 12 months. Exclude indirect and lost-profit damages, except for wilful misconduct and gross negligence.
- **The customer stays the responsible business.** The app is a record-keeping and calculation tool. The 動物取扱業者 checks every figure and files the report itself. The app never files on the customer's behalf (there is no filing API anyway; see [01 file](01-law-and-requirements.md)).
- **A review step before export.** The report screen shows the reconciliation (opening + in − out − deaths = closing) and asks the user to confirm. The law file's death-rate and litter-limit warnings are shown as "check this", not as legal advice.
- **No "approved by the Ministry" claims.** Use 「行政書士監修」 (content reviewed by a named 行政書士) once a 行政書士 has actually reviewed it.
- **Data rights.** The customer owns its records. Free export to Excel/CSV at any time and for 90 days after cancellation. This matters because the law makes the customer keep records for 5 years.
- **Uptime and backups:** best effort, with daily backups and a stated restore target. No financial SLA on the Breeder plan.

### The 行政書士 Act: keep the service self-serve

- **The rule.** Only 行政書士 may, as a business and for a fee, prepare documents to be submitted to government offices. The amended Act (Act No. 65 of 2025, in force 1 Jan 2026) added that this applies "whatever the name" of the fee. It also tightened penalties, including fines on the company as well as the person ([総務省 行政書士制度](https://www.soumu.go.jp/main_sosiki/jichi_gyousei/gyouseishoshi/index.html); [JEMCA notice](https://www.jemca.or.jp/wp-content/uploads/2026/01/gyoiseisyoshihoukaisei.pdf)). One firm reports the ministry's view that entering data electronically can count as "preparing" (unverified; [dsg.or.jp](https://dsg.or.jp/column/other-visas/21254/)).
- **What this means:**
  - Self-serve software where the customer enters its own data and produces its own 定期報告 is the safer design. No source was found that rules on software (unverified).
  - **Do not sell a "we fill in your report for you" service.** Do not have staff type a customer's paper ledger into the report for a fee.
  - Done-for-you help goes through a partner 行政書士, who bills the customer directly. That is also a channel (see "Go-to-market").
- **Action:** get a written opinion from a 行政書士 or lawyer before launch (included in the ¥600,000 legal budget).

### Personal data (APPI)

- **The ledger holds personal data** of the breeder's buyers. Every business that handles personal data has APPI duties ([e-Gov APPI](https://laws.e-gov.go.jp/law/415AC0000000057)).
- **Cross-border transfer (APPI Art. 28).** A Japanese business that gives personal data to a third party abroad, including an outsourced processor, normally needs the data subject's prior consent. The exceptions are:
  - the recipient is in a country the Personal Information Protection Commission (PPC) has designated as equivalent; **the EU and the UK are designated**;
  - the recipient has a system meeting the PPC's standards;
  - an Art. 27 exception applies.
  ([PPC FAQ](https://www.ppc.go.jp/all_faq_index/faq1-q12-1); [JIPDEC](https://www.jipdec.or.jp/library/report/i5citv00000010va-att/20230905_s01.pdf)).
- **What it means here:**
  - **If the founder's company is in the EU or the UK**, customers can use the app with no special consent from their buyers.
  - **If it is elsewhere**, the data-processing terms must commit the company to APPI-equivalent measures (the "standards" route), and the privacy page must explain this.
  - Either way, host in a Tokyo cloud region if practical (trust), and keep a breach-response plan; APPI requires breach reports to the PPC (unverified detail).
- **Outreach email rules.** Japan's anti-spam law requires prior consent for advertising emails. One exception covers businesses that publish their own email address, unless they also publish that they refuse ads. Every email needs an opt-out ([総務省 pamphlet](https://www.soumu.go.jp/main_sosiki/joho_tsusin/d_syohi/pdf/m_mail_pamphlet.pdf)). So emailing a kennel's published business address is allowed, with an opt-out link.

### Insurance

Cyber and professional-liability cover for a small SaaS: budget ¥200,000 a year (my estimate, unverified). Check whether the founder's home-country policy covers Japanese customers.

## Financial model

Month 1 is October 2026 and month 36 is September 2029. Quarters are calendar quarters. All figures are in ¥ million unless marked, before income tax. The founder is unpaid in the main tables. The model runs by month in a short Python script (kept in the session scratchpad, not in the repo). Every assumption is my estimate unless a source is given.

### Assumptions

| Assumption | Low | Base | High | Basis |
|---|---|---|---|---|
| Buyer pool | about 25,000 sites with the ledger duty; core 13,347 breeders | same | same | [02 file](02-market-and-competition.md) |
| New paying customers, years 1 / 2 / 3 | 60 / 110 / 140 | 180 / 300 / 380 | 400 / 700 / 900 | Base ≈ 2.7% of obliged sites by month 36, near the 02 file's base (about 800 customers in year 3) |
| Seasonality of new sales (Oct→Sep) | 0.5, 0.6, 0.7, 0.8, 1.0, 1.6, **2.4, 2.0**, 0.8, 0.5, 0.4, 0.7 | same | same | Report window April-May. Year 1 starts selling in December. |
| Billing mix | 70% annual (paid up front), 30% monthly (list price 20% higher) | same | same | Plan design |
| First renewal / later renewals | 60% / 75% | 72% / 85% | 80% / 88% | The 5-year record duty makes leaving awkward (my estimate) |
| Revenue per customer per year, years 1 / 2 / 3 | ¥12,000 / 14,000 / 15,000 | ¥14,000 / 16,500 / 18,000 | ¥15,000 / 18,000 / 20,000 | Plan mix and discounts ("Pricing") |
| Build | Founder plus AI agents; tools ¥60,000 a month for 6 months, then ¥30,000 | same | same | No hired developers |
| Hosting, email, monitoring (¥ a month, years 1 / 2 / 3) | 20k / 25k / 30k | 20k / 30k / 40k | 30k / 45k / 60k | Tokyo cloud region |
| Legal (terms, 行政書士 content review, 行政書士 Act opinion) | ¥600,000 in months 1-3, then ¥30,000 a month | same | same | "Contracts" |
| Security test | ¥500,000 in month 3; ¥300,000 retest in months 15 and 27 | same | same | (unverified prices) |
| Trademark / insurance | ¥150,000 once / ¥200,000 a year | same | same | (unverified) |
| Japanese contractor for support and outreach (¥ a month, years 1 / 2 / 3, from month 3) | 50k / 60k / 80k | 100k / 150k / 220k | 150k / 400k / 600k | about ¥2,500 an hour (unverified) |
| Marketing (¥ million, years 1 / 2 / 3) | 1.2 / 1.4 / 1.4 | 2.0 / 2.6 / 3.0 | 3.5 / 5.0 / 6.0 | Plan above |
| Partner fees | 20% of first-year revenue on 20% of new customers | on 30% | on 40% | "Go-to-market" |
| Payment fees | 6.5% of cash in | same | 6.5%, then 4.3% once billing moves to a GK | "Payments" |
| Founder company admin abroad | ¥40,000 a month | same | same | depends on country (unverified) |
| Japan presence | virtual office + 050 number ¥12,000 a month | same (GK variant shown separately) | GK from month 13: ¥1.18M once, then ¥75,000 a month | "Company setup" |
| JCT | none due within 36 months | none | none (billing moves to a new GK before the foreign company is caught) | "Payments" |

### Base case by quarter (no founder pay)

| Quarter | New | Churned | Active (end) | Cash in | ARR (end) | Costs | Net | Cumulative cash |
|---|---|---|---|---|---|---|---|---|
| Q1 Oct-Dec 26 | 5 | 0 | 5 | 0.05 | 0.08 | 2.45 | -2.40 | -2.40 |
| Q2 Jan-Mar 27 | 56 | 0 | 61 | 0.59 | 0.90 | 1.27 | -0.68 | -3.07 |
| Q3 Apr-Jun 27 | 91 | 2 | 149 | 1.05 | 2.21 | 1.32 | -0.27 | -3.35 |
| Q4 Jul-Sep 27 | 28 | 4 | 174 | 0.47 | 2.56 | 1.24 | -0.78 | -4.12 |
| Q5 Oct-Dec 27 | 45 | 5 | 214 | 0.83 | 3.71 | 2.11 | -1.28 | -5.41 |
| Q6 Jan-Mar 28 | 85 | 16 | 283 | 1.79 | 4.92 | 1.70 | +0.08 | -5.32 |
| Q7 Apr-Jun 28 | 130 | 24 | 388 | 2.77 | 6.77 | 1.80 | +0.97 | -4.35 |
| Q8 Jul-Sep 28 | 40 | 13 | 415 | 1.25 | 7.23 | 1.64 | -0.39 | -4.74 |
| Q9 Oct-Dec 28 | 57 | 17 | 455 | 1.81 | 8.64 | 2.53 | -0.71 | -5.45 |
| Q10 Jan-Mar 29 | 108 | 29 | 533 | 3.30 | 10.13 | 2.17 | +1.13 | -4.32 |
| Q11 Apr-Jun 29 | 165 | 43 | 655 | 4.92 | 12.46 | 2.32 | +2.60 | -1.72 |
| Q12 Jul-Sep 29 | 51 | 22 | 684 | 2.23 | 13.00 | 2.05 | +0.18 | -1.53 |

Q1 and Q5 carry the one-off legal, security, trademark and insurance costs and the start of the training season, with few sales.

### Low case by quarter (no founder pay)

| Quarter | Active (end) | Cash in | ARR (end) | Costs | Net | Cumulative cash |
|---|---|---|---|---|---|---|
| Q1 | 2 | 0.02 | 0.02 | 2.20 | -2.18 | -2.18 |
| Q2 | 20 | 0.17 | 0.26 | 0.86 | -0.69 | -2.88 |
| Q3 | 49 | 0.30 | 0.62 | 0.88 | -0.58 | -3.45 |
| Q4 | 57 | 0.13 | 0.72 | 0.86 | -0.73 | -4.18 |
| Q5 | 71 | 0.24 | 1.04 | 1.46 | -1.22 | -5.40 |
| Q6 | 94 | 0.51 | 1.39 | 0.99 | -0.48 | -5.88 |
| Q7 | 130 | 0.79 | 1.92 | 1.01 | -0.23 | -6.11 |
| Q8 | 138 | 0.35 | 2.04 | 0.97 | -0.62 | -6.73 |
| Q9 | 150 | 0.50 | 2.37 | 1.56 | -1.06 | -7.79 |
| Q10 | 175 | 0.89 | 2.77 | 1.09 | -0.20 | -7.99 |
| Q11 | 214 | 1.33 | 3.38 | 1.13 | +0.21 | -7.78 |
| Q12 | 221 | 0.59 | 3.50 | 1.06 | -0.47 | -8.25 |

### High case by quarter (no founder pay; Japanese GK from month 13)

| Quarter | Active (end) | Cash in | ARR (end) | Costs | Net | Cumulative cash |
|---|---|---|---|---|---|---|
| Q1 | 12 | 0.13 | 0.19 | 2.92 | -2.79 | -2.79 |
| Q2 | 135 | 1.41 | 2.15 | 1.95 | -0.54 | -3.33 |
| Q3 | 334 | 2.50 | 5.29 | 2.09 | +0.41 | -2.92 |
| Q4 | 390 | 1.13 | 6.18 | 1.88 | -0.75 | -3.67 |
| Q5 | 487 | 2.12 | 9.25 | 4.99 | -2.87 | -6.54 |
| Q6 | 660 | 4.64 | 12.55 | 3.52 | +1.12 | -5.42 |
| Q7 | 924 | 7.21 | 17.59 | 3.74 | +3.47 | -1.95 |
| Q8 | 996 | 3.29 | 18.94 | 3.35 | -0.06 | -2.01 |
| Q9 | 1,101 | 4.97 | 23.26 | 4.88 | +0.09 | -1.92 |
| Q10 | 1,305 | 9.08 | 27.59 | 4.69 | +4.38 | +2.46 |
| Q11 | 1,621 | 13.54 | 34.29 | 5.04 | +8.49 | +10.96 |
| Q12 | 1,703 | 6.20 | 35.99 | 4.41 | +1.79 | +12.75 |

### Scenario summary

| Measure | Low | Base | High |
|---|---|---|---|
| Paying customers at month 6 / 12 / 24 / 36 | 20 / 57 / 138 / 221 | 61 / 174 / 415 / 684 | 135 / 390 / 996 / 1,703 |
| ARR at month 12 / 24 / 36 | ¥0.7M / 2.0M / 3.5M | ¥2.6M / 7.2M / **13.0M** (US$82,000) | ¥6.2M / 18.9M / 36.0M |
| Cash in, years 1 / 2 / 3 | ¥0.6M / 1.9M / 3.3M | ¥2.2M / 6.6M / 12.3M | ¥5.2M / 17.3M / 33.8M |
| Costs, years 1 / 2 / 3 | ¥4.8M / 4.4M / 4.8M | ¥6.3M / 7.3M / 9.1M | ¥8.8M / 15.6M / 19.0M |
| Profit before founder pay, year 3 | -¥1.5M | **+¥3.2M** (US$20,000) | +¥14.8M (US$93,000) |
| Operating break-even (trailing 12 months) | not within 36 months | month 28 (Jan 2029) | month 20 (May 2028) |
| Cumulative cash positive for good | no | not by month 36 (-¥1.5M) | month 29 (Feb 2029) |
| **Peak cash need, founder unpaid** | ¥8.3M | **¥5.6M (US$35,000)** | ¥6.6M |
| Peak cash need with founder pay of ¥250,000 a month in year 2 and ¥400,000 in year 3 | ¥16.1M | ¥10.0M (US$64,000) | ¥7.6M |
| Acquisition cost per customer (marketing + partner fees + half the contractor), years 1 / 2 / 3 | ¥24,500 / 16,400 / 13,900 | ¥14,500 / 12,400 / 12,200 | ¥11,500 / 11,600 / 11,800 |

**Base case with a Japanese GK from month 22 (July 2028):** costs rise by about ¥1.3M in year 2 and ¥0.5M in year 3, net of lower card fees. Peak cash need becomes ¥6.9M, break-even moves to month 31 (April 2029), and year-3 profit falls to ¥2.7M.

**Sensitivity of the base case** (ARR at month 36 / year-3 profit / peak cash need / break-even month):

| Change | ARR m36 | Year-3 profit | Peak cash need | Break-even |
|---|---|---|---|---|
| None | ¥13.0M | +¥3.2M | ¥5.6M | month 28 |
| Price 20% lower | ¥10.4M | +¥1.0M | ¥7.4M | month 32 |
| 30% fewer new customers | ¥9.1M | -¥0.2M | ¥8.4M | not within 36 months |
| Renewals 60% / 75% | ¥11.6M | +¥2.0M | ¥6.0M | month 30 |
| Marketing 50% higher, same sales | ¥13.0M | +¥1.7M | ¥8.1M | month 31 |

### Unit economics (base case, my estimate)

- **Payback:** acquisition cost about ¥12,000-14,500 against first-year revenue of about ¥14,000-16,500 net of fees. Payback is about 12 months.
- **Lifetime:** with 72% first renewal and 85% later, a customer stays about 5 years on average (capped at 5 for prudence). Gross margin after payment fees, hosting and support is about 75-80%. Lifetime value is about ¥65,000-70,000, so LTV/CAC is about 5.
- **The ceiling is the small, price-sensitive market, not the unit economics.** The base case only reaches 2.7% of obliged sites.

### What the numbers mean

- **Cash need is small.** About ¥6 million (US$38,000) covers the base case with the founder unpaid. Plan ¥10 million (US$64,000) to allow for founder pay or a slow first spring.
- **This is a side business in Japan alone.** Base year-3 profit of about ¥3 million does not pay a founder. It becomes a living only in the high case (marketplace or auction partner) or with Taiwan and Korea added.
- **The first spring decides it.** By 30 June 2027 the base case has about 150 paying customers and the low case about 50. That gap is visible within 9 months, so the kill test below is set at the end of June 2027.
- **Seasonality matters for cash.** October-December quarters lose money in every case, because sales cluster in April-May. Keep a 6-month cash buffer each autumn.

## Regional expansion

**Order: widen inside Japan first (cheap), then Taiwan, then maybe Korea.**

### Step 1: more segments in Japan (from month 9)

Same language, same payments, same law. Counts are from [MOE R7 2_1_1](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_1.pdf) via the [02 file](02-market-and-competition.md).

| Segment | Count | Product | Price idea (my estimate) |
|---|---|---|---|
| Exhibitors (animal cafés, petting farms) and rental | 4,541 + 1,622 registrations | By-breed ledger and report, daily check log | Breeder plan |
| Sellers of other animals (birds, reptiles, small mammals) | 5,615 | Same. New keeping standards for rabbits, hamsters and others are expected to start in about spring 2027 ([01 file](01-law-and-requirements.md)). | Breeder plan or report pack |
| Boarding and training (pet hotels, trimming salons) | 32,576 + 5,234 registrations | Daily check log and trade record only | ¥980 a month "light" plan |
| Non-profit shelters that rehome (type-2) | 1,844 | Per-animal ledger | Free. Goodwill, and a hedge against welfare criticism. |

### Step 2: Taiwan (prepare from month 18, launch about month 24-30 if Japan is at or above base)

- **Fit.** Sellers keep a 3-year sales record, breeders and sellers report chip use every quarter, and lifetime litter limits apply. About 3,733 valid licences (1,845 breeding, 2,409 selling) by the 02 file's count ([02 file](02-market-and-competition.md)).
- **Tax.**
  - Business buyers with an 8-digit tax ID self-account for the 5% VAT (reverse charge).
  - A foreign seller of e-services must register only for consumer sales above NT$600,000 a year. The threshold was raised from NT$480,000 on 7 April 2025 ([Kintsugi guide](https://trykintsugi.com/sales-tax-guides/apac/taiwan.md); [PayPro Global](https://payproglobal.com/saas-sales-tax/taiwan/)) (third-party sources, unverified with Taiwan's Ministry of Finance).
- **Cost to enter:** Traditional Chinese interface by AI agents plus a native reviewer, a local legal check and Taiwan-specific forms. About ¥1.0-1.5 million (my estimate).
- **Potential:** 5-10% of about 4,000 sites at about NT$3,000-4,000 a year is about ¥3-7 million a year (my estimate).

### Step 3: South Korea (decide after a separate check)

- About 2,010 producers and 3,114 sellers. They have a monthly trade report, which may already go through a state system ([02 file](02-market-and-competition.md)).
- Korean VAT on foreign digital services to businesses was not checked (unverified).
- Third choice.

Other countries were not checked.

## Exit and partnerships

### Partners (in order of value)

1. **行政書士 offices** handling 動物取扱業 registrations. They refer customers and sell done-for-you setup themselves.
2. **Auction operators and ペットパーク流通協会.** A per-puppy record export that supports MOE's 2024 birth-date checks ([MOE 資料2](https://www.env.go.jp/council/content/i_10/000357242.pdf)).
3. **Puppy marketplaces** (みんなのペットオンライン, which runs みんなのブリーダー). A badge or data feed for its breeder screening ([min-breeder.com](https://www.min-breeder.com/)).
4. **Industry bodies:** 全国ペット協会, 犬猫適正飼養推進協議会 ([02 file](02-market-and-competition.md)).
5. **Software and services.** Vet record systems (Vetect, anivet and others), POS and booking (Square, STORES), and pet insurers for shop customers. All are unverified as interested.

### Exit options

- **Likely buyers:** a puppy marketplace or auction operator (it gains breeder lock-in), a vet or pet-business software vendor, or a Japanese vertical-SaaS buyer. Interest is unverified.
- **Price.** Small SaaS businesses listed for sale ask a median 2.0× revenue or 3.4× profit; the middle half ask 1.0-3.1× revenue. These are asking prices from 651 listings, so above closing prices ([BigIdeasDB 2026](https://bigideasdb.com/state-of-saas-valuations-2026)). Japanese small-deal marketplaces (TRANBI, BATONZ, ラッコM&A) were not checked (unverified).
- **What that means at month 36:**
  - Base case (ARR ¥13M, profit about ¥3M): about **¥13-26 million (US$80,000-165,000)**.
  - High case (ARR ¥36M, profit about ¥15M): about ¥36-100 million.
  - A Japanese acquirer would prefer a Japanese entity, which is one more reason to open the GK before a sale.
- **Other ways out:** a licence or white-label deal with a marketplace or auction, paid per breeder. Or sell the code and customer list to a 行政書士 network.

## Risks and mitigations

| Risk | Likelihood / impact | Mitigation |
|---|---|---|
| **Breeders will not pay** (the free Excel is "good enough") | High / high | 25 interviews before building more than the MVP; founding price; free tier and calculator to own the workflow; lead with inspection fear, not the report. Kill test 30 June 2027. |
| **A marketplace or auction adds a free ledger** | Medium / high | Approach them first as partners; offer an export; win breeders early; keep 5-year history as the moat. |
| **State tool creep** (the MOE chip database already holds some breeding data, [02 file](02-market-and-competition.md)) | Low-medium / medium | Integrate (chip CSV); focus on daily logs, breeding limits and inspection mode, which the state does not offer. |
| **行政書士 Act** (amended 1 Jan 2026) | Medium / high | Strictly self-serve; no paid form-filling; written legal opinion before launch; done-for-you only through 行政書士 partners. |
| **Foreign-company registration** (Company Act 817-818) | Low / medium | Self-serve, no Japanese office or staff; GK when a trigger fires (see "Company setup"). |
| **Crossing the ¥10M JCT threshold unnoticed** | Low / medium | Track receipts by year and half-year; act at ¥7M. |
| **Japanese cards declined by issuers or Stripe review** | Medium / low | 3-D Secure; test a Payoneer JPY receiving account as the bank-transfer route; explain to Stripe that we sell software, not animals. |
| **Reputation** (the pet-sales trade is criticised publicly) | Medium / medium | Present it as a welfare-compliance tool. Free plan for non-profit shelters. Avoid marketing that praises volume breeding. |
| **Data breach or privacy complaint** | Low / high | Tokyo hosting region, encryption, backups, security test, breach plan; APPI-compliant data terms; EU or UK seller entity if possible. |
| **Wrong totals lead to a false report** | Low / medium | Reconciliation and user confirmation before export; terms put filing responsibility on the user; liability cap. |
| **Solo founder abroad, Japanese language** | Medium / medium | Native contractor for all customer contact; 行政書士 review of content; AI drafting always checked by a native speaker. |
| **Seasonal cash dips** (Oct-Dec) | High / low | Annual prepayment; 6-month cash buffer each autumn. |
| **Exchange rate** (revenue in yen, some costs in dollars or euros) | Medium / low | Keep Japanese costs (contractor, ads) in yen; price reviews yearly. |
| **Law change** (the Act was last amended by Act No. 30 of 5 June 2026; no ledger change found, [01 file](01-law-and-requirements.md)) | Low / low-medium | Yearly 行政書士 review (in the legal retainer); new small-mammal standards are an upsell. |

## Milestones and kill criteria

| Date | Milestone (base case) | Kill or change rule |
|---|---|---|
| 25 Oct 2026 (day 14) | 20 breeder and 5 shop interviews done | **Stop or rethink** if fewer than 5 of 20 breeders say they would pay ¥980+ a month, or fewer than 3 agree to a pilot. |
| 22 Nov 2026 (day 42) | MVP live; 15 pilot users with real data | If pilots will not import their data, the onboarding is wrong: fix before selling. |
| 20 Dec 2026 (day 70) | 10 paying; security test and legal review done | Do not open paid plans before the legal review. |
| 9 Jan 2027 (day 90) | 10+ paying, 2+ 行政書士 partners, 1 auction or association in talks | Day-90 review: continue, change price, or stop. |
| 31 Mar 2027 | 60 paying; one channel partner signed or piloting | |
| **30 Jun 2027** | **150 paying** (end of the first report season) | **Kill or pivot if fewer than 50** (the low case). Pivot: a cheap report-only tool, or sell the code to a partner. |
| 30 Sep 2027 | 170+ active; support under 2 hours per customer a year | |
| Jun 2028 | First-year renewals at 65% or more | **Kill if renewals are below 50%.** |
| 30 Jun 2028 | 380+ active, ARR ¥6.5M+ | If below 150 active, stop investing; run for cash or sell. |
| Early 2029 | Decide on the GK, Taiwan and founder pay | GK if Japanese receipts approach ¥10M a year or a partner needs it. |
| 30 Sep 2029 | About 680 active, ARR about ¥13M | |

## Open questions

1. **Willingness to pay at ¥14,800 a year.** Only interviews can settle it (days 1-14).
2. **The founder's company country.** It decides Stripe fees, Payoneer and bank options, the APPI route (EU or UK is easiest) and tax-treaty cover.
3. **Does self-serve report software fall under the amended 行政書士 Act?** No source found; get a written opinion.
4. **Does Company Act Art. 818 reach a small foreign subscription SaaS in practice?** No enforcement against small firms found.
5. **Paddle's and Stripe Managed Payments' Japanese registration.** Do they issue qualified invoices with a T-number? This only matters once the seller becomes taxable.
6. **Card decline rates** for Japanese cards on a foreign Stripe account (unverified).
7. **Search volume and cost per click** for 定期報告, 帳簿 and 繁殖台帳 keywords in March-May.
8. **Partner terms:** will auction operators, みんなのペットオンライン or associations promote a tool, and at what fee?
9. **Real contractor rates** for Japanese-speaking part-time support (assumed ¥2,500 an hour).
10. **The exact cost of a Japanese tax agent** for a registered foreign business. (The small-amount rule threshold is now confirmed: ¥100M of base-period sales.)
12. **Can a foreign SaaS company receive domestic yen transfers through Payoneer**, and at what fee? If not, bank-transfer buyers wait for the GK.
11. **The Japanese small-deal M&A market** for vertical SaaS (TRANBI, BATONZ, ラッコM&A): multiples and buyer types.

## Sources

Primary sources are marked (P). Third-party sources are marked (3P); treat their figures as indicative.

**Internal files (this deep dive)**
- [B2 report](../reports/japan-b2.md); [01 law and requirements](01-law-and-requirements.md); [02 market and competition](02-market-and-competition.md); [03 product and tech](03-product-and-tech.md).

**Exchange rates**
- (P) Bank of Japan, daily FX, 2 Oct 2026: https://www.boj.or.jp/en/statistics/market/forex/fxdaily/fxlist/fx261002.pdf

**Market, buyers and the selling calendar**
- (P) Ministry of the Environment, 動物取扱業 statistics R7, registrations by category (2_1_1): https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_1.pdf
- (P) Ministry of the Environment, inspections and sanctions R7 (2_1_3): https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_3.pdf
- (P) Ministry of the Environment, council paper 資料2 (2023 national breeder sweep; 2024 birth-date checks): https://www.env.go.jp/council/content/i_10/000357242.pdf
- (P) Ministry of the Environment, microchip registration fees: https://www.env.go.jp/nature/dobutsu/aigo/pickup/chip.html
- (P) Tokyo Metropolitan Government, R8 responsible-person training notice: https://www.hokeniryo.metro.tokyo.lg.jp/documents/d/hokeniryo/2026-07-14-152055-700
- (P) Aichi Prefecture, R8 responsible-person training: https://www.pref.aichi.jp/soshiki/doukan-c/doutorikennsyuukai.html
- (P) Aichi Prefecture, registration fees: https://www.pref.aichi.jp/site/gyoute/75190.html
- (P) Hiroshima Prefecture, R8 training: https://www.pref.hiroshima.lg.jp/site/apc/r8-sekininsya-kensyu.html
- (P) Interpets Tokyo (Messe Frankfurt Japan): https://interpets.jp.messefrankfurt.com/
- (P) Japan Fair Trade Commission, みんなのペットオンライン case, May 2018: https://www.jftc.go.jp/houdou/pressrelease/h30/may/180523.html
- (P) みんなのブリーダー home page (breeder count): https://www.min-breeder.com/
- (3P) Makuake, breeder project (puppy prices): https://www.makuake.com/project/breedersnavi/

**Price anchors**
- (P) freee pricing: https://www.freee.co.jp/pricing/
- (3P) atsoho, freee vs Money Forward for sole traders: https://atsoho.com/apps/compare/freee-kaikei-vs-mf-cloud-kakuteishinkoku
- (3P) hatenabase, kintone 2026 pricing guide: https://hatenabase.jp/?p=15816
- (3P) NTT East column, kintone price: https://business.ntt-east.co.jp/column/service/ohs/kintone-price.html
- (3P) Aurant, pet-shop POS and booking costs: https://aurant-technologies.com/?p=27904
- (3P) 鮎澤パートナーズ, 動物取扱業 registration fees: https://ayusawa-partners.jp/column/pet-doubutsu-toriatsukai

**Marketing tools and rules**
- (P) LINE Yahoo, LINE official account notice, Feb 2026: https://www.lycbiz.com/jp/news/line-official-account/20260216/?o=IM0021
- (3P) ligla, LINE official account costs: https://ligla.jp/blog/line-official/cost/
- (P) Ministry of Internal Affairs, postal rate revision (¥110 standard letter): https://www.soumu.go.jp/main_content/000979809.pdf
- (3P) ecnomikata, Japan Post October 2024 rate change: https://ecnomikata.com/ecnews/43374/
- (P) Ministry of Internal Affairs, anti-spam email law pamphlet: https://www.soumu.go.jp/main_sosiki/joho_tsusin/d_syohi/pdf/m_mail_pamphlet.pdf
- (3P) Infcurion survey of small businesses on invoice payment, via digitalpr: https://digitalpr.jp/r/116809

**Payments**
- (P) Stripe, supported card brands by account country: https://docs.stripe.com/payments/cards/supported-card-brands
- (P) Stripe Ireland pricing: https://stripe.com/ie/pricing
- (P) Stripe Japan pricing: https://stripe.com/jp/pricing
- (P) Stripe support, konbini for Japan-based accounts: https://support.stripe.com/questions/enabling-konbini-payments-for-japan-based-stripe-accounts
- (P) Stripe Managed Payments eligibility: https://docs.stripe.com/payments/managed-payments/eligibility
- (P) Paddle, countries where Paddle charges tax: https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/
- (P) Paddle pricing: https://www.paddle.com/pricing
- (3P) Dodo Payments, Stripe Managed Payments fees: https://dodopayments.com/blogs/stripe-managed-payments-fees-explained
- (3P) Dodo Payments, Lemon Squeezy vs Stripe: https://dodopayments.com/blogs/lemon-squeezy-vs-stripe/
- (P) Airwallex, JPY global account marketing page (claims local details; contradicted by the help centre): https://www.airwallex.com/au/features/global-accounts/JPY-account
- (P) Airwallex help centre, Global Account currencies by location (JPY SWIFT-only, HK/SG/DK): https://help.airwallex.com/hc/en-gb/articles/900001759623-Which-currencies-can-I-get-a-Global-Account-in-and-what-payments-can-I-receive
- (P) Wise, JPY account page (UK local details exclude JPY): https://wise.com/gb/account/jpy-account
- (P) Payoneer, local receiving accounts (Japan LOCAL JPY): https://www.payoneer.com/local-receiving-accounts/
- (3P) ProZ forum, receiving JPY via Payoneer: https://connect.proz.com/topic/359222
- (P) MUFG, foreign-exchange fees: https://www.bk.mufg.jp/tesuuryou/gaitame.html
- (P) MUFG, domestic transfer fees: https://www.bk.mufg.jp/tesuuryou/furikomi.html
- (3P) Wise, Stripe charges in the UK: https://wise.com/gb/blog/stripe-payments-charges-uk
- (3P) Xero, Stripe fees by country: https://www.xero.com/pricing-plans/pricing-and-fees-for-stripe/
- (3P) checkoutpage, Stripe international fees 2026: https://checkoutpage.com/blog/stripe-international-fees

**Consumption tax (JCT) and withholding**
- (P) National Tax Agency, pamphlet on cross-border electronic services (rev. Jun 2026): https://www.nta.go.jp/publication/pamph/pdf/0024003-087_01.pdf
- (P) National Tax Agency, 2023 reform summary (small-amount rule, ¥100M / ¥50M thresholds, to 30 Sep 2029): https://www.nta.go.jp/publication/pamph/shohi/kaisei/202304/02.htm
- (3P) Money Forward, small-amount rule guide (updated May 2026): https://biz.moneyforward.com/invoice/basic/60404/
- (P) National Tax Agency, simplified taxation (Tax Answer 6505): https://www.nta.go.jp/taxes/shiraberu/taxanswer/shohi/6505.htm
- (P) National Tax Agency, qualified-invoice registration procedure: https://www.nta.go.jp/taxes/tetsuzuki/shinsei/annai/hojin/annai/invoice_01.htm
- (P) National Tax Agency, qualified-invoice Q&A: https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/pdf/qa/16.pdf
- (P) Ministry of Finance, list of Japan's tax treaties: https://www.mof.go.jp/tax_policy/summary/international/tax_convention/tax_convetion_list_jp.html
- (3P) Yamada & Partners, 2024 reform for foreign businesses: https://www.yamada-partners.jp/reform/r6/c01-review-of-the-application-of-special-provisions-of-the-business-tax-exemption-point-system-for-foreign-businesses
- (3P) Zeiken, 2024 reform article: https://www.zeiken.co.jp/kokusaizeimu/article/202407/KZ2024070230101.php
- (3P) Shin-Nippon Hoki, simplified taxation barred for foreign businesses without a PE: https://www.sn-hoki.co.jp/article/tamasters/tamaster3288922/
- (3P) Koyano CPA newsletter, Dec 2024: https://koyano-cpa.gr.jp/wordpress/wp-content/uploads/2024/12/merumaga241212-1.pdf
- (3P) 鮎澤パートナーズ, withholding on IT and SaaS fees (updated 5 Sep 2026): https://ayusawa-partners.jp/column/it-kenkyukaihatsu-zeigaku

**Company setup**
- (P) Ministry of Justice, foreign-company registration: https://www.moj.go.jp/MINJI/minji07_00275.html
- (3P) RSM Shiodome, foreign-company registration penalties: https://shiodome.co.jp/js/blog/12027
- (3P) RSM Shiodome, no resident representative needed since 2015: https://shiodome.co.jp/js/blog/889
- (3P) Bengo4, 48 foreign IT firms asked to register (2022): https://www.bengo4.com/c_23/n_14775/
- (3P) Arab News Japan, registrations by Aug 2022: https://www.arabnews.jp/en/business/article_78947
- (3P) 創業手帳, company formation fees: https://sogyotecho.jp/company_fee/
- (3P) all-senmonka, formation fees: https://www.all-senmonka.jp/moneyizm/4690/
- (3P) freee, formation and running costs: https://www.freee.co.jp/kb/kb-launch/kaisyasetsuritsu-costs/
- (3P) Kaizen CPA, GK formation price list for foreign owners (2026): https://kaizencpa.com/download/jp/Japan%20Goudou%20Kaisha%20Registration%20Procedures%20and%20Fees%28JP%29.PDF
- (3P) meetsmore, tax accountant fees: https://meetsmore.com/services/tax-accountant/media/270
- (3P) biz.ne.jp, tax accountant request example: https://www.biz.ne.jp/subject/toi_detail.html?tid=990214
- (3P) solution-supporter, business manager visa change (Oct 2025): https://solution-supporter.jp/keiei-kanri-visa-500man-kaisei/
- (3P) office-tree, business manager visa change: https://office-tree.jp/blog/immigration/keiei-kanri-visa-2025-kaisei/

**Contracts, liability and data**
- (P) e-Gov, Civil Code (standard terms, Arts. 548-2 to 548-4): https://laws.e-gov.go.jp/law/129AC0000000089
- (P) e-Gov, Consumer Contract Act: https://laws.e-gov.go.jp/law/412AC0000000061
- (P) e-Gov, Specified Commercial Transactions Act: https://laws.e-gov.go.jp/law/351AC0000000057
- (P) e-Gov, Act on General Rules for Application of Laws: https://laws.e-gov.go.jp/law/418AC0000000078
- (P) e-Gov, Act on the Protection of Personal Information: https://laws.e-gov.go.jp/law/415AC0000000057
- (P) Personal Information Protection Commission FAQ on foreign transfers: https://www.ppc.go.jp/all_faq_index/faq1-q12-1
- (3P) JIPDEC report on cross-border transfer (EU and UK equivalence): https://www.jipdec.or.jp/library/report/i5citv00000010va-att/20230905_s01.pdf
- (P) Ministry of Internal Affairs, 行政書士 system and 2026 amendment: https://www.soumu.go.jp/main_sosiki/jichi_gyousei/gyouseishoshi/index.html
- (3P) JEMCA notice on the 行政書士 Act amendment: https://www.jemca.or.jp/wp-content/uploads/2026/01/gyoiseisyoshihoukaisei.pdf
- (3P) dsg.or.jp, electronic data entry as "preparing" documents: https://dsg.or.jp/column/other-visas/21254/
- (3P) atsoho, terms-of-service drafting prices: https://atsoho.com/blog/terms-of-service-drafting-side-job
- (3P) biz.ne.jp, terms drafting request example: https://www.biz.ne.jp/subject/toi_detail.html?tid=988054

**Expansion and exit**
- (3P) Kintsugi, Taiwan e-services VAT guide: https://trykintsugi.com/sales-tax-guides/apac/taiwan.md
- (3P) PayPro Global, Taiwan SaaS tax: https://payproglobal.com/saas-sales-tax/taiwan/
- (3P) BigIdeasDB, state of SaaS valuations 2026: https://bigideasdb.com/state-of-saas-valuations-2026

