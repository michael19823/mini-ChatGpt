# Thailand: indie-hacker opportunity research

Research date: 2026-10-05 (deep pass). This pass ran about 52 searches (WebSearch only, because WebFetch is blocked), most of them in Thai. Facts not confirmed by a cited source are marked "unverified" or "estimate". Several facts come from search-engine summaries of the cited pages rather than from reading the pages in full. Those are marked "per search summary" where it matters.

**Accessibility:** Thailand is open. No sanctions or payment blockers were identified. PromptPay and Thai QR are the local payment rails, and cards work. Two practical limits apply. Selling to Thai B2B buyers usually means issuing Thai tax invoices and handling withholding tax, which may need a local entity or reseller (unverified). Every buyer-facing surface must be in Thai, and LINE is the default channel.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Factories: pollution-control reporting | Monthly ทส.1/ทส.2 wastewater reports to the local authority or PCD, รว. pollutant reports to DIW, plus waste permits. Handled by a registered "pollution-system controller" | **Best lead** | DIW's 2026 notification re-registers controllers, adds a test, a 3-year renewal and a cap of 5 factories per controller. Monthly and quarterly reports go to several agencies and portals. No Thai SaaS found; consultants and freelancers do the work. |
| Factories and waste processors: industrial waste | สก.2 removal permits, สก.3 annual report, DIW E-fully Manifest with GPS, IEAT e-PP with RFID inside industrial estates | Lead, merged into the one above plus a processor variant | Mandatory per load. 2,718 licensed waste processors. Processors key permits for generators free of charge to win business. Government portals are free. |
| Durian packing houses (ล้ง) | Per-shipment lab reports (cadmium and BY2), GAP-plot linkage, TAS 9070 receiving records, GMP-DOA | Lead (seasonal) | Mandatory since 2025 with heavy enforcement. 1,926 GMP-DOA packing houses. Only government and ADB pilot traceability tools were found. |
| Engineering inspection firms | Building inspection reports (ร.1), crane forms ปจ.1/ปจ.2, electrical inspection | Weak lead | Mandatory and recurring, with no Thai report tool found. However, much of it is annual, buyers are small firms, and Bangkok has moved submission online. |
| Cannabis dispensaries | Monthly reports (ภ.ท. forms), prescriptions (ภ.ท.33), traceability | Reject: too competitive and shrinking | Cannabox POS and Klu POS already automate the reports. The 2026 ministerial regulation forces shops to become clinics or pharmacies, and most licences lapsed. |
| Pharmacies | ข.ย.9–13 controlled-drug and dangerous-drug sales registers | Reject | tPHARM (free), Ranyadee, PharCare, CW Software and others already generate the registers. |
| Pharmacies, clinics and labs under the NHSO "30 baht anywhere" scheme | Claims from "innovative service units" | Reject | 12,325 units are registered, but NSTDA's free A-MED Care platform is the claims backend. |
| Agri exporters (rubber, palm, coffee, cocoa, timber) | EUDR due-diligence statements | Weak (3/10) | Dates confirmed: 30 Dec 2026 and 30 Jun 2027. The EU's May 2026 simplification cuts costs by about 75%. The free government NESW platform exists. |
| CBAM exporters (steel, aluminium) | Embedded-emissions data for EU importers | Weak (4/10) | Real SME data gap, but the segment is narrow and served by consultants and verifiers. |
| Large emitters | GHG reporting under the draft Climate Change Act | Not yet / too competitive | Cabinet approved the draft on 2 Dec 2025. It covers about 3,000–4,000 large organisations, reporting annually with verification. Consultants and carbon software serve them. |
| Payroll / HR | Social Security wage ceiling raised to THB 17,500 from 1 Jan 2026 | Reject | Standard payroll vendors (empeo, OmniHR and others) absorb the change. |
| Trucking | DLT GPS rules; foreign trucks need GPS from 1 Jan 2027 | Reject | Hardware-led and served by GPS vendors. |
| Fisheries / seafood exporters | Catch certificates (TFCC), processing statements (PPS) | Reject | Government-run systems with no third-party layer. Exporters are few and large. |
| Livestock movement | DLD e-Movement permits | Not pursued | Free government system. No evidence of pain found in the search budget. |
| Customs brokers | e-Customs declarations | Not pursued | Mature VAN and software market (Netbay and others). No 2026 trigger found. |
| Online sellers | Platform income data sent to the Revenue Department | Poor distribution | Consumer-like buyers, served by accounting apps. |
| E-invoicing | e-Tax Invoice | Reject | Voluntary. Free email route for SMEs (earlier pass). |
| Food factories | Thai FDA licence renewal | Reject | The FDA's own automated e-Submission renewal (earlier pass). |
| Hotels / landlords | TM30 foreigner notification | Reject | Cloudbeds and Thai PMS products already integrate (earlier pass). |
| Employers of foreign workers | 90-day reports, work permits | Poor distribution | Filing is in person or through agents, and buyers are fragmented (earlier pass). |
| PDPA (all SMEs) | DPO, records of processing | Too competitive | Law firms and privacy tools (earlier pass). |
| Condo / village juristic persons; security-guard companies | Billing; guard licensing | Inconclusive | Searches returned nothing usable. Not scored. |

