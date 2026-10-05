# Kuwait: Indie Software Opportunity Research

*Research date: 2026-10-05. Mid-size market (about 4.9M population, of which about 70% are expatriates; high-income GCC economy). I used 16 web searches (1 refused). WebFetch was not used. Figures marked "estimate" or "unverified" could not be confirmed against a primary source.*

## Accessibility check

- **Sanctions:** Kuwait is not subject to US, EU or UK sanctions. A foreign solo founder can legally sell B2B SaaS to private Kuwaiti businesses.
- **FATF grey list:** Kuwait was **added to the FATF grey list on 13 Feb 2026**. This makes cross-border banking harder. It is also the main "why now" for the AML opportunities below.
- **Practical frictions:**
  - The product needs Arabic UI and documents.
  - Local payments run through KNET or local bank transfer. A foreign card checkout is possible but less common (unverified).
  - Government portals (Ashal/PAM, MOCI, KwFIU goAML) have no public APIs that I could verify.
  - Selling to government needs a local entity. Selling to private SMEs does not appear to (unverified).
- **Verdict:** Accessible, with moderate friction. The market is small, so most ideas are better treated as a **GCC add-on** to a UAE or Saudi product than as a standalone Kuwait business.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Gold, jewellery and precious-metal dealers | AML/CFT CDD, cash-ban evidence, STR filing under MOCI Decision 172/2026 | **Opportunity (moderate)** | New 2026 rules plus the grey list; 544 jeweller violations last year; weak Kuwait-specific tooling. The buyer pool is small (hundreds). |
| Real-estate brokers | AML CDD, UBO checks, 5-year records, STR under Decision 173/2026 | **Opportunity (moderate)** | About 920 licensed offices and 1,803 brokers; same trigger. Low tech maturity and low willingness to pay. |
| Private-sector employers and PRO ("mandoub") offices | Ashal working-hours/holiday schedules (Res. 15/2025), per-employee WPS salary vs permit-salary matching | **Opportunity (weak to moderate)** | Mandatory since 1 Nov 2025 and penalties suspend company files. Payroll vendors cover the WPS file, but not the cross-check between Ashal schedules, salary transfers and permit salary. |
| Payroll bureaus / HR | WPS bank files, PIFSS contributions, indemnity | Too competitive | Keka, ZenHR, Menaitech, Mercans, Akrivia and Odoo localisations already cover it. |
| Corporate services, law and accounting firms | UBO register filing (MOCI Res. 37/2026: 15-day window, KD 1k–10k fines) | Rejected | Event-driven and low-frequency. Done inside the MOCI portal; law firms and CSPs absorb it. |
| All companies (corporate tax) | Proposed 15% business profits tax | Rejected / premature | I could not confirm the law is enacted for domestic SMEs. Businesses with turnover under KD 1.5M would be exempt, and the Big 4 serve those in scope. |
| Private pharmacies | Psychotropic/controlled-drug e-prescription registry (Decree-Law 159/2025) | Poor distribution / closed | Central MoH system; no third-party integration route found. Pharmacy POS vendors would own any link. |
| Contractors | Kuwait Municipality "Contractors System" e-service (updated Dec 2025) | Not pursued | Not enough evidence of a recurring workflow with duplicate entry. Out of search budget. |

Food processing, customs brokerage, fire safety and private schools were **not screened** because of the search budget.

---

### Opportunity: Kuwait AML "inspection-ready file" for gold and jewellery retailers

**Industry:**
Dealers in gold, precious metals and precious stones (retail jewellers, wholesalers, bullion traders).

**Buyer:**
The owner or compliance officer of an independent or small-chain jewellery shop. Examples are family firms in Souq Al-Mubarakiya and Salhiya, and mid-size chains. The large chains (Malabar etc.) use group compliance and are not the target.

**Trigger / Why now:**
- FATF grey-listed Kuwait in Feb 2026. It cited weak supervision of DNFBPs, weak beneficial-ownership controls and weak STR effectiveness.
- MOCI **Decision 172 of 2026** requires:
  - risk-based internal controls;
  - customer and beneficial-owner due diligence;
  - transaction monitoring;
  - STRs to KwFIU;
  - record retention and staff training;
  - enhanced KYC for PEPs, customers from high-risk jurisdictions and sales over **KWD 3,000**.
