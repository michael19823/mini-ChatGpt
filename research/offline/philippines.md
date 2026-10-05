# Philippines: Offline (Quiet) Industries Pass

**Research date:** 2026-10-05
**Searches used:** 39 of 45 (WebSearch only; WebFetch blocked, no GitHub tools).
**Confidence note:** All facts with a source come from search-result summaries of the cited pages. I did not open the pages. Anything without a source is marked **(unverified)** or **(estimate)**. The existing country report (`research/countries/philippines.md`) already covers EIS e-invoicing, DO 174 contractor billing packs, PhilHealth RTH, GASTPE and PCO SMRs, plus EPR, HMO and payroll rejections. None of those are repeated here.

---

## 1. Quiet industries screened

| # | Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|---|
| 1 | Rice/corn traders, millers, onion and meat cold stores, small agri warehouses | RA 12022 s.6 and DA MC 03 s.2026: register every storage facility in RSAS by **31 Dec 2026**, keep auditable records for 5 years, keep monthly records, file **quarterly electronic reports** via the relevant regulator | Family trading houses run paper stock ledgers (unverified). The only rice-mill software found is Indian and GST-centric (Gofrugal, MTECH MillPro) | No count published. DA ordered an updated count (Tribune, 29 Sep 2026). Large: covers rice, onion, meat, sugar, grain silos, reefer vans | **Opportunity (top)** | Brand-new mandatory recurring report with a hard deadline 3 months away, criminal exposure, and no local software |
| 2 | Pawnshops (single-office and small chains) | BSP Circular 1208: reporting governance framework, monetary penalties for erroneous, late or missing reports after a 1-year observation period. Also AMLC registration plus CTR/STR within 10 working days | Small pawnshops run desktop systems or paper tickets (unverified). No PH-localized pawnshop SaaS showed up; foreign tools (PawnMate, Bravo) don't do BSP reports | 17,408 offices: 6,279 head offices and 11,129 branches (BSP figure per search summary, labelled Q1 2024; date not confirmed) | **Opportunity** | Penalties are now live, about 6,000 legal entities are named in a public BSP list, and reports recur |
| 3 | Water refilling stations, and the DOH-accredited labs that test them | Monthly bacteriological test, physical-chemical test every 6 months, results submitted to the City/Municipal Health Office. Without them there is no sanitary permit | Results are paper certificates posted on the shop façade. Sweeps close stations in batches (Bacolod 112, Baguio 2026) | More than 20,000 stations (Rappler / Water Quality Association figure, older) | **Opportunity (moderate)**, sold to labs | The station has low willingness to pay. The lab is the "one test, many receiving LGUs" router |
| 4 | Hog, poultry and gamefowl traders and livestock handlers | Per shipment: BAI Local Shipping Permit (online), VHC, ADMCC, ASF/AI lab result, DA handler's permit, provincial transport clearance, disinfection certificate, route plan | BAI permit is online, but province and LGU checkpoint papers are paper. Seizures over fake permits (QC 2024, Bohol 2026) | No count found | **Weak opportunity** | Real per-trip pain, but buyers are informal, and willingness to pay goes to fixers and brokers rather than software |
| 5 | Households employing kasambahay | RA 10361: registered contract at barangay/PESO, SSS/PhilHealth/Pag-IBIG registration and monthly remittance, payslips kept 3 years. New regional wage orders (NCR ₱7,800 from 7 Feb 2026) | Paper unified forms (PhilHealth "Household Employer Unified Registration Form"), SSS caravans | About 1.4M domestic workers, of whom only 84,190 (6%) are in SSS (2019 PSA-DOLE survey via Malaya) | **Rejected** | Compliance is 6% because enforcement is near zero. This is a consumer-behaviour change with free calculators (sweldoph.com) |
| 6 | Junk shops / scrap dealers | PD 1612 police clearance for second-hand goods. City ordinances (Naga, Marikina, Cebu) require purchase and disposal registers inspected by police | Handwritten transaction books approved by the city police office | Quezon City alone: more than 680 registered junk shops (search summary) | **Rejected** | Enforcement is episodic (cable-theft arrests target thieves, not register-keeping), willingness to pay is low, and the existing report already covered the EPR angle |
| 7 | LPG retailers | RA 11592: site-specific DOE LTO, annual reportorial forms (due 20 Jan) | Scanned forms circulate on Scribd. Consultants (Triple i) sell LTO help | DOE publishes a list of LPG establishments with a valid LTO (count not captured) | **Rejected** | Annual frequency. The LTO is a one-off consultant job |
| 8 | Agri-input (fertilizer and pesticide) dealers | FPA dealer licence, Accredited Safety Dispenser must keep sales and disposition records for FPA inspection. Online sales banned (FPA MC 1 s.2026) | Paper sales books inspected on site | No count found | **Rejected** | Record-keeping without filing. No recurring submission to automate. The online ban takes away their only digital channel |
| 9 | Jeepney/PUV transport cooperatives | CDA MC 2025-02 reports for the Certificate of Compliance, plus OTC accreditation, LTFRB franchise | Done by co-op bookkeepers and accountants | 1,738 transport cooperatives (PNA) | **Rejected** | Annual CDA cycle. Fleet, AFCS and GPS vendors already sit inside modernized co-ops |
| 10 | Tricycle operators | MTOP franchise (2–3-year validity), annual mayor's permit and sticker via TODA | Counter filing at the LGU Tricycle Regulatory Unit | Not counted | **Rejected** | ₱1,000-scale fees, and the TODA does the paperwork for free |
| 11 | Funeral parlors and embalmers | PD 856 ch. XXI sanitary permit, DOH CEUE embalmer licence, death-certificate handling at the Local Civil Registrar | Counter filing at LCR and CHO | Not counted | **Rejected (unverified depth)** | No recurring structured submission found. PSA CRVS integration is a government project, not a vendor gap |
| 12 | Commercial and municipal fishers | FAO 266 VMS/ERS for commercial vessels, voluntary municipal e-CDT (FOO 127), FAO 275 import traceability (Dec 2025) | Municipal catch logs are paper and voluntary | Not counted | **Rejected** | Commercial ERS needs hardware. The municipal side is voluntary and donor-built (USAID Oceans / SEAFDEC e-CDT) |
| 13 | Cockpits and gamefowl breeders | LGU cockpit licence (PD 449, unverified), BAI shipping permits and AI testing for gamefowl | Event-specific BAI memoranda per expo | Not counted | **Rejected** | Covered by row 4. Reputational risk around sabong |
| 14 | Rice retailers (market stalls) | BPI licence, ₱50/kg price cap on imported 5%-broken rice, DA inspections | Paper price tags, notices of violation | Not counted | **Folded into #1** | Retailers have no filing duty. The storage-facility layer above them does |