## Opportunities

### Opportunity: Multi-Factory Environmental Reporting Workspace for Pollution-System Controllers

**Industry:**  
Factory environmental compliance: wastewater, air and industrial waste.

**Buyer:**  
There are two buyers.
- Registered pollution-system controllers (ผู้ควบคุมระบบบำบัดมลพิษ) and small environmental consultancies that act as controllers for several factories. Each can serve at most 5 factories.
- The EHS or environmental officer at small and mid-size factories (Factory Act category 3) who files the reports in-house.

**Trigger / Why now:**  
- **2026 controller rules.** A DIW notification (B.E. 2569) changes how controllers are registered. It moves registration online, adds a standards test, makes certificates valid for 3 years with renewal 30 days before expiry, and limits each controller to 5 factories (per a secondary summary).
- **New registry.** On 1 Feb 2026 DIW opened a new registry for factory environmental personnel (env-person.diw.go.th) and is doing field checks on whether factories actually employ them.
- **Waste tracking (DIW).** DIW's E-fully Manifest ties waste loads to GPS on the transport trucks.
- **Waste tracking (IEAT).** Inside industrial estates, IEAT announcement 205/2568 requires generators, transporters and processors to use the IEAT e-PP system: manifest notification, GPS, RFID cards for hazardous waste, weighing, and receipt confirmation within set time limits. Per a secondary summary it is effective from 1 Jan 2026; the exact date is unverified.

**Current workflow:**  
1. Plant staff record treatment-system data every day on paper or in Excel (ทส.1 daily log).
2. Each month the controller summarises it into ทส.2 and submits it to the local official or through PCD's online channel within 15 days.
3. Lab results for pollutants are compiled into รว. reports in DIW's hawk/eis system: รว.1 to รว.3/1, with measurement-based reporting roughly every 3 months (per search summary).
4. Waste removal permits (สก.2) and the annual waste report (สก.3) go through DIW's e-waste system. Factories inside industrial estates also use IEAT e-PP. Each load needs a manifest.
5. The controller repeats steps 1 to 4 for up to 5 factories, each with its own logins, deadlines and lab vendors.

**Pain:**  
- **Many reports across separate portals.** These are mandatory, recurring reports with fixed deadlines, spread over separate government portals: PCD/local authority, DIW hawk/eis, DIW e-waste, IEAT e-PP and DIW env-person.
- **The work is already outsourced and paid for.** A market of consultants and freelancers does this today. Fastwork listings sell "pollution controller for water, waste and air, plus รว. and ทส.1–2 report preparation". Consultancies such as Elmer, Siam Environmental Technologies and Waste Circle publish guides and sell the registration and reporting service.
- **2026 rules add pressure.** The 5-factory cap and the 3-year renewal formalise the controller role and increase DIW scrutiny.
- **Missing reports are a factory offence.** Pain and hours per factory are not quantified (unverified).

**Existing solutions:**  
- Free government portals: PCD/ereportmatra80 for ทส.2, DIW hawk/eis for รว., DIW e-waste, IEAT e-PP.
- Consultancies and freelancers doing the work manually.
- Excel.
- Generic or foreign EHS software, for example TECH EHS (Indian).
- Waste processors that key สก.2 for clients as a free add-on (EN Technology advertises "free สก.2 keying").
- No Thai SaaS aimed at controllers was found in 4 targeted searches. This is not proof that none exists.

