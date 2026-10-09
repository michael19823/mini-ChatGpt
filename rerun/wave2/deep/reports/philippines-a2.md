# Philippines A2: BSP and AMLC compliance pack for money changers (MC/FXD)

## Summary

**Verdict: no-go as a standalone software business. Score: 3/10.**

The duty is real, current, and getting stricter. BSP Circular 1206 (Dec 2024) moved all money service business (MSB) rules into the new "M-Regulations" ([BSP Circular 1206](https://www.bsp.gov.ph/Regulations/Issuances/2024/1206.pdf)). BSP Circular 1222 (Oct 2025) then added a formal "reporting governance framework", daily fines for bad or late reports, and a one-year observation period before sanctions start ([BSP Circular 1222](https://www.bsp.gov.ph/Regulations/Issuances/2025/1222.pdf)). That gives a dated trigger around late 2026. The killer is market size. In 2022 there were only 743 MSB head offices in the whole country, covering all MSB types; the other 6,841 registrations were branches ([Philstar, 2023](https://philstar.com/business/2023/07/05/2278647/2-money-changers-closed)). Fines for small firms are low (PHP 150 a day), and AMLC filing is free. Even with every small changer signed up, a SaaS would earn roughly USD 100-200k a year. A realistic share would earn a fraction of that. The idea works better as a side module of a broader BSP-supervised non-bank compliance tool (pawnshops plus MSBs), or as a small compliance retainer service.

## Duty

**Legal basis (BSP side)**
- BSP Circular 1206, s. 2024 (dated 23 Dec 2024; MB Res. 1362 of 28 Nov 2024) deletes MORNBFI Secs. 901-N and 902-N. It replaces them with the M-Regulations for remittance transfer companies (RTCs), money changers and FX dealers (MC/FXDs), e-money issuers and VASPs ([Circular 1206 PDF](https://www.bsp.gov.ph/Regulations/Issuances/2024/1206.pdf)).
- Licence types under Circular 1206: type E is a large MC/FXD, with average monthly network volume of at least PHP 50M and capital of at least PHP 10M. Type F is a small MC/FXD, below PHP 50M a month and below PHP 10M capital. Type B is a small remittance agent, below PHP 75M a month ([Circular 1206](https://www.bsp.gov.ph/Regulations/Issuances/2024/1206.pdf)).
- Fees for type F: PHP 20,000 one-time registration, plus a PHP 20,000 annual service fee due by March each year. Each extra office pays a PHP 1,000 supplemental fee ([Circular 1206](https://www.bsp.gov.ph/Regulations/Issuances/2024/1206.pdf)).
- Mandatory AML/CFT seminar: before operations start, the owner, the overall head of the MSB and the head of compliance must attend one, run by BSP, AMLC or a "reputable training provider" ([Circular 1206](https://www.bsp.gov.ph/Regulations/Issuances/2024/1206.pdf)).
- Sales of foreign currency are capped at USD 10,000 per transaction and USD 50,000 per customer per month. The changer must collect an application form and supporting documents. Higher limits need BSP approval ([Circular 1206](https://www.bsp.gov.ph/Regulations/Issuances/2024/1206.pdf); section number unclear in the OCR text, likely 105-M (unverified)). Per-customer monthly tracking is a concrete software job.
- AML: Sec. 201-M applies Part 9 of the Q-Regulations and RA 9160 (AMLA) to MSBs. It requires a Money Laundering and Terrorist Financing Prevention Program (MTPP), customer due diligence, covered and suspicious transaction reporting, and record keeping. Registration requires proof of provisional AMLC registration ([Circular 1206](https://www.bsp.gov.ph/Regulations/Issuances/2024/1206.pdf)).

**BSP Circular 1222, s. 2025 (new reporting regime)**
- Approved by MB Res. 821 of 14 Aug 2025. It is signed in late October 2025 (the exact day is illegible in the scan) and amends Secs. 151-M to 154-M ([Circular 1222 PDF](https://www.bsp.gov.ph/Regulations/Issuances/2025/1222.pdf)).
- Every MSB must have an "effective reporting system". That means an MIS sized to the business, written report policies approved by the board or proprietor, periodic independent review, and escalation of reporting problems ([Circular 1222](https://www.bsp.gov.ph/Regulations/Issuances/2025/1222.pdf)).
- Daily fines for reports that are late or fail the standards (complete, accurate, adaptable, timely) apply per calendar day until the report is fixed. The scale runs from PHP 150 a day for MSBs with average monthly transactions up to PHP 100M, to PHP 1,500 a day above PHP 7.5B. MSBs that never filed the quarterly transaction report get the top rate of PHP 1,500 ([Circular 1222](https://www.bsp.gov.ph/Regulations/Issuances/2025/1222.pdf)).
- Non-monetary sanctions include Sec. 37 RA 7653 actions, limits on new branches or agents, and suspension of exemptions from transaction limits ([Circular 1222](https://www.bsp.gov.ph/Regulations/Issuances/2025/1222.pdf)).
- Transition: MSBs have one year from effectivity as an "observation period". Sanctions apply to reports falling due after it ends. Effectivity is 15 days after publication ([Circular 1222](https://www.bsp.gov.ph/Regulations/Issuances/2025/1222.pdf)). Penalties therefore start around Nov 2026 (exact publication date unverified).
- Records: daily transaction records kept for at least 5 years, under PFRS/PAS. Records of original entry include money-changing tickets and official receipts ([Circular 1222](https://www.bsp.gov.ph/Regulations/Issuances/2025/1222.pdf)).
- Reports listed in Appendix M-6 are filed by email to dsa-MSB@bsp.gov.ph, only from the MSB's registered email address ([Circular 1222](https://www.bsp.gov.ph/Regulations/Issuances/2025/1222.pdf)):
  - Financial Reporting Package (balance sheet and income statement with schedules): quarterly, within 15 business days.
  - Quarterly report on the total value of money changing/FX transactions: within 10 business days.
  - List of operating, accredited and closed offices: semestral, within 10 business days.
  - IT Profile Report: annually, within 25 calendar days.
  - Audited financial statements: within 120 days. Type F firms do not submit them but must keep them ready, and may use any external auditor.
  - Board resolution or proprietor certification on report signatories: within 3 business days.
  - Report on crimes and losses of PHP 20,000 or more: within 10 days.
  - ML/TF risk event report: within 24 hours.
  - Reputation event report: within 5 days.

**AMLC side**
- MSBs must register separately with the AMLC Secretariat; BSP registration does not cover this ([Verihubs](https://verihubs.com/ph/blog/money-service-business-philippines); [Inquirer](https://business.inquirer.net/?p=223234)). Registration runs through the AMLC portal and includes a key exchange and a notarised Transaction Security Agreement ([digest.ph](https://www.digest.ph/corporate/amlc-registration-process)). Provisional certificates are valid for six months ([BusinessWorld](https://www.bworldonline.com/?p=210689)).
- Covered transaction reports (CTRs) cover cash over PHP 500,000 in one banking day and are due within 5 working days. Suspicious transaction reports (STRs) have no threshold and are due the next working day after suspicion is established. Both go through GoTRACS ([Verihubs](https://verihubs.com/ph/blog/money-service-business-philippines)). Secondary sources cite AMLC Regulatory Issuance No. 2, s. 2024 as the current rule; the STR timing is disputed between sources ([Alburo](https://www.alburolaw.com/?p=20010); [Tookitaki](https://www.tookitaki.com/compliance-hub/amlc-registration-and-reporting-guidelines-an-overview)) (unverified against primary text).
- AMLC fines: the 2017 sanctions rules capped fines at PHP 500,000 per violation, counted per transaction or per day. Those rules were replaced by the Rules of Procedure on Administrative Cases, which grade fines by gravity ([Alburo](https://www.alburolaw.com/penalties-for-money-laundering/); [BusinessWorld](https://www.bworldonline.com/?p=249920)). Current amounts are unverified.

**Enforcement is real, but it takes the form of licence cancellation, not fines**
- BSP cancelled 10 MSB registrations in 2022 and 14 in 2023. Nikko Mart, a money changer, was cancelled in April 2024 for AMLA and deed-of-undertaking breaches ([Fintech News PH](https://fintechnews.ph/62441/fintech/bsp-cancels-nikko-mart-registration-amid-oversight-on-money-service-businesses/)).
- Jane Money Changer and EFinancing were cancelled in 2023, partly for not registering with the AMLC ([Philstar](https://philstar.com/business/2023/07/05/2278647/2-money-changers-closed)).
- In July 2025 BSP cancelled Prince Rockwell Money Changer, Kings Hopewell and World Reliance for persistent AMLA violations. That made 11 MSBs revoked since 2024 ([Gulf News](https://gulfnews.com/your-money/philippines-bsp-revokes-licenses-of-3-foreign-exchange-and-remittance-agents-1.500201493)). In May 2025 BSP barred 4 unregistered operators ([Context.ph](https://context.ph/2025/05/17/bsp-bars-four-firms-for-unauthorized-money-service-operations/)).

## Buyers

- 2022: 7,584 registered MSB offices, made up of **743 head offices** and 6,841 branches ([Philstar](https://philstar.com/business/2023/07/05/2278647/2-money-changers-closed)). The head offices include all types: RTCs, remittance agents and sub-agents, platform providers, e-money issuers and MC/FXDs.
- End-2023: 7,357 registered MSB offices ([Fintech News PH](https://fintechnews.ph/62441/fintech/bsp-cancels-nikko-mart-registration-amid-oversight-on-money-service-businesses/)). There is no head-office split for 2023.
- The older figure of 18,000+ offices (5,300 head offices) dates from 2016, before the 2017-2019 tightening ([GMA via search](https://gmanetwork.com/news/money/companies/596453/money-service-businesses-are-now-under-bsp-control/story); [Verihubs](https://verihubs.com/ph/blog/money-service-business-philippines)). It is not a current count.
- The core buyer is the type F small money changer. It probably numbers a few hundred legal entities (my estimate from the 743 total; the split by type is unverified). Small type B remittance agents widen this a little, but many are sub-agents running on their principal's systems (unverified).
- How they comply today: probably manual ledgers or spreadsheets, an outside accountant for the quarterly financial package and audit, and the free AMLC portal for any CTR or STR (unverified; no survey found).

## Competition

- **Free state tools:** filing goes through AMLC GoTRACS and portal registration at no charge ([Verihubs](https://verihubs.com/ph/blog/money-service-business-philippines)). BSP reports use forms prescribed by BSP and are sent by plain email ([Circular 1222](https://www.bsp.gov.ph/Regulations/Issuances/2025/1222.pdf)). No paid tool is needed to file.
- **Foreign bureau-de-change POS products:**
  - CurrencyXchanger: POS, accounting, CRM and AML record keeping ([Clear View Systems](https://clearviewsys.screenstepslive.com/s/manuals/m/User_Manual/l/209867-what-is-currencyxchanger)).
  - FXPlus: SaaS or on-premise ([Capterra](https://www.capterra.com/p/153887/FXPlus/)).
  - PSTForex: aimed at Malaysia, Singapore, Indonesia and Thailand ([mwm.ai](https://mwm.ai/apps/pst-forex/1357935284)).
  - None shows BSP M-6 reports or USD 10k/50k cap tracking. Prices were not found.
- **Enterprise AML:** Tookitaki sells screening, monitoring and CTR/STR to banks and large firms ([Tookitaki](https://www.tookitaki.com/compliance-hub/aml-software-philippines)). Verihubs sells eKYC and watchlist APIs; prices are not shown ([Verihubs](https://verihubs.com/ph/blog/money-service-business-philippines)).
- **Consultants:** InCorp Philippines offers AML consultancy and ran a PHP 1,000 AML registration seminar in Sept 2025 ([InCorp](https://philippines.incorp.asia/events/event-aml-registration-requirements-in-the-philippines/)). MTPP outlines and samples circulate for SEC-regulated firms ([digest.ph](https://www.digest.ph/corporate/2020-guidelines-on-the-submission-and-monitoring-of-the-money-laundering-and-terrorist-financing-prevention-program-mtpp)), but I found none for money changers.
- **Local product for small PH money changers:** none found. Mohur's 247 RemitPlus (2016) shows no sign of current sales ([PressReader](https://pressreader.com/philippines/the-freeman/20160328/281874412537689)).

## Willingness to pay

- Fixed regulatory costs for a type F changer: a PHP 20,000 annual BSP service fee, an annual external audit, and a mandatory AML seminar ([Circular 1206](https://www.bsp.gov.ph/Regulations/Issuances/2024/1206.pdf); [Circular 1222](https://www.bsp.gov.ph/Regulations/Issuances/2025/1222.pdf)).
- Direct fine risk is small. At PHP 150 a day, a report 30 days late costs PHP 4,500 ([Circular 1222](https://www.bsp.gov.ph/Regulations/Issuances/2025/1222.pdf)). Fines for AMLC breaches can be far higher (up to PHP 500,000 per violation under the old rules) ([Alburo](https://www.alburolaw.com/penalties-for-money-laundering/)).
- The real fear is losing the licence, which BSP does about 10-15 times a year ([Fintech News PH](https://fintechnews.ph/62441/fintech/bsp-cancels-nikko-mart-registration-amid-oversight-on-money-service-businesses/)).
- A plausible price is PHP 1,500-3,000 a month (about USD 25-50) for a counter app with a compliance pack. A done-for-you quarterly reporting and MTPP retainer might fetch PHP 5,000-10,000 a month (unverified; no published consultant rates found).
- Ceiling: about 500 buyers x PHP 30,000 a year is roughly PHP 15M (about USD 260k) at 100% take-up. A realistic 10-20% share gives USD 25-50k a year.

## Channels

- BSP and AMLC registers. AMLC was authorised in 2017 to publish lists of registered MSBs ([BusinessWorld](https://www.bworldonline.com/?p=210689)). BSP publishes cancellation notices, but I found no downloadable directory (unverified).
- AML/CFT seminar providers. The pre-operation seminar is mandatory, so training firms meet every new changer ([Circular 1206](https://www.bsp.gov.ph/Regulations/Issuances/2024/1206.pdf)).
- Small audit firms and bookkeepers that audit type F changers. They can use any external auditor, so these are local CPA practices ([Circular 1222](https://www.bsp.gov.ph/Regulations/Issuances/2025/1222.pdf)).
- No money changer association was found. Searches for a national association and for the remittance agents' association returned nothing (unverified that none exists).
- Geography: changers cluster in Manila (Binondo, Malate, Makati, Pasay), airports and tourist towns. Walk-in sales are possible but slow (unverified).

## Risks

- **Market too small (killer).** There were 743 MSB head offices of all types in 2022 ([Philstar](https://philstar.com/business/2023/07/05/2278647/2-money-changers-closed)), and the type F share is unknown.
- **Low fines.** At PHP 150 a day, small changers may tolerate late reports ([Circular 1222](https://www.bsp.gov.ph/Regulations/Issuances/2025/1222.pdf)).
- **Free filing.** GoTRACS and BSP email remove the "filing" value. What remains is record keeping and preparation.
- **Regulator tooling.** Circular 1222 says BSP will issue separate guidelines for submitting the financial package and mentions a BSP reporting portal for VASPs ([Circular 1222](https://www.bsp.gov.ph/Regulations/Issuances/2025/1222.pdf)). A future BSP portal with built-in templates would cut the value of report preparation (unverified).
- **Shrinking segment.** Cancellations and digital FX (banks, e-wallets) are shrinking the base. Registered MSB offices fell from 7,584 (2022) to 7,357 (2023) ([Philstar](https://philstar.com/business/2023/07/05/2278647/2-money-changers-closed); [Fintech News PH](https://fintechnews.ph/62441/fintech/bsp-cancels-nikko-mart-registration-amid-oversight-on-money-service-businesses/)).
- **Liability.** A tool that drafts the MTPP or flags STRs carries blame if a client loses its licence.
- **FATF pressure easing.** The Philippines left the FATF grey list in early 2025, which may slow the enforcement push (unverified in this pass).

## First product

If built at all, build it as a module that can later serve pawnshops too. Version 1:
1. A counter transaction log: buy/sell ticket, customer ID capture, and a per-customer running total that blocks or flags sales over USD 10,000 per transaction and USD 50,000 per month.
2. Automatic flags for cash over PHP 500,000 in a day (CTR) and simple red-flag rules for STR review, with a log of decisions.
3. One-click output for the quarterly money-changing transaction value report and the semestral office list, in BSP form layout, plus a deadline calendar for every Appendix M-6 report.
4. Template pack: MTPP for a type F changer, reporting-governance policy (Circular 1222), signatory certification, and crimes/losses and risk-event report forms.
5. 5-year record archive.

**First 30 days:** get the actual BSP report templates for the quarterly MC/FXD report and the financial package. Interview 10 changers in Manila and 2 small audit firms. Build the transaction log, limit tracking and the deadline calendar. Sell the template pack plus a calendar as a one-off (PHP 5,000-10,000) to test demand before writing more code.

## Open questions

- How many of the ~743 head offices are type F money changers? An official 2024-2025 count is needed (BSP data request).
- What are the exact BSP form templates and the implementing guidelines for financial package submission?
- When was Circular 1222 published, and when exactly does the observation period end?
- What are the current AMLC fines under the Rules of Procedure on Administrative Cases, and what are the exact CTR/STR rules for MSBs under AMLC Regulatory Issuance No. 2, s. 2024?
- Is there an active money changers' association?
- Do local POS or accounting vendors already sell to changers?
- Would pawnshops, which number in the thousands, share enough of the workflow to justify a joint product?

## Sources

- https://www.bsp.gov.ph/Regulations/Issuances/2024/1206.pdf
- https://www.bsp.gov.ph/Regulations/Issuances/2025/1222.pdf
- https://philstar.com/business/2023/07/05/2278647/2-money-changers-closed
- https://fintechnews.ph/62441/fintech/bsp-cancels-nikko-mart-registration-amid-oversight-on-money-service-businesses/
- https://gulfnews.com/your-money/philippines-bsp-revokes-licenses-of-3-foreign-exchange-and-remittance-agents-1.500201493
- https://context.ph/2025/05/17/bsp-bars-four-firms-for-unauthorized-money-service-operations/
- https://business.inquirer.net/?p=223234
- https://verihubs.com/ph/blog/money-service-business-philippines
- https://www.digest.ph/corporate/amlc-registration-process
- https://www.bworldonline.com/?p=210689
- https://www.bworldonline.com/?p=249920
- https://www.alburolaw.com/?p=20010
- https://www.alburolaw.com/penalties-for-money-laundering/
- https://www.tookitaki.com/compliance-hub/amlc-registration-and-reporting-guidelines-an-overview
- https://www.tookitaki.com/compliance-hub/aml-software-philippines
- https://philippines.incorp.asia/events/event-aml-registration-requirements-in-the-philippines/
- https://www.digest.ph/corporate/2020-guidelines-on-the-submission-and-monitoring-of-the-money-laundering-and-terrorist-financing-prevention-program-mtpp
- https://clearviewsys.screenstepslive.com/s/manuals/m/User_Manual/l/209867-what-is-currencyxchanger
- https://www.capterra.com/p/153887/FXPlus/
- https://mwm.ai/apps/pst-forex/1357935284
- https://pressreader.com/philippines/the-freeman/20160328/281874412537689
- https://gmanetwork.com/news/money/companies/596453/money-service-businesses-are-now-under-bsp-control/story
