# Switzerland

Research depth: deep pass (about 49 WebSearch calls on top of the 4 in the first pass; WebFetch blocked). Searches were in German and French, plus English. Most claims rest on official sources (BAZG, BLW, BAFU, SEM/SECO, cantonal administrations, ESTV/cantonal tax offices) and trade bodies (FWS, suissetec, Swissolar, GastroSuisse). Anything taken only from a search snippet and not cross-checked is marked "unverified".

Market note: accessible to a foreign solo founder, with no sanctions or payment-rail problems. Wages are high, so willingness to pay is good. But the market is small, split across 26 cantons and three main languages (DE/FR/IT), and well digitised. In many of the obvious workflows the federal government or an industry association has already shipped a free portal or a standard interface (e.g. EasyGov, veva-online, digiFLUX API, ElektroForm, job-room API, the Cercle Bruit/FWS noise-proof app). Many of the "obvious" ideas below die for exactly that reason.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| HVAC / heat-pump installers | Heating replacement: building permit or notification, Lärmschutznachweis, cantonal subsidy application before work starts, grid-operator notice, communal/utility subsidies | **Opportunity (moderate)** | Each job needs 3–5 submissions to different bodies, and the forms differ by canton and commune. Each step has a tool (FWS noise app, Gebäudeprogramm portal, SG eFörderportal, ElektroForm), but nothing ties one job to all of them (no such tool found) |
| Foreign craft and construction firms working in CH (posted work) | EasyGov notification 8 days ahead, per-GAV minimum wage, deposit (Kaution), 90-day counter, documents for parity-commission checks | **Opportunity (moderate)** | Required for every job. Rules split by trade, GAV and canton. Bilaterale III will change the rules again (4 working days, deposit only after a violation). Workflex and consultants compete |
| Agriculture inputs trade / professional PPP users | digiFLUX reporting of PPP, fertiliser and feed deliveries (trade from 2026, use from 2027) | Weak opportunity | A real new obligation, but there is a free web app, Excel upload and an API. The Barto interface is backed by fenaco, the user side is simplified, and the scheme is politically contested |
| Customs brokers / importers | e-dec Import to Passar 2.0 migration | Reject (re-scored 3 → 2) | e-dec Import ends 2027. Covered by the free BAZG apps (Declar), AEB, MIC, trademonkey, Douana and others |
| Electricians / solar installers | Installationsanzeige, SiNa, PV notifications to about 600 grid operators | Too competitive | ElektroForm / ElektroForm solar (Brunner Informatik with Swissolar, 400+ firms), M2-Hub, and the standard VSE forms |
| Employers of French-resident cross-border workers | New 2026 duty to track telework days and report an annual telework rate (40% rule) | Too competitive | bexio Payroll (Swissdec 5.3) already records telework days and warns at the limit. ELM 5.0 payroll, tipee and Lucca also cover it |
| Home care (Spitex, freelance nurses) | Billing of residual financing (Restfinanzierung) to canton or commune, now in XML in BS, SO, NW from 2026 | Too competitive | Uses the Forum Datenaustausch XML. NURSANA (CHF 199/month for freelancers) already bills communes. Clearing offices (e.g. SVA) centralise billing in some cantons |
| Childcare (Kitas) | Monthly voucher reporting to communes (kiBon in BE/SO and others) | Reject (partly unverified) | kitAdmin offers a full kiBon interface. Other cantons not checked |
| Hazardous waste (VeVA) | Begleitscheine, quarterly reports of accepted waste | Reject | Stable since 2006. veva-online is free and has CSV import/export interfaces. No new trigger |
| Medtech manufacturers / CH-REPs | swissdamed UDI device registration (mandatory 1 Jul 2026, transition to 31 Dec 2026) | Reject | Mostly one-off. swissdamed accepts EUDAMED XML upload and an M2M API. Many consultants (Decomplix, MedEnvoy, swissmpc and others) |
| Restaurants / food retail | New declaration of animal products from painful procedures (in force 1 Jul 2025, transition to 30 Jun 2027) | Reject | A country-list lookup plus supplier info. One-off menu work. GastroSuisse provides guidance |
| Chocolate/coffee exporters to EU | EUDR due diligence (non-SME 30 Dec 2026, SME 30 Jun 2027) | Too competitive | Global EUDR tools (osapiens and others) and supplier packs (e.g. Callebaut). The Swiss Timber Trade Ordinance revision does not adopt EUDR |
| Property managers / energy | ZEV/vZEV/LEG billing (LEG possible from 1 Jan 2026) | Too competitive | Utilities (EKZ, ewl, SH Power) and ista already sell LEG/ZEV billing |
| Employers (vacancies) | Stellenmeldepflicht to RAV (job-room) | Reject | Job-Room has an official API for high-volume reporters. ATS vendors likely integrate (vendor names unverified) |
| Short-term rental hosts | Kurtaxe and guest registration per commune | Poor distribution / too competitive | Rules vary by commune, but Airbnb collects in some areas and feratel and destination tools exist. Many communes charge flat fees |
| SME VAT | ePortal VAT filing | Too competitive | Abacus, bexio and similar accounting software, plus the free ESTV ePortal (first-pass finding) |
| Supply-chain ESG (NUFG draft) | Supplier ESG data requests to SMEs | Poor timing | The law is not final and targets large firms (first-pass finding) |
| Vets | IS ABV antibiotics reporting | Reject | Federal web app plus a published interface for practice-software vendors |
| Food self-control (HACCP) | Self-control documentation | Reject | Old, stable requirement with no new trigger (first-pass finding) |
| Small water utilities | Self-control / QS handbook | Not pursued | Only templates found (cantonal model concepts). No recurring submission found to anchor a product |

