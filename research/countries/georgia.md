# Georgia (country, South Caucasus): opportunity research

**Researched:** 2026-10-05. Small market (about 3.7M people), so a 10-search budget, all of it used.
**Accessibility:** A foreign solo founder can sell software here. Georgia is not under US, EU or UK sanctions on software or IT services. The internet is open, and businesses can pay by card or bank transfer through TBC Bank and Bank of Georgia. Whether Stripe supports Georgia as a merchant country is *unverified*. Selling from a foreign entity through Paddle or Lemon Squeezy is the likely route. Two cautions:
- EU accession has stalled since 2024. That weakens the "EU approximation" trigger that would otherwise push new compliance rules into Georgian law.
- English search results are heavily polluted by the US state of Georgia. Several searches came back with US data. This report uses only results that are clearly about the country.

**Bottom line:** I found no strong standalone opportunity. The market is small. The core compliance workflows (RS.ge invoices and waybills, payroll, declarations) are already served well by local ERP and accounting vendors. The newer regulatory triggers (EPR, OSH, food safety) are real, but they create work mainly for a few hundred obliged firms, or consultants already absorb it. The three ideas below are weak (score 3–4) and are best treated as add-on modules for a regional or EU-approximation compliance product, not as standalone businesses.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Accountants / all SMEs | RS.ge e-invoices, waybills, declarations, bank reconciliation | Too competitive | Balance, FINA and Apricot (AS-Accountant) already offer full RS.ge and bank integration |
| Employers (construction, manufacturing, all sectors) | Occupational-safety (OSH) documentation, labour-safety specialist duties, inspection readiness | Weak candidate | Enforcement is heavy (7,111 inspections and about 25k offence reports in 2025), but this is document generation that consultants already do cheaply |
| Producers / importers of packaging and electronics | EPR data reporting (EEE Decree No. 335 of 7 Aug 2025; packaging EPR in development) | Weak candidate | Few obliged firms, PROs collect the data, and the packaging scheme is not live yet |
| Hazelnut exporters | Lot-level aflatoxin testing and EU export dossier | Weak candidate | Real pain (EU rejections), but only dozens of buyers who are seasonal and price-sensitive |
| Food processors | HACCP and traceability under the National Food Agency (NFA) | Rejected | Small primary, alcohol and bakery producers are exempt from HACCP; consultants and generic tools cover the rest |
| Pharmacies | E-prescriptions, psychotropic dispensing rule change (from 1 April) | Rejected | The state e-prescription system and large chains with in-house IT leave no gap |
| Accountants / auditors / notaries | AML/CFT obligations, reporting to the Financial Monitoring Service | Rejected | Low frequency, a small pool of obliged entities, and generic AML screening tools exist |

---

### Opportunity: OSH Inspection-Readiness Pack for Georgian SMEs

**Industry:**
Construction subcontractors, small manufacturers, warehouses, and any employer under the Organic Law on Occupational Safety

**Buyer:**
The owner or general manager of a company with 20–250 employees. Often the in-house labour-safety specialist the law requires, who usually does this as a second job.

**Trigger / Why now:**
The Organic Law on Occupational Safety requires every employer to appoint at least one labour-safety specialist (or a safety department) and to run a preventive system. The Labour Inspection Service carried out 7,111 inspections in 2025 and drew up about 25,000 administrative offence reports. Inspection pressure is high, although the use of fines fell by 38%.

**Current workflow:**
1. Hire an external OSH consultancy, or train an employee as labour-safety specialist.
2. Write a risk assessment, instruction logs, briefing registers and PPE issuance records, mostly in Word, Excel or on paper.
3. Gather signatures from workers on paper.
4. Scramble to assemble the documents when an inspector arrives, then answer the inspector's prescriptions by their deadlines.

**Pain:**
Very high inspection volume relative to the economy (about 25k offence reports in one year). Inspectors issue corrective prescriptions with deadlines. Small firms lack in-house expertise.

**Existing solutions:**
- OSH consultancies and labour-safety training centres, which are numerous (specific firm names *unverified*)
- Generic Word and Excel templates
- HR modules in Balance ERP (HR and payroll), which do not cover OSH
- International EHS SaaS such as SafetyCulture, which is not localised to Georgian legal forms (*unverified*)

**The gap:**
No Georgian-language tool, as far as searches show, that keeps the legally required registers current per worker. It would track briefings, PPE and training expiry, collect e-signatures, and produce an inspector-ready folder plus a tracker for the inspector's prescriptions.