---

## 2. Strongest opportunities

### Opportunity: RSAS quarterly-report and 5-year stock-ledger kit for small agri storage operators (RA 12022)

**Industry:**
Agri-commodity storage: provincial rice and corn traders and millers, onion and garlic cold stores, meat and fish freezers, feed and grain warehouses.

**Buyer:**
Owner or family manager of a single-site or few-site trading house, rice mill, or cold-storage operator (often a second-generation family business). The secondary buyer is the bookkeeper or accountant who keeps their books.

**Trigger / Why now:**
RA 12022 (Anti-Agricultural Economic Sabotage Act, effective Oct 2024) s.6 is implemented by **DA Memorandum Circular No. 03 s.2026** (signed 2 Feb 2026). Every facility storing agri or fishery products, whether owned, leased or third-party, must register on the **Registry System for Agri Storage (RSAS)** by **31 Dec 2026**. After that date unregistered facilities are non-compliant. Operators must keep complete, auditable records for 5 years (capacity, commodities handled, inventory levels), maintain **monthly operational records** and submit **quarterly electronic reports through the relevant regulatory agency**. A nationwide inspection schedule starts in **2027**. Missing reports or manipulated digital records can lead to fines, suspension, or criminal charges (including under the Cybercrime Prevention Act).

**Current workflow:**
1. The owner keeps a handwritten or Excel stock ledger of palay/rice/onion in and out, plus delivery receipts and weighbridge tickets (unverified, typical).
2. In 2026, someone registers the facility on rsas.da.gov.ph (one-off).
3. Each quarter, someone must compile inventory levels by commodity from the ledger and key them into the e-report for the relevant agency (BPI for rice and grains, BFAR for fish, NMIS for meat, SRA for sugar; the exact routing is per the MC, not yet confirmed by me).
4. In 2027, DA inspectors arrive and ask for 5 years of auditable monthly records reconciling to what was reported.

**Pain:**
Criminal exposure under an economic-sabotage law aimed at hoarders, so traders have a strong incentive to have clean paper. Inventory mismatches between the ledger and quarterly reports are what an inspection would flag. Many commodities and agencies mean multiple report formats for diversified traders (e.g., a trader storing both rice and onions).

