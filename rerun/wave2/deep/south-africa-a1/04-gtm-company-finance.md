# South Africa high-value goods dealer FICA pack: go-to-market, payments, company setup and financials (deep dive 04)

Date: 10 Oct 2026. Builds on [the A1 report](../reports/south-africa-a1.md) and the sibling files [01-law-and-requirements.md](01-law-and-requirements.md) and [02-market-and-competition.md](02-market-and-competition.md). Money is in South African rand (R, ZAR). "Excl. VAT" means before 15% VAT. "My estimate" marks a planning number I derived; "(unverified)" marks a fact I could not confirm.

Status: complete as of 10 Oct 2026. Budget used: 30 web searches and 7 page fetches, plus direct downloads of official pages (Paddle, Stripe and SARS documents, the SARB circular, ECB rates).

## Summary

- **Price it as a yearly file, between the free templates and a consultant.** Dealers can get a free FIC or VerifyNow template, a R4,995 Moonstone template or a R7,000+ custom RMCP, and one missed form costs R10,000 to R50,000 in FIC fines (see Pricing). Plans, excl. 15% VAT, billed yearly: **Starter R2,900, Dealer R5,900, Group R5,900 + R1,200 per extra branch or SADPMR permit, Consultant R1,990 a month for up to 15 dealers.** The first 30 dealers get 30% off year 1. Attorney reviews are billed by the partner, not by us.
- **Seasons.** The yearly RMCP upload is due **31 October** for item 20, and the FIC refused a transition period ([Moonstone](https://www.moonstone.co.za/?p=61635)). The first one (31 Oct 2026) comes before the product is sellable, so year 1 starts with pre-orders and late filers. The real seasons are **February to April 2027** (final PCC 126, new per-permit registrations) and **August to October** every year. Mid-November to mid-January is quiet for jewellers (my inference).
- **Channels in priority order:** (1) calls to the 581-listing JCSA directory; (2) a JCSA member offer and webinars; (3) compliance consultants and accountants on a white-label plan; (4) deadline content and free tools; (5) referral swaps with VerifyNow and AML GO; (6) refiners; (7) small seasonal Google Ads; (8) motor dealers once the jeweller pack sells. **Year-1 marketing budget: about R270,000 (US$16,400)**, including a part-time South African caller.
- **Payments: sell from the founder's foreign company through Paddle, in rand.** Paddle supports South Africa and ZAR, and charges **15% SA VAT on B2B and B2C sales itself** ([Paddle](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)). Its fee is 5% + 50 cents, about 5.1% on a R5,900 plan. Stripe direct costs about 6% to 6.6% (international card, conversion, Billing, Tax). With Stripe you must register for SA VAT once sales pass **R1m in 12 months**, unless you sell "solely" to VAT-registered vendors ([SARS e-services FAQ](https://www.sars.gov.za/wp-content/uploads/Ops/Guides/Legal-Pub-FAQs-VAT02-FAQs-VAT-on-Supplies-of-Electronic-Services.pdf)). Exchange control lets SA cardholders pay foreign subscriptions up to R50,000 per transaction ([SARB](https://www.resbank.co.za/content/dam/sarb/what-we-do/financial-surveillance/financial-surveillance-documents/draft-circulars-and-documents-for-comments/Draft%20Exchange%20Control%20Circular%20B.1%20-%20Credit%20or%20debit%20card%20limit.pdf)). There is **no withholding tax on service fees**. Royalties carry 15%, cut to 0% by the UK, Irish, Dutch, German and US treaties ([PwC](https://taxsummaries.pwc.com/south-africa/corporate/withholding-taxes)). Paddle bars legal advice, so keep reviews outside the checkout.
- **No local company at launch.** A (Pty) Ltd costs only R175 at CIPC (plus R50 for a name), with no minimum capital ([MJK Inc](https://mjkinc.co.za/doing-business-in-south-africa/company-registration-foreigners)). The real hurdles are people and the bank, not fees: it needs a resident public officer and a bank account that takes 3 to 8+ weeks for foreign directors. A local attorney would probably charge R5,000 to R15,000 (my estimate); a turnkey international firm charges US$26,080. Running costs are about R20,000 to R40,000 a year. It pays off against Paddle's fee only at about R1.2m to R1.9m of yearly revenue.
- **Base case (founder builds with AI agents, no founder pay):** 373 active dealers and 18 consultants by September 2029, **ARR about R2.58m (US$156k)**, year-3 net cash **about R1.42m (US$86k)** before founder pay and tax. It is cash-positive on a trailing 12 months from **January to March 2028** (month 18). **Peak cash need is about R322,000 (US$19,500)**, including R205,000 of one-off legal and security work in year 1.
  - **Low case:** 148 dealers, ARR R0.88m, still R238k down at month 36, peak need R481k.
  - **High case:** 589 dealers, ARR R4.48m, peak need R198k.
  - The model is most sensitive to new-dealer volume, not price or churn.
- **Exit.** Small SaaS sells at about 2x to 4x revenue, so the base case is worth about R5m to R10m (US$0.3m to 0.6m). The likely buyers are nCino (it paid about US$74m for DocFox in 2024), UPAY/AML GO, VerifyNow or Moonstone. **This is a good small cash business, not a venture.** Regional add-ons (Namibia, Botswana, Kenya, Mauritius) are year-3 options.
- **Kill criteria:**
  - fewer than 3 reservations from 30 conversations by 10 Nov 2026;
  - fewer than 6 paying dealers by 9 Jan 2027;
  - fewer than 35 paying dealers by 30 Sep 2027;
  - first-year renewal below 60%.

## Pricing and packaging

### What dealers already pay or risk (anchors)

| Item | Price | Type | Source |
|---|---|---|---|
| FIC RMCP template (PCC 53, Annexure B) | free; the FIC says an uncustomised copy is "non-compliant" | free | [PCC 53](https://www.fic.gov.za/wp-content/uploads/2023/09/2022.08-PCC-PCC-53-RMCP.pdf) |
| VerifyNow RMCP generator | free "starting document" | free | [VerifyNow](https://www.verifynow.co.za/fica-toolkit/rmcp-generator) |
| nCino KYC customisable RMCP template with expert "guidance and notes" | not published | with its KYC product | [nCino KYC, Aug 2023](https://blog.kycafrica.ncino.com/breaking-the-myths-around-fica-outsourcing) |
| Moonstone FICA Toolkit (RMCP template, risk register) | R4,995 excl. VAT, plus hourly help (5-hour minimum) | once-off | [Moonstone](https://www.moonstone.co.za/new-do-it-yourself-fica-compliance-solution-for-accountable-institutions/) |
| AML GO custom RMCP / RMCP review | from R7,000 / from R2,500 | once-off | [AML GO](https://amlgo.co.za/) |
| Sanctions and PEP screening | R1 to R7 a check (AML GO); R5.98 a check, monitoring from R1,999 a year (VerifyNow) | per use / yearly | [AML GO](https://amlgo.co.za/); [VerifyNow](https://www.verifynow.co.za/pricing) |
| FICA staff training | R747.50 per learner | per person | [VerifyNow](https://www.verifynow.co.za/pricing) |
| General SME compliance tracker (ClearComply) | R99 a month or R990 a year | subscription | [ClearComply](https://www.clearcomply.co.za/pricing) |
| Law-firm RMCP | not published; probably R10,000 to R30,000 (unverified) | once-off | [mjkinc](https://mjkinc.co.za/rmcp) |
| FIC fine for one missed form | R10,000 if fixed at once; R25,000 (late registration) or R50,000 (missed RCR) if not | penalty | FIC notices, e.g. [Miller Gold House](https://www.fic.gov.za/wp-content/uploads/2025/04/Administrative-sanction-%E2%80%93-Miller-Gold-House-Pty-Ltd.pdf), [Auctionman](https://www.fic.gov.za/wp-content/uploads/2026/01/Administrative-sanction-%E2%80%93-Auctionman-Pty-Ltd.pdf) |
| FIC fine for a weak RMCP and no screening (one item 20 dealer, 2025/26) | R210,000 (R105,000 payable, under appeal) | penalty | [FIC AR 2025/26, p. 47](https://www.fic.gov.za/wp-content/uploads/2026/09/FIC-Annual-Report-2025-2026.pdf) |

Reading. Small firms are used to **R100 to R400 a month** for compliance software and **R5,000 to R7,000 once** for an RMCP. One avoided R10,000 fine pays for a year of any plan below. The price must sit clearly above the free templates (to signal it is not a template) and clearly below a consultant RMCP (because it repeats every year).

### Plans (billed yearly in advance, prices in rand)

| Plan | Price excl. VAT | Incl. 15% VAT | What is in it | Who it is for |
|---|---|---|---|---|
| **Starter** | **R2,900 a year** | R3,335 | Applicability check; sector RMCP builder (jeweller, bullion and Krugerrand, stones, motor, other goods) producing a board-ready PDF named for goAML; 31 October and Directive 10 calendar with e-mail and WhatsApp reminders; training log; one user | one-site dealer who wants to get the RMCP right and not miss dates |
| **Dealer** (main plan) | **R5,900 a year** | R6,785 | Starter plus: yearly guided RMCP update (redline against last year), R100k-sale and R50k-cash register with the 3/5/15-day report clocks, CDD and screening log (records checks done in VerifyNow or AML GO), RCR helper, one-click inspection file, 3 users | most jewellers, bullion and stone dealers, small motor dealers |
| **Group** | **R5,900 + R1,200 a year per extra branch or SADPMR permit** | | Dealer plus a location register for Directive 10 and one RMCP set per permit (draft PCC 126) | multi-branch jewellers, dealer groups |
| **Consultant** | **R1,990 a month or R19,900 a year for up to 15 dealer files**, then R100 a month per extra file | | All Dealer features per client, white-label PDF, client dashboard | compliance consultants, accountants, bookkeepers |

Monthly billing is offered only at a 20% premium (R290 / R590 a month), to keep the yearly rhythm that matches the 31 October cycle.

Add-ons:
- **RMCP review by a partner attorney or consultant**, about R2,500 to R3,500 per review, **invoiced by the partner directly**, not by us. Paddle bars "pure consulting or advisory services, including legal advice" ([Paddle prohibited products](https://paddle.com/help/start/intro-to-paddle/what-am-i-not-allowed-to-sell-on-paddle)), and keeping legal advice with an admitted attorney limits our liability. Take **no referral fee from attorneys**: South African rules on attorneys sharing fees and paying for work solicited by non-practitioners make this risky ([old Attorneys Act rules on sharing of fees and touting](https://api.acts.co.za/attorneys-act-1979/rules_part_vi_sharing_of_fees_.php); now the LPC Code of Conduct, [Notice 168 of 2019](https://www.acts.co.za/legal-practice-act-2014/n168_notice_no__168_of_2019); current wording not read). A referral fee of 15% to 20% is possible only with non-attorney compliance consultants (my estimate).
- **Screening checks**: link out to VerifyNow or AML GO; no resale at first.
- **Staff FICA training module**: later, about R500 per learner (my estimate, below the R747.50 anchor).

**Founding offer.** The first 30 dealers pay 30% less in year 1 (Dealer R4,130) in return for a 30-minute feedback call and a testimonial. They renew at the normal price.

**Renewal date and the yearly update.** Plans renew on the sign-up anniversary (simple, and no pro-rata first bills that would cut year-1 cash). Separately, the yearly RMCP update opens for every customer on 1 August, about 90 days before the 31 October upload, so the value shows up each season whatever the billing date.

### VAT and price display

- Quote prices **excl. VAT** in all B2B marketing, as Moonstone and AML GO do ([Moonstone](https://www.moonstone.co.za/new-do-it-yourself-fica-compliance-solution-for-accountable-institutions/)).
- Under Paddle, Paddle is the seller and charges South African VAT at 15% on B2B and B2C sales ([Paddle tax countries](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)). Paddle's default display for ZA is tax-inclusive ([Paddle](https://developer.paddle.com/concepts/sell/supported-countries-locales)); set prices as tax-exclusive so the checkout shows "R5,900 + VAT". Check that Paddle's invoice works for a South African input-tax claim (unverified).
- Under Stripe direct with no SA VAT registration (below R1m a year), no South African VAT is charged; a VAT-registered dealer has nothing to self-assess if the service is used for taxable sales (see Payments).

### Expected average revenue per customer (my estimates)

- Dealer mix: 25% Starter, 55% Dealer, 15% Group (one extra site on average), 5% Starter-monthly. Average **about R5,200 a year excl. VAT** after the year-1 founding discounts fade; **about R4,600 in year 1**.
- Consultant: average **about R20,000 a year** (not all fill 15 files).
- Partner-review referral income is left out of the model (upside).
- The A1 re-assessment suggested about R9,000 a year. That price now corresponds to Dealer (R5,900) plus a partner review (R2,500 to R3,500), which keeps a cheaper entry point for the many dealers who will not pay R9,000.


## Go-to-market

### Positioning

"Your yearly FIC file, done properly: for jewellers, gold, coin and stone dealers." Lead with the jewellery, bullion and stone niche: it is the most inspected group per head (151 inspections on about 600 to 660 registrations over two years), the new draft PCC 126 adds duties for it, and no tailored product exists ([02 market file](02-market-and-competition.md); [FIC AR 2025/26, p. 40](https://www.fic.gov.za/wp-content/uploads/2026/09/FIC-Annual-Report-2025-2026.pdf)). Add motor and other-goods packs from month 4, because 88% of item 20 registrations sit there (4,277 motor and 640 other goods of 5,581; [FIC AR 2025/26, p. 29](https://www.fic.gov.za/wp-content/uploads/2026/09/FIC-Annual-Report-2025-2026.pdf)). The pitch uses the FIC's own words: its free template is only a framework and an uncustomised copy is "non-compliant" ([PCC 53](https://www.fic.gov.za/wp-content/uploads/2023/09/2022.08-PCC-PCC-53-RMCP.pdf)); and NADA told dealers the FIC "will not accept standard templates" ([NADA](https://nada.co.za/?p=5097)).

### Selling seasons and deadlines

| When | What happens | Sales effect |
|---|---|---|
| **31 Oct every year** | Yearly RMCP upload on goAML for item 20 ([Directive 12](https://www.fic.gov.za/wp-content/uploads/2026/09/Directive-12-On-the-submission-of-risk-management-and-compliance-programmes.pdf)). The FIC refused a 3 to 6 month transition for the first round ([Moonstone](https://www.moonstone.co.za/?p=61635)). | **Main season: August to October.** The first deadline (31 Oct 2026) comes before the product is ready (MVP in about 3 weeks, sellable in 6 to 8). Use it for content and pre-orders, and sell to late filers in November. |
| 29 to 31 Oct 2026 | Directive 10 location report for existing registrants with several sites ([Directive 10](https://www.fic.gov.za/wp-content/uploads/2026/07/Directive-10-On-information-pertaining-to-geographic-locations.pdf); 29 Oct by the 90-day count, 31 Oct per [nCino KYC](https://blog.kycafrica.ncino.com/fic-updates-directive-10-draft-directive-12-guidance-note-7b)) | Multi-site dealers; then "within 90 days of any change" all year |
| Nov 2026 to Mar 2027 | Final PCC 126 expected after comments closed 16 Oct 2026; one registration per SADPMR permit ([draft PCC 126](https://www.fic.gov.za/wp-content/uploads/2026/09/2026.9-PCC-DPMS.pdf)) | New dealers must upload an RMCP within 90 days of opening (Directive 12, per [01 law file](01-law-and-requirements.md)); whether each extra per-permit registration of an existing dealer needs its own upload is unverified. **Second season: February to April 2027** (timing of the final PCC unverified). |
| Unannounced | Next risk and compliance return (RCRs ran in 2023 and May to July 2026) ([Directive 11](https://www.fic.gov.za/wp-content/uploads/2026/03/Directive-11-%E2%80%93-Risk-and-compliance-return.pdf)) | Spike whenever a directive appears; only 11% to 20% of jewellery-sector dealers had filed two weeks before the 2026 deadline ([FIC, 17 Jul 2026](https://www.fic.gov.za/wp-content/uploads/2026/07/Media-release-RCR-closing-dates.pdf)) |
| Mid-2026 to Oct 2027 | FATF mutual evaluation of South Africa ([National Treasury](https://www.fic.gov.za/wp-content/uploads/2026/01/National-Treasury-media-statement-%E2%80%93-General-Laws-Amendment-Bill-2025.pdf)) | More inspections likely through 2027 (inference) |
| Early September | Jewellex Africa trade fair, the ordering window before Christmas; 6-7 Sep 2026 at Gallagher, Midrand ([cantonfair.net listing](https://www.cantonfair.net/event/37287-jewellex-africa)) | Best single event for jewellers; 2027 date unverified |
| Mid-Nov to mid-Jan | Jewellers' Christmas trade, then the national summer holiday | **Quiet season for selling to jewellers** (my inference). Use it to build packs and content. |

### Channels in priority order

1. **Direct outreach to the JCSA public directory.** 581 listings with phone and e-mail, 51% in Gauteng and 29% in the Western Cape ([JCSA directory](https://www.jewellery.org.za/directory), counted in the [02 market file](02-market-and-competition.md)). Start with retailers, wholesalers, refiners and bullion and coin sellers. A part-time South African caller books 20-minute screen-share demos; the founder runs them. Cheapest and fastest feedback.
2. **Trade body partnership: JCSA.** "Guidance on compliance" is already a stated member benefit ([JCSA membership](https://www.jewellery.org.za/membership)). Offer members 15% off and a free webinar for JCSA on "31 October and PCC 126". Aim for a mailing to members, then a talk slot at Jewellex Africa 2027. NADA and RMI for motor dealers later (NADA already passes on FICA webinars, [NADA](https://nada.co.za/?p=4380)).
3. **Consultants and accountants (Consultant plan).** One consultant brings 5 to 15 dealers. Target small FICA consultancies and accountants who already write RMCPs (AML GO, mjkinc-type firms, Moonstone readers). Pitch: do the yearly work for your clients in a quarter of the time, under your own logo.
4. **Content timed to deadlines (SEO and guest posts).** Free tools as lead magnets: "Am I an item 20 dealer?" check; RMCP gap check against the 19 elements of s42(2); a free 31 October and Directive 10 calendar (.ics). Guest articles to Moonstone, GoLegal, Accounting Weekly, The Jeweller and DealerFloor, which already run this news ([02 market file, channels](02-market-and-competition.md)).
5. **Referral swaps with screening vendors** (VerifyNow, AML GO). They sell the per-check part; we sell the yearly file and send them screening volume ([VerifyNow pricing](https://www.verifynow.co.za/pricing); [AML GO](https://amlgo.co.za/)).
6. **Refiners and bullion houses** (Metcon, Rand Refinery): a one-page note for their trade customers ([Metcon](https://www.metcon.co.za/wp-content/uploads/2023/09/RAC-POL-001-Responsible-Jewellery-Council-Compliance-Policy-Iss-1.1.pdf)). Slow, but trusted.
7. **Paid search, small and seasonal.** South African Google Ads clicks are cheap on average (about R5 to R8 in SMME categories in 2022, [The Media Online](https://themediaonline.co.za/2022/05/local-businesses-need-local-insights-to-maximise-google-ad-spend); US$0.51 average in May 2023 per Semrush via [Statista](https://de.statista.com/statistics/1262499/search-advertising-cpc-africa/)). Legal and compliance terms cost more (my estimate R15 to R40 a click). Search volume for "RMCP" terms is small, so cap spend at about R3,000 a month in season.
8. **Motor dealers at scale** only after the jewellery pack sells. nCino KYC already courts them with webinars ([nCino KYC](https://kycafrica.ncino.com/fica-masterclass-why-criminals-are-targeting-high-value-dealers-how-to-stop-them/)). Position as the yearly-file add-on to whatever KYC tool they use.

### Sales motion

- **Self-serve for Starter.** Free applicability check, then card checkout (Paddle) and the RMCP questionnaire. Target: under 2 hours from sign-up to a board-ready PDF.
- **Assisted for Dealer and Group.** Call or WhatsApp, then a 20-minute demo on Zoom or Teams with the dealer's own sub-sector pack, then a Paddle payment link. The founder or a South African caller follows up within 24 hours.
- **Onboarding call (45 minutes)** for the founding 30 dealers, to learn the questions that confuse them.
- **Renewal motion.** Reminders 30 and 7 days before each anniversary; an "RMCP update ready" message to everyone on 1 August; a summary each November of what was filed. The product's value shows every October, so renewal should follow (assumption to test).
- **No South African agent signs contracts.** Callers and partners only refer; the customer accepts terms online with the foreign company (avoids a local permanent establishment; see Company setup).

## 90-day launch plan

Day 1 = Monday 12 October 2026. Build work runs in parallel (see [03 product file](03-product-and-tech.md)); this plan covers selling, legal and payments.

| Dates | Days | Actions | Done when |
|---|---|---|---|
| 12-16 Oct | 1-5 | Submit comments on draft PCC 126 by 16 Oct (learn the issues, get on the FIC's radar) ([Moonstone](https://www.moonstone.co.za/?p=61913)). Apply to Paddle with a clear software-only description. Landing page with waitlist and the free applicability check. Ask two SA FICA attorneys for a quote to review the RMCP engine. | Comments sent; Paddle application in; page live |
| 12-30 Oct | 1-19 | 30 calls to JCSA-directory dealers (Gauteng and Western Cape first). Ask: did you file an RMCP, who wrote it, what did it cost, what happens on 31 October. Offer the founding price as a no-payment reservation. | 30 conversations; at least 5 reservations |
| 19-31 Oct | 8-20 | Publish "31 October RMCP: what jewellers must upload" and "Directive 10 in 5 minutes". Pitch them to The Jeweller, Moonstone and GoLegal. Sign the attorney reviewer. | 2 articles live; attorney engaged |
| 2-13 Nov | 22-33 | MVP ready (about 3 weeks). Run 5 concierge pilots with reserved dealers, free of charge, the attorney checking each RMCP. Publish "Missed 31 October? What to do now" (the FIC accepted late RMCPs in 2025 but called them non-compliant, [Moonstone](https://www.moonstone.co.za/fic-accepting-rmcps-after-the-12-march-deadline/)). | 5 pilot RMCPs approved by their owners |
| 9-27 Nov | 29-47 | Terms of service, POPIA operator agreement and privacy notice drafted by an SA tech attorney. Security test booked. Approach JCSA with a member offer. List 20 consultants and accountants; demo to 5. | Legal pack done; JCSA meeting held |
| 30 Nov-11 Dec | 50-61 | Security test fixed. **Paid launch**: Paddle checkout live; convert pilots and reservations at the founding price. First consultant signed. | 10 paying dealers; 1 consultant |
| 14 Dec-8 Jan | 64-89 | Quiet season. Build the motor and other-goods packs. Plan the February trip to Johannesburg. Write PCC 126 content ready for the final text. Set up partner referral agreements (VerifyNow or AML GO). | Motor pack in beta; 2 referral partners |
| 9 Jan | 90 | Review against the targets below. | Go / adjust / stop decision |

**Day-90 targets:** at least 12 paying dealers and 1 consultant; at least 150 qualified leads; at least 1 partner (JCSA, a refiner or a screening vendor) agreed to promote; pilot RMCPs rated "would pass" by the attorney.

## 12-month marketing plan and budget

October 2026 to September 2027. All amounts in rand excl. VAT; my estimates unless cited.

| Quarter | Focus | Main actions | Budget |
|---|---|---|---|
| Q1 (Oct-Dec 2026) | Learn and launch | Calls to JCSA directory; deadline articles; PCC 126 comment; landing page and free tools; pilots | R30,000 (content help R10,000, tools R5,000, caller R15,000 on hourly or per-demo pay) |
| Q2 (Jan-Mar 2027) | PCC 126 season | One-week trip to Johannesburg and Cape Town (dealer visits, JCSA, 2 consultant firms, 1 refiner) about R35,000 incl. flights (assuming the founder is based in Europe); webinar with JCSA; Google Ads in Feb-Mar (R3,000 a month); caller | R80,000 |
| Q3 (Apr-Jun 2027) | Motor and consultants | DealerFloor sponsored article (rate unverified, budget R10,000); consultant webinars; case studies from pilots; caller | R50,000 |
| Q4 (Jul-Sep 2027) | Renewal and October season | Jewellex Africa 2027 talk or small stand (budget R30,000; rate unverified) plus trip R30,000; trade-press ad in SAJN or The Jeweller (budget R15,000; rates not published); Google Ads R3,000 a month; "update your RMCP" campaign to all customers and leads from 1 August | R110,000 |
| **Year total** | | | **about R270,000 (about US$16,400)** |

Plus partner commissions: 20% of first-year revenue for referred customers (budgeted inside the financial model as 8% of new-customer billings, assuming 40% come from partners).

KPIs tracked monthly: conversations, demos, demo-to-paid rate (target 30%), cost per paying customer (target under R4,000 in year 1, under R2,500 by year 2), renewal rate (target 80%), share of customers from partners (target 40%).


## Payments and tax friction

Exchange rate used in this file: ECB reference rates for 9 Oct 2026, EUR 1 = R18.53 and USD 1.1206, so **USD 1 = about R16.53** ([ECB daily XML](https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml)). I round to R16.5 per dollar and R18.5 per euro.

### Can South African buyers pay a foreign seller by card?

- **Yes, and the law allows it.** Exchange control lets South African residents with a bank credit or debit card pay foreign currency "for small transactions (e.g. imports over the Internet, services or subscriptions)". The limit is R50,000 per transaction, and a 2026 draft circular raises it to R100,000 ([SARB draft Exchange Control Circular, 2026](https://www.resbank.co.za/content/dam/sarb/what-we-do/financial-surveillance/financial-surveillance-documents/draft-circulars-and-documents-for-comments/Draft%20Exchange%20Control%20Circular%20B.1%20-%20Credit%20or%20debit%20card%20limit.pdf)). Every plan in this file is far below R50,000.
- **The buyer may pay a small bank fee.** Capitec's 2026 business tariff lists an "international processing fee" of 2%, capped at R200 ([Capitec business fees 2026](https://www.capitecbank.co.za/globalassets/pages/documents-library/business/business-bank-fees-pricing-guide-2026.pdf)). One Standard Bank cardholder reported 2.75% (forum post from 2018, [Standard Bank community](https://community.standardbank.co.za/t5/Credit-card/International-Transfer-Fee-credit-card-payment/m-p/422352)). Charging in rand (ZAR) rather than dollars avoids the buyer's conversion, but some banks still add a cross-border fee when the merchant is abroad (my reading of the same tariffs; unverified per bank).
- **Practical friction.** Small dealers often pay by EFT, not card (my inference from the local gateway market, where instant EFT products such as Ozow sit next to card; [Kolonell 2026](https://kolonell.com/en/blog/payment-processing-fees-south-africa-ozow-payfast-2026)). Some will ask for an invoice to pay by bank transfer. A foreign seller cannot offer a rand EFT without a local account (see below).

### Stripe (seller's own foreign company)

- **Stripe charges in rand.** ZAR is on Stripe's list of presentment currencies; the minimum charge is R10 ([Stripe currencies](https://docs.stripe.com/currencies)).
- **Stripe is not open to South African companies directly.** Stripe lists South Africa under its "Extended network", not as a full Stripe country ([Stripe global](https://stripe.com/global)); my understanding is that this means service through its subsidiary Paystack (unverified). This does not matter if the seller is a company in a Stripe country.
- **Fees for a foreign seller charging a South African card:**
  - EU (Irish pricing as the example): **3.15% + EUR 0.25 for international cards, plus 2% if currency conversion is needed** ([Stripe IE pricing](https://stripe.com/ie/pricing)). If the price is in ZAR and the payout is in EUR, conversion applies, so about **5.15% + EUR 0.25**.
  - US: **2.9% + 30 cents, plus 1.5% for international cards, plus 1% for conversion** ([Stripe US pricing](https://stripe.com/pricing)), so about 5.4% + 30 cents.
  - Stripe Billing (subscriptions): **0.7% of billing volume**, pay as you go ([Stripe Billing pricing](https://stripe.com/ie/billing/pricing)).
  - Stripe Tax: **0.5% per transaction where you are registered** ([Stripe Tax pricing](https://stripe.com/ie/tax/pricing)).
  - So Stripe all-in is about **6% to 6.6%** of a ZAR annual payment, plus the work of registering for South African VAT yourself once you pass the threshold (see seller side below).

### Merchant of record (MoR)

- **Paddle supports South Africa.** South Africa (ZA) is on Paddle's supported-country list, with ZAR as its local currency and tax-inclusive display ([Paddle supported countries](https://developer.paddle.com/concepts/sell/supported-countries-locales)). ZAR is a supported charge currency (minimum R12.75) and a payout currency ([Paddle currencies](https://developer.paddle.com/concepts/sell/supported-currencies)). Fee: **5% + 50 cents per checkout transaction**, no monthly fee ([Paddle pricing](https://www.paddle.com/pricing)). Paddle acts as the reseller, so it collects and remits the VAT ([Paddle](https://paddle.com/support/what-is-a-merchant-of-record/)). Paddle lists South Africa among the countries where it is registered and charges tax: **15% VAT on both B2B and B2C sales** ([Paddle tax countries](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)). Non-US sales are billed by Paddle.com Market Ltd (UK) ([Paddle vendor information](https://www.paddle.com/about/vendor-information)).
- **Lemon Squeezy** (bought by Stripe in 2024; unverified here): **5% + 50 cents per transaction**; "some payments may be subject to additional fees"; payouts by bank wire or PayPal twice a month ([Lemon Squeezy pricing](https://www.lemonsqueezy.com/pricing)). Its extra fee for non-US buyers is not shown on the page I read (unverified).
- **Paddle bank transfers only in USD, EUR and GBP** ([Paddle currencies](https://developer.paddle.com/concepts/sell/supported-currencies)). A dealer who will only pay by rand EFT cannot use Paddle's invoice option.
- **What 5% + 50 cents means here.** On a R5,900 annual plan, the fee is about R295 + R8 = **about R303 (5.1%)**. Stripe direct would be about R360 to R390 plus your own VAT work. On annual plans, Paddle is the cheaper and simpler choice.

### Local rails (only with a South African company)

- **Paystack South Africa:** local cards 2.9% + R1, international cards 3.1% + R1, excl. VAT (third-party help page, [Trova](https://intercom.help/trovahealth/en/articles/10697542-what-are-paystack-s-fees-and-how-can-i-calculate-them-south-africa); not confirmed on Paystack's own page, which did not load).
- **Payfast:** about 2.9% + R1.50 standard card rate ([paymentproviders.io](https://paymentproviders.io/compare/payfast-vs-a-pay?focus=fees)); Payfast says its pricing is negotiable ([Payfast](https://payfast.io/fees)). One source says Payfast does not onboard foreign merchants and settles only in ZAR ([wisecp](https://apps.wisecp.com/en/Payfast)) (unverified with Payfast).
- **Instant EFT (Ozow):** about 1.5% (order of magnitude, [Kolonell 2026](https://kolonell.com/en/blog/payment-processing-fees-south-africa-ozow-payfast-2026)).
- These need a local company and bank account. They are cheaper per transaction (about 3%), but the company costs more than the fee saving at this scale (see Company setup).

### Bank transfer from a dealer to a foreign company

- A rand EFT to a foreign company is not possible. The dealer would have to send a foreign payment (SWIFT) through its bank, which needs a balance-of-payments reporting category and costs a bank fee on each side (my understanding of exchange-control practice; unverified per bank). For a R3,000 to R9,000 bill this is a real barrier.
- **So: card first, through Paddle.** For the few dealers who insist on EFT (mainly larger motor groups), offer a SWIFT invoice in EUR or USD through Paddle's bank-transfer option, or wait for the local-company option (see Company setup).

### Buyer side: VAT on a foreign service

- **VAT rate is 15%.** The planned rises to 15.5% and 16% were reversed in 2025 ([SARS VAT page](https://www.sars.gov.za/types-of-tax/value-added-tax/)).
- **Imported services.** If the seller does not charge South African VAT, a VAT-registered dealer using the service only for taxable sales has no extra VAT to pay. A dealer that is not VAT-registered should in law self-assess VAT on imported services, but this is rarely done for small subscriptions (my reading; the EY note says the recipient "must now confirm whether the service provider levied VAT" and assess whether it must declare VAT on imported services ([EY, 2025](https://taxnews.ey.com/news/2025-0709-south-africa-publishes-amendments-excluding-certain-business-to-business-transactions-from-scope-of-electronic-services-for-vat-purposes))).
- **Input credit.** When a registered seller or MoR charges VAT and issues a valid tax invoice, a VAT-registered dealer can claim it back (standard VAT rule, [SARS VAT page](https://www.sars.gov.za/types-of-tax/value-added-tax/)). Paddle charges SA VAT on B2B sales ([Paddle](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)); whether its invoices meet South African tax-invoice rules for an input-tax claim is unverified.

### Buyer side: withholding tax

- **No withholding tax on service fees.** South Africa levies no withholding tax on fees paid to non-residents. The planned 15% tax on service fees was withdrawn in 2016 ([PwC tax summaries](https://taxsummaries.pwc.com/south-africa/corporate/withholding-taxes); [Cliffe Dekker Hofmeyr, 2016](https://www.cliffedekkerhofmeyr.com/en/news/publications/2016/tax/budget-alert-24-february-withdrawal-of-withholding-tax-on-service-fees-.html)).
- **Royalties carry 15%** withholding, cut by treaty: **0% for the UK, Ireland, Netherlands, Germany, US, Cyprus and Austria; 5% Croatia; 10% Malta** ([PwC](https://taxsummaries.pwc.com/south-africa/corporate/withholding-taxes)).
- **Is a SaaS fee a royalty?** A subscription to use hosted software and get a tailored document is normally treated as a service, not a payment for the right to use copyright (my reading; I found no SARS ruling on SaaS). To stay safe: sell it as a service, do not license the RMCP text as such, and sell from a treaty country with 0% on royalties. Then the dealer has nothing to withhold.

### Seller side: must a foreign seller register for South African VAT?

- **Foreign suppliers of "electronic services" must register once their South African sales pass R1 million in any 12 months** ([SARS e-services FAQ, Issue 4](https://www.sars.gov.za/wp-content/uploads/Ops/Guides/Legal-Pub-FAQs-VAT02-FAQs-VAT-on-Supplies-of-Electronic-Services.pdf); [EY](https://taxnews.ey.com/news/2025-0709-south-africa-publishes-amendments-excluding-certain-business-to-business-transactions-from-scope-of-electronic-services-for-vat-purposes)). (The domestic threshold rose to R2.3m on 1 April 2026 ([SARS](https://www.sars.gov.za/types-of-tax/value-added-tax/)); I found no sign that the R1m e-services threshold moved.)
- **B2B exclusion since 1 April 2025, but only if you sell "solely" to VAT-registered vendors.** A foreign supplier who sells only to VAT-registered businesses is outside the rules and need not register. One who sells to both vendors and non-vendors must register and charge VAT on all of it once over the threshold ([SARS e-services FAQ, Q6 and Q14](https://www.sars.gov.za/wp-content/uploads/Ops/Guides/Legal-Pub-FAQs-VAT02-FAQs-VAT-on-Supplies-of-Electronic-Services.pdf)). There is no small-amount tolerance ([Webber Wentzel](https://webberwentzel.com/News/Pages/electronic-services-new-regulations-usher-in-a-new-dispensation-but-do-they-work.aspx)).
- **What this means for us.** Some small dealers (under R2.3m turnover) are not VAT-registered, so "solely to vendors" is hard to guarantee. In the base case, trailing 12-month sales first pass R1m around April to June 2028 (my model). Until then no registration is needed. With Paddle as MoR, the question goes away: Paddle is the seller and handles the VAT. With Stripe direct, plan to register with SARS as a foreign e-services supplier when sales near R1m, or check every buyer's VAT number and sell only to vendors.
- **Income tax.** A foreign company that sells online with no office, staff or agent in South Africa has no South African permanent establishment under the usual treaty test (general treaty rule; unverified for each treaty). A local sales agent who signs contracts could create one. Use referral partners who do not sign for you.

### Recommendation

1. **Sell from the founder's foreign company through Paddle, priced in ZAR, VAT added on top at checkout, annual plans.** Fee about 5.1% on a R5,900 plan.
2. **Keep Stripe as plan B** (and for consultant plans billed monthly) if Paddle declines the category or its fees hurt. Then register for SA VAT before R1m.
3. **Offer an EUR/USD bank invoice for groups that insist**, through Paddle.
4. **Revisit a local company only when** more than about 30% of prospects refuse card, or revenue passes about R1.5m a year (see Company setup).


## Company setup (needed or not, costs)

### Verdict: not needed at launch

- **Nothing in the law requires a local company to sell this software.** Buyers can pay by card abroad (SARB card rule above), there is no withholding tax on service fees, and VAT registration is only needed above R1m a year of sales to non-vendors, or never with Paddle as the merchant of record (see Payments).
- **Sell from the founder's existing foreign company.** Use South African partners (attorney reviewer, consultants) on referral or subcontract terms that do not let them sign contracts in your name. That avoids a South African permanent establishment (general treaty rule; check the founder's own treaty).
- **When a local company would be worth it.** (a) More than about 30% of qualified prospects refuse to pay a foreign card charge and want a rand EFT invoice with local VAT. (b) A reseller, a trade body (JCSA, NADA) or a large dealer group insists on a local supplier, a South African VAT invoice or a B-BBEE certificate. (c) Revenue passes about R1.5m a year, where local rails at about 3% save more than the company costs. In the base case that is year 3 at the earliest.

### What a South African private company (Pty) Ltd costs

| Item | Cost | Notes and source |
|---|---|---|
| Name reservation (CoR 9.1) | R50 online | Optional; can incorporate under the registration number ([MJK Inc](https://mjkinc.co.za/doing-business-in-south-africa/company-registration-foreigners)) |
| Incorporation, standard short-form MOI (CoR 14.1) | R175 (R125 if using a pre-reserved name or the number) | [MJK Inc](https://mjkinc.co.za/doing-business-in-south-africa/company-registration-foreigners); BizPortal R125 / R175 per [ElyForma 2026](https://elyforma.com/blog/cipc-company-registration-fees-2026) |
| Bespoke MOI | R475 | [MJK Inc](https://mjkinc.co.za/doing-business-in-south-africa/company-registration-foreigners) |
| Beneficial ownership filing | no CIPC fee; due within 10 business days | [MJK Inc](https://mjkinc.co.za/doing-business-in-south-africa/company-registration-foreigners) |
| Minimum share capital | none (one R1 share works) | [MJK Inc](https://mjkinc.co.za/doing-business-in-south-africa/company-registration-foreigners) |
| Foreign director pre-verification ("Foreigner Assurance") | no fee stated; CIPC standard 2 working days, practitioners report 10-15 | Certified or notarised passport, not older than 3 months ([MJK Inc](https://mjkinc.co.za/doing-business-in-south-africa/company-registration-foreigners)) |
| SARS income tax number | free, issued automatically through CIPC, but not usable until a resident public officer is appointed | [MJK Inc](https://mjkinc.co.za/doing-business-in-south-africa/company-registration-foreigners) |
| Annual return to CIPC | R100 to R3,000 by turnover (R150 to R4,000 if late); R100 under R1m turnover | [MJK Inc](https://mjkinc.co.za/doing-business-in-south-africa/company-registration-foreigners); [ElyForma](https://elyforma.com/blog/cipc-company-registration-fees-2026) |

**Do it yourself ("in person").** CIPC registration is online only, so "in person" in practice means the founder files on BizPortal or through a bank's CIPC service ([FNB CIPC service](https://www.online.fnb.co.za/business-banking/cipc+bee/cipc.html)). Official fees: **about R175 to R225**. Time: 1 to 3 weeks to a registered company and 4 to 8 weeks to a working one, mostly because of the bank ([MJK Inc](https://mjkinc.co.za/doing-business-in-south-africa/company-registration-foreigners)).

**Through a lawyer or agent remotely.**
- Low end: local online agents. GovChain charged R880 for a registration package in 2018 ([GovChain](https://help.govchain.co.za/en/articles/1807746-how-much-does-company-registration-cost)). A current local attorney quote for a foreign-owned company with notarised documents, share issue, BO filing and bank-account help is probably **R5,000 to R15,000** (my estimate; MJK Inc publishes only a fee calculator, no figures).
- High end: international turnkey firms. Healy Consultants lists a South Africa business package at **US$26,080** (about R430,000) including bank accounts and government fees, with an annual renewal of US$8,303 ([Healy, 2025 table](https://www.healyconsultants.com/?p=3983); [renewal invoice](https://www.healyconsultants.com/wp-content/uploads/2022/12/South-Africa-LLC-Annual-Renewal.pdf)). Not worth it here.

**The real hurdles are people and the bank, not fees.**
- **Resident public officer.** SARS requires the company to be represented "at all times" by an individual residing in South Africa ([MJK Inc](https://mjkinc.co.za/doing-business-in-south-africa/company-registration-foreigners)). Healy charges **US$3,150 a year** for this (2023 renewal invoice, [Healy](https://www.healyconsultants.com/wp-content/uploads/2022/12/South-Africa-LLC-Annual-Renewal.pdf)). A local accountant may do it inside a monthly package for less (unverified).
- **Bank account.** Hard for non-resident directors; 3 to 6 weeks, or 8+ for complex cases ([MJK Inc](https://mjkinc.co.za/doing-business-in-south-africa/company-registration-foreigners)). FNB and Standard Bank are said to be the most open to foreign directors ([ourpower](https://www.ourpower.co.za/tools/company-registration/foreign-directors-sa-company)) (secondary source). Subscription money should come in through an authorised dealer bank and the share certificate be endorsed "non-resident" ([MJK Inc](https://mjkinc.co.za/doing-business-in-south-africa/company-registration-foreigners)).
- **Registered office** in South Africa (a service address is enough) ([MJK Inc](https://mjkinc.co.za/doing-business-in-south-africa/company-registration-foreigners)).

### Ongoing costs of a local company (per year)

| Item | Cost per year | Source |
|---|---|---|
| Accountant: bookkeeping, annual financial statements, income tax return | R8,500 to R28,000 for a small Pty (client budgets on ProCompare, not price lists) | [ProCompare examples](https://www.procompare.co.za/providers/geldenhuys-j-co) |
| Public officer (if no local person) | about R52,000 (US$3,150) at an international firm; less locally (unverified) | [Healy](https://www.healyconsultants.com/wp-content/uploads/2022/12/South-Africa-LLC-Annual-Renewal.pdf) |
| CIPC annual return | R100 to R3,000 by turnover | [MJK Inc](https://mjkinc.co.za/doing-business-in-south-africa/company-registration-foreigners) |
| Registered address service | about R3,000 to R6,000 (my estimate) | (unverified) |
| Bank fees | about R2,000 to R4,000 (my estimate) | (unverified) |
| **Total** | **about R20,000 to R40,000 a year with a local accountant as public officer; R65,000+ with an international provider** | my estimate |

**Tax inside a local company.** Corporate income tax is 27% for years ending on or after 31 March 2023. The lower small business corporation rates need natural-person owners, so a subsidiary of a foreign company does not get them ([PwC](https://taxsummaries.pwc.com/south-africa/corporate/taxes-on-corporate-income)). Dividends to a foreign parent carry 20% withholding, cut by treaty to 5% to 10% for most EU countries, the UK and the US ([PwC](https://taxsummaries.pwc.com/south-africa/corporate/withholding-taxes)). VAT registration becomes compulsory at R2.3m of taxable supplies in 12 months ([SARS](https://www.sars.gov.za/types-of-tax/value-added-tax/)).

**Break-even of a local company versus Paddle.** Paddle costs about 5.1% of revenue; local card rails about 3%. The 2.1-point saving covers R25,000 to R40,000 of company costs only at **about R1.2m to R1.9m of yearly revenue** (my arithmetic). Below that, stay foreign.


## Contracts and liability

### Who contracts with whom

- **Software:** the dealer (or consultant) accepts online terms with the founder's foreign company. Under Paddle, Paddle is the reseller to the buyer, and the software terms (licence, data, liability) sit between us and the dealer ([Paddle](https://paddle.com/support/what-is-a-merchant-of-record/)).
- **RMCP review:** a separate engagement between the dealer and the partner attorney or consultant. We are not a party and do not resell legal advice (Paddle bars it; [Paddle](https://paddle.com/help/start/intro-to-paddle/what-am-i-not-allowed-to-sell-on-paddle)).

### Clauses that matter

1. **Information and software, not legal advice.** The dealer approves its own RMCP. This matches the law: the FIC Act needs the board or most senior person to approve the RMCP ([01 law file](01-law-and-requirements.md)), and the accountable institution "will always remain responsible" for CDD and risk assessment ([nCino KYC, quoting the FIC position](https://blog.kycafrica.ncino.com/breaking-the-myths-around-fica-outsourcing)). The compliance officer role "cannot be outsourced" (same source), so the product supports the dealer's own officer and does not replace them.
2. **Liability cap** at fees paid in the last 12 months, and no liability for FIC fines or for the dealer's filing choices. For customers under the Consumer Protection Act (see below), unfair terms and terms that limit liability for gross negligence are not allowed (CPA ss48 and 51; text not re-read for this file, so treat as unverified), so write the cap plainly and do not over-reach (CPA scope per [policyvault, Gazette 34181](https://policyvault.africa/?p=75225)).
3. **The product never logs in to goAML for the dealer.** goAML credentials may only be used by the person who registered them ([FIC Directive 2 statement](https://www.fic.gov.za/wp-content/uploads/2023/09/2014.4-DIR-Directive-2-on-use-of-login-credentials-following-registration-with-the-FIC.pdf)). The product prepares the file and a step-by-step guide; the dealer uploads.
4. **Third-party record keeping.** A dealer that lets a third party keep its FICA records must tell the FIC who that is (Act s24(3), Regs 20 and 29(6), per [01 law file](01-law-and-requirements.md)). Give each customer the text and our details for that notice, and keep records for the legal period (5 years) with export on exit.
5. **POPIA.** The dealer is the responsible party; we are its operator. A written operator agreement with security and confidentiality duties is needed (POPIA s21), and any transfer of personal information out of South Africa needs a s72 ground, usually a binding agreement giving similar protection; no country has been formally designated as adequate ([MJK Inc, cross-border transfers](https://mjkinc.co.za/popia/cross-border-transfers); [CMS](https://cms.law/en/zaf/legal-updates/Managing-cross-border-data-transfers)). Put the operator and transfer terms in a data processing addendum accepted at sign-up. Hosting region is decided in the [03 product file](03-product-and-tech.md).
6. **Original content.** FIC guidance may be reproduced only unaltered and for non-commercial use, so the RMCP text must be our own and cite the guidance ([PCC 53 copyright notice](https://www.fic.gov.za/wp-content/uploads/2023/09/2022.08-PCC-PCC-53-RMCP.pdf)).
7. **Change-of-law clause.** We update content when the FIC changes a directive or PCC (for example final PCC 126), and say how fast (target: within 30 days of a final text).

### Consumer-law traps for small buyers

- **Consumer Protection Act.** It covers juristic persons whose asset value or annual turnover is **below R2 million** ([Gazette 34181 via policyvault](https://policyvault.africa/?p=75225); [SAICA](https://saica.org.za/resources/legislation-and-governance/consumer-protection-act)). Small companies and close corporations under R2m fall under it, and so do sole traders, because the threshold applies only to juristic persons (my reading of the same notice). Section 14 (fixed-term agreements) does not apply to juristic persons at all ([NWU repository](https://repository.nwu.ac.za/handle/10394/36126)), but does apply to natural persons (sole traders). Safe default for everyone: yearly term, cancel at any time with a pro-rata refund of unused months on request, and a renewal reminder (my recommendation).
- **ECTA cooling-off.** A "consumer" under ECTA is a natural person ([ECTA s1](https://www.acts.co.za/electronic-communications-and-transactions-act-2002/1__definitions)). Such a buyer may cancel an online services agreement within 7 days without reason ([ECTA s44](https://www.acts.co.za/electronic-communications-and-transactions-act-2002/44__cooling_off_period)), and ECTA s43 requires defined supplier information on the website ([MJK Inc](https://mjkinc.co.za/agreements/ecommerce-terms-and-conditions)). Offer a 14-day money-back promise to every buyer; it covers ECTA and helps sales.

### Insurance

- Professional indemnity and cyber cover in the founder's home country with worldwide (incl. South Africa) territory. Budgeted at R1,500 a month (unverified; get quotes).

## Financial model

36 months by quarter, from October 2026 (Q1) to September 2029 (Q12). Rand, excl. VAT. Cash basis: yearly plans are billed in advance, so "billings" is cash in. **Before founder pay and before income tax** in the founder's home country (a variant with founder pay follows). All inputs are my planning assumptions unless a source is given.

### Assumptions

| Input | Low | Base | High | Basis |
|---|---|---|---|---|
| New paying dealers, year 1 / 2 / 3 | 30 / 70 / 90 | 70 / 160 / 200 | 100 / 240 / 300 | Base reaches about 373 active dealers by month 36, about 7% of the 5,581 item 20 registrations ([FIC AR 2025/26, p. 29](https://www.fic.gov.za/wp-content/uploads/2026/09/FIC-Annual-Report-2025-2026.pdf)) and about 10% of the 2,900 to 3,950 likely small-firm buyers ([02 market file](02-market-and-competition.md)) |
| Timing of new dealers within each year (Oct-Dec / Jan-Mar / Apr-Jun / Jul-Sep) | year 1: 15/28/15/42%; later: 30/25/12/33% | same | same | Year 1 starts slowly (product sellable in December); later years peak around the 31 October deadline |
| Dealers lost at each yearly renewal | 35% | 20% | 12% | No local benchmark; compliance with a yearly legal deadline should renew well (assumption to test) |
| Average dealer price (excl. VAT) | R4,500 | R5,200 | R5,800 | Plan mix in Pricing; year-1 new dealers get 13% less on average (founding offer); +6% a year from year 2 |
| New consultant accounts, year 1 / 2 / 3 | 1 / 3 / 4 | 3 / 8 / 10 | 5 / 12 / 15 | Consultant plan about R20,000 a year, billed monthly; 30% / 15% / 10% lost a year |
| Payment cost | 5.2% of billings | same | same | Paddle 5% + 50 cents ([Paddle](https://www.paddle.com/pricing)) plus a margin for payout FX |
| Partner commissions | 8% of new-dealer billings | same | same | 20% first-year commission on the 40% of dealers expected via partners |
| Partner RMCP reviews | not in the model | | | Billed by the partner directly (Paddle bars legal advice; see Pricing) |
| AI coding tools (founder builds with Claude Code and agents) | R5,000 a month | same | same | about US$300 a month (my estimate) |
| Hosting, AI API, e-mail, SMS and WhatsApp | R3,000 a month in year 1, rising to R5,600 / R7,000 / R9,800 in year 3 | | | my estimate; scales with customers |
| Business tools, insurance, admin | R4,000 a month (CRM and helpdesk R1,500; professional indemnity and cyber cover R1,500 (unverified); bookkeeping increment in the existing foreign company R1,000) | same | same | my estimates |
| South African support contractor (compliance-trained) | year 3 R5,000 a month | year 2 R10,000, year 3 R15,000 a month | year 2 R15,000, year 3 R25,000 a month | my estimate |
| One-off launch costs (Q1) | R145,000 | same | same | SA FICA attorney review of the RMCP engine R60,000 (about 20 to 40 hours; illustrative 2026 commercial rates are R1,200 to R3,500 an hour for a mid-level associate and R2,500 to R8,000 for a partner, [Global Law Experts](https://globallawexperts.com/commercial-lawyer-fees-south-africa/)); terms of service and POPIA pack R25,000; security test R50,000 (unverified); brand and site R10,000 |
| Other legal and security | second legal review R30,000 in Q2; yearly legal update R20,000 / R30,000 / R45,000 each July-September; security retest R40,000 in Q8 and Q12 | | | my estimates |
| Sales and marketing (includes the part-time South African caller) | R225k / R230k / R230k a year | R270k / R340k / R405k | R310k / R470k / R590k | Year 1 base = the 12-month plan above |
| Founder pay | none (variant: R40,000 a month from Q5) | | | |

### Base case by quarter

| Quarter | New dealers | Lost at renewal | Active dealers (end) | Active consultants | Billings | Costs | Net cash | Cumulative | ARR (end) |
|---|---|---|---|---|---|---|---|---|---|
| Q1 Oct-Dec 26 | 10 | 0 | 10 | 0 | 49k | 217k | -169k | -169k | 64k |
| Q2 Jan-Mar 27 | 20 | 0 | 30 | 1 | 93k | 158k | -65k | -234k | 182k |
| Q3 Apr-Jun 27 | 10 | 0 | 41 | 2 | 55k | 93k | -38k | -272k | 245k |
| Q4 Jul-Sep 27 | 29 | 0 | 70 | 3 | 144k | 194k | -50k | -322k | 421k |
| Q5 Oct-Dec 27 | 48 | 2 | 116 | 5 | 332k | 180k | 151k | -170k | 748k |
| Q6 Jan-Mar 28 | 40 | 4 | 152 | 7 | 338k | 187k | 151k | -19k | 985k |
| Q7 Apr-Jun 28 | 19 | 2 | 169 | 8 | 190k | 150k | 40k | 21k | 1,094k |
| Q8 Jul-Sep 28 | 53 | 6 | 216 | 10 | 466k | 320k | 147k | 168k | 1,402k |
| Q9 Oct-Dec 28 | 60 | 11 | 265 | 13 | 676k | 241k | 435k | 603k | 1,829k |
| Q10 Jan-Mar 29 | 50 | 11 | 304 | 15 | 627k | 244k | 383k | 986k | 2,101k |
| Q11 Apr-Jun 29 | 24 | 6 | 322 | 15 | 351k | 197k | 154k | 1,140k | 2,223k |
| Q12 Jul-Sep 29 | 66 | 15 | 373 | 18 | 834k | 387k | 446k | 1,586k | 2,580k |
| Quarter | New dealers | Lost at renewal | Active dealers (end) | Active consultants | Billings | Costs | Net cash | Cumulative | ARR (end) |
|---|---|---|---|---|---|---|---|---|---|
| Q1 Oct-Dec 26 | 15 | 0 | 15 | 1 | 78k | 221k | -144k | -144k | 102k |
| Q2 Jan-Mar 27 | 28 | 0 | 43 | 2 | 148k | 175k | -27k | -170k | 292k |
| Q3 Apr-Jun 27 | 15 | 0 | 58 | 3 | 88k | 107k | -19k | -189k | 393k |
| Q4 Jul-Sep 27 | 42 | 0 | 100 | 5 | 231k | 240k | -9k | -198k | 677k |
| Q5 Oct-Dec 27 | 72 | 2 | 170 | 8 | 558k | 257k | 301k | 103k | 1,223k |
| Q6 Jan-Mar 28 | 60 | 3 | 227 | 11 | 571k | 262k | 309k | 412k | 1,630k |
| Q7 Apr-Jun 28 | 29 | 2 | 254 | 12 | 319k | 214k | 106k | 518k | 1,821k |
| Q8 Jul-Sep 28 | 79 | 5 | 328 | 16 | 788k | 428k | 360k | 878k | 2,354k |
| Q9 Oct-Dec 28 | 90 | 10 | 408 | 20 | 1,175k | 369k | 805k | 1,683k | 3,107k |
| Q10 Jan-Mar 29 | 75 | 10 | 473 | 23 | 1,094k | 367k | 727k | 2,410k | 3,602k |
| Q11 Apr-Jun 29 | 36 | 5 | 504 | 24 | 608k | 302k | 306k | 2,716k | 3,830k |
| Q12 Jul-Sep 29 | 99 | 14 | 589 | 29 | 1,459k | 544k | 915k | 3,631k | 4,482k |

Year totals (base):
- **Year 1 (Oct 2026-Sep 2027):** billings R340k; costs R662k (fixed R144k, one-off legal and security R205k, sales and marketing R270k, payment fees and commissions R43k); **net -R322k**.
- **Year 2:** billings R1.33m; costs R838k; **net +R489k**.
- **Year 3:** billings R2.49m (about US$151k); costs R1.07m; **net +R1.42m** (about US$86k) before founder pay and tax.
- **ARR at month 36: about R2.58m (US$156k)**, from 373 dealers and 18 consultants.
- **Break-even:** trailing four quarters positive from Q6 (Jan-Mar 2028, month 18); cumulative cash positive from Q7 (Apr-Jun 2028, month 21).
- **Peak cash need: about R322,000 (US$19,500)**, reached at the end of Q4 (September 2027). With founder pay of R40,000 a month from Q5, peak need is about R339,000 and cumulative cash at month 36 is still about +R626,000.

### Low case by quarter

| Quarter | New dealers | Lost at renewal | Active dealers (end) | Active consultants | Billings | Costs | Net cash | Cumulative | ARR (end) |
|---|---|---|---|---|---|---|---|---|---|
| Q1 Oct-Dec 26 | 4 | 0 | 4 | 0 | 18k | 213k | -195k | -195k | 23k |
| Q2 Jan-Mar 27 | 8 | 0 | 13 | 0 | 34k | 140k | -106k | -301k | 66k |
| Q3 Apr-Jun 27 | 4 | 0 | 17 | 1 | 20k | 83k | -64k | -365k | 89k |
| Q4 Jul-Sep 27 | 13 | 0 | 30 | 1 | 53k | 143k | -90k | -455k | 153k |
| Q5 Oct-Dec 27 | 21 | 2 | 49 | 2 | 121k | 98k | 23k | -432k | 272k |
| Q6 Jan-Mar 28 | 18 | 3 | 64 | 2 | 120k | 107k | 13k | -419k | 355k |
| Q7 Apr-Jun 28 | 8 | 2 | 71 | 2 | 66k | 86k | -19k | -439k | 391k |
| Q8 Jul-Sep 28 | 23 | 4 | 90 | 3 | 164k | 206k | -42k | -481k | 496k |
| Q9 Oct-Dec 28 | 27 | 8 | 108 | 4 | 235k | 127k | 108k | -373k | 641k |
| Q10 Jan-Mar 29 | 22 | 8 | 123 | 5 | 214k | 134k | 80k | -293k | 728k |
| Q11 Apr-Jun 29 | 11 | 4 | 129 | 5 | 118k | 109k | 9k | -284k | 765k |
| Q12 Jul-Sep 29 | 30 | 11 | 148 | 6 | 282k | 235k | 46k | -238k | 880k |
| Quarter | New dealers | Lost at renewal | Active dealers (end) | Active consultants | Billings | Costs | Net cash | Cumulative | ARR (end) |
|---|---|---|---|---|---|---|---|---|---|
| Q1 Oct-Dec 26 | 10 | 0 | 10 | 0 | 49k | 217k | -169k | -169k | 64k |
| Q2 Jan-Mar 27 | 20 | 0 | 30 | 1 | 93k | 158k | -65k | -234k | 182k |
| Q3 Apr-Jun 27 | 10 | 0 | 41 | 2 | 55k | 93k | -38k | -272k | 245k |
| Q4 Jul-Sep 27 | 29 | 0 | 70 | 3 | 144k | 194k | -50k | -322k | 421k |
| Q5 Oct-Dec 27 | 48 | 2 | 116 | 5 | 332k | 180k | 151k | -170k | 748k |
| Q6 Jan-Mar 28 | 40 | 4 | 152 | 7 | 338k | 187k | 151k | -19k | 985k |
| Q7 Apr-Jun 28 | 19 | 2 | 169 | 8 | 190k | 150k | 40k | 21k | 1,094k |
| Q8 Jul-Sep 28 | 53 | 6 | 216 | 10 | 466k | 320k | 147k | 168k | 1,402k |
| Q9 Oct-Dec 28 | 60 | 11 | 265 | 13 | 676k | 241k | 435k | 603k | 1,829k |
| Q10 Jan-Mar 29 | 50 | 11 | 304 | 15 | 627k | 244k | 383k | 986k | 2,101k |
| Q11 Apr-Jun 29 | 24 | 6 | 322 | 15 | 351k | 197k | 154k | 1,140k | 2,223k |
| Q12 Jul-Sep 29 | 66 | 15 | 373 | 18 | 834k | 387k | 446k | 1,586k | 2,580k |
| Quarter | New dealers | Lost at renewal | Active dealers (end) | Active consultants | Billings | Costs | Net cash | Cumulative | ARR (end) |
|---|---|---|---|---|---|---|---|---|---|
| Q1 Oct-Dec 26 | 15 | 0 | 15 | 1 | 78k | 221k | -144k | -144k | 102k |
| Q2 Jan-Mar 27 | 28 | 0 | 43 | 2 | 148k | 175k | -27k | -170k | 292k |
| Q3 Apr-Jun 27 | 15 | 0 | 58 | 3 | 88k | 107k | -19k | -189k | 393k |
| Q4 Jul-Sep 27 | 42 | 0 | 100 | 5 | 231k | 240k | -9k | -198k | 677k |
| Q5 Oct-Dec 27 | 72 | 2 | 170 | 8 | 558k | 257k | 301k | 103k | 1,223k |
| Q6 Jan-Mar 28 | 60 | 3 | 227 | 11 | 571k | 262k | 309k | 412k | 1,630k |
| Q7 Apr-Jun 28 | 29 | 2 | 254 | 12 | 319k | 214k | 106k | 518k | 1,821k |
| Q8 Jul-Sep 28 | 79 | 5 | 328 | 16 | 788k | 428k | 360k | 878k | 2,354k |
| Q9 Oct-Dec 28 | 90 | 10 | 408 | 20 | 1,175k | 369k | 805k | 1,683k | 3,107k |
| Q10 Jan-Mar 29 | 75 | 10 | 473 | 23 | 1,094k | 367k | 727k | 2,410k | 3,602k |
| Q11 Apr-Jun 29 | 36 | 5 | 504 | 24 | 608k | 302k | 306k | 2,716k | 3,830k |
| Q12 Jul-Sep 29 | 99 | 14 | 589 | 29 | 1,459k | 544k | 915k | 3,631k | 4,482k |

- Year 3 billings R849k; ARR at month 36 about R880k (US$53k), 148 dealers.
- Trailing four quarters positive only from Q9 (Oct-Dec 2028); **cumulative cash never turns positive in 36 months** (-R238k at month 36).
- Peak cash need about R481,000 (US$29,000) without founder pay; about R1.2m if the founder pays themself R40,000 a month from Q5. The kill criteria below should stop this case by month 12.

### High case by quarter

| Quarter | New dealers | Lost at renewal | Active dealers (end) | Active consultants | Billings | Costs | Net cash | Cumulative | ARR (end) |
|---|---|---|---|---|---|---|---|---|---|
| Q1 Oct-Dec 26 | 15 | 0 | 15 | 1 | 78k | 221k | -144k | -144k | 102k |
| Q2 Jan-Mar 27 | 28 | 0 | 43 | 2 | 148k | 175k | -27k | -170k | 292k |
| Q3 Apr-Jun 27 | 15 | 0 | 58 | 3 | 88k | 107k | -19k | -189k | 393k |
| Q4 Jul-Sep 27 | 42 | 0 | 100 | 5 | 231k | 240k | -9k | -198k | 677k |
| Q5 Oct-Dec 27 | 72 | 2 | 170 | 8 | 558k | 257k | 301k | 103k | 1,223k |
| Q6 Jan-Mar 28 | 60 | 3 | 227 | 11 | 571k | 262k | 309k | 412k | 1,630k |
| Q7 Apr-Jun 28 | 29 | 2 | 254 | 12 | 319k | 214k | 106k | 518k | 1,821k |
| Q8 Jul-Sep 28 | 79 | 5 | 328 | 16 | 788k | 428k | 360k | 878k | 2,354k |
| Q9 Oct-Dec 28 | 90 | 10 | 408 | 20 | 1,175k | 369k | 805k | 1,683k | 3,107k |
| Q10 Jan-Mar 29 | 75 | 10 | 473 | 23 | 1,094k | 367k | 727k | 2,410k | 3,602k |
| Q11 Apr-Jun 29 | 36 | 5 | 504 | 24 | 608k | 302k | 306k | 2,716k | 3,830k |
| Q12 Jul-Sep 29 | 99 | 14 | 589 | 29 | 1,459k | 544k | 915k | 3,631k | 4,482k |

- Year 3 billings R4.34m (US$262k); ARR at month 36 about R4.48m (US$271k), 589 dealers and 29 consultants.
- Positive on a trailing basis and cumulatively from Q5 (Oct-Dec 2027). Peak cash need about R198,000 (US$12,000).
- Needs real motor-dealer uptake, a JCSA or NADA endorsement and a final PCC 126 that adds registrations.

### Scenario summary

| | Low | Base | High |
|---|---|---|---|
| Active dealers / consultants at month 36 | 148 / 6 | 373 / 18 | 589 / 29 |
| ARR at month 36 | R0.88m (US$53k) | R2.58m (US$156k) | R4.48m (US$271k) |
| Year 3 billings | R0.85m | R2.49m | R4.34m |
| Year 3 net cash before founder pay and tax | R0.24m | R1.42m | R2.75m |
| Peak cash need (no founder pay) | R481k (US$29k) | R322k (US$19.5k) | R198k (US$12k) |
| Cumulative cash at month 36 | -R238k | +R1.59m | +R3.63m |
| Sales and marketing cost per new customer, year 1 / year 3 | R7,300 / R2,400 | R3,700 / R1,900 | R3,000 / R1,900 |

### Sensitivities on the base case (my model)

| Change | ARR month 36 | Year 3 net | Peak cash need |
|---|---|---|---|
| Base | R2.58m | R1.42m | R322k |
| 30% lost at each renewal (not 20%) | R2.43m | R1.27m | R322k |
| 30% fewer new dealers every year | R1.93m | R0.83m | R404k |
| Average price R4,200 (not R5,200) | R2.16m | R1.04m | R374k |
| No consultant channel | R2.18m | R1.12m | R344k |

Reading: the business depends most on **new-dealer volume** (the sales motion), less on price, and least on renewal rate within 36 months. Peak cash need stays between about R200k and R500k (US$12k to US$30k) in every case except low-with-founder-pay. It is a small, profitable business in the base case, not a venture.

### Unit economics (base)

- Gross margin after payment fees, hosting and AI costs: about 90% (my estimate).
- Lifetime value at R5,200 a year, 90% margin and 20% yearly loss: about **R23,000** per dealer.
- Sales and marketing cost per new customer: R3,700 in year 1, about R2,000 from year 2. **LTV to CAC about 6x to 12x**. Payback is immediate, because plans are paid a year in advance.


## Regional expansion

The engine (questionnaire, RMCP builder, calendar, register, inspection file) carries over; the legal content does not. Each country needs its own rules, forms and a local reviewer. Paddle supports buyers in Namibia, Botswana, Kenya, Mauritius, Eswatini, Lesotho, Mozambique and Zambia (charged in USD); Zimbabwe is not listed as supported ([Paddle supported countries](https://developer.paddle.com/concepts/sell/supported-countries-locales)).

| Order | Market | Why | Caveats | Source |
|---|---|---|---|---|
| 1 (year 2-3) | **South Africa, more item 20 groups and adjacent duties** | Motor (4,277) and other goods (640) are 88% of item 20; estate agents (9,695) and attorneys (21,034) are under the same RMCP duty | Adjacent sectors are crowded (nCino KYC through the Law Society; estate-agent software) | [FIC AR 2025/26, p. 29](https://www.fic.gov.za/wp-content/uploads/2026/09/FIC-Annual-Report-2025-2026.pdf); [02 market file](02-market-and-competition.md) |
| 2 (year 3) | **Namibia** | English; diamond trade; goAML since 2008; new Financial Intelligence Act 2023 | Whether dealers are covered is unverified; small market | [Bank of Namibia](https://www.bon.com.na/getattachment/416e1d18-9260-4590-87f7-cdf67247fc1b/.aspx); [UNODC](https://www.unodc.org/unodc/en/frontpage/providing-affordable-it-tools-to-developing-countries.html) |
| 3 (year 3) | **Botswana** | Diamond hub; the 2009 Act already listed precious-stone dealers and car dealerships; goAML in use | 2022 Act's schedule not read (unverified) | [FI Act 2009](https://policyvault.africa/wp-content/uploads/policy/BWA549.pdf); [NBFIRA goAML](https://www.nbfira.org.bw/goaml/) |
| 4 (later) | **Kenya** | Dealers in precious metals and stones, jewellers and scrap buyers told to register with the FRC by 11 April 2025; newly regulated | Different law (POCAMLA); further away; no count | [People Daily](https://peopledaily.digital/news/state-orders-dealers-in-precious-metals-stones-to-register-with-frc-by-april) |
| 5 (later) | **Mauritius** | Jewellery and precious-metal dealers must register with the FIU; goAML | Small; English and French | [FIU notice via moneylaundering.com](https://www.moneylaundering.com/wp-content/uploads/2024/04/Mauritaus.Notice.AMLCTF.32124.pdf) |

Regional revenue is not in the financial model. Budget about R60,000 to R100,000 of local legal content per new country (my estimate), and enter only after South Africa reaches about 200 paying dealers.

## Exit and partnerships

### Partnerships (from day 1)

- **JCSA**: member offer and webinars ([JCSA](https://www.jewellery.org.za/membership)).
- **Screening vendors (VerifyNow, AML GO)**: referral swap; they do per-check screening, we do the yearly file ([VerifyNow](https://www.verifynow.co.za/pricing); [AML GO](https://amlgo.co.za/)).
- **Compliance consultants and accountants**: the Consultant plan; white-label output.
- **nCino KYC**: complement, not compete. It already has a customisable RMCP template and expert notes ([nCino KYC](https://blog.kycafrica.ncino.com/breaking-the-myths-around-fica-outsourcing)), but no yearly sector file that we found. An integration (import CDD records) would make us useful to its dealer customers.

### Likely acquirers

| Buyer | Why | Signal |
|---|---|---|
| nCino (nCino KYC, formerly DocFox) | Adds the yearly file to its dealer KYC base | nCino bought DocFox on 20 March 2024 for about US$74m cash ([nCino 10-K FY2026](https://www.sec.gov/Archives/edgar/data/1902733/000190273326000022/ncno-20260131.htm); [LaunchBase Africa](https://launchbaseafrica.com/2024/03/21/ncino-acquires-docfox-south-african-fintech-deal-bolsters-banking-services)) |
| UPAY / AML GO | Screening plus consultant RMCPs; a product would scale it | UPAY took a majority of AML GO in June 2024 (per [CB Insights](https://www.cbinsights.com/company/aml-go), via [02 market file](02-market-and-competition.md)) |
| VerifyNow | Has a free RMCP generator and dealer pages; would gain a paid yearly product | [VerifyNow](https://www.verifynow.co.za/fica-toolkit/rmcp-generator) |
| Moonstone | Sells a once-off FICA toolkit to a broad compliance audience | [Moonstone](https://www.moonstone.co.za/new-do-it-yourself-fica-compliance-solution-for-accountable-institutions/) |
| Dealer-software vendors (motor DMS, jewellery POS) | Bundle compliance into their product | (unverified; not researched) |

### Value

- Small bootstrapped SaaS sells for about **2x to 4x yearly revenue** or **3x to 6x seller's discretionary earnings** (marketplace-based estimates; [beancount.io](https://beancount.io/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide); [BigIdeasDB](https://bigideasdb.com/saas-valuation-multiples-2026)). Vendor sources; directional only.
- Base case at month 36: ARR R2.58m (US$156k) gives **about R5m to R10m (US$0.3m to US$0.6m)**. Low case: under R2m. High case: about R9m to R18m.
- A strategic buyer (nCino, UPAY) could pay more for the dealer base, but only if the base is large. Plan to run it for cash; treat a sale as an option from year 3.

## Risks and mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| **First deadline missed.** The 31 Oct 2026 upload comes before the product is sellable; the FIC refused a transition period ([Moonstone](https://www.moonstone.co.za/?p=61635)) | certain | medium (year 1 slower) | Pre-sell and sell to late filers; the main season is Aug-Oct 2027; PCC 126 season Feb-Apr 2027 |
| **Too few buyers or low willingness to pay.** Low filing rates may mean indifference, not pain | medium | high | Kill criteria at days 30 and 90 and month 12; cheap Starter plan; consultant channel |
| **nCino KYC or VerifyNow adds a yearly sector file** | medium | high | Move fast on jewellers; sector depth; partner/integrate with nCino rather than fight; price below them |
| **A generated RMCP fails an inspection** | medium | high (brand) | Attorney-reviewed engine; dealer's own answers drive content; clear "you approve it" step; optional partner review; liability cap; PI cover |
| **Paddle rejects the business or the review add-on** | low-medium | medium | Software-only listing; reviews billed by partners; Stripe direct as plan B (then register for SA VAT before R1m) |
| **Card-only checkout loses EFT-minded dealers** | medium | medium | EUR/USD invoice via Paddle; measure refusals; local company if over 30% refuse |
| **Draft PCC 126 changes** after comments closed 16 Oct 2026 ([draft PCC 126](https://www.fic.gov.za/wp-content/uploads/2026/09/2026.9-PCC-DPMS.pdf)) | high | low-medium | Content is data, not code; update within 30 days |
| **Founder is abroad**; trust and support across time zones | medium | medium | SA caller and support contractor; WhatsApp support; trips in Feb and Sep; JCSA endorsement |
| **Rand weakness** cuts foreign-currency income | medium | low-medium | Costs are mostly in rand or small; price rises of 6% a year; ECB rate R18.53 per euro on 9 Oct 2026 ([ECB](https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml)) |
| **POPIA and data security** (ID copies of dealers' customers) | medium | high | Operator agreement, s72 terms, security test, minimal data, encryption; see 03 file |
| **Accidental local permanent establishment** via an SA agent | low | medium | Agents refer only; customers accept terms online with the foreign company |

## Milestones and kill criteria

| Date | Milestone | Kill or rethink if |
|---|---|---|
| 10 Nov 2026 (day 30) | 30 dealer conversations; 5+ reservations; attorney engaged; Paddle approved | **fewer than 3 reservations from 30 conversations** -> rethink the offer, test motor dealers or a consultant-only product |
| 11 Dec 2026 (day 61) | Paid launch; 10 paying dealers; security test passed | Paddle and Stripe both refuse -> pause until a payment route works |
| 9 Jan 2027 (day 90) | 12 paying dealers, 1 consultant, 150 leads, 1 promoting partner | **fewer than 6 paying** -> stop or sell as a consultant tool only |
| 30 Apr 2027 (month 7) | 35 paying dealers; motor pack live; JCSA or another body promoting | fewer than 20 paying -> cut marketing to the minimum, keep only renewals |
| 30 Sep 2027 (month 12) | 70 paying dealers and 3 consultants (base) | **fewer than 35 paying dealers** (the low case has 30) -> stop new spend; run for renewals or sell the code and content |
| 31 Dec 2027 (month 15) | First renewals; 116 active | **renewal below 60%** -> fix the product before any more sales spend |
| 30 Sep 2028 (month 24) | 216 active dealers, 10 consultants; cash-positive on a trailing 12 months | under 120 active -> no regional expansion; consider a sale |
| 30 Sep 2029 (month 36) | 373 active dealers, ARR about R2.6m | |

## Open questions

- Paddle charges 15% SA VAT on B2B sales. Do its invoices meet South African tax-invoice rules so VAT-registered dealers can claim the input tax? Ask Paddle and an SA tax adviser.
- Will Paddle accept a compliance-document product, given its bar on legal advice? Ask before building checkout.
- What share of target dealers are not VAT-registered (relevant only for Stripe direct and the "solely to vendors" exclusion)?
- What exactly does nCino KYC charge dealers, and does its RMCP template get a yearly update?
- Will JCSA promote a member offer, and at what price or revenue share?
- What does a South African FICA attorney charge to review the RMCP engine (fixed-fee quote)?
- Is the R50,000 card limit for small foreign payments now raised to R100,000 (draft 2026 circular)? It does not affect our prices, but check before selling multi-year plans.
- What is the 2027 date and cost of Jewellex Africa, and the SAJN or The Jeweller advertising rates?
- Does a SaaS fee with a generated document ever get treated as a royalty by SARS (withholding 15% where no treaty)? Get a one-page tax opinion if a large customer asks.
- How many dealers refuse card payment to a foreign company? Track it from the first 30 calls.


## Sources

Internal: [A1 report](../reports/south-africa-a1.md), [01 law file](01-law-and-requirements.md), [02 market file](02-market-and-competition.md), [03 product file](03-product-and-tech.md).

External (in order of first use):

- https://www.moonstone.co.za/?p=61635
- https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/
- https://www.sars.gov.za/wp-content/uploads/Ops/Guides/Legal-Pub-FAQs-VAT02-FAQs-VAT-on-Supplies-of-Electronic-Services.pdf
- https://www.resbank.co.za/content/dam/sarb/what-we-do/financial-surveillance/financial-surveillance-documents/draft-circulars-and-documents-for-comments/Draft%20Exchange%20Control%20Circular%20B.1%20-%20Credit%20or%20debit%20card%20limit.pdf
- https://taxsummaries.pwc.com/south-africa/corporate/withholding-taxes
- https://mjkinc.co.za/doing-business-in-south-africa/company-registration-foreigners
- https://www.fic.gov.za/wp-content/uploads/2023/09/2022.08-PCC-PCC-53-RMCP.pdf
- https://www.verifynow.co.za/fica-toolkit/rmcp-generator
- https://blog.kycafrica.ncino.com/breaking-the-myths-around-fica-outsourcing
- https://www.moonstone.co.za/new-do-it-yourself-fica-compliance-solution-for-accountable-institutions/
- https://amlgo.co.za/
- https://www.verifynow.co.za/pricing
- https://www.clearcomply.co.za/pricing
- https://mjkinc.co.za/rmcp
- https://www.fic.gov.za/wp-content/uploads/2025/04/Administrative-sanction-%E2%80%93-Miller-Gold-House-Pty-Ltd.pdf
- https://www.fic.gov.za/wp-content/uploads/2026/01/Administrative-sanction-%E2%80%93-Auctionman-Pty-Ltd.pdf
- https://www.fic.gov.za/wp-content/uploads/2026/09/FIC-Annual-Report-2025-2026.pdf
- https://paddle.com/help/start/intro-to-paddle/what-am-i-not-allowed-to-sell-on-paddle
- https://api.acts.co.za/attorneys-act-1979/rules_part_vi_sharing_of_fees_.php
- https://www.acts.co.za/legal-practice-act-2014/n168_notice_no__168_of_2019
- https://developer.paddle.com/concepts/sell/supported-countries-locales
- https://nada.co.za/?p=5097
- https://www.fic.gov.za/wp-content/uploads/2026/09/Directive-12-On-the-submission-of-risk-management-and-compliance-programmes.pdf
- https://www.fic.gov.za/wp-content/uploads/2026/07/Directive-10-On-information-pertaining-to-geographic-locations.pdf
- https://blog.kycafrica.ncino.com/fic-updates-directive-10-draft-directive-12-guidance-note-7b
- https://www.fic.gov.za/wp-content/uploads/2026/09/2026.9-PCC-DPMS.pdf
- https://www.fic.gov.za/wp-content/uploads/2026/03/Directive-11-%E2%80%93-Risk-and-compliance-return.pdf
- https://www.fic.gov.za/wp-content/uploads/2026/07/Media-release-RCR-closing-dates.pdf
- https://www.fic.gov.za/wp-content/uploads/2026/01/National-Treasury-media-statement-%E2%80%93-General-Laws-Amendment-Bill-2025.pdf
- https://www.cantonfair.net/event/37287-jewellex-africa
- https://www.jewellery.org.za/directory
- https://www.jewellery.org.za/membership
- https://nada.co.za/?p=4380
- https://www.metcon.co.za/wp-content/uploads/2023/09/RAC-POL-001-Responsible-Jewellery-Council-Compliance-Policy-Iss-1.1.pdf
- https://themediaonline.co.za/2022/05/local-businesses-need-local-insights-to-maximise-google-ad-spend
- https://de.statista.com/statistics/1262499/search-advertising-cpc-africa/
- https://kycafrica.ncino.com/fica-masterclass-why-criminals-are-targeting-high-value-dealers-how-to-stop-them/
- https://www.moonstone.co.za/?p=61913
- https://www.moonstone.co.za/fic-accepting-rmcps-after-the-12-march-deadline/
- https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml
- https://www.capitecbank.co.za/globalassets/pages/documents-library/business/business-bank-fees-pricing-guide-2026.pdf
- https://community.standardbank.co.za/t5/Credit-card/International-Transfer-Fee-credit-card-payment/m-p/422352
- https://kolonell.com/en/blog/payment-processing-fees-south-africa-ozow-payfast-2026
- https://docs.stripe.com/currencies
- https://stripe.com/global
- https://stripe.com/ie/pricing
- https://stripe.com/pricing
- https://stripe.com/ie/billing/pricing
- https://stripe.com/ie/tax/pricing
- https://developer.paddle.com/concepts/sell/supported-currencies
- https://www.paddle.com/pricing
- https://paddle.com/support/what-is-a-merchant-of-record/
- https://www.paddle.com/about/vendor-information
- https://www.lemonsqueezy.com/pricing
- https://intercom.help/trovahealth/en/articles/10697542-what-are-paystack-s-fees-and-how-can-i-calculate-them-south-africa
- https://paymentproviders.io/compare/payfast-vs-a-pay?focus=fees
- https://payfast.io/fees
- https://apps.wisecp.com/en/Payfast
- https://www.sars.gov.za/types-of-tax/value-added-tax/
- https://taxnews.ey.com/news/2025-0709-south-africa-publishes-amendments-excluding-certain-business-to-business-transactions-from-scope-of-electronic-services-for-vat-purposes
- https://www.cliffedekkerhofmeyr.com/en/news/publications/2016/tax/budget-alert-24-february-withdrawal-of-withholding-tax-on-service-fees-.html
- https://webberwentzel.com/News/Pages/electronic-services-new-regulations-usher-in-a-new-dispensation-but-do-they-work.aspx
- https://elyforma.com/blog/cipc-company-registration-fees-2026
- https://www.online.fnb.co.za/business-banking/cipc+bee/cipc.html
- https://help.govchain.co.za/en/articles/1807746-how-much-does-company-registration-cost
- https://www.healyconsultants.com/?p=3983
- https://www.healyconsultants.com/wp-content/uploads/2022/12/South-Africa-LLC-Annual-Renewal.pdf
- https://www.ourpower.co.za/tools/company-registration/foreign-directors-sa-company
- https://www.procompare.co.za/providers/geldenhuys-j-co
- https://taxsummaries.pwc.com/south-africa/corporate/taxes-on-corporate-income
- https://policyvault.africa/?p=75225
- https://www.fic.gov.za/wp-content/uploads/2023/09/2014.4-DIR-Directive-2-on-use-of-login-credentials-following-registration-with-the-FIC.pdf
- https://mjkinc.co.za/popia/cross-border-transfers
- https://cms.law/en/zaf/legal-updates/Managing-cross-border-data-transfers
- https://saica.org.za/resources/legislation-and-governance/consumer-protection-act
- https://repository.nwu.ac.za/handle/10394/36126
- https://www.acts.co.za/electronic-communications-and-transactions-act-2002/1__definitions
- https://www.acts.co.za/electronic-communications-and-transactions-act-2002/44__cooling_off_period
- https://mjkinc.co.za/agreements/ecommerce-terms-and-conditions
- https://globallawexperts.com/commercial-lawyer-fees-south-africa/
- https://www.bon.com.na/getattachment/416e1d18-9260-4590-87f7-cdf67247fc1b/.aspx
- https://www.unodc.org/unodc/en/frontpage/providing-affordable-it-tools-to-developing-countries.html
- https://policyvault.africa/wp-content/uploads/policy/BWA549.pdf
- https://www.nbfira.org.bw/goaml/
- https://peopledaily.digital/news/state-orders-dealers-in-precious-metals-stones-to-register-with-frc-by-april
- https://www.moneylaundering.com/wp-content/uploads/2024/04/Mauritaus.Notice.AMLCTF.32124.pdf
- https://www.sec.gov/Archives/edgar/data/1902733/000190273326000022/ncno-20260131.htm
- https://launchbaseafrica.com/2024/03/21/ncino-acquires-docfox-south-african-fintech-deal-bolsters-banking-services
- https://www.cbinsights.com/company/aml-go
- https://beancount.io/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide
- https://bigideasdb.com/saas-valuation-multiples-2026
