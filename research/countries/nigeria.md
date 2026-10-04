# Nigeria: Indie-Hacker Opportunity Research

*Research date: 2026-10-04. Track: Nigeria only.*

> **Verification caveat (read first).** The research session's shared web-search budget (200 calls across all agents) ran out twice: after about 9 Nigeria searches, and again after about 7 more. WebFetch was blocked by network policy, so no primary page (gazette, regulator PDF or vendor pricing page) could be opened. Everything marked as a source below appeared in **search-result titles or snippets** this session. Claims I could not check are labelled **unverified**. Industries I could not search at all are listed separately and were **not scored**. Treat every score as provisional until someone does a primary-source read.

The biggest regulatory trigger in Nigeria for 2025–2026 is the **2025 tax reform package** (Nigeria Tax Act and Nigeria Tax Administration Act, in force 2026). It brings:
- FIRS renamed the **Nigeria Revenue Service (NRS)**;
- mandatory clearance e-invoicing through the **Merchant-Buyer Solution (MBS)**;
- the **Rev360** portal, which replaced TaxPro Max on 10 June 2026;
- the WHT Regulations 2024, in force since 1 Jan 2025.

Most of the verified evidence below therefore clusters around tax. Two strong non-tax leads also came up: **expatriate-quota monthly returns** and the **NHIA one-hour pre-authorisation rule** for HMOs.

---

## Industries screened

| # | Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|---|
| 1 | All VAT-registered B2B businesses / accountants | Issuing NRS MBS e-invoices (IRN/QR clearance) | **Too competitive** | 16+ FIRS/NRS-certified providers, plus dual-accredited newcomers (Afri Invoice, Doftwerks, Duplo, DigiTax, Nvono) and Zoho Books/Invoice via Remita |
| 2 | Medium/large taxpayers (AP teams) | Making sure supplier invoices carry a valid IRN before input VAT is claimed | **Opportunity (moderate)** | New rule: no IRN means no input VAT. Many small suppliers only join MBS in 2027–28. APPs may absorb this. |
| 3 | Contractors and suppliers to corporates/government | WHT (and VAT-withheld) receivable → credit note → Rev360 → CIT offset reconciliation | **Opportunity** | Chronic, documented credit-note pain; new 2024 WHT regs; credits migrated to the new Rev360 portal |
| 4 | Tax practitioners / accounting firms | Multi-client filing on Rev360 during the portal transition | **Opportunity (weak)** | Real pain (crashes and penalties at the June 2026 deadline) but close to generic practice management |
| 5 | Foreign-owned companies / immigration consultants | Monthly expatriate-quota (EQ) returns on e-CitiBiz, plus EEL and permit expiries | **Opportunity** | Monthly, mandatory, fixed penalties, no specialist software found |
| 6 | Private hospitals / clinics | HMO pre-authorisation codes + claims follow-up across many HMOs | **Opportunity (moderate)** | NHIA one-hour pre-auth directive (2026) plus chronic HMO payment delays. Curacel serves the payer side. |
| 7 | Customs agents / freight forwarders | Clearance on the new B'Odogwu platform + PAAR/SON certificate + bank payment | **Poor distribution / integration** | Real pain (delays, demurrage), but a closed government platform with no visible API, and buyers are hard to reach |
| 8 | Any organisation processing personal data (DCPMI) | NDPC GAID Compliance Audit Returns (CAR) filed via licensed DPCOs | **Low priority** | Mandatory, but only once a year, and the DPCO consultants do the work |
| 9 | Employers (payroll) | Monthly PAYE to 36+1 state revenue services, pension to PFAs, NHF/NSITF | **Too competitive (unverified)** | Not searched this session. Remita, SeamlessHR and others are known players; treat as background knowledge only. |
| — | Agro exporters (NXP/EU checks/EUDR cocoa), pharma (NAFDAC/PCN), fuel stations (NMDPRA), mining (royalties/export permits), SCUML/goAML DNFBPs | — | **Not screened (budget exhausted)** | Recommended for a follow-up pass. Not scored. |

