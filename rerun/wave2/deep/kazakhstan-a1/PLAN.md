# Kazakhstan: licence and inspection readiness for private kindergartens — full plan

Combined plan from four deep-research parts (written 9-10 Oct 2026):

- [01 Law and product requirements](01-law-and-requirements.md): Law 148-VIII, Order 268 (licence rows 73-82), the filing rules, the fines, the two official inspection checklists, and 72 testable product requirements, each traced to a legal text.
- [02 Market and competition](02-market-and-competition.md): buyer counts from official statistics and the Damu fund's analysis, buyer pain, price anchors, competitors, channels and regional expansion.
- [03 Product and technical design](03-product-and-tech.md): users, features, flows, screens, data model, architecture, security, hosting in Kazakhstan, the agent-based build plan and the build budget.
- [04 Go-to-market, company and finance](04-gtm-company-finance.md): pricing, channels, 90-day launch, payments and tax, company setup, the 36-month model, exit and kill criteria.

Background: the [lead data](../items/kazakhstan-a1.json) and the [A1 report](../reports/kazakhstan-a1.md). The report's "Re-assessment (owner's criteria)" scored the idea 6/10.

Every fact below is sourced in those files. The key sources are repeated here. This page reconciles the files where they disagree and gives one plan. "My estimate" marks numbers derived here. "(unverified)" marks facts nobody could confirm. Money: tenge, with US$ at 500 tenge per US$ as in the section files. The bank rate was about 452-487 in October 2026, so US$ figures are slightly understated ([informburo](https://informburo.kz/cards/registraciya-too-v-rk-posagovoe-rukovodstvo), per the 04 file).

---

## 1. Decision in one page

**Verdict: worth a cheap, staged test with hard kill criteria. On Kazakhstan alone it is a small side business, not a living. It becomes more only if the same engine later serves private schools and colleges, or Uzbekistan.**

**New score: 5.5/10** (re-assessment: 6/10; first pass: 5/10; challenge round: 4/10). The deep dive made the duty more certain and the build cheaper. It also made the money smaller and selling from abroad harder. On balance the case is slightly weaker.

### The case for it

- **The duty is new, in force and hard to dodge.**
  - From 1 Jan 2027, preschool education is a licensed activity for every kindergarten, private or state, including sole traders ([Law 148-VIII](https://old.adilet.zan.kz/rus/docs/Z2400000148)).
  - Ten rows of the qualification requirements (rows 73-82) set hard tests. They include 75% of teachers on main-job contracts, 20% with a teaching category, 36 hours of training every 3 years, premises owned or leased for at least 5 years, an edu.kz web domain and anti-terror equipment ([Order 268](https://old.adilet.zan.kz/rus/docs/V2500037500)).
  - Without a licence a kindergarten cannot operate and loses its state funding ([zakon.kz, 10 Jun 2026](https://www.zakon.kz/sovety-yurista/6520878-kakie-detskie-sady-zakroyut-s-novogo-goda-gotov-sadik-letom.html)). About 96% of private kindergartens meet the state-order placement rules ([Tengri](https://tengrinews.kz/tengri-institutions/novyie-pravila-chto-jdt-chastnyie-detsadyi-v-kazahstane-594367/amp/)).
- **The state portal only takes the file.** eGov or elicense.kz receives the signed e-request, seven data forms and the fee ([Order 248](https://old.adilet.zan.kz/rus/docs/V2500037314)). Nothing checks readiness first, computes the staff shares, tracks expiring training or keeps the evidence. On 1 Oct 2026 owners asked for "a single list of clear and achievable requirements" ([informburo](https://informburo.kz/novosti/vladelcy-castnyx-detsadov-v-kazaxstane-poprosili-edinyx-pravil-licenzirovaniia)). That sentence is the product brief.
- **Inspections keep the need alive after licensing.**
  - Since 1 Feb 2026, budget-funded children's organisations, including private kindergartens on the state order, can be checked without notice ([Law on the Rights of the Child, Art. 52-4](https://old.adilet.zan.kz/rus/docs/Z020000345_)).
  - A monthly desk check sends recommendations that must be acted on within 10 working days, or a visit follows (same law, Art. 52(7)-(13)).
  - In 2023, 7,497 preschool inspections found violations in 90.7% of cases, and 4,027 officials were fined 1.12 billion tenge in total ([finratings.kz](https://finratings.kz/news/533-v-kazakhstane-milliardnye-shtrafy-dushat-chastnye-detsady/)).
- **Nobody sells this job.** Forty searches in Russian, Kazakh, English and Uzbek found no product and no named service that prepares a kindergarten for the licence or for inspections (02 file). The nearest tools do other jobs: a children's-centre CRM ([Umai](https://www.umaicrm.com/)), legal templates ([Dogovor24](https://dogovor24.kz/subscription)) and state attendance apps ([zakon.kz](https://www.zakon.kz/stati/6420659-verifitsiruy-menya-ili-zachem-kazakhstanskim-roditelyam-navyazyvayut-novoe-prilozhenie-dlya-detsadov.html)). There is no partial or overpriced incumbent to displace; the gap is open.
- **It is cheap and quick to build.** No government integration is possible or needed. MVP in about 3-4 weeks, sellable on Monday 7 Dec 2026 for about US$13,000 of cash (section 7). Hosting costs US$50-700 a month from 50 to 1,000 customers (03 file).

### What the deep dive changed (compared with the re-assessment)

- **The law is now confirmed from primary texts.** The re-assessment could not open the order. The deep dive read the law, the ten rows, every column of the seven data forms, the 30-working-day process, the fee (10 MRP, 43,250 tenge in 2026) and the fines (01 file).
- **The licence has no time limit** ([Law on Education, Art. 57(3-1)](https://old.adilet.zan.kz/rus/docs/Z070000319_)). The "Licence File" is truly a one-off sale. All lasting revenue must come from inspection readiness, and no buyer has yet confirmed they would pay for that.
- **The recurring duties are better documented than thought.** There are two graded official checklists (29 items from the quality committee, 9 from the child-rights committee), the monthly desk check with legal deadlines, staff thresholds that move with every hire, a 5-year category clock, a 3-year training clock and 6- and 12-month staff medical checks (01 and 03 files).
- **Personal data must be stored in Kazakhstan** ([Personal Data Law, Art. 12(2)](https://old.adilet.zan.kz/rus/docs/Z1300000094)). Hosting must be local. This does not force a local company, because Kazakh hosting can be rented from abroad ([Yandex Cloud non-resident FAQ](https://yandex.cloud/ru-kz/docs/billing/qa/non-resident); [Serverspace Almaty](https://serverspace.io/services/vps-server/vps-in-kazakhstan)).
- **Selling from abroad works cleanly only to the owner as a private person.** Paddle collects Kazakhstan's 16% VAT on consumer (B2C) sales ([Paddle tax list](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)). A kindergarten company that pays a foreign seller may have to withhold 10-20% tax and gets no local e-invoice ([PwC](https://taxsummaries.pwc.com/kazakhstan/corporate/withholding-taxes); [Uppersetup](https://uppersetup.com/ru/blog/withholding-tax-in-kazakhstan-2026-services-royalties)). So a small local company (TOO) is likely needed by about month 8-10.
- **The money is smaller.** Base-case billings in year 3 are about 45.5 million tenge (US$91,000), against about US$130,000 in the re-assessment. Profit before founder pay is about 13 million tenge (US$26,000). The gap comes from a lower subscription price (7,900 tenge a month list, about 6,900-7,900 effective, against 10,000-12,500 in the re-assessment) and from real costs: a local salesperson, a lawyer and a methodist (04 file).
- **Mini-centres drop out of the buyer pool.** Most of the 2,964 mini-centres are state units. In Kostanay only 5 of 335 were private ([Damu PDF](https://damu.kz/poleznaya-informatsiya/damu_analytics/analitika/Анализ%20сектора%20частного%20образования%20в%20РК.pdf), p. 7; [Kostanay plan](https://www.gov.kz/uploads/2024/1/20/f091ca262b59cbd7a7d3867019dd45b7_original.294208.docx)).
- **Demand timing is still unclear.** The law has no transition clause ([Law 148-VIII](https://old.adilet.zan.kz/rus/docs/Z2400000148)). But the Ministry promises a phased move "taking into account each organisation's readiness" ([24.kz, 13 May 2026](https://24.kz/ru/news/social/768260-litsenzirovanie-detskikh-sadov-predprinimateli-opasayutsya-novykh-pravil)), North Kazakhstan plans 3 years ([MTRK](https://mtrk.kz/ru/2026/07/24/licenzirovanie-detskikh-sadov-startu/)), and owners asked for a transition period on 1 Oct 2026 ([informburo](https://informburo.kz/novosti/vladelcy-castnyx-detsadov-v-kazaxstane-poprosili-edinyx-pravil-licenzirovaniia)). No legal act sets a schedule.

### What it is worth

From the 04 file's 36-month model (month 1 is November 2026). The founder builds with AI agents and takes no pay. Million tenge, US$ in brackets.

| | Low | Base | High |
|---|---|---|---|
| Licence Files sold, years 1-3 | 440 | 945 | 1,650 |
| Paying subscribers at month 12 / 36 | 39 / 92 | 135 / 347 | 312 / 920 |
| Gross billings, year 3 | 12.8 (US$26,000) | **45.5 (US$91,000)** | 112.0 (US$224,000) |
| Profit before founder pay, year 3 | -6.8 | **+13.2 (US$26,000)** | +51.0 (US$102,000) |
| Peak cash need | 30.3 (kill criteria stop it near 10-15) | **10.3 (US$21,000)** | 7.0 (US$14,000) |
| Possible sale value at month 36 (my estimate) | — | 50-100 (US$100,000-200,000) | higher |

- **Kazakhstan alone pays for itself but not for a founder.** With founder pay of 1.0-1.5 million tenge a month from year 2, the base case is still cash-negative at month 36 (04 file).
- **The main lever is the number of Licence Files.** A 30% shortfall wipes out most of the profit (04 file sensitivities).

### Key conditions

1. **Owners will pay.** By 15 Nov 2026, at least 8 of 15 interviewed owners say they would pay 40,000 tenge or more for the File. Later, at least 25% of File buyers keep the subscription after the 3 free months.
2. **One association or the Atameken chamber co-markets it.**
3. **Content is right.** A Kazakh education lawyer and a methodist sign off every rule and form before launch.
4. **A local person speaks to customers.** A Russian- and Kazakh-speaking part-timer from month 1, full-time from month 4.
5. **Payment works from abroad.** Kazakh cards pass the Paddle checkout at least 85% of the time, or invoice buyers accept a local reseller until a TOO exists.
6. **No "free and automatic" shock.** The government does not announce automatic licences for state-order kindergartens together with a free official self-check.

### What to do first (8 weeks, about US$15,000 including a local part-timer and pre-launch marketing)

1. **This week:** book 15 owner interviews through the associations; contract a lawyer and a methodist; apply to Paddle; rent hosting in Kazakhstan and test paying for it from abroad.
2. **By about 23 Oct:** put the free 15-minute self-check online. It needs no personal data, so it can go live before the rest.
3. **By 6 Nov:** MVP feature-complete. Then a penetration test, pilots with 10-15 kindergartens, lawyer sign-off, and **paid launch on Monday 7 Dec 2026**.
4. **Check the kill criteria** on 15 Nov 2026, 31 Jan, 30 Apr and 31 Oct 2027 (section 13).

### Where the files disagreed, and what this plan uses

| Topic | What the files say | This plan uses | Why |
|---|---|---|---|
| Buyer count | 6,205 private (statistics, 2024) or 6,526 (Ministry, 2026); the lead data also counted mini-centres and camps | **6,500 private preschools**, plus about 400 new a year; mini-centres and camps left out | Mini-centres are mostly state units; camps have their own licence (section 3) |
| Licence File price | 50,000-100,000 tenge (re-assessment); 40,000-60,000 (02); 49,000 (04) | **49,000 tenge**, including 3 months of subscription | About the state fee; below Dogovor24's cheapest pack (section 8) |
| Subscription price | 8,000-15,000 a month (re-assessment); 5,000-10,000 (02); 7,900 (04) | **7,900 list; about 6,900 effective** in year 1 | A third of a daily-use CRM; budgets are thin |
| Launch date | 1 Dec (04) or 7 Dec (03) | **Monday 7 Dec 2026** | Fits the owner's 6-8 weeks; room for pen-test fixes; Kazakh from day one (section 7) |
| Cost to sellable | US$6,000-18,200 (03); the 04 model's lines sit at the upper-middle | **About US$13,000 product; about US$15,000 cash to launch** | 04 values inside 03 ranges, plus a local part-timer and pre-launch marketing |
| Hosting cost | 25,000-35,000 tenge a month at 50 customers (03); 80,000 (04) | 04 figure in the model | A cushion; servers are a small cost either way |
| Paddle in Kazakhstan | "not confirmed" (03); "B2C, 16% VAT" (04) | **04 is right**, checked on Paddle's tax page | Section 9 |
| Local company | Not needed for hosting (03); TOO by month 8-10 (04) | **Launch without one; open a TOO when a trigger is met** | Not legally needed; worth about 5-6 million tenge a year of profit (section 9) |
| Year-3 money | Revenue US$58,000 / 130,000 / 255,000 (re-assessment); US$75,000-205,000 (02); billings US$26,000 / 91,000 / 224,000 (04) | **04 model** | Prices from real anchors; costs included (section 10) |
| Demand timing | Lawyer: everyone on 1 Jan; Ministry and regions: phased over about 3 years; older talk of a schedule to 2030 | **Peak in Jan-Feb 2027, then phased to 2029** | About 20 licensors at up to 30 working days each cannot license everyone at once (section 2) |
| Children's data | 01 lists a children register; 03 holds counts only | **Counts only** in the MVP | Less sensitive data; development cards sit in NOBD (section 5) |
| What the subscription contains at launch | 04 promises tracker, journals and plans; 03 schedules them after launch | **Tracker and journals by end-Feb 2027; plans by end-Jun 2027** | The first paid subscription months start in March 2027 (section 5) |

---

## 2. Why now: the law and enforcement

**Who is obliged.** From 1 Jan 2027, anyone running a preschool programme needs the licence sub-type "provision of preschool education and training". This covers legal entities of any ownership and, for the first time, sole traders (ИП) ([Law 148-VIII, Art. 1(7)(26)](https://old.adilet.zan.kz/rus/docs/Z2400000148)). It is a non-transferable class 1 licence. Clubs that teach young children without the preschool programme stay under notification (new Art. 57-1, same law). Children's camps have their own licence and are out of scope ([SKO department](https://www.gov.kz/memleket/entities/control-sko/press/news/details/1247472?lang=ru)).

**What the licence demands (rows 73-82 of Order 473, added by [Order 268](https://old.adilet.zan.kz/rus/docs/V2500037500); rows 79 and 81 restated from 12 Jul 2026):**

| Row | Requirement | Hard test or exemption |
|---|---|---|
| 73 Curricula | Working curricula; long-term plans, cyclograms and child development cards approved by the head | — |
| 74 Staff | Teachers with teaching education or retraining | **At least 75% on main-job contracts; at least 20% with a category** (not below 2 groups) |
| 75 Materials | Teaching kits (Order 216) and play materials (Order 70) | Data form 2 |
| 76 Medical | Medical room and a medical licence or contract | **Not needed with 3 groups or fewer** |
| 77 Catering | Catering unit with a sanitary conclusion | Data form 4 |
| 78 Premises | Owned, held in trust or management, or **leased for at least 5 years**; sanitary conclusion and fire act per building | Whether "5 years" is total or remaining term is open (03 file) |
| 79 Equipment | Equipment per Order 70; group sizes per Order 385; **edu.kz domain**; lockers and beds for every child; anti-terror equipment per Order 117 | Part-day mini-centres need no beds |
| 80 Training | **At least 36 hours at least once in 3 years**; heads trained in 3 years | Data form 8 covers 5 years |
| 81 Data | Current NOBD data and an "education management information system" matching it | What counts as the system is unclear |
| 82 Special needs | Conditions for children with special educational needs (Order 92) | — |

**How the licence is filed** ([Order 248](https://old.adilet.zan.kz/rus/docs/V2500037314)):
- Online on eGov or elicense.kz, signed with the head's e-signature (ЭЦП).
- Seven one-off data forms (1-КК to 6-КК and 8-КК) plus e-copies of documents.
- Completeness check in 2 working days; document check and site visit within 22; decision within 30. The commission looks at photos and video of the premises ([MTRK](https://mtrk.kz/ru/2026/07/24/licenzirovanie-detskikh-sadov-startu/)).
- Fee 10 MRP: 43,250 tenge in 2026, about 46,930 in 2027 if the draft MRP of 4,693 is adopted ([bes.media](https://bes.media/news/mrp-4-693-tenge-minimalnaya-zarplata-85-tysyach-chto-zalozhili-v-byudzhet-kazahstana-na-2027-god/)).
- The licence covers one region, with an annex for each building. A move, rename or reorganisation means a re-issue ([Law on Education, Art. 57(4), (6)](https://old.adilet.zan.kz/rus/docs/Z070000319_)).
- **No time limit** on the licence (Art. 57(3-1), same law).

**Fines and sanctions for a small business** ([Code on Administrative Offences](https://old.adilet.zan.kz/rus/docs/K1400000235); tenge at the 2026 MRP of 4,325):

| Breach | Article | Fine |
|---|---|---|
| Working without a licence (from 2027) | 463 | 25 MRP (108,125) plus confiscation of income |
| Breaching licence requirements | 464(1) | 45 MRP (194,625), with or without suspension |
| Repeat breach, or false data at filing | 464(2) | 100 MRP (432,500), with or without loss of licence |
| Breaching the model rules or state standard | 409 | 15 MRP plus suspension |
| Anti-terror breaches | 149 | 200 MRP (865,000) |
| Sanitary breaches | 425 | 160 MRP (692,000) |

A suspension lasts up to 6 months. During it the kindergarten cannot bid for state-order places or admit new children ([Law on Education, Art. 57(5)](https://old.adilet.zan.kz/rus/docs/Z070000319_)). For a business living on state money, that is the real threat. In 2024, 58 schools were fined for working without a licence ([kapital.kz](https://kapital.kz/gosudarstvo/131843/v-kazakhstane-oshtrafovali-58-shkol-za-ot-sut-stviye-litsenzii.html)), which is the template for kindergartens.

**Inspections, after the licence:**
- Preschools are "high risk" in both of the Ministry's risk systems ([CQA criteria](https://old.adilet.zan.kz/rus/docs/V1500012777); [CPCR criteria](https://old.adilet.zan.kz/rus/docs/V2600038978)).
- **Planned checks** for high-risk budget-funded organisations at most once a year. **Unscheduled checks** with no notice, on complaints, media reports, prosecutors' demands or repeated failure to report fixes ([Child Rights Law, Art. 52-4](https://old.adilet.zan.kz/rus/docs/Z020000345_)).
- **Monthly preventive control without a visit** matches NOBD and other data. A recommendation comes within 5 working days; the kindergarten objects within 5 or acts within 10. Failure puts it on the list for a visit (Art. 52(7)-(13), same law).
- The sanitary committee runs its own unannounced checks. It found sanitary violations in 60% of kindergartens it checked ([azattyq-ruhy](https://rus.azattyq-ruhy.kz/avtory/103634-u-70-shkol-i-60-detsadov-byli-sanitarno-epidemiologicheskie-narusheniia-minzdrav-o-proverkakh-bez-preduprezhdenii/amp); [bizmedia](https://bizmedia.kz/2026-02-02-proveryat-vnezapno-detsady-i-shkoly-kazahstana-budet-komitet-sanepidkontrolya/)).
- Officials promise no fine at a first planned visit ([24.kz, Dec 2025](https://24.kz/ru/news/social/744959-kakie-organizatsii-zhdut-vnezapnye-proverki)). Fines and suspensions stay for those who ignore orders.

**The two official checklists are a ready-made product spec.**
- Quality committee (CQA), 29 preschool items, each graded gross, significant or minor. Gross items include training certificates, 5-yearly category confirmation, NOBD match, curricula, long-term plans, diplomas, barred persons, age grouping and not publishing the self-assessment on the website ([CQA criteria](https://old.adilet.zan.kz/rus/docs/V1500012777)).
- Child-rights committee (CPCR), 9 items revised in June 2026: parent contracts; at most 3 special-needs children per group; no unlawful expulsions; a 4-week menu; daily menu matching it; premises; anti-terror equipment; an anti-terror passport agreed with police; disability conditions ([CPCR criteria](https://old.adilet.zan.kz/rus/docs/V2600038978)).

**Other recurring duties** (01 file): anti-terror instruction twice a year and an anti-terror journal ([Order 117](https://old.adilet.zan.kz/rus/docs/V2200027414)); fire drills every 6 months ([Order 55](https://old.adilet.zan.kz/rus/docs/V2200026867)); 17 medical and food logs ([ҚР ДСМ-59](https://old.adilet.zan.kz/rus/docs/V2100023469)); staff chest X-ray every 12 months and lab tests every 6 months ([ҚР ДСМ-131/2020](https://old.adilet.zan.kz/rus/docs/V2000021443)); category attestation every 5 years ([Order 83](https://zakon.uchet.kz/rus/docs/V1600013317)); a yearly 9-criteria self-assessment ([Order 486](https://zakon.uchet.kz/rus/docs/V2200031053)); daily NOBD attendance for state-order places ([Order 381](https://old.adilet.zan.kz/rus/docs/V2200029323)). Teachers may be asked for only three documents: a long-term plan, a weekly cyclogram and a development card per child ([informburo](https://informburo.kz/novosti/vospitateli-detskih-sadov-teper-dolzhny-budut-zapolnyat-tolko-tri-dokumenta)). Demanding more is itself an offence (CoAO Art. 409(7-3)). The product must cut paperwork, not add to it.

**Regional differences.** The law is national, but about 20 regional departments issue licences and inspect (count unverified). Atameken says one region accepts an existing kindergarten's building while another demands a change of land or building use ([informburo, 1 Oct 2026](https://informburo.kz/novosti/vladelcy-castnyx-detsadov-v-kazaxstane-poprosili-edinyx-pravil-licenzirovaniia)). A change of designated use costs 5-30 million tenge ([zakon.kz](https://www.zakon.kz/sovety-yurista/6435574-detskie-sady-v-zhilykh-domakh-mogut-zakryt-kakie-imenno-i-pochemu.html)) or 20-40 million in documents alone ([inbusiness.kz](https://inbusiness.kz/index.php/ru/news/kazahstan-riskuet-ostatsya-bez-poloviny-chastnyh-detsadov)). Software cannot fix that, but it can flag it first.

**Timing: what we assume.**

| Date | Event | Source |
|---|---|---|
| In force since 1 Feb 2026 | Unannounced checks of budget-funded children's organisations | [Child Rights Law, Art. 52-4](https://old.adilet.zan.kz/rus/docs/Z020000345_) |
| June-July 2026 | New CPCR checklist; rows 79 and 81 restated; anti-terror data must go into NOBD | [CPCR criteria](https://old.adilet.zan.kz/rus/docs/V2600038978); [Order 268](https://old.adilet.zan.kz/rus/docs/V2500037500); [Order 117](https://old.adilet.zan.kz/rus/docs/V2200027414) |
| 1 Jan 2027 | Licensing starts; notification for preschools ends; no one can apply earlier | [Law 148-VIII](https://old.adilet.zan.kz/rus/docs/Z2400000148); [zakon.kz](https://www.zakon.kz/sovety-yurista/6520878-kakie-detskie-sady-zakroyut-s-novogo-goda-gotov-sadik-letom.html) |
| 2027-2029 (practice, not law) | Existing kindergartens licensed in phases; North Kazakhstan: more than 200 of 429 in 2027; East Kazakhstan counts 381 to license | [MTRK](https://mtrk.kz/ru/2026/07/24/licenzirovanie-detskikh-sadov-startu/); [gov.kz VKO](https://www.gov.kz/memleket/entities/control-vko/press/news/details/1269193?lang=kk) |
| Pending | Atameken's request for a transition period and softer rules; a proposed 1-2 year moratorium on SME checks (child-safety checks would likely stay) | [informburo](https://informburo.kz/novosti/vladelcy-castnyx-detsadov-v-kazaxstane-poprosili-edinyx-pravil-licenzirovaniia); [digitalbusiness.kz](https://digitalbusiness.kz/2026-09-30/v-kazahstane-mogut-vernut-moratoriy-kotoriy-do-sih-por-vspominayut-s-teplom/) |

**Reconciled view on timing.** The lawyer's "everyone applies on 1 January" ([zakon.kz](https://www.zakon.kz/sovety-yurista/6520878-kakie-detskie-sady-zakroyut-s-novogo-goda-gotov-sadik-letom.html)) and the Ministry's "phased" roll-out disagree. About 20 licensors each taking up to 30 working days cannot license 12,000 organisations in a month, so phasing will happen in practice. I use the 04 model's assumption: File demand peaks in January-February 2027 and then runs through 2029, with about 400 new private kindergartens a year on top. A strict January cut-off would be upside. A formal transition period would push sales later, which is why the subscription must carry the business.

---

## 3. Customers

**Reconciled buyer counts.** The files agree on the core pool. I use **6,500 private preschool organisations** in 2026.

| Segment | Count | How the plan uses it | Source |
|---|---|---|---|
| All preschool organisations | 11,681 (statistics, 2024); 11,909 (Ministry, Apr 2026) | Context | [Damu PDF](https://damu.kz/poleznaya-informatsiya/damu_analytics/analitika/Анализ%20сектора%20частного%20образования%20в%20РК.pdf) p. 2, 7; [Tengri](https://tengrinews.kz/tengri-institutions/novyie-pravila-chto-jdt-chastnyie-detsadyi-v-kazahstane-594367/amp/) |
| **Private preschool organisations** | **6,205 (2024); 6,526 (Apr 2026)** | **Core pool: 6,500** | same |
| ...in the five biggest areas: Turkestan 1,119; Almaty region 994; Almaty city 826; Shymkent 554; Astana 518 | 4,011 (65%) | First target | Damu PDF p. 8 (02 file's sum) |
| ...in the north | Pavlodar 16; North Kazakhstan 19 | Ignore | Damu PDF p. 8 |
| Net new private organisations a year | about 400 (4,570 in 2020 to 6,205 in 2024) | Each needs a licence before opening | 02 file arithmetic |
| Kindergartens with Damu-backed loans since 2010 | about 1,660 | First outreach list: formal, bank-using owners | Damu PDF p. 19 |
| Mini-centres | 2,964, mostly state (Kostanay: 5 private of 335) | **Excluded** | Damu PDF p. 7; [Kostanay plan](https://www.gov.kz/uploads/2024/1/20/f091ca262b59cbd7a7d3867019dd45b7_original.294208.docx) |
| State preschools | 5,476 | Out of scope; akimats buy through procurement | Damu PDF p. 7 |
| Adjacent: private schools / private colleges | 828 / 326 | Expansion step 1 | Damu PDF p. 2 |

**Where the files differed.** The lead data spoke of "about 6,500 private kindergartens and related operators (mini-centres, camps)". The deep dive keeps the 6,500 but drops mini-centres (mostly state) and camps (separate licence). The re-assessment's revenue left mini-centres out already, so nothing changes in the numbers.

**Who the buyer is.**
- **A single-site small business.** The average private organisation has about 84 children (518,984 children / 6,205 organisations) and the sector averages about 8-9 teachers per organisation (02 file arithmetic from the Damu PDF).
- **Mostly state money.** In Kostanay in 2023 the state paid 52,954 tenge per child a month and parents 20,880. The 64 private kindergartens on the state order there received about 69 million tenge each a year ([Kostanay plan](https://www.gov.kz/uploads/2024/1/20/f091ca262b59cbd7a7d3867019dd45b7_original.294208.docx), 02 file division). Losing the licence means losing that.
- **Thin margins and rented premises.** In 2020, 70% of private kindergartens in the capital rented their space and owners said they were "on the verge of closing" ([inbusiness.kz](https://inbusiness.kz/ru/news/chastnye-detsady-v-kazahstane-na-grani-razoreniya)). Rural owners rent too (80% per [finratings.kz](https://finratings.kz/news/533-v-kazakhstane-milliardnye-shtrafy-dushat-chastnye-detsady/)).
- **The owner is usually a woman and often a former teacher or head** ([informburo, Jul 2022](https://informburo.kz/novosti/vladelcy-castnyx-detsadov-grozyat-zabastovkoi-iz-za-vvedeniya-licenzirovaniya)). The head and a methodist do the paperwork; in small kindergartens they are often the same person (02 file, unverified).
- **They already keep most documents** for the state order. An association chair said in 2022: "We just didn't get the licence itself; we always submitted all the other documents" ([informburo, Jul 2022](https://informburo.kz/novosti/vladelcy-castnyx-detsadov-grozyat-zabastovkoi-iz-za-vvedeniya-licenzirovaniya)). So the job is **gap-finding and putting the file into the licence format**, not starting from zero.
- **They are tired of apps.** Officials have made kindergartens photograph children daily and collect fingerprints ([informburo](https://informburo.kz/novosti/v-kyzylorde-cinovniki-obyazali-castnye-detskie-sady-ezednevno-fotografirovat-detei)). Parents struggled with the ED24 app ([zakon.kz](https://www.zakon.kz/stati/6420659-verifitsiruy-menya-ili-zachem-kazakhstanskim-roditelyam-navyazyvayut-novoe-prilozhenie-dlya-detsadov.html)). One more app must clearly save work.

**The jobs, in their words** (03 file):
1. "Tell me now if we will get the licence, and what to fix first."
2. "Fill in the seven forms correctly, so the commission does not send them back."
3. "Tell me which papers to scan for each requirement, and name them so the inspector finds them."
4. "Keep our 75% and 20% staff shares and everyone's training and category dates under control."
5. "Be ready for an inspector who arrives without warning."
6. "Answer a recommendation within 10 working days, so it does not turn into a visit."
7. "Get our edu.kz site up and put the self-assessment on it."
8. "Write the yearly plans and weekly cyclograms in the official form without extra work."
9. For chains: "One screen that shows which site is at risk."

**What they pay or risk today** (02 and 04 files):

| Anchor | Amount |
|---|---|
| State licence fee | 43,250 tenge (2026) |
| Dogovor24 legal templates, cheapest yearly pack | 60,000-75,000 tenge ([Dogovor24](https://dogovor24.kz/subscription)) |
| Umai CRM for children's centres | US$41-49 a month, about 20,000-25,000 tenge ([Umai](https://www.umaicrm.com/)) |
| General licence help from lawyers on Kaspi | "from 15,000" or "from 50,000 tenge"; none for kindergartens ([Kaspi](https://obyavleniya.kaspi.kz/almaty/uslugi/delovye-uslugi/yuridicheskie-uslugi/k--%D0%BB%D0%B8%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D0%B8/)) |
| One paid teacher-training course | 57,000 tenge ([informburo](https://informburo.kz/novosti/57-tysiac-tenge-za-povysenie-kvalifikacii-o-narusenii-prav-pedagogov-zaiavili-v-minprosvete)) |
| Average fine per fined official, 2023 | about 278,000 tenge ([finratings.kz](https://finratings.kz/news/533-v-kazakhstane-milliardnye-shtrafy-dushat-chastnye-detsady/), 02 file division) |
| Kindergarten licence preparation as a product | **no price found anywhere** |

---

## 4. Competition

| Alternative | What it does | Price | What it means for us |
|---|---|---|---|
| eGov / elicense.kz | Filing, fee, e-signature | Free | A channel, not a competitor. It takes the file but checks nothing ([zakon.kz](https://www.zakon.kz/stati/6515172-zachem-vvodyat-litsenzirovanie-detsadov-v-kazakhstane-i-kak-poluchit-razreshenie-na-rabotu.html)) |
| Regional quality departments | Public briefings on the requirements | Free | **The main free substitute.** General, not site by site. Also a source of regional notes ([MTRK](https://mtrk.kz/ru/2026/07/24/licenzirovanie-detskikh-sadov-startu/)) |
| NOBD | National education database; data entry is row 81 | Free | Must be kept current; no readiness logic. A checklist item, not a rival |
| ED24 / e-orda / Indigo | State-ordered attendance and enrolment; footer names «КДС-ФРАНЧАЙЗИНГ» | Paid by akimats | Not a rival today. **The most likely fast follower**, because it is in every state-order kindergarten (unverified intent) ([ed24.kz](https://ed24.kz/)) |
| Ministry's automated development card | One row-73 document | Free | Link to it; do not rebuild it ([bizmedia](https://bizmedia.kz/2024-08-26-v-kazahstane-poyavilis-individualnye-karty-razvitiya-rebenka)) |
| Umai CRM | Attendance, payments, parent app; 961 centres registered | US$49 / 129 / 299 a month | Adjacent; no compliance features. **Partner or reseller** ([Umai](https://www.umaicrm.com/)) |
| BALAM, ZERO | Parent and club apps | Not published | Adjacent; small ([newtimes.kz](https://newtimes.kz/obshchestvo/157867-cifrovizaciya-v-obrazovanii-kazahstanka-pridumala-mobilnoe-prilozhenie-dlya-detsadov)) |
| Dogovor24 | Generic legal and HR templates | 60,000-1,360,000 tenge a year | Partial for HR documents; a **price anchor** ([Dogovor24](https://dogovor24.kz/subscription)) |
| Ybcase and lawyers on Kaspi | General licence help; no preschool package | No price / from 15,000-50,000 | Weak substitute; **partners** for paid reviews ([Ybcase](https://ybcase.com/fintech/polucit-licenziu-na-obrazovatelnuu-deatelnost-v-kazahstane)) |
| Instagram methodists and plan sites | Long-term plans, cyclograms | Not found | Partial substitute for a plans module (unverified) |
| Associations and Atameken | Advice and lobbying | Membership | **Channel first.** Risk: a free association checklist would undercut a paid one-off File |

**Conclusion.**
- **No incumbent does the job, fully or partly, at any price.** The owner's "partial or overpriced incumbent" test does not even apply; the gap is open (02 file).
- **The real threat is a free list from a trusted body** (the Ministry, an association) or a free module from the ED24 vendor. A static list cannot do the ongoing work: staff thresholds recomputed as people come and go, expiry alerts, stored evidence per checklist item, and deadlines after inspections. So the defensible product is the running file, and the one-off File is the door-opener.
- **Partner, do not fight.** Offer the associations a co-branded free self-check and a member discount. Offer Umai a referral deal. Approach the ED24 vendor in year 2 for an integration or licence.

---

## 5. Product

### Positioning

> **"Licence-ready and inspection-ready, in one list."** In Russian, for example: «Лицензия и проверка — по одному списку».

Working name from the 03 file: **"Daiyn"** (Kazakh for "ready"), a placeholder.

- **Free self-check (15 minutes, no login, no personal data).** Ten coloured tiles for rows 73-82 and the top risks. It is the lead magnet and the association give-away. It also blunts a free checklist from anyone else.
- **Licence File (one-off).** The full row-by-row gap check with computed staff shares, the seven data forms in Russian and Kazakh, a field-by-field "copy sheet" for the portal, and a named evidence pack. It includes 3 months of the subscription.
- **Inspection-Ready (subscription).** The running file: staff register with alerts, the two official checklists as self-audits with stored evidence, an "inspection binder" for unannounced visits, and deadline tracking after inspections.
- **Lead with what is new.** Most owners already hold state-order documents (section 3). The pitch is "find your gaps against the new licence rows and fill in the forms", not "build your file from scratch" (02 file).
- **Three trust rules.**
  - Preparation, not a guarantee. The licensor decides, and land and premises problems are always marked "needs an expert".
  - We never ask for the owner's e-signature keys. The head files and signs on eGov herself. KZ-CERT has warned about online "kindergarten services" that collect e-signature keys ([Tengri](https://tengrinews.kz/kazakhstan_news/obieiavleniia-o-detskix-sadax-nazvali-opasnymi-375426/)).
  - It replaces paperwork. One electronic record, printed on demand, never a second paper copy (CoAO Art. 409(7-3); [Order 130](https://old.adilet.zan.kz/rus/docs/V2000020317)).

### Users

| Role | Who | Main jobs | Rights |
|---|---|---|---|
| **Owner** (учредитель / құрылтайшы) | Founder of the LLP or sole trader | Decides on premises and lease; pays; sees all sites | Everything, including billing and users |
| **Head** (заведующий / меңгеруші) | Legal head; fined as an "official" | Approves the report; signs and files on eGov; handles inspectors and recommendations | Everything in own sites |
| **Methodist** (методист / әдіскер) | Does the paperwork; often the same person as the head | Staff register, plans, training and category records, evidence | Edit everything except users and billing |
| **Teacher** (воспитатель / тәрбиеші) | About 8-9 per organisation | Uploads own diplomas and certificates by link | Own records only; no full account needed |
| **Administrator or nurse** | Facilities and medical staff | Sanitary, fire and anti-terror evidence; drill logs | Building and journal sections |
| **Consultant or association partner** (v1) | Licensing consultants, accountants, association staff | Prepares several clients | Delegated access, granted and revoked by the owner |
| **Content editor** (internal) | Our lawyer and methodist | Edits rules, questions, templates, regional notes; signs off versions | Admin console only; no customer data |

Design consequences (03 file): phone first (360 px, one-tap camera upload); Russian and Kazakh on every screen and document from day one, because the five biggest areas are in the south ([Language Law, Art. 21](https://old.adilet.zan.kz/rus/docs/Z970000151_)); Excel import for staff; no extra reports for teachers.

### Feature map

This merges the 03 file's build plan with the 04 file's packaging. **Where they differed:** the 04 file's Inspection-Ready plan lists plan templates, an inspection tracker and journals, which the 03 file schedules after launch. Because every File includes 3 free months, the first paid subscription months start in March 2027. So the tracker and journals must ship by the end of February 2027, and the plans module by the end of June 2027, before the August-September season.

| Area | MVP (sellable 7 Dec 2026) | v1 (by end Feb 2027 / by end Jun 2027) | Later |
|---|---|---|---|
| Lead capture | Free public self-check with a PDF result and e-mail capture | Explainer pages per row and per region in both languages | Association-branded versions |
| Profile | Organisation (BIN/IIN, legal form, region, state order, new or existing); buildings (tenure, lease dates, areas, rooms); groups (age band, regime, places, enrolment, special-needs count, beds, lockers) | Multi-site and consultant views (Feb) | Chains and franchises |
| Readiness check | Rows 73-82 split into about 60-80 testable items; applicability rules; red/amber/green per row; "fix first" list with land, premises and lease on top; regional notes; fine estimator | Re-check history | Anonymous regional benchmarks |
| Staff | Register with every data-form-1 field; live 75% and 20% shares; 36-hour training clock; 5-year category clock; medical-check and criminal-record dates; Excel import | Teacher self-upload by link | Certificate OCR |
| Licence forms | Forms 1-КК to 6-КК and 8-КК in Russian and Kazakh (DOCX, XLSX, PDF); portal copy sheet; rules version stamped on each output; fee and 30-working-day timeline | Re-issue wizard (Feb) | Portal hand-off if an API appears |
| Evidence | Locker per requirement and per building; camera upload; JPG to PDF; expiry dates; ZIP licence pack with an index; site-visit photo checklist | Version history | OCR of dates on conclusions and contracts |
| Inspections | CQA 29 and CPCR 9 items as self-audits with severity and evidence; printable inspection binder; visit-trigger warnings | Tracker for recommendations (10 working days) and orders, with alerts; inspection log (Feb) | Mock inspection by a partner |
| Journals | — | Anti-terror instruction and drill journal; fire drill journal; printable for lacing and sealing (Feb) | Menu planner |
| Plans | Checklist: do the three teacher documents exist and are they approved? | Long-term plans and weekly cyclograms in the official forms; template library per age group (Jun) | AI-drafted text, labelled as such |
| Self-assessment and website | edu.kz domain check | Order 486 score from the data; one-page edu.kz site hosted in Kazakhstan, in both languages (Feb-Jun) | Full site builder |
| Notifications | E-mail; Telegram bot; weekly digest | WhatsApp through a business provider | SMS for critical alerts |
| Billing | Paddle card checkout for the File and the subscription; invoice PDF | Association discount codes; reseller seats | Kaspi Pay and local invoices once a TOO exists |
| Content console | Rules, questions, templates and regional notes as versioned data with effective dates and sign-off | Law-watch alerts on source-text changes | Content API for partners |

**Children's data stays out.** The 01 file lists a children register (requirements 47-49) and parent consents (requirement 70). The 03 file holds only counts per group in the MVP. I follow the 03 file: it removes the most sensitive data, and development cards for pre-school groups live in NOBD anyway ([Order 130](https://old.adilet.zan.kz/rus/docs/V2000020317)). Add a children register only if pilots ask for it.

### Key flows

1. **Self-check to paid File (15 minutes to a result).** An owner opens a link from an association or a search. She answers 25-30 questions about the organisation, not about people. She sees ten tiles and the three biggest risks, gets the PDF by e-mail, and can buy the File. Her answers carry over.
2. **Onboarding (under 90 minutes for a 6-group kindergarten).** Organisation, buildings, groups, staff by Excel template, then guided evidence uploads ("scan your lease", "photograph the sanitary conclusion"). Result: a red/amber/green report, a fix list with owners and dates, and items marked "needs a lawyer or building expert".
3. **Prepare and file.** When the rows are green or accepted amber, the head generates the seven forms and the ZIP. She logs in to eGov or elicense.kz with her own e-signature, fills or uploads the forms, attaches the copies and pays 43,250 tenge. She records the application number; the app counts 2, 22 and 30 working days, and a 2-day objection window if a pre-refusal notice arrives ([Order 248](https://old.adilet.zan.kz/rus/docs/V2500037314)).
4. **Staff change.** A teacher leaves or joins. If the main-job share falls below 75% or the category share below 20%, the head is alerted the same day with the number of hires needed. A new hire is prompted for a diploma, a medical book and a criminal-record certificate (free through eGov Mobile, [egov.kz](https://egov.kz/cms/ru/news/criminal_mobile)).
5. **Unannounced inspection.** The head opens the inspection binder on her phone in two taps. After the visit she records recommendations, orders or fines, which become tasks with legal deadlines.
6. **Monthly recommendation (v1).** A recommendation from the desk check is logged with its date. The app counts 5 working days to object and 10 to act and report, with alerts.
7. **Yearly cycle (v1).** Regrouping in August; long-term plans before 1 September; weekly cyclograms; self-assessment published on the edu.kz site; anti-terror instruction and fire drills twice a year; category and training alerts all year.
8. **Consultant (v1).** A consultant sees a list of clients with readiness scores and missing items, and works in each file under the owner's audit trail.

### Screens

1. Public self-check (one question per screen, progress bar, language switch, ten-tile result card).
2. Dashboard (readiness per site, ten row tiles, next 5 actions, 30-day deadlines, two gauges for the 75% and 20% shares, last inspection).
3. Requirement page per row (plain rule, legal source and effective date, questions, computed checks, evidence slots per building, regional note).
4. Staff list (table on desktop, cards on phone; filters "missing data" and "expiring in 90 days"; Excel import; export to form 1-КК).
5. Staff card (education, employment, category, training, medical and record checks, documents).
6. Buildings and groups (lease remaining-term bar; group size against the legal maximum).
7. Evidence locker (grid by row and building; empty slots in red; camera button).
8. Licence pack (seven forms × two languages × three formats; copy sheet; ZIP; rules-version banner).
9. Inspection binder (29 + 9 items by severity; print; "record an inspection").
10. Tasks and calendar.
11. Settings (users, roles, notifications, billing, export, deletion).
12. Admin console, internal (versioned rules and templates, diff view, sign-off, golden-test runner).

### Requirements list

The full list is in [01-law-and-requirements.md, "PRODUCT REQUIREMENTS"](01-law-and-requirements.md#product-requirements): **72 testable requirements** in seven groups, each with its legal basis. The MVP covers:
- **A. Profile and applicability:** 1-8 (including the fine estimator).
- **B. Readiness check, rows 73-82:** 9-25. Requirements 19-20 (equipment norms and teaching kits item by item) start as yes/no checklists, because Orders 70 and 216 have not yet been read item by item.
- **C. Filing pack:** 26-33. Requirement 29 is a hard rule: no code path accepts an e-signature key file.
- **D. Inspection readiness:** 34-36 and 41 in the MVP; 37-40 and 42-43 (trackers, inspection log, self-assessment, website checks) in v1.
- **E. Registers and records:** 44-46 in the MVP; 50-63 (plans, councils, menus, medical logs, anti-terror and fire journals, NOBD reminders) in v1; 47-49 (children register) only on demand.
- **F. Legal content management:** 64-67, all in the MVP.
- **G. Data protection, security and hosting:** 68-69 and 71-72 in the MVP; 70 (parent consent) only if children's data is added.

---

## 6. Technical design

**One plain monolith, built for AI agents and hosted in Kazakhstan** (03 file).

| Layer | Choice | Why |
|---|---|---|
| Framework | Python 3.12, [Django](https://www.djangoproject.com/) 5 | Admin console for content for free; mature auth and forms; built-in Kazakh (kk) translation; agents write it well |
| UI | Server-rendered templates, [HTMX](https://htmx.org/), a little Alpine.js, Tailwind | Fast on cheap phones; no separate front-end build |
| Database | PostgreSQL 16 with row-level security as a second tenant guard | One store for data, jobs and search |
| Jobs | [Procrastinate](https://procrastinate.readthedocs.io/) (queue inside PostgreSQL) | No Redis to run |
| Documents | [docxtpl](https://docxtpl.readthedocs.io/), openpyxl, [Gotenberg](https://gotenberg.dev/), img2pdf, qpdf | Exact Word layouts of the official forms; the lawyer edits wording in Word |
| Files | S3-compatible storage in Kazakhstan, encrypted; [ClamAV](https://www.clamav.net/) scan on every upload | Keeps files in the country |
| Web server | Caddy with automatic TLS, including on-demand TLS for customers' edu.kz sites | .kz sites need TLS and local hosting ([domain rules, p.16, p.27](https://old.adilet.zan.kz/rus/docs/V1800016654)) |
| Errors and logs | [GlitchTip](https://glitchtip.com/), self-hosted | Logs hold personal data, so they stay in Kazakhstan |
| Tests | pytest; [Playwright](https://playwright.dev/) at phone and desktop widths; golden content tests | Agents need fast, strict feedback |
| Deployment and backups | Docker Compose on one VM, then two; GitHub Actions; [WAL-G](https://github.com/wal-g/wal-g) continuous backup to a second Kazakh provider | A solo founder can run it; survives the loss of one provider |

**Rules as data.** Requirements, rules, questions, checklists and regional notes live as versioned YAML with a source URL, an effective date, a reviewer and a sign-off state ("draft", "lawyer approved", "live"). Each rule has golden test cases signed by the lawyer. CI refuses a content change that breaks one. Every assessment and generated form records the rules version used.

**Integrations: none, on purpose.** No public applicant API was found for eLicense or NOBD (03 file). The product outputs a copy sheet (for typed fields), an XLSX in the official layout and DOCX/PDF files (for uploads). Whichever way the portal works, one fits. The real portal format is confirmed with the first pilot filing in January 2027. E-signature (NCALayer) is not needed, because the head signs on the portal.

**Hosting in Kazakhstan, bought from abroad.**
- Prices: hoster.kz sells a 4 vCPU / 8 GB / 200 GB cloud server for 23,040 tenge (about US$46) a month ([hoster.kz](https://hoster.kz/cloud/)). Yandex Cloud's Kazakhstan region prices in tenge and accepts non-residents ([pricing](https://yandex.cloud/ru-kz/docs/compute/pricing); [FAQ](https://yandex.cloud/ru-kz/docs/billing/qa/non-resident)). Serverspace bills in euro by card for servers in Almaty ([Serverspace](https://serverspace.io/services/vps-server/vps-in-kazakhstan)).
- **Reconciled choice.** The 03 file prefers hoster.kz or PS Cloud for the app, with Yandex's Kazakh object storage for backups. Whether hoster.kz and PS Cloud bill a foreign company by card is unverified. So in week 1: try hoster.kz or PS Cloud first; if either refuses, use Serverspace Almaty for the app. Keep backups at a second Kazakh provider either way.

**Security and privacy baseline (MVP).**
- TLS, HSTS, strict content security policy; two-factor login required for owner and head; role-based access plus row-level security; automated cross-tenant read tests on every endpoint.
- Files virus-scanned, encrypted, served by short-lived signed links; append-only audit log; continuous database backup, nightly file sync, monthly restore drill.
- Agents work only on synthetic data. The founder reviews every change to authentication, tenancy and file access by hand. Static scans (Semgrep, Bandit, pip-audit) in CI. **External penetration test before launch**, then yearly.

**What we refuse to hold.**
- Children's names, health and development data: not in the MVP (counts only).
- The anti-terror passport: marked "for official use", so the app stores only its status and dates, never the file ([Order 117](https://old.adilet.zan.kz/rus/docs/V2200027414)).
- Criminal-record certificates: status and date only; the file only if the head chooses, visible to owner and head.
- Medical checks: dates only, no diagnoses.

**Personal Data Law duties** ([Personal Data Law](https://old.adilet.zan.kz/rus/docs/Z1300000094)): storage in Kazakhstan (Art. 12(2)); cross-border transfer only to protective countries or with consent (Art. 16), which matters for the e-mail and payment providers; consent collected by the kindergarten as employer, with our template; a data-processing agreement in both languages; an incident runbook (Art. 25). The AI law in force since January 2026 requires labelling AI-generated content ([Forbes.kz](https://forbes.kz/articles/zakon-ob-iskusstvennom-intellekte-vstupil-v-silu-v-kazakhstane-7179c3)). Any AI-drafted plan text is labelled and no personal data goes to an AI service.

**Running cost** (03 file estimates, tenge a month):

| | 50 customers | 300 customers | 1,000 customers |
|---|---|---|---|
| Hosting, storage, e-mail, messaging, monitoring, domains | about 25,000-35,000 (US$50-70) | about 80,000-115,000 (US$160-230) | about 240,000-340,000 (US$480-680) |
| Per customer | about US$1.0-1.4 | about US$0.5-0.8 | about US$0.5-0.7 |

**Reconciliation.** The 04 model books 80,000-160,000 tenge a month for hosting and messaging from the start. That is higher than the 03 file's estimate at small scale. I keep the 04 figure in the financials as a cushion. Either way, servers are 2-10% of subscription revenue. The real running cost is content upkeep by the lawyer and methodist.

---

## 7. Development steps

### Reconciled timeline

The 03 and 04 files differ by a week. The 03 file has the MVP feature-complete on 6 Nov, the penetration test in week 5 and paid launch on **Monday 7 Dec 2026**. The 04 file has the MVP by 1 Nov, the security test in weeks 6-7 and launch on 1 Dec.

**I use the 03 file's calendar.** It matches the owner's rule of an MVP in about 3 weeks and a sellable product in 6-8 weeks. It leaves room to fix pen-test findings and to run pilots. It also builds Kazakh from day one, which the south needs. The cost of the extra week is small: almost nobody can file before 1 January anyway ([zakon.kz](https://www.zakon.kz/sovety-yurista/6520878-kakie-detskie-sady-zakroyut-s-novogo-goda-gotov-sadik-letom.html)), and the phased roll-out spreads demand over 2027-2029.

### Agent work streams (MVP)

The founder and one agent build the foundation and freeze the data-model contracts on day 4. Then each stream owns one Django app in its own git worktree and branch. The founder merges at least daily. A review agent checks every pull request for tenancy, file access, translations and tests (03 file).

| Stream | Scope | Agent-days (03 estimate) |
|---|---|---|
| WS0 Foundation (days 1-4) | Repo, Docker, CI; Django skeleton; two-factor login; organisation, site and membership models; roles; row-level security; Russian and Kazakh set-up; component set; Playwright harness; 3 fictional fixture kindergartens; CLAUDE.md | 4 |
| WS1 Rules engine and content model | Requirements, rules, questions, assessments; YAML loader; applicability; scoring; golden tests; admin console with versions and sign-off | 6-8 |
| WS2 Staff register | Staff, education, category, training, medical and record checks; Excel import; share and expiry calculations | 5-7 |
| WS3 Buildings, groups, equipment | Group-size, beds and lockers checks; lease-term check; anti-terror group logic | 4-6 |
| WS4 Forms and licence pack | Seven forms in two languages; DOCX, XLSX, PDF; copy sheet; ZIP with index | 6-8 |
| WS5 Evidence and inspections | Uploads, scan, encryption, signed links, expiry; CQA and CPCR self-audits; binder PDF | 5-7 |
| WS6 Tasks and notifications | Task engine; reminders; e-mail; Telegram; weekly digest | 3-4 |
| WS7 Self-check, landing, billing | Public wizard; PDF result; landing pages in both languages; Paddle checkout and webhooks | 4-5 |
| WS8 QA and security (continuous) | Phone-width end-to-end tests; tenant-isolation suite; static scans; PR reviews | continuous |
| Content (people plus a drafting agent) | Plain text for about 60-80 items, 29 + 9 checklist items, form notes, regional notes, terms and consents; Russian then Kazakh | 15,000-25,000 words |

Total about 37-49 agent-days. With 4-6 agents in parallel this fits about 3 calendar weeks. **Founder review is the bottleneck** (about 10-12 hours a day in weeks 1-4). If review falls behind, move billing to a manual invoice and Telegram to v1, and keep the self-check on time.

### Calendar (start Monday 12 Oct 2026)

| Week | Product and content | Engineering | Sales and pilots | Legal checkpoint |
|---|---|---|---|---|
| 1 (12 Oct) | Agents draft the requirement map; contract lawyer and methodist; 8-10 owner calls | WS0; contracts frozen Thursday | Landing page "Licence from 1 January 2027: check in 15 minutes"; waitlist; book 15 interviews | **LC0:** lawyer scope and first questions (lease reading, non-lawyer advice, consents, cross-border e-mail) |
| 2 (19 Oct) | Methodist reviews self-check questions | WS1, 2, 3, 5, 7 in parallel; **public self-check live about 23 Oct** | Share through Atameken and associations; interviews with price test (29,000 / 49,000 / 79,000 tenge) | **LC1:** requirement map and thresholds approved |
| 3 (26 Oct) | Form notes; checklist texts; Kazakh drafts | WS4, WS6 start; tenant tests | Recruit 10-15 pilots in Almaty, Almaty region, Shymkent, Turkestan, Astana | |
| 4 (2 Nov) | Kazakh proofreading of UI and documents | **MVP feature-complete Fri 6 Nov**; bug bash; restore drill; load test with 300 synthetic kindergartens | Two friendly kindergartens try it live | **LC2:** forms approved in both languages |
| 5 (9 Nov) | Terms, data-processing agreement, privacy notice, staff consent | **External penetration test (3-5 days)** | Pilot onboarding, free; **kill check 1 on 15 Nov** | **LC3:** terms and consents approved |
| 6 (16 Nov) | Content fixes from pilots | Fix and retest | Pilot week 2; founder trip to Almaty and Astana; sign 1-2 consultant partners | |
| 7 (23 Nov) | FAQ and short videos in both languages | Hardening; monitoring; data export | "Would pay" answers; first association deal; reseller template | **LC4:** lawyer mock-checks 3 real pilot packs |
| 8 (30 Nov) | Launch materials | Release candidate; definition-of-done check; Paddle live | Founding-price offer ready | |
| **7 Dec** | **Paid launch** | Fixes | Webinars; WhatsApp outreach; ads test | Law-watch for any transition decision |
| Jan-Feb 2027 | Record the real portal format from first filings | Tracker for recommendations and orders; journals; edu.kz site; consultant view; re-issue wizard | "Day 1 of licensing" campaign | Adjust the copy sheet to the real portal |
| Mar-Jun 2027 | Plan templates per age group | Plans module; self-assessment score; second pen test | Upsell before the school year | |

**Fallback if the build slips: a concierge Licence File.** If the MVP is not feature-complete by 13 Nov, sell the File as a service from week 3. The owner fills a staff and building spreadsheet on an upload page on the Kazakh server (never Google Sheets or foreign e-mail, because of Art. 12(2)). The methodist or founder runs it through the same templates and returns the forms and an evidence checklist. Little work is lost, because the templates and rules are reused (03 file).

### MVP definition of done

1. 8 of 10 pilot kindergartens with about 6 groups get from sign-up to a complete licence pack in **under 90 minutes** of their own work.
2. The seven forms match the official column order and wording in Russian and Kazakh. The lawyer's mock check of 3 pilot packs finds no missing column or document.
3. The staff shares and expiry rules pass at least 40 lawyer-signed golden tests, including the fewer-than-2-groups and 3-group exceptions.
4. Group-size, bed, locker and lease checks pass for all three fixture kindergartens.
5. The binder covers all 29 + 9 checklist items with severity and prints to PDF.
6. Reminders fire correctly in an automated 3-year time-travel test.
7. All data, files, backups and logs are in Kazakhstan; a restore has been tested.
8. Tenant-isolation tests pass; no open high or critical pen-test findings.
9. Every screen works at 360 px; both languages are complete everywhere.
10. Every requirement shows source, effective date and sign-off; LC1-LC3 signed.
11. At least 5 pilot kindergartens say they would pay the planned price.

### Build budget (cash, founder unpaid, no hired developers; US$)

| Item | To sellable (12 Oct-7 Dec) | v1 (Jan-Jun 2027) | Basis |
|---|---|---|---|
| AI coding tools (2 top-tier seats for 2 months, plus overflow) | 800-1,600 | 1,200-2,400 | 03 file; [Claude pricing](https://claude.com/pricing) |
| Lawyer: requirement map, form templates, terms, consents, mock check | 900-3,500 | law-watch 900-3,400 | 03 file (unverified rates) |
| Methodist: questions, plain text, regional notes; later plan templates | 500-1,600 | 650-1,900 | 03 file |
| Kazakh translation and proofreading | 600-1,500 | 300-800 | 03 file |
| Penetration test and retest | 1,500-4,000 | 500-1,500 | 03 file; [7asecurity](https://7asecurity.com/blog/2025/11/web-app-pen-test-cost/) |
| Hosting, backups, e-mail, domains, monitoring | 150-300 | 400-800 | 03 file |
| Design review (optional) | 0-800 | 0-500 | 03 file |
| Pilot travel and events | 800-2,500 | 500-1,500 | 03 file |
| Contingency (about 15%) | 800-2,400 | 650-1,900 | 03 file |
| **Product total** | **6,000-18,200; plan about 13,000** | **5,100-14,700** | |
| Local part-time customer-success person (300,000 tenge a month) | about 1,200 | in operating costs | 04 file |
| Pre-launch marketing (November) | about 800 | in marketing budget | 04 file |
| **Cash to launch** | **about 15,000** | | my estimate |

**Reconciliation.** The 04 model's build-phase lines (lawyer 1.5 million tenge, methodist 400,000 a month, translation 0.6 million, pen test 2.0 million) sit at the upper-middle of the 03 file's ranges. "Plan about 13,000" uses those values. Company set-up, payment fees and the full marketing budget are in sections 8-10.

---

## 8. Go-to-market

### Pricing (reconciled)

The files proposed three price sets:
- the re-assessment: File 50,000-100,000 tenge; subscription 8,000-15,000 a month;
- the 02 file: File 40,000-60,000; subscription 5,000-10,000 a month;
- the 04 file: File 49,000; subscription 7,900 a month.

**I use the 04 file's prices.** They sit inside the 02 file's ranges and match the anchors: the File costs about the same as the state fee (43,250 tenge) and less than Dogovor24's cheapest yearly pack (60,000-75,000). The subscription is about a third of a daily-use CRM (Umai, about 20,000 tenge a month). No anchor supports the re-assessment's higher prices for owners who say their budgets are thin ([inbusiness.kz](https://inbusiness.kz/ru/last/uvelichit-podushevoe-finansirovanie-v-chastnyh-detsadah-prosba-kostanajskih-predprinimatelej)).

| Plan | Who | Price (tenge; US$ on the Paddle checkout, VAT included) | Includes |
|---|---|---|---|
| **Free self-check** | Any owner or head | 0 | 15-minute check of rows 73-82; red/amber/green result; top 5 gaps; no exports |
| **Licence File** (one-off) | A kindergarten preparing to apply | **49,000** (US$99) per legal entity with one building; +24,500 per extra building | Full readiness check with computed staff shares; seven data forms in two languages; copy sheet; evidence pack; regional notes; action plan; **3 months of Inspection-Ready** |
| **Inspection-Ready** | Licensed or licensing kindergartens | **7,900 a month or 79,000 a year** (US$16 / US$159) per site | Staff register and alerts; the 29 + 9 checklists as self-audits with evidence; inspection binder; from February 2027 the tracker and journals; from June 2027 plan templates; the edu.kz one-page site (my proposal: included, with free export if they leave); rule updates |
| **Network** | Chains of 3+ sites, consultants, methodists serving several kindergartens | **29,000 a month** (US$59) for up to 5 sites, then 4,900 per site | Everything above, plus a cross-site dashboard and the partner's logo on documents |
| **Partner review** (add-on) | Owners who want a human check before filing | about 150,000, set by the partner | A partner lawyer or consultant reviews the File; we take a 25% referral fee (my estimate) |

Rules (04 file):
- **Founding price:** the first 30 Files at half price (24,500 tenge) for a feedback call and a testimonial.
- **Association members:** 20% off Inspection-Ready; the association gets a 15% referral fee.
- **Yearly plan:** two months free.
- **Refund:** full refund within 14 days if fewer than half of the forms were generated.
- **No price includes a guarantee of a licence.**
- Effective subscription price in the model: about 6,900 tenge a month in year 1, rising about 7% a year.

### Channels, in priority order

1. **Owner associations and Atameken.** Co-branded webinars "Licence 2027: what the commission checks, row by row", in Russian and Kazakh; a member discount; a referral fee; and anonymous "what members are missing" data they can use in lobbying. Targets: Leila Kulenova (Kazakhstan Continuing Education Association), Kulyanda Batyrbekova ("Bilim Invest", 538+ kindergartens in 2022), Dinara Kudaikulova ("Adilet"), Roza Sadykova (Republican Association of Private Education Organisations) and Azamat Beisenbenov (Atameken) ([forbes.kz](https://forbes.kz/news/newsid_282340); [informburo, 1 Oct 2026](https://informburo.kz/novosti/vladelcy-castnyx-detsadov-v-kazaxstane-poprosili-edinyx-pravil-licenzirovaniia)).
2. **Partners who already serve kindergartens.** Licensing consultants such as Ybcase (Network plan and paid reviews), accountants, providers of the 36-hour training courses, and Umai CRM for a referral deal (02 and 04 files).
3. **Search pages in Russian and Kazakh.** Results for "лицензия детский сад 2027" are news, not guides (02 file). Publish one page per row, one per region, and "what changed on 1 January".
4. **Direct WhatsApp outreach** to the 4,011 private organisations in the five biggest areas, from public listings (2GIS, akimat lists): one short message with the self-check link.
5. **Paid social.** Instagram and Facebook ads to owners and heads in the five areas, and retargeting of self-check users. A freelance targeting specialist charges from 49,000 tenge for set-up ([Kaspi listing](https://obyavleniya.kaspi.kz/a/target-reklama-120148559), per search summary).
6. **Damu fund co-marketing** for its about 1,660 kindergarten borrowers (interest unverified).
7. **Regional quality departments.** Offer the free self-check as a neutral tool. Expect no paid promotion.
8. **Referrals.** One free month for each referred kindergarten that buys.

**Sales motion.** Self-serve for single kindergartens: self-check → result by e-mail and WhatsApp → File by card → 15-minute onboarding call on WhatsApp → "inspection-ready score" in month 3 → subscription. Assisted sales for chains, consultants and associations. **One local Russian- and Kazakh-speaking person does the talking**: part-time from month 1, full-time from month 4. The founder runs product, content and partnerships from abroad.

### Selling calendar

| When | What happens | What we sell |
|---|---|---|
| Now to 31 Dec 2026 | Owners prepare; no one can apply yet | Free self-check; File at founding price |
| Jan-Feb 2027, then per regional schedule to 2029 | Licensing starts; existing kindergartens in phases; new ones before opening | Licence File |
| Every month | Desk check of NOBD data; recommendations by the 25th, 10 working days to act | Inspection-Ready tracker |
| Twice a year | Anti-terror instruction; fire drills | Journals and reminders |
| 1-31 August | Regrouping; staff changes | Staff register; threshold check |
| 1 September | New school year: plans, cyclograms, development cards | Plan templates; **best month for subscriptions** |
| Yearly | Self-assessment on the website; state-order monitoring | Self-audit pack |
| 1 January | MRP rises, so every fee and fine rises (about 8.5% in 2027) | "Fines went up" reminder |
| Quiet | Late Dec-early Jan holidays; Nauryz (about 21-23 March); July | Content and SEO only |

Sources: 01 and 04 files. Quiet periods are the 04 file's estimate (unverified).

### Marketing budget, year 1: 6.0 million tenge (about US$12,000)

Plus partner commissions (about 5% of billings) and founder travel, which sit in the cost model (04 file). Low case 3.0 million; high case 9.0 million.

| Line | Tenge | Notes |
|---|---|---|
| Association webinars, event sponsorship, printed checklists | 1,500,000 | 4-6 events |
| Paid social and search (Meta, Telegram, Google/Yandex) | 1,800,000 | About 150,000 a month; first 2 months are tests |
| Content and SEO in Russian and Kazakh | 1,200,000 | Writer and translator, about 100,000 a month |
| Regional seminars in Almaty, Astana, Shymkent, Turkestan | 900,000 | With Atameken regional chambers |
| Outreach tools (WhatsApp Business, listing data, calls) | 300,000 | |
| Referral credits and founding discounts | 300,000 | |

By month: November 400,000; December 800,000; January 700,000; February 600,000; March 300,000; April 500,000; May 400,000; June 600,000; July 200,000; August 400,000; September 700,000; October 400,000.

**Weekly measures:** self-checks started and finished; File conversion (target 10-15% of finished checks); cost per paid File (target under 35,000 tenge); File-to-subscription conversion at month 3 (target 40%).

### First 90 days (from Monday 12 Oct 2026)

| Dates | Product | Content and legal | Market and sales | Company and payments |
|---|---|---|---|---|
| 12-18 Oct | Foundation; data model; rows 73-82 questions | Turn the 01 file's 72 requirements into questions; contract lawyer and methodist | Call the four association leaders and Atameken; book 15 interviews | Apply to Paddle; open Kazakh hosting; test paying from abroad |
| 19 Oct-1 Nov | Parallel streams; **self-check live about 23 Oct** | Lawyer reviews every question; LC1 | 15 interviews with a price test at 29,000 / 49,000 / 79,000 | Draft public offer and privacy policy (Russian and Kazakh) |
| 2-15 Nov | **MVP feature-complete 6 Nov**; Kazakh proofreading; pen test | Regional notes for the five main areas; LC2-LC3 | Free pilots with 10-15 kindergartens; **kill check 15 Nov** | Paddle test mode; test purchases with Kaspi and other Kazakh cards |
| 16-29 Nov | Pen-test fixes; hardening | LC4 mock check of 3 pilot packs | Founder trip to Almaty and Astana; sign 1-2 consultant partners and one association | Reseller agreement (30% discount) for invoice buyers |
| 30 Nov-13 Dec | Release candidate; **paid launch Mon 7 Dec** | Weekly webinar, Russian then Kazakh; 10 search pages | First association webinar; WhatsApp to 500 kindergartens in Almaty and Astana; Meta test (300,000 tenge) | Paddle live |
| 14-31 Dec | Start tracker and journals | "What changes on 1 January" guide | Kazakh webinar; outreach to Shymkent and Turkestan | Log card failures and invoice requests |
| 1-10 Jan 2027 | Fix issues from first real filings | Log what each department actually asks for | "Day 1 of licensing" campaign; pilot case studies | Decide: reseller only, or an early TOO |

**Day-90 targets (10 Jan 2027):** 50 paid Files; 3 partner agreements; at least 10 pilot users rate the File 8/10 or better; card payment success above 85%. The 04 file's 50 Files by 10 January assumed a 1 December launch. With 7 December, treat 50 as a stretch and 40 by 31 January as the floor (kill criterion 2).

---

## 9. Payments, company and legal

### Payments

**Months 0-8: sell from the founder's foreign company through Paddle, to the owner as a private person.**
- **The 03 and 04 files disagreed** on whether Paddle covers Kazakhstan. I checked: Paddle's tax page lists Kazakhstan at 16% VAT, B2C only ([Paddle tax list](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)). An older Paddle support page still shows 12% ([Paddle support](https://paddle.com/support/which-countries-does-paddle-charge-vat-for)); the rate rose to 16% on 1 Jan 2026 ([Rödl](https://www.roedl.com/wp-content/uploads/2026/05/vat-guide-kazakhstan-roedl.pdf)). Kazakhstan is not on Paddle's blocked list ([Paddle supported countries](https://developer.paddle.com/concepts/sell/supported-countries-locales)). So the 04 file is right.
- **What we keep.** On a US$99 File: VAT inside the price US$13.66; Paddle fee 5% + US$0.50 = US$5.45 ([Paddle pricing](https://www.paddle.com/pricing)); net about **US$79.90, or 81%** (04 file arithmetic).
- **Why to the owner personally.** A private person is not a tax agent, so there is no withholding, and Paddle handles VAT. The catch: the kindergarten cannot book the cost without a local invoice. At 49,000-79,000 tenge a year, most owners will accept that (04 file reading, unverified; ask in every pilot).
- **Will Kazakh cards pass?** Kaspi says purchases abroad through its app are charged without commission ([Kaspi guide](https://guide.kaspi.kz/client/ru/gold/shopping/alipay/q16423)). Whether Kaspi Gold cards pass a European card checkout smoothly is unverified. Test with the first 10 pilot buyers.
- **Stripe** can charge in tenge ([Stripe currencies](https://docs.stripe.com/currencies)), but then we must register for Kazakh VAT ourselves. Not worth it at this scale. Re-check Stripe Managed Payments in 2027 ([Stripe docs](https://docs.stripe.com/payments/managed-payments)).

**Selling to the kindergarten's company from abroad is awkward** (04 file):
- The buyer may have to withhold income tax at source: 20% for services, 15% for royalties, cut to 10% under most treaties if we supply a tax-residence certificate in time ([PwC](https://taxsummaries.pwc.com/kazakhstan/corporate/withholding-taxes); [Uppersetup](https://uppersetup.com/ru/blog/withholding-tax-in-kazakhstan-2026-services-royalties)). How a SaaS subscription is classed is unverified.
- A VAT-registered buyer owes 16% reverse-charge VAT; firms on the simplified regime do not ([mybuh.kz](https://mybuh.kz/useful/nds-za-nerezidenta-kak-nachislyat-i-kogda-oplachivat.html); one secondary source disagrees).
- No local e-invoice (ESF). A bank wire abroad costs a business at least 20,000 tenge ([finratings.kz](https://finratings.kz/news/15412-halyk-bank-vvedet-novuiu-komissiiu-za-perevody-v-rossiiu-i-belarus/)), 40% of a File.
- Worst case on one sale: about 41% extra up front (04 file arithmetic). A poor thing to sell to a client buying "compliance".
- **Interim fix:** one or two local resellers (a licensing consultant or an accounting firm) buy seats at 30% off and invoice locally.

### Is a local company needed?

**Not to launch, and not legally. Commercially, probably yes by month 8-10.**

| Reason | Needs a TOO? |
|---|---|
| Card sales to owners | No: Paddle |
| Data stored in Kazakhstan | No: Kazakh hosting is rented from abroad |
| Invoices with an ESF to kindergarten companies | Yes, or a reseller |
| Kaspi Pay (0.95-2.3% fees) | Yes: offered to local sole traders and TOOs ([Kaspi tariffs](https://guide.kaspi.kz/partner/kz/kaspi_pay/conditions/q1445); [Kaspi connection](https://guide.kaspi.kz/partner/ru/app/connection)) |
| Local staff | Not at first: contract local freelancers from abroad |
| Trust with associations, Damu, regional departments | Helps |
| Tax relief | Helps: Astana Hub participants get 100% corporate tax relief and VAT exemption if at least 90% of income is from priority IT activity ([Astana Hub 90/10](https://astanahub.com/ru/blog/pravilo-90-10-v-astana-hub-znachenie-struktury-dokhodov-dlia-primeneniia-nalogovykh-lgot); [Forbes.kz](https://forbes.kz/blogs/nyuans-dlya-relokantov-56a065)) |

**Worth it in money.** The TOO adds about 5-6 million tenge a year of profit in years 2-3, because local sales avoid Paddle's VAT and fee. It costs about 1.7 million in set-up and first-year running. Without it, base profit falls to 4.3 million in year 2 and 7.3 million in year 3 (04 file sensitivities).

**Trigger to open it:** the first of (a) 60 paying sites, (b) 3 or more lost deals a month because a buyer needs a local invoice, or (c) an association or Damu deal that needs a local contract party. In the base case that is about month 8 (June 2027). If the owner prefers to stay Paddle-only, the business still works, at roughly half the profit.

### Company costs: TOO (LLP) owned by the founder's foreign company

| Item | In person (founder does it) | Through a lawyer, remotely | Source |
|---|---|---|---|
| State registration of a small TOO | 0 | 0 | [dogovor24](https://dogovor24.kz/questions/registracija_biznesa-20/20), per search summary; [informburo](https://informburo.kz/cards/registraciya-too-v-rk-posagovoe-rukovodstvo) |
| BIN for the foreign parent company | Apostille, translation, notarisation: about 100,000-200,000 (my estimate) | 300,000 | [mybuh.kz](https://mybuh.kz/yuridicheskie-uslugi/) |
| IIN and e-signature for a foreign director | Free at a public service centre (ЦОН), but needs a trip: about 300,000-600,000 from Europe (my estimate) | from 70,000; but since 2024 an individual's IIN may need personal presence (sources differ) | [mybuh.kz](https://mybuh.kz/yuridicheskie-uslugi/); [Uppersetup](https://uppersetup.com/ru/article/llp-too-in-kazakhstan-for-foreigners-2026-registration-visa) |
| Registering a TOO with foreign founders | Free on egov.kz with an e-signature | from 400,000 | [mybuh.kz](https://mybuh.kz/yuridicheskie-uslugi/) |
| Charter capital | 100 tenge or 100 MRP (sources differ); plan 432,500, which stays as working cash | same | [Uppersetup](https://uppersetup.com/ru/article/llp-too-in-kazakhstan-for-foreigners-2026-registration-visa); [vitvet](https://vitvet.com/articles/strany/kazahstan/kazakhstan-kompaniya-registraciya-vedenie-deyatelnosti/) |
| **One-off total** | **about 0.5-0.8 million tenge (US$1,000-1,600) plus capital** | **about 0.8-1.0 million tenge (US$1,600-2,000) plus capital** | 04 file sums |
| Time, including the bank account | 4-8 weeks | 3-6 weeks | Uppersetup; vitvet |

- **Practical points.** The legal address must be real and backed by a lease or title; a virtual office can get the firm marked an unreliable taxpayer ([vitvet](https://vitvet.com/articles/strany/kazahstan/kazakhstan-kompaniya-registraciya-vedenie-deyatelnosti/)). Banks have refused foreign-owned TOOs without local counterparties, so bring pilot and reseller contracts (same source). Appointing the trusted local operations manager as director avoids a work visa for a foreign director ([Uppersetup](https://uppersetup.com/ru/article/llp-too-in-kazakhstan-for-foreigners-2026-registration-visa)).
- **Ongoing costs: about 0.8-1.0 million tenge (US$1,600-2,000) a year** before tax and staff. Outsourced accounting 50,000-60,000 tenge a month ([Kaspi listing](https://obyavleniya.kaspi.kz/a/uslugi-buhgaltera-110017434)); bank and Kaspi 5,000-15,000 a month plus 1-2% of card takings (my estimate).
- **Tax.** Simplified declaration: 4% of income, which local councils may move by ±50% ([kapital.kz](https://kapital.kz/business/142362/npp-prosit-maslihaty-uskorit-resheniya-po-nalogovym-stavkam-uproshennogo-rezhima.html)); 44 activities are barred from it from 2026, and whether software is among them is unverified ([zakon.kz](https://www.zakon.kz/pravo/6498134-snr-po-uproshchennoy-deklaratsii-pod-zapret-popali-44-vida-deyatelnosti.html)). Or the general regime at 20% corporate tax, zero with Astana Hub status.
- **VAT threshold** for the TOO: 10,000 MRP a year, 43.25 million tenge in 2026 ([KPMG](https://assets.kpmg.com/content/dam/kpmg/kz/pdf/2025/08/Beyond-the-Horizon-rus.pdf), per search summary). The base case stays under it (about 32 million of local billing in year 3). The high case crosses it in year 2 and then needs Astana Hub status or a 16% price rise.
- **Alternatives rejected** (04 file): an AIFC company (tax benefits only for financial services); a branch (makes the parent taxable in Kazakhstan); a sole trader in the founder's name (needs residence, unverified); a partner-owned TOO (loses the customer relationship; use only as the interim reseller).

### Legal documents and liability

- **Public offer** in Russian and Kazakh: payment counts as acceptance (Civil Code Art. 395-396, per the 04 file). For Paddle sales, Paddle's buyer terms plus our licence terms. For the TOO, a public offer for small buyers and signed contracts with an act and ESF for chains and resellers.
- **Data-processing agreement:** the kindergarten owns the data; we process it on its behalf, in Kazakhstan, for listed purposes, with a breach procedure.
- **Liability:** "preparation and evidence management, not a guarantee". Cap at fees paid in the last 12 months. A cap may be void for intentional breach or in a consumer adhesion contract where the law fixes liability (Civil Code Art. 358, 359(3); [prg.kz](https://prg.kz/m/amp/document/3206061/12/4010000), older edition; confirm with the lawyer). A regional-practice disclaimer. A dated legal-basis note on each item.
- **Content partners** (lawyer, methodist) assign copyright in templates to us and accept capped responsibility for their review.
- **Open:** whether giving licensing help as a non-lawyer company needs a permit (unverified; ask the lawyer in week 1). Professional-liability insurance is not common locally (unverified).

---

## 10. Financials

The 04 file's monthly model, months 1-36 (November 2026 to October 2029). Founder builds with AI agents and takes no pay in the main tables. Million tenge (1 million is about US$2,000).

**Main assumptions** (04 file):
- Buyer pool 6,500 private preschools plus about 400 new a year.
- Licence Files, years 1 / 2 / 3: low 150 / 160 / 130; base 355 / 330 / 260; high 600 / 600 / 450. Peaks in January-February.
- File price 49,000 rising to 55,000 by year 3 (base); first 30 at half price.
- File buyers who subscribe after 3 free months: 25% / 40% / 55%. Plus 2 / 5 / 10 subscribers a month without a File.
- Monthly churn 4% / 2.5% / 1.5%.
- Payment route: months 1-8 all via Paddle (keep 80%); from month 9, 70% billed by the local TOO (keep 98.5%).
- Costs: local customer success 300,000 a month, then 550,000 from month 4 and 825,000 in year 3; lawyer 1.5 million in months 1-2, then a 150,000 retainer; methodist 400,000 a month, falling to 150,000; pen test 2.0 million, re-tests 1.0 million; AI tools 150,000 a month; hosting 80,000-160,000 a month; marketing 6 / 6 / 5 million; founder trips; TOO 1.0 million set-up plus 70,000 a month; 5% contingency; partner commissions 5% of gross.

| Measure | Low | Base | High |
|---|---|---|---|
| Subscribers at month 12 / 24 / 36 | 39 / 75 / 92 | 135 / 269 / 347 | 312 / 676 / 920 |
| Gross billings, years 1 / 2 / 3 | 7.0 / 11.6 / 12.8 | **22.9 / 37.6 / 45.5** | 45.8 / 86.2 / 112.0 |
| Net revenue, years 1 / 2 / 3 | 5.9 / 10.8 / 11.9 | 19.5 / 34.9 / 42.3 | 39.1 / 80.1 / 104.1 |
| Costs, years 1 / 2 / 3 | 22.1 / 18.1 / 18.7 | 28.5 / 25.8 / 29.1 | 38.8 / 45.3 / 53.1 |
| **Profit before founder pay, years 1 / 2 / 3** | -16.2 / -7.3 / -6.8 | **-9.0 / +9.1 / +13.2** | +0.3 / +34.8 / +51.0 |
| Subscription ARR at month 36 | 7.0 | 32.9 (US$66,000) | 92.7 (US$185,000) |
| Break-even, trailing 12 months | not in 36 months | month 17 (March 2028) | month 12 (October 2027) |
| **Peak cash need, no founder pay** | 30.3 (kill criteria stop it near 10-15) | **10.3 (US$21,000), July 2027** | 7.0 (US$14,000) |
| Peak cash need with founder pay of 1.0 then 1.5 million a month | 60.3 | 16.9 and still negative at month 36 | 7.0; cash positive from month 15 |

**Base case by year** (04 file quarterly table, summed):

| Year | New Files | Subscribers at year end | Gross billings | Profit before founder pay | Cumulative cash at year end |
|---|---|---|---|---|---|
| 1 (Nov 26-Oct 27) | 355 | 135 | 22.9 | -9.0 | -9.0 |
| 2 (Nov 27-Oct 28) | 330 | 269 | 37.6 | +9.1 | +0.1 |
| 3 (Nov 28-Oct 29) | 260 | 347 | 45.5 | +13.2 | +13.3 |

**Sensitivities** (base, profit before founder pay, years 2 / 3):

| Change | Year 2 | Year 3 | Cash at month 36 |
|---|---|---|---|
| Base | 9.1 | 13.2 | +13.3 |
| No local TOO (all via Paddle) | 4.3 | 7.3 | +1.4 |
| Local sales carry 16% VAT | 5.6 | 8.8 | +4.5 |
| Only 30% of File buyers subscribe | 6.2 | 8.6 | +5.1 |
| Churn 4% a month | 7.4 | 8.8 | +7.1 |
| **30% fewer Licence Files** | **0.8** | **3.7** | **-9.8** |
| Subscription stays at 5,500 tenge | 4.8 | 5.1 | +0.1 |

**Unit economics (base).** A subscriber pays about 7,400 tenge a month, keeps about 95% after fees and stays about 40 months at 2.5% churn: about 280,000 tenge of lifetime net revenue, plus the 49,000-tenge File. Blended acquisition cost is about 32,000-54,000 tenge per new paying customer. Lifetime value to acquisition cost is about 3-4. Gross margin after hosting and payments is above 85%. The cost base is people and content, not servers.

**How this compares with the re-assessment.** The re-assessment put year-3 revenue at about US$58,000 (low), US$130,000 (base) and US$255,000 (good), with no costs. The deep dive's model gives US$26,000, US$91,000 and US$224,000 of billings, and shows that the base case earns about US$26,000 of profit before founder pay. **I use the 04 model**, because it prices from real anchors and books the costs the founder will actually carry: a local salesperson, a lawyer, a methodist, marketing and a pen test.

**What it means.**
- **Cash need is small.** About 10 million tenge (US$21,000) covers the base case. Plan **15-20 million tenge (US$30,000-40,000)** for slower sales, trips or a later TOO.
- **Kazakhstan alone does not pay a founder within 3 years** in the base case. It does in the high case (about 51 million tenge, US$102,000, of year-3 profit).
- **Watch File volume monthly from December 2026.** The low case is visible early: 34 Files by January and 81 by April 2027, against 80 and 190 in the base case.

**Exit.** Likely buyers or partners: the ED24/e-orda vendor, Bilim Group (Freedom Holding took a stake in August 2026, [kapital.kz](https://kapital.kz/business/151343/timur-turlov-priobrel-dolyu-v-bilim-group.html)), Umai or Dogovor24. Small SaaS firms sell for about 2-4 times revenue or 3-6 times profit ([BigIdeasDB](https://bigideasdb.com/state-of-saas-valuations-2026); not re-checked). A small, local, regulation-driven product sits at the low end: about **50-100 million tenge (US$100,000-200,000)** on the base case at month 36 (04 file estimate). Edtech deal counts in Kazakhstan fell 35% in 2024 ([digitalbusiness.kz](https://digitalbusiness.kz/2025-06-24/v-kazahstane-opredelili-luchshie-obrazovatelnie-kompanii-reyting/), per search summary), so do not plan on venture money.

---

## 11. Regional expansion

The content is Kazakh law, so it does not travel. Reuse the engine (requirement rows, staff thresholds, checklists, evidence, deadlines) at home first (02 and 04 files).

| Step | When | Market | Why | Effort |
|---|---|---|---|---|
| 1. Private schools in Kazakhstan | Build from month 10; launch months 13-15 (Nov 2027-Jan 2028) | 828 private schools ([Damu PDF](https://damu.kz/poleznaya-informatsiya/damu_analytics/analitika/Анализ%20сектора%20частного%20образования%20в%20РК.pdf) p. 2) | Same licence law, same Order 473, same quality committee, same buyer type. 58 schools were fined for working without a licence in 2024 ([kapital.kz](https://kapital.kz/gosudarstvo/131843/v-kazakhstane-oshtrafovali-58-shkol-za-ot-sut-stviye-litsenzii.html)) | New rows and checklists; about 2-3 months of agent build plus about 1.5 million tenge of legal review (04 estimate) |
| 2. Private colleges (TVET) | Months 18-24 | 326 private colleges (Damu PDF p. 2) | Same regime | As above |
| 3. Children's camps and health centres | Months 18-24 | Count not checked | Separate licence with a 5-year term, so a recurring need ([azattyq-ruhy](https://rus.azattyq-ruhy.kz/news/108831-litsenziia-na-piat-let-i-edinye-trebovaniia-kak-izmenitsia-detskii-otdykh-v-kazakhstane)) | Seasonal and small |
| 4. Uzbekistan, with a local partner | Not before month 24 | 38,058 preschools at end-2024, of which 28,729 are small family units ([talimxabarlari.uz](https://talimxabarlari.uz/?p=53948)) | Private education is licensed; since 1 Jul 2026 private education premises need cameras with sound and streaming, recordings kept 6 months ([talimxabarlari.uz](https://talimxabarlari.uz/?p=75137)). Paddle collects Uzbek VAT on B2C sales ([Paddle](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)) | New legal content and Uzbek language; preschool licence rules not yet mapped (unverified) |
| 5. Kyrgyzstan | Only if cheap | About 2,011 preschools ([economist.kg, 2026](https://economist.kg/society/2026/06/05/birth-rate-kindergartens-kyrgyzstan/)); home-type kindergartens may open without a licence since 2023 ([economist.kg, 2023](https://economist.kg/novosti/2023/03/30/potolok-vysotoj-tri-metra-v-kr-zavyshennye-trebovaniya-k-otkrytiju-chastnyh-detskih-sadov/), per search summary) | Small, and moving towards less licensing | Low priority |
| Russia | Excluded | — | Paddle blocks Russian buyers ([Paddle](https://developer.paddle.com/concepts/sell/supported-countries-locales)) | — |

**What expansion is worth.** Schools and colleges add about 1,150 organisations, about 18% more than the kindergarten pool. Schools are bigger and can pay more, so my estimate is a 15-30% lift on the base case. That improves the business but does not change its class. Only Uzbekistan could, and it needs new content, a new language and a partner.

---

## 12. Risks and mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| **A transition period, or automatic licences for state-order kindergartens** (Atameken asked on 1 Oct 2026) | Medium | High: File demand drops or moves to 2028-2030 | Lead with inspection readiness, which applies now. Keep costs variable until March 2027. Kill criterion 5 |
| **A free checklist from the Ministry or an association, or a free module from the ED24 vendor** | Medium | High for Files; medium for subscriptions | Partner with associations first (co-branded free self-check). Compete on what a static list cannot do: thresholds, alerts, evidence, deadlines |
| **The subscription does not stick, because the licence never expires** | Medium | High: the business becomes one-off sales | Measure month-3 conversion from March 2027 (kill criterion 3). Ship the tracker, journals and edu.kz site by February, plans by June |
| **Owners will not pay, or budgets are too thin** | Medium | High | Price near the state fee; founding price; association discount; frame value against fines and 69 million tenge of state money a year; kill criterion 1 |
| **Legal content is wrong, or regions read it differently** | Medium | High for trust | Lawyer sign-off on every item; sources and dates on every page; regional notes from real filings; "what did your department ask for?" button; "needs an expert" flags; liability cap |
| **Premises and land problems sink many owners anyway** | High for some | Medium | Put land, premises and lease first in the report; refer to partner lawyers; do not sell false hope |
| **Portal format unknown** | Medium | Low | Output a copy sheet and files; fix after the first filings in January 2027 |
| **Row 81 "information system" is unclear** | Medium | Medium | Do not claim the product fills it; ask the licensor and the lawyer |
| **Payment friction from abroad** (cards fail, owners need invoices, 10-20% withholding on B2B) | Medium | Medium | Test cards in pilots; reseller route at once; TOO trigger; written tax opinion before month 6 |
| **Personal-data breach or cross-border transfer** | Low if hosted locally | High | Kazakh hosting from day 1; no children's data; no anti-terror passports; consent at sign-up or a Kazakh e-mail relay; data-processing terms in every contract |
| **Security holes in AI-written code** | Medium | High | Synthetic data only; tenant-isolation tests; human review of auth, tenancy and file code; static scans; external pen test before launch and yearly |
| **Weak hosting provider or a single zone** | Low-medium | Medium (customers' mandatory edu.kz sites too) | Backups at a second Kazakh provider; monthly restore drill; documented 4-hour rebuild |
| **Founder review is the bottleneck; founder abroad** | Medium | Medium | Cut scope (billing to invoice, Telegram to v1); local customer-success person from month 1; second local hire in year 2 |
| **Kazakh language quality** | Medium | Medium in the south | Native proofreader; glossary; pilots in Turkestan and Shymkent |
| **E-signature scam fears** | Medium | Medium | Never ask for keys; owners file themselves; association endorsement; say so on every page |
| **Tight window before 1 January** | High | Medium | Self-check online by 23 Oct; concierge File as fallback; phased demand to 2029 softens a slip |
| **Tenge weakens** | Medium | Low | Most costs are in tenge; only AI tools and Paddle fees are in US$ |

Sources: 03 and 04 risk tables, plus [informburo, 1 Oct 2026](https://informburo.kz/novosti/vladelcy-castnyx-detsadov-v-kazaxstane-poprosili-edinyx-pravil-licenzirovaniia) and [Tengri on e-signature scams](https://tengrinews.kz/kazakhstan_news/obieiavleniia-o-detskix-sadax-nazvali-opasnymi-375426/).

---

## 13. Milestones and kill criteria

Dates follow the reconciled 7 December launch (section 7). Targets are the base case from the 04 file.

| When | Target (base) | Stop, pivot or shrink to a side project if |
|---|---|---|
| 23 Oct 2026 | Public self-check live; lawyer and methodist contracted; 15 interviews booked | — |
| 6 Nov 2026 | MVP feature-complete | Not complete by 13 Nov: switch to the concierge File |
| **15 Nov 2026** | 15 interviews done; 10-15 pilots onboarding | **Fewer than 8 of 15 owners would pay 40,000 tenge or more for the File, or no association agrees to a co-branded webinar** |
| 7 Dec 2026 | Paid launch; content signed off; pen test passed; Paddle live | — |
| 10 Jan 2027 (day 90) | About 50 paid Files (stretch); 3 partners signed | — |
| **31 Jan 2027** | About 80 Files | **Fewer than 40 paid Files** |
| End Feb 2027 | Tracker, journals and edu.kz site shipped | — |
| **30 Apr 2027 (month 6)** | About 190 Files and 46 subscribers | **Fewer than 100 Files, or under 25% of File buyers paying after the 3 free months** |
| Jun-Jul 2027 (months 8-9) | TOO registered if the trigger is met; Kaspi Pay live; Astana Hub application filed | — |
| **31 Oct 2027 (month 12)** | About 355 Files and 135 subscribers; private-school module in build | **Fewer than 80 paying subscribers, or monthly churn above 4%** |
| Oct 2028 (month 24) | Cumulative cash positive; second local hire; private schools live | — |
| Oct 2029 (month 36) | About 350 subscribers; ARR about 33 million tenge | Decide on Uzbekistan, a sale, or holding as a side business |
| **Any time** | | **Automatic licences for state-order kindergartens and a free official self-check are both announced: keep only the inspection subscription, or stop** |

By the first kill check (15 Nov) the founder will have spent about US$5,000-8,000. By the second (31 Jan) about US$20,000, or about US$15,000 net of early sales (my estimates from the 04 model).

---

## 14. Open questions to settle first

1. **Will owners pay, and how?** Will they pay 49,000 tenge for the File and 7,900 a month after? Personally by card, or only from the kindergarten's account against a local invoice? (15 interviews; pilots.)
2. **How big is the January wave?** Can existing kindergartens keep working in 2027 while waiting for their regional slot? When will regions publish schedules? Will the state-order rules require a licence? Order 381 still said "notified" after its August 2026 amendment ([Order 381](https://old.adilet.zan.kz/rus/docs/V2200029323)).
3. **Lease term.** Does "at least 5 years" mean the total contract term or the remaining term at filing? (Lawyer, week 1.)
4. **Row 81.** What counts as an "education management information system matching NOBD"? Does ED24 or e-orda count?
5. **Portal format.** Does eLicense take the seven forms as typed fields or uploaded files, and with what limits? (First pilot filing.)
6. **Paddle.** Will it approve this product? Can it show prices in tenge? Do Kaspi Gold and other Kazakh cards pass its checkout?
7. **Hosting.** Which Kazakh provider bills a foreign company by card, with managed PostgreSQL and S3 storage?
8. **Data transfer.** Is consent at sign-up enough for a foreign e-mail and payment provider, or must e-mail go through a Kazakh relay? Does a foreign processor have extra duties?
9. **Permits.** Does licensing help from a non-lawyer company need a permit?
10. **Tax.** How is a SaaS subscription sold from abroad classed for withholding? Is software barred from the simplified regime? Would the TOO qualify for Astana Hub?
11. **Company setup.** Can the local operations manager be the TOO's director so the founder need not travel? What is the remote route for a foreign parent's BIN in 2026?
12. **Channels and rivals.** Will the associations share lists or co-market, and for what fee? Will anyone publish a free consolidated checklist before 1 January? Does the ED24 vendor plan a licensing module?
13. **Content gaps.** The item lists of Order 70 (equipment) and Order 216 (teaching kits); the menu cycle (10 days per Order 385 or 4 weeks per the CPCR checklist); what licensing consultants charge for a kindergarten licence today.

---

## 15. Next steps this week (Monday 12 - Friday 16 Oct 2026)

1. **Decide to run the 8-week test** with a cash cap of about US$15,000 to launch and US$30,000-40,000 in total. Put the four kill dates in the calendar.
2. **Call the association leaders and Atameken**: Kulenova, Batyrbekova, Kudaikulova, Sadykova and Beisenbenov. Ask each for 3-4 owners to interview, half in the south (Almaty region, Shymkent, Turkestan). Use the same questions: what they lack, what they pay today, the price test at 29,000 / 49,000 / 79,000 tenge, and whether they would pay personally by card.
3. **Contract the content team.** An education-law lawyer on a fixed fee for the requirement map, form templates and terms, with four week-1 questions: lease reading, row 81, a permit for non-lawyer help, cross-border consent. A methodist who has run a kindergarten. Start looking for the local Russian- and Kazakh-speaking part-timer (hh.kz and association referrals).
4. **Set up accounts.** Apply to Paddle. Rent a server at hoster.kz or PS Cloud and test paying from abroad; if refused, use Serverspace Almaty. Register the product domain (.com).
5. **Start the build.** WS0 foundation with agents; freeze the data-model contracts on Thursday 15 Oct. A drafting agent turns the 01 file's 72 requirements into self-check questions for the methodist to review.
6. **Put up the landing page** in Russian and Kazakh: "Licence from 1 January 2027: check in 15 minutes", with a waitlist.
7. **Ask a Kazakh tax adviser for a quote** on a written opinion about withholding on SaaS sold from abroad, needed before any B2B sales and before month 6.
