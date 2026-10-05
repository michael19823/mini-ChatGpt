# Nepal: Country Research

Research date: 2026-10-04. Searches used: 14 (medium/small market budget). WebFetch was not used; all evidence comes from WebSearch result summaries, so figures are only as reliable as the cited pages.

## Accessibility and market context

- Nepal is not under US, EU or UK sanctions that affect software sales. Internet access is open apart from occasional social-media bans.
- **Payment rails are the main practical barrier (unverified detail):** Nepali businesses face foreign-exchange limits on paying foreign SaaS by card. Local collection usually goes through eSewa, Khalti, Fonepay or ConnectIPS, which a foreign solo founder can only use through a local entity or partner. Treat the market as "accessible with a local partner".
- **Low willingness to pay:** price points for local vertical software are low. Free IRD-certified billing tools exist, for example ebillingnepal.com. Realistic SME pricing is about NPR 1,500–8,000 per month (roughly USD 11–60).
- **Calendar quirk:** deadlines and fiscal years use Bikram Sambat (BS) dates (FY 2082/83 = mid-July 2025 to mid-July 2026), and forms are in Nepali. This is a small moat for local-first tools and a barrier for foreign ones.
- **Overall verdict:** no opportunity clears the brief's "$200–500/month, 5,000 buyers" bar. The best leads are mid-sized B2B niches where a failed workflow means a payment is lost (hospital insurance claims) or a licence is at risk (manpower agencies).

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| All VAT businesses (retail, restaurants, hotels) | IRD e-billing with real-time CBMS sync | Rejected: too competitive | Threshold lowered to Rs 200m (April 2026) and Rs 50m for restaurants, but IRD lists about 553 certified tools, including free ones, Tally, BUSY and Tigg |
| Private hospitals / clinics | Health Insurance Board (HIB) claims via openIMIS | **Shortlisted** | Board rejects 20–50% of claims; billions of rupees in arrears; claims must be rebuilt by hand |
| Hospitals | Monthly HMIS reporting to DHIS2 | Rejected | EMR vendors (Cogent Health, Bahmni-based systems) already push to DHIS2 |
| Manpower (foreign-employment) agencies | FEIMS labour-permit pipeline per worker | **Shortlisted** | 1,200+ licensed agencies; per-worker, multi-agency document chain; handled per job |
| All employers / payroll bureaus | Social Security Fund (SSF) monthly contributions + IRD e-TDS + CIT | **Shortlisted (weak)** | July 2025 amendment added enforcement (account freezes, licence cancellation); only about 3% of firms enrolled; but HR software competition exists |
| Trekking / tour agencies | Guided-only permits, Blue TIMS, park permits per group | **Shortlisted (weak)** | 2025–26 "no guide, no trek" rule moves all permit paperwork to agencies; one season of pain per year |
| Savings & credit cooperatives | COPOMIS reporting to the Department of Cooperatives | Rejected | Sector in crisis, reform may restructure the regulator; core-banking vendors (FinX etc.) own the relationship |
| Importers / customs agents | ASYCUDA World + Nepal National Single Window | Rejected | Government-run NNSW; volume concentrated in a few large brokers; little room for third parties |
| Pharmacies | Narcotic/psychotropic register and reporting to the Department of Drug Administration (DDA) | Rejected | No online system found (paper registers); very low willingness to pay; no trigger |

---

## Opportunities

### Opportunity: HIB claim pre-submission checker and rejection-recovery queue for private hospitals

**Industry:**
Private and community hospitals and polyclinics empanelled under Nepal's national health insurance programme.

**Buyer:**
Hospital insurance-desk in-charge, finance manager or medical recorder at a 25–300 bed private or community hospital.

**Trigger / Why now:**
- In FY 2082/83 the programme hit a crisis. Tribhuvan University Teaching Hospital (TUTH) suspended insurance services on Magh 1, 2082 (January 2026), and more than 50 hospitals followed.
- The Board owed hospitals about Rs 19bn. It reportedly rejects about 20% of incoming claims, and at TUTH only about 50% were approved.
- In July 2026 the Board paid Rs 23.44bn and services resumed. The PM directed the health ministry to draft an insurance reform plan.
- Hospitals now have a strong incentive to cut rejections and track receivables claim by claim.

