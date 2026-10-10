# Peru gaming SPLAFT kit: go-to-market, payments, company setup and financials (deep dive 04)

Date: 10 Oct 2026. Status: complete draft. Builds on [the B1 report](../reports/peru-b1.md), [01-law-and-requirements.md](01-law-and-requirements.md) and [02-market-and-competition.md](02-market-and-competition.md). Facts taken from those files keep their original sources.

Conventions:
- Money is in soles (S/). US$ figures use S/ 3.45 per US$, the rate used in the other files. The BCRP bank rate was S/ 3.431-3.437 on 6 Oct 2026 ([BCRP series](https://estadisticas.bcrp.gob.pe/estadisticas/series/api/PD04640PD-PD04639PD/json/2026-09-28/2026-10-08), search summary).
- Prices are net of IGV (Peru's 18% VAT) unless marked.
- "My estimate" marks planning assumptions. "(unverified)" marks facts I could not confirm. "Search summary" means I saw the source only through a search engine summary.

Working name: **SPLAFT Sala**.

## Summary

- **Price it as a cheap tool, well below a part-time officer.** Plans net of IGV: **Sala S/ 2,900 a year** (one room), **Cadena S/ 4,900** (2-3 rooms), **Cadena Plus S/ 9,900** (4-10 rooms), **Corporativo from S/ 23,880** (11+ rooms, casinos, online and betting networks). Monthly billing costs 20% more. A one-off **Kit IAOC 2026 at S/ 1,500** catches firms that will not subscribe before 15 February. Anchors: a compliance-officer job ad at S/ 2,000 a month, Pirani at about US$ 3,645 a year before its AML add-on, and fines of S/ 5,500-44,000 per infraction ([02 file](02-market-and-competition.md)).
- **The selling season is now.** The first IAOC and IAI under Res. SBS 01015-2026 are due on **15 Feb 2027**, and the board must approve the IAOC within 30 days of year end ([01 file](01-law-and-requirements.md)). An MVP built in 3 weeks and sellable in 6-8 weeks lands in early December 2026. That is just in time if the first offer is the IAOC kit plus a subscription.
- **Channels in priority order:** (1) direct outreach to the 301 firms named in MINCETUR's public registers; (2) SPLAFT consultants, law firms and trainers on a 20% referral, with a free adviser console; (3) local SUCTR system vendors as import and resale partners; (4) SONAJA and ATCE webinars; (5) Peru Gaming Show in June 2027. Year-1 marketing budget: **S/ 48,000 (US$ 14,000)**, plus a part-time Lima sales contractor and a partner compliance expert.
- **Selling from a foreign company is costly for this buyer.** Peru treats SaaS fees paid abroad as "digital services". The buyer must withhold **30% income tax** unless a treaty applies ([SUNAT Informe 055-2021](https://www.sunat.gob.pe/legislacion/oficios/2021/informe-oficios/i055-2021-7T0000.pdf); [UP Forseti](https://revistas.up.edu.pe/index.php/forseti/article/download/2831/1863/7336), search summary). If the buyer does not withhold, it cannot deduct the cost (unverified). Only treaties with **Chile, Canada, Mexico, Korea and Portugal** remove the withholding for SaaS (same SUNAT report). The buyer must also self-assess 18% IGV on a foreign service. Slot-machine income is outside IGV ([SUNAT Informe 017-2012](https://www.sunat.gob.pe/legislacion/oficios/2012/informe-oficios/i017-2012.pdf), search summary), so that IGV is a pure cost to most buyers.
- **Recommendation: open a Peruvian S.A.C. in month 1, unless the founder's company is resident in one of those five treaty countries.** Remote set-up with a lawyer costs about **S/ 3,500-5,500 all-in** and takes 3-4 weeks. Official SUNARP fees are under S/ 150; the notary is S/ 300-800; there is no legal minimum capital ([Trámites Perú](https://tramitesperu.com/sunarp/constitucion-empresa/)). Running costs are about **S/ 1,300 a month**: accountant, virtual office, bank and a stipend for the Peru-resident legal representative. The S.A.C. invoices in soles with IGV, collects by bank transfer and local card gateways, and pays 10% income tax on the first S/ 82,500 of profit (MYPE regime).
- **Stripe and Paddle do not fix the Peru problem.** Stripe works from a foreign account and charges in PEN, but Peru is not a Stripe country and the withholding remains ([Stripe global](https://stripe.com/global); [Stripe currencies](https://docs.stripe.com/currencies)). Paddle supports Peruvian buyers but handles Peru tax only for B2C sales ([Paddle tax](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)). Both ban gambling itself, not software sold to casinos. Describe the product carefully to avoid a mistaken review.
- **Base case: 74 paying firms and S/ 410,000 ARR (US$ 119,000) by October 2029.** Profit before founder pay and income tax is about S/ 200,000 (US$ 58,000) in year 3. It breaks even on a trailing 12-month basis in month 14 (Dec 2027). **Peak cash need is about S/ 65,000 (US$ 19,000)**; plan S/ 100,000.
  - **Low case:** 26 firms and S/ 151,000 ARR. It never pays back. Stopping at month 9 limits the loss to about S/ 96,000.
  - **High case:** 122 firms and S/ 708,000 ARR (US$ 205,000).
- **A good small business, not a venture.** Growth beyond Peru gaming means other UIF-supervised sectors in Peru, or Colombia's roughly 400 slot operators. Likely buyers on exit: a SUCTR or casino-system vendor, a LatAm compliance vendor (Pirani, KYC Systems) or a law firm. Small SaaS firms sell for about 2-4x revenue ([FE International](https://www.feinternational.com/blog/saas-valuation-multiples); [BigIdeasDB](https://bigideasdb.com/saas-valuation-multiples-2026), search summaries).
- **Kill criteria:** fewer than 2 design partners from 25 conversations by 15 Nov 2026; fewer than 4 paying firms by 31 Jan 2027; fewer than 6 by 30 Apr 2027; fewer than 15 by 31 Oct 2027; first-year renewal below 60%.

## Pricing and packaging

### What buyers pay or risk today (anchors)

| Anchor | Amount | Source |
|---|---|---|
| Compliance officer, small obliged firm (job ad) | S/ 2,000 a month | [Computrabajo](https://pe.computrabajo.com/trabajo-de-oficial-de-cumplimiento), via [02 file](02-market-and-competition.md) |
| Minimum wage (cashiers, room staff) | S/ 1,230 a month from 1 Oct 2026; S/ 1,300 planned in H1 2027 | [Cuatrecasas](https://www.cuatrecasas.com/es/latam/laboral/art/incrementan-remuneracion-minima-vital); [Canal N](https://canaln.pe/actualidad/gobierno-incrementa-remuneracion-minima-vital-1230-soles-n495337) (search summaries) |
| Outsourced accounting for a small firm | about S/ 500 a month (Lima MYPE average) to S/ 1,050 | [cuantomecuesta.com](https://cuantomecuesta.com/pe/contador-contabilidad/) (search summary); [ByB Consultores](https://bybconsultores.pe/servicios/outsourcing-contable-y-tributario/) via B1 |
| Annual SPLAFT course | S/ 169-211 per person | [Seminarios Top](https://seminariostop.com/seminarios-y-talleres/curso-anual-a-oficiales-de-cumplimiento-y-sujetos-obligados-a-informar-a-la-uif-sbs-laft/) via 02 |
| Generic compliance SaaS (Pirani Starter) | about US$ 3,645 a year (S/ 12,600), AML module extra | [Pirani pricing](https://piranirisk.com/es/planes-y-precios/cumplimiento-normativo?hsLang=en) via 02 (unverified) |
| SPLAFT consultants and law firms | quote only; no public prices found in three searches | 02 file; my searches (unverified) |
| Fine per infraction | 1-8 UIT = S/ 5,500-44,000 (UIT 2026 = S/ 5,500) | [01 file](01-law-and-requirements.md); [El Peruano](https://elperuano.pe/noticia/285208-mef-establece-en-s-5-500-la-unidad-impositiva-tributaria-para-2026) |
| Gaming tax burden | roughly S/ 3,000 per machine a year, or about S/ 240,000 for an 80-machine room | 02 file (my estimate there) |

A one-room firm already pays about S/ 24,000 a year for an officer. Missing RO data alone is a 7 UIT (S/ 38,500) fine. A tool at S/ 2,900 a year is about 12% of the officer's pay and 1.2% of the room's gaming tax bill.

### Plans

| Plan | Who | Firms in register | Annual, prepaid (net of IGV) | Monthly option | With 18% IGV (annual) | What is included |
|---|---|---|---|---|---|---|
| **Sala** | One room, lighter regime | 185 | **S/ 2,900** (about US$ 840) | S/ 290 | S/ 3,422 | All core modules: RO with promo winners, client files and sworn statement, list screening (UN, OFAC, EU), induction and training tracker, refresh reminders, unusual-operation log, ROS drafts, IAOC and IAI pack in both formats, inspection pack. 5 users plus cashier logins. |
| **Cadena** | 2-3 rooms | 89 | **S/ 4,900** | S/ 490 | S/ 5,782 | Sala plus per-room views, 15 users, CSV import presets |
| **Cadena Plus** | 4-10 rooms, or any firm on the full risk-assessment regime | 21 (plus up to 60 "reforzado" firms) | **S/ 9,900** | S/ 990 | S/ 11,682 | Cadena plus risk-assessment and segmentation module, group dashboard, priority support |
| **Corporativo** | 11+ rooms, casinos, online operators, betting-shop networks | 6 land + 49 online (23 with shop networks) | **from S/ 23,880** | from S/ 1,990 | from S/ 28,178 | Plus corporate-officer workspace across entities, online RO import, agent-shop capture forms (priced per shop above 50 shops), SSO |
| **Adviser console** | Consultants, law firms, trainers | unknown | free | - | - | Multi-client view of deadlines and gaps, training sessions for many firms, 20% of first-year fees on referrals |

Counts are from the [02 file](02-market-and-competition.md) (MINCETUR registers, 10 Oct 2026).

**One-off items:**
- **Kit IAOC 2026: S/ 1,500.** For firms that will not subscribe yet. They upload their 2026 spreadsheets (RO, training lists, shareholders, rooms). They get the IAOC in MINCETUR and UIF formats, an IAI checklist, and a gap list. The fee counts toward a subscription if they sign by 31 March 2027. Sold only from December to February.
- **Arranque (set-up): S/ 450 for Cadena, S/ 900 for Cadena Plus and Corporativo.** Data load, import mapping and two training calls. Free for Sala, which is self-serve.
- **Founding-customer offer:** 15% off the first year for firms that sign before 30 April 2027, in return for a short case study or reference call.

**Packaging rules (my estimate):**
- **List the Sala price on the website.** Small firms decide in one or two calls. Cadena Plus and Corporativo are sold by quote.
- **Bill yearly in advance by default.** The monthly option costs 20% more. Yearly prepayment funds the business and matches the yearly IAOC cycle.
- **Include list screening against the free UN, OFAC and EU lists.** Charge separately only for a paid PEP data source, if a customer wants it.
- **Price increases:** at most once a year, by Peru's CPI plus 2%, announced 60 days ahead (my estimate).

### IGV (VAT) treatment

- **From a Peruvian S.A.C.:** each invoice adds 18% IGV, which is 16% IGV plus a 2% municipal tax ([Damalion](https://www.damalion.com/lima-peru-business-registration-2026-complete-guide-to-costs-and-setup-timeline/); [IGV guide](https://discourse.weareopen.coop/news/igv-in-peru-a-simple), search summary). Quote prices as "S/ 2,900 + IGV". That is the normal B2B format in Peru (unverified).
- **Most buyers cannot recover that IGV.** SUNAT has said that running slot machines "is not taxed" with IGV ([SUNAT Informe 017-2012](https://www.sunat.gob.pe/legislacion/oficios/2012/informe-oficios/i017-2012.pdf), search summary). Gaming pays its own taxes instead: the 12% Impuesto a los Juegos and the ISC ([Tribunal Constitucional](https://www.tc.gob.pe/jurisprudencia/2007/03595-2006-AA.pdf), search summary; [SUNAT ISC guide](https://orientacion.sunat.gob.pe/node/1811)). So buyers will compare prices including IGV. A 2018 press report said the sector would have to pay IGV ([Focus Gaming News, 23 Jul 2018](https://focusgn.com/latinoamerica/el-juego-pagara-mas-impuestos-en-peru)). What followed was the ISC, but the current IGV position should be confirmed with a Peruvian accountant (unverified).
- **IGV deposit system (detracciones).** Services "gravados con el IGV" above S/ 700 are subject to a 12% deposit into the seller's Banco de la Nación account ([LP Derecho](https://lpderecho.pe/detracciones-sunat-sube-12-tasa-pago-adelantado-igv/); [kom.pe](https://kom.pe/calculadora-detracciones/), search summaries). If this applies to SaaS, annual invoices of S/ 2,900 and up trigger it. The deposit can only be used to pay the S.A.C.'s own taxes. Whether software subscriptions fall in this annex is unverified. The accountant must confirm before the first invoice.

## Go-to-market

### Selling seasons and deadlines

| When | Event | What it means for sales | Source |
|---|---|---|---|
| Since 9 Apr 2026 | Res. SBS 01015-2026 in force, with no adaptation period | Every firm is exposed now on the RO, induction and supplier files | [01 file](01-law-and-requirements.md) |
| Ongoing, every shift | RO entries for cash-outs of US$ 2,500 or more and every promo winner | The daily-use hook; drives retention | 01 file |
| 19-22 Oct 2026 | IAGR conference in Lima, with MINCETUR | Meet DGJCMT and law-firm people; not a sales event | [SiGMA](https://sigma.world/es/news/lima-sera-sede-de-la-iagr-2026/) via 02 |
| Nov 2026 - Jan 2027 | Year-end data gathering; board must approve the IAOC within 30 days of year end | **Main buying window** | 01 file |
| **15 Feb 2027** | First IAOC and IAI under the new rule, in both MINCETUR and UIF formats | Hard deadline; sell the IAOC kit | 01 file |
| Mid-June 2027 | Peru Gaming Show, Jockey exhibition centre, Lima; 8,000+ visitors from 40 countries in past editions; 2027 dates "coming soon" | Second peak; meet chains and SUCTR vendors | [Peru Gaming Show](https://www.perugamingshow.com/) |
| 2026 onwards | FATF/GAFILAT fifth-round evaluation of Peru begins | More supervision of DNFBPs likely (my inference) | 01 file |
| Every Nov-Feb | Renewals of yearly plans | Renewal and upsell season | my plan |

The year has two selling peaks: **November to February** (IAOC) and **May to July** (Peru Gaming Show and mid-year inspections). March, April and August are quiet (my estimate).

### Channels, in priority order

1. **Direct outreach to the 301 land-based firms.** MINCETUR's room register gives each firm's name, RUC, rooms, addresses and machines ([02 file](02-market-and-competition.md)). Load it into a CRM. Segment it by size and region. Start with the 185 single-room firms and the 89 small chains. Contact by phone and WhatsApp to the room, then by email and a printed letter to the general manager. The cost is staff time.
2. **SPLAFT consultants, law firms and trainers.** An officer can serve only one obliged firm at a time (Norma art. 19.2, [01 file](01-law-and-requirements.md)). So the multi-client players are advisers: PRCP, Caro & Asociados, PLAFT Suite, plaftperu, Grupo Contable, and trainers such as Seminarios Top and Academia OC ([02 file](02-market-and-competition.md)). Give them a free console, co-branded webinars and 20% of first-year fees. Some will see the tool as a threat to their manual-writing fees. Pitch it as the tool that lets them serve more clients with fewer hours.
3. **Local SUCTR vendors.** 29 vendors connect every machine to MINCETUR and SUNAT. About ten are Peruvian SACs, such as Link Tek, Wargos, Orion Consulting and Integrated Gaming System (02 file). A CSV import preset for their cash-out reports removes double typing. Offer a 20-25% resale margin, or a white label. One vendor deal can reach dozens of small rooms. This is also the main competitive threat (see Risks).
4. **Associations.** SONAJA (operators and suppliers) and ATCE (50+ operators at its 2023 assembly) (02 file). Offer a joint webinar on 01015-2026 and a 10% member discount.
5. **Events.** Peru Gaming Show in June 2027: a small stand or a talk slot. Add regional breakfasts in Arequipa, Ica, Iquitos (Loreto) and Tacna; half of the firms have rooms outside Lima (02 file).
6. **Content and search.** Spanish guides that answer real queries: "IAOC 2026 casinos tragamonedas", "registro de operaciones US$ 2,500", "inducción SPLAFT 30 días", "01015-2026 resumen". Each guide offers a free gap check.
7. **Trade press.** Focus Gaming News, Yogonet, SoloAzar and SiGMA cover every Peruvian rule change (02 file). Send them news on the launch and on customer numbers.

Online operators (49 firms) and betting-shop networks (23) are handled by the founder directly, as Corporativo deals, from month 6.

### Sales motion

- **Hook: a free "Diagnóstico 01015" (gap check).** Twenty questions online, about 10 minutes. It shows which duties are missing and the fine for each, in UIT and soles. It captures the officer's and manager's contacts.
- **Demo: 30 minutes on Zoom or WhatsApp video.** Show three things: a cash-out logged in under 3 minutes, a promo winner, and the IAOC built from the year's data.
- **Trial: 14 days with their own data.** The customer imports last year's RO spreadsheet and staff list. The IAOC preview appears in the trial, but the export needs a paid plan.
- **Close: the general manager pays; the officer champions.** Small firms decide in one or two calls. Chains take one to three months (my estimate).
- **Pay: yearly invoice from the S.A.C., paid by bank transfer.** Cards via a local gateway are an option.
- **Onboard: a guided 45-minute set-up** (see the [product file](03-product-and-tech.md), flow 1). For Cadena and up, add two calls with the partner compliance expert.
- **Retain:** a monthly e-mail "compliance health" score to the manager; the IAOC pack every January; a rule-change bulletin with updated templates.

**Team for sales:**
- The founder runs product, Corporativo deals and partner deals. He visits Lima twice a year.
- A part-time **Lima sales and customer-success contractor** from January 2027, at S/ 3,500 a month. A full-timer follows in year 2.
- A **partner compliance expert** on a S/ 2,000 a month retainer from day 1. Ideally a former gaming officer. This person reviews content, joins demos and has Portal PLAFT experience, which matters because only registered officers can see the RO template (Norma art. 14.6, [01 file](01-law-and-requirements.md)).

## 90-day launch plan

Day 1 is Monday 12 Oct 2026. Day 90 is Saturday 9 Jan 2027. Product steps follow the [product file](03-product-and-tech.md).

| Dates | Product | Company and legal | Sales and marketing | Exit test |
|---|---|---|---|---|
| **12-18 Oct** (week 1) | Agents start the MVP: firm profile, RO, client file, screening | Decide the entity route (S.A.C., or a treaty-country company). Brief a Lima corporate lawyer. Start the apostilled power of attorney. | Pull the MINCETUR registers into a CRM. Draft a Spanish landing page with the gap check. Recruit the partner compliance expert. | Lawyer and expert engaged |
| **19-25 Oct** | Training, induction, reminders; IAOC data model | Name reservation (S/ 26.40) | Attend IAGR Lima (19-22 Oct) if possible. Book 25 discovery calls with officers and managers. | 10 calls booked |
| **26 Oct - 1 Nov** | MVP feature-complete on staging | Lawyer starts the legal content: terms, data-processing agreement, privacy notice, templates | Recruit 5 design partners (free until 31 Jan, then the founding price). Sign a webinar date with one law firm. | **MVP done** |
| **2-15 Nov** | Design partners use it with real data; fix daily | Sign the S.A.C. deed (notary or SID-SUNARP). Order the security test. | Webinar 1 (week of 16 Nov): "01015-2026: what changes in your 2026 IAOC", with the law firm. Letter wave 1 to 301 firms. Gap check goes live. | **15 Nov: 5 design partners signed, or rethink** |
| **16-29 Nov** | Security test and fixes. IAOC export in both formats. | SUNARP registration, RUC, bank account, electronic invoicing set-up. Accountant engaged. | LinkedIn and Google ads start. Calls to all single-room firms in Lima. Referral agreements with 2-3 advisers. | S.A.C. registered |
| **30 Nov - 13 Dec** | **Public launch (Tue 1 Dec)**: Sala self-serve; Kit IAOC 2026 | Insurance bound; terms published | Launch press note to trade media. First invoices to design partners who convert. Founder in Lima (1-2 weeks): visits, breakfast with advisers. | First 3 paying firms |
| **14 Dec - 3 Jan** | Import presets for the first two SUCTR exports seen | - | IAOC push: phone and WhatsApp campaign to all 301 firms. Letter wave 2 (IAOC kit). Sales contractor hired (starts 4 Jan). | 6 paying firms plus 3 kits |
| **4-9 Jan** | Year-end IAOC flows tested with customers | First IGV and payroll filings via the accountant | Webinar 2: "Build the 2026 IAOC in 5 days". Approach the first SUCTR vendor. | Pipeline of 20 open deals |
| **To 31 Jan** (after day 90) | Support the board-approval rush | - | Close the IAOC season | **31 Jan: 9 paying firms (base); fewer than 4 is a kill signal** |

## 12-month marketing plan and budget

November 2026 to October 2027. Fixed marketing budget **S/ 48,000 (US$ 13,900)**. The founder's two trips (S/ 17,000) and the sales contractor are counted separately in the model. Prices of events and ads are my estimates (unverified); the Peru Gaming Show does not publish stand prices ([Peru Gaming Show](https://www.perugamingshow.com/)).

| Item | Months | Budget (S/) | Notes |
|---|---|---|---|
| Webinars with law-firm and association partners (3) | Nov, Jan, May | 3,000 | Zoom, promotion, small speaker fee |
| Letters to 301 firms, two waves (print and courier) | Nov, Dec | 7,500 | About S/ 12.50 per letter (unverified) |
| LinkedIn ads to officers and managers in Peru gaming | Nov-Feb, Jun | 4,500 | Small, targeted |
| Google Ads on Spanish compliance terms | all year | 4,800 | S/ 400 a month |
| Peru Gaming Show 2027: small stand or talk slot | Jun | 15,000 | Price not published (unverified) |
| SONAJA / ATCE sponsorship or membership | Feb-Jun | 4,000 | (unverified) |
| Trade-press sponsored articles | Dec, Jun | 3,500 | Focus Gaming News, Yogonet (unverified) |
| Content: guides and templates reviewed by the lawyer | Oct-Mar | 3,000 | IAOC guide, RO guide, induction kit |
| Regional breakfasts (Arequipa, Ica, Iquitos, Tacna) | Mar-Apr, Sep | 2,700 | With a local adviser |
| **Total fixed** | | **48,000** | |
| Referral commissions (variable) | all year | about 9,000 | 20% of first-year fees on about 30% of sales |

**Monthly focus:**
- **Nov:** gap check live, webinar 1, letter wave 1, design partners.
- **Dec:** launch, Lima trip, letter wave 2 (IAOC kit), press note.
- **Jan:** IAOC push, webinar 2, sales contractor starts.
- **Feb:** last-minute IAOC kits; ask happy customers for references.
- **Mar-Apr:** regional breakfasts; first SUCTR vendor integration; case studies.
- **May:** webinar 3 on inspections and the 30-day induction.
- **Jun:** Peru Gaming Show; second Lima trip; push for chains and online firms.
- **Jul-Aug:** adviser programme; content on refresh cycles (staff files yearly, suppliers every 2 years).
- **Sep-Oct:** early renewals and IAOC 2027 pre-sales; budget for year 2.

Years 2 and 3 budgets: S/ 42,000 and S/ 38,000. Spend shifts from letters and ads to the show, partners and referrals.

## Payments and tax friction

### Who pays and how

The buyers are Peruvian companies (S.A.C. and S.A.), many of them family firms outside Lima. The amounts are S/ 2,900-24,000 a year. Peruvian B2B buyers usually pay against an electronic invoice by bank transfer (unverified). Corporate cards exist, for example BBVA's Empresarial and Business Opex cards ([BBVA summary sheet](https://www.bbva.pe/content/dam/public-web/peru/documents/empresas/financiamiento/tarjeta-corporate/Hoja-Resumen-Informativa-vigente-a-partir-del-01-12-2025.pdf), search summary), but their use by small gaming firms is unknown (unverified).

### Do Peruvian cards work for cross-border online payments?

- **Yes, with two conditions.**
  - The cardholder chooses whether to enable internet purchases and foreign use, and can change this later (SBS Res. 5570-2019 amending the card regulation, [La República](https://larepublica.pe/economia/2019/11/29/sbs-hace-cambios-en-el-uso-de-las-tarjetas-de-credito-finanzas-pacifico-business-school), search summary).
  - Strong customer authentication is required for card-not-present purchases. The deadline was extended to 1 Apr 2026 (SBS Res. 2286-2024 and 02220-2025, [La República](https://larepublica.pe/economia/2025/07/02/nuevas-obligaciones-para-pagar-con-tarjetas-de-credito-y-debito-en-peru-sbs-oficializa-norma-a-partir-de-esta-fecha-atmp-56528), search summary). Use 3-D Secure, and expect some automatic renewals to need re-authentication (unverified).
- **Issuer fees.** The card's bank may add a foreign-transaction or FX fee ([Stripe currencies](https://docs.stripe.com/currencies)). I did not find Peruvian banks' exact fees (unverified). Charging in PEN avoids FX for soles cards.

### Option 1: Stripe from a foreign company

- **Peru is not a Stripe country.** Stripe lists only Brazil and Mexico in Latin America ([Stripe global](https://stripe.com/global)). A Peruvian S.A.C. therefore cannot open a Stripe account.
- **A foreign Stripe account can charge Peruvian cards in PEN.** PEN is a supported presentment currency, but American Express does not support PEN charges ([Stripe currencies](https://docs.stripe.com/currencies)).
- **Fees on a US account:** 2.9% + US$ 0.30, plus 1.5% for international cards, plus 1% if currency conversion is needed. Stripe Billing adds 0.7% of billing volume. Stripe Tax costs 0.5% per transaction where you are registered ([Stripe pricing](https://stripe.com/pricing)). On a S/ 2,900 annual plan that is about S/ 178 (6.1%), or about US$ 52.
- **Gambling rules.** Stripe prohibits "games of chance including gambling, internet gambling, casino games" and sports betting. It says nothing about software sold to gambling firms ([Stripe restricted businesses](https://stripe.com/legal/restricted-businesses)). SPLAFT Sala never touches player funds. Describe it as "anti-money-laundering compliance software for regulated businesses". Ask Stripe support for written confirmation before launch.

### Option 2: a merchant of record

- **Paddle** supports buyers in Peru, lists PEN, and shows tax-inclusive prices ([Paddle countries](https://developer.paddle.com/concepts/sell/supported-countries-locales)). It charges Peru's 18% only on B2C sales ([Paddle tax](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/), updated 1 Aug 2025). Its fee is 5% + US$ 0.50 per checkout transaction ([Paddle pricing](https://www.paddle.com/pricing)).
  - Paddle bans "betting-related products", "lotteries ... or games of chance" and "sports forecasting/odds making" ([Paddle prohibited list](https://paddle.com/help/start/intro-to-paddle/what-am-i-not-allowed-to-sell-on-paddle), updated 13 Apr 2026). Software for casinos is not named. Expect questions at onboarding.
  - **The catch for Peru:** Paddle becomes the seller. The Peruvian buyer then pays a foreign company, so the 30% withholding issue below still applies. Paddle takes no part in the buyer's withholding. A merchant of record solves seller-side VAT, which is not the Peru problem here.
- **Lemon Squeezy** belongs to Stripe since 2024. Stripe's own "Managed Payments" (reported at 5% + US$ 0.50) was in public preview in early 2026 ([Fungies](https://fungies.io/lemon-squeezy-stripe-acquisition-saas-founders-2026/), secondary source; unverified). The same withholding issue applies.
- **dLocal** collects Peruvian cards, PagoEfectivo, Yape and bank payments for foreign merchants, in PEN ([dLocal docs](https://docs.dlocal.com/docs/peru), search summary). It is built for larger merchants; fees are by quote (unverified).

### Option 3: bank transfer from Peru to a foreign account

- BBVA Perú charges about US$ 32 (SWIFT included) to send up to US$ 3,000 abroad. It adds US$ 40 if the sender pays all correspondent costs ("OUR") ([BBVA notice](https://bbva.pe/content/dam/public-web/peru/documents/prefooter/avisos-importantes/Aviso-Importante_Modificacion-de-la-Comision-de-Ordenes-de-Pago-Del-Exterior-y-Transferencia-al-Extranjero.pdf); [BBVA Empresas](https://www.bbva.pe/empresas/productos/comercio-internacional/transferencias-al-exterior/transferencia-al-exterior.html), search summaries).
- On a US$ 840 Sala plan that is 4-9% for the buyer, plus the receiving bank's fee. It is workable for Corporativo deals, poor for Sala.

### Option 4: a Peruvian S.A.C. (recommended)

- **Bank transfer in soles** to the S.A.C.'s account against an electronic invoice. Domestic transfers are cheap (unverified).
- **Cards through a local gateway:** Culqi, Izipay or Niubiz at about 3.3-4.5% + IGV per transaction. Published figures differ by source ([kom.pe](https://kom.pe/izipay-vs-niubiz-vs-culqi/), search summary). Support for recurring charges is unverified, so bill yearly and send a payment link.
- **No withholding and no IGV self-assessment for the buyer.** The buyer gets a normal Peruvian invoice. Detracciones may apply (see IGV above).

### Buyer-side tax friction when the seller is foreign

1. **Income-tax withholding of 30%.**
   - Peru taxes "digital services" used in Peru, wherever the provider sits (LIR art. 9(i)). A digital service is one delivered online that is "essentially automatic" and not viable without IT. Application hosting and application service provision are on the regulation's list (Reglamento LIR art. 4-A(b), quoted in [SUNAT Informe 055-2021](https://www.sunat.gob.pe/legislacion/oficios/2021/informe-oficios/i055-2021-7T0000.pdf)). A SaaS subscription fits.
   - The Peruvian payer withholds **30%** of the gross amount ([UP Forseti](https://revistas.up.edu.pe/index.php/forseti/article/download/2831/1863/7336); [ByB Consultores](https://bybconsultores.pe/?p=4827), search summaries).
   - If it does not withhold, the expense is not deductible (same ByB summary; unverified).
   - Courts have narrowed what counts as "digital" for consulting with human input ([Gestión](https://gestion.pe/economia/sunat-vs-corte-suprema-controversia-por-la-tributacion-de-consultorias-online-impuesto-a-la-renta-noticia/), search summary). Pure SaaS still fits SUNAT's definition.
2. **Treaty relief.**
   - **Chile, Canada, Mexico, Korea and Portugal:** SUNAT says digital-service income is "business profits" (art. 7). Peru can tax it only through a permanent establishment in Peru ([SUNAT Informe 055-2021](https://www.sunat.gob.pe/legislacion/oficios/2021/informe-oficios/i055-2021-7T0000.pdf)). The buyer needs the seller's tax-residence certificate covering the payment date ([Forvis Mazars on Informe 131-2020](https://www.forvismazars.com/pe/es/insights/tax-alerts/certificados-de-retencion-y-cdis), search summary).
   - **Switzerland and Brazil:** these treaties treat digital services as royalties (art. 12), so treaty-rate withholding remains (same SUNAT report).
   - **Bolivia, Colombia, Ecuador (Andean Decision 578):** SUNAT decides case by case between business profits and "technical services", which are taxed where the benefit arises ([EY on Informe 049-2024](https://taxnews.ey.com/news/2024-1409-peruvian-tax-authority-establishes-guidelines-for-tax-treatment-of-digital-services-under-andean-community-multilateral-agreement), search summary).
   - **Japan:** a treaty exists ([ProActivo](https://proactivo.com.pe/peru-cierra-convenio-para-evitar-doble-tributacion-y-elusion-fiscal-con-reino-unido-y-avanza-con-francia/), search summary). Its treatment of digital services is unverified.
   - **No treaty:** the US, the UK (negotiated, not in force), France (in Congress), Spain, Estonia and the other EU countries except Portugal (same ProActivo source).
3. **IGV self-assessment of 18%.** A Peruvian business using a foreign service pays the IGV itself, through Form 1662 or the new procedure in RS 000047-2026/SUNAT. It can claim the credit only after paying ([LP Derecho](https://lpderecho.pe/tratamiento-tributario-en-el-impuesto-a-la-renta-e-igv-de-los-servicios-con-sujetos-no-domiciliados/); [Misha](https://misha.pe/?p=32190), search summaries; [SUNAT RS 047-2026](https://www.sunat.gob.pe/legislacion/superin/2026/000047-2026.pdf)). Gaming income is outside IGV (above), so for most buyers this 18% is a cost and extra paperwork.
4. **Must a foreign seller register for Peruvian IGV?** Only for B2C. Decreto Legislativo 1623 taxes digital services bought by individuals without a business since 1 Oct 2024. Designated foreign providers register with SUNAT and collect it ([El Peruano](https://elperuano.pe/noticia/249505-d-leg-no-1623-esta-es-la-norma-para-recaudar-igv-por-uso-de-servicios-digitales-en-el-peru)). All SPLAFT Sala buyers are companies, so no registration is needed. That matches Paddle's "B2C only" rule.

**What a Sala customer really pays** (S/ 2,900 list, my calculation):

| Seller | Buyer pays the seller | Buyer pays SUNAT | Seller receives | Buyer's total cost |
|---|---|---|---|---|
| Peruvian S.A.C. | 3,422 (with IGV) | 0 | 2,900 (then pays IGV and income tax) | **3,422** |
| Treaty-country company (e.g. Portugal), certificate in hand | 2,900 | 522 IGV | 2,900 | **3,422**, plus Form 1662 paperwork |
| Non-treaty company, buyer withholds 30% from the price | 2,030 | 870 withholding + 522 IGV | 2,030 | **3,422** (seller loses 30%) |
| Non-treaty company, buyer "grosses up" to keep the seller whole | 2,900 | 1,243 withholding + 522 IGV | 2,900 | **4,665** (+36%) |

A 30% withholding wipes out the seller's margin, or makes the product 36% dearer. A compliance product should not rely on its buyers ignoring tax rules.

## Company setup (needed or not, costs)

### Decision

- **If the founder's company is resident in Chile, Canada, Mexico, Korea or Portugal:** sell from it at first. Use Stripe or invoices plus bank transfer. Give buyers the tax-residence certificate each year and a one-page IGV note. Open a S.A.C. later, if buyers push back on Form 1662.
- **Otherwise (US, UK, Estonia, most EU):** a **Peruvian S.A.C. is needed from the first paid sale.** The 30% withholding is the reason. Open it in October-November 2026, in time for the December launch.
- **Do not route sales through a local reseller instead.** The reseller would have to withhold 30% on what it pays the foreign company, so the problem just moves.

### S.A.C. set-up costs

| Item | Official fee or market price | Source |
|---|---|---|
| Name reservation (online) | S/ 26.40 | [Trámites Perú](https://tramitesperu.com/sunarp/constitucion-empresa/) (updated 25 Jun 2026) |
| SUNARP registration | S/ 59.40 assessment + S/ 19.80 per appointed manager + S/ 3 per S/ 1,000 of capital | same; based on Res. SUNARP 143-2019. Other sites quote S/ 40-46 for the assessment fee ([Commenda](https://www.commenda.io/peru/incorporation-cost)) |
| Notary deed | S/ 300-800 (another source: S/ 800-1,200) | Trámites Perú; [Damalion](https://www.damalion.com/lima-peru-business-registration-2026-complete-guide-to-costs-and-setup-timeline/) |
| Articles of association drafted by a lawyer | S/ 150-500 | Trámites Perú |
| Lawyer, full remote service | S/ 1,000-3,000 | [Commenda](https://www.commenda.io/peru/incorporation-cost) |
| Translation of foreign documents | about S/ 103 each | Commenda |
| Legalisation of foreign documents | about S/ 138 | Commenda |
| Apostilled power of attorney in the founder's country | varies by country (unverified) | [Holafly guide](https://esim.holafly.com/expats/how-start-a-business-peru/) (search summary) |
| Tax registration (RUC) | free | Commenda |
| Bank account opening | S/ 150-300; a first deposit of about S/ 900 is often asked | Damalion; Commenda |
| Municipal licence | S/ 600-1,500, only if there is a physical office; a virtual office may not need one (unverified) | Damalion |
| **Total, done remotely with a lawyer** | **about S/ 3,500-5,500 (US$ 1,000-1,600)** | my sum |
| Total, done in person with a cheap notary | about S/ 500-1,500 | Trámites Perú |

**Rules that matter for a foreign founder:**
- **Two shareholders minimum** for an S.A.C. They can be the founder and his foreign company. 100% foreign ownership is allowed ([Damalion](https://www.damalion.com/lima-peru-business-registration-2026-complete-guide-to-costs-and-setup-timeline/); [IUS360](https://ius360.com/sociedad-por-acciones-cerrada-simplificada-un-nuevo-regimen-societario-que-entra-para-revolucionar-la-constitucion-de-sociedades-en-peru/), search summary).
- **No legal minimum capital** since the 1998 Companies Law. Banks expect a deposit; S/ 1,000-5,000 is typical ([Trámites Perú](https://tramitesperu.com/sunarp/constitucion-empresa/); [Damalion](https://www.damalion.com/lima-peru-business-registration-2026-complete-guide-to-costs-and-setup-timeline/)).
- **A legal representative domiciled in Peru** is required. A non-resident founder would need a work or investor visa to take the role himself ([Holafly guide](https://esim.holafly.com/expats/how-start-a-business-peru/); [Commenda](https://www.commenda.io/peru/incorporation-cost), search summaries). Use the partner compliance expert or the sales contractor, with limited powers. Keep banking powers with the founder through a separate notarised power.
- **The cheap online S.A.C.S. route is unclear for foreigners.** It needs a Peruvian electronic ID (DNIe) or a digital certificate for every shareholder, and RENIEC and SUNARP have disagreed on foreigners ([IUS360](https://ius360.com/sociedad-por-acciones-cerrada-simplificada-un-nuevo-regimen-societario-que-entra-para-revolucionar-la-constitucion-de-sociedades-en-peru/), search summary; [Trámites Perú](https://tramitesperu.com/sunarp/constitucion-empresa/)). Use the notary route.
- **Time:** 7-15 business days for the notary and SUNARP, then 1-3 days for the RUC and 5-10 days for the bank. About 3-4 weeks in all ([Damalion](https://www.damalion.com/lima-peru-business-registration-2026-complete-guide-to-costs-and-setup-timeline/); [Trámites Perú](https://tramitesperu.com/sunarp/constitucion-empresa/)). Banks often want one director to appear in person (Damalion). Plan the account opening for the founder's December trip.

### Running costs

| Item | Monthly | Source |
|---|---|---|
| Accountant (books, IGV, income tax, electronic invoicing, payroll if any) | S/ 500-1,050 | [cuantomecuesta.com](https://cuantomecuesta.com/pe/contador-contabilidad/) (search summary); [ByB Consultores](https://bybconsultores.pe/servicios/outsourcing-contable-y-tributario/) |
| Virtual office and tax address (San Isidro) | S/ 98 (S/ 1,176 a year with IGV) | [Company Hero](https://www.companyhero.com/es/pe/oficina-virtual/san-isidro) (search summary) |
| Bank account maintenance | about S/ 53 | [Commenda](https://www.commenda.io/peru/incorporation-cost) |
| Legal representative stipend | S/ 500 (my estimate) | - |
| **Total used in the model** | **S/ 1,300 (about US$ 375)** | my estimate |

SUNAT checks that the tax address is real and may ask for proof of rent payments ([Forbes Perú](https://forbes.pe/brand-voice/2026-06-22/company-hero-desembarca-en-peru-y-suma-un-nuevo-capitulo-a-su-expansion-latinoamericana/), search summary). Keep the virtual-office contract and invoices.

### Taxes of the S.A.C.

- **Income tax (MYPE regime):** 10% on the first 15 UIT of profit (S/ 82,500 in 2026), 29.5% above that. Monthly prepayments are 1% of revenue. The regime covers revenue up to 1,700 UIT ([SUNAT guide](https://orientacion.sunat.gob.pe/sites/default/files/inline-files/REMYPe-%20VF_0.pdf); [Trámites Perú](https://tramitesperu.com/sunat/regimen-mype/), search summaries).
- **Dividends to a foreign shareholder:** 5% withholding ([Damalion](https://www.damalion.com/lima-peru-business-registration-2026-complete-guide-to-costs-and-setup-timeline/)).
- **Do not pay the foreign parent a software licence fee or service charge.** That payment faces the same 30% withholding unless a treaty applies. Transfer-pricing rules would also apply (unverified). Keep the business and its profit in the S.A.C., and take money out as dividends or founder pay. Get one hour of tax advice on where the code's IP should sit.
- **Base-case year-3 income tax:** about S/ 43,000 on S/ 200,000 profit (my calculation). The model shows profit before this tax.

### Data protection

- Peru's regulation (DS 016-2024-JUS, in force 29 Mar 2025) applies to processors wherever they are, when they act for a controller in Peru ([IAPP](https://iapp.org/news/a/se-publica-el-nuevo-reglamento-de-protecci-n-de-datos-personales-en-per-)).
- Cross-border transfers need an adequate country or model contract clauses (arts. 18-20).
- Breaches must be reported to the authority and to the people affected within 48 hours (art. 34).
- The [01 file](01-law-and-requirements.md) also lists a duty for foreign firms to name a representative in Peru. IAPP's summary does not mention it (unverified). A S.A.C. covers this either way.

## Contracts and liability

- **Contracting party:** the S.A.C., under Peruvian law. Disputes go to arbitration at the Lima Chamber of Commerce for Corporativo contracts, and to Lima courts for small plans (my proposal; arbitration costs unverified).
- **Documents** (Spanish, drafted by the Lima lawyer in October and November 2026, about S/ 12,000 in the model):
  1. **Terms of service.** Accepted online for Sala, plus a signed order form for Cadena and up.
  2. **Data-processing agreement.** The customer is the controller of its client, worker and supplier files. SPLAFT Sala is the processor (encargado). It covers hosting location, model clauses for transfers outside Peru, subprocessors, 48-hour breach notice, and deletion or return at the end.
  3. **Confidentiality annex for SPLAFT data.** RO data are confidential by law (Res. SBS 03622-2025 art. 22.1, per the B1 report; the land-based rule likely says the same). ROS content must never reach the player; tipping off is prohibited (exact article unverified). Only the officer's role may see ROS drafts. Support staff may see customer data only with written consent per ticket.
  4. **Service levels.** 99.5% monthly uptime. Daily backups. A full export at any time, including a nightly RO file the customer keeps, because the rule requires a backup copy (Norma art. 14.4, [01 file](01-law-and-requirements.md)). Data kept at least 5 years (art. 28).
  5. **Partner agreements:** referral (20% of first-year fees, 12-month tail), SUCTR vendor integration and resale (20-25% margin), and a services contract with the compliance expert (confidentiality and IP assignment).
- **Liability position:**
  - The obliged firm and its officer remain legally responsible for the SPLAFT. The product is a tool, not legal advice. Filings are made by the officer through Portal PLAFT, ROSEL and SISDEL (arts. 14.6, 15.3, [01 file](01-law-and-requirements.md)).
  - Templates are reviewed by a Peruvian lawyer, but each firm must adapt and approve its own manual.
  - Cap liability at 12 months of fees. Exclude indirect loss. Exclude fines caused by the customer's own data or decisions.
  - Under Peru's Civil Code, clauses that exclude liability for wilful or gross fault are void (unverified). So the cap cannot cover gross negligence. That makes security and backups the real protection.
- **Insurance:** cyber and professional liability cover, budgeted at S/ 5,000 a year (unverified; get Lima broker quotes).
- **Security test:** an external test before launch, then a retest each year. Narrow web-app tests cost about US$ 5,000-15,000 ([Blaze Infosec](https://www.blazeinfosec.com/post/how-much-does-penetration-testing-cost/), search summary). The model uses S/ 17,000 (US$ 4,900) for the first test and S/ 10,000 for each retest. That assumes a lower-cost Latin American tester (unverified).

## Financial model

### Assumptions

| Assumption | Low | Base | High | Basis |
|---|---|---|---|---|
| Buyer pool | 301 land + 49 online (23 with shop networks) | same | same | [02 file](02-market-and-competition.md) |
| New paying firms, years 1 / 2 / 3: Sala | 9 / 7 / 6 | 22 / 18 / 15 | 35 / 26 / 20 | my estimate |
| Cadena (2-3 rooms) | 4 / 4 / 3 | 10 / 9 / 7 | 16 / 13 / 10 | my estimate |
| Cadena Plus | 1 / 1 / 0 | 2 / 2 / 1 | 3 / 2 / 2 | my estimate |
| Corporativo | 1 / 1 / 1 | 2 / 2 / 2 | 3 / 4 / 4 | my estimate; none before March 2027 |
| First renewal / later renewals | 65% / 75% | 80% / 85% | 88% / 92% | my estimate; includes the 1-3% yearly consolidation of firms |
| Prices (net of IGV, yearly in advance) | S/ 2,900 / 4,900 / 9,900 / 23,880 | same | same | plans above |
| Year-1 founding discount on new firms | 15% | 15% | 15% | plan |
| Price rise for new firms from year 2 | 5% a year | same | same | my estimate |
| Set-up fees | S/ 450 (Cadena), S/ 900 (Plus, Corporativo) | same | same | plan |
| Kit IAOC sales (Jan-Feb), years 1 / 2 / 3 | 5 / 3 / 2 | 10 / 6 / 4 | 15 / 10 / 6 | S/ 1,500 each |
| Seasonality of new sales, year 1 (Nov to Oct) | 0.1, 1.0, 2.0, 1.6, 0.7, 0.7, 0.8, 1.5, 0.8, 0.8, 1.0, 1.0 | same | same | IAOC season and Peru Gaming Show |
| Seasonality, later years | 1.0, 1.6, 2.0, 1.2, 0.5, 0.6, 0.7, 1.3, 0.8, 0.6, 0.8, 0.9 | same | same | my estimate |
| Build | Founder plus AI agents; tools S/ 1,400 a month for 3 months, then S/ 700 | same | same | about US$ 400, then US$ 200 a month (unverified plan prices) |
| Hosting, e-mail, backups, monitoring, e-signature | S/ 400 / 700 / 1,000 a month in years 1 / 2 / 3 | same | same | my estimate |
| Lawyer | S/ 12,000 in months 1-2, then S/ 800 a month | same | same | my estimate |
| Security test | S/ 17,000 (month 2), retest S/ 10,000 (months 14, 26) | same | same | see above |
| S.A.C. set-up / trademark | S/ 4,500 / S/ 600 | same | same | above; trademark fee unverified |
| Company running costs | S/ 1,300 a month | same | same | above |
| Insurance | S/ 5,000 a year | same | same | unverified |
| Partner compliance expert | S/ 2,000 a month | S/ 2,000 | S/ 2,500 | job ad anchor S/ 2,000 |
| Sales and success contractor (from Jan 2027), years 1 / 2 / 3 | S/ 2,500 / 2,000 / 2,000 | S/ 3,500 / 4,500 / 5,000 | S/ 3,500 / 4,500 / 5,000, plus a second person at S/ 4,500 from year 2 | my estimate; minimum wage S/ 1,230 |
| PEP and screening data | S/ 500 a month from year 2 | same | same | unverified |
| Marketing, years 1 / 2 / 3 | S/ 48,000 / 25,000 / 20,000 | S/ 48,000 / 42,000 / 38,000 | S/ 55,000 / 50,000 / 45,000 | plan above |
| Founder trips | S/ 17,000 a year (two trips) | same | same | my estimate |
| Referral commissions | 20% of first-year fees on 30% of new sales | same | same | plan |
| Payment and bank fees | 1.5% of cash in | same | same | mostly bank transfer |
| Founder pay | none in the tables; a variant adds S/ 8,000 a month from month 13 | | | |
| Income tax | not deducted; see "Taxes of the S.A.C." | | | |

Month 1 is November 2026 and month 36 is October 2029. October 2026 build costs are counted in month 1. "Cash in" is yearly prepaid bookings, so cash comes before revenue is earned. "ARR" is the yearly value of active plans at list price. The script is in the session scratchpad, not in the repo.

### Base case by quarter (S/, no founder pay)

| Quarter | New | Churned | Active (end) | Cash in | ARR (end) | Costs | Net | Cumulative cash |
|---|---|---|---|---|---|---|---|---|
| Q1 Nov 26-Jan 27 | 9 | 0 | 9 | 36,135 | 32,100 | 86,179 | -50,044 | -50,044 |
| Q2 Feb-Apr 27 | 6 | 0 | 15 | 24,440 | 51,500 | 36,256 | -11,816 | -61,860 |
| Q3 May-Jul 27 | 11 | 0 | 26 | 59,148 | 117,380 | 54,847 | 4,301 | -57,559 |
| Q4 Aug-Oct 27 | 10 | 0 | 36 | 56,683 | 180,360 | 36,562 | 20,121 | -37,438 |
| Q5 Nov 27-Jan 28 | 14 | 2 | 48 | 142,818 | 281,628 | 79,704 | 63,114 | 25,676 |
| Q6 Feb-Apr 28 | 5 | 1 | 52 | 37,795 | 295,073 | 41,156 | -3,361 | 22,315 |
| Q7 May-Jul 28 | 7 | 2 | 57 | 81,669 | 309,512 | 52,682 | 28,987 | 51,302 |
| Q8 Aug-Oct 28 | 5 | 2 | 60 | 70,709 | 316,341 | 41,776 | 28,933 | 80,235 |
| Q9 Nov 28-Jan 29 | 11 | 4 | 67 | 210,792 | 386,715 | 80,874 | 129,917 | 210,152 |
| Q10 Feb-Apr 29 | 4 | 2 | 69 | 45,496 | 395,916 | 42,765 | 2,731 | 212,882 |
| Q11 May-Jul 29 | 6 | 3 | 72 | 91,384 | 406,080 | 54,053 | 37,331 | 250,213 |
| Q12 Aug-Oct 29 | 4 | 2 | 74 | 73,810 | 409,632 | 43,190 | 30,620 | 280,833 |

Base-case fixed costs by year (S/):

| Cost line | Year 1 | Year 2 | Year 3 |
|---|---|---|---|
| AI coding tools | 10,500 | 8,400 | 8,400 |
| Hosting and tools | 4,800 | 8,400 | 12,000 |
| Lawyer | 20,000 | 9,600 | 9,600 |
| Security test and retest | 17,000 | 10,000 | 10,000 |
| S.A.C. set-up and trademark | 5,100 | 0 | 0 |
| Company running costs | 15,600 | 15,600 | 15,600 |
| Insurance | 5,000 | 5,000 | 5,000 |
| Partner compliance expert | 24,000 | 24,000 | 24,000 |
| Sales and success contractor | 35,000 | 54,000 | 60,000 |
| Screening data | 0 | 6,000 | 6,000 |
| Marketing | 48,000 | 42,000 | 38,000 |
| Founder trips | 17,000 | 17,000 | 17,000 |
| **Fixed total** | **202,000** | **200,000** | **205,600** |
| Variable (referrals, payment fees) | about 11,800 | about 15,300 | about 15,300 |

Building with AI agents keeps product cost to about 15% of year-1 spend: tools, hosting and the security test. Selling costs dominate. The sales contractor, compliance expert, marketing and trips make up about 60%.

### Low case by quarter (S/, no founder pay)

| Quarter | New | Churned | Active (end) | Cash in | ARR (end) | Costs | Net | Cumulative cash |
|---|---|---|---|---|---|---|---|---|
| Q1 Nov 26-Jan 27 | 4 | 0 | 4 | 17,160 | 15,600 | 84,053 | -66,893 | -66,893 |
| Q2 Feb-Apr 27 | 2 | 0 | 6 | 11,580 | 23,400 | 32,472 | -20,892 | -87,784 |
| Q3 May-Jul 27 | 6 | 0 | 12 | 42,523 | 70,780 | 50,654 | -8,131 | -95,916 |
| Q4 Aug-Oct 27 | 3 | 0 | 15 | 7,395 | 79,480 | 30,055 | -22,660 | -118,575 |
| Q5 Nov 27-Jan 28 | 7 | 1 | 21 | 69,234 | 128,914 | 61,415 | 7,819 | -110,757 |
| Q6 Feb-Apr 28 | 2 | 1 | 22 | 16,710 | 134,374 | 29,534 | -12,824 | -123,581 |
| Q7 May-Jul 28 | 3 | 2 | 23 | 42,482 | 129,026 | 39,645 | 2,837 | -120,743 |
| Q8 Aug-Oct 28 | 1 | 1 | 23 | 8,700 | 129,026 | 29,105 | -20,405 | -141,148 |
| Q9 Nov 28-Jan 29 | 6 | 3 | 26 | 93,310 | 154,002 | 60,270 | 33,040 | -108,108 |
| Q10 Feb-Apr 29 | 1 | 1 | 26 | 13,823 | 153,065 | 29,133 | -15,309 | -123,417 |
| Q11 May-Jul 29 | 2 | 2 | 26 | 39,450 | 150,033 | 39,174 | 276 | -123,141 |
| Q12 Aug-Oct 29 | 1 | 1 | 26 | 9,418 | 150,751 | 29,066 | -19,649 | -142,790 |

### High case by quarter (S/, no founder pay)

| Quarter | New | Churned | Active (end) | Cash in | ARR (end) | Costs | Net | Cumulative cash |
|---|---|---|---|---|---|---|---|---|
| Q1 Nov 26-Jan 27 | 14 | 0 | 14 | 55,760 | 50,600 | 91,367 | -35,607 | -35,607 |
| Q2 Feb-Apr 27 | 13 | 0 | 27 | 52,645 | 96,300 | 40,804 | 11,841 | -23,766 |
| Q3 May-Jul 27 | 15 | 0 | 42 | 71,158 | 175,780 | 59,554 | 11,604 | -12,162 |
| Q4 Aug-Oct 27 | 15 | 0 | 57 | 94,591 | 281,240 | 41,731 | 52,860 | 40,698 |
| Q5 Nov 27-Jan 28 | 18 | 2 | 73 | 181,946 | 399,236 | 99,340 | 82,606 | 123,305 |
| Q6 Feb-Apr 28 | 8 | 2 | 80 | 100,105 | 444,341 | 60,620 | 39,485 | 162,789 |
| Q7 May-Jul 28 | 11 | 2 | 89 | 134,016 | 496,627 | 72,386 | 61,630 | 224,419 |
| Q8 Aug-Oct 28 | 8 | 2 | 95 | 124,815 | 514,632 | 59,795 | 65,020 | 289,439 |
| Q9 Nov 28-Jan 29 | 16 | 3 | 108 | 281,718 | 617,854 | 101,176 | 180,541 | 469,980 |
| Q10 Feb-Apr 29 | 6 | 2 | 112 | 131,886 | 653,085 | 62,174 | 69,712 | 539,692 |
| Q11 May-Jul 29 | 8 | 2 | 118 | 176,326 | 695,394 | 73,864 | 102,461 | 642,153 |
| Q12 Aug-Oct 29 | 6 | 2 | 122 | 136,855 | 707,884 | 60,993 | 75,861 | 718,015 |

### Scenario summary

| Measure | Low | Base | High |
|---|---|---|---|
| Paying firms at month 6 / 12 / 24 / 36 | 6 / 15 / 23 / 26 | 15 / 36 / 60 / 74 | 27 / 57 / 95 / 122 |
| Share of the 350 obliged firms at month 36 | 7% | 21% | 35% |
| ARR at month 12 / 24 / 36 (S/) | 79,000 / 129,000 / 151,000 | 180,000 / 316,000 / 410,000 | 281,000 / 515,000 / 708,000 |
| ARR at month 36 (US$) | 44,000 | 119,000 | 205,000 |
| Cash in, years 1 / 2 / 3 (S/) | 79,000 / 137,000 / 156,000 | 176,000 / 333,000 / 421,000 | 274,000 / 541,000 / 727,000 |
| Costs, years 1 / 2 / 3 (S/) | 197,000 / 160,000 / 158,000 | 214,000 / 215,000 / 221,000 | 233,000 / 292,000 / 298,000 |
| Profit before founder pay and income tax, year 3 (S/) | -2,000 | 201,000 (US$ 58,000) | 429,000 (US$ 124,000) |
| Break-even, trailing 12 months | month 27 (Jan 2029) | month 14 (Dec 2027) | month 12 (Oct 2027) |
| Cumulative cash positive for good | not within 36 months | month 15 (Jan 2028) | month 11 (Sep 2027) |
| **Peak cash need, no founder pay (S/)** | 158,000 if never stopped; about 96,000 if stopped at month 9 | **65,000 (US$ 19,000), in May 2027** | 51,000, in Dec 2026 |
| Peak cash need with founder pay of S/ 8,000 a month from month 13 (S/) | 335,000 | 65,000 (profit after founder pay: 22,000 in year 2, 105,000 in year 3) | 51,000 |

**Unit economics, base case (my calculation):**
- **CAC.** Year-1 marketing, sales contractor, trips and referral fees come to about S/ 109,000 for 36 new firms. That is about **S/ 3,000 per firm**, or about S/ 2,500 if half of the contractor's time counts as support.
- **Payback.** The average first-year fee is about S/ 4,260, so payback is about 7-9 months.
- **LTV.** Average ARR per firm is about S/ 5,500 by year 3. Gross margin is about 85% after hosting, data, support share and payment fees. With 80%, then 85% renewal, a firm stays about 3.5 years out of the first five. LTV is about **S/ 16,700**, so **LTV/CAC is about 5-6**.
- **The ceiling is the buyer pool, not the unit economics.** The base case needs 21% of all obliged firms by month 36.

**What the numbers mean:**
- **Cash need is small.** Plan S/ 100,000 (US$ 29,000) of founder funds to cover the base case with a buffer. The low case is visible early: at month 6, about 6 firms against a base of 15.
- **The founder can draw about S/ 8,000 a month (US$ 2,300) from year 2** in the base case and still stay cash-positive. Peru alone does not support a larger income. That needs the high case or expansion.
- **Yearly prepayment creates a big cash spike every November to January.** Keep a reserve, because costs are spread across the year.

## Regional expansion

| Option | Why | Payment and company notes | When |
|---|---|---|---|
| **Other UIF-supervised sectors in Peru** (real estate, notaries, vehicle dealers, pawnshops and others) | Same SBS framework, same portals, same IAOC logic. The UIF sanctioned 325 obliged subjects between Dec 2020 and Nov 2022; 36% were in real estate and construction ([PUCP](https://tesis.pucp.edu.pe/items/be69e02d-5df5-49ce-924c-69869d1ad219), search summary). SBS publishes sector guides ([SBS guías](https://www.sbs.gob.pe/prevencion-de-lavado-activos/Supervisados-UIF/Guias-del-SPLAFT), via B1). | The same S.A.C. sells; no new entity | From month 12, if the base case holds |
| **Betting-shop networks and online operators (Peru)** | 23 holders with 4,497 shops; 49 online firms ([02 file](02-market-and-competition.md)) | Corporativo deals; same S.A.C. | Month 6-18 |
| **Colombia** | About 400 slot operators and 3,700+ venues under Coljuegos SIPLAFT (02 file) | Colombia taxes digital services from abroad. Its "significant economic presence" regime takes 3% of gross income; technical services face 20% withholding ([Holland & Knight](https://www.hklaw.com/en/insights/publications/2026/01/revision-del-regimen-presencia-economica-significativa-en-colombia); [Garrigues](https://www.garrigues.com/es_ES/noticia/software-service-saas-desafio-alta-complejidad-tributaria-mundo-digital-e-interconectado); [Bancolombia](https://blog.bancolombia.com/negocios/novedades-tributarias-nuevas-disposiciones/), search summaries). Selling from the Peruvian S.A.C. falls under Andean Decision 578, which may tax services where they are used (above). Expect a Colombian S.A.S. or a local partner. | Year 2-3; needs a separate legal mapping |
| Dominican Republic, Mexico, Panama, Chile, Ecuador | Few buyers, unclear duties, or an incumbent (KYC Systems in Mexico) (02 file) | - | Not planned |

Expansion order: (1) Peru gaming to break-even; (2) other Peruvian obliged sectors; (3) Colombia gaming. Each new Peruvian sector reuses the S.A.C., the partner network and most of the code.

## Exit and partnerships

- **Partners who could become buyers:**
  - **Local SUCTR vendors** (Link Tek, Wargos, Orion Consulting and others). They gain an AML module for their installed rooms.
  - **Casino-system vendors** (Win Systems/WIGOS, which claims 300+ casinos; IGT; Octavian). A Peru or LatAm compliance add-on ([02 file](02-market-and-competition.md)).
  - **LatAm compliance software:** Pirani (Colombia) or KYC Systems (Mexico). They gain the gaming RO and IAOC know-how and a Peruvian customer base.
  - **Screening or ID vendors:** verifica.id, Experian Perú, Inspektor. Cross-selling.
  - **Law firms or consultancies** (PRCP and others). Unlikely buyers of software, but possible licensees of a white-label edition.
- **Valuation range:**
  - Sub-US$ 1M SaaS businesses sell for about 2-4x annual revenue, or 2-4x seller's earnings ([FE International](https://www.feinternational.com/blog/saas-valuation-multiples); [beancount.io](https://beancount.io/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide), search summaries). Listings on Acquire.com average about 2.6x revenue, and asking prices are an upper bound ([BigIdeasDB](https://bigideasdb.com/saas-valuation-multiples-2026), search summary).
  - Base case at month 36: S/ 410,000 ARR and S/ 200,000 profit, so about **S/ 0.8-1.6 million (US$ 240,000-470,000)**. Expect a discount for founder dependence and a single small market.
- **Best partnership to pursue first:** a resale or white-label deal with one Peruvian SUCTR vendor. It is the fastest route to small rooms and the most natural acquirer.

## Risks and mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| **Light enforcement:** no public gaming SPLAFT fines found since 2022, so small rooms keep using spreadsheets ([02 file](02-market-and-competition.md)) | high | high | Sell time saved on the IAOC and calm at inspections, not fear. Track MINCETUR and GAFILAT activity. Use the IAOC kit as a low-commitment entry. |
| **Small, shrinking pool:** 301 firms, down 1-3% a year | certain | medium | Corporativo and betting networks; other UIF sectors from year 2; Colombia later |
| **Tax friction if selling from abroad** (30% withholding, IGV self-assessment) | certain for non-treaty sellers | high | Peruvian S.A.C. from the first paid sale, or a treaty-country company |
| **Payment provider flags "casino" and freezes the account** | low-medium | medium | Clear product description; written pre-approval from Stripe; the S.A.C. collects locally anyway |
| **Detracciones lock up 12% of invoices** if they apply to SaaS (unverified) | medium | low | Use the deposit to pay the S.A.C.'s own IGV and income tax; accountant to confirm |
| **Local legal representative misuse or dependence** | low | high | Limited powers; banking powers kept by the founder; a trusted person; notarised revocation ready |
| **A SUCTR vendor or KYC Systems builds the same module** | medium | high | Partner early with a SUCTR vendor; move fast through the 2027 IAOC season; win the adviser network |
| **Consultants see the tool as a threat** | medium | medium | Free adviser console, 20% referral, co-branded webinars; position the tool as handling the routine work, not the advice |
| **RO template or IAOC format changes** (the SBS sets the RO structure by resolution) | medium | medium | Configurable exports; the partner officer watches Portal PLAFT; the yearly fee includes updates |
| **Data breach of RO or ROS data** | low | very high | Security test before launch and yearly; encryption; strict roles; 48-hour breach plan; insurance |
| **Remote founder cannot build trust with family-run firms** | medium | high | Lima contractor and compliance expert as the local face; two trips a year; WhatsApp support in Spanish |
| **Slow chain and online sales cycles** | high | medium | None assumed before March 2027; Corporativo is upside, not the base |
| **Political or regulatory change** (gaming-law reform, new government) | medium | medium | Watch MINCETUR. The AML duty comes from the UIF law and FATF standards, which are less exposed to politics (my judgment). |
| **Currency:** costs partly in US$ (tools, test, trips), revenue in S/ | medium | low | Keep a US$ reserve; costs in US$ are about 25% of the total |

## Milestones and kill criteria

| Date | Milestone (base case) | Kill or rethink if |
|---|---|---|
| 1 Nov 2026 | MVP feature-complete; lawyer and compliance expert engaged | MVP not usable by 15 Nov |
| 15 Nov 2026 | 25 discovery conversations; 5 design partners using real data | **Fewer than 2 design partners from 25 conversations**: rethink the offer before launch |
| 1 Dec 2026 | S.A.C. registered; security test passed; public launch | Launch slips past 15 Dec. The IAOC season is lost, so delay paid marketing to May. |
| 31 Jan 2027 | 9 paying firms plus 5 IAOC kits | **Fewer than 4 paying firms**: cut marketing and keep only direct sales until May |
| 15 Feb 2027 | Customers file the 2026 IAOC from the tool, with no late filings | Customers still rebuild the IAOC by hand: fix the product or stop |
| 30 Apr 2027 (month 6) | 15 paying firms; 3 active referral partners | **Fewer than 6 paying firms** (the low case): stop, or pivot to another UIF sector |
| 30 Jun 2027 | Peru Gaming Show; one SUCTR vendor partnership signed | No vendor interested and fewer than 20 firms: no further marketing spend |
| 31 Oct 2027 (month 12) | 36 paying firms; ARR S/ 180,000 | **Fewer than 15 firms or ARR below S/ 80,000**: stop |
| Feb 2028 | First renewals: 80% or more | **Renewal below 60%**: stop. The product is not sticky. |
| Oct 2028 (month 24) | 60 firms; ARR S/ 316,000; first non-gaming sector launched | Below 35 firms: run for profit only, with no expansion |
| Oct 2029 (month 36) | 74 firms; ARR S/ 410,000; decide on Colombia or a sale | - |

## Open questions

1. **Where is the founder's company resident?** If it is in Chile, Canada, Mexico, Korea or Portugal, the S.A.C. can wait.
2. **Do detracciones (12%) apply to SaaS subscriptions?** Ask the accountant before the first invoice.
3. **Are gaming operators still fully outside IGV,** including any food-and-drink or other taxed income? This decides whether buyers see IGV as a cost.
4. **Is it true that a missing withholding makes the foreign SaaS fee non-deductible?** Confirm with a Peruvian tax adviser, along with the 30% rate under the current LIR art. 56.
5. **What do SPLAFT consultants charge** for a manual update, an IAOC or an IAI? No public prices were found. Ask 3-5 of them during discovery calls.
6. **What does Peru Gaming Show 2027 cost** for a stand or talk, and on what dates? Contact the organiser (info@amgsac.pe, per [Peru Gaming Show](https://www.perugamingshow.com/)).
7. **Who can act as the S.A.C.'s Peru-resident legal representative,** and at what cost?
8. **Can the S.A.C. open a bank account remotely,** or must the founder appear in person in Lima?
9. **Do Peruvian local gateways (Culqi, Izipay, Niubiz) support recurring billing** for B2B subscriptions, and at what real rates?
10. **Must a foreign processor name a representative in Peru** under DS 016-2024-JUS? The 01 file says yes; IAPP's summary does not mention it.
11. **Will Stripe give written approval** for compliance software sold to casinos?
12. **Colombia:** the exact SIPLAFT duties under Coljuegos rules, and the cheapest compliant way to bill Colombian operators.

## Sources

Primary and official:
- SUNAT Informe 055-2021-SUNAT/7T0000 (digital services and treaties, read in full): https://www.sunat.gob.pe/legislacion/oficios/2021/informe-oficios/i055-2021-7T0000.pdf
- SUNAT Informe 017-2012 (slot-machine operation and IGV, search summary): https://www.sunat.gob.pe/legislacion/oficios/2012/informe-oficios/i017-2012.pdf
- SUNAT RS 000047-2026/SUNAT (IGV on services from non-residents): https://www.sunat.gob.pe/legislacion/superin/2026/000047-2026.pdf
- SUNAT, ISC on casino games and slots: https://orientacion.sunat.gob.pe/node/1811
- SUNAT, MYPE regime guide (search summary): https://orientacion.sunat.gob.pe/sites/default/files/inline-files/REMYPe-%20VF_0.pdf
- Tribunal Constitucional, 03595-2006-AA (12% gaming tax, search summary): https://www.tc.gob.pe/jurisprudencia/2007/03595-2006-AA.pdf
- El Peruano, D. Leg. 1623 (IGV on digital services, B2C): https://elperuano.pe/noticia/249505-d-leg-no-1623-esta-es-la-norma-para-recaudar-igv-por-uso-de-servicios-digitales-en-el-peru
- El Peruano, UIT 2026: https://elperuano.pe/noticia/285208-mef-establece-en-s-5-500-la-unidad-impositiva-tributaria-para-2026
- BCRP exchange-rate series (search summary): https://estadisticas.bcrp.gob.pe/estadisticas/series/api/PD04640PD-PD04639PD/json/2026-09-28/2026-10-08
- Peru Gaming Show: https://www.perugamingshow.com/

Payments:
- Stripe pricing: https://stripe.com/pricing
- Stripe supported currencies: https://docs.stripe.com/currencies
- Stripe global availability: https://stripe.com/global
- Stripe restricted businesses: https://stripe.com/legal/restricted-businesses
- Paddle supported countries: https://developer.paddle.com/concepts/sell/supported-countries-locales
- Paddle tax by country: https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/
- Paddle prohibited products: https://paddle.com/help/start/intro-to-paddle/what-am-i-not-allowed-to-sell-on-paddle
- Paddle pricing: https://www.paddle.com/pricing
- Fungies on Lemon Squeezy and Stripe Managed Payments (secondary source): https://fungies.io/lemon-squeezy-stripe-acquisition-saas-founders-2026/
- dLocal Peru docs (search summary): https://docs.dlocal.com/docs/peru
- BBVA Perú transfer fees (search summaries): https://bbva.pe/content/dam/public-web/peru/documents/prefooter/avisos-importantes/Aviso-Importante_Modificacion-de-la-Comision-de-Ordenes-de-Pago-Del-Exterior-y-Transferencia-al-Extranjero.pdf ; https://www.bbva.pe/empresas/productos/comercio-internacional/transferencias-al-exterior/transferencia-al-exterior.html
- BBVA corporate card summary sheet (search summary): https://www.bbva.pe/content/dam/public-web/peru/documents/empresas/financiamiento/tarjeta-corporate/Hoja-Resumen-Informativa-vigente-a-partir-del-01-12-2025.pdf
- kom.pe, Peruvian gateways compared (search summary): https://kom.pe/izipay-vs-niubiz-vs-culqi/
- La República, card rules 2019 and 2025 (search summaries): https://larepublica.pe/economia/2019/11/29/sbs-hace-cambios-en-el-uso-de-las-tarjetas-de-credito-finanzas-pacifico-business-school ; https://larepublica.pe/economia/2025/07/02/nuevas-obligaciones-para-pagar-con-tarjetas-de-credito-y-debito-en-peru-sbs-oficializa-norma-a-partir-de-esta-fecha-atmp-56528

Tax commentary:
- Universidad de Piura, Forseti (30% and 15% rates, search summary): https://revistas.up.edu.pe/index.php/forseti/article/download/2831/1863/7336
- ByB Consultores on digital services (search summary): https://bybconsultores.pe/?p=4827
- Gestión on SUNAT vs the Supreme Court (search summary): https://gestion.pe/economia/sunat-vs-corte-suprema-controversia-por-la-tributacion-de-consultorias-online-impuesto-a-la-renta-noticia/
- Forvis Mazars on residence certificates (search summary): https://www.forvismazars.com/pe/es/insights/tax-alerts/certificados-de-retencion-y-cdis
- EY on Informe 049-2024 and Decision 578 (search summary): https://taxnews.ey.com/news/2024-1409-peruvian-tax-authority-establishes-guidelines-for-tax-treatment-of-digital-services-under-andean-community-multilateral-agreement
- ProActivo on Peru's treaties (search summary): https://proactivo.com.pe/peru-cierra-convenio-para-evitar-doble-tributacion-y-elusion-fiscal-con-reino-unido-y-avanza-con-francia/
- LP Derecho on IGV for services from non-residents (search summary): https://lpderecho.pe/tratamiento-tributario-en-el-impuesto-a-la-renta-e-igv-de-los-servicios-con-sujetos-no-domiciliados/
- Misha on Form 1662 (search summary): https://misha.pe/?p=32190
- LP Derecho and kom.pe on detracciones (search summaries): https://lpderecho.pe/detracciones-sunat-sube-12-tasa-pago-adelantado-igv/ ; https://kom.pe/calculadora-detracciones/
- Focus Gaming News, 23 Jul 2018: https://focusgn.com/latinoamerica/el-juego-pagara-mas-impuestos-en-peru
- IGV overview (search summary): https://discourse.weareopen.coop/news/igv-in-peru-a-simple

Company set-up and running costs:
- Trámites Perú, SUNARP company-formation fees (updated 25 Jun 2026): https://tramitesperu.com/sunarp/constitucion-empresa/
- Trámites Perú, MYPE regime: https://tramitesperu.com/sunat/regimen-mype/
- Damalion, Lima business registration 2026: https://www.damalion.com/lima-peru-business-registration-2026-complete-guide-to-costs-and-setup-timeline/
- Commenda, Peru incorporation cost: https://www.commenda.io/peru/incorporation-cost
- Holafly, starting a business in Peru (search summary): https://esim.holafly.com/expats/how-start-a-business-peru/
- IUS360 on the S.A.C.S. (search summary): https://ius360.com/sociedad-por-acciones-cerrada-simplificada-un-nuevo-regimen-societario-que-entra-para-revolucionar-la-constitucion-de-sociedades-en-peru/
- cuantomecuesta.com, accountant fees (search summary): https://cuantomecuesta.com/pe/contador-contabilidad/
- ByB Consultores, outsourced accounting (via B1): https://bybconsultores.pe/servicios/outsourcing-contable-y-tributario/
- Company Hero virtual office (search summary): https://www.companyhero.com/es/pe/oficina-virtual/san-isidro
- Forbes Perú on Company Hero and SUNAT address checks (search summary): https://forbes.pe/brand-voice/2026-06-22/company-hero-desembarca-en-peru-y-suma-un-nuevo-capitulo-a-su-expansion-latinoamericana/
- Cuatrecasas and Canal N, minimum wage (search summaries): https://www.cuatrecasas.com/es/latam/laboral/art/incrementan-remuneracion-minima-vital ; https://canaln.pe/actualidad/gobierno-incrementa-remuneracion-minima-vital-1230-soles-n495337
- IAPP on DS 016-2024-JUS: https://iapp.org/news/a/se-publica-el-nuevo-reglamento-de-protecci-n-de-datos-personales-en-per-

Security, valuation, expansion:
- Blaze Infosec, penetration-test pricing (search summary): https://www.blazeinfosec.com/post/how-much-does-penetration-testing-cost/
- FE International, SaaS multiples (search summary): https://www.feinternational.com/blog/saas-valuation-multiples
- beancount.io, bootstrapped SaaS multiples 2026 (search summary): https://beancount.io/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide
- BigIdeasDB, 615 Acquire.com listings (search summary): https://bigideasdb.com/saas-valuation-multiples-2026
- PUCP thesis on UIF sanctions (search summary): https://tesis.pucp.edu.pe/items/be69e02d-5df5-49ce-924c-69869d1ad219
- Holland & Knight, Garrigues and Bancolombia on Colombian taxation of foreign digital services (search summaries): https://www.hklaw.com/en/insights/publications/2026/01/revision-del-regimen-presencia-economica-significativa-en-colombia ; https://www.garrigues.com/es_ES/noticia/software-service-saas-desafio-alta-complejidad-tributaria-mundo-digital-e-interconectado ; https://blog.bancolombia.com/negocios/novedades-tributarias-nuevas-disposiciones/

From the other section files (sources listed there): MINCETUR registers and buyer counts, the Computrabajo officer ad, Seminarios Top, Pirani pricing, SONAJA, ATCE, IAGR, SUCTR vendors, KYC Systems and Colombian operator counts ([02 file](02-market-and-competition.md)); Res. SBS 01015-2026 and 03622-2025 articles, fines and deadlines ([01 file](01-law-and-requirements.md)).

Not reachable: https://www.gob.pe/279-constituir-una-empresa (HTTP 418); https://www.bbva.pe/pymes/productos/tipo-de-cambio/transferencia-al-exterior.html (403); https://www.paddle.com/legal/aup (404).
