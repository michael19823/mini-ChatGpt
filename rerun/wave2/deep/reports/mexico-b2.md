# Mexico B2: ICSOE/SISUB filer and consistency checker for small REPSE contractors

## Re-assessment (owner's criteria)

**Verdict: maybe. New score: 6/10. Old score: 5/10.**

**The case.** Every REPSE contractor must file ICSOE (IMSS) and SISUB (INFONAVIT) three times a year. Both portals only accept data. They do not prepare it, check it against payroll or SUA, or keep a contract register ([IMSS ICSOE](https://imss.gob.mx/icsoe); [Praxium](https://praxiumconsultores.com/blog/icsoe-y-sisub-cuanto-cuesta-cumplir-cada-cuatrimestre)). The SISUB CSV format is fragile, and IMSS now publishes a list of inconsistent ICSOE filings, so there is real room for a "prepare, check, archive" tool ([contadormx](https://contadormx.com/errores-comunes-del-sisub-al-infonavit/); [IMSS Boletín 300/2025](https://www.imss.gob.mx/sites/all/statics/i2f_news/IMSS%20Boletin%20300.pdf)). I found no product, local or foreign, that builds and cross-checks both files for the contractor. The client-side REPSE platforms (BDO, Xternall) only collect and monitor documents ([BDO webinar](https://www.bdomexico.com/getmedia/514a6f9e-9faf-406d-b485-82f4be6a21c6/Webinar-REPSE-070825.pdf?ext=.pdf)). It stays a "maybe" because filing is only three times a year, willingness to pay is unproven, and a payroll suite could add an export.

**Room for improvement over the portal or current practice**
- **Data preparation.** Praxium puts the work at about 12 hours a period for a contractor with 5 clients and 18 workers. The hours go to updating the contract register (2 h), pulling CURP/NSS/SBC (3 h), reconciling with payroll and SUA (3 h), loading and fixing the file (3 h), and archiving acknowledgements (1 h) ([Praxium](https://praxiumconsultores.com/blog/icsoe-y-sisub-cuanto-cuesta-cumplir-cada-cuatrimestre)). The portals do none of the first three.
- **Error-prone format.** The SISUB CSV rejects commas, empty cells and currency formats. Headers must stay in, although the official guide said to delete them. Income fields are bimonthly inside a four-monthly return. A worker on several contracts must be listed in one row with the contracts separated by full stops. Without headers, the system gives no acknowledgement and emails back an error file ([contadormx, Oct 2021](https://contadormx.com/errores-comunes-del-sisub-al-infonavit/)). Users still report "layout incorrecto" errors on official headers ([contadormx tag page](https://contadormx.com/tag/error-sisub/)). Praxium lists "format errors that only show up at validation" and SBC differences between payroll and IMSS as typical problems ([Praxium](https://praxiumconsultores.com/blog/icsoe-y-sisub-cuanto-cuesta-cumplir-cada-cuatrimestre)).
- **Portal failures.** In September 2022 the SISUB upload failed near the deadline. INFONAVIT told filers to switch browsers, clear cookies, and email screenshots and all three Excel files to named staff before 11:59 pm ([IDC Online](https://idconline.mx/seguridad-social/2022/09/19/sisub-presenta-problemas-de-ultima-hora)). The layout changed again in June 2026 ("datos continuos") ([contadormx](https://contadormx.com/sisub-infonavit-guia-art-29-bis-informe-continuo/)).
- **Inspection readiness.** IMSS publishes seven types of ICSOE inconsistency by name ([IMSS Boletín 300/2025](https://www.imss.gob.mx/sites/all/statics/i2f_news/IMSS%20Boletin%20300.pdf)). A pre-filing check against those rules is a clear gap.
- **Monthly evidence pack.** Clients demand a monthly bundle by the last day of the next month: payroll CFDI, IMSS and INFONAVIT payment proofs, tax withholdings, VAT return and three positive compliance opinions. They also want the four-monthly ICSOE/SISUB acknowledgements ([BDO webinar](https://www.bdomexico.com/getmedia/514a6f9e-9faf-406d-b485-82f4be6a21c6/Webinar-REPSE-070825.pdf?ext=.pdf); [AXA](https://axa.mx/documents/51602/20700179/DOCUMENTO%20REPSE.pdf)). Assembling this pack per client makes the product monthly, not three times a year.
- **Training demand.** Paid courses on just these two returns sell steadily, which shows practitioners struggle with them. COFIDE charges MXN 1,190 for 5 hours, covering special characters, field lengths and empty SISUB fields ([COFIDE](https://www.cofide.mx/cursos/icsoe-y-sisub-infonavit-e-imss-declaraciones-infomativas)). The Colegio de Contadores runs repeat workshops ([Colegio](https://www.contadoresmexico.org.mx/Curso/Repse-y-sus-informativas-en-el-ICSOE-y-Sisub)).
- **Multi-client work.** Accountants file for many RFCs, each with its own e.firma, contracts and deadlines. Nothing in the portals gives a multi-client view (inferred from the [IMSS ICSOE](https://imss.gob.mx/icsoe) single-filer flow).

**Competitor reality check**
- **IMSS/INFONAVIT portals:** free. They cover submission and bulk upload (up to 3,000 workers), but no preparation, cross-checks or archive ([IMSS bulk guide](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/3-Guia-Carga-Masiva-de-trabajadores.pdf)).
- **elconta.mx:** free fill-in SISUB templates (a zip of blank files) and a paid recorded course. No generation from payroll and no validation ([elconta](https://elconta.mx/archivos-csv-sisub-infonavit/)). Not a real competitor.
- **Payroll suites (CONTPAQi Nóminas, Aspel NOI, Nomipaq, Worky, Tress, Runa, Buk):** three more searches found no documentation that any of them exports ICSOE or SISUB files. Buk automates payment files only ([Buk](https://info.buk.mx/hubfs/Archivos%20y%20Pagos%20evoluciona_%20conoce%20la%20nueva%20automatizaci%C3%B3n%20(1).pdf)). The absence is unverified. One support call to each vendor would settle it.
- **BDO REPSE SaaS:** client-side. It validates supplier REPSE status weekly, stores the monthly documents, sends alerts and connects to an ERP. It is priced by the number of suppliers, on quote ([BDO webinar](https://www.bdomexico.com/getmedia/514a6f9e-9faf-406d-b485-82f4be6a21c6/Webinar-REPSE-070825.pdf?ext=.pdf)). It does not build ICSOE or SISUB files.
- **Xternall:** client-side supplier monitoring and document storage. No public price, client count or ICSOE/SISUB feature ([El CEO, Jan 2024](https://elceo.com/negocios/xternall-la-plataforma-que-ayuda-a-las-empresas-a-supervisar-a-sus-proveedores-repse/)).
- **Consultancies (Praxium, BHR):** sell diagnosis and filing help. No published fees ([Praxium](https://praxiumconsultores.com/blog/icsoe-y-sisub-cuanto-cuesta-cumplir-cada-cuatrimestre)).
- **Conclusion:** no incumbent does the contractor-side job. The client-side platforms are complementary. They create the demand, because they force suppliers to upload these documents.

**Price per customer**
- **Anchors.** About 36 staff hours a year ([Praxium](https://praxiumconsultores.com/blog/icsoe-y-sisub-cuanto-cuesta-cumplir-cada-cuatrimestre)). At an assumed MXN 300 an hour that is about MXN 10,800 a year (unverified rate). One ICSOE fine is MXN 58,655 to 234,620 ([BHR México](https://www.bhrmx.com/wp-content/uploads/2026/08/Servicios-especializados-el-riesgo-no-termina-con-el-REPSE.pdf)). A one-off course costs MXN 1,190 ([COFIDE](https://www.cofide.mx/cursos/icsoe-y-sisub-infonavit-e-imss-declaraciones-infomativas)). No published accountant fee for ICSOE/SISUB was found (unverified).
- **Contractor (one RFC):** MXN 300 a month (MXN 3,600 a year, about USD 200 at about MXN 18/USD, unverified rate). That covers filing prep and the monthly evidence pack. Alternatively, MXN 900 per four-monthly filing for prep only. Both are proposals (unverified).
- **Accountant or payroll bureau:** MXN 2,000 a month for up to 25 client RFCs, plus MXN 60 per extra RFC a month. That is about MXN 24,000 a year per firm (proposal, unverified).

**Revenue estimate (year 3)**
- **Buyer base.** About 89,000 firms on the REPSE register in May 2026 ([LexLatin](https://lexlatin.com/entrevistas/repse-mexico-nuevas-auditorias)). More than 35,000 were removed in 2025 for not renewing ([Alegra](https://blog.alegra.com/mexico/que-es-el-repse-guia-para-empresas/)), and only 53% re-qualified at the 2024 renewal ([IDC Online](https://idconline.mx/seguridad-social/2025/12/18/repse-una-deuda-pendiente-en-la-formalizacion-empresarial)). I use 50,000 active filers (unverified). Accounting firms that file for REPSE clients: assume 5,000 (unverified).
- **Base case:**
  - Direct contractors: 50,000 x 1% x MXN 3,600 = MXN 1.8M.
  - Accounting firms: 5,000 x 3% = 150 firms x MXN 24,000 = MXN 3.6M.
  - Total: about MXN 5.4M a year, about USD 300k.
- **Low case:**
  - Contractors: 50,000 x 0.5% x MXN 3,600 = MXN 0.9M.
  - Firms: 5,000 x 1.2% = 60 firms x MXN 24,000 = MXN 1.44M.
  - Total: about MXN 2.3M, about USD 130k.
- Either case supports a one- or two-person business. Neither makes a large company.

**Ease of implementation and sale**
- **Build: medium.** Version 1 is file generation and validation. It needs an Excel/CSV import, a contract register, the ICSOE bulk template, the three SISUB layouts and rule checks. The hard parts are reading SUA data and keeping up with layout changes (Dec 2023, Jun 2026) ([contadormx](https://contadormx.com/sisub-infonavit-guia-art-29-bis-informe-continuo/)). The user still signs with the e.firma on the portal, so there is no API dependency ([IMSS ICSOE](https://imss.gob.mx/icsoe)).
- **Onboarding: easy.** It is a web app. A user uploads payroll or SUA exports and gets the files and an error report back. No integration is needed for version 1.
- **Sale: medium.** Deadline-driven search spikes each January, May and September ([IDC Online](https://idconline.mx/seguridad-social/2025/01/17/fecha-limite-para-presentar-icsoe-y-sisub-tercer-cuatrimestre-2024)). Other routes are accountant colleges and course providers (COFIDE, Colegio de Contadores) and CONTPAQi/Aspel resellers. The pitch "pass your client's supplier portal every month" is stronger than "file three times a year".

**Remaining risks**
- A payroll suite (CONTPAQi, NOI) may already export these files or add an export. This is unverified and is the biggest open point.
- IMSS could pre-fill ICSOE from its own IDSE/SUA data (no plan found, unverified).
- The buyer count is uncertain. The register churns heavily (35,000+ removals in 2025) ([Alegra](https://blog.alegra.com/mexico/que-es-el-repse-guia-para-empresas/)).
- Three deadlines a year invite seasonal churn unless the monthly evidence pack holds customers.
- Accountants may see an Excel template plus their own time as "good enough". No fee data was found to prove they would pay (unverified).
- The tool handles NSS, CURP and salary data, so Mexico's personal-data law (LFPDPPP) applies.

**New sources (this pass)**
- https://lexlatin.com/entrevistas/repse-mexico-nuevas-auditorias
- https://blog.alegra.com/mexico/que-es-el-repse-guia-para-empresas/
- https://contadormx.com/errores-comunes-del-sisub-al-infonavit/
- https://contadormx.com/tag/error-sisub/
- https://idconline.mx/seguridad-social/2022/09/19/sisub-presenta-problemas-de-ultima-hora
- https://www.cofide.mx/cursos/icsoe-y-sisub-infonavit-e-imss-declaraciones-infomativas
- https://www.bdomexico.com/getmedia/514a6f9e-9faf-406d-b485-82f4be6a21c6/Webinar-REPSE-070825.pdf?ext=.pdf
- https://elceo.com/negocios/xternall-la-plataforma-que-ayuda-a-las-empresas-a-supervisar-a-sus-proveedores-repse/
- https://info.buk.mx/hubfs/Archivos%20y%20Pagos%20evoluciona_%20conoce%20la%20nueva%20automatizaci%C3%B3n%20(1).pdf
- https://praxiumconsultores.com/blog/cuanto-cobra-un-contador-por-maquilar-la-nomina (no fee figures given)

## Summary

**Verdict: maybe. Score: 5/10.**

The duty is real, recurring and enforced. Every contractor registered in REPSE must file two information returns three times a year: ICSOE with IMSS and SISUB with INFONAVIT. Fines for ICSOE alone run from MXN 58,655 to 234,620 per breach in 2026 ([Praxium](https://praxiumconsultores.com/blog/icsoe-y-sisub-cuanto-cuesta-cumplir-cada-cuatrimestre); [BHR México](https://www.bhrmx.com/wp-content/uploads/2026/08/Servicios-especializados-el-riesgo-no-termina-con-el-REPSE.pdf)). Since June 2025, IMSS has published a public "list of inconsistent information" that names bad ICSOE filings ([IMSS Boletín 300/2025](https://www.imss.gob.mx/sites/all/statics/i2f_news/IMSS%20Boletin%20300.pdf)). It also cross-checks REPSE firms against its own records in recurring sweeps ([IMSS-STPS Boletín 396/2025](https://www.imss.gob.mx/sites/all/statics/i2f_news/Boletin%20Conjunto.%20396.pdf)). So there is a clear opening for a tool that builds both files from payroll/SUA data and checks them against each other before filing. The case is held back by three things. The filing happens only three times a year. A free IMSS portal with a bulk template already exists. Most small contractors hand the job to their accountant. The best path is to sell to accounting firms and payroll bureaus as a multi-client tool. A second angle is the monthly "REPSE evidence pack" that large client firms demand from suppliers. That is a wider and more frequent pain than the filing itself.

## Duty

**Legal basis**
- ICSOE: Ley del Seguro Social (LSS) art. 15-A. REPSE contractors report each specialised-services contract to IMSS every four months ([IMSS ICSOE site](https://imss.gob.mx/icsoe); [contadormx](https://contadormx.com/icsoe-del-imss-informativa-de-contratos-de-servicios-u-obras-especializados/)).
- Detailed rules: "Lineamientos generales para el cumplimiento de la obligación establecida en el tercer párrafo del artículo 15 A", Acuerdo ACDO.AS2.HCT.300322/68.P.DIR, DOF 13 April 2022 ([IMSS Boletín 300/2025](https://www.imss.gob.mx/sites/all/statics/i2f_news/IMSS%20Boletin%20300.pdf)).
- SISUB: Ley del INFONAVIT art. 29 Bis. Same four-monthly calendar ([contadormx SISUB guide](https://contadormx.com/sisub-infonavit-guia-art-29-bis-informe-continuo/); [BHR México](https://www.bhrmx.com/wp-content/uploads/2026/08/Servicios-especializados-el-riesgo-no-termina-con-el-REPSE.pdf)).
- I read the rule texts through secondary compendia and law-firm notes, not the DOF itself.

**What must be filed**
- ICSOE: contractor and client data (name, RFC, address, contact), the contract's purpose and term, and for each worker the NSS, CURP and salario base de cotización (SBC), plus a copy of the REPSE registration. Filers sign with the company e.firma ([IMSS ICSOE site](https://imss.gob.mx/icsoe)).
- Workers can be entered one by one or by bulk upload, up to 3,000 per file ([IDC Online](https://idconline.mx/seguridad-social/2021/09/13/detalles-del-imss-sobre-el-icsoe); [IMSS bulk-load guide](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/3-Guia-Carga-Masiva-de-trabajadores.pdf)).
- SISUB adds the money: INFONAVIT contributions and mortgage repayments (amortizaciones) per worker, which must match SUA/SIPARE ([Praxium](https://praxiumconsultores.com/blog/icsoe-y-sisub-cuanto-cuesta-cumplir-cada-cuatrimestre); [contadormx](https://contadormx.com/sisub-infonavit-guia-art-29-bis-informe-continuo/)).
- SISUB is filed as three CSV layouts (obligated party, worker detail, contract detail) ([contadormx](https://contadormx.com/sisub-infonavit-guia-art-29-bis-informe-continuo/)).
- Filing types: normal, "sin información" (nil) and complementary. A nil return is still due while REPSE is active ([BHR México](https://www.bhrmx.com/wp-content/uploads/2026/08/Servicios-especializados-el-riesgo-no-termina-con-el-REPSE.pdf)). At most four complementary corrections are allowed per period ([contadigital](https://www.contadigital.mx/posts/que-es-repse-icsoe-y-sisub)) (unverified against the Lineamientos).

**Deadlines**
- By the 17th of January (Sep-Dec), May (Jan-Apr) and September (May-Aug). If the 17th is not a business day, the deadline moves to the next one ([IMSS ICSOE site](https://imss.gob.mx/icsoe); [Praxium](https://praxiumconsultores.com/blog/declaracion-repse)).
- The signing window for May-Aug 2026 ran from 1 to 17 September 2026 ([IMSS ICSOE site](https://imss.gob.mx/icsoe)).

**Penalties**
- ICSOE: LSS art. 304-A fr. XXII (not filing or filing late) and art. 304-B fr. V, 500 to 2,000 UMA ([sdv.com.mx art. 304-A](https://sdv.com.mx/compendio/ley-seguro-social/articulo-304-a/); [mley.mx art. 304-B](https://mley.mx/LSS/articulo/304-b/)).
- With the 2026 UMA of MXN 117.31 ([IDC Online](https://idconline.mx/seguridad-social/2026/02/16/obligaciones-y-multas-para-2026-imss-e-infonavit)), that is MXN 58,655 to 234,620 per breach ([BHR México](https://www.bhrmx.com/wp-content/uploads/2026/08/Servicios-especializados-el-riesgo-no-termina-con-el-REPSE.pdf)).
- A late filing made voluntarily, before IMSS acts, is not fined (LSS art. 304-C) ([contadigital](https://www.contadigital.mx/posts/que-es-repse-icsoe-y-sisub)).
- SISUB: 251 to 300 UMA under the INFONAVIT fines regulation, arts. 6 fr. XVIII and 8 fr. IV ([contadormx](https://contadormx.com/?p=65575)) (unverified against the official regulation). At the 2026 UMA that is about MXN 29,445 to 35,193 (my calculation).
- Indirect penalties matter more. A negative IMSS or INFONAVIT compliance opinion is grounds to cancel REPSE ([IMSS-STPS Boletín 396/2025](https://www.imss.gob.mx/sites/all/statics/i2f_news/Boletin%20Conjunto.%20396.pdf)). INFONAVIT reports SISUB non-compliance to STPS ([contadormx](https://contadormx.com/15-preguntas-frecuentes-del-sisub-del-infonavit/)). Clients carry joint liability for a non-compliant contractor's workers under both laws ([BHR México](https://www.bhrmx.com/wp-content/uploads/2026/08/Servicios-especializados-el-riesgo-no-termina-con-el-REPSE.pdf)).

**Enforcement evidence**
- 16 June 2025: IMSS published a "Listado Público" of ICSOE contracts and a separate "Listado con Información Inconsistente". The second list flags contracts with no workers, returns with no contracts, missing or bad start dates, multiple returns per period, contractor and client being the same, and mismatched contract counts ([IMSS Boletín 300/2025](https://www.imss.gob.mx/sites/all/statics/i2f_news/IMSS%20Boletin%20300.pdf)). The lists can be downloaded in Excel by year and four-month period since 2021 ([IMCP](https://imcp.org.mx/wp-content/uploads/2025/07/NOTICIAS-SEGURIDAD-SOCIAL-2025-03.pdf)).
- Data-sharing agreement between IMSS and STPS since 22 Nov 2023, with repeated warning sweeps of REPSE firms whose social-security compliance opinion was not positive: 34,302 firms in Feb 2024 ([Tax Today Mexico](https://www.taxtodaymexico.com/exhortan-imss-y-stps-a-34-mil-empresas-inscritas-en-repse-a-regularizarse/)), more than 22,000 in Feb 2025 ([IMSS joint bulletin](https://www.imss.gob.mx/sites/all/statics/i2f_news/Boletin%20Conjunto.%20STPS%20e%20IMSS%20exhortan%20a%20m%C3%A1s%20de%2022%20mil%20empresas%20con%20REPSE%20a%20cumplir%20sus%20obligaciones%20en%20materia%20de%20seguridad%20social.docx)), and 14,455 on 31 July 2025 ([IMSS-STPS Boletín 396/2025](https://www.imss.gob.mx/sites/all/statics/i2f_news/Boletin%20Conjunto.%20396.pdf)).
- STPS cancelled more than 51,000 REPSE registrations in 2025. More than 13,000 firms re-registered. That article does not say ICSOE/SISUB non-filing was a cause ([Tiempo](https://www.tiempo.com.mx/economia/cancelo-stps-51-mil-inscripciones-del-repse-por-incumplimientos-septiembre-2026/)).
- IMSS's 2026 audit plan (11 March 2026) stresses data cross-matching and predictive models ([elconta](https://elconta.mx/fiscalizacion-imss-2026-paradigma-control-digital/); [AMCPDF](https://amcpdf.org.mx/fiscalizacion-del-imss-en-la-era-repse/)).
- I found no published count of ICSOE fines actually imposed (unverified).

**Recent changes**
- June 2026: the SISUB guide added an "informe con datos continuos" for contracts still running from the prior period, and layout amounts must match SUA/SIPARE ([contadormx, 17 Jul 2026](https://contadormx.com/sisub-infonavit-guia-art-29-bis-informe-continuo/)). Layouts also changed in Dec 2023 ([contadormx](https://contadormx.com/informe-cuatrimestral-del-sisub-ante-el-infonavit/)). Frequent layout changes are a reason to buy a tool.
- 9 June 2026 DOF agreement: REPSE registration, renewal and cancellation merged into one procedure (STPS-086-002). Decision time cut to 5 business days for employers with up to 10 workers. Fewer documents are required from micro firms. STPS said obligations are not reduced ([IDC Online](https://idconline.mx/laboral/2026/06/10/adios-trabas-del-repse-stps-facilita-la-renovacion-y-registro); [Siempre al Día](https://siemprealdia.co/mexico/derecho-laboral/simplificacion-del-repse-stps/)).
- July 2026: the REPSE portal was updated ([IDC Online](https://idconline.mx/laboral/2026/07/23/actualizacion-en-portal-repse-que-cambia-para-ti)). September 2026: a simplified e.firma sign-up for micro and small firms using SAT/IMSS/INFONAVIT data ([Siempre al Día](https://siemprealdia.co/mexico/derecho-laboral/simplificacion-del-repse-stps/)). Both make REPSE easier to enter, so the pool of filers may grow.
- I found no change to the ICSOE or SISUB duty itself.

## Buyers

- **Primary:** REPSE-registered contractors. Typical sectors are cleaning, private security, maintenance and construction subcontracting ([Alegra](https://blog.alegra.com/mexico/que-es-el-repse-guia-para-empresas/)).
- **Count:** STPS publishes no current total of active registrations (I searched four times). Proxies:
  - About 71,000 registered by Sep 2021 ([capacitaciondepersonal](https://capacitaciondepersonal.com.mx/repse-guia-completa-registro-obligaciones-empresas-mexicanas/)) (unverified).
  - In 2024 only 53% of firms due for renewal re-qualified ([IDC Online](https://idconline.mx/seguridad-social/2025/12/18/repse-una-deuda-pendiente-en-la-formalizacion-empresarial); [Eulen](https://www.eulen.com/mx/wp-content/uploads/sites/8/2026/02/01-Empleabilidad-en-Mexico-rumbo-a-2026-cautela-y-transformacion-laboral.pdf)).
  - 34,302 REPSE firms had a non-positive IMSS opinion in Feb 2024 alone. The registry must therefore have been well above that ([Tax Today Mexico](https://www.taxtodaymexico.com/exhortan-imss-y-stps-a-34-mil-empresas-inscritas-en-repse-a-regularizarse/)).
  - My working estimate is 40,000 to 80,000 active filers (unverified). The downloadable IMSS ICSOE public list could give an exact count of contractors filing per period. I did not open it.
- **Size:** Mostly small and medium firms. The June 2026 reform's special track for employers with 10 or fewer workers suggests many micro registrants ([IDC Online](https://idconline.mx/laboral/2026/06/10/adios-trabas-del-repse-stps-facilita-la-renovacion-y-registro)).
- **Secondary buyers:** Client firms that carry joint liability. Large clients already run supplier portals. AXA's supplier tool ("SUBTOOL") requires REPSE suppliers to upload monthly IMSS/INFONAVIT/SAT opinions, SUA, payroll CFDI XML and a worker list. In April, August and December it also requires the ICSOE and SISUB acknowledgements plus an Excel file of contracts and workers ([AXA REPSE document](https://axa.mx/documents/51602/20700179/DOCUMENTO%20REPSE.pdf)).
- **How they comply today:**
  - Mostly through their external accountant or payroll bureau (inferred from the wide range of accountant courses: [Colegio de Contadores](https://www.contadoresmexico.org.mx/Curso/Repse-y-sus-informativas-en-el-ICSOE-y-Sisub), [COFIDE](https://www.cofide.mx/blog/icsoe-sisub-que-son-quien-presenta)).
  - Data is pulled by hand from payroll and SUA into the IMSS template or SISUB CSVs.
  - Praxium estimates 12 staff hours per four-month period for a contractor with 5 clients and 18 workers. The biggest delay is SBC differences between payroll and IMSS ([Praxium](https://praxiumconsultores.com/blog/icsoe-y-sisub-cuanto-cuesta-cumplir-cada-cuatrimestre)).

## Competition

- **Free state tools:** the IMSS ICSOE portal with an official bulk-upload template and guide ([IMSS ICSOE](https://imss.gob.mx/icsoe); [bulk guide](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/3-Guia-Carga-Masiva-de-trabajadores.pdf)), and the INFONAVIT SISUB module in the employer portal with published .xls guides for its CSVs ([contadormx](https://contadormx.com/15-preguntas-frecuentes-del-sisub-del-infonavit/)). These are the filing channels. They do not pre-fill data from IMSS records ([IMSS ICSOE](https://imss.gob.mx/icsoe)), and they do not reconcile ICSOE with SISUB or SUA. A free tool covers submission, not preparation or checking.
- **Payroll suites:** CONTPAQi Nóminas, Aspel NOI, Runa, Worky and Nomipaq. Across five searches I found no documentation that any of them generates ICSOE or SISUB files. CONTPAQi links to SUA ([Integra manual](https://www.integraconsorcio.com.mx/public/archivos/65280f9fdcfcd.pdf)). Runa sends movements to IDSE and publishes only guides on ICSOE ([Runa](https://runahr.com/mx/recursos/aspectos-legales/que-es-icsoe/)). Whether they export these files is unverified. This is the biggest unknown.
- **Templates:** elconta.mx sells or publishes SISUB CSV files and ICSOE material ([elconta](https://elconta.mx/archivos-csv-sisub-infonavit/)). Prices not found.
- **Client-side supplier platforms:** Xternall (claims more than 100 large groups; checks REPSE and SAT/IMSS/INFONAVIT opinions) ([El Contribuyente](https://www.elcontribuyente.mx/2023/03/evita-multas-por-incumplimiento-de-proveedores-repse-con-xternall-y-automatiza-su-revision/)), BDO's REPSE module ([BDO](https://bdomexico.com/getattachment/e678916d-f204-4c21-8b41-7498da73ce74/BDO-Brochure-REPSE_v1.pdf)), and in-house portals such as AXA's SUBTOOL ([AXA](https://axa.mx/documents/51602/20700179/DOCUMENTO%20REPSE.pdf)). These serve the client, not the small contractor, and do not prepare the filings. Prices not found.
- **Consultancies and training:** Praxium ([Praxium](https://praxiumconsultores.com/blog/icsoe-y-sisub-cuanto-cuesta-cumplir-cada-cuatrimestre)), BHR México ([BHR](https://www.bhrmx.com/wp-content/uploads/2026/08/Servicios-especializados-el-riesgo-no-termina-con-el-REPSE.pdf)), COFIDE courses, Colegio de Contadores workshops ([Colegio](https://www.contadoresmexico.org.mx/Curso/Taller-Repse-y-sus-informativas-en-el-ICSOE-y-Sisub)). No published fees.
- **Bottom line:** I found no dedicated SaaS that builds ICSOE and SISUB files from payroll/SUA and checks them against each other and against the IMSS inconsistency rules.

## Willingness to pay

- **Cost of failure:** ICSOE fine MXN 58,655 to 234,620 per breach. SISUB fine about MXN 29,445 to 35,193 (see Duty). Worse still, a lost REPSE means the client cannot deduct the invoices and may stop paying. Clients often hold payment until they receive the acknowledgement ([Praxium](https://praxiumconsultores.com/blog/icsoe-y-sisub-cuanto-cuesta-cumplir-cada-cuatrimestre); [Alegra](https://blog.alegra.com/mexico/repse-empresas-servicios/)).
- **Cost of doing it:** about 12 hours per period, so about 36 hours a year for a small contractor ([Praxium](https://praxiumconsultores.com/blog/icsoe-y-sisub-cuanto-cuesta-cumplir-cada-cuatrimestre)). At an assumed MXN 300 per hour of accountant time, that is about MXN 10,800 a year (my estimate, unverified).
- **Current prices:** No consultancy, template or platform published a price. Neither Praxium nor any vendor search turned up a figure (two searches).
- **Plausible price:** For a contractor, MXN 250 to 500 a month, or about MXN 1,000 per filing period. For an accounting firm, MXN 1,500 to 4,000 a month for 10 to 50 client RFCs. These are proposals, unverified.
- **Weakness:** Only three deadlines a year, and the accountant already bills for it. Demand must come from accountants who want to save time and avoid inconsistency flags, more than from contractors themselves.

## Channels

- **Accounting bodies:** IMCP (with its CROSS social-security committee bulletins), Colegio de Contadores Públicos de México, AMCPDF. All run ICSOE/SISUB courses and newsletters ([IMCP](https://imcp.org.mx/wp-content/uploads/2025/07/NOTICIAS-SEGURIDAD-SOCIAL-2025-03.pdf); [Colegio](https://www.contadoresmexico.org.mx/Curso/Repse-y-sus-informativas-en-el-ICSOE-y-Sisub); [AMCPDF](https://amcpdf.org.mx/fiscalizacion-del-imss-en-la-era-repse/)).
- **Practitioner media:** elconta.mx, contadormx.com, IDC Online, El Contribuyente. Each deadline drives a spike in articles ([IDC Online](https://idconline.mx/seguridad-social/2025/01/17/fecha-limite-para-presentar-icsoe-y-sisub-tercer-cuatrimestre-2024)). Good for SEO and sponsored webinars.
- **CONTPAQi/Aspel resellers:** Distributors such as Integra Consorcio and elconta already serve the same accountants ([Integra](https://www.integraconsorcio.com.mx/public/archivos/65280f9fdcfcd.pdf)). A plug-in that reads CONTPAQi/NOI exports would fit their catalogue.
- **Sector chambers:** COPARMEX, CANACINTRA, CMIC (construction), and private-security and cleaning associations (unverified; my search found no named body).
- **Lead list:** The IMSS ICSOE public list names contractors and their clients, and the inconsistent list names those with flagged errors ([IMSS Boletín 300/2025](https://www.imss.gob.mx/sites/all/statics/i2f_news/IMSS%20Boletin%20300.pdf)). Using it for outreach must respect Mexican data-protection law (unverified).

## Risks

- **Payroll suites already do it, or add it.** If CONTPAQi Nóminas or NOI export ICSOE/SISUB files, the core value shrinks to checking. Unverified.
- **State tools improve.** IMSS could pre-fill ICSOE from IDSE/SUA data. It already has the data and has built cross-matching ([IMSS-STPS Boletín 396/2025](https://www.imss.gob.mx/sites/all/statics/i2f_news/Boletin%20Conjunto.%20396.pdf)). No plan found (unverified).
- **Low frequency.** Three deadlines a year makes churn and "buy only in January" behaviour likely.
- **Market size unclear.** No official count. Mass cancellations (51k in 2025) shrink the pool, while the 2026 simplification may grow it.
- **Rule change.** Political risk to the 2021 outsourcing regime looks low. The June 2026 reform kept all obligations ([Siempre al Día](https://siemprealdia.co/mexico/derecho-laboral/simplificacion-del-repse-stps/)).
- **Layout churn.** INFONAVIT changes SISUB layouts (Dec 2023, Jun 2026), so maintenance is ongoing ([contadormx](https://contadormx.com/sisub-infonavit-guia-art-29-bis-informe-continuo/)).
- **Liability and data.** The tool would handle NSS, CURP and salary data, so LFPDPPP privacy compliance is needed. A wrong file can trigger fines, which needs clear terms. The e.firma cannot be safely held by a SaaS, so the user still signs on the portal.
- **Language:** Spanish only. That is not a barrier for a Spanish-speaking founder.

## First product

**Version 1 (prepare and check, the user files):**
1. Import payroll/SUA data. Start with SUA export files and a generic Excel. Add CONTPAQi Nóminas and NOI exports next.
2. A contract register: client RFC, purpose, start and end dates, REPSE activity. Assign each worker to a contract, with a date range.
3. Generate the ICSOE bulk-upload file and the three SISUB CSV layouts, including nil and "datos continuos" cases.
4. Run checks before filing. Mirror IMSS's seven inconsistency rules (contracts with no workers, no description, bad dates, multiple returns, count mismatch, contractor = client). Add SBC payroll vs SUA, SISUB contributions vs SUA/SIPARE, and ICSOE vs SISUB worker and contract parity.
5. A deadline calendar with reminders on the 10th of Jan/May/Sep, and an archive of acknowledgements per client.
6. A multi-RFC dashboard for accounting firms.

**Next:** Export the client evidence pack (the AXA-style monthly bundle: opinions, SUA, CFDI XML, worker list, four-monthly acknowledgements). Check the contractor against the IMSS public and inconsistent lists.

**First 30 days:**
- Week 1: Download the current IMSS template and INFONAVIT SISUB layouts and guide (June 2026). Download the IMSS public and inconsistent lists to count filers and spot common errors. Ask CONTPAQi/Aspel support whether they export ICSOE/SISUB.
- Week 2: Interview 10 accountants who file for REPSE clients, recruited via IMCP or Colegio groups and LinkedIn. Get their hours per filing and what they would pay.
- Weeks 3-4: Build an Excel/SUA-to-ICSOE/SISUB converter with the checks as a web app. Test it on real (anonymised) files from two or three firms before the 17 January 2027 deadline.

## Open questions

- How many contractors actually file ICSOE each period? The IMSS public list in Excel should answer this.
- Do CONTPAQi Nóminas, Aspel NOI, Nomipaq, Runa or Worky already export ICSOE/SISUB layouts?
- What do accountants charge per ICSOE/SISUB filing today?
- The exact SISUB fine provision and amount in the current INFONAVIT regulation, after the 2025 reform of the INFONAVIT law (not checked).
- How many fines have actually been imposed for ICSOE/SISUB, as opposed to warnings?
- Does any API or bulk channel exist to submit without the e.firma web flow?

## Sources

- https://imss.gob.mx/icsoe
- https://www.imss.gob.mx/sites/all/statics/icsoe/guias/3-Guia-Carga-Masiva-de-trabajadores.pdf
- https://www.imss.gob.mx/sites/all/statics/i2f_news/IMSS%20Boletin%20300.pdf
- https://www.imss.gob.mx/sites/all/statics/i2f_news/Boletin%20Conjunto.%20396.pdf
- https://www.imss.gob.mx/sites/all/statics/i2f_news/Boletin%20Conjunto.%20STPS%20e%20IMSS%20exhortan%20a%20m%C3%A1s%20de%2022%20mil%20empresas%20con%20REPSE%20a%20cumplir%20sus%20obligaciones%20en%20materia%20de%20seguridad%20social.docx
- https://www.taxtodaymexico.com/exhortan-imss-y-stps-a-34-mil-empresas-inscritas-en-repse-a-regularizarse/
- https://sdv.com.mx/compendio/ley-seguro-social/articulo-304-a/
- https://mley.mx/LSS/articulo/304-b/
- https://idconline.mx/seguridad-social/2026/02/16/obligaciones-y-multas-para-2026-imss-e-infonavit
- https://www.bhrmx.com/wp-content/uploads/2026/08/Servicios-especializados-el-riesgo-no-termina-con-el-REPSE.pdf
- https://praxiumconsultores.com/blog/icsoe-y-sisub-cuanto-cuesta-cumplir-cada-cuatrimestre
- https://praxiumconsultores.com/blog/declaracion-repse
- https://contadormx.com/sisub-infonavit-guia-art-29-bis-informe-continuo/
- https://contadormx.com/?p=65575
- https://contadormx.com/icsoe-del-imss-informativa-de-contratos-de-servicios-u-obras-especializados/
- https://contadormx.com/15-preguntas-frecuentes-del-sisub-del-infonavit/
- https://contadormx.com/informe-cuatrimestral-del-sisub-ante-el-infonavit/
- https://www.contadigital.mx/posts/que-es-repse-icsoe-y-sisub
- https://idconline.mx/seguridad-social/2021/09/13/detalles-del-imss-sobre-el-icsoe
- https://idconline.mx/seguridad-social/2025/12/18/repse-una-deuda-pendiente-en-la-formalizacion-empresarial
- https://idconline.mx/seguridad-social/2025/01/17/fecha-limite-para-presentar-icsoe-y-sisub-tercer-cuatrimestre-2024
- https://idconline.mx/laboral/2026/06/10/adios-trabas-del-repse-stps-facilita-la-renovacion-y-registro
- https://idconline.mx/laboral/2026/07/23/actualizacion-en-portal-repse-que-cambia-para-ti
- https://siemprealdia.co/mexico/derecho-laboral/simplificacion-del-repse-stps/
- https://www.tiempo.com.mx/economia/cancelo-stps-51-mil-inscripciones-del-repse-por-incumplimientos-septiembre-2026/
- https://www.eulen.com/mx/wp-content/uploads/sites/8/2026/02/01-Empleabilidad-en-Mexico-rumbo-a-2026-cautela-y-transformacion-laboral.pdf
- https://capacitaciondepersonal.com.mx/repse-guia-completa-registro-obligaciones-empresas-mexicanas/
- https://imcp.org.mx/wp-content/uploads/2025/07/NOTICIAS-SEGURIDAD-SOCIAL-2025-03.pdf
- https://elconta.mx/fiscalizacion-imss-2026-paradigma-control-digital/
- https://amcpdf.org.mx/fiscalizacion-del-imss-en-la-era-repse/
- https://elconta.mx/archivos-csv-sisub-infonavit/
- https://www.integraconsorcio.com.mx/public/archivos/65280f9fdcfcd.pdf
- https://runahr.com/mx/recursos/aspectos-legales/que-es-icsoe/
- https://www.elcontribuyente.mx/2023/03/evita-multas-por-incumplimiento-de-proveedores-repse-con-xternall-y-automatiza-su-revision/
- https://bdomexico.com/getattachment/e678916d-f204-4c21-8b41-7498da73ce74/BDO-Brochure-REPSE_v1.pdf
- https://axa.mx/documents/51602/20700179/DOCUMENTO%20REPSE.pdf
- https://blog.alegra.com/mexico/que-es-el-repse-guia-para-empresas/
- https://blog.alegra.com/mexico/repse-empresas-servicios/
- https://www.cofide.mx/blog/icsoe-sisub-que-son-quien-presenta
- https://www.contadoresmexico.org.mx/Curso/Repse-y-sus-informativas-en-el-ICSOE-y-Sisub
- https://www.contadoresmexico.org.mx/Curso/Taller-Repse-y-sus-informativas-en-el-ICSOE-y-Sisub
