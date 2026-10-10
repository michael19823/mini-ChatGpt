# Thailand B1: migrant-worker permit desk: go-to-market, payments, company setup and financials (deep dive 04)

Date: 10 Oct 2026. Status: complete. Builds on [the B1 report](../reports/thailand-b1.md), [01-law-and-requirements.md](01-law-and-requirements.md) and [02-market-and-competition.md](02-market-and-competition.md).

Conventions:
- Money is in Thai baht (THB). Prices are net of VAT unless stated.
- Exchange rates for planning: 1 USD = 33.3 THB (16 Sep 2026, [longforecast](https://longforecast.com/usd-to-bht-today-forecast), search summary). 1 EUR = about 38 THB (unverified; the ECB series showed about 37 in March 2026, [ECB](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/eurofxref-graph-thb.fi.html), search summary).
- "My estimate" marks planning numbers. "(unverified)" marks facts no source confirmed.
- The seller is assumed to be the founder's existing company in the EU. UK and US sellers are noted where they differ.

Working positioning (from part 02): **a multi-client back office for proxy filers (ผู้ดำเนินการแทน) and smaller licensed import companies (บนจ.)**. It is not a generic expiry tracker for employers. workdoc already sells that, at 500-6,000 baht a month ([workdoc pricing](https://www.workdoc.cloud/pricing)).

---

## Summary

- **Price below workdoc per worker and far below the agent's fee.** Plans: Free (20 workers), **Pro Agent 990 baht a month** including 100 active workers plus 8 baht per extra worker, **Agency 2,990 baht a month** including 400 workers plus 6 baht per extra worker, and a **Season Pass at 59 baht per worker filed**. A yearly plan costs 10 months. At 300 workers Pro Agent costs 2,590 baht a month. workdoc charges about 4,200 for the same headcount and has no multi-client mode ([workdoc pricing](https://www.workdoc.cloud/pricing); part 02). An agent charges about 3,400-3,500 baht per worker per renewal before VAT ([passport.co.th](https://www.passport.co.th/service/renew-workpermit-31march2026/), inferred in part 02). So the tool costs 1-2% of the agent's fee per worker.
- **Selling seasons follow the cohort deadlines.** These are 11 Dec 2026 (filing now), 13 Feb 2027, 31 Mar 2027, 30 Jun 2027 (passport and visa) and 11 Dec 2027 ([PRD 531308](https://www.prd.go.th/th/content/category/detail/id/39/iid/531308); [PRD 481205](https://www.prd.go.th/th/content/category/detail/id/39/iid/481205); part 01). The product will be sellable in early December 2026, too late for this rush. Use December for pilots. **The first paid season is January-March 2027. The main one is August-December 2027.**
- **Channels, in priority order:**
  1. direct outreach to the 331 licensed import companies;
  2. professional proxies, reached through free e-WorkPermit webinars and Meta and LINE ads;
  3. Thai deadline pages for search, one per cohort;
  4. Thai accounting offices as resellers;
  5. hospitals and insurers at the point of need;
  6. a free employer view that each agent sends to its clients.

  The year-1 marketing budget is **330,000 baht** (about EUR 8,700), plus partner commissions. A part-time Thai contractor runs demos, support and the "rules desk".
- **Payments: sell by card through Stripe from the EU company, priced in baht.**
  - The fees come to about 5.9% plus about 10 baht a charge: 3.15% + EUR 0.25 for an international card, 2% for currency conversion and 0.7% for Billing ([Stripe IE pricing](https://stripe.com/ie/pricing)).
  - PromptPay, the Thai QR payment, is open only to Stripe accounts based in Thailand ([Stripe docs](https://docs.stripe.com/payments/promptpay)).
  - Thai banks add a 1% fee when a card pays a foreign online merchant in baht, and up to 2.5% when it pays in a foreign currency ([marketeeronline](https://marketeeronline.co/archives/344124); [marketeeronline](https://marketeeronline.co/archives/138044); search summaries).
  - A SWIFT transfer costs the Thai buyer 500-1,700 baht ([Krungsri](https://www.krungsri.com/th/personal/banking-services/international-remittance/swift-international-remittance)). That is too much for a 9,900-baht plan.
  - Add a Thai reseller (an accounting office) for buyers who want PromptPay or a Thai tax invoice.
- **Tax friction is real but manageable.**
  - A foreign seller registers for Thai VAT only when sales to buyers who are not VAT-registered pass 1.8 million baht a year ([Stripe Tax Thailand](https://docs.stripe.com/tax/supported-countries/asia-pacific/thailand)). In the base case that happens in year 3.
  - VAT-registered buyers self-assess 7% on form ภ.พ.36 and claim it back ([FlowAccount](https://flowaccount.com/blog/google-workspace-tax-pnd54-pp36/)).
  - **Withholding tax is the main friction.** Software fees paid abroad count as royalty-type income. The payer must withhold 15% on form ภ.ง.ด.54. A tax treaty cuts this to 5% for sellers in Germany, the UK, the US and some other countries ([Revenue Department ruling กค 0702/2891](https://rd.go.th/38501.html)). This bites on company buyers (import agencies), not on individual proxies paying by card. A reseller removes it.
- **No Thai company in year 1.**
  - A foreign-majority Thai company that sells services needs a Foreign Business Licence with at least 3 million baht of capital, or BOI promotion ([Tilleke](https://www.tilleke.com/insights/updated-minimum-capital-provisions-foreign-companies-thailand/22/), search summary).
  - The August 2026 relaxation covers IT services only between related companies ([Rajah & Tann](https://www.rajahtannasia.com/?p=196986)).
  - New anti-nominee checks have applied since 1 Aug 2026 ([DFDL](https://www.dfdl.com/insights/legal-and-tax-updates/thailand-introduces-additional-registration-requirements-to-combat-nominee-arrangements/), search summary).
  - Costs if one is ever needed:
    - official fees about 5,500-6,300 baht for 1 million baht of capital ([FlowAccount](https://flowaccount.com/blog/how-to-register-a-company-via-dbd-e-registration/); [ownpropertyabroad](https://ownpropertyabroad.com/thailand/register-a-thai-limited-company), search summary);
    - a lawyer about 45,000 baht ([Thai Law Online](https://www.thailawonline.com/company-registration-cost-thailand/), search summary);
    - about 100,000-180,000 baht a year to run it (my estimate).
- **Financial model (36 months, the founder builds with AI agents, no founder pay):**

  | Measure | Low | Base | High |
  |---|---|---|---|
  | Paying accounts at month 36 | 83 | 220 | 402 |
  | ARR at month 36 (baht) | 1.0 million | 3.3 million (USD 99,000) | 7.0 million |
  | Peak cash need (baht) | 1.64 million, never pays back | **0.91 million (USD 27,000)** | 0.75 million |
  | Break-even, trailing 12 months | none | month 22 | month 16 |
  | Profit before founder pay, year 3 (baht) | none | about 1.05 million | about 3.3 million |

- **This is a small, decent business, not a large one.** The ceiling is the pool of professional filers: about 330 import companies and an estimated 1,800-3,500 multi-client proxies (part 02). Malaysia is the only near copy, and it is crowded (part 02). The likely exit is a sale to workdoc's owner, a Thai HR or payroll vendor or a large agency, at about 2.5-4x revenue ([beancount.io](https://beancount.io/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide), search summary). In the base case that is 8-13 million baht.
- **Kill criteria:**
  - fewer than 5 pilot commitments from 20 interviews by 11 Nov 2026;
  - fewer than 12 paying accounts by end of April 2027;
  - fewer than 35 by October 2027;
  - fewer than half of first-year accounts still paying after 12 months.

---

## Pricing and packaging

### What buyers already pay (anchors)

| Item | Price | Source |
|---|---|---|
| State fee, 11 Dec 2026 renewal | 100 baht per application + 900 baht per permit | [Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1250827) (via part 01) |
| Licensed agent, all-in renewal (31 Mar 2026 round) | 5,638-7,238 baht per worker, VAT and pass-through fees included. Implied service fee about 3,400-3,500 baht before VAT | [passport.co.th](https://www.passport.co.th/service/renew-workpermit-31march2026/); inference in part 02 |
| Queue middlemen | about 2,000 baht per worker | [Naewna](https://www.naewna.com/local/972023) (via part 02) |
| **workdoc** SaaS (direct rival on the employer side) | Essential plan 500 baht a month (10 workers), 1,500 (50), 1,900 (100), 3,000 (200), 6,000 (500). Monthly billing, cancel any time. Yearly billing = "2 months free". Optional onboarding 5,000-15,000. AI and OCR billed at 1 baht per token, top-up from 100 baht. Free trial with no card. VAT treatment and payment methods not stated | [workdoc pricing](https://www.workdoc.cloud/pricing) (opened 10 Oct 2026); tier table from part 02 |
| e-WorkPermit online course | 3,999 baht (list 5,999) | [workdoc course](https://www.workdoc.cloud/course) (via part 02) |
| Thai SME accounting SaaS, for comparison | FlowAccount Standard 1,990, Pro 2,990, Pro Business 5,490 baht a year | [FlowAccount pricing](https://flowaccount.com/th/pricing) (search summary) |
| LINE Official Account (what an agent pays to message clients) | Free (300 messages), Basic 1,280 baht a month (15,000 messages), Pro 1,780 baht (35,000), before VAT | [yespress.io](https://yespress.io/line-company-thailand), secondary, checked 9 Sep 2026 (search summary) |
| Generic Thai HR on LINE | free for 1-20 staff | [Wansook](https://www.wansook.com/) (via part 02) |

What this tells us:
- **The money is in service, not software.** An agent earns about 3,400-3,500 baht per worker per renewal. A tool at 10-20 baht per worker a month is 3-7% of that fee over a year. A proxy who saves 15 minutes per worker, or avoids one rejected file, gets that back many times (unverified until interviews).
- **workdoc sets the software price.** It charges 12-50 baht per worker a month, with the lowest rate at 500 workers. It is built for one company. Pricing for an agent's book of many small employers has to be per active worker across all clients. It has to be at or below workdoc's rate, or the agent will just open several workdoc accounts.
- **Thai small businesses are used to cheap yearly SaaS.** FlowAccount costs 2,000-5,500 baht a year. A yearly price of about 10,000 baht is acceptable only to a professional filer who earns from each worker.

### Proposed plans (net of VAT; yearly = 10 × monthly)

| Plan | Who | Monthly | Yearly | What is included |
|---|---|---|---|---|
| **Free** | Small proxy or employer testing the tool | 0 | 0 | 1 user, up to 20 active workers. Cohort and deadline per worker, reminders by LINE and email, document checklist, s.13 hire and exit reminders. No POA generator, no client status page |
| **Pro Agent** | Professional proxy, small licensed import company | **990** incl. 100 active workers; **+8 baht** per extra worker a month | 9,900 incl. 100 workers | 3 users. Unlimited client employers. Rules packs for every live cohort (Dec, Feb, Mar, MOU), updated within 48 hours of each cabinet resolution. Pre-filing check per worker. Bulk POA generator with the stamp-duty rule. Filing queue across clients. Receipt and card tracking. LINE status link per client. Worker notices in Burmese, Lao and Vietnamese. Excel import |
| **Agency** | Licensed import company with branches, large proxy | **2,990** incl. 400 workers; **+6 baht** per extra worker | 29,900 incl. 400 workers | 10 users. Branches, roles, activity log. Client billing export. Inspection pack per employer. Priority LINE support. Data export and API (later) |
| **Season Pass** | Seasonal proxy who files one cohort a year | 59 baht per worker filed, sold in packs of 50 (2,950 baht) | n/a | Pro Agent features for one filing window (for example 8 Sep-11 Dec), then read-only |
| **Employer view** | The agent's client employer | free | free | Read-only view of its own workers, invited by the agent. Upgrade to Pro is possible but not pushed |
| Add-on: done-for-you import | Any paid plan | 2,900 baht one-off | | The Thai contractor cleans and imports the agent's spreadsheets. workdoc charges 5,000-15,000 for onboarding ([workdoc pricing](https://www.workdoc.cloud/pricing)) |

Worked examples against workdoc (workdoc figures from [workdoc pricing](https://www.workdoc.cloud/pricing) and part 02):

| Headcount (active workers) | This product | workdoc Essential | Note |
|---|---|---|---|
| 100 | 990 a month (Pro Agent) | 1,900 a month | across any number of client employers |
| 300 | 2,590 a month (990 + 200 × 8) | about 4,200 a month | |
| 800 | 5,390 a month (Agency: 2,990 + 400 × 6) | 6,000 a month at 500 workers; more above that | |

**Founding offer.** The first 30 accounts that pay yearly before 31 Mar 2027 get 50% off the first year. In return they give feedback and a testimonial. The model's lower year-1 average price reflects this.

**Average revenue per account (ARPA) assumed in the model:** 900 baht a month in year 1, 1,150 in year 2 and 1,250 in year 3, net (base case). That is a mix of Pro Agent accounts with about 100-150 workers and a few Agency accounts. It is close to part 02's blended 15,000 baht a year.

### VAT on the price

- **Show prices as "net; VAT added where the law requires".**
- **Below the threshold.** A foreign seller does not register for Thai VAT until its sales to buyers who are not VAT-registered pass 1.8 million baht a year ([Stripe Tax Thailand](https://docs.stripe.com/tax/supported-countries/asia-pacific/thailand); [BOI guidebook](https://www.boi.go.th/upload/content/guidebook_617a70536ae5d.pdf), search summary). Until then, proxies and small employers outside the VAT system pay no Thai VAT. That makes the product 7% cheaper than a VAT-registered Thai rival (if workdoc charges VAT; unverified).
- **VAT-registered buyers** (most licensed import companies) self-assess 7% on form ภ.พ.36. They reclaim it in the next month ([FlowAccount](https://flowaccount.com/blog/google-workspace-tax-pnd54-pp36/)). Net cost to them is zero, but there is one extra form.
- **The 7% rate is extended to 30 Sep 2027** ([Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1244976); [Post Today](https://www.posttoday.com/general-news/746045); search summaries). After that it could rise (the statutory rate is 10%; unverified). Keep prices net so a rise does not force a reprice.

---

## Go-to-market

### Who buys, and the promise

- **Primary buyer: the professional proxy** (ผู้ดำเนินการแทน). This is a person or small firm filing for 5-50 client employers under powers of attorney. 17,619 proxies registered on e-WorkPermit in its first month. Perhaps 10-20% of them file for many clients (estimate in part 02, based on [Daily News](https://www.dailynews.co.th/news/5314014/)).
- **Second buyer: the smaller licensed import company** (บนจ.). There are 331 on e-WorkPermit ([Daily News](https://www.dailynews.co.th/news/5314014/)). The big ones already run their own systems, such as JOBS Workspace ([JOBS](https://www.jobsworkerservice.com/document-tracking/)) and passport.co.th's LINE tracker ([passport.co.th](https://www.passport.co.th/service/foreign-worker-renewal-2026/)). The middle and the bottom do not (unverified share).
- **Third buyer: direct employers with 20 or more migrant workers.** They come in through the free employer view. Do not chase them head-on against workdoc.
- **Promise (in Thai):** "ยื่นต่ออายุให้ลูกค้า 30 นายจ้างในรอบเดียว ไม่ต้องใช้ Excel" ("File for 30 client employers in one round, without Excel"). Secondary promise: "a neutral tool". workdoc belongs to an import agency ([fastandeasymou.org](https://fastandeasymou.org/), via part 02). A rival agency may not want its client list there (unverified; test it in interviews).
- **Stay out of:**
  - filing in our own name;
  - acting as a broker (brokerage work is closed to foreigners ([Matichon](https://www.matichon.co.th/local/news_2049383), via part 01));
  - queue slots (the middlemen trade is under investigation ([Naewna](https://www.naewna.com/politic/950084), via part 02)).

### Selling seasons and deadlines

| Window | Event | What to sell | Source |
|---|---|---|---|
| 8 Sep-11 Dec 2026 (now) | December cohort, about 770,000 workers, renews to 11 Dec 2027. Filing closes 16:30 and payment 20:00 on 11 Dec | Too late for a full launch. Run free pilots on the post-filing steps: receipts, biometric appointments, cards | [PRD 531308](https://www.prd.go.th/th/content/category/detail/id/39/iid/531308); [Nation](https://www.nationthailand.com/news/policy/40069723) (via part 01) |
| Dec 2026-Feb 2027 | February cohort (Lao and Vietnamese) permits end 13 Feb 2027. A new cabinet resolution is expected | Rules pack within 48 hours of the resolution; reminders | [Thai Post 907398](https://www.thaipost.net/general-news/907398/) (via part 01, search snippet) |
| Jan-Mar 2027 | March cohort permits end 31 Mar 2027 (cabinet resolution of 2 Dec 2025) | **First paid season.** Founding offer ends 31 Mar | [PRD 481205](https://www.prd.go.th/th/content/category/detail/id/39/iid/481205); [Thai Post 955747](https://www.thaipost.net/general-news/955747/) |
| Mid-April | Songkran holidays | Quiet. No campaigns | (unverified dates for 2027) |
| Apr-Jun 2027 | December cohort must complete passport and visa by 30 Jun 2027 (or 90 days after a new passport) | Per-worker passport and visa tracking; "who is still missing" lists | [PRD 531308](https://www.prd.go.th/th/content/category/detail/id/39/iid/531308) |
| Pending | Myanmar MOU workers finishing 4 years in 2026; agreed in principle 23 Jul 2026 | New cohort type in the rules engine | [InfoQuest 625642](https://www.infoquest.co.th/?p=625642) (via part 01, search snippet) |
| Aug-Dec 2027 | December cohort round 2 (permits end 11 Dec 2027) | **Main season.** Agents set up their books before the window opens | [Bangkok Biznews 1247207](https://www.bangkokbiznews.com/news/news-update/1247207) (via part 01) |
| All year | s.13 hire and exit notices within 15 days; fine up to 20,000 baht | The weekly reason to log in | [RO text](https://www.drthawip.com/book/export/html/3263) (via part 01) |

The pattern is three or four waves a year. Each wave is set by a cabinet resolution that comes with only weeks of notice (part 01). **Speed in publishing each new rules pack is the product's main marketing event.**

### Channels in priority order

1. **Licensed import companies: direct outreach.**
   - About 330 firms ([Daily News](https://www.dailynews.co.th/news/5314014/)). Many publish their licence number, phone and LINE ID on their websites, for example Chaiyo (นจ.0083/2560) ([chaiyomanpower.com](https://www.chaiyomanpower.com/), via part 02).
   - The DOE keeps the licence list (part 02 could not download it; unverified).
   - Motion: the Thai contractor calls or sends a LINE message, then books a 30-minute demo on LINE video. Target: 40 demos and 10 paying agencies in the first 9 months (my estimate).
   - Some agencies will also resell to their client employers.
2. **Professional proxies: free webinars and ads.**
   - workdoc sells an e-WorkPermit course for 3,999 baht ([workdoc course](https://www.workdoc.cloud/course)). A free 60-minute webinar, "e-WorkPermit สำหรับผู้ดำเนินการแทน: ยื่นหลายนายจ้างให้ทันรอบ" ("e-WorkPermit for proxies: file for many employers on time"), is a strong lead magnet. Run one in each wave.
   - Promote it with Meta ads and LINE ads aimed at people interested in foreign-worker paperwork.
   - No Thai B2B cost benchmark was found. Global B2B and SaaS averages are about USD 1.32 per click and USD 7.45 per lead. Q4 is the dearest season and January-February the cheapest ([Searchlab](https://searchlab.nl/en/statistics/facebook-ads-statistics-2026), search summary). Plan on 300-600 baht per lead (my estimate).
   - Facebook groups and LINE OpenChat groups of agents probably exist, but search engines do not index them (unverified). The Thai contractor should map them in week 1.
3. **Thai search content per cohort.** Agents and workdoc already publish a deadline page for each cohort ([passport.co.th](https://www.passport.co.th/service/foreign-worker-renewal-2026/); [JOBS fees](https://www.jobsworkerservice.com/migrant-worker-fees/); [workdoc blog](https://www.workdoc.cloud/blog/mou-renewal-cost-breakdown)). That is evidence of search demand at each wave. Publish a page within 48 hours of each resolution, with a free checklist download.
4. **Thai accounting offices as resellers and referrers.**
   - They already serve small employers' payroll and social security.
   - They can issue a Thai tax invoice and take PromptPay (see payments).
   - Terms: 25% reseller margin, or 20% of first-year revenue as a referral fee (my estimate).
   - Bookkeeping offices charge 2,500-8,000 baht a month per client ([LINE shop listing](https://page.line.me/295yagcq/showcase/1053705597293077/item/1650000041521144), search summary). A tool that helps their migrant-employing clients is an easy upsell.
5. **Point-of-need partners.** Every renewal needs a health check at a hospital linked to the DOE system, plus social security or health insurance ([Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1250827), via part 01). Clinics and migrant insurers could hand out a QR code to the free tool. The terms are unknown (unverified). Try it in year 2.
6. **The employer-view loop.** Each agent invites its client employers to a free read-only view. Employers with 20 or more workers become leads, either for the agent (good for retention) or for a direct plan.

Not channels:
- **The DOE.** It will not endorse a vendor (unverified).
- **Business associations.** No association of import companies or proxies with a named contact was found in this run or in part 02.

### Sales motion

- **Self-serve first.** The flow is: Thai landing page → free plan, no card → import an Excel sheet → first reminders on LINE within 10 minutes.
- **Assisted conversion.**
  - The Thai contractor calls every new account that adds more than 30 workers.
  - Pro Agent is sold by card in Stripe Checkout, or through the reseller.
  - Agency is sold after a demo and a 30-day pilot, then a yearly invoice.
- **Sales cycle.** About 1-2 weeks for a proxy and 3-6 weeks for an import company (my estimate).
- **Roles.**
  - The founder, abroad, owns the product, the rules engine and the content.
  - A Thai part-time contractor (from November 2026) does demos, LINE support and daily monitoring of DOE, PRD and Royal Gazette news for new resolutions.
  - BOI's salary guide puts junior customer-service roles at 25,000-40,000 baht a month ([BOI Cost of Doing Business 2026](https://www.boi.go.th/upload/content/Cost_of_Doing_Business_2026.pdf)). The model uses 25,000 a month for part-time work in year 1.
  - The contractor must not sign contracts for the company. That keeps the permanent-establishment risk low (unverified; see company setup).
- **Retention.**
  - Rules packs ship within 48 hours of each resolution.
  - A pre-season "book health check" email goes out 4 weeks before each window.
  - The monthly s.13 notice reminders keep the tool in weekly use.

---

## 90-day launch plan

Start Monday 12 Oct 2026. Day 90 is Friday 9 Jan 2027. The build follows the owner's AI-agent model: MVP in about 3 weeks, sellable in 6-8 weeks after legal content, a security test and pilots.

**Days 1-14 (12-25 Oct): validate and set up.**
- Hire the Thai contractor: part-time, ideally a former agency or proxy staffer.
- Run 20 interviews by LINE call: 12 proxies, 5 small import companies, 3 employers with 20+ migrants. Ask about:
  - tools used today and the time spent per worker;
  - price for 100 workers;
  - card versus transfer;
  - whether they need a Thai tax invoice;
  - whether they withhold tax on foreign software.
- Book a workdoc demo. Confirm whether it has a multi-client mode.
- Instruct a Thai law firm on a fixed fee (budget 80,000 baht; BOI lists contract review at 50,000 baht minimum ([BOI CoDB 2026](https://www.boi.go.th/upload/content/Cost_of_Doing_Business_2026.pdf))). Scope:
  - Thai terms of service and data processing agreement;
  - whether a foreign processor needs a Thai PDPA representative;
  - confirm that renewal software is not a licensed activity under RO s.5 and s.26;
  - a VAT and withholding-tax memo;
  - review of the rules-pack wording.
- Set up Stripe from the EU company with baht prices, Billing and Tax monitoring. Set up a LINE Official Account (Pro plan). Publish a Thai landing page with a waitlist.

**Days 15-35 (26 Oct-15 Nov): build the MVP with AI agents.**
- Scope:
  - client list and workers per client;
  - versioned rules table for the December, February, March and MOU cohorts;
  - per-worker checklist;
  - bulk POA generator;
  - filing queue;
  - LINE and email reminders;
  - Excel import;
  - Thai UI, with worker notices in Burmese, Lao and Vietnamese.
- Sign 5-8 pilot proxies. The tool is free until 31 Jan 2027.
- **Day-30 check (11 Nov):** at least 20 interviews done, at least 5 pilot commitments, and at least 3 people who say they would pay 990 baht a month or more.

**Days 36-56 (16 Nov-6 Dec): harden and pilot.**
- External security test (budget 100,000 baht; my estimate), then fix the findings.
- Import the pilots' spreadsheets with the done-for-you service.
- Pilots use the tool for the last weeks of the December cohort. The focus is post-filing tracking (receipts, biometric appointments, cards) and the 30 Jun 2027 passport deadline. Do not ask pilots to change their filing process mid-rush.
- Founder trip 1 to Thailand: Bangkok, Samut Sakhon, Samut Prakan. Sit with 3-4 pilots at work.
- Webinar 1: "หลัง 11 ธ.ค. ต้องทำอะไรต่อ" ("What to do after 11 Dec").

**Days 57-75 (7-24 Dec): deadline and first sales.**
- 11 Dec deadline. Interview every pilot after it: what broke, what the tool saved.
- Collect 3-5 written testimonials.
- Open the founding offer (50% off a yearly plan, first 30 accounts).
- Sign one reseller (a Thai accounting office) for buyers who need PromptPay or a Thai tax invoice.

**Days 76-90 (25 Dec-9 Jan): prepare the first paid season.**
- Watch for the resolutions on the February and March cohorts. Publish rules packs and Thai deadline pages within 48 hours.
- Build the outreach list of import companies from licence numbers on their websites and the DOE list.
- Schedule webinar 2 for mid-January.
- **Day-90 review (9 Jan):** at least 5 pilots used the tool in December and at least 3 paid founding accounts. Otherwise stop, or narrow to a service.

---

## 12-month marketing plan and budget

Period: November 2026 to October 2027. Base case. Amounts in baht.

| Quarter | Focus | Main activities | Budget |
|---|---|---|---|
| Q1 Nov-Jan | Pilots and the December rush | Trip 1; webinar 1; landing page and LINE OA; first deadline pages; small ad tests (5,000 a month in Nov-Dec, 15,000 in Jan) | 80,000 |
| Q2 Feb-Apr | February and March cohorts; founding offer ends 31 Mar | Webinars 2-3; Meta and LINE ads at 15,000 a month in Feb-Mar; outreach to import companies; reseller onboarding; quiet in mid-April | 85,000 |
| Q3 May-Jul | Passport and visa deadline 30 Jun | Content on passport and visa tracking; webinar 4; ads at 5,000 a month; first partner talks with clinics and insurers | 50,000 |
| Q4 Aug-Oct | Pre-season for the December 2027 round | Trip 2; webinars 5-7; ads at 15,000 a month; "set up your book before the window" campaign; referral push to existing accounts | 115,000 |
| **Total** | | | **330,000** (about EUR 8,700) |

By line item:

| Item | Baht a year | Basis |
|---|---|---|
| Meta and LINE ads (15,000 a month in 6 peak months, 5,000 in the other 6) | 120,000 | my estimate; no Thai B2B benchmark found ([Searchlab](https://searchlab.nl/en/statistics/facebook-ads-statistics-2026), search summary) |
| Thai content and SEO (freelance writer, 6,000 a month) | 72,000 | my estimate |
| Webinars (7-10; platform, slides, a Thai co-host from a partner agency) | 25,000 | my estimate |
| Founder trips to Thailand (2 × about 40,000: flight from Europe plus 10 days) | 80,000 | my estimate |
| Printed one-pagers, demo kit, CRM and email tools | 18,000 | my estimate |
| Contingency | 15,000 | |
| **Total** | **330,000** | |
| Partner commissions (not in the 330,000) | about 5% of revenue | 25% reseller margin on about 20% of sales |
| LINE OA Pro plan (in operating costs) | about 21,400 | 1,780 a month ([yespress.io](https://yespress.io/line-company-thailand), search summary) |

Years 2 and 3 (base case): 300,000 baht a year. The focus shifts to referrals, the reseller network and the pre-season campaign.

---

## Payments and tax friction

### Can Thai buyers pay a foreign seller online?

- **Cards: yes.** A Stripe account in the EU can charge any international Visa or Mastercard. Thai cards are "international cards" for an Irish Stripe account: 3.15% + EUR 0.25 ([Stripe IE pricing](https://stripe.com/ie/pricing)).
- **The buyer pays an extra bank fee:**
  - Since 1 May 2024, Thai banks charge a **1% fee** when a Visa or Mastercard pays a merchant registered abroad in baht. Facebook and Google are named examples ([marketeeronline](https://marketeeronline.co/archives/344124); [Prachachat](https://www.prachachat.net/finance/news-1514119); search summaries).
  - A July 2026 report says all banks still charge it ([Bangkok Biznews](https://www.bangkokbiznews.com/finance/investment/1115852), search summary).
  - If the charge is in a foreign currency, most banks add a currency-risk fee of up to 2.5% instead ([marketeeronline](https://marketeeronline.co/archives/138044), search summary). Some travel and debit cards waive it.
  - **So charge in baht.** The buyer then pays 1%, not 2.5%, and sees a fixed price.
- **Some Thai cards must be switched on for online or overseas use in the bank app** (unverified). Put a one-line tip in the checkout FAQ.
- **PromptPay (Thai QR transfer): not without a Thai entity.** Stripe offers PromptPay only to Stripe accounts based in Thailand, for customers in Thailand, in THB ([Stripe docs](https://docs.stripe.com/payments/promptpay)).
- **Bank transfer from Thailand: expensive.**
  - Krungsri charges 500 baht per SWIFT transfer when costs are shared. Adding the foreign bank's charge costs another 1,200 baht for EUR or 800 for USD ([Krungsri](https://www.krungsri.com/th/personal/banking-services/international-remittance/swift-international-remittance)). That is 5-17% of a 9,900-baht yearly plan.
  - Wise gives local account details in 8 currencies. THB is not one of them ([Wise](https://wise.com/gb/account/thb-account), search summary). The founder cannot easily get a local baht account to receive transfers.
  - Use SWIFT only for Agency deals of 30,000 baht or more.

### Options compared (one Pro Agent yearly payment of 9,900 baht)

| Route | Seller's fee | Buyer's extra cost | Thai VAT handling | Notes |
|---|---|---|---|---|
| **Stripe (EU account), charge in THB** | 3.15% + EUR 0.25 + 2% conversion + 0.7% Billing ≈ 589 baht (5.9%); +0.5% if Stripe Tax is used ([Stripe IE](https://stripe.com/ie/pricing)) | 1% Thai bank fee ≈ 99 baht | None until the 1.8 million baht threshold for sales to buyers outside the VAT system; then register | **Recommended at launch** |
| Stripe (EU account), charge in EUR | 3.15% + EUR 0.25 ≈ 321 baht (3.2%) | up to 2.5% currency fee ≈ 248 baht, plus exchange-rate risk | as above | Cheaper for the seller, worse for the buyer |
| **Paddle** (merchant of record) | 5% + USD 0.50 ≈ 512 baht ([Paddle pricing](https://www.paddle.com/pricing)) | 1% bank fee; **+7% VAT (693 baht) for buyers without a Thai VAT ID** | Paddle collects 7% Thai VAT on sales to consumers and non-registered buyers ("B2C") ([Paddle tax list](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)) | THB supported for charging, minimum 23 THB; payouts in USD, EUR, GBP and others, not THB ([Paddle currencies](https://developer.paddle.com/concepts/sell/supported-currencies.md)). Switch to it when the VAT threshold nears |
| Lemon Squeezy (merchant of record) | 5% + 1.5% international + 0.5% subscription + USD 0.50 ≈ 710 baht; 1% on payouts to non-US banks ([Lemon Squeezy fees](https://docs.lemonsqueezy.com/help/getting-started/fees)) | 1% | Thai VAT handling not checked (unverified) | Dearer than Paddle; no reason to choose it |
| Stripe Managed Payments (Stripe's own merchant of record) | Reported as 3.5% on top of normal Stripe fees ([Dodo Payments](https://dodopayments.com/blogs/stripe-managed-payments-fees-explained), search summary) | 1% | Tax handled in 80+ countries; Thailand is not on the excluded list (search summary of [Stripe changelog](https://docs.stripe.com/changelog/dahlia/2026-04-22/managed-payments.md)) | Check eligibility for the founder's country (unverified) |
| SWIFT transfer to the EU company | receiving fee (unverified) | 500-1,700 baht ([Krungsri](https://www.krungsri.com/th/personal/banking-services/international-remittance/swift-international-remittance)) | as Stripe | Agency deals only |
| **Thai reseller** (accounting office) | 25% margin (my estimate) | none: PromptPay or local transfer, Thai tax invoice | Reseller charges Thai VAT if it is registered | Solves PromptPay, the tax invoice and withholding for company buyers |
| Stripe Thailand (needs a Thai company) | Thai cards 3.65% + 10 baht; PromptPay 1.65% ([Stripe TH pricing](https://stripe.com/th/pricing)) | none | Thai company's own VAT | Only if a Thai entity is ever set up |

### Buyer-side tax friction

1. **VAT on an imported service.**
   - A VAT-registered Thai business that buys a foreign online service files ภ.พ.36 and pays 7% itself. It may claim the amount back as input tax the next month ([FlowAccount](https://flowaccount.com/blog/google-workspace-tax-pnd54-pp36/)). The foreign provider charges VAT only to consumers and businesses outside the VAT system (same source).
   - For licensed import companies this is one more monthly line, with no net cost. Put a Thai FAQ on the checkout page that explains it.
2. **Withholding tax on payments abroad (section 70, form ภ.ง.ด.54).**
   - The Revenue Department treats fees for using software as income under s.40(3) of the Revenue Code. A Thai payer must withhold 15% when paying a foreign owner that does no business in Thailand ([RD ruling กค 0702/2891](https://rd.go.th/38501.html)).
   - The same ruling cuts the rate to 5% for owners in Germany, the UK, the US, Canada, South Korea and Hong Kong, and to 10% for New Zealand. Those are treaty rates.
   - BOI lists 15% for both royalties and service fees paid to foreign companies not doing business in Thailand. Thailand has tax treaties with most EU states, the UK and the US, among others ([BOI CoDB 2026](https://www.boi.go.th/upload/content/Cost_of_Doing_Business_2026.pdf)).
   - A payer who fails to withhold is jointly liable with the foreign recipient. That comes from Supreme Court decision 6770/2549 ([FlowAccount ภ.ง.ด.54](https://flowaccount.com/blog/pnd54-withholding-tax/), search summary).
   - Whether a SaaS subscription is "software use" (royalty) or a service done abroad is not settled in any source found (unverified). Accounting writers treat Google Workspace as a possible royalty ([FlowAccount](https://flowaccount.com/blog/google-workspace-tax-pnd54-pp36/)).
   - Whether individual payers (sole proxies) must withhold is unclear. Sources speak of company payers (unverified).
   - **Effect:** a card payment cannot carry a deduction. A company buyer either grosses up and pays the 15% (or 5%) itself, or asks for a Thai invoice. The domestic norm is different: Thai SaaS buyers withhold 3% and send a withholding certificate, as PEAK's help pages show ([PEAK](https://intercom.help/peak/en/articles/8353614-ส-งหนังสือหัก-ณ-ที-จ-าย-ค-าบริการให-peak), search summary).
   - **Mitigation:**
     - send company buyers to the reseller;
     - for Agency deals paid by SWIFT, accept payment net of the treaty rate with the ภ.ง.ด.54 receipt, and claim a foreign tax credit at home (rules vary by country; unverified).
3. **Thai tax invoice.** Thai agents advertise that they always issue a tax invoice ([passport.co.th](https://www.passport.co.th/service/foreign-worker-renewal-2026/), via part 02). A foreign seller cannot issue one. Under the e-service regime it also has no duty to (secondary sources in the [Stripe Tax page](https://docs.stripe.com/tax/supported-countries/asia-pacific/thailand) context; unverified). Buyers who insist go to the reseller.

### Seller-side Thai tax

- **VAT registration (VES).** Foreign sellers of digital services must register once their sales to non-registered Thai buyers pass 1.8 million baht in an accounting period. They must register within 30 days of crossing it. Registration is online, through the Revenue Department's e-service portal ([Stripe Tax Thailand](https://docs.stripe.com/tax/supported-countries/asia-pacific/thailand); [RD portal](https://eservice.rd.go.th/rd-ves-web/landing)). Returns are monthly, due by the 23rd. Penalties can reach twice the tax (secondary sources, search summary; unverified).
- **When this bites.** About 70% of revenue is assumed to come from buyers outside the VAT system (my estimate). On a rolling 12-month basis the base case reaches 1.8 million baht around month 33 (mid-2029). The high case reaches it in year 2. The legal test runs per accounting period, so check against the company's own year.
- **At that point, choose:**
  - (a) register for VES and add 7% for those buyers; or
  - (b) move billing to Paddle, which then collects and files.

  Decide at month 18 on the actual mix.
- **No Thai corporate tax** while the company has no permanent establishment in Thailand. A Thai contractor who signs contracts could create one (treaty article 5; unverified). Keep contracting online, in the EU company's name.

### Recommendation and setup checklist

1. Stripe account of the EU company. Prices in THB. Stripe Checkout and Billing, cards plus Apple Pay and Google Pay. Yearly plans at 10 × monthly. Stripe Tax in monitoring mode for the 1.8 million baht threshold.
2. Thai-language invoice template. It should show "service supplied from abroad; VAT-registered buyers self-assess on ภ.พ.36; withholding under s.70 may apply to company buyers", and the treaty rate for the EU company's country.
3. A Thai FAQ page: payment, VAT, withholding, how to switch on online card use.
4. From day 60: one reseller (a Thai accounting office) for PromptPay, local invoices and company buyers.
5. Review at month 12-18: VES registration or Paddle; and whether a Thai entity is needed (see below).

---

## Company setup (needed or not, costs)

### Is a Thai company needed? Not at launch.

Reasons:
- **Selling online from abroad works.** Cards work, and Thai VAT applies only above the threshold (above).
- **A foreign-majority Thai company is costly.**
  - Services are a restricted list under the Foreign Business Act. A foreign-majority company needs a Foreign Business Licence or BOI promotion ([search summary of Thailand Starter Kit and others](https://www.thailandstarterkit.com/entrepreneur/)).
  - Capital: at least 2 million baht for a foreign company without a licence, and 3 million baht or 25% of three years' estimated costs for one that needs a licence ([Tilleke](https://www.tilleke.com/insights/updated-minimum-capital-provisions-foreign-companies-thailand/22/); [TAG Alliances](https://tagalliances.com/specialty-groups/corporate-and-m-a/7138-minimum-capital-requirements-for-foreign-companies-in-thailand-updated); search summaries).
  - The licence fee is 20,000-250,000 baht for List 3 ([BOI CoDB 2026](https://www.boi.go.th/upload/content/Cost_of_Doing_Business_2026.pdf)).
- **The 2026 relaxation does not help.** Ministerial Regulation No. 5 (B.E. 2569), in force since 28 Aug 2026, exempts IT management services only between related companies ([Rajah & Tann](https://www.rajahtannasia.com/?p=196986)).
- **A Thai-majority "partner" company is risky if the partner is not genuine.**
  - Since 1 Aug 2026, DBD order 2/2569 requires investment statements and proof of the source of funds when foreigners hold under 50% or sign for the company ([DFDL](https://www.dfdl.com/insights/legal-and-tax-updates/thailand-introduces-additional-registration-requirements-to-combat-nominee-arrangements/); [LawPlus](https://www.lawplusltd.com/?p=10552); search summaries).
  - A deportation regulation in force from 28 Aug 2026 lets the state deport foreigners convicted of illegal business under the Foreign Business Act ([Rajah & Tann](https://www.rajahtannasia.com/?p=196986)).
- **The founder would not live in Thailand.** A foreign director working in Thailand needs a work permit, which needs about 2 million baht of capital per permit and Thai staff ratios ([Thai Law Online](https://www.thailawonline.com/company-registration-cost-thailand/), search summary; ratio unverified).

**Triggers to revisit (any one):**
- more than 25% of qualified leads refuse card or foreign invoicing;
- reseller sales pass about 600,000 baht a year, where the reseller's 25% margin costs more than running a company;
- a bank, insurer or large agency partner demands a Thai counterparty;
- the PDPA representative question comes back "yes, and it must be a company".

### If one is needed: options and real costs

| Option | Ownership | Capital | One-off cost | Time | Ongoing cost | Fit |
|---|---|---|---|---|---|---|
| **A. Thai reseller, no entity** | none | none | reseller agreement (lawyer review in the 80,000 baht fixed fee) | 2-4 weeks | 25% margin on its sales | **Use first** |
| B. Thai Co., Ltd. with a genuine Thai majority partner | up to 49% foreign | no legal minimum (2 promoters; shares at least 5 baht); typical 1 million baht with 25% paid ([FlowAccount](https://flowaccount.com/blog/how-to-register-a-company-via-dbd-e-registration/)) | Official fees: memorandum 50 baht per 100,000 of capital (minimum 500); registration 500 per 100,000 (minimum 5,000) ([ownpropertyabroad](https://ownpropertyabroad.com/thailand/register-a-thai-limited-company), search summary). That is 5,500 baht for 1 million of capital, about 6,300 with the articles ([FlowAccount](https://flowaccount.com/blog/how-to-register-a-company-via-dbd-e-registration/)). Lawyer: 45,000 baht ([Thai Law Online](https://www.thailawonline.com/company-registration-cost-thailand/)); range 30,000-100,000 ([Viettonkin](https://viettonkinconsulting.com/business-incorporation/thailand-business-setup-costs/)); search summaries | 3-5 working days at DBD; 14-21 working days through a law firm | Bookkeeping 2,500-8,000 baht a month by volume ([LINE shop listing](https://page.line.me/295yagcq/showcase/1053705597293077/item/1650000041521144)) or 5,000-10,000 ([Viettonkin](https://viettonkinconsulting.com/business-incorporation/thailand-business-setup-costs/)); audit from 25,000 a year (same); tax returns and VAT about 40,000 a year ([BOI CoDB 2026](https://www.boi.go.th/upload/content/Cost_of_Doing_Business_2026.pdf)). **About 100,000-180,000 baht a year** (my estimate) | Only with a real Thai co-founder who invests; anti-nominee checks apply |
| C. 100% foreign Thai company with BOI promotion | 100% | BOI category 5.10, "development of software, platforms for digital services or digital content" ([Tilleke](https://www.tilleke.com/insights/thailand-clarifies-rules-on-digital-platform-investment-promotion)). Minimum investment about 1-1.5 million baht and Thai IT staff conditions (search summary; unverified) | DBD fees as B; BOI application plus Foreign Business Certificate 22,000 baht ([BOI CoDB 2026](https://www.boi.go.th/upload/content/Cost_of_Doing_Business_2026.pdf)); lawyer about 100,000-200,000 baht (unverified) | 2-4 months (unverified) | B plus BOI reporting; a Thai developer or support salary to meet the conditions | Year 3+, if Thailand becomes the regional base |
| D. 100% foreign company with a Foreign Business Licence | 100% | 3 million baht or more ([Tilleke](https://www.tilleke.com/insights/updated-minimum-capital-provisions-foreign-companies-thailand/22/)) | licence fee 20,000-250,000 ([BOI CoDB 2026](https://www.boi.go.th/upload/content/Cost_of_Doing_Business_2026.pdf)) plus lawyer | discretionary; months (unverified) | as B | Not worth it |

**In person versus a lawyer remotely.**
- Since 1 Jul 2025, DBD accepts company registrations only online, through DBD Biz Regist ([Baker McKenzie](https://insightplus.bakermckenzie.com/bm/mergers-acquisitions_5/thailand-dbd-biz-regist-launches-on-1-july-2025), search summary).
- Identity is checked through the ThaID, NDID or DBD e-Service apps, or in front of a registrar (search summary of the same sources).
- A foreigner without ThaID would either verify in person at a DBD office or act through a lawyer under a notarised power of attorney (unverified).
- **Doing it yourself in person:** about 6,300 baht in official fees, plus translations, plus a trip.
- **Doing it remotely with a lawyer:** about 45,000-50,000 baht plus official fees, plus notarising the power of attorney abroad (cost unverified).
- Opening a Thai company bank account usually needs a director in person (unverified).

**Corporate tax if a Thai company is set up.** A small company (paid-up capital up to 5 million baht, revenue up to 30 million) pays 0% on the first 300,000 baht of net profit, 15% up to 3 million baht and 20% above that. Thai VAT registration is needed above 1.8 million baht of revenue ([BOI CoDB 2026](https://www.boi.go.th/upload/content/Cost_of_Doing_Business_2026.pdf)).

**PDPA representative (applies with or without a company).**
- The PDPA reaches foreign controllers and processors that offer services to people in Thailand. Those in scope must appoint a written representative in Thailand (s.37(5), with a parallel duty for processors) ([Lexbangkok](https://lexbangkok.com/pdpa-local-representative-thailand/); [Mondaq](https://www.mondaq.com/data-protection/933014/the-thai-personal-data-protection-act-pdpa); search summaries).
- The small-business relief found covers only records of processing (s.39), not the representative ([Forvis Mazars](https://forvismazars.com/th/en/insights/doing-business-in-thailand/legal/small-enterprises-exempt-from-preparing-records), search summary).
- Here the processing is of workers' data for Thai employer-controllers. Whether that triggers the representative duty for the vendor is for the Thai lawyer to answer (unverified).
- The model budgets 3,000 baht a month for a representative or DPO service (my estimate). This does not need a Thai company.

---

## Contracts and liability

- **Contract set:**
  - online terms of service in Thai and English (click-accept);
  - a data processing agreement;
  - an acceptable-use policy;
  - a reseller agreement;
  - a short pilot agreement.
- **Governing law and disputes.**
  - Use the EU company's law and courts, or online arbitration for Agency deals.
  - Thailand is a party to the New York Convention, so arbitral awards are enforceable there (unverified). Foreign court judgments are not directly enforced in Thailand (unverified).
  - In practice, prepayment and service suspension are the collection tools. Do not plan to sue anyone over a 9,900-baht plan.
- **What the product promises, and what it does not:**
  - It is decision support and record keeping. The customer files on e-WorkPermit, in its own name or its client's.
  - Rules packs cite the source (cabinet resolution, DOE or PRD notice) and the date checked.
  - There is no promise of approval, of a queue slot or of a deadline being met.
  - The DOE may change dates at short notice. The customer must check the official notice.
- **Liability cap.** Cap liability at the fees paid in the past 12 months. Exclude indirect loss and fines imposed on the customer's clients.
  - Thailand's Unfair Contract Terms Act B.E. 2540 enforces onerous standard-form terms only to the extent they are fair and reasonable ([Chambers](https://practiceguides.chambers.com/practice-guides/international-arbitration-2025/thailand/trends-and-developments), search summary).
  - Under the same Act, liability for death or injury caused by negligence cannot be excluded ([IIUM paper](https://irep.iium.edu.my/54623/), search summary).
  - Whether a negotiated B2B cap falls under the Act at all is unclear (unverified). Keep the cap reasonable: 12 months of fees, with a higher cap for data breaches caused by the vendor (for example 3 × annual fees).
- **Data processing terms (PDPA).**
  - The customer (the employer, or the proxy acting for it) is the controller. The vendor is the processor (part 01).
  - Health data is sensitive.
  - Help the controller notify a breach within 72 hours (part 01).
  - List sub-processors and data location.
  - Delete data 5 years after a worker leaves by default, or at the controller's instruction (part 01).
  - Provide worker notices and consent text in Burmese, Lao and Vietnamese.
- **Ethics clauses.** The customer must not use the tool to:
  - hold workers' passports or permits (RO s.131);
  - charge workers fees beyond the law (s.42, s.111, s.114);
  - trade in queue slots.

  Breach allows termination ([RO text](https://www.drthawip.com/book/export/html/3263), via part 01). This also protects the brand. The agent trade is tied to worker exploitation ([Five Corridors Project](https://fivecorridorsproject.org/myanmar-thailand/myanmar-thailand-tackling-fraud-abuse), via the B1 report).
- **Insurance.** Professional indemnity plus cyber cover through the EU company. The model budgets 40,000 baht a year (my estimate; get quotes).

---

## Financial model

### Assumptions

| Assumption | Low | Base | High | Basis |
|---|---|---|---|---|
| Buyer pool | about 330 import companies, 1,800-3,500 multi-client proxies, 10,000-20,000 employers with 20+ migrants | same | same | Part 02 estimates from [Daily News](https://www.dailynews.co.th/news/5314014/) |
| New paying accounts, years 1 / 2 / 3 | 45 / 55 / 50 | 90 / 120 / 110 | 150 / 200 / 180 | My estimate |
| Seasonality of new sales | Jan 1.2, Feb 1.2, Mar 1.0, Apr 0.5, May 0.7, Jun 0.9, Jul 0.8, Aug 1.2, Sep 1.4, Oct 1.4, Nov 1.0, Dec 0.7. In Nov-Dec 2026 pilots are free and no accounts are paid | same | same | Cohort calendar above |
| Monthly churn (from month 4) | 4.0% (about 39% a year) | 2.5% (about 26%) | 1.8% (about 20%) | My estimate; seasonal filers churn |
| ARPA, net, years 1 / 2 / 3 (baht a month) | 750 / 950 / 1,000 | 900 / 1,150 / 1,250 | 1,000 / 1,300 / 1,450 | Plan mix; founding discount in year 1 |
| Build | Founder plus AI agents; no developer salaries. AI tools 10,000 baht a month in months 1-3, then 5,000 | same | same | Owner's model; my estimate of tool costs |
| Hosting, backups, monitoring, email and SMS | 3,000 / 5,000 / 7,000 baht a month in years 1 / 2 / 3 | same | same | My estimate |
| LINE OA and extra messages | 2,500 a month | same | same | [yespress.io](https://yespress.io/line-company-thailand) (search summary) |
| Translation updates (Burmese, Lao, Vietnamese) | 3,500 a month on average | same | same | My estimate |
| Thai lawyer | 80,000 in months 1-2, then a 5,000 a month retainer for each new resolution | same | same | BOI: contract review from 50,000 ([BOI CoDB 2026](https://www.boi.go.th/upload/content/Cost_of_Doing_Business_2026.pdf)) |
| Security test | 100,000 in month 2; 60,000 retests in months 13 and 25 | same | same | My estimate |
| PDPA representative or DPO service | 3,000 a month | same | same | My estimate (need unverified) |
| Insurance | 40,000 a year | same | same | My estimate |
| Home-company bookkeeping share | 5,000 a month | same | same | My estimate |
| Thai contractor (sales, support, rules desk), from month 2 | 20,000 / 30,000 / 35,000 a month | 25,000 / 45,000 / 60,000 | 30,000 / 60,000 / 90,000 | BOI junior customer-service pay 25,000-40,000 ([BOI CoDB 2026](https://www.boi.go.th/upload/content/Cost_of_Doing_Business_2026.pdf)) |
| Marketing, years 1 / 2 / 3 | 240,000 / 200,000 / 200,000 | 330,000 / 300,000 / 300,000 | 450,000 / 420,000 / 420,000 | Plan above |
| Payment fees | 6% of revenue | same | same | [Stripe IE](https://stripe.com/ie/pricing) |
| Partner commissions | 4% | 5% | 6% | Reseller margin 25% on about 20% of sales |
| Withholding-tax leakage | 2% | 1% | 0.5% | Company buyers who withhold; may be creditable at home |
| Founder pay | none in the main tables; a variant is below | | | |

Method notes:
- Month 1 is November 2026 and month 36 is October 2029. The model runs by month. Set-up costs from 12-31 Oct 2026 (interviews, the first lawyer instalment, the contractor's first weeks) are folded into months 1-2.
- "Cash in" equals revenue recognised monthly. Yearly prepayment would bring cash forward, so this is conservative.
- Prices are net of VAT. Once the seller is registered, VAT is a pass-through.
- The script is in the session scratchpad, not in the repo.

### Base case by quarter (no founder pay)

| Quarter | New | Churned | Active (end) | Revenue (cash in) | ARR (end) | Costs | Net | Cumulative cash |
|---|---|---|---|---|---|---|---|---|
| Q1 Nov26-Jan27 | 7 | 0 | 7 | 6,088 | 73,052 | 409,231 | -403,143 | -403,143 |
| Q2 Feb-Apr27 | 23 | 1 | 29 | 62,038 | 309,958 | 255,945 | -193,906 | -597,049 |
| Q3 May-Jul27 | 23 | 3 | 49 | 112,788 | 525,005 | 262,035 | -149,247 | -746,296 |
| Q4 Aug-Oct27 | 38 | 4 | 82 | 189,697 | 882,889 | 271,264 | -81,567 | -827,862 |
| Q5 Nov27-Jan28 | 29 | 7 | 104 | 331,509 | 1,436,595 | 406,781 | -75,272 | -903,134 |
| Q6 Feb-Apr28 | 27 | 8 | 123 | 410,325 | 1,692,495 | 356,239 | 54,086 | -849,049 |
| Q7 May-Jul28 | 24 | 10 | 137 | 455,510 | 1,892,030 | 361,661 | 93,849 | -755,199 |
| Q8 Aug-Oct28 | 40 | 11 | 166 | 538,020 | 2,292,639 | 371,562 | 166,458 | -588,742 |
| Q9 Nov28-Jan29 | 27 | 13 | 180 | 655,480 | 2,699,287 | 496,658 | 158,822 | -429,920 |
| Q10 Feb-Apr29 | 25 | 14 | 191 | 710,226 | 2,861,525 | 443,227 | 266,999 | -162,921 |
| Q11 May-Jul29 | 22 | 14 | 198 | 733,205 | 2,974,386 | 445,985 | 287,220 | 124,299 |
| Q12 Aug-Oct29 | 37 | 15 | 220 | 794,984 | 3,293,878 | 453,398 | 341,586 | 465,885 |

Year totals (base): revenue 0.37 / 1.74 / 2.89 million baht; costs 1.20 / 1.50 / 1.84 million; net -0.83 / +0.24 / +1.05 million.

### Low case by quarter (no founder pay)

| Quarter | New | Churned | Active (end) | Revenue | ARR (end) | Costs | Net | Cumulative cash |
|---|---|---|---|---|---|---|---|---|
| Q1 | 3 | 0 | 3 | 2,537 | 30,438 | 376,304 | -373,768 | -373,768 |
| Q2 | 12 | 1 | 14 | 25,429 | 126,055 | 214,051 | -188,622 | -562,390 |
| Q3 | 11 | 2 | 23 | 45,198 | 209,145 | 216,424 | -171,225 | -733,616 |
| Q4 | 19 | 3 | 39 | 74,995 | 347,796 | 219,999 | -145,004 | -878,620 |
| Q5 | 13 | 5 | 47 | 125,303 | 535,728 | 312,036 | -186,733 | -1,065,354 |
| Q6 | 12 | 6 | 53 | 149,268 | 608,047 | 254,912 | -105,644 | -1,170,998 |
| Q7 | 11 | 7 | 58 | 160,119 | 658,613 | 256,214 | -96,095 | -1,267,093 |
| Q8 | 18 | 7 | 69 | 184,929 | 783,857 | 259,191 | -74,263 | -1,341,356 |
| Q9 | 12 | 8 | 72 | 212,935 | 869,687 | 343,552 | -130,617 | -1,471,973 |
| Q10 | 11 | 9 | 75 | 225,145 | 897,739 | 285,017 | -59,872 | -1,531,846 |
| Q11 | 10 | 9 | 76 | 226,042 | 909,718 | 285,125 | -59,083 | -1,590,929 |
| Q12 | 17 | 9 | 83 | 241,390 | 997,356 | 286,967 | -45,577 | -1,636,505 |

### High case by quarter (no founder pay)

| Quarter | New | Churned | Active (end) | Revenue | ARR (end) | Costs | Net | Cumulative cash |
|---|---|---|---|---|---|---|---|---|
| Q1 | 11 | 0 | 11 | 11,273 | 135,282 | 449,909 | -438,636 | -438,636 |
| Q2 | 39 | 1 | 48 | 115,767 | 580,503 | 307,971 | -192,204 | -630,840 |
| Q3 | 38 | 3 | 83 | 212,713 | 992,920 | 320,089 | -107,377 | -738,216 |
| Q4 | 63 | 5 | 140 | 360,127 | 1,679,049 | 338,516 | 21,611 | -716,605 |
| Q5 | 48 | 8 | 180 | 646,178 | 2,808,451 | 522,772 | 123,406 | -593,200 |
| Q6 | 45 | 11 | 214 | 807,520 | 3,345,698 | 482,940 | 324,580 | -268,620 |
| Q7 | 40 | 12 | 242 | 907,341 | 3,781,557 | 495,418 | 411,923 | 143,304 |
| Q8 | 67 | 14 | 295 | 1,078,820 | 4,603,324 | 516,853 | 561,968 | 705,272 |
| Q9 | 44 | 16 | 322 | 1,358,319 | 5,606,476 | 707,790 | 650,530 | 1,355,801 |
| Q10 | 40 | 18 | 345 | 1,482,646 | 5,997,971 | 663,331 | 819,315 | 2,175,116 |
| Q11 | 36 | 19 | 362 | 1,547,211 | 6,295,530 | 671,401 | 875,810 | 3,050,926 |
| Q12 | 60 | 20 | 402 | 1,685,600 | 6,987,903 | 688,700 | 996,900 | 4,047,827 |

### Scenario summary

| Measure | Low | Base | High |
|---|---|---|---|
| Paying accounts at month 6 / 12 / 24 / 36 | 14 / 39 / 69 / 83 | 29 / 82 / 166 / 220 | 48 / 140 / 295 / 402 |
| ARR at month 12 / 24 / 36 (baht) | 0.35 / 0.78 / 1.00 million | 0.88 / 2.29 / 3.29 million | 1.68 / 4.60 / 6.99 million |
| Revenue, years 1 / 2 / 3 (baht) | 0.15 / 0.62 / 0.91 million | 0.37 / 1.74 / 2.89 million | 0.70 / 3.44 / 6.07 million |
| Costs, years 1 / 2 / 3 (baht) | 1.03 / 1.08 / 1.20 million | 1.20 / 1.50 / 1.84 million | 1.42 / 2.02 / 2.73 million |
| Profit before founder pay, year 3 (baht) | -0.30 million | **+1.05 million** (about USD 32,000) | +3.34 million (about USD 100,000) |
| Break-even (trailing 12 months) | not within 36 months | month 22 (Aug 2028) | month 16 (Feb 2028) |
| Cumulative cash positive for good | not within 36 months | month 32 (Jun 2029) | month 21 (Jul 2028) |
| **Peak cash need, no founder pay (baht)** | 1.64 million and still falling | **0.91 million** (USD 27,000; about EUR 24,000) | 0.75 million |
| Peak cash need with founder pay of 50,000 then 80,000 baht a month in years 2 and 3 | 3.2 million, never recovers | 1.27 million; still -1.09 million at month 36 | 0.78 million; +2.5 million at month 36 |
| Blended acquisition cost, year 1 (marketing + half the contractor + commissions, per new account) | about 7,900 baht | about 5,400 baht | about 4,400 baht |

Unit economics (base, my estimate):
- **Gross margin about 84%.** Payment fees, commissions, withholding leakage, hosting and LINE come to about 16% of revenue.
- **Payback about 6 months.** Year-2 ARPA is 1,150 baht a month, which gives about 965 baht a month of gross profit against an acquisition cost of about 5,400 baht.
- **Lifetime value about 39,000 baht.** At 2.5% monthly churn an account stays about 40 months. LTV/CAC is about 7.
- **The constraint is the small pool and the seasonality, not unit economics.** Base month 36 has 220 accounts: about 7-12% of the realistic professional-filer pool (my estimate).

What the numbers mean:
- **Cash need is moderate.** Plan about **1 million baht** (EUR 26,000). Add about 0.4 million if the founder needs pay from year 2.
- **Most of the year-1 cost is fixed.** The contractor, the lawyer, the security test and marketing make up about 70% of year-1 costs. If interviews fail in October 2026, stop before the security test and the contractor's second month. The loss is then under 150,000 baht.
- **The base case pays the founder modestly only from year 3.** Year-3 profit of about 1 million baht is roughly EUR 28,000. Bigger income needs the high case, the expat-permit segment or a second country.
- **The low case shows itself early.** By month 6 there would be about 14 accounts against a base of 29. That is the kill signal below.

---

## Regional expansion

Order: **deepen Thailand first. Look at an expat-permit module from about month 18. Consider Malaysia only with an agent partner, after month 24.**

1. **Thailand, adjacent segment: expat work permits.**
   - Non-B and BOI permits use the same e-WorkPermit system ([EY](https://www.ey.com/en_gl/technical/tax-alerts/thailand-launches-online-platform-for-work-permit-applications), via part 02).
   - Law and visa firms sell this tracking work, for example Issa Compass ([Issa Compass](https://www.issacompass.com/insights/thailand-work-permit-compliance-for-companies-what-hr-teams-must-know-to-avoid-f), via the B1 report).
   - The same multi-client engine fits visa firms. Pricing per active foreigner can be higher, because those buyers are less price-sensitive (unverified).
2. **Malaysia.**
   - 2.35 million temporary work passes were issued in 2025 through the state FWCMS system ([The Vibes](https://www.thevibes.com/articles/news/119365/foreign-worker-system-nets-rm381m-in-fees-as-government-touts-transparency-gains), via part 02).
   - Malaysian HR vendors already bundle permit-expiry reminders at about RM3 per staff a month ([Info-Tech](https://www.info-tech.com.my/pricing), via part 02).
   - Only an agent back office could fit there.
   - Payments are simpler through Paddle, which collects Malaysian SST (8%) on both business and consumer sales ([Paddle tax list](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)).
   - Enter only with a local agency partner.
3. **Sending countries (Myanmar, Laos, Cambodia, Vietnam).** Their agencies have different duties (part 02). Not the same product.
4. **Cambodian workers in Thailand.** They are on a separate humanitarian track (part 01). Add them to the rules engine when a renewal route appears.

---

## Exit and partnerships

**Partnerships (years 1-2):**
- **Thai accounting offices:** reseller and referral partners (above).
- **Smaller licensed import companies:** white-label for their client employers. They get "a JOBS Workspace of their own" ([JOBS](https://www.jobsworkerservice.com/document-tracking/) shows what the large ones built).
- **DOE-linked hospitals and migrant health insurers:** a point-of-need referral (terms unknown; unverified).
- **Thai HR and payroll vendors** (HumanSoft, Wansook): an integration that sends permit status into payroll. They have no migrant-permit module ([HumanSoft](https://www.humansoft.co.th/th/blog/time-attendance-for-line); [Wansook](https://www.wansook.com/); via part 02).

**Likely acquirers (years 3-5):**
- **Fast and Easy Co., Ltd. (workdoc's owner).** It could add a multi-client mode and the proxy customer base ([workdoc about](https://www.workdoc.cloud/about), via part 02).
- **Thai HR and payroll SaaS vendors.** For them this would be a migrant-workforce module with a sticky, compliance-driven base.
- **A large licensed agency.** Less likely, because the big ones built their own tools.
- **A Thai accounting SaaS** such as FlowAccount or PEAK, which already serve SMEs ([FlowAccount pricing](https://flowaccount.com/th/pricing), search summary). It would buy for the product line. A weak fit.

**Value.**
- Small bootstrapped SaaS businesses under USD 1 million of ARR sell for about 2.5-4x revenue, or 4-6x owner earnings when the business depends on the owner ([beancount.io](https://beancount.io/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide), search summary; vendor blog citing marketplace data).
- Base case at month 36: ARR 3.3 million baht, so about **8-13 million baht** (USD 250,000-400,000).
- High case: about 17-28 million baht.
- Low case: an asset sale of the rules content and customer list.
- **Make the business sellable:**
  - keep the rules engine and the content separate from the founder;
  - document the 48-hour resolution workflow;
  - put the Thai contractor on a written contract with an assignable rules desk.

---

## Risks and mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Proxies will not pay a monthly fee; they stay on Excel and free agent tools | medium-high | high | Season Pass per worker filed; free plan; prove time saved in pilots; kill criteria at day 30 and month 6 |
| workdoc adds a multi-client agent mode | medium | high | Move first in the agent niche; stay neutral (no agency owner); lower per-worker price; faster rules packs |
| The DOE adds bulk agent views and expiry reminders to e-WorkPermit | low-medium | high | Focus on what the portal will not do: the multi-client book, pre-filing checks, the POA generator, client billing, worker notices in three languages. The operator dispute slows portal change ([Post Today](https://www.posttoday.com/general-news/748152), via part 02) |
| Policy churn: cohorts merged, dates moved at short notice | high | medium | A versioned rules table; the 48-hour publishing workflow; the lawyer's retainer; sources and dates shown on each rule |
| Card refusal or low card ownership among proxies | medium | medium | Thai reseller with PromptPay from day 60; review at month 12 whether a Thai entity is needed |
| Withholding tax and tax-invoice demands from company buyers | medium | medium | Reseller; treaty-rate certificate; a Thai FAQ; Agency deals by invoice |
| VAT threshold crossed without noticing | low | medium | Stripe Tax monitoring; decide VES or Paddle at month 18 |
| PDPA breach involving passport and health data | low | very high | Security test before launch; encryption; least-privilege roles; a data processing agreement; breach playbook; cyber insurance; hosting choice reviewed by the lawyer |
| Legal-shape risk: seen as a broker, or as doing business in Thailand without a licence | low | high | Never file in our own name; sell software only; the contractor signs nothing; lawyer's opinion on RO s.5 and s.26 and on the Foreign Business Act in month 1 |
| Reputation: tied to exploitative agents | medium | medium | Ethics clauses; transparent fees; worker notices in their own language; no queue-slot trade |
| Seasonal churn after each wave | high | medium | Yearly plans at 10 × monthly; s.13 and passport tracking keep the tool in use between waves |
| Founder abroad, not Thai-speaking (assumed) | high | medium | A Thai contractor from month 2; two trips a year; a Thai lawyer on retainer |

---

## Milestones and kill criteria

| Date | Milestone (base) | Kill or rethink if |
|---|---|---|
| 25 Oct 2026 (day 14) | 20 interviews booked; lawyer instructed; Stripe and LINE live | Fewer than 12 interviews possible: no access to the segment |
| **11 Nov 2026 (day 30)** | MVP built; at least 5 pilot commitments; at least 3 say they will pay 990 or more | **Fewer than 2 pilots, or most interviewees refuse any monthly fee: stop** (loss under 150,000 baht) |
| 6 Dec 2026 | Security test passed; pilots onboarded | Critical findings not fixed: delay launch |
| **9 Jan 2027 (day 90)** | At least 5 pilots used it in December; at least 3 founding accounts paid | Fewer than 2 paid: narrow to a done-for-you service or stop |
| 31 Mar 2027 | 20 paying accounts; reseller live | |
| **30 Apr 2027 (month 6)** | 29 paying accounts | **Fewer than 12: stop or pivot** |
| 31 Oct 2027 (month 12) | 82 paying; ARR about 0.9 million baht | **Fewer than 35: stop.** Fewer than 60: cut marketing to the low budget |
| Nov 2027 | 12-month retention measured | **Fewer than 50% of first-year accounts still paying: stop** |
| Apr 2028 (month 18) | VES or Paddle decision; Thai-entity decision; expat module decision | |
| Oct 2029 (month 36) | 220 paying; ARR about 3.3 million; cash positive | Below the low case (83): sell the assets |

---

## Open questions

1. **Willingness to pay of proxies and small import companies.** Monthly subscription or per-filing? This is the single most important test. Answer it in the October 2026 interviews.
2. **Who the 17,619 proxies are.** Are they individuals or companies, and how many serve more than 5 employers? This decides the withholding-tax exposure and the size of the pool (part 02).
3. **Card use.** Will Thai proxies pay a foreign merchant by card? What share needs PromptPay or a Thai tax invoice?
4. **Withholding tax on SaaS.** Is a subscription a royalty under s.40(3), or a service performed abroad? Must individual payers withhold? What is the treaty rate for the founder's actual country? (Thai tax adviser.)
5. **The PDPA representative.** Does a foreign processor of Thai employers' worker data need a Thai representative under s.37(5) or s.38? Does hosting in Thailand rather than Singapore or the EU change the answer? (Thai lawyer.)
6. **The licence question.** Is renewal software or a done-for-you import service outside the licensed activity of "bringing foreigners to work" (RO s.5 and s.26)? (Part 01, open question 3.)
7. **workdoc's roadmap.** Does it plan a multi-client agent mode? Does it charge VAT? (Demo in week 1.)
8. **Partners.** Is there any association of import companies or proxies? None was found. What terms would DOE-linked hospitals or migrant insurers accept?
9. **BOI category 5.10.** What are the current minimum investment and Thai staffing conditions, if a Thai entity is ever needed? (Unverified.)
10. **Stripe Managed Payments.** Is it available to the founder's company, and does it cover Thai VAT in a way that beats Paddle?
11. **Paddle and Thai B2B buyers.** Does Paddle let a Thai buyer with a VAT ID avoid VAT at checkout? Its table marks Thailand "B2C" only.

---

## Sources

Opened and read in this part:
- https://rd.go.th/38501.html (Revenue Department ruling กค 0702/2891)
- https://flowaccount.com/blog/google-workspace-tax-pnd54-pp36/
- https://flowaccount.com/blog/how-to-register-a-company-via-dbd-e-registration/
- https://stripe.com/ie/pricing
- https://stripe.com/th/pricing
- https://docs.stripe.com/tax/supported-countries/asia-pacific/thailand
- https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/
- https://developer.paddle.com/concepts/sell/supported-currencies.md
- https://www.paddle.com/pricing
- https://docs.lemonsqueezy.com/help/getting-started/fees
- https://www.rajahtannasia.com/?p=196986
- https://www.boi.go.th/upload/content/Cost_of_Doing_Business_2026.pdf (downloaded; text extracted)
- https://www.tilleke.com/insights/thailand-clarifies-rules-on-digital-platform-investment-promotion
- https://www.workdoc.cloud/pricing
- https://www.krungsri.com/th/personal/banking-services/international-remittance/swift-international-remittance

Search summaries only (not opened):
- https://docs.stripe.com/payments/promptpay
- https://www.boi.go.th/upload/content/guidebook_617a70536ae5d.pdf
- https://eservice.rd.go.th/rd-ves-web/landing (named in Stripe's page)
- https://marketeeronline.co/archives/344124 ; https://marketeeronline.co/archives/138044 ; https://www.prachachat.net/finance/news-1514119 ; https://www.bangkokbiznews.com/finance/investment/1115852
- https://www.tilleke.com/insights/updated-minimum-capital-provisions-foreign-companies-thailand/22/ ; https://tagalliances.com/specialty-groups/corporate-and-m-a/7138-minimum-capital-requirements-for-foreign-companies-in-thailand-updated
- https://www.thailandstarterkit.com/entrepreneur/
- https://www.thailawonline.com/company-registration-cost-thailand/ ; https://ownpropertyabroad.com/thailand/register-a-thai-limited-company ; https://viettonkinconsulting.com/business-incorporation/thailand-business-setup-costs/
- https://page.line.me/295yagcq/showcase/1053705597293077/item/1650000041521144
- https://insightplus.bakermckenzie.com/bm/mergers-acquisitions_5/thailand-dbd-biz-regist-launches-on-1-july-2025
- https://www.dfdl.com/insights/legal-and-tax-updates/thailand-introduces-additional-registration-requirements-to-combat-nominee-arrangements/ ; https://www.lawplusltd.com/?p=10552
- https://yespress.io/line-company-thailand
- https://searchlab.nl/en/statistics/facebook-ads-statistics-2026
- https://longforecast.com/usd-to-bht-today-forecast ; https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/eurofxref-graph-thb.fi.html
- https://www.bangkokbiznews.com/news/news-update/1244976 ; https://www.posttoday.com/general-news/746045
- https://flowaccount.com/blog/pnd54-withholding-tax/
- https://flowaccount.com/th/pricing
- https://intercom.help/peak/en/articles/8353614-ส-งหนังสือหัก-ณ-ที-จ-าย-ค-าบริการให-peak
- https://lexbangkok.com/pdpa-local-representative-thailand/ ; https://www.mondaq.com/data-protection/933014/the-thai-personal-data-protection-act-pdpa ; https://forvismazars.com/th/en/insights/doing-business-in-thailand/legal/small-enterprises-exempt-from-preparing-records
- https://beancount.io/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide
- https://wise.com/gb/account/thb-account
- https://dodopayments.com/blogs/stripe-managed-payments-fees-explained ; https://docs.stripe.com/changelog/dahlia/2026-04-22/managed-payments.md
- https://practiceguides.chambers.com/practice-guides/international-arbitration-2025/thailand/trends-and-developments ; https://irep.iium.edu.my/54623/
- https://www.prd.go.th/th/content/category/detail/id/39/iid/481205 ; https://www.prd.go.th/th/content/category/detail/id/39/iid/531308

Carried over from the B1 report and parts 01-02 (not re-checked here):
- https://www.dailynews.co.th/news/5314014/ ; https://www.passport.co.th/service/renew-workpermit-31march2026/ ; https://www.passport.co.th/service/foreign-worker-renewal-2026/ ; https://www.workdoc.cloud/course ; https://www.workdoc.cloud/about ; https://www.workdoc.cloud/blog/mou-renewal-cost-breakdown ; https://fastandeasymou.org/ ; https://www.jobsworkerservice.com/document-tracking/ ; https://www.jobsworkerservice.com/migrant-worker-fees/ ; https://www.chaiyomanpower.com/ ; https://www.wansook.com/ ; https://www.humansoft.co.th/th/blog/time-attendance-for-line
- https://www.bangkokbiznews.com/news/news-update/1250827 ; https://www.bangkokbiznews.com/news/news-update/1247207 ; https://www.nationthailand.com/news/policy/40069723 ; https://www.thaipost.net/general-news/907398/ ; https://www.thaipost.net/general-news/955747/ ; https://www.infoquest.co.th/?p=625642
- https://www.drthawip.com/book/export/html/3263 ; https://www.matichon.co.th/local/news_2049383
- https://www.naewna.com/local/972023 ; https://www.naewna.com/politic/950084 ; https://www.posttoday.com/general-news/748152
- https://fivecorridorsproject.org/myanmar-thailand/myanmar-thailand-tackling-fraud-abuse ; https://www.issacompass.com/insights/thailand-work-permit-compliance-for-companies-what-hr-teams-must-know-to-avoid-f ; https://www.ey.com/en_gl/technical/tax-alerts/thailand-launches-online-platform-for-work-permit-applications
- https://www.thevibes.com/articles/news/119365/foreign-worker-system-nets-rm381m-in-fees-as-government-touts-transparency-gains ; https://www.info-tech.com.my/pricing
