# Paraguay SEPRELAD compliance pack: go-to-market, payments, company setup and financials (deep dive 04)

Date: 10 October 2026. Builds on [the B2 report](../reports/paraguay-b2.md), [01-law-and-requirements.md](01-law-and-requirements.md) and [02-market-and-competition.md](02-market-and-competition.md). Status: complete. Research budget used: about 27 web searches and 23 page fetches.

**Money.** Prices are in guaraníes (Gs). The Central Bank's reference rate on Friday 9 October 2026 was **Gs 5,694 per US$** and Gs 6,375 per euro ([BCP daily reference rates](https://www.bcp.gov.py/webapps/web/cotizacion/monedas)). I use **Gs 5,700 = US$1**. Note: the B2 report and file 02 used about Gs 7,300 = US$1, worked back from fee totals. That rate is out of date: the guaraní has strengthened a lot since early 2025, when the dollar traded above Gs 8,000 ([ABC Color, Apr 2025](https://www.abc.com.py/economia/2025/04/03/cotizacion-del-dolar-sigue-escalando/), search snippet). So the SEPRELAD canon of about Gs 329,000 is about **US$58**, not US$45. "Net" means before Paraguayan VAT (IVA, 10%). "My estimate" marks a planning assumption, not a sourced fact.

## Summary

- **Verdict: a small, real business that needs a second market to pay a founder.**
  - **Base case:** about 260 paying firms and **US$71,000 ARR** (Gs 405m) by September 2029. Year-3 profit before founder pay is about US$14,000. Peak cash need is about **US$24,000**.
  - **High case:** about 520 firms and US$169,000 ARR.
  - **Low case:** about 90 firms; it never pays back.
  - Build cost is low because the founder builds with AI agents. The limits are price level and market size.
