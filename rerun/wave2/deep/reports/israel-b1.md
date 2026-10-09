# Israel B1: Gemach licensing, periodic-report and AML-policy workspace

## Re-assessment (owner's criteria)

**Verdict: maybe. New score: 5/10 (old score: 4/10).**

**The case.** The state gives out a reporting template and portal for free. Under these criteria that is not a reason to reject. Two Capital Market Authority circulars, both dated 2 Aug 2026, leave a lot of work around the portal. The data circular (2026-10-5) asks for balance-sheet, P&L, cash-flow, deposit, donation, credit and arrears figures in a protected Excel file, starting 1 Jan 2027. The AML circular adds a policy, a risk assessment, board minutes and training logs ([data circular](https://www.gov.il/BlobFolder/dynamiccollectorresultitem/regulation-legislation311/he/Regulation-2026-10-5-P.pdf); [AML circular](https://www.gov.il/BlobFolder/dynamiccollectorresultitem/regulation-legislation310/he/Regulation-2026-8-2-P.pdf)). Israeli gemach software exists, but it covers day-to-day operations. None of the products I checked mentions regulatory reporting or AML. So there is an opening for a compliance layer. The ceiling is the buyer count: about 170 applicants, and only a handful licensed so far. Most of them are small, donation-funded and price-sensitive. That caps year-3 revenue at roughly NIS 0.2-0.5m (about NIS 0.6m at best). This is a good niche service-plus-software business, not a scalable SaaS.

**Room for improvement over the portal and current practice**
- **Turning the books into the template is real work.** The Excel file has four tabs (financial data, cash flow, deposits/donations/credit, arrears). Cash flow must be split by category, arrears by ageing, and every amount rounded to whole shekels ([data circular, s.3 and notes](https://www.gov.il/BlobFolder/dynamiccollectorresultitem/regulation-legislation311/he/Regulation-2026-10-5-P.pdf)). Operational gemach systems do not produce these cuts (see the competitor check below).
- **The portal rejects bad files, and a rejected file does not count as filed.** It checks that assets equal liabilities plus equity, and that minimum equity is met. It also rejects hidden rows or columns and wrong file names (the name must follow `Gmach_<licence no>_QYY.xlsx`). A filing counts only when an "accepted" e-mail arrives ([data circular, s.3(4)-(6)](https://www.gov.il/BlobFolder/dynamiccollectorresultitem/regulation-legislation311/he/Regulation-2026-10-5-P.pdf)). Checking the file before upload is an obvious paid feature.
- **Deadlines and frequency differ by licence type.** All licensees file yearly by 30 June. Extended licensees also file half-yearly by 30 September ([data circular, s.2(e)-(f)](https://www.gov.il/BlobFolder/dynamiccollectorresultitem/regulation-legislation311/he/Regulation-2026-10-5-P.pdf)). The AML yearly report is due 31 March in a separate protected file ([AML circular](https://www.gov.il/BlobFolder/dynamiccollectorresultitem/regulation-legislation310/he/Regulation-2026-8-2-P.pdf)). A deadline calendar is useful.
- **Record-keeping the portal does not do.** This covers the AML policy and risk assessment (both reviewed yearly), board approval minutes kept 5 years, an AML officer, KYC and PEP records, terror-list screening, and training logs for staff *and volunteers* ([AML circular](https://www.gov.il/BlobFolder/dynamiccollectorresultitem/regulation-legislation310/he/Regulation-2026-8-2-P.pdf)). The portal only receives files.
- **Expert opinion for "qualifying donation" gemachim.** From 1 Jan 2028, a gemach that takes donations carrying rights (refund, grant or future credit) must file a yearly external expert opinion. It must validate the economic model, run sensitivity tests and give a **50-year forecast** of sustainability, liquidity, break-even and credit-default ratios ([data circular, notes to s.2](https://www.gov.il/BlobFolder/dynamiccollectorresultitem/regulation-legislation311/he/Regulation-2026-10-5-P.pdf)). A modelling tool, or partnering with actuaries, is a high-value add-on.
- **Individuals can hold licences too.** A licensee that is an individual must report the financial tab "from its internal bookkeeping and controls" ([data circular, s.2(c)](https://www.gov.il/BlobFolder/dynamiccollectorresultitem/regulation-legislation311/he/Regulation-2026-10-5-P.pdf)). Many of them have no accountant-grade books (unverified).
- **Portal-pain evidence is thin so far.** The regime is new. The Authority itself said only about 10% of applications would pass if decided in Aug 2025 ([Calcalist](https://www.calcalist.co.il/local_news/article/s11rnrlyll)). About 20 of 170+ applications were "mature" in Dec 2025 ([ICE](https://www.ice.co.il/finance/news/article/1093943)). The Authority is now sending hearing letters to bodies that do not comply ([Funder, snippet; page 403](https://www.funder.co.il/article/209090)). That points to a preparation problem, not just a filing problem. I found no user complaints about the portal itself (unverified).

**Competitor reality check**
- **Amud HaChesed (עמוד החסד), by Malach Software.** The vendor says it is built for gemach managers, has served gemachim for 12 years and is widely recommended. The page lists no features, prices or platform, and no regulatory reporting ([gmach.m-pitronim.com](https://gmach.m-pitronim.com/)). It is the likely market leader in operations (unverified). It is also the most likely partner or fast follower.
- **Moses Group gemach system.** It covers the loan-request workflow, guarantors, deposits, donations, loans against deposits, Masav direct debit and user management. Price is on request. It says nothing about AML, the Capital Market Authority or regulatory reports ([mosesnet.net](https://www.mosesnet.net/services/computerized-charity/)).
- **Gmach Beclick (גמח בקליק).** A web app with loans, deposits, donations, receipts, Excel exports, bank-account checks and "AI". It shows no prices, no customers and placeholder statistics, so it looks early-stage. It has no AML or regulatory reporting ([gmach-share-hub.lovable.app](https://gmach-share-hub.lovable.app/); [pricing page 404](https://gmach-share-hub.lovable.app/pricing)).
- **Generic lending software** (CAV Systems, Capterra listings) is built for interest-bearing lenders, not this regime ([CAV](https://cav.co.il/en/blog-post/recommended-mortgage-management-system-non-bank-lenders-israel); [Capterra IL](https://www.capterra.co.il/software/1082901/Loan-Management)).
- **Advisers.** Large Israeli law firms sell financial-regulation work to non-bank providers ([Shibolet](https://www.shibolet.com/?p=13991)). I found no published gemach-specific compliance package or price list (unverified).
- **Verdict on incumbents.** They do part of the job (operations ledger). None shows the compliance part: template export, validation, AML records, board and training logs, or the expert-opinion model. Prices are hidden, so I cannot judge whether they are reasonable (unverified). This is an opening, not a killer. The main threat is that Amud HaChesed adds an Excel export to the template. That is quick to build, but it would not cover the AML and governance records.

**Price per customer** (my estimates, unverified)
- The buyer's alternative is staff time, an outside AML officer and CPA hours. Officers carry personal responsibility ([Bizportal](https://www.bizportal.co.il/general/news/article/757639)). Bank accounts depend on the licence ([ICE](https://www.ice.co.il/finance/news/article/1093943)). I found no public prices for outsourced AML officers or gemach licence files (unverified).
- **Basic licence (NIS 1-8m activity):** NIS 250-500/month (NIS 3,000-6,000/yr) for the template filler, validator, AML register and deadline calendar.
- **Extended licence (over NIS 8m):** NIS 1,000-2,500/month (NIS 12,000-30,000/yr), because of the half-yearly reports, more users and an audit trail.
- **Service add-ons:** AML-officer-as-a-service or policy drafting at NIS 1,000-3,000/month. Expert-opinion model support at NIS 10,000-30,000 a year per qualifying-donation gemach.
- **Accountants:** NIS 400/month base plus NIS 150 per client entity, for charedi CPA offices serving several gemachim.

**Revenue estimate (year 3, about 2029)**
- Buyers: about 170 applicants ([ICE](https://www.ice.co.il/finance/news/article/1093943)). Assume about 100 licensed by 2029 (unverified; only 7 licensed by Sept 2026 per [Funder snippet](https://www.funder.co.il/article/209090)). Assume 85 basic and 15 extended.
- Software only: basic 85 x 25% share x NIS 4,500 = NIS 95,600. Extended 15 x 33% share x NIS 20,000 = NIS 100,000 (5 customers). Total: about **NIS 196,000 (about USD 53k)**.
- With services: add 12 AML-officer or policy clients x NIS 18,000 = NIS 216,000, plus 3 expert-opinion engagements x NIS 20,000 = NIS 60,000. Total: about **NIS 470,000 (about USD 127k)**.
- Upside: if licensing speeds up and all ~170 licence, the same shares give about NIS 0.6m (145 basic x 25% x NIS 4,500 = NIS 163,000; 25 extended x 33% x NIS 20,000 = NIS 165,000; services about NIS 276,000). Exempt gemachim (under NIS 1m) are not buyers for compliance. They are buyers only for a cheap operations app, where incumbents already exist.

**Ease of implementation and sale**
- **Build: medium.** The template, field definitions and validation rules are public ([data circular](https://www.gov.il/BlobFolder/dynamiccollectorresultitem/regulation-legislation311/he/Regulation-2026-10-5-P.pdf)). An MVP that imports a trial balance, loan ledger or Excel file and outputs a validated `Gmach_*.xlsx`, plus AML registers, is a few weeks of work. Pulling data from Amud HaChesed or Moses needs a partner or an export (unverified).
- **Sale: hard.** It is a closed charedi community. It needs Hebrew, trust and rabbinic or community endorsement, in-person selling and CPA referrals. The buyers are few but identifiable from the Authority's public register ([Walla](https://finance.walla.co.il/item/3558298)). The best routes are a reseller deal with Amud HaChesed or charedi CPA offices (unverified).

**Remaining risks**
- **Tiny, slow buyer base:** 7 licences after 4 years of the law ([Funder snippet](https://www.funder.co.il/article/209090)).
- **Draft status:** both circulars were published for comment on 2 Aug 2026. Whether they are final is unverified. The AML circular phases in 18 months after final publication ([Calcalist](https://www.calcalist.co.il/local_news/article/rktbct3sfe)). The data circular starts 1 Jan 2027, so first yearly filings are due by 30 June 2028 for 2027 activity ([data circular, s.5](https://www.gov.il/BlobFolder/dynamiccollectorresultitem/regulation-legislation311/he/Regulation-2026-10-5-P.pdf)).
- **Incumbents can add export features cheaply.** Moat comes from the AML and governance records and the service.
- **Price sensitivity:** compliance costs could close small gemachim ([Bizportal 2026](https://www.bizportal.co.il/general/news/article/20027138)). The regulator says it deliberately kept reporting "basic" to limit compliance cost ([data circular, notes](https://www.gov.il/BlobFolder/dynamiccollectorresultitem/regulation-legislation311/he/Regulation-2026-10-5-P.pdf)).
- **Liability and sensitive data:** the product holds AML and KYC data on depositors and donors.

**New sources**
- https://www.gov.il/BlobFolder/dynamiccollectorresultitem/regulation-legislation311/he/Regulation-2026-10-5-P.pdf (data-reporting circular 2026-10-5, dated 2 Aug 2026; full text extracted and read)
- https://gmach.m-pitronim.com/ (Amud HaChesed, Malach Software)
- https://www.mosesnet.net/services/computerized-charity/ (Moses Group gemach system)
- https://gmach-share-hub.lovable.app/ (Gmach Beclick)
- https://www.shibolet.com/?p=13991 (law-firm financial-regulation practice)
- https://www.kikar.co.il/302125.html (law's passage; no data on counts or costs)
- https://www.funder.co.il/article/209090 (403 again; snippet only)

## Summary

**Verdict: maybe. Score: 4/10.**

The duty is real and is now in primary text. A 2019 law requires financial gemachim (interest-free deposit and loan funds) to hold a Capital Market Authority licence. A 2026 sector AML order and a draft AML circular (2 Aug 2026) add a written risk policy, a yearly board review, an AML officer, a risk assessment, staff and volunteer training, and a yearly Excel report due 31 March ([draft circular, gov.il](https://www.gov.il/BlobFolder/dynamiccollectorresultitem/regulation-legislation310/he/Regulation-2026-8-2-P.pdf)). The market is very small, though. About 170 bodies have applied for a licence, and the first 7 licences were reported only in September 2026 ([ICE](https://www.ice.co.il/finance/news/article/1093943); [Funder, snippet](https://www.funder.co.il/article/209090)). The state gives out the reporting template and portal for free, so the paid value has to come from upstream work: records, KYC, policy, board minutes and training logs. The circular takes effect 18 months after final publication, so demand is unlikely before 2027-2028. This works best as a niche compliance service with software behind it, sold to a few dozen licensed gemachim. It is not a scalable SaaS.

## Duty

**Legal basis**
- The main statute is "חוק להסדרת מתן שירותי פיקדון ואשראי בלא ריבית על ידי מוסדות לגמילות חסדים, תשע"ט-2019" ([draft circular, p.1](https://www.gov.il/BlobFolder/dynamiccollectorresultitem/regulation-legislation310/he/Regulation-2026-8-2-P.pdf)).
- The Knesset passed it on 31 Dec 2018 ([Bizportal](https://www.bizportal.co.il/general/news/article/757639)). The Authority says it came into force in July 2022 ([Walla, Feb 2023](https://finance.walla.co.il/item/3558298)). Calcalist describes a 3.5-year grace period before 2022 ([Calcalist, Aug 2025](https://www.calcalist.co.il/local_news/article/s11rnrlyll)).
- The sector AML order is "צו איסור הלבנת הון (חובות זיהוי, דיווח וניהול רישומים ... של נותני שירותי פיקדון ואשראי בלא ריבית שהם מוסדות לגמילות חסדים), התשפ"ו-2026" ([draft circular](https://www.gov.il/BlobFolder/dynamiccollectorresultitem/regulation-legislation310/he/Regulation-2026-8-2-P.pdf)). The Knesset Constitution Committee discussed the draft order on 18 Nov 2025 ([ICE law](https://www.ice.co.il/law/news/article/1091352)). The circular cites it as a 2026 order. I did not see its final publication date (unverified).
- The draft AML circular is no. 2026-1274, dated 2 Aug 2026. It was issued under s.11יג(ג)(1) of the AML Law 2000, s.95(ד) of the Counter-Terrorism Law 2016, ss.5(ו) and 10 of the order, and s.4(א) of the Gemach Law ([draft circular](https://www.gov.il/BlobFolder/dynamiccollectorresultitem/regulation-legislation310/he/Regulation-2026-8-2-P.pdf)). Comments were due by the end of August 2026 ([Calcalist, Aug 2026](https://www.calcalist.co.il/local_news/article/rktbct3sfe)).
- A separate draft circular on periodic financial reporting was published on 28 Oct 2025 ([Maariv](https://www.maariv.co.il/economy/israel/article-1245906)).

**Size tiers in the law** ([Bizportal](https://www.bizportal.co.il/general/news/article/757639))
- Activity up to NIS 1m: exempt.
- NIS 1-8m: basic licence.
- Over NIS 8m: extended licence. Only an amuta or a public-benefit company can hold one.
- Very large gemachim fall under banking law.
- Minimum capital is 5% of deposits, capped at NIS 5m.
- At least three directors are required. An extended licensee must appoint an external CPA auditor.
- Officers carry personal responsibility.

**What must be done under the draft AML circular** ([gov.il PDF](https://www.gov.il/BlobFolder/dynamiccollectorresultitem/regulation-legislation310/he/Regulation-2026-8-2-P.pdf))
- Write an AML/CFT risk policy covering KYC, a risk assessment that includes donation sources, reporting, record keeping, procedures, controls and training.
- The board (or the vaad of an amuta) discusses and approves the policy in writing at least once a year. Its minutes must be kept. Records of its oversight must be kept for at least 5 years.
- Appoint an officer responsible for AML duties, with unrestricted access to records.
- Write a risk assessment document and review it at least once a year, in writing.
- Screen against terror lists. Apply enhanced KYC to PEPs and high-risk customers.
- Report unusual events, failures and investigations to the supervisor immediately, through the online licensing system.
- File a yearly report by 31 March. It gives the number of reports sent to the AML authority (IMPA), by type and by month, and the money amounts reported. It must use the Authority's protected Excel file, named H_<id>_<yy>.xlsx, and go through reportsportal.cma.gov.il. Self-built files, PDFs and scans are rejected.
- Name a "reporting officer", who logs in through the national ID system.
- Train new and existing staff **and volunteers**.
- The circular takes effect 18 months after publication.

**Periodic financial reporting (draft, Oct 2025)** ([Maariv](https://www.maariv.co.il/economy/israel/article-1245906))
- Reports cover cash flow, donations, deposits, active credit, loans in collection difficulty and risk exposure. Gemachim must also track the loan-to-deposit ratio and liquidity.
- Complex gemachim must file a periodic actuarial opinion.
- Frequency and format were not stated (unverified).

**Penalties and enforcement**
- The law gives the supervisor licensing, supervision and enforcement powers ([ICE law](https://www.ice.co.il/law/news/article/1091352)). The supervisor can suspend or revoke a licence ([Bizportal](https://www.bizportal.co.il/general/news/article/757639)).
- In the first two years, violations bring only a written warning ([Bizportal](https://www.bizportal.co.il/general/news/article/757639)).
- The draft circular refers to decisions of "sanctions committees" ([gov.il PDF](https://www.gov.il/BlobFolder/dynamiccollectorresultitem/regulation-legislation310/he/Regulation-2026-8-2-P.pdf)). That suggests monetary sanctions exist, but I did not find the amounts (unverified).
- Enforcement in practice: in September 2026 the Authority began sending hearing letters to bodies that do not meet the law ([Funder, snippet](https://www.funder.co.il/article/209090)).
- Banks act as the real gatekeeper. Banks delayed gemach activity and threatened to close the accounts of unlicensed gemachim ([Walla](https://finance.walla.co.il/item/3558298)). Gemachim say that without a licence they cannot work with the banks ([ICE](https://www.ice.co.il/finance/news/article/1093943)).

**Status and pace**
- No licence had been issued as of Aug 2025. The deputy supervisor said only about 10% of applications would pass if decided then ([Calcalist, Aug 2025](https://www.calcalist.co.il/local_news/article/s11rnrlyll)).
- As of Dec 2025, about 20 of more than 170 applications were "mature". The Authority said there is no temporary licence ([ICE](https://www.ice.co.il/finance/news/article/1093943)).
- The first 7 licences were reported on 3 Sept 2026 ([Funder, snippet](https://www.funder.co.il/article/209090)).
- Licensees get 2 years from the first licence to prepare ([Calcalist, Aug 2026](https://www.calcalist.co.il/local_news/article/rktbct3sfe)).
- Search results dated some Knesset Finance Committee and plenary items to July 2026, but their content matches the 2018 bill. They are probably misdated (unverified).

## Buyers

- **Count:** about 140 applications by Feb 2023 ([Walla](https://finance.walla.co.il/item/3558298)), and more than 170 by 2025 ([ICE](https://www.ice.co.il/finance/news/article/1093943); [Calcalist](https://www.calcalist.co.il/local_news/article/s11rnrlyll)). Bodies that applied in time appear in a public register on the Authority's site ([Walla](https://finance.walla.co.il/item/3558298)). I did not open it (unverified).
- **Wider population:** the Authority says "hundreds" of gemachim operate, but most are below the licensing threshold ([Walla](https://finance.walla.co.il/item/3558298); [Maariv](https://www.maariv.co.il/economy/israel/article-1245906)).
- **Segments:**
  - A few very large funds. Gemach Merkazi / Lebeit Israel reports 53,000 saving families, NIS 3.3bn of loans issued through 2024, and about NIS 1.3bn in assets ([Calcalist](https://www.calcalist.co.il/local_news/article/s11rnrlyll)).
  - A middle tier in the NIS 1-8m band.
  - Individuals running a gemach, who may hold a minimal licence and carry all duties personally ([Calcalist, Aug 2026](https://www.calcalist.co.il/local_news/article/rktbct3sfe)).
  - The sector moves "billions of shekels a year" ([Bizportal 2026](https://www.bizportal.co.il/general/news/article/20027138)).
- **How they comply today:** mostly volunteers. Large loans rely on community guarantors and social sanctions ([Bizportal 2026](https://www.bizportal.co.il/general/news/article/20027138)). Large funds run member portals, for example Gemach Merkazi's personal area showing loans, deposits and payments ([JDN, snippet](https://www.jdn.co.il/?p=2526093)). Use of Excel by small gemachim is reported in the lead file but not confirmed here (unverified).
- **Realistic serviceable market:** the 7 licensed bodies now, and perhaps 20-60 within two years. At most about 170.

## Competition

- **Free state tools:** the Authority supplies the protected Excel AML report template and the reporting portal (reportsportal.cma.gov.il). Filings go through its online licensing system ([gov.il PDF](https://www.gov.il/BlobFolder/dynamiccollectorresultitem/regulation-legislation310/he/Regulation-2026-8-2-P.pdf)). The yearly AML report is just counts and amounts of IMPA reports by month. **The filing step itself is covered for free.** It does not cover KYC records, the risk assessment, policy drafting, board minutes or training logs.
- **Gemach-specific software:** none found in four Hebrew and two English searches ([search: Capterra IL generic loan tools](https://www.capterra.co.il/software/1082901/Loan-Management)).
- **Generic lending software:**
  - Israeli: CAV Systems, a lending-management system for non-bank lenders ([CAV](https://cav.co.il/en/blog-post/recommended-mortgage-management-system-non-bank-lenders-israel)), and the cloud lending systems described by Maariv ([Maariv](https://www.maariv.co.il/economy/consumerism/article-1246704)).
  - International: Lendsqr, which has guarantor features ([Lendsqr](https://lendsqr.com/products/product-management)).
  - None of these is built for interest-free funds, donations and AML for this sector.
- **Nedarim Plus:** a charedi payments platform. It is reportedly linked to at least one large gemach's member portal (per lead file). Whether it has a gemach-management module is unverified.
- **US analogues:** Hebrew Free Loan societies, for example HFLS New York, with $345M lent. They appear to use in-house systems, and no vendor was named ([HFLS job post](https://hfls.org/job-opportunities/systems-data-officer/)).
- **Advisers:** law firms and CPAs probably handle licence applications. No published gemach offer or prices were found (unverified).
- **Advocacy:** the Haredi Institute for Public Affairs (machon.org.il) organises gemach directors ([machon](https://machon.org.il/en/gemach-regulations/)).

## Willingness to pay

- No prices were found for gemach compliance services (unverified).
- Pressure to comply is high because of the bank-account risk ([Walla](https://finance.walla.co.il/item/3558298)). Unlicensed bodies get hearing letters ([Funder, snippet](https://www.funder.co.il/article/209090)).
- Compliance costs could close small gemachim ([Bizportal 2026](https://www.bizportal.co.il/general/news/article/20027138)). That signals price sensitivity.
- The bodies are donation-funded and non-profit ([ICE](https://www.ice.co.il/finance/news/article/1093943)).
- Large funds (NIS 1bn+) can clearly pay. Small ones may pay NIS 300-1,000/month for an "AML officer as a service" (my estimate, unverified).

## Channels

- Gemach representatives in Knesset hearings, for example Yehuda Engelander for the gemachim association ([ICE](https://www.ice.co.il/finance/news/article/1093943)), and the Haredi Institute ([machon](https://machon.org.il/en/gemach-regulations/)).
- The Authority's public register of applicants and licensees ([Walla](https://finance.walla.co.il/item/3558298)).
- Charedi CPAs and law firms that prepare licence files (unverified).
- Charedi media: Behadrei Haredim, Kikar HaShabbat, JDN.
- Payment platforms such as Nedarim Plus, as partners (unverified).

## Risks

- **Tiny market:** about 170 applicants, 7 licensed ([ICE](https://www.ice.co.il/finance/news/article/1093943); [Funder, snippet](https://www.funder.co.il/article/209090)).
- **Slow timing:** the circular takes effect 18 months after final publication, plus a 2-year preparation window after licensing ([Calcalist, Aug 2026](https://www.calcalist.co.il/local_news/article/rktbct3sfe)). The regulator has been slow for years and faces political pressure to soften rules ([ICE](https://www.ice.co.il/finance/news/article/1093943)).
- **Free state template** for the yearly report ([gov.il PDF](https://www.gov.il/BlobFolder/dynamiccollectorresultitem/regulation-legislation310/he/Regulation-2026-8-2-P.pdf)).
- **Access and trust:** a closed charedi community. You need Hebrew, Yiddish-friendly rabbinic legitimacy and in-person sales.
- **Sensitive data:** AML and KYC data on donors and depositors who may resist reporting ([Bizportal 2026](https://www.bizportal.co.il/general/news/article/20027138)). Liability if a fund collapses or is used for laundering.
- **Incumbents could add features:** Nedarim Plus or a charedi accounting vendor could add a module (unverified).

## First product

The first version is a Hebrew, right-to-left web workspace for one licensed gemach:
1. A register of depositors, borrowers, guarantors and donors, with KYC fields (ID, PEP declaration, risk rating) and terror-list screening.
2. A loan and deposit ledger that produces the periodic financial data (cash flow, donations, deposits, active credit, arrears, loan-to-deposit ratio, liquidity).
3. A policy and risk-assessment template pack that follows the circular section by section, with yearly review reminders.
4. A board-minutes and approvals log, kept for 5 years.
5. A training log for staff and volunteers.
6. An IMPA report counter that fills the Authority's Excel template (H_id_yy.xlsx) for the 31 March report.

What to build in the first 30 days:
- A circular-to-checklist mapping, and the policy and risk-assessment document templates.
- A simple register with KYC and guarantor fields, plus Excel import.
- An export to the official AML Excel file.
- Validation with 3-5 gemachim, recruited through a charedi CPA partner.

Sell it as a service first, with a part-time AML officer and policy drafting. Software comes second.

## Open questions

- The final text and publication date of the AML order and circular. The penalty amounts.
- The final format and frequency of the periodic financial report.
- The register count and names of licensees.
- Whether Nedarim Plus or charedi accounting vendors already serve gemachim.
- What CPAs and lawyers charge for licence files.
- Whether licensing will speed up after the first 7.

## Sources

- https://www.gov.il/BlobFolder/dynamiccollectorresultitem/regulation-legislation310/he/Regulation-2026-8-2-P.pdf (draft AML circular 2026-1274; full text read)
- https://www.calcalist.co.il/local_news/article/rktbct3sfe
- https://www.calcalist.co.il/local_news/article/s11rnrlyll
- https://www.ice.co.il/finance/news/article/1093943
- https://www.ice.co.il/law/news/article/1091352
- https://finance.walla.co.il/item/3558298
- https://www.bizportal.co.il/general/news/article/757639
- https://www.bizportal.co.il/general/news/article/20027138
- https://www.maariv.co.il/economy/israel/article-1245906
- https://www.funder.co.il/article/209090 (search snippet only)
- https://www.jdn.co.il/?p=2526093 (search snippet only)
- https://machon.org.il/en/gemach-regulations/
- https://cav.co.il/en/blog-post/recommended-mortgage-management-system-non-bank-lenders-israel
- https://lendsqr.com/products/product-management
- https://hfls.org/job-opportunities/systems-data-officer/
- https://www.capterra.co.il/software/1082901/Loan-Management
- https://www.maariv.co.il/economy/consumerism/article-1246704
