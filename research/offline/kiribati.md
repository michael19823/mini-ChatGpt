# Kiribati: Offline-Industries Pass

**Date:** 2026-10-05
**Market class:** Microstate, about 120k–130k people. More than half of GDP comes from the public sector. The Chamber of Commerce & Industry lists 200+ members (see the existing country report).
**Search budget:** 8. The run was interrupted by an API limit and then resumed. 4 searches are logged in this session. Searches made before the interruption could not be recovered, but the total stayed within 8.
**Bottom line:** No quiet industry in Kiribati can support a standalone indie software product. The regulated quiet trades do exist: kava sellers, copra-buying co-operatives, seafarer and labour-mobility recruitment, and fishermen. But each has a buyer pool of tens to low hundreds of operators. Fees are tiny (a kava bar licence costs about AUD 150). The receiving body is usually a counter clerk or a single state entity, and filing is done verbally or on paper. Most of these trades keep simple registers that a paper book handles well enough. Section 2 is therefore empty on purpose.

This report does not repeat the opportunities already covered in `research/countries/kiribati.md`: fisheries ERS/VMS, ASYCUDA customs, the VAT return and non-resident VAT.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Kava bars, kava retail and wholesale | The Kava Act 2018 requires a Kava Wholesale, Retail or Bar Licence to sell kava. The Ministry of Health inspects the premises (toilets, cleaning tools), then the owner pays a fee of about AUD 150 to the Tarawa council. | The licence is paid at the council counter after a physical health inspection. There are no software listings. | Kiribati became Vanuatu's top kava export market in 2024 at 1.56M bottles (Vanuatu Daily Post). Reports say "each village has a kava bar". The number of bars is unknown, likely low hundreds (estimate). | Reject | It is a once-a-year licence with a fee of about AUD 150 and no recurring reporting found. The owners are informal village operators, so there is nothing to pay for. |
| Copra-buying co-operatives (Copra Marketing Ordinance, Copra Tax Act 1986) | Societies that buy copra from primary producers must keep a register of the copra bought and the amounts paid. A copra tax applies to these sales. | The registers are statutory paper ledgers kept by island co-ops. The single designated buyer is state-linked (KCCS/KCMC, unverified detail). | One designated marketing society network across the outer islands. Number of buying points not verified. | Reject | Effectively a single buyer: one state-linked co-op network. That is an enterprise or donor procurement, not indie SaaS. Copra price subsidy schemes are run by the government. |
| Seafarer recruitment (MTC graduates to German shipping via SPMS) | STCW certification, crew contracts, remittances | Done by a long-standing agency (SPMS) and the Marine Training Centre, a division of the Ministry of Employment. | 1 recruiting agency plus 1 government training centre (Wikipedia/ANU) | Reject | Too few buyers, and it runs on existing manning-agency systems. |
| Labour mobility (PALM Australia, RSE New Zealand) | Worker registration, pre-departure, employer matching | The government work-ready pool is held by the Ministry of Employment (not verified in this pass). | Government-run. The approved employers are Australian or New Zealand firms. | Reject | The obligations fall on Australian and New Zealand employers, who already have their own tools. Kiribati is not where the buyer is. |
| General shops and traders (Tarawa Urban Council and island councils) | Annual business licence. The fee is set by the council Treasurer after a verbal description of the business. | The Kiribati Trade Portal says the applicant only has to "verbally explain" the business to the Treasurer. | Several hundred on South Tarawa (estimate) | Reject | The process is verbal and done once a year. There is nothing to digitise and no one would pay. |
| Domestic workers / household employers | KPF (Kiribati Provident Fund) contributions for employees | Informal. Household employment is mostly unregistered (assumption). | Unknown | Reject | The market is not formalised and there is no enforcement trigger. |
| Scrap metal / second-hand dealers | No police dealer register found | Scrap is exported in occasional donor-backed clean-up shipments (unverified) | Very few | Reject | No obligation was found. |
| Small-scale fishermen and fish sellers (market and roadside) | Fish-market hygiene. Possible future catch data under coastal fisheries programmes. | Sold at the roadside and in markets. Data is collected by Ministry of Fisheries enumerators. | Thousands of individuals (estimate) | Reject | The buyer is a donor or ministry, not the fisher. Fishers would never pay. |
| Livestock (pigs, poultry) and slaughter | Minimal, mostly household-level | Paper-based or none | Small | Reject | There is no recurring filing obligation. |
| Funeral and burial | Death registration with the civil registry | Done at the counter. Burial is customary, on family land. | No commercial funeral sector of note | Reject | No commercial operators exist. |
| Taxi and minibus (South Tarawa) | Vehicle and operator licensing | Done at the counter | Low hundreds of minibuses (estimate) | Reject | Annual licensing only, no per-trip reporting, and buyers have very low incomes. |

