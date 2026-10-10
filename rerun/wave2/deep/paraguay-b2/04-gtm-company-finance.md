# Paraguay SEPRELAD compliance pack: go-to-market, payments, company setup and financials (deep dive 04)

Date: 10 October 2026. Builds on [the B2 report](../reports/paraguay-b2.md), [01-law-and-requirements.md](01-law-and-requirements.md) and [02-market-and-competition.md](02-market-and-competition.md). Status: in progress; sections still marked "(pending)" are not written yet.

**Money.** Prices are in guaraníes (Gs). The Central Bank's reference rate on Friday 9 October 2026 was **Gs 5,694 per US$** and Gs 6,375 per euro ([BCP daily reference rates](https://www.bcp.gov.py/webapps/web/cotizacion/monedas)). I use **Gs 5,700 = US$1**. Note: the B2 report and file 02 used about Gs 7,300 = US$1, worked back from fee totals. That rate is out of date: the guaraní has strengthened a lot since early 2025, when the dollar traded above Gs 8,000 ([ABC Color, Apr 2025](https://www.abc.com.py/economia/2025/04/03/cotizacion-del-dolar-sigue-escalando/), search snippet). So the SEPRELAD canon of about Gs 329,000 is about **US$58**, not US$45. "Net" means before Paraguayan VAT (IVA, 10%). "My estimate" marks a planning assumption, not a sourced fact.

## Summary
(pending)

## Pricing and packaging

### What buyers already pay (anchors)

