# India — Indie-Hacker Opportunity Research (as of 2026-10-04)

> **Research limits, please read first.** This track ran on a shared session budget. About 15 WebSearch calls were used before the budget ran out. Every WebFetch call was blocked by network egress policy, so no primary page (gazette, portal, PDF) could be opened. Each fact below comes from a search-result summary, with the URL that summary cited. Anything from background knowledge is marked **(unverified)**. None of the scores below is good enough to build on yet. Each opportunity needs a verification pass (open the gazette or portal) and then customer interviews.

## Industries screened

| # | Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|---|
| 1 | Stone crushers / minor-mineral quarries | State monthly input/output returns + e-transit passes (e-rawaana) | **Shortlist** | New Punjab Crusher Act 2025 + monthly mass-balance returns; varies by state; registered units (CURN) are a buyer list |
| 2 | Hospitals / nursing homes (medical tourism) | Reporting foreign in-patients (Form-III) under the Immigration & Foreigners Act 2025 | **Shortlist** | New Act in force from 1 Sep 2025; filed per patient within 24h; ₹50k per-case penalty; hotel tools exist but hospital workflow differs |
| 3 | Ultrasound / sonography clinics | PC-PNDT Form F per scan + online/monthly state submissions | **Shortlist** | Filed per patient; the Supreme Court treats Form F deficiencies as criminal, not technical; state portals vary |
| 4 | Real-estate developers (≥20,000 m² projects) | C&D Waste EPR: registration, targets, certificates | **Shortlist (early)** | Rules effective 1 Apr 2026; new CPCB portal; mid-size developers have no tooling |
| 5 | Plastic / e-waste / battery recyclers (PWPs) | EPR certificate generation + returns during migration to the CPCB Common EPR portal | **Shortlist (weak)** | Portal migration in Jul 2026 forces re-work; consultant-dominated market |
| 6 | Housing societies, hotels, campuses (bulk waste generators) | SWM Rules 2026 EBWGR registration, annual return, certificates | Poor fit | Annual-only return; consultants already selling the certificates |
| 7 | Brand owners / importers (PIBOs) | Plastic EPR annual returns, certificate purchase | Rejected | Consultants and certificate brokers bundle compliance with credit sales |
| 8 | Hotels / homestays | Form C (now Form-III) foreign-guest reporting | Rejected | Ecobillz already automates scan → auto-fill → FRRO submission |
| 9 | Private hospitals / labs / pharmacies | TB notification on Nikshay (+ ₹500 incentives) | Poor distribution | Free government tool; private-sector support agencies already do the notification work |
| 10 | SMEs generally | GST e-invoice/IMS, TDS, payroll/labour codes, DPDP | Too competitive | Mature crowded categories (unverified this session, see below) |

---

## Opportunity 1: Crusher & Quarry Monthly Return + E-Transit Reconciliation ("mass-balance autopilot")

**Industry:** Minor minerals: stone crushers, screening plants, quarry lease holders, stockists (Punjab, Haryana first)

**Buyer:** Owner/manager or accountant of a stone-crusher or screening-plant unit; mining lease holders; sand/gravel stockists.

**Trigger / Why now:** Punjab enacted the *Punjab Regulation of Crusher Units, Stockists & Retailers Act, 2025* and the *Punjab State Minor Minerals (Amendment) Policy, 2025*. Every crusher gets a Crusher Unique Registration Number (CURN). Rule 9 requires each crusher's input and output to be verified through **monthly returns on the Mining Portal**: raw material received, quantity processed, material dispatched and closing stock. The National Green Tribunal is actively supervising this (compliance affidavit filed after a 11.02.2026 order in O.A. 740/2024). Haryana is running drives against fake e-transit passes.

**Current workflow:**
1. Each truck load in or out gets an e-transit pass (e-rawaana) generated on the state portal, a weighbridge slip and a GST invoice / e-way bill.
2. At month end someone collates weighbridge registers, passes, invoices and stock estimates (often in Excel or paper).
3. They type totals into the state mining portal's monthly return and reconcile them by hand against passes issued.
4. During inspections (special stock-check teams) they have to explain any gap between passes, physical stock and returns.

**Pain:** A mismatch between input, output and stock is exactly what enforcement teams look for. The Tribune reports special teams checking stock at Nuh crushers and drives to detect fake e-transit passes in Yamunanagar. NGT litigation keeps pressure high. Penalties and possible sealing of units under the new Act are likely (exact penalty schedule **unverified**).