Not screened: funeral homes, pest control/biocides, pharmacies (narcotics), insurance brokers, private schools.

## Opportunities

### Opportunity: Heating-replacement permit and subsidy dossier router for heat-pump installers

**Industry:**  
Building services (HVAC / heat-pump installation)

**Buyer:**  
Owner or office manager at small and mid-size heating installers (5–50 staff) that replace oil/gas boilers with air/water or ground-source heat pumps in single- and two-family homes. Second target: heat-pump wholesalers and manufacturers that want to offer this as a service to installers.

**Trigger / Why now:**  
- Cantonal energy laws (e.g. Zurich) make every heating replacement a permit or notification case.
- Since 1 Jan 2023, many cantons use the Cercle Bruit noise-assessment practice, and a Lärmschutznachweis is required for air/water heat pumps in every procedure.
- Cantonal subsidy programmes are reset each year (e.g. Schwyz programme from Jan 2026), and the application must be filed before work starts, or the subsidy is lost.
- The market fell about 30% in 2024 (FWS), and cantons that cut subsidies saw fewer applications. Installers now compete on how fast and reliably they secure subsidies for the homeowner.

**Current workflow:**  
1. The installer quotes the job and collects building data (heated area, old heating system, plot, distances to neighbours).
2. The noise proof is produced in the Cercle Bruit/FWS web app (forms LN-1a/LN-1b).
3. The permit or notification is filed with the commune using the cantonal form (e.g. Zurich's WTA form) or a cantonal eBau portal, attaching the noise proof and plans.
4. The subsidy application goes to the cantonal portal: portal.dasgebaeudeprogramm.ch in most cantons, St. Gallen's own eFörderportal, or other channels. Communal or utility programmes are applied for separately (listed on energiefranken.ch).
5. The installation notice is sent to the grid operator (ElektroForm or the grid operator's portal), usually by the electrician.
6. After commissioning: WPSM certificate, completion report and payout request to the canton, all tracked by email and in spreadsheets.

**Pain:**  
- Late or missing applications lose the homeowner CHF 6,900+ in federal and cantonal subsidy for a typical house, per a vendor example. That puts revenue at risk for the installer.
- Cantons and communes describe the paperwork as high effort, with different forms and procedures per canton. Several cantons publish their own guides, FAQs and portals.
- Volume: about 16,753 WPSM certificate applications in 2024 (a subset of all installs).

**Existing solutions:**  
- FWS/Cercle Bruit noise-proof web app (free)
- Gebäudeprogramm portal and cantonal portals such as SG eFörderportal (free, one per canton)
- ElektroForm for electrical notices
- energiefranken.ch (lookup of subsidy programmes)
- Installer ERP and AVA software (names unverified)
- Lead-gen platforms (energieheld, aroundhome) that advertise subsidy help to homeowners
- Manufacturers' and wholesalers' advisory services (e.g. CTA, Stiebel Eltron, Meier Tobler; a dedicated permit service was not verified)

**The gap:**  
No product found that takes one job record and works out for that address which permit route, subsidy programmes and documents apply. None prefills each submission, tracks the before-start deadline, and keeps the evidence for the payout claim. Each existing tool covers one step.

**Possible product:**  
A job-centric rules engine keyed to canton and commune. From one heat-pump job it generates the checklist and filled PDFs or portal-ready data for the permit, the noise proof (by pulling or linking to the FWS output), cantonal and communal subsidies, and the grid notice. It tracks status, deadlines and payout claims.

**MVP:**  
One or two cantons (e.g. Zurich and Aargau, or St. Gallen). Rules for air/water heat-pump replacement in single-family homes only. Prefilled cantonal subsidy and permit forms, a deadline tracker, and a document vault per job. No portal API needed at first: the output is copy-ready data plus PDFs.

**Pricing hypothesis:**  
CHF 30–60 per job, or CHF 99–249 per month per installer (estimate). A wholesaler white-label at a higher price is another option.

**How to find first customers:**  
- suissetec member directory: about 3,500 member firms; about 8,000 building-services firms in total
- FWS installer and WPSM certificate-holder lists (availability unverified)
- Cantonal energy-office installer events
- Heat-pump wholesalers' installer networks

**Risks:**  
- Cantons keep simplifying: notification procedures, more digital portals, and BL already calls its process "simple".
- Rules change every year, so maintenance is constant.
- The heat-pump market is shrinking.
- Wholesalers or the Gebäudeprogramm could add a job wizard themselves.
- Installers may push this work onto homeowners or energy advisers.

**Kill condition:**  
Interviews show installers spend under about an hour per job on admin, or that homeowners or energy advisers do the subsidy filing. Another kill: a major wholesaler or the Gebäudeprogramm already offers a combined permit and subsidy assistant.

**Score:** 5/10

**Sources:**  
- https://www.zh.ch/de/planen-bauen/bauvorschriften/bauvorschriften-gebaeude-energie/heizungsersatz.html
- https://www.zh.ch/de/umwelt-tiere/laerm-schall/planen-bauen-laerm/laermschutz-neuanlagen.html
- https://www.cerclebruit.ch/enforcement/6/CB_Vollzugshilfe_621_Waermepumpen_DE.pdf
- https://efoerderportal.sg.ch/Documents/Static/Wegleitung/WP/de-CH/Wegleitung.pdf
- https://www.sz.ch/public/upload/assets/82331/Foerderprogramm_Energie_2026_des_Kantons_Schwyz.pdf?fp=8
- https://www.baselland.ch/politik-und-behorden/direktionen/bau-und-umweltschutzdirektion/umweltschutz-energie/energie/heizungsersatz
- https://www.fws.ch/wp-content/uploads/2024/11/Fachvereinigung-Waermepumpen-20241114.pdf
- https://www.energieheld.ch/heizung/foerderung
- https://www.gebaeudetechnik.ch/de/news/elektroform-solar-einfach-digital--155
- https://www.ekas.admin.ch/fileadmin/Dokumente/Kurzbeschriebe_ueBL_ASA-Loesungen/Branchenloesungen/DE/BL_80_Betriebe_der_Gebaeudetechnik-Branchen.pdf

### Opportunity: Posted-work compliance pack for EU craft firms taking jobs in Switzerland

**Industry:**  
Construction trades, installation and assembly, landscaping, cleaning (cross-border service providers)

**Buyer:**  
Owner or office manager of small German, Austrian, Italian and French craft firms (border regions: Baden-Württemberg, Bavaria, Vorarlberg, Lombardy, Alsace) that regularly send crews to Swiss job sites. Second target: the chambers of crafts and IHKs that advise them.

**Trigger / Why now:**  
- Since 17 Mar 2025, all notifications must be filed on the new EasyGov.swiss platform, and every company needs a Swiss UID.
- The Bilaterale III package went to Parliament on 13 Mar 2026. It will cut the notice period from 8 calendar days to 4 working days and allow a deposit only after a past violation. These rules are due three years after the amended free-movement agreement enters into force, so firms face another rule change later.

**Current workflow:**  
1. For each Swiss job, the office files an EasyGov notification at least 8 days before work starts. In construction, landscaping, cleaning and some other sectors this applies from day one.
2. It checks whether a generally binding GAV applies (SECO GAV and minimum-wage tool) and works out the Swiss wage per worker.
3. It pays or tracks the GAV deposit (typically CHF 10,000 a year if Swiss turnover is over CHF 20,000).
4. It requests A1 certificates in the home country and counts the 90 working days per year.
5. It answers document requests from parity commissions after a check (payslips, time records).

**Pain:**  
- Parity commissions found that 19% of posting firms broke GAV wage rules. SECO reports wage underbidding at 20% of posting companies, and 25% of posted workers were checked in 2024.
- Sanctions include fines and a public SECO list of firms banned from providing services, which Swiss clients consult.
- Chambers (IHKs, Handwerkskammern) publish repeated guides on the bureaucracy, which points to steady demand for help.

**Existing solutions:**  
- EasyGov (free)
- SECO posting and minimum-wage calculator (free)
- Workflex (posted-worker notification platform covering Switzerland)
- Enterprise mobility platforms (Vialto and similar; unverified for Switzerland)
- Consultants and fiduciaries (Rister, Arletti Partners)
- IHK and chamber advisory services

**The gap:**  
For a 5–30 person craft firm, no affordable tool found that combines these per job:
- notification data
- the GAV/canton wage check and Swiss-wage top-up on the payslip
- the 90-day counter across jobs and workers
- deposit status
- a ready dossier for inspections

Enterprise tools focus on business travellers, not trade crews.

**Possible product:**  
"Swiss job pack" for craft firms. Enter the job (canton, trade, crew, dates) and the tool drafts the EasyGov notification data, computes the GAV minimum wage and top-up, tracks the 90-day limit, A1 and deposit, and outputs an inspection-ready PDF dossier per job.

**MVP:**  
German craft firms only, top 3 trades (e.g. carpentry/joinery, building services, landscaping), with GAV tables for those trades. Notification data in copy-ready format, a day counter, and a dossier generator.

**Pricing hypothesis:**  
EUR 29–49 per job, or EUR 49–99 per month (estimate).

**How to find first customers:**  
- IHK and Handwerkskammer events in Freiburg, Konstanz, Ulm and Stuttgart (they publish Switzerland guides)
- Handwerk-international programmes
- Trade directories in border districts
- Partnerships with fiduciaries already doing this manually

**Risks:**  
- The number of notifications is unverified.
- EasyGov may offer no API, so filing stays manual.
- GAV tables need upkeep.
- Bilaterale III may reduce the pain: shorter notice and less deposit.
- Workflex or the chambers may move down-market.

**Kill condition:**  
Interviews show firms do fewer than about 5 Swiss jobs a year (too rare to pay for), or that a free chamber tool or Workflex already covers craft firms well at low cost.

**Score:** 5/10

**Sources:**  
- https://faq.easygov.swiss/wp-content/uploads/2025/03/Online-Meldeverfahren-DE.pdf
- https://www.sem.admin.ch/sem/en/home/themen/fza_schweiz-eu-efta/meldeverfahren.html
- https://www.walderwyss.com/assets/content/publications/EmploymentNews-81_E.pdf
- https://www.seco.admin.ch/de/entsendung-und-mindestlohnrechner
- https://www.admin.ch/de/newnsb/l6p7DMrB4-KJLkumuYx7j
- https://www.seco.admin.ch/dam/seco/de/dokumente/Arbeit/Personenfreizuegigkeit/freier_personenverkehr_ch-eu/Faktenblatt-Innenpolitische-Massnahmen-zum-Lohnschutz.pdf.download.pdf/Faktenblatt-Innenpolitische-Massnahmen-zum-Lohnschutz.pdf
- https://www.handwerk-international.de/artikel/entsendung-von-mitarbeitern-bei-bau-und-montageleistungen-in-die-schweiz-105,0,164.html
- https://www.rister.ch/de/post/entsendung-mitarbeiter-schweiz/
- https://help.workflex.com/en/articles/10922493-requirements-for-posted-worker-notifications-in-switzerland

### Opportunity: digiFLUX delivery-reporting bridge for small input traders and contractors

**Industry:**  
Agricultural and horticultural input trade; contract farming (Lohnunternehmer); green-space operators

**Buyer:**  
Small independent traders of plant-protection products (PPP), fertiliser and feed outside the fenaco/Landi system: garden-supply wholesalers, specialist fertiliser dealers, Lohnunternehmer who supply and apply PPP. Also municipalities, golf courses and transport companies that use PPP professionally.

**Trigger / Why now:**  
- Trade reporting on digiFLUX is required from 2026 (platform live since 15 Jan 2026). It replaced HODUFLU for manure movements in mid-2026.
- From 1 Jan 2027, professional PPP users must report under a simplified 3-year introductory regime: they accept or reject trader deliveries and declare annual stock by 31 January.

**Current workflow:**  
1. The trader issues a delivery note from its ERP or invoicing tool.
2. Each delivery to a professional buyer is entered in the digiFLUX web app, or via the Excel template or the API.
3. Buyers confirm or reject deliveries and do an annual stock count.

**Pain:**  
- Strong political resistance: cantonal initiatives (St. Gallen, Fribourg), a Federal Audit Office "mangelhaft" verdict, and farmers calling it a "massive expansion" of record-keeping.
- Early uptake was low: four trading companies and "several dozen" farms registered in the pilot.

**Existing solutions:**  
- digiFLUX web app, Excel upload and API (free, BLW)
- Barto smart-farming platform: a digiFLUX interface backed by fenaco, already connected to Landi and cantonal systems
- IP-Suisse smartfarm field calendar
- Trader ERPs (names unverified)

**The gap:**  
Small traders whose invoicing tool has no digiFLUX connector, and green-space operators outside the farm software world. Excel upload already covers much of this.

**Possible product:**  
A connector that turns invoices or delivery notes (CSV/PDF from common Swiss SME invoicing tools) into digiFLUX API submissions, with product-code mapping (W-number / fertiliser IDs) and status reconciliation. Possibly also an annual stock-declaration helper for municipalities.

**MVP:**  
CSV/bexio export → digiFLUX API for PPP deliveries, with error handling.

**Pricing hypothesis:**  
CHF 30–80 per month (estimate); a small market.

**How to find first customers:**  
- PPP trade authorisation holders (BLV/BLW lists; availability unverified)
- Agro-Lohnunternehmer Schweiz association
- JardinSuisse members

**Risks:**  
- The free Excel upload may be "good enough".
- fenaco/Barto dominate farm-side integration.
- Parliament may simplify or cut the obligation further.
- Very small number of traders.

**Kill condition:**  
Fewer than about 200 independent reporting traders, or most report fewer than about 50 deliveries a month (Excel is enough).

**Score:** 3/10

**Sources:**  
- https://www.blw.admin.ch/de/anwendung-digiflux
- https://digiflux.info/de/handel/
- https://digiflux.info/de/digiflux-einfuehrungsphase-mit-vereinfachter-mitteilungspflicht/
- https://www.agro-lohnunternehmer.ch/ratgeber-technik/digiflux-was-lohnunternehmer-wissen-muessen
- https://www.bauernzeitung.ch/artikel/organisationen-firmen/digiflux-ist-online-auch-schon-fuer-betriebe-551839
- https://www.schweizerbauer.ch/artikel/politik-wirtschaft/agrarpolitik/mangelhaft-finanzkontrolle-kritisiert-digiflux
- https://www.bluewin.ch/en/news/switzerland/st-gallen-cantonal-council-wants-to-stop-reporting-tool-for-agriculture-li.2370030

## Rejected after competitor research

- **Passar import-declaration bridge** (first-pass top idea, now 2/10). The last e-dec Import declaration is 31 Mar 2027 per the BAZG roadmap (one secondary source says 30 Sep 2027). BAZG offers Passar and the Declar web app free of charge to SMEs without customs software. Commercial direct-filing tools already exist: AEB, MIC, Declarium, trademonkey, Douana and finesolutions. Sources: https://www.bazg.admin.ch/de/roadmap-passar-2-und-3, https://www.bazg.admin.ch/de/web-anwendung-declar, https://www.aeb.com/de/magazin/artikel/passar-import-broker.php, https://trademonkey.ch/, https://douana.ch/passar-neues-zollrecht-digitalisierung-was-die-bazg-umstellung-2026-2027-fuer-ihr-unternehmen-bedeutet/, https://www.vatupdate.com/2026/05/14/passar-2-0-key-steps-and-deadlines-for-importers-in-swiss-customs-digitalization-transition/
- **French cross-border telework-day tracking (new 2026 duty)**. bexio Payroll already records telework and travel days and warns at the 40%/10-day limits. ELM 5.0 payroll, ISeL and tipee/Lucca cover the rest. Sources: https://www.bexio.com/fr-CH/product-update-news/decembre-2025, https://www.ge.ch/imposition-du-teletravail-personnes-frontalieres/obligations-employeur-matiere-teletravail, https://www.lucca-software.ch/blog/suivi-temps/teletravail-frontaliers-suisse
- **Spitex / freelance-nurse residual-financing billing**. NURSANA already bills communes (CHF 199/month), and the format is the standard Forum Datenaustausch XML. Some cantons route billing through a central clearing office. Sources: https://nursana.ch/, https://media.bs.ch/original_file/8be94ea464aba4d88e20696573c20cb3d190eecf/merkblatt-elektronische-abrechnung-spitex-2026-01-01.pdf, https://sbk-asi.ch/de/pflege-und-arbeit/freiberufliche-pflege/pflegefinanzierung
- **Electrician and PV grid-operator notifications**. ElektroForm / ElektroForm solar (Brunner Informatik with Swissolar's "Easy Admin" group, 400+ firms) and M2-Hub. Sources: https://www.gebaeudetechnik.ch/de/news/elektroform-solar-einfach-digital--155, https://www.primeo-energie.ch/magnolia/dam/jcr:a92a079f-871c-4dd7-8f49-706e9634a424/FAQ%20elektronisches%20Meldewesen.pdf
- **swissdamed device registration**. Mostly one-off. EUDAMED XML upload and an M2M API are built in, and consultancies are plentiful. Sources: https://medenvoyglobal.com/blog/eudamed-and-swissdamed-mandatory-registration-requirements/, https://decomplix.com/services/swissdamed-product-registration-in-switzerland/
- **Kita voucher reporting (kiBon)**. kitAdmin has a full kiBon interface. Source: https://www.kitadmin.ch/functions
- **VeVA hazardous-waste manifests**. A free federal system with CSV interfaces and no trigger. Source: https://www.bafu.admin.ch/de/meldung-von-sonderabfaellen-und-anderen-kontrollpflichtigen-abfaellen-mit-begleitscheinpflicht
- **Stellenmeldepflicht vacancy reporting**. The official Job-Room API exists for high-volume reporters. Source: https://www.zh.ch/de/wirtschaft-arbeit/leistungen-fuer-arbeitgeber/stellen-melden-personal-finden/meldepflichtige-stelle-melden.html
- **Animal-product production-method declaration (restaurants)**. Mostly a one-off, country-list-based job. Source: https://www.blv.admin.ch/dam/blv/de/dokumente/lebensmittel-und-ernaehrung/lebensmittelsicherheit/faq-deklaration-herstellungsmethode-lm-tierischer-herkunft.pdf.download.pdf/FAQ%20Deklaration%20Herstellungsmethode%20LM%20tierischer%20Herkunft.pdf
- **SME VAT filing** and **food self-control (HACCP)**. Kept from the first pass: covered by accounting software and the ESTV ePortal; no trigger for HACCP.

## Attractive problem, poor distribution

- **Short-term rental Kurtaxe and guest registration**. Rules vary by commune (e.g. Aletsch Arena, Ettiswil 2027 rules), but hosts are scattered private owners. Airbnb collects in some areas, feratel and destination systems exist, and many communes charge flat fees. Sources: https://partner.aletscharena.ch/hubfs/Flyer-Kurtaxenreglement-Aletsch-Arena%5B1%5D.pdf?hsLang=de, https://www.airbnb.de/help/article/1242
- **NUFG supplier ESG data requests to SMEs**. The law is not final and the buyers are large firms (first pass). Source: https://www.scalemetrics.ai/de/schweizer-gesetz-unternehmensverantwortung-was-kmu-2026-wissen-muessen/

## Too competitive

- ZEV/vZEV/LEG billing for property managers: ista, EKZ "Gemeinsamstrom", ewl/Rapp, SH Power and other utilities (https://www.ista.com/ch/news/lokale-elektrizitaetsgemeinschaften-leg/, https://www.ekz.ch/dam/ekz/angebote/solar/stromgemeinschaften/leg-abrechnung/2026-EKZ-LEG-Abrechnung-Tarifblatt.pdf).
- EUDR due diligence for Swiss chocolate and coffee exporters: global EUDR SaaS (osapiens and others) and supplier packs (Callebaut) (https://www.bdo.ch/en-gb/insights/eudr-impact-on-swiss-companies).
- SME accounting and VAT tools (Abacus, bexio).

## Pass history

- First pass (4 searches): one weak opportunity (Passar import bridge, 3/10). Waste, pesticides, health, construction and others not screened.
- Deep pass (this rewrite, about 49 searches, DE/FR/EN). Changes:
  - Screened about 20 industries.
  - Corrected the Passar timeline: e-dec Import ends 2027, not end of 2026. Named the competitors (Declar free app, AEB, MIC, trademonkey, Douana, Declarium). Moved Passar to rejected (2/10).
  - Added two moderate opportunities: the heat-pump permit and subsidy router (5/10) and the posted-work compliance pack for EU craft firms (5/10).
  - Added digiFLUX as a weak opportunity (3/10).
  - Rejected the 2026 cross-border telework duty (bexio), Spitex residual-financing billing (NURSANA), electrician/PV notifications (ElektroForm), swissdamed, kiBon, VeVA and Stellenmeldepflicht after competitor checks.
  - Still not screened: funeral homes, pest control, pharmacies, insurance brokers, private schools.
  - Overall verdict: Switzerland has few gaps because federal portals and industry associations ship free tools quickly. Neither 5/10 idea should be built without installer or craft-firm interviews first.
