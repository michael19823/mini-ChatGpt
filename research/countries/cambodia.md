# Cambodia: Opportunity Research

Researched 2026-10-05. I used 13 web searches (WebSearch only, no WebFetch). The sources are mostly regulator-derived guidance from KPMG, DFDL, Tilleke & Gibbins, Andersen and Kreston, plus vendor pages. Facts I could not confirm directly are marked "unverified" or "estimate".

**Accessibility:** a foreign solo founder can sell SaaS here. Cambodia is not sanctioned, internet access is not restricted in practice, and USD is widely used, so payments can go by card, Bakong/KHQR (through a local partner) or bank transfer. In practice you need a Khmer-language UI, and buyers expect a local partner (an accounting firm) for trust and support.

**Market-wide context:** in 2025 the Ministry of Labour and Vocational Training (MLVT) issued a cluster of labour Prakas (110/25, 111/25, 112/25, 103/25). Together they moved payroll, overtime, enterprise and labour-contractor reporting onto the online LaCMS system. That is the clearest "why now" in the country. Mandatory B2B e-invoicing on the GDT's CamInvoice platform is still ahead, likely 2026–27 for large taxpayers first. Kreston says the GDT's focus in 2026 is on building enforcement infrastructure (e-filing, e-invoicing, transfer-pricing documentation), with audit intensity expected to rise around 2027.

---

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Garment / footwear / travel-goods factories (~1,000+ exporters, estimate) | Monthly LaCMS payroll upload, overtime declarations, NSSF declarations | **Pursue** | New 2025 Prakas create monthly mandatory multi-portal work. Factories have large headcounts and run on Excel |
| Accounting / bookkeeping firms | Monthly GDT e-filing (VAT, WHT, salary tax, nil returns) for many clients | **Pursue (secondary)** | Monthly and mandatory, with penalties for missed nil returns. Partly served by Odoo localisation and local tools |
| Construction / security / cleaning (labour-contractor users) | Prakas 103/25 reporting on labour contractors and their workers | **Pursue as module** | New obligation that makes the principal liable for the contractor's compliance. Evidence of the workflow detail is thin |
| B2G suppliers / large taxpayers | CamInvoice e-invoicing readiness | Watch | The B2B mandate is not yet in force. EDICOM, RTC Suite and Odoo partners are already positioned |
| Rubber / cashew exporters | EUDR geolocation and traceability | Reject | Mostly exported to Vietnam/China, so EU traceability breaks there. Koltiva and TraceX already target it. EUDR timing keeps slipping |
| Garment HREDD / Digital Product Passport | Supplier due-diligence data for EU brands | Too competitive / poor distribution | Driven by brand platforms and GIZ's FABRIC programme. Buyers are brands, not factories |
| Import / export, customs brokers | Licences and certificates of origin via the Cambodia National Single Window (CNSW) | Reject | Government single window (16 agencies) launched in May 2024. No evidence of a re-entry gap a small vendor could fill |
| Hotels / guesthouses / landlords | Registering foreign guests in the police FPCS system within 24 h | Poor distribution / low WTP | Free government app. Small fines (KHR 30,000 per foreigner). Fragmented micro-buyers |
| Pharmacies | MoH licensing and medicine reporting | Insufficient evidence | No recurring digital reporting mandate found in my searches |

---

## Opportunities

### Opportunity: LaCMS + NSSF + GDT payroll compliance pack ("one payroll run → three submissions")

**Industry:**
Labour-intensive employers: garment, footwear and travel-goods factories; also construction, hospitality and security firms. Sold through the payroll bureaus and accounting firms that serve them.

**Buyer:**
HR/payroll manager or chief accountant at factories with 200–5,000 workers, and payroll bureaus or outsourced accounting firms that run payroll for SMEs.