- A **cash ban** on gold and precious-metal purchases took effect: all payments must use CBK-approved non-cash channels.
- MOCI also has a 2025 gold-sector AML guideline and a violation matrix (Ministerial Resolution 25/2025).

**Current workflow:**
1. The salesperson takes the customer's Civil ID or passport, often as a photocopy or a phone photo.
2. The shop records the payment method (KNET or transfer receipt) in the POS or a paper ledger.
3. For a sale over KWD 3k, or a PEP or foreign customer, the shop checks sanctions or PEP status manually, if it checks at all.
4. The shop keeps a paper or Excel file per customer for 5 years and writes a risk assessment and policy, often bought from a consultant as a template.
5. If a transaction is suspicious, the compliance officer files an STR on KwFIU goAML by hand.
6. When MOCI inspects, the shop assembles evidence from WhatsApp, the POS and paper.

**Pain:**
- MOCI recorded **930 AML violations last year, 544 of them by jewellery companies**. Most were warnings, plus some fines and compliance orders.
- Violators now face closure and legal action.
- The grey listing raises inspection intensity.

**Existing solutions:**
- **UAE-centric DNFBP tools:** Cygnus Scan (SaaS screening for DNFBPs); AML UAE / Technovisors (consultancy plus software); Focal (getfocal.ai, publishes Kuwait screening content).
- **Global KYC/screening:** Shufti Pro, Sumsub, LexisNexis, Arctic Intelligence (has Kuwait compliance content).
- **Local:** AML consultants and law firms selling policy templates.
- **Jewellery POS/ERP:** local vendors exist, but I could not verify any AML module (unverified).

**The gap:**
Existing tools are built around UAE goAML/MoE workflows or generic KYC APIs. I found none that packages the **Kuwait-specific Decision 172 checklist**:
- the KWD 3k EDD threshold;
- the cash-ban payment evidence;
- MOCI violation-matrix items;
- Arabic records;
- KwFIU STR drafting;

…into one inspection-ready file per transaction for a shop with no compliance staff.

**Possible product:**
A tablet- or phone-based "AML counter" for jewellers. It:
- scans the Civil ID;
- auto-flags EDD triggers (amount, nationality, PEP/sanctions hit);
- attaches the KNET/transfer proof;
- builds the 5-year record;
- produces a one-click MOCI inspection pack and a pre-filled STR draft for goAML.

**MVP:**
- Arabic/English web app: Civil ID photo plus manual fields, payment-proof upload, and screening against the UN and Kuwait local terrorist lists.
- Rules for Decision 172 thresholds.
- A PDF inspection pack.
- No POS integration in v1.

**Pricing hypothesis:**
KWD 25–60 per month per shop (about USD 80–200), plus a setup fee of about KWD 150 for policy and risk-assessment templates. Consultants likely charge more for a one-off policy (estimate).

**How to find first customers:**
- The MOCI commercial licence registry and the Kuwait Chamber of Commerce directory for the gold/jewellery activity.
- Walk-ins in Mubarakiya and the gold souqs.
- Gold-trader associations (none verified).
- Partnerships with local AML consultants and auditors.

**Risks:**
- The buyer pool is small: probably about 500–1,000 outlets (estimate; D&B lists 786 "jewelry, luggage and leather" retailers).
- UAE vendors can localise quickly.
- Small shops have low willingness to pay and may treat this as a paperwork cost.
- Screening data licences cost money.
- MOCI may issue its own forms or portal.

**Kill condition:**
- MOCI launches a free official DNFBP compliance portal or form set that covers CDD records; or
- 10 interviews show shops are satisfied with a one-off consultant policy pack; or
- Cygnus Scan, Focal or similar already sell a Kuwait Decision 172 package at a similar price.

**Score:** 6/10

