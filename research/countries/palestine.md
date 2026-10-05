# Palestine (West Bank and Gaza): Opportunity Research

Research date: 2026-10-05. Search budget: small or inaccessible market, 8 searches used. WebFetch was not used. Arabic and English queries.

## Bottom line

**This is not a viable standalone market for a foreign solo founder in 2026.** I screened it, and the two candidates below are recorded only for completeness. Neither reaches the brief's build threshold. A foreign founder is not formally barred: US/EU/UK sanctions do not prohibit selling ordinary B2B software to West Bank businesses. However, OFAC/EU counter-terrorism designations make any Gaza-side counterparties a screening risk. The market fails mainly on practical access:

- **Payment rails are breaking.** Since 2019 Israel has withheld or deducted Palestinian Authority clearance revenues, and the total now exceeds USD 5bn. A Knesset amendment on 8 June 2026 widened the mechanisms for permanent deduction. Correspondent banking links between Israeli and Palestinian banks have been running on short indemnity extensions. In 2026, five Palestinian banks were due to lose Bank Hapoalim correspondent access on 13 Aug 2026, and Discount Bank clients faced a 1 Sep 2026 cutoff. This hits the import and payment plumbing that any SaaS billing would depend on.
- **Card processors are absent.** PayPal does not serve Palestinian accounts and Stripe does not onboard local entities. Local businesses pay by bank transfer or cash. A cash-transaction cap law (above about NIS 20,000) is being pushed because of the "excess shekel" crisis.
- **Demand has collapsed.** In 2025 GDP was still about 24% below its 2023 level, even after about 4% growth (MAS). The PA pays partial public salaries. Gaza's private sector is largely destroyed.
- **Regulatory triggers are external.** The main "why now" mandates come from Israel (Israel Tax Authority e-invoice allocation numbers, clearance-invoice rules), not from a PA portal a vendor could integrate with. No PA e-invoicing mandate for 2025–2026 could be verified.