**Current workflow:**
1. The insurance desk checks patient eligibility in openIMIS (web or through an EMR integration).
2. Services and medicines are billed in the hospital's own HMS/EMR. Often the item codes do not match the HIB benefit package and price list.
3. Staff key or upload claims into openIMIS (web claim entry), attaching prescriptions and discharge documents.
4. The Board adjudicates. Rejected or deducted items come back with reasons, and staff re-check files by hand, often in Excel.
5. Finance reconciles claimed against paid against rejected amounts for receivables, months later.

**Pain:**
- Rs 100m in rejected claims and Rs 220m in unreviewed files at TUTH alone.
- About 20% systemic rejection rate, with Board statements of only about 50% approval at some hospitals.
- Cash-flow crisis severe enough to halt services nationally in early 2026.

**Existing solutions:**
- openIMIS web claim entry (free, government).
- EMR/HMS vendors with openIMIS/FHIR integration: Cogent Health, Bahmni-based deployments such as Bayalpata.
- Local hospital management systems (many, unverified names).
- Manual Excel reconciliation.

**The gap:**
Integrations handle claim *submission*. No evidence was found of tools that (a) check claims before submission against HIB package rules, ceilings and price lists, or (b) track rejections and deductions per claim with a structured resubmission and appeal queue and receivables ageing. This is the "80–90% solved, exceptions manual" pattern.

**Possible product:**
A rules engine that sits beside the existing HMS:
- Imports the claim batch as CSV or through the openIMIS API.
- Flags items likely to be rejected: non-package items, price over ceiling, missing documents, duplicate visits.
- After adjudication, ingests the Board's response into a rejection-recovery queue with ageing and a claimed/approved/paid dashboard.

**MVP:**
CSV/Excel import of a month's claims, plus a hard-coded HIB benefit package and price list, plus a rejection-reason tracker with exportable receivables report. No direct write-back to openIMIS in v1.

**Pricing hypothesis:**
NPR 8,000–25,000 per month per hospital (USD 60–190), tiered by claim volume. An alternative is a percentage of recovered rejected claims.

**How to find first customers:**
- HIB's public list of empanelled health facilities (about 450+; 375 were listed in 2022).
- Association of Private Health Institutions of Nepal (APHIN) membership.
- Hospitals publicly named in news as suspending insurance in early 2026.

**Risks:**
- Programme reform may overhaul rules, the platform or the payment model. The Board's payment delays are fiscal, not just paperwork, so better claims do not guarantee faster cash.
- HMS vendors could add the feature.
- openIMIS API access for third parties is unverified.

**Kill condition:**
- Interviews show most rejections are discretionary or budget-driven, not rule-detectable.
- Or the HIB reform replaces the claims platform within 12 months.

**Score:** 5/10

**Sources:**
- https://ekantipur.com/health/2026/01/13/en/tribhuvan-university-teaching-hospital-to-discontinue-services-under-health-insurance-program-27-14.html
- https://english.onlinekhabar.com/health-insurance-program-suspended-at-tuth-pm-directs-ministry-to-draft-health-insurance-reform-plan.html
- https://nepalitimes.com/nepalis-are-insured-but-not-covered
- https://english.ratopati.com/story/47074/health-insurance-program-becomes-a-chronic-disease-neither-a-correct-diagnosis-nor-a-sustainable-solution
- https://www.sharesansar.com/newsdetail/nepal-health-insurance-board-pays-rs-2344-billion-to-hospitals-services-set-to-resume-2026-07-03
- https://en.beemapost.com/?p=11621
- https://openimis.org/nepal
- https://openimis.atlassian.net/wiki/download/attachments/2424832005/Bahmni-IMIS+integration+presentation.pdf?version=1

---

### Opportunity: Per-worker compliance pipeline for manpower agencies (FEIMS labour permits)

**Industry:**
Foreign-employment recruitment (manpower) agencies.

**Buyer:**
Owner or operations manager of a DoFE-licensed manpower company.

