# Paraguay: SEPRELAD compliance tool for real-estate firms (then car dealers) — full plan

Combined plan from four deep-research parts (written 10 Oct 2026):

- [01 Law and product requirements](01-law-and-requirements.md): Ley 1015/97, Res 201/2020 and about 20 other SEPRELAD rules, read in full or in part, turned into 96 testable requirements.
- [02 Market and competition](02-market-and-competition.md): buyer counts from SEPRELAD's own register and statistics exports, prices, competitors, channels and regional markets.
- [03 Product and technical design](03-product-and-tech.md): users, features, flows, screens, SIRO file formats, data feeds, architecture, security, the AI-agent build plan and budget.
- [04 Go-to-market, company and finance](04-gtm-company-finance.md): pricing, channels, the 90-day launch, payments and tax, company setup, a 36-month model, kill criteria and exit.

Earlier work: [the B2 report and its re-assessment](../reports/paraguay-b2.md).

**How to read this page.**
- Every fact carries a link. Most links point to a few sources that are listed at the bottom.
- "My estimate" marks a number I derived. "(unverified)" marks a claim none of the files could confirm.
- "[0x]" points to the section file where the detail and its sources sit.
- Money: **Gs 5,700 = US$1**. The Central Bank reference rate was Gs 5,694 on 9 Oct 2026 ([BCP][bcp]). The B2 report and file 02 used about Gs 7,300, which is out of date (see §1).

---

## 1. Decision in one page

**Verdict: go, as a cheap and gated test. Paraguay alone makes a side business, not a living.**

**New score: 5.5 / 10** (re-assessment: 6/10; first pass: 5/10).

Why 5.5:
- **Everything that could be checked held up.** The duty, the filing calendar, the compliance gap, the buyer count, the lack of a full local product, the low build cost and selling from abroad all checked out.
- **The money is smaller than the re-assessment thought.** The base case is about **US$71,000 of yearly recurring revenue (ARR) at month 36**, not US$110,000-135,000. Profit before founder pay is about US$13,000 in year 3.
- **On the owner's criteria it passes.** The free SIRO portal leaves the real work undone. About 2,300 paying firms is enough for a product this easy to build. The incumbents are partial.
- **It loses half a point for three new findings.** A regional vendor (Devsys) already serves the top end. Pirani has a free tier. And a 2026 rule lets small firms ask to skip the yearly audit, which could thin the auditor channel.

**The case for it.**
- **The duty is real, recurring and checked by machine.**
  - Res 201/2020 makes every firm that habitually buys or sells property keep a full anti-money-laundering (AML) system, with no size threshold ([Res 201/2020, art. 1][r201]).
  - SEPRELAD's Circular 2/2025 fixes the calendar: internal-control report by 30 March, Annual Form by 31 May, external audit by 30 June ([Circular 2/2025][c2]). On top come a negative report each quarter with no suspicious-transaction report ([Res 326/2022][r326]) and a quarterly report of all deals ([Res 003/2025][r003]).
- **SEPRELAD enforces missed filings in bulk.** In December 2024 it sent warning notes to **1,238 real-estate firms** for missed FY2023 filings ([Res 681/2024][r681]; [Memoria 2024][mem]).
- **The gap is wide.** Only 492 of the 1,451 fee-paying real-estate firms sent the 2025 external audit report ([SEPRELAD statistics portal][stats], via [02]).
- **SIRO only receives filings.** It keeps no client file, runs no list checks, writes no manual and sends no reminders ([01]). Small firms key the quarterly report deal by deal or need a JSON file they cannot make ([SEPRELAD JSON notice][json]).
- **No Paraguayan product runs the whole job.** Devsys and Pirani cover screening and risk scoring but none of the SEPRELAD filings ([Devsys][devsys]; [Pirani][pirani]).
- **It is cheap to build and sell.** MVP on 6 Nov 2026, sellable on 11 Dec 2026, about US$12,000 cash with no salaries ([03]). No local company is needed in year 1; Stripe can charge in guaraníes ([04]; [Stripe currencies][stripecur]).

