# Palestine (West Bank and Gaza): Offline-industries pass

Research date: 2026-10-05. Searches used: 15 of 20 WebSearch calls, mostly Arabic and in extended mode. WebFetch was not used. The existing country report is `research/countries/palestine.md`. Its two weak candidates (clearance-invoice reconciliation, export-certification binder) are not repeated here.

## Bottom line

The market-level verdict from the country report still holds. Palestine is not a viable standalone market for a non-local solo founder in 2026. The reasons are payment rails (no Stripe or PayPal, correspondent-banking cutoffs in Aug–Sep 2026), collapsed demand, and a destroyed private sector in Gaza.

The regulator-first method did turn up several quiet industries with real, published obligations: precious-metals assay and AML record-keeping, olive-press licensing, well-drilling contractor licensing, money-changer AML, and stone-quarry environmental conditions. None of them combines a recurring per-job filing, a reachable software buyer and a gap that Arab-region vertical software does not already cover. At best, the two items below are worth a few interviews **by a local founder**, or as an add-on to a Jordan product.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Gold / precious-metals workshops and shops | Mandatory assay and hallmarking (دمغ) of items at the MoNE Precious Metals Assay Directorate. Since 2022, AML/CFT customer due diligence for DNFBPs on cash purchases (Instructions No. 1/2022, replacing No. 6/2016) | Assay is done at a counter (items are physically brought in). The AML instructions require KYC records, and no PA portal for DNFBPs was found | About 522 licensed establishments (139 workshops, 383 shops) per a MoNE figure reported in the press. An older figure is 577 units and about 3,000 workers (WAFA Info) | Weak candidate (#1) | A real recurring record duty, but Arab gold-POS software (Daftra, DEXEF, Al-Safi, etc.) already covers weights and karats. The AML part is low-intensity and enforcement is unproven |
| Olive presses (معاصر الزيتون) | Licence from the governorate agriculture directorate (Instructions No. 1/2021, updated in 2024). The Ministry sets the operating season each year (2026 dates announced). Zibar (olive-mill wastewater) discharge rules | Licensing is done by paper form at the directorate. The season is short and intense | 222 operating presses in the West Bank (2009 figure, cited by Ma'an). PCBS ran a press survey in 2015 | Weak candidate (#2) | Seasonal (about 2–3 months a year), small market, and I could not verify a recurring per-batch filing duty |
| Money changers (صرافين) | Licensing under Decree-Law 40/2022 and PMA AML instructions. PMA keeps a central register. PMA closed and fined exchange shops in enforcement rounds | PMA supervision. Many are small family counters | Number not verified. AMAN published a 2024 research paper on oversight of exchangers | Rejected | AML/KYC tooling is regulated, PMA-driven and bank-like. It needs a local and comes with heavy sanctions/AML exposure for a foreign vendor |
| Well-drilling contractors and well owners | Cabinet Decision 8/2020 and Instructions 1/2020: licences for drilling, rehabilitation and abstraction, a drilling-contractor licence, and a PWA register per well and per contractor | Written application to the Palestinian Water Authority. The PWA keeps the register itself | Small (dozens of contractors, estimate). Drilling in Area C is largely blocked by Israeli permits | Rejected | Tiny market. The obligations are one-off licences, not recurring reports |
| Stone and marble quarries and saws | Licensing under industry law, plus Cabinet Decision 25/2010 on environmental conditions for the stone industry (EQA) | Licences are paper-based. The press describes much of the sector as unregulated | About 1,124 establishments and 25,000 workers. An older figure is >720 saws and 250 quarries (WAFA Info, Al-Hadath) | Rejected | Enforcement is weak, there is no recurring filing, and most quarries sit in Area C under Israeli control |
| Scrap metal dealers | General MoNE trade licence and municipal licence. Exports of scrap go through Israeli ports | Informal, family collectors. Thousands of families earn income from it (Al-Quds) | Not counted ("thousands of families", Al-Quds) | Rejected | No specific dealer register or police reporting duty was found. The trade is informal |
| Livestock traders and transport | Agriculture Law 2/2003: slaughter only in licensed abattoirs under vet supervision | Paper-based, at the vet directorate | Not found | Rejected | No movement-log or trader-register obligation was found for Palestine |
| Beekeepers | Cabinet Resolution 13/2008: registration in MoA records for owners of 3 or more hives, using a ministry form | Paper form | No count found | Rejected | One-time registration, small hobby-scale operators, no money |
| Veterinary pharmacies and drug stores | Licensing instructions (palvet.ps). Drug registration | Paper licensing | Not found | Rejected | No recurring dispensing report was found. Too small |
| Pesticide shops | Licensed by MoA (Agriculture Law) | Searches returned only Egyptian results | Not found | Rejected (insufficient evidence) | I could not verify a Palestinian sales-register duty |
| Public taxi offices (مكاتب التاكسي العمومي) | MoT licenses offices, lines and fares. Transport-app regulation No. 1/2025 exempts taxi offices from the capital and guarantee requirements if they apply for app licences | Licensing is done at the MoT counter | Not found | Rejected | The 2025 change creates *dispatch-app* demand, not a compliance filing. That is a generic ride-hail market with local incumbents |
| Household employers (domestic workers) | Not applicable at scale | — | — | Not applicable | Few foreign domestic workers. Palestinians working in Israel are an Israeli-side workflow |

## 2. Strongest opportunities (neither recommended to build)

### Opportunity: AML customer-due-diligence and assay log for gold shops

**Industry:**
Precious-metals retail and workshops (gold shops in Hebron, Nablus, Ramallah; small-scale gold recycling in Gaza)

**Buyer:**
Owner of a gold shop or workshop, often family-run

**Trigger / Why now:**
AML/CFT Instructions No. 1/2022 for DNFBPs (issued under Decree-Law 39/2022) require dealers in precious metals to identify customers and keep records on cash transactions above a threshold. MoNE assay volumes rose sharply (+93% and +146% in successive reported years) as households moved savings into gold during the crisis. Al Jazeera (3 Oct 2026) reports that Gaza is recycling gold locally, with the assay directorate stamping 50–60 kg a month there.

**Current workflow:**
1. The workshop carries pieces to the MoNE assay directorate for testing and stamping, and pays fees per weight.
2. The shop records sales and purchases in a ledger or a generic gold-POS.
3. For large cash buys or sells, the owner photocopies the customer's ID (assumed; unverified) and keeps it on paper.
4. There is no evidence of any electronic reporting to the Financial Follow-Up Unit (FFU) except suspicious-transaction reports.

**Pain:**
Unverified. No enforcement cases against gold dealers were found, only against money changers. The pain is mostly hypothetical until an FATF/MENAFATF evaluation pushes DNFBP supervision.

**Existing solutions:**
Daftra, DEXEF, Al-Safi, Al-Waseet "Golden Accountant", Ultimate ERP gold module, and Medad ERP. All are Arabic gold-shop POS systems that handle karat, weight and labour charges. Bisan ERP is used locally. The rest is paper ledgers and photocopies.

**Offline evidence:**
Assay is a physical counter service. The AML instructions exist only as a gazette text. No PA DNFBP portal was found.

**Offline channel:**
The assay directorate's counters, where every workshop shows up, and the jewellers' union or the precious-metals committees of the chambers of commerce in Hebron and Nablus (names unverified).

**Market count:**
About 522 licensed establishments (139 workshops, 383 shops), MoNE figure as reported in the press.

**The gap:**
A KYC and threshold-cash log in Palestine's specific format, exportable for an FFU or MoNE inspection. Existing gold-POS systems may already capture customer ID, so the gap is thin.

**Possible product:**
An add-on to a gold-POS that captures the customer ID photo for any transaction over the threshold, keeps the record for the retention period, and generates an inspection-ready register.

**MVP:**
A mobile app with ID photo capture, transaction amount and karat/weight, a threshold flag, and PDF/Excel register export.

**Pricing hypothesis:**
USD 10–20/month (estimate). Payment would have to be by bank transfer or a local reseller. Owners would likely pay only if inspections start. Willingness to pay is for a done-for-you setup, not for software alone.

**How to find first customers:**
Walk the gold souqs in Hebron and Nablus. Approach chamber-of-commerce committees.

**Risks:**
No enforcement. A tiny market. Gold-POS incumbents can add the feature at no cost. Payment collection. Sanctions screening for Gaza counterparties.

**Founder access:**
Needs a local Arabic-speaking founder. A non-local solo founder could not realistically sell this.

**Kill condition:**
Kill it if the FFU or MoNE has never inspected a gold dealer for AML, or if Daftra or DEXEF already produce a KYC register.

**Score:** 2/10

**Sources:**
- http://muqtafi.birzeit.edu/en/pg/getleg.asp?id=18721 (Instructions No. 3/2022 DNFBP, listed on Birzeit Muqtafi)
- http://muqtafi.birzeit.edu/pg/getleg.asp?id=16894 (Instructions No. 6/2016, now repealed)
- https://mjr.ogb.gov.ps/MergedLegislations/ViewText/123/ (Decree-Law 39/2022 AML/CFT)
- https://www.wafa.ps/Pages/Details/62446 (assay volumes up 93%)
- https://khbrpress.ps/post/311235/ (assay index up 146%)
- https://info.wafa.ps/pages/details/30702 (precious-metals manufacturing, 577 units)
- https://www.aljazeera.net/ebusiness/2026/10/3/ (Gaza gold recycling, 50–60 kg/month assay)
- https://www.daftra.com/ , https://dexef.com/apps/gold-store-accounts-software/ , https://alsafisys.com/ (competitors)

Note: there is a numbering inconsistency in the sources. Search summaries cite DNFBP instructions as both "No. 1/2022" and "No. 3/2022". I have not verified which number is correct.

### Opportunity: Seasonal olive-press intake and zibar log

**Industry:**
Olive presses (West Bank, concentrated in the northern governorates)

**Buyer:**
Press owner, usually a family business that operates for the season only

**Trigger / Why now:**
MoA olive-press instructions (No. 1/2021, revised as No. 1/2024) cover licensing, siting and wastewater. The MoA announced the 2026 harvest and press-operating dates. Zibar discharge must meet the Palestinian standard for industrial wastewater, and the press calls zibar a serious environmental threat.

**Current workflow:**
1. Farmers bring olives. The press weighs them, and the owner writes the weight, oil yield and toll fee in a paper notebook.
2. Zibar is discharged to the network, to tankers, or illegally to wadis.
3. The directorate inspects during the season.

**Pain:**
The pain is mostly environmental and external (a municipal or EQA problem), not an administrative burden the owner pays to remove. I could not verify a recurring reporting duty to the MoA, such as daily quantities.

**Existing solutions:**
Paper notebooks, generic POS and scale printers, Bisan for larger presses.

**Offline evidence:**
Licensing by paper application at the directorate. The PCBS olive-press survey is done by interview.

**Offline channel:**
MoA governorate directorates and the agricultural cooperatives' union. Press-equipment suppliers (Italian Alfa Laval/Pieralisi dealers in Nablus, unverified).

**Market count:**
222 operating presses in the West Bank (2009 figure).

**The gap:**
A per-customer intake and yield receipt plus a season report. This is mostly a generic job-ticket tool.

**Possible product:**
A tablet app for intake weight, oil yield and toll fee, with an SMS receipt to the farmer and an end-of-season summary for the directorate.

**MVP:**
Intake form, receipt and season export.

**Pricing hypothesis:**
USD 50–100 per season (estimate).

**How to find first customers:**
Phone outreach to presses listed by the MoA directorates during the October–December season.

**Risks:**
It is seasonal. The market is tiny. It sits close to a generic POS. Settler violence and access restrictions disrupt the harvest.

**Founder access:**
Local only.

**Kill condition:**
Kill it if the MoA requires no quantity reporting, which seems likely.

**Score:** 2/10

**Sources:**
- https://mjr.ogb.gov.ps/Decrees/ViewText/31981/ (Instructions No. 1/2021)
- http://muqtafi.birzeit.edu/pg/getleg.asp?id=18907 (Instructions No. 1/2024)
- https://www.maan-ctr.org/magazine/article/529/ (zibar; 222 presses)
- https://paltimeps.ps/post/390612/ (2026 press season dates)
- https://microdata.pcbs.gov.ps/PCBS-Metadata-ar-v5.2/index.php/catalog/252 (PCBS olive-press survey, 2015)

## 3. Rejected

- **Money-changer AML compliance:** PMA-supervised and bank-adjacent. It needs a local licence-aware vendor and carries sanctions exposure (Decree-Law 40/2022; PMA AML instructions).
- **Well-drilling contractor licensing:** the licences are one-off, the PWA keeps the register, the contractor count is tiny, and Area C restrictions apply.
- **Stone and marble environmental compliance:** about 1,124 firms, but Cabinet Decision 25/2010 is weakly enforced and there is no recurring filing.
- **Scrap dealers, beekeepers, livestock traders, vet pharmacies, pesticide shops:** I found no recurring register or reporting duty in Palestinian sources. The search results were dominated by other countries (Saudi Arabia, Jordan, Egypt).
- **Taxi offices under the 2025 app regulation:** this creates demand for dispatch apps (generic ride-hail), not for compliance.
- **Household employers:** not applicable.

## 4. Method notes

- What worked: legislation databases (mjr.ogb.gov.ps, muqtafi.birzeit.edu, maqam.najah.edu) for the exact instruction numbers, and WAFA Info / MoNE press releases for sector counts.
- What didn't: generic Arabic regulator queries pulled in Saudi, Jordanian and Egyptian results, because the PA ministries publish little online. Queries need "فلسطين" or a PA-specific site name. No PA open licensing registers were found online. Enforcement news exists only for money changers.
- Structural limit: most quiet-industry obligations are one-off licences, not recurring per-job filings. The one recurring flow, assay, is a physical counter service with no data re-entry for software to remove.