**Trigger / Why now:**
MLVT Prakas 111/25 (2025) requires every enterprise to declare its monthly payroll in the ministry's template on LaCMS by the 20th of the following month. The enterprise then downloads the computerised payroll book and payroll ledger, prints them, signs and stamps them, and re-uploads them to generate a QR code. Online payroll records must be kept for 3 years. Alongside this:
- NSSF requires a monthly contribution declaration, headcount report and payroll list. These are paid via partner banks by the 15th and submitted to NSSF or contribution@nssf.gov.kh by the 20th.
- GDT salary tax is e-filed by the 25th.
- Prakas 112/25 adds procedural reporting for overtime, holiday work and suspended weekly rest days.

**Current workflow:**
1. Payroll is calculated in Excel, a local HR/attendance tool or an ERP.
2. HR re-keys or reformats the data into the MLVT LaCMS template (basic wage, normal working days, OT pay, weekly holiday pay, other components) and uploads it.
3. HR downloads the generated payroll book and ledger, prints, signs and stamps them, scans them and re-uploads to get the QR code.
4. HR prepares the NSSF declaration, headcount report and payroll list in a separate format, pays at the bank and emails or submits the forms.
5. HR prepares the salary-tax figures for the GDT e-filing return.
6. Overtime and holiday-work notifications are prepared separately under Prakas 112/25.
7. Each month, the three systems are reconciled against each other (headcount, wage base) by hand.

**Pain:**
Three different authorities, formats and deadlines (15th, 20th, 25th) fall every month, and a print-sign-stamp-rescan loop is built in. For factories with thousands of workers, the template mapping and exception handling take hours to days a month (estimate):
- new hires and leavers mid-month
- workers whose wage is below or above the NSSF ceiling
- labour-contractor workers
- corrections after upload

Law firms (Andersen, Tilleke, KPMG, DFDL) published reminders and explainers on these Prakas, which suggests widespread compliance confusion. Missing or late declarations carry labour-law and NSSF penalties (exact amounts unverified).

**Existing solutions:**
- CheckinMe (local attendance and payroll; markets automatic NSSF and payroll-tax calculation)
- MiHCM (regional HCM with a Cambodia payroll module for ToS/NSSF)
- Ontop (EOR/payroll for foreign companies)
- Odoo with Cambodian localisation partners
- Big-4 and local firms' payroll outsourcing
- The free MLVT template in Excel

**The gap:**
Vendors market calculation (NSSF, ToS). I found no evidence that any of them automate the LaCMS submission format, the sign-stamp-rescan-QR loop, or monthly cross-reconciliation of LaCMS vs NSSF vs GDT figures (unverified; needs demos). Most factories also run a separate attendance or ERP system they will not replace. The gap is a thin layer on top of whatever payroll tool already exists, not another payroll engine.

**Possible product:**
A compliance layer that ingests whatever payroll export the customer already has (Excel or CSV from any system). It then:
- maps the export to the LaCMS template, the NSSF declaration and payroll list, and the GDT salary-tax figures
- flags mismatches and exceptions
- tracks each month's filing status per entity, including whether the QR-coded payroll book has been obtained

**MVP:**
Upload an Excel payroll file. Get back a validated LaCMS-format file, NSSF forms and a salary-tax summary, plus a reconciliation report (headcount and wage base across all three) and a deadline checklist. Khmer and English. No portal automation in v1.

**Pricing hypothesis:**
$1–2 per employee per month for direct employers, with a $49 minimum. Or $150–400 a month for a payroll bureau or accounting firm handling 20–100 client entities. A 2,000-worker factory at $0.10–0.20 per worker per month is $200–400 a month (needs validation; factories are price-sensitive).

**How to find first customers:**
- GMAC (now TAFTAC) member directory of garment, footwear and travel-goods factories
- Better Factories Cambodia participant list
- Accounting firms registered with ACAR (Accounting and Auditing Regulator) and tax agents licensed by the GDT
- Payroll and HR managers on LinkedIn and in Khmer Facebook HR groups
- Partnering with one mid-size accounting firm as reseller