**What the deep dive changed** (compared with the re-assessment):

| Topic | Re-assessment said | Deep dive found | Effect |
|---|---|---|---|
| Law | Res 201/2020 duties from a law-firm summary | Full texts read. Circular 2/2025 fixes the dates. New in 2026: yearly SIRO data confirmation ([Res 435/2026][r435]) and an audit exemption on request ([Res 328/2026][r328]). 96 requirements written ([01]) | Stronger, and the spec is ready |
| Quarterly operations report (RO) | JSON upload for large firms | A quarterly RO of every deal since 2025, with a published Excel spec of 37 columns and code tables ([RO spec][rospec]; [03]) | A concrete re-keying pain the tool removes |
| Buyers | About 1,450 real-estate and 845 car-dealer fee payers | Same payer counts, plus my-count register exports: 2,233 real-estate and 1,719 car-dealer subjects ([02]) | Confirmed |
| Auditor channel | Register size unverified | **182 registered auditors in about 140 practices** ([02], from the [auditor lookup][lookup]) | Confirmed and sized |
| Competition | No local product; Pirani partial | **Devsys Cumplo360 serves a Paraguayan real-estate firm**; Pirani has a free plan; HADA starts at US$10 ([02]) | Weaker at the top end |
| Exchange rate | Gs 7,300 = US$1 | Gs 5,694 = US$1 ([BCP][bcp]) | Gs prices are worth 28% more in dollars, but profit now swings with the guaraní |
| Price | About US$30 a month (US$360 a year) | Main plan Gs 149,000 a month or Gs 1.49m a year (US$261); blended about US$210-245 per firm ([04]) | Lower |
| Revenue, year 3 | About US$110,000-135,000 a year | Base ARR about US$71,000; high about US$169,000 ([04]) | **Weaker** |
| Payments | Not studied | Stripe in PYG from a foreign company, about 6% all-in. Paddle sells to Paraguay only in US$ and does not collect Paraguayan tax ([04]) | Workable |
| Local company | Not studied | Not needed in year 1. A local company needs a legal representative with a Paraguayan identity card ([DNIT RG 34/25][rg34]) | Simpler |
| Build | "Easy to medium" | MVP in 3 weeks with AI agents; about US$6,400-20,600 cash to sellable ([03]) | Cheap |

**What it is worth.** This is file 04's model, adjusted by me for file 03's higher security-test cost. The founder takes no pay.

| Case | Paying firms, month 12 / 36 | ARR at month 36 | Year-3 profit before founder pay | Peak cash need |
|---|---|---|---|---|
| Low | 45 / 91 | about US$20,000 | about -US$15,000 | Stopped by the month-6 gate after about US$19,000 spent |
| **Base** | **110 / 259** | **about US$71,000 (Gs 405m)** | **about US$13,000** | **about US$28,000-29,000** |
| High | 200 / 520 | about US$169,000 | about US$72,000 | about US$17,500 |

- **A founder salary is not in the base case.** With founder pay of US$2,000 then US$3,000 a month, the base case needs about US$61,000 of cash and does not recover it in 3 years ([04]).
- **The upside is a second market.** Paraguayan car dealers from month 7, then Ecuador from mid-2028 (4,446 real-estate and construction firms under the UAFE ([UAFE 2025 report][uafe])). Ecuador could add 1.5-2 times Paraguay's ARR (my estimate in [04]).

**Key conditions.**
1. **Buyers pay.** At least 10 of 20 interviewees say they would pay Gs 100,000 or more a month (Gate 1, §13).
2. **Auditors carry it.** At least 3 registered audit practices agree to pilot. They are the cheapest channel.
3. **SIRO accepts our RO file.** The files disagree on whether SIRO still takes the Excel bulk file (see §6). Test it live.
4. **The guaraní stays near Gs 5,700.** At Gs 7,000 the base-case year-3 profit falls to about US$2,500 ([04]).
5. **The founder accepts a side-business outcome** unless car dealers and Ecuador work.