**The gap:**  
Nothing found lets one controller keep a single dataset per factory and produce every deliverable from it: the ทส.1 log, the monthly ทส.2, รว. drafts, สก.2/สก.3 and e-PP data. Nothing found tracks deadlines across 5 factories and several portals, or keeps an evidence pack (lab reports, manifests, photos) ready for DIW or IEAT inspections.

**Possible product:**  
A Thai-language workspace for controllers and EHS officers. Plant staff enter daily readings in a LINE or LIFF form. The system generates ทส.2 and รว. drafts in each portal's format, plus waste-permit and manifest checklists, and keeps a per-factory deadline calendar and audit pack. A later version adds browser-assisted filling of the government portals.

**MVP:**  
- Daily wastewater log through a LINE form.
- Auto-generated ทส.2 (PDF and the fields for online submission).
- Monthly and quarterly deadline reminders across up to 5 factories.
- Lab-result upload with limit checks against permit standards.
- An "inspection pack" export.

Skip รว. and e-PP until interviews confirm they are the bigger pain.

**Pricing hypothesis:**  
Estimate:
- THB 990–1,990 per factory per month, sold to the controller, who passes it on in their fee.
- THB 3,000–5,000 per month for an in-house EHS team covering several sites.
- Reference point: freelance controller services on Fastwork are priced per factory per month (amount unverified).

**How to find first customers:**  
- DIW's public lists of registered controllers and consultancy firms (env-person registry; public access unverified).
- TEI (Thailand Environment Institute) training cohorts for controllers. TEI runs the courses.
- Consultants advertising on Fastwork and their own websites.
- Industrial-estate environment offices, IEAT and private estates such as Amata.
- Provincial industry offices' training events.

**Risks:**  
- No public APIs, so portal submission stays manual or browser-assisted, and portals change.
- Government may merge the portals into one, which removes the routing value but not the data capture.
- Factories are price-sensitive. Some large consultancies may have in-house tools (unverified).

**Kill condition:**  
Any one of these:
- Interviews with 10 controllers show that monthly ทส.2 plus รว. take less than about 2 hours per factory per month.
- A Thai vendor already sells this to controllers.
- DIW or PCD announce a single unified reporting portal with daily-log capture in the next 12 months.

**Score:** 6/10

**Sources:**  
- https://th.gb-planet.com/environmental-regulatory-update/news-2026031002.html (DIW 2026 controller registration notification: 5-factory cap, 3-year validity)
- https://www.diw.go.th/webdiw/a29012569-01/ (new environmental personnel registry from 1 Feb 2026)
- https://www.diw.go.th/webdiw/pr68-594/ (DIW field checks on factory environmental personnel)
- https://www.pcd.go.th/laws/11185/ and https://phichit.mnre.go.th/th/information/list/93 (ทส.1 daily, ทส.2 monthly within 15 days)
- http://www.ereportmatra80.com/ (online ทส.2 channel)
- https://hawk.diw.go.th/eis/separate.php (DIW รว. pollutant reporting system)
- https://th.gb-planet.com/environmental-regulatory-update/news-2025120102.html (IEAT 205/2568, e-PP, GPS, RFID)
- https://epp-ent.ieat.go.th/epp/ (IEAT e-PP portal)
- https://www.mreport.co.th/news/government-news/356-E-fully-Manifest-for-Industrial-Waste-Disposal (DIW E-fully Manifest with GPS)
- https://fastwork.co/user/than.ct/architect-engineer-other-61085201 (freelance controller and report service)
- https://www.elmer-int.com/article/148/ and https://www.siamentech.com/ (consultant guides and services)

### Opportunity: Waste Processor and Transporter Manifest Desk (DIW plus IEAT e-PP)

**Industry:**  
Licensed industrial waste processors and transporters (factory types 101, 105 and 106).

**Buyer:**  
Customer-service or compliance staff at waste processors and brokers who handle permits and manifests for dozens or hundreds of generator factories.

**Trigger / Why now:**  
- The 2023 MOI waste regulation makes the generator liable until final disposal.
- DIW's E-fully Manifest ties every load to GPS. Of about 5,000 vehicles licensed to carry hazardous substances (วอ.8, 2020 figure), the GPS rule applied first to those.
- Inside industrial estates, IEAT 205/2568 adds the e-PP system with RFID cards for hazardous waste and time-limited receipt confirmation.
- The result is two parallel systems, DIW and IEAT, for the same load.

