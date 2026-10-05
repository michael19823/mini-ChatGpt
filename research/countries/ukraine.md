# Ukraine: country research track

Researched 2026-10-05 using 18 WebSearch calls (Ukrainian and English). WebFetch was not used. Facts that come only from search snippets and could not be checked against the primary document are marked *unverified*.

## Accessibility check

- **Sanctions:** Government-controlled Ukraine is not under sanctions. US, EU and UK sanctions do apply to occupied Crimea and to the so-called DNR and LNR regions and other occupied areas. Customers there must be geo-fenced out.
- **Practical friction:**
  - Martial law brings NBU foreign-exchange controls on cross-border payments for services (details *unverified*). The safest route is a local entity or a reseller, or invoicing in a way the NBU allows.
  - State portals (ЕкоСистема, Дія, е-ТТН, eHealth/НСЗУ) require a qualified electronic signature (КЕП) and often an accredited-operator status. Without that status a foreign founder can usually only build the layer that prepares data before submission.
  - The product must be in Ukrainian.
- **Verdict:** accessible, with friction. The best ideas are the ones that face the EU (CBAM, EUDR), where the counterparty and the portal (TRACES / the CBAM Registry) are on the EU side.

## Industries screened

| Industry | Workflow examined | Verdict | One-line reason |
|---|---|---|---|
| Steel / metal products, cement, fertiliser exporters | CBAM embedded-emissions data for EU importers (definitive phase from 1 Jan 2026) | **Opportunity (6/10)** | Mandatory, recurring per shipment and per quarter. Ukrainian firms ask associations for help with the Communication Template. Local tooling is thin. |
| Timber, wood products, soy exporters | EUDR geolocation plus due-diligence data packs | **Opportunity (5/10)** | Real trigger and a draft Ukrainian implementing law (No. 15352). Global EUDR SaaS is crowded and the deadlines keep moving. |
| Pharmacies | «Доступні ліки» reimbursement reports to НСЗУ and payment reconciliation | **Weak opportunity (4.5/10)** | Mandatory for all pharmacies since July 2025. Reports go out twice a month. Pharmacy software already has eHealth modules. |
| Employers / HR (all sectors) | Military registration (військовий облік), lists to ТЦК, booking exemptions (бронювання) | Rejected | The state launched a free Дія service for Оберіг reconciliation on 13 Aug 2026, and BAS ЗУП-type HR modules already exist. |
| Road freight, shippers | e-TTN (mandatory from 1 Jan 2027 per draft law) | Too competitive | Вчасно.ТТН, M.E.Doc and EDI Network (АТС) are already authorised, and about 15 more EDO operators applied. |
| Packaging producers / importers | EPR for packaging | Watch list | The trigger is not live. Bill No. 10066 «Про упаковку та відходи упаковки» was still a bill in the sources found. Adoption status in 2026 is *unverified*. |
| Waste generators / handlers | Annual waste declaration and handler reporting in ЕкоСистема | Rejected | The declaration is filed once a year, and only by producers of hazardous waste or of more than 50 t/yr. The state ЕкоСистема e-cabinet is free and covers it. |
| Fuel stations | Excise warehouses, flow meters, СЕАРП fuel accounting | Rejected | Needs flow-meter hardware. Excise accounting lives in accounting/EDO suites (M.E.Doc, BAS: *unverified for this exact module*). |
| Veterinary clinics | Pet e-passports and the Unified Register of Domestic Animals (2025) | Rejected | Pet registration is voluntary. Established Ukrainian vet practice software exists (e.g. Enote, *not checked in this session*). |
| Reconstruction contractors | DREAM / Prozorro project reporting | Poor distribution | The buyers are communities and donors working through government-built free platforms. Contractors' paperwork pain was not evidenced. |

---

### Opportunity: CBAM supplier data pack for Ukrainian mid-size "CBAM goods" producers

**Industry:**
Iron and steel products (including downstream items such as pipes, fasteners and wire), aluminium products, cement, fertiliser.