**Sources:**
- https://gulfnews.com/world/gulf/kuwait/kuwait-tightens-anti-money-laundering-rules-for-gold-real-estate-sectors-1.500661453
- https://kuwaittimes.com/article/49051/kuwait/other-news/new-rules-for-gold-real-estate-sectors/
- https://enterpriseam.com/menaplus/2026/09/04/kuwait-bans-cash-payments-for-real-estate-gold-and-precious-stones-transactions/
- https://www.semafor.com/article/05/11/2026/kuwait-targets-gold-and-property-fraud
- https://www.agbi.com/law/2025/11/kuwait-bans-cash-deals-in-precious-metals-trade/
- https://www.amlintelligence.com/2026/02/latest-fatf-adds-kuwait-and-papua-new-guinea-to-aml-grey-list/
- https://amlwatcher.com/news/kuwait-added-to-fatf-grey-list-in-february-2026/
- https://www.g2.com/products/cygnus-scan/discuss
- https://www.getfocal.ai/blog/customer-screening-in-kuwait
- https://arctic-intelligence.com/countries/compliance-kuwait
- https://www.dnb.com/business-directory/company-information.jewelry_luggage_and_leather_goods_retailers.kw.html?page=12

---

### Opportunity: AML/CDD and record-keeping for real-estate brokerage offices

**Industry:**
Real-estate brokerage and intermediaries.

**Buyer:**
The owner or manager of a licensed brokerage office (simsar), usually a 1–10 person office.

**Trigger / Why now:**
- MOCI **Decision 173 of 2026**: verify customers and beneficial owners, understand corporate ownership structures, keep records for **at least 5 years**, and file STRs to KwFIU.
- The cash ban covers real-estate purchases.
- The FATF grey list (Feb 2026) puts pressure on MOCI to show it supervises DNFBPs.
- MOCI is also fining offices for unlicensed property advertising.

**Current workflow:**
1. The broker collects Civil IDs and company documents for buyer and seller over WhatsApp.
2. For a corporate buyer, the broker requests the commercial register extract and asks informally who the owners are.
3. The deal is recorded in the paper brokerage book (daftar al-samsara) or Excel.
4. Payment proof (cheque or transfer) is filed.
5. STRs are almost never filed. Evidence is assembled only when MOCI inspects.

**Pain:**
- Real-estate brokers made up the remainder of last year's 930 violations, after the 544 by jewellers.
- Brokers are numerous and informal. The Kuwaiti press reports a market "chaos" of unlicensed intruders.

**Existing solutions:**
- The same UAE/global KYC and screening tools as for jewellers (Cygnus Scan, Shufti, Sumsub, Focal).
- Generic real-estate CRMs.
- Consultants' policy templates.
- The MOCI e-service for broker licensing (licence admin only).

**The gap:**
No light tool I could find maps one property deal to a Decision 173 CDD file: parties, UBO of corporate parties, payment channel, risk score, and a 5-year archive in Arabic.

**Possible product:**
"Deal file" software for brokers. Each brokered transaction gets a checklist-driven CDD record with UBO capture, a payment-channel proof, a risk flag and an exportable inspection pack. It could be bundled with the jeweller product as a "Kuwait DNFBP suite".

**MVP:**
A web form per deal with uploads, a UBO questionnaire, list screening, and a PDF/Excel export of all deals in MOCI-inspection format.

**Pricing hypothesis:**
KWD 15–35 per office per month. Willingness to pay is likely lower than for jewellers.

**How to find first customers:**
- The MOCI licensed-broker registry; the Kuwait Government Online broker e-service implies a public licence list (unverified).
- The Kuwait Real Estate Union.
- Classified-ad platforms where brokers advertise.

**Risks:**
- Brokers are highly informal and price-sensitive.
- Deal frequency per office may be low, so value per month is unclear.
- MOCI could add CDD fields to its own broker system.

**Kill condition:**
Interviews show offices handle fewer than about 5 sale transactions a month and MOCI inspections focus on licensing and ads rather than CDD records.

**Score:** 5/10

