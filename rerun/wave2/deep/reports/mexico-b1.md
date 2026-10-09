# Mexico B1: Registro Nacional compliance keeper for private-security firms

## Re-assessment (owner's criteria)

**Verdict: maybe. New score: 6/10 (old score: 5/10).**

**The case.** Licensed guard firms must keep a register of every staff, uniform, vehicle, arm and branch change. Federal firms report it to the DGSP in the first 10 calendar days of each month (https://mley.mx/LFSP/articulo/13/), and the DGSP sanctions firms that miss it (https://sidof.segob.gob.mx/notas/docFuente/5795399). States add their own monthly reports. Baja California's is a pack of up to 8 files sent by email, built from Excel formats, and it is due even when nothing changed (https://seguridadbc.gob.mx/Planeacion/padron/GUIA%20LLENADO%20CORRECTO%20DEL%20INFORME%20MENSUAL.pdf). No software I found builds these reports. The guard tools on the market cost about USD 5-10 per user per month and stop at patrols, shifts and licence-expiry alerts (https://www.guardspro.com/pricing ; https://www.comparasoftware.com/c-guard-pro). That leaves a clear gap for a small Spanish tool: a register plus a monthly report generator. The weak points are the market size, which has no reliable count, and the unknown federal filing channel.

**Room for improvement over the portal or current practice**
- **No real portal to improve on, only formats and email.** In Baja California, firms download formats from the state site and email the monthly report to reportesdsp@seguridadbc.gob.mx. The report is a monthly list of new hires, one "cédula de baja" per leaver, a copy of the latest payroll or the SUA, a staff "cardex" in Excel, a fee receipt, an activity report and an arms summary in Excel (https://seguridadbc.gob.mx/Planeacion/padron/GUIA%20LLENADO%20CORRECTO%20DEL%20INFORME%20MENSUAL.pdf).
- **Error-prone reconciliation.** The same guide warns firms to fill every field, not to change surnames, and not to convert the cardex to PDF. It also says "the cardex, the private-security system and the payroll must be exactly the same" (same source). This is classic work for software: one staff master that feeds payroll, the cardex and the cédulas.
- **The report is due with or without changes:** "SE TENGA O NO SE TENGA MOVIMIENTO, DEBE PRESENTAR CADA REPORTE" (same source). That makes a deadline tracker and a pre-filled pack useful every month.
- **The same monthly duty exists in other states.** Tamaulipas law (art. 36) requires a report of altas, bajas and sanctions in the first 5 business days of each month, and the data flows on to the national public-security register (https://congresotamaulipas.gob.mx/Parlamentario/Archivos/Dictamenes/LXIII-919%20DICTAMEN%20PDF%20-%20OBLIGACIONES%20DE%20LOS%20PRESTADORES%20DE%20SERVICIOS%20DE%20SEGURIDAD%20PRIVADA.pdf, 2019 committee report). A federal firm working in several states owes the DGSP report and one report per state (reasoned from the above).
- **The inspection findings are register gaps.** DGSP files from 2026 show unreported altas and bajas (2 altas and 114 bajas at Multisistemas Uribe: https://sidof.segob.gob.mx/notas/docFuente/5795770), unreported training within the first 10 days of the month (Oblak, July 2026: https://sidof.segob.gob.mx/notas/docFuente/5795399), uniforms and the manager's details (COSSEPPA, 1,000 UMA = MXN 117,310: https://sidof.segob.gob.mx/notas/docFuente/5799650). Firms fix these during the visit and are still sanctioned. An "inspection pack" and an audit trail answer this directly.
- **Exam and CUIP tracking.** Operational staff need medical, toxicology and psychological evaluations (https://mley.mx/Reg_LFSP/articulo/34/), and firms must request CUIP altas (https://mx.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-gestor-gubernamental-en-cuauhtemoc-BA3B0D3F75D2544A61373E686DCF3405). Today a paid "gestor gubernamental" tracks this by hand (same job ad).
- **Still unknown:** how the DGSP takes the federal monthly report. Neither of the two 2026 sanction files I read says (https://sidof.segob.gob.mx/notas/docFuente/5795770 ; https://sidof.segob.gob.mx/notas/docFuente/5795399). I found no SSPC online system (unverified; the gob.mx SSPC page returned an error).

**Competitor reality check**
- **C-Guard Pro:** a cloud tool for guards, patrols, GPS, QR/NFC rounds, incidents, shifts and payroll. USD 5 per user per month. It has no DGSP, Registro Nacional, CUIP, state monthly report or REPSE features (https://www.comparasoftware.com/c-guard-pro). It does not do this job.
- **GuardsPro:** USD 5-10 per user per month, with add-ons at USD 1-2. It includes licence upload and expiry alerts but no regulatory reporting (https://www.guardspro.com/pricing). It does this partly: expiry alerts only.
- **Mexican payroll (Aspel NOI, CONTPAQi Nóminas):** these cover CFDI payroll and IMSS, not the security register (https://www.elcontribuyente.mx/2024/12/que-software-de-nomina-usan-las-empresas-top-descubre-las-4-opciones-mas-populares-en-mexico/). They are a data source to import from, not a rival.
- **Mexican security-specific software:** none found in three Spanish searches. The results showed only guard directories, job ads and DOF notices (search runs in this pass; no URL for a negative result).
- **Gestores and gestorías:** the real incumbent. One CDMX firm hires an in-house gestor for DGSP and state permits, renewals and CUIP altas and bajas (https://mx.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-gestor-gubernamental-en-cuauhtemoc-BA3B0D3F75D2544A61373E686DCF3405). I found no published gestoría fee for this work (unverified). The gestor is a channel or a user of the tool, not a killer.
- **Conclusion:** the incumbents are cheap generic tools that skip the duty, plus manual work by gestores. That is an opening, not a killer.

**Price per customer**
- **What firms risk or pay today:** fines of MXN 113,140-169,710 per sanction in 2026 (https://sidof.segob.gob.mx/notas/docFuente/5795553 ; https://sidof.segob.gob.mx/notas/docFuente/5797220), and public reprimands on the SSPC website (https://sidof.segob.gob.mx/notas/docFuente/5795770). State fees alone are MXN 12,740 a year to revalidate in Michoacán (https://ssp.michoacan.gob.mx/wp-content/uploads/2024/05/COSTOS-DE-AUTORIZACI%C3%93N-SEGURIDAD-PRIVADA.-LEY-DE-INGRESOS-DEL-ESTADO-DE-MICHOACAN-2024.pdf) and MXN 14,114 in Tabasco (https://papelea.com/mx/estado-de-tabasco/revalidacion-del-permiso-o-autorizacion-para-la-prestacion-del-servicio-portal-tabasco-1). Firms bill clients MXN 6,200-15,000 per guard per month (https://modelosdeplandenegocios.com/blogs/news/cuanto-cuesta-servicio-seguridad-privada, blog).
- **Proposed price per firm:** MXN 1,500 a month base (up to 50 active staff), plus MXN 10 per extra active staff, plus MXN 500 a month for each extra state report. A typical federal firm with 150 guards in 2 states would pay MXN 1,500 + 1,000 + 500 = MXN 3,000 a month, or MXN 36,000 a year (about USD 2,000 at roughly MXN 18 per USD; my estimate). That is about a third of one fine. It is also 20-50% of what a firm bills for one guard post in a month (reasoned from the sources above).
- **Per gestor or consultant:** MXN 5,000 a month for up to 15 client firms, then MXN 300 per extra firm (my estimate, unverified).
- **Check:** a per-user guard app at USD 5-10 per user would cost a 150-guard firm USD 750-1,500 a month if every guard had a login (https://www.guardspro.com/pricing). So MXN 3,000 (about USD 170) a month for the compliance job is modest next to that. Willingness to pay must still be tested in interviews (unverified).

**Revenue estimate (year 3)**
- **Buyers.** No current official count. AMESP estimates more than 8,000 firms (https://gaceta.diputados.gob.mx/Gaceta/66/2026/sep/20260908-II-1-2.html). A trade article puts it at 6,600 firms, about half of them registered, and cites 1,090 federal and 2,266 state authorisations in 2012 (https://thelogisticsworld.com/historico/crecen-exponencialmente-empresas-de-seguridad, search snippet only, unverified). I use **3,500 registered firms** and **about 2,000 with 30+ staff** that can pay (unverified estimate). I also count **about 150 gestorías and payroll accountants** serving the sector (unverified estimate).
- **Base case:** 2,000 firms x 6% share = 120 firms x MXN 36,000 = MXN 4.32M. Plus 150 gestors x 15% = 22 x MXN 60,000 = MXN 1.32M. **Total about MXN 5.6M a year (about USD 310k).**
- **Low case:** 2,000 x 2.5% = 50 firms x MXN 30,000 = MXN 1.5M, plus 8 gestors x MXN 60,000 = MXN 0.48M. **Total about MXN 2.0M (about USD 110k).**
- **High case:** 3,500 x 6% = 210 firms x MXN 36,000 = MXN 7.56M, plus MXN 1.32M from gestors. **Total about MXN 8.9M (about USD 490k).**
- This is enough for a one- or two-person business. It is not a venture-scale market.

**Ease of implementation and sale: medium.**
- **Build is easy.** The data model is small: people, equipment, branches, changes with dates and causes. The output is Excel and PDF in fixed state formats (https://seguridadbc.gob.mx/Planeacion/padron/GUIA%20LLENADO%20CORRECTO%20DEL%20INFORME%20MENSUAL.pdf). No government API is needed.
- **Onboarding is easy.** Import the current cardex or payroll list from Excel. Firms already keep the data, so it is a move, not new work (reasoned).
- **Sale is harder.** The sector is relationship-driven and Spanish-only. Each state adds a format to build. Leads are free: the DOF names sanctioned firms (https://sidof.segob.gob.mx/notas/docFuente/5799650), and states publish lists of authorised firms (https://www.sspo.gob.mx/wp-content/uploads/2026/09/EMPRESAS-VIGENTES-AGOSTO-SEPTIEMBRE.pdf, listed in search). AMESP has 250 members (https://zetatijuana.com/2026/08/advierten-aumento-de-empresas-irregulares-de-seguridad-privada-piden-padron-unico/).

**Remaining risks**
- **Federal channel unknown.** If the DGSP launches its own capture system, the product becomes a pre-filler and record keeper. That still has value but is worth less (unverified either way).
- **Market count is soft.** All firm counts are estimates or 2012 data. Many firms are small or informal and will not pay (unverified).
- **State fragmentation.** Each state needs its own format. Start with the DGSP report plus 2-3 big states.
- **Law reset.** A Ley General de Seguridad Privada has been overdue since 2021, and AMESP wants a single national register (https://zetatijuana.com/2026/08/advierten-aumento-de-empresas-irregulares-de-seguridad-privada-piden-padron-unico/). That could change formats, which might help a tool or replace part of it.
- **Sensitive data.** The tool would hold exam results and personal IDs, which brings duties under the private-sector data protection law (reasoned; unverified detail).
- **Willingness to pay.** Most sanctions are reprimands, not fines (https://sidof.segob.gob.mx/notas/docFuente/5795770 ; https://sidof.segob.gob.mx/notas/docFuente/5795399). Small firms may stay with spreadsheets.

**New sources (this pass)**
- https://seguridadbc.gob.mx/Planeacion/padron/GUIA%20LLENADO%20CORRECTO%20DEL%20INFORME%20MENSUAL.pdf (read in full this time)
- https://sidof.segob.gob.mx/notas/docFuente/5795770
- https://sidof.segob.gob.mx/notas/docFuente/5795399
- https://congresotamaulipas.gob.mx/Parlamentario/Archivos/Dictamenes/LXIII-919%20DICTAMEN%20PDF%20-%20OBLIGACIONES%20DE%20LOS%20PRESTADORES%20DE%20SERVICIOS%20DE%20SEGURIDAD%20PRIVADA.pdf
- https://www.comparasoftware.com/c-guard-pro (price and features read)
- https://www.guardspro.com/pricing
- https://www.elcontribuyente.mx/2024/12/que-software-de-nomina-usan-las-empresas-top-descubre-las-4-opciones-mas-populares-en-mexico/ (search snippet)
- https://ssp.michoacan.gob.mx/wp-content/uploads/2024/05/COSTOS-DE-AUTORIZACI%C3%93N-SEGURIDAD-PRIVADA.-LEY-DE-INGRESOS-DEL-ESTADO-DE-MICHOACAN-2024.pdf (search snippet)
- https://modelosdeplandenegocios.com/blogs/news/cuanto-cuesta-servicio-seguridad-privada (search snippet)
- https://thelogisticsworld.com/historico/crecen-exponencialmente-empresas-de-seguridad (search snippet; fetch returned 403)
- https://www.sspo.gob.mx/wp-content/uploads/2026/09/EMPRESAS-VIGENTES-AGOSTO-SEPTIEMBRE.pdf (listed in search)

**Corrections to the first pass.** The first pass said it could not read the Baja California guide. This pass read it. Filing there is by email with Excel formats, so the old "filing channel unknown" risk now applies only to the federal DGSP report. The Multisistemas Uribe sanction is file DGSP/DELC/PAS/132/2026, dated 20 July 2026, at https://sidof.segob.gob.mx/notas/docFuente/5795770, not 5798322.

## Summary

**Verdict: maybe. Score: 5/10.**

Mexican private-security firms must report to the federal Registro Nacional de Empresas, Personal y Equipo de Seguridad Privada every month, within the first 10 calendar days. The report covers each change to staff, uniforms, vehicles, arms, branches and corporate data (LFSP art. 13 and art. 12: https://mley.mx/LFSP/articulo/13/ ; https://mley.mx/LFSP/articulo/12/). Enforcement is real and recent. In September 2026 the DGSP fined COSSEPPA 1,000 UMA (MXN 117,310) for unreported staff altas and bajas and 205 unregistered uniforms (https://sidof.segob.gob.mx/notas/docFuente/5799650). Several other firms received public reprimands in 2026 for the same kind of gap. I found no product built for this register. Rivals are generic guard-operations apps and in-house "gestores". The weak points are these. No reliable count of firms exists (the "8,000+" figure is an AMESP estimate). I could not find how firms submit to the DGSP: online, on paper or on disk. Each of the 32 states adds its own register and rules. Many firms are small or informal, and their willingness to pay is unproven. A federal Ley General de Seguridad Privada has been constitutionally mandated since 2021 but not issued, and it could reset the rules.

## Duty

**Legal basis (federal).**
- Ley Federal de Seguridad Privada (LFSP), art. 12, lists what the Registro must hold. That covers authorisations, head office and branches, legal representatives, corporate changes, management and administrative staff, and a detailed file on each operational employee. The file holds identity, history, transfers, assigned equipment and arms, sanctions, training and evaluation results. The Registro also holds arms, vehicles and other equipment, with inventory changes (https://mley.mx/LFSP/articulo/12/).
- LFSP art. 13: "for the purposes of the Registro", the provider must report, **within the first 10 calendar days of each month**, the status of and updates to every heading in art. 12 (https://mley.mx/LFSP/articulo/13/). So the duty is periodic, not only event-driven. The earlier checks missed this.
- LFSP art. 32 lists the provider's obligations. DGSP sanction notices cite fr. III, IV, V, XVI and XXV, among them registering altas and bajas and keeping records current (https://mley.mx/LFSP/articulo/32/ ; https://sidof.segob.gob.mx/notas/docFuente/5799650).
- Reglamento LFSP arts. 32-34: altas and bajas of partners, managers, administrative and operational staff and legal representatives, with the cause for each baja. Filing is on electronic or printed forms, with minimum data such as name, RFC, CURP and birth data. Operational staff need certified documents and passing medical, toxicology and psychological exams (https://mley.mx/Reg_LFSP/articulo/32/ ; https://mley.mx/Reg_LFSP/articulo/33/ ; https://mley.mx/Reg_LFSP/articulo/34/).
- Private-security staff must also be registered in the public-security personnel register (CUIP). A 2026 sanction cites the failure to request altas there for four operational staff (search snippet of SIDOF notices; https://sidof.segob.gob.mx/notas/docFuente/5798322, full text not read). One state guideline says private providers must supply staff and equipment data to the national public-security register (https://slp.gob.mx/secesp/PDF/NORMATECA/LINEAMIENTOS%20DEL%20REGISTRO%20NACIONAL%20DE%20PERSONAL%20DE%20SEGURIDAD%20PUBLICA.pdf, snippet only).
- Authorisations must be revalidated, with the request filed at least 30 days before expiry (LFSP art. 19, via https://sdv.com.mx/compendio/ley-federal-de-seguridad-privada/articulo-19/).

**State layer.** Firms working in one state are licensed by that state under its own law. Baja California requires a monthly report of operational-staff altas, bajas, suspensions and removals within the first 5 business days of each month, with the latest payroll attached (https://seguridadbc.gob.mx/Planeacion/padron/GUIA%20LLENADO%20CORRECTO%20DEL%20INFORME%20MENSUAL.pdf, snippet only). Tabasco charges MXN 14,114.10 to revalidate a permit, valid for 1 year (https://papelea.com/mx/estado-de-tabasco/revalidacion-del-permiso-o-autorizacion-para-la-prestacion-del-servicio-portal-tabasco-1). Coahuila takes authorisation requests online (https://papelea.com/mx/estado-de-coahuila-de-zaragoza/autorizacion-para-prestar-servicios-de-seguridad-privada-registro-estatal-de-tramites-y-servicios-retys). Oaxaca publishes monthly lists of firms that are valid or in process (https://www.sspo.gob.mx/wp-content/uploads/2026/08/EMPRESAS-VIGENTES-JULIO-AGOSTO.pdf, listed in search; the fetch of the Sept file returned 404).

**Penalties.** LFSP art. 42: fr. I is a public reprimand (amonestación) on the SSPC website, and fr. II is a fine in UMA. Suspension and revocation sit at higher steps (unverified exact maxima).

**Enforcement in 2026 (DOF notices signed by DGSP Director General Enrique Martínez Garza):**
| Firm | Date | Breach | Sanction | Source |
|---|---|---|---|---|
| COSSEPPA, S.A. de C.V. (Hidalgo) | 11 Sep 2026 | Did not report altas of 7 administrative staff, a baja of 1 operational staff, the head-office manager's details, or the alta of 205 uniforms | Reprimand + 1,000 UMA = MXN 117,310 | https://sidof.segob.gob.mx/notas/docFuente/5799650 |
| GCH Seguridad Privada (Edomex) | 28 Aug 2026 | Did not report the baja of 112 uniforms (LFSP art. 13 with 12-XI) | Reprimand | https://sidof.segob.gob.mx/notas/docFuente/5798715 |
| Multisistemas Uribe | Jul 2026 | Did not record altas of 2 or bajas of 114 operational staff | Reprimand | search snippet; https://sidof.segob.gob.mx/notas/docFuente/5798322 (unverified which doc) |
| Grupo Kevell Seguridad Privada | May 2026 | Altas of manager and administrative staff not in the Registro; CUIP altas not requested for 4 operational staff | Reprimand | search snippet (unverified which SIDOF doc) |
| Diagnóstico DRP Seguridad | 9 Apr 2026 | Did not update a change of head-office address | Reprimand + 1,000 UMA = MXN 113,140 | https://sidof.segob.gob.mx/notas/docFuente/5795553 |
| Servicios Terrestres de Seguridad Privada | 23 Feb 2026 | Branch closures not reported; vehicle photos missing; training of 76 staff not proven | Reprimand + 1,500 UMA = MXN 169,710 | https://sidof.segob.gob.mx/notas/docFuente/5797220 |

Pattern: inspection visits find register gaps. Firms often fix them during the visit and still get a reprimand. Fines of MXN 113k-170k appear when several gaps stack up.

**Changes ahead.**
- On 28 May 2021 a constitutional reform added a fraction to art. 73. It lets Congress issue a Ley General de Seguridad Privada and gave Congress 180 days to do so, which ran out around Nov 2021 (https://www.ejecentral.com.mx/regularan-servicios-de-seguridad-privada-en-mexico). I found no sign the law has been issued. In Aug 2026 AMESP was still calling for an updated federal law and a single national register (https://zetatijuana.com/2026/08/advierten-aumento-de-empresas-irregulares-de-seguridad-privada-piden-padron-unico/). The LFSP therefore still applies.
- An 8 Sep 2026 bill by Dip. Marcela Michel López would amend LFSP art. 13 (keeping the monthly report and adding human-rights and use-of-force training proof). It would also add modalities for mass events and cybersecurity, and publish reprimands in the Registro (https://gaceta.diputados.gob.mx/Gaceta/66/2026/sep/20260908-II-1-2.html). It is a bill, not law.

**Filing channel.** I could not confirm whether the DGSP takes the monthly report through an online portal, email, paper or disk (unverified). The Reglamento allows electronic or printed forms (https://mley.mx/Reg_LFSP/articulo/33/). None of the 2026 sanction notices describe the channel.

## Buyers

- **No official national count.** AMESP estimates "more than 8,000 firms" and "more than 600,000" guards, as cited in a Sept 2026 congressional bill (https://gaceta.diputados.gob.mx/Gaceta/66/2026/sep/20260908-II-1-2.html). A commercial blog says 8,500 (https://capacitaciondepersonal.com.mx/?p=7491, snippet only; fetch empty). The DGSP open-data list of federally authorised firms was last updated 30 Oct 2018 (https://www.datamx.io/dataset/direccion-general-de-seguridad-privada/resource/9e1109a2-5762-4a75-8f27-e221a815661d).
- **State samples:** Jalisco 289 firms, 83 state-authorised (https://www.nmas.com.mx/jalisco/seguridad/habra-registro-de-empresas-de-seguridad-privada-en-jalisco/). Chihuahua 269 (https://www.tiempo.com.mx/local/empresas_de_seguridad_privada_autorizadas_chihuahua_2023/). Puebla about 250 (search snippet, unverified). Hidalgo grew from 35 to 137 between 2016 and 2022 (search snippet, unverified). Baja California ranks third after Jalisco and CDMX (https://zetatijuana.com/2026/08/advierten-aumento-de-empresas-irregulares-de-seguridad-privada-piden-padron-unico/).
- **Workforce:** 1.19 million people worked in "protection and surveillance" occupations in Q1 2026, a figure that includes non-licensed watchmen (https://www.economia.gob.mx/datamexico/es/profile/occupation/trabajadores-en-servicios-de-proteccion-y-vigilancia).
- **Segments:** a few large groups (GMSI reports 34+ subsidiaries and 14,000 staff, per search snippet, unverified). Then mid-sized firms with 51-500 staff, and a long tail of small family firms. AMESP has 250 member firms (https://zetatijuana.com/2026/08/advierten-aumento-de-empresas-irregulares-de-seguridad-privada-piden-padron-unico/). Irregular firms are rising, and ex-employees often start their own (same source).
- **Federal vs state split:** unknown (unverified). Federal firms (2+ states) carry the DGSP monthly duty, plus state duties in each state where they operate.
- **How they comply today:** mainly an in-house "gestor gubernamental" who prepares permits and renewals, follows up with the DGSP and state authorities, and handles CUIP altas and bajas. A CDMX job ad describes exactly this role (https://mx.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-gestor-gubernamental-en-cuauhtemoc-BA3B0D3F75D2544A61373E686DCF3405). Spreadsheets and paper files are probably common (unverified).

## Competition

- **No product found that targets the DGSP Registro or the art. 13 monthly report.** Several Spanish searches ("software seguridad privada DGSP", "sistema control de guardias REPSE DGSP CUIP") returned only DOF sanction notices and generic tools.
- **Generic guard-operations software:** C-Guard Pro covers GPS, QR/NFC rounds, shifts, attendance and payroll, with no mention of Mexican filings (https://www.comparasoftware.com/c-guard-pro). Also GuardsPro/Guardso (https://www.getapp.com.mx/software/109879/guardso), Guardhouse (https://www.getapp.com.mx/software/114899/guardhouse) and VigiControl (https://www.ventasdeseguridad.com/en/news/latest-news/431-enterprises/22272-vigicontrol-the-app-to-manage-security-personnel.html). Prices were not shown.
- **Adjacent compliance tools:** REPSE document-control services such as Grupo Sin Límites (https://mexicoindustry.com/empresa/grupo-sin-limites). Guard firms must also hold REPSE registration (https://www.excelsior.com.mx/nacional/el-repse-y-la-seguridad-privada/1651176).
- **Spanish ERPs** for security firms exist (https://www.softwaredoit.es/software-erp/software-empresas-seguridad-privada.html) but are built for Spain's rules.
- **Free state tool:** none found at federal level (unverified). Some states run online authorisation procedures (Coahuila), but I saw no state or federal tool that keeps the register for the firm.
- **Real competitor:** the in-house gestor, local gestorías and payroll accountants. I found no published gestoría fees (unverified).

## Willingness to pay

- **Fine exposure:** MXN 113,140-169,710 per sanction in 2026 (https://sidof.segob.gob.mx/notas/docFuente/5799650 ; https://sidof.segob.gob.mx/notas/docFuente/5797220 ; https://sidof.segob.gob.mx/notas/docFuente/5795553). A public reprimand also hurts a firm that bids for corporate or government contracts (reasoned, unverified).
- **Cost base:** one guard costs a firm more than MXN 10,000 a month, all-in (https://modelosdeplandenegocios.com/blogs/news/cuanto-cuesta-contratar-seguridad-privada-mexico). A 50-guard firm turns over roughly MXN 6M+ a year (estimate).
- **Plausible price:** MXN 1,500-5,000 a month per firm, tiered by headcount (unverified estimate). That is about 1-3% of one fine a month, and less than a part-time gestor.
- **Caution:** many sanctions are reprimands only, and firms often fix gaps during the inspection. Small firms compete hard on price and may see compliance as a cost to minimise.

## Channels

- **AMESP** (250 member firms). It campaigns for a single register, so a compliance tool fits its message (https://zetatijuana.com/2026/08/advierten-aumento-de-empresas-irregulares-de-seguridad-privada-piden-padron-unico/).
- **ASIS Capítulo México** holds monthly meetings (158 attendees in June 2026, sponsored by a guard firm) (https://asis.org.mx/docs/reportes/JUNE-REPORT-2026.pdf).
- **Expo Seguridad México**, held each June at Centro Banamex: 400+ exhibitors, about 17,000 visitors, with a private-security and compliance education track (https://clusterindustrial.com.mx/expo-seguridad-mexico-alista-su-23a-edicion-con-mas-de-400-expositores-en-centro-banamex/).
- **Lead lists:** DOF/SIDOF sanction notices name the firms that were punished. State authorities such as Oaxaca's SSPO publish monthly lists of authorised firms (https://www.sspo.gob.mx/wp-content/uploads/2026/08/EMPRESAS-VIGENTES-JULIO-AGOSTO.pdf). The 2018 DGSP list is a starting point.
- **Partners:** payroll and REPSE accountants, gestorías, and guard-training schools (capacitaciondepersonal.com.mx-type sites).
- **Content:** Spanish SEO on "informe mensual DGSP", "alta y baja Registro Nacional seguridad privada" and "sanciones DGSP 2026". Search results for these terms are thin.

## Risks

- **Filing channel unknown.** If the DGSP runs its own capture system, the product becomes a record keeper and pre-filler, not a filer. It still has value, but less. If filing is paper or email, the value is higher (unverified either way).
- **Law reset.** A Ley General de Seguridad Privada is overdue since 2021. If passed, it could create a single national register and new formats. That could favour a tool, or the state could build its own portal.
- **The regulator builds a tool.** AMESP is pushing for a "padrón único". A national digital register could absorb part of the job.
- **Fragmentation.** 32 state regimes with different monthly reports (Baja California: first 5 business days) mean high build cost to cover them all.
- **Market size and willingness to pay.** Maybe 8,000 firms, many tiny or informal. The paying segment, firms with 30+ guards and a federal authorisation, may number only a few thousand (unverified).
- **Liability and data.** The product holds sensitive personal data: psychological and toxicology results, and criminal records. That brings duties under the private-sector data protection law (LFPDPPP), plus breach risk. Security firms may resist a cloud product.
- **Sales friction.** The sector is relationship-driven and Spanish-only. Gestores may see the tool as a threat.

## First product

**Version 1, "Registro al día":** a Spanish web app for a single federal-authorised firm with 20-500 staff.
1. Personnel file per employee holding the art. 12-X fields: CURP, RFC, address, assignment, transfers, training, and exam dates with expiry alerts (annual medical, psychological and toxicology). Plus CUIP status.
2. Equipment inventory: uniforms (models and counts), vehicles with photos, arms, radios. Every change is logged with a date and a cause.
3. Branches, legal representatives and corporate changes.
4. A monthly change log that builds the art. 13 report (all altas, bajas and changes since the last report), exported in the DGSP format (PDF, Excel or forms), with a reminder by day 10.
5. An "inspection pack": one-click export of current staff, equipment and training evidence for a DGSP verification visit.
6. Optional add-on: the Baja California monthly report (first 5 business days), as the first state module.

**First 30 days:**
- Week 1: interview 10-15 firms, using DOF-sanctioned firms, AMESP members and Oaxaca/Jalisco lists. Get a real copy of the DGSP monthly format and learn the submission channel. File a transparency request (PNT) to the SSPC for the count of firms in the Registro and the submission method.
- Weeks 2-3: build the personnel, equipment and change-log core with a monthly report export. Use Excel import from existing staff lists.
- Week 4: pilot with 3 firms on a free month. Measure hours saved on the monthly report. Test a price of MXN 2,000-3,000 a month.

## Open questions

- How do firms submit the art. 13 monthly report to the DGSP: portal, email, paper or disk? What is the exact format? (unverified)
- How many federal-authorised firms are there now? A PNT request to the SSPC would answer this.
- Do current gestorías or payroll houses already sell this as a service, and at what fee?
- What is the status and timetable of a Ley General de Seguridad Privada in the 2026-2027 sessions?
- What is the fine range under LFSP art. 42 fr. II, and how often does the DGSP inspect (inspections per year)?
- Which states have the largest firm counts and the strictest monthly reports (CDMX, Jalisco, Edomex, Nuevo León, Baja California)?

## Sources

- https://mley.mx/LFSP/articulo/12/
- https://mley.mx/LFSP/articulo/13/
- https://mley.mx/LFSP/articulo/32/
- https://mley.mx/Reg_LFSP/articulo/32/
- https://mley.mx/Reg_LFSP/articulo/33/
- https://mley.mx/Reg_LFSP/articulo/34/
- https://sdv.com.mx/compendio/ley-federal-de-seguridad-privada/articulo-19/
- https://sidof.segob.gob.mx/notas/docFuente/5799650
- https://sidof.segob.gob.mx/notas/docFuente/5798715
- https://sidof.segob.gob.mx/notas/docFuente/5797220
- https://sidof.segob.gob.mx/notas/docFuente/5795553
- https://sidof.segob.gob.mx/notas/docFuente/5798322 (snippet only)
- https://www.ejecentral.com.mx/regularan-servicios-de-seguridad-privada-en-mexico
- https://gaceta.diputados.gob.mx/Gaceta/66/2026/sep/20260908-II-1-2.html
- https://zetatijuana.com/2026/08/advierten-aumento-de-empresas-irregulares-de-seguridad-privada-piden-padron-unico/
- https://www.datamx.io/dataset/direccion-general-de-seguridad-privada/resource/9e1109a2-5762-4a75-8f27-e221a815661d
- https://www.nmas.com.mx/jalisco/seguridad/habra-registro-de-empresas-de-seguridad-privada-en-jalisco/
- https://www.tiempo.com.mx/local/empresas_de_seguridad_privada_autorizadas_chihuahua_2023/
- https://www.economia.gob.mx/datamexico/es/profile/occupation/trabajadores-en-servicios-de-proteccion-y-vigilancia
- https://seguridadbc.gob.mx/Planeacion/padron/GUIA%20LLENADO%20CORRECTO%20DEL%20INFORME%20MENSUAL.pdf (snippet only)
- https://papelea.com/mx/estado-de-tabasco/revalidacion-del-permiso-o-autorizacion-para-la-prestacion-del-servicio-portal-tabasco-1
- https://papelea.com/mx/estado-de-coahuila-de-zaragoza/autorizacion-para-prestar-servicios-de-seguridad-privada-registro-estatal-de-tramites-y-servicios-retys
- https://www.sspo.gob.mx/wp-content/uploads/2026/08/EMPRESAS-VIGENTES-JULIO-AGOSTO.pdf (listed in search, not read)
- https://slp.gob.mx/secesp/PDF/NORMATECA/LINEAMIENTOS%20DEL%20REGISTRO%20NACIONAL%20DE%20PERSONAL%20DE%20SEGURIDAD%20PUBLICA.pdf (snippet only)
- https://mx.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-gestor-gubernamental-en-cuauhtemoc-BA3B0D3F75D2544A61373E686DCF3405
- https://www.comparasoftware.com/c-guard-pro
- https://www.getapp.com.mx/software/109879/guardso
- https://www.getapp.com.mx/software/114899/guardhouse
- https://www.ventasdeseguridad.com/en/news/latest-news/431-enterprises/22272-vigicontrol-the-app-to-manage-security-personnel.html
- https://mexicoindustry.com/empresa/grupo-sin-limites
- https://www.excelsior.com.mx/nacional/el-repse-y-la-seguridad-privada/1651176
- https://www.softwaredoit.es/software-erp/software-empresas-seguridad-privada.html
- https://modelosdeplandenegocios.com/blogs/news/cuanto-cuesta-contratar-seguridad-privada-mexico
- https://asis.org.mx/docs/reportes/JUNE-REPORT-2026.pdf
- https://clusterindustrial.com.mx/expo-seguridad-mexico-alista-su-23a-edicion-con-mas-de-400-expositores-en-centro-banamex/
- https://capacitaciondepersonal.com.mx/?p=7491 (snippet only; fetch empty)
