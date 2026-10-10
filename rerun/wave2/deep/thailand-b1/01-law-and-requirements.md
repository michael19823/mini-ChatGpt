# Thailand B1: the law behind migrant-worker work-permit renewal, turned into product requirements

Status: complete as of 2026-10-10 (open questions listed at the end). Written for a product that helps small employers, proxy filers and small import companies keep Lao, Myanmar and Vietnamese workers legal (renewals, notices, documents) on the state e-WorkPermit portal.

Primary law source: the Royal Ordinance on Foreign Workers Management B.E. 2560 (พระราชกำหนดการบริหารจัดการการทำงานของคนต่างด้าว พ.ศ. 2560), as amended by Royal Ordinance No. 2 B.E. 2561. I used the consolidated Thai text with Royal Gazette footnotes on [drthawip.com](https://www.drthawip.com/book/export/html/3263) and the definitions on [legardy.com](https://legardy.com/thai-law/foreinger-work-law/foreinger-work-law-general). Both are private copies of the gazette text. I could not open the Royal Gazette or krisdika.go.th directly.

Abbreviations used below:
- **RO** = the Royal Ordinance above. "s." = section (มาตรา).
- **DOE** = Department of Employment (กรมการจัดหางาน), Ministry of Labour.
- **CR** = cabinet resolution (มติคณะรัฐมนตรี).
- **SSA** = Social Security Act B.E. 2533. **SSO** = Social Security Office.
- **MOU** = workers brought in under the government-to-government memoranda (s.46-58).
- **L/M/V** = Lao, Myanmar, Vietnamese. **บนจ.** = licensed company that brings foreign workers to employers.
- **Proxy** = ผู้รับมอบอำนาจ / ผู้ดำเนินการแทน, a person who files under a power of attorney (POA).

## Summary

- **One national law sets the core duties.** The RO has been in force since 23 Jun 2017. The No. 2 amendment was published on 27 Mar 2018. An NCPO order delayed the main penalties (s.101, 102, 119, 122) to 1 Jan 2018 ([RO text](https://www.drthawip.com/book/export/html/3263)).
  - s.9: an employer may not employ a foreigner without a permit, or outside the permit's scope.
  - s.13: the employer must notify the registrar within 15 days of a hire and within 15 days of an exit.
  - s.67: a permit must be renewed before it expires. The worker may keep working while the renewal is pending.
  - s.131: nobody may hold a worker's permit or identity documents.
- **The renewal cycle itself runs on cabinet resolutions, not on the RO.** Each cohort gets its own CR, a Ministry of Labour announcement on permission to work, and a Ministry of Interior announcement on permission to stay ([InfoQuest, 14 Jul 2026](https://www.infoquest.co.th/?p=615165)). Dates, documents and conditions change every round.
- **The live deadline is 11 Dec 2026.** It covers about 770,000 L/M/V workers, counted as of 30 Jun 2026 ([Thai Post](https://www.thaipost.net/general-news/1032256/)).
  - Filing window: 8 Sep to 11 Dec 2026. On the last day, filing closes at 16:30 and fee payment at 20:00.
  - Fees: 100 baht per application plus 900 baht per permit.
  - The renewed permit runs to 11 Dec 2027.
  - Passport and visa must be completed by 30 Jun 2027 ([Nation, 13 Aug 2026](https://www.nationthailand.com/news/policy/40069723); [Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1250827)).
- **Several cohorts overlap.** At least four live clocks exist for L/M/V workers:
  - the December cohort (11 Dec 2026, then 11 Dec 2027);
  - the March cohort (31 Mar 2027; passport and visa were due by 28 Sep 2026) ([Thai Post, 1 Mar 2026](https://www.thaipost.net/general-news/955747/));
  - a February cohort of Lao and Vietnamese workers (13 Feb 2027) ([Thai Post](https://www.thaipost.net/general-news/907398/), search snippet);
  - MOU workers on a 2+2-year term, then return home ([Thai Post](https://www.thaipost.net/general-news/573675/), search snippet).
  - Cambodians and border-pass workers (s.64) run on separate tracks.
  - The core product need is one register that knows which rule set applies to each worker.
- **Filing is online only.** e-WorkPermit (eworkpermit.doe.go.th) replaced the old systems from 13 Oct 2025 ([PRD English](https://thailand.prd.go.th/en/content/category/detail/id/2874/iid/429777); [EY](https://www.ey.com/en_gl/technical/tax-alerts/thailand-launches-online-platform-for-work-permit-applications)).
  - The flow has 8 steps: register; file; pay the application fee; document check; approval; pay the permit fee; book an appointment; biometrics at a service centre ([PSU guide](https://gao.psu.ac.th/images/download/immigration/e-WorkPermit_Information.pdf)).
  - Directors and authorised representatives verify their identity with the ThaiD app ([Clark Hill](https://www.clarkhill.com/news-events/news/thailand-launches-online-platform-for-work-permit-applications/), search snippet).
  - The portal sends status updates by email, SMS and LINE. I found no evidence that it sends expiry reminders ([PRD English](https://thailand.prd.go.th/en/content/category/detail/id/2874/iid/429777)). I found no public API or bulk-upload feature (unverified).
- **Penalties are per worker.**
  - Employing a worker without a valid permit costs 10,000-100,000 baht per worker.
  - A repeat offence costs up to 1 year in prison and/or 50,000-200,000 baht per worker, plus a 3-year ban on hiring foreigners (s.102).
  - A missed s.13 notice costs up to 20,000 baht (s.103).
  - Holding a worker's documents costs up to 6 months and/or 10,000-100,000 baht (s.131).
  - Illegal deductions cost up to 6 months plus twice the amount (s.114) ([RO text](https://www.drthawip.com/book/export/html/3263)).
- **Enforcement is real and rising.** In FY2026 (1 Oct 2025 to 1 Sep 2026) the DOE inspected 74,265 workplaces and prosecuted 1,721 of them. It inspected 888,620 workers and prosecuted 5,330, of whom 1,792 were doing jobs reserved for Thais ([Bangkok Biznews](https://www.bangkokbiznews.com/news/1250192), search snippet). On 4 Sep 2026 the government ordered proactive inspections ([PRD](https://www.prd.go.th/th/content/category/detail/id/39/iid/538443), search snippet).
- **Legal shape of the business.**
  - A licence is needed only for the business of bringing foreigners **into** Thailand to work (s.5, s.26). A licence-free business here risks 1-3 years in prison and 200,000-600,000 baht (s.105) ([legardy s.5](https://legardy.com/thai-law/foreinger-work-law/foreinger-work-law-general); [RO text](https://www.drthawip.com/book/export/html/3263)).
  - My reading: software and document help for workers already in Thailand falls outside that licence (unverified; confirm with a Thai lawyer).
  - Filing on the portal for someone else needs a POA with stamp duty. On the portal, it also appears to need a ThaiD-verified representative. ThaiD is likely limited to Thai ID holders (unverified).
  - "Brokerage work" (งานนายหน้า) is closed to foreigners ([Matichon](https://www.matichon.co.th/local/news_2049383), search snippet).
  - So a foreign-owned SaaS should sell to Thai filers and employers. It should not file in its own name.
- **Product.** Sixty testable requirements follow, each traced to its legal basis. The core:
  - a multi-cohort worker register with a versioned rules table per CR;
  - deadline and expiry reminders;
  - a pre-filing checklist per worker;
  - a POA generator with the stamp-duty rule;
  - s.13 hire and exit notice tracking;
  - a job-scope check against reserved occupations;
  - an inspection pack;
  - a multi-client view for proxies;
  - Thai, Burmese, Lao and Vietnamese output;
  - PDPA-grade handling of passport and health data.

## Who is obliged

### The employer

- **Definition.** "Employer" (นายจ้าง) means an employer under the labour protection law. It also includes any person or juristic person who brings a foreigner to work for itself (RO s.5) ([legardy s.5](https://legardy.com/thai-law/foreinger-work-law/foreinger-work-law-general)).
  - It covers companies, sole traders, farms and households that employ a domestic worker.
- **No size threshold.** The RO has no exemption by number of workers or by turnover. One worker is enough to trigger s.9, s.13 and s.102 ([RO text](https://www.drthawip.com/book/export/html/3263)).
- **The one carve-out.** Under s.102, a family member who lives in the same household is not liable just by being family. Liability rests on the person who employs ([RO text](https://www.drthawip.com/book/export/html/3263)).
- **Directors.** When a company offends, the directors or managers who ordered it, or who failed to stop it, can also be liable (s.132) ([RO text](https://www.drthawip.com/book/export/html/3263)).
- **Sector matters for health cover.** Workers covered by SSA s.33 show their social-security membership. Workers in sectors outside the SSA (domestic work, agriculture, livestock) need health insurance of at least 1 year. A worker who changed employer and is waiting for SSO approval needs insurance of at least 6 months ([Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1250827)).

### The worker

- The worker must hold a permit and work only within its scope (s.8). The worker must renew before expiry (s.67), show the permit on request (s.68) and replace a lost permit within 15 days (s.69) ([RO text](https://www.drthawip.com/book/export/html/3263)).
- The worker must also notify the registrar of the employer, workplace and main duties within 15 days of starting, and of any change of employer (s.64/2). The fine is up to 20,000 baht (s.119/1) ([RO text](https://www.drthawip.com/book/export/html/3263)).
- A worker without a permit faces a fine of 5,000-50,000 baht and deportation (s.101) ([RO text](https://www.drthawip.com/book/export/html/3263)).
- **Who files the renewal.** The worker in person, or the employer or the import company under a POA with stamp duty ([Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1250827); [Nation](https://www.nationthailand.com/news/policy/40069723)). The RO lets an employer apply and pay fees on the worker's behalf (s.60).

### Licensed import companies (บนจ.) and proxies

- **Licensed import companies** need a licence under s.26. They may not take money beyond approved fees (s.42, s.111). They must notify the registrar within 15 days of delivering workers (s.43). They must repatriate MOU workers at the end of the term (s.55, s.114/1) ([RO text](https://www.drthawip.com/book/export/html/3263)). A licence needs paid-up capital of at least 1 million baht ([drthawip.com, ministerial rule](https://www.drthawip.com/book/export/html/3269), via the lead report).
- **Proxies** (ผู้รับมอบอำนาจ) file under a POA. The portal has a separate registration manual and a separate LINE channel (@990seasu) for "employment agencies and authorised representatives" ([PSU guide](https://gao.psu.ac.th/images/download/immigration/e-WorkPermit_Information.pdf)).
  - In the portal's first month, 81,551 employers, 331 licensed import companies and 17,619 proxies registered ([Daily News](https://www.dailynews.co.th/news/5314014/), via the lead report).
  - I found no separate law or licence for proxies (unverified). Their only formal requirements found are a valid POA and identity verification on the portal.
- **What needs a licence.** "Bringing foreigners to work" (การนำคนต่างด้าวมาทำงาน) is defined as any action to bring foreigners **into the Kingdom** to work (s.5) ([legardy s.5](https://legardy.com/thai-law/foreinger-work-law/foreinger-work-law-general)). My reading: renewal paperwork for workers already in Thailand is not a licensed activity (unverified).
  - Unlicensed import business: 1-3 years and/or 200,000-600,000 baht (s.105).
  - Staff doing recruitment work without being licensed staff: up to 3 years and/or up to 600,000 baht (s.110) ([RO text](https://www.drthawip.com/book/export/html/3263)).
- **Reserved jobs.** A Ministry of Labour announcement, published in the Royal Gazette on 21 Apr 2020, lists 27 jobs closed to foreigners and 13 jobs open only under conditions. The closed list includes driving, beauty work and brokerage ("งานนายหน้า") ([Matichon](https://www.matichon.co.th/local/news_2049383), search snippet). A foreign founder working in Thailand as a filing broker would breach this (my reading).

### Which workers and which clock (cohort map)

| Cohort | Legal basis | Current end date | Filing deadline | Passport and visa condition | Source |
|---|---|---|---|---|---|
| December cohort (L/M/V) | CR 11 Nov 2025; CR 14 Jul 2026; MoL announcement on permission to work "เป็นการเฉพาะ"; MoI announcement on stay "เป็นกรณีพิเศษ" | 11 Dec 2026, renewable to 11 Dec 2027 | 8 Sep to 11 Dec 2026 (16:30 file, 20:00 pay) | Passport or substitute plus visa by 30 Jun 2027. For a passport issued after 1 Aug 2026: within 90 days, but no later than 30 Jun 2027. Then create or update the personal record (ทะเบียนประวัติ). | [Nation](https://www.nationthailand.com/news/policy/40069723); [Bangkok Biznews 1247207](https://www.bangkokbiznews.com/news/news-update/1247207); [InfoQuest](https://www.infoquest.co.th/?p=615165) |
| Also inside the December cohort | Same | Same | Same | Workers who could not get a passport by 31 Jul 2026, and workers whose passport expired before 11 Dec 2026. Myanmar workers without a passport may attach it later. | [Nation](https://www.nationthailand.com/news/policy/40069723); [Bangkok Biznews 1250827](https://www.bangkokbiznews.com/news/news-update/1250827) |
| March cohort (L/M/V, not Cambodia) | CR 24 Sep 2024; CR 2 Dec 2025 | 31 Mar 2027 | Was 31 Mar 2026; catch-up window 7-21 Apr 2026 | Passport and visa or stay permission by 28 Sep 2026 | [Thai Post 955747](https://www.thaipost.net/general-news/955747/); [Thansettakij](https://www.thansettakij.com/general-news/657139) (lead report) |
| February cohort (Lao, Vietnamese) | CR 4 Feb 2025 and a later CR (unverified) | 13 Feb 2027 | Not found | Not found | [Thai Post 907398](https://www.thaipost.net/general-news/907398/) (search snippet) |
| MOU workers (C/L/M/V) | RO s.46-58; bilateral MOUs | Permit 2 years, renewable once for 2 years, then return home | Before each expiry (s.67) | Passport and visa from the MOU process | [Thai Post 573675](https://www.thaipost.net/general-news/573675/) (search snippet) |
| Myanmar MOU workers whose 4 years end in 2026 | Proposal only | Waiver of the 30-day break agreed in principle with Myanmar on 23 Jul 2026; awaiting the policy committee (คบต.) and cabinet | n/a | n/a | [InfoQuest 625642](https://www.infoquest.co.th/?p=625642) (search snippet) |
| Border-pass workers (s.64), e.g. Cambodians | RO s.64; Ministry announcements | 3-month permit; 30-day stay per entry | Per entry | Border pass; report to immigration every 30 days; up to 3 employers within the permitted province (policy committee meeting of 8 Jul 2025) | Search summary of [Thansettakij 635911](https://www.thansettakij.com/economy/635911) and [Thairath 2876467](https://www.thairath.co.th/news/politic/2876467); exact page not pinned down |
| Cambodians stranded by the 2025 border closure | CR 22 Jul 2025; MoI announcement of 8 Aug 2025, effective 7 Jun 2025 | Temporary humanitarian stay | n/a | n/a | [The Standard](https://thestandard.co/cambodian-workers-6-month-extension-border-closure/); [PRD 408015](https://www.prd.go.th/th/content/category/detail/id/39/iid/408015) (search snippets) |

Notes on the map:
- A Thairath snippet says the 2 Dec 2025 CR allowed work "to 31 Mar 2027" ([Thairath](https://www.thairath.co.th/news/politic/2917222), search snippet). That agrees with Thai Post.
- The lead report mentions a regularisation cohort with permits to 14 Oct 2026 ([Khaosod English](https://www.khaosodenglish.com/featured/2025/10/06/thailand-to-legalize-700000-undocumented-workers-from-4-nations/), snippet only). I could not confirm it (unverified).

## Duty-by-duty table

Legal sources in this table:
- "RO" = Royal Ordinance B.E. 2560 as amended B.E. 2561. Royal Gazette vol. 134 part 65 Kor, 22 Jun 2017; amendment in vol. 135 part 19 Kor, 27 Mar 2018 ([RO text](https://www.drthawip.com/book/export/html/3263)).
- "Cohort rules" = the 14 Jul 2026 CR and DOE notices for the December cohort ([Nation](https://www.nationthailand.com/news/policy/40069723); [Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1250827)). The Royal Gazette text of the two announcements was not found (see Open questions).
- "Evidence an inspector asks for": I found no published DOE inspection checklist. The entries are my inference from the offences that inspectors prosecute (marked "inferred").

| # | Duty | Legal basis | What must exist or be done | Frequency / deadline | Evidence an inspector asks for | Penalty |
|---|---|---|---|---|---|---|
| 1 | Employ only foreigners who hold a valid permit, and only within its scope (employer, job, workplace) | RO s.8, s.9 | A valid permit for every foreign worker on site, matching the employer and the job | Continuous | Permit (card or e-permit) or the interim receipt for each worker found on site; the job actually done (inferred) | s.102: 10,000-100,000 baht per worker. Repeat: up to 1 year and/or 50,000-200,000 baht per worker, plus a 3-year ban on hiring foreigners. Worker: s.101, 5,000-50,000 baht plus deportation |
| 2 | Renew the permit before it expires | RO s.67; cohort rules | File the renewal online with documents and pay the fees before the cut-off. The worker may keep working while it is pending (s.67). December cohort: by 11 Dec 2026, 16:30 to file and 20:00 to pay | Per cohort deadline; MOU and others before each expiry | Application receipt and fee receipt (valid as interim proof); temporary permit after approval ([Nation](https://www.nationthailand.com/news/policy/40069723)) | A lapse turns into duty 1 (s.102). The DOE says it will prosecute employers and workers found without permits after a deadline ([Thai Post](https://www.thaipost.net/general-news/955747/)) |
| 3 | Health check for prohibited diseases at a hospital linked to the DOE system | RO s.64/1; cohort rules | Certificate from a state hospital or a licensed private hospital whose system is linked to the DOE ([Nation](https://www.nationthailand.com/news/policy/40069723)). Clinics list 5 diseases: leprosy, dangerous-stage TB, drug addiction, chronic alcoholism and elephantiasis ([hdmall clinic listing](https://hdmall.co.th/health-checkup/health-check-request-medical-certificate-5-diseases-4-items-phyathai-3-hospital), search snippet; the legal list is unverified) | Each renewal | Certificate on file (inferred) | No separate fine found. Without it the renewal fails, so duty 1 applies |
| 4 | Social security for covered workers, or health insurance for the rest | SSA s.33, 34, 47, 49; cohort rules | SSA s.33 members: proof of membership. Awaiting SSO after a change of employer: insurance of at least 6 months. Domestic work, agriculture and livestock: health insurance of at least 1 year from the Ministry of Public Health or an approved insurer ([Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1250827)). SSA: register the employee within 30 days (s.34); 5% employer plus 5% worker on wages of 1,650-17,500 baht a month; pay by the 15th of the next month (s.47); 2% a month surcharge (s.49) ([Lexbangkok](https://lexbangkok.com/?p=10364)) | At renewal; SSA monthly | SSO registration or insurance card valid to the end of the permit (inferred) | SSA penalties not checked (unverified). Without cover the renewal fails |
| 5 | Passport or substitute, visa or stay permission, and personal record | MoI announcement (stay "เป็นกรณีพิเศษ"); cohort rules | December cohort: passport plus visa by 30 Jun 2027, or within 90 days of a passport issued after 1 Aug 2026 (never later than 30 Jun 2027). Then create or update the personal record (ทะเบียนประวัติ) ([Bangkok Biznews 1247207](https://www.bangkokbiznews.com/news/news-update/1247207)). March cohort: by 28 Sep 2026 ([Thai Post](https://www.thaipost.net/general-news/955747/)) | Per cohort | Passport with visa or stay stamp (inferred) | Stay permission lapses, so the worker is unlawful and duty 1 applies. Immigration penalties not checked (unverified) |
| 6 | Pay state fees | RO s.6 and fee schedule; ministerial rules; cohort rules | 100 baht per application plus 900 baht per permit (1 year) ([Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1250827)). Ministerial rules set 900 baht a year for MOU and border groups and 3,000 baht a year for skilled workers ([Matichon](https://www.matichon.co.th/local/news_2316974), search snippet) | Each renewal; cut-off 20:00 on the last day | Fee receipt | Unpaid means not filed, so duty 1 applies |
| 7 | Power of attorney with stamp duty when someone other than the worker files | Cohort rules; Revenue Code stamp-duty schedule, item 7 | Written POA. Stamp duty: 10 baht to act once; 30 baht for one or more attorneys acting jointly more than once; 30 baht per attorney who may act separately. An under-stamped POA is inadmissible as evidence in civil cases ([Revenue Department](https://www.rd.go.th/25348.html)) | Each filing, or once if the POA covers repeated acts | POA copy attached in the portal ([CLMV employer manual](https://e-workpermit.doe.go.th/CLMV-WEB/um/VP_CLMV_UserManual_Employer_20230717.pdf), search snippet) | Filing rejected (unverified); stamp-duty surcharges under the Revenue Code (not checked) |
| 8 | Notify hire and exit | RO s.13 | Notify the registrar of each foreign worker's name, nationality and job within 15 days of the hire. Notify within 15 days of the worker leaving, with the reason. The portal has an "entry/exit or change of employer" function ([Exworker](https://www.exworker.co.th/en/blog/e-workpermit-en)) | 15 days from the event | Notice receipts (inferred) | s.103: up to 20,000 baht |
| 9 | MOU workers: written contract kept at the workplace; notices when a worker leaves | RO s.46, s.50 | Written contract kept at the workplace (s.46). Exit notice to the registrar within 15 days (s.46(3)). If the worker refuses the job or leaves, notify the licensee and the registrar within 7 days (s.50) | Ongoing; 7 or 15 days | The contract, on request | s.113: failure to show the contract, up to 5,000 baht. s.113/1: missed exit notice, up to 5,000 baht |
| 10 | Do not hold the worker's permit or identity documents | RO s.131 | The worker keeps the documents. If the worker consents to someone else keeping them, the worker must get access on request | Continuous | Who holds the documents (inferred) | Up to 6 months and/or 10,000-100,000 baht |
| 11 | Do not charge recruitment costs to the worker; cap deductions | RO s.49 (MOU employers bringing in their own workers) | The employer may only recover costs it advanced, such as passport, medical check and permit fees. Wage deductions are capped at 10% of monthly pay | Each payroll | Payroll and deduction records (inferred) | s.114: up to 6 months plus a fine of twice the amount; the court orders a refund |
| 12 | Worker shows the permit on request; replace a lost permit | RO s.68, s.69 | Permit available at work; a replacement within 15 days of learning of the loss | Continuous / 15 days | The permit | s.120 (worker): up to 5,000 baht |
| 13 | Worker notifies employer, workplace and duties | RO s.64/2 | Notice within 15 days of starting work, and on any change of employer | 15 days | Notice receipt | s.119/1 (worker): up to 20,000 baht |
| 14 | Keep workers out of reserved jobs | RO s.7, s.9; MoL announcement on prohibited work (Royal Gazette 21 Apr 2020) | 27 jobs closed and 13 conditional ([Matichon](https://www.matichon.co.th/local/news_2049383), search snippet). Front-shop sales were opened to MOU workers of 4 countries under conditions ([Matichon](https://www.matichon.co.th/local/news_2153991), search snippet). Common breaches: street vending, Thai massage, hairdressing, beauty, driving ([Bangkok Biznews](https://www.bangkokbiznews.com/news/1250192), search snippet) | Continuous | The work actually done versus the permit (inferred) | Outside scope falls under s.9 and s.102 (my reading) |
| 15 | Repatriate MOU workers at the end of the term | RO s.55, s.56 | The last bonding employer or the licensee pays for the return, unless the contract is renewed or the worker moves to a new employer in time | End of term | Proof of repatriation | s.116: up to 100,000 baht per worker |
| 16 | Change of employer within the allowed time | RO s.51-53 (MOU); cohort rules | MOU: start with a new employer within 30 days (s.52), otherwise the permit and stay end (s.53). For the CR cohorts a 2019 CR set 60 days to find a new employer ([InfoQuest](https://www.infoquest.co.th/?p=107502), search snippet; the current rule is unverified) | 30 or 60 days | New employer's notice (inferred) | Lapse falls under duty 1 |
| 17 | Cooperate with inspectors | RO s.98, s.125-127 | Appear, answer and give documents when summoned. Do not obstruct | On inspection | n/a | s.125: up to 6 months and/or 100,000 baht. s.126 (obstruction): up to 1 year and/or 200,000 baht. s.127: up to 10,000 baht |
| 18 | Immigration reporting | Immigration Act B.E. 2522 (section numbers unverified) | Every foreigner reports every 90 days. Hosts, landlords and businesses that house foreigners notify within 24 hours (form TM.30) (search summary citing an Immigration Bureau statistics leaflet whose URL was not pinned down; see also the [Thai Post TM.30 explainer](https://www.thaipost.net/main/detail/45992) and [BAL](https://www.bal.com/immigration-news/thailand-provincial-offices-begin-enforcing-additional-tm30-requirements/), search snippets). How this applies to CR-cohort migrant workers was not confirmed (unverified) | 90 days; 24 hours | TM.30 receipt (inferred) | Late 90-day report: 2,000 baht (secondary source, unverified) |

### Notes on record keeping and retention

- **No retention period found in the RO.** The RO says what must exist but not for how long, except that the MOU contract is kept at the workplace (s.46) ([RO text](https://www.drthawip.com/book/export/html/3263)).
- **Limitation periods (my reading, unverified).** Most employer offences are fine-only. Under the Criminal Code these lapse after 1 year (s.95(5)). A repeat s.102 offence (up to 1 year in prison) would lapse after 5 years (s.95(4)). A safe default is to keep each worker's file for 5 years after the worker leaves.
- **Labour Protection Act.** It has register and payroll-record duties (s.112-115). I could not confirm the thresholds or periods (unverified).
- **Data protection (PDPA B.E. 2562).**
  - The employer is the data controller for passport, health and insurance data. The software vendor is a processor.
  - Health data is sensitive data.
  - A breach must be notified to the PDPC within 72 hours where it is likely to create a risk to people's rights.
  - Transfers abroad need an adequate destination or an exception such as informed explicit consent ([PwC overview](https://legal.pwc.de/content/im-fokus/thailand-global-data-protection-law-overview.pdf), search snippet).
  - Section numbers (s.26 sensitive data, s.28 transfers, s.37(4) breach notice, s.40 processor duties) are from secondary sources (unverified).

## Filing channels and formats

- **One channel: e-WorkPermit.**
  - Site: eworkpermit.doe.go.th. Licensed recruitment companies could register from 6 Oct 2025. Nationwide service began on 13 Oct 2025 ([PRD English, 7 Oct 2025](https://thailand.prd.go.th/en/content/category/detail/id/2874/iid/429777)).
  - New permits, renewals and cancellations must go through it ([EY](https://www.ey.com/en_gl/technical/tax-alerts/thailand-launches-online-platform-for-work-permit-applications)).
  - Permits expiring up to 13 Feb 2026 could still renew in the old system ([EIG Law](https://eiglaw.com/thailand-temporarily-allows-manual-work-permit-applications/)).
- **Fallbacks when the portal fails.**
  - The DOE admitted faults in registration and in finding workers' existing permit data. It allowed paper filing at provincial or Bangkok offices, with a screenshot of the error, until 28 Jan 2026 ([InfoQuest](https://www.infoquest.co.th/?p=542101), via the lead report; [EIG Law](https://eiglaw.com/thailand-temporarily-allows-manual-work-permit-applications/)).
  - Manual processing for some permit types was later extended to 28 Jul 2026 ([Vialto](https://vialtopartners.com/regional-alerts/thailand-immigration-e-work-permit-processing-update-now-extended-until-28-july-2026), via the lead report). A secondary source says the system became fully mandatory on 28 Apr 2026 ([Visas Update](https://www.visasupdate.com/post/thailand-e-work-permit-mandatory-online-system-april-28-2026), search snippet; unverified).
- **The 8 steps** ([PSU guide](https://gao.psu.ac.th/images/download/immigration/e-WorkPermit_Information.pdf)):
  1. Register.
  2. File the application by type.
  3. Pay the application fee.
  4. Verify the documents.
  5. Check approval status.
  6. Pay the permit fee.
  7. Book an online appointment.
  8. Visit the service centre for biometrics (face, iris or fingerprint) at one of 54 Work Permit Service Centers ([PRD English](https://thailand.prd.go.th/en/content/category/detail/id/2874/iid/429777)).
  - The lead report cites 40 service centres, 5 border centres and 8 mobile units ([Daily News](https://www.dailynews.co.th/news/5314014/)).
- **User types and identity.**
  - There are separate manuals for "Employer Registration (Authorized Signatory)", "Registration for Authorized Representative (Power of Attorney Holder)" and "Registration for Foreign Workers" ([PSU guide](https://gao.psu.ac.th/images/download/immigration/e-WorkPermit_Information.pdf)).
  - Directors and authorised representatives verify identity through ThaiD ([Clark Hill](https://www.clarkhill.com/news-events/news/thailand-launches-online-platform-for-work-permit-applications/), search snippet).
  - Employer accounts use the authorised director's email with a one-time code ([Envoy](https://www.envoyglobal.com/news-alert/thailand-launches-e-work-permit-platform/), search snippet).
  - The proxy manual's content could not be read here (unverified).
- **Functions** ([Exworker, updated 29 Sep 2026](https://www.exworker.co.th/en/blog/e-workpermit-en)):
  - new permit; renewal; notice of entry, exit or change of employer; edit an application; appointments; status; problem reports.
  - Cancelling a duplicate needs an officer.
  - Common faults: "no data found"; an account still held by a previous agent; duplicate applications; name mismatches with the passport.
- **Notifications.** Status updates go by email, SMS and LINE OA ([PRD English](https://thailand.prd.go.th/en/content/category/detail/id/2874/iid/429777)). LINE IDs: @doewp for employers; @990seasu for agencies and authorised representatives; @833nmpkk for foreign nationals ([PSU guide](https://gao.psu.ac.th/images/download/immigration/e-WorkPermit_Information.pdf)). No expiry reminders were found (unverified).
- **Documents to upload** for the December cohort ([Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1250827); [Exworker](https://www.exworker.co.th/en/blog/e-workpermit-en)):
  - passport or substitute (Myanmar workers may add it later);
  - health certificate (linked electronically by the hospital);
  - SSO proof or health insurance;
  - POA with stamp duty, if filed by someone else;
  - for an employer: company registration and the authorised person's ID card;
  - the earlier permit or application number.
  - File formats and size limits were not found (unverified).
- **Payment.** The application fee is paid online ([PRD English](https://thailand.prd.go.th/en/content/category/detail/id/2874/iid/429777)). An older DOE notice describes printing a payment slip and paying at a service counter ([Matichon](https://www.matichon.co.th/local/news_1836308), search snippet; older system). The last-day cut-off is 20:00 ([Nation](https://www.nationthailand.com/news/policy/40069723)).
- **Interim proof.** The application receipt plus the fee receipt let the worker keep working. Fishing crews can use them to apply for a seafarer book. After approval, a temporary work permit serves until the card is issued ([Bangkok Biznews 1247207](https://www.bangkokbiznews.com/news/news-update/1247207); [Nation](https://www.nationthailand.com/news/policy/40069723)).
- **No API.** I found no public API, bulk upload or export for employers or proxies (unverified). Any product must work beside the portal: prepare the files, then let the user file, then store the receipts.
- **Help lines.** DOE hotline 1506 (press 2) and 1694; Bangkok Employment Offices Areas 1-10; provincial employment offices ([Nation](https://www.nationthailand.com/news/policy/40069723); [Exworker](https://www.exworker.co.th/en/blog/e-workpermit-en)).

## Supervisors and enforcement evidence

- **DOE registrars.** "Registrar" (นายทะเบียน) means the DOE Director-General and the officials the Minister appoints (s.5) ([legardy s.5](https://legardy.com/thai-law/foreinger-work-law/foreinger-work-law-general)). In practice these are the Bangkok Employment Offices Areas 1-10 and the provincial employment offices ([Nation](https://www.nationthailand.com/news/policy/40069723)).
- **Policy committee.** A committee chaired by the Labour Minister sets policy (s.17-22) ([RO text](https://www.drthawip.com/book/export/html/3263)). Cohort proposals go through it before the cabinet ([InfoQuest 625642](https://www.infoquest.co.th/?p=625642), search snippet).
- **Other bodies in the chain** (roles from the sources above; I did not check their own enforcement):
  - Immigration Bureau: visas, stay, 90-day reports.
  - Ministry of Interior / DOPA: stay announcement and the personal record.
  - SSO: social security.
  - Ministry of Public Health: health check and the insurance card.
  - Revenue Department: stamp duty.
  - PDPC: personal data.
- **Inspection volume.**
  - FY2026 (1 Oct 2025 to 1 Sep 2026): 74,265 workplaces inspected and 1,721 prosecuted (2.3%); 888,620 workers inspected and 5,330 prosecuted, of whom 1,792 were in Thai-reserved jobs ([Bangkok Biznews](https://www.bangkokbiznews.com/news/1250192); [Thairath](https://thairath.co.th/news/politic/2957000); search snippets).
  - An earlier FY2026 figure (to 6 May 2026) was 52,936 employers inspected and 1,025 prosecuted. This comes from a search summary; the exact page was not pinned down (possibly [Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1217137)) (unverified).
  - FY2025 (1 Oct 2024 to 18 Apr 2025): 2,575 workers prosecuted, 883 for reserved jobs. Condition breaches included front-shop sales, construction trades and labouring outside the permit ([InfoQuest](https://www.infoquest.co.th/?p=488231), search snippet).
- **Policy signals.**
  - On 4 Sep 2026 a deputy government spokesperson said agencies were ordered to inspect workplaces proactively. She warned the public not to use unlicensed foreign workers for massage, haircuts, beauty work or driving ([PRD](https://www.prd.go.th/th/content/category/detail/id/39/iid/538443), search snippet).
  - After the March 2026 deadline, the DOE said it would prosecute both employers and workers found without permits ([Thai Post](https://www.thaipost.net/general-news/955747/)).
- **How cases end.** Fine-only offences (other than s.101) can be settled by paying a fine within 30 days. The Director-General sets it in Bangkok and the provincial governor elsewhere (s.133) ([RO text](https://www.drthawip.com/book/export/html/3263)). The internal tariff the DOE uses for settled fines was not found (unverified).
- **No checklist found.** I found no published DOE inspection questionnaire or checklist (unverified). Based on the offences prosecuted, inspectors check (inferred):
  - whether each foreign worker on site has a permit or interim receipt;
  - whether the permit names this employer;
  - whether the job matches;
  - whether the job is reserved for Thais.
- **Portal friction drives non-compliance risk** (from the lead report):
  - In June 2026 capacity was 254,760 queue slots a month against 658,955 wanted ([Post Today](https://www.posttoday.com/business/743372)).
  - Some documents waited up to 4 months for approval ([Thansettakij](https://www.thansettakij.com/general-news/668193)).
  - Middlemen charged about 2,000 baht per worker for queue slots ([Naewna](https://www.naewna.com/local/972023)).

## Regional differences

- **Same law everywhere.** The RO, the cohort CRs and e-WorkPermit apply nationwide ([RO text](https://www.drthawip.com/book/export/html/3263); [PRD English](https://thailand.prd.go.th/en/content/category/detail/id/2874/iid/429777)). Two things differ by area:
  - **Supervising office.** Bangkok uses Employment Offices Areas 1-10; elsewhere the provincial employment office ([Nation](https://www.nationthailand.com/news/policy/40069723)).
  - **Who settles a fine.** The DOE Director-General in Bangkok, the provincial governor elsewhere (s.133) ([RO text](https://www.drthawip.com/book/export/html/3263)).
- **Biometric capacity varies by place.** In June 2026 some Samut Sakhon workers had to book appointments in Mae Sot ([Naewna](https://www.naewna.com/local/972023), via the lead report). A product should show the user where free slots are, if the portal exposes them (unverified).
- **Border provinces (s.64).**
  - Border-pass workers in labouring or domestic work get a 3-month permit and 30-day stays. They leave and re-enter for each new 30-day stamp.
  - They may change or add up to 3 employers within the permitted province, and must report to immigration every 30 days (policy committee meeting of 8 Jul 2025; search summary of [Thansettakij 635911](https://www.thansettakij.com/economy/635911) and [Thairath 2876467](https://www.thairath.co.th/news/politic/2876467), exact page not pinned down).
- **Cambodian border.** After the 2025 border closure, a CR of 22 Jul 2025 and a MoI announcement of 8 Aug 2025 (effective 7 Jun 2025) let stranded Cambodian border workers keep working on humanitarian grounds ([The Standard](https://thestandard.co/cambodian-workers-6-month-extension-border-closure/); [PRD](https://www.prd.go.th/th/content/category/detail/id/39/iid/408015); search snippets). Cambodians are not in the L/M/V renewal CRs ([Thai Post 955747](https://www.thaipost.net/general-news/955747/)).
- **Fishing provinces.** Fishing crews also need a seafarer book. The renewal receipts are accepted as proof when applying for it ([Nation](https://www.nationthailand.com/news/policy/40069723)).
- **Sector, not region, sets health cover.** SSA-covered workers versus domestic, agricultural and livestock workers with insurance ([Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1250827)).
- **Special Economic Zones** may have their own border-worker rules. Not checked (unverified).

## Upcoming changes

| Date | Change | Effect on the product | Source |
|---|---|---|---|
| 11 Dec 2026 | December cohort filing deadline (16:30 file, 20:00 pay) | Peak demand. A rules pack must be live before then | [Nation](https://www.nationthailand.com/news/policy/40069723) |
| 13 Feb 2027 | February cohort (Lao, Vietnamese) permits end | A new CR is needed. Watch for it | [Thai Post 907398](https://www.thaipost.net/general-news/907398/) (search snippet) |
| 31 Mar 2027 | March cohort permits end (CR 2 Dec 2025) | A new CR is expected but not yet found (unverified) | [Thai Post 955747](https://www.thaipost.net/general-news/955747/) |
| 30 Jun 2027 | December cohort passport and visa deadline (or 90 days after a new passport) | Per-worker deadline tracking | [Nation](https://www.nationthailand.com/news/policy/40069723) |
| 11 Dec 2027 | December cohort's renewed permits end | The next renewal round, by a new CR | [Bangkok Biznews 1247207](https://www.bangkokbiznews.com/news/news-update/1247207) |
| Pending | Myanmar MOU workers whose 4 years end in 2026: waiver of the 30-day break, agreed in principle on 23 Jul 2026, awaiting the policy committee and cabinet | New cohort type: "MOU 4-year completed, temporary stay" | [InfoQuest 625642](https://www.infoquest.co.th/?p=625642) (search snippet) |
| Pending (180 days after gazette) | Draft Royal Decree (cabinet approval in principle 25 Aug 2026) to bring agriculture, forestry and livestock workers, and household employees of natural persons, into social security. Fishery coverage is unclear | Health-cover rules by sector will flip. Insurance gives way to SSO for these groups | [Lexbangkok](https://lexbangkok.com/?p=10364) |
| Pending | Ministry of Public Health proposal to raise the migrant health-insurance card price to about 3,800 baht | Cost-estimate fields; status unverified | [Bangkok Biznews](https://www.bangkokbiznews.com/health/public-health/1166690) (search snippet) |
| Pending | Amendment to the 2020 ministerial regulation on applying for, issuing and notifying permits, to drop in-person card collection (cabinet approval in principle, Feb 2025) | Fewer appointment steps; status unverified | [PRD](https://www.prd.go.th/th/content/category/detail/id/39/iid/368173) (search snippet) |
| Ongoing | e-WorkPermit operator Future Sky says it is owed about 715 million baht and has sued | Portal outages or a system change | [Thansettakij](https://www.thansettakij.com/general-news/668193) (lead report) |
| Not found | No new foreign-workers bill found in 2026 searches | n/a | Thai searches in this run (no result) |

## PRODUCT REQUIREMENTS

Each requirement is testable. "Basis" is the legal source. "RO" = the Royal Ordinance; "CR-Dec" = the December 2026 cohort rules ([Nation](https://www.nationthailand.com/news/policy/40069723); [Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1250827)); "CR-Mar" = the March cohort rules ([Thai Post](https://www.thaipost.net/general-news/955747/)). Where the basis is my inference, it says so.

**A. Account types, scope and set-up**

1. The system must support three account types: employer, proxy (authorised representative) and licensed import company. A proxy or import company can manage many employers. Test: one proxy account holds 3 employers with separate worker lists, and switching employer changes every list and document. Basis: portal user types ([PSU guide](https://gao.psu.ac.th/images/download/immigration/e-WorkPermit_Information.pdf); [Exworker](https://www.exworker.co.th/en/blog/e-workpermit-en)).
2. Each employer profile must store: legal form (juristic person, natural person, household); Thai company or ID number; authorised signatory; workplace address(es); province; sector; and whether the employer is an MOU employer. Test: a household employer can be created without a company number. Basis: RO s.5 (employer definition), s.46.
3. The system must derive the supervising office from the workplace province: Bangkok Area 1-10 office or the provincial employment office. Test: a Samut Sakhon workplace shows the Samut Sakhon provincial office and hotline 1506 (press 2). Basis: RO s.133; [Nation](https://www.nationthailand.com/news/policy/40069723).
4. The system must apply no size exemption: a 1-worker employer gets every duty. Test: an employer with one domestic worker gets renewal, s.13 notice and document-custody tasks. Basis: RO s.9, s.13, s.102 (no threshold).
5. The system must never submit to e-WorkPermit on the user's behalf, nor store portal passwords or ThaiD credentials. It prepares, checks and records; a human files. Test: there is no field for portal or ThaiD passwords, and no automated login. Basis: ThaiD identity verification of the filer ([Clark Hill](https://www.clarkhill.com/news-events/news/thailand-launches-online-platform-for-work-permit-applications/)); POA rules ([Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1250827)); risk under s.105 and s.110 (my inference).

**B. Worker register (data fields)**

6. Each worker record must hold: full name exactly as in the passport; nationality (Lao, Myanmar, Vietnamese, Cambodian, other); date of birth; sex; passport or substitute document type, number, issue and expiry dates; visa or stay type and expiry; work-permit number, type and expiry; 13-digit foreign ID number if any; employer; workplace; job title or category; start date; cohort; SSO number or insurance policy and its expiry; health-check date and hospital; and status (active, left, renewal pending, lapsed). Test: CSV import of 200 workers with these columns succeeds and flags missing mandatory fields. Basis: RO s.13 (name, nationality, job); CR-Dec documents.
7. Name fields must be checked against the passport spelling, and every document must use it. Test: a mismatch between the permit name and the passport name raises a warning. Basis: the portal's "name mismatch" fault ([Exworker](https://www.exworker.co.th/en/blog/e-workpermit-en)).
8. The register must keep the portal application number, the fee receipt numbers and the appointment date and centre for each filing. Test: a renewal cannot be marked "filed" without an application number. Basis: interim-proof rule (CR-Dec); the duplicate-application fault ([Exworker](https://www.exworker.co.th/en/blog/e-workpermit-en)).
9. The register must support bulk import from spreadsheet (XLSX/CSV) and bulk export, since no portal export or API was found. Test: round-trip import then export loses no field. Basis: no public API found (unverified); my inference.
10. Every change to a worker record must be logged with user, time, old value and new value. Test: the audit log shows who changed a permit expiry date. Basis: evidence for inspections (RO s.98) and PDPA accountability (my inference).

**C. Cohort rules engine**

11. The system must hold a versioned rules table per cohort. Each version stores: legal basis (CR date, announcement titles, Royal Gazette reference when found); eligible nationalities; eligible groups; current permit end date; new end date; filing window start and end; last-day cut-off times for filing and for payment; fees; required documents; health-cover rule by sector; passport and visa deadline logic; and source URLs. Test: the December 2026 rule shows 8 Sep to 11 Dec 2026, 16:30 and 20:00, 100 + 900 baht, end date 11 Dec 2027. Basis: CR-Dec.
12. The engine must assign each worker to one cohort by nationality, current permit end date and permit type, and must show why. Test: a Vietnamese worker with a permit to 11 Dec 2026 maps to "December cohort"; a Myanmar worker to 31 Mar 2027 maps to "March cohort". Basis: CR-Dec; CR-Mar.
13. The December 2026 rule set must include the extra eligible groups: workers who could not get a passport by 31 Jul 2026, and workers whose passport expired before 11 Dec 2026. Test: a worker whose passport expired on 1 Nov 2026 is still marked eligible. Basis: CR-Dec ([Nation](https://www.nationthailand.com/news/policy/40069723)).
14. For the December cohort the engine must compute the passport and visa deadline: 30 Jun 2027, or 90 days after the passport issue date if the passport was issued after 1 Aug 2026, whichever is earlier. Test: a passport issued on 1 Mar 2027 gives 30 May 2027; one issued on 15 May 2027 gives 30 Jun 2027. Basis: CR-Dec.
15. For the March cohort the engine must show the 28 Sep 2026 passport and visa deadline as passed. It must flag any March-cohort worker without a recorded visa or stay stamp. Test: a March-cohort worker with no visa date shows "overdue since 28 Sep 2026". Basis: CR-Mar.
16. The engine must exclude Cambodian workers from the L/M/V renewal rules and route them to a "separate track, check with the DOE" status. Test: a Cambodian worker with a permit to 11 Dec 2026 is not offered the December renewal. Basis: CR 24 Sep 2024 excluded Cambodia ([Thai Post](https://www.thaipost.net/general-news/955747/)); separate Cambodian measures ([PRD 408015](https://www.prd.go.th/th/content/category/detail/id/39/iid/408015)).
17. The engine must support MOU workers with a 2-year permit, one 2-year renewal, and an "end of 4 years: return or waiver" status. It must show the 4-year end date. Test: an MOU worker who started on 1 Jan 2023 shows the 4-year end on 31 Dec 2026. Basis: RO s.59, s.67; [Thai Post 573675](https://www.thaipost.net/general-news/573675/); pending waiver ([InfoQuest 625642](https://www.infoquest.co.th/?p=625642)).
18. The engine must support s.64 border-pass workers with 3-month permits, 30-day stays and 30-day immigration reports, limited to the permitted province. Test: a border worker's workplace outside the permitted province raises an error. Basis: RO s.64; [Thansettakij 635911](https://www.thansettakij.com/economy/635911).
19. A rules version must be marked "draft" until a person approves it with a source. Workers must only be re-mapped after approval, with a change notice to affected users. Test: publishing a new CR rule notifies every employer with workers in that cohort. Basis: rules change with every CR ([Thai PBS](https://www.thaipbs.or.th/news/content/508271)) (my inference).
20. Where a deadline is not yet set by a CR, the system must show "awaiting cabinet decision" rather than invent a date. Test: the March cohort after 31 Mar 2027 shows "awaiting CR" until a rule is approved. Basis: no CR found yet (unverified).

**D. Deadlines and reminders**

21. The system must create reminders for: permit expiry or cohort filing deadline; passport expiry; visa or stay expiry; health-insurance expiry; SSO registration within 30 days of hire; the s.13 hire and exit notices (15 days); MOU exit notices (7 days to the licensee and registrar); s.64 border reports (30 days); and the 90-day immigration report. Test: each type appears on the calendar with its legal basis shown. Basis: RO s.13, s.50, s.64, s.67; SSA s.34; Immigration Act (unverified).
22. Default reminder offsets must be 90, 60, 30, 14, 7 and 3 days before a filing deadline, plus the last day at 12:00. Users can change them. Test: changing the offsets for one employer does not change another's. Basis: last-day cut-offs (CR-Dec); my inference.
23. On the last day of a cohort window, the system must show both cut-offs: filing at 16:30 and payment at 20:00, in Thailand time. Test: at 16:31 on 11 Dec 2026 an unfiled worker shows "filing closed". Basis: CR-Dec.
24. Reminders must go by LINE, email and SMS, and in-app. Test: a reminder reaches a LINE account linked to the employer. Basis: the DOE itself uses LINE ([PSU guide](https://gao.psu.ac.th/images/download/immigration/e-WorkPermit_Information.pdf)); my inference.
25. A dashboard must list, per employer and across all clients of a proxy: workers due in 30 days; workers lapsed; renewals pending approval; payments due; appointments booked; and notices overdue. Test: a proxy with 20 employers sees one combined list, filterable by employer and cohort. Basis: RO s.67, s.13; my inference.

**E. Pre-filing checks per worker**

26. Before a renewal can be marked "ready to file", the system must check: passport or substitute present (or the Myanmar "attach later" exception); health certificate from a DOE-linked hospital, with date; SSO proof or insurance meeting the sector rule; POA if the filer is not the worker; employer documents; previous permit or application number. Test: a domestic worker with 6-month insurance fails, because 1 year is required. Basis: CR-Dec ([Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1250827)).
27. The health-cover rule must depend on the sector and SSO status. SSA s.33 member: SSO proof. Changed employer, SSO pending: insurance of at least 6 months. Domestic work, agriculture or livestock: insurance of at least 1 year. Test: each of the three cases gives the right minimum term. Basis: CR-Dec.
28. The rule in requirement 27 must be data-driven, so it can change when the draft social-security Royal Decree takes effect. Test: an admin can move "agriculture" from "insurance" to "SSO" without a code release. Basis: draft Royal Decree ([Lexbangkok](https://lexbangkok.com/?p=10364)).
29. The system must store the health-check hospital and flag hospitals not on the user's own list of DOE-linked hospitals. Test: a certificate from an unlisted clinic triggers a warning. Basis: CR-Dec (DOE-linked hospitals); RO s.64/1. The official list was not found (unverified).
30. The system must warn when the passport expires before the new permit end date. Test: a passport expiring 1 Jun 2027 with a permit to 11 Dec 2027 triggers a warning. Basis: CR-Dec passport rule; my inference.
31. The system must produce a per-worker checklist PDF in Thai, plus a worker version in the worker's language. Test: a Myanmar worker gets a Burmese checklist with the same items. Basis: CR-Dec documents; my inference.

**F. Power of attorney**

32. The system must generate a POA from employer and attorney data, naming the attorney and the acts (filing renewals, paying fees, booking appointments, notices) and the worker list or "all foreign workers of the employer". Test: a generated POA names the employer, the authorised signatory, the attorney and the acts. Basis: CR-Dec (POA when not filing in person).
33. The system must compute stamp duty: 10 baht to act once; 30 baht for joint attorneys acting more than once; 30 baht per attorney who may act separately (for example "and/or"). Test: a POA naming two attorneys "and/or" for repeated acts shows 60 baht. Basis: Revenue Code stamp-duty schedule, item 7 ([Revenue Department](https://www.rd.go.th/25348.html)).
34. The system must track each POA's validity, scope and the employer's signatory, and warn when a filing falls outside it. Test: a POA limited to "renewal" blocks marking an exit notice as filed by the attorney. Basis: CR-Dec; my inference.

**G. Fees and money**

35. The system must estimate state fees per filing: 100 baht application plus 900 baht per 1-year permit (December cohort). Rates come from the rules table. Test: 25 workers give 25,000 baht. Basis: CR-Dec; fee rules ([Matichon](https://www.matichon.co.th/local/news_2316974)).
36. The system must record each payment (amount, date, time, receipt number) against the worker and filing. Test: an unpaid approved application shows "pay by 20:00 on deadline day". Basis: CR-Dec.
37. For MOU employers, any cost recovered from a worker must be limited to costs the employer advanced (passport, medical check, permit fees), with wage deductions capped at 10% of monthly pay. The system must block or flag a schedule above the cap. Test: a 12,000-baht monthly wage allows at most 1,200 baht deduction a month. Basis: RO s.49, s.114.
38. Proxy and import-company accounts must be able to issue a fee statement to the employer that shows state fees separately from service fees. Test: the statement has separate "government fee" and "service fee" lines. Basis: RO s.42, s.111 (licensees may not take more than approved fees); my inference for proxies.

**H. Filing support and status**

39. The system must give a step tracker for each filing, matching the portal's 8 steps: registered; filed; application fee paid; documents verified; approved; permit fee paid; appointment booked; biometrics done or card issued. Test: each step has a date and an optional uploaded proof. Basis: [PSU guide](https://gao.psu.ac.th/images/download/immigration/e-WorkPermit_Information.pdf).
40. The system must store the application receipt and fee receipt, and mark them as interim proof of right to work until the permit is issued. Test: an inspection pack for a pending worker includes both receipts. Basis: CR-Dec ([Nation](https://www.nationthailand.com/news/policy/40069723)).
41. The system must warn about duplicate filings: one open renewal per worker per cohort. Test: a second renewal for the same worker and cohort is blocked. Basis: the duplicate-application fault ([Exworker](https://www.exworker.co.th/en/blog/e-workpermit-en)).
42. The system must keep a portal-incident log per filing (error screenshots, date, office visited). Test: a filing can hold screenshots and a note. Basis: paper fallback "with a screenshot of the error" ([EIG Law](https://eiglaw.com/thailand-temporarily-allows-manual-work-permit-applications/); [InfoQuest](https://www.infoquest.co.th/?p=542101)).
43. For fishing crews, the system must flag that renewal receipts serve as proof for the seafarer-book application. Test: a worker with sector "fishing" sees this note. Basis: CR-Dec ([Nation](https://www.nationthailand.com/news/policy/40069723)).

**I. Hire, exit and change-of-employer notices**

44. Recording a hire must open a 15-day task for the s.13 hire notice (name, nationality, job). Test: a hire on 1 Nov 2026 shows a due date of 16 Nov 2026 (counting rule unverified). Basis: RO s.13, s.103.
45. Recording an exit must require a reason and open a 15-day task for the s.13 exit notice. For MOU workers it must also open a 7-day task to notify the licensee and the registrar. Test: an MOU exit creates two tasks with different due dates. Basis: RO s.13, s.46(3), s.50, s.113/1.
46. On exit, the system must show the worker's job-search window for a new employer: 30 days for MOU (s.52); 60 days for CR cohorts, unless the rule table says otherwise. Test: the window comes from the rule table, not code. Basis: RO s.52-53; [InfoQuest](https://www.infoquest.co.th/?p=107502) (current CR rule unverified).
47. On a hire, the system must remind the employer that the worker must notify within 15 days (s.64/2). It must also open an SSO registration task (30 days) when the sector is covered. Test: a new hire creates both tasks. Basis: RO s.64/2; SSA s.34 ([Lexbangkok](https://lexbangkok.com/?p=10364)).

**J. Job scope and reserved occupations**

48. The system must hold the list of 27 closed and 13 conditional occupations, and check each worker's recorded job against it and against the job on the permit. Test: a worker recorded as "driver" is flagged as a reserved job. Basis: RO s.7, s.9; MoL announcement of 2020 ([Matichon](https://www.matichon.co.th/local/news_2049383)).
49. The system must flag a worker whose workplace or employer differs from the one on the permit. Test: moving a worker to a second branch not on the permit raises a warning. Basis: RO s.9 (outside scope); s.64/2.

**K. Worker documents and fairness**

50. The system must record who holds each worker's passport and permit. The default is "worker". Setting "employer" must require a recorded worker consent and an access-on-request note. Test: choosing "employer" without consent is blocked. Basis: RO s.131.
51. The worker must be able to get their own documents and status in their language (Burmese, Lao, Vietnamese, Thai, English) through a link or LINE, without the employer's login. Test: a worker link shows permit expiry and next steps in Burmese. Basis: RO s.68 (worker must show the permit), s.131 (access on request); my inference.

**L. Inspection pack**

52. One click must produce an inspection pack per workplace: each worker's permit or interim receipts; passport and visa pages; health certificate; SSO or insurance proof; s.13 notice receipts; POA; and, for MOU workers, the written contract. Test: the pack for a workplace with 10 workers has 10 complete sections, and missing items are listed on the cover. Basis: RO s.9, s.13, s.46, s.68, s.98 (items inferred).
53. The pack must open with a one-page summary in Thai: employer, workplace, number of foreign workers, status per worker, and the open issues. Test: the summary counts match the register. Basis: my inference.

**M. Languages and content**

54. The interface and all generated documents for employers must be in Thai, with English as an option. Worker-facing output must be available in Burmese, Lao and Vietnamese. Test: switching language changes labels but not data. Basis: my inference (DOE notices are in Thai; workers' languages).
55. Every rule, deadline and template must show its legal basis and source link, and the date it was last checked. Test: hovering a deadline shows "CR 14 Jul 2026" and a link. Basis: rules change per CR (my inference).

**N. Data protection and security**

56. Passport, health and insurance data must be encrypted at rest and in transit, with role-based access per employer. Proxy staff may only see employers assigned to them. Test: a proxy user assigned to employer A cannot open employer B's workers. Basis: PDPA (health data is sensitive) ([PwC](https://legal.pwc.de/content/im-fokus/thailand-global-data-protection-law-overview.pdf)).
57. The vendor must sign a data processing agreement with each employer (the controller). The product must record the lawful basis for each data type, and show workers a privacy notice in their language. Test: an employer cannot add workers before accepting the DPA. Basis: PDPA controller and processor duties (section numbers unverified).
58. If data is hosted outside Thailand, the system must record the transfer basis and tell employers where data is stored. Test: the admin settings show the hosting region and the transfer basis. Basis: PDPA cross-border rule ([PwC](https://legal.pwc.de/content/im-fokus/thailand-global-data-protection-law-overview.pdf)).
59. The system must support a breach process that lets the vendor notify each affected employer fast enough for the employer to notify the PDPC within 72 hours. Test: an incident record captures detection time and a 24-hour notice clock to employers. Basis: PDPA breach rule ([PwC](https://legal.pwc.de/content/im-fokus/thailand-global-data-protection-law-overview.pdf)).
60. Worker files must be kept for 5 years after the worker leaves (configurable), then deleted or anonymised, with a deletion log. Test: a worker who left in 2026 is flagged for deletion in 2031. Basis: Criminal Code limitation periods (my reading, unverified); PDPA storage limitation.

## Open questions

1. **The Royal Gazette texts of the two December-cohort announcements.** The MoL announcement on permission to work "เป็นการเฉพาะ" and the MoI announcement on stay "เป็นกรณีพิเศษ". Needed: exact clauses, the sections they are issued under (probably RO s.14 or s.63/2, and Immigration Act s.17), gazette date, and change-of-employer rules. Not found in this run (unverified).
2. **Proxy rules on e-WorkPermit.** Must a proxy be a Thai national with ThaiD? Is there a limit on how many employers one proxy can serve? Is there a prescribed POA form? The authorised-representative manual (fliphtml5) could not be read here (unverified).
3. **Is a paid renewal-filing service a licensed activity?** My reading of s.5 and s.26 says no, because it does not bring workers into Thailand. A Thai lawyer should confirm this, and the effect of the reserved-job list on any foreign staff (unverified).
4. **The next CRs.** For the March cohort (31 Mar 2027), the February cohort (13 Feb 2027) and Myanmar MOU workers completing 4 years. Does a new round follow each time? (unverified)
5. **Health insurance.** The current Ministry of Public Health card price and term, the list of approved private insurers, and the official list of prohibited diseases and DOE-linked hospitals (unverified).
6. **Portal features.** Expiry reminders, bulk views for multi-employer proxies, export, an API, upload formats and size limits. None was found (unverified).
7. **Counting of the 15-day notice period** (from the day after the event?) and the form names used on e-WorkPermit for s.13 notices (unverified).
8. **The DOE settled-fine tariff** under s.133. How much is actually charged per worker on a first offence? (unverified)
9. **Immigration duties of CR-cohort workers.** 90-day reporting and TM.30 when the employer houses workers: legal sections and fines (unverified).
10. **Labour Protection Act records.** Employee register and payroll-record duties (s.112-115): thresholds and retention periods (unverified).
11. **Cambodian workers** in 2026-27: is there any renewal route apart from the s.64 and humanitarian measures? (unverified)
12. **The 14 Oct 2026 regularisation cohort** mentioned in the lead report. Does it exist, and what is its renewal path? (unverified)
13. **PDPA specifics.** Is the vendor's hosting abroad covered by the PDPC's cross-border rules, and does the vendor need a Thai representative? (unverified)

## Sources

Primary or official texts
- Royal Ordinance on Foreign Workers Management B.E. 2560 as amended B.E. 2561, consolidated Thai text with gazette footnotes: https://www.drthawip.com/book/export/html/3263
- Same, Part 2 (licensed import business, s.26-45): https://www.drthawip.com/book/export/html/3269 (via the lead report)
- Same, definitions s.1-6: https://legardy.com/thai-law/foreinger-work-law/foreinger-work-law-general
- Revenue Department, stamp duty on POAs (schedule item 7): https://www.rd.go.th/25348.html
- PRD English, e-WorkPermit launch (7 Oct 2025): https://thailand.prd.go.th/en/content/category/detail/id/2874/iid/429777
- PRD Thai, government warning to employers (4 Sep 2026): https://www.prd.go.th/th/content/category/detail/id/39/iid/538443 (search snippet; page returned 503)
- PRD Thai, ministerial regulation amendment approved in principle: https://www.prd.go.th/th/content/category/detail/id/39/iid/368173 (search snippet)
- PRD Thai, Cambodian border-pass workers: https://www.prd.go.th/th/content/category/detail/id/39/iid/408015 (search snippet)
- PRD Thai, DOE notice on the 11 Dec 2026 deadline: https://www.prd.go.th/th/content/category/detail/id/39/iid/531308 (search snippet; page returned 503)
- e-WorkPermit old CLMV employer manual (2023): https://e-workpermit.doe.go.th/CLMV-WEB/um/VP_CLMV_UserManual_Employer_20230717.pdf (search snippet)
- PSU guide to e-WorkPermit (8 steps, manuals, LINE IDs): https://gao.psu.ac.th/images/download/immigration/e-WorkPermit_Information.pdf

Cohort rules and news
- Nation Thailand, DOE announcement on the December cohort (13 Aug 2026): https://www.nationthailand.com/news/policy/40069723
- Bangkok Biznews, filing window, fees and documents: https://www.bangkokbiznews.com/news/news-update/1250827
- Bangkok Biznews, scope and passport and visa deadlines: https://www.bangkokbiznews.com/news/news-update/1247207
- Thai Post, CR of 14 Jul 2026: https://www.thaipost.net/general-news/1032256/
- InfoQuest, CR of 14 Jul 2026: https://www.infoquest.co.th/?p=615165
- Thai Post, March cohort (1 Mar 2026): https://www.thaipost.net/general-news/955747/
- Thai Post, February cohort (search snippet): https://www.thaipost.net/general-news/907398/
- Thairath, CR of 2 Dec 2025 (search snippet): https://www.thairath.co.th/news/politic/2917222
- Thai Post, MOU 4-year rule (search snippet): https://www.thaipost.net/general-news/573675/
- InfoQuest, Myanmar MOU 4-year waiver (4 Aug 2026; search snippet): https://www.infoquest.co.th/?p=625642
- InfoQuest, 60-day job-search period (2019; search snippet): https://www.infoquest.co.th/?p=107502
- Thansettakij, border workers under s.64 (search snippet): https://www.thansettakij.com/economy/635911
- The Standard, Cambodian workers' 6-month extension (search snippet): https://thestandard.co/cambodian-workers-6-month-extension-border-closure/
- Thai PBS, CR of 14 Jul 2026: https://www.thaipbs.or.th/news/content/508271
- Matichon, fee rules of 2018 (search snippet): https://www.matichon.co.th/local/news_2316974
- Matichon, 40 reserved occupations (search snippet): https://www.matichon.co.th/local/news_2049383
- Matichon, front-shop sales opened to MOU workers (search snippet): https://www.matichon.co.th/local/news_2153991
- Matichon, older e-workpermit renewal steps (search snippet): https://www.matichon.co.th/local/news_1836308
- Bangkok Biznews, MoPH insurance card price proposal (search snippet): https://www.bangkokbiznews.com/health/public-health/1166690

Enforcement
- Bangkok Biznews, FY2026 inspection results (search snippet): https://www.bangkokbiznews.com/news/1250192
- Thairath, FY2026 inspection results: https://thairath.co.th/news/politic/2957000
- Bangkok Biznews, FY2026 interim results (search snippet): https://www.bangkokbiznews.com/news/news-update/1217137
- InfoQuest, FY2025 crackdown (search snippet): https://www.infoquest.co.th/?p=488231

Portal operation
- EY, e-WorkPermit launch: https://www.ey.com/en_gl/technical/tax-alerts/thailand-launches-online-platform-for-work-permit-applications
- EIG Law, manual applications allowed temporarily: https://eiglaw.com/thailand-temporarily-allows-manual-work-permit-applications/
- InfoQuest, portal faults and paper fallback: https://www.infoquest.co.th/?p=542101 (via the lead report)
- Vialto, manual processing extended to 28 Jul 2026: https://vialtopartners.com/regional-alerts/thailand-immigration-e-work-permit-processing-update-now-extended-until-28-july-2026 (via the lead report)
- Visas Update, mandatory from 28 Apr 2026 (search snippet): https://www.visasupdate.com/post/thailand-e-work-permit-mandatory-online-system-april-28-2026
- Clark Hill, ThaiD verification (search snippet): https://www.clarkhill.com/news-events/news/thailand-launches-online-platform-for-work-permit-applications/
- Envoy Global, employer registration (search snippet): https://www.envoyglobal.com/news-alert/thailand-launches-e-work-permit-platform/
- Exworker (licensed import company), e-WorkPermit problems and functions (updated 29 Sep 2026): https://www.exworker.co.th/en/blog/e-workpermit-en
- Daily News, portal registrations by user type: https://www.dailynews.co.th/news/5314014/ (via the lead report)
- Post Today, queue capacity: https://www.posttoday.com/business/743372 (via the lead report)
- Thansettakij, backlog and operator dispute: https://www.thansettakij.com/general-news/668193 (via the lead report)
- Thansettakij, April 2026 queue: https://www.thansettakij.com/general-news/657139 (via the lead report)
- Naewna, queue-slot middlemen: https://www.naewna.com/local/972023 (via the lead report)

Social security, health, immigration, data protection
- Lexbangkok, social security for domestic workers and the draft Royal Decree (as at 13 Sep 2026): https://lexbangkok.com/?p=10364
- Tilleke & Gibbins, Thailand hire and fire chapter (search snippet): https://www.tilleke.com/insights/how-hire-and-fire-4th-edition-thailand-chapter
- hdmall, list of 5 diseases in the clinic health-check package (search snippet): https://hdmall.co.th/health-checkup/health-check-request-medical-certificate-5-diseases-4-items-phyathai-3-hospital
- Thai Post, explainer on TM.30 (search snippet): https://www.thaipost.net/main/detail/45992
- BAL, TM.30 enforcement (search snippet): https://www.bal.com/immigration-news/thailand-provincial-offices-begin-enforcing-additional-tm30-requirements/
- PwC, Thailand data protection overview (search snippet): https://legal.pwc.de/content/im-fokus/thailand-global-data-protection-law-overview.pdf