**Sources:**
- https://gulfnews.com/world/gulf/kuwait/kuwait-tightens-anti-money-laundering-rules-for-gold-real-estate-sectors-1.500661453
- https://www.alraimedia.com/article/1734465/اقتصاد/سماسرة-العقار-زادوا-138-والمقيمون-ارتفعوا-17-
- https://www.alraimedia.com/article/1625079/اقتصاد/الدغيشم-الوساطة-العقارية-بالكويت-تحتاج-تحديثا-على-غرار-السعودية-والإمارات
- https://www.aljarida.com/article/74133
- https://e.gov.kw/sites/kgoArabic/Pages/eServices/MOCI/RealEstateBrokerSystem.aspx
- https://enterpriseam.com/menaplus/2026/09/04/kuwait-bans-cash-payments-for-real-estate-gold-and-precious-stones-transactions/

---

### Opportunity: Ashal/WPS "file-suspension guard" for SMEs and PRO (mandoub) offices

**Industry:**
Private-sector employers with expatriate staff (contracting, cleaning, restaurants, retail). Also the PRO/mandoub service offices that manage PAM files for many companies.

**Buyer:**
The owner or HR/PRO of an SME with 5–200 workers, or a PRO office managing 20–200 company files.

**Trigger / Why now:**
- **PAM Ministerial Resolution 15 of 2025:** from **1 Nov 2025**, employers must submit and keep updated daily working hours, rest periods, weekly days off and official holidays in **Ashal**. The approved schedule must be printed and displayed for inspectors.
- **Wage protection:** from 1 Nov 2025, salary approvals and transactions run through the Ashal salary portal.
  - Pay is due by the 5th of the month.
  - A delay of more than 7 days is an offence.
  - The transfer must match the **work-permit salary**.
  - Violations are flagged **per employee**.
- Penalties include partial or full **suspension of the company file**, which blocks visas and transfers.

**Current workflow:**
1. Payroll is run in Excel or a payroll tool, which generates the bank WPS file.
2. Separately, the PRO logs into Ashal to enter or update work schedules and holidays for each establishment.
3. Someone manually checks that each worker's transferred salary equals the permit salary. Allowances, deductions, absences and new joiners cause mismatches.
4. When PAM flags a worker, the PRO investigates bank statements and permit data to fix it.

**Pain:**
- File suspension is existential for labour-dependent SMEs.
- Per-employee flags create constant exceptions.
- PAM has issued repeated public warnings about salary delays and tightened monitoring.

**Existing solutions:**
- Payroll/HR suites with Kuwait localisation: Keka (WPS files, PIFSS, Ashal-supporting reports), ZenHR, Menaitech, Akrivia HCM, Mercans (managed payroll), Odoo Kuwait payroll modules.
- Banks' WPS upload channels.
- Manual work by PRO offices.

**The gap:**
- Payroll tools produce the bank file.
- I found no evidence that they reconcile **Ashal-registered schedules and permit salaries against actual transfers** before PAM flags a worker.
- I also found nothing that serves **multi-company PRO offices** with a single exception dashboard.
- Without a public Ashal API, this would rely on CSV/PDF exports or browser automation (unverified feasibility).

**Possible product:**
A pre-submission checker. The user uploads the permit-salary list (Ashal export), the payroll output and the bank WPS file. The tool shows per-worker mismatches, upcoming deadline risk and missing schedule updates, across many company files.

**MVP:**
- CSV/Excel reconciliation of three files with Kuwait rules (5th-of-month deadline, 7-day threshold, permit-salary match).
- A multi-company dashboard for PRO offices.
- Arabic UI.

**Pricing hypothesis:**
KWD 10–20 per company file per month, or KWD 100–300 per month for a PRO office.

**How to find first customers:**
- PRO/mandoub office listings and Facebook/Instagram ads in Arabic.
- The Kuwait Chamber of Commerce directory.
- Contracting and cleaning company registries.
- Partnerships with accounting offices.

**Risks:**
- Keka, ZenHR and others can add the reconciliation quickly.
- Ashal data access may be limited to screenshots.
- PAM may itself show mismatch warnings inside Ashal, which would remove the value.

**Kill condition:**
Ashal already shows pre-transfer mismatch warnings per worker, or the payroll vendors already ship Ashal reconciliation.