**Trigger / Why now:**
- About 1,600 labour permits are issued per day through FEIMS.
- The Labour Minister directed FEIMS reforms aimed at issuing permits within an hour.
- Re-entry permits and labour-permit renewals keep moving online.
- Each change to FEIMS shifts document requirements onto agencies.

**Current workflow:**
1. The agency gets a demand letter and power of attorney from the foreign employer, attested by the Nepali embassy.
2. DoFE gives pre-approval. The agency recruits candidates and collects passports, medical reports from approved clinics, pre-departure orientation certificates, insurance, welfare-fund receipts and visas.
3. Each worker's data and documents are entered and uploaded into FEIMS. Status is chased across clinics, orientation centres, the embassy and DoFE.
4. The agency tracks dozens to hundreds of workers per demand in spreadsheets or WhatsApp, and reports to the foreign employer.

**Pain:**
- High volume and handled per worker.
- Several third parties are involved, each with its own expiry dates (medical validity, visa, orientation).
- Errors delay departures, which costs agency revenue and puts the licence at risk. FEIMS outages have halted service before.

**Existing solutions:**
- FEIMS itself (government, free).
- Local "manpower software" vendors (several exist; specific names and capabilities unverified).
- Agents and sub-agents doing paperwork by hand.
- Generic Excel or Google Sheets.

**The gap (hypothesis, not yet verified):**
- An expiry-aware checklist for each worker that tracks every document across all third parties.
- One data capture that pre-fills FEIMS entry and the employer's status report.

**Possible product:**
"One worker record, everything else derived": a per-demand worker pipeline with document expiry alerts, a FEIMS-ready data export or browser autofill, and an employer-facing status page.

**MVP:**
A web pipeline (demand, then workers, then a document checklist with expiry dates), a browser extension that autofills FEIMS forms from the record, and a PDF/Excel status report for the foreign employer.

**Pricing hypothesis:**
NPR 5,000–15,000 per month per agency, or NPR 200–500 per deployed worker.

**How to find first customers:**
- DoFE public list of licensed recruitment agencies (1,200+).
- Nepal Association of Foreign Employment Agencies (NAFEA) members.

**Risks:**
- Reputational exposure (recruitment-fee abuse in the sector).
- FEIMS terms may forbid automation.
- Local vendors may already cover this (diligence incomplete).
- Many agencies are informal and price-sensitive.

**Kill condition:**
Interviews show the leading local manpower software already autofills FEIMS and tracks expiries for less than NPR 3,000 per month.

**Score:** 5/10

**Sources:**
- https://onlineradionepal.gov.np/en/?p=374076
- https://myrepublica.nagariknetwork.com/news/expedited-labor-approval-each-employee-now-serves-84-applicants-daily
- https://www.kumarijob.com/blog/general-information/shram-swikriti-process-nepal
- https://thehimalayantimes.com/business/govt-formally-starts-feims/
- https://southsouth-galaxy.org/solution/foreign-employment-information-management-system-feims/
- https://nitipartners.com/department-of-foreign-employment-nepal-license/
- https://pk.nepalembassy.gov.np/?p=1515
- https://www.b360nepal.com/detail/10016/dofe-halts-online-service

---

### Opportunity: Monthly "one payroll run → SSF + e-TDS + CIT" filing pack for accountants and payroll bureaus

**Industry:**
Accounting firms and payroll bureaus serving SMEs.

**Buyer:**
Small accounting/audit firms that do bookkeeping for 20–200 SME clients, and in-house accountants at SMEs.

**Trigger / Why now:**
- The SSF Act amendment published 30 July 2025 extended the SSF's enforcement powers to defaulting employers: freezing bank accounts and property, cancelling licences, withholding passports.
- Only about 3% of roughly 900,000 enterprises are enrolled. Any enforcement push creates a wave of first-time monthly filers.

**Current workflow:**
1. Payroll is calculated in Excel or Tally.
2. Employee-wise SSF contributions (31% of basic salary) are entered and uploaded on sosys.ssf.gov.np and paid by the 15th through Nepal Bank, ConnectIPS or wallets.
3. TDS details are keyed separately into the IRD e-TDS portal within the deadline, and remitted by the 25th.
4. CIT and provident-fund deductions are sent separately.
5. For each client, the accountant repeats this monthly across three portals with differing IDs: PAN, SSF ID, CIT number.