---

## Opportunities

### Opportunity: Expatriate-quota monthly returns and permit-compliance tracker

**Industry:**
Foreign-owned companies in Nigeria (construction, oil and gas services, manufacturing, telecoms, Chinese/Indian/Lebanese trading groups), plus the immigration consultants and law firms that file for them.

**Buyer:**
HR/admin manager or company secretary at companies holding expatriate-quota (EQ) positions. Second buyer: immigration consultancies and law-firm immigration desks that file for many clients.

**Trigger / Why now:**
- The Federal Ministry of Interior requires EQ returns on the e-CitiBiz portal **within the first 10 days of every month**.
- Late-filing penalties took effect on **10 June 2024**: ₦100,000 after 10 days, ₦150,000 after 20 days, ₦200,000 after 25 days. The EQ Handbook 2022 also sets a ₦3,000,000 fine for not filing.
- The **Expatriate Employment Levy (EEL)** adds an annual per-expatriate levy and a register. One search snippet dates the EEL guideline launch to 29 July 2026; other sources describe a 2025 introduction. Exact timing and status are **unverified**.
- KPMG Nigeria has warned that monthly expatriate returns create potential **tax exposure** because NRS can cross-check them against PAYE.

**Current workflow:**
1. HR keeps a spreadsheet of expatriates, EQ positions (approved vs used), CERPAC/STR permit and passport expiries.
2. Every month HR (or a consultant) logs into e-CitiBiz and re-keys each expatriate's details into the monthly return, separately for the Ministry and NIS.
3. Separately, they track EEL obligations, quota renewals, redesignations and permit renewals by email or calendar.
4. PAYE for expatriates is filed with the state revenue service. Nothing reconciles the head-count reported to Interior with the PAYE head-count.

**Pain:**
- Fixed escalating penalties, plus a ₦3m fine.
- The task is monthly, a deadline is easy to miss, and the same data is re-keyed every month.
- Inconsistency with PAYE filings creates tax-audit risk (per KPMG).
- Several law firms and alert services publish reminders about it, which signals that companies get it wrong.

**Existing solutions:**
- The e-CitiBiz portal itself (filing only, no tracking).
- Immigration consultancies and law firms (manual service; e.g. firms publishing alerts on Mondaq and Afriwise).
- Global mobility platforms such as Envoy Global, which publishes Nigeria alerts but is aimed at multinationals.
- Generic HRIS (no Nigeria EQ module found; unverified).

**The gap:**
No affordable tool found that holds the EQ and permit register once and then:
- produces the monthly return package;
- sends reminders on the 1st and 7th of each month;
- tracks EEL and expiries;
- flags mismatches between the expatriate list and the PAYE payroll list.

**Possible product:**
"Expat compliance register for Nigeria": one register of expatriates and quota positions that produces each month's e-CitiBiz return data (copy-ready or browser-assisted), a deadline and penalty calendar, permit expiry alerts and an EEL ledger. A multi-client mode serves consultants.

**MVP:**
- Spreadsheet import of expatriates and quota positions.
- Monthly checklist plus a pre-formatted return sheet for each company.
- Email/WhatsApp reminders before day 10.
- Expiry dashboard.
- PAYE head-count cross-check from an uploaded payroll CSV.

**Pricing hypothesis:**
- ₦40k–₦100k per company per month (about US$25–65).
- Consultant plan: ₦250k–₦600k per month for 20–50 client companies.
- One avoided ₦100k–₦200k late penalty pays for the subscription.

**How to find first customers:**
- Immigration consultants and law-firm immigration desks (they publish alerts on Mondaq and Afriwise).
- NIPC business-permit holders.
- Chinese and Indian chambers of commerce in Lagos and Abuja.
- Construction and oil-service contractor lists.

