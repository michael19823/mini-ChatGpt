# Honduras: Indie-Hacker Opportunity Research

Research date: 2026-10-04

> **Research limits (read first).** I treated Honduras as a small market and used 10 WebSearch calls, the full budget. I did not use WebFetch, because the environment blocks it. Everything below comes from search-result summaries; I could not read any primary PDF in full (UIF circulars, the IHCAFE tender, the USDA GAIN report). Labels:
> - **[V]**: verified from a search result in this session (URL given).
> - **[U]**: background knowledge or inference. **Not verified** in this session.
>
> **Bottom line:** Honduras is a thin market for a foreign solo founder. Only **two** candidates reach "worth an interview", and both score at the low end. In most of the industries I screened, either the state is building the tool itself (coffee traceability, customs) or no regulatory trigger exists yet (e-invoicing). This is one fewer than the brief's minimum of three opportunities. I did not pad the list.

**Accessibility:** Honduras is not under US, EU or UK sanctions [U]. USD card payments and US-based SaaS billing work [U]. A foreign founder could legally sell software there. The practical barriers are the market's size and the need to sell in Spanish, in person or over WhatsApp.

---

## Industries screened

| # | Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|---|
| 1 | Designated non-financial businesses (APNFD): real estate, car dealers, pawn shops, lenders, casinos, accountants, notaries | Customer due diligence (KYC) files, risk self-assessment, compliance-officer duties, transaction reports to the UIF in its "capturador" format | **Opportunity (moderate)** | 2026 trigger: the UIF started risk-based supervision of these businesses in March 2026. Mandatory and per-transaction, with a public registry of obligated parties |
| 2 | Coffee intermediaries and exporters (81 exporters, 500+ intermediaries) | EUDR lot-to-plot traceability: matching purchase receipts to geolocated farms, then building due-diligence packages for EU buyers | **Opportunity (weak; state substitute)** | Strong why-now (EUDR deadline Dec 2026 / 2027; SAG and IHCAFE campaign to geolocate farms), but IHCAFE is building a national platform with an exporter module. GrainChain and open-source tools are also active |
| 3 | Accounting firms / SMEs | SAR e-invoicing transition | **Watch, not yet** | E-invoicing is still not fully mandatory. In 2025–26 the SAR was still finishing advanced e-signature and the validations it needs. No hard trigger yet; when one comes, local invoicing vendors (Koddix, Zafra, FacturaSimple, NaT Suite) will be first in line |
| 4 | Customs brokers / freight forwarders | DUCA declarations, migration to SARAH WEB 2.0, digital passenger declaration | **Rejected (state-led, insufficient evidence of a gap)** | SARAH WEB 2.0 is said to be used by about 80% of the logistics chain. A system migration with no evidence of re-entry pain or third-party tool gaps |
| 5 | Employers / payroll bureaus | Monthly IHSS + RAP + INFOP contributions and withholding | **Rejected (low trigger, likely competitive)** | Rates are stable and there was no 2026 portal change in the results. EOR providers (Rivermate, Mercans) and local payroll software cover this [U] |
| 6 | Shrimp and melon exporters | SENASA sanitary/phytosanitary certificates, FDA traceability | **Not viable as standalone** | Very few exporters, mostly large firms. No evidence that Honduras uses ePhyto. The FDA FSMA 204 deadline moved to 2028 [U] |
| 7 | Food / pharma registrants | ARSA sanitary registration and licensing | **Not assessed (no evidence)** | ARSA is digitising (it geolocates the establishments it licenses and talks about adding AI tools), but I found no concrete new portal or recurring filing |

---

## Opportunities

### Opportunity: APNFD compliance file and UIF reporting kit for Honduran designated non-financial businesses

**Industry:**
Anti-money-laundering (AML) compliance for designated non-financial activities and professions (APNFD): real estate agents and developers, used and new car dealers, pawn shops and non-bank lenders, casinos, jewelers, and accountants and lawyers acting for clients.

**Buyer:**
The owner or appointed *oficial de cumplimiento* at small and mid-size APNFD businesses, and the small consultancies or accounting firms that act as outsourced compliance officers for them.

