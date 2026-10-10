# Argentina: INAES and UIF compliance desk for small mutuales and credit co-ops — full plan

Combined plan from four deep-research parts (written 10 Oct 2026):

- [01 Law and product requirements](01-law-and-requirements.md): the INAES, UIF and CRS duties, filing channels and formats, enforcement, and 88 testable requirements, each traced to an article.
- [02 Market and competition](02-market-and-competition.md): buyer counts from INAES and FATF data, named non-filer lists, prices, competitors, channels and nearby countries.
- [03 Product and technical design](03-product-and-tech.md): users, features, flows, screens, data sources, stack, security, agent build plan and budget.
- [04 Go-to-market, company and finance](04-gtm-company-finance.md): pricing, channels, 90-day launch, payments and tax, company set-up, 36-month model and kill criteria.

Every fact here also appears, with its source, in those files. Key sources are linked inline. "My estimate" marks numbers derived here. "(unverified)" marks facts the parts could not confirm. Money is in US dollars at ARS 1,517 per USD, the BCRA official rate on 9 Oct 2026 ([BCRA API](https://api.bcra.gob.ar/estadisticascambiarias/v1.0/Cotizaciones/USD?fechadesde=2026-10-01&fechahasta=2026-10-10)). Working product name: **"Mutual al Día"**.

---

## 1. Decision in one page

**Verdict: weak maybe. Worth a cheap, time-boxed test with a hard gate on 25 Oct 2026. On its own it is a break-even side business, not a living. It gets better as the second vertical of a shared Argentine UIF/AML platform (with the [B1 broker kit](../argentina-b1/PLAN.md)).**

**New score: 5/10** (re-assessment: 6/10; first score: 4/10).

**Why the score went down by one point.** The gap is real and the build is cheap. But the paying pool is about half the re-assessment's figure, the core monthly feature serves only mutuales, four local mutual ERPs exist, and the 36-month base case only breaks even.

**The case for it.**

- **The duties are many, dated and enforced.** A lending mutual owes 12 monthly lending returns, 4 quarterly member rolls, a yearly AML filing, a UIF self-assessment by 30 April, an external review and its assembly filings: about 20 filing events a year ([01](01-law-and-requirements.md); [02](02-market-and-competition.md)).
  - The monthly return moved to a manual INAES web form from the July 2026 period. Overdue months must be re-entered there ([Res 1279/2026](https://www.argentina.gob.ar/normativa/nacional/norma-427021/texto)).
  - The first INAES AML filing is due **1 Dec 2026**, then every year by 20 January ([Res 1567/2026](https://www.consejosalta.org.ar/wp-content/uploads/INAES-1567.pdf)).
  - Missing filings costs the licence or the lending rule. INAES withdrew the licence of 205 mutuales in March 2026 ([Res 565/2026](https://www.boletinoficial.gob.ar/detalleAviso/primera/339254/20260310)). It gave 302 loan-brokering mutuales a last 30 days (to about 30 Sep 2026, my calculation) to file or lose their rule ([Res 1687/2026](https://www.boletinoficial.gob.ar/detalleAviso/primera/346572/20260831); counts in [02](02-market-and-competition.md)).
- **The free portal leaves the hard work undone.** The new monthly form has about 300 input boxes. Each starts at "0" and is typed by hand. The consistency check runs only at the end. No import is described ([INAES user guide](https://contadoresenred.com/wp-content/uploads/2026/06/Instructivo.pdf); box count in [03](03-product-and-tech.md)). Someone must still sort every loan into arrears situations, maturity bands and guarantee types, and pick the 20 largest savers. **That calculation, from the loan ledger, is the product.** No portal keeps the UIF records, a calendar, or a view across many entities.
- **Nobody does the whole job.** Four mutual ERPs (Bambú, SIGMA, Nexa, GEM) and one AML start-up (CONLAFT, 5 systems deployed) exist. None publishes a price. None claims to prepare the new monthly web form or to serve accountants across many entities (unverified) ([02](02-market-and-competition.md)).
- **It is cheap and quick to build.** INAES publishes the member-roll CSV layout ([manual](https://servicios.infoleg.gob.ar/infolegInternet/anexos/410000-414999/411657/res756-1.pdf)). The terrorist list is free JSON ([RePET](https://repet.jus.gob.ar/)). Cash to "sellable" is about **USD 7,000-15,300** in 8-9 weeks ([03](03-product-and-tech.md)).
- **No Argentine company is needed at launch.** Argentine cards pay foreign software, the buyer side carries the VAT, and income-tax-exempt co-ops and mutuales skip the 30% card surcharge ([ARCA RG 4240](https://www.arca.gob.ar/iva/servicios-digitales/reg-percepcion-4240.asp); [RG 5617 art. 3](https://www.consejosalta.org.ar/wp-content/uploads/ARCA-5617.pdf)).

**The case against it.**

- **Small pool.** About 1,130 active obligated entities: 537 mutuales and 596 credit co-ops that offer financial services ([FATF/GAFILAT MER 2024, para 110](https://www.mpf.gob.ar/procelac-lavado/files/2020/04/Argentina-Mutual-Evaluation-Report-2024.pdf.coredownload.inline.pdf)). Only 38 savings-and-credit co-ops attended INAES's AML training, so the truly active pool may be nearer 700 (my estimate) ([INAES report p.29](https://www.argentina.gob.ar/sites/default/files/2023/12/inaes_informe_gestion_21-23.pdf)).
- **The MVP's core feature serves mutuales only.** The monthly lending return applies to mutuales with a lending rule, not to credit co-ops ([01](01-law-and-requirements.md), duty #1). So the main time-saver reaches about 540 active lenders. Co-ops need the AML pack, which ships in v1.
- **Slow, relationship-driven buyers, reached from abroad.** Volunteer boards vote monthly. CONLAFT, a local firm with 8 staff, reports only 5 deployments since May 2024 ([Cancillería profile](https://www.cancilleria.gob.ar/userfiles/ut/conlaft_espanol.pdf)).
- **Payment friction.** These are audited institutions. Many will want a peso invoice and a bank transfer, and some may hold only a Cabal card (unverified) ([04](04-gtm-company-finance.md)).
- **Liability.** Every figure ends up in a sworn statement. Two definitions are still unclear: how INAES computes the "promedio período", and which guarantee-fund rules survived a 2016 suspension ([03](03-product-and-tech.md)).

**What the deep dive changed** (compared with the re-assessment):

| Topic | Re-assessment | Deep dive | Effect |
|---|---|---|---|
| Buyers | about 2,000 UIF-obligated (extrapolated from Santa Fe 2020) | 2,010 registered; **about 1,130 active** (FATF MER 2024); about 870 dormant rule holders; core monthly return reaches about 540 active mutuales | Down |
| Competition | CONLAFT only; Neo had no INAES export | 4 mutual ERPs; **Bambú claims INAES file export and UIF compliance** ([Bambú](https://bambuestudio.com.ar/software-para-entidades-mutuales/)); still nobody claims the new web form or a multi-entity board (unverified) | Slightly down |
| Price | USD 40-80 per entity; accountant USD 150-300 a month | **USD 29 / 59 direct; USD 20 per entity via accountants**; blended USD 26-30 | Down |
| Year-3 revenue | about USD 125,000 (base) | **about USD 59,000 ARR at month 36** (base, [04](04-gtm-company-finance.md)); USD 70,000 in [02](02-market-and-competition.md)'s simpler estimate | Down by half |
| The gap | manual form, no import (from the guide) | Confirmed: about 300 boxes; the roll takes a published CSV; RePET is free JSON | Up: sharper and buildable |
| Leads | none | **302 named non-filers** (Res 1687) and 205 withdrawn licences (Res 565), with tax IDs and provinces | Up |
| Company | not covered | No local company at launch; reseller first; SAS only on a trigger | Up |
| Payment | not covered | Exempt entities skip the 30% surcharge; peso-invoice demand likely | Mixed |

**What it is worth** (36-month model in [04](04-gtm-company-finance.md); founder builds with AI agents and takes no pay; month 1 = Nov 2026):

| Case | Lending entities, month 36 | ARR, month 36 | Year-3 profit before founder pay | Peak cash need |
|---|---|---|---|---|
| Low | 54 | about USD 17,400 | about -USD 11,700 | about USD 51,300 (but the kill criteria stop it at about USD 15,000) |
| **Base** | **133** | **about USD 59,000** | **about USD 6,200** | **about USD 28,500** |
| Base, costs shared with B1 | 133 | about USD 59,000 | about USD 22,000 | about USD 12,600 |
| High | 261 | about USD 139,700 | about USD 57,700 | about USD 8,200 |

- **The base case needs about 12% of the 1,130 pool.** If the truly active pool is about 700, that is about 20%. Plan on the low-to-base band (my judgement).
- **No case pays the founder a salary within 3 years** except the high one. Adding USD 3,000 a month of founder pay from month 13 raises the base peak cash need to about USD 90,900 ([04](04-gtm-company-finance.md)).
- **The ceiling is the pool, not unit economics.** 1,130 entities at USD 30 a month is about USD 400,000 ARR at 100% share.

**Key conditions** (the first three are checkable by 20 Nov 2026):

1. **Accountants will pay.** At least 2 of 15 accountants say they would pay USD 20 per entity a month, and 3 pilots commit in writing, by **25 Oct 2026**.
2. **Pilots share real data.** At least 2 pilots give a past INAES monthly filing (the PDF) with the matching loan and savings ledgers. The calculator must reproduce them by **20 Nov 2026**.
3. **No ERP already does it.** Interviews and demo requests show that Bambú and SIGMA do not prepare the new web form for most small lenders.
4. **Payment works.** Card failures stay under 25%, or a peso reseller is signed by early January.
5. **A second vertical is in view by month 12** (B1 or another UIF-obliged group), or the base case stays a hobby.

**Do this first** (until the 25 Oct gate; under about USD 2,000 of cash, my estimate):

1. Book 25 interviews: 15 accountants or co-op graduates who serve lending entities, 10 treasurers or compliance officers.
2. Ask every pilot candidate for one past monthly filing plus its ledgers, anonymised.
3. Hire a co-op accountant who files these returns for the first 10-15 hours of spec checking.
4. Write the spec pack (form specification, roll CSV, deadline catalogue, golden test data) and start the agent build.
5. Request demos from Bambú, SIGMA and CONLAFT to learn prices and coverage.
6. Release the lawyer, penetration-test and travel budgets only if the gate passes.

**If the founder can do only one Argentine idea:** B2 has the sharper, dated hooks and real enforcement (lost lending rules, named non-filers). B1 has a pool ten times larger but weak enforcement and a real incumbent, AMLify ([B1 PLAN](../argentina-b1/PLAN.md)). Both score 5/10 alone. Together they share one AML engine, one lawyer and one support person.

### Figures used where the parts disagree

| Topic | What the parts say | Used here | Why |
|---|---|---|---|
| Buyer pool | Re-assessment about 2,000; [02](02-market-and-competition.md) and [04](04-gtm-company-finance.md) 1,130 active | **1,130**, with about 700 as a downside | 1,130 is a hard count (FATF MER 2024). The 596 co-op figure may include inactive lenders: only 38 attended INAES training |
| Who the monthly return serves | [03](03-product-and-tech.md) and [04](04-gtm-company-finance.md) price it for all "lending entities" | **Mutuales only** (about 540 active; about 1,400-1,576 hold a rule) | [01](01-law-and-requirements.md) duty #1: the SAEM return is a mutual duty. Credit co-ops buy the calendar, roll and AML pack |
| Prices | Re-assessment USD 40-80; [02](02-market-and-competition.md) USD 30 / 60 / 200 for 10 entities; [04](04-gtm-company-finance.md) USD 29 / 59 / 20 per entity | **[04](04-gtm-company-finance.md)'s plans** | Most detailed; consistent with [02](02-market-and-competition.md) (10 entities x USD 20 = USD 200); anchored to Xubio and fee scales |
| Year-3 revenue | Re-assessment USD 125,000; [02](02-market-and-competition.md) USD 70,000; [04](04-gtm-company-finance.md) USD 59,800 | **[04](04-gtm-company-finance.md)'s model** | It is monthly, with ramp, churn, seasonality and full costs. [02](02-market-and-competition.md) uses USD 40 per entity, above the blended price |
| MVP scope and dates | [03](03-product-and-tech.md): MVP demo 6 Nov, sellable about 14 Dec, AML pack in v1. [04](04-gtm-company-finance.md): MVP live 15 Nov with a Res 1567 pack | **[03](03-product-and-tech.md)'s calendar.** The Res 1567 pack is sold from early November as a done-with-you service with templates, outside the app | The software cannot be pen-tested and legally ready before late November. The pack needs only board names and minutes |
| Penetration test | [03](03-product-and-tech.md): week of 23 Nov, USD 3,000-6,000. [04](04-gtm-company-finance.md): week of 16 Nov, USD 3,000 | **23-27 Nov; budget USD 3,000-6,000** | Test after integration and expert reconciliation, not on a moving target |
| Billing provider | [03](03-product-and-tech.md): Paddle. [04](04-gtm-company-finance.md): Stripe Billing | **Stripe Billing** | Argentina needs no seller VAT registration, so a merchant of record adds little. Paddle may add a tax line while the card issuer also collects VAT (unverified) |
| Hosting cost | [03](03-product-and-tech.md): USD 35-60 a month at 50 entities. [04](04-gtm-company-finance.md): USD 200 a month in year 1 | **[04](04-gtm-company-finance.md)'s USD 200** in the model | Conservative; it includes SaaS tools. About USD 1,800 a year of slack |
| Payment fees | Model 5%; actual Stripe 5.2% (US account) to about 6% (EU account) | 5% in the model, flagged | About USD 600 a year difference at year 3 |
| Data after cancellation | [03](03-product-and-tech.md): archive at most 2 years, then delete (Law 25.326 art. 25). [04](04-gtm-company-finance.md): a paid "Archivo" plan for 10 years | **Archivo only as an active paid service**; after it lapses, at most 2 years with written consent, then delete | A paid archive keeps the processing contract alive (my reading, unverified). The lawyer must confirm |
| Local company | [04](04-gtm-company-finance.md): SAS in month 10 in the base case | **Reseller first; SAS only on a trigger.** The model keeps the SAS cost to stay conservative | Owner's rule: a local company only if really needed |

---

## 2. Why now: the law and enforcement

**Three stacks of duties land on one small entity** ([01](01-law-and-requirements.md)):

- **INAES information regimes**, filed on free INAES web systems or TAD (the federal online filing platform). Every one is a sworn statement (DDJJ).
- **UIF anti-money-laundering duties** under [UIF Res 99/2023](https://www.consejo.org.ar/storage/attachments/Resoluci%C3%B3n%20UIF%2099-2023%20-%20Asoc%20mutuales%20-5PZL7x2v5w.pdf). These are mostly records and documents that no portal keeps.
- **Governance filings** around the yearly assembly.

**Who is obliged.** There is no size threshold and no micro-entity exemption in any INAES rule. Volunteer-run entities are covered like any other ([01](01-law-and-requirements.md)).

- **All co-ops and mutuales:** the member and authorities roll and the assembly documents.
- **UIF-obligated entities:** co-ops allowed to give credit; mutuales with an approved lending (SAEM) rule, from the date of approval, even if they never lend; and co-ops and mutuales that broker loans ([Res 1567/2026 recitals](https://www.consejosalta.org.ar/wp-content/uploads/INAES-1567.pdf)).
- **Small lenders get one relief.** Those that only broker loans, or lend only their own funds collected by payroll deduction, may do the self-assessment, external review and yearly report every two years ([UIF 99/2023 arts. 5, 6, 19, 39](https://www.consejo.org.ar/storage/attachments/Resoluci%C3%B3n%20UIF%2099-2023%20-%20Asoc%20mutuales%20-5PZL7x2v5w.pdf)).

**What must be done, and when** (selected; the full 40-duty table is in [01](01-law-and-requirements.md#duty-by-duty-table)):

| Duty | Who | Deadline | Basis |
|---|---|---|---|
| Monthly lending return (Annexes I-V, VII) on the new manual web form | Mutuales with a lending rule | **20 business days after month end**; from the July 2026 period; arrears re-entered in the new system | [Res 1279/2026](https://www.argentina.gob.ar/normativa/nacional/norma-427021/texto); [Res 1424/2017](https://consejosalta.org.ar/wp-content/uploads/INAES-1424.pdf) |
| Quarterly external-audit report on the lending service, via TAD | Same | Quarterly (day count unverified) | [Res 1424/2017 art. 2](https://consejosalta.org.ar/wp-content/uploads/INAES-1424.pdf) |
| Member roll (CSV bulk load) | All entities | **10 Jan** each year | [Res 756/2025](https://contadoresenred.com/cooperativas-y-mutuales-sistema-integrado-de-nomina-de-asociados-y-autoridades/) |
| Quarterly roll with risk level, PEP status and country of residence | UIF-obligated | **10 days after each quarter end** | same |
| Authorities roll | All | 30 days after the assembly or any change | same, art. 7 |
| INAES AML filing: UIF registration, compliance officers, manual and minutes, gross loans, representatives, top 20 capital holders (co-ops), PEP statements of board members signed in TAD | UIF-obligated | **1 Dec 2026** first; then **20 Jan** yearly; update on change | [Res 1567/2026](https://www.consejosalta.org.ar/wp-content/uploads/INAES-1567.pdf) |
| Suspicious-report statistics to INAES (or a nil report) | UIF-obligated | 10 days after each quarter | [Res 806/2018](https://www.argentina.gob.ar/normativa/nacional/norma-308815/texto) |
| Risk self-assessment, method and risk-tolerance statement | UIF-obligated | **30 April** (biennial option) | UIF 99/2023 arts. 5-6 |
| Independent external review | UIF-obligated | about **28 August** (120 days later) | UIF 99/2023 art. 19 |
| AML manual (24 minimum policies), training plan and log, client files and risk ratings refreshed every 1/3/5 years, unusual-operations register, 10-year records | UIF-obligated | Ongoing; manual reviewed yearly | UIF 99/2023 arts. 8-35 |
| Monthly report of operations of 12 minimum wages or more (RMT); yearly systematic report (RSA) | UIF-obligated | Days 1-15 monthly; 2 Jan-15 Mar | UIF 99/2023 art. 39 |
| CRS and FATCA identification of members (tax residence, foreign tax ID, birth data) | Mutuales lending members' savings | No deadline yet; ARCA's reporting regime for mutuales not issued (unverified) | [Res 1038/2026](https://www.boletinoficial.gob.ar/detalleAviso/primera/342341/20260526?busqueda=1) |
| IT technical report (lenders using electronic channels) and loan-brokering IT opinion | Those entities | 30 days after year end | [Res 3034/2024](https://www.boletinoficial.gob.ar/detalleAviso/primera/318057/20241212); [Res 3036/2024](https://www.adeba.com.ar/?p=39934) |
| Quarterly loan-brokering return | Entities with a brokering rule | Quarterly (20 business days per a press source, unverified) | Res 1481/2009 art. 18 ([01](01-law-and-requirements.md)) |
| Mutual assembly: pre-assembly documents via TAD; post-assembly documents | Mutuales | 10 business days before; 30 days after | [Res 3108/2018](https://www.argentina.gob.ar/normativa/nacional/norma-316294/texto) |
| Co-op assembly within 4 months of year end; documents 15 days before | Co-ops | Yearly | [Law 20.337 arts. 41, 47, 48](https://faolex.fao.org/docs/pdf/arg162229.pdf) |

**How filing works today.** No INAES system has a public API. The monthly form is typed by hand. The roll accepts a semicolon CSV with 23 defined columns. The AML module promises "data migration and automatic loading", in an unknown format. TAD takes scanned signed PDFs and needs the representative's own tax password (clave fiscal) ([01](01-law-and-requirements.md#filing-channels-and-formats)). So the product must **prepare, check and track, and never file**.

**Penalties** ([01](01-law-and-requirements.md)):

- **INAES:** after a proceeding (sumario), a fine, disqualification or withdrawal of the licence to operate. The lending rule can lapse after 3 missed monthly periods and a 20-day warning ([Res 3034/2024 art. 10](https://www.boletinoficial.gob.ar/detalleAviso/primera/318057/20241212)). For a lender, that ends the business.
- **UIF:** 15 to 2,500 módulos per breach at ARS 54,140 each, so ARS 0.8 million to ARS 135 million. A missing suspicious-transaction report costs 1 to 10 times the operation. Board members are jointly liable, and the compliance officer can be disqualified for up to 5 years ([Law 25.246 art. 24](https://stabogados.com.ar/penal/leyes-penales-especiales/ley-25246/arts-24-26/); [Res UIF 95/2025](https://www.argentina.gob.ar/normativa/nacional/norma-414295/texto)).

**Enforcement evidence:**

- **Res 878/2024:** proceedings and automatic suspension for entities missing assembly filings since 2017 ([summary](https://contadoresenred.com/resolucion-878-2024/)).
- **Res 565/2026 (March 2026):** licences of **205 mutuales** withdrawn for missing filings in 2017-2024 ([BO](https://www.boletinoficial.gob.ar/detalleAviso/primera/339254/20260310); count in [02](02-market-and-competition.md)).
- **Res 1687/2026 (31 Aug 2026):** **302 loan-brokering mutuales** that had filed none of their quarterly returns to end-2025 got a last 30 days, or lose the rule ([BO](https://www.boletinoficial.gob.ar/detalleAviso/primera/346572/20260831)).
- **2019:** 20,612 co-ops and 1,847 mutuales suspended ([Diario de Cuyo](https://www.diariodecuyo.com.ar/noticias/hay-1-700-puestos-de-trabajo-en-juego-por-la-medida-de-suspender-a-las-cooperativas-330303.html)).
- **FATF review period:** 23 orders revoked licences to provide financial services ([FATF MER, para 499](https://www.mpf.gob.ar/procelac-lavado/files/2020/04/Argentina-Mutual-Evaluation-Report-2024.pdf.coredownload.inline.pdf)).
- **UIF cash fines** against a lending mutual: none confirmed (unverified).
- **Pattern:** enforcement is administrative and wholesale (lists, suspensions, lapsed rules, withdrawn licences). Cash fines are rare. The threat is still existential for a lender.

**Pain the regulator itself admits:**

- The old spreadsheet flow "generaba reiterados inconvenientes técnicos" (caused repeated technical problems) ([Res 1279/2026](https://www.argentina.gob.ar/normativa/nacional/norma-427021/texto)).
- Entities asked for more time on the roll, and INAES moved the deadline from 12 Oct to 11 Dec 2025 ([Res 2147/2025](https://www.consejosalta.org.ar/wp-content/uploads/Res-2147-2025.-INAES.pdf)).

**What is still moving:**

- **The January 2027 stack:** 10 Jan yearly and Q4 roll; 20 Jan AML yearly filing; 30 Jan IT reports. Then 15 Mar RSA, 30 Apr self-assessment, about 28 Aug external review ([01](01-law-and-requirements.md#upcoming-changes)).
- **CRS reporting to ARCA** for mutuales is expected but not issued. ARCA RG 5887/2026 changed the general CRS rule without naming mutuales ([ARCA](https://servicioscf.afip.gob.ar/publico/sitio/contenido/novedad/ver.aspx?id=5857)).
- **INAES keeps digitising.** An import for the monthly form could appear at any time ([Res 1567 recitals](https://www.consejosalta.org.ar/wp-content/uploads/INAES-1567.pdf)).
- **Rule churn:** seven relevant resolutions in 18 months (756/2025, 2147/2025, 1038, 1060, 1279, 1567, 1687/2026). The rule set must be data, versioned by date.

---

## 3. Customers

| Segment | Count | Source | Confidence |
|---|---|---|---|
| Co-ops in force, all types | 22,393 (81.5% worker co-ops) | [INAES report 2021-23, pp.9-12](https://www.argentina.gob.ar/sites/default/files/2023/12/inaes_informe_gestion_21-23.pdf) | High for the register; many inactive |
| Mutuales in force | 3,903 (about 3,700 after Res 565) | same, pp.13-14 | High |
| Mutuales with an approved lending rule | 1,576 | same, chart 8 | High (2023) |
| Mutuales registered as AML reporting entities | 1,414 | [FATF MER, Table 1.1](https://www.mpf.gob.ar/procelac-lavado/files/2020/04/Argentina-Mutual-Evaluation-Report-2024.pdf.coredownload.inline.pdf) | High (March 2024) |
| **Mutuales that actually offer financial services** | **537** (542 attended INAES AML training in 2021-22) | FATF MER para 110; INAES report p.29 | Medium |
| **Credit co-ops registered as AML reporting entities** | **596** (only 38 attended training) | FATF MER | Medium; activity unclear |
| **Core pool: active lending mutuales plus credit co-ops** | **about 1,130** (downside about 700, my estimate) | sum | Medium |
| Dormant lending-rule holders | about 870 | 1,414 minus 537 | Low |
| Named non-filers: brokering mutuales (Res 1687) | 302 | [02](02-market-and-competition.md) count of the annex | High |
| Mutuales whose licence was withdrawn (Res 565) | 205 | same | High |
| Accountants and co-op graduates who serve them | not found | — | Unknown |

**How the counts fit.** The register overstates the market. INAES keeps purging. Almost half of today's co-ops registered in 2021-2023 and are mostly worker co-ops, poor prospects for paid software ([02](02-market-and-competition.md)). CAM's AML adviser said more than 2,000 entities work under UIF 99/2023 ([ANSOL](https://ansol.com.ar/servicios/lavado-de-activos-cooperativas-mutuales-uif/)), which matches the 2,010 registered. About 1,130 are active.

**Segments, in order of value:**

1. **Active lending mutuales (about 540).** Every duty, including the monthly return. The core.
2. **Credit co-ops (up to 596).** AML filing, quarterly roll, AML records, assembly. No monthly return. They buy the AML pack (v1).
3. **Dormant lending-rule holders (about 870).** They must still file monthly, or the rule lapses ([Res 1424/2017 art. 1](https://consejosalta.org.ar/wp-content/uploads/INAES-1424.pdf)). Little calculation, so they need reminders and a catch-up service, not the calculator (my reading).
4. **Non-lending mutuales and other co-ops (thousands).** Yearly roll and assembly only. A USD 5 "Registro" add-on sold through accountants.

**Who they are.** Mostly workplace, union, club or professional mutuales: police, municipal workers, judicial staff, medical sales agents. Loans are often repaid by payroll deduction ([Res 1687 annex](https://www.boletinoficial.gob.ar/detalleAviso/primera/346572/20260831); [Bambú](https://bambuestudio.com.ar/)). About 9 employees per mutual on average, so the median likely has a few staff or none and a volunteer board (inference, [02](02-market-and-competition.md)). 76% sit in the Centro region: Buenos Aires province 933, Santa Fe 757, Buenos Aires city 707, Córdoba 411 ([INAES report p.13](https://www.argentina.gob.ar/sites/default/files/2023/12/inaes_informe_gestion_21-23.pdf)). INAES rates most of them low risk: 1,162 of 1,385 mutuales in 2023 ([FATF MER, Table 6.3](https://www.mpf.gob.ar/procelac-lavado/files/2020/04/Argentina-Mutual-Evaluation-Report-2024.pdf.coredownload.inline.pdf)).

**The real buyer is the accountant.** Outside accountants and Licenciados en Cooperativismo (co-op graduates) prepare the figures, sign reports and serve several entities each. One with 10 lending clients tracks about 200 filing events a year ([02](02-market-and-competition.md)). Expected mix: 65% of entities through accountants, 35% direct ([04](04-gtm-company-finance.md)).

**What they pay today:**

- Minimum ethical fee for one piece of UIF advice: ARS 62,500, about USD 41 ([CPCESE Res 06/2026](https://cpcese.org.ar/documentos/Lic.%20Cooperativas%20R.%2006-25.pdf)).
- Accounting SaaS for firms: Xubio ARS 49,600-271,900 a month (USD 33-179) ([Xubio](https://xubio.com/ar/precios-contadores)); Colppy from USD 85 a month ([Colppy](https://www.colppy.com/precios/)).
- ERPs, CONLAFT, AML manuals and external reviews: prices not published (unverified).
- INAES and UIF training: free ([UIF](https://www.argentina.gob.ar/node/392409)).

**Jobs, in their words** ([03](03-product-and-tech.md)):

1. "Que no se me pase ningún vencimiento de ninguna de mis mutuales." (Don't let me miss any deadline for any client.)
2. "Pasar del Excel de la cartera a los anexos del SAEM sin tipear 300 números a mano." (From the loan-book Excel to the annexes without typing 300 numbers.)
3. "Saber antes de cargar si va a dar error." (Know before I type whether it will fail the check.)
4. "Que el CSV de la nómina no rebote." (A roll file that is not rejected.)
5. "Ponerme al día con los períodos atrasados." (Catch up on overdue periods.)
6. "Tener todo guardado por si viene una inspección." (Keep everything for an inspection.)
7. (v1) "Armar la autoevaluación y el manual sin empezar de cero." (Self-assessment and manual without starting from zero.)

---

## 4. Competition

| Alternative | What it does | Price | What it means for us |
|---|---|---|---|
| **INAES web systems** (monthly form, roll, AML module, TAD) | Receive the filings. Partial save and end-of-form checks on the monthly form; CSV bulk load on the roll; "automatic loading" promised in the AML module. No calculation from the ledger, no calendar, no multi-entity view, no UIF records | Free | The filing channel, not a rival for preparation. Each upgrade shrinks part of the gap |
| UIF reporting system | Receives suspicious and systematic reports | Free | Same |
| **Bambú Estudio Soft** (Paraná) | Mutual and credit-co-op ERP. Claims "exportación de archivos para INAES", reports for INAES, UIF and AFIP, and UIF compliance ([Bambú](https://bambuestudio.com.ar/software-para-entidades-mutuales/)). New web form: not claimed (unverified) | Not published | About 14 client logos. **Main threat and best integration partner** |
| SIGMA by NeoSistemas (Rosario) | Mutual ERP with "Alertas UIF" ([NeoSistemas](https://www.neosistemassrl.com/neosistemas_15/software-gestion-empresas-mutuales-financieras/)) | Not published | Part of the UIF side for its own clients |
| Nexa (Pergamino), GEM by Renova (Rosario) | Lending operations; no INAES or UIF claim ([Nexa](http://nexa.com.ar/nexa-mutuales/); [GEM](https://renovasrl.com.ar/software-para-mutuales-gem/)) | Not published | Import sources, not rivals |
| **CONLAFT S.R.L.** (Rafaela) | AML SaaS (risk matrix, KYC, member file, monitoring) plus self-assessments, manuals and training. Founded May 2024, 8 staff, 5 systems deployed ([Cancillería profile](https://www.cancilleria.gob.ar/userfiles/ut/conlaft_espanol.pdf); [conlaft.com](https://www.conlaft.com/)). No INAES preparation claimed (unverified) | Not published | **Closest rival on AML.** Proves some will pay. Partner for done-for-you AML work, or a rival if it adds INAES preparation |
| Pirani (Colombia) | Generic AML risk software with an Argentina UIF guide ([Pirani](https://www.piranirisk.com/es/hub-regulatorio/prevencion-lavado-activos-argentina-cumplimiento-uif)) | Not shown | Aimed at larger firms |
| Accountants, co-op graduates, law firms | Do the filings by hand; write manuals | About USD 41 per advice job; retainers unpublished | **The buyers and the channel** |
| Federations (CAM, FEMUCOR, FACC, Cooperar) | Advice and training; CAM has an AML adviser | Membership | Partners; white-label buyers |
| Content sites (Contadores en Red, +blogdelcontador, Tributum) | Step-by-step guides | Free to paid | Advertising channel |

**Conclusion.** Local products exist but each does part of the job, and none publishes a price.

- **Open gaps** (unverified for the ERPs):
  1. preparing the new manual monthly form from a loan spreadsheet, with INAES's checks run before typing;
  2. a multi-entity deadline and status board for accountants;
  3. clearing arrears for dormant and listed entities.
- **The ERPs serve the top tier** and sell by demo. Integrate with their exports instead of fighting them.
- **The threats to watch are INAES itself and Bambú adding the web form.** INAES keeps no UIF records and gives accountants no cross-client view. Bambú sells a whole ERP to each entity, not a light tool to the accountants who serve many.
- **Partial and unpriced incumbents are an opening** under the owner's criteria. A public, low price is itself a differentiator.

---

## 5. Product

### Positioning

> "Del Excel de la cartera al INAES y la UIF: controlado y a tiempo." From your loan spreadsheet or ERP export to INAES and the UIF, checked and on time.

- **A compliance layer, not an ERP.** It reads the ERP or spreadsheet the entity already has.
- **For accountants first.** One board for every client entity; the client's treasurer can upload the ledgers.
- **It prepares; the entity files and signs.** It never logs in to INAES or TAD, never holds an INAES password or clave fiscal, and never gives legal or accounting advice. Every filing is the entity's sworn statement ([01](01-law-and-requirements.md), requirements 39 and 86).
- **Rules as data, dated.** Every output shows "rules as of" and the form-specification version.

### Users

| Role | Who | Main jobs | Rights |
|---|---|---|---|
| Accountant or co-op graduate | Outside professional with 3-20 clients; the main buyer | Prepare monthly returns, roll files and the AML filing; keep the calendar; keep evidence | All entities of the firm; invites; billing |
| Entity staff | Paid clerk or volunteer treasurer | Upload ledgers and member list; upload signed minutes and receipts | Own entity |
| Compliance officer (titular and deputy) | Usually a board member registered with the UIF | Approve risk ratings; training log; alerts; self-assessment and manual (v1) | Own entity, plus the confidential alerts area (v1) |
| Board signers | President, secretary, treasurer, 3 supervisory-board members | Approve the monthly figures; their CUITs go on every monthly filing | Read and approve |
| External auditor | Registered accountant who checks the annex sheets | Read annexes and checks; download the audit pack | Read only |
| External independent reviewer (REI) | Yearly AML reviewer | Read the AML evidence pack, with identities masked (v1) | Time-limited read-only link |
| Platform editor | Founder, later a paid domain expert | Update form spec, rules, deadlines, holidays, templates | Content admin; no customer data by default |

Source: [03](03-product-and-tech.md#users-and-jobs).

### Feature map

| Area | MVP (sellable about 14 Dec 2026) | v1 (Jan-Apr 2027) | Later |
|---|---|---|---|
| **Workspace** | Accountant firm with many entities; entity profile (CUIT, registration, type, province, lending-rule number and date, year end, UIF-obligated, biennial option, electronic channels); roles; Spanish UI; peso number format | Entity staff self-service; per-entity audit pack | White-label for federations |
| **Deadline engine** | Every duty in §2; Argentine business days with holiday overrides; status per period; e-mail reminders at 14/7/3/1 days; iCal feed; cross-client board; "lending rule at risk" alert at 2 and 3 missed months | WhatsApp reminders; provincial variants; "what changed" feed | Full co-op assembly rules |
| **Monthly lending return** | Excel templates and column mapping for loans, savings and balances; loans sorted into situations 1-5, types, maturity bands and guarantee types; **Annexes I-V and VII computed**; our own re-run of the form's cross-annex checks; prior-month comparison; **copy sheet** in the form's exact order (screen and PDF); arrears queue; signature sheet; upload the INAES PDF as proof | **Browser extension "Completar SAEM"** that fills the open form in the user's own session and stops before "Grabar"; ERP presets (Bambú, SIGMA) | Read-back check of the filed PDF |
| **Member register and roll** | Register mirroring the 23-column INAES CSV plus PEP, risk level, residence and CRS fields; CUIT check digit and locality-code checks; **additions and removals CSVs since the last remito**; import of INAES's own Excel export; authorities register | Member self-service link (due-diligence data, PEP and CRS self-certification); RePET screening | ARCA CRS file once the format exists |
| **AML (UIF 99/2023, Res 1567)** | Checklist and evidence slots; **Word templates for the officer-appointment and manual-approval minutes; PEP-statement tracker per board member** (states draft / signed in TAD / transmitted) | Res 1567 data pack (gross loans from the ledger, top 20 capital holders for co-ops); self-assessment wizard; risk-tolerance statement; manual generator mapped to the 24 policies; training plan and log; member risk ratings with 1/3/5-year refresh; unusual-operations register (officer only); 12-minimum-wage flags and RMT list; RSA data | Monitoring rules; REI portal |
| **Assembly and books** | Pre- and post-assembly deadlines and checklists | Document set (convocation, agenda, attendance register, list of authorities) | Book register |
| **Evidence vault** | Upload and tag receipts, minutes, remitos, TAD numbers; 10-year retention; audit log; a task cannot be "done" without evidence | Inspection pack (ZIP with index) | |
| **Billing** | Stripe Billing in USD with the peso equivalent shown | Annual prepay discount; reseller seats | Federation invoicing |

**Why this cut** ([03](03-product-and-tech.md#why-this-cut-for-the-mvp)):

- The **monthly return** recurs 12 times a year, has a fresh, documented pain and no rival claims it.
- The **roll export** is cheap because INAES publishes the layout. The Q4 roll falls due about 10 Jan 2027.
- The **calendar** makes accountants log in every week.
- The **full AML pack waits for v1.** Its content needs careful expert review, and CONLAFT already sells it. The light Res 1567 templates and tracker are in the MVP because the first filing is due 1 Dec (my addition to [03](03-product-and-tech.md)'s cut; small build).
- The **extension waits for v1.** The live form was not seen, INAES's terms of use are unknown, and the page can change at any time. The copy sheet works without it.

**Requirements list.** The 88 testable requirements in [01 §PRODUCT REQUIREMENTS](01-law-and-requirements.md#product-requirements) are the acceptance checklist. MVP: sections A-E except 40, 41 and 44 (that is 1-39 and 42-43), the assembly deadlines in 75-77, K (83-86) and L (87-88). v1: 40-41, 44, F-H (45-74), the assembly documents and books in 78-80, and J (81-82). This split is mine, following [03](03-product-and-tech.md)'s feature map.

### Key flows

1. **Accountant adds the first client (target 30 minutes).**
   1. Sign up and turn on two-factor login.
   2. "Agregar entidad": type the CUIT (check digit verified), type and province.
   3. Answer five questions: lending-rule number and date; year end; UIF-obligated; own-funds or payroll-only lender (biennial option); electronic channels.
   4. The app builds 12 months of obligations, plus any overdue periods ticked.
   5. Upload the member list. Invite the treasurer (optional).
2. **Monthly return (target 20 minutes per entity once set up).**
   1. Day 1 after month end: reminder to treasurer and accountant.
   2. Upload the loan book, savings accounts and a small balances sheet.
   3. The app classifies each loan and computes averages (method shown).
   4. Annexes appear in the INAES layout; each value traces to its source rows.
   5. Checks run: our re-run of the form's relations, plus sanity checks against last month. Red items must be fixed or explained.
   6. Approval by the treasurer or accountant; optional in-app approval by the signers.
   7. The user opens INAES in another tab and works down the copy sheet (v1: presses "Completar"). The user presses "Validar Consistencia" and "Grabar formulario" and downloads the PDF.
   8. The user drops the INAES PDF into the app. The period turns green.
3. **Roll (quarterly or yearly).** Reminder 10 days ahead; upload the current list; see additions, removals and changes since the last remito; download two CSVs; upload them at INAES; store the remito.
4. **Arrears catch-up.** Tick the overdue months; supply each month's ledgers (v1: rebuild month-ends from one loan book); each month runs through flow 2; the board shows "4 of 6 filed".
5. **Res 1567 filing (MVP, light).** Officer and manual minutes from templates; PEP tracker per board member; checklist of items (a)-(f); TAD numbers stored; due 1 Dec, then 20 Jan.
6. **Yearly AML cycle (v1).** December: board and PEP updates. 20 January: AML data pack. 30 April: self-assessment and tolerance statement approved and filed. About 28 August: external review filed.
7. **Accountant's Monday.** Open the board, filter "due in the next 10 days", work entity by entity.

### Screens

1. Firm board (entities by obligations, colours, "3 late, 7 due this week").
2. Entity home.
3. Calendar (month and list; iCal link).
4. Monthly return: upload (three drop zones, templates, mapping dialog).
5. Monthly return: annexes (tabs laid out like the INAES form; click a number to see its rows; checks panel).
6. Monthly return: copy sheet (exact INAES labels, value, copy button, tick box; PDF).
7. Member register and member card.
8. Authorities.
9. Res 1567 tracker (MVP light; full AML area in v1, officer-only parts restricted).
10. Documents (evidence vault).
11. Settings (users, roles, two-factor, billing, export, delete).
12. Admin content (form-spec versions, rule tables, deadline catalogue, holiday overrides, templates; changes need a test run).

Design rules: desktop first; Argentine Spanish; the article number behind every rule in a tooltip; everything printable ([03](03-product-and-tech.md#screens)).

---

## 6. Technical design

**Stack: one plain monolith that one founder can debug at 11 pm on a deadline day** ([03](03-product-and-tech.md#architecture-and-stack)):

- **App:** Python 3.12 and Django 5, server-rendered pages with HTMX. Python handles messy Excel (openpyxl, pandas) and exact money (Decimal).
- **Database:** PostgreSQL 16. Every tenant table carries `firm_id`, one scoped manager, cross-tenant tests on every URL.
- **Jobs:** a Postgres-backed queue (Procrastinate), so no Redis. Imports, PDFs, reminders, nightly RePET sync (v1).
- **Documents:** WeasyPrint for the copy sheet and audit pack; docxtpl for Word templates.
- **Files:** S3-compatible EU object storage with versioning and object lock for the 10-year vault.
- **Extension (v1):** TypeScript, Chrome Manifest V3, a few hundred lines, reading the same form specification.
- **LLM (optional):** only to suggest column mappings from spreadsheet headers, never with member data; cents a month ([Anthropic pricing](https://platform.claude.com/docs/en/about-claude/pricing)).

**Content kept out of code:**

- The **form specification** (about 300 input fields, their order, exact labels, formulas and checks) in a versioned JSON or YAML file. One source of truth for the calculator, the screens, the copy sheet and the extension. An INAES change is a content edit plus golden tests.
- **Obligation rules** with valid-from dates.
- **Legal parameters** (provision rates, guarantee-fund percentage, limit multipliers, minimum wage) as dated rows with a source URL.
- **Templates** as Word files with simple tags.

**The calculation that must be specified first** ([01](01-law-and-requirements.md#duty-by-duty-table); [03](03-product-and-tech.md#the-calculation-is-the-product-what-must-be-specified)):

- **Arrears situations:** 1 up to 30 days; 2: 31-90; 3: 91-180; 4: 181-365; 5: over 365.
- **Provision rates** by situation 1-5: no guarantee 1/5/20/50/100%; personal 1/5/20/25/50%; real 1/3/10/15/25%. Pesos and foreign currency separately ([guide](https://contadoresenred.com/wp-content/uploads/2026/06/Instructivo.pdf)).
- **Annex III:** guarantee fund at the art. 9(b) percentage (shown as 10%); liquid capital x 25 and net equity x 15 limits; members above the per-member maximum.
- **Two open definitions:** how "promedio período" is computed, and which guarantee-fund rules apply after the 2016 suspension by Res 142/16 ([BO](https://www.boletinoficial.gob.ar/detalleAviso/primera/220214/20191030)). Both are switchable parameters until the expert settles them in week 0.

**Main tables:** firm, user, membership (roles), entity, obligation_type, obligation_instance, holiday, parameter, member, authority, roll_submission, import_batch, loan, savings_account, balance_item, form_spec, monthly_return, document, audit_event, reminder; v1 adds member_risk_review, aml_case and training_record ([03](03-product-and-tech.md#data-model)).

**Data sources and integrations:**

| Source | Access | Cost | Use |
|---|---|---|---|
| INAES monthly form | Entity CUIT + access code; manual entry; PDF receipt ([guide](https://contadoresenred.com/wp-content/uploads/2026/06/Instructivo.pdf)) | Free | Copy sheet (MVP); extension in the user's session (v1); PDF stored as proof |
| INAES roll | Semicolon CSV, 23 columns, header row; Excel export of the current roll ([manual](https://servicios.infoleg.gob.ar/infolegInternet/anexos/410000-414999/411657/res756-1.pdf)) | Free | Generate additions and removals files; seed the register. Where the 3 UIF fields go is unknown (unverified) |
| INAES AML module | Web; "migration and automatic loading"; manual not read | Free | Data pack and tracker |
| TAD | Representative's clave fiscal | Free | Checklist and evidence slots only |
| RePET terrorist list | Free JSON, apparently daily: 959 persons and 269 entities on 10 Oct 2026 ([RePET](https://repet.jus.gob.ar/)) | Free | Nightly sync and fuzzy screening (v1) |
| PEP data | No official Argentine database; OpenSanctions at about EUR 0.10 per call ([OpenSanctions](https://www.opensanctions.org:443/api/)) | Paid licence | Self-declaration in MVP; optional paid check later |
| ARCA taxpayer register | SOAP services need an Argentine CUIT and certificate ([ARCA WSAA](https://arca.gob.ar/ws/documentacion/wsaa.asp)) | Free | Check digit only; no lookup from a foreign company |
| Holidays | Community API ([ArgentinaDatos](https://api.argentinadatos.com/v1/feriados/2026)); 9 Nov 2026 added for the Pope's visit | Free | Seed table plus admin override |
| Minimum wage (SMVM) | ARS 391,200 in Oct 2026, ARS 437,000 by Apr 2027 ([Res 4/2026](https://www.colegio-escribanos.org.ar/noticias/2026_09_02_Consejo_Salario_Res-4-26.pdf)) | Free | Dated parameter; 12 x SMVM threshold |
| Mutual ERPs | Export formats unknown | — | Generic mapping; saved presets from pilot files |
| Stripe | Billing API | About 5-6% per charge | Subscriptions and one-off packs |
| E-mail | EU provider, e.g. Scaleway at EUR 0.25 per 1,000 ([Scaleway](https://www.scaleway.com/en/pricing/managed-services/)) | Small | Reminders |

**Browser extension rules (v1).** Runs only on the INAES domain, only on the user's click, inside the user's own logged-in session. Never sees or stores a password. Never presses "Grabar". Ask the INAES help desk (consultasweb@inaes.gob.ar) before release ([INAES](https://www.argentina.gob.ar/node/109047)). Accountants already use small Chrome helpers on government sites ([Arca Cuits Guardados](https://chromeboard.com/extension/arca-cuits-guardados-kjchgfacnigoofoffeneloimeknoiihe)).

**Security and privacy** ([03](03-product-and-tech.md#security-privacy-and-liability)):

- **Role:** the entity is the controller; we are its service provider under Law 25.326 art. 25. No other use; delete at the end of the service, or keep at most 2 years with written consent ([Law 25.326](https://www.argentina.gob.ar/normativa/nacional/ley-25326-64790/texto)). The 10-year UIF duty stays with the entity, so the app gives a full export at exit.
- **Hosting in the EU**, which Argentina treats as adequate ([Disp. 60-E/2016](https://www.argentina.gob.ar/normativa/nacional/267922/texto)). The US is not on the list, so keep US sub-processors away from member data, or sign the AAIP model clauses ([AAIP](https://www.argentina.gob.ar/transferencias-internacionales)).
- **Baseline:** two-factor login for all firm users; tenant isolation tested on every URL; encryption in transit and at rest; logged break-glass access only; upload scanning; append-only audit log; daily encrypted backups to a second EU provider with a restore drill; dependency and code scanning in CI; external penetration test before the first paid customer, then yearly.
- **Suspicious-report data** sits in its own permission scope, visible only to the compliance officer, because tipping-off is forbidden ([Law 25.246 art. 21](https://servicios.infoleg.gob.ar/infolegInternet/anexos/60000-64999/62977/texact.htm)).
- **No breach-notice duty was found** in Law 25.326. Notify customers within 72 hours anyway. Database registration with the AAIP is the controller's duty (unverified); provide a ready text.

**Hosting.** Hetzner is cheapest but raised prices in 2026 and limits new customers ([wz-it](https://wz-it.com/en/blog/hetzner-price-increase-june-2026-cpx-ccx-alternatives/)). Plan B: Scaleway or OVHcloud in France.

**Running cost** (estimates from [03](03-product-and-tech.md#hosting-and-running-costs), before staff; [03](03-product-and-tech.md) assumed USD 40 per entity, above the blended USD 26-30, so the shares below are slightly low):

| Paying entities | Infrastructure per month | Card fees at USD 40 per entity | Share of revenue (infrastructure) |
|---|---|---|---|
| 50 | about USD 35-60 | about USD 125 | 2-3% |
| 300 | about USD 140-230 | about USD 750 | 1-2% |
| 1,000 | about USD 350-600 | about USD 2,500 | 1-1.5% |

Card fees, the expert retainer and the founder's support time cost more than servers.

---

## 7. Development steps

### Basis

- The founder builds with Claude Code and several AI agents in parallel. No salaried developers.
- The founder is product owner, spec writer, reviewer and integrator. Agents write code and tests. Paid humans only check the law, the arithmetic and the security.
- **The binding constraint is not coding speed.** It is: a correct form specification and golden test data; the founder's review capacity; and the outside steps (expert sign-off, lawyer, penetration test, pilots) ([03](03-product-and-tech.md#development-plan)).

### Dates that drive the plan

- Monthly return due dates (20 business days, national holidays and bridge days skipped; calculated in [03](03-product-and-tech.md#timing-that-matters-dates-are-my-calculation)): September period **29 Oct**; October period **1 Dec**; November period **31 Dec**; December period **29 Jan 2027**. Whether bridge days and 24 and 31 December count is (unverified).
- First INAES AML filing **1 Dec 2026**; yearly AML filing **20 Jan 2027**; Q4 roll about **10 Jan 2027**; UIF self-assessment **30 Apr 2027** ([01](01-law-and-requirements.md#upcoming-changes)).
- So pilots must use the product on the October period, and the paid launch must land before the January stack.

### Calendar (start Monday 12 Oct 2026; from [03](03-product-and-tech.md#calendar-start-monday-12-oct-2026))

| Week | Dates | Phase | Output | Exit test |
|---|---|---|---|---|
| 0 | 12-16 Oct | **Spec pack** | Transcribe the monthly form into `form_spec`; Res 756 CSV spec; deadline catalogue; holiday and parameter seeds; a synthetic mutual (about 500 loans, 300 savings accounts, 2 currencies) hand-computed in a spreadsheet as the golden case; interface contracts; repository, CI, EU staging, agent rules file. Recruit the expert and 3 pilot accountants | Expert agreed; golden case exists; contracts frozen |
| 1 | 19-23 Oct | **Foundation** (1-2 agents, serial) | Login with two-factor, firms, entities, roles, tenant scoping, audit log, Spanish base UI, storage, job queue, deploy pipeline | Sign up, add an entity, invite a treasurer; cross-tenant tests green |
| — | **25 Oct** | **Gate** | Interviews done; pilots committed; ledger samples promised | See §13 |
| 2 | 26-30 Oct | **Parallel wave A** (4 agents + QA) | S1 deadlines and calendar; S2 imports; S3 annex calculator; S4 member register and roll CSV | Each stream's tests green; S3 reproduces the golden case |
| 3 | 2-6 Nov | **Parallel wave B** (3 agents + QA) | S5 annex screens, copy sheet, arrears queue, filing proof; S6 firm board and e-mail reminders; S7 vault, Stripe billing, settings, export and delete; plus Res 1567 templates and PEP tracker | **MVP demo 6 Nov** (about 3 build weeks): an anonymised pilot file goes from upload to copy sheet; roll CSV generated |
| 4 | 9-13 Nov | **Integration and hardening** | Integration agent, security agent, Spanish help pages; end-to-end on 3 anonymised pilot datasets; restore drill | No open high bugs |
| 5 | 16-20 Nov | **Expert reconciliation and legal texts** | Expert compares the app's annexes with 2-3 returns pilots already filed; every difference fixed or explained. Lawyer drafts terms, privacy policy and processing agreement | **Zero unexplained differences** |
| 6 | 23-27 Nov | **Penetration test; shadow pilot** | External test, 3-4 tester-days. Pilots prepare the October period in the app alongside their usual method, under a signed pilot agreement | Report received; shadow figures match |
| 7 | 30 Nov-4 Dec | **Fix and file** | Fix and retest; pilots file the October period from the copy sheet; roll file tested on 2 entities | Retest clean of high and critical; at least 3 real returns filed |
| 8 | 9-11 Dec | **Sellable** (7-8 Dec are holidays) | Legal texts and prices live; onboarding e-mails | **Paid launch about 14 Dec 2026** |
| v1 | Jan-Apr 2027 | **v1** | Extension (January, after the INAES help-desk check); Res 1567 data pack before 20 Jan if feasible; self-assessment wizard, manual, training log, risk ratings and RePET screening before 30 April; WhatsApp; ERP presets; brokering return if a pilot shows the form | AML content signed off by an expert |

This fits the owner's plan: an MVP in about 3 build weeks, and sellable about 8-9 weeks from today once the spec week, legal content, the security test and pilots are counted.

### Agent work streams (each in its own git worktree and Django app)

| Stream | Owns | Depends on | Key tests |
|---|---|---|---|
| S0 Foundation | accounts, tenancy, audit, CI | — | Auth, two-factor, roles, cross-tenant denial |
| S1 Deadlines | obligations, calendar | S0 | Every due date in 2026-2027 against a hand-made table; holiday overrides; iCal |
| S2 Imports | imports | S0 | Messy Excel (merged cells, text numbers, decimal commas, text dates); CUIT check digit; row errors in plain Spanish |
| S3 Calculator | saem engine | contracts 1-3 | Golden case to the cent; every loan in exactly one bucket; parameter changes by date |
| S4 Members and roll | members, roll | S0, S2 | Round-trip with INAES's Excel export; additions and removals since the last remito; length limits |
| S5 Return screens | saem views and PDF | S3 | Snapshot per annex; copy-sheet order equals form order |
| S6 Board and reminders | board, notify | S1 | Status colours; reminder schedule |
| S7 Vault, billing, settings | vault, billing, settings | S0 | Signed links expire; retention dates; Stripe webhooks; full export; delete |
| QA (continuous) | end-to-end tests | all | Playwright flows 1-5; a cross-tenant test for every new URL; dependency audit |
| Reviewer (every PR) | — | all | Reads the diff against the stream brief and contracts before the founder merges |

**Interface contracts written in week 0:** the `form_spec` schema; the calculator output; the canonical loan, savings and balance rows; the deadline rule language ("20 business days after period end"); the roll CSV column order. **Rules:** one stream per worktree; no stream edits another's models; every PR keeps the golden case and cross-tenant suite green; the founder merges at least daily ([03](03-product-and-tech.md#agent-work-streams-each-in-its-own-git-worktree-and-django-app)).

### MVP definition of done

1. Three pilot accountants with at least 5 entities in total are onboarded.
2. For at least 3 past periods, the app's annexes equal what the entities filed, or the expert accepts every difference.
3. At least 3 real monthly returns are filed at INAES from the copy sheet. Pilots report how many boxes "Validar Consistencia" flagged.
4. A roll CSV from the app is accepted by INAES with zero row errors for at least 2 entities.
5. Each pilot entity's calendar lists every applicable obligation, with dates checked by the expert.
6. Cross-tenant tests pass on every URL. No high or critical penetration-test finding remains after retest.
7. A backup restore drill works; a full customer export works.
8. Terms, privacy policy and processing agreement are live. The form spec and rules carry the expert's sign-off and a "rules as of" date.
9. Billing works end to end (sandbox plus one real Argentine card payment).
10. Help pages in Argentine Spanish exist for flows 1-5.

### Concierge bridge

From week 3, offer arrears catch-up and monthly preparation as a done-for-you service, using the app internally. It earns early revenue and tests the calculator on real files. Only with the entity's signed authorisation and a processing agreement ([03](03-product-and-tech.md#concierge-bridge-optional-from-week-3)). Keep it small: the founder is abroad and the deadline peaks collide.

### Build budget (cash; founder unpaid)

**Until the 25 Oct gate** (my estimate): AI tools about USD 200, hosting and domain about USD 50, the expert's first 10-15 hours about USD 400-900, landing page tools about USD 50. **Under about USD 2,000.**

**To sellable (Oct to mid-Dec 2026)** ([03](03-product-and-tech.md#budget)):

| Item | Low | High |
|---|---|---|
| Claude subscription for Claude Code, 3 months ([Claude pricing](https://claude.com/pricing)) | USD 300 | USD 600 |
| Extra AI capacity for parallel agents | USD 0 | USD 600 |
| Hosting, staging and production | USD 100 | USD 250 |
| Domain, e-mail, small tools | USD 50 | USD 150 |
| Domain expert who files these returns, 30-40 hours at USD 40-60 | USD 1,200 | USD 2,400 |
| Argentine lawyer: terms, privacy, processing agreement, registration and extension questions | USD 1,500 | USD 3,000 |
| External penetration test with retest ([Blaze InfoSec](https://www.blazeinfosec.com/post/how-much-does-penetration-testing-cost/)) | USD 3,000 | USD 6,000 |
| Pilot thank-you | USD 0 | USD 300 |
| Contingency (about 15%) | USD 900 | USD 2,000 |
| **Total** | **about USD 7,000** | **about USD 15,300** |

**First 12 months after launch, product only** ([03](03-product-and-tech.md#first-12-months-after-launch-excluding-company-and-payment-set-up)): AI tools USD 1,200-3,600; hosting USD 500-1,500; expert retainer USD 3,600-6,000; v1 AML content review USD 1,500-3,000; Chrome store and tools USD 100-300. **About USD 6,900-14,400.**

**All-in year 1** (the [04](04-gtm-company-finance.md#financial-model) base model, which adds marketing, a local support contractor, travel, insurance and company costs): **about USD 42,500.** The build itself is the small part.

---

## 8. Go-to-market

### Pricing (from [04](04-gtm-company-finance.md#pricing-and-packaging); USD net of Argentine taxes, peso equivalent shown at the Banco Nación rate)

| Plan | Who | Includes | Monthly | Yearly (10 months' price) |
|---|---|---|---|---|
| **Entidad Básica** | Small lending mutual that files itself (a credit co-op gets only the calendar, roll and Res 1567 tracker from it, so it is the natural Completa buyer once v1 ships) | Calendar; monthly-return prep with checks; member register with roll CSV and CRS fields; assembly checklists; evidence vault | **USD 29** (ARS 44,000) | USD 290 |
| **Entidad Completa** | Lending entity that wants the UIF side too (from v1) | Básica plus the AML pack, inspection file and a read-only reviewer seat | **USD 59** (ARS 89,500) | USD 590 |
| **Estudio** | Accountants, co-op graduates, consultants | Features per client entity; multi-entity board; team users; own-brand PDFs; minimum 3 entities | **USD 20 per entity** | USD 200 per entity |
| Registro (add-on in Estudio) | Non-lending mutuales and co-ops | Yearly roll CSV, authority changes, assembly checklist, calendar | USD 5 per entity | USD 50 |
| Federación | Federations buying for members | Estudio under the federation's brand; minimum 20 entities; annual | USD 15 per entity | USD 180 |
| Archivo | Former customers | Read-only records, as an active service (see §1 table) | USD 5 | USD 50 |

**One-off services** (founder plus a partner co-op graduate or accountant):

- **Pack Res 1567:** USD 150, with 3 months of Básica. Templates for the officer and manual minutes, PEP-statement tracking, filing checklist. Sold from about 2 Nov as a done-with-you service; due 1 Dec.
- **Puesta al día (catch-up):** USD 300 per entity for up to 12 overdue months plus the roll.
- **Autoevaluación asistida:** USD 400 for the UIF self-assessment due 30 April; partner drafts from the workbook; 50/50 split.

**My one change (untested):** [04](04-gtm-company-finance.md) gives Estudio the full AML pack at USD 20 per entity. That gives away the most expert-heavy content at the lowest price. When the AML pack ships in v1, charge Estudio **USD 20 for the Básica scope plus USD 10 per entity for the AML pack**. The model does not count this, so it is upside.

**Why these levels:**

- Básica (USD 29) is about a third of one Colppy seat and below one UIF advice fee (USD 41) ([CPCESE](https://cpcese.org.ar/documentos/Lic.%20Cooperativas%20R.%2006-25.pdf)).
- Ten clients on Estudio cost an accountant USD 200 a month, about Xubio's top firm plan ([Xubio](https://xubio.com/ar/precios-contadores)). The accountant can bill clients USD 35-40 for "compliance INAES/UIF" and keep the margin.
- Blended price after discounts: about USD 26 per entity a month in year 1, rising to USD 30 in year 3 ([04](04-gtm-company-finance.md)).

**Launch offers:** 40% off the first year for the first 30 entities that prepay a year before 31 Jan 2027; first month free on monthly plans; a 14-day trial of the Estudio board with no card; free tools that collect leads (an ICS calendar of every 2026-2027 INAES and UIF deadline, and a "check my figures" spreadsheet).

**Currency and inflation.** Charge in USD and show pesos. Monthly inflation ran about 2% in mid-2026 ([Tiempo Argentino](https://www.tiempoar.com.ar/ta_article/por-decreto-el-gobierno-fijo-el-nuevo-salario-minimo-es-de-apenas-383-800/amp/)), so any peso price (reseller or SAS) needs quarterly updates and an indexation clause.

### Channels, in priority order ([04](04-gtm-company-finance.md#channels-in-priority-order); [02](02-market-and-competition.md#channels))

1. **Accountants and co-op graduates** who serve lending entities, through the professional councils' co-op and mutual areas ([CPCECABA](https://consejo.org.ar/herramientas-profesionales/asesoramiento/asesoramiento-presencial/area-cooperativas-y-mutuales); CPCE Santiago del Estero; Consejo Salta), accountant media (Contadores en Red, +blogdelcontador, Tributum, abogados.com.ar) and co-hosted webinars.
2. **Federations.** CAM groups 39 federations and more than 3,400 mutuales ([NoticiasNQN, 2021](https://www.noticiasnqn.com.ar/noticias/2021/11/26/251055-autoridades-del-inaes-visitaron-calf)); FEMUCOR (Córdoba, 240 mutuales; its president also chairs CAM) ([Hoy Día](https://hoydia.com.ar/economia/primer-congreso-internacional-de-cooperativas-y-mutuales-en-cordoba/)); FEDEMBA; the Santa Fe federation; FACC and Cooperar for credit co-ops ([UIF](https://www.argentina.gob.ar/node/392409)). Free member webinar first, then white-label.
3. **Public lists.** The Res 1687 annex names 302 brokering mutuales with tax IDs and provinces. Its 30-day window ended about 30 Sep 2026 (my calculation), so some have lost their rule. Check each status first. Pitch "never again" to those that filed, and catch-up only where the rule survives. The INAES register of AML reporting entities is the wider list.
4. **External independent reviewers (REIs).** The UIF keeps a register ([Ámbito](https://www.ambito.com/economia/armas-destruccion-masiva-la-uif-creo-el-registro-revisoresindependientes-n6052665)). Free read-only seat and a referral fee. They must not resell to entities they review ([Marval](https://www.marval.com/Publicacion/uif-regulacion-de-la-actividad-del-revisor-externo-independiente-13071?lang=es)).
5. **ERP vendors** (Bambú, SIGMA, Nexa, GEM): import their exports; mutual referrals.
6. **Provincial authorities** that train entities on the new form, e.g. Río Negro ([Río Negro](https://rionegro.gov.ar/info/297/servicio-de-ayuda-economica-mutual-se-pone-en-marcha-el-nuevo-sistema-de-transmision-web)). Offer free material; expect no endorsement.
7. **Search and content:** Spanish guides on Res 1279, 1567, 756 and UIF 99/2023.

**Sales motion.** Founder-led by Zoom and WhatsApp for six months; a local part-time contractor from month 4. The demo: "Suba el Excel de la cartera y vea sus anexos SAEM, con los controles del INAES, en 10 minutos." Then the multi-entity board. Accountant programme: 30 days free for the first 3 client entities, a one-hour certification webinar, a public list of users, a 25% reseller discount for those who invoice clients in pesos. Expected cycle: an accountant 1-3 weeks; an entity board 4-8 weeks; a federation 2-4 months ([04](04-gtm-company-finance.md#sales-motion)'s estimate).

### Selling calendar

| When | Deadline or event | Our action |
|---|---|---|
| Oct-mid Dec 2026 | Res 1567 first filing (1 Dec); October return (1 Dec) | Pack Res 1567; pilots; webinar 1 |
| Mid Dec-Jan | November return (31 Dec); rolls (10 Jan); AML yearly (20 Jan); IT reports (30 Jan) | Paid launch; webinar 2; annual prepay push |
| Jan-Feb | Summer holidays | Slow for new sales; deadlines still run; build v1 |
| Mar-Apr | RSA (15 Mar); **UIF self-assessment (30 Apr)** | Second big window: AML pack and Autoevaluación asistida |
| May-Jul | Assemblies; sector congress (Rosario, 25 Jul in 2026; 2027 date unverified) ([Conclusión](https://www.conclusion.com.ar/?p=1439083)) | Trip 2; stand; ERP partner launch. Two weeks of July are slow |
| Aug-Oct | External review (about 28 Aug); budget season | REI referrals; renewals before the January stack; federation pitch |

### Marketing budget, year 1 (Nov 2026-Oct 2027): USD 10,000, plus about 8% partner commissions

| Item | USD |
|---|---|
| Founder trips from abroad (2) | 4,000 |
| Webinars (6, co-host fees, tool) | 1,000 |
| Paid search and LinkedIn (10 months) | 1,500 |
| Event stand or sponsorship (one congress; price unverified) | 1,000 |
| Content and free tools | 1,200 |
| Outreach data and tools | 600 |
| Contingency | 700 |
| **Total** | **10,000** |

By quarter: Q1 USD 3,200; Q2 USD 2,300; Q3 USD 3,000; Q4 USD 1,500. Years 2 and 3: USD 8,000 a year. Track monthly: webinar sign-ups, demos, trial-to-paid (target 30%), entities per accountant (target 4), annual prepay share (target 50%), card failures (alarm above 10%), share asking for a peso invoice (SAS trigger 30%) ([04](04-gtm-company-finance.md#12-month-marketing-plan-and-budget)).

### First 90 days (12 Oct 2026 to 9 Jan 2027; [04](04-gtm-company-finance.md#90-day-launch-plan) aligned to the §7 calendar)

- **Days 1-14 (12-25 Oct): validate and specify.**
  - 25 interviews (15 accountants or co-op graduates, 10 treasurers or compliance officers), from CPCE committees, LinkedIn, the Res 1687 annex and federation contacts. Test prices.
  - Ask each candidate for a past filing and its ledgers.
  - Hire the expert; shortlist the lawyer (small first stage only).
  - Spec pack and foundation build.
  - Spanish landing page with the free deadline calendar; waitlist.
  - Open the Stripe account; demo requests to Bambú, SIGMA, CONLAFT.
  - **Gate on 25 Oct.**
- **Days 15-35 (26 Oct-15 Nov): build and sell the pack.**
  - Agent waves A and B; MVP demo 6 Nov; integration.
  - Sell Pack Res 1567 from about 2 Nov.
  - Webinar 1 (about 5 Nov): "Res INAES 1567: qué presentar antes del 1 de diciembre", with the lawyer, co-hosted by a federation or a CPCE.
  - Pitch CAM, FEMUCOR, the Santa Fe federation, FEDEMBA, FACC and Cooperar.
  - Trip 1 (about 9-20 Nov): Buenos Aires, Rosario, Santa Fe, Córdoba. Use it for the expert reconciliation with pilots in person.
- **Days 36-63 (16 Nov-13 Dec): pilots and first revenue.**
  - Reconciliation (16-20 Nov); penetration test (23-27 Nov); shadow pilot.
  - Pilots file the October period; WhatsApp help line for the 1 Dec deadlines.
  - Sign 2 reseller agreements with accounting firms (the peso route).
  - **Target by 13 Dec: 5 paying entities (founding pilots count) and 10 packs.**
- **Days 64-90 (14 Dec-9 Jan): the January stack.**
  - Paid launch about 14 Dec; webinar 2 (about 15 Dec): "Enero: nómina anual, DDJJ antilavado e informe de sistemas".
  - Roll exports for 10 Jan; Res 1567 yearly checklist for 20 Jan; IT-report reminders for 30 Jan.
  - Outreach to the checked Res 1687 list.
  - Slow down 24 Dec-6 Jan. **Day-90 review on 9 Jan** against §13.

---

## 9. Payments, company and legal

### Payments: card from the founder's foreign company ([04](04-gtm-company-finance.md#payments-and-tax-friction))

- **Stripe Billing from day 1, priced in USD, net.** Argentina is not a Stripe merchant country, but a foreign Stripe account can charge Argentine cards ([Stripe currencies](https://docs.stripe.com/currencies)).
  - Fees on a USD 590 annual charge: about 5.2% on a US account ([Stripe](https://stripe.com/pricing)), about 6% on an Irish account ([Stripe IE](https://stripe.com/ie/pricing)) (calculation in [04](04-gtm-company-finance.md#stripe)).
- **The foreign seller does not register for Argentine VAT.** The buyer bears 21% VAT: the card issuer collects it, or the buyer self-assesses it ([ARCA RG 4240](https://www.arca.gob.ar/iva/servicios-digitales/reg-percepcion-4240.asp)). A local seller would charge the same 21%, so VAT is neutral.
- **Income-tax-exempt co-ops and mutuales with a valid certificate skip the 30% card surcharge** ([RG 5617/2024 art. 3](https://www.consejosalta.org.ar/wp-content/uploads/ARCA-5617.pdf)). How issuers apply it was not checked (unverified). Accountants pay it and recover it later, or avoid it by paying the card bill in their own dollars.
- **Provinces add 2-5.5%** gross-income tax on foreign digital services (Santa Fe 4.5%) ([Blog del Contador](https://blogdelcontador.com.ar/news-45948-santa-fe-aplicara-ingresos-brutos-a-servicios-digitales-del-exterior-desde-el-1-de-julio)).
  - Example: Entidad Completa yearly, USD 590 net. An exempt, non-VAT-registered mutual in Santa Fe pays about **USD 740**. Only the 4.5% is extra against a local seller, and a local seller builds that tax into its price too.
- **Avoid wires.** A payer who wires money abroad may withhold 31.5% income tax ([abogados.com.ar](https://abogados.com.ar/tratamiento-en-el-impuesto-a-las-ganancias-de-los-servicios-en-la-nube/21979)). Whether an exempt entity must withhold was not confirmed (assume yes). No wires under about USD 5,000.
- **Card brands.** Credicoop, the co-op bank, issues Cabal business cards ([Infoviajera](https://www.infoviajera.com/2026/06/rapida-acreditacion-de-millas-aerolineas-plus-con-las-tarjetas-del-banco-credicoop/)). Whether Stripe accepts Cabal is (unverified). Local processors do ([PPRO](https://www.ppro.com/countries/argentina/)). Ask every pilot which card it holds.
- **Merchant of record.** Paddle supports Argentina at 5% + USD 0.50 ([Paddle](https://developer.paddle.com/concepts/sell/supported-countries-locales); [pricing](https://www.paddle.com/pricing)). It adds little because Argentina needs no seller VAT registration. Use it only if home-country VAT work becomes a burden, after a test purchase shows no double tax line.
- **Other routes:** dLocal Go may not serve an EU or UK company ([dLocal Go](https://helpcenter.dlocalgo.com/en/articles/7229140-in-which-countries-can-i-sell-with-dlocal-go)); Mercado Pago needs an Argentine CUIT (unverified).
- **Peso route without a company:** from month 2, a partner accounting firm buys licences at 25% off and invoices entities in pesos with VAT. It costs only the discount.
- **Buyer FAQ in Spanish:** "Factura del exterior; IVA servicios digitales 21% a cargo del comprador (RG 4240); entidades exentas con certificado vigente no sufren la percepción del 30% (RG 5617 art. 3)."

### Company: none at launch; a SAS only on a trigger

**Is a local company needed?** Not to start. Argentina requires no foreign-seller VAT registration, and no licence was found for compliance software (unverified) ([04](04-gtm-company-finance.md#company-setup-needed-or-not-costs); [01](01-law-and-requirements.md)). But these buyers are audited institutions that often want a peso invoice. So expect the question sooner than in a self-employed market.

**Open a SAS only if one of these happens** (base case: about month 10, Aug 2027):

1. more than 30% of signed entities, or more than 25 entities, need a peso invoice and the reseller cannot serve them;
2. a federation or ERP deal worth more than about USD 10,000 a year needs a local supplier;
3. Argentine staff must be hired as employees, not contractors;
4. local collection (Mercado Pago, transfers) is needed at scale.

**SAS facts.** Minimum capital is 2 minimum wages, so **ARS 782,400 (about USD 516)** from October 2026; 25% is paid at signing ([Law 27.349 art. 40](https://servicios.infoleg.gob.ar/infolegInternet/anexos/270000-274999/273567/texact.htm)). IGJ RG 11/2026 (from 23 Sep 2026) dropped the professional pre-qualification opinion for new companies in Buenos Aires city ([+blogdelcontador](https://siap.blogdelcontador.com.ar/?p=111396)). If the founder's foreign company owns the shares, it must register under art. 123 of the Companies Law, which IGJ RG 4/2026 simplified (apostilled documents, a local representative, PEP and beneficial-owner statements) ([abogados.com.ar](https://abogados.com.ar/novedades-igj-resolucion-042026-simplificacion-sociedades-extranjeras/39242)). If the founder holds the shares personally, he needs an Argentine tax ID (CDI or CUIT) ([VLO Law Firm](https://vlolawfirm.com/guides/cost-of-company-formation-in-argentina-complete-breakdown)).

| Route | One-off cost | Time | Source |
|---|---|---|---|
| Official fees only, digital SAS, Buenos Aires city | IGJ fee about ARS 8,438 (about USD 6); no notary or edict | 1-2 weeks | [Cuánto me cuesta](https://cuantomecuesta.com/ar/crear-empresa-sas/) (aggregator; unverified) |
| In person, Buenos Aires province | Signature certification ARS 80,850 plus a digital-signature token ARS 15,000-40,000 (about USD 63-80 in all) | 2-4 weeks | same |
| Lawyer, remote, founder as personal shareholder | About USD 300-800 | 1-2 weeks | [Argentina Visa Law](https://argentinavisalaw.com/guides/company-formation-argentina) (snippet; unverified) |
| **Lawyer, remote, foreign parent (SAS plus art. 123), all in** | **About USD 2,000-4,000** (apostilles, translations, first months of a local representative) | 4-8 weeks | [04](04-gtm-company-finance.md) estimate (unverified) |
| Founder flies in and does it himself | Official fees of tens of dollars, but art. 123 still needs a local professional; trip about USD 1,500-2,500 | 2-6 weeks | [04](04-gtm-company-finance.md) estimate |
| Capital paid in at signing | 25% of ARS 782,400, about USD 130 | — | Law 27.349 |

**Ongoing cost of a small SAS:** accountant for monthly VAT and gross-income returns and yearly statements, ARS 120,000-250,000 a month (USD 80-165) ([DevelopArgentina](https://developargentina.com/guias/abrir-empresa-argentina); unverified); local representative of the foreign parent about USD 50-100 a month (estimate); bank and invoicing tools small; 0.6% bank debit and credit tax; provincial gross-income tax; corporate tax 25-35% (unverified for 2026). **About USD 2,500-4,000 a year before taxes.** Bank account opening takes several weeks for foreign owners. Dividends to a foreign parent are allowed from 2025 financial years (Com. A 8226) ([abogados.com.ar](https://abogados.com.ar/un-gran-paso-camino-a-la-liberacion-de-las-restricciones-cambiarias/36600)), with a 7% withholding (unverified).

**My recommendation:** if a SAS becomes necessary, own it through the foreign company, through a remote lawyer (USD 2,000-4,000). Keep the reseller route as long as it works. The model keeps the SAS cost in the base case (month 10) to stay conservative.

### Legal ([04](04-gtm-company-finance.md#contracts-and-liability); [03](03-product-and-tech.md#liability))

- **Terms of service (Spanish, click-through, B2B):**
  - the tool prepares; the entity, its board, compliance officer and signing accountant file, sign and stay responsible;
  - no filing, no use of the customer's INAES or TAD credentials, no legal or accounting advice;
  - "listo para presentar" means "checked against the rules we encode", not "accepted by INAES";
  - show every formula and its article; fix calculation errors within 5 business days; update rules within 30 days of a new resolution;
  - liability capped at 12 months of fees; fines and loss of the lending rule excluded. Clauses that limit liability for wilful misconduct are void (Civil and Commercial Code art. 1743; unverified), so do not try.
- **Processing agreement** under Law 25.326 inside the terms; ready text for the entity's AAIP database registration; no health data from health mutuales.
- **Tipping-off:** the unusual-operations log is hidden from reseller, federation and reviewer seats.
- **Partner contracts:** accountant reseller (25% discount or 20% referral fee); REI read-only seat (no resale to entities they review); federation white-label (members own their data); ERP file-format and referral deals, no exclusivity.
- **Budget** (estimates, unverified): lawyer USD 3,000 in months 1-2, then USD 200 a month; expert USD 300 a month; penetration test USD 3,000-6,000 before launch, then about USD 2,500 a year; errors-and-omissions and cyber insurance about USD 1,200 a year in the founder's country.

---

## 10. Financials

The [04](04-gtm-company-finance.md#financial-model) model runs by month (month 1 = Nov 2026; month 36 = Oct 2029). It assumes the founder builds with AI agents and takes no pay. Key base assumptions: 60 / 60 / 50 new lending entities in years 1 / 2 / 3, with a slow first quarter; 50% on annual prepay; churn 1.5% a month on monthly plans and 85% annual renewal; blended price USD 26 / 28 / 30; Registro and one federation deal (25 entities from month 13); one-off packs and services; 5% payment fees; 8% partner commissions; a support contractor from month 4; marketing USD 10,000 then USD 8,000; a SAS from month 10.

| Measure | Low | Base | High |
|---|---|---|---|
| Lending entities at month 6 / 12 / 24 / 36 | 9 / 21 / 43 / 54 | 22 / 51 / 101 / 133 | 41 / 95 / 193 / 261 |
| Share of the 1,130 pool at month 36 | 5% | 12% | 23% |
| ARR at month 12 / 24 / 36 (USD) | 5,000 / 12,100 / 17,400 | 16,900 / 41,400 / 59,000 | 40,000 / 95,200 / 139,700 |
| Revenue, years 1 / 2 / 3 | 6,800 / 13,600 / 19,900 | 17,200 / 42,100 / 59,800 | 36,300 / 89,800 / 137,100 |
| Costs, years 1 / 2 / 3 | 32,100 / 30,000 / 32,200 | 42,500 / 49,000 / 56,500 | 51,400 / 67,400 / 88,200 |
| Year-3 profit before founder pay | -11,700 | **6,200** | 57,700 |
| Monthly break-even | not reached | month 22, fragile until month 34 | month 10 |
| Cumulative cash positive | no | no (-18,900 at month 36) | month 18 |
| **Peak cash need, no founder pay** | 51,300 | **28,500** | 8,200 |
| Peak cash need with USD 3,000 a month founder pay from month 13 | 123,300 | 90,900 | 17,200 |

**Variant: shared costs with B1.** The [B1 broker kit](../argentina-b1/PLAN.md) needs the same AML engine, SAS, lawyer, support contractor, security test and insurance. Split 50/50, the B2 base case improves to a **peak cash need of about USD 12,600, a year-3 profit of about USD 22,000, and +USD 20,700 cumulative cash by month 36** ([04](04-gtm-company-finance.md#scenario-summary)).

**Unit economics (base, [04](04-gtm-company-finance.md)):** first-year revenue per entity about USD 290; blended acquisition cost about USD 260; payback about 11 months; lifetime value about USD 1,500-1,700; LTV/CAC about 6; gross margin about 85%. **The limit is the pool, not the unit economics.**

**My reading:**

- **Plan on the low-to-base band.** The base needs 12% of 1,130, which is about 20% of an active pool of 700. It also assumes accountants bring about 4 entities each.
- **The realistic downside is capped by the kill criteria.** In the low case the cumulative cash at month 6 (end-April 2027) is about **-USD 15,100**. If the 25 Oct gate fails, the loss is under about USD 2,000.
- **The model's cost lines are conservative** on hosting (USD 200 a month against a likely USD 35-60) and slightly optimistic on payment fees (5% against 5.2-6%). They roughly cancel.
- **Alone, this cannot pay a salary in 3 years.** It is a side business, or one vertical of a small Argentine compliance platform.

**Exit.** Small SaaS under USD 500,000 ARR sells for about 2-3x seller's discretionary earnings ([PipelineRoad](https://pipelineroad.com/agency/blog/saas-valuations-guide)). The base case alone has little sale value. The high case (USD 58,000 profit) would be worth about USD 120,000-230,000. Natural buyers: a mutual ERP vendor (Bambú, NeoSistemas, Renova), CONLAFT, or an Argentine software consolidator (Visma bought Calipso and Xubio; Vela LatAm bought Axoft, maker of Tango, in October 2026) ([Bruchou & Funes de Rioja](https://bruchoufunes.com/?p=35162); [iProfesional](https://www.iprofesional.com/tecnologia/359020-software-de-gestion-visma-compra-calipso)).

---

## 11. Regional expansion

**The INAES content does not travel; the engine does.** The mutual form and the monthly lending return are specific to Argentina. The deadline engine, the member register with PEP and risk fields, the AML records and the "prepare the regulator's form" pattern can be reused ([02](02-market-and-competition.md#regional-expansion); [04](04-gtm-company-finance.md#regional-expansion)).

| Order | Market | Size | Notes | When |
|---|---|---|---|---|
| 1 | **Other Argentine UIF-obliged groups** (B1 brokers first) | 10,365 brokers registered with the UIF ([B1 PLAN](../argentina-b1/PLAN.md)) | Same AML core, company, lawyer and support | Months 6-18; cheapest growth |
| 2 | Paraguay savings-and-credit co-ops | 382 of 576 registered co-ops ([La Nación Py](https://www.lanacion.com.py/negocios/2025/07/29/sector-cooperativo-desempena-un-papel-clave-en-la-inclusion-financiera-afirma-mef/)) | SEPRELAD Res 156/2020 sets a full AML system ([Ferrere](https://ferrere.com/es/novedades/nueva-reglamentacion-de-prevencion-de-lavado-de-activos-para-cooperativas/)); the [Paraguay deep dives](../paraguay-b1/PLAN.md) plan a SEPRELAD engine; large co-ops run core banking (unverified) | From about month 24 |
| 3 | Peru (COOPAC under the SBS) | 419 registered (2019) ([Andina](https://andina.pe/ingles/noticia-sbs-419-cooperativas-lograron-su-registro-tras-proceso-inscripcion-758324.aspx)) | Similar purge pattern; larger, more formal entities (unverified) | Only with a local partner |
| 4 | Uruguay | 1,204 co-ops; few savings co-ops ([MTSS](https://www.gub.uy/ministerio-trabajo-seguridad-social/tematica/cooperativismo-economia-social)) | Small | Low priority |
| 5 | Colombia | count not found ([La FM](https://www.lafm.com.co/politica/supersolidaria-reporta-congreso-logro-revertir-deficit-alcanzo-record-recaudo-2025-407019)) | Crowded with local AML vendors such as Pirani (unverified) | Skip |

**Cost of each new country** (estimate): USD 5,000-8,000 of legal content and a local reviewer, 4-6 weeks of founder and agent time, one or two trips, and pilots. **Do not start before 100 paying entities in Argentina, or before the shared-platform case is proven.**

---

## 12. Risks and mitigations

Merged from [03](03-product-and-tech.md#risks) and [04](04-gtm-company-finance.md#risks-and-mitigations).

| # | Risk | Likelihood / impact | Mitigation |
|---|---|---|---|
| 1 | **Small pool and slow institutional sales.** About 1,130 active entities, maybe 700; volunteer boards; CONLAFT has 5 deployments since May 2024 | High / high | Sell through accountants (several entities per sale) and federations; public low prices; share fixed costs with B1; early kill criteria |
| 2 | **A calculation error lands in a sworn statement** | Medium / high | Golden tests; reconcile with 3 past filings per pilot; expert sign-off on every rule change; "rules as of" on every output; user approval step; liability cap; insurance |
| 3 | **Unclear definitions** ("promedio período"; guarantee-fund rules after Res 142/16; consolidated Res 1418 text not read) | High / medium | Expert in week 0; every method explicit and switchable; flagged "to confirm with INAES" until settled |
| 4 | **INAES changes the form, rules or checks without notice** | High / medium | Form spec as data; daily Boletín Oficial watch; expert retainer; spec version per period; 30-day update promise |
| 5 | **INAES adds file import or automatic loading** to the monthly form | Medium / mixed | A gain: generate its file instead of a copy sheet. The calculation, calendar, UIF records and multi-entity board stay |
| 6 | **Bambú, another ERP or CONLAFT adds the same features** | Medium / high | Partner early with imports from their exports; target accountants and small lenders without an ERP; publish prices |
| 7 | **The core feature serves mutuales only** | Certain / medium | Credit co-ops get the calendar, roll and Res 1567 tracker in the MVP and the AML pack in v1; price the co-op entry plan on that |
| 8 | **Payment friction:** no card, Cabal only, or a demand for a peso invoice | High / medium | Reseller from month 2; SAS trigger at 30%; buyer FAQ on RG 4240 and RG 5617; ask about EBANX or dLocal for local cards later |
| 9 | **Founder abroad in a relationship-driven sector** | High / medium | Local part-time contractor from month 4; two trips a year; federation and accountant partners; WhatsApp support |
| 10 | **Founder overload at deadline peaks** (the 20th business day, 1 Dec, the January stack) | High / medium | Status board; reminders on day 1, 10 and 15; help pages; concierge only by appointment |
| 11 | **Poor source data** (no days-overdue field, merged cells) | High / medium | Template-first onboarding; plain-Spanish row errors; derive days overdue from due dates |
| 12 | **Browser extension breaks or is unwelcome** | Medium / low | Not needed for the MVP; copy sheet stays the fallback; ask the help desk; never touch credentials or press "Grabar" |
| 13 | **Data breach** of member files (DNI, PEP, tax residence, loans) | Low-medium / high | EU hosting; encryption; two-factor; least privilege; penetration test; separate scope for suspicious-report data |
| 14 | **Processor deletion duty vs 10-year records** | Medium / medium | Full export at exit; Archivo as an active service; at most 2 years after that with consent; lawyer to confirm |
| 15 | **Peso shocks and tax changes** (devaluation, 30% surcharge, provincial taxes) | Medium / medium | USD list price reviewed quarterly; indexed peso contracts; 3-month price freeze for annual customers after a devaluation |
| 16 | **Pool shrinks** through licence withdrawals | Medium / low | Focus on active lenders; turn purges into catch-up and "never again" sales |
| 17 | **AI-written code hides subtle bugs** | Medium / medium | Contracts, property tests, reviewer agent, founder review, external test |
| 18 | **Hosting price rises or limits** (Hetzner 2026) | Medium / low | Infrastructure as code; portable Postgres dumps; plan B in France |

---

## 13. Milestones and kill criteria

Based on [04](04-gtm-company-finance.md#milestones-and-kill-criteria), with two technical gates added from [03](03-product-and-tech.md)'s calendar.

| Date | Target (base path) | Stop or rethink if |
|---|---|---|
| **25 Oct 2026** (day 14) | 25 interviews; 3 written pilot commitments; 2 accountants say they would pay USD 20 per entity; 2 pilots promise a past filing with ledgers | **Fewer than 2 commitments and no accountant would pay; or ERPs already prepare the new form for most small lenders; or no pilot will share a past filing** |
| 6 Nov 2026 | MVP demo: anonymised pilot file to copy sheet; roll CSV | The golden case does not reproduce: add a week, then rethink |
| **20 Nov 2026** | Calculator reconciled with 2-3 real past filings | **The calculator cannot reproduce a past filing** after expert review: drop the monthly-return core and decide whether a calendar, roll and AML tool alone is worth it |
| 13 Dec 2026 (day 63) | 5 paying entities; 10 packs; penetration test passed; 2 reseller agreements | Fewer than 2 paying entities and fewer than 5 packs |
| **9 Jan 2027** (day 90) | 8 paying entities; 3 active accountants; card failures under 10% | **Fewer than 4 paying entities, or card failures above 25% with no reseller** |
| **30 Apr 2027** (month 6) | 22 paying entities; 8 self-assessments sold; first case study | **Fewer than 10 paying entities** (the low path; about USD 15,000 spent) |
| **31 Oct 2027** (month 12) | 50 paying entities; 40 Registro entities; 1 federation in talks; SAS only if triggered | **Fewer than 25 entities and no shared-platform plan** (B1 or another vertical) |
| 31 Oct 2028 (month 24) | 100 entities; first-year renewal at least 80%; monthly break-even | Renewal below 60%, or fewer than 60 entities |
| Any time | — | INAES ships import **and** annex calculation, **and** an ERP or CONLAFT sells a multi-entity board below USD 15 per entity |

---

## 14. Open questions to settle first

1. **Will accountants pay USD 20 per entity a month, and how many lending clients does a typical one serve?** (Interviews, by 25 Oct.)
2. **Do Bambú or SIGMA already prepare the new monthly web form or the Res 1567 module, and what do they and CONLAFT charge?** (Demo requests.)
3. **How does INAES compute "promedio período", and which guarantee-fund and savings-limit rules apply after Res 142/16?** (Expert, week 0; the consolidated Res 1418 text IF-2024-133511984.)
4. **Does the live monthly form have any import, and would INAES object to a fill-assist extension?** (Pilot screen-share; consultasweb@inaes.gob.ar.)
5. **How many lending mutuales and credit co-ops are active in 2026?** (Ask INAES's Dirección Nacional de Control de Ahorro y Crédito, or CAM.)
6. **Where do the Res 756 art. 5 fields (risk level, PEP, residence) go,** since the published CSV lacks them? What does the Res 1567 module manual (IF-2026-67633405) say about automatic loading?
7. **Which cards do these entities hold** (Visa or Mastercard business cards, Cabal only, none)? Does Stripe accept Cabal? How do issuers apply the RG 5617 exemption? What share is VAT-registered?
8. **Must an income-tax-exempt mutual withhold 31.5%** on a wire abroad?
9. **Do bridge days and 24 and 31 December count as business days** for INAES deadlines?
10. **Is a paid 10-year Archivo plan compatible with Law 25.326 art. 25,** and must each mutual or the processor register the database with the AAIP? (Lawyer.)
11. **Where is the founder's company?** It sets Stripe fees, dLocal eligibility and any treaty relief.
12. **Can B1 and B2 share one engine, one company and one support person?** The base case depends on it.

---

## 15. Next steps this week (12-16 Oct 2026)

1. **Decide the frame:** run B2 as a time-boxed test alone, or as the first vertical of a shared Argentine AML platform with B1. Either way, cap cash at about USD 2,000 until 25 Oct.
2. **Book 25 interview calls** (15 accountants or co-op graduates, 10 treasurers or compliance officers) through the CPCE co-op areas, LinkedIn, the Res 1687 annex and federation contacts. Ask what they filed for the September period, how long it took, and what they would pay.
3. **Ask every candidate for one past monthly filing (the INAES PDF) with the matching loan and savings ledgers,** anonymised, under a short confidentiality note.
4. **Hire the domain expert:** a co-op accountant or Licenciado who files these returns. First task: the "promedio" and guarantee-fund questions, and checking the form transcription.
5. **Write the spec pack** (form specification, roll CSV spec, deadline catalogue, holiday and parameter seeds, golden case, interface contracts) and start the foundation build with agents.
6. **Request demos** from Bambú, SIGMA and CONLAFT to learn prices and whether they handle the new form.
7. **Put up the Spanish landing page** with the free 2026-2027 INAES and UIF deadline calendar, and a waitlist for founding pilots.
8. **Open the Stripe account** on the foreign company and prepare a payment link for Pack Res 1567.
9. **Shortlist an Argentine lawyer** with co-op and AML practice. Ask for a fixed fee for terms, the processing agreement and the Archivo question. Commit only after the gate.
10. **E-mail the INAES help desk** to ask whether an import for the monthly form is planned.
