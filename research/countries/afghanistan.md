# Afghanistan: Opportunity Research

**Date:** 2026-10-04
**Search budget used:** 3 of 4 (I treated Afghanistan as an inaccessible market)
**Verdict:** **INACCESSIBLE for a foreign solo software founder.** No opportunities are recommended. I stopped after the accessibility check, as the agent instructions (section 4) require.

## Accessibility check

| Factor | Finding | Effect |
|---|---|---|
| Sanctions | The Taliban and the Haqqani Network are blocked under US Global Terrorism Sanctions Regulations. OFAC General Licenses 14–20 (2021–2022) cover humanitarian, NGO and some commercial activity, plus exports of agricultural commodities, medicine, medical devices, parts and **software updates**. GL 20 does **not** allow financial transfers to the Taliban, the Haqqani Network or entities they own or control (tax, duty and utility payments are exempt). The de facto government controls ministries, regulators and many state enterprises. Any compliance or reporting SaaS built around government portals would therefore deal directly with blocked parties. I did not verify whether OFAC changed these licenses in 2025–2026. | Very high legal risk. Every B2B buyer would need sanctions screening for Taliban ownership or control, which a solo founder cannot do in practice. |
| Payment rails | SWIFT and correspondent banking for Afghan banks were largely suspended after August 2021. Da Afghanistan Bank's foreign reserves were frozen. International banks de-risked, so payments through banks are "few and far between". Hawala is the everyday substitute. Stripe and PayPal do not support Afghanistan (from general knowledge; I did not re-verify this in this session). | There is no practical, legitimate way to collect recurring SaaS subscriptions. |
| Internet | On 29 Sep 2025 the Taliban ordered a nationwide fibre-optic shutdown on the supreme leader's instructions. A full blackout followed from about 29 Sep to 1 Oct 2025, with connectivity falling to about 14% of normal. Rural fibre had already been cut for weeks before that. Banks, customs and ministries lobbied for exemptions. | SaaS availability is politically fragile. Internet can be cut by decree at any time. |
| Regulatory trigger | Under the de facto authorities, regulatory change mostly means restrictions (on women's work, NGOs and the internet), not new digital reporting mandates with portals that a vendor could integrate with. I found no source for a 2025–2026 SME e-reporting mandate. | There is no clear "why now". |

## Industries screened (desk screen only, no deep diligence because the accessibility gate failed)

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Customs brokers / import-export agents | ASYCUDA customs declarations, transit documents to Pakistan, Iran and Central Asia | Rejected | Customs is a Taliban-run authority (sanctions exposure). Buyers cannot pay in USD/EUR by card or SWIFT. Fibre-dependent. |
| Agricultural exporters (dried fruit, saffron, carpets) | Phytosanitary and certificate-of-origin packs for buyers in India, Pakistan, the UAE and the EU | Rejected | Few formal exporters, payment rails are broken, and it is not clear the buyer can be screened as a non-blocked party. |
| Pharmacies / medical labs | Drug import registration, controlled-drug records | Rejected | The NGO/humanitarian channel dominates and is donor-funded, and any regulator integration means a de facto ministry. |
| Microfinance / money service providers (hawala) | DAB licensing and AML reporting | Rejected | High AML/sanctions exposure. A solo founder cannot take that on. |
| NGOs / humanitarian implementers | Donor reporting, OFAC/UN compliance evidence | Attractive problem, poor distribution | The real buyers are international NGOs headquartered abroad. Global grant-management and compliance tools already serve them. This is not an Afghanistan-specific market. |

## Opportunities

None recommended. Afghanistan fails the accessibility gate on three counts: sanctions exposure to blocked government entities, no usable payment rails, and politically imposed internet shutdowns.

## Rejected after competitor research

None reached that stage. Every idea was killed at the accessibility gate, not by a competitor.

## Attractive problem, poor distribution
- **Donor/OFAC compliance evidence for NGOs operating in Afghanistan.** Sell this to INGO headquarters as part of a general humanitarian-compliance tool, not as an Afghanistan product. Generic grant-management software and in-house compliance teams already cover it.

## Too competitive
- None identified.

## Add-on potential
- Afghanistan cannot realistically be served as an add-on to a neighbouring market (Pakistan, Central Asia) because the same sanctions and payment barriers apply. Its traders who cross borders sit in Pakistan, the UAE or Uzbekistan, and they are best served through those markets' own compliance products.

## Sources
- OFAC Afghanistan-related general licenses and guidance: https://ofac.treasury.gov/media/913001/download , https://ofac.treasury.gov/media/922136/download , https://ofac.treasury.gov/media/18171/download
- US Treasury press release on Afghanistan general licenses: https://home.treasury.gov/news/press-releases/jy0372
- Law firm summaries of the GLs: https://www.wiggin.com/wp-content/uploads/2021/10/WD21-Advisory-OFAC-Issues-New-General-Licenses-Authorizing-Limited-Work-with-Taliban-10.5.21_v1-2.pdf , https://masspointpllc.com/insights/uploads/Sanctions.Afghanistan-OFAC-Licenses.MassPointPLLC.pdf
- Fibre-optic shutdown order (Afghanistan International): https://www.afintl.com/en/202509294253 , https://www.afintl.com/en/202509175353
- Nationwide blackout (Sep–Oct 2025): https://www.newsonair.gov.in/taliban-imposes-nationwide-internet-mobile-network-shutdown-in-afghanistan , https://mhebtw.mheducation.com/2025/10/16/afghanistans-internet-blackout/
- Banking isolation and hawala: https://files.acquia.undp.org/public/migration/iicpsd/Policy-Brief-Afghan-Banking-and-Financial-System-Situation-Report.pdf , https://blogs.worldbank.org/en/endpovertyinsouthasia/rethinking-payments-afghanistan
