# Argentina: UIF compliance tool for small real estate brokers — full plan

Combined plan from four deep-research parts (written 10 Oct 2026):

- [01 Law and product requirements](01-law-and-requirements.md): Res. UIF 43/2024 and the rules around it, 35 duties, filing channels, the enforcement record and 80 testable requirements, each traced to an article.
- [02 Market and competition](02-market-and-competition.md): buyer counts from the FATF report and the colegio register, the AMLify finding, prices, channels and nearby countries.
- [03 Product and technical design](03-product-and-tech.md): users, features, flows, screens, data sources, what is inside the UIF's SROMasivo app, stack, security, calendar and build budget.
- [04 Go-to-market, company and finance](04-gtm-company-finance.md): pricing, channels, 90-day launch, payments and tax, company set-up, 36-month model and kill criteria.

Key sources are linked inline. Every fact here also appears, with its source, in those files. "My estimate" marks numbers derived here. "(unverified)" marks facts the parts could not confirm. Money is in US dollars at ARS 1,517 per USD, the BCRA official rate on 9 Oct 2026 ([BCRA API](https://api.bcra.gob.ar/estadisticascambiarias/v1.0/Cotizaciones/USD?fechadesde=2026-10-01&fechahasta=2026-10-10)).

---

## 1. Decision in one page

**Verdict: weak maybe. Run a cheap, time-boxed test, and spend real money only after a 1 Nov interview gate. Do not plan on it as a main business.**

**New score: 5/10** (re-assessment: 6/10; first score: 5/10).

**Why the score went down.** The re-assessment rested on "no local product does the whole job". That is no longer true. **AMLify**, built by BDO Argentina, covers almost every broker duty. It has been an official member benefit of the Buenos Aires city colegio (CUCICBA) since 27 May 2026 ([amlify.net](https://amlify.net/); [CUCICBA #245](https://colegioinmobiliario.org.ar/novedades/245)). The duty and the gap left by the free UIF portal are real, and the build is cheap. But brokers are rarely inspected, the best channel is partly taken, and the realistic upside is a side business.

**The case for it.**

- **The duty is national, recurring and current.** 10,365 real estate brokers were registered with the UIF in March 2024 ([FATF/GAFILAT MER 2024, Table 1.2](https://www.mpf.gob.ar/procelac-lavado/files/2020/04/Argentina-Mutual-Evaluation-Report-2024.pdf.coredownload.inline.pdf)). They owe a monthly report (RSM, 1st-15th), an annual report (RSA, 2 Jan-15 Mar), a self-assessment (ITAER) every two years (next by 30 Apr 2028) and, above a size threshold, an external review (REI, next about 28 Aug 2028) ([Res. UIF 43/2024, consolidated](https://www.argentina.gob.ar/normativa/nacional/397424/actualizacion)).
- **The portal stops at filing.** It does not keep the client file, the risk rating, the PEP and terrorist-list proof, the alerts register, the manual sign-offs, the training log or the 10-year retention clocks. An inspector can ask for all of these at 3 business days' notice ([Res. 61/2023 Annex, Art. 15](https://www.colegio-escribanos.org.ar/noticias/2023_04_17-UIF-Res-61-23-Anexo.pdf)).
- **Inspectors fined brokers for exactly these gaps.** The UIF's register lists 12 final fines on brokers from 2019 to 2022: a deficient manual, no audit, no training, weak client files, no monitoring tools, missing PEP statements, no terrorist-list checks ([UIF sanctions](https://www.argentina.gob.ar/uif/sanciones); [RESAP-2022-108](https://www.argentina.gob.ar/sites/default/files/resap-2022-108-apn-uifmec_-_expte_ndeg_522-17.pdf)).
- **The incumbent is small and opaque.** AMLify claims "+40 martilleros", under 1% of the registered pool. It publishes no price and sells by demo ([amlify.net](https://amlify.net/)). A public low price and self-serve set-up can win sole brokers, the provinces and accountants.
- **The build is cheap and fast.** The key data is free: the terrorist register (RePET) as JSON, the minimum wage series and the BCRA rate by API ([RePET JSON](https://repet.jus.gob.ar/xml/personas.json); [datos.gob.ar SMVM](https://apis.datos.gob.ar/series/api/series/?ids=57.1_SMVMM_0_M_34)). The monthly report can be bulk-filed as XML through the UIF's own Windows app ([UIF RSM-Masivo](https://www.argentina.gob.ar/uif/rsm)). Cash to "sellable" is about USD 7,200-20,100 (my estimate in [03](03-product-and-tech.md)).
- **No local company is needed.** Argentine cards pay foreign software every day. The card issuer adds the local taxes on the buyer's side, and the foreign seller does not register for VAT ([RG 4240](https://www.boletinoficial.gob.ar/detalleAviso/primera/183569/20180514)).

**The case against it.**

- **Weak enforcement means weak willingness to pay.** The UIF inspected 21 of 10,307 brokers in 2023, or 0.3% ([FATF MER 2024, para 546](https://www.mpf.gob.ar/procelac-lavado/files/2020/04/Argentina-Mutual-Evaluation-Report-2024.pdf.coredownload.inline.pdf)). No broker fine dated 2023-2026 is in the public register ([UIF sanctions](https://www.argentina.gob.ar/uif/sanciones)).
- **A real incumbent with the right friends.** CUCICBA's president has also headed COFECI, the federal broker body, since February 2026 ([CUCICBA #210](https://colegioinmobiliario.org.ar/novedades/210)). AMLify could spread to other colegios through her.
- **The big one-off deadline is 18 months away** (ITAER, April 2028). Until then the only hooks are the monthly report and the January-March annual report.
- **A deregulation draft** would end the mandatory broker licence. Res. 43 is written for licensed brokers, so the UIF would have to rewrite its scope (unverified) ([iProfesional, Jul 2026](https://www.iprofesional.com/realestate/460633-5-fuertes-cambios-que-transformaran-para-siempre-el-negocio-inmobiliario-en-argentina)).

**What the deep dive changed** (compared with the re-assessment):

| Topic | Re-assessment | Deep dive | Effect |
|---|---|---|---|
| Competition | No broker SaaS found | **AMLify (BDO) does nearly the whole job** and is CUCICBA's member benefit | Down |
| Buyers | 10,000-25,000 obliged (guess) | **10,365 registered with the UIF** (hard count); 2,500-5,000 close sales most months (my estimate, unverified) | Clearer, smaller |
| Price | USD 25-35 a month | **USD 15 a month or USD 150 a year** for a sole broker | Down |
| Year-3 revenue | about USD 140,000 | **about USD 90,000-123,000 ARR** at month 36 | Down |
| Law | ROS within 15 days; thresholds at the current minimum wage; no broker fines found | **ROS within 24 hours** (Res. 56/2024); thresholds at the 31 Dec / 30 Jun wage; **12 broker fines on record** | Sharper product spec |
| Pain signals | none specific | UIF information request to brokers in Dec 2025; CUCICBA asked for an ITAER extension in Apr 2026; property registries get a risk regime from 8 Nov 2026 | Up |
| Tech | "export the bulk template" | The bulk channel takes one XML per operation; the schemas download after login and can be exported (my inference from the app) | Feasible; one dependency |
| Company | not covered | **No Argentine company at launch** | Up |

**What it is worth** (36-month model from [04](04-gtm-company-finance.md), founder builds with AI agents, no founder pay; my planning base explained in §10):

| Case | Broker accounts, month 36 | ARR, month 36 | Year-3 profit before founder pay | Peak cash need |
|---|---|---|---|---|
| Low | 103 | about USD 31,000 | about -USD 6,800 | about USD 39,000 |
| **Base, planning (no colegio deal)** | **268** | **about USD 105,000** | **about USD 28,000** | **about USD 30,000-35,000** |
| Base with two colegio deals (04) | 268 | about USD 123,000 | about USD 44,600 | about USD 25,000 |
| High | 621 | about USD 309,000 | about USD 157,000 | about USD 17,000 |

- **In the planning base, Argentina alone cannot pay a founder salary of USD 3,000 a month, even in year 3** (USD 28,000 profit against USD 36,000 of pay; my arithmetic). Colegio deals, accountants and Uruguay are the levers.

**Key conditions** (all checkable in 3 weeks):

1. **AMLify is not cheap and self-serve for sole brokers.** If it sells a sole-broker plan below about USD 15 a month, or signs COFECI, stop or pivot to an accountant-only tool.
2. **At least 8 of 25 interviewees** (brokers and accountants) say they would pay USD 10 a month or more, by 1 Nov.
3. **A pilot broker exports the broker RSM schemas** from SROMasivo. Without them the product falls back to a copy sheet, and the main monthly time-saver is weaker.
4. **Accountants will resell or recommend it,** and at least one colegio outside Buenos Aires city will list it as a member benefit.
5. **The UIF gives small brokers no exemption** and the deregulation draft does not remove the duty.

**Do this first** (weeks 1-3, under about USD 2,000 of cash):

1. Request an AMLify demo through the CUCICBA benefit. Learn its price, whether it serves sole brokers, and whether it outputs SROMasivo XML.
2. Hold 25 calls: 20 brokers (10 outside Buenos Aires city) and 5 accountants. Ask what they filed in April and August 2026, who did it and what they paid.
3. Ask 2-3 brokers to click "Exportar esquemas" in SROMasivo and send the files.
4. Build the MVP with agents in parallel. Until 1 Nov it costs only AI tools and hosting.
5. Engage the lawyer on a small first stage. Release the rest of the legal budget and the penetration-test money only if the 1 Nov gate passes.

### Figures used where the parts disagree

| Topic | What the parts say | Used here | Why |
|---|---|---|---|
| Obliged buyers | Report: 10,000-25,000 (guess). 01, 02, 04: 10,365 registered (FATF, Mar 2024). 02: 2,500-5,000 close sales most months | **10,365 registered; 2,500-5,000 core** (core unverified) | Primary source. The core is 02's estimate from CABA deed volume |
| Firms needing an REI | 02: 300-1,000, using a threshold of ARS 336 m. 01: threshold ARS 293-322 m | **01's threshold; 300-1,000 firms (unverified)** | Res. 43 Art. 2(ñ) fixes the wage at 31 Dec and 30 Jun, not the current month ([Res. 43](https://www.argentina.gob.ar/normativa/nacional/397424/actualizacion)) |
| Lease threshold (300 SMVM) | Report: ARS 115 m. 01, 03: ARS 100.44-110.34 m | **ARS 100.44-110.34 m** | Same reason |
| ROS clock | Report: 15 days / 150 days. 01: 24 hours / 90 days | **24 hours / 90 days** | Res. 56/2024 replaced Art. 33 eight days after publication |
| Sole-broker price | Report: USD 25-35 a month. 02: USD 12-19. 04: USD 15 | **USD 15 a month, USD 150 a year** | Inside 02's range; about 30% of the CABA colegio fee ([CUCICBA](https://colegioinmobiliario.org.ar/institucional/matriculacion)) |
| Year-3 revenue | Report: USD 140,000. 02: about USD 90,000 (range 21,000-255,000). 04: ARR USD 123,000 (range 31,000-309,000) | **About USD 105,000 ARR** (04 without colegio deals) | Colegio deals are upside, not base, while AMLify holds CUCICBA and its president heads COFECI |
| Pilot terms | 03: free until 31 Mar 2027. 04: convert at 50% off on 1 Dec | **Free until 1 Dec, then 50% off the first year** | The 11 Dec kill test needs paying pilots |
| MVP scope | 04 lists the ROS draft and the accountant workspace in the first 6 weeks. 03 puts both in v1 | **03's scope**, plus a basic accountant login (grants and a firm switcher) from 1 Dec | Accountants are channel no. 1, but the full portfolio view can follow in Jan-Feb 2027 |
| Penetration test | 03: USD 3,000-8,000. 04's model: USD 3,000 | **Budget USD 3,000-8,000** | Quotes under about USD 2,000-4,000 are usually automated scans ([Andersen](https://andersenlab.com/blueprint/penetration-testing-costs-2026)) |
| Peak cash | 04: about USD 24,600 base | **Plan on USD 30,000-35,000** | 04 uses the low end of legal and security costs |
| Calendar | 03 and 04: start Mon 12 Oct, MVP code complete 30 Oct, sellable and paid launch 1 Dec, fallback 9 Dec | **Same** | The parts agree |
| Local company | 03 and 04: none at launch | **None until institutional deals pass about USD 20,000 a year** | Not needed for any MVP integration or for card sales |
| First RSM | 01: first filed Feb 2025. 02: first due 15 Mar 2025 (BDO) | **"Since early 2025"** | Immaterial to the plan |

---

## 2. Why now: the law and enforcement

### Who is obliged

- **The Law** lists "natural and/or legal persons ... that carry out real estate brokerage" (Law 25.246 Art. 20 inc. 15, as amended by Law 27.739). It does not require a licence ([Law 25.246, consolidated](https://www.argentina.gob.ar/normativa/nacional/62977/actualizacion)).
- **Res. UIF 43/2024** (in force since 19 Mar 2024, amended by Res. 56/2024) covers licensed ("matriculados") brokers and companies run by them, but only when they actually broker ([Res. 43, consolidated](https://www.argentina.gob.ar/normativa/nacional/397424/actualizacion)):
  - **every sale**, whatever the price;
  - **a lease worth 300 minimum wages (SMVM) or more a year**, "in one or several operations". That is ARS 100.44-110.34 million at the 31 Dec 2025 and 30 Jun 2026 wages of ARS 334,800 and 367,800 (my calculation in [01](01-law-and-requirements.md); wage values from [Chequeado](https://chequeado.com/el-explicador/el-gobierno-fijo-nuevos-valores-del-salario-minimo-vital-y-movil-de-cuanto-es-en-diciembre-2025-y-como-evoluciono-frente-a-la-inflacion/)).
- **No small-firm exemption.** A sole broker runs the whole system himself. He is spared only the compliance-officer appointment and the internal audit (Res. 43 Art. 9, 11, 17(b)).
- **The external review (REI)** applies to any broker with income above 875 SMVM (about ARS 293-322 million) or 50 or more qualifying operations a year (Art. 17(a); my calculation).
- **AML rules are national.** Provinces only license brokers ([01](01-law-and-requirements.md) "Regional differences").

### What must exist, and when

| Duty | Deadline or frequency | Basis |
|---|---|---|
| Register in SRO+ (fully online since Res. 37/2026); update contact data | Before acting; changes within 5 business days | Res. 50/2011 as replaced by Res. 47/2024; [UIF guide](https://www.argentina.gob.ar/uif/instructivos/como-registrarse-por-primera-vez-en-la-uif) |
| Compliance officer, titular and alternate, both board members (companies only) | Alternate acting: e-mail the UIF within 24 h. Removal: notify within 15 days | Res. 43 Art. 10 |
| AML manual, board-approved, with signed staff acknowledgements | Review every 2 years | Art. 8 |
| Self-assessment (ITAER) and its methodology | Every 2 years, before 30 April. First 30 Apr 2026; **next 30 Apr 2028**. Methodology every 4 years | Art. 5, 36 |
| External review (REI), or internal audit for smaller companies | Within 120 days after the ITAER deadline. First 31 Aug 2026; **next about 28 Aug 2028** (my calculation) | Art. 17; [Res. 132/2024](https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-132-2024-403326/texto) |
| Client file to fixed data lists; beneficial owners at 10% | Before the first operation | Art. 19-21; Res. 112/2021 |
| PEP sworn statement from every client | At onboarding and on change | Res. 35/2023 as replaced by [Res. 192/2024](https://www.argentina.gob.ar/normativa/nacional/407011/texto) |
| Terrorist register (RePET) and UN proliferation lists; freeze and report within 24 h on a match | Before onboarding; continuous | [Res. 207/2025](https://www.boletinoficial.gob.ar/detalleAviso/primera/333954/20251104); [Res. 3/2026](https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-3-2026-422247/texto) |
| Client risk rating (high, medium, low); file refresh at most every 1, 3 or 5 years for habitual clients | At onboarding; then by risk | Art. 23, 27 |
| Alerts on 31 listed situations; unusual-operations register with 8 fixed fields | Ongoing | Art. 31-32 |
| Suspicious transaction report (ROS) | **24 h after concluding there is suspicion**, at most 90 days after the operation | Art. 33 as replaced by Res. 56/2024 |
| Monthly systematic report (RSM): sales and qualifying leases | **1st-15th of every month**, since early 2025 | Art. 34(a) |
| Annual systematic report (RSA) | **2 Jan-15 Mar** | Art. 34(b) |
| Training, by role, with records | Yearly | Art. 16 |
| Records, with a backup copy | 10 years | Art. 15 |

The full table of 35 duties, with the evidence an inspector asks for, is in [01 "Duty-by-duty table"](01-law-and-requirements.md#duty-by-duty-table).

### Filing channels

- **RSM:** the SRO+ web form, or **SROMasivo**, a Windows app that sends one XML file per operation and returns a control number for each ([UIF RSM-Masivo](https://www.argentina.gob.ar/uif/rsm); [SROM manual](https://www.argentina.gob.ar/sites/default/files/manual_usuario_srom_v2.pdf)).
- **RSA, ROS and registration changes:** web forms in SRO+ only ([RSA guide](https://www.argentina.gob.ar/uif/reporte-sistematico-anual-rsa); [ROS guide](https://www.argentina.gob.ar/uif/instructivos/rosrft)).
- **ITAER:** "sent to the UIF". No broker-specific channel was found (unverified).
- **UIF information requests:** one ZIP or RAR file under 20 MB through an e-mailed link ([UIF requests guide](https://www.argentina.gob.ar/instructivos/requerimientos)).

### Penalties

- **15-2,500 módulos per infraction.** At ARS 54,140 per módulo that is ARS 0.81-135.4 million, or about USD 535-89,000. Board members are jointly liable ([Law 25.246 Art. 24](https://www.argentina.gob.ar/normativa/nacional/62977/actualizacion); [UIF resolutions](https://www.argentina.gob.ar/uif/normativa/resoluciones)).
- **A missed ROS costs 1-10 times the operation value.**
- **The fast-track procedure** charges 15, 25 or 30 módulos per charge. The broker must fix every gap within 3 months, in a filing signed with a registered REI ([Res. 90/2024 Annex Art. 34-39](https://www.argentina.gob.ar/normativa/nacional/400665/actualizacion)). So even a small broker caught this way must buy an REI's time (my inference).

### Enforcement evidence

| Data point | Value | Source |
|---|---|---|
| Brokers inspected, 2023 | 21 of 10,307 (0.3%); 13 of the 1,482 rated high risk | [FATF MER 2024, para 546](https://www.mpf.gob.ar/procelac-lavado/files/2020/04/Argentina-Mutual-Evaluation-Report-2024.pdf.coredownload.inline.pdf) |
| All UIF supervisions, 2024 | 235 supervisions, 68 sanction proceedings, 25 fines, all sectors | [UIF 2024 summary](https://www.argentina.gob.ar/sites/default/files/2016/09/uif_resumen_ejecutivo_gestion_2024_-_v03.pdf) |
| Final fines on brokers | 12, from 2019 to 2022; none dated 2023-2026. Fast-track cases are not published | [UIF sanctions](https://www.argentina.gob.ar/uif/sanciones) (sheet downloaded 10 Oct 2026, per [01](01-law-and-requirements.md)) |
| Suspicious reports filed by brokers | 2019: 11; 2020: 1; 2021: 10; 2022: 19; 2023: 16 | [FATF MER 2024, Table 5.1](https://www.mpf.gob.ar/procelac-lavado/files/2020/04/Argentina-Mutual-Evaluation-Report-2024.pdf.coredownload.inline.pdf) |
| FATF view | Real estate is in half of the ML convictions studied; broker supervision is "concerning" | same, paras 146, 546 |
| UIF information request to brokers | December 2025; a single extension to 31 December was granted at CUCICBA's request | [CUCICBA #185](https://colegioinmobiliario.org.ar/novedades/185) |
| First ITAER | CUCICBA formally asked for an extension in April 2026; no reply was posted | [CUCICBA #229](https://colegioinmobiliario.org.ar/novedades/229) |

### What is changing

- **No relief for brokers so far.** Accountants got their first REI moved to 1 Mar 2027 ([CPCE CABA](https://www.consejo.org.ar/noticias/2026/uif-se-prorroga-la-presentacion-del-informe-de-revision-externa-independiente)). Lawyers had theirs suspended by Res. 90/2026 ([abogados.com.ar](https://abogados.com.ar/resolucion-uif-902026-suspension-transitoria-de-la-primera-presentacion-del-rei-para-abogados-sujetos-obligados/39988)). The UIF could do the same for brokers.
- **Property registries** move to a risk-based regime under Res. UIF 93/2026 from 8 Nov 2026 ([Boletín Oficial](https://www.boletinoficial.gob.ar/detalleAviso/primera/345725/20260810)). Brokers are not named. Registry data may later be cross-checked against broker reports (my inference, unverified).
- **Deregulation.** The Sturzenegger draft (July 2026) would drop the broker licence and degree. A similar "Ley de Libertad Inmobiliaria" bill exists. Neither was confirmed as filed or passed ([iProfesional, 24 Jul 2026](https://www.iprofesional.com/politica/460737-federico-sturzenegger-busca-que-cualquiera-pueda-vender-propiedades-y-desata-furia-inmobiliaria)). The Law covers anyone who brokers, so the duty would likely stay and the pool could widen. The colegio channel would weaken (unverified).
- **Rolling changes.** The SMVM changes by resolution. The módulo can change each budget year. Res. 43 still cites a repealed terrorist-financing rule (Res. 29/2013) ([01](01-law-and-requirements.md) "Upcoming changes"). The product must keep all of these as data.

### What the portal and current practice leave undone

- **The portal takes finished reports.** It does not keep the client file, the risk rating, the PEP and RePET evidence, the alerts register, the ITAER workings, the manual sign-offs, the training log or the retention clocks ([01](01-law-and-requirements.md) Summary).
- **Data preparation.** Each sale needs about ten fields per buyer and seller, the payment breakdown and the cadastral data, in a fixed format with strict checks ([UIF RSM sale guide](https://www.argentina.gob.ar/uif/instructivos/rsm-compra-yo-venta-de-bienes-inmuebles)).
- **Lease tracking.** A lease counts only once a client's leases pass 300 SMVM in a year, and the wage reference changes twice a year. That is easy in software and hard in Excel.
- **Current practice is templates and talks.** CUCICBA runs talks and passes on free GAFILAT courses ([CUCICBA #215](https://colegioinmobiliario.org.ar/novedades/215); [#173](https://colegioinmobiliario.org.ar/novedades/173)). The FACPCE self-assessment guide was written for accountants ([FACPCE](https://www.facpce.org.ar/wp-content/uploads/2026/04/GUIA-PARA-ELABORAR-EL-INFORME-TECNICO-DE-AUTOEVALUACION-DE-RIESGOS-ITAER-002.pdf)).
- **Honest reading.** Urgency comes from deadlines and UIF letters, not from fear of fines. The near-term hooks are the monthly report, the RSA window (2 Jan-15 Mar 2027) and the registry regime news. The big one-off hook is April 2028.

---

## 3. Customers

| Segment | Count | Confidence |
|---|---|---|
| **Brokers registered with the UIF as obliged subjects** | **10,365** (Mar 2024); 1,482 rated high risk in 2023 | High ([FATF MER 2024](https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf)). Some may be inactive; later registrations are not counted |
| Licensed brokers nationally | About 40,000 | Medium ([Infobae](https://www.infobae.com/economia/2025/02/07/desregulacion-inmobiliaria-como-funcionan-los-colegios-que-el-gobierno-busca-modificar/); [HCDN 6505-D-2024](https://www4.hcdn.gob.ar/dependencias/dsecretaria/Periodo2024/PDF2024/TP2024/6505-D-2024.pdf)) |
| Buenos Aires city brokers with a registered office | 6,386 (02's count of the colegio register) | High ([CUCICBA guide](https://colegioinmobiliario.org.ar/servicios/guia-de-matriculados)) |
| Córdoba licensed brokers | More than 3,800 | Medium-low ([Infonegocios](https://infonegocios.info/nota-principal/nace-un-nuevo-marketplace-pero-de-propiedades-de-que-se-trata-cordobaprop-la-app-que-busca-reunir-toda-la-oferta-de-la-provincia)) |
| **Core buyer: brokers who close a sale in most months** | **About 2,500-5,000** | Low (02's estimate from 69,461 CABA deeds in 2025 and the register; unverified) |
| Firms that need an REI | About 300-1,000 | Low (my estimate, unverified) |
| RE/MAX offices | About 200 | Medium ([Cronista](https://www.cronista.com/negocios/cambios-en-remax-el-nuevo-dueno-pone-foco-en-los-proximos-barrios-que-volaran/)) |
| Channel: accountants registered with the UIF | 4,712 (Mar 2024) | High ([FATF MER 2024](https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf)) |
| Channel: registered external reviewers (REI) | 135 in 2022, 84 of them in Buenos Aires city | High but old ([UIF](https://www.argentina.gob.ar/sites/default/files/analisis_de_los_informes_tecnicosde_los_rei.pdf)) |

**Buyer profile.**

- **Mostly one-person offices.** 76% of the Buenos Aires city brokers list a Gmail, Hotmail or Yahoo address. Only 56 trade names are shared by more than one broker (02's count of the [CUCICBA register](https://colegioinmobiliario.org.ar/servicios/guia-de-matriculados)).
- **High fixed costs already.** CUCICBA charges ARS 6,000,000 (USD 3,955) to join and ARS 750,000 (USD 494) a year in 2027 ([CUCICBA](https://colegioinmobiliario.org.ar/institucional/matriculacion)). Most offices also pay for a CRM: Tokko Broker costs USD 80-300 a month ([DevelopArgentina](https://developargentina.com/blog/software-inmobiliaria-argentina-2026)).
- **Little real due diligence today.** The FATF found that brokers mostly rely on banks and notaries ([MER, para 470](https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf)). BDO wrote that many brokers "aún no saben que deben presentar los reportes" ([BDO Argentina](https://www.bdoargentina.com/es-ar/novedades/2024/primer-vencimiento-del-reporte-mensual-ante-uif-para-el-corretaje-inmobiliario)).
- **Many are monotributistas** (simplified tax regime) who cannot recover VAT (share unverified). For them the tool costs about 21% more (§9).
- **Brokers live on WhatsApp and Facebook groups**, which searches do not reach (unverified).

**The jobs, in their words** (from [03](03-product-and-tech.md)):

1. "Is this deal in scope?"
2. "Get the client's data without chasing him."
3. "Check RePET and keep proof."
4. "Tell me the client's risk and when to refresh the file."
5. "Do my monthly report by the 15th without retyping."
6. "Fill in the annual report between 2 January and 15 March."
7. "If something is odd, tell me what to do, and start the clock."
8. "Have the manual, the sign-offs and the training ready."
9. "Be ready if the UIF writes."
10. "Build the 2028 self-assessment from what I already have."
11. (Accountant) "Show me all my brokers' gaps on one screen."

**Who to target first** (in order):

1. Sole brokers and small agencies outside Buenos Aires city: Córdoba, Santa Fe, Mendoza, Entre Ríos and the Buenos Aires province colegios.
2. Accountants and REIs who serve several brokers.
3. Buenos Aires city sole brokers who find a BDO product heavy (unverified).
4. Franchise networks other than RE/MAX.

---

## 4. Competition

| Alternative | What it does | Price | What it means for us |
|---|---|---|---|
| **AMLify** (BDO Argentina / Becher y Asociados SRL) | Client file, risk level, transactional profile, list screening, operations with alerts, monitoring, monthly and annual report files for bulk upload, self-assessment, training with exams. A manual generator, a lease-threshold tracker and a reviewer seat are not mentioned (unverified). "+40 martilleros", "+4000 operaciones reportadas"; testimonials mostly from RE/MAX offices ([amlify.net](https://amlify.net/)) | **Not published**; demo-led; 20% off for CUCICBA members ([CUCICBA #245](https://colegioinmobiliario.org.ar/novedades/245)) | **The incumbent. It does the job.** Under 1% share, so the market is open. Its weak points look like a hidden price, a sales-led model and no visible offer for accountants or provincial colegios (unverified). Also the most likely buyer of our customer base |
| UIF SRO / SRO+ / SROMasivo | Registration and report filing | Free | Where the files go, not a rival |
| CONLAFT S.R.L. | AML platform and services for mutuales, cooperatives and accountants; 8 staff, 5 systems deployed | Not published | Not aimed at brokers. Possible entrant ([CONLAFT profile](https://www.cancilleria.gob.ar/userfiles/ut/conlaft_espanol.pdf)) |
| Real estate CRMs (Tokko Broker, Xintel, KiteProp, InmoSuite) | Listings, leads, deals. No UIF module found | Tokko USD 80-300 a month; InmoPC ARS 15,000-80,000 a month ([DevelopArgentina](https://developargentina.com/blog/software-inmobiliaria-argentina-2026)) | Channel and import source. Tokko now belongs to QuintoAndar ([Privsource](https://www.privsource.com/acquisitions/deal/quintoandar-acquires-navent-s-real-estate-operations-to-strengthen-latin-american-offering-krS5VB)). One could add a basic module (unverified) |
| Notaries' colegio self-assessment app (CABA) | ITAER questionnaire, residual-risk matrix and PDF, for notaries only | Member tool | Shows a colegio will commission a UIF tool ([instructivo](https://www.colegio-escribanos.org.ar/apps/UIF-autoevaluacion/instructivo.html)) |
| FACPCE ITAER guide and matrix | Self-assessment method, written for accountants | Free | A template, not the work ([FACPCE](https://www.facpce.org.ar/wp-content/uploads/2026/04/GUIA-PARA-ELABORAR-EL-INFORME-TECNICO-DE-AUTOEVALUACION-DE-RIESGOS-ITAER-002.pdf)) |
| GAFILAT courses; colegio talks | General AML training | Free | Content, but not the firm's own training record |
| Law firms, consultants, REIs (e.g. ST Abogados) | Manual, matrix, inspection defence, external review | Not published | One-off and costly for a sole broker (unverified). Partners and resellers ([ST Abogados](https://stabogados.com.ar/civil/empresas/compliance-sujetos-obligados/)) |
| Pirani (Colombia) | General risk and AML SaaS with an Argentina UIF page | Not checked | Generic; not broker-specific (unverified) ([Pirani](https://www.piranirisk.com/es/hub-regulatorio/prevencion-lavado-activos-argentina-cumplimiento-uif)) |
| Screening and identity APIs (OpenSanctions, Didit, Equifax/Veraz) | Lists and identity checks only | Per check | Components, not competitors |

**Conclusion.**

- **The earlier passes were wrong: a dedicated broker product exists.** AMLify was found only through a narrow Spanish search and the colegio's news feed ([02](02-market-and-competition.md)).
- **By the owner's test, AMLify is not "partial".** It covers most duties. Whether it is **overpriced** is unknown, because it hides its price. That is the first thing to find out.
- **The opening is narrower than it looked:** a public price, set-up in one evening, the provinces, sole brokers and accountants. The rest of the market uses nothing, Excel or the free portal ([FATF MER 2024](https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf)).
- **The CUCICBA listing is a benefit, not an exclusive deal.** The colegio lists many vendors side by side ([CUCICBA news](https://colegioinmobiliario.org.ar/novedades)). A second vendor could be listed too (unverified).

---

## 5. Product

### Positioning

> "Tu legajo UIF al día. Precio publicado, listo en una noche." — your UIF file kept up to date; a public price; set up in one evening.

- **Against the portal:** we keep everything the UIF can ask for, and we make the filing step short.
- **Against AMLify:** a public price, self-serve sign-up, and features it does not advertise: the lease tracker that updates the wage by itself, a manual generator with staff sign-off, a one-click inspection pack under 20 MB, a WhatsApp link for clients and a seat for accountants ([02](02-market-and-competition.md) "Implications"; AMLify's gaps unverified).
- **A tool, not advice.** The broker approves every rating and document and files every report from his own UIF account. The software never files and never stores SRO+ passwords ([03](03-product-and-tech.md) "Liability").

### Users

| Role | Main jobs | Rights |
|---|---|---|
| **Sole broker** | Everything: the board and officer duties fall on him (Res. 43 Art. 9, 11) | All, including the restricted ROS area and billing |
| Agency board | Approve the manual, ITAER, officer plan, remediation | Approvals and dashboards; no ROS area unless also officer |
| Compliance officer, titular and alternate (companies) | Run the programme; approve high-risk and PEP clients; analyse alerts; decide and file ROS | All, including the restricted area |
| Staff | Collect client data; log operations; tick checklists; raise a flag | Own clients and operations; never see a flag's outcome (no tipping-off, Law Art. 21(c)) |
| Accountant or consultant | Watch many brokers; prepare RSA figures | Per-broker grant; no ROS area |
| External reviewer (REI) and internal auditor | Review two years of the programme | Read-only, time-limited; ROS identities removed (Res. 43 Art. 33) |
| End client | Fill in the form; sign statements | No account; one-time link by e-mail or WhatsApp |
| Colegio admin (later, white-label) | Branding and adoption counts | **Never any client or ROS data.** ROS must not reach licensing bodies (Art. 33) |
| Content editor (our lawyer and AML expert) | Templates, rule tables, checklists | Content only |
| UIF inspector | Asks for documents | No login; gets a ZIP under 20 MB |

### Feature map

| Area | MVP (sellable 1 Dec 2026) | v1 (Jan-May 2027) | Later |
|---|---|---|---|
| Firm set-up | Wizard: sole broker or company, colegio and licence, UIF data, officers, services, channels | UIF data change log with the 5-business-day reminder | Multi-branch groups |
| Client file (legajo) | Natural and legal persons to the Art. 19-20 field lists; representatives; beneficial owners at 10%; uploads with "original seen by / on"; CUIT check digit; DNI 3-8 digits | Excel/CSV import; DNI barcode scan | Tax-register look-up; RENAPER identity check via a vendor |
| Client link | One-time mobile form by WhatsApp or e-mail: identity, DNI photos, PEP, beneficial-owner and funds statements, OTP e-signature with timestamp and hash | Liveness and RENAPER check (paid per use) | Signed PDF with firma digital |
| Screening | RePET persons and entities (also carrying the UN 1718 and 1737 lists), polled every 2 hours; fuzzy matching; hit review; dated certificate; re-screen on list change; a match blocks the operation and opens a 24-h task with a neutral client status | OpenSanctions PEP and sanctions checks; freeze-order sweep | Paid local data (Nosis, Worldsys) if pilots ask |
| Client risk | Art. 23 rule table; high, medium, low with reasons; override with reason; officer approval for high risk and PEP; 1/3/5-year refresh clocks; transactional profile | Tunable weights; batch re-rating | |
| Operations | Sales and leases; parties and shares; payments by method; ARS at the BCRA rate; property IDs; co-broker licence; **lease tracker** against 300 SMVM; habitual-client test at 700 SMVM | Tokko import; CABA operations-book export | Other CRM connectors |
| Alerts and cases | 15 computable Art. 31 alerts; closing checklist for the other 16; PEP review alert; staff flag; restricted register with the 8 Art. 32 fields; ROS clock (24 h / 90 days) | ROS, RFT and proliferation draft builders in the SRO+ field order | |
| RSM | One XML per operation from the exported broker XSD, double-validated; ZIP for SROMasivo; copy sheet for the web form; control-number capture; "nothing to report" record | Rectification and annulment files | |
| RSA | Calculator for sections 3-4; checklist for 1-2; constancia upload | Year-on-year comparison | |
| Manual and governance | Manual generator from a lawyer-approved template; versions; staff e-acknowledgement; 2-year review reminder | Officer work plan and report; board approvals; remediation tracker | |
| Training | Register; certificate upload (e.g. GAFILAT); yearly reminder | Own 45-minute course with quiz and certificate; staff screening records | Colegio-branded courses |
| Self-assessment (ITAER) | Data collection only | **Wizard** from two years of data; methodology; PDF; approval | Versioned methodology for 2030 |
| REI, audit, accountant | **Basic accountant login with per-broker grants and a firm switcher** (added to 03's MVP, see §1) | Reviewer workspace with redacted ROS; 15-item reviewer file; **portfolio dashboard** | |
| Deadlines | Calendar: RSM, RSA, ITAER, REI, manual review, refreshes, training, ID expiry; e-mail digest | WhatsApp reminders (Business API) | |
| Inspection pack | One click: index plus manual, approvals, training log, risk model, client list, screening certificates, RSM receipts; kept under 20 MB | Read-only "inspection room" link | |
| Records | 10-year retention clocks; append-only audit log; full export | "Archive only" plan after cancellation | |
| Billing | Stripe Billing in USD; Paddle kept as a fallback behind one interface | Colegio invoicing | |

**Why this cut.** The RSM is the only duty that comes back every month, so the lease tracker and RSM export are the reasons to log in. The 2022 fines were for missing paper, so the manual, sign-offs, training log, PEP statements and RePET proof come next. The RSA window opens 2 Jan 2027, so the RSA calculator must ship by December. The ITAER and REI are not due until 2028, so they are v1 and a renewal story ([03](03-product-and-tech.md) "Why this cut").

The full list of **80 testable legal requirements** is in [01 "PRODUCT REQUIREMENTS"](01-law-and-requirements.md#product-requirements). Treat it as the acceptance checklist.

### Key flows

1. **First evening, under 60 minutes.** Sign up with a second factor. Pick sole broker or company. Answer about 25 questions in 10-15 minutes. Get the manual (Word and PDF) to approve. Invite staff to sign it on their phones. Add open clients; each is screened at once. The dashboard shows the gaps: "12 clients without a PEP statement", "next RSM due 15 Nov".
2. **New client by WhatsApp, under 10 minutes of broker time.** The agent taps "Send form", which opens WhatsApp with a click-to-chat link ([WhatsApp](https://faq.whatsapp.com/5913398998672934)). The client fills in the data, photographs the DNI and signs the statements with a 6-digit code. The app stores the text shown, timestamp, IP and a SHA-256 hash, as evidence for an electronic signature under [Law 25.506 Art. 5](https://www.argentina.gob.ar/normativa/nacional/ley-25506-70749/actualizacion). It screens RePET and proposes a risk level. High risk or PEP needs the officer's approval before the deal can close.
3. **Sale closed, then the monthly report.** Log the deal once; the parties come from the client files. The app converts currency at the BCRA rate, checks shares total 100,00 per side and runs the alerts. On the 1st: "RSM October: 3 operations ready, 1 with a missing field". Fix, click "Prepare RSM", get a validated ZIP. **Path A (Windows):** drop it into SROMasivo and send. **Path B (Mac or phone):** a copy sheet that follows the SRO+ form. Paste the control numbers back.
4. **A lease crosses the threshold.** The app keeps a yearly running total per client against 300 SMVM at the 31 Dec and 30 Jun wages, lower value by default. On crossing, it asks for missing due diligence and adds the lease to the next RSM ([UIF lease guide](https://www.argentina.gob.ar/uif/instructivos/rsm-operaciones-de-locacion-de-inmuebles-cuyo-monto-anual-sea-igual-o-superior-300)). Whether separate leases add up is an open legal question, so it is a lawyer-controlled setting.
5. **Something looks odd.** An alert fires, or an agent taps "Something looks odd". The agent sees only "sent to the officer". The officer works the case in the restricted area with the 8 Art. 32 fields. Concluding "suspicious" starts the 24-hour clock. The officer files in SRO+ and records the number. No message ever names the case.
6. **RSA in January.** On 2 January the task opens. Sections 3-4 are filled from data; sections 1-2 are a checklist. The broker types the values into SRO+ and uploads the constancia.
7. **The UIF writes.** Paste the request, pick the scope, get a ZIP under 20 MB. The restricted register is left out unless the officer adds it.
8. **Accountant with many brokers.** Each broker grants access. The accountant switches between firms (MVP) and later sees one portfolio (v1).
9. **A rule or number changes.** A nightly job reads the SMVM series. The content editor updates the módulo, templates and rule tables with a version and review date. A new RSM schema is re-exported by a pilot and loaded as a new version. Affected customers get one e-mail and a banner.

### Screens

1. Panel (dashboard) with deadlines, RSM status and an inspector-style health checklist.
2. Set-up wizard.
3. Clients list.
4. Client file (data, documents, statements, owners, screening history, risk, operations, timeline).
5. Client form (public mobile link).
6. Operations list and detail.
7. Lease tracker.
8. Monthly report (RSM).
9. Annual report (RSA).
10. Cases (restricted register; officer only).
11. Documents (manual versions, approvals, acknowledgements).
12. Training.
13. Calendar, with an iCal feed.
14. Inspection pack.
15. Settings (users, grants, billing, export, audit log).
16. Accountant portfolio (v1).
17. Content admin (lawyer).

Design rules: mobile first for the client form and staff screens; desktop first for officer and accountant screens; Argentine Spanish throughout; "vos" for staff and "usted" for clients (03's design choice).

---

## 6. Technical design

**Stack: one plain monolith that several agents can build in parallel** ([03](03-product-and-tech.md) "Architecture and stack").

| Layer | Choice | Why |
|---|---|---|
| App | Python, Django 5.2 LTS, server-rendered pages with HTMX | Forms and tables; fast on cheap phones; agents write good Django; the admin gives the lawyer a content area |
| Database | Managed PostgreSQL with point-in-time recovery; row-level security as a second tenant wall | Relational data; JSONB for rule tables |
| Jobs | Procrastinate (Postgres queue, no Redis) | RePET poll every 2 hours, re-screen on change, nightly wage and FX update, reminders, rendering |
| XML | lxml for XSD validation and writing, plus a small interpreter for the UIF's own annotations | The RSM files |
| Documents | docxtpl (lawyer edits Word templates), LibreOffice headless for PDF, WeasyPrint for certificates | |
| Matching and IDs | rapidfuzz with an accent- and order-free normaliser; python-stdnum for CUIT/CUIL | RePET has about 1,200 records, so matching is cheap ([python-stdnum](https://pypi.org/project/python-stdnum/)) |
| Auth | django-allauth with TOTP; required for broker, board, officer, accountant, reviewer | |
| Files | Cloudflare R2, EU jurisdiction, envelope encryption (one key per firm, a separate key for the restricted area) | No egress fee ([R2 pricing](https://developers.cloudflare.com/r2/pricing/)) |
| Hosting | Render, Frankfurt region | Managed web, workers and Postgres ([Render pricing](https://render.com/pricing); [regions](https://render.com/docs/regions)) |
| E-mail | Resend; no client names in e-mail bodies | Free to 3,000 a month ([Resend](https://resend.com/pricing)) |
| CI/CD | GitHub Actions, required checks; agents open pull requests; the founder merges | |
| Tests | pytest-django; Faker `es_AR` fixtures; golden-file tests for every XML and document | Catch schema and template drift |

**Module layout (one Django app per agent stream):** `core` (tenancy, roles, grants, audit chain, encryption, files, parameters), `clients`, `screening`, `risk`, `operations`, `alerts` and `cases` (restricted), `reports`, `programme`, `portal`, `billing`.

### Filing integration: what is inside SROMasivo

- 03 unpacked the SROMasivo v7.2 installer. It is a .NET Windows app that talks to a SOAP service at `masivo.uif.gob.ar/rsmservice.asmx`. It ships no XSD files. Its strings include "Descargar esquemas" and "Exportar esquemas", so schemas download per subject type after login, and a logged-in user can probably export them (my inference) ([installer](https://www.argentina.gob.ar/sites/default/files/sromasivoinstallerv7-2_.zip)).
- **Get the broker XSDs from a pilot in week 1.** Generate element names from the XSD, never by hand; a published UIF schema uses odd encoded names ([sample XSD](https://www.argentina.gob.ar/sites/default/files/reporte_de_registracion_y_cumplimiento_v.1.2.zip)).
- **Validate twice:** structure against the XSD, then the UIF's published rules (check digits, DNI length, at least one payment, a linked person for each company, shares of 100,00) ([UIF RSM sale guide](https://www.argentina.gob.ar/uif/instructivos/rsm-compra-yo-venta-de-bienes-inmuebles)).
- **Never call the SOAP service.** It would mean holding the broker's SRO+ password and using an undocumented interface. The broker clicks "send". This also keeps the filing duty and liability with him.
- **RSA and ROS have no bulk channel.** The product shows the values field by field in the form's order and stores the control number.

### Data sources

| Source | Use | Access and cost |
|---|---|---|
| RePET (Ministry of Justice) | Terrorist and UN proliferation screening | Public JSON: 959 persons and 269 entities, updated 9 Oct 2026; free; path not documented as an API ([personas.json](https://repet.jus.gob.ar/xml/personas.json)) |
| SMVM series | 300 / 700 / 875 SMVM thresholds | Free REST API, values published to Apr 2027 ([datos.gob.ar](https://apis.datos.gob.ar/series/api/series/?ids=57.1_SMVMM_0_M_34)) |
| BCRA rates | ARS equivalent of USD deals | Free REST API ([BCRA](https://api.bcra.gob.ar/estadisticascambiarias/v1.0/Cotizaciones/USD?fechadesde=2026-10-01&fechahasta=2026-10-10)) |
| OpenSanctions (v1) | PEP help; wider sanctions | 1,854 Argentine PEPs, mostly national legislators; EUR 0.03-0.10 per check ([Argentina page](https://www.opensanctions.org/countries/ar/); [API](https://www.opensanctions.org/api/)) |
| Didit RENAPER check (later) | Remote identity check | USD 0.20 per conclusive check ([Didit](https://didit.me/es/blog/argentina-renaper-dni-verification-api/)); data location unverified |
| Tokko Broker API (v1) | Import contacts and deals | REST with the agency's key; partnership terms unknown ([API root](https://www.tokkobroker.com/api/v1/?format=json)) |
| FATF lists, tax non-cooperative list, border zones | Country and geography risk | Parameter tables kept by the content editor |

**PEP data is the weak spot.** There is no official PEP list. The signed PEP statement stays the main control, with OpenSanctions as a helper and an honest disclaimer.

### Security and privacy

- **Law 25.326 applies.** The broker is the data controller; we are its processor under Art. 25 ([Law 25.326](https://www.argentina.gob.ar/normativa/nacional/ley-25326-64790/actualizacion)). A replacement bill (3397-D-2026) would add a 72-hour breach notice; build to it now ([abogados.com.ar](https://abogados.com.ar/nuevo-proyecto-de-ley-de-proteccion-de-datos-personales/39762)).
- **The exit problem.** Art. 25.2 says a processor must destroy the data when the service ends, but the broker must keep AML records for 10 years. So: a full export on exit, a USD 5 a month "archive only" plan, or an express two-year hold.
- **Hosting in the EU.** EU states are on Argentina's adequate list ([Disp. 60/2016](https://www.argentina.gob.ar/normativa/nacional/267922/texto)). US sub-processors get no client data, or sign model clauses. No customer data goes into AI tools; development uses synthetic data.
- **The restricted area** (cases, ROS drafts) has its own permission, key and access log, and is excluded from search, counts and exports for other roles. Breaching ROS secrecy can mean 6 months to 3 years in prison (Law 25.246 Art. 22).
- **Baseline:** TLS and HSTS, MFA, Argon2, tenant isolation in two layers with cross-tenant tests on every URL, single-use client links with a 7-day expiry, virus scan on upload, hash-chained audit log, nightly encrypted backup to a second bucket and a monthly restore test, an external penetration test before launch and then yearly.

### Running cost

| Customers | Per month (USD) | Per customer |
|---|---|---|
| 50 | about 100-170 | about 2.0-3.4 |
| 300 | about 350-375 | about 1.2 |
| 1,000 | about 690-1,055 | about 0.7-1.1 |

Includes Render, R2, e-mail, monitoring and paid PEP checks from v1 (03's estimates from [Render](https://render.com/pricing), [R2](https://developers.cloudflare.com/r2/pricing/), [Resend](https://resend.com/pricing) and [OpenSanctions](https://www.opensanctions.org/api/) prices). Payment fees cost more than hosting at small tickets, so push annual plans.

---

## 7. Development steps

### How the build works

- **The founder is product owner, architect, reviewer and integrator.** Claude Code agents write most of the code, each in its own git worktree and branch, each owning one Django app and its tests. No hired developers.
- **Foundation first, then parallel.** Week 1 builds the shared pieces (tenancy, roles, restricted-area guard, audit chain, encryption, files, parameter tables, task engine, Spanish shell). The six streams start only when those interfaces are frozen.
- **Tests first, from the law.** Each stream turns its duties from the 01 table into failing acceptance tests on day one.
- **Helper agents:** a fixtures agent builds a synthetic agency (120 clients, 40 sales, 15 leases, 2 PEPs, 1 RePET near-match, 1 lease crossing 300 SMVM); a reviewer agent checks every pull request for tenant leaks, ROS leaks, tipping-off text and English strings; a docs agent writes Spanish help.
- **One `CLAUDE.md`** with the glossary (legajo, sujeto obligado, RSM, RSA, ROS, RePET, SMVM, beneficiario final, REI, ITAER), architecture rules, "never touch another app's models", "no real personal data in code, tests or prompts", and "anything in `cases/` needs the founder's review".
- **Usage limits.** Running 4-6 sessions at once can hit plan windows. Stagger streams and keep a pay-as-you-go API budget. Claude Max is listed "from USD 100 a month"; the 20x tier is budgeted at USD 200 (unverified) ([Claude pricing](https://claude.com/pricing)).
- **The critical path is outside the code:** the broker XSDs, the lawyer's sign-off and pilot brokers willing to file a real RSM. Start all three on day 1.

### Agent work streams

| Stream | Apps | Main outputs | Depends on |
|---|---|---|---|
| **F. Foundation** (week 1; founder plus 2 agents) | core, portal shell | Tenancy with RLS; users, roles, grants; MFA; restricted-area guard; audit chain; encryption; file store; SMVM and BCRA importers; deadline engine with Argentine business days; CI/CD; staging | — |
| **S1. Client file** | clients | Art. 19-20 forms; CUIT/DNI checks; documents; client link with OTP e-signature; PEP, owner and funds statements | F |
| **S2. Screening** | screening | RePET ingestion with ETag polling and list versions; matcher; hit review; certificate PDF; re-screen; stale-list alarm | F; S1 models frozen |
| **S3. Risk** | risk | Rule table; scoring with reasons; override and approval; profile; refresh clocks; country tables | F; S1 |
| **S4. Operations and alerts** | operations, alerts, cases | Operations, parties, payments, FX; lease tracker; habitual-client test; alert rules and checklist; staff flag; restricted register; ROS clock | F; S1 |
| **S5. Reports** | reports | Schema store and mapping; RSM XML writer and validator; ZIP; copy sheets; control numbers; RSA calculator; inspection pack under 20 MB | F; reads S1, S4 |
| **S6. Programme and shell** | programme, portal, billing | Set-up wizard; manual generator; approvals and acknowledgements; training register; dashboard; calendar; reminders; Stripe checkout | F |
| Helpers | tests, docs | Synthetic agency; review reports; Spanish help | F |

### Calendar (start Monday 12 Oct 2026)

Argentine holidays inside the plan: 12 Oct, 23 Nov, 7-8 Dec and 25 Dec ([Contadores en Red](https://contadoresenred.com/calendario-de-feriados-2026/)). The founder works from abroad, but pilots and the lawyer follow these dates.

| Week | Dates | Engineering | Content, legal, pilots | Exit check |
|---|---|---|---|---|
| 1 | 12-16 Oct | Repo, `CLAUDE.md`, backlog from the duty table; Render, R2, Resend and Stripe accounts; stream F; fixtures agent starts | Book 20 broker and 5 accountant calls. **Ask 2-3 brokers to export the SROMasivo schemas.** Request an AMLify demo. Engage the lawyer (small first stage) and an AML expert. Book the penetration test for 16-19 Nov | Interfaces frozen 16 Oct; staging live; XSDs in hand or a named broker who will export them |
| 2-3 | 19-30 Oct | Streams S1-S6 in parallel; RSM writer built on the exported XSDs (copy sheet first if late) | Lawyer drafts the statements and manual template. AML expert drafts the risk table and alert checklist. Pick 10 pilot brokers and 3 accountants | **MVP code complete Fri 30 Oct** |
| Gate | **Sun 1 Nov** | — | **Interview gate** (§13). AMLify's price known | Release the rest of the legal and security budget only if passed |
| 4 | 2-6 Nov | End-to-end tests over 12 synthetic months; SROMasivo dry-run ("Importar y Validar" without sending); security pass by the reviewer agent; restore drill | First pilots onboard and enter their October deals. News hook: registry regime from 8 Nov | **MVP done Fri 6 Nov** |
| 5 | 9-13 Nov | Pilot fixes; Spanish copy pass | **Stretch:** 1-2 pilots file the October RSM with our files by Fri 13 Nov. Lawyer reviews content in the app | Pilots live with real data |
| 6 | 16-20 Nov | External penetration test 16-19 Nov on a frozen build | Lawyer and AML expert sign off templates, rules, terms, DPA and privacy policy by 20 Nov | Signed approvals |
| 7 | 23-27 Nov | Fix high and critical findings; retest Thu 26 Nov; monitoring; status page | Pricing page with "precio final estimado con impuestos" | No open high or critical findings |
| 8 | 30 Nov-4 Dec | Production go-live; basic accountant access | **Paid launch Tue 1 Dec.** Pilots convert at 50% off and file the November RSM (window 1-15 Dec) | **Sellable** |
| After | 7 Dec-15 Mar | RSA calculator hardening before 2 Jan; v1 starts | **11 Dec paying-pilot gate.** RSA window 2 Jan-15 Mar is the first sales push | At least 3 pilots have filed a real RSM with our files by 15 Dec |
| v1 | Jan-May 2027 | ITAER wizard; reviewer workspace and accountant portfolio (portfolio by Feb); OpenSanctions; DNI barcode; Excel and Tokko imports; ROS draft builder; course | Accountant partners; colegio talks | Monthly releases |

**Is "MVP in about 3 weeks" realistic?** Yes for the code, with no slack. Anything not in the MVP column goes to v1. **Fallback:** if a gate slips, launch Wed 9 Dec, still inside the November RSM window. If the XSDs are late, ship with the copy sheet and add the XML export when they arrive, about two agent-days (03's estimate).

### MVP definition of done (Fri 6 Nov)

1. Every MVP feature passes its acceptance tests, including:
   - **Lease tracker:** a lease of ARS 9 million a month is in scope at the ARS 334,800 basis and out of scope at ARS 367,800; the screen shows both.
   - **Alerts:** the same property resold at 100 then 145 within 11 months raises the resale alert; an offer of 100 and a sale at 69 raises the offer-gap alert; no operation closes until the checklist is answered.
   - **RSM validator:** rejects buyer shares of 60,00 + 30,00, a 9-digit DNI, a bad CUIT check digit, a company party with no linked person, an operation with no payment, a period after the report date.
   - **ROS clock:** suspicion concluded Tue 10:00 is due Wed 10:00, never later than day 90 after the operation.
   - **Refresh clock:** a high-risk client rated 15 Jan 2027 is due 15 Jan 2028; low risk 15 Jan 2032.
   - **Screening:** 50 RePET test names with accent, order and alias variants are caught; the certificate shows the list's date.
   - **Access:** staff get "forbidden" on every `cases/` page and see no case counts; an accountant cannot reach a broker without a grant.
2. The synthetic agency's RSM files validate against the exported broker XSD, and one pilot's SROMasivo shows "Ok" on import.
3. The inspection pack is under 20 MB and opens on Windows and macOS.
4. Tenant isolation tests pass on every URL; MFA is enforced; the audit chain verifies; a restore has been done.
5. All screens and documents are in Argentine Spanish.
6. A new firm completes flows 1-3 in under 60 minutes.

**"Sellable" (1 Dec)** adds: legal sign-off; no open high or critical pen-test findings; at least 3 pilots have imported our files into SROMasivo without validation errors; billing live; a status page and a support channel. **The proof that sells:** at least 3 pilots file a real RSM with our files by 15 Dec.

### Budget

**Cash to "sellable"** (8 weeks; founder unpaid; company excluded; from [03](03-product-and-tech.md) "Budget"):

| Item | Low (USD) | High (USD) | Note |
|---|---|---|---|
| Claude Max 20x, 2 months | 400 | 400 | USD 200 a month assumed (unverified) |
| API overflow or a second plan | 200 | 800 | my estimate |
| Hosting, domain, e-mail, error tracking, CI | 200 | 500 | [Render](https://render.com/pricing); [Resend](https://resend.com/pricing) |
| Argentine lawyer (AML and data protection): statements, manual template, rule review, terms, DPA, privacy | 2,000 | 4,500 | Fixed-fee estimate (unverified) |
| AML expert (REI-registered accountant or ex-UIF analyst), 15-30 hours | 750 | 2,000 | unverified |
| Penetration test with retest | 3,000 | 8,000 | Small single-app tests often quoted at USD 5,000-15,000 ([Andersen](https://andersenlab.com/blueprint/penetration-testing-costs-2026); [Startup Defense](https://www.startupdefense.io/es-us/blog/cuanto-cuesta-un-pentest)); a local boutique may be cheaper (unverified) |
| Windows test time; optional pilot trip | 0 | 2,050 | my estimate |
| Contingency (10%) | 650 | 1,850 | |
| **Total** | **about 7,200** | **about 20,100** | |

**Spending before the 1 Nov gate:** only AI tools, hosting and a small first lawyer stage, about USD 1,000-2,000 (my estimate).

**Monthly running cost after launch:** hosting USD 100-170 at 50 customers, AI tools USD 100-200, lawyer and AML expert retainer USD 100-250: **about USD 300-620 a month** (03's estimates).

**Year-1 cash, excluding company and marketing:** about **USD 10,200-26,300** (03's arithmetic). With marketing (USD 12,000), a support contractor and the rest, 04's base year-1 cost is about USD 35,200 (§10).

**Concierge fallback.** If the XSDs or pilots are late, sell the programme pieces first (manual, statements kit, training log) plus a monthly RSM copy sheet done with the broker on a call. This needs only streams F, S1 and S6 and can be sold from about 23 Nov (03's estimate).

---

## 8. Go-to-market

### Pricing

The plans follow [04](04-gtm-company-finance.md). Prices are net of Argentine taxes, which the card issuer adds (§9).

| Plan | Who | Monthly (USD) | Yearly (USD, 2 months free) | Includes |
|---|---|---|---|---|
| **Chequeo UIF** (free) | Any broker; lead magnet | 0 | 0 | "Am I obliged?" test; 15-question gap check against Res. 43; up to 3 client files; no exports |
| **Solo** | Sole broker | **15** | **150** | Client file, PEP and RePET checks, risk rating, lease tracker, validated RSM export, RSA helper, alert register, manual with sign-off, training log, ITAER builder for 2028, inspection pack, rule updates |
| **Inmobiliaria** | Agency with staff | 39 | 390 | Up to 5 users; officer and alternate roles; audit log; WhatsApp client link; CSV import |
| **Red** | Franchise office or multi-branch firm | 79 | 790 | Up to 15 users and several branches; group dashboard; priority support |
| **Contador / REI** | Accountant, auditor or reviewer | 69 | 690 | Up to 15 broker clients, then USD 4 each; reviewer workspace with ROS identities hidden; resells Solo at 25% off |
| **Colegio** | Licensing body (white-label) | about USD 1.00-1.50 per member | minimum about USD 6,000, or flat USD 10,000-25,000 | Branding; members get Solo free or discounted; colegio sees adoption counts only |

- **Add-ons:** ITAER 2028 pack included in annual plans, USD 99 for monthly plans; done-with-you set-up USD 150-250 by a partner accountant who keeps 70%; archive plan USD 5 a month after cancellation.
- **Launch offer:** the first 30 paying customers get 50% off the first year (Solo USD 75). A 24-month price lock for anyone who prepays before 15 Mar 2027.
- **Anchors:** Solo at USD 150 a year is about 30% of the CABA colegio fee of USD 494 ([CUCICBA](https://colegioinmobiliario.org.ar/institucional/matriculacion)) and below the cheapest Tokko plan of USD 80 a month ([DevelopArgentina](https://developargentina.com/blog/software-inmobiliaria-argentina-2026)). One sale commission of 3-4% per side pays for decades of the tool ([Ámbito, Jun 2026](https://www.ambito.com/real-estate/cuales-son-los-gastos-que-pagan-comprador-y-vendedor-una-propiedad-us100000-caba-y-provincia-n6287354); unverified as a norm), but brokers compare software with fixed costs, not with deals.
- **Quote and charge in USD.** Argentine software buyers are used to USD prices, and it protects against inflation.

**What the buyer sees on a peso card statement** (04's calculation from [RG 4240](https://www.boletinoficial.gob.ar/detalleAviso/primera/183569/20180514) and [RG 5617](https://www.consejosalta.org.ar/wp-content/uploads/ARCA-5617.pdf)):

| Plan | Net | + 21% VAT | + 30% advance (recoverable later) | On the statement |
|---|---|---|---|---|
| Solo monthly | 15.00 | 3.15 | 4.50 | about 22.65 |
| Solo yearly | 150 | 31.50 | 45 | about 226.50 |
| Inmobiliaria yearly | 390 | 81.90 | 117 | about 589 |

Show a "precio final estimado con impuestos" line on the pricing page. Surprise taxes cause churn.

### Channels, in priority order

1. **Accountants and external reviewers.** They already do the RSA, ITAER and REI paperwork for brokers; one accountant brings 5-15 brokers. Offer the Contador seat, 25% wholesale on Solo, and 20% of first-year revenue on referrals. Reach them through CPCE councils, Blog del Contador and contadoresenred ([Blog del Contador](https://siap.blogdelcontador.com.ar/?p=83511)). An REI must not resell to a firm it then reviews (independence; my reading of [Res. 132/2024](https://www.argentina.gob.ar/normativa/nacional/resoluci%C3%B3n-132-2024-403326/texto), unverified).
2. **Provincial colegios outside Buenos Aires city.** Córdoba CPI (3,800+ brokers) already partners with a vendor ([Locativa](https://www.locativa.com.ar/novedades/locativa-y-el-colegio-de-corredores-inmobiliarios-de-cordoba-renovaron-su-convenio-de-colaboracion/)); then Rosario and Santa Fe, Mendoza, Entre Ríos and the 21 Buenos Aires province colegios ([Infobae](https://www.infobae.com/economia/2025/02/07/desregulacion-inmobiliaria-como-funcionan-los-colegios-que-el-gobierno-busca-modificar/)). Step 1: a member-benefit listing at 20-30% off. Step 2: white-label once 20+ members pay. Move fast in Córdoba and Santa Fe, before COFECI moves.
3. **Self-serve direct.** The free Chequeo UIF; a Spanish SEO hub (RSM, RSA, ITAER, the 300 SMVM rule, "¿estoy obligado?"); a free RSM validator; Meta and Instagram ads, where Argentine clicks cost a median of about USD 0.11 ([Superads](https://www.superads.ai/facebook-ads-costs/cpc-cost-per-click/argentina)). Cold e-mail to the public colegio registers only after the lawyer confirms Law 25.326 allows it (unverified).
4. **CRM vendors** (Tokko/QuintoAndar, Xintel, KiteProp, InmoSuite). Start with CSV import. After 50 customers, pitch an API integration with a 20-30% revenue share.
5. **Franchise networks other than RE/MAX** (RE/MAX offices already use AMLify).
6. **Media and speakers:** Reporte Inmobiliario, prevenciondelavado.com, and ex-UIF speakers who teach at colegios ([CUCICBA #215](https://colegioinmobiliario.org.ar/novedades/215)).

**Sales motion.** Sole brokers and small agencies: fully self-serve, 14-day trial, card at checkout, set-up in under 15 minutes, WhatsApp support in Spanish from a part-time Argentine contractor from month 4. Agencies: a 20-minute video demo. Accountants: a partner call and a sandbox with 3 demo brokers. Colegios: founder-led, a 20-member pilot, then a yearly contract; expect 3-9 months to close (04's estimate).

**Renewal drivers:** monthly RSM reminders; the refresh calendar; the 2028 ITAER built from stored data (switching loses it); the 10-year archive.

### Selling calendar

| When | Event | What to do |
|---|---|---|
| 1st-15th, every month | RSM due | Reminder e-mail and WhatsApp; free RSM validator as a hook |
| From 8 Nov 2026 | Registry regime (Res. 93/2026) | News hook: "the registries will see your deals" (inference) |
| **2 Jan-15 Mar, every year** | RSA window | **Main yearly push:** "Do your RSA in 10 minutes" |
| Jan-Feb | Summer; fewer deeds (CABA: 3,423 in Jan 2026 against 5,990 in Jun 2026, per Zonaprop index snippets) | Lead with the deadline, not features |
| Jul | Winter holidays | Build content |
| Mid-2027 to Apr 2028 | **ITAER due 30 Apr 2028** | **Biggest one-off spike.** Sell annual plans with the ITAER pack |
| May-Aug 2028 | REI due about 28 Aug 2028 | Accountant and reviewer push |
| Any time | UIF information requests or inspections | One-click inspection pack; react within 48 hours to colegio news |

### Marketing budget, year 1 (Nov 2026-Oct 2027): about USD 12,000

| Line | USD |
|---|---|
| Ads (Meta, Instagram, Google, LinkedIn), weighted to Jan-Mar | 3,600 |
| Colegio events, sponsorships, benefit listings | 2,500 |
| Travel: one 10-day trip (Buenos Aires, Córdoba, Rosario) | 2,000 |
| Webinars (4 speaker fees) | 1,600 |
| Content and SEO (about 20 articles and templates) | 1,500 |
| Tools | 600 |
| Contingency | 200 |

By quarter: Q1 (Nov-Jan) USD 4,000; Q2 (Feb-Apr) USD 3,000; Q3 (May-Jul) USD 2,500; Q4 (Aug-Oct) USD 2,500. Plus 20% partner commissions and the support contractor, which sit in costs. Years 2 and 3: USD 15,000 and 18,000 in the base model.

**KPIs, monthly:** checker completions; trial starts; trial-to-paid (target 20%); paid accounts by channel; monthly churn (target under 2.5%); failed card payments; cost per paid account (target under USD 150).

### First 90 days (12 Oct 2026-10 Jan 2027)

- **Days 1-21 (to 1 Nov):**
  - 20 broker calls (10 outside CABA) and 5 accountant calls, booked through colegio registers and LinkedIn;
  - AMLify demo and price;
  - XSD export from pilots;
  - MVP code complete 30 Oct;
  - "¿Estoy obligado?" checker and 3 SEO articles live;
  - **1 Nov gate.**
- **Days 22-49 (to 30 Nov):**
  - 10 pilot brokers and 3 pilot accountants onboard free;
  - SROMasivo dry-run, then a stretch October RSM filing;
  - two webinars (one with an accountant, one with an ex-UIF speaker);
  - approach Córdoba CPI and Rosario COCIR with a benefit offer;
  - penetration test and legal sign-off.
- **Days 50-70 (to 20 Dec):**
  - **paid launch 1 Dec** at 50% off;
  - pilots file the November RSM with our files;
  - **11 Dec gate: 10 paying target, 3 minimum;**
  - accountant partner programme live; colegio trip if pilots convert;
  - test 3 Argentine cards for VAT lines.
- **Days 71-90 (to 10 Jan):**
  - holiday slowdown; schedule January e-mails;
  - RSA export ready by 2 Jan; RSA campaign from 4 Jan;
  - **day-90 review:** 25 paying accounts, 5 accountant partners, 1 colegio benefit listing.

---

## 9. Payments, company and legal

### Payments: sell from the founder's foreign company, by card, in USD

- **Argentine cards pay foreign software every day.** ARCA makes card issuers collect VAT on digital services from abroad ([RG 4240](https://www.boletinoficial.gob.ar/detalleAviso/primera/183569/20180514)). Its list of card payments subject to the 30% advance names "servicios prestados por no residentes (streaming, software, suscripciones)" ([Fortuna, 2026](https://fortunaweb.com.ar/blog/dolar-tarjeta-2026-como-se-calcula-el-costo-real-de-pagar-en-el-exterior)).
- **The foreign seller does not register for Argentine VAT.** Argentina taxes these services on the buyer's side; there is no seller registration like the EU's OSS ([Blog del Contador](https://siap.blogdelcontador.com.ar/categoria_normativa/servicios-digitales-prestados-por-sujetos-del-exterior/)). No 2026 change was found (unverified). Invoice the net price; do not add Argentine VAT.
- **Recommendation: Stripe Billing, priced and charged in USD,** with annual plans pushed hard. Paddle stays a fallback behind the same billing interface.

Fee shares below are 04's arithmetic (Stripe, Paddle) and mine (Lemon Squeezy).

| Option | Fees | On USD 15 monthly | On USD 150 yearly | Notes |
|---|---|---|---|---|
| **Stripe Billing** (US account example) | 2.9% + USD 0.30, +1.5% international card, +0.7% Billing; disputes USD 15 | about 7.1% | about 5.3% | Argentina is not a merchant country, but Argentine cards can be charged; ARS and USD supported ([Stripe pricing](https://stripe.com/pricing); [currencies](https://docs.stripe.com/currencies)). Fees differ by the account's country |
| **Paddle** (merchant of record) | 5% + USD 0.50 | about 8.3% | about 5.3% | Lists Argentina ([Paddle countries](https://developer.paddle.com/concepts/sell/supported-countries-locales); [pricing](https://www.paddle.com/pricing)). Check it does not add VAT on top of the issuer's perception (unverified risk) |
| Lemon Squeezy (merchant of record) | 5% + USD 0.50, plus a reported 1.5% international | about 9.8% | about 6.8% | Accepts Argentine buyers ([Lemon Squeezy](https://docs.lemonsqueezy.com/help/getting-started/supported-countries)); fee reports are third-party (unverified) |

- **What a merchant of record buys here:** little for Argentina alone, because no seller VAT registration is needed. It helps with VAT in the founder's own region and in later markets.

**Taxes on the buyer's side** (October 2026):

- **21% VAT,** perceived by the card issuer when the buyer is not VAT-registered. A VAT-registered broker credits it; a monotributista cannot. A small new vendor may not yet be on ARCA's provider list, so the line may not appear at first (unverified; test with 3 pilot cards) ([contadoresenred](https://contadoresenred.com/iva-en-servicios-digitales-rg-4240/)).
- **30% income-tax advance** on the part paid in pesos, credited or refunded the next year; not charged if the card bill is paid in dollars ([RG 5617](https://www.consejosalta.org.ar/wp-content/uploads/ARCA-5617.pdf)).
- **Provincial gross-income tax** of 3-5.5% in some provinces; Santa Fe charges 4.5% from 1 Jul 2025 ([Blog del Contador](https://blogdelcontador.com.ar/news-45948-santa-fe-aplicara-ingresos-brutos-a-servicios-digitales-del-exterior-desde-el-1-de-julio)). Buenos Aires city collects only from providers on its list ([AGIP Res. 312/19](https://blogdelcontador.com.ar/resolucion-312-19-agip-ingresos-brutos-se-reglamenta-el-regimen-de-retencion-sobre-los-servicios-digitales)).

**Withholding on institutional wires.** An Argentine payer who wires a foreign company may withhold 35% on a presumed 90% net, so **31.5%** ([Garrigues](https://www.garrigues.com/es_ES/noticia/software-service-saas-desafio-alta-complejidad-tributaria-mundo-digital-e-interconectado)). It does not bite on small card payments in practice (unverified), but it can on a colegio or franchise contract. Options: a tax treaty (Argentina has treaties with Germany, Spain, France, Italy, the Netherlands, the UK, Switzerland and others; the US has none, unverified) ([argentina.gob.ar](https://www.argentina.gob.ar/node/78019)); the institution pays by card through a Stripe invoice; or a local reseller invoices in pesos.

**Local collection, later.** dLocal Go takes peso payments for foreign merchants at 3.49% by card, 2.99% cash and 1.99% transfer, plus local taxes, with subscriptions ([dLocal Go](https://dlocalgo.com/en/coverage)). Add it if card failures pass 10%. Mercado Pago appears to need an Argentine CUIT (secondary sources; unverified). The cheapest bridge is a partner accounting firm that buys licences wholesale and invoices in pesos.

### Company: none in Argentina at launch

- **Not needed** for any MVP integration (all public data, or run by the broker) or for card sales ([03](03-product-and-tech.md) Summary; [04](04-gtm-company-finance.md) "Company setup"). No licence for UIF compliance software was found (unverified).
- **Argentine contractors** (support, sales, content) can invoice the foreign company as service exporters ("factura E") under the monotributo (common practice; unverified case by case).
- **Open a local company only if:**
  1. colegio, franchise or accountant deals pass about USD 20,000 a year and the buyer insists on a peso invoice, or would withhold 31.5%;
  2. you hire Argentine employees rather than contractors;
  3. you want peso collection at scale (Mercado Pago, local transfers).
- In the base model, trigger 1 might come in year 2 or 3. Budget it then.

**If a company is needed** (a SAS is the usual choice):

| Item | Cost and time | Source |
|---|---|---|
| Minimum capital (SAS) | 2 SMVM = ARS 767,600 (about USD 506) at the Sep 2026 wage; 25% of cash paid in at signing, the rest within 2 years | [Law 27.349 Art. 40](https://servicios.infoleg.gob.ar/infolegInternet/anexos/270000-274999/273567/texact.htm); [Canal 26](https://www.canal26.com/economia/2026/09/02/asi-quedo-el-aumento-del-salario-minimo-vital-y-movil-cuanto-se-cobrara-entre-septiembre-de-2026-y-abril-de-2027/) |
| **Official fees, done in person, Buenos Aires city** (digital SAS) | IGJ fee about ARS 8,438 (USD 6); no notary or edict needed in the city | [Cuánto me cuesta](https://cuantomecuesta.com/ar/crear-empresa-sas/) (aggregator; unverified) |
| Official fees, in person, Buenos Aires province | Signature certification ARS 80,850, plus a digital-signature token ARS 15,000-40,000 | same (unverified) |
| **In person, founder flies in** | Official fees of tens of dollars, plus a trip of about USD 1,500-2,500. He must get a CUIT or CDI in person at ARCA if he holds shares himself. A local professional is still needed for the paperwork | 04's estimate; [VLO Law Firm](https://vlolawfirm.com/guides/cost-of-company-formation-in-argentina-complete-breakdown) |
| **Remotely with a lawyer, local owners** | About USD 300-800 for a SAS; 1-2 weeks | [Argentina Visa Law](https://argentinavisalaw.com/guides/company-formation-argentina) (search snippet; unverified) |
| **Remotely with a lawyer, foreign parent company** | **About USD 2,000-4,000 all-in:** SAS, Art. 123 registration of the parent (simpler since IGJ Res. 4/2026), apostilles, translations, a local representative's first months, capital paid in. The two filings can go in together. A bank account takes several weeks to over a month | 04's estimate (unverified); [abogados.com.ar on IGJ RG 4/2026](https://abogados.com.ar/novedades-igj-resolucion-042026-simplificacion-sociedades-extranjeras/39242); [Colegio de Escribanos](https://www.colegio-escribanos.org.ar/noticias/2026_06_10_Informe-Res-Gral-IGJ-4-26.pdf) |
| SRL instead | No legal minimum capital; edict ARS 20,000-50,000; lawyer and notary USD 800-2,000; 4-8 weeks | [Cuánto me cuesta](https://cuantomecuesta.com/ar/crear-empresa-sas/); [Argentina Visa Law](https://argentinavisalaw.com/guides/company-formation-argentina) (unverified) |

**Ongoing costs of a local company:** an accountant at ARS 120,000-250,000 a month (about USD 80-165); 0.6% tax on bank debits and credits; 21% VAT on local sales; provincial gross-income tax of several percent; corporate income tax on a 25-35% scale; a fee for the parent's local representative. **About USD 2,500-4,000 a year before taxes** (04's estimate from [DevelopArgentina](https://developargentina.com/guias/abrir-empresa-argentina) and [yo-facturo](https://yo-facturo.com/blog/costos-de-abrir-una-empresa-en-argentina/); unverified).

### Legal documents and contracts

- **Terms of service (Spanish, click-through):**
  - the tool is not legal advice; the broker and officer stay responsible;
  - ROS and terrorist-financing reports are never filed automatically;
  - ROS logs are hidden from reviewers, colegios and resellers;
  - liability capped at 12 months of fees, excluding fines and indirect loss; do not try to exclude wilful misconduct, which Argentine law voids (Civil and Commercial Code Art. 1743; unverified);
  - the founder's company's law for these B2B terms, plus an easy online cancel button in case a sole broker claims consumer status;
  - templates and rules updated within 30 days of a new UIF resolution;
  - full export at any time; the archive plan covers the 10-year duty.
- **Data-processing agreement** inside the terms (broker as controller, us as processor). Provide a ready text for any AAIP database registration the broker may need (whether it is needed is unverified).
- **Privacy policy;** sub-processor list; incident policy (notify customers within 72 hours).
- **Partner contracts:** accountants at 20% of first-year revenue on referrals or 25% wholesale; a clause that a partner does not resell to a firm it reviews as REI. Colegio white-label: members own their data; the colegio sees adoption counts only; 12-month term; price per member with a minimum.
- **Lawyer agreement** with a written scope and responsibility for the content.
- **Budget:** lawyer USD 2,000-4,500 to launch, then about USD 150 a month and USD 800 a year for a template refresh; tech E&O and cyber insurance about USD 1,200 a year from the home country (unverified); penetration test about USD 2,500 a year after the first.

---

## 10. Financials

The model is [04](04-gtm-company-finance.md)'s 36-month model (month 1 = Nov 2026). The founder builds with AI agents and takes no pay. Revenue equals cash because it assumes monthly billing; annual prepayment would cut the peak cash need.

**Main assumptions (base):** 90 / 130 / 140 new broker accounts in years 1-3; 2% monthly churn; USD 21 / 23 / 25 a month per broker account (65% Solo, 30% Inmobiliaria, 5% Red); 10 / 15 / 18 new accountant seats at USD 60 a month; colegio deals of USD 8,000 a year from month 13 and USD 10,000 from month 25; marketing USD 12,000 / 15,000 / 18,000; an Argentine support contractor from month 4; 6% payment fees.

| Measure | Low | Base (04) | High |
|---|---|---|---|
| Broker accounts at month 6 / 12 / 24 / 36 | 18 / 35 / 75 / 103 | 41 / 82 / 181 / 268 | 92 / 186 / 413 / 621 |
| Accountant seats at month 36 | 12 | 35 | 72 |
| Share of the 10,365 registered brokers at month 36 | 1.0% | 2.6% | 6.0% |
| ARR at month 12 / 24 / 36 (USD) | 9,400 / 21,600 / 31,300 | 27,200 / 73,400 / 123,200 | 76,600 / 189,900 / 309,300 |
| Revenue, years 1 / 2 / 3 (USD) | 4,900 / 16,600 / 27,400 | 14,000 / 57,600 / 107,100 | 35,900 / 142,300 / 263,500 |
| Costs, years 1 / 2 / 3 (USD) | 24,700 / 28,900 / 34,200 | 35,200 / 46,600 / 62,500 | 45,900 / 72,500 / 106,400 |
| Profit before founder pay, year 3 (USD) | -6,800 | 44,600 | 157,000 |
| Monthly break-even | month 36 | month 15 (Jan 2028) | month 15 |
| Cumulative cash positive | not within 36 months | month 29 (Mar 2029) | month 17 (Mar 2028) |
| Peak cash need, no founder pay (USD) | 38,900 | 24,600 | 17,100 |
| Peak cash need, founder paid USD 3,000 a month from month 13 (USD) | 110,900 | 49,900 | 17,100 |

**Year-1 base costs, USD 35,200:** marketing 12,000; support contractor 5,400; legal 5,500; AI tools 3,750; pen test 3,000; insurance and admin 2,400; hosting and data 1,560; payment fees 839; commissions 738.

**My planning base, and why it is lower than 04's base.**

- **Drop the colegio deals.** CUCICBA lists AMLify, and its president heads COFECI ([CUCICBA #210](https://colegioinmobiliario.org.ar/novedades/210)). 04's own sensitivity says that without colegio deals, **ARR at month 36 is about USD 105,000 and year-3 profit about USD 27,700**.
- **Cross-check:** 02's independent estimate was about USD 90,000 a year at year 3. So the planning figure is **about USD 90,000-105,000 ARR at month 36**.
- **Add the high end of legal and security costs** (pen test up to USD 8,000; lawyer and expert up to USD 6,500). That lifts peak cash to **about USD 30,000-35,000** without founder pay. With founder pay of USD 3,000 a month from month 13 and no colegio deal, the base never covers the salary, so plan on **about USD 60,000-70,000** and treat the salary as optional (my rough estimate; 04 did not run this combination).
- **The base is not conservative on acquisition.** It assumes 90 new accounts in year 1, about twice what AMLify has shown in about 18 months with BDO's brand and CUCICBA's listing ([amlify.net](https://amlify.net/)). The 31 Mar 2027 kill test (§13) checks this early.

**Unit economics (base):** about USD 21-25 a month per broker account; blended acquisition cost about USD 150; payback about 7 months; average life about 50 months at 2% churn; gross margin about 88%; lifetime value about USD 1,000; LTV/CAC about 6-7. **The limit is the market and the price, not the unit economics.**

**Sensitivity** (04's model runs, base):

- USD 5 less a month per account: year-3 profit about USD 32,700.
- No colegio deals: year-3 profit about USD 27,700; ARR about USD 105,000.
- 3% monthly churn instead of 2%: 234 accounts at month 36; profit about USD 38,000.
- Peak cash stays at USD 25,000-28,000 in all three.
- One USD 8,000 colegio deal equals about 27 average broker accounts.

**Founder income.** The planning base cannot pay USD 3,000 a month even in year 3. A real income needs colegio deals, the accountant channel and Uruguay (§11).

**Exit.** Small SaaS sells for about 2-3x seller's earnings ([PipelineRoad](https://pipelineroad.com/agency/blog/saas-valuations-guide)), or a strategic buyer may pay 1-2x ARR (04's estimate). Planning base: about **USD 55,000-210,000**. High case: about USD 310,000-630,000. Likely buyers: BDO (AMLify), QuintoAndar (Tokko), Xintel, Pirani.

---

## 11. Regional expansion

| Market | Duty on real estate agents | Size and pressure | Fit | When |
|---|---|---|---|---|
| **Argentina, adjacent sectors** | Accountants (4,712 registered) and notaries (11,325) are obliged too ([FATF MER 2024](https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf)) | Notaries already have a free colegio app | Same engine (client file, risk rating, ITAER). Accountants are partners first, then buyers of their own module | From month 6, if brokers work |
| **Uruguay** | Agencies, developers and builders are obliged (Law 19.574; Decree 379/018) ([Ferrere](https://www.ferrere.com/en/news/uruguay-reglamentan-ley-integral-contra-el-lavado-de-activos-para-sector-no-financiero/)) | SENACLAFT oversees about 14,000 non-financial obliged subjects with about 10 inspectors; 6 agencies inspected in 2023 ([SENACLAFT 2023](https://www.gub.uy/secretaria-nacional-lucha-contra-lavado-activos-financiamiento-terrorismo/sites/secretaria-nacional-lucha-contra-lavado-activos-financiamiento-terrorismo/files/documentos/noticias/Senaclaft%20-%20Resumen%20de%20Actividades%20A%C3%B1o%202023%20para%20web.pdf)) | Same language; close legal culture; Crowe sells a compliance service, no software found ([Crowe Uruguay](https://www.crowe.com/uy/plaft-ag-inmob-y-rematadores)). Agency count not found; small | Prepare in month 15; launch months 18-24, only if the month-12 milestone is met |
| Peru | Agents register with the housing ministry; the officer's annual report has a fixed deadline ([Gestión snippet](https://gestion.pe/economia/empresas/sbs-el-15-de-febrero-vence-plazo-para-presentar-el-informe-anual-del-oficial-de-cumplimiento-noticia/)) | Not counted | A fixed deadline helps sales; local tools not checked | Check after month 24 |
| Chile | Brokers and property managers are UAF-supervised | About 1,500 registered (2014); 49 sanctioned in 2018 ([Diario Estrategia snippet](https://www.diarioestrategia.cl/texto-diario/mostrar/1401968/uaf-usuarios-zonas-francas-corredores-propiedades-notarios-empresas-gestion-inmobiliarias-explican-55-multas-infracciones-normativa-antivalado)) | Real enforcement; local vendors likely (unverified) | Check after month 24 |
| Paraguay | Agencies are obliged (Law 1.015/97) ([Ferrere](https://www.ferrere.com/en/news/paraguay-obligatoriedad-de-las-inmobiliarias-que-se-dedican-a-la-compraventa-de-inmuebles-de-comunicar-operaciones-sospechosas-v/)) | Weak regime | Low | Last |
| Brazil, Mexico | Obliged | Very large | Different language or regime; Mexico already has vendors ([ArmorAML](https://armor-aml.com/software-de-prevencion-de-lavado-de-dinero-en-el-sector-inmobiliario/)) | Not planned |

**Cost of each new country:** legal content review of about USD 3,000-5,000, 2-4 weeks of agent work to localise rules and templates, and one launch trip (04's estimate). Keep each country's rules as data.

---

## 12. Risks and mitigations

| Risk | Likelihood / impact | Mitigation |
|---|---|---|
| **Weak enforcement keeps willingness to pay low** (0.3% of brokers inspected a year) | High / High | Sell around deadlines (RSM, RSA, ITAER 2028), UIF letters and the registry regime. Keep the price low. Sell through accountants who already charge for the work |
| **AMLify goes national through COFECI and drops its price** | Medium / High | Move first in Córdoba and Santa Fe. Own self-serve and accountants. Publish prices. Treat BDO as a possible buyer, not only a rival |
| **The broker XSDs cannot be obtained** | Medium / Medium | Ask pilots in week 1; ask the UIF at sujetosobligados@uif.gob.ar; ship the copy sheet first |
| SROMasivo is Windows-only; brokers use Macs and phones (unverified) | Medium / Low | Copy sheet for the web form; few deals a month make typing acceptable |
| UIF changes the schema | Medium / Medium | Schemas stored as versions with golden tests; a pilot re-exports; customer banner |
| RePET JSON path moves | Low / Medium | ETag polling with a 48-hour stale alarm; OpenSanctions also carries RePET |
| Thin PEP data | High / Medium | The signed statement stays mandatory; "public function" questions; OpenSanctions; an honest disclaimer |
| **Security flaw in agent-written code** (tenant or ROS leak; tipping-off is a crime) | Low / Very high | RLS as a second wall; restricted-area tests; reviewer agent on every PR; founder reviews `cases/`; external pen test before launch |
| Liability for a missed report or wrong rating | Low / High | The broker approves and files; reviewed, dated templates; liability cap; E&O insurance; never auto-file |
| Processor rule vs 10-year retention (Law 25.326 Art. 25) | Medium / Medium | Export at exit; archive plan; express two-year hold |
| **UIF relief for brokers** (as accountants and lawyers got) | Medium / Medium | Monthly reports and client files stay. Deadlines as data. Sell the inspection pack, not only deadlines |
| **Deregulation** ends the licence and the colegio channel | Medium / Medium | The Law covers anyone who brokers, so the duty likely stays. Lean on accountants and self-serve |
| Card declines or surprise taxes cause churn | Medium / Medium | Show the tax-included price; annual plans; dLocal Go as a peso route |
| Withholding or FX friction on institutional deals | Medium / Low-medium | Card or reseller route; treaty check; local SAS only when deals justify it |
| Founder abroad; support in Spanish in Argentine hours | Medium / Medium | Help centre; fixed WhatsApp hours; part-time Argentine contractor from month 4; accountants as first-line support |
| Agent usage limits delay the 3-week build | Medium / Low | Stagger streams; API overflow budget; freeze scope; 9 Dec fallback |
| Pen tester not free on 16-19 Nov | Medium / Low | Book in week 1; second quote; 9 Dec fallback |
| Pilots stall in December | Medium / Medium | Recruit in October; start on the October and November RSMs |
| Peso crisis or new FX controls | Medium / Medium | USD pricing; card route; small fixed costs |
| **Small market caps the upside** | High / Medium | Adjacent sectors and Uruguay; keep costs near USD 60,000 a year |

---

## 13. Milestones and kill criteria

| When | Target (base) | Stop or pivot if |
|---|---|---|
| **Sun 1 Nov 2026** (day 21) | MVP code complete; 20 broker and 5 accountant interviews; at least 8 would pay USD 10 a month or more; AMLify's price known; XSDs in hand | **Fewer than 4 of 25 would pay anything:** stop, or pivot to an accountant-only tool. **AMLify sells a self-serve sole-broker plan under USD 15:** stop or pivot. Otherwise release the legal and security budget |
| Fri 6 Nov | MVP definition of done (§7) | Slip of more than a week: cut scope to the concierge offer |
| Thu 26 Nov | Pen test passed; templates signed off; 10 pilots using it weekly | Pilots not using it weekly: fix onboarding; launch 9 Dec |
| **Fri 11 Dec** | 10 paying accounts at the pilot price | **Fewer than 3 paying from 30 conversations: kill or pivot** |
| Tue 15 Dec | At least 3 pilots filed a real RSM with our files | None filed: the export is not trusted; fix before the RSA push |
| Sun 10 Jan 2027 (day 90) | 25 paying; 5 accountant partners; 1 colegio benefit listing | Fewer than 10 paying: cut marketing; founder-only |
| **Wed 31 Mar 2027** (end of RSA window) | 41 paying; 4 accountant seats | **Fewer than 15 paying: kill** |
| Oct 2027 (month 12) | 82 accounts; ARR at least USD 25,000; churn at most 2.5% a month | **Fewer than 35 accounts and no colegio in the pipeline:** kill, or sell the code and customers to a CRM vendor or BDO |
| Nov 2027-Jan 2028 | First-year renewal at least 70% (my target) | **Renewal below 50%:** it is a one-off product; run it as side income |
| Apr 2028 (ITAER deadline) | 140 accounts; 1 colegio deal signed | Fewer than 75 accounts: stop paid marketing; side business |
| Oct 2028 (month 24) | ARR at least USD 70,000; near cash break-even; Uruguay prepared | ARR under USD 30,000: sell or wind down |
| Any time | | The UIF exempts small brokers or suspends Res. 43 duties; or AMLify signs COFECI with a price below USD 15 a month: re-plan within 30 days |

---

## 14. Open questions to settle first

1. **AMLify:** what does it charge? Does it serve sole brokers self-serve? Does it output SROMasivo XML? Has it signed any colegio outside Buenos Aires city, or COFECI? (Demo request through the [CUCICBA benefit](https://colegioinmobiliario.org.ar/novedades/245).)
2. **The broker RSM XSDs:** what do they contain (sale and lease), which version is current, and must a broker file a "nil" RSM in a month with no deals? (unverified)
3. **The founder's country:** it sets home VAT on exported services, the tax treaty with Argentina (withholding on institutional deals) and Stripe's fee table.
4. **What happened in 2026:** did brokers file the ITAER (April) and REI (August)? Was CUCICBA's extension request answered? How many brokers file RSMs today? An access-to-information request to the UIF could answer the counts. (unverified)
5. **How brokers file the ITAER:** an SRO+ upload, e-mail or something else? (unverified)
6. **Accountants and REIs:** what do they charge brokers for the RSA, ITAER and REI, and would they resell a tool? (Ask 5 in the interviews.)
7. **Colegios:** do they need a local invoice, a board vote or a tender? (unverified)
8. **Deregulation:** was the Sturzenegger package or the Bongiovanni bill filed or passed? Would the UIF extend Res. 43 to unlicensed brokers? (unverified)
9. **Cards:** how do issuers treat a small foreign SaaS not on ARCA's list? Does Paddle add VAT on top? (Test with 3-5 pilot cards.)
10. **Lawyer questions:** is an OTP e-signature with stored evidence enough for the PEP statement? Must the broker register its AML database with the AAIP? May public colegio registers be used for cold e-mail?
11. **Legal reading for the product:** do separate leases of one client add up toward 300 SMVM? Which wage reference applies to which month? What is the base for the 30% resale alert? (unverified)
12. **Enforcement now:** are brokers being charged under the new regime? Fast-track cases are not published. (unverified)

---

## 15. Next steps this week (Mon 12-Fri 16 Oct 2026)

1. **Request an AMLify demo** through the CUCICBA member-benefit page. Ask the price for a sole broker and an agency, and whether it produces SROMasivo XML.
2. **Book 25 calls:** 20 brokers (10 in Córdoba, Rosario, Mendoza and Buenos Aires province, found through colegio registers and LinkedIn) and 5 accountants (through CPCE contacts and Blog del Contador). Script: what they filed in April and August 2026, who did it, what it cost, what they use now, and whether they would pay USD 10-15 a month.
3. **Ask 2-3 of those brokers to export the SROMasivo schemas** ("Exportar esquemas") and share anonymised SRO+ screenshots of the RSM and RSA forms.
4. **Start the build:** repo, `CLAUDE.md` with the glossary and rules, backlog from the 01 duty table; Render (Frankfurt), R2 (EU), Resend and Stripe Billing in USD on the foreign company; stream F with two agents; fixtures agent on the synthetic agency.
5. **Engage an Argentine AML lawyer and an AML expert** on a fixed fee, with a small first stage (statement texts and manual outline) and the rest released after the 1 Nov gate.
6. **Book the penetration test** for 16-19 Nov, with a second firm quoted.
7. **Put up the landing page** with the free "¿Estoy obligado?" checker and a founding-pilot waitlist (50% off the first year).
8. **Write down the 1 Nov gate** (§13) before the calls start, so the result is judged against it.