**Pain:**
- Monthly, mandatory and duplicate entry across portals.
- Penalties plus the new hard enforcement.
- Payroll guides from local firms describe the process as "more complicated than you think".

**Existing solutions:**
- Local HR/payroll SaaS: Arkbo, Frontline, and HR modules in Niti ERP and others.
- Tally with Nepal add-ons.
- Employer-of-record providers for foreign firms: Playroll, Topsource, Ontop.
- Accountants doing it by hand.

**The gap:**
Payroll tools compute the numbers, but evidence of direct multi-client filing to the SSF portal and e-TDS is thin. Multi-client bureaus (rather than single employers) appear underserved. This is unverified and must be confirmed in interviews.

**Possible product:**
A multi-client workspace for accounting firms:
- Import a payroll sheet once.
- Validate PAN/SSF IDs.
- Generate the SSF upload file, e-TDS entry data (or autofill) and CIT schedule.
- Track deadlines and payment proof for each client.

**MVP:**
Excel template in, three portal-ready outputs out, and a per-client deadline calendar in BS dates.

**Pricing hypothesis:**
NPR 150–300 per client company per month, billed to the accounting firm (NPR 5,000–20,000 per firm).

**How to find first customers:**
- ICAN (Institute of Chartered Accountants of Nepal) member firm directory.
- Registered auditors list.
- SSF-enrolled employer lists if published (unverified).

**Risks:**
- SSF enforcement may stay lax (it has slipped repeatedly).
- Portals may have no bulk upload or API, so autofill would be fragile.
- Local HR SaaS can add the feature quickly.
- Very low price ceiling.

**Kill condition:**
- SSF does not enforce against non-enrolled employers by mid-2027.
- Or existing payroll tools already produce SSF and e-TDS upload files.

**Score:** 4/10

**Sources:**
- https://www.b360nepal.com/detail/26947/the-social-security-insecurity
- https://pioneerlaw.com/?p=1472
- https://www.arkbotech.com/blog/payroll-software-nepal-ssf
- https://www.frontline.com.np/blog/payroll-in-nepal-is-more-complicated-than-you-think-heres-how-to-get-it-right/
- https://www.leavebalance.com/blog/nepal-tds-filing-ird-report-guide/
- https://www.ird.gov.np/public/pdf/1850759128.pdf
- https://nitipartners.com/social-security-fund-mandatory-startup-team-registration/

---

### Opportunity: Group permit and TIMS packet builder for trekking agencies

**Industry:**
Trekking and tour operators.

**Buyer:**
Operations staff at small and mid-sized registered trekking agencies (Kathmandu and Pokhara).

**Trigger / Why now:**
- From 2025–26, solo trekking is banned in national parks and restricted areas, and the Green (independent) TIMS card is retired.
- Only the Blue (group/guided) TIMS remains, now digital with QR codes. The Department of Immigration moved restricted-area permits online.
- Every trekker's permits now flow through an agency, and the fine is Rs 12,000 for trekking without a guide or TIMS.

**Current workflow:**
1. Collect passport scans, photos, insurance and itinerary from each client by email or WhatsApp.
2. Apply separately for the restricted-area permit (Immigration online), TIMS (Nepal Tourism Board/TAAN), and national park or conservation-area permits (some still paid at counters).
3. Assign a licensed guide, then print or store the permits for checkpoints.

**Pain:**
- Data is re-entered across 2–4 permit systems for each trekker.
- The workload is seasonal (spring and autumn peaks), with errors at checkpoints.

**Existing solutions:**
- Government and Nepal Tourism Board portals.
- Generic tour-operator software: international tour CRMs, and local agency software (unverified).
- Agency staff doing it by hand, or permit runners.

**The gap:**
A single trekker record that pre-fills all permit portals and builds the group packet. Not verified whether TAAN or local vendors already offer this.

**Possible product:**
A client intake form (passport/photo upload with OCR) feeding a permit checklist for each route, with a browser autofill for each portal.