**Score:** 5/10

**Sources:**
- https://taxnews.ey.com/news/2025-2234-kuwait-announces-new-requirement-for-employers-to-submit-work-and-holiday-schedule-electronically
- https://www.hfw.com/insights/kuwaits-manpower-authority-tightens-regulation-on-recording-working-hours-for-the-private-sector/
- https://me.peoplemattersglobal.com/news/hr-technology/kuwait-to-suspend-all-employers-failing-to-submit-actual-daily-work-hours-via-ashal-46935
- https://www.greythr.com/middle-east/blog/kuwait-wps-ashal-portal-compliance-2025/
- https://www.zawya.com/en/world/middle-east/kuwait-warns-private-firms-over-salary-delays-tightens-wage-monitoring-y0qc4w3s
- https://gulfnews.com/world/gulf/kuwait/kuwait-launches-centralised-wage-payment-system-to-protect-private-sector-workers-1.500690494
- https://www.keka.com/kw/payroll-software
- https://www.zenhr.com/hr-payroll-software/kuwait
- https://menaitech.com/en-kw/faqs-kuwait/
- https://dsr.mercans.com/payroll-dossiers/kuwait/

---

## Rejected after competitor research

- **Kuwait payroll / WPS bank-file / PIFSS calculation tool.** Killed by Keka, ZenHR, Menaitech, Akrivia HCM, Mercans and Odoo Kuwait payroll modules, which all advertise WPS files, PIFSS and indemnity.
- **UBO register compliance (MOCI Res. 37/2026, 15-day window, KD 1k–10k fines, licence renewal blocked).** The trigger is strong, but filing is event-driven and done in the MOCI portal. Law firms (e.g. Al Tamimi), Deloitte and CSPs absorb it as a service. Frequency is too low for SaaS.
  - https://www.tamimi.com/news/ubo-registration-required-within-10-days/
  - https://www.deloitte.com/middle-east/en/services/tax/perspectives/kuwait-updates-to-ultimate-beneficial-owner-regulations.html
- **Corporate tax compliance for SMEs.** The 15% business profits tax exempts turnover under KD 1.5M. I could not confirm its enactment status for domestic companies in 2026. In-scope companies are served by Big 4 and law firms.
  - https://gulfnews.com/business/corporate-tax/kuwait-proposes-15-corporate-tax-in-sweeping-fiscal-reforms-starting-2025-1.1733650969602
  - https://www.tamimi.com/our-knowledge/publications/through-the-looking-glass/kuwait-2026-the-strategic-shifts-investors-need-to-watch-now/

## Attractive problem, poor distribution

- **Private-pharmacy psychotropic/controlled-drug e-prescription linkage** (MoH central electronic system; Decree-Law 159/2025 effective 14 Dec 2025). The workflow is mandatory and per-dispense, but the system is a closed government platform with no third-party integration route found. MoH also froze new private pharmacy licences while the registry was set up. Pharmacy POS vendors would own any integration.
  - https://arabianbusiness.com/industries/healthcare/kuwait-halts-private-pharmacy-licences-as-it-sets-up-psychotropic-medication-registry
  - https://www.legal500.com/developments/thought-leadership/kuwaits-new-narcotics-law-a-modern-regulatory-framework-for-public-health-compliance-and-controlled-substances/

## Too competitive

- Payroll/HR with WPS + PIFSS (see above).
- Generic KYC/sanctions screening APIs: Shufti Pro, Sumsub, LexisNexis, Focal. Only the Kuwait DNFBP workflow wrapper on top is open.

## Overall assessment

Kuwait's strongest 2026 "why now" is the **FATF grey listing plus MOCI Decisions 172/173 and the cash ban**. Together they force about 1,500–2,500 gold and real-estate DNFBPs (estimate) into recurring CDD and record-keeping. The market is too small for a big standalone business. It is a good **Kuwait localisation pack for a GCC DNFBP compliance product** (UAE first, then Kuwait and Saudi Arabia). The Ashal/WPS exception checker is real but exposed to fast-follow by payroll vendors.
