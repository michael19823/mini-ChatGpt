# Kyrgyzstan: Opportunity Research

Research date: 2026-10-04. Treated as a small market: 10 WebSearch calls, mostly in Russian (the language used for business and tax administration). WebFetch was not used. Facts come from search-result summaries of the cited pages. Anything not confirmed there is marked *unverified* or *estimate*.

## Accessibility check

**Accessible, with caveats.** Kyrgyzstan is not under sanctions as a country, and selling software there is not prohibited. However:
- **Banks to avoid:** In its 20th Russia package (approved 23 Apr 2026, effective 14 May 2026), the EU added Keremet Bank, Capital Bank of Central Asia and the TengriCoin crypto platform. The US and UK had already sanctioned both banks. A foreign founder must not take payment through these banks. (https://en.fergana.agency/news/146624/, https://www.akchabar.kg/en/news/es-vvodit-zapret-na-tranzaktsii-s-dvumya-bankami-kirgizstana-v-ramkakh-20-go-paketa-sanktsij-cauowvxmzxzmedfr)
- **Anti-circumvention tool:** For the first time, the EU applied this tool to a specific country, Kyrgyzstan. It bans EU supply of CNC machine tools and telecom equipment to Kyrgyzstan. It does not restrict SaaS.
- **Practical constraints:** The market runs in Russian and on the 1C ecosystem. Everything ties into the State Tax Service (GNS/ГНС) systems: ESF (e-invoices), ETTN (e-waybills) and Teksher (product marking). Local-currency revenue per customer is low.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Importers and retailers of household appliances (fridges, washing machines, TVs) | Reconciling stock under the EAEU import traceability system in ESF 2.0 (Cabinet resolution No. 613, 14 Sep 2026) | **Candidate** | New mandatory "virtual warehouse" whose stock must match physical stock (deadline 1 Oct 2026). Exceptions are manual |
| Fuel stations and fuel/coal distributors | ETTN kept for oil products; ESF 2.0 mechanisms mandatory for oil, coal, alcohol and tobacco | **Candidate (merged with the row above)** | Same ESF 2.0 virtual-warehouse pain, with every-transaction frequency |
| Beer and tobacco producers, importers and distributors | Teksher marking codes plus the ETTN/ESF 2.0 double regime | Candidate (weak) | Mandatory and frequent, but the large players already use 1C or integrators |
| Small producers of national drinks (bozo, maksym, jarma) and baby food | New mandatory marking from 1 Jan 2027 | Candidate (weak) | Real new obligation, but tiny buyers with low ability to pay |
| Exporters, freight forwarders and re-export traders | Proving to banks that counterparties and goods carry no sanctions risk | Candidate (weak) | Strong why-now, but buyers are reputationally risky and banks drive procurement |
| General SMEs | Integrating ESF/ETTN with accounting systems | **Rejected** | 1C:Бухгалтерия для Кыргызстана has a built-in ESF exchange service; 1C KATO sells ESF/ETTN plans; Tumar App sells an ESF/ETTN API |
| Pharmacies and drug distributors | Drug traceability and marking; EAEU re-registration | **Rejected (poor distribution / state system)** | The state traceability system has existed since 2023, and EAEU re-registration is a regulatory crisis rather than a software gap |
| Traders of goods that no longer need e-waybills | ETTN generation | **Rejected** | ETTN stopped being mandatory for most goods on 1 Sep 2026 |

## Opportunities

### Opportunity: ESF 2.0 "virtual warehouse" reconciliation and exception desk

**Industry:**
Importers, wholesalers and retail chains selling traceable goods: household appliances (fridges and freezers, washing machines, TVs and other video equipment). Also distributors of oil products, coal, alcohol and tobacco, for whom ESF 2.0 mechanisms are mandatory.

**Buyer:**
The chief accountant or owner of a small or medium importer, wholesaler or appliance chain. Also the accounting outsourcers who serve them.

**Trigger / Why now:**
- 1 Sep 2026: ETTN was abolished for most goods (kept for oil products, alcohol and tobacco).
- At the same time, the traceability system for goods imported into the EAEU went into production. ESF 2.0 now carries the e-waybill function for these goods and keeps a "virtual warehouse" of stock movements.
- A six-month ESF 2.0 pilot started 1 Sep 2026. Its mechanisms are mandatory for oil, coal, alcohol and tobacco.
- Cabinet resolution No. 613 (14 Sep 2026) defines the traceable goods.
- Businesses had to bring virtual stock in line with physical stock by **1 Oct 2026**.

**Current workflow:**
1. Goods are received and sold in 1C or another accounting system, or in Excel for small traders.
2. Each movement must also be reflected in ESF 2.0. Small traders key this in by hand, and many 1C configurations may not yet support the new ESF 2.0 traceability fields (*unverified*).
3. Periodically, someone exports the virtual stock from the GNS portal and compares it with the warehouse count and the accounting records in a spreadsheet.
4. Each mismatch is fixed by hand with corrective documents: missing incoming invoices, wrong item codes, items not yet in the GNS catalogue.

**Pain:**
- Business associations say the ESF 2.0 pilot creates "excess transactions": processors must book raw materials and finished goods separately.
- Adding goods to the GNS catalogue is slow, which holds up shipments and risks fines.
- Business asked the government to extend the ESF/ETTN pilot because of cost and price-rise fears.
- The 1 Oct 2026 stock reconciliation deadline is a hard, one-off event that will be followed by continuous drift.

**Existing solutions:**
- 1C:Бухгалтерия для Кыргызстана 3.x, which has an ESF exchange service from version 3.1.9.1.
- 1C franchisees such as 1C KATO, which sell paid ESF/ETTN service plans.
- Tumar App, which offers an API for ESF, ETTN and tax reporting.
- The free GNS ESF portal (esf.salyk.kg) and the Salyk app.
- Accountants doing the work by hand.

**The gap:**
The incumbents move documents. The gap is **reconciliation and exceptions**:
- comparing three lists (accounting stock, ESF 2.0 virtual stock and the physical count) line by line for each item code and traceability ID;
- proposing the corrective ESF documents for each mismatch;
- tracking catalogue requests that are still pending.

None of the products found advertise this. That absence is *unverified*: 1C may ship it quickly.

**Possible product:**
A web tool where the user uploads (or connects via API) the ESF 2.0 virtual-stock export and the 1C or Excel stock list. It matches them, flags each discrepancy by type, and creates a draft list of corrective documents with a running audit log. It can later add a check that compares each sale against the virtual-stock balance before the sale is posted.

**MVP:**
Excel/CSV upload of both stock lists, then a matching engine, a discrepancy report and the corrective actions per line. Appliances only, for the first version.

**Pricing hypothesis:**
About 2,000–5,000 KGS per month (about USD 25–60) per legal entity (*estimate*). Accounting outsourcers would pay per client.

**How to find first customers:**
- Appliance importers, through customs broker networks and the large Bishkek appliance markets and chains.
- 1C franchisees as resellers, which may also make them a competitor.
- Accounting firms and the business associations that lobbied against the ESF/ETTN pilot.
- GNS webinars.
- There is no public registry of traceable-goods importers (*unverified*).

**Risks:**
- 1C KG or Tumar App adds a reconciliation feature.
- GNS changes formats during the six-month pilot.
- No public ESF 2.0 API, or the API only gives accredited developers access to write documents. GNS has publicly invited developers to integrate through APIs, which is a positive sign.
- The market is small. Appliance importers likely number in the hundreds (*estimate*).

**Kill condition:**
- 1C:Бухгалтерия для Кыргызстана ships a stock-versus-ESF 2.0 reconciliation report, or
- interviews show that most mismatches are fixed in under an hour per month.

**Score:** 5/10

**Sources:**
- https://economist.kg/ekonomika/2026/09/17/ettn-proslezhivaemost-tovarov/
- https://economist.kg/biznes/2026/09/15/proslezhivaemost-tovarov-1-oktyabrya/
- https://economist.kg/biznes/2026/09/18/esf-2-pilot-kyrgyzstan/
- https://kaktus.media/doc/552367_holodilniki_televizory._dlia_kakih_tovarov_vvedyt_proslejivaemost_v_esf_2.0.html
- https://www.tazabek.kg/news:2536020
- https://economist.kg/ekonomika/2026/04/02/biznies-prosit-prodlit-pilot-po-esf-i-ettn-opasaias-rosta-tsien-na-produkty-v-kyrghyzstanie/
- https://economist.kg/biznes/2026/08/19/esf-2-0-otmena-ettn/
- https://economist.kg/dengi/2025/01/28/naloghovaia-sluzhba-kyrghyzstana-prizvala-razrabotchikov-po-k-intieghratsii-biznies-sistiem-s-ettn-i-esf/
- https://1c-kato.kg/services/tarifnye-plany-esf/
- https://tumar.app/business

### Opportunity: Sanctions-risk evidence pack for Kyrgyz exporters and forwarders (bank-facing)

**Industry:**
Foreign trade: re-exporters, freight forwarders and customs brokers.

**Buyer:**
The owner or finance director of an SME trader or forwarder that keeps getting asked by its bank for counterparty and goods justifications.

**Trigger / Why now:**
- EU 20th package (April 2026): first use of the anti-circumvention tool against Kyrgyzstan.
- Kyrgyz state banks stopped working with 131 companies because of sanctions risk (June 2026).
- The Ministry of Justice terminated 50 companies at once (May 2026), then 19 more (Aug 2026), under a new interagency mechanism. About 40 more companies are in the risk zone.
- The EU held a sanctions seminar in Bishkek for companies and logistics operators (June 2026).

**Current workflow:**
1. The bank asks for documents on a payment.
2. The trader manually checks the counterparty against EU, US and UK lists and checks HS codes against the EU high-priority goods lists.
3. The trader assembles contracts, end-use letters and transport documents into a PDF.
4. The bank asks follow-up questions and the payment is delayed.

**Pain:**
- Accounts are closed and payments are delayed.
- Companies can be forcibly liquidated.

The evidence is strong but indirect: it comes from news reports, not from user complaints.

**Existing solutions:**
- Global screening tools: Dow Jones, LSEG World-Check, Castellum.AI and cheap API tools such as sanctions.io. Their pricing and local use are *unverified*.
- Banks' own compliance teams.
- Local law and consulting firms (*unverified*).

**The gap:**
An affordable, Russian-language tool that combines list screening, HS-code-to-high-priority-goods checks and a bank-ready evidence file for each shipment.

**Possible product:**
For each shipment, the tool screens counterparties and checks HS codes against the EU high-priority goods list. It then outputs a standard due-diligence dossier for the bank.

**MVP:**
HS-code checker plus open-list name screening, with PDF export.

**Pricing hypothesis:**
USD 50–150 per month, or per-shipment pricing (*estimate*).

**How to find first customers:**
- Customs broker associations.
- Bank relationship managers, as a referral channel.
- Attendees of EU or chamber of commerce seminars.

**Risks:**
- **High reputational and ethical risk:** some buyers are actively trying to evade sanctions.
- Banks may require their own tools.
- Commodity screening data can be copied.
- Legal liability.

**Kill condition:**
- Banks will not accept self-produced dossiers, or
- the customer base turns out to be mainly firms evading sanctions.

**Score:** 4/10

**Sources:**
- https://en.fergana.agency/news/146624/
- https://economist.kg/ekonomika/2026/06/23/gosbanki-kr-sankcionnye-riski-131/
- https://economist.kg/vlast/2026/08/18/likvidatsiya-kompaniy-sanktsii/
- https://economist.kg/ekonomika/2026/07/28/kr-zakryli-kompanii-sanktsii-es-40-v-zone-riska/
- https://timesca.com/kyrgyzstan-orders-50-companies-to-cease-activity-over-sanctions-risks/
- https://timesca.com/eu-sanctions-seminar-in-bishkek-puts-kyrgyzstans-russia-trade-under-scrutiny/

### Opportunity: Marking-code workflow for small producers newly subject to marking (2027)

**Industry:**
Small beverage producers (bozo, maksym, jarma) and baby-food producers and importers.

**Buyer:**
The owner of a small beverage workshop, or a baby-food importer.

**Trigger / Why now:**
Mandatory marking starts 1 Jan 2027. Sales of unmarked stock are phased out about six months after the obligation starts.

**Current workflow:**
1. Order marking codes in Teksher, the national marking system run by Alfa Telecom (MegaCom).
2. Print and apply the codes.
3. Report codes as put into circulation.
4. Reflect the codes in ESF and ETTN documents.

**Pain:**
- These are new obligations for very low-tech producers.
- The marking system has had outage periods.

**Existing solutions:**
- The Teksher portal (free, operated by the state).
- 1C marking modules.
- Label printers and integrators.
- More than 2,000 producers and importers are already registered in the marking system.

**The gap:**
A simple ordering-to-printing-to-reporting flow for micro-producers that do not use 1C. The size of this gap is *unverified*.

**Possible product:**
A mobile-first helper that orders codes, generates print files and confirms codes as put into circulation.

**MVP:**
A wizard for producers of a single product group.

**Pricing hypothesis:**
USD 10–30 per month (*estimate*). Ability to pay is low.

**How to find first customers:**
- Teksher registrations.
- Bazaars.
- The Chamber of Commerce and Industry.

**Risks:**
- Teksher improves its own interface.
- Producers ask for delays.
- Tiny budgets.

**Kill condition:**
- Teksher offers a free mobile app that covers the flow, or
- the 2027 date is postponed.

**Score:** 3/10

**Sources:**
- https://economist.kg/ekonomika/2024/03/27/kabmin-prodil-pilotnyi-proiekt-po-markirovkie-alkogholia-i-tabaka/
- https://economist.kg/novosti/2020/06/25/megacom-stal-operatorom-nacionalnoj-sistemy-markirovki-tovarov/
- https://economist.kg/biznes/2024/04/17/za-piervyi-kvartal-2024-ghoda-v-kr-vydano-bolieie-41-mln-kodov-markirovki/
- https://www.tazabek.kg/news:2479713

## Rejected after competitor research

- **ESF/ETTN integration with accounting systems:** killed by 1C. Its built-in "Взаимодействие с ИС ЭСФ" service in Бухгалтерия для Кыргызстана, the paid ESF/ETTN plans from 1C KATO and the Tumar App ESF/ETTN API already cover it.
  - https://1c.kg/support/services.php
  - https://1c-kato.kg/services/ettn-esf/
  - https://tumar.app/business
- **ETTN generation tool:** made obsolete when ETTN stopped being mandatory for most goods on 1 Sep 2026.
- **Pharmacy drug traceability:** a state traceability system has been running since 2023 and is funded by market participants. The real 2026 crisis, the EAEU re-registration of about 6,000 drugs, is a regulatory problem, not a software problem.
  - https://kaktus.media/doc/476570_vnedrena_sistema_proslejivaemosti_lekarstvennyh_sredstv._kak_ona_bydet_rabotat.html
  - https://economist.kg/all/2025/02/19/kyrghyzstan-mozhiet-stolknutsia-s-krizisom-na-rynkie-liekarstv-k-2026-ghodu-tpp/

## Attractive problem, poor distribution

- **Marking for micro-producers of national drinks and baby food:** the buyers are tiny and offline, and the free state portal is the default.
- **Sanctions evidence packs:** the problem is real, but banks drive the purchase and the buyer pool carries reputational risk.

## Too competitive

- **ESF e-invoicing and accounting integration:** 1C ecosystem, 1C franchisees and Tumar App.
