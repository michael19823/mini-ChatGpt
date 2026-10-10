# Paraguay AML kit for vehicle dealers: go-to-market, payments, company setup and financials (deep dive 04)

Date: 10 Oct 2026. Builds on [the B1 report](../reports/paraguay-b1.md), [01-law-and-requirements.md](01-law-and-requirements.md) and [02-market-and-competition.md](02-market-and-competition.md). The sibling real-estate dive ([paraguay-b2, file 04](../paraguay-b2/04-gtm-company-finance.md)) covers the same regulator (SEPRELAD), the same SIRO filing system and the same payment questions. Where I reuse one of its findings without re-checking it, I write "(from the B2 dive)". Status: complete. Research used 22 web searches and 11 page fetches, plus my own reading of three PDFs that the fetch tool could not parse (Res 328/2026, the MIC investor guide and a SUACE fee deck).

**Money.** Prices are in guaraníes (Gs). I use **Gs 5,700 = US$1**. The Central Bank (BCP) reference rate was Gs 5,694 on 9 Oct 2026 ([BCP](https://www.bcp.gov.py/webapps/web/cotizacion/monedas), from the B2 dive). File 02 used about Gs 6,000. "Net" means before Paraguayan VAT (IVA, 10%). "My estimate" marks a planning assumption, not a sourced fact.

**Abbreviations.** RN = negative report. RO = operations report. FA = annual form. CI = internal-control report. AE = external audit report. OC = compliance officer. IRE = corporate income tax. INR = non-resident income tax. MoR = merchant of record. ARR = annual recurring revenue.

## Summary

- **Vehicles alone make a small business. As a module of one SEPRELAD engine they pay well.**
  - **Standalone base case** (vehicle firms only): about **140 paying firms and US$41,000 ARR by September 2029**. Year-3 profit before founder pay is only about US$1,800. Peak cash need is about **US$34,000**, and the business is still about US$27,000 down at month 36.
  - **High case:** about 260 firms, US$91,000 ARR, cash-positive from month 34.
  - **Low case:** about 47 firms. It never pays back.
  - **The same sales as a module on the real-estate engine (B2)** add about US$21,000 a year of profit by year 3, for a peak cash need of only about US$3,400. The core build, security test, insurance, company costs and much of the marketing are shared.
  - **Recommendation:** build one SEPRELAD engine. Sell a vehicle edition ("Automotores") from the start if the first 12 vehicle interviews pass Gate 1. Do not build vehicles as a separate company or product.
- **Why vehicles are worth it as a module.** The pain is sharper than in real estate.
  - Each reporting firm files about **86 operations a quarter**, keyed into SIRO one by one ([Memoria 2025](https://www.seprelad.gov.py/wp-content/uploads/2026/02/Memoria-Anual-de-Gestion-Ano-2025.pdf), via file 02).
  - SEPRELAD focuses on this sector. It warned 454 vehicle firms in 2024 ([Memoria 2024](https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf)). About 35 of its 76 on-site inspections in 2025 were vehicle firms, and its only "significant" fine that year hit a vehicle firm ([Memoria 2025](https://www.seprelad.gov.py/wp-content/uploads/2026/02/Memoria-Anual-de-Gestion-Ano-2025.pdf)).
- **Price low, in guaraníes, by volume** (net; yearly = 10 months):
  - **Al día:** Gs 490,000 a year (US$86).
  - **Playa** (main plan, up to 400 operations a year): **Gs 99,000 a month or Gs 990,000 a year (US$174)**.
  - **Concesionaria:** Gs 2.49m a year (US$437).
  - **Distribuidor:** from Gs 5.9m a year.
  - **Estudio** (for auditors): Gs 290,000 a month.
  - The anchors are low. The SIRO fee is Gs 331,000 a year. An AML course costs Gs 800,000. A person check with PEP status costs Gs 23,000. E-invoicing costs from Gs 110,000 a month (all via file 02). These prices match the B2 price list, so one engine can carry both.
- **Selling calendar = the SIRO calendar.**
  - January: the RN (by about 15 January) and the RO (11-20 January).
  - Then the CI by 31 March, the FA by 31 May, and the AE and the canon by 30 June.
  - Since July 2026, small or inactive firms can ask SEPRELAD to **exempt or defer the external audit**, but only before the deadline (Res 328/2026, read from the [SEPRELAD scan](https://www.seprelad.gov.py/resoluciones/resoluciones/Res.%20328.26_Excepci%C3%B3n%20de%20auditor%C3%ADa%20externa.pdf)).
  - Public launch on **Thu 10 Dec 2026**, "listo para enero".
- **Channels, in order:**
  1. the about 138 SEPRELAD-registered audit providers, who file about 160 vehicle audits a year;
  2. direct outreach from the public register (653 vehicle companies, plus about 200 new registrants a year);
  3. accountants in Central, Alto Paraná and Caaguazú;
  4. Criterion S.A., the credit bureau that co-organised SEPRELAD's vehicle-sector training on 16 Sep 2026 ([SEPRELAD](https://www.seprelad.gov.py/?p=4381));
  5. trainers;
  6. dealer associations, with separate tracks for new and used cars.
- **Payments: Stripe on the founder's foreign company, charging PYG.** PYG is a zero-decimal Stripe currency ([Stripe docs](https://docs.stripe.com/currencies)). The all-in fee is about 6% on a yearly plan ([Stripe IE pricing](https://stripe.com/ie/pricing)).
  - Paddle sells to Paraguay only in US dollars and collects no Paraguayan tax (from the B2 dive).
  - Lemon Squeezy accepts Paraguayan buyers ([Lemon Squeezy](https://docs.lemonsqueezy.com/help/getting-started/supported-countries)).
  - Neither MoR solves the local tax point.
- **Tax friction is about 4.5% of revenue. Plan to bear it.**
  - Buyers under the general IRE regime must withhold INR of 15% on 30% of the net price, i.e. **4.5%** ([Decreto 6515/2021, art. 7 and 9](https://impuestospy.com/impuestos/decreto-n-6-515-21/)).
  - Resident individuals do not withhold (same decree, art. 9). 62% of registered vehicle firms are individuals (file 02).
  - For sales to "final consumers", the foreign provider must register by e-mail and pay the INR itself every month under **RG 114/2022**, which replaced the RG 109/2021 cited in the B2 dive ([RG 114/2022](https://impuestospy.com/impuestos/resolucion-general-n-114-2022/)). "Final consumer" is not defined, so an individual lot owner is a grey zone. The model books 4.5% of all cash as tax cost.
- **No local company in year 1.** An EAS is formed online in about 72 business hours with no minimum capital ([MIC investor guide, 2025](https://www.mic.gov.py/wp-content/uploads/2025/06/GUIA-PARA-INVERSIONISTAS-EXTRANJEROS.pdf)). Official fees are small. Remote legal help costs about US$500-4,000 (secondary sources).
  - **But the legal representative needs a Paraguayan cédula** (DNIT RG 34/25, from the B2 dive). The investor-residency route needs a US$70,000 investment and 5 jobs (MIC guide).
  - Running costs would be about US$4,000-7,000 a year (my estimate).
  - Use partner resellers for buyers who need a local invoice.
- **Kill criteria:**
  - Tue 10 Nov 2026: fewer than 6 of 12 vehicle firms would pay Gs 99,000 a month, or fewer than 2 auditors with vehicle clients will pilot. Then fold vehicles into B2 as a later module, or stop.
  - Sat 9 Jan 2027: fewer than 6 paying vehicle firms.
  - 31 Mar 2027: fewer than 10.
  - Early 2028: first-year renewal below 55%.

## Pricing and packaging

### What vehicle firms already pay (anchors)

| Item | Price (Gs) | About US$ | Source |
|---|---|---|---|
| SIRO yearly fee ("canon"), vehicle sector, 2026 | 331,000 a year, due 30 June; 2% a month late | 58 | [Res 56/2026 notice](https://www.seprelad.gov.py/?p=4035); [Res 48/2025](https://www.seprelad.gov.py/userfiles/files/resoluciones/resolucion-n48-2025-canon-anual-2025.pdf) (via files 01 and 02) |
| One-off SIRO registration fee | about 322,000 | 56 | [SIRO statistics](https://www.seprelad.gov.py/siro/estadisticaExterna/estadistica.xhtml), via file 02 |
| Online AML course naming vehicle traders | 800,000 a person (600,000 each for 2+) | 140 | [Best Practices](https://bestpractices.com.py/curso-taller-administracion-de-riesgos-ldft/) |
| Person check with PEP status, court records and defaults | 23,000 per report | 4 | [Criterion](https://www.criterion.com.py/index.php?pag=comprar) |
| E-invoicing / POS software | from 110,000 a month | 19 | [FactPy](https://factpy.com/) |
| Freelance "compliance officer structure" pack for Res 196 | not published | - | [Clasipar ad](https://clasipar.paraguay.com/motor/otros-rodados/servicio-de-oficial-de-cumplimiento-seprelad-1924578) |
| External AML audit by a SEPRELAD-registered auditor | not published; three searches found no price | - | [Cáceres & Schneider](https://consultoria.com.py/caceres-schneider-informe-de-cumplimiento-seprelad-plazos-para-entrega/) (unverified) |
| Devsys Cumplo360 (used by Grupo Condor) | not published | - | [Devsys clients](https://www.devsys.com.uy/clientes.html) |
| Monthly minimum wage from 1 Jul 2026 | 3,044,000 | 534 | [Infobae](https://www.infobae.com/america/america-latina/2026/06/18/el-presidente-de-paraguay-reajusto-un-5-el-salario-minimo-supero-a-la-inflacion-y-alcanzara-los-usd-500/) |
| Staff accountant's monthly pay | 3.6m-10.9m | 630-1,910 | [Cazvid](https://cazvid.com/es/blog/cuanto-gana-un-contador-en-paraguay) |

**What the anchors say**
- **Visible prices are low.** A small lot will compare the tool with the SIRO fee (US$58 a year) and its e-invoicing bill (about US$19 a month) (inference).
- **The hidden cost is time.** A reporting firm keys about 86 operations a quarter into SIRO (file 02, from [Memoria 2025](https://www.seprelad.gov.py/wp-content/uploads/2026/02/Memoria-Anual-de-Gestion-Ano-2025.pdf)).
  - At about 8 minutes each, that is about 11 hours a quarter, or 46 hours a year (my estimate).
  - At a clerk's wage, that is about Gs 0.8m a year (my estimate).
- **Screening every buyer is expensive today.**
  - Res 196 allows simplified checks only up to 15 minimum wages for a single payment: Gs 45.66m, about US$8,000 (file 01).
  - Most car sales are probably above that (inference; average price unverified), so most buyers need full checks.
  - Checking each of about 180 buyers a year through a bureau at Gs 23,000 costs about Gs 4.1m (my arithmetic).
  - A bundled list check with a saved log is a real saving.

### Proposed plans

All prices are net, in guaraníes, billed by card. Yearly prepay costs 10 months ("two months free"). The plans line up with the B2 price list. Al día is the same, and B2's "Automotores" plan is the same price as Playa ([B2 file 04](../paraguay-b2/04-gtm-company-finance.md)).

| Plan | Who | What it includes | Monthly | Yearly | About US$ a year |
|---|---|---|---|---|---|
| **Al día** | Small or low-activity lots, individuals, firms planning a Res 328/2026 audit exemption | Deadline calendar (RN, RO, CI, FA, AE, canon, yearly SIRO data check, OC change within 5 days); WhatsApp and e-mail reminders; RO checklist for up to 40 operations a year; FA worksheet; vault for SIRO receipts; **audit-exemption request pack**. 1 tax ID (RUC), 1 user | 49,000 | 490,000 | 86 |
| **Playa** (main) | Used-car lots and small importers that file ROs | Everything in Al día, plus up to **400 operations a year** (the average is 344, file 02). Sales and purchase log (Excel or e-invoice import). A buyer KYC link the buyer fills in on his phone. Automatic simplified-or-full check at 15 and 20 minimum wages. UN, OFAC and PEP checks with a log (fair use of 400 a year). RO file builder (web-entry checklist now; JSON if SEPRELAD enables it for vehicles). FA figures. Generators for the manual, code of ethics, OC appointment and risk self-assessment. Training log, alert register, CI report draft, audit export, 5-year archive. 3 users | 99,000 | 990,000 | 174 |
| **Concesionaria** | Mid-size dealers and importers with branches | Playa with up to 2,000 operations a year, 3 branches, 10 users, bulk import, ongoing re-screening, priority WhatsApp support | 249,000 | 2,490,000 | 437 |
| **Distribuidor** | About 30 large importers and brand distributors | Several RUCs, import from dealer software, single sign-on, custom reports. Quote only | from 590,000 | from 5,900,000 | from 1,035 |
| **Estudio** | Registered auditors, accountants and outsourced OCs | Multi-client dashboard; free read-only access to any client that subscribes; audit-sample tool; 3 managed client RUCs included; more Playa clients at **Gs 79,000 a month** (20% off), Concesionaria clients at Gs 199,000 | 290,000 base | 2,900,000 base | 509 base |

**Add-ons (partners deliver; we keep 30%)**
- **Implementación asistida:** a partner consultant sets up the file, manual and first risk self-assessment. Gs 900,000 one-off (US$158) (my estimate).
- **Revisión pre-auditoría:** a partner auditor checks the file before 30 June. Gs 1,500,000 (my estimate).
- **Bureau report pass-through:** a Criterion report for full-check buyers at cost (Gs 23,000), if a deal is signed ([Criterion](https://www.criterion.com.py/index.php?pag=comprar); partnership unverified).

**Launch offers**
- The first 15 vehicle firms (December 2026 to January 2027) get 50% off year 1 in exchange for feedback and a testimonial.
- Founding customers keep their price for 2 years.
- Association members get 15% off.

**Why these numbers** (my estimate; test them in the first interviews)
- Playa at Gs 990,000 a year is about 3 canons, or a third of one month's minimum wage. It is a little more than one AML course and less than the cost of bureau-checking every buyer.
- File 02 suggested Gs 90,000-150,000 a month for small lots and Gs 180,000-300,000 for companies that buy an audit ([02-market](02-market-and-competition.md)). I price at the low end because 62% of firms are individuals and price-sensitive.
- Pricing by **operation volume** fits this sector. Volume is visible in the RO and drives the work. Dealers can self-select without a sales call (my suggestion).
- **Blended revenue per firm** (used in the model): about Gs 1.10m a year in year 1, rising to Gs 1.35m in year 3 as Concesionaria and Distribuidor plans grow (my estimate).

### IVA (VAT) treatment of the price

- **Sold from the founder's foreign company (the recommended start):** show prices net. We do not charge Paraguayan IVA, and no MoR collects it (see Payments).
  - A general-regime buyer accounts for the IVA on a foreign service itself, then uses it as a credit (from the B2 dive, citing [EY, Apr 2022](https://ey.com/content/dam/ey-unified-site/ey-com/es-py/technical/tax/documents/tax-alert-abril-2022.pdf)).
  - If DNIT lists us as a foreign digital provider, banks and card processors add 10% IVA when the buyer pays by card ([dplnews](https://dplnews.com/paraguay-servicios-digitales-agentes-de-retencion-son-los-bancos-y-operadoras-de-tarjetas-de-credito/), from the B2 dive). Software is a listed digital service under Ley 6380/2019 ([ABC Color](https://www.abc.com.py/edicion-impresa/economia/gravaran-los-servicios-digitales-con-iva-y-renta-a-no-residentes-1815155.html)).
- **Sold through a local reseller or a future local company:** add 10% IVA on a Paraguayan e-invoice. Playa would then cost Gs 1,089,000 a year including IVA (my arithmetic).
- **Price-page wording (Spanish):** "Precios en guaraníes, sin IVA. Servicio para empresas y comerciantes con RUC. Si su empresa es contribuyente del IRE general, puede corresponderle retener el INR. Si necesita factura electrónica local, compre a través de un socio."

## Go-to-market

### Selling seasons and deadlines

Dates come from Res 196/2020, Circular 02/2025 and SEPRELAD notices, as set out in [01-law](01-law-and-requirements.md).

| When | Duty (vehicle sector) | Selling use |
|---|---|---|
| Within 10 business days after each quarter (about **15 Jan 2027** for Q4 2026, my count) | RN if no ROS was filed in the quarter (Art. 37) | Al día hook; reminders |
| **11-20 Jan, Apr, Jul, Oct** | RO of every import, purchase, sale and consignment (Art. 31) | The main pain: 86 operations a quarter. "Your RO built from your sales list" |
| **31 March** | CI report for the past year (90 days) | CI report draft |
| April | SEPRELAD's FA webinar. About 100 vehicle OCs attended on 7 Apr 2026 ([SEPRELAD](https://www.seprelad.gov.py/?cat=35), via file 02) | Ads and a free FA worksheet in the same weeks |
| **31 May** | FA (new form and vehicle risk matrix planned "for the 2026 period") | FA figures from the log; versioned field maps |
| **30 June** | AE report; canon (Gs 331,000 in 2026); last day to ask for an audit exemption or deferral (Res 328/2026) | Auditors' busy season; audit export; exemption pack for Al día |
| 31 July to 9 October (2026 dates) | Expo Feria CADAM at Paseo La Galería, Asunción ([InfoNegocios](https://infonegocios.com.py/amp/infobrand/seguridad-seguros-acompana-la-expo-feria-cadam-2026-como-aseguradora-oficial-por-mas-de-dos-decadas-consecutivas)) | Meet new-car distributors; low priority |
| Year-round | About 200 new vehicle registrations a year (file 02) | New firms must set everything up. The best leads |
| Every 2 years | Risk self-assessment (Art. 3) | Renewal and upsell |
| When announced | Yearly SIRO data confirmation (Res 435/2026). It reached finance on 15 Jun 2026 and real estate on 5 Oct 2026, but vehicles had not been named by 10 Oct 2026 ([SEPRELAD](https://www.seprelad.gov.py/?p=4412), via file 01) | A free guide the week vehicles are switched on |

**What Res 328/2026 changes.** I read the scanned resolution. It is dated July 2026 and rewrites Art. 14 (external audit) of both Res 196/20 and Res 201/20 ([SEPRELAD scan](https://www.seprelad.gov.py/resoluciones/resoluciones/Res.%20328.26_Excepci%C3%B3n%20de%20auditor%C3%ADa%20externa.pdf)).
- SEPRELAD "podrá exceptuar o diferir" the audit report for some firms or categories when objective reasons justify it.
- The footnote lists the reasons: no operations, inactivity, a recent start or end of activity, low volume, and no clients or operations linked to AML.
- The firm must ask **before** the deadline, with documents. A grant covers one audited year only. It is never automatic.
- **Effect:** the audit channel shrinks a little for the smallest lots. But the request needs evidence that the tool already holds (operation counts and SIRO filings). That makes it a feature for the Al día plan.

**Peaks.** Peak season runs January to June. July to December is quieter: use it for building, auditor deals and renewals. Late December is holiday time, but the January RN and RO deadlines force action (my estimate).

### Channels, in priority order

| # | Channel | Size | Offer | Source |
|---|---|---|---|---|
| 1 | **SEPRELAD-registered AML auditors** | 183 registered people, about 138 providers. About 160 vehicle audit reports a year | Estudio plan. Referral: 20% of year 1 and 10% of renewals. Reseller: 30% off list, and the reseller invoices locally. Cáceres & Schneider already markets to "playas de autos" | [auditor export](https://www.seprelad.gov.py/siro/consultaExterna/consultaExternaSoAe.xhtml) and [Cáceres & Schneider](https://consultoria.com.py/prevencion-del-lavado-de-dinero-seprelad/), via file 02 |
| 2 | **Direct outreach from the public register** | 1,719 vehicle firms: 653 companies (RUC starting "80") and 1,066 individuals. About 200 new firms a year | WhatsApp and e-mail with a free "semáforo SEPRELAD" self-check and the January RO guide. Companies first. Take legal advice before marketing to individuals; the data-protection law Ley 7593/2025 applies from about late 2027 | [SIRO lookup](https://www.seprelad.gov.py/siro/consultaExterna/consultaExternaSoAe.xhtml) via file 02; [Ferrere](https://ferrere.com/es/novedades/paraguay-adopta-su-ley-de-proteccion-de-datos-personales/) |
| 3 | **Accountants in the dealer hubs** | Central 527, Alto Paraná 365, Caaguazú 168, Itapúa 118 registered firms | Estudio plan for accountants who keep lots' books; course-plus-tool bundle with Gestión Contable | file 02; [Gestión Contable](https://gestioncontableparaguay.com/courses/curso-seprelad-6-hs-de-estudio/) |
| 4 | **Criterion S.A.** (credit bureau) | Co-organised SEPRELAD's Res 196 training for the vehicle sector on 16 Sep 2026, broadcast on Zoom and YouTube | Joint webinar; pass-through of bureau reports; referral. It is also a possible entrant | [SEPRELAD, 16 Sep 2026](https://www.seprelad.gov.py/?p=4381) |
| 5 | **Trainers** | Best Practices names vehicle traders; FOTRIEM/BNF diploma | "Course plus 3 months of the tool" | [Best Practices](https://bestpractices.com.py/curso-taller-administracion-de-riesgos-ldft/); [FOTRIEM](https://www.fotriem.edu.py/diplomado-en-prevencion-de-lavado-de-activos-y-financiacion-del-terrorismo-ft-fp/) |
| 6 | **Associations, two separate tracks** | CADAM (new-car distributors; 40 brands at its 2026 expo; 38,611 new vehicles in 2025, +11.3%). Used-car groups CIVU and Civemup (old counts: 110 and about 600 members). CADAM's president has called for limits on used-car imports | CADAM: a collective code of ethics, which Res 196 allows, plus the Distribuidor plan. Used-car groups: member discount. Do not co-brand the two | [InfoNegocios on CADAM 2025](https://infonegocios.com.py/default/mercado-automotor-acelera-proyectan-hasta-10-mas-importaciones-y-tercer-ano-de-recuperacion); [Última Hora on CADAM and used cars](https://www.ultimahora.com/cadam-autos-usados-tenemos-que-dejar-ser-el-basurero-del-mundo-n2829808) (date unverified); file 02 |
| 7 | **E-invoicing and POS vendors** | FactPy, Sifende and others; 50,000+ e-invoicers in Paraguay | Import of sales data into the RO log; co-marketing | [FactPy](https://factpy.com/); [DNIT](https://www.dnit.gov.py/web/e-kuatia/w/paraguay-supera-los-50.000-facturadores-electr%C3%B3nicos-y-avanza-en-la-digitalizaci%C3%B3n-tributaria) (from the B2 dive) |
| 8 | **Content and ads around deadlines** | Lots advertise on Clasipar and Facebook | Meta ads in Central, Alto Paraná and Caaguazú only in the 4 weeks before each deadline; Google search on "reporte de operaciones SEPRELAD" and "formulario anual automotores" | [Clasipar](https://clasipar.paraguay.com/motor/otros-rodados/servicio-de-oficial-de-cumplimiento-seprelad-1924578) |

**Not a channel:** SEPRELAD itself. Its staff may not act as paid advisers (Circular 2/2025, from the B2 dive). Stay aligned with its forms, but never claim endorsement. Note also that Circular 02/2025 expressly lets outside advisers prepare documents and prepare and submit reports ([Vouga](https://www.vouga.com.py/en/la-seprelad-recuerda-plazos-y-obligaciones-de-reporte-a-los-sujetos-obligados/), via file 01). That supports the Estudio plan.

### Sales motion

- **Lead with the RO.** The first demo imports last quarter's sales list (Excel or e-invoices) and shows the January RO ready to key in or upload. This is the "aha" moment (my suggestion).
- **Self-serve plus WhatsApp.** A 14-day trial with no card. Then a 20-minute WhatsApp onboarding call by a local contractor. Then a yearly plan by card.
- **Auditor-led.** The auditor names the tool in the engagement letter and sees the client file on the Estudio dashboard. The client signs up through the partner link.
- **Local presence.** From January 2027, hire a part-time Paraguayan contractor, ideally one who speaks Guaraní, for onboarding outside Asunción (my suggestion). Budget about US$400 a month in year 1. Pay against the contractor's invoice until a local company exists.
- **Cycle:** 1-3 weeks for an owner-run lot, 1-2 months for an audit practice or a distributor (my estimate).
- **Shared engine with B2.** The B2 plan leads with real estate and adds vehicles from about April 2027 ([B2 PLAN](../paraguay-b2/PLAN.md)). This file argues for interviewing both sectors in weeks 1-2. Then lead with the vertical that passes Gate 1 more strongly. Vehicles have the sharper pain (RO volume, inspections, the 2025 fine). Real estate has the bigger pool (1,451 versus 845 payers; file 02 and the B2 dive).

## 90-day launch plan

Day 1 is Monday 12 Oct 2026. Day 90 is Saturday 9 Jan 2027. The founder builds with Claude Code and several AI agents in parallel: an MVP in about 3 weeks, and sellable in 6-8 weeks once legal content, a security test and pilots are done.

| Dates | Product | Market and sales | Company, legal, payments |
|---|---|---|---|
| **Week 1** (12-18 Oct) | Agent streams: (1) sales/purchase log with Excel import; (2) RO builder for the vehicle fields; (3) buyer KYC phone link with the 15/20 minimum-wage rule; (4) calendar and reminders; (5) document generators (manual, code, OC appointment, self-assessment); (6) list checks with log | Spanish landing page with a free 2027 vehicle-sector SIRO calendar. Download the register and auditor lists. Book 18 interviews: 12 vehicle firms (6 companies, 6 individual lots in Central, Ciudad del Este and Caaguazú), 6 auditors with vehicle clients | Open Stripe on the founder's company with PYG prices. Brief a Paraguayan AML lawyer on the Res 196 templates. Send SEPRELAD a note asking whether JSON RO upload is available to vehicle firms (file 01 gives the e-mail route) |
| **Week 2** (19-25 Oct) | Internal demo: sales list in, RO out | Run interviews (remote). Ask auditors what they charge a small lot. Contact Criterion about a joint webinar | Draft terms of service and data-processing terms |
| **Week 3** (26 Oct-1 Nov) | **MVP complete** (internal) | Founding offer: 50% off year 1 for the first 15 firms. Collect letters of intent | Book a security test |
| **Day 30 (Tue 10 Nov)** | **Gate 1** (see kill criteria) | At least 6 of 12 vehicle firms would pay Gs 99,000 a month; at least 2 auditors with vehicle clients will pilot; at least 4 letters of intent | |
| **Weeks 5-6** (9-22 Nov) | Fix pilot feedback; CI draft; audit export; Res 328 exemption pack | **Trip:** Asunción and Ciudad del Este. Onboard 6-10 pilot firms through 2 auditors. Meet one trainer and one used-car group. Hire the part-time contractor (start in January) | Lawyer reviews the manual, code, OC appointment and self-assessment |
| **Weeks 7-8** (23 Nov-6 Dec) | Security-test fixes; 5-year archive and export; WhatsApp reminders live | Record 5 short videos: "the January RO in 30 minutes" | Sign partner agreements. Final terms. Stripe Billing live. Collect RUC and tax regime at checkout |
| **Day 60 (Thu 10 Dec)** | **Gate 2: public launch, "listo para enero"** | At least 5 paying vehicle pilots | |
| **Weeks 9-12** (11 Dec-3 Jan) | Support and small fixes only | WhatsApp and e-mail campaign to vehicle companies in Asunción, Central and Alto Paraná: "RN by 15 January, RO 11-20 January". Joint webinar with an auditor or Criterion in mid-December. Small Meta test | Book foreign-company bookkeeping |
| **Week 13** (4-9 Jan 2027) | Help pilots file the RN and RO | Measure time saved per firm, problems and willingness to renew | |
| **Day 90 (Sat 9 Jan)** | **Gate 3:** at least 6 paying vehicle firms and 1 active partner practice. Decide the spend for the CI season (31 March) | | |

## 12-month marketing plan and budget

October 2026 to September 2027. A lean budget of about **US$6,000** for marketing. On top come about US$3,600 for two trips, a part-time local contractor (about US$400 a month from January 2027) and partner commissions. All figures are my estimates.

| Month | Theme | Main actions |
|---|---|---|
| Oct-Nov 2026 | Validation and pilots | Interviews; founding offer; free 2027 vehicle SIRO calendar |
| Dec 2026-Jan 2027 | "Enero: RN y RO" | Register campaign to vehicle companies; webinar 1 with an auditor or Criterion; Meta test |
| Feb-Mar 2027 | CI due 31 March | Auditor partner drive before fieldwork; webinar 2, "el informe de control interno"; Google and Meta at peak; trip 2 (Asunción, Caaguazú) |
| Apr 2027 | RO window; FA webinar season | "Your RO in minutes" campaign; outreach to new 2026-27 registrants |
| May 2027 | FA due 31 May | FA-figures campaign; trainer bundle (Best Practices or Gestión Contable) |
| Jun 2027 | AE, canon and audit-exemption request due 30 June | Audit-export campaign; Res 328/2026 exemption guide for small lots |
| Jul 2027 | RO window; Expo Feria CADAM opens (late July, if it repeats the 2026 dates) | Distribuidor plan; CADAM collective code of ethics proposal; case studies |
| Aug 2027 | Quiet month | Used-car group member offer; accountant webinars in Ciudad del Este |
| Sep 2027 | Renewals; 2-yearly self-assessment | Renewal campaign; year-2 plan |

| Budget line | US$ |
|---|---|
| Meta (Facebook and Instagram) ads in Central, Alto Paraná, Caaguazú | 2,000 |
| Google search ads (deadline keywords) | 1,200 |
| Clasipar and Facebook group posts | 300 |
| Events: two auditor and accountant breakfasts (Asunción, Ciudad del Este) | 1,000 |
| Webinars and co-marketing with trainers and Criterion | 500 |
| Video editing and design (AI-assisted) | 400 |
| WhatsApp Business messaging and e-mail tools | 400 |
| Printed one-pagers | 200 |
| **Total marketing** | **6,000** |
| Travel (two trips) | 3,600 |
| Local contractor (9 months × US$400) | 3,600 |
| Partner commissions | about 5-7% of bookings (35% of firms through partners) |

Benchmarks for ad planning are global, not Paraguayan. A 2026 analysis puts the median Facebook traffic cost per click near US$0.70 ([adwave](https://adwave.com/resources/facebook-ad-costs)). Another source puts the Facebook feed CPM near US$3.50 ([adsuploader](https://adsuploader.com/es/blog/instagram-ads-cost)). Paraguayan rates are (unverified) and probably lower.

## Payments and tax friction

### Recommendation

- **Use Stripe on the founder's foreign company, priced in PYG**, with yearly or monthly card billing.
- **Collect the buyer's RUC and tax regime at checkout.** Sell to businesses and registered traders only.
- **Bear the 4.5% INR.** Accept 95.5% from general-regime buyers who withhold. Get advice on registering under RG 114/2022 for sales to individuals (see below).
- **Offer a reseller route** through partner auditors or accountants for buyers who want a local invoice or to pay by local transfer.
- **Do not use Paddle or Lemon Squeezy as the main processor.** They charge in US dollars and handle no Paraguayan tax. They add cost and solve nothing here.

### Do Paraguayan cards work for cross-border online payments?

- **Credit cards: mostly yes.** Paraguayans pay foreign digital services by card. That is why the law makes banks and card processors collect IVA on them ([dplnews](https://dplnews.com/paraguay-servicios-digitales-agentes-de-retencion-son-los-bancos-y-operadoras-de-tarjetas-de-credito/); [ABC Color](https://www.abc.com.py/edicion-impresa/economia/gravaran-los-servicios-digitales-con-iva-y-renta-a-no-residentes-1815155.html)).
- **Cards are spreading fast.** Credit cards rose from 1.30m (June 2024) to 2.28m (June 2025) ([InfoNegocios](https://infonegocios.com.py/y-ademas/asi-pagan-los-paraguayos-qr-y-billeteras-digitales-alcanzaran-cerca-de-200-millones-de-transacciones-este-ano)). Online card purchases were projected to grow 42% in 2026 (search summary of [ABC Color, Aug 2026](https://www.abc.com.py/negocios/2026/08/03/boom-del-tarjeteo-se-procesan-21-transacciones-por-segundo-en-paraguay/); unverified).
- **But cards are a minority of online payments.** Cash takes 28% of e-commerce payments, bank transfer 19%, credit card 16% and debit card 7% ([dLocal](https://www.dlocal.com/payment-processors-in-latin-america/paraguay-payment-methods-processors-e-commerce-market-dlocal/), from the B2 dive; undated).
- **This sector is cash-heavy.** Cash is the main means of payment in car sales ([SEPRELAD vehicle risk study](https://www.seprelad.gov.py/documentos/gu-a-de-riesgos-de-la-ft-del-sector-automotor.pdf), via file 02). That is about their customers, not their software bills. But it suggests some owners will want to pay by transfer (inference).
- **Debit cards for foreign merchants:** (unverified). Test with the first pilots.

### Stripe (founder's company abroad)

| Item | Stripe Ireland | Stripe US | Source |
|---|---|---|---|
| Card fee, international card | 3.15% + €0.25 | 2.9% + 30¢, plus 1.5% for international cards | [Stripe IE pricing](https://stripe.com/ie/pricing) (fetched); [Stripe US pricing](https://stripe.com/us/pricing) (from the B2 dive) |
| Currency conversion (PYG to payout currency) | +2% | +1% | same |
| Stripe Billing | 0.7% | 0.7% | same |
| Fee on Playa yearly, Gs 990,000 (US$174) | about US$10.5 (6.0%) | about US$10.9 (6.3%) | my arithmetic |
| Fee on Playa monthly, Gs 99,000 (US$17.4) | about US$1.3 (7.5%) | about US$1.4 (7.8%) | my arithmetic |

Notes:
- **PYG is a zero-decimal currency in Stripe**, so Gs 990,000 is sent as `990000` ([Stripe docs](https://docs.stripe.com/currencies); search summary). Whether PYG is a presentment currency for the founder's account country must be checked in the dashboard (unverified). American Express does not support PYG (from the B2 dive).
- The model uses 6% for payment costs. Yearly billing cuts the fixed-fee share, so push yearly plans.

### Merchant of record options

| Option | Sells to Paraguay? | Paraguayan tax handled? | Fee | Verdict |
|---|---|---|---|---|
| **Paddle** | Yes, in US$ only ([Paddle countries](https://developer.paddle.com/concepts/sell/supported-countries-locales), from the B2 dive) | No. Paraguay is not on Paddle's tax list ([Paddle tax](https://www.paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for), from the B2 dive) | 5% + 50¢ ([Paddle pricing](https://www.paddle.com/pricing)) | Adds nothing for Paraguay. Useful only if the founder's home VAT on B2C is a burden |
| **Lemon Squeezy** | Yes. Paraguay is not on its list of blocked buyer countries, and it is a payout country ([Lemon Squeezy](https://docs.lemonsqueezy.com/help/getting-started/supported-countries), fetched) | Not shown (unverified) | about 5% + 50¢ (unverified) | Same verdict as Paddle |
| **Stripe Managed Payments** | Not confirmed (unverified) | Not confirmed | about +3.5% on top of Stripe fees (third-party estimate, from the B2 dive) | Not needed for B2B |
| **dLocal** (processor for foreign merchants) | Yes. Local methods: Infonet, Practipago, Aquí Pago, WEPA, Zimple, Tigo Money, Billetera Personal, bank transfer, QR ([dLocal docs](https://docs.dlocal.com/docs/paraguay)) | Not as MoR (unverified) | Quote only; built for larger merchants (unverified) | A later option for buyers without cards |

### Bank transfers

- **An international wire from Paraguay is costly for small sums.** Itaú Paraguay charges US$33 plus US$22 SWIFT, plus any intermediary fees ([Wise on Itaú Paraguay](https://wise.com/py/blog/transferencia-internacional-itau-paraguay), from the B2 dive). Accept wires only above about US$500: Distribuidor and Estudio plans.
- **Local transfers need a local account.** A foreign company cannot take them without a partner or an entity.
- **Reseller route.** The partner invoices the dealer in Gs with IVA, collects locally, keeps its margin, and wires us one larger sum each quarter.

### Buyer-side tax friction

| Buyer | INR on our fee | IVA on our fee | What it means |
|---|---|---|---|
| **General-regime IRE taxpayer** (most S.A. and larger S.R.L. and EAS dealers) | Must withhold INR "con independencia de la modalidad de pago": 15% on a deemed 30% of the net price = **4.5%** ([Decreto 6515/2021, art. 7 and 9](https://impuestospy.com/impuestos/decreto-n-6-515-21/), fetched). The provider then does not need to register ([RG 114/2022, art. 4](https://impuestospy.com/impuestos/resolucion-general-n-114-2022/)) | Self-accounts and credits it (from the B2 dive); or the bank adds 10% on card if we are on DNIT's list ([dplnews](https://dplnews.com/paraguay-servicios-digitales-agentes-de-retencion-son-los-bancos-y-operadoras-de-tarjetas-de-credito/)) | A card payment cannot be withheld in practice. Some will pay in full and settle the INR themselves; others will ask to pay 95.5%. Accept both. Publish a one-page guide for their accountant |
| **IRE SIMPLE** (turnover up to Gs 2bn) or **RESIMPLE** (up to Gs 80m; no IVA) | Not named as withholding agents in the decree ([Decreto 6515/2021](https://impuestospy.com/impuestos/decreto-n-6-515-21/)) | RESIMPLE firms do not charge IVA ([beancount guide](https://beancount.io/blog/2026/09/23/paraguay-ire-simple-vs-general-sole-proprietor-tax-regime-guide); [Yo Facturo](https://yo-facturo.com/blog/persona-fisica-ruc-obligaciones-paraguay/), secondary) | Grey zone. If treated as "final consumers", we owe the 4.5% ourselves under RG 114/2022 |
| **Resident individual** (62% of registered vehicle firms) | "Las personas físicas residentes estarán exceptuadas de practicar la retención del INR" ([Decreto 6515/2021, art. 9](https://impuestospy.com/impuestos/decreto-n-6-515-21/)) | As above | Same grey zone |

**Who is likely to be general-regime?** A lot that sells more than about 33 cars a year at about Gs 60m each passes the Gs 2bn IRE SIMPLE ceiling (my arithmetic; the average price is unverified). The average reporting firm declares about 182 sales a year (82,591 sales from 453 firms in 2025, file 02). So most firms that file ROs are probably general-regime and will withhold. Most small individual lots are probably not (inference).

### Must the foreign seller register for Paraguayan tax?

- **For sales to general-regime IRE buyers: no.** The buyer withholds, and RG 114/2022 says the provider does not need to register in that case ([RG 114/2022, art. 4(a)](https://impuestospy.com/impuestos/resolucion-general-n-114-2022/)).
- **For sales to "final consumers": yes, a light registration.**
  - RG 114/2022 replaced RG 109/2021 in March 2022 ([search summary of DNIT and abogados.com.ar](https://abogados.com.ar/la-administracion-tributaria-paraguaya-modifica-el-registro-de-proveedores-no-residentes-de-servicios-digitales/30241)). The B2 dive cited the older rule.
  - **Registration:** a non-resident provider with or without a local representative sends the "Formulario de Registro de No Residentes" by e-mail within 10 business days of starting.
  - **Filing:** it files Form 90 by e-mail every month by the 15th, with a spreadsheet of charges.
  - **Payment:** it pays by bank transfer against a payment slip that DNIT sends.
  - **Months with no sales:** a "Sin Movimiento" e-mail.
  - **Limits:** registration does not create a permanent establishment and brings no other duties ([RG 114/2022, art. 1-4](https://impuestospy.com/impuestos/resolucion-general-n-114-2022/), fetched).
- **"Consumidor final" is not defined** in RG 114/2022 (same source). An individual lot owner or an IRE SIMPLE firm buys the tool for business, but is not a withholding agent. Ask a Paraguayan tax adviser which side they fall on.
- **Practical plan:**
  - Register under RG 114/2022 from the first sale to a non-general-regime buyer.
  - Pay 4.5% INR monthly on those sales.
  - Pay a local accountant about US$50 a month to prepare Form 90 (my estimate).
  - The model books 4.5% of all cash as tax cost. That is conservative.
- **Software is in scope.** The digital-services list includes "provision, development or updating of software or applications" ([ABC Color on Ley 6380](https://www.abc.com.py/edicion-impresa/economia/gravaran-los-servicios-digitales-con-iva-y-renta-a-no-residentes-1815155.html)).

### Tax treaties

- Paraguay has tax treaties in force with **Chile, Uruguay, Spain, Taiwan, Qatar and the United Arab Emirates**. This comes from a DNIT statement of June 2025 (search summary; [DNIT on Chile](https://www.dnit.gov.py/web/portal-institucional/w/nuevo-convenio-fortalece-la-cooperaci%C3%B3n-tributaria-entre-paraguay-y-chile)).
- The Spain treaty took effect on 14 Oct 2024. A new Chile treaty was signed in July 2026; whether it is in force is (unverified) (same DNIT pages, search summary).
- If the founder's company sits in a treaty country, the 4.5% INR may be reduced or removed under the business-profits article, unless the fee counts as a royalty (unverified; get advice). For companies in the US, UK and most of the EU there is no treaty, so the 4.5% stands.

## Company setup (needed or not, costs)

### Verdict: no local company in year 1, probably not in year 2

- **Buyers are businesses that can pay a foreign SaaS by card.** The tax rules already expect them to withhold the INR, or the provider to register by e-mail without a local entity (see Payments).
- **A local company needs a resident legal representative.** DNIT's RUC rules ask for the representative's Paraguayan cédula (DNIT RG 34/25, from the B2 dive). MIC's own guide puts company formation after "con tu cédula en mano" ([MIC guide](https://www.mic.gov.py/wp-content/uploads/2025/06/GUIA-PARA-INVERSIONISTAS-EXTRANJEROS.pdf)).
- **It adds monthly IVA and IRE filings, e-invoicing and an accountant** for a business that starts below US$10,000 a year (see the model).

**Open a local EAS only if** (my triggers):
1. more than a quarter of qualified dealers refuse to pay without a local e-invoice, and no partner will resell;
2. combined ARR (vehicles plus real estate) passes about US$60,000 and local invoicing would clearly lift sales;
3. you need to employ staff rather than contract them; or
4. you want local payment methods (Bancard, wallets, local transfer) without dLocal.

### What a local company costs

| Item | EAS (simplified company) | S.A. / S.R.L. | Source |
|---|---|---|---|
| How it is formed | 100% online through SUACE, in about **72 business hours**; pro-forma bylaws, a private document or a public deed. No newspaper publication (it goes on MIC's website), no Public Registry entry, no corporate books | Public deed; newspaper publication. S.A.: 8-30 business days. S.R.L.: 15-30 | [MIC investor guide (SUACE), 2025](https://www.mic.gov.py/wp-content/uploads/2025/06/GUIA-PARA-INVERSIONISTAS-EXTRANJEROS.pdf) |
| Shareholders | 1 or more; natural or legal persons, so the founder's foreign company can own it | S.A. at least 2; S.R.L. 2-25 | same |
| Minimum capital | None | None by law; "should be reasonable" for an S.A. | same |
| Official fees | Not published for the EAS (unverified). For scale, a 2018 SUACE deck lists a Public Registry fee of Gs 146,254 for a legal entity (which an EAS now skips), Asunción licence stamps of Gs 10,200 and a land-use report of Gs 115,000. So official fees are likely **under Gs 500,000 (about US$90)** (my estimate) | Public Registry fee plus notary and publication (unverified) | [SUACE presentation, 2018](https://mic.gov.py/wp-content/uploads/2024/12/PRESENTACION-SUACE.pdf) |
| Lawyer, done remotely by power of attorney | **US$500-1,500** full-service (one guide); **US$1,500-4,000** with bank, e-invoicing and accounting setup (another) | US$4,000-8,000 (one guide) | [LibertyMundo, 2026](https://www.libertymundo.com/incorporate-in-paraguay/); [Golden Harbors](https://goldenharbors.com/articles/start-business-in-paraguay) (from the B2 dive). Both are commercial guides (unverified) |
| Time | About 72 business hours to form; banking adds weeks. One guide says 4-6 weeks in total with a bank account | 3-6 weeks | MIC guide; LibertyMundo |
| Legal representative | Must hold a Paraguayan cédula. So the founder needs residency, or hires a resident representative at about US$100-300 a month (my estimate, unverified) | same | DNIT RG 34/25 (from the B2 dive) |
| Founder residency, if wanted | The investor route needs **US$70,000** of investment and 5 formal jobs. The permanent-residency fee is **Gs 2,690,675**, plus Gs 215,254 for the certificate. Documents must be apostilled and translated by a sworn translator | same | [MIC guide](https://www.mic.gov.py/wp-content/uploads/2025/06/GUIA-PARA-INVERSIONISTAS-EXTRANJEROS.pdf) |
| Bank account | Remote opening may take 1-4 weeks. Banks ask for source of funds and video checks | same | [LibertyMundo](https://www.libertymundo.com/incorporate-in-paraguay/) (unverified) |

**In-person versus remote.** In person, with a cédula, the official cost of an EAS is probably under US$100 and takes about 3 business days (my estimate from the sources above). Remote via a lawyer and power of attorney, it costs US$500-4,000 and takes about 1-6 weeks.

**Ongoing costs and taxes of a local EAS**
- IRE 10%. IVA 10%. Dividends to a non-resident owner pay 15% ([LibertyMundo](https://www.libertymundo.com/incorporate-in-paraguay/); MIC guide for the 10% rates).
- Electronic invoicing (SIFEN) is now mandatory for new legal entities, which have issued only e-invoices since 1 Apr 2025 (file 02, from [DNIT](https://www.dnit.gov.py/web/portal-institucional/w/dnit-designa-nuevos-facturadores-electr%C3%B3nicos)).
- Accountant: **US$500-1,500 a year** for simple compliance (one guide), or about Gs 1.0m-2.5m a month (US$175-440) for monthly IVA and IRE work (B2 estimate). No published fee was found ([LibertyMundo](https://www.libertymundo.com/incorporate-in-paraguay/); Colegio de Contadores fees unverified).
- Resident representative: about US$1,200-3,600 a year (my estimate).
- **Total: about US$4,000-7,000 a year, plus US$1,500-4,000 to set up** (my estimate). In the model variant this costs US$2,500 at month 18 plus US$350 a month.

### Middle path: local reseller

- A partner auditor or accountant buys seats at 30% off list. It invoices the dealer in Gs with 10% IVA on a local e-invoice, and collects locally.
- The partner pays us by one wire a quarter and withholds the 4.5% INR, which we accept.
- This gives dealers a local invoice without a local company, and gives the auditor a reason to sell.

## Contracts and liability

**Customer terms** (Spanish, click-through, business customers only)
- **What we are.** A software tool. Not legal advice. Not the compliance officer. Not the filer.
  - The dealer keeps every Res 196 duty, including the OC's own duties (Art. 8-10, [Res 196](https://baselegal.com.py/docs/78668570-6ae3-11eb-990a-525400c761ca), via file 01).
  - SIRO has no public API, so a person submits every filing (file 01).
- **Liability cap:** the fees paid in the last 12 months. No liability for SEPRELAD sanctions, lost profits or indirect loss, except where the law forbids a cap (my suggestion; a lawyer must check enforceability).
- **Content promise.** A Paraguayan AML lawyer reviews every template. Each template shows the article it maps to and its review date. We update templates within 30 days of a new SEPRELAD resolution, or say publicly that we cannot (my suggestion).
- **Records outlive the contract.** Records must be kept for 5 years (Res 196 Art. 20 and 32; Law 1015 Art. 18; file 01). After cancellation, offer a full export and a free read-only archive for 5 years.
- **ROS confidentiality.** Suspicious-operation work must stay confidential (file 01). Restrict ROS drafts by role, log every view, and keep them out of the auditor's read-only view.
- **The buyer's customers' data.** The tool holds car buyers' IDs and source-of-funds answers. The dealer is the controller and we are the processor. Sign a data-processing addendum from day 1. Encrypt ID images. Plan for Ley 7593/2025, which applies from about late 2027 ([Ferrere](https://ferrere.com/es/novedades/paraguay-adopta-su-ley-de-proteccion-de-datos-personales/), via file 01).
- **Governing law:** the founder's home law, with the Spanish text binding. Ask a Paraguayan lawyer whether Paraguayan law would build more trust (open question). Whether click-through acceptance is enforceable in Paraguay is (unverified).

**Partner contracts**
- **Referral:** 20% of first-year fees and 10% of renewals, paid quarterly.
- **Reseller:** 30% off list. The partner invoices locally, handles collection and the INR withholding, and may not change our terms.
- **Outsourced OC or consultant using the Estudio plan:** Circular 02/2025 allows outside advisers to prepare documents and to prepare and submit reports ([Vouga](https://www.vouga.com.py/en/la-seprelad-recuerda-plazos-y-obligaciones-de-reporte-a-los-sujetos-obligados/), via file 01). The contract must say that the adviser, not us, is responsible for what it submits.
- **Data partner** (Criterion, or Compliance Paraguay for PEPs): licence terms, update frequency, and liability for wrong matches.

**Insurance:** technology errors-and-omissions plus cyber cover, about US$1,000-2,500 a year (my estimate, unverified). The model uses US$1,500.

## Financial model

### Assumptions

Month 1 is October 2026 and month 36 is September 2029. Figures are in US dollars at Gs 5,700 = US$1. Prices are set in Gs. The model script is in the session scratchpad, not in the repo. **The main tables model vehicles as a standalone product.** A shared-engine variant follows.

| Assumption | Low | Base | High | Basis |
|---|---|---|---|---|
| Buyer pool | 845 firms paying the SIRO fee (about 30 large), plus 875 registered non-payers and about 200 new registrants a year | same | same | file 02, from [SIRO statistics](https://www.seprelad.gov.py/siro/estadisticaExterna/estadistica.xhtml) |
| Paying pilots in December 2026 (50% off year 1) | 3 | 6 | 10 | Plan |
| New paying firms, years 1 / 2 / 3 (including pilots) | 20 / 25 / 25 | 50 / 65 / 65 | 90 / 110 / 110 | My estimate |
| Active firms at month 36 as a share of the 845 payers | 6% | 17% | 31% | Output |
| Estudio practices active at months 12 / 24 / 36 | 1 / 2 / 3 | 3 / 6 / 9 | 6 / 12 / 18 | My estimate; about 138 providers exist |
| Blended yearly price per firm, years 1 / 2 / 3 (net) | Gs 0.90m / 1.00m / 1.10m | Gs 1.10m / 1.25m / 1.35m (US$193 / 219 / 237) | Gs 1.30m / 1.45m / 1.60m | Plan mix of Al día, Playa, Concesionaria, Distribuidor |
| Billing | 60% yearly prepaid; 40% monthly at a 20% premium | same | same | Price list |
| First renewal / later renewals | 55% / 75% | 70% / 85% | 80% / 90% | My estimate |
| New sales by calendar month (weight) | Jan 1.3, Feb 0.9, Mar 1.4, Apr 1.1, May 1.4, Jun 1.3, Jul 0.9, Aug 0.7, Sep 0.7, Oct 1.0, Nov 0.8, Dec 0.5 | same | same | SIRO calendar |
| Setup add-on | 15% of new firms at Gs 900,000; we keep 30% | same | same | Plan |
| Payment costs | 6% of cash in | same | same | Stripe fees above |
| INR | 4.5% of all cash in (conservative) | same | same | [Decreto 6515/2021](https://impuestospy.com/impuestos/decreto-n-6-515-21/); [RG 114/2022](https://impuestospy.com/impuestos/resolucion-general-n-114-2022/) |
| Partner commissions (20% of first-year, 10% of renewal payments) | on 25% of firms | 35% | 45% | Plan |
| Build | Founder with Claude Code and AI agents; AI tools US$300 a month for 3 months, then US$200 | same | same | Owner's plan; no hired developers |
| Hosting, e-mail, WhatsApp | US$100 / 150 / 200 a month in years 1 / 2 / 3 | same | same | My estimate |
| PEP and sanctions data | US$100 a month from January 2027 | same | same | Price not public (unverified) |
| Paraguayan lawyer | US$3,000 in months 1-2, then US$150 a month for rule-watch | same | same | My estimate (unverified) |
| Terms and data-processing terms | US$500 in month 2 | same | same | My estimate |
| Security test | US$2,500 (Nov 2026); US$2,000 in months 14 and 26 | same | same | My estimate (unverified) |
| Insurance | US$1,500 a year, paid each December | same | same | My estimate (unverified) |
| Local contractor from January 2027 (years 1 / 2 / 3, a month) | US$300 / 400 / 400 | US$400 / 600 / 800 | US$600 / 1,200 / 1,800 | Minimum wage Gs 3,044,000 = US$534 |
| Marketing (years 1 / 2 / 3) | US$4,000 / 3,000 / 3,000 | US$6,000 / 5,000 / 5,000 | US$10,000 / 10,000 / 10,000 | Plan above |
| Travel | US$1,800 in November and in March each year | same | same | My estimate |
| Foreign company (extra share) and Form 90 accountant | US$100 + US$50 a month | same | same | My estimate |
| Founder pay | None in the main tables. Variant: US$2,000 a month in year 2, US$3,000 in year 3 | | | |
| Local EAS | None in the main tables. Variant: US$2,500 at month 18, then US$350 a month | | | Company section |

"Cash in" counts yearly prepayments when received. ARR is active firms times their yearly price (monthly payers at the 20% premium), plus practice fees times 12.

### Base case by quarter (US$, no founder pay, vehicles standalone)

| Quarter | New firms | Churned | Active firms (end) | Practices (end) | Cash in | ARR (end) | Costs | Net | Cumulative |
|---|---|---|---|---|---|---|---|---|---|
| Q1 Oct-Dec 26 | 6 | 0 | 6 | 0 | 413 | 1,251 | 12,219 | -11,806 | -11,806 |
| Q2 Jan-Mar 27 | 16 | 0 | 22 | 1 | 2,427 | 5,265 | 7,309 | -4,883 | -16,689 |
| Q3 Apr-Jun 27 | 17 | 0 | 40 | 2 | 3,079 | 9,468 | 5,713 | -2,633 | -19,322 |
| Q4 Jul-Sep 27 | 10 | 0 | 50 | 3 | 2,704 | 12,253 | 4,890 | -2,185 | -21,507 |
| Q5 Oct-Dec 27 | 12 | 2 | 61 | 4 | 4,330 | 16,809 | 11,000 | -6,670 | -28,178 |
| Q6 Jan-Mar 28 | 20 | 5 | 75 | 4 | 6,668 | 20,267 | 8,401 | -1,733 | -29,911 |
| Q7 Apr-Jun 28 | 21 | 5 | 91 | 5 | 7,449 | 24,527 | 6,796 | 653 | -29,258 |
| Q8 Jul-Sep 28 | 12 | 3 | 100 | 6 | 6,161 | 27,347 | 5,952 | 209 | -29,049 |
| Q9 Oct-Dec 28 | 12 | 4 | 108 | 7 | 7,592 | 31,922 | 12,211 | -4,619 | -33,668 |
| Q10 Jan-Mar 29 | 20 | 8 | 120 | 8 | 10,644 | 35,586 | 9,708 | 937 | -32,732 |
| Q11 Apr-Jun 29 | 21 | 8 | 133 | 8 | 11,441 | 38,808 | 8,104 | 3,337 | -29,395 |
| Q12 Jul-Sep 29 | 12 | 5 | 140 | 9 | 9,223 | 41,369 | 7,127 | 2,096 | -27,299 |

Every October-December quarter loses money. It carries the security test, insurance, a trip and the slowest sales month.

### Low case by quarter (US$, no founder pay)

| Quarter | Active firms (end) | Practices | Cash in | ARR (end) | Costs | Net | Cumulative |
|---|---|---|---|---|---|---|---|
| Q1 Oct-Dec 26 | 3 | 0 | 173 | 512 | 11,792 | -11,620 | -11,620 |
| Q2 Jan-Mar 27 | 9 | 0 | 750 | 1,587 | 6,114 | -5,364 | -16,984 |
| Q3 Apr-Jun 27 | 16 | 1 | 1,010 | 3,334 | 4,416 | -3,406 | -20,390 |
| Q4 Jul-Sep 27 | 20 | 1 | 890 | 4,021 | 3,896 | -3,005 | -23,395 |
| Q5 Oct-Dec 27 | 23 | 1 | 1,330 | 5,052 | 9,517 | -8,187 | -31,582 |
| Q6 Jan-Mar 28 | 28 | 2 | 1,970 | 6,546 | 6,431 | -4,462 | -36,044 |
| Q7 Apr-Jun 28 | 33 | 2 | 2,239 | 7,478 | 4,715 | -2,476 | -38,520 |
| Q8 Jul-Sep 28 | 36 | 2 | 1,816 | 8,042 | 4,278 | -2,462 | -40,982 |
| Q9 Oct-Dec 28 | 38 | 2 | 2,218 | 9,188 | 9,783 | -7,565 | -48,547 |
| Q10 Jan-Mar 29 | 41 | 2 | 2,941 | 9,866 | 6,710 | -3,769 | -52,316 |
| Q11 Apr-Jun 29 | 45 | 3 | 3,265 | 11,194 | 4,999 | -1,734 | -54,050 |
| Q12 Jul-Sep 29 | 47 | 3 | 2,618 | 11,627 | 4,531 | -1,913 | -55,963 |

### High case by quarter (US$, no founder pay)

| Quarter | Active firms (end) | Practices | Cash in | ARR (end) | Costs | Net | Cumulative |
|---|---|---|---|---|---|---|---|
| Q1 Oct-Dec 26 | 10 | 0 | 801 | 2,463 | 13,066 | -12,266 | -12,266 |
| Q2 Jan-Mar 27 | 40 | 2 | 5,148 | 10,998 | 9,667 | -4,518 | -16,784 |
| Q3 Apr-Jun 27 | 71 | 4 | 6,526 | 19,938 | 8,273 | -1,747 | -18,531 |
| Q4 Jul-Sep 27 | 90 | 6 | 5,713 | 25,832 | 6,845 | -1,132 | -19,663 |
| Q5 Oct-Dec 27 | 109 | 8 | 8,758 | 34,853 | 14,606 | -5,848 | -25,511 |
| Q6 Jan-Mar 28 | 136 | 9 | 14,042 | 42,899 | 13,057 | 985 | -24,527 |
| Q7 Apr-Jun 28 | 165 | 10 | 15,639 | 51,357 | 11,669 | 3,971 | -20,556 |
| Q8 Jul-Sep 28 | 182 | 12 | 12,860 | 57,328 | 9,904 | 2,956 | -17,600 |
| Q9 Oct-Dec 28 | 198 | 14 | 16,280 | 68,593 | 17,689 | -1,409 | -19,009 |
| Q10 Jan-Mar 29 | 222 | 15 | 23,231 | 76,487 | 16,392 | 6,838 | -12,171 |
| Q11 Apr-Jun 29 | 247 | 16 | 25,085 | 84,785 | 15,039 | 10,046 | -2,125 |
| Q12 Jul-Sep 29 | 263 | 18 | 20,233 | 90,659 | 12,950 | 7,283 | 5,158 |

### Scenario summary (vehicles standalone)

| Measure | Low | Base | High |
|---|---|---|---|
| Active firms at month 6 / 12 / 24 / 36 | 9 / 20 / 36 / 47 | 22 / 50 / 100 / 140 | 40 / 90 / 182 / 263 |
| ARR at month 12 / 24 / 36 (US$) | 4,000 / 8,000 / 11,600 | 12,300 / 27,300 / 41,400 | 25,800 / 57,300 / 90,700 |
| ARR at month 36 in Gs | about 66m | about 236m | about 517m |
| Cash in, years 1 / 2 / 3 (US$) | 2,800 / 7,400 / 11,000 | 8,600 / 24,600 / 38,900 | 18,200 / 51,300 / 84,800 |
| Costs, years 1 / 2 / 3 (US$) | 26,200 / 24,900 / 26,000 | 30,100 / 32,200 / 37,200 | 37,900 / 49,200 / 62,100 |
| Profit before founder pay, year 3 (US$) | -15,000 | 1,800 | 22,800 |
| Operating break-even (trailing 12 months) | not within 36 months | month 34 (July 2029) | month 23 (August 2028) |
| Cumulative cash positive | no | no (-27,300 at month 36) | month 34 |
| **Peak cash need, no founder pay (US$)** | 56,000 (and still rising) | **33,700** (month 27) | 25,500 (month 15) |
| Peak cash need with founder pay (US$2,000 then 3,000 a month) | 116,000 | 87,300 | 54,800 |
| Same, plus a local EAS from month 18 | 125,100 | 96,400 | 64,000 |
| Year-1 acquisition cost per new firm (marketing, travel, half the contractor; before commissions) | about US$450 | about US$230 | about US$180 |

**Sensitivity of the standalone base case** (my model)

| Change | ARR month 36 | Year-3 profit | Peak cash need | Cumulative at month 36 |
|---|---|---|---|---|
| Base | US$41,400 | US$1,800 | US$33,700 | -US$27,300 |
| Guaraní weakens to Gs 7,000 = US$1 | US$33,700 | -US$4,400 | US$40,800 | -US$38,600 |
| Prices 25% higher, same volumes | US$51,700 | US$9,900 | US$25,900 | -US$12,300 |
| First renewal 60% instead of 70% | US$38,600 | -US$400 | US$34,800 | -US$30,200 |
| No local contractor (founder does WhatsApp support) | US$41,400 | US$11,400 | US$22,800 | -US$6,900 |
| INR only 1.5% of cash (most buyers pay in full) | US$41,400 | US$2,900 | US$32,400 | -US$25,100 |

### Shared-engine variant: vehicles as a module on the B2 engine

Same sales as above. Only the extra costs of the vehicle edition are counted:
- US$1,500 of lawyer time for the Res 196 templates, then US$50 a month;
- 40% of a contractor (US$300 / 400 / 500 a month);
- two-thirds of the marketing budget, and US$400 trips;
- US$50 a month of extra PEP data and US$30 of hosting;
- payment costs, INR and commissions as before.

The engine, security tests, insurance, AI tools and company costs are carried by the B2 plan.

| Measure (US$) | Low | Base | High |
|---|---|---|---|
| Contribution, years 1 / 2 / 3 | -6,600 / -2,900 / -900 | -3,100 / +10,200 / +21,300 | +1,800 / +28,700 / +56,000 |
| Peak cash need of the module | 10,600 | **3,400** | 3,000 |
| Cumulative at month 36 | -10,300 | **+28,500** | +86,500 |
| Trailing-12-month break-even | never | month 15 | month 12 |

Note: B2's model already counts car dealers in its 2,300-firm pool, from about month 7 ([B2 file 04](../paraguay-b2/04-gtm-company-finance.md)). Do not add the two models together. This file shows what the vehicle vertical can bring if it gets its own sales effort from day 1.

**Unit economics, base (my estimate)**
- Revenue per firm is about US$193-284 a year, depending on year and billing.
- Acquisition cost is about US$230 plus about US$15 of commission. Gross margin is about 80% after payment costs, INR, hosting and data. So payback is about 15-18 months.
- With 70% first renewal and 85% later, a firm pays for about 3.2 years out of the first 5. It is worth about US$600 of gross profit over 5 years. LTV/CAC is about 2.5.

**What the numbers mean**
- **Standalone vehicles do not pay a founder.** The base case only reaches break-even in month 34. Cash need is modest (plan US$45,000 to allow for a slow year or a weaker guaraní), but the reward is small.
- **As a module, vehicles are clearly worth adding.** The base module recovers its costs by month 15 and adds about US$21,000 a year by year 3.
- **The biggest levers** are dropping the local contractor (+US$9,600 of year-3 profit), price (+25% adds US$8,100), and currency (Gs 7,000 removes US$6,200).
- **The low case shows itself early.** By March 2027 it has about 9 firms against a base of about 22.

## Regional expansion

The core travels well: a sales and KYC log, cash thresholds, list checks with a log, a deadline calendar, templates and an auditor export. Each country needs its own rulebook, report formats and list sources (file 02).

| Order | Market | Why | Size signal | What changes | Timing |
|---|---|---|---|---|---|
| 1 | **Paraguay real estate** (the B2 dive), then jewellers and pawnshops | Same SEPRELAD, same SIRO | Real estate 2,233 registered and 1,451 paying; jewellers 189; pawnshops 31 (file 02) | Different thresholds (150 minimum wages for real estate) and templates ([B2 file 01](../paraguay-b2/01-law-and-requirements.md)) | In parallel from day 1 (shared engine) |
| 2 | **Ecuador** | US-dollar economy; real fines; car dealers are UAFE-obliged | **542 car dealers** and 4,446 real-estate and construction firms under the UAFE ([UAFE 2025 report](https://www.uafe.gob.ec/wp-content/uploads/downloads/2026/rendicion_cuentas/Informe_de_RC_publicado_en_pag_web.pdf), via file 02). New-car sales hit a record 15,281 in August 2026 ([Teleamazonas](https://www.teleamazonas.com/actualidad/noticias/economia/venta-vehiculos-ecuador-rompe-record-agosto-2026-127216/)) | New ROS, "no ROS" and early-alert rules: Res UAFE-DG-2026-0007, in force 29 Apr 2026, with a 5-day ROS deadline ([NMS Law](https://nmslaw.com.ec/blog/2026/05/11/ecuador-uafe-nuevas-directrices-reporte-operaciones-alertas/)). 15% IVA on imported digital services, withheld by card issuers if the provider is not registered (from the B2 dive). Local rivals not checked (unverified) | Prepare from month 15; launch about months 20-24 |
| 3 | **Peru** | Vehicle trading is listed among UIF-Perú obliged firms (file 02; detail unverified) | Count not found | New rulebook | Year 3+, only if Ecuador works |
| - | Argentina, Mexico, Colombia | Dealers are obliged, but local vendors exist (AMLify, Pirani and others) | Large | Crowded and price-sensitive | Skip for now |
| - | Uruguay, Bolivia | Car dealers not confirmed as obliged; Uruguay is crowded | Small | - | Skip |

## Exit and partnerships

**Partnerships to start in year 1**
- **Audit practices and accountants:** the main channel (see Go-to-market).
- **Criterion S.A.:** joint webinars (it co-organised SEPRELAD's vehicle training, [SEPRELAD](https://www.seprelad.gov.py/?p=4381), and a real-estate webinar in June 2026, from the B2 dive). Also a bureau-report feed for full checks ([Criterion](https://www.criterion.com.py/index.php?pag=comprar)).
- **E-invoicing vendors** (FactPy, Sifende): a sales-data feed for the RO log.
- **Compliance Paraguay:** a PEP data licence ([La Nación, Aug 2024](https://www.lanacion.com.py/negocios/2024/08/13/consultora-presenta-herramienta-que-identifica-a-personas-expuestas-politicamente/)).

**Likely buyers**
- **Devsys** (Uruguay). It already serves Grupo Condor, a Paraguayan Mercedes-Benz distributor, but has no SEPRELAD filing layer ([Devsys clients](https://www.devsys.com.uy/clientes.html)).
- **Pirani** (Colombia). It has a SEPRELAD page but no SIRO workflow ([Pirani](https://www.piranirisk.com/es/hub-regulatorio/seprelad-prevencion-lavado-dinero-paraguay-siro)).
- **Criterion S.A.**, a mid-size audit firm, or a Paraguayan e-invoicing vendor wanting a compliance add-on (inference).

**Valuation**
- Small SaaS businesses usually sell at about 2-4 times owner profit; one analysis puts the Acquire.com median at 3.9x ([Livmo](https://livmo.com/blog/micro-saas-valuation/); [BigIdeasDB](https://bigideasdb.com/state-of-saas-valuations-2026), from the B2 dive).
- **Standalone base case:** about US$2,000 of year-3 profit, so it has almost no sale value alone. A strategic buyer might pay about 1-2 times revenue (US$40,000-80,000) for the customer list and SIRO know-how (my estimate).
- **High case:** about US$23,000 of profit and US$91,000 ARR, so about US$70,000-180,000 (my estimate).
- **The realistic exit is the combined SEPRELAD engine** (B2 plus vehicles, perhaps Ecuador), sold or licensed to Devsys, Pirani or Criterion.

## Risks and mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| **Low willingness to pay.** Warnings are common, fines rare (one in 2025) | High | High | Sell hours saved on the RO and "audit-ready", not fear. Al día at Gs 49,000 as the entry plan. Test price at Gate 1 |
| **SEPRELAD absorbs features.** A vehicle risk-matrix module pre-filled from RO data is in development; JSON upload exists for large filers (file 01) | Medium | High | Focus on what SIRO will not hold: the sales and KYC log, screening log, documents, alert register and audit evidence. Import SEPRELAD outputs rather than compete |
| **RO JSON not open to vehicle firms**, or SIRO fields change | Medium | Medium | Build a web-entry checklist first; version the RO schema; ask SEPRELAD early (week 1) |
| **Tax grey zone on individual buyers** (RG 114/2022) | High | Low | Register by e-mail and pay 4.5%; model already includes it; get written advice |
| **Audit exemption (Res 328/2026)** shrinks the audit channel for small lots | Medium | Medium | Turn the request into an Al día feature; keep a direct self-serve route |
| **Card checkout loses cash-oriented owners** | Medium | Medium | Reseller route with local invoice; dLocal or a local EAS later |
| **Guaraní weakens** (Gs 7,000 cuts base year-3 profit by about US$6,200) | Medium | Medium | Keep costs variable; review Gs prices each January; price Distribuidor and Estudio in US$ if needed |
| **Template liability** after a sanction | Low | Medium | Lawyer-reviewed, dated templates; "tool, not advice" terms; 12-month fee cap; insurance |
| **Breach of car buyers' ID data or ROS drafts** | Low | High | Security test before launch and yearly; encryption; role limits; access log; data-processing addendum |
| **Criterion or Devsys builds the same** | Medium | Medium | Partner with Criterion early; lock in auditors; move first on SIRO-specific features |
| **Association conflict** (CADAM against used-car importers) | Medium | Low | Keep two separate tracks; no joint branding |
| **Founder distance** from owner-run lots outside Asunción | High | Medium | WhatsApp-first support; a Guaraní-speaking contractor; two trips a year |
| **Small ceiling** (845 paying firms) | Certain | High | Build as a module of one SEPRELAD engine; Ecuador later |

## Milestones and kill criteria

| Date | Milestone | Kill or pivot if |
|---|---|---|
| **Tue 10 Nov 2026 (day 30)** | Gate 1: 18 interviews done; MVP working | Fewer than 6 of 12 vehicle firms would pay Gs 99,000 a month, **or** fewer than 2 auditors with vehicle clients will pilot, **or** fewer than half of the firms report more than 30 operations a quarter. Pivot: fold vehicles into B2 as a later module, or stop |
| **Thu 10 Dec 2026 (day 60)** | Gate 2: public launch; at least 5 paying vehicle pilots; security test passed; templates signed off | Fewer than 3 paying pilots |
| **Sat 9 Jan 2027 (day 90)** | Gate 3: at least 6 paying vehicle firms; at least 1 active partner practice; pilots used the tool for the January RO | Fewer than 4 paying firms, or pilots did not use it for the RO |
| **31 Mar 2027 (month 6)** | 20+ paying vehicle firms (base is about 22) | Fewer than 10 (the low case). Stop vehicle-specific spending |
| **30 Jun 2027 (month 9)** | 35+ firms after the audit deadline; 2+ practices | Fewer than 15 |
| **Sep 2027 (month 12)** | About 50 firms; ARR about US$12,000; Ecuador decision | Fewer than 25 firms |
| **Dec 2027-Mar 2028** | At least 65% of first-year firms renew | First renewal below 55% |
| **Sep 2028 (month 24)** | About 100 firms; ARR about US$27,000 | ARR below US$15,000: keep only as a light module |
| **Sep 2029 (month 36)** | About 140 firms; ARR about US$41,000 (standalone base); Ecuador live | Combined SEPRELAD-engine ARR below US$40,000 |

## Open questions

- **Auditors' prices.** What does a registered auditor charge a small lot for the yearly audit? No price was found in three searches. Ask 6 auditors in week 2.
- **RO by JSON.** Can vehicle firms send the RO as a JSON file, and what are the current vehicle RO fields? Ask SEPRELAD in week 1.
- **Tax adviser questions:**
  1. Is an individual lot owner, or an IRE SIMPLE firm, a "consumidor final" under RG 114/2022?
  2. How exactly does a general-regime buyer account for IVA on a foreign SaaS paid by card?
  3. Is the buyer's expense deductible if INR was not withheld?
  4. Does a treaty-country company escape the 4.5%?
- **Cards.** Do Paraguayan debit cards and small-business credit cards work with a foreign Stripe account charging in PYG? Test with 5 pilots.
- **Which firms are general-regime?** What share of the 845 paying firms is general-regime IRE? This sets the withholding share.
- **Criterion.** Will it partner (webinars, bureau feed), or build its own tool?
- **Associations.** Who leads CIVU and Civemup today, and how many members do they have? Does CADAM have a compliance committee?
- **The Gs 2bn line.** What is the average used-car price? It decides how many lots pass the IRE SIMPLE ceiling.
- **Official EAS fees.** What are SUACE's official EAS fees in 2026, and what does a resident legal representative cost?
- **SIRO data confirmation.** When will the yearly SIRO data confirmation (Res 435/2026) reach vehicle firms?

## Sources

**Official (Paraguay)**
- SEPRELAD Res 328/2026 (scan, read page by page; amends Art. 14 of Res 196/20 and 201/20): https://www.seprelad.gov.py/resoluciones/resoluciones/Res.%20328.26_Excepci%C3%B3n%20de%20auditor%C3%ADa%20externa.pdf
- SEPRELAD, vehicle-sector training with Criterion S.A., 16 Sep 2026: https://www.seprelad.gov.py/?p=4381
- SEPRELAD Memoria 2025: https://www.seprelad.gov.py/wp-content/uploads/2026/02/Memoria-Anual-de-Gestion-Ano-2025.pdf
- SEPRELAD Memoria 2024: https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf
- SEPRELAD SIRO statistics: https://www.seprelad.gov.py/siro/estadisticaExterna/estadistica.xhtml
- SEPRELAD register and auditor lookup: https://www.seprelad.gov.py/siro/consultaExterna/consultaExternaSoAe.xhtml
- SEPRELAD canon notice (Res 56/2026): https://www.seprelad.gov.py/?p=4035 ; Res 48/2025: https://www.seprelad.gov.py/userfiles/files/resoluciones/resolucion-n48-2025-canon-anual-2025.pdf
- SEPRELAD notices: https://www.seprelad.gov.py/?p=4412 ; trainings: https://www.seprelad.gov.py/?cat=35
- SEPRELAD vehicle-sector risk study: https://www.seprelad.gov.py/documentos/gu-a-de-riesgos-de-la-ft-del-sector-automotor.pdf
- Res 196/2020 (Base Legal): https://baselegal.com.py/docs/78668570-6ae3-11eb-990a-525400c761ca
- Decreto 6515/2021 (INR on digital services), text at impuestospy: https://impuestospy.com/impuestos/decreto-n-6-515-21/
- RG 114/2022 (registration and monthly INR for non-resident digital providers to final consumers), text at impuestospy: https://impuestospy.com/impuestos/resolucion-general-n-114-2022/ ; DNIT page: https://www.dnit.gov.py/web/portal-institucional/w/resolucion-general-n-114-22
- DNIT, consultation on paying foreign providers (older law): https://www.dnit.gov.py/web/portal-institucional/w/retencion-a-proveedores-del-exterior-
- DNIT, new Chile treaty: https://www.dnit.gov.py/web/portal-institucional/w/nuevo-convenio-fortalece-la-cooperaci%C3%B3n-tributaria-entre-paraguay-y-chile
- DNIT, e-invoicing designations: https://www.dnit.gov.py/web/portal-institucional/w/dnit-designa-nuevos-facturadores-electr%C3%B3nicos
- MIC / SUACE, guide for foreign investors (2025): https://www.mic.gov.py/wp-content/uploads/2025/06/GUIA-PARA-INVERSIONISTAS-EXTRANJEROS.pdf
- MIC / SUACE presentation with fee table (2018): https://mic.gov.py/wp-content/uploads/2024/12/PRESENTACION-SUACE.pdf
- BCP reference rates: https://www.bcp.gov.py/webapps/web/cotizacion/monedas

**Payments**
- Stripe supported currencies: https://docs.stripe.com/currencies
- Stripe Ireland pricing (fetched 10 Oct 2026): https://stripe.com/ie/pricing
- Stripe US pricing: https://stripe.com/us/pricing
- Paddle supported countries: https://developer.paddle.com/concepts/sell/supported-countries-locales ; tax countries: https://www.paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for ; pricing: https://www.paddle.com/pricing
- Lemon Squeezy supported countries (fetched): https://docs.lemonsqueezy.com/help/getting-started/supported-countries
- dLocal Paraguay: https://docs.dlocal.com/docs/paraguay ; https://www.dlocal.com/payment-processors-in-latin-america/paraguay-payment-methods-processors-e-commerce-market-dlocal/
- Wise on Itaú Paraguay wires: https://wise.com/py/blog/transferencia-internacional-itau-paraguay
- InfoNegocios, cards and QR in Paraguay: https://infonegocios.com.py/y-ademas/asi-pagan-los-paraguayos-qr-y-billeteras-digitales-alcanzaran-cerca-de-200-millones-de-transacciones-este-ano
- ABC Color, card transactions (Aug 2026): https://www.abc.com.py/negocios/2026/08/03/boom-del-tarjeteo-se-procesan-21-transacciones-por-segundo-en-paraguay/

**Tax and legal commentary**
- dplnews, banks and card processors as IVA agents: https://dplnews.com/paraguay-servicios-digitales-agentes-de-retencion-son-los-bancos-y-operadoras-de-tarjetas-de-credito/
- ABC Color on IVA and INR on digital services: https://www.abc.com.py/edicion-impresa/economia/gravaran-los-servicios-digitales-con-iva-y-renta-a-no-residentes-1815155.html
- abogados.com.ar on the RG 114/2022 change: https://abogados.com.ar/la-administracion-tributaria-paraguaya-modifica-el-registro-de-proveedores-no-residentes-de-servicios-digitales/30241
- EY Paraguay tax alert (Apr 2022): https://ey.com/content/dam/ey-unified-site/ey-com/es-py/technical/tax/documents/tax-alert-abril-2022.pdf
- IRE SIMPLE and RESIMPLE thresholds (secondary): https://beancount.io/blog/2026/09/23/paraguay-ire-simple-vs-general-sole-proprietor-tax-regime-guide ; https://yo-facturo.com/blog/persona-fisica-ruc-obligaciones-paraguay/
- Vouga on Circular 02/2025: https://www.vouga.com.py/en/la-seprelad-recuerda-plazos-y-obligaciones-de-reporte-a-los-sujetos-obligados/
- Ferrere on Ley 7593/2025: https://ferrere.com/es/novedades/paraguay-adopta-su-ley-de-proteccion-de-datos-personales/
- LibertyMundo, incorporating in Paraguay (2026): https://www.libertymundo.com/incorporate-in-paraguay/
- Golden Harbors, starting a business in Paraguay: https://goldenharbors.com/articles/start-business-in-paraguay
- Cazvid, accountant pay: https://cazvid.com/es/blog/cuanto-gana-un-contador-en-paraguay

**Market, channels, competitors**
- Best Practices course: https://bestpractices.com.py/curso-taller-administracion-de-riesgos-ldft/
- Criterion prices: https://www.criterion.com.py/index.php?pag=comprar
- FactPy: https://factpy.com/
- Clasipar compliance-officer ad: https://clasipar.paraguay.com/motor/otros-rodados/servicio-de-oficial-de-cumplimiento-seprelad-1924578
- Cáceres & Schneider: https://consultoria.com.py/prevencion-del-lavado-de-dinero-seprelad/ ; https://consultoria.com.py/caceres-schneider-informe-de-cumplimiento-seprelad-plazos-para-entrega/
- Gestión Contable course: https://gestioncontableparaguay.com/courses/curso-seprelad-6-hs-de-estudio/
- FOTRIEM diploma: https://www.fotriem.edu.py/diplomado-en-prevencion-de-lavado-de-activos-y-financiacion-del-terrorismo-ft-fp/
- Devsys clients: https://www.devsys.com.uy/clientes.html
- Pirani SEPRELAD page: https://www.piranirisk.com/es/hub-regulatorio/seprelad-prevencion-lavado-dinero-paraguay-siro
- La Nación on Compliance Paraguay: https://www.lanacion.com.py/negocios/2024/08/13/consultora-presenta-herramienta-que-identifica-a-personas-expuestas-politicamente/
- InfoNegocios, Expo Feria CADAM 2026: https://infonegocios.com.py/amp/infobrand/seguridad-seguros-acompana-la-expo-feria-cadam-2026-como-aseguradora-oficial-por-mas-de-dos-decadas-consecutivas
- InfoNegocios, CADAM 2025 sales and 2026 outlook: https://infonegocios.com.py/default/mercado-automotor-acelera-proyectan-hasta-10-mas-importaciones-y-tercer-ano-de-recuperacion
- Última Hora, CADAM on used cars: https://www.ultimahora.com/cadam-autos-usados-tenemos-que-dejar-ser-el-basurero-del-mundo-n2829808
- Infobae, minimum wage 2026: https://www.infobae.com/america/america-latina/2026/06/18/el-presidente-de-paraguay-reajusto-un-5-el-salario-minimo-supero-a-la-inflacion-y-alcanzara-los-usd-500/
- Ad benchmarks (global): https://adwave.com/resources/facebook-ad-costs ; https://adsuploader.com/es/blog/instagram-ads-cost
- Valuation: https://livmo.com/blog/micro-saas-valuation/ ; https://bigideasdb.com/state-of-saas-valuations-2026

**Regional**
- UAFE 2025 report: https://www.uafe.gob.ec/wp-content/uploads/downloads/2026/rendicion_cuentas/Informe_de_RC_publicado_en_pag_web.pdf
- NMS Law on Res UAFE-DG-2026-0007: https://nmslaw.com.ec/blog/2026/05/11/ecuador-uafe-nuevas-directrices-reporte-operaciones-alertas/
- Teleamazonas, Ecuador car sales Aug 2026: https://www.teleamazonas.com/actualidad/noticias/economia/venta-vehiculos-ecuador-rompe-record-agosto-2026-127216/

**Sibling files used**
- [01-law-and-requirements.md](01-law-and-requirements.md), [02-market-and-competition.md](02-market-and-competition.md), [B2 file 04](../paraguay-b2/04-gtm-company-finance.md), [B2 PLAN](../paraguay-b2/PLAN.md)