**Buyer:**
Chief engineer / ecologist (еколог підприємства) or export manager at Ukrainian mid-size plants and processors exporting CN-listed CBAM goods to the EU. These are not the oligarch-owned majors (Metinvest etc.), which have in-house teams.

**Trigger / Why now:**
The CBAM transitional period ended on 31 Dec 2025, and since 1 Jan 2026 EU importers must buy certificates. If an importer cannot get verified actual emissions it falls back on punitive default values. That makes the Ukrainian supplier's emissions data a commercial selling point. Verification of actual emissions must be done by accredited verifiers, with an on-site first visit. In March 2026 Ukraine published guidance on monitoring and calculating embedded emissions for installation operators. Ukraine and Sweden agreed to simplify verifier accreditation (Apr 2026).

**Current workflow:**
1. The EU importer emails a request for embedded emissions per product and per quarter.
2. The plant ecologist pulls fuel, electricity and precursor data from ERP (often BAS/1C-derived), meter logs and supplier invoices into Excel.
3. They fill in the EU "Communication template for installations" (an Excel workbook), often with help from a consultant or an association.
4. Precursor data (e.g. billets or wire rod bought from other mills) must be chased from upstream suppliers, who often cannot provide it.
5. The pack is re-sent in each importer's own format, then prepared for third-party verification.

**Pain:**
- An association reports that "a large number of Ukrainian companies need help filling in CBAM reporting". Companies asked PAEW to help with the Communication Template.
- Ukrainian precursor manufacturers struggle to supply CO2 data on request.
- There is a skills shortage of specialists who understand EU MRV rules.
- Industry warns of serious economic damage from the 2026 definitive phase (Metinvest, USPP).

**Existing solutions:**
- The EU's free Excel Communication Template and EU e-learning.
- Donor technical assistance: Biomass-Carbon with the Green Transition Office (Netherlands-funded), and Ukrainian government guidance documents.
- Consultancies and environmental associations such as PAEW.
- Accredited verifiers.
- Global CBAM SaaS aimed mainly at EU importers. Specific vendors were not verified for Ukraine in this session.

**The gap:**
Importer-side tools collect data. Nothing local and affordable sits with the Ukrainian installation operator to do four things:
- keep the monitoring plan and MMD;
- compute per-product embedded emissions each quarter from ERP/meter exports;
- track precursor emissions from upstream Ukrainian mills;
- push the same dataset out in each EU customer's format, plus a verifier-ready evidence folder.

Today this is done in Excel, by consultants.

**Possible product:**
A Ukrainian-language "CBAM operator workspace". It imports monthly fuel, electricity and production data, applies the EU calculation rules, and keeps a precursor-supplier ledger. It generates the Communication Template, per-importer exports and a verification evidence pack.

**MVP:**
Steel-processing installations only (one process route, purchased precursors plus electricity and gas). Excel/CSV import → calculation → filled EU Communication Template plus an evidence checklist. Delivered as software plus a light service for the first five clients.

**Pricing hypothesis:**
$300–800/month per installation, or $1,500–3,000 per quarterly pack (estimate). Consultants are the price anchor.

**How to find first customers:**
- Ukrainian Customs/State Statistics export data by CN code.
- GMK Center and Укрметалургпром membership.
- Green Transition Office / Biomass-Carbon TA participant lists.
- European Business Association and ASU (Асоціація "Український стальний союз", *unverified name*) events.

**Risks:**
- Small number of buyers: the count of Ukrainian exporting installations is likely in the low hundreds (*estimate*).
- Large producers build in-house.
- The EU may change CBAM scope, thresholds or treatment for Ukraine (negotiations are ongoing).
- Wartime production disruption.
- Competition from global SaaS that adds a supplier portal.

**Kill condition:**
- EU importers standardise on their own supplier portals, which collect data directly.
- Or fewer than about 100 Ukrainian installations export CBAM goods.
- Or interviews show plants accept default values rather than paying for actual-emissions work.

**Score:** 6/10

