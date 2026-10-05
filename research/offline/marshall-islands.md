# Marshall Islands (RMI): Offline-Industries Pass

**Date:** 2026-10-05
**Market class:** Microstate. About 42,000 people at the 2021 census (figure from the existing country report, not re-checked). Formal private business is concentrated in Majuro and Ebeye. The economy is USD-based and runs mainly on Compact grants, fishing-licence fees and the offshore ship and corporate registry.
**Search budget:** 8. The run was interrupted twice by API usage limits and resumed. 3 searches are logged in the final session. Searches made before the interruptions could not be recovered. I kept the resumed run short so the total stays within 8.
**Bottom line:** No quiet industry in the RMI can support a standalone indie software product. The regulated quiet trades are: copra buying, which has one state buyer (Tobolar); household employers, who file quarterly to the Social Security Administration (MISSA); local-government business licences; taxis; and coastal fishers. In each case the buyer is either a single state entity or a pool of tens to low hundreds of informal operators. Their obligations are simple, once a year or quarterly, and filed at a counter. Section 2 is therefore empty on purpose.

I have not repeated the angles in `research/countries/marshall-islands.md`: the MIMRA port-entry web app, RMI-flag maritime compliance, the Bill 103 wage-tax change, and the possible gross-revenue-tax-to-VAT reform.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Copra buying and producers (outer islands to Tobolar) | The Tobolar Copra Processing Authority Act 1992 makes Tobolar the only copra processor. A 2023 amendment requires a full copra collection cycle from the outer atolls every quarter, coordinated with MI Shipping Corporation. | Collection is on field-trip ships, with paper weigh slips and cash price per pound (25c/lb at its peak, press reports). There are no software listings. | 1 buyer (Tobolar). Producers are thousands of households (estimate). | Reject | The only buyer is a state authority, so this would be a donor or government procurement. Producers would never pay. |
| Household employers (domestic workers, caregivers) | MISSA quarterly Social Security and Health Fund returns, due within 10 days of quarter end. Wage-tax withholding. | Quarterly paper or counter returns (filing channel unverified). Whether domestic workers are covered was not found. | Unknown, small (estimate) | Reject | Not formalised. Where it is, a quarterly return for one employee is trivial and an accountant does it. |
| Small employers' quarterly MISSA and wage-tax filing | Same quarterly returns. The contribution rate depends on the source (about 7–8% employer share plus 3.5% Health Fund, capped per quarter). | Done by local bookkeepers. No RMI module was found in payroll SaaS (unverified). | A few hundred employers (country report estimate) | Reject | The buyer pool is too small. Already covered as a tax add-on in the country report. |
| General shops and traders (local-government business licence) | The Local Government Tax and Fees Act 1989 allows councils (e.g. MALGov, KALGov) to charge business licence fees "sufficient to cover registration". The 2013 amendment ended the first-year exemption for FIBL holders. | Annual licence paid at the counter. No public register was found. | Several hundred in Majuro and Ebeye (estimate) | Reject | Annual, cheap and filed at a counter. There is nothing to automate. |
| Foreign-owned small businesses (FIBL) | Foreign Investment Business Licence under the FIBL Regulations 2000 (amended): licence and renewal with the Registrar. | Paper application to the Registrar of Foreign Investment (per the regulations PDF hosted on the RMI courts site). | Low hundreds (estimate) | Reject | Annual. Handled by local lawyers and consultants. Too small a pool. |
| Taxis (Majuro, Ebeye) | Vehicle registration and taxi permits (Majuro taxis are numerous, with a flat fare per ride, from general knowledge) | Done at the counter. Cash fares. | Low hundreds of cabs (estimate, unverified) | Reject | Licensing is once a year with no per-trip reporting. Drivers have low incomes. |
| Coastal and artisanal fishers and fish sellers | Coastal fisheries management under MIMRA, with data collected by enumerators (not verified in this pass) | Roadside and market sales | Thousands of individuals (estimate) | Reject | The data buyer is MIMRA or a donor, not the fisher. |
| Fisheries agents (port entry, transshipment) | MIMRA port-entry requests | MIMRA already runs its own web app (country report) | Handful | Reject | A government tool already exists, and the country report already covers it. |
| Scrap metal / second-hand dealers | No police dealer register found | Scrap is exported in occasional shipments (unverified) | Very few | Reject | No obligation was found. |
| Livestock (pigs, poultry), slaughter and butchers | No recurring filing found | Kept at household level | Small | Reject | There is no regulated trade. |
| Funeral and burial | Death registration with the civil registry | Done at the counter. Burial is customary, on family land (weto). | No commercial funeral sector of note | Reject | No commercial operators exist. |
| Handicraft sellers (weaving, outer-island producers) | No licence or reporting obligation found | Sold through co-ops and stalls | Hundreds of producers (estimate) | Reject | Unregulated, so there is no compliance trigger. |