**Existing solutions:**
- **RSAS itself** (DA portal): registration and, presumably, report intake. It is not a ledger.
- **Rice-mill ERPs:** Gofrugal Rice Mill POS and MTECH MillPro are Indian, GST-centric, and show no PH localization.
- **Generic accounting:** QuickBooks/Xero/local POS have no commodity-quantity or warehouse-lot view in RA 12022 terms.
- **Bookkeepers/accountants**, who do BIR books but not quantity records (unverified).
- Paper stock books from stationers.

**Offline evidence:**
No PH software vendor mentions RA 12022 or RSAS in search results. The coverage is all news and DA press. The only "software" is the government registry. The buyer group (provincial millers and traders) has no forums or review pages.

**Offline channel:**
(a) Rice millers' and traders' associations, including provincial grains business associations (names to confirm; e.g., the Philippine Confederation of Grains Associations is unverified). (b) Accountants and bookkeepers in rice-belt provinces (Nueva Ecija, Isabela, Pangasinan, Iloilo). (c) DA regional field offices running RSAS registration help desks before 31 Dec. (d) Phone or WhatsApp/Viber outreach from the BPI public licence pages, which list licensed grain dealers by name (e.g., Grain Lane Dealers, Victoria Rice Trading).

**Market count:**
Not published. The DA has ordered an updated count of registered facilities. Proxy: BPI grain-dealer licences number in the thousands (estimate). Add onion cold stores and meat freezers.

**The gap:**
Nobody turns a trader's daily in/out tickets into (1) a 5-year auditable monthly ledger and (2) the quarterly per-agency e-report, with a reconciliation check before submission.

**Possible product:**
A mobile-first stock ledger (in/out by commodity, lot, facility) that prints DA-ready monthly records and produces the quarterly report in each agency's format, plus an "inspection binder" export for 2027.

**MVP:**
Rice and corn only. One facility. Daily receipts and issues entered from phone photos of delivery receipts. Monthly summary PDF and a quarterly figures sheet pre-filled for RSAS/BPI entry. Optionally, a done-for-you quarterly filing service.

**Pricing hypothesis:**
₱1,500–3,000/month per facility (about US$25–50). Or ₱5,000/quarter done-for-you filing via accountant partners.

**How to find first customers:**
BPI licence pages and grain-dealer lists, DA regional RSAS help desks, and rice-millers' associations in Nueva Ecija and Isabela.

**Willingness to pay:**
Software alone is a hard sell to an older owner. A software-plus-service bundle via the bookkeeper is the realistic model.

**Founder access:**
Needs a local (Tagalog/Ilocano/Hiligaynon speaker) for association and DA-office channels. A non-local solo founder could build it but not sell it.

**Risks:**
DA may build the quarterly report as a simple web form, which makes the reporting part trivial. Enforcement may slip as Philippine deadlines often do. The "relevant agency" routing may be uniform rather than fragmented, which reduces defensibility.

**Kill condition:**
The RSAS quarterly report turns out to be a 5-field form with no reconciliation burden, **or** DA extends the deadline indefinitely with no 2027 inspections.

**Score:** 7/10 (Pain 7, Frequency 6 (monthly/quarterly), Mandatory 9, Fragmentation 6, Competition 8 (none found), Incumbent gap 7, Buyer access 6, Willingness to pay 5, MVP 8, Distribution 5.)

**Sources:**
- https://tribune.net.ph/2026/09/29/agri-warehouses-face-year-end-registration-deadline
- https://context.ph/2026/09/29/unregistered-agri-warehouses-not-allowed-after-dec-31-2026/
- https://businessmirror.com.ph/2026/09/30/da-orders-mandatory-registration-of-farm-storage-facilities-by-year-end/
- https://tribune.net.ph/2026/02/14/da-requires-registration-of-agri-warehouses
- https://portcalls.com/da-orders-registration-of-all-logistics-facilities-handling-agri-goods
- https://www.gmanetwork.com/news/money/economy/976535/registration-agriculture-storage-facilities/story/
- https://rsas.da.gov.ph/
- https://lawphil.net/statutes/repacts/ra2024/ra_12022_2024.html
- https://lawphil.net/statutes/repacts/ra2024/ra_12078_2024.html
- https://www.gofrugal.com/retail/supermarket-pos/rice-mill-software.html
- https://m-techsoft.com/Project13.aspx
- https://buplant.da.gov.ph/2025/04/10/license-to-operate-issued-to-victoria-rice-trading/

