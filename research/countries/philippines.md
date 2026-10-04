# Philippines: Indie-Hacker Opportunity Research

**Research date:** 2026-10-04
**Method note (please read):** This track ran with very limited tooling. WebFetch was blocked for every domain tried (BIR, PhilHealth, news sites, consultancies), and the shared web-search budget ran out twice, so only **15 web searches** were possible. Every fact below marked with a source comes from search-result summaries of the cited pages. I did not open those pages directly. Items marked **(unverified)** come from background knowledge and need checking before customer interviews. Scores carry **medium-to-low confidence**, and every opportunity has an explicit verification to-do.

---

## Industries screened

| # | Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|---|
| 1 | SME accounting / local CAS & POS software vendors | BIR e-invoicing (EIS) by 31 Dec 2026 | **Opportunity (top)** | Hard deadline in about 3 months. Scope includes small/medium e-commerce sellers and CAS/CBA users, and BIR has accredited no provider yet. |
| 2 | Security, janitorial and manpower agencies (DO 174 contractors) | Monthly billing pack to principals plus DO 174 semi-annual report | **Opportunity** | Payment is withheld until payroll, payslips and SSS/PhilHealth/Pag-IBIG/ECC proofs are submitted. Payroll tools stop at remittance files. |
| 3 | Small private hospitals / clinics | PhilHealth eClaims 3.0 cutover, eSOA XML, Returned-to-Hospital (RTH) claims | **Opportunity (moderate)** | Forced migration in 2026, but certified service providers already exist. The possible niche is the RTH/denial rework queue only. |
| 4 | Private schools (K-12) | ESC / SHS Voucher (GASTPE) billing via PEAC IMS/VMS plus LIS | **Opportunity (moderate)** | Strict deadline chain, an anomaly crackdown, and LIS-vs-billing reconciliation. Billing happens only once or twice a year. |
| 5 | Environmental consultancies / Pollution Control Officers (PCOs) | Quarterly EMB Self-Monitoring Report (SMR) | **Opportunity (weak-moderate)** | Mandatory, quarterly, six modules, PCO-signed and notarized. No vendor found, but the online-portal status is unverified. |
| 6 | Plastic EPR (obliged enterprises, PROs, recyclers/diverters) | Recovery evidence, diversion certificates, third-party audit | **Poor distribution** | Real enforcement (155 show-cause letters, 60% target in 2026), but the buyers are large firms and PROs. Plastic credit platforms are already present. |
| 7 | B2B SMEs (payee side) | Collecting BIR Form 2307 and reconciling with SAWT | **Too competitive / feature-sized** | NextPay, Odoo PH localization, Juan(Tax) and outsourced bookkeepers cover most of it. Payee-side chasing is a feature, not a product. |
| 8 | Clinics / dental / diagnostics | HMO LOA and claims across many HMOs | **Rejected** | SeriousMD integrates Medicard and Kaiser LOA/claims, and Maxicare automates dental LOA on Salesforce Agentforce. |
| 9 | Primary-care clinics | PhilHealth YAKAP (ex-Konsulta) claims after eKonsulta shut down in July 2026 | **Rejected** | SeriousMD and mWell (April 2026 launch) are targeting exactly this. |
| 10 | Pharmacies | PhilHealth GAMOT outpatient drug claims | **Poor distribution / too early** | Mostly institutional pharmacies so far (e.g., 20 in South Cotabato), rolled out region by region. Private pharmacy uptake is unclear. |
| 11 | Payroll bureaus / SMEs | SSS / PhilHealth / Pag-IBIG / BIR 1601-C remittance files | **Too competitive** | Juan, MiHCM, Akrivia HCM, ERPNext PH payroll and others (Sprout and Salarium, unverified) already generate these. |
| 12 | Customs brokers, LPG retailers (RA 11592), OSH/DOLE (RA 11058), multi-LGU permits | Various | **Not assessed** | Search budget ran out before these could be researched. Treat them as open leads, not rejections. |

