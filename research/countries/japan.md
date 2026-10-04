# Japan - opportunity research (2026-10-04)

Method note: 10 WebSearch calls (Japanese and English). WebFetch is blocked, so facts come from search snippets only. Anything marked "unverified" or "estimate" was not confirmed. Japan is accessible to a foreign solo founder (no sanctions or licensing barriers). The real barrier is language and trust: buyers expect Japanese UI, Japanese support and invoice (qualified-invoice) billing. Japan is a mature SaaS market. Money Forward, freee, Sansan and similar vendors cover most generic back-office work, so scores are modest.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Subcontracting (manufacturing, logistics, services) | 取適法 (formerly 下請法) in force 2026-01-01: 60-day payment cap, no promissory notes, record of price-negotiation, new employee-count thresholds | Candidate | Strong why-now and mandatory, but large accounting vendors are adding features |
| Foreign-worker intake (育成就労 / 特定技能) | Supervising/support-agency documents and reporting under the system starting 2027-04 | Candidate | Licence applications opened 2026-04-15, and agencies must be re-permitted; small agencies are unlikely to have tooling |
| Industrial-waste collectors | Per-prefecture/city collection-transport permits, 5-year renewal, manifest reporting | Candidate (weak) | Fragmented by municipality, but JWNET and waste-industry software cover the core |
| Fluorocarbon (フロン排出抑制法) | Equipment ledger, simple and periodic inspection logs, leak-volume reporting | Rejected | RaMS (government-authorised cloud) and Mitsubishi Electric MELflo already cover it |
| Construction (CCUS) | Worker/site registration and work-history accumulation | Rejected | Run by 建設業振興基金 with card readers; many existing CCUS-linked attendance apps (unverified names) |
| Logistics (物流効率化法, 2026-04) | Designated shipper plans, CLO, periodic reports | Rejected | Applies to large shippers (about 90,000 t/year threshold), filed via e-Gov; buyers are enterprises |
| Long-term-care providers | Care-plan data exchange, claims | Rejected | National government system (ケアプランデータ連携システム) is free; about 98k sites already use it as of 2026-07-01; entrenched care-software vendors |
| Tax/invoice/e-bookkeeping | Qualified invoices, 電帳法 | Too competitive | Money Forward, freee, Yayoi, etc. |

## Opportunities

### Opportunity: 取適法 Subcontract Compliance Ledger for Small Principals and Subcontractors

**Industry:**
Subcontracted manufacturing, trucking/logistics and service contracting.

**Buyer:**
Back-office or owner of a mid-size company (the 委託事業者, newly in scope via 300/100-employee thresholds), and the 経理 or 総務 staff at small 中小受託事業者 who need evidence.

**Trigger / Why now:**
The 取適法 took effect 2026-01-01 with no transition period. It adds a 60-day payment limit, effectively bans promissory notes, restricts refusing price negotiation, and restricts unfair pressure on logistics pricing. Violations can bring recommendations, guidance and fines of up to 500,000 yen.

**Current workflow:**
1. Principal issues purchase orders by email, FAX or in an ERP.
2. Terms (payment date, price basis) are checked by hand against the law.
3. Price-revision requests are handled by phone or email, with no structured log.
4. Payment dates are verified in spreadsheets against the 60-day rule.
5. Mandatory written terms and records are assembled for audits.

**Pain:**
Newly in-scope firms must change payment flows and records. Law-firm webinars and accounting-firm guides now exist for this (see sources), which indicates demand for help, though not specific evidence of manual-spreadsheet hours.

**Existing solutions:**
Money Forward contract-management content and tools, freee and ERP modules, contract-management SaaS (unverified names), law-firm advice and seminars.

**The gap:**
Few tools provide a per-transaction check for 60-day-limit breaches, a log of price-negotiation requests and responses, and an audit-ready evidence pack. This gap is unverified because vendors are probably adding such features.

**Possible product:**
A lightweight tracker that imports payment and PO CSVs from accounting software, flags 取適法 breaches and logs price negotiations.

**MVP:**
CSV import, 60-day and payment-method rule engine, negotiation log, PDF evidence export.

**Pricing hypothesis:**
5,000-20,000 yen/month per company (estimate).

**How to find first customers:**
Chambers of commerce, trucking associations, regional manufacturers' directories, and accounting firms that advise SMEs (all unverified as lists).

**Risks:**
The big accounting vendors can bundle this. Compliance may be satisfied by a spreadsheet. Detailed rule coverage needs legal accuracy.

**Kill condition:**
If Money Forward or freee ship a 取適法 checker, or ten interviews show a spreadsheet is enough.

**Score:** 5/10

**Sources:**
- https://biz.moneyforward.com/contract/basic/23261/
- https://sogyotecho.jp/news/20251125toriteki/
- https://www.businesslawyers.jp/seminars/486
- https://www.ht-tax.or.jp/topics/toritekiho-2026/

### Opportunity: 育成就労 / 特定技能 Support-Agency Document and Reporting Workbench

**Industry:**
Foreign-worker supervising and registered-support organisations.