**Possible product:**
A Georgian-language OSH register and inspection-readiness app: worker list, required briefings and trainings, digital signatures, and a single "inspection folder" export.

**MVP:**
Worker registry, briefing and training log with expiry alerts, e-signature on mobile, and a PDF export of the registers.

**Pricing hypothesis:**
GEL 50–150 per month (about USD 18–55) per company. Willingness to pay is limited because a consultant's retainer often already covers this. *Estimate.*

**How to find first customers:**
- OSH consultancies, as a white-label tool they reuse across clients (the best channel)
- Construction-company listings and public procurement suppliers (tenders.procurement.gov.ge)
- Partnerships with ERP resellers

**Risks:**
- Consultants may see the tool as a threat rather than an aid.
- The fine trend is down, which reduces urgency.
- Low ARPU in a small market.
- A Georgian-language UX is mandatory.

**Kill condition:**
A local OSH SaaS already exists, or interviews show consultants bundle the documentation into a fee under GEL 100 per month.

**Score:** 4/10

**Sources:**
- https://parliament.ge/en/print/news/ekonomikuri-politikis-komitetma-shromis-inspektsiis-samsakhuris-ufross-mousmina (2025 inspection statistics)
- https://matsne.gov.ge/en/document/view/4486188 (Organic Law on Occupational Safety)
- https://ge.andersen.com/?p=6716 (labour-safety specialist duty)
- https://balance.ge/bugalteristvis (Balance HR/ERP scope)

---

### Opportunity: Hazelnut Export Lot Dossier and Aflatoxin Pre-Shipment Tracker

**Industry:**
Agricultural exporters (hazelnut processors and exporters)

**Buyer:**
Quality / export manager at a hazelnut processor or exporter (about 30–80 firms, *estimate*)

**Trigger / Why now:**
Exports reached 18,200 t (USD 119.7M) for Aug 2024 to Jul 2025, mostly to the EU. The EU rejected 17 shipments at its border in 17 months, about 75% of them for aflatoxins. More rejections were reported in the 2025/26 season while volumes rose about 15%. Whether Georgian hazelnuts are on the EU 2019/1793 increased-checks list is *unverified*.

**Current workflow:**
1. Buy in-shell nuts from many smallholders.
2. Crack and sort, then send lot samples to a lab for aflatoxin testing.
3. Compile lab certificates, the phytosanitary certificate, origin documents and buyer specifications per shipment, by email and Excel.
4. Handle disputes and returns when EU border results differ from pre-shipment results.

**Pain:**
Each rejected consignment means product returned or destroyed, which can be a five-figure USD loss (*estimate*). Buyers also demand traceability back to the farmer.

**Existing solutions:**
- In-house Excel
- BRC/IFS certification systems at the larger processors (for example Geo-Nuts)
- Generic food-traceability SaaS
- Buyers' own supplier portals (Ferrero and other large buyers, *unverified*)

**The gap:**
Linking farmer intake, the lab result per lot, and the documents per shipment, then flagging high-risk lots before dispatch.

**Possible product:**
Lot-genealogy and shipment-dossier tool for nut exporters (farmer intake → lot → lab result → shipment pack).

**MVP:**
Spreadsheet import of intake and lab results, a lot-to-shipment mapping, and a PDF dossier per container.

**Pricing hypothesis:**
USD 150–400 per month per exporter, used seasonally. *Estimate.*

**How to find first customers:**
Georgian Hazelnut Growers Association, Enterprise Georgia exporter lists, and Geostat or customs exporter data.