**Current workflow:**  
1. The processor wins a client. Its staff log into DIW's e-waste system for the generator, often with the generator's own credentials, and key the สก.2 permit.
2. For each pickup: issue the manifest in DIW's system or IEAT e-PP, dispatch a GPS-tracked truck, weigh the load, and confirm receipt.
3. Reconcile weights and manifest status across generator, transporter and processor.
4. Help clients compile สก.3 annual data.

**Pain:**  
- Processors absorb the clients' permit paperwork as a free service. EN Technology advertises "free สก.2 keying", which shows it is a cost of winning business.
- Each load needs data in up to two government systems.
- The 2,718 licensed processors (144 type 101, 1,581 type 105, 993 type 106, as of Mar 2024) compete partly on paperwork convenience.

**Existing solutions:**  
- DIW and IEAT portals.
- Processors' in-house ERP or Excel.
- Large players (Veolia, Better World Green, Fusion Development) run their own GPS and tracking.
- GEPP Sa-Ard (Thai waste-data platform, mostly recyclables and municipalities).
- TECH EHS (foreign, generic).

**The gap:**  
A multi-client permit-and-manifest console for mid-size processors and brokers. It would cover permit expiry per client, manifest status across DIW and IEAT, weight reconciliation, and client-facing disposal certificates. This gap is unverified because processors' internal tools were not visible.

**Possible product:**  
A processor-side dashboard that holds every client's permits, waste codes and quantities. It prepares the data for each DIW or e-PP entry, tracks receipt confirmations, and issues disposal-proof documents to clients.

**MVP:**  
Client and permit register with expiry alerts, a per-load log with weight reconciliation, and a monthly per-client disposal report. Portal entry stays manual at first.

**Pricing hypothesis:**  
Estimate: THB 3,000–10,000 per month per processor, depending on the number of clients.

**How to find first customers:**  
DIW's list of licensed waste processors and transporters (2,718 processors), industrial-estate approved-vendor lists, and the Federation of Thai Industries' waste-management groups.

**Risks:**  
- Large processors have their own systems.
- Small type-105 sorters may have little admin work.
- Credential sharing on government portals is a grey area.

**Kill condition:**  
Interviews show processors handle fewer than about 20 active client permits each, or DIW/IEAT systems already give processors a multi-client view.

**Score:** 5/10

**Sources:**  
- https://www.thansettakij.com/news/general-news/593769 (2,718 waste processors by type, per search summary)
- https://www.en-technology.com/documents-related-to-industrial-waste-management/ (free สก.2 keying offered by a processor)
- https://th.gb-planet.com/environmental-regulatory-update/news-2025120102.html
- https://mgronline.com/business/detail/9590000031950 (GPS mandate for waste trucks)
- https://www.tilleke.com/insights/thailand-embraces-polluter-pays-principle-as-new-regulation-on-industrial-waste-takes-effect
- https://ecosystemstartupthailand.nia.or.th/startup/GEPP-Sa-Ard-Co.,-Ltd.

### Opportunity: Durian Packing-House Compliance Ledger (GAP Lots, Lab Reports, TAS 9070)

**Industry:**  
Fresh-fruit packing houses and exporters (ล้ง), mainly durian bound for China.

**Buyer:**  
The owner or QA/document clerk at small and mid-size GMP-DOA packing houses, especially in Chanthaburi, Rayong, Chumphon and the south.

**Trigger / Why now:**  
- **Per-shipment lab reports.** Since 13 Jan 2025 every container or shipment of durian to China needs a cadmium and Basic Yellow 2 test report from a DOA-recognised lab.
- **Mandatory receiving standard.** ACFS made TAS 9070-2023 mandatory for collection and packing houses. ACFS has acted against packing houses that bought fruit without the required licence.
- **GAP-certificate misuse.** DOA warns of legal action for misusing farmers' GAP certificates, under the anti-"nominee"/"สวมสิทธิ์" policy.
- **2026 rules are tighter.** Pre-harvest checks and traceability codes link each package to the national fruit traceability system.

**Current workflow:**  
1. Buy fruit from many growers and record grower, GAP plot number, weight and date, often on paper or in LINE chats.
2. Allocate lots to containers.
3. Send samples to a recognised lab and wait about 48 hours for the cadmium/BY2 report.
4. Request the phytosanitary certificate and prepare DOA and GACC documents.
5. Keep TAS 9070 receiving records and GMP evidence for inspections.

