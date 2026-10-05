# Iran: Country Research Report

**Status: NOT ACCESSIBLE. No opportunities recommended.**
**Date:** 2026-10-04
**Search budget used:** 2 searches. The second was refused ("usage limit"), so per the agent instructions research stopped there. Statements below that do not cite a source fetched in this session are marked "unverified (background knowledge)".

---

## Accessibility check (decisive)

A foreign solo founder cannot legally and practically sell compliance or workflow SaaS to Iranian businesses. The research therefore stopped at this step, as `agent-instructions.md` section 4 requires.

1. **US sanctions (ITSR, 31 CFR Part 560).** Exporting services or software from the US or by a US person to Iran is broadly prohibited. The main general authorization for software is GL D-2, now codified at 31 CFR § 560.540 (May 2024). It covers only services and software *incident to the exchange of communications over the internet*, such as messaging, email, social networking and browsing, plus cloud services that support those. B2B compliance, accounting, ERP or reporting SaaS is not covered and would need a specific OFAC license. OFAC encourages such applications, but licenses are granted for internet-freedom purposes, not commercial vertical SaaS.
   - https://ofac.treasury.gov/faqs/updated/2024-05-16
   - https://sanctionsnews.bakermckenzie.com/ofac-amends-the-iranian-transactions-and-sanctions-regulations/
   - https://sanctionsnews.bakermckenzie.com/ofac-issues-updated-iran-general-license-related-to-certain-services-software-and-hardware-for-communications-over-the-internet-and-new-related-faqs/
2. **Non-US founders are also exposed.** US secondary sanctions risk applies, and the founder's whole payment and hosting stack is US-linked (Stripe, Paddle, AWS, GCP, GitHub, Apple and Google app stores), and all of these exclude Iran. *Unverified (background knowledge).*
3. **UN, EU and UK sanctions.** The E3 triggered the JCPOA "snapback", and UN sanctions were reimposed around late September 2025. The EU and UK then reinstated their earlier Iran restrictive measures, including financial and banking restrictions. *Unverified (background knowledge). The confirming search was refused.*
4. **Payment rails.** Most Iranian banks are cut off from SWIFT. Visa and Mastercard do not operate there. Iran's domestic Shetab card network is unreachable from outside, so collecting recurring subscriptions in a compliant way is effectively impossible. *Unverified (background knowledge).*
5. **Internet restrictions and data localization.** The state runs heavy filtering through the "National Information Network" (NIN, a state-controlled domestic network), and there were extended shutdowns in 2025. Many foreign SaaS domains are blocked or throttled. Government portals that a compliance product would integrate with are often reachable only from inside Iran: the tax authority's Moadian e-invoicing system (*samane-ye moadian*), the social security system (Tamin Ejtemaei), the customs comprehensive system (EPL) and the Comprehensive Trade System (*samane-ye jame-e tejarat*). *Unverified (background knowledge).*

**Conclusion:** Iran fails three tests: legality (US, UN, EU and UK sanctions), collecting payment, and technical access to portals. Any structural gap is already filled by domestic vendors who face no foreign competition, such as Sepidar, Hamkaran System and Mahak accounting/ERP, which are integrated with Moadian. *Unverified (background knowledge).*

---

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| All SMEs (cross-industry) | Moadian e-invoicing / tax-authority submission | Inaccessible | Sanctions; domestic ERP vendors already integrated; portal is domestic-only (unverified) |
| Importers / customs brokers | Customs EPL plus Comprehensive Trade System registration | Inaccessible | Sanctions; trade with Iran itself is restricted for US/EU/UK persons |
| Payroll bureaus / employers | Monthly social security (Tamin Ejtemaei) lists | Inaccessible | Sanctions; local payroll software dominates (unverified) |
| Pharmacies | Controlled-drug and TTAC (Food and Drug Administration track-and-trace) reporting | Inaccessible | Sanctions; government-provided systems; humanitarian exemptions cover goods, not SaaS sales |

No deeper per-industry research was done, because the market fails the accessibility gate.

---

## Opportunities

None. A foreign solo founder cannot legally sell to or get paid by Iranian businesses.

## Rejected after competitor research

- **Moadian e-invoicing connector:** killed by sanctions first. Even ignoring sanctions, the domestic incumbents (Sepidar, Hamkaran, Mahak and others, unverified) plus authorized "trusted companies" (*sherkat-haye moatamad*, licensed intermediaries for the tax system) already cover it.

## Attractive problem, poor distribution

- None identified. Iranian regulatory pain (Moadian, customs, social security) is likely real but cannot be reached.

## Too competitive

- Not assessed. The market is inaccessible.

## Add-on note

Iran cannot be served as an add-on to a neighbouring market. Diaspora-facing tools in Turkey, the UAE or Armenia that touch Iranian counterparties would carry the same sanctions exposure.