---

### Opportunity: BSP and AMLC report pack for single-office pawnshops (Circular 1208)

**Industry:**
Pawnshops (non-bank financial institutions).

**Buyer:**
Owner-operator or compliance-officer-cum-bookkeeper of a single-office or small (2–10 branch) provincial pawnshop. This is not Cebuana, Palawan or M Lhuillier, which run their own IT.

**Trigger / Why now:**
BSP **Circular No. 1208** (signed 15 January; the year is inferred as 2025 from the circular number, unverified) amended the MORNBFI. Pawnshops must set up a reporting governance framework producing "complete, accurate, consistent, reliable and timely" reports, with **monetary penalties for erroneous, delayed or unsubmitted reports** and new rules on electronic submission and authentication. There is a **one-year observation period**, after which sanctions apply to reports falling due. If the year is 2025, the penalties are live in 2026. BSP M-2026-012 also bills 2026 supervision fees per office.

**Current workflow:**
1. Pawn tickets are issued from a home-grown desktop system (VB.NET plus SQL thesis-style systems are common, unverified) or on paper.
2. Each period the bookkeeper hand-compiles loan portfolio, auction and financial-condition schedules into BSP templates.
3. Covered and suspicious transactions are filed separately to the AMLC within 10 working days.
4. Late or erroneous reports now draw fines.

**Pain:**
Fines per erroneous or late report. A small shop has no compliance staff. Two regulators (BSP, AMLC) each have their own submission channel.

**Existing solutions:**
- Foreign pawn POS: **PawnMate, Bravo Store Systems, PawnSnap, Pawnit** (US/UK/AU compliance, no BSP or AMLC formats).
- **Local custom systems** by freelance developers (unverified, inferred from thesis repositories).
- External **accountants** and compliance consultants.
- **BSP and AMLC portals** for submission.

**Offline evidence:**
The search found no Philippine pawnshop software vendor page at all. Results were thesis projects and foreign vendors only.

**Offline channel:**
The BSP publishes the list of registered pawnshops (head offices with addresses), which supports phone outreach. Pawnshop industry associations (e.g., Chamber of Pawnbrokers of the Philippines, unverified name) and accountants serving NBFIs are further channels.

**Market count:**
6,279 head offices and 11,129 branches, 17,408 in total (BSP figure via search summary, labelled Q1 2024; date unconfirmed). About 10,000 offices are pawning-only.

**The gap:**
No affordable tool maps a small shop's ticket data to BSP's report templates and AMLC CTR files, with pre-submission validation.

**Possible product:**
A cloud pawn ledger (ticket, renewal, redemption, auction) that generates the BSP periodic reports and the AMLC CTR/STR files, with validation rules against the Circular 1208 error categories.

**MVP:**
Import from Excel or the shop's existing system, then produce the BSP report pack plus a CTR file. No POS at first.

**Pricing hypothesis:**
₱2,000–4,000/month per head office, plus ₱500 per branch.

**How to find first customers:**
The BSP list of pawnshops, filtered to single-office entities outside Metro Manila.

**Willingness to pay:**
Software, yes, because pawnshops are cash businesses already paying for systems, but the price must undercut the bookkeeper.

**Founder access:**
A non-local founder could build it, but BSP template access and trust need a local partner.

**Risks:**
BSP report formats are accessible only to supervised entities (template access is unverified). Many small pawnshops are closing or consolidating. Anyone handling pawner PII falls under the Data Privacy Act.

**Kill condition:**
BSP's own simplified expectations for small pawnshops mean the reports are a short annual form, **or** an established PH core-banking/NBFI vendor already ships BSP pawnshop reports.

**Score:** 6/10 (Pain 6, Frequency 7, Mandatory 9, Fragmentation 4, Competition 6 (unverified local vendors), Incumbent gap 6, Buyer access 8, Willingness to pay 6, MVP 6, Distribution 5.)

**Sources:**
- https://business.inquirer.net/502653/bsp-tightens-reporting-standards-for-pawnshops
- https://regalert.today/document/0060597f-8a33-4ca3-b26f-0400e89e2be3
- https://www.bworldonline.com/?p=270524
- https://malaya.com.ph/banner/bsp-pawnshop-industry-continues-to-grow
- https://verihubs.com/ph/blog/money-service-business-philippines
- https://repository.cpu.edu.ph/handle/20.500.12852/2348
- https://www.pawnmate.com/
- https://bravostoresystems.com/pawnbroker