**Trigger / Why now:**
- **Circular UIF No. 1-2026**: the UIF, through URMOPRELAFT (the CNBS unit that keeps the APNFD registry), began **risk-based supervision** of APNFD businesses in March 2026 [V]. Supervision means on-site and off-site inspections that ask for evidence: risk assessments, customer files, training records and reports.
- **UIFOP-DA-98-2024**: guidelines on the compliance-officer function, issued in 2024 [V].
- These businesses must already identify and verify customers with reliable documents before starting a relationship, monitor customer activity, and report transactions to the UIF [V]. The UIF uses a dedicated "capturador" (data-capture template) for reports [V] (2020 circular on a new capturador).

**Current workflow:** (inferred from the obligations; not confirmed by interviews) [U]
1. For each sale (vehicle, property, pawn loan), staff photocopy the customer's ID and collect a paper or Excel "know your customer" form and a source-of-funds declaration.
2. They screen the customer by hand against lists such as OFAC and the UN by searching websites, or skip screening.
3. Each month, the compliance officer compiles transactions over the threshold into the UIF capturador format and submits it.
4. Once a year, or when an inspection is announced, a consultant writes or updates the risk self-assessment and the manual and assembles training evidence.
5. During a risk-based inspection, staff hunt through folders for customer files and proof that monitoring took place.

**Pain:**
Inspections create a deadline and the risk of sanctions. The pain is heaviest for businesses that registered as a formality and have never been examined. Evidence that pain is high: the 2026 shift to risk-based supervision [V]. Banks such as Ficohsa publish APNFD FAQs because they make APNFD customers prove they comply before opening or keeping accounts [V]. This is a second, commercial enforcement channel: losing the bank account. How often penalties are actually imposed is **unverified**.

**Existing solutions:**
- Local AML consultants and law firms that write manuals and act as compliance officers [U]. This is the main substitute.
- Regional AML software for regulated financial institutions (for example list-screening and monitoring suites sold to cooperatives and banks) [U]: priced and built for banks, not for car lots.
- Excel templates and the UIF's own capturador (free, but it only handles report formatting).
- Generic LatAm KYC/ID verification APIs [U].
I did **not** find any Honduran software aimed at APNFD businesses. That is a single-search result and does not prove there is none.

**The gap:**
No tool joins the per-transaction customer file, the list screening, the monthly UIF capturador output and the evidence binder an inspector asks for, at a price a pawn shop or a 3-person real-estate office will pay.

**Possible product:**
A Spanish-language web/mobile app. Staff photograph the ID, fill a short customer form per deal and get automatic list screening. The app then produces the monthly UIF report file and keeps an inspection-ready file per customer, with logs of risk ratings and training.

**MVP:**
One vertical (used-car dealers or real estate): a per-deal customer intake form, OFAC/UN list screening, export to the UIF capturador layout, and a one-click "inspection binder" PDF.

**Pricing hypothesis:**
USD 30–80 per month per business; USD 150–300 per month for consultancies that manage 10+ clients. Estimate only.

**How to find first customers:**
- The URMOPRELAFT/CNBS APNFD registry. Whether a public list is downloadable is **unverified**.
- Car-dealer and real-estate associations in Tegucigalpa and San Pedro Sula, and chambers of commerce (CCIT, CCIC) [U].
- Local AML consultants as a reseller channel: they already have the clients and would benefit from cheaper delivery.

**Risks:**
- Supervision may be light-touch in practice, so businesses stay with paper.
- Thresholds, the report format and the capturador may change without notice.
- Low ability to pay among small informal businesses.
- Consultants may see the tool as a competitor.
- The total number of registered APNFD businesses is unknown. It could be only a few thousand [U].

**Kill condition:**
Interviews with about 10 registered APNFD businesses show that (a) none has been inspected or warned since March 2026, or (b) consultants already provide a template pack for under about USD 20 per month.

**Score:** 5/10

**Sources:**
- Circular UIF No. 1-2026, start of risk-based supervision: https://urmoprelaft.cnbs.gob.hn/wp-content/uploads/2026/02/CIRCULAR_UIF-_No._1-2026_INICIO_SUPERVISION_BASADA_EN_RIESGOS.pdf
- Lineamientos Función de Cumplimiento (UIFOP-DA-98-2024): https://urmoprelaft.cnbs.gob.hn/wp-content/uploads/2024/05/UIFOP-DA-98-2024-Lineamientos-Funcion-Cumplimiento-1.pdf
- Ley para la Regulación de APNFD: https://pplaft.cnbs.gob.hn/wp-content/uploads/2017/05/LEY-PARA-LA-REGULACION-DE-APNFD.pdf
- Reglamento APNFD: https://www.bcv.hn/wp-content/uploads/2019/12/Reglamento-de-la-Ley-para-la-Realización-de-Actividades-y-Profesiones-No-Financieras-Designadas.pdf
- CNBS circular on the new UIF capturador: https://pplaft.cnbs.gob.hn/wp-content/uploads/2020/07/Circular-Nuevo-Capturador-UIF.pdf
- Ficohsa APNFD FAQ: https://www.ficohsa.hn/content/dam/grupo-ficohsa-site/honduras/usuario-financiero/faq-actividades-profesiones-no-financieras-designadas.pdf