**Do this first** (12 Oct to 6 Nov 2026, about US$1,000 cash):
1. Build a one-script RO export and have a friendly firm or auditor try it in the live window that closes on 20 Oct 2026 ([03]).
2. Run 20 interviews: 12 agencies or developers, 2 car dealers, 6 auditors. Ask auditors what they charge ([04]).
3. Build the MVP with AI agents in parallel. **Commit the lawyer's full fee and the security test only after Gate 1 on Fri 6 Nov.**

---

## 2. Why now: the law and enforcement

### Who is obliged

- **Real estate.** Any natural or legal person who "habitually" buys or sells property: agencies, agents, brokers, commission agents and developers. The number and value of deals do not matter ([Res 201/2020, art. 1 and footnote 2][r201]; [Ley 1015/97, art. 13(k)][ley]).
- **Agents.** An individual agent is a separate obliged subject only if he works independently with his own structure. Employees and exclusive contractors are covered by their firm ([Circular 001/2022][c001]).
- **Rental-only firms** look out of scope. SEPRELAD lets them deregister with a lease and invoice ([Res 460/2025][r460]; my inference from [01]).
- **Same regime, later verticals:** car dealers ([Res 196/2020][r196]), jewellers (Res 222/2020, not read), pawn shops, art dealers, cash-in-transit, safe-deposit firms ([01]).
- **No size exemption.** The only reliefs: the owner of a one-owner firm may be the compliance officer (CO); low-risk clients below the thresholds get simplified checks; and since July 2026 the audit can be waived or deferred on request ([Res 201/2020, art. 7-8, 22][r201]; [Res 328/2026][r328]).

### What must exist and when

| Duty | Deadline or frequency | Basis |
|---|---|---|
| Register in SIRO; answer SEPRELAD's queries or the request lapses | Before operating; queries within 30 calendar days | [Res 483/2021][r483]; [Res 258/2023][r258] |
| Pay the yearly fee (canon): Gs 331,000 in 2026 | By 30 June; 2% a month surcharge after | [Res 56/2026][r56]; [Perspectivas][persp] |
| Confirm SIRO data yearly; report changes | Yearly; changes within 5 business days | [Res 435/2026][r435] |
| Appoint a CO and notify SEPRELAD (7 items, including a CV and a utility bill) | 5 business days | [Res 201/2020, art. 8-10][r201] |
| AML manual (Annex I) and code of ethics, signed by every staff member | On adoption and on rule changes | Res 201/2020, art. 11-12 |
| Risk self-assessment over 4 factors, using the national risk assessment | Every 2 years; method every 4 years | Res 201/2020, art. 3-4 |
| Training programme; records kept 5 years | Yearly | Res 201/2020, art. 15-16 |
| Client file (KYC) on every buyer and seller; a risk score for every client | Each client | Res 201/2020, art. 17-28 |
| Simplified checks allowed below 150 minimum wages paid at once (Gs 456.6m) or 20 a year in instalments (Gs 60.9m) | Each client | Res 201/2020, art. 22; [Decreto 6225/2026][d6225] (my calculation in [01]) |
| Enhanced checks for PEPs, non-residents, trusts and non-profits; signed PEP declaration from every client | Each client | Res 201/2020, art. 24; [Res 50/2019][r50] |
| Beneficial-owner register certificate from corporate clients | Onboarding and updates | [Res 202/2020][r202] |
| Screen clients, owners and counterparties against UN, OFAC, EU and FATF lists; freeze on a UN match | Onboarding, each operation, each list change | Res 201/2020, art. 38 and Annex IV; [Decreto 5920/2021][d5920] |
| Register every operation; keep records 5 years | Continuous | [Ley 1015/97, art. 17-18][ley]; Res 201/2020, art. 31-32 |
| Negative report (RN) for a quarter with no suspicious report | Days 1-10 of Jan, Apr, Jul, Oct | [Res 326/2022][r326] |
| Operations report (RO) of all deals | Days 11-20 of Jan, Apr, Jul, Oct | [Res 003/2025][r003] |
| Internal-control (CI) report, 12 Annex II items | 30 March | Res 201/2020, art. 13; [Circular 2/2025][c2] |
| Annual Form (FA): counts, amounts, cash share, departments | 31 May | [Res 165/2022 annex][r165a] |
| External audit (AE) report by a SEPRELAD-registered auditor | 30 June; exemption or deferral only if asked before the deadline | Res 201/2020, art. 14 as rewritten by [Res 328/2026][r328] |
| Suspicious-transaction report (ROS), approved by the owner or board | Within 24 hours of deciding | Res 201/2020, art. 7(6), 33 |