**Pain:**  
- **Heavy enforcement.** Licence suspension, fines and possible imprisonment under the Agricultural Standards Act, and a rejected container at the Chinese border costs millions of baht.
- **Volume.** 1,329 shipments were exported in Jan–Feb 2025 alone.
- **Evidence trail.** The GAP-plot to lot to container trail is exactly what DOA/ACFS audit and what GAP-certificate fraud exploits.

**Existing solutions:**  
- DOA's GAP Online (QR per plot).
- Government and ADB-backed traceability pilots: BIOTEC-NECTEC, and a GS1 China–Thailand durian pilot.
- University prototypes.
- General ERPs.
- Freight forwarders and shipping agents who prepare export documents.
- No commercial packing-house compliance SaaS was found in 3 searches. This is unverified, and Chinese-owned houses may use Chinese software.

**The gap:**  
A cheap Thai/Chinese bilingual ledger is missing. It would capture grower purchases against verified GAP plot numbers, enforce TAS 9070 receiving records, link lots to containers and lab reports, and output the inspection and export pack.

**Possible product:**  
A mobile-first receiving app that scans the GAP QR, records the weight, assigns a lot and links it to a container. It attaches the lab PDF and produces a TAS 9070/GMP audit file and a per-container traceability sheet.

**MVP:**  
GAP-QR scan and validation at receiving, lot and container linking, lab-report upload with a warning for missing or expired reports, and a PDF audit pack. Thai and Chinese UI.

**Pricing hypothesis:**  
Estimate: THB 2,000–5,000 per month during the season, or about THB 100–300 per container.

**How to find first customers:**  
- DOA's GMP-DOA packing-house register: 1,926 houses, 875 of them in the East and 801 in Chanthaburi alone.
- Thai durian trade associations (for example thaitda.org).
- DOA's seasonal operations centres in Chanthaburi.

**Risks:**  
- Seasonality: peak is roughly Apr–Aug in the East and later in the South.
- Many houses are Chinese-owned and may follow Chinese buyers' tools.
- DOA or ACFS may mandate their own national traceability app (the ADB/NECTEC work points that way).
- Accepting low prices for a short season.

**Kill condition:**  
DOA mandates a free national receiving and traceability app for all GMP houses for the 2027 season, or interviews show most houses already use a Chinese buyer-provided system.

**Score:** 5/10

**Sources:**  
- https://www.sgs.com/th-th/news/2025/02/exporting-durian-to-china-and-food-safety-regulations (per-shipment Cd/BY2 test report from 13 Jan 2025)
- https://www.thansettakij.com/economy/trade-agriculture/617220 (recognised labs, 48-hour turnaround)
- https://www.isranews.org/content-page/item/79053-china-79053.html and https://siamrath.co.th/agriculture/7ee6c23c-479e-4d91-a2c8-81d00e7b0f98 (GMP-DOA packing-house counts, per search summary)
- https://www.freshplaza.com/asia/article/9839069/thailand-probes-durian-export-complaint-over-gap-misuse/
- https://thailand.prd.go.th/en/content/category/detail/id/52/iid/504049 (TAS 9070 enforcement, traceability)
- https://www.nationthailand.com/news/policy/40066330
- https://www.gs1.org/insights-events/case-studies/one-fruit-two-countries-full-traceability-how-gs1-standards-help-track-every
- https://www.biotec.or.th/home/?p=24071 (BIOTEC-NECTEC ADB traceability project)

### Opportunity: Statutory Inspection Report Builder for Thai Engineering Inspection Firms

**Industry:**  
Engineering inspection firms: annual building inspection (ร.1), crane and hoist testing (ปจ.1/ปจ.2), and electrical system inspection.

**Buyer:**  
Owner-engineer at small licensed inspection firms. About 3,000 building inspectors have registered, but only about half renew. Then there are licensed machine, crane and boiler testing providers (Section 11 juristic persons) and electrical inspectors.

**Trigger / Why now:**  
- The March 2025 earthquake raised scrutiny of buildings.
- On 1 Apr 2025 Bangkok opened an online building-inspection reporting system, and BMA publishes a building-inspection dashboard.
- Under the 2021 ministerial regulation on machinery, cranes and boilers, inspection forms must be kept for official review.

