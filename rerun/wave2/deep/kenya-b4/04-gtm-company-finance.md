# Kenya NDTCP pack: go-to-market, payments, company setup and financials (deep dive 04)

Date: 10 October 2026. Builds on [the B4 report](../reports/kenya-b4.md), [01 law and requirements](01-law-and-requirements.md), [02 market and competition](02-market-and-competition.md) and [03 product and tech](03-product-and-tech.md).

Conventions:
- Money is in KES. CBK's indicative rate was KES 129.89 per USD on 7 Oct 2026 ([CBK](https://www.centralbank.go.ke/?p=12585)). I round to **KES 130 = USD 1**.
- Prices are **net of Kenyan VAT (16%)** unless stated.
- "My estimate" marks a planning number, not a sourced fact. "(unverified)" marks a fact no source confirmed.
- The seller abroad is assumed to be an EU or UK company. Other home countries are noted where the tax result differs.
- Product names follow the 03 file: an **Application Kit** (one-off) and **Comply** (yearly subscription).

## Summary

- **Sell two things: a deadline product and a recurring product.**
  - The **Application Kit** costs KES 69,000 for the registration tier and KES 99,000 for the licence tier (about USD 530 and USD 760). It sells into the rush before the ~29 Mar 2027 application deadline ([01 file](01-law-and-requirements.md)).
  - **Comply** costs KES 78,000 a year for registered lenders and KES 156,000 for licensed lenders (about USD 600 and USD 1,200). It serves the 281 lenders already licensed ([CBK directory, via 02](https://www.centralbank.go.ke/wp-content/uploads/2026/09/Directory-of-Digital-Credit-Providers-September-2026.pdf)).
  - An **Adviser** plan costs KES 540,000 a year for up to 15 lender workspaces.
  - These prices sit below what lenders already pay: KES 100,000 to apply and KES 250,000-500,000 a year to CBK ([Tech-ish](https://tech-ish.com/2026/10/04/cbk-raises-licensed-lenders-annual-fee-to-kes-500000-from-kes-20000/)), USD 59-346 a month for loan software ([Loandisk](https://loandisk.com/pricing.php)), and KES 60,000-250,000 for a lawyer's licence application ([Global Law Experts, Oct 2026](https://globallawexperts.com/commercial-lawyer-fees-kenya/)).
- **Kenya is not a "sell from abroad and forget" market.** Three tax rules hit a foreign seller:
  - **VAT.** A non-resident selling digital services to Kenyan businesses must register for Kenyan VAT from the first sale. There is no threshold. Returns are monthly ([PwC](https://taxsummaries.pwc.com/kenya/corporate/other-taxes)).
  - **SEP tax.** The significant economic presence tax takes about 3% of gross sales. Since the Finance Act 2025 there is no small-seller threshold ([PwC](https://taxsummaries.pwc.com/kenya/corporate/taxes-on-corporate-income)).
  - **Withholding tax.** Since 1 July 2026, "royalty" includes software, with its licence, training, maintenance and support fees ([Grant Thornton on the Finance Act 2026](https://www.grantthornton.co.ke/globalassets/1.-member-firms/kenya/insights/pdf/grant-thornton-kenyas-analysis-of-the-finance-act-2026.pdf)). A Kenyan buyer may have to withhold 20% from a payment abroad, or 10-15% under a treaty ([PwC](https://taxsummaries.pwc.com/kenya/corporate/withholding-taxes)).
- **Payments plan: Paddle first, then a Kenyan company.**
  - **Launch on Paddle** from the founder's company abroad. Paddle charges 5% + USD 0.50 ([Paddle](https://www.paddle.com/pricing)), and it collects Kenyan VAT at 16% on B2B and B2C sales ([Paddle tax list](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)). Price in USD, because KES is not a Paddle checkout currency. This catches the March 2027 rush without waiting for a local company.
  - **Do not use Stripe directly.** It takes Kenyan cards, but the founder's company would then have to file Kenyan VAT and SEP tax itself. A Kenyan company cannot open Stripe at all: Kenya is "Extended network" and is pointed to Paystack ([Stripe](https://stripe.com/global)).
  - **Open a Kenyan private company in month 1-3 and move billing to it by about April 2027**, before the first renewals. It invoices in KES with eTIMS invoices, takes M-Pesa and bank transfer, and removes the withholding-tax doubt.
- **Company costs are low.**
  - The official BRS fee is **KES 10,650** ([BRS fee schedule](https://brs.go.ke/fee-schedule-companies-registry/)). There is no minimum capital. A company secretary is only required at KES 5m or more paid-up capital ([BRS-hosted risk assessment](https://brs.go.ke/wp-content/uploads/2024/01/PUBLIC-VERSION-MONEY-LAUNDERING-AND-TERRORIST-FINANCING-RISK-ASSESSMENT-REPORT.pdf)).
  - Budget **KES 100,000-150,000 all-in** to set it up remotely through a lawyer or corporate service firm. Running costs are about **KES 35,000-45,000 a month** (my estimate).
- **Channels, in priority order:**
  1. Small Nairobi law and consulting firms that already sell DCP licensing help, as reviewers and resellers.
  2. Direct outreach to the 281 lenders in CBK's public directory.
  3. Search and content aimed at unlicensed offline lenders.
  4. Associations: DFSAK, the Fintech Alliance and AMFI-K.
  5. Press coverage of each CBK licensing batch.
  6. Loan-software vendors.

  Year-1 marketing budget: **KES 1.4m (USD 10,800)**, plus a Nairobi-based part-time sales and support person.
- **Base case.**
  - 47 kits in year 1, 107 Comply subscribers and 7 adviser plans by month 36 (Oct 2029). **ARR is KES 15.7m (USD 120,000)**.
  - Year-3 profit before founder pay is KES 7.9m (USD 61,000).
  - Thanks to prepaid kits, cumulative cash turns positive in month 5. Peak cash need is only **KES 1.1m (USD 8,500)**.
  - **Low case:** 51 subscribers and KES 6.1m ARR. It never pays back in 36 months. Peak cash need is KES 2.9m, or KES 11.3m (USD 87,000) with founder pay from year 2.
  - **High case:** 204 subscribers and KES 31.2m ARR.
- **Upside is regional.** Uganda has 1,302 licensed money lenders and Tanzania has 2,938 Tier 2 lenders ([02 file](02-market-and-competition.md)). Uganda (English) comes first, about month 18-24.
- **Exit:** a loan-software vendor, a GRC or KYC vendor, or a credit bureau, at about 2.5-4x ARR ([beancount.io](https://beancount.io/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide)). On the base case that is about USD 300,000-480,000.
- **Kill criteria:**
  - Fewer than 2 partner firms and fewer than 5 paying pilots by 15 Dec 2026.
  - Fewer than 15 kits by 31 Mar 2027.
  - Fewer than 25 Comply subscribers by Oct 2027.
  - A first-year renewal rate below 60%.

## Pricing and packaging

### What lenders already pay (anchors)

| Item | Price | Source |
|---|---|---|
| CBK application fee (new rules) | KES 100,000 | [Tech-ish](https://tech-ish.com/2026/10/04/cbk-raises-licensed-lenders-annual-fee-to-kes-500000-from-kes-20000/) |
| CBK annual fee | KES 500,000 (licence), KES 250,000 (registration), due by 31 Dec | [Tech-ish](https://tech-ish.com/2026/10/04/cbk-raises-licensed-lenders-annual-fee-to-kes-500000-from-kes-20000/) |
| Missing the 31 Dec fee deadline | KES 1m penalty, or double the fee | [TechTrendsKE](https://techtrendske.co.ke/2026/10/05/cbk-non-deposit-taking-credit-providers-regulations/); [Tech-ish](https://tech-ish.com/2026/10/04/cbk-raises-licensed-lenders-annual-fee-to-kes-500000-from-kes-20000/) |
| ODPC registration (financial services must register) | KES 4,000 / 16,000 / 40,000 by size, every 24 months | [ODPC](https://www.odpc.go.ke/wp-content/uploads/2025/07/Data-Controllers-360-Degrees-Compliance-Requirements.-Z-Card.pdf) (via 02) |
| Loan software: Loandisk | USD 59 / 129 / 179 / 346 a month | [Loandisk](https://loandisk.com/pricing.php) |
| Loan software: Kovara ("CBK Ready") | from USD 249 a month | [Kovara](https://kovara.io/kenya.html) |
| Loan software: Lendsqr | USD 0 / 200 / 500 a month | [Lendsqr](https://lendsqr.com/pricing) |
| KYC: YouVerify | from KES 8,000 a month | [Business Daily](https://www.businessdailyafrica.com/bd/corporate/technology/nigerian-startup-youverify-launches-in-kenya-4247756) |
| Compliance specialist (banking), middle 80% | about KES 53,000-142,000 a month gross | [Paylab](https://www.paylab.com/ke/salaryinfo/banking/compliance-specialist?lang=en) |
| Lawyer: one licence application or simple compliance review | KES 60,000-250,000 | [Global Law Experts, Oct 2026](https://globallawexperts.com/commercial-lawyer-fees-kenya/) |
| Lawyer: hourly rates, boutique firm | KES 8,000-15,000 (junior), 18,000-32,000 (senior associate), 30,000-55,000 (partner) | [Global Law Experts](https://globallawexperts.com/commercial-lawyer-fees-kenya/) |
| Lawyer: SME monthly retainer | KES 50,000-120,000 | [Global Law Experts](https://globallawexperts.com/commercial-lawyer-fees-kenya/) |
| One-day ICPAK professional seminar | KES 10,000 | [ICPAK](https://www.icpak.com/?p=49634) (via 02) |
| Published price for a DCP licensing package from a consultant | none found. At least 15 firms sell the work, and none shows a price | [02 file](02-market-and-competition.md) |

What this tells us:
- A lender pays CBK KES 350,000 (registration) or KES 600,000 (licence) in year one. A kit under KES 100,000 is small next to that, and below a lawyer's typical fee for one application.
- Small lenders already pay USD 59-250 a month for core loan software. A compliance tool should cost less than that core system: about USD 50 a month for registered lenders and USD 100 for licensed ones.
- The registered tier has just been hit with a KES 250,000 annual fee and is price-sensitive ([02 file](02-market-and-competition.md)). It gets the lower price.

### Proposed plans (KES, net of 16% VAT)

| Plan | Who | Price | What is included |
|---|---|---|---|
| **Free scope and deadline check** | Anyone (lead magnet) | 0 | In or out of scope; licence or registration (KES 20m test); fees; countdown to ~29 Mar 2027; 31 Dec fee reminder by email |
| **Application Kit, registration tier** | Lender with capital under KES 20m | **69,000** one-off (USD 530) | Dossier builder: Forms NDTCP 1-3 checklist, a per-person document tracker (police, KRA, CRB certificates), sworn declarations. Generated policy set: credit, code of conduct, consumer protection, AML/CFT, data protection, corporate governance, complaints. Pricing-model sheet with APR calculator. 3 months of Comply included |
| **Application Kit, licence tier** | Lender at KES 20m or more | **99,000** one-off (USD 760) | As above, plus the licence-only items (audited-accounts checklist, fuller governance pack). 3 months of Comply included |
| **Advocate review** (add-on to a kit) | Lenders that want a lawyer's sign-off | about **75,000** | A partner advocate reviews the generated set against the lender's facts. It is billed by the advocate directly, or resold by us; see Contracts on fee-sharing |
| **Comply, registered** | Registered lender | **78,000 a year** (about 6,500 a month; USD 600) | Registers (complaints with 7-day, 48-hour and 30-day clocks; product and price approvals; agents; outsourcing; people changes; CRB pre-listing notices), compliance calendar (31 Dec fee and return, agent renewals, ODPC, FRC), annual-certification workpaper, inspection pack, updates when rules change, KES 20m conversion alert |
| **Comply, licensed** | Licensed lender, including the 281 deemed-licensed DCPs | **156,000 a year** (about 13,000 a month; USD 1,200) | As above, plus multi-user roles, AI and automated-decision register (reg 60), returns log, board-reporting pack |
| **Adviser** | Law firm, consultant or accountant | **540,000 a year** (45,000 a month; USD 4,150) for up to 15 lender workspaces; 30,000 a year per extra workspace | Multi-client dashboard, white-label documents, kits at no extra licence fee for its own clients |
| Monthly billing | Any Comply plan | +20% (7,800 or 15,600 a month) | Card, or M-Pesa once the Kenyan company exists |

Add-ons (year 2):
- A staff conduct-training module at KES 1,500 per person a year.
- A BSA-return pre-check once the return formats are confirmed (unverified formats; see 01).

Packaging rules:
- **Yearly prepaid is the default.** Kits are paid upfront. Prepayment funds the business (see the financial model).
- **The kit leads into Comply.** The three included months end around the time CBK starts processing applications. The registers and the 31 Dec calendar are what keep customers.
- **Discounts:**
  - **Pilots:** a kit at KES 40,000 for the first 5-8 concierge pilots in November 2026, in return for feedback and a testimonial.
  - **Founding customers:** 25% off the first year of Comply for the first 50 subscribers who sign by 31 Jan 2027.
  - **Association members** (DFSAK, AMFI-K, Fintech Alliance members): 10% off.
- **Price rise:** about 5-7% in year 3, timed with the first full rule review.
- **Do not price per loan or per borrower.** Lenders' books vary a lot, and a flat tier price is easier to sell.

### VAT and other tax points for pricing

- **Kenyan VAT is 16%** ([PwC](https://taxsummaries.pwc.com/kenya/corporate/other-taxes)).
- **For most buyers, VAT is a real cost.**
  - Granting credit is a VAT-exempt supply (First Schedule, Part II, para 1(h), as cited by the Tax Appeals Tribunal in [Musoni](https://new.kenyalaw.org/akn/ke/judgment/ketat/2024/1250/eng@2024-08-09)).
  - The Finance Act 2026 brought payment-processing fees charged by payment service providers into VAT, but did not touch the credit exemption ([Grant Thornton](https://www.grantthornton.co.ke/globalassets/1.-member-firms/kenya/insights/pdf/grant-thornton-kenyas-analysis-of-the-finance-act-2026.pdf)).
  - Exempt suppliers "may face restrictions on recovering related input VAT" (same source). A lender that only lends is unlikely to recover VAT on our fee.
  - So a lender pays KES 78,000 + 16% = KES 90,480 for Comply registered.
  - Our own payment fees (M-Pesa, Paystack) now carry VAT too. That adds about 0.25 points to a 1.5% fee.
- **Paddle phase.** Paddle adds 16% Kenyan VAT to B2B and B2C sales ([Paddle](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)). Show prices "excl. VAT" in KES on the site, and let Paddle add the VAT at checkout.
- **Kenyan company phase.** VAT registration is required at KES 5m of turnover a year ([PwC](https://taxsummaries.pwc.com/kenya/corporate/other-taxes)). The base case passes that in year 1, because of the kit rush. In July 2026 KRA proposed scrapping the KES 5m threshold ([The Kenya Times](https://thekenyatimes.com/business/inside-kra-proposal-to-scrap-ksh5-million-vat-threshold-what-it-means-to-businesses/)); this is a proposal, not law. So do not plan on a VAT-free price edge. Quote "excl. VAT" from day one.
- **Withholding by Kenyan buyers.** Once the seller is Kenyan, a buyer may withhold the resident rate on "royalties": 5% ([PwC](https://taxsummaries.pwc.com/kenya/corporate/withholding-taxes)). Software now falls under that definition (Finance Act 2026). This is credited against the company's income tax, so it is a cash-flow drag, not a cost. The invoice and the terms must say how withholding is handled.

## Go-to-market

### Timing: deadlines that drive buying

| Date | What happens | What we sell | Source |
|---|---|---|---|
| Oct-Nov 2026 | LN 191 published about 29 Sep 2026; law firms and the press explain it | Pre-sales, concierge pilots, partner deals | [TechTrendsKE](https://techtrendske.co.ke/2026/10/05/cbk-non-deposit-taking-credit-providers-regulations/) |
| **31 Dec 2026** | First annual fee at the new rates (KES 500k / 250k), and the annual compliance return | "31 December pack" for the 281 licensed lenders: certification workpaper and calendar | [01 file, duties 10-11](01-law-and-requirements.md) |
| about 20 Dec-5 Jan | Festive slowdown in Kenya (my estimate) | Do not push sales | - |
| 31 Jan 2027 | FRC annual AML compliance report (deadline per one compliance firm) | AML report helper inside Comply | [FNJ](https://fnjassociates.co.ke/?p=2097) (unverified) |
| **~29 Mar 2027** | Deadline for lenders already operating to apply | Application Kit rush: Jan-Mar 2027 | [01 file](01-law-and-requirements.md); [Bowmans](https://bowmanslaw.com/insights/kenya-non-deposit-taking-credit-provider-regulations-are-here-what-lenders-need-to-know/) |
| by 31 Mar each year | CBK publishes its list of licensed and registered NDTCPs (draft rule) | A fresh target list for Comply | [CBK draft, Part VII](https://www.centralbank.go.ke/wp-content/uploads/2025/08/Draft-Central-Bank-of-Kenya-Non-Deposit-Taking-Credit-Providers-Regulations-2025.pdf) |
| Apr-Jun 2027 | Fintech events: AfricArena Nairobi (April), Africa Fintech Live (May), Africa Fintech Forum (June) | Comply, Adviser plan | [02 file](02-market-and-competition.md) |
| each CBK licensing batch (about 3-4 a year) | Press lists new names | Comply offer to new licensees | [TechTrendsKE](https://techtrendske.co.ke/2026/09/30/cbk-licenses-29-more-digital-lenders/) |
| about 31 Oct each year | Agent approval renewal | Agent register | [01 file](01-law-and-requirements.md) |
| Oct-Dec each year | Year-end fee and return | Renewals and new Comply sales | - |

What this means:
- **The kit has a short window: about December to March.** The product must be sellable by about 1 December 2026. If CBK extends the deadline, which Kenyan regulators sometimes do (unverified for this rule), the rush spreads out. That helps a late entrant.
- **Comply sells all year, with peaks in October-December** (year-end fee and return) **and after each licensing batch**.

### Channels (priority order)

| # | Channel | What we do | Deal | Share of year-1 customers (my estimate) | CAC (my estimate) |
|---|---|---|---|---|---|
| 1 | **Small Nairobi law and consulting firms** that already publish DCP licensing guides (Mwirigi, Afrilink, WeComply Labs, Kazi Legal, Masibo, Githaiga, OCL, Bizbrokers; [02 file](02-market-and-competition.md)) | Offer the Adviser plan, so they produce kits faster at a fixed cost. Recruit 1-2 as the "partner advocate" for template sign-off and the review add-on | They pay us for software (no fee-sharing problem). For referrals from non-advocate consultants: 20% of first-year revenue | 35% | KES 15,000-30,000 |
| 2 | **Direct outreach to the CBK directory**: 281 licensed lenders with email, phone and address ([CBK directory](https://www.centralbank.go.ke/wp-content/uploads/2026/09/Directory-of-Digital-Credit-Providers-September-2026.pdf)) | Email to company addresses, then a call from the Nairobi person. Offer: "31 December pack" and a free 30-minute gap review | Staff time | 25% | KES 30,000-50,000 |
| 3 | **Search and content for unlicensed offline lenders** (logbook, asset finance, credit-only lenders) | Free scope checker, "29 March 2027 checklist" in English and Swahili, Google Ads on "CBK licence money lending", "DCP licence Kenya" | Media spend | 15% | KES 40,000-70,000 |
| 4 | **Associations**: DFSAK, the Fintech Alliance (AFIK, FINTAK, DFSAK, DCPAK), AMFI-K ([Capital FM](https://capitalfm.africa/kenyas-fintech-industry-gets-boost-with-new-alliance-formation/)) | Member webinar with the partner advocate; member discount. Sumsub's partnership with a Kenyan fintech association is a precedent ([Sumsub](https://sumsub.com/newsroom/sumsub-joins-forces-with-kenyas-premier-fintech-association-to-drive-digital-innovation/)) | 10% member discount; optional sponsorship | 10% | KES 30,000-60,000 |
| 5 | **Press and LinkedIn** | Founder posts on each CBK batch and rule change. Pitch data stories to TechTrendsKE, Tech-ish, Business Daily and Kenyan Wall Street, for example "how many applicants are still pending" | Time | 5% | low |
| 6 | **Loan-software vendors**: Tunza, SuperLMS, Loandisk resellers ([02 file](02-market-and-competition.md)) | Referral and a CSV import from their systems into our registers | 15-20% of first-year revenue | 5% | KES 20,000-40,000 |
| 7 | **Accountants and data-protection consultants** (ICPAK network; ODPC consultants) | CPD-style webinar; referral code | 20% of first-year revenue | 5% | KES 20,000-40,000 |

Notes:
- **Cold email rules.** Kenya's Data Protection Act limits using personal data for commercial marketing (s.37, not read; unverified). 111 of the 281 directory entries are webmail addresses, which point to individuals ([02 file](02-market-and-competition.md)). Use phone, LinkedIn and one-to-one emails to company addresses. Build mailing lists only from opt-ins.
- **Advocates cannot tout.** Kenyan advocates are barred from touting and from splitting profit costs with non-advocates (Advocates (Practice) Rules 1966, as shown on [Judy Legal](https://lite.judy.legal/amp/legislation/akn/ke/act/ln/1967/19/); current wording unverified). Co-marketing with a law firm must be educational (webinars, alerts), and money must flow as software fees, not shared legal fees.
- **Sales cycles.** A vendor claims regtech sales cycles of 90-270 days in Nairobi ([devcommx](https://www.devcommx.com/demand-generation/nairobi/regtech), vendor claim, unverified). The kit's deadline shortens that. Comply for licensed lenders will be slower; plan 30-90 days (my estimate).

### Sales motion

- **Self-serve for the kit.** The free scope check leads to the kit checkout (card through Paddle). There is a "Talk to us on WhatsApp" button on every page; WhatsApp is how Kenyan SMEs do business (my estimate).
- **Assisted for Comply.**
  - A 30-minute demo and gap review, by video call or in person in Nairobi.
  - A 14-day trial with the lender's own calendar and registers set up.
  - A pro-forma invoice for bank transfer once the Kenyan company exists.
- **Concierge for pilots.** The founder and the partner advocate build the first 5-8 kits by hand with the software. This tests the templates before the rush.
- **Onboarding.** One call imports agents, products and open complaints from Excel. The 31 Dec items are pre-loaded.
- **Renewal drivers:**
  - the 31 Dec fee and return every year;
  - registers that must be kept and shown to CBK;
  - rule changes, since CBK can specify returns "as the Bank may specify";
  - the KES 20m conversion alert for registered lenders.
  - Send renewal invoices 45 days ahead, with a "your year in compliance" summary.

## 90-day launch plan

Start Monday 12 October 2026. Day 90 is Saturday 9 January 2027.

**Days 1-7 (12-18 Oct): set up and verify.**
- Get the gazetted LN 191 text. Diff it against the 2025 draft, and switch every draft-based rule in the requirement library ([01 file](01-law-and-requirements.md)).
- Shortlist 3 small Nairobi firms from the DCP-guide list. Ask for a fixed fee to draft and review the policy templates (budget KES 500,000; see the model).
- Open a Paddle account (seller verification takes days; unverified). Ask Paddle in writing which entity invoices Kenyan buyers and whether it supports invoices paid by bank transfer.
- Publish a landing page: the scope and deadline checker, a waitlist and a "29 March 2027" countdown.
- Book 20 discovery calls from the CBK directory and LinkedIn.

**Days 8-21 (19 Oct-1 Nov): build the MVP and validate.**
- Build the MVP with Claude Code and parallel agents (see 03): scope checker, dossier tracker, policy generator, registers, calendar.
- Hold 20 discovery calls. Test the prices: KES 69,000 / 99,000 for the kit and KES 6,500 / 13,000 a month for Comply.
- Pre-sell 5-8 concierge pilots at KES 40,000.
- Start the Kenyan company registration through a corporate service firm (see Company setup).

**Days 22-49 (2-29 Nov): legal content, security and partners.**
- The partner advocate reviews the templates. Fix them.
- An external security test on staging (budget KES 390,000, about USD 3,000).
- Deliver the concierge pilots.
- Sign 2 partner firms on the Adviser plan, or as referrers.
- **Webinar 1 (mid-November)** with the partner advocate: "NDTCP regulations: what to file by 29 March 2027."
- Pitch DFSAK and the Fintech Alliance for a member webinar in January.
- Press pitch: "x of 900+ applicants still pending; what the new rules ask for."

**Days 50-63 (30 Nov-13 Dec): launch.**
- **Public launch about 1 December**: kit checkout through Paddle, and Comply trials.
- "31 December" campaign to the 281 licensed lenders: the KES 500,000 fee and annual return checklist, and the KES 1m late penalty.
- **Webinar 2:** "Your 31 December annual return and fee."
- Target: 10 paid kits and 5 Comply subscribers by 13 Dec.

**Days 64-80 (14-30 Dec): support year-end, quiet build.**
- Help licensed customers finish their annual return.
- Ship fixes from pilot feedback.
- Expect a slowdown from about 20 December.

**Days 81-90 (31 Dec-9 Jan): prepare the rush.**
- Plan January-March: weekly webinars, Google Ads, a partner push and an association webinar.
- Finish the Kenyan company's KRA PIN, eTIMS and bank account; open an M-Pesa Paybill.
- **Day-90 review against the milestones below.**

## 12-month marketing plan and budget

Period: November 2026 to October 2027. KES, net. Staff, travel and partner commissions are separate lines in the model.

| Quarter | Focus | Main activities | Budget (KES) |
|---|---|---|---|
| Q1 Nov 2026-Jan 2027 | Launch; 31 Dec; start of the rush | Landing page and scope checker; webinars 1-2; LinkedIn ads to "compliance", "CEO" and "credit" titles at Kenyan lenders; Google Ads; PR pitches; checklist PDFs in English and Swahili | 400,000 |
| Q2 Feb-Apr 2027 | Deadline rush, then the switch to Comply | Weekly "file by 29 March" webinars; association webinar; retargeting; "you applied, now what?" series for kit buyers | 380,000 |
| Q3 May-Jul 2027 | Comply for licensed lenders; events | Booth or speaking slot at Africa Fintech Live (May) or the Africa Fintech Forum (June) (costs unverified); case studies; adviser recruitment | 330,000 |
| Q4 Aug-Oct 2027 | Year-end and renewals | "31 December 2027" campaign; agent-renewal reminder (31 Oct); renewal offers; new-batch outreach | 290,000 |
| **Total** | | | **1,400,000 (USD 10,800)** |

By line item (year 1, KES):

| Item | Budget | Note |
|---|---|---|
| LinkedIn ads | 300,000 | Global B2B benchmarks put CPC at USD 5.50-12 ([Dupple](https://dupple.com/learn/linkedin-ads-b2b-cost-2026)). No Kenya figure was found. Run a small test first |
| Google Ads | 150,000 | Narrow keywords only (unverified CPCs) |
| Webinar and email tools, design | 100,000 | |
| Content: checklists, Swahili explainer, short videos | 120,000 | |
| PR and one sponsored article | 200,000 | Business Daily's advertorial rates are not published ([search](https://subger.com/en/service/business-daily-ke)); ask Nation Media |
| Events: 1-2 booths or sponsorships | 350,000 | Unverified prices |
| Association sponsorship or member offers | 120,000 | |
| Contingency | 160,000 | |

Years 2 and 3: KES 1.1m a year, shifting from search ads to events, case studies and partner co-marketing.

## Payments and tax friction

### Do Kenyan cards work for cross-border online payments?

- **Generally yes, for Visa and Mastercard.** Whether a business debit or credit card is open for foreign online merchants depends on the issuing bank (unverified, bank by bank). Expect some declines. Tell buyers to enable "international online transactions" in their banking app.
- **M-Pesa users can pay foreign merchants with a virtual Visa card.** M-Pesa GlobalPay is a virtual Visa card linked to the M-Pesa wallet, for international online payments. It is opened in the M-Pesa app or with *334#. It was launched with a limit of KES 150,000 per transaction ([Khusoko, 2022](https://khusoko.com/2022/06/02/safaricoms-virtual-visa-allows-customers-to-pay-for-goods-using-m-pesa-globally/); current limits and fees unverified).
  - The licence-tier Comply plan with VAT is KES 180,960, which is above that limit. Offer half-yearly billing to M-Pesa payers.
  - GlobalPay is a personal wallet product, so a director pays and claims the money back. That is awkward for a regulated company.
- **Practical conclusion.** Cards work for the kit and for a first year paid by a director. Recurring company purchases want **M-Pesa Paybill or bank transfer to a Kenyan account**. That needs a Kenyan company.

### Stripe

- **A Kenyan company cannot open Stripe.** Stripe lists Kenya as "Extended network" and links it to Paystack ([Stripe global](https://stripe.com/global)).
- **A foreign company on Stripe can take Kenyan cards.** On a UK Stripe account, international cards cost 3.15% + 20p, plus 2% if currency conversion is needed. Stripe Billing costs 0.7% and Stripe Tax 0.5% ([Stripe UK pricing](https://stripe.com/gb/pricing)). On a KES 99,000 kit charged in USD or GBP, that is about 5-6% all-in, the same as Paddle.
- **But Stripe does not file Kenyan taxes.** With Stripe, the foreign company itself must:
  - register for Kenyan VAT under the simplified regime and file monthly by the 20th ([PwC](https://taxsummaries.pwc.com/kenya/corporate/other-taxes));
  - file SEP tax monthly at about 3% of gross ([PwC](https://taxsummaries.pwc.com/kenya/corporate/taxes-on-corporate-income); filing by the 20th per the draft regulations, [CDH](https://www.cliffedekkerhofmeyr.com/en/news/publications/2025/Practice/Tax-Exchange-Control/tax-and-exchange-control-alert-03-october-Kenya-issues-draft-Income-Tax-Significant-Economic-Presence-Tax-Regulations-2025)).
  - **Do not use Stripe for Kenya** unless the volume justifies a Kenyan tax agent.

### Merchant of record

| Option | Kenya support | Fees | Verdict |
|---|---|---|---|
| **Paddle** | Charges Kenyan VAT at 16% on **B2B and B2C** ("Standard Digital Goods"). Buyers reclaim VAT on their own returns where they can ([Paddle tax list](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)) | 5% + USD 0.50 per transaction, with no monthly fee ([Paddle pricing](https://www.paddle.com/pricing)). KES is not a checkout currency, so price in USD ([Paddle currencies](https://developer.paddle.com/concepts/sell/supported-currencies)) | **Use for launch.** Paddle, not the founder's company, is the seller of record for the VAT and SEP tax (my reading of the MoR model; confirm with Paddle) |
| Lemon Squeezy | Kenya is **not** on its list of unsupported buyer countries. The page does not say whether it collects Kenyan VAT ([Lemon Squeezy docs](https://docs.lemonsqueezy.com/help/getting-started/supported-countries)) | about 5% + USD 0.50 (third-party reviews, e.g. [Dodo](https://dodopayments.com/blogs/lemonsqueezy-review)) | Second choice. Ask support whether it remits Kenyan VAT on B2B sales |
| Paystack (for a Kenyan company; whether a foreign company can sign up is unverified) | Local cards, M-Pesa, international cards; settles in KES or USD, T+2 | Local cards 2.9%; international cards 3.8%; M-Pesa 1.5%; bank payouts KES 80-350 ([Paystack Kenya pricing](https://paystack.com/ke/pricing)) | **Use once the Kenyan company exists** |

### Bank transfer norms

- Kenyan firms pay suppliers by local EFT, RTGS or PesaLink, or by M-Pesa Paybill (general practice; unverified as a share of payments).
- **A transfer abroad is costly and slow for a small buyer.** Each bank in a SWIFT chain can deduct a fee. A 2026 Kenyan guide says poor routing can cost 5-12% in layered fees ([paybillke](https://paybillke.com/guides/freelancer-usd-payout-guide-kenya-2026)). Bank tariffs for outgoing SWIFT were not found (unverified).
- **Do not ask a small lender to wire USD 600 abroad.** Before the Kenyan company exists, take cards through Paddle. Afterwards, invoice in KES and collect into a Kenyan bank account and M-Pesa Paybill.

### Buyer-side tax friction when selling from abroad

| Issue | Rule | Effect on a sale from abroad | Source |
|---|---|---|---|
| **VAT** | Non-residents supplying electronic services to Kenyan businesses must register and charge 16%. This has applied to B2B since 1 July 2022, with no threshold, monthly returns and payment by the 20th | Without a merchant of record, the foreign company must register with KRA. With Paddle, Paddle handles it | [PwC](https://taxsummaries.pwc.com/kenya/corporate/other-taxes) |
| **Withholding tax** | From 1 July 2026 "royalty" includes payments for software, "including licence, development, training, maintenance and support fees", and for digital platforms. Non-resident royalty WHT is 20% | A Kenyan buyer paying a foreign seller may have to withhold 20% and remit it to KRA. Whether SaaS access is caught is not tested in court, but KPMG reads it as covering software and digital platforms | [Grant Thornton](https://www.grantthornton.co.ke/globalassets/1.-member-firms/kenya/insights/pdf/grant-thornton-kenyas-analysis-of-the-finance-act-2026.pdf); [KPMG](https://kpmg.com/us/en/taxnewsflash/news/2026/07/kenya-tax-measures-finance-act-2026-cbc-reporting.html); [PwC WHT](https://taxsummaries.pwc.com/kenya/corporate/withholding-taxes) |
| **Treaty relief** | Royalty caps: UK 15%; Germany 15%; Canada 15%; France 10%; South Africa 10%; UAE 10%; India 10%; Zambia 0%. Ireland, the Netherlands, Estonia and the US are not on the treaty list, so they get 20% | An EU seller outside France or Germany faces the full 20%. A UK seller faces 15% | [PwC WHT](https://taxsummaries.pwc.com/kenya/corporate/withholding-taxes) |
| **SEP tax** | Non-residents earning from services over the internet to customers in Kenya pay about 3% of gross. There has been no threshold since the Finance Act 2025. The draft regulations exempt income already charged under s.10 (the withholding section) | Either the buyer withholds, or the seller pays about 3%. Not both, if the draft holds | [PwC](https://taxsummaries.pwc.com/kenya/corporate/taxes-on-corporate-income); [CDH](https://www.cliffedekkerhofmeyr.com/en/news/publications/2025/Practice/Tax-Exchange-Control/tax-and-exchange-control-alert-03-october-Kenya-issues-draft-Income-Tax-Significant-Economic-Presence-Tax-Regulations-2025) |
| **eTIMS invoices** | Since 1 Jan 2026 KRA checks claimed expenses against eTIMS invoices. Services from a non-resident without a permanent establishment are excluded | A foreign invoice does not cost the buyer its tax deduction. A Kenyan company, however, must issue eTIMS invoices: "all persons engaged in business are required to on-board eTIMS" | [KRA eTIMS](https://www.kra.go.ke/business/etims-electronic-tax-invoice-management-system/learn-about-etims/what-is-etims); [BDO](https://www.bdo-ea.com/en-gb/insights/kra-to-validate-income-and-expenses-declared-in-tax-returns-effective-1-january-2026) |

What this means in practice:
- **A small lender paying by card will usually not withhold** (my estimate). The legal risk stays with the buyer, who is liable for tax it should have withheld (general rule; unverified detail).
- **Licensed lenders have finance teams and auditors.** Some will insist on withholding 20%, or on a Kenyan invoice. If they withhold, the seller receives 80% and must claim treaty relief or a credit at home.
- **A Kenyan company removes the problem.** Resident royalty WHT is 5% and is credited against the company's tax.

### Recommendation and setup checklist

1. **Now to about March 2027:** sell kits and first-year Comply through **Paddle**, priced in **USD**, with KES equivalents shown on the site.
   - KES is not one of Paddle's checkout currencies. The alphabetical list goes from JPY straight to KRW ([Paddle currencies](https://developer.paddle.com/concepts/sell/supported-currencies); 25 of 33 rows visible).
   - USD list prices: kit USD 529 / 759, Comply USD 600 / 1,200 a year, before VAT.
   - Terms say: "Prices exclude VAT; Paddle is the merchant of record."
2. **Month 1-3:** register the Kenyan company. Get its KRA PIN, register on eTIMS, open a KES bank account and an M-Pesa Paybill, and apply for Paystack.
3. **From about April 2027:** new Kenyan customers contract with the Kenyan company. Invoices go out in KES with eTIMS. Payment is by bank transfer, PesaLink, M-Pesa Paybill or Paystack cards. Paddle stays for buyers outside Kenya.
4. **Intercompany.** The Kenyan company pays the foreign company for the software. That payment is itself a royalty, with 20% WHT or the treaty rate, and transfer-pricing rules apply. Keep it simple at first: the Kenyan company keeps its margin and pays 30% corporate tax. Get a Kenyan tax adviser's view before the first intercompany invoice.

## Company setup (needed or not, costs)

### Is a Kenyan company needed?

- **Not legally needed to sell software.** The product is a tool for lenders. It does not lend, so it needs no CBK licence. A foreign company may sell to Kenyan businesses.
- **But it is needed in practice within about 6 months.** The reasons:
  - **Tax friction.** A seller abroad either uses a merchant of record or registers for Kenyan VAT and SEP tax itself. Buyers may withhold 20% (see above).
  - **How buyers pay.** Recurring company payments in Kenya go by bank transfer and M-Pesa Paybill, which need a Kenyan account. Paystack serves Kenyan-registered businesses ([Stripe global](https://stripe.com/global) points Kenya to Paystack).
  - **Trust.** Regulated lenders keep files for CBK. A KES invoice with a KRA PIN and eTIMS is normal; a USD receipt from abroad is not.
  - **Hiring.** The Nairobi sales and support person is easier to contract locally.
- **Timing:** register in month 1-3; move billing over by about April 2027, before the first renewals.

### Costs and steps

| Item | Official fee | With a lawyer or corporate service firm (remote) | Source |
|---|---|---|---|
| Name search | KES 650 | included | [BRS fee schedule](https://brs.go.ke/fee-schedule-companies-registry/) |
| Private company registration | **KES 10,650**. One guide reports KES 10,200-10,750 depending on the schedule and share capital, so check at checkout | included | [BRS fee schedule](https://brs.go.ke/fee-schedule-companies-registry/); [Kolonell](https://kolonell.com/en/blog/cost-of-registering-business-kenya-2026) |
| Professional fees: incorporation, KRA PIN for the company and directors, beneficial-ownership filing, first-year registered office | - | Agent fees for the incorporation alone are put at **KES 15,000-60,000** in consultancy guides ([vjmglobal](https://www.vjmglobal.com/feeds/blog/private-limited-company-kenya-usa); [Kolonell](https://kolonell.com/en/blog/cost-of-registering-business-kenya-2026); secondary). With KRA PINs, a registered office for year 1 and a bank introduction, budget about **KES 60,000-120,000** (my estimate). Deel puts total setup at KES 30,000-100,000 excluding professional fees ([Deel](https://www.deel.com/blog/entity-setup-kenya/)). No lawyer's written quote was found | secondary sources; my estimate |
| Minimum share capital | **none**; nominal capital is set by the founders | - | [Kolonell](https://kolonell.com/en/blog/cost-of-registering-business-kenya-2026) (secondary) |
| Company secretary | Not mandatory below KES 5m paid-up capital. A company without a secretary or resident director must name a resident contact person | KES 5,000-10,000 a month for a secretarial firm (my estimate) | [BRS-hosted risk assessment](https://brs.go.ke/wp-content/uploads/2024/01/PUBLIC-VERSION-MONEY-LAUNDERING-AND-TERRORIST-FINANCING-RISK-ASSESSMENT-REPORT.pdf); [EY, 2023](https://taxnews.ey.com/news/2023-1625) |
| Time | 1-7 working days at BRS once the documents are ready | add 2-6 weeks for the bank account with a foreign director (my estimate) | [Kolonell](https://kolonell.com/en/blog/register-company-kenya-ecitizen-brs-steps-2026) (secondary) |

Doing it yourself versus through a firm:
- **In person.** A founder in Nairobi can self-file on eCitizen for about KES 11,300 in official fees, plus travel.
- **Remotely.** It is better done through a firm. A guide for foreign founders says directors without a Kenyan alien card usually cannot use the BRS portal alone, although local help is not a legal requirement ([vjmglobal](https://www.vjmglobal.com/feeds/blog/private-limited-company-kenya-usa), secondary). Bowmans notes that filings by foreign-resident directors sometimes cannot proceed with non-Kenyan phone numbers for the one-time-password step ([Bowmans](https://bowmanslaw.com/insights/kenya-companies-registry-a-reform-agenda-for-ease-of-doing-business/)).
- Each foreign director needs a KRA PIN to be a bank signatory ([Healy Consultants](https://www.healyconsultants.com/kenya-company-registration/post-incorporation-considerations), secondary).
- **No resident director is legally required.** Banks move faster with a local signatory ([Bowmans](https://bowmanslaw.com/insights/kenya-companies-registry-a-reform-agenda-for-ease-of-doing-business/)).
- **Work permit.** A director who lives abroad and does not work in Kenya should not need one (unverified). Ask the lawyer before any long working stay.

### Running costs (my estimates unless sourced)

| Item | Cost | Note |
|---|---|---|
| Bookkeeping | KES 5,000-10,000 a month basic; KES 15,000-30,000 with payroll | One Nairobi CPA listing ([Jiji](https://jiji.co.ke/nairobi-central/tax-and-financial-services/professional-bookkeeping-accounting-services-quickbooks-xero-setup-zFH7Eze5tML7AaA6oesSGkFf.html)) |
| Company secretary or registered office | KES 5,000-10,000 a month | my estimate |
| Annual audit and tax return | KES 80,000-150,000 a year | Whether a small-company audit exemption applies is unverified |
| Annual return to BRS | KES 650 | [BRS FAQ](https://brs.go.ke/wp-content/uploads/2024/05/FAQs.pdf) (search summary; unverified) |
| Nairobi Unified Business Permit | about KES 10,000-30,000 a year | Sources conflict ([Capital FM](https://capitalfm.africa/all-you-need-to-know-about-the-unified-business-permit-costs-requirements-and-how-to-apply/)) |
| ODPC registration as a data processor | about KES 4,000 for a small firm, every 24 months | [ODPC regulations](https://www.odpc.go.ke/wp-content/uploads/2024/03/THE-DATA-PROTECTION-REGISTRATION-OF-DATA-CONTROLLERS-AND-DATA-PROCESSORS-REGULATIONS-2021.pdf) via [01 file](01-law-and-requirements.md); processor duty to register unverified |
| Professional indemnity and cyber insurance | about KES 150,000-300,000 a year | unverified; no quote found |
| **Total** | **about KES 35,000-45,000 a month**, plus audit and insurance | |

Taxes on the Kenyan company:
- **Corporate income tax:** 30% ([PwC](https://taxsummaries.pwc.com/kenya/corporate/taxes-on-corporate-income)).
- **Turnover tax:** applies to residents with turnover of KES 1m-25m. Sources give the rate as 1.5% or 3% ([The Star](https://www.the-star.co.ke/news/2025-06-07-explainer-queries-on-finance-bill-2025-answered); [PwC](https://taxsummaries.pwc.com/kenya/corporate)). Ask the accountant whether it applies and which is cheaper.
- **VAT:** register at KES 5m of turnover ([PwC](https://taxsummaries.pwc.com/kenya/corporate/other-taxes)).
- **Employer registrations** (PAYE and statutory levies) only if staff are employed rather than contracted (unverified details).

## Contracts and liability

**Documents needed before the first paid customer:**
1. **Terms of service (B2B).**
   - In the Paddle phase they sit under Paddle's buyer terms. Later they are with the Kenyan company.
   - Kenyan law, with Nairobi courts or Nairobi Centre for International Arbitration (NCIA) arbitration for the Kenyan company (my suggestion).
2. **Data processing agreement.**
   - The lender is the controller; we are the processor. The complaints register holds borrower names, phone numbers and complaint details.
   - Kenya's Data Protection Act applies. Cross-border transfer safeguards are unverified ([01 file, open question 7](01-law-and-requirements.md)).
   - Host in a region with a written transfer basis (EU or South Africa), and state it in the DPA.
3. **Privacy policy and a list of sub-processors.**
4. **Partner agreements.**
   - **Adviser plan licence for law firms.** They pay for software, so no fee-sharing.
   - **Referral agreement for non-advocate consultants**, at 20% of first-year revenue.
   - **Engagement letter with the partner advocate** for template drafting, yearly review and the review add-on.

**Key clauses:**
- **"A tool, not legal advice."** The lender stays responsible for its application and its compliance. Generated documents carry a "basis: draft / final LN 191" flag and an advocate-review status ([01 file, requirement 31](01-law-and-requirements.md)).
- **Advocates Act s.34.** Unqualified persons may not prepare certain legal instruments ([Sheriaplex](https://www.sheriaplex.com/kenya-acts/5674-unqualified-person-not-to-prepare-certain-documents-or-instruments)). Whether company policies are "instruments" is unverified.
  - Mitigation: a partner advocate drafts and signs off the master templates.
  - The review add-on is performed and billed by the advocate.
  - Our software assembles documents from advocate-approved clauses.
  - Get a written opinion in week 1.
- **Fee-sharing.** Advocates may not split profit costs with non-advocates ([Advocates (Practice) Rules, Judy Legal](https://lite.judy.legal/amp/legislation/akn/ke/act/ln/1967/19/); current text unverified). So we do not take a cut of the advocate's fee, and the advocate does not take a cut of ours. Each bills its own part.
- **Liability cap.** Capped at the fees paid in the last 12 months. CBK, ODPC and CAK fines and penalties are excluded, as is loss of a licence.
- **Kit promise (marketing, capped).**
  - If CBK raises a documentation query on an item the kit covers, we fix the document within 5 working days at no charge.
  - If CBK refuses an application for a missing item the kit should have produced, we refund the kit fee.
  - This copies the money-back idea in the B4 report and answers CBK's "awaiting documentation" backlog ([CBK, Jul 2026](https://www.centralbank.go.ke/uploads/press_releases/1035898107_Press%20Release%20-%20Licensing%20of%20Digital%20Credit%20Providers%20-%20July%202026.pdf)).
- **Rule-change service level.** Template and calendar updates within 30 days of a gazetted change, or of CBK guidance.
- **Data.** Records are kept for the life of the subscription plus the lender's retention period, with a full export on exit. AML records are kept 7 years under POCAMLA ([01 file](01-law-and-requirements.md)).
- **Tax clause.** "Fees are exclusive of VAT and of any withholding tax. If the law requires the customer to withhold, the customer gives us the KRA withholding certificate."

**Insurance.** Buy professional indemnity and cyber cover once the Kenyan company exists. Budget KES 150,000-300,000 a year (unverified; no Kenyan quote found).

**Trademark.** File the brand with KIPI. The fee was not checked (unverified).

## Financial model

### Assumptions

The model runs by month. Month 1 is November 2026, which also absorbs October's set-up spend; month 36 is October 2029. "Cash in" counts prepaid kits and yearly subscriptions when they are paid. All figures are KES, net of VAT and before corporate tax. The script is in the session scratchpad, not in the repo.

| Assumption | Low | Base | High | Basis |
|---|---|---|---|---|
| Kits sold in the rush (Nov 2026-Mar 2027) | 15 | 40 | 80 | About 2% / 6% / 11% of the 450-950 likely applicants ([02 file](02-market-and-competition.md)) |
| Kits per year after the rush (new entrants, conversions to licence) | 6 | 12 | 20 | CBK licenses about 110 a year ([02 file](02-market-and-competition.md)); my estimate |
| Average kit price after the mix and discounts | KES 75,000 | 85,000 | 95,000 | List 69,000 / 99,000, plus the review add-on, minus pilot prices; pilots at 40,000 in Nov 2026 |
| Kit buyers who convert to Comply after the 3 free months | 35% | 50% | 60% | my estimate |
| New direct Comply subscribers a month (years 1 / 2 / 3, seasonal) | about 2 / 2 / 1.8 | about 3 / 3.2 / 2.8 | about 4.5 / 5 / 4.5 | Pool of 281 licensed lenders plus about 110 new a year; my estimate |
| Comply subscribers at month 36 as a share of the 550-950 serviceable base | about 7% | about 14% | about 27% | Output |
| Effective Comply price a year (years 1 / 2 / 3) | 85,000 / 95,000 / 100,000 | 95,000 / 108,000 / 115,000 | 105,000 / 118,000 / 125,000 | List 78,000 / 156,000 with a 55/45 mix gives about 113,000; founding discounts in year 1; a price rise in year 3 |
| First renewal / later renewals | 60% / 75% | 75% / 85% | 85% / 90% | Fee shock may push out small lenders ([02 file](02-market-and-competition.md)) |
| Adviser plans (new over 3 years) and price | 3 at KES 420,000 | 8 at KES 480,000 | 12 at KES 520,000 | List 540,000; renewals 75% / 85% / 90% |
| Build | Founder with Claude Code and agents: AI tools KES 52,000 a month (USD 400) in months 1-3, then KES 26,000 | same | same | No hired developers |
| Hosting and SaaS tools | KES 25,000 / 35,000 / 45,000 a month in years 1 / 2 / 3 | same | same | my estimate |
| Legal content | KES 500,000 in months 1-2 (template drafting and review), then a KES 60,000 monthly retainer | same | same | Boutique rates and SME retainers ([Global Law Experts](https://globallawexperts.com/commercial-lawyer-fees-kenya/)) |
| Security test | KES 390,000 in month 2; KES 260,000 retests in months 14 and 26 | same | same | my estimate (USD 3,000 / 2,000) |
| Kenyan company | KES 150,000 setup in month 4; KES 37,000 a month from month 5 (secretary, bookkeeping, audit accrual, permit) | same | same | Company setup section |
| Insurance | KES 21,000 a month from month 3 | same | same | unverified |
| Nairobi sales and support person (monthly, years 1 / 2 / 3) | 60,000 / 100,000 / 160,000 | 90,000 / 160,000 / 280,000 (two people in year 3) | 120,000 / 250,000 / 400,000 | Sales representative KES 22,000-75,000 gross ([Paylab](https://kenya.paylab.com/salaryinfo/commerce/sales-representative)); compliance specialist KES 53,000-142,000 ([Paylab](https://www.paylab.com/ke/salaryinfo/banking/compliance-specialist?lang=en)) |
| Marketing (years 1 / 2 / 3) | 1.2m / 0.7m / 0.6m | 1.4m / 1.1m / 1.1m | 1.8m / 1.6m / 1.6m | Plan above |
| Founder trips to Nairobi | 7 trips at KES 260,000 (USD 2,000) each over 3 years | same | same | my estimate |
| Partner commissions | 7.5% of new bookings and 3% of renewals | same | same | About 35% of sales through partners |
| Advocate share of kit revenue (review add-on) | 15% | same | same | If resold by us |
| Payment fees | 5.1% in months 1-5 (Paddle); 1.5% blended after (M-Pesa 1.5%, bank transfer, some cards) | same | same | [Paddle](https://www.paddle.com/pricing); [Paystack](https://paystack.com/ke/pricing) |
| Founder pay | None in the main tables. A variant pays KES 400,000 a month (about USD 3,100) from month 13 | | | |

### Base case by quarter (KES thousands, no founder pay)

| Quarter | Kits sold | New subs | Churned | Active subs (end) | Adviser plans (end) | Cash in | ARR (end) | Costs | Net | Cumulative cash |
|---|---|---|---|---|---|---|---|---|---|---|
| Q1 Nov 26-Jan 27 | 16 | 4 | 0 | 4 | 0 | 1,698 | 428 | 2,513 | -816 | -816 |
| Q2 Feb-Apr 27 | 25 | 17 | 0 | 22 | 1 | 4,212 | 2,522 | 2,345 | 1,867 | 1,051 |
| Q3 May-Jul 27 | 3 | 21 | 0 | 43 | 2 | 2,764 | 5,040 | 1,603 | 1,161 | 2,213 |
| Q4 Aug-Oct 27 | 3 | 10 | 0 | 53 | 2 | 1,256 | 6,033 | 1,210 | 47 | 2,259 |
| Q5 Nov 27-Jan 28 | 3 | 11 | 1 | 63 | 3 | 2,304 | 7,654 | 2,133 | 171 | 2,430 |
| Q6 Feb-Apr 28 | 3 | 11 | 4 | 70 | 3 | 3,239 | 8,543 | 1,560 | 1,679 | 4,109 |
| Q7 May-Jul 28 | 3 | 11 | 5 | 76 | 4 | 4,036 | 9,815 | 1,541 | 2,496 | 6,605 |
| Q8 Aug-Oct 28 | 3 | 11 | 3 | 84 | 5 | 2,818 | 11,377 | 1,752 | 1,066 | 7,671 |
| Q9 Nov 28-Jan 29 | 3 | 10 | 3 | 91 | 5 | 3,099 | 12,172 | 2,534 | 565 | 8,235 |
| Q10 Feb-Apr 29 | 3 | 10 | 5 | 96 | 5 | 4,424 | 13,357 | 2,022 | 2,402 | 10,637 |
| Q11 May-Jul 29 | 3 | 10 | 5 | 101 | 6 | 5,090 | 14,411 | 1,975 | 3,114 | 13,752 |
| Q12 Aug-Oct 29 | 3 | 10 | 4 | 107 | 7 | 4,063 | 15,656 | 2,195 | 1,868 | 15,620 |

Base-case active Comply subscribers by month:
- Year 1: 0, 2, 4, 8, 14, 22, 30, 40, 43, 46, 50, 53.
- Year 2: 58, 60, 63, 67, 69, 70, 72, 73, 76, 78, 81, 84.
- Year 3: 87, 89, 91, 93, 95, 96, 98, 99, 101, 103, 105, 107.

### Low case by quarter (KES thousands, no founder pay)

| Quarter | Kits sold | Active subs (end) | Adviser plans (end) | Cash in | ARR (end) | Costs | Net | Cumulative cash |
|---|---|---|---|---|---|---|---|---|
| Q1 | 6 | 2 | 0 | 628 | 212 | 2,123 | -1,496 | -1,496 |
| Q2 | 9 | 11 | 1 | 1,817 | 1,321 | 1,705 | 113 | -1,383 |
| Q3 | 1 | 20 | 1 | 900 | 2,112 | 1,284 | -384 | -1,768 |
| Q4 | 2 | 26 | 1 | 669 | 2,665 | 1,005 | -335 | -2,103 |
| Q5 | 2 | 32 | 1 | 877 | 3,217 | 1,680 | -803 | -2,906 |
| Q6 | 2 | 35 | 2 | 1,929 | 3,925 | 1,179 | 750 | -2,156 |
| Q7 | 1 | 38 | 2 | 1,240 | 4,265 | 1,081 | 159 | -1,997 |
| Q8 | 2 | 42 | 2 | 1,124 | 4,720 | 1,339 | -215 | -2,212 |
| Q9 | 2 | 45 | 2 | 1,212 | 5,055 | 1,870 | -658 | -2,870 |
| Q10 | 2 | 47 | 2 | 2,432 | 5,559 | 1,384 | 1,048 | -1,822 |
| Q11 | 1 | 49 | 2 | 1,482 | 5,800 | 1,281 | 201 | -1,621 |
| Q12 | 2 | 51 | 2 | 1,420 | 6,096 | 1,541 | -121 | -1,742 |

### High case by quarter (KES thousands, no founder pay)

| Quarter | Kits sold | Active subs (end) | Adviser plans (end) | Cash in | ARR (end) | Costs | Net | Cumulative cash |
|---|---|---|---|---|---|---|---|---|
| Q1 | 32 | 7 | 1 | 4,075 | 1,255 | 3,238 | 837 | 837 |
| Q2 | 50 | 41 | 2 | 8,764 | 5,314 | 3,472 | 5,292 | 6,129 |
| Q3 | 5 | 84 | 3 | 5,526 | 10,371 | 2,055 | 3,472 | 9,601 |
| Q4 | 5 | 100 | 4 | 2,749 | 12,619 | 1,549 | 1,199 | 10,800 |
| Q5 | 5 | 117 | 5 | 4,318 | 15,198 | 2,749 | 1,569 | 12,369 |
| Q6 | 5 | 130 | 6 | 6,984 | 17,638 | 2,242 | 4,742 | 17,111 |
| Q7 | 5 | 142 | 7 | 7,863 | 19,975 | 2,169 | 5,694 | 22,805 |
| Q8 | 5 | 158 | 8 | 5,317 | 22,544 | 2,325 | 2,992 | 25,797 |
| Q9 | 5 | 171 | 8 | 6,576 | 24,802 | 3,328 | 3,248 | 29,045 |
| Q10 | 5 | 182 | 9 | 9,105 | 26,923 | 2,814 | 6,291 | 35,335 |
| Q11 | 5 | 192 | 10 | 9,890 | 28,950 | 2,737 | 7,152 | 42,488 |
| Q12 | 5 | 204 | 11 | 7,558 | 31,191 | 2,903 | 4,655 | 47,143 |

### Scenario summary

| Measure | Low | Base | High |
|---|---|---|---|
| Kits sold, years 1 / 2 / 3 | 18 / 6 / 6 | 47 / 12 / 12 | 92 / 20 / 20 |
| Comply subscribers at month 6 / 12 / 36 | 11 / 26 / 51 | 22 / 53 / 107 | 41 / 100 / 204 |
| Adviser plans at month 36 | 2 | 7 | 11 |
| ARR at month 12 / 24 / 36 (KES) | 2.7m / 4.7m / 6.1m | 6.0m / 11.4m / 15.7m | 12.6m / 22.5m / 31.2m |
| ARR at month 36 (USD) | 47,000 | 120,000 | 240,000 |
| Cash in, years 1 / 2 / 3 (KES) | 4.0m / 5.2m / 6.5m | 9.9m / 12.4m / 16.7m | 21.1m / 24.5m / 33.1m |
| Costs, years 1 / 2 / 3 (KES) | 6.1m / 5.3m / 6.1m | 7.7m / 7.0m / 8.7m | 10.3m / 9.5m / 11.8m |
| Profit before founder pay and tax, year 3 (KES) | about 0.5m | 7.9m (USD 61,000) | 21.3m (USD 164,000) |
| Operating break-even (trailing 12 months) | month 27 (Jan 2029) | month 12 (Oct 2027) | month 12 |
| Cumulative cash positive for good | not within 36 months | month 5 (Mar 2027) | month 3 (Jan 2027) |
| Peak cash need, no founder pay | KES 2.9m (USD 22,000) | KES 1.1m (USD 8,500) | KES 0.7m |
| Peak cash need with founder pay of KES 400,000 a month from month 13 | KES 11.3m (USD 87,000) | KES 1.1m; cumulative cash is still KES 6.0m at month 36 | KES 0.7m |
| Blended CAC, year 1 (marketing, half of staff, commissions, trips) | about KES 68,000 | about KES 44,000 | about KES 35,000 |

Unit economics, base case (my estimate):
- **Payback is about 6-7 months.** CAC is about KES 44,000. A first-year Comply price of about KES 95,000 at an 85% gross margin returns about KES 6,700 a month.
- **LTV/CAC is about 6.**
  - Renewal is 75% at first, then 85%; cap the life at 4 years. That gives about 2.9 paid years per subscriber.
  - Gross margin is about 85% after hosting, the advocate retainer share and payment fees.
  - So a subscriber is worth about KES 270,000-300,000 at KES 110,000-120,000 a year.
- **The ceiling is the pool, not unit economics.** The base case needs about 14% of the serviceable base by 2029.

What the numbers mean:
- **The kit rush pays for the build.** In the base case, prepaid kits cover the legal, security and set-up costs by month 5. The main financial risk is not cash. It is spending the founder's time on a market that stays small.
- **Plan on KES 3m (USD 23,000) of cash.** That covers the low case without founder pay, with a buffer. If the founder needs pay from year 2 and sales track the low case, the need rises to about KES 11m. The kill criteria below stop that from happening.
- **Founder income in Kenya alone is modest.** The base case can pay the founder about KES 400,000 a month (USD 3,100) from year 2 and still end month 36 with KES 6m in cash. A real income needs a second country.
- **Corporate tax.** The tables are before tax. The Kenyan company pays 30% on its profit ([PwC](https://taxsummaries.pwc.com/kenya/corporate/taxes-on-corporate-income)), or turnover tax if eligible (rate unverified).

## Regional expansion

The order follows the counts in the 02 file.

| Country | Buyers | Rules | Payment and tax notes | Plan |
|---|---|---|---|---|
| **Uganda** | 1,302 licensed money lenders (UMRA, 2023) ([Eagle Online](https://eagle.co.ug/2024/10/03/money-lenders-association-pledge-to-clean-up-industry-after-musevenis-roar)) | Tier 4 Microfinance Institutions and Money Lenders Act 2016; UMRA runs compliance workshops ([02 file](02-market-and-competition.md)) | English. Paddle lists Uganda VAT (18%) for **B2C only** ([Paddle](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)), so B2B buyers self-account (unverified). Withholding rules not checked | **Second market.** Research from month 12; launch about month 18-24 with a Kampala advocate and the money lenders' association (AMLU) |
| **Tanzania** | 2,938 licensed Tier 2 lenders (Dec 2025) ([BoT BSAR 2025](https://www.bot.go.tz/Publications/Other/Banking%20Supervision%20Annual%20Reports/en/2026070216351588.pdf)) | Microfinance Act 2018. All Tier 2 lenders must join TAMFI or TAMIU ([BoT notice](https://bot.go.tz/Adverts/PressRelease/en/2025080713474874.pdf)) | Swahili needed. Paddle: VAT 18% B2C only. Ability to pay probably lower (unverified) | **Third market**, about month 24-30, through TAMFI or TAMIU |
| Rwanda | about 209-250 non-deposit lenders (unverified) | New BNR rules in July 2026; licensing paused ([New Times](https://www.newtimes.co.rw/article/38408/news/rwanda/bnr-suspends-licensing-of-new-non-deposit-taking-lenders)) | Small pool | Later |
| Nigeria | 521 registered digital lenders (FCCPC) ([Nairametrics](https://nairametrics.com/2026/01/07/loan-apps-521-companies-now-on-fccpcs-radar-as-january-deadline-lapses/)) | Rules restrained by a court in June 2026 ([02 file](02-market-and-competition.md)) | Paddle lists Nigeria VAT 7.5% B2B and B2C | Watch only |

What carries over:
- The engine carries over: registers, calendar, dossier tracker, policy generator, adviser dashboard.
- Each country needs a new legal layer and an advocate partner. Budget about KES 0.8-1.2m a country for content, a security retest and a launch trip (my estimate).
- If Uganda converts at the base-case share, it adds roughly 1.5x Kenya's subscriber count (my arithmetic: 1,302 versus about 750 serviceable in Kenya). Prices would be lower (unverified).

## Exit and partnerships

**Partnerships that also open an exit:**
- **Loan-software vendors** (SuperLMS, Kovara, Tunza, Craft Silicon, Loandisk resellers). Kovara already markets "CBK Ready" ([Kovara](https://kovara.io/kenya.html)). An embedded compliance module is the natural deal, then an acquisition.
- **GRC and KYC vendors.** Trigarc (FNJ & Associates) has the generic calendar engine and no NDTCP content ([FNJ](https://fnjassociates.co.ke/?p=2402)). YouVerify, Smile ID and Sumsub sell KYC to the same lenders ([02 file](02-market-and-competition.md)).
- **Credit bureaus** (Metropol, Creditinfo, TransUnion Kenya). They already serve every licensed lender through CRB data sharing ([01 file](01-law-and-requirements.md)) (fit unverified).
- **Law firms.** A larger firm (Bowmans, CDH, Oraro) might license the platform as a white-label service for clients.

**Value:**
- Small bootstrapped SaaS firms under USD 1m ARR sell for about **2.5-4x revenue**, or 4-6x seller's discretionary earnings ([beancount.io](https://beancount.io/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide)).
- Listings on one marketplace average about 2.6x revenue and 10.7x profit ([BigIdeasDB](https://bigideasdb.com/saas-valuation-multiples-2026)). These are asking prices, not closing prices.
- On the base case (ARR of USD 120,000 at month 36), that is **about USD 300,000-480,000**. A two-country business at about USD 250,000 ARR would be worth about USD 600,000-1m (my estimate).
- A single-country regtech that depends on one rule is worth less than these averages. Regional expansion and an LMS embed raise the price.

## Risks and mitigations

| Risk | Likelihood | Effect | Mitigation |
|---|---|---|---|
| **The kit misses the rush.** The product is not sellable until December, and the deadline is about 29 March 2027 | Medium | Year-1 kit revenue falls toward the low case | Concierge pilots in November; partner firms sell kits made with the tool; launch by 1 December. A deadline extension (unverified) would help |
| **LN 191 differs from the draft** (threshold, policy list, return frequencies) | Medium | Wrong templates; refunds | Read the gazetted text in week 1; flag every draft-based rule ([01 file](01-law-and-requirements.md)); advocate sign-off |
| **Advocates Act s.34 or fee-sharing rules** limit selling generated policies | Medium | Must restructure the offer | Advocate-approved master templates; advocate bills the review; written opinion in week 1 |
| **Withholding and SEP tax friction** in the Paddle phase | High for licensed lenders | Lost or delayed sales; 15-20% leakage if a buyer withholds | A Kenyan company from about month 4; a tax clause; Paddle for small card buyers only |
| **The small-lender pool shrinks** after the KES 250,000 fee | Medium | Fewer registered-tier subscribers | Low registered-tier price; target licensed lenders and advisers; Uganda as a second market |
| **CBK publishes model policies or a checklist** | Low-Medium | The kit loses value | The value moves to Comply registers and the calendar; offer to align templates with any CBK guidance |
| **LMS vendors or Trigarc add an NDTCP module** | Medium | Price pressure | Partner first (embed or referral); move fast on content; price below their core systems |
| **Liability for a refused application or a failed inspection** | Low-Medium | Refund and reputational harm | Liability cap; kit promise capped at the kit fee; advocate review tier; insurance |
| **Data breach** (borrower complaint data) | Low | ODPC fine; loss of trust | Security test before launch; encryption; minimal data; DPA; cyber insurance |
| **The founder is abroad** | High (certain) | Weaker trust and slower deals | Nairobi sales and support person from month 2; Kenyan company and phone number; quarterly trips; partners do face-to-face work |
| **FX risk** | Medium | KES prices lose value in EUR or USD | Prices in KES for Kenyan buyers; review yearly. The shilling was stable at about KES 129-130 in Sep-Oct 2026 ([CBK bulletin](https://www.centralbank.go.ke/uploads/weekly_bulletin/943916527_Weekly%20CBK%20Bulletin%2011%20September%202026.pdf)) |
| **Tax-law churn** (Finance Acts every July) | High | Pricing and invoicing changes | Check each Finance Act in June; keep "excl. VAT and WHT" terms |

## Milestones and kill criteria

| Date | Milestone (base case) | Kill or pivot trigger |
|---|---|---|
| 1 Nov 2026 (day 21) | 20 discovery calls; at least 5 lenders say they would pay KES 6,500-13,000 a month; 1 partner advocate signed | Fewer than 3 positive calls and no advocate: **stop**, or pivot to an advisers-only tool |
| 1 Dec 2026 | Sellable release: advocate-reviewed templates, security test passed, Paddle live | Release slips past 15 Dec: drop kit marketing and sell Comply only |
| 15 Dec 2026 | 5 paying pilots or kits; 2 partner firms | Fewer than 2 partners **and** fewer than 5 paying customers: **stop** |
| 31 Mar 2027 | 40 kits; 15 Comply subscribers; Kenyan company billing | Fewer than 15 kits: treat as the low case; cut paid ads; keep going only if there are 10 or more Comply subscribers |
| Oct 2027 (month 12) | 53 Comply subscribers; ARR KES 6m; 2 adviser plans | Fewer than 25 subscribers or ARR under KES 3m: stop new spend; run as a side business or sell to an LMS vendor |
| Jan-Mar 2028 | First renewals of 75% or more | Renewals below 60%: the product is not sticky; stop or sell |
| Oct 2028 (month 24) | 84 subscribers; ARR KES 11m; Uganda research done | ARR under KES 5m: no regional expansion |
| Oct 2029 (month 36) | 107 subscribers; ARR KES 15.7m; Uganda live | - |

## Open questions

1. **Paddle details:** Which Paddle entity invoices Kenyan buyers? This sets the treaty rate if a buyer withholds. Does Paddle file Kenyan SEP tax? Can it take invoices paid by bank transfer? (KES pricing is not available, as far as the currency list shows.)
2. **Withholding:** Does KRA treat a SaaS subscription as a "royalty" under the Finance Act 2026 wording? Get a Kenyan tax adviser's written view.
3. **SEP tax:** Are the regulations final, and do they still exempt income subject to withholding?
4. **Advocates Act s.34 and fee-sharing:** Get a written opinion on generated policies, and on how to pay a partner advocate.
5. **Turnover tax:** Is the rate 1.5% or 3%, and is it worth electing for a SaaS company with high margins?
6. **Audit:** Does a small Kenyan company need an audit?
7. **ODPC:** Must the Kenyan company (or the foreign one) register as a data processor? What transfer basis applies to EU or South African hosting?
8. **Card acceptance:** What share of Kenyan business cards decline foreign online payments? What are M-Pesa GlobalPay's current limits and fees?
9. **Deadline:** Will CBK extend the ~29 March 2027 deadline? An extension changes the kit curve.
10. **Event and advertorial prices** for 2027 Nairobi fintech events and Business Daily.
11. **Professional indemnity and cyber insurance** quotes from Kenyan insurers.

## Sources

Read in full, or the relevant part read:
- BRS, Companies Registry fee schedule: https://brs.go.ke/fee-schedule-companies-registry/
- PwC Tax Summaries Kenya, corporate income (SEP tax, CIT; reviewed 17 Jul 2026): https://taxsummaries.pwc.com/kenya/corporate/taxes-on-corporate-income
- PwC Tax Summaries Kenya, withholding taxes and treaty rates (reviewed 17 Jul 2026): https://taxsummaries.pwc.com/kenya/corporate/withholding-taxes
- PwC Tax Summaries Kenya, other taxes (VAT and digital services; reviewed 17 Jul 2026): https://taxsummaries.pwc.com/kenya/corporate/other-taxes
- Grant Thornton Kenya, analysis of the Finance Act 2026 (PDF, text extracted): https://www.grantthornton.co.ke/globalassets/1.-member-firms/kenya/insights/pdf/grant-thornton-kenyas-analysis-of-the-finance-act-2026.pdf
- EY, Kenya proposes Finance Bill 2026: https://globaltaxnews.ey.com/news/2026-1063-kenya-proposes-finance-bill-2026
- Paddle, tax by country: https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/
- Paddle, pricing: https://www.paddle.com/pricing
- Paddle, supported currencies (25 of 33 rows visible): https://developer.paddle.com/concepts/sell/supported-currencies
- KPMG, Kenya Finance Act 2026: https://kpmg.com/us/en/taxnewsflash/news/2026/07/kenya-tax-measures-finance-act-2026-cbc-reporting.html
- KRA, eTIMS (who must use it; non-resident services excluded): https://www.kra.go.ke/business/etims-electronic-tax-invoice-management-system/learn-about-etims/what-is-etims
- Lemon Squeezy, supported countries: https://docs.lemonsqueezy.com/help/getting-started/supported-countries
- Stripe, UK pricing: https://stripe.com/gb/pricing
- Stripe, global availability: https://stripe.com/global
- Global Law Experts, commercial lawyer fees in Kenya (Oct 2026): https://globallawexperts.com/commercial-lawyer-fees-kenya/

From search summaries only (not opened):
- CDH, draft SEP tax regulations 2025: https://www.cliffedekkerhofmeyr.com/en/news/publications/2025/Practice/Tax-Exchange-Control/tax-and-exchange-control-alert-03-october-Kenya-issues-draft-Income-Tax-Significant-Economic-Presence-Tax-Regulations-2025
- CDH, Finance Bill 2025 (software royalty proposal): https://www.cliffedekkerhofmeyr.com/news/publications/2025/Practice/Tax-Exchange-Control/tax-and-excahnge-control-alert-5-may-Unpacking-the-Kenya-Finance-Bill-2025-Whats-changing?geo=KE
- BDO EA, KRA validation of income and expenses from 1 Jan 2026: https://www.bdo-ea.com/en-gb/insights/kra-to-validate-income-and-expenses-declared-in-tax-returns-effective-1-january-2026
- Tax Appeals Tribunal, Musoni (credit is VAT-exempt, First Schedule Part II 1(h)): https://new.kenyalaw.org/akn/ke/judgment/ketat/2024/1250/eng@2024-08-09
- The Kenya Times, KRA proposal to scrap the KES 5m VAT threshold (Jul 2026): https://thekenyatimes.com/business/inside-kra-proposal-to-scrap-ksh5-million-vat-threshold-what-it-means-to-businesses/
- The Star, turnover tax explainer: https://www.the-star.co.ke/news/2025-06-07-explainer-queries-on-finance-bill-2025-answered
- PwC Tax Summaries Kenya, corporate overview (turnover tax): https://taxsummaries.pwc.com/kenya/corporate
- CBK, rates page (KES 129.89 per USD, 7 Oct 2026): https://www.centralbank.go.ke/?p=12585
- CBK weekly bulletin, 11 Sep 2026: https://www.centralbank.go.ke/uploads/weekly_bulletin/943916527_Weekly%20CBK%20Bulletin%2011%20September%202026.pdf
- Paystack Kenya pricing (page returned 403; figures from the search summary): https://paystack.com/ke/pricing
- Dodo Payments, Lemon Squeezy review: https://dodopayments.com/blogs/lemonsqueezy-review
- Khusoko, M-Pesa GlobalPay virtual Visa (2022): https://khusoko.com/2022/06/02/safaricoms-virtual-visa-allows-customers-to-pay-for-goods-using-m-pesa-globally/
- paybillke, USD payout guide (2026): https://paybillke.com/guides/freelancer-usd-payout-guide-kenya-2026
- BRS-hosted national ML/TF risk assessment (company secretary at KES 5m): https://brs.go.ke/wp-content/uploads/2024/01/PUBLIC-VERSION-MONEY-LAUNDERING-AND-TERRORIST-FINANCING-RISK-ASSESSMENT-REPORT.pdf
- BRS FAQ (annual return fee): https://brs.go.ke/wp-content/uploads/2024/05/FAQs.pdf
- EY, Companies Act changes 2023 (resident contact person): https://taxnews.ey.com/news/2023-1625
- Bowmans, Kenya companies registry reform (foreign directors, OTP): https://bowmanslaw.com/insights/kenya-companies-registry-a-reform-agenda-for-ease-of-doing-business/
- Healy Consultants, Kenya post-incorporation: https://www.healyconsultants.com/kenya-company-registration/post-incorporation-considerations
- Deel, entity setup in Kenya: https://www.deel.com/blog/entity-setup-kenya/
- Kolonell, Kenya registration costs 2026 (secondary): https://kolonell.com/en/blog/cost-of-registering-business-kenya-2026
- vjmglobal, private limited company in Kenya for US founders (secondary): https://www.vjmglobal.com/feeds/blog/private-limited-company-kenya-usa
- Capital FM, Nairobi Unified Business Permit: https://capitalfm.africa/all-you-need-to-know-about-the-unified-business-permit-costs-requirements-and-how-to-apply/
- Jiji, Nairobi bookkeeping listing: https://jiji.co.ke/nairobi-central/tax-and-financial-services/professional-bookkeeping-accounting-services-quickbooks-xero-setup-zFH7Eze5tML7AaA6oesSGkFf.html
- Paylab Kenya, sales representative salaries: https://kenya.paylab.com/salaryinfo/commerce/sales-representative
- Judy Legal, Advocates (Practice) Rules 1966: https://lite.judy.legal/amp/legislation/akn/ke/act/ln/1967/19/
- Sheriaplex, Advocates Act s.34: https://www.sheriaplex.com/kenya-acts/5674-unqualified-person-not-to-prepare-certain-documents-or-instruments
- Dupple, LinkedIn B2B ad costs 2026: https://dupple.com/learn/linkedin-ads-b2b-cost-2026
- beancount.io, bootstrapped SaaS multiples 2026: https://beancount.io/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide
- BigIdeasDB, SaaS valuation multiples 2026: https://bigideasdb.com/saas-valuation-multiples-2026
- devcommx, Nairobi regtech sales cycle (vendor claim): https://www.devcommx.com/demand-generation/nairobi/regtech

Taken from the sibling files, which cite their own sources: CBK fees and dates (Tech-ish, TechTrendsKE, CBK draft and press releases); the lender counts and directory; loan-software prices (Loandisk, Kovara, Lendsqr); YouVerify; Paylab compliance pay; ICPAK; ODPC fees; regional counts (BoT, UMRA, Nairametrics, New Times); associations (Capital FM, Sumsub). See [01](01-law-and-requirements.md) and [02](02-market-and-competition.md) for those links.
