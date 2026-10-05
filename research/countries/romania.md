# Romania: Indie Opportunity Research

Research date: 2026-10-05. Method: 17 WebSearch calls (Romanian and English). WebFetch was not used, so all findings come from search-result summaries. Statements marked "unverified" or "estimate" could not be confirmed from a primary source.

**Accessibility:** Romania is an EU member. It has no sanctions issue, EU payment rails, and no software licensing barrier. A foreign solo founder can sell there. The barriers in practice are the language and the need for local accounting and legal context.

**Overall verdict:** Romania has many mandatory digital reporting systems, including RO e-Factura, SAF-T D406, RO e-Transport, REGES-ONLINE, SIATD and SUMAL. In most of them, either the state provides a free mandatory tool or domestic vendors such as SmartBill, Oblio, Saga and WinMentor moved quickly. The gaps that remain are narrow. The most promising is packaging EPR reporting for SMEs, where consultants do the work by hand and the EU PPWR now applies.

---

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Producers/importers of packaged goods (FMCG, distributors, e-commerce) | Monthly AFM packaging declaration plus OIREP reporting under Law 249/2015, and the PPWR from Aug 2026 | **Opportunity** | Must be filed monthly with fines. Consultants do the per-SKU packaging maths in spreadsheets. No SME tool was found |
| Owners of ISCIR equipment (boilers, lifts, pressure vessels, forklifts) and RSVTI service firms | Installation register, scheduling of periodic inspections, ISCIR paperwork | **Opportunity (weak)** | Fragmented. Hundreds of RSVTI firms each manage many clients. New ISCIR technical prescriptions (PT CR 3-2025) published Aug 2026. No SaaS was found, but willingness to pay is modest |
| Payroll bureaus / accounting firms | REGES-ONLINE (replaced Revisal), including registering sick-leave suspensions within 3 days | **Watchlist / too competitive** | The state provides an API and payroll vendors are integrating (e.g. Wizrom). A gap exists only for multi-client exception handling |
| Waste generators / collectors | SIATD packaging-waste traceability, monthly HG 856/2002 waste records, annual ANPM SIM reporting | Poor distribution / state tool | SIATD is a free mandatory AFM app with fines of 80k–250k RON, so it cannot be replaced. ANPM reporting is annual and done by consultants |
| Forestry / sawmills / timber exporters | EUDR due-diligence statements from SUMAL 2.0 data | **Rejected** | Fortres and the HS Timber DDS already integrate with SUMAL. The state is also working on SUMAL–EUDR interoperability |
| Agriculture / pesticide application | Electronic register of plant protection product treatments (EU 2023/564, deferred to 2027) | **Rejected** | ANF built a free government app. Farm-management suites already keep spray logs |
| Trucking / distribution | RO e-Transport UIT codes for high-fiscal-risk and international loads | **Too competitive** | Invoicing apps, fleet/GPS vendors (e.g. Fleethand) and ERPs already generate UITs |
| Accountants (all SMEs) | RO e-Factura, SAF-T D406 | **Too competitive** | SmartBill, Oblio, Saga, WinMentor and many others cover it |

---

## Opportunities

### Opportunity: Packaging EPR "recipe-to-declaration" engine for SME producers and importers

**Industry:**
Packaged goods producers, importers, distributors and e-commerce sellers placing packaging on the Romanian market. In Law 249/2015 these are the "producători" and "introducători".

**Buyer:**
The finance or accounting manager, or the external accountant or environmental consultant, at SMEs that put packaged products on the market or import packaged goods (including intra-community acquisitions).

**Trigger / Why now:**
- The EU Packaging and Packaging Waste Regulation (EU) 2025/40 applies from 12 Aug 2026. Romanian implementing changes to producer registration, EPR modulation and reporting are expected over 2026–2027. This date is from my own knowledge of the regulation, and I did not find a Romanian implementing act in this research.
- Law 249/2015 already requires monthly reporting of packaging placed on the market. Declarations are filed online on the AFM platform by the 25th of each month.
- Unrecovered quantities carry a contribution of 2 lei/kg.
- The SGR deposit-return system (RetuRO) adds a separate reporting stream for beverage packaging.

