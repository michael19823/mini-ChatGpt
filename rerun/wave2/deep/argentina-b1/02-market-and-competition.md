# Argentina B1 (UIF kit for real estate brokers): market size, buyers and competition (deep dive 02)

Date: 10 Oct 2026. Builds on [the B1 report](../reports/argentina-b1.md). Scope: market size, buyers, competition, channels and regional expansion. Law, product, go-to-market and payments are covered by the other agents.

Exchange rate used: ARS 1,517 per USD, the BCRA official rate on 9 Oct 2026 ([BCRA API](https://api.bcra.gob.ar/estadisticascambiarias/v1.0/Cotizaciones/USD?fechadesde=2026-10-01&fechahasta=2026-10-10)).

## Summary

- **There is a hard count of obliged brokers.** In March 2024, 10,365 real estate agents were registered with the UIF as obliged subjects ([FATF/GAFILAT mutual evaluation, Cuadro 1.2](https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf)).
  - About 40,000 brokers hold a licence nationally ([Infobae](https://www.infobae.com/economia/2025/02/07/desregulacion-inmobiliaria-como-funcionan-los-colegios-que-el-gobierno-busca-modificar/); [HCDN 6505-D-2024](https://www4.hcdn.gob.ar/dependencias/dsecretaria/Periodo2024/PDF2024/TP2024/6505-D-2024.pdf)).
  - I counted **6,386 brokers with a registered office in Buenos Aires city** from the colegio's own register ([CUCICBA guide](https://colegioinmobiliario.org.ar/servicios/guia-de-matriculados)).
  - My estimate of the core buyer is **2,500-5,000 brokers who close sales most months** (unverified).
- **Buyers are micro offices.**
  - 76% of the Buenos Aires city brokers list a Gmail, Hotmail or Yahoo address.
  - Only 56 trade names are shared by two or more brokers (my count of the [CUCICBA register](https://colegioinmobiliario.org.ar/servicios/guia-de-matriculados)).
  - The city had 69,461 sale deeds in 2025 ([Ámbito](https://www.ambito.com/real-estate/escrituras-caba-2025-cerro-casi-70000-operaciones-y-quedo-los-cinco-mejores-anos-tres-decadas-n6237403/amp)). That is about 11 deeds per listed broker a year, before counting deals with no broker at all.
- **Compliance is immature, but the pressure is rising.**
  - The FATF found that brokers do not carry out due diligence and lean on banks and notaries ([MER, para. 470](https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf)).
  - The UIF examined 21 of 10,307 brokers in 2023 ([MER, para. 546](https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf)).
  - Since then:
    - the monthly report began in March 2025 ([BDO](https://www.bdoargentina.com/es-ar/novedades/2024/primer-vencimiento-del-reporte-mensual-ante-uif-para-el-corretaje-inmobiliario));
    - the UIF sent brokers an information request in December 2025 ([CUCICBA](https://colegioinmobiliario.org.ar/novedades/185));
    - the Buenos Aires city colegio asked for more time for the first self-assessment in April 2026 ([CUCICBA](https://colegioinmobiliario.org.ar/novedades/229)).
- **Correction to B1: a dedicated broker product already exists.** **AMLify**, built by BDO Argentina, covers almost the whole duty list ([amlify.net](https://amlify.net/)). Its modules are:
  - the client file, risk rating and list screening;
  - the operation log and alerts;
  - the monthly and annual report files;
  - the self-assessment;
  - training.

  It claims "+40 martilleros", and its testimonials come mostly from RE/MAX offices. Since 27 May 2026 it has been an official member benefit of the Buenos Aires city colegio, at 20% off ([CUCICBA](https://colegioinmobiliario.org.ar/novedades/245)). It publishes no price.
- **Everything else is partial.** That includes:
  - the UIF's free filing portal;
  - free guides;
  - free GAFILAT courses;
  - real estate CRMs with no UIF module;
  - a general AML platform (CONLAFT);
  - consultants.
- **Willingness to pay is real but small.** Benchmarks:
  - A Buenos Aires city broker pays the colegio ARS 750,000 a year in 2027 (USD 494) ([CUCICBA](https://colegioinmobiliario.org.ar/institucional/matriculacion)).
  - CRMs cost USD 80-300 a month ([DevelopArgentina](https://developargentina.com/blog/software-inmobiliaria-argentina-2026)).
  - Fines run from about USD 535 to USD 89,000 per breach (my conversion of [Law 25.246](https://servicios.infoleg.gob.ar/infolegInternet/anexos/60000-64999/62977/texact.htm) and the módulo value in the B1 report). Enforcement is very thin.
- **Positioning.** Do not pitch "the only tool". Pitch the cheap, self-serve tool with a public price. Aim it at:
  - sole brokers;
  - the provinces outside Buenos Aires city;
  - accountants who serve several brokers.

  A price of about USD 12-19 a month for a sole broker and USD 29-49 for an agency fits the benchmarks (unverified).
- **Revenue estimate revised down.** My year-3 base case is about USD 80,000 a year (range USD 20,000-250,000) (unverified). B1 had USD 140,000.
- **Regional.** Uruguay, Paraguay, Chile and Peru all put AML duties on real estate agents.
  - Uruguay is the nearest fit: its supervisor oversees about 14,000 non-financial obliged subjects with about ten inspectors ([SENACLAFT 2023](https://www.gub.uy/secretaria-nacional-lucha-contra-lavado-activos-financiamiento-terrorismo/sites/secretaria-nacional-lucha-contra-lavado-activos-financiamiento-terrorismo/files/documentos/noticias/Senaclaft%20-%20Resumen%20de%20Actividades%20A%C3%B1o%202023%20para%20web.pdf)).
  - No local broker tool was checked in any of these countries.

## Buyer segments

| Segment | Count | Source | Year | Confidence |
|---|---|---|---|---|
| **Real estate agents registered with the UIF as obliged subjects** | **10,365** | [FATF/GAFILAT MER, Cuadro 1.2 and Ch. 6 table](https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf) | Mar 2024 | high. Some may be inactive. Registrations after Res. 43/2024 are not in this figure. |
| Same universe used by UIF supervision; of which rated high risk | 10,307; 1,482 high risk | [MER, para. 546](https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf) | 2023 | high |
| Broker registration applications received / rejected by the UIF | 3,748 / 1,741 | [MER, Ch. 6 table](https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf) | 2019 to Mar 2024 | high |
| Licensed (matriculated) brokers, national | about 40,000 | [Infobae, citing COFECI](https://www.infobae.com/economia/2025/02/07/desregulacion-inmobiliaria-como-funcionan-los-colegios-que-el-gobierno-busca-modificar/); [HCDN bill 6505-D-2024](https://www4.hcdn.gob.ar/dependencias/dsecretaria/Periodo2024/PDF2024/TP2024/6505-D-2024.pdf) ("más de 40.000 profesionales") | 2024-25 | medium. It is unclear whether this includes the Buenos Aires province martilleros. |
| Agencies including unlicensed ones (industry claim) | more than 70,000, with 500,000 direct and indirect jobs | [FIRA via iProfesional](https://www.iprofesional.com/realestate/422390-agentes-inmobiliarios-podran-operar-sin-matricula-y-el-sector-esta-en-alerta) | 2025 | low |
| **Buenos Aires city brokers "con oficina habilitada"** | **6,386** | my count of the [CUCICBA guide](https://colegioinmobiliario.org.ar/servicios/guia-de-matriculados) (method below) | Oct 2026 | high. The site warns that some records may be missing during a system migration. |
| Buenos Aires city licence numbers ever issued | about 10,100 (highest number 10,103) | same | Oct 2026 | medium |
| Buenos Aires city brokers sharing a trade name with another broker | 124 brokers in 56 names. 2,629 distinct trade names in total. | same | Oct 2026 | medium |
| Córdoba licensed brokers | more than 3,800 | [Infonegocios on CórdobaProp](https://infonegocios.info/nota-principal/nace-un-nuevo-marketplace-pero-de-propiedades-de-que-se-trata-cordobaprop-la-app-que-busca-reunir-toda-la-oferta-de-la-provincia) | date not shown | medium-low |
| Buenos Aires province departmental colegios (martilleros and corredores) | 21 colegios. Member count not found. | [Infobae](https://www.infobae.com/economia/2025/02/07/desregulacion-inmobiliaria-como-funcionan-los-colegios-que-el-gobierno-busca-modificar/) | 2025 | high for the colegios; members unknown |
| RE/MAX Argentina offices | about 200 in 78 cities; "215+" in another report | [Cronista](https://www.cronista.com/negocios/cambios-en-remax-el-nuevo-dueno-pone-foco-en-los-proximos-barrios-que-volaran/); [iProfesional](https://www.iprofesional.com/negocios/444037-revelan-cuanto-hay-que-invertir-en-franquicia-inmobiliarias-remax) (search snippets) | 2025-26 | medium |
| Companies whose main tax activity is "servicios prestados por inmobiliarias" (CIIU 682091) | 890 | [indicadores.ar padrón](https://indicadores.ar/empresas/sector/682091) | Oct 2026 | medium. This is an undercount, because many brokerages use other codes or are individuals. |
| Companies under the wider codes 682099 and old 702000 | 5,819 and 9,836 | [682099](https://indicadores.ar/empresas/sector/682099); [702000](https://indicadores.ar/empresas/sector/702000) | Oct 2026 | low as a broker proxy, because they include building managers and landholding firms |
| Firms that need an external reviewer (income above 875 SMVM, about ARS 336 million or USD 221,000, or 50+ activities a year) | about 300-1,000 | my estimate. Thresholds are from [Res. 43/2024](https://www.argentina.gob.ar/normativa/nacional/397424/texto) and the SMVM from the B1 report. | 2026 | low (unverified) |
| **Core buyer: brokers closing a sale in most months** | **about 2,500-5,000** | my estimate from deed volume and the register (see below) | 2026 | low (unverified) |
| Buenos Aires city sale deeds | 69,461 (+26.8% on 54,770 in 2024) | [Ámbito, citing the notaries' colegio](https://www.ambito.com/real-estate/escrituras-caba-2025-cerro-casi-70000-operaciones-y-quedo-los-cinco-mejores-anos-tres-decadas-n6237403/amp) | 2025 | high |
| Adjacent: accountants registered with the UIF | 4,712 | [MER, Cuadro 1.2](https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf) | Mar 2024 | high |
| Adjacent: notaries registered with the UIF | 11,325 | same | Mar 2024 | high |
| Channel: external reviewers (REI) registered with the UIF | 135 (84 in Buenos Aires city, 19 in Santa Fe, 16 in Buenos Aires province, 8 in Córdoba) | [UIF, Análisis de los informes técnicos de los REI](https://www.argentina.gob.ar/sites/default/files/analisis_de_los_informes_tecnicosde_los_rei.pdf) | 2022 | high but old. The count has likely grown since accountants and brokers were added. |

**How I counted Buenos Aires city.** The CUCICBA "Guía de matriculados" calls a JSON search endpoint (`/servicios/guia-de-matriculados/buscar?q=..&limit=100&offset=..`) ([CUCICBA](https://colegioinmobiliario.org.ar/servicios/guia-de-matriculados)).
- I queried every two-digit string from 00 to 99, which matches licence numbers. That took 223 requests.
- I removed duplicates by licence number, which left 6,386 brokers.
- As a check, all 100 results of a text query ("ma") were already in the set.
- Licences with one digit (1-9) can be missed, but that is at most nine records.
- The guide lists only brokers with a registered office, under Res. Gral. CUCICBA 378/24 ([CUCICBA](https://colegioinmobiliario.org.ar/servicios/guia-de-matriculados)).

**How I estimated the core buyer.** This is my own arithmetic (unverified).
- Buenos Aires city had 69,461 sale deeds in 2025 and 6,386 listed brokers. That is about 11 deeds per broker a year.
- A broker is not required for a sale ([Colao, Buenos Aires province colegio, via iProfesional](https://www.iprofesional.com/realestate/422390-agentes-inmobiliarios-podran-operar-sin-matricula-y-el-sector-esta-en-alerta)).
- In Uruguay, an old study found that 60% of deals did not go through agencies ([El Observador](https://www.elobservador.com.uy/nota/inmobiliarias-se-quejan-por-la-venta-de-propiedades-uruguayas-en-el-exterior-sin-pagar-impuestos--2022101316550)).
- So a typical listed broker probably closes well under one sale a month. A minority of offices does most of the volume.
- Buenos Aires city holds about a sixth of the national licensed pool (6,386 of about 40,000).
- On that basis, I put the brokers with steady monthly reporting work at about 2,500-5,000 nationally. The remaining 5,000-8,000 UIF-registered brokers report rarely. They still owe the manual, training, client files and the self-assessment.

## Buyer profile and pain

**Size and set-up**
- **Mostly one-person offices.** In the Buenos Aires city register:
  - 4,840 of 6,386 brokers (76%) list a free webmail address: Gmail 3,062, Hotmail 1,094 and Yahoo 522;
  - only 66 list branch offices;
  - only 56 trade names are used by more than one listed broker (my count of the [CUCICBA register](https://colegioinmobiliario.org.ar/servicios/guia-de-matriculados)).
- **The FATF saw the same picture.** It reports that smaller and one-person non-financial businesses often have no one assigned to compliance. The real estate sector itself said small firms would struggle with the new rules for lack of resources ([MER, para. 482](https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf)).
- **A franchise tier.** RE/MAX has about 200 offices ([Cronista](https://www.cronista.com/negocios/cambios-en-remax-el-nuevo-dueno-pone-foco-en-los-proximos-barrios-que-volaran/)). Its offices are the visible early adopters of AMLify ([amlify.net testimonials](https://amlify.net/)).
- **High fixed costs already.** Entry to the Buenos Aires city colegio costs ARS 6,000,000 (USD 3,955). The 2027 annual fee is ARS 750,000 (USD 494), plus a ARS 15,000 bond ([CUCICBA matriculación](https://colegioinmobiliario.org.ar/institucional/matriculacion)). The Buenos Aires province annual fee was ARS 620,000 in 2025, including pension ([iProfesional](https://www.iprofesional.com/realestate/433013-cualquier-persona-podra-poner-imobiliaria-y-ser-martillero-polemico-plan)).

**How they comply today**
- **Little real due diligence.** "Las inmobiliarias y los agentes inmobiliarios no llevan a cabo la DDC y las medidas reforzadas correspondientes y, en su mayoría, dependen de otras partes interesadas, como bancos y escribanos" ([MER, para. 470](https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf)). The FATF also found that "las inmobiliarias y los abogados tienen los mayores retos" in assessing risk ([MER, IO4 conclusion](https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf)).
- **Almost no suspicious reports.**
  - Brokers filed 11, 1, 10, 19 and 16 suspicious-transaction reports in 2019-2023 ([MER, ROS table](https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf)).
  - A later UIF review of broker reports was cited by AMLify. It found that only 3-6 obliged brokers filed any report each year from 2022 to 2025. Two firms filed 68% of them ([AMLify blog](https://amlify.net/blog/post-2); the primary UIF document was not found, so this is unverified).
- **Monthly report since 2025.** The first monthly report was due on 15 March 2025. BDO wrote that brokers face "muchas horas de trabajo extra" and missing data, and that many "aún no saben que deben presentar los reportes" ([BDO Argentina](https://www.bdoargentina.com/es-ar/novedades/2024/primer-vencimiento-del-reporte-mensual-ante-uif-para-el-corretaje-inmobiliario)).
- **Templates and talks.**
  - The Buenos Aires city colegio runs free or member talks on Res. 43/2024. For example, Juan Manuel Jara, a former UIF director of analysis, spoke in March and April 2026 ([CUCICBA #215](https://colegioinmobiliario.org.ar/novedades/215); [#226](https://colegioinmobiliario.org.ar/novedades/226)). An introductory talk followed in June 2026 ([#251](https://colegioinmobiliario.org.ar/novedades/251)).
  - The colegio also passes on free GAFILAT courses ([#173](https://colegioinmobiliario.org.ar/novedades/173)).
  - Reporte Inmobiliario gave subscribers model manuals and forms. It re-published them in 2015 after "recientes multas" against "una importante firma de plaza" ([Reporte Inmobiliario](https://www.reporteinmobiliario.com/article2940-norma-uif-obligatoria-para-inmobiliarios-como-evitar-sanciones.html)).
- **Software already in the office.** Most offices run a CRM:
  - Tokko Broker, USD 80-300 a month;
  - InmoPC/InmoSuite, ARS 15,000-80,000 a month;
  - the Zonaprop/Navent CRM;
  - HubSpot ([DevelopArgentina](https://developargentina.com/blog/software-inmobiliaria-argentina-2026)).

  None showed a UIF module in my checks of the Tokko and Xintel home pages ([Tokko](https://www.tokkobroker.com/); [Xintel](https://www.xintel.com.ar/)). The colegio also offers Equifax/Veraz credit checks at 35% off, which are for tenants and not for AML ([CUCICBA #193](https://colegioinmobiliario.org.ar/novedades/193)).

**Pain: the evidence**
- **The colegio asked the UIF for more time, twice.**
  - **December 2025.** The UIF sent "requerimiento de información a los Corredores Inmobiliarios". At the colegio's request, the UIF granted "una única prórroga" to 31 December ([CUCICBA #185](https://colegioinmobiliario.org.ar/novedades/185)).
  - **April 2026.** The colegio formally asked for an extension of the first self-assessment. It cited "su primera aplicación en el sector inmobiliario, con particularidades operativas que requieren mayor claridad y adecuación" ([CUCICBA #229](https://colegioinmobiliario.org.ar/novedades/229)). No reply was posted in later news titles (my scan of posts 150-290).
- **Cross-checks are coming.** From November 2026, Res. UIF 93/2026 makes property registries report and apply risk controls. AMLify argues that brokers with many deals but few reports will stand out ([AMLify blog](https://amlify.net/blog/post-3); [Tributum](https://tributum.news/res-93-2026-uif-registros-de-la-propiedad-inmueble-prevencion-la-ft-fp-nuevo-regimen-basado-en-riesgos/)).
- **The FATF puts real estate in focus.** Half of Argentina's ML convictions (36 of 73 studied) involved property purchases ([MER, para. 146](https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf)). The FATF called the lack of systematic supervision of brokers "preocupante" ([MER, para. 546](https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf)).
- **But enforcement is still light.**
  - The UIF examined 21 of 10,307 brokers in 2023 ([MER](https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf)).
  - It imposed 25 fines across all sectors in 2024 ([UIF 2024 summary](https://www.argentina.gob.ar/sites/default/files/2016/09/uif_resumen_ejecutivo_gestion_2024_-_v03.pdf)).
  - I found no 2024-26 fine against a broker (unverified either way).
- **Forums and groups.** I found no indexed forum threads. Argentine broker groups live on WhatsApp and Facebook, which searches do not reach (unverified).

## Willingness to pay

| What brokers pay today | Amount | USD | Source |
|---|---|---|---|
| Buenos Aires city colegio annual fee, 2027 | ARS 750,000 | 494 | [CUCICBA](https://colegioinmobiliario.org.ar/institucional/matriculacion) |
| Buenos Aires city colegio entry fee | ARS 6,000,000 (3, 6 or 10 instalments) | 3,955 | same |
| Buenos Aires province annual fee, including pension | ARS 620,000 | 409 (2025 pesos) | [iProfesional](https://www.iprofesional.com/realestate/433013-cualquier-persona-podra-poner-imobiliaria-y-ser-martillero-polemico-plan) |
| Tokko Broker CRM | USD 80-300 a month per agency | 960-3,600 a year | [DevelopArgentina](https://developargentina.com/blog/software-inmobiliaria-argentina-2026) |
| InmoPC/InmoSuite | ARS 15,000-80,000 a month | about 10-53 a month | same |
| Inmovilla | EUR 39+ per agent a month | about 45 | same |
| AMLify (direct competitor) | not published; 20% off for Buenos Aires city colegio members | unknown | [CUCICBA #245](https://colegioinmobiliario.org.ar/novedades/245) |
| AML training | free GAFILAT courses; colegio talks | 0 | [CUCICBA #173](https://colegioinmobiliario.org.ar/novedades/173) |
| Law firm or consultant manual and matrix | not published | unknown | [ST Abogados](https://stabogados.com.ar/civil/empresas/compliance-sujetos-obligados/) |
| Fine for a non-reporting breach | 15-2,500 módulos (ARS 54,140 each) = ARS 0.81 million to 135 million | about 535-89,000 per breach | [Law 25.246](https://servicios.infoleg.gob.ar/infolegInternet/anexos/60000-64999/62977/texact.htm); módulo value from the B1 report |

**Reading it**
- **Proof that some brokers pay.** At least 40 offices pay for AMLify ([amlify.net](https://amlify.net/)), and a colegio promotes it. That proves a paying segment exists, mainly franchise offices and larger agencies.
- **Anchors for the long tail.** For a sole broker, the natural anchors are the colegio fee (about USD 41 a month) and a CRM (USD 80+ a month). A compliance tool at USD 12-19 a month is 30-45% of the colegio fee, and well under one CRM seat (my calculation).
- **The fine threat is large on paper, but the odds are low.** With 0.3% of brokers examined a year, fear alone will not sell. Triggers sell instead:
  - a UIF information request, as in December 2025;
  - the self-assessment deadline (next due 30 Apr 2028 per [Res. 43/2024](https://www.argentina.gob.ar/normativa/nacional/397424/texto));
  - a colegio push;
  - a franchise mandate.
- **Value per deal.** A sale commission is many times a year of software, but brokers judge price against their fixed costs, not against deals. I found no source for typical commission rates in this pass (unverified).

## Competitor table and discussion

Duty list (from [Res. 43/2024](https://www.argentina.gob.ar/normativa/nacional/397424/texto) and the B1 report):
- (1) UIF registration and a compliance officer;
- (2) a manual and staff sign-off;
- (3) a client file, risk rating and refresh schedule;
- (4) PEP and sanctions screening;
- (5) an operation log and the 300 SMVM lease tracker;
- (6) alerts and the suspicious-report clock;
- (7) the monthly report (RSM);
- (8) the annual report (RSA);
- (9) the two-yearly self-assessment;
- (10) support for the external reviewer (REI) or internal audit;
- (11) a training log;
- (12) 10-year records.

| Alternative | Duties covered | Price | Customers / reach | Verdict |
|---|---|---|---|---|
| **AMLify (BDO Argentina, Becher y Asociados SRL)** | Its modules are clients (digital file, risk level, transactional profile, list screening), non-represented parties, operations (alerts, monthly report), monitoring (alert handling with evidence), reports (monthly and annual files for bulk upload to the UIF portal), self-assessment ("riesgo entidad"), training with exams, and users. That covers 3, 4, 5, 6, 7, 8, 9, 11 and 12. A manual generator, lease-threshold tracking and a reviewer seat are not mentioned (unverified). | Not published; demo-led; 20% off for the Buenos Aires city colegio | "+40 Martilleros", "+4000 operaciones reportadas", "+8000 legajos". Named users include about 10 RE/MAX offices, LJ Ramos and Estudio Zárate ([amlify.net](https://amlify.net/)). Member benefit of CUCICBA since 27 May 2026 ([#245](https://colegioinmobiliario.org.ar/novedades/245)). BDO brand and advisory team behind it ([BDO](https://www.bdoargentina.com/es-ar/novedades/2024/primer-vencimiento-del-reporte-mensual-ante-uif-para-el-corretaje-inmobiliario)). | **The incumbent. It does the job.** 40 customers out of about 10,000 obliged brokers is under 1%, so the market is still open. Its weak points look like price opacity, a sales-led model and no visible offer for accountants or colegios outside Buenos Aires city (unverified). |
| UIF SRO / SRO+ / SROMasivo (free, state) | 1, 7, 8: registration, compliance officer, report filing by template | Free | All obliged subjects | Filing only. It is the place the files go, not a rival. |
| CONLAFT S.R.L. | Platform plus services for mutuales, cooperatives and accountants: risk matrix, KYC, monitoring, reports | Not published | 5 systems deployed, 8 staff ([profile](https://www.cancilleria.gob.ar/userfiles/ut/conlaft_espanol.pdf)). Its website shows no detail ([conlaft.com](https://www.conlaft.com/)). | Not aimed at brokers. A possible entrant. |
| Real estate CRMs (Tokko Broker, Xintel, KiteProp, InmoPC/InmoSuite, Zonaprop CRM) | None of the UIF duties found. They hold the sale data. | USD 80-300 a month (Tokko); ARS 15,000-80,000 a month (InmoPC) | Xintel claims "más de 700 sitios web" ([Xintel](https://www.xintel.com.ar/)) | A channel and integration partner. One could also add a basic module (unverified). |
| FACPCE self-assessment guide and matrix | 9 (method only; written for accountants) | Free | All accountants | A template. It shows the format, not the work. ([FACPCE](https://www.facpce.org.ar/wp-content/uploads/2026/04/GUIA-PARA-ELABORAR-EL-INFORME-TECNICO-DE-AUTOEVALUACION-DE-RIESGOS-ITAER-002.pdf)) |
| Notaries' colegio self-assessment app (Buenos Aires city) | 9, for notaries only | Member tool | About 4,000 notaries in Buenos Aires city and province ([MER, para. 114](https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf)) | A model for what a broker colegio could commission. ([instructivo](https://www.colegio-escribanos.org.ar/apps/UIF-autoevaluacion/instructivo.html)) |
| GAFILAT campus courses | 11, partly (general AML courses, not broker-specific) | Free | Promoted by CUCICBA ([#173](https://colegioinmobiliario.org.ar/novedades/173)) | Covers the training content, but not the firm's own training record. |
| Credit and identity data (Equifax/Veraz; Nosis and Worldsys not checked) | Identity and credit data; Equifax is not shown as AML screening | 35% off for CUCICBA members ([#193](https://colegioinmobiliario.org.ar/novedades/193)) | Widely used for tenant checks (unverified) | A partial input. A screening API (for example [Didit](https://didit.me/blog/aml-screening-api-argentina-52282/)) could be a component. |
| Law firms and consultants (ST Abogados, BDO advisory, independent ex-UIF experts) | 2, 3, 9, 10: manual, matrix, inspection defence, external review | Not published | ST Abogados lists "inmobiliarias y desarrolladores" ([ST Abogados](https://stabogados.com.ar/civil/empresas/compliance-sujetos-obligados/)) | One-off and costly for a sole broker (unverified). They could be a partner or reseller. |
| External reviewers (REI) | 10 | Not published; no fee scale found ([CPCE CABA](https://www.consejo.org.ar/noticias/2026/uif-se-prorroga-la-presentacion-del-informe-de-revision-externa-independiente)) | 135 registered in 2022 ([UIF](https://www.argentina.gob.ar/sites/default/files/analisis_de_los_informes_tecnicosde_los_rei.pdf)) | Buyers of a multi-client reviewer view. |
| Pirani (Colombian risk SaaS) | General risk and AML management; has an Argentina UIF guide page | Not checked | Regional ([Pirani](https://www.piranirisk.com/es/hub-regulatorio/prevencion-lavado-activos-argentina-cumplimiento-uif)) | Generic and not broker-specific (unverified). |
| Reporte Inmobiliario templates; prevenciondelavado.com | 2 (templates); news | Paid subscriptions | [Reporte Inmobiliario](https://www.reporteinmobiliario.com/article2940-norma-uif-obligatoria-para-inmobiliarios-como-evitar-sanciones.html); [prevenciondelavado.com](https://www.prevenciondelavado.com/portal/nota_gratuita.aspx?codigo=138377&cd_producto=LYNTO&nm_origen=Home) | Content, not a tool. A possible media channel. |

**Discussion**
- **B1 was wrong about competition.** Two earlier passes found no broker SaaS. AMLify is exactly that product, and it is backed by a large audit network. It is the endorsed tool of the largest broker colegio ([CUCICBA #245](https://colegioinmobiliario.org.ar/novedades/245)). Standard Spanish searches did not surface it. I found it through a "software ... inmobiliarias ... UIF" search and then the colegio's news feed.
- **The incumbent is young and small.** AMLify launched for the March 2025 first deadline ([BDO](https://www.bdoargentina.com/es-ar/novedades/2024/primer-vencimiento-del-reporte-mensual-ante-uif-para-el-corretaje-inmobiliario)). It claims over 40 broker customers ([amlify.net](https://amlify.net/)), which is under 1% of the 10,365 registered brokers.
- **The rest of the market uses nothing, or Excel and the free portal.** This is consistent with the FATF findings ([MER](https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf)) and with BDO's own pitch ([BDO](https://www.bdoargentina.com/es-ar/novedades/2024/primer-vencimiento-del-reporte-mensual-ante-uif-para-el-corretaje-inmobiliario)).
- **The colegio channel in Buenos Aires city is taken, but not exclusively.** A 20% member discount is a benefit listing, not a white-label deal. The colegio lists many benefits side by side, such as Equifax, Banco Macro and Movistar ([CUCICBA news](https://colegioinmobiliario.org.ar/novedades)). A second vendor could also be listed (unverified).
- **COFECI risk.** Marta Liotto is president of the Buenos Aires city colegio for 2025-2027 ([CUCICBA autoridades](https://colegioinmobiliario.org.ar/institucional/autoridades)). Since February 2026 she has also headed COFECI ([CUCICBA #210](https://colegioinmobiliario.org.ar/novedades/210)). AMLify could be rolled out to other colegios through her. That is the main competitive risk.

## Channels

- **Colegios (licence bodies).** These are the strongest channel, because brokers must join one.
  - **CUCICBA, Buenos Aires city.** It has 6,386 brokers with an office (my count). It runs UIF talks and asked the UIF for extensions ([#215](https://colegioinmobiliario.org.ar/novedades/215), [#229](https://colegioinmobiliario.org.ar/novedades/229)). It already lists AMLify as a benefit ([#245](https://colegioinmobiliario.org.ar/novedades/245)).
  - **COFECI.** It groups about 40,000 brokers across Córdoba, Rosario, Entre Ríos, Mendoza, Tierra del Fuego and other provinces ([Infobae](https://www.infobae.com/economia/2025/02/07/desregulacion-inmobiliaria-como-funcionan-los-colegios-que-el-gobierno-busca-modificar/)).
  - **Córdoba CPI.** It has more than 3,800 brokers and runs its own portal, CórdobaProp ([Infonegocios](https://infonegocios.info/nota-principal/nace-un-nuevo-marketplace-pero-de-propiedades-de-que-se-trata-cordobaprop-la-app-que-busca-reunir-toda-la-oferta-de-la-provincia)). It already partners with vendors such as Locativa ([Locativa](https://www.locativa.com.ar/novedades/locativa-y-el-colegio-de-corredores-inmobiliarios-de-cordoba-renovaron-su-convenio-de-colaboracion/)).
  - **Santa Fe** (Rosario and Santa Fe city colegios), **Entre Ríos**, **Mendoza** and **Chaco** ([Chaco colegio](https://colegioinmobiliariochaco.com/)).
  - **Buenos Aires province.** It has 21 departmental colegios of martilleros ([Infobae](https://www.infobae.com/economia/2025/02/07/desregulacion-inmobiliaria-como-funcionan-los-colegios-que-el-gobierno-busca-modificar/)). Because they are decentralised, each is a separate, smaller sale.
  - **Risk:** a deregulation bill would end mandatory colegio membership. It was announced in July 2026, and I found no filing or passage confirmed as of October 2026 ([iProfesional](https://www.iprofesional.com/realestate/459884-las-claves-de-la-reforma-al-mercado-inmobiliario-que-el-gobierno-enviara-al-congreso); [Infobae](https://www.infobae.com/economia/2026/07/13/el-gobierno-girara-esta-semana-el-proyecto-para-desregular-el-mercado-inmobiliario/)).
- **Chambers.**
  - FIRA, the federation of chambers ([iProfesional](https://www.iprofesional.com/realestate/422390-agentes-inmobiliarios-podran-operar-sin-matricula-y-el-sector-esta-en-alerta)).
  - The Cámara Inmobiliaria Argentina (CIA) ([iProfesional](https://www.iprofesional.com/realestate/433013-cualquier-persona-podra-poner-imobiliaria-y-ser-martillero-polemico-plan)).
- **Franchise networks.** RE/MAX has about 200 offices ([Cronista](https://www.cronista.com/negocios/cambios-en-remax-el-nuevo-dueno-pone-foco-en-los-proximos-barrios-que-volaran/)). Several offices already use AMLify ([amlify.net](https://amlify.net/)). Other networks were not checked (unverified).
- **Accountants and external reviewers.**
  - 4,712 accountants are registered with the UIF ([MER](https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf)).
  - 135 REIs were registered in 2022, concentrated in Buenos Aires city ([UIF](https://www.argentina.gob.ar/sites/default/files/analisis_de_los_informes_tecnicosde_los_rei.pdf)).
  - They can be reached through the CPCE councils and FACPCE training ([CPCE CABA](https://www.consejo.org.ar/noticias/2026/uif-se-prorroga-la-presentacion-del-informe-de-revision-externa-independiente); [Blog del Contador](https://siap.blogdelcontador.com.ar/?p=83511)).
- **CRM vendors.** Integrations with Tokko, Xintel, KiteProp and InmoSuite ([DevelopArgentina](https://developargentina.com/blog/software-inmobiliaria-argentina-2026)).
- **Influencers and media.**
  - Juan Manuel Jara, a former UIF director of analysis, who speaks at the Buenos Aires city colegio ([#215](https://colegioinmobiliario.org.ar/novedades/215)).
  - Reporte Inmobiliario ([link](https://www.reporteinmobiliario.com/article2940-norma-uif-obligatoria-para-inmobiliarios-como-evitar-sanciones.html)).
  - prevenciondelavado.com ([link](https://www.prevenciondelavado.com/portal/nota_gratuita.aspx?codigo=138377&cd_producto=LYNTO&nm_origen=Home)).
  - Blog del Contador ([link](https://siap.blogdelcontador.com.ar/novedades/uif-prorrogo-marzo-2027-informe-revision-externa-contadores/)).
  - Law firm alerts from Marval ([link](https://www.marval.com/Publicacion/la-uif-actualiza-la-normativa-aplicable-a-los-agentes-o-corredores-inmobiliarios-15804)).
- **Events.** The Buenos Aires city colegio attended:
  - Expo Real Estate Argentina ([#274](https://colegioinmobiliario.org.ar/novedades/274));
  - the 1st International Congress of Real Estate Law ([#279](https://colegioinmobiliario.org.ar/novedades/279));
  - BATEV with Cabaprop ([#264](https://colegioinmobiliario.org.ar/novedades/264)).
- **Calendar hooks.** These dates are from [Res. 43/2024](https://www.argentina.gob.ar/normativa/nacional/397424/texto) and [Tributum](https://tributum.news/res-93-2026-uif-registros-de-la-propiedad-inmueble-prevencion-la-ft-fp-nuevo-regimen-basado-en-riesgos/):
  - the monthly report, due between the 1st and the 15th;
  - the annual report, due between 2 Jan and 15 Mar;
  - the registry cross-checks, starting Nov 2026;
  - the next self-assessment, due 30 Apr 2028.

## Regional expansion

| Country | Duty on real estate agents | Supervisor and pressure | Count | Local tool checked? | Verdict |
|---|---|---|---|---|---|
| Uruguay | Yes. Agencies, developers, builders and intermediaries are obliged (Law 19.574, art. 13; Decree 379/018) and must register with SENACLAFT ([gub.uy](https://www.gub.uy/tramites/inscripcion-sujetos-obligados-sector-no-financiero); [RSM Uruguay](https://www.rsm.global/uruguay/en/node/149)). | SENACLAFT oversees about 14,000 non-financial obliged subjects with about ten inspectors. In 2023 it inspected 6 agencies and 1 developer, and it uses property-registry data to target them ([SENACLAFT 2023](https://www.gub.uy/secretaria-nacional-lucha-contra-lavado-activos-financiamiento-terrorismo/sites/secretaria-nacional-lucha-contra-lavado-activos-financiamiento-terrorismo/files/documentos/noticias/Senaclaft%20-%20Resumen%20de%20Actividades%20A%C3%B1o%202023%20para%20web.pdf)). | Agency count not found | No | The best second market: same language and a nearby legal culture. RE/MAX has about 11 offices there ([L'Express, search snippet](https://lexpress-franchise.com/latam/ultimas-noticias/remax-250-oficinas-2030-cuanto-cuesta-abrir-argentina/)). It is small (unverified). |
| Paraguay | Yes. Agencies buying and selling property are obliged (Law 1.015/97, art. 14 k; SEPRELAD Res. 264/07). Suspicious reports go through ROS-WEB (Res. 94/19) ([Ferrere](https://www.ferrere.com/en/news/paraguay-obligatoriedad-de-las-inmobiliarias-que-se-dedican-a-la-compraventa-de-inmuebles-de-comunicar-operaciones-sospechosas-v/)). | Weaker rules; no risk-based regime for brokers found | Not found | No | Low priority. |
| Chile | Yes. Corredores de propiedades and empresas de gestión inmobiliaria are UAF-supervised obliged subjects (same source). | In March 2014, 1,037 brokers and 478 property-management firms were registered. 23 brokers and 26 firms were sanctioned in 2018 ([Diario Estrategia, search snippet](https://www.diarioestrategia.cl/texto-diario/mostrar/1401968/uaf-usuarios-zonas-francas-corredores-propiedades-notarios-empresas-gestion-inmobiliarias-explican-55-multas-infracciones-normativa-antivalado)). | About 1,500 (2014 data) | No | Enforcement is real. Local AML vendors are likely (unverified). |
| Peru | Yes. Real estate agents must register with the housing ministry (Law 29080). The compliance officer's annual report to the SBS/UIF also applies to agents ([MVCS agenda 2025](https://cdn.www.gob.pe/uploads/document/file/9230082/6423590-formato-agenda-temprana-2025-mvcs.pdf); [Gestión, search snippet](https://gestion.pe/economia/empresas/sbs-el-15-de-febrero-vence-plazo-para-presentar-el-informe-anual-del-oficial-de-cumplimiento-noticia/)). | Registrations rose from 2018 to 2021 | Not found | No | Worth a check: a fixed annual deadline helps sales. |
| Brazil | Brokers report to COAF (not checked) | The COFECI system has 650,000-764,000 professionals and 74,000-107,000 firms ([Paraíba Business](https://paraibabusiness.com.br/sistema-cofeci-creci-rompendo-fronteiras/); [CRECI-SP agenda](https://crecisp.gov.br/files/agenda2024.pdf)) | very large | No | Portuguese, a different regime, and probably crowded (unverified). |
| Mexico | Real estate is a "vulnerable activity". Annual training was added by the 2025 reform ([IMCP](https://imcp.org.mx/boletin-de-la-comision-nacional-de-prevencion-de-lavado-de-dinero-y-anticorrupcion-176-marzo-2026/)). | The SAT trains the sector | very large | Vendors exist, e.g. ArmorAML ([ArmorAML](https://armor-aml.com/software-de-prevencion-de-lavado-de-dinero-en-el-sector-inmobiliario/)) | Crowded and far away. Not a near-term target. |

## Implications for positioning and pricing

- **Positioning.** Stop pitching "the only broker tool". Pitch "the simple, fixed-price UIF tool you set up in an evening". Show the price on the website. AMLify publishes none and sells through demos ([amlify.net](https://amlify.net/)).
- **Who to target first** (in order):
  1. Sole brokers and small agencies outside Buenos Aires city: Córdoba, Santa Fe, Mendoza, Entre Ríos and the Buenos Aires province colegios.
  2. Buenos Aires city sole brokers who find a BDO product heavy (unverified).
  3. Accountants and external reviewers serving several brokers.
  4. Non-RE/MAX networks.
- **Features that differ from AMLify.** These are based on its published module list (my reading):
  - a WhatsApp link for client data and declarations;
  - a lease tracker for the 300 SMVM threshold that updates the SMVM by itself;
  - a manual generator and staff sign-off;
  - a one-click "UIF information request" evidence pack, like the one needed in December 2025 ([CUCICBA #185](https://colegioinmobiliario.org.ar/novedades/185));
  - a reviewer seat for accountants;
  - a self-assessment that builds up for the April 2028 deadline;
  - a "registry consistency" check against the deals a broker actually closed, in light of [Res. 93/2026](https://tributum.news/res-93-2026-uif-registros-de-la-propiedad-inmueble-prevencion-la-ft-fp-nuevo-regimen-basado-en-riesgos/).
- **Price points** (unverified):

  | Plan | Monthly | Annual |
  |---|---|---|
  | Sole broker | USD 12-19 | USD 144-228 (30-45% of the Buenos Aires city colegio fee) |
  | Agency (up to 5 users) | USD 29-49 | |
  | Accountant or reviewer (up to 15 broker clients) | USD 59-99 | |
  | Colegio white-label | USD 1-2 per member | or a flat fee |

  - Offer an annual prepay discount.
  - A free self-check of the "am I obliged?" kind can drive sign-ups.
- **Pricing must beat AMLify on clarity, not just on amount.** A mystery-shop demo request is needed first to learn its price (open question).
- **Revenue at year 3** (my estimate, unverified):

  | Case | Brokers | Accountants | Other | Total a year |
  |---|---|---|---|---|
  | Low | 60 × USD 200 | 10 × USD 900 | none | about USD 21,000 |
  | Base | 200 × USD 300 | 25 × USD 900 | one small colegio deal, USD 10,000 | about USD 90,000 |
  | High | 600 × USD 300 | 50 × USD 900 | two colegio deals, USD 30,000 | about USD 255,000 |

  This is below B1's base of USD 140,000, because AMLify now holds the largest colegio and the franchise early adopters.
- **Timing.** Sell the onboarding before the 2028 self-assessment, and use the November 2026 registry cross-checks as the news hook.

## Open questions

- What does AMLify charge, and does it serve sole brokers? A demo request through the [CUCICBA benefit](https://colegioinmobiliario.org.ar/novedades/245) would answer this (unverified).
- Has AMLify signed with COFECI or any colegio outside Buenos Aires city? (unverified)
- Did the UIF grant the April 2026 self-assessment extension for brokers? ([CUCICBA #229](https://colegioinmobiliario.org.ar/novedades/229) shows the request only.)
- How many brokers are registered with the UIF today, and how many file the monthly report? This could be asked through an access-to-information request to the UIF (unverified).
- How many members do the 21 Buenos Aires province colegios have? (not found)
- What was the UIF's December 2025 "requerimiento de información" to brokers, and who received it? ([CUCICBA #185](https://colegioinmobiliario.org.ar/novedades/185))
- Is the deregulation bill in Congress, and would it remove colegio membership as a channel? ([iProfesional](https://www.iprofesional.com/realestate/459884-las-claves-de-la-reforma-al-mercado-inmobiliario-que-el-gobierno-enviara-al-congreso))
- Where is the primary UIF report on the quality of broker suspicious-transaction reports (2022-2025) cited by [AMLify](https://amlify.net/blog/post-2)?
- What do consultants and external reviewers charge brokers? (not published)
- Do Tokko or Xintel plan a UIF module, or a partnership? (unverified)

## Sources

- https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf
- https://www.argentina.gob.ar/sites/default/files/2016/09/uif_resumen_ejecutivo_gestion_2024_-_v03.pdf
- https://www.argentina.gob.ar/sites/default/files/analisis_de_los_informes_tecnicosde_los_rei.pdf
- https://www.argentina.gob.ar/normativa/nacional/397424/texto
- https://www.argentina.gob.ar/normativa/nacional/403326/texto
- https://servicios.infoleg.gob.ar/infolegInternet/anexos/60000-64999/62977/texact.htm
- https://api.bcra.gob.ar/estadisticascambiarias/v1.0/Cotizaciones/USD?fechadesde=2026-10-01&fechahasta=2026-10-10
- https://colegioinmobiliario.org.ar/servicios/guia-de-matriculados
- https://colegioinmobiliario.org.ar/institucional/matriculacion
- https://colegioinmobiliario.org.ar/institucional/autoridades
- https://lexpress-franchise.com/latam/ultimas-noticias/remax-250-oficinas-2030-cuanto-cuesta-abrir-argentina/
- https://colegioinmobiliario.org.ar/novedades
- https://colegioinmobiliario.org.ar/novedades/173
- https://colegioinmobiliario.org.ar/novedades/185
- https://colegioinmobiliario.org.ar/novedades/193
- https://colegioinmobiliario.org.ar/novedades/210
- https://colegioinmobiliario.org.ar/novedades/215
- https://colegioinmobiliario.org.ar/novedades/226
- https://colegioinmobiliario.org.ar/novedades/229
- https://colegioinmobiliario.org.ar/novedades/245
- https://colegioinmobiliario.org.ar/novedades/251
- https://colegioinmobiliario.org.ar/novedades/264
- https://colegioinmobiliario.org.ar/novedades/274
- https://colegioinmobiliario.org.ar/novedades/279
- https://amlify.net/
- https://amlify.net/blog/post-2
- https://amlify.net/blog/post-3
- https://www.bdoargentina.com/es-ar/novedades/2024/primer-vencimiento-del-reporte-mensual-ante-uif-para-el-corretaje-inmobiliario
- https://www.infobae.com/economia/2025/02/07/desregulacion-inmobiliaria-como-funcionan-los-colegios-que-el-gobierno-busca-modificar/
- https://www.infobae.com/economia/2026/07/13/el-gobierno-girara-esta-semana-el-proyecto-para-desregular-el-mercado-inmobiliario/
- https://www4.hcdn.gob.ar/dependencias/dsecretaria/Periodo2024/PDF2024/TP2024/6505-D-2024.pdf
- https://www.iprofesional.com/realestate/422390-agentes-inmobiliarios-podran-operar-sin-matricula-y-el-sector-esta-en-alerta
- https://www.iprofesional.com/realestate/433013-cualquier-persona-podra-poner-imobiliaria-y-ser-martillero-polemico-plan
- https://www.iprofesional.com/realestate/459884-las-claves-de-la-reforma-al-mercado-inmobiliario-que-el-gobierno-enviara-al-congreso
- https://www.iprofesional.com/negocios/444037-revelan-cuanto-hay-que-invertir-en-franquicia-inmobiliarias-remax
- https://www.cronista.com/negocios/cambios-en-remax-el-nuevo-dueno-pone-foco-en-los-proximos-barrios-que-volaran/
- https://infonegocios.info/nota-principal/nace-un-nuevo-marketplace-pero-de-propiedades-de-que-se-trata-cordobaprop-la-app-que-busca-reunir-toda-la-oferta-de-la-provincia
- https://www.locativa.com.ar/novedades/locativa-y-el-colegio-de-corredores-inmobiliarios-de-cordoba-renovaron-su-convenio-de-colaboracion/
- https://colegioinmobiliariochaco.com/
- https://www.ambito.com/real-estate/escrituras-caba-2025-cerro-casi-70000-operaciones-y-quedo-los-cinco-mejores-anos-tres-decadas-n6237403/amp
- https://indicadores.ar/empresas/sector/682091
- https://indicadores.ar/empresas/sector/682099
- https://indicadores.ar/empresas/sector/702000
- https://developargentina.com/blog/software-inmobiliaria-argentina-2026
- https://www.tokkobroker.com/
- https://www.xintel.com.ar/
- https://www.cancilleria.gob.ar/userfiles/ut/conlaft_espanol.pdf
- https://www.conlaft.com/
- https://www.facpce.org.ar/wp-content/uploads/2026/04/GUIA-PARA-ELABORAR-EL-INFORME-TECNICO-DE-AUTOEVALUACION-DE-RIESGOS-ITAER-002.pdf
- https://www.colegio-escribanos.org.ar/apps/UIF-autoevaluacion/instructivo.html
- https://stabogados.com.ar/civil/empresas/compliance-sujetos-obligados/
- https://didit.me/blog/aml-screening-api-argentina-52282/
- https://www.piranirisk.com/es/hub-regulatorio/prevencion-lavado-activos-argentina-cumplimiento-uif
- https://www.reporteinmobiliario.com/article2940-norma-uif-obligatoria-para-inmobiliarios-como-evitar-sanciones.html
- https://www.prevenciondelavado.com/portal/nota_gratuita.aspx?codigo=138377&cd_producto=LYNTO&nm_origen=Home
- https://www.consejo.org.ar/noticias/2026/uif-se-prorroga-la-presentacion-del-informe-de-revision-externa-independiente
- https://siap.blogdelcontador.com.ar/?p=83511
- https://siap.blogdelcontador.com.ar/novedades/uif-prorrogo-marzo-2027-informe-revision-externa-contadores/
- https://www.marval.com/Publicacion/la-uif-actualiza-la-normativa-aplicable-a-los-agentes-o-corredores-inmobiliarios-15804
- https://tributum.news/res-93-2026-uif-registros-de-la-propiedad-inmueble-prevencion-la-ft-fp-nuevo-regimen-basado-en-riesgos/
- https://www.gub.uy/tramites/inscripcion-sujetos-obligados-sector-no-financiero
- https://www.rsm.global/uruguay/en/node/149
- https://www.gub.uy/secretaria-nacional-lucha-contra-lavado-activos-financiamiento-terrorismo/sites/secretaria-nacional-lucha-contra-lavado-activos-financiamiento-terrorismo/files/documentos/noticias/Senaclaft%20-%20Resumen%20de%20Actividades%20A%C3%B1o%202023%20para%20web.pdf
- https://www.elobservador.com.uy/nota/inmobiliarias-se-quejan-por-la-venta-de-propiedades-uruguayas-en-el-exterior-sin-pagar-impuestos--2022101316550
- https://www.ferrere.com/en/news/paraguay-obligatoriedad-de-las-inmobiliarias-que-se-dedican-a-la-compraventa-de-inmuebles-de-comunicar-operaciones-sospechosas-v/
- https://www.diarioestrategia.cl/texto-diario/mostrar/1401968/uaf-usuarios-zonas-francas-corredores-propiedades-notarios-empresas-gestion-inmobiliarias-explican-55-multas-infracciones-normativa-antivalado
- https://cdn.www.gob.pe/uploads/document/file/9230082/6423590-formato-agenda-temprana-2025-mvcs.pdf
- https://gestion.pe/economia/empresas/sbs-el-15-de-febrero-vence-plazo-para-presentar-el-informe-anual-del-oficial-de-cumplimiento-noticia/
- https://paraibabusiness.com.br/sistema-cofeci-creci-rompendo-fronteiras/
- https://crecisp.gov.br/files/agenda2024.pdf
- https://imcp.org.mx/boletin-de-la-comision-nacional-de-prevencion-de-lavado-de-dinero-y-anticorrupcion-176-marzo-2026/
- https://armor-aml.com/software-de-prevencion-de-lavado-de-dinero-en-el-sector-inmobiliario/