### Penalties

- **Firms:** warning note, public reprimand, a fine up to 5,000 minimum wages (about Gs 15.2bn at the 2026 wage), a fine up to 50% of the operation, suspension up to a year, or revocation ([Ley 1015/97, art. 24][ley]; my calculation in [01]).
- **Owners, COs and staff:** warning, reprimand, a fine up to 500 minimum wages or 1-10% of the operation, or removal with a 3-10 year ban (same).
- **A warning still counts.** It is a formal sanction, it goes on SEPRELAD's register, and repeat offences weigh in the next sanction (Ley 1015/97, art. 24, 25(f), 28.8). Since 2026, SEPRELAD can also restrict a firm's SIRO functions until its data is fixed ([Res 435/2026, art. 7][r435]).

### Enforcement evidence

- **Mass, objective checks.** In 2024 SEPRELAD checked 2,043 obliged subjects for the RN, RO, FA, AE and CI. It warned 1,692 of them: 1,238 real-estate firms ([Res 681/2024][r681]) and 454 car dealers (Res 410/2024) ([Memoria 2024][mem]). The statistics portal shows 456 car-dealer warnings, 4 later revoked ([02]).
- **Warnings go to the SIRO e-mail.** A firm with a stale address may not see them ([Res 681/2024][r681]).
- **Fines are rare.** None on real estate; one across all sectors in 2025, on a car dealer and under appeal; none in 2026 to date ([statistics portal][stats], via [02]). GAFILAT called the sanctions regime not dissuasive in 2022 ([GAFILAT MER 2022, paras. 599-602][mer]).
- **Inspectors ask first for the manual, the CO appointment and proof of training** ([Ferrere on Res 36/21][ferr36]).
- **Filing gaps, real estate:** 492 audit and 683 internal-control reports in 2025, and 526 Annual Forms in 2024, against 1,451 payers ([statistics portal][stats]; [Memoria 2024][mem]). Car dealers: 160 audit reports against 845 payers ([02]).

### Why now

- **The first deadlines after a December launch are the RN on 1-10 Jan 2027 and the RO on 11-20 Jan 2027** ([Res 326/2022][r326]; [Res 003/2025][r003]).
- **SEPRELAD keeps adding duties.** A forced SIRO data-update form for real estate started on 5 Oct 2026 ([SEPRELAD notice][upd]). Yearly data confirmation (Res 435/2026) and the audit exemption (Res 328/2026) are new this year.
- **Thresholds moved on 1 July 2026** with the new minimum wage ([Decreto 6225/2026][d6225]). The wage resets every July.
- **The national risk assessment (ENR 2025) is pending.** Res 201 requires firms to use it, so templates must change when it is published ([SEPRELAD ENR notice][enr]). Res 201/2020 is six years old; a new rulebook is possible (unverified).
- **GAFILAT pressure.** Paraguay is in enhanced follow-up, with priority actions to 2028 ([Hoy, Oct 2024][hoy], search snippet only; unverified).
- **Data protection.** Ley 7593/2025 applies fully from about 27 Nov 2027 ([La Nación][l7593]; [Ferrere][ferr7593]).
- **SEPRELAD expects private help.** Circular 2/2025 bars its own staff from paid advice on manuals, codes, self-assessments, risk matrices, audit reports, list screening and the four filings ([Circular 2/2025, point 3][c2]). That list reads like a product spec. It also means no vendor can claim SEPRELAD approval.

