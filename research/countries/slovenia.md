# Slovenia: opportunity research

Research date: 2026-10-05. Treated as a small market (2.1M people, about 12 searches used). Slovenia is an EU member state and the euro is its currency. A foreign solo founder can sell software there with no sanctions, licensing or payment barriers. Slovenian-language support and invoicing that meets the 2028 e-invoice law are the practical requirements.

**Overall verdict:** I found no top-tier standalone opportunity. Slovenia's state builds good central portals: AJPES eTurizem, IS-Odpadki with XML import, a free e-invoicing app, and CIS VET. They take away many of the "duplicate entry across fragmented systems" gaps the brief looks for. The best leads are EU-level triggers (EUDR, Regulation 2023/564 on pesticide records, PPWR) with a Slovenian implementation layer. They are better treated as a Slovenian localisation of a product serving the wider EU or CEE region (Croatia and Austria are the natural neighbours) than as a Slovenia-only business.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Timber / sawmills / wood traders | Collecting EUDR geolocation and reference data per purchase from small private forest owners | **Candidate** | Hard date of 30 Dec 2026 for timber. ZGS felling decisions hold the location data, but buyers have to re-key it per lot |
| Agriculture / spraying contractors | Electronic plant protection product (FFS) usage records (Reg. 2023/564) from 1 Jan 2026 | **Candidate (weak)** | Mandatory, but farms are tiny and paper or PDF templates from the ministry (MKGP) and the paying agency (ARSKTRP) are the substitute |
| Food / consumer-goods producers and importers | Packaging data by material for EPR and PPWR (applies from 12 Aug 2026) | **Candidate (weak)** | New "full cost" obligation, but EPR schemes and consultants do the reporting |
| Waste generators / collectors | IS-Odpadki evidence lists and the annual ODP reports | Rejected | The state system already does e-signing and XML import. Collectors already run their own software |
| Tourism / private room renters (sobodajalci) | Guest registration, tourist tax, statistics | Rejected | AJPES eTurizem already sends one submission to the police, municipalities and statistics, and accepts XML and web-service input from property management systems (PMS) |
| All B2B companies | B2B e-invoicing (ZIERDED) from 1 Jan 2028 | Too competitive | Free state app miniBlagajna, many e-invoice exchange providers, PEPPOL access points, and ERP vendors |
| All employers | Working-time records (ZEPDSV-A/B) | Too competitive | Many attendance and time-tracking vendors. ZEPDSV-B (Apr 2025) loosened the rules. Electronic records are forced only on employers already fined |
| Veterinary clinics | Reporting antimicrobial use by species to CIS VET | Rejected | Government CIS VET application. Small number of veterinary organisations |

---

### Opportunity: EUDR timber intake register for Slovenian wood buyers

**Industry:**  
Forestry / timber trade / sawmills

**Buyer:**  
Owner or office manager of a small or medium sawmill, timber trader (odkupovalec lesa), forest-contractor company or forestry cooperative that buys roundwood from many private forest owners and is the first to place that wood on the market, or the trader just after them.

**Trigger / Why now:**  
EUDR applies to timber from 30 December 2026. The micro and small enterprise delay to 30 June 2027 does not cover timber. Slovenian guidance and STA coverage say forest owners must make a one-time simplified declaration before selling wood. The ZGS felling decision (odločba o poseku) proves legality and holds the location of the planned felling, which is the key data for the EUDR due-diligence system. The Commission's 4 May 2026 simplification package still puts the full due-diligence statement on the first operator, while later operators only need to collect reference numbers.

**Current workflow:**
1. A forest owner gets marked trees and a ZGS felling decision (paper or PDF).
2. The owner sells logs to a local buyer, often a sole proprietor or small sawmill, with a delivery note or purchase invoice.
3. From 2027 the buyer must collect the owner's declaration or reference number and the plot geolocation for every purchase. The buyer then has to roll these up into its own statement or pass reference numbers downstream to larger sawmills or exporters (Austria and Italy are major buyers).
4. Today this means re-keying parcel or cadastral data from the ZGS decision into spreadsheets, or into the EU TRACES information system.