- **The exchange rate in earlier files is out of date.** The BCP reference rate was Gs 5,694 per US$ on 9 October 2026 ([BCP](https://www.bcp.gov.py/webapps/web/cotizacion/monedas)), not about Gs 7,300. Gs prices are worth about 28% more in dollars than files B2 and 02 assumed. A return to Gs 7,000 would erase most base-case profit.
- **Price in guaraníes, low and simple** (net, by card, yearly gives two months free):
  - **Al día** (deadlines and filings): Gs 490,000 a year (US$86).
  - **Legajo listo** (audit-ready file, the main plan): **Gs 149,000 a month or Gs 1.49m a year** (US$261).
  - **Grupo:** Gs 2.99m a year.
  - **Estudio** (for auditors): Gs 290,000 a month plus Gs 99,000 per managed client.
  - **Automotores** (car dealers): Gs 990,000 a year.
  - Anchors: the SEPRELAD canon is about Gs 329,000 (US$58) a year, courses Gs 150,000-800,000, a regional list tool from US$10, and the minimum wage Gs 3,044,000 a month.
- **The SIRO calendar is the sales calendar.** Peak season runs January to June: negative and operations reports in January, the internal-control report by 30 March, the Annual Form by 31 May, and the audit, canon and audit-exemption request by 30 June. Launch publicly by **11 December 2026** to catch the January filings.
- **Channels, in order:**
  1. the about 140 SEPRELAD-registered audit practices (Estudio plan, 20% referral fee, 30% reseller margin);
  2. direct outreach from the public SEPRELAD register;
  3. accountants and AML trainers;
  4. ACIP;
  5. deadline-timed content and ads;
  6. car-dealer groups from month 7.
  - Year-1 budget: US$10,000 marketing, US$3,600 travel, and a local part-time contractor at about US$700 a month.
- **Payments: Stripe on the founder's foreign company, charging in PYG.** All-in cost is about 6% on a yearly plan ([Stripe currencies](https://docs.stripe.com/currencies); [Stripe IE pricing](https://stripe.com/ie/pricing)).
  - Paddle sells to Paraguay only in US$ and does not collect Paraguayan tax ([Paddle countries](https://developer.paddle.com/concepts/sell/supported-countries-locales); [Paddle tax list](https://www.paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for)), so it adds little.
  - Cards are only about 23% of Paraguayan e-commerce payments ([dLocal](https://www.dlocal.com/payment-processors-in-latin-america/paraguay-payment-methods-processors-e-commerce-market-dlocal/)). Offer a local-reseller route for the rest.
- **Buyer-side tax friction is real but small.** No Paraguayan tax registration was found for a foreign B2B seller.
  - A general-regime company buyer self-accounts the 10% IVA, which it can credit.
  - It must also withhold **4.5% INR** on digital services from abroad ([Decreto 6515/2021](https://impuestospy.com/impuestos/decreto-n-6-515-21/)). Accept 95.5% when buyers withhold.
  - The consumer-sales registration regime (RG 109/2021) does not apply if we sell only to businesses.
- **No local company in year 1.** An EAS is cheap to form: online through SUACE, near-zero official fees (unverified), no minimum capital, and US$1,500-4,000 with remote legal help ([Golden Harbors](https://goldenharbors.com/articles/start-business-in-paraguay), secondary). But the legal representative must hold a Paraguayan identity card ([DNIT RG 34/25](https://www.dnit.gov.py/web/portal-institucional/w/resoluci%C3%B3n-general-dnit-n.%C2%B0-34/25-anexo-1)). Running costs would be about US$4,000-7,000 a year (my estimate). Use a partner reseller for local invoices first.
- **Contracts:** we are a tool, not advice and not the filer. Liability is capped at 12 months of fees. Records stay available for 5 years after cancellation. ROS drafts are walled off. A data-processing addendum should be ready for Ley 7593/2025, which takes effect around November 2027 ([Ferrere](https://ferrere.com/es/novedades/paraguay-adopta-su-ley-de-proteccion-de-datos-personales/)).
- **Kill criteria:**
  - Day 30 (11 Nov 2026): fewer than 10 of 20 interviewees would pay Gs 100,000+ a month, or fewer than 3 auditors will pilot.
  - Day 90 (9 Jan 2027): fewer than 6 paying firms.
  - 31 March 2027: fewer than 20 paying firms.
  - Late 2027 to early 2028: first-year renewal below 55%.
- **Expansion:** first Paraguayan car dealers (845 payers), then Ecuador from about mid-2028. Ecuador uses US dollars and has 4,446 real-estate and construction firms and 542 car dealers under the UAFE. Likely acquirers are Devsys or Pirani, at about 2-4x profit.

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

### Verdict: no local company in year 1, probably not in year 2

Sell from the founder's existing foreign company. Reasons:
- **The buyers are businesses.** They can pay a foreign SaaS by card, and the tax rules already expect them to self-account for IVA and INR (see Payments). No rule found forces a foreign B2B software seller to register in Paraguay.
- **A local company needs a local legal representative with a Paraguayan identity card.** The tax office's RUC rules for an EAS, S.A. or S.R.L. ask for the representative's "Cédula de Identidad Civil o pasaporte vigentes, emitidos en el Paraguay", and a foreign representative must attach a Paraguayan cédula ([DNIT RG 34/25, Annex 1, Aug 2025](https://www.dnit.gov.py/web/portal-institucional/w/resoluci%C3%B3n-general-dnit-n.%C2%B0-34/25-anexo-1)). So the founder needs Paraguayan residency or a resident representative.
- **It adds monthly tax filings and bookkeeping** for a business that starts at under US$25,000 of revenue a year (financial model below).

**Open a local EAS only when one of these is true** (my triggers):
1. More than a quarter of qualified buyers refuse to pay without a local electronic invoice, and no partner will resell.
2. ARR passes about US$60,000 and local invoicing would clearly lift sales.
3. You need to employ local staff rather than contract them.
4. You want local payment methods (bank transfer, Bancard, wallets) without dLocal.

### What a local company would cost

| Item | EAS (simplified company) | S.A. | Source |
|---|---|---|---|
| How it is formed | Online through the SUACE one-stop shop; no public deed; the tax-ID application also goes only through SUACE | Notarial deed, registration in the Public Registry, newspaper publication | [DNIT RG 34/25 Annex 1](https://www.dnit.gov.py/web/portal-institucional/w/resoluci%C3%B3n-general-dnit-n.%C2%B0-34/25-anexo-1); [Golden Harbors, Sep 2026](https://goldenharbors.com/articles/start-business-in-paraguay) |
| Minimum capital | None (can be formed with Gs 1) | No legal floor; set in the bylaws | [Golden Harbors](https://goldenharbors.com/articles/start-business-in-paraguay) (secondary) |
| Official fees | "Close to zero" on the SUACE standard bylaws (unverified; confirm with SUACE) | Registry, notary and publication costs not quantified (unverified) | same |
| Lawyer and setup, done remotely | US$1,500-4,000 all-in for the corporate side with light professional support (bank, e-invoicing setup, accounting setup) | US$4,000-8,000 plus government charges | same (a commercial guide; unverified) |
| Time | About 72 hours to form; 1-2 weeks more for RUC and bank account | 3-4 weeks | same |
| Legal representative | Must hold a Paraguayan cédula, so the founder needs residency, or a resident representative is hired | same | [DNIT RG 34/25 Annex 1](https://www.dnit.gov.py/web/portal-institucional/w/resoluci%C3%B3n-general-dnit-n.%C2%B0-34/25-anexo-1) |
| Founder residency, if chosen | Temporary residency for up to 2 years, renewable, which gives access to the cédula. Processing can take up to 3 months. A filing fee of about US$350 is quoted by a commercial guide (unverified). Documents must be apostilled and translated by a sworn Paraguayan translator. A new rule (Res DNM 407/2026) changed the proof-of-means rules for files from 6 July 2026. | | [Infonegocios, Residencias](https://infonegocios.com.py/infolegal/residencias-en-paraguay); [LibertyMundo, 2026](https://www.libertymundo.com/residency-in-paraguay-2/) (secondary) |
| Resident representative (instead of residency) | About US$100-300 a month (my estimate, unverified) | same | - |
| Foreign shareholder documents | A foreign company shareholder must file the document that identifies it, translated into Spanish by a sworn translator | same | [DNIT RG 34/25 Annex 1](https://www.dnit.gov.py/web/portal-institucional/w/resoluci%C3%B3n-general-dnit-n.%C2%B0-34/25-anexo-1) |

**Ongoing costs and taxes of a local EAS**
- Corporate income tax (IRE) 10%, or the IRE SIMPLE regime for firms with prior-year income under Gs 2bn (about US$350,000 at today's rate). Dividends to a non-resident owner: 15% (IDU). IVA 10% on sales ([Golden Harbors](https://goldenharbors.com/articles/start-business-in-paraguay), secondary).
- Electronic invoicing through SIFEN. More than 50,000 taxpayers already issue e-invoices, 88.6% of them small ([DNIT, Sep 2026](https://www.dnit.gov.py/web/e-kuatia/w/paraguay-supera-los-50.000-facturadores-electr%C3%B3nicos-y-avanza-en-la-digitalizaci%C3%B3n-tributaria)).
- An outside accountant: about Gs 1.0m-2.5m a month (US$175-440) (my estimate; no published fee found). For scale, a staff accountant earns Gs 3.6m-10.9m a month ([Cazvid](https://cazvid.com/es/blog/cuanto-gana-un-contador-en-paraguay)).
- **Total running cost of a local EAS: about US$4,000-7,000 a year** with a resident representative, plus US$1,500-4,000 to set up (my estimate). The financial model shows this as a variant from month 18.

### Middle path: local reseller agreement

- A partner (an audit or accounting firm with a RUC) buys seats at wholesale (30% off list), invoices the client in Gs with 10% IVA on a local e-invoice, and collects locally.
- The partner then pays us by one international wire a month or a quarter. The partner withholds the 4.5% INR, which we accept.
- This gives buyers a local invoice without a local company. It also gives the auditor a reason to sell.

## Contracts and liability

**Customer terms (Spanish, click-through, business customers only)**
- **What we are and are not.** A software tool. Not legal advice, not the compliance officer, not the filer. The firm keeps every duty of an obliged subject under Res 201/2020 ([Res 201/2020](https://www.seprelad.gov.py/resoluciones/resoluciones/res-n201-2020-reglamentacion-para-inmobiliarias.pdf)). The tool never files in SIRO for the client. SIRO has no API, and the owner or board must approve each suspicious-transaction report (file 01).
- **Liability cap:** fees paid in the last 12 months. No liability for SEPRELAD sanctions, lost profits or indirect loss. No cap where the law does not allow one (my suggestion; have a lawyer check enforceability).
- **Content accuracy promise:** templates are reviewed by a Paraguayan AML lawyer. Each template shows the rule it maps to and the review date. We promise to update templates within 30 days of a new SEPRELAD resolution, or say publicly that we cannot (my suggestion).
- **Records survive cancellation.** The law requires records to be kept for 5 years (file 01, Ley 1015/97 art. 18). After cancellation, offer a full export and a free read-only archive for 5 years. The storage cost is small (my estimate).
- **Confidentiality of suspicious-transaction work.** The ROS draft must not reveal the compliance officer or the firm (Res 201/2020 art. 36, file 01). Limit access by role, log every view, and keep ROS drafts out of the auditor's read-only view.
- **Governing law:** the law of the founder's company, with the Spanish text as the binding version. A Paraguayan lawyer should confirm whether Paraguayan law and courts would raise trust enough to be worth it (open question).
- **Electronic acceptance:** click-through acceptance with a stored log; enforceability under Paraguayan law is (unverified).

**Data protection**
- Paraguay's new personal-data law, Ley 7593/2025, was promulgated in late November 2025 and takes effect about two years later, around November 2027. It creates a national data-protection agency inside MITIC and covers controllers and processors ([Ferrere](https://ferrere.com/es/novedades/paraguay-adopta-su-ley-de-proteccion-de-datos-personales/); [La Nación, Nov 2025](https://www.lanacion.com.py/politica/2025/11/28/nueva-ley-de-datos-personales-refuerza-la-privacidad-sin-recortar-la-transparencia-publica/)). It also sets rules for international transfers (secondary summary; details unverified).
- We are the processor; the firm is the controller. Sign a data-processing addendum from day 1. Host in one region, encrypt ID documents, and keep an access log. Review it against the law's implementing decree when that is published.

**Partner contracts**
- **Referral:** 20% of the first year's fees and 10% of renewals, paid quarterly, for clients who pay us directly.
- **Reseller:** 30% off list. The partner invoices locally, owns collection and the INR withholding, and must not change the terms of service.
- **Data partner** (for example Compliance Paraguay for PEP data): licence terms, update frequency and liability for wrong matches.

**Insurance:** technology errors-and-omissions plus cyber cover, about US$1,000-2,500 a year (my estimate, unverified). The model uses US$1,500.

## Financial model

### Assumptions

Month 1 is October 2026 and month 36 is September 2029. Model figures are in US dollars at Gs 5,700 = US$1. Prices are set in Gs.

| Assumption | Low | Base | High | Basis |
|---|---|---|---|---|
| Buyer pool | about 2,300 paying real-estate firms and car dealers, plus about 190 smaller subjects | same | same | File 02, from SEPRELAD's [statistics portal](https://www.seprelad.gov.py/siro/estadisticaExterna/estadistica.xhtml) |
| Paid pilots in December 2026 (50% off year 1) | 4 | 8 | 12 | Plan |
| New paying firms, years 1 / 2 / 3 (including pilots) | 45 / 50 / 45 | 110 / 120 / 110 | 200 / 220 / 200 | My estimate |
| Share of the 2,300 pool active at month 36 | 4% | 11% | 23% | Output |
| Practice (Estudio) plans active at months 12 / 24 / 36 | 2 / 3 / 4 | 5 / 9 / 12 | 8 / 15 / 22 | My estimate; about 140 practices exist (file 02) |
| Revenue per firm per year, net, years 1 / 2 / 3 | Gs 0.95m / 1.0m / 1.1m | Gs 1.2m / 1.3m / 1.4m | Gs 1.4m / 1.55m / 1.7m | Plan mix of Al día, Legajo listo, Grupo, Automotores |
| Practice base fee | Gs 290,000 a month | same | same | Price list |
| Billing | 60% yearly prepaid; 40% monthly at a 15% premium | same | same | My estimate |
| First renewal / later renewals | 55% / 75% | 70% / 85% | 80% / 90% | My estimate |
| New sales by calendar month (seasonality weight) | Jan 1.3, Feb 0.9, Mar 1.4, Apr 1.1, May 1.4, Jun 1.3, Jul 0.9, Aug 0.7, Sep 0.7, Oct 1.0, Nov 0.8, Dec 0.5 | same | same | SIRO calendar (Go-to-market) |
| Setup add-on | 15% of new firms buy it at Gs 900,000; we keep 30% | same | same | Plan |
| Payment costs | 6% of cash in | same | same | Stripe fees above |
| INR withheld by buyers | 1.1% of cash in (about a quarter of revenue at 4.5%) | same | same | [Decreto 6515/2021](https://impuestospy.com/impuestos/decreto-n-6-515-21/); my estimate of how many withhold |
| Partner commissions | 20% of first-year and 10% of renewal payments on partner-sourced firms; 30% of firms come through partners | same at 40% | same at 50% | Plan |
| Build | Founder with Claude Code and AI agents; AI tools US$300 a month for 3 months, then US$200 | same | same | Owner's plan; no hired developers |
| Hosting, tools, e-mail, WhatsApp | US$120 / 220 / 320 a month in years 1 / 2 / 3 | same | same | My estimate |
| PEP data | US$100 a month from month 6 | same | same | Unverified; price not public |
| Paraguayan lawyer | US$3,500 in months 1-2, then US$150 a month for rule-watch | same | same | My estimate (unverified) |
| Terms and data-processing terms abroad | US$500 in month 2 | same | same | My estimate |
| Security test | US$2,500 in month 2; US$2,000 in months 14 and 26 | same | same | My estimate (unverified) |
| Insurance | US$1,500 a year | same | same | My estimate (unverified) |
| Local sales and support contractor, from month 3 | US$500 / 600 / 800 a month | US$700 / 1,200 / 1,800 | US$900 / 2,000 / 3,200 | Minimum wage Gs 3,044,000 = US$534 ([Decreto 6225/2026](https://impuestospy.com/impuestos/decreto-n-6225-2026/)) |
| Marketing, years 1 / 2 / 3 | US$6,000 / 5,000 / 5,000 | US$10,000 / 9,000 / 9,000 | US$16,000 / 15,000 / 15,000 | Plan above |
| Travel | US$1,800 twice a year | same | same | My estimate |
| Foreign company running costs (extra share) | US$100 a month | same | same | My estimate |
| Founder pay | None in the main tables. Variant: US$2,000 a month in year 2 and US$3,000 in year 3 | | | |
| Local EAS | None in the main tables. Variant: US$2,500 in month 18 plus US$300 a month | | | Company setup section |

"Cash in" counts yearly prepayments when received, so cash comes in before revenue would be booked. ARR is active firms times their yearly price, plus practice fees times 12. The model script is in the session scratchpad, not in the repo.

### Base case by quarter (US$, no founder pay)

| Quarter | New firms | Churned | Active firms (end) | Practices (end) | Cash in | ARR (end) | Costs | Net | Cumulative |
|---|---|---|---|---|---|---|---|---|---|
| Q1 Oct-Dec 26 | 8 | 0 | 8 | 0 | 594 | 842 | 13,962 | -13,367 | -13,367 |
| Q2 Jan-Mar 27 | 38 | 0 | 46 | 3 | 6,055 | 10,643 | 7,278 | -1,223 | -14,591 |
| Q3 Apr-Jun 27 | 40 | 0 | 86 | 4 | 7,532 | 19,666 | 9,480 | -1,948 | -16,538 |
| Q4 Jul-Sep 27 | 24 | 0 | 110 | 5 | 6,327 | 25,368 | 7,495 | -1,167 | -17,706 |
| Q5 Oct-Dec 27 | 23 | 2 | 131 | 6 | 7,971 | 31,660 | 14,549 | -6,578 | -24,283 |
| Q6 Jan-Mar 28 | 36 | 11 | 155 | 7 | 13,521 | 38,555 | 9,931 | 3,590 | -20,693 |
| Q7 Apr-Jun 28 | 38 | 12 | 181 | 8 | 14,905 | 45,799 | 11,890 | 3,016 | -17,678 |
| Q8 Jul-Sep 28 | 23 | 7 | 197 | 9 | 11,977 | 50,425 | 9,682 | 2,295 | -15,383 |
| Q9 Oct-Dec 28 | 21 | 8 | 210 | 10 | 13,300 | 54,814 | 17,221 | -3,922 | -19,304 |
| Q10 Jan-Mar 29 | 33 | 15 | 229 | 10 | 19,680 | 60,387 | 12,694 | 6,986 | -12,318 |
| Q11 Apr-Jun 29 | 35 | 16 | 248 | 11 | 21,165 | 66,880 | 14,662 | 6,503 | -5,816 |
| Q12 Jul-Sep 29 | 21 | 9 | 259 | 12 | 16,785 | 71,051 | 12,293 | 4,493 | -1,323 |

The October-December quarters lose money each year. They carry the security test, insurance and a trip, and new sales are slow before the January deadlines.

### Low case by quarter (US$, no founder pay)

| Quarter | Active firms (end) | Practices | Cash in | ARR (end) | Costs | Net | Cumulative |
|---|---|---|---|---|---|---|---|
| Q1 Oct-Dec 26 | 4 | 0 | 241 | 333 | 13,040 | -12,799 | -12,799 |
| Q2 Jan-Mar 27 | 19 | 1 | 2,012 | 3,480 | 5,058 | -3,046 | -15,844 |
| Q3 Apr-Jun 27 | 35 | 2 | 2,505 | 6,767 | 7,116 | -4,611 | -20,456 |
| Q4 Jul-Sep 27 | 45 | 2 | 2,114 | 8,388 | 5,264 | -3,151 | -23,606 |
| Q5 Oct-Dec 27 | 53 | 2 | 2,583 | 10,122 | 10,969 | -8,386 | -31,992 |
| Q6 Jan-Mar 28 | 61 | 2 | 4,014 | 11,685 | 5,830 | -1,816 | -33,808 |
| Q7 Apr-Jun 28 | 70 | 3 | 4,494 | 13,947 | 7,677 | -3,183 | -36,991 |
| Q8 Jul-Sep 28 | 75 | 3 | 3,571 | 14,946 | 5,765 | -2,195 | -39,186 |
| Q9 Oct-Dec 28 | 79 | 3 | 3,910 | 15,878 | 11,999 | -8,090 | -47,276 |
| Q10 Jan-Mar 29 | 83 | 4 | 5,564 | 17,798 | 6,881 | -1,317 | -48,592 |
| Q11 Apr-Jun 29 | 88 | 4 | 6,006 | 19,179 | 8,725 | -2,719 | -51,311 |
| Q12 Jul-Sep 29 | 91 | 4 | 4,737 | 20,016 | 6,778 | -2,041 | -53,352 |

### High case by quarter (US$, no founder pay)

| Quarter | Active firms (end) | Practices | Cash in | ARR (end) | Costs | Net | Cumulative |
|---|---|---|---|---|---|---|---|
| Q1 Oct-Dec 26 | 12 | 0 | 1,026 | 1,474 | 15,244 | -14,218 | -14,218 |
| Q2 Jan-Mar 27 | 82 | 4 | 12,701 | 21,053 | 10,587 | 2,115 | -12,103 |
| Q3 Apr-Jun 27 | 155 | 6 | 15,682 | 40,363 | 13,058 | 2,624 | -9,479 |
| Q4 Jul-Sep 27 | 200 | 8 | 13,102 | 52,533 | 10,807 | 2,295 | -7,184 |
| Q5 Oct-Dec 27 | 240 | 10 | 16,668 | 66,358 | 19,955 | -3,286 | -10,471 |
| Q6 Jan-Mar 28 | 292 | 12 | 30,161 | 83,567 | 16,475 | 13,686 | 3,216 |
| Q7 Apr-Jun 28 | 347 | 13 | 33,436 | 101,055 | 18,692 | 14,744 | 17,959 |
| Q8 Jul-Sep 28 | 380 | 15 | 26,711 | 112,491 | 15,855 | 10,857 | 28,816 |
| Q9 Oct-Dec 28 | 409 | 17 | 29,942 | 123,706 | 25,432 | 4,510 | 33,327 |
| Q10 Jan-Mar 29 | 450 | 18 | 46,502 | 139,815 | 22,311 | 24,191 | 57,518 |
| Q11 Apr-Jun 29 | 494 | 20 | 50,284 | 157,396 | 24,582 | 25,702 | 83,220 |
| Q12 Jul-Sep 29 | 520 | 22 | 39,657 | 168,519 | 21,268 | 18,389 | 101,608 |

### Scenario summary

| Measure | Low | Base | High |
|---|---|---|---|
| Active firms at month 6 / 12 / 24 / 36 | 19 / 45 / 75 / 91 | 46 / 110 / 197 / 259 | 82 / 200 / 380 / 520 |
| ARR at month 12 / 24 / 36 (US$) | 8,400 / 14,900 / 20,000 | 25,400 / 50,400 / 71,100 | 52,500 / 112,500 / 168,500 |
| ARR at month 36 in Gs | about 114m | about 405m | about 961m |
| Cash in, years 1 / 2 / 3 (US$) | 6,900 / 14,700 / 20,200 | 20,500 / 48,400 / 70,900 | 42,500 / 107,000 / 166,400 |
| Costs, years 1 / 2 / 3 (US$) | 30,500 / 30,200 / 34,400 | 38,200 / 46,100 / 56,900 | 49,700 / 71,000 / 93,600 |
| Profit before founder pay, year 3 (US$) | -14,200 | 14,100 | 72,800 |
| Operating break-even (trailing 12 months) | not within 36 months | month 22 (July 2028) | month 14 (November 2027) |
| Cumulative cash positive for good | no | just short at month 36 (-1,300) | month 18 (March 2028) |
| **Peak cash need, no founder pay (US$)** | 53,400 (and still falling) | **24,300** (month 15) | 14,200 (month 3) |
| Peak cash need with founder pay of US$2,000 then US$3,000 a month | 113,400 | 61,300 | 16,500 |
| Same, plus a local EAS from month 18 | 121,600 | 69,500 | 16,500 |
| Blended acquisition cost, year 1 (marketing, travel, half the contractor; before commissions) | about US$270 | about US$155 | about US$120 |

**Sensitivity of the base case** (my model):

| Change | ARR month 36 | Year-3 profit | Peak cash need | Cumulative cash at month 36 |
|---|---|---|---|---|
| Base | US$71,100 | US$14,100 | US$24,300 | -US$1,300 |
| Guaraní weakens to Gs 7,000 = US$1 | US$57,900 | US$2,500 | US$32,500 | -US$24,000 |
| Prices 25% higher, same volumes | US$87,000 | US$27,900 | US$18,900 | +US$25,700 |
| Everyone prepays yearly | US$71,100 | US$14,200 | US$21,100 | +US$4,000 |
| No local contractor in year 1 | US$71,100 | US$14,100 | US$17,300 | +US$5,700 |
| First renewal 60% instead of 70% | US$65,800 | US$9,600 | US$24,400 | -US$7,600 |

**Unit economics, base case (my estimate)**
- Revenue per firm is about US$210-245 a year. Acquisition cost is about US$155 plus about US$20 of partner commission, so payback is about 9-12 months.
- With 70% first renewal, 85% after, and about 85% gross margin after payment costs, hosting and data, a firm stays about 4 years and is worth about US$750-800. LTV/CAC is about 4.
- The limit is the market size and the price level, not the unit economics.

**What the numbers mean**
- **Cash need is small, but so is the base-case business.** About US$25,000 covers the base case if the founder takes no pay. Plan US$35,000 to allow for a slow year or a weaker guaraní.
- **Paraguay alone does not pay a founder salary in the base case.** Year-3 profit before founder pay is about US$14,000. Only the high case (about 23% of the pool) yields a modest income (about US$73,000 a year before founder pay).
- **Three levers move the base case most:** price (a 25% higher price adds about US$14,000 of year-3 profit), currency (a return to Gs 7,000 removes about US$11,500), and a second market (see Regional expansion).
- **The low case is a kill signal, and it shows early.** By month 6 (March 2027) the low case has about 19 firms against a base of about 46.

## Regional expansion

The engine carries over: client and deal register, KYC thresholds, list checks with a log, deadline calendar, document templates and an auditor export. Each country needs its own legal mapping, report formats, list sources and templates (file 02).

| Order | Country | Why | Size signal | What changes | Payments note | Timing |
|---|---|---|---|---|---|---|
| 1 | **Paraguay car dealers** | Same supervisor, near-identical rulebook (Res 196/2020) | 845 canon payers in 2025; 1,719 registered (file 02) | Lower single-payment threshold (15 minimum wages), trade-in rule, mobile KYC for walk-in buyers (file 01) | Same as real estate | Months 7-9 (Apr-Jun 2027) |
| 2 | **Ecuador** | US-dollar economy; real fines; registration tied to the tax ID | 4,446 real-estate and construction firms and 542 car dealers supervised by the UAFE at end-2025 ([UAFE report 2025](https://www.uafe.gob.ec/wp-content/uploads/downloads/2026/rendicion_cuentas/Informe_de_RC_publicado_en_pag_web.pdf), via file 02). Since September 2025 obliged subjects must register with the UAFE within 30 working days or risk RUC suspension ([El Diario, Sep 2025](https://www.eldiario.ec/negocios/contribuyentes-en-ecuador-plazo-de-30-dias-para-cumplir-con-registro-en-la-unidad-de-analisis-financiero-y-economico-para-evitar-suspension-del-ruc-12092025/)) | A prevention system (SISLAFT) and reports in the UAFE's set format (Res UAFE-DG-2021-0362) ([Andersen Ecuador](https://ec.andersen.com/wp-content/uploads/2021/10/TIPS-025-2021-Resolución-UAFE.pdf)) | Ecuador charges 15% IVA on imported digital services. Card issuers withhold it when the foreign provider is not registered; providers may register voluntarily ([NMS Law](https://nmslaw.com.ec/blog/2020/09/13/sri-normas-declaracion-pago-servicios-digitales-noresidentes/); [Kintsugi guide](https://trykintsugi.com/sales-tax-guides/latam/ecuador), secondary). Prices in US$ suit Stripe and Paddle. | Prepare from month 15; launch about months 20-24 (mid-2028) |
| 3 | **Peru** | Construction and real-estate firms are obliged subjects of the UIF-Perú | Count not found ([SBS list of obliged subjects](https://www.sbs.gob.pe/prevencion-de-lavado-activos/Sujetos-Obligados/Relacion-de-Sujetos-Obligados)) | New rulebook and filing formats | Not checked (unverified) | Year 3+, only if Ecuador works |
| - | Uruguay | Crowded: HADA, Devsys and Precodata already sell to agencies (file 02) | - | - | - | Skip |
| - | Bolivia | Only large-taxpayer real-estate firms are covered ([Ferrere, May 2023](https://www.ferrere.com/en/news/instructivo-para-apnfd-con-enfoque-basado-en-gestion-de-riesgos-contra-lgi-ft-y-fpadm/)) | Small | - | - | Skip |
| - | Argentina | Large, price-sensitive, local vendors likely (file 02) | Not counted | - | - | Later, maybe never |

What Ecuador would do to the numbers (my estimate): if it reaches the same penetration as the Paraguay base case, it adds roughly 1.5-2 times Paraguay's ARR within 2-3 years of launch, at a cost of about 4-6 weeks of agent-assisted build plus local legal review. Ecuadorian competitors were not checked (unverified).

## Exit and partnerships

**Partnerships to start in year 1**
- **Audit practices and trainers:** the main channel (Go-to-market).
- **Compliance Paraguay** for PEP data, and **Criterion S.A.** (credit bureau) for identity data. Criterion co-hosted a SEPRELAD real-estate AML webinar in June 2026 ([SEPRELAD, 11 Jun 2026](https://www.seprelad.gov.py/?p=4038)); it is also a possible entrant.
- **ACIP and its tech partners** (Place Analyzer, the planned MLS with Grupo ITTI): an integration that pulls deals into the register ([Infonegocios on ACIP and Place Analyzer](https://infonegocios.com.py/default/acip-y-place-analyzer-se-unen-para-digitalizar-el-mercado-inmobiliario-permitira-acceder-en-tiempo-real-a-la-oferta-del-sector)).

**Likely buyers of the business**
- **Devsys** (Uruguay, Cumplo360). It already serves a Paraguayan real-estate firm and says it has 350+ clients in 18 countries. It lacks the SEPRELAD filings layer ([Devsys clients](https://www.devsys.com.uy/clientes.html)).
- **Pirani** (Colombia). It has a SEPRELAD guide page but no Paraguayan forms ([Pirani SEPRELAD page](https://www.piranirisk.com/es/hub-regulatorio/seprelad-prevencion-lavado-dinero-paraguay-siro)).
- **Criterion S.A.**, a mid-size Paraguayan audit firm that wants a software arm, or a real-estate software vendor.

**Valuation range**
- Small SaaS businesses under about US$500,000 ARR usually sell on a multiple of owner profit (SDE). Guides give about 2-3x for under US$100,000 ARR and 2.5-4.5x for US$100,000-500,000 ([Livmo](https://livmo.com/blog/micro-saas-valuation/), broker source). One analysis of 651 listings puts the Acquire.com median at 3.9x profit for 2024-2025 ([BigIdeasDB](https://bigideasdb.com/state-of-saas-valuations-2026)).
- **Base case at month 36:** about US$14,000 of profit before founder pay, so roughly US$40,000-60,000 on profit. A strategic buyer paying about 2x revenue would pay about US$140,000 (my estimate).
- **High case:** about US$73,000 profit and US$170,000 ARR, so roughly US$250,000-400,000 (my estimate).
- Realistic exits are an asset sale or licence to Devsys or Pirani, or keeping it as a cash-flow product after adding Ecuador.

## Risks and mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| **Low willingness to pay.** Fines are rare (1 in 2025), so firms accept a warning instead of paying | High | High | Sell time saved and "audit-ready", not fear. Lead with the auditor channel and the Al día plan at Gs 49,000. Test price in the first 20 interviews (Gate 1). |
| **The guaraní weakens again.** It moved from above Gs 8,000 (Apr 2025) to Gs 5,694 (Oct 2026) per dollar ([ABC Color](https://www.abc.com.py/economia/2025/04/03/cotizacion-del-dolar-sigue-escalando/); [BCP](https://www.bcp.gov.py/webapps/web/cotizacion/monedas)) | Medium | Medium (Gs 7,000 cuts year-3 profit from US$14,100 to US$2,500 in the base case) | Keep costs low and mostly variable. Review Gs prices every January. Consider US$ pricing for the Grupo and Estudio plans. |
| **SEPRELAD adds free reminders or record-keeping to SIRO.** It added a data-update form (Oct 2026), bulk upload (2025) and a supervision module (2024) (file 02) | Medium | High | Focus on what SIRO is unlikely to hold: the KYC file, screening log, documents, alert register and audit evidence. Integrate with SIRO formats rather than compete. |
| **Audit exemption (Res 328/2026) shrinks the auditor channel** | Medium | Medium | Sell the exemption-request workflow; keep a direct, self-serve route. |
| **Card-only checkout loses buyers.** Cards are about 23% of Paraguayan e-commerce payments ([dLocal](https://www.dlocal.com/payment-processors-in-latin-america/paraguay-payment-methods-processors-e-commerce-market-dlocal/)) | Medium | Medium | Reseller route with local invoice and transfer; dLocal or a local EAS later. |
| **Tax friction:** buyers withhold 4.5% INR or ask for a local invoice | High | Low | Accept 95.5%; publish an accountant's guide; offer the reseller route. |
| **Template liability:** a client is sanctioned after using a template | Low | Medium | Lawyer-reviewed templates with dates; "tool, not advice" terms; 12-month fee cap; E&O insurance. |
| **Data breach of ID documents or ROS drafts** | Low | High | Security test before launch and yearly; encryption; access logs; role limits; data-processing addendum ready for Ley 7593/2025. |
| **A regional vendor localises** (Devsys, Pirani) | Medium | Medium | Move first on Paraguay-specific filings; lock in auditors; be the obvious acquisition. |
| **Rule change:** a new real-estate rulebook or GAFILAT-driven update (file 01) | Medium | Medium | Rule-watch retainer with a local lawyer; agents rebuild templates in days; turn updates into a renewal reason. |
| **Founder distance:** selling to owner-run firms from abroad | High | Medium | Local contractor from month 3; two trips a year; WhatsApp-first support. |
| **Small ceiling:** about 2,300 paying firms | Certain | High | Car dealers in year 1; Ecuador in year 2; keep costs low. |

## Milestones and kill criteria

| Date | Milestone | Kill or pivot if |
|---|---|---|
| **Wed 11 Nov 2026 (day 30)** | Gate 1: 20 interviews done; MVP working | Fewer than 10 of 20 would pay Gs 100,000+ a month, **or** fewer than 3 auditors agree to pilot, **or** fewer than 5 letters of intent. Pivot: sell only to auditors as a working-papers tool, or stop. |
| **Fri 11 Dec 2026 (day 60)** | Gate 2: public launch; at least 8 paying pilots; security test passed; templates signed off | Fewer than 5 paying pilots |
| **Sat 9 Jan 2027 (day 90)** | Gate 3: at least 10 paying firms and 2 active partner practices | Fewer than 6 paying firms or no active practice |
| **31 Mar 2027 (month 6)** | 40+ paying firms after the CI deadline (base case is about 46) | Fewer than 20 (the low case). Stop spending; keep as a side product. |
| **30 Jun 2027 (month 9)** | 85+ firms after the audit deadline; 4+ practices | Fewer than 40 firms |
| **Sep 2027 (month 12)** | 110 firms, ARR about US$25,000; car-dealer plan live; Ecuador decision | Fewer than 60 firms |
| **Dec 2027-Mar 2028** | First renewals: at least 65% of first-year firms renew | First-year renewal below 55% |
| **Jul 2028 (month 22)** | Trailing 12-month break-even before founder pay; Ecuador build starts | Still loss-making and no Ecuador plan: sell or license the product |
| **Sep 2029 (month 36)** | About 260 firms, about US$71,000 ARR (base); Ecuador live | ARR below US$40,000 across all markets |

## Open questions

- What do registered auditors charge a small real-estate firm for the yearly report? This sets the ceiling for the Estudio plan and the add-on price. (Ask 5 practices in week 2.)
- Will auditors resell at 30% off, or only refer at 20%?
- Do Paraguayan debit cards and small-company credit cards work with a foreign Stripe account in PYG? Run a test with 5 pilot firms.
- **Tax adviser questions:** (1) How exactly does an IRE-general buyer account for IVA on a foreign SaaS paid by card? (2) Are IRE SIMPLE and RESIMPLE buyers INR withholding agents? (3) Can a sole trader with a RUC be treated as a "final consumer" under RG 109/2021? (4) Is the buyer's expense deductible if the INR was not withheld? (5) Would a Spanish company's fees escape INR under the Spain treaty?
- What are the official SUACE fees for an EAS, and what does a resident legal representative cost?
- Is the PEP data from Compliance Paraguay licensable for software use, and at what price?
- Does SEPRELAD accept RO Excel files generated by third-party software without objection?
- Ecuador: which local vendors already serve small agencies, and at what price?

## Sources

**Official (Paraguay)**
- BCP, daily reference exchange rates (9 Oct 2026: Gs 5,694.47 per US$, Gs 6,374.96 per euro): https://www.bcp.gov.py/webapps/web/cotizacion/monedas
- DNIT, RG 34/25 Annex 1 (RUC requirements for EAS, S.A., S.R.L.; Paraguayan cédula for the representative), Aug 2025: https://www.dnit.gov.py/web/portal-institucional/w/resoluci%C3%B3n-general-dnit-n.%C2%B0-34/25-anexo-1
- DNIT, criterion on IVA withholding on payments to foreign providers: https://www.dnit.gov.py/web/portal-institucional/w/retencion-a-proveedores-del-exterior-
- DNIT, more than 50,000 e-invoicers (Sep 2026): https://www.dnit.gov.py/web/e-kuatia/w/paraguay-supera-los-50.000-facturadores-electr%C3%B3nicos-y-avanza-en-la-digitalizaci%C3%B3n-tributaria
- DNIT, Spain tax treaty: https://www.dnit.gov.py/web/portal-institucional/w/paraguay-y-espana-refuerzan-la-cooperacion-economica-con-un-evento-sobre-el-convenio-para-evitar-la-doble-imposicion
- DNIT, new Chile tax treaty: https://www.dnit.gov.py/web/portal-institucional/w/nuevo-convenio-fortalece-la-cooperaci%C3%B3n-tributaria-entre-paraguay-y-chile
- Decreto 6515/2021 (INR on digital services: 30% deemed income, 15% rate; IRE-general buyers withhold), text at impuestospy: https://impuestospy.com/impuestos/decreto-n-6-515-21/
- Decreto 6225/2026 (minimum wage Gs 3,044,000), text at impuestospy: https://impuestospy.com/impuestos/decreto-n-6225-2026/
- SEPRELAD statistics portal: https://www.seprelad.gov.py/siro/estadisticaExterna/estadistica.xhtml
- SEPRELAD register and auditor lookup: https://www.seprelad.gov.py/siro/consultaExterna/consultaExternaSoAe.xhtml
- SEPRELAD Res 201/2020: https://www.seprelad.gov.py/resoluciones/resoluciones/res-n201-2020-reglamentacion-para-inmobiliarias.pdf
- SEPRELAD Res 328/2026 (audit exemption or deferral): https://www.seprelad.gov.py/resoluciones/resoluciones/Res.%20328.26_Excepci%C3%B3n%20de%20auditor%C3%ADa%20externa.pdf
- SEPRELAD Circular 2/2025: https://www.seprelad.gov.py/resoluciones/resoluciones/CIRCULAR%202-2025.pdf
- SEPRELAD notices: SIRO data update (2 Oct 2026) https://www.seprelad.gov.py/?p=4412 ; Annual Form webinar (8 Apr 2026) https://www.seprelad.gov.py/?p=3859 ; webinar with Criterion (11 Jun 2026) https://www.seprelad.gov.py/?p=4038
- SEPRELAD real-estate risk guide (2021): https://www.seprelad.gov.py/userfiles/files/Guia_de_Riesgos_LA_FT_Sector_Inmobiliario.pdf

**Tax and legal commentary**
- Ferrere, withholding on digital services (Apr 2021): https://ferrere.com/es/novedades/newsletter-retenciones-de-impuestos-por-servicios-digitales-en-paraguay/
- abogados.com.ar on RG 109/21 (B2C INR regime for non-resident digital providers): https://abogados.com.ar/paraguay-reglamenta-la-forma-de-pago-del-impuesto-a-la-renta-de-no-residentes-por-servicios-digitales-en-operaciones-b2c/29776
- EY Paraguay tax alert (Apr 2022): https://ey.com/content/dam/ey-unified-site/ey-com/es-py/technical/tax/documents/tax-alert-abril-2022.pdf
- dplnews on banks and card processors as collection agents: https://dplnews.com/paraguay-servicios-digitales-agentes-de-retencion-son-los-bancos-y-operadoras-de-tarjetas-de-credito/
- PayPro Global Paraguay tax guide: https://payproglobal.com/es/impuesto-de-ventas-saas/paraguay/
- Ferrere on Ley 7593/2025 (data protection): https://ferrere.com/es/novedades/paraguay-adopta-su-ley-de-proteccion-de-datos-personales/
- La Nación on Ley 7593/2025 (Nov 2025): https://www.lanacion.com.py/politica/2025/11/28/nueva-ley-de-datos-personales-refuerza-la-privacidad-sin-recortar-la-transparencia-publica/
- Ferrere on Res 201/2020 (EN): https://ferrere.com/en/news/new-regulations-for-the-prevention-of-asset-laundering-and-financing-of-terrorism-for-companies-and-individuals-involved-in-the/
- Ferrere on Res 196/2020 (car dealers): https://ferrere.com/es/novedades/nuevo-reglamento-de-prevencion-de-lavado-de-activos-y-financiamiento-del-terrorismo-para-personas-fisicas-o-juridicas-involucrad/

**Company setup and residency (secondary)**
- Golden Harbors, starting a business in Paraguay (Sep 2026): https://goldenharbors.com/articles/start-business-in-paraguay
- Infonegocios, residencies in Paraguay: https://infonegocios.com.py/infolegal/residencias-en-paraguay
- LibertyMundo, residency guide (2026): https://www.libertymundo.com/residency-in-paraguay-2/
- Cazvid, accountant pay: https://cazvid.com/es/blog/cuanto-gana-un-contador-en-paraguay ; assistant pay: https://cazvid.com/es/blog/cuanto-gana-un-auxiliar-contable-en-paraguay

**Payments**
- Stripe currencies (PYG supported, zero-decimal, no Amex): https://docs.stripe.com/currencies
- Stripe pricing, Ireland: https://stripe.com/ie/pricing ; US: https://stripe.com/us/pricing
- Stripe Managed Payments: https://stripe.com/en-mt/managed-payments ; Freemius on it: https://freemius.com/blog/stripe-merchant-of-record/ ; Dodo Payments on its fees: https://dodopayments.com/blogs/stripe-managed-payments-fees-explained
- Paddle supported countries (page data, read 10 Oct 2026): https://developer.paddle.com/concepts/sell/supported-countries-locales
- Paddle countries where it charges tax: https://www.paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for
- Paddle pricing: https://www.paddle.com/pricing
- dLocal Paraguay market page: https://www.dlocal.com/payment-processors-in-latin-america/paraguay-payment-methods-processors-e-commerce-market-dlocal/ ; docs: https://docs.dlocal.com/docs/paraguay
- Wise on Itaú Paraguay transfer fees: https://wise.com/py/blog/transferencia-internacional-itau-paraguay
- Infonegocios on Bancard debit cards online: https://infonegocios.com.py/infotecnologia/realizar-compras-online-con-tarjetas-de-debito-ya-es-posible
- ABC Color on the dollar above Gs 8,000 (Apr 2025; search snippet): https://www.abc.com.py/economia/2025/04/03/cotizacion-del-dolar-sigue-escalando/

**Market, channels and events**
- Gestión Contable SEPRELAD course: https://gestioncontableparaguay.com/courses/curso-seprelad-6-hs-de-estudio/
- Best Practices AML workshop: https://bestpractices.com.py/curso-taller-administracion-de-riesgos-ldft/
- Perspectivas on the canon deadline: https://perspectivas.com.py/noticias/bancos-financieras-inmobiliarias-y-casas-de-cambio-tienen-plazo-hasta-el-30-de-junio-para-pagar-su-cuota-al-sistema-antilavado
- Cáceres & Schneider SEPRELAD report: https://consultoria.com.py/caceres-schneider-informe-de-cumplimiento-seprelad-plazos-para-entrega/
- HADA: https://hada.com.uy/ ; Pirani AML plans: https://www.piranirisk.com/es/planes-y-precios/aml ; Pirani SEPRELAD page: https://www.piranirisk.com/es/hub-regulatorio/seprelad-prevencion-lavado-dinero-paraguay-siro ; Devsys clients: https://www.devsys.com.uy/clientes.html
- La Nación on Compliance Paraguay (Aug 2024): https://www.lanacion.com.py/negocios/2024/08/13/consultora-presenta-herramienta-que-identifica-a-personas-expuestas-politicamente/ ; theKYB Paraguay: https://thekyb.com/our-data/paraguay/
- Infonegocios on ACIP (Aug 2025): https://infonegocios.com.py/default/mercado-inmobiliario-en-transformacion-acip-impulsa-ley-de-corretaje-y-modernizacion-digital-en-el-sector ; on ACIP and Place Analyzer: https://infonegocios.com.py/default/acip-y-place-analyzer-se-unen-para-digitalizar-el-mercado-inmobiliario-permitira-acceder-en-tiempo-real-a-la-oferta-del-sector
- Última Hora on car dealers (Nov 2019): https://www.ultimahora.com/seprelad-el-50-playa-autos-eluden-el-control-antilavado-n2852685 ; on the Colegio de Contadores (Jul 2026): https://www.ultimahora.com/contadores-conmemoraron-110-anos-y-anunciaron-triple-evento-de-capacitacion
- Infonegocios, Expo Internacional de Inversiones Inmobiliarias 2026 (Ciudad del Este, 22-23 Oct): https://infonegocios.com.py/default/comienza-la-cuenta-regresiva-para-la-expo-internacional-de-inversiones-inmobiliarias-paraguay-2026 ; Expo Real Estate Paraguay: https://infonegocios.com.py/plus/expo-real-estate-paraguay-se-viene-el-epicentro-donde-se-redefine-el-futuro-del-mercado-inmobiliario

**Regional and exit**
- UAFE Ecuador accountability report 2025: https://www.uafe.gob.ec/wp-content/uploads/downloads/2026/rendicion_cuentas/Informe_de_RC_publicado_en_pag_web.pdf
- El Diario on UAFE registration and RUC suspension (Sep 2025): https://www.eldiario.ec/negocios/contribuyentes-en-ecuador-plazo-de-30-dias-para-cumplir-con-registro-en-la-unidad-de-analisis-financiero-y-economico-para-evitar-suspension-del-ruc-12092025/
- Andersen Ecuador on Res UAFE-DG-2021-0362: https://ec.andersen.com/wp-content/uploads/2021/10/TIPS-025-2021-Resolución-UAFE.pdf
- NMS Law on Ecuador IVA on digital services: https://nmslaw.com.ec/blog/2020/09/13/sri-normas-declaracion-pago-servicios-digitales-noresidentes/ ; Kintsugi Ecuador VAT guide: https://trykintsugi.com/sales-tax-guides/latam/ecuador
- SBS Peru list of obliged subjects: https://www.sbs.gob.pe/prevencion-de-lavado-activos/Sujetos-Obligados/Relacion-de-Sujetos-Obligados
- Ferrere on Bolivia's DNFBP rules (May 2023): https://www.ferrere.com/en/news/instructivo-para-apnfd-con-enfoque-basado-en-gestion-de-riesgos-contra-lgi-ft-y-fpadm/
- Livmo on micro-SaaS valuation: https://livmo.com/blog/micro-saas-valuation/ ; BigIdeasDB, State of Small SaaS Valuations 2026: https://bigideasdb.com/state-of-saas-valuations-2026

**Sibling files used:** [01-law-and-requirements.md](01-law-and-requirements.md) (duties, deadlines, thresholds), [02-market-and-competition.md](02-market-and-competition.md) (buyer counts, competitors, channels), [the B2 report](../reports/paraguay-b2.md).

