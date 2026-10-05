# Sudan: Opportunity Research

**Status: practically inaccessible market (legally open, operationally closed). I stopped the research at the accessibility check, as the method requires for conflict-affected markets.**
Researched 2026-10-05. Search budget used: 4 of 4 (the cap for an inaccessible market).

## Accessibility check (decisive)

### Legal position: mostly open, unlike North Korea
- **The comprehensive US embargo is gone.** EO 13761, as amended by EO 13804, revoked the core Sudan sanctions with effect from 12 October 2017. OFAC removed the Sudanese Sanctions Regulations (31 CFR Part 538) from the CFR on 29 June 2018.
  - https://ofac.treasury.gov/faqs/topic/1566/print
  - https://www.arentfox.com/newsroom/alerts/so-long-sudan-sanctions-final-wrap
  - https://www.akingump.com/en/news-insights/trump-administration-lifts-u-s-sanctions-on-sudan-important.html
- **The State Sponsor of Terrorism designation was rescinded on 14 December 2020.** OFAC then amended the Terrorism List Governments Sanctions Regulations, so transactions with the Government of Sudan are no longer prohibited under them.
  - https://ofac.treasury.gov/faqs/836
- **Remaining US measures are targeted (list-based).** EO 14098 (4 May 2023) covers people who undermine peace, security and stability in Sudan. In June 2023 OFAC issued general licences under it, including GL 3 for agriculture, medicine, medical devices and software updates. In practice this means screening every customer, bank and reseller against the SDN list. That matters because both sides of the war (SAF and RSF) control large parts of the commercial economy, including firms linked to the RSF. The status of EU and UK measures (arms embargo plus targeted listings) is from general knowledge and is *unverified in this session*.
  - https://www.thompsonhinesmartrade.com/2023/06/ofac-issues-new-general-licenses-under-sudan-related-sanctions/
  - https://sanctionlaw.com/?p=4806

### Practical position: closed for a foreign solo founder
1. **The war is in its fourth year (since April 2023).** Fighting destroyed the Central Bank in Khartoum, which had been Sudan's link to SWIFT. RSF fighters held the building for nearly two years. Both warring parties run parallel financial systems outside formal banking.
   - https://sudantribune.com/?p=314398
   - https://www.newsghana.com.gh/sudanese-return-to-barter-as-banking-collapses/
2. **Payment rails have broken down.** The parallel-market rate hit about SDG 7,000 per USD in 2026. Bankak (Bank of Khartoum's app), the main digital channel, has had outages that stopped everyday transactions. In some areas people have gone back to barter and cash shortages are severe. Card schemes and Stripe- or PayPal-style collection of foreign SaaS subscriptions from Sudanese businesses are not realistically available. That last point comes from general knowledge and is *unverified*.
   - https://thecitizen.co.tz/africa/news/sudanese-struggle-to-survive-as-cash-sources-dry-up-4216316
   - https://kuwaittimes.com/sudanese-struggle-to-survive-as-cash-sources-dry-up-amid-war/
3. **Internet access is unreliable.** The RSF has imposed internet shutdowns and cut access to mobile banking. Connectivity in many areas depends on Starlink and other improvised links.
   - https://sudantribune.com/?p=314398
   - https://globalvoices.org/2024/08/20/starlink-in-sudan-a-lifeline-or-war-facilitator/
   - https://www.agbi.com/articles/sudan-telco-network-still-up-despite-escalating-conflict/
4. **Buyers are hard to reach and unstable.** Government and much formal commerce moved to Port Sudan. Small businesses face displacement, currency collapse and confiscation risk. No reliable public registries exist that a remote founder could use to build a prospect list.

**Conclusion:** selling software to Sudan is not legally barred, apart from SDN screening. In practice a foreign solo founder cannot reliably get paid, reach buyers, or count on customers staying in business. I am not recommending any standalone opportunity.

## Watch-list: regulatory triggers that would matter after stabilisation

I found these triggers during the accessibility check but did not research them further. They are **not** scored opportunities.

| Trigger | What it forces | Source | Why it isn't actionable now |
|---|---|---|---|
| Taxation Chamber resumed its **E-Invoice System** (announced 4 May 2026), with a registration form, technical requirements, user guide and an executable client on its e-services portal | VAT-registered firms must issue and transmit e-invoices | https://lookuptax.com/tax-changes/sudan/einvoice-system-resumption-2026 (secondary source; official portal not verified) | The state supplies the client software. I have not confirmed whether there is an API for third-party integration. Buyers cannot pay. Local ERP vendors would likely move first. |
| **Advance Cargo Declaration (ACD)**, in force from 1 January 2026: importers submit shipment data before goods arrive | Each shipment needs pre-arrival data from importers and forwarders, mostly at Port Sudan | https://sudantribune.com/?p=309727 (Importers' Chamber press conference, Port Sudan, 22 Jan 2026) | ACD is usually run through a contracted platform (*unverified for Sudan*). Customs runs on ASYCUDAWorld. Forwarders are in Port Sudan in a war economy. |
| ASYCUDAWorld e-payment for customs | Electronic duty payment | https://asycuda.org/wp-content/uploads/2020/ASYCUDA%20Compendium%202020%20-%20Sudan.pdf | This is an existing government system with no room for a third party. |

ACD and e-invoicing together could support a shipment-to-compliance router for importers and forwarders in Port Sudan once the war ends. A better route might be to sell it as an add-on to a product built for Egypt (similar e-invoice and ACI/ACID patterns, and Arabic-speaking buyers). That is speculation and has not been checked.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Import/export agents and customs brokers | ACD pre-arrival filing and ASYCUDA clearance | Inaccessible (watch-list) | Real 2026 trigger, but buyers cannot pay and the market is at war |
| SMEs with VAT obligations | E-invoice system restart (May 2026) | Inaccessible (watch-list) | Government provides a free client; payment rails and stability are missing |
| Banking and remittance-dependent businesses | Digital payments and reconciliation | Rejected | Bankak outages, cash shortages and barter. The issue is infrastructure, not software |
| Humanitarian and agricultural supply chains (GL 3 sectors) | Supplier documentation and sanctions screening for NGO procurement | Rejected | The buyers are international NGOs and UN agencies, which means enterprise procurement and established tools. This is not a Sudanese SME market |

## Opportunities

None scored. The market fails the accessibility check.

## Rejected after competitor research
- **E-invoice connector for Sudanese SMEs.** Killed by the Taxation Chamber's own free executable client, combined with having no way to collect payment.

## Attractive problem, poor distribution
- **Port Sudan importer ACD and customs-document router.** The mandatory, per-shipment trigger from January 2026 is real. But buyers cannot be reached or paid, so distribution fails. Revisit only after a ceasefire, and preferably as an add-on to an Egypt or Red Sea product.

## Too competitive
- None identified (not researched in depth).
