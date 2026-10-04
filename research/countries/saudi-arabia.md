# Saudi Arabia (research date 2026-10-04)

Depth: 8 searches (large market, budget-limited). WebFetch blocked; everything is from search snippets. Items marked "unverified" were not confirmed.

## Accessibility check
Not sanctioned and open internet. Practical frictions for a foreign solo founder (unverified in detail): Arabic/RTL UI is mandatory; local payment rails (mada, SADAD, bank transfer) and a Saudi invoice/VAT-registered seller are likely needed for B2B; PDPL data-residency expectations; ZATCA e-invoicing and Qiwa/Mudad integrations need approved-solution or partner status. Accessible, but go-to-market is relationship-driven (Arabic-speaking co-founder or reseller strongly advised).

## Industries screened
| Industry | Workflow | Verdict | Reason |
|---|---|---|---|
| Accounting/e-invoicing | ZATCA Fatoora Phase 2 | Too competitive | Wafeq (18k+ firms claimed), Qoyod, Zoho Books, Daftra all certified |
| HR / private employers | Qiwa contracts, Mudad WPS, Nitaqat | Candidate | Rules changed Nov 2025-Aug 2026; free gov tools but no cross-system exception handling |
| Waste haulers | Balady/MWAN trips, operational plans | Candidate (weak evidence) | Licensing regime exists; manifest pain unverified |
| Customs brokers / importers | FASAH, SABER | Weak | Gov single window plus enterprise vendors; broker market concentrated |
| Food importers/exporters | SFDA GHAD + FASEH | Weak | Consultancies/SGS serve it; document-heavy but per-case |
| Fire safety contractors | Civil Defense (998) inspections | Rejected-ish | Searches returned no portal-duplication evidence |
| Dental/healthcare clinics | Saudization quotas (dentists 55% from 27 Jan 2026) | Folded into HR idea | Same Qiwa/Nitaqat workflow |
| Engineering/marketing firms | New Saudization quotas (30% engineers, 5+; marketing from 19 Apr 2026) | Folded into HR idea | Same |

## Opportunities

### Opportunity: Nitaqat / Qiwa Contract Compliance Monitor for SMEs

**Industry:**
Private-sector employers (HR compliance), esp. clinics, engineering and marketing firms newly under quotas

**Buyer:**
HR/PRO manager or owner of a 10-200 employee establishment; outsourced PRO/payroll bureaus

**Trigger / Why now:**
New three-year Nitaqat cycle (Nov 2025-Apr 2026), Yellow tier eliminated (ex-Yellow now Red, blocking visas and permit renewals), 41 sectors, and since 15 Apr 2026 only Saudis with Qiwa-documented contracts count. Standardised Qiwa contract phases: new (now), renewals of fixed-term (Mar 2026), indefinite contracts (Aug 2026). New profession quotas (dentists, marketing, engineers).

**Current workflow:**
1. HR tracks headcount, nationality, profession codes and contract status in spreadsheets or an HRIS.
2. Checks Qiwa for contract documentation and Nitaqat colour, and Mudad for WPS file/contract-salary matches.
3. Manually reconciles mismatches (salary vs Qiwa contract, undocumented contracts, profession mismatch) and simulates hires needed to avoid Red.

**Pain:**
Red status blocks visas/work-permit renewals; Mudad flags salary vs Qiwa contract mismatches; compliance below ~80% restricts Qiwa services.

**Existing solutions:**
Qiwa and Mudad (free, government); HRIS/payroll such as Jisr and greytHR (greytHR has a Saudi WPS guide), Zoho People, local PRO offices (unverified product depth for the Nitaqat simulator).

**The gap:**
Cross-system what-if and exception tracking (which contracts to migrate, which profession quota breaches are coming, hiring simulator across new quotas) for firms not on a full HRIS.

**Possible product:**
Upload Qiwa/Mudad exports, get a dashboard of Nitaqat band, contract-mismatch list, quota-by-profession simulator and renewal deadlines.

**MVP:**
CSV/Excel import, rules engine for band calculation and mismatch detection, Arabic/English alerts.

**Pricing hypothesis:**
SAR 150-400/month per establishment; PRO bureaus at SAR 1-3k/month for multi-client.

**How to find first customers:**
PRO/outsourcing offices, Chambers of Commerce member directories, dental clinic associations (unverified), LinkedIn.

**Risks:**
HRIS vendors can add it; Nitaqat rules change often and calculators may be built by Qiwa itself; no API access (likely screen-export only).

**Kill condition:**
Qiwa ships an official simulator/exception report, or Jisr-type vendors already bundle it.

**Score:** 5/10

**Sources:**
- https://www.clydeco.com/en/insights/2026/02/the-first-saudisation-updates-of-2026-key-changes
- https://www.middleeastbriefing.com/news/?p=6349
- https://www.greythr.com/middle-east/blog/saudi-arabia-wps-mudad-compliance-guide-2026/
- https://www.bclplaw.com/print/v2/content/1563387/saudi-arabia-launches-standardised-employment-contract-system.pdf