---

### Opportunity: Lab-side routing of water refilling station test results to many LGU health offices

**Industry:**
DOH-accredited drinking-water testing labs, serving water refilling stations (WRS).

**Buyer:**
Lab manager of a private or water-district DOH-accredited water lab that tests hundreds of WRS across several cities and municipalities.

**Trigger / Why now:**
LGU sanitation sweeps in 2026 (Baguio July 2026 closure threats and well/station inspections; earlier Bacolod closures of 61 and then 112 stations) tie sanitary permits to proof of monthly bacteriological tests and 6-monthly physical-chemical tests. Fines run to ₱5,000 plus cease-and-desist orders.

**Current workflow:**
1. The WRS brings a sample to the lab monthly.
2. The lab issues a paper certificate.
3. The WRS posts it on the façade and carries a copy to the City/Municipal Health Office (or the CHO collects it at the annual sanitary inspection).
4. The CHO tracks compliance in a logbook or Excel (unverified). Missing months surface only during sweeps.

**Pain:**
Closures cost stations revenue, and CHOs lack visibility. The lab, however, already holds all the data.

**Existing solutions:**
Generic LIMS (lab systems), paper certificates, and CHO Excel sheets. No WRS-compliance portal was found.

**Offline evidence:**
Compliance is proven by a posted paper certificate. Enforcement happens through physical sweeps.

**Offline channel:**
DOH regional lab-accreditation lists, water districts that run accredited labs (Laguna Water, Metro Dumaguete Water, Apo Agua), the Water Quality Association (Philippines), and CHO sanitary inspectors.

**Market count:**
More than 20,000 WRS (Rappler / WQA figure, older). The number of accredited labs was not found; low hundreds is an estimate.

**The gap:**
One test result has to reach several LGU recipients (whichever CHO each station falls under), plus the station owner, plus a public "valid this month" status. Nothing does this.

**Possible product:**
Lab-side portal: the lab uploads monthly results, each station gets a QR certificate, and each CHO gets a live compliance dashboard and missing-test list for its jurisdiction.

**MVP:**
One lab with CSV upload, QR certificates, and an emailed monthly per-LGU missing-test list.

**Pricing hypothesis:**
₱3,000–8,000/month per lab, or ₱30–50 per certificate.

**How to find first customers:**
DOH-accredited lab list, and water districts that operate labs.

**Willingness to pay:**
Labs would pay for software only if it wins them stations. Stations themselves would pay for the service at most.

**Founder access:**
Needs a local to approach labs and CHOs. A CHO buy-in pilot is likely needed.

**Risks:**
CHOs may not accept digital proof. Labs may see no revenue upside. Low price ceiling.

**Kill condition:**
Labs say stations choose them on price alone and CHOs refuse QR proof.

**Score:** 5/10 (Pain 5, Frequency 8, Mandatory 8, Fragmentation 6, Competition 8, Incumbent gap 6, Buyer access 5, Willingness to pay 3, MVP 8, Distribution 4.)

**Sources:**
- https://mb.com.ph/2026/07/13/water-related-businesses-in-baguio-face-closure-if-found-unsanitary
- https://tribune.net.ph/2026/07/24/baguio-intensifies-inspections-of-deep-wells-water-stations
- https://newsinfo.inquirer.net/1680690/bacolod-city-shuts-down-112-water-refilling-stations
- https://newsinfo.inquirer.net/1672685/61-water-refilling-stations-in-bacolod-temporarily-closed/amp
- https://mirror.pia.gov.ph/news/2022/03/25/water-refilling-stations-urged-to-comply-requirements
- https://www.rappler.com/?p=102472
- https://alpha.pna.gov.ph/articles/1213538

---

### Opportunity: Per-shipment livestock document pack for hog and poultry traders

**Industry:**
Live-animal traders and haulers (hogs, broilers, gamefowl).

**Buyer:**
Hog or poultry trader or livestock-hauler owner who moves animals across provinces.

**Trigger / Why now:**
ASF and avian influenza controls keep changing by province: BAI MC 25 s.2026 temporarily waived AI testing for Region VII to 23 Sep 2026; Cebu DVMF tightened hog entry in July 2026; Bohol intercepted undocumented Cebu hogs in 2026.

