# Mexico private-security register keeper: market size, buyers and competition (deep dive 02)

Date: 10 Oct 2026. Builds on [the B1 report](../reports/mexico-b1.md). Scope: market size, buyers, competition, channels and regional expansion. Law, product design and go-to-market detail are covered by the other agents.

## Summary

- **The market is real but modest: about 6,300 state registrations, about 6,000-6,800 unique licensed firms, and about 1,500 federal firms.** INEGI's 2026 census of state governments counts 5,155 private-security firms registered in 31 states at end-2025, plus 1,147 in CDMX in 2024 ([INEGI CNSPF-E 2026](https://www.inegi.org.mx/contenidos/programas/cnspe/2026/doc/cnspe_2026_resultados.pdf); [Excélsior](https://www.excelsior.com.mx/nacional/personas-detras-empresa-segura)). AMESP's 2025 deck shows 1,487 DGSP-registered (federal) firms ([ANTAD 2025](https://simposioseguridad.antad.net/simposio2025/presentaciones/7-Los-paradigmas-de-la-seguridad-privada-en-Mexico.pdf)). I counted 446 valid permits in Nuevo León, about 120 in Tamaulipas and 1,232 firms on the last federal open-data list (2018).
- **Buyers are small.** Registered firms report an average of 21 staff to the states; 78% of DENUE establishments have 50 staff or fewer. The paying segment (11+ staff, guard workforce) is about **3,300-3,700 firms**, including about **1,100-1,200 federal firms**, the best first target.
- **The registers are incomplete and regulators are tightening.** State registers hold 108,426 staff against 466,587 IMSS-insured jobs in the sector. The DGSP published fines and reprimands in 2026; Baja California is revalidating every firm after finding 80 with no activity records; Jalisco proposed a public state register with sanctions (Sep 2026).
- **Today's practice:** 2016 PDF forms for the federal register, Excel and email for states, and an in-house gestor at about MXN 18,000 a month. Corporate clients add pressure: they demand permits, REPSE and association membership from their guard vendors.
- **No product does the job (15 checked).** The closest is **Vigon**, a Mexico-focused guard ERP with payroll, staff files and expiry alerts but no DGSP or state reports; it is the most likely entrant or a partner. Others (Edit Innovation, Track Vigilante, Evidence, C-Guard Pro, GuardsPro, TrackTik) cover operations only. Payroll (CONTPAQi, NOI) is a data source, not a rival.
- **Software budgets are small.** Cloud payroll for 150 staff costs about MXN 11,700 a year (CONTPAQi 2026). Federal fees are about MXN 33,700 per modality per year; fines run MXN 113,000-170,000. A price of **MXN 750 a month (single-state) to MXN 1,900 a month (federal, 2 states)** fits better than B1's MXN 3,000 a month.
- **Revised year-3 revenue: about MXN 3.8m (USD 210k) base**, MXN 1.8m low, MXN 8.7m high. B1's base was MXN 5.6m.
- **Channels:** AMESP (290+ firms), ASUME (31 associations), Expo Seguridad México (17,000 visitors), MercadoSeguridad.mx (sells firms lead plans at MXN 2,990-9,990 a month), state padrones with permit expiry dates, DOF sanction notices, CONTPAQi partners and gestorías.
- **Abroad, the duty exists but states run platforms:** Colombia (1,500+ firms, mandatory RENOVA monthly reports), Guatemala (new platform, Apr 2026), Chile (new registry due Nov 2026). Mexico's next markets are its own states.
- **Biggest unknowns:** whether dgsp.sspc.gob.mx takes filings online (unreachable from here), each state's monthly format, gestoría fees, and real willingness to pay.

## Buyer segments

Counts are of firms that a regulator has on its books, unless stated. A firm with a federal authorisation (2+ states) can appear in several state registers, so state totals overstate unique firms.

| Segment | Count | Source | Year | Confidence |
|---|---|---|---|---|
| **Private-security firms registered with state security institutions, 31 states (CDMX not included)** | **5,155** firms, with **108,426** staff (86.4% operational, 8.6% admin, 2.8% directors) and 26,941 firearms | [INEGI, CNSPF-E 2026 results, section "Seguridad privada"](https://www.inegi.org.mx/contenidos/programas/cnspe/2026/doc/cnspe_2026_resultados.pdf) | end of 2025 | high (official census of state governments). Counts firm-state registrations, not unique firms. |
| Same series, earlier years | 5,875 (2021), 6,138 (2022), 6,263 (2023), 5,124 without CDMX / 6,271 with CDMX (2024) | same; [CNSPF-E 2025 results](https://www.inegi.org.mx/contenidos/programas/cnspe/2025/doc/cnspe_2025_resultados.pdf) | 2021-2024 | high |
| CDMX firms registered | 1,147 | [Excélsior, 31 Aug 2026 (A. Zúñiga, ASUME/COPARMEX)](https://www.excelsior.com.mx/nacional/personas-detras-empresa-segura); matches 6,271 - 5,124 in the INEGI series | 2024 | high |
| **All state registrations incl. CDMX** | **about 6,300** | 5,155 + 1,147 (my sum) | 2024-2025 | medium-high |
| Top states (end-2025) | Nuevo León 516, Edomex 478, Baja California 316, San Luis Potosí 300, Chihuahua 286, Puebla 248, Coahuila 234, Quintana Roo 219, Querétaro 187, Aguascalientes 171, Sonora 167. Jalisco reports only 53 to INEGI. | [INEGI CNSPF-E 2026](https://www.inegi.org.mx/contenidos/programas/cnspe/2026/doc/cnspe_2026_resultados.pdf) | 2025 | high (Jalisco looks under-reported: a 2026 press piece says 289 firms operate there, 83 state-authorised, [N+](https://www.nmas.com.mx/jalisco/seguridad/habra-registro-de-empresas-de-seguridad-privada-en-jalisco/)) |
| Nuevo León valid state permits | **446** valid permits (my count of the July 2026 padrón). Of the 313 permit codes I could parse, 81% include modality II (guarding of property), alone or with other modalities. About 12% are individuals, not companies. | [NL padrón, 20 Jul 2026](https://www.nl.gob.mx/sites/default/files/repositorio/Dependencias/Secretar%C3%ADa%20de%20Seguridad/Repositorios/20260721_padron_empresas_seguridad_julio.pdf) | Jul 2026 | high |
| Tamaulipas authorised firms | **about 120** (my count of the 6 Aug 2026 list; 114 are authorised for "vigilancia de bienes inmuebles"). The list includes national firms such as Allied Universal and SEPSA. | [Tamaulipas SSP list, Aug 2026](https://www.tamaulipas.gob.mx/seguridadpublica/wp-content/uploads/sites/10/2026/08/empresas-de-seguridad-privada-autorizadas-julio-2026-1.pdf) | Aug 2026 | high |
| **Federal (DGSP) registered firms, current** | **1,487** | [AMESP deck at ANTAD Simposio de Seguridad 2025](https://simposioseguridad.antad.net/simposio2025/presentaciones/7-Los-paradigmas-de-la-seguridad-privada-en-Mexico.pdf), slide "Cifras de la seguridad privada en México" (my text extraction) | 2025 | medium-high (industry association quoting DGSP; no official list). A directory claims 524 firms "with valid DGSP authorisation" in CDMX alone ([MercadoSeguridad.mx](https://www.mercadoseguridad.mx/empresas-autorizadas-dgsp/cdmx)); 524 of 1,487 is 35%, close to CDMX's 36% share of the 2018 list, so the two figures agree |
| Jalisco firms registered and valid | 289 firms, about 10,500 guards, 35 firms licensed for armed staff | [Crónica Jalisco, 29 Sep 2026](https://www.cronica.com.mx/jalisco/guadalajara/2026/09/29/buscan-ejercer-mayor-control-sobre-las-empresas-de-seguridad-privada-en-jalisco/) | Sep 2026 | high |
| **Federal (DGSP) authorised firms, 2+ states** | **1,232** in the last open-data list. Head office: CDMX 444, Edomex 204, Jalisco 191, Nuevo León 80, Puebla 34, Baja California 29. 100-220 new files a year in 2012-2016. | my count of the [DGSP open-data list](https://www.datamx.io/dataset/direccion-general-de-seguridad-privada/resource/9e1109a2-5762-4a75-8f27-e221a815661d) | Oct 2018 | high for 2018; the 2026 number is not published (unverified). A Querétaro industry leader puts it at 1,200-1,400 ([Plaza de Armas, via search snippet](https://plazadearmas.com.mx/?p=139322), undated) |
| Overlap check | About 20% of Nuevo León permit holders and about 10% of Tamaulipas ones match a name on the 2018 federal list (my fuzzy name match; noisy) | my count from the three lists above | 2018-2026 | low-medium |
| **Unique licensed firms (my estimate)** | **about 6,000-6,800**: roughly 4,700-5,300 single-state firms (6,300 registrations less 15-25% that belong to federal firms) plus about 1,500 federal firms | reasoned from the rows above | 2026 | medium (unverified estimate) |
| Firms with a guard workforce (modality II) | about 75-80% of licensed firms, so **about 4,500-5,400** | NL modality share (81%), rounded down, applied to the unique-firm estimate | 2026 | low-medium |
| Establishments in SCIAN 5616 (investigation, protection and security services), DENUE | **4,538** establishments: 1,830 with 0-10 staff, 1,727 with 11-50, 346 with 51-100, 635 with 101+. Top: CDMX 455, Nuevo León 396, Edomex 308. | [Data México, industry 5616](https://www.economia.gob.mx/datamexico/en/profile/industry/investigation-and-security-services) | May 2026 | high. Counts establishments (a branch is one), and includes alarm monitoring and private investigators. |
| Economic Census 2019, SCIAN 5616 | 4,134 units; gross production MXN 85bn | same | 2018 data | high |
| IMSS employer registrations, "servicios de protección y custodia" | **7,670** employer registrations with **466,587** insured jobs | [Excélsior, 31 Aug 2026](https://www.excelsior.com.mx/nacional/personas-detras-empresa-segura), citing IMSS | Jul 2026 | medium-high (secondary source for an IMSS figure). A firm has one registration per IMSS sub-office, so unique employers are fewer. This is the formal universe, licensed or not. |
| Guards and watchmen in the workforce | 866,398 "vigilantes y guardias en establecimientos" (ENOE Q2 2026); 607,541 people work in the 5616 industry, 470,539 of them as guards | same (citing INEGI ENOE) | Q2 2026 | medium-high |
| Firm count claimed by the industry | "more than 8,000" (AMESP, cited in a bill); 6,600, half registered (A. Desfassiaux); 8,500, of which 3,500 registered and 5,000 outside the law (ANERPV president) | [Gaceta Parlamentaria, 8 Sep 2026](https://gaceta.diputados.gob.mx/Gaceta/66/2026/sep/20260908-II-1-2.html); [The Logistics World](https://thelogisticsworld.com/talento-humano/empresas-de-seguridad-crecen-de-modo-importante-en-el-pais) and [The Logistics World, "histórico" section](https://thelogisticsworld.com/historico/crearan-camara-sectorial-de-seguridad-para-mercancias) (search snippets; page returned 403; the "histórico" path suggests older articles re-dated 2026) | unclear | low (estimates) |
| AMESP member firms | 250 | [Zeta Tijuana, Aug 2026](https://zetatijuana.com/2026/08/advierten-aumento-de-empresas-irregulares-de-seguridad-privada-piden-padron-unico/) | 2026 | medium |

**What the numbers say.**
- The licensed universe is about **6,300 state registrations** and an estimated **6,000-6,800 unique firms**, of which about **1,500 are federal** (AMESP: 1,487 DGSP-registered). That is lower than the "8,000+" industry claim, which includes informal firms, and higher than B1's working figure of 3,500.
- **The registers see only a fraction of the workforce.** State registers hold 108,426 staff (31 states). IMSS shows 466,587 insured jobs in the sector. Even allowing for CDMX and for federal firms that report staff to the DGSP rather than to states, much of the workforce is missing from the state registers (reasoned from the two sources above). That gap is the problem a register keeper addresses, and it is also why regulators keep asking for a "padrón único".
- **Buyers are small.** 5,155 registered firms report 108,426 staff, an average of 21 each. In DENUE, 78% of establishments have 50 staff or fewer.
- **Paying segment (my estimate):** firms with 11+ staff and a guard workforce, about **3,300-3,700**: about 2,200-2,500 single-state firms (60% of DENUE establishments have 11+ staff; about 80% of permits include guarding) plus about **1,100-1,200 federal firms** with a guard workforce, the monthly DGSP report and state reports (1,487 less large groups and non-guard modalities such as alarms, armouring and background checks; my estimate). Micro firms (0-10 staff) are about 40% of establishments and are a weak target.

## Buyer profile and pain

**Who they are.**
- **Mostly small guard firms.** 5,155 state-registered firms report 108,426 staff, about 21 each ([INEGI CNSPF-E 2026](https://www.inegi.org.mx/contenidos/programas/cnspe/2026/doc/cnspe_2026_resultados.pdf)). In DENUE, 1,830 of 4,538 establishments have 0-10 staff and 1,727 have 11-50 ([Data México](https://www.economia.gob.mx/datamexico/en/profile/industry/investigation-and-security-services)). Many permit holders in Nuevo León are individuals, not companies (my count of the [NL padrón](https://www.nl.gob.mx/sites/default/files/repositorio/Dependencias/Secretar%C3%ADa%20de%20Seguridad/Repositorios/20260721_padron_empresas_seguridad_julio.pdf)).
- **A federal tier of about 1,500 firms.** AMESP's 2025 deck for the ANTAD retail-security symposium shows "Empresas registradas DGSP 1487" and 446,304 IMSS workers ([AMESP at ANTAD 2025, slide "Cifras de la seguridad privada en México"](https://simposioseguridad.antad.net/simposio2025/presentaciones/7-Los-paradigmas-de-la-seguridad-privada-en-Mexico.pdf)). These firms carry the monthly DGSP report and a registration in each state where they work.
- **A few large groups** that build their own tools. Grupo EULEN México (about 5,000 staff) runs its own app, Movilizando.me ([EULEN, 26 Jun 2025](https://www.eulen.com/mx/wp-content/uploads/sites/8/2025/07/02-Grupo-EULEN-Mexico-Seguridad-formal-frente-al-riesgo-de-la-informalidad-en-el-sector.pdf)). Allied Universal and SEPSA appear on state lists ([Tamaulipas list](https://www.tamaulipas.gob.mx/seguridadpublica/wp-content/uploads/sites/10/2026/08/empresas-de-seguridad-privada-autorizadas-julio-2026-1.pdf)). These are not the target.
- **A large informal fringe.** The industry says only about half of firms are registered ([The Logistics World, search snippet, date unclear](https://thelogisticsworld.com/talento-humano/empresas-de-seguridad-crecen-de-modo-importante-en-el-pais)). A study cited by InSight Crime put 40-75% of firms outside federal and state registers ([InSight Crime](https://insightcrime.org/es/noticias/noticias-del-dia/informe-advierte-que-empresas-de-seguridad-de-mexico-deben-ser-mejor-reglamentadas/), older study, date unverified). Informal firms will not buy a compliance tool.

**How they comply today.**
- **Federal register:** the official route is a set of seven PDF forms on gob.mx (aparatos, armamento, canes, fornituras, radios, uniformes, vehículos), dated 2016, with no online submission described ([gob.mx/segob trámite page](https://www.gob.mx/segob/acciones-y-programas/inscripcion-de-armamento-vehiculos-y-equipo-incluyendo-los-cambios-en-los-inventarios-correspondientes-y-demas-medios-relacionados-con-los-servicios-de-seguridad-privada)). A DGSP site exists at dgsp.sspc.gob.mx (linked from [MercadoSeguridad.mx](https://www.mercadoseguridad.mx/empresas-autorizadas-dgsp/cdmx)), but I could not reach it (connection reset). Whether it takes filings is unverified.
- **State registers:** Baja California wants a monthly pack of Excel and PDF files by email, due even with no changes ([BC guide](https://seguridadbc.gob.mx/Planeacion/padron/GUIA%20LLENADO%20CORRECTO%20DEL%20INFORME%20MENSUAL.pdf)). Other states publish monthly lists, which suggests monthly paper or email flows (Tamaulipas, Oaxaca, Nuevo León lists above).
- **People:** an in-house "gestor gubernamental" or an outside gestoría/lawyer handles permits, renewals and CUIP ([Computrabajo ad](https://mx.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-gestor-gubernamental-en-cuauhtemoc-BA3B0D3F75D2544A61373E686DCF3405)). Staff files sit in payroll software (CONTPAQi, Aspel NOI), Excel "cardex" sheets and paper (reasoned; the BC guide insists the cardex, the state system and payroll match).
- **Clients push compliance down.** Corporate buyers ask for the permits, REPSE registration, SAT compliance opinion and association membership before they hire a guard firm. AMESP's ANTAD deck lists exactly this checklist for retailers ([AMESP at ANTAD 2025](https://simposioseguridad.antad.net/simposio2025/presentaciones/7-Los-paradigmas-de-la-seguridad-privada-en-Mexico.pdf)). REPSE contractors already upload monthly and quarterly evidence (CFDI payroll, IMSS/INFONAVIT payments, ICSOE/SISUB) to client portals such as BDO's REPSE module and Xternall ([BDO REPSE webinar](https://www.bdomexico.com/getmedia/514a6f9e-9faf-406d-b485-82f4be6a21c6/Webinar-REPSE-070825.pdf?ext=.pdf); [El CEO on Xternall](https://elceo.com/negocios/xternall-la-plataforma-que-ayuda-a-las-empresas-a-supervisar-a-sus-proveedores-repse/)).

**Their pain (evidence).**
- **Many overlapping permits.** EULEN says that, depending on the area, a firm may need "up to 60 different authorisations per state" (federal, state and municipal) ([EULEN, Jun 2025](https://www.eulen.com/mx/wp-content/uploads/sites/8/2025/07/02-Grupo-EULEN-Mexico-Seguridad-formal-frente-al-riesgo-de-la-informalidad-en-el-sector.pdf)). A Coparmex CDMX leader counts 32 different state laws and "up to 100 contradictions" (search snippet; source page not opened, unverified).
- **No single register.** AMESP: "tenemos registros en cada estado"; it asks for a federal law and a "padrón único" ([Zeta Tijuana, Aug 2026](https://zetatijuana.com/2026/08/advierten-aumento-de-empresas-irregulares-de-seguridad-privada-piden-padron-unico/)).
- **Inspections find register gaps, and the DGSP sanctions them.** In 2026 the DOF published reprimands and fines of 1,000-1,500 UMA (MXN 113,140-169,710) for unreported altas, bajas, uniforms, branch closures and training ([SIDOF 5799650](https://sidof.segob.gob.mx/notas/docFuente/5799650); [SIDOF 5797220](https://sidof.segob.gob.mx/notas/docFuente/5797220); [SIDOF 5795553](https://sidof.segob.gob.mx/notas/docFuente/5795553)).
- **States are cracking down too.** Baja California's security ministry found 80 of 300+ firms with no record of activities, some operating for more than 10 years, plus agents working unregistered and arms that did not match permits. It announced a review and revalidation of every firm ([El Imparcial, 3 Jul 2025](https://www.elimparcial.com/mxl/mexicali/2025/07/04/pausa-en-certificaciones-de-guardias-es-por-irregularidades-en-empresas-de-seguridad/)). Jalisco's council cancelled 20 firms' registrations (search snippet citing Milenio; unverified date).
- **State registers hold far fewer staff than IMSS shows.** 108,426 staff in state registers (31 states) against 466,587 insured jobs (IMSS, Jul 2026). Part of the gap is scope (CDMX, and federal firms reporting to the DGSP), part is likely under-reporting (unverified). For formal firms the reporting burden grows with headcount and staff turnover. EULEN presents its own turnover of "under 6%" as a selling point, which suggests the norm is much higher (reasoned).
- **I found no forum or social-media threads** where owners discuss the monthly report itself (searches in Spanish; no URL for a negative result). The pain evidence is from regulators, sanctions and associations, not from users. Interviews must confirm it.

## Willingness to pay

All MXN amounts exclude IVA (16%) unless stated. USD at about MXN 18 (my rounding).

**What firms already pay, per year.**

| Item | Amount | Source | Notes |
|---|---|---|---|
| Federal DGSP authorisation or yearly revalidation, per modality | MXN 25,947.60 for the study of the request (guarding of property or of people; MXN 25,523.68 for cash-in-transit) plus MXN 7,785.15 for issuing the authorisation | [Ley Federal de Derechos art. 195-X (mley.mx)](https://mley.mx/LFD/articulo/195-x/) (search snippet; page not opened) | about MXN 33,700 a year for one modality; the 2026 indexed amounts may be a little higher (unverified) |
| State permit revalidation | MXN 14,114.10 (Tabasco), MXN 12,740 (Michoacán), per state per year | [Papelea, Tabasco](https://papelea.com/mx/estado-de-tabasco/revalidacion-del-permiso-o-autorizacion-para-la-prestacion-del-servicio-portal-tabasco-1); [Michoacán fee list 2024](https://ssp.michoacan.gob.mx/wp-content/uploads/2024/05/COSTOS-DE-AUTORIZACI%C3%93N-SEGURIDAD-PRIVADA.-LEY-DE-INGRESOS-DEL-ESTADO-DE-MICHOACAN-2024.pdf) (via B1) | a federal firm in 4 states pays about MXN 50,000-60,000 a year in state fees on top (reasoned) |
| In-house gestor for DGSP, state permits and CUIP | MXN 4,153 a week, about MXN 18,000 a month gross, about MXN 216,000 a year before employer social costs | [Computrabajo ad, security firm in Cuauhtémoc, CDMX](https://mx.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-gestor-gubernamental-en-cuauhtemoc-BA3B0D3F75D2544A61373E686DCF3405) | the role also keeps "the calendar of permit expiries", i.e. the job the software would do |
| Payroll software, cloud (CONTPAQi Nóminas Nube) | MXN 3,290 (10 employees), 4,890 (20), 6,490 (50), 8,690 (100) a year, plus MXN 60-200 per extra employee | [CONTPAQi official price list 2026](https://www.contpaqi.com/hubfs/Listas%20de%20precios/Lista_de_Precios_Sistemas_CONTPAQi_2026.pdf) | a 150-guard firm pays about MXN 11,700 a year for cloud payroll (my calculation: 8,690 + 50 x 60) |
| Payroll software, desktop (CONTPAQi Nóminas) | MXN 5,590 new / 5,290 renewal (one company), 7,690 / 7,390 (multi-company); MXN 1,690-1,790 per extra user | same | yearly licence |
| Guard-operations apps | USD 5-10 per user per month (GuardsPro), USD 5 per user (C-Guard Pro) | [GuardsPro pricing](https://www.guardspro.com/pricing); [ComparaSoftware, C-Guard Pro](https://www.comparasoftware.com/c-guard-pro) (via B1) | Mexican vendors (Vigon, Edit Innovation, Track Vigilante) do not publish prices |
| Online guard course (EC0573 standard) | MXN 490 per person, DC-3 certificate extra | search snippet of a Mexican training site (capacitaciondepersonal.com.mx), unverified | training is per head and recurring |
| Fines (DGSP, 2026) | MXN 113,140-169,710 per sanction (1,000-1,500 UMA), plus a public reprimand | [SIDOF 5795553](https://sidof.segob.gob.mx/notas/docFuente/5795553); [SIDOF 5797220](https://sidof.segob.gob.mx/notas/docFuente/5797220) | most 2026 sanctions were reprimands only (B1) |

**Revenue per firm.** Firms bill clients MXN 6,200-15,000 per guard per month ([blog estimate, via B1](https://modelosdeplandenegocios.com/blogs/news/cuanto-cuesta-servicio-seguridad-privada)). The 5616 industry produced MXN 85bn in 2018 across 4,134 units, about MXN 20m per unit ([Data México](https://www.economia.gob.mx/datamexico/en/profile/industry/investigation-and-security-services)). A 50-guard firm turns over roughly MXN 5-8m a year (reasoned).

**What this means for price.**
- **The gestor is the real budget line.** A tool that saves half a gestor's time is worth MXN 7,000-9,000 a month to a federal firm (reasoned from the ad above). Small single-state firms have no gestor; the owner or an assistant does it.
- **Software budgets are small.** The firm's payroll software costs MXN 3,000-12,000 a year. A register tool priced well above payroll will meet resistance. B1's proposal (MXN 36,000 a year for a 150-guard, 2-state firm) is about 3x the payroll software and about 17% of a gestor's salary.
- **Price that fits (my estimate, to test):**
  - single-state firm up to 50 staff: MXN 600-900 a month (MXN 7,000-11,000 a year);
  - federal firm, 50-300 staff: MXN 1,500-2,500 a month including 2 states;
  - extra state: MXN 300-500 a month;
  - gestoría or consultant licence: MXN 3,000-5,000 a month for 10-20 client firms.
- **Willingness to pay is unproven.** I found no evidence of firms paying for a register or reporting tool today, and no published gestoría fee for this work (searches in Spanish; no URL for a negative result).

## Competitor table and discussion

Duty list used for the check: (1) staff file with altas/bajas and cause; (2) uniforms, arms, vehicles, radios, dogs and other equipment inventory with changes; (3) branches and representatives; (4) DGSP monthly report (LFSP art. 13); (5) state monthly reports; (6) CUIP status; (7) medical, psychological and toxicology exam expiry; (8) training records; (9) inspection pack and audit trail.

| Product or alternative | Origin | What it covers against the duty list | Price | Customers | Verdict |
|---|---|---|---|---|---|
| Official DGSP forms (7 PDF formats: aparatos, armamento, canes, fornituras, radios, uniformes, vehículos) | SSPC/Segob | Blank forms only; no record keeping; no online submission described | free | all federal firms | baseline, not a rival. [gob.mx](https://www.gob.mx/segob/acciones-y-programas/inscripcion-de-armamento-vehiculos-y-equipo-incluyendo-los-cambios-en-los-inventarios-correspondientes-y-demas-medios-relacionados-con-los-servicios-de-seguridad-privada) |
| DGSP website (dgsp.sspc.gob.mx) | SSPC | unknown; could not be reached | free | - | **key unknown** (unverified). If it takes online filings, the product becomes a pre-filler and record keeper |
| State formats (e.g. Baja California Excel cardex + email; a state "private-security system") | states | Formats and an inbox; the BC guide says the cardex, "the private-security system" and payroll must match, so BC also has some state system | free | each state's firms | baseline; creates the reconciliation job. [BC guide](https://seguridadbc.gob.mx/Planeacion/padron/GUIA%20LLENADO%20CORRECTO%20DEL%20INFORME%20MENSUAL.pdf) |
| **Vigon** (vigonops.com; demo booked through "alcodea") | LatAm, Mexico as main market (own claim) | Shifts, payroll from attendance (overtime, Sunday premium, IMSS/Infonavit deductions), digital staff files with "expiry alerts per guard" (ID, exams, training), multi-company. No DGSP, Registro, state reports, CUIP, uniforms, arms or vehicles module | not published; "scales per active guard or by plan" | not named | **closest product; partial (1, 7, 8 in part)**. Most likely entrant or integration partner. [Vigon Mexico page](https://vigonops.com/erp-seguridad-privada-mexico/); [home](https://vigonops.com/) |
| Edit Innovation | Guadalajara, Mexico | Guard profiles, certification tracking, digitised documents, shifts, GPS, attendance, logbook; payroll via separate ERP. No DGSP or state reports | not published | none named | partial (1 in part, 7-8 in part). [Edit Innovation](https://editinnovation.com/software-seguridad-privada.html) |
| Track Vigilante | Mexico | Rounds, shifts, attendance, incidents, training courses. No DGSP or state reports | not published | "50+ clients in 15+ Spanish-speaking countries" | does not do the job. [Track Vigilante](https://www.trackvigilante.com/) |
| Evidence (evidence.com.mx / evidencetec.com) | Mexico | Field supervision app; ERP for security and electronic-security integrators (serial inventory, service orders, billing). No guard files or arms | not published | - | does not do the job. [Evidence](https://www.evidence.com.mx/docs/app-y-software-para-empresas-de-seguridad-privada); [Evidence ERP](https://evidencetec.com/industrias/software-empresas-seguridad-privada) |
| C-Guard Pro | LatAm | GPS, QR/NFC rounds, shifts, payroll | USD 5/user/month | - | does not do the job. [ComparaSoftware](https://www.comparasoftware.com/c-guard-pro) |
| GuardsPro / Guardso | US | Scheduling, rounds, licence upload and expiry alerts | USD 5-10/user/month | - | partial (7 only). [GuardsPro](https://www.guardspro.com/pricing) |
| TrackTik, Silvertrac, GuardTek (Trackforce Valiant) | US/Canada | Global guard workforce platform; "560,000+ users, 200,000+ sites, 50+ countries" | enterprise quotes | no Mexican client named | does not do the job; aimed at large firms. [Trackforce (ES)](https://www.trackforce.com/es/?p=5088) |
| Secusoft, Kizeo Forms, Liberes oClock, ShiftFlow | NL / FR / other | Time, rounds, forms | various | - | does not do the job. [Secusoft](https://www.secusoft.mx/); [Kizeo](https://www.kizeo-forms.com/lat/solucion-universal/software-empresas-de-vigilancia-seguridad-privada/) |
| In-house apps of large groups (EULEN "Movilizando.me") | - | client-facing field reporting | - | the group itself | not a market rival; large groups are not the target. [EULEN](https://www.eulen.com/mx/wp-content/uploads/sites/8/2025/07/02-Grupo-EULEN-Mexico-Seguridad-formal-frente-al-riesgo-de-la-informalidad-en-el-sector.pdf) |
| Payroll: CONTPAQi Nóminas, Aspel NOI, Runa, Worky | Mexico | CFDI payroll, IMSS/SUA; holds the staff master | MXN 3,290-8,690+ a year (CONTPAQi cloud) | very wide | not a rival; **the data source to import from**. [CONTPAQi 2026](https://www.contpaqi.com/hubfs/Listas%20de%20precios/Lista_de_Precios_Sistemas_CONTPAQi_2026.pdf) |
| REPSE vendor-compliance portals (BDO REPSE module, Xternall) | Mexico | The *client* collects the guard firm's REPSE evidence monthly | paid by the client; not published | corporate buyers | adjacent; shows firms already upload monthly evidence. [BDO](https://www.bdomexico.com/getmedia/514a6f9e-9faf-406d-b485-82f4be6a21c6/Webinar-REPSE-070825.pdf?ext=.pdf); [Xternall](https://elceo.com/negocios/xternall-la-plataforma-que-ayuda-a-las-empresas-a-supervisar-a-sus-proveedores-repse/) |
| Foreign ERPs for guard firms (Avancys, Colombia; DOIT, Spain) | CO / ES | Built for Colombian or Spanish rules | - | - | not in Mexico. [Segurilatam on Avancys](https://www.segurilatam.com/actualidad/avancys-soluciones-de-gestion-empresarial-para-la-industria-de-la-vigilancia-y-seguridad-privada_20210202.html) |
| **In-house gestor, gestorías, lawyers, Excel** | Mexico | All duties by hand | about MXN 18,000 a month for an in-house gestor | most formal firms (reasoned) | **the real incumbent.** A channel and a user of the tool, not a killer |
| MercadoSeguridad.mx | Mexico | Directory of firms "with valid DGSP authorisation" (524 in CDMX), with paid lead plans for firms | MXN 2,990 / 5,990 / 9,990+ a month ([plans](https://www.mercadoseguridad.mx/planes)) | "1,000+" firms on the platform (own claim) | not a rival; **a channel** and a lead source. [MercadoSeguridad](https://www.mercadoseguridad.mx/empresas-autorizadas-dgsp/cdmx) |

**Discussion.**
- **No product does the job.** I checked 15 products and alternatives. None keeps the Registro data (staff altas/bajas with cause, uniforms, arms, vehicles, branches) or builds the DGSP or state monthly reports. This confirms B1 with a wider check.
- **Vigon is the one to watch.** It targets Mexican guard firms, already holds staff files with expiry alerts and runs payroll. Adding a DGSP report is a small step for it. Two answers: move first and own the regulatory content, or integrate with it (import its staff list).
- **The free baseline is weak.** The federal route is 2016 PDF forms and the state routes are Excel and email. This is unlike Colombia, where the regulator runs a mandatory online platform (see below).
- **Payroll is a data source, not a rival.** Import from CONTPAQi/NOI exports so that the staff master stays the same as payroll, which is exactly what the BC guide demands.
- **The open risk** is a DGSP online system that I could not see. If it exists, the product still keeps the records and prepares the data, but the "report generator" value shrinks for the federal tier.

## Channels

**Associations and chambers.**
- **AMESP** (Asociación Mexicana de Empresas de Seguridad Privada): "more than 290 firms" per its own 2025 deck ([ANTAD 2025](https://simposioseguridad.antad.net/simposio2025/presentaciones/7-Los-paradigmas-de-la-seguridad-privada-en-Mexico.pdf)); 250 per the press ([Zeta Tijuana, Aug 2026](https://zetatijuana.com/2026/08/advierten-aumento-de-empresas-irregulares-de-seguridad-privada-piden-padron-unico/)). It campaigns for a "padrón único", so a register tool fits its message. Its deck tells corporate buyers to demand permits, REPSE and AMESP membership. Best first partner: a member discount or a co-branded "Registro al día" checklist.
- **ASUME**: an umbrella of about 31 security associations, president Armando Zúñiga Salinas, who is also a national vice-president of COPARMEX ([Portal Automotriz, undated](https://portalautomotriz.com/print/noticias/seguridad/se-incorpora-el-consejo-nacional-de-industria-del-blindaje-a-asume); [Excélsior, Aug 2026](https://www.excelsior.com.mx/nacional/personas-detras-empresa-segura)). He writes a column on sector statistics, a natural outlet for data-driven content.
- **ANERPV** (vehicle tracking and protection) and a proposed "Cámara Nacional de la Industria de la Seguridad Privada" (search snippet of [The Logistics World](https://thelogisticsworld.com/historico/crearan-camara-sectorial-de-seguridad-para-mercancias); date unclear, unverified).
- **ASIS Capítulo México**: monthly meetings, 158 attendees in June 2026 ([ASIS report](https://asis.org.mx/docs/reportes/JUNE-REPORT-2026.pdf), via B1). Mostly corporate security buyers, who can push compliance down to vendors.
- **State associations** exist but I found no current lists (unverified). State security councils are active: Jalisco's Secretariado Ejecutivo backs a public, permanently updated state register with sanctions for firms not on it ([Crónica, 29 Sep 2026](https://www.cronica.com.mx/jalisco/guadalajara/2026/09/29/buscan-ejercer-mayor-control-sobre-las-empresas-de-seguridad-privada-en-jalisco/)).

**Events.**
- **Expo Seguridad México**, 2-4 June 2026, Centro Citibanamex, CDMX: 400+ exhibitors, about 17,000 visitors ([SIA event page](https://www.securityindustry.org/siaevents/expo-seguridad-mexico-2026); [Cluster Industrial](https://clusterindustrial.com.mx/expo-seguridad-mexico-alista-su-23a-edicion-con-mas-de-400-expositores-en-centro-banamex/)). A talk on "how to pass a DGSP inspection" fits its education track.
- **ANTAD Simposio de Seguridad** (retail security buyers; AMESP presented in 2025) ([ANTAD 2025](https://simposioseguridad.antad.net/simposio2025/presentaciones/7-Los-paradigmas-de-la-seguridad-privada-en-Mexico.pdf)).

**Lead lists (free and current).**
- State padrones with expiry dates: Nuevo León (446 permits with expiry dates, Jul 2026), Tamaulipas (about 120, monthly), Oaxaca (monthly "vigentes" and "en trámite" lists; listed in search, my download returned 404), Quintana Roo (catalogue, Feb 2026; listed in search, not opened) ([NL](https://www.nl.gob.mx/sites/default/files/repositorio/Dependencias/Secretar%C3%ADa%20de%20Seguridad/Repositorios/20260721_padron_empresas_seguridad_julio.pdf); [Tamaulipas](https://www.tamaulipas.gob.mx/seguridadpublica/wp-content/uploads/sites/10/2026/08/empresas-de-seguridad-privada-autorizadas-julio-2026-1.pdf); [Oaxaca](https://www.sspo.gob.mx/wp-content/uploads/2026/09/EMPRESAS-VIGENTES-AGOSTO-SEPTIEMBRE.pdf); [Quintana Roo](https://ssc.qroo.gob.mx/wp-content/uploads/2026/02/CATALOGO-TyS-emp-priv-CORTE-23-FEB-2026.pdf)). Permit expiry is a natural trigger: firms gather their documents at renewal.
- DOF/SIDOF sanction notices name each sanctioned firm and the gap found ([SIDOF 5799650](https://sidof.segob.gob.mx/notas/docFuente/5799650)).
- The 2018 DGSP open-data list of 1,232 federal firms with head-office state ([datamx.io](https://www.datamx.io/dataset/direccion-general-de-seguridad-privada/resource/9e1109a2-5762-4a75-8f27-e221a815661d)).

**Partners and influencers.**
- **MercadoSeguridad.mx**: a directory with "1,000+" firms on the platform that checks DGSP status. It sells firms lead plans at MXN 2,990, 5,990 and 9,990+ a month ([plans page](https://www.mercadoseguridad.mx/planes)). A "verified compliant" badge fed by the tool would interest it and its paying firms.
- **CONTPAQi distributors and payroll accountants**: the staff master lives in payroll; CONTPAQi sells through a partner network ([CONTPAQi 2026 list](https://www.contpaqi.com/hubfs/Listas%20de%20precios/Lista_de_Precios_Sistemas_CONTPAQi_2026.pdf)).
- **REPSE consultants** (BDO and smaller firms) who already collect monthly evidence ([BDO REPSE](https://bdomexico.com/getattachment/e678916d-f204-4c21-8b41-7498da73ce74/BDO-Brochure-REPSE_v1.pdf)).
- **Gestorías and in-house gestores**: users of the tool and resellers; a multi-firm licence fits them.
- **Training providers and exam labs**: STPS-registered trainers and evaluation clinics hold the training and exam data the register needs (reasoned).
- **Trade media**: Revista Más Seguridad, Seguridad en América, Ventas de Seguridad, Segurilatam ([Más Seguridad](https://www.revistamasseguridad.com.mx/wp-content/uploads/2024/08/REVISTA-150-B.pdf); [Ventas de Seguridad](https://www.ventasdeseguridad.com/en/news/latest-news/431-enterprises/24170-increase-in-visits-to-expo-seguridad-mexico-meets-expectations-and-reaches-15.html.md)).

## Regional expansion

**Inside Mexico first.** The next market is the next state, not the next country. Each state format added opens its registered firms (INEGI end-2025): Nuevo León 516, Edomex 478, Baja California 316, San Luis Potosí 300, Chihuahua 286, Puebla 248, Coahuila 234, Quintana Roo 219, plus CDMX 1,147 (2024) ([INEGI](https://www.inegi.org.mx/contenidos/programas/cnspe/2026/doc/cnspe_2026_resultados.pdf)). The top 8 states plus CDMX hold about 3,700 of the 6,300 registrations (my sum).

| Country | Firms | Regulator and reporting | Free state tool | Verdict |
|---|---|---|---|---|
| **Colombia** | "more than 1,500" firms, about 438 of them self-protection schemes; 350,000+ direct jobs ([El Heraldo, 17 Dec 2025](https://www.elheraldo.co/colombia/2025/12/17/supervigilancia-reporta-avances-en-control-del-sector-de-seguridad-privada-y-verificacion-total-de-armas-autorizadas/); [Asuntos Legales, 2026](https://www.asuntoslegales.com.co/actualidad/entrevista-con-larry-sadit-alvarez-morales-superintendente-de-vigilancia-sobre-el-panorama-del-sector-vigilancia-4228362), search snippet) | Supervigilancia. Monthly report in the first 5 days of personnel, arms and equipment changes and of the client list ([Circular Externa 345/2020 via SafetYA](https://safetya.co/normatividad/circular-externa-345-de-2020/)) | **Yes: RENOVA is the single mandatory channel** (same source) | Same duty, larger firms, but a state platform and local ERPs (Avancys) already exist. Medium-low priority; product would be a record keeper that pre-fills RENOVA. |
| **Guatemala** | 149-200 licensed firms and about 40,000 registered guards against an estimated 130,000-150,000 working (older figures, 2013-2020; search snippets) ([InSight Crime](https://insightcrime.org/es/noticias/noticias-del-dia/apenas-uno-por-ciento-guardias-seguridad-privada-guatemala-operan-legalmente/); [AGN](https://agn.gt/direccion-general-de-servicios-de-seguridad-privada-cumple-12-anos-de-servicio/)) | DIGESSP under Decreto 52-2010 ([Decreto 52-2010](https://mingob.gob.gt/wp-content/uploads/2020/10/DECRETO_NUMERO_52-2010.pdf)) | New "Sistema Integrado de Gestión" launched April 2026, with real-time queries and online payments ([AGN](https://agn.gt/?p=535356), search snippet) | Small market and a new state system. Low priority. |
| **Honduras** | about 199 firms in registration, 31,387 guards ([El Heraldo HN](https://www.elheraldo.hn/honduras/en-honduras-hay-31387-guardias-privados-en-posesion-de-28464-armas-BMEH1092223), undated) | DCSSP (police) | not checked | Small. Low priority. |
| El Salvador, Costa Rica, Panama | no current count found (unverified) | police or ministry directorates | not checked | Unknown. |
| **Chile** | not counted; the new law affects "more than 60,000 workers" (opinion column, via search snippet) | Ley 21.659 in force from 28 Nov 2025; the Subsecretaría must have a platform and a Registro de Seguridad Privada running by 28 Nov 2026; a Sep 2026 resolution sets deadlines to attach staff lists and payrolls ([Diario Constitucional, 13 May 2026](https://www.diarioconstitucional.cl/2026/05/13/iniciativa-prorroga-plazos-de-regularizacion-en-seguridad-privada-para-evitar-crisis-operativa-en-el-sector/); [Diario Oficial, 17 Sep 2026](https://www.diariooficial.interior.gob.cl/publicaciones/2026/09/17/44553/01/2871861.pdf); search snippets) | coming | A new regime creates a compliance wave in 2026-2027, but with a state platform. Worth a look after Mexico. |

**Conclusion:** the same data model (staff, equipment, branches, changes with cause, exam and training expiry) travels across Latin America. But Colombia, Guatemala and soon Chile run state platforms, so abroad the product is a record keeper and pre-filler, not a report generator. Mexico, with PDF and Excel formats and 32 state regimes, is the best fit of the countries checked.

## Implications for positioning and pricing

**Position.** "Your Registro and monthly reports, always ready for inspection." Not another guard-operations app. It sits next to payroll (CONTPAQi/NOI) and next to guard apps (Vigon, C-Guard Pro), imports their staff lists, and produces the DGSP and state packs plus an inspection file.

**Target order.**
1. **Federal firms with 30-500 staff** (about 1,100-1,200): highest pain (DGSP monthly report plus a report per state, inspection risk, published sanctions) and an existing gestor budget.
2. **Gestorías and consultants** serving several firms: one sale reaches many firms.
3. **Single-state firms with 11+ staff** in states with heavy monthly reporting (Baja California, Nuevo León, Tamaulipas, and Jalisco if its register reform passes): about 2,200-2,500 firms nationally, lower price.
4. Not targeted: micro firms, informal firms, and large groups with their own systems.

**Pricing (proposal to test in pilots).**

| Plan | Who | Price (MXN, + IVA) | About USD |
|---|---|---|---|
| Estatal | single-state firm, up to 50 active staff, 1 state report | 750 a month (7,500 a year prepaid) | 42 a month |
| Federal | federal firm, up to 150 staff, DGSP pack + 2 state packs | 1,900 a month (19,000 a year prepaid) | 105 a month |
| Federal Plus | 151-500 staff, 4 state packs | 3,500 a month | 195 a month |
| Extra state pack | any plan | 400 a month | 22 a month |
| Gestoría | up to 15 client firms | 4,500 a month | 250 a month |

Checks: the Federal plan (MXN 22,800 a year) costs about 10% of an in-house gestor (MXN 18,000 a month) and about a fifth of one 1,000-UMA fine (MXN 117,310 in 2026). It is about 2x a firm's cloud payroll software for 150 staff (MXN 11,700 a year). B1's MXN 36,000 a year was about 3x (reasoned from the sources in "Willingness to pay").

**Revised revenue view, year 3 (my estimate).**
- **Base:** 8% of 1,150 federal firms = 92 x MXN 24,000 = MXN 2.2m; 4% of 2,200 single-state firms = 88 x MXN 9,000 = MXN 0.8m; 15 gestorías x MXN 54,000 = MXN 0.8m. **Total about MXN 3.8m (about USD 210k).**
- **Low:** 4% federal (46) and 2% single-state (44) and 5 gestorías: **about MXN 1.8m (USD 100k).**
- **High:** 15% federal (172 x MXN 30,000), 8% single-state (176 x MXN 10,800), 30 gestorías: **about MXN 8.7m (USD 480k).**
- B1's base case was MXN 5.6m. Mine is lower because the federal tier is about 1,500 firms and software budgets are small.

**Must-haves suggested by this research.**
- Excel/CSV import from CONTPAQi and NOI, so the staff master matches payroll (the BC guide's main demand).
- Equipment inventory that maps to the seven DGSP formats (aparatos, armamento, canes, fornituras, radios, uniformes, vehículos).
- Exam, training and CUIP expiry alerts (Vigon and GuardsPro already offer generic expiry alerts, so this is table stakes).
- A "client compliance pack" (permits, REPSE, register extract) for corporate buyers, who already demand these documents.
- An audit trail and one-click inspection pack.

**Threats to watch.** Vigon adding a DGSP module; a DGSP online system (unverified); a Ley General with a national "padrón único"; informal firms undercutting formal ones on price.

## Open questions

1. **Does dgsp.sspc.gob.mx take filings online?** I could not reach it. LFSP art. 8 describes the Registro as a consultation system fed by a database that providers and state and municipal authorities supply ([mley.mx LFSP art. 8](https://mley.mx/LFSP/articulo/8/), search snippet), which hints at some electronic intake. A demo account or one interview with a federal firm answers this. It decides whether the federal pack is a report generator or a pre-filler.
2. **Current official federal count and size split.** AMESP says 1,487. A transparency request (PNT) to the SSPC can give the count, modalities and staff per firm.
3. **Which states require monthly reports, and in what format?** Confirmed: Baja California (Excel + email), Tamaulipas (monthly, by law; [2019 committee report](https://congresotamaulipas.gob.mx/Parlamentario/Archivos/Dictamenes/LXIII-919%20DICTAMEN%20PDF%20-%20OBLIGACIONES%20DE%20LOS%20PRESTADORES%20DE%20SERVICIOS%20DE%20SEGURIDAD%20PRIVADA.pdf), via B1). Needed for NL, Edomex, CDMX, SLP, Chihuahua, Puebla, Coahuila, Jalisco.
4. **What do gestorías charge** for DGSP and state upkeep? No published fee found.
5. **Vigon's price, customer count and roadmap.** Is it planning DGSP features? Is it a partner?
6. **How many firms pay MercadoSeguridad.mx** (MXN 2,990-9,990 a month)? That would show the sector's appetite for paid online tools.
7. **CDMX regime** (1,147 firms): what monthly duty applies under the CDMX law and the 2017 SSC manual ([CDMX regulations portal](https://regulaciones.cdmx.gob.mx/mejora/public/regulacionPdf/34))?
8. **Willingness to pay:** test the proposed price with 15 interviews and 3 pilots before building more state packs.
9. **Why state registers hold only 108,426 staff against 466,587 IMSS jobs.** Is it under-reporting (a sales argument) or a scope difference (federal firms report staff only to DGSP)?

## Sources

All links used above, in order of first use. Items marked "search snippet" in the text were not opened in full. Counts marked "my count" come from files I downloaded and parsed (Nuevo León and Tamaulipas PDFs, the DGSP 2018 JSON dump, INEGI CNSPF-E 2025 and 2026 PDFs, the AMESP ANTAD deck, the CONTPAQi 2026 price list).

- INEGI CNSPF-E 2026: https://www.inegi.org.mx/contenidos/programas/cnspe/2026/doc/cnspe_2026_resultados.pdf
- Excélsior: https://www.excelsior.com.mx/nacional/personas-detras-empresa-segura
- ANTAD 2025: https://simposioseguridad.antad.net/simposio2025/presentaciones/7-Los-paradigmas-de-la-seguridad-privada-en-Mexico.pdf
- CNSPF-E 2025 results: https://www.inegi.org.mx/contenidos/programas/cnspe/2025/doc/cnspe_2025_resultados.pdf
- N+: https://www.nmas.com.mx/jalisco/seguridad/habra-registro-de-empresas-de-seguridad-privada-en-jalisco/
- NL padrón, 20 Jul 2026: https://www.nl.gob.mx/sites/default/files/repositorio/Dependencias/Secretar%C3%ADa%20de%20Seguridad/Repositorios/20260721_padron_empresas_seguridad_julio.pdf
- Tamaulipas SSP list, Aug 2026: https://www.tamaulipas.gob.mx/seguridadpublica/wp-content/uploads/sites/10/2026/08/empresas-de-seguridad-privada-autorizadas-julio-2026-1.pdf
- MercadoSeguridad.mx: https://www.mercadoseguridad.mx/empresas-autorizadas-dgsp/cdmx
- Crónica Jalisco, 29 Sep 2026: https://www.cronica.com.mx/jalisco/guadalajara/2026/09/29/buscan-ejercer-mayor-control-sobre-las-empresas-de-seguridad-privada-en-jalisco/
- DGSP open-data list: https://www.datamx.io/dataset/direccion-general-de-seguridad-privada/resource/9e1109a2-5762-4a75-8f27-e221a815661d
- Plaza de Armas, via search snippet: https://plazadearmas.com.mx/?p=139322
- Data México, industry 5616: https://www.economia.gob.mx/datamexico/en/profile/industry/investigation-and-security-services
- Gaceta Parlamentaria, 8 Sep 2026: https://gaceta.diputados.gob.mx/Gaceta/66/2026/sep/20260908-II-1-2.html
- The Logistics World: https://thelogisticsworld.com/talento-humano/empresas-de-seguridad-crecen-de-modo-importante-en-el-pais
- The Logistics World, "histórico" section: https://thelogisticsworld.com/historico/crearan-camara-sectorial-de-seguridad-para-mercancias
- Zeta Tijuana, Aug 2026: https://zetatijuana.com/2026/08/advierten-aumento-de-empresas-irregulares-de-seguridad-privada-piden-padron-unico/
- EULEN, 26 Jun 2025: https://www.eulen.com/mx/wp-content/uploads/sites/8/2025/07/02-Grupo-EULEN-Mexico-Seguridad-formal-frente-al-riesgo-de-la-informalidad-en-el-sector.pdf
- InSight Crime: https://insightcrime.org/es/noticias/noticias-del-dia/informe-advierte-que-empresas-de-seguridad-de-mexico-deben-ser-mejor-reglamentadas/
- gob.mx/segob trámite page: https://www.gob.mx/segob/acciones-y-programas/inscripcion-de-armamento-vehiculos-y-equipo-incluyendo-los-cambios-en-los-inventarios-correspondientes-y-demas-medios-relacionados-con-los-servicios-de-seguridad-privada
- BC guide: https://seguridadbc.gob.mx/Planeacion/padron/GUIA%20LLENADO%20CORRECTO%20DEL%20INFORME%20MENSUAL.pdf
- Computrabajo ad: https://mx.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-gestor-gubernamental-en-cuauhtemoc-BA3B0D3F75D2544A61373E686DCF3405
- BDO REPSE webinar: https://www.bdomexico.com/getmedia/514a6f9e-9faf-406d-b485-82f4be6a21c6/Webinar-REPSE-070825.pdf?ext=.pdf
- El CEO on Xternall: https://elceo.com/negocios/xternall-la-plataforma-que-ayuda-a-las-empresas-a-supervisar-a-sus-proveedores-repse/
- SIDOF 5799650: https://sidof.segob.gob.mx/notas/docFuente/5799650
- SIDOF 5797220: https://sidof.segob.gob.mx/notas/docFuente/5797220
- SIDOF 5795553: https://sidof.segob.gob.mx/notas/docFuente/5795553
- El Imparcial, 3 Jul 2025: https://www.elimparcial.com/mxl/mexicali/2025/07/04/pausa-en-certificaciones-de-guardias-es-por-irregularidades-en-empresas-de-seguridad/
- Ley Federal de Derechos art. 195-X (mley.mx): https://mley.mx/LFD/articulo/195-x/
- Papelea, Tabasco: https://papelea.com/mx/estado-de-tabasco/revalidacion-del-permiso-o-autorizacion-para-la-prestacion-del-servicio-portal-tabasco-1
- Michoacán fee list 2024: https://ssp.michoacan.gob.mx/wp-content/uploads/2024/05/COSTOS-DE-AUTORIZACI%C3%93N-SEGURIDAD-PRIVADA.-LEY-DE-INGRESOS-DEL-ESTADO-DE-MICHOACAN-2024.pdf
- CONTPAQi official price list 2026: https://www.contpaqi.com/hubfs/Listas%20de%20precios/Lista_de_Precios_Sistemas_CONTPAQi_2026.pdf
- GuardsPro pricing: https://www.guardspro.com/pricing
- ComparaSoftware, C-Guard Pro: https://www.comparasoftware.com/c-guard-pro
- blog estimate, via B1: https://modelosdeplandenegocios.com/blogs/news/cuanto-cuesta-servicio-seguridad-privada
- Vigon Mexico page: https://vigonops.com/erp-seguridad-privada-mexico/
- home: https://vigonops.com/
- Edit Innovation: https://editinnovation.com/software-seguridad-privada.html
- Track Vigilante: https://www.trackvigilante.com/
- Evidence: https://www.evidence.com.mx/docs/app-y-software-para-empresas-de-seguridad-privada
- Evidence ERP: https://evidencetec.com/industrias/software-empresas-seguridad-privada
- Trackforce (ES): https://www.trackforce.com/es/?p=5088
- Secusoft: https://www.secusoft.mx/
- Kizeo: https://www.kizeo-forms.com/lat/solucion-universal/software-empresas-de-vigilancia-seguridad-privada/
- Segurilatam on Avancys: https://www.segurilatam.com/actualidad/avancys-soluciones-de-gestion-empresarial-para-la-industria-de-la-vigilancia-y-seguridad-privada_20210202.html
- plans: https://www.mercadoseguridad.mx/planes
- Portal Automotriz, undated: https://portalautomotriz.com/print/noticias/seguridad/se-incorpora-el-consejo-nacional-de-industria-del-blindaje-a-asume
- ASIS report: https://asis.org.mx/docs/reportes/JUNE-REPORT-2026.pdf
- SIA event page: https://www.securityindustry.org/siaevents/expo-seguridad-mexico-2026
- Cluster Industrial: https://clusterindustrial.com.mx/expo-seguridad-mexico-alista-su-23a-edicion-con-mas-de-400-expositores-en-centro-banamex/
- Oaxaca: https://www.sspo.gob.mx/wp-content/uploads/2026/09/EMPRESAS-VIGENTES-AGOSTO-SEPTIEMBRE.pdf
- Quintana Roo: https://ssc.qroo.gob.mx/wp-content/uploads/2026/02/CATALOGO-TyS-emp-priv-CORTE-23-FEB-2026.pdf
- BDO REPSE: https://bdomexico.com/getattachment/e678916d-f204-4c21-8b41-7498da73ce74/BDO-Brochure-REPSE_v1.pdf
- Más Seguridad: https://www.revistamasseguridad.com.mx/wp-content/uploads/2024/08/REVISTA-150-B.pdf
- Ventas de Seguridad: https://www.ventasdeseguridad.com/en/news/latest-news/431-enterprises/24170-increase-in-visits-to-expo-seguridad-mexico-meets-expectations-and-reaches-15.html.md
- El Heraldo, 17 Dec 2025: https://www.elheraldo.co/colombia/2025/12/17/supervigilancia-reporta-avances-en-control-del-sector-de-seguridad-privada-y-verificacion-total-de-armas-autorizadas/
- Asuntos Legales, 2026: https://www.asuntoslegales.com.co/actualidad/entrevista-con-larry-sadit-alvarez-morales-superintendente-de-vigilancia-sobre-el-panorama-del-sector-vigilancia-4228362
- Circular Externa 345/2020 via SafetYA: https://safetya.co/normatividad/circular-externa-345-de-2020/
- InSight Crime: https://insightcrime.org/es/noticias/noticias-del-dia/apenas-uno-por-ciento-guardias-seguridad-privada-guatemala-operan-legalmente/
- AGN: https://agn.gt/direccion-general-de-servicios-de-seguridad-privada-cumple-12-anos-de-servicio/
- Decreto 52-2010: https://mingob.gob.gt/wp-content/uploads/2020/10/DECRETO_NUMERO_52-2010.pdf
- AGN: https://agn.gt/?p=535356
- El Heraldo HN: https://www.elheraldo.hn/honduras/en-honduras-hay-31387-guardias-privados-en-posesion-de-28464-armas-BMEH1092223
- Diario Constitucional, 13 May 2026: https://www.diarioconstitucional.cl/2026/05/13/iniciativa-prorroga-plazos-de-regularizacion-en-seguridad-privada-para-evitar-crisis-operativa-en-el-sector/
- Diario Oficial, 17 Sep 2026: https://www.diariooficial.interior.gob.cl/publicaciones/2026/09/17/44553/01/2871861.pdf
- mley.mx LFSP art. 8: https://mley.mx/LFSP/articulo/8/
- 2019 committee report: https://congresotamaulipas.gob.mx/Parlamentario/Archivos/Dictamenes/LXIII-919%20DICTAMEN%20PDF%20-%20OBLIGACIONES%20DE%20LOS%20PRESTADORES%20DE%20SERVICIOS%20DE%20SEGURIDAD%20PRIVADA.pdf
- CDMX regulations portal: https://regulaciones.cdmx.gob.mx/mejora/public/regulacionPdf/34