**Risks:**
- MLVT may ship its own import tool or API.
- LaCMS formats may change without notice.
- CheckinMe or MiHCM can add a LaCMS export quickly.
- Factories are under margin pressure, with LDC graduation in 2027 and US tariffs.
- A Khmer-language support burden.

**Kill condition:**
Five customer interviews show that existing payroll tools (CheckinMe, MiHCM, Odoo) already export LaCMS and NSSF-ready files, or that LaCMS accepts the employer's own Excel format directly with no remapping.

**Score:** 6.5/10

**Sources:**
- KPMG Cambodia, MLVT new payroll and enterprise book regulations (Jul 2025): https://kpmg.com/kh/en/insights/2025/07/cambodia-labor-compliance-updates-kpmg-july2025.html
- Tilleke & Gibbins, Cambodia Issues New Requirements for Enterprise Payroll Books: https://www.tilleke.com/insights/cambodia-issues-new-requirements-for-enterprise-payroll-books/
- Andersen Cambodia, Reminder on MLVT's requirements on computerized payroll systems: https://kh.andersen.com/publications/reminder-on-the-mlvts-requirements-on-computerized-payroll-systems/
- DFDL, New developments in labour registration, labour contractor management and overtime: https://www.dfdl.com/insights/legal-and-tax-updates/new-developments-in-labour-registration-labour-contractor-management-and-overtime-regulations/
- Baker Tilly Cambodia TU006-2025 (Prakas 110 etc.): https://www.bakertilly.com.kh/wp-content/uploads/2025/07/TU006-2025-EN.pdf
- KPMG Annual compliance reminders (NSSF deadlines): https://assets.kpmg.com/content/dam/kpmg/kh/pdf/technical-update/2025/english/Annual%20Tax,%20Accounting,%20Labor,%20and%20Regulatory%20Compliance%20Reminders%20(Final).pdf
- Competitors: https://checkinme.app/payrolls ; https://mihcm.com/en-kh/solutions/payroll/ ; https://www.getontop.com/payroll-in/cambodia

---

### Opportunity: Overtime and labour-contractor declaration tracker (Prakas 112/25 and 103/25)

**Industry:**
Garment and footwear factories, construction, and security and cleaning services that use subcontracted labour.

**Buyer:**
HR/compliance manager at a factory. Site administrator at a construction main contractor.

**Trigger / Why now:**
- Prakas 112/25 (2025) formalises procedures for reporting overtime outside normal hours, work on paid holidays and suspension of weekly rest days.
- Prakas 103/25 (28 Apr 2025) requires principal enterprises to oversee and report on the labour contractors they use and their workforce. The principal can be held liable if the contractor fails its obligations.
- A foreign-worker registration and update window ran from 1 Nov 2025 to 31 Mar 2026 (FWCMS/LaCMS).

**Current workflow:**
1. Production planning decides on overtime or holiday work.
2. HR prepares a notification or request in the prescribed form and submits it before the work (exact channel and lead time unverified; LaCMS likely).
3. Separately, HR collects lists from each labour contractor (names, IDs, NSSF status, wages) by email or WhatsApp in Excel and reports them.
4. HR chases contractors for missing NSSF and wage evidence before audits by MLVT, Better Factories Cambodia or buyers.

**Pain:**
Principal liability for contractor failures, plus brand audits (Better Factories Cambodia, buyer codes of conduct), make missing contractor evidence costly. Overtime is frequent in garment factories, so filings recur weekly or monthly.

**Existing solutions:**
- Excel and email
- Generic HRIS (MiHCM, CheckinMe) for the company's own employees, not contractors
- Brand audit platforms (Sedex, amfori) for social audits
- Law-firm advisory

**The gap:**
No tool I found collects contractor workforce evidence from multiple subcontractors and turns it into the principal's LaCMS report plus an audit-ready evidence pack (unverified).

