# Kosovo: country research

**Researched:** 2026-10-04/05 · **Search budget used:** 10 of 10 (small market) · **Languages:** English and Albanian

## Summary verdict

Kosovo is a small market: about 1.6–1.8M residents and a few tens of thousands of active firms (estimate, not verified this session). It is accessible to a foreign solo founder: there are no sanctions on software or IT services, it uses the euro, and SEPA/card rails work. The 2025–2026 regulatory activity is real, but the largest trigger (the move from hardware fiscal devices to certified **Electronic Fiscal Software**, AI MF 01/2026) is gated. Software must be certified by the tax authority (ATK/TAK), it is sold through ATK-authorized economic operators, and local cloud players such as FISKO already serve it. The other triggers (packaging EPR, food-safety self-control, the new foreigners/work-permit regime) are either annual, weakly enforced, or too small on their own.

**Honest conclusion:** I found no strong standalone opportunity. Kosovo works best as an **Albanian-language add-on to an Albania (and North Macedonia) product**, because the regulatory families are similar (fiscalization, packaging EPR, HACCP). The three ideas below are the best of a weak set, and all score at most 4/10.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Retail / hospitality / all B2C sellers | Fiscalization move from HW fiscal devices to certified Electronic Fiscal Software (EFS) under AI MF 01/2026; Unique Fiscalization Code via EDI | Too competitive / gated | Needs ATK certification plus authorized-operator status; FISKO and local POS/fiscal vendors are already in place |
| Accountants / payroll bureaus | Monthly tax and contribution declarations and annual financial statements through ATK EDI | Reject | Fully electronic since 2022 (98% adoption); handled by local accounting packages, low exception load |
| Importers / producers of packaged goods | Packaging and packaging-waste EPR reporting (AI 07/2023, AI 04/2025 on packaging, Waste Law amendments), deposit return from 2025 | Poor distribution / weak enforcement | Annual reporting; secondary legislation still incomplete; small buyer pool |
| Food business operators (processors, butchers, restaurants) | HACCP self-control records, cold-chain temperature logs, AUV inspections (55,000+/yr) | Weak | Real inspections, but generic HACCP/temperature-log apps substitute and willingness to pay is low |
| Construction / hospitality / staffing employers | Foreign-worker work and stay permits, annual quota, renewals; new foreigners regime fully applied from 15 Mar 2026 | Small but plausible niche | Recurring renewals per worker and growing labour imports (unverified), but lawyers and agents do it manually and volume is small |
| Freight forwarders / customs agents | Customs declarations, transit (NCTS) | Not assessed in depth | Found no 2026 Kosovo-specific system change in searches; regional NCTS changes concern Serbia, Albania and the EU |

## Opportunities

### Opportunity: Foreign-worker permit and renewal tracker for Kosovo employers

**Industry:**
Construction contractors, hospitality, manufacturing, staffing/recruitment agencies importing workers

**Buyer:**
HR or office manager at an SME employing non-EU foreign workers; owners of recruitment agencies placing foreign workers in Kosovo

**Trigger / Why now:**
New rules for foreigners entering Kosovo, with full implementation from 15 March 2026 (Ministry of Internal Affairs, per Koha). The government sets an annual quota of work permits for foreigners. Each permit must be renewed one month before expiry, so employers face recurring per-worker deadlines.

**Current workflow:**
1. The employer collects the worker's visa or stay permit, contract, business registration certificate and a Labour Office certificate.
2. It files the work-permit request (EUR 80 fee, about 3–8 weeks) and the stay-permit request at separate institutions.
3. It tracks expiry dates in spreadsheets and refiles renewals at least one month before expiry.
4. Many employers pay lawyers or agents for each case.

**Pain:**
Missing a renewal deadline makes the worker's employment illegal. Two institutions (Ministry of Labour/Employment Agency and Ministry of Internal Affairs) mean two document sets. The quota adds uncertainty. Evidence of employer complaints is **unverified**; I found no forums.

**Existing solutions:**
Local law firms and immigration agents (manual work); EOR/immigration platforms such as Playroll and Globalization Partners (aimed at foreign companies hiring in Kosovo, not local SMEs); generic HR software and spreadsheets.