---

### Opportunity: EUDR lot-assembly and due-diligence packs for coffee intermediaries and small exporters

**Industry:**
Coffee: intermediaries (*intermediarios*), cooperatives and small exporters.

**Buyer:**
The operations or quality manager at cooperatives and small or mid-size exporters, and the larger *intermediarios* who aggregate cherry and parchment coffee from many farms.

**Trigger / Why now:**
- **EUDR application.** The EU postponed it to 30 Dec 2026 [V], with smaller operators later. Industry press says that from January 2027 only coffee from land not deforested after 31 Dec 2020 can enter the EU [V].
- **National geolocation campaign.** SAG, IHCAFE and ICF are pushing to geolocate coffee farms by 31 Dec 2026, aiming to cover more than 50% of coffee farming. The agreements were signed in Aug–Sep 2026 [V].
- **Market exposure.** Europe buys about 55% of Honduran coffee [V].

**Current workflow:** [U, inferred]
1. The intermediary buys coffee from dozens to hundreds of farmers per season and writes paper or Excel receipts.
2. The exporter must link each export lot to plot polygons and a deforestation check. Today that means asking the IHCAFE registry or NGO projects for geodata and merging spreadsheets by hand.
3. The exporter emails EU importers geolocation files (GeoJSON) and declarations in each buyer's own format.
4. Mixed lots (blending coffee from several farms) break the chain. Today these exceptions are handled by hand.

**Pain:**
Losing access to the EU market (55% of exports) is existential. Daily Coffee News (July 2026) calls EUDR a "massive challenge" for the sector [V]. Mongabay (May 2026) reports a risk of excluding smallholders [V]. The chain is long: about 120,000 producers, 500+ intermediaries and 81 exporters [V].

**Existing solutions:**
- **IHCAFE national georeferencing platform.** The CORE-IHCAFE ecosystem includes a mobile app, backend and APIs, harvest documentation and a "first phase of a system for exporters", tendered through UNGM [V]. This is the main substitute and is free to the sector.
- **GrainChain** (commodity traceability, active in Honduras) [V].
- **CIAT/Alliance Bioversity open-source traceability.** It was used for the first EUDR-aligned Honduran shipment; AgStack/TraceFoodChain are related open-source efforts [V].
- TechnoServe, GIZ and Solidaridad projects that fund free tools for cooperatives [V].
- Importers' own platforms, where buyers push their own portal down to suppliers [U].

**The gap:**
The state platform covers the farm and plot registry. The likely remaining gap is the **intermediary layer**: per-purchase receipts linked to IHCAFE plot IDs, mass balance across blended lots, and one-click output in each EU buyer's format. This depends on IHCAFE's exporter module not covering intermediaries and not offering an open API. Both points are **unverified**.

**Possible product:**
A mobile purchase-receipt app for intermediaries, keyed to IHCAFE plot IDs. It tracks lot assembly and mass balance and produces each buyer's EUDR due-diligence data pack (GeoJSON plus declarations).

**MVP:**
Excel/CSV import of purchases plus the IHCAFE plot export. A lot builder with mass-balance checks. GeoJSON and PDF pack output for two or three major EU buyers' formats.

**Pricing hypothesis:**
USD 100–300 per month per exporter or cooperative during the season, or about USD 0.50–2 per bag-lot document pack. Estimate only.

**How to find first customers:**
- IHCAFE's list of licensed exporters and intermediaries [U].
- Cooperatives that exhibited at CAFEXPO 2026 (COCCAL, COCABEL, PROEXO, CAFICO, COCAOL, COAQUIL) [V].
- Specialty buyers' sourcing teams.

**Risks:**
- The free state platform plus donor-funded tools crowd out paid software.
- Only 81 exporters means a tiny ceiling.
- EUDR could be delayed or simplified again (a simplification review is under way [U]).
- Larger exporters use buyer or enterprise tools.

