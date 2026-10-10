# Argentina B1 (UIF kit for real estate brokers): go-to-market, payments, company setup and financials (deep dive 04)

Date: 10 Oct 2026. Builds on the [B1 report](../reports/argentina-b1.md), [01 Law and requirements](01-law-and-requirements.md) and [02 Market and competition](02-market-and-competition.md). Money is in US dollars unless marked ARS. Exchange rate: ARS 1,517 per USD, the BCRA official rate on 9 Oct 2026 ([BCRA API](https://api.bcra.gob.ar/estadisticascambiarias/v1.0/Cotizaciones/USD?fechadesde=2026-10-01&fechahasta=2026-10-10)). "Net" means before Argentine taxes added on the buyer's card. "My estimate" marks planning numbers I derived. "(unverified)" marks facts I could not confirm.

Status: complete draft, 10 Oct 2026.

## Summary

- **Price it as a cheap, public, self-serve tool.** The incumbent, AMLify (BDO Argentina), shows no price and sells by demo ([amlify.net](https://amlify.net/)). Plans: **Solo USD 15 a month or USD 150 a year; Inmobiliaria (agency) USD 39 or USD 390; Contador (accountant or reviewer, up to 15 broker clients) USD 69 or USD 690; colegio white-label from about USD 6,000 a year.** Solo costs about 30% of the Buenos Aires city colegio's annual fee of ARS 750,000 (USD 494) ([CUCICBA](https://colegioinmobiliario.org.ar/institucional/matriculacion)). It costs less than the cheapest Tokko CRM plan, USD 80 a month ([DevelopArgentina](https://developargentina.com/blog/software-inmobiliaria-argentina-2026)).
- **Sell from the founder's foreign company, by card. No Argentine company is needed at launch.** Argentine cards pay foreign software every day. The card issuer adds 21% VAT and a 30% income-tax advance on the buyer's side ([RG 4240](https://www.boletinoficial.gob.ar/detalleAviso/primera/183569/20180514); [Fortuna, 2026](https://fortunaweb.com.ar/blog/dolar-tarjeta-2026-como-se-calcula-el-costo-real-de-pagar-en-el-exterior)). The foreign seller does not register for Argentine VAT. Stripe takes ARS or USD ([Stripe currencies](https://docs.stripe.com/currencies)). Paddle lists Argentina as supported ([Paddle](https://developer.paddle.com/concepts/sell/supported-countries-locales)). On an annual plan both cost about 5.3% in fees (my calculation).
- **The buyer-side tax friction is real but familiar.** A USD 15 plan paid in pesos shows about USD 22.65 on the statement: USD 15, plus 21% VAT, plus the 30% advance. The 30% comes back later as a tax credit or refund. Provinces may add 3-5.5% gross-income tax on digital services from abroad ([Blog del Contador on Santa Fe](https://blogdelcontador.com.ar/news-45948-santa-fe-aplicara-ingresos-brutos-a-servicios-digitales-del-exterior-desde-el-1-de-julio)). Annual plans and USD pricing are normal in this market.
- **Open a local SAS only when institutional deals need a peso invoice.** That means colegios or franchises worth more than about USD 20,000 a year, or ones that would withhold 31.5% income tax on a wire ([Garrigues](https://www.garrigues.com/es_ES/noticia/software-service-saas-desafio-alta-complejidad-tributaria-mundo-digital-e-interconectado)). A SAS needs ARS 767,600 of capital (2 minimum wages, about USD 506). Official fees in Buenos Aires city are small. A remote lawyer charges about USD 300-800 for the SAS, plus the art. 123 registration of the foreign parent (now simpler under IGJ RG 4/2026 ([abogados.com.ar](https://abogados.com.ar/novedades-igj-resolucion-042026-simplificacion-sociedades-extranjeras/39242))). My all-in estimate is USD 2,000-4,000, then about USD 2,500-4,000 a year to run it.
- **Channels in priority order:**
  1. accountants and external reviewers who serve brokers;
  2. provincial colegios outside Buenos Aires city (Córdoba, Rosario, Santa Fe, Mendoza, Entre Ríos, Buenos Aires province);
  3. self-serve SEO and WhatsApp, around the annual-report window (2 Jan-15 Mar) and the April 2028 self-assessment;
  4. CRM vendors (Tokko, now owned by QuintoAndar ([Privsource](https://www.privsource.com/acquisitions/deal/quintoandar-acquires-navent-s-real-estate-operations-to-strengthen-latin-american-offering-krS5VB)), and Xintel).

  The year-1 marketing budget is **about USD 12,000**.
- **Financial model (36 months, founder builds with AI agents, no founder pay):**
  - **Base:** 268 broker accounts and 35 accountant seats by month 36. ARR about USD 123,000. Monthly break-even in month 15 (Jan 2028). Peak cash need about USD 25,000, or USD 50,000 if the founder pays himself USD 3,000 a month from year 2.
  - **Low:** about USD 31,000 ARR. It never pays back within 36 months. Peak cash need USD 39,000.
  - **High:** about USD 309,000 ARR. Peak cash need USD 17,000.
- **This is a small, profitable niche, not a venture.** Base year-3 profit before founder pay is about USD 45,000. A sale at 2-4x profit would bring USD 90,000-180,000 ([PipelineRoad](https://pipelineroad.com/agency/blog/saas-valuations-guide)). The upside needs colegio deals, accountants and Uruguay. The likely buyers or partners are BDO (AMLify), QuintoAndar/Tokko, and Xintel.
- **Kill criteria:**
  - fewer than 3 paying pilots from 30 conversations by 11 Dec 2026;
  - fewer than 15 paying accounts by 31 Mar 2027 (end of the annual-report window);
  - fewer than 35 by Oct 2027;
  - AMLify signs COFECI and publishes a price below USD 15.

## Pricing and packaging

### What buyers already pay (anchors)

| Item | Price | USD | Source |
|---|---|---|---|
| Buenos Aires city colegio annual fee, 2027 | ARS 750,000 a year | 494 a year (41 a month) | [CUCICBA matriculación](https://colegioinmobiliario.org.ar/institucional/matriculacion) |
| Buenos Aires city colegio entry fee | ARS 6,000,000 | 3,955 | same |
| Buenos Aires province annual fee, including pension (2025) | ARS 620,000 | 409 | [iProfesional](https://www.iprofesional.com/realestate/433013-cualquier-persona-podra-poner-imobiliaria-y-ser-martillero-polemico-plan) |
| Tokko Broker CRM | USD 80-300 a month per agency | 960-3,600 a year | [DevelopArgentina](https://developargentina.com/blog/software-inmobiliaria-argentina-2026) |
| InmoPC / InmoSuite CRM | ARS 15,000-80,000 a month | 10-53 a month | same |
| AMLify (direct competitor) | Not published; demo-led; a member benefit of the Buenos Aires city colegio since 27 May 2026 | unknown | [amlify.net](https://amlify.net/); [CUCICBA #245](https://colegioinmobiliario.org.ar/novedades/245) |
| Law firms, consultants, external reviewers | Not published; no fee scale found | unknown | [ST Abogados](https://stabogados.com.ar/civil/empresas/compliance-sujetos-obligados/) |
| Fine for a non-reporting breach | 15-2,500 módulos at ARS 54,140 = ARS 0.81-135 million per breach | about 535-89,000 | [Law 25.246](https://servicios.infoleg.gob.ar/infolegInternet/anexos/60000-64999/62977/texact.htm); módulo in the [B1 report](../reports/argentina-b1.md) |
| Broker commission on a sale | About 3-4% per side, often 4% to the buyer in Buenos Aires city | 3,000-4,000 per side on a USD 100,000 sale | [hacecuentas calculator](https://hacecuentas.com/calculadora-comision-inmobiliaria-venta-inmueble-4-porciento); [Ámbito, Jun 2026](https://www.ambito.com/real-estate/cuales-son-los-gastos-que-pagan-comprador-y-vendedor-una-propiedad-us100000-caba-y-provincia-n6287354) (unverified as a norm) |

What this tells us:
- **One sale's commission pays for decades of the tool.** But brokers compare software prices with their fixed costs, not with deals.
- **The colegio fee is the mental anchor for a sole broker.** A compliance tool at 30% of it is easy to accept. At 100% it is not (my judgement).
- **AMLify's opacity is the opening.** It has over 40 broker clients, mostly RE/MAX offices ([amlify.net](https://amlify.net/)). Over 10,000 brokers are registered with the UIF ([FATF/GAFILAT MER 2024](https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf)). A public price and a 10-minute setup win the long tail.

### Proposed plans (USD, net of Argentine taxes)

| Plan | Who | Monthly | Yearly (2 months free) | ARS a year at 1,517 | What is included |
|---|---|---|---|---|---|
| **Chequeo UIF (free)** | Any broker; lead magnet | 0 | 0 | 0 | "Am I obliged?" test (sales, the 300 SMVM lease rule, the 875 SMVM / 50-operation reviewer rule). A 15-question gap check against Res. 43/2024. Up to 3 client files. No exports. |
| **Solo** | Sole broker | 15 | 150 | 227,550 | 1 user. Client file with PEP and RePET checks and a risk rating with refresh dates. Operation log with the 300 SMVM lease tracker. Validated monthly report (RSM) export for SROMasivo. Annual report (RSA) helper. Alert register and ROS draft (never auto-filed). Manual generator with staff sign-off. Training log. Self-assessment (ITAER) builder for April 2028. One-click inspection pack. Rule updates. |
| **Inmobiliaria** | Agency with staff | 39 | 390 | 591,630 | Up to 5 users. Compliance officer and alternate roles. Audit log. WhatsApp link for clients to fill their own data and declarations. CSV import from the CRM. |
| **Red** | Franchise office or multi-branch firm | 79 | 790 | 1,198,430 | Up to 15 users and several branches. Group dashboard. Priority support. |
| **Contador / REI** | Accountant, internal auditor or external reviewer serving several brokers | 69 | 690 | 1,046,730 | Up to 15 broker clients, then USD 4 a month per extra client. Reviewer workspace with evidence requests and an REI / internal-audit checklist. ROS identities hidden from the reviewer. Can resell Solo at 25% off. |
| **Colegio** | Licensing body (white-label) | About USD 1.00-1.50 per member a month | Minimum about USD 6,000 a year, or a flat USD 10,000-25,000 | | Colegio branding. Members get Solo free or at a discount. Colegio sees adoption numbers only, never client or ROS data. |

Add-ons:
- **ITAER 2028 pack:** included in all annual plans. USD 99 one-off for monthly plans. This rewards annual prepayment before April 2028.
- **Done-with-you setup:** USD 150-250, delivered by a partner accountant, who keeps 70% (my estimate).
- **Archive plan:** USD 5 a month after cancellation, read-only. Res. 43/2024 requires records to be kept for 10 years ([Res. 43/2024](https://www.argentina.gob.ar/normativa/nacional/397424/actualizacion)).

Launch offer:
- The first 30 paying customers get 50% off the first year (Solo USD 75).
- Price lock for 24 months for anyone who prepays before 15 Mar 2027.

### What the buyer actually pays (card, in pesos)

| Plan | Net price | + 21% VAT | + 30% advance (recoverable) | On the card statement | Source |
|---|---|---|---|---|---|
| Solo monthly | 15.00 | 3.15 | 4.50 | about 22.65 | my calculation from [RG 4240](https://siap.blogdelcontador.com.ar/rubro_normativa/regimen-de-percepcion-iva-rg-4240/) and [RG 5617](https://fortunaweb.com.ar/blog/dolar-tarjeta-2026-como-se-calcula-el-costo-real-de-pagar-en-el-exterior) |
| Solo yearly | 150 | 31.50 | 45 | about 226.50 | same |
| Inmobiliaria yearly | 390 | 81.90 | 117 | about 589 | same |

Notes:
- **Whether the 30% applies to the net price or to the price plus VAT** was not confirmed (unverified). I used the net price.
- **Provincial gross-income tax** may add 3-5.5% in some provinces (see "Payments and tax friction").
- **A VAT-registered broker** (responsable inscripto) can credit the 21%. **A monotributista cannot.** For them the tool really costs about 21% more.
- **Paying the card bill in dollars avoids the 30%** ([Fortuna](https://fortunaweb.com.ar/blog/dolar-tarjeta-2026-como-se-calcula-el-costo-real-de-pagar-en-el-exterior)).
- **Show a "precio final estimado con impuestos" line on the pricing page.** Surprise taxes are a churn risk.

### Currency
- **Quote in USD and charge in USD by card.** Argentine software buyers are used to USD quotes (Tokko quotes USD; [DevelopArgentina](https://developargentina.com/blog/software-inmobiliaria-argentina-2026)). USD also protects against peso inflation.
- **Offer ARS only through a local collector** (dLocal Go or a reseller) when peso-only buyers become a real share (see "Payments").

## Go-to-market

### Selling seasons and deadlines

| When | Event | What to do | Source |
|---|---|---|---|
| 1st-15th of every month | Monthly report (RSM) due | Monthly WhatsApp and email reminder. Free RSM validator as a hook. | [Res. 43/2024 Art. 34](https://www.argentina.gob.ar/normativa/nacional/397424/actualizacion) |
| From 8 Nov 2026 | New risk-based regime for property registries (Res. UIF 93/2026) | News hook: "registries will see your deals." Brokers are not named in it; the cross-check is an inference | [Tributum](https://tributum.news/res-93-2026-uif-registros-de-la-propiedad-inmueble-prevencion-la-ft-fp-nuevo-regimen-basado-en-riesgos/); [01](01-law-and-requirements.md) |
| 2 Jan-15 Mar 2027, 2028, 2029 | Annual report (RSA) window | **Main yearly sales push.** "Do your RSA in 10 minutes." | [Res. 43/2024 Art. 34](https://www.argentina.gob.ar/normativa/nacional/397424/actualizacion) |
| Jan-Feb | Summer; fewer deeds (Buenos Aires city: 3,423 in Jan 2026 against 5,990 in Jun 2026) | Brokers have time for admin but spend less. Lead with the RSA deadline, not new features | [Zonaprop index, Jun 2026](https://www.zonaprop.com.ar/blog/wp-content/uploads/2026/07/INDEX_CABA_REPORTE_2026-06.pdf); [Zonaprop index, Feb 2026](https://www.zonaprop.com.ar/blog/wp-content/uploads/2026/03/INDEX_CABA_REPORTE_2026-02.pdf) (figures from search snippets) |
| Jul | Winter holidays | Low season; build content | my judgement |
| Feb-Apr 2028 | Second self-assessment (ITAER) due 30 Apr 2028 | **Biggest one-off spike.** Sell annual plans with the ITAER pack from mid-2027 | [Res. 43/2024 Art. 5, 36](https://www.argentina.gob.ar/normativa/nacional/397424/actualizacion) |
| About 28 Aug 2028 | Second external review (REI) due | Accountant and reviewer push from May 2028 | [01](01-law-and-requirements.md) (my calculation of 120 days) |
| Any time | UIF information requests (as in Dec 2025) or inspections | One-click inspection pack. Watch colegio news to react within 48 hours | [CUCICBA #185](https://colegioinmobiliario.org.ar/novedades/185) |

### Channels in priority order

1. **Accountants and external reviewers (contadores, REI).**
   - **Why first:** they already do the RSA, ITAER and REI paperwork for brokers. One accountant brings 5-15 brokers. 4,712 accountants were registered with the UIF in March 2024 ([MER](https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf)). 135 REIs were registered in 2022 ([UIF](https://www.argentina.gob.ar/sites/default/files/analisis_de_los_informes_tecnicosde_los_rei.pdf)).
   - **Offer:** a Contador seat, a 25% wholesale discount on Solo, and 20% of first-year revenue on referrals.
   - **Reach:** paid or free talks through the CPCE councils, Blog del Contador and contadoresenred ([Blog del Contador course](https://siap.blogdelcontador.com.ar/?p=83511); [contadoresenred](https://contadoresenred.com/uif-guia-para-la-elaboracion-del-informe-tecnico-de-autoevaluacion-de-riesgos-vto-30-4-2026/)), and LinkedIn.
   - **Watch out:** an REI must be independent of the broker it reviews (Res. 67/2017 as amended; [01](01-law-and-requirements.md)). An REI should not resell the tool to a firm they then review (my reading; unverified).
2. **Provincial colegios outside Buenos Aires city.**
   - **Why:** brokers must belong to one. They run UIF talks, and they list member benefits. The Córdoba CPI has more than 3,800 brokers ([Infonegocios](https://infonegocios.info/nota-principal/nace-un-nuevo-marketplace-pero-de-propiedades-de-que-se-trata-cordobaprop-la-app-que-busca-reunir-toda-la-oferta-de-la-provincia)) and already partners with a vendor ([Locativa](https://www.locativa.com.ar/novedades/locativa-y-el-colegio-de-corredores-inmobiliarios-de-cordoba-renovaron-su-convenio-de-colaboracion/)). I found no colegio outside Buenos Aires city with a UIF software deal (searches in Spanish; unverified).
   - **Step 1:** a free "beneficio al matriculado" listing at 20-30% off.
   - **Step 2:** a white-label deal once 20+ of their members are paying.
   - **Risk:** the Buenos Aires city colegio's president also heads COFECI and could push AMLify nationally ([CUCICBA #210](https://colegioinmobiliario.org.ar/novedades/210)). Move fast in Córdoba and Santa Fe.
3. **Self-serve direct.**
   - The free "Chequeo UIF", a Spanish SEO hub (RSM, RSA, ITAER, the 300 SMVM lease rule, "¿estoy obligado?") and an RSM template validator.
   - WhatsApp-first support. Meta and Instagram ads aimed at brokers; Argentine Meta clicks cost a median of about USD 0.11 ([Superads](https://www.superads.ai/facebook-ads-costs/cpc-cost-per-click/argentina)).
   - **Cold email to public registers.** Colegio registers publish broker emails ([CUCICBA guide](https://colegioinmobiliario.org.ar/servicios/guia-de-matriculados)). Law 25.326 allows marketing from public sources with an opt-out (unverified; check with the lawyer before use).
4. **CRM vendors.**
   - Tokko Broker (QuintoAndar, via Navent) ([Privsource](https://www.privsource.com/acquisitions/deal/quintoandar-acquires-navent-s-real-estate-operations-to-strengthen-latin-american-offering-krS5VB)), Xintel ("más de 700 sitios"; [Xintel](https://www.xintel.com.ar/)), KiteProp and InmoSuite.
   - **Start:** a CSV import of their exports.
   - **After 50 customers:** pitch an API integration and a revenue share of 20-30%.
5. **Franchise networks other than RE/MAX** (RE/MAX offices already use AMLify; [amlify.net](https://amlify.net/)). Pitch the Red plan to head offices (unverified which networks have central compliance).
6. **Media and influencers:**
   - Reporte Inmobiliario ([link](https://www.reporteinmobiliario.com/article2940-norma-uif-obligatoria-para-inmobiliarios-como-evitar-sanciones.html));
   - prevenciondelavado.com ([link](https://www.prevenciondelavado.com/portal/nota_gratuita.aspx?codigo=138377&cd_producto=LYNTO&nm_origen=Home));
   - ex-UIF speakers who already teach at colegios ([CUCICBA #215](https://colegioinmobiliario.org.ar/novedades/215)).

### Sales motion
- **Sole brokers and small agencies:** fully self-serve. A 14-day trial, a card at checkout, and setup in under 15 minutes (import clients, answer 10 questions, get the manual). WhatsApp support in Spanish from a part-time Argentine contractor from month 4.
- **Agencies and franchise offices:** a 20-minute video demo booked from the site, then a trial.
- **Accountants:** a partner onboarding call and a sandbox with 3 demo brokers.
- **Colegios:** founder-led. A deck, a pilot with 20 members, then a yearly contract. Expect 3-9 months to close (my estimate).
- **Retention levers:**
  - monthly RSM reminders;
  - the risk-based refresh calendar;
  - the April 2028 ITAER built up from stored data (switching loses it);
  - the 10-year archive.

## 90-day launch plan

Day 1 is Monday 12 Oct 2026. The founder builds with Claude Code and several AI agents in parallel. The MVP is ready in about 3 weeks and is sellable in 6-8 weeks, after the legal content, a security test and pilots.

| Dates | Product | Market and sales | Legal, payments, admin |
|---|---|---|---|
| **12-18 Oct** (week 1) | Agents scaffold the app: auth, multi-tenant data model, client file, operation log | Book 20 broker calls (10 outside Buenos Aires city) and 5 accountant calls through colegio registers and LinkedIn. Ask what they filed in April and August 2026 and who did it | Brief an Argentine AML lawyer (ex-UIF if possible) on templates and terms. Set up Stripe Billing in USD on the foreign company |
| **19-25 Oct** (week 2) | Risk rating, PEP/RePET checks, RSM export to the SROMasivo format with the UIF checks, 300 SMVM lease tracker | Calls continue. Publish the "¿Estoy obligado?" checker and the first 3 SEO articles | Lawyer drafts the terms, DPA and disclaimers (Spanish) |
| **26 Oct-1 Nov** (week 3) | Alerts and unusual-operations register, ROS draft, manual generator, training log. **MVP done** | Pick 10 pilot brokers and 3 pilot accountants | Choose hosting in an adequate jurisdiction (EU) for data-transfer rules |
| **2-8 Nov** (week 4) | Pilots onboard (free). Fix import pain. RSA helper | Press note on Res. 93/2026 (registry regime from 8 Nov) | Book the security test |
| **9-22 Nov** (weeks 5-6) | Inspection pack, Contador workspace, WhatsApp client link | 2 webinars: one with an accountant, one with an ex-UIF speaker. Approach the Córdoba CPI and Rosario COCIR with a benefit offer | **External penetration test** and fixes. The lawyer reviews all templates against Res. 43/2024 and the current PEP and terrorist-financing rules |
| **23 Nov-6 Dec** (weeks 7-8) | Security fixes. Public pricing page with "precio final con impuestos" | **Paid launch on 1 Dec** at the 50%-off pilot price. Convert pilots. Target: 10 paying | Terms and DPA live. Insurance quote (tech E&O and cyber) |
| **7-20 Dec** | Annual plans with the ITAER pack | Colegio meetings (one trip to Buenos Aires, Córdoba and Rosario if pilots convert). Accountant partner programme live | Check whether card payments show VAT perception (test with 3 Argentine cards) |
| **21 Dec-3 Jan** | RSA module polish | Holiday slowdown. Schedule January emails | Year-end bookkeeping in the home country |
| **4-10 Jan 2027** (days 85-90) | RSA export | **RSA campaign starts** (window opened 2 Jan). Target by day 90: 25 paying accounts, 5 accountant partners, 1 colegio benefit listing | Review: go, adjust or kill (see "Milestones") |

Day-90 targets (base case): 25 paying broker accounts, 5 accountant seats or partners, 1 colegio benefit listing, and fewer than 5% failed card payments.

## 12-month marketing plan and budget

Year 1 runs from Nov 2026 to Oct 2027. Budget: **about USD 12,000**, plus partner commissions (20% of first-year revenue on referred deals) and a part-time Argentine support contractor (in costs, not marketing).

| Quarter | Focus | Main actions | Spend (USD) |
|---|---|---|---|
| Q1 Nov 2026-Jan 2027 | Pilots, launch, RSA window | Free checker and RSM validator; 6 SEO articles; 2 webinars; launch offer; first colegio benefit listing; one trip to Argentina | 4,000 |
| Q2 Feb-Apr 2027 | RSA deadline (15 Mar), first referrals | Meta and Instagram ads in the RSA window; accountant partner push through CPCE talks; case studies from pilots | 3,000 |
| Q3 May-Jul 2027 | Colegio deals, CRM integration | Stands or talks at 1-2 provincial colegio events; CSV import guides for Tokko and Xintel; content during the winter low season | 2,500 |
| Q4 Aug-Oct 2027 | Pre-sell the 2028 ITAER | "ITAER 2028 included" annual-plan campaign; renewal campaign for pilots; second webinar series | 2,500 |
| **Total** | | | **12,000** |

Budget by line:

| Line | USD | Note |
|---|---|---|
| Ads (Meta, Instagram, Google Search, LinkedIn) | 3,600 | About USD 300 a month, weighted to Jan-Mar. Meta clicks are cheap in Argentina, median about USD 0.11 ([Superads](https://www.superads.ai/facebook-ads-costs/cpc-cost-per-click/argentina)) |
| Content and SEO (Argentine freelance writer, design) | 1,500 | About 20 articles and templates |
| Webinars (speaker fees for an ex-UIF or AML lawyer) | 1,600 | 4 sessions at about USD 400 (my estimate) |
| Colegio events, sponsorships and benefit listings | 2,500 | 2 provincial events (unverified prices) |
| Travel to Argentina | 2,000 | One 10-day trip: Buenos Aires, Córdoba, Rosario |
| Tools (email, WhatsApp Business, CRM, webinar) | 600 | |
| Contingency | 200 | |

KPIs to track monthly:
- checker completions;
- trial starts;
- trial-to-paid rate (target 20%);
- paid accounts by channel;
- monthly churn (target under 2.5%);
- failed card payments;
- cost per paid account (target under USD 150).

## Payments and tax friction

### Short answer
- **Sell from the founder's foreign company. Charge cards in USD through Stripe (or Paddle).** Argentine Visa and Mastercard cards pay foreign SaaS every day. The card issuer adds the local taxes on the buyer's statement. The foreign seller does not register for Argentine VAT.
- **The friction sits with the buyer, not with you.** A USD 15 plan paid in pesos shows about USD 22.65. The 30% part is recoverable later. A broker who pays the card bill in his own dollars avoids it.
- **Add a local peso route later** (dLocal Go or a reseller) for buyers whose cards fail or who want to pay in pesos.

### Can Argentine cards pay a foreign online seller?
- **Yes.** The tax rules assume it. ARCA makes local "entidades que administran pagos al exterior" (card issuers and payment aggregators) collect VAT on digital services bought from abroad ([Blog del Contador, RG 4240](https://siap.blogdelcontador.com.ar/rubro_normativa/regimen-de-percepcion-iva-rg-4240/); [RG 4240 in the Boletín Oficial](https://www.boletinoficial.gob.ar/detalleAviso/primera/183569/20180514)).
- **ARCA's list of operations hit by the 30% advance** includes "pago de servicios prestados por no residentes (streaming, software, suscripciones) cancelados con tarjeta" ([Fortuna, 29 Jul 2026, updated 22 Sep 2026](https://fortunaweb.com.ar/blog/dolar-tarjeta-2026-como-se-calcula-el-costo-real-de-pagar-en-el-exterior)). Paying for software from abroad by card is normal and lawful.
- **Limits on cash advances abroad were removed** in April 2026 ([Allende & Brea on Com. A 8417](https://allende.com/bancario/el-banco-central-flexibiliza-el-regimen-cambiario-para-exportaciones-transferencias-en-moneda-extranjera-y-pagos-financieros-04-14-2026/)). This signals a looser FX regime, but it says nothing directly about SaaS.
- **Decline risk.** Some issuers flag first-time foreign online charges. I found no data on decline rates (unverified). Test with real Argentine cards in the pilots and track failed payments.

### Taxes the buyer pays on a card payment (October 2026)

| Item | Rate | Who collects | Recoverable? | Source |
|---|---|---|---|---|
| VAT (IVA) on digital services from abroad | 21% | The card issuer or aggregator, as perception agent, when the buyer is not VAT-registered. A VAT-registered buyer self-assesses | A VAT-registered broker (responsable inscripto) credits it. A monotributista or consumer cannot; it is a cost | [Blog del Contador](https://siap.blogdelcontador.com.ar/rubro_normativa/regimen-de-percepcion-iva-rg-4240/); [RG 4240](https://www.boletinoficial.gob.ar/detalleAviso/primera/183569/20180514) |
| Income-tax or wealth-tax advance (RG 5617/2024) | 30% of the part paid in pesos | The card issuer | Credited against income or wealth tax, or refunded from 1 January of the next year. Not charged on the part paid with own dollars | [Fortuna 2026](https://fortunaweb.com.ar/blog/dolar-tarjeta-2026-como-se-calcula-el-costo-real-de-pagar-en-el-exterior); [RG 5617 text](https://www.consejosalta.org.ar/wp-content/uploads/ARCA-5617.pdf) |
| Provincial gross-income tax (IIBB) on digital services from abroad | Varies. Santa Fe: 4.5% for most digital services from 1 Jul 2025. Other provinces up to 5.5% | Payment intermediaries | Generally a cost | [Blog del Contador on Santa Fe](https://blogdelcontador.com.ar/news-45948-santa-fe-aplicara-ingresos-brutos-a-servicios-digitales-del-exterior-desde-el-1-de-julio); [iProfesional](https://www.iprofesional.com/impuestos/431104-que-provincias-cobran-ingresos-brutos-por-netflix-y-spotify). Buenos Aires city and province rates not confirmed (unverified) |
| Impuesto PAIS | 0% (ended December 2024) | | | [Infoviajera, Dec 2024](https://www.infoviajera.com/2024/12/nuevo-dolar-tarjeta-el-gobierno-creo-la-percepcion-que-reemplaza-a-la-que-cae-en-diciembre/) |

Notes:
- **Listed providers.** RG 4240 works from a list of foreign digital-service providers. How intermediaries treat a small provider that is not on the list is not settled here (unverified). Test it with pilot cards. Either way, the seller's duty does not change.
- **Many brokers are monotributistas** (simplified regime) and cannot recover VAT (the share is unverified; most Buenos Aires city brokers are one-person offices, see [02](02-market-and-competition.md)).

### Does the foreign seller have to register for Argentine VAT?
- **No.** Argentina taxes digital services from abroad on the buyer side. The card issuer perceives the tax, or the VAT-registered buyer self-assesses it (Law 27.430, Title II; [RG 4240](https://www.boletinoficial.gob.ar/detalleAviso/primera/183569/20180514); [Blog del Contador](https://siap.blogdelcontador.com.ar/categoria_normativa/servicios-digitales-prestados-por-sujetos-del-exterior/)). There is no foreign-seller registration like the EU's OSS. I found no 2026 rule that changes this (unverified).
- **Do not add Argentine VAT on your own invoice.** Invoice the net price.
- **If you use Paddle, check its Argentine tax line.** Paddle lists Argentina with ARS and "inclusive" tax display ([Paddle supported countries](https://developer.paddle.com/concepts/sell/supported-countries-locales)). Make sure the buyer is not charged VAT twice, once by Paddle and once by the card issuer (unverified risk).

### Withholding tax on payments to non-residents
- **The rule.** An Argentine payer who pays a foreign beneficiary withholds income tax at 35% on a presumed net income. For most services and digital services the presumption is 90%, so the effective rate is **31.5%**. If the SaaS counts as technical assistance registered with INPI, the presumption can be 60%, which gives 21% ([Garrigues on SaaS](https://www.garrigues.com/es_ES/noticia/software-service-saas-desafio-alta-complejidad-tributaria-mundo-digital-e-interconectado); [FACPCE CEAT note](https://www.facpce.org.ar/wp-content/uploads/2020/08/REUNION-CEAT-4.8.2020-BENEFICIARIOS-DEL-EXTERIOR.pdf)).
- **In practice it does not bite on card payments.** Card issuers collect VAT and the 30% advance, not this withholding. A sole broker or monotributista paying by card will not withhold. I found no source that covers small card payments (unverified).
- **It can bite on large invoices paid by wire.** A colegio or a franchise head office paying a white-label invoice by transfer may withhold 31.5%, or ask for a gross-up. Options:
  - **use a tax treaty.** Argentina has treaties with Germany, Spain, France, Italy, the Netherlands, the UK, Switzerland, Brazil, Chile, Mexico, the UAE and others. Austria's applies from 2027 ([Ámbito, Jun 2026](https://www.ambito.com/informacion-general/arca-simplifico-un-tramite-clave-acceder-beneficios-impositivos-internacionales-n6284775); [argentina.gob.ar list](https://www.argentina.gob.ar/node/78019); [ARCA list](https://www.arca.gob.ar/convenios-internacionales/paises/)). Under a treaty, business profits without a permanent establishment are usually taxed only at home, though some treaties treat software fees as royalties (check the founder's treaty). The United States has no income-tax treaty with Argentina (not in the lists above; unverified);
  - let the institution pay by card through Stripe Invoicing;
  - or invoice those deals through a local reseller or company (see "Company setup").

### Stripe
- **Argentina is not a Stripe merchant country,** but a Stripe account in the founder's country can charge Argentine cards. ARS is a supported presentment currency (minimum charge ARS 0.50) ([Stripe currencies](https://docs.stripe.com/currencies)).
- **Fees on a US account:** 2.9% + USD 0.30 per domestic card charge, plus 1.5% for international cards, plus 1% when currency conversion is needed. Stripe Billing adds 0.7% of billing volume. Disputes cost USD 15 ([Stripe pricing](https://stripe.com/pricing)).
  - On a USD 15 monthly charge, in USD: about USD 1.07, or 7.1%.
  - On a USD 150 annual charge: about USD 7.95, or 5.3% (my calculation).
  - Fees differ for accounts in other countries.
- **Charge in USD, not ARS.** ARS prices would need constant changes and would add the 1% conversion fee.

### Merchant of record (MoR)
- **Paddle:** supports Argentina, with ARS listed ([Paddle supported countries](https://developer.paddle.com/concepts/sell/supported-countries-locales)). It charges 5% + USD 0.50 per transaction, with no monthly fee. Products under USD 10 can get custom pricing ([Paddle pricing](https://www.paddle.com/pricing)).
  - On USD 15 that is 8.3%; on USD 150 it is 5.3%. That is the same as Stripe on annual plans.
- **Lemon Squeezy:** owned by Stripe since 2024. It charges 5% + USD 0.50, plus a reported 1.5% on international transactions ([Dodo Payments review](https://dodopayments.com/blogs/lemonsqueezy-review); [TechCrunch](https://techcrunch.com/?p=2815886)). Stripe's own MoR, Managed Payments, is reported at 3.5% on top of standard Stripe fees ([Dodo Payments](https://dodopayments.com/blogs/stripe-managed-payments-fees-explained)). These are third-party sources (unverified).
- **What an MoR buys you here.** Argentina needs no seller VAT registration, so an MoR adds little for Argentina alone. It helps with VAT in the founder's own region and in later markets, and with chargebacks.
- **Recommendation:** Stripe Billing, priced in USD, with annual plans pushed hard. Switch to Paddle only if the founder's home VAT work becomes a burden.

### Bank transfers
- **Small brokers rarely wire money abroad for a USD 150 tool.** It is slow and costly.
- **Individuals.** From 10 April 2026 individuals can move dollars from local accounts to their own accounts abroad. The bank must register the operation and take a 90-day sworn statement ([Allende & Brea](https://allende.com/bancario/el-banco-central-flexibiliza-el-regimen-cambiario-para-exportaciones-transferencias-en-moneda-extranjera-y-pagos-financieros-04-14-2026/)). Paying a third party abroad from a personal account was not confirmed (unverified).
- **Companies and colegios.** Access to the official FX market for some foreign services has needed prior approval or waiting periods in the past (Com. A 7746/2023, which covered legal, accounting, management, advertising and other services; [Boletín Oficial, Apr 2023](https://www.boletinoficial.gob.ar/detalleAviso/primera/285227/20230426)). I could not confirm the 2026 rule for software (unverified). Expect paperwork and delays on a colegio's wire.
- **Practical route for institutions:** a Stripe invoice paid by corporate card, or a local reseller invoicing in pesos.

### Local collection options (for later)
- **dLocal Go** lets small foreign merchants take Argentine payments in pesos and get paid in their home currency. Its Argentina fees are 3.49% for cards, 2.99% for cash and 1.99% for bank transfer, plus 21% local tax on the fee ([dLocal Go coverage](https://dlocalgo.com/en/coverage)). It supports subscriptions from weekly to yearly ([dLocal Go help](https://helpcenter.dlocalgo.com/en/articles/7925879-how-do-i-create-a-subscription)). Whether the 30% advance applies to buyers on this route is unclear (unverified). Add it if card failures pass 10% or buyers ask for peso payment.
- **Mercado Pago** is the dominant local wallet. It was not checked for foreign merchants in this pass (unverified).
- **A local reseller** (a partner accounting firm) can buy licences wholesale and invoice in pesos with VAT. This is the cheapest bridge before a local company.

## Company setup (needed or not, costs)

### Recommendation
- **No Argentine company at launch.** Sell from the founder's existing foreign company, by card. Argentina does not require a foreign digital-service seller to register for VAT (see above). Software for UIF compliance needs no licence (I found no such rule; unverified).
- **Local help without a company.** Argentine contractors (sales, support, content) can invoice the foreign company as exporters of services ("factura E") under the monotributo (common practice; unverified for each case).
- **Open a local company only if one of these happens:**
  1. colegio, franchise or accountant deals worth more than about USD 20,000 a year where the buyer insists on a local invoice in pesos, or would withhold 31.5%;
  2. you hire Argentine employees rather than contractors;
  3. you want to collect in pesos at scale (Mercado Pago, local bank transfer).
- **The cheaper middle path is a local reseller.**
- In the base model, trigger 1 could arrive in year 2 or 3 (colegio deals). Budget the company then, not now.

### If a company is needed: SAS or SRL

| Item | SAS (simplified company) | SRL (limited company) | Source |
|---|---|---|---|
| Minimum capital | 2 SMVM = ARS 767,600 (about USD 506) at the Sep 2026 SMVM of ARS 383,800. At least 25% is paid in at formation, the rest within 2 years | No legal minimum; must be adequate for the business | [Ley 27.349 art. 40-41](https://servicios.infoleg.gob.ar/infolegInternet/anexos/270000-274999/273567/texact.htm) (not re-read in this pass); SMVM from [Canal 26](https://www.canal26.com/economia/2026/09/02/asi-quedo-el-aumento-del-salario-minimo-vital-y-movil-cuanto-se-cobrara-entre-septiembre-de-2026-y-abril-de-2027/) |
| Official fees, Buenos Aires city, digital route | IGJ fee about ARS 8,438 (USD 6). No notary and no edict in the city | Edict ARS 20,000-50,000, plus IGJ fees | [Cuánto me cuesta, Apr 2026](https://cuantomecuesta.com/ar/crear-empresa-sas/) (aggregator; unverified) |
| Buenos Aires province, in person | Signature certification ARS 80,850, plus a digital-signature token at ARS 15,000-40,000 | Notary or law-firm fees ARS 100,000-200,000 | same |
| With a lawyer, remotely | About USD 300-800 all-in for a SAS with local owners | About USD 800-2,000, including the notary | [Argentina Visa Law guide](https://argentinavisalaw.com/guides/company-formation-argentina) (search snippet; unverified) |
| Time | About 1-2 weeks in practice for a SAS | About 4-8 weeks | [VLO Law Firm, Jun 2026](https://vlolawfirm.com/guides/cost-of-company-formation-in-argentina-complete-breakdown) |

### Extra steps when the owner is foreign
- **A foreign company as shareholder must register with the IGJ under art. 123 of the Companies Law.** Since 27 May 2026, IGJ General Resolution 4/2026 has made this simpler. The filing needs ([abogados.com.ar](https://abogados.com.ar/novedades-igj-resolucion-042026-simplificacion-sociedades-extranjeras/39242); [Colegio de Escribanos report](https://www.colegio-escribanos.org.ar/noticias/2026_06_10_Informe-Res-Gral-IGJ-4-26.pdf)):
  - a certificate of good standing no older than 6 months;
  - the articles and their amendments;
  - a board resolution to register and to appoint a local representative;
  - the representative's acceptance, with a special and an electronic domicile;
  - PEP and beneficial-owner sworn statements.
- **Apostilled digital documents printed on paper are now accepted** ([Blog del Contador](https://siap.blogdelcontador.com.ar/?p=84907)).
- **The two filings can go in together.** The local company and the art. 123 registration can be filed at the same time. The local company then waits until the foreign one is complete ([Colegio de Escribanos](https://www.colegio-escribanos.org.ar/noticias/2026_06_10_Informe-Res-Gral-IGJ-4-26.pdf)).
- **If the founder holds the shares personally,** he needs an Argentine tax ID (CUIT or CDI). He must appear in person at ARCA or act through a local representative ([VLO Law Firm](https://vlolawfirm.com/guides/cost-of-company-formation-in-argentina-complete-breakdown)).
- **Bank account:** expect several weeks to over a month, with enhanced checks for foreign-owned companies ([VLO Law Firm](https://vlolawfirm.com/guides/cost-of-company-formation-in-argentina-complete-breakdown)).
- **Estimated cost with a foreign parent, done remotely through a lawyer:** about USD 2,000-4,000. That covers the SAS, the art. 123 registration, apostilles, translations, the first months of a local representative, and capital of about USD 130 paid in (my estimate, unverified).
- **In person (founder flies in):** official fees are only tens of dollars in Buenos Aires city. The time and the foreign-parent paperwork still need a local professional, so the saving is mostly the lawyer's fee. It costs a trip of about USD 1,500-2,500 (my estimate).

### Ongoing costs of a local company
| Item | Cost | Source |
|---|---|---|
| Accountant (monthly VAT, gross-income tax, payroll if any, annual statements) | ARS 120,000-250,000 a month (about USD 80-165) for a small SAS in Buenos Aires city; other guides say ARS 80,000-200,000 or more | Commercial guides found by search: [DevelopArgentina guide](https://developargentina.com/guias/abrir-empresa-argentina); [yo-facturo](https://yo-facturo.com/blog/costos-de-abrir-una-empresa-en-argentina/) (unverified) |
| Bank account and invoicing software | Small, in pesos | same |
| Bank debit and credit tax ("impuesto al cheque") | 0.6% on debits and credits; part can be credited against income tax | same (unverified) |
| VAT on local sales | 21%, collected from buyers; credit for VAT paid | [RG 4240 context](https://siap.blogdelcontador.com.ar/rubro_normativa/regimen-de-percepcion-iva-rg-4240/) |
| Provincial gross-income tax (IIBB) | Several % of turnover, by province and activity | [VLO Law Firm](https://vlolawfirm.com/guides/cost-of-company-formation-in-argentina-complete-breakdown) (no rate given; unverified) |
| Corporate income tax | Progressive 25-35% scale (Law 27.630) | (unverified for 2026 brackets) |
| Local representative for the foreign parent (art. 123) | Recurring fee, not quantified | [VLO Law Firm](https://vlolawfirm.com/guides/cost-of-company-formation-in-argentina-complete-breakdown) |
| **Total fixed** | **About USD 2,500-4,000 a year before taxes** | my estimate |

## Contracts and liability

**Customer terms (Spanish, click-through):**
- **The tool is not legal advice.** The broker and the compliance officer stay responsible for their duties under Law 25.246 and Res. 43/2024. The software organises evidence and drafts documents. The broker reviews, signs and files.
- **ROS and terrorist-financing reports are never filed automatically.** The tool drafts them, the broker files them in SRO+ ([01](01-law-and-requirements.md)).
- **Tipping-off.** The law forbids revealing a suspicious report to the client or third parties (Law 25.246 art. 21(c); [Infoleg](https://servicios.infoleg.gob.ar/infolegInternet/anexos/60000-64999/62977/texact.htm)). So:
  - ROS logs are hidden from reviewer seats, colegios and resellers;
  - staff access to them is role-based and logged.
- **Liability cap:** fees paid in the last 12 months. Exclude fines and indirect loss. Argentine law voids clauses that limit liability in advance for wilful misconduct, or that are abusive (Civil and Commercial Code art. 1743; not re-read in this pass, unverified). Do not try to exclude those.
- **Governing law and forum:** the founder's company's law for the B2B terms. Argentine consumer law protects final consumers; a broker buying for his business is probably not one, but a sole broker could argue it (unverified). Add an easy online cancel button anyway. It is good practice and avoids that argument.
- **Rule-change commitment:** update templates and rules within 30 days of a new UIF resolution. Keep deadlines and thresholds as data (SMVM, módulo), as the law agent recommends ([01](01-law-and-requirements.md)).
- **Records and exit:** the broker can export everything at any time (CSV, PDF and documents). The read-only archive plan covers the 10-year retention duty ([Res. 43/2024 Art. 15](https://www.argentina.gob.ar/normativa/nacional/397424/actualizacion)).

**Data protection (Law 25.326):**
- The broker is the data controller. The vendor is the processor (encargado). Sign a processing agreement (DPA) inside the terms.
- **International transfer.** Law 25.326 bars transfers to countries without adequate protection, unless an exception applies. The exceptions include consent, model contract clauses (Disposición 60-E/2016, amended by Res. 34/2019), and the Ibero-American network's clauses (AAIP Res. 198/2023) ([argentina.gob.ar, transferencias internacionales](https://www.argentina.gob.ar/transferencias-internacionales); [abogados.com.ar](https://abogados.com.ar/nueva-regulacion-sobre-transferencias-internacionales-de-datos-personales/33745)).
  - **Host in the EU** (an adequate jurisdiction) and add the AAIP model clauses for any sub-processor in a non-adequate country, such as US-based email or AI providers.
  - Whether the US has been recognised as adequate is unclear: a 2026 request for information in Congress asks about it ([HCDN](https://rest.hcdn.gob.ar/web/tramites-parlamentarios/render/adjunto/69b17431db5ad.pdf)) (unverified).
- **Database registration** with the AAIP is the controller's duty (the broker's). Provide a ready text for it (unverified detail).
- **DNI images and PEP data** need encryption, access logs and deletion after the retention period.

**Partner contracts:**
- **Accountant referral and reseller:** 20% of first-year revenue on referrals, or a 25% wholesale discount for resale. Confidentiality. A clause that the partner does not resell to firms it reviews as REI (independence).
- **Colegio white-label:**
  - the members own their data, and the colegio sees adoption counts only;
  - 12-month term with renewal;
  - a price per member with a minimum;
  - the colegio may pay by card or through a local reseller.

**Legal and insurance budget (my estimates, unverified):**
- Argentine AML lawyer for terms, DPA, disclaimers and template review: about USD 2,500 in month 1 and USD 1,500 in month 2, then USD 150 a month on retainer, plus about USD 800 a year for a full template refresh.
- Tech errors-and-omissions and cyber insurance from the home country: about USD 1,200 a year.
- External penetration test: about USD 3,000 before launch, then USD 2,500 a year.

## Financial model

### Assumptions

| Assumption | Low | Base | High | Basis |
|---|---|---|---|---|
| Buyer pool | About 10,000 UIF-registered brokers; 2,500-5,000 close sales most months | same | same | [02](02-market-and-competition.md); [MER](https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf) |
| New broker accounts, years 1 / 2 / 3 | 40 / 60 / 60 | 90 / 130 / 140 | 200 / 280 / 300 | My estimate. Base year 1 is about twice AMLify's reported 40+ clients ([amlify.net](https://amlify.net/)) |
| Monthly churn (broker accounts) | 3.0% | 2.0% | 1.5% | My estimate (about 31% / 22% / 17% a year) |
| Blended revenue per broker account a month (Solo, Inmobiliaria and Red mix, after annual discounts), years 1 / 2 / 3 | 17 / 18 / 19 | 21 / 23 / 25 | 23 / 25 / 27 | About 65% Solo, 30% Inmobiliaria, 5% Red; small USD price rises |
| New accountant seats, years 1 / 2 / 3; revenue a seat a month; monthly churn | 4 / 6 / 6; USD 55; 2% | 10 / 15 / 18; USD 60; 1.5% | 18 / 30 / 35; USD 65; 1% | My estimate |
| Colegio white-label deals | none | USD 8,000 a year from month 13; USD 10,000 a year from month 25 | USD 12,000 from month 10; USD 20,000 from month 18; USD 20,000 from month 28 | My estimate |
| Seasonality of new sales | Nov 0.8, Dec 0.6, Jan 0.9, Feb 1.2, Mar 1.4, Apr 1.0, May 1.0, Jun 0.9, Jul 0.8, Aug-Oct 1.0. Feb-Apr 2028 x1.5 (ITAER); Jul-Aug 2028 x1.2 (REI) | same | same | Deadlines above |
| Build | Founder builds with Claude Code and agents. No developer cost. AI tools USD 500 a month in months 1-3, then USD 250 | same | same | My estimate |
| Hosting and screening data | USD 130 / 250 / 400 a month in years 1 / 2 / 3 | same | same | EU cloud; free UN, RePET and OFAC lists; optional paid PEP API |
| Legal, security, insurance, admin | Lawyer USD 2,500 + 1,500 in months 1-2, then 150 a month, plus 800 in months 13 and 25. Pen test USD 3,000 in month 2, 2,500 in months 14 and 26. Insurance and admin USD 200 a month | same | same | My estimates above |
| Marketing, years 1 / 2 / 3 | 8,000 / 9,000 / 9,000 | 12,000 / 15,000 / 18,000 | 18,000 / 24,000 / 30,000 | Plan above |
| Argentine support and sales contractor (monthly) | from month 13: 400, then 600 | from month 4: 600 / 1,000 / 1,500 | from month 4: 800 / 1,500 / 2,500 | My estimate (unverified rates) |
| Partner commissions | 20% on the share of broker revenue from partners: 25% / 35% / 45% | | | |
| Payment fees | 6% of revenue | same | same | Stripe, mix of monthly and annual ([Stripe pricing](https://stripe.com/pricing)) |
| Founder pay | None in the main tables. A variant pays USD 3,000 a month from month 13 | | | |
| Taxes | No Argentine company. Profit tax is paid in the founder's country (not modelled) | | | |

Month 1 is November 2026; month 36 is October 2029. Revenue equals cash, because the model assumes monthly billing. Annual prepayment would bring cash forward and cut the peak cash need. The script is in the session scratchpad, not in the repo.

### Base case by quarter (no founder pay)

| Quarter | New brokers | Churned | Broker accounts (end) | Accountant seats (end) | Revenue | ARR run-rate (end) | Costs | Net | Cumulative cash |
|---|---|---|---|---|---|---|---|---|---|
| Q1 Nov 26-Jan 27 | 12 | 0 | 12 | 2 | 528 | 4,424 | 12,697 | -12,169 | -12,169 |
| Q2 Feb 27-Apr 27 | 30 | 1 | 41 | 4 | 2,667 | 13,518 | 7,292 | -4,625 | -16,794 |
| Q3 May 27-Jul 27 | 22 | 3 | 61 | 7 | 4,544 | 20,253 | 7,504 | -2,960 | -19,754 |
| Q4 Aug 27-Oct 27 | 25 | 4 | 82 | 9 | 6,236 | 27,243 | 7,694 | -1,458 | -21,212 |
| Q5 Nov 27-Jan 28 | 22 | 5 | 98 | 13 | 10,439 | 44,124 | 13,672 | -3,234 | -24,445 |
| Q6 Feb 28-Apr 28 | 51 | 7 | 142 | 16 | 13,522 | 58,575 | 10,733 | 2,789 | -21,657 |
| Q7 May 28-Jul 28 | 27 | 9 | 160 | 19 | 15,853 | 65,732 | 10,998 | 4,855 | -16,802 |
| Q8 Aug 28-Oct 28 | 30 | 10 | 181 | 22 | 17,756 | 73,360 | 11,208 | 6,548 | -10,254 |
| Q9 Nov 28-Jan 29 | 28 | 11 | 197 | 25 | 23,148 | 95,180 | 17,693 | 5,455 | -4,799 |
| Q10 Feb 29-Apr 29 | 43 | 13 | 228 | 28 | 25,815 | 106,855 | 14,697 | 11,118 | 6,318 |
| Q11 May 29-Jul 29 | 33 | 14 | 247 | 32 | 28,088 | 114,685 | 14,952 | 13,136 | 19,454 |
| Q12 Aug 29-Oct 29 | 36 | 15 | 268 | 35 | 30,094 | 123,165 | 15,174 | 14,919 | 34,373 |

- The cost jumps in Q5 and Q9 come from the yearly security test, the template refresh and a higher support budget.
- **Year-1 base costs: USD 35,187.** By line:
  - marketing 12,000;
  - support contractor 5,400;
  - legal 5,500;
  - AI tools 3,750;
  - pen test 3,000;
  - insurance and admin 2,400;
  - hosting and data 1,560;
  - payment fees 839;
  - commissions 738.
- **Revenue mix in year 3:** brokers USD 68,400, accountants USD 20,700, colegios USD 18,000.

### Low case by quarter (no founder pay)

| Quarter | Broker accounts (end) | Accountant seats (end) | ARR run-rate (end) | Costs | Net | Cumulative cash |
|---|---|---|---|---|---|---|
| Q1 Nov 26-Jan 27 | 5 | 1 | 1,595 | 11,658 | -11,467 | -11,467 |
| Q2 Feb 27-Apr 27 | 18 | 2 | 4,810 | 4,283 | -3,331 | -14,798 |
| Q3 May 27-Jul 27 | 26 | 3 | 7,103 | 4,346 | -2,745 | -17,543 |
| Q4 Aug 27-Oct 27 | 35 | 4 | 9,439 | 4,401 | -2,232 | -19,776 |
| Q5 Nov 27-Jan 28 | 41 | 5 | 12,136 | 9,575 | -6,736 | -26,512 |
| Q6 Feb 28-Apr 28 | 60 | 6 | 17,065 | 6,381 | -2,493 | -29,005 |
| Q7 May 28-Jul 28 | 67 | 7 | 19,272 | 6,454 | -1,814 | -30,819 |
| Q8 Aug 28-Oct 28 | 75 | 8 | 21,613 | 6,510 | -1,282 | -32,101 |
| Q9 Nov 28-Jan 29 | 80 | 9 | 24,307 | 10,928 | -5,008 | -37,110 |
| Q10 Feb 29-Apr 29 | 91 | 10 | 27,441 | 7,698 | -1,073 | -38,183 |
| Q11 May 29-Jul 29 | 97 | 11 | 29,288 | 7,752 | -562 | -38,744 |
| Q12 Aug 29-Oct 29 | 103 | 12 | 31,341 | 7,798 | -131 | -38,875 |

### High case by quarter (no founder pay)

| Quarter | Broker accounts (end) | Accountant seats (end) | ARR run-rate (end) | Costs | Net | Cumulative cash |
|---|---|---|---|---|---|---|
| Q1 Nov 26-Jan 27 | 28 | 3 | 10,161 | 14,293 | -13,084 | -13,084 |
| Q2 Feb 27-Apr 27 | 92 | 8 | 31,648 | 9,911 | -3,686 | -16,770 |
| Q3 May 27-Jul 27 | 137 | 13 | 47,707 | 10,498 | 189 | -16,581 |
| Q4 Aug 27-Oct 27 | 186 | 17 | 76,632 | 11,210 | 6,551 | -10,030 |
| Q5 Nov 27-Jan 28 | 224 | 24 | 97,855 | 19,152 | 3,875 | -6,155 |
| Q6 Feb 28-Apr 28 | 322 | 31 | 152,561 | 16,944 | 15,153 | 8,998 |
| Q7 May 28-Jul 28 | 365 | 37 | 170,554 | 17,890 | 23,283 | 32,282 |
| Q8 Aug 28-Oct 28 | 413 | 44 | 189,854 | 18,498 | 27,475 | 59,756 |
| Q9 Nov 28-Jan 29 | 453 | 51 | 218,578 | 27,682 | 25,338 | 85,094 |
| Q10 Feb 29-Apr 29 | 525 | 58 | 267,336 | 25,542 | 39,060 | 124,154 |
| Q11 May 29-Jul 29 | 570 | 65 | 287,472 | 26,281 | 44,065 | 168,219 |
| Q12 Aug 29-Oct 29 | 621 | 72 | 309,295 | 26,938 | 48,584 | 216,804 |

### Scenario summary

| Measure | Low | Base | High |
|---|---|---|---|
| Broker accounts at month 6 / 12 / 24 / 36 | 18 / 35 / 75 / 103 | 41 / 82 / 181 / 268 | 92 / 186 / 413 / 621 |
| Accountant seats at month 36 | 12 | 35 | 72 |
| Share of the 10,365 UIF-registered brokers at month 36 | 1.0% | 2.6% | 6.0% |
| ARR at month 12 / 24 / 36 (USD) | 9,400 / 21,600 / 31,300 | 27,200 / 73,400 / 123,200 | 76,600 / 189,900 / 309,300 |
| Revenue, years 1 / 2 / 3 (USD) | 4,900 / 16,600 / 27,400 | 14,000 / 57,600 / 107,100 | 35,900 / 142,300 / 263,500 |
| Costs, years 1 / 2 / 3 (USD) | 24,700 / 28,900 / 34,200 | 35,200 / 46,600 / 62,500 | 45,900 / 72,500 / 106,400 |
| Profit before founder pay, year 3 (USD) | -6,800 | 44,600 | 157,000 |
| Monthly break-even (stays positive from) | month 36 (Oct 2029) | month 15 (Jan 2028) | month 15 (Jan 2028); first positive quarter Q3 2027 |
| Cumulative cash positive | not within 36 months | month 29 (Mar 2029) | month 17 (Mar 2028) |
| **Peak cash need, no founder pay (USD)** | **38,900** | **24,600** | **17,100** |
| Peak cash need with founder pay of USD 3,000 a month from month 13 (USD) | 110,900 | 49,900 | 17,100 |
| Blended acquisition cost, year 1 (marketing + half the support contractor + commissions, per new account) | about 190 | about 150 | about 110 |

Unit economics, base case (my estimate):
- **Payback.** A broker account brings about USD 21-25 a month. With an acquisition cost of about USD 150, payback is about 7 months.
- **Lifetime value.** At 2% monthly churn the average life is about 50 months. With about 88% gross margin (after payment fees, hosting and commissions), lifetime value is about USD 1,000. LTV/CAC is about 6-7.
- **The ceiling is the market and the price, not the unit economics.** Even the high case reaches only 6% of registered brokers.

What the numbers mean:
- **Cash need is small because AI agents replace a dev team.** A hired team would add USD 40,000-80,000 before launch (my estimate, unverified). With agents, about USD 25,000 covers the base case without founder pay. Plan for USD 50,000 to allow for founder pay or a slow start.
- **Founder income is thin in Argentina alone.** The base case pays a modest founder salary only from year 3. Colegio deals, accountants and Uruguay are the levers.
- **The low case shows by month 6.** About 18 accounts against a base target of 41. That is the first kill checkpoint.
- **Sensitivity.** Price matters more than volume. Moving base revenue per account from USD 23 to USD 18 cuts year-3 profit by about USD 15,000 (my calculation from the model). A colegio deal is worth about 30-40 Solo accounts.

## Regional expansion

**Order:**
1. Argentina, including adjacent obliged sectors.
2. Uruguay: prepare in month 15, launch around months 18-24.
3. Peru or Chile: check after month 24.
4. Paraguay last.

| Market | Duty | Fit | Note | Source |
|---|---|---|---|---|
| **Argentina, adjacent sectors** | Notaries (11,325 registered) and accountants (4,712) are obliged too | The engine is the same (client file, risk rating, ITAER) | Notaries already have a free colegio app. Accountants are partners first, then buyers of their own compliance module | [MER](https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf); [Colegio de Escribanos app](https://www.colegio-escribanos.org.ar/apps/UIF-autoevaluacion/instructivo.html) |
| **Uruguay** | Real estate agencies, developers and builders are obliged (Law 19.574, Decree 379/018). They need a risk matrix and risk-based due diligence | Same language. Close legal culture. Card payments work the same way | SENACLAFT supervises about 14,000 non-financial obliged subjects with about 10 inspectors. Crowe Uruguay sells a compliance service to agents and auctioneers, so advisers exist (no software found) | [Ferrere](https://www.ferrere.com/en/news/uruguay-reglamentan-ley-integral-contra-el-lavado-de-activos-para-sector-no-financiero/); [Crowe Uruguay](https://www.crowe.com/uy/plaft-ag-inmob-y-rematadores); [SENACLAFT 2023](https://www.gub.uy/secretaria-nacional-lucha-contra-lavado-activos-financiamiento-terrorismo/sites/secretaria-nacional-lucha-contra-lavado-activos-financiamiento-terrorismo/files/documentos/noticias/Senaclaft%20-%20Resumen%20de%20Actividades%20A%C3%B1o%202023%20para%20web.pdf) |
| **Peru** | Real estate agents register with the housing ministry. The compliance officer's annual report has a fixed deadline | Fixed deadline helps sales | Not checked for local tools | [02](02-market-and-competition.md) |
| **Chile** | Property brokers are UAF-supervised obliged subjects; real fines (2018) | About 1,500 registered in 2014 | Local AML vendors likely | [02](02-market-and-competition.md) |
| **Paraguay** | Agencies are obliged; weaker regime | Low | | [02](02-market-and-competition.md) |

**Cost of each new country:** legal content review about USD 3,000-5,000, Spanish localisation of rules and templates by agents in 2-4 weeks, and one launch trip (my estimate). Most of the code is reused. Keep each country's rules as data.

## Exit and partnerships

- **Most likely outcome:** a profitable niche business owned by the founder, or a sale to a strategic buyer.
- **Strategic buyers and partners:**
  - **BDO Argentina (AMLify):** would buy the long-tail customer base and the self-serve channel ([amlify.net](https://amlify.net/)).
  - **QuintoAndar (Navent: Tokko Broker, Zonaprop):** could add compliance to the CRM that holds the deal data ([Privsource](https://www.privsource.com/acquisitions/deal/quintoandar-acquires-navent-s-real-estate-operations-to-strengthen-latin-american-offering-krS5VB)).
  - **Xintel, KiteProp and InmoSuite:** CRM vendors that could white-label the tool.
  - **Regional risk-software vendors** such as Pirani (Colombia), which already publishes UIF guides ([Pirani](https://www.piranirisk.com/es/hub-regulatorio/prevencion-lavado-activos-argentina-cumplimiento-uif)).
  - **CONLAFT:** a local AML platform for other sectors ([CONLAFT profile](https://www.cancilleria.gob.ar/userfiles/ut/conlaft_espanol.pdf)).
  - **Data providers** (Equifax/Veraz, Nosis) that sell to brokers already ([CUCICBA #193](https://colegioinmobiliario.org.ar/novedades/193)).
- **Valuation range.** Small SaaS under USD 500,000 ARR sells for about 2-3x seller's discretionary earnings ([PipelineRoad](https://pipelineroad.com/agency/blog/saas-valuations-guide)). Acquire.com closed deals at a median of about 3.9x profit in 2024-2025 ([BigIdeasDB](https://bigideasdb.com/state-of-saas-valuations-2026); vendor data, unverified).
  - Base case at month 36 (profit about USD 45,000): about **USD 90,000-180,000**.
  - High case (profit about USD 157,000): about **USD 310,000-630,000**.
  - A strategic buyer might pay on revenue instead (about 1-2x ARR), which favours the base case (my estimate).
- **Partnerships worth more than an exit early on:**
  - a CRM white-label with a revenue share;
  - colegio contracts;
  - an accountant network.

## Risks and mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| **Weak enforcement keeps willingness to pay low.** 21 of 10,307 brokers inspected in 2023 ([MER](https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf)) | High | High | Sell around deadlines (RSA, ITAER 2028), UIF information requests and registry cross-checks. Keep the price low. Sell through accountants who already charge for the work |
| **AMLify goes national through COFECI and drops its price** | Medium | High | Move first in Córdoba and Santa Fe. Own the self-serve and accountant segments. Publish prices. Offer a CRM integration |
| **Broker deregulation** (end of the mandatory licence and colegio). Announced; not confirmed as filed as of late July 2026 ([iProfesional, 13 Jul 2026](https://www.iprofesional.com/realestate/459884-las-claves-de-la-reforma-al-mercado-inmobiliario-que-el-gobierno-enviara-al-congreso); [Ámbito, May 2026](https://www.ambito.com/real-estate/matriculas-comisiones-y-escrituras-las-claves-del-plan-desregulacion-inmobiliaria-federico-sturzenegger-n6271541)) | Medium | Medium | Law 25.246 covers anyone who brokers, so the duty likely stays and the pool may widen ([01](01-law-and-requirements.md)). It would weaken colegios as a channel, so lean on accountants and self-serve |
| **UIF relief for brokers** (as accountants and lawyers got) | Medium | Medium | Monthly reports and client files stay. Keep deadlines as data. Market the inspection pack, not only deadlines |
| **Card declines or surprise taxes drive churn** | Medium | Medium | Show the tax-included price. Push annual plans. Add dLocal Go as a peso route |
| **Withholding or FX friction on institutional deals** | Medium | Low-medium | Card or reseller route. Treaty check. Local SAS only when deals justify it |
| **Liability for wrong templates or missed alerts** | Low | High | Lawyer-reviewed templates; versioned rules; liability cap; E&O insurance; never auto-file |
| **Data breach (DNI images, PEP data)** | Low | High | EU hosting, encryption, pen test before launch and yearly, minimal data, access logs |
| **Founder distance from Argentina** | Medium | Medium | A part-time Argentine contractor for WhatsApp support and colegio contacts. One or two trips a year |
| **Peso crisis or new FX controls** | Medium | Medium | USD pricing; card route; small fixed costs |
| **Small market caps the upside** | High | Medium | Adjacent sectors and Uruguay. Keep costs near USD 60,000 a year |

## Milestones and kill criteria

| Date | Milestone (base case) | Kill or pivot trigger |
|---|---|---|
| 1 Nov 2026 (day 21) | MVP done. 20 broker and 5 accountant interviews. At least 8 say they would pay USD 10 a month or more | Fewer than 4 of 25 would pay anything: stop, or pivot to an accountant-only tool |
| 26 Nov 2026 | Pen test passed. Templates reviewed by the lawyer. 10 pilots using it weekly | Pilots do not use it weekly: fix onboarding before launch |
| 11 Dec 2026 | 10 paying accounts (pilot price) | **Fewer than 3 paying from 30 conversations: kill or pivot** |
| 10 Jan 2027 (day 90) | 25 paying, 5 accountant partners, 1 colegio benefit listing | Fewer than 10 paying: cut marketing and stay founder-only |
| 31 Mar 2027 (end of the RSA window) | 41 paying, 4 accountant seats | **Fewer than 15 paying: kill** |
| Oct 2027 (month 12) | 82 accounts; ARR at least USD 25,000; monthly churn at or below 2.5% | **Fewer than 35 accounts and no colegio in the pipeline: kill or sell the code to a CRM vendor** |
| Apr 2028 (ITAER deadline) | 140 accounts; 1 colegio deal signed | Fewer than 75 accounts: stop paid marketing; run as a side business |
| Oct 2028 (month 24) | ARR at least USD 70,000; cumulative cash close to break-even; Uruguay prepared | ARR under USD 30,000: sell or wind down |
| Any time | | The UIF exempts small brokers or suspends Res. 43/2024 duties. Or AMLify signs COFECI at a price below USD 15 a month. Or the first-year renewal rate is under 50% |

## Open questions

- **The founder's country.** It sets the treaty with Argentina (withholding on institutional deals), home VAT on exports of services, and Stripe's fee table.
- **What does AMLify charge?** Does it serve sole brokers? A demo request would answer this ([amlify.net](https://amlify.net/)).
- **How do Argentine card issuers treat a small foreign SaaS not on ARCA's provider list?** Do they perceive the 21% VAT? Test with 3-5 pilot cards (unverified).
- **Does the 30% advance apply to the net price or to the price plus VAT?** (unverified)
- **What do Buenos Aires city (AGIP) and Buenos Aires province (ARBA) charge** as gross-income tax on digital services from abroad? (unverified)
- **Does Paddle add Argentine VAT on top of the issuer's perception?** (unverified)
- **What do accountants and REIs charge brokers** for the RSA, ITAER and REI? No fee scale was found. Ask 5 accountants in the interviews.
- **How do colegios buy?** Do they need a local invoice, a board vote or a tender? (unverified)
- **What share of brokers are monotributistas?** This sets how many cannot recover VAT (unverified).
- **May public colegio registers be used for cold email** under Law 25.326? (unverified; ask the lawyer)
- **Is the US now recognised as adequate for data transfers?** (unverified)
- **What is the current BCRA rule for companies paying foreign software services?** (unverified)

## Sources

- https://api.bcra.gob.ar/estadisticascambiarias/v1.0/Cotizaciones/USD?fechadesde=2026-10-01&fechahasta=2026-10-10
- https://amlify.net/
- https://colegioinmobiliario.org.ar/novedades/245
- https://colegioinmobiliario.org.ar/novedades/185
- https://colegioinmobiliario.org.ar/novedades/210
- https://colegioinmobiliario.org.ar/novedades/215
- https://colegioinmobiliario.org.ar/novedades/193
- https://colegioinmobiliario.org.ar/institucional/matriculacion
- https://colegioinmobiliario.org.ar/servicios/guia-de-matriculados
- https://developargentina.com/blog/software-inmobiliaria-argentina-2026
- https://www.iprofesional.com/realestate/433013-cualquier-persona-podra-poner-imobiliaria-y-ser-martillero-polemico-plan
- https://stabogados.com.ar/civil/empresas/compliance-sujetos-obligados/
- https://servicios.infoleg.gob.ar/infolegInternet/anexos/60000-64999/62977/texact.htm
- https://www.argentina.gob.ar/normativa/nacional/397424/actualizacion
- https://hacecuentas.com/calculadora-comision-inmobiliaria-venta-inmueble-4-porciento
- https://www.ambito.com/real-estate/cuales-son-los-gastos-que-pagan-comprador-y-vendedor-una-propiedad-us100000-caba-y-provincia-n6287354
- https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf
- https://www.argentina.gob.ar/sites/default/files/analisis_de_los_informes_tecnicosde_los_rei.pdf
- https://tributum.news/res-93-2026-uif-registros-de-la-propiedad-inmueble-prevencion-la-ft-fp-nuevo-regimen-basado-en-riesgos/
- https://www.zonaprop.com.ar/blog/wp-content/uploads/2026/07/INDEX_CABA_REPORTE_2026-06.pdf
- https://www.zonaprop.com.ar/blog/wp-content/uploads/2026/03/INDEX_CABA_REPORTE_2026-02.pdf
- https://siap.blogdelcontador.com.ar/?p=83511
- https://contadoresenred.com/uif-guia-para-la-elaboracion-del-informe-tecnico-de-autoevaluacion-de-riesgos-vto-30-4-2026/
- https://infonegocios.info/nota-principal/nace-un-nuevo-marketplace-pero-de-propiedades-de-que-se-trata-cordobaprop-la-app-que-busca-reunir-toda-la-oferta-de-la-provincia
- https://www.locativa.com.ar/novedades/locativa-y-el-colegio-de-corredores-inmobiliarios-de-cordoba-renovaron-su-convenio-de-colaboracion/
- https://www.superads.ai/facebook-ads-costs/cpc-cost-per-click/argentina
- https://www.privsource.com/acquisitions/deal/quintoandar-acquires-navent-s-real-estate-operations-to-strengthen-latin-american-offering-krS5VB
- https://www.xintel.com.ar/
- https://www.reporteinmobiliario.com/article2940-norma-uif-obligatoria-para-inmobiliarios-como-evitar-sanciones.html
- https://www.prevenciondelavado.com/portal/nota_gratuita.aspx?codigo=138377&cd_producto=LYNTO&nm_origen=Home
- https://siap.blogdelcontador.com.ar/rubro_normativa/regimen-de-percepcion-iva-rg-4240/
- https://siap.blogdelcontador.com.ar/categoria_normativa/servicios-digitales-prestados-por-sujetos-del-exterior/
- https://www.boletinoficial.gob.ar/detalleAviso/primera/183569/20180514
- https://fortunaweb.com.ar/blog/dolar-tarjeta-2026-como-se-calcula-el-costo-real-de-pagar-en-el-exterior
- https://www.consejosalta.org.ar/wp-content/uploads/ARCA-5617.pdf
- https://blogdelcontador.com.ar/news-45948-santa-fe-aplicara-ingresos-brutos-a-servicios-digitales-del-exterior-desde-el-1-de-julio
- https://www.iprofesional.com/impuestos/431104-que-provincias-cobran-ingresos-brutos-por-netflix-y-spotify
- https://www.infoviajera.com/2024/12/nuevo-dolar-tarjeta-el-gobierno-creo-la-percepcion-que-reemplaza-a-la-que-cae-en-diciembre/
- https://www.garrigues.com/es_ES/noticia/software-service-saas-desafio-alta-complejidad-tributaria-mundo-digital-e-interconectado
- https://www.facpce.org.ar/wp-content/uploads/2020/08/REUNION-CEAT-4.8.2020-BENEFICIARIOS-DEL-EXTERIOR.pdf
- https://www.ambito.com/informacion-general/arca-simplifico-un-tramite-clave-acceder-beneficios-impositivos-internacionales-n6284775
- https://www.argentina.gob.ar/node/78019
- https://www.arca.gob.ar/convenios-internacionales/paises/
- https://docs.stripe.com/currencies
- https://stripe.com/pricing
- https://developer.paddle.com/concepts/sell/supported-countries-locales
- https://www.paddle.com/pricing
- https://dodopayments.com/blogs/lemonsqueezy-review
- https://dodopayments.com/blogs/stripe-managed-payments-fees-explained
- https://techcrunch.com/?p=2815886
- https://allende.com/bancario/el-banco-central-flexibiliza-el-regimen-cambiario-para-exportaciones-transferencias-en-moneda-extranjera-y-pagos-financieros-04-14-2026/
- https://www.boletinoficial.gob.ar/detalleAviso/primera/285227/20230426
- https://dlocalgo.com/en/coverage
- https://helpcenter.dlocalgo.com/en/articles/7925879-how-do-i-create-a-subscription
- https://servicios.infoleg.gob.ar/infolegInternet/anexos/270000-274999/273567/texact.htm
- https://www.canal26.com/economia/2026/09/02/asi-quedo-el-aumento-del-salario-minimo-vital-y-movil-cuanto-se-cobrara-entre-septiembre-de-2026-y-abril-de-2027/
- https://cuantomecuesta.com/ar/crear-empresa-sas/
- https://argentinavisalaw.com/guides/company-formation-argentina
- https://vlolawfirm.com/guides/cost-of-company-formation-in-argentina-complete-breakdown
- https://abogados.com.ar/novedades-igj-resolucion-042026-simplificacion-sociedades-extranjeras/39242
- https://www.colegio-escribanos.org.ar/noticias/2026_06_10_Informe-Res-Gral-IGJ-4-26.pdf
- https://siap.blogdelcontador.com.ar/?p=84907
- https://developargentina.com/guias/abrir-empresa-argentina
- https://yo-facturo.com/blog/costos-de-abrir-una-empresa-en-argentina/
- https://www.argentina.gob.ar/transferencias-internacionales
- https://abogados.com.ar/nueva-regulacion-sobre-transferencias-internacionales-de-datos-personales/33745
- https://rest.hcdn.gob.ar/web/tramites-parlamentarios/render/adjunto/69b17431db5ad.pdf
- https://www.colegio-escribanos.org.ar/apps/UIF-autoevaluacion/instructivo.html
- https://www.ferrere.com/en/news/uruguay-reglamentan-ley-integral-contra-el-lavado-de-activos-para-sector-no-financiero/
- https://www.crowe.com/uy/plaft-ag-inmob-y-rematadores
- https://www.gub.uy/secretaria-nacional-lucha-contra-lavado-activos-financiamiento-terrorismo/sites/secretaria-nacional-lucha-contra-lavado-activos-financiamiento-terrorismo/files/documentos/noticias/Senaclaft%20-%20Resumen%20de%20Actividades%20A%C3%B1o%202023%20para%20web.pdf
- https://www.piranirisk.com/es/hub-regulatorio/prevencion-lavado-activos-argentina-cumplimiento-uif
- https://www.cancilleria.gob.ar/userfiles/ut/conlaft_espanol.pdf
- https://pipelineroad.com/agency/blog/saas-valuations-guide
- https://bigideasdb.com/state-of-saas-valuations-2026
- https://www.iprofesional.com/realestate/459884-las-claves-de-la-reforma-al-mercado-inmobiliario-que-el-gobierno-enviara-al-congreso
- https://www.ambito.com/real-estate/matriculas-comisiones-y-escrituras-las-claves-del-plan-desregulacion-inmobiliaria-federico-sturzenegger-n6271541