---

## 3. Customers

| Segment | Registered (Oct 2026) | Paid the 2025 canon | Notes |
|---|---|---|---|
| **Real estate** (agencies, brokers, developers, lot sellers) | **2,233** (79% companies) | **1,451** | 52% in Asunción, 19% Central, 11% Alto Paraná |
| **Car dealers** | **1,719** (62% individuals) | **845** | Central, Alto Paraná, Caaguazú |
| Jewellers and precious metals | 189 | 108 | Different FA rules |
| Pawn shops | 31 | 23 | Old rules under review |
| Virtual-asset firms | 45 | 29 | |
| Remitters | 35 | 24 | |
| Art, antiques, coins; cash-in-transit; safe-deposit | 6; 6; 2 | — | Too few to matter |
| Non-profits | 3,435 | 1,919 | Other rulebook; low ability to pay |
| Notaries | 1,406 | 1,144 | Supervised by the Supreme Court; out of scope |
| **Channel: registered external auditors** | **182 registrations, about 140 practices** | — | Big Four, mid-tier firms and about 90 individuals |

Source for every count: my-count exports of the [SEPRELAD register lookup][lookup] and the [statistics portal][stats], made on 10 Oct 2026 and reported in [02].

**The working figure is about 2,300 paying firms** (1,451 real estate plus 845 car dealers), plus about 190 smaller subjects.
- I use payers, not registrations, because the register keeps inactive firms ([02]).
- **The real-estate count includes many non-agencies.** ACIP's president estimates only 300-400 "real" agencies with about 4,000 agents ([Infonegocios, Aug 2026][acip26]). The rest of the register is developers, lot sellers, investment firms and individuals ([02]).
- **More firms may be obliged than registered.** Tax data from 2017-2019 counted 915 taxpayers with brokerage as their main activity and 2,192 as a secondary one ([SEPRELAD real-estate risk guide][guide]). Real-estate negative reports in 2025 (7,474, about 1,870 a quarter) also exceed the payer count ([02]). So 1,451 is a floor (my inference).

**Who to sell to first.**
1. **About 650 firms that bought an external audit in 2025** (492 real estate, 160 car dealers). They already spend money on compliance, and their auditor wants a clean file ([02]).
2. **The 1,238 real-estate firms and 454 car dealers warned in 2024** ([Memoria 2024][mem]).
3. **About 300-450 new real-estate registrants a year**, who must get through SIRO registration. In 2024, 532 of 2,042 registration requests were annulled ([Memoria 2024][mem]; [02]).

**Buyer profile.**
- Mostly small companies in Asunción and Central, run by the owner. The owner is often the CO, which the rule allows ([Res 201/2020, art. 7(4)][r201]).
- Agents mostly earn 5-6% commission and no salary ([SEPRELAD risk guide][guide]).
- Car dealers are more often individuals, spread outside Asunción. In 2019 their association said customers refused the paper source-of-funds form and sales were lost ([Última Hora, Nov 2019][uh19]).

**How they comply today** ([02]):
- They key filings into free SIRO by hand. SEPRELAD's help desk got 855 questions in about 4.5 months, mostly on how to file the ROS and RO, SIRO access and registration ([Memoria 2024][mem]).
- They buy one-off Word packs from freelancers ([Clasipar ad][clasipar]) or take courses at Gs 150,000-800,000 ([Gestión Contable][gc]; [Best Practices][bp]).
- They buy the yearly "Informe de Cumplimiento" from an auditor ([Cáceres & Schneider][cs]). Audit fees are not published (unverified).
- A few larger firms use real software: Fortaleza Inmuebles uses Devsys Cumplo360 ([Devsys][devsys]).
- SEPRELAD runs free sessions, for example an Annual Form webinar for about 100 real-estate officers on 8 Apr 2026 ([SEPRELAD][fa26]).

