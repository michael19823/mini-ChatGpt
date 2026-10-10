# South Africa: yearly FICA compliance pack for high-value goods dealers (jewellers, gold, coin and stone dealers first) — full plan

Combined plan from four deep-research parts (written 10 Oct 2026):

- [01 Law and product requirements](01-law-and-requirements.md): the FIC Act, Regulations, directives and guidance read at source; 26 duties (D1-D26) and 70 testable product requirements.
- [02 Market and competition](02-market-and-competition.md): buyer counts from the FIC annual reports and the jewellers' directory, prices, competitors, channels and regional options.
- [03 Product and technical design](03-product-and-tech.md): users, features, flows, screens, data sources, architecture, security, hosting, agent work plan and build budget.
- [04 Go-to-market, company and finance](04-gtm-company-finance.md): pricing, channels, 90-day launch, payments and tax, company set-up, 36-month model, kill criteria.

Earlier stages: [lead data](../items/south-africa-a1.json) and [report with the owner's-criteria re-assessment](../reports/south-africa-a1.md).

Every fact below is sourced in those files, and the key ones are cited again here. "My estimate" marks a number derived in this plan. "(unverified)" marks a fact nobody could confirm. Money is in rand (R), excluding 15% VAT. I use **US$1 = about R16.5** and **EUR 1 = about R18.5** (ECB reference rates for 9 Oct 2026, [ECB](https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml)).

Short names: **FIC** = Financial Intelligence Centre (the regulator). **goAML** = the FIC's filing portal. **Item 20** = high-value goods dealers in FICA Schedule 1. **RMCP** = risk management and compliance programme. **RCR** = risk and compliance return. **CTR** = cash threshold report. **STR** = suspicious transaction report. **TFS** = targeted financial sanctions list. **CDD** = customer due diligence. **PCC** = public compliance communication (FIC guidance).

---

## 1. Decision in one page

**Verdict: go, as a cheap, pilot-gated test.** Build one product for all item 20 dealers. Sell it to jewellers, bullion, Krugerrand and stone dealers first. Do not plan on a jewellers-only business: that niche alone is worth under R1m a year.

**New score: 6/10.** This is the same as the re-assessment (6/10) and up from the first pass (4/10). The deep dive made the duty and the pain look stronger, and the money look smaller. The two roughly cancel.

**Why 6, in short:**

- **(+) The duty is national, yearly and enforced.** Since 19 Dec 2022 any business that sells or buys a single item worth R100,000 or more is an "accountable institution" ([Act, Schedule 1 item 20](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf); [PCC 58](https://www.fic.gov.za/wp-content/uploads/2024/03/2024.03-PCC-HVGD-guidance.pdf)). Directive 12 now makes the RMCP a **yearly goAML upload due 31 October** ([Directive 12](https://www.fic.gov.za/wp-content/uploads/2026/09/Directive-12-On-the-submission-of-risk-management-and-compliance-programmes.pdf)).
- **(+) The pain shows in the regulator's own numbers.** 5,581 item 20 registrations at 31 March 2026, but only 1,670 RMCPs from them on the FIC's books ([FIC AR 2025/26, pp. 29, 36](https://www.fic.gov.za/wp-content/uploads/2026/09/FIC-Annual-Report-2025-2026.pdf)). Two weeks before the 2026 RCR deadline only 11-20% of jewellery-sector dealers had filed ([FIC, 17 Jul 2026](https://www.fic.gov.za/wp-content/uploads/2026/07/Media-release-RCR-closing-dates.pdf)). The FIC ran 151 inspections on about 600-660 jewellery, gold and stone registrations in two years ([AR 2024/25, p. 35](https://www.fic.gov.za/wp-content/uploads/2025/09/FIC-Annual-Report-2024-2025.pdf); [AR 2025/26, p. 40](https://www.fic.gov.za/wp-content/uploads/2026/09/FIC-Annual-Report-2025-2026.pdf)).
- **(+) Fines are real.** One item 20 dealer was fined R210,000 for a weak RMCP and no sanctions screening (under appeal). A Krugerrand dealer lost its High Court appeal against a R1.71m penalty for unfiled cash reports ([AR 2025/26, p. 47](https://www.fic.gov.za/wp-content/uploads/2026/09/FIC-Annual-Report-2025-2026.pdf); [Scoin Trading v FIC](https://www.fic.gov.za/wp-content/uploads/2026/06/SCOIN-TRADING-PROPRIETARY-LIMITED-v-THE-FINANCIAL-INTELLIGENCE-CENTRE-APPEAL-FINAL_.pdf)).
- **(+) Nobody sells the yearly job.** goAML only receives filings. Competitors sell one slice each: a free FIC template, a free generator, a R4,995 template, a R7,000 custom RMCP, or per-check screening (section 4).
- **(+) Easy to build and sell from abroad.** No government integration is needed. The MVP is about 3 weeks of agent work. A foreign company can sell in rand through Paddle, which charges SA VAT itself. No local company is needed (sections 7 and 9).
- **(−) The niche is small.** 664 jewellery, gold and stone registrations; about 565 businesses in the jewellers' directory ([AR 2025/26, p. 38](https://www.fic.gov.za/wp-content/uploads/2026/09/FIC-Annual-Report-2025-2026.pdf); [JCSA directory](https://www.jewellery.org.za/directory), counted in [02](02-market-and-competition.md)). About two-thirds of base-case customers must be motor and other-goods dealers, where nCino KYC already sells.
- **(−) The floor is free.** The FIC gives away a template ([PCC 53](https://www.fic.gov.za/wp-content/uploads/2023/09/2022.08-PCC-PCC-53-RMCP.pdf)) and VerifyNow gives away a "starting document" generator ([VerifyNow](https://www.verifynow.co.za/fica-toolkit/rmcp-generator)). Willingness to pay is untested.
- **(−) The first deadline is lost, and trust costs money.** The 31 Oct 2026 upload comes before the product is sellable. The attorney and the security test are two-thirds of the build cash.

**What the deep dive changed** (compared with the re-assessment of 9 Oct 2026):

| Topic | Re-assessment | Deep dive | Effect |
|---|---|---|---|
| Buyer count | 5,184 registrations (31 Mar 2025); niche 606 | **5,581** (31 Mar 2026, +8%); niche **664**; but only about **2,900-3,950 distinct small firms** likely to buy | Same order; fewer real buyers than registrations |
| Main price | R8,000-9,000 a year | **Starter R2,900, Dealer R5,900**, Group +R1,200 per site or permit, Consultant R1,990 a month. Attorney review billed by the attorney | Lower entry, average about R5,200 |
| Year-3 revenue | R3m-R4m | **About R2.5m** (base ARR R2.58m; range R0.9m-R4.5m) | Smaller |
| Competitors | Moonstone, nCino KYC, ClearComply, law firms | Adds **AML GO** (custom RMCP from R7,000, review from R2,500), **VerifyNow** (free generator, cheap checks) and the **FIC's own free template** | Free floor confirmed; still no yearly product |
| Enforcement | R10k fines; motor-dealer cases | **R210k dealer fine; R1.71m Krugerrand fine upheld in court;** 361 fast-track notices in 2025/26 | Stronger |
| Timing | 31 Oct deadline as a buying moment | 31 Oct 2026 is too early. **Seasons: Nov 2026 late filers, Feb-Apr 2027 (final PCC 126, timing unverified), Aug-Oct every year** | Slower year 1 |
| Product shape | RMCP builder, calendar, register | Same, plus legal design rules: no goAML logins, original RMCP text (FIC guidance is copyright), s24 record-keeper notice, restricted STR area | Clearer, slightly more work |
| Company | Not discussed | **No local company needed.** Paddle in rand; no withholding tax on service fees | Matches the owner's preference |

**What it is worth** (36-month model from [04](04-gtm-company-finance.md), founder builds with agents and takes no pay; peak cash adjusted in section 10):

| | Low | Base | High |
|---|---|---|---|
| Paying dealers / consultants at month 36 | 148 / 6 | **373 / 18** | 589 / 29 |
| Recurring revenue (ARR) at month 36 | R0.88m (US$53k) | **R2.58m (US$156k)** | R4.48m (US$271k) |
| Year-3 net cash before founder pay and tax | R0.24m | **R1.42m (US$86k)** | R2.75m |
| Peak cash need (my adjusted figure) | about R0.53m-0.73m | **about R0.37m-0.57m (US$22k-35k)** | about R0.25m-0.45m |

- **The base case is a good small cash business for one founder, not a venture.** Exit value at 2-4x revenue would be about R5m-R10m ([04](04-gtm-company-finance.md)).
- **The low case never pays back within 36 months.** The kill criteria (section 13) are set to stop it by month 12.

**Key conditions:**

1. **Jewellers pay.** At least 3 reservations from 30 calls by 10 Nov 2026, and at least 6 paying dealers by 9 Jan 2027.
2. **Motor and other-goods dealers buy too.** They are 88% of registrations and about two-thirds of base-case customers.
3. **An attorney signs the content** at a fixed fee, and mock inspections of pilot RMCPs find nothing missing. The FIC rejects standard templates ([NADA](https://nada.co.za/?p=5097)).
4. **Paddle accepts the product** (it bars legal advice, [Paddle](https://paddle.com/help/start/intro-to-paddle/what-am-i-not-allowed-to-sell-on-paddle)). Stripe is plan B.
5. **The founder builds it with Claude Code and agents.** No hired developers. Cash goes to the attorney, the security test and sales.

**Do this first** (weeks 1-4; cash outside the attorney's fee stays under about R60,000, my estimate):

1. Make 30 calls to dealers from the jewellers' directory, and take no-payment reservations at the founding price.
2. Get two fixed-fee attorney quotes, and file comments on draft PCC 126 by **Fri 16 Oct 2026**.
3. Apply to Paddle. Put up a landing page with the free "Am I an item 20 dealer?" check.
4. Start the agent build (foundation week), aiming at an MVP on staging by **Fri 30 Oct**.

### Where the files disagree, and what this plan uses

| Topic | What the files say | This plan uses | Why |
|---|---|---|---|
| Niche registrations | [01](01-law-and-requirements.md): 661 (metals 176, stones 244, Krugerrand 241; FIC media release). [02](02-market-and-competition.md): 664 (178, 244, 242; annual report p. 38) | **664**; motor 4,277; other 640 | The annual-report rows add up to the 5,581 total; the media-release rows add up to 5,564 |
| How many real buyers | Re-assessment: all 5,184 registrations. [02](02-market-and-competition.md): 2,900-3,950 likely small firms | **2,900-3,950** | One firm can hold several registrations; big groups have in-house teams |
| RMCPs on file | [02](02-market-and-competition.md): "only 30% have ever sent one". [01](01-law-and-requirements.md): the 1,670 may count only one year's receipts | "At most about 30% sent one" (uncertain) | The FIC table and text use different wording ([AR 2025/26, p. 36](https://www.fic.gov.za/wp-content/uploads/2026/09/FIC-Annual-Report-2025-2026.pdf)) |
| Size of the jewellery trade | Report: about 1,000 retailers and 140 wholesalers (LBMA, undated). [02](02-market-and-competition.md): directory shows 565 businesses | **565 listed; 700-1,200 in total** (my estimate from 02) | The directory is current; the LBMA figure is old and third-party |
| Prices | Re-assessment: R8,000-9,000. [02](02-market-and-competition.md): R2,900 / R5,900 / R8,900 "Reviewed". [04](04-gtm-company-finance.md): R2,900 / R5,900 / Group / Consultant; review billed by the attorney | **[04](04-gtm-company-finance.md)'s plans** | Paddle bars legal advice, and an attorney's review must sit under the attorney's own cover |
| Average revenue per dealer | [03](03-product-and-tech.md): R5,000. [04](04-gtm-company-finance.md): R5,200 (R4,600 in year 1) | **R5,200** | 04 derives it from a plan mix |
| Year-3 revenue | Re-assessment R3m-R4m; [02](02-market-and-competition.md) R2.3m (R1.5m-R3.5m); [04](04-gtm-company-finance.md) ARR R2.58m | **R2.58m ARR (base)** | 04 is the only bottom-up model, and 02 agrees within range |
| Exchange rate | Re-assessment R17.5 (unverified); [03](03-product-and-tech.md) and [04](04-gtm-company-finance.md) R16.5 (ECB) | **R16.5** | Sourced |
| Launch dates | [03](03-product-and-tech.md): staging 30 Oct, sellable Mon 30 Nov. [04](04-gtm-company-finance.md): MVP 2-13 Nov, paid launch 30 Nov-11 Dec | **03's build dates, 04's sales actions on top** | They agree on 30 Nov; 03 has the detailed build plan |
| Directive 10 deadline | 29 Oct (90-day count, [01](01-law-and-requirements.md)) vs 31 Oct ([nCino KYC](https://blog.kycafrica.ncino.com/fic-updates-directive-10-draft-directive-12-guidance-note-7b)) | **29 Oct 2026** | 01 read the directive itself |
| Sanctions screening | [02](02-market-and-competition.md)/[04](04-gtm-company-finance.md): don't build it, plug in VerifyNow or AML GO. [03](03-product-and-tech.md): build TFS screening on the free UN and FIC lists; buy ID and PEP checks | **03** | The lists are free and small; "no evidence of screening" is a top inspection finding; ID and PEP data are the costly parts and are bought |
| Motor-dealer content | [03](03-product-and-tech.md): basic packs in the MVP. [04](04-gtm-company-finance.md): from month 4 | **Content in the MVP; selling to motor dealers from month 4** | Content is cheap; sales effort follows the jeweller pilots |
| RCR workbook | [01](01-law-and-requirements.md): MVP. [03](03-product-and-tech.md): v1 (Q1 2027) | **v1** | No new RCR round is announced (unverified) |
| One-off legal and security cost | [03](03-product-and-tech.md): R230k-R530k for the MVP (attorney 40-60 hours, pen test US$5k-8k). [04](04-gtm-company-finance.md): R205k in year 1 (attorney R60k + R30k, security test R50k) | **03's range** | No South African quote was found by either; 03 is the more careful estimate. This lifts base peak cash from R322k to about R370k-R570k |
| Local company | All: not needed at launch. [03](03-product-and-tech.md) adds that a foreign operator with servers in SA may need an SA-based deputy information officer under POPIA (unverified) | **No company; ask the attorney about the information officer** | See section 9 |

---

## 2. Why now: the law and enforcement

**Who is obliged.** A business that, as a regular part of its trade, buys or sells any single item or bundle valued at R100,000 or more, paid in any form, in one or several linked payments ([Act, Schedule 1 item 20](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf); [PCC 58, paras 1.4-1.10](https://www.fic.gov.za/wp-content/uploads/2024/03/2024.03-PCC-HVGD-guidance.pdf)).

- **Per item, not per basket.** 50 Krugerrands sold one by one do not count; one R120,000 scrap-gold lot does (PCC 58, example 2).
- **One qualifying item is enough.** A jeweller who sells one R100,000 ring is in, "irrespective of the value of the turnover" (PCC 58, example 3, para 3.1.1).
- **Buying counts.** Scrap and second-hand gold buyers are in when they buy a R100,000 lot (PCC 58, paras 1.5.4-1.5.5).
- **No small-firm exemption.** Registration is free ([Regs 27A](https://www.fic.gov.za/wp-content/uploads/2023/10/Money-Laundering-and-Terrorist-Financing-Control-Regulations.pdf)).
- **The FIC itself supervises item 20** ([Act, Schedule 2](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf)). The rules are the same in every province. All FIC texts are in English; a search in Afrikaans returned only English sources ([01](01-law-and-requirements.md#regional-differences)), so the product can launch in English only.

**What must exist, and when** (full table of 26 duties in [01](01-law-and-requirements.md#duty-by-duty-table)):

| Duty | Deadline or frequency | Basis |
|---|---|---|
| Register on goAML; keep details current | Within 90 days of opening (before the first qualifying deal if expected); changes within 90 days | [Regs 27A](https://www.fic.gov.za/wp-content/uploads/2023/10/Money-Laundering-and-Terrorist-Financing-Control-Regulations.pdf); [Act s43B](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf) |
| Written firm-wide risk assessment | Before the RMCP is approved; with each review | [Act s42(2)(a)](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf); [GN 7B](https://www.fic.gov.za/wp-content/uploads/2026/08/Guidance-Note-7B-%E2%80%93-Implementation-of-various-aspects-of-the-FIC-Act.pdf) |
| RMCP covering all 19 elements of s42(2)(a)-(s), tailored, approved by the owner or board (not a committee) | Kept current; FIC recommends a yearly review | [Act s42](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf); [GN 7B, paras 180-190](https://www.fic.gov.za/wp-content/uploads/2026/08/Guidance-Note-7B-%E2%80%93-Implementation-of-various-aspects-of-the-FIC-Act.pdf) |
| **Upload the RMCP on goAML** as one PDF named `YYYYMMDD_RMCP.pdf` (approval date) | **By 31 October every year** (first 31 Oct 2026); new dealers within 90 days; amended RMCP within 10 days of approval | [Directive 12](https://www.fic.gov.za/wp-content/uploads/2026/09/Directive-12-On-the-submission-of-risk-management-and-compliance-programmes.pdf); [FIC how-to](https://www.fic.gov.za/wp-content/uploads/2026/10/HTSRMCP.png) |
| **Report every location** (head office, branches, subsidiaries) | Existing registrants with more than one site: **by 29 Oct 2026**; then within 90 days of a change | [Directive 10](https://www.fic.gov.za/wp-content/uploads/2026/07/Directive-10-On-information-pertaining-to-geographic-locations.pdf) |
| Risk and compliance return (RCR), one per Org ID | When a directive is issued (2023; 4 May-31 Jul 2026) | [Directive 11](https://www.fic.gov.za/wp-content/uploads/2026/03/Directive-11-%E2%80%93-Risk-and-compliance-return.pdf); [PCC 60](https://www.fic.gov.za/wp-content/uploads/2026/06/2026.6-PCC-60-RCR-_On-RCR-Submission.pdf) |
| Compliance officer; staff training; employee screening | Ongoing | [Act s42A, s43](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf); [Directive 8](https://www.fic.gov.za/wp-content/uploads/2023/09/2023-DIR-Directive-8-of-2023-Screening-employees.pdf) |
| CDD on qualifying deals, including beneficial owners and PEPs | Each qualifying deal | [Act s21-21H](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf); [PCC 59](https://www.fic.gov.za/wp-content/uploads/2024/08/PCC-59-Beneficial-ownership.pdf) |
| Sanctions (TFS) screening of clients and staff | Before onboarding, for any value; again "without delay" after each list change | [Act s26B, s28A](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf); [TFS manual, Oct 2026](https://www.fic.gov.za/wp-content/uploads/2026/10/Targeted-financial-sanctions-manual-2026.pdf) |
| Cash report (cash above R49,999.99 in a qualifying deal) | **3 business days** | [Act s28; Regs 22B, 24](https://www.fic.gov.za/wp-content/uploads/2023/10/Money-Laundering-and-Terrorist-Financing-Control-Regulations.pdf) |
| Suspicious transaction report (any value); no tipping off | **15 business days** | [Act s29, s53](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf); [Regs 24](https://www.fic.gov.za/wp-content/uploads/2023/10/Money-Laundering-and-Terrorist-Financing-Control-Regulations.pdf) |
| Terrorist property report | **5 business days** | [Act s28A](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf); [Regs 24](https://www.fic.gov.za/wp-content/uploads/2023/10/Money-Laundering-and-Terrorist-Financing-Control-Regulations.pdf) |
| Records kept | 5 years | [Act s22-23](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf) |
| Tell the FIC who keeps your records, if a third party does | "Without delay" | [Act s24(3); Regs 20](https://www.fic.gov.za/wp-content/uploads/2023/10/Money-Laundering-and-Terrorist-Financing-Control-Regulations.pdf) |

**What goAML leaves undone.** It only receives filings. It does not draft or version the RMCP, record the owner's approval, keep CDD files, run the 3/5/15-day clocks, keep a training register or build an inspection file ([01](01-law-and-requirements.md#summary)). A successful upload is not FIC approval ([GoLegal](https://www.golegal.co.za/?p=74912)). The FIC still gets "numerous enquiries on how to access goAML" ([Moonstone](https://www.moonstone.co.za/fic-accepting-rmcps-after-the-12-march-deadline/)).

**Enforcement evidence** ([FIC AR 2025/26](https://www.fic.gov.za/wp-content/uploads/2026/09/FIC-Annual-Report-2025-2026.pdf), page in brackets):

- 549 inspection reports in 2025/26. **61 were of precious metal and stone dealers** (43 in Gauteng); 37 of motor dealers (p. 40). In 2024/25 it was 90 of 556 ([AR 2024/25, p. 35](https://www.fic.gov.za/wp-content/uploads/2025/09/FIC-Annual-Report-2024-2025.pdf)).
- **171 of the 549 inspections were triggered by a missing RCR** (p. 41). Missing one form invites a visit.
- Top findings: no RMCP or a weak one; RMCP not sent when asked; weak CDD on companies and PEPs; late or stale registration; **no evidence of sanctions screening** (p. 41). Each is a record-keeping job software can do.
- 361 fast-track "admission of non-compliance" notices: 209 for missed RCRs, 152 for not registering. 149 settled at R10,000 each (p. 43). The standard notice is R25,000 (late registration) or R50,000 (missed RCR), cut to R10,000 if fixed fast ([Miller Gold House](https://www.fic.gov.za/wp-content/uploads/2025/04/Administrative-sanction-%E2%80%93-Miller-Gold-House-Pty-Ltd.pdf); [Auctionman](https://www.fic.gov.za/wp-content/uploads/2026/01/Administrative-sanction-%E2%80%93-Auctionman-Pty-Ltd.pdf)).
- One item 20 dealer: R210,000 (R100,000 for the RMCP, R100,000 for no screening, R10,000 for registration); R105,000 payable, under appeal (p. 47).
- Scoin Trading, a Krugerrand dealer: R1.71m for repeated unfiled cash reports; the High Court dismissed its appeal on 18 Mar 2026 ([judgment](https://www.fic.gov.za/wp-content/uploads/2026/06/SCOIN-TRADING-PROPRIETARY-LIMITED-v-THE-FINANCIAL-INTELLIGENCE-CENTRE-APPEAL-FINAL_.pdf)).
- Legal maximum: R50m per sanction for a company, R10m for a person ([Act s45C](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf)).

**Still moving:**

| When | Change | Effect |
|---|---|---|
| Comments closed 16 Oct 2026; final date unknown | **Draft PCC 126**: one goAML registration per SADPMR permit or licence; checks on the client's permits and the source of goods; silver and lab-grown stones in scope | More registrations, each needing its own RMCP; new CDD fields ([draft PCC 126](https://www.fic.gov.za/wp-content/uploads/2026/09/2026.9-PCC-DPMS.pdf)) |
| Draft since 19 Mar 2026 | Draft PCC 5E: item 20 registers per licence, else head office and each branch | More registrations ([draft PCC 5E](https://www.fic.gov.za/wp-content/uploads/2026/03/2026.3-PCC-Draft-PCC05E_.pdf)) |
| Pending | Draft General Laws (AML/CTF) Amendment Bill 2025: risk-assess new products and channels before launch | New RMCP content ([draft Bill](https://www.fic.gov.za/wp-content/uploads/2026/01/Draft-General-Laws-AMLCTF-Amendment-Bill-2025.pdf)) |
| Mid-2026 to Oct 2027 | FATF mutual evaluation of South Africa | More inspections likely (inference) ([National Treasury](https://www.fic.gov.za/wp-content/uploads/2026/01/National-Treasury-media-statement-%E2%80%93-General-Laws-Amendment-Bill-2025.pdf)) |
| Not announced | Next RCR round | Spike in demand when it comes |

The FIC must publish guidance and directives in draft first ([Act s42B, s43A(7)](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf)). Changes are visible weeks ahead, which suits a product that tracks them.

---

## 3. Customers

| Segment | Registered 31 Mar 2026 | Filed the 2023 RCR | Likely small-firm buyers | Source |
|---|---|---|---|---|
| Precious stones dealers | 244 | 87% | | [AR 2025/26, p. 38](https://www.fic.gov.za/wp-content/uploads/2026/09/FIC-Annual-Report-2025-2026.pdf) |
| Precious metals dealers (not Krugerrand) | 178 | 66% | | same |
| Krugerrand dealers | 242 | 57% | | same |
| **Jewellery, gold and stone niche** | **664** | 70% | **about 450-600** (700-900 if PCC 126 is final, unverified) | same; [02](02-market-and-competition.md#working-base) |
| Motor dealers | 4,277 | 52% | about 2,000-2,800 | same |
| Other goods (farm machinery, boats, art, antiques, livestock) | 640 | 49% | about 450-550 | same |
| **All item 20** | **5,581** (up 8% in a year) | 54% | **about 2,900-3,950** | [AR 2025/26, p. 29](https://www.fic.gov.za/wp-content/uploads/2026/09/FIC-Annual-Report-2025-2026.pdf) |
| Consultants, accountants, attorneys serving dealers | unknown | | a channel | |

Confidence: high for registrations; the "likely buyers" column is my estimate from [02](02-market-and-competition.md), because one firm can hold several registrations and large groups have their own compliance teams (unverified share).

**Cross-checks on the niche:**

- The jewellers' association (JCSA) public directory has **581 listings, 565 businesses**: 213 manufacturers, 186 retailers, 83 wholesalers, 14 refiners; 51% in Gauteng, 29% in the Western Cape ([JCSA directory](https://www.jewellery.org.za/directory), counted in [02](02-market-and-competition.md)). It gives phone numbers and e-mails: a ready pilot list.
- SADPMR issues 130-260 jeweller's permits a year ([SADPMR AR 2020/21](https://www.sadpmr.co.za/wp-content/uploads/2023/05/SADPMR-Annual-Report-2020-2021.pdf)). The number of valid permits is not published.
- Cash-for-gold buyers register with SAPS under the Second-Hand Goods Act; their number is unknown ([SGA s21](https://www.acts.co.za/second/21_records_by_dealers)).

**Buyer profile.**

- **Jewellers and gold dealers:** small, owner-run, used to permits (SADPMR jeweller's permit; JCSA membership needs one, [JCSA](https://www.jewellery.org.za/membership)). Busy from mid-November to mid-January with Christmas trade (my inference, [04](04-gtm-company-finance.md)).
- **Stone dealers:** licensed by SADPMR, best RCR filers (87%). Likely the easiest early buyers (inference).
- **Krugerrand and bullion dealers:** moved from light reporting duties into full item 20 duties; only 57% filed the RCR.
- **Motor dealers:** 77% of registrations, from listed groups to one-site used-car lots; NADA represents about 1,344 franchised dealers ([DealerFloor, 2020](https://dealerfloor.co.za/industry-news/franchise-dealer-numbers-decline-in-2020)).

**How they comply today:** goAML (free), plus a template or a one-off consultant job, plus due-diligence software for some motor dealers, or nothing. NADA told dealers the FIC "will not accept standard templates" ([NADA](https://nada.co.za/?p=5097)). Many RMCPs are three or four pages ([DealerFloor](https://dealerfloor.co.za/industry-news/seven-key-points-to-become-fully-fica-compliant)).

**The jobs, in the buyer's words** ([03](03-product-and-tech.md#jobs-to-be-done-in-the-buyers-words)):

1. "Tell me if I am in, under which category, and how many registrations I need."
2. "Get my RMCP done for 31 October, about my business, in the file the FIC wants."
3. "Report all my branches for Directive 10."
4. "Don't let me miss a cash report. I have 3 business days."
5. "Prove I screened my clients and staff."
6. "If something smells wrong, tell me what to do and keep it secret."
7. "When the inspector arrives, give me one file."
8. Adviser: "Let me run 20 dealer clients from one screen."

**What they already pay:** R100-R400 a month for compliance software and R5,000-R7,000 once for an RMCP ([ClearComply](https://www.clearcomply.co.za/pricing); [Moonstone](https://www.moonstone.co.za/new-do-it-yourself-fica-compliance-solution-for-accountable-institutions/); [AML GO](https://amlgo.co.za/)). One avoided R10,000 fine pays for a year of any plan.

---

## 4. Competition

| Alternative | What it does | Price | What it means for us |
|---|---|---|---|
| **goAML** | Filing channel only | Free | The product sits on top of it |
| **FIC PCC 53 template** | RMCP skeleton; FIC says an uncustomised copy is "non-compliant"; reuse allowed only "for personal and non-commercial use" | Free | The real free floor. Our text must be original. The FIC's warning is our pitch ([PCC 53](https://www.fic.gov.za/wp-content/uploads/2023/09/2022.08-PCC-PCC-53-RMCP.pdf)) |
| **VerifyNow** | Free RMCP "starting document"; ID checks from R2.99; sanctions/PEP from R5.98; monitoring from R1,999 a year; training R747.50 per learner. Lists motor dealers, not jewellers; does not file reports | Published | Cheap partial substitute; possible ID/PEP supplier and referral partner ([VerifyNow](https://www.verifynow.co.za/pricing)) |
| **AML GO** (majority owned by UPAY) | Custom RMCP from R7,000; review from R2,500; screening R1-R7 a check | Published | Consultant-style, once-off. Partner for reviews or screening ([AML GO](https://amlgo.co.za/)) |
| **Moonstone FICA Toolkit** | Generic RMCP template, risk register; no bullion-dealer template | R4,995 once + hourly help | Once-off; no calendar or yearly update ([Moonstone](https://www.moonstone.co.za/new-do-it-yourself-fica-compliance-solution-for-accountable-institutions/); [no bullion template](https://www.moonstone.co.za/?p=57175)) |
| **nCino KYC** (formerly DocFox; nCino paid about US$74m in 2024) | Client verification, screening, monitoring; a customisable RMCP template with notes; courts motor dealers with webinars | Not published | **Main threat.** No yearly sector file, calendar or inspection pack seen. Complement and integrate rather than fight ([nCino KYC](https://blog.kycafrica.ncino.com/breaking-the-myths-around-fica-outsourcing); [nCino 10-K](https://www.sec.gov/Archives/edgar/data/1902733/000190273326000022/ncno-20260131.htm)) |
| ClearComply | General SME deadline tracker; no FICA filing features | R99 a month | Price and style model ([ClearComply](https://www.clearcomply.co.za/pricing)) |
| Law firms (mjkinc and others) | Custom RMCPs and advice | Not published; probably R10,000-R30,000 (unverified) | Reviewers and resellers ([mjkinc](https://mjkinc.co.za/rmcp)) |
| "FICA Compliance Toolkit 2026" on Payhip | Training guide and self-test | R499 | Shows low-price FICA content sells online ([Payhip](https://payhip.com/b/I0B2U)) |
| Gold Manager Pro | Buy-back ID scanning and police reports (US, Canada) | From US$59.99 | Not FICA ([Capterra](https://www.capterra.co.za/software/1109655/Gold-Manager-Pro)) |
| JCSA, NADA | Awareness, member guidance | In membership | Channels |

**Conclusion.**

- **No one covers the yearly file** (tailored RMCP and its 31 October upload, Directive 10, report clocks, RCR help, inspection file). Those are exactly the FIC's inspection findings.
- **The incumbents are partial or once-off, and fairly priced for what they do.** That is an opening at R2,900-R5,900 a year, by the owner's criteria.
- **ID and PEP checks are a commodity.** Buy them; don't build them.
- **No jewellery-specific FICA product was found** in any pass.
- **Watch nCino KYC.** It could add a yearly file. Moving first on sector depth and partnering are the defences.

---

## 5. Product

Working name: **the Pack**.

### Positioning

> "Your yearly FIC file, done properly: for jewellers, gold, coin and stone dealers." ([04](04-gtm-company-finance.md#positioning))

- **Sell the yearly job, not the document.** Free and R5,000 templates exist, and the FIC rejects standard templates. The value is an RMCP built from the dealer's own answers and updated every year, plus the calendar, the deal and cash register, the screening log, the training log and a one-click inspection file. These match the FIC's 2025/26 inspection findings line by line ([AR 2025/26, p. 41](https://www.fic.gov.za/wp-content/uploads/2026/09/FIC-Annual-Report-2025-2026.pdf)).
- **Use the FIC's own words.** Its free template is "not a ready-to-use RMCP", and an uncustomised copy is "non-compliant" ([PCC 53](https://www.fic.gov.za/wp-content/uploads/2023/09/2022.08-PCC-PCC-53-RMCP.pdf)). The Pack is the customising.
- **A tool, not advice, and not the compliance officer.** The dealer approves its own RMCP ([Act s42(2B)](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf)) and files on goAML itself. goAML logins may only be used by the person who registered them ([FIC on Directive 2](https://www.fic.gov.za/wp-content/uploads/2023/09/2014.4-DIR-Directive-2-on-use-of-login-credentials-following-registration-with-the-FIC.pdf)), so the Pack prepares files and never logs in.
- **Lead with jewellers; serve every item 20 dealer.** Six sub-sector content packs from launch: retail jeweller, bullion and Krugerrand, diamonds and coloured stones, scrap and second-hand gold, motor, other goods.

### Users

| Role | Who in a small dealer | What they do in the Pack |
|---|---|---|
| Owner or board | Owner, directors, CC members | Answers the profile; approves the risk assessment and each RMCP version (cannot be delegated to a committee, [GN 7B](https://www.fic.gov.za/wp-content/uploads/2026/08/Guidance-Note-7B-%E2%80%93-Implementation-of-various-aspects-of-the-FIC-Act.pdf)) |
| Compliance officer (and optional MLRO) | Often the owner or shop manager | Runs the calendar, files on goAML, reviews screening hits and concerns, keeps training |
| Counter staff | 1-20 people | Log qualifying deals and cash, collect documents, raise a concern, read the RMCP. Following the RMCP's reporting route is their legal defence ([Act s69](https://www.fic.gov.za/wp-content/uploads/2023/10/Financial-Intelligence-Centre-Act-2001-Act-38-of-2001.pdf)) |
| External adviser | Consultant, accountant | Manages many dealers; prepares drafts; cannot approve |
| Partner reviewer | SA attorney or practitioner | Reviews an RMCP under their own engagement and cover |
| Content editor | Founder plus the contracted attorney | Publishes signed content releases |

The FIC inspector is not a user; the inspector gets an export.

### Feature map

| Area | MVP (sellable 30 Nov 2026) | v1 (Dec 2026-Jul 2027) | Later |
|---|---|---|---|
| Scope | Free public checker: per-item R100k test, sub-category, number of registrations under today's rule and the drafts (PCC 126, PCC 5E), item 11 credit flag | Update for final PCC 126 and PCC 5E | Other FICA sectors (estate agents, attorneys) |
| Profile | Entity, Org IDs, SADPMR permits, locations, people and roles | Group view | |
| Risk and RMCP | About 80 questions in 6 sub-sector packs; explainable scoring; risk appetite; RMCP PDF and DOCX from an original clause library; s42(2) coverage annex; approval with document hash; versions; staff read-and-confirm | Yearly review wizard showing what changed (answers and law); in-app attorney review | Regional legal packs |
| Calendar | Deadline engine with SA business days and public holidays; e-mail reminders; weekly digest | WhatsApp or SMS; iCal | |
| Filing help | goAML guides; copy sheets for RMCP, Directive 10, CTR, STR, TPR; submission log; Directive 3A late-report letter; guard that keeps RCR and RMCP flows apart | goAML XML for CTRs if the FIC grants it; FIC request log | |
| Deals and cash | Qualifying-deal register; linked payments; CTR clock; structuring alerts (cash split around R50k, deals split under R100k) | CSV import from POS or accounts | POS integrations; Second-Hand Goods Act registers; six-monthly SADPMR PMR 4 return |
| Clients | Client file (person, company, trust); beneficial-owner cascade; PEP declaration; permit and source-of-goods fields (draft PCC 126); TFS screening | Self-service link or QR code at the counter; ID and PEP checks via a vendor API; CIPC look-up via a reseller | |
| Suspicion | Restricted concern log; 15-business-day clock; STR copy sheet | Red-flag prompts per sub-sector | |
| People | Staff register; training log; employee screening | Short course with quiz and certificate | |
| Evidence | Inspection pack (ZIP + index PDF); self-check against the six top findings; s24 record-keeper notice; full export with quarterly retrieval test | Read-only reviewer link | |
| RCR | Checklist and evidence folder | Workbook that mirrors the 2026 HVGD questionnaire and computes answers per data period from the registers | |
| Commercial | Card checkout (Paddle); plans; adviser switcher | Adviser dashboard; white-label PDFs | Partner API |
| AI | None | Help assistant on approved content; draft wording the owner must confirm. Never client data or STR text | |

The full list of **70 legal requirements**, each with a test, is in [01 §PRODUCT REQUIREMENTS](01-law-and-requirements.md#product-requirements). Treat it as the acceptance checklist. This plan makes three deliberate changes ([03](03-product-and-tech.md#match-with-the-01-files-product-requirements)):

- the RCR workbook (requirements 61-63) moves to v1, Q1 2027;
- training course content (54) moves to v1; the training register stays in the MVP;
- motor and other-goods modules (17, "Later" in 01) come into the MVP in basic form.

### Key flows

1. **Free check to sign-up (5 minutes).** 6-8 questions. Result: "In scope under item 20, sub-category X. You need N goAML registrations today, or M if draft PCC 126 is adopted. Your next deadlines are ..." Each rule shows its source.
2. **First RMCP (under 90 minutes of the owner's time).**
   1. Profile (10 min).
   2. Risk questionnaire (30-40 min): products and price bands, payment mix, clients, channels, buy-ins, suppliers, geography, existing controls. Sector red flags from [PCC 58 para 4.2](https://www.fic.gov.za/wp-content/uploads/2024/03/2024.03-PCC-HVGD-guidance.pdf) are asked as plain questions.
   3. Risk result (10 min): the owner can change a rating with a reason and writes a risk appetite.
   4. Controls (10 min): accepted controls become RMCP text and calendar tasks.
   5. Draft RMCP: fields the owner must write in their own words are marked, and approval is blocked until they are filled.
   6. Approval: the exact version is approved; the PDF gets an approval page and the name `YYYYMMDD_RMCP.pdf`.
   7. goAML upload guide; the user records the date and a screenshot. Staff get read-and-confirm links.
3. **Directive 10 locations (15 minutes).** A location register with the fields the directive asks for, and a checklist in goAML's own step order ([Directive 10 information sheet](https://www.fic.gov.za/wp-content/uploads/2026/08/Directive-10-information-sheet-3-1.pdf)). Single-site dealers never see it.
4. **A qualifying sale or buy-in with cash (about 5 minutes at the counter).** New deal on a phone; client found or created and screened at once; CDD checklist; payments by method. Cash above R49,999.99 starts a 3-business-day CTR task; the copy sheet pre-fills the Reg 22C fields. Buy-ins add source of goods and a structuring prompt.
5. **Something looks suspicious.** Any staff member raises a concern, at any value. Only the compliance officer sees it; the staff member gets a receipt. A decision to report starts the 15-business-day clock. No e-mail ever carries the content.
6. **The sanctions list changes.** The UN and FIC lists are polled every 2 hours; all clients and staff are re-screened; possible matches go to each compliance officer. A confirmed match blocks the deal and starts a 5-business-day terrorist property report task.
7. **The yearly cycle.** 1 August: the update opens with last year's answers and what changed in the law. By 31 October: approve and upload. Any later amendment: upload within 10 days of approval.
8. **An inspection notice.** One click builds the pack. The STR log is left out by default.
9. **An adviser with many dealers.** One login, traffic lights per dealer; each dealer is a separate tenant; only the dealer's owner can approve.

### Screens

1. Home dashboard: "Your FIC year" progress, next three deadlines, open tasks, red banner for anything overdue.
2. Calendar.
3. Checker (public and in-app).
4. Business profile (entity, registrations, locations, people).
5. Risk questionnaire.
6. Risk result.
7. RMCP (sections, highlighted must-write fields, coverage annex, versions, approve, download).
8. goAML filing cards with guides and copy sheets.
9. Deals (mobile-first "new deal").
10. Clients.
11. Screening (list version, hit queue, certificates).
12. Concerns (restricted).
13. People and training.
14. Inspection pack.
15. Settings and billing (users, MFA, plan, export, s24 notice).
16. Adviser portfolio.
17. Content admin (internal; attorney sign-off per release).

Design rules: desktop and phone; plain English with the legal source in a tooltip; everything printable.

---

## 6. Technical design

**Stack: one plain monolith one founder can run with agents** ([03](03-product-and-tech.md#architecture-and-stack)):

- **App:** Python and Django, server-rendered with HTMX. The Django admin serves the content editor.
- **Database:** PostgreSQL 16+, JSONB for answers, `pg_trgm` for search, row-level security as a second tenant wall.
- **Jobs:** a Postgres-backed queue (Procrastinate or django-q2), no Redis.
- **Documents:** a YAML clause library plus Jinja templates, rendered to PDF (WeasyPrint) and DOCX (python-docx).
- **Matching:** rapidfuzz and unidecode; lxml for XML.
- **Files:** per-tenant encryption keys (AES-256-GCM); ClamAV scan on upload.
- **Deploy:** Docker Compose behind Caddy on Vultr Johannesburg; GitHub Actions CI.

**Content is data, not code.** Rules, deadlines, questions and clauses carry a source, a version date and a status (Act, directive, final guidance, draft). Golden tests render RMCPs for six synthetic dealers and show the text diff. The attorney signs each release with a "law as at" date. Customers see release notes, and affected RMCPs get a "review suggested" task.

**Multi-tenancy.** `tenant_id` on every row, a default manager that always filters by tenant, Postgres row-level security, and automated cross-tenant read tests for every model and file route. Concerns, STRs and terrorist property reports live in a separate schema with their own key and access log. No data is shared across dealers (sharing crime information for third parties would need prior authorisation, [POPIA s57](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf)).

**Data sources:**

| Source | Use | Access | Cost | When |
|---|---|---|---|---|
| goAML 5.4 | Where the dealer files; we never connect | Personal web logins; XML batch upload only on request to the FIC; schema sits in the FIC's UAT environment, not public ([Moonstone](https://www.moonstone.co.za/?p=57394)) | Free | Guides and copy sheets MVP; XML v1 if allowed |
| FIC TFS list | Screening; version label | Excel, PDF, XML download ([FIC TFS](https://tfs.fic.gov.za/Pages/TFSListDownload)); mirrors the UN list within 24 hours | Free | MVP |
| UN consolidated list | Machine source | XML; 736 individuals and 274 entities on 9 Oct 2026 ([UN](https://scsanctions.un.org/resources/xml/en/consolidated.xml)) | Free | MVP |
| FIC Act, Regs, directives, guidance | Rule and clause library | PDFs; guidance is copyright, so cite, never copy ([PCC 53](https://www.fic.gov.za/wp-content/uploads/2023/09/2022.08-PCC-PCC-53-RMCP.pdf)) | Free | MVP |
| SA public holidays | Business-day clocks | Rule table checked against [gov.za](https://www.gov.za/about-sa/public-holidays) each year | Free | MVP |
| ID verification (Home Affairs) | Verify IDs | Resellers: VerifyNow from R2.99 a check; AML GO R1-R7 ([VerifyNow](https://www.verifynow.co.za/pricing); [AML GO](https://amlgo.co.za/)) | Pass-through | v1 |
| PEP data | PEP checks | No official SA list; self-declaration against the Act's position lists in MVP; OpenSanctions has about 3,036 SA office-holders, about EUR 0.10 a call ([OpenSanctions](https://www.opensanctions.org/countries/za/)) | Pass-through | MVP / v1 |
| CIPC company data | Directors of company clients | No open API confirmed; resellers (unverified) | Pass-through | Manual upload MVP; v1 |
| SADPMR permits | Dealer's and trade clients' permits | No public register found | Free | Manual |
| E-mail, SMS | Reminders (no case details) | Postmark or SES; SA bulk SMS R0.14-R0.24 each | Small | MVP / v1 |

**Security and privacy.**

- **POPIA roles.** The dealer is the responsible party; the founder's foreign company is its operator. A written operator agreement (s21) with breach notice, and a transfer basis under s72 because staff abroad can reach the data ([POPIA](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf)). Fines up to R10m (s109).
- **Our own data.** With servers in Johannesburg, POPIA probably applies to the foreign company directly (s3(1)(b)(ii), my reading). Commentary says the Regulator's portal will not register an information officer based abroad, so a South Africa-based deputy or a "POPIA representative" may be needed ([Mondaq](https://mondaq.com/southafrica/privacy-protection/1055352/popia-registration-of-information-officers-and-deputy-information-officers); [Michalsons](https://www.michalsons.com/blog/information-officer/12231)) (unverified; cost unverified).
- **FICA rules that shape the design** ([01](01-law-and-requirements.md#summary)):
  - s24: a dealer whose records a third party keeps must tell the FIC who that is. Onboarding generates the notice with our particulars.
  - Records may be in the cloud; abroad only if no foreign law blocks access; dealers should test retrieval ([GN 7B, paras 169-174](https://www.fic.gov.za/wp-content/uploads/2026/08/Guidance-Note-7B-%E2%80%93-Implementation-of-various-aspects-of-the-FIC-Act.pdf)). Hosting in Johannesburg plus a one-click export answers this.
  - 5-year retention; nothing deleted early; deletions logged.
  - No tipping off: STR content never goes into e-mail, support views or AI.
- **Baseline:** MFA required for owner, compliance officer, MLRO and adviser roles; encryption in transit and at rest; append-only hash-chained audit log; daily encrypted backups to a second SA location with a timed restore drill; OWASP ASVS level 2; dependency and secret scanning; **an external penetration test before launch, then yearly.**
- **Liability:** attorney-signed releases; owner-written mandatory fields; mock inspections; plain messages that the dealer files and stays responsible and that a goAML upload is not approval; liability cap at 12 months' fees. An RMCP is an internal document, not court work, so the Legal Practice Act's reserved work should not apply (my reading of [s33](https://www.acts.co.za/legal-practice-act-2014/33__authority_to_render____); confirm with the attorney).

**Hosting and running cost.** Vultr Johannesburg costs the same as other regions: 2 vCPU / 4 GB for US$20 a month ([Vultr API](https://api.vultr.com/v2/plans)). Vultr has no object storage in Johannesburg, so files go on an encrypted block volume and offsite backups go to Amazon S3 Cape Town at US$0.0274 per GB-month ([AWS price list](https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonS3/current/af-south-1/index.json)). A fully managed AWS Cape Town set-up costs about 3 times more at the small end.

| Customers | Running cost a month (excl. staff and payment fees) | Share of revenue at R5,000 a year each |
|---|---|---|
| 50 | about US$30-110 | 2.5-8.5% |
| 300 | about US$170-340 | 2.3-4.5% |
| 1,000 | about US$500-790 | 2-3% |

My estimates from [03](03-product-and-tech.md#monthly-running-cost-estimate-us-excluding-staff-vat-and-payment-fees). Payment fees (about 5%) cost more than hosting. People and trust, not servers, are the cost.

---

## 7. Development steps

### Timing

- **The 2026 deadlines come too early.** Directive 10 is due Thu 29 Oct and the first yearly RMCP upload Sat 31 Oct 2026. A 3-week build ends on 30 Oct with unreviewed content. Do not promise software for these dates.
- **Serve late filers by hand in November.** The founder runs 3-5 dealers through the staging app with consent, and the attorney reviews each RMCP. The FIC accepted late RMCPs in 2025 but called them non-compliant ([Moonstone](https://www.moonstone.co.za/fic-accepting-rmcps-after-the-12-march-deadline/)).
- **Plan:** start **Mon 12 Oct 2026**; **MVP feature-complete on staging Fri 30 Oct** (3 weeks); **sellable launch Mon 30 Nov 2026** (week 8), after attorney sign-off, a penetration test and pilots. No SA public holidays fall in between ([gov.za](https://www.gov.za/about-sa/public-holidays)).

### How the founder works with Claude Code and parallel agents

- The founder is architect, reviewer, integrator, product owner and content manager. Agents write code, tests, help text and first drafts of content. The attorney approves all legal content. A compliance practitioner checks workflows and mock-inspects pilot RMCPs.
- **5-7 streams at once, at most.** The founder's review time is the limit. Each stream works in its own git worktree and owns its own Django app.
- **Contracts first.** By the end of week 1 the core models, service interfaces, URL names and UI components are frozen.
- **Spec, then code.** Each task has given/when/then tests; the agent writes tests first; a separate review agent checks security; the founder merges small pull requests (under about 400 lines).
- **Synthetic dealers from day 1:** a one-shop jeweller, a Krugerrand and bullion dealer, a diamond dealer with three SADPMR permits, a scrap gold buyer, a motor dealer with two branches and a franchise, a farm-equipment dealer, and an adviser with five clients.

### Agent work streams

| Stream | Scope | Done by Fri 30 Oct when |
|---|---|---|
| **S0 Foundation** (founder + 2 agents, week 1) | Skeleton, MFA, tenants, roles, entities, registrations, locations, people, audit log, encrypted files, e-mail, PDF/DOCX, jobs, CI/CD, staging on Vultr Johannesburg | Contracts frozen; staging deploy on every merge; tenant tests in CI |
| **S1 Rules and calendar** | Rule YAML; deadline engine with business days; reminders; public checker | All rule kinds pass time-travel tests; 25 checker cases correct |
| **S2 Risk and RMCP** | Questionnaire, scoring, controls, clause assembly, coverage annex, versions, approval, `YYYYMMDD_RMCP.pdf`, read-and-confirm | RMCPs render for all 6 synthetic dealers; no s42(2) element unmapped |
| **S3 Registers** | Deals, payments, CTR/STR/TPR records and copy sheets, client file and BO cascade, permits and source of goods, restricted concern log, training, staff screening | A 200-deal fixture gives the right CTR flags and due dates; restricted-area tests pass |
| **S4 Screening** | UN and FIC ingest, versions, diff, matching, re-screen, hit review, certificates | 100-name test set fully caught; re-screen of 10,000 subjects under 2 minutes |
| **S5 Commercial and evidence** | Marketing site, onboarding, Paddle sandbox, adviser switcher, goAML guides, s24 notice, Directive 3A letter, inspection pack, self-check, export | Sandbox purchase activates a plan; jeweller inspection pack complete |
| **S6 Content** (agents draft, attorney reviews) | Requirement library from 01; about 80 questions in 6 packs; scoring; original clause library mapped to s42(2)(a)-(s); sector risk library from the FIC's DPMS sector risk assessment and PCC 58 red flags; guides; terms, operator agreement, privacy notice | Draft v0.9; attorney round 1 booked |
| **S7 QA and security** (throughout) | Threat model; cross-tenant tests; end-to-end tests; scans; restore drill | No failing tenant test; restore drill timed |

### Calendar

| Week (start) | Engineering | Content and legal | Sales and pilots |
|---|---|---|---|
| 0 (Sat 10 Oct) | Accounts (code hosting, Vultr, e-mail, Paddle sandbox); `CLAUDE.md` | Shortlist 2-3 FICA attorneys and 1 practitioner; ask for fixed quotes | Pick 40 pilot targets from the JCSA directory |
| 1 (Mon 12 Oct) | **S0 foundation**; checker logic and matching as pure functions | Requirement library v0. **LC0:** attorney engaged; written questions sent (s24 notice, e-approval, reserved work, STR access, POPIA s57 and s72, information officer) | Landing page and free checker; 10 discovery calls; **PCC 126 comments by Fri 16 Oct** |
| 2 (Mon 19 Oct) | **S1-S5 in parallel**, S7 alongside | Questionnaire, scoring, clauses. **LC1:** attorney approves the requirement map, risk method and RMCP outline | Recruit 5-8 pilots (2 jewellers, 1 bullion, 1 stones, 1 scrap buyer, 1-2 motor or other goods, 1 adviser) |
| 3 (Mon 26 Oct) | **Fri 30 Oct: MVP on staging** (draft content) | Content v0.9 | Talk to dealers who just filed: what hurt |
| 4 (Mon 2 Nov) | Integration; end-to-end and time-travel tests | Attorney review round 1 | Concierge late-filer pilots (3-5) |
| 5 (Mon 9 Nov) | Fixes; billing live; security sheet | **LC2:** content v1.0 signed; terms, operator agreement, privacy notice approved | Founding offer to the waitlist |
| 6 (Mon 16 Nov) | **External penetration test** (3-4 days) | Pilot feedback into content | Pilots onboard |
| 7 (Mon 23 Nov) | Fix findings; retest; restore drill | Practitioner mock-inspects 3 pilot RMCPs | Adviser partners trained |
| 8 (Mon 30 Nov) | **Sellable launch**; self-serve opens | Weekly FIC watch starts | JCSA contacts, trade press, advisers |
| Dec 2026 | v1a: client self-service link and QR; CSV import; adviser dashboard | Final PCC 126 release if published | Inspection-season content |
| Jan-Mar 2027 | v1b: RCR workbook; vendor ID and PEP checks; yearly review wizard; training course; WhatsApp/SMS | Content for final PCC 126 and PCC 5E | New-registration campaign if PCC 126 is final |
| Apr-Jul 2027 | v1c: goAML XML for CTRs if the FIC allows; FIC request log; new-product risk assessment | RCR content; Bill changes if enacted | RCR campaign if a round opens |
| Aug-Oct 2027 | Hardening; second penetration test | Yearly content review | 31 Oct 2027 campaign; renewals |

The 3-week MVP is realistic because there is no official integration, the stack is plain and content runs in parallel. The 8-week date depends on two outside people: **book the attorney and the penetration tester in week 0.**

**If time slips, cut first:** DOCX export, the adviser switcher, the RCR checklist, read-and-confirm links. **Never cut:** tenant isolation tests, the restricted concern area, MFA, screening evidence, attorney sign-off, the penetration test, tested backups.

### MVP definition of done (sellable 30 Nov 2026)

1. A pilot dealer gets from sign-up to an approved, correctly named RMCP PDF in **under 90 minutes** of the owner's time, in at least 4 of 5 pilots.
2. Every RMCP covers every s42(2)(a)-(s) element or gives a reason; every clause comes from a signed release (LC2).
3. A practitioner's mock inspection of 3 pilot RMCPs finds no missing element and no unfilled template text.
4. The checker is right in 25 attorney-reviewed cases.
5. The deadline engine passes time-travel tests for every rule kind, including holidays.
6. A 200-deal fixture gives the right CTR flags: R50,000.00 cash triggers, R49,999.99 does not; R60,000 cash plus R40,000 EFT on a R100,000 item triggers ([01, requirement 46](01-law-and-requirements.md#product-requirements)).
7. Screening catches all 100 test names; each check stores the list version and decision; a list change triggers re-screening within 2 hours.
8. Cross-tenant and restricted-area tests pass; no open high or critical penetration-test finding; a timed restore is done.
9. The inspection pack contains every item in flow 8.
10. Terms, operator agreement, privacy notice and s24 notice are approved by the attorney.
11. Paddle checkout works end to end with invoices.
12. At least 3 pilots used it end to end, and at least 2 paid.

### Build budget (cash; founder unpaid; no hired developers)

| Item | MVP, weeks 0-8 | First year after launch | Basis |
|---|---|---|---|
| Claude Code (2 Max seats for 2 months, then 1) | US$800 | US$2,400 | [Anthropic](https://support.claude.com/en/articles/11049744-how-much-does-the-max-plan-cost) |
| SA FICA attorney (content review, terms, operator agreement, opinions; 40-60 hours) | US$4,800-10,900 (R80k-R180k) | US$2,400-4,800 | No published rates; R2,000-R3,000 an hour assumed (unverified); [Global Law Experts](https://globallawexperts.com/commercial-lawyer-fees-south-africa/) |
| Compliance practitioner (workflows, 3 mock inspections) | US$1,500-3,600 | US$600-1,200 | AML GO charges from R2,500 per RMCP review ([AML GO](https://amlgo.co.za/)) |
| External penetration test with retest | US$5,000-8,000 | US$2,000-5,500 | No SA quotes found; international ranges ([Kolonell](https://kolonell.com/en/blog/web-application-penetration-test-price-sme-2026)) |
| Hosting and tools | US$150-250 | US$600-2,500 | [03](03-product-and-tech.md#budget) |
| Insurance (PI and cyber) | US$0-1,800 | US$600-1,800 | Quote needed (unverified) |
| Optional pilot trip | US$0-2,500 | US$0-2,500 | My estimate |
| Contingency, about 15% | US$1,800-4,200 | US$1,300-3,200 | |
| **Total** | **about US$14,000-32,000 (R230k-R530k)** | **about US$10,000-24,000** | [03](03-product-and-tech.md#budget) |

- **Trust costs money; code does not.** The attorney and the penetration test are two-thirds or more of MVP cash.
- **To spend less:** make the attorney a channel partner (lower content fee, paid reviews from dealers), and get fixed quotes from two or three SA testers. Do not launch without an external test: the Pack holds ID copies and suspicion records.

---

## 8. Go-to-market

### Pricing

| Plan | Price excl. VAT (yearly, in advance) | Includes | For |
|---|---|---|---|
| **Starter** | **R2,900** (R3,335 incl. VAT) | Checker; sector RMCP builder with goAML-ready PDF; 31 October and Directive 10 calendar; e-mail reminders (WhatsApp from v1); training log; 1 user | One-site dealer |
| **Dealer** (main plan) | **R5,900** (R6,785 incl. VAT) | Starter plus yearly guided update, deal and cash register with 3/5/15-day clocks, client file and screening log, RCR helper, inspection pack, 3 users | Most jewellers, bullion and stone dealers, small motor dealers |
| **Group** | **R5,900 + R1,200 per extra branch or SADPMR permit** | Dealer plus location register and one RMCP set per permit | Multi-site jewellers, dealer groups |
| **Consultant** | **R1,990 a month or R19,900 a year for up to 15 dealers**, then R100 a month per file | All Dealer features per client; white-label PDFs; dashboard | Consultants, accountants |

Source: [04](04-gtm-company-finance.md#plans-billed-yearly-in-advance-prices-in-rand). Monthly billing at a 20% premium (R290 / R590 a month).

- **Attorney or practitioner review:** about R2,500-R3,500, **invoiced by the partner, not by us.** Paddle bars legal advice ([Paddle](https://paddle.com/help/start/intro-to-paddle/what-am-i-not-allowed-to-sell-on-paddle)). **Take no referral fee from attorneys** (fee-sharing and touting rules, [LPC Code via Acts Online](https://www.acts.co.za/legal-practice-act-2014/n168_notice_no__168_of_2019); current wording not read). A 15-20% referral fee is possible with non-attorney consultants.
- **ID and PEP checks:** link out to VerifyNow or AML GO at first; pass-through API in v1.
- **Founding offer:** the first 30 dealers get 30% off year 1 (Dealer R4,130) for a feedback call and a testimonial.
- **The R9,000 of the re-assessment** is now Dealer (R5,900) plus a partner review (R2,500-R3,500). The cheaper entry suits the many dealers who will not pay R9,000.
- **Average revenue:** about R5,200 a dealer a year (R4,600 in year 1); consultants about R20,000.
- **VAT display:** quote prices "excl. VAT", as local competitors do; Paddle adds 15% at checkout.
- **Why the price works:** one avoided R10,000 fine pays for a year of any plan, and a weak-RMCP fine (R100,000 in the 2025/26 dealer case) is 17 times the Dealer price.

### Channels, in priority order

1. **Calls to the JCSA directory** (581 listings with phone and e-mail; Gauteng and Western Cape first). A part-time SA caller books 20-minute screen-share demos; the founder runs them. Cold e-mail may be limited by POPIA's direct-marketing rule (s69, unverified for business addresses), so go phone-first.
2. **JCSA partnership.** "Guidance on compliance" is already a member benefit ([JCSA](https://www.jewellery.org.za/membership)). Offer members 15% off and a free webinar on "31 October and PCC 126"; aim for a talk at Jewellex Africa 2027 (6-7 Sep 2026 edition at Gallagher, Midrand, [listing](https://www.cantonfair.net/event/37287-jewellex-africa); 2027 date unverified).
3. **Consultants and accountants** on the Consultant plan: one brings 5-15 dealers.
4. **Deadline content and free tools:** the item 20 check; an RMCP gap check against the 19 s42(2) elements; a free 31 October and Directive 10 calendar file. Guest articles for Moonstone, GoLegal, Accounting Weekly, The Jeweller and DealerFloor.
5. **Referral swaps with screening vendors** (VerifyNow, AML GO).
6. **Refiners and bullion houses** (Metcon, Rand Refinery): a note for their trade customers.
7. **Small seasonal Google Ads**, capped at about R3,000 a month.
8. **Motor dealers** (NADA, RMI, DealerFloor) from month 4, after the jeweller pack sells. Position as the yearly-file add-on to whatever KYC tool they already use.

**Sales motion.** Self-serve for Starter (checker, Paddle checkout, questionnaire). Assisted for Dealer and Group (call or WhatsApp, 20-minute demo with their own sub-sector pack, Paddle payment link). A 45-minute onboarding call for the founding 30. Renewal reminders at 30 and 7 days; "your RMCP update is ready" to everyone on 1 August. **No SA agent signs contracts**: partners only refer, which avoids a local permanent establishment.

### Selling calendar

| Period | What happens | Our action |
|---|---|---|
| Oct 2026 | Directive 10 (29 Oct) and first RMCP upload (31 Oct); the FIC refused a transition period ([Moonstone](https://www.moonstone.co.za/?p=61635)) | Content, reservations, PCC 126 comment; no software promise |
| Nov-early Dec 2026 | Late filers; jewellers' Christmas trade begins | Concierge pilots; paid launch 30 Nov to pilots, reservations and late filers only |
| Mid-Dec 2026-mid-Jan 2027 | Quiet: Christmas trade and summer holiday (inference) | Build motor pack, PCC 126 content, partner agreements |
| **Feb-Apr 2027** | Final PCC 126 expected (timing unverified); new per-permit registrations | **Second season.** SA trip; JCSA webinar; Google Ads |
| Any time | FIC inspections; next RCR window (not announced) | Inspection-readiness content; RCR campaign when a round opens |
| **Aug-Oct every year** | Yearly RMCP update opens 1 Aug; upload by 31 Oct; Jewellex in early September | **Main season.** Renewals and new sales |

### Marketing budget, year 1 (Oct 2026-Sep 2027): about R270,000 (US$16,400)

| Quarter | Focus | Budget | Gate |
|---|---|---|---|
| Q1 Oct-Dec 2026 | Calls, deadline articles, free tools, pilots; caller on hourly or per-demo pay | R30,000 | Spend freely |
| Q2 Jan-Mar 2027 | PCC 126 season: one-week trip to Johannesburg and Cape Town (about R35,000), JCSA webinar, Google Ads, caller | R80,000 | **Only if the day-90 gate passes** |
| Q3 Apr-Jun 2027 | Motor dealers and consultants: DealerFloor article, webinars, case studies | R50,000 | Only if 20+ paying dealers by 30 Apr |
| Q4 Jul-Sep 2027 | Renewal and October season: Jewellex talk or stand, trip, trade-press ad, Google Ads, "update your RMCP" campaign | R110,000 | Only if 20+ paying dealers by 30 Apr |

Plus partner commissions, modelled as 8% of new-dealer billings. Source: [04](04-gtm-company-finance.md#12-month-marketing-plan-and-budget); the gates are my addition. KPIs: demo-to-paid 30%; cost per paying customer under R4,000 in year 1 and under R2,500 by year 2; renewal 80%; 40% of customers via partners.

### First 90 days (Day 1 = Mon 12 Oct 2026)

| Dates | Actions | Done when |
|---|---|---|
| 12-16 Oct | File comments on draft PCC 126 (by 16 Oct). Apply to Paddle with a software-only description. Landing page with waitlist and free checker. Ask two attorneys and two penetration testers for fixed quotes. S0 build | Comments sent; Paddle application in; page live; quotes requested |
| 12-30 Oct | 30 calls to JCSA-directory dealers. Ask: did you file an RMCP, who wrote it, what did it cost, what happens on 31 October? Offer the founding price as a no-payment reservation. Track who refuses a card payment to a foreign company | 30 conversations; at least 5 reservations |
| 19-31 Oct | Publish "31 October RMCP: what jewellers must upload" and "Directive 10 in 5 minutes". Sign the attorney. MVP on staging 30 Oct | 2 articles live; attorney engaged |
| 2-13 Nov | 3-5 concierge late-filer pilots, attorney checking each RMCP. Publish "Missed 31 October? What to do now" | Pilot RMCPs approved by their owners |
| 9-27 Nov | Legal pack signed; penetration test and fixes; JCSA meeting; demo to 5 consultants | Legal pack done; JCSA met |
| 30 Nov-11 Dec | **Paid launch.** Convert pilots and reservations at the founding price. First consultant | 10 paying dealers; 1 consultant |
| 14 Dec-8 Jan | Quiet season: motor and other-goods packs to beta, PCC 126 content, referral agreements, plan the February trip | Motor pack in beta; 2 referral partners |
| **Sat 9 Jan 2027** | **Day-90 review against the kill criteria** | Go / adjust / stop |

Day-90 targets: 12 paying dealers and 1 consultant; 150 qualified leads; 1 partner promoting (JCSA, a refiner or a screening vendor); pilot RMCPs rated "would pass" by the attorney.

---

## 9. Payments, company and legal

### Payments: sell from the founder's foreign company through Paddle, in rand

- **Paddle as merchant of record.** South Africa and the rand are supported for charging and payout ([Paddle countries](https://developer.paddle.com/concepts/sell/supported-countries-locales); [currencies](https://developer.paddle.com/concepts/sell/supported-currencies)). Fee **5% + 50 US cents** per transaction, about **R303 (5.1%) on a R5,900 plan** ([Paddle pricing](https://www.paddle.com/pricing)). Paddle is the seller and **charges 15% SA VAT itself on B2B and B2C sales** ([Paddle tax](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)). Set prices tax-exclusive so checkout shows "R5,900 + VAT".
- **Stripe as plan B.** It charges in rand ([Stripe currencies](https://docs.stripe.com/currencies)). For an EU seller: 3.15% + EUR 0.25 for international cards, plus 2% conversion, plus 0.7% Billing and 0.5% Tax, so **about 6-6.6% all-in** ([Stripe IE](https://stripe.com/ie/pricing); [Billing](https://stripe.com/ie/billing/pricing); [Tax](https://stripe.com/ie/tax/pricing)). With Stripe the founder must register for SA VAT once sales of electronic services to South Africa pass **R1m in 12 months**, unless selling "solely" to VAT-registered businesses ([SARS e-services FAQ](https://www.sars.gov.za/wp-content/uploads/Ops/Guides/Legal-Pub-FAQs-VAT02-FAQs-VAT-on-Supplies-of-Electronic-Services.pdf)). The base case passes R1m around April-June 2028 ([04](04-gtm-company-finance.md#seller-side-must-a-foreign-seller-register-for-south-african-vat)).
- **Buyers can pay abroad by card.** Exchange control allows card payments for foreign services up to R50,000 per transaction; a 2026 draft raises it to R100,000 ([SARB draft circular](https://www.resbank.co.za/content/dam/sarb/what-we-do/financial-surveillance/financial-surveillance-documents/draft-circulars-and-documents-for-comments/Draft%20Exchange%20Control%20Circular%20B.1%20-%20Credit%20or%20debit%20card%20limit.pdf)). The buyer's bank may add a fee (Capitec: 2%, capped at R200, [Capitec 2026](https://www.capitecbank.co.za/globalassets/pages/documents-library/business/business-bank-fees-pricing-guide-2026.pdf)).
- **Bank transfer is the weak spot.** A rand EFT to a foreign company is not possible; the dealer would need a SWIFT payment (my understanding; unverified per bank). Paddle's invoice option takes only USD, EUR and GBP. Offer a EUR/USD invoice to groups that insist, and **count how many prospects refuse card** from the first call.
- **No withholding tax** on service fees paid to non-residents ([PwC](https://taxsummaries.pwc.com/south-africa/corporate/withholding-taxes)). Royalties carry 15%, cut to 0% by the UK, Irish, Dutch, German and US treaties (same source). Sell the Pack as a service, not a licence of the RMCP text.
- **Paddle risks.** It bars "legal advice", so keep attorney reviews off our checkout. Ask before building: will it accept a compliance-document product, and do its invoices support an SA input-VAT claim (unverified)?

### Company: no South African company at launch

Nothing in the law requires one: buyers can pay by card abroad, there is no withholding tax on service fees, and Paddle handles VAT ([04](04-gtm-company-finance.md#verdict-not-needed-at-launch)). Use SA partners on referral terms that do not let them sign for us, to avoid a local permanent establishment.

**What a (Pty) Ltd would cost, if it is ever needed** ([MJK Inc](https://mjkinc.co.za/doing-business-in-south-africa/company-registration-foreigners) unless noted):

| Route | Fees | Time | Notes |
|---|---|---|---|
| **Founder files himself** (CIPC is online-only, so "in person" means BizPortal or a bank's CIPC service, [FNB](https://www.online.fnb.co.za/business-banking/cipc+bee/cipc.html)) | **About R175-R225** official fees: incorporation R175 (R125 with a reserved name), name reservation R50, bespoke MOI R475 if wanted; no minimum capital; beneficial-ownership filing free ([ElyForma](https://elyforma.com/blog/cipc-company-registration-fees-2026)) | 1-3 weeks to a registered company; 4-8 weeks to a working one, mostly the bank | Foreign directors are pre-verified with a certified passport (CIPC says 2 working days; practitioners report 10-15) |
| **Local attorney or agent, remotely** | **About R5,000-R15,000** for a foreign-owned company with notarised papers, shares, BO filing and bank help (my estimate in [04](04-gtm-company-finance.md); online agents charged R880 in 2018, [GovChain](https://help.govchain.co.za/en/articles/1807746-how-much-does-company-registration-cost)) | Same, bank-bound | Recommended route if ever needed |
| International turnkey firm | US$26,080 (about R430,000), then US$8,303 a year ([Healy](https://www.healyconsultants.com/?p=3983); [renewal](https://www.healyconsultants.com/wp-content/uploads/2022/12/South-Africa-LLC-Annual-Renewal.pdf)) | | Not worth it |

**The real hurdles are people and the bank:** SARS needs a **public officer resident in South Africa** at all times (Healy charges US$3,150 a year; a local accountant may do it for less, unverified); a bank account takes 3-8+ weeks for foreign directors; and a registered office is needed.

**Ongoing cost:** about **R20,000-R40,000 a year** with a local accountant as public officer (accountant R8,500-R28,000, [ProCompare](https://www.procompare.co.za/providers/geldenhuys-j-co); CIPC annual return R100-R3,000; address and bank fees, my estimates). R65,000+ with an international provider. Corporate tax 27%; dividends to a foreign parent 20%, cut to 5-10% by most treaties ([PwC](https://taxsummaries.pwc.com/south-africa/corporate/taxes-on-corporate-income)).

**When to form one:** (a) more than about 30% of qualified prospects refuse a foreign card charge; (b) JCSA, NADA, a reseller or a large group insists on a local supplier, an SA VAT invoice or a B-BBEE certificate; or (c) revenue passes about R1.2m-R1.9m a year, where local card rails (about 3%) save more than the company costs ([04](04-gtm-company-finance.md#ongoing-costs-of-a-local-company-per-year)). In the base case that is year 3 at the earliest.

**One local cost that may arise anyway:** a South Africa-based deputy information officer or "POPIA representative", if hosting in Johannesburg brings the foreign company under POPIA directly (section 6; unverified, cost unknown). Ask the attorney in week 1.

### Legal documents and consumer law

1. **Terms of service:** software and information, not legal advice; the dealer approves its own RMCP and files on goAML; we never log in to goAML; liability capped at 12 months' fees and no liability for FIC fines; change-of-law promise (content updated within 30 days of a final text); original RMCP text that only cites FIC guidance.
2. **Data processing addendum** at sign-up: POPIA s21 operator terms and s72 transfer terms ([POPIA](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf); [MJK Inc on transfers](https://mjkinc.co.za/popia/cross-border-transfers)).
3. **s24 record-keeper notice** template with our particulars, for each dealer to send the FIC ([Act s24(3); Regs 20](https://www.fic.gov.za/wp-content/uploads/2023/10/Money-Laundering-and-Terrorist-Financing-Control-Regulations.pdf)).
4. **Privacy notice and PAIA manual** for our own data.
5. **Consumer Protection Act:** covers juristic persons under R2m turnover or assets, and sole traders ([Gazette 34181 via policyvault](https://policyvault.africa/?p=75225)). Safe default for everyone: yearly term, cancel any time with a pro-rata refund on request, renewal reminder.
6. **ECTA:** natural-person buyers may cancel within 7 days ([ECTA s44](https://www.acts.co.za/electronic-communications-and-transactions-act-2002/44__cooling_off_period)). Offer a 14-day money-back promise to all.
7. **Insurance:** professional indemnity and cyber cover with SA territory; budget R1,500 a month (unverified; get quotes).
8. **Partner agreements:** attorneys bill dealers directly; no referral fee from attorneys; referral fees only to non-attorney consultants.

---

## 10. Financials

36-month model by quarter from October 2026, rand excl. VAT, cash basis (yearly plans paid in advance), **before founder pay and income tax**. All inputs are planning assumptions from [04](04-gtm-company-finance.md#financial-model); the peak-cash adjustment is mine.

**Main assumptions:**

| Input | Low | Base | High |
|---|---|---|---|
| New paying dealers, year 1 / 2 / 3 | 30 / 70 / 90 | 70 / 160 / 200 | 100 / 240 / 300 |
| Dealers lost at each renewal | 35% | 20% | 12% |
| Average dealer price | R4,500 | R5,200 | R5,800 |
| New consultant accounts, year 1 / 2 / 3 | 1 / 3 / 4 | 3 / 8 / 10 | 5 / 12 / 15 |
| Sales and marketing, year 1 / 2 / 3 | R225k / R230k / R230k | R270k / R340k / R405k | R310k / R470k / R590k |
| Payment fees; partner commissions | 5.2%; 8% of new-dealer billings | same | same |
| AI coding tools; hosting and services; tools and insurance | R5,000; R3,000 rising to R5,600-R9,800; R4,000 a month | same | same |
| SA support contractor | year 3 R5,000 a month | year 2 R10,000, year 3 R15,000 a month | year 2 R15,000, year 3 R25,000 |

**Base case by year:**

| | Billings | Costs | Net cash |
|---|---|---|---|
| Year 1 (Oct 2026-Sep 2027) | R340k | R662k (incl. R205k one-off legal and security, R270k marketing) | **-R322k** |
| Year 2 | R1.33m | R838k | **+R489k** |
| Year 3 | R2.49m (US$151k) | R1.07m | **+R1.42m (US$86k)** |

- **ARR at month 36: about R2.58m (US$156k)**, from 373 dealers and 18 consultants. That is about 7% of item 20 registrations and about 10% of likely small-firm buyers.
- **Break-even:** trailing 12 months positive from January-March 2028 (month 18); cumulative cash positive from April-June 2028 (month 21).
- **Peak cash need:** R322k in 04's model, reached in September 2027. With 03's fuller attorney, practitioner and penetration-test costs, add about R50k-R250k: **plan on about R370k-R570k (US$22k-35k), call it R450k.**
- **With founder pay** of R40,000 a month from month 13, 04 puts peak need at about R339k (before my adjustment) and cumulative cash at month 36 at about +R626k.

**Scenario summary:**

| | Low | Base | High |
|---|---|---|---|
| Dealers / consultants at month 36 | 148 / 6 | 373 / 18 | 589 / 29 |
| ARR at month 36 | R0.88m (US$53k) | R2.58m (US$156k) | R4.48m (US$271k) |
| Year-3 billings | R0.85m | R2.49m | R4.34m |
| Year-3 net cash | R0.24m | R1.42m | R2.75m |
| Cumulative cash at month 36 | -R238k | +R1.59m | +R3.63m |
| Peak cash need, 04 model | R481k | R322k | R198k |
| Peak cash need, my adjustment | about R530k-R730k | about R370k-R570k | about R250k-R450k |

**Sensitivities (base, from 04):**

| Change | ARR month 36 | Year-3 net |
|---|---|---|
| 30% fewer new dealers every year | R1.93m | R0.83m |
| Average price R4,200 | R2.16m | R1.04m |
| No consultant channel | R2.18m | R1.12m |
| 30% lost at each renewal | R2.43m | R1.27m |

**The business depends most on new-dealer volume**, then price, and least on renewals within 36 months.

**Unit economics (base):** gross margin about 90%; lifetime value about R23,000 per dealer; acquisition cost R3,700 in year 1, about R2,000 later; LTV/CAC about 6-12x; payback immediate because plans are prepaid.

**How much can be lost.** If the day-30 gate fails (10 Nov), the loss is mostly the first attorney round plus small costs, about R100k-R200k (my estimate). If the day-90 gate fails (9 Jan), the attorney and the penetration test are spent: about R250k-R450k (my estimate). To cap it, **book the penetration test only after the day-30 gate passes.**

**Is it a living?** In the base case, year 3 pays about R1.4m (US$86k) before tax for one founder plus a part-time SA contractor. That is a good small business. It is not a venture. Exit at 2-4x revenue would be about R5m-R10m; likely buyers are nCino, UPAY/AML GO, VerifyNow or Moonstone ([04](04-gtm-company-finance.md#exit-and-partnerships); valuation multiples from vendor sources, [beancount.io](https://beancount.io/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide)).

**The jewellers-only version does not work.** 664 x 20% share x R6,000 is under R1m a year ([02](02-market-and-competition.md#implications-for-positioning-and-pricing)). About two-thirds of base-case customers must be motor and other-goods dealers.

---

## 11. Regional expansion

The engine (questionnaire, RMCP builder, calendar, register, inspection pack) carries over. The legal content does not. Each country needs its own rules, forms and a local reviewer: budget about R60,000-R100,000 of legal content per country (my estimate, [04](04-gtm-company-finance.md#regional-expansion)). Enter only after South Africa reaches about 200 paying dealers. Regional revenue is not in the model.

| Order | Market | Why | Caveats |
|---|---|---|---|
| 1 (years 2-3) | **South Africa, wider** | Motor (4,277) and other goods (640) first; then estate agents (9,695) and attorneys (21,034) under the same RMCP duty ([AR 2025/26, p. 29](https://www.fic.gov.za/wp-content/uploads/2026/09/FIC-Annual-Report-2025-2026.pdf)) | Adjacent sectors are crowded (nCino KYC via the Law Society; estate-agent software) |
| 2 (year 3) | **Namibia** | English, diamond trade, goAML since 2008, new Financial Intelligence Act 2023 ([Bank of Namibia](https://www.bon.com.na/getattachment/416e1d18-9260-4590-87f7-cdf67247fc1b/.aspx); [UNODC](https://www.unodc.org/unodc/en/frontpage/providing-affordable-it-tools-to-developing-countries.html)) | Dealer coverage unverified; small |
| 3 (year 3) | **Botswana** | Diamond hub; the 2009 Act already listed precious-stone dealers and car dealerships; goAML in use ([FI Act 2009](https://policyvault.africa/wp-content/uploads/policy/BWA549.pdf); [NBFIRA](https://www.nbfira.org.bw/goaml/)) | 2022 Act's schedule not read (unverified) |
| 4 (later) | **Kenya** | Precious-metal and stone dealers, jewellers and scrap buyers told to register by 11 April 2025 ([People Daily](https://peopledaily.digital/news/state-orders-dealers-in-precious-metals-stones-to-register-with-frc-by-april)) | Different law; no count |
| 5 (later) | **Mauritius** | Jewellery and precious-metal dealers must register with the FIU; goAML ([FIU notice](https://www.moneylaundering.com/wp-content/uploads/2024/04/Mauritaus.Notice.AMLCTF.32124.pdf)) | Small; English and French |

Paddle supports buyers in Namibia, Botswana, Kenya and Mauritius ([Paddle countries](https://developer.paddle.com/concepts/sell/supported-countries-locales)), so payments carry over.

---

## 12. Risks and mitigations

| Risk | Likelihood / impact | Mitigation |
|---|---|---|
| **Too few buyers, or low filing rates mean indifference rather than pain** | medium / high | Kill criteria at day 30, day 90, month 7 and month 12; cheap Starter plan; consultant channel |
| **Jewellers buy but motor dealers don't** (two-thirds of base customers) | medium / high | Motor content in the MVP; motor push from month 4; position as the yearly-file add-on to their KYC tool; partner with nCino rather than fight |
| **A generated RMCP fails an inspection** | medium / high (brand) | Answers drive the text; owner-written mandatory fields; attorney-signed releases; mock inspections; optional partner review; liability cap; PI cover |
| **nCino KYC or VerifyNow adds a yearly sector file** | medium / high | Move first on jewellers; sector depth; offer an integration; price below them |
| **The first deadline is missed** (31 Oct 2026; the FIC refused a transition) | certain / medium | Reservations and concierge late filers now; seasons Feb-Apr 2027 and Aug-Oct 2027 |
| **Draft PCC 126 and PCC 5E change** | high / low-medium | Rules marked "draft"; checker shows both rules; content releases within 30 days |
| **goAML forms or upload rules change** | medium / low | Versioned guides; pilot screenshots; weekly FIC watch; never scrape goAML |
| **Screening misses a name or the feed fails** | low / high | Two sources (UN and FIC); feed alarms; 100-name test set in CI; manual FIC search link as fallback |
| **Data breach of ID copies or suspicion records** | medium / high | Encryption, MFA, restricted schema, penetration test, minimal data, incident plan; POPIA fines up to R10m |
| **Tipping off through the product** (a crime under s53) | low / high | No STR content in e-mail, AI or support views; access logs |
| **The s24 notice puts dealers off** | medium / medium | One-click letter; explain that it is normal; attorney opinion on when it applies |
| **Paddle rejects the business or the category** | low-medium / medium | Software-only listing; reviews billed by partners; Stripe as plan B, then SA VAT registration before R1m |
| **Card-only checkout loses EFT-minded dealers** | medium / medium | EUR/USD invoice; measure refusals; local company if over 30% refuse |
| **POPIA information officer must sit in SA** | medium / low | Ask the attorney in week 1; local deputy or representative service |
| **Founder abroad: trust and support** | medium / medium | SA caller and support contractor; WhatsApp support; trips in February and September; JCSA endorsement |
| **AI-written code has hidden flaws** | medium / high | Tests first; review agent; small pull requests; founder review; penetration test |
| **Rand weakness** | medium / low-medium | Costs mostly small or in rand; 6% yearly price rise in the model |
| **Accidental SA permanent establishment** | low / medium | Partners refer only; customers accept terms online with the foreign company |

---

## 13. Milestones and kill criteria

| Date | Target (base) | Stop or rethink if |
|---|---|---|
| **Tue 10 Nov 2026** (day 30) | 30 dealer conversations; 5+ reservations; attorney engaged; Paddle approved; MVP on staging | **Fewer than 3 reservations from 30 conversations** -> do not book the penetration test; rethink the offer, test motor dealers or a consultant-only tool |
| Mon 30 Nov 2026 (day 50) | MVP definition of done met (section 7) | Penetration test leaves a high or critical finding -> delay launch until fixed |
| Fri 11 Dec 2026 (day 61) | Paid launch; 10 paying dealers | Paddle and Stripe both refuse -> pause until a payment route works |
| **Sat 9 Jan 2027** (day 90) | 12 paying dealers, 1 consultant, 150 leads, 1 partner promoting | **Fewer than 6 paying dealers** -> stop, or sell as a consultant tool only; no Q2 marketing spend |
| Fri 30 Apr 2027 (month 7) | 35 paying dealers; motor pack live; JCSA or another body promoting | **Fewer than 20 paying** -> cut marketing to the minimum; keep renewals |
| Thu 30 Sep 2027 (month 12) | 70 paying dealers, 3 consultants | **Fewer than 35 paying dealers** -> stop new spending; run for renewals or sell the code and content |
| Fri 31 Dec 2027 (month 15) | First renewals; 116 active dealers | **Renewal below 60%** -> fix the product before any more sales spend |
| Sat 30 Sep 2028 (month 24) | 216 dealers, 10 consultants; cash-positive on a trailing 12 months | Under 120 active -> no regional expansion; consider a sale |
| Sun 30 Sep 2029 (month 36) | 373 dealers; ARR about R2.6m | |
| Any time | | nCino KYC or VerifyNow launches a yearly dealer file below our price -> re-plan within 30 days; seek a partnership |

Source: [04](04-gtm-company-finance.md#milestones-and-kill-criteria), with the day-30 test gate and the day-50 row added from [03](03-product-and-tech.md#definition-of-done-for-the-mvp-sellable-on-30-nov-2026).

---

## 14. Open questions to settle first

1. **Willingness to pay.** Will jewellers pay R2,900-R5,900 a year when free templates exist? The first 30 calls answer this.
2. **Attorney.** Fixed fee for the content engine, terms and operator agreement; and written answers on: does the Pack make us an s24 record keeper, and what address do we give; is a click approval with identity, time and hash enough for s42(2B); may our staff access STR records as operator, or must they be encrypted end-to-end; does POPIA s57 prior authorisation apply; must a foreign operator register an SA-based information officer; does the Legal Practice Act's reserved work touch the Pack? ([03](03-product-and-tech.md#open-questions))
3. **Paddle.** Will it accept a compliance-document product, and do its invoices support an SA input-VAT claim?
4. **Final PCC 126.** Does it keep one registration per SADPMR permit, and does it catch scrap-gold buyers? When will it be final? ([draft](https://www.fic.gov.za/wp-content/uploads/2026/09/2026.9-PCC-DPMS.pdf))
5. **Real firm count.** How many separate firms sit behind 5,581 registrations? How many SADPMR permits are valid? (FIC and SADPMR PAIA requests)
6. **nCino KYC.** What does it charge dealers, and does it plan a yearly file? Would it integrate?
7. **JCSA.** Will it promote a member offer, and at what price or share?
8. **goAML.** Will the FIC give UAT and XML access for CTRs? Is there a size or format limit on the RMCP upload ([Directive 12 feedback, para 24](https://www.fic.gov.za/wp-content/uploads/2026/09/Consultation-feedback-note-Relating-to-draft-Directive-12-on-the-submission-of-RMCPs.pdf))?
9. **Directive 12 "10 days".** Calendar or business days? The engine uses calendar days to be safe.
10. **Consultants.** May an outside consultant be a dealer's MLRO user on goAML ([PCC 5C, para 5.4](https://www.fic.gov.za/wp-content/uploads/2024/01/PCC-5C-Accountable-and-reporting-institutions-registration.pdf))? This sets how far the Consultant plan can go.
11. **Card refusal rate.** How many dealers refuse a card payment to a foreign company? Track from the first call.
12. **Penetration test price in SA.** Get two or three fixed quotes (SensePost, Nclose, Telspace Africa and others publish no prices, [DeepStrike](https://deepstrike.io/blog/penetration-testing-companies-south-africa-2025)).
13. **ID and PEP vendor.** Which offers a clean API, POPIA operator terms and per-check pricing for small volumes?

---

## 15. Next steps this week (from Mon 12 Oct 2026)

1. **Decide to run the staged test** with the gates in section 13, and the founder-builds budget (about R230k-R530k for the MVP, plus R30k of Q1 marketing).
2. **Legal:** send 2-3 SA FICA attorneys a one-page brief and ask for a fixed fee for the content engine, terms, operator agreement and the written questions in section 14. Ask one compliance practitioner for 4-6 days.
3. **Comment on draft PCC 126 by Fri 16 Oct.** Use it to learn the issues and get known at the FIC ([Moonstone](https://www.moonstone.co.za/?p=61913)).
4. **Payments:** apply to Paddle with a software-only description; open a Stripe account as plan B.
5. **Build:** set up the repo, `CLAUDE.md`, Vultr Johannesburg staging and the synthetic dealers; start stream S0 on Monday, and the checker and matching logic as pure functions.
6. **Sales:** put up the landing page with the free item 20 check and a waitlist; pick 40 targets from the [JCSA directory](https://www.jewellery.org.za/directory) (retailers, wholesalers, refiners, bullion and coin sellers in Gauteng and the Western Cape); make the first 10 calls; line up a part-time SA caller.
7. **Ask for quotes from two or three SA penetration testers** for week 6, but sign only after the day-30 gate.
