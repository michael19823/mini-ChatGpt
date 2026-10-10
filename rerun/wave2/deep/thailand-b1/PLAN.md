# Thailand: work-permit renewal desk for proxy filers and small agencies (Lao, Myanmar and Vietnamese workers on e-WorkPermit): full plan

This plan combines four deep-research parts, all written on 10 Oct 2026:

- [01 Law and product requirements](01-law-and-requirements.md) covers the Royal Ordinance, the cohorts set by cabinet resolutions, the e-WorkPermit filing flow and enforcement. It ends with 60 testable requirements, each traced to its legal basis.
- [02 Market and competition](02-market-and-competition.md) covers buyer counts, what buyers pay today, competitors (including workdoc, which earlier passes missed) and channels.
- [03 Product and technical design](03-product-and-tech.md) covers users, features, flows, screens, data sources, architecture, PDPA and security, the AI-agent work streams and the build budget.
- [04 Go-to-market, company and finance](04-gtm-company-finance.md) covers pricing, channels, the selling calendar, a 90-day plan, payments and tax, company setup, a 36-month model and kill criteria.

The lead report is [reports/thailand-b1.md](../reports/thailand-b1.md). Its re-assessment gave "maybe, 6/10".

How to read this plan:

- Every factual claim links to its source. The section files hold the full source lists.
- "My estimate" marks a number derived in the parts or here.
- "(unverified)" marks a claim that no source confirmed.
- Exchange rate: 1 USD = 33.3 baht ([longforecast, 16 Sep 2026](https://longforecast.com/usd-to-bht-today-forecast), search summary). 1 EUR is about 38 baht (unverified). Both are as used in part 04.

---

## 1. Decision in one page

**Verdict: maybe. It is worth a cheap test with clear stop points, aimed at proxies and small agencies who file for many employers. Do not build an expiry tracker for employers.**

**New score: 5/10.** The re-assessment gave 6/10 and the first pass 4/10. The deep dive weakens the case.

### What the deep dive changed

1. **A direct incumbent exists on the employer side.**
   - workdoc is a Thai SaaS for firms that employ migrant workers. It stores passports, visas and permits and reads them with OCR. It tags each worker by cohort and sends expiry alerts by LINE ([workdoc](https://www.workdoc.cloud/)).
   - It costs 500 baht a month for 10 workers and up to 6,000 baht a month for 500 ([workdoc pricing](https://www.workdoc.cloud/pricing)).
   - It claims 59+ businesses and 8,500+ workers ([workdoc about](https://www.workdoc.cloud/about)).
   - The re-assessment said no Thai software does this job. For employers, that was wrong.
   - The owner asks whether an incumbent is partial or overpriced. For one employer, workdoc is neither.
2. **The big agencies have their own tools.**
   - JOBS runs "JOBS Workspace": 91 screens, 8 roles, and alerts at 60, 30 and 7 days by LINE and email, in Thai, Burmese and Lao ([JOBS Workspace](https://www.jobsworkerservice.com/document-tracking/)).
   - passport.co.th gives its clients a free LINE tracker ([passport.co.th](https://www.passport.co.th/service/foreign-worker-renewal-2026/)).
   - workdoc itself belongs to Fast and Easy Co., Ltd., a licensed import agency ([fastandeasymou.org](https://fastandeasymou.org/)).
   - So the top of the agent segment competes with us. It will not buy.
3. **There are fewer buyers.**
   - The working pool is about 330 import companies plus an estimated 1,800-3,500 professional proxies. That is 10-20% of the 17,619 registered proxies (my estimate in part 02, from [Daily News](https://www.dailynews.co.th/news/5314014/)).
   - The re-assessment counted all 17,619 proxies, all 331 import companies and about 16,000 direct employers.
4. **Revenue is lower.** In the base case, recurring revenue reaches about 3.3 million baht a year at month 36 (part 04). The re-assessment estimated 4-9 million baht.
5. **A price anchor was found.**
   - A licensed agent charged 5,638-7,238 baht per worker, all in, for the 31 Mar 2026 renewal ([passport.co.th](https://www.passport.co.th/service/renew-workpermit-31march2026/)).
   - Its VAT lines imply a service fee of about 3,400-3,500 baht per worker before VAT (my inference in part 02).
   - The planned tool costs about 2-3% of that fee per worker a year (my arithmetic, §8).
   - That is a good value story, but no buyer has confirmed it yet.
6. **Filing stays manual.**
   - The portal has no public API, export or bulk function ([Exworker](https://www.exworker.co.th/en/blog/e-workpermit-en)).
   - Users must verify their identity with the ThaiD app ([Emerhub](https://emerhub.com/news/digital-work-permits-for-foreign-employees/)).
   - The portal sits behind Cloudflare bot protection (part 03).
   - So the product prepares, checks and tracks. A person still files by hand.
7. **We miss the current rush.**
   - The product will be sellable around 30 Nov 2026, too late to sell into the 11 Dec 2026 deadline.
   - The first paid season is January-March 2027, for the February and March cohorts. Their new cabinet resolutions are not yet published (part 01).
   - The main season is August-December 2027.
8. **The legal shape is clear enough.**
   - Software is outside the import-company licence (my reading of RO s.5 and s.26 in part 01; unverified).
   - Brokerage work is closed to foreigners ([Matichon](https://www.matichon.co.th/local/news_2049383), search snippet).
   - So we never file in our own name.
   - Under the PDPA, a foreign vendor may need a Thai representative ([Lexbangkok](https://lexbangkok.com/pdpa-local-representative-thailand/)).
9. **No Thai company is needed.**
   - The founder's EU company can sell through Stripe, priced in baht.
   - The friction is with company buyers:
     - they may have to withhold 15% (5% under some treaties) on software fees paid abroad ([RD ruling กค 0702/2891](https://rd.go.th/38501.html));
     - they cannot get a Thai tax invoice from a foreign seller.
   - A Thai accounting office acting as reseller fixes both.

### Why it is still worth a test

- **The duty is real, per worker, and recurs every year.**
  - About 770,000 workers are in the 11 Dec 2026 cohort alone ([InfoQuest](https://www.infoquest.co.th/?p=615165)).
  - About 3.1 million migrants held permission to work in March 2025 ([MWG and HRDF submission to OHCHR](https://www.ohchr.org/sites/default/files/documents/issues/business/workinggroupbusiness/cfis/labour-migration/subm-labour-migration-business-cso-migrant-wg.pdf)).
  - Employing a worker without a valid permit costs 10,000-100,000 baht per worker (RO s.102, [RO text](https://www.drthawip.com/book/export/html/3263)).
  - The DOE inspected 74,265 workplaces in FY2026 ([Bangkok Biznews](https://www.bangkokbiznews.com/news/1250192)).
- **The free portal leaves the filer's main work undone.** No source shows that it has:
  - a multi-client view;
  - a register across cohorts;
  - expiry reminders;
  - checks before filing;
  - a POA generator;
  - an export.

  Sources: [PRD English](https://thailand.prd.go.th/en/content/category/detail/id/2874/iid/429777) and [Exworker](https://www.exworker.co.th/en/blog/e-workpermit-en). The absence of these features is unverified.
- **Nobody sells a multi-client back office.**
  - workdoc's features page shows one company per account ([workdoc features](https://www.workdoc.cloud/features)).
  - JOBS Workspace is not for sale.
- **It is easy to build.**
  - There is no integration to build, because none is possible.
  - The app is a plain Django monolith.
  - The MVP takes about 3 weeks with parallel AI agents (part 03).
- **No local company is needed** (part 04).

### What it is worth

These figures come from the part 04 model. The founder builds with AI agents and takes no pay. Month 36 is October 2029.

| | Low | Base | High |
|---|---|---|---|
| Paying accounts at month 36 | 83 | 220 | 402 |
| Recurring revenue at month 36 (baht a year) | 1.0 million (USD 30,000) | **3.3 million (USD 99,000)** | 7.0 million (USD 210,000) |
| Revenue in year 3 (baht) | 0.91 million | 2.89 million | 6.07 million |
| Profit before founder pay, year 3 (baht) | −0.30 million | **+1.05 million (USD 32,000)** | +3.34 million (USD 100,000) |
| Peak cash need (baht) | 1.64 million; never pays back | **0.91 million (USD 27,000)** | 0.75 million |
| Break-even (trailing 12 months) | not within 36 months | month 22 (Aug 2028) | month 16 (Feb 2028) |

- **Base is a target, not an expectation.** It needs about 7-12% of the professional-filer pool within 3 years (part 04). That is ambitious for a founder who lives abroad and sells in Thai through a contractor.
- **On the base case this is a side business, not a living.** Year-3 profit of about 1 million baht is roughly EUR 28,000.
- **Exit.** Small bootstrapped SaaS sells for about 2.5-4× revenue ([beancount.io](https://beancount.io/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide), search summary). That is about 8-13 million baht in the base case. workdoc's owner or a Thai HR vendor would be the likely buyer.

### Key conditions

1. **Proxies and small import companies must pay.** They must accept a monthly fee, or at least a per-filing fee. Nobody has tested this. It is the biggest risk.
2. **Enough proxies must be professionals.** A meaningful share of the 17,619 registered proxies must file for 5 or more employers. Nobody knows the share (part 02).
3. **A Thai-speaking part-time contractor is hired.** Ideally an ex-agency document officer, from month 2. The contractor runs demos, LINE support and the rules desk. A founder abroad cannot sell this alone.
4. **A Thai lawyer confirms four points:**
   - renewal software is not a licensed recruitment activity;
   - whether we need a PDPA representative;
   - the VAT and withholding position;
   - the POA wording.
5. **New cabinet resolutions arrive on time.** The February and March 2027 cohorts need them, or the first paid season shrinks.

### What to do first (4 weeks; spend under 150,000 baht before the gate)

1. Hold 20 interviews by LINE call: 12 proxies, 5 small import companies and 3 employers with 20+ migrants. Ask:
   - which tools they use today;
   - how many minutes each worker takes;
   - what they would pay for 100 workers;
   - card or transfer;
   - whether they need a Thai tax invoice.
2. Book a workdoc demo. Check whether it has a multi-client mode, Burmese or Lao screens, and VAT on its invoices.
3. Build the MVP in parallel. With AI agents this costs little.
4. **The gate is Wednesday 11 Nov 2026.** Pass needs:
   - at least 5 pilot commitments;
   - at least 3 people who say they would pay 990 baht a month or more.

   Otherwise stop. The loss stays under 150,000 baht (part 04).

### Where the four parts disagree, and what this plan uses

| Topic | What the parts say | This plan uses | Why |
|---|---|---|---|
| Buyer pool | Report: 331 import companies, all 17,619 proxies, about 16,300 direct employers. Parts 02 and 04: about 330 import companies, 1,800-3,500 professional proxies, 10,000-20,000 employers with 20+ migrants | Parts 02 and 04 | Many proxies are likely employers' own staff or one-off filers (unverified). The big agencies have their own tools |
| Revenue, year 3 | Report: 4-9 million baht. Part 02: about 3.9 million (range 2-5). Part 04: 2.89 million revenue in year 3; 3.3 million recurring at month 36 | Part 04 | It is the only model run month by month with churn, seasons and costs. It sits inside part 02's range |
| Price | Report: 1,000 baht a month for 200 workers; 2,500 for import companies; 500 for direct employers. Part 02: 990 including 100 workers, plus 8 per extra worker. Part 04: Free; Pro Agent 990; Agency 2,990; Season Pass at 59 baht per worker | Part 04 | It is set against workdoc's per-worker rates. The report's 500-baht employer price equals workdoc's entry price, so it has no edge |
| Value against the agent's fee | Part 04 summary: "1-2%". Part 04 body: "3-7%" | About 2-3% a year on subscription; 1.7% on the Season Pass | My arithmetic. Pro Agent with yearly billing is 99 baht per worker a year, against a fee of about 3,450 |
| Build start and sellable date | Part 03: build from 12 Oct, MVP 1 Nov, sellable 30 Nov. Part 04: validate 12-25 Oct, build 26 Oct-15 Nov, sellable early December | Part 03's build dates, with part 04's gate | Building with agents is cheap. Costly items (security test, the contractor's second month) wait for the 11 Nov gate |
| What pilots do in the December rush | Part 03: we load their spreadsheet and give them the deadline radar and POA batches. Part 04: track only the steps after filing; do not change filing mid-rush | Offer both; expect part 04's | By November most filings in the 8 Sep-11 Dec window are done or under way |
| Speed of rule updates | Part 03: within 3 working days. Part 04: within 48 hours | Terms promise 3 working days. Aim for and market 48 hours | Legal review may not fit into 48 hours |
| Billing provider | Part 03 assumed Paddle. Part 04: Stripe from the EU company in baht first; Paddle near the VAT threshold | Part 04 | Paddle adds 7% Thai VAT for buyers without a VAT number from the first sale ([Paddle tax list](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)) |
| Interviews and pilots | Part 03: 10-12 interviews, 3-5 pilots. Part 04: 20 interviews, 5-8 pilot commitments | Part 04 | The kill criteria are built on these numbers |
| Lawyer | Part 03: 20-40 hours, about 60,000-200,000 baht. Part 04: 80,000-baht fixed fee | 80,000 fixed fee; risk up to 200,000 | Ask for a fixed fee |
| Security test | Part 03: USD 2,500-6,000 (83,000-200,000 baht). Part 04: 100,000 baht | 100,000 baht | Inside part 03's range |
| PDPA representative or DPO | Part 03: 30,000-120,000 baht a year. Part 04: 3,000 a month | 36,000 a year in the model; up to 120,000 as a risk | Quotes needed |
| Reminder timing | Part 01: 90, 60, 30, 14, 7 and 3 days, plus noon on the last day. Part 03: 60, 30, 14, 7, 3 and 1 days | 90, 60, 30, 14, 7, 3 and 1 days, plus noon on the last day | Covers both |
| Section 13 hire and exit notices | Part 03: v1. Part 04: in the Free plan | v1 (January 2027); in the Free plan from then | Keeps the MVP cut |
| Exchange rate | Part 03: 33. Part 04: 33.3 | 33.3 | Part 04 cites a source |
| Thai company | Part 03: a Thai company would remove the PDPA representative. Part 04: no Thai company in year 1 | No Thai company | A foreign-majority company needs a licence or BOI promotion, and anti-nominee checks now apply (§9) |
| Part 04's day-90 fallback: "narrow to a done-for-you service" | Part 01: brokerage is closed to foreigners, and filing needs a ThaiD-verified representative | Only through a Thai partner who files in its own name | Legal shape (§9) |

I ran no new web searches. None of these differences turns on a fact that a search would settle. They are planning choices or ranges.

---

## 2. Why now: the law and enforcement

### The law

- **One national law sets the duties.** It is the Royal Ordinance on Foreign Workers Management B.E. 2560 (2017), amended in 2018 ([RO text](https://www.drthawip.com/book/export/html/3263)).
- **There is no size exemption.** One worker is enough to trigger every duty ([RO text](https://www.drthawip.com/book/export/html/3263)).
- **Directors can be liable too** (s.132).

| Duty | Section | Deadline | Penalty |
|---|---|---|---|
| Employ only foreigners with a valid permit, within its scope (employer, job, workplace) | s.8, s.9 | Continuous | 10,000-100,000 baht per worker. A repeat offence brings up to 1 year in prison and/or 50,000-200,000 baht per worker, plus a 3-year ban on hiring foreigners (s.102) |
| Renew the permit before it expires; the worker may keep working while the renewal is pending | s.67 | Per cohort | A lapse falls under s.102 |
| Notify the registrar of each hire and each exit | s.13 | 15 days | Up to 20,000 baht (s.103) |
| Do not hold a worker's permit or ID documents | s.131 | Continuous | Up to 6 months and/or 10,000-100,000 baht |
| MOU workers: keep the written contract at the workplace; send exit notices | s.46, s.50 | 7 or 15 days | Up to 5,000 baht (s.113, s.113/1) |
| Keep workers out of the 27 closed and 13 conditional jobs | s.7, s.9; Ministry of Labour announcement of 2020 | Continuous | s.102 ([Matichon](https://www.matichon.co.th/local/news_2049383), search snippet) |

Source for the table: [RO text](https://www.drthawip.com/book/export/html/3263), unless stated.

### Cabinet resolutions run the renewal cycle, not the Ordinance

- Each cohort gets three things:
  - its own cabinet resolution;
  - a Ministry of Labour announcement on permission to work;
  - a Ministry of Interior announcement on permission to stay ([InfoQuest, 14 Jul 2026](https://www.infoquest.co.th/?p=615165)).
- Dates, documents and conditions change every round. **This is the core reason for the product.** It is also the main upkeep cost.

| Cohort | End date | Filing window | Passport and visa | Source |
|---|---|---|---|---|
| **December** (Lao, Myanmar, Vietnamese; about 770,000 workers) | 11 Dec 2026, renewable to 11 Dec 2027 | 8 Sep-11 Dec 2026. On the last day, filing closes at 16:30 and payment at 20:00 | By 30 Jun 2027. If the passport was issued after 1 Aug 2026: within 90 days of issue, and no later than 30 Jun 2027 | [Nation](https://www.nationthailand.com/news/policy/40069723); [Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1250827) |
| **March** (Lao, Myanmar, Vietnamese; not Cambodian) | 31 Mar 2027 | New resolution awaited | Was due by 28 Sep 2026 | [Thai Post](https://www.thaipost.net/general-news/955747/) |
| **February** (Lao, Vietnamese) | 13 Feb 2027 | New resolution awaited | Not found | [Thai Post](https://www.thaipost.net/general-news/907398/) (search snippet) |
| **MOU** (4 nationalities) | 2-year permit, renewable once for 2 years, then return home | Before each expiry | From the MOU process | [Thai Post](https://www.thaipost.net/general-news/573675/) (search snippet) |
| Myanmar MOU workers whose 4 years end in 2026 | Waiver of the 30-day break agreed in principle on 23 Jul 2026 | Pending | n/a | [InfoQuest](https://www.infoquest.co.th/?p=625642) (search snippet) |
| Border-pass workers (s.64), Cambodians | 3-month permits, 30-day stays; a separate track | Per entry | Border pass | [Thansettakij](https://www.thansettakij.com/economy/635911) (search summary); [Thai Post](https://www.thaipost.net/general-news/955747/) |

**December cohort details:**

- Fees: 100 baht per application plus 900 baht per permit ([Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1250827)).
- Documents:
  - passport or substitute (Myanmar workers may attach it later);
  - a health certificate from a hospital linked to the DOE system;
  - proof of social security, or health insurance. Domestic, farm and livestock workers need 1 year of insurance. Workers waiting for the Social Security Office after a change of employer need 6 months ([Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1250827)).
  - a power of attorney (POA) with stamp duty when someone else files. Duty is 10 baht for one act and 30 baht for more than one ([Revenue Department](https://www.rd.go.th/25348.html)).

### The filing channel and what it leaves undone

- **One online portal.** e-WorkPermit (eworkpermit.doe.go.th) has been mandatory since 13 Oct 2025 for new permits, renewals and cancellations ([PRD English](https://thailand.prd.go.th/en/content/category/detail/id/2874/iid/429777); [EY](https://www.ey.com/en_gl/technical/tax-alerts/thailand-launches-online-platform-for-work-permit-applications)).
- **Eight steps** ([PSU guide](https://gao.psu.ac.th/images/download/immigration/e-WorkPermit_Information.pdf)):
  1. register;
  2. file;
  3. pay the application fee;
  4. document check;
  5. approval;
  6. pay the permit fee;
  7. book an appointment;
  8. biometrics at a service centre.
- **Identity.** Directors and authorised representatives verify with ThaiD ([Clark Hill](https://www.clarkhill.com/news-events/news/thailand-launches-online-platform-for-work-permit-applications/), search snippet). ThaiD is likely limited to Thai ID holders (unverified).
- **What it does.** Status updates by email, SMS and LINE ([PRD English](https://thailand.prd.go.th/en/content/category/detail/id/2874/iid/429777)).
- **What no source shows it doing:**
  - expiry reminders;
  - a view across many employers;
  - export or an API ([Exworker](https://www.exworker.co.th/en/blog/e-workpermit-en)).

  These absences are unverified.
- **Common errors** ([Exworker](https://www.exworker.co.th/en/blog/e-workpermit-en)):
  - "no data found";
  - an account still held by a previous agent;
  - duplicate applications;
  - names that do not match the passport.

  Software can catch most of these before the filer opens the portal.
- **The portal is under strain:**
  - In June 2026 it had 254,760 queue slots a month, against 658,955 wanted ([Post Today](https://www.posttoday.com/business/743372)).
  - More than 2 million people were queuing in April 2026 ([Thansettakij](https://www.thansettakij.com/general-news/657139)).
  - Some documents waited up to 4 months for approval ([Thansettakij](https://www.thansettakij.com/general-news/668193)).
  - Middlemen sold queue slots for about 2,000 baht per worker ([Naewna](https://www.naewna.com/local/972023)).
  - The operator, Future Sky, says it is owed about 715 million baht and has sued ([Thansettakij](https://www.thansettakij.com/general-news/668193)).
- **Paper fallbacks.** Paper filing was allowed until 28 Jan 2026 ([EIG Law](https://eiglaw.com/thailand-temporarily-allows-manual-work-permit-applications/)). Manual processing for some permit types (mainly expat permits) was extended later. Sources give 28 Jul 2026 and 28 Oct 2026 ([Vialto](https://vialtopartners.com/regional-alerts/thailand-immigration-e-work-permit-processing-update-now-extended-until-28-july-2026); [Vialto](https://vialtopartners.com/regional-alerts/thailand-immigration-e-work-permit-processing-further-extended-until-28-october-2026), search summary). This does not change the plan.

### Enforcement

- **FY2026** (1 Oct 2025 to 1 Sep 2026) ([Bangkok Biznews](https://www.bangkokbiznews.com/news/1250192); [Thairath](https://thairath.co.th/news/politic/2957000)):
  - 74,265 workplaces inspected and 1,721 prosecuted (2.3%);
  - 888,620 workers inspected and 5,330 prosecuted.
- **4 Sep 2026.** The government ordered proactive workplace inspections ([PRD](https://www.prd.go.th/th/content/category/detail/id/39/iid/538443), search snippet).
- **After the March 2026 deadline,** the DOE said it would prosecute both employers and workers found without permits ([Thai Post](https://www.thaipost.net/general-news/955747/)).
- **Settling a case.** Fine-only cases can be settled within 30 days (s.133) ([RO text](https://www.drthawip.com/book/export/html/3263)). The settlement tariff was not found (unverified).
- **What this means.** The risk is real but rare per workplace. **The urgency comes from deadlines, not from inspections.** It returns three or four times a year.

### Upcoming changes (the product's content calendar)

| Date | Change | Source |
|---|---|---|
| 11 Dec 2026 | December cohort filing deadline | [Nation](https://www.nationthailand.com/news/policy/40069723) |
| 13 Feb 2027 | February cohort permits end; a new resolution is needed | [Thai Post](https://www.thaipost.net/general-news/907398/) (search snippet) |
| 31 Mar 2027 | March cohort permits end; a new resolution is expected (unverified) | [Thai Post](https://www.thaipost.net/general-news/955747/) |
| 30 Jun 2027 | December cohort passport and visa deadline | [Nation](https://www.nationthailand.com/news/policy/40069723) |
| 11 Dec 2027 | December cohort round 2 | [Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1247207) |
| Pending | Draft Royal Decree bringing farm, livestock and household workers into social security, so health-cover rules flip by sector | [Lexbangkok](https://lexbangkok.com/?p=10364) |
| Pending | Waiver for Myanmar MOU workers who finish 4 years | [InfoQuest](https://www.infoquest.co.th/?p=625642) (search snippet) |

---

## 3. Customers

### Counts

| Segment | Count | Role for us | Confidence | Source |
|---|---|---|---|---|
| Migrants with permission to work (Mar 2025) | 3.10 million: 2.38 million under resolutions, 0.69 million under MOUs | The volume behind each buyer | high | [MWG and HRDF to OHCHR](https://www.ohchr.org/sites/default/files/documents/issues/business/workinggroupbusiness/cfis/labour-migration/subm-labour-migration-business-cso-migrant-wg.pdf) |
| Worker records on e-WorkPermit | More than 3.6 million; the operator says about 4 million need renewals | | medium | [Thansettakij](https://www.thansettakij.com/general-news/657139) |
| Workers in the 11 Dec 2026 cohort | About 770,000 | | high | [InfoQuest](https://www.infoquest.co.th/?p=615165) |
| Employers in that cohort | About 130,000-220,000 (my estimate, at 3.5-6 workers each). In 2021, 133,910 employers filed for 596,502 workers | Not the target | low | [Post Today](https://www.posttoday.com/politics/645343) |
| Employers registered on the portal in its first month | 81,551 | A floor | high | [Daily News](https://www.dailynews.co.th/news/5314014/) |
| Licensed import companies | 331 on the portal; the top tier have their own tools | **Buyers: the middle and bottom tiers** | high for the count | [Daily News](https://www.dailynews.co.th/news/5314014/) |
| Registered proxies | 17,619 | | high for the count; low on who they are | [Daily News](https://www.dailynews.co.th/news/5314014/) |
| Professional proxies (5 or more clients) | About 1,800-3,500 (10-20% of the 17,619) | **Main buyer** | low (my estimate) | Part 02 |
| Direct employers with 20+ migrants | About 10,000-20,000 | Leads through the free employer view only | low (a guess; no size data found) | Part 02 |
| **Working pool** | **About 2,100-3,800 professional filers**, plus employer leads | | low-medium | |

**The biggest sizing gap is who the 17,619 proxies are.** Only the DOE or interviews can say. The DOE websites blocked the research machine. A Thai-based helper should download the DOE statistics and the list of licensed agencies (part 02).

### Who they are and what hurts

- **Professional proxy (ผู้ดำเนินการแทน).** This is a person or small firm filing for 5-50 client employers under powers of attorney. They are likely:
  - document shops near provincial employment offices;
  - accountants;
  - ex-agency staff (unverified).

  Their pain comes from the portal being built per employer while they have many clients and one deadline. For every client they track workers, POAs, health checks, insurance and fees by hand (part 02; unverified).
- **Smaller licensed import company (บนจ.).**
  - It posts a 5-million-baht guarantee ([fastandeasymou.org](https://fastandeasymou.org/)).
  - It sells end-to-end service: MOU imports, renewals, 90-day reports and changes of employer.
  - Unlike JOBS, it has no in-house system. JOBS Workspace shows what such a firm needs: alerts by branch and client, several recipients per employer, worker requests on LINE in three languages, and billing ([JOBS Workspace](https://www.jobsworkerservice.com/document-tracking/)).
- **Direct employer.**
  - Mostly micro: 3.5-4.5 workers on average ([Post Today](https://www.posttoday.com/politics/645343)).
  - Works from paper and scattered Excel, according to workdoc's own pitch ([workdoc about](https://www.workdoc.cloud/about)).
  - Either files alone or hands the job to an agent or proxy ([Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1250827)).
  - Leave this segment to workdoc and to the agents' free trackers.

### Jobs to be done (in the filer's words, from part 03)

1. "Show me, across all my clients, which workers must be filed by which date."
2. "Tell me what is still missing before I open the portal."
3. "Make 200 POAs in one go, correct, in a language the worker understands."
4. "Let me file fast without retyping."
5. "Track every application: number, fee, review, approval, permit fee, appointment, card."
6. "Keep my clients informed without 50 phone calls."
7. "Bill my clients and see who has paid."
8. "Remember the next round, and the hire and exit notices."
9. "Give my client a clean file for the labour inspector."

### What the market pays today

| Item | Price | Source |
|---|---|---|
| State fee, December 2026 renewal | 1,000 baht per worker | [Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1250827) |
| Licensed agent, all-in, 31 Mar 2026 round | 5,638-7,238 baht per worker, VAT included. Implied service fee about 3,400-3,500 baht | [passport.co.th](https://www.passport.co.th/service/renew-workpermit-31march2026/); inference in part 02 |
| Queue middlemen | About 2,000 baht per worker | [Naewna](https://www.naewna.com/local/972023) |
| Brokers charging workers | 10,000-18,500 baht | [BHRRC](https://business-humanrights.org/en/latest-news/thailand-migrant-workers-from-myanmar-face-financial-hardships-as-broker-fees-for-work-permit-renewals-soar) (search summary) |
| workdoc SaaS (Essential plan) | 50 baht per worker a month at 10 workers, falling to 12 at 500 | [workdoc pricing](https://www.workdoc.cloud/pricing) |
| Online e-WorkPermit course | 3,999 baht | [workdoc course](https://www.workdoc.cloud/course) |
| Thai small-business accounting SaaS, for comparison | 1,990-5,490 baht a year | [FlowAccount](https://flowaccount.com/th/pricing) (search summary) |

**The money is in service, not software.** A filer earns about 3,400-3,500 baht per worker per renewal. The software must be sold as a way to handle more clients per staff member, with fewer rejected files.

---

## 4. Competition

| Alternative | What it does | Price | What it means for us |
|---|---|---|---|
| **e-WorkPermit** (DOE; run by the Future Sky joint venture) | Filing, payment and status by email, SMS and LINE. Separate account types for employers, workers, import companies and proxies ([PSU guide](https://gao.psu.ac.th/images/download/immigration/e-WorkPermit_Information.pdf)) | Free, apart from state fees | The mandatory channel. Input to the product, not a rival. Unstable ([Post Today](https://www.posttoday.com/general-news/748152)) |
| **workdoc** (Fast and Easy Co., Ltd.) | Document store per worker; OCR; cohort tags; LINE alerts; 90-day and TM.30 fields; Excel import; attendance and payroll. One company per account; no multi-client mode, POA generator, filing queue, or Burmese or Lao screens shown ([workdoc features](https://www.workdoc.cloud/features)) | 500-6,000 baht a month on the Essential plan; Professional is 2.7× and Enterprise 5×; onboarding 5,000-15,000 ([workdoc pricing](https://www.workdoc.cloud/pricing)) | **The direct incumbent for employers.** It proves demand and sets the price. Its owner is an import agency, so rival agencies may not want their client lists in it (unverified). **It is the most likely entrant into our niche,** and also a likely buyer of us |
| **JOBS Workspace** (JOBS, licence นจ.0003/2559) | A 91-screen in-house back office: intake, filing, billing, alerts, worker requests in Thai, Burmese and Lao ([JOBS](https://www.jobsworkerservice.com/document-tracking/)) | Not sold | It shows the feature bar. The fact that it is not sold is our opening |
| **Agent-bundled trackers** (e.g. passport.co.th) | Worker list, LINE expiry alerts, QR job tracking ([passport.co.th](https://www.passport.co.th/service/foreign-worker-renewal-2026/)) | Free with the service | Rules out a standalone reminder app for employers who already use an agent |
| Generic Thai HR and payroll (HumanSoft, Wansook) | Attendance and payroll with LINE; no migrant-permit module found ([HumanSoft](https://www.humansoft.co.th/th/blog/time-attendance-for-line); [Wansook](https://www.wansook.com/)) | Free to low | Not a rival today. A possible integration partner or buyer |
| Odoo expiry add-ons | Generic expiry dates | About USD 299 one-off ([ECOSIRE](https://ecosire.com/ja/apps/odoo/odoo-visa-passport-expiry)) | Irrelevant |
| Doc2Work (Diginex) | Worker-side legal-status guidance for fishers ([Diginex](https://www.diginex.com/projects/safe-migration-for-migrant-fishers)) | Free pilot | Not an employer tool. Shows interest from NGOs and buyer brands |
| Queue middlemen | Biometric slots | About 2,000 baht per worker ([Naewna](https://www.naewna.com/local/972023)) | Under investigation ([Naewna](https://www.naewna.com/politic/950084)). Stay well clear |
| **Spreadsheets and paper** | Whatever the filer builds | Free | **The real competitor for proxies** |

**Conclusion.**

- No product does the multi-client filer's job. That is the opening.
- For employers, workdoc does the job at a fair price. Do not fight it there.
- Offer employers a free view that their proxy feeds. Each proxy then becomes a channel.
- The threat to watch is workdoc adding a multi-client mode. Move first with proxies. Sell neutrality: we are not owned by an agency.

<!-- sections 5-15 follow -->
