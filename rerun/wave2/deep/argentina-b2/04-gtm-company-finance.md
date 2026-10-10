# Argentina INAES and UIF compliance desk: go-to-market, payments, company setup and financials (deep dive 04)

Status: IN PROGRESS (started 10 Oct 2026). Sections are filled as research proceeds.

Builds on [the B2 report](../reports/argentina-b2.md), [01 law and requirements](01-law-and-requirements.md) and [02 market and competition](02-market-and-competition.md). Money is in US dollars unless marked ARS. Exchange rate: ARS 1,517 per USD (BCRA official rate, 9 Oct 2026, as used in file 02). "Estimate" marks my planning numbers. "(unverified)" marks facts I could not confirm.

## Summary
(pending)

## Pricing and packaging

### What buyers already pay (anchors)

| Item | Price | USD | Source |
|---|---|---|---|
| Xubio accounting SaaS, plans for accounting firms (per month, plus VAT, direct debit) | Estudio Básico ARS 49,600 for 10 clients (ARS 24,800 for the first 3 months); Estándar ARS 101,500 for 30; Pro ARS 166,700 for 100; Ilimitado ARS 271,900 | 33 / 67 / 110 / 179 | [Xubio, precios contadores](https://xubio.com/ar/precios-contadores) |
| Colppy SME accounting SaaS (per month, plus VAT) | ARS 128,500 / 189,500 / 261,500 | 85 / 125 / 172 | [Colppy](https://www.colppy.com/precios/) via [02](02-market-and-competition.md) |
| Advice on UIF rules, minimum ethical fee for co-op and mutual graduates (Santiago del Estero) | 5 MATES x ARS 12,500 = ARS 62,500 per job | 41 | [CPCESE Res 06/2026](https://cpcese.org.ar/documentos/Lic.%20Cooperativas%20R.%2006-25.pdf) |
| Setting up an AML manual; ongoing advice to small mutuales | "Consultar" (on request) | - | same |
| Salta accountants' minimum-fee module | ARS 18,500 from 1 Oct 2026 | 12 | [Consejo Salta](https://www.consejosalta.org.ar/2026/06/actualizacion-del-valor-modulo-para-honorarios-minimos-profesionales/) |
| Mutual ERPs (Bambú, SIGMA, Nexa, GEM) and CONLAFT (AML) | not published; sold by demo | - | [02](02-market-and-competition.md) (unverified) |
| External independent reviewer (REI) report | not published | - | REI regime: [Marval](https://www.marval.com/Publicacion/uif-regulacion-de-la-actividad-del-revisor-externo-independiente-13071?lang=es) (price unverified) |
| Cost of failing | Loss of the lending rule after 3 missed monthly periods; licence withdrawal; UIF fines of 15-2,500 módulos of ARS 54,140 (ARS 0.8 million to 135 million) | 535 to 89,000 | [01](01-law-and-requirements.md); [Res 565/2026](https://www.boletinoficial.gob.ar/detalleAviso/primera/339254/20260310) |

**Reading.** No rival publishes a price. The public anchors are accounting SaaS (USD 33-180 a month for a whole firm) and professional fees (about USD 41 per advice job). A specialised tool for one lending mutual should cost less than one generic SaaS seat and about one advice fee a month. For accountants, the per-entity price must leave room for their own mark-up.

### Proposed plans (USD, net of Argentine taxes; ARS at 1,517)

| Plan | Who | What | Monthly | Yearly (10 months' price) |
|---|---|---|---|---|
| **Entidad Básica** | small lending mutual or credit co-op that handles its own filings | Deadline calendar with INAES, UIF and provincial dates; SAEM monthly-return prep sheet from the loan-book Excel, with INAES's consistency checks run first; member register with roll CSV export (Res 756) and CRS fields (Res 1038); assembly checklists | USD 29 (ARS 44,000) | USD 290 (ARS 440,000) |
| **Entidad Completa** | lending entity that wants the UIF side done too | Básica plus the AML pack: Res 1567 filing pack, self-assessment workbook, manual template with yearly review, training register, member risk rating, unusual-operations log, RMT/RSA timers, inspection file, read-only REI seat | USD 59 (ARS 89,500) | USD 590 (ARS 895,000) |
| **Estudio** | accountants, Licenciados en Cooperativismo, consultants | Completa features for each client entity, multi-entity status board, team users, white-label PDF outputs. Minimum 3 entities | USD 20 per entity (ARS 30,300) | USD 200 per entity (ARS 303,400) |
| **Registro** (add-on inside Estudio) | non-lending mutuales and co-ops | Yearly roll CSV, authority changes, assembly checklist, calendar | USD 5 per entity (ARS 7,600) | USD 50 per entity |
| **Federación** | federations buying for members | Estudio features under the federation's brand; federation sees adoption only. Minimum 20 entities, annual contract | USD 15 per entity | USD 180 per entity |
| **Archivo** | former customers | Read-only 10-year record archive | USD 5 | USD 50 |

**One-off services** (delivered by the founder's team with a partner Licenciado or accountant):

| Service | Price | Notes |
|---|---|---|
| **Pack Res 1567** (initial AML filing due 1 Dec 2026) | USD 150 (ARS 227,600), includes 3 months of Entidad Básica | Launch product for Nov 2026. Templates for the compliance-officer minute, manual approval minute, PEP sworn-statement tracking, filing checklist |
| **Puesta al día** (catch-up) | USD 300 per entity (ARS 455,000) | Prepares up to 12 overdue monthly returns and the roll. Aimed at the 302 entities in [Res 1687/2026](https://www.boletinoficial.gob.ar/detalleAviso/primera/346572/20260831) and dormant lenders |
| **Autoevaluación asistida** (UIF self-assessment, due 30 Apr) | USD 400 (ARS 607,000) | Partner Licenciado drafts from the workbook; revenue split 50/50 |

**Launch offers:**
- **Founding price:** 40% off the first year for the first 30 entities that prepay a year before 31 Jan 2027.
- **First month free** on monthly plans. No card needed for a 14-day trial of the Estudio board.
- **Free tools:** an ICS/Google calendar of every 2026-2027 INAES and UIF deadline, and a free SAEM "check my figures" spreadsheet that runs a few of INAES's checks. Both collect leads.

**Why these levels:**
- Entidad Básica (USD 29) is about one-third of a Colppy seat and below one UIF advice fee.
- Entidad Completa (USD 59) is about 1.5 advice fees a month. It replaces part of the work an accountant or consultant bills for the manual, training log and self-assessment.
- Estudio at USD 20 per entity lets an accountant charge a client, say, USD 35-40 a month for "compliance INAES/UIF" and keep the margin. Ten lending clients cost the accountant USD 200 a month, about the price of Xubio's top firm plan.
- Expected blend: about 35% of entities buy direct, 65% through accountants. After discounts the blended price is about USD 26 per entity a month in year 1, rising to USD 30 in year 3 (see "Financial model").

### VAT and currency
- **Charge in USD, show the peso equivalent.** Update the shown ARS figures monthly at the Banco Nación rate. Price rises of up to 10% a year in USD are normal (assumed in the model).
- **Prices are net.** The buyer bears VAT (21%) and any provincial gross-income tax added by the card issuer (see "Payments and tax friction"). The invoice from the foreign company shows no Argentine VAT.
- **Through the reseller or the local SAS,** the price list is in ARS, updated each quarter, plus 21% VAT on the invoice (Factura A to VAT-registered buyers, Factura B to exempt ones). The SAS pays gross-income tax and builds it into the peso price.
- **Inflation.** Monthly inflation ran at about 2% in mid-2026 (July CPI 2.1%, per [Tiempo Argentino](https://www.tiempoar.com.ar/ta_article/por-decreto-el-gobierno-fijo-el-nuevo-salario-minimo-es-de-apenas-383-800/amp/)). Peso prices that are not indexed lose about a quarter of their value in a year. Annual peso contracts need an indexation clause (CPI or Banco Nación rate).

## Go-to-market

### Selling seasons and deadlines

Dates come from [file 01](01-law-and-requirements.md) unless another source is given.

| When | Deadline or event | Who | Sales use |
|---|---|---|---|
| Every month, within 20 business days of month end | SAEM monthly lending return on the new INAES web form (from the July 2026 period; arrears too) ([Res 1279/2026](https://www.argentina.gob.ar/normativa/nacional/norma-427021/texto)) | lending mutuales | The everyday reason to log in. Lead with the "prep sheet" demo |
| 10 Jan, 10 Apr, 10 Jul, 10 Oct | Quarterly member and authorities roll for UIF-obliged entities; yearly roll for all entities by 10 Jan ([Res 756/2025](https://contadoresenred.com/cooperativas-y-mutuales-sistema-integrado-de-nomina-de-asociados-y-autoridades/)) | all; quarterly for lenders | Registro tier for non-lending entities; accountant upsell |
| **1 Dec 2026** | First INAES AML filing (Res 1567/2026) ([text](https://www.consejosalta.org.ar/wp-content/uploads/INAES-1567.pdf)) | lending mutuales, credit co-ops, loan brokers | **Launch hook.** Pack Res 1567 |
| 20 Jan (yearly) | Res 1567 yearly sworn statement | same | Renewal moment for the AML pack |
| 30 Jan | SAEM IT report and loan-brokering IT opinion | lenders and brokers | Reminder feature; referral to IT professionals |
| 15 Mar | UIF yearly systematic report (RSA) | UIF-obliged | AML pack |
| **30 Apr** | UIF risk self-assessment | UIF-obliged | **Second big window.** Autoevaluación asistida |
| about 28 Aug | External independent review (REI) report | UIF-obliged | Reviewer seat; REI referrals |
| After each financial year end | Assembly: pre-assembly documents 10 business days before, post-assembly documents within 30 days (mutuales) | all | Assembly checklist |
| Jan-Feb; two weeks in July | Summer and winter holidays | - | Slow for new sales; deadlines still run |

**Selling windows:** October to mid-December (Res 1567 and the January stack), March to April (UIF self-assessment) and August to October (external review, budget season). January-February and July are slow.

### Channels in priority order
1. **Accountants and Licenciados en Cooperativismo who serve lending entities.** They do the filings now and each serves several entities. Reach them through:
   - the professional councils' co-op and mutual committees (CPCECABA area, CPCE Santiago del Estero's social-organisations committee) and Consejo Salta, which republishes every INAES rule ([02](02-market-and-competition.md));
   - accountant media (Contadores en Red, +blogdelcontador, Tributum, abogados.com.ar);
   - webinars with a CPCE or a federation as co-host.
2. **Federations and confederations.** CAM groups 39 federations and more than 3,400 mutuales (2021) ([NoticiasNQN](https://www.noticiasnqn.com.ar/noticias/2021/11/26/251055-autoridades-del-inaes-visitaron-calf)). FEMUCOR (Córdoba) represents 240 mutuales; FEDEMBA (Buenos Aires); the Santa Fe federation; FACC and Cooperar for credit co-ops ([02](02-market-and-competition.md)). Offer a free member webinar first, then a white-label Federación plan.
3. **Direct outreach from public lists.** The Res 1687/2026 annex names 302 loan-brokering mutuales that had filed no quarterly returns ([BO 31 Aug 2026](https://www.boletinoficial.gob.ar/detalleAviso/primera/346572/20260831)). INAES also keeps the register of AML reporting entities. Lead with the catch-up offer. Check each entity's status first; some have already lost their rule.
4. **External independent reviewers (REIs).** The UIF keeps a register of them ([Ámbito, Aug 2024](https://www.ambito.com/economia/armas-destruccion-masiva-la-uif-creo-el-registro-revisoresindependientes-n6052665)). Each reviews several entities a year. Give them a free read-only seat and a referral fee. They must not resell to entities they review.
5. **ERP vendors.** Bambú, SIGMA (NeoSistemas), Nexa and GEM serve the larger lenders ([02](02-market-and-competition.md)). Offer an import from their exports and a mutual referral deal.
6. **Provincial authorities.** They receive the monthly return and train entities on the new form (for example Río Negro) ([Río Negro](https://rionegro.gov.ar/info/297/servicio-de-ayuda-economica-mutual-se-pone-en-marcha-el-nuevo-sistema-de-transmision-web)). Offer free training material. Do not expect them to endorse a vendor.
7. **Search and content.** Spanish guides on Res 1279, 1567, 756 and UIF 99/2023; the free deadline calendar; the free SAEM checker.

**Geography.** 76% of mutuales are in the Centro region: Buenos Aires province 933, Santa Fe 757, Buenos Aires city 707, Córdoba 411 (INAES report, via [02](02-market-and-competition.md)). Founder trips go to Rosario, Santa Fe, Córdoba and Buenos Aires.

### Sales motion
- **Founder-led for six months, by Zoom and WhatsApp.** A local part-time contractor joins in month 4 for support and follow-up.
- **The demo:** "Upload your loan-book Excel and see your SAEM annexes, with INAES's checks, in 10 minutes." Then show the multi-entity board.
- **Accountant programme:** free 30 days for the first 3 client entities; a one-hour certification webinar; a public list of accountants who use the tool; 25% reseller discount for those who invoice their clients.
- **Self-serve** sign-up and card payment for Entidad Básica and Completa.
- **Annual prepay** pushed before the January stack and before 30 April.
- **Expected cycle:** an accountant decides in 1-3 weeks. An entity's board may need a meeting vote (often monthly), so 4-8 weeks (my estimate). A federation takes 2-4 months.

## 90-day launch plan

Start Monday 12 October 2026. Day 90 is Saturday 9 January 2027. The founder builds with Claude Code and several AI agents in parallel: an MVP in about 3 weeks, sellable in 6-8 weeks after legal content, a security test and pilots.

**Days 1-14 (12-25 Oct): validate and set up.**
- Hold 25 interviews: 15 accountants or Licenciados who serve lending entities, 10 treasurers or compliance officers. Sources: CPCE committees, LinkedIn, the Res 1687 annex, federation contacts. Test the prices. **Goal: 3 written pilot commitments.**
- Hire a lawyer with co-op and AML practice, and a Licenciado contractor who knows SAEM returns.
- Collect the official texts: SAEM web guide IF-2026-57548748, the Res 756 CSV manual, the Res 1567 module guide and UIF Res 99/2023 ([01](01-law-and-requirements.md)).
- Launch a Spanish landing page with the free 2026-2027 deadline calendar and a waitlist.
- Open the Stripe account. Draft the terms, the DPA and the buyer FAQ.

**Days 15-35 (26 Oct-15 Nov): build the MVP and sell the Res 1567 pack.**
- Agents build in parallel: deadline engine; member register with roll CSV export; Res 1567 document pack; Estudio multi-entity board; SAEM annex calculator (version 0) tested on 2 anonymised real loan books.
- Sell **Pack Res 1567** from about 2 Nov (USD 150).
- **Webinar 1 (about 5 Nov):** "Res INAES 1567: qué presentar antes del 1 de diciembre", with the lawyer, co-hosted by a federation or a CPCE.
- Pitch CAM, FEMUCOR, the Santa Fe federation, FEDEMBA, FACC and Cooperar.
- Founder trip 1 (about 9-20 Nov): Buenos Aires, Rosario, Santa Fe, Córdoba. Meet federations, 2 ERP vendors and pilot accountants.

**Days 36-63 (16 Nov-13 Dec): pilots and first revenue.**
- External penetration test in the week of 16 Nov; fix findings.
- Pilots: 5 accountants with about 20 entities, plus 5 direct entities.
- Run a WhatsApp help line for the 1 Dec deadline.
- Sign reseller agreements with 2 accounting firms (the peso-invoice route).
- **Target by 13 Dec: 10 paying entities and 10 packs sold.**

**Days 64-90 (14 Dec-9 Jan): the January stack.**
- Ship the yearly and quarterly roll export (10 Jan), the Res 1567 yearly checklist (20 Jan) and the IT-report reminder (30 Jan).
- **Webinar 2 (about 15 Dec):** "Enero: nómina anual, DDJJ antilavado e informe de sistemas".
- Contact the 302 Res 1687 entities with the catch-up offer.
- Slow down 24 Dec-6 Jan.
- **Day-90 review (9 Jan)** against the milestones below. Continue, change or stop.

## 12-month marketing plan and budget

Period: November 2026 to October 2027. All figures in USD. The budget is lean because the buyers are few, known by name and reachable through a few bodies.

| Quarter | Focus | Main activities | Budget |
|---|---|---|---|
| Q1 Nov-Jan | Res 1567 and the January stack | Webinars 1-2; Pack Res 1567; outreach to 300 accountants and the Res 1687 list; federation meetings; founder trip 1 | 3,200 |
| Q2 Feb-Apr | UIF self-assessment (30 Apr) and RSA (15 Mar) | Webinars 3-4 with a Licenciado; Autoevaluación asistida offer; search ads on "autoevaluación UIF mutual"; first case study | 2,300 |
| Q3 May-Jul | Assemblies; sector congress season | Founder trip 2 timed with the Rosario congress (the 2026 edition was on 25 July; the 2027 date is unverified, [Conclusión](https://www.conclusion.com.ar/?p=1439083)); a stand or sponsorship; ERP partner launch | 3,000 |
| Q4 Aug-Oct | External review (about 28 Aug); renewals; budget season | REI referral campaign; webinars 5-6; renewal offers before the January stack; federation white-label pitch | 1,500 |
| **Total** | | | **10,000** |

By line item:

| Item | USD a year | Notes |
|---|---|---|
| Founder trips from abroad (2) | 4,000 | my estimate |
| Webinars (6; co-host fee about USD 150 each; webinar tool) | 1,000 | my estimate |
| Paid search and LinkedIn (about USD 150 a month for 10 months) | 1,500 | my estimate |
| Event stand or sponsorship (one sector congress) | 1,000 | price unverified |
| Content and free tools (calendar, SAEM checker, demo videos, Spanish editing) | 1,200 | my estimate |
| Outreach data and tools (list cleaning, email tool, WhatsApp Business) | 600 | my estimate |
| Contingency | 700 | |
| **Total** | **10,000** | |
| Partner commissions or reseller discount (outside the 10,000) | about 8% of subscription revenue | about 40% of sales via partners at 20-25% |

Years 2 and 3 (base): USD 8,000 a year. The focus moves to renewals, federation deals and referrals.

**Measures to track monthly:** webinar sign-ups and attendance; demos booked; trial-to-paid rate (target 30%); entities per accountant (target 4); share of annual prepay (target 50%); card-payment failures (alarm above 10%); share of buyers asking for a peso invoice (SAS trigger at 30%).

## Payments and tax friction

### Short answer
- **Sell from the founder's foreign company by card at launch.** Argentine Visa and Mastercard cards pay foreign software every day. The tax rules assume it: card issuers and payment aggregators act as tax collectors on digital services bought from abroad ([ARCA, RG 4240 page](https://www.arca.gob.ar/iva/servicios-digitales/reg-percepcion-4240.asp)).
- **The foreign seller does not register for Argentine VAT.** The buyer side carries the tax (see below).
- **This buyer group is different from a normal SME in two ways:**
  - **Good news:** mutuales and co-operatives that hold an income-tax exemption certificate are outside the 30% card surcharge (RG 5617/2024 art. 3; details below).
  - **Bad news:** they are institutions with audited books. Many pay suppliers by bank transfer against a local invoice, and some may not hold a card at all (unverified; test in pilots). So a peso route will be needed sooner than for a self-employed buyer.
- **Plan:** Stripe (cards, USD) from day 1. A local reseller (a partner accounting firm) invoices in pesos for entities that cannot pay by card. Open a local SAS when peso demand is proven (base case: month 10).

### Can Argentine cards pay a foreign online seller?
- **Yes.** ARCA's own page describes how card issuers, debit-card banks and payment aggregators collect VAT on "servicios digitales" from foreign providers. A credit-card charge is taxed on the statement date. A debit-card charge is taxed on the debit date ([ARCA, RG 4240](https://www.arca.gob.ar/iva/servicios-digitales/reg-percepcion-4240.asp)).
- **RG 5617/2024 art. 1(b)-(c)** covers card purchases of services from non-residents, "incluidas ... las compras realizadas a través de portales o sitios virtuales" (my reading of the text; [RG 5617 text, via Consejo Salta](https://www.consejosalta.org.ar/wp-content/uploads/ARCA-5617.pdf)). The rule exists because these payments are normal.
- **Decline risk.** I found no data on decline rates for first-time foreign charges on Argentine cards (unverified). Test with real cards from 3-5 pilot entities and track failures.

### Taxes the buyer pays on a card payment (October 2026)

| Item | Rate | Lending mutual or credit co-op (income-tax exempt) | Accountant buying a multi-entity plan | Source |
|---|---|---|---|---|
| VAT (IVA) on digital services from abroad | 21% of the net price | If not VAT-registered (common for mutuales, unverified share): the card issuer collects it, and it is a cost. If VAT-registered: the entity self-assesses it as an import of services and credits it | A VAT-registered accountant self-assesses and credits it. A monotributista pays it as a cost | [ARCA, RG 4240](https://www.arca.gob.ar/iva/servicios-digitales/reg-percepcion-4240.asp); [RG 4240 in the Boletín Oficial](https://www.boletinoficial.gob.ar/detalleAviso/primera/183569/20180514) |
| Income-tax advance on card purchases abroad (RG 5617/2024) | 30% of the part paid in pesos, converted at the Banco Nación selling rate (art. 1, 6) | **Not charged** to entities listed in art. 26(d) (co-operatives) and 26(g) (mutuales) of the income-tax law **that hold a valid exemption certificate** (RG 5617 art. 3, last paragraph, item b). How each issuer applies this was not checked (unverified) | Charged. Credited against income tax, or refunded after year end to those who cannot credit it (art. 7-8). Not charged on the part paid with own dollars (art. 1, last paragraph) | [RG 5617 text](https://www.consejosalta.org.ar/wp-content/uploads/ARCA-5617.pdf); still in force in 2026 ([Diario Jornada](https://diariojornada.com.ar/408822/economia/ningun_chau_al_dolar_tarjeta_el_recargo_del_30_sigue_vigente); [iProfesional, Jun 2026](https://www.iprofesional.com/impuestos/446939-arca-como-pedir-devolucion-del-30-compras-tarjeta-y-dolar-ahorro)) |
| Provincial gross-income tax (IIBB) on digital services from abroad | Santa Fe 4.5% (from 1 Jul 2025), Córdoba 3%, Buenos Aires city 2%, Buenos Aires province 2%, Río Negro 5%, Chaco 5.5%, Salta 3.6%, others | A cost, where the issuer collects it. In Buenos Aires city it applies only once the provider is on the tax agency's list | Same | [Blog del Contador on Santa Fe RG API 30/2025, 19 Jun 2025](https://blogdelcontador.com.ar/news-45948-santa-fe-aplicara-ingresos-brutos-a-servicios-digitales-del-exterior-desde-el-1-de-julio); [Blog del Contador on AGIP Res. 312/19](https://blogdelcontador.com.ar/resolucion-312-19-agip-ingresos-brutos-se-reglamenta-el-regimen-de-retencion-sobre-los-servicios-digitales) |
| Impuesto PAIS | 0% (ended Dec 2024) | - | - | [Infoviajera, Dec 2024](https://www.infoviajera.com/2024/12/nuevo-dolar-tarjeta-el-gobierno-creo-la-percepcion-que-reemplaza-a-la-que-cae-en-diciembre/) |

**What this means in money.** Example: Entidad Completa annual plan, USD 590 net.
- An exempt, non-VAT-registered mutual in Santa Fe pays about USD 590 + 21% VAT + 4.5% IIBB = **about USD 740** (ARS 1.12 million). No 30% advance if its exemption certificate is valid.
- The same mutual buying from a local VAT-registered seller would also pay 21% VAT on a "Factura B". So **VAT does not make the foreign seller dearer**. Only the provincial IIBB line is extra, and a local seller pays IIBB too and builds it into its price.
- An accountant (monotributista) paying a USD 2,000 annual Estudio plan (10 entities) by card in pesos sees USD 2,000 + 21% + 30% (recoverable later) + provincial IIBB. Paying the card bill in own dollars removes the 30% line ([RG 5617 art. 1](https://www.consejosalta.org.ar/wp-content/uploads/ARCA-5617.pdf)).

**Provider lists.** Issuers collect VAT and city IIBB on providers that appear on ARCA's and AGIP's lists. A new small vendor will probably not be listed at first, so the issuer may not add VAT. The buyer then owes the VAT by payment slip by the end of the month (ARCA page above). Tell buyers this in the FAQ. The seller's position does not change.

### Does the foreign seller have to register for Argentine VAT?
- **No.** Argentina taxes digital services from abroad on the buyer's side: through the card issuer or aggregator, or by self-assessment ([ARCA, RG 4240](https://www.arca.gob.ar/iva/servicios-digitales/reg-percepcion-4240.asp); [Blog del Contador category on foreign digital services](https://siap.blogdelcontador.com.ar/categoria_normativa/servicios-digitales-prestados-por-sujetos-del-exterior/)). There is no foreign-seller registration like the EU's OSS. I found no 2026 change (unverified).
- **Invoice the net price.** Do not add Argentine VAT. The invoice must show the entity's name and CUIT so the treasurer and the auditor can book it (practice; unverified).

### Withholding tax on payments to non-residents
- **The rule.** An Argentine payer who pays a foreign beneficiary withholds income tax at 35% of a presumed net income. The residual presumption is 90%, so the effective rate is **31.5%** ([abogados.com.ar, Peralta and Rajmilovich, 2018](https://abogados.com.ar/tratamiento-en-el-impuesto-a-las-ganancias-de-los-servicios-en-la-nube/21979)). SaaS may also be read as technical assistance (lower) or a royalty (unverified for SaaS; [Garrigues](https://www.garrigues.com/es_ES/noticia/software-service-saas-desafio-alta-complejidad-tributaria-mundo-digital-e-interconectado)).
- **Card payments: no withholding in practice.** The issuer collects VAT and the 30% advance. It does not withhold income tax. A mutual paying by card does not act as a withholding agent (practice; unverified).
- **Wires: real risk.** A mutual or federation paying a foreign invoice by bank wire may withhold 31.5%, or ask for a gross-up. Whether an income-tax-exempt entity must still act as withholding agent was not confirmed (unverified; assume yes).
- **Treaties help only if the founder's company is in a treaty country.** Argentina has treaties with Spain, the UK, Germany, France, Italy, the Netherlands, Switzerland, Brazil, Chile, Mexico, the UAE and others; Austria's took effect in June 2026 ([argentina.gob.ar list](https://www.argentina.gob.ar/node/78019); [ARCA list](https://www.arca.gob.ar/convenios-internacionales/paises/); [Ámbito, Jun 2026](https://www.ambito.com/informacion-general/arca-simplifico-un-tramite-clave-acceder-beneficios-impositivos-internacionales-n6284775)). No US treaty appears on those lists (unverified). A treaty claim needs a residence certificate and paperwork the buyer's accountant must accept.
- **Practical answer:** card or Stripe invoice by card for small buyers. A local reseller or the local SAS for anyone who wants to wire money.

### Stripe
- **Argentina is not a Stripe merchant country,** but a Stripe account in the founder's country can charge Argentine cards. ARS is a supported presentment currency ([Stripe currencies](https://docs.stripe.com/currencies)). Since Feb 2023, ARS prices may only be shown to Argentine cardholders ([Stripe support](https://support.stripe.com/questions/argentina-s-new-inbound-non-argentine-foreign-exchange-(fx)-rate-on-stripe)).
- **Fees (US account):** 2.9% + USD 0.30, plus 1.5% for international cards, plus 1% if currency conversion is needed. Stripe Billing adds 0.7%. Disputes cost USD 15 ([Stripe pricing](https://stripe.com/pricing)). Other countries' accounts differ.
  - On a USD 590 annual charge in USD: about USD 30.7, or 5.2% (my calculation).
  - On a USD 59 monthly charge: about USD 3.4, or 5.8%.
- **Fees (Irish/EU account):** international cards 3.15% + €0.25, plus 2% currency conversion, plus Billing 0.7%; disputes €20 ([Stripe Ireland pricing](https://stripe.com/ie/pricing)). On a USD 590 annual charge settled in euros that is about 5.9%, or about 6% all in (my calculation). The model uses 5%; the difference is about USD 600 a year in the base case at year 3.
- **Card brands.** Credicoop, the co-operative bank that many co-ops and mutuales use, issues Cabal cards, including a "Cabal Cuenta Empresa" business card ([Infoviajera, Jun 2026](https://www.infoviajera.com/2026/06/rapida-acreditacion-de-millas-aerolineas-plus-con-las-tarjetas-del-banco-credicoop/); [Idelcoop](https://www.idelcoop.org.ar/sites/www.idelcoop.org.ar/files/revista/articulos/pdf/2013_125685939.pdf)). Whether Stripe accepts Cabal was not confirmed (unverified). Latin American processors do accept the local brands: PPRO lists Cabal, Naranja and Argencard for Argentina ([PPRO](https://www.ppro.com/countries/argentina/)), and EBANX has taken Cabal and Naranja since 2018 ([Finextra](https://www.finextra.com/pressarticle/76507/ebanx-integrates-with-credit-cards-in-argentina)). An entity that holds only a Cabal card may be unable to pay through Stripe. Ask pilots which cards they hold; this is a reason for the reseller and SAS routes, and for asking EBANX or dLocal about a local-card route later.
- **Charge in USD.** Show the peso equivalent on the price page. Charging in ARS adds the 1% conversion fee and needs price changes every quarter.

### Merchant of record (MoR)
- **Paddle** lists Argentina as a supported country with ARS and "Inclusive" tax display ([Paddle supported countries](https://developer.paddle.com/concepts/sell/supported-countries-locales)). Fee 5% + USD 0.50 ([Paddle pricing](https://www.paddle.com/pricing)). On USD 590 that is 5.1%, the same as Stripe.
  - Risk: Paddle may add a tax line while the card issuer also collects VAT. Check this in a test purchase before switching (unverified).
- **Lemon Squeezy** (Stripe-owned) accepts buyers from Argentina ([Lemon Squeezy supported countries](https://docs.lemonsqueezy.com/help/getting-started/supported-countries)). 5% + USD 0.50, plus a reported 1.5% for international payments ([Dodo Payments review](https://dodopayments.com/blogs/lemonsqueezy-review); third-party, unverified).
- **What an MoR buys here:** little for Argentina, because Argentina needs no seller VAT registration. It helps with the founder's home VAT and with chargebacks. **Recommendation: Stripe Billing.** Move to Paddle only if home-country VAT work becomes a burden.

### Bank transfers
- **Inside Argentina, transfers are the default way institutions pay suppliers** (practice; unverified). A foreign company has no peso account to receive them.
- **Cross-border wires from a mutual** need the bank to sell foreign currency in the official market. Rules for companies were loosened in April 2025 (Com. A 8226 shortened payment terms for services and allowed dividends to non-resident shareholders from 2025 financial years) ([abogados.com.ar](https://abogados.com.ar/un-gran-paso-camino-a-la-liberacion-de-las-restricciones-cambiarias/36600); [KPMG Argentina, Apr 2025](https://kpmg.com/ar/es/home/media/novedades-tax/2025/04/21-abril.html)). The 2026 rule for software services was not confirmed (unverified). Add wire fees, paperwork and the 31.5% withholding risk. **Do not offer wires for amounts under about USD 5,000.**

### Local collection options
- **A local reseller (recommended bridge).** A partner accounting firm or federation buys licences at a 25% discount and invoices the entity in pesos with VAT. It pays the founder's company by card or as an export of services. Cost: the discount. No company needed.
- **dLocal Go.** Argentina fees: cards 3.49%, cash 2.99%, bank transfer 1.99%, plus local taxes of 21% (search snippet of [dLocal Go coverage](https://dlocalgo.com/en/coverage); the page did not render for me). Merchants based in the United States and some other non-Latin American countries "can accept international payments but will not be able to sell locally"; EU and UK bases are not listed ([dLocal Go help centre](https://helpcenter.dlocalgo.com/en/articles/7229140-in-which-countries-can-i-sell-with-dlocal-go)). So it may not fit an EU or UK company (unverified). Ask dLocal.
- **Mercado Pago** needs an Argentine CUIT for a business account (secondary sources cited in [B1 file 04](../argentina-b1/04-gtm-company-finance.md); unverified). Usable only through the local SAS or a reseller.

### Recommended setup
1. Stripe account of the foreign company. Stripe Billing, Stripe Invoicing, Stripe Tax off for Argentina.
2. Prices in USD, net. A price page in Spanish that shows the ARS equivalent at the Banco Nación rate.
3. A Spanish buyer FAQ: "Factura del exterior; IVA servicios digitales 21% a cargo del comprador (RG 4240); entidades exentas con certificado vigente no sufren la percepción del 30% (RG 5617 art. 3)".
4. A reseller agreement with 2-3 partner accounting firms from month 2.
5. Review at month 9: if more than 30% of signed entities need a peso invoice, open the SAS.

## Company setup (needed or not, costs)

### Recommendation
- **No Argentine company at launch.** Sell from the founder's foreign company by card (see "Payments"). Argentina does not make a foreign digital-service seller register for VAT. I found no licence requirement for compliance software (unverified; file [01](01-law-and-requirements.md) found none either).
- **But expect to need one earlier than in a self-employed market.** Lending mutuales and credit co-ops are audited institutions. Many will want a local invoice in pesos and will want to pay by transfer. Federations that buy for members will want the same.
- **Bridge first with a reseller.** A partner accounting firm (or a federation's service company) buys licences at 25% off and invoices in pesos. This costs nothing to set up.
- **Open a SAS when any of these happens** (base case: about month 10, Aug 2027):
  1. more than 30% of signed entities, or more than 25 entities, need a peso invoice;
  2. a federation or ERP deal worth more than about USD 10,000 a year needs a local supplier;
  3. you hire Argentine staff as employees rather than contractors;
  4. you want Mercado Pago or local bank-transfer collection at scale.
- **Local help without a company.** Argentine contractors (support, sales, a Licenciado en Cooperativismo for content) can invoice the foreign company as exporters of services (common practice; unverified for each case).

### If a company is needed: SAS
- **Form: SAS (sociedad por acciones simplificada).** Cheapest and fastest in Buenos Aires city.
  - Minimum capital: 2 national minimum wages (Law 27.349 art. 40) ([Ley 27.349, Infoleg](https://servicios.infoleg.gob.ar/infolegInternet/anexos/270000-274999/273567/texact.htm)). The minimum wage is ARS 391,200 from October 2026, so the floor is **ARS 782,400 (about USD 516)**. It rises monthly to ARS 437,000 in April 2027 ([Res. 4/2026 schedule, via El Sol](https://www.elsol.com.ar/?p=2254009); [Colegio de Escribanos copy of Res. 4/2026](https://www.colegio-escribanos.org.ar/noticias/2026_09_02_Consejo_Salario_Res-4-26.pdf)). At least 25% of cash contributions is paid in at signing, the rest within two years (Law 27.349).
  - **IGJ RG 11/2026** (in force 23 Sep 2026) dropped the professional pre-qualification opinion for new companies in Buenos Aires city, allows a broad "any lawful activity" object for a SAS, and keeps the registration rules for foreign corporate shareholders ([+blogdelcontador](https://siap.blogdelcontador.com.ar/?p=111396)). This makes the SAS cheaper to form.
  - SAS procedures in Buenos Aires city run through TAD, the online filing platform (search snippet of [developargentina](https://developargentina.com/blog/como-abrir-sas-argentina-paso-paso-2026); unverified).
- **SRL** is the alternative: no legal minimum capital, but slower (4-8 weeks) and dearer through a notary ([VLO Law Firm, Jun 2026](https://vlolawfirm.com/guides/cost-of-company-formation-in-argentina-complete-breakdown)).

### Extra steps when the owner is foreign
- **If the founder's foreign company owns the shares,** it must register with the IGJ under art. 123 of the Companies Law. IGJ RG 4/2026 (from 27 May 2026) simplified this. It needs a good-standing certificate no older than six months, the articles, a board resolution, a local representative with an electronic domicile, and PEP and beneficial-owner statements. Apostilled digital documents printed on paper are accepted ([abogados.com.ar on RG 4/2026](https://abogados.com.ar/novedades-igj-resolucion-042026-simplificacion-sociedades-extranjeras/39242); [Colegio de Escribanos report](https://www.colegio-escribanos.org.ar/noticias/2026_06_10_Informe-Res-Gral-IGJ-4-26.pdf)).
- **If the founder holds the shares personally,** he needs an Argentine tax ID (CDI or CUIT), obtained in person at ARCA or through a representative ([VLO Law Firm](https://vlolawfirm.com/guides/cost-of-company-formation-in-argentina-complete-breakdown)). This is simpler than art. 123, but it puts the shares outside the foreign company.
- **Bank account:** several weeks, with extra checks for foreign owners ([VLO Law Firm](https://vlolawfirm.com/guides/cost-of-company-formation-in-argentina-complete-breakdown)).
- **Taking money out.** Since April 2025, local companies may buy foreign currency to pay dividends to non-resident shareholders from audited profits of financial years starting on or after 1 Jan 2025 (Com. A 8226) ([abogados.com.ar](https://abogados.com.ar/un-gran-paso-camino-a-la-liberacion-de-las-restricciones-cambiarias/36600)). Dividends carry a 7% withholding (Law 27.630; unverified for 2026). Paying the foreign parent a licence fee instead triggers the 31.5% withholding unless a treaty applies (see "Payments").

### Costs

| Route | One-off cost | Time | Source |
|---|---|---|---|
| Official fees only, Buenos Aires city, digital SAS | IGJ fee about ARS 8,438 (USD 6); no notary or edict for a SAS in the city | 1-2 weeks | [Cuánto me cuesta, Apr 2026](https://cuantomecuesta.com/ar/crear-empresa-sas/) (aggregator; unverified) |
| In person, Buenos Aires province | Signature certification ARS 80,850 plus a digital-signature token ARS 15,000-40,000 | 2-4 weeks | same |
| Lawyer, remote, local shareholders | About USD 300-800 | 1-2 weeks | [Argentina Visa Law guide](https://argentinavisalaw.com/guides/company-formation-argentina) (search snippet; unverified) |
| **Lawyer, remote, foreign parent (SAS plus art. 123), all in** | **About USD 2,000-4,000**: SAS, art. 123 filing, apostilles, translations, first months of a local representative | 4-8 weeks | my estimate from the sources above (unverified) |
| Founder flies in and does it himself | Official fees of tens of dollars, but the foreign-parent paperwork still needs a local professional. Trip about USD 1,500-2,500 | 2-6 weeks | my estimate |
| Capital paid in | 25% of ARS 782,400 = about USD 130 at signing | - | Law 27.349 |

**Ongoing cost of a small SAS:**

| Item | Cost | Source |
|---|---|---|
| Accountant: monthly VAT and gross-income returns, annual statements | ARS 120,000-250,000 a month (USD 80-165) | [DevelopArgentina guide](https://developargentina.com/guias/abrir-empresa-argentina); [yo-facturo](https://yo-facturo.com/blog/costos-de-abrir-una-empresa-en-argentina/) (commercial guides; unverified) |
| Local representative of the foreign parent (art. 123) | not quantified; budget USD 50-100 a month (my estimate) | [VLO Law Firm](https://vlolawfirm.com/guides/cost-of-company-formation-in-argentina-complete-breakdown) |
| Bank account, invoicing software | small | same |
| Bank debit and credit tax | 0.6% on debits and credits, partly creditable | (unverified) |
| Provincial gross-income tax (IIBB) | a few % of turnover by province and activity | (unverified rate) |
| Corporate income tax | progressive 25-35% (Law 27.630) | (unverified for 2026 brackets) |
| **Total fixed** | **about USD 2,500-4,000 a year before taxes** | my estimate |

**Model assumption (base case):** reseller route from month 2; SAS set up in month 10 for USD 3,000; then USD 250 a month fixed.

## Contracts and liability

**Customer terms (Spanish, click-through, B2B):**
- **The tool prepares; the entity files and signs.** Every INAES filing is a sworn statement (DDJJ), and TAD needs the representative's own clave fiscal ([01](01-law-and-requirements.md)). The terms must say:
  - the board, the compliance officer and the signing accountant stay responsible under Laws 20.321, 20.337 and 25.246 and UIF Res. 99/2023;
  - the product does not file, does not log in to INAES or TAD with the customer's credentials, and does not give legal or accounting advice;
  - "listo para presentar" means "checked against the rules we encode", not "accepted by INAES".
- **No credential sharing.** Never ask for clave fiscal or INAES passwords. A browser helper that fills the SAEM web form (if built later) must run inside the user's own session and be optional. INAES's terms of use for its systems were not checked (unverified).
- **Calculation accuracy.** The annex calculator (arrears buckets, provisions, guarantee fund, savings limit) is the riskiest feature. Show every formula and its source article. Keep a version log. Commit to fix errors within 5 business days and to update the rules within 30 days of a new INAES or UIF resolution.
- **Tipping-off.** The AML law forbids revealing a suspicious-transaction report to the member or third parties (Law 25.246 art. 21(c); [Infoleg](https://servicios.infoleg.gob.ar/infolegInternet/anexos/60000-64999/62977/texact.htm)). Keep the unusual-operations log visible only to the compliance officer's role. Hide it from reseller, federation and reviewer seats.
- **Liability cap:** fees paid in the last 12 months. Exclude fines, loss of the lending rule and indirect loss. Argentine law voids clauses that limit liability for wilful misconduct or that are abusive (Civil and Commercial Code art. 1743; unverified in this pass). Do not try to exclude those.
- **Consumer law.** A mutual or co-op buying for its own activity is probably not a "consumer" (unverified). Add an easy online cancel button anyway.
- **Governing law and forum.** The founder's company's law for direct card sales. For the local SAS or reseller contracts, Argentine law and the courts (or arbitration) of the city of Buenos Aires or Rosario.
- **Records and exit.** UIF records must be kept for 10 years ([01](01-law-and-requirements.md)). The customer can export everything at any time (CSV, XLSX, PDF). A cheap read-only archive plan (USD 5 a month) keeps records after cancellation.

**Data protection (Law 25.326):**
- **Roles.** The entity is the data controller. The vendor is the processor ("prestador de servicios informatizados"). Put a processing agreement (DPA) inside the terms.
- **Data held:** member names, DNI and CUIT/CUIL, address, PEP status, risk level, tax residence and foreign tax ID (CRS), loan balances. No health data: health mutuales must not upload clinical information.
- **International transfer.** Law 25.326 bars transfers to countries without adequate protection unless an exception applies, such as model contract clauses (Disposición 60-E/2016) ([argentina.gob.ar, transferencias internacionales](https://www.argentina.gob.ar/transferencias-internacionales); [abogados.com.ar](https://abogados.com.ar/nueva-regulacion-sobre-transferencias-internacionales-de-datos-personales/33745)).
  - **Host in the EU** (treated as adequate) and sign the AAIP model clauses with any sub-processor in a non-adequate country (for example US email, AI or monitoring providers).
- **Database registration** with the AAIP is the controller's duty. Provide a ready text.
- **Security.** Encryption at rest, role-based access, access logs, MFA for all users, and a yearly external penetration test (budgeted below).

**Partner contracts:**
- **Accountant reseller:** 25% wholesale discount, or 20% of first-year revenue as a referral fee. Confidentiality and data-processing clauses.
- **External reviewer (REI) seat:** read-only access for the entity's independent reviewer. A REI must be independent of the entity ([Marval on the REI regime](https://www.marval.com/Publicacion/uif-regulacion-de-la-actividad-del-revisor-externo-independiente-13071?lang=es)). So a REI may refer clients, but must not resell the tool to entities whose AML system it reviews.
- **Federation white-label:** members own their data. The federation sees adoption counts only. 12-month term, per-entity price with a minimum.
- **ERP integration partners (Bambú, SIGMA):** a file-format agreement and a mutual referral fee. No exclusivity.

**Legal, security and insurance budget (my estimates, unverified prices):**
- Argentine lawyer with co-op and AML practice: terms, DPA, disclaimers and template review, about USD 3,000 in months 1-2, then USD 200 a month retainer for rule changes.
- A Licenciado en Cooperativismo or accountant who knows SAEM returns to check the annex formulas: USD 300 a month from month 1 (contractor).
- External penetration test: USD 3,000 before launch, then USD 2,500 a year.
- Tech errors-and-omissions and cyber insurance in the founder's country: about USD 1,200 a year.

## Financial model

The model runs by month. Month 1 is November 2026; month 36 is October 2029. All figures are USD, net of Argentine taxes paid by the buyer, before the founder's own income tax. The script is in the session scratchpad, not in the repo. Every input below is my planning assumption unless a source is given.

### Assumptions

| Assumption | Low | Base | High | Basis |
|---|---|---|---|---|
| Core pool: active lending mutuales and credit co-ops | 1,130 | 1,130 | 1,130 | [02](02-market-and-competition.md): 537 + 596 (FATF MER 2024) |
| New paying lending entities, years 1 / 2 / 3 (target before ramp) | 25 / 30 / 25 | 60 / 60 / 50 | 110 / 110 / 90 | My estimate. Base = about 10 accountants with 4 entities each, plus direct sales, per year |
| Lending entities active at month 36 (share of pool) | 54 (5%) | 133 (12%) | 261 (23%) | Output |
| Year-1 ramp | months 1-3 at 30% / 60% / 80% of normal | same | same | Product becomes sellable late Nov 2026 |
| Seasonality of new sales | Nov 1.3, Dec 1.0, Jan 0.7, Feb 0.6, Mar 1.1, Apr 1.3, May 1.0, Jun 0.9, Jul 0.7, Aug 1.0, Sep 1.1, Oct 1.3 | same | same | Deadline calendar (see "Go-to-market") |
| Share on annual prepay (10 months' price) | 40% | 50% | 60% | My estimate |
| Churn: monthly plans / annual renewal | 2.5% a month / 70% | 1.5% a month / 85% | 1.0% a month / 90% | Licence withdrawals and dormant entities push churn up ([Res 565/2026](https://www.boletinoficial.gob.ar/detalleAviso/primera/339254/20260310)) |
| Blended price per lending entity per month, years 1 / 2 / 3 | 22 / 23 / 24 | 26 / 28 / 30 | 30 / 33 / 36 | Plan mix: about 35% direct (Básica USD 29, Completa USD 59) and 65% via accountants (USD 20), less founding discounts |
| Registro tier (non-lending entities, USD 5 a month) at months 12 / 24 / 36 | 0 / 20 / 50 | 40 / 100 / 180 | 80 / 250 / 450 | Sold only inside accountant accounts |
| Federation white-label (USD 15 per entity a month) | none | 25 entities from month 13 | 25 from month 10, plus 40 from month 18 | My estimate |
| One-off services | Pack Res 1567: 4; catch-up 1 a month; assisted self-assessment 4-6 a year | Pack: 12 (USD 150); catch-up 2 a month (USD 300); self-assessment 8 / 12 / 15 a year (USD 400, we keep half) | Pack: 25; catch-up 3-4 a month; self-assessment 16 / 24 / 30 | My estimate |
| Build | Founder plus AI agents. AI tools USD 400 a month in months 1-3, then USD 250 | same | same | Owner's plan; no hired developers |
| Hosting (EU) and SaaS tools | USD 200 / 300 / 430 a month in years 1 / 2 / 3 | same | same | My estimate |
| Lawyer | USD 3,000 in months 1-2, then USD 200 a month | same | same | My estimate |
| Licenciado/accountant content contractor | USD 300 a month | same | same | My estimate |
| Penetration test, insurance | USD 3,000 at launch, USD 2,500 a year after; insurance USD 1,200 a year | same | same | My estimate |
| Local support and sales contractor (from month 4) | USD 500 a month | USD 700 / 1,200 / 1,500 a month in years 1 / 2 / 3 | USD 900 / 1,800 / 2,800 | My estimate for a Spanish-speaking Argentine contractor |
| Marketing, years 1 / 2 / 3 | 6,000 / 4,000 / 4,000 | 10,000 / 8,000 / 8,000 | 14,000 / 12,000 / 12,000 | Plan below |
| Partner commissions or reseller discount | 6% of subscription revenue | 8% | 10% | About 40% of sales through partners at 20-25% |
| Payment fees | 5% of cash in | same | same | Stripe, see "Payments" |
| Local SAS | none (reseller only) | month 10: USD 3,000, then USD 250 a month | month 7 | See "Company setup" |
| Foreign company admin and misc. | USD 200 a month | same | same | My estimate |
| Founder pay | none in the main tables; a variant adds USD 3,000 a month from month 13 | | | |

### Base case by quarter (no founder pay)

"Active" counts paying lending entities. Registro and federation entities are shown separately. ARR is the run-rate at quarter end. Cash in includes annual prepayments.

| Quarter | New | Churned | Active (end) | Registro | Federation | ARR (end) | Revenue | Cash in | Costs | Net cash | Cumulative |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Q1 Nov 26-Jan 27 | 8 | 0 | 8 | 0 | 0 | 2,200 | 2,747 | 3,596 | 13,408 | -9,811 | -9,811 |
| Q2 Feb-Apr 27 | 15 | 0 | 22 | 6 | 0 | 6,754 | 4,599 | 6,010 | 8,446 | -2,437 | -12,248 |
| Q3 May-Jul 27 | 13 | 1 | 35 | 23 | 0 | 11,313 | 4,286 | 4,939 | 8,496 | -3,557 | -15,805 |
| Q4 Aug-Oct 27 | 17 | 1 | 51 | 40 | 0 | 16,933 | 5,531 | 6,227 | 12,160 | -5,933 | -21,738 |
| Q5 Nov 27-Jan 28 | 15 | 2 | 64 | 55 | 25 | 27,047 | 8,223 | 9,159 | 14,772 | -5,613 | -27,351 |
| Q6 Feb-Apr 28 | 15 | 3 | 77 | 70 | 25 | 31,913 | 11,687 | 13,070 | 11,352 | 1,717 | -25,634 |
| Q7 May-Jul 28 | 13 | 3 | 87 | 85 | 25 | 36,088 | 10,513 | 10,882 | 11,341 | -459 | -26,092 |
| Q8 Aug-Oct 28 | 17 | 3 | 101 | 100 | 25 | 41,377 | 11,668 | 12,601 | 11,519 | 1,081 | -25,011 |
| Q9 Nov 28-Jan 29 | 12 | 4 | 109 | 120 | 25 | 46,780 | 12,759 | 13,421 | 16,674 | -3,253 | -28,264 |
| Q10 Feb-Apr 29 | 12 | 4 | 117 | 140 | 25 | 50,899 | 16,659 | 17,776 | 13,264 | 4,513 | -23,752 |
| Q11 May-Jul 29 | 11 | 4 | 124 | 160 | 25 | 54,446 | 14,698 | 14,704 | 13,193 | 1,511 | -22,241 |
| Q12 Aug-Oct 29 | 14 | 5 | 133 | 180 | 25 | 58,953 | 15,682 | 16,758 | 13,374 | 3,383 | -18,858 |

Base-case active lending entities by month:
- Year 1: 2, 5, 8, 11, 16, 22, 27, 32, 35, 40, 45, 51.
- Year 2: 57, 61, 64, 66, 71, 77, 81, 84, 87, 91, 95, 101.
- Year 3: 105, 108, 109, 111, 114, 117, 120, 122, 124, 126, 129, 133.

### Low case by quarter (no founder pay)

| Quarter | Active (end) | Registro | ARR (end) | Revenue | Cash in | Costs | Net cash | Cumulative |
|---|---|---|---|---|---|---|---|---|
| Q1 | 3 | 0 | 784 | 1,024 | 1,264 | 12,271 | -11,007 | -11,007 |
| Q2 | 9 | 0 | 2,269 | 2,115 | 2,513 | 6,601 | -4,088 | -15,095 |
| Q3 | 14 | 0 | 3,475 | 1,682 | 1,866 | 6,590 | -4,724 | -19,819 |
| Q4 | 21 | 0 | 5,037 | 2,017 | 2,214 | 6,628 | -4,414 | -24,233 |
| Q5 | 27 | 5 | 7,059 | 2,543 | 2,842 | 10,191 | -7,348 | -31,581 |
| Q6 | 32 | 10 | 8,812 | 3,923 | 4,299 | 6,586 | -2,287 | -33,869 |
| Q7 | 37 | 15 | 10,254 | 3,359 | 3,451 | 6,570 | -3,119 | -36,988 |
| Q8 | 43 | 20 | 12,121 | 3,761 | 4,011 | 6,622 | -2,611 | -39,599 |
| Q9 | 46 | 28 | 13,755 | 4,254 | 4,398 | 10,761 | -6,363 | -45,962 |
| Q10 | 49 | 35 | 15,017 | 5,723 | 5,942 | 7,154 | -1,212 | -47,174 |
| Q11 | 51 | 42 | 16,051 | 4,839 | 4,794 | 7,116 | -2,322 | -49,496 |
| Q12 | 54 | 50 | 17,429 | 5,132 | 5,385 | 7,163 | -1,778 | -51,274 |

### High case by quarter (no founder pay)

| Quarter | Active (end) | Registro | Federation | ARR (end) | Revenue | Cash in | Costs | Net cash | Cumulative |
|---|---|---|---|---|---|---|---|---|---|
| Q1 | 14 | 0 | 0 | 4,585 | 5,673 | 7,828 | 14,664 | -6,836 | -6,836 |
| Q2 | 41 | 11 | 0 | 14,091 | 9,302 | 12,884 | 10,544 | 2,339 | -4,496 |
| Q3 | 65 | 46 | 0 | 23,656 | 8,793 | 10,450 | 14,192 | -3,742 | -8,238 |
| Q4 | 95 | 80 | 25 | 40,000 | 12,541 | 14,308 | 12,009 | 2,298 | -5,940 |
| Q5 | 120 | 122 | 25 | 53,168 | 16,072 | 18,702 | 18,782 | -80 | -6,020 |
| Q6 | 145 | 165 | 65 | 72,087 | 24,057 | 27,902 | 15,861 | 12,041 | 6,021 |
| Q7 | 165 | 208 | 65 | 82,385 | 23,421 | 24,508 | 16,108 | 8,400 | 14,421 |
| Q8 | 193 | 250 | 65 | 95,190 | 26,251 | 28,777 | 16,604 | 12,173 | 26,595 |
| Q9 | 210 | 300 | 65 | 108,471 | 29,081 | 31,154 | 24,186 | 6,968 | 33,562 |
| Q10 | 227 | 350 | 65 | 118,960 | 37,401 | 40,798 | 21,200 | 19,598 | 53,161 |
| Q11 | 241 | 400 | 65 | 128,217 | 34,056 | 34,257 | 21,138 | 13,118 | 66,279 |
| Q12 | 261 | 450 | 65 | 139,688 | 36,596 | 39,660 | 21,663 | 17,998 | 84,277 |

### Scenario summary

| Measure | Low | Base | High |
|---|---|---|---|
| Lending entities at month 6 / 12 / 24 / 36 | 9 / 21 / 43 / 54 | 22 / 51 / 101 / 133 | 41 / 95 / 193 / 261 |
| ARR at month 12 / 24 / 36 | 5,000 / 12,100 / 17,400 | 16,900 / 41,400 / 59,000 | 40,000 / 95,200 / 139,700 |
| Revenue, years 1 / 2 / 3 | 6,800 / 13,600 / 19,900 | 17,200 / 42,100 / 59,800 | 36,300 / 89,800 / 137,100 |
| Costs, years 1 / 2 / 3 | 32,100 / 30,000 / 32,200 | 42,500 / 49,000 / 56,500 | 51,400 / 67,400 / 88,200 |
| Year-3 profit before founder pay (cash) | -11,700 | 6,200 | 57,700 |
| Monthly break-even (3 positive months in a row) | not reached | month 22 (Aug 2028), but fragile until month 34 | month 10 (Aug 2027) |
| Cumulative cash positive | not within 36 months | not within 36 months (-18,900 at month 36) | month 18 (Apr 2028) |
| **Peak cash need, no founder pay** | **51,300** | **28,500** | **8,200** |
| Peak cash need with founder pay of USD 3,000 a month from month 13 | 123,300 | 90,900 | 17,200 |
| Blended acquisition cost (CAC), year 1 (marketing + half the contractor + commissions, per new entity) | about 380 | about 260 | about 205 |

**Variant: shared costs with a second Argentine compliance product.** The deep dive on [B1, a UIF kit for real-estate brokers](../argentina-b1/04-gtm-company-finance.md) needs the same AML engine, the same SAS, lawyer, support contractor, security test and insurance. If those shared lines are split 50/50, the base case improves to a **peak cash need of about USD 12,600, a year-3 profit of about USD 22,000, and cumulative cash of +USD 20,700 by month 36** (my calculation). Low: peak USD 27,600, still loss-making. High: year-3 profit USD 81,300.

**Unit economics (base, my estimate):**
- First-year revenue per lending entity about USD 290 against a CAC of about USD 260. Payback about 11 months.
- Annual churn of about 15-18% gives a life of 5-6 years. With about 85% gross margin, lifetime value is about USD 1,500-1,700. LTV/CAC is about 6.
- **The limit is the pool, not the unit economics.** 1,130 active entities at USD 30 a month is a ceiling of about USD 400,000 ARR at 100% share.

**What the numbers mean:**
- **Alone, the base case is a break-even side business by year 3.** It cannot pay the founder a salary in 36 months. Peak cash need is about USD 28,500, or about USD 91,000 if the founder pays himself from year 2.
- **It works as one vertical of an Argentine compliance platform.** Shared with B1 (or another UIF-obliged vertical), the same base case becomes profitable and self-funding by year 3.
- **The high case needs accountants and federations to carry it.** It assumes 23% of the active pool plus two federation deals. That would also make the product an acquisition target for an ERP vendor.
- **The low case is visible early.** Fewer than 10 paying entities by April 2027 (month 6) means the low path.

## Regional expansion

**The INAES content does not travel. The engine does.** The mutual form, the SAEM return and INAES's filings are specific to Argentina ([02](02-market-and-competition.md)). What can be reused: the deadline engine, the member register with PEP and risk fields, the AML records (self-assessment, manual, training, unusual-operations log) and the "prepare the regulator's form" pattern.

**Order of expansion:**
1. **More Argentine verticals on the same UIF engine (months 6-18).** The [B1 dive](../argentina-b1/04-gtm-company-finance.md) (UIF kit for real-estate brokers) shares the AML core, the SAS, the lawyer and support. Other UIF-obliged groups that accountants serve could follow (my suggestion; not researched here). This is the cheapest growth and fixes the base case's weak profit (see "Financial model").
2. **Paraguay savings-and-credit co-ops (from about month 24).** 382 of 576 registered co-ops do savings and credit (La Nación Py, via [02](02-market-and-competition.md)). SEPRELAD Res 156/2020, written with INCOOP, sets a full AML system for them ([Ferrere](https://ferrere.com/es/novedades/nueva-reglamentacion-de-prevencion-de-lavado-de-activos-para-cooperativas/)). The [Paraguay B1](../paraguay-b1/04-gtm-company-finance.md) and [B2](../paraguay-b2/04-gtm-company-finance.md) dives plan a SEPRELAD engine already; co-ops would be a third vertical there. Payments: Stripe charges PYG from a foreign company ([Paraguay B1 file 04](../paraguay-b1/04-gtm-company-finance.md)). All legal content must be rewritten, and large "Type A" co-ops run core banking systems (unverified).
3. **Peru (COOPAC under the SBS).** 419 registered in 2019; the SBS dissolves inactive ones ([Andina](https://andina.pe/ingles/noticia-sbs-419-cooperativas-lograron-su-registro-tras-proceso-inscripcion-758324.aspx)). Larger entities and a more formal market (unverified). Only with a local partner.
4. **Uruguay:** small; few savings co-ops under the central bank ([02](02-market-and-competition.md)). Low priority.
5. **Colombia:** large but crowded with local AML/GRC vendors such as Pirani (unverified for this segment). Skip.

**Cost of each new country (my estimate):** USD 5,000-8,000 of legal content and a local reviewer, 4-6 weeks of founder and agent time, one or two trips, and pilots. Do not start before the Argentine base passes 100 paying entities or the shared-platform case is proven.

## Exit and partnerships

**Partnerships (years 1-2):**
- **Accounting firms as resellers** (peso invoices; 25% discount).
- **Federations** (CAM members, FEMUCOR, FEDEMBA, the Santa Fe federation; FACC and Cooperar for credit co-ops): member webinars, then white-label.
- **Mutual ERP vendors** (Bambú, SIGMA/NeoSistemas, Nexa, GEM): import their exports, refer each other's clients. Bambú already claims INAES file export and UIF features, so it is both the best partner and the main threat ([02](02-market-and-competition.md)).
- **CONLAFT** (AML software and services for co-ops and mutuales, 5 systems deployed): a possible partner for the done-for-you AML work, or a competitor if it adds INAES preparation ([Cancillería profile](https://www.cancilleria.gob.ar/userfiles/ut/conlaft_espanol.pdf)).
- **REIs and IT professionals** who sign the SAEM IT report: referral partners.

**Who might buy the business (years 3-5):**
- **A mutual ERP vendor** wanting a compliance layer for its clients and an accountant channel (Bambú, NeoSistemas, Renova/GEM).
- **Consolidators of Argentine business software.** Visma bought Calipso in 2022 ([iProfesional](https://www.iprofesional.com/tecnologia/359020-software-de-gestion-visma-compra-calipso)) and Xubio (search result dated 2023; unverified date) ([Visma release](https://publish.ne.cision.com/v2.2/Release/ViewReleaseHtml/DC2B845805F04BD9)). Vela LatAm bought 100% of Axoft Argentina, the maker of Tango, in October 2026 ([Bruchou & Funes de Rioja](https://bruchoufunes.com/?p=35162)). Xubio already sells firm plans to accountants ([Xubio](https://xubio.com/ar/precios-contadores)); a co-op and mutual compliance module would fit that channel.
- **Tax and legal publishers** that serve accountants (for example the owners of +blogdelcontador/SIAP or Errepar) (unverified interest).
- **CONLAFT** or a regional AML vendor.

**Valuation.** Small SaaS under USD 500,000 ARR sells for about 2-3x seller's discretionary earnings ([PipelineRoad](https://pipelineroad.com/agency/blog/saas-valuations-guide)); Acquire.com deals closed at a median of about 3.9x profit in 2024-2025 ([BigIdeasDB](https://bigideasdb.com/state-of-saas-valuations-2026); vendor data, unverified). On its own the base case (year-3 profit about USD 6,000) has little sale value. The high case (about USD 58,000 profit) would be worth about USD 120,000-230,000. **The real value comes from a shared Argentine (or regional) AML platform, sold as one business.**

**Exit by wind-down.** If the kill criteria trigger, offer customers the Archivo plan and a full export, and sell the customer list or code to an ERP vendor or CONLAFT.

## Risks and mitigations

| # | Risk | Likelihood / impact | Mitigation |
|---|---|---|---|
| 1 | **Small pool and slow institutional sales.** About 1,130 active lenders; CONLAFT reports only 5 systems deployed since May 2024 ([Cancillería profile](https://www.cancilleria.gob.ar/userfiles/ut/conlaft_espanol.pdf)) | high / high | Sell through accountants (several entities per sale) and federations; low self-serve prices; share fixed costs with a second UIF vertical (B1); kill criteria below |
| 2 | **INAES adds file import or automatic loading to the SAEM form**, or its own checks. INAES says its modules already allow "data migration and automatic loading" ([Res 1567](https://www.consejosalta.org.ar/wp-content/uploads/INAES-1567.pdf)) | medium / medium | Switch the copy sheet to file generation (a gain, not a loss). Keep the value in what INAES does not do: computing the annexes from the loan book, UIF records, the multi-entity board and the deadline engine |
| 3 | **Bambú, another ERP or CONLAFT adds the same features** | medium / high | Partner early with an import from their exports; target accountants and small lenders with no ERP; publish prices (none of them do) |
| 4 | **A wrong annex figure leads to a wrong sworn statement** | medium / high | Show formulas and sources; Licenciado review of every rule change; reconcile pilot output with 3 past filings; liability cap; E&O insurance; the entity always reviews and files |
| 5 | **Payment friction:** no card, a Cabal-only card, or a demand for a peso invoice | high / medium | Reseller route from month 2; SAS trigger at 30% peso demand; buyer FAQ on RG 4240 and RG 5617 |
| 6 | **Tax-rule changes** (the 30% advance, provincial digital-service taxes, provider lists) | medium / low | Taxes fall on the buyer and are neutral against local rivals for VAT; keep the FAQ current |
| 7 | **Peso shocks.** USD prices jump in pesos after a devaluation; peso prices erode with about 2% monthly inflation ([Tiempo Argentino](https://www.tiempoar.com.ar/ta_article/por-decreto-el-gobierno-fijo-el-nuevo-salario-minimo-es-de-apenas-383-800/amp/)) | medium / medium | USD list with quarterly review; peso contracts indexed; a 3-month price freeze after a devaluation for annual customers |
| 8 | **Rule churn**: seven relevant resolutions in 18 months ([01](01-law-and-requirements.md)) | high / medium | Rules as versioned data; lawyer and Licenciado retainers; promise a 30-day update window. Churn is also the moat |
| 9 | **Data breach** of member files (DNI, PEP, tax residence) | low / high | EU hosting, encryption, MFA, role-based access, yearly penetration test, DPA and AAIP model clauses |
| 10 | **Founder abroad, far from a relationship-driven sector** | high / medium | Local contractor from month 4; two trips a year; federation partners; WhatsApp support |
| 11 | **Pool shrinks** through licence withdrawals (205 mutuales in Res 565/2026) ([BO](https://www.boletinoficial.gob.ar/detalleAviso/primera/339254/20260310)) | medium / low | Focus on active lenders; turn purges into catch-up sales |
| 12 | **The regulator is reorganised** | low / medium | No 2026 restructuring of INAES found (one search; unverified). The UIF duties stay whatever happens to INAES |

## Milestones and kill criteria

| Date | Milestone (base path) | Kill or rethink if |
|---|---|---|
| 25 Oct 2026 (day 14) | 25 interviews; 3 written pilot commitments; 2 accountants say they would pay USD 20 per entity | fewer than 2 commitments and no accountant would pay; or interviews show ERPs already prepare the SAEM web form for most small lenders |
| 15 Nov 2026 (day 35) | MVP live: calendar, roll export, Res 1567 pack, multi-entity board, annex calculator v0 reconciled with 2 real loan books | the calculator cannot reproduce a past filing |
| 13 Dec 2026 (day 63) | 10 paying entities; 10 packs sold; penetration test passed; 2 reseller agreements | fewer than 5 paying entities |
| 9 Jan 2027 (day 90) | 15 paying entities; 5 active accountants; card failures under 10% | fewer than 8 paying entities, or card failures above 25% with no reseller in place |
| 30 Apr 2027 (month 6) | 22 paying entities; 8 self-assessments sold; first case study | **fewer than 10 paying entities (the low path)** |
| 31 Oct 2027 (month 12) | 50 paying entities; 40 Registro entities; 1 federation in talks; SAS open if triggered | **fewer than 25 entities and no shared-platform plan (B1 or another vertical)** |
| 31 Oct 2028 (month 24) | 100 entities; first-year renewal of at least 80%; monthly break-even | renewal below 60%, or fewer than 60 entities |
| Any time | - | INAES ships import plus annex calculation **and** an ERP or CONLAFT sells a multi-entity board below USD 15 per entity |

## Open questions

1. **Which cards do lending mutuales and credit co-ops hold?** Visa or Mastercard business cards, Cabal only, or none? Does Stripe accept Cabal? Ask every pilot.
2. **How do issuers apply the RG 5617 art. 3 exclusion** for co-ops and mutuales with an exemption certificate? Test with one pilot's card.
3. **What share of mutuales are VAT-registered?** It decides whether the 21% is a cost or a credit.
4. **Must an income-tax-exempt mutual withhold 31.5%** when it wires money to a foreign seller?
5. **Will accountants pay USD 20 per entity a month,** and how many lending clients does a typical one have?
6. **What do CONLAFT, Bambú and SIGMA charge?** A mystery-shopper demo request would answer it.
7. **Does any ERP already prepare the new SAEM web form** (Res 1279) or the Res 1567 module?
8. **Will INAES add file import to the SAEM web form?** Ask INAES's help desk and the provincial bodies.
9. **Where is the founder's company?** It decides Stripe fees (US vs EU account), dLocal Go eligibility and any treaty relief on wires.
10. **2027 dates of the sector's congresses** (CAM, FACC, the Rosario congress) and stand prices.
11. **Can the B1 and B2 products share one SAS, one engine and one support person?** The base case depends on it.
12. **Dividend withholding and FX access for a foreign-owned SAS in 2026-2027** (Com. A 8226 conditions; 7% dividend tax), if profits are to leave Argentina.

## Sources
(pending)