**Risks:**
- e-CitiBiz may add its own reminders or an API, or change its forms.
- The return is short for small expatriate headcounts (low pain under about 3 expatriates).
- Consultants may treat the work as their own value-add and resist a tool.
- EEL politics are volatile.

**Kill condition:**
Interviews show the monthly return takes under 15 minutes for typical companies, or consultants bundle filing at negligible cost, or e-CitiBiz auto-carries last month's data forward.

**Score:** 6/10 (monthly, mandatory, penalised, weak tooling; market size and portal friction need interviews)

**Sources:**
- https://admin.mondaq.com/nigeria/general-immigration/1464720/the-federal-ministry-of-interior-directs-prompt-filing-of-expatriate-quota-monthly-returns-on-the-e-citibiz-portal
- https://insights.afriwise.com/blog/nigeria-mandatory-expatriate-quota-returns-submission-through-the-federal-ministry-of-interior-ecitibiz-website
- https://eiglaw.com/nigeria-expat-quota-reports-must-be-submitted-though-e-citibiz/
- https://globaltaxnews.ey.com/news/2024-0975-nigeria-introduces-penalties-for-companies-that-do-not-file-expatriate-quota-returns-on-time
- https://assets.kpmg.com/content/dam/kpmg/ng/pdf/tax/ng-Management-of-Expatriate-Monthly-Returns-to-Avoid-Potential-Tax-Liabilities.pdf
- https://www.envoyglobal.com/news-alert/nigeria-foreign-national-quota-monthly-returns/
- https://fmino.gov.ng/fg-rolls-out-expatriate-employment-levy-guidelines/
- https://www.mondaq.com/nigeria/employee-rights-labour-relations/1437170/regulatory-alert-federal-ministry-of-interior-introduction-of-expatriate-employment-levy-and-other-matters

---

### Opportunity: WHT and VAT-withheld credit reconciliation for contractors and suppliers

**Industry:**
B2B service and supply companies selling to corporates, multinationals, telcos, banks and government: contractors, IT vendors, consultants, oil-service and construction subcontractors. Also the accountants who serve them.

**Buyer:**
Finance manager or chief accountant at an SME or mid-size supplier (roughly ₦100m–₦5bn turnover). Second buyer: tax-consulting firms.

**Trigger / Why now:**
- The **Deduction of Tax at Source (Withholding) Regulations 2024** were gazetted on 2 Oct 2024 and took effect on 1 Jan 2025. They changed rates and exemptions; for example, small companies are exempt when the supplier has a valid TIN and the transaction is ₦2m or less in the month.
- **Rev360 replaced TaxPro Max (launched 10 June 2026).** Profiles, filings, payments, balances and **WHT credit notes** were migrated, with auto-migration scheduled by 30 April 2026. Migration errors are likely to surface in credit balances (inference).
- FIRS also appointed large firms (MTN, Airtel, banks) as **VAT withholding agents**, so suppliers also see VAT short-paid.

**Current workflow:**
1. A customer pays the invoice net of WHT (and sometimes VAT). The finance team sees the short payment in the bank statement.
2. Staff match short payments to invoices by hand in Excel, using the remittance advice if one arrives.
3. They chase the customer for the deduction receipt or credit note. The regulations set no deadline for the customer to issue it.
4. They check whether the credit appears on the NRS portal (now Rev360) under the right TIN and year.
5. At CIT filing, they apply the credits. Prior-year unutilised credits historically required a refund claim that triggers an audit.

**Pain:**
- Documented challenges: customers deduct but do not remit, credit notes arrive late, credits are refused because the year on the note does not match the year of assessment, and unutilised credits push the company into a refund-and-audit process.
- FIRS has previously had to open special windows for taxpayers to reconcile WHT positions (2018).
- At 2–10% of contract value, WHT credits are material cash.