**Possible product:**
A contractor portal where each subcontractor uploads its monthly worker list and NSSF and wage proof. The principal gets a validated LaCMS report and an audit binder, plus an overtime-notification log tied to payroll.

**MVP:**
A multi-party Excel template collector with validation (IDs, NSSF numbers, wage ≥ minimum wage) and a monthly evidence PDF. Sell as an add-on to the payroll compliance pack above.

**Pricing hypothesis:**
$50–150 per site or factory per month.

**How to find first customers:**
The same as above (TAFTAC/GMAC members, BFC factories). For construction, add the Cambodia Constructors Association and Ministry of Land Management construction-permit holders (directory availability unverified).

**Risks:**
The exact procedural details of 112/25 and 103/25 reporting are unclear from secondary sources. Enforcement intensity is unknown. Contractors are reluctant to share data.

**Kill condition:**
MLVT reporting under 103/25 turns out to be a one-off registration rather than recurring, or enforcement is negligible.

**Score:** 5/10

**Sources:**
- DFDL, labour contractor management and overtime: https://www.dfdl.com/insights/legal-and-tax-updates/new-developments-in-labour-registration-labour-contractor-management-and-overtime-regulations/
- KPMG Jul 2025: https://kpmg.com/kh/en/insights/2025/07/cambodia-labor-compliance-updates-kpmg-july2025.html
- iLaw Asia, Labour compliance in Cambodia: https://ilawasia.com/blogs/labour-compliance-cambodia-part-1
- ING Law, FWCMS notification: https://www.inglegal.com/law-provision/notification-on-the-foreign-workers-centralized-management-system-fwcms

---

### Opportunity: Multi-client monthly GDT filing workbench for bookkeeping firms

**Industry:**
Accounting, bookkeeping and tax-agent firms.

**Buyer:**
Owner or manager of a small or mid-size accounting firm or licensed tax agent in Phnom Penh or Siem Reap with 20–300 SME clients.

**Trigger / Why now:**
- Monthly declarations of VAT, WHT and salary tax are mandatory via GDT e-filing by the 25th.
- Nil returns are mandatory even with zero revenue, and a skipped filing is flagged as non-compliance.
- Kreston (Q3 2026) says the GDT is consolidating e-filing, e-invoicing and transfer-pricing documentation infrastructure ahead of a likely jump in audit intensity around 2027.
- Fuel VAT changed in 2026.
- CamInvoice B2B is expected for large taxpayers in 2026–27.

**Current workflow:**
1. Collect each client's sales and purchase invoices and payroll (photos, Excel, WhatsApp).
2. Build VAT purchase and sales journals and WHT schedules in Excel.
3. Log into GDT e-filing per client and key in or upload the data.
4. Pay through the bank, save the receipts, and chase missing documents.
5. Track deadlines and nil returns per client in a spreadsheet.

**Pain:**
Monthly filings for every client, with penalties for late or missing returns. The work peaks around the 20th–25th. Pain is plausible and frequent, but I found no direct practitioner complaint (unverified).

**Existing solutions:**
- Odoo Cambodia VAT return module (l10n_kh_vat_return)
- Local accounting software such as BanhJi (I could not verify its features)
- QuickBooks/Xero plus Excel
- Big-4 and local firms using in-house templates
- E-invoicing vendors EDICOM and RTC Suite for CamInvoice

**The gap:**
Firms need a practice-management layer: a cross-client deadline and status board, document chasing, and turning messy client spreadsheets into GDT annex formats. Single-company ERPs do not cover this.

**Possible product:**
A Khmer and English practice dashboard for tax agents. It shows every client's monthly obligations, collects documents from clients through a link, validates purchase and sales lists (VAT TIN checks, plus CamInvoice cross-checks once mandatory), and outputs GDT-ready schedules.

**MVP:**
A deadline and status tracker plus an Excel-to-GDT-annex converter for VAT purchase and sales journals.

