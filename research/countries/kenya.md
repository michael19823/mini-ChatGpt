# Kenya — Indie Opportunity Research (as of 2026-10-04)

> **Research limits (read first).** This track got only about 12 web searches. The session's shared search budget ran out, and WebFetch was blocked by network policy, so no primary page (KRA, SHA, NEMA PDFs) could be opened. Every fact below comes from search-result summaries and their linked articles. Anything I could not confirm that way is marked **unverified** or **estimate**. Several industries on the screening list are marked "not researched" rather than given a guessed verdict. Treat all scores as provisional until each one is checked in customer interviews.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Private clinics / small hospitals (Level 2–4) | SHA claims, pre-authorisation and remittance reconciliation; forced move from the SHA Provider Portal to a DHA-certified HMIS | **Opportunity (#1)** | Hard deadline (30 Oct 2026), large unpaid-claims gap, and certified HMIS vendors handle submission but not exceptions or reconciliation |
| Agri aggregators / processors (sugar, avocado, dairy, produce) | eTIMS buyer-initiated (reverse) invoicing for small suppliers and farmers | **Opportunity (#2)** | KRA guidelines (Mar 2025) plus the 2026 "no eTIMS, no deduction" rule push the work onto buyers, and KRA's free tool covers only bulk entry |
| Property managers / letting agents | Monthly Rental Income (MRI) tax filing across many landlords via eRITS (launched Apr 2025, API via Gava Connect) | **Opportunity (#3, lower confidence)** | Monthly and mandatory, with an agent role built into eRITS; competitor diligence not finished |
| Manufacturers / importers (packaging) | NEMA Extended Producer Responsibility (EPR) registration and annual reports | Poor distribution | Annual workflow, mostly absorbed by producer responsibility organisations (PROs) |
| SMEs / accountants | eTIMS sales invoicing, POS fiscalisation | Too competitive | Dozens of integrators, ERP modules (Zoho Books, Odoo, ERPNext) and SDKs |
| SMEs / accountants | VAT auto-populated return vs books, input-VAT mismatch reconciliation | Too competitive | KRA pre-populates the return, and several reconciliation tools launched in 2025–26 |
| Health facilities | Building or selling an HMIS | Rejected | 28 HMIS platforms already certified by DHA |
| Customs clearing agents | iCMS declarations and KenTrade permits re-keying | Not researched (budget) | Promising pattern, but iCMS upload/API access is unverified |
| Schools | KNEC school-based assessment uploads (CBE) | Not researched (budget) | Unverified, and probably competitive (school management systems) |
| DNFBPs (real estate, lawyers, accountants) | AML/CFT know-your-customer checks and goAML filing after FATF grey-listing | Not researched (budget) | Unverified |

---

## Opportunity: SHA Claims Exceptions & Remittance Reconciliation for Private Clinics

**Industry:**  
Private outpatient clinics, nursing homes, medical centres and small hospitals (KEPH Level 2–4) contracted by the Social Health Authority (SHA).

**Buyer:**  
Owner/medical director or billing/claims officer at private Level 2–4 facilities. Secondary buyer: HMIS vendors (as an add-on/white-label) and medical billing bureaus.

**Trigger / Why now:**  
The Digital Health Agency (DHA) and SHA are retiring the SHA Provider Portal. Facilities must submit claims through a DHA-certified HMIS connected to the National Digital Health Superhighway. The deadline for private, faith-based and Level 5/6 facilities was 1/30 Sept 2026 and has been extended to **30 Oct 2026**. Reports say 28 HMIS platforms have been certified, and only a small number of private facilities had completed the switch. The underlying payment environment is poor:
- About KSh 96.2bn in claims submitted vs KSh 53bn paid by end-Aug 2025.
- Reportedly about 50% of claims from Level 2–4 facilities unpaid.
- A pre-authorisation outage in March 2026.
- Pre-auth backlogs of several months.

**Current workflow:**
1. The clinician sees the patient. SHA eligibility is checked, and pre-authorisation is requested for certain services through the portal or HMIS.
2. The claim is compiled with diagnosis/tariff codes and supporting documents, then submitted (moving from the portal to the HMIS).
3. Claim status is checked by hand. Rejected, queried or partly paid claims are tracked in spreadsheets or paper.
4. SHA pays in batches. The facility tries to match bank receipts to individual claims and chases unpaid or under-paid ones through SHA regional offices.
5. Re-submission or appeal by hand. Write-offs are often never quantified.

**Pain:**  
- KSh 43bn outstanding at end-Aug 2025 and very low payout ratios on some claim types (reported 10–20% on some inpatient/surgical claims).
- Hospitals restricting SHA services because of cash-flow uncertainty.
- Pre-auth outages and backlogs.
- The forced platform migration adds a new failure point.

Facilities at Level 2–4 have thin margins, so receivables directly decide whether they stay solvent.

**Existing solutions:**  
- 28 DHA-certified HMIS platforms (names not verified in this session).
- SHA's own portal, being retired.
- In-house billing clerks and spreadsheets.
- Medical billing consultants (unverified scale).
- Hobby/early projects on GitHub (e.g. a "SHA claim pre-validation" prototype). These suggest others see the gap, but none appears to be a commercial product.

**The gap:**  
Certified HMIS products are built to *submit* claims. On the evidence available, they do not:
- (a) reconcile SHA batch remittances against claims line by line,
- (b) age and prioritise rejected or under-paid claims,
- (c) pre-check claims against SHA benefit-package rules and pre-auth status before submission.

Facilities that switch HMIS vendors also lose claim history. A thin layer that works across HMIS vendors and depends only on exports and remittance documents avoids the need for DHA certification.

**Possible product:**  
"SHA receivables desk" for small facilities. You import claim exports (CSV) from any HMIS and SHA remittance/payment statements, and get the following:
- auto-matching,
- an unpaid/under-paid aging report,
- a rejection-reason log with re-submission checklists,
- a pre-submission rules check.

**MVP:**  
CSV/PDF import of claims plus remittance advice, a matching engine, an aging dashboard and an exportable dispute list per SHA regional office. No HMIS certification needed in v1.

**Pricing hypothesis:**  
KSh 5,000–15,000/month (about US$40–115) per facility, or 0.5–1% of recovered under-payments for larger facilities. **Estimate**; willingness to pay is unvalidated, and facilities are cash-strapped.

**How to find first customers:**  
- SHA publishes facility-level disbursement/payment lists (PDF), which list paid facilities by name. A GitHub project scraping these PDFs confirms they exist.
- The KMPDC facility register / Kenya Master Health Facility List.
- Associations such as the Kenya Association of Private Hospitals and RUPHA (rural & urban private hospitals); names not verified in this session.
- HMIS vendors as resellers.

**Risks:**  
- Certified HMIS vendors add reconciliation themselves.
- SHA changes its remittance format or its rules.
- Pay-to-patient policy politics.
- Data-protection obligations under the Data Protection Act and Digital Health Act (health data).
- Facilities may not pay for software when SHA itself is not paying them.

**Kill condition:**  
Any of the following kills the idea:
- 3+ of the top certified HMIS vendors already provide remittance matching and rejection aging.
- SHA remittance data is not available to facilities in a structured, claim-level form.

**Score:** 6.5/10

**Sources:**  
- Deadline extension to 30 Oct 2026: https://www.the-star.co.ke/news/2026-10-01-ministry-extends-migration-of-hospitals-to-hmis ; https://citizen.digital/article/cs-duale-extends-deadline-for-health-facilities-to-switch-to-shas-digital-system-n391243 ; https://thekenyatimes.com/health/sha-extends-deadline-for-system-compliance/
- Portal-to-HMIS shift explained: https://peopledaily.digital/news/health-ministry-clarifies-shift-from-sha-portal-to-hmis ; https://www.standardmedia.co.ke/health/health-science/article/2001559265/why-sha-is-shifting-hospitals-from-portal-to-hmis-duale-explains ; https://www.kenyanews.go.ke/health-cs-calls-for-timely-transition-to-hmis-sha-contracting/
- DHA certification and SHA integration (vendor guide): https://www.hanmak.co.ke/dha-hmis-certification-sha-claims-integration/
- Unpaid claims and payout gap: https://serrarigroup.com/?p=30942 ; https://nation.africa/kenya/health/revealed-finsprint-the-private-firm-pocketing-sha-billions-5518846
- Pre-auth outage (Mar 2026): https://www.capitalfm.co.ke/news/2026/03/system-failure-at-sha-halts-critical-healthcare-approvals-services-nationwide/ ; https://nation.africa/kenya/health/patients-caught-in-sha-surgery-approval-gridlock--5335272
- Private facility readiness: https://allafrica.com/stories/202410110169.html
- Disbursement PDFs as prospect list (GitHub scraper): https://github.com/3liud/sha-disbursement-across-health-facilities-dashboard

---

## Opportunity: Reverse-Invoice (Buyer-Initiated eTIMS) Operations for Agri Buyers

**Industry:**  
Agricultural aggregators and processors buying from smallholders and micro-suppliers: sugar millers, avocado/horticulture aggregators and exporters, dairy processors and milk bulkers, grain/produce traders. Also hotels and institutions buying from informal suppliers.

**Buyer:**  
Finance manager or chief accountant at mid-size buyers (roughly 200–20,000 suppliers each). Secondary buyer: outsourced accounting firms serving these buyers.

**Trigger / Why now:**  
- **25 March 2025:** KRA published Buyer-Initiated Invoicing guidelines. For suppliers under KSh 5M turnover, the *buyer* raises the eTIMS invoice on eCitizen, single or batch via CSV, and the seller approves via eCitizen or USSD *222#.
- **From 1 Jan 2026:** income tax returns (for 2025) must back every expense with an eTIMS/TIMS invoice, otherwise the expense is disallowed.
- **2025–26:** KRA moved on to avocado and sugarcane. Millers raise buyer-initiated invoices for cane farmers, and lobbies protested in Jan 2026.

**Current workflow:**
1. Collect each supplier's KRA PIN or national ID and phone number; many farmers lack PINs.
2. After each payment cycle (weekly/monthly), build a CSV from the weighbridge or collection ledger and upload it in KRA's buyer-initiated module.
3. Wait for each seller to approve by USSD/eCitizen, then chase non-approvals.
4. Match approved invoices to M-Pesa/bank bulk payments and the purchase ledger.
5. At year-end, prove that every purchase expense has a valid eTIMS invoice, or lose the deduction.

**Pain:**  
- Expense deductibility now depends on thousands of smallholders each completing a USSD approval.
- Suppliers distrust buyer-raised invoices and do not understand them, as Business Daily reported.
- Political pushback in the sugar belt.
- KRA's original eTIMS rollout reached only 22% of its onboarding target (202,291 of 915,000 businesses by Mar 2024), which shows how weak supplier-side adoption is.

**Existing solutions:**  
- KRA's free buyer-initiated module (eCitizen/USSD) with CSV upload.
- eTIMS integrators and ERP connectors, e.g. Zoho Books eTIMS, Odoo eTIMS modules, and ERPNext apps via DigiTax/Slade360.
- Farm-management/aggregation software in the produce sector (names and eTIMS support **unverified**).
- Accountants doing it by hand.

**The gap:**  
KRA's tool covers *creating* batch invoices. The gaps sit around it:
- supplier PIN/ID onboarding and validation,
- tracking of approval status with SMS nudges,
- handling of rejected or expired invoices,
- matching to M-Pesa bulk-payment files,
- a year-end "expense evidence" coverage report.

Whether integrator APIs expose buyer-initiated invoicing is **unverified**. If they do, an integrator could close this gap quickly.

**Possible product:**  
"Reverse-invoice control tower". It takes a farmer register plus the payment file and produces:
- KRA-ready CSV batches,
- tracking of which suppliers approved,
- bulk SMS/WhatsApp reminders in Swahili,
- a reconciliation report from payment to invoice to ledger, for auditors and KRA.

**MVP:**  
Upload the supplier register and payout file, then: validate PINs and IDs, generate the KRA batch CSV, track approval status (manual import from eCitizen if no API exists), send SMS reminders, and produce a coverage report.

**Pricing hypothesis:**  
KSh 10,000–40,000/month by supplier count (about US$75–300), or about KSh 10–20 per supplier invoice. **Estimate.**

**How to find first customers:**  
- Licensed sugar millers (Sugar Board register).
- AFA/HCD-registered avocado and horticulture exporters.
- Kenya Dairy Board-licensed processors.
- Cooperative unions.
- Accounting firms in Eldoret, Kakamega, Nakuru and Murang'a.

**Risks:**  
- KRA adds approval dashboards or auto-approval, or exempts farm-gate purchases (a political risk given the lobbying).
- Integrators add this feature.
- Lack of API access may force fragile portal workflows.

**Kill condition:**  
Any of the following kills the idea:
- KRA exempts primary agricultural purchases from eTIMS.
- KRA removes seller approval.
- A major integrator already ships approval tracking plus payment matching.

**Score:** 6/10

**Sources:**  
- KRA guidelines (25 Mar 2025), CSV/batch, USSD approval: https://bowmanslaw.com/insights/kenya-the-revenue-authority-publishes-the-reverse-invoicing-guidelines/ ; https://www.kra.go.ke/business/etims-electronic-tax-invoice-management-system/learn-about-etims/buyer-initiated-invoicing ; https://www.kra.go.ke/images/publications/eTIMS-Buyer-Initiated-User-Manual.pdf
- Reverse-invoicing analysis and supplier mistrust: https://www.businessdailyafrica.com/bd/opinion-analysis/columnists/reverse-invoicing-under-etims-bridging-informality-compliance-5320356 ; https://www.businessdailyafrica.com/bd/economy/kra-finds-new-trick-to-nab-suppliers-after-etims-flop--4578084
- 2026 expense rule: https://sokodirectory.com/2025/11/kras-2026-e-invoice-crackdown-your-expenses-without-etims-receipts-will-become-taxable-income/ ; https://www.kenyans.co.ke/news/124369-taxpayers-are-required-upload-non-etims-invoices-filing-returns-kra-clarifies
- Sugarcane and avocado: https://www.capitalfm.co.ke/news/2026/01/sugarcane-farmers-etims-kra-tax-warning/ ; https://www.businessdailyafrica.com/bd/economy/cane-farmers-face-losses-in-switch-to-etims-invoice--4581946 ; https://thestandard.ke/sports/business/article/2001492771/www.digger.co.ke
- Competitor reference: https://www.zoho.com/ke/books/help/etims/ ; https://github.com/navariltd/Kenya-Compliance-via-DigiTax

---

## Opportunity: Multi-Landlord eRITS Filing for Property Agents

**Industry:**  
Residential property management and letting agents.

**Buyer:**  
Owner or accountant of a property-management agency managing 20–500 landlords' units.

**Trigger / Why now:**  
- **April 2025:** KRA launched eRITS (Electronic Rental Income Tax System) for landlords *and property managers/agents*. Landlords must register properties and tenant PINs, and file MRI at 7.5% of gross rent each month by the 20th (for annual rent of KSh 288k–15M).
- eRITS offers system-to-system integration via the Gava Connect API.
- KRA has framed eRITS as an enforcement tool against non-compliant landlords.

**Current workflow:**
1. The agent collects rent (M-Pesa paybill/bank) for many landlords.
2. For each landlord, the agent computes gross rent received.
3. Each month, the agent logs in or files per landlord in eRITS/iTax, pays 7.5%, and keeps the payment slip.
4. The agent registers and updates properties and tenant PINs in eRITS whenever tenants change.
5. The agent remits net rent and sends the landlord a statement.

**Pain:**  
- Per-landlord monthly filing deadlines.
- Tenant churn means constant register updates.
- Penalties and interest for late MRI.
- Duplicate entry between the rent ledger and eRITS.

These are inferred from the system design; there is **no direct complaint evidence** gathered.

**Existing solutions:**  
- KRA eRITS/eCitizen (free).
- Kenyan property-management/rent-collection software and M-Pesa paybill reconcilers (specific vendors and their eRITS support **not verified**; diligence incomplete).
- Tax agents and accountants.

**The gap (hypothesis):**  
Bulk, multi-landlord filing: one rent ledger producing N eRITS filings and payments, plus tenant-PIN register syncing. This exists only if current rent software does not already integrate eRITS.

**Possible product:**  
An eRITS connector for agents. It imports the rent-collection ledger (M-Pesa statement, or an export from existing software), computes MRI per landlord, files and pays via Gava Connect, and produces landlord statements with KRA receipts attached.

**MVP:**  
CSV ledger in, per-landlord MRI schedule out, filing via API (or a guided checklist if API access is restricted), and a deadline dashboard.

**Pricing hypothesis:**  
KSh 200–500 per landlord per month (estimate), or KSh 5,000–20,000/month per agency.

**How to find first customers:**  
- Estate Agents Registration Board register of agents.
- Kenya Property Developers Association / letting-agent listings on property portals.
- Accounting firms that file MRI.

**Risks:**  
- Gava Connect access/approval for third parties is unverified.
- Property software vendors integrate first.
- Many landlords are informal and do not file at all, which caps agency demand.

**Kill condition:**  
Any of the following kills the idea:
- Leading Kenyan rent-management tools already file to eRITS.
- Gava Connect does not expose filing and payment for agents.

**Score:** 5/10 (low confidence; competitor diligence incomplete)

**Sources:**  
- https://www.ey.com/en_gl/technical/tax-alerts/kenya-revenue-authority-kra-launches-erits-to-enhance-rental-income-tax-compliance
- https://techcabal.com/2025/10/02/kenyas-rental-income-tax-system/
- https://bowmanslaw.com/insights/kenya-revenue-authority-unveils-the-electronic-rental-income-tax-system-erits-to-streamline-rental-income-tax-compliance/
- https://www.businessdailyafrica.com/bd/economy/kra-goes-after-landlords-with-new-online-system-4998236
- https://erits.kra.go.ke/

---

## Rejected after competitor research
- **eTIMS sales invoicing / POS fiscalisation for SMEs:** killed by a crowded field.
  - KRA's own free eTIMS tools (web, eCitizen, USSD).
  - ERP connectors: Zoho Books eTIMS, Odoo eTIMS (e.g. Amini Tech), ERPNext apps via DigiTax and Slade360 (Navari).
  - Many POS products and SDKs; GitHub alone shows 50+ eTIMS repos, mostly from 2026.
  - Sources: https://www.zoho.com/ke/books/help/etims/ ; https://aminitechsolutions.com/blog/9-kra-etims-in-odoo-the-complete-compliance-path-updated-for-2026 ; https://github.com/navariltd/kenya-compliance-via-slade
- **Standalone HMIS for SHA claims:** killed by the 28 DHA-certified HMIS platforms and the certification barrier. Source: https://www.hanmak.co.ke/dha-hmis-certification-sha-claims-integration/

## Too competitive
- **VAT auto-populated return vs books reconciliation (input-VAT mismatches):**
  - KRA already pre-populates VAT returns from eTIMS.
  - Several tools are in market or launching: SmartVAT Kenya (https://smartvatkenya.co.ke/resources/etims-invoice-rejected/), Risiti (https://getrisiti.com/blog/etims-invoice-rejected), Ushuru, Commenda, plus 2026 GitHub projects such as "Ushuruflow".
  - Source: https://www.kra.go.ke/helping-tax-payers/faqs/the-vat-auto-populated-return
- **Statutory payroll (PAYE, SHIF, Housing Levy, NSSF):** not re-verified this session; widely served by local payroll SaaS (**unverified**).

## Attractive problem, poor distribution
- **NEMA Extended Producer Responsibility (EPR) compliance (LN 176/2024):**
  - In force 4 Nov 2024. Producers had to register and comply by 4 May 2025, with annual reports to NEMA and counties.
  - Problems for a product: an annual cadence, and most producers will route through a handful of PROs, so the real buyer is a few PROs. Better as a consulting or PRO back-office niche.
  - Sources: https://www.clydeco.com/en/insights/2025/02/the-extended-producer-responsibility-regulations ; https://www.afriwise.com/blog/the-extended-producer-responsibility-regulations-2024---what-it-means-for-producers-in-kenya ; https://nema.go.ke/images/Docs/EPR%20ACT/FAQ_on_EPR_-_15th_March_2025.docx
- **SHA receivables for Level 2 dispensaries** (the bottom of Opportunity #1): the pain is real, but willingness to pay is very low and facilities are cash-starved.

## Leads not researched (budget exhausted; worth a follow-up track)
- **Customs clearing agents:** re-keying invoices and packing lists into KRA iCMS, plus KenTrade permits (check iCMS bulk/XML upload).
- **Schools:** KNEC Competency-Based Education (CBE) school-based assessment uploads.
- **DNFBPs:** AML/CFT know-your-customer checks and goAML reporting after the FATF grey-listing (real estate agents, lawyers, accountants).
- **Fuel stations:** compliance after KRA's "eTIMS fuel stations system" rollout (mentioned in KRA's FY2024/25 revenue press release, **unverified**).