**Current workflow:**  
1. Inspect on site, taking photos and a checklist on paper or a phone.
2. Assemble a thick Word/PDF report in the regulator's form.
3. The client files ร.1 with the local authority, online in Bangkok but often on paper elsewhere.
4. The firm tracks each client's next due date (annual, or periodic by crane capacity) manually.

**Pain:**  
- Report assembly is the bulk of the work.
- Forms differ by regime: building, crane and electrical.
- Due-date tracking drives repeat revenue.
- Evidence of pain is indirect: firms advertise "we file ร.1 for you".

**Existing solutions:**  
- Word/Excel templates.
- Generic inspection apps: SafetyCulture, GoAudits, Fulcrum.
- FASTCheck, a Thai app for pre-transfer home-defect inspection, not statutory forms.
- The client's own maintenance software.

**The gap:**  
No tool was found that outputs the exact Thai statutory forms (building inspection report and ร.1 package, ปจ.1/ปจ.2) from a mobile checklist and manages due dates per client asset.

**Possible product:**  
A mobile checklist app with Thai statutory templates that produces a submission-ready PDF and runs a renewal CRM per building or crane.

**MVP:**  
ปจ.1/ปจ.2 crane templates only, because they are the most frequent: photo capture, PDF output, and a due-date calendar for client assets.

**Pricing hypothesis:**  
Estimate: THB 1,500–3,000 per month per firm, or THB 100–200 per report.

**How to find first customers:**  
- DPT's register of building inspectors (individual and juristic).
- The DLPW list of licensed testing providers.
- Engineering Institute of Thailand (EIT) training cohorts.
- Firms listed on Yellow Pages Thailand.

**Risks:**  
- Low frequency for buildings, which are annual.
- Small, price-sensitive firms.
- Generic apps can be configured to do much of this.
- Uncertain ROI.

**Kill condition:**  
Interviews show firms already reuse Word templates in under 1 hour per report, or SafetyCulture templates in Thai are common.

**Score:** 4/10

**Sources:**  
- https://webportal.bangkok.go.th/yota/ (BMA online building-inspection reporting system from 1 Apr 2025)
- https://opencontract.bangkok.go.th/bkkbuilding.html (BMA building-inspection dashboard)
- https://th.wikipedia.org/wiki/ผู้ตรวจสอบอาคาร and https://fpei.ku.ac.th/building-inspector/ (about 3,000 registered inspectors, about half renew; per search summary)
- https://www.ttmcrane.com/crane-laws-update-2023/ and https://www.shecu.chula.ac.th/data/boards/728/ (crane and boiler rules)
- https://info.go.th/procedure/9d2f8578-29d9-4e22-b714-321d263eddce/view (licensing of testing providers)
- https://apps.apple.com/th/app/fastcheck/id6448012908

### Opportunity: CBAM Embedded-Emissions Data Pack for Thai Steel and Aluminium Suppliers

**Industry:**  
Small steel and aluminium fabricators and suppliers exporting to the EU.

**Buyer:**  
The sustainability, quality or sales manager at SME exporters who answers EU importers' data requests.

**Trigger / Why now:**  
- The CBAM definitive phase began on 1 Jan 2026.
- KResearch warns of a THB 28bn export hit, with steel most exposed and SMEs lagging on carbon data.
- SMEs without data must accept EU default values, which raise their buyers' costs.

**Current workflow:**  
1. The EU importer sends a template.
2. The exporter collects energy and material data in spreadsheets.
3. A consultant or verifier calculates and signs off.
4. The data goes back to each buyer separately.

**Pain:**  
Consultant and verifier costs, staff hours, and loss of EU buyers if defaults make the product uncompetitive.

**Existing solutions:**  
- Consultants and verifiers.
- Global carbon-accounting and CBAM SaaS (names not verified for Thailand).
- TGO programmes (unverified).
- Bank and industry-federation advisory.

**The gap:**  
Unverified. Thai-language, buyer-template-aware data collection for small fabricators might be missing.

**Possible product:**  
A CBAM template filler and calculator for steel and aluminium only.

**MVP:**  
Upload the importer's template, enter energy and inputs, calculate with default fallbacks, and export.

**Pricing hypothesis:**  
Estimate: THB 5,000–15,000 per month.