**The gap:**
No Kosovo-specific tool combines the two-institution document checklist, expiry and renewal deadlines, and pre-filled application packets for local employers (unverified absence).

**Possible product:**
A per-worker permit file for each employee, with deadline alerts and auto-generated Albanian-language application packets for work-permit and stay-permit renewals. It could be sold to agencies as a multi-client dashboard.

**MVP:**
A spreadsheet import of workers, a document checklist per permit type, expiry alerts by email/Viber, and PDF packet generation.

**Pricing hypothesis:**
EUR 5–10 per worker per month, or EUR 50–150 per month per recruitment agency.

**How to find first customers:**
Recruitment agencies advertising foreign workers, the Kosovo Chamber of Commerce and the construction association, and law firms as resellers.

**Risks:**
Small volume (the quota caps the market); the portal may not allow automation; this sits close to the generic "document collection" trap; lawyers may be cheap enough.

**Kill condition:**
The annual quota or the number of active foreign-worker permits is below about 5,000, or employers say agents handle renewals for under EUR 50 per case.

**Score:** 4/10

**Sources:**
- https://www.koha.net/en/arberi/mpb-ja-me-informacione-per-te-huajt-qe-hyjne-ne-kosove-pas-nisjes-se-zbatimit-te-ligjit-per-ta
- https://cps.rks-gov.net/wp-content/uploads/2020/09/LAW-ON-GRANTING-PERMIT-FOR-WORK-AND-EMPLOYMENT-OF-FOREIGN-CITIZENS-IN-REPUBLIC-OF-KOSOVO.pdf
- https://playroll.com/work-permit-visas/kosovo
- https://pwc.com/ks/en/publications/assets/coming-to-work.pdf

### Opportunity: Packaging EPR data pack for importers (Kosovo + Albania + North Macedonia)

**Industry:**
Importers and distributors of packaged goods (FMCG, beverages)

**Buyer:**
Finance or compliance officer at an importer or distributor; producer responsibility organisations (PROs)

**Trigger / Why now:**
AI 07/2023 on packaging waste introduced EPR (individual or collective compliance), and a deposit return system has been planned from 1 Jan 2025. Administrative Guideline 04/2025 on packaging was referenced, and Law 08/L-071 amends the Waste Law. GIZ is supporting the move "from policy to practice". Packaging handlers must report annually to the ministry, and importers must supply the data for imported goods.

**Current workflow:**
1. The importer pulls import lines from customs declarations and the ERP.
2. Packaging weights by material are estimated by hand per SKU in Excel.
3. The importer reports annually to the ministry or the PRO.

**Pain:**
Converting SKUs into packaging weights is laborious. That said, enforcement and secondary legislation are still incomplete (per the waste-management report), so pain today is moderate.

**Existing solutions:**
PROs and consultants (unverified names in Kosovo), ERP exports and Excel. Regional EPR software exists in the EU (e.g., Landbell-group services) but not Kosovo-specific (unverified).

**The gap:**
SKU-to-packaging-weight master data and an automatic report from import data, reusable across the Western Balkan regimes.

**Possible product:**
Upload customs and ERP sales lines, maintain a packaging-spec library per SKU, and generate the Kosovo report (plus Albania and North Macedonia equivalents).

**MVP:**
An Excel-in, report-out web app with a material/weight library.

**Pricing hypothesis:**
EUR 50–200 per month per importer, or an annual licence.

**How to find first customers:**
PROs (each has a member list), the Kosovo Chamber of Commerce, the American Chamber of Commerce in Kosovo, and FMCG importer lists.

**Risks:**
Annual frequency, weak enforcement, and PROs may provide this for free to members.

**Kill condition:**
The ministry or a PRO does not enforce importer reporting by 2027, or the PRO already provides a member reporting tool.

**Score:** 3/10

**Sources:**
- https://erp-recycling.org/news-and-events/2024/07/two-non-eu-countries-implement-requirements-from-sup-directive/
- https://giz.de/en/regions/europe/kosovo/news/policy-practice-law-waste-and-extended-producer-responsibility-epr
- http://www.ammk-rks.net/assets/cms/uploads/files/ALB%20Raporti%20per%20gjendjen%20e%20mbeturinave%20ne%20Kososve%202023-2024.pdf

