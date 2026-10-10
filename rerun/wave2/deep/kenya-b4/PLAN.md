# Kenya: application kit and running compliance file for small non-deposit-taking lenders (CBK NDTCP Regulations), full plan

Combined plan from four deep-research parts (written 10 Oct 2026):

- [01 Law and product requirements](01-law-and-requirements.md): the CBK Act, the 2025 draft Regulations read in full, press and law-firm reports on the final LN 191 of 2026, the three side regimes (AML, data protection, consumer protection), and 73 testable product requirements.
- [02 Market and competition](02-market-and-competition.md): buyer counts from CBK's own directory (counted by hand), the applicant pipeline, prices lenders already pay, competitors, channels and the East African pool.
- [03 Product and technical design](03-product-and-tech.md): users, features, flows, screens, data sources, architecture, privacy, the agent-based build plan and the build budget.
- [04 Go-to-market, company and finance](04-gtm-company-finance.md): pricing, channels, the 90-day launch, payments and Kenyan tax, company set-up, the 36-month model and kill criteria.

Every fact below is sourced in those files, and the key links are repeated here. This page reconciles the files where they disagree and gives one plan. "My estimate" marks a number derived here. "(unverified)" marks a fact no source confirmed. Money is in Kenyan shillings (KES). I use **KES 130 = USD 1**, rounded from CBK's indicative rate of KES 129.89 on 7 Oct 2026 ([CBK rates](https://www.centralbank.go.ke/?p=12585)). Files 02 and 03 used 129; the difference does not matter.