**Current workflow:**
1. Export monthly sales and purchase volumes per SKU from the ERP or invoicing app.
2. Look up each SKU's packaging "recipe" (primary, secondary and tertiary, by material and weight), usually in an Excel sheet kept by a consultant.
3. Multiply quantities by recipe and add up the kg by material (paper, plastic, glass, metal, wood) and by reusable versus single-use.
4. Re-enter the totals into the AFM monthly declaration portal and send the same data to the OIREP that takes on the recycling obligation.
5. Reconcile with the OIREP's annual statements and check that suppliers appear on the AFM contributor list (fines of 20k–40k lei).

**Pain:**
- A missed declaration is fined 2,000–2,500 lei each time, and the supplier-check fine is 20k–40k lei.
- Romanian companies have paid more than EUR 10M in non-recycling contributions (Euronews.ro).
- Accounting forums (portalcontabilitate, avocatnet) contain repeated questions about how to declare packaging, which shows the work is confusing and manual.
- Whole consultancies (SmartMediu, Envirocons, Econos ESG) sell "raportare ambalaje" as a manual service.

**Existing solutions:**
- OIREPs (e.g. those advertised on Antena3 / juridice.ro), which take over the obligation and receive data. Their client data portals are unverified.
- Environmental consultancies doing the work by hand (SmartMediu, Envirocons, Econos ESG).
- The AFM online platform, which only accepts input.
- Generic ERPs (WinMentor, Saga, Nexus, SAP B1). Any packaging modules they have are unverified, and I did not find any in search.
- Pan-EU EPR SaaS such as Lizee/Ecosistant-type tools. Their Romanian coverage is unverified.

**The gap:**
No SME-priced tool was found that does all of the following:
- stores SKU packaging recipes;
- imports monthly sales and intra-EU purchases from Romanian invoicing apps (SmartBill/Oblio exports, or the e-Factura XML the company already has);
- outputs the exact AFM declaration figures and the OIREP report in one step;
- flags PPWR changes.

Today consultants rebuild this in Excel for each client.

**Possible product:**
Upload the e-Factura/SAF-T or invoicing export once a month. The product maps SKUs to packaging recipes and produces AFM-ready totals, an OIREP data file and an audit trail. It can be white-labelled for environmental consultants who manage many clients.

**MVP:**
- A recipe library (SKU to material and weight).
- CSV/XML import from SmartBill, Oblio and e-Factura UBL.
- Monthly kg-by-material report matching the AFM form fields, plus a PDF/Excel evidence pack.
- A multi-client dashboard for consultants.

**Pricing hypothesis:**
- 49–99 EUR/month for an SME.
- 150–400 EUR/month for a consultant seat covering up to 30 clients.

**How to find first customers:**
- The AFM contributor list, published on afm.ro.
- Environmental consultancies, found through Google ads for "raportare ambalaje".
- OIREP partner networks.
- Accounting firms through CECCAR branches and portalcontabilitate.ro.

**Risks:**
- OIREPs may bundle free reporting portals for their members.
- AFM or the SGR administrator may change formats when the PPWR is transposed.
- The market is local only, and the work is Romanian-language.

**Kill condition:**
- Interviews show the main OIREPs already give clients a free SKU-recipe calculator, or
- most SMEs fully outsource the obligation (OIREP plus consultant) at under 50 EUR/month.

**Score:** 6/10