**Sources:**
- https://sk.ua/cbam-started-working-on-1-january-2026-what-businesses-should-prepare-for/
- https://uabio.org/en/materials/19277/
- https://gto.dixigroup.org/en/news/tekhnichna-dopomoha-dlia-eksportu-tovariv-cbam-z-ukraina-v-yes
- https://gmk.center/?p=102448
- https://gmk.center/interview/ljudmila-cyganok-bezdejstvie-po-cbam-vylezaet-bokom-ukrainskomu-biznesu/
- https://gmk.center/news/ukraina-i-shveciya-dogovorilis-ob-uproshhenii-akkreditacii-verifikatorov-cbam/
- https://gmk.center/news/vvedenie-cbam-s-2026-goda-serezno-udarit-po-ukrainskoj-ekonomike-metinvest/
- https://www.spglobal.com/energy/en/news-research/latest-news/energy-transition/072825-ukraines-industry-faces-risks-without-cbam-exemptions-as-definitive-phase-approaches
- https://news.dtkt.ua/society/economics/115010-ukrayina-posiliuje-pidgotovku-biznesu-do-novix-pravil-cbam

---

### Opportunity: EUDR traceability pack for small Ukrainian wood-product and soy suppliers

**Industry:**
Sawmills, wood-product and furniture makers, pellet producers, soy traders and collectors.

**Buyer:**
Owner or export manager of SME sawmills and wood processors buying from state forests (ДП «Ліси України») and private lots. Also mid-size soy collectors and traders who supply EU crushers and importers.

**Trigger / Why now:**
EUDR application dates for large/medium and for micro/small operators fall in 2026–2027. The exact dates have shifted several times; the sources found give conflicting dates, so they must be re-checked. Ukraine registered draft law No. 15352 to implement EUDR. Large Ukrainian exporters avoided soy forward contracts for delivery from 2026 because of EUDR risk.

**Current workflow:**
1. The EU buyer requests plot geolocation and legality documents per lot.
2. The supplier collects timber purchase documents, forest-plot data from Ліси України and harvest permits (лісорубні квитки), or farm-field coordinates from many small farmers.
3. Data is assembled in Excel/KML/PDF and emailed to the EU operator, who files the DDS in TRACES.
4. Mixed lots and partial lots break traceability, and humans reconcile by hand.

**Pain:**
Exporters hold back contracts and buyers demand plot-level traceability. The Ukrainian forestry agency has published how it is preparing for EUDR. BDO Ukraine publishes compliance guidance.

**Existing solutions:**
- Global EUDR SaaS (many vendors; *crowded*).
- The EU's free TRACES DDS submission.
- Ліси України's own electronic timber accounting and EUDR preparation.
- BDO and other consultants.
- Large agri-holdings' in-house systems.

**The gap:**
A cheap, Ukrainian-language mass-balance and lot-splitting ledger for small processors. It would link inbound purchase documents (state-forest e-documents, farmer field polygons) to outbound EU shipments, and export the buyer's geodata pack. This gap is *hypothesised*. No direct complaint was found.

**Possible product:**
Inbound lot register → geolocation attachment → outbound shipment split → GeoJSON/DDS-ready export for the EU buyer.

**MVP:**
Wood-only. Import Ліси України purchase data (CSV/PDF), attach plot polygons, generate the GeoJSON plus document bundle per shipment.

**Pricing hypothesis:**
$100–250/month per processor (estimate).

**How to find first customers:**
- Ліси України auction buyers (timber exchange buyer lists, *unverified availability*).
- Furniture and woodworking associations.
- Soy exporters via Latifundist / UkrAgroConsult.

**Risks:**
- Further EUDR delays or simplification (e.g. a "low-risk country" treatment shrinking the obligations).
- Ліси України may provide traceability data for free.
- Global SaaS competition.

**Kill condition:**
- The EU simplifies EUDR so suppliers only pass on a reference number.
- Or Ліси України provides EUDR-ready geodata exports per sale.

**Score:** 5/10

