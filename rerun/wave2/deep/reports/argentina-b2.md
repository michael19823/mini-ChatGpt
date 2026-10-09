# Argentina B2: an INAES compliance desk for small mutuales and co-operatives

## Re-assessment (owner's criteria)

**Verdict: maybe. New score: 6/10. Old score: 4/10.**

### The case
Lending mutuales and credit co-operatives carry two stacks of duties. INAES handles one stack through free web forms: the monthly lending return, the member roll and the new AML module. The UIF handles the other stack, and no state portal supports it: a yearly risk self-assessment, a yearly external review, an AML manual, member files, transaction monitoring and a training register (https://www.consejo.org.ar/storage/attachments/Resoluci%C3%B3n%20UIF%2099-2023%20-%20Asoc%20mutuales%20-5PZL7x2v5w.pdf). The INAES monthly form is manual, field by field, with no file import (https://contadoresenred.com/wp-content/uploads/2026/06/Instructivo.pdf). One product could prepare the INAES data and keep the UIF records, and sell to accountants who serve several mutuales. The market is small, about 2,000 entities (unverified). One young local AML tool, CONLAFT, already targets it. So this is a viable small business, not a large one.

### Room for improvement over the portal or current practice
- **The monthly form is manual entry only.**
  - Each annex field starts at "0" and is typed in by hand. The 20 largest members are added one row at a time with "Agregar fila". https://contadoresenred.com/wp-content/uploads/2026/06/Instructivo.pdf
  - The consistency check runs only after all annexes are typed in ("Validar Consistencia"). Errors then show in red and must be fixed on screen. https://contadoresenred.com/wp-content/uploads/2026/06/Instructivo.pdf
  - The supervisory-board members must be loaded on each filing. https://contadoresenred.com/wp-content/uploads/2026/06/Instructivo.pdf
  - The user guide shows no import button (checked in the guide's text; the live system was not seen).
  - The data comes from the loan ledger and cash records. It covers cash and investments, savings and loans, technical ratios, the loan book by status, and bad-debt reserves (Annexes I-V, VII). https://contadoresenred.com/wp-content/uploads/2026/06/Instructivo.pdf A tool can compute these figures and check them before anyone types them in.
- **Evidence of portal pain.**
  - INAES itself says the old spreadsheet flow "generaba reiterados inconvenientes técnicos" with operating systems and spreadsheet software. https://www.argentina.gob.ar/normativa/nacional/norma-427021/texto
  - Overdue periods must be re-entered in the new system. https://www.argentina.gob.ar/normativa/nacional/norma-427021/texto
  - Accountant sites publish step-by-step guides. https://contadoresenred.com/inaes-regimen-informativo-del-servicio-de-ayuda-economica-mutual-transmision-web-instructivo/
  - Res 1687/2026 lists loan-brokering mutuales that had not filed their quarterly data up to the end of 2025. They got 30 days to file, or their rules lapse. https://siap.blogdelcontador.com.ar/novedades/inaes-30-dias-mutuales-presentar-informacion-adeudada-prestamos/ The number of entities on the list was not found (unverified).
  - Res 565/2026 withdrew the licence of mutuales that had missed filings from 2017 to 2024. https://www.boletinoficial.gob.ar/detalleAviso/primera/339254/20260310
- **Record-keeping that no portal does (UIF Res 99/2023):**
  - a written risk self-assessment and its method, updated every year and sent to the UIF and INAES by 30 April. Lenders that use only their own funds or payroll deduction may file every two years.
  - a yearly external independent review, reported to the UIF within 120 days of the self-assessment deadline;
  - an AML manual, reviewed every year;
  - a yearly training plan and a record of the training given;
  - ongoing customer due diligence and up-to-date member files (legajos);
  - risk-based alerts and monitoring;
  - records kept for 10 years.
  - All of the above: https://www.consejo.org.ar/storage/attachments/Resoluci%C3%B3n%20UIF%2099-2023%20-%20Asoc%20mutuales%20-5PZL7x2v5w.pdf
  - The new INAES AML module (Res 1567/2026) then asks for proof of parts of this: the compliance officers, the manual and its board minute, PEP statements and loan totals. The first filing is due 1 Dec 2026, then every year by 20 January. https://www.consejosalta.org.ar/wp-content/uploads/INAES-1567.pdf
- **Many entities and many deadlines.** Each entity has 12 monthly returns, a quarterly or yearly roll, the yearly AML filing, the UIF self-assessment by 30 April, the external review and assembly filings. An accountant with 10 clients tracks more than 200 deadlines a year. This is an estimate from the duty list above.

### Competitor reality check
- **INAES portals.** They are free, but they only receive data. They do not compute, store history across entities, track deadlines or keep UIF records (see above).
- **CONLAFT S.R.L.** This is the closest local product.
  - It is based in Rafaela, Santa Fe (phone area code 3492), was founded on 20/05/2024 and has 8 staff.
  - It sells AML software for mutuales, co-operatives and accountants, covering the risk matrix, KYC, member files, monitoring and reports.
  - It also writes self-assessment reports and manuals, and runs training.
  - It reports 5 deployed systems.
  - Source for all of the above: https://www.cancilleria.gob.ar/userfiles/ut/conlaft_espanol.pdf ; https://www.conlaft.com/
  - Its price is not public (unverified).
  - It does not claim INAES monthly-return preparation or roll export (unverified; the website renders no text to a fetch).
  - With 5 deployments, it covers only a tiny share of about 2,000 obligated entities. It shows that the market exists and will buy. It is not a killer.
- **Grupo Neo Sistemas (MutualOnline).** This is a mutual ERP for members and member-run stores. No INAES export and no UIF features were found. No price was found. https://apps.apple.com/ca/app/mutualonline/id6480014182
- **Gestion Socios.** A club and association membership tool, with no INAES or UIF features. https://www.capterra.in/software/1238063/Gestion-Socios
- **Accountants and consultants.** They do the work by hand today and are the natural buyers, not competitors. Searches found no packaged INAES data-prep tool and no published price for outsourced AML compliance (unverified).

### Price per customer
- **Today's cost anchors.**
  - Accountant fee schedules are indexed to inflation. Salta's minimum-fee module is ARS 18,500 from 1 Oct 2026. https://www.consejosalta.org.ar/2026/06/actualizacion-del-valor-modulo-para-honorarios-minimos-profesionales/
  - Santiago del Estero's co-operative and mutual graduates charge in MATES units of ARS 10,870 (Dec 2025). Founding a mutual costs 20 units. https://cpcese.org.ar/documentos/afiche%20LIC%20COOP%20HONORARIOS%20MINIMOS%20ETICOS%20PROFESIONALES%2001-12-25.pdf
  - The yearly self-assessment, external review and manual are paid professional work that every obligated entity must buy. Their price was not found (unverified).
  - The penalty for missing filings is loss of the lending licence. https://www.boletinoficial.gob.ar/detalleAviso/primera/339254/20260310
- **Proposed prices (unverified, not tested):**
  - Per entity: about USD 40-80 a month, in pesos indexed to the fee module (about 3-6 Salta modules). Small lenders that file the AML items every two years go on the lower tier.
  - Per accountant: about USD 150-300 a month for up to 10-15 entities, with an add-on per extra entity.
  - Optional done-for-you services: the self-assessment report and manual set-up, about USD 300-800 per entity per year (unverified). CONLAFT sells the same type of service, which shows demand. https://www.cancilleria.gob.ar/userfiles/ut/conlaft_espanol.pdf

### Revenue estimate (year 3)
- **Buyers.**
  - About 1,400-1,750 lending mutuales. This extrapolates Santa Fe's 2020 ratio (300 lending out of 850 mutuales) to a national total of 4,000-5,000 mutuales (unverified). https://www.ellitoral.com/economia/mutuales-ayuda-economica-24_0_ama419IQ3z.amp.html
  - Plus credit and loan-brokering co-operatives (count unverified).
  - Working figure: about 2,000 UIF-obligated entities.
- **Base case.** 2,000 entities x 8% share = 160 entities. At an average of USD 55 a month (mixed direct and accountant plans), that is 160 x 55 x 12 = about **USD 106,000 a year**.
  - Add about 40 done-for-you AML packages at USD 500 each = USD 20,000.
  - Total about **USD 125,000 a year**.
- **Low case.** 2,000 x 4% = 80 entities x USD 40 x 12 = **USD 38,000 a year**.
- **High case.** 2,000 x 15% = 300 entities x USD 70 x 12 = USD 252,000, plus USD 50,000 in services = **about USD 300,000 a year**.
- **Optional add-on.** Non-lending entities file only the yearly roll and assembly documents, and they number in the thousands. A low-price roll and deadline tier at USD 5 a month could add a little (unverified, low priority).

### Ease of implementation and sale
- **Build: medium.**
  - A deadline engine, a member register, PEP and risk fields, roll export and annex calculation from an Excel loan ledger are standard work.
  - Templates for the self-assessment, manual and training register are document work.
  - With no import path, the monthly output has to be a field-by-field copy sheet, or a browser extension that fills the form. The extension is brittle (unverified on terms of use).
  - Rule churn is constant: Res 1279, 1567, 1038 and 1687 all came in 2026.
- **Sale: medium.**
  - Buyers are reachable through the Consejos Profesionales, the confederations and provincial authorities. The 1 Dec 2026 AML deadline and the 30 April UIF deadline are clear moments to sell.
  - Volunteer boards and peso inflation slow sales. CONLAFT reaching only 5 deployments in about a year suggests a slow sales cycle (inference). https://www.cancilleria.gob.ar/userfiles/ut/conlaft_espanol.pdf
- **Onboarding: easy to medium.** Import the member list and the loan ledger from Excel, then pick the regimes that apply.

### Remaining risks
1. **CONLAFT or an ERP vendor adds the INAES side.** It could then cover the whole job well. Its price is unknown.
2. **Small, unverified buyer count.** No official count of lending mutuales was found. The Mercado figure of "32,000 entities" comes from an article from about 2006, not a current one. https://mercado.com.ar/revista/numero-1057/el-inaes-busca-corregir-un-sistema-anacronico-y-poco-fiable/
3. **INAES automates more.** It promises "migración de datos y carga automática" in the AML module. https://www.consejosalta.org.ar/wp-content/uploads/INAES-1567.pdf
4. **Peso pricing and inflation.** Prices must be indexed.
5. **Liability.** Every filing is a sworn statement. The tool must leave signing with the entity and its accountant.
6. **Monthly-return automation depends on the form's design.** INAES can change the form at any time.

### Facts corrected from the first pass
- The Res 1279/2026 date is confirmed: signed 23/06/2026, published 25/06/2026. https://www.argentina.gob.ar/normativa/nacional/norma-427021/texto
- The "about 32,000 registered entities" figure is from about 2006, not current. https://mercado.com.ar/revista/numero-1057/el-inaes-busca-corregir-un-sistema-anacronico-y-poco-fiable/
- The Santa Fe figure (850 mutuales, 300 of them lending) is dated 28 May 2020. https://www.ellitoral.com/economia/mutuales-ayuda-economica-24_0_ama419IQ3z.amp.html
- The first pass said no competitor existed. A local AML product for mutuales does exist: CONLAFT. https://www.cancilleria.gob.ar/userfiles/ut/conlaft_espanol.pdf

### New sources
- https://contadoresenred.com/wp-content/uploads/2026/06/Instructivo.pdf
- https://www.argentina.gob.ar/normativa/nacional/norma-427021/texto
- https://www.consejo.org.ar/storage/attachments/Resoluci%C3%B3n%20UIF%2099-2023%20-%20Asoc%20mutuales%20-5PZL7x2v5w.pdf
- https://www.cancilleria.gob.ar/userfiles/ut/conlaft_espanol.pdf
- https://www.conlaft.com/
- https://siap.blogdelcontador.com.ar/novedades/inaes-30-dias-mutuales-presentar-informacion-adeudada-prestamos/
- https://www.consejosalta.org.ar/2026/06/actualizacion-del-valor-modulo-para-honorarios-minimos-profesionales/
- https://cpcese.org.ar/documentos/afiche%20LIC%20COOP%20HONORARIOS%20MINIMOS%20ETICOS%20PROFESIONALES%2001-12-25.pdf
- https://www.ellitoral.com/economia/mutuales-ayuda-economica-24_0_ama419IQ3z.amp.html
- https://www.capterra.in/software/1238063/Gestion-Socios

## Summary

**Verdict: maybe. Score: 4/10.**

INAES, the national regulator for co-operatives and mutuales, has stacked several new recurring filings onto the same entities during 2025-2026:
- a monthly lending (ayuda económica) return, moved to a new manual web form from the July 2026 period (Res 1279/2026);
- a member and authorities roll, filed yearly, or quarterly for entities that report to the UIF, Argentina's financial intelligence unit (Res 756/2025);
- an anti-money-laundering (AML) declaration, first due around 1 Dec 2026 and then every year by 20 January (Res 1567/2026);
- identification of members for international tax-data exchange (CRS) (Res 1038/2026);
- for loan-brokering entities, an annual technical opinion on their IT systems (Res 3036/2024).

INAES enforces filing. It suspends entities and withdraws their licence to operate (Res 878/879/2024, Res 565/2026).

The case is weak on money and reach, though. Every filing channel is a free INAES web system. INAES says its new modules offer "migration of data and automatic loading", which shrinks the tool gap. The core buyer group is probably about 1,000-2,000 lending mutuales (unverified). These entities run on volunteer boards and already rely on their accountant.

A narrow product could work: a compliance calendar plus a data-preparation tool, sold to accountants who serve several mutuales. It would be a small side business, not a scalable one.

## Duty

### Monthly lending return (Res 1279/2026)
- **Who and what.** Mutuales under the monthly regime of Res 1418/03 art. 17(b) (text ordered by Res 3034/2024) must report on arts. 5, 6, 9 and 10. That means Annexes I-V and VII: loans to members, the bad-debt reserve, the guarantee fund and the savings-to-equity limit. The report goes to INAES and to the provincial authority within 20 business days after month end. https://www.argentina.gob.ar/normativa/nacional/norma-427021/texto ; https://abogados.com.ar/se-implementa-un-sistema-web-para-informar-ayuda-economica-mutual-facilitando-la-carga-de-datos-y-reemplazando-metodos-anteriores/39481
- **Dates.** The resolution was signed on 23/06/2026 and published in the Boletín Oficial No. 35937 on 25/06/2026. https://www.argentina.gob.ar/normativa/nacional/norma-427021/texto
- **Date conflict.** abogados.com.ar gives 25/09/2026 as the publication date. The official text says 25/06, so the September date looks like an error.
- **Start and arrears.** The new system applies from the July 2026 period. Overdue periods must also be filed through it. https://www.argentina.gob.ar/normativa/nacional/norma-427021/texto
- **Format.**
  - The system is a central web form. It allows partial or full entry and has validations and autocomplete.
  - It "completely replaces the flow of downloading and uploading external spreadsheet files". https://www.argentina.gob.ar/normativa/nacional/norma-427021/texto
  - Río Negro says the filing must be "digital and exclusive" through this system. https://rionegro.gov.ar/info/297/servicio-de-ayuda-economica-mutual-se-pone-en-marcha-el-nuevo-sistema-de-transmision-web
  - The system issues a PDF receipt. The authorities and three members of the supervisory board (Junta Fiscalizadora) must be loaded. https://tributum.news/res-1279-2026-inaes-mutuales-ayuda-economica-regimen-informativo-plataforma-web-presentacion-de-anexos/
  - No file import or API was found (unverified; the official user guide IF-2026-57548748 was not read).
- **Penalty.** The resolution itself sets none. https://www.argentina.gob.ar/normativa/nacional/norma-427021/texto
  - Non-filers under Res 1418/03 have their lending rules (reglamentos de ayuda económica) declared lapsed (caducidad). INAES publishes these lapses in the Boletín Oficial for suspended entities. https://www.boletinoficial.gob.ar/detalleAviso/primera/316954/1
  - Res 1687/2026 gave mutuales that broker loans (gestión de préstamos) 30 extra days to file the data owed under Res 1481/2009. Missing it means their rules lapse. This comes from a secondary source, and the annex was not seen. https://siap.blogdelcontador.com.ar/numero/1687/

### Member and authorities roll (Res 756/2025, extended by Res 2147/2025)
- **Who.** All co-operatives and mutuales, "without exception".
- **Frequency.** Yearly, within 10 calendar days after year end. UIF-obligated entities file quarterly, within 10 days of each quarter end, and add each member's risk level, politically exposed person (PEP) status and country of residence.
- **Changes in authorities** must be updated within 30 days.
- **Format.** The data is a sworn statement. A bulk-load guide (instructivo de carga masiva) exists, with migration and automatic-load modules. https://contadoresenred.com/cooperativas-y-mutuales-sistema-integrado-de-nomina-de-asociados-y-autoridades/
- **Deadline extension.** Res 2147/2025 extended the initial deadline. https://www.consejosalta.org.ar/wp-content/uploads/Res-2147-2025.-INAES.pdf

### AML compliance system (Res 1567/2026)
- **Dates.** Signed 31/07/2026, published 03/08/2026. In force 30 days after publication.
- **Who.** Co-operatives with a credit service, mutuales with a lending service, and co-operatives and mutuales that broker loans. These are the UIF-obligated entities under UIF Res 99/2023.
- **What, as a sworn statement:**
  - proof of UIF registration;
  - the main and deputy compliance officers, with the board minutes appointing them;
  - the AML manual and the board minute approving it;
  - the total gross amount of loans granted each year;
  - legal representatives and people authorised to sign;
  - for co-operatives, the 20 largest holders of share capital;
  - PEP sworn statements from every board and supervisory-board member, signed through TAD, the government's online filing platform.
- **Timing.** The initial filing is due within 90 calendar days of entry into force (about 1 Dec 2026). After that it is yearly, within 20 calendar days of year end, and must be updated whenever something changes.
- **Other effects.** It also carries the Res 806/2018 regime. It repeals Res 5588/2012 and 1863/2019. INAES says the modules "allow data migration and automatic loading".
- **Source** for all of the above: the full resolution text, reproduced at https://www.consejosalta.org.ar/wp-content/uploads/INAES-1567.pdf
- **Quarterly report.** A secondary source describes a quarterly statistical report of suspicious transactions (ROS). https://contadoresenred.com/nuevo-sistema-de-cumplimiento-antilavado-para-cooperativas-y-mutuales/

### Other duties
- **CRS identification (Res 1038/2026).** Dated 20/05/2026 and published 26/05/2026. Mutuales that lend members' savings must identify members and beneficial owners and collect their tax residence and foreign tax ID. The reporting format to ARCA, the federal tax agency, is still to be set by regulation (unverified). https://siap.blogdelcontador.com.ar/novedades/arca-e-inaes-avanzan-con-el-intercambio-automatico-de-informacion-financiera-en-mutuales/ ; https://tributum.news/res-1038-2026-inaes-mutuales-ayuda-economica-asociados-intercambio-automatico-informacion-financiera-ocde-fatca-beneficiarios-finales/
- **Loan brokering (Res 3036/2024).** Entities must keep a file for each member and each year obtain a technical opinion from a licensed IT professional on system security and compliance. The opinion is due within 30 days of year end. https://www.adeba.com.ar/?p=39934
- **Assembly documents and accounts** are due every year under Law 20.321 arts. 18-19 and Res 3108/2018. https://www.boletinoficial.gob.ar/detalleAviso/primera/339254/20260310

### Enforcement evidence
- **Res 878/879/2024 (BO 03/04/2024)** opened proceedings (sumarios) against co-operatives and mutuales that had not filed assembly documents or the national data update since 2017. Entities had 10 business days to defend themselves. Res 878 adds automatic suspension after 30 business days. https://blogdelcontador.com.ar/sumario-a-cooperativas-y-mutuales-por-incumplimientos
- **Res 565/2026 (signed 05/03/2026)** withdrew the licence to operate (Law 20.321 art. 35(d)) of the mutuales in its Annex I for missing filings in 2017-2024. https://www.boletinoficial.gob.ar/detalleAviso/primera/339254/20260310
- **Res 2225/2025** opened further proceedings for missing data updates and assembly filings (secondary source). https://blogdelcontador.com.ar/news-43470-sumario-a-cooperativas-y-mutuales-por-incumplimientos
- **In 2019** INAES suspended 20,612 co-operatives and 1,847 mutuales. https://www.diariodecuyo.com.ar/noticias/hay-1-700-puestos-de-trabajo-en-juego-por-la-medida-de-suspender-a-las-cooperativas-330303.html
- **UIF fines.** The UIF fine unit (módulo) has been ARS 54,140 since June 2025 (Res UIF 95/2025). https://blogdelcontador.com.ar/news-45952-prevencion-del-lavado-la-uif-actualiza-el-valor-del-modulo-sancionatorio-a-54140
  - The number of units per breach was not confirmed (unverified).
  - No UIF fine against a specific mutual was found.

**Pattern.** Enforcement is real but mostly administrative: suspension, withdrawal of the licence, and lapse of lending rules. Cash fines are rare. For a lending mutual, losing the right to lend is existential, so the incentive to comply is strong.

## Buyers

- **No current official count was found.** INAES has a per-entity search and a validity certificate, but no national total or open dataset was found. https://www.argentina.gob.ar/certificado-de-vigencia-de-matricula
- **Mutuales.**
  - The Confederación Argentina de Mutualidades (CAM) cited about 4,000 mutuales with about 5 million members (2017 study). https://repositorio.21.edu.ar/handle/ues21/17679
  - Another CAM seminar figure is about 5,000. https://www.aim-mutual.org/wp-content/uploads/2018/03/PRAIMSeminario22Marzo_ES-1.pdf
  - Mendoza's catalogue cited about 4,200 (undated, and the page no longer shows it).
- **Co-operatives and mutuales together.** About 32,000 registered entities (undated, before the purge). https://mercado.com.ar/revista/numero-1057/el-inaes-busca-corregir-un-sistema-anacronico-y-poco-fiable/
- **Lending mutuales.**
  - In 2020 Santa Fe had 850 mutuales, 300 of them lending, spread over 144 localities. That is about 35%. https://www.santafe.gob.ar/noticias/noticia/267621/
  - Applying 35% to 4,000-5,000 mutuales gives about 1,400-1,750 lending mutuales nationally (unverified extrapolation). Some are suspended.
  - Credit co-operatives and loan-brokering entities add to the UIF-obligated pool (count unverified).
- **Segments:**
  1. Lending mutuales: monthly return, quarterly roll, annual AML filing, CRS. This is the core segment.
  2. Credit and loan-brokering co-operatives: AML filing, quarterly roll, IT opinion.
  3. Every other co-operative and mutual: annual roll, assembly documents. This is a large group but has a low-value need.
- **How they comply today.**
  - Staff or volunteer secretaries enter data into the INAES web forms.
  - External accountants and auditors sign reports. The Consejo Profesional publishes a model special accountant's report for the loan service. https://www.consejo.org.ar/storage/attachments/VII.C_Informe%20Especial%20de%20Contador%20Publi-xfmvLO1mA0.docx
  - Provincial bodies, such as Río Negro's Subsecretaría, give free help. https://rionegro.gov.ar/info/297/servicio-de-ayuda-economica-mutual-se-pone-en-marcha-el-nuevo-sistema-de-transmision-web
  - Larger mutuales use management systems (ERPs) such as Grupo Neo Sistemas. https://apps.apple.com/ca/app/mutualonline/id6480014182

## Competition

- **Free state tools (the main competitor).**
  - Every filing above goes through free INAES web systems: the lending-return form, the roll system with bulk load, and the AML Module II.
  - INAES says these "reduce significantly the burden ... and manual transmission" and allow automatic loading. https://www.consejosalta.org.ar/wp-content/uploads/INAES-1567.pdf
  - Free state tools cover the filing act itself. They do not cover data preparation, the deadline calendar, or keeping member files and the AML manual.
- **Mutual management ERPs.**
  - Grupo Neo Sistemas (NeoConsultores S.A.) sells an integral system for mutuales with the MutualOnline app. https://apps.apple.com/ca/app/mutualonline/id6480014182
  - No INAES export feature was confirmed, and prices were not found (unverified).
  - Searches for "software para mutuales" found no other named vendors.
- **Accountants and consultants.**
  - Accounting firms already sign the special reports and audits.
  - The Consejo Profesional (CPCECABA) runs an advisory desk for co-operatives and mutuales. https://consejo.org.ar/herramientas-profesionales/asesoramiento/asesoramiento-presencial/area-cooperativas-y-mutuales
  - Law firms such as Marval cover the UIF framework. https://www.marval.com/publicacion/la-uif-modifica-marco-regulatorio-para-las-cooperativas-y-asociaciones-mutuales-15537
  - No prices were found (unverified).
- **Content and template sources.**
  - Contadores en Red, +blogdelcontador (paid) and Tributum (paid) publish summaries and guides.
  - No packaged AML-manual template pack aimed at mutuales was found (unverified).
- **International vendors.** None found for this niche.

## Willingness to pay

- **What buyers pay today.** No public price was found for INAES filing services, outsourced compliance work or mutual ERPs (unverified). Accountants usually bundle this work into monthly retainers (unverified).
- **Cost of not filing.**
  - Suspension or withdrawal of the licence to operate. https://www.boletinoficial.gob.ar/detalleAviso/primera/339254/20260310
  - Lapse of the lending rules. https://www.boletinoficial.gob.ar/detalleAviso/primera/316954/1
  - UIF fines measured in ARS 54,140 units. https://blogdelcontador.com.ar/news-45952-prevencion-del-lavado-la-uif-actualiza-el-valor-del-modulo-sancionatorio-a-54140
  - For a lending mutual, losing the lending service ends its main activity.
- **Staff time.**
  - 12 monthly returns, plus 4 quarterly rolls, plus 1 annual AML filing with PEP statements, plus CRS, plus the IT opinion for brokers.
  - That is about 20 filing events a year, each needing data pulled from the loan ledger and member register.
- **Plausible price** (unverified, not tested): ARS 25,000-60,000 a month per entity (about USD 20-50), or a per-accountant licence covering 5-20 entities.
- **Caveat.** Many boards are volunteers and margins are thin in an inflationary economy. The real payer is more likely the accountant, who saves hours across several clients.

## Channels

- **Accountant networks:**
  - the Consejos Profesionales de Ciencias Económicas (CPCECABA area for co-operatives and mutuales; Consejo Salta, which republishes every INAES rule), https://consejo.org.ar/herramientas-profesionales/asesoramiento/asesoramiento-presencial/area-cooperativas-y-mutuales ; https://www.consejosalta.org.ar/wp-content/uploads/Res-2147-2025.-INAES.pdf
  - content sites read by accountants (Contadores en Red, +blogdelcontador). https://contadoresenred.com/nuevo-sistema-de-cumplimiento-antilavado-para-cooperativas-y-mutuales/
- **Sector bodies:**
  - CAM, the confederation with federations under it, https://repositorio.21.edu.ar/handle/ues21/17679
  - the Confederación Nacional de Mutualidades, which appeared before a Chamber of Deputies committee in April 2026, https://parlamentaria.hcdn.gob.ar/comisiones/reuniones/1164/archivo/B5MHAYT29SY4X3ET.pdf
  - sector federations of mutuales, for example security-forces mutuales (unverified detail).
- **Provincial authorities**, which receive the monthly return and support the switch (Río Negro Subsecretaría de Cooperativas y Mutuales). https://rionegro.gov.ar/info/297/servicio-de-ayuda-economica-mutual-se-pone-en-marcha-el-nuevo-sistema-de-transmision-web
- **Public lists.** The Boletín Oficial publishes lists of non-filing entities. These are a lead source of entities in trouble. https://www.boletinoficial.gob.ar/detalleAviso/primera/316908/1
- **IT professionals** who sign the Res 3036/2024 IT opinion could act as partners. https://www.adeba.com.ar/?p=39934

## Risks

1. **The regulator's own tooling.** INAES is actively unifying every regime into one system with automatic loading. https://www.consejosalta.org.ar/wp-content/uploads/INAES-1567.pdf Each upgrade removes some of the gap. This is the biggest risk, but not a killer, because data preparation and deadline tracking stay with the entity.
2. **No import path for the monthly return.** Entry is manual on the web. Automation would need browser scripting, which is brittle and may breach the terms of use (unverified).
3. **Small, poor market.** Only about 1,400-1,750 lending mutuales (unverified). Volunteer boards. Peso inflation.
4. **ERP vendors add an INAES export.** Neo Sistemas and similar vendors could close the gap for mid-size entities.
5. **Liability.** The filings are sworn statements, and AML failures carry UIF exposure. A tool must leave signing and responsibility with the entity and its accountant.
6. **Rule churn.** Five relevant resolutions in 18 months. That brings both opportunity and constant rework. Repeal is unlikely given Argentina's FATF commitments. https://www.consejosalta.org.ar/wp-content/uploads/INAES-1567.pdf
7. **Language and licensing.** Spanish only. No licence is needed for software. Running an outsourced compliance-officer service would need checking (unverified).

## First product

**Idea.** "Mutual al día": a compliance calendar and data-prep workspace for accountants who serve mutuales and co-operatives.

**v1 features:**
- A deadline engine per entity:
  - monthly return: 20 business days, with Argentine holidays;
  - roll: 10 days after the quarter or year;
  - AML filing: initial about 1 Dec 2026, then by 20 Jan;
  - IT opinion: 30 days after year end;
  - assembly documents.
- Email or WhatsApp reminders and a status board covering all clients.
- A member-register keeper that exports the INAES roll in the bulk-load format. It holds the PEP, risk-level and tax-residence (CRS) fields, which also covers Res 1038.
- A loan-ledger import (Excel) that computes the Annex I-V/VII figures with the same validations INAES applies. The output is a field-by-field "copy sheet" in the same order as the web form.
- An AML pack: templates for the AML manual, the compliance-officer appointment minute and the PEP sworn statement, with tracking of who has signed in TAD.

**First 30 days:**
1. Get the official user guides (IF-2026-57548748 for Res 1279; the Res 1567 manual IF-2026-67633405; the Res 756 bulk-load guide) and map every field.
2. Interview 10 accountants who serve mutuales, sourced through Consejo and federation contacts. Confirm the prices they charge and the hours each filing takes.
3. Build the calendar, the roll exporter and the annex calculator as a simple web app.
4. Pilot with 2-3 accountants before the 1 Dec 2026 AML deadline and the 20 Jan 2027 annual cycle.
5. Offer a done-for-you entry service as an early revenue bridge.

## Open questions

- The exact number of active lending mutuales and credit co-operatives. A request to INAES or CAM could answer this.
- Whether the monthly return web form accepts any file upload. The official user guide was not read.
- The accepted formats for the roll bulk load and for Module II migration.
- Accountant fees for INAES work, and ERP prices.
- The size of UIF fines (units per breach) and any real sanction cases against mutuales.
- Whether Neo Sistemas or other ERPs already generate INAES data.
- When ARCA will issue the CRS reporting rules for mutuales.

## Sources

- https://www.argentina.gob.ar/normativa/nacional/norma-427021/texto
- https://abogados.com.ar/se-implementa-un-sistema-web-para-informar-ayuda-economica-mutual-facilitando-la-carga-de-datos-y-reemplazando-metodos-anteriores/39481
- https://tributum.news/res-1279-2026-inaes-mutuales-ayuda-economica-regimen-informativo-plataforma-web-presentacion-de-anexos/
- https://rionegro.gov.ar/info/297/servicio-de-ayuda-economica-mutual-se-pone-en-marcha-el-nuevo-sistema-de-transmision-web
- https://contadoresenred.com/inaes-regimen-informativo-del-servicio-de-ayuda-economica-mutual-transmision-web-instructivo/
- https://www.consejosalta.org.ar/wp-content/uploads/INAES-1567.pdf
- https://contadoresenred.com/nuevo-sistema-de-cumplimiento-antilavado-para-cooperativas-y-mutuales/
- https://abogados.com.ar/el-inaes-unifica-y-digitaliza-el-regimen-informativo-para-cooperativas-y-mutuales/39763
- https://contadoresenred.com/cooperativas-y-mutuales-sistema-integrado-de-nomina-de-asociados-y-autoridades/
- https://www.consejosalta.org.ar/wp-content/uploads/Res-2147-2025.-INAES.pdf
- https://siap.blogdelcontador.com.ar/novedades/arca-e-inaes-avanzan-con-el-intercambio-automatico-de-informacion-financiera-en-mutuales/
- https://tributum.news/res-1038-2026-inaes-mutuales-ayuda-economica-asociados-intercambio-automatico-informacion-financiera-ocde-fatca-beneficiarios-finales/
- https://www.adeba.com.ar/?p=39934
- https://siap.blogdelcontador.com.ar/numero/1687/
- https://www.boletinoficial.gob.ar/detalleAviso/primera/339254/20260310
- https://www.boletinoficial.gob.ar/detalleAviso/primera/316954/1
- https://www.boletinoficial.gob.ar/detalleAviso/primera/316908/1
- https://blogdelcontador.com.ar/sumario-a-cooperativas-y-mutuales-por-incumplimientos
- https://blogdelcontador.com.ar/news-43470-sumario-a-cooperativas-y-mutuales-por-incumplimientos
- https://blogdelcontador.com.ar/news-45952-prevencion-del-lavado-la-uif-actualiza-el-valor-del-modulo-sancionatorio-a-54140
- https://www.marval.com/publicacion/la-uif-modifica-marco-regulatorio-para-las-cooperativas-y-asociaciones-mutuales-15537
- https://www.diariodecuyo.com.ar/noticias/hay-1-700-puestos-de-trabajo-en-juego-por-la-medida-de-suspender-a-las-cooperativas-330303.html
- https://repositorio.21.edu.ar/handle/ues21/17679
- https://www.aim-mutual.org/wp-content/uploads/2018/03/PRAIMSeminario22Marzo_ES-1.pdf
- https://mercado.com.ar/revista/numero-1057/el-inaes-busca-corregir-un-sistema-anacronico-y-poco-fiable/
- https://www.santafe.gob.ar/noticias/noticia/267621/
- https://www.argentina.gob.ar/certificado-de-vigencia-de-matricula
- https://apps.apple.com/ca/app/mutualonline/id6480014182
- https://consejo.org.ar/herramientas-profesionales/asesoramiento/asesoramiento-presencial/area-cooperativas-y-mutuales
- https://www.consejo.org.ar/storage/attachments/VII.C_Informe%20Especial%20de%20Contador%20Publi-xfmvLO1mA0.docx
- https://parlamentaria.hcdn.gob.ar/comisiones/reuniones/1164/archivo/B5MHAYT29SY4X3ET.pdf
