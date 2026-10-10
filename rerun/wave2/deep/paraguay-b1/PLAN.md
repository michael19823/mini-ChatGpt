# Paraguay: AML compliance kit for vehicle importers, dealers and used-car lots (SEPRELAD Res 196/2020) — full plan

Combined plan from four deep-research parts (written 10 Oct 2026):

- [01 Law and product requirements](01-law-and-requirements.md): Res 196/2020 read in full, Ley 1015/97, the SIRO filing channels, enforcement, and **118 testable requirements**, each traced to an article.
- [02 Market and competition](02-market-and-competition.md): buyer counts from SEPRELAD's own register export and statistics portal, prices people pay today, competitors, channels and regional markets.
- [03 Product and technical design](03-product-and-tech.md): users, features, flows, screens, SIRO formats, data feeds, architecture, security, the AI-agent build plan and budget.
- [04 Go-to-market, company and finance](04-gtm-company-finance.md): pricing, channels, the 90-day launch, payments and tax, company setup, a 36-month model, kill criteria and exit.

Earlier work: [the B1 report and its re-assessment](../reports/paraguay-b1.md). Sibling plan on the same regulator and the same engine: [B2 real-estate PLAN](../paraguay-b2/PLAN.md).

**How to read this page.**
- Every fact carries a link. Most links are reference-style and are listed under Sources at the bottom.
- "My estimate" marks a number I derived. "(unverified)" marks a claim none of the files could confirm.
- [01] to [04] point to the section file where the detail and its full source list sit.
- Money: **Gs 5,700 = US$1**. The Central Bank reference rate was Gs 5,694 on 9 Oct 2026 ([BCP][bcp], via [04]). Files 02 and 03 used about Gs 6,000.

---

## 1. Decision in one page

**Verdict: go, but only as the "Automotores" module of one shared SEPRELAD engine (with the B2 real-estate product). Do not build it as a stand-alone product or company.**

**New score: 5 / 10** (re-assessment: 6/10; first pass: 5/10).
- As a stand-alone vehicle product it is about **4/10**: the base case barely breaks even in year 3 and is still about US$36,000 down at month 36 (§10).
- As the second vertical on the B2 engine it is a **cheap, sensible add-on**: about US$2,000-5,000 of extra build cash ([03]) and, in the base case, about US$21,000 a year of extra profit by year 3 ([04]).

**Why 5, not 6.**
- **The pain is real and is sharpest in this sector.** SEPRELAD warned **454 vehicle firms** in 2024 for missed filings ([Memoria 2024][mem24]). In 2025, **35 of its 76 on-site inspections** were vehicle firms, and its only "significant" money fine hit a vehicle firm ([Memoria 2025][mem25]). Reporting firms key about **86 operations a quarter** into SIRO, mostly one at a time (same source; my arithmetic in [02]).
- **Everything else that could be checked held up.** The duty is in force. The portal leaves the real work undone. No local product runs the whole job. The build is cheap. Selling from abroad works ([01]-[04]).
- **But the money is smaller than the re-assessment thought.** The price anchors are low: the SIRO fee is Gs 331,000 a year (about US$58) ([Res 56/2026][r56]). The main plan therefore sits at **Gs 990,000 a year (US$174)**, not US$300-480. The stand-alone base case reaches about **US$41,000 of yearly recurring revenue (ARR) at month 36**, not US$51,000 ([04]).
- **The headline feature is unproven.** The time-saving story rests on building the quarterly operations report (RO) from the dealer's sales list. SIRO takes bulk JSON files for real estate on request, but **no vehicle field list or JSON schema was found** ([SEPRELAD JSON notice][json]; [01]; [03]).
- **The auditor channel thins a little.** Since July 2026 small or inactive firms may ask SEPRELAD to waive or defer the yearly external audit ([Res 328/2026][r328], read in [04]).

### What the deep dive changed (compared with the re-assessment)

| Topic | Re-assessment said | Deep dive found | Effect |
|---|---|---|---|
| Law | Res 196 duties from law-firm summaries; most article numbers unverified | Res 196/2020 read in full. 34 duties and 118 testable requirements. Quarterly RO; yearly SIRO data confirmation ([Res 435/2026][r435]); audit waiver on request ([Res 328/2026][r328]) ([01]; [04]) | Stronger. The spec is ready |
| Buyers | About 450 active firms plus about 1,000 other registered | **1,719 on the register** (my count of the export, matched by the B2 dive); **845 paid the 2025 SIRO fee**; 453 filed ROs; 331 the Annual Form; 272 the internal-control report; 160 an audit report ([lookup][lookup]; [stats][stats]; [02]) | Core pool nearly double |
| Enforcement | 454 warned (2024); one sanction case; one fine (2025) | Same, plus 35 of 76 inspections in 2025 were vehicle firms. The B2 dive found the 2025 fine is under court appeal, and no fines in 2026 so far ([stats][stats], via [B2 PLAN][b2plan]) | Pain focused on vehicles; fines still rare |
| RO workload | About 344 operations a firm a year; bulk upload unknown | SIRO offers JSON bulk upload on request (real estate). After the switch, one-by-one entry closes. Vehicle schema not found ([json]; [03]) | Core value still to prove |
| Competition | No full product; SIRO; a PEP database | Devsys Cumplo360 serves Grupo Condor (Mercedes-Benz distributor). Pirani has a free plan. Freelancers sell static Word packs ([devsys]; [pirani]; [clasipar]) | Top end taken; small and mid firms open |
| Price | US$25-40 a month plus US$100-150 setup | Main plan Gs 99,000 a month or Gs 990,000 a year (US$174); blended US$193-237 a firm a year ([04]) | Lower |
| Revenue, year 3 | About US$51,000 (vehicles); about US$100,000 with real estate | Stand-alone base ARR US$41,400 at month 36; high US$90,700 ([04]) | **Weaker** |
| Payments | Not studied | Stripe in guaraníes (PYG) from a foreign company, about 6% all-in; buyers' 4.5% non-resident tax withholding is a friction ([stripecur]; [d6515]; [04]) | Workable |
| Local company | Not studied | Not needed in year 1. A local company needs a legal representative with a Paraguayan identity card ([RG 34/25][rg34], via [04]) | Simpler |
| Build | "Medium" | MVP Fri 6 Nov 2026, sellable by 10 Dec 2026, about US$12,000 cash stand-alone; about US$2,000-5,000 as an add-on to B2 ([03]) | Cheap |

### The owner's criteria, applied

- **The free portal is not a reason to reject.** SIRO only receives filings. It does not prepare the RO data, keep client files, log list checks, hold the manual or training records, or remind anyone ([Memoria 2025][mem25]; [01]). That is the product.
- **A small market is fine if the product is easy and priced right.** About 845 paying firms is enough for a product this easy to build. But the price ceiling is low, so alone it stays a side income ([02]; [04]).
- **Incumbents are partial.** Devsys is bank-grade and sits at the top end. Pirani is a generic risk tool. Freelancers sell static documents. Nobody prepares SIRO filings ([02]).
- **Build with AI agents.** MVP in about 3.5 weeks from today, sellable in about 8.5 weeks, no hired developers ([03]).
- **Sell from abroad.** Stripe can charge in PYG. No local company is needed in year 1 ([04]).

### What it is worth

File 04's model, adjusted by me for file 03's higher security-test cost (US$5,000 at launch and about US$5,000 a year, instead of US$2,500 and US$2,000). No founder pay.

| Case | Paying vehicle firms, month 12 / 36 | ARR at month 36 | **Stand-alone:** year-3 profit / peak cash need | **As a module on the B2 engine:** year-3 contribution / peak cash need |
|---|---|---|---|---|
| Low | 20 / 47 | about US$11,600 | about -US$18,000 / stopped at the month-6 gate after about US$19,500 | about -US$900 / about US$10,600 |
| **Base** | **50 / 140** | **about US$41,400 (Gs 236m)** | **about -US$1,200 / about US$42,000** | **about +US$21,300 / about US$3,400** |
| High | 90 / 263 | about US$90,700 | about +US$19,800 / about US$31,000 | about +US$56,000 / about US$3,000 |

- The module column assumes vehicle sales start in December 2026 with their own sales effort ([04]). If Automotores launches in July 2027 instead (the B2 timetable), the year-3 contribution is roughly halved (my estimate).
- **Do not add this to the B2 model.** B2's base case already counts car dealers in its pool of about 2,300 payers from about month 7 ([B2 PLAN][b2plan]).
- With founder pay (US$2,000 then US$3,000 a month), the stand-alone base case needs about US$87,000-96,000 of cash and does not pay it back in 3 years ([04]).

### Key conditions

1. **The vehicle RO can be built from a sales list and accepted by SIRO.** Capture the real SIRO screens in the live window that closes on **20 Oct 2026**, and get the JSON schema ([03]).
2. **Lots will pay.** At least 6 of 12 vehicle firms say they would pay Gs 99,000 a month ([04]).
3. **Auditors carry it.** At least 2 registered auditors with vehicle clients agree to pilot ([04]).
4. **Firms have volume.** At least half of interviewed firms report more than 30 operations a quarter ([04]).
5. **The B2 engine goes ahead.** If B2 stops, this idea alone does not justify the build.

### Do this first (12 Oct to 6 Nov 2026, under US$1,000 cash)

1. **This week:** sit with 1-2 vehicle compliance officers while they key their Q3 RO in SIRO (window 11-20 Oct). Record every field. Ask SEPRELAD for the vehicle JSON schema ([03]).
2. **Add 12 vehicle firms and the vehicle-client auditors to the B2 interview round.** Test Gs 99,000 against Gs 149,000 a month ([04]; [B2 PLAN][b2plan]).
3. **Put the vehicle tables (stock, operations, trade-ins, imports) into the shared data model from day 1,** so the module costs little later ([03]).
4. **Decide the timing at Gate 1 (Fri 6 Nov)** with the rule in §7.

### Where the four files disagree, and what I use

| Topic | What the files say | I use | Why (and where) |
|---|---|---|---|
| Exchange rate | [02], [03]: about Gs 6,000 = US$1. [04]: Gs 5,694 ([BCP][bcp]) | Gs 5,700 | The current official rate |
| Buyers | Re-assessment: about 450 active plus 1,000. [02]: 1,719 registered, 845 paying the fee. [04]: 845 + 875 non-payers + 200 new a year | **845 paying firms** as the core | Paying the canon shows a firm is active and inside SIRO (§3) |
| Main price | Re-assessment: US$25-40 a month. [02]: Gs 90,000-150,000 a month for a lot; Gs 180,000-300,000 for a company that buys an audit. [03]: about US$25 average. [04]: Gs 99,000 (Playa), blended US$193-237 a year | [04]'s price list; **test Gs 149,000** in interviews | 62% of firms are individuals; a 25% higher price adds about US$8,100 of year-3 profit ([04]) (§8) |
| Year-3 revenue | Re-assessment: US$51,000. [02]: US$54,000-88,000 (top-down). [04]: base ARR US$41,400, high US$90,700 | [04] | The only month-by-month model with churn and seasonality. [02]'s range sits between [04]'s base and high (§10) |
| Security test | [03]: US$3,000-8,000 (middle US$5,000); yearly retest US$3,000-8,000. [04]: US$2,500, then US$2,000 | [03]'s middle | Quotes under about US$2,000 are often scans ([Blaze][pentest1]) (§7, §10) |
| Break-even | [03]: covers its tech costs at 30-55 firms. [04]: month 34, about 135 firms | [04] | [03] leaves out marketing, travel, contractor, insurance and tax (§10) |
| Card processor | [03]: Paddle. [04]: Stripe in PYG | **Stripe** | Paddle sells to Paraguay only in US$ and collects no Paraguayan tax ([Paddle tax][paddletax], via [04]) (§9) |
| Dates | [03]: MVP Fri 6 Nov, sellable Fri 11 Dec. [04]: MVP about 1 Nov, Gate 1 Tue 10 Nov, launch Thu 10 Dec. B2 PLAN: Gate 1 Fri 6 Nov | MVP and **Gate 1 on Fri 6 Nov**; **launch Thu 10 Dec** | [03]'s calendar keeps a prep week for the RO capture. Gate 1 matches B2, so the two verticals are judged together (§7) |
| Pilot terms | [03]: free until 31 Jan 2027. [04]: paid pilots at 50% off by 10 Dec | Free until 10 Dec, then the 50% founding price | A free pilot proves nothing about price (§8) |
| Launch features | [04]'s Playa plan lists the buyer KYC link, PEP checks and the CI report draft. [03] builds them in Jan-Feb 2027 or later | [03]'s order | The MVP must ship in 3 weeks. Price page says "desde febrero 2027" for v1 features (§5) |
| PEP data | [04]: PEP checks "with fair use". [03]: no official PEP list; signed declaration first, paid database later | [03] | OpenSanctions shows only 219 Paraguay-linked PEPs ([OpenSanctions][os]) (§6) |
| Res 328/2026 | [01]: text unread (unverified). [04]: read the scan; audit waiver or deferral on request | [04] | Primary text read ([Res 328/2026][r328]). Add an "audit-waiver request pack" requirement to [01]'s list (§2) |
| Outsourcing | [01] (via [Vouga][c02v]): outside advisers may prepare *and submit* reports. The B2 dive read the primary [Circular 2/2025][c02]: it bars SEPRELAD *officials* from selling or recommending such services | Outside help is clearly expected; a right for advisers to submit filings is (unverified) | The product never files; a partner who files does so under its own responsibility (§9) |
| Archive after cancelling | [03]: cheap "archive only" plan. [04]: free read-only for 5 years | Free | Storage costs cents a firm; it removes an objection (§9) |
| RO frequency | All files: quarterly (11th-20th). [01] notes SEPRELAD's 2025 report still shows half-year vehicle statistics | Quarterly; confirm in the live window | Circular 2/2025 and SEPRELAD's Sep 2026 "Reporte Trimestral" training ([01]) |
| Vehicle timing in the shared engine | [03]: both can ship on 11 Dec if the RO is captured, at the edge of one founder's capacity. [04]: lead with whichever vertical passes Gate 1 better. B2 PLAN: beta April, launch July 2027 | A decision rule at Gate 1 | See §7 |

---

## 2. Why now: the law and enforcement

### Who is obliged