**Pain:**  
Per-purchase evidence will be required for every lot from thousands of small owners. Slovenia has hundreds of thousands of private forest owners with highly fragmented plots (estimate; I did not verify the exact count in this session). GZS ran an EUDR programme for the food and agriculture sector on 20 Nov 2025, which shows industry worry. If evidence is missing, downstream buyers (Austrian or Italian sawmills, panel makers) cannot clear the wood.

**Existing solutions:**  
Generic EUDR platforms (for example Osapiens, Preferred by Nature tools and many 2024–2025 EUDR start-ups) built for commodity importers rather than small Slovenian log buyers. The EU TRACES information system (free, manual). Wood-industry ERPs and sawmill software (local vendors; specific products unverified). FSC/PEFC chain-of-custody consultants. Spreadsheets.

**The gap:**  
Nothing found turns a ZGS felling decision plus a purchase note into the EUDR record (owner declaration reference, plot geolocation, quantity) and pushes the reference numbers to the downstream buyer. The local layer (ZGS document format, Slovenian cadastre parcel to polygon) is too small a market for international EUDR vendors to build.

**Possible product:**  
A purchase-intake app for log buyers: capture the ZGS decision (scan, or enter the parcel number), turn the cadastral parcel into geolocation, link the owner's simplified-declaration reference, log the delivered volume, and export a TRACES-ready file and downstream reference-number packs.

**MVP:**  
A web form plus OCR of ZGS decision PDFs, a lookup from parcel number to polygon using open Slovenian cadastre (GURS) data, a per-lot register, and a CSV/GeoJSON export in the TRACES format.

**Pricing hypothesis:**  
EUR 39–99 per month for small buyers. EUR 150–300 per month for sawmills buying from 100+ owners a year. A per-lot fee is an alternative.

**How to find first customers:**  
GZS Združenje lesne in pohištvene industrije (the wood and furniture industry association) and its member list, the Business Register (AJPES) filtered by NACE 16.10 (sawmilling) and 46.73 (wholesale of wood), forestry cooperatives, and the Slovenian forest owners' association (lastniki gozdov).

**Risks:**  
EUDR has been delayed twice and simplified again in May 2026, so the scope may shift once more. ZGS or MKGP could build a state tool, in line with the Slovenian pattern of central portals. Willingness to pay among small sawmills is low. The Slovenian market alone is small, so expansion to Croatia and Austria would be needed.

**Kill condition:**  
ZGS or MKGP announces that felling decisions will carry EUDR-ready geolocation and reference numbers that flow directly into TRACES. Or a further EUDR delay or simplification removes per-purchase geolocation for EU-origin timber from low-risk countries.

**Score:** 5/10

**Sources:**
- https://tax-fin-lex.si/home/novica/37431 (STA: new rules on wood sales for forest owners from year end)
- https://www.gov.si/assets/ministrstva/MKGP/PROJEKTI/EUDR/EUDR-FAQ-4th-Iteration-April-25-SL.pdf
- https://www.gzs.si/Portals/Panoga-Kmetijska-Zivilska/Program_EUDR_20.11.2025.pdf
- https://eustafor.eu/eudr-what-the-commissions-4-may-2026-simplification-package-means-for-wood-state-forests-and-non-eu-operators/
- https://www.southernpine.com/second-eudr-delay-approved-this-time-to-december-2026/

---

### Opportunity: Machine-readable FFS spray records for spraying contractors, orchards and vineyards

**Industry:**  
Agriculture: fruit growing, viticulture, hops, contract spraying

**Buyer:**  
Professional pesticide (FFS) users with a phytomedicine certificate who are registered in the register of agricultural holdings (RKG). The target is larger fruit, wine and hop holdings, and agricultural service contractors who spray for many farms and must keep records per client.

**Trigger / Why now:**  
Implementing Regulation (EU) 2023/564 requires electronic, machine-readable pesticide-use records from 1 January 2026. In the transition period (1 Jan 2026 – 31 Jan 2030), users may convert their records to the electronic format once a year. Slovenia has also tightened traceability from purchase to use under ZFfS-1A (2024) and the 2025 Pravilnik on FFS use (rules on pesticide use).

**Current workflow:**
1. The farmer or contractor fills paper or Word/PDF record templates from MKGP and ARSKTRP (the FFS form "razdelek C 2026" and the SOPO instructions).
2. Records must also back up the SOPO and CAP intervention records. A geolocated photo may replace an entry for some work operations.
3. The farmer keeps the records for three years and shows them at inspection. From 2026 they must be converted to electronic form at least yearly, and to the full format by 2030.