**Existing solutions:**
- Accounting software (Zoho Books Nigeria edition, QuickBooks, Sage) records WHT deducted but does not reconcile it against NRS credit records (inferred; not confirmed on vendor pages).
- Tax consultants doing it manually in Excel.
- E-invoicing APPs (DigiTax, Duplo, etc.) focus on invoice clearance, not WHT receivables (unverified).

**The gap:**
No product found that tracks the **lifecycle of a WHT/VAT-withheld receivable**: deduction → receipt or credit note → appears on Rev360 → utilised in the right year → flagged when it lapses or the customer did not remit.

**Possible product:**
"WHT credit ledger": upload bank statements, the invoice list and Rev360 credit statements. The tool auto-matches short payments to invoices, applies the 2024 rate table to flag wrong deductions, lists missing credit notes for each customer, and produces chase letters and a CIT-ready credit schedule.

**MVP:**
- CSV/Excel import of invoices and bank lines.
- Rules engine for the 2024 WHT rates.
- Matching screen.
- Missing-credit-note report for each customer, with an email template.
- Manual upload of Rev360 credit-note exports. No API assumed; Rev360 API availability is **unverified**.

**Pricing hypothesis:**
- ₦50k–₦150k per month for an SME (about US$30–100).
- Practitioner tier ₦300k+ per month.
- Alternative: 0.5–1% of credits recovered.

**How to find first customers:**
- ICAN and CITN tax practitioners.
- Bureau of Public Procurement contractor categories (unverified access).
- NCDMB/NOGIC JQS oil-service contractor registry (unverified).
- LinkedIn search for "chief accountant" at contractors.

**Risks:**
- Rev360 may add self-service credit-note matching.
- The data is messy (remittance advices are inconsistent).
- Accountants may see it as a feature of Zoho or Sage.
- Under the 2024 regulations a customer receipt counts as evidence even if the customer did not remit, which reduces part of the pain.

**Kill condition:**
Rev360 shows each deduction against the supplier's TIN automatically with downloadable matching, or interviews show suppliers write off WHT rather than reconcile it.

**Score:** 6/10

**Sources:**
- https://www.mondaq.com/nigeria/withholding-tax/1566828/deduction-of-tax-at-source-withholding-regulations-2024-what-you-need-to-know
- https://www.lexology.com/library/detail.aspx?g=02b06518-f547-422c-9749-96ab1aa090a0
- https://globaltaxnews.ey.com/news/2024-1347
- https://businessfront.com/finance/feature/new-withholding-tax-system/
- https://webiis10.mondaq.com/nigeria/withholding-tax/525768/firs-moves-to-restrict-carry-forward-of-wht-credits
- https://taxnews.ey.com/news/2018-1701-nigerias-firs-opens-15-day-window-for-taxpayers-to-reconcile-their-withholding-tax-position
- https://techeconomy.ng/firs-appoints-mtn-airtel-banks-to-withhold-vat
- https://www.mondaq.com/nigeria/tax-authorities/1789236/transiting-from-taxpro-max-to-rev360-key-considerations-for-nigerian-taxpayers
- https://nrsportal.ng/taxpromax-to-rev360-migration-guide/ (unofficial guide)

---

### Opportunity: HMO pre-authorisation and claims follow-up desk for private hospitals

**Industry:**
Private hospitals and clinics accredited to multiple HMOs and NHIA.

**Buyer:**
HMO/billing officer or medical director at a 20–150-bed private hospital or multi-clinic group.

**Trigger / Why now:**
- In 2026 the NHIA directed HMOs to issue **pre-authorisation codes within one hour**. Facilities may proceed with treatment if no code arrives in time.
- The NHIA began compliance checks in July 2026 and reported 70% compliance at the National Hospital Abuja.
- The NHIA sanctioned 49 facilities and 47 HMOs in 2024, and over 90 providers in a 2025 crackdown.

**Current workflow:**
1. Patient arrives. Staff call or WhatsApp the HMO for a pre-authorisation code and write it in a register.
2. After treatment, staff compile a claim in each HMO's own format or portal; around 400 hospitals already submit through Curacel to a handful of HMOs.
3. Staff follow up for months on vetting queries and payments. Reconciliation with remittances is manual.

