# Lesotho: Offline-Industries Pass

**Date:** 2026-10-05
**Market class:** Small, landlocked economy of about 2.3M people (estimate) inside the SACU/CMA union with South Africa. Formal SMEs are concentrated in Maseru. Most rural economic activity (livestock, wool and mohair, taxis, informal trade) is informal or semi-formal.
**Search budget:** 8. The run was interrupted by an API usage limit and then resumed. 4 searches are logged in the resumed session. Searches made before the interruption could not be recovered, so I stopped at 4 to make sure the total stayed within 8.
**Bottom line:** Lesotho has real, enforced paper obligations in quiet industries. The strongest are livestock identification and registration under the Stock Theft Prevention Regulations, taxi D-permits from the Road Transport Board, and the 2025 minimum-wage notice for domestic workers. But in every case either the bottleneck is the **government's own capacity** (LRMIS registration stations unable to issue marks for over a year), or the obliged party is an informal operator or household with little ability to pay. That is not a gap software can sell into. Section 2 is therefore empty on purpose. It is not padded with template entries.

This pass does not repeat the opportunities in `research/countries/lesotho.md`: the Lekuka e-invoicing connector, VAT reconciliation for accountants, AGOA garment compliance, and wool/mohair bale traceability.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Livestock owners and traders (cattle, sheep, goats, horses) | Under the Stock Theft Prevention Regulations 2004, each animal needs a unique mark (tattoo, ear mark, brand or microchip) and must be entered in the National Livestock Register. Recent amendments make owning or trading unregistered livestock illegal. | Marks are issued at Department of Livestock registration stations. Katse station has not been able to issue identification for more than a year because of damaged equipment. Farmers wait months for tattoos and lose sales (The Reporter, Nov 2025). | Police recorded more than 1,900 stock-theft cases in 2025/26 (Lesotho Times). Owners are counted in the hundreds of thousands of households (estimate). | Reject (for indie) | The obligation is real and enforced, but the bottleneck is the ministry's LRMIS and its stations. The farmer cannot buy a fix. Any software would be a government or donor tender. |
| Livestock auctions and movement permits | Stock movement or sale needs proof of ownership and a permit through chiefs and police (details unverified) | Done through chiefs' letters and police counters (unverified) | Unknown | Reject | It is part of the same government register problem, and the buyers are informal. |
| Wool and mohair shearing sheds | Bale-to-farmer records for payment and traceability | Paper shed books. Already covered in the country report. | Shed associations number in the hundreds (estimate, not re-verified) | Reject (already covered) | The buyers are donor projects (IFAD WaMCoP) and SA brokers. See the country report. |
| Taxi and 4+1 operators | D-permits from the Road Transport Board. Applicants bring their national ID, vehicle fitness certificate and disc licence, certified by authorised officers, to the Traffic office at Ha Foso. The Board has also amended permit conditions (the 10 km radius for 4+1 taxis). | Done in person at the counter with certified paper copies. Issuance is periodically suspended and then resumed by gazette (LENA, The Reporter). | Several thousand vehicles (estimate; no register found) | Reject | Permits are periodic, not per-trip. The process is a counter visit, often handled through taxi associations. Operators would pay for an agent, not for software. |
| Household employers of domestic workers | Labour Act Wages (Minimum Wages) Notice 2025 (LN 62 of 2025): LSL 872/month (under 12 months' service) or LSL 962/month (over 12 months), effective 28 March 2025 | No employer registration or payslip-filing system was found. Enforcement relies on labour-inspector complaints. | Unknown. Common among Maseru middle-class households (estimate). | Reject | Wages are about USD 50/month and there is no recurring filing obligation. There is nothing to sell at a price above zero. |
| Burial societies | Insurer-backed group schemes need at least 10 members, a constitution and signed forms, with premiums collected between the 1st and 10th of each month. EcoSure / EcoCash forms are collected at ETL shops. | Paper application forms at shops. Contributions are collected by mobile money. | Thousands of societies (estimate; no register found) | Reject | The administrative layer is already provided free by the insurer and telco (EcoSure on EcoCash). Informal societies use notebooks and WhatsApp and would not pay. |
| Funeral parlours | Death registration and burial-order paperwork | Counter-based civil registration | Low hundreds (estimate) | Reject | Death registration is not a portal workflow, so there is no duplicate-entry pain to remove. |
| Scrap metal / second-hand dealers | No dealer register reported to police was found (not searched specifically because of the budget) | Unknown | Few; scrap mostly moves to SA buyers (assumption) | Reject | No obligation was found. |
| Small abattoirs and butcheries | Meat-hygiene inspection by the veterinary services (unverified) | Paper inspection records (assumption) | Small number (estimate) | Reject | Too few buyers. Meat is largely supplied by SA-linked chains. |
| Street vendors and market traders | Municipal trading permits from Maseru City Council | Counter permits, frequent evictions or relocation disputes | Thousands (estimate) | Reject | Annual counter fee and no recurring reporting. Vendors have very low incomes. |
| Medical cannabis licensees | Ministry of Health licences with security and inventory obligations | Licensees are capitalised foreign-backed firms that already use seed-to-sale systems (assumption, not searched) | Low tens (estimate) | Reject | Too few buyers, and those buyers are served by international seed-to-sale vendors. Not a quiet industry. |

## 2. Strongest opportunities

None. No candidate met the brief's bar: identifiable buyers at scale, recurring mandatory reporting, a buyer who can pay, and a concrete offline channel to a buyer who controls the workflow.

The nearest miss is **livestock identification and register management**. The trigger is strong: the amendment makes unregistered livestock illegal, stock theft runs at more than 1,900 cases a year, and Parliament has criticised LRMIS. But the buyer would be the Ministry of Agriculture's Department of Livestock or a donor programme, and the constraint is physical marking equipment and staff at stations, not data entry. Indicative standalone score: 2/10 as a government or donor procurement, 1/10 as indie SMB software.

## 3. Rejected

- **Livestock register / mark-tracking app for farmers or traders.** Farmers cannot register without the ministry issuing the mark, and the National Livestock Register belongs to the state. The substitutes are LRMIS, chiefs' letters and police stock-theft units.
- **Taxi D-permit renewal assistant.** The process is a counter visit with certified paper copies, periods of suspended issuance and changes to permit conditions decided by the Road Transport Board. Taxi associations and runners already act as the intermediary. There is no per-trip reporting.
- **Domestic-worker payslip / contract tool.** There is a minimum-wage notice but no registration or filing obligation, and wages are too low for an employer to pay for software.
- **Burial-society administration.** Insurers and the telco (EcoSure via EcoCash, application forms at ETL shops) already provide collection and administration free to the society.

## 4. Method notes

- What worked: the Lesotho News Agency (lena.gov.ls), The Reporter and the Lesotho Times report regulator activity well (LRMIS failures, D-permit issuance notices, Road Transport Board condition changes). WageIndicator carries the 2025 minimum-wage legal notice.
- What didn't: there are no public licensing registers or operator counts online. Every market count here is an estimate. Sesotho-language searches were not tried because of the budget. Counter-based processes that rely on chiefs and police leave almost no searchable forms.

## Sources

- [Lesotho Times: stock-theft cases and LRMIS criticism](https://lestimes.com/?p=89959)
- [The Reporter: farmers lose income over livestock tattoo delays (Nov 2025)](https://www.thereporter.co.ls/2025/11/07/farmers-lose-income-over-livestock-tattoo-delays/)
- [LENA: livestock registration key to combating livestock theft](https://www.lena.gov.ls/livestock-registration-key-to-combating-livestock-theft-lmps/)
- [Farmer's Weekly: livestock marking kicks off in Lesotho](https://www.farmersweekly.co.za/animals/cattle/livestock-marking-kicks-off-in-lesotho/)
- [LENA: issuance of D-permits](https://www.lena.gov.ls/issuance-of-d-permits-convenes/)
- [The Reporter: Road Transport Board / 4+1 permit conditions](https://www.thereporter.co.ls/2024/01/16/more-kms-for-41s/)
- [WageIndicator: Lesotho domestic worker minimum wage (LN 62 of 2025)](https://wageindicator.org/en-ls/ai/work-in-lesotho/minimum-wage/1969-i-domestic-worker-including-light-physical-worker/)
- [The Reporter: EcoSure burial society registration](https://www.thereporter.co.ls/?p=7226)