**Pain:**  
Duplicate record-keeping for the subsidy (SOPO) records and the pesticide-law records. Penalties come through CAP sanctions after on-site checks. KGZS (the chamber of agriculture) asked MKGP questions about the new rules, which shows they cause confusion.

**Existing solutions:**  
Official MKGP and ARSKTRP Word/PDF templates (free). International farm management systems (FMIS) such as Agrivi, xFarm and 365FarmNet; Slovenian localisation unverified. KGZS advisory services. Excel.

**The gap:**  
I found no cheap Slovenian-language tool that keeps a single spray log feeding both the SOPO intervention records and the 2023/564 electronic format, with the Slovenian FFS register built in (authorised products, doses, waiting periods). A Slovenian vendor may exist that I could not find.

**Possible product:**  
A mobile spray log in Slovenian: pick the GERK (field-block) parcel, pick the product from the Slovenian FFS register, check the dose and waiting period, then export the official template (PDF) and the EU machine-readable format.

**MVP:**  
A progressive web app (PWA) with GERK parcel import from the farm's subsidy application, an FFS register lookup and a PDF/CSV export.

**Pricing hypothesis:**  
EUR 5–10 per month for farms. EUR 30–60 per month for contractors with several clients.

**How to find first customers:**  
KGZS regional institutes (FFS training courses list certified users), fruit-grower and wine-grower associations, and wine cooperatives.

**Risks:**  
Low willingness to pay. The state or KGZS may release a free app. International FMIS vendors may localise. Most farms are very small.

**Kill condition:**  
MKGP or ARSKTRP release an official electronic FFS record app, or KGZS offers one free to members.

**Score:** 4/10

**Sources:**
- https://www.gov.si/assets/organi-v-sestavi/ARSKTRP/SNP/ZV-2026/Evidenca_FFS_ZEL_razdelek_C_2026.pdf
- https://www.gov.si/assets/ministrstva/MKGP/PROJEKTI/SKUPNA-KMETIJSKA-POLITIKA/ENOTNE-EVIDENCE-O-DELOVNIH-OPRAVILIH/Navodila_SOPO_2026.pdf
- https://www.kgzs.si/uploads/aktivnosti%20zbornice/Odgovor_MKGP__Pravilnik_o_uporabi_fitofarmacevtskih_sredstev.pdf
- https://www.uradni-list.si/glasilo-uradni-list-rs/vsebina/2025-01-2547 (Pravilnik o uporabi FFS)
- https://pisrs.si/pregledPredpisa?id=ZAKO6355 (ZFfS-1)

---

### Opportunity: Packaging data register for small Slovenian packers and importers (PPWR / EPR)

**Industry:**  
Food producers, craft producers, e-commerce sellers and importers who put packaged goods on the Slovenian market

**Buyer:**  
Owner or accountant of a small packer (embaler) or importer (pridobitelj blaga)

**Trigger / Why now:**  
The EU Packaging Regulation (EU) 2025/40 (PPWR) applies from 12 Aug 2026. Slovenia is moving to a "full cost" EPR system, under which tradespeople and small producers also pay for household packaging waste. MOPE (the environment ministry) is drafting the national implementing decree. Annual reports of packaging mass by material are due by 31 March.

**Current workflow:**
1. The company estimates packaging weights per SKU in a spreadsheet.
2. It multiplies them by sales or import volumes from its ERP or invoices.
3. It reports to its EPR scheme (Slopak, Interseroh and others) or the ministry each quarter or year, and pays fees.

**Pain:**  
New cost and reporting duties fall on very small firms. Material-level data (PPWR recyclability classes and recycled content) is new.

**Existing solutions:**  
EPR compliance schemes, which handle reporting for members. Environmental consultants. ERP modules. International EPR SaaS tools (several, aimed at cross-border e-commerce).

**The gap:**  
Possibly a cheap per-SKU packaging-specification register for micro firms that produces the scheme report. However, the schemes themselves are likely to offer free portals.

**Possible product:**  
An SKU packaging-specification library plus import of sales from the e-invoices that become mandatory in 2028, producing scheme-ready quarterly reports.

