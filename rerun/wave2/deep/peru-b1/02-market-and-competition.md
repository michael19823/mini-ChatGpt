# Peru gaming SPLAFT kit: market size, buyers and competition (deep dive 02)

Date: 10 Oct 2026. Builds on [the B1 report](../reports/peru-b1.md). Scope: market size, buyers, competition, channels and regional expansion. Law, product, go-to-market and company set-up are covered by the other section files.

Method: I pulled MINCETUR's live public registers of rooms, online licence holders, betting shops and SUCTR system vendors on 10 Oct 2026 and counted them myself. I read the full text of Res. SBS 01015-2026 and Res. SBS 03622-2025 from MINCETUR's SPLAFT page, and three MINCETUR presentations to operators (2017, 2019, 2021). Then 38 web searches and 4 page fetches in Spanish and English. Search summaries are marked as such.

## Summary

- **The buyer count is firm now: 301 land-based firms.** MINCETUR's live room register lists 675 authorised rooms run by 301 distinct companies (RUCs) with 69,601 machines (my count, 10 Oct 2026). B1 used 325 firms from an April 2024 slide. The number has drifted down from 333 (2017) and 330 (2021).
- **Most buyers are small.** 185 firms run one room (median 80 machines). 89 run 2-3 rooms. Only 27 run 4 or more, but those 27 hold almost half of all machines. Half of the firms have rooms outside Lima.
- **Most are on the lighter regime.** Only 60 firms must do the formal risk assessment (casinos, 500+ machines, or rooms in six border or jungle regions). The other 241 still need the officer, manual, RO, induction and training proof, due diligence, IAOC and internal-audit report.
- **Online is smaller than B1 thought: 49 companies, not 91.** The 95 online registrations belong to 49 firms. Their platforms must already pass a lab certification that includes anti-money-laundering monitoring, and they buy KYC from GBG, KYCAID and others. Online is a side market.
- **New segment found: betting-shop networks.** MINCETUR lists 4,497 sports-betting shops under 23 licence holders. About 2,900 are run by roughly 1,450 local agents. The holder is the obligated firm and must capture client data and run due diligence across these agents. La Tinka (1,949 shops) and King Tech (1,083) are the giants.
- **Correction to B1: one officer cannot serve many firms.** Art. 19.2 of 01015-2026 lets a person be compliance officer of only one obligated firm at a time (except a group's corporate officer). Consultants and law firms are the multi-client channel, not "outsourced officers".
- **The rule bites now.** 01015-2026 took effect on 9 April 2026 with no adaptation period. The RO must be kept in software and sent to the UIF on an SBS template. Fines are fixed per infraction: 7 UIT (S/ 38,500) for a missing or incomplete RO, 5 UIT for not sending it.
- **Pain is documented.** For 2016, 164 of 333 firms filed the IAOC with the UIF late or not at all, and MINCETUR complained that its IAOC format differs from the UIF's. The last public SPLAFT fines in gaming that I found are from 2022.
- **No competitor does the job.** No gaming SPLAFT software was found in Peru. Generic tools (Pirani at about US$ 3,645 a year before its AML add-on), screening services and consultants each cover a slice. The real threats are the 29 SUCTR vendors already inside every room, and Mexico's KYC Systems if it moves south.
- **Revenue ceiling is modest.** Base case about S/ 460,000 a year in year 3 (about US$ 135,000), range US$ 65,000-230,000. That is a little below B1's US$ 185,000, because there are fewer firms and fewer online buyers. Colombia (about 400 slot operators, 3,700 venues) is the natural second market.

## Buyer segments

All counts are my own, from MINCETUR's public registers, pulled on 10 Oct 2026. Each register page loads its full list from a public web service (`wsConsultaWeb.asmx/listarConsultasRegistros` and `.../listarConsultasRegistros_AD`), which I queried with an empty search to get every row.

| Segment | Count | Source | Year | Confidence |
|---|---|---|---|---|
| Authorised slot and casino rooms | **675 rooms** (622 with a validity date after today; 53 with no date shown) | my count of the [MINCETUR room register](https://consultasenlinea.mincetur.gob.pe/casinos/Registros/registros.html?c=r_salasjuegos) | Oct 2026 | high |
| **Land-based obligated firms** | **301 distinct RUCs** (283 if only rooms with a future validity date count) | same | Oct 2026 | high. Each RUC is a separate obligated subject with its own IAOC. |
| - one room | 185 (85 of them outside Lima and Callao) | same | Oct 2026 | high |
| - 2-3 rooms | 89 | same | Oct 2026 | high |
| - 4-10 rooms | 21 | same | Oct 2026 | high |
| - 11+ rooms | 6: Nevada Entretenimientos (75 rooms), Gaming and Services (29), Corporación Empresarial Holding (26), Alpamayo Inversiones (24), Rubi Gaming (13), Myagui Gaming (11) | same | Oct 2026 | high |
| - firms on the full risk-assessment regime (art. 4.1) | 60 (9 with a casino, 20 with 500+ machines, 41 with a room in Tacna, Puno, Ucayali, Loreto, Tumbes or Madre de Dios; overlapping) | same, applying art. 4.1 of [Res. SBS 01015-2026](https://consultasenlinea.mincetur.gob.pe/casinos/Splaft/pdf/Resoluci%C3%B3n_SBS_01015_2026.pdf) | Oct 2026 | medium-high (depends on the register's table and machine fields) |
| Slot machines | 69,601 (median single-room firm 80; middle half 56-122) | room register | Oct 2026 | high |
| Rooms with table games | 15 rooms, 9 firms, 219 tables | room register | Oct 2026 | medium. MINCETUR has cited 19 casinos ([Infomercado, Jan 2023](https://infomercado.pe/impuestos-de-casinos-y-tragamonedas-sumarian-s-210-millones-en-2023-segun-mincetur-ms/)). |
| Firm count over time | 333 (Jan 2017), 330 (Oct 2021), 325 (Apr 2024), 301 (Oct 2026) | [MINCETUR 2017](https://consultasenlinea.mincetur.gob.pe/casinos/Agenda%20_Noticias/pdfs/2017/Presentacion_Charla_SPLAFT.pdf); [MINCETUR 2021](https://consultasenlinea.mincetur.gob.pe/casinos/Agenda%20_Noticias/pdfs/2021/DGJCMT_Nov_2021.pdf); [Congreso slide](https://www.congreso.gob.pe/Docs/comisiones2023/comercio/files/ppt_mincetur_congreso_-_ica_-_dgjcmt.pdf) (dated Apr 2024 per search summary; the file now returns 404); my count | 2017-2026 | medium (methods may differ) |
| Online licence registrations | **95 registrations from 49 companies**; 85 in force, 10 temporarily suspended; 49 sports-betting and 46 games authorisations; 53 domains | my count of the [licence-holder register](https://apuestasdeportivas.mincetur.gob.pe/Titulares_autorizacion.html) | Oct 2026 | high. SONAJA cited 92 authorisations in May 2026 ([Focus Gaming News](https://focusgn.com/latinoamerica/la-industria-del-juego-de-peru-aporto-mas-de-us78m-en-impuestos-entre-enero-y-mayo), search summary). |
| Sports-betting shops | **4,497 shops under 23 licence holders**: La Tinka 1,949; King Tech 1,083; Free Games 413; Interplay 228; Livesport 184; Perumatic 159; others smaller | my count of the [betting-shop register](https://apuestasdeportivas.mincetur.gob.pe/Registro_Salas_apuestas_deportivas.html) | Oct 2026 | high. SONAJA cited 4,534 in May 2026 (same Focus article). |
| - shops run by a named local agent | 2,882 shops; about **1,448 agents** after name clean-up (1,102 run one shop, 249 run 2-3, 97 run 4+) | same | Oct 2026 | medium (agent names are typed inconsistently) |
| - shop types | 3,147 dedicated shops, 702 multi-service shops, 298 pharmacies, 217 malls, 84 corner shops, 37 inside slot rooms | same | Oct 2026 | high |
| SUCTR system vendors | 29 firms, 94 registered system models | my count of the [SUCTR register](https://consultasenlinea.mincetur.gob.pe/casinos/Registros/registros.html?c=r_modelosuctr) | Oct 2026 | high |

**Who is the obligated buyer.**

- **Land-based:** "a legal entity that runs casino games and/or slot machines, authorised by MINCETUR" (art. 1.1 and definition 29 of [01015-2026](https://consultasenlinea.mincetur.gob.pe/casinos/Splaft/pdf/Resoluci%C3%B3n_SBS_01015_2026.pdf)). That is the 301 RUCs.
- **Online and betting shops:** the company authorised to run remote-gaming or remote-betting platforms "and to run sports-betting shops" (definition 34 of [Res. SBS 03622-2025](https://consultasenlinea.mincetur.gob.pe/casinos/Splaft/pdf/RESOLUCIoN_SBS_03622-2025.pdf)). The shop agents are not obligated subjects themselves. They appear in the holder's IAOC as "suppliers and annexed establishments" (art. 26 item c, same PDF). So the agents are users of a tool, not buyers.

**Working buyer base:** 301 land-based firms (core), 23 betting-shop networks (upside), 49 online companies (side market). Total 350 to 373 obligated firms, depending on overlap.

## Buyer profile and pain

**Who the land-based buyer is.**

- **Mostly small, single-entity firms.** 185 of 301 firms run one room, with a median of 80 machines (my count). They are S.A.C. companies, often family-run (unverified).
- **Half are outside Lima.** 154 of 301 firms have at least one room outside Lima and Callao. After Lima (325 rooms) come Arequipa (32), Loreto (29), Ica (28) and Junín (26) (my count).
- **Slowly consolidating.** About 1-3% fewer firms a year since 2017 (see table). Chains are buying rooms (unverified).
- **The small firm's officer.** The general manager may act as part-time officer only if the firm is a MEPECO taxpayer, has 10 or fewer workers, is outside a group and only runs casino/slot activity (art. 19.4, [01015-2026](https://consultasenlinea.mincetur.gob.pe/casinos/Splaft/pdf/Resoluci%C3%B3n_SBS_01015_2026.pdf)). An 80-machine room open long hours probably has more than 10 workers (unverified), so many single-room firms need a separate part-time officer.
- **One officer, one firm.** "The person designated as compliance officer may only be so for one obligated subject at a time, unless he or she is a corporate compliance officer" (art. 19.2, same PDF). PRCP read the old rule the same way ([PRCP](https://prcp-r2-prd.postedin.com/Oficial-de-cumplimiento-del-splaft-perfil-y-funciones-3.pdf)). **This corrects B1's channel idea.** Third parties may do due diligence and training (arts. on third parties, same PDF), so consultants can still serve many firms behind their officers.

**How they comply today.**

- **IAOC filing has long been weak.** For 2016, of 333 obligated firms, 169 filed the IAOC with the UIF on time, 112 filed late and 52 did not file. With MINCETUR, 314 filed on time, 6 late and 13 not at all. MINCETUR listed common content errors and warned that "the UIF and MINCETUR IAOC formats are different; filing one does not exempt from the other" ([MINCETUR SPLAFT talk, 2017](https://consultasenlinea.mincetur.gob.pe/casinos/Agenda%20_Noticias/pdfs/2017/Presentacion_Charla_SPLAFT.pdf)). The data is old, but it shows a third to a half of firms struggling with the one yearly report.
- **Enforcement.** By early 2017 MINCETUR had imposed SPLAFT fines totalling about 235 UIT (same talk). In Jan-Aug 2022 it sanctioned 10 firms for not filing the IAOC ([Focus Gaming News](https://focusgn.com/latinoamerica/peru-multo-a-30-empresas-titulares-de-salas-de-juegos-de-azar)). I found no public gaming SPLAFT fines for 2023-2026 (three searches; unverified). In UIF-supervised sectors, PRCP found the most common 2022 infraction was "not recording operations as the rules require", then an incomplete manual ([PRCP 2023](https://blog.prcp.com.pe/wp-content/uploads/2023/03/Sistema-de-Prevencion-de-Lavado-de-Activos-y-Financiamiento-del-Terrorismo-Los-sectores-mas-sancionados-en-el-2022-por-la-UIF.pdf), search summary).
- **The RO must already be digital and filed.** It covers every chip or ticket cash-out of US$ 2,500 or more and every promotional-prize winner at any amount (art. 14.3). It is logged on the day, in date order, "in IT systems and/or applications", with a backup (art. 14.4). The officer sends it to the UIF in the structure and frequency the SBS sets, on a template only available inside Portal PLAFT (art. 14.6) (all [01015-2026](https://consultasenlinea.mincetur.gob.pe/casinos/Splaft/pdf/Resoluci%C3%B3n_SBS_01015_2026.pdf)). MINCETUR described the same practice in 2021: RO and prize register "kept by electronic means ... sent to the UIF-Perú and made available to MINCETUR" ([MINCETUR 2021](https://consultasenlinea.mincetur.gob.pe/casinos/Agenda%20_Noticias/pdfs/2021/DGJCMT_Nov_2021.pdf)).
- **Every room already runs a state-linked system.** All machines connect in real time to MINCETUR and SUNAT through a homologated SUCTR ([MINCETUR 2019](https://consultasenlinea.mincetur.gob.pe/casinos/Agenda%20_Noticias/pdfs/2019/DGJCMT_JUNIO_2019_2.pdf)). The 29 registered vendors include IGT (20 models: Advantage, Galaxis, System2Go), Win Systems/WIGOS (15), Cirsa (8), Link Tek SAC (6), Bally (5), DRGT, Modulus and LNW (4 each), Octavian (myACP) and about ten Peruvian SACs (Interactive Technical Systems, Inversiones Cerro Blanco, Integrated Services for Gaming, Feral Electronics, Orion Consulting, Integrated Gaming System, Canadian Games, Wargos Technologies, DRGT Perú) (my count of the [SUCTR register](https://consultasenlinea.mincetur.gob.pe/casinos/Registros/registros.html?c=r_modelosuctr)). These systems hold ticket cash-out data. The client ID, address, occupation and source-of-funds fields are probably typed in separately at the cash desk (unverified).
- **Online.** Platforms must pass a lab certification whose format includes a section "19.2 Anti-money-laundering monitoring" ([MINCETUR Formatos 2026](https://apuestasdeportivas.mincetur.gob.pe/PDF/Formatos_2026.pdf)). The licence register names platform vendors such as SoftConstruct, Techsson, Calimaco and VPL (my count). GBG and KYCAID sell KYC to Peruvian operators ([GBG](https://www.gbg.com/en/blog/igaming-and-kyc-in-peru/); [KYCAID](https://kycaid.com/blog/peru-vs-brazil-compliance-comparison/)).

**Pain points a tool can fix.**

1. **IAOC assembly by 15 February.** The IAOC needs board or manager approval within 30 days of year end and must reach MINCETUR and the UIF by 15 February. The internal-audit report (IAI) goes as an annex by the same date (arts. 18.4, 27.2-27.3, [01015-2026](https://consultasenlinea.mincetur.gob.pe/casinos/Splaft/pdf/Resoluci%C3%B3n_SBS_01015_2026.pdf)). Content includes monthly RO, unusual-operation and ROS statistics, training counts, shareholders, managers and all room locations ([PRCP](https://prcp-r2-prd.postedin.com/FT-y-FP-incorporadas-por-la-Resolución-SBS-N°-01015-2026.pdf)).
2. **RO capture and filing.** Including every promo winner, with the new client fields. Missing RO data is a 7 UIT fine.
3. **Proof of induction and training.** A missing 30-day induction is a named fine of 1-2 UIT (sanctions annex, same PDF). Rooms run shifts and staff turn over (unverified).
4. **Refresh cycles.** Worker and director files yearly, supplier files every 2 years, risk assessment every 3 years ([PRCP](https://prcp-r2-prd.postedin.com/FT-y-FP-incorporadas-por-la-Resolución-SBS-N°-01015-2026.pdf)).
5. **Betting networks.** A holder with hundreds of agent-run shops must capture client data at every till and keep due diligence on every agent. That is a much bigger data-capture job than a slot room's.
6. **No grace period.** 01015-2026 "takes effect the day after its publication" (Artículo Octavo, same PDF), so from 9 April 2026. Firms that have not updated manuals, RO fields and induction records are already exposed.

I found no forum or press complaints from operators about SPLAFT cost in 2025-2026 (two searches). SONAJA's public voice is about illegal gaming and responsible play ([Focus Gaming News](https://focusgn.com/latinoamerica/sonaja-preve-un-aumento-de-las-apuestas-en-peru-durante-el-mundial-y-refuerza-su-llamado-al-juego-responsable)).

## Willingness to pay

**What a failure costs.** Fines are fixed per infraction (sanctions annex as amended by [01015-2026](https://consultasenlinea.mincetur.gob.pe/casinos/Splaft/pdf/Resoluci%C3%B3n_SBS_01015_2026.pdf)). UIT 2026 = S/ 5,500 ([El Peruano](https://elperuano.pe/noticia/285208-mef-establece-en-s-5-500-la-unidad-impositiva-tributaria-para-2026)).

| Failure | Fine | S/ |
|---|---|---|
| No 30-day SPLAFT induction for a new worker | 1-2 UIT | 5,500-11,000 |
| No approved manual or code of conduct | 4 UIT | 22,000 |
| No RO backup, or SPLAFT records not kept | 4 UIT | 22,000 |
| RO not sent as required | 5 UIT | 27,500 |
| No RO, or RO missing minimum data | 7 UIT | 38,500 |
| No documented analysis of an unusual operation | 7 UIT | 38,500 |
| Late ROS; UN lists not checked; funds not frozen | 8 UIT | 44,000 |

One 7 UIT fine equals about 11 years of a S/ 290-a-month subscription. The weak point is how likely a fine is (see enforcement above).

**What they pay today.**

- **Officer.** One live job ad for a compliance officer at a small Lima real-estate obligated firm offers S/ 2,000 a month ([Computrabajo](https://pe.computrabajo.com/trabajo-de-oficial-de-cumplimiento), 10 Oct 2026). A general professional earns about S/ 3,476 a month gross in 2026 (range S/ 1,625-5,875) ([Sueldojusto](https://sueldojusto.pe/salarios/otras-carreras-de-administracion/), search summary). Gaming officer pay was not found (unverified).
- **Training.** A 3-hour annual course for officers and obligated firms costs S/ 211.25 list, S/ 169 with a discount ([Seminarios Top](https://seminariostop.com/seminarios-y-talleres/curso-anual-a-oficiales-de-cumplimiento-y-sujetos-obligados-a-informar-a-la-uif-sbs-laft/)). The UIF ran a free 3-hour virtual course in March-April 2026 ([Boletín UIF 158](https://www.sbs.gob.pe/Portals/5/jer/BOLETIN-INFORMATIVOS/2026/BOLETIN%20UIF%20N%C2%B0%20158.pdf), search summary).
- **Generic software.** Pirani's compliance Starter plan was reported at US$ 304 a month, billed US$ 3,645 a year; its AML module is a paid add-on on top ([Pirani pricing](https://piranirisk.com/es/planes-y-precios/cumplimiento-normativo?hsLang=en); prices are in an image, figure from a search summary, unverified). That is about S/ 12,600 a year before AML.
- **Consultants.** PRCP, Caro & Asociados, PLAFT Suite and plaftperu.com sell on quote only ([plaftperu](https://www.plaftperu.com/); [PLAFT Suite](https://plaft-suite.com/risk-consulting)).
- **Affordability.** Casino and slot taxes were S/ 200 million in 2022 and a projected S/ 210 million in 2023 ([Infomercado, 31 Jan 2023](https://infomercado.pe/impuestos-de-casinos-y-tragamonedas-sumarian-s-210-millones-en-2023-segun-mincetur-ms/)). Over about 70,000 machines that is roughly S/ 3,000 of tax per machine a year, or about S/ 240,000 for an 80-machine room (my estimate). A S/ 3,500-a-year tool is about 1.5% of that tax bill.

**Conclusion.** A single-room firm can likely pay S/ 250-350 a month if the tool saves officer time and produces a clean RO and IAOC. That sits at about a quarter of Pirani's entry price, and near the cost of two training seats a month. Chains and betting networks can pay S/ 1,000-3,000 a month (estimate, unverified).

## Competitor table and discussion

| Competitor or alternative | Type | Covers from the duty list | Gaming fit | Price | Verdict |
|---|---|---|---|---|---|
| SBS/UIF portals: Portal PLAFT, ROSEL, SISDEL, list pages ([SBS](https://www.sbs.gob.pe/prevencion-de-lavado-activos/supervisados/plaft-portal-de-prevencion-de-lavado-de-activos-y-financiamiento-del-terrorismo)) | free state | file IAOC, RO, ROS; officer designation; UN and PEP look-ups | generic | free | Filing only. No registers, reminders, training proof or IAOC drafting. Complement. |
| SUCTR systems (29 registered vendors) | mandatory machine monitoring | cash-out and machine data | gaming | bundled | Hold RO money data. No AML workflow found. Most likely entrant or best partner. |
| IGT, Win Systems (WIGOS), Cirsa, LNW, Octavian CMS | casino management | player tracking, cage, reporting | gaming | enterprise quote | WIGOS claims 300+ casinos and LatAm leadership ([SoloAzar](https://soloazar.com/en/category/casino/win-systems-reaches-300-casinos-with-its-wigos-cms)). No Peru SPLAFT module found (search). Big chains only. |
| Local SUCTR firms (Link Tek, Wargos, Orion Consulting, etc.) | Peruvian room systems | machine and cash data | gaming | not public | Closest to small rooms. Could add an RO module. Partner targets. |
| Pirani (Colombia) ([Peru page](https://www.piranirisk.com/es/hub-regulatorio/splaft-uif-sistema-antilavado-peru)) | generic GRC/AML SaaS | risk matrix, segmentation, screening, monitoring | none | about US$ 3,645/yr + AML add-on | Too generic and too dear for an 80-machine room. No RO, IAOC or gaming. |
| Inspektor / PLAFT Suite / Risk Global Consulting ([PLAFT Suite](https://plaft-suite.com/risk-consulting)) | screening + consulting | lists; manuals, training, UIF reports, audit | none listed | quote | Screening partner; consulting overlaps. |
| Experian Perú Listas PLAFT ([Experian](https://www.experian.com.pe/grandes-empresas/autenticacion-y-prevencion-del-fraude/listas-plaft)) | screening | lists and PEPs | none | quote | Screening only. |
| verifica.id ([site](https://verifica.id/reporte-pep-plaft-aml/)) | ID, PEP and list API; MINCETUR gambling-ban check | screening, banned-player list | some | not published | Already sells to gaming. Possible partner. |
| GBG, KYCAID | online KYC | onboarding identity | online | usage | Online only. No RO or IAOC. |
| Online platforms (SoftConstruct, Techsson, Calimaco, VPL) | player-account platforms | transactions; AML monitoring required for certification | online | revenue share | Online operators need at most an RO export and IAOC layer. |
| KYC Systems (Mexico) ([gaming page](https://kyc-systems.com/actividades-vulnerables/software-antilavado-juegos-apuestas-sorteos.html)) | vertical gaming PLD SaaS | client ID, beneficial owner, lists, SAT notices, automated monitoring | gaming | demo; no price | Mexico only, founded 2014. The model to copy and the most likely foreign entrant. |
| Law firms and consultancies (PRCP, Caro & Asociados, Garrigues, plaftperu, Grupo Contable) | services | manual, code, training, audit, IAOC help | PRCP active in gaming | quote | Today's main "solution". Channel more than rival. |
| Training sellers (Seminarios Top, Academia OC, APLA Academy) ([Academia OC](https://academiaoc.com/); [APLA](https://peru.lideresapla.com/programa-de-oficial-de-cumplimiento-en-peru/)) | courses | content and certificates | generic | S/ 169-211 per course | Cheap content, no tracking. Content partners. |
| Excel, Word and paper | in-house | all of it, by hand | - | staff time | The real incumbent at small firms (unverified). |

**Discussion.**

- **No Peruvian gaming SPLAFT software found.** This pass ran 18 competitor searches in Spanish and English, read the vendors in MINCETUR's own registers, and checked the main generic tools. B1's finding holds.
- **The money data sits with SUCTR vendors.** They are inside every room, so they are both the main threat and the fastest route in. A local SUCTR firm with many small-room clients is the best first partner (unverified whether any wants to).
- **Generic AML tools are a poor fit.** Pirani and screening services do not know a chip cash-out from a raffle winner. Their price also starts near S/ 1,000 a month.
- **Consultants are a channel.** They sell manuals, audits and training. One officer per firm means they cannot scale by holding officer roles. A console that lets them run 20 clients' registers helps them.
- **Online is crowded and partly solved by the platforms.** Only an export-and-report layer makes sense there.

## Channels

- **The registers are the prospect list.** Company, RUC, room names, addresses and machine counts for all 301 firms; the 49 online firms with domains; the 23 shop-network holders and their agents (pulled 10 Oct 2026, links above). Officer names are filed with the UIF, not published (unverified).
- **SONAJA (Sociedad Nacional de Juegos de Azar).** Represents makers, distributors and operators of casinos, slots, bingos and sports betting. It is 25 years old and called the most representative gaming body; president Fernando Calderón ([Focus Gaming News](https://focusgn.com/latinoamerica/sonaja-festejo-su-25-aniversario-en-peru), search summary; [Focus Gaming News](https://focusgn.com/latinoamerica/sonaja-preve-un-aumento-de-las-apuestas-en-peru-durante-el-mundial-y-refuerza-su-llamado-al-juego-responsable)). A member discount or a joint webinar is the strongest endorsement available.
- **ATCE (Asociación de Turismo y Centros de Entretenimiento del Perú).** 50+ operators at its 2023 assembly at the Peru Gaming Show ([Yogonet](https://www.yogonet.com/latinoamerica/noticias/2023/06/16/94981-la-asociacion-de-centros-de-entretenimiento-de-peru-reunio-a-mas-de-50-operadores-durante-su-asamblea-en-pgs-2023)). Current leadership unverified.
- **Peru Gaming Show.** 23rd edition, 17-18 June 2026, Jockey exhibition centre, Lima, 50+ brands, MINCETUR officials opening ([Yogonet](https://www.yogonet.com/international/news/2026/06/17/124217-peru-gaming-show-2026-latam-39s-gaming-and-networking-hub-kicks-off-today-in-lima)). The 2027 edition is the natural launch stage (date unverified).
- **IAGR 2026 in Lima,** 19-22 Oct 2026, with MINCETUR ([SiGMA](https://sigma.world/es/news/lima-sera-sede-de-la-iagr-2026/)). A regulators' event; good for meeting DGJCMT staff, not for selling.
- **MINCETUR's own outreach.** DGJCMT ran SPLAFT talks for operators in 2016-2017 ([2016](https://consultasenlinea.mincetur.gob.pe/casinos/Agenda%20_Noticias/pdfs/2016/CONVERSATORIO_SPLAFT_OCTUBRE_2016.pdf); [2017](https://consultasenlinea.mincetur.gob.pe/casinos/Agenda%20_Noticias/pdfs/2017/Presentacion_Charla_SPLAFT.pdf)). A free webinar on 01015-2026 with a known lawyer is the cheapest lead magnet.
- **Law firms and consultancies.** PRCP (publishes 01015-2026 and IAOC guides), Caro & Asociados (quoted in El Peruano), Garrigues Lima ([PRCP](https://prcp-r2-prd.postedin.com/FT-y-FP-incorporadas-por-la-Resolución-SBS-N°-01015-2026.pdf); [El Peruano](https://elperuano.pe/noticia/293055-carlos-caro-nueva-norma-contra-lavado-de-activos-implica-menor-tolerancia-ante-fallas-de-cumplimiento); [Garrigues](https://www.garrigues.com/es_ES/noticia/peru-aprobada-norma-prevenir-lavado-activos-financiamiento-terrorismo-sector-juegos)). Offer a multi-client console and a referral fee.
- **SUCTR vendors.** A data import or white-label deal reaches a vendor's installed rooms at once.
- **Trade press.** Focus Gaming News, Yogonet, SoloAzar and SiGMA cover every Peruvian rule change.
- **Training sellers.** Bundle the induction and training tracker with a course partner (Seminarios Top, Academia OC).
- **Timing.** Sell from November to January, before the 15 February IAOC and IAI deadline.

## Regional expansion

| Country | Comparable buyers | Duty | Fit | Source |
|---|---|---|---|---|
| **Colombia** | 401 localised-game operators (2024; later cited as 410), 3,700+ venues, about 109,000 slot machines (Jan 2026) | Coljuegos SIPLAFT rules for concession holders (Res. 20161200032334 of 2016, replaced by Res. 44514 of 2019) | **high**: many small slot operators, Spanish, similar duty | [El Heraldo](https://www.elheraldo.co/atlantico/ciudadanos-podran-conocer-en-linea-de-coljuegos-ventas-y-transferencias-de-maquinas) (search summary); [Focus Gaming News](https://focusgn.com/latinoamerica/bingos-y-casinos-colombianos-incrementaron-9-3-las-transferencias-a-la-salud-en-2025); [Normograma Supersalud](https://normograma.supersalud.gov.co/compilacion/docs/resolucion_coljuegos_32334_2016.htm) |
| Mexico | casino, betting and raffle permit holders (count not found) | LFPIORPI "vulnerable activity"; new risk-based rules mostly enforceable from 1 Mar 2027 | low: KYC Systems already sells a gaming PLD product | [KYC Systems](https://kyc-systems.com/actividades-vulnerables/software-antilavado-juegos-apuestas-sorteos.html) |
| Dominican Republic | casinos plus 71,000+ lottery shops registered for tax | Ley 155-17; DCJA supervises casinos and gaming; whether lottery shops are obligated is disputed | medium: big shop count, unclear duty | [vLex Res. 105-2022](https://do.vlex.com/vid/resolucion-n-105-2022-939725039); [Diario Libre](https://www.diariolibre.com/noticias/juristas-dicen-que-bancas-debieron-estar-en-ley-lavado-JL7159957); [Focus Gaming News](https://focusgn.com/latinoamerica/dominicana-sigue-el-conflicto-entre-la-direccion-de-casinos-y-juegos-de-azar-y-fenabanca) (search summaries) |
| Panama | 27 firms hold 100+ gaming concessions and licences | JCJ, SSNF and UAF AML supervision | low: few buyers | [Focus Gaming News](https://focusgn.com/latinoamerica/panama-intensifica-la-lucha-contra-el-blanqueo-de-capitales-en-el-juego) (search summary) |
| Chile | 25 casinos (22 under Ley 19.995, 3 municipal) | UAF (detail not checked) | low: too few | [Focus Gaming News](https://focusgn.com/latinoamerica/los-casinos-chilenos-aportaron-us225m-en-impuestos-durante-2025-pese-a-la-caida-de-ingresos-y-visitas) (search summary) |
| Ecuador | new online-betting licences; annual fee US$ 315,710 per operator | AML systems required; UAFE monitoring platform from Jan 2027 | low: few, large online buyers | [Primicias](https://www.primicias.ec/deportes/pronosticos-deportivos-apuestas-reglamento-ley-deporte-130298/); [Focus Gaming News](https://focusgn.com/latinoamerica/ecuador-promulga-el-reglamento-de-la-ley-del-deporte-licencias-obligatorias-control-antilavado-y-nuevas-reglas-para-los-pronosticos-deportivos) (search summaries) |
| Bolivia | one licensed casino (2023); sports betting banned | - | none | [SiGMA](https://sigma.world/news/bolivias-gaming-regulator-issues-over-1200-licences-in-2025/); [Focus Gaming News](https://focusgn.com/latinoamerica/casinos-en-bolivia-revocan-la-licencia-de-una-operadora) (search summaries) |

Colombia is the only clear second market. It has more operators than Peru, but its SARLAFT software market is more crowded (Pirani is Colombian), so the gaming-specific angle matters even more there (unverified).

## Implications for positioning and pricing

1. **Sell to the 301 firms, through consultants.** Drop B1's "outsourced officer with many clients" model; the rule forbids it. Give consultants and law firms a free multi-client console and a 20% referral fee.
2. **Be the gaming RO and IAOC tool, not a screening tool.** Core: RO capture (cash-outs of US$ 2,500+ and every promo winner), RO template export, 30-day induction and training proof, refresh reminders, and a pre-filled IAOC and IAI pack by 15 February. Buy screening from a partner (verifica.id, Inspektor or Experian).
3. **Two tiers that match the regime.** "Básico" for the 241 lighter-regime firms. "Reforzado" adds the risk assessment and client segmentation for the 60 firms with a casino, 500+ machines or rooms in the six named regions.
4. **Import from SUCTR.** A CSV import of ticket cash-outs from the common systems (IGT, WIGOS, Link Tek and local ones) removes double typing. Approach one local SUCTR vendor as a reseller.
5. **Test a betting-network add-on.** A simple shop-level client-capture form and an agent due-diligence register for the 23 holders. Price per shop. One mid-size holder (Free Games, 413 shops; Interplay, 228) is a better pilot than La Tinka.
6. **Keep online as an add-on.** Platforms already do AML monitoring. Offer only the RO export and IAOC pack.
7. **Suggested list prices** (estimates, unverified; US$ at S/ 3.45):

| Plan | Who | Count | Price a month | A year |
|---|---|---|---|---|
| Sala | 1 room | 185 | S/ 290 (about US$ 84) | S/ 3,480 |
| Cadena pequeña | 2-3 rooms | 89 | S/ 490 | S/ 5,880 |
| Cadena | 4-10 rooms | 21 | S/ 990 | S/ 11,880 |
| Corporativo | 11+ rooms, online, betting networks | 6 + 49 + 23 | from S/ 1,990 | from S/ 23,880 |
| Consultor | law firms, consultancies | ? | free console, 20% referral | - |

Offer 2 months free for annual prepayment. Card payment fits these amounts.

8. **Year-3 revenue (my estimate).**

| Case | Sala | Cadena pequeña | Cadena | Corporativo | Total S/ | US$ |
|---|---|---|---|---|---|---|
| Low | 23 | 11 | 2 | 2 | about 230,000 | about 67,000 |
| Base | 46 (25%) | 22 (25%) | 4 (20%) | 5 | about 460,000 | about 134,000 |
| High | 74 (40%) | 36 (40%) | 6 (30%) | 10 | about 790,000 | about 228,000 |

Base: 46 x 3,480 + 22 x 5,880 + 4 x 11,880 + 5 x 23,880 = S/ 457,000. The firm count is shrinking by 1-3% a year, so growth must come from Colombia or other Peruvian obligated sectors.

## Open questions

- What a gaming compliance officer is paid, and whether small rooms use a part-time employee or the general manager.
- How many single-room firms qualify for the general-manager-as-officer route (10 or fewer workers, MEPECO).
- The current RO template, upload frequency and file format for gaming (behind Portal PLAFT; needs a partner officer).
- Whether the UIF and MINCETUR still use different IAOC formats.
- Which SUCTR systems the 185 single-room firms use, and whether their vendors export cash-out data.
- Whether any SUCTR vendor or KYC Systems plans an RO/IAOC module for Peru.
- How betting-shop holders capture client data at agent shops today.
- Gaming SPLAFT fines since 2022 (MINCETUR does not publish a list that I found).
- What consultants charge for a SPLAFT update, an IAI or an IAOC.
- Colombia: exact SIPLAFT duties under Coljuegos Res. 44514-2019 and the local software on offer.

## Sources

Primary (registers and legal texts, read or counted directly):
- https://consultasenlinea.mincetur.gob.pe/casinos/Registros/registros.html?c=r_salasjuegos (room register; data from wsConsultaWeb.asmx/listarConsultasRegistros, OPR 12)
- https://consultasenlinea.mincetur.gob.pe/casinos/Registros/registros.html?c=r_modelosuctr (SUCTR register; OPR 8)
- https://apuestasdeportivas.mincetur.gob.pe/Titulares_autorizacion.html (online licence holders; listarConsultasRegistros_AD, OPR 3)
- https://apuestasdeportivas.mincetur.gob.pe/Registro_Salas_apuestas_deportivas.html (betting shops; OPR 10)
- https://consultasenlinea.mincetur.gob.pe/casinos/Splaft/splaft.html (MINCETUR SPLAFT page)
- https://consultasenlinea.mincetur.gob.pe/casinos/Splaft/pdf/Resoluci%C3%B3n_SBS_01015_2026.pdf (Res. SBS 01015-2026, full text)
- https://consultasenlinea.mincetur.gob.pe/casinos/Splaft/pdf/RESOLUCIoN_SBS_03622-2025.pdf (Res. SBS 03622-2025, full text)
- https://consultasenlinea.mincetur.gob.pe/casinos/Agenda%20_Noticias/pdfs/2017/Presentacion_Charla_SPLAFT.pdf
- https://consultasenlinea.mincetur.gob.pe/casinos/Agenda%20_Noticias/pdfs/2016/CONVERSATORIO_SPLAFT_OCTUBRE_2016.pdf (search result)
- https://consultasenlinea.mincetur.gob.pe/casinos/Agenda%20_Noticias/pdfs/2019/DGJCMT_JUNIO_2019_2.pdf
- https://consultasenlinea.mincetur.gob.pe/casinos/Agenda%20_Noticias/pdfs/2021/DGJCMT_Nov_2021.pdf
- https://apuestasdeportivas.mincetur.gob.pe/PDF/Formatos_2026.pdf
- https://www.congreso.gob.pe/Docs/comisiones2023/comercio/files/ppt_mincetur_congreso_-_ica_-_dgjcmt.pdf (returns 404 now; figures via search summary)
- https://elperuano.pe/noticia/285208-mef-establece-en-s-5-500-la-unidad-impositiva-tributaria-para-2026
- https://www.sbs.gob.pe/prevencion-de-lavado-activos/supervisados/plaft-portal-de-prevencion-de-lavado-de-activos-y-financiamiento-del-terrorismo
- https://www.sbs.gob.pe/Portals/5/jer/BOLETIN-INFORMATIVOS/2026/BOLETIN%20UIF%20N%C2%B0%20158.pdf (search summary)

Law firms, vendors and prices:
- https://prcp-r2-prd.postedin.com/FT-y-FP-incorporadas-por-la-Resolución-SBS-N°-01015-2026.pdf
- https://prcp-r2-prd.postedin.com/Oficial-de-cumplimiento-del-splaft-perfil-y-funciones-3.pdf (search summary)
- https://blog.prcp.com.pe/wp-content/uploads/2023/03/Sistema-de-Prevencion-de-Lavado-de-Activos-y-Financiamiento-del-Terrorismo-Los-sectores-mas-sancionados-en-el-2022-por-la-UIF.pdf (search summary)
- https://elperuano.pe/noticia/293055-carlos-caro-nueva-norma-contra-lavado-de-activos-implica-menor-tolerancia-ante-fallas-de-cumplimiento
- https://www.garrigues.com/es_ES/noticia/peru-aprobada-norma-prevenir-lavado-activos-financiamiento-terrorismo-sector-juegos
- https://piranirisk.com/es/planes-y-precios/cumplimiento-normativo?hsLang=en
- https://www.piranirisk.com/es/hub-regulatorio/splaft-uif-sistema-antilavado-peru
- https://plaft-suite.com/risk-consulting
- https://www.plaftperu.com/
- https://www.experian.com.pe/grandes-empresas/autenticacion-y-prevencion-del-fraude/listas-plaft
- https://verifica.id/reporte-pep-plaft-aml/
- https://kyc-systems.com/actividades-vulnerables/software-antilavado-juegos-apuestas-sorteos.html
- https://www.gbg.com/en/blog/igaming-and-kyc-in-peru/
- https://kycaid.com/blog/peru-vs-brazil-compliance-comparison/
- https://soloazar.com/en/category/casino/win-systems-reaches-300-casinos-with-its-wigos-cms
- https://seminariostop.com/seminarios-y-talleres/curso-anual-a-oficiales-de-cumplimiento-y-sujetos-obligados-a-informar-a-la-uif-sbs-laft/
- https://academiaoc.com/
- https://peru.lideresapla.com/programa-de-oficial-de-cumplimiento-en-peru/
- https://pe.computrabajo.com/trabajo-de-oficial-de-cumplimiento
- https://sueldojusto.pe/salarios/otras-carreras-de-administracion/ (search summary)

Market, press and channels:
- https://infomercado.pe/impuestos-de-casinos-y-tragamonedas-sumarian-s-210-millones-en-2023-segun-mincetur-ms/
- https://focusgn.com/latinoamerica/peru-multo-a-30-empresas-titulares-de-salas-de-juegos-de-azar
- https://focusgn.com/latinoamerica/la-industria-del-juego-de-peru-aporto-mas-de-us78m-en-impuestos-entre-enero-y-mayo (search summary)
- https://focusgn.com/latinoamerica/sonaja-festejo-su-25-aniversario-en-peru (search summary)
- https://focusgn.com/latinoamerica/sonaja-preve-un-aumento-de-las-apuestas-en-peru-durante-el-mundial-y-refuerza-su-llamado-al-juego-responsable (search summary)
- https://www.yogonet.com/latinoamerica/noticias/2023/06/16/94981-la-asociacion-de-centros-de-entretenimiento-de-peru-reunio-a-mas-de-50-operadores-durante-su-asamblea-en-pgs-2023 (search summary)
- https://www.yogonet.com/international/news/2026/06/17/124217-peru-gaming-show-2026-latam-39s-gaming-and-networking-hub-kicks-off-today-in-lima (search summary)
- https://sigma.world/es/news/lima-sera-sede-de-la-iagr-2026/ (search summary)

Regional:
- https://focusgn.com/latinoamerica/bingos-y-casinos-colombianos-incrementaron-9-3-las-transferencias-a-la-salud-en-2025
- https://www.elheraldo.co/atlantico/ciudadanos-podran-conocer-en-linea-de-coljuegos-ventas-y-transferencias-de-maquinas (search summary)
- https://normograma.supersalud.gov.co/compilacion/docs/resolucion_coljuegos_32334_2016.htm (search summary)
- https://do.vlex.com/vid/resolucion-n-105-2022-939725039 (search summary)
- https://www.diariolibre.com/noticias/juristas-dicen-que-bancas-debieron-estar-en-ley-lavado-JL7159957 (search summary)
- https://focusgn.com/latinoamerica/dominicana-sigue-el-conflicto-entre-la-direccion-de-casinos-y-juegos-de-azar-y-fenabanca (search summary)
- https://focusgn.com/latinoamerica/panama-intensifica-la-lucha-contra-el-blanqueo-de-capitales-en-el-juego (search summary)
- https://focusgn.com/latinoamerica/los-casinos-chilenos-aportaron-us225m-en-impuestos-durante-2025-pese-a-la-caida-de-ingresos-y-visitas (search summary)
- https://www.primicias.ec/deportes/pronosticos-deportivos-apuestas-reglamento-ley-deporte-130298/ (search summary)
- https://focusgn.com/latinoamerica/ecuador-promulga-el-reglamento-de-la-ley-del-deporte-licencias-obligatorias-control-antilavado-y-nuevas-reglas-para-los-pronosticos-deportivos (search summary)
- https://sigma.world/news/bolivias-gaming-regulator-issues-over-1200-licences-in-2025/ (search summary)
- https://focusgn.com/latinoamerica/casinos-en-bolivia-revocan-la-licencia-de-una-operadora (search summary)