### Opportunity: AUV inspection-ready HACCP and cold-chain log for meat and dairy businesses

**Industry:**
Butchers, meat processors, dairies, food wholesalers

**Buyer:**
Owner or quality manager of a small food business operator

**Trigger / Why now:**
The Food and Veterinary Agency (AUV) carried out 55,000+ inspections in one year and destroyed 700+ tonnes of products, plus 50,000+ kg of suspect meat in the current year. There is also public pressure to strengthen the AUV. HACCP-based procedures and cold-chain temperatures are legal obligations.

**Current workflow:**
1. Temperature and cleaning logs are kept on paper.
2. Supplier and lot records are kept in a binder.
3. Records are shown to the inspector on request.

**Pain:**
Seizures and closures are real consequences. No user complaints were found (unverified).

**Existing solutions:**
Paper, Excel, HACCP consultants, and generic HACCP/temperature-log apps (international; Albanian-language availability unverified).

**The gap:**
An Albanian-language log aligned to AUV inspection checklists, with lot traceability.

**Possible product:**
A mobile checklist and temperature log with a lot-in/lot-out record and a one-click inspection report.

**MVP:**
A PWA with daily checklists and a PDF export.

**Pricing hypothesis:**
EUR 15–30 per month per site.

**How to find first customers:**
The AUV list of approved/licensed establishments (if published), consultants, and associations.

**Risks:**
Low willingness to pay; generic tools substitute; sits close to the "generic checklist" trap.

**Kill condition:**
Inspectors accept paper without issue and consultants bundle free templates.

**Score:** 3/10

**Sources:**
- https://telegrafi.com/vitin-e-kaluar-kosova-asgjesoi-mbi-700-tonelata-produkte-ushqimore/
- https://telegrafi.com/mish-dyshuar-ne-tregun-e-kosoves-auv-brenda-ketij-viti-ka-asgjesuar-mbi-50-mije-kg/
- https://faolex.fao.org/docs/pdf/kos243829.pdf

## Rejected after competitor research

- **EFS fiscalization connector (e-shops/ERPs to ATK)**: there is a strong why-now (AI MF 01/2026, the Unique Fiscalization Code service in EDI from July 2026, a transitional period for hardware devices). It was rejected for three reasons: (a) the software needs ATK certification; (b) sale, installation and maintenance go through ATK-authorized economic operators, so a local entity is needed; (c) **FISKO** already offers cloud fiscal receipts, POS and an API with no printer, and local POS vendors are applying for certification. Sources: https://www.atk-ks.org/en/notice-to-taxpayers-new-version-of-the-edi-electronic-system-published/, https://www.fiscal-requirements.com/news/5652-tax-administration-of-kosovo-opens-applications-for-efs-electronic-fiscal-software-certification-with-the-new-regulation-recently-adopted, https://www.cbinsights.com/company/fisko
- **Tax/contribution and financial-statement filing helper**: ATK EDI has been mandatory since Feb 2022 with 98% adoption, and local accounting packages already cover it. Source: https://orbitax.com/news/archive.php/Kosovo-Implements-Mandatory-El-48941
- **Cash-ban (>EUR 2,000, from 1 Jun 2026) compliance tooling**: banks and payment apps solve it; there is no recurring admin workflow. Source: https://www.vatupdate.com/2026/06/01/kosovo-bans-cash-payments-over-e2000-for-individual-transactions/

## Attractive problem, poor distribution

- Packaging EPR reporting: the buyer pool is small, the filing is annual, and enforcement is weak. It is better as a Western Balkans bundle.

## Too competitive

- Fiscalization/POS (EFS): certified local vendors and FISKO.

## Inaccessible markets

- None. Kosovo is accessible (EUR, no sanctions), but EFS vendor status requires local authorization.

## Notes on verification

- I could not verify the number of active foreign-worker permits or the quota size, the number of packaging importers, or the names of Kosovo PROs. Treat the market sizes above as estimates.
- No B2B e-invoicing mandate (in the style of Serbia or Slovakia) was found for Kosovo for 2026–2027.