| Item | Price (Gs) | About US$ | Source |
|---|---|---|---|
| SEPRELAD annual canon, real estate | about 329,000-333,000 a year | 58 | [SEPRELAD statistics portal](https://www.seprelad.gov.py/siro/estadisticaExterna/estadistica.xhtml) (Gs 476.7m / 1,451 firms in 2025), via [file 02](02-market-and-competition.md) |
| SEPRELAD registration fee (one-off) | about 322,000 | 56 | same portal, via file 02 |
| Late canon surcharge | 2% a month after 30 June | - | [Perspectivas](https://perspectivas.com.py/noticias/bancos-financieras-inmobiliarias-y-casas-de-cambio-tienen-plazo-hasta-el-30-de-junio-para-pagar-su-cuota-al-sistema-antilavado) |
| Online SEPRELAD course for accountants (6 hours) | 150,000 | 26 | [Gestión Contable](https://gestioncontableparaguay.com/courses/curso-seprelad-6-hs-de-estudio/) |
| Online AML risk workshop for "other obligated subjects" | 800,000 a person (600,000 each for 2+) | 140 | [Best Practices](https://bestpractices.com.py/curso-taller-administracion-de-riesgos-ldft/) |
| Regional list-search tool (Uruguay) | from US$10 + tax, prepaid | 10 | [HADA](https://hada.com.uy/) |
| Pirani AML (Colombia) | free plan (200 records, 5 users); paid prices only at checkout | - | [Pirani AML plans](https://www.piranirisk.com/es/planes-y-precios/aml) |
| Devsys Cumplo360 (Uruguay), used by a Paraguayan real-estate firm | not published | - | [Devsys clients](https://www.devsys.com.uy/clientes.html) |
| Annual external AML audit by a SEPRELAD-registered auditor | not published (unverified) | - | [Cáceres & Schneider](https://consultoria.com.py/caceres-schneider-informe-de-cumplimiento-seprelad-plazos-para-entrega/) |
| Monthly minimum wage, from 1 July 2026 | 3,044,000 | 534 | [Decreto 6225/2026](https://impuestospy.com/impuestos/decreto-n-6225-2026/) |
| Bookkeeping assistant / staff accountant, monthly pay (2026) | 3.0m-6.0m / 3.6m-10.9m | 525-1,050 / 630-1,910 | [Cazvid, assistant](https://cazvid.com/es/blog/cuanto-gana-un-auxiliar-contable-en-paraguay); [Cazvid, accountant](https://cazvid.com/es/blog/cuanto-gana-un-contador-en-paraguay) |
| Legal maximum fine for a firm | 5,000 minimum wages (about Gs 15.2bn) | - | [01-law-and-requirements.md](01-law-and-requirements.md), from Ley 1015/97 art. 24 |

What the anchors say:
- The visible prices are low. The state fee is about US$58 a year, courses cost US$26-140, and list search starts at US$10.
- The real cost today is staff time and the yearly audit. Only about 1 in 3 paying real-estate firms filed an external audit report in 2025 (file 02, from the [statistics portal](https://www.seprelad.gov.py/siro/estadisticaExterna/estadistica.xhtml)).
- Fines are rare: one fine across all SEPRELAD sectors in 2025 (same portal). The real threat is a warning note that goes on SEPRELAD's register and weighs in any later sanction ([01-law-and-requirements.md](01-law-and-requirements.md)). Price must sell time saved and "audit-ready", not fear.
- Agents earn 5-6% commission on a sale ([SEPRELAD real-estate risk guide, 2021](https://www.seprelad.gov.py/userfiles/files/Guia_de_Riesgos_LA_FT_Sector_Inmobiliario.pdf), via file 02). One mid-size sale pays for many years of the tool (my estimate).

### Proposed plans

All prices are net, in guaraníes, billed by card. Yearly prepay gets two months free. Prices are set in Gs because Stripe can charge in PYG ([Stripe currencies](https://docs.stripe.com/currencies)), and a Gs price is easy to compare with the canon.

| Plan | Who | What it includes | Monthly | Yearly (prepaid) | About US$ a year |
|---|---|---|---|---|---|
| **Al día** (basic) | Small or inactive firms that just want to stay off the warning list | Deadline calendar for every SIRO duty (negative report, operations report, internal-control report, Annual Form, external audit, canon, yearly SIRO data check); WhatsApp and e-mail reminders; operations-report Excel file built from a simple deal list; Annual Form worksheet; a vault for SIRO receipts. 1 tax ID (RUC), 1 user. | 49,000 | 490,000 | 86 |
| **Legajo listo** (full, the main plan) | Agencies, brokers and developers that buy an audit or got a warning | Everything in Al día, plus: client and deal register with the KYC thresholds; a phone link the client fills in himself; UN and national list checks with a log; PEP check through a data partner (fair use); risk self-assessment wizard; manual, code of ethics and compliance-officer appointment generators; training log; alert register; internal-control report generator; an audit-ready export; 5-year archive. 3 users. | 149,000 | 1,490,000 | 261 |
| **Grupo** | Developers and groups with several companies | Legajo listo for up to 3 RUCs, 10 users, bulk import, ongoing re-screening, priority support | - | 2,990,000 | 525 |
| **Estudio** (practice plan) | Registered auditors, accountants, consultants acting as outsourced compliance officer | Multi-client dashboard; free read-only access to any client that subscribes; audit-sample tool; audit-report template; 3 managed client RUCs included; more managed clients at Gs 99,000 a month each (Legajo listo features, about 33% off) | 290,000 base | 2,900,000 base | 509 |
| **Automotores** (from month 7) | Car dealers (Res 196/2020) | Legajo listo adapted for dealers: 15-minimum-wage single-payment threshold, trade-in rule, mobile KYC link for buyers | 99,000 | 990,000 | 174 |

The thresholds and the rules behind each feature are in [01-law-and-requirements.md](01-law-and-requirements.md). The car-dealer threshold differs from real estate (15 versus 150 minimum wages for a single payment) (same file).

**Add-ons (delivered by partners, we keep 30%)**
- **Implementación asistida:** setup of the file, first risk assessment and manual with a partner consultant. Gs 900,000 one-off (about US$158) (my estimate).
- **Revisión pre-auditoría:** a partner auditor checks the file before the yearly audit. Gs 1,500,000 (about US$263) (my estimate).
- **PEP and sanctions data beyond fair use:** passed through at cost plus margin. The data price from Compliance Paraguay or a global vendor is not public (unverified) ([La Nación, Aug 2024](https://www.lanacion.com.py/negocios/2024/08/13/consultora-presenta-herramienta-que-identifica-a-personas-expuestas-politicamente/); [theKYB](https://thekyb.com/our-data/paraguay/)).

**Launch offers**
- The first 15 firms (December 2026 to January 2027) get 50% off the first year in exchange for feedback and a testimonial.
- Founding customers keep their price for two years.
- ACIP members get 15% off (see Go-to-market).

**Why these numbers (my estimate; test in interviews)**
- Legajo listo at Gs 1.49m a year is about 4.5 times the canon and about half of one month's minimum wage. It is a few days of a bookkeeping assistant's time a year.
- File 02 suggested Gs 1.5m-2.5m a year for the full plan and Gs 50,000-100,000 a month for a basic plan ([02-market-and-competition.md](02-market-and-competition.md)). I set the full plan at the low end because owner-run firms are price-sensitive and Pirani has a free tier.
- The Estudio plan is the channel lever. An auditor with 10 managed clients pays Gs 290,000 + 7 × 99,000 = Gs 983,000 a month (about US$172). The auditor can fold that into the audit fee.
- Expected blended revenue per paying firm: about Gs 1.2m a year in year 1, rising to Gs 1.4m in year 3 as the mix shifts to Legajo listo and Grupo (my estimate; used in the financial model).

### IVA (VAT) treatment of the price

- **Sold from the founder's foreign company (recommended start):** the price is shown net. We do not add Paraguayan IVA, and Paddle does not collect it either (see Payments). A buyer under the general corporate income tax regime (IRE general) accounts for the IVA on a foreign service itself and can use it as a credit, so it nets to zero for them ([DNIT criterion on payments to foreign providers](https://www.dnit.gov.py/web/portal-institucional/w/retencion-a-proveedores-del-exterior-); [EY tax alert, Apr 2022](https://ey.com/content/dam/ey-unified-site/ey-com/es-py/technical/tax/documents/tax-alert-abril-2022.pdf); [PayPro Global Paraguay guide](https://payproglobal.com/es/impuesto-de-ventas-saas/paraguay/)). The exact form and procedure need a Paraguayan tax adviser (unverified).
- **The same buyer must also withhold non-resident income tax (INR).** For digital services the rate is 15% on a deemed income of 30% of the price net of IVA, so **4.5% of the net price** ([Decreto 6515/2021, art. 7 and 9](https://impuestospy.com/impuestos/decreto-n-6-515-21/); [Ferrere, Apr 2021](https://ferrere.com/es/novedades/newsletter-retenciones-de-impuestos-por-servicios-digitales-en-paraguay/)). Plan: absorb it. If a buyer withholds, accept 95.5% and treat the gap as a discount.
- **Sold through a local reseller or a future local company:** the price plus 10% IVA on a Paraguayan electronic invoice. Legajo listo would then cost Gs 1,639,000 a year including IVA (my calculation).
- Suggested wording on the price page (Spanish): "Precios en guaraníes, sin IVA. Si su empresa es contribuyente del IRE general, puede corresponderle retener IVA e INR al pagar a un proveedor del exterior. Si necesita factura electrónica local, compre a través de un socio."

## Go-to-market

### Selling seasons and deadlines

The SIRO calendar is the selling calendar. Dates come from SEPRELAD Circular 2/2025, Res 326/2022 and Res 003/2025, as summarised in [01-law-and-requirements.md](01-law-and-requirements.md).

| When | Duty | Selling use |
|---|---|---|
| From 5 Oct 2026, then yearly | SIRO data-update form for real estate ([SEPRELAD, 2 Oct 2026](https://www.seprelad.gov.py/?p=4412)); yearly data confirmation under Res 435/2026 | First hook: a free guide and checklist now |
| Days 1-10 of Jan, Apr, Jul, Oct | Negative report (RN) for a quarter with no suspicious-transaction report | Quarterly reminder; low-price plan |
| Days 11-20 of Jan, Apr, Jul, Oct | Operations report (RO) of all property deals | Excel file generator; re-keying pain |
| **30 March** | Internal-control (CI) report for the past year | Main season starts: CI report generator |
| **31 May** | Annual Form (FA) | Worksheet; SEPRELAD runs webinars in April ([SEPRELAD, 8 Apr 2026](https://www.seprelad.gov.py/?p=3859)) |
| **30 June** | External audit (AE) report; canon payment; deadline to ask for an audit exemption or deferral under Res 328/2026 | Auditors' busy season; audit-ready export; exemption-request workflow |
| Every 2 years | Risk self-assessment | Renewal and upsell hook |

What this means:
- **Peak season is January to June.** It runs from the January RN/RO window through the CI (30 March), FA (31 May) and AE and canon (30 June) deadlines. Auditors do most fieldwork before 30 June (my inference). So sign them up in February and March.
- **July to December is quieter.** Use it for building, partner deals, the car-dealer version and renewals. The October RO window and the yearly SIRO data check give two smaller hooks.
- **Late December to mid-January is holiday time** (my estimate), but the January RN and RO deadlines still force action. Launch before that window, not during it.
- **Res 328/2026 is a risk to the audit channel.** Inactive or very small firms can now ask to skip or defer the audit for a year ([Res 328/2026](https://www.seprelad.gov.py/resoluciones/resoluciones/Res.%20328.26_Excepci%C3%B3n%20de%20auditor%C3%ADa%20externa.pdf), via file 01). Our exemption-request workflow turns this into a feature for the Al día plan.

### Channels, in priority order

1. **SEPRELAD-registered external auditors (about 140 practices, 182 registered people).** Every firm that complies must buy their yearly report, and messy client files cost them time (file 02, from the [auditor export](https://www.seprelad.gov.py/siro/consultaExterna/consultaExternaSoAe.xhtml)). Offer the Estudio plan plus a referral fee of 20% of the first year and 10% of renewals when the client pays directly. Start with 5-8 mid-size practices with many real-estate clients. Cáceres & Schneider already markets the SEPRELAD report to real-estate firms ([Cáceres & Schneider](https://consultoria.com.py/caceres-schneider-informe-de-cumplimiento-seprelad-plazos-para-entrega/)).
2. **Direct outreach from the public SEPRELAD register.** It lists 2,233 real-estate subjects and 1,719 car dealers, with name, RUC, sector and department (file 02, from the [register lookup](https://www.seprelad.gov.py/siro/consultaExterna/consultaExternaSoAe.xhtml)). Contact companies first (RUC starting "80"). Use WhatsApp and e-mail with a free "SEPRELAD traffic-light" self-check. The new data-protection law (Ley 7593/2025) takes effect around November 2027 ([Ferrere](https://ferrere.com/es/novedades/paraguay-adopta-su-ley-de-proteccion-de-datos-personales/)). Get legal advice before using the 474 individuals on the list for marketing.
3. **Accountants and training providers.** Accountants keep the books of small agencies and dealers. The Gestión Contable SEPRELAD course has 894 enrolments ([Gestión Contable](https://gestioncontableparaguay.com/courses/curso-seprelad-6-hs-de-estudio/)). Best Practices runs paid AML workshops ([Best Practices](https://bestpractices.com.py/curso-taller-administracion-de-riesgos-ldft/)). Offer "course plus 3 months of the tool" bundles and a referral fee. The Colegio de Contadores runs training events ([Última Hora, Jul 2026](https://www.ultimahora.com/contadores-conmemoraron-110-anos-y-anunciaron-triple-evento-de-capacitacion)).
4. **ACIP (brokers' association, about 90 agencies, 1,000+ agents).** Ask for an endorsement and a 15% member discount. Propose a collective code of ethics, which Res 201/2020 allows trade associations to adopt ([Ferrere EN](https://ferrere.com/en/news/new-regulations-for-the-prevention-of-asset-laundering-and-financing-of-terrorism-for-companies-and-individuals-involved-in-the/); [Infonegocios on ACIP](https://infonegocios.com.py/default/mercado-inmobiliario-en-transformacion-acip-impulsa-ley-de-corretaje-y-modernizacion-digital-en-el-sector)). ACIP holds Agent Day on 12 August (same source).
5. **Content and paid search around deadlines.** Free tools: an .ics deadline calendar, a KYC-threshold calculator at the current minimum wage, an RO Excel checker, and short Spanish videos. Run Google and Meta ads only in the four weeks before each big deadline.
6. **Car-dealer groups (from month 7):** CIVU, Civemup and CADAM ([Última Hora, Nov 2019](https://www.ultimahora.com/seprelad-el-50-playa-autos-eluden-el-control-antilavado-n2852685); [Ferrere on Res 196/2020](https://ferrere.com/es/novedades/nuevo-reglamento-de-prevencion-de-lavado-de-activos-y-financiamiento-del-terrorismo-para-personas-fisicas-o-juridicas-involucrad/)). Dealers cluster in Central, Alto Paraná and Caaguazú (file 02).
7. **Events.** Expo Internacional de Inversiones Inmobiliarias, Ciudad del Este, 22-23 October 2026, free entry ([Infonegocios](https://infonegocios.com.py/default/comienza-la-cuenta-regresiva-para-la-expo-internacional-de-inversiones-inmobiliarias-paraguay-2026)). Expo Real Estate Paraguay in Asunción in June ([Infonegocios](https://infonegocios.com.py/plus/expo-real-estate-paraguay-se-viene-el-epicentro-donde-se-redefine-el-futuro-del-mercado-inmobiliario)). Agent Day on 12 August.

Not a channel: SEPRELAD itself. Circular 2/2025 bars its staff from acting as paid advisers ([Circular 2/2025](https://www.seprelad.gov.py/resoluciones/resoluciones/CIRCULAR%202-2025.pdf), via file 01). Keep the product aligned with its forms, but do not claim endorsement.

### Sales motion

- **Self-serve first.** A 14-day free trial with no card. A local contractor makes a 20-minute WhatsApp onboarding call. Then the firm buys a yearly plan by card.
- **Auditor-led.** The auditor recommends the tool in the engagement letter, then sees the client's file on the Estudio dashboard. The client signs up through the partner link.
- **Local presence matters.** From month 3, hire a part-time sales and support contractor in Asunción. Budget about Gs 4m a month (US$700), a little over the minimum wage ([Decreto 6225/2026](https://impuestospy.com/impuestos/decreto-n-6225-2026/)). Pay as a contractor who issues invoices, not as an employee, until a local company exists (my suggestion).
- **Cycle:** 1-3 weeks for an owner-run firm; 1-2 months for an audit practice (my estimate).
- **Targets for the founder's first trip:** 10-15 paying pilots through 2-3 auditors, 1 trainer bundle, and a meeting with ACIP.

## 90-day launch plan

Day 1 is Monday 12 October 2026. Day 90 is Saturday 9 January 2027. Development runs in parallel with Claude Code and several AI agents: MVP in about 3 weeks, sellable in 6-8 weeks once legal content, a security test and pilots are done.

| Dates | Product | Market and sales | Company, legal, payments |
|---|---|---|---|
| **Week 1** (12-18 Oct) | Start parallel agent streams: (1) deadline calendar and reminders; (2) client and deal register with KYC thresholds; (3) document generators (manual, code of ethics, CO appointment); (4) RO Excel export; (5) list screening with log. | Spanish landing page with waitlist and a free 2027 SEPRELAD calendar. Download the register and auditor lists. Book 20 interviews (12 agencies, 2 car dealers, 6 auditors) by WhatsApp and LinkedIn. | Open Stripe on the founder's company with PYG prices. Brief a Paraguayan AML lawyer on template review and terms. |
| **Week 2** (19-25 Oct) | Internal demo of calendar and register. | Run interviews (remote). Ask 3 auditors what they charge a small firm for the yearly report. Optional: attend the Ciudad del Este expo (22-23 Oct). | Draft terms of service and data-processing terms. |
| **Week 3** (26 Oct-1 Nov) | **MVP complete** (internal). | Founding offer: 50% off year 1 for the first 15 firms. Collect letters of intent. | Book an external security test. |
| **Day 30** (Wed 11 Nov) | **Gate 1** (see kill criteria): at least 10 of 20 interviewees say they would pay Gs 100,000+ a month; at least 3 auditors agree to pilot; at least 5 letters of intent. | | |
| **Weeks 5-6** (9-22 Nov) | Fix pilot feedback; internal-control report generator; audit export. | **Trip to Asunción (2 weeks):** onboard 10-15 pilot firms through 2-3 auditors; hire the part-time local contractor; meet ACIP and one trainer. | Lawyer reviews the manual, code and risk-wizard content. |
| **Weeks 7-8** (23 Nov-6 Dec) | Security-test fixes; 5-year archive and export; WhatsApp reminders live. | Record 5 short videos; write the "RN and RO in January" guide. | Sign partner (referral) agreements. Final terms and data-processing terms. Stripe Billing live. |
| **Day 60** (Fri 11 Dec) | **Gate 2: public launch, "listo para enero".** | At least 8 paying pilots. | |
| **Weeks 9-12** (12 Dec-3 Jan) | Support and small fixes only. | WhatsApp and e-mail campaign to register companies in Asunción and Central: "RN due 10 January, RO 11-20 January". Webinar with a partner auditor (mid-December). Small Meta ad test. | Monthly bookkeeping of the foreign company. |
| **Week 13** (4-9 Jan 2027) | Help pilots through the RN (by 10 Jan) and RO (11-20 Jan). | Measure use, problems and willingness to renew. | |
| **Day 90** (Sat 9 Jan) | **Gate 3:** at least 10 paying firms and 2 active partner practices. Decide the spend for the CI season (30 March). | | |

## 12-month marketing plan and budget

October 2026 to September 2027. A lean budget of about **US$10,000** for marketing, plus about US$3,600 for two trips, the local contractor (about US$700 a month from month 3) and partner commissions. All figures are my estimates.

| Month | Theme | Main actions |
|---|---|---|
| Oct-Nov 2026 | Validation and pilots | Interviews; founding offer; free guide to the SIRO data update (Res 435/2026) |
| Dec 2026-Jan 2027 | "Enero: RN y RO" | Campaign to the register list; webinar 1 with an auditor; Meta test |
| Feb-Mar 2027 | CI report due 30 March | Partner drive with auditors before fieldwork; webinar 2, "the internal-control report in one hour"; Google and Meta ads at peak |
| Apr 2027 | RO window; car-dealer beta | Dealer interviews; CIVU and Civemup contacts |
| May 2027 | Annual Form due 31 May | Worksheet campaign; webinar 3 with a trainer (Best Practices or Gestión Contable) |
| Jun 2027 | Audit, canon and exemption due 30 June | Audit-ready export campaign; Res 328/2026 exemption guide; Expo Real Estate Paraguay (Asunción) |
| Jul 2027 | RO window | Customer case studies; launch Automotores plan |
| Aug 2027 | Agent Day (12 Aug) | ACIP sponsorship; member offer |
| Sep 2027 | Renewals and 2-yearly risk assessment | Renewal campaign; year-2 plan |

| Budget line | US$ |
|---|---|
| Google search ads (deadline keywords) | 1,800 |
| Meta (Facebook and Instagram) ads, Asunción, Central, Alto Paraná | 2,400 |
| LinkedIn (auditors, accountants) | 600 |
| Events and sponsorships (Expo Real Estate, ACIP Agent Day, one regional event) | 2,500 |
| Webinars and co-marketing with trainers | 1,000 |
| Video editing and design (AI-assisted) | 800 |
| WhatsApp Business messaging and e-mail tools | 400 |
| Printed one-pagers | 300 |
| Contingency | 200 |
| **Total marketing** | **10,000** |
| Travel (two trips) | 3,600 |
| Local contractor (10 months × US$700) | 7,000 |
| Partner commissions | about 8% of new bookings (40% of sales through partners at 20%) |

## Payments and tax friction

### Recommendation

- **Start with Stripe on the founder's foreign company, priced in guaraníes, yearly or monthly by card.** Stripe accepts PYG as a presentment currency (zero-decimal; American Express is not supported in PYG) ([Stripe currencies](https://docs.stripe.com/currencies)).
- **Do not use Paddle as the main processor for Paraguay.** Paddle sells to Paraguay, but only in US dollars, and Paraguay is not on its list of countries where it charges VAT. So it handles none of the Paraguayan tax and costs about the same (details below).
- **For buyers who will not pay by card from abroad, use a local reseller.** A partner audit or accounting firm invoices locally with IVA and pays us a wholesale price by international transfer. Do this rather than open a local company in year 1.

### Do Paraguayan cards work for cross-border online payments?

- **Credit cards, mostly yes.** Paraguayans already pay foreign digital services by card. That is why the tax rules make banks and card processors collect IVA on foreign digital services paid by card ([dplnews](https://dplnews.com/paraguay-servicios-digitales-agentes-de-retencion-son-los-bancos-y-operadoras-de-tarjetas-de-credito/); [Ferrere, Apr 2021](https://ferrere.com/es/novedades/newsletter-retenciones-de-impuestos-por-servicios-digitales-en-paraguay/)). dLocal processes Visa, Mastercard and Amex for foreign merchants in Paraguay ([dLocal Paraguay](https://www.dlocal.com/payment-processors-in-latin-america/paraguay-payment-methods-processors-e-commerce-market-dlocal/)).
- **But cards are a minority of online payments.** dLocal gives these shares of e-commerce payments in Paraguay: cash 28%, bank transfer 19%, credit card 16%, e-wallet 16%, debit card 7%, other 14%. It also says 77% of e-commerce is local. The shares are undated (same page).
- **Debit cards are uncertain.** Bancard opened local online purchases to its debit cards through its VPOS 2.0 gateway. The article does not say whether they work with foreign merchants ([Infonegocios](https://infonegocios.com.py/infotecnologia/realizar-compras-online-con-tarjetas-de-debito-ya-es-posible)) (unverified for cross-border use).
- **What this means:** most small companies have a credit card, so card checkout should work for most buyers (my estimate). Plan a non-card route for the rest: the local reseller now, and dLocal or a local company later.
- **IVA added by the buyer's bank?** Banks add 10% IVA only for foreign providers on the tax office's published list. A cardholder charged for a provider not on the list can claim it back ([dplnews](https://dplnews.com/paraguay-servicios-digitales-agentes-de-retencion-son-los-bancos-y-operadoras-de-tarjetas-de-credito/)). Whether a new small SaaS would be put on that list is (unverified).

### Stripe (founder's company abroad)

| Item | Stripe Ireland (EU company) | Stripe US (US company) | Source |
|---|---|---|---|
| Card fee for a non-domestic card | 3.15% + €0.25 | 2.9% + 30¢, plus 1.5% for international cards | [Stripe IE pricing](https://stripe.com/ie/pricing); [Stripe US pricing](https://stripe.com/us/pricing) |
| Currency conversion (PYG to payout currency) | +2% | +1% | same |
| Stripe Billing (subscriptions) | 0.7% of billing volume | 0.7% | same |
| All-in fee on a Gs 1,490,000 (US$261) yearly charge, including Billing | about US$15.6 (6.0%) | about US$16.2 (6.2%) | my calculation |
| All-in fee on a Gs 149,000 (US$26) monthly charge, including Billing | about US$1.8 (6.9%) | about US$1.9 (7.2%) | my calculation |

Notes:
- The model uses 6% for payment costs on all cash in, plus 1.1% for INR withholding that some buyers will apply (see below).
- Yearly billing halves the fixed-fee share. Push yearly plans with "two months free".
- Stripe also sells "Managed Payments", where Stripe acts as merchant of record. Third-party sources say it adds about 3.5% on top of normal Stripe fees ([Freemius](https://freemius.com/blog/stripe-merchant-of-record/); [Dodo Payments](https://dodopayments.com/blogs/stripe-managed-payments-fees-explained)); its country list is not confirmed ([Stripe Managed Payments](https://stripe.com/en-mt/managed-payments)) (unverified). It would add cost without solving the Paraguayan B2B withholding.

### Merchant of record options

| Option | Sells to Paraguay? | Paraguayan tax handled? | Fee | Verdict |
|---|---|---|---|---|
| **Paddle** | Yes. Paraguay is "allow_sales: true", transaction currency **USD**, tax mode "external" ([Paddle supported countries](https://developer.paddle.com/concepts/sell/supported-countries-locales), page data read 10 Oct 2026) | No. Paraguay is not in Paddle's list of countries where it charges sales tax or VAT; the list runs from Oman straight to Peru ([Paddle tax countries](https://www.paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for)) | 5% + 50¢ per checkout transaction ([Paddle pricing](https://www.paddle.com/pricing)) | Possible, but buyers see US$, not Gs, and it adds nothing on Paraguayan tax. Useful only if the founder's home-country VAT on B2C sales is a burden. |
| **Lemon Squeezy** | Not checked (unverified). Lemon Squeezy is now owned by Stripe, and its role is moving to Stripe Managed Payments (same sources as above, unverified) | - | about 5% + 50¢ (unverified) | No advantage over Paddle. |
| **PayPro Global** | Its guide covers Paraguay and says B2B sales are reverse-charged by the buyer, while B2C card sales are taxed by local banks ([PayPro Global](https://payproglobal.com/es/impuesto-de-ventas-saas/paraguay/)) | It does not say clearly that it remits Paraguayan IVA (same page) | not checked | Not needed for B2B. |
| **dLocal** (payment processor for foreign merchants, not a classic MoR) | Yes: Bancard QR, cards in PYG, wallets (Tigo, Zimple, Wally), cash networks (Pago Express, Infonet, WEPA), PagoPar ([dLocal Paraguay](https://www.dlocal.com/payment-processors-in-latin-america/paraguay-payment-methods-processors-e-commerce-market-dlocal/); [dLocal docs](https://docs.dlocal.com/docs/paraguay)) | Not as MoR (unverified) | Quote only; aimed at larger merchants (unverified) | A later option to reach buyers without credit cards. |

### Bank transfers

- **International wire from Paraguay to the founder's company is expensive for small sums.** Itaú Paraguay charges US$33 to send an international transfer, plus a SWIFT fee of US$22, plus possible intermediary-bank fees ([Wise blog on Itaú Paraguay](https://wise.com/py/blog/transferencia-internacional-itau-paraguay)). Accept wires only for practice plans or invoices above about US$500.
- **Local transfers need a local account.** Small Paraguayan firms often pay suppliers by local bank transfer against a local invoice (my estimate; dLocal shows transfers at 19% of e-commerce payments, see above). A foreign company cannot receive these without a local partner or entity.
- **Reseller route.** The partner invoices the client in Gs with IVA, collects locally, keeps its margin and wires us monthly or quarterly in one larger transfer. This turns many small wires into one.

### Buyer-side tax friction

| Buyer type | IVA (10%) on our fee | Non-resident income tax (INR) | What it means for us |
|---|---|---|---|
| **Company under the general IRE regime** (most S.A. and EAS agencies and developers) | The buyer accounts for the IVA itself and uses it as a credit, so it nets to zero ([DNIT criterion](https://www.dnit.gov.py/web/portal-institucional/w/retencion-a-proveedores-del-exterior-); [EY, Apr 2022](https://ey.com/content/dam/ey-unified-site/ey-com/es-py/technical/tax/documents/tax-alert-abril-2022.pdf)). The exact mechanics need a tax adviser (unverified). | The buyer must withhold INR on digital services bought from abroad, "whatever the payment method": 15% on 30% of the price net of IVA = **4.5%** ([Decreto 6515/2021, art. 7 and 9](https://impuestospy.com/impuestos/decreto-n-6-515-21/)). Withholding is due when the buyer pays, credits or remits ([EY, Apr 2022](https://ey.com/content/dam/ey-unified-site/ey-com/es-py/technical/tax/documents/tax-alert-abril-2022.pdf)). | A card payment cannot be "withheld" in practice. Some buyers will pay in full and settle the INR themselves; others will ask to pay 95.5%. Accept both. Publish a one-page guide for their accountant. |
| **Small company or sole trader on a simplified regime** (IRE SIMPLE or RESIMPLE) | Unclear (unverified) | The decree names only general-regime IRE taxpayers as withholding agents ([Decreto 6515/2021](https://impuestospy.com/impuestos/decreto-n-6-515-21/)). | Probably no withholding by the buyer (unverified). Confirm with a Paraguayan adviser. |
| **Final consumer** (not our market) | Banks and card processors collect 10% IVA on listed foreign digital services ([Ferrere](https://ferrere.com/es/novedades/newsletter-retenciones-de-impuestos-por-servicios-digitales-en-paraguay/)) | Since 2022 banks no longer withhold INR. Foreign providers selling to consumers must register through a representative and pay INR monthly under RG 109/2021 ([abogados.com.ar on RG 109/21](https://abogados.com.ar/paraguay-reglamenta-la-forma-de-pago-del-impuesto-a-la-renta-de-no-residentes-por-servicios-digitales-en-operaciones-b2c/29776)) | Does not apply if we sell only to obliged businesses with a RUC. Our terms should say "business customers only". |

### Must the foreign seller register for Paraguayan tax?

- **For B2B sales: no registration found.** The simplified registration regime (RG 109/2021) is for non-resident digital providers selling to final consumers. It does not apply to sales to IRE taxpayers, who withhold the tax themselves ([abogados.com.ar on RG 109/21](https://abogados.com.ar/paraguay-reglamenta-la-forma-de-pago-del-impuesto-a-la-renta-de-no-residentes-por-servicios-digitales-en-operaciones-b2c/29776)).
- **Grey zone:** about 21% of registered real-estate subjects are individuals (file 02). If the tax office treated a sole trader as a "final consumer", the B2C regime could apply to those sales (unverified). Collect each buyer's RUC at checkout.
- **Software counts as a digital service.** The covered categories include "provision, development or updating of software or applications in general" and data processing and storage ([Ferrere](https://ferrere.com/es/novedades/newsletter-retenciones-de-impuestos-por-servicios-digitales-en-paraguay/)).

### Tax treaties

- Paraguay has tax treaties with Chile, Uruguay, Spain, Taiwan, Qatar and the UAE. The Spain treaty took effect on 14 October 2024, and a new Chile treaty was signed in July 2026 ([DNIT on Spain](https://www.dnit.gov.py/web/portal-institucional/w/paraguay-y-espana-refuerzan-la-cooperacion-economica-con-un-evento-sobre-el-convenio-para-evitar-la-doble-imposicion); [DNIT on Chile](https://www.dnit.gov.py/web/portal-institucional/w/nuevo-convenio-fortalece-la-cooperaci%C3%B3n-tributaria-entre-paraguay-y-chile)). The full list comes from a search summary of DNIT pages (unverified).
- If the founder's company sits in a treaty country such as Spain, the 4.5% INR might be reduced or removed under the business-profits article, unless the payment counts as a royalty (unverified; get advice). For a company in the US, UK or most of the EU there is no treaty, so the 4.5% stands.
- The founder's home tax: a B2B service to a Paraguayan business is normally outside the home country's VAT, but check the home jurisdiction (unverified).

## Company setup (needed or not, costs)
(pending)

## Contracts and liability
(pending)

## Financial model
(pending)

## Regional expansion
(pending)

## Exit and partnerships
(pending)

## Risks and mitigations
(pending)

## Milestones and kill criteria
(pending)

## Open questions
(pending)

## Sources
(pending)