**Risks:**
- The buyer pool is tiny.
- The largest players use buyer-mandated systems.
- Seasonal churn.
- The same product would sell better in Turkey (the world's largest hazelnut producer), so Georgia works only as an add-on.

**Kill condition:**
Fewer than 20 independent exporters, or the main EU buyers impose their own traceability portals.

**Score:** 3/10

**Sources:**
- https://1tv.ge/lang/en/news/georgias-hazelnut-exports-surge-18200-tons-shipped-from-august-2024-to-july-2025-dominantly-to-eu/
- https://east-fruit.com/en/news/aflatoxins-remain-a-major-problem-for-georgian-hazelnuts-despite-recent-improvements
- https://cropgpt.ai/georgia-hazelnuts-rising-export-volumes-mask-structural-phytosanitary-constraints (secondary source)

---

### Opportunity: EPR Placed-on-Market Data Preparation for Importers

**Industry:**
Importers and distributors of electrical and electronic equipment (and packaging later)

**Buyer:**
Finance or compliance manager at an importer or distributor that is an obliged producer

**Trigger / Why now:**
Government Decree No. 335 (7 Aug 2025) updated the rules on waste electrical and electronic equipment (WEEE). Packaging EPR is being designed with EU4Environment and UNDP support, and UNDP opened an EPR implementation call in April 2026. The National Environmental Agency accredits the EPR organisations (PROs). The electronic waste-reporting forms date from Ministerial Order 2-11 (2018).

**Current workflow:**
1. Export import data from customs and ERP.
2. Map HS codes and SKUs to EPR categories and weights by hand.
3. Report quantities placed on the market to the PRO or ministry and pay fees.

**Pain:**
Mapping HS codes to categories and weights is manual and error-prone. The regulation is new, so obliged firms are still unsure how to classify.

**Existing solutions:**
- PROs that help their members report
- Accounting firms
- Excel
- ERP stock data (Balance, FINA)

**The gap:**
An automatic HS-code and SKU-to-EPR-category-and-weight mapper, fed from customs declarations and ERP stock movements.

**Possible product:**
Upload customs and ERP data, get classified EPR quantities and a ready-made submission file.

**MVP:**
Excel template, an HS-to-category mapping table and an export file.

**Pricing hypothesis:**
USD 50–150 per month, or a per-report fee. *Estimate.*

**How to find first customers:**
PRO member lists and the National Environmental Agency registry of accredited EPR organisations.

**Risks:**
- Reporting may be annual only.
- PROs may provide this for free.
- The packaging scheme timeline is uncertain.

**Kill condition:**
The PROs already offer member portals with classification, or reporting is annual and involves fewer than about 300 firms.

**Score:** 3/10

**Sources:**
- https://www.pravsky.com/georgia-amends-regulation-electronic-waste-management (Decree 335)
- https://www.undp.org/georgia/news/circular-economy-call-for-proposals
- https://www.eu4waterdata.eu/en/blog-news/32-georgia/326-empowering-producers-for-sustainable-waste-management-in-georgia.html
- https://leap.unep.org/en/countries/ge/national-legislation/order-no-2-11-2018-minister-environment-and-agriculture-georgia
- https://www.undp.org/ka/node/94806

---

## Rejected after competitor research

- **RS.ge invoice and waybill reconciliation for accountants.** Killed by Balance, which processes and declares waybills and invoices in under an hour, auto-imports bank statements and has full RS.ge integration. FINA and Apricot Systems (AS-Accountant, AS-Trade) also offer RS.ge uploads. Sources: https://balance.ge/en/sruli-integracia-rs-gestan , https://fina.ge/sabugaltro-programa/en , https://www.gegidze.com/post/digital-bookkeeping-tools-and-accounting-software-best-suited-for-georgian-companies
- **Pharmacy psychotropic e-prescription compliance.** Killed by the state e-prescription system run by the Ministry of Health, and by a pharmacy market dominated by large chains with in-house IT (chain dominance is *from background knowledge, not verified in this session*). Source: https://frontnews.ge/en/news/phsikotropuli-medikamentebis-elektronuli-retseptis-gatsemis-tsesshi-tsvlilebebi-shevida-akhali-tsesi-pirveli-aprilidan-amokmeddeba
- **HACCP / food-safety documentation.** Killed by the HACCP exemption for small primary, alcohol and bakery producers, and by consultants and generic HACCP tools for the remainder. Source: https://matsne.gov.ge/ka/document/view/6571675
- **AML/CFT compliance for accountants and notaries.** Killed by low frequency, the small number of obliged entities, and generic screening tools such as Sanction Scanner that already market AML compliance in Georgia. Sources: https://sanctionscanner.com/aml-guide/anti-money-laundering-aml-in-georgia-78 , https://coe.int/en/web/tbilisi/-/georgian-accountants-and-auditors-learn-about-anti-money-laundering-countering-financing-of-terrorism-compliance-and-the-risks-associated-with-the-sec

## Attractive problem, poor distribution

- **Hazelnut export dossier.** The pain is real (EU aflatoxin rejections), but there are only dozens of buyers and the work is seasonal. It would work better as an add-on to a Turkey product.

## Too competitive

- RS.ge accounting, waybill and VAT workflows (Balance, FINA, Apricot).
- Generic payroll and HR (Balance HR modules and the local ERPs).

## Inaccessible markets

- None. Georgia is accessible to a foreign solo founder.