**MVP:**  
A spreadsheet-style packaging-specification editor, invoice-line import and a report export.

**Pricing hypothesis:**  
EUR 15–40 per month.

**How to find first customers:**  
Members of the GZS and OZS (chamber of crafts) food-processing sections, and the public lists of EPR scheme members.

**Risks:**  
The national decree is not final. Schemes bundle free tools. This is close to "generic compliance reporting".

**Kill condition:**  
The Slovenian decree lets schemes report on producers' behalf using simple flat-rate methods, or the major schemes launch free SKU portals.

**Score:** 3/10

**Sources:**
- https://www.zdruzenjeobcin.si/wp-content/uploads/Implementacija_PPWR_in_obracun.pdf
- https://eur-lex.europa.eu/SL/legal-content/summary/packaging-and-packaging-waste-from-2026.html
- https://www.delo.si/tag/uredba-o-embalazi
- https://www.gov.si/assets/ministrstva/MOP/Okolje/Odpadki/Podatki/Odpadna-embalaza.pdf

---

## Rejected after competitor research

- **Guest registration and tourist-tax sync for private room renters**: killed by AJPES eTurizem. A single daily submission reaches the police, municipalities, tourist boards and the statistics office, and eTurizem takes XML imports and a web service that PMS and channel managers already use. Sources: https://www.pzs.si/javno/gk/Zbor_gospodarjev/2018/Register%20nastanitvenih%20obratov%20in%20poro%C4%8Danje.pdf, https://www.soca-valley.com/sl/poslovne-strani/turisticna-taksa-in-prijava-gostov/
- **Waste evidence-list (evidenčni list) automation**: killed by the state system ARSO IS-Odpadki. It supports e-signing, collectors completing lists for senders under authorisation, and XML import from local systems, and collectors already run their own software. Sources: https://www.gov.si/assets/organi-v-sestavi/ARSO/Odpadki/Evidencni-listi/DO110_ARSO_Odpadki_UporabniskaNavodila_5_22_21022020.pdf, https://www.gov.si/assets/organi-v-sestavi/ARSO/Odpadki/Porocilo-o-nastalih-odpadkih-in-zagotovitvi-ravnanja-z-njimi-ODP-nastajanje/Navodila-2025_ODP-nastajanje_aplikacija-IS-Odpadki.pdf
- **Veterinary antimicrobial-use reporting**: killed by the government application CIS VET (UVHVVR) and a small buyer base. Sources: https://www.uradni-list.si/glasilo-uradni-list-rs/vsebina/2023-01-2416/uredba-o-izvajanju-delegirane-uredbe-eu-v-zvezi-z-zahtevami-za-zbiranje-podatkov-o-obsegu-prodaje-in-uporabi-protimikrobnih-zdravil-pri-zivalih, https://www.gov.si/zbirke/storitve/registracija-dejavnosti-o-preskrbi-veterinarskih-organizacij/

## Too competitive

- **B2B e-invoicing (ZIERDED, mandatory 1 Jan 2028)**: free state app miniBlagajna, e-invoice exchange providers, PEPPOL access points, and ERP and accounting vendors. Sources: https://www.gov.si/novice/2025-10-23-drzavni-zbor-sprejel-zakon-o-izmenjavi-elektronskih-racunov-in-drugih-elektronskih-dokumentov/, https://www.pwc.com/si/sl/aktualno/Zakon-o-izmenjavi-elektronskih-racunov-in-drugih-elektronskih-dokumentov.html
- **Working-time records (ZEPDSV-A/B)**: crowded attendance-software market. ZEPDSV-B (23 Apr 2025) eased the rules, and electronic records are compulsory only for employers that have been fined. Sources: https://unija.com/sl/spremembe-pri-evidentiranju-delovnega-casa-od-23-aprila-dalje/, https://www.gov.si/novice/2024-12-02-presezeno-stevilo-ugotovljenih-krsitev-pri-vodenju-evidenc-delovnega-casa-ze-v-letu-2024/

## Attractive problem, poor distribution

- **FFS spray records for small family farms**: the obligation is real, but the buyers are tens of thousands of very small holdings that pay little and rely on free KGZS advice and paper templates. Only contractors, orchards and vineyards look reachable.