- **Anyone who commercially imports, buys, sells or takes on consignment motor vehicles,** person or company ([Res 196/2020, art. 1][r196]). That covers new-car distributors, used-car importers, used-car lots ("playas") and consignment lots.
- **"Motor vehicle"** means a new or used land unit with 2 or more wheels and an engine of 600 cc or more, plus trailers. Motorcycles, trucks and machinery are in (same source).
- **Legal chain.** Ley 1015/97 art. 13 lists obliged sectors in open terms; SEPRELAD named the vehicle sector in Res 85/2015; Res 196/2020 sets its duties today ([Ley 1015/97 consolidated][ley]; [Res 85/2015][r85]; [01]).
- **No size exemption.** The only reliefs ([Res 196, art. 8 and 22][r196]):
  - the owner of a one-person firm may be the compliance officer (OC);
  - simplified customer checks for a single payment up to 15 minimum wages (Gs 45.66m, about US$8,000) or instalments up to 20 minimum wages a year (Gs 60.88m), with the client's trade-in car excluded. The wage is Gs 3,044,000 from 1 Jul 2026 ([Decreto 6225/2026][d6225]; [Infobae][mw]);
  - since July 2026, the yearly external audit can be waived or deferred, on request and before the deadline, for firms with no operations, inactivity, a recent start or end, low volume, or no AML-linked clients. A grant covers one year only ([Res 328/2026][r328], read in [04]).
- **Registration is the gate to banking.** Every firm must register in SIRO. Banks must check the registration certificate, and unregistered firms cannot use the financial system ([Res 85/2015, resolution art. 4][r85]; [GAFILAT MER 2022, para. 445][mer]).

### What must exist, and when

| Duty | Deadline or frequency | Basis |
|---|---|---|
| **Operations report (RO)**: every import, purchase, sale and consignment, no amount threshold | **Quarterly, 11th-20th** of Jan, Apr, Jul, Oct | [Res 196, art. 31][r196]; [Circular 2/2025][c02v] |
| **Negative report (RN)** when no suspicious-operation report (ROS) was filed in a quarter | Within 10 business days after the quarter (about 15 Jan 2027 for Q4 2026) | Res 196 art. 37; [01] |
| **Suspicious-operation report (ROS)** | Within 24 hours of classing an operation as suspicious; analysis within 30 days of an alert and 90 days for an unusual operation | Res 196 art. 29, 33 |
| **Internal-control report (CI)**, Annex II, 12 items | 90 days after year end (31 Mar; the circular says 30 Mar; extended to 8 Apr in 2026) | Res 196 art. 13; [SEPRELAD, 31 Mar 2026][p3836] |
| **Annual Form (FA)**: clients by type, cash by currency, imports, zones | **31 May** | [FA instructions][fai]; [Memoria 2025][mem25] |
| **External audit report (AE)** by a SEPRELAD-registered auditor | 180 days after year end (30 Jun); waiver or deferral on request | Res 196 art. 14; [Res 328/2026][r328] |
| **SIRO yearly fee ("canon")** | Gs 331,000 for 2026, due 30 Jun, 2% a month late | [Res 56/2026][r56]; [SEPRELAD notice][canon] |
| **Yearly SIRO data confirmation** (sworn); changes within 5 business days | Yearly. Not yet switched on for vehicles on 10 Oct 2026 | [Res 435/2026][r435]; [SEPRELAD, 2 Oct 2026][p4412] |
| OC appointment or change | Notify within 5 business days (interim OC 48 hours) | Res 196 art. 8-10 |
| Manual, code of ethics, staff acknowledgements | Kept current; approved by the top authority | Res 196 art. 7, 11-12, Annex I |
| Risk self-assessment (4 factors) | Every 2 years; method checked every 4 years | Res 196 art. 3-4 |
| Training plan and records | Yearly plan; records kept 5 years | Res 196 art. 15-16 |
| Customer checks: simplified, general or enhanced; PEP declaration; beneficial owners (10% of shares or more than 25% of votes) | Per operation; enhanced is mandatory for non-residents, trusts, non-profits and PEPs | Res 196 art. 17-28; [Res 50/2019][r50]; [SEPRELAD FAQ][faq] |
| List screening (UN, FATF, OFAC, EU) and immediate freezing on a UN match | At onboarding, per operation, on every list change | Res 196 Annex IV; [SEPRELAD UN-list notices][p3639] |
| Register of all operations; register of unusual operations not reported | Continuous; 5-year retention | Res 196 art. 9, 31-32; Ley 1015 art. 18 |

