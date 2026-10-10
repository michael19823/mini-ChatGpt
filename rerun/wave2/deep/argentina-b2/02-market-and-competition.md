# Argentina INAES compliance desk: market size, buyers and competition (deep dive 02)

Date: 10 Oct 2026. Builds on [the B2 report](../reports/argentina-b2.md). Scope: market size, buyers, competition, channels and regional expansion. Law, product, go-to-market and payments are in the other section files.

Conventions:
- Money is in US dollars unless marked ARS. Exchange rate: ARS 1,517 per USD, the BCRA official rate on 9 Oct 2026 ([BCRA API](https://api.bcra.gob.ar/estadisticascambiarias/v1.0/Cotizaciones/USD?fechadesde=2026-10-01&fechahasta=2026-10-10)).
- "My count" means I downloaded a list and counted it. "Estimate" means I derived the number. "(unverified)" marks facts I could not confirm.
- "Lending mutual" means a mutual with an approved ayuda económica (member loan) rule. "Credit co-op" means a co-operative allowed to give credit.

## Summary

- **The paying core is about 1,100-1,200 active lenders, not 2,000.**
  - INAES has 2,010 entities registered as AML reporting entities: 1,414 mutuales and 596 credit co-ops (March 2024) ([FATF/GAFILAT mutual evaluation of Argentina, Table 1.1](https://www.mpf.gob.ar/procelac-lavado/files/2020/04/Argentina-Mutual-Evaluation-Report-2024.pdf.coredownload.inline.pdf)).
  - The same report says only 537 mutuales and 596 co-ops "offer financial services" (para 110).
  - INAES's AML training in 2021-22 drew 542 mutuales and 38 savings-and-credit co-ops ([INAES Informe de Gestión 2021-2023, p.29](https://www.argentina.gob.ar/sites/default/files/2023/12/inaes_informe_gestion_21-23.pdf)).
  - So roughly 540 mutuales really lend. About 870 more hold a lending rule but look dormant (estimate). They still owe filings, which makes them a catch-up market rather than a subscription market.
- **The wider register is large but low-value.** At the end of 2023 there were 22,393 co-operatives (81.5% of them worker co-ops) and 3,903 mutuales ([INAES report, pp.9-14](https://www.argentina.gob.ar/sites/default/files/2023/12/inaes_informe_gestion_21-23.pdf)). All of them must file the yearly member and authorities roll ([Res 2147/2025](https://www.consejosalta.org.ar/wp-content/uploads/Res-2147-2025.-INAES.pdf)). Of the mutuales, 1,576 had an approved lending rule (INAES report, chart 8, p.16).
- **Non-compliance is common and named in public.**
  - Res 1687/2026 lists mutuales with a loan-brokering rule that had filed none of their quarterly returns up to the end of 2025. My count of its annex: **302 mutuales** ([BO 31 Aug 2026](https://www.boletinoficial.gob.ar/detalleAviso/primera/346572/20260831)).
  - Res 565/2026 withdrew the licence of **205 mutuales** for missing filings from 2017 to 2024 (my count of Annex I) ([BO 10 Mar 2026](https://www.boletinoficial.gob.ar/detalleAviso/primera/339254/20260310)).
  - These annexes give names, registration numbers, tax IDs and provinces. They are ready-made lead lists.
- **Competition is real, but nobody does the whole job.**
  - At least four local mutual ERPs exist: Bambú (Paraná), SIGMA by NeoSistemas (Rosario), Nexa (Pergamino) and GEM by Renova (Rosario). Bambú claims INAES file export and UIF compliance ([Bambú](https://bambuestudio.com.ar/software-para-entidades-mutuales/)). SIGMA claims UIF suspicious-transaction alerts ([NeoSistemas](https://www.neosistemassrl.com/neosistemas_15/software-gestion-empresas-mutuales-financieras/)).
  - CONLAFT sells AML software and services to mutuales and co-ops. It was founded in May 2024, has 8 staff and reports 5 systems deployed ([Cancillería profile](https://www.cancilleria.gob.ar/userfiles/ut/conlaft_espanol.pdf)).
  - No vendor publishes a price. None was found that serves accountants across many entities, or that prepares the new monthly INAES web form (unverified).
- **Willingness to pay is modest.**
  - The Santiago del Estero fee scale for co-op and mutual graduates prices "advice on UIF rules" at 5 units of ARS 12,500, which is ARS 62,500 or about USD 41 ([CPCESE Res 06/2026](https://cpcese.org.ar/documentos/Lic.%20Cooperativas%20R.%2006-25.pdf)).
  - A mainstream SME accounting SaaS (Colppy) starts at ARS 128,500 a month plus VAT, about USD 85 ([Colppy](https://www.colppy.com/precios/)).
  - USD 25-60 a month per entity, or about USD 200 a month for an accountant with ten entities, looks plausible (estimate, untested).
- **Revised year-3 revenue:** about USD 70,000 a year in the base case (range USD 20,000-175,000). The B2 report's base case was USD 125,000. I cut it because the active base is about 1,130 entities, not 2,000.
- **Channels are concentrated and reachable.** CAM, the main confederation, said in 2021 that it groups 39 federations and more than 3,400 mutuales ([NoticiasNQN, 2021](https://www.noticiasnqn.com.ar/noticias/2021/11/26/251055-autoridades-del-inaes-visitaron-calf)). FEMUCOR (Córdoba) represents 240 mutuales (search snippet, [Hoy Día](https://hoydia.com.ar/economia/primer-congreso-internacional-de-cooperativas-y-mutuales-en-cordoba/)). 76% of mutuales sit in the Centro region (INAES report, p.13).
- **Regional expansion is weak.** The INAES and UIF content does not travel. Paraguay (382 savings-and-credit co-ops) and Peru (419 COOPAC registered in 2019) have similar enforcement patterns but different rules and mature local vendors (sources below).

## Buyer segments

| Segment | Count | Source | Year | Confidence |
|---|---|---|---|---|
| Co-operatives in force ("vigentes"), all types | 22,393 (worker co-ops 18,259; public services 1,188; housing 895; agricultural 829) | [INAES Informe de Gestión 2021-2023, pp.9-12](https://www.argentina.gob.ar/sites/default/files/2023/12/inaes_informe_gestion_21-23.pdf) | late 2023 | high for the register; many are inactive (unverified) |
| Mutuales in force, all types | 3,903 (Buenos Aires 933, Santa Fe 757, CABA 707, Córdoba 411, Mendoza 175, Entre Ríos 158) | same, pp.13-14 | late 2023 | high for the register |
| Mutuales after the March 2026 licence withdrawals | about 3,700 | estimate: 3,903 minus the 205 in [Res 565/2026](https://www.boletinoficial.gob.ar/detalleAviso/primera/339254/20260310) Annex I (my count), before other changes | 2026 | low-medium |
| Mutuales with an approved ayuda económica (lending) rule | 1,576 | INAES report, chart 8, p.16 | late 2023 | high |
| Mutuales registered with INAES as AML reporting entities | 1,414 | [FATF/GAFILAT MER, Table 1.1 and para 498](https://www.mpf.gob.ar/procelac-lavado/files/2020/04/Argentina-Mutual-Evaluation-Report-2024.pdf.coredownload.inline.pdf) | March 2024 | high |
| Mutuales that actually offer financial services | 537 | same, para 110 | 2024 | medium. Cross-check: 542 mutuales attended INAES AML training in 2021-22 (INAES report, p.29). |
| **Credit co-operatives registered as AML reporting entities** | **596** (FATF says all 596 "offer financial services") | FATF MER, Table 1.1, para 110 | March 2024 | medium. Only 38 savings-and-credit co-ops attended INAES AML training (INAES report, p.29), so many may be small or inactive (unverified). |
| **Core segment: active lending mutuales plus credit co-ops** | **about 1,130** | sum of 537 and 596 | 2024 | medium |
| Registered-but-dormant lending mutuales | about 870 | estimate: 1,414 minus 537 | 2024 | low |
| INAES risk ratings of reporting entities, 2023 | mutuales: 43 high, 180 medium, 1,162 low (1,385); co-ops: 39 high, 60 medium, 491 low (590) | FATF MER, Table 6.3 (pp.166-167; the totals row in the text extract is misaligned, so I summed the rows) | 2023 | high |
| Mutuales with a loan-brokering rule that filed none of their quarterly returns to end-2025 | **302** distinct tax IDs (305 rows): Buenos Aires 75, CABA 73, Córdoba 42, Mendoza 32, Santa Fe 30, Entre Ríos 8, Tucumán 8, others 34 | my count of the annex to [Res 1687/2026](https://www.boletinoficial.gob.ar/detalleAviso/primera/346572/20260831) | Aug 2026 | high |
| Mutuales whose licence was withdrawn for 2017-2024 non-filing | 205 (plus 15 exempted) | my count of [Res 565/2026](https://www.boletinoficial.gob.ar/detalleAviso/primera/339254/20260310) Annexes I and II | Mar 2026 | high |
| Mutuales with an advisory/gestoría rule | 553 | INAES report, chart 8 | 2023 | medium. Whether this includes loan brokering is unclear (unverified). |
| Second- and third-grade bodies | mutuales: 52 second-grade and 2 third-grade bodies; co-ops: 150 federations and confederations (second grade) and 5 third-grade bodies | INAES report, pp.9, 13 | 2023 | high |
| Members of mutuales | 3.15 million active, 5.85 million adherent, 1.34 million participant | INAES report, p.14 | 2023 | high |
| Employees of mutuales | 34,514 (Santa Fe 10,878; CABA 8,119; Buenos Aires 5,837) | INAES report, pp.15-16 | 2023 | high |
| Suspicious transaction reports from co-ops and mutuales | 1,227 (2019), 1,118 (2020), 1,331 (2021), 1,476 (2022), 1,475 (2023) | FATF MER, Table 5.1 | 2019-23 | high |
| New mutual applications, 2019-2024 | 361 received, 232 rejected | FATF MER, Table 6.1 | 2024 | high |
| Accountants and co-op graduates who serve these entities | not found. A separate profession, the Licenciado en Cooperativismo y Mutualismo, has its own fee scale. | [CPCESE](https://cpcese.org.ar/documentos/Lic.%20Cooperativas%20R.%2006-25.pdf) | 2026 | unknown |

**How the counts fit together.**
- The register overstates the market. INAES suspended 20,612 co-ops and 1,847 mutuales in 2019 ([Diario de Cuyo](https://www.diariodecuyo.com.ar/noticias/hay-1-700-puestos-de-trabajo-en-juego-por-la-medida-de-suspender-a-las-cooperativas-330303.html)). It keeps purging (Res 565/2026).
- Almost half of today's co-ops (10,292 of 22,393) registered in 2021-2023 alone, with a peak of 5,142 in 2022 (INAES report, p.10). Most are worker co-ops. Their link to social programmes is my inference (unverified). They are poor prospects for paid software.
- The AML-obliged group is the one with money and the most duties. CAM's AML adviser said in March 2024 that "more than 2,000 entities, between co-operatives and mutuales" were working under UIF Res 99/2023 ([ANSOL](https://ansol.com.ar/servicios/lavado-de-activos-cooperativas-mutuales-uif/)). That matches the 2,010 registered. The active share is about 1,130.
- **Working base for pricing:** about 1,130 active obligated entities, plus about 870 dormant ones with arrears, plus about 3,000 non-lending mutuales and a few thousand non-worker co-ops for a cheap roll-and-calendar tier (estimate).

## Buyer profile and pain

**Who they are.**
- Lending mutuales are mostly linked to a workplace, union, club or profession. The Res 1687 annex is full of names like the police personnel mutual, municipal workers of Avellaneda, Luz y Fuerza workers, domestic service workers and medical sales agents ([Res 1687/2026 annex](https://www.boletinoficial.gob.ar/detalleAviso/primera/346572/20260831)). Bambú's client logos show the same pattern: judicial employees, police officers, a university mutual and club mutuales ([Bambú home](https://bambuestudio.com.ar/)).
- Loans are often repaid by payroll deduction. Mutual software advertises collection "through banks, municipal and provincial bodies, payroll deduction" ([Bambú](https://bambuestudio.com.ar/software-para-entidades-mutuales/); [GEM](https://renovasrl.com.ar/software-para-mutuales-gem/)).
- They are small. 34,514 employees across 3,903 mutuales is about 9 per entity on average. Santa Fe and CABA hold 55% of all mutual employees (INAES report, pp.15-16). So the median is likely a few staff or none, with a volunteer board (inference).
- They cluster in the Centro region: 2,966 of 3,903 mutuales, or 76% (INAES report, p.13).
- Their risk is rated low. INAES rated 1,162 of 1,385 mutuales "low" in 2023 (FATF MER, Table 6.3). The FATF found that "mutual associations and cooperatives are implementing AML/CFT obligations effectively" (FATF MER, para 428(c), chapter 5, p.141). That is true of the supervised top end. The 302 Res 1687 non-filers show a weak tail.

**How they comply today.**
- **Monthly lending return:** typed by hand into INAES's new web form from the July 2026 period. Before that, a spreadsheet was downloaded and uploaded ([Res 1279/2026](https://www.argentina.gob.ar/normativa/nacional/norma-427021/texto)).
- **Member roll:** a web system with a bulk-load option ([Contadores en Red](https://contadoresenred.com/cooperativas-y-mutuales-sistema-integrado-de-nomina-de-asociados-y-autoridades/)). Bambú says it exports files for INAES ([Bambú](https://bambuestudio.com.ar/software-para-entidades-mutuales/)).
- **AML:** a board member acts as compliance officer, an external reviewer (REI) checks the system, and a manual is written once and updated. CONLAFT describes current practice as "planillas manuales o sistemas costosos e incompletos" (manual spreadsheets or costly, incomplete systems). This is a vendor's claim ([Cancillería profile](https://www.cancilleria.gob.ar/userfiles/ut/conlaft_espanol.pdf)).
- **Advice:** accountants and Licenciados en Cooperativismo, the CPCECABA advisory desk ([CPCECABA](https://consejo.org.ar/herramientas-profesionales/asesoramiento/asesoramiento-presencial/area-cooperativas-y-mutuales)), federation advisers (CAM has an AML adviser, [ANSOL](https://ansol.com.ar/servicios/lavado-de-activos-cooperativas-mutuales-uif/)), and free INAES training.
- **Larger lenders** run an ERP (see the competitor table). Each vendor shows tens of clients, not hundreds. Bambú shows about 14 mutual client logos ([Bambú home](https://bambuestudio.com.ar/)).

**Pain, with evidence.**
- **The old filing tools broke.** INAES itself says the spreadsheet flow "generaba reiterados inconvenientes técnicos" (caused repeated technical problems) with operating systems and spreadsheet software ([Res 1279/2026](https://www.argentina.gob.ar/normativa/nacional/norma-427021/texto)).
- **The new form is manual.** Each annex is typed in field by field. The consistency check runs at the end ([INAES user guide via Contadores en Red](https://contadoresenred.com/wp-content/uploads/2026/06/Instructivo.pdf)). Overdue periods must also be re-entered there ([Res 1279/2026](https://www.argentina.gob.ar/normativa/nacional/norma-427021/texto)).
- **Entities asked for more time on the roll.** INAES "ha recibido diversas presentaciones por parte de las entidades del sector, en las que solicitan la ampliación del plazo" (received various requests from entities asking for more time) to finish the roll. It moved the deadline from 12 Oct to 11 Dec 2025 ([Res 2147/2025](https://www.consejosalta.org.ar/wp-content/uploads/Res-2147-2025.-INAES.pdf)).
- **Many simply do not file.** 302 loan-brokering mutuales owed every quarterly return to the end of 2025 ([Res 1687/2026](https://www.boletinoficial.gob.ar/detalleAviso/primera/346572/20260831)). 205 mutuales lost their licence in March 2026 ([Res 565/2026](https://www.boletinoficial.gob.ar/detalleAviso/primera/339254/20260310)).
- **The rules keep changing.** In 2026 alone: CRS member identification (Res 1038), the monthly web form (Res 1279), the AML module (Res 1567), the 30-day cure (Res 1687), licence withdrawals (Res 565) and tighter controls on new entities with credit activity (Res 1060) ([Res 1060 summary, Consejo Salta](https://www.consejosalta.org.ar/wp-content/uploads/INAES-1060.pdf)). The UIF regime itself changed in 2023, and 2024 was "the year of implementation" with monthly systematic reports ([ANSOL](https://ansol.com.ar/servicios/lavado-de-activos-cooperativas-mutuales-uif/)).
- **Forum evidence is thin.** I found no forum threads or press complaints from small mutual boards (two searches). The pain shows up in INAES's own resolutions, accountant guides and deadline extensions instead.

## Willingness to pay

**What they pay today.**

| Item | Price | USD | Source |
|---|---|---|---|
| Advice on UIF rules, minimum ethical fee (Santiago del Estero) | 5 MATES x ARS 12,500 = ARS 62,500 | 41 | [CPCESE Res 06/2026](https://cpcese.org.ar/documentos/Lic.%20Cooperativas%20R.%2006-25.pdf) |
| Advice on assemblies, minutes, contracts | 5 MATES = ARS 62,500 | 41 | same |
| Advice during an INAES inspection | 5 MATES = ARS 62,500 | 41 | same |
| Forming a mutual up to registration | 20 MATES = ARS 250,000 | 165 | same |
| Setting up an AML procedures manual; ongoing advice to mutuales of up to 400 members | "Consultar" (on request) | - | same |
| Salta accountants' minimum-fee module | ARS 18,500 from 1 Oct 2026 | 12 | [Consejo Salta](https://www.consejosalta.org.ar/2026/06/actualizacion-del-valor-modulo-para-honorarios-minimos-profesionales/) |
| SME accounting SaaS (Colppy), monthly plus VAT | ARS 128,500 / 189,500 / 261,500 for 300 / 1,000 / 3,000 vouchers | 85 / 125 / 172 | [Colppy](https://www.colppy.com/precios/) |
| Mutual ERPs (Bambú, SIGMA, Nexa, GEM) | not published; sold by demo | - | vendor sites (unverified) |
| CONLAFT AML software, self-assessment report, manual, training | not published | - | [Cancillería profile](https://www.cancilleria.gob.ar/userfiles/ut/conlaft_espanol.pdf) (unverified) |
| External independent reviewer (REI) report | not found | - | (unverified) |
| INAES and UIF/FACC training | free (INAES courses; UIF-FACC workshop) | 0 | [INAES report p.29](https://www.argentina.gob.ar/sites/default/files/2023/12/inaes_informe_gestion_21-23.pdf); [UIF](https://www.argentina.gob.ar/node/392409) |

**Cost of not complying.**
- Loss of the licence to operate ([Res 565/2026](https://www.boletinoficial.gob.ar/detalleAviso/primera/339254/20260310)).
- Lapse of the lending or brokering rule, which ends the main business ([Res 1687/2026](https://www.boletinoficial.gob.ar/detalleAviso/primera/346572/20260831)).
- 23 orders revoking licences to provide financial services during the FATF review period (FATF MER, para 499).
- UIF fines are counted in units of ARS 54,140 ([+blogdelcontador](https://blogdelcontador.com.ar/news-45952-prevencion-del-lavado-la-uif-actualiza-el-valor-del-modulo-sancionatorio-a-54140)). No fine against a mutual was found.

**Reading.**
- A small lending mutual already pays its accountant for the monthly figures and an external reviewer for AML (unverified amounts). A tool that saves the accountant two or three hours a month is worth a few MATES a month to that accountant.
- The minimum ethical fee for one UIF advice job is about USD 41. A subscription of USD 25-40 a month per entity is the same order of money. That is plausible for active lenders, and hard for dormant ones (estimate).
- Volunteer boards, thin margins and peso inflation push towards peso prices indexed to a fee module, and towards selling to accountants who spread the cost over several clients.
- The 302 + 205 non-filers show that some boards will not pay at all. Others will pay once, to clear arrears and keep their rule. That suggests a one-off "catch-up" service.

## Competitor table and discussion

Duty list used below: (M) monthly ayuda económica return, Annexes I-V and VII; (Q) quarterly loan-brokering return; (R) member and authorities roll with PEP, risk and residence fields; (A) INAES AML module (initial filing about 1 Dec 2026, then by 20 Jan); (U) UIF Res 99/2023 records: self-assessment by 30 April, REI, manual, training log, member files, monitoring, monthly systematic reports; (C) CRS identification; (D) assembly documents and accounts; (K) deadline tracking across many entities.

| Product | Type, base | Coverage vs duty list | Price | Customers | Verdict |
|---|---|---|---|---|---|
| **INAES web systems** (monthly form, roll system, AML Module II, TAD) | regulator portal | Receives M, Q, R, A, D. Partial save and validations on M. Bulk load on R. Data migration and automatic loading promised on A ([Res 1567 text](https://www.consejosalta.org.ar/wp-content/uploads/INAES-1567.pdf)). No calculation from the loan ledger, no multi-entity view, no U records. | free | all entities | The filing channel, not a rival for preparation. Its auto-load features shrink A over time. |
| UIF reporting systems | regulator portal | Receives STRs and systematic reports (U). No record keeping. | free | all obliged entities | Same. |
| **Bambú Estudio Soft** | mutual and credit co-op ERP, Paraná | Members "meeting all INAES requirements", members book, "exportación de archivos para INAES", reports for INAES, UIF and AFIP, "Cumplimiento regulatorio de UIF LA-FT", loans, savings, digital member onboarding ([Bambú](https://bambuestudio.com.ar/software-para-entidades-mutuales/)). M on the new web form: not claimed (unverified). | not published | about 14 mutual logos, mainly Entre Ríos and Rosario ([Bambú home](https://bambuestudio.com.ar/)) | Strongest ERP on paper. Overkill and probably costly for a small lender (unverified). Integration partner or the main threat. |
| **SIGMA by NeoSistemas SRL / Neoconsultores** (MutualOnline app) | mutual ERP, Rosario, ISO 9001 | Members, savings, ayuda económica, cards, tellers, accounting, "Gestión de Operaciones Sospechosas / Alertas UIF" ([NeoSistemas](https://www.neosistemassrl.com/neosistemas_15/software-gestion-empresas-mutuales-financieras/); [Neoconsultores](https://neoconsultores.ar/software-para-mutuales-sigma/ayudas-economicas/)). No INAES export claimed. | not published | not counted | Part of U for its own clients. Not aimed at accountants. |
| Nexa Mutuales | mutual ERP, Pergamino | Ayuda económica from request to collection, proveeduría (search snippet; the product page now returns "not found") ([Nexa](http://nexa.com.ar/nexa-mutuales/)). No INAES or UIF claim seen. | not published | not found | Operations tool, not compliance. |
| GEM by Renova SRL | mutual ERP, Rosario | Savings accounts, ayuda económica, payroll-deduction collection ([GEM](https://renovasrl.com.ar/software-para-mutuales-gem/)). No INAES or UIF claim found. | not published | client list on site, not counted | Operations tool. |
| **CONLAFT S.R.L.** | AML SaaS plus services; phone code 3492 (Rafaela area) | U: risk matrix, KYC, member file, monitoring, reports; also writes self-assessments and manuals and trains ([Cancillería profile](https://www.cancilleria.gob.ar/userfiles/ut/conlaft_espanol.pdf); [conlaft.com](https://www.conlaft.com/), meta text "Soluciones KYC, KYB y AML ... para empresas y contadores"). No M, Q, R or K claimed (unverified). | not published | 5 systems deployed; 8 staff; founded 20 May 2024 | The closest rival on AML. Proves demand. Small. A partner for U, or a rival if it adds INAES prep. |
| Pirani | GRC/AML SaaS, Colombia | Generic AML risk module; publishes an Argentina UIF guide ([Pirani hub](https://www.piranirisk.com/es/hub-regulatorio/prevencion-lavado-activos-argentina-cumplimiento-uif)). No INAES content. | not in page text (unverified) | regional, mainly larger firms (unverified) | Not aimed at small mutuales. |
| Accountants, Licenciados en Cooperativismo, law firms | services | Do M, R, D, A by hand; sign reports; write manuals ([CPCESE fee scale](https://cpcese.org.ar/documentos/Lic.%20Cooperativas%20R.%2006-25.pdf); [Marval](https://www.marval.com/publicacion/la-uif-modifica-marco-regulatorio-para-las-cooperativas-y-asociaciones-mutuales-15537)) | about USD 41 per advice job; ongoing fees on request | most entities (unverified) | The buyers and the channel, not the competitor. |
| Federations and confederations (CAM, FEMUCOR, FACC and others) | sector bodies | Advice and training; CAM has an AML adviser ([ANSOL](https://ansol.com.ar/servicios/lavado-de-activos-cooperativas-mutuales-uif/)) | membership fee (unverified) | CAM: 39 federations, more than 3,400 mutuales (2021) | Partners. Could also white-label a template pack. |
| Content sites (Contadores en Red, +blogdelcontador/SIAP, Tributum, abogados.com.ar) | guides | Explain M, R, A step by step ([Contadores en Red](https://contadoresenred.com/inaes-regimen-informativo-del-servicio-de-ayuda-economica-mutual-transmision-web-instructivo/)) | free to paid | accountants | Explain the job, do not do it. Advertising channel. |
| Generic accounting SaaS (Colppy and similar) | SME accounting | Bookkeeping only; no INAES or UIF features found | from USD 85 a month | broad | Price anchor, not a rival. |
| Gestion Socios | club membership tool | No INAES or UIF features ([Capterra](https://www.capterra.in/software/1238063/Gestion-Socios)) | - | - | Irrelevant. |

**Discussion.**
- **The ERPs are real but serve the top tier.** Four local ERPs sell to mutuales, and one (Bambú) claims INAES file export and UIF features. They sell by demo, publish no price and show small client lists. They are built to run a lending business, not to keep a compliance file. The best move is to integrate with them, not to fight them.
- **CONLAFT is the only compliance-first rival.** It covers the UIF side and sells documents and training too. It shows that some entities will pay for AML help. With 5 deployments it has barely started.
- **Three gaps remain open (unverified for the ERPs):**
  1. Preparing the monthly return for the new manual web form from a loan spreadsheet, with INAES's checks run before typing.
  2. A multi-entity deadline and status board for accountants: about 20 filing events per entity per year across INAES, the UIF and the provincial body.
  3. Clearing arrears for dormant entities that hold a lending or brokering rule (the 302 in Res 1687).
- **The threat to watch is INAES itself.** It is merging all reporting into one system with automatic loading ([Res 1567](https://www.consejosalta.org.ar/wp-content/uploads/INAES-1567.pdf); [abogados.com.ar](https://abogados.com.ar/el-inaes-unifica-y-digitaliza-el-regimen-informativo-para-cooperativas-y-mutuales/39763)). Each step makes "filing" easier. It does not keep the UIF records, compute the annex figures or give accountants a cross-client view.

## Channels

- **Confederations and federations.**
  - CAM (Confederación Argentina de Mutualidades): 39 federations and more than 3,400 mutuales, per its president in 2021 ([NoticiasNQN](https://www.noticiasnqn.com.ar/noticias/2021/11/26/251055-autoridades-del-inaes-visitaron-calf)). It is also the employers' side of the mutual sector's collective labour agreement ([+blogdelcontador](https://siap.blogdelcontador.com.ar/parte_empleadora/confederacion-argentina-de-mutualidades-cam/)).
  - CONAM (Confederación Nacional de Mutualidades) and MAC (Mutualismo Argentino Confederado) are the other national bodies. CONAM appeared before a Chamber of Deputies committee in April 2026 ([HCDN](https://parlamentaria.hcdn.gob.ar/comisiones/reuniones/1164/archivo/B5MHAYT29SY4X3ET.pdf)).
  - FEMUCOR (Córdoba): 240 affiliated mutuales; its president Alejandro Russo also chairs CAM and is vice-president of the international AIM (search snippet, [Hoy Día](https://hoydia.com.ar/economia/primer-congreso-internacional-de-cooperativas-y-mutuales-en-cordoba/)).
  - Federación de Entidades Mutualistas de la Provincia de Santa Fe (search snippet; detail unverified).
  - FEDEMBA (Buenos Aires city and province) passed on the 2024 UIF deadline extension to members ([ANSOL](https://ansol.com.ar/servicios/lavado-de-activos-cooperativas-mutuales-uif/)).
  - For credit co-ops: FACC (Federación Argentina de Cooperativas de Crédito) and Cooperar. FACC and INAES ran a UIF 99/2023 workshop for about 100 representatives in August 2023, moderated by Cooperar ([UIF](https://www.argentina.gob.ar/node/392409)). FACC's 2026 forum discussed AI ([ANSOL headline](https://ansol.com.ar/servicios/lavado-de-activos-cooperativas-mutuales-uif/)).
- **Provincial authorities ("órganos locales competentes").** They receive the monthly return and help with the switch, for example Río Negro ([Río Negro](https://rionegro.gov.ar/info/297/servicio-de-ayuda-economica-mutual-se-pone-en-marcha-el-nuevo-sistema-de-transmision-web)). Santa Fe's Secretaría de Cooperativas, Mutuales y Emprendedurismo co-organised the CICM 2026 congress ([Conclusión](https://www.conclusion.com.ar/?p=1439083)).
- **Accountant bodies.** CPCECABA's co-op and mutual area ([CPCECABA](https://consejo.org.ar/herramientas-profesionales/asesoramiento/asesoramiento-presencial/area-cooperativas-y-mutuales)); CPCE Santiago del Estero's committee of social organisations ([CPCESE](https://cpcese.org.ar/documentos/Lic.%20Cooperativas%20R.%2006-25.pdf)); Consejo Salta republishes every INAES rule ([Consejo Salta](https://www.consejosalta.org.ar/wp-content/uploads/INAES-1567.pdf)).
- **Events.**
  - Congreso Internacional de Cooperativas y Mutuales (CICM), Rosario, 25 July 2026, free entry, more than 30 entities ([Conclusión](https://www.conclusion.com.ar/?p=1439083)).
  - FACC forum (2026) and FACC/INAES/UIF workshops ([UIF](https://www.argentina.gob.ar/node/392409)).
  - INAES's own AML training, which reached 542 mutuales in 2021-22 (INAES report, p.29).
- **Media.** Prensa Mutual ([prensamutual.com.ar](https://prensamutual.com.ar/lavado-activos-ft-la-uif-dio-conocer-la-resolucion-no-992023-mutuales-cooperativas/)), ANSOL, Contadores en Red, +blogdelcontador, Tributum, abogados.com.ar.
- **Lead lists.** The Boletín Oficial annexes name non-filers with tax ID and province: 302 in Res 1687/2026 and 205 in Res 565/2026. These can be checked against the CUIT register before contact.
- **Influencers.** Alberto Chichilnitzky (CAM's AML adviser) ([ANSOL](https://ansol.com.ar/servicios/lavado-de-activos-cooperativas-mutuales-uif/)); Alejandro Russo (CAM and FEMUCOR).
- **Vendors as partners.** The ERP vendors (Bambú, SIGMA) and CONLAFT could resell or integrate a filing-prep and calendar layer.

## Regional expansion

| Country | Comparable buyers | Count | Source | Fit |
|---|---|---|---|---|
| Paraguay | savings-and-credit co-ops under INCOOP | 382 of 576 registered co-ops. An INCOOP report for Q1 2025 covered 56 large "Type A" savings co-ops (search snippet, unverified). | [La Nación (Py), 29 Jul 2025](https://www.lanacion.com.py/negocios/2025/07/29/sector-cooperativo-desempena-un-papel-clave-en-la-inclusion-financiera-afirma-mef/) (citing INCOOP via the MEF) | Best second market (estimate). Spanish, strong co-op culture, but its own regulator and AML body (SEPRELAD), so all legal content must be rewritten. |
| Peru | COOPAC registered with the SBS | 419 (2019); the SBS dissolves inactive ones that miss quarterly statements | [Andina, 2019](https://andina.pe/ingles/noticia-sbs-419-cooperativas-lograron-su-registro-tras-proceso-inscripcion-758324.aspx); [Revista Economía](https://www.revistaeconomia.com/sbs-disuelve-coopac-accion-por-inactividad-y-falta-de-estados-financieros/) | Similar enforcement pattern. Larger entities with core banking systems (unverified). |
| Uruguay | co-ops of all types | 1,204 co-ops and rural societies (undated); very few savings co-ops under the central bank | [MTSS](https://www.gub.uy/ministerio-trabajo-seguridad-social/tematica/cooperativismo-economia-social); [Uruguay XXI](https://www.uruguayxxi.gub.uy/uploads/informacion/8b0ed9dbd0dcb01e5fac3585bec36b194565758f.pdf) | Small. Low priority. |
| Colombia | co-ops, employee funds and mutual associations under Supersolidaria | count not found | [La FM, Aug 2026](https://www.lafm.com.co/politica/supersolidaria-reporta-congreso-logro-revertir-deficit-alcanzo-record-recaudo-2025-407019) | Large but crowded: local AML/GRC vendors such as Pirani already sell there (unverified for this segment). |
| Bolivia | savings-and-credit co-ops licensed by ASFI | list exists, not counted | [ASFI](https://www.asfi.gob.bo/sites/default/files/2025-12/Cooperativas%20de%20Ahorro%20y%20Cr%C3%A9dito.pdf) | Not assessed. |

**Verdict.** The mutual form with an INAES-style monthly return is specific to Argentina. What could travel is the engine: a deadline calendar, a member register with PEP and risk fields, AML records, and "prepare the regulator's form" templates. Each country needs new legal content and its own pilots. Plan for Argentina only in years 1-2.

## Implications for positioning and pricing

- **Position as the compliance layer, not an ERP.** "From your loan spreadsheet or ERP export to INAES and UIF, checked and on time." Integrate with Bambú and SIGMA exports rather than replacing them.
- **Sell to accountants first.** One accountant with 5-15 entities faces about 100-300 filing events a year (estimate from the duty list). The pitch is the cross-client board, the monthly-return prep sheet and the roll export. Entities that have no accountant come second.
- **Lead with the dated deadlines:** the INAES AML module's initial filing (about 1 Dec 2026), the yearly AML filing by 20 January, the UIF self-assessment by 30 April, and the monthly return every month. Keep CRS as a field set in the member register.
- **Add a one-off catch-up service** for the 302 Res 1687 entities, the dormant lenders and those under sumario: arrears re-entry plus a rule-keeping plan. Price it per period cleared (amount unverified).
- **Peso prices indexed to a fee module, charged by card.** Suggested list prices (estimate, untested):
  - Small lending mutual: ARS 45,000 a month (about USD 30).
  - With AML pack (manual template, training log, member risk file): ARS 90,000 a month (about USD 60).
  - Accountant plan for up to 10 entities: ARS 300,000 a month (about USD 200); extra entities at ARS 25,000 each.
  - Non-lending entity, roll and calendar only: ARS 7,500 a month (about USD 5), sold through accountants.
  - These sit below one Colppy seat (USD 85) for the small tier and match a few MATES of professional time.
- **Revenue in year 3 (estimate):**
  - Base: 10% of about 1,130 active entities = 113 x USD 40 x 12 = USD 54,000, plus 40 catch-up or AML set-up jobs at USD 400 = USD 16,000. **Total about USD 70,000.**
  - Low: 5% = 57 x USD 30 x 12 = **about USD 20,000.**
  - High: 20% = 226 x USD 50 x 12 = USD 136,000, plus USD 40,000 of services = **about USD 175,000.**
  - This is a small, defensible niche business. It is below the B2 report's base case.

## Open questions

1. How many lending mutuales and credit co-ops are active in 2026? A request to INAES's Dirección Nacional de Control de Ahorro y Crédito, or to CAM, could answer it.
2. Do the 596 credit co-ops include many inactive or payroll-only lenders? Only 38 attended INAES training.
3. Do Bambú or SIGMA already prepare the new monthly web form or the AML Module II? What do they charge?
4. What does CONLAFT charge, and how many customers does it have now?
5. How many accountants and Licenciados serve lending mutuales, and what monthly fee do they charge per entity?
6. What does an REI review and an AML manual cost a small mutual?
7. Will INAES add file upload or an API to the monthly form?
8. What do the Paraguayan (INCOOP) and Peruvian (SBS) reporting rules require of small co-ops?

## Sources

Primary and official
- INAES, Informe de Gestión 2021-2023: https://www.argentina.gob.ar/sites/default/files/2023/12/inaes_informe_gestion_21-23.pdf
- FATF/GAFILAT, Mutual Evaluation Report of Argentina (2024): https://www.mpf.gob.ar/procelac-lavado/files/2020/04/Argentina-Mutual-Evaluation-Report-2024.pdf.coredownload.inline.pdf ; https://fatf-gafi.org/en/publications/Mutualevaluations/MER-Argentina-2024.html ; Spanish: https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf
- INAES Res 1687/2026 and annex: https://www.boletinoficial.gob.ar/detalleAviso/primera/346572/20260831
- INAES Res 565/2026 and annexes: https://www.boletinoficial.gob.ar/detalleAviso/primera/339254/20260310
- INAES Res 1279/2026: https://www.argentina.gob.ar/normativa/nacional/norma-427021/texto
- INAES Res 2147/2025: https://www.consejosalta.org.ar/wp-content/uploads/Res-2147-2025.-INAES.pdf
- INAES Res 1567/2026: https://www.consejosalta.org.ar/wp-content/uploads/INAES-1567.pdf
- INAES Res 1060/2026: https://www.consejosalta.org.ar/wp-content/uploads/INAES-1060.pdf
- INAES monthly-form user guide: https://contadoresenred.com/wp-content/uploads/2026/06/Instructivo.pdf
- UIF, FACC-INAES workshop (Aug 2023): https://www.argentina.gob.ar/node/392409
- BCRA exchange rate API: https://api.bcra.gob.ar/estadisticascambiarias/v1.0/Cotizaciones/USD?fechadesde=2026-10-01&fechahasta=2026-10-10
- CPCE Santiago del Estero fee scale, Res 06/2026: https://cpcese.org.ar/documentos/Lic.%20Cooperativas%20R.%2006-25.pdf
- Consejo Salta fee module: https://www.consejosalta.org.ar/2026/06/actualizacion-del-valor-modulo-para-honorarios-minimos-profesionales/
- CPCECABA co-op and mutual area: https://consejo.org.ar/herramientas-profesionales/asesoramiento/asesoramiento-presencial/area-cooperativas-y-mutuales
- Río Negro on the new system: https://rionegro.gov.ar/info/297/servicio-de-ayuda-economica-mutual-se-pone-en-marcha-el-nuevo-sistema-de-transmision-web
- Chamber of Deputies committee file (CONAM): https://parlamentaria.hcdn.gob.ar/comisiones/reuniones/1164/archivo/B5MHAYT29SY4X3ET.pdf

Vendors and competitors
- Bambú: https://bambuestudio.com.ar/software-para-entidades-mutuales/ ; https://bambuestudio.com.ar/
- NeoSistemas SIGMA: https://www.neosistemassrl.com/neosistemas_15/software-gestion-empresas-mutuales-financieras/ ; https://neoconsultores.ar/software-para-mutuales-sigma/ayudas-economicas/
- MutualOnline app: https://apps.apple.com/ca/app/mutualonline/id6480014182
- Nexa Mutuales: http://nexa.com.ar/nexa-mutuales/
- GEM (Renova SRL): https://renovasrl.com.ar/software-para-mutuales-gem/
- CONLAFT: https://www.cancilleria.gob.ar/userfiles/ut/conlaft_espanol.pdf ; https://www.conlaft.com/
- Pirani: https://www.piranirisk.com/es/hub-regulatorio/prevencion-lavado-activos-argentina-cumplimiento-uif
- Colppy prices: https://www.colppy.com/precios/
- Gestion Socios: https://www.capterra.in/software/1238063/Gestion-Socios
- Marval: https://www.marval.com/publicacion/la-uif-modifica-marco-regulatorio-para-las-cooperativas-y-asociaciones-mutuales-15537

Press, guides and channels
- ANSOL (Mar 2024): https://ansol.com.ar/servicios/lavado-de-activos-cooperativas-mutuales-uif/
- El Cronista (3 Aug 2026): https://www.cronista.com/economia-politica/cooperativas-y-mutuales-bajo-la-lupa-cuales-deben-declararse-como-sujetos-obligados-ante-la-uif/
- Contadores en Red guides: https://contadoresenred.com/inaes-regimen-informativo-del-servicio-de-ayuda-economica-mutual-transmision-web-instructivo/ ; https://contadoresenred.com/cooperativas-y-mutuales-sistema-integrado-de-nomina-de-asociados-y-autoridades/
- abogados.com.ar on INAES unification: https://abogados.com.ar/el-inaes-unifica-y-digitaliza-el-regimen-informativo-para-cooperativas-y-mutuales/39763
- +blogdelcontador, UIF fine module: https://blogdelcontador.com.ar/news-45952-prevencion-del-lavado-la-uif-actualiza-el-valor-del-modulo-sancionatorio-a-54140
- +blogdelcontador, CAM: https://siap.blogdelcontador.com.ar/parte_empleadora/confederacion-argentina-de-mutualidades-cam/
- NoticiasNQN (CAM size, 2021): https://www.noticiasnqn.com.ar/noticias/2021/11/26/251055-autoridades-del-inaes-visitaron-calf
- Hoy Día (FEMUCOR): https://hoydia.com.ar/economia/primer-congreso-internacional-de-cooperativas-y-mutuales-en-cordoba/
- Conclusión (CICM 2026): https://www.conclusion.com.ar/?p=1439083
- Prensa Mutual: https://prensamutual.com.ar/lavado-activos-ft-la-uif-dio-conocer-la-resolucion-no-992023-mutuales-cooperativas/
- Diario de Cuyo (2019 suspensions): https://www.diariodecuyo.com.ar/noticias/hay-1-700-puestos-de-trabajo-en-juego-por-la-medida-de-suspender-a-las-cooperativas-330303.html

Regional
- Paraguay: https://www.lanacion.com.py/negocios/2025/07/29/sector-cooperativo-desempena-un-papel-clave-en-la-inclusion-financiera-afirma-mef/
- Peru: https://andina.pe/ingles/noticia-sbs-419-cooperativas-lograron-su-registro-tras-proceso-inscripcion-758324.aspx ; https://www.revistaeconomia.com/sbs-disuelve-coopac-accion-por-inactividad-y-falta-de-estados-financieros/
- Uruguay: https://www.gub.uy/ministerio-trabajo-seguridad-social/tematica/cooperativismo-economia-social ; https://www.uruguayxxi.gub.uy/uploads/informacion/8b0ed9dbd0dcb01e5fac3585bec36b194565758f.pdf
- Colombia: https://www.lafm.com.co/politica/supersolidaria-reporta-congreso-logro-revertir-deficit-alcanzo-record-recaudo-2025-407019
- Bolivia: https://www.asfi.gob.bo/sites/default/files/2025-12/Cooperativas%20de%20Ahorro%20y%20Cr%C3%A9dito.pdf
