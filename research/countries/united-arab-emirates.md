# United Arab Emirates

Research date: 2026-10-04. Budget: 6 searches (standard mode, English only; WebFetch blocked). Local-language search and vendor pricing were NOT done, so competitor findings are partial. Items marked "unverified" come from memory or a single secondary source.

**Accessibility:** Open market. No sanctions barrier for a foreign solo founder. Payments through Stripe or local gateways are normal. A caveat for anything that submits to government systems is that FTA, MoHRE, goAML and DHA/DOH access usually runs through licensed intermediaries, accredited providers or the customer's own login. This is unverified and needs checking per idea.

## Industries screened

| Industry | Workflow | Verdict | Reason |
|---|---|---|---|
| All VAT-registered firms | B2B/B2G e-invoicing (Peppol PINT AE) | Crowded, one niche remains | Mandatory 2027, but Tally, Odoo and others are already accredited or building (see below). |
| Private employers, 50+ staff | Emiratisation targets (Nafis, MoHRE) | Possible | AED 10,000 per month per unfilled position starting 1 Jul 2026. Tooling is not clearly served. |
| Private employers, labour-intensive | WPS salary due on the 1st (Resolution 340/2026) | Possible | New staged penalties from 1 Jun 2026. Banks and HR suites cover part of it. |
| Real estate brokers, gold and stone dealers, small accountants (DNFBPs) | goAML registration and reports, UBO register | Possible | Ministry of Economy and Tourism suspends non-registrants. Mostly consultant-driven. |
| Clinics (DHA/DOH) | Insurance claim denials and resubmission | Too competitive | Denials of 15-25% are reported, but HIS and RCM vendors and outsourcers already cover it. |
| Free-zone and mainland companies | ESR, UBO filings | Weak | Mostly annual, and incorporation consultants do it cheaply. |
| Other industries (cold chain, customs brokers, fuel, waste) | Not researched | Not screened | Search budget used up. These are open leads, not rejections. |

## Opportunity: PINT AE e-invoicing exception layer for accounting firms and small SMEs

**Industry:**
Accounting and bookkeeping firms serving VAT-registered SMEs.

**Buyer:**
Owner of a bookkeeping or VAT-agent firm with 20-300 SME clients, and SMEs on non-Peppol-ready software.

**Trigger / Why now:**
- Pilot began 1 Jul 2026.
- Companies with revenue of AED 50m or more go mandatory on 1 Jan 2027.
- Companies below AED 50m go mandatory on 1 Jul 2027.
- Taxpayers must appoint an Accredited Service Provider (ASP) before the deadline. The KPMG source says 31 Jul 2026 for the first wave. A vatit source says 30 Oct 2026 for large businesses. These conflict, so verify.
- The system is Peppol 5-corner with real-time reporting.

**Current workflow:**
1. The SME issues invoices from Tally, Zoho, Excel or a legacy ERP.
2. Invoices must become PINT AE XML and be sent through an ASP.
3. Rejections, credit notes, missing buyer TRN or Peppol ID, and non-standard cases are handled by hand.
4. The accountant reconciles delivered, rejected and corrected invoices against VAT returns.

**Pain:**
The mandate is legally required, and tax reporting becomes real-time. Edge cases for thousands of small firms will fall on accountants. Evidence is the regulatory plan only. No complaint data was found.

**Existing solutions:**
- Tally: Peppol-accredited access point (sme10x).
- Odoo PINT AE module (listed on Ecosire).
- ClearTax: sponsor of the programme.
- Many ASPs are expected. The full list was not obtained. Avalara and Zoho status is unverified.

**The gap:**
A multi-client rejection and reconciliation console that works across ASPs and source systems. Accountants need one queue for many clients. Vendors serve single-company flows.

**Possible product:**
A SaaS that ingests client invoice exports, validates them against PINT AE rules before sending, and shows a queue of rejected or incomplete invoices per client with fix suggestions.

**MVP:**
CSV/Excel to PINT AE pre-validator with a per-client error dashboard. Sending stays with the client's ASP.

**Pricing hypothesis:**
AED 300-1,000 per month per accounting firm, or AED 15-30 per client per month.

**How to find first customers:**
Accounting and VAT agent directories, and the FTA tax agent registry (unverified that it is public). LinkedIn outreach.