**Pricing hypothesis:**
$5–10 per client entity per month; a 50-client firm pays $250–500 a month.

**How to find first customers:**
The GDT's list of licensed tax agents, the ACAR registry of accounting firms, and the KICPAA (Kampuchea Institute of Certified Public Accountants and Auditors) member list.

**Risks:**
- GDT may add bulk import or API features.
- Odoo partners may bundle this.
- Small market (estimate: a few hundred firms).
- Price sensitivity.

**Kill condition:**
Interviews show that firms already batch-file through existing accounting software, or that GDT e-filing has no import format so the converter saves no time.

**Score:** 4.5/10

**Sources:**
- Kreston Cambodia Tax Briefing Q3 2026: https://www.krestoncambodia.com/2026/09/17/cambodia-tax-briefing-q3-2026/
- Emerhub, annual and monthly compliance in Cambodia: https://emerhub.com/cambodia/annual-compliance-in-cambodia/
- Odoo Cambodia VAT return module: https://apps.odoo.com/apps/modules/19.0/l10n_kh_vat_return
- KPMG, CamInvoice mandatory expansion: https://kpmg.com/us/en/taxnewsflash/news/2025/11/cambodia-mandatory-e-invoicing-expanded-six-ministries.html
- VATCalc, Cambodia e-invoicing: https://www.vatcalc.com/cambodia/cambodia-e-invoicing-soft-launch/

---

## Rejected after competitor research

- **CamInvoice e-invoicing connector for SMEs:** the B2B mandate is not yet in force; it is voluntary in 2026, with large taxpayers expected first. EDICOM, RTC Suite and Odoo localisation partners are already positioned for the large-taxpayer wave. Revisit once a Prakas sets a B2B date and threshold. (https://edicomgroup.com/electronic-invoicing/cambodia, https://rtcsuite.com/cambodias-new-era-of-e-invoicing-inside-the-caminvoice-mandate/)
- **Rubber EUDR traceability:** about 64% of Cambodian rubber goes to Vietnam, where traceability is lost. Koltiva and TraceX already sell EUDR rubber traceability. Smallholders cannot pay. (https://b2b-cambodia.com/news/cambodias-rubber-exports-to-face-new-eudr-legislation, https://www.koltiva.com/post/eudr-and-southeast-asia-s-rubber-industry-solution-empowering-smallholders-for-a-sustainable-future, https://vietnamnews.vn/economy/1694795/eu-deforestation-rules-pose-challenges-for-rubber-production-in-viet-nam-cambodia.html)
- **CNSW import/export licence preparation:** a government single window links 16 agencies, and certificate-of-origin Form D is exchanged through the ASEAN Single Window. I found no evidence of a re-entry gap that a small vendor could own. (https://kpmg.com/kh/en/home/insights/2024/09/technical-update0.html)

## Attractive problem, poor distribution

- **Garment supplier due diligence / Digital Product Passport data for EU brands:** the pain is real as EU rules tighten and LDC graduation approaches in 2027. But brand-side platforms set the format, and GIZ's FABRIC programme provides donor-funded support, so factories are not the paying decision-maker. (https://en.vietstock.vn/2026/07/germany-cambodia-bolster-green-garment-push-as-global-rules-tighten-52000-637506.htm)
- **FPCS foreign-guest registration for guesthouses and landlords:** registration within 24 h is mandatory, but the government app is free, fines are small (KHR 30,000 per foreigner), and buyers are fragmented micro-landlords. It could only work as a feature inside a local hotel property-management system. (https://cambodianess.com/article/fpcs-explained-a-practical-2026-guide-for-foreigners-and-landlords)

## Too competitive

- **Generic Cambodian payroll and NSSF calculation:** CheckinMe, MiHCM, Ontop and Odoo already cover it. Only the multi-portal submission and reconciliation layer looks open (Opportunity 1).