**Sources:**
- https://www.juridice.ro/686146/raportarea-ambalajelor-la-afm-mai-simpla-pentru-companiile-care-colaboreaza-cu-un-oirep.html
- https://smartmediu.ro/servicii/raportari/raportare-ambalaje/
- https://envirocons.ro/cine-trebuie-sa-depuna-declaratii-la-fondul-de-mediu/
- https://www.econos-esg.com/ro/bloguri/epr-ambalaje-romania-cum-functioneaza-si-cat-costa
- https://startupcafe.ro/amenzi-firme-furnizori-produse-ambalate-lege-htm-27123
- https://www.portalcontabilitate.ro/raportare-ambalaje-catre-afm-216392.htm
- https://euronews.ro/articole/costul-nereciclarii-companiile-din-romania-au-platit-peste-10-milioane-de-euro-la
- https://www.afm.ro/main/legislatie_taxe_si_contributii/2019/legea_249_2015_02072019.pdf

---

### Opportunity: RSVTI workbench for ISCIR equipment supervision firms

**Industry:**
Technical supervision of boilers, pressure vessels, lifts, forklifts and cranes under Law 64/2008 (ISCIR).

**Buyer:**
External RSVTI service firms, which are ISCIR-authorised operators supervising installations for many client companies. A secondary buyer is the in-house RSVTI at factories, hospitals and warehouses.

**Trigger / Why now:**
- ISCIR has put new technical prescriptions out for consultation and publication. These include PT CR 3-2025 on authorising RSVTI operators, published in Monitorul Oficial no. 667 bis on 12 Aug 2026, and companion PTs for legal persons and personnel.
- Industry sites describe these as one of the biggest updates to the field in years.
- My expectation that the new PTs bring new record-keeping and reporting duties is unverified, and the details need reading.

**Current workflow:**
1. The RSVTI keeps an installation register for each client: equipment, registration number, and dates of the last and next inspection (VTP/RI, efficiency checks, hydraulic tests).
2. The RSVTI tracks deadlines in Excel or paper and phones the client and the authorised inspection firm (or ISCIR/CNCIR inspector) to schedule.
3. The RSVTI collects inspection reports (PDF/paper), files them and updates the register.
4. The RSVTI prepares documents for ISCIR registration of new equipment and for ISCIR controls.

**Pain:**
- An expired inspection means equipment must be stopped, plus fines and liability.
- RSVTI firms compete on price and service many small clients, so their admin overhead is high.
- Public procurement specifications (Romgaz, hospitals) require RSVTI deadline tracking as a deliverable.

**Existing solutions:**
- Many RSVTI service firms (EFMS, Antirisk, RSGE, rsvti-bucuresti.ro, depanero.ro).
- The VreauRSVTI.ro marketplace, which matches clients with RSVTI providers but does not appear to be workflow software.
- Generic CMMS tools (e.g. maintenance modules in ERPs) and SSM/EHS consultancies' internal tools.
- No Romanian RSVTI-specific SaaS was found. This absence is unverified, and Excel is the likely incumbent.

**The gap:**
No multi-client register is pre-structured to ISCIR PT categories, with:
- inspection intervals generated automatically from the equipment type and PT;
- client and inspector scheduling;
- a document vault that produces the evidence pack for an ISCIR inspection.

**Possible product:**
Multi-tenant SaaS for RSVTI firms that holds every client's ISCIR equipment register. It calculates next-due dates from PT rules, sends reminders to clients and inspectors, and exports the documents ISCIR expects.

**MVP:**
- Equipment register with PT-based interval rules for the top 5 equipment types (boilers PT A1, lifts, forklifts/lifting equipment, pressure vessels).
- Deadline calendar.
- Email/SMS reminders.
- PDF report vault.
- Client portal.

**Pricing hypothesis:**
- 30–80 EUR/month per RSVTI firm, tiered by number of installations.
- An optional per-client portal fee.

**How to find first customers:**
- The ISCIR list of authorised RSVTI operators, published on iscir.ro (completeness unverified).
- VreauRSVTI.ro listings.
- Google searches for "servicii RSVTI" in each county.