**Sources:**
- https://forest.gov.ua/en/news/eu-regulation-eudr-how-ukraine-is-preparing-for-new-export-conditions
- https://brdo.com.ua/en/news/implementation-of-the-eudr-in-ukraine-draft-law-no-15352-registered-in-the-parliament/
- https://latifundist.com/en/novosti/68894-postavki-soyevoyi-produktsiyi-do-yes-u-2026-rotsi-pid-pitannyam-ukrayinski-eksporteri-unikayut-dovgostrokovih-ugod-cherez-eudr--asap-agri
- https://www.bdo.ua/en-gb/insights-1/information-materials/2025/eudr-ukraine-eu-market-access-compliance

---

### Opportunity: Reimbursement ("Доступні ліки") reconciliation for independent pharmacies

**Industry:**
Retail pharmacies.

**Buyer:**
Owner or head pharmacist of independent pharmacies and small chains (1–10 outlets).

**Trigger / Why now:**
Since 1 July 2025 every pharmacy business must contract with НСЗУ for the «Доступні ліки» reimbursement programme. About 17,324 pharmacies and points held contracts in 2026. The 2026 list expansion adds 30+ new active substances, including first-time drops, ointments and paediatric forms.

**Current workflow:**
1. Dispense against e-prescriptions (or paper ones) in the pharmacy software connected to eHealth.
2. Submit dispensing reports to НСЗУ on the 1st and 14th of each month, signed with КЕП.
3. Receive payments and match them to dispensed items. Chase short payments or rejected lines manually.
4. Update reimbursement prices and lists when the register changes.

**Pain:**
Reporting is mandatory and frequent (twice a month), and pharmacy cash flow depends on it. Direct evidence of rejection rates or reconciliation pain was **not found**, so pain is *unverified*.

**Existing solutions:**
- eHealth-connected pharmacy software. Names that appear in a study include «Аптека» and «Farm-retail»; others exist.
- Chains' in-house IT.
- НСЗУ's own e-cabinet.

**The gap:**
A hypothesised gap in payment-versus-dispensing reconciliation and rejection analytics for small pharmacies. It may already be covered by the pharmacy software.

**Possible product:**
Reads НСЗУ report and payment statements plus pharmacy software exports, then flags unpaid or rejected lines and price-list mismatches.

**MVP:**
Upload a CSV from the pharmacy software and a bank/НСЗУ statement, and get a reconciliation report with a list of discrepancies.

**Pricing hypothesis:**
$15–40/month per outlet (estimate). Ukrainian pharmacy margins are thin.

**How to find first customers:**
- The Держлікслужба licence register.
- НСЗУ's public list of contracted pharmacies.
- Pharmacy associations (e.g. АПАУ, *unverified*).

**Risks:**
- The pharmacy software adds the feature.
- Low willingness to pay.
- The market is dominated by chains with in-house IT.

**Kill condition:**
Interviews show rejected or short-paid reimbursements are rare, or the pharmacy software already reconciles.

**Score:** 4.5/10

**Sources:**
- https://medplatforma.com.ua/news/97972-iz-1-lypnia-vsi-apteky-zoboviazani-pryiednatysia-do-programy-reimbursatsii-dostupni-liky-postanova-uriadu
- https://mind.ua/news/20282644-programa-dostupni-liki-diyatime-u-kozhnij-apteci-u-2025-roci
- https://buhgalter911.com/uk/news/news-1094922.html
- https://dspace.nuph.edu.ua/bitstream/123456789/21902/1/236-237.pdf
- https://medplatforma.com.ua/news/4617-apteki-otrimali-persh-grosh-vd-nszu-za-rembursatsyu-nsulnv

---

## Rejected after competitor research