**How to find first customers:**  
Iron and Steel Institute of Thailand and FTI member lists.

**Risks:**  
- Small segment.
- Verification stays with accredited verifiers.
- The EU keeps changing scope and thresholds (not re-verified in this pass).
- Calculation liability.

**Kill condition:**  
Fewer than about 200 Thai SMEs ship CBAM goods directly, or global CBAM vendors already localise.

**Score:** 4/10 (unchanged; no new competitor evidence)

**Sources:**  
- https://en.aecvcci.vn/tin-tuc-n14791/eu-cbam-to-shake-thai-exports-as-definitive-phase-starts-on-jan-1.htm
- https://thailand.go.th/issue-focus-detail/thai-cbam-exports-to-eu-continue-to-grow-businesses-urged-to-accelerate-sustainability-efforts/
- https://www.lhbank.co.th/getattachment/5f7ab47d-4eb2-4cec-bc49-d63b88422a51/economic-analysis-Economic-and-Industry-Analysis-2026-CBAM-Impact-Analysis-Jan2026

### Opportunity: EUDR Evidence Pack for Smaller Thai Exporters

**Industry:**  
Rubber, palm oil, coffee, cocoa and timber exporters and aggregators.

**Buyer:**  
The compliance or export manager at small and mid-size exporters and cooperatives.

**Trigger / Why now:**  
- The application dates are confirmed: 30 Dec 2026 for large and medium operators, and 30 Jun 2027 for micro and small ones.
- The European Commission's simplification package of 4 May 2026 kept those dates. It is expected to cut annual compliance costs by about 75%.
- Thailand offers the free "EUDR One Data Thailand" platform and the NESW single window.

**Current workflow:**  
Collect plot geolocation and legality evidence from suppliers, assess risk, file a due-diligence statement (or pass the data to the EU operator), and keep records.

**Pain:**  
Fragmented smallholder data, mostly in Excel and LINE. The burden is reduced by Thailand's low-risk status and the simplification.

**Existing solutions:**  
- Government NESW and ARDA platforms (free).
- Tracextech, which markets to Thai rubber exporters directly.
- ERP modules.
- Consultants.

**The gap:**  
Supplier-data intake and cleaning before NESW, and buyer-specific evidence packs. Unverified.

**Possible product:**  
A supplier-data collection and validation layer that exports to NESW and to buyer formats.

**MVP:**  
Excel and LINE intake, polygon validation, and an export file for NESW.

**Pricing hypothesis:**  
Estimate: THB 3,000–10,000 per month per exporter.

**How to find first customers:**  
- Rubber Authority of Thailand (RAOT) and Thai Rubber Association member lists.
- Coffee and palm associations.

**Risks:**  
- A free government platform.
- Simplification lowers the burden.
- The buyer base is concentrated in a few large exporters.

**Kill condition:**  
NESW handles bulk intake and buyer exports, or fewer than about 300 reachable exporters remain.

**Score:** 3/10 (down from 4 because the EU simplification cuts the burden and the free government tooling is live)

**Sources:**  
- https://www.bakermckenzie.com/en/insight/publications/2026/05/eu-commission-publishes-simplification-review-of-eudr
- https://www.hlc.com/en/publications/eu-deforestation-regulation-commission-publishes-simplification-package-ahead-of-december-2026
- https://thailand.go.th/issue-focus-detail/thailand-launches-eudr-one-data-platform-for-farm-exports
- https://tracextech.com/eudr-exporters/rubber-parts-exporters-thailand/

## Rejected after competitor research

- **Cannabis dispensary compliance (ภ.ท. monthly reports and prescriptions):**
  - Cannabox POS advertises built-in automation of the ภ.ท.28 report.
  - Klu POS calls itself Thailand's #1 dispensary POS, with prescription handling.
  - The market is also shrinking. A ministerial regulation (No. 2, B.E. 2569) took effect on 30 Apr 2026 and limits sellers to clinics, pharmacies and registered herbal shops. 18,433 establishments existed at end-2025, but 8,636 licences expired and only 1,339 were renewed.
  - Sources:
    - https://pos.cannabox.co.th/
    - https://www.klupos.com/en
    - https://www.bangkokbiznews.com/health/1233934
    - https://www.hfocus.org/content/2026/01/36604