**The biggest caveat.** Nobody on this project has read the gazetted text of the final rules. Kenya Law lists them as the CBK (Non-Deposit Taking Credit Providers) Regulations, 2026, Legal Notice 191, dated 29 Sep 2026 ([Kenya Law listing](https://new.kenyalaw.org/akn/ke/act/ln/2026/191/eng@2026-09-29)), but the page returned 403. The duties below come from the full 2025 draft ([CBK draft](https://www.centralbank.go.ke/wp-content/uploads/2025/08/Draft-Central-Bank-of-Kenya-Non-Deposit-Taking-Credit-Providers-Regulations-2025.pdf)), cross-checked against press reports on the final text ([Tech-ish](https://tech-ish.com/2026/10/04/cbk-raises-licensed-lenders-annual-fee-to-kes-500000-from-kes-20000/), [TechTrendsKE](https://techtrendske.co.ke/2026/10/05/cbk-non-deposit-taking-credit-providers-regulations/), [Business Daily](https://www.businessdailyafrica.com/bd/economy/thugge-raises-compliance-fees-non-deposit-taking-credit-firms-5617420)). Reading LN 191 is task one.

---

## 1. Decision in one page

**Verdict: go, but only as a cheap, staged 8-week test with hard kill dates. Kenya alone is a side business, not a living.**

**New score: 6/10 (unchanged from the re-assessment).** The deep dive made the case cheaper and safer to try, and smaller and harder to sell from abroad. The two roughly cancel.

**The case for it.**

- **The duty is real, new and dated.**
  - Every company that lends its own money to the public, digitally or not, now needs a CBK licence (capital of KES 20m or more) or a registration (below KES 20m) ([CBK Act s.2, 33R-33S](https://www.centralbank.go.ke/wp-content/uploads/2025/03/Central-Bank-of-Kenya-Act-Cap-491-Laws-of-Kenya-1.pdf); [Tech-ish](https://tech-ish.com/2026/10/04/cbk-raises-licensed-lenders-annual-fee-to-kes-500000-from-kes-20000/)).
  - Lenders already operating must apply by about **29 Mar 2027** ([Tech-ish](https://tech-ish.com/2026/10/04/cbk-raises-licensed-lenders-annual-fee-to-kes-500000-from-kes-20000/); [Bowmans](https://bowmanslaw.com/insights/kenya-non-deposit-taking-credit-provider-regulations-are-here-what-lenders-need-to-know/)).
  - The annual fee jumped from KES 20,000 to KES 500,000 (licence) or KES 250,000 (registration), due **31 Dec**. Paying late costs double or KES 1m, and after three months CBK may revoke ([Tech-ish](https://tech-ish.com/2026/10/04/cbk-raises-licensed-lenders-annual-fee-to-kes-500000-from-kes-20000/); [TechTrendsKE](https://techtrendske.co.ke/2026/10/05/cbk-non-deposit-taking-credit-providers-regulations/)).
- **The pain is documented by the regulator itself.** CBK says most stuck applications are "largely awaiting the submission of requisite documentation" ([CBK press release, Jul 2026](https://www.centralbank.go.ke/uploads/press_releases/1035898107_Press%20Release%20-%20Licensing%20of%20Digital%20Credit%20Providers%20-%20July%202026.pdf)). In 2024, 429 of 480 applications were "pending documentation" and lenders said they "lack clarity on what to submit" ([Business Daily, Mar 2024](https://www.businessdailyafrica.com/bd/economy/digital-lenders-seek-cbk-help-to-unlock-429-licences-4551784)).
- **The portals leave the real work undone.** CBK's licensing portal takes uploads and its returns system (BSA) takes templates. Neither drafts the six policies, chases directors for certificates, warns when a credit-bureau report goes stale, runs the complaints clock or tracks the dozen 30-day notices ([CBK A-Z of licensing](https://centralbank.go.ke/wp-content/uploads/2024/11/Procedures-for-licensing-Digital-Credit-Providers-Revised-October-2024.pdf); [01 file](01-law-and-requirements.md)).
- **No product does the whole job.** Searches in English and Swahili found none. Loan software covers the loan book; small law firms do applications at bespoke prices; the one local compliance tool (Trigarc) is generic ([02 file](02-market-and-competition.md)).
- **It is cheap to build and the kit pays for it.** No official integration is needed. MVP cash is about USD 12,000-24,000, two-thirds of it the advocate and the security test ([03 file](03-product-and-tech.md)). Prepaid kits make cumulative cash positive by month 5 in the base case ([04 file](04-gtm-company-finance.md)).

**What the deep dive changed** (compared with the re-assessment at 6/10):

| Up | Down |
|---|---|
| **Licensed base counted:** 281 lenders in CBK's directory of 29 Sep 2026, with contacts, which is a ready target list ([CBK directory](https://www.centralbank.go.ke/wp-content/uploads/2026/09/Directory-of-Digital-Credit-Providers-September-2026.pdf)) | **Many are tiny or dormant:** 40% list a Gmail-type address, and the lenders' own association says many licences went to firms "not even doing business" ([02 file](02-market-and-competition.md); [Business Daily via Mwanaspoti](https://www.mwanaspoti.co.tz/bd/economy/why-digital-lenders-seek-a-higher-sh50m-threshold-for-licensing-5162740)) |
| **A price anchor exists:** a lawyer charges KES 60,000-250,000 for one licence application ([Global Law Experts, Oct 2026](https://globallawexperts.com/commercial-lawyer-fees-kenya/)). A kit at KES 69,000-99,000 sits at the bottom of that band | **Recurring price is lower:** KES 78,000 or 156,000 a year by tier, not the KES 180,000 assumed in the re-assessment, because registered lenders were just hit with a KES 250,000 fee |
| **Build is simpler than assumed:** forms, documents, registers and dates; no API to CBK, KRA, BRS or the bureaus exists or is needed ([03 file](03-product-and-tech.md)) | **Selling from abroad is harder:** Kenyan VAT from the first sale, a 3% digital-presence tax, and since 1 Jul 2026 software fees count as "royalties", so a buyer may withhold 20% ([PwC](https://taxsummaries.pwc.com/kenya/corporate/other-taxes); [Grant Thornton](https://www.grantthornton.co.ke/globalassets/1.-member-firms/kenya/insights/pdf/grant-thornton-kenyas-analysis-of-the-finance-act-2026.pdf)). Paddle handles VAT, but a Kenyan company is likely needed within about a year |
| **Legal risk is smaller:** the Advocates Act s.34 list of reserved documents does not include internal policies (my reading of [s.34](https://www.sheriaplex.com/kenya-acts/5674-unqualified-person-not-to-prepare-certain-documents-or-instruments)); Kenyan data law allows hosting abroad with a contract and records ([ODPC General Regulations](https://www.odpc.go.ke/wp-content/uploads/2024/03/THE-DATA-PROTECTION-GENERAL-REGULATIONS-2021-1.pdf)) | **The window is tight:** sellable about 30 Nov; police certificates take 2-6 weeks ([Kenyans.co.ke](https://www.kenyans.co.ke/news/56752-certificate-good-conduct-how-apply)), so applicants must start by mid-February; and Kenya slows down over Christmas. That leaves about 9-10 selling weeks |
| **Bigger regional pool:** Tanzania has 2,938 licensed non-deposit lenders and Uganda 1,302 money lenders ([BoT](https://www.bot.go.tz/Publications/Other/Banking%20Supervision%20Annual%20Reports/en/2026070216351588.pdf); [Eagle Online](https://eagle.co.ug/2024/10/03/money-lenders-association-pledge-to-clean-up-industry-after-musevenis-roar)) | **Weak recurring stick:** no CBK money penalty on a licensed lender has been published since 2022 ([ITEdgeNews](https://www.itedgenews.africa/kenya-licensed-digital-lenders-now-it-must-supervise-the-loan/)). The automatic KES 1m late fee is the first hard one |
| | **Still unread:** the LN 191 text. The offline-lender pool is still uncounted (300-1,500, low confidence) |

**What it is worth** (the 04 model, adjusted in §10 for a dearer security test and for the advocate billing reviews directly):

| Case | Kits in year 1 | Comply subscribers at month 12 / 36 | Recurring revenue at month 36 | Year-3 profit before founder pay | Peak cash need (founder unpaid) |
|---|---|---|---|---|---|
| Low | 18 | 26 / 51 | KES 6.1m (USD 47,000) | about KES 0.5m | about KES 3.5m-4m (USD 27,000-31,000) |
| **Base** | **47** | **53 / 107** | **KES 15.7m (USD 120,000)** | **about KES 7.9m (USD 61,000)** | **about KES 1.5m-2.5m (USD 12,000-19,000)** |
| High | 92 | 100 / 204 | KES 31.2m (USD 240,000) | about KES 21.3m (USD 164,000) | about KES 1m-2m |

- The base case pays the founder about KES 400,000 (USD 3,100) a month from year 2. A real income needs Uganda, then Tanzania.
- The limit is the pool, not the unit economics: the base case needs about 14% of a serviceable base of 550-950 lenders by 2029 ([04 file](04-gtm-company-finance.md)).

**The key conditions:**

1. **LN 191 holds no surprise.** Get the gazetted text in week 1. If it drops the policy set, the complaint clocks or the 31 Dec dates, re-plan.
2. **A partner advocate signs up by 1 Nov 2026** for a fixed template fee of up to about KES 900,000, plus a written opinion on the Advocates Act and fee-sharing.
3. **Buyers confirm the price.** At least 5 of 20 discovery calls say they would pay KES 6,500-13,000 a month; at least 2 small law or consulting firms join as partners by 15 Dec.
4. **The kit is sellable by 30 Nov-1 Dec.** If it slips past 15 Dec, sell the recurring product only.
5. **The founder accepts two facts:** a Kenyan company will probably be needed within about a year, and a part-time Nairobi person is needed from month 2.

**Do this first:** get LN 191; book the advocate and the security tester; start the build on Mon 12 Oct; book 20 discovery calls from CBK's directory; open a Paddle account. See §15.

---

## 2. Why now: the law and enforcement

**Legal basis.**
- The CBK Act Part VIC (ss.33R-33U) and s.57, as widened by the Business Laws (Amendment) Act 2024 from "digital" lenders to all "non-deposit taking credit business" not regulated under another law ([CBK Act, revision of 27 Dec 2024](https://www.centralbank.go.ke/wp-content/uploads/2025/03/Central-Bank-of-Kenya-Act-Cap-491-Laws-of-Kenya-1.pdf)).
- LN 191 of 2026, dated 29 Sep 2026, revokes the 2022 Digital Credit Providers Regulations ([Kenya Law listing](https://new.kenyalaw.org/akn/ke/act/ln/2026/191/eng@2026-09-29); [Tech-ish](https://tech-ish.com/2026/10/04/cbk-raises-licensed-lenders-annual-fee-to-kes-500000-from-kes-20000/)).

**Who is obliged.**
- In scope: loans to the public, asset finance, BNPL (but not hire purchase under the Hire-Purchase Act), PAYG and P2P, digital or not ([CBK Act s.2](https://www.centralbank.go.ke/wp-content/uploads/2025/03/Central-Bank-of-Kenya-Act-Cap-491-Laws-of-Kenya-1.pdf)).
- Out of scope: banks, microfinance banks, SACCOs, KPOSB, credit "merely incidental" to a sale, and credit guarantors, which have their own regime ([CBK Act s.2, 33V-33Y](https://www.centralbank.go.ke/wp-content/uploads/2025/03/Central-Bank-of-Kenya-Act-Cap-491-Laws-of-Kenya-1.pdf); [CBK draft reg 2](https://www.centralbank.go.ke/wp-content/uploads/2025/08/Draft-Central-Bank-of-Kenya-Non-Deposit-Taking-Credit-Providers-Regulations-2025.pdf)).
- The applicant must be a company. A sole-trader moneylender must incorporate first ([CBK draft, Part II](https://www.centralbank.go.ke/wp-content/uploads/2025/08/Draft-Central-Bank-of-Kenya-Non-Deposit-Taking-Credit-Providers-Regulations-2025.pdf)).
- The 281 lenders licensed under the 2022 rules are "deemed licensed" (reg 96). They do not reapply, but every new conduct duty and the new fee apply to them ([Tech-ish](https://tech-ish.com/2026/10/04/cbk-raises-licensed-lenders-annual-fee-to-kes-500000-from-kes-20000/)).
- There are no regional differences in the credit rules; they are national ([01 file](01-law-and-requirements.md)).

**What must exist, and when** (from the [01 file](01-law-and-requirements.md) duty table; "draft" means the duty is read from the 2025 draft and must be confirmed in LN 191):

| Duty | Deadline or frequency | Basis |
|---|---|---|
| Licence (capital KES 20m or more) or registration (below) before lending; existing lenders apply within 6 months | About **29 Mar 2027** | CBK Act s.33S, s.59(2); [Tech-ish](https://tech-ish.com/2026/10/04/cbk-raises-licensed-lenders-annual-fee-to-kes-500000-from-kes-20000/) |
| Application dossier: Forms NDTCP 1-3; **six policies** (credit, code of conduct, consumer protection, AML/CFT, data protection, governance) in full for a licence, or a full credit policy and code plus four briefs for a registration; pricing model; ODPC certificate; sworn declarations; police, KRA and credit-bureau certificates for each director, officer and 10% shareholder; 3 years' accounts for a licence | Once, and on conversion to a licence | [CBK draft, Parts II-III](https://www.centralbank.go.ke/wp-content/uploads/2025/08/Draft-Central-Bank-of-Kenya-Non-Deposit-Taking-Credit-Providers-Regulations-2025.pdf) (draft) |
| Credit-bureau report no older than 3 months at submission | At submission | [CBK A-Z of licensing](https://centralbank.go.ke/wp-content/uploads/2024/11/Procedures-for-licensing-Digital-Credit-Providers-Revised-October-2024.pdf) |
| Annual fee: KES 500,000 (licence) or KES 250,000 (registration) | **31 Dec** each year; late = double or KES 1m, then possible revocation | regs 7(5), 10(5) per [Tech-ish](https://tech-ish.com/2026/10/04/cbk-raises-licensed-lenders-annual-fee-to-kes-500000-from-kes-20000/); [TechTrendsKE](https://techtrendske.co.ke/2026/10/05/cbk-non-deposit-taking-credit-providers-regulations/) |
| Annual compliance certification return | **31 Dec** each year | [CBK draft, Part VII](https://www.centralbank.go.ke/wp-content/uploads/2025/08/Draft-Central-Bank-of-Kenya-Non-Deposit-Taking-Credit-Providers-Regulations-2025.pdf) (draft) |
| CBK written approval before any new product or change, **including interest rates**, plus 30 days' customer notice | Before each change | regs 26, 55 per [Tech-ish](https://tech-ish.com/2026/10/04/cbk-raises-licensed-lenders-annual-fee-to-kes-500000-from-kes-20000/) |
| 30-day prior notices to CBK: channels, paybills, agents, outsourcing, branches, board, CEO and shareholder changes | Each event | [CBK draft, Part IV](https://www.centralbank.go.ke/wp-content/uploads/2025/08/Draft-Central-Bank-of-Kenya-Non-Deposit-Taking-Credit-Providers-Regulations-2025.pdf) (draft) |
| Complaints register: acknowledge within 7 days; written "pending" note after 48 hours for oral complaints; resolve within 30 days; report to CBK | Each complaint | [CBK draft, Part V](https://www.centralbank.go.ke/wp-content/uploads/2025/08/Draft-Central-Bank-of-Kenya-Non-Deposit-Taking-Credit-Providers-Regulations-2025.pdf) (draft) |
| Agent register; renew all agent approvals | About **31 Oct** each year | [CBK draft, Part IV "Agents"](https://www.centralbank.go.ke/wp-content/uploads/2025/08/Draft-Central-Bank-of-Kenya-Non-Deposit-Taking-Credit-Providers-Regulations-2025.pdf) (draft) |
| 30 days' notice to a borrower before a negative credit-bureau listing; no listing at KES 1,000 or less | Each listing | [CBK draft, Part IV](https://www.centralbank.go.ke/wp-content/uploads/2025/08/Draft-Central-Bank-of-Kenya-Non-Deposit-Taking-Credit-Providers-Regulations-2025.pdf) (draft) |
| Periodic returns (loans, complaints, NPLs, borrowings, agents and more) through CBK's BSA portal | "As the Bank may specify"; **frequencies not public** (unverified) | [CBK draft, Part VII](https://www.centralbank.go.ke/wp-content/uploads/2025/08/Draft-Central-Bank-of-Kenya-Non-Deposit-Taking-Credit-Providers-Regulations-2025.pdf); [CM Advocates](https://cmadvocates.com/blog/legal-alert-upcoming-bank-supervision-application-bsa-user-training-for-non-deposit-taking-credit-providers-stay-compliant/) (search summary) |
| New in the final text (press only): reg 60 on AI and automated decisions; no foreign-currency loans; a fixed repayment order; a unique mobile-money number per lender | Ongoing | [TechTrendsKE](https://techtrendske.co.ke/2026/10/05/cbk-non-deposit-taking-credit-providers-regulations/); [Bowmans](https://bowmanslaw.com/insights/kenya-non-deposit-taking-credit-provider-regulations-are-here-what-lenders-need-to-know/) (snippet) |

**Three side regimes always ride along:**
- **AML (POCAMLA).** Registration on the FIU's goAML system, an MLRO notified within 14 days, a risk assessment at least every 2 years, and an annual compliance report to the FIU (31 Jan per one compliance firm, unverified) ([POCAMLA](https://www.a-mla.org/sites/default/files/amla-import/711296287884447b06_0.pdf); [FRC template](https://www.icpak.com/wp-content/uploads/2024/12/ACR-Template-2024-Vers.-7.docx); [FNJ](https://fnjassociates.co.ke/?p=2097)).
- **Data protection.** Financial services must register with the ODPC regardless of size, for KES 4,000-40,000, renewed every 24 months ([ODPC registration regulations](https://www.odpc.go.ke/wp-content/uploads/2024/03/THE-DATA-PROTECTION-REGISTRATION-OF-DATA-CONTROLLERS-AND-DATA-PROCESSORS-REGULATIONS-2021.pdf)).
- **Consumer Protection Act Part VII.** Disclosure statements; undisclosed costs are not payable ([CPA](https://lists.kictanet.or.ke/pipermail/kictanet/attachments/20130219/a9fc4721/attachment.pdf)).

**Penalties.**
- Lending without a licence or registration: up to 3 years in prison or KES 5m ([CBK Act s.33S(10)](https://www.centralbank.go.ke/wp-content/uploads/2025/03/Central-Bank-of-Kenya-Act-Cap-491-Laws-of-Kenya-1.pdf)).
- CBK administrative penalties: up to KES 2m or three times the gain, plus KES 10,000 a day; removal of officers; suspension or revocation ([CBK Act s.57(4)](https://www.centralbank.go.ke/wp-content/uploads/2025/03/Central-Bank-of-Kenya-Act-Cap-491-Laws-of-Kenya-1.pdf); [CBK draft, Part IX](https://www.centralbank.go.ke/wp-content/uploads/2025/08/Draft-Central-Bank-of-Kenya-Non-Deposit-Taking-Credit-Providers-Regulations-2025.pdf)).

**Enforcement evidence.** CBK enforces mainly at the licensing gate. The money penalties so far come from other regulators and the market:

| Date | What happened | Source |
|---|---|---|
| 2023 | Google Play requires a CBK licence for Kenyan loan apps; about 500 apps removed | [TechCrunch](https://techcrunch.com/2023/03/24/google-removes-hundreds-of-kenya-focused-loan-apps-from-play-store/amp) |
| 2023-2025 | The data regulator (ODPC) fines lenders KES 250,000 to KES 5m (Whitepath, Mulla Pride) | [ITEdgeNews](https://www.itedgenews.africa/kenya-licensed-digital-lenders-now-it-must-supervise-the-loan/) |
| Oct 2024 | The Competition Authority fines Mogo KES 10.85m | [ITEdgeNews](https://www.itedgenews.africa/kenya-licensed-digital-lenders-now-it-must-supervise-the-loan/) |
| Mar 2025 | The Small Claims Court dismisses 139 recovery claims by digital lenders as illegal | [ITEdgeNews](https://www.itedgenews.africa/kenya-licensed-digital-lenders-now-it-must-supervise-the-loan/) |
| Year to Jun 2025 | Competition Authority complaints about digital lenders rise from 67 to 355 | [ITEdgeNews](https://www.itedgenews.africa/kenya-licensed-digital-lenders-now-it-must-supervise-the-loan/) |
| 2022-Oct 2026 | **No published CBK money penalty, suspension or revocation against a licensed lender** | [ITEdgeNews](https://www.itedgenews.africa/kenya-licensed-digital-lenders-now-it-must-supervise-the-loan/) |
| 29 Sep 2026 | LN 191 adds an automatic late-fee charge: the first hard, automatic CBK sanction | [TechTrendsKE](https://techtrendske.co.ke/2026/10/05/cbk-non-deposit-taking-credit-providers-regulations/) |

**Reading.** In year one, a complete application and no missed fixed date matter more than an inspection pack. The registers matter because complaints feed every regulator.

**Still moving:**
- The gazetted LN 191 text is not on CBK's site yet ([CBK legislation page](https://www.centralbank.go.ke/policy-procedures/legislation-and-guidelines/)).
- Two press readings of the late fee differ: "double the fee" or "a KES 1m penalty" ([Tech-ish](https://tech-ish.com/2026/10/04/cbk-raises-licensed-lenders-annual-fee-to-kes-500000-from-kes-20000/); [TechTrendsKE](https://techtrendske.co.ke/2026/10/05/cbk-non-deposit-taking-credit-providers-regulations/)). For a licensed lender both mean KES 1m; for a registered lender it is KES 500,000 or KES 1m. The product shows both until the text is read.
- BSA return templates and frequencies are not public (unverified).
- The Microfinance Bill 2026 could create a second regime for "non-deposit taking business"; CBK wants those clauses removed ([Eastleigh Voice](https://eastleighvoice.co.ke/business/381762/regulators-push-for-changes-to-microfinance-eadb-bills-over-oversight-gaps)).
- Kenya is still on the FATF grey list, which keeps AML pressure on ([The Star, 1 Jul 2026](https://the-star.co.ke/news/2026-07-01-kenya-intensifies-fight-against-financial-crime-to-exit-grey-list)).
- A deadline extension is possible but unannounced (unverified). It would spread the kit rush and help a late entrant.

---

## 3. Customers

| Segment | Count | Confidence | What they buy first |
|---|---|---|---|
| **Licensed lenders, now "deemed licensed"** | **281** (my count of the [CBK directory, 29 Sep 2026](https://www.centralbank.go.ke/wp-content/uploads/2026/09/Directory-of-Digital-Credit-Providers-September-2026.pdf)); 85 at end-2024 and 195 at end-2025 ([CBK BSAR 2025](https://www.centralbank.go.ke/uploads/banking_sector_annual_reports/1241268828_ANNUAL%20REPORT%202025.pdf)) | high | An LN 191 alignment of their policies, then the recurring registers and calendar |
| of which list a webmail address / a Nairobi address | 111 (40%) / at least 219 (78%) | high as counts | Sign of small firms |
| **Unlicensed applicants since 2022** | About 620 (more than 900 applications ([TechTrendsKE](https://techtrendske.co.ke/2026/09/30/cbk-licenses-29-more-digital-lenders/)) minus 281); **300-450 still live** (my estimate) | medium / low | The kit, to clear "pending documentation" |
| **Offline lenders newly in scope** (logbook, asset finance, credit-only lenders, P2P, incorporated moneylenders) | No register exists. Proxies: "about 400 providers" (undated, [Capital FM](https://capitalfm.africa/kenyans-borrow-sh500mn-daily-from-digital-lenders-dfsak/)); my estimate 300-1,500, of which 150-500 comply rather than stop | low | Scope check, then the kit |
| BNPL and PAYG sellers | Not counted; many may be out of scope as "incidental" credit ([Weetracker](https://weetracker.com/2024/12/05/kenya-bnpl-regulatory-exemption/)) | low | Upside only |
| **Advisers** (small law firms, consultants, accountants) | At least 15 named with public DCP licensing pages; 15-40 in total (my estimate) ([02 file](02-market-and-competition.md)) | medium | Multi-client Adviser plan |

**Reconciled buyer counts.** The re-assessment used "548 pending" ([Business Daily, Jul 2026](https://www.businessdailyafrica.com/bd/economy/complaints-about-digital-lenders-jump-five-times--5528224)); the 02 file used "about 620 not licensed". They measure different things: 548 counts files under review, while 620 also counts withdrawn and refused files. I use 02's **300-450 still live**, which allows for files that went quiet in 2022. So:
- **Kit buyers before about 29 Mar 2027: about 450-950 firms** (300-450 live applicants plus 150-500 offline lenders).
- **Recurring tool by 2028: a serviceable base of about 550-950 lenders**: the 281, plus 300-700 newly licensed or registered, minus 30-40 large lenders with their own compliance teams. CBK's own speed (about 110 licences a year) limits how fast this grows ([02 file](02-market-and-competition.md)).
- The kit market does not end on 29 March. Pending applicants still need to finish their files, and registered lenders must convert to a licence when they pass KES 20m.

**Buyer profile.**
- A long tail of small Nairobi firms behind a few large brands (Tala, M-Kopa, Watu, Mogo, Platinum).
- They just took a fee shock: KES 350,000 (registration) or KES 600,000 (licence) in year one to CBK alone ([Tech-ish](https://tech-ish.com/2026/10/04/cbk-raises-licensed-lenders-annual-fee-to-kes-500000-from-kes-20000/)).
- They already pay USD 59-346 a month for loan software ([Loandisk](https://loandisk.com/pricing.php); [Kovara](https://kovara.io/kenya.html)) and KES 8,000 a month or more for KYC ([Business Daily](https://www.businessdailyafrica.com/bd/corporate/technology/nigerian-startup-youverify-launches-in-kenya-4247756)).
- A compliance specialist costs about KES 53,000-142,000 a month ([Paylab](https://www.paylab.com/ke/salaryinfo/banking/compliance-specialist?lang=en)).
- For app lenders, a licence is a condition of distribution: Google Play lists only CBK-licensed lenders ([TechCrunch](https://techcrunch.com/2023/03/24/google-removes-hundreds-of-kenya-focused-loan-apps-from-play-store/amp)).
- 43% of licensed lenders use AI, so reg 60 on automated decisions touches almost half the base ([CBK BSAR 2025](https://www.centralbank.go.ke/uploads/banking_sector_annual_reports/1241268828_ANNUAL%20REPORT%202025.pdf)).
- Lenders complain of "the multiplicity of regulatory requirements" across CBK, the ODPC and the Competition Authority ([The Standard, Aug 2025](https://thestandard.ke/sports/business/article/2001527611/www.digger.co.ke)).

**The jobs, in their words** ([03 file](03-product-and-tech.md)):
1. "Tell me if I need a licence or a registration, what it costs and by when."
2. "Give me every document CBK wants, so my file does not sit 'pending documentation'."
3. "Chase my directors for their certificates, and warn me before a credit report goes stale."
4. "Write my six policies so they meet LN 191 and fit my business, not a bank's."
5. "I am already licensed. Show me what LN 191 changed."
6. "Never let me miss 31 December."
7. "Log every complaint and prove we met the 7-day, 48-hour and 30-day rules."
8. "Do not let us change a rate before CBK approves and 30 days' notice has run."

---

## 4. Competition

| Alternative | What it does | Price | What it means for us |
|---|---|---|---|
| CBK licensing portal, BSA returns portal, "A-Z of licensing" guide | Takes the application and returns; a checklist in a PDF. Drafts nothing, tracks nothing, keeps no registers | Free | Input, not a rival ([CBK A-Z](https://centralbank.go.ke/wp-content/uploads/2024/11/Procedures-for-licensing-Digital-Credit-Providers-Revised-October-2024.pdf)) |
| Large law firms (Bowmans, Cliffe Dekker Hofmeyr, Oraro, CM Advocates, Spencer West) | Bespoke applications and advice | Not published; a licence application is KES 60,000-250,000 at boutique rates ([Global Law Experts](https://globallawexperts.com/commercial-lawyer-fees-kenya/)) | Upmarket. Possible white-label buyers later |
| **Small Nairobi law and consulting firms** (Mwirigi, Afrilink, WeComply Labs, Kazi Legal, Masibo, Githaiga, OCL, Bizbrokers) | Publish DCP licensing guides; most "prepare the application pack, source and certify documents"; no ongoing product | None published | **The real rival for the kit, and the best channel.** Sell them the Adviser plan ([Mwirigi](https://mwirigitaxconsultants.com/dcp-licensing-kenya-how-to-licence-a-digital-credit-provider-step-by-step/); [Afrilink](https://afrilinkconsultants.com/digital-credit-provider-licence-in-kenya/); [WeComply Labs](https://wecomplylabs.co.ke/)) |
| Kovara | Core banking for lenders; markets "CBK Ready" and "regulatory reporting built in" | From USD 249 a month | Partial (returns at most). Shows buyers expect "CBK-ready" claims ([Kovara](https://kovara.io/kenya.html)) |
| SuperLMS (Nairobi) | Loan management; claims "the reports your regulator expects"; says 40 lenders use it | Not published | Partial. Integration partner or entrant ([Super Systems](https://supersystems.co.ke/)) |
| Loandisk, Lendsqr, Tunza | Loan book only; no CBK conduct features | USD 59-346 / 0-500 a month; Tunza not published | Not rivals; their prices are our anchor ([Loandisk](https://loandisk.com/pricing.php); [Lendsqr](https://lendsqr.com/pricing); [Tunza](https://tunza.ke/microfinance-software-kenya)) |
| **Trigarc (FNJ & Associates, Nairobi)** | Generic compliance suite: calendar, licence tracking, self-assessments, audit trail. Names digital lenders as targets. No NDTCP content, policy library or complaints clock | Quote only | **Closest rival.** Generic and of unknown price: an opening, not a killer ([FNJ](https://fnjassociates.co.ke/?p=2402)) |
| YouVerify, Smile ID, Sumsub, Zigram | KYC and AML screening | From KES 8,000 a month (YouVerify) | Back-end partners, not rivals ([Zigram](https://www.zigram.tech/?p=37915)) |
| DFSAK code of conduct | Industry principles | Membership | A channel, not a tool ([Capital FM](https://capitalfm.africa/kenyans-borrow-sh500mn-daily-from-digital-lenders-dfsak/)) |

**Conclusion.**
- **No well-priced local product does the whole job.** Nobody sells small lenders a tool for rate-change approvals, the complaints clock, agents, the year-end calendar or credit-bureau pre-listing notices. Loan software covers the loan book and at most the returns. Lawyers cover the application once.
- **The fastest threats** are Kovara and SuperLMS (already "CBK-ready") and Trigarc (already has the calendar engine). The defence is speed, NDTCP-specific content kept current, and a price below their core systems.
- **No Swahili product or content was found.** All CBK material and all vendor sites are in English. English is enough for Kenya ([02 file](02-market-and-competition.md)).