- **Military registration and booking-exemption automation for employers.** This looked very strong: every employer is obliged, the rules change often (Resolution 916 of July 2025 changed the forms, and Resolution No. 812 brought new rules from 27 June 2026), there are monthly and 5- and 7-day notification deadlines, and penalties apply. It was killed because the state launched a **free Дія service on 13 Aug 2026**. In it, companies get data from the Оберіг register, update employee data and carry out reconciliation with ТЦК online. HR suites (BAS ЗУП-type modules, appendix-5 list templates) already cover the paperwork. The data is also highly sensitive, and the workflow could shrink sharply after demobilisation. Sources:
  - https://news.dtkt.ua/labor/labor-relations/113733-viiskovii-oblik-pracivnikiv-teper-v-diyi-z-13-serpnia-2026-r-zapraciuvav-novii-servis
  - https://diia.gov.ua/services/vidomosti-pro-pracivnikiv-z-reyestru-vijskovozobovyazanih
  - https://news.dtkt.ua/labor/labor-relations/112376-viiskovii-oblik-z-27-cervnia-2026-r-vedemo-po-novomu-opublikovano-postanovu-kmu-812
  - https://i.factor.ua/ukr/news/vijs-kovij-oblik-na-pidpriemstvi-2026-obov-azki-robotodavca-roz-asnenna-minoboroni/
- **Waste declarations and reporting.** Killed by the free state ЕкоСистема waste-management e-cabinet. The declaration is annual, due by 20 Feb, and only for hazardous waste or more than 50 t/yr.
  - https://www.kmu.gov.ua/news/yak-pratsiuvaty-v-e-kabineti-systemy-upravlinnia-vidkhodamy-na-ekosystemi
  - https://loda.gov.ua/news/128563
- **Pet e-passports / animal register for vet clinics.** Registration is voluntary, the state register is reached via Дія, and vet practice software already exists.
  - https://vikna.tv/dlia-tebe/novyny-ukrayiny/elektronni-vetpasporty-u-diyi/

## Too competitive

- **e-TTN for carriers and shippers** (mandatory from 1 Jan 2027 per draft legislation). Вчасно.ТТН, M.E.Doc and EDI Network (АТС) are authorised, and about 15 EDO operators had applied by Jan 2026. These EDO incumbents already serve the accounting departments involved.
  - https://buhplatforma.com.ua/news/108980-yaki-platformy-edo-vzhe-v-systemi-e-ttn
  - https://buhplatforma.com.ua/news/116602-vprovadzhennia-e-ttn-z-1-sichnia-2027-roku-shcho-gotuiut-zakonodavtsi
  - https://7eminar.ua/news/16915-z-2027-roku-obovyazkovo-uryad-gotuje-povnii-perexid-na-e
- **Fuel excise / СЕАРП accounting at fuel stations.** Requires hardware, and accounting/EDO vendors are entrenched.
  - https://mind.ua/openmind/20301222-dajdzhest-regulyatornih-zmin-dlya-palivnogo-biznesu-shcho-vplivae-na-galuz-iz-2026-roku

## Attractive problem, poor distribution

- **Reconstruction projects (DREAM / Prozorro).** The paperwork is real, but the buyers are communities and IFI programmes using free government-built platforms. Selling would require public procurement.
  - https://www.open-contracting.org/2026/06/23/transforming-ukraines-public-investment-in-infrastructure-how-its-going-and-whats-next-our-urc2026-stock-take/

## Watch list (trigger not yet live)

- **Packaging EPR.** Bill No. 10066 would create EPR organisations (ОРВВ), producer reporting and recycling targets. If it is adopted with a 2027–2028 start, thousands of FMCG producers and importers will need packaging-weight reporting by material. That fits the core thesis well, but adoption status was *unverified* in this session.
  - https://mepr.gov.ua/v-ukrayini-vprovadzhuyut-rozshyrenu-vidpovidalnist-vyrobnyka-uryad-shvalyv-zakonoproyekt-pro-upakovku-ta-vidhody-upakovky/
  - https://biz.ligazakon.net/news/222308_v-rad-zarestrovano-zakonoprokt-pro-upakovku-ta-vdkhodi-upakovki-yakim-zaprovadzhutsya-rozshirena-vdpovdalnst-virobnika

**Overall:** Ukraine's government digitises fast and gives tools away free (Дія, ЕкоСистема, е-ТТН, DREAM, Prozorro). That repeatedly kills domestic compliance SaaS ideas. The most defensible openings face the EU (CBAM, EUDR), where the paperwork is imposed from outside and the Ukrainian state does not provide the tool.
