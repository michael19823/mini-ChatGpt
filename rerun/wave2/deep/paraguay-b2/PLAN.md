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
| **Base** | **110 / 259** | **about US$71,000 (Gs 405m)** | **about US$13,000** | **about US$28,000** |
| High | 200 / 520 | about US$169,000 | about US$72,000 | about US$17,000 |

- **A founder salary is not in the base case.** With founder pay of US$2,000 then US$3,000 a month, the base case needs about US$66,000 of cash and does not recover it in 3 years ([04], plus my security-cost adjustment in §10).
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

---

## 5. Product

### Positioning

> "Tu legajo SEPRELAD siempre listo para el auditor" — your SEPRELAD file, always ready for the auditor ([03]).

- **What it is.** A Spanish web app that runs a real-estate firm's SEPRELAD file between filings: the deadline calendar with proof of filing, the client file with KYC and list checks, the deal register that produces the quarterly RO, the Res 201/2020 documents, and the yearly CI report, FA figures and audit pack ([03]).
- **What it is not.**
  - It never files in SIRO and never stores SIRO passwords. SIRO has no public API, and every filing is the firm's sworn declaration ([01, rule G1][01req]).
  - It is a tool, not legal advice and not the CO. The firm stays responsible ([Res 201/2020, art. 30][r201]).
  - It claims no SEPRELAD endorsement ([Circular 2/2025][c2]).
- **Where the money is.** In keeping the file current and proving it, not in templates. SEPRELAD and Pirani already give away a risk matrix ([02]).

### Users

| Role | Who | Rights |
|---|---|---|
| Top authority (owner, partners or board) | Approves the manual, code, CO, training plan, alert rules, enhanced-check clients and every ROS ([Res 201/2020, art. 7][r201]); pays | Everything in own firm; grants auditor or consultant access |
| Compliance officer (CO) | Often the owner | Everything, plus the confidential area (alerts, ROS) |
| Assistant | Secretary or bookkeeper | Clients and deals; confidential area only if named CO assistant |
| Agent or broker | Employee or exclusive contractor ([Circular 001/2022][c001]) | Own clients and deals; cannot see whether a ROS exists |
| Branch compliance lead | Larger firms (Res 201/2020, art. 8) | Branch only |
| External auditor | One of 182 registered auditors | Read-only per invited firm; audit pack; findings |
| Consultant or accountant | Outsourced helper | Per-firm grant; portfolio deadlines; no confidential area |
| End client (buyer or seller) | The firm's customer | No account; a one-time phone link to fill in KYC and sign the PEP declaration |
| Content editor | Our Paraguayan AML lawyer or a registered auditor | Templates, red flags, parameters; no customer data |

### Feature map

Requirement numbers (R1-R96) refer to [01 §PRODUCT REQUIREMENTS][01req]. The cut follows what SEPRELAD checks in SIRO (RN, RO, FA, AE, CI) and the first deadlines after launch ([03]).

| Module | MVP (done Fri 6 Nov 2026) | Launch (sellable Fri 11 Dec 2026) | 2027 |
|---|---|---|---|
| Accounts and security | Firm workspace; roles; MFA for owner and CO; tamper-evident audit log; Spanish (Paraguay) (R88-R89) | Auditor and consultant roles; support-access consent | API for partners |
| Rules and parameters | Dated store: minimum wage, thresholds, deadlines, risk zones, code tables (G3) | Regulation register linking each resolution to templates (R94) | Car-dealer and jeweller packs by configuration (R95) |
| Onboarding | Scope check (habitual, rental-only, agent status); firm, people, SIRO status, fiscal year (R1-R3, R7) | RUC autofill from the tax office's free files; registration pack (R5-R6) | Deregistration checklist |
| Calendar and status | Every SIRO deadline with reminders at 30, 7 and 1 days; Paraguayan holidays; traffic-light dashboard; proof-of-filing upload; automatic RN task (R68-R70, R72, R74) | SEPRELAD warning-notice log with a fix-it checklist (R73); yearly data confirmation and 5-day change tasks (R8-R9); canon tracking (R10); calendar feed | WhatsApp reminders (Q1 2027) |
| Clients and KYC | Natural and legal persons; general, simplified and enhanced regimes from dated thresholds; PEP declaration PDF; beneficial-owner certificate; hashed uploads; risk score v0 (R34-R38, R41, R43-R47) | Client self-service phone link; 60-day deferred-check clock; CDD-failure outcomes (R39-R40) | ID reading from photos |
| Screening | UN (binding), OFAC and EU lists; FATF countries by hand; re-screen on list changes; hit review with reasons; 5-year log (R48-R50) | UN match opens a freeze task and blocks the deal (R51); upload of SEPRELAD list circulars (R52) | Paid PEP data add-on |
| Deals and RO | Every RO field, validated against SEPRELAD codes; quarterly Excel export in the reference column order; a "copy sheet" in SIRO screen order; exported / filed / nil states (R53-R55, R58) | JSON export once SEPRELAD supplies the schema; FX source per deal (R56-R57) | Browser helper for SIRO's form, only if SEPRELAD agrees |
| Documents | Manual covering every Annex I heading; code of ethics; CO appointment act and notice pack; approvals; DOCX and PDF (R11, R13, R26-R29) | Risk self-assessment wizard with method document (R19-R25); staff acknowledgements (R31); shared association code (R30) | Qualified e-signature |
| Training | Session log kept 5 years (R83) | Yearly plan with the 10 topics; missed-training flags; "not CECAD-certified" label (R82, R84-R85) | Short courses with a quiz |
| Confidential area | "ROS filed this quarter: yes or no", date and receipt only | Alert register with the 14 Annex III red flags and the 30-day clock; restricted view (R59-R61, R65-R66) | ROS draft with a name-leak check and 24-hour clock (R62-R64, R67) |
| Yearly reports | — | — | **CI report generator by 15 Feb 2027**; **FA calculator by 15 Apr 2027**; CO annual report (R17, R71, R75-R76) |
| Auditor and consultant | — | Practice dashboard; read-only access; audit pack ZIP; auditor-registration expiry check; findings to closure (R77-R80) | Sampling helper; white-label PDFs |
| Audit exemption | — | — | Res 328/2026 request workflow by 15 May 2027 (R81) |
| Records and exit | 5-year retention date on every record (R86) | Full export; free read-only archive (R87) | Purge with CO approval |
| Billing | Stripe checkout and webhooks, yearly and monthly plans | Practice plan with client seats | Local payment methods if needed |

**Reconciled with 04's plan list.** File 04 lists WhatsApp reminders, a PEP data check and the CI generator inside the plans at launch. File 03 builds them later. I follow 03's build order and the plan pages must say "from February 2027" for the CI generator and "add-on, later" for paid PEP data.

**Why this cut** ([03]):
- The MVP covers every filing SEPRELAD checked in its 2024 sweep, at the level of "never miss it, and keep proof".
- The yearly-report generators can wait, because their first deadlines are 30 March and 31 May 2027.
- The full ROS workflow is the most sensitive and least used feature: real estate filed 90 ROS in 2025 against 7,474 negative reports ([B2 report][b2], from the [statistics portal][stats]). Leaving ROS content out of the MVP lowers the risk of a confidentiality breach.

### Key flows ([03])