All 34 duties, with the evidence an inspector asks for and the penalty for each, are in [01, duty-by-duty table](01-law-and-requirements.md#duty-by-duty-table).

### How filing works

- **Everything goes through SIRO**, behind the OC's own login. There is **no public API**, so a person always submits ([SIRO guide][siroguide]; [01]).
- **The RO can be keyed one by one or sent as a JSON file.** SEPRELAD switches a firm to JSON on request by note; after that, one-by-one entry closes ([json]). The SIRO sign-up form asks every sector about JSON ([siroguide]). The vehicle field list and schema were not found (unverified) ([01]; [03]).
- **Reports (CI, AE) are uploaded as one document** under "Obligaciones > Informes" ([SIRO CI/AE manual][ciae], via [03]).

### Enforcement

- **2015-2021:** 704 warning notes and 329 temporary 60-day registry suspensions for vehicle firms; no money fines on non-financial firms ([GAFILAT MER 2022][mer], Table 65, para. 597).
- **2024:** SEPRELAD checked 2,043 firms in SIRO and warned 1,692, of them **454 vehicle firms**, for missing RN, RO, FA, CI and AE. A formal sanction case was opened against one vehicle firm ([Memoria 2024][mem24]).
- **2025:** 76 on-site inspections, **35 of them vehicle firms**, chosen by risk matrix. One "significant" money fine on a vehicle firm. Only 32% caught up on annual reports after the warnings ([Memoria 2025][mem25]). The fine is under court appeal, and none were issued in 2026 to date ([stats][stats], via the B2 dive).
- **Random inspections** ask for the manual, the OC appointment and training records ([Ferrere on Res 36/21][insp]).
- **Penalty scale:** for a firm, a warning, a reprimand, a fine up to 5,000 minimum wages (about Gs 15.2 billion) or up to 50% of the operation, suspension or revocation ([Ley 1015/97, art. 24][ley]).
- **Bottom line.** Warnings are routine and machine-generated from SIRO data. Fines are rare. The real fear is a warning letter, an inspection, and losing the registration that banks check (inference from the sources above).

### Still moving

| Change | Status | Effect on the product |
|---|---|---|
| New Annual Form and vehicle risk matrix "for the 2026 period" | Finished; likely first used for the FA due 31 May 2027 (my inference) ([Memoria 2025][mem25]) | Versioned FA field maps |
| SIRO risk-matrix module, vehicles first | In development. Pre-fills from RO data; firms *declare* their manual, self-assessment and training (same source) | Value shifts to holding the evidence behind each declaration |
| New RO fields for vehicles | Under study (same source) | Versioned RO field map |
| Res 435/2026 data confirmation | In force; vehicles not yet switched on ([p4412]) | Yearly task; a free guide the week it starts |
| Res 328/2026 audit waiver | In force since July 2026 ([r328]) | Waiver-request pack for small lots |
| National risk assessment update | Pending approval ([01]) | Templates must cite it |
| Data-protection law 7593/2025 | Applies from about November 2027; 72-hour breach notice; rules on transfers abroad pending ([Ferrere][dp]; [Lawwwing][lawwwing]) | Processor terms, security, hosting opinion |
| Minimum wage | Changes each July ([d6225]) | Simplified-check limits are a dated table |

---

## 3. Customers

### How many

| Segment | Count | Source | Confidence |
|---|---|---|---|
| **Vehicle firms on SEPRELAD's register** | **1,719**: 653 companies, 1,066 individuals (62%). Central 527, Alto Paraná 365, Asunción 320, Caaguazú 168, Itapúa 118 | My count of the register export on 10 Oct 2026; the B2 dive got the same ([lookup][lookup]; [02]) | High. The register keeps some firms that stopped trading |
| **Paying the 2025 SIRO fee** | **845** (782 in 2023, 838 in 2024) | [SIRO statistics][stats] | High. **The working buyer pool** |
| Filed operation reports (2025) | 453, with 156,019 operations: 82,591 sales, 51,698 imports, 21,730 purchases | [Memoria 2025][mem25] | High |
| Filed the Annual Form | 331 (2025); 357 (2024) | [mem25]; [mem24] | High |
| Filed an internal-control report | 272 (2025) | [stats] | High |
| **Sent an external audit report** | **160** (2025) | [stats] | High. **The warmest leads**: they already pay for compliance |
| Filed any ROS | 19 vehicle firms (2025) | [mem25] | High |
| Large importers and distributors | "No more than 30" | [SEPRELAD vehicle risk study][esr] | High (2020) |
| New registrations a year | About 200 | My count of the export ([02]) | High |
| All taxpayers trading vehicles | 4,695 (2017-2019) | [esr], from tax-office data | High for that date |
| Registered external AML auditors (channel) | 183 people, about 138 providers | My count of the auditor export ([lookup]; [02]) | High |

**The funnel.** About 4,700 taxpayers trade vehicles. 1,719 are registered. 845 pay the fee. About 450-620 file routine reports. 160-330 also do the Annual Form or the audit. About 20 ever report a suspicious operation ([02]).

**Three sizes of buyer** ([02]):
- **About 30 large distributors and importers**, many in the new-car chamber CADAM. Some already use bank-grade software ([Devsys][devsys]).
- **About 620 smaller companies** (S.A., S.R.L., E.A.S.).
- **1,066 individuals running owner-managed lots**, mostly outside Asunción. In Caaguazú, 142 of 168 registered firms are individuals.

### Buyer profile

- **Cash-heavy and split into two worlds.** New-car and used-car traders sit in separate associations. Used cars come mainly from Chile and Japan. Cash is the main means of payment ([esr]).
- **High-risk in SEPRELAD's eyes:** 29% of vehicle firms rated high risk and 47% medium ([esr]).
- **The owner is usually the OC.** He holds the SIRO login ([siroguide]; [Ferrere][ferr196]).
- **Weakly organised.** CIVU had 110 member lots out of "1,000 and something" in 2019 ([Última Hora][uh19]). Civemup started in 2018 with about 600 members ([IP Paraguay][civemup]). Current figures are (unverified).
- **They already pay for:** e-invoicing or POS from Gs 110,000 a month ([FactPy][factpy]); bureau checks at Gs 23,000 each ([Criterion][criterion]); an AML course at Gs 800,000 ([Best Practices][bp]); the SIRO fee ([r56]).

### Pain, in order of evidence

1. **Warning letters for missed deadlines.** 454 in 2024 ([mem24]).
2. **Re-keying operations.** About 86 a quarter per reporting firm, each with buyer, ID, payment, chassis and, for imports, customs data ([mem25]; [Res 85/2015 Annex A][r85]). At about 8 minutes each, that is about 46 hours a year (my estimate in [04]).
3. **Missing yearly reports.** Of 845 paying firms, only 160 sent an audit (19%) and 272 a CI report (32%) ([stats]).
4. **Changing forms.** A new FA and risk matrix are coming ([mem25]).
5. **Buyers resist the KYC form.** In 2019 CIVU said "many sales were lost" because buyers refused the source-of-funds form ([uh19]).

### Jobs to be done, in the buyer's words ([03])

1. "Que no me llegue otra nota de advertencia." (No more warning letters.)
2. "Cargar el RO del trimestre sin tipear 90 operaciones." (File the quarter's RO without typing 90 operations.)
3. "Que el vendedor llene bien la ficha sin espantar al cliente." (The seller fills in the client file without scaring the buyer off.)
4. "Tener la carpeta lista si viene la SEPRELAD." (Have the folder ready if SEPRELAD comes.)
5. "Que el Formulario Anual cuadre con lo que reporté." (The Annual Form matches what I reported.)
6. "Que el auditor termine rápido." (The auditor finishes fast.)

**Who to sell to first.** The 160 firms that buy an audit, then the other paying companies, then individual lots through accountants. Do not chase the 30 large distributors first; Devsys sits there ([02]).

---

## 4. Competition

| Alternative | What it does | Price | What it means for us |
|---|---|---|---|
| **SEPRELAD SIRO** (state) | Registration, data update, RO (one by one or JSON on request), ROS, RN, FA, report uploads, fee receipts. Risk-matrix module for vehicles planned. No client files, list-check log, manual, training records or reminders | Free to use; firm pays the Gs 331,000 fee | Where filings go, not where the file is kept. The planned module will take over part of a "risk assessment" feature ([mem25]) |
| SEPRELAD free guidance | Vehicle risk study, FA instructions, free webinars (about 100 vehicle OCs at the FA session on 7 Apr 2026) | Free | Product input. Lowers the value of a paid document pack ([esr]; [fai]; [trainings][cap]) |
| **Devsys Cumplo360** (Uruguay) | List checks, KYC records, screening, client risk, monitoring. No SEPRELAD filings or Res 196 templates claimed | Not published | **The real incumbent at the top end** (Grupo Condor, the Mercedes-Benz distributor). Built for firms with a compliance team ([devsys]) |
| **Pirani AML** (Colombia) | Risk matrix, CDD, list checks; a SEPRELAD page but no SIRO workflow | Free plan; paid plans not shown | A "free risk matrix" is no selling point ([pirani]) |
| HADA (Uruguay) | List search with PEP lists, risk matrix, Uruguayan ROS | From US$10 prepaid | Price floor for list search; not set up for Paraguay ([hada], via the B2 dive) |
| Compliance Paraguay | Database of 9,000+ Paraguayan PEPs; names car dealers as targets | Not published | **Best PEP data partner** ([La Nación][cpy]) |
| Criterion S.A. (credit bureau) | Person report with PEP status, court records, defaults. Co-hosted SEPRELAD's Res 196 training on 16 Sep 2026 | Gs 23,000 a report | Partner for full checks and webinars; also a possible entrant ([criterion]; [p4381]) |
| Global KYC data (OpenSanctions, theKYB, Shufti Pro, Didit) | PEP and sanctions data, ID checks | Per check | Back-end feeds. OpenSanctions has only 219 Paraguay-linked PEPs ([os]) |
| **Registered AML auditors** (about 138 providers) | The yearly audit; some help put the manual into practice. Cáceres & Schneider markets to "playas de autos" by name | Not published | Not a rival. **The best channel** ([cs]) |
| Freelance OC packs | One-off Res 196 Word documents, help entering operations | Not stated | Static files with no upkeep. Shows a pack sells informally ([clasipar]) |
| Trainers (Best Practices, FOTRIEM/BNF, Gestión Contable) | Explain the duties | Gs 150,000-800,000 | Channel and price anchor ([bp]; [fotriem]; [gc]) |
| E-invoicing and POS vendors (FactPy, Sifende) | Hold the sales data the RO needs; no AML features seen | From Gs 110,000 a month | Data partners; possible entrants if they add an "RO export" (inference) ([factpy]) |
| Dealer management software | None found in Paraguay (3 searches) | - | No incumbent (unverified beyond that) ([02]) |

**Conclusion.**
- **Nobody runs the whole Res 196 job for a small lot.** No product combines the sales and KYC log, list checks with a log, the Res 196 documents, the calendar, RO preparation, Annual Form figures and an audit-ready export ([02]).
- **The free pieces are real.** So sell the *running* of the file and the RO built from the sales list, not documents or a risk matrix alone.
- **The main threat is SEPRELAD itself**, through the risk-matrix module. It is not planning client files, document storage or reminders, as far as its report shows ([mem25]).

---

## 5. Product

### Positioning

> **"Tu legajo SEPRELAD al día, y tu RO armado desde tu lista de ventas."** Your SEPRELAD file always up to date, and your quarterly report built from your sales list.

- **A Spanish web app that works on a phone at the lot.** It runs a vehicle firm's SEPRELAD file between filings ([03]).
- **Lead with what nobody else has for vehicles** ([02]; [04]):
  - **RO preparation.** Import or type the sales once, check them, then produce the quarterly RO and the Annual Form totals.
  - **A short KYC flow at the lot** that picks the simplified, general or enhanced check by itself, with the trade-in rule. It answers the 2019 "lost sales" complaint ([uh19]).
  - **An inspection and audit pack in one click.**
- **It is a tool, not advice, and it never files.** The OC keys or uploads in SIRO. We never hold SIRO passwords. Every decision is recorded as made by a named person in the firm ([01], R118; [03]).
- **Same engine as the real-estate product (B2).** The vehicle edition differs mainly in rule tables, templates, the stock register and the RO map ([03]).

### Users

| Role | Who | Main jobs | Rights |
|---|---|---|---|
| Top authority ("máxima autoridad") | Owner, partners or board. 62% of firms are individuals | Approve manual, code, OC, training plan, monitoring rules, enhanced clients and every ROS (Res 196 art. 7) | Everything in the firm; billing; grant auditor access |
| Compliance officer (OC) and interim OC | Usually the owner | Run the file; file in SIRO; keep the unusual-not-reported register; yearly OC report | Everything, plus the confidential area |
| Salesperson | Lot staff, on a phone | Record the sale; capture ID; get declarations signed; flag "something looks odd" | Own sales; can raise an alert but never sees alert or ROS status |
| Back office | Admin or bookkeeper | Purchases, imports, consignments; upload invoices and customs papers | Operations and clients; no confidential area |
| Consultant or accountant | Runs AML for several lots | Set up and watch many firms | Per-firm grant; portfolio view |
| Registered external auditor | One of about 138 providers | Yearly audit with client samples (art. 14) | Read-only workspace and sampling tool |
| The firm's client (buyer, seller, consignor) | Private person or company; some Brazilian and Argentine buyers in border zones | Give ID data; sign source-of-funds and PEP declarations | No account; a one-time link (v1) |
| Content editor | Our Paraguayan AML lawyer or a registered auditor on contract | Edit templates and rule tables | Content area only; no customer data |

Source: [03], Users and jobs.

### Feature map

**MVP** = built by Fri 6 Nov 2026. **Launch** = by Thu 10 Dec 2026. **v1** = Jan-May 2027, each about six weeks before its deadline. **Later** = after June 2027. Summarised from [03].

| Module | MVP | Launch | v1 (Jan-May 2027) | Later |
|---|---|---|---|---|
| Firm set-up | Firm profile, branches with FA zone, fiscal year, one-person flag; registration banner | SIRO registration data sheet for new firms | Deregistration checklist; read-only archive | |
| Governance and OC | Top authority; approvals with name, date and file hash; OC record with the notice data; 5-day and 48-hour timers | OC eligibility questions; objection window; absence and vacancy limits | OC duties map; OC yearly report | Reserved codes |
| Documents | Manual (all five Annex I blocks, with a coverage check), code of ethics, OC appointment; DOCX and PDF; versions; staff acknowledgements | OC notice pack | Update triggers when a rule changes | Association code upload |
| Risk self-assessment | Four-factor wizard pre-filled from operations; 2-year and 4-year dates | Pre-launch risk report (new branch, zone, payment type) | Declaration sheet for SIRO's coming risk-matrix module | |
| Training | Yearly plan with the art. 16 topics; session register | | 30-minute course for sellers with a quiz | |
| **Vehicle stock and operations** | Vehicle keyed by chassis; import, purchase, consignment and sale; payment lines by method and currency; trade-in; **Excel or CSV import with a column mapper and row checks** | | **SIFEN e-invoice XML import**; consignment settlement; instalment tracking | Dealer-system or POS integration |
| Client files (KYC) | Persons and companies; regime engine (dated minimum-wage table, trade-in rule); source-of-funds and PEP declaration PDFs; ID photo; beneficial owners; block on an incomplete file | Tax-ID (RUC) autofill and status warning | **Buyer self-fill link** by WhatsApp with a one-time code; review dates; 60-day deferred verification | Cédula registry check through a vendor |
| Screening | UN, OFAC and EU lists, refreshed every 6 hours; matcher; hit review; re-screen on change; FATF and own country tables | Screening certificate per client | Log of SIRO's UN-list notices | Paid PEP database add-on |
| Risk rating | Annex V criteria; history; "high" forces enhanced checks | | Method document | |
| Monitoring and confidential area | Staff alert button; alert register; 30-day, 90-day and 24-hour timers; unusual-not-reported register; ROS draft with a name-leak check | Three automatic red flags: one buyer with N cars in 60 days; sale below cost; large cash advance | More rules; rule approval and versions | |
| **Quarterly RO** | Validator; reconciliation; **copy sheet in SIRO field order**; filing record with receipt | **JSON or Excel export** once the schema is known | Schema versions | Browser helper for SIRO's form, only if JSON is unavailable and SEPRELAD's terms allow |
| Calendar | Every periodic duty from rule tables; Paraguayan holidays; e-mail reminders at 14, 7 and 1 days; traffic-light dashboard; RN logic | WhatsApp reminders | Data-confirmation task; SEPRELAD request log (4 business days) | |
| Yearly reports | | | **CI report generator by 15 Feb 2027**; **FA calculator by 15 Apr 2027** | New FA version |
| Audit and inspection | Inspection pack ZIP; gap score per duty | Auditor workspace with client sampling | Findings tracker; auditor registration check; **audit-waiver request pack** (Res 328/2026) | |
| Practice view | | Portfolio for auditors and consultants | Bulk set-up | |
| Platform | Two-factor login; roles; tenant isolation; hash-chained audit log; full export | Stripe billing; help pages | 5-year retention engine | Real-estate, jeweller and pawnshop packs on the same engine |

**Why this cut** ([03]): the January 2027 RN and RO come first, so the calendar, the register and the RO copy sheet are in the MVP. The CI (31 Mar), FA (31 May) and audit (30 Jun) generators follow, each about six weeks before its deadline.

**The full list of 118 legal requirements, each with a test, is in [01 §PRODUCT REQUIREMENTS](01-law-and-requirements.md#product-requirements).** Treat it as the acceptance checklist. Add one item from [04]: an audit-waiver request pack under Res 328/2026 (operation counts and SIRO filing history as evidence).

### Key flows ([03])

1. **First day (owner or OC), under 45 minutes.** Sign up with two-factor login. Enter the RUC; the name fills in. Tick activities; add branches (each maps to FA zone 1, 2 or 3). Enter the SEPRELAD registration. Name the top authority and the OC. Answer 15-20 questions (cash share, price range, import origins, instalments, border branches). The app drafts the manual, code, OC act, training plan and a first risk self-assessment. The owner edits and approves. Upload last quarter's sales sheet. The dashboard turns green, amber or red per duty.
2. **Sale at the lot (salesperson, about 5 minutes on a phone).** Pick the car by chassis or plate. Enter the buyer's ID. Enter price, currency, down payment, instalments and any trade-in. The app computes what counts toward the 15 or 20 minimum-wage limit, minus the trade-in, at the wage in force that day, and proposes the check level. Screening runs at once; a possible hit stops the sale. Only the fields that level needs appear (5 for a simplified natural person). The buyer signs the declarations. "Complete sale" stays blocked until the file is complete. A "Algo no me cierra" button sends an alert to the OC only.
3. **Purchases, imports and consignments (back office).** Excel import with a saved column map and row checks (ID format, chassis present, no car open twice). One customs declaration can cover several cars. Consignors get full checks. SIFEN e-invoice XML import in v1.
4. **Quarter close (OC, about 30 minutes).** On the 1st of Jan, Apr, Jul and Oct a task opens. Reconciliation lists every operation missing a file, chassis, payment breakdown or screening. Then "Preparar RO" gives a copy sheet in SIRO order, or a JSON or Excel file once the schema is known. The OC files between the 11th and 20th and uploads the receipt. If no ROS was filed, the RN task opens.
5. **Alert to ROS (OC only).** Alert, 30 days to class it, up to 90 days to decide, 24 hours to file if suspicious. The ROS draft is checked for the firm's or OC's name. Sellers see none of it; the client file shows no flag.
6. **The yearly cycle.** January training plan; CI report by 31 March; FA by 31 May; audit and canon by 30 June; data confirmation; self-assessment every 2 years.
7. **Auditor or consultant with many firms.** Firms grant access. Portfolio list with gap scores and next deadlines. Random client sample by risk tier, exported as ZIP or PDF. Findings carry into next year.
8. **Inspection or warning letter.** "Paquete de inspección" builds the ZIP (constancia, OC papers, manual, code, approvals, acknowledgements, self-assessment, training, rules, registers, filing history, sample files). A warning letter becomes a request with a timer and a catch-up task.

### Screens ([03])

1. Dashboard ("Semáforo"): one row per duty with colour, next deadline and proof on file.
2. Stock: cars by chassis, status and days in stock.
3. New sale (mobile): car, buyer, payment, signatures, with a chip that explains the check level ("Simplificado: Gs 38.000.000 ≤ 15 SM; parte de pago excluida").
4. Operation detail.
5. Client file with a completeness bar.
6. Screening hits, side by side.
7. Import wizard.
8. Quarter close and RO copy sheet.
9. Calendar.
10. Documents.
11. Confidential area (OC only, different header colour).
12. Training.
13. Yearly reports (v1).
14. Auditor workspace.
15. Practice portfolio.
16. Settings.
17. Content admin: minimum wage by date, fees by year, holidays, deadline rules, RO and FA field maps, templates, each with its legal source and date.

Design rules: mobile-first for the sale flow, desktop for the OC; plain Spanish with the article number in a tooltip; everything printable.

---

## 6. Technical design

**Stack** (the same as the B2 design, so one codebase serves every SEPRELAD sector) ([03]):

| Layer | Choice |
|---|---|
| App | Python 3.13 and Django; server-rendered pages with HTMX and a little Alpine.js; mobile-first CSS |
| Database | PostgreSQL with row-level security on `firm_id`, trigram search for names, JSONB snapshots |
| Jobs | procrastinate, a Postgres-backed queue (no Redis): list refresh every 6 hours, re-screening, reminders at 07:00 Paraguay time, monthly RUC import |
| Documents | docxtpl for Word templates; LibreOffice headless for PDF; openpyxl for Excel; lxml for SIFEN XML |
| Matching | rapidfuzz, unidecode, pg_trgm; Spanish and Portuguese name particles |
| Auth | Django auth, Argon2, TOTP two-factor login (mandatory for top authority, OC, auditor, consultant) |
| Files | S3-compatible storage in the same region; KMS encryption; per-firm prefixes; short-lived signed links; virus scan |
| Messages | Amazon SES; WhatsApp Cloud API for firm reminders |
| Billing | **Stripe Billing** (replacing [03]'s Paddle; see §9) |
| Hosting | Docker Compose on **AWS Lightsail, São Paulo**, behind Caddy; staging and production; GitHub Actions |
| Tests | pytest, Playwright end-to-end, semgrep or bandit, pip-audit |

**Principles** ([03]):
- **Rules are data.** Deadlines, thresholds, minimum wages, fees, holidays, RO and FA field maps and red flags live in dated, versioned tables, each citing its legal source. A rule change is a data change, not a deploy ([01], R115).
- **No AI on the compliance path.** Check level, risk score, screening and deadlines are deterministic and explainable, because an auditor tests them. AI only drafts text a person approves.
- **One repository, one app, clear modules:** `core`, `params`, `calendar`, `clients`, `screening`, `vehicles`, `ro`, `documents`, `training`, `confidential`, `reports`, `practice`, `billing`, `public`. In B2, an `operations` app takes the place of `vehicles` and `ro`; everything else is shared.

**The vehicle-specific heart is the stock register.** Each car is one record keyed by its chassis or frame number. It moves from import, purchase or consignment to sale. That one record feeds the RO, three red flags (many cars to one buyer, a sale below value, an advance then a cancellation), the trade-in rule and the FA totals ([03]; [Res 196 Annex III][r196]). Japanese domestic cars carry frame numbers, not 17-character VINs, so validate the check digit only when a number looks like a VIN (unverified; [03]).

**Data sources** ([03]):

| Source | Use | Access | Cost | Phase |
|---|---|---|---|---|
| SIRO | Where filings go | Web forms behind the OC's login; JSON RO on request; no public API ([json]; [siroguide]) | Firm's fee | Copy sheet in MVP; file export at Launch |
| UN consolidated list | Binding sanctions check | XML ([UN][un]) | Free | MVP |
| OFAC SDN; EU consolidated list | Named in Annex IV | XML ([OFAC][ofac]); EU file via an EU Login token | Free | MVP |
| FATF lists | Country risk | Entered by hand after each plenary | Free | MVP |
| DNIT RUC register | Name autofill; cancelled or blocked RUC warning | Ten monthly zip files ([DNIT][ruc]); reuse terms (unverified) | Free | Launch |
| SIFEN e-invoice XML | Pre-fill sales; vehicle group E770 holds chassis, colour, engine number, year, type ([pkuatia][sifen]) | Dealer uploads its own XML | Free | v1. Whether used-car dealers fill E770 is (unverified) |
| Client's PEP declaration | Main PEP control | Res 50/2019 art. 6 ([r50]) | Free | MVP |
| Compliance Paraguay or Criterion | Paid PEP data, bureau report | Partner deal | Gs 23,000 a Criterion report ([criterion]); Compliance Paraguay price unknown | Later, as an add-on |
| Didit cédula check | ID registry check | API | US$0.20 a check, 500 free a month (vendor claim, unverified) ([Didit][didit]) | Later, opt-in |
| BCP exchange rates | Cash in foreign currency for the FA | Daily page ([bcp]) | Free | v1 |
| Minimum wage; holidays | Simplified-check limit; business-day timers | Yearly decrees ([d6225]; [holidays law][holidays]) | Free | MVP |

**Security and privacy** ([03]):
- **Tipping off is the special risk.** Telling a client about a ROS is an offence ([Ley 1015/97, art. 19-20][ley]; Res 196 art. 36). The confidential area is visible only to the OC, the top authority and named assistants. Seller roles cannot reach it by screen, search or export, and an automated test proves it ([01], R80).
- **Controls:** per-firm encryption key for ROS and case data; KMS encryption for ID images; two-factor login; hash-chained audit log; approved documents and filed ROs become read-only; daily backups with point-in-time recovery and a monthly restore test; cross-tenant read tests in CI; an external security test before sale, then yearly.
- **We never ask for, store or proxy SIRO passwords.**
- **Data protection (Ley 7593/2025).** It applies from about November 2027. Secondary sources say it brings a 72-hour breach notice and adequacy or safeguards for transfers abroad ([Ferrere][dp]; [Lawwwing][lawwwing]). Each firm is the controller; we are its processor and sign a data-processing agreement listing sub-processors.
- **Hosting abroad.** Data sits in Brazil. Whether Paraguay's new agency will accept Brazil is (unverified). Get a lawyer's written view in week 0.
- **Retention beats erasure.** AML records are kept 5 years (Res 196 art. 20, 32; Ley 1015 art. 18). A firm that leaves gets a full export and a free read-only archive for the rest of the 5 years.

**Running cost** (US$ a month, excluding staff and payment fees; [03], from [Lightsail pricing][lightsail]):

| Customers | Hosting, storage, e-mail, WhatsApp, monitoring | Per customer |
|---|---|---|
| 50 | about 75-100 | about 1.5-2.0 |
| 300 | about 185-230 | about 0.6-0.8 |
| 1,000 (only with real estate on the same engine) | about 395-610 | about 0.4-0.6 |

- **Fixed costs after launch:** Claude Code Max at US$200 a month ([Anthropic][claude]); a lawyer retainer of US$100-300 a month; a yearly security retest of about US$3,000-8,000. With hosting, about **US$625-1,270 a month** at 50 customers ([03]).
- **Payment fees can exceed hosting.** Sell yearly plans (§9).
- **Pass-through costs:** paid PEP checks and ID checks are add-ons billed to the customer.

---

## 7. Development steps

### Reconciled timing: one engine, a decision at Gate 1

The B2 plan builds the shared engine for real estate now and adds car dealers as a beta in April 2027 and a paid launch in July 2027 ([B2 PLAN][b2plan]). File 03 says both verticals can ship together on 10-11 Dec 2026 if the vehicle RO format is captured in week 0, "at the edge of what one founder can steer" ([03]). File 04 says lead with whichever vertical passes Gate 1 more strongly ([04]).

**What I recommend.** Do the cheap vehicle work now, and decide the rest at Gate 1 (Fri 6 Nov 2026):

- **Now, whatever happens (about US$0-500):** capture the vehicle RO in the live window (11-20 Oct); run 12 vehicle interviews alongside the B2 interviews; put the vehicle tables in the shared data model from day 1.
- **Path A, fast track: ship "Automotores" with the December launch.** Only if, at Gate 1, all of these hold:
  1. the vehicle RO field map has been captured from real SIRO screens;
  2. at least 6 of 12 vehicle firms would pay Gs 99,000 a month;
  3. at least 2 auditors with vehicle clients will pilot;
  4. at least half the firms report more than 30 operations a quarter.

  Then add streams S4 (vehicles) and S5 (RO) to the B2 build and launch both on Thu 10 Dec, "listo para enero". To protect the founder's capacity, move B2's lowest-value launch items to January.
- **Path B, default: follow the B2 timetable.** If the demand tests pass but the RO format is not captured, or the founder is already stretched, run a vehicle beta in April 2027 and launch in July 2027, after the CI, FA and audit releases have shipped.
- **Path C: vehicles first.** If real estate fails its Gate 1 and vehicles pass, build the same engine with vehicles as the lead vertical. Then the stand-alone numbers in §10 apply: plan for about US$45,000-50,000 of cash and a side-income outcome.
- **Stop.** If vehicles fail Gate 1, keep them as an unpriced configuration of the B2 engine and spend nothing vehicle-specific.

The calendar below is file 03's stand-alone build. On paths A and C it is the real calendar. On path B, the vehicle-specific streams (S4, S5, the regime rules and templates) move to Feb-Apr 2027.

### Phases ([03], with dates aligned to B2's Gate 1)

| Phase | Dates | Goal | Exit check |
|---|---|---|---|
| 0. Prepare | Mon 12 - Sun 18 Oct 2026 | **Capture the vehicle RO screens in the live window (11-20 Oct)**; JSON request through a pilot; interviews; lawyer briefed; spec pack; accounts | RO field map v0 from real SIRO screens; 2 pilot lots or 1 auditor committed |
| 1. Foundation | 19 - 25 Oct | Skeleton, tenancy, auth, audit log, parameters, all models, CI and CD, staging | "Contract freeze": models and service interfaces merged |
| 2. Parallel modules | 26 Oct - 6 Nov | Eight agent streams build the MVP column (§5) | **MVP done and Gate 1, Fri 6 Nov** |
| 3. Integration and launch scope | 9 - 20 Nov | Hardening; RUC autofill; three red flags; auditor workspace; practice view; JSON or Excel RO export if the schema is known | Flows 1-5 pass end to end |
| 4. Legal sign-off | Full template work from 9 Nov (after Gate 1); sign-off by 27 Nov | Res 196 templates v1.0, declarations, terms, privacy notice, data-processing agreement | Written sign-off |
| 5. Security test | Test 23-27 Nov; fixes 30 Nov - 4 Dec; retest by 9 Dec | External grey-box test of app and infrastructure | No open high or critical findings |
| 6. Pilot | 16 Nov - 10 Dec | 5-10 lots through 1-2 registered auditors; free until launch. Re-create each pilot's Q3 RO from its own sales sheet and compare it with what it filed | 5 lots active; 2 with a complete file; time per quarter measured |
| 7. **Launch** | **Thu 10 Dec 2026** | Stripe live, help pages, price page, "listo para enero" | "Sellable" checklist met |
| 8. First live season | 14 Dec 2026 - 31 Jan 2027 | Support firms through the RN (about 15 Jan) and the RO (11-20 Jan) | At least 10 firms file their RO with our output |
| 9. Yearly-report releases | CI generator by 15 Feb; SIFEN XML import by 28 Feb; FA calculator by 15 Apr; audit pack and waiver pack by 15 May 2027 | Meet the CI, FA and audit deadlines | Firms file CI and FA with our output |
| 10. Next | Jun - Sep 2027 | New FA version; risk-matrix declarations; PEP add-on; Ecuador research | |

Holidays in the window: 8 Dec (Caacupé), 25 Dec, and the January summer break ([03]).

### Week 0 (12-18 Oct 2026): the one task that cannot wait

- **Capture the vehicle RO.** Find 1-2 vehicle OCs through a registered auditor such as Cáceres & Schneider, which markets to "playas de autos" ([cs]). Join them by video while they key their Q3 RO. Screenshot every field, drop-down, format rule and error message. Collect their sales sheet, a few invoices (XML if they e-invoice), a customs declaration, their manual and their last FA ticket ([03]).
- **Ask for the JSON schema.** The pilot sends SEPRELAD the note for bulk JSON (firm name, RUC, OC name and institutional e-mail to mesaentrada@seprelad.gov.py). Warn the pilot first that the switch closes one-by-one entry ([json]; [01]).
- **Spec pack for the agents:** `CLAUDE.md` with conventions and the "no AI on the compliance path" rule; a Spanish-English glossary; the 118 requirements, each mapped to a module and a test; the data model; a UI pattern sheet; fixtures with a synthetic lot of 80 cars and 150 operations (imports, trade-ins, instalments, one non-resident buyer, one PEP) and a messy sales sheet ([03]).
- **Accounts:** AWS (São Paulo), domain, GitHub, **Stripe test mode in PYG**, SES, WhatsApp Business, error tracker.

### How the founder runs parallel AI agents ([03])

- **Contract first.** In week 1 the founder and one agent write every module's models, service signatures and URL map, plus failing end-to-end smoke tests. After the freeze, each stream owns one Django app.
- **Isolation.** One git worktree, branch and Claude Code session per stream. Pull requests under about 400 changed lines, with green CI (lint, types, unit, tenancy and end-to-end tests). A reviewer agent comments; the founder merges twice a day.
- **Golden tests for the legal parts:**
  - check-level thresholds at Gs 45.66m and 60.88m, on both sides of 1 Jul 2026 (old wage Gs 2,899,048), with and without a trade-in;
  - one test per deadline rule, with weekends and holidays (RN for Q4 2026 = Fri 15 Jan 2027);
  - RO output equal to the captured field map and order;
  - the manual covers every Annex I heading;
  - a seller account cannot reach any confidential field.
- **Guardrails.** Synthetic data only; no production access or secrets; new dependencies need approval. The founder reviews auth, row-level security, file access and the confidential area line by line.
- **Capacity.** One founder can steer about 5-8 well-specified streams (my judgement in [03]; the B2 dive says 5-7). Path A needs about 10, which is why it has strict conditions.

### Agent work streams for the MVP (26 Oct - 6 Nov)

| Stream | Scope | Requirements in [01] | Agent-days |
|---|---|---|---|
| S1 Calendar and obligations | Rule-table deadlines, business days and holidays, tasks, reminders, dashboard, filing records, RN logic | R91-R93, R102, R116 | 6-8 |
| S2 Clients and KYC | Persons and companies, versions, documents with hash, beneficial owners, PEP and source-of-funds PDFs, regime engine with trade-in and instalments, risk rating v0 | R39-R57, R63-R67 | 9-11 |
| S3 Screening | UN, OFAC and EU fetchers with versions; FATF table; Spanish and Portuguese name normaliser; hit review; re-screen | R59-R62 | 6-8 |
| **S4 Vehicles and operations** | Stock; import, purchase, consignment and sale; payment lines; trade-ins; customs declarations; mobile sale flow; Excel import with mapper | R3, R38, R82-R86 | 9-12 |
| **S5 RO and reconciliation** | Versioned field map; validator; reconciliation; copy sheet; JSON and Excel exporters behind a switch | R87-R90 | 5-7 |
| S6 Documents and confidential area | Templates; manual, code, OC act; approvals; acknowledgements; alert and unusual-not-reported registers; ROS draft with name-leak check and timers | R8-R11, R25-R31, R68-R81 | 8-10 |
| S7 Onboarding, inspection pack, billing, public site | Set-up wizard; gap score; inspection ZIP; Stripe test mode; Spanish landing, price and legal pages | R1-R7, R111-R112 | 6-8 |
| S8 QA and security (continuous) | Playwright flows 1-5; cross-tenant tests; static analysis; dependency audit; small-screen checks | R105-R110 | 5-8 |

- **Effort check:** about 54-72 agent-days against about 80 stream-days available. If it slips, cut in this order: the JSON exporter, risk-rating detail, the calendar feed, copy-sheet styling ([03]).
- **Launch streams (9 Nov - 4 Dec):** S9 RUC import; S10 three red flags; S11 auditor workspace; S12 practice portfolio; S13 JSON or Excel RO export; S14 WhatsApp reminders; S15 full export and archive.
- **v1 streams (Jan-May 2027):** CI report generator; SIFEN XML import; FA calculator with BCP rates; buyer self-fill link with a one-time code; course and quiz; risk-matrix declaration sheet; audit-waiver pack.
- **On the B2 engine (paths A and B)** only S4, S5, the vehicle regime rules, the vehicle FA map, the Res 196 templates and three red flags are new: about **15-22 agent-days**, or 2-3 weeks with 3 streams plus 2 weeks of review and pilot ([03]).

### MVP definition of done (Fri 6 Nov 2026) ([03])

1. A new user sets up a firm in under 45 minutes on staging (timed with two people who have not seen the app).
2. The calendar creates every periodic duty from Oct 2026 to Dec 2027 with the right dates, all covered by tests.
3. A salesperson completes a simple cash sale with a simplified-check buyer in under 5 minutes on a mid-range phone. The regime engine passes every boundary test, including trade-ins and instalments.
4. Client files work for persons and companies. Declaration PDFs generate. Uploads store a hash.
5. UN, OFAC and EU lists load on schedule with versions. A seeded name produces a hit. Each decision and its reason are logged.
6. The register links imports, purchases, consignments and sales to one car. The messy synthetic sheet imports with clear row errors.
7. The RO copy sheet follows the field order captured in week 0. Reconciliation blocks "ready to file" on any gap.
8. Manual, code and OC act generate with approvals and hashes. The confidential area is closed to seller and back-office roles.
9. Two-factor login enforced for OC and top authority. Cross-tenant tests pass. The audit-log chain verifies. One backup has been restored.
10. Flows 1-5 pass in CI. No open priority-1 bugs.

**"Sellable" by Thu 10 Dec 2026:** the MVP plus RUC autofill, three red flags, auditor workspace, practice view and full export; templates and legal pages signed off in writing; security test with no open high or critical findings; at least 5 pilot lots active and 2 with a complete file; **at least one pilot's Q3 RO re-created from its sales sheet with no field differences**; Stripe live with monthly, yearly and practice plans; help pages and short videos for the January windows ([03]).

### Build budget (cash, founder unpaid)

| Item | Stand-alone, low | Stand-alone, middle | Stand-alone, high | As an add-on to B2 |
|---|---|---|---|---|
| Claude Code Max, 1-2 seats for 3 months ([Anthropic][claude]) | 600 | 1,200 | 1,200 | shared |
| Lawyer or AML expert: Res 196 templates, declarations, terms, privacy notice, data-processing agreement | 2,000 | 3,500 | 5,000 | 1,000-2,500 (Res 196 templates only) |
| Registered auditor as paid design partner | 0 | 500 | 1,000 | 0-500 |
| External security test plus retest ([Blaze][pentest1]; [Redfox][pentest2]) | 3,000 | 5,000 | 8,000 | 1,000-2,500 (scoped retest) |
| Hosting, domain, monitoring, small tools (3 months) | 200 | 300 | 500 | small |
| Spanish copy-editing; test credits | 0 | 320 | 550 | 0-300 |
| Optional week in Asunción and Ciudad del Este | 0 | 0 | 2,500 | shared trip |
| Contingency (10%) | 580 | 1,080 | 1,875 | included |
| **Total (US$)** | **about 6,400** | **about 11,900** | **about 20,600** | **about 2,000-5,000** |

Source: [03], Budget. Not included: founder time, marketing (§8), company and payment set-up (§9).

**Year 1 after launch, stand-alone** (my estimates in [03]): hosting US$1,000-2,500; Claude Code US$2,400; content retainer US$1,200-3,600; yearly security retest US$3,000-8,000; payment fees about 6% of revenue; PEP and ID checks passed through.

---

## 8. Go-to-market

### What buyers pay today (anchors)

| Item | Price | About US$ | Source |
|---|---|---|---|
| SIRO yearly fee, vehicle sector, 2026 | Gs 331,000 a year | 58 | [Res 56/2026][r56]; [canon] |
| One-off SIRO registration fee | about Gs 322,000 | 56 | [stats], my division in [02] |
| Online AML course naming vehicle traders | Gs 800,000 a person | 140 | [Best Practices][bp] |
| Person check with PEP status | Gs 23,000 a report | 4 | [Criterion][criterion] |
| E-invoicing or POS software | from Gs 110,000 a month | 19 | [FactPy][factpy] |
| External AML audit; freelance document pack; Devsys | not published | - | [cs2]; [clasipar]; [devsys] |

**What the anchors say** ([04]):
- **Visible prices are low.** A small lot will compare the tool with the SIRO fee and its e-invoicing bill.
- **The hidden cost is time.** About 46 hours a year of RO keying is worth about Gs 0.8m at a clerk's wage (my estimate in [04]), close to the price of the main plan.
- **Checking every buyer through a bureau is dear.** At Gs 23,000 for each of about 180 buyers a year, that is about Gs 4.1m (my arithmetic in [04]). A bundled list check with a saved log is a real saving.

### Pricing ([04]; net of Paraguayan VAT; yearly prepay = 10 months)

| Plan | Who | What it includes | Monthly | Yearly | About US$ a year |
|---|---|---|---|---|---|
| **Al día** | Small or low-activity lots, individuals, firms seeking an audit waiver | Calendar for every duty; e-mail and WhatsApp reminders; RO checklist up to 40 operations a year; FA worksheet; vault for SIRO receipts; audit-waiver pack (from May 2027). 1 RUC, 1 user | Gs 49,000 | Gs 490,000 | 86 |
| **Playa** (main) | Used-car lots and small importers that file ROs | Al día plus up to **400 operations a year** (the average is 344). Sales and purchase log with Excel import; automatic check level; UN, OFAC and EU checks with a log; **RO builder**; manual, code, OC and self-assessment generators; training log; alert register; inspection pack; 5-year archive. From Feb-Apr 2027: buyer self-fill link, e-invoice import, CI draft, FA figures. 3 users | **Gs 99,000** | **Gs 990,000** | **174** |
| **Concesionaria** | Mid-size dealers and importers with branches | Playa up to 2,000 operations, 3 branches, 10 users, bulk import, priority WhatsApp support | Gs 249,000 | Gs 2,490,000 | 437 |
| **Distribuidor** | About 30 large importers and brand distributors | Several RUCs, import from dealer software, single sign-on, custom reports. Quote only | from Gs 590,000 | from Gs 5,900,000 | from 1,035 |
| **Estudio** | Registered auditors, accountants, outsourced OCs | Multi-client dashboard; free read-only access to any subscribing client; audit-sample tool; 3 client RUCs included; more Playa clients at Gs 79,000 a month, Concesionaria clients at Gs 199,000 | Gs 290,000 base | Gs 2,900,000 base | 509 base |

- **Reconciled feature promise.** File 04's plan list included features that file 03 builds in 2027. The price page marks them "desde febrero 2027" or "desde abril 2027" (§5).
- **PEP checks.** At launch the PEP control is the client's signed declaration, as Res 50/2019 requires ([r50]). A paid PEP database (Compliance Paraguay or Criterion) is an add-on once a deal exists ([03]).
- **Add-ons, delivered by partners; we keep 30%:** assisted set-up Gs 900,000 (US$158); pre-audit review Gs 1,500,000; Criterion reports at cost (Gs 23,000) if a deal is signed (my estimates in [04]).
- **Launch offers:** the first 15 vehicle firms (Dec 2026 - Jan 2027) get 50% off year 1 for feedback and a testimonial; founders keep their price for 2 years; association members get 15% off ([04]).
- **Price test.** Test Playa at Gs 99,000 against Gs 149,000 a month in the Gate 1 interviews. B2's main real-estate plan is Gs 149,000, and a 25% higher vehicle price adds about US$8,100 of year-3 profit in the stand-alone base case ([B2 PLAN][b2plan]; [04]).
- **Why price by operation volume.** Volume is visible in the RO and drives the work. Dealers can pick a plan without a sales call (my suggestion in [04]).
- **Price-page wording (Spanish):** "Precios en guaraníes, sin IVA. Servicio para empresas y comerciantes con RUC. Si su empresa es contribuyente del IRE general, puede corresponderle retener el INR. Si necesita factura electrónica local, compre a través de un socio." ([04])

### Channels, in priority order ([04])

1. **SEPRELAD-registered AML auditors.** About 138 providers file about 160 vehicle audits a year ([lookup]; [stats]). Offer the Estudio plan. Referral: 20% of year 1 and 10% of renewals. Reseller: 30% off list, and the reseller invoices locally. Cáceres & Schneider already markets to "playas de autos" ([cs]).
2. **Direct outreach from the public register.** 653 vehicle companies (RUC starting "80") plus about 200 new registrants a year, by WhatsApp and e-mail, with a free "semáforo SEPRELAD" self-check and the January RO guide. Companies first. Take legal advice before marketing to the 1,066 individuals ([lookup]; [Ferrere on Ley 7593][dp]).
3. **Accountants in the dealer hubs:** Central 527, Alto Paraná 365, Caaguazú 168 and Itapúa 118 registered firms. Estudio plan; a course-plus-tool bundle with Gestión Contable ([02]; [gc]).
4. **Criterion S.A.** It co-organised SEPRELAD's Res 196 training on 16 Sep 2026 ([p4381]). Joint webinar, bureau reports, referrals. Also a possible entrant.
5. **Trainers:** Best Practices and FOTRIEM/BNF. "Course plus 3 months of the tool" ([bp]; [fotriem]).
6. **Associations, two separate tracks.** CADAM for new-car distributors: a collective code of ethics (Res 196 allows one) and the Distribuidor plan. CIVU and Civemup for used cars: a member discount. Do not co-brand the two: CADAM's leadership has argued for limits on used-car imports ([Ferrere][ferr196]; [Última Hora][cadamuh]; [04]).
7. **E-invoicing vendors** (FactPy, Sifende): sales data into the RO log; co-marketing ([factpy]).
8. **Ads around deadlines only:** Meta in Central, Alto Paraná and Caaguazú in the 4 weeks before each deadline; Google search on "reporte de operaciones SEPRELAD" and "formulario anual automotores" ([04]).

**Not a channel:** SEPRELAD. Circular 2/2025 bars its officials from selling or recommending advisers ([Circular 2/2025][c02], via the B2 dive). Never claim endorsement.

### Sales motion ([04])

- **Lead with the RO.** The first demo imports last quarter's sales list and shows the January RO ready to key in or upload. This is the "aha" moment.
- **Self-serve plus WhatsApp.** A 14-day trial with no card; a 20-minute WhatsApp onboarding call; then a yearly plan by card.
- **Auditor-led.** The auditor names the tool in the engagement letter and sees the client file on the Estudio dashboard.
- **Local presence.** From January 2027, only if Gate 3 passes, a part-time Paraguayan contractor who ideally speaks Guaraní, at about US$400 a month. On path B, share the B2 contractor.
- **Sales cycle:** 1-3 weeks for an owner-run lot; 1-2 months for an audit practice or a distributor (my estimate in [04]).

### Selling calendar = the SIRO calendar

| When | Duty | Our action |
|---|---|---|
| Dec - Jan | RN by about 15 Jan; RO 11-20 Jan | "Enero: RN y RO" campaign to vehicle companies; webinar with an auditor or Criterion |
| Feb - Mar | CI report by 31 Mar | Auditor partner drive before fieldwork; CI webinar; trip 2 |
| April | RO 11-20 Apr; SEPRELAD's FA webinar (about 100 vehicle OCs in 2026 ([cap])) | "Tu RO en minutos"; outreach to new registrants |
| May | FA by 31 May | FA figures campaign; trainer bundle |
| June | Audit report, fee and audit-waiver request by 30 Jun | Audit export; waiver guide for small lots |
| July | RO 11-20 Jul; Expo Feria CADAM (31 Jul - 9 Oct in 2026 ([cadamexpo])) | Distribuidor plan; collective code proposal |
| Aug - Sep | Quiet; renewals | Used-car group offer; accountant webinars in Ciudad del Este; renewal campaign |
| Oct - Nov | RO 11-20 Oct; build season | Interviews, partner deals, new features |

**Peak season is January to June** ([04]).

### Marketing budget, year 1 (Oct 2026 - Sep 2027) ([04])

| Line | US$ |
|---|---|
| Meta ads (Central, Alto Paraná, Caaguazú) | 2,000 |
| Google search ads (deadline keywords) | 1,200 |
| Clasipar and Facebook group posts | 300 |
| Two auditor and accountant breakfasts (Asunción, Ciudad del Este) | 1,000 |
| Webinars and co-marketing with trainers and Criterion | 500 |
| Video editing and design (AI-assisted) | 400 |
| WhatsApp Business and e-mail tools | 400 |
| Printed one-pagers | 200 |
| **Marketing total** | **6,000** |
| Travel (two trips) | 3,600 |
| Local contractor (9 months × US$400) | 3,600 |
| Partner commissions | about 5-7% of bookings |

As a module on the B2 engine, file 04 counts two-thirds of the marketing, 40% of the contractor and US$400 trips ([04]). Ad cost benchmarks are global, not Paraguayan: a median Facebook cost per click near US$0.70 ([adwave][ads]); Paraguayan rates are (unverified).

### First 90 days (day 1 = Mon 12 Oct 2026; day 90 = Sat 9 Jan 2027)

| Dates | Product | Market and sales | Company, legal, payments |
|---|---|---|---|
| Week 1 (12-18 Oct) | Week 0 of §7: **RO capture in the live window**; spec pack | Landing page with a free 2027 vehicle SIRO calendar. Download the register and auditor lists. Book 12 vehicle firms (6 companies, 6 lots in Central, Ciudad del Este and Caaguazú) and 6 auditors with vehicle clients, inside the B2 interview round | Stripe test account with PYG prices. Brief a Paraguayan AML lawyer (scoping fee). Pilot sends the JSON note to SEPRELAD |
| Week 2 (19-25 Oct) | Foundation; contract freeze | Remote interviews. Ask auditors what they charge a small lot. Contact Criterion | Draft terms and data-processing terms. Send tax questions to a Paraguayan adviser (§9) |
| Weeks 3-4 (26 Oct - 6 Nov) | Eight agent streams; **MVP on Fri 6 Nov** | Founding offer: 50% off year 1 for the first 15 firms. Collect letters of intent | Book the security test |
| **Fri 6 Nov: Gate 1** | Choose path A, B, C or stop (§7) | At least 6 of 12 vehicle firms would pay Gs 99,000 a month; at least 2 auditors with vehicle clients will pilot; at least 4 letters of intent | Commit the lawyer's full fee and the security test only if passed |
| Weeks 5-6 (9-22 Nov) | Launch streams; pilot fixes; RO re-creation tests | **Trip** to Asunción and Ciudad del Este. Onboard 5-10 pilot lots through 2 auditors. Meet one trainer and one used-car group. Line up the contractor for January | Lawyer drafts the manual, code, OC act and self-assessment |
| Weeks 7-8 (23 Nov - 6 Dec) | Security test and fixes; archive and export; WhatsApp reminders | Record 5 short videos ("el RO de enero en 30 minutos") | Sign partner agreements. Final terms. Stripe Billing live. Collect RUC and tax regime at checkout |
| **Thu 10 Dec: Gate 2, launch** | "Listo para enero" | At least 5 paying vehicle pilots | |
| Weeks 10-12 (11 Dec - 3 Jan) | Support only | WhatsApp and e-mail campaign to vehicle companies: "RN hasta el 15 de enero, RO del 11 al 20". Mid-December webinar with an auditor or Criterion. Small Meta test | Register under RG 114/2022 if the first sale to a non-withholding buyer happens (§9). Book foreign-company bookkeeping |
| Week 13 (4-9 Jan 2027) | Help pilots file the RN and RO | Measure time saved, problems and willingness to renew | |
| **Sat 9 Jan: Gate 3** | | At least 6 paying vehicle firms and 1 active partner practice; pilots used the tool for the January RO. Decide the CI-season spend | |

On path B, weeks 1-4 are the same (RO capture and interviews), and the vehicle rows from week 5 move to Feb-Apr 2027.

---

## 9. Payments, company and legal

### Payments: Stripe on the founder's foreign company, priced in guaraníes

**Recommendation** ([04]):
- Use **Stripe Billing on the founder's existing company abroad**, with prices in PYG and yearly or monthly card billing. PYG is a zero-decimal Stripe currency ([Stripe currencies][stripecur]). Whether PYG is a presentment currency for the founder's account country must be checked in the dashboard (unverified).
- **Sell to businesses only.** Collect the buyer's RUC and tax regime at checkout.
- **Bear the 4.5% non-resident income tax (INR)** that some buyers withhold (below).
- **Offer a reseller route** through partner auditors or accountants for buyers who want a local invoice or to pay by local transfer.
- **Not Paddle or Lemon Squeezy as the main processor.** Paddle sells to Paraguay only in US$ and does not collect Paraguayan tax ([Paddle countries][paddlecty]; [Paddle tax][paddletax], via [04]). Lemon Squeezy accepts Paraguayan buyers, but its Paraguayan tax handling is not shown ([Lemon Squeezy][lemon]). A merchant of record solves no Paraguayan tax here and charges in a currency small lots do not think in. Keep Paddle as a fallback if the founder's home VAT on these sales becomes a burden. For an EU company, B2B services to non-EU businesses are normally outside EU VAT (general rule; confirm with the founder's accountant; unverified here).

**Fees** ([Stripe Ireland pricing][stripeie]; [Stripe US pricing][stripeus]; my arithmetic in [04]):

| | Stripe Ireland | Stripe US |
|---|---|---|
| International card | 3.15% + €0.25 | 2.9% + 30¢, plus 1.5% international |
| Currency conversion | +2% | +1% |
| Stripe Billing | +0.7% | +0.7% |
| On Playa yearly (Gs 990,000, US$174) | about US$10.5 (6.0%) | about US$10.9 (6.3%) |
| On Playa monthly (Gs 99,000) | about US$1.3 (7.5%) | about US$1.4 (7.8%) |

**Do Paraguayan cards work?** Mostly, for credit cards: the law makes banks and card processors collect VAT on foreign digital services, which shows people pay them by card ([dplnews]). Credit cards rose from 1.30m (June 2024) to 2.28m (June 2025) ([InfoNegocios][cards]). But in e-commerce, cash takes 28% of payments, transfer 19%, credit card 16% and debit card 7% ([dLocal][dlocalmkt], undated). Debit cards with a foreign merchant are (unverified); test with pilots. American Express does not support PYG (B2 dive).

**Bank transfers.** An international wire from Itaú Paraguay costs US$33 plus US$22 SWIFT ([Wise][wise], via [04]). Accept wires only above about US$500 (Distribuidor and Estudio). Local transfers need a partner or a local entity. **dLocal** offers local methods (Infonet, Aquí Pago, Tigo Money, QR, transfer) for foreign merchants on a quote ([dLocal docs][dlocal]); a later option.

### Buyer-side tax friction

| Buyer | Non-resident income tax (INR) | VAT (IVA) | What it means |
|---|---|---|---|
| **General-regime corporate taxpayer (IRE)**: most S.A. and larger firms | Must withhold 15% on a deemed 30% of the net price = **4.5%** ([Decreto 6515/2021, art. 7, 9][d6515]). The foreign provider then need not register ([RG 114/2022, art. 4(a)][rg114]) | Buyer self-accounts and credits it ([EY][ey], via the B2 dive); or banks add 10% on card payments if DNIT lists us ([dplnews]). Software is a listed digital service ([ABC Color][abc6380]) | Some pay in full and settle the INR themselves; some pay 95.5%. Accept both; publish a one-page guide for their accountant |
| **IRE SIMPLE or RESIMPLE firm** | Not named as withholding agents ([d6515]) | RESIMPLE firms charge no IVA (secondary: [beancount][simple]) | Grey zone |
| **Resident individual** (62% of registered vehicle firms) | Exempt from withholding ([d6515], art. 9) | As above | Grey zone |

- **For sales to "final consumers", the foreign provider registers by e-mail.** It sends the non-resident registration form within 10 business days, files Form 90 by e-mail by the 15th of each month with a spreadsheet of charges, pays by bank transfer against a DNIT slip, and sends "Sin Movimiento" in empty months. Registration creates no permanent establishment ([RG 114/2022, art. 1-4][rg114]).
- **"Consumidor final" is not defined.** An individual lot owner or IRE SIMPLE firm buys for business but is not a withholding agent. Ask a Paraguayan tax adviser ([04]).
- **Practical plan:** register under RG 114/2022 at the first sale to a non-withholding buyer; pay 4.5% INR monthly on those sales; pay a local accountant about US$50 a month for Form 90 (my estimate in [04]). The model books 4.5% of all cash as tax, which is conservative.
- **Who withholds?** A lot selling more than about 33 cars a year at about Gs 60m passes the Gs 2bn IRE SIMPLE ceiling (my arithmetic in [04]; average price unverified). The average reporting firm declares about 182 sales a year ([mem25]), so most RO filers are probably general-regime (inference).
- **Tax treaties.** Paraguay has treaties in force with Chile, Uruguay, Spain, Taiwan, Qatar and the UAE (DNIT statement, search summary in [04]; [DNIT on Chile][dnitchile]). A company in a treaty country may avoid the 4.5% unless the fee counts as a royalty (unverified; get advice). There is no treaty with the US, UK or most of the EU.

### Company: no local company in year 1, probably not in year 2

**Why not** ([04]):
- Buyers are businesses that can pay a foreign SaaS by card. The tax rules already expect them to withhold, or the provider to register by e-mail without an entity.
- **A local company needs a legal representative with a Paraguayan identity card** ([DNIT RG 34/25][rg34], via [04]). MIC's own guide starts company formation "con tu cédula en mano" ([MIC investor guide][mic]).
- It adds monthly VAT and corporate-tax filings, e-invoicing and an accountant, for revenue that starts under US$10,000 a year.

**Open a local EAS only if** ([04]):
1. more than a quarter of qualified dealers refuse to pay without a local e-invoice, and no partner will resell;
2. combined ARR (vehicles plus real estate) passes about US$60,000 and local invoicing would clearly lift sales;
3. you need to employ staff rather than contract them; or
4. you want local payment methods without dLocal.

**What a local company costs** ([04]):

| Item | EAS (simplified company) | S.A. or S.R.L. |
|---|---|---|
| Formation | 100% online through SUACE in about **72 business hours**; no minimum capital; no newspaper publication or Public Registry entry; the founder's foreign company can be the sole shareholder ([MIC guide][mic]) | Public deed and publication; 8-30 business days (S.A.), 15-30 (S.R.L.) ([mic]) |
| **Official fees, in person** | Not published for the EAS (unverified). A 2018 SUACE deck lists Asunción licence stamps of Gs 10,200 and a land-use report of Gs 115,000; the Gs 146,254 Public Registry fee no longer applies to an EAS ([SUACE deck][suace]). So **probably under Gs 500,000 (about US$90) and about 3 business days, if you hold a cédula** (my estimate) | Registry, notary and publication fees (unverified) |
| **With a lawyer, remotely by power of attorney** | **US$500-1,500** full-service ([LibertyMundo][liberty]); **US$1,500-4,000** with bank, e-invoicing and accounting set-up ([Golden Harbors][golden]). Both are commercial guides (unverified). 1-6 weeks including a bank account | US$4,000-8,000 ([liberty]) |
| Legal representative | Paraguayan cédula required. Founder residency, or a resident representative at about US$100-300 a month (my estimate, unverified) | Same |
| Founder residency, if wanted | Investor route: US$70,000 of investment and 5 formal jobs. Permanent-residency fee Gs 2,690,675 plus Gs 215,254 for the certificate; apostilled documents with sworn translation ([mic]) | Same |
| Bank account | Remote opening 1-4 weeks; source-of-funds and video checks ([liberty], unverified) | Same |

**Ongoing costs of a local EAS:** corporate tax (IRE) 10%, VAT 10%, 15% on dividends to a non-resident owner ([liberty]; [mic]); mandatory e-invoicing for new legal entities since 1 Apr 2025 ([DNIT][dnitfe]); an accountant at US$500-1,500 a year for simple work ([liberty]) or about Gs 1.0m-2.5m (US$175-440) a month for monthly VAT and IRE (B2 estimate); a resident representative at about US$1,200-3,600 a year. **Total about US$4,000-7,000 a year, plus US$1,500-4,000 to set up** (my estimate in [04]).

**Ongoing cost of selling from abroad:** about US$100 a month as this product's share of the foreign company's costs, plus about US$50 a month for the Form 90 accountant (model assumptions in [04]).

**Middle path: a local reseller.** A partner auditor or accountant buys seats at 30% off list, invoices the dealer in Gs with 10% VAT on a local e-invoice, collects locally, withholds the 4.5% INR, and wires us once a quarter. Dealers get a local invoice without a local company ([04]).

### Contracts and liability ([04]; [03])

- **What we are:** a software tool. Not legal advice, not the compliance officer, not the filer. The dealer keeps every Res 196 duty ([r196]).
- **Liability cap:** fees paid in the last 12 months. No liability for SEPRELAD sanctions, lost profits or indirect loss where the law allows (a lawyer must confirm enforceability).
- **Content promise:** a Paraguayan AML lawyer reviews every template; each shows the article it maps to and its review date; updates within 30 days of a new SEPRELAD resolution.
- **Records outlive the contract:** full export and a **free read-only archive for 5 years** after cancelling (Res 196 art. 20, 32).
- **ROS confidentiality:** role limits, logged views, never in the auditor's view unless the OC opts in.
- **Data:** the dealer is controller, we are processor; data-processing addendum from day 1; prepare for Ley 7593/2025 ([dp]).
- **Governing law:** the founder's home law with the Spanish text binding; ask whether Paraguayan law would build more trust. Click-through enforceability in Paraguay is (unverified).
- **Partners:** referral 20% of year 1 and 10% of renewals; reseller 30% off list; an adviser who files for a client does so under its own responsibility. Circular 2/2025 shows outside help is expected; whether an adviser may *submit* filings rests on a law-firm summary (unverified) ([c02v]; [c02]).
- **Insurance:** technology errors-and-omissions plus cyber cover, about US$1,000-2,500 a year (my estimate, unverified).

---

## 10. Financials

### Assumptions (file 04's model)

- **Months:** month 1 = Oct 2026; month 36 = Sep 2029. US$ at Gs 5,700; prices set in Gs.
- **Pool:** 845 paying firms (about 30 large), plus 875 registered non-payers and about 200 new registrants a year ([02]).
- **New paying firms, years 1 / 2 / 3:** low 20 / 25 / 25; base 50 / 65 / 65; high 90 / 110 / 110 (my estimate in [04]).
- **Blended yearly price per firm (base):** Gs 1.10m / 1.25m / 1.35m (US$193 / 219 / 237). 60% pay yearly; 40% monthly at a 20% premium.
- **Renewals:** base 70% first, 85% later (low 55/75; high 80/90).
- **Costs:** payment fees 6% of cash; INR 4.5% of cash; partner commissions on 35% of firms; AI tools US$300 a month for 3 months then US$200; hosting US$100-200 a month; PEP data US$100 a month from Jan 2027; lawyer US$3,000 then US$150 a month; insurance US$1,500 a year; contractor US$400-800 a month (base); marketing US$6,000 / 5,000 / 5,000; travel US$1,800 twice a year; foreign company and Form 90 US$150 a month. **No founder pay, no local company.**
- **My adjustment:** security test US$5,000 at launch and US$5,000 in months 14 and 26 (file 03's middle), instead of US$2,500 and US$2,000. That adds US$2,500 in year 1 and US$3,000 in years 2 and 3.

### Stand-alone vehicle product (file 04, with my security adjustment)

| Measure | Low | Base | High |
|---|---|---|---|
| Active firms at month 6 / 12 / 24 / 36 | 9 / 20 / 36 / 47 | 22 / 50 / 100 / 140 | 40 / 90 / 182 / 263 |
| Share of the 845 payers at month 36 | 6% | 17% | 31% |
| Practices (Estudio) at month 36 | 3 | 9 | 18 |
| ARR at month 12 / 24 / 36 (US$) | 4,000 / 8,000 / 11,600 | 12,300 / 27,300 / **41,400** | 25,800 / 57,300 / 90,700 |
| Cash in, years 1 / 2 / 3 (US$) | 2,800 / 7,400 / 11,000 | 8,600 / 24,600 / 38,900 | 18,200 / 51,300 / 84,800 |
| Costs, years 1 / 2 / 3 (US$), adjusted | 28,700 / 27,900 / 29,000 | 32,600 / 35,200 / 40,200 | 40,400 / 52,200 / 65,100 |
| **Year-3 profit before founder pay** | about -18,000 | **about -1,200** | about +19,800 |
| Cumulative cash at month 36 | about -64,500 (if not stopped) | **about -35,800** | about -3,300 |
| **Peak cash need, no founder pay** | Stopped at the month-6 gate after about 19,500 | **about 42,000 (month 27)** | about 31,000 (month 15) |
| Peak cash need with founder pay (US$2,000 then 3,000 a month) | - | about 95,800 | about 63,300 |

File 04's unadjusted base: year-3 profit US$1,800; peak cash US$33,700; US$27,300 down at month 36. Its own advice was to plan US$45,000 for a slow year or a weaker guaraní ([04]). With the security adjustment, **plan US$50,000 if vehicles are ever run stand-alone (path C)**.

**Base case by year (US$, adjusted).** Year 1: 50 firms, cash in 8,600, costs 32,600. Year 2: 100 firms, cash in 24,600, costs 35,200. Year 3: 140 firms, cash in 38,900, costs 40,200. Every October-December quarter loses money: it carries the security test, insurance, a trip and the slowest sales month ([04]).

**Sensitivity of the stand-alone base case** (file 04, unadjusted):

| Change | ARR month 36 | Year-3 profit | Peak cash |
|---|---|---|---|
| Base | US$41,400 | US$1,800 | US$33,700 |
| Guaraní weakens to Gs 7,000 | US$33,700 | -US$4,400 | US$40,800 |
| Prices 25% higher, same volumes | US$51,700 | US$9,900 | US$25,900 |
| First renewal 60% instead of 70% | US$38,600 | -US$400 | US$34,800 |
| No local contractor (founder does WhatsApp support) | US$41,400 | US$11,400 | US$22,800 |
| INR only 1.5% of cash | US$41,400 | US$2,900 | US$32,400 |

### As the Automotores module on the B2 engine (file 04)

Same sales. Only the extra costs count: US$1,500 of lawyer time then US$50 a month; 40% of a contractor; two-thirds of the marketing; US$400 trips; US$50 a month of PEP data and US$30 of hosting; payment fees, INR and commissions as before. B2 carries the engine, security tests, insurance, AI tools and company costs ([04]).

| Measure (US$) | Low | Base | High |
|---|---|---|---|
| Contribution, years 1 / 2 / 3 | -6,600 / -2,900 / -900 | **-3,100 / +10,200 / +21,300** | +1,800 / +28,700 / +56,000 |
| Peak cash need of the module | 10,600 | **3,400** | 3,000 |
| Cumulative at month 36 | -10,300 | **+28,500** | +86,500 |
| Trailing-12-month break-even | never | month 15 | month 12 |

- **This assumes vehicle sales start in December 2026 (path A).** On path B (paid launch July 2027), the curve shifts about 9 months later; my rough estimate is a year-3 contribution of about US$12,000-15,000 and a cumulative of about +US$10,000-15,000 at month 36.
- **Do not add this to B2's own model.** B2's base already counts car dealers from about month 7 ([B2 PLAN][b2plan]). This table shows what the vehicle vertical adds if it gets its own sales effort.

### Unit economics, base ([04])

| Measure | Value |
|---|---|
| Revenue per firm | US$193-284 a year, by year and billing |
| Acquisition cost | about US$230, plus about US$15 of commission |
| Gross margin after payment fees, INR, hosting and data | about 80% |
| Payback | 15-18 months |
| Lifetime | about 3.2 paying years of the first 5 (70% then 85% renewal) |
| Gross profit per firm over 5 years | about US$600 |
| Lifetime value / acquisition cost | **about 2.5** |

**What the numbers mean.**
- **Stand-alone vehicles do not pay a founder.** The base case is roughly break-even in year 3 and about US$36,000 down at month 36.
- **As a module they clearly pay.** Peak cash of about US$3,400 for about US$21,000 a year of extra profit by year 3 in the base case.
- **The limit is price and pool, not cost.** The biggest levers are dropping the paid contractor (+US$9,600 of year-3 profit), a 25% higher price (+US$8,100) and the guaraní (Gs 7,000 removes US$6,200) ([04]).
- **The low case shows itself early.** By March 2027 it has about 9 firms against about 22 in the base ([04]).

**Exit.** Small SaaS businesses sell at about 2-4 times owner profit; one analysis puts the median at 3.9x ([Livmo][livmo], via [04]). Stand-alone base: almost no value alone; a strategic buyer might pay 1-2 times revenue (US$40,000-80,000) for the customer list and SIRO know-how. High case: about US$70,000-180,000 (my estimates in [04]). **The realistic exit is the combined SEPRELAD engine**, sold or licensed to Devsys, Pirani or Criterion ([devsys]; [pirani]; [criterion]).

---

## 11. Regional expansion

The core travels: a sales and KYC log, cash thresholds, list checks with a log, a deadline calendar, templates and an auditor export. Each country needs its own rulebook, report formats and list sources ([02]; [04]).

| Order | Market | Size signal | What changes | When |
|---|---|---|---|---|
| 0 | **Paraguay real estate (B2), then jewellers and pawnshops** | Real estate 2,233 registered and 1,451 paying; jewellers 189; pawnshops 31 ([02]; [B2 PLAN][b2plan]) | Thresholds (150 minimum wages for real estate), templates, RO map. Same supervisor and SIRO | Same engine, now |
| 1 | **Ecuador** | **542 car dealers**, 4,446 real-estate and construction firms and 528 jewellers under the UAFE ([UAFE 2025 report][uafe]). New-car sales hit a record 15,281 in Aug 2026 ([Teleamazonas][ecsales]) | New ROS, "no ROS" and early-alert rules in force since 29 Apr 2026, with a 5-day ROS deadline ([NMS Law][nms]); 15% VAT on imported digital services (B2 dive); local rivals not checked (unverified) | Prepare from month 15; launch about months 20-24, together with B2's Ecuador real-estate push |
| 2 | Peru | Vehicle trading is listed among UIF-Perú obliged firms ([LP Derecho][pe]; detail unverified) | New rulebook | Year 3+, only if Ecuador works |
| - | Argentina, Mexico, Colombia | Dealers are obliged ([Ignacio Online][ar]; [Cuatrecasas][mx]; [normograma][co]) but local vendors exist (AMLify and others ([amlify])) | Crowded and price-sensitive | Skip for now |
| - | Uruguay, Bolivia | Car dealers not confirmed as obliged; Uruguay is crowded ([02]) | - | Skip |

**Ecuador is worth more for the shared engine than for vehicles alone:** 542 dealers is smaller than Paraguay's 845 paying firms, while its real-estate base is about three times Paraguay's (inference from [uafe] and [02]).

---

## 12. Risks and mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| **The vehicle RO format is unknown,** or SIRO will not take a bulk file from vehicle firms | Medium | High: the headline time saving rests on it | Capture SIRO screens in the live window (11-20 Oct); versioned field map; the copy sheet still works without bulk upload; ask for the JSON schema through a pilot ([03]) |
| **Low willingness to pay.** Warnings are common, fines rare; anchors are low | High | High | Sell hours saved on the RO and "audit-ready", not fear; Al día at Gs 49,000 as entry; test Gs 99,000 vs Gs 149,000 at Gate 1 ([04]) |
| **SEPRELAD absorbs features** (risk-matrix module pre-filled from RO data) | Medium | High | Focus on what SIRO will not hold: the sales and KYC log, screening log, documents, alert register, audit evidence. Import SEPRELAD outputs ([mem25]) |
| **The JSON switch locks out one-by-one entry** | Medium | Medium | Warn before switching; keep a fallback export; test every quarter's file against the schema ([json]) |
| **Small ceiling** (845 paying firms) | Certain | High | Build only as a module of the shared engine; Ecuador later |
| **Founder capacity** if vehicles ship with real estate in December | Medium | High | Strict path-A conditions; cut list; defer B2's low-value launch items ([03]) |
| **Audit waiver (Res 328/2026)** thins the auditor channel for small lots | Medium | Medium | Turn the waiver request into an Al día feature; keep a direct self-serve route ([r328]) |
| **Tax grey zone** on individual buyers (RG 114/2022) | High | Low | Register by e-mail and pay 4.5%; already in the model; get written advice ([rg114]) |
| **Card checkout loses cash-minded owners** | Medium | Medium | Reseller route with a local invoice; dLocal or a local EAS later |
| **Guaraní weakens** (Gs 7,000 cuts base year-3 profit by about US$6,200) | Medium | Medium | Variable costs; review Gs prices each January; price Distribuidor and Estudio in US$ if needed ([04]) |
| **Sales staff resist the KYC step** | Medium | Medium | Automatic simplified check; 5-minute flow; buyer self-fill link in v1 ([uh19]; [03]) |
| **Template liability** after a sanction | Low | Medium | Lawyer-reviewed, dated templates; "tool, not advice"; 12-month fee cap; insurance |
| **Breach of buyers' ID data or ROS drafts** | Low | High | Encryption, two-factor login, role limits, access log, external security test before launch and yearly, 72-hour incident plan |
| **Agent-written code hides security bugs** | Medium | High | Contract-first design, small pull requests, reviewer agent, founder's line-by-line review of auth, isolation, files and the confidential area; external test ([03]) |
| **Criterion, Devsys or an e-invoicing vendor builds the same** | Medium | Medium | Partner with Criterion early; lock in auditors; move first on SIRO-specific features |
| **Association conflict** (CADAM against used-car importers) | Medium | Low | Two separate tracks; no joint branding ([cadamuh]) |
| **Founder distance** from owner-run lots outside Asunción | High | Medium | WhatsApp-first support; a Guaraní-speaking contractor after Gate 3; two trips a year |
| **Rules change** (new FA, new RO fields, new national risk assessment) | High | Low | Rules, maps and templates as data; lawyer retainer; 30-day update promise ([mem25]) |
| **Thin PEP data** | Certain | Low | Signed declarations; partner database as an add-on; say plainly what is covered ([os]) |
| **Hosting in Brazil** under the new data law | Low | Medium | Transfer clause in the data-processing agreement now; lawyer's written view in week 0 ([dp]) |

---

## 13. Milestones and kill criteria

Dates follow §7. Targets are file 04's base case.

| When | Target (base) | Stop or pivot if |
|---|---|---|
| **Tue 20 Oct 2026** (RO window closes) | Vehicle RO screens captured from at least 1 real filing; JSON note sent | Not captured: path A is off; vehicles go to path B at best |
| **Fri 6 Nov 2026 (Gate 1)** | 12 vehicle interviews and 6 auditor interviews done; MVP working | **Fewer than 6 of 12 vehicle firms would pay Gs 99,000 a month, or fewer than 2 auditors with vehicle clients will pilot, or fewer than half the firms report more than 30 operations a quarter.** Then vehicles stay an unpriced B2 configuration, or stop ([04]) |
| **Thu 10 Dec 2026 (Gate 2, path A)** | Launch; at least 5 paying vehicle pilots; security test passed; templates signed off | Fewer than 3 paying pilots |
| **Sat 9 Jan 2027 (Gate 3)** | At least 6 paying vehicle firms; 1 active partner practice; pilots used the tool for the January RO | Fewer than 4 paying firms, or pilots did not use it for the RO |
| **31 Mar 2027 (month 6)** | 20+ paying vehicle firms (base about 22) | **Fewer than 10 (the low case). Stop vehicle-specific spending** |
| 30 Jun 2027 (month 9) | 35+ firms after the audit deadline; 2+ practices | Fewer than 15 |
| Sep 2027 (month 12) | About 50 firms; ARR about US$12,000 | Fewer than 25 firms |
| Dec 2027 - Mar 2028 | At least 65% of first-year firms renew | **First renewal below 55%** |
| Sep 2028 (month 24) | About 100 firms; ARR about US$27,000 | ARR below US$15,000: keep only as a light module |
| Sep 2029 (month 36) | About 140 firms; ARR about US$41,000 | Combined SEPRELAD-engine ARR below US$40,000 |
| Any time | | SEPRELAD launches a free tool that keeps client files or builds the RO from a sales list: re-plan within 30 days |

On path B, shift the vehicle targets from Gate 2 onward by about 7 months (paid launch July 2027).

---

## 14. Open questions to settle first

1. **Vehicle RO fields and JSON.** What does the vehicle RO screen hold today, and can vehicle firms switch to JSON as real-estate firms can? Answer by watching a live filing (11-20 Oct) and by the pilot's note to SEPRELAD ([01]; [03]; [json]).
2. **Willingness to pay.** Gs 99,000 or Gs 149,000 a month for Playa? Ask 12 firms ([04]).
3. **Auditors' prices and appetite.** What does a registered auditor charge a small lot, and will 2+ pilot? No price was found in three searches ([04]).
4. **Volume.** Do most firms really have more than 30 operations a quarter? The average is 86 among RO filers, but the median is unknown ([mem25]; [02]).
5. **Tax adviser:** is an individual lot owner or IRE SIMPLE firm a "consumidor final" under RG 114/2022? How does a general-regime buyer account for VAT on a card-paid foreign SaaS? Does a treaty-country company avoid the 4.5%? ([rg114]; [d6515])
6. **Cards:** do Paraguayan debit and small-business credit cards work with a foreign Stripe account charging PYG? Test with 5 pilots ([04]).
7. **Lawyer:** is a simple e-signature with a one-time code enough for the buyer's sworn source-of-funds and PEP declarations? Is the old Res 85/2015 Annex B form still required as is? May data sit in Brazil under Ley 7593/2025? ([03]; [sign]; [r85])
8. **Circular 2/2025:** does it let an outside adviser *submit* filings for a firm, or only prepare them? ([c02]; [c02v])
9. **SIFEN:** do used-car dealers fill the E770 vehicle group on their e-invoices, or only new-car dealers? Check pilots' XML ([sifen]).
10. **Does SIRO pre-fill the FA from ROs?** If yes, the FA calculator becomes a cross-check ([fai]).
11. **Data partners:** Compliance Paraguay's PEP database price and resale licence; Criterion's appetite to partner or to build ([cpy]; [criterion]).
12. **Associations:** who leads CIVU and Civemup today; does CADAM have a compliance committee or a collective code? ([02])

---

## 15. Next steps this week (Sat 10 - Sun 18 Oct 2026)

1. **Today or Monday: find 1-2 vehicle compliance officers who will let you watch their Q3 RO filing before Tue 20 Oct.** Ask through registered auditors with vehicle clients, starting with Cáceres & Schneider ([cs]; [lookup]). Record every SIRO field and error. Collect their sales sheet, a few invoices, a customs declaration and their last FA ticket.
2. **Have that pilot send the JSON note to SEPRELAD** (firm name, RUC, OC name, institutional e-mail to mesaentrada@seprelad.gov.py), after warning them that the switch closes one-by-one entry ([json]). In parallel, ask SEPRELAD's E-Porandu desk for the vehicle RO specification.
3. **Add vehicles to the B2 interview round:** book 12 vehicle firms (6 companies, 6 individual lots in Central, Ciudad del Este and Caaguazú) and 6 auditors with vehicle clients, from the register and auditor exports ([lookup]). Test Gs 99,000 against Gs 149,000 a month and ask auditors their fees.
4. **Extend the B2 lawyer brief** to the Res 196 templates (manual, code, OC act and notice pack, source-of-funds and PEP declarations) on a fixed fee, committed only after Gate 1 ([03]).
5. **Send the tax questions in §14 to a Paraguayan tax adviser.**
6. **Put the vehicle tables in the shared data model** (vehicle, operation, payment line, trade-in, customs declaration) and the vehicle rules in the content library ([03]).
7. **Landing page:** add a free 2027 vehicle-sector SIRO calendar ("RN hasta el 15 de enero, RO del 11 al 20") to collect leads ([04]).
8. **Check in the Stripe dashboard** that the founder's account can present prices in PYG ([stripecur]).

---

## Sources

The section files hold the full source lists and the detail behind each figure. The links used on this page:

**SEPRELAD law, rules and data (primary)**

- [Res 196/2020, vehicle-sector rule (Base Legal)][r196] · [Res 85/2015 with RO annexes][r85] · [Ley 1015/97, consolidated (SEPRELAD, June 2025)][ley] · [Res 328/2026, audit waiver or deferral][r328] · [Res 56/2026, canon 2026][r56] · [Res 50/2019, PEPs][r50] · [Circular 2/2025 (primary text)][c02] · [Circular 2/2025 summary (Vouga)][c02v] · [Res 435/2026, yearly data confirmation (Vouga)][r435] · [SEPRELAD Memoria 2025][mem25] · [SEPRELAD Memoria 2024][mem24] · [SIRO statistics portal][stats] · [SIRO register and auditor lookup][lookup] · [SIRO registration guide][siroguide] · [SEPRELAD notice on JSON bulk RO, 22 Aug 2025][json] · [SIRO manual for CI and AE uploads][ciae] · [Annual Form instructions, vehicle sector][fai] · [SEPRELAD vehicle-sector risk study][esr] · [SEPRELAD canon notice, 9 Jun 2026][canon] · [SEPRELAD, CI deadline extension (Res 158/2026)][p3836] · [SEPRELAD, UN-list notices in SIRO][p3639] · [SEPRELAD, Res 196 training with Criterion, 16 Sep 2026][p4381] · [SEPRELAD, forced SIRO data update, 2 Oct 2026][p4412] · [SEPRELAD trainings][cap] · [SEPRELAD FAQ (beneficial owner)][faq] · [GAFILAT Mutual Evaluation of Paraguay, 2022][mer]

**Other Paraguayan law and commentary**

- [Ferrere, random inspections (Res 36/21)][insp] · [Ferrere, Res 196/2020 summary][ferr196] · [Decreto 6225/2026, minimum wage][d6225] · [Infobae, minimum wage 2026][mw] · [Ferrere, holidays law][holidays] · [Ferrere, Ley 7593/2025 data protection][dp] · [Lawwwing, Ley 7593/2025][lawwwing] · [ABC Color, e-signature types (Aug 2026)][sign] · [BCP reference exchange rates][bcp]

**Tax, company and payments**

- [Decreto 6515/2021, INR on digital services][d6515] · [RG 114/2022, non-resident digital providers][rg114] · [DNIT RG 34/25 Annex 1][rg34] · [DNIT, e-invoicing designations][dnitfe] · [DNIT, Chile tax treaty][dnitchile] · [DNIT RUC register files][ruc] · [dplnews, banks as VAT agents][dplnews] · [ABC Color, VAT and INR on digital services][abc6380] · [EY Paraguay tax alert, Apr 2022][ey] · [beancount, IRE SIMPLE vs general (secondary)][simple] · [MIC/SUACE guide for foreign investors, 2025][mic] · [SUACE presentation with fees, 2018][suace] · [LibertyMundo, incorporating in Paraguay (secondary)][liberty] · [Golden Harbors, starting a business (secondary)][golden] · [Stripe supported currencies][stripecur] · [Stripe Ireland pricing][stripeie] · [Stripe US pricing][stripeus] · [Paddle supported countries][paddlecty] · [Paddle tax countries][paddletax] · [Lemon Squeezy supported countries][lemon] · [dLocal Paraguay docs][dlocal] · [dLocal, Paraguay payment methods][dlocalmkt] · [Wise, Itaú Paraguay wire fees][wise] · [InfoNegocios, cards and QR in Paraguay][cards]

**Market, competitors and channels**

- [Última Hora, car lots and SEPRELAD, Nov 2019][uh19] · [IP Paraguay, Civemup launch, 2018][civemup] · [Última Hora, CADAM on used cars][cadamuh] · [InfoNegocios, Expo Feria CADAM 2026][cadamexpo] · [Devsys clients][devsys] · [Pirani SEPRELAD page][pirani] · [HADA][hada] · [La Nación, Compliance Paraguay PEP database][cpy] · [Criterion S.A. prices][criterion] · [OpenSanctions, Paraguay][os] · [Clasipar compliance-officer ad][clasipar] · [Best Practices AML course][bp] · [Gestión Contable SEPRELAD course][gc] · [FOTRIEM diploma][fotriem] · [Cáceres & Schneider, SEPRELAD services][cs] · [Cáceres & Schneider, report deadlines][cs2] · [FactPy][factpy] · [AMLify][amlify] · [adwave, Facebook ad costs (global)][ads] · [Livmo, micro-SaaS valuation][livmo]

**Technology and data**

- [UN consolidated list XML][un] · [OFAC SDN XML][ofac] · [SIFEN vehicle group (pkuatia library)][sifen] · [Didit, cédula registry check][didit] · [AWS Lightsail pricing][lightsail] · [Anthropic, Claude Max price][claude] · [Blaze, penetration-test costs][pentest1] · [Redfox, penetration-test costs][pentest2]

**Regional**

- [UAFE Ecuador 2025 report][uafe] · [NMS Law, Ecuador UAFE rules 2026][nms] · [Teleamazonas, Ecuador car sales Aug 2026][ecsales] · [LP Derecho, UIF-Perú obliged firms][pe] · [Ignacio Online, Argentina UIF Res 71/2024][ar] · [Cuatrecasas, Mexico vehicle sales rule][mx] · [normograma, Colombia UIAF Res 101/2013][co]

**Sibling files**

- [01 Law and requirements][01] · [02 Market and competition][02] · [03 Product and tech][03] · [04 GTM, company and finance][04] · [B2 real-estate PLAN][b2plan]

[r196]: https://baselegal.com.py/docs/78668570-6ae3-11eb-990a-525400c761ca
[r85]: https://baselegal.com.py/docs/cd1c84e2-67c0-11eb-86f7-525400c761ca/doc
[ley]: https://www.seprelad.gov.py/transparencia/transparencia/ley10151997actualizada.pdf
[r328]: https://www.seprelad.gov.py/resoluciones/resoluciones/Res.%20328.26_Excepci%C3%B3n%20de%20auditor%C3%ADa%20externa.pdf
[r56]: https://www.seprelad.gov.py/resoluciones/resoluciones/RESOLUCION%20N%C2%B0%2056.pdf
[r50]: https://www.seprelad.gov.py/resoluciones/resoluciones/resolucion-n-50-19-por-el-cual-se-aprueba-el-reglamento-de-identificacion-de-personas-expuestas-politicamente.pdf
[r435]: https://www.vouga.com.py/en/seprelad-implementa-una-nueva-funcionalidad-para-la-actualizacion-y-confirmacion-de-datos/
[c02]: https://www.seprelad.gov.py/resoluciones/resoluciones/CIRCULAR%202-2025.pdf
[c02v]: https://www.vouga.com.py/en/la-seprelad-recuerda-plazos-y-obligaciones-de-reporte-a-los-sujetos-obligados/
[mem25]: https://www.seprelad.gov.py/wp-content/uploads/2026/02/Memoria-Anual-de-Gestion-Ano-2025.pdf
[mem24]: https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf
[stats]: https://www.seprelad.gov.py/siro/estadisticaExterna/estadistica.xhtml
[lookup]: https://www.seprelad.gov.py/siro/consultaExterna/consultaExternaSoAe.xhtml
[siroguide]: https://www.seprelad.gov.py/wp-content/uploads/2025/05/2-Inscripcion.pdf
[json]: https://www.seprelad.gov.py/?p=3156
[ciae]: https://www.seprelad.gov.py/resoluciones/resoluciones/manual-de-usuario-remision-informe-cumplimiento-s-o.pdf
[fai]: https://www.seprelad.gov.py/userfiles/files/resoluciones/06-22-instructivo-formulario-anual-automotores.pdf
[esr]: https://www.seprelad.gov.py/documentos/gu-a-de-riesgos-de-la-ft-del-sector-automotor.pdf
[canon]: https://www.seprelad.gov.py/?p=4035
[p3836]: https://www.seprelad.gov.py/?p=3836
[p3639]: https://www.seprelad.gov.py/?p=3639
[p4381]: https://www.seprelad.gov.py/?p=4381
[p4412]: https://www.seprelad.gov.py/?p=4412
[cap]: https://www.seprelad.gov.py/?cat=35
[faq]: https://www.seprelad.gov.py/?page_id=1810
[mer]: https://www.pj.gov.py/descargar/ID1-148_informe_de_evaluacion_mutua_de_paraguay_2022.pdf
[insp]: https://ferrere.com/es/novedades/inspecciones-aleatorias-de-seprelad-bajo-resolucion-36-21/
[ferr196]: https://ferrere.com/es/novedades/nuevo-reglamento-de-prevencion-de-lavado-de-activos-y-financiamiento-del-terrorismo-para-personas-fisicas-o-juridicas-involucrad/
[d6225]: https://impuestospy.com/impuestos/decreto-n-6225-2026/
[mw]: https://www.infobae.com/america/america-latina/2026/06/18/el-presidente-de-paraguay-reajusto-un-5-el-salario-minimo-supero-a-la-inflacion-y-alcanzara-los-usd-500/
[holidays]: https://ferrere.com/en/news/paraguay-promulga-ley-sobre-feriados-nacionales/
[dp]: https://ferrere.com/es/novedades/paraguay-adopta-su-ley-de-proteccion-de-datos-personales/
[lawwwing]: https://lawwwing.com/proteccion-datos-paraguay-7593-2025/
[sign]: https://www.abc.com.py/economia/2026/08/03/firma-electronica-sepa-las-diferencias-entre-la-cualificada-y-no-cualificada/
[bcp]: https://www.bcp.gov.py/webapps/web/cotizacion/monedas
[d6515]: https://impuestospy.com/impuestos/decreto-n-6-515-21/
[rg114]: https://impuestospy.com/impuestos/resolucion-general-n-114-2022/
[rg34]: https://www.dnit.gov.py/web/portal-institucional/w/resoluci%C3%B3n-general-dnit-n.%C2%B0-34/25-anexo-1
[dnitfe]: https://www.dnit.gov.py/web/portal-institucional/w/dnit-designa-nuevos-facturadores-electr%C3%B3nicos
[dnitchile]: https://www.dnit.gov.py/web/portal-institucional/w/nuevo-convenio-fortalece-la-cooperaci%C3%B3n-tributaria-entre-paraguay-y-chile
[ruc]: https://www.dnit.gov.py/web/portal-institucional/listado-de-ruc-con-sus-equivalencias
[dplnews]: https://dplnews.com/paraguay-servicios-digitales-agentes-de-retencion-son-los-bancos-y-operadoras-de-tarjetas-de-credito/
[abc6380]: https://www.abc.com.py/edicion-impresa/economia/gravaran-los-servicios-digitales-con-iva-y-renta-a-no-residentes-1815155.html
[ey]: https://ey.com/content/dam/ey-unified-site/ey-com/es-py/technical/tax/documents/tax-alert-abril-2022.pdf
[simple]: https://beancount.io/blog/2026/09/23/paraguay-ire-simple-vs-general-sole-proprietor-tax-regime-guide
[mic]: https://www.mic.gov.py/wp-content/uploads/2025/06/GUIA-PARA-INVERSIONISTAS-EXTRANJEROS.pdf
[suace]: https://mic.gov.py/wp-content/uploads/2024/12/PRESENTACION-SUACE.pdf
[liberty]: https://www.libertymundo.com/incorporate-in-paraguay/
[golden]: https://goldenharbors.com/articles/start-business-in-paraguay
[stripecur]: https://docs.stripe.com/currencies
[stripeie]: https://stripe.com/ie/pricing
[stripeus]: https://stripe.com/us/pricing
[paddlecty]: https://developer.paddle.com/concepts/sell/supported-countries-locales
[paddletax]: https://www.paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for
[lemon]: https://docs.lemonsqueezy.com/help/getting-started/supported-countries
[dlocal]: https://docs.dlocal.com/docs/paraguay
[dlocalmkt]: https://www.dlocal.com/payment-processors-in-latin-america/paraguay-payment-methods-processors-e-commerce-market-dlocal/
[wise]: https://wise.com/py/blog/transferencia-internacional-itau-paraguay
[cards]: https://infonegocios.com.py/y-ademas/asi-pagan-los-paraguayos-qr-y-billeteras-digitales-alcanzaran-cerca-de-200-millones-de-transacciones-este-ano
[uh19]: https://www.ultimahora.com/seprelad-el-50-playa-autos-eluden-el-control-antilavado-n2852685.html
[civemup]: https://www.ip.gov.py/ip/2018/04/05/presentan-camara-de-importadores-de-vehiculos-y-maquinarias-usadas-del-paraguay/
[cadamuh]: https://www.ultimahora.com/cadam-autos-usados-tenemos-que-dejar-ser-el-basurero-del-mundo-n2829808
[cadamexpo]: https://infonegocios.com.py/amp/infobrand/seguridad-seguros-acompana-la-expo-feria-cadam-2026-como-aseguradora-oficial-por-mas-de-dos-decadas-consecutivas
[devsys]: https://www.devsys.com.uy/clientes.html
[pirani]: https://www.piranirisk.com/es/hub-regulatorio/seprelad-prevencion-lavado-dinero-paraguay-siro
[hada]: https://hada.com.uy/
[cpy]: https://www.lanacion.com.py/negocios/2024/08/13/consultora-presenta-herramienta-que-identifica-a-personas-expuestas-politicamente/
[criterion]: https://www.criterion.com.py/index.php?pag=comprar
[os]: https://www.opensanctions.org/countries/py/
[clasipar]: https://clasipar.paraguay.com/motor/otros-rodados/servicio-de-oficial-de-cumplimiento-seprelad-1924578
[bp]: https://bestpractices.com.py/curso-taller-administracion-de-riesgos-ldft/
[gc]: https://gestioncontableparaguay.com/courses/curso-seprelad-6-hs-de-estudio/
[fotriem]: https://www.fotriem.edu.py/diplomado-en-prevencion-de-lavado-de-activos-y-financiacion-del-terrorismo-ft-fp/
[cs]: https://consultoria.com.py/prevencion-del-lavado-de-dinero-seprelad/
[cs2]: https://consultoria.com.py/caceres-schneider-informe-de-cumplimiento-seprelad-plazos-para-entrega/
[factpy]: https://factpy.com/
[amlify]: https://amlify.net/
[ads]: https://adwave.com/resources/facebook-ad-costs
[livmo]: https://livmo.com/blog/micro-saas-valuation/
[un]: https://scsanctions.un.org/resources/xml/en/consolidated.xml
[ofac]: https://sanctionslistservice.ofac.treas.gov/api/PublicationPreview/exports/SDN.XML
[sifen]: https://github.com/IonysDev/pkuatia/blob/4d138aad1f5ba7c2474876ec2dd9504fdfb72de9/src/Core/Fields/DE/E/GVehNuevo.php
[didit]: https://didit.me/blog/paraguay-cedula-database-validation/
[lightsail]: https://aws.amazon.com/lightsail/pricing/
[claude]: https://support.claude.com/en/articles/11049744-how-much-does-the-max-plan-cost
[pentest1]: https://www.blazeinfosec.com/post/how-much-does-penetration-testing-cost/
[pentest2]: https://www.redfoxsec.com/blog/how-much-does-web-application-penetration-testing-cost-2026-pricing-guide
[uafe]: https://www.uafe.gob.ec/wp-content/uploads/downloads/2026/rendicion_cuentas/Informe_de_RC_publicado_en_pag_web.pdf
[nms]: https://nmslaw.com.ec/blog/2026/05/11/ecuador-uafe-nuevas-directrices-reporte-operaciones-alertas/
[ecsales]: https://www.teleamazonas.com/actualidad/noticias/economia/venta-vehiculos-ecuador-rompe-record-agosto-2026-127216/
[pe]: https://lpderecho.pe/sbs-norma-prevencion-lavado-activos-financiamiento-terrorismo-uif-peru/
[ar]: https://www.ignacioonline.com.ar/nuevos-montos-certificacion-de-origen-de-fondos-automotores/
[mx]: https://www.cuatrecasas.com/resources/enajenacion-de-vehiculos-uif-redefine-actividad-vulnerable-690d15e91c3a6067710025.pdf
[co]: https://normograma.com/keralty/compilacion/docs/resolucion_uiaf_0101_2013.htm
[b2plan]: ../paraguay-b2/PLAN.md
[01]: 01-law-and-requirements.md
[02]: 02-market-and-competition.md
[03]: 03-product-and-tech.md
[04]: 04-gtm-company-finance.md