## 2. Strongest opportunities

None. No candidate reached the brief's bar of identifiable buyers at scale, recurring mandatory reporting, willingness to pay and an offline channel. I have not padded this section with template entries. If any Kiribati angle ever matters, it would be one country inside a Pacific-wide tool validated first in Fiji or PNG, such as a kava-licence and premises-inspection tracker sold to councils and ministries. That would be a government sale, not an indie SMB product. Indicative standalone score: 1–2/10.

## 3. Rejected

- **Kava bar compliance (licence plus health inspection) tracker.** The kava boom is real: Kiribati was Vanuatu's top kava market in 2024. But licensing is a once-a-year counter visit costing about AUD 150, operators are informal, and there is no recurring report. The substitute is the council counter and a paper receipt.
- **Copra purchase register for co-operatives.** The ledger is required by statute, but there is effectively one buyer network linked to the state. Any digitisation would be done through donor or government procurement.
- **Seafarer and labour-mobility workflow.** The obligations sit with foreign employers and one long-standing agency, so there are no local SMB buyers.
- **Council business-licence renewal helper.** The application is verbal and the fee is set by the Treasurer. There is nothing to automate.

## 4. Method notes

- PacLII (the Pacific legal database) is the most productive regulator-first source. Searching for "<industry> Act Kiribati" returns the statute directly, as with the Kava Act 2018 and the Copra Tax Act. The Kiribati Trade Portal describes counter procedures well.
- Searches for counts and registers ("number of licensed X") returned nothing. Kiribati publishes almost no public licensing registers, so any market count is an estimate.
- Local-language (Gilbertese) queries were not attempted. The regulatory text is in English, and the budget was small.

## Sources

- Kava Act 2018 (Kiribati), PacLII: https://rms.paclii.org/ki/legis/num_act/ka201852 ; https://pacliirms.austlii.edu.au/ki/legis/num_act/ka201852.pdf
- Vanuatu Daily Post, "1.56 million bottles of kava: Kiribati becomes Vanuatu's top kava market in 2024": https://www.dailypost.vu/news/1-56-million-bottles-of-kava-kiribati-becomes-vanuatu-s-top-kava-market-in-2024/article_027019bc-09c2-5857-8c05-444f55a576f6.html
- Kiribati Trade Portal, business licence procedure (Tarawa Urban Council): https://kiribati.tradeportal.org/procedure/53/step/102?l=en
- Copra (Marketing) Ordinance, PacLII: https://paclii.org/ki/legis/consol_act/co211
- Copra Tax Act 1986, PacLII: https://pacliirms.austlii.edu.au/ki/legis/num_act/cta1986111.pdf
- World Bank, Kiribati coconut industry reform ("Cracking the Nut"): https://openknowledge.worldbank.org/bitstreams/fca72ba6-a6c4-432c-82ef-9140eb650289/download
- Marine Training Centre (Wikipedia): https://en.wikipedia.org/wiki/Marine_Training_Centre
- Devpolicy, "Has COVID-19 ended seafaring for Kiribati?": https://devpolicy.org/has-covid-19-ended-seafaring-for-kiribati-20211222/
- ANU Press, Transnationalism of merchant seafarers in Kiribati and Tuvalu: https://press.anu.edu.au/downloads/press/p32931/mobile/ch09.html