**Pain:**
- Press reports HMO debts are crippling hospital operations, with bills unpaid for more than three months.
- Hospitals report delays and denials of authorisation codes.
- Under the one-hour rule, the hospital needs **timestamped evidence** of when it requested the code in order to protect its claim (inference).

**Existing solutions:**
- Curacel, the payer-side claims platform with a provider submission portal.
- Helium Health, a widely used EMR/HMIS.
- Other EMRs such as SwiftPractice.
- HMO portals; WhatsApp and Excel.

**The gap:**
- A provider-side, HMO-agnostic log of pre-authorisation requests and response times, giving one-hour-rule evidence for disputes and NHIA complaints.
- A claims-ageing and remittance-matching board across all HMOs.
- EMRs and Curacel are not built to fight HMOs on the hospital's behalf (unverified for Helium's billing module).

**Possible product:**
A hospital "HMO receivables desk": timestamped pre-authorisation requests (web form or WhatsApp capture), an SLA breach log, a claims tracker by HMO, ageing, and remittance matching.

**MVP:**
- Pre-authorisation request log with timestamps and an exportable breach report.
- Claims register with status and ageing by HMO.
- Bulk upload of HMO remittance spreadsheets for matching.

**Pricing hypothesis:**
₦75k–₦250k per month per facility, or 0.5% of recovered aged claims.

**How to find first customers:**
- NHIA accredited-provider lists.
- State facility regulators (e.g. HEFAMAA in Lagos; unverified list access).
- Guild of Medical Directors / AGPMPN members (unverified).

**Risks:**
- Curacel or Helium extends into provider-side receivables.
- Hospitals may lack the staff discipline to log requests.
- HMOs consolidate onto one platform.

**Kill condition:**
Curacel's provider portal already covers most HMOs with ageing and remittance matching, or hospitals say pre-authorisation delays are not their main cost.

**Score:** 5/10

**Sources:**
- https://gazettengr.com/?p=375318
- https://allafrica.com/stories/202507010064.html
- https://businessday.ng/exclusives/article/healthcare-operations-crippled-debts-hmos/
- https://www.curacel.co/post/how-curacel-helps-health-insurers
- https://www.cbinsights.com/compare/curacel-vs-helium-healthcare
- https://www.africaprivateequitynews.com/p/nigerias-helium-health-secures-10m-in-series-a-financing-round

---

### Opportunity: Supplier IRN gate (input-VAT protection) for medium taxpayers' accounts-payable teams

**Industry:**
Medium (₦1bn–₦5bn) and large taxpayers buying from many small suppliers: manufacturers, distributors, FMCG, pharma.

**Buyer:**
AP lead or tax manager.

**Trigger / Why now:**
- MBS go-live dates: large taxpayers had a 31 July 2026 deadline; medium taxpayers go live on **1 July 2026**, with enforcement in **January 2027**.
- **Emerging taxpayers (below ₦1bn) only roll out in 2027, with enforcement around 2028.**
- An invoice without a valid IRN is invalid for tax purposes, and the buyer loses the input VAT.

**Current workflow:**
1. Supplier invoices arrive as PDF or paper.
2. AP books VAT without checking the IRN.
3. AP has no list of which suppliers can issue IRNs yet.
4. Exposure is discovered only at audit or VAT review.

**Pain:**
- Lost input VAT (7.5%) on purchases from non-compliant suppliers.
- AP must chase hundreds of small suppliers during a staggered rollout.

**Existing solutions:**
All MBS APPs/SIs: DigiTax (800+ businesses), Duplo (AP/AR platform), Afri Invoice, Cryptware, Interswitch, Remita, eTranzact, Doftwerks, Nvono, plus Zoho via Remita.