1. **First day, under 45 minutes.** Sign up with MFA. Answer the scope check. Type the RUC and the app fills the name. Add the owner, the CO and staff. Enter SIRO status and the last filings. The app builds the calendar, shows the traffic light, and drafts the manual, code and CO act for the owner to approve.
2. **New deal, about 10 minutes.** Enter the property and payment. Add buyer and seller, reusing existing clients. The app proposes the check regime from the score, any open flag and the dated thresholds, with the reason shown. The PEP declaration is printed or sent by phone link. Screening runs at once; a possible hit blocks completion. The deal counts toward this quarter's RO only when every party's file is complete.
3. **Quarter close.** On day 1 the app checks for a filed ROS. If none, it opens an RN task due on day 10. On day 11 the RO task opens, due on day 20. The app validates every deal, then offers the Excel file, a JSON file (if switched on) or the copy sheet. The user files in SIRO and uploads the receipt.
4. **List update, automatic.** Every 6 hours the UN, OFAC and EU files are downloaded and compared with the last version. New names are matched against all clients, owners and counterparties. Hits go to the CO the same day.
5. **Something looks odd.** A red-flag rule or a "Esto me parece raro" button opens an alert visible only to the CO, assistants and owner. A 30-day classification clock starts. Reasons are kept 5 years.
6. **The yearly cycle.** January: the CI draft (due 30 March). April: the FA figures, checked against the year's RO files (due 31 May). May-June: the audit pack or the exemption request, and the canon (30 June). Every year: SIRO data confirmation and the training plan; every 2 years the risk review.
7. **Auditor with many firms.** The auditor invites firms or is invited. One dashboard shows every firm's traffic light. "Audit pack" builds one ZIP and one PDF, including a system description for the IT test that the audit standard requires ([Res 411/2013][r411]). Findings become tasks.
8. **A warning letter arrives.** Log it. The app builds a fix-it checklist from the obligations cited. This is also the sales hook: "Got a warning? Fix it in an afternoon."
9. **Leaving.** Full export as PDF, CSV and original files, plus a read-only archive, because the 5-year duty stays with the firm ([Ley 1015/97, art. 18][ley]).

### Screens ([03])

1. Public site and pricing, with a countdown to the next real deadline.
2. Onboarding wizard (six steps; pause and resume).
3. Dashboard "Semáforo SEPRELAD": one tile per obligation (RN, RO, CI, FA, AE, canon, data confirmation, risk review, training plan, CO notice).
4. Calendar, with a personal calendar feed.
5. Filing screen (for example "RO 3T 2026"): checklist, errors per deal, export buttons, receipt upload, history, "nil quarter".
6. Client list with filters.
7. Client file: data, documents, PEP, beneficial owners, risk, screening, deals, history.
8. New deal form with live code validation.
9. Screening review, side by side with the list entry.
10. Documents library with versions, approvals and acknowledgements.
11. Risk self-assessment wizard.
12. Training.
13. Confidential area (CO, assistants, owner only).
14. Yearly reports: CI builder, FA figures in SIRO order, CO report.
15. Practice dashboard for auditors and consultants.
16. Settings: firm and SIRO data, users, parameter history, billing, export, support consent.
17. SEPRELAD notices.

All screens are server-rendered, in Spanish, and work on a phone.

**The acceptance checklist is the list of 96 requirements in [01 §PRODUCT REQUIREMENTS][01req].**

---

## 6. Technical design

**Principles for a solo founder with AI agents** ([03]):
- Boring and conventional, so agents write idiomatic code and the founder can review it fast.
- One repository, one deployable app, split into modules with one owner each.
- **Rules are data, not code.** Thresholds, deadlines, code tables and red flags live in dated, versioned tables with tests. A rule change becomes a data change a lawyer can check.
- **No AI on the compliance path.** The check regime, risk score, screening and deadlines are rule-based and explainable, because auditors test the tool ([Res 411/2013][r411]). AI may later draft report text that a human approves.

**Stack** (versions checked on PyPI on 10 Oct 2026, [03]):