---

## Strongest opportunities

### Opportunity: EIS bridge for local CAS/POS software vendors and their SME users

**Industry:**
Tax compliance / accounting software (B2B2B). The end users are SMEs on BIR-registered computerized accounting or invoicing systems and non-micro e-commerce sellers.

**Buyer:**
1. Small Philippine software houses that sell BIR-registered CAS/CBA, invoicing or POS systems to SMEs. They must make their product produce and transmit structured e-invoices.
2. Secondarily, the finance or bookkeeping head of a small or medium taxpayer using a home-grown or legacy CAS.

**Trigger / Why now:**
- RR 11-2025 and RR 26-2025 (dated 16 Oct 2025) moved the deadline from 14 March 2026 to **31 Dec 2026**.
- RMC 98-2026, issued on 22 Sept 2026, set the operational guidelines.
- Covered taxpayers:
  - small, medium and large taxpayers engaged in e-commerce or internet transactions (micro taxpayers are excluded);
  - taxpayers under the Large Taxpayers Service and EOPT large taxpayers;
  - **businesses using computerized accounting systems / computerized books of accounts and other invoicing software**.
- Process: a Permit to Issue (PTI) e-invoice comes first, and EIS certification must follow within 6 months. Sales data goes to the EIS as JSON, no later than 3 days after the transaction. Reported practice is that PTI applications are due by **late November 2026**.
- As of September 2026, **BIR says it has accredited no e-invoicing service provider (ESP)** and temporarily suspended some ESP engagements.
- POS users are covered only after separate regulations, which is a second wave to come.

**Current workflow:**
1. The SME issues invoices from a local CAS, POS or custom system, produced as printed or PDF invoices.
2. To comply, the SME asks its software vendor for EIS support. The vendor must:
   - build the JSON schema mapping and signing;
   - handle the PTI/EIS certification paperwork;
   - set up retry/acknowledgement handling.
   Each small vendor does this on its own.
3. While waiting, accountants push data manually, or the SME considers switching to a foreign e-invoicing suite.
4. Exceptions such as rejected transmissions, credit/debit notes and cancelled invoices are handled ad hoc.

**Pain:**
- The deadline is hard and sits about 3 months away.
- Rules are still settling: the RMC came out only 3 months before the deadline, and BIR has disclaimed every "official provider."
- The scope reaches beyond large taxpayers to any non-micro taxpayer on CAS/CBA software, which is many thousands of SMEs (exact count unverified).
- The deadline has already slipped once (March to December 2026), which signals unreadiness across the market.

**Existing solutions:**
- Enterprise and multinational: ClearTax PH, Cygnet, EDICOM, Comarch, ecosio, Basware, Tungsten, Flick, e-invoice.app.
- Local SME suites: Juan (JuanTax + Jaz; Essentials ₱2,000/month, Growth from ₱10,000/month) and NextPay (e-invoicing platform).
- Marketplace-seller tools such as BigSeller.
- In-house builds by large taxpayers.

**The gap:**
Enterprise vendors target large taxpayers and ERP connectors (SAP/Oracle). SME suites want the SME to **migrate onto their ledger**. Nobody obviously serves the long tail of **small local CAS/POS vendors** who want to keep their product and only need:
- a drop-in transmission API/SDK (schema mapping, JSON, acknowledgement handling, retry queue, rejection dashboard);
- a templated PTI/EIS-certification evidence pack.

This gap is an inference from search results, not a confirmed absence.

**Possible product:**
An "EIS-as-a-service" gateway. The vendor's software posts a simple invoice JSON (or CSV). The gateway validates it against BIR rules, transmits to the EIS, stores the acknowledgements, and shows an exceptions queue for failed or cancelled invoices. The vendor gets a white-label status page for its SME clients.

**MVP:**
- A REST endpoint plus a CSV upload that maps invoices to the BIR EIS JSON.
- A validation rules engine (TIN format, VAT breakdown, required fields).
- Transmission with retry, an acknowledgement log, and a rejection queue.
- A certification-evidence checklist generator.
- Start with 3–5 local CAS vendors as design partners.