**The gap:**
- A supplier-compliance campaign: who is on MBS, collecting IRN-ready status, VAT-at-risk reporting, and a pre-booking check.
- APPs focus on their own customers' outbound invoices.
- **High absorption risk:** each APP wants the suppliers as customers.

**Possible product:**
A supplier-readiness portal and "VAT at risk" report that plugs in beside any APP.

**MVP:**
- Supplier list import.
- Readiness survey/onboarding links.
- IRN field capture and validation (format/QR check; API validation **unverified**).
- Monthly VAT-at-risk report.

**Pricing hypothesis:**
₦150k–₦400k per month per buyer company.

**How to find first customers:**
- Lists of medium taxpayers aren't public. Use MAN (Manufacturers Association of Nigeria) members, LCCI, and APP partner referrals.

**Risks:**
- APPs give this away free.
- NRS/MBS offers buyer-side validation natively.

**Kill condition:**
MBS or a major APP offers a free supplier-status lookup and VAT-at-risk report.

**Score:** 5/10

**Sources:**
- https://www.globalvatcompliance.com/globalvatnews/nigeria-e-invoicing-rollout-key-updates-2026/
- https://sovos.com/regulatory-updates/vat/nigeria-nrs-publishes-e-invoicing-timeline/
- https://nairametrics.com/2026/02/17/nrs-launches-phased-e-invoicing-fiscal-monitoring-system/
- https://mathewtegha.com/nrs-sets-july-31-deadline-for-large-companies-to-comply-with-e-invoicing-system/
- https://techcabal.com/2026/04/16/all-you-need-to-know-about-e-invoicing-in-nigeria/
- https://allafrica.com/stories/202609100373.html
- https://guardian.ng/business-services/business/nrs-and-digitax-intensify-e-invoicing-support-as-nigerian-businesses-navigate-compliance-requirements/
- https://tryduplo.com/blog/nrs-e-invoicing-in-nigeria-what-it-is-who-it-affects-and-how-to-comply-in-2026/

---

### Opportunity: Rev360 multi-client filing cockpit for tax practitioners

**Industry:**
Tax-consulting and accounting firms (CITN/ICAN members).

**Buyer:**
Partner or tax manager at a firm filing for 20–300 SME clients.

**Trigger / Why now:**
- Rev360 went live on 10 June 2026 and crashed around the 30 June CIT deadline.
- One consultant held more than ₦100m of clients' tax deposits but could not file returns or generate payment invoices.
- Practitioners complained that penalties (about ₦2bn) were being added before the deadline.
- The 2026 tax reform also requires many newly exempt small companies to keep filing.

**Current workflow:**
1. Excel deadline tracker.
2. Log in to each client's Rev360 profile.
3. Screenshot errors.
4. Request penalty waivers later with ad-hoc evidence.

**Pain:**
Penalty exposure caused by the portal itself, combined with heavy client volume.

**Existing solutions:**
- Excel.
- Generic practice-management tools (global tools such as TaxDome; local adoption **unverified**).

**The gap:**
- Nigeria-specific filing calendar (VAT on the 21st, WHT, CIT, development levy).
- Per-client status board.
- **Timestamped "portal failure evidence pack"** to support penalty-waiver requests.

**MVP:**
- Client list with obligations, deadline board and evidence upload.
- Auto-generated waiver letter with logged failure timestamps.

**Pricing hypothesis:**
₦30k–₦100k per month per firm.

**How to find first customers:**
- CITN membership directory.
- ICAN district societies.

**Risks:**
- Close to "generic practice management".
- Pain fades once Rev360 stabilises.

**Kill condition:**
Rev360 stabilises by early 2027 and NRS waives the June penalties broadly.

**Score:** 4/10

**Sources:**
- https://fij.ng/article/nrs-rev360-portal-breakdown-forces-nigerian-businesses-into-tax-penalty-trap/
- https://www.forvismazars.com/ng/en/services/tax/tax-alerts/rev-360-new-digital-tax-platform-by-nrs
- https://www.mondaq.com/nigeria/tax-authorities/1784162/rev360-nrs-deploys-a-new-digital-self-service-administration-system
- https://www.usc.com.ng/blog/tax-promax-rev360-what-nigerian-taxpayers-need-know

