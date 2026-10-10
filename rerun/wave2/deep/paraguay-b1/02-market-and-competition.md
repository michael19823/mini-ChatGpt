# Paraguay AML kit for vehicle dealers: market size, buyers and competition (deep dive 02)

Date: 10 Oct 2026. Builds on [the B1 report](../reports/paraguay-b1.md). Scope: market size, buyers, competition, channels and regional expansion. Law, product, go-to-market and payments are covered by the other section files. The sibling deep dive on real-estate agents ([paraguay-b2, file 02](../paraguay-b2/02-market-and-competition.md)) deals with the same regulator and the same SIRO system. Where I reuse one of its findings without re-checking it, I say so.

**Money.** USD 1 = about Gs 6,000. Secondary sources put the rate at Gs 5,904 in Sep 2026 and Gs 6,048 in Jul 2026 ([hacecuentas](https://hacecuentas.com/py/dolar-hoy-paraguay)). The July 2026 minimum wage of Gs 3,044,000 is "about USD 500" ([Infobae](https://www.infobae.com/america/america-latina/2026/06/18/el-presidente-de-paraguay-reajusto-un-5-el-salario-minimo-supero-a-la-inflacion-y-alcanzara-los-usd-500/)), which is consistent. The rate itself is (unverified) against the central bank.

## Summary

- **Hard count: 1,719 vehicle firms are on SEPRELAD's register.** I downloaded the register's Excel export on 10 Oct 2026 and counted it myself. It lists 653 companies and 1,066 individuals (62%). Central has 527, Alto Paraná 365, Asunción 320 and Caaguazú 168. About 200 new vehicle firms register each year ([SIRO lookup](https://www.seprelad.gov.py/siro/consultaExterna/consultaExternaSoAe.xhtml)).
- **Only about half of them are really in the system.** In 2025:
  - 845 paid the yearly SIRO fee;
  - 453 filed operation reports;
  - 331 filed the annual form;
  - 272 filed an internal-control report;
  - 160 sent an external audit report;
  - 19 filed a suspicious-operation report.

  Sources: [SIRO statistics](https://www.seprelad.gov.py/siro/estadisticaExterna/estadistica.xhtml), my sums; [Memoria 2025](https://www.seprelad.gov.py/wp-content/uploads/2026/02/Memoria-Anual-de-Gestion-Ano-2025.pdf).
- **The working market is about 845 paying firms.** About 30 of them are large importers and distributors ([SEPRELAD vehicle risk study](https://www.seprelad.gov.py/documentos/gu-a-de-riesgos-de-la-ft-del-sector-automotor.pdf)). Another 875 registered firms do not pay, and about 200 new ones join each year. The wider pool of taxpayers trading vehicles was 4,695 in 2017-2019 (same study).
- **The pain shows in SEPRELAD's own numbers.**
  - 454 vehicle firms got a warning letter in 2024 ([Memoria 2024](https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf)).
  - After the warnings, only 32% had caught up on their annual reports (Memoria 2025).
  - The firms that file operation reports send about 344 operations a year each. Small firms key them into SIRO one by one (Memoria 2025).
  - In 2025 SEPRELAD fined one vehicle firm a "significant" amount (Memoria 2025).
- **What buyers pay today is low and known.**
  - SIRO fee: Gs 331,000 (about USD 55) for 2026 (SEPRELAD notice, Res 56/2026).
  - An online AML course aimed at vehicle traders costs Gs 800,000 ([Best Practices](https://bestpractices.com.py/curso-taller-administracion-de-riesgos-ldft/)).
  - A person check that includes PEP status costs Gs 23,000 ([Criterion](https://www.criterion.com.py/index.php?pag=comprar)).
  - E-invoicing and POS software starts at Gs 110,000 a month ([FactPy](https://factpy.com/)).
  - Audit fees and freelance document packs are not published.
- **Competition is partial.**
  - No Paraguayan product runs the whole Res 196 job.
  - At the top end, Grupo Condor uses Uruguay's Devsys Cumplo360 for screening and KYC ([Devsys](https://www.devsys.com.uy/clientes.html)). Grupo Condor owns Condor SACI, a Mercedes-Benz distributor that is on the vehicle register.
  - Pirani, a Colombian risk tool, has a free plan and a SEPRELAD page, but nothing for SIRO filings ([Pirani](https://www.piranirisk.com/es/hub-regulatorio/seprelad-prevencion-lavado-dinero-paraguay-siro)).
  - The rest of the market is services: freelance document packs, 183 registered AML auditors and courses.
- **Best channel: the auditors.** 183 auditors are registered: 46 firms plus 93 individuals, so about 138 audit providers (my count). At least one, Cáceres & Schneider, markets the yearly report to "playas de autos" by name ([Cáceres & Schneider](https://consultoria.com.py/prevencion-del-lavado-de-dinero-seprelad/)).
- **Revenue on vehicles alone is small: about USD 50,000-90,000 a year by year 3** (my estimate). The idea works only as one module of a single SEPRELAD engine that also serves real estate (2,233 registered) and the smaller sectors.
- **Regional:**
  - Ecuador is the best second market. The UAFE supervises 542 car dealers there ([UAFE 2025 report](https://www.uafe.gob.ec/wp-content/uploads/downloads/2026/rendicion_cuentas/Informe_de_RC_publicado_en_pag_web.pdf), Table 6).
  - Car dealers are also obliged in Argentina, Colombia, Peru and Mexico. Mexico widened its rule in Nov 2025. Argentina and Mexico are big but already have local vendors.

## Buyer segments

**How I counted.** SEPRELAD runs two public tools, and I queried both on 10 Oct 2026.
- **The register lookup** lists every obliged firm with its tax number (RUC), name, sector, registration date and department. Its "Exportar a Excel" button returned **9,795 rows** ([SIRO lookup](https://www.seprelad.gov.py/siro/consultaExterna/consultaExternaSoAe.xhtml)). SEPRELAD notes that being listed does not prove compliance. A RUC starting with "80" belongs to a company; the others are individuals. I used that to split the two.
- **The statistics portal** gives yearly counts by sector: registrations, fee payers, reports and sanctions ([SIRO statistics](https://www.seprelad.gov.py/siro/estadisticaExterna/estadistica.xhtml)).
- The sibling B2 dive ran the same export on the same day and got the same vehicle counts (1,719; 653 companies). Two independent counts agree.

| Segment | Count | Source | Year | Confidence |
|---|---|---|---|---|
| **Vehicle firms on SEPRELAD's active register (my count)** | **1,719**: 653 companies (371 S.A., 123 S.R.L., 88 E.A.S., 71 other), 1,066 individuals. Central 527, Alto Paraná 365, Asunción 320, Caaguazú 168, Itapúa 118, Guairá 87, Canindeyú 39, San Pedro 25, others 70 | my count of the [SIRO lookup](https://www.seprelad.gov.py/siro/consultaExterna/consultaExternaSoAe.xhtml) export | 10 Oct 2026 | high. The register keeps some firms that no longer trade. |
| Vehicle firms by registration date (register) | 2015-2019: 179; 2020: 458; 2021: 38; 2022: 197; 2023: 263; 2024: 195; 2025: 212; 2026 to Oct: 177 | same, my count | 2026 | high. Many big distributors carry the date 1 Jul 2020, the start of Res 196. |
| **Vehicle firms paying the yearly SIRO fee ("canon")** | **845** in 2025 (782 in 2023, 838 in 2024, 658 so far in 2026) | [SIRO statistics](https://www.seprelad.gov.py/siro/estadisticaExterna/estadistica.xhtml), "Aranceles", AUTOMOTORES | 2025 | high. The best count of firms that are active in the system. |
| Vehicle firms that filed operation reports (RO) | 453 | [Memoria 2025](https://www.seprelad.gov.py/wp-content/uploads/2026/02/Memoria-Anual-de-Gestion-Ano-2025.pdf) | 2025 | high |
| Operations reported by vehicle firms | 156,019: 82,591 sales, 51,698 imports, 21,730 purchases. That is about 344 per reporting firm, or about 86 per quarter | same | 2025 | high (the per-firm figures are my arithmetic) |
| Vehicle firms that filed the annual form (due 31 May) | 331 (357 in 2024) | Memoria 2025; [Memoria 2024](https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf) | 2025 | high |
| Internal-control reports from vehicle firms | 272 (246 in 2023, 287 in 2024) | SIRO statistics, "Cumplimiento" | 2025 | high |
| **External AML audit reports from vehicle firms** | **160** (178 in 2023, 177 in 2024) | SIRO statistics, "Cumplimiento" | 2025 | high. These are reports, not firms, but close to one per firm. |
| Negative reports from vehicle firms (no suspicious operation in the quarter) | 2,490 (1,291 in 2023, 2,367 in 2024, 1,792 so far in 2026) | SIRO statistics | 2025 | high. At 4 a year, that is about 620 firms filing (my arithmetic). |
| Vehicle firms that filed at least one suspicious-operation report (ROS) | 19 (23 in 2024) | Memoria 2025 | 2025 | high |
| Vehicle firms warned for missed duties | 454 (the sanctions table shows 456 warning letters) | Memoria 2024; SIRO statistics, "Sanciones" | 2024 | high |
| Vehicle firms deregistered | 4 (2024), 12 (2025) | Memorias 2024 and 2025 | 2024-25 | high. Few firms deregister, so the register overstates active firms. |
| Vehicle firms on the old register | 1,642 | [GAFILAT MER 2022](https://www.pj.gov.py/descargar/ID1-148_informe_de_evaluacion_mutua_de_paraguay_2022.pdf), Table 55 | 2021 | high |
| Vehicle firms on the register at end-2020 | 1,610: Asunción 35%, Central 27%, Alto Paraná 20%; 64% individuals | [SEPRELAD vehicle risk study (ESR)](https://www.seprelad.gov.py/documentos/gu-a-de-riesgos-de-la-ft-del-sector-automotor.pdf), Cuadros 11-12 | 2020 | high |
| Used-car lots counted by SEPRELAD | 1,142 (fewer than half filed reports; 704 warned) | [Última Hora, 2 Nov 2019](https://www.ultimahora.com/seprelad-el-50-playa-autos-eluden-el-control-antilavado-n2852685.html) | 2019 | medium |
| **All taxpayers trading vehicles (wider universe)** | **4,695**: 2,163 with vehicle trade as their main activity (1,102 used-car retail, 905 used-car wholesale, 100 new-car retail, 56 new-car wholesale) and 2,532 as a secondary activity | ESR, Cuadro 3, from tax-office data | 2017-2019 | high for that date; today's figure is (unverified) |
| Large importers | "no more than 30"; 17 imported over USD 10m and 5 over USD 24m in 2020 | ESR, Cuadros 4-5 | 2020 | high |
| SEPRELAD's risk rating of vehicle firms | 29% high, 47% medium, 24% low | ESR, pp. 17-18 | 2021 | high |
| Used vehicles imported | 73,927 units (paid Gs 575,684 million in customs duties) | [Última Hora](https://www.ultimahora.com/autos-usados-pagaron-usd-100-millones-aduanas-el-2018-n2830111) (search snippet) | 2018 | medium |
| New light vehicles imported | 2,649 in Jan 2025; +16% in Q1 2025 | [La Nación, citing CADAM](https://www.lanacion.com.py/negocios/2025/04/12/importacion-de-vehiculos-crecio-16-en-el-primer-trimestre/) (search snippet) | 2025 | medium |
| **Registered external AML auditors (channel, not buyers)** | **183** (182 current): 90 work in 46 firms, 93 alone. That is about 138 audit providers. 104 registrations date from 2025 and 70 from 2026; each lasts two years | my count of the "Auditores externos" export from the same lookup | 10 Oct 2026 | high |
| Other firms under the same SEPRELAD regime (same engine) | Real estate 2,233; jewellers 189; virtual assets 45; remitters 35; pawnshops 31; art and antiques 6. Non-profits (3,435) and notaries (1,406) follow other rulebooks | my count of the register export | 10 Oct 2026 | high |

**Reading the numbers**
- **The funnel.** About 4,700 taxpayers trade vehicles. 1,719 are registered with SEPRELAD. 845 pay the fee. About 450-620 file routine reports. 160-330 also do the annual form or the audit. About 20 ever report a suspicious operation.
- **The core buyers are the 845 fee-paying firms.** They are inside the system, so they face the deadlines and the warning letters.
- **The warmest leads are the 300-500 paying firms that miss the harder duties.** 453 file operation reports, but only 331 file the annual form and 160 send an audit (my inference from the gap).
- **About 160 firms already buy an audit every year.** They spend money on compliance, and their auditor wants a tidy file. They are the first customers to target.
- **Three sizes of buyer.**
  - About 30 large distributors and importers, many in CADAM. Some already use regional software (see Competition).
  - About 620 smaller companies (S.A., S.R.L., E.A.S.).
  - 1,066 individuals running owner-managed lots. In Caaguazú, 142 of 168 registered firms are individuals (my count).
- **New entrants.** About 200 a year register (my count). Each needs a manual, a compliance officer and a SIRO account from scratch.

## Buyer profile and pain

**Who the buyers are**
- **Small, cash-heavy and split into two worlds.**
  - SEPRELAD's own risk study calls the sector "complex and heterogeneous". New-car and used-car traders sit in separate associations, and SEPRELAD trains them separately ([ESR](https://www.seprelad.gov.py/documentos/gu-a-de-riesgos-de-la-ft-del-sector-automotor.pdf), pp. 25-26).
  - Used cars come mainly from Chile and Japan. Traders often carry declared cash to the Iquique free zone and pay in cash there.
  - Cash is the main means of payment in sales. The currencies are guaraní and US dollar (same study, p. 24).
- **Mostly individuals outside Asunción.** 62% of registered firms are individuals. Most sit in Central, Alto Paraná (Ciudad del Este) and Caaguazú (my count of the register).
- **Weakly organised.** In 2019 the used-car importers' centre CIVU had 110 member lots out of "1,000 and something" ([Última Hora, 2019](https://www.ultimahora.com/seprelad-el-50-playa-autos-eluden-el-control-antilavado-n2852685.html)). Civemup, a chamber for used vehicles and machinery, launched in 2018 with about 600 members ([IP Paraguay, 2018](https://www.ip.gov.py/ip/2018/04/05/presentan-camara-de-importadores-de-vehiculos-y-maquinarias-usadas-del-paraguay/)). New-car distributors (more than 90 brands) sit in CADAM ([Ferrere](https://ferrere.com/es/novedades/nuevo-reglamento-de-prevencion-de-lavado-de-activos-y-financiamiento-del-terrorismo-para-personas-fisicas-o-juridicas-involucrad/)).
- **High-risk in the regulator's eyes.** SEPRELAD rated 29% of vehicle firms high risk and 47% medium ([ESR](https://www.seprelad.gov.py/documentos/gu-a-de-riesgos-de-la-ft-del-sector-automotor.pdf)). It picked 35 vehicle firms for on-site inspection in 2025 using a risk matrix (Memoria 2025).

**How they comply today**
- **The owner is usually the compliance officer.** Res 196 allows this in a one-owner business ([Ferrere](https://ferrere.com/es/novedades/nuevo-reglamento-de-prevencion-de-lavado-de-activos-y-financiamiento-del-terrorismo-para-personas-fisicas-o-juridicas-involucrad/)). Once registered, the compliance officer gets the SIRO login (Memoria 2025).
- **Operation reports are typed by hand.** Memoria 2025 says small firms "load operation by operation" through web forms. Firms with "hundreds or thousands" of operations a month can send JSON files instead. Whether the vehicle sector already has a JSON format is (unverified). The sibling law file did not find it either ([01-law](01-law-and-requirements.md)).
- **Documents come from freelancers and courses.**
  - A Clasipar ad from Oct 2021 offers to "structure" the compliance-officer role under Res 196/20 for vehicle importers, buyers, sellers and consignors. It lists an AML manual, job descriptions, risk management, client ID forms, a client risk-rating sheet, credit forms, a note to SEPRELAD, an annual training plan, an annual work plan, and help with entering operations on the website ([Clasipar ad 1924578](https://clasipar.paraguay.com/motor/otros-rodados/servicio-de-oficial-de-cumplimiento-seprelad-1924578)).
  - Best Practices sells an online course that names "Compra Venta de Vehículos" among its targets. It covers the client risk matrix, the self-assessment and help with the manual ([Best Practices](https://bestpractices.com.py/curso-taller-administracion-de-riesgos-ldft/)).
- **Auditors sell the yearly audit report.** Cáceres & Schneider (SEPRELAD registration 47/23) lists "Automotoras (concesionarias/playas de autos)" and also supports putting the manual into practice ([Cáceres & Schneider](https://consultoria.com.py/prevencion-del-lavado-de-dinero-seprelad/)).
- **SEPRELAD trains them for free.**
  - About 100 vehicle-sector compliance officers joined a virtual session on filling in the annual form in SIRO on 7 Apr 2026. The recording is on YouTube ([SEPRELAD capacitaciones](https://www.seprelad.gov.py/?cat=35)).
  - 51 vehicle-sector people attended feedback sessions on the fixes ordered after inspections (Memoria 2025).
- **A few large firms use real software.** Grupo Condor's compliance officer gives a testimonial for Devsys Cumplo360 ([Devsys](https://www.devsys.com.uy/clientes.html)). Condor SACI (RUC 80002514-8) is the Mercedes-Benz distributor ([La Nación, 2020](https://www.lanacion.com.py/negocios/2020/10/08/mercedes-benz-presento-la-nueva-generacion-de-sprinter/)), and it is on the vehicle register (my count).

**Software they already use**
- **E-invoicing.**
  - New legal entities have had to issue only electronic invoices since 1 Apr 2025.
  - Under RG 52/2026, about 3,000 more taxpayers join in six groups between Jun 2026 and Sep 2027 ([DNIT](https://www.dnit.gov.py/web/portal-institucional/w/dnit-designa-nuevos-facturadores-electr%C3%B3nicos); [impuestospy](https://impuestospy.com/impuestos/resolucion-general-dnit-n-52-2026/)).
  - Most individual lot owners are probably still on printed invoices (inference).
  - A POS with e-invoicing costs from Gs 110,000 a month ([FactPy](https://factpy.com/)).
- **Credit bureaus.** Lots that sell on instalments check buyers. Criterion sells an online report for Gs 23,000 that includes criminal and court records, bank bans, defaults and PEP status ([Criterion](https://www.criterion.com.py/index.php?pag=comprar)).
- **Dealer management software.** Searches for Paraguayan dealer or lot software found none, and none that produces a SEPRELAD report (3 searches; unverified beyond that).

**Pain, in order of evidence**
1. **Warning letters for missed deadlines.** 454 vehicle firms were warned in 2024 for missing negative reports, operation reports, the annual form, internal-control reports or audits ([Memoria 2024](https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf)). After the warnings, only 32% had caught up on annual reports (Memoria 2025).
2. **Re-keying operations.** About 86 operations a quarter per reporting firm, typed into SIRO one at a time (Memoria 2025; my arithmetic). Each operation has many fields: buyer, ID, payment method, chassis number, and customs data for imports ([01-law](01-law-and-requirements.md)).
3. **The audit and the internal report are mostly missing.** Of 845 paying firms, 160 sent an audit (19%) and 272 an internal report (32%) (SIRO statistics).
4. **Rules and forms keep changing.**
   - SEPRELAD has finished a new annual form and a new risk matrix for the vehicle sector, effective for the 2026 period (Memoria 2025).
   - It is building a SIRO risk-matrix module, starting with vehicles (Memoria 2025).
   - The registration form now asks for the beneficial owner and the nationality of the managing partner (Memoria 2025).
5. **Customers resist the KYC form.** In 2019 CIVU's vice-president said "many sales were lost" because buyers refused to fill in the source-of-funds form, not because they had something to hide ([Última Hora, 2019](https://www.ultimahora.com/seprelad-el-50-playa-autos-eluden-el-control-antilavado-n2852685.html)). A short mobile form the buyer fills in himself speaks to this.
6. **Sanctions are starting.**
   - In 2025 one vehicle firm received a "significant" fine (Memoria 2025).
   - A sanction case against a vehicle firm closed "in February of this year". From the report's date this means Feb 2026, but the wording is ambiguous (same source).
   - Unregistered firms cannot use banks ([GAFILAT MER](https://www.pj.gov.py/descargar/ID1-148_informe_de_evaluacion_mutua_de_paraguay_2022.pdf), para. 445).
- **No forum evidence.** I found no public forum thread in which dealers complain about SEPRELAD. Facebook groups could not be searched (unverified). The evidence comes from the regulator's numbers and a 2019 press quote.

## Willingness to pay

**What vehicle firms pay today**

| Item | Price | Source |
|---|---|---|
| SIRO yearly fee ("canon"), vehicle sector | **Gs 331,000** (about USD 55) for 2026. It was Gs 321,000 in 2025. Late payment adds 2% a month | SEPRELAD notice of Res 56/2026, with an amounts table for "Escribanos, Inmobiliarias, Automotores..." ([SEPRELAD, 9 Jun 2026](https://www.seprelad.gov.py/?p=4035); the amounts table is an image in SEPRELAD's comunicado); [Res 48/2025](https://www.seprelad.gov.py/userfiles/files/resoluciones/resolucion-n48-2025-canon-anual-2025.pdf) |
| Canon actually collected | Gs 282.3m from 845 vehicle firms in 2025, about Gs 334,000 each | [SIRO statistics](https://www.seprelad.gov.py/siro/estadisticaExterna/estadistica.xhtml), "Aranceles", my division |
| One-off SIRO registration fee | about Gs 322,000 (Gs 74.5m from 231 registrants in 2025) | same |
| Online AML course for "other obliged firms", vehicle traders named | Gs 800,000 a person; Gs 600,000 each for 2 or more | [Best Practices](https://bestpractices.com.py/curso-taller-administracion-de-riesgos-ldft/) |
| Online SEPRELAD course for accountants (6 hours) | Gs 150,000 | [Gestión Contable](https://gestioncontableparaguay.com/courses/curso-seprelad-6-hs-de-estudio/) (from the B2 dive; not re-checked) |
| Compliance-officer diploma (120 hours, 40 AML training points) | price not shown | [FOTRIEM](https://www.fotriem.edu.py/diplomado-en-prevencion-de-lavado-de-activos-y-financiacion-del-terrorismo-ft-fp/) |
| Person check with PEP, court records and defaults | Gs 23,000 per report | [Criterion](https://www.criterion.com.py/index.php?pag=comprar) |
| E-invoicing POS or API | from Gs 110,000 a month | [FactPy](https://factpy.com/) |
| External AML audit by a registered auditor | not published; "request a quote" | [Cáceres & Schneider](https://consultoria.com.py/caceres-schneider-informe-de-cumplimiento-seprelad-plazos-para-entrega/) (price unverified) |
| Freelance compliance-document pack | not published | [Clasipar ad](https://clasipar.paraguay.com/motor/otros-rodados/servicio-de-oficial-de-cumplimiento-seprelad-1924578) |
| Regional list-search tool | from USD 10 plus tax, prepaid | [HADA](https://hada.com.uy/) (from the B2 dive; not re-checked) |

**What they risk**
- **A warning letter** is the usual outcome: 454 in 2024 (Memoria 2024).
- **A fine** is now possible: one "significant" fine in 2025 (Memoria 2025). The legal ceiling is 5,000 minimum wages for a firm and 500 for a person ([01-law](01-law-and-requirements.md); Law 1015 Art. 24).
- **Bank access.** Firms that are not registered cannot use the financial system ([GAFILAT MER](https://www.pj.gov.py/descargar/ID1-148_informe_de_evaluacion_mutua_de_paraguay_2022.pdf), para. 445).

**What this says about price**
- **The anchors are low.** The state fee is about USD 55 a year, a course USD 25-135, and e-invoicing about USD 18 a month. A single lot will not pay much more than its e-invoicing software (inference).
- **Small lot or individual:** Gs 90,000-150,000 a month (USD 15-25), or about Gs 1.0m-1.5m a year prepaid. That is less than one course a year and about the price of e-invoicing (my estimate).
- **Company that buys an audit, with more volume:** Gs 180,000-300,000 a month (USD 30-50). The case for paying is operation-report preparation and an audit-ready file (my estimate).
- **Large distributors and importers (about 30):** USD 100-200 a month for several users, branches and higher volume. Grupo Condor already pays for Devsys, so the top end does buy software (Devsys price not published).
- **Auditors and accountants:** a practice plan of about USD 100-150 a month for 10-20 client files, or a per-client price the auditor passes on (my estimate; this matches the B2 dive).
- **Optional one-off setup:** Gs 600,000-900,000 (USD 100-150) for the guided manual, code of ethics, risk self-assessment and officer appointment. This is priced below the Gs 800,000 course (my estimate).

**Revenue sanity check (vehicles only, year 3, my estimate)**

| Group | Firms | Share that buys | Price per year | Revenue |
|---|---|---|---|---|
| Small and mid paying firms | about 815 | 15-25% | USD 300 | USD 37,000-61,000 |
| Large distributors and importers | about 30 | 20-30% | USD 1,500 | USD 9,000-13,500 |
| Registered non-payers plus one year of new entrants | about 1,075 (875 + 200) | 3-5% | USD 250 | USD 8,000-13,500 |
| **Total** | | | | **about USD 54,000-88,000** |

The B1 re-assessment estimated USD 51,000 for vehicles ([B1 report](../reports/paraguay-b1.md)). The two are close. Vehicles alone do not make a business. The same engine must also serve real estate (B2 dive) and jewellers and pawnshops (A1 idea).

## Competitor table and discussion

**The duty list for a vehicle firm** (Res 196/2020 and SIRO rules; detail in [01-law](01-law-and-requirements.md)):
- SIRO registration and yearly data confirmation;
- a compliance officer;
- an AML manual and a code of ethics;
- a risk self-assessment every 2 years;
- KYC with a simplified route under 15 or 20 minimum wages;
- PEP and UN list checks;
- a register of all operations;
- a quarterly operation report (RO), due 11-20 Jan, Apr, Jul and Oct;
- a suspicious-operation report (ROS) within 24 hours;
- a quarterly negative report (RN);
- the annual form by 31 May;
- an internal-control report within 90 days of year end;
- an external audit report within 180 days;
- training;
- the canon by 30 June;
- 5-year records.

| Product | Country | What it covers against the duty list | Price | Customers | Verdict |
|---|---|---|---|---|---|
| **SEPRELAD SIRO** | PY (state) | Registration, data update, RO (one-by-one web form, or JSON for large filers), ROS, RN, annual form, upload of audit and internal reports, canon receipts. A risk-matrix module for vehicles is planned, prefilled from RO data. It keeps no KYC file, list-check log, manual, training record or reminders | Free to use; the firm pays the Gs 331,000 canon | All 1,719 registered vehicle firms | The place where filings go, not the record-keeping tool. The risk-matrix module will take over part of any "risk assessment" feature. ([Memoria 2025](https://www.seprelad.gov.py/wp-content/uploads/2026/02/Memoria-Anual-de-Gestion-Ano-2025.pdf)) |
| **SEPRELAD free guidance** | PY (state) | Vehicle risk study, annual-form instructions, free webinars with recordings | Free | All | An input to the product. Lowers the value of a paid document pack. ([ESR](https://www.seprelad.gov.py/documentos/gu-a-de-riesgos-de-la-ft-del-sector-automotor.pdf); [FA instructions](https://www.seprelad.gov.py/userfiles/files/resoluciones/06-22-instructivo-formulario-anual-automotores.pdf); [trainings](https://www.seprelad.gov.py/?cat=35)) |
| **Devsys Cumplo360 Cloud** | Uruguay | List checks, KYC records, ongoing screening, client risk scoring, transaction monitoring. No SEPRELAD filings, RO data, Res 196 templates or deadlines are claimed | Not published | Paraguayan testimonials: **Grupo Condor** (vehicles), Fortaleza Inmuebles, the Asunción stock exchange | **The real incumbent at the top end.** It is built for firms with a compliance team, not for one-owner lots. ([Devsys clients](https://www.devsys.com.uy/clientes.html)) |
| **Pirani AML** | Colombia | Risk matrix, customer due diligence and segmentation, list checks, "traceability" of reports. Its SEPRELAD page mentions vehicle trading only in a list. No SIRO integration, no Paraguayan client named, no Paraguay country page | Free account with no card needed; paid plans not shown on that page | None named in Paraguay | A generic risk tool. A "free risk matrix" is therefore not a selling point. ([Pirani SEPRELAD page](https://www.piranirisk.com/es/hub-regulatorio/seprelad-prevencion-lavado-dinero-paraguay-siro)) |
| **HADA (GNS Software)** | Uruguay | List search with PEP lists, alerts, risk matrix, due-diligence levels, document manager, Uruguayan ROS | From USD 10 prepaid | Uruguayan firms | A price floor for list search. Not set up for Paraguay. ([HADA](https://hada.com.uy/); from the B2 dive) |
| **Compliance Paraguay** | PY | A database of 9,000+ PEPs. It names car dealers as a target. Screening only | Not published | Not published | A possible data partner or feature rival for PEP checks. ([La Nación, Aug 2024](https://www.lanacion.com.py/negocios/2024/08/13/consultora-presenta-herramienta-que-identifica-a-personas-expuestas-politicamente/)) |
| **Criterion S.A.** (credit bureau) | PY | Person report with PEP status, court and criminal records, bank bans and defaults. Free credit-risk alerts. No AML workflow | Gs 23,000 a report | Lenders and businesses | A cheap KYC input. Could add AML features or become a partner. ([Criterion](https://www.criterion.com.py/index.php?pag=comprar)) |
| **Global KYC data** (theKYB, Shufti Pro, Didit, OpenSanctions) | Global | PEP and sanctions data, ID checks. OpenSanctions lists 219 Paraguay-linked PEPs and uses no Paraguayan official source | Per check or quote. OpenSanctions is free for non-commercial use only | Fintechs | A back-end data feed, not a workflow. ([theKYB](https://thekyb.com/our-data/paraguay/); [Shufti Pro](https://shuftipro.com/supported-countries/paraguay/); [OpenSanctions PY](https://www.opensanctions.org/countries/py/)) |
| **Registered AML auditors** (183 people, about 138 providers; Big Four, Baker Tilly, Amaral, Russell Bedford, Cáceres & Schneider and many individuals) | PY | The yearly audit report. Some also help put the manual into practice | Not published | About 160 vehicle audits in 2025 | Not a software rival. Messy client files cost them time. **The best channel.** ([auditor export](https://www.seprelad.gov.py/siro/consultaExterna/consultaExternaSoAe.xhtml); [Cáceres & Schneider](https://consultoria.com.py/prevencion-del-lavado-de-dinero-seprelad/)) |
| **Freelance compliance-officer packs** | PY | A one-off set of documents for Res 196 (listed above) | Not stated | Unknown | Static Word files with no upkeep. Shows that a document pack alone sells informally. ([Clasipar](https://clasipar.paraguay.com/motor/otros-rodados/servicio-de-oficial-de-cumplimiento-seprelad-1924578)) |
| **Training providers** (Best Practices, FOTRIEM/BNF, Gestión Contable, PwC Academy) | PY | Explain the duties; do not run them | Gs 150,000-800,000 | Compliance officers, accountants | A channel and a price anchor. ([Best Practices](https://bestpractices.com.py/curso-taller-administracion-de-riesgos-ldft/); [FOTRIEM](https://www.fotriem.edu.py/diplomado-en-prevencion-de-lavado-de-activos-y-financiacion-del-terrorismo-ft-fp/)) |
| **Law firms** (Ferrere, Vouga, Amaral) | PY | Programme design and legal updates | Not published | Larger firms | A source of content and referrals. ([Ferrere](https://ferrere.com/es/novedades/nuevo-reglamento-de-prevencion-de-lavado-de-activos-y-financiamiento-del-terrorismo-para-personas-fisicas-o-juridicas-involucrad/); [Vouga](https://www.vouga.com.py/en/la-seprelad-recuerda-plazos-y-obligaciones-de-reporte-a-los-sujetos-obligados/)) |
| **E-invoicing and POS vendors** (FactPy, FactAPI, Sifende, Kuentalo and others) | PY | Hold the sales data the RO needs. No AML features seen | From Gs 110,000 a month | Small businesses | Partners: their sales export can feed the RO. Possible entrants if they add an "RO export" (inference). ([FactPy](https://factpy.com/); [Sifende](https://www.sifende.com.py/)) |
| **Dealer management software** | PY | None found | - | - | No incumbent (3 searches; unverified beyond that). |
| **Argentine dealer AML tools** (for example AMLify, distributed by BDO Argentina) | Argentina | Digital client file, risk level, transaction profile, list checks, built for Argentina's UIF | Not published | Mostly Argentine real estate | Not present in Paraguay. Shows what a regional rival could adapt. ([AMLify](https://amlify.net/)) |

**Discussion**
- **Nobody runs the whole Res 196 job for a small lot.** About 20 competitor searches in this pass (Spanish and English), vendor-site checks (Devsys, Pirani, Criterion, FactPy, Cáceres & Schneider) and the earlier passes found no product that combines:
  - the sales and KYC log;
  - list checks with a log;
  - the Res 196 documents;
  - the deadline calendar;
  - RO preparation;
  - the annual-form figures;
  - an audit-ready export.
- **The top end is partly taken.** Grupo Condor uses Devsys. Other large distributors may use bank-grade tools too (unverified). So a product for dealers should start with the 800 small and mid firms, not the 30 big ones.
- **The free pieces are real.** SIRO takes the filings. SEPRELAD publishes the risk study, form instructions and trainings. Pirani has a free plan. Criterion sells PEP checks for Gs 23,000. A product must therefore sell the *running* of the file, not the documents or a risk matrix alone.
- **The main threat is SEPRELAD.** Its planned vehicle risk-matrix module, prefilled from RO data, would cover the self-assessment (Memoria 2025). It is not planning KYC files, document storage or reminders, as far as the report shows.
- **The service market is the real incumbent.** About 138 audit providers and an unknown number of freelance compliance officers do this work by hand. They are better treated as resellers than as rivals.

## Channels

| Channel | Size and reach | Why it matters | Source |
|---|---|---|---|
| **SEPRELAD-registered auditors** | 183 registrations, about 138 providers. 104 registrations date from 2025 and 70 from 2026. SEPRELAD recommended 71 new admissions from 101 applications (Memoria 2025, which dates this to 2024) | Every compliant firm must buy their yearly report. A practice plan with client logins and an audit export makes them resellers. Cáceres & Schneider already markets to "playas de autos" | my count of the [auditor export](https://www.seprelad.gov.py/siro/consultaExterna/consultaExternaSoAe.xhtml); [Memoria 2025](https://www.seprelad.gov.py/wp-content/uploads/2026/02/Memoria-Anual-de-Gestion-Ano-2025.pdf); [Cáceres & Schneider](https://consultoria.com.py/prevencion-del-lavado-de-dinero-seprelad/) |
| **The SEPRELAD register as a lead list** | 1,719 vehicle firms with name, RUC, department and registration date. About 200 new firms a year | Direct outreach to new registrants, who must set everything up. Handle with care: 62% are individuals, and the personal-data law 7593/2025 applies from about late 2027 | [SIRO lookup](https://www.seprelad.gov.py/siro/consultaExterna/consultaExternaSoAe.xhtml); [01-law](01-law-and-requirements.md) |
| **SEPRELAD training (CECAD)** | About 100 vehicle compliance officers at the annual-form webinar on 7 Apr 2026; 51 at the post-inspection feedback sessions | Shows when demand peaks: annual form in April-May, RO windows each quarter, canon and audit by 30 June. A vendor cannot sell at these, but can publish free guides timed to them | [SEPRELAD capacitaciones](https://www.seprelad.gov.py/?cat=35); Memoria 2025 |
| **CADAM** (new-car distributors' chamber) | 90+ brands. Runs the Expo Feria CADAM (2026 edition) and publishes import data. President Miguel Carrizosa per a press interview (date unverified) | Res 196 lets an association adopt a collective code of ethics, a natural joint project. Reaches the top 30-100 firms | [Ferrere](https://ferrere.com/es/novedades/nuevo-reglamento-de-prevencion-de-lavado-de-activos-y-financiamiento-del-terrorismo-para-personas-fisicas-o-juridicas-involucrad/); [InfoNegocios, Expo CADAM 2026](https://infonegocios.com.py/y-ademas/seguridad-seguros-acompana-la-expo-feria-cadam-2026-como-aseguradora-oficial-por-mas-de-dos-decadas-consecutivas); [Última Hora](https://www.ultimahora.com/cadam-autos-usados-tenemos-que-dejar-ser-el-basurero-del-mundo-n2829808) |
| **Used-car associations** (CIVU, Civemup) | CIVU had 110 member lots (2019). Civemup had about 600 members and aimed at "more than 3,700 importers" (2018). Current leadership not found | Endorsement and member discounts for the long tail of lots. Both are old figures (unverified today) | [Última Hora, 2019](https://www.ultimahora.com/seprelad-el-50-playa-autos-eluden-el-control-antilavado-n2852685.html); [IP Paraguay, 2018](https://www.ip.gov.py/ip/2018/04/05/presentan-camara-de-importadores-de-vehiculos-y-maquinarias-usadas-del-paraguay/) |
| **Accountants and their training sites** | Accountants keep the books of most small lots and often file for them (inference). Gestión Contable's SEPRELAD course is aimed at them | White-label or referral deals reach individuals in Caaguazú, Alto Paraná and Itapúa | [Gestión Contable](https://gestioncontableparaguay.com/courses/curso-seprelad-6-hs-de-estudio/) |
| **Compliance trainers** | Best Practices (names vehicle traders), FOTRIEM/BNF diploma (40 training points) | Co-marketing: the course plus three months of the tool | [Best Practices](https://bestpractices.com.py/curso-taller-administracion-de-riesgos-ldft/); [FOTRIEM](https://www.fotriem.edu.py/diplomado-en-prevencion-de-lavado-de-activos-y-financiacion-del-terrorismo-ft-fp/) |
| **E-invoicing vendors and credit bureaus** | FactPy, Sifende and others; Criterion | Integration partners: sales data in, PEP checks in. Criterion already co-hosted a SEPRELAD webinar for real estate (B2 dive) | [FactPy](https://factpy.com/); [Criterion](https://www.criterion.com.py/index.php?pag=comprar) |
| **Regional hubs** | Alto Paraná (365 firms, Ciudad del Este) and Caaguazú (168, mostly individuals) | Many owner-run lots outside Asunción. WhatsApp and phone sales plus local accountants matter more than events (inference) | my count of the register |
| **Trade media** | InfoNegocios (InfoMotor), Última Hora, La Nación, ABC; Clasipar, the classifieds site where lots advertise | Content timed to deadlines and warning-letter waves. Clasipar ads reach lot owners directly | [InfoNegocios InfoMotor](https://infonegocios.com.py/infomotor/estas-son-las-marcas-que-dominaron-el-mercado-de-vehiculos-0km-en-paraguay-en-lo-que-va-del-ano); [Clasipar](https://clasipar.paraguay.com/motor/otros-rodados/servicio-de-oficial-de-cumplimiento-seprelad-1924578) |

**Who to approach first** (my suggestion):
- two or three mid-size audit providers with vehicle clients, such as Cáceres & Schneider;
- CADAM's compliance or legal committee, if it has one (unverified);
- one compliance trainer such as Best Practices.

## Regional expansion

The core travels well: a sales and KYC log, cash and threshold rules, list checks, a deadline calendar, document templates and an auditor export. Each country needs its own report formats and legal texts.

| Country | Are car dealers obliged? | Size signal | Incumbents | Verdict |
|---|---|---|---|---|
| **Ecuador** | Yes. "Concesionarias automotrices" are obliged firms under direct UAFE control | **542 car dealers**, plus 4,446 real-estate and construction firms and 528 jewellers, among 9,539 UAFE-supervised firms (Table 6) | Not checked (unverified) | **The best second market.** US dollar economy, real fines and a register. Needs its own report format. ([UAFE 2025 report](https://www.uafe.gob.ec/wp-content/uploads/downloads/2026/rendicion_cuentas/Informe_de_RC_publicado_en_pag_web.pdf)) |
| **Colombia** | Yes. A 2013 UIAF resolution (101/2013) makes professional sellers of new and used vehicles report to the UIAF (search snippet; detail unverified) | Count not found | Many Colombian AML vendors (Pirani and others) | Crowded at home. Low priority. ([normograma](https://normograma.com/keralty/compilacion/docs/resolucion_uiaf_0101_2013.htm)) |
| **Peru** | Yes. Vehicle buying and selling is listed among UIF-Perú obliged firms (Res SBS 789-2018) (unverified detail) | Count not found | Not checked | Possible after Ecuador. ([LP Derecho](https://lpderecho.pe/sbs-norma-prevencion-lavado-activos-financiamiento-terrorismo-uif-peru/)) |
| **Argentina** | Yes. Ley 25.246 Art. 20 inc. 21 covers vehicle traders (UIF Res 127/2012 and 489/2013). Res 71/2024 raised the client-profile threshold to ARS 60m. A Res 78/2025 on banks and vehicles followed (title seen only; unverified). The dealers' body ACARA asked the UIF for reform | Large; count not found | AMLify (via BDO) and others | Big but price-sensitive, with local vendors. Later. ([Ignacio Online on Res 71/2024](https://www.ignacioonline.com.ar/nuevos-montos-certificacion-de-origen-de-fondos-automotores/); [Res 78/2025](https://www.consejosalta.org.ar/wp-content/uploads/UIF-78-1.pdf); [AMLify](https://amlify.net/)) |
| **Mexico** | Yes. Vehicle sales are a "vulnerable activity" (LFPIORPI Art. 17 VIII). A 2025 reform made "habitual **or** professional" enough, and the UIF says more than 2 sales a year counts | Very large | Many PLD vendors | Biggest pool but most crowded. Not a first move. ([Cuatrecasas, Nov 2025](https://www.cuatrecasas.com/resources/enajenacion-de-vehiculos-uif-redefine-actividad-vulnerable-690d15e91c3a6067710025.pdf)) |
| **Bolivia** | Not confirmed for car dealers. The 2023 rule for non-financial firms reaches real estate only for large taxpayers (B2 dive) | Small | - | Skip (unverified). ([Ferrere, 2023](https://www.ferrere.com/en/news/instructivo-para-apnfd-con-enfoque-basado-en-gestion-de-riesgos-contra-lgi-ft-y-fpadm/)) |
| **Uruguay** | Not confirmed for car dealers (1 search) | Small | HADA, Devsys, Precodata | Crowded; skip (unverified). |
| **Brazil** | Not checked | Large | Many | Portuguese and a different regulator. Out of scope. |

## Implications for positioning and pricing

- **Sell "your SEPRELAD file, always ready" plus "your quarterly report built from your sales list".** Do not sell documents or a risk matrix alone. Freelancers, courses, SEPRELAD's guides and Pirani's free plan already cover those.
- **Lead with the two features nobody else has for vehicles:**
  - **RO preparation.** Import or type the sales once, check them, then produce the quarterly RO and the annual-form totals (cash by currency, PEP clients, units sold and imported).
  - **A mobile KYC form the buyer fills in.** It answers the "lost sales" complaint and builds the client file the auditor samples.
- **Start with paying firms that buy an audit (about 160), then the other paying firms (about 685).** Reach them through auditors. Do not chase the 30 large distributors first. Devsys sits there, and they want bank-grade screening.
- **Prices in guaraníes, billed by card from abroad.** Suggested tiers (my estimate; check in 10 interviews):
  - Basic: about Gs 90,000 a month (calendar, negative reports, document vault).
  - Standard: Gs 150,000-180,000 a month (adds KYC, RO preparation and annual-form figures).
  - Distributor: USD 100-200 a month.
  - Auditor practice: about USD 100-150 a month.
- **Time campaigns to the calendar:** RO windows (11-20 Jan, Apr, Jul, Oct), the annual form (31 May), audit and canon (30 June), and warning-letter waves.
- **Build one engine for all SEPRELAD sectors without a natural supervisor.** Vehicles alone are worth about USD 50,000-90,000 a year by year 3. Real estate (2,233 registered, 1,451 paying) is larger ([B2 dive](../paraguay-b2/02-market-and-competition.md)). Together with jewellers and pawnshops, the base is about 2,500 paying firms.
- **Watch SEPRELAD's vehicle risk-matrix module.** Treat it as an input to import, not a feature to compete with.

## Open questions

- Does SIRO accept JSON or bulk upload for the vehicle RO, and what fields does the current vehicle RO have? (Unverified. This decides how much RO preparation is worth.)
- What does a yearly external AML audit for a small lot cost? No auditor publishes a price. Ask 3-5 of the 138 providers.
- How many of the 845 paying firms already have a manual and a training record that would pass an inspection?
- Who leads CIVU and Civemup today, and how many members do they have?
- Does CADAM have a compliance committee or a collective code of ethics under Res 196?
- How many large distributors use Devsys or another tool, and what do they pay?
- Will SEPRELAD's risk-matrix module go further, into KYC files or document storage?
- How many vehicle firms has SEPRELAD fined or sanctioned in 2026?
- For Ecuador: what are the UAFE report formats for car dealers, and are there local vendors?

## Sources

SEPRELAD and state
- https://www.seprelad.gov.py/siro/consultaExterna/consultaExternaSoAe.xhtml (register and auditor Excel exports, counted 10 Oct 2026)
- https://www.seprelad.gov.py/siro/estadisticaExterna/estadistica.xhtml
- https://www.seprelad.gov.py/wp-content/uploads/2026/02/Memoria-Anual-de-Gestion-Ano-2025.pdf
- https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf
- https://www.seprelad.gov.py/documentos/gu-a-de-riesgos-de-la-ft-del-sector-automotor.pdf
- https://www.seprelad.gov.py/?p=4035
- https://www.seprelad.gov.py/userfiles/files/resoluciones/resolucion-n48-2025-canon-anual-2025.pdf
- https://www.seprelad.gov.py/?cat=35
- https://www.seprelad.gov.py/?p=1044
- https://www.seprelad.gov.py/userfiles/files/resoluciones/06-22-instructivo-formulario-anual-automotores.pdf
- https://www.pj.gov.py/descargar/ID1-148_informe_de_evaluacion_mutua_de_paraguay_2022.pdf
- https://www.dnit.gov.py/web/portal-institucional/w/dnit-designa-nuevos-facturadores-electr%C3%B3nicos
- https://impuestospy.com/impuestos/resolucion-general-dnit-n-52-2026/

Press and associations
- https://www.ultimahora.com/seprelad-el-50-playa-autos-eluden-el-control-antilavado-n2852685.html
- https://www.ultimahora.com/autos-usados-pagaron-usd-100-millones-aduanas-el-2018-n2830111
- https://www.ultimahora.com/cadam-autos-usados-tenemos-que-dejar-ser-el-basurero-del-mundo-n2829808
- https://www.ip.gov.py/ip/2018/04/05/presentan-camara-de-importadores-de-vehiculos-y-maquinarias-usadas-del-paraguay/
- https://www.lanacion.com.py/negocios/2025/04/12/importacion-de-vehiculos-crecio-16-en-el-primer-trimestre/
- https://www.lanacion.com.py/negocios/2020/10/08/mercedes-benz-presento-la-nueva-generacion-de-sprinter/
- https://www.lanacion.com.py/negocios/2024/08/13/consultora-presenta-herramienta-que-identifica-a-personas-expuestas-politicamente/
- https://infonegocios.com.py/y-ademas/seguridad-seguros-acompana-la-expo-feria-cadam-2026-como-aseguradora-oficial-por-mas-de-dos-decadas-consecutivas
- https://infonegocios.com.py/infomotor/estas-son-las-marcas-que-dominaron-el-mercado-de-vehiculos-0km-en-paraguay-en-lo-que-va-del-ano
- https://ferrere.com/es/novedades/nuevo-reglamento-de-prevencion-de-lavado-de-activos-y-financiamiento-del-terrorismo-para-personas-fisicas-o-juridicas-involucrad/
- https://www.vouga.com.py/en/la-seprelad-recuerda-plazos-y-obligaciones-de-reporte-a-los-sujetos-obligados/
- https://www.infobae.com/america/america-latina/2026/06/18/el-presidente-de-paraguay-reajusto-un-5-el-salario-minimo-supero-a-la-inflacion-y-alcanzara-los-usd-500/
- https://hacecuentas.com/py/dolar-hoy-paraguay

Vendors, services and training
- https://consultoria.com.py/prevencion-del-lavado-de-dinero-seprelad/
- https://consultoria.com.py/caceres-schneider-informe-de-cumplimiento-seprelad-plazos-para-entrega/
- https://clasipar.paraguay.com/motor/otros-rodados/servicio-de-oficial-de-cumplimiento-seprelad-1924578
- https://bestpractices.com.py/curso-taller-administracion-de-riesgos-ldft/
- https://gestioncontableparaguay.com/courses/curso-seprelad-6-hs-de-estudio/
- https://www.fotriem.edu.py/diplomado-en-prevencion-de-lavado-de-activos-y-financiacion-del-terrorismo-ft-fp/
- https://www.criterion.com.py/index.php?pag=comprar
- https://factpy.com/
- https://www.sifende.com.py/
- https://www.devsys.com.uy/clientes.html
- https://www.piranirisk.com/es/hub-regulatorio/seprelad-prevencion-lavado-dinero-paraguay-siro
- https://hada.com.uy/
- https://thekyb.com/our-data/paraguay/
- https://shuftipro.com/supported-countries/paraguay/
- https://www.opensanctions.org/countries/py/
- https://amlify.net/

Regional
- https://www.uafe.gob.ec/wp-content/uploads/downloads/2026/rendicion_cuentas/Informe_de_RC_publicado_en_pag_web.pdf
- https://normograma.com/keralty/compilacion/docs/resolucion_uiaf_0101_2013.htm
- https://lpderecho.pe/sbs-norma-prevencion-lavado-activos-financiamiento-terrorismo-uif-peru/
- https://www.ignacioonline.com.ar/nuevos-montos-certificacion-de-origen-de-fondos-automotores/
- https://www.consejosalta.org.ar/wp-content/uploads/UIF-78-1.pdf
- https://www.cuatrecasas.com/resources/enajenacion-de-vehiculos-uif-redefine-actividad-vulnerable-690d15e91c3a6067710025.pdf
- https://www.ferrere.com/en/news/instructivo-para-apnfd-con-enfoque-basado-en-gestion-de-riesgos-contra-lgi-ft-y-fpadm/

Sibling files in this study
- [01-law-and-requirements.md](01-law-and-requirements.md)
- [../paraguay-b2/02-market-and-competition.md](../paraguay-b2/02-market-and-competition.md)
- [../reports/paraguay-b1.md](../reports/paraguay-b1.md)