### Opportunity: Waste Transporter Trip/Plan Compliance (MWAN/Balady)

**Industry:**
Waste collection and transport

**Buyer:**
Operations manager at licensed small/mid waste haulers

**Trigger / Why now:**
MWAN enforcement push (Iltazem platform to enforce waste laws); fines up to SAR 100,000 for unlicensed transport; Balady lets transporters create trips and operational plans per active waste contract.

**Current workflow:**
1. Hauler holds contracts with several generators (municipalities, factories, hospitals).
2. Creates operational plans and trips on Balady per contract; keeps internal records (paper/Excel, template waste transportation record forms).
3. Reconciles with driver logs, customer paperwork and licence/vehicle qualification expiry.

**Pain:**
Evidence is thin: regulatory requirement is verified, specific pain/duplicate entry unverified.

**Existing solutions:**
Balady/MWAN portal itself, generic fleet/ERP tools, consultants (no specific vendor found).

**The gap:**
Driver-side trip capture feeding Balady entries and customer manifests (unverified).

**Possible product:**
Mobile-friendly trip log plus export to Balady fields and licence/vehicle expiry tracker.

**MVP:**
Trip and manifest records with PDF output, expiry alerts.

**Pricing hypothesis:**
SAR 300-800/month per hauler.

**How to find first customers:**
MWAN/Balady licensed transporter lists (existence of public list unverified).

**Risks:**
No API; small market; relies on a portal I could not inspect.

**Kill condition:**
Interviews show haulers do one portal entry per trip with no duplicate work, or the portal has an API/app already.

**Score:** 4/10

**Sources:**
- https://balady.gov.sa/en/services/waste-transporters-qualification-service
- https://balady.gov.sa/en/services/operational-plans-service
- https://www.gccbusinessnews.com/mwan-launches-iltazem-for-waste-laws/
- https://www.trade.gov/country-commercial-guides/saudi-arabia-waste-management

### Opportunity: FASAH Manifest/Declaration Data Prep for Small Customs Brokers and Freight Forwarders

**Industry:**
Customs brokerage / freight forwarding

**Buyer:**
Small licensed customs brokers, NVOCC/forwarders

**Trigger / Why now:**
Saudi Ports Authority/ZATCA manifest data rules via FASAH effective 29 Oct 2025 (72h/24h pre-arrival); tariff code update on SABER on 1 Jan 2026 (IT hardware codes changed).

**Current workflow:**
1. Receive commercial invoice, packing list, bill of lading by email/PDF.
2. Re-key HS code, value, quantity, parties into FASAH declaration and SABER/SFDA permits.
3. Fix rejections and amend manifests.

**Pain:**
Deadlines and code changes force rework; rejection frequency unverified.

**Existing solutions:**
FASAH (149 services), enterprise customs software and large brokers (names unverified), generic OCR.

**The gap:**
Document-to-FASAH field mapping and HS code remap checks for small brokers.

**Possible product:**
PDF-to-declaration draft with HS-code change validation.

**MVP:**
Invoice/packing-list parser to FASAH-ready spreadsheet plus 2026 code-change checker.

**Pricing hypothesis:**
SAR 400-1,000/month per broker.

**How to find first customers:**
ZATCA licensed broker list, logistics associations (unverified).

**Risks:**
No FASAH API access for small vendors (unverified); generic OCR trap; incumbents unknown.

**Kill condition:**
Brokers already use bundled ERP/customs software with auto-fill.

**Score:** 4/10

**Sources:**
- https://nowlun.com/en/news/132-Saudi%20Arabia%20Announces%20New%20Requirements%20for%20Shipments%20Arriving%20at%20Its%20Ports
- https://zatca.gov.sa/en/eServices/Pages/eServices-235.aspx
- https://etqanlawfirm-sa.com/en/?p=33798

## Rejected after competitor research
- ZATCA Fatoora Phase 2 e-invoicing connector/accounting: Wafeq, Qoyod, Zoho Books, Daftra all certified, wave 25 (all VAT taxpayers over SAR 187,500, deadline 1 Feb 2027) already served. Niche legacy-system bridge possible but margin thin.
- Fire-safety inspection reporting: no evidence found of portal duplication in the search results (unverified); not pursued.

## Attractive problem, poor distribution
- SFDA food product/facility registration (GHAD, FASEH) for foreign food exporters: real paperwork, but served by SGS and consultants, and buyers are foreign, per-case, not recurring (sources: https://www.hqts.com/sfda-saudi-arabia-food-drug-compliance/, https://www.sgs.com/en-gb/news/2025/09/pca-2025-q3-streamlining-food-export-compliance-procedures-for-saudi-arabia).

## Too competitive
- ZATCA e-invoicing (https://www.wafeq.com/en-sa/business-hub/for-business/top-zatca-approved-accounting-software-for-smbs-in-saudi-arabia, https://kpmg.com/us/en/taxnewsflash/news/2026/07/saudi-arabia-e-invoicing-mandatory-for-taxpayers-with-revenue-above-sar-187500.html).
