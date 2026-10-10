# Peru gaming SPLAFT kit: market size, buyers and competition (deep dive 02)

Date: 10 Oct 2026. Builds on [the B1 report](../reports/peru-b1.md). Scope: market size, buyers, competition, channels and regional expansion. Law, product design and go-to-market detail are covered by the other section files.

Status: work in progress (counts done; competitors, prices, channels and regional still being researched).

## Summary

(pending)

## Buyer segments

All counts below are my own, from MINCETUR's live public registers, pulled on 10 Oct 2026. The registers sit behind the DGJCMT consultation site ([salas de juego](https://consultasenlinea.mincetur.gob.pe/casinos/Registros/registros.html?c=r_salasjuegos); [online licence holders](https://apuestasdeportivas.mincetur.gob.pe/Titulares_autorizacion.html); [sports-betting rooms](https://apuestasdeportivas.mincetur.gob.pe/Registro_Salas_apuestas_deportivas.html)). Each page loads a full list from a public web service (`wsConsultaWeb.asmx/listarConsultasRegistros` and `.../listarConsultasRegistros_AD`), which I queried with an empty search to get every row.

| Segment | Count | Source | Year | Confidence |
|---|---|---|---|---|
| Authorised slot and casino rooms (salas de juego) | **675 rooms** (622 with a validity date after today; 53 with no date shown) | my count of the [MINCETUR room register](https://consultasenlinea.mincetur.gob.pe/casinos/Registros/registros.html?c=r_salasjuegos) | Oct 2026 | high |
| **Land-based operating firms (the obligated legal entities)** | **301 distinct RUCs** (283 if only rooms with a future validity date are counted) | same, distinct RUC numbers | Oct 2026 | high. Groups with several RUCs are counted once per RUC, which is right, because each RUC is a separate obligated subject that files its own IAOC. |
| - single-room firms | 185 (85 of them outside Lima and Callao) | same | Oct 2026 | high |
| - firms with 2-3 rooms | 89 | same | Oct 2026 | high |
| - firms with 4-10 rooms | 21 | same | Oct 2026 | high |
| - firms with 11+ rooms | 6 (Nevada Entretenimientos 75 rooms, Gaming and Services 29, Corporación Empresarial Holding 26, Alpamayo Inversiones 24, Rubi Gaming 13, Myagui Gaming 11) | same | Oct 2026 | high |
| Slot machines in authorised rooms | 69,601 (median single-room firm: 80 machines; middle half 56-122) | same | Oct 2026 | high |
| Rooms with table games (casinos) | 15 rooms, run by 9 firms, 219 tables | same (table count field) | Oct 2026 | medium. MINCETUR quoted 19 casinos in 2026 ([El Peruano via B1](../reports/peru-b1.md)); the register's "mesas" field may be incomplete. |
| Online licence registrations (remote games and/or remote sports betting) | **95 registrations; 49 distinct companies**; 85 "vigente", 10 temporarily suspended; 49 sports-betting and 46 games authorisations; 53 domains | my count of the [MINCETUR licence-holder register](https://apuestasdeportivas.mincetur.gob.pe/Titulares_autorizacion.html) | Oct 2026 | high. B1's "about 91 licences" counted registrations, not companies. |
| Registered physical sports-betting points (salas de apuestas deportivas) | **4,497 points under 23 licence holders** (La Tinka 1,949; King Tech 1,083; Free Games 413; Interplay 228; Livesport 184; Perumatic 159) | my count of the [MINCETUR betting-room register](https://apuestasdeportivas.mincetur.gob.pe/Registro_Salas_apuestas_deportivas.html) | Oct 2026 | high |
| - of which run by a named third-party local operator (agent) | 2,882 points, about **1,448 distinct local operators** after name clean-up (1,102 run one point; 249 run 2-3; 97 run 4+) | same | Oct 2026 | medium. Names are typed inconsistently; I normalised legal suffixes and punctuation. |
| - point types | 3,147 exclusive shops, 702 multi-service shops, 298 pharmacies, 217 malls, 84 corner shops (bodegas), 37 inside slot rooms | same | Oct 2026 | high |

**What this means for the buyer count.**

- The core buyer is the **301 land-based firms**. B1's figure of 325 (undated MINCETUR slide) is close. The new number is firmer and current.
- About **274 of the 301 firms run three rooms or fewer**. These are the firms least likely to have an in-house compliance team or a casino-management system with AML features.
- The **27 firms with 4+ rooms** hold 287 rooms and 32,946 machines, almost half the sector. They are few but they pay more and set the norms that small firms copy.
- **Online: 49 companies, not 91.** Several hold both a games and a betting licence, or several domains.
- **The 23 betting-licence holders with 4,497 shops are a new and interesting segment.** Under the new rules the licence holder is the obligated subject, and anonymous betting is gone (B1). The holder must collect client data at every shop, and must run due diligence on the agents who run them (supplier due diligence is new in 01015-2026, per [PRCP](https://prcp-r2-prd.postedin.com/FT-y-FP-incorporadas-por-la-Resolución-SBS-N°-01015-2026.pdf)). Whether the ~1,448 local agents are themselves obligated subjects is not confirmed (unverified). If they are not, they are still the people who capture the data, so they are users even if not buyers.

## Interim notes (to be merged)

- Full text of Res. SBS 01015-2026 is on MINCETUR's SPLAFT page ([PDF](https://consultasenlinea.mincetur.gob.pe/casinos/Splaft/pdf/Resoluci%C3%B3n_SBS_01015_2026.pdf)). Scope (art. 1.1 and def. 29): legal entities that run casinos and/or slot machines authorised by MINCETUR. Online and betting-shop licence holders fall under Res. SBS 03622-2025 instead.
- In force the day after publication (Artículo Octavo), i.e. 9 Apr 2026; 1695-2016 repealed the same day. No adaptation window found in the text.
- Art. 4.1: the formal risk assessment and client segmentation apply only to firms that run a casino, run 500+ machines in total, or run rooms in Tacna, Puno, Ucayali, Loreto, Tumbes or Madre de Dios. My count: 60 of 301 firms (9 casino, 20 with 500+ machines, 41 with a room in those regions, overlapping). 241 firms are on the lighter regime.
- Art. 19.2: one person can be compliance officer of only one obligated firm at a time, unless a corporate officer of a group. Art. 19.3: the officer may be non-exclusive (part-time). Art. 19.4: the general manager may be the officer if the firm is MEPECO, has 10 or fewer workers, is not in a group, and runs only casino/slot activity.
- Fines (sanctions annex amended by 01015-2026): fixed amounts per infraction. Examples: no RO or missing RO minimum data 7 UIT; not sending the RO as required 5 UIT; no RO backup 4 UIT; not keeping SPLAFT information 4 UIT; no approved manual 4 UIT; missing 30-day induction 1-2 UIT; failing to file a ROS on time or to check UN lists 8 UIT. UIT 2026 = S/ 5,500.
- Training price anchor: Seminarios Top "Curso Anual para Oficiales de Cumplimiento y Sujetos Obligados", 3 h on Zoom, S/ 211.25 list, S/ 169 with 20% off ([page](https://seminariostop.com/seminarios-y-talleres/curso-anual-a-oficiales-de-cumplimiento-y-sujetos-obligados-a-informar-a-la-uif-sbs-laft/)). UIF ran a free 3-hour virtual course 26 Mar-10 Apr 2026 ([Boletín UIF 158](https://www.sbs.gob.pe/Portals/5/jer/BOLETIN-INFORMATIVOS/2026/BOLETIN%20UIF%20N%C2%B0%20158.pdf), via search summary).
- Pirani compliance plans: free tier (200 records, 5 users); Starter US$ 304/month billed US$ 3,645/year; AML needs Starter plus the AML+ extension, price not public ([Pirani pricing](https://piranirisk.com/es/planes-y-precios/cumplimiento-normativo?hsLang=en), via search summary).
- SUCTR system vendors registered with MINCETUR: 29 firms, 94 model registrations (IGT 20, Win Systems/WIGOS 15, Cirsa 8, Link Tek SAC 6, Bally 5, DRGT 4, Modulus 4, LNW 4, plus local SACs: Interactive Technical Systems, Inversiones Cerro Blanco, Integrated Services for Gaming, Feral Electronics, Orion Consulting, Integrated Gaming System, Canadian Games, Wargos Technologies, DRGT Peru). My count of the [SUCTR model register](https://consultasenlinea.mincetur.gob.pe/casinos/Registros/registros.html?c=r_modelosuctr).
- Online licence register "platform" field: temporary platform 31, VPL 5, SoftConstruct 4, Techsson 4, Calimaco PAM 3.
- Associations: ATCE (Asociación de Turismo y Centros de Entretenimiento del Perú), 50+ operators at its 2023 PGS assembly, president Marcelino Oyola in 2023 ([Yogonet](https://www.yogonet.com/latinoamerica/noticias/2023/06/16/94981-la-asociacion-de-centros-de-entretenimiento-de-peru-reunio-a-mas-de-50-operadores-durante-su-asamblea-en-pgs-2023)). IAGR 2026 conference in Lima 19-22 Oct 2026 with MINCETUR ([SiGMA](https://sigma.world/es/news/lima-sera-sede-de-la-iagr-2026/)). PGS 2026 was 17-18 Jun, 23rd edition ([Yogonet](https://www.yogonet.com/international/news/2026/06/17/124217-peru-gaming-show-2026-latam-39s-gaming-and-networking-hub-kicks-off-today-in-lima)).

## Buyer profile and pain

**Who the land-based buyer is.**

- **Mostly small, single-entity firms.** 185 of 301 firms run one room. The median single-room firm has 80 machines (middle half 56-122) (my count of the [room register](https://consultasenlinea.mincetur.gob.pe/casinos/Registros/registros.html?c=r_salasjuegos)). They are S.A.C. companies, often family-run (unverified).
- **Half are outside Lima.** 154 of 301 firms have at least one room outside Lima and Callao. Rooms are spread over 24 regions; Arequipa (32), Loreto (29), Ica (28) and Junín (26) lead after Lima (same count).
- **The sector is slowly consolidating.** MINCETUR counted 333 obligated firms in January 2017 ([MINCETUR SPLAFT talk 2017](https://consultasenlinea.mincetur.gob.pe/casinos/Agenda%20_Noticias/pdfs/2017/Presentacion_Charla_SPLAFT.pdf)), 330 authorised operators in October 2021 ([DGJCMT Nov 2021](https://consultasenlinea.mincetur.gob.pe/casinos/Agenda%20_Noticias/pdfs/2021/DGJCMT_Nov_2021.pdf)), about 325 in an undated slide used by B1, and 301 today. Expect about 1-2% fewer firms a year.
- **Most face the lighter regime.** Only 60 firms must run the formal risk assessment and client segmentation of art. 4.1 (casino, 500+ machines, or a room in Tacna, Puno, Ucayali, Loreto, Tumbes or Madre de Dios) ([Res. SBS 01015-2026](https://consultasenlinea.mincetur.gob.pe/casinos/Splaft/pdf/Resoluci%C3%B3n_SBS_01015_2026.pdf); my count). The other 241 still need the officer, manual, code, client and staff due diligence, RO, induction and training records, IAOC and internal audit report.
- **The small firm's officer is often the general manager.** Art. 19.4 lets the general manager act as part-time officer if the firm is a MEPECO taxpayer with 10 or fewer workers, outside a group and only in casino/slot activity ([01015-2026](https://consultasenlinea.mincetur.gob.pe/casinos/Splaft/pdf/Resoluci%C3%B3n_SBS_01015_2026.pdf)). A typical 80-machine room probably has more than 10 workers (cashiers, attendants, security across shifts) (unverified), so many single-room firms need a separate officer, often a part-time employee.
- **One officer, one firm.** Art. 19.2: a person can be officer of only one obligated firm at a time, unless he or she is a group's corporate officer ([01015-2026](https://consultasenlinea.mincetur.gob.pe/casinos/Splaft/pdf/Resoluci%C3%B3n_SBS_01015_2026.pdf); PRCP read the old rule the same way, [PRCP](https://prcp-r2-prd.postedin.com/Oficial-de-cumplimiento-del-splaft-perfil-y-funciones-3.pdf)). **This corrects B1.** An outsourced officer cannot carry ten rooms. Consultants and law firms can still do the work behind many officers (training, due diligence by third parties, audit, manuals), because arts. on third parties allow it.

**How they comply today (evidence).**

- **The IAOC has long been a weak spot.** For 2016, of 333 obligated firms, 169 filed the IAOC with the UIF on time, 112 filed late and 52 did not file. With MINCETUR, 314 filed on time, 6 late, 13 not at all. MINCETUR also listed common content errors and warned that the UIF and MINCETUR IAOC formats differ, so filing one does not cover the other ([MINCETUR SPLAFT talk 2017](https://consultasenlinea.mincetur.gob.pe/casinos/Agenda%20_Noticias/pdfs/2017/Presentacion_Charla_SPLAFT.pdf)). This is old data, but it shows a third of firms struggling with the one annual report.
- **Enforcement then and now.** Up to early 2017 MINCETUR had opened SPLAFT proceedings and imposed fines totalling about 235 UIT (same talk). In 2022 it sanctioned 10 firms for not filing the IAOC ([Focus Gaming News](https://focusgn.com/latinoamerica/peru-multo-a-30-empresas-titulares-de-salas-de-juegos-de-azar)). I found no public SPLAFT sanctions for 2023-2026 (two searches; unverified).
- **The RO lives in software already, partly.** MINCETUR's 2021 deck says the RO is kept "by electronic means", in date order, kept 5 years, and "sent to the UIF-Perú and made available to MINCETUR" ([DGJCMT Nov 2021](https://consultasenlinea.mincetur.gob.pe/casinos/Agenda%20_Noticias/pdfs/2021/DGJCMT_Nov_2021.pdf)). Under 01015-2026, "not sending the RO as required" is a 5 UIT infraction ([01015-2026 annex](https://consultasenlinea.mincetur.gob.pe/casinos/Splaft/pdf/Resoluci%C3%B3n_SBS_01015_2026.pdf)). So the RO is filed, not just kept. Cash-desk data sits in each room's SUCTR or casino-management system; the client ID and declaration fields are typed in separately (unverified).
- **Every room already runs a state-linked system.** All rooms must connect machines in real time to MINCETUR and SUNAT through a homologated SUCTR ([DGJCMT 2019](https://consultasenlinea.mincetur.gob.pe/casinos/Agenda%20_Noticias/pdfs/2019/DGJCMT_JUNIO_2019_2.pdf)). MINCETUR's register lists 29 SUCTR vendors and 94 system models: IGT (Advantage, Galaxis, System2Go) 20, Win Systems (WIGOS) 15, Cirsa 8, Link Tek 6, Bally 5, plus about ten Peruvian firms (my count of the [SUCTR register](https://consultasenlinea.mincetur.gob.pe/casinos/Registros/registros.html?c=r_modelosuctr)). These systems know every ticket cash-out, so the RO's money side can be imported rather than typed (unverified per vendor).
- **Online and betting.** 49 companies hold online licences. Most run on a third-party player-account platform; the register names SoftConstruct, Techsson, Calimaco and VPL among others (my count of the [licence register](https://apuestasdeportivas.mincetur.gob.pe/Titulares_autorizacion.html)). Identity checks are bought from KYC vendors such as GBG and KYCAID ([GBG](https://www.gbg.com/en/blog/igaming-and-kyc-in-peru/); [KYCAID](https://kycaid.com/blog/peru-vs-brazil-compliance-comparison/)).

**Pain points a tool can fix** (from the rules plus the evidence above):

1. **IAOC assembly.** Monthly counts and amounts of RO entries, unusual operations and ROS; training counts; shareholders and managers; all room locations ([PRCP](https://prcp-r2-prd.postedin.com/FT-y-FP-incorporadas-por-la-Resolución-SBS-N°-01015-2026.pdf)). Historically a third of firms filed late or not at all.
2. **RO capture and filing.** Every cash-out of US$ 2,500 or more and every promo-prize winner at any amount, with the new client fields ([PRCP](https://prcp-r2-prd.postedin.com/FT-y-FP-incorporadas-por-la-Resolución-SBS-N°-01015-2026.pdf)). Missing RO data is a 7 UIT fine (S/ 38,500).
3. **Proof of staff induction and training.** Missing induction is a named fine (1-2 UIT). Rooms have shift staff with turnover (unverified).
4. **Refresh cycles.** Worker and director files yearly, supplier files every 2 years, risk assessment every 3 years.
5. **Betting networks.** A licence holder with hundreds of agent-run shops must collect client data at every shop and keep due diligence on every agent. La Tinka has 1,949 shops, King Tech 1,083 (my count). This is a much bigger data-capture problem than a slot room's.

## Willingness to pay

**What a failure costs (fixed fines per infraction, 2026 UIT S/ 5,500).** From the sanctions annex as amended by 01015-2026 ([PDF](https://consultasenlinea.mincetur.gob.pe/casinos/Splaft/pdf/Resoluci%C3%B3n_SBS_01015_2026.pdf)):

| Failure | Fine | S/ |
|---|---|---|
| No 30-day SPLAFT induction for a new worker | 1-2 UIT | 5,500-11,000 |
| No approved manual or code of conduct | 4 UIT | 22,000 |
| No RO backup, or not keeping SPLAFT records | 4 UIT | 22,000 |
| Not sending the RO as required | 5 UIT | 27,500 |
| No RO, or RO missing minimum data | 7 UIT | 38,500 |
| No documented analysis of an unusual operation | 7 UIT | 38,500 |
| ROS not filed in time; UN lists not checked; no freeze | 8 UIT | 44,000 |

A single 7 UIT fine equals about ten years of a S/ 300-a-month subscription. The weak point is the chance of being fined, which looks low (see above).

**What they pay today.**

- **Training:** a 3-hour annual course for officers and obligated firms costs S/ 211.25 list, S/ 169 with a discount ([Seminarios Top](https://seminariostop.com/seminarios-y-talleres/curso-anual-a-oficiales-de-cumplimiento-y-sujetos-obligados-a-informar-a-la-uif-sbs-laft/)). The UIF itself ran a free 3-hour virtual course in March-April 2026 ([Boletín UIF 158](https://www.sbs.gob.pe/Portals/5/jer/BOLETIN-INFORMATIVOS/2026/BOLETIN%20UIF%20N%C2%B0%20158.pdf), via search summary). Training content is cheap; proof and tracking are the gap.
- **Generic compliance software:** Pirani's compliance Starter plan is US$ 304 a month, billed US$ 3,645 a year, and AML needs an extra AML+ extension (price on request) ([Pirani pricing](https://piranirisk.com/es/planes-y-precios/cumplimiento-normativo?hsLang=en), via search summary). That is about S/ 1,050 a month before AML, and it is not gaming-specific.
- **Consultants and officers:** no published prices found (PRCP, Caro & Asociados, PLAFT Suite, plaftperu.com all sell on quote) ([plaftperu](https://www.plaftperu.com/); [PLAFT Suite](https://plaft-suite.com/risk-consulting)). A part-time officer's pay is not public (unverified).
- **Affordability.** Casino and slot taxes were expected to reach about S/ 210 million in 2023 ([Infomercado](https://infomercado.pe/impuestos-de-casinos-y-tragamonedas-sumarian-s-210-millones-en-2023-segun-mincetur-ms/), headline). Spread over about 70,000 machines that is roughly S/ 3,000 of tax per machine a year, or about S/ 240,000 for a median 80-machine room (my estimate). A S/ 3,600-a-year tool is about 1.5% of that tax bill.

**Conclusion.** A single-room firm can pay S/ 250-350 a month if the tool replaces hours of officer work and gives a clean IAOC. The price must sit well under Pirani (about S/ 1,050 a month) and near the cost of a few training seats. Larger chains and online operators can pay S/ 1,000-3,000 a month (estimate, unverified).

## Competitor table and discussion

| Competitor or alternative | Type | Covers from the duty list | Gaming fit | Price | Verdict |
|---|---|---|---|---|---|
| SBS/UIF portals (Portal PLAFT, ROSEL, SISDEL, list pages) | free state | filing of IAOC, ROS, officer designation; UN and PEP list look-ups | generic | free | Filing only. No registers, reminders, training proof or IAOC drafting. Complement, not competitor. |
| MINCETUR SUCTR (via 29 registered vendors) | mandatory machine-monitoring systems | cash-out and machine data | gaming | bundled with machines/CMS | Holds the money data for the RO but no AML workflow found. Most likely entrant or integration partner. |
| IGT, Win Systems (WIGOS), Cirsa, LNW, Octavian CMS | international casino-management systems | player tracking, cage, reporting | gaming | enterprise quotes | WIGOS claims 300+ casinos and LatAm leadership ([SoloAzar](https://soloazar.com/en/category/casino/win-systems-reaches-300-casinos-with-its-wigos-cms)); no Peru SPLAFT module found. Large chains only. |
| Local SUCTR firms (Link Tek, Wargos, Orion Consulting, Integrated Gaming System, Interactive Technical Systems, etc.) | Peruvian room systems | machine and cash data | gaming | not found | Closest to small rooms. Could add an RO module. Best partnership targets (unverified). |
| Pirani (Colombia) | generic GRC/AML SaaS | risk matrix, segmentation, screening, monitoring | none | US$ 3,645/yr Starter + AML+ | Too generic and too costly for an 80-machine room. No RO, IAOC or gaming. |
| Inspektor / PLAFT Suite / Risk Global Consulting | list screening + consulting | screening; manuals, training, UIF reports, audits | none listed | quote | Partner for screening; consulting overlaps. |
| Experian Perú "Listas PLAFT" | screening | lists and PEP checks | none | quote | Screening only. |
| verifica.id | ID, PEP and list API; MINCETUR gambling-ban check | screening, ludopatía list | some | not published | Already sells into gaming; possible partner. |
| GBG, KYCAID, Sumsub-type KYC | online identity | onboarding KYC | online | usage-based | Online only. No Peru RO or IAOC. |
| Player-account platforms (SoftConstruct, Techsson, Calimaco, VPL) | online platforms | transactions, limits, some AML alerts (unverified) | online | revenue share | Hold the online RO data. Online operators may need only an export and IAOC layer. |
| Law firms and consultancies (PRCP, Caro & Asociados, Garrigues, plaftperu, Grupo Contable) | services | manual, code, training, audit, IAOC help | PRCP active in gaming | quote | Main current "solution". Channel more than competitor. |
| Training sellers (Seminarios Top, Academia OC, APLA Academy) | courses | annual training content and certificates | generic | S/ 169-211 per course | Cheap content; no tracking. Possible content partners. |
| Excel and paper | in-house | everything, badly | - | staff time | The real incumbent at single-room firms (unverified). |

**Discussion.**

- **No gaming SPLAFT software found in Peru.** About 18 searches in Spanish and English this pass (plus B1's), and direct checks of MINCETUR's vendor registers, found none. The B1 conclusion holds.
- **Mexico shows what a vertical product looks like.** KYC Systems sells "Software PLD para Juegos, Apuestas y Sorteos" for Mexican permit holders ([KYC Systems](https://kyc-systems.com/actividades-vulnerables/software-antilavado-juegos-apuestas-sorteos.html)). I found no sign it sells in Peru (unverified). It is the most likely foreign entrant if Peru grows.
- **The real threat is a SUCTR or CMS vendor adding an RO/IAOC module.** They already sit in every room and own the cash-out data. Partnering with one or two local SUCTR vendors may be faster than competing.
- **Consultants are channel first.** They sell manuals and audits and cannot act as officer for many firms. A tool that makes their client work cheaper helps them.

## Channels

- **Direct to the register.** The MINCETUR room register gives company name, RUC, room names, addresses and machine counts for all 301 firms; the licence and betting-room registers give the 49 online companies and 23 shop-network holders (pulled 10 Oct 2026). This is a complete prospect list. Officers' names are filed with the UIF, not published (unverified).
- **ATCE** (Asociación de Turismo y Centros de Entretenimiento del Perú): 50+ operators at its 2023 assembly at the Peru Gaming Show ([Yogonet](https://www.yogonet.com/latinoamerica/noticias/2023/06/16/94981-la-asociacion-de-centros-de-entretenimiento-de-peru-reunio-a-mas-de-50-operadores-durante-su-asamblea-en-pgs-2023)). Current leadership unverified.
- **SONAJA** (president Fernando Calderón Castro) and an online sports-betting association (president Gonzalo Rosell) spoke at PGS 2026 ([Yogonet](https://www.yogonet.com/international/news/2026/06/01/122462-peru-gaming-show-2026-confirms-conference-agenda-and-participation-of-more-than-50-brands-in-lima)).
- **Peru Gaming Show:** 23rd edition 17-18 June 2026, Jockey exhibition centre, Lima, 50+ brands, MINCETUR opening ([Yogonet](https://www.yogonet.com/international/news/2026/06/17/124217-peru-gaming-show-2026-latam-39s-gaming-and-networking-hub-kicks-off-today-in-lima)). The next edition (June 2027, unverified) is the natural launch stage.
- **IAGR 2026 in Lima,** 19-22 Oct 2026, co-hosted with MINCETUR ([SiGMA](https://sigma.world/es/news/lima-sera-sede-de-la-iagr-2026/)). A regulators' event; useful for meeting DGJCMT staff, not for selling.
- **MINCETUR's own outreach.** DGJCMT ran SPLAFT talks for operators in 2016-2017 ([2016 conversatorio](https://consultasenlinea.mincetur.gob.pe/casinos/Agenda%20_Noticias/pdfs/2016/CONVERSATORIO_SPLAFT_OCTUBRE_2016.pdf); [2017 talk](https://consultasenlinea.mincetur.gob.pe/casinos/Agenda%20_Noticias/pdfs/2017/Presentacion_Charla_SPLAFT.pdf)). A free webinar on 01015-2026 with a known lawyer is the cheapest lead magnet.
- **Consultancies and law firms:** PRCP (publishes 01015-2026 and IAOC guides), Caro & Asociados (quoted in El Peruano), Garrigues Lima ([PRCP](https://prcp-r2-prd.postedin.com/FT-y-FP-incorporadas-por-la-Resolución-SBS-N°-01015-2026.pdf); [El Peruano](https://elperuano.pe/noticia/293055-carlos-caro-nueva-norma-contra-lavado-de-activos-implica-menor-tolerancia-ante-fallas-de-cumplimiento); [Garrigues](https://www.garrigues.com/es_ES/noticia/peru-aprobada-norma-prevenir-lavado-activos-financiamiento-terrorismo-sector-juegos)). Offer them a multi-client console and a referral fee.
- **SUCTR/CMS vendors:** a data import or white-label deal with a local SUCTR vendor reaches its installed rooms at once.
- **Trade press:** Focus Gaming News, Yogonet, SoloAzar and SiGMA cover every Peruvian rule change.
- **Training sellers:** bundle a training-tracking feature with a course partner (Seminarios Top, Academia OC).

## Regional expansion

| Country | Comparable buyers | Duty | Fit | Source |
|---|---|---|---|---|
| Colombia | 401 localised-game operators, about 106,000-109,000 slot machines in 3,600-3,700 venues | SIPLAFT-type rules for gaming operators under Coljuegos (detail unverified) | high: many small slot operators, same language | [Focus Gaming News](https://focusgn.com/latinoamerica/bingos-y-casinos-colombianos-incrementaron-9-3-las-transferencias-a-la-salud-en-2025) (search summary) |
| Mexico | permit holders for casinos and betting (count not found); 90,000 machines (old AGEM figure) | LFPIORPI "actividad vulnerable" for gaming | low: mature PLD software market (KYC Systems has a gaming product) | [KYC Systems](https://kyc-systems.com/actividades-vulnerables/software-antilavado-juegos-apuestas-sorteos.html); [GGB](https://ggbnews.com/article/illegal-slots-in-mexico) |
| Panama | 27 firms hold 100+ gaming concessions and licences | JCJ, SSNF and UAF AML supervision of gaming | low: few buyers | [Focus Gaming News](https://focusgn.com/latinoamerica/panama-intensifica-la-lucha-contra-el-blanqueo-de-capitales-en-el-juego) (search summary) |
| Dominican Republic | casinos and lottery shops; 71,000+ bancas registered for tax | Ley 155-17; DCJA supervises casinos and gaming; bancas' status disputed | medium: big shop count, unclear duty | [vLex Res. 105-2022](https://do.vlex.com/vid/resolucion-n-105-2022-939725039); [Diario Libre](https://www.diariolibre.com/noticias/juristas-dicen-que-bancas-debieron-estar-en-ley-lavado-JL7159957); [Focus Gaming News](https://focusgn.com/latinoamerica/dominicana-sigue-el-conflicto-entre-la-direccion-de-casinos-y-juegos-de-azar-y-fenabanca) |

(Chile, Bolivia, Ecuador and Paraguay still to check.)

## Implications for positioning and pricing

(drafting)

## Open questions

(drafting)

## Sources

(pending)