**Pricing hypothesis:**
- Per-vendor platform fee of ₱10,000–₱25,000/month plus ₱0.50–₱2 per invoice, or
- ₱1,500–₱3,000/month per SME end-client (below Juan's ₱2,000–₱10,000 suite pricing because it is transmission-only).
- All pricing is an estimate.

**How to find first customers:**
- BIR's lists of CAS/CBA acknowledgement certificates or registered software providers, if published (unverified).
- Philippine software-house directories.
- Accounting-firm referrals; bookkeepers know which local systems their clients run.
- Non-micro Shopee/Lazada sellers through seller communities.

**Risks:**
- BIR keeps changing the framework (an ESP suspension is already in place) or certifies only a few large providers.
- Another deadline extension would kill urgency.
- ClearTax or Cygnet move downmarket with cheap SME plans.
- EIS API access may require a per-taxpayer certification that the gateway cannot hold on clients' behalf.

**Kill condition:**
- BIR requires each taxpayer to integrate directly and bars third-party transmitters, or
- interviews with 10 local CAS vendors show they have already built EIS or will refer clients to a suite.

**Score:** 7/10. The why-now is the strongest in the country, but it is a crowded, fast-moving race and the window may close quickly.

**Sources:**
- https://www.pwc.com/ph/en/tax/tax-publications/tax-alerts/2025/tax-alert-29.html (RR 26-2025, dated 16 Oct 2025)
- https://www.grantthornton.com.ph/technical-alerts/tax-alert/2026/bir-issues-guidelines-on-electronic-invoicing-retains-31-dec-2026-deadline/
- https://assets.kpmg.com/content/dam/kpmgsites/ph/pdf/InTAX/2026/RMC-No-98-2026-redacted.pdf
- https://assets.kpmg.com/content/dam/kpmgsites/ph/pdf/InTAX/2026/EIS-Public-Advisory-Sep-2026-redacted.pdf (no accredited ESPs)
- https://kpmg.com/us/en/taxnewsflash/news/2026/09/philippines-e-invoicing-required-dec-31-2026.html
- https://www.cleartax.com/ph/en/philippines-e-invoicing (scope incl. CAS/CBA users; JSON; 3-day transmission)
- https://www.cleartax.com/ph/philippines-e-invoicing-faq
- https://www.manilatimes.net/2026/09/24/business/top-business/bir-orders-covered-taxpayers-to-adopt-e-invoicing-by-year-endltspangt/2431804
- https://www.paymongo.com/blog/best-philippine-invoicing-software (Juan pricing)
- https://nextpay.world/blog/save-time-on-bir-forms-with-nextpay
- https://www.cygnet.one/ph/products/e-invoicing/
- https://www.comarch.com/trade-and-services/data-management/legal-regulation-changes/philippines-e-invoicing-mandate-extended-new-2026-compliance-deadline/
- https://hello.ecosio.com/changelog/working-ahead-of-the-philippines-2026-e-invoicing-deadline-with
- https://www.bigseller.pro/blog/articleDetails/3977/philippines-will-fully-mandate-einvoicing-december-31-2026.htm

---

### Opportunity: Per-principal statutory billing pack for security, janitorial and manpower contractors

**Industry:**
Private security agencies, janitorial and manpower contractors (DOLE DO 174-17 registered contractors).

**Buyer:**
The billing/payroll supervisor or owner of a contractor that serves multiple principals, especially government agencies and large corporates.

**Trigger / Why now:**
- **Rules:**
  - Government janitorial and security contract terms make **monthly payment conditional** on:
    - proof of remittance to SSS, Pag-IBIG, PhilHealth and ECC;
    - certifications of no delinquency;
    - a certified payroll signed by each deployed worker;
    - individual payslips.
  - Agencies say they are not liable to pay the monthly billing if any document is missing.
  - DO 174 contractors must also file a semi-annual report to DOLE listing contracts, workers per contract, and proof of SSS/Pag-IBIG/PhilHealth/ECC/BIR remittances.
  - Registration renewal requires updated proofs of the same.
- **Newer pressure:**
  - RA 11917 (Private Security Services Industry Act, 2022) tightens security-agency licensing under PNP-SOSIA.
  - The New Government Procurement Act, RA 12009 (2024), changes procurement practice (unverified details).
  - The why-now is moderate: this is a chronic pain rather than a fresh rule.

**Current workflow:**
1. Run payroll in a payroll tool or Excel.
2. Pay SSS, PhilHealth and Pag-IBIG on three separate portals and download the receipts or contribution lists.
3. For **each principal, each month**:
   - filter the workers deployed to that site;
   - extract their lines from the agency-wide remittance lists;
   - print the payroll for wet signatures and scan it back;
   - attach payslips and no-delinquency certificates;
   - compile a PDF/paper billing pack.
4. The principal's compliance staff check it. Missing or mismatched items lead to rejected or delayed billing.
5. Twice a year, re-aggregate everything for the DO 174 semi-annual report.

**Pain:**
- Cash flow depends directly on the pack: no complete pack, no payment.
- The volume is per principal per month, and a mid-size agency has dozens of posts.
- Worker-level matching (worker deployed at site X ↔ line in the SSS/PhilHealth/HDMF list ↔ signed payroll) is manual.
- Bid bulletins from multiple agencies show the requirement is standard across government (PSA, PhilGuarantee, SEC, PPP Center, OSG, CNU).

**Existing solutions:**
- PH payroll suites that produce statutory remittance files:
  - MiHCM, Akrivia HCM, ERPNext PH Payroll (ECOSIRE), Juan;
  - Sprout and Salarium (unverified feature depth for agency billing).
- Consultancies (e.g., Triple i Consulting publishes DO 174 guides).
- Excel plus clerks.

**The gap:**
Payroll tools stop at *agency-level* remittance files. None found that produces *per-principal, per-period* evidence packs. These packs would need:
- worker-level proof matching across the three agencies' outputs;
- a signature-capture payroll sheet;
- a tracker of which principal has accepted or rejected which billing;
- an automatic DO 174 semi-annual roll-up.

This is unverified against niche local "security agency systems," which may exist (search budget ran out).

**Possible product:**
"Upload your payroll + remittance files → get a compliant billing pack per client, every month." The output is a per-principal pack (cover checklist, worker roster, extracted remittance lines, payslips, signed payroll) plus a billing-status board and the DO 174 semi-annual report.

**MVP:**
- Inputs: payroll Excel, the SSS/PhilHealth/Pag-IBIG contribution list exports or receipts (PDF/CSV), and a deployment roster (worker ↔ principal).
- Output: one merged PDF per principal, a mismatch report (deployed worker missing from a remittance list), and a phone e-signature page for payroll acknowledgement.

**Pricing hypothesis:**
₱3,000–₱10,000/month per agency, tiered by the number of principals or posts. One delayed government billing of ₱500k+ easily justifies it (estimate).

**How to find first customers:**
- PNP-SOSIA licensed agency lists (unverified that they are public).
- DOLE regional lists of DO 174 registered contractors (unverified).
- PhilGEPS award notices for janitorial/security contracts (winning bidders are public).
- Security-agency associations such as PADPAO (unverified current status).

**Risks:**
- Low software budgets and price sensitivity in a thin-margin industry.
- Larger agencies may have custom systems.
- Wet-signature requirements may persist.
- Principals' formats vary, which helps defensibility but slows the MVP.

**Kill condition:**
- A dominant agency-specific payroll product already outputs per-principal billing packs, or
- interviews show principals accept agency-level remittance lists without worker-level matching.

**Score:** 7/10. The problem is mandatory, monthly and tied to cash flow, and buyers can be found through public procurement awards. The main uncertainty is local niche competitors.

**Sources:**
- https://procurement.psa.gov.ph/sites/default/files/BID%20BULLETIN%20NO.%201%20-%20JANITORIAL%20SERVICES.pdf
- https://philguarantee.gov.ph/wp-content/uploads/2022/03/Bid-Bulletin-3-Janitorial-Services-CY-2022-2023.pdf
- https://www.philguarantee.gov.ph/wp-content/uploads/2023/06/BB1-Security-Services-for-Various-Acquired-Assets-rebidding.pdf
- https://sec.gov.ph/wp-content/uploads/2024/06/2024Bid-Bulletin-1-JANITORIALsigned.pdf
- https://ppp.gov.ph/wp-content/uploads/2020/11/PPPC_BAC_20201123_SBB01_Janitorial-FY2021.pdf
- https://laborlaw.ph/do-174-semi-annual-reports/
- https://www.tripleiconsulting.com/dole-174-compliance-guide-key-rules-every-philippine-business-must-know/
- https://batasnatin.com/explainers/ra-11917-private-security-services-industry-act-explained
- https://mihcm.com/en-ph/solutions/payroll/
- https://akriviahcm.com/products/payroll-philippines
- https://ecosire.com/apps/erpnext/erpnext-philippines-payroll

---

### Opportunity: PhilHealth Returned-to-Hospital (RTH) / denied-claims rework desk for small private hospitals

**Industry:**
Small private hospitals (Level 1–2), infirmaries, and ambulatory surgical / dialysis centers.

**Buyer:**
The hospital administrator or PhilHealth claims officer / billing head.

**Trigger / Why now:**
- **eClaims 3.0 cutover:**
  - All accredited facilities had to migrate by 30 June 2026.
  - From 15 April 2026, claims on older versions were returned to the hospital (RTH).
  - From 1 July 2026, only v3.0 is operational.
  - The electronic Statement of Account (eSOA) is accepted **only as XML**, and PDF submissions are returned.
- **Facilities depend on their service providers (SPs):** they had to get their SP certified by 20 March 2026 or switch to a certified SP.
- **Claims volume:** a record PhilHealth claims bill points to strain (per the insurancebusinessmag article).

**Current workflow:**
1. The hospital information system (HIS) or certified SP generates claims and the eSOA.
2. Claims are submitted.
3. Some come back as RTH or denied, with reason codes.
4. Claims staff read the reasons, pull the chart and documents, correct and resubmit, often in spreadsheets.
5. Ageing claims are chased through regional offices.

**Pain:**
- Cash flow for small hospitals depends on PhilHealth reimbursement.
- The forced format change (XML eSOA, v3.0) creates a fresh wave of RTH.
- Rework is manual and staff are scarce.

**Existing solutions:**
- PhilHealth-certified eClaims 3.0 service providers (list at philhealth.gov.ph/partners/csp/).
- HIS vendors.
- mWell's clinic claims platform (April 2026).
- SeriousMD (clinic side).
- Outsourced claims processors (unverified).

**The gap:**
Certified SPs focus on *submission*. Whether any offers a strong RTH/denial worklist (reason-code triage, document checklist per reason, ageing dashboard, resubmission tracking) is **unverified**. This is a classic "80% automated, exceptions manual" pattern.

**Possible product:**
An exceptions-only claims worklist that sits beside the hospital's certified SP. It ingests claim status and RTH reasons, triages them into fix-it tasks, tracks resubmission deadlines, and reports recovery.

**MVP:**
A CSV/Excel import of claim status exports, a reason-code → fix-checklist rules table, a task queue per claims staffer, and an ageing/peso-at-risk dashboard.

**Pricing hypothesis:**
₱5,000–₱15,000/month per facility, or a percentage of recovered RTH value (estimate).

**How to find first customers:**
- PhilHealth's list of accredited health facilities (unverified as a public list).
- DOH licensed hospital directory (unverified).
- Hospital associations such as PHAPi (unverified).

**Risks:**
- Certified SPs may already have RTH modules.
- Access to claim-status data may require an SP partnership.
- Patient data falls under the Data Privacy Act.

**Kill condition:**
The 3 largest certified SPs already ship RTH worklists, or claim-status data cannot be exported by facilities.

**Score:** 5.5/10. The pain is real and timely, but incumbents sit in the data path.

**Sources:**
- https://www.philhealth.gov.ph/advisories/2026/PA2026-0027.pdf
- https://www.philhealth.gov.ph/advisories/2026/PA2026-0022.pdf
- https://www.philhealth.gov.ph/advisories/2025/PA2025-0076.pdf
- https://context.ph/2026/04/20/mwell-launches-new-platform-to-simplify-philhealth-claims-for-clinics/
- https://insurancebusinessmag.com/asia/news/life-insurance/philhealths-record-claims-bill-points-to-a-structural-fault-line-588899.aspx

---

### Opportunity: GASTPE (ESC / SHS Voucher) billing pre-check for private schools

**Industry:**
Private K-12 schools participating in the Education Service Contracting (ESC) and Senior High School Voucher Program.

**Buyer:**
The school registrar or finance officer at a small or mid-size private school.

**Trigger / Why now:**
- **SY 2026–27 billing calendar:**
  - creation in ESC IMS / SHS VP VMS opens 1 Aug 2026;
  - the deadline for creating billing statements is **7 Oct 2026**;
  - documents then move to the PEAC Regional Secretariat (14 Oct), DepEd Regional Office (19 Oct), PEAC National (26 Oct) and DepEd GASS (30 Oct).
- **Supporting documents:** LBP bank certificate, invoice, board resolution, tuition schedule. Every learner must be encoded in DepEd's LIS.
- **Enforcement:** DepEd recovered ₱65M from 54 schools after a voucher probe, and the Secretary has warned of sanctions for anomalies.

**Current workflow:**
1. The registrar keeps enrollment in a school system or Excel.
2. Learners are encoded separately in LIS.
3. Grantees are encoded or confirmed in ESC IMS / VMS.
4. Billing statements are created, documents uploaded, and paper sent along a 4-step chain.
5. Mismatches (learner not in LIS, transferred, or duplicated) cause disallowance or delays.

**Pain:**
- Subsidy revenue depends on accurate billing.
- The anomaly crackdown raises the cost of errors.
- Three government systems plus internal records must agree.

**Existing solutions:**
- PEAC IMS/VMS and its helpdesk.
- DepEd LIS.
- Local school management systems (vendors unverified).
- Manual Excel.

**The gap:**
No tool found that reconciles internal enrollment ↔ LIS ↔ ESC/VP grantee lists before the billing deadline and assembles the document checklist. This is unverified because the budget ran out.

**Possible product:**
An Excel-in, mismatch-report-out reconciliation tool plus a deadline and document tracker for GASTPE billing.

**MVP:**
Upload three exports (school roster, LIS export, IMS/VMS grantee list). The tool fuzzy-matches by LRN and name and outputs an exceptions list plus a pre-filled document checklist.

**Pricing hypothesis:**
₱5,000–₱15,000 per billing cycle, or ₱1,000–₱2,000/month (estimate). Willingness to pay is uncertain.

**How to find first customers:**
- PEAC lists of participating ESC/SHS VP schools (unverified as public).
- DepEd division memoranda, which name the schools.
- Private school associations (COCOPEA/CEAP; unverified).

**Risks:**
- Billing happens only once or twice a year.
- LIS/IMS exports may be limited.
- PEAC may build its own validation.
- Schools' tight budgets.

**Kill condition:**
IMS/VMS already auto-validates against LIS (no mismatch problem remains), or schools report fewer than 2% disallowances.

**Score:** 5/10. Strong buyer access and enforcement, but low frequency.

**Sources:**
- https://helpdesk.peac.org.ph/hc/en-us/articles/16899225495695-Schedule-for-Creating-GASTPE-Billing-Statements-in-SY-2026-2027
- https://helpdesk.peac.org.ph/hc/en-us/articles/16899445455119-General-FAQs-on-the-Processing-of-GASTPE-Billing-Statements
- https://newsinfo.inquirer.net/2047327/deped-p65m-recovered-from-54-schools-after-voucher-probe
- https://newsinfo.inquirer.net/2068724/angara-schools-with-voucher-program-anomalies-will-face-sanctions
- https://deped-muntinlupa.com/wp-content/uploads/2026/05/NUM-2026-223.pdf

---

### Opportunity: Multi-client SMR workspace for Pollution Control Officers (PCOs) and environmental consultancies

**Industry:**
Environmental compliance consultancies and in-house PCOs (manufacturers, food processors, hospitals, any business holding an ECC or discharge/air permits).

**Buyer:**
A PCO-for-hire or environmental consultancy managing many client facilities.

**Trigger / Why now:**
- The quarterly Self-Monitoring Report (SMR) to DENR-EMB is a standing requirement. It has six modules:
  - general information;
  - RA 6969 hazardous waste;
  - PD 984 pollution control;
  - RA 8749 air;
  - ECC status;
  - other.
- It must be signed by a DENR-accredited PCO plus the owner, notarized, and submitted to the EMB regional office.
- Any new 2025–26 online-portal change is **unverified**, so the why-now is weak.

**Current workflow:**
1. Each quarter, collect lab results, hazardous-waste generation/transport records and fuel/air data from each client.
2. Fill the SMR modules.
3. Notarize.
4. Submit per region.
5. Repeat per client and track ECC conditions.

**Pain:**
- The report is quarterly and per facility.
- Data comes from labs, haulers and plant logs.
- Errors expose the client to unannounced EMB visits and PAB cases (a PAB resolution requires SMRs from firms with pending cases).

**Existing solutions:**
Consultancies (e.g., Triple i Consulting), Excel/Word templates, and EMB's own forms or online system (status unverified). No dedicated software vendor found.

**The gap:**
No multi-client tool (per the limited search) that collects quarterly inputs from clients and labs, pre-fills the SMR modules and tracks ECC conditions and permit expiries.

**Possible product:**
A quarterly data-request portal for each client plus an SMR module generator and a permit/ECC calendar, priced per facility.

**MVP:**
Client data-request forms, generation of SMR modules 1–6 in the official layout, a quarterly deadline tracker, and lab-result upload.

**Pricing hypothesis:**
₱500–₱1,500 per facility per month, sold to consultancies managing 20–100 facilities (estimate).

**How to find first customers:**
- EMB lists of accredited PCOs and PCO training providers (unverified as public).
- Environmental consultancy directories.
- DENR-recognized environmental laboratories as partners.

**Risks:**
- EMB may fully digitize SMR with its own forms (or already has).
- Consultancies are low-tech and price-sensitive.
- Small market (unverified).

**Kill condition:**
EMB's online SMR system already pre-fills from prior quarters and supports multi-facility PCO accounts.

**Score:** 5/10.

**Sources:**
- https://www.tripleiconsulting.com/quarterly-monitoring-report-required-denr/
- https://www.tripleiconsulting.com/?p=6538
- https://jur.ph/law/facts/requiring-self-monitoring-report-firms-pending-pab-cases
- https://www.tripleiconsulting.com/?p=105 (LLDA quarterly SMR variant, which adds regulator fragmentation)

---

## Rejected after competitor research

- **HMO LOA/claims hub for clinics.** Many HMOs each have their own portal, which made this look like US-style revenue-cycle management. Killed by **SeriousMD**, which integrates directly with Medicard and Kaiser for LOA verification and claims, and by **Maxicare's Salesforce Agentforce** automation of dental LOAs across 720+ clinics. HMOs are building their own channels.
- **YAKAP / eKonsulta replacement for primary-care clinics.** eKonsulta shut down in July 2026, a strong trigger, but **SeriousMD** (YAKAP migration content) and **mWell** (April 2026 PhilHealth claims platform for clinics) are already targeting it.
- **SSS/PhilHealth/Pag-IBIG remittance file generation for SMEs.** Killed by **Juan, MiHCM, Akrivia HCM, ERPNext PH Payroll** and other PH payroll suites.
- **E-invoicing for large taxpayers.** Killed by **ClearTax, EDICOM, Cygnet, Comarch, Basware, ecosio, Tungsten**. Only the SME/local-vendor long tail is kept (Opportunity 1).

## Too competitive

- **BIR 2307 issuance and SAWT/QAP preparation.** **NextPay** handles 2307 upload and management, the **Odoo** PH localization has native 2307 workflows, and **Juan(Tax)** and outsourced bookkeepers (e.g., Triple i) cover SAWT. Payee-side chasing of missing 2307s is real but feature-sized.
- **E-commerce seller e-invoicing.** Marketplace-seller ERPs (**BigSeller**) and ClearTax are already marketing to sellers.

## Attractive problem, poor distribution

- **EPR Act plastic recovery evidence chain.** The 2026 target is 60%, DENR issued 155 show-cause letters in August 2026, and audited diversion certificates are required. However, the buyers are obliged enterprises with assets over ₱100M and their PROs (an enterprise sale), and plastic-credit players (**Plastic Bank**; PCX, unverified) are already embedded. The aggregator/junk-shop side has low willingness to pay.
- **PhilHealth GAMOT pharmacy claims.** ₱20,000/year per member and 75 medicines, but accreditation is regional, mostly institutional pharmacies so far (e.g., 20 in South Cotabato, May 2026) with tax-document requirements (COR by 31 July 2026). Private pharmacy uptake and claims volume are too uncertain to reach 50 paying customers.
- **PNP-SOSIA security licensing (LESP/LTO).** The PNP already runs SOSIA Online LESP linked with PNP-HS. A government tool covers the core workflow, and the remaining pain is folded into Opportunity 2.

## Open leads not researched (budget exhausted)

- Customs brokers: BOC system changes in 2026.
- LPG retailers: RA 11592 DOE licensing and reporting.
- DOLE OSH (RA 11058) reports and per-project Construction Safety and Health Programs.
- Multi-LGU business permit renewals for chains (annual only).
- FDA LTO/CPR renewals.

These should be revisited if the orchestrator re-runs with search budget.

### Additional sources consulted
- https://plasticbank.com/blog/epr-obliged-enterprise-philippines/
- https://mb.com.ph/2026/08/23/marcos-admin-warns-companies-of-epr-obligations
- https://www.gmanetwork.com/news/topstories/nation/999269/denr-155-show-cause-letters-issued-to-firms-over-plastic-waste/story/
- https://www.downtoearth.org.in/waste/epr-in-asia-pacific-philippines-built-a-tough-plastic-penalty-but-its-polluters-set-the-footprint
- https://help.seriousmd.com/en/articles/10364326-track-hmo-billing
- https://www.salesforce.com/ap/news/press-releases/2025/09/10/maxicare-agentforce-dental-care/
- https://seriousmd.com/yakap/ekonsulta-shutdown
- https://news.seriousmd.com/150053-yakap-facilities-don-t-wait-until-the-december-deadline
- https://southcotabato.gov.ph/philhealth-accredits-20-gamot-pharmacies-in-south-cotabato-to-boost-free-outpatient-medicine-access/
- https://www.philhealth.gov.ph/circulars/2026/PC2026-0002.pdf
- https://www.philhealth.gov.ph/circulars/2025/PC2025-0013.pdf
- https://journalnews.com.ph/pnp-chief-pnp-sosia-make-life-easy-for-security-guards/
- https://nextpay.world/blog/save-time-on-bir-forms-with-nextpay
- https://www.odoo.com/documentation/18.0/de/applications/finance/fiscal_localizations/philippines.html
- https://www.tripleiconsulting.com/how-submit-sawt-with-philippines-bir/
