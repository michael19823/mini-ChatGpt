# Argentina B1: UIF compliance kit for small real estate brokers

## Re-assessment (owner's criteria)

**Verdict: maybe. New score: 6/10 (old score: 5/10).**

**The case.** The UIF portal only takes the finished monthly and annual reports. Everything a broker must do before that is left to Word templates, Excel and paper: the client file, the risk rating, PEP checks, alerts, the manual, training records and the two-yearly self-assessment ([Res. 43/2024](https://www.argentina.gob.ar/normativa/nacional/397424/texto); [UIF RSM guide](https://www.argentina.gob.ar/uif/instructivos/rsm-compra-yo-venta-de-bienes-inmuebles)). The only local AML platform found, CONLAFT, is a young firm with 5 systems deployed and no broker focus ([CONLAFT profile](https://www.cancilleria.gob.ar/userfiles/ut/conlaft_espanol.pdf)). Real estate CRMs show no AML module ([DevelopArgentina](https://developargentina.com/blog/software-inmobiliaria-argentina-2026)). So the gap is real and nobody local fills it well. What holds the score at 6 is willingness to pay: enforcement is thin, and a deregulation draft could change who is obliged. A cheap add-on of about USD 25-35 a month, sold through colegios, CRM vendors and accountants, could plausibly reach USD 100,000-150,000 a year by year 3 (my estimate, unverified).

**Room for improvement over the portal or current practice**
- **The portal does filing only.** SRO+/SROMasivo takes the monthly report as a bulk template. It checks CUIT digits and that shares add up to 100% ([UIF RSM guide](https://www.argentina.gob.ar/uif/instructivos/rsm-compra-yo-venta-de-bienes-inmuebles)). It does not keep the client file, rate risk, screen PEPs, log alerts or track the 15/150-day suspicious-report clock. All of these are duties under Res. 43/2024 ([Res. 43/2024](https://www.argentina.gob.ar/normativa/nacional/397424/texto)).
- **Data preparation.** Each sale needs about 10 fields per buyer and seller, plus payment method and cadastral data, in the UIF's fixed template ([UIF RSM guide](https://www.argentina.gob.ar/uif/instructivos/rsm-compra-yo-venta-de-bienes-inmuebles)). Software that fills this from the client file and checks it before upload saves re-keying and rejected files.
- **Lease threshold tracking.** Leases count only once a client reaches 300 SMVM a year across one or more operations ([Res. 43/2024](https://www.argentina.gob.ar/normativa/nacional/397424/texto)). The SMVM changes several times a year ([Canal 26](https://www.canal26.com/economia/2026/09/02/asi-quedo-el-aumento-del-salario-minimo-vital-y-movil-cuanto-se-cobrara-entre-septiembre-de-2026-y-abril-de-2027/)). A running total per client is hard in Excel and easy in software.
- **Records the portal does not keep.** Client files must be kept for 10 years and refreshed every 1, 3 or 5 years by risk level. The manual must be reviewed every 2 years, and training must be logged every year ([Res. 43/2024](https://www.argentina.gob.ar/normativa/nacional/397424/texto)).
- **Current practice is static templates.** The Santa Fe brokers' colegio published a model UIF manual for members, written under the old rule ([CCI Santa Fe model manual](https://ccisantafe.org.ar/wp-content/uploads/2020/06/01.-Manual-Operativo-UIF-Colegio-de-Corredores-Inmobiliarios-de-la-Prov.-Sta.-Fe-1%C2%AA-Circ..pdf); the link now returns 404, so its content is unverified). Reporte Inmobiliario gave subscribers editable Word templates for the manual, client file forms and PEP and funds-origin declarations ([Reporte Inmobiliario](https://www.reporteinmobiliario.com/article2940-norma-uif-obligatoria-para-inmobiliarios-como-evitar-sanciones.html)). Templates show demand, but they do not track deadlines, refreshes or evidence.
- **Portal pain in the same UIF system.** FACPCE told the UIF on 31 Mar 2026 that the accountants' reporting form "was not available in time" on the platform, and asked for deadlines to be moved ([FACPCE note to UIF](https://www.facpce.org.ar/wp-content/uploads/2026/04/Nota-FACPCE-a-UIF-31-03-26.pdf)). The notaries' colegio runs an adviser desk that answers questions about filing the monthly report ([Colegio de Escribanos FAQ](https://www.colegio-escribanos.org.ar/2025/07/24/uif-consulta-frecuente-sobre-el-rsm-y-el-ros/)). No broker-specific complaints were found (unverified).
- **Multi-client work.** Accountants who act as external reviewer (REI) or internal auditor for several brokers need the same evidence pack from each one ([Res. 43/2024](https://www.argentina.gob.ar/normativa/nacional/397424/texto)). A shared reviewer view is a real feature to sell them.
- **The self-assessment.** The notaries' colegio gives its members a self-assessment app. It kept the app open for late filings after the 30 April 2026 deadline and has released a version 2.0 ([Colegio de Escribanos UIF news](https://www.colegio-escribanos.org.ar/category/noticias/uif/)). No broker colegio offers the same (searches found none; unverified).

**Competitor reality check**
- **CONLAFT S.R.L.** Founded 20 May 2024, with 8 staff and 5 systems deployed. It sells to mutuales, cooperatives, savings companies and accountants. It claims to cover the risk matrix, KYC, client file, monitoring and reports, and it also writes self-assessments and manuals ([CONLAFT profile](https://www.cancilleria.gob.ar/userfiles/ut/conlaft_espanol.pdf)). It does not mention brokers. Its website shows no features or prices ([conlaft.com](https://www.conlaft.com/)). Its own pitch says obliged firms use "manual spreadsheets or costly, incomplete systems" ([CONLAFT profile](https://www.cancilleria.gob.ar/userfiles/ut/conlaft_espanol.pdf)). It is a possible future rival, not a killer.
- **Real estate CRMs** (Tokko Broker, Xintel, InmoPC). No UIF module was found. Tokko costs USD 80-300 a month ([DevelopArgentina](https://developargentina.com/blog/software-inmobiliaria-argentina-2026); [ComparaSoftware](https://www.comparasoftware.com/tokko-broker)). They are a channel more than a threat.
- **Screening APIs** (e.g. Didit). They screen PEP and sanctions lists by API but do not run the broker's programme ([Didit](https://didit.me/blog/aml-screening-api-argentina-52282/)). A broker product could use one as a component.
- **Law firms and consultants** (e.g. ST Abogados). They write manuals and matrices and defend inspections, but publish no prices ([ST Abogados](https://stabogados.com.ar/civil/empresas/compliance-sujetos-obligados/)). They are one-off and costly for a sole broker (unverified).
- **Free templates** (FACPCE ITAER guide; property registry matrix). These were written for accountants and registries, not brokers ([FACPCE guide](https://www.facpce.org.ar/wp-content/uploads/2026/04/GUIA-PARA-ELABORAR-EL-INFORME-TECNICO-DE-AUTOEVALUACION-DE-RIESGOS-ITAER-002.pdf); [DNRPI matrix](https://www.dnrpi.jus.gob.ar/descargas/nueva_matriz.pdf)).
- **Conclusion.** No local product does the whole job for brokers at a known, fair price. This is an opening.

**Price per customer**
- **Benchmarks.** Brokers already pay USD 80-300 a month for a CRM ([DevelopArgentina](https://developargentina.com/blog/software-inmobiliaria-argentina-2026)). Getting a licence in 2026 costs about ARS 4.67 million: ARS 4 million to register, ARS 650,000 a year, and a ARS 15,000 bond ([El Cronista, 29 Jul 2026](https://www.cronista.com/economia-politica/desregulacion-inmobiliaria-el-proyecto-de-sturzenegger-abre-la-puerta-a-la-uberizacion-del-corretaje-y-reordena-ganadores/)). A fine for a non-reporting breach is 15 to 2,500 módulos, about ARS 0.8 million to ARS 135 million ([Infoleg](https://servicios.infoleg.gob.ar/infolegInternet/anexos/60000-64999/62977/texact.htm); [UIF resolutions](https://www.argentina.gob.ar/uif/normativa/resoluciones)).
- **Small agency or sole broker:** about USD 25-35 a month (USD 300-420 a year) for the client file, risk rating, lease tracker, monthly export, manual and training log (my estimate, unverified). That is about 10-15% of a typical CRM bill.
- **Self-assessment pack:** about USD 150-300 per two-year cycle, or included in the annual plan (unverified).
- **Accountant or consultant seat:** about USD 60-100 a month for up to 10-15 broker clients, with a reviewer view (unverified).
- **Colegio white-label:** a flat fee of about USD 10,000-25,000 a year, or USD 1-3 per member a month (unverified).

**Revenue estimate (year 3)**
- **Buyers.**
  - There are about 35,000-40,000 licensed brokers ([HCDN 6505-D-2024](https://www4.hcdn.gob.ar/dependencias/dsecretaria/Periodo2024/PDF2024/TP2024/6505-D-2024.pdf); [iProfesional](https://www.iprofesional.com/realestate/422390-agentes-inmobiliarios-podran-operar-sin-matricula-y-el-sector-esta-en-alerta)).
  - Perhaps 10,000-25,000 of them are obliged firms. Of those, perhaps 5,000 are agencies that close sales every month (unverified).
- **Direct agencies:** 5,000 x 5% share x USD 360 a year = **USD 90,000**.
- **Accountants and consultants:** 40 seats x USD 900 a year = **USD 36,000**.
- **One colegio white-label deal:** **USD 15,000** (unverified).
- **Total:** about **USD 140,000 a year**.
  - Low case: 5,000 x 2% x USD 300 = USD 30,000, plus 15 x USD 900 = USD 13,500. Total about USD 45,000.
  - High case: one CRM partnership and two colegio deals could take it to USD 250,000 or more (unverified).

**Ease of implementation and sale**
- **Build: medium-easy.** The core is forms, a risk-scoring rule set, reminders and an export in the UIF's bulk-template format ([UIF RSM guide](https://www.argentina.gob.ar/uif/instructivos/rsm-compra-yo-venta-de-bienes-inmuebles)). PEP screening can come from a third-party API ([Didit](https://didit.me/blog/aml-screening-api-argentina-52282/)).
- **Onboarding: easy.** Each agency sets up once, imports its clients and gets an auto-filled manual.
- **Sale: medium-hard.** Small brokers buy only when pushed. The best pushers are:
  - the colegios, which already hand out model manuals ([CCI Santa Fe](https://ccisantafe.org.ar/wp-content/uploads/2020/06/01.-Manual-Operativo-UIF-Colegio-de-Corredores-Inmobiliarios-de-la-Prov.-Sta.-Fe-1%C2%AA-Circ..pdf));
  - CRM vendors, which already hold the sale data ([ComparaSoftware](https://www.comparasoftware.com/xintel));
  - accountants who act as REI.
- **Pricing in pesos is a hassle.** Prices need indexing or quoting in USD, because the SMVM and fines are reset often ([Canal 26](https://www.canal26.com/economia/2026/09/02/asi-quedo-el-aumento-del-salario-minimo-vital-y-movil-cuanto-se-cobrara-entre-septiembre-de-2026-y-abril-de-2027/)).

**Remaining risks**
- **Weak enforcement.** There were 68 sanction proceedings and 25 fines across all sectors in 2024 ([UIF 2024 summary](https://www.argentina.gob.ar/sites/default/files/2016/09/uif_resumen_ejecutivo_gestion_2024_-_v03.pdf)). No fine against a broker under Res. 43/2024 was found (unverified). This is the main brake on price and uptake.
- **Deregulation draft.** As of 29 Jul 2026, the draft had not formally entered Congress. It would lower the academic requirement and let brokers work through platforms without each agent holding a licence ([El Cronista](https://www.cronista.com/economia-politica/desregulacion-inmobiliaria-el-proyecto-de-sturzenegger-abre-la-puerta-a-la-uberizacion-del-corretaje-y-reordena-ganadores/)). Colegiación is provincial, so provinces would have to adhere ([Diario Uno](https://www.diariouno.com.ar/sociedad/la-camara-inmobiliarias-mendoza-analiza-ir-la-justicia-si-avanza-la-desregulacion-del-sector-n1578265)).
  - Res. 43/2024 refers to licensed brokers, but the law covers anyone who does brokerage ([Infoleg](https://servicios.infoleg.gob.ar/infolegInternet/anexos/60000-64999/62977/texact.htm)).
  - The draft would weaken the colegio channel. It could also add unlicensed obliged brokers, but that is unverified.
- **Relief for brokers.** The UIF eased deadlines for accountants and lawyers ([abogados.com.ar](https://abogados.com.ar/resolucion-uif-902026-suspension-transitoria-de-la-primera-presentacion-del-rei-para-abogados-sujetos-obligados/39988)). It could do the same for brokers.
- **Competition.** CONLAFT could add a broker edition ([CONLAFT profile](https://www.cancilleria.gob.ar/userfiles/ut/conlaft_espanol.pdf)). A CRM vendor could also build a basic module (unverified).
- **Small totals.** Even the base case is a small business of about USD 140,000 a year (my estimate, unverified).

**New sources (this pass)**
- https://www.cancilleria.gob.ar/userfiles/ut/conlaft_espanol.pdf
- https://www.conlaft.com/
- https://www.facpce.org.ar/wp-content/uploads/2026/04/Nota-FACPCE-a-UIF-31-03-26.pdf
- https://www.colegio-escribanos.org.ar/2025/07/24/uif-consulta-frecuente-sobre-el-rsm-y-el-ros/
- https://www.colegio-escribanos.org.ar/category/noticias/uif/
- https://ccisantafe.org.ar/wp-content/uploads/2020/06/01.-Manual-Operativo-UIF-Colegio-de-Corredores-Inmobiliarios-de-la-Prov.-Sta.-Fe-1%C2%AA-Circ..pdf
- https://www.reporteinmobiliario.com/article2940-norma-uif-obligatoria-para-inmobiliarios-como-evitar-sanciones.html
- https://www.cronista.com/economia-politica/desregulacion-inmobiliaria-el-proyecto-de-sturzenegger-abre-la-puerta-a-la-uberizacion-del-corretaje-y-reordena-ganadores/
- https://www.diariouno.com.ar/sociedad/la-camara-inmobiliarias-mendoza-analiza-ir-la-justicia-si-avanza-la-desregulacion-del-sector-n1578265
- https://didit.me/blog/aml-screening-api-argentina-52282/

## Summary

**Verdict: maybe. Score: 5/10.**

The duty is real, national and current. Resolución UIF 43/2024 makes matriculated real estate brokers who handle sales, or leases of 300 SMVM a year or more, run a full risk-based AML programme. That means a risk self-assessment every two years, an external reviewer or internal audit, monthly transaction reports, an annual report, client risk ratings and client files kept for 10 years, a manual, and yearly training ([Res. 43/2024 text](https://www.argentina.gob.ar/normativa/nacional/397424/texto)). No broker-specific software was found. The state's free SROMasivo template covers only the monthly report filing ([UIF RSM guide](https://www.argentina.gob.ar/uif/instructivos/rsm-compra-yo-venta-de-bienes-inmuebles)). Two things hold the score down. First, enforcement is thin: the UIF opened 68 sanction proceedings and imposed 25 fines in 2024, across all sectors combined ([UIF 2024 summary](https://www.argentina.gob.ar/sites/default/files/2016/09/uif_resumen_ejecutivo_gestion_2024_-_v03.pdf)). Second, the main deliverables recur only every two years, and the next cycle is due in April and August 2028. The best route is probably not direct sales to brokers. It is a white-label tool sold to the provincial broker colegios. The Buenos Aires notaries' colegio already gives its members a similar self-assessment app ([Colegio de Escribanos instructivo](https://www.colegio-escribanos.org.ar/apps/UIF-autoevaluacion/instructivo.html)).

## Duty

**Legal basis**
- Law 25.246, art. 20, as amended by Law 27.739 (March 2024), lists as obliged subjects people and entities "que realicen corretaje inmobiliario" ([Law 25.246 consolidated, Infoleg](https://servicios.infoleg.gob.ar/infolegInternet/anexos/60000-64999/62977/texact.htm)). The law's wording does not depend on holding a licence (matrícula).
- Resolución UIF 43/2024 sets out the detailed rules. It was published 18 Mar 2024, came into force the next day and repealed Res. UIF 16/2012 ([Res. 43/2024](https://www.argentina.gob.ar/normativa/nacional/397424/texto); [Marval](https://www.marval.com/Publicacion/la-uif-actualiza-la-normativa-aplicable-a-los-agentes-o-corredores-inmobiliarios-15804)). The Boletín Oficial version notes changes made by Res. UIF 56/2024 ([Contadores en Red](https://contadoresenred.com/resolucion-43-2024/)). I did not read what 56/2024 changed (unverified).

**Who is covered (Art. 2 a, 2 o)**
- Matriculated brokers, and brokerage firms run only by them, when they act for clients in "Actividades Específicas". Those are (i) buying or selling property, and (ii) leases worth 300 SMVM or more a year, across one or more operations ([Res. 43/2024](https://www.argentina.gob.ar/normativa/nacional/397424/texto)).
- With the SMVM at ARS 383,800 from Sep 2026 ([Canal 26](https://www.canal26.com/economia/2026/09/02/asi-quedo-el-aumento-del-salario-minimo-vital-y-movil-cuanto-se-cobrara-entre-septiembre-de-2026-y-abril-de-2027/)), the thresholds work out as follows:
  - 300 SMVM is about ARS 115 million.
  - 700 SMVM (the "habitual client" level) is about ARS 269 million.
  - 875 SMVM (the external-reviewer level) is about ARS 336 million.
  - These are my own calculations.

**What must be done**

| Duty | Frequency and deadline | Article |
|---|---|---|
| Risk self-assessment report (clients, services, channels, geography) | Every 2 years, filed before 30 April. The first was due 30 Apr 2026, covering 2024-25. Methodology reviewed every 4 years. | Art. 5, 36 i |
| External independent reviewer (REI) report | Every 2 years, within 120 days of the self-assessment deadline. The first was due 31 Aug 2026. Applies if income is above 875 SMVM or there are 50+ activities a year. Others need an internal audit. | Art. 17, 36 ii |
| Monthly systematic report (RSM): sales, and leases of 300+ SMVM | Between the 1st and 15th of each month. The first was due Feb 2025. | Art. 34 a, 36 iii |
| Annual systematic report (RSA): firm data, number of activities and clients | 2 Jan to 15 Mar each year | Art. 34 b |
| Compliance officer: a titular plus an alternate for firms, registered with the UIF | Ongoing. Changes must be notified to the UIF. | Art. 9-10 |
| Client risk rating (low, medium, high) with simplified, normal or enhanced due diligence | File refreshed at least every 1, 3 or 5 years depending on risk | Art. 23-27 |
| Suspicious transaction report (ROS) | Within 15 days of deciding a transaction is suspicious, and no later than 150 days after it. Within 48 hours for terrorist financing. | Art. 33 c |
| Record keeping | 10 years | Art. 15 |
| AML manual, signed by staff, reviewed every 2 years; annual training with records | Ongoing | Art. 8, 16 |

Source for the whole table: [Res. 43/2024](https://www.argentina.gob.ar/normativa/nacional/397424/texto).

**Monthly report format.** The RSM is filed in bulk through the UIF's SROMasivo app using a fixed template. It asks for:
- the date, the amount, the currency and the peso equivalent;
- the property's cadastral data;
- each payment's method (cash, transfer, cheque, virtual asset);
- every buyer and seller, with CUIT or DNI, date of birth, nationality, PEP status and percentage share.

The app checks CUIT check digits and that the buyers' and sellers' shares each add up to 100% ([UIF RSM guide](https://www.argentina.gob.ar/uif/instructivos/rsm-compra-yo-venta-de-bienes-inmuebles)). Whether a nil report is needed in months with no qualifying operations is (unverified).

**Penalties (Law 25.246, Chapter IV, art. 24 as amended)**
- The sanctions are a warning, a warning published in the Boletín Oficial, and fines. The fines are:
  - 1 to 10 times the value of the transaction for a suspicious transaction report that was never filed or filed late;
  - 15 to 2,500 "módulos" per infraction for any other breach.
- A compliance officer can also be barred from the role for up to 5 years.
- Board members are jointly liable. The limitation period is 5 years.
- A sanction proceeding can be suspended if the firm puts things right (art. 24 ter) ([Infoleg](https://servicios.infoleg.gob.ar/infolegInternet/anexos/60000-64999/62977/texact.htm)).
- The módulo is ARS 54,140 under Res. UIF 95/2025 ([UIF resolutions list](https://www.argentina.gob.ar/uif/normativa/resoluciones)). That puts the fine for other breaches at about ARS 0.8 million to ARS 135 million per infraction (my calculation).

**Enforcement**
- In 2024 the UIF carried out 235 supervisions, opened 68 sanction proceedings and imposed 25 fines across all obliged sectors ([UIF 2024 summary](https://www.argentina.gob.ar/sites/default/files/2016/09/uif_resumen_ejecutivo_gestion_2024_-_v03.pdf)).
- No figure for brokers specifically was found.
- Older data show a pattern of large fines that were rarely collected. Between 2010 and 2013 the UIF imposed about ARS 221.7 million in fines but collected about ARS 250,000 ([Página 12, 2014](https://www.pagina12.com.ar/diario/economia/2-242795-2014-03-27.html)).
- I found no news of fines against real estate brokers under Res. 43/2024 (unverified either way).
- The UIF plans its inspections with a risk matrix (Res. 61/2023) ([Res. 61/2023 annex](https://www.colegio-escribanos.org.ar/noticias/2023_04_17-UIF-Res-61-23-Anexo.pdf)).

**Recent and upcoming changes**
- **Deadlines:** The UIF's resolutions page lists no 2025 or 2026 resolution that extends the broker deadlines ([UIF resolutions](https://www.argentina.gob.ar/uif/normativa/resoluciones)). Accountants got their first REI moved to 1 Mar 2027 ([Blog del Contador](https://siap.blogdelcontador.com.ar/novedades/uif-prorrogo-marzo-2027-informe-revision-externa-contadores/)). Lawyers had theirs suspended indefinitely by Res. UIF 90/2026 ([abogados.com.ar](https://abogados.com.ar/resolucion-uif-902026-suspension-transitoria-de-la-primera-presentacion-del-rei-para-abogados-sujetos-obligados/39988)). So the broker deadline of 31 Aug 2026 appears to have stood (unverified). The next self-assessment is due by 30 Apr 2028, and the next REI by about 28 Aug 2028.
- **Registration:** Res. UIF 37/2026 moved registration fully online. Supporting documents must now be uploaded in SRO+ ([Marval](https://www.marval.com/Publicacion/digitalizacion-del-registro-de-sujetos-obligados-17570)).
- **Property registries:** Res. UIF 93/2026 gives property registries their own risk-based regime from 8 Nov 2026 ([UIF resolutions](https://www.argentina.gob.ar/uif/normativa/resoluciones); [Tributum](https://tributum.news/res-93-2026-uif-registros-de-la-propiedad-inmueble-prevencion-la-ft-fp-nuevo-regimen-basado-en-riesgos/)).
- **Licence deregulation:** The government plans to deregulate broker licensing. A July 2026 report says the package would end mandatory colegio membership and the degree requirement, and turn brokerage into a commercial service ([iProfesional, 13 Jul 2026](https://www.iprofesional.com/realestate/459884-las-claves-de-la-reforma-al-mercado-inmobiliario-que-el-gobierno-enviara-al-congreso)). Deputy Bongiovanni also filed a "Ley de Libertad Inmobiliaria" bill ([iProfesional](https://www.iprofesional.com/realestate/433013-cualquier-persona-podra-poner-imobiliaria-y-ser-martillero-polemico-plan)). I could not confirm that either was enacted (unverified).

## Buyers

- **No official count of brokers registered with the UIF was found.** The UIF does not publish one by sector (searches of UIF reports came up empty).
- **Proxies for the size of the pool:**
  - A 2024 bill in the Chamber of Deputies cites more than 40,000 matriculated professionals nationwide ([HCDN 6505-D-2024](https://www4.hcdn.gob.ar/dependencias/dsecretaria/Periodo2024/PDF2024/TP2024/6505-D-2024.pdf)).
  - COFECI cites 35,000+ licensed members (first check, citing [iProfesional](https://www.iprofesional.com/realestate/422390-agentes-inmobiliarios-podran-operar-sin-matricula-y-el-sector-esta-en-alerta)).
  - FIRA, an industry body, estimates more than 70,000 agencies, which likely includes unlicensed ones ([iProfesional, Feb 2025](https://www.iprofesional.com/realestate/422390-agentes-inmobiliarios-podran-operar-sin-matricula-y-el-sector-esta-en-alerta)).
  - CUCICBA (Buenos Aires city) had about 7,300 members in 2018 ([iProUP](https://www.iproup.com/economia-digital/1574-emprendimiento-innovacion-tecnologica-tecnologia-Mercado-Libre-firmo-un-acuerdo-con-el-colegio-inmobiliario-porteno)).
- **Who is actually obliged:** only licensed brokers who close sales or large leases. A plausible range is 10,000 to 25,000 obliged firms and individuals (unverified estimate).
- **Segments:**
  - Sole brokers (personally obliged, Art. 9).
  - Small agencies with 2 to 10 staff.
  - A smaller tier of franchise offices (RE/MAX and similar) and developers' sales arms.
  - Only firms above 875 SMVM of income (about ARS 336 million) or with 50+ operations need an external reviewer. That is probably a few thousand firms at most (unverified).
- **How they comply today:**
  - The UIF's SROMasivo template for the monthly report ([UIF](https://www.argentina.gob.ar/uif/instructivos/rsm-compra-yo-venta-de-bienes-inmuebles)).
  - The FACPCE self-assessment guide and matrix, which was written for accountants ([FACPCE ITAER guide](https://www.facpce.org.ar/wp-content/uploads/2026/04/GUIA-PARA-ELABORAR-EL-INFORME-TECNICO-DE-AUTOEVALUACION-DE-RIESGOS-ITAER-002.pdf)).
  - Excel matrices.
  - Law firms that write manuals and matrices ([ST Abogados](https://stabogados.com.ar/civil/empresas/compliance-sujetos-obligados/)).
  - Accountants who act as REI.
  - Many small brokers likely do little or nothing and rely on the notary at the deed to do the KYC (unverified).

## Competition

| Alternative | What it covers | Price | Source |
|---|---|---|---|
| UIF SRO / SRO+ / SROMasivo (free, state) | Registration, the compliance officer, and filing the monthly and annual reports by template | Free | [UIF RSM](https://www.argentina.gob.ar/uif/instructivos/rsm-compra-yo-venta-de-bienes-inmuebles); [Marval on Res. 37/2026](https://www.marval.com/Publicacion/digitalizacion-del-registro-de-sujetos-obligados-17570) |
| FACPCE ITAER guide and risk-matrix template | Self-assessment method, written for accountants and adaptable | Free | [FACPCE](https://www.facpce.org.ar/wp-content/uploads/2026/04/GUIA-PARA-ELABORAR-EL-INFORME-TECNICO-DE-AUTOEVALUACION-DE-RIESGOS-ITAER-002.pdf) |
| DNRPI property-registry matrix | Matrix for registries, not brokers | Free | [DNRPI](https://www.dnrpi.jus.gob.ar/descargas/nueva_matriz.pdf) |
| Colegio de Escribanos CABA self-assessment app | Questionnaire, residual-risk matrix and a PDF report with a QR code, **for notaries only** | Member tool; cost not stated | [Instructivo](https://www.colegio-escribanos.org.ar/apps/UIF-autoevaluacion/instructivo.html) |
| Law firms (e.g. ST Abogados) | Risk matrix, AML manual, KYC files for complex clients, UIF inspection defence, training with certificates. Lists "inmobiliarias y desarrolladores" as a sector. | Not published | [ST Abogados](https://stabogados.com.ar/civil/empresas/compliance-sujetos-obligados/) |
| CONLAFT S.R.L. | AML platform and training aimed at accountants, mutuales and cooperatives. No broker product seen. | Not found | [CONLAFT](https://www.cancilleria.gob.ar/userfiles/ut/conlaft_espanol.pdf); [Blog del Contador](https://siap.blogdelcontador.com.ar/?p=83564) |
| Real estate CRMs: Tokko Broker, Xintel, InmoPC/InmoSuite, Inmovilla | Listings, leads and rental admin. **No UIF/AML module found.** | Tokko USD 80-300 a month; InmoPC ARS 15,000-80,000 a month | [DevelopArgentina](https://developargentina.com/blog/software-inmobiliaria-argentina-2026); [ComparaSoftware](https://www.comparasoftware.com/tokko-broker) |

- **The state's free tool covers only filing.** It covers registration and the monthly and annual report filing. It does not cover:
  - client risk rating;
  - the client file and due-diligence evidence;
  - PEP and sanctions-list screening records;
  - alert monitoring;
  - the self-assessment;
  - the manual;
  - training records.
- **No broker-specific SaaS was found** in Spanish searches for software, platforms or modules (searches cited above; not exhaustive).

## Willingness to pay

- **Benchmarks for software spend:**
  - Brokers already pay for software: Tokko costs USD 80-300 a month per agency, and InmoPC ARS 15,000-80,000 a month ([DevelopArgentina](https://developargentina.com/blog/software-inmobiliaria-argentina-2026)).
  - An add-on for compliance might plausibly sell for ARS 15,000-40,000 a month (about USD 10-30) for small firms (unverified estimate). A one-off "self-assessment pack" might sell for ARS 150,000-400,000 per cycle (unverified estimate).
  - Law firm and consultant fees for a manual plus matrix were not published (unverified).
- **Fine exposure:** 15 to 2,500 módulos (ARS 0.8 million to ARS 135 million) per infraction, with directors jointly liable ([Infoleg](https://servicios.infoleg.gob.ar/infolegInternet/anexos/60000-64999/62977/texact.htm); [UIF resolutions](https://www.argentina.gob.ar/uif/normativa/resoluciones)).
- **Odds of being caught are low.** There were only 25 fines across all sectors in 2024 ([UIF 2024 summary](https://www.argentina.gob.ar/sites/default/files/2016/09/uif_resumen_ejecutivo_gestion_2024_-_v03.pdf)). So the fine threat is big on paper, but the expected cost for a small broker is low. Willingness to pay will be weak unless a colegio, a franchise head office or an inspection wave pushes it.
- **Staff time:** a broker closing 2 to 5 sales a month must collect about 10 data fields per party for each sale for the RSM. They must also keep a risk-rated file per client. That is a real but modest burden, perhaps 1 to 3 hours a month (unverified estimate).

## Channels

- **Provincial colegios:**
  - CUCICBA in Buenos Aires city ([CUCICBA site](https://www.cucicba.com.ar/?s=UIF)). Its January 2026 posts on broker obligations do not visibly offer a UIF tool.
  - The Colegio de Martilleros of Buenos Aires province, the Colegio de Corredores of Mendoza, Rosario and Córdoba, and the federal bodies COFECI and FIRA ([Diario Uno](https://www.diariouno.com.ar/sociedad/fuerte-rechazo-del-colegio-corredores-al-posible-dnu-la-desregulacion-inmobiliaria-n1402294); [iProfesional](https://www.iprofesional.com/realestate/422390-agentes-inmobiliarios-podran-operar-sin-matricula-y-el-sector-esta-en-alerta)).
  - The notaries' colegio app shows that colegios are willing to give members a UIF tool ([Colegio de Escribanos](https://www.colegio-escribanos.org.ar/apps/UIF-autoevaluacion/instructivo.html)). A white-label licence to colegios is the most efficient channel.
- **Accountants who act as REI.** They need a broker-ready evidence pack and can resell or recommend the tool. Reach them through FACPCE and the CPCE councils, which already run UIF training ([CPCE CABA](https://www.consejo.org.ar/noticias/2026/uif-se-prorroga-la-presentacion-del-informe-de-revision-externa-independiente)).
- **CRM vendors:** an integration or partnership with Tokko, Xintel or InmoSuite. Sale records already live there ([ComparaSoftware](https://www.comparasoftware.com/xintel)).
- **Franchise networks:** RE/MAX, Century 21 and similar, which have central compliance functions (unverified).
- **Content:** SEO and WhatsApp content around the monthly and annual report windows. The annual window is 2 Jan to 15 Mar. The next self-assessment is due Apr 2028.

## Risks

- **Weak enforcement leads to low willingness to pay.** There were 25 fines across all sectors in 2024 ([UIF 2024](https://www.argentina.gob.ar/sites/default/files/2016/09/uif_resumen_ejecutivo_gestion_2024_-_v03.pdf)). This is the biggest risk.
- **The main deliverables are biennial.** The next self-assessment and REI are due in 2028. Recurring revenue rests on the monthly report and client-file work.
- **A free colegio tool.** Colegios could build their own free tool, as the notaries did ([Colegio de Escribanos](https://www.colegio-escribanos.org.ar/apps/UIF-autoevaluacion/instructivo.html)). This risk is also an opportunity: be the vendor.
- **The UIF could extend SRO+ into a broader tool.** No sign of this was found ([UIF resolutions](https://www.argentina.gob.ar/uif/normativa/resoluciones)).
- **Licence deregulation.** It could blur who is obliged, because Res. 43/2024 refers to matriculated brokers ([iProfesional](https://www.iprofesional.com/realestate/459884-las-claves-de-la-reforma-al-mercado-inmobiliario-que-el-gobierno-enviara-al-congreso)). However, the law itself (art. 20 as amended) covers anyone who does real estate brokerage ([Infoleg](https://servicios.infoleg.gob.ar/infolegInternet/anexos/60000-64999/62977/texact.htm)). Deregulation could therefore enlarge the obliged pool, but it would weaken the colegio channel.
- **Possible relief for brokers.** The UIF has granted relief to accountants and lawyers. A similar extension or simplified regime for brokers could cut urgency ([abogados.com.ar](https://abogados.com.ar/resolucion-uif-902026-suspension-transitoria-de-la-primera-presentacion-del-rei-para-abogados-sujetos-obligados/39988)).
- **Market economics.** Prices are in pesos and inflation is high. The market is small: perhaps 10,000 to 25,000 obliged brokers, with low revenue per seat (unverified).
- **Liability.** The software must not be seen as giving legal advice. Records must be kept for 10 years ([Res. 43/2024](https://www.argentina.gob.ar/normativa/nacional/397424/texto)). Personal data must be handled under Argentina's data protection law, Ley 25.326 (unverified).

## First product

**Version 1: "UIF Inmobiliaria"**, a web app plus WhatsApp-friendly forms.

1. **Client file (legajo).** Capture identity data, CUIT check-digit validation, a PEP declaration, and a funds-origin declaration with document upload. Rate each client low, medium or high risk using Art. 23-27 factors. Schedule file refreshes at 1, 3 or 5 years.
2. **Operation log.** Record sales, and leases with a running total against 300 SMVM. Track the 700 SMVM "habitual client" test. Export the **SROMasivo bulk template** with the UIF's own checks (shares add up to 100%, DNI and CUIT format) ([UIF RSM](https://www.argentina.gob.ar/uif/instructivos/rsm-compra-yo-venta-de-bienes-inmuebles)).
3. **Alerts.** Flag cash payments, virtual assets, foreign parties, PEPs, and price or profile mismatches. Keep a suspicious-transaction decision log with the 15/150-day clock.
4. **Annual report helper.** Produce the counts of activities and clients needed for the annual report.
5. **Policy pack.** An AML manual template for brokers (Art. 8), a staff sign-off sheet, and an annual training module with a completion log (Art. 16).
6. **Self-assessment wizard.** A questionnaire, an inherent-versus-residual risk matrix, and a PDF report, modelled on the notaries' app structure. Collect data now so the 2028 report almost writes itself.

**First 30 days**
- Week 1: Interview 10 brokers and 3 colegio officials. Ask whether they filed the self-assessment in April 2026, and who did it. Confirm whether nil monthly reports are needed.
- Week 2: Build the client file, the operation log and the SROMasivo export. Test the export against the UIF template.
- Week 3: Add the risk rating, alerts and the manual template.
- Week 4: Pilot with 5 brokers. Pitch a white-label licence to one colegio and one REI accounting firm.

## Open questions

- How many brokers are registered with the UIF as obliged subjects? This could be asked through an access-to-information request (unverified).
- Did brokers in fact file the self-assessment and REI in 2026? What share filed, and was there any quiet extension? (unverified)
- Is a nil monthly report required? (unverified)
- What did Res. UIF 56/2024 change in Res. 43/2024? (unverified)
- What do law firms and accountants charge brokers for a manual, a matrix and an REI? (unverified)
- Is the notaries' colegio app free, and who built it? Is the same vendor approaching broker colegios? (unverified)
- Has the deregulation package been sent to Congress or passed? (unverified)
- Have there been any UIF sanctions against brokers since 2024? (unverified)

## Sources

- https://www.argentina.gob.ar/normativa/nacional/397424/texto
- https://servicios.infoleg.gob.ar/infolegInternet/anexos/60000-64999/62977/texact.htm
- https://www.argentina.gob.ar/uif/normativa/resoluciones
- https://www.argentina.gob.ar/uif/instructivos/rsm-compra-yo-venta-de-bienes-inmuebles
- https://www.argentina.gob.ar/sites/default/files/2016/09/uif_resumen_ejecutivo_gestion_2024_-_v03.pdf
- https://www.marval.com/Publicacion/la-uif-actualiza-la-normativa-aplicable-a-los-agentes-o-corredores-inmobiliarios-15804
- https://www.marval.com/Publicacion/digitalizacion-del-registro-de-sujetos-obligados-17570
- https://contadoresenred.com/resolucion-43-2024/
- https://www.colegio-escribanos.org.ar/apps/UIF-autoevaluacion/instructivo.html
- https://www.colegio-escribanos.org.ar/noticias/2023_04_17-UIF-Res-61-23-Anexo.pdf
- https://www.facpce.org.ar/wp-content/uploads/2026/04/GUIA-PARA-ELABORAR-EL-INFORME-TECNICO-DE-AUTOEVALUACION-DE-RIESGOS-ITAER-002.pdf
- https://www.dnrpi.jus.gob.ar/descargas/nueva_matriz.pdf
- https://tributum.news/res-93-2026-uif-registros-de-la-propiedad-inmueble-prevencion-la-ft-fp-nuevo-regimen-basado-en-riesgos/
- https://siap.blogdelcontador.com.ar/novedades/uif-prorrogo-marzo-2027-informe-revision-externa-contadores/
- https://siap.blogdelcontador.com.ar/?p=83564
- https://abogados.com.ar/resolucion-uif-902026-suspension-transitoria-de-la-primera-presentacion-del-rei-para-abogados-sujetos-obligados/39988
- https://www.consejo.org.ar/noticias/2026/uif-se-prorroga-la-presentacion-del-informe-de-revision-externa-independiente
- https://www.canal26.com/economia/2026/09/02/asi-quedo-el-aumento-del-salario-minimo-vital-y-movil-cuanto-se-cobrara-entre-septiembre-de-2026-y-abril-de-2027/
- https://www.pagina12.com.ar/diario/economia/2-242795-2014-03-27.html
- https://www.iprofesional.com/realestate/459884-las-claves-de-la-reforma-al-mercado-inmobiliario-que-el-gobierno-enviara-al-congreso
- https://www.iprofesional.com/realestate/433013-cualquier-persona-podra-poner-imobiliaria-y-ser-martillero-polemico-plan
- https://www.iprofesional.com/realestate/422390-agentes-inmobiliarios-podran-operar-sin-matricula-y-el-sector-esta-en-alerta
- https://www.diariouno.com.ar/sociedad/fuerte-rechazo-del-colegio-corredores-al-posible-dnu-la-desregulacion-inmobiliaria-n1402294
- https://www4.hcdn.gob.ar/dependencias/dsecretaria/Periodo2024/PDF2024/TP2024/6505-D-2024.pdf
- https://www.iproup.com/economia-digital/1574-emprendimiento-innovacion-tecnologica-tecnologia-Mercado-Libre-firmo-un-acuerdo-con-el-colegio-inmobiliario-porteno
- https://www.cucicba.com.ar/?s=UIF
- https://stabogados.com.ar/civil/empresas/compliance-sujetos-obligados/
- https://www.cancilleria.gob.ar/userfiles/ut/conlaft_espanol.pdf
- https://developargentina.com/blog/software-inmobiliaria-argentina-2026
- https://www.comparasoftware.com/tokko-broker
- https://www.comparasoftware.com/xintel