**Risks:**
- ASPs and ERPs may add the same validation for free.
- The FTA may change the spec.
- A pre-validator may be commoditised by the ASPs themselves.

**Kill condition:**
Accountants say their ASP or ERP already validates and queues rejections adequately. Or the ASPs include multi-client consoles.

**Score:** 5/10

**Sources:**
- https://kpmg.com/us/en/taxnewsflash/news/2024/10/tnf-uae-implementation-mandatory-e-invoicing-july-2026.html
- https://vatit.com/e-invoicing-guide/united-arab-emirates/
- https://www.sme10x.com/10x-industry/tally-enters-uaes-e-invoicing-fast-lane
- https://ecosire.com/apps/odoo/uae-fta-peppol-einvoicing

## Opportunity: Emiratisation target and contribution tracker

**Industry:**
Private-sector employers with 50 or more staff.

**Buyer:**
HR or PRO manager, or the finance manager, at mid-sized firms.

**Trigger / Why now:**
- Targets rise by 1% per half-year (2% a year).
- The H1 2026 deadline was 30 Jun 2026.
- Financial contributions of AED 10,000 per month (AED 120,000 a year) per unfilled position started on 1 Jul 2026.
- The H2 deadline is expected at year end (verify).

**Current workflow:**
1. HR counts skilled-job headcount and Emiratis by establishment and licence in the MoHRE portal.
2. HR computes the gap per entity.
3. HR hires through Nafis or other routes.
4. HR checks MoHRE records for fake-scheme flags and for classification.

**Pain:**
Large, certain fines, and monitoring that flags fake schemes. No user complaints were found.

**Existing solutions:**
- MoHRE and Nafis platforms (free, government).
- General HR/payroll suites such as Bayzat (unverified features).
- Consultants.

**The gap:**
A multi-licence gap forecast and what-if tool tied to the contribution cost. Whether this is already inside HR suites is unknown.

**Possible product:**
A tracker that imports the employee roster and shows the position gap, the cost of non-compliance and the hiring plan per entity.

**MVP:**
Spreadsheet import, gap calculator, and a countdown to each half-year deadline.

**Pricing hypothesis:**
AED 200-600 per month per group.

**How to find first customers:**
Chambers of commerce, free-zone company lists, LinkedIn outreach to HR heads. There are an estimated tens of thousands of eligible firms (unverified).

**Risks:**
- The rules are simple enough for a spreadsheet.
- Hiring is the real problem, and software does not fix it.
- Annual or half-yearly frequency.

**Kill condition:**
HR leaders say a spreadsheet is enough, or their HR suite already forecasts the gap.

**Score:** 4/10

**Sources:**
- https://www.wam.ae/en/article/c0uqocb-mohre-reaffirms-june-deadline-for-private-sector
- https://www.middleeastbriefing.com/news/uae-emiratization-2026-what-companies-must-do-now/
- https://eiglaw.com/uae-reminds-private-employers-of-june-2026-emiratisation-deadline/

## Opportunity: WPS salary-day compliance monitor for labour-heavy employers

**Industry:**
Construction, security, cleaning, transport and manpower suppliers.

**Buyer:**
Finance or HR manager, or the owner of a firm with 50-2,000 workers.

**Trigger / Why now:**
- Ministerial Resolution 340/2026, effective 1 Jun 2026.
- Salary due on the 1st of every month.
- A firm is compliant if at least 85% of wages are paid on time.
- Notifications start on day 2 and warnings on day 5.
- Penalties start on day 11.
- MoHRE registers labour disputes on day 16 for high-risk sectors.

**Current workflow:**
1. Payroll team prepares the salary file.
2. The bank or exchange house uploads it.
3. They reconcile rejections and unpaid workers.
4. They respond to MoHRE notices.

**Pain:**
Monthly frequency, penalties, and a downgrade in classification for repeat violations.

**Existing solutions:**
- Bank and exchange-house WPS portals.
- HR/payroll SaaS (Bayzat and others, unverified).
- Payroll outsourcers.

**The gap:**
Pre-payday funding and exception alerts, and a notice-response log. This is probably partly covered by payroll suites.

**Possible product:**
A dashboard that predicts the 85% test, shows unpaid workers, and tracks the status of each MoHRE notice per establishment.