**MVP:**
An intake link plus a route-to-permit rules table plus autofill for the Immigration and TIMS portals.

**Pricing hypothesis:**
NPR 100–300 per trekker, or NPR 3,000–6,000 per month in season.

**How to find first customers:**
- Trekking Agencies' Association of Nepal (TAAN) member directory.
- Department of Tourism registered agency list.

**Risks:**
- Strongly seasonal.
- Portals may change or consolidate (the Nepal Tourism Board is centralising).
- Policy could reverse.
- Many agencies outsource permit-running cheaply.

**Kill condition:**
The planned centralised Nepal Tourism Board portal issues all permits from one application, which removes the multi-portal re-entry.

**Score:** 4/10

**Sources:**
- https://www.amazingnepaltrek.com/blog/how-to-apply-for-a-trekking-permit-in-nepal-2026-update
- https://www.bestheritagetour.com/blog/nepal-trekking-rules-2026
- https://www.bestheritagetour.com/blog/is-solo-trekking-banned
- https://www.thirdrockadventures.com/travel-news/heavy-penalty-for-trekkers-without-guides-and-tims-card
- https://marveltreks.com/trekking-rules-in-nepal/

---

## Rejected after competitor research

- **IRD e-billing / CBMS sync tool:**
  - The trigger is real. The mandatory threshold fell from Rs 250m to Rs 200m (IRD notice, April 2026), and there are lower thresholds of Rs 100m and Rs 50m for restaurants and hotels.
  - It was killed by about 553 IRD-certified billing tools, including free ones (ebillingnepal.com), Tally e-Billing Nepal Edition, BUSY, Tigg, OneFlow, Niti ERP, SmartBooks and Awecountant.
  - Sources: https://www.vatupdate.com/2026/09/20/nepal-e-invoicing-e-reporting-country-booklet/ , https://subharambhasewa.digitalpress.blog/ird-verified-softwares-in-nepal/ , https://busysoftwarenepal.com/blog/best-ird-billing-software-nepal-2026/ , https://ebillingnepal.com/en
- **HMIS/DHIS2 monthly report automation for hospitals:**
  - Killed because EMR vendors (Cogent Health; Bahmni-based systems) already push HMIS reports straight to DHIS2.
  - Sources: https://www.sharesansar.com/newsdetail/gulmi-hospital-upgrades-its-health-information-system-partners-with-health-tech-company-cogent-health-2022-06-03 , https://openimis.org/nepal
- **Cooperative COPOMIS reporting:**
  - 29,000 of 34,512 cooperatives are already linked, and core-banking vendors (FinX and others) own the integration.
  - The sector is in a credibility crisis, and a reform roadmap proposes abolishing or restructuring the Department of Cooperatives.
  - Sources: https://english.ratopati.com/story/57704/proposal-to-abolish-the-cooperative-department , https://www.b360nepal.com/detail/25132/finx-cooperative-software-expands-use-in-madhes-with-training-on-technology , https://www.indiancooperative.com/co-op-news-snippets/half-of-kathmandu-co-ops-skip-mandatory-reporting/
- **Customs declaration tooling:**
  - Killed by the government's ASYCUDA World and Nepal National Single Window, plus concentrated customs-agent volume.
  - Sources: https://www.sharesansar.com/newsdetail/doc-plans-nepal-national-single-window-system , https://www.maritimegateway.com/nepals-customs-offices-go-cashless-and-paperless/

## Attractive problem, poor distribution

- **Pharmacy narcotic/psychotropic register for DDA:** mandatory record-keeping, but no digital reporting channel exists. Willingness to pay at small pharmacies is very low, and pharmacy POS vendors would bundle it. Source: https://nitipartners.com/narcotic-drugs-law-nepal/
- **Cooperative compliance tooling:** many buyers, but they are distrusted, financially distressed and locked into their core-banking vendor.

## Too competitive

- **CBMS e-billing / IRD-certified invoicing:** about 553 certified products, including free ones.
- **Generic Nepal payroll (single-employer):** Arkbo, Frontline, ERP HR modules, Tally add-ons, and employer-of-record providers (Playroll, Topsource, Ontop).