**Existing solutions:** The state mining portals themselves (free, generate passes and accept returns). Generic weighbridge software and Tally/ERP (**unverified**: no crusher-specific reconciliation product was found in this session's searches). The other substitute is a local munshi/accountant.

**The gap:** Nothing connects **weighbridge tickets ↔ e-transit passes ↔ GST invoices/e-way bills ↔ the monthly portal return**, or flags mass-balance anomalies before an inspector does.

**Possible product:** A crusher back office that imports weighbridge data and pass/invoice exports and keeps a running mass balance (input − output − yield loss = stock). It pre-computes the monthly return and gives an inspection-ready reconciliation pack.

**MVP:** Punjab only. Upload a weighbridge CSV plus pass and invoice lists. The output is the monthly-return figures, an exception list (loads without a pass, passes without a weighbridge entry, impossible yields) and a PDF stock register.

**Pricing hypothesis:** ₹1,500–4,000/month per unit (~$18–48). Upsell for multi-site groups and consultants.

**How to find first customers:** CURN registrations / state crusher lists (Punjab Mines & Geology dept), district crusher associations, weighbridge software resellers, CA firms serving crusher clusters (Yamunanagar, Nuh, Pathankot/Ropar belts).

**Risks:** The portal may have no API (CSV/upload only), so automation could hit captchas or OTPs. Some owners may *prefer* opacity, which hurts willingness to pay. Sales depend heavily on state politics. ARPU is low.

**Kill condition:** The state portal already computes the mass balance from passes automatically, or ten crusher owners say the accountant handles it in under two hours a month.

**Score:** 6/10

**Sources:**
- NGT compliance affidavit, Punjab ACS Mines & Geology (order 11.02.2026, O.A. 740/2024): https://www.greentribunal.gov.in/sites/default/files/news_updates/Compliance%20Report%20by%20way%20of%20an%20affidavit%20of%20Jaspreet%20Talwar,%20Additional%20Chief%20Secretary,%20Mines%20&%20Geology,%20Punjab%20(as%20directed%20via%20order%20dated-11.02.2026%20in%20O.A.%20No.%20740%20of%202024).pdf
- Punjab gazette (minor minerals): https://minesandgeology.punjab.gov.in/pdf/2333-Ordinary%20Gazette%202-7-2021.pdf
- Tribune, fake e-transit pass drive (Yamunanagar): https://www.tribuneindia.com/news/haryana/drive-to-detect-fake-e-transit-passes-intensified-in-ynagar-514284
- Tribune, stock checks at Nuh crushers: https://www.tribuneindia.com/news/haryana/special-teams-to-check-stock-at-nuh-crushers-415994
- Tribune, Haryana e-transit system launch: https://www.tribuneindia.com/news/haryana/to-curb-illegal-mining-e-transit-pass-system-begins-across-state-today-19813/amp

---

## Opportunity 2: Foreign-Patient FRRO Reporting for Hospitals & Nursing Homes

**Industry:** Private hospitals and nursing homes treating foreign in-patients (medical tourism: Bangladesh, Africa, Middle East, CIS). The same engine fits universities and colleges with foreign students (Form-II / Form-III).

**Buyer:** International Patient Desk / front-office or admissions manager at mid-size private hospitals. For colleges, the foreign-student cell / registrar.

**Trigger / Why now:** The **Immigration and Foreigners Act, 2025** has been in force since **1 Sep 2025**. Hospitals "or any other premises of like nature" (including those run by trusts and religious bodies) that give foreigners indoor treatment with lodging must submit Form-III (formerly Form C) via indianfrro.gov.in, typically within 24h. Educational institutions must file Form-II (formerly Form S) and Form-III. The reported penalties are **₹50,000 per case** for accommodation keepers (s.8) and **₹1 lakh per case** for institutions failing on S-forms (s.9). District administrations (Kohima DC, May 2026; Dimapur Police) are issuing strict-compliance directives. Goa has published online-filing instructions (Dec 2025).

**Current workflow:**
1. The front desk photocopies the passport and visa (often a medical visa) and attendants' documents.
2. A staffer types the details into the FRRO portal for the patient and possibly each attendant, within 24h.
3. Discharge, extension or transfer events need follow-up updates (**unverified** whether these are required for hospitals).
4. Staff keep a paper or Excel log for police and FRRO inspections.

**Pain:** The obligation is per patient and time-boxed, with a per-case fine. Hospitals in medical-tourism hubs (Kolkata, Chennai, Delhi NCR, Hyderabad) handle steady volumes. Many smaller nursing homes are newly aware of the duty.

**Existing solutions:** The FRRO portal itself (free). Ecobillz sells C-Form automation (scan ID/visa → auto-fill → submit) aimed at **hotels**. Hotel PMSs (Hotelogix, Stayflexi) target hotels. Hospital HMIS vendors' FRRO support is **unverified**.

**The gap:** Hotel tools model *stays*, not *admissions with attendants, visa type and treatment linkage*. Nothing ties the HMIS admission/discharge to FRRO filing with a 24h SLA tracker and an audit log per patient.

**Possible product:** A passport/visa OCR plus an FRRO filing queue triggered by HMIS admissions. It sends 24h SLA alerts, handles attendant linking and keeps an inspection-ready register.

**MVP:** A web app with passport MRZ scan, a pre-filled Form-III data sheet, a browser-assisted portal submission, and a daily "due/overdue" dashboard. No HMIS integration at first.

**Pricing hypothesis:** ₹3,000–10,000/month per hospital, tiered by foreign admissions, or ₹50–100 per filing.

**How to find first customers:** NABH-accredited hospital lists, medical-value-travel facilitator networks, hospitals listed on the government's medical-tourism / Heal-in-India directories (**unverified** directory), state nursing-home registrations under the Clinical Establishments Act. Foreign-student institutions can be found via AISHE / university lists.

**Risks:** Hotel vendors (Ecobillz) can extend to hospitals cheaply. Large hospital chains build it in-house. Portal automation may break or be disallowed. Volumes at small nursing homes may be too low.

**Kill condition:** Ecobillz or major HMIS vendors already market hospital Form-III automation, or hospital desk staff report fewer than about 5 foreign admissions a week.

**Score:** 6/10

**Sources:**
- righttoinformation.wiki, who must report under the Act: https://righttoinformation.wiki/immigration-foreigners-act-2025-hotel-hospital-reporting-india
- Nicobar Times, Act in force + Form-II/III guidelines: https://nicobartimes.com/?p=22158
- Goa govt online-filing note (Dec 2025): https://www.goa.gov.in/wp-content/uploads/2025/12/ONLINE-FILLING-OF.pdf
- EastMojo, Kohima DC directive (May 2026): https://eastmojo.com/nagaland/2026/05/06/kohima-dc-orders-strict-compliance-with-immigration-foreigners-act/
- Morung Express, Dimapur Police directive: https://morungexpress.com/dimapur-police-issues-directive-on-foreigners-registration-compliance
- Tribune, new immigration rules: https://www.tribuneindia.com/news/india/new-immigration-rules-mandate-biometric-data-of-foreigners/amp
- BW Hotelier, Ecobillz C-Form automation (competitor): https://bwhotelier.com/article/as-part-of-govt-compliance-ecobillz-offers-c-form-automation-solution-for-hotels-to-manage-foreign-guests-458690

---

## Opportunity 3: PC-PNDT Form F Completeness Checker + State-Portal Filing for Ultrasound Clinics

**Industry:** Sonography / radiology clinics, ob-gyn nursing homes, imaging centres

**Buyer:** Radiologist-owner or clinic manager of a PC-PNDT-registered ultrasound centre.

**Trigger / Why now:** This is a long-standing obligation with rising digital enforcement. States run their own online portals: Delhi launched an online portal with Form F submission and live compliance status, Bihar's portal handles monthly and quarterly reports, and Maharashtra districts mandated online Form F within 24h of each scan. The **Supreme Court has held that Form F deficiencies are not "mere technical errors"** and let criminal proceedings continue. That ruling makes completeness a legal-risk issue, not a clerical one.

**Current workflow:**
1. For each pregnant patient, the clinic fills a multi-part Form F: patient details, living children, referral, indication, and declarations by both patient and doctor.
2. It stores paper Form F plus consent for the statutory retention period.
3. It files online (where the state mandates it), or sends a monthly report to the Appropriate Authority by the 5th, plus quarterly formats in some states.
4. It faces inspections and audits of registers, and machine sealing or prosecution if anything is wrong.

**Pain:** Penalties are criminal. The ruling means a missing field or signature can trigger prosecution. Data is entered twice (paper or RIS, then the state portal). Formats and deadlines differ by state (24h online vs. monthly by the 5th).

**Existing solutions:** Free state portals (Delhi, Bihar and others). Radiology RIS/reporting software and local Form F utilities (specific vendors **unverified**: searches did not surface a dominant product). Paper registers and consultants.

**The gap:** Validation *before* filing, i.e. a field-level completeness check that matches what courts and inspectors look for. Also a single entry that feeds both the clinic register and each state's portal format.

**Possible product:** A tablet Form F with hard validation (cannot save if incomplete), e-signature/thumb capture, and a state-specific export or browser-assisted submission. A monthly/quarterly report generator and an inspection-ready archive sit on top.

**MVP:** One state with a portal (e.g. Delhi or Maharashtra). Digital Form F with a validation ruleset, a PDF print matching the statutory format, a CSV/assisted upload, and monthly report auto-generation.

**Pricing hypothesis:** ₹1,000–2,500/month per machine/clinic (~$12–30).

**How to find first customers:** State PC-PNDT registered-centre lists (district Appropriate Authorities publish them; **unverified** per state), IRIA (Indian Radiological & Imaging Association) state chapters, FOGSI local societies, ultrasound machine dealers.

**Risks:** Sensitive data, since sex-determination enforcement makes clinics wary of new vendors. State portals may forbid third-party submission. Some states may build their own validation. Low ARPU.

**Kill condition:** A dominant Form F software is already bundled by machine vendors or RIS players, or state portals reject anything other than manual entry.

**Score:** 5.5/10

**Sources:**
- Medical Dialogues, SC: Form F deficiencies not mere technical errors: https://medicaldialogues.in/news/health/doctors/deficiencies-in-form-f-not-mere-technical-errors-sc-denies-relief-to-doctor-upholds-criminal-proceedings-under-pcpndt-act-174011
- Delhi online PC-PNDT portal launch: https://thedoctorpreneuracademy.com/delhi-health-department-launches-online-portal-to-strengthen-gender-equality-and-regulate-ultrasound-use/
- Bihar PC-PNDT portal (quarterly reporting format): https://pcpndt.bihar.gov.in/PDF/Forms(Pdf)/QuarterlyReportingFormat.pdf
- Indian J Radiol Imaging, Maharashtra online Form F within 24h: https://thieme-connect.de/products/ejournals/pdf/10.4103/0971-3026.101114.pdf
- CAHO PC-PNDT compliance deck: https://caho.in/files/PC_PNDT.pdf
- Form F / portal guide: https://airacle.in/blog/pcpndt-act-1994/

---

## Opportunity 4: C&D Waste EPR Tracker for Mid-Size Developers

**Industry:** Real-estate developers and construction contractors

**Buyer:** EHS manager / project manager at developers with projects of at least 20,000 m² built-up area. Construction-waste recyclers as a second buyer.

**Trigger / Why now:** The Environment (Construction and Demolition) Waste Management Rules, 2025 were notified on 2 Apr 2025 and are **effective 1 Apr 2026**. "Producers" (projects ≥20,000 m²) must register on a CPCB portal and meet recycling targets: 25% (2025-26), 50%, 75%, then 100% from 2028-29. They do this by meeting targets or buying EPR certificates at CPCB-fixed prices. Recycled-material use targets rise to 5–25% by 2030-31. Recyclers earn certificates with weightings (in-situ 1.2, off-site 1.0). CPCB runs a dedicated C&D portal (cdwm.cpcb.gov.in).

**Current workflow:**
1. Site teams estimate waste per phase, and trucks haul to recyclers or dumping sites (manifests are mostly paper or WhatsApp).
2. An EHS/consultant collates quantities and recycler receipts.
3. They register the project and file returns on the CPCB portal and buy certificates for any shortfall.
4. They answer local-authority approval conditions (waste plans are being built into project approvals).

**Pain:** The regime is brand new and certificate supply is thin, so traceable proof of in-situ recycling is valuable (1.2x weight). Developers face environmental compensation for misses (amounts **unverified**).

**Existing solutions:** The CPCB portal itself. EPR/legal consultants (Lexplosion, Lawrbit and similar publish guides). Large developers' internal EHS teams. Construction ERPs (**unverified** whether any added C&D EPR).

**The gap:** Load-level capture (truck → recycler receipt → in-situ crushing log) that rolls up into portal-ready quantities and the certificate position per project.

**Possible product:** A mobile load logger plus a project EPR ledger: target vs. achieved vs. certificates needed, with exports in portal format.

**MVP:** A per-project dashboard, a WhatsApp/photo load log with recycler receipt upload, and quarterly/annual summaries.

**Pricing hypothesis:** ₹5,000–15,000/month per active project.

**How to find first customers:** PARIVESH / SEIAA environmental-clearance lists (projects ≥20,000 m² require EC; **unverified** scraping feasibility), state RERA project registries, CREDAI chapters.

**Risks:** Enforcement may lag. Rules may be amended or deferred. Consultants bundle certificate procurement. Big developers buy enterprise tools.

**Kill condition:** CPCB delays enforcement, or developers simply buy certificates through consultants without tracking loads.

**Score:** 5.5/10

**Sources:**
- Mondaq, rules summary: https://www.mondaq.com/india/waste-management/1622180/environment-construction-and-demolition-waste-management-rules-2025
- Corporate Professionals: https://www.corporateprofessionals.com/regulatoryupdate/environment-construction-and-demolition-waste-management-rules-2025/
- Lawrbit: https://www.lawrbit.com/article/construction-demolition-waste-management-rules-2025/
- AZB & Partners: https://www.azbpartners.com/bank/construction-and-demolition-waste-management-rules-2024/
- Enviliance (effective April 2026): https://enviliance.com/regions/south-asia/in/report_13452
- Waste Recycling Mag: https://www.wasterecyclingmag.com/news/india-s-c-d-waste-rules-a-global-blueprint-for-circular-construction
- CPCB C&D portal: https://cdwm.cpcb.gov.in/
- UNEP LEAP record: https://leap.unep.org/en/countries/in/national-legislation/environment-construction-and-demolition-waste-management-rules

---

## Opportunity 5: Recycler-Side EPR Evidence & Certificate Ops (Common EPR Portal migration)

**Industry:** Registered plastic waste processors (PWPs), e-waste/battery/tyre/used-oil recyclers

**Buyer:** Owner / compliance executive at a CPCB-registered recycler.

**Trigger / Why now:** CPCB updated all EPR portals on 13 Feb 2026. The old plastic EPR portal was **discontinued 28 Jun 2026**, and the **Common EPR (CEPR) portal with single sign-on went live in July 2026**, covering plastic, e-waste, battery, tyre and used oil, plus a certificate-trading platform. CPCB also **reopened the FY2025-26 annual return window with revised deadlines for PIBOs and PWPs**. Both obligations and revenue (certificate sales) run through the new system.

**Current workflow:**
1. Collect supplier and aggregator invoices, e-way bills and weighbridge slips for incoming waste.
2. Track processing and output sales, and upload evidence to generate certificates.
3. File quarterly/annual returns and sell certificates to PIBOs, often via brokers.
4. Re-enter or re-validate data in the new CEPR portal.

**Pain:** Certificates are the recycler's revenue, and evidence quality is audited. The migration created rework and deadline confusion (the return window had to be reopened).

**Existing solutions:** EPR consultants (Saahas Zero Waste, Circulogy, ReCircle, Karparivartan, PSR Compliance, Diligence Certification, Shakti Plastic Industries), the CPCB portal itself, and Recykal (marketplace; **unverified** current recycler-ops features).

**The gap:** An invoice/e-way-bill ↔ mass-balance ↔ certificate ledger for the recycler's own team. Most players serve PIBOs (the buyers of certificates), not recyclers.

**Possible product:** A recycler compliance ledger that ingests GST purchase/sales data, keeps a mass balance by category, and auto-builds the certificate evidence pack and return figures.

**MVP:** For plastic PWPs only, from a GSTR-2B/e-way bill export to a monthly mass balance with a certificate-eligibility report.

**Pricing hypothesis:** ₹4,000–12,000/month per recycler, or 1–2% of certificate value.

**How to find first customers:** CPCB public lists of registered PWPs/recyclers, recycler associations, and EPR brokers as a channel.

**Risks:** Consultants and brokers give it away bundled. Portal changes. Fraud scrutiny.

**Kill condition:** The CEPR portal itself pulls GST/e-way bill data and auto-computes eligibility, or Recykal already offers it free.

**Score:** 5/10

**Sources:**
- CPCB, all EPR portals: https://cpcb.nic.in/all-epr-portals-of-cpcb/
- Karparivartan, plastic EPR migration to the common portal: https://www.karparivartan.com/cpcb-migrates-plastic-packaging-epr-to-the-common-epr-portal/
- Karparivartan, FY2025-26 annual return window reopened: https://www.karparivartan.com/cpcb-reopens-the-fy-2025-26-annual-return-window-revised-deadlines-notified-for-pibos-and-pwps/
- PSR Compliance, CEPR migration guide: https://www.psrcompliance.com/blog/cpcb-cepr-portal-epr-migration-guide
- Lawrbit, CEPR SSO: https://www.lawrbit.com/ehs/cpcb-common-epr-portal-sso-registration-procedure/
- Enviliance, common portal + trading platform: https://enviliance.com/regions/south-asia/in/report_15482
- CPCB plastic EPR guidance manual: https://eprplastic.cpcb.gov.in/assets/pdfs/Guidance_Manual.pdf
- Saahas EPR (competitor): https://www.saahaszerowaste.com/solutions/epr-plastic/

---

## Rejected after competitor research

- **Hotel / homestay Form C (now Form-III) automation.** Killed by **Ecobillz**, which already scans ID/visa, auto-fills and submits to FRRO, and by PMS players (Hotelogix, Stayflexi) in the space. Only the hospital and institution variant survives (Opp. 2). Source: https://bwhotelier.com/article/as-part-of-govt-compliance-ecobillz-offers-c-form-automation-solution-for-hotels-to-manage-foreign-guests-458690
- **PIBO plastic-EPR compliance software.** Killed by consultant/broker bundling (**Saahas, ReCircle, Circulogy, Karparivartan, PSR Compliance**, plus dozens of registration firms). Compliance is given away to sell certificates.
- **SWM Rules 2026 bulk-waste-generator (EBWGR) compliance.** It is mandatory (≥20,000 m² / 40 kL water per day / 100 kg waste per day; register on CPCB portal; annual return by 30 June; certificates valid 3 years), but the return is **annual** and consultants (**Karparivartan, ReCircle, Unitygreen, BR & Associates**) already sell registration and certificates. Sources: https://greensutra.in/news/solid-waste-management-rules-2026-all-you-need-to-know/ , https://www.karparivartan.com/bulk-waste-generator-registration-under-swm-rules-2026/ , https://unitygreen.earth/ebwgr-certificate/ , https://recircle.in/indias-new-solid-waste-management-rules-2026

## Attractive problem, poor distribution

- **TB notification (Nikshay) for private hospitals, labs and pharmacies.** Notification is mandatory (since 2012, labs added 2015) and comes with ₹500 for notification + ₹500 for outcome. But Nikshay is a free government tool, and government-funded private-sector support agencies do the work. Buyers are fragmented single doctors. Sources: https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2025.1531069/text , https://ntep.in/node/939
- **SWM bulk generators (housing societies).** The buyer is a volunteer RWA committee, and the work is likely absorbed by society apps or waste vendors.
- **C&D EPR (Opp. 4)** may land here if mid-size developers just outsource to consultants.

## Too competitive (desk knowledge, **unverified this session**)

- GST e-invoicing / IMS reconciliation (ClearTax, Tally, Zoho, Masters India, IRIS, Cygnet).
- TDS / Income-tax Act 2025 transition (Tally, Winman, Saral, ClearTax).
- Payroll and labour-codes rollout (greytHR, Keka, Zoho Payroll, RazorpayX Payroll). Contractor compliance (TeamLease RegTech, Simpliance).
- DPDP Rules consent management: crowded and generic.
- EU CBAM reporting for steel/aluminium MSME exporters: global CBAM SaaS plus big-4 and inspection-firm verifiers. Not screened this session.

## Not screened due to the budget cut (suggested follow-ups)

FSSAI (D1/D2 returns, used cooking oil disposal), Schedule M pharma MSMEs, DGFT Advance Authorisation/EPCG export-obligation discharge, bio-medical waste (healthcare facility annual reports / treatment-facility barcoding), EUDR (coffee/rubber; Coffee Board and Rubber Board platforms likely substitutes), India-UK/EFTA FTA rules-of-origin for exporters.
