# Peru: anti-money-laundering (SPLAFT) kit for casinos, slot rooms and betting operators (Res. SBS 01015-2026): full plan

Combined plan from four deep-research parts (written 10 Oct 2026):

- [01 Law and product requirements](01-law-and-requirements.md): Res. SBS 01015-2026 and Res. SBS 03622-2025 read in full; a 37-row duty table, the filing channels, and 86 testable requirements (R1-R86), each traced to an article.
- [02 Market and competition](02-market-and-competition.md): buyer counts pulled from MINCETUR's live registers, willingness to pay, competitors, channels and regional options.
- [03 Product and technical design](03-product-and-tech.md): users, feature map, flows, screens, tested data feeds, architecture, security, agent work streams, calendar and build budget.
- [04 Go-to-market, company and finance](04-gtm-company-finance.md): pricing, channels, 90-day launch, payments and tax, company set-up, 36-month model and kill criteria.

Earlier work: [lead data](../items/peru-b1.json) and [B1 report with the re-assessment](../reports/peru-b1.md).

Every fact below is sourced in those files, and the key URLs are repeated here. This page reconciles the files where they disagree and gives one plan. "My estimate" marks numbers worked out on this page. "(unverified)" marks facts nobody could confirm. Money is in soles (S/) with US$ at S/ 3.45, the rate all four files use. Prices are net of IGV (Peru's 18% VAT) unless marked.

---

## 1. Decision in one page

**Verdict: go, but only as a cheap test timed to the February 2027 deadline. Commit fully only if at least 6 firms are paying by 30 April 2027.**

**New score: 6/10.** That is the same as the re-assessment (6/10). The first pass gave 5/10 and the challenge round gave 4/10. The score holds, but for different reasons. The deep dive made the case **more certain and cheaper to build**. It also showed the market is **smaller, and that selling into it costs more**.

**The case for it.**

- **The rule is new, in force, and has a hard first deadline.**
  - Res. SBS 01015-2026 replaced the 2016 casino rule. It took effect on 9 Apr 2026, with **no adaptation period** ([Res. SBS 01015-2026, MINCETUR copy](https://consultasenlinea.mincetur.gob.pe/casinos/Splaft/pdf/Resoluci%C3%B3n_SBS_01015_2026.pdf), Art. Octavo; [Santivañez](https://santivanez.com.pe/publicaciones/nueva-norma-sobre-prevencion-del-lavado-de-activos-y-del-financiamiento-del-terrorismo-para-casinos-y-tragamonedas/)).
  - The first annual officer report (IAOC) and internal-audit report (IAI) under the new content rules are due on **15 Feb 2027**. The board must approve them by 30 Jan (Arts. 18 and 27, same PDF).
  - A 3-week build that is sellable 6-8 weeks after a mid-October start lands in early December 2026. That is just in time.
- **The law demands records that the state portals do not keep.** The operations register (RO) must log every cash-out of US$ 2,500 or more and **every promotional prize winner, at any amount**. It must be kept on the day "in IT systems", with a backup, and sent to the financial intelligence unit (UIF) on an SBS template (Art. 14). Portal PLAFT, ROSEL and SISDEL only receive finished filings, and only the registered officer can log in (Arts. 14.6, 15.3, 26). Nothing in the state system keeps the client files, the RO in progress, training proof, refresh cycles, case analyses or the IAOC statistics ([01 file](01-law-and-requirements.md)).
- **There is a documented history of struggle.** For 2016, 164 of 333 firms filed the IAOC with the UIF late or not at all ([MINCETUR SPLAFT talk, 2017](https://consultasenlinea.mincetur.gob.pe/casinos/Agenda%20_Noticias/pdfs/2017/Presentacion_Charla_SPLAFT.pdf)).
- **Nobody sells this job in Peru.** About a dozen competitor searches found no gaming SPLAFT software. Pirani is generic and costs about US$ 3,645 a year before its AML add-on ([Pirani pricing](https://piranirisk.com/es/planes-y-precios/cumplimiento-normativo?hsLang=en), unverified). Screening services and consultants each cover only a slice ([02 file](02-market-and-competition.md)).
- **The buyers are named and easy to reach.** MINCETUR's public room register lists all **301 land-based firms**, with RUC (tax ID), rooms, addresses and machine counts ([room register](https://consultasenlinea.mincetur.gob.pe/casinos/Registros/registros.html?c=r_salasjuegos), counted 10 Oct 2026).
- **It is cheap to build.** Every outside data feed the MVP needs is free and was tested by script (UN, OFAC and EU lists; the BCRP exchange rate; the MINCETUR register). Cash cost to sellable is about US$ 11,000-28,000 ([03 file](03-product-and-tech.md)).

**What the deep dive changed** (compared with the re-assessment):

| Topic | Re-assessment | Deep dive | Effect |
|---|---|---|---|
| Effective date | Unknown adaptation window | In force 9 Apr 2026, no grace period; first new-format IAOC due 15 Feb 2027 | Stronger: urgency and a dated sales window |
| RO | "Likely" uploaded for land-based firms | Confirmed: kept daily in software and sent to UIF on the Portal PLAFT template (Art. 14.4, 14.6) | Stronger: a daily-use, legally required record |
| Land-based buyers | about 325 firms | **301 firms** (185 with one room), shrinking 1-3% a year | Weaker |
| Online buyers | about 91 licences | **49 companies** holding 95 registrations; their platforms must already pass an AML-monitoring certification | Weaker: online is a side market |
| New segment | - | **23 betting-shop network holders** with 4,497 shops | Upside, later |
| Channel | Outsourced officers serving many firms | **Illegal**: an officer may serve only one obliged firm at a time (Art. 19.2). Consultants and law firms stay as a referral channel | Weaker: the "fastest channel" is gone |
| Selling from abroad | Not checked | A foreign seller without a qualifying tax treaty triggers **30% withholding** plus 18% IGV self-assessment for the buyer. Stripe and Paddle do not fix it. **A Peruvian S.A.C. is needed** unless the founder's company is resident in Chile, Canada, Mexico, Korea or Portugal | Weaker: against the owner's preference |
| Year-3 revenue | about US$ 185,000 | **Base ARR S/ 410,000 (US$ 119,000)** at month 36 | Weaker, by about a third |
| Build | Medium-easy | Free feeds tested; Django monolith; 6 agent streams; sellable by 7-14 Dec 2026 | Stronger |

**What it is worth** (the 04 file's model, which I adopt; reconciliation in section 10):

| Case | Paying firms at month 36 | ARR at month 36 | Year-3 profit before founder pay and income tax | Peak cash need (no founder pay) |
|---|---|---|---|---|
| Low | 26 | S/ 151,000 (US$ 44,000) | about S/ -2,000 | S/ 67,000 (US$ 19,000) if stopped at the 31 Jan 2027 gate; S/ 96,000 (US$ 28,000) if stopped at month 9 |
| **Base** | **74 (21% of 350 obliged firms)** | **S/ 410,000 (US$ 119,000)** | **S/ 201,000 (US$ 58,000)** | **S/ 65,000 (US$ 19,000)** |
| High | 122 | S/ 708,000 (US$ 205,000) | S/ 429,000 (US$ 124,000) | S/ 51,000 (US$ 15,000) |

- If the lawyer and the security test cost what the top of the 03 file's ranges says, add about S/ 40,000 (US$ 12,000) to year 1 (my estimate). **Plan a reserve of S/ 100,000-130,000 (US$ 29,000-38,000).**
- **This is a good small business, not a living on its own.** In the base case, the founder can draw about S/ 8,000 (US$ 2,300) a month from year 2. A larger income needs the high case, other Peruvian obliged sectors, or Colombia.
- A sale at month 36 in the base case might fetch about 2-4x revenue: **S/ 0.8-1.6 million (US$ 240,000-470,000)** ([FE International](https://www.feinternational.com/blog/saas-valuation-multiples), search summary).

**Why 6 and not higher.** The base case needs 1 in 5 of all obliged firms within 3 years. Enforcement is light: the last public gaming SPLAFT fines found are from 2022 ([Andina](https://andina.pe/agencia/noticia-casinos-y-tragamonedas-mincetur-realizo-mas-1300-visitas-fiscalizacion-908865.aspx)). Selling to family-run provincial firms from abroad needs local people, and selling costs make up about 60% of spend. A local company is also needed.

**Why not lower.** The deadline lines up with the build. No competitor does the job. The RO is a daily legal record that must live in software, which makes the product sticky. The test is cheap, and the kill dates come early.

**Key conditions.**

1. **A practising gaming compliance officer on board from week 0.** Only a registered officer can download the RO and ROSEL templates from Portal PLAFT (Art. 14.6). Without them, the RO export cannot be finished.
2. **Live by 14 Dec 2026 at the latest.** If the software slips, sell the "Kit IAOC 2026" as a done-with-you service, so the February season still earns money.
3. **The company route is decided this week.** Open a Peruvian S.A.C. unless the founder's company is resident in one of the five treaty countries (section 9).
4. **The lawyer confirms in week 1 that a tablet signature works** on the mandatory SBS client sworn statement (Art. 10.3). If not, the cage flow needs print-sign-scan.
5. **The paying-firm gates are met:** at least 2 design partners from 25 conversations by 15 Nov 2026, 4 paying firms by 31 Jan 2027, and 6 by 30 Apr 2027 (section 13).

**Do this first** (week of 12 Oct 2026): sign the partner compliance officer and a Lima AML lawyer, decide the company route, freeze the specs, and pull the 301 firms into a CRM. The full list is in section 15.

---

## 2. Why now: the law and enforcement

**Legal basis.**

- Ley 27693 makes casinos, slot-machine operators and remote-gaming firms reporting entities (obliged subjects). MINCETUR's gaming directorate (DGJCMT) supervises and sanctions them ([01 file](01-law-and-requirements.md); [PRCP Lexmail](https://prcp-r2-prd.postedin.com/Lexmail-Aprueban-la-Gu%C3%ADa-de-identificaci%C3%B3n-y-reporte-de-alertas-aplicable-a-los-sujetos-obligados-a-informar-a-la-UIF-Per%C3%BA-2.pdf)).
- **Land-based firms:** Res. SBS 01015-2026, published 8 Apr 2026, in force 9 Apr 2026, with no adaptation period. It also rewrote the sanctions annex ([LP Derecho copy](https://img.lpderecho.pe/wp-content/uploads/2026/04/Resolucion-SBS-01015-2026-LPDerecho.pdf); [MINCETUR copy](https://consultasenlinea.mincetur.gob.pe/casinos/Splaft/pdf/Resoluci%C3%B3n_SBS_01015_2026.pdf)).
- **Online firms:** Res. SBS 03622-2025, in force 15 Oct 2025, with 120 days to implement, so it applied fully from 12 Feb 2026 ([PDF](https://img.lpderecho.pe/wp-content/uploads/2025/10/Resolucion-SBS-03622-2025-LPDerecho.pdf); [PRCP](https://prcp-r2-prd.postedin.com/o-apuestas-deportivas-a-distancia-bajo-supervisi%C3%B3n-del-Ministerio-De-Comercio-Exterior-Y-Turismo-3.pdf), search summary).
- **Who is obliged:** every legal entity authorised by MINCETUR to run casino games or slot machines. The company is the obliged subject, not the room. Each company in a group is a separate obliged subject (Norma Art. 1.1).
- **There is no small-firm exemption.** These are the only reliefs (Norma Arts. 3.6, 4.1, 16.8, 18.1, 19.4):
  - Only firms with a casino room, 500+ machines, or a room in Tacna, Puno, Ucayali, Loreto, Tumbes or Madre de Dios must do the formal risk assessment.
  - The general manager may be the part-time officer only if the firm is a medium or small taxpayer (MEPECO), has 10 or fewer workers, is not in a group and does only gaming.
  - Other reliefs: the IAI can be written by a manager who is not the officer; a firm may use its trade association's manual; and UIF-Perú may grant case-by-case exemptions.

**What must exist, and when** (summary of the 37-row table in the [01 file](01-law-and-requirements.md); article numbers are from Res. SBS 01015-2026 unless marked):

| Duty | Deadline or frequency | Fine per infraction (1 UIT = S/ 5,500) |
|---|---|---|
| Approved policies, manual and code of conduct; a signed receipt from every in-scope worker | Receipts within **30 days** of each new version (Art. 16) | 4-5 UIT |
| Compliance officer appointed and notified to DGJCMT and to UIF via SISDEL | Within **15 business days**; changes within 5 business days (Arts. 19-22) | 3-7 UIT |
| Client due diligence on every RO client, using the **mandatory SBS sworn-statement form** (digital signing allowed) | At each RO operation (Arts. 8-10) | 5-6 UIT |
| Worker and director files; supplier files (new) | Workers yearly; suppliers at least every **2 years** (Arts. 11-12) | 2 UIT (workers); supplier fine unclear |
| **RO**: cash-outs of US$ 2,500 or more, and every promo winner; kept on the day in software, with a backup; sent to UIF on the SBS template | Daily; sending frequency set by the SBS (not found) (Art. 14) | 4-7 UIT |
| Unusual operations analysed in writing; suspicious transaction report (ROS) via ROSEL | ROS within **24 hours** of being judged suspicious (was 15 business days) (Art. 15) | 7 UIT (analysis); **8 UIT** (late ROS) |
| UN Security Council list checks; immediate freezes | Permanent (Art. 25) | **8 UIT** |
| 30-day induction for new workers and directors; one training per person per year | Induction within **30 days** of start (Arts. 6-7) | 1-3 UIT |
| IAOC (13 set items, including monthly RO statistics, shareholders, every room's location) and IAI (10 points) | Approved by **30 Jan**; sent by **15 Feb** to both MINCETUR and UIF, in **different formats** (Arts. 18, 27) | 4-7 UIT |
| Keep all records | At least **5 years** (Art. 28) | 5 UIT |

The fine ladder is 1-3 UIT (minor), 4-7 UIT (serious) and 8 UIT (very serious), so S/ 5,500-44,000 per infraction ([01 file](01-law-and-requirements.md); [UIT 2026](https://elperuano.pe/noticia/285208-mef-establece-en-s-5-500-la-unidad-impositiva-tributaria-para-2026)). Since 25 Apr 2026, officers must also report non-suspicious "alerts" through ROSEL ([El Peruano](https://elperuano.pe/noticia/294259-sbs-aprueba-guia-de-identificacion-y-reporte-de-alertas)).

**What the portals leave undone** (the owner's first test). The portals are filing channels only. Portal PLAFT holds the RO template and receives the RO and IAOC. ROSEL takes ROS and alerts. SISDEL takes officer appointments. All three are for the officer only ([SBS Portal PLAFT](https://www.sbs.gob.pe/prevencion-de-lavado-activos/supervisados/plaft-portal-de-prevencion-de-lavado-de-activos-y-financiamiento-del-terrorismo)). MINCETUR takes a second IAOC in its own format ([MINCETUR 2017](https://consultasenlinea.mincetur.gob.pe/casinos/Agenda%20_Noticias/pdfs/2017/Presentacion_Charla_SPLAFT.pdf)). No portal keeps:

- the client files and sworn statements;
- the RO in progress, or its backup;
- worker and supplier files, or their refresh cycles;
- induction and training proof;
- the unusual-operation analyses;
- the monthly statistics that the IAOC needs.

That gap is the product. A free portal is not a reason to drop the idea here. It is the reason the idea exists.

**Enforcement evidence.**

- **2016 cycle:** 333 obliged firms. MINCETUR got 314 IAOCs on time, 6 late and 13 never. UIF got 169 on time, 112 late and 52 never. MINCETUR also listed 153 procedures and 235 UIT in SPLAFT fines, period not stated ([MINCETUR 2017](https://consultasenlinea.mincetur.gob.pe/casinos/Agenda%20_Noticias/pdfs/2017/Presentacion_Charla_SPLAFT.pdf)).
- **2022:** 1,346 inspection visits in January to August. 30 firms were fined 150 UIT, mostly for non-AML breaches. Separately, **10 firms were sanctioned for not filing the IAOC** ([Andina](https://andina.pe/agencia/noticia-casinos-y-tragamonedas-mincetur-realizo-mas-1300-visitas-fiscalizacion-908865.aspx)).
- **2023-2026:** no published gaming SPLAFT sanctions were found (unverified). Press coverage of the new rule talks of "less tolerance for compliance failures" ([El Peruano, Carlos Caro](https://elperuano.pe/noticia/293055-carlos-caro-nueva-norma-contra-lavado-de-activos-implica-menor-tolerancia-ante-fallas-de-cumplimiento)).
- **What lies ahead:** FATF/GAFILAT's fifth-round evaluation of Peru starts in 2026 ([Gestión](https://gestion.pe/economia/uif-detalla-preparativos-para-la-quinta-ronda-de-evaluaciones-del-gafi-compliance-camara-de-comercio-de-lima-sunat-sbs-evaluacion-corrupcion-noticia/), search summary). Such evaluations usually mean more supervision of casinos and similar firms (my inference).
- **Honest reading:** the duty and the fines are real. The chance of a fine in a given year is unknown and probably low. Sell time saved and calm at inspections, not fear.

**Other changes to track** ([01 file](01-law-and-requirements.md), "Upcoming changes"):

- The SBS can change the RO structure and sending frequency by resolution (Art. 14.6), so the export must be configurable.
- There is a conflict on the PEP (politically exposed person) look-back: the Norma says 2 years, but the general SBS PEP rule says 5 years ([Res. SBS 00199-2025](https://img.lpderecho.pe/wp-content/uploads/2025/01/Resolucion-00199-2025-LPDerecho.pdf)). Default to 5 years.
- The new data-protection regulation (DS 016-2024-JUS) is in force since 30 Mar 2025 ([IAPP](https://iapp.org/news/a/se-publica-el-nuevo-reglamento-de-protecci-n-de-datos-personales-en-per-); [Cuatrecasas](https://www.cuatrecasas.com/es/latam/propiedad-intelectual/art/nuevo-reglamento-ley-de-proteccion-datos-personales)).

---

## 3. Customers

**Who the buyers are.** All counts are from MINCETUR's live registers, pulled on 10 Oct 2026 ([02 file](02-market-and-competition.md)). I use these counts. The older figures were 325 firms from an undated slide ([Congreso PDF](https://www.congreso.gob.pe/Docs/comisiones2023/comercio/files/ppt_mincetur_congreso_-_ica_-_dgjcmt.pdf), now 404) and 91 online licences from a secondary source. Both are superseded.

| Segment | Count | Regime | Role in the plan |
|---|---|---|---|
| Land-based firms, 1 room | 185 (85 outside Lima and Callao); median 80 machines | Mostly lighter regime | **Core: Sala plan** |
| Land-based firms, 2-3 rooms | 89 | Mixed | **Core: Cadena plan** |
| Land-based firms, 4-10 rooms | 21 | Mixed | Cadena Plus |
| Land-based firms, 11+ rooms | 6 (Nevada Entretenimientos has 75 rooms) | Full risk regime | Corporativo; may have in-house systems |
| **All land-based obligated firms** | **301** (675 rooms; 69,601 machines) | 60 on the full risk-assessment regime, 241 lighter | Core market |
| Online companies | 49 (95 registrations, 53 domains) | Online norma | Side market, add-on from v1 |
| Betting-shop network holders | 23 (4,497 shops; La Tinka 1,949, King Tech 1,083) | Online norma; agents are users, not buyers | Upside, later |
| **Working buyer base** | **350 distinct obligated firms** | | |

Sources: [room register](https://consultasenlinea.mincetur.gob.pe/casinos/Registros/registros.html?c=r_salasjuegos); [online licence register](https://apuestasdeportivas.mincetur.gob.pe/Titulares_autorizacion.html); [betting-shop register](https://apuestasdeportivas.mincetur.gob.pe/Registro_Salas_apuestas_deportivas.html).

- **The pool shrinks slowly:** 333 firms (2017), 330 (2021), about 325 (2024), 301 (2026) ([MINCETUR 2021](https://consultasenlinea.mincetur.gob.pe/casinos/Agenda%20_Noticias/pdfs/2021/DGJCMT_Nov_2021.pdf); [02 file](02-market-and-competition.md)).
- **Half are outside Lima.** 154 of 301 firms have a room outside Lima and Callao. The biggest regions after Lima are Arequipa, Loreto, Ica and Junín (my count in the 02 file).
- **The owner's test on size.** 301 core buyers is a few hundred. That works only if set-up is self-serve (under 45 minutes), the price is well below a part-time officer's pay, and the founder reaches them without a field sales team. The plan is built on those three conditions.

**Who buys, who uses.**

- The **compliance officer** is the champion. Often part-time, one firm at a time (Art. 19.2).
- The **general manager** pays and approves.
- **Cashiers and room managers** do the daily typing at the cage. Every RO cash-out and every promo winner needs a client sworn statement.
- **Consultants, law firms and trainers** (PRCP, Caro & Asociados, PLAFT Suite, plaftperu) serve many firms. They are a channel, not the officer.

**Pain a tool fixes** ([02 file](02-market-and-competition.md)):

1. Assembling the IAOC in two formats by 15 February, with monthly statistics, shareholders and room locations.
2. RO capture, including every promo winner, with the new client fields. Missing RO data costs 7 UIT (S/ 38,500).
3. Proof of the 30-day induction and of yearly training, in rooms with shift work and staff turnover (turnover unverified).
4. Refresh cycles: workers yearly, suppliers every 2 years, the risk assessment every 3 years.
5. The 24-hour ROS clock and the officer-only secrecy rules.

**Willingness to pay.**

| Anchor | Amount | Source |
|---|---|---|
| Compliance officer at a small obliged firm (one job ad) | S/ 2,000 a month | [Computrabajo](https://pe.computrabajo.com/trabajo-de-oficial-de-cumplimiento) |
| Annual SPLAFT course | S/ 169-211 per person | [Seminarios Top](https://seminariostop.com/seminarios-y-talleres/curso-anual-a-oficiales-de-cumplimiento-y-sujetos-obligados-a-informar-a-la-uif-sbs-laft/) |
| Generic compliance SaaS (Pirani Starter) | about US$ 3,645 a year, AML module extra | [Pirani pricing](https://piranirisk.com/es/planes-y-precios/cumplimiento-normativo?hsLang=en) (unverified) |
| Gaming tax per 80-machine room | about S/ 240,000 a year | [Infomercado](https://infomercado.pe/impuestos-de-casinos-y-tragamonedas-sumarian-s-210-millones-en-2023-segun-mincetur-ms/), my estimate in the 02 file |
| Consultants and law firms | quote only | [02 file](02-market-and-competition.md) |

A one-room firm already pays about S/ 24,000 a year for an officer. At S/ 2,900 a year, the tool costs about 12% of that. One 7 UIT fine equals about 13 years of the tool (my calculation).

---

## 4. Competition

| Alternative | What it covers | Gaming fit | Price | Verdict |
|---|---|---|---|---|
| SBS/UIF portals (Portal PLAFT, ROSEL, SISDEL, list pages) | Filing; UN and PEP look-ups | Generic | Free | Filing only. A complement, not a rival |
| **Excel, Word and paper** | Everything, by hand | - | Staff time | **The real incumbent** at small firms (unverified) |
| Law firms and consultancies (PRCP, Caro & Asociados, Garrigues, plaftperu, Grupo Contable) | Manuals, code, training, audit, IAOC help | PRCP is active in gaming | Quote | Today's main "solution". Mostly a channel |
| Pirani (Colombia) | Risk matrix, segmentation, screening | None | about US$ 3,645 a year plus AML add-on | Too generic and too dear for an 80-machine room; no RO or IAOC |
| Inspektor / PLAFT Suite; Experian Listas PLAFT; verifica.id | List and PEP screening; some consulting | verifica.id sells a MINCETUR gambling-ban check | Quote | Screening partners, not rivals |
| GBG, KYCAID; platforms (SoftConstruct, Techsson, Calimaco, VPL) | Online KYC; platform AML monitoring | Online only | Usage or revenue share | Online firms need only an RO export and IAOC layer |
| **SUCTR system vendors** (29 registered: IGT, Win Systems/WIGOS, Cirsa and about 10 Peruvian SACs such as Link Tek, Wargos, Orion Consulting) | Machine and cash-out data, linked live to MINCETUR and SUNAT | Gaming | Bundled | No AML workflow found. **The most likely entrant, and the best partner** |
| **KYC Systems (Mexico)** | Vertical gaming AML software: client ID, beneficial owner, lists, monitoring | Gaming | Demo, no price | Mexico only. **The model to copy and the likeliest foreign entrant** |

Sources: [Pirani Peru page](https://www.piranirisk.com/es/hub-regulatorio/splaft-uif-sistema-antilavado-peru); [PLAFT Suite](https://plaft-suite.com/risk-consulting); [Experian](https://www.experian.com.pe/grandes-empresas/autenticacion-y-prevencion-del-fraude/listas-plaft); [verifica.id](https://verifica.id/reporte-pep-plaft-aml/); [GBG](https://www.gbg.com/en/blog/igaming-and-kyc-in-peru/); [KYCAID](https://kycaid.com/blog/peru-vs-brazil-compliance-comparison/); [SUCTR register](https://consultasenlinea.mincetur.gob.pe/casinos/Registros/registros.html?c=r_modelosuctr); [WIGOS](https://soloazar.com/en/category/casino/win-systems-reaches-300-casinos-with-its-wigos-cms); [KYC Systems](https://kyc-systems.com/actividades-vulnerables/software-antilavado-juegos-apuestas-sorteos.html); [PRCP](https://prcp-r2-prd.postedin.com/FT-y-FP-incorporadas-por-la-Resolución-SBS-N°-01015-2026.pdf); [plaftperu](https://www.plaftperu.com/).

**Conclusion.**

- **The incumbents are partial, so there is an opening.** No product found covers the casino RO with promo winners, the SBS sworn statement at the cage, the induction tracker or the two-format IAOC.
- **Screening: build it on the free lists, and buy only the extras.** The 02 file suggested buying screening from a partner. The 03 file then tested the UN (1,010 entries), OFAC (19,416) and EU (6,241) lists as free downloads. Screening against UN lists is an 8 UIT duty, so it should sit inside the product. Partners are for paid PEP name data and ID checks only.
- **The real threat is a SUCTR vendor adding an RO module.** These vendors already hold the cash-out data in every room. The answer is to partner with one Peruvian SUCTR vendor early (section 8), and to move fast through the 2027 IAOC season.

---

## 5. Product

### Positioning

**"SPLAFT Sala": the SPLAFT running file for Peruvian slot rooms and casinos.** It keeps the records Res. SBS 01015-2026 demands and the portals do not keep. It then builds the IAOC and the inspection pack from those records.

- **For:** the 301 land-based firms first, starting with the 185 single-room firms and the 89 small chains.
- **Against:** Excel and paper, and the consultant's yearly scramble before 15 February.
- **Promise:** "Your RO, staff files and IAOC, ready for MINCETUR and UIF, for less than a month of an officer's pay a year."
- **What it is not:**
  - **It does not file.** Only the registered officer can use Portal PLAFT, ROSEL and SISDEL, with secret codes. The product prepares upload-ready files and records the receipts (Arts. 14.6, 15.3, 26).
  - **It is not the officer.** The rule allows one officer per firm.
  - **It is not legal advice.** Every template carries "reviewed by [Peruvian law firm] on [date]".

### Users

| Role in the app | Who | How often | Device |
|---|---|---|---|
| Officer (oficial de cumplimiento), plus an alternate | Often part-time; sometimes the general manager in a very small firm | Daily to weekly; heavy from December to February | Laptop |
| General manager or board | Approves the manual, code, IAOC, IAI and high-risk clients | Monthly to yearly | Phone or laptop |
| Cashier and room manager | Log cash-outs and promo winners; get the client to sign | Every shift | Shared tablet at the cage |
| HR (often the administrator) | Adds workers and directors | Weekly | PC |
| Internal auditor | Writes the IAI; must not be the officer | Yearly | Laptop |
| Adviser (consultant or law firm) | Serves 5-30 firms; cannot sign as officer | Weekly | Laptop |
| Worker, director, supplier, client | Self-service forms and signatures | A few times a year; the client signs per RO operation | Phone or cage tablet |

Source: [03 file](03-product-and-tech.md), "Users and jobs".

### Feature map

The MVP must run a small slot-room firm's whole SPLAFT and produce the first new-format IAOC, due 15 Feb 2027 ([03 file](03-product-and-tech.md)).

| # | Feature | MVP | v1 (Feb-Jun 2027) | Later | Requirements in the [01 file](01-law-and-requirements.md) |
|---|---|---|---|---|---|
| 1 | Firm profile and regime engine: rooms pre-filled from MINCETUR's register; "risk assessment required?"; "may the general manager be the officer?" | Yes | Groups and corporate officer | - | R1-R7 |
| 2 | Deadline engine: Peruvian business days and holidays; calendar days where the Norma says "días"; daily digest | Yes | WhatsApp reminders | - | R9 |
| 3 | RO register: cash-outs of US$ 2,500 or more at last month's average SBS selling rate; every promo winner; append-only; backup | Yes | - | - | R27-R34 |
| 4 | Import of cage, ticket and promo exports (CSV/Excel mapper; a human confirms each row) | Generic | Presets for common SUCTR systems | Direct vendor feed | R35 |
| 5 | RO export on the Portal PLAFT template (configurable mapping) and a sending tracker | Yes | - | - | R36-R37 |
| 6 | Client file and SBS sworn statement signed on a tablet; "refused" blocks the operation and opens a ROS task | Yes | - | ID scan | R16-R19, R22, R25 |
| 7 | Enhanced due diligence routing (PEP, non-resident, linked persons) with senior approval | Yes | - | - | R20-R24 |
| 8 | List screening (UN, OFAC, EU) of clients, staff, directors and suppliers; full re-screen on each list change | Yes | Paid PEP data option; FATF notices | - | R49-R51, R53, R55 |
| 9 | Freeze case on a confirmed UN match | Yes | - | - | R52 |
| 10 | Unusual operations and ROS: officer-only case file, 24-hour clock, ROSEL draft with an identifier-leak check | Yes | Alert drafts | - | R26, R40, R43-R47 |
| 11 | Detection rules (near-threshold cash-outs, repeat raffle winners, shared accounts) | Signal library only | Configurable rules | Scoring | R41-R42, R48 |
| 12 | Worker and director files via self-service links; yearly checks | Yes | Disciplinary register | - | R6, R54-R56, R58 |
| 13 | 30-day induction and yearly training against the 11 required topics; certificates; IAOC statistics | Yes | Short video course | Course marketplace | R57, R59-R63 |
| 14 | Supplier files with 2-year refresh | Yes | Supplier self-service; RUC auto-fill | - | R64-R67 |
| 15 | Manual, code and policy templates (lawyer-approved); versions; 10-field receipt statements due in 30 days | Yes | Template diff on rule change | - | R68-R71 |
| 16 | Officer register: appointment pack and SISDEL clocks; officer identity hidden; no storage of secret codes | Yes | - | - | R72-R75 |
| 17 | **IAOC (UIF and MINCETUR versions) and IAI checklist**; approvals by 30 Jan; receipts by 15 Feb | Yes | - | - | R76-R78 |
| 18 | Inspection pack (ZIP and merged PDF) | Yes | Read-only inspector link | - | R82-R83 |
| 19 | 5-year retention, tamper-evident audit log, full export on exit | Yes | - | - | R80, R84, R86 |
| 20 | Adviser console | Firm switcher | Portfolio view, bulk template updates | Revenue-share billing | R75 |
| 21 | Risk-assessment module (60 firms, plus all online firms) | Word template | Full module | - | R10-R15 |
| 22 | Online operator pack (deposits, withdrawals, bets and wins of US$ 2,500 or more) | - | Yes | - | R3, R38 |
| 23 | Information-request and remediation registers | Free text | Yes | - | R79, R81 |
| 24 | Betting-shop network add-on (agent capture at the till; agent due diligence; per-shop price) | - | - | Yes | [02 file](02-market-and-competition.md) |

### Key flows

Detail is in the [03 file](03-product-and-tech.md), flows 1-10. These are the ones that sell the product:

1. **Set-up in under 45 minutes.** Sign up with the RUC. The rooms load from MINCETUR's register, and the app shows the regime. The officer uploads the staff and shareholder lists, and each person gets a self-service link. The lawyer-approved manual and code are generated, and the GM approves them in the app. Screening runs on everyone loaded.
2. **Cash-out at the cage in under 3 minutes for a known client.** The amount in soles is checked against last month's average SBS selling rate (S/ 8,458.07 for October 2026, from the [BCRP API](https://estadisticas.bcrp.gob.pe/estadisticas/series/api/PD04640PD/json)). The cashier types the ID number. A known client's data appears, and a new client gets the Art. 10.1 form. Screening runs, and a UN hit stops the flow. The client signs on the tablet. The RO row is saved and cannot be deleted.
3. **Promo winners.** Each winner of any amount gets an RO row and a sworn statement. The day's winners can be imported.
4. **Unusual operation to ROS within 24 hours.** The officer writes the analysis. A "suspicious" decision starts the clock and builds a ROSEL draft. The export is blocked if the firm's name, RUC or the officer's name appears. The officer files in ROSEL and types in the receipt number.
5. **New hire.** The worker gets a self-service link and a 30-day induction task. The task closes only with a signed record.
6. **Year end, 1 Dec to 15 Feb.** A data-quality check runs on 1 Dec. The IAOC is pre-filled in both formats. A non-officer completes the IAI checklist. The GM approves by 30 Jan, and both receipts are uploaded by 15 Feb.
7. **Inspection.** One click builds the pack for a date range. ROS content is shown to the officer only.

### Screens

There are 19 screens ([03 file](03-product-and-tech.md), "Screens"):

- **Main screens:** Panel (traffic lights for 10 duty areas, today's tasks and any running ROS clock); Calendario; Caja (cage mode with four big buttons that locks after 2 minutes idle); Registro de operaciones; Importar; Cliente; Coincidencias (screening hits); Casos (officer only).
- **Records:** Personal; Capacitaciones; Proveedores; Documentos; Oficial de cumplimiento (restricted).
- **Year end and admin:** Informe anual (wizard); Inspección; Configuración; Cartera (adviser); self-service pages; Bitácora (audit log).

**Requirements list:** the 86 testable requirements, each tied to an article, are in the [01 file, "PRODUCT REQUIREMENTS"](01-law-and-requirements.md). Every automated test names the requirement it proves, and CI generates a traceability matrix R1-R86. The matrix is also a sales asset.

---

## 6. Technical design

**Bottom line.** No state portal has an API, and only the officer can use them. So the product keeps records and produces upload-ready files. Every outside feed the MVP needs is free and machine-readable. Each was tested by script on 10 Oct 2026 ([03 file](03-product-and-tech.md)).

**Data feeds.**

| Feed | Use | Phase |
|---|---|---|
| MINCETUR room register (public JSON service; 675 rooms, 301 RUCs) ([register](https://consultasenlinea.mincetur.gob.pe/casinos/Registros/registros.html?c=r_salasjuegos)) | Pre-fill rooms, departments and machines; regime trigger; IAOC item 13 | MVP |
| BCRP series PD04640PD, the SBS banking-system selling rate ([API](https://estadisticas.bcrp.gob.pe/estadisticas/series/api/PD04640PD/json)) | Monthly RO threshold. The SBS site blocks scripts, so BCRP is used and the officer confirms it | MVP |
| UN consolidated list ([XML](https://scsanctions.un.org/resources/xml/en/consolidated.xml)), OFAC SDN ([XML](https://sanctionslistservice.ofac.treas.gov/api/PublicationPreview/exports/SDN.XML)), EU list (free personal token) | Screening; 6-hourly refresh | MVP |
| SBS PEP-positions list and SBS client sworn-statement model ([forms page](https://www.sbs.gob.pe/prevencion-de-lavado-activos/Supervisados-UIF/Modelo-de-Declaracion-Jurada)) | Picklist and the mandatory form; loaded by hand, because the SBS blocks scripts | MVP |
| Portal PLAFT RO template, ROSEL template | Export mappings. **Only through a partner officer** | MVP (configurable placeholder until in hand) |
| Cage, ticket and promo exports from SUCTR systems | Import; no public format found | MVP generic, v1 presets |
| SUNAT reduced RUC register ([guide](https://orientacion.sunat.gob.pe/padron-reducido-del-ruc-para-descarga)); online and betting-shop registers | Supplier auto-fill; online and shop pre-fill | v1 |
| OpenSanctions Peru PEPs (1,336, thin; non-commercial licence) ([OpenSanctions](https://www.opensanctions.org/countries/pe/)) | Optional paid PEP data | v1 option |
| RENIEC ID checks (S/ 0.90-1.60 a query, each firm's own agreement) ([RENIEC to Congress](https://www.congreso.gob.pe/Docs/comisiones2024/Ciencia/files/reniec_congreso_05may25_(1).pdf), search summary) | ID verification | Later |

**Stack** (chosen so that one founder with parallel AI agents can build and run it):

- **Python 3.13 and Django 5.2 LTS**, with security support to April 2028 ([Django](https://www.djangoproject.com/download/)). Pages are server-rendered with HTMX. There is no single-page app.
  - Each module is its own Django app, which gives clean boundaries for parallel agents.
  - The built-in admin lets the lawyer edit templates and code tables.
- **PostgreSQL 17.** It uses trigram search for names, JSONB for form answers and IAOC snapshots, and row-level security as a second wall between tenants.
- **Background jobs on a Postgres-backed queue**, so no Redis. Jobs:
  - every 6 hours: list refresh and re-screen;
  - monthly: FX fetch;
  - nightly: deadline sweep, RO backup and register refresh;
  - weekly: retention sweep.
- **Documents:** docxtpl (Word templates the lawyer can edit), Gotenberg/LibreOffice and WeasyPrint for PDFs, openpyxl for Excel, and pypdf for the merged inspection pack.
- **Rules as data.** Thresholds, deadline rules, the IAOC structure and the RO export mapping sit in versioned tables with "golden" tests. When the SBS changes a template, we change data, not code.
- **Signatures:** a canvas signature pad that stores the image, timestamp, device and a SHA-256 hash. The Norma allows "digital mechanisms" for the client form (Art. 10.3). Whether inspectors accept this simple e-signature is open. The fallback is print, sign and scan ([DS 052-2008-PCM](https://portal.ingemmet.gob.pe/documents/59082/1380545/DS-052-2008-pcm.pdf)).
- **No AI model inside the product at launch.** Case data must never go to an outside AI service. AI builds the product; it does not process customer data.
- **No offline mode.** Rooms already have a live link, because every machine reports in real time through the SUCTR ([MINCETUR 2019](https://consultasenlinea.mincetur.gob.pe/casinos/Agenda%20_Noticias/pdfs/2019/DGJCMT_JUNIO_2019_2.pdf)). A paper form typed in later and flagged "late" covers outages.

**Data model (main tables).**

- **Firm and tenancy:** Firm, Room, Group, Membership (roles).
- **People and due diligence:** Person (one table for clients, staff, shareholders and suppliers' people, so one screening run covers all roles); ClientProfile; SwornStatement (append-only).
- **RO:** FxMonth; ROEntry (append-only; corrections point to the old row); ImportBatch; ROExportMapping; ROSubmission; BackupCopy.
- **Screening:** ListVersion; ScreeningRun; HitDecision.
- **Officer-only compartment:** Escalation, UnusualCase, RosDraft and FreezeCase, encrypted with a separate per-firm key.
- **Staff, training, suppliers and documents:** StaffFile; Induction; TrainingSession; Supplier; DocumentVersion; ReceiptStatement; OfficerRecord (with no field for UIF secret codes); AnnualReport.
- **Engine:** DeadlineRule, Holiday, Task, AuditEvent (hash-chained) and RetentionHold.

Full list: [03 file](03-product-and-tech.md), "Data model".

**Security, secrecy and data protection.**

- **AML secrecy comes first.** Tipping off and a late ROS cost the customer 8 UIT. Exposing the officer costs 7 UIT ([01 file](01-law-and-requirements.md)). The product's answers:
  - an officer-only case compartment that our support staff cannot open;
  - no case content in e-mails or logs;
  - internal auditors see only "ROS filed on time: yes/no";
  - the ROSEL leak check.
- **Baseline protections:**
  - TLS, and two-factor login for the officer, GM, adviser and admin. Cashiers use a PIN inside a session the room manager opens.
  - Argon2 password hashing.
  - Row-level security, with tests that try cross-tenant reads on every table.
  - Envelope encryption for files.
  - Nightly backups with point-in-time recovery, plus a copy at a second provider. A monthly restore drill must reproduce the RO hash.
  - An external penetration test before paid launch, then yearly.
- **Peru's data-protection law** (Ley 29733 and DS 016-2024-JUS):
  - Each casino firm is the controller and we are its processor, so a processing contract is needed.
  - Data hosted outside Peru needs the authority's model contract clauses ([CERLATAM circular](https://www.cerlatam.com/wp-content/uploads/2025/12/Circular-Externa-CCM-v.2.pdf)).
  - Breaches must be notified within 48 hours. Our contract promises the customer notice within 24 hours.
  - Fines run up to 100 UIT ([LexLatin](https://lexlatin.com/reportajes/proteccion-datos-personales-peru-empresas-oficial-cumplimiento-reforma), search summary).
  - AML retention (5 years) overrides erasure requests.
- **Contradiction settled: does a foreign vendor need a representative in Peru?**
  - Files 01 and 03 said a foreign firm must name a representative in Peru. File 04 said the IAPP summary does not mention one.
  - Cuatrecasas confirms that foreign organisations offering services to people in Peru must designate a representative before the data authority ([Cuatrecasas](https://www.cuatrecasas.com/es/latam/propiedad-intelectual/art/nuevo-reglamento-ley-de-proteccion-datos-personales)). The exact article was not found (unverified).
  - **I treat it as required.** A Peruvian S.A.C. covers it anyway.

**Hosting and running costs.**

- **Hosting choice:**
  - Peru does not require local storage, but cross-border transfers need adequate protection or contract clauses.
  - Host in a **US East region** at first, at about 80-110 ms latency (my estimate). Use an EU region if the founder's company is in the EU.
  - AWS announced a Chile region for "by the end of 2026" ([Amazon](https://press.aboutamazon.com/aws/2025/5/amazon-to-invest-more-than-4-billion-to-launch-infrastructure-region-in-chile)). Revisit in 2027. Keep the deployment portable.
- **Running cost:** about **US$ 55-115 a month at 50 customers** and US$ 200-360 at 300 customers. That is 1-3% of revenue ([03 file](03-product-and-tech.md), estimates).

---

## 7. Development steps

### Reconciled timeline

- **The conflict:**
  - The 03 file has specs in week 0 (from 12 Oct), code complete on 6 Nov, pilots, then "sellable" on 14 Dec 2026.
  - The 04 file has the MVP done on 1 Nov and a public launch on Tuesday 1 Dec.
- **The reconciliation:**
  - **Build starts on 19 Oct and is code complete on 6 Nov.** This follows the 03 file, which is more realistic about the foundation step.
  - **Founding pre-sales and the Kit IAOC 2026 open on 1 Dec.** This keeps the 04 file's date. The kit does not need the finished software, because the founder and the partner officer can produce it from the customer's spreadsheets.
  - **Paid self-serve launch on 7 Dec, or 14 Dec at the latest,** once the definition of done below is met. 8-9 Dec are public holidays ([La República](https://larepublica.pe/economia/2025/12/26/feriados-2026-en-peru-calendario-oficial-con-fines-de-semana-largos-y-puentes-para-planificar-tu-ano-1697462)).
- This fits the owner's frame: an MVP in about 3 weeks, and sellable in about 8 weeks once legal content, the security test and pilots are done.

### Agent work streams

The founder works with Claude Code and several agents in parallel, each in its own git worktree and Django app. There are no hired developers. The foundation is built first and alone, so that five agents do not invent five versions of `Person`.

| Stream | When | Scope | Key acceptance tests |
|---|---|---|---|
| **S0 Foundation** (founder + 1 agent) | Days 1-3 | Tenancy, roles, two-factor login, row-level security, hash-chained audit log, deadline engine and holidays, file store, CI, MINCETUR register import | Cross-tenant reads fail on every table; a 15-business-day clock skips weekends and holidays, and a 30-calendar-day clock does not |
| **S1 RO and imports** | Days 4-12 | BCRP FX, thresholds, cash-out and promo rows, append-only corrections, CSV mapper, export mapping, sending tracker, nightly backup | Golden tests on real September 2026 rates; a S/ 50 prize is logged; no setting can exclude a client |
| **S2 Clients and screening** | Days 4-12 | Art. 10.1 form, SBS sworn-statement PDF, tablet signature, refusal path, enhanced due diligence, UN/OFAC/EU ingestion and matching, hit queue, freeze case | 50 listed names caught, including accent and double-surname variants; a UN hit opens a freeze case |
| **S3 Staff, training, suppliers** | Days 4-12 | Self-service files, excluded roles, yearly checks, 30-day induction, sessions against the 11 topics, certificates, supplier refresh | Day 31 with no induction record shows overdue; the officer cannot certify their own training |
| **S4 Documents and reporting** | Days 4-15 | Templates and versions, receipts, officer clocks, IAOC (two formats), IAI checklist, inspection pack, retention, export | IAOC monthly totals equal the registers; the IAI author cannot be the officer; the officer's name is absent from third-party exports |
| **S5 Cases** (smaller) | Days 4-12 | Escalation, case file, non-reported register, 24-hour clock, ROSEL draft with leak check | Export blocked if the firm's RUC is in the narrative; reminders at 12 h and 2 h |
| **S6 QA and security** | All 3 weeks | End-to-end tests of the flows, permission matrix, time-travel tests for deadlines, Spanish copy, bandit, pip-audit, load test of re-screening | 100,000 stored rows re-screened in under 10 minutes |

**Founder's daily loop.** Write specs in the morning. Review and merge at fixed times, 3-5 merges a day, and keep a `CLAUDE.md` with conventions. **The founder's review time is the bottleneck, not agent speed.**

**Cut list if week 3 runs late** (cut from the top): the adviser firm switcher; the MINCETUR-format IAOC (deliver it as editable Word); supplier re-screening; freeze-case screens (keep the task and checklist); saved import mappings.

### Calendar

| Week (Monday) | Product and legal | Engineering | Pilots and sales | Gate |
|---|---|---|---|---|
| 0 (12 Oct) | Sign the lawyer and the partner officer; get the RO and ROSEL templates, an anonymised IAOC, and 2-3 cage and promo exports | `contracts.md`, stream specs, `CLAUDE.md`, repo, CI | CRM from the registers; shortlist 10 pilot firms (2 outside Lima, 1 adviser) | Specs frozen |
| 1 (19 Oct) | Lawyer drafts the manual, code, policies and induction script; **opinion on tablet signatures** | S0, then S1-S5 against stubs | IAGR Lima (19-22 Oct) for contacts; book 25 calls | Foundation merged |
| 2 (26 Oct) | Staff and supplier forms, receipt statement, officer certificate | Streams build; S6 writes end-to-end tests | Demo video of the cage flow | Stream tests pass |
| 3 (2 Nov) | Partner officer walks through the app | Integration: IAOC, IAI, inspection pack | Book 5 design partners | **MVP code complete (6 Nov)** |
| 4 (9 Nov) | Lawyer review; terms, processing agreement with model clauses, privacy notice | Fixes; backup and restore drill | Design-partner contracts (free to 31 Jan 2027) | **15 Nov: at least 2 (target 5) design partners** |
| 5 (16 Nov) | Peruvian Spanish copy edit | **External penetration test**; fixes | Pilot 1 onboarded by screen share; webinar 1 with a law firm | No open high or critical finding |
| 6 (23 Nov) | - | Pilot fixes; first import presets | Pilots 2-5 onboarded | - |
| 7 (30 Nov) | Lawyer mock inspection of 2 pilot firms | Monitoring; status page | **1 Dec: pre-sales and Kit IAOC open**; founder in Lima | Mock inspection passes |
| 8 (7 Dec) | Final terms and price list | Release candidate | Pilot references | **Definition of done met; paid launch 7-14 Dec** |
| 4 Jan-15 Feb 2027 | IAOC season support | IAOC wizard fixes | Customers approve the IAOC by 30 Jan and file by 15 Feb | First IAOCs filed from the tool |

### MVP definition of done

1. Every MVP feature works end to end in Spanish, on a laptop and on a 10-inch Android tablet.
2. Every MVP requirement has a passing test that names it, and CI generates the traceability matrix.
3. RO thresholds pass golden tests with 12 months of real BCRP rates. Every promo winner is logged, and no client can be excluded.
4. Every deadline rule passes a time-travel test across 2026-2027, including Peruvian holidays.
5. The 50-name test set is caught. False positives on pilot data stay under 1 in 20 clients.
6. The ROSEL leak check blocks the firm's name, RUC and the officer's name.
7. For the demo firm and at least one pilot, the IAOC monthly totals equal the registers, both versions render, and the lawyer signs off.
8. Tenant isolation passes, two-factor login is enforced, and the audit chain verifies. A restore drill reproduces the RO hash. There is no open high or critical penetration-test finding.
9. The lawyer has approved every customer-facing template, the terms, the processing agreement and the privacy notice.
10. At least 3 pilots have used the product for 2 weeks with real data, and at least 2 say they will pay the list price. Set-up takes under 45 minutes, and a known-client cash-out under 3 minutes.

### Build budget (cash, founder unpaid, no hired developers)

The two files agree once their scopes are lined up. The 04 file's model uses the low-to-middle end of the 03 file's ranges. I use the 04 figures as the base and the 03 top as the stress case.

| Item | Base, year 1 (04 model) | Stress, year 1 (03 top of range) |
|---|---|---|
| Claude Code (1-2 Max seats or API overflow) | S/ 10,500 (US$ 3,000) | US$ 4,800 |
| Peruvian AML lawyer (templates, IAOC structure, terms, opinions) | S/ 20,000 (US$ 5,800) | US$ 13,500 |
| External penetration test | S/ 17,000 (US$ 4,900) | US$ 9,500 |
| Hosting and tools | S/ 4,800 (US$ 1,400) | US$ 3,200 |
| Insurance (cyber and professional) | S/ 5,000 (US$ 1,400), unverified | US$ 2,500 |
| Partner compliance officer (domain adviser, also demos and pilot support) | S/ 24,000 (US$ 7,000) | US$ 7,000 |
| **Product-side total, year 1** | **about US$ 23,500** | **about US$ 40,500**, plus contingency |
| Of which spent before sellable (Oct-Dec 2026) | about US$ 11,000-13,000 | up to US$ 27,600 |

- AI tools are a small line. The lawyer and the security test are more than half of the build cost.
- The 03 file's year-1 range (US$ 19,000-53,000) adds trips, a data-protection representative and 15% contingency. In this plan, trips sit under marketing and sales (section 8), and the representative is covered by the S.A.C. (section 9).
- **Fallback if the software slips:** sell the Kit IAOC 2026 as a service in December and January. The founder and the partner officer fill the IAOC and IAI from the customer's spreadsheets, using the same templates.

---

## 8. Go-to-market

### Pricing (reconciled)

**The files disagree:**

- **B1:** S/ 300 a month for a single room, S/ 1,200 a month for online firms, and S/ 150 per client firm for outsourced officers.
- **02 file:** S/ 290 a month, which it counted as S/ 3,480 a year (12 months).
- **04 file:** S/ 2,900 a year prepaid, the same as 10 months. The 02 file had also proposed "2 months free for annual prepayment".

**I use the 04 price list.** It applies the 02 file's annual discount and feeds the financial model. The consultant plan from B1 is dropped, because consultants cannot be the officer of many firms. They get a free console and a referral fee instead.

| Plan | Who | Firms in register | Yearly, prepaid (net of IGV) | Monthly option (+20%) | Yearly with 18% IGV |
|---|---|---|---|---|---|
| **Sala** | One room | 185 | **S/ 2,900** (about US$ 840) | S/ 290 | S/ 3,422 |
| **Cadena** | 2-3 rooms | 89 | **S/ 4,900** | S/ 490 | S/ 5,782 |
| **Cadena Plus** | 4-10 rooms | 21 | **S/ 9,900** | S/ 990 | S/ 11,682 |
| **Corporativo** | 11+ rooms, casinos, online firms, betting networks | 6 + 49 online (23 with shop networks) | **from S/ 23,880** | from S/ 1,990 | from S/ 28,178 |
| **Adviser console** | Consultants, law firms, trainers | unknown | Free; 20% of first-year fees on referrals | - | - |

Sources: [04 file](04-gtm-company-finance.md); counts from the [02 file](02-market-and-competition.md).

- **What every plan includes:** RO with promo winners, client files and the sworn statement, UN/OFAC/EU screening, induction and training tracker, refresh reminders, the case log and ROS drafts, the IAOC and IAI pack in both formats, and the inspection pack.
- **One change from the 04 file: a "Reforzado" add-on** (my proposal). The 04 file put every firm on the full risk-assessment regime into Cadena Plus (S/ 9,900). But 41 of the 60 such firms qualify only because they have a room in one of six border or jungle regions, and many are single-room firms ([02 file](02-market-and-competition.md)). Charging them 3.4x the Sala price for one module would lose them.
  - Offer the risk-assessment module as an add-on at **S/ 1,500 a year** for Sala and Cadena firms, from v1 (Feb-Mar 2027).
  - This is my estimate. It does not change the base model, which assumed only 5 Cadena Plus sales in 3 years.
- **One-off items:**
  - **Kit IAOC 2026, S/ 1,500.** The customer uploads its 2026 spreadsheets. It gets the IAOC in both formats, the IAI checklist and a gap list. The fee counts toward a subscription signed by 31 Mar 2027.
  - **Set-up:** S/ 450 for Cadena and S/ 900 for Cadena Plus and Corporativo. Free for Sala, which is self-serve.
  - **Founding offer:** 15% off the first year for firms that sign before 30 Apr 2027, in return for a reference.
- **IGV is probably a real cost to buyers.** SUNAT has said that running slot machines is not taxed with IGV, so most buyers cannot recover the 18% ([SUNAT Informe 017-2012](https://www.sunat.gob.pe/legislacion/oficios/2012/informe-oficios/i017-2012.pdf), search summary; current position unverified). Buyers will compare the S/ 3,422 price.
- **Is it priced right?** Sala at S/ 3,422 including IGV is about 14% of a S/ 2,000-a-month officer. It is about a quarter of Pirani's entry price before Pirani's AML add-on. Card or transfer payment fits these amounts.

### Channels, in priority order

1. **Direct outreach to the 301 firms.** The register gives each firm's name, RUC, rooms, addresses and machine counts. Load it into a CRM and segment it by size and region. Start with the 185 single-room firms and the 89 small chains. Contact them by phone and WhatsApp at the room, then by e-mail and a printed letter to the general manager.
2. **Consultants, law firms and trainers** (PRCP, Caro & Asociados, PLAFT Suite, plaftperu, Grupo Contable, Seminarios Top, Academia OC). Give them a free console, co-branded webinars and 20% of first-year fees. Some will see the tool as a threat to their fees. Pitch it as the tool that lets them serve more clients in fewer hours.
3. **One local SUCTR vendor as an import and resale partner** (Link Tek, Wargos, Orion Consulting, Integrated Gaming System and others). Offer a 20-25% margin or a white label. One deal can reach dozens of small rooms. It also blunts the main competitive threat.
4. **Associations.** SONAJA, the main gaming body ([Focus Gaming News](https://focusgn.com/latinoamerica/sonaja-festejo-su-25-aniversario-en-peru), search summary), and ATCE, which had 50+ operators at its 2023 assembly ([Yogonet](https://www.yogonet.com/latinoamerica/noticias/2023/06/16/94981-la-asociacion-de-centros-de-entretenimiento-de-peru-reunio-a-mas-de-50-operadores-durante-su-asamblea-en-pgs-2023), search summary). Offer a joint webinar on 01015-2026 and a 10% member discount.
5. **Events.** The Peru Gaming Show, held in mid-June at the Jockey exhibition centre in Lima ([Peru Gaming Show](https://www.perugamingshow.com/); [Yogonet 2026](https://www.yogonet.com/international/news/2026/06/17/124217-peru-gaming-show-2026-latam-39s-gaming-and-networking-hub-kicks-off-today-in-lima)). Add regional breakfasts in Arequipa, Ica, Iquitos and Tacna.
6. **Content and search.** Spanish guides on "IAOC 2026 casinos tragamonedas", "registro de operaciones US$ 2,500" and "inducción SPLAFT 30 días". Each one offers a free gap check.
7. **Trade press.** Focus Gaming News, Yogonet, SoloAzar and SiGMA cover every Peruvian rule change.

**Sales motion.**

- **Hook:** a free 10-minute "Diagnóstico 01015" that lists missing duties with the fine for each.
- **Demo:** 30 minutes, showing a cash-out, a promo winner and the IAOC built from a year of data.
- **Trial:** 14 days with the customer's own data. The IAOC export needs a paid plan.
- **Who decides:** the general manager pays and the officer champions. Small firms decide in one or two calls; chains take one to three months (my estimate).

**Team.**

- The founder runs product and the Corporativo and partner deals.
- A **partner compliance officer** at S/ 2,000 a month from day 1. Ideally a former gaming officer. This person gives Portal PLAFT access to the templates, and does content review, demos and pilot support.
- A **part-time Lima sales and success contractor** at S/ 3,500 a month from January 2027 ([04 file](04-gtm-company-finance.md)).

### Selling calendar

| When | Event | Sales meaning |
|---|---|---|
| Since 9 Apr 2026 | Rule in force, no grace period | Every firm is exposed now |
| 19-22 Oct 2026 | IAGR conference in Lima, with MINCETUR ([SiGMA](https://sigma.world/es/news/lima-sera-sede-de-la-iagr-2026/), search summary) | Meet regulators and law firms; not a sales event |
| **Nov 2026 - Jan 2027** | Year-end data gathering; board approval by 30 Jan | **Main buying window** |
| **15 Feb 2027** | First new-format IAOC and IAI | Hard deadline; last-minute kits |
| Mid-June 2027 | Peru Gaming Show | Second peak: chains, SUCTR vendors, online firms |
| Every Nov-Feb | Renewals of yearly plans | Renewal and upsell season |

March, April and August are quiet (my estimate).

### Marketing budget, year 1: S/ 48,000 (US$ 13,900)

| Item | When | S/ |
|---|---|---|
| 3 webinars with law firms or associations | Nov, Jan, May | 3,000 |
| Letters to 301 firms, two waves | Nov, Dec | 7,500 |
| LinkedIn ads | Nov-Feb, Jun | 4,500 |
| Google Ads (S/ 400 a month) | All year | 4,800 |
| Peru Gaming Show 2027 stand or talk (price not published, unverified) | Jun | 15,000 |
| SONAJA / ATCE sponsorship or membership (unverified) | Feb-Jun | 4,000 |
| Trade-press sponsored articles (unverified) | Dec, Jun | 3,500 |
| Lawyer-reviewed guides and templates | Oct-Mar | 3,000 |
| Regional breakfasts | Mar-Apr, Sep | 2,700 |
| **Total fixed** | | **48,000** |

- **Not in this budget:** referral commissions (about S/ 9,000, variable), the founder's two Lima trips (S/ 17,000) and the sales contractor. They are in the model in section 10.
- **Later years:** S/ 42,000 in year 2 and S/ 38,000 in year 3.
- **To keep the test cheap** (my suggestion), book the S/ 15,000 Peru Gaming Show stand only if the 30 Apr 2027 gate is passed.

### First 90 days (Mon 12 Oct 2026 to Sat 9 Jan 2027)

This aligns the [03 file](03-product-and-tech.md) build calendar with the [04 file](04-gtm-company-finance.md) launch plan.

| Dates | Product | Company and legal | Sales and marketing | Exit test |
|---|---|---|---|---|
| 12-18 Oct | Specs, `contracts.md`, `CLAUDE.md`, repo | Decide the company route; brief a Lima corporate lawyer; start the apostilled power of attorney; sign the AML lawyer | CRM from the registers; landing page with the gap check; sign the partner officer | Lawyer and partner officer signed |
| 19-25 Oct | Foundation (S0), then streams | Name reservation (S/ 26.40); tablet-signature opinion | IAGR Lima; book 25 discovery calls | 10 calls booked |
| 26 Oct-8 Nov | Streams; **code complete 6 Nov** | Lawyer drafts templates and terms | Recruit 5 design partners; fix a webinar date with a law firm | MVP code complete |
| 9-15 Nov | Legal review; fixes | Sign the S.A.C. deed at a notary; order the security test | Design-partner contracts | **15 Nov: at least 2 design partners from 25 talks (target 5)** |
| 16-29 Nov | Security test; pilots onboard | SUNARP registration, RUC, e-invoicing; hire an accountant | Webinar 1; letter wave 1; ads start; calls to all Lima single-room firms; 2-3 adviser referral deals | S.A.C. registered |
| 30 Nov-13 Dec | Mock inspection; release; **paid launch 7-14 Dec** | Open the bank account in person during the Lima trip; bind insurance; publish terms | **1 Dec: pre-sales and Kit IAOC open**; press note; Lima visits | First 3 paying firms |
| 14 Dec-3 Jan | First import presets | - | IAOC campaign to all 301 firms; letter wave 2; hire the Lima contractor (starts 4 Jan) | 6 paying firms plus 3 kits |
| 4-9 Jan | IAOC flows tested with customers | First IGV filings | Webinar 2, "Build the 2026 IAOC in 5 days"; approach a SUCTR vendor | 20 open deals |
| To 31 Jan | Board-approval rush | - | Close the IAOC season | **31 Jan: 9 paying (base); fewer than 4 is a kill signal** |

If the S.A.C. is not registered by 1 Dec, take signed order forms and invoice as soon as the RUC and e-invoicing are live.

---

## 9. Payments, company and legal

### Is a local company needed? Yes, in most cases.

The owner prefers to sell from his own company abroad with card payments. **For this buyer, that route carries a 30% tax.**

- **Peru taxes "digital services" used in Peru, wherever the provider sits.** Application hosting and application service provision are on SUNAT's list, so a SaaS subscription fits ([SUNAT Informe 055-2021](https://www.sunat.gob.pe/legislacion/oficios/2021/informe-oficios/i055-2021-7T0000.pdf)).
- **The Peruvian payer must withhold 30%** of the gross fee ([UP Forseti](https://revistas.up.edu.pe/index.php/forseti/article/download/2831/1863/7336), search summary). If it does not withhold, it reportedly cannot deduct the cost (unverified).
- **Only five treaties remove this withholding for SaaS: Chile, Canada, Mexico, Korea and Portugal.** For those, SUNAT treats the income as business profits. The buyer needs the seller's tax-residence certificate. The Swiss and Brazilian treaties treat it as royalties, so withholding stays. The US, UK, Spain, Estonia and other EU states have no treaty in force (same SUNAT report; [04 file](04-gtm-company-finance.md)).
- **The buyer must also self-assess 18% IGV** on a foreign service ([SUNAT RS 047-2026](https://www.sunat.gob.pe/legislacion/superin/2026/000047-2026.pdf)). Gaming income is outside IGV, so this is a pure cost and extra paperwork.

**What a Sala customer really pays (S/ 2,900 list price):**

| Seller | Buyer's total cost | Seller receives |
|---|---|---|
| Peruvian S.A.C. | S/ 3,422 (normal invoice with IGV) | S/ 2,900 |
| Treaty-country company, with certificate | S/ 3,422, plus Form 1662 paperwork | S/ 2,900 |
| Non-treaty company; buyer withholds 30% | S/ 3,422 | **S/ 2,030** |
| Non-treaty company; buyer grosses up | **S/ 4,665 (+36%)** | S/ 2,900 |

Source: [04 file](04-gtm-company-finance.md), my calculation there.

**Stripe and Paddle do not fix this.**

- **Stripe:**
  - Peru is not a Stripe country, so a Peruvian company cannot open a Stripe account ([Stripe global](https://stripe.com/global)).
  - A foreign Stripe account can charge Peruvian cards in PEN, but not American Express ([Stripe currencies](https://docs.stripe.com/currencies)). Fees on a S/ 2,900 annual plan come to about 6% ([Stripe pricing](https://stripe.com/pricing)).
  - The withholding still applies.
- **Paddle:**
  - It handles Peru tax only for B2C sales ([Paddle tax](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)).
  - As merchant of record, it is itself a foreign seller, so the buyer's withholding remains.
  - Its fee is 5% + US$ 0.50 ([Paddle pricing](https://www.paddle.com/pricing)).
- **Gambling rules:** Stripe and Paddle ban gambling and betting products, not software sold to casinos ([Stripe restricted businesses](https://stripe.com/legal/restricted-businesses); [Paddle prohibited list](https://paddle.com/help/start/intro-to-paddle/what-am-i-not-allowed-to-sell-on-paddle)). Describe the product as "anti-money-laundering compliance software for regulated businesses". Get written approval before launch.
- **A local reseller does not help either.** It would have to withhold 30% on what it pays the foreign company.

**Decision.**

- **The founder's company is resident in Chile, Canada, Mexico, Korea or Portugal:** sell from it at first, by invoice and bank transfer or Stripe. Give buyers the residence certificate every year and a one-page IGV note.
  - A Peru data-protection representative is still needed (section 6). The cost is unverified.
  - Open a S.A.C. if buyers resist the Form 1662 paperwork.
- **Anywhere else (US, UK, Estonia, most of the EU):** **open a Peruvian S.A.C. now, so it can invoice by early December.** The founder's foreign company can own it.

### S.A.C. set-up costs

| Item | Official fee (doing it yourself, in person) | With a lawyer, remotely |
|---|---|---|
| Name reservation (online) | S/ 26.40 | included |
| SUNARP registration | S/ 59.40 + S/ 19.80 per manager + S/ 3 per S/ 1,000 of capital (other sites quote S/ 40-46 for the base fee) | included |
| Notary deed | S/ 300-800 (another source: S/ 800-1,200) | S/ 300-1,200 |
| Articles drafted by a lawyer | S/ 150-500 | included |
| Lawyer's full remote service | - | S/ 1,000-3,000 |
| Translation and legalisation of foreign documents | - | about S/ 103 per translation; about S/ 138 for legalisation |
| Apostilled power of attorney (founder's country) | - | varies (unverified) |
| Tax ID (RUC) | free | free |
| Bank account | S/ 150-300 to open; often a first deposit of about S/ 900 | same; banks often want one director in person |
| Municipal licence | only with a physical office: S/ 600-1,500 | none with a virtual office (unverified) |
| **Total** | **about S/ 500-1,500 (US$ 145-435)** | **about S/ 3,500-5,500 (US$ 1,000-1,600)** |

Sources: [Trámites Perú](https://tramitesperu.com/sunarp/constitucion-empresa/) (updated 25 Jun 2026); [Commenda](https://www.commenda.io/peru/incorporation-cost); [Damalion](https://www.damalion.com/lima-peru-business-registration-2026-complete-guide-to-costs-and-setup-timeline/).

**Rules for a foreign founder.**

- At least **two shareholders**. They can be the founder and his foreign company, and 100% foreign ownership is allowed.
- **No legal minimum capital.** Banks expect S/ 1,000-5,000.
- **A legal representative domiciled in Peru is required.** A non-resident founder would need a visa to take the role himself ([Holafly](https://esim.holafly.com/expats/how-start-a-business-peru/), search summary; [Commenda](https://www.commenda.io/peru/incorporation-cost)). Use the partner officer or the Lima contractor, with limited powers. Keep banking powers with the founder.
- **Use the notary route.** The cheap online S.A.C.S. route needs a Peruvian electronic ID for every shareholder ([IUS360](https://ius360.com/sociedad-por-acciones-cerrada-simplificada-un-nuevo-regimen-societario-que-entra-para-revolucionar-la-constitucion-de-sociedades-en-peru/), search summary).
- **Time:** about 3-4 weeks: 7-15 business days for the notary and SUNARP, then the RUC and the bank.

**Running costs: about S/ 1,300 a month (US$ 375; S/ 15,600 a year).**

- accountant: S/ 500-1,050 ([cuantomecuesta](https://cuantomecuesta.com/pe/contador-contabilidad/), search summary);
- virtual office and tax address in San Isidro: S/ 98 ([Company Hero](https://www.companyhero.com/es/pe/oficina-virtual/san-isidro), search summary);
- bank: about S/ 53 ([Commenda](https://www.commenda.io/peru/incorporation-cost));
- legal representative stipend: S/ 500 (my estimate).

**Taxes of the S.A.C.**

- **IGV:** add 18% to each invoice.
  - **Detracciones** (a 12% deposit into a Banco de la Nación account on taxed services above S/ 700) may apply to SaaS. The deposit can only pay the S.A.C.'s own taxes (unverified for software; [LP Derecho](https://lpderecho.pe/detracciones-sunat-sube-12-tasa-pago-adelantado-igv/), search summary). The accountant must confirm before the first invoice.
- **Income tax (MYPE regime):** 10% on the first 15 UIT of profit (S/ 82,500), 29.5% above that, with monthly prepayments of 1% of revenue ([SUNAT MYPE guide](https://orientacion.sunat.gob.pe/sites/default/files/inline-files/REMYPe-%20VF_0.pdf), search summary).
- **Dividends to a foreign shareholder:** 5% withholding ([Damalion](https://www.damalion.com/lima-peru-business-registration-2026-complete-guide-to-costs-and-setup-timeline/)).
- **Do not pay the foreign parent a licence or service fee.** That payment hits the same 30% withholding. Keep the business and its profit in the S.A.C. Get one hour of tax advice on where the code's IP should sit.

**Collecting money.**

- Default: a yearly electronic invoice in soles, paid by domestic bank transfer.
- Cards: a local gateway (Culqi, Izipay or Niubiz) at about 3.3-4.5% + IGV, with a payment link ([kom.pe](https://kom.pe/izipay-vs-niubiz-vs-culqi/), search summary). Whether they support recurring billing is unverified.
- Peruvian cards need 3-D Secure for online purchases ([04 file](04-gtm-company-finance.md)).
- **Stripe stays as an option only for the foreign company**, for non-Peruvian buyers later.

**Contracts and liability** ([04 file](04-gtm-company-finance.md); [03 file](03-product-and-tech.md)).

- **Documents,** drafted in Spanish by the Lima lawyer (about S/ 12,000 within the lawyer budget):
  1. terms of service;
  2. a data-processing agreement: the customer is the controller and we are the processor, with model clauses, a 24-hour breach notice to the customer, and return of data at exit;
  3. a confidentiality annex for SPLAFT data: officer-only ROS access, and support access only with written consent per ticket;
  4. a service-level annex: 99.5% uptime, a daily backup, and a nightly RO file the customer keeps;
  5. partner agreements: referral, SUCTR resale, and the partner officer's contract with confidentiality and IP assignment.
- **Liability position:**
  - **Tool, not advice.** The officer files. Liability is capped at 12 months of fees, and fines caused by the customer's own data or decisions are excluded.
  - Clauses excluding gross fault are void under Peruvian law (unverified). So security and backups are the real protection.
- **The vendor as third party.** If our screening counts as third-party verification under Art. 13, we must give a sworn statement and accept the duty of reserve (unverified). Offer this as a standard annex.
- **Insurance:** cyber and professional cover, about S/ 5,000 a year (unverified; get Lima broker quotes).
- **Disputes:** Lima Chamber of Commerce arbitration for Corporativo contracts; Lima courts for small plans.

---

## 10. Financials

### Which revenue figure, and why

| Source | Buyers | Price basis | Year-3 figure |
|---|---|---|---|
| B1 re-assessment | 325 land + 91 online | S/ 3,600 a year for a single room; S/ 14,400 online; set-up fees | S/ 637,000 (US$ 185,000) |
| 02 file | 301 + 49 | 12 x monthly price (S/ 3,480 for Sala); no churn | S/ 456,000 (US$ 132,000); range US$ 63,000-226,000 |
| **04 file (used)** | 301 + 49 | Prepaid yearly prices (S/ 2,900 for Sala), 15% founding discount, renewals of 80% then 85%, seasonality | **ARR S/ 410,000 (US$ 119,000) at month 36**; range US$ 44,000-205,000 |

I use the 04 model. It is the only one with costs, cash timing and churn, and it uses the final price list. The 02 and 04 figures differ mainly because of the annual discount, not because of customer counts (77 vs 74 firms).

### Three cases (months 1-36 = Nov 2026 to Oct 2029; S/; no founder pay; before income tax)

| Measure | Low | **Base** | High |
|---|---|---|---|
| Paying firms at month 6 / 12 / 24 / 36 | 6 / 15 / 23 / 26 | **15 / 36 / 60 / 74** | 27 / 57 / 95 / 122 |
| Share of the 350 obliged firms at month 36 | 7% | **21%** | 35% |
| ARR at month 12 / 24 / 36 | 79,000 / 129,000 / 151,000 | **180,000 / 316,000 / 410,000** | 281,000 / 515,000 / 708,000 |
| ARR at month 36 (US$) | 44,000 | **119,000** | 205,000 |
| Cash in, years 1 / 2 / 3 | 79,000 / 137,000 / 156,000 | **176,000 / 333,000 / 421,000** | 274,000 / 541,000 / 727,000 |
| Costs, years 1 / 2 / 3 | 197,000 / 160,000 / 158,000 | **214,000 / 215,000 / 221,000** | 233,000 / 292,000 / 298,000 |
| Profit in year 3 | -2,000 | **201,000 (US$ 58,000)** | 429,000 (US$ 124,000) |
| Break-even, trailing 12 months | month 27 | **month 14 (Dec 2027)** | month 12 (Oct 2027) |
| Peak cash need | 158,000 if never stopped; about 96,000 if stopped at month 9; about 67,000 at the 31 Jan 2027 gate | **65,000 (US$ 19,000), in May 2027** | 51,000 |

Source: [04 file](04-gtm-company-finance.md), "Financial model".

**Base-case fixed costs by year (S/).**

| Line | Year 1 | Year 2 | Year 3 |
|---|---|---|---|
| AI coding tools | 10,500 | 8,400 | 8,400 |
| Hosting and tools | 4,800 | 8,400 | 12,000 |
| Lawyer | 20,000 | 9,600 | 9,600 |
| Security test and retests | 17,000 | 10,000 | 10,000 |
| S.A.C. set-up and trademark | 5,100 | 0 | 0 |
| S.A.C. running costs | 15,600 | 15,600 | 15,600 |
| Insurance | 5,000 | 5,000 | 5,000 |
| Partner compliance officer | 24,000 | 24,000 | 24,000 |
| Lima sales and success contractor | 35,000 | 54,000 | 60,000 |
| Screening data | 0 | 6,000 | 6,000 |
| Marketing | 48,000 | 42,000 | 38,000 |
| Founder trips | 17,000 | 17,000 | 17,000 |
| **Fixed total** | **202,000** | **200,000** | **205,600** |
| Variable (referrals, payment fees) | about 11,800 | about 15,300 | about 15,300 |

- **Product cost is small.** Building with AI agents keeps it to about 15% of year-1 spend. Selling costs dominate: the contractor, partner officer, marketing and trips make up about 60%.
- **A local company costs about S/ 20,700 in year 1** (set-up and running), or about 10% of costs. That is the price of avoiding the 30% withholding.

**Unit economics (base).**

| Measure | Value |
|---|---|
| Acquisition cost per firm | about S/ 3,000 (S/ 2,500 if half the contractor's time is support) |
| Average first-year fee | about S/ 4,260 |
| Payback | about 7-9 months |
| Gross margin | about 85% |
| Lifetime value | about S/ 16,700 |
| Lifetime value / acquisition cost | about 5-6 |

**What the numbers mean.**

- **The ceiling is the buyer pool, not the unit economics.** The base case needs 1 in 5 of all obliged firms within 3 years, and the pool shrinks 1-3% a year. That is ambitious for a light-enforcement niche. The first real test is 31 Jan 2027.
- **Income tax:** about S/ 43,000 on the base year-3 profit, leaving about S/ 158,000 (US$ 46,000) before founder pay (my calculation from the 04 file).
- **Founder pay:** the base case can pay the founder about S/ 8,000 (US$ 2,300) a month from month 13. Profit after that pay is about S/ 22,000 in year 2 and S/ 105,000 in year 3, and the peak cash need stays at S/ 65,000.
- **Stress on costs:** if the lawyer and the security test land at the top of the 03 file's ranges, add about S/ 40,000 in year 1. The base peak cash need then rises to about S/ 105,000 (my estimate). **Plan a reserve of S/ 100,000-130,000 (US$ 29,000-38,000).**
- **Cash comes in spikes.** Yearly prepayment brings in a large share of cash from November to January, while costs are spread across the year. Keep a reserve.
- **Exit:** at month 36 in the base case, about S/ 0.8-1.6 million (US$ 240,000-470,000) at 2-4x revenue. Expect a discount for founder dependence and a single small market ([FE International](https://www.feinternational.com/blog/saas-valuation-multiples), search summary). Natural buyers are a SUCTR or casino-system vendor, Pirani, KYC Systems or a screening vendor.

---

## 11. Regional expansion

Order: (1) Peru gaming to break-even; (2) betting networks and online firms in Peru; (3) other UIF-supervised sectors in Peru; (4) Colombian gaming. Each Peruvian step reuses the S.A.C., the partner network and most of the code ([04 file](04-gtm-company-finance.md)).

| Option | Size | Notes | When |
|---|---|---|---|
| **Betting-shop networks and online firms (Peru)** | 23 holders with 4,497 shops; 49 online firms ([02 file](02-market-and-competition.md)) | Corporativo deals. The agent-shop capture app is priced per shop. Pilot with a mid-size holder (Free Games, 413 shops; Interplay, 228), not La Tinka | Months 6-18 |
| **Other UIF-supervised sectors in Peru** (real estate, notaries, vehicle dealers, pawnshops and others) | The UIF sanctioned 325 obliged subjects from Dec 2020 to Nov 2022, 36% of them in real estate and construction ([PUCP thesis](https://tesis.pucp.edu.pe/items/be69e02d-5df5-49ce-924c-69869d1ad219), search summary). Firm counts per sector not established (unverified) | Same SBS framework, portals and IAOC logic. The SBS publishes sector guides ([SBS guías](https://www.sbs.gob.pe/prevencion-de-lavado-activos/Supervisados-UIF/Guias-del-SPLAFT)). Needs sector templates and a sector RO. Probably the biggest upside, and the least researched | From month 12, if the base case holds |
| **Colombia (gaming)** | About 401 localised-game operators, 3,700+ venues, about 109,000 machines ([Focus Gaming News](https://focusgn.com/latinoamerica/bingos-y-casinos-colombianos-incrementaron-9-3-las-transferencias-a-la-salud-en-2025); [02 file](02-market-and-competition.md)) | Coljuegos SIPLAFT rules ([Res. 32334 of 2016](https://normograma.supersalud.gov.co/compilacion/docs/resolucion_coljuegos_32334_2016.htm), replaced by Res. 44514 of 2019). Colombia taxes foreign digital services (3% significant-economic-presence regime, or 20% withholding on technical services) ([Holland & Knight](https://www.hklaw.com/en/insights/publications/2026/01/revision-del-regimen-presencia-economica-significativa-en-colombia), search summary). Expect a Colombian S.A.S. or a local partner. The local compliance-software market is more crowded, since Pirani is Colombian (unverified) | Years 2-3; needs a separate legal mapping |
| Mexico | Count not found | KYC Systems already sells a gaming AML product | Not planned |
| Dominican Republic, Panama, Chile, Ecuador, Bolivia | Few buyers or an unclear duty | 27 firms in Panama; 25 casinos in Chile; a few large online licensees in Ecuador; none in Bolivia ([02 file](02-market-and-competition.md)) | Not planned |

---

## 12. Risks and mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| **Light enforcement:** no public gaming SPLAFT fines found since 2022, so small rooms keep using spreadsheets | high | high | Sell time saved on the IAOC and calm at inspections, not fear. Use the Kit IAOC as a low-commitment entry. Watch MINCETUR and the GAFILAT evaluation |
| **Small, shrinking pool:** 301 land-based firms, down 1-3% a year | certain | medium | Corporativo and betting networks; other UIF sectors from year 2; Colombia later |
| **RO and ROSEL templates sit behind the officer's login;** sharing them may breach portal terms (unverified) | medium | high | Get them through the partner officer in week 0. Build the export as a configurable mapping. Ask the lawyer whether sharing is allowed |
| **Tablet signature not accepted** on the mandatory SBS form | medium | medium | Lawyer opinion in week 1; print-sign-scan fallback in the same flow |
| **Unknown cage and promo export formats;** high promo-winner volume makes cashier work heavy | high | medium | Generic mapper in the MVP; collect real files in week 0 and the pilots; SUCTR vendor presets in v1 |
| **A SUCTR vendor or KYC Systems builds the same module** | medium | high | Partner early with one Peruvian SUCTR vendor; win the adviser network; move fast through the 2027 IAOC season |
| **Consultants see the tool as a threat** | medium | medium | Free console, 20% referral, co-branded webinars |
| **Tax friction when selling from abroad** (30% withholding, 18% IGV self-assessment) | certain for non-treaty sellers | high | Peruvian S.A.C. from the first paid sale, unless the seller is in a treaty country |
| **Payment provider flags "casino"** | low-medium | medium | The S.A.C. collects by bank transfer anyway; clear product description; written Stripe approval |
| **Detracciones lock up 12% of invoices** (unverified for SaaS) | medium | low | Use the deposit to pay the S.A.C.'s own taxes; accountant confirms first |
| **Peru-resident legal representative misuses powers** | low | high | Limited powers; banking powers kept by the founder; notarised revocation ready |
| **Confidentiality breach** (ROS content, officer identity) | low | very high | Officer-only encrypted compartment; no case content in messages; leak check; penetration test; insurance |
| **Personal-data breach, or the cross-border transfer is challenged** | low | high | Encryption, two-factor login, backups; model clauses; 24-hour notice to customers; keep the deployment portable for a South American region |
| **Remote founder cannot build trust with family-run firms** | medium | high | Lima contractor and partner officer as the local face; two trips a year; WhatsApp support in Spanish |
| **Founder is the bottleneck** (specs, code review, legal and sales) | high | medium | Fixed merge windows; cut list; the partner officer runs pilot support |
| **Agent-built code drifts** on shared models and security rules | medium | medium | Foundation first; `contracts.md`; one app per stream; tests that name R-numbers; QA agent; external test |
| **The SBS changes the RO template or IAOC content** | medium | medium | Rules and mappings as data with golden tests; a 30-day update promise |
| **Software slips past mid-December** | medium | high | Sell the Kit IAOC as a service; delay paid marketing to May |
| **Gaming-law reform or political change** | medium | medium | The AML duty comes from the UIF law and FATF standards, which are less exposed to politics (my judgment) |
| **Currency:** about 25% of costs in US$ | medium | low | Keep a US$ reserve |

---

## 13. Milestones and kill criteria

| Date | Milestone (base) | Kill or rethink if |
|---|---|---|
| 6 Nov 2026 | MVP code complete | Not usable by 15 Nov |
| **15 Nov 2026** | 25 discovery conversations; 5 design partners on real data | **Fewer than 2 design partners from 25 conversations:** rethink the offer before launch |
| 7-14 Dec 2026 | Definition of done met; S.A.C. registered; security test passed; paid launch | Launch slips past 15 Dec: sell only the Kit IAOC as a service, and delay paid marketing to May |
| **31 Jan 2027** | 9 paying firms plus 5 IAOC kits | **Fewer than 4 paying firms:** cut marketing; direct sales only until May |
| 15 Feb 2027 | Customers file the 2026 IAOC from the tool, with no late filings | Customers still rebuild the IAOC by hand: fix the product or stop |
| **30 Apr 2027 (month 6)** | 15 paying firms; 3 active referral partners | **Fewer than 6 paying firms:** stop, or pivot to another UIF sector |
| 30 Jun 2027 | Peru Gaming Show; one SUCTR vendor partnership signed | No vendor interest and fewer than 20 firms: no further marketing spend |
| **31 Oct 2027 (month 12)** | 36 paying firms; ARR S/ 180,000 | **Fewer than 15 firms, or ARR below S/ 80,000:** stop |
| Feb 2028 | First renewals of 80% or more | **Renewal below 60%:** stop; the product is not sticky |
| Oct 2028 (month 24) | 60 firms; ARR S/ 316,000; first non-gaming sector launched | Fewer than 35 firms: run for profit only, with no expansion |
| Oct 2029 (month 36) | 74 firms; ARR S/ 410,000; decide on Colombia or a sale | - |
| Any time | - | A SUCTR vendor bundles a free RO and IAOC module: re-plan within 30 days, either partnering with it or selling to it (my addition) |

Source: [04 file](04-gtm-company-finance.md), aligned with the [03 file](03-product-and-tech.md) calendar.

---

## 14. Open questions to settle first

1. **Where is the founder's company tax-resident?** Chile, Canada, Mexico, Korea or Portugal means the S.A.C. can wait. Anywhere else means it is needed now.
2. **The Portal PLAFT RO template for gaming:** file type, fields, code tables and sending frequency. Can an officer share it with a vendor?
3. **Will MINCETUR inspectors accept a tablet signature** on the SBS client sworn statement, the staff receipts and the induction records?
4. **MINCETUR's IAOC and IAI channel and format for 2026-27,** and whether it still differs from the UIF format. Is ROSEL a web form or a template upload?
5. **Which SUCTR or cage systems do the 185 single-room firms use,** and can they export cash-outs and promo winners? How many promo winners does a typical room have per day?
6. **Tax:** confirm the 30% withholding with a Peruvian tax adviser. Do detracciones apply to SaaS? Are gaming buyers fully outside IGV?
7. **Willingness to pay:** what gaming officers earn, and what consultants charge for an IAOC, an IAI or a manual update. Ask in the 25 discovery calls.
8. **Gaming SPLAFT fines since 2022.** File a public-information request with MINCETUR (my suggestion).
9. **Data:** do customers or MINCETUR expect data to stay in Peru? Does our screening make us an Art. 13 "third party"?
10. **Payments and company:** will Stripe give written approval? Do local gateways support recurring billing? Can the S.A.C.'s bank account be opened remotely? Who will be the Peru-resident legal representative?
11. **FX source:** is BCRP series PD04640PD accepted as "the SBS-published selling rate" for the RO threshold?

---

## 15. Next steps this week (Mon 12 - Fri 16 Oct 2026)

1. **Decide the company route** (question 1). If it is a S.A.C., brief a Lima corporate lawyer and start the apostilled power of attorney. Name a candidate for Peru-resident legal representative.
2. **Find and sign the partner compliance officer**, ideally a practising or former gaming officer, at about S/ 2,000 a month. Ask for:
   - the RO and ROSEL templates;
   - an anonymised IAOC in both formats;
   - 2-3 real cage and promo exports.
3. **Brief a Peruvian AML lawyer.** Ask for a fixed fee for the template set and the IAOC structure, plus three opinions: tablet signatures, sharing the templates, and Art. 13 third-party status.
4. **Prepare the build:**
   - write `contracts.md`, the stream specs from R1-R86 and `CLAUDE.md`;
   - set up the repo, CI and hosting;
   - start the S0 foundation on Monday 19 Oct.
5. **Pull the MINCETUR registers into a CRM.** Shortlist 10 pilot firms: 2 outside Lima and 1 adviser with several clients. Book 25 discovery calls. Plan to attend IAGR Lima (19-22 Oct) for contacts.
6. **Ask about payments and tax.** E-mail Stripe support for written approval. Ask a Peruvian accountant about detracciones, IGV and the 30% withholding.
7. **Draft the Spanish landing page** and the "Diagnóstico 01015" gap check, with a waitlist for the founding offer.