**Kill condition:**
IHCAFE's exporter module (or GrainChain or donor tools) already lets intermediaries register purchases against plot IDs and export buyer-ready packs at little or no cost. Alternatively, the EU confirms a further delay or a "low-risk country" simplification that removes plot-level requirements.

**Score:** 4/10

**Sources:**
- SAG, georeferencing campaign (Aug 2026): https://prensa.sag.gob.hn/2026/08/27/honduras-acelera-la-georreferenciacion-de-fincas-de-cafe-para-garantizar-exportacion-a-la-union-europea/
- SAG–IHCAFE agreement (Sep 2026): https://prensa.sag.gob.hn/2026/09/03/gobierno-unifica-esfuerzos-con-ihcafe-para-garantizar-la-trazabilidad-y-exportacion-del-cafe-hondureno-al-mercado-europeo/
- UNGM tender, IHCAFE georeferencing platform: https://www.ungm.org/Public/Notice/311148
- La Prensa, traceability for palm, coffee and cocoa: https://www.laprensa.hn/economia/palma-cafe-cacao-aceleran-trazabilidad-mantener-mercado-europeo-AM31685775
- El Heraldo, EU extension: https://www.elheraldo.hn/brandedcontent/deinteres/cafe-honduras-europa-exportacion-prorroga-comercio-EL28546651
- Daily Coffee News (Jul 2026): https://dailycoffeenews.com/2026/07/22/eudr-provides-massive-challenge-to-the-vital-honduras-coffee-sector/
- Mongabay (May 2026): https://news.mongabay.com/2026/05/eu-deforestation-law-risks-leaving-honduran-coffee-farmers-behind/
- CIAT open-source traceability shipment: https://alliancebioversityciat.org/stories/honduran-coffee-shipment-first-align-europes-upcoming-deforestation-rules-using-open-source
- Sustainable Supply Chains, shared infrastructure: https://www.sustainable-supply-chains.org/news/a-shared-infrastructure-for-traceable-coffee-honduras-takes-a-bold-step-toward-eudr-compliance/
- CAFEXPO 2026 cooperatives: https://www.comunicaffe.com/seven-coffee-cooperatives-and-exporters-took-the-stage-at-cafexpo-2026-in-honduras/

---

## Rejected after competitor research

- **Customs-broker re-entry tool (DUCA / SARAH WEB 2.0).** The state system is said to be used by about 80% of the logistics chain, and Aduanas is digitising declarations itself. I found no evidence of a third-party integration gap. Killed by: the state system, SARAH WEB 2.0. Sources: https://www.latribuna.hn/2025/12/22/aduanas-acelera-la-fluidez-del-comercio-con-tramites-digitales/ and https://www.elheraldo.hn/honduras/declaracion-aduanera-ahora-sera-formato-digital-honduras-segun-autoridades-OJ29758574
- **Payroll contributions (IHSS / RAP / INFOP).** The obligations are stable and there is no 2026 portal trigger. EOR and payroll vendors (Rivermate, Mercans, local payroll software [U]) cover it. Source: https://rivermate.com/es/guias/honduras/impuestos
- **E-invoicing exception desk (SAR).** E-invoicing is not yet mandatory at scale. Local vendors such as Koddix, Zafra Cloud, FacturaSimple and NaT Suite are already positioning for it. Revisit only if the SAR publishes a mandatory calendar. Sources: https://www.koddix.com/blog/facturacion-electronica-honduras , https://tiempo.hn/sar-analiza-factura-electronica-en-el-pais/ , https://www.sar.gob.hn/2026/08/sar-y-rnp-suscriben-convenio/

## Attractive problem, poor distribution

- **Shrimp and melon export certification (SENASA).** The pain is real, but there are only a handful of large exporters and SENASA's systems are opaque. Too few buyers for a solo product. Source: https://www.elheraldo.hn/honduras/gobierno-fortalece-sanidad-camaron-hondureno-facilita-acceso-mercados-internacionales-FL31097893
- **Coffee EUDR at the farmer level.** About 120,000 smallholders, who will not pay; donors and the state already fund this layer.

## Too competitive

- **Coffee EUDR traceability at the exporter level** is close to this category: a free IHCAFE platform, GrainChain, open-source tools and donor projects. It is kept above only as a narrow intermediary-layer hypothesis.

## Not assessed (search budget exhausted)

ARSA sanitary registration renewals, controlled-drug reporting by pharmacies, the environmental licensing portal (MiAmbiente/SINEIA), maquila export-regime reports (RIT/ZOLI), and funeral homes / RNP death registration.