**The jobs, in the buyer's words** ([03]):
1. "Don't let me miss a SEPRELAD deadline again."
2. "Type each deal once."
3. "Have my file ready when the auditor or an inspector asks."
4. "Onboard a buyer properly in 10 minutes, without losing the sale."
5. "Write the yearly reports for me."
6. "I got a warning letter. Show me what to fix."
7. The auditor: "Let me review 20 client firms in the time 5 take now."

No public forum complaints were found; the pain evidence is SEPRELAD's own numbers ([02]).

---

## 4. Competition

| Alternative | What it does | Price | What it means for us |
|---|---|---|---|
| **SEPRELAD SIRO** | Registration, data update, ROS, RN, RO (form one by one, or a bulk file), FA, upload of CI and AE reports. No client file, screening log, documents or reminders ([02]; [JSON notice][json]) | Free (the firm pays the canon) | The filing end-point. We prepare; the firm files. Its formats are our integration hooks |
| **Devsys Cumplo360** (Uruguay) | List search, client files with documents, ongoing screening, risk scoring, monitoring. No SEPRELAD filings, Annual Form, RO file, Res 201 manual or audit pack mentioned. Says 350+ clients in 18 countries; Paraguayan clients include Fortaleza Inmuebles ([Devsys clients][devsys]; [Cumplo360][cumplo]) | Not published | **The real incumbent at the top end.** It proves a Paraguayan agency will pay for screening. Built for compliance teams, not one-owner firms. A likely acquirer |
| **Pirani AML** (Colombia) | Risk matrix, list-screening add-on, suspicious-report workflow; a SEPRELAD guide page; no Paraguayan forms ([Pirani plans][pirani]; [Pirani SEPRELAD page][piranis]) | Free plan (200 records, 5 users); paid prices at checkout | A "free risk matrix" is no edge |
| **HADA** (Uruguay) | List search over 2,000+ lists, risk matrix, document manager, Uruguayan report format ([HADA][hada]) | From US$10 plus tax | Sets the price floor for list search |
| **Compliance Paraguay** | A database of about 9,000 Paraguayan PEPs ([La Nación, Aug 2024][cpy]) | Not published | Best PEP data partner |
| **Freelance document packs** | Static Word packs: manual, risk forms, training plan ([Clasipar ad][clasipar]) | Not stated | Proves demand; no upkeep |
| **Trainers** | Courses: Gestión Contable (894 enrolled), Best Practices, Fotriem/BNF ([Gestión Contable][gc]; [Best Practices][bp]) | Gs 150,000-800,000 | Channel and price anchor |
| **SEPRELAD free guidance** | Sector risk guide, published risk matrix (Res 240/2020), form instructions, webinars ([risk guide][guide]) | Free | Lowers the value of a paid document kit |
| **Registered auditors** (182 people, about 140 practices) | The yearly audit; some design programmes ([02]) | Not published (unverified) | **Best channel**, not a rival |
| **Law firms** (Ferrere, Vouga and others) | Programme design for larger firms ([02]) | Not published | Content and referrals |
| **Criterion S.A.** (credit bureau) | Credit and people data; co-hosted a SEPRELAD real-estate webinar in June 2026 ([Criterion][criterion]; [SEPRELAD][crit26]) | Per report | Identity-data partner or possible entrant |
| **Real-estate tech** (Place Analyzer with ACIP; an ACIP MLS with Grupo ITTI) | Appraisal and listings; no AML ([Infonegocios][placean]) | Member benefit | Integration partner or possible entrant |

**Conclusion.**
- About 25 searches over three passes found no Paraguayan product that runs the whole SEPRELAD job for a small firm ([02]).
- The incumbents are partial (Devsys, Pirani, HADA) or static (Word packs). That is the opening the owner's criteria look for.
- **Do not sell documents or screening alone.** Both are free or cheap elsewhere. Sell the *running* of the file: the calendar with proof, the client and deal register, the RO file, the yearly reports and an export the auditor accepts.
