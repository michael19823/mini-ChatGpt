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

---

## 5. Product

Working name: **Kibali** (Swahili for "permit"), a placeholder ([03 file](03-product-and-tech.md)).

### Positioning

> "Your CBK file, complete and on time."

- **The Application Kit** gets a lender's file out of "pending documentation": the right documents, in date, in CBK's portal order.
- **Comply** (the subscription) keeps the running file: the registers CBK will ask for, the approvals and 30-day notices, and the 31 Dec and 31 Oct dates.
- **It is a tool, not legal advice.** Policy text comes only from clauses a Kenyan advocate has approved. A review by an advocate is an add-on that the advocate delivers and bills. The lender files with CBK itself; we never log in to CBK for it.
- **Every rule shows its source:** "draft-based" or "LN 191 confirmed", until the text is read and the flags are switched ([01 file, requirement 70](01-law-and-requirements.md#product-requirements)).

### Users

- **Inside the lender** (often one person holds several roles, since 40% of licensed lenders use a webmail address):
  - owner or director: approves policies, signs declarations, pays;
  - compliance lead: runs the dossier, policies, calendar and registers;
  - MLRO: the AML section (must be management level, not the CEO or internal auditor);
  - complaints handler: the complaints register only;
  - product or credit manager: products and the change log.
- **Around the lender:**
  - each director, CEO, officer and 10% shareholder: fills in their own fit-and-proper data on a phone, through a single-use link, with no account;
  - the adviser (law firm, consultant, accountant): many client workspaces;
  - our partner advocate: reviews a client's policies in the premium tier;
  - a read-only reviewer (auditor, board member or CBK examiner): a time-limited link to one evidence pack;
  - our content editor (founder plus contract advocate): the requirement and clause library.

### Feature map

| # | Module | MVP (sellable 30 Nov 2026) | v1 (Dec 2026-Sep 2027) | Later |
|---|---|---|---|---|
| 1 | **Scope and tier checker** (public, no login) | In or out of scope; routes away banks, SACCOs, hire purchase, guarantors and microfinance; licence vs registration at KES 20m; fees; deadline countdown | Saved to an account | |
| 2 | **People register and person portal** | Directors, CEO, officers, 10% shareholders (look-through to owners), MLRO; phone upload of police, KRA and credit-bureau certificates, ID, PIN, CV; consent screen; "track-only" mode; pre-filled Forms NDTCP 2 and 3 | 30-day CBK notices for people changes; SMS reminders | |
| 3 | **Application dossier builder** | Checklist by tier and situation (new entrant, existing lender, pending applicant, conversion); status, owner, evidence, expiry checked against the planned submission date; "ready" gate; ZIP in portal order plus a field-by-field copy sheet | CBK query log with the 3-month and 14-day discontinuation clocks | |
| 4 | **Policy generator** | Six policies (full or brief by tier), complaints procedure, pricing sheet with an APR calculator, a key information document per product, business brief, board resolution; coverage check against each legal minimum; versions and approvals; DOCX and PDF | LN 191 gap analysis of a licensed lender's existing policies (AI-assisted, each finding confirmed by a person) | Re-generation when the law changes |
| 5 | **Compliance calendar** | 31 Dec fee and return; about 31 Oct agent renewal; ODPC 24 months; AML risk assessment 24 months; yearly policy review; document expiry; 29 Mar 2027; e-mail reminders | WhatsApp or SMS digests; calendar feed | |
| 6 | **Complaints register** | 7-day, 48-hour and 30-day clocks; ageing; CSV and XLSX export | Public complaint form per lender; SMS acknowledgement; CBK return layout once obtained | Import from loan software |
| 7 | **Product and rate change log** | Change request, draft letter to CBK, approval upload, 30-day notice tracker, go-live gate | Customer-acceptance log for increases | |
| 8 | **Adviser access** | Basic switcher between client workspaces | Full adviser dashboard, white-label PDFs | |
| 9 | **Billing** | Card checkout through a merchant of record | Annual plans and KES invoices | M-Pesa (needs the Kenyan company) |
| 10 | Agent register and renewal pack | | Yes, before 31 Oct 2027 | |
| 11 | Notices register (channels, paybills, branches, outsourcing, capital injections, IT changes) | | Yes | |
| 12 | Credit-bureau pre-listing tracker (CSV of loans in arrears; blocks listing before day 30; KES 1,000 floor) | | Yes | Loan-software API |
| 13 | Annual certification workpaper | | Yes, before 31 Dec 2027 | |
| 14 | AML pack: MLRO notices, risk-assessment template, FIU annual report draft | | Yes (January 2027) | Sanctions screening through a partner |
| 15 | AI and automated-decision register (reg 60) | | Yes | |
| 16 | Evidence and inspection pack | Basic ZIP export | Full pack with cross-references | Read-only inspection room |
| 17 | BSA return pre-check | | | Once CBK's templates are obtained |
| 18 | Staff conduct training | | | Yes |
| 19 | Uganda and Tanzania legal layers; Swahili interface | | | Yes |

Why this cut ([03 file](03-product-and-tech.md)): the MVP must sell before 29 Mar 2027 and before the 31 Dec 2026 fee date, so it is the kit plus the calendar and the two registers LN 191 made urgent. BSA returns come last, because CBK's portal is free, layouts are not public and loan-software vendors already claim reporting.

**The full list of 73 testable requirements**, each traced to a legal basis, is in [01 §PRODUCT REQUIREMENTS](01-law-and-requirements.md#product-requirements). Treat it as the acceptance checklist.

### Key flows

1. **Free check to sign-up (5 minutes).** 6-8 questions; the result card shows scope, tier, fees, deadline and the document list, each rule with its source badge. Create an account to save it and buy the kit.
2. **Application kit for an offline lender (the main flow).**
   1. Company profile: about 80 plain-English questions, 60-90 minutes, which feed every document.
   2. Invite each director, the CEO, officers and 10% shareholders by link.
   3. Each person fills their part on a phone in 20-40 minutes and uploads their certificates.
   4. **Critical-path warning:** a police certificate takes 2-6 weeks and costs KES 1,050 ([Kenyans.co.ke](https://www.kenyans.co.ke/news/56752-certificate-good-conduct-how-apply)); a credit-bureau report must be under 3 months old at submission ([CBK A-Z](https://centralbank.go.ke/wp-content/uploads/2024/11/Procedures-for-licensing-Digital-Credit-Providers-Revised-October-2024.pdf)). The calendar plans backwards: "apply for police clearance by X; get the credit report no earlier than Y".
   5. Policies are generated at once and reviewed in 1-3 hours; the coverage view shows which clause meets each legal minimum.
   6. Optional advocate review: 3-5 working days.
   7. Board approval: the app drafts the resolution; the lender uploads the signed minute.
   8. Forms NDTCP 2 and 3 are pre-filled as PDFs to print, sign and swear.
   9. The dossier turns green only when every item is present, in date and approved.
   10. The lender types the online form from the copy sheet, uploads the ZIP and sends the originals with the fee.
   11. After submission: record the date and reference; log each CBK query against checklist items.
3. **Pending applicant.** Enter the CBK reference, upload CBK's last query letter, map each query to checklist items (by hand in the MVP), then fix only what is missing.
4. **Licensed lender aligning with LN 191.** Pick the company from CBK's directory to pre-fill it; answer one self-check question per legal minimum; get a gap list; regenerate or patch policies; switch on the calendar before 31 Dec 2026.
5. **A complaint.** Log it; three clocks start; the handler records steps, findings, reply and outcome, and tells the customer of the right to go to CBK; overdue items turn red; export for the CBK report. The MVP counts calendar days, the stricter reading, until the text says otherwise.
6. **A rate or product change.** Raise a request; the app drafts the CBK letter; upload CBK's approval; the app drafts the 30-day notice; the change can go live only after both; the policy set, pricing sheet and product summary move to a new version.
7. **The year-end cycle.** About 31 Oct: agent renewals. November: the certification workpaper opens. 31 Dec: fee and return, with reminders at 60, 30, 14, 7 and 1 days. January: the FIU annual AML report.
8. **An adviser with many clients.** One dashboard showing each client's readiness, next deadline and red flags. The client owns its data and can remove the adviser.
9. **A CBK inspection.** Pick a scope; get a ZIP with an index and a cover page; every document shows its version and approval date.

### Screens

1. Public checker.
2. Onboarding wizard (licensed, pending, new applicant, adviser).
3. Home dashboard: days to 29 Mar 2027 and to 31 Dec, dossier readiness score, tasks this week, red flags, overdue complaints, changes awaiting CBK.
4. Dossier checklist, in CBK portal order, with source badges.
5. People, with document expiry badges and consent records.
6. Person portal (mobile, no password).
7. Questionnaire.
8. Policy library.
9. Coverage matrix.
10. Calendar.
11. Complaints register.
12. Change log.
13. Products.
14. Evidence pack builder.
15. Adviser home.
16. Settings: users, two-factor login, billing, data export and deletion, our data-processing agreement, and the generator for the lender's outsourcing notice to CBK.
17. Content admin (internal), with the advocate's sign-off per release.

Design rules: laptop first, except the person portal, which is phone first. Plain English, with the legal basis one click away.

---

## 6. Technical design

**Stack** ([03 file](03-product-and-tech.md)). One plain monolith that one founder and several AI agents can run:

| Layer | Choice | Why |
|---|---|---|
| App | Python and Django, server-rendered pages with HTMX and a little Alpine.js | Admin, auth, forms and migrations built in; fewer parts for agents to wire together |
| Database | Managed PostgreSQL with row-level security | Second guard for tenant isolation; JSON fields for form answers |
| Background jobs | A Postgres-backed queue (Procrastinate or django-q2) | Reminders, PDFs and packs without Redis |
| Documents | docxtpl for Word templates; Gotenberg (LibreOffice) for PDF | The advocate edits templates in Word |
| Files | S3-compatible storage, encrypted, short-lived signed links, virus scan on upload | |
| Login | django-allauth with two-factor login; single-use links for persons | |
| E-mail and SMS | Postmark first; Africa's Talking or another aggregator in v1 | |
| Billing | Merchant-of-record checkout plus webhooks | No card data on our servers |
| AI in the product | Claude API for the v1 gap analysis only, behind a switch | Policy text comes from approved clauses, not free generation |
| Deployment | One Docker image, infrastructure as code, CI with tests, linting, type checks, dependency and secret scans | Portable: Hetzner raised several prices in 2026 ([Northflank](https://northflank.com/blog/hetzner-cloud-server-price-increases)) |

**Content layer the advocate can edit without code.**
- A requirement library in YAML, started from the 01 file's duty table. Each requirement has a legal basis, a source status (draft, press report, LN 191 confirmed) and a deadline rule.
- A clause library of Word templates. Each clause lists the requirements it meets and carries the advocate's approval.
- Release process: an agent edits a branch; automated checks prove every "policy content" requirement maps to at least one clause and every clause has a legal basis; golden-file tests render sample lenders; the advocate signs the release; customers see "What changed" and a "law as at" date.

**The deadline engine.** Four rule kinds cover every dated duty: a fixed yearly date (31 Dec, about 31 Oct); every N months from an event (ODPC 24, AML 24, policy review 12); a notice before an event (30 days to CBK or to customers); and a clock after an event (complaints 7 days, 48 hours, 30 days; MLRO 14 days). Until the text is read, the engine counts calendar days and never moves a due date later. A monthly check warns a registered lender as capital, borrowings or loan book near KES 20m.

**Multi-tenancy.** One database; every customer row carries an organisation ID. A tenant-scoped query layer plus PostgreSQL row-level security. For every model, an automated test proves tenant A cannot read, list, export or download tenant B's data.

**Data sources** ([03 file](03-product-and-tech.md)). No official system offers an API, and none is needed:

| Source | Use | Access | In the product |
|---|---|---|---|
| CBK licensing portal | Name approval and the application | Online form, printed and signed; scanned uploads; originals to CBK ([CBK A-Z](https://centralbank.go.ke/wp-content/uploads/2024/11/Procedures-for-licensing-Digital-Credit-Providers-Revised-October-2024.pdf)) | ZIP in portal order plus a copy sheet. Whether NDTCPs use the same portal is unverified |
| CBK data-submission test (licensing stage 3) | Lender proves it can send data by API | Specification not public | Checklist item; the lender's loan-software vendor does it |
| CBK BSA returns | Periodic returns | Download template, complete, upload | Later: pre-check a file before upload |
| CBK directory of licensed lenders (PDF) | Lead list; pre-fill for licensed lenders | Public, updated with each batch ([Sep 2026](https://www.centralbank.go.ke/wp-content/uploads/2026/09/Directory-of-Digital-Credit-Providers-September-2026.pdf)) | Parsed into a lookup table after each batch |
| Kenya Law, Gazette, CBK legislation page | LN 191 and changes | Web; Laws.Africa's commercial API costs from ZAR 6,700 a month ([Laws.Africa](https://developers.laws.africa/get-started/pricing)) | Read by hand; buy the gazetted LN; weekly page-change check |
| Business registry (BRS) on eCitizen | Official company search | KES 650 a search; no public API found ([BRS](https://brs.go.ke/?p=567)) | Lender uploads the search; app records the date and compares people |
| KRA tax compliance certificate checker | Check a certificate | Public web check by number | Deep link; record "checked on" |
| Police certificate (DCI, eCitizen) | Good conduct | KES 1,050; 2-6 weeks ([Kenyans.co.ke](https://www.kenyans.co.ke/news/56752-certificate-good-conduct-how-apply)) | Expiry at 12 months (press; unverified); lead-time warning |
| Credit-bureau reports | Each person's credit report | Person requests it | Expiry at 3 months |
| ODPC registration | Lender's data-controller certificate | Online; 24 months | Upload; renewal reminder |
| FIU goAML | MLRO, suspicious-transaction reports, annual report | Web; annual report is a Word template ([FRC template](https://www.icpak.com/wp-content/uploads/2024/12/ACR-Template-2024-Vers.-7.docx)) | v1 draft only; the user files |
| Claude API | v1 gap analysis | API; Sonnet 5.5 at USD 2 / 10 per million tokens ([Anthropic pricing](https://platform.claude.com/docs/en/about-claude/pricing)) | Opt-in; listed as a sub-processor |
| Loan software (Loandisk, SuperLMS, Tunza) | Complaints; loans in arrears for bureau notices | CSV first | v1 CSV import |

**Security and privacy.**
- **The data is sensitive.** Directors' police and credit records, ID and PIN numbers, and likely "sensitive personal data" (property and family details) under Kenyan law ([ODPC cross-border guidance](https://www.odpc.go.ke/wp-content/uploads/2026/04/Guidance-Note-on-Cross-border-Data-Transfers.pdf)). Borrowers' names and disputes in the complaints register.
- **Kenya's Data Protection Act reaches a foreign processor** ([ODPC FAQ](https://www.odpc.go.ke/faqs/)). We are the lender's processor and sign a data-processing agreement that follows reg 24 item by item, with a sub-processor list ([ODPC General Regulations](https://www.odpc.go.ke/wp-content/uploads/2024/03/THE-DATA-PROTECTION-GENERAL-REGULATIONS-2021-1.pdf)).
- **Hosting abroad is a cross-border transfer, allowed with safeguards** and a written record of each transfer (regs 40-41). Sensitive data also needs the person's explicit consent ([ODPC guidance](https://www.odpc.go.ke/wp-content/uploads/2026/04/Guidance-Note-on-Cross-border-Data-Transfers.pdf); whether the April 2026 note is final is unverified). Design response: the person portal opens with a consent screen naming the hosting country; a person who refuses uses "track-only" mode (dates only; files stay with the lender).
- **No localisation duty** for this use: reg 26 lists civil registration, elections, public finance, protected systems, education and health, not lending tools (my reading).
- **Breaches:** a processor tells the controller within 48 hours and the controller tells the ODPC within 72 ([Bowmans](https://bowmanslaw.com/insights/kenya-a-few-insights-on-navigating-data-breaches-in-kenya-under-the-kenyan-data-protection-law/)). We commit to 24 hours.
- **CBK outsourcing.** Holding a lender's registers may count as outsourcing, which needs 30 days' notice to CBK and a CBK-access clause (unverified). Our terms include the clause, and the settings page drafts the lender's notice. That turns an objection into a sales point.
- **Controls:** two-factor login for every staff role; single-use 7-day person links; field-level encryption for ID numbers, PINs and form answers; a hash-chained audit log of every view, export and permission change; daily encrypted backups with point-in-time recovery plus a nightly copy at a second provider and a monthly restore drill; no personal data in logs; a strict content security policy and rate limits; the founder alone has production access, with a hardware key; **AI agents never see production secrets or customer data**; an external penetration test before launch, then yearly.
- **Retention:** delete person documents 90 days after CBK decides, unless the lender keeps them; registers kept for the subscription, 7 years by default (matching AML records); full export and deletion on exit.

**Hosting.** An EU region (for example Frankfurt). Allowed under Kenyan law with the contract, record and consent above, and easy for larger lenders' due diligence. Latency to Nairobi is fine for a forms app (my estimate).

**Running cost** (USD a month, excluding staff and payment fees; my estimates on list prices, [03 file](03-product-and-tech.md)):

| Customers | Hosting and services | Share of revenue at about USD 80 a month per customer |
|---|---|---|
| 50 | about 100-170 | 2.5-4% |
| 300 | about 370-620 | 1.5-2.5% |
| 1,000 (needs Uganda or Tanzania) | about 960-1,500 | 1-2% |

Card fees (about 5.6% on a USD 80 charge through Paddle) cost more than hosting. **Trust, not servers, is the cost**: the advocate and the security test.

---

## 7. Development steps

### Reconciled timeline

The files agree on the dates. Start **Mon 12 Oct 2026**; MVP feature-complete on staging **Fri 30 Oct** (3 weeks); sellable launch **Mon 30 Nov** (week 8), or Mon 16 Nov if the advocate signs off in week 4 and the test runs in week 5 ([03 file](03-product-and-tech.md); [04 file](04-gtm-company-finance.md)).

Why the date matters: applicants need 2-6 weeks for police certificates, so most must start by **mid-February 2027** to file by 29 March. Kenya slows from about 20 Dec to 5 Jan (my estimate). The licensed lenders face the 31 Dec fee and return. A 30 Nov launch leaves about 9-10 good selling weeks for the kit. November's concierge pilots add 5-8 kits before launch.

Holidays to plan around: Mashujaa Day, Tue 20 Oct 2026; Jamhuri Day, Sat 12 Dec 2026 ([Calendarific](https://calendarific.com/holidays/2026/ke)).

### How the founder works with Claude Code and parallel agents

- **Roles.** The founder is architect, reviewer, integrator, product owner and content manager. Agents write code, tests, help text and first drafts of content. A Kenyan advocate approves all legal content. A Kenyan compliance practitioner checks the workflows.
- **At most 5-6 streams at once.** The limit is the founder's review time. Each stream works in its own git worktree and owns its own Django app folder.
- **Contracts first.** At the end of week 1, core models, service interfaces, URL names and base templates are frozen. Changing one needs the founder's approval.
- **Spec, then tests, then code.** Each task is a short spec with given/when/then tests. CI must pass. A separate review agent checks security and correctness. The founder merges small pull requests (under about 400 lines) and reads every change to login, tenancy, files and billing.
- **Synthetic test lenders from day 1:** a licensed digital lender, a pending applicant, a new logbook lender (licence tier), a small registered lender and an adviser with three clients.
- **Daily rhythm:** morning specs and merges; agents run in the day; review in the late afternoon; staging rebuild and end-to-end tests in the evening.

### Agent work streams

| Stream | Scope | Done by Fri 30 Oct when |
|---|---|---|
| **S0 Foundation** (founder plus 2 agents, week 1) | Skeleton, login with two-factor, organisations and roles, audit log, files, e-mail, PDF service, job queue, CI/CD, staging, UI shell, seed data | Contracts frozen; staging deploys on each merge; tenant tests in CI |
| **S1 Rules and calendar** | Requirement loader and versions; deadline engine (four rule kinds); obligations; reminders; public checker | Time-travel tests pass for every rule kind; checker right on 20 test cases |
| **S2 People and dossier** | People register; person portal with consent; uploads with expiry; Forms NDTCP 2/3 pre-fill; checklist by tier and situation; ready gate; ZIP and copy sheet | A synthetic lender with 4 people reaches "ready" and exports a correct ZIP |
| **S3 Policy generator** | Questionnaire; clause templates; assembly by tier; coverage check; versions; approvals; board resolution; product summary and pricing sheet | Golden files render for 5 synthetic lenders; no unmapped "policy content" requirement |
| **S4 Registers** | Complaints with clocks and export; change log with CBK letter, notice tracker and go-live gate | 100-complaint fixture gives correct dates; gate cannot be bypassed |
| **S5 Commercial** | Marketing site; onboarding; plans; merchant-of-record checkout and webhooks; client switcher; settings; data export and deletion | A sandbox purchase creates an active subscription; an adviser switches between 3 clients |
| **S6 Content** (agent drafts, advocate reviews) | Requirement library; about 80 questions; clause library for 6 policies and the other documents; help text; LN 191 diff | Draft v0.9 of every template; advocate review booked |
| **S7 QA and security** (throughout) | Threat model; cross-tenant tests; Playwright end-to-end tests; scans; restore drill; load test | No failing tenant test; restore drill documented |

### Calendar

| Week (start) | Engineering | Content and legal | Sales and pilots |
|---|---|---|---|
| 0 (Sat 10 Oct) | Accounts (code hosting, cloud, e-mail, Paddle sandbox); `CLAUDE.md`; architecture decisions | Obtain LN 191 (Government Printer or a partner advocate). Ask 3 small firms for a fixed template fee | List 30 target lenders from the CBK directory |
| 1 (Mon 12 Oct) | **S0 foundation**; S1 checker logic | Requirement library v0. **LC0:** advocate engaged; written questions sent (s.34 and fee-sharing, outsourcing, consent, LN 191 differences) | Landing page with the free checker and a waitlist; 10 discovery calls |
| 2 (Mon 19 Oct; Tue holiday) | **S1-S5 in parallel**, S7 alongside | Questionnaire and clause drafts. **LC1:** advocate approves the requirement map and policy outlines | 10 more calls; recruit 3-5 pilot lenders and 1-2 adviser firms |
| 3 (Mon 26 Oct) | **Fri 30 Oct: MVP feature-complete on staging** (draft content) | Drafts v0.9 of all templates | Demo to pilots |
| 4 (Mon 2 Nov) | Integration, end-to-end and time-travel tests, mobile checks | Advocate review round 1 | Concierge: the founder runs 2 friendly lenders through staging and delivers advocate-checked documents |
| 5 (Mon 9 Nov) | Fixes; test scoping; billing live; one-page security sheet | **LC2:** content v1.0 signed off; terms, data-processing agreement, privacy notice, impact assessment and transfer record approved | Founding offer to the waitlist; webinar 1 with the partner advocate |
| 6 (Mon 16 Nov) | **External penetration test** (3-4 days) | Pilot feedback into content | 5-8 paid concierge pilots at KES 40,000 |
| 7 (Mon 23 Nov) | Fix findings; retest; restore drill; monitoring | "29 March" and "31 December" checklists | Partner advisers trained |
| 8 (Mon 30 Nov) | **Sellable launch**; self-serve sign-up opens | Weekly law watch starts | Outreach to the CBK list; "31 December" campaign |
| Dec 2026 | v1a: LN 191 gap analysis, adviser dashboard, CBK query log | Switch rule flags to "LN 191 confirmed" | Year-end campaign to licensed lenders |
| Jan 2027 | v1b: AML pack, notices register, bureau pre-listing tracker | Content release with the AML pack | Rush selling through advisers |
| Feb-Mar 2027 | Support and small fixes only | Answer any CBK guidance notes | Peak: help applicants file by 29 Mar |
| Apr-Sep 2027 | v1c: agent register (before 31 Oct), certification workpaper (before 31 Dec), public complaint form with SMS, evidence pack v2 | Uganda legal-layer study | Move kit buyers to Comply |

**If time slips, cut first:** the visual coverage matrix (keep the check as a list), the go-live gate screen (keep a plain log), the client switcher (separate logins by hand). **Never cut:** tenant isolation and its tests, two-factor login, the advocate's sign-off, the penetration test, tested backups.

### MVP definition of done (sellable on 30 Nov)

1. A pilot lender with 3-5 people produces a complete licence or registration dossier with every item green and expiry-checked, in **under 4 hours** of its own time (not counting waits for police, KRA and bureau documents).
2. The policy set renders for both tiers; every "policy content" requirement maps to an advocate-approved clause; content v1.0 is signed off and shows its "law as at" date.
3. The public checker is right on 20 reference cases reviewed by the advocate.
4. The deadline engine passes time-travel tests for every rule kind, including 31 Dec, about 31 Oct, 29 Mar 2027 and the complaint clocks.
5. The complaints register computes all three dates right on a 100-case fixture and exports CSV and XLSX.
6. The change log cannot mark a change live before CBK approval and 30 days after the notice.
7. Cross-tenant tests pass for every model and file route; no high or critical test finding is open; a restore from backup has been done and timed.
8. Terms, data-processing agreement, privacy notice, consent screens, impact assessment and transfer record are approved by the advocate.
9. Card checkout works end to end, with invoices.
10. At least 3 pilot lenders have used it end to end, and at least 2 have paid.

### Build budget (cash; founder unpaid; no hired developers)

| Item | MVP (weeks 0-8) | v1 (Dec 2026-Mar 2027) | Basis |
|---|---|---|---|
| Claude Code subscriptions (2 x Max 20x in Oct-Nov, then 1) | USD 800 | USD 800 | USD 200 a month each ([Novita](https://blogs.novita.ai/claude-subscription/)) |
| Claude API for tests and evaluations | USD 50-150 | USD 100-200 | [Anthropic pricing](https://platform.claude.com/docs/en/about-claude/pricing) |
| **Kenyan advocate**: content review, terms, data agreement, written opinions | **USD 3,500-7,000 (KES 450,000-900,000)** | USD 1,200-2,300 | About 30-36 hours at KES 15,000-25,000 an hour ([Global Law Experts](https://globallawexperts.com/?p=1530199)); hours are my estimate |
| Kenyan compliance practitioner (workflow review, pilot introductions) | USD 800-1,550 | USD 400-800 | 8-12 days; my estimate |
| **External penetration test**, 3-4 days, with retest | **USD 5,000-8,000** | 0 | Narrow web-app tests quoted at USD 5,000-15,000 ([Redfox](https://www.redfoxsec.com/blog/how-much-does-web-application-penetration-testing-cost-2026-pricing-guide); [Blaze](https://www.blazeinfosec.com/post/how-much-does-penetration-testing-cost/)) |
| Hosting and tools during the build | USD 200-300 | USD 400-700 | Table in §6 |
| Small items (LN 191 copy, UI kit, ODPC fee) | USD 50-380 | 0 | |
| Pilot trip to Nairobi (optional) | USD 0-2,500 | USD 0-2,500 | My estimate |
| Contingency, about 15% | USD 1,600-3,100 | USD 400-1,100 | |
| **Total** | **about USD 12,000-24,000 (KES 1.5m-3.1m)** | **about USD 3,300-8,400** | [03 file](03-product-and-tech.md) |

**Reconciliation.** The 04 finance model used a smaller security test (KES 390,000, about USD 3,000, "my estimate") and KES 500,000 for the advocate. I use the 03 figures: a test of **USD 5,000-8,000** and an advocate at **KES 450,000-900,000**. The 03 figures cite market prices, and the product holds directors' criminal-record and credit documents, so a shallow test is false economy. A Nairobi firm lists a KES 50,000 package ([Hostiko](https://hostiko.co.ke/services/cybersecurity)), probably too shallow on its own. This raises peak cash by about KES 0.3m-1.1m (see §10).

To spend less without cutting safety: take the advocate on as a channel partner (lower template fee in exchange for review referrals); skip the Nairobi trip until pilots are signed.

---

## 8. Go-to-market

### Pricing (reconciled)

The three earlier sources proposed different prices:

| Item | Re-assessment | 02 file | 04 file | **Used here** |
|---|---|---|---|---|
| Kit (one-off) | KES 75,000-150,000; plan 100,000 | USD 490 (KES 63,000); USD 890 with an advocate | KES 69,000 registration / 99,000 licence; advocate review about 75,000 extra | **04** |
| Recurring tool | KES 15,000 a month for everyone (180,000 a year) | USD 45 / 99 a month by tier | KES 78,000 / 156,000 a year by tier | **04** (the same money as 02) |
| Adviser plan | KES 600,000 a year, up to 20 lenders | USD 349 a month, up to 20 | KES 540,000 a year, up to 15, plus 30,000 per extra | **04** |

Why: the 04 prices are tiered by CBK class. The registered tier has just been hit with a KES 250,000 fee and gets the lower price ([02 file](02-market-and-competition.md)). Both tiers sit below the lender's own loan software (USD 59-346 a month, [Loandisk](https://loandisk.com/pricing.php)) and below one week of a compliance hire. The kit sits below CBK's KES 100,000 application fee and at the bottom of a lawyer's KES 60,000-250,000 for one application ([Global Law Experts](https://globallawexperts.com/commercial-lawyer-fees-kenya/)). No consultant publishes a price, so these remain my estimates until the discovery calls test them.

| Plan | Who | Price (net of 16% VAT) | Includes |
|---|---|---|---|
| **Free check** | Anyone | 0 | Scope and tier, fees, countdown to about 29 Mar 2027, 31 Dec reminder by e-mail |
| **Application Kit, registration** | Capital under KES 20m | **KES 69,000** one-off (USD 530) | Dossier builder, person tracker, sworn declarations, policy set (full credit policy and code, four briefs), complaints procedure, pricing sheet with APR calculator; **3 months of Comply** |
| **Application Kit, licence** | KES 20m or more | **KES 99,000** one-off (USD 760) | As above with six full policies and the licence-only items; 3 months of Comply |
| Advocate review (add-on) | Lenders that want a lawyer's sign-off | About KES 75,000, **billed by the advocate directly** | Review of the generated set against the lender's facts |
| **Comply, registered** | Registered lender | **KES 78,000 a year** (about 6,500 a month; USD 600) | Registers (complaints, approvals, agents, outsourcing, people changes, bureau notices), calendar, certification workpaper, inspection pack, rule updates, KES 20m conversion alert |
| **Comply, licensed** | Licensed lender, including the 281 | **KES 156,000 a year** (about 13,000 a month; USD 1,200) | As above, plus more users, the AI-decisions register, a returns log and a board pack |
| **Adviser** | Law firm, consultant, accountant | **KES 540,000 a year** (USD 4,150), up to 15 workspaces; KES 30,000 per extra | Multi-client dashboard, white-label documents, kits for its own clients at no extra licence fee |
| Monthly billing | Any Comply plan | +20% | |

**Discounts** ([04 file](04-gtm-company-finance.md)):
- concierge pilots in November: the kit at KES 40,000 for the first 5-8, for feedback and a testimonial;
- founding customers: 25% off the first Comply year for the first 50 who sign by 31 Jan 2027;
- association members (DFSAK, AMFI-K, the Fintech Alliance): 10% off.

**Packaging rules.** Yearly prepaid is the default. The kit's 3 free months lead into Comply. A 5-7% price rise in year 3. No per-loan pricing.

**VAT is a real cost to buyers.** Lending is VAT-exempt, so a lender cannot usually reclaim the 16% on our fee ([Musoni, Tax Appeals Tribunal](https://new.kenyalaw.org/akn/ke/judgment/ketat/2024/1250/eng@2024-08-09); [Grant Thornton](https://www.grantthornton.co.ke/globalassets/1.-member-firms/kenya/insights/pdf/grant-thornton-kenyas-analysis-of-the-finance-act-2026.pdf)). Comply registered therefore costs the buyer KES 90,480. Quote "excl. VAT" from day one. KRA has proposed scrapping the KES 5m VAT threshold, so do not plan on a VAT-free price edge ([The Kenya Times](https://thekenyatimes.com/business/inside-kra-proposal-to-scrap-ksh5-million-vat-threshold-what-it-means-to-businesses/)).

### Channels, in priority order

| # | Channel | What we do | Deal | Share of year-1 customers (my estimate) |
|---|---|---|---|---|
| 1 | **Small Nairobi law and consulting firms** with DCP guides ([02 file](02-market-and-competition.md)) | Sell the Adviser plan so they make kits faster at a fixed cost; recruit 1-2 as the partner advocate | They pay us for software (no fee-sharing). Non-advocate consultants get 20% of first-year revenue for referrals | 35% |
| 2 | **Direct outreach to the 281** in CBK's directory | One-to-one e-mail to company addresses, then a call from the Nairobi person; offer a "31 December pack" and a free 30-minute gap review | Staff time | 25% |
| 3 | **Search and content** for offline lenders | Free checker; "29 March 2027" checklist in English and Swahili; narrow Google Ads | Media | 15% |
| 4 | **Associations**: DFSAK, the Fintech Alliance (AFIK, FINTAK, DFSAK, DCPAK), AMFI-K ([Capital FM](https://capitalfm.africa/kenyas-fintech-industry-gets-boost-with-new-alliance-formation/)) | Member webinar with the partner advocate; member discount. Sumsub's association deal is a precedent ([Sumsub](https://sumsub.com/newsroom/sumsub-joins-forces-with-kenyas-premier-fintech-association-to-drive-digital-innovation/)) | 10% discount | 10% |
| 5 | **Press and LinkedIn** | Founder posts on each licensing batch; data stories to TechTrendsKE, Tech-ish, Business Daily | Time | 5% |
| 6 | **Loan-software vendors** (Tunza, SuperLMS, Loandisk resellers) | Referral and CSV import | 15-20% of first-year revenue | 5% |
| 7 | **Accountants and data-protection consultants** (ICPAK network) | CPD-style webinar; referral code | 20% of first-year revenue | 5% |

Rules for outreach:
- **No bulk cold e-mail.** 111 directory entries are webmail addresses, which point to individuals; Kenya's data law limits direct marketing (s.37, not read; unverified). Use phone, LinkedIn and one-to-one company e-mails; build lists from opt-ins.
- **Advocates may not tout or share fees with non-advocates** ([Advocates (Practice) Rules](https://lite.judy.legal/amp/legislation/akn/ke/act/ln/1967/19/); current text unverified). Co-marketing stays educational (webinars, alerts), and money flows only as software fees.
- **Sales cycle.** A vendor claims 90-270 days for regtech in Nairobi ([devcommx](https://www.devcommx.com/demand-generation/nairobi/regtech), vendor claim, unverified). The deadline shortens it for the kit. Plan 30-90 days for Comply (my estimate).

**Sales motion.** Self-serve for the kit (checker, then card checkout), with a WhatsApp button on every page. Assisted for Comply: a 30-minute demo and gap review, a 14-day trial with the lender's own dates loaded, and one onboarding call that imports agents, products and open complaints from Excel. Renewal invoices go out 45 days ahead with a "your year in compliance" summary.

**Renewal drivers:** the 31 Dec fee and return every year; registers CBK can ask for; rule changes; the KES 20m conversion alert.

### Selling calendar

| When | What happens | What we sell |
|---|---|---|
| Oct-Nov 2026 | Firms and press explain LN 191 | Discovery, concierge pilots, partner deals |
| **31 Dec 2026** | First fee at the new rates, plus the annual return | "31 December pack" to the 281 |
| about 20 Dec-5 Jan | Festive slowdown (my estimate) | Do not push |
| 31 Jan 2027 | FIU annual AML report (unverified date) | AML helper inside Comply |
| **Jan-Mar 2027** | The application rush to about 29 Mar | Kits, mostly through partner firms |
| by 31 Mar each year | CBK publishes its list of licensed and registered lenders (draft rule) | A fresh Comply target list |
| Apr-Jun 2027 | AfricArena Nairobi (Apr), Africa Fintech Live (May), Africa Fintech Forum (Jun) ([02 file](02-market-and-competition.md)) | Comply, Adviser plan |
| each CBK batch (3-4 a year) | The press prints the new names | Comply offer to new licensees |
| about 31 Oct, then Oct-Dec | Agent renewals; year-end fee and return | Renewals and new Comply sales |

### Marketing budget, year 1 (Nov 2026-Oct 2027): about KES 1.4m (USD 10,800)

| Item | KES |
|---|---|
| LinkedIn ads (test small first; B2B CPC benchmarks USD 5.50-12, [Dupple](https://dupple.com/learn/linkedin-ads-b2b-cost-2026)) | 300,000 |
| Google Ads (narrow keywords) | 150,000 |
| Webinar and e-mail tools, design | 100,000 |
| Content: checklists, Swahili explainer, short videos | 120,000 |
| PR and one sponsored article (rates unpublished) | 200,000 |
| Events: 1-2 booths or sponsorships (prices unverified) | 350,000 |
| Association sponsorship or member offers | 120,000 |
| Contingency | 160,000 |

By quarter: KES 400,000 (launch and 31 Dec), 380,000 (rush), 330,000 (events), 290,000 (year-end). Years 2 and 3: KES 1.1m a year. The Nairobi sales and support person (base: KES 90,000 a month in year 1, [Paylab](https://kenya.paylab.com/salaryinfo/commerce/sales-representative)), partner commissions and trips are separate lines in §10.

### First 90 days (Mon 12 Oct 2026 to Sat 9 Jan 2027)

- **Days 1-7 (12-18 Oct): set up and verify.**
  - Get the gazetted LN 191 text; diff it against the draft; switch rule flags.
  - Shortlist 3 small Nairobi firms; ask each for a fixed template fee and a quote for one licence application (this also gives a real competitor price).
  - Open a Paddle account; send Paddle the written questions in §14.
  - Landing page with the free checker, waitlist and a "29 March 2027" countdown.
  - Build week 1 (S0 foundation).
  - Book 20 discovery calls from the CBK directory and LinkedIn.
- **Days 8-21 (19 Oct-1 Nov): build and validate.**
  - Agent streams S1-S7; MVP on staging Fri 30 Oct.
  - Hold the 20 calls. Test KES 69,000 / 99,000 for the kit and KES 6,500 / 13,000 a month for Comply.
  - Pre-sell 5-8 concierge pilots at KES 40,000.
  - Get a Kenyan tax adviser's short written view on withholding and the digital-presence tax in the Paddle phase. **Do not register the Kenyan company yet** (see §9).
  - **Milestone 1 Nov** (§13).
- **Days 22-49 (2-29 Nov): legal content, security, partners.**
  - Advocate review rounds; content v1.0 signed off.
  - Penetration test in the week of 16 Nov; fix and retest.
  - Deliver the concierge pilots.
  - Sign 2 partner firms on the Adviser plan or as referrers.
  - **Webinar 1** (mid-November) with the partner advocate: "What to file by 29 March 2027."
  - Pitch DFSAK and the Fintech Alliance for a January member webinar.
  - Press pitch: "x of 900+ applicants still pending; what the new rules ask for."
- **Days 50-63 (30 Nov-13 Dec): launch.**
  - Public launch: kit checkout through Paddle; Comply trials.
  - "31 December" campaign to the 281: the KES 500,000 fee, the annual return, the late charge.
  - **Webinar 2:** "Your 31 December annual return and fee."
  - Target: 10 paid kits and 5 Comply subscribers by 13 Dec.
- **Days 64-80 (14-30 Dec): support the year-end; quiet build.** Help licensed customers finish their return; ship v1a; expect the slowdown.
- **Days 81-90 (31 Dec-9 Jan): prepare the rush.** Plan weekly January-March webinars, Google Ads, the partner push and the association webinar. Prepare (but do not file) the Kenyan company papers so it can be registered within a week if a trigger fires. **Day-90 review** against §13.

---

## 9. Payments, company and legal

### Is a Kenyan company needed?

- **Not legally.** The product is a tool. It does not lend, so it needs no CBK licence, and a foreign company may sell software to Kenyan businesses ([04 file](04-gtm-company-finance.md)).
- **In practice, probably within 6-12 months.** The 04 file says register in months 1-3 and move billing by about April 2027. Its reasons are real:
  - **Withholding tax.** Since 1 Jul 2026, "royalty" includes software with its licence, training, maintenance and support fees ([Grant Thornton](https://www.grantthornton.co.ke/globalassets/1.-member-firms/kenya/insights/pdf/grant-thornton-kenyas-analysis-of-the-finance-act-2026.pdf); [KPMG](https://kpmg.com/us/en/taxnewsflash/news/2026/07/kenya-tax-measures-finance-act-2026-cbc-reporting.html)). A Kenyan buyer paying abroad may have to withhold 20%, or the treaty rate ([PwC](https://taxsummaries.pwc.com/kenya/corporate/withholding-taxes)). Whether SaaS access is caught is untested.
  - **How companies pay.** Recurring supplier payments in Kenya go by bank transfer and M-Pesa Paybill to a Kenyan account (general practice; unverified as a share). Wiring USD abroad costs a small buyer fees that can reach 5-12% ([paybillke](https://paybillke.com/guides/freelancer-usd-payout-guide-kenya-2026)).
  - **Trust.** A regulated lender files a KES invoice with a KRA PIN and an eTIMS number; a USD receipt from abroad is unusual ([KRA eTIMS](https://www.kra.go.ke/business/etims-electronic-tax-invoice-management-system/learn-about-etims/what-is-etims)).
- **My call, applying the owner's preference: launch from the company abroad on Paddle, and decide on the Kenyan company at the 31 Mar 2027 review.** Register it as soon as **any one** trigger fires:
  1. three or more buyers insist on a KES eTIMS invoice, withhold tax, or cannot pay by card;
  2. more than 1 in 5 kit-to-Comply conversions fail at card checkout (the licensed plan with VAT, KES 180,960, is above M-Pesa GlobalPay's launch limit of KES 150,000 per payment ([Khusoko](https://khusoko.com/2022/06/02/safaricoms-virtual-visa-allows-customers-to-pay-for-goods-using-m-pesa-globally/); current limit unverified));
  3. 20 or more paying Comply subscribers;
  4. an Adviser-plan law firm requires a Kenyan contract.
  
  If none fires, register by **1 Jul 2027 at the latest**, provided the month-6 milestone is met, so the company is running before the October-December renewal and year-end season.
- **Be honest about the saving:** waiting saves about KES 37,000 a month in company running costs but keeps Paddle's 5.1% fee instead of about 1.5% for longer, so it is roughly cost-neutral (my estimate). The real gain is founder time during the build and the rush, and the option never to open it if card billing works.
- The Nairobi sales and support person can be contracted from abroad until then (tax treatment unverified; ask the tax adviser).

### Payment routes

| Route | When | Fees | Notes |
|---|---|---|---|
| **Paddle** (merchant of record), from the founder's company abroad | Launch to the company switch | 5% + USD 0.50 per transaction, no monthly fee ([Paddle pricing](https://www.paddle.com/pricing)) | Collects **16% Kenyan VAT on B2B and B2C** ([Paddle tax list](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)). **KES is not a checkout currency**, so price in USD and show KES on the site ([Paddle currencies](https://developer.paddle.com/concepts/sell/supported-currencies)). Whether Paddle also carries the digital-presence tax, and which Paddle entity invoices Kenya, are open (§14) |
| Stripe direct | **Not for Kenya** | UK account: 3.15% + 20p for international cards, +2% currency conversion, Billing 0.7%, Tax 0.5% ([Stripe UK](https://stripe.com/gb/pricing)) | Takes Kenyan cards, but the founder's company would have to register for Kenyan VAT and file VAT and the 3% digital-presence tax monthly by the 20th ([PwC](https://taxsummaries.pwc.com/kenya/corporate/other-taxes); [PwC](https://taxsummaries.pwc.com/kenya/corporate/taxes-on-corporate-income)). A Kenyan company cannot open Stripe at all: Kenya is "Extended network", pointed to Paystack ([Stripe global](https://stripe.com/global)) |
| Lemon Squeezy | Backup | About 5% + USD 0.50 ([Dodo](https://dodopayments.com/blogs/lemonsqueezy-review)) | Kenya is not on its blocked list; whether it remits Kenyan VAT on B2B is unclear ([Lemon Squeezy](https://docs.lemonsqueezy.com/help/getting-started/supported-countries)) |
| Paystack | After the Kenyan company exists | Local cards 2.9%; international 3.8%; M-Pesa 1.5% ([Paystack Kenya](https://paystack.com/ke/pricing), search summary) | Settles in KES or USD |
| M-Pesa Paybill, bank transfer, PesaLink | After the Kenyan company exists | Low | How Kenyan firms pay suppliers |

**Kenyan cards** generally work for foreign online merchants, but some business cards decline until "international online transactions" are switched on (bank by bank; unverified). M-Pesa users can pay with GlobalPay, a virtual Visa card, but it is a personal wallet, so a director pays and claims it back.

### Tax friction while selling from abroad

| Issue | Rule | Effect | Source |
|---|---|---|---|
| VAT | Non-residents selling digital services to Kenyan businesses register and charge 16% from the first sale; monthly returns | Paddle handles it; with Stripe, we would | [PwC](https://taxsummaries.pwc.com/kenya/corporate/other-taxes) |
| Digital-presence tax (SEP) | About 3% of gross; no threshold since the Finance Act 2025; draft rules exempt income already taxed by withholding | Either the buyer withholds or the seller pays 3%, not both if the draft holds | [PwC](https://taxsummaries.pwc.com/kenya/corporate/taxes-on-corporate-income); [CDH](https://www.cliffedekkerhofmeyr.com/en/news/publications/2025/Practice/Tax-Exchange-Control/tax-and-exchange-control-alert-03-october-Kenya-issues-draft-Income-Tax-Significant-Economic-Presence-Tax-Regulations-2025) |
| Withholding tax on "royalties" | 20% for non-residents; treaty caps: UK, Germany, Canada 15%; France, South Africa, UAE, India 10%; Ireland, the Netherlands, Estonia and the US have no treaty, so 20% | A small lender paying by card will usually not withhold (my estimate). Licensed lenders with auditors may, and the seller then gets 80-85% | [PwC](https://taxsummaries.pwc.com/kenya/corporate/withholding-taxes) |
| eTIMS invoices | Expense claims are checked against eTIMS from 1 Jan 2026; services from a non-resident without a permanent establishment are excluded | A foreign invoice does not cost the buyer its deduction; a Kenyan company must issue eTIMS invoices | [KRA eTIMS](https://www.kra.go.ke/business/etims-electronic-tax-invoice-management-system/learn-about-etims/what-is-etims); [BDO](https://www.bdo-ea.com/en-gb/insights/kra-to-validate-income-and-expenses-declared-in-tax-returns-effective-1-january-2026) |

**Which home country is best?** If the founder's company is in the UK or Germany, a withholding buyer takes 15%; in France, 10%; in Ireland, the Netherlands, Estonia or the US, 20%. In the Paddle phase it is Paddle's invoicing entity that counts (open question).

### Kenyan company: real costs

| Item | In person (founder in Nairobi) | Remotely through a lawyer or corporate service firm | Source |
|---|---|---|---|
| Name search | KES 650 | Included | [BRS fee schedule](https://brs.go.ke/fee-schedule-companies-registry/) |
| Private company registration | **KES 10,650** (one guide: 10,200-10,750 by share capital) | Included | [BRS fee schedule](https://brs.go.ke/fee-schedule-companies-registry/); [Kolonell](https://kolonell.com/en/blog/cost-of-registering-business-kenya-2026) |
| **Official total** | **about KES 11,300** on eCitizen, plus travel | | |
| Professional fees: incorporation, KRA PINs for company and directors, beneficial-ownership filing, first-year registered office, bank introduction | 0 | Incorporation alone KES 15,000-60,000 in agent guides ([vjmglobal](https://www.vjmglobal.com/feeds/blog/private-limited-company-kenya-usa), secondary); with the rest, **KES 60,000-120,000** (my estimate) | No lawyer's written quote found |
| **All-in remote budget** | | **KES 100,000-150,000** (USD 770-1,150) | [04 file](04-gtm-company-finance.md) |
| Minimum share capital | None | | [Kolonell](https://kolonell.com/en/blog/cost-of-registering-business-kenya-2026) (secondary) |
| Company secretary | Not required below KES 5m paid-up capital; without a secretary or resident director, name a resident contact person | | [BRS-hosted risk assessment](https://brs.go.ke/wp-content/uploads/2024/01/PUBLIC-VERSION-MONEY-LAUNDERING-AND-TERRORIST-FINANCING-RISK-ASSESSMENT-REPORT.pdf); [EY](https://taxnews.ey.com/news/2023-1625) |
| Time | 1-7 working days at BRS once papers are ready | Plus 2-6 weeks for a bank account with a foreign director (my estimate) | [Kolonell](https://kolonell.com/en/blog/register-company-kenya-ecitizen-brs-steps-2026) (secondary) |

Why remote needs a firm: directors without a Kenyan alien card usually cannot use the BRS portal alone ([vjmglobal](https://www.vjmglobal.com/feeds/blog/private-limited-company-kenya-usa), secondary), and filings by foreign-resident directors sometimes fail at the one-time-password step with non-Kenyan phone numbers ([Bowmans](https://bowmanslaw.com/insights/kenya-companies-registry-a-reform-agenda-for-ease-of-doing-business/)). No resident director is legally required, but banks move faster with a local signatory, and each foreign director needs a KRA PIN to sign at the bank ([Healy Consultants](https://www.healyconsultants.com/kenya-company-registration/post-incorporation-considerations), secondary). A director who lives abroad should not need a work permit (unverified).

**Running costs of the Kenyan company** (my estimates unless sourced):

| Item | Cost |
|---|---|
| Bookkeeping | KES 5,000-10,000 a month (15,000-30,000 with payroll) |
| Company secretary or registered office | KES 5,000-10,000 a month |
| Audit and tax return | KES 80,000-150,000 a year (whether a small-company exemption applies is unverified) |
| BRS annual return | KES 650 ([BRS FAQ](https://brs.go.ke/wp-content/uploads/2024/05/FAQs.pdf), unverified) |
| Nairobi Unified Business Permit | about KES 10,000-30,000 a year (sources conflict, [Capital FM](https://capitalfm.africa/all-you-need-to-know-about-the-unified-business-permit-costs-requirements-and-how-to-apply/)) |
| **Sum** | **about KES 18,000-35,000 a month** by my addition; the 04 file rounds the company line to KES 35,000-45,000 and the model uses KES 37,000, which I keep as a cautious figure |
| Professional indemnity and cyber insurance | about KES 150,000-300,000 a year (no quote found; needed with or without the company) |

**Taxes on the Kenyan company:** corporate tax 30% ([PwC](https://taxsummaries.pwc.com/kenya/corporate/taxes-on-corporate-income)); turnover tax for KES 1m-25m turnover, at 1.5% or 3% (sources differ; [PwC](https://taxsummaries.pwc.com/kenya/corporate)); VAT registration at KES 5m turnover. Once billing is Kenyan, a buyer may withhold the 5% resident rate on royalties, which is credited against the company's tax. The Kenyan company paying the foreign company for the software is itself a royalty (20% or treaty rate) with transfer-pricing rules; at first, keep the margin in Kenya and get a tax adviser's view before the first intercompany invoice.

### Legal

- **Advocates Act s.34** bars unqualified persons from preparing, for a fee, documents for conveyancing, company formation, partnerships, probate and litigation ([Sheriaplex](https://www.sheriaplex.com/kenya-acts/5674-unqualified-person-not-to-prepare-certain-documents-or-instruments)). Internal policies and CBK's prescribed forms are not on that list (my reading). Mitigations: sell self-service software; ship only advocate-approved clauses; the advocate performs and bills the review add-on; get a **written opinion in week 1**, including on s.44 fee scales.
- **Fee-sharing.** Neither side takes a cut of the other's fees ([Advocates (Practice) Rules](https://lite.judy.legal/amp/legislation/akn/ke/act/ln/1967/19/), current text unverified). Law firms pay us software fees. Only non-advocate consultants get referral commissions.
- **Documents before the first paid customer:**
  1. Terms of service (B2B): "a tool, not legal advice"; the lender files and stays responsible; liability capped at 12 months' fees; CBK, ODPC and Competition Authority fines and loss of a licence excluded; a tax clause ("fees exclude VAT and any withholding; if you withhold, send the KRA certificate"); a CBK-access clause.
  2. Data-processing agreement following ODPC reg 24, with the sub-processor list ([ODPC General Regulations](https://www.odpc.go.ke/wp-content/uploads/2024/03/THE-DATA-PROTECTION-GENERAL-REGULATIONS-2021-1.pdf)).
  3. Privacy notice; impact assessment summary; transfer record.
  4. Partner agreements: Adviser-plan licence; referral agreement (20%) for non-advocate consultants; engagement letter with the partner advocate.
- **Kit promise (capped):** if CBK raises a documentation query on an item the kit covers, we fix it within 5 working days free; if CBK refuses an application for a missing item the kit should have produced, we refund the kit fee ([04 file](04-gtm-company-finance.md)).
- **Rule-change service level:** templates and calendar updated within 30 days of a gazetted change or CBK guidance.
- **Our own ODPC registration.** Foreign processors of Kenyan residents' data must register, but firms under KES 5m turnover and 10 staff are exempt unless in a listed sector ([ODPC FAQ](https://www.odpc.go.ke/faqs/)). We are probably exempt in year 1. Register early anyway (KES 4,000) because it helps sales; whether a foreign company needs a KRA PIN to do so is unverified.
- **Insurance:** professional indemnity and cyber, KES 150,000-300,000 a year (unverified). **Trademark:** file with KIPI (fee unchecked).