**Better routing:** Palestinian SMEs are better reached as an Arabic-language add-on to a **Jordan** product (Jordan's JoFotara e-invoicing ecosystem, shared accounting culture, Bisan and Jordanian vendors), or through an **Israeli** e-invoicing tool that already handles invoices to Palestinian customers. Do not attack it as its own market.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Importers / wholesalers (West Bank) | Collecting Israeli suppliers' special clearance ("I") invoices and Israel Tax Authority allocation numbers, then reconciling them to PA VAT clearance claims | Weak candidate (#1) | The pain is real and recurring, but the regime is politically volatile, the PA side has no API, and local ERPs (Bisan) own the books |
| Accountants / bookkeeping bureaus | VAT returns, clearance invoices, payroll for SMEs | Rejected | Bisan Systems (Ramallah, since 1988) is the de facto standard. Job ads list Bisan as a required skill |
| Agri-food exporters (olive oil, Medjool dates) | GLOBALG.A.P., organic, and EU buyer traceability evidence | Weak candidate (#2) | Real requirement, but only dozens of exporters. Upgrades are paid for by donors (PalTrade/EU4Trade tenders) and delivered by consultants |
| Merchants / retail (cash to digital) | Shift to non-cash payments under the cash cap | Rejected | Owned by banks, PMA-licensed PSPs and wallets. Generic payments, not an indie workflow |
| NGOs / donor-funded projects | Grant fund accounting and donor reporting | Too competitive / poor fit | Bisan NGO module, international NGO platforms. Donor-specific procurement |

## Opportunities (none recommended to build)

### Opportunity: Clearance-invoice reconciliation for West Bank importers

**Industry:**
Wholesale / import trade buying from Israeli suppliers

**Buyer:**
Finance manager or external accountant of a West Bank trading company registered for VAT

**Trigger / Why now:**
Israel's mandatory e-invoicing model ("allocation numbers" for B2B invoices, with the threshold lowered in stages from 2025) applies to Israeli suppliers. Under the Paris Protocol, trade between Israeli and Palestinian dealers needs special, clearly marked clearance invoices. These invoices have amounts in NIS and are valid for VAT rebate for six months. The rebate is what drives the PA's clearance revenue, and that revenue is now being withheld and deducted.

**Current workflow:**
1. The Israeli supplier issues a special clearance ("I") invoice, often on paper or as a PDF in Hebrew/Arabic/English.
2. The Palestinian importer's accountant keys it into Bisan or another ERP.
3. The importer submits it to the PA VAT department within six months to claim input VAT and support clearance.
4. Staff chase suppliers for missing or invalid invoices manually.

**Pain:**
Invoices that are missing, late or malformed cost the importer input VAT. The six-month validity creates a deadline. Evidence: Paris Protocol Annex (tax provisions), Israeli gov.il service "Issuing (I) invoices by Israeli dealers to Palestinian clients". I could not verify the volume of rejections or any user complaints.

**Existing solutions:**
Bisan ERP (local books). Israeli invoicing apps on the supplier side (e.g., iCount, Priority, NetSuite Israel localization) that handle allocation numbers. Accountants doing it manually.

**The gap:**
No found tool tracks clearance-invoice receipt, validity and expiry from the importer's side. This is unverified: Bisan may already have a module.

**Possible product:**
An inbox that ingests supplier clearance invoices, checks the required fields and NIS amounts, flags any invoice nearing its six-month expiry, and exports the claim schedule in the format the PA VAT department expects.

**MVP:**
PDF/photo intake, a field checklist, an expiry dashboard, and Excel export for the accountant.

**Pricing hypothesis:**
USD 30–60/month per importer (estimate). This is constrained by the economic crisis and by the lack of card billing.

**How to find first customers:**
Chambers of commerce membership lists (Ramallah, Hebron, Nablus), PalTrade member directory, accounting firms.

**Risks:**
The clearance regime could be unilaterally changed or suspended. There is no PA API. Collecting payment is hard. Bisan could add the feature cheaply. The founder must read Hebrew-language supplier documents.

**Kill condition:**
Kill it if Bisan or the PA VAT department already tracks clearance-invoice validity, or if accountants report that rejections are rare.

**Score:** 3/10

**Sources:**
- https://www.gov.il/ar/service/producing-invoice
- https://avalon.law.yale.edu/20th_century/tp_annex6.asp
- https://kpmg.com/us/en/taxnewsflash/news/2025/12/tnf-israel-expansion-of-mandatory-e-invoicing-model.html
- https://en.wikipedia.org/wiki/Palestinian_clearance_funds_held_by_Israel
- https://bisan.com

### Opportunity: Export-certification evidence binder for olive-oil and date exporters

**Industry:**
Agri-food exporters (Medjool dates from Jericho/Jordan Valley, olive oil)

**Buyer:**
Quality/export manager at a packing house or olive press

**Trigger / Why now:**
EU-funded "EU4Trade" (PalTrade) programme pushing SMEs into EU markets. Recurring GLOBALG.A.P. recertification and EU/NOP organic schemes (PalTrade tenders PTC-033-2026 and earlier).

**Current workflow:**
1. A donor-funded consultant builds the QMS documents.
2. Farm and pack-house records are kept in paper/Excel.
3. Staff compile an evidence pack before each annual audit and for buyer questionnaires.

**Pain:**
Recurring audits and buyer requests. Donors keep tendering consultancies for "traceability system development", which is indirect evidence of manual systems.

**Existing solutions:**
Donor-funded consultants. Global farm-compliance SaaS (e.g., GLOBALG.A.P.-oriented farm management tools). Spreadsheets.

**The gap:**
Arabic-first, low-cost evidence tracking for small packers. However, the buyer usually expects a donor to pay.

**Possible product:**
A per-lot traceability and audit-evidence binder that maps records to GLOBALG.A.P./organic control points.

**MVP:**
Lot register, document checklist per control point, and export of an audit pack.

**Pricing hypothesis:**
USD 50–100/month, or a donor-funded annual licence (estimate).

**How to find first customers:**
PalTrade exporter lists, tender winners on jobs.ps, the Palestinian Dates Association / olive-oil council (unverified names).

**Risks:**
The market is tiny (dozens of exporters). The model depends on donors. Logistics through Israeli-controlled crossings dominate exporters' pain more than paperwork does.

**Kill condition:**
Kill it if fewer than about 50 certified exporters exist, or if donors fund a free shared system.

**Score:** 2/10

**Sources:**
- https://www.jobs.ps/tenders/ptc-033-2026-15924.html
- https://jobs.ps/tenders/global-gap-system-development-2433.html
- https://jobs.ps/tenders/developing-organic-certification-requirements-for-olive-and-dates-value-chains-2382.html

## Rejected after competitor research

- **SME accounting/VAT compliance tool:** killed by Bisan Systems, the entrenched Ramallah ERP that is a required skill in local accountant job ads (jobs.ps, paltrade.org).
- **Merchant digital-payments compliance for the cash cap:** killed by banks and PMA-licensed PSPs/wallets. It is a generic payments play.
- **NGO grant accounting:** killed by the Bisan NGO module plus international NGO platforms.

## Attractive problem, poor distribution

- **Export certification evidence:** the buyers are a small, donor-dependent group (see #2).

## Too competitive

- NGO/donor financial reporting (Bisan NGO and others).

## Accessibility / market-level notes

- **Legal:** selling software to West Bank businesses is not sanctioned in itself. Gaza counterparties require OFAC/EU designation screening.
- **Practical:** there is no PayPal or Stripe for local accounts. The correspondent-banking cutoffs (Aug–Sep 2026), the excess-shekel crisis, and the withheld clearance revenue (above USD 5bn) make collecting payment and buyer demand both unreliable.
- **Recommendation:** treat Palestine at most as an Arabic add-on to a Jordan or Israel e-invoicing product.

**Market sources:**
- https://mas.ps/en/publications/13644.html
- https://mas.ps/cached_uploads/download/2026/08/03/economic-update-july-2026-eng-1785760437.pdf
- https://www.indrastra.com/2026/07/when-banking-becomes-geopolitics.html
- https://www.arabnews.pk/node/2652052/middle-east
- https://www.newarab.com/news/pa-minister-warns-existential-threat-israel-blocks-funds
- https://www.ajnet.me/ebusiness/2025/11/19/%d9%81%d9%84%d8%b3%d8%b7%d9%8a%d9%86-%d8%b3%d9%84%d8%b7%d8%a9-%d8%a7%d9%84%d9%86%d9%82%d8%af-%d8%b4%d9%8a%d9%83%d9%84-%d9%82%d8%a7%d9%86%d9%88%d9%86-%d9%86%d9%82%d8%af
- https://gazaskygeeks.com/?p=89138
