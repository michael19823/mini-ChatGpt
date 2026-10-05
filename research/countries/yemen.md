# Yemen: Country Research Track

**Verdict: Inaccessible for a foreign solo founder (as of 2026-10). No standalone opportunity is recommended.**

Search budget used: 4 of 4 (inaccessible / conflict market tier).

## Accessibility check

| Factor | Finding | Source |
|---|---|---|
| US terrorism designation | Ansar Allah (Houthis) was redesignated a Foreign Terrorist Organization on 4 March 2025, following EO 14175 (22 Jan 2025). This brings in 18 U.S.C. §2339B "material support" criminal liability. The Houthis control Sana'a, Hodeidah and most of the population. | [USNI report to Congress](https://news.usni.org/2025/03/13/report-to-congress-on-houthi-terrorism-designation), [FDD](https://www.fdd.org/analysis/policy-briefs/2025/03/06/u-s-relists-yemens-iran-backed-houthis-as-foreign-terrorist-organization/) |
| OFAC actions | Successive designations in 2025. The largest, on 20 June 2025, targeted importers, oil traders, entities and vessels. General licenses cover only agricultural goods, medicine, medical devices, replacement parts and software updates, remittances, and diplomatic missions. None covers selling new commercial SaaS to businesses that may deal with or be taxed by Ansarallah. | [OFAC FAQ 1219](https://ofac.treasury.gov/faqs/1219), [HSF Kramer](https://www.hsfkramer.com/notes/sanctions/2025-posts/ofac-takes-single-largest-action-against-iran-backed-terrorist-group-ansarallah) |
| Counterparty screening | Since March 2025, every cargo receiver, port operator and financial intermediary must be screened against the SDN list. Businesses in the north pay taxes and fees to Houthi authorities, so almost every northern B2B customer is a material-support risk. | [TradeWinds](https://tradewindsnews.com/containerships/yemen-threatens-ban-on-shipowners-as-cargo-calls-resume-at-houthi-port/2-1-1410229) |
| Split monetary system | Central Bank of Yemen has had rival branches in Aden and Sana'a since 2016. CBY-Aden moved bank headquarters to Aden, forced local transfers onto its UNMONEY network in June 2024, banned 12 unlicensed e-wallets, and moved the Deposit Insurance Institution to Aden in July 2025. Two currencies and two regulators split the market. | [Sanaa Center](https://sanaacenter.org/publications/policy-research/16974), [Sanaa Center Yemen Review](https://sanaacenter.org/the-yemen-review/july-sept-2024/23500), [CBY-Aden](https://english.cby-ye.com/news), [Yemen Monitor](https://www.yemenmonitor.com/?p=146550) |
| Payment rails | PayPal does not operate in Yemen. Stripe does not support Yemen (it is not on Stripe's supported-country list; inferred, not directly confirmed in search). International card acceptance is very limited, so collecting recurring SaaS fees from Yemeni businesses is impractical. | [PayPal in Yemen overview](https://sophiecress.com/blog/paypal-in-yemen-what-you), [Wise Yemen page](https://wise.com/gb/hub/payment-methods/yemen) |
| Trade documentation layer | Imports to the Red Sea ports need UNVIM clearance (UN mechanism in Djibouti, desk review of documents). Customs runs UNCTAD ASYCUDA. Both are UN/government systems, and no third-party API access was found. | [Devex UNVIM job](https://www.devex.com/jobs/martime-cargo-clearance-specialist-734725), [UNCTAD ASYCUDA report 2025](https://unctad.org/publication/asycuda-report-2025) |

**Conclusion:** A foreign solo founder cannot practically or legally sell compliance SaaS to Yemeni businesses at scale. The north brings FTO/material-support exposure. The south (government areas under CBY-Aden) is small, has no viable card or subscription payment rails, and depends on volatile conflict-era regulation. Yemen is treated as inaccessible.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Import/export agents, customs brokers | UNVIM clearance pack + ASYCUDA declaration + SDN screening of counterparties | Reject (inaccessible) | Mandatory, document-heavy and painful, but importers into Hodeidah are the exact population OFAC targeted in June 2025. Payment rails are absent and UN/customs systems are closed. |
| Money exchangers / e-wallet operators | CBY-Aden licensing and UNMONEY transfer reporting | Reject (inaccessible) | Licensed-entity compliance in a split-central-bank, sanctions-exposed financial sector. Only bank-grade core vendors are realistic suppliers, and the regulator's rules shift with the conflict. |
| Pharmacies / medicine importers | Registration of imported drugs and batch documentation | Reject | Medicine is covered by a general license, but buyers are informal, can't pay in USD by card, and the regulator is duplicated across north and south. |
| Humanitarian implementing partners (local NGOs) | Donor reporting, beneficiary lists, vendor vetting | Poor distribution / not Yemen-specific | Real recurring pain, but buyers are international NGOs using global tools (Kobo, ActivityInfo, Salesforce NPSP; *names from general knowledge, not verified in this search*). Better addressed globally than as a Yemen product. |
| Private schools / clinics (Aden, Mukalla) | Ministry licensing and reporting | Reject | Small market, paper-based regulator, no payment rails, no 2025–2026 regulatory trigger found. |

## Opportunities

None meets the brief's bar. Every candidate fails accessibility (sanctions or payment rails) before pain or competition matters.

## Rejected after competitor research

- **Import clearance document pack (UNVIM + customs):** killed by OFAC/FTO exposure for Hodeidah importers and by UN/ASYCUDA systems that third parties cannot access. Freight forwarders and clearing agents in Djibouti and Dubai already do this work manually as a service.
- **Exchange-house transfer reporting:** killed by CBY-Aden's mandated UNMONEY network, which is regulator-provided infrastructure, plus bank-grade core-banking vendors.

## Attractive problem, poor distribution

- **Sanctions/SDN counterparty screening for Yemen-trading SMEs:** the pain is real after March 2025, but the buyers are traders and shippers in UAE, Saudi Arabia, Oman and Djibouti, not in Yemen. Global screening tools already serve them (e.g. Dow Jones, LexisNexis, ComplyAdvantage; *general knowledge, not verified here*). At most this could be a Yemen-specific add-on for a Gulf-based trade-compliance product.
- **Local NGO donor reporting:** the work is recurring, but the market is dominated by international NGOs' global tools.

## Too competitive

- None identified. The market never got as far as competitive analysis.

## Add-on note

Any Yemen-related work is best served from a UAE, Saudi or Djibouti trade-compliance product, for example Yemen-specific UNVIM/SDN checklists for Gulf freight forwarders. It does not work as a standalone Yemeni market.