**Risks:**
- The market is small (an estimate of low thousands of RSVTI firms and individuals).
- Buyers are price-sensitive.
- ISCIR may launch its own e-register.
- A rules engine across many PTs needs domain expertise.

**Kill condition:**
- The new PTs introduce a mandatory ISCIR online register that RSVTIs must use, or
- interviews show RSVTI firms will not pay more than 20 EUR/month.

**Score:** 5/10

**Sources:**
- https://iscir.ro/wp-content/uploads/2026/08/PT-CR-3-2025.pdf
- https://rsge.ro/noile-prescriptii-tehnice-iscir-ce-se-schimba/
- https://iscir.ro/wp-content/uploads/2011/03/ORDIN-Nr.-130-2011.pdf
- https://vreaursvti.ro/
- https://www.efms.ro/rsvti-serviciu-tehnic/
- https://rsvti-romania.ro/ghid-iscir-rsvti/
- https://delta.romgaz.ro/sites/default/files/2025-06/Caiet%20de%20Sarcini_0.pdf

---

### Opportunity: REGES-ONLINE exception desk for multi-client payroll bureaus

**Industry:**
Payroll bureaus and accounting firms.

**Buyer:**
The owner or payroll lead at accounting firms that manage HR records for 20–300 small employers.

**Trigger / Why now:**
- Revisal was replaced by REGES-ONLINE, with the final migration deadline extended to 31 Dec 2025. In Sept 2025 only 23% of firms had migrated.
- REGES now requires suspensions for temporary incapacity, based on medical certificates, to be registered within 3 business days.
- Fines run up to 15k–20k lei for failing to migrate, up to 5,000 lei for suspension reporting and up to 8,000 lei for late data.

**Current workflow:**
1. A client emails a medical certificate, a new hire or a contract change.
2. The bureau records it in payroll software.
3. The bureau then submits it separately in REGES-ONLINE, through the web UI or the vendor's API if it has one.
4. The bureau tracks the 3-day and pre-hire deadlines by hand across many employer accounts.

**Pain:**
- Hard deadlines are fined per event.
- The migration was slow, and the new suspension-reporting duty adds events every day.

**Existing solutions:**
- The REGES-ONLINE web UI.
- The official REGES API for HR systems.
- Payroll and ERP vendors integrating with it (Wizrom MyWiz confirmed; integration by WinMentor, Saga and Charisma is unverified).

**The gap:**
Small bureaus using desktop payroll software may lack API sync. Even where sync exists, no cross-client "deadline radar" was found for events such as sick-leave certificates received by email.

**Possible product:**
A multi-employer inbox. A certificate or contract change goes in, and the product produces the REGES API submission plus deadline tracking.

**MVP:**
Upload medical certificate data, submit the suspension to REGES through the API, and show a dashboard of pending deadlines per employer.

**Pricing hypothesis:**
2–4 EUR per employer per month, or 50–150 EUR/month per bureau.

**How to find first customers:**
The CECCAR member directory, accounting Facebook groups, and portalcontabilitate.ro.

**Risks:**
Payroll vendors will close the gap within months. The API also requires digital-certificate access for each employer.

**Kill condition:**
The top 5 Romanian payroll packages have shipped REGES API sync including suspensions. This is likely and should be checked first.

**Score:** 4/10

**Sources:**
- https://www.inspectiamuncii.ro/documents/521316/523496/20250929_COMUNICAT+REGES+ONLINE+.pdf/556911b9-ca72-4e46-87bc-e35b39faf32f
- https://economedia.ro/oficial-termenul-de-trecere-de-la-sistemul-revisal-la-platforma-regis-online-a-fost-prelungit-pana-la-finalul-anului-decizia-in-monitorul-oficial.html
- https://www.fiscalitatea.ro/reges-online-si-suspendarile-de-cim-firmele-pot-evita-amenzile-de-pana-la-5000-lei-in-3-pasi-simpli-24088/
- https://infotva.manager.ro/articole/infotva/firmele-pot-fi-amendate-cu-pana-la-8000-lei-daca-nu-transmit-datele-la-timp-in-reges-online-24038.html
- https://www.revistabiz.ro/etichete/wizrom/
- https://www.inspectiamuncii.ro/documents/486166/35453937/Comunicat+noul+REGES.pdf/d409c740-e713-472b-845e-7468bcc65e86