## 2. Strongest opportunities

None. No candidate reaches the brief's bar of identifiable buyers at scale, recurring mandatory reporting, willingness to pay and a concrete offline channel. I have not padded this section with template entries.

The only angle that could ever matter is one module inside a Pacific-wide tool validated first in Fiji or PNG, for example a quarterly social-security-plus-wage-tax return pack for micro-employers. In the RMI that would be sold through the RMI Chamber of Commerce and the handful of Majuro accounting practices, and it would almost certainly need a local partner. Indicative standalone score: 1–2/10.

## 3. Rejected

- **Copra collection and purchase records (Tobolar quarterly cycle).** There is a real 2023 legal trigger, but there is one buyer, Tobolar, which is a state authority. Any digitisation goes through Tobolar or donor procurement, not indie SaaS.
- **MISSA quarterly return helper for small and household employers.** The obligation is real and quarterly, but there are only a few hundred employers. Bookkeepers already do it, so it is an add-on at best (see the tax add-on in the country report, scored 2/10).
- **Local-government and FIBL licence renewal tracker.** Licences are renewed once a year at a counter. Local lawyers and consultants handle the FIBL cases. There is nothing to sell.

## 4. Method notes

- PacLII worked well for regulator-first searches ("<topic> act Marshall Islands paclii"). It returned the Local Government Tax and Fees Act, the FIBL Regulations and the 2023 Tobolar amendment directly. The Marshall Islands Journal and Marianas Variety are the main sources of local news on copra and shipping.
- Searches for registers and counts found nothing. The RMI publishes no public licensing registers, so every market count above is an estimate.
- Marshallese-language queries were not attempted. Statutes and forms are in English, and the budget was small.

## Sources

- Local Government Tax and Fees Act 1989, PacLII: https://paclii.org/mh/legis/consol_act/lgtafa1989271
- Local Government Tax and Fees (Amendment) Act (No. 2) 2013: https://pacliirms.austlii.edu.au/mh/legis/num_act/lgtafa22013378
- FIBL Regulations 2000 (amended), PacLII: https://paclii.org/mh/legis/sub_leg/fibla1990fiblr2000867 ; https://rmicourts.org/wp-content/uploads/2020/05/FIBL-Regulations-2000-Amended.pdf
- Tobolar Copra Processing Authority (Amendment) Act 2023: https://pacliirms.austlii.edu.au/mh/legis/num_act/tcpaa2023pl732023558.pdf
- Tobolar Copra Processing Authority Act 1992 (InforMEA): https://www.informea.org/en/legislation/tobolar-copra-processing-authority-act-1992
- Marshall Islands Journal, "Copra in real need of a fix": https://marshallislandsjournal.com/copra-in-real-need-of-a-fix
- Marianas Variety, "Sporadic shipping hurts Marshalls copra industry": https://www.mvariety.com/?p=125914
- US SSA, Social Security Programs Throughout the World, Marshall Islands: https://socialsecurity.gov/policy/docs/progdesc/ssptw/2016-2017/asia/marshall-islands.pdf
- Expanship, Marshall Islands payroll tax (quarterly MISSA due dates): https://www.expanship.com/mh/blog/marshall-islands-payroll-tax