| Layer | Choice |
|---|---|
| App | Python 3.13, Django 6.1 (or 5.2 LTS), server-rendered pages with HTMX and a little Alpine.js |
| Database | PostgreSQL with row-level security on `firm_id`, `pg_trgm` for name search, JSONB snapshots |
| Jobs | procrastinate (Postgres queue; no Redis): list refresh, re-screening, reminders at 07:00 Paraguay time, monthly RUC import |
| Documents | docxtpl for Word templates the lawyer edits; LibreOffice (Gotenberg) for PDF; WeasyPrint for HTML to PDF |
| Exports | openpyxl with golden-file tests against SEPRELAD's reference RO file; a JSON validator once the schema arrives |
| Name matching | rapidfuzz, unidecode, pg_trgm; Spanish names, accents and compound surnames |
| Auth | Django auth, Argon2, django-otp (TOTP) |
| Files | S3-compatible storage with KMS encryption, per-firm prefixes, short-lived links, virus scan |
| E-mail | Amazon SES in the same region |
| Payments | **Stripe Billing** (changed from 03's Paddle; see §9) |
| Hosting | Docker Compose on AWS Lightsail in São Paulo behind Caddy; GitHub Actions; staging and production ([Lightsail pricing][lightsail]) |
| Tests | pytest, Playwright, semgrep or bandit, pip-audit |

Python wins over a JavaScript stack on Word and Excel tooling, the Django admin for legal content and name-matching libraries. Either works if the founder knows the other better ([03]). Whether Lightsail's managed PostgreSQL allows `pg_trgm` is unverified; the fallback is Amazon RDS or PostgreSQL on the server ([03]).

**Modules:** core (tenancy, users, roles, MFA, audit log) · params · calendar · clients · screening · operations · documents · training · confidential · reports · practice · billing · public ([03]).

### SIRO: what the product produces

| Filing | How SIRO takes it | What the product produces |
|---|---|---|
| Registration | Web form plus PDF scans ([Res 483/2021][r483]; [Res 258/2023][r258]) | Pre-filled field sheet; document checklist; 30-day query countdown |
| CO notice | SIRO CO module ([Memoria 2024][mem]) | Notice pack with the 7 items; 5-business-day task |
| Data confirmation | Web form; forced update for real estate from 5 Oct 2026 ([Res 435/2026][r435]; [notice][upd]) | Yearly task; change detection |
| RN | Web declaration ([Res 326/2022][r326]) | Task with the RN logic; receipt upload |
| RO | Web form one by one; an Excel bulk file per the Res 003/2025 annex; or JSON bulk upload on request since Aug 2025, after which one-by-one entry is switched off ([Res 003/2025][r003]; [RO spec][rospec]; [JSON notice][json]) | Excel file in the reference layout; JSON once the schema is obtained; copy sheet |
| FA | Web form that SIRO pre-fills; sworn submission; printable compliance ticket ([Res 165/2022 annex][r165a]) | Figures in SIRO screen order; ticket upload |
| CI and AE | Obligaciones > Informes: one document per report; AE names the auditor from SEPRELAD's list ([SIRO CI/AE manual][cimanual]) | CI report PDF and DOCX; receipt upload |
| ROS | SIRO ROS module (Res 201/2020, art. 33-36) | Later: draft with a name-leak check |

**The RO file is the riskiest integration, and the files disagree about it.**
- File 01 read the Res 003/2025 annex as allowing a bulk upload of the "Formulario RO Inmobiliario" Excel file ([01]; [RO spec][rospec]).
- File 02 found that small firms key ROs one by one and that bulk upload needs JSON, enabled by a note to SEPRELAD, after which the one-by-one form disappears ([SEPRELAD notice, 22 Aug 2025][json]). SEPRELAD's 2024 report also says small subjects enter the RO operation by operation and larger ones upload JSON ([Memoria 2024][mem]).
- File 03 inspected the reference Excel: 37 columns, a 245-row city table and a 243-row activity table, dated 19 Dec 2024. Its column order differs from the PDF, its sample rows break the PDF's own date and phone formats, and it lacks the matrícula field the annex lists ([03]; [reference sheet][rosheet]).
- I ran two extra searches to settle this and found nothing new. **So it stays open.** The plan builds all three outputs (Excel, JSON behind a switch, copy sheet), tests the Excel file in the live Q3 window (11-20 Oct 2026), and asks SEPRELAD for the JSON schema in week 0. A firm should switch to JSON only if it has many deals, because it loses one-by-one entry ([03]).

### Data sources ([03])

| Source | Use | Access and cost |
|---|---|---|
| UN Security Council consolidated list (binding through Ley 6419/2019 and [Decreto 5920/2021][d5920]) | Onboarding, each deal, 6-hourly diff | Free XML; 736 individuals and 274 entities on 9 Oct 2026 ([UN XML][un]) |
| OFAC SDN | Named in Res 201 Annex IV | Free XML ([OFAC][ofac]) |
| EU consolidated list | Named in Res 201 Annex IV | Free; use a personal EU Login token, because the public file lags ([03]) |
| FATF high-risk countries | Country risk | Entered by hand after each plenary |
| SEPRELAD designation circulars | National list | Uploaded by hand; no machine-readable list found |
| Client's signed PEP declaration | **The core PEP control** ([Res 50/2019][r50]) | Free |
| OpenSanctions | PEP check | Only one Paraguay dataset (483 members of Congress); commercial use needs a licence; about €0.03-0.10 a query ([OpenSanctions index][os]; [licensing][oslic]) |
| Compliance Paraguay | About 9,000 Paraguayan PEPs | Price not published ([La Nación][cpy]); best local partner |
| Tax office (DNIT) RUC files | Name autofill, check digit, cancelled-RUC warning | Free monthly zip files; `ruc0.zip` alone holds 201,867 rows ([DNIT][dnit]); reuse terms unverified |
| SEPRELAD auditor register | Pick the auditor; warn on an expired registration (R79) | Free Excel export ([lookup][lookup]) |
| Minimum wage, holidays, FX | Thresholds, business days, Gs amounts | Decree each July ([Decreto 6225/2026][d6225]); Python `holidays` ([PyPI][holidays]); BCP rates |

**PEP data is the weak spot.** Res 50/2019 makes the signed declaration the main control anyway. A local PEP database becomes a paid add-on once its price is known ([03]).

### Security, privacy and liability ([03])

- **Tenant isolation twice:** `firm_id` scoping in code plus PostgreSQL row-level security, with cross-tenant tests in CI.
- **Account takeover:** TOTP MFA for owner, CO, auditor and consultant; rate limits; idle timeout.
- **ID copies:** KMS-encrypted storage, signed links valid for minutes, virus scan, metadata-only logs.
- **No tipping-off:** the confidential area sits in a separate schema with its own key; every read is logged; client-facing exports and data-subject answers exclude ROS and SEPRELAD requests ([Ley 1015/97, art. 20][ley]; [Circular 01/2025][c01]). The MVP stores no ROS narrative.
- **Evidence integrity:** a hash-chained, append-only audit log; SHA-256 on every upload; approvals store the document hash.
- **AI-written code:** the founder reviews auth, tenancy, file access and the confidential area line by line; static analysis and a dependency audit in CI; agents get synthetic data only and no production access; an external security test before launch and every year.
- **Backups:** point-in-time recovery, a nightly encrypted copy in a second region, a monthly restore test.
- **Data protection (Ley 7593/2025).** Full effect about 27 Nov 2027; implementing decree pending. Secondary sources say it requires safeguards for transfers abroad, 72-hour breach notices and impact assessments for high-risk data ([Clym][clym]; [La Nación][l7593]). Article details are unverified. Each firm is the controller; we are its processor. Every customer signs a processing agreement (DPA) with the sub-processor list and a 48-hour breach notice to the firm. Write an impact assessment (DPIA) before the pilot.
- **Hosting in São Paulo.** Brazil has its own data-protection law. Paraguay has no adequacy list yet, so rely on contract clauses and ask the lawyer ([03]).
- **AML law beats erasure.** Records stay 5 years from the deal and 5 years after the relationship ends ([Ley 1015/97, art. 18][ley]).
- **Liability.** Every document shows its template version and review date. The firm approves every document. Liability is capped at 12 months of fees. Templates are updated within 30 days of a new SEPRELAD resolution ([03]; [04]).

### Running cost ([03], my estimates; excluding staff and payment fees)

| Paying firms | Hosting and tools a month | Per firm a month |
|---|---|---|
| 50 | about US$75-125 | US$1.5-2.5 |
| 300 | about US$235-335 | US$0.8-1.1 |
| 1,000 | about US$490-805 | US$0.5-0.8 |

- **Payment fees cost as much as hosting or more.** At about 6%, they are about US$450 a month at 300 firms ([03]). Push yearly plans.
- **Fixed costs after launch:** Claude Code US$200 a month ([Anthropic][claude]); a lawyer rule-watch retainer US$100-300 a month; a yearly security retest. With hosting, about US$650-1,300 a month at 50 firms ([03]).

---

## 7. Development steps

### How the founder runs parallel AI agents ([03])

- **Contract first.** In week 1 the founder and one agent write every module's models, function signatures and URL map, plus failing end-to-end tests. Then the "contract freeze".
- **Isolation.** Each stream works in its own git worktree, branch and Claude Code session, and owns one Django app. Pull requests stay under about 400 lines and need green CI. A reviewer agent comments on each. The founder merges twice a day.
- **Golden tests for the legal parts.** The RO header must equal the reference header exactly. One test per deadline rule and edge case. Check-regime tests at the threshold values, before and after the 1 July wage change. The manual must cover every Annex I heading.
- **Capacity.** One founder can steer about 5-7 well-specified streams (my judgement in [03]).

### Calendar

| Phase | Dates | Output | Exit check |
|---|---|---|---|
| 0. Prepare | Mon 12 - Sun 18 Oct 2026 | Interviews booked; real artefacts collected; spec pack for agents (CLAUDE.md, glossary, 96 requirements mapped to modules and tests, data model, synthetic firm with 30 clients and 60 deals); accounts; **RO spike tried in the live Q3 window (closes 20 Oct)**; JSON schema requested | Spec pack done; at least 2 pilot firms or 1 auditor committed |
| 1. Foundation | 19 - 25 Oct | Skeleton, tenancy, auth, audit log, parameters, all models, CI and CD, staging | Contract freeze; CI green |
| 2. Parallel modules | 26 Oct - Fri 6 Nov | Seven streams (below) | **MVP done; Gate 1** |
| 3. Launch scope | 9 - 27 Nov | Auditor portal and audit pack; RUC autofill; alert register; export and archive; client phone link; notices log; risk wizard | Flows 1-4 and 7 pass end to end |
| 4. Legal sign-off | Outline in week 1; full drafts after Gate 1; sign-off by 27 Nov | Templates v1.0, terms, privacy notice, DPA, disclaimers | Written sign-off |
| 5. Security test | Test 23-27 Nov; fixes to 4 Dec; retest by 9 Dec | External grey-box test | No open high or critical findings |
| 6. Pilot | 16 Nov - 11 Dec | 10-15 firms through 2-3 auditors, free until launch | 5 firms active; 2 with a complete file |
| 7. Sellable | **Fri 11 Dec 2026** | Stripe live; help pages; pricing page | "Sellable" list below met |
| 8. First live season | 14 Dec 2026 - 31 Jan 2027 | Support firms through the RN and RO windows | RO files accepted by SIRO for at least 10 firms |
| 9. Yearly-report releases | CI generator by 15 Feb; FA calculator by 15 Apr; exemption workflow and audit-pack polish by 15 May 2027 | Firms meet CI (30 Mar), FA (31 May) and AE (30 Jun) | Firms file CI and FA from our output |
| 10. Second vertical | Apr - Sep 2027 | Car-dealer pack (Res 196/2020); PEP add-on; WhatsApp; ROS draft | Car-dealer pilot with 5 dealers |

**Reconciled.** File 03 starts building after a prep week; file 04 starts agent streams in week 1. Both reach an internal MVP in early November and a public launch on 11 Dec. I use 03's dates (MVP Fri 6 Nov) and move file 04's Gate 1 from 11 Nov to 6 Nov, so the two big cash items (the lawyer's full fee and the security test) are committed only after the market answers. Pilot terms also differed: 03 had a free pilot to 31 Jan 2027, 04 paid pilots by 11 Dec. I use free use until 11 Dec, then the founding price, because a free pilot proves nothing about price.

### Work streams for the MVP (weeks 2-3) ([03])

| Stream | Scope | Requirements | Agent-days |
|---|---|---|---|
| WS1 Calendar and obligations | Deadline engine, holidays, tasks, e-mail reminders, traffic light, receipts, RN logic, calendar feed | R68-R70, R72, R74 | 6-8 |
| WS2 Clients and KYC | Forms, versions, hashed documents, beneficial owners, PEP declaration, check regime, risk score v0, approvals | R34-R38, R41, R43-R47 | 8-10 |
| WS3 Screening | UN, OFAC, EU fetchers with diffs; FATF table; normaliser; matcher; hit review; re-screen; logs | R48-R50 | 6-8 |
| WS4 Deals and RO | Deal form, code validation, Excel export, copy sheet, JSON behind a switch, filing states | R53-R58 | 6-8 |
| WS5 Documents and approvals | Template engine; manual, code, CO act and notice pack; versions; approvals; acknowledgements | R11, R13, R26-R29, R31 | 6-8 |
| WS6 Onboarding, billing, public site | Wizard; Stripe checkout and webhooks; plan limits; Spanish landing, pricing and legal pages | R1-R3, R7, R9 | 5-7 |
| WS7 QA and security (continuous) | Playwright flows, cross-tenant tests, static analysis, dependency audit, review comments | R88-R90 | 5-8 |

- **Effort check:** 42-57 agent-days against about 70 stream-days of capacity over 10 working days ([03]).
- **Cut first if late:** the calendar feed, the JSON exporter and copy-sheet styling. Scope moves; the date does not.
- **Launch streams (weeks 4-6):** WS8 practice portal and audit pack; WS9 RUC import; WS10 alert register and confidential area; WS11 export and archive; WS12 client phone link; WS13 notices log and data-confirmation tasks; WS14 risk wizard ([03]).

### MVP definition of done (Fri 6 Nov 2026) ([03])

1. A test user sets up a firm in under 45 minutes on staging.
2. The calendar creates every obligation from Oct 2026 to Dec 2027 with the right dates, with unit tests for each rule.
3. Client files work for natural and legal persons; regime tests pass at 150 and 20 minimum wages on both sides of 1 July 2026; the PEP declaration generates; uploads store a hash.
4. UN, OFAC and EU lists load on schedule with versions; a seeded name produces a hit; decisions are logged; a list change triggers re-screening.
5. Deals hold every RO field; the validator rejects bad codes; **the Excel export matches the reference header order exactly**.
6. The manual covers every Annex I heading; code and CO act generate; approvals store hashes.
7. MFA is enforced; cross-tenant tests pass; the audit-log chain verifies; one backup has been restored.
8. Flows 1-4 pass end to end in CI, with no open priority-1 bugs.

**"Sellable" (Fri 11 Dec 2026)** adds: practice portal and audit pack, RUC autofill, alert register, full export, client phone link; written lawyer sign-off; a security test with no open high or critical findings; 5 or more active pilot firms, 2 with a complete file, and the RO export reviewed by an auditor; Stripe live; help pages for the January windows; DPIA, incident plan and sub-processor list published ([03]).

### Build budget to "sellable" (Oct-Dec 2026; US$; no salaries) ([03])

| Item | Low | Middle | High |
|---|---|---|---|
| Claude Code Max, 1-2 seats for 3 months (US$200 a seat a month, [Anthropic][claude]) | 600 | 1,200 | 1,200 |
| Claude API tests | 10 | 20 | 50 |
| Paraguayan AML lawyer: templates, terms, privacy notice, DPA (fixed fee; no published rates found) | 2,000 | 3,500 | 5,000 |
| Registered auditor as paid design partner | 0 | 500 | 1,000 |
| External security test and retest (small web-app tests run about US$5,000-15,000; quotes under US$2,000 are often just scans ([Blaze][pentest1]; [Redfox][pentest2])) | 3,000 | 5,000 | 8,000 |
| Hosting, 3 months ([Lightsail][lightsail]) | 150 | 200 | 300 |
| Domain, e-mail, monitoring, small tools | 50 | 100 | 200 |
| Spanish (Paraguay) copy-editing | 0 | 300 | 500 |
| Trip to Asunción (03 made it optional; 04 budgets it, see §8) | 0 | 0 | 2,500 |
| Contingency (10%) | 580 | 1,080 | 1,875 |
| **Total** | **about 6,400** | **about 11,900** | **about 20,600** |

- **Cash spent before Gate 1 (6 Nov):** about US$1,000 (Claude Code, accounts, a short paid lawyer outline review) (my estimate).
- **Year 1 after launch:** hosting about US$1,000-2,500; Claude Code US$2,400; lawyer retainer US$1,200-3,600; yearly security retest US$3,000-8,000; payment fees about 6% of revenue ([03]).
- Not included here: founder time, company costs (§9) and marketing (§8).

---

## 8. Go-to-market

### Pricing (reconciled)

The files proposed three price sets:
- the B2 re-assessment: about US$30 a month (US$360 a year) and US$100-150 a month for auditors ([B2][b2]);
- file 02: Gs 75,000 a month basic, Gs 180,000-250,000 a month full, US$100-150 a month for practices ([02]);
- file 04: the Gs list below ([04]).

**I use file 04's list.** It is in guaraníes, which Stripe can charge ([Stripe currencies][stripecur]) and buyers can compare with the canon. It sits inside file 02's range at the low end, which suits owner-run, price-sensitive firms and Pirani's free tier. **But test a higher main price in interviews** (Gs 149,000 against Gs 199,000 a month). File 04's model shows a 25% higher price adds about US$14,000 of year-3 profit ([04]).

All prices are net of Paraguayan VAT (IVA), billed by card; a yearly prepayment gets two months free ([04]).

| Plan | Who | Includes | Monthly | Yearly | About US$ a year |
|---|---|---|---|---|---|
| **Al día** (basic) | Small or inactive firms that want to stay off the warning list | Calendar for every SIRO duty with reminders; RO Excel file from a simple deal list; FA worksheet; receipt vault. 1 RUC, 1 user. Yearly only, because card fees eat small monthly charges ([03]) | — | Gs 490,000 | 86 |
| **Legajo listo** (main plan) | Agencies, brokers and developers that buy an audit or got a warning | Al día plus the client and deal register with thresholds, the client phone link, list checks with a log, the risk wizard, manual, code and CO documents, training log, alert register, the CI report generator (from Feb 2027), the audit export and the 5-year archive. 3 users | Gs 149,000 | Gs 1,490,000 | 261 |
| **Grupo** | Developers and groups | Legajo listo for up to 3 RUCs, 10 users, bulk import, priority support | — | Gs 2,990,000 | 525 |
| **Estudio** (practice) | Registered auditors, accountants, outsourced COs | Multi-client dashboard; free read-only access to subscribing clients; audit-sample tool; 3 managed clients included; more at Gs 99,000 a month each | Gs 290,000 base | Gs 2,900,000 base | 509 base |
| **Automotores** (from about April 2027) | Car dealers (Res 196/2020) | Legajo listo with the 15-minimum-wage single-payment threshold, the trade-in rule and a mobile KYC link | Gs 99,000 | Gs 990,000 | 174 |

**Anchors** ([04]): canon about Gs 329,000 (US$58) a year; courses Gs 150,000-800,000; list search from US$10; minimum wage Gs 3,044,000 a month ([Decreto 6225/2026][d6225]). Legajo listo is about 4.5 times the canon and a few days of a bookkeeping assistant's pay a year ([Cazvid][cazvid]).

**Add-ons, delivered by partners who keep 70%:** assisted setup Gs 900,000; pre-audit review Gs 1,500,000; PEP data beyond fair use at cost plus margin (my estimates in [04]).

**Launch offers:** 50% off year 1 for the first 15 firms; founding customers keep their price for two years; ACIP members get 15% off ([04]).

**Price-page wording (Spanish), from [04]:** "Precios en guaraníes, sin IVA. Si su empresa es contribuyente del IRE general, puede corresponderle retener IVA e INR al pagar a un proveedor del exterior. Si necesita factura electrónica local, compre a través de un socio."

### Channels, in priority order ([04])

1. **Registered external auditors** (about 140 practices). Every compliant firm must buy their yearly report, and messy files cost them time. Offer the Estudio plan, a referral fee of 20% of year 1 and 10% of renewals, or a reseller margin of 30%. Start with 5-8 mid-size practices with many real-estate clients, such as Cáceres & Schneider, which already markets the SEPRELAD report ([Cáceres & Schneider][cs]).
2. **Direct outreach from the public SEPRELAD register** (2,233 real-estate and 1,719 car-dealer rows with name, RUC, sector and department ([lookup][lookup])). Contact companies first (RUCs starting "80"), by WhatsApp and e-mail, with a free "SEPRELAD traffic-light" self-check. Get legal advice before using the 474 individuals on the list ([04]).
3. **Accountants and trainers.** "Course plus 3 months of the tool" bundles with Gestión Contable or Best Practices; the Colegio de Contadores runs training events ([Gestión Contable][gc]; [Best Practices][bp]; [Última Hora][contadores]).
4. **ACIP** (about 90 agencies, 1,000+ agents). An endorsement, a member discount and a shared code of ethics, which Res 201/2020 lets associations adopt ([Infonegocios][acip25]; [Ferrere][ferr201en]).
5. **Deadline content and ads:** a free calendar file, a threshold calculator at the current minimum wage, an RO file checker, short Spanish videos. Ads only in the four weeks before each big deadline.
6. **Car-dealer groups from month 7:** CIVU, Civemup, CADAM ([Última Hora][uh19]; [Ferrere on Res 196][ferr196]).
7. **Events:** Expo Internacional de Inversiones Inmobiliarias, Ciudad del Este, 22-23 Oct 2026 ([Infonegocios][expocde]); Expo Real Estate Paraguay in June ([Infonegocios][expore]); Agent Day on 12 August.

**Not a channel: SEPRELAD.** Its staff may not recommend advisers ([Circular 2/2025][c2]).

**Sales motion** ([04]): a 14-day free trial with no card; a 20-minute WhatsApp onboarding call by a local part-time contractor (about Gs 4m, or US$700, a month from month 3, invoicing as a contractor); then a yearly card payment. Auditor-led sales go through a partner link. The cycle is 1-3 weeks for an owner-run firm and 1-2 months for a practice (my estimate in [04]).

### Selling calendar ([04]; dates from [Circular 2/2025][c2], [Res 326/2022][r326], [Res 003/2025][r003])

| Period | What firms face | Our action |
|---|---|---|
| Oct 2026 | Forced SIRO data update from 5 Oct; RO window 11-20 Oct | Free data-update guide; RO spike; interviews |
| Nov-Dec 2026 | Quiet; holidays 8 and 25 Dec | Pilots; launch 11 Dec "listo para enero" |
| January | RN days 1-10; RO days 11-20 | Support; first conversions; webinar with an auditor |
| Feb-Mar | **CI due 30 March** | Auditor partner drive before fieldwork; CI generator; ads at peak |
| Apr-May | RO in April; **FA due 31 May**; SEPRELAD FA webinars | FA worksheet campaign; car-dealer beta |
| June | **AE, canon and exemption request due 30 June** | Audit-pack and exemption campaign; Expo Real Estate |
| Jul-Sep | RO in July; Agent Day 12 Aug | Launch Automotores; ACIP offer; case studies |
| Sep-Dec | RO in October; yearly data confirmation; renewals | Renewal campaign; 2-yearly risk review hook |

New-sales weights by month in the model: Jan 1.3, Feb 0.9, Mar 1.4, Apr 1.1, May 1.4, Jun 1.3, Jul 0.9, Aug 0.7, Sep 0.7, Oct 1.0, Nov 0.8, Dec 0.5 ([04]).

### Marketing budget, year 1 (Oct 2026 - Sep 2027; my estimates in [04])

| Line | US$ |
|---|---|
| Google search ads (deadline keywords) | 1,800 |
| Meta ads (Asunción, Central, Alto Paraná) | 2,400 |
| LinkedIn (auditors, accountants) | 600 |
| Events and sponsorships | 2,500 |
| Webinars and co-marketing with trainers | 1,000 |
| Video and design (AI-assisted) | 800 |
| WhatsApp Business and e-mail tools | 400 |
| Printed one-pagers | 300 |
| Contingency | 200 |
| **Marketing total** | **10,000** |
| Travel (two trips) | 3,600 |
| Local contractor (10 months × US$700) | 7,000 |
| Partner commissions | about 8% of new bookings |

Years 2 and 3: about US$9,000 each for marketing ([04]).

### First 90 days (day 1 = Mon 12 Oct 2026)

| Dates | Product | Market and sales | Company, legal, payments |
|---|---|---|---|
| 12-18 Oct | Spec pack; accounts; **RO spike in the live window** | Book 20 interviews (12 agencies or developers, 2 dealers, 6 auditors) from the register and auditor exports; landing page with a free 2027 SEPRELAD calendar | Stripe on the founder's company with PYG prices; brief 2-3 AML lawyers; send the tax adviser 5 questions |
| 19-25 Oct | Foundation | Remote interviews; ask auditors their fees; optional Ciudad del Este expo (22-23 Oct) | Lawyer outline review (small fixed fee) |
| 26 Oct - 6 Nov | Seven agent streams; **MVP Fri 6 Nov** | Founding offer; collect letters of intent | Draft terms and DPA |
| **Fri 6 Nov: Gate 1** | | ≥10 of 20 would pay Gs 100,000+ a month; ≥3 auditors will pilot; ≥5 letters of intent | Then commit the lawyer's full fee and book the security test |
| 9-27 Nov | Launch scope; security test 23-27 Nov | **Two-week trip to Asunción (9-22 Nov):** onboard 10-15 pilots through 2-3 auditors; hire the contractor; meet ACIP and a trainer | Lawyer reviews templates |
| 30 Nov - 11 Dec | Security fixes and retest; Stripe Billing live; help pages | 5 short videos; "RN y RO en enero" guide; partner agreements | Final terms, DPA, DPIA |
| **Fri 11 Dec: Gate 2, public launch** | | ≥8 paying pilots | |
| 12 Dec - 3 Jan | Support only | Campaign to register companies in Asunción and Central: "RN due 10 January, RO 11-20 January"; auditor webinar; small Meta test | Bookkeeping of the foreign company |
| 4-9 Jan 2027 | Help pilots with the RN | Measure use and renewal intent | |
| **Sat 9 Jan 2027: Gate 3** | | ≥10 paying firms and 2 active partner practices | Decide the CI-season spend |

---

## 9. Payments, company and legal

### Payments: Stripe on the founder's company abroad, priced in guaraníes ([04])

- **Stripe charges in PYG** (zero-decimal; American Express not supported in PYG) ([Stripe currencies][stripecur]).
- **All-in cost about 6% on a yearly plan.** Stripe Ireland: 3.15% + €0.25 for a non-domestic card, +2% currency conversion, +0.7% Stripe Billing. About US$15.6 on a Gs 1.49m charge; about 6.9% on a Gs 149,000 monthly charge. A US company is about the same ([Stripe IE][stripeie]; [Stripe US][stripeus]; my calculation in [04]).
- **Why not Paddle, although the owner prefers a merchant of record.**
  - Paddle sells to Paraguay but only in US dollars, with tax mode "external" ([Paddle countries][paddlec]).
  - Paraguay is not on Paddle's list of countries where it charges VAT ([Paddle tax list][paddlet]).
  - Its fee is about the same: 5% + US$0.50 ([Paddle pricing][paddlep]).
  - So a merchant of record buys nothing here. The sales are business-to-business, and Paraguayan buyers account for the tax themselves (below). File 03 designed billing on Paddle; **I switch it to Stripe Billing.** Paddle remains a fallback if the founder's company already uses it, with US$ prices.
- **Cards are a minority of online payments in Paraguay.** dLocal gives credit cards 16% and debit cards 7%, against cash 28% and bank transfer 19% (undated) ([dLocal][dlocal]). Most small companies have a credit card (my estimate in [04]). For the rest:
  - **Local reseller route:** a partner audit or accounting firm buys seats at 30% off, invoices in Gs with 10% IVA on a local e-invoice, collects locally and wires us monthly or quarterly ([04]).
  - **Wires direct** only above about US$500, because Itaú Paraguay charges US$33 plus a US$22 SWIFT fee to send ([Wise][wise]).
  - **Later:** dLocal (Bancard QR, wallets, cash networks) ([dLocal][dlocal]).
- **Test in the pilot:** whether small-company and debit cards work with a foreign Stripe account in PYG ([04]).

### Buyer-side tax ([04])

| Buyer | IVA 10% | Non-resident income tax (INR) | What we do |
|---|---|---|---|
| Company under the general IRE regime (most S.A. and EAS agencies) | Self-accounts the IVA and credits it, so it nets to zero ([DNIT criterion][dnitcrit]; [EY][ey]) | Must withhold 15% on a deemed 30% = **4.5%** of the net price on digital services from abroad ([Decreto 6515/2021, art. 7 and 9][d6515]) | Accept 95.5% when a buyer withholds; publish a one-page guide for their accountant |
| Small company or sole trader (IRE SIMPLE, RESIMPLE) | Unclear (unverified) | The decree names only general-regime buyers as withholding agents ([Decreto 6515/2021][d6515]) | Probably no withholding (unverified) |
| Final consumer | Banks collect IVA on listed foreign digital services ([Ferrere][ferrdig]) | Foreign B2C sellers must register under RG 109/2021 ([abogados.com.ar][rg109]) | Not our market. Terms say "business customers only"; collect each buyer's RUC |

- **No Paraguayan tax registration was found for a foreign B2B software seller** ([rg109]; [04]). Grey zone: about 21% of real-estate rows are individuals; if a sole trader counted as a final consumer, RG 109/2021 could apply (unverified).
- **Tax treaties** exist with Chile, Uruguay, Spain, Taiwan, Qatar and the UAE. A Spanish company might reduce the 4.5% (unverified; [DNIT on Spain][dnitesp]). For a US, UK or most EU companies it stands.

### Company: no local company in year 1

**Verdict:** sell from the founder's existing foreign company. Open a Paraguayan company only if one of these happens ([04]):
1. More than a quarter of qualified buyers refuse to pay without a local e-invoice, and no partner will resell.
2. ARR passes about US$60,000 and local invoicing would clearly lift sales.
3. Local staff must be employed rather than contracted.
4. Local payment methods are needed without dLocal.

**The main obstacle is the legal representative.** For an EAS, S.A. or S.R.L., the tax office asks for the representative's Paraguayan identity card or passport, and a foreign representative must attach a Paraguayan cédula ([DNIT RG 34/25, Annex 1][rg34]). So the founder needs residency, or must hire a resident representative.

| Route | One-off cost | Time | Notes |
|---|---|---|---|
| **EAS formed in person by the founder** | Official SUACE fees "close to zero" on the standard bylaws; no minimum capital ([Golden Harbors][gh], secondary; unverified). **Plus** founder residency: a filing fee of about US$350 (unverified), apostilled and sworn-translated documents | About 72 hours to form, 1-2 weeks for RUC and bank; residency up to 3 months ([Infonegocios][resid]; [LibertyMundo][lm], secondary) | Res DNM 407/2026 changed the proof-of-means rules from 6 July 2026 ([LibertyMundo][lm]) |
| **EAS formed remotely with a lawyer** | About US$1,500-4,000 all-in with light support for bank, e-invoicing and accounting setup ([Golden Harbors][gh], secondary; unverified) | Same | Needs a resident representative at about US$100-300 a month (my estimate in [04], unverified). A foreign shareholder company's documents need a sworn translation ([RG 34/25][rg34]) |
| S.A. instead of EAS | About US$4,000-8,000 plus government charges ([Golden Harbors][gh]; unverified) | 3-4 weeks | Notarial deed, registry, newspaper notice. Not needed |

**Ongoing costs of a local EAS** ([04]):
- Corporate income tax (IRE) 10%, or IRE SIMPLE below Gs 2bn of prior-year income; 15% tax (IDU) on dividends to a non-resident owner; IVA 10% on sales ([Golden Harbors][gh], secondary).
- Electronic invoicing through SIFEN, already used by more than 50,000 taxpayers ([DNIT][ekuatia]).
- An outside accountant about Gs 1.0-2.5m a month, or US$175-440 (my estimate in [04]).
- **Total about US$4,000-7,000 a year** with a resident representative. The financial model shows it only as a variant from month 18.

**The founder's foreign company:** about US$100 a month of extra running cost is charged to this business in the model (my estimate in [04]).

### Legal documents ([03]; [04])

- **Terms of service** (Spanish, click-through, business customers only): a tool, not advice, not the CO and not the filer; liability capped at 12 months of fees; no liability for SEPRELAD sanctions; templates updated within 30 days of a new resolution; governing law of the founder's company, Spanish text binding (a Paraguayan lawyer should confirm).
- **Records survive cancellation.** A full export, plus a free read-only archive for 5 years. File 03 suggested a cheap paid archive and file 04 a free one. I choose free: storage is cents per firm a month (my estimate from [03]'s storage figures), and it removes a buying objection.
- **Data-processing agreement** from day 1, with the sub-processor list and hosting location; review it when the Ley 7593/2025 decree appears.
- **Partner contracts:** referral (20% then 10%), reseller (30% off; partner invoices and handles INR), data partner (licence, update frequency, liability for wrong matches).
- **Insurance:** technology errors-and-omissions plus cyber, about US$1,000-2,500 a year (my estimate in [04], unverified).
- **Disclaimers:** no SEPRELAD endorsement; our help content is not CECAD-certified training ([Res 174/2023][r174]).

---

## 10. Financials

### Which model I use, and why

- **I use file 04's 36-month model**, with one adjustment of my own (below). It is the only one that runs month by month with churn, seasonality, billing mix, payment fees and the buyers' 4.5% tax withholding ([04]).
- **The other figures and why I set them aside:**
  - The B2 re-assessment: about US$110,000-135,000 a year by year 3. It used 15% of real-estate payers at US$360 a year, at Gs 7,300 = US$1 ([B2][b2]).
  - File 02: about US$90,000-180,000. It is a static 15-30% share at about US$260 a year, with no churn ([02]).
  - File 04 base: 259 firms, 11% of the 2,300 payers, at a blended US$210-245 a year, after churn ([04]). It is lower because both its share and its price are lower. I think it is the honest planning case.
  - File 03 says the business "covers its costs at about 50-60 firms on full plans". That counts only hosting, tools, the lawyer retainer and the security retest ([03]). File 04 adds marketing, travel and the local contractor, so it breaks even much later. I use 04.
- **My adjustment.** File 03 prices the pre-launch security test and retest at US$3,000-8,000 (middle US$5,000) and the yearly retest at US$3,000-8,000. File 04 used US$2,500 and US$2,000 ([03]; [04]). I add US$2,500 in month 2, US$300 for a second Claude Code seat during the build, and US$1,000 in months 14 and 26. That is US$3,800 by month 15 and US$4,800 over 3 years. Each year-3 profit falls by about US$1,000.
- **Rate:** Gs 5,700 = US$1 ([BCP][bcp]). Prices stay in guaraníes; costs are mostly in dollars.

### Low, base and high (no founder pay)

| Measure | Low | **Base** | High |
|---|---|---|---|
| New paying firms, years 1 / 2 / 3 | 45 / 50 / 45 | **110 / 120 / 110** | 200 / 220 / 200 |
| Active firms at month 6 / 12 / 24 / 36 | 19 / 45 / 75 / 91 | **46 / 110 / 197 / 259** | 82 / 200 / 380 / 520 |
| Audit practices on the Estudio plan, month 36 | 4 | **12** | 22 |
| Share of the 2,300 payers at month 36 | 4% | **11%** | 23% |
| First renewal / later renewals | 55% / 75% | **70% / 85%** | 80% / 90% |
| ARR at month 12 / 24 / 36 (US$) | 8,400 / 14,900 / 20,000 | **25,400 / 50,400 / 71,100** | 52,500 / 112,500 / 168,500 |
| ARR at month 36 in Gs | about 114m | **about 405m** | about 961m |
| Cash in, years 1 / 2 / 3 (US$) | 6,900 / 14,700 / 20,200 | **20,500 / 48,400 / 70,900** | 42,500 / 107,000 / 166,400 |
| Costs, years 1 / 2 / 3, adjusted (US$) | 33,300 / 31,200 / 35,400 | **41,000 / 47,100 / 57,900** | 52,500 / 72,000 / 94,600 |
| **Year-3 profit before founder pay (US$)** | **about -15,200** | **about 13,100** | **about 71,800** |
| Trailing-12-month break-even | not within 36 months | about month 22-23 (mid-2028) | about month 14 (Nov 2027) |
| **Peak cash need (US$)** | about 58,000 if run to month 36; about 19,000 if stopped at the month-6 gate | **about 28,000 (month 15)** | about 17,000 (month 3) |
| Cumulative cash at month 36 (US$) | about -58,000 | **about -6,000** | about +97,000 |
| Peak cash need with founder pay of US$2,000 a month in year 2 and US$3,000 in year 3 | about 118,000 | **about 66,000** | about 17,000-20,000 |

Source: [04]'s scenario tables, plus my adjustment above. Costs in year 1 include the build budget (§7), marketing (§8), travel, the contractor, the lawyer, insurance and the foreign company's share of running costs.

**Cash to set aside: about US$38,000.** That is the base peak plus about US$10,000 for a slow year or a weaker guaraní. File 04 suggested US$35,000 before my adjustment ([04]).

### Base case by quarter (US$; from [04], my adjustment in the cumulative column)

| Quarter | Active firms (end) | Practices | Cash in | ARR (end) | Net | Cumulative, adjusted |
|---|---|---|---|---|---|---|
| Q1 Oct-Dec 2026 | 8 | 0 | 594 | 842 | -13,367 | about -16,200 |
| Q2 Jan-Mar 2027 | 46 | 3 | 6,055 | 10,643 | -1,223 | about -17,400 |
| Q3 Apr-Jun 2027 | 86 | 4 | 7,532 | 19,666 | -1,948 | about -19,300 |
| Q4 Jul-Sep 2027 | 110 | 5 | 6,327 | 25,368 | -1,167 | about -20,500 |
| Q5 Oct-Dec 2027 | 131 | 6 | 7,971 | 31,660 | -6,578 | about -28,100 (the peak) |
| Q6 Jan-Mar 2028 | 155 | 7 | 13,521 | 38,555 | 3,590 | about -24,500 |
| Q8 Jul-Sep 2028 | 197 | 9 | 11,977 | 50,425 | 2,295 | about -19,200 |
| Q12 Jul-Sep 2029 | 259 | 12 | 16,785 | 71,051 | 4,493 | about -6,100 |

- **Every October-December quarter loses money.** It carries the security retest, insurance and a trip, and few firms buy before the January deadlines ([04]).
- **The low case shows itself early.** By month 6 (March 2027) it has about 19 firms against about 46 in the base. That is the main kill gate (§13).

### Unit economics, base case ([04], my estimates)

| Measure | Value |
|---|---|
| Revenue per paying firm | about US$210-245 a year (Gs 1.2m in year 1, rising to Gs 1.4m) |
| Blended acquisition cost, year 1 | about US$155, plus about US$20 of partner commission |
| Payback | about 9-12 months |
| Gross margin after payment fees, hosting and data | about 85% |
| Average life | about 4 years |
| Lifetime value | about US$750-800 |
| Lifetime value / acquisition cost | about 4 |

**The unit economics are fine. The limits are the price level and the market size.**

### What moves the base case ([04]'s sensitivity; subtract about US$1,000 from each year-3 profit for my adjustment)

| Change | ARR, month 36 | Year-3 profit | Peak cash need |
|---|---|---|---|
| Base (04's own figures) | US$71,100 | US$14,100 | US$24,300 |
| Guaraní back to Gs 7,000 = US$1 | US$57,900 | US$2,500 | US$32,500 |
| **Prices 25% higher, same volumes** | US$87,000 | **US$27,900** | US$18,900 |
| Everyone prepays yearly | US$71,100 | US$14,200 | US$21,100 |
| No local contractor in year 1 | US$71,100 | US$14,100 | US$17,300 |
| First renewal 60% instead of 70% | US$65,800 | US$9,600 | US$24,400 |

**What this means.**
- **Price is the biggest lever I control.** That is why §8 tests Gs 199,000 against Gs 149,000 a month in the interviews.
- **The currency is the biggest lever I do not control.** The guaraní moved from above Gs 8,000 per dollar in April 2025 to Gs 5,694 in October 2026 ([ABC Color][abc]; [BCP][bcp]). Most costs are in dollars.
- **Paraguay alone does not pay a founder.** The base case makes about US$13,000 a year before founder pay in year 3. Only the high case (23% of the pool) gives a modest income of about US$70,000 a year.
- **Delaying the contractor until after Gate 3 saves about US$7,000 of peak cash** ([04]). I keep the contractor from December, but only if Gate 2 passes (§13).

### Exit value ([04], my estimates)

- Small SaaS businesses under about US$500,000 ARR usually sell on a multiple of owner profit: about 2-3 times under US$100,000 ARR and 2.5-4.5 times above it ([Livmo][livmo], a broker). One analysis of 651 Acquire.com listings gives a median of 3.9 times profit ([BigIdeasDB][bigideas]).
- **Base at month 36:** about US$40,000-60,000 on profit. A strategic buyer paying about 2 times revenue would pay about US$140,000.
- **High at month 36:** about US$250,000-400,000.
- **Likely buyers:** Devsys (Cumplo360), which lacks the SEPRELAD filings layer; Pirani; Criterion S.A.; or a mid-size Paraguayan audit firm ([Devsys][devsys]; [Pirani SEPRELAD page][piranis]; [04]).

---

## 11. Regional expansion

The engine carries over to every market: the client and deal register, the KYC thresholds as dated data, list checks with a log, the deadline calendar, document templates and the auditor export. Each new market needs its own legal mapping, report formats, list sources and templates ([02]; [04]).

| Order | Market | Size | What changes | Timing | Verdict |
|---|---|---|---|---|---|
| 1 | **Paraguay car dealers** (Res 196/2020) | 1,719 registered, **845 paid the 2025 canon**; 160 audit reports in 2025 ([02], from the [statistics portal][stats]) | Single-payment threshold of 15 minimum wages instead of 150; trade-in rule; a phone KYC link, because 62% are individuals and buyers refused paper forms in 2019 ([01]; [Última Hora][uh19]) | Beta April 2027, plan "Automotores" live July 2027 at Gs 990,000 a year | **Do it.** Same supervisor, same SIRO, about 2-4 weeks of agent work (my estimate) |
| 2 | **Paraguay small subjects:** jewellers, pawn shops, remitters, virtual-asset firms, art dealers | About 190 canon payers ([02]) | A configuration pack per sector rulebook (R95 in [01req]) | 2028, only on demand | Small. Add when a customer asks |
| 3 | **Ecuador** | At end-2025 the UAFE supervised **4,446 real-estate and construction firms, 542 car dealers and 528 jewellers**. It sent 946 non-compliance notices to real estate and fined 136 subjects US$341,670 in total in 2025 ([UAFE 2025 report][uafe]) | A prevention system and reports in the UAFE's format (Res UAFE-DG-2021-0362) ([Andersen Ecuador][andersen]). Since Sep 2025 obliged subjects must register with the UAFE within 30 working days or risk RUC suspension ([El Diario][eldiario]). 15% IVA on imported digital services; card issuers withhold it if the provider is not registered ([NMS Law][nms]) | Prepare from month 15; launch about months 20-24 (mid-2028) | **Best second market.** About twice Paraguay's real-estate base, a US-dollar economy and real fines. Local competitors not checked (unverified). Could add 1.5-2 times Paraguay's ARR within 2-3 years (my estimate in [04]) |
| 4 | Paraguay notaries | 1,406 registered, 1,144 payers; 5,140 ROs in 2025 ([02]) | Supervised by the Supreme Court, with another rulebook ([Memoria 2024][mem]) | Not before 2028 | Open question. Check the rulebook before spending time |
| 5 | Peru | Construction and real-estate firms are obliged subjects of the UIF-Perú; count not found ([SBS][sbs]) | New rulebook and formats | Year 3 or later, only if Ecuador works | Maybe |
| - | Paraguay non-profits | 3,435 registered, 1,919 payers ([02]) | Other rulebook; low ability to pay | - | Skip for now |
| - | Uruguay | About 13,677 non-financial subjects (unverified) | Already served by HADA, Devsys and Precodata ([HADA][hada]; [Devsys][devsys]) | - | **Skip.** Crowded |
| - | Bolivia | Only large-taxpayer real-estate firms are covered ([Ferrere on Bolivia][ferrbo]) | - | - | **Skip** |
| - | Argentina | Large; brokers obliged under UIF Res 43/2024 ([ADEBA][adeba]) | Price-sensitive; local vendors likely (unverified) | - | Later, maybe never |
| - | Brazil | Large | Portuguese; another regulator | - | Out of scope |

**Reconciled timing.** File 03 put the car-dealer pack in June-September 2027 and file 04 in months 7-9 (April-June 2027) ([03]; [04]). I use a beta in April, when dealer interviews run, and a paid launch in July, after the CI, FA and AE releases have shipped.

**Honest view.** Ecuador is what turns this from a side business into a living, but it is a second build and a second sales effort run from abroad. Decide on it in September 2027 (§13), only if Paraguay is on the base path.