---

## Rejected after competitor research

- **EUDR due-diligence statements for Romanian timber (SUMAL to EUDR).** The trigger is real: large and medium operators from 30 Dec 2026 and micro/small from 30 Jun 2027, and ASFOR complains that the IT systems are not ready. It was killed by:
  - **Fortres** (fortres.org), which advertises DDS and geolocation "integrated in SUMAL";
  - **HS Timber Group's DDS platform**;
  - the EU-funded SINTETIC project;
  - pressure from WWF/ASFOR for state SUMAL–EUDR interoperability that would pre-fill DDS.

  In addition, the simplified one-time declaration for micro/small operators in low-risk countries (Romania is low-risk) shrinks recurring demand.

  Sources: https://fortres.org/, https://hs.at/ro/presa/stiri/detail/hs-timber-group-upgrades-its-gps-traceability-system-1.html, https://asfor.ro/2026/07/19/implementarea-eudr-termene-ferme-sisteme-informatice-nepregatite/, https://wwf.ro/wp-content/uploads/2026/07/Adresa-WWF-despre-SUMAL-si-propuneri-pentru-interoperabilitate-Regulament-EUDR.pdf

- **Electronic plant protection treatment register (EU 2023/564, deferred to 1 Jan 2027 via EU 2025/2203).** It was killed by **ANF's own free app**, reported in BZI. Farm-management suites with spray logs also compete.

  Sources: https://www.bzi.ro/fermierii-vor-beneficia-de-un-an-de-gratie-pentru-trecerea-la-registrul-electronic-al-tratamentelor-anunta-anf-5361366, https://www.sanatateaplantelor.ro/de-la-1-ianuarie-2026-registrul-de-evidenta-a-tratamentelor-cu-produse-pentru-protectia-plantelor-va-fi-electronic/, https://eur-lex.europa.eu/eli/reg_impl/2025/2203/oj/eng

- **SIATD packaging-waste traceability helper.** This is a **free mandatory AFM application**, and using any other tool is itself an offence (fines of 80k–100k RON, and up to 250k lei). An add-on is possible only if SIATD exposes an API, which is unverified.

  Sources: https://infocons.ro/siadt-sistemul-care-supravegheaza-in-timp-real-orice-tranzactie-cu-deseuri-din-tara-a-fost-finalizat/, https://startupcafe.ro/amenzi-firme-furnizori-produse-ambalate-lege-htm-27123

## Attractive problem, poor distribution

- **Waste-generator records (monthly HG 856/2002 records and annual ANPM SIM reporting).** The obligation is real, with fines up to 20,000 lei. However, it is annual and low-value, and environmental consultants bundle it. The buyers are diffuse SMEs.

  Source: https://infotva.manager.ro/articole/studii-de-caz/firmele-care-nu-isi-indeplinesc-obligatiile-de-raportare-catre-anpm-risca-amenzi-de-pana-la-20000-de-lei-21539.html

## Too competitive

- **RO e-Transport UIT generation.** Mandatory for high-fiscal-risk and international loads. It is already served by invoicing apps, ERPs and fleet/GPS vendors such as Fleethand.

  Sources: https://www.fleethand.com/en/mandatory-uit-codes-in-romania/, https://alfasign.ro/ghid-ro-e-transport/

- **RO e-Factura / SAF-T D406.** Saturated by SmartBill, Oblio, Saga, WinMentor and others. These product names come from my own knowledge and were not searched in this run.

- **REGES-ONLINE basic sync.** Payroll vendors are integrating through the official API. Only the multi-client exception desk above remains, at a score of 4.
