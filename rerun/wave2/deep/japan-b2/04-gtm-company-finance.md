# Japan animal-business records tool: go-to-market, payments, company setup and financials (deep dive 04)

Date: 10 Oct 2026. Status: IN PROGRESS (sections are filled in order; see the end of the file for what is still open). Builds on [the B2 report](../reports/japan-b2.md), [01 law](01-law-and-requirements.md) and [02 market](02-market-and-competition.md).

Conventions:
- Money is in yen (¥). Planning rates: ¥158 = US$1 and ¥177 = €1, from the Bank of Japan 5 pm rates of 2 Oct 2026 (USD/JPY 157.57, EUR/JPY 177.43) ([BoJ](https://www.boj.or.jp/en/statistics/market/forex/fxdaily/fxlist/fx261002.pdf)). The 02 file used ¥150; the difference does not change any conclusion.
- "JCT" is Japan's consumption tax (消費税), 10% on software.
- "My estimate" marks numbers I derived. "(unverified)" marks facts I could not confirm.
- The founder builds the software with Claude Code and parallel AI agents and is unpaid unless stated. He sells from his own company abroad.

## Summary

(drafting)

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

(drafting)

## 90-day launch plan

(drafting)

## 12-month marketing plan and budget

(drafting)

## Payments and tax friction

### Short answer

- **Sell from the founder's company with Stripe, priced in yen, with no JCT added.** Japanese Visa, Mastercard, JCB and Amex cards can pay a foreign Stripe account. Fees are about 6% on an annual plan.
- **The seller does not need to register for Japanese JCT** until its Japanese sales pass ¥10 million in a "base period" (two years earlier). In the base case that is not before about 2031.
- **There is no withholding tax** on a SaaS subscription paid to a foreign company. It is a service fee, not a royalty.
- **A merchant of record (Paddle) is worse here.** It adds 10% JCT to a price that would otherwise carry none, and costs about the same in fees.
- **Konbini and PayPay need a Japanese Stripe account**, so a Japanese company. They are not needed for business buyers.
- **For buyers who insist on a bank transfer**, open a JPY receiving account with local Japanese bank details (Airwallex offers one).

### Do Japanese cards work with a foreign seller?

- **Yes for Visa, Mastercard, JCB and Amex.** Stripe accepts JCB on accounts in Australia, Canada, Hong Kong, Japan, New Zealand, Singapore, Switzerland, the UK, the US and every EEA country except Iceland. 3-D Secure for JCB works on EEA, UK, Swiss, Hong Kong, Singapore and Japanese accounts ([Stripe card brands](https://docs.stripe.com/payments/cards/supported-card-brands)). JCB is Japan's own card brand, so this matters.
- **Konbini (convenience-store cash payment) is only for Japan-based Stripe accounts.** Activation needs a Japanese website and a 30-day partner review ([Stripe support](https://support.stripe.com/questions/enabling-konbini-payments-for-japan-based-stripe-accounts)).
- **Card refusals:** some Japanese issuers may decline foreign-merchant charges (unverified). Mitigation: show "海外決済" in the FAQ, use 3-D Secure, and offer bank transfer.

### Stripe fees (founder's company abroad, Ireland pricing as the example)

- **Card fees:** EEA cards 1.5% + €0.25; UK cards 2.5% + €0.25; **international cards (Japanese cards) 3.15% + €0.25**, plus **2% when currency conversion is needed** ([Stripe Ireland pricing](https://stripe.com/ie/pricing)).
- **Add-ons:** Stripe Billing (subscriptions) is 0.7% of billing volume. Stripe Invoicing is 0.4% per paid invoice. Stripe Tax is 0.5% per transaction where you are registered (same source). Stripe Tax is not needed while exempt.
- **Other countries:** UK and US accounts price international cards differently (unverified; check the founder's country).

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
- **A wire from a Japanese bank to a foreign account is too costly** for a ¥14,800 plan. Fees are several thousand yen (unverified).
- **Fix: a JPY account with local Japanese bank details.** Airwallex's JPY Global Account gives a branch code and account number that Japanese customers pay into like a domestic transfer. Settlement is about one working day ([Airwallex JPY account](https://www.airwallex.com/au/features/global-accounts/JPY-account)). Which founder countries can open one, and its fees, are unverified. Wise's ability to give a business JPY receiving details was not confirmed.
- **Use it for:** annual Shop plans, partner invoices and customers who refuse cards. Send a 請求書 (invoice) PDF with the account details. Match payments by hand at first.
- The buyer pays the domestic transfer fee, as is normal in Japan (unverified).

### Buyer-side tax: how JCT treats this sale

The National Tax Agency (NTA) pamphlet on cross-border services ([NTA, Jul 2024, revised Jun 2026](https://www.nta.go.jp/publication/pamph/pdf/0024003-087_01.pdf)) settles the main points:

1. **Cloud software is an "electronic service" (電気通信利用役務の提供).** It is taxed where the customer lives, so a sale to a Japanese breeder is a Japanese domestic sale.
2. **A self-serve web signup counts as "consumer-type" (消費者向け), even if the site says "for businesses".** The NTA says that a cloud service sold through a website, where sign-ups by non-businesses cannot in practice be blocked, is consumer-type. Only individually negotiated business contracts count as "business-type" (事業者向け). A business-type sale would use reverse charge.
3. **For consumer-type sales the foreign seller is the taxpayer, not the buyer.** But the foreign seller also gets the small-business exemption (事業者免税点制度).
4. **The buyer's input-tax credit needs a qualified invoice (適格請求書) from the seller.** The 80/70/50/30% transitional relief for purchases from non-registered sellers **does not apply** to consumer-type services from foreign businesses. **The small-amount rule (少額特例) does apply.** Smaller businesses can deduct purchases under ¥10,000 including tax on their books alone, until 30 Sep 2029. "Smaller" means base-period taxable sales of up to ¥100 million (threshold unverified here; the pamphlet says only 一定規模以下).
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
| Bank transfer into an Airwallex JPY account | ¥14,800 + the buyer's own transfer fee | FX conversion, about 0.5-1% (unverified) | ¥0 while exempt | ~¥14,700 | Eligible founder country |

Stripe Japan also offers konbini at 3.6% (minimum ¥120), bank transfer at 1.5% and PayPay at 3.98% ([Stripe Japan pricing](https://stripe.com/jp/pricing)).

### Setup checklist

1. Stripe on the founder's company: JPY prices, Stripe Billing, Japanese-language Checkout and customer portal, 3-D Secure on.
2. Airwallex (or similar) JPY receiving account, if the founder's country is eligible.
3. Japanese receipt template: seller name and address, "消費税：免税事業者のため対象外", plan, period.
4. Japanese FAQ on why there is no qualified-invoice number. Point 原則課税 buyers to the monthly plan (small-amount rule).
5. A spreadsheet that tracks Japanese receipts by calendar year and by half-year against the ¥10M tests. Act at ¥7M.

## Company setup (needed or not, costs)

### Recommendation

**Do not open a Japanese company at launch.** Sell from the founder's company abroad with Stripe, as above. Open a Japanese 合同会社 (GK, the Japanese LLC) only when one of these triggers fires:
1. Japanese receipts approach ¥10 million a year. The foreign company would then need a Japanese tax agent anyway, and a new GK with capital under ¥10 million starts with two JCT-exempt years (my reading of the new-company rule; confirm with a 税理士).
2. A channel partner (auction house, marketplace, chain) insists on a Japanese counterparty, 請求書払い (pay-by-invoice) or konbini.
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
| Minimum capital | ¥1 | ¥1 | [Kaizen quote](https://kaizencpa.com/download/jp/Japan%20Goudou%20Kaisha%20Registration%20Procedures%20and%20Fees(JP).PDF) |

A non-resident can be the sole member and representative. Since 2015 Japanese KK and GK can register with no representative living in Japan ([RSM Shiodome](https://shiodome.co.jp/js/blog/889)).

**"In person" is not really cheaper for a foreigner.** Even in Japan the founder needs these things:
- a Japanese registered address (a lease, or a virtual office that accepts company registration);
- a Japanese personal bank account to receive the capital before the company exists, or a paid "capital-receiving agent";
- a signature certificate from a notary in his home country, in place of a Japanese seal certificate;
- all documents in Japanese ([Kaizen quote](https://kaizencpa.com/download/jp/Japan%20Goudou%20Kaisha%20Registration%20Procedures%20and%20Fees(JP).PDF)).

A Japanese-speaking resident can do it for the official fees plus a cheap service (freee's 登記おまかせ plan is ¥50,000, against a market rate of about ¥100,000) ([freee](https://www.freee.co.jp/kb/kb-launch/kaisyasetsuritsu-costs/)). A foreign founder abroad realistically pays a full-service firm.

**Remote, full service for a foreign owner** (one firm's 2026 price list, net of JCT) ([Kaizen quote](https://kaizencpa.com/download/jp/Japan%20Goudou%20Kaisha%20Registration%20Procedures%20and%20Fees(JP).PDF)):

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

(drafting)

## Financial model

(drafting)

## Regional expansion

(drafting)

## Exit and partnerships

(drafting)

## Risks and mitigations

(drafting)

## Milestones and kill criteria

(drafting)

## Open questions

(drafting)

## Sources

(drafting)