---

## Rejected after competitor research

- **SME e-invoicing (MBS) connector or issuance tool.** Killed by:
  - 16 certified providers (Interswitch, Remita, eTranzact, Cryptware, Namiri/DigiTax, Qucoon, Arca, and others);
  - dual-accredited newcomers (Afri Invoice, Doftwerks, Duplo, Nvono);
  - Zoho Books Nigeria edition and free Zoho Invoice, both routed through Remita;
  - DigiTax claims 800+ businesses and QuickBooks/Zoho/Odoo/Sage integrations.
  - Sources: https://msmeafricaonline.com/firs-unveils-16-tech-firms-to-drive-e-invoicing-adoption-as-onboarding-deadline-extended-to-november/ , https://techeconomy.ng/zoho-books-launches-nigeria-edition-to-help-businesses-manage-vat-and-e-invoicing , https://www.zoho.com/en-ng/invoice/ , https://dailytrust.com/doftwerks-secures-dual-nrs-accreditation-for-nigerias-e-invoicing/
- **Payer-side HMO claims vetting/automation.** Killed by Curacel, which serves HMOs and insurers and already has about 400 hospitals submitting through it.
- **Emerging-taxpayer e-invoicing (2027–28 wave).** The same APP crowd plus free Zoho Invoice will reach this segment first.

## Attractive problem, poor distribution or integration

- **Customs agents on B'Odogwu.** The pain is real: delays, demurrage, SON product-certificate transmission failures (July 2025) and bank payment integration gaps. Customs says there is "no going back". But it is a closed government platform with no visible public API, ANLCA builds its own software, and the agent count is unverified.
  - Sources: https://businessday.ng/maritime/article/no-going-back-on-bodogwu-customs-boss-says-as-agents-bemoan-delays/ , https://guardian.ng/business-services/customs-bodogwu-platform-suffers-setback-as-banks-inefficiency-delay-cargo-clearance/ , https://fmino.gov.ng/nigeria-customs-service-engages-shippers-council-on-bodogwu-implementation/ , https://shippingposition.com.ng/capacity-building-anlca-trains-members-on-digitalisation/
- **NDPC GAID Compliance Audit Returns.** GAID was issued 20 March 2025 and took effect in September 2025. Returns are filed annually by 31 March through licensed DPCOs (the 2025 deadline was extended to 30 May 2026), with a late penalty of 50% of the fee. It is annual only and the consultants own the workflow; a tool for DPCOs is possible but the market is small.
  - Sources: https://www.mondaq.com/nigeria/privacy-protection/1606106/the-nigeria-data-protection-commission-issues-the-general-application-and-implementation-directive-2025-gaid , https://www.mondaq.com/nigeria/privacy-protection/1770448/regulatory-update-ndpc-extends-data-audit-filing-deadline , https://www.templars-law.com/app/uploads/2026/01/Client-Alert-Data-Protection-Compliance-in-Nigeria.pdf

## Too competitive

- MBS e-invoicing issuance (see above).
- Multi-state payroll statutory remittances (PAYE, pension, NHF). Not searched this session: Remita, SeamlessHR and similar are known players from background knowledge, so this is **unverified**.

## Not screened (recommended follow-up when search budget allows)

- Agro exporters: NXP export-proceeds forms, NAQS phytosanitary certificates, EU border-check annexes for sesame/groundnuts.
- EUDR cocoa traceability.
- NAFDAC pharma traceability / PCN premises renewals.
- NMDPRA fuel-station licensing and stock reconciliation.
- Mining royalties and export permits (eMC+).
- SCUML/goAML reporting for DNFBPs.
- NCDMB NOGIC JQS contractor registration.