- **Pharmacy controlled-drug registers (ข.ย.9–13):** tPHARM (free), Ranyadee (Qsofttech), PharCare, Hygeia and CW Software already generate the registers automatically. Sources:
  - https://tpharm.app/
  - https://qsofttech.com/ranyadee-app/
  - http://www.pharcare.net/
- **NHSO "30 baht anywhere" claims for pharmacies, nursing clinics and lab clinics (12,325 units):** NSTDA's free A-MED Care platform is the claims backend for pharmacies, nursing clinics, medical clinics and Thai-medicine clinics. Sources:
  - https://www.nstda.or.th/digitalhealth/service/a-med-care-pharma/
  - https://www.hfocus.org/content/2024/11/32371
- **Payroll update for the SSO ceiling change (THB 17,500 from 2026):** standard payroll and HR vendors handle it. Source: https://kpmg.com/th/en/home/insights/2026/01/th-tax-news-flash-issue-157.html
- **e-Tax Invoice readiness:** voluntary, with a free Revenue Department email route. Source: https://www.fiscal-requirements.com/news/5729-thailands-e-invoicing-remains-voluntary-key-20262027-updates-and-tax-incentives
- **Food-factory licence renewal:** Thai FDA's automated e-Submission. Source: https://en.fda.moph.go.th/news/thai-fda-launches-automated-system-for-food-license-renewal-apply-anytime-anywhere
- **TM30 filer:** Cloudbeds and Thai PMS products. Source: https://cloudbeds.com/government-compliance/thailand
- **Seafood catch-certificate tooling:** government TFCC and PPS systems, used by a few large exporters. Source: https://www.mfa.go.th/en/content/5d5bd12915e39c30600236a8?cate=5d5bcb4e15e39c306000683e
- **Truck GPS compliance:** hardware-led and served by GPS vendors. Source: https://www.nationthailand.com/news/policy/40071366

## Attractive problem, poor distribution

- **90-day reports and work permits for foreign workers:** filing is in person or through agents, and buyers are fragmented. Source: https://www.bal.com/immigration-news/thailand-additional-requirements-for-90-day-report-applications-announced/
- **Online-seller income reporting:** about 3 million consumer-like sellers. Source: https://www.tilleke.com/insights/thailand-requires-electronic-platforms-to-report-income-from-business-operators/

## Too competitive / not yet

- **PDPA compliance:** law firms and privacy tools. Source: https://www.tilleke.com/insights/key-takeaways-from-thailands-data-privacy-day-2026/
- **GHG reporting under the draft Climate Change Act:**
  - Cabinet approved the draft on 2 Dec 2025, but it is not yet in force.
  - It covers about 3,000–4,000 large organisations, with verification by TGO-registered bodies.
  - The buyers are large, already served by carbon consultants and software, and a ministerial regulation is still pending.
  - Sources:
    - https://www.nortonrosefulbright.com/en/knowledge/publications/2af90ff7/the-impact-of-thailand-climate-change-bill
    - https://chandler.morihamada.com/en/insights/newsletters/7231

## Pass history

- **First pass (2026-10-04):** about 12 searches. Led with the DIW waste manifest router (6/10), EUDR (4/10) and CBAM (4/10). Competitor diligence was missing.
- **Deep pass (2026-10-05, this file):** about 52 searches, mostly in Thai. Changes:
  1. Verified the waste trigger and broadened it. The DIW 2026 controller notification (5-factory cap), the env-person registry (Feb 2026), IEAT e-PP (announcement 205/2568) and the processor count (2,718) turned the waste lead into a wider "multi-factory environmental reporting workspace" (6/10) and a separate processor manifest desk (5/10).
  2. Added two new leads: the durian packing-house compliance ledger (5/10) and the statutory inspection report builder (4/10).
  3. Screened and rejected cannabis dispensaries (Cannabox, Klu POS), pharmacy ข.ย. registers (tPHARM and others), NHSO claims for innovative units (A-MED Care), the payroll SSO change, truck GPS and seafood traceability.
  4. Confirmed the EUDR dates and the May 2026 simplification, and lowered EUDR to 3/10. CBAM is unchanged.
  5. Still unverified:
     - whether any Thai SaaS already serves pollution controllers;
     - the exact IEAT e-PP effective date;
     - controller and processor pricing;
     - Chinese software use in durian packing houses.