**Current workflow:**
1. Get a VHC from a private or government vet.
2. Get ASF/AI lab results.
3. Apply for the BAI Local Shipping Permit online (nvqsd.bai.gov.ph), uploading the VHC and ADMCC.
4. Separately obtain the provincial livestock transport clearance, BAI disinfection certificate, route plan, and handler's permit and carrier accreditation.
5. Present the paper pack at each checkpoint.

**Pain:**
Hogs seized over fake or missing permits (QC 2024), plus rules that change by province and month.

**Existing solutions:**
BAI NVQS online permit (free, 20-minute processing), fixers and brokers, and provincial veterinary offices.

**Offline evidence:**
Checkpoints inspect paper. Province-level clearances are issued at the counter.

**Offline channel:**
Provincial veterinary offices, hog raisers' federations (unverified names), and feed dealers who already visit traders.

**Market count:**
Not found.

**The gap:**
A per-destination rules checker plus document wallet: "for this shipment from A to B this week, here's what you need and what's expiring."

**MVP:**
Province-to-province rule table (manually maintained), document expiry reminders, and a printable checkpoint pack.

**Pricing hypothesis:**
₱500–1,000/month. Low.

**Willingness to pay:**
Traders pay fixers per trip. Software alone is unlikely to sell.

**Founder access:**
Local only.

**Risks:**
Rule upkeep is labour-intensive. The BAI portal may absorb it. Buyers are informal.

**Kill condition:**
Traders say the vet or fixer already handles all of it for under ₱200 per trip.

**Score:** 4/10

**Sources:**
- https://nvqsd.bai.gov.ph
- https://www.bai.gov.ph/media/dz0ndelg/bai-memorandum-order-no-13-amendment-to-bai-memorandum-order-no-32-s-2020-entitled-guidelines-on-the-processing-of-online-local-shipping-permit-applications.pdf
- https://bohol.gov.ph/2026/06/05/bai-eases-ai-testing-rules-for-bohol-poultry-shipments-until-2026/
- https://philstar.com/cebu-news/2026/07/31/2546026/dvmf-orders-tighter-controls-hog-entry
- https://newsinfo.inquirer.net/2269085/traders-warned-vs-illegal-hog-shipments-into-bohol-amid-asf-scare
- https://tribune.net.ph/2024/08/15/60-hogs-seized-in-qc-due-to-fake-permits

---

## 3. Rejected

- **Kasambahay household-employer compliance (payslips, SSS/PhilHealth/Pag-IBIG).** The obligation is real (RA 10361, NCR wage ₱7,800 from Feb 2026, payslips kept 3 years), but only 6% of 1.4M domestic workers are in SSS, so there is effectively no enforcement. Buyers are consumers. Substitutes: SSS Kasambahay Caravans and KURS one-form registration, free calculators (sweldoph.com payslip generator, assistance.ph guides).
- **Junk shop transaction registers (PD 1612 plus city ordinances).** Handwritten purchase and disposal books approved by police, but enforcement targets thieves, not registers. Low willingness to pay. The EPR diversion-evidence angle was already judged poor distribution in the country report.
- **LPG retailer DOE compliance (RA 11592).** Annual reportorial forms and a one-off LTO. Consultants (Triple i) already sell it.
- **FPA dealer sales records.** Keep-for-inspection only, with no recurring filing. Online sales banned in Jan 2026.
- **Transport cooperatives (CDA/OTC).** Annual reports handled by co-op accountants. Modernized fleets already have AFCS and GPS vendors.
- **Tricycle MTOP.** Low fees, and the TODA handles paperwork.
- **Funeral parlors, fishers, cockpits.** No recurring structured filing found (funeral), hardware or donor systems (fishers), or reputational risk plus overlap with livestock (cockpits).

## 4. Method notes

- **Worked:** news-wire searches on new DA, BSP and BAI circulars ("DA memorandum circular 2026 registration", "BSP circular pawnshop reports"). Philippine regulators announce through PNA, Tribune and Inquirer, which surface well. BAI and BPI publish permits and licences as individual PDFs or pages, a usable proxy register. City ordinance PDFs (Naga, Marikina, Malolos) reveal paper registers.
- **Didn't work:** counts. PSA and DOH rarely publish operator counts (water labs, rice mills, kasambahay employers), and the BSP pawnshop figure came only via a news summary. Competitor searches for PH-local vendors return foreign tools or thesis projects, so local custom-software substitutes remain unverified. Tagalog queries were not needed: official material is in English, and Tagalog press (Bombo Radyo, Remate) only echoes it.