**MVP:**
Upload payroll and bank-return files, then flag the 85% test and unpaid or rejected workers.

**Pricing hypothesis:**
AED 150-500 per month per establishment.

**How to find first customers:**
Contractor, security and cleaning company directories and trade lists.

**Risks:**
- Payroll vendors may already cover it.
- Customers use many banks and file formats.
- Sales to labour contractors are slow.

**Kill condition:**
Employers say their bank portal and HR suite already show unpaid status.

**Score:** 4.5/10

**Sources:**
- https://www.ey.com/en_gl/technical/tax-alerts/uae-introduces-enhanced-wage-protection-system-effective-1-june-2026
- https://www.bakermckenzie.com/en/insight/publications/2026/06/uae-new-resolution-impacting-payroll-immediate-action-required
- https://www.clydeco.com/zh/insights/2026/06/uae-introduces-stricter-wage-protection

## Opportunity: goAML and AML programme manager for small DNFBPs

**Industry:**
Real estate brokers, dealers in precious metals and stones, and small accounting and audit firms.

**Buyer:**
Compliance officer or owner of a small broker or dealer.

**Trigger / Why now:**
- Federal Decree-Law 10 of 2025 came into force 14 Oct 2025.
- Cabinet Resolution 134 of 2025 came into force 14 Dec 2025.
- The Ministry of Economy and Tourism suspends non-registrants (50 firms for 3 months in one announced case).
- Dealers in precious metals and stones are in scope for cash above AED 55,000.

**Current workflow:**
1. Register on goAML.
2. Run customer due diligence and sanctions screening.
3. File reports such as STR and DPMSR where triggered, with the required fields.
4. Keep records and run a risk assessment.
5. Prepare for inspection, often with a consultant.

**Pain:**
Suspension and fines. Small brokers are often not compliance-literate.

**Existing solutions:**
- AML consultancies (the uppersetup and Kayrouz sources are consultant guides).
- Enterprise screening and KYC vendors.
- Real estate CRMs. Their AML features are unverified.

**The gap:**
A cheap per-transaction workflow for tiny firms: it checks whether a deal triggers a report, captures CDD evidence, and produces the goAML XML report.

**Possible product:**
A deal-by-deal compliance checklist with sanction-list checks and goAML XML export.

**MVP:**
Cash or deal intake form, trigger rules, evidence pack and XML file for manual upload.

**Pricing hypothesis:**
AED 200-500 per month per firm.

**How to find first customers:**
Real estate broker registers (the Dubai Land Department/RERA broker list is likely public, unverified) and gold souk dealer lists.

**Risks:**
- XML schema details and goAML report types need verification.
- Many firms outsource to consultants and see compliance as a cost to minimise.
- Screening vendors may bundle this.

**Kill condition:**
goAML XML is not producible by third parties, or brokers say they only pay consultants.

**Score:** 5/10

**Sources:**
- https://www.moet.gov.ae/en/-/ministry-of-economy-suspends-operations-of-50-dnfbp-establishments-for-3-months-for-failure-to-register-in-goaml-system
- https://uppersetup.com/en/article/dnfbp-aml-compliance-in-the-uae-2026-who-is-covered-whats
- https://www.kayrouzandassociates.com/insights/uae-goaml-registration-which-businesses-must-comply-in-2026

## Rejected after competitor research

None were killed after a full competitor check. The budget only allowed a partial one, so the following are downgrades. The e-invoicing generic invoice-sending product is dead because Tally, Odoo and the ASPs already do it. Only the multi-client exception layer survives.

## Attractive problem, poor distribution

- Emiratisation tracker: the problem is real and the fines large, but the fix is hiring and not software.

## Too competitive

- Clinic claim denial management (DHA/DOH). Denials of 15-25% and revenue leakage of 10-20% are reported (secondary source). RCM outsourcers and HIS vendors already own it.
- Generic Peppol e-invoicing access point or ASP. Accreditation, cost and incumbents (Tally, ClearTax and others) make it unattractive.

## Gaps in this research

- No search in Arabic.
- No screening of customs, cold chain, fuel, waste, school or free-zone licensing workflows.
- No vendor pricing data.
- ASP list and deadline dates conflict between sources.