**Buyer:**
Small 監理団体 (becoming 監理支援機関) and 登録支援機関 that supervise several client companies, plus their administrative staff.

**Trigger / Why now:**
The 育成就労 system starts 2027-04, replacing the technical-intern programme. Supervising agencies must re-apply as 監理支援機関 (applications opened 2026-04-15, pre-start window to 2027-03-31). External auditors become mandatory and an agency cannot supervise just one company.

**Current workflow:**
1. Collect each client company's compliance documents and worker plans.
2. Track visits, audits and support records by hand.
3. Prepare periodic reports and applications to the immigration and training authorities.
4. Store records in Excel and paper files.

**Pain:**
The permit requirements are new and stricter. Evidence of actual manual work is indirect (the rule changes). Nothing verified on complaint volumes.

**Existing solutions:**
HR/labour software such as jinjer (HCM) has published system content on 育成就労 (verified as an article only). Immigration-lawyer and gyoseishoshi services. Existing legacy intern-management systems (unverified).

**The gap:**
Unverified. Possibly a lightweight tool for small agencies that tracks audit, visit and support records and generates the required reports.

**Possible product:**
Case-record and report-generation tool for supervising/support agencies.

**MVP:**
Client-company and worker register, visit and audit log with reminders, report templates.

**Pricing hypothesis:**
20,000-60,000 yen/month per agency (estimate).

**How to find first customers:**
The authority's list of permitted or registered agencies (list contents unverified).

**Risks:**
Final forms and online filing specs may not be published; the buyer group is small and may already use legacy tools; there is policy and reputational sensitivity.

**Kill condition:**
If agencies already use an established system or the authority issues its own free tool.

**Score:** 5/10

**Sources:**
- https://office-tree.jp/blog/immigration/registered-support/ikusei-shuro-seido-gaiyo/
- https://office-tree.jp/blog/immigration/ikusei-shuro-kanri-shien-kikan/
- https://hcm-jinjer.com/blog/jinji/ikuseishuro-system/
- https://www.dlri.co.jp/files/ld/593008.pdf

### Opportunity: Multi-Prefecture Industrial-Waste Collector Permit and Renewal Manager

**Industry:**
Industrial waste collection and transport.

**Buyer:**
Owners or admins of small collection-and-transport firms operating across several prefectures and cities, and administrative scriveners (行政書士) serving them.

**Trigger / Why now:**
No new trigger beyond the ongoing 2025 amendment requiring electronic manifests to report disposal information (unverified in detail). The permit structure itself is the pain: a licence is needed in each prefecture/city where waste is loaded and unloaded, valid 5 years (7 for excellent operators), renewal applications are accepted from about 3 months before expiry (2 months in some prefectures).

**Current workflow:**
1. List the loading and unloading jurisdictions.
2. Download each local authority's forms (formats, fees and attachments differ).
3. Track expiry dates per licence in a spreadsheet.
4. Prepare renewals for each jurisdiction.

**Pain:**
Fragmented local requirements are confirmed by local-authority guides. Frequency is low (every 5 years per licence), which hurts the case.

**Existing solutions:**
Gyoseishoshi offices doing it manually, JWNET (electronic manifest), waste-industry software (unverified names).

**The gap:**
A per-jurisdiction expiry and document tracker, unverified as unserved.

**Possible product:**
Permit calendar and checklist generator by jurisdiction.

**MVP:**
Licence register, expiry alerts, per-authority checklists.

**Pricing hypothesis:**
3,000-8,000 yen/month (estimate).

**How to find first customers:**
Prefectural lists of permitted operators (published by authorities; format unverified).

**Risks:**
Low frequency, small price, scriveners may prefer to do the work themselves, and form details change.

**Kill condition:**
If interviews show owners only touch permits every few years and are happy to outsource it.

**Score:** 4/10

**Sources:**
- https://samurai-law.com/sanpai/san07/
- https://www.city.kobe.lg.jp/documents/44946/kousin_list.pdf
- https://www.jwnet.or.jp/info/kikansi/assets/files/kikansi_202601_p04_05.pdf

## Rejected after competitor research

- Fluorocarbon equipment logs and leak reporting: RaMS (government-authorised cloud logbook and reporting) and Mitsubishi Electric MELflo already cover it. SME awareness is low (under 10% understand the law, per a search snippet), but that is an awareness problem rather than a software gap.
- Construction CCUS data entry: operated by 建設業振興基金 with card readers; 1.89 million workers registered by 2026-07 (search snippet).
- Care-plan data exchange: the national ケアプランデータ連携システム is free and used by about 98k sites (2026-07-01).
- Logistics Efficiency Act reporting: applies only to large designated shippers and filings go through e-Gov.

## Attractive problem, poor distribution

- 育成就労 agencies: small buyer pool, relationship-driven and legacy tools.
- Industrial-waste permits: low frequency, scriveners as gatekeepers.

## Too competitive

- Invoice/qualified-invoice and e-bookkeeping compliance: Money Forward, freee, Yayoi and similar.
- General payroll/labour compliance: established SaaS.

## Inaccessible markets

None. Japan is open to foreign vendors, but Japanese-language product, support and local invoicing are essential.
