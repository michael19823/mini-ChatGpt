# Thailand B1: migrant-worker permit desk: market size, buyers and competition (deep dive 02)

Date: 10 Oct 2026. Builds on [the B1 report](../reports/thailand-b1.md). Scope: buyer counts, buyer profile, willingness to pay, competitors, channels and regional expansion. Law, product design and go-to-market are covered by the other parts.

Note on access: the Department of Employment (DOE) websites (doe.go.th, eworkpermit.doe.go.th) timed out or blocked this research machine (Cloudflare 403). I could not download the DOE monthly statistics or the licensed-agency list myself. Counts below come from DOE figures quoted in the press, a UN submission and my own arithmetic. A Thai-based tester should download the DOE statistics before any pricing decision.

## Summary

- **A direct competitor exists. B1 missed it.** [workdoc](https://www.workdoc.cloud/) is a Thai SaaS built for firms that employ migrant workers. It stores passports, visas and permits, reads them with AI (OCR), tags each worker by cohort (MOU, cabinet resolutions of 11 Nov 2025, 2 Dec 2025 and 24 Sep 2024), and sends expiry alerts by LINE. It also does attendance and payroll. It claims 59+ businesses, 8,500+ workers and 122 sites ([workdoc about](https://www.workdoc.cloud/about)). Prices run from 500 baht a month for 10 workers to 6,000 baht a month for 500 workers on the basic plan ([workdoc pricing](https://www.workdoc.cloud/pricing)). It is run by Fast and Easy Co., Ltd., a licensed import agency (licence 0002/59) ([fastandeasymou.org](https://fastandeasymou.org/)). **"No employer-side software exists" is wrong. The product shape is proven and the price is set.**
- **Agents also give software away.** passport.co.th, a licensed import agency (licence นจ.0036/2560), bundles a LINE "my workers" system with expiry alerts and QR-code job tracking for its clients ([passport.co.th](https://www.passport.co.th/service/foreign-worker-renewal-2026/)). JOBS (licence นจ.0003/2559) runs an in-house back office, "JOBS Workspace", with 91 screens, 8 user roles, 5 branches, 60/30/7-day LINE and email alerts and worker self-service in Thai, Burmese and Lao ([JOBS Workspace](https://www.jobsworkerservice.com/document-tracking/)). For an employer who already uses an agent, a reminder tool is free. The big agents do not need to buy one.
- **The gap that is left is the multi-client filer.** I found no tool built for the 17,619 proxy filers and 331 import companies that registered on e-WorkPermit in its first month ([Daily News](https://www.dailynews.co.th/news/5314014/)). workdoc is priced and designed per employer. Its features page shows a one-company design; no multi-client mode is shown ([workdoc features](https://www.workdoc.cloud/features)).
- **Market size (workers).** About 3.10 million migrants held permission to work in March 2025: 2.38 million under cabinet resolutions and 0.69 million under MOUs ([Migrant Working Group and HRDF submission to OHCHR, citing the Ministry of Labour](https://www.ohchr.org/sites/default/files/documents/issues/business/workinggroupbusiness/cfis/labour-migration/subm-labour-migration-business-cso-migrant-wg.pdf)). The 11 Dec 2026 cohort is about 770,000 workers ([Mizzima](https://eng.mizzima.com/2026/07/22/36614)). e-WorkPermit held records on more than 3.6 million people by March 2026, and the operator said about 4 million need renewals ([Thansettakij](https://www.thansettakij.com/general-news/657139)).
- **Market size (employers).** No official 2026 count. In the Feb 2021 round, 133,910 employers filed for 596,502 workers, or 4.5 workers per employer ([Post Today](https://www.posttoday.com/politics/645343)). On that ratio the 11 Dec 2026 cohort alone has about 130,000-220,000 employers (my estimate). Most are micro employers with a handful of workers.
- **What buyers pay today.** The state fee for the 11 Dec renewal is 1,000 baht per worker ([JOBS](https://www.jobsworkerservice.com/migrant-worker-fees/)). A licensed agent charged 5,638-7,238 baht per worker, VAT and official fees included, for the 31 Mar 2026 renewal ([passport.co.th](https://www.passport.co.th/service/renew-workpermit-31march2026/)). The VAT shown (238-245 baht) implies a taxable service fee of about 3,400-3,500 baht per worker. The rest (about 2,000-3,600 baht) is official fees, health check and insurance passed through (my inference from the VAT lines). Employers pay 3,999 baht for an online e-WorkPermit course ([workdoc course](https://www.workdoc.cloud/course)).
- **Verdict on positioning.** Do not launch a generic "expiry tracker for employers". workdoc already sells it. The defensible wedge is a **back office for proxies and small agents**: many client employers in one account, cohort rules kept current, document checks before filing, client billing and a client-facing LINE status page. Price it per active worker, at or below workdoc's per-worker rate, with agent-friendly volume tiers.
- **Revenue.** About 2-5 million baht a year by year 3 (base about 3.9 million; my estimate), below B1's 4-9 million, because workdoc holds the employer side and the big agents build their own tools.
- **Regional.** Malaysia is the nearest copy of the problem (2.35 million temporary work passes issued in 2025) ([The Vibes](https://www.thevibes.com/articles/news/119365/foreign-worker-system-nets-rm381m-in-fees-as-government-touts-transparency-gains)). But local HR vendors already bundle permit-expiry reminders at about RM3 per staff a month ([Info-Tech](https://www.info-tech.com.my/pricing); both search summaries). It is not an easy second market.

## Buyer segments

| Segment | Count | Source | Year | Confidence |
|---|---|---|---|---|
| Migrant workers with permission to work (all routes) | 3,101,183 (2,381,166 cabinet-resolution; 687,414 MOU) | [Migrant Working Group and HRDF submission to OHCHR, citing the Ministry of Labour](https://www.ohchr.org/sites/default/files/documents/issues/business/workinggroupbusiness/cfis/labour-migration/subm-labour-migration-business-cso-migrant-wg.pdf) | Mar 2025 | high |
| Migrants in regular status (cross-check) | 3,143,120 | [IOM Thailand labour migration profile](https://thailand.iom.int/resources/thailand-labour-migration-profile-recruitment-and-employment-trends-and-risks-migrant-workers) (search summary) | Jan 2024 | medium-high |
| Worker records on e-WorkPermit | more than 3.6 million; operator says about 4 million need renewals | [Thansettakij](https://www.thansettakij.com/general-news/657139) | Mar-Apr 2026 | medium (operator figures) |
| Workers in the 11 Dec 2026 cohort (Lao, Myanmar, Vietnamese) | about 770,000 | [Mizzima](https://eng.mizzima.com/2026/07/22/36614); [InfoQuest](https://www.infoquest.co.th/?p=615165) | Jul 2026 | high |
| Workers given extra time to file in the 31 Mar 2026 round | more than 370,000 | [The Standard](https://thestandard.co/thai-cabinet-foreign-labor-extension/) | early 2026 | medium |
| Employers per worker (ratio) | 133,910 employers for 596,502 workers = 4.5 workers per employer | [Post Today](https://www.posttoday.com/politics/645343) | Feb 2021 | high for 2021; ratio may have shifted |
| **Employers in the 11 Dec 2026 cohort** | **about 130,000-220,000** | my estimate: 770,000 workers ÷ 3.5-6 workers per employer | 2026 | low (unverified) |
| Employers registered by hand on e-WorkPermit in month 1 | 81,551 | [Daily News](https://www.dailynews.co.th/news/5314014/) | 13 Oct-14 Nov 2025 | high (a floor; most employers were imported automatically or came later) |
| Workplaces employing migrants inspected by DOE | 74,265 inspected; 1,721 prosecuted | [Bangkok Biznews](https://www.bangkokbiznews.com/news/1250192) | FY2026 (Oct 2025-1 Sep 2026) | high (a floor for the employer base) |
| **Licensed import companies (บนจ.)** | **331 registered on e-WorkPermit**; 241 held licences in May 2020 | [Daily News](https://www.dailynews.co.th/news/5314014/); [Five Corridors Project](https://fivecorridorsproject.org/myanmar-thailand/myanmar-thailand-recruiter-licensing) (search summary) | Nov 2025; May 2020 | high |
| **Proxy filers (ผู้ดำเนินการแทน)** | **17,619 registered on e-WorkPermit** | [Daily News](https://www.dailynews.co.th/news/5314014/) | month 1 | high for the count; low for who they are. Many may be employers' own HR staff or one-off filers (unverified). |
| Public bodies and foundations | 999 | [Daily News](https://www.dailynews.co.th/news/5314014/) | month 1 | high (not buyers) |
| Paying users of the only direct SaaS (workdoc) | 59+ businesses, 8,500+ workers | [workdoc about](https://www.workdoc.cloud/about) | 2026 | medium (self-reported) |

**Reading the table.**
- The worker pool is large (3.1-3.6 million) and recurs every year.
- The employer pool is wide but shallow. The average employer filing under a cabinet resolution had about 4.5 workers in 2021 ([Post Today](https://www.posttoday.com/politics/645343)). An earlier drive counted 196,000 employers for 694,600 workers, about 3.5 per employer ([DevelopmentAid](https://www.developmentaid.org/news-stream/post/5390/thailand-one-million-migrant-workers-registered), undated, search summary).
- The professional filers are the concentrated segment: 331 import companies and up to 17,619 proxies. Many of them serve several employers (unverified for proxies).
- **Working base for this product:** about 330 import companies, an estimated 1,800-3,500 professional proxies who file for several clients (my estimate: 10-20% of the 17,619), and perhaps 10,000-20,000 direct employers with 20 or more migrant workers (my rough guess; no size distribution found).

## Buyer profile and pain

**Direct employers.**
- Size: mostly micro and small. The average is 3.5-4.5 workers per employer (see above). The Bank of Thailand noted that the 2017 rules hit SMEs that rely heavily on migrant labour, while large firms coped ([Bank of Thailand](https://www.bot.or.th/th/research-and-publications/articles-and-publications/articles/Atricle_21Nov2017.html), search summary). No size distribution of employers was found. Sectors are manufacturing, agriculture, fisheries, food processing, construction and domestic work ([Pattaya Mail](https://www.pattayamail.com/thailandnews/thailand-extends-work-permits-for-770000-migrant-workers-to-prevent-labor-shortage-557605)).
- How they comply today: they file themselves on e-WorkPermit, or hand the job to a licensed import company or a proxy under a stamped power of attorney ([Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1250827)).
- Tools: paper files and scattered Excel. workdoc's own pitch says Thai firms with "tens to thousands" of migrants still keep passports, visas, permits and TM.30 records this way ([workdoc about](https://www.workdoc.cloud/about)).
- Pain:
  - The portal is hard to use. A paid course exists just to teach it ([workdoc course](https://www.workdoc.cloud/course)). The DOE's own app has a 1.5-star rating, with a review reporting login errors ([App Store, DOE-Foreigner](https://apps.apple.com/app/id6503144630)).
  - Queues. More than 2 million people were waiting for service in April 2026; 40 centres, 5 border centres and mobile units could not keep up ([Thansettakij](https://www.thansettakij.com/general-news/657139)).
  - Overlapping cohorts. One employer can have MOU workers and workers under three different cabinet resolutions. workdoc's demo dashboard shows exactly this split ([workdoc](https://www.workdoc.cloud/)).
  - Fines. 10,000-100,000 baht per worker for employing without a valid permit; a 3-year hiring ban for repeat offenders ([Bangkok Biznews](https://www.bangkokbiznews.com/news/1250192)). Late renewal costs 1,000 baht per worker ([JOBS](https://www.jobsworkerservice.com/migrant-worker-fees/)).

**Licensed import companies (บนจ.).**
- About 330 firms. Each must post a 5 million baht guarantee ([fastandeasymou.org](https://fastandeasymou.org/); [Five Corridors Project](https://fivecorridorsproject.org/myanmar-thailand/myanmar-thailand-recruiter-licensing)).
- They sell end-to-end service: MOU import, renewals, 90-day reports, change of employer, pink cards ([fastandeasymou.org](https://fastandeasymou.org/)). Many market online with their licence number on the page, for example Chaiyo (นจ.0083/2560) ([chaiyomanpower.com](https://www.chaiyomanpower.com/)) and JOBS (นจ.0003/2559) ([JOBS](https://www.jobsworkerservice.com/mou/)). The larger ones run several drop-off points and claim thousands of cases ([passport.co.th](https://www.passport.co.th/service/foreign-worker-renewal-2026/)).
- Some already build software: one built workdoc; another gives clients a LINE tracker; a third runs a 91-screen in-house back office ([JOBS Workspace](https://www.jobsworkerservice.com/document-tracking/)). **The top of this segment is a competitor, not a buyer.** JOBS Workspace also shows exactly what an agent back office needs: alerts by branch and by client, several recipients per employer, worker requests over LINE in three languages, dormitory records and billing. The middle and bottom (firms without their own software) are buyers (unverified share).

**Proxy filers (ผู้ดำเนินการแทน).**
- 17,619 registered in month 1 ([Daily News](https://www.dailynews.co.th/news/5314014/)). Who they are is not public. Likely a mix of employers' HR or office staff, document shops near provincial employment offices, accountants and lawyers (unverified).
- Pain: a portal built per employer, many clients, one deadline. They must track each client's workers, powers of attorney, health checks, insurance and fees (unverified, from the portal design).

**Queue middlemen.** In June 2026 the Labour Minister's visit heard that middlemen sell queue slots for about 2,000 baht per worker ([Naewna](https://www.naewna.com/local/972023)). An activist asked the ministry to investigate whether the system favours back-door queue sellers ([Naewna](https://www.naewna.com/politic/950084)). This is a reputational risk zone; a tool should stay clear of it.

## Willingness to pay

| What | Price | Source |
|---|---|---|
| State fee, 11 Dec 2026 renewal | 100 baht application + 900 baht permit = 1,000 baht per worker | [JOBS](https://www.jobsworkerservice.com/migrant-worker-fees/); [Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1250827) |
| Agent all-in price, 31 Mar 2026 renewal (1-5 workers) | 5,638 baht (labourer with social security), 6,735 (without), 7,238 (domestic), VAT included; plus 2,212 for a second visa step | [passport.co.th](https://www.passport.co.th/service/renew-workpermit-31march2026/) |
| Agent service fee implied by the above | about 3,400-3,500 baht per worker before VAT. VAT of 238 baht = 7% of 3,400; VAT of 245 = 7% of 3,500. The rest of the price (2,000-3,600 baht) is pass-through: 1,000 state fee, health check (about 500) and insurance (990 labourer, 1,600 domestic) | my inference from [passport.co.th](https://www.passport.co.th/service/renew-workpermit-31march2026/) and [workdoc blog](https://www.workdoc.cloud/blog/mou-renewal-cost-breakdown) |
| Agent price, MOU renewals | from 4,900 baht per worker for the 2-year MOU renewal; 9,100, 10,190 or 12,900 baht plus VAT for the Myanmar MOU group expiring 13 Feb 2025 (5,000 baht deposit) | [passport.co.th, 2-year MOU](https://www.passport.co.th/service/renewmou2year/); [passport.co.th, Myanmar MOU](https://www.passport.co.th/myanmar/work-permit-visa-renewal-myanmar-mou/) |
| Queue middlemen | about 2,000 baht per worker | [Naewna](https://www.naewna.com/local/972023) |
| Brokers charging workers | 10,000-18,500 baht | [BHRRC](https://business-humanrights.org/en/latest-news/thailand-migrant-workers-from-myanmar-face-financial-hardships-as-broker-fees-for-work-permit-renewals-soar) (search summary, from B1) |
| workdoc SaaS (Essential plan) | 500 baht a month for 10 workers (50 baht a worker), 1,500 for 50 (30), 1,900 for 100 (19), 3,000 for 200 (15), 6,000 for 500 (12). Yearly = 10 months. Onboarding 5,000-15,000 one-off. Professional plan is 2.7× and Enterprise 5× | [workdoc pricing](https://www.workdoc.cloud/pricing); tier table read from the site's JavaScript bundle |
| e-WorkPermit online course | 3,999 baht (list 5,999) | [workdoc course](https://www.workdoc.cloud/course) |
| Generic Thai HR on LINE | free for 1-20 staff | [Wansook](https://www.wansook.com/) |
| Malaysian HR with permit-expiry reminders | about RM3 per staff a month | [Info-Tech](https://www.info-tech.com.my/pricing); [PandaHRMS](https://pandahrms.com/demo/) (search summary) |

**What this says.**
- The money in this market is in service, not software. An agent's service fee is about 3,400-3,500 baht per worker per renewal (my inference above). A software tool at 15-50 baht per worker a month (180-600 a year) is small next to that.
- For a proxy or small agent, a tool that saves 15 minutes per worker per renewal, or prevents one rejected filing, pays for itself. That is the value story (unverified; needs interviews).
- For a direct micro employer with 3-5 workers, even workdoc's 500 baht a month is a hard sell against a free agent tracker. B1's 500 baht a month direct-employer price is the same as workdoc's entry price, not below it.

## Competitor table

"Duty list" means what a filer must do each cycle: know the worker's cohort and deadline; collect passport or substitute, health check from a DOE-linked hospital, social security or health insurance, and a stamped power of attorney; file and pay on e-WorkPermit; book biometrics; track status; record the new permit; send section 13 hire and exit notices; keep 90-day and TM.30 records.

| Product | Type | Covers vs the duty list | Price | Customers | Verdict |
|---|---|---|---|---|---|
| **e-WorkPermit** (DOE; run by Future Sky JV) | state portal | Filing, payment, status by email, SMS and LINE OA; registration types include employer, foreigner, import company and proxy ([Daily News](https://www.dailynews.co.th/news/5314014/); [PRD English](https://thailand.prd.go.th/en/content/category/detail/id/2874/iid/429777); [workdoc course](https://www.workdoc.cloud/course)). No cross-cohort register or expiry reminders found (unverified). | free (state fees only) | 3.6 million worker records ([Thansettakij](https://www.thansettakij.com/general-news/657139)) | Mandatory channel. Unstable: backlogs, operator suing over 715 million baht unpaid ([Post Today](https://www.posttoday.com/general-news/748152)). Product input, not a rival. |
| DOE-Foreigner app | state app | Apply, show digital permit, check status | free | 1.5 stars from 2 ratings ([App Store](https://apps.apple.com/app/id6503144630)) | Weak. |
| **workdoc** (Fast and Easy Co., Ltd.) | Thai SaaS | Document store per worker; AI OCR of passport, visa, permit; LINE expiry alerts; cohort tags; 90-day and TM.30 fields; Excel import; attendance; payroll; API on top tier ([workdoc](https://www.workdoc.cloud/)). The features page shows a single-organisation design (one company, many sites and departments). It shows no multi-client agent mode, POA generator, filing queue or Burmese or Lao interface ([workdoc features](https://www.workdoc.cloud/features)); a demo should confirm. | 500-6,000 baht a month (10-500 workers), Essential | 59+ businesses, 8,500+ workers ([workdoc about](https://www.workdoc.cloud/about)) | **The direct incumbent.** Proves demand and price. Small base so far. Owned by an import agency, so other agencies may not want to put their client lists in it (unverified). |
| **Agent-bundled trackers** (e.g., passport.co.th "ระบบแรงงานของฉัน") | service + free tool | LINE expiry alerts, worker list, QR-code job tracking ([passport.co.th](https://www.passport.co.th/service/foreign-worker-renewal-2026/)) | free with service (service from 5,638 baht a worker) | "several thousand cases" (self-reported) | Kills a standalone reminder app for employers who already use an agent. |
| **JOBS Workspace** (JOBS, licence นจ.0003/2559) | in-house agent back office | Intake, document work, filing, site care, billing; 60/30/7-day alerts by LINE and email; several recipients per employer; worker requests over LINE in Thai, Burmese and Lao; dormitory records; 91 screens, 8 roles, 5 branches, 57,000+ past jobs migrated ([JOBS Workspace](https://www.jobsworkerservice.com/document-tracking/)) | not sold; staff and authorised users only | JOBS's own clients | Proof that agents value a multi-client back office. Shows the feature bar. Not for sale, so smaller agents lack one. |
| Doc2Work (Diginex, with Winrock, USAID CTIP and Mars Petcare) | donor pilot, worker side | Education and a guide to legal status for migrant fishers ([Diginex](https://www.diginex.com/projects/safe-migration-for-migrant-fishers)) | free (pilot) | fishers in a pilot | Not an employer tool. Shows NGO and buyer-brand interest in migrant documentation. |
| Licensed import companies and proxies | service | Everything, by hand | service fee about 3,400-3,500 baht a worker (my inference) | 331 companies; 17,619 proxies ([Daily News](https://www.dailynews.co.th/news/5314014/)) | Mainly buyers for a back-office tool; the largest are competitors. |
| Queue middlemen | informal | Biometric slot only | about 2,000 baht a worker ([Naewna](https://www.naewna.com/local/972023)) | unknown | Not a model to copy. |
| Generic Thai HR and payroll (HumanSoft, Wansook, hrzoft, hrpm) | SaaS | Attendance and payroll with LINE alerts; no migrant-permit module found ([HumanSoft](https://www.humansoft.co.th/th/blog/time-attendance-for-line); [Wansook](https://www.wansook.com/)) | free to low | large | Not a competitor today; could add a module. |
| Odoo visa and passport expiry apps (ECOSIRE and others) | add-on | Generic expiry dates only | about USD 299 one-off ([ECOSIRE](https://ecosire.com/ja/apps/odoo/odoo-visa-passport-expiry), from B1) | Odoo users | Irrelevant to small migrant employers. |
| Issa Compass | expat visa service | Non-B work permits for expat staff ([Issa Compass](https://www.issacompass.com/insights/thailand-work-permit-compliance-for-companies-what-hr-teams-must-know-to-avoid-f)) | not public | expat employers | Different segment. |
| Spreadsheets and paper | default | whatever the user builds | free | most employers ([workdoc about](https://www.workdoc.cloud/about)) | The real "competitor" for proxies. |

**Discussion.**
- B1 and the first passes said no employer-side software exists. That is now false. workdoc does most of the employer-side job and is priced sensibly. A newcomer selling the same thing to the same employers would be second, with no edge.
- workdoc's design is per employer, with prices set by the number of workers in one company. A proxy with 30 small client employers needs something else: one login, a client list, a worker list per client, POA templates per client, a filing queue across all clients, client billing and a status link for each client. I found nothing that does this.
- The big licensed agencies already have their own tools (passport.co.th, JOBS, Fast and Easy). The best buyers are therefore the smaller import companies and the professional proxies, who compete with those agencies and cannot build software themselves (unverified).
- workdoc's owner is itself an import agency. Rival agencies may not want to store client data with a competitor. A neutral vendor has an argument here (unverified; test in interviews).

## Channels

- **e-WorkPermit cohort deadlines and search.** Each cabinet resolution sets off a wave of searches. Agents and workdoc publish deadline pages for each cohort ([passport.co.th](https://www.passport.co.th/service/foreign-worker-renewal-2026/); [JOBS](https://www.jobsworkerservice.com/migrant-worker-fees/); [workdoc blog](https://www.workdoc.cloud/blog/mou-renewal-cost-breakdown)). Thai SEO content per cohort is the main inbound channel.
- **LINE.** The DOE runs LINE OA @doewp ([Thansettakij](https://www.thansettakij.com/social-biz/655341)). workdoc (@workdoc) and the agents sell over LINE ([workdoc](https://www.workdoc.cloud/); [fastandeasymou.org](https://fastandeasymou.org/)). A LINE OA plus LINE ads is the expected sales path.
- **Training.** A paid online e-WorkPermit course sells at 3,999 baht ([workdoc course](https://www.workdoc.cloud/course)). A cheaper or free course for proxies is a lead magnet.
- **Licensed import companies.** About 330 firms ([Daily News](https://www.dailynews.co.th/news/5314014/)). Both buyers and possible white-label partners.
- **Business associations.** The Thai Chamber of Commerce has campaigned on migrant registration ([Bangkok Biznews](https://www.bangkokbiznews.com/business/economic/1078261), from B1). The Federation of Thai Industries joins DOE meetings on MOU workers ([Bangkok Biznews](https://www.bangkokbiznews.com/social/978456), from B1). Named contacts were not found.
- **Point-of-need partners.** Hospitals linked to the DOE health-check system and migrant health insurers; every renewal needs both ([Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1250827)). Partnership terms are unknown (unverified).
- **Facebook and LINE groups** of employers and agents (unverified; not indexed by search).

## Regional expansion

- **Malaysia.** 2,353,297 temporary work passes (PLKS) issued in 2025 through the state FWCMS system ([The Vibes](https://www.thevibes.com/articles/news/119365/foreign-worker-system-nets-rm381m-in-fees-as-government-touts-transparency-gains)). Renewal is yearly, inside a window before expiry ([FWCMS help](https://help.fwcms.com.my/article/how-do-i-renew-a-plks)). FWCMS has its own alerts module, and HR vendors (PandaHRMS, Info-Tech, Worksy) already sell permit-expiry reminders from about RM3 per staff a month ([PandaHRMS](https://pandahrms.com/demo/); [Info-Tech](https://www.info-tech.com.my/pricing); search summary). Crowded. Only an agent back office might fit.
- **Within Thailand (adjacent).** Expat work permits (Non-B, BOI) use the same e-WorkPermit system ([EY](https://www.ey.com/en_gl/technical/tax-alerts/thailand-launches-online-platform-for-work-permit-applications)). Served by law firms and visa firms such as Issa Compass. A second segment rather than a second country.
- **Sending countries** (Myanmar, Laos, Cambodia). Their recruitment agencies have different duties. Not the same product.

## Implications for positioning and pricing

**Positioning.**
- **Sell to filers, not to employers.** The target is the smaller licensed import company and the professional proxy who files for many employers and has no in-house system. The big agents (JOBS, passport.co.th, Fast and Easy) already have one ([JOBS Workspace](https://www.jobsworkerservice.com/document-tracking/); [passport.co.th](https://www.passport.co.th/service/foreign-worker-renewal-2026/); [workdoc](https://www.workdoc.cloud/)).
- **Promise: "run 30 client employers through one deadline without a spreadsheet".** Core features: client list; workers per client; cohort and deadline per worker, kept current with each cabinet resolution; pre-filing checklist (passport, DOE-linked health check, social security or insurance, stamped POA); POA generator per client; filing queue across clients; status per worker; client billing; a LINE status link the agent can send to each client; worker requests in Burmese and Lao. The JOBS feature list is a good benchmark.
- **Neutrality is a selling point.** workdoc belongs to an import agency. A rival agency may not want its client list there (unverified; test in interviews).
- **Do not fight workdoc for direct employers.** Offer employers a free view of their own workers, fed by their proxy. That turns each proxy into a channel, and each employer into a lead for the proxy.
- **Stay away from queue slots.** Selling biometric queue access is the business of the middlemen under investigation ([Naewna](https://www.naewna.com/politic/950084)).

**Pricing (hypotheses to test, all unverified).**
- Anchor: workdoc's Essential plan costs 15-19 baht per worker a month at 100-200 workers ([workdoc pricing](https://www.workdoc.cloud/pricing)). An agent's service fee is about 3,400-3,500 baht per worker per renewal (my inference from [passport.co.th](https://www.passport.co.th/service/renew-workpermit-31march2026/)).
- **Agent plan:** about 990 baht a month including 100 active workers, then 8 baht per extra worker a month; yearly price = 10 months, as workdoc does. At 300 workers that is about 2,590 baht a month, below workdoc's 4,200 for 300 workers.
- **Alternative for seasonal filers:** pay per filing, about 49-79 baht per worker renewed. This fits cohort waves (Mar, Apr, Dec 2026) and is about 1.5-2.5% of the agent's service fee per worker.
- **Employer view:** free, read-only, invited by the agent.
- **Thai buyers expect a Thai tax invoice.** Agents advertise that they issue one every time ([passport.co.th](https://www.passport.co.th/service/foreign-worker-renewal-2026/)). Selling from a foreign company by card may be acceptable for SaaS, but a missing Thai tax invoice is a friction point for VAT-registered agents (unverified; see the company and payments part).

**Revised revenue view (my estimate, unverified).**

| Segment | Buyers | Share | Price a year (baht) | Revenue (baht) |
|---|---|---|---|---|
| Smaller licensed import companies | about 330 | 8% = 26 | 36,000 | about 940,000 |
| Professional proxies (est. 1,800-3,500; mid 2,500) | 2,500 | 6% = 150 | 15,000 | about 2,250,000 |
| Direct employers with 20+ migrants (est. 10,000-20,000; mid 15,000) | 15,000 | 0.5% = 75 | 9,000 | about 675,000 |
| **Total, year 3** | | | | **about 3.9 million** (range 2-5 million) |

- This is below B1's 4-9 million baht, because workdoc already holds the employer segment and the large agents build their own tools.
- About 3.9 million baht is roughly USD 115,000-120,000 a year (unverified exchange rate). With an AI-built product and no hired developers this can still be a profitable small business, but not a large one.

## Open questions

- **Who are the 17,619 proxies?** How many file for more than five employers? Only the DOE or interviews can answer. This is the single biggest sizing gap.
- **DOE statistics.** Download the monthly foreign-worker statistics and the licensed-agency list from doe.go.th from a Thai connection (blocked from here). The March 2025 DOE statistics file cited by the MWG submission is at [doe.go.th](https://www.doe.go.th/prd/assets/upload/files/alien_th/2f3afb6961c0750735f6956ccbeea157.pdf) (not opened).
- **Employer size distribution.** How many employers have 20 or more migrant workers? No source found.
- **workdoc's limits.** Does it support many client employers in one account, POA generation or Burmese and Lao interfaces? Book a demo.
- **Willingness to pay of small agents.** Monthly subscription or per filing? Test with 10-15 proxies and 5 small import companies.
- **Portal roadmap.** Will e-WorkPermit add a bulk agent dashboard, data export or an API? The operator dispute and a planned system overhaul make this uncertain ([Post Today](https://www.posttoday.com/general-news/748152); [Naewna](https://www.naewna.com/politic/950084)).
- **Tax invoices.** Will VAT-registered Thai agents buy from a foreign seller without a Thai tax invoice?
- **Associations.** No association of import companies or proxies with a named contact was found. Find one through the licensed agencies.
- **Malaysia.** Is there an agent back-office gap there, given that HR vendors already cover employers?

## Sources

Opened and read (directly or by download):
- https://www.workdoc.cloud/ ; https://www.workdoc.cloud/features ; https://www.workdoc.cloud/pricing ; https://www.workdoc.cloud/about ; https://www.workdoc.cloud/course ; https://www.workdoc.cloud/blog/mou-renewal-cost-breakdown
- https://fastandeasymou.org/
- https://www.passport.co.th/service/foreign-worker-renewal-2026/ ; https://www.passport.co.th/service/renew-workpermit-31march2026/ ; https://www.passport.co.th/service/renewmou2year/ ; https://www.passport.co.th/myanmar/work-permit-visa-renewal-myanmar-mou/
- https://www.jobsworkerservice.com/document-tracking/ ; https://www.jobsworkerservice.com/migrant-worker-fees/ ; https://www.jobsworkerservice.com/mou/
- https://www.chaiyomanpower.com/
- https://www.dailynews.co.th/news/5314014/
- https://www.posttoday.com/politics/645343
- https://www.posttoday.com/general-news/748152
- https://www.thansettakij.com/general-news/657139 ; https://www.thansettakij.com/general-news/668193 ; https://www.thansettakij.com/economy/658488
- https://www.bangkokbiznews.com/news/1250192
- https://thestandard.co/thai-cabinet-foreign-labor-extension/
- https://www.naewna.com/politic/950084
- https://www.ohchr.org/sites/default/files/documents/issues/business/workinggroupbusiness/cfis/labour-migration/subm-labour-migration-business-cso-migrant-wg.pdf
- https://apps.apple.com/app/id6503144630
- https://www.diginex.com/projects/safe-migration-for-migrant-fishers

Search summaries only (not opened):
- https://eng.mizzima.com/2026/07/22/36614
- https://thailand.iom.int/resources/thailand-labour-migration-profile-recruitment-and-employment-trends-and-risks-migrant-workers
- https://fivecorridorsproject.org/myanmar-thailand/myanmar-thailand-recruiter-licensing
- https://www.developmentaid.org/news-stream/post/5390/thailand-one-million-migrant-workers-registered
- https://www.bot.or.th/th/research-and-publications/articles-and-publications/articles/Atricle_21Nov2017.html
- https://www.wansook.com/ ; https://www.humansoft.co.th/th/blog/time-attendance-for-line
- https://www.thevibes.com/articles/news/119365/foreign-worker-system-nets-rm381m-in-fees-as-government-touts-transparency-gains
- https://help.fwcms.com.my/article/how-do-i-renew-a-plks
- https://pandahrms.com/demo/ ; https://www.info-tech.com.my/pricing
- https://www.ey.com/en_gl/technical/tax-alerts/thailand-launches-online-platform-for-work-permit-applications

Carried over from the B1 report (not re-checked here):
- https://www.infoquest.co.th/?p=615165 ; https://www.naewna.com/local/972023 ; https://www.thansettakij.com/social-biz/655341 ; https://www.bangkokbiznews.com/news/news-update/1250827 ; https://thailand.prd.go.th/en/content/category/detail/id/2874/iid/429777 ; https://www.pattayamail.com/thailandnews/thailand-extends-work-permits-for-770000-migrant-workers-to-prevent-labor-shortage-557605 ; https://business-humanrights.org/en/latest-news/thailand-migrant-workers-from-myanmar-face-financial-hardships-as-broker-fees-for-work-permit-renewals-soar ; https://ecosire.com/ja/apps/odoo/odoo-visa-passport-expiry ; https://www.issacompass.com/insights/thailand-work-permit-compliance-for-companies-what-hr-teams-must-know-to-avoid-f ; https://www.bangkokbiznews.com/business/economic/1078261 ; https://www.bangkokbiznews.com/social/978456
