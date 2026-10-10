# Kenya NDTCP law (CBK Non-Deposit Taking Credit Providers Regulations), turned into product requirements

Status: draft complete as of 2026-10-10; open questions are listed at the end. Written for the deep dive on idea kenya-b4.

**Biggest caveat.** I could not open the gazetted text of the final rules. Kenya Law lists them as *The Central Bank of Kenya (Non-Deposit Taking Credit Providers) Regulations, 2026*, Legal Notice 191 of 2026, dated 29 Sep 2026 ([Kenya Law listing][KL191]). Kenya Law, the Laws.Africa API and the gazette archive all returned 403 or 404 to this environment. CBK's legislation page still lists only the 2025 draft ([CBK legislation page][CBKLEG]). So:
- duties below are taken from the **full 2025 draft**, which I read end to end ([DR]);
- they are cross-checked against **press and law-firm reports on the final text**, which give some final regulation numbers ([TI], [TT], [BD], [BW]);
- where the final text may differ, the row says so.

The draft PDF lost its regulation numbers when converted to text. Draft provisions are therefore cited by Part and heading, for example "DR Part V, Customer complaints (4)". Final regulation numbers are given only where a report names them.

## Source keys used in this file

| Key | Source | Read how |
|---|---|---|
| [Act] | CBK Act, Cap 491, Kenya Law revision "as at 27 December 2024" (includes Business Laws (Amendment) Act No. 20 of 2024), hosted by CBK: https://www.centralbank.go.ke/wp-content/uploads/2025/03/Central-Bank-of-Kenya-Act-Cap-491-Laws-of-Kenya-1.pdf | Full text read (s.2, 33R-33Y, 43, 51B, 57, 59) |
| [DR] | Draft CBK (Non-Deposit Taking Credit Providers) Regulations, 2025, published for comment Aug 2025: https://www.centralbank.go.ke/wp-content/uploads/2025/08/Draft-Central-Bank-of-Kenya-Non-Deposit-Taking-Credit-Providers-Regulations-2025.pdf | Full text read (63 pages, incl. Forms NDTCP 1-3 and Schedules) |
| [KL191] | Kenya Law page for LN 191 of 2026: https://new.kenyalaw.org/akn/ke/act/ln/2026/191/eng@2026-09-29 | Title, LN number and date seen in search results only; page 403 |
| [TI] | Tech-ish, 4 Oct 2026, on LN 191: https://tech-ish.com/2026/10/04/cbk-raises-licensed-lenders-annual-fee-to-kes-500000-from-kes-20000/ | Read |
| [TT] | TechTrendsKE, 5 Oct 2026: https://techtrendske.co.ke/2026/10/05/cbk-non-deposit-taking-credit-providers-regulations/ | Read |
| [BD] | Business Daily, 3 Oct 2026, "Thugge raises compliance fees…": https://www.businessdailyafrica.com/bd/economy/thugge-raises-compliance-fees-non-deposit-taking-credit-firms-5617420 | Read |
| [BW] | Bowmans, "Non-deposit taking credit provider regulations are here": https://bowmanslaw.com/insights/kenya-non-deposit-taking-credit-provider-regulations-are-here-what-lenders-need-to-know/ | Search snippet only; page 403 |
| [DCP22] | CBK (Digital Credit Providers) Regulations 2022, LN 46 of 2022: https://www.centralbank.go.ke/wp-content/uploads/2022/03/L-.N.-No.-46-Central-Bank-of-Kenya-Digital-Credit-Providers-Regulations-2022.pdf | Relevant parts read (now revoked) |
| [PROC] | CBK, "The A-Z of licensing a Digital Credit Provider", revised Oct 2024: https://centralbank.go.ke/wp-content/uploads/2024/11/Procedures-for-licensing-Digital-Credit-Providers-Revised-October-2024.pdf | Full text read |
| [RIS] | CBK Regulatory Impact Statement on the 2026 Regulations, May 2026: https://www.centralbank.go.ke/wp-content/uploads/2026/06/Regulatory-Impact-Assessment-Central-Bank-of-Kenya-Non-Deposit-Taking-Credit-Providers-Regulations-2025.pdf | Full text read (6 pages) |
| [BSAR] | CBK Bank Supervision Annual Report 2025: https://www.centralbank.go.ke/uploads/banking_sector_annual_reports/1241268828_ANNUAL%20REPORT%202025.pdf | DCP and BSD sections read |
| [POC] | Proceeds of Crime and Anti-Money Laundering Act (POCAMLA), Revised Edition 2022 (Kenya Law revision, copy hosted by a-mla.org): https://www.a-mla.org/sites/default/files/amla-import/711296287884447b06_0.pdf | ss.2, 44-47A read |
| [ACR] | FRC Annual Compliance Reporting Template for Reporting Institutions, Ver. 7, under reg 44 of the POCAML Regulations 2023 (copy hosted by ICPAK): https://www.icpak.com/wp-content/uploads/2024/12/ACR-Template-2024-Vers.-7.docx | Full text read |
| [ODPC] | Data Protection (Registration of Data Controllers and Data Processors) Regulations 2021, LN 265 of 2021, ODPC copy: https://www.odpc.go.ke/wp-content/uploads/2024/03/THE-DATA-PROTECTION-REGISTRATION-OF-DATA-CONTROLLERS-AND-DATA-PROCESSORS-REGULATIONS-2021.pdf | Full text read |
| [CPA] | Consumer Protection Act No. 46 of 2012, as gazetted (copy on KICTANet list): https://lists.kictanet.or.ke/pipermail/kictanet/attachments/20130219/a9fc4721/attachment.pdf | Part VII (ss.53-71) read; later amendments not checked |
| [ITE] | Fintech Association of Kenya / Precursor, republished by ITEdgeNews, 1 Oct 2026: https://www.itedgenews.africa/kenya-licensed-digital-lenders-now-it-must-supervise-the-loan/ | Read |
| [CMA] | CM Advocates alert on CBK BSA user training for NDTCPs (Apr 2025): https://cmadvocates.com/blog/legal-alert-upcoming-bank-supervision-application-bsa-user-training-for-non-deposit-taking-credit-providers-stay-compliant/ | Search summary only; page now 404 |

Penalty shorthand used in the table:
- **P-CBK** = CBK administrative penalty of up to KES 2m, or three times the gain made or loss avoided, whichever is higher, plus up to KES 10,000 a day while the breach continues. CBK can also remove officers, disqualify directors for 5 years, ban new lending, ban a channel or agent, order a 45-day remediation plan, inspect more often, and suspend or revoke the licence or registration ([Act] s.57(4); [DR] Part IX "Enforcement and administrative sanctions" (i)-(xiv)). Each breach can be penalised separately, and unpaid penalties are a civil debt ([DR] Part XI).
- **P-AML** = up to KES 5m for a company, KES 1m for a natural person, plus KES 100,000 a day ([Act] s.51B(2)).
- **REV** = a listed ground for suspension or revocation ([Act] s.33S(7); [DR] Part IV "Suspension or revocation" (1)(a)-(r)).

## Summary

- **Two texts set the duty.**
  - The parent law is the CBK Act, Part VIC (ss.33R-33U) and s.57. The Business Laws (Amendment) Act No. 20 of 2024 widened it from "digital" lenders to all "non-deposit taking credit business" not regulated under another law ([Act] s.2, s.33R; Kenya Law revision dated 27 Dec 2024).
  - The rules are LN 191 of 2026, gazetted 29 Sep 2026, which revoke the 2022 DCP Regulations ([KL191]; [TI]). I could only read the 2025 draft in full ([DR]).
- **Who is obliged.** Any company lending its own funds to the public, digitally or not, with or without interest. This includes asset finance, BNPL (but not hire purchase under the Hire-Purchase Act), PAYG and P2P ([Act] s.2).
  - Out of scope: banks, microfinance banks, SACCOs, KPOSB, credit "merely incidental" to selling goods or services, and credit guarantee firms, which have their own Part VID regime ([Act] s.2, ss.33V-33Y; [DR] reg 2; [TI]).
  - Foreign lenders, DFIs, wholesale and intra-group lenders are reportedly **not** exempted in the final text ([BW], snippet).
  - The applicant must be a company. A sole-trader moneylender must incorporate first ([DR] Part II).
- **Two tiers.**
  - With initial capital of KES 20m or more (draft: "more than"), a firm needs a **licence**. A smaller firm needs a **registration** ([TI]; [DR] Parts II-III).
  - A registered firm must apply for a licence once its capital, borrowings **or loan book** exceed KES 20m ([DR] Part III "Conversion"). Understating capital to stay registered is penalised ([DR] Part III (4)-(5)).
- **Deadline.** Lenders already operating must apply within six months of publication, which is about 29 Mar 2027. They may keep lending while CBK decides ([Act] s.59(2); [DR] Part XI "Transition"; [TI]).
  - The 281 DCPs licensed under the 2022 rules are "deemed licensed" (reg 96). They must still meet every new conduct duty and pay the new fee ([TI]; [TT]).
- **Money.**
  - Application fee: KES 100,000.
  - Annual fee: KES 500,000 for a licence, KES 250,000 for a registration, due by 31 Dec (regs 7(5), 10(5)).
  - Late payment within 3 months costs double, or a KES 1m penalty according to another report. After that CBK may revoke ([TI]; [TT]; [BD]; [DR] Second Schedule).
- **The duty is mostly paperwork and records, not one return.**
  - Application stage: at least **six written policies** (credit, code of conduct, consumer protection, AML/CFT, data protection, corporate governance), plus a pricing model. Also needed: Forms NDTCP 1-3, sworn source-of-funds declarations, an ODPC certificate, and police, KRA and CRB certificates for each director, officer and 10% shareholder ([DR] Part II (2)(a)-(ee)).
  - Ongoing: prior CBK approval of every new product and every product or interest-rate change, with 30 days' customer notice (regs 26, 55). 30-day prior notices for channels, agents, outsourcing, branches, and board, CEO, senior-officer and shareholder changes. A complaints register on a 7-day, 48-hour and 30-day clock. An agent register with annual renewal. CRB pre-listing notices. Loan-agreement content rules. Debt-collection bans. An NPL interest cap ([DR] Parts IV-V; [TI]).
  - Reporting: an annual compliance certification return by 31 Dec. Periodic returns on complaints, loans, NPLs, borrowings, shareholders, bank and paybill accounts, agents and outsourcing "as the Bank may specify" ([DR] Part VII (6)-(7)). These go through CBK's BSA system ([CMA], search summary). **Frequencies are not in the rules.**
- **New in the final text** (press only): reg 60 on AI and automated credit decisions, a ban on foreign-currency loans, a fixed repayment-allocation order, and a unique mobile-money account number for each lender ([TT]; [BW]; [BD]).
- **Three other regimes always ride along.**
  - **POCAMLA AML/CFT.** NDTCPs are "financial institutions" because they lend. Duties: goAML registration, an MLRO notified to FRC within 14 days, a risk assessment, cash reports at USD 15,000 or more, STRs, 7-year records, and an annual compliance report to FRC ([POC] s.2, 44-47A; [ACR]).
  - **ODPC registration.** "Provision of financial services" must register regardless of size, and the certificate lasts 24 months ([ODPC] reg 9, 13, Third Schedule item 8).
  - **Consumer Protection Act Part VII.** Disclosure statements; undisclosed costs are not payable ([CPA] ss.56, 65-67).
- **Enforcement.** No CBK monetary penalty on a licensed lender has been published since 2022 ([ITE]). The real stick so far has come from elsewhere:
  - Licensing delays and the 2023 Google Play purge of about 500 loan apps ([ITE]; [TechCrunch](https://techcrunch.com/2023/03/24/google-removes-hundreds-of-kenya-focused-loan-apps-from-play-store/amp)).
  - Courts refusing to enforce unlicensed lenders' claims ([ITE]).
  - ODPC fines of KES 250k to 5m, and a CAK fine of about KES 10.85m ([ITE]).
  - The new fee schedule and KES 1m late penalty are the first hard, automatic CBK sanction.
- **No regional differences** in the credit rules. They are national. Only county business permits vary (unverified).
- **Product.** 73 testable requirements follow, each traced to a legal basis. The core is:
  - a scope and tier checker;
  - an application-dossier builder with per-person document tracking;
  - a policy generator with coverage checks against the draft's minimum-content lists;
  - registers (complaints with clocks, product and pricing approvals, agents, outsourcing, people changes, CRB pre-listing notices);
  - a compliance calendar (31 Dec fee and certification, agent renewals, ODPC renewal, FRC annual report);
  - evidence packs for CBK inspections.

  Every rule that rests on the draft must be switchable once LN 191 is read.

## Who is obliged

**1. The activity test.** "Non-deposit taking credit business" means ([Act] s.2):
- (a) loans or credit facilities to the public or a section of it, "whether or not digitally", with or without interest, secured or unsecured;
- (b) asset financing, directly or through a third-party financier;
- (c) BNPL "as determined by the Bank", excluding hire purchase governed by the Hire-Purchase Act;
- (d) credit guarantees;
- (e) PAYG "as maybe determined by the Bank";
- (f) P2P lending under CMA-regulated collective investment schemes;
- (g) anything else CBK determines.

There is a proviso: credit "merely incidental to the sale of goods and provision of services" by the seller is not covered. An NDTCP is a person licensed to lend "using own funds and assets" ([Act] s.2). Lending without a licence, or (under the Regulations) a registration, is an offence. It is punishable by up to 3 years in prison or a KES 5m fine ([Act] s.33S(1), (10); [DR] Part II "Prohibition").

**2. Exclusions** ([DR] reg 2(2); [TI]):
- banks under the Banking Act;
- microfinance institutions under the Microfinance Act;
- SACCOs under the Sacco Societies Act;
- KPOSB;
- credit "merely incidental" to a sale of goods or services;
- any entity whose credit business is regulated under another written law;
- "any other entity approved by the Bank" (draft (g); whether this survived is unverified);
- credit guarantee companies, which are excluded according to Tech-ish ([TI]) and have their own registration and licence under Part VID with a 5-year transition ([Act] ss.33V-33Y, 59(3)).

**3. Not excluded (reported).** Bowmans says the final text does not exempt foreign lenders, development finance institutions, wholesale facilities or intra-group loans ([BW], search snippet only; unverified against the text). If that is right, a foreign fund lending to a Kenyan MFI, or a parent lending to a subsidiary, may need at least a registration. That would be a strange result and should be checked.

**4. Legal form.** The applicant must hold a certificate of incorporation under the Companies Act ([DR] Part II (2)(a); [Act] s.33S(3)(a)). Individuals and partnerships ("shylocks", chama-type lenders run by individuals) must incorporate before applying. A new entrant must first get CBK name approval. It then has 3 months to incorporate and 6 months from incorporation to apply ([DR] "Name approval" (2)-(9)). Existing incorporated lenders skip the name stage ([PROC] Stage 1 note).

**5. Licence or registration.**

| Point | Licence | Registration | Basis |
|---|---|---|---|
| Entry test | Initial capital "more than" KES 20m (draft); "at least KES 20 million" (final, per press) | Initial capital "less than" KES 20m | [DR] Part II (1), Part III (1); [TI] |
| Must convert to licence when | n/a | capital, borrowings **or** loan book exceeds KES 20m; or CBK directs after non-disclosure or rapid expansion | [DR] Part III "Conversion" (1)-(2) |
| Application form | CBK NDTCP 1 + NDTCP 2 and 3 | Same forms | [DR] First Schedule |
| Policies at application | Full **copies** of six policies (credit, code of conduct, consumer protection, AML/CFT, data protection, corporate governance) | Full credit policy and code of conduct; **briefs** on AML/CFT, data protection, governance, consumer protection | [DR] Part II (2)(p)-(u); Part III (3)(i)-(l), (o)-(p) |
| Audited accounts | Last 3 years | Not listed | [DR] Part II (2)(dd) |
| Decision time | 60 days from a complete application | Not stated | [Act] s.33S(5); [DR] Part II "Issuance" (2) |
| Annual fee | KES 500,000 | KES 250,000 | [DR] Second Schedule; [TI]; [BD] |
| Fit-and-proper certification of people | Applies | Applies only "as the Bank may specify on a case by case basis" | [DR] Part IV "Fit and proper" (9) |
| Amalgamation and share-transfer approvals | Apply | CBK may exempt by notice | [DR] Part IV "Amalgamations" (9) |
| Conversion paperwork | n/a | Capital evidence, borrowings list (lender, date, principal, rate, balance), loan book, six policies, pricing, a **complaints report** | [DR] Part III "Conversion" (3)(a)-(l) |
| Gazettement | Within 30 days of grant | Same; conversion gazetted within 30 days | [DR] Part III (5), Part IV "Publication" |

Note on the threshold: the draft leaves a gap at exactly KES 20m and the final wording is reported as "at least". The product should treat 20,000,000 as a licence case until the text is read. Lenders asked for KES 50m. Press reports say the final rule kept KES 20m ([Business Daily, Sh50m lobbying](https://www.businessdailyafrica.com/bd/economy/why-digital-lenders-seek-a-higher-sh50m-threshold-for-licensing-5162740); [TI]).

**6. Transition groups** ([DR] Part XI "Transition" (1)-(6); [Act] s.59(2); [TI]):
- **Already licensed DCPs (281 at 30 Sep 2026).** Deemed licensed under reg 96. They are not affected by the registration requirements, but all new operating rules apply. The new KES 500k fee likely applies from the 31 Dec 2026 payment ([TI], the author's reading).
- **Pending applicants.** Their applications are processed under Part II or III. CBK has received more than 900 DCP applications since March 2022 ([TechTrendsKE, 30 Sep 2026](https://techtrendske.co.ke/2026/09/30/cbk-licenses-29-more-digital-lenders/), via search summary).
- **Lenders already operating but not applied.** They must apply within 6 months of publication, by about 29 Mar 2027, and may operate until CBK decides.
- **New entrants.** Name approval first, then application.

**7. Scale.**
- 195 DCPs were licensed at 31 Dec 2025, with KES 110.1bn gross outstanding loans and 6.74m loan accounts ([BSAR] s.3.24).
- 281 were licensed by 30 Sep 2026 ([TI]).
- No official count exists of offline lenders (logbook, asset finance, BNPL, P2P) now pulled in. This is a gap for the market section.

**8. Neighbouring regimes the scope checker must route away:**
- non-deposit-taking microfinance businesses under the Microfinance Act (their 6-month window closed 27 Jun 2025 ([Spencer West](https://www.spencer-west.com/news/a-refresher-on-the-licensing-and-ongoing-compliance-requirements-for-non-deposit-taking-lenders-in-kenya/)));
- the Microfinance Bill 2026 (see Upcoming changes);
- hire purchase under the Hire-Purchase Act;
- credit guarantee business ([Act] Part VID);
- SACCOs.

## Duty-by-duty table

"Freq." = frequency or deadline. "Inspector asks for" is my reading of what a CBK examiner would request. It is based on the draft's record and reporting clauses and on [BSAR] (BSD does onsite checks of "compliance with statutory and prudential requirements" and offsite checks "through the receipt and analysis of returns received periodically"). CBK publishes no NDTCP inspection checklist that I could find (unverified).

### A. Entry: licence or registration

| # | Duty | Legal basis | What must exist or be done | Freq. | Inspector asks for | Penalty |
|---|---|---|---|---|---|---|
| 1 | Hold a licence or registration before lending or "holding out" | [Act] s.33S(1); [DR] Part II "Prohibition" | Licence or certificate from CBK. Existing lenders: an application filed by about 29 Mar 2027 | Once; licence valid until suspended or revoked ([Act] s.33S(6)) | Licence or certificate; proof of application date during transition | Offence: up to 3 years or KES 5m ([Act] s.33S(10)). Courts have refused to enforce unlicensed lenders' loans ([ITE]) |
| 2 | Pick the correct tier and keep testing it | [DR] Part II (1), Part III (1), (4)-(5), "Conversion" (1)-(2); [TI] | Records of initial capital; monthly tracking of capital, borrowings and loan book against KES 20m; a licence application once any one exceeds it | Continuous | Capital evidence; borrowings schedule; loan-book totals | Understating capital: s.33S(10) penalty and revocation ([DR] Part III (5)) |
| 3 | Name approval (new entrants) | [DR] "Name approval" (2)-(9); [PROC] Stage 1 | 3 names reserved with BRS; CBK approval via the GDI portal; KIPI letter of no objection; incorporate within 3 months; apply within 6 months | Once | Approval letter; KIPI letter | Approval lapses ([DR] (9)) |
| 4 | Licence application dossier | [DR] Part II (2)(a)-(ee); [Act] s.33S(3); [PROC] Stage 2 | Form NDTCP 1; certified incorporation certificate and M&A (also for corporate 10% shareholders); registered address; **ODPC s.19 certificate**; **statement on Consumer Protection Act Part VII**; capital evidence and source; ICT system description (CBK practice: plus "independent assurance on the systems" [PROC]); channels; product T&Cs; channel service agreement; consumer protection and complaints mechanism; data protection measures; credit business description (loan sizes, rate range, classification, NPL period, funding); **six policies**; sworn source-of-funds declaration; fee; NDTCP 2/3 for directors, CEO, senior officers, 10% shareholders; **pricing parameters**; police good-conduct certificate, KRA tax compliance certificate and CRB report per person (CRB report no older than 3 months, [PROC]); foreign-investor documents; officers' sworn declarations; 3 years' audited accounts | Once (and on conversion) | The full dossier | Incomplete: CBK may discontinue after 3 months' silence plus a 14-day show-cause notice ([DR] Part II "Discontinuation") |
| 5 | Registration application dossier | [DR] Part III (2)-(3)(a)-(t) | As row 4, but with briefs instead of four of the policies and no audited accounts (see the tier table above) | Once | Same | Same |
| 6 | Fit-and-proper forms and person documents | [DR] Forms NDTCP 2 and 3, Third Schedule; [PROC] | For each person: identity, PIN, education, 5-year bank list, employment history, shareholdings, directorships, 10 default and conviction questions, 3 referees known 5+ years; sworn before a Commissioner for Oaths or Magistrate. Shareholders: source of funds plus a sworn "not proceeds of crime" statement. CBK practice adds CVs, certified IDs and an affidavit of no similar role in another DCP ([PROC]) | At application; again for every new director, CEO, senior officer or 10% shareholder | Signed forms; certificates; dates of issue | Unfit person: disqualification up to 3 years (draft Part IV) or 5 years (Part IX); forced share disposal |
| 7 | ODPC registration as data controller (and processor if relevant) | [Act] s.33S(3)(d); Data Protection Act s.19 (not read); [ODPC] reg 5, 9, 11, 13(4), 17, 18, Second and Third Schedules | Online registration. Financial services must register even below KES 5m turnover and 10 staff (Third Schedule item 8). Fee KES 4,000 / 16,000 / 40,000 by size; renewal KES 2,000 / 9,000 / 25,000 | Certificate valid 24 months; renew (Form PR 2) | Valid certificate | Offence to process without registration or after expiry ([ODPC] reg 18; penalty under DPA s.73, not read). Also REV ([Act] s.33S(7)(b)) |
| 8 | Data-submission (API) test before licence | [PROC] Stage 3, steps 7-9 | Show regulatory-reporting capability "using Application Programming Interfaces (APIs) with guidance from CBK" before the licence is issued | Once | Test passed | No licence until passed |
| 9 | Pay the application fee and first annual fee | [DR] Second Schedule; [TI]; [PROC] step 8 | KES 100,000 application fee (not refundable). Annual fee on grant: KES 500,000 or 250,000; not pro-rated (2022 practice, [PROC]) | Once, then yearly | Payment proof | No licence |

### B. Recurring duties

| # | Duty | Legal basis | What must exist or be done | Freq. | Inspector asks for | Penalty |
|---|---|---|---|---|---|---|
| 10 | Annual fee | LN 191 regs 7(5), 10(5) ([TI]); [DR] Part II "Issuance" (5)-(6), Part III "Issuance" (3) | KES 500,000 (licence) or KES 250,000 (registration) | By **31 Dec** each year. Draft licence wording said "three months before December", which suggests 30 Sep; the final is reported as 31 Dec | Receipt | Paid within 3 months late: double fee ([TI]), or KES 1m penalty ([TT], [BD]); then possible revocation. Non-payment is REV |
| 11 | Annual compliance certification return | [DR] Part VII (7); same duty in [DCP22] reg 6(7) | A return "certifying its compliance with the Act and these Regulations in such manner as the Bank may specify" | By **31 Dec** each year | The filed return and the evidence behind each certification | P-CBK |
| 12 | Periodic returns | [DR] Part VII (1), (5), (6)(a)-(j); [Act] s.43; [CMA] | Reports on: complaints; number of loans; audited annual accounts; shareholders, directors, senior officers; borrowings (date, lender, amount, rate, balance); bank name, accounts and paybill numbers; number of agents; outsourced services; NPLs; anything else CBK asks for. Law-firm summary of BSA returns: outstanding credit return, quarterly financial statements, audited annual accounts, consumer protection reports, AML/CFT reports | "Within such time as the Bank may specify". Not in the rules. CBK publishes **monthly** DCP loan data ([BSAR] Chart 15, Jul-Dec 2025), so a monthly loan return is likely (unverified) | Return history; data reconciling to the loan system | P-CBK |
| 13 | Agent approval renewal | [DR] Part IV "Agents" (6) | Apply to CBK to renew approval of all agents with the per-agent renewal fee | "At least two months before the end of each year", i.e. by about 31 Oct | Renewal application and receipt | P-CBK. CBK may ban an agent ([DR] Part IX (ix)). The draft schedule lists no agent fee amount (gap) |
| 14 | Consumer protection policy review | [DR] Part V "Consumer Protection Policies" (k) | Policy states its review frequency, "at a minimum … annually" | Yearly | Board minutes approving the review | P-CBK |
| 15 | Update customer personal and contact records | [DR] Part V "Reliability" (a) | Refresh records "from time to time" | At least every **2 years** | Last-update dates per customer | P-CBK |
| 16 | Staff screening | [DR] Part V "Oversight of staff" (a)-(b); [ACR] reg 12(7)(e) | Screen before hiring and periodically | Pre-hire plus periodic | Screening records | P-CBK; P-AML |
| 17 | ODPC renewal | [ODPC] reg 9, 11 | Renewal Form PR 2 and fee | Every 24 months | Certificate | Offence ([ODPC] reg 18(c)) |
| 18 | FRC annual compliance report | POCAML Regulations 2023 reg 44; [ACR] | Self-assessment across 38 regulation headings (over 100 sub-items), each marked C/D/N with reasons; signed, stamped PDF plus Word file named "ACR/<Year>/<Institution>", sent through the goAML Message Board | Yearly. Deadline 31 Jan per a compliance firm ([FNJ](https://fnjassociates.co.ke/?p=2097)) (unverified) | Filed ACR | P-AML |
| 19 | AML/CFT/PF risk assessment | POCAML Regs reg 7 (per [ACR]) | Documented assessment; update mechanism "at least once every two years" and on new products or markets; available to FRC and CBK | At least every 2 years, plus on change | Document and update log | P-AML |
| 20 | Interest-rate disclosure statements under the CPA | [CPA] ss.66-67 | Fixed credit with a floating rate: a disclosure statement at least every 12 months, and within 30 days after a rate increase. Open credit: a statement of account at least monthly | Yearly or monthly | Statement logs | Borrower need not pay undisclosed costs ([CPA] s.56) |

### C. Event-driven approvals and notices to CBK (and FRC)

| # | Duty | Legal basis | What must exist or be done | Freq. / deadline | Inspector asks for | Penalty |
|---|---|---|---|---|---|---|
| 21 | Prior approval of a new product, or of any change to product features **including interest rates** | LN 191 regs 26, 55 ([TI]); [DR] Part IV "Products" (1); [BD] | Written application with justification; CBK written approval before launch | Before every launch or change | Approval letters matched to live products and rates | P-CBK; "unreasonable or unjustifiable charges" is REV ([Act] s.33S(7)(i)) |
| 22 | Prior approval of a change to pricing parameters | [DR] Part V "Variation of pricing parameters" (1); [Act] s.33R(1)(c) | Approval before any change. CBK may itself change a lender's parameters with reasons ([DR] Part V "Pricing Parameters" (3)) | Before change | Approved pricing model vs pricing in the system | P-CBK |
| 23 | Customer notice of product, term or charge changes | LN 191 reg 55 ([TI]); [DR] Part IV "Products" (2), Part V "Loan agreement" (6), "Variation" (2)-(3); Code "Market conduct" (f) | At least **30 days** before. Increases in charges or credit limits also need the customer's **acceptance** | Each change | Notices sent, with dates and acceptances | P-CBK |
| 24 | New delivery channel | [DR] Part IV "Channel delivery" (1) | Notify CBK **30 days** before roll-out | Each channel | Notice copy | P-CBK; CBK can ban a channel |
| 25 | Paybill numbers, apps, bank accounts | [DR] Part IV "Channel delivery" (2); [BD] (final: a unique mobile-money account number for disbursements and repayments, plus disclosure of bank names and accounts) | Notify CBK 30 days before use | Each new number, app or account | Notice copies; list matches reality | P-CBK |
| 26 | Appoint an agent | [DR] Part IV "Agents" (1)-(5), (7) | Written contract with 6 required clause types; suitability assessment; notify CBK **30 days** before with name, ID, physical and postal address, phone, e-mail, location, and fee; keep an **agent register** at all times | Each agent | Contracts, assessments, register | P-CBK; lender liable for agents' acts |
| 27 | Outsourcing | [DR] Part IV "Outsourcing" (1)-(5) | Never outsource: loan decisions, management and control, board decisions, compliance determination, portfolio management. Notify CBK **30 days** before, with provider identity, owners' and officers' background, and services. Contract must give CBK access to premises, books, systems and staff | Each arrangement | Notices, contracts with the CBK access clause | P-CBK |
| 28 | Changes to board, CEO, senior officers, significant shareholders | [DR] Part IV "Fit and proper" (1)-(3) | Notify CBK at least **30 days** before. People need CBK fit-and-proper certification (licensed tier); a conditional CEO or senior-officer appointment is allowed pending certification | Each change | Notices; certifications | P-CBK; disqualification |
| 29 | Share transfers and acquisitions | [DR] Part IV "Amalgamations" (5)-(7) | Transfer of 10% or more: prior CBK approval. Below 10%: notify within the period CBK sets. An acquirer of 10% or more must be certified fit and proper | Each transfer | Share register vs approvals | P-CBK |
| 30 | Capital injection | [DR] Part VI "Sources of funds" (2) | Prior notice: investor, amount, post-injection shareholding %, UBO, source of funds | Before each injection | Notices | P-CBK |
| 31 | Third-party investment or funding agreements | [DR] Part IV "Amalgamations" (4) | Notify CBK **30 days** before entering one | Each | Notices | P-CBK |
| 32 | Sale, amalgamation or partial transfer of the business | [DR] Part IV "Amalgamations" (1)-(3) | Prior written approval (ordinary-course disposals excepted) | Each | Approval | P-CBK |
| 33 | Branch or place of business opened, moved or closed | [DR] Part IV "Place of business" (1)-(2) | At least one registered physical office in Kenya. Notify **30 days** before any opening, relocation or closure | Each | Notices | P-CBK |
| 34 | Change of IT system | [DR] Part IV "Information and technology systems" (2) | Notify CBK (no lead time in the draft) | Each | Notice | P-CBK |
| 35 | Voluntary closure | [DR] Part XI "Voluntary liquidation" | Apply for CBK approval; must be solvent | Once | Approval | P-CBK |
| 36 | MLRO appointment or removal | POCAML Regs reg 12(3) per [ACR] | Notify FRC **and** CBK within **14 days**. The MLRO must be management level, and not the internal auditor or CEO (unless a sole proprietor) | Each change | Notices | P-AML |
| 37 | FRC registration and changes | [POC] s.47A(1)-(5); [ACR] reg 5 | Register on goAML. Notify changes in writing within **90 days** | Once, plus changes | goAML registration | Offence ([POC] s.47A(5)) |
| 38 | Respond to CBK directions and show-cause notices | [DR] Part VII "Powers … to advise and direct" (2)-(3); Part IX "Notice to Show Cause" (2)(f); Part X "Review" (1) | Comply within the set period with evidence. Respond to a show-cause notice within the stated period (at least 14 days). A review request must be made within **14 days** of a decision | Each | Correspondence file | REV for failing to follow directives ([Act] s.33S(7)(h)) |

### D. Documents that must exist (policies and frameworks)

| # | Document | Legal basis | Minimum content | Review | Inspector asks for | Penalty |
|---|---|---|---|---|---|---|
| 39 | Credit policy | [DR] Part IV "Credit policy" (1)-(2), "Provision of credit" (2), Part V "Non-performing loans" (2); [BD] (final: "aligned to the size" of the lender) | 15 items: (a) procedures and documentation; (b) eligibility; (c) loan types, tenure, payment frequency; (d) collateral; (e) per-borrower and per-product limits; (f) pricing (interest, fees, charges); (g) approval process; (h) ability-to-repay test; (i) guarantee requirements; (j) credit quality monitoring; (k) grace period; (l) recovery and follow-up; (m) restructuring criteria; (n) processing time; (o) write-off approval. Plus the default period after which a loan is NPL | Not fixed | Policy, board approval, evidence it is followed | P-CBK |
| 40 | Consumer protection policy and procedures | [DR] Part V "Consumer Protection Policies" (a)-(l) | Complaint channels and how customers learn of them; how to complain, timeframes, information to complainants, options if unresolved; complaints register; step-by-step handling plan; remedies; annual review; options if unresolved | At least yearly | Policy, review minutes | P-CBK |
| 41 | Code of conduct (the lender's own) plus compliance with the statutory Code (Part VIII) | [DR] Part II (2)(q), Part VIII (all); [Act] s.33R(1)(e) | Fairness, transparency, accountability, reliability; skill and care; integrity; conflicts of interest; customer communication; protection of customer assets; financial resources (no "excessive lending funded by debt"); internal affairs; the 21 market-conduct duties (a)-(v); board "tone" and "appropriate records of any arrangements made to comply with the Code" | Ongoing | Code; records of compliance arrangements; training logs | Code breaches enforceable by administrative sanctions ([DR] Part VIII last para) |
| 42 | AML/CFT policy and procedures | [DR] Part II (2)(s), Part VI; [POC] ss.44-47; [ACR] regs 7-12, 14-26, 40, 42 | Risk assessment; new-technology assessment; policies and internal controls (11 items, incl. MLRO and ongoing training); CDD for natural and legal persons, BO, PEPs; EDD and SDD; sanctions-list screening; cash reports; STR procedure; records | Risk assessment at least every 2 years | Policy, CDD files, training records, STR log | P-AML; REV ([DR] Part IV (1)(h)) |
| 43 | Data protection policy and procedures | [DR] Part II (2)(t), Part V "Data Protection Policies"; [Act] s.33S(7)(b) | Compliance with the DPA, ODPC regulations and guidance notes | Not fixed | Policy; ODPC certificate | REV |
| 44 | Corporate governance policy | [DR] Part II (2)(u), Part IV "Corporate governance" (1)-(2) | Board with effective oversight; organisational structure; risk management and compliance frameworks; board and management separated; board kept informed | Not fixed | Board minutes, charter, org chart | P-CBK |
| 45 | Risk management framework | [DR] Part IV "Risk management" (1)-(2) | Proportionate; covers credit, operational, compliance, reputation, IT, liquidity and other relevant risks | Not fixed | Framework; risk register | P-CBK |
| 46 | IT policy, security and business continuity | [DR] Part IV "Business continuity" (1)-(2), "Information and technology systems" (1), (3) | Backups of financial, customer and transaction records and reports to CBK; a continuity framework; cyber and fraud protection. IT policy "where applicable" with 11 items: encryption, information security, application security, network access, password security for apps and web, audit-log management, application auditing and monitoring, change control, backup, disaster recovery, interoperability | Not fixed | Policy; backup and DR test evidence | P-CBK |
| 47 | Pricing model with pricing parameters | [DR] Part II (2)(z), Part V "Pricing Parameters" (1)-(3) | Components (cost of funds, cost of capital, risk premium, other charges); costs justified; risk-based pricing per customer; CRB scores used; all-inclusive pricing except third-party costs; full APR disclosure | Changes need approval (row 22) | Model; CBK-approved version | P-CBK |
| 48 | Key information documents (KIDs) | [DR] Part V "Key information document" | A summary of benefits, risks and T&Cs for each product or service | Kept current | KIDs per product | P-CBK |
| 49 | AI and automated decision governance | LN 191 reg 60 ([TT]) | Explainable automated decisions; tell customers when they deal with an AI system; human oversight and review; manage bias, robustness, accuracy, transparency, privacy and security | Ongoing | Model inventory, oversight logs, customer notices (my inference) | P-CBK |

### E. Conduct duties on each loan and each customer

| # | Duty | Legal basis | What must exist or be done | Timing | Inspector asks for | Penalty |
|---|---|---|---|---|---|---|
| 50 | Loan agreement content and documents at signing | LN 191 reg 54 ([TI]); [DR] Part V "Loan agreement" (1)-(4), (6); [Act] s.33S(4); [CPA] s.65 | Give the signed agreement, repayment schedule, total cost of credit (TCC), and T&Cs. Agreement must state: amount; charges and when they apply; rate and whether reducing balance; other charges; due dates and calculation; TCC; periodic rate **and APR**; free early repayment; when NPL data may go to a CRB; complaint channels. In a language the customer understands. CPA: initial disclosure statement at or before signing | At signing | Sample of agreements | Undisclosed charges not recoverable ([DR] Part IV "Credit collection" (2); [CPA] s.56); refund orders |
| 51 | Credit appraisal and rejection reasons | [DR] Part IV "Credit appraisal" (1)-(2) | Assess under the credit policy and ability to repay; tell rejected applicants "immediately" with reasons | Each application | Decision logs with reasons | P-CBK |
| 52 | Receipts and loan statements | [DR] Part V "Access to transaction and credit information" (1)-(3), "Transparency" (2) | A receipt for every transaction; free statements at an interval agreed with the customer (principal, interest charged, paid and owing, rate, charges); self-service access; full statements on request; fix errors promptly; keep guarantors informed by periodic statements | Per transaction or agreed interval | Statement logs | P-CBK |
| 53 | Repayment handling | [DR] Part V "Loan repayment" (1)-(4); final "mandatory order" ([BW]) | Credit payments on the day received. Allocate to interest, then fees and charges, then principal (draft order; final order unverified). Free early repayment, with no interest for the remaining term | Each payment | Ledger tests | P-CBK |
| 54 | NPL recovery cap (in duplum) | [DR] Part IV "Limit on interest recoverable" (1)-(5); [TI]; [BD] | Recoverable = principal when the loan became NPL + contractual interest no greater than that principal + reasonable recovery costs. Resets if the loan recovers and defaults again; court-order interest excepted | Each NPL | NPL ledger | Refund orders ([DR] Part IV "Credit collection" (5)); P-CBK |
| 55 | Debt collection conduct | [DR] Part IV "Credit collection" (1)(a)-(k), (3)-(4); Part V "Fairness" (3)-(4), (7), (11) | 11 banned practices, incl. threats, shaming, contacting the phone book, posting data online, calls at odd hours, violent repossession, taking essential effects. Recovery costs must be necessary and itemised. Name an outsourced collector to the customer in advance. Go to the guarantor only after non-judicial recovery is exhausted, with 14 days' notice of default. Land Act and Movable Property Security Rights Act rules for security | Each collection | Call logs, scripts, notices | P-CBK; ODPC and CAK fines (see enforcement) |
| 56 | Guarantor consent | [DR] Part V "Fairness" (5)-(6) | Confirm the guarantor's consent before appointment; no liability without consent | Each guarantor | Consent records | P-CBK; ODPC fined Whitepath KES 250k for this ([ITE]) |
| 57 | CRB data sharing and listing | [Act] s.33U; [DR] Part IV "Exchange of credit information" (1)-(9), "Restrictions" (1)-(3) | Share positive **and** negative data. No negative listing for KES 1,000 or less. Notice at least **30 days** before a negative listing (contract may shorten this, but to no less than 7 days for loans with repayment intervals under 30 days). Tell the customer within 30 days after listing. Data must be timely, complete and accurate; fix errors promptly | Per listing. Submission at least monthly ([ITE], Creditinfo claim; unverified) | Pre-listing notices; CRB submission logs | P-CBK |
| 58 | Complaints handling | [Act] s.33S(7)(g); [DR] Part V "Customer complaints resolution" (1)-(6), "Consumer Protection Policies" (c)-(h); Code "Market conduct" (g), (v); Part V "Customer obligations" (2) | Dedicated channel, publicised. Deal immediately, or **acknowledge within 7 days**. Oral complaint unresolved after **48 hours**: written confirmation that it is pending. **Resolve within 30 days**. Register fields: date, complainant name, address and phone, nature, subject persons, investigation steps, findings, date and manner of reply, outcome, reasons for pending items, time taken. Tell the customer of the right to go to CBK | Each complaint; report to CBK (row 12) | The register; ageing; the CBK complaints return | REV for failing to "conclusively address" a complaint ([Act] s.33S(7)(g)) |
| 59 | Advertising and disclosure | [DR] Part V "Marketing and Promotions", "False advertisements", "Transparency" (1)(a)-(j), "Use of different business or trade name" | Printed ads that mention a rate must show TCC, per annum or per month, fixed or variable. Show TCC prominently in premises and on the website. State "regulated by the Central Bank of Kenya" everywhere. Show the company name wherever a trade name is used. Plain language, legible font. Give an oral explanation if the customer does not understand English or Swahili, signed where needed | Every publication | Ad archive; web pages | P-CBK |
| 60 | Opt-out and marketing consent | [DR] Part IV "Channel delivery" (3); Code "Market conduct" (m); [TT] | Apps must allow unsubscribing and marketing opt-out, including after full repayment | Ongoing | App screens; opt-out logs | P-CBK |
| 61 | Prohibited activities | [DR] Part IV "Prohibited activities" (1)(a)-(g); [BW] | No deposits; no cash as security; no registration or membership fees from borrowers; no FX business; no payment services; no trust business. Final: no loans disbursed in foreign currency | Ongoing | Product list; fee schedule | P-CBK; REV |
| 62 | Fair treatment | [DR] Part V "Fairness" (1)-(2), (8)-(10) | No unfair or aggressive practices, bribes, discrimination on 18 grounds, mis-selling, or reckless lending. No tying of products. Explain the freedom not to sign. Notify loan-status changes by several channels | Ongoing | Training; sales scripts | P-CBK |
| 63 | Confidentiality and data minimisation | [DR] Part IV "Confidentiality" (1)-(4), Part V "Access and collection of customer information" | Collect only data needed for appraisal, approval, disbursement and collection. Share only with consent or by law. Bind staff and agents, including after they leave | Ongoing | Data map; consent records | P-CBK; ODPC fines |
| 64 | Customer due diligence | [DR] Part VI "Customer identity" (1)-(3); [POC] s.45; [ACR] regs 14-26 | Verify identity with independent documents; check non-face-to-face customers; prevent impersonation; PEP measures; sanctions screening | Onboarding, then ongoing | CDD files | P-AML |
| 65 | Suspicious and cash transaction reports | [POC] s.44(2)-(7); [ACR] reg 40 | STR "immediately and, in any event, within seven days" (Rev. 2022 text; FRC now states two days ([FRC compliance page](https://www.frc.go.ke/?page_id=25), via search summary)). Cash of **USD 15,000** or more reported electronically "by Friday in the week in which the transaction occurred" | Each event | STR and CTR logs | P-AML; POCAMLA offences |

### F. Records and retention

| # | Record | Legal basis | Retention | Inspector asks for |
|---|---|---|---|---|
| 66 | Transaction records and CDD evidence | [POC] s.46(1)-(4); [ACR] reg 42 | At least **7 years** after the transaction or the end of the relationship | Sample retrieval |
| 67 | Written findings on unusual or suspicious transactions | [POC] s.44(4)-(5) | 7 years | Files |
| 68 | Complaints register, agent register, Code compliance records, customer financial records, backups of reports to CBK | [DR] Part IV "Agents" (7), "Business continuity" (2)(a); Part V "Customer complaints" (5), "Access…" (1)(e); Part VIII "Compliance with the Code" (2)(b) | **No period in the draft.** Use 7 years to match POCAMLA (my recommendation) | Registers |
| 69 | Make premises, systems, books and records available to CBK, including at agents and outsourced providers | [DR] Part VII "Reporting requirements, onsite inspection" (2)-(4) | Ongoing | Access on request |

## Filing channels and formats

| What | Channel | Format | Basis |
|---|---|---|---|
| Name approval (new entrants) | CBK online portal https://gdi.centralbank.go.ke/ui/nameapproval/ | Online form plus uploads: BRS reservation, shareholder IDs, 3-5 page business brief, 12 months of shareholder bank statements as proof of funds, declaration certified by an advocate or Commissioner for Oaths | [PROC] Stage 1 |
| Licence (and probably registration) application | CBK online portal https://gdi.centralbank.go.ke/ui/submitdcprequest | Create a profile with e-mail verification. Complete the online form, then **print, sign, scan and upload** it. Download NDTCP 2/3, execute and upload. Upload scanned supporting documents. **Originals go to CBK** with the fee by banker's cheque or RTGS | [PROC] Stage 2 steps 1-5. This is the DCP-era procedure; whether CBK uses the same portal for NDTCPs and registrations is (unverified) |
| Regulatory-reporting capability test | API data submission with CBK guidance, before licence issue | API (no published specification found) | [PROC] Stage 3 step 7 |
| Periodic returns | CBK **Bank Supervision Application (BSA)** portal. CBK ran online BSA user training for NDTCPs on 25 Mar 2025 | Download template (e.g. outstanding credit return), complete, upload. Template format (Excel) and frequencies are (unverified) | [CMA] (search summary); [BSAR] (BSD analyses "returns received periodically") |
| Annual compliance certification return | "in such manner as the Bank may specify" | Not specified | [DR] Part VII (7) |
| Approvals and notices (products, pricing, channels, agents, outsourcing, people, branches, IT) | Not specified in the draft. BSD processes "corporate approvals" for other licensees, including new products and new places of business ([BSAR]) | Letter or portal (unverified) | [DR] Parts IV-VI |
| Annual fee | CBK. Payment mode "as the Bank may specify" | Banker's cheque or RTGS in DCP practice | [DR] Part III (3); [PROC] step 5 |
| Reporting unlicensed lenders (public channel) | dcps@centralbank.go.ke | E-mail | [TI] |
| ODPC registration and renewal | ODPC website, electronic only | Forms DPR 1 (registration) and PR 2 (renewal) | [ODPC] reg 5, 11, 17 |
| FRC registration | goAML portal. Registration form signed by the CEO and witnessed by a Commissioner for Oaths | goAML | [POC] s.47A; FRC goAML guide ([FRC PDF](https://goaml.frc.go.ke/goAML_Prod/Images/customization/Registration%20of%20Reporting%20Entities.pdf), via search summary) |
| STRs, cash transaction reports | goAML | Electronic | [POC] s.44; [ACR] reg 40 |
| FRC annual compliance report | goAML **Message Board** | Word file plus signed and stamped PDF, both named "ACR/<Year>/<Institution>" | [ACR] instructions |
| CRB data | Each licensed CRB | CRB data specification (unverified). "At least monthly" per a CRB ([ITE]) | [DR] Part IV "Exchange of credit information" |
| App stores | Google Play "personal loan app declaration for Kenya". Google accepts only lenders listed in CBK's DCP directory. A 45-day provisional listing is available while a CBK application is pending | Online declaration plus CBK licence | [TechCrunch, Mar 2023](https://techcrunch.com/2023/03/24/google-removes-hundreds-of-kenya-focused-loan-apps-from-play-store/amp) (2023 rules; current form unverified) |
| Adjacent tax duty | KRA. Excise duty of 20% on fees charged by digital lenders, introduced by the Finance Act 2022; a 2023 proposal to extend it to interest was contested | Excise return (frequency unverified) | [Business Daily mirror](https://www.mwanaspoti.co.tz/bd/economy/digital-lenders-move-to-court-to-challenge-20pc-excise-tax-3918950); [The Star, May 2023](https://www.the-star.co.ke/news/2023-05-25-digital-lenders-oppose-the-20-excise-duty-proposal) (current scope unverified) |

**What the portals leave undone** (the software opportunity, from the law's side):
- **GDI** takes uploads. It does not tell an applicant which of the 30-plus dossier items or 6 policies are missing, whether a CRB report is stale, or whether the credit policy has all 15 required elements.
- **BSA** takes returns. It does not hold the complaints register, the agent register, product-approval history or notice timers that feed them.
- **Nothing** in CBK's systems tracks the dozen 30-day prior-notice duties, the 31 Oct agent renewal, the 31 Dec fee and certification, ODPC renewal every 24 months, or the FRC annual report.
- CBK's July 2026 statement that most stalled applications are "largely awaiting the submission of requisite documentation" shows the cost of this gap ([CBK press release, Jul 2026](https://www.centralbank.go.ke/uploads/press_releases/1035898107_Press%20Release%20-%20Licensing%20of%20Digital%20Credit%20Providers%20-%20July%202026.pdf)).

## Supervisors and enforcement evidence

**Supervisors.**
- **CBK, Bank Supervision Department (BSD).** It licenses DCPs, now NDTCPs. It runs onsite checks of "compliance with statutory and prudential requirements" and offsite surveillance "through the receipt and analysis of returns received periodically" ([BSAR] pp. 2-3). It can inspect agents and outsourced providers directly ([DR] Part VII (2)-(4)). It must consult ODPC and the Communications Authority ([Act] s.33T).
- **Financial Reporting Centre (FRC).** Kenya's FIU, under POCAMLA. CBK applies AML penalties to DCPs under [Act] s.51B. In June 2025, CBK and FRC trained 95 DCPs on the national ML/TF risk assessment guidance ([BSAR] AML section).
- **Office of the Data Protection Commissioner (ODPC).** Registration, complaints and fines. It can ask CBK to deregister lenders ([ITE]).
- **Competition Authority of Kenya (CAK).** Consumer complaints and fines under the Competition Act ([ITE]).
- **Courts.** The Small Claims Court and High Court (see below).
- **Google.** Not a regulator, but it acts as one in practice through Play Store listing.

**Evidence of enforcement and practice.**

| Date | What happened | Source |
|---|---|---|
| 2023 | Google Play requires a CBK licence for Kenyan loan apps from 31 Jan 2023. About 500 finance apps were taken down by March 2023 | [TechCrunch](https://techcrunch.com/2023/03/24/google-removes-hundreds-of-kenya-focused-loan-apps-from-play-store/amp); [ITE] |
| Apr 2023 | ODPC fines Whitepath KES 5m after about 150 complaints | [ITE] |
| Sep 2023 | ODPC fines Mulla Pride KES 2,975,000. The High Court dismissed its challenge (reported Aug 2025) | [ITE] |
| Mar 2024 | 429 of 480 DCP applications "pending documentation". The lenders' association asks CBK for guidance on what to submit | [Business Daily, Mar 2024](https://www.businessdailyafrica.com/bd/economy/digital-lenders-seek-cbk-help-to-unlock-429-licences-4551784) |
| Oct 2024 | CAK penalises Mogo KES 10,851,473 | [ITE] |
| Mar 2025 | ODPC fines Whitepath KES 250,000 for listing a guarantor without consent | [ITE] |
| Mar 2025 | Small Claims Court dismisses 139 recovery claims by digital lenders: "the court cannot dignify an illegality by presiding over such matters" | [ITE] |
| Year to Jun 2025 | CAK receives 355 complaints about digital lenders (67 a year earlier), 63% of its financial-services complaints | [ITE] |
| Feb 2026 | High Court dismisses a petition to stop four unlicensed digital lenders as premature. CBK says ceasing such lenders' operations cannot be done in a "haphazard" way | [Business Daily](https://www.businessdailyafrica.com/bd/corporate/companies/four-digital-lenders-survive-consumer-petition-on-lack-of-cbk-5371510) (via search summary) |
| 2022 to Oct 2026 | **No published CBK penalty, suspension or revocation against a licensed DCP** (gap in the public record, not proof of no action) | [ITE] |
| Jul 2026 | CBK: more than 800 applications since 2022; most outstanding ones "largely awaiting the submission of requisite documentation" | [CBK press release, Jul 2026](https://www.centralbank.go.ke/uploads/press_releases/1035898107_Press%20Release%20-%20Licensing%20of%20Digital%20Credit%20Providers%20-%20July%202026.pdf) |
| 29 Sep 2026 | LN 191: a KES 1m late-fee penalty, or a doubled fee, applies automatically. It is new compared with the draft | [TT]; [TI]; [BD] |

**Reading.**
- CBK enforces mainly through the **licensing gate**, through **document requests** and, from 2027, through **automatic fee penalties**.
- Money penalties for conduct come mostly from ODPC and CAK.
- An inspection-ready evidence pack therefore matters less in year one than a **complete application** and **no missed fixed dates**. Recurring conduct registers matter because complaints feed every regulator.
- No public CBK inspection questionnaire was found (unverified). The product should build its own checklist from the duties above.

## Regional differences

- **None in the credit rules.** The CBK Act and the Regulations apply nationally, with one regulator (CBK) and one portal ([Act] s.33R).
- **County business permits.** Each county issues a single or unified business permit for premises under its own Finance Act. Fees vary by county, size and activity. Nairobi runs it online ([Capital FM guide](https://capitalfm.africa/all-you-need-to-know-about-the-unified-business-permit-costs-requirements-and-how-to-apply/)). No lender-specific county rule was found (unverified). The product only needs a per-premises "county permit" reminder.
- **Language.** Consumer information must be in plain language. The draft assumes English or Swahili, with an oral explanation if the customer understands neither ([DR] Part V "Transparency" (1)(c)-(f)). Customer-facing templates should exist in English and Swahili. A Swahili search for coverage of the new rules found only English sources.

## Upcoming changes

| When | Change | Effect on the product | Source |
|---|---|---|---|
| Now | Final LN 191 text not yet on CBK's site; only press and law-firm summaries | Load the final text into the obligation library; diff it against the draft | [CBKLEG]; [KL191] |
| 31 Dec 2026 | First annual fee at the new rates (KES 500k / 250k), including for deemed-licensed DCPs (the author's reading) | Fee reminder and late-penalty warning in the first release | [TI] |
| ~29 Mar 2027 | Deadline for existing unlicensed lenders to apply | The application-kit sales window | [Act] s.59(2); [TI] |
| By 31 Mar 2027 | CBK publishes all licensed and registered NDTCPs (reg 65) | A public target list | [TI]; [Act] s.33S(9) |
| Expected (unverified) | CBK return templates, frequencies and guidance notes for NDTCPs. DFSAK asked for guidance in 2024 | Return workspace must be configurable | [Business Daily, Mar 2024](https://www.businessdailyafrica.com/bd/economy/digital-lenders-seek-cbk-help-to-unlock-429-licences-4551784) |
| 2026, in Parliament | **Microfinance Bill 2026** (published 10 Mar 2026). Lets the Cabinet Secretary specify and regulate "non-deposit taking business". CBK wants these clauses removed to avoid a dual regime | The scope checker may need a second route | [Eastleigh Voice](https://eastleighvoice.co.ke/business/381762/regulators-push-for-changes-to-microfinance-eadb-bills-over-oversight-gaps); [Bowmans, Microfinance Bill](https://bowmanslaw.com/insights/kenya-microfinance-bill-2026-key-implications-for-microfinance-banks/) (via search summary) |
| 2026 | CBK seeks stronger AML enforcement powers in the same Bill | More AML scrutiny | [The Standard](https://thestandard.ke/sports/amp/business/2001553419/cbk-seeks-powers-to-enforce-anti-money-laundering-compliance) (via search summary) |
| Mar 2026 draft | Joint regulators' Financial Consumer Protection Framework (non-binding) | Watch only | [ITE] |
| Since Feb 2024 | Kenya on the FATF grey list; still listed after the June 2026 plenary (secondary sources) | AML module is not optional | [Business Today](https://businesstoday.co.ke/kenya-still-on-fatf-grey); [The Star, 1 Jul 2026](https://the-star.co.ke/news/2026-07-01-kenya-intensifies-fight-against-financial-crime-to-exit-grey-list) |
| By about Dec 2029 | Credit guarantee firms must be registered and licensed under Part VID (5 years from commencement) | Separate product later, if at all | [Act] s.59(3) |

## PRODUCT REQUIREMENTS

Each requirement is testable. "Basis" gives the legal source using the keys above. "(draft)" means the duty is read from the 2025 draft and must be confirmed against LN 191. Requirement 70 makes that confirmation part of the product.

**A. Scope, tier and deadlines**

1. The system must run a scope questionnaire based on the seven activity types in the Act's definition (loans; asset finance; BNPL; credit guarantees; PAYG; P2P; other) and the exclusions (bank, microfinance bank or institution, SACCO, KPOSB, credit merely incidental to the lender's own sales, hire purchase under the Hire-Purchase Act, credit guarantee company, regulated under another law). Output: "in scope", "likely out of scope" or "get legal advice", with the reason and the legal basis shown. Test: a furniture retailer financing only its own goods gets "likely out of scope (incidental credit)". A logbook lender lending cash gets "in scope". Basis: [Act] s.2, 33V-33Y; [DR] reg 2.
2. The system must record the legal form and block the application builder for anyone who is not a company, showing an "incorporate first" task list. Test: a sole proprietor profile cannot open the dossier module. Basis: [Act] s.33S(3)(a); [DR] Part II (2)(a).
3. The tier engine must assign "licence" when initial capital is at or above a configurable threshold (default KES 20,000,000, rule "≥", switchable to ">") and "registration" otherwise. It must store the inputs, evidence files and the date. Test: 20,000,000 gives licence by default; 19,999,999 gives registration. Basis: [DR] Part II (1), Part III (1); [TI].
4. For registered firms, the system must capture capital, total borrowings and loan book at least monthly. It must raise a "conversion to licence required" alert when **any** one exceeds KES 20m, and open the conversion checklist (including the complaints report). Test: loan book 20,000,001 with capital 5m triggers the alert. Basis: [DR] Part III "Conversion" (1), (3) (draft).
5. Any change to a recorded capital figure must need a reason and an evidence upload, and must be kept in the audit trail. Test: editing capital without a reason is refused. Basis: [DR] Part III (4)-(5).
6. The system must show a transition countdown to a configurable deadline (default 29 Mar 2027) and record the application status: not started, submitted (date, reference), more information requested, granted, refused. Basis: [Act] s.59(2); [DR] Part XI "Transition"; [TI].
7. A firm in CBK's DCP directory must be able to mark itself "deemed licensed (reg 96)". The application module is then hidden and the ongoing-compliance module and new-fee reminder are switched on. Basis: [TI]; [DR] Part XI "Transition" (3), (5).
8. For new entrants, the system must run the name-approval workflow: 3 reserved names in order of preference, BRS reservation, KIPI no-objection letter, CBK approval date. It must then set deadlines of approval + 3 months to incorporate and incorporation + 6 months to apply. Test: approval on 1 Feb gives an incorporation deadline of 1 May. Basis: [DR] "Name approval" (2)-(9); [PROC] Stage 1.

**B. Application dossier**

9. The dossier checklist must list every item for the chosen tier: licence items (a)-(ee) and registration items (a)-(t). Each item has a status (missing, drafting, final, certified, uploaded) and a completeness score. Test: a registration profile does not ask for 3 years of audited accounts; a licence profile does. Basis: [DR] Part II (2), Part III (3).
10. The people register must hold directors, CEO, senior officers and shareholders. It must flag "significant shareholder" at 10% or more, direct, indirect or beneficial, and look through corporate holders to their UBOs. It must assign Form NDTCP 2 or 3 to each person. Test: 9.99% is not flagged; 10.00% is. Basis: [DR] reg 3 "significant shareholder"; First Schedule; [PROC].
11. For each person, the system must track: certificate of good conduct, KRA tax compliance certificate, CRB report, ID, KRA PIN, CV, certificates, 3 referees (unrelated and known for 5 or more years), and the date the form was sworn. It must warn when a CRB report will be older than 3 months on the planned submission date. Test: a CRB report dated 100 days before submission turns red. Basis: [DR] Part II (2)(aa), Form NDTCP 2 (5.9); [PROC].
12. The system must produce Forms NDTCP 1, 2 and 3 with every field in the First Schedule, ready to print, sign and swear. That includes the shareholding table with beneficial owners, the director and senior-officer tables, bankers, law firm and company secretary, questions 10-12, the ten fitness questions in Form 2, and the declarations. Test: a field-by-field comparison with the schedule shows no missing field. Basis: [DR] First Schedule.
13. The system must generate the sworn declarations: shareholders' source of funds and "not proceeds of crime", and officers' declarations. Each must carry a Commissioner for Oaths or advocate witness block. Basis: [DR] Part II (2)(v), (cc), Form NDTCP 3; [PROC].
14. The system must hold the ODPC certificate number and issue date, compute expiry at issue + 24 months, and show the fee band (KES 4,000 / 16,000 / 40,000). It must block "dossier ready" while no valid certificate is recorded. Test: issued 10 Jan 2025 gives expiry 10 Jan 2027 and an alert 90 days before. Basis: [Act] s.33S(3)(d); [ODPC] reg 9, 13(4), Second and Third Schedules.
15. The system must generate the "statement on compliance with Part VII of the Consumer Protection Act". It maps each product to CPA ss.53-71: initial disclosure statement (s.65), subsequent disclosure (ss.66-67), prepayment (s.62), default charges (s.61), required insurance (s.58), error correction (s.57). Test: a product with no initial disclosure statement attached produces a gap. Basis: [Act] s.33S(3)(e); [CPA] Part VII.
16. The credit-business description must capture loan-size range, interest-rate range, loan classification, NPL period and funding sources. The system must check that these match the credit policy and pricing model. Test: an NPL period of 90 days in the description and 60 in the policy raises an inconsistency. Basis: [DR] Part II (2)(o), (z); Part V "Non-performing loans" (2)-(3).
17. The system must provide templates for the ICT system description (with a slot for "independent assurance on the systems"), delivery channels, and a checklist for the channel service-provider agreement. Basis: [DR] Part II (2)(i), (j), (l); [PROC] Stage 2 (viii), (x).
18. The system must log each CBK request for information with its date. It must alert at 30, 60 and 80 days, before the 3-month discontinuation risk, and run a 14-day timer when a show-cause notice is logged. Basis: [DR] Part II "Discontinuation" (1)-(3).
19. The system must export the dossier as a zip of numbered files matching the regulation item letters, with an index PDF, ready for the CBK portal. It must also print a list of originals to deliver. Basis: [PROC] Stage 2 steps 4-5.

**C. Policy and document generator**

20. The credit-policy generator must cover all 15 elements (a)-(o) plus the NPL default period. A coverage check must fail if any element is missing and is not marked "not applicable" with a reason. Test: deleting the restructuring section fails element (m). Basis: [DR] Part IV "Credit policy" (2); Part V "Non-performing loans" (2).
21. Policy depth must follow a size setting, because the final text says the credit policy is to be "aligned to the size" of the lender. Registered firms must be able to produce **briefs** for AML/CFT, data protection, governance and consumer protection. Basis: [BD]; [DR] Part III (3)(i)-(l).
22. The consumer-protection policy must contain elements (a)-(l) and a review date no later than 12 months after approval. Test: the coverage check lists 12 green items. Basis: [DR] Part V "Consumer Protection Policies".
23. The code-of-conduct generator must cover every Part VIII heading and the 21 market-conduct duties (a)-(v), each mapped to a clause. Basis: [DR] Part VIII; [Act] s.33R(1)(e).
24. The AML/CFT policy must cover the items in the FRC compliance template: risk assessment; new technologies; policies; the 11 internal-control items; MLRO; CDD for natural and legal persons and BO; EDD and SDD; PEPs; sanctions screening; cash reports; STRs; 7-year records; training. A coverage check must run against the ACR item list. Basis: [POC] ss.44-47A; [ACR].
25. The data-protection policy must reference the Data Protection Act and ODPC registration. It must include data minimisation and a ban on using phone contacts for collection. Basis: [DR] Part IV "Credit collection" (1)(c), Part V "Access and collection of customer information", "Data Protection Policies".
26. The corporate-governance policy must cover the five elements (2)(a)-(e). Basis: [DR] Part IV "Corporate governance".
27. The risk-management framework must cover credit, operational, compliance, reputation, IT and liquidity risk and "other", with a risk register. Basis: [DR] Part IV "Risk management" (2).
28. The IT policy must contain the 11 items (a)-(k), and the BCP must name the backup scope (financial records, customer and transaction records, reports to CBK). An "applicable / not applicable" switch is needed because the draft says "where applicable". Basis: [DR] Part IV "Business continuity", "Information and technology systems" (3).
29. The pricing-model template must list the components (cost of funds, cost of capital, risk premium, other charges), the cost justification, risk-based pricing, CRB-score use and all-inclusive pricing. It must include an APR calculator. Test: a KES 10,000, 30-day loan with a KES 1,000 fee shows a periodic rate of 10% and the matching annualised rate, using a documented method. The method must be confirmed by an advocate or accountant (CPA APR method "prescribed" but not found). Basis: [DR] Part V "Pricing Parameters" (2)(a)-(f); [CPA] s.2.
30. The system must generate an AI-governance policy and a customer "you are dealing with an automated system" notice. Both must cover explainability, human review, bias, robustness, transparency and privacy. Basis: LN 191 reg 60 ([TT]).
31. Every generated document must carry version history, a board or management approval record (date, resolution reference), a "basis: draft/final" flag and an advocate-review status. It must not show "final" until approval is recorded. Basis: [DR] Part IV "Corporate governance" (2)(a); Part VIII "Compliance with the Code" (2)(b). The advocate-review status follows from the Advocates Act s.34 limit on unqualified persons preparing certain instruments ([Sheriaplex s.34](https://www.sheriaplex.com/kenya-acts/5674-unqualified-person-not-to-prepare-certain-documents-or-instruments)) (scope for policy templates unverified).
32. Clauses must be stored in a library keyed to obligation IDs. A change to one obligation must list every affected document and customer. Test: editing the complaint resolution period flags the consumer-protection policy, loan-agreement template and complaint templates. Basis: needed because LN 191 text is unread (see requirement 70).

**D. Approvals and notices registers**

33. The product register must store each product's features, rate, fees, CBK approval reference and approval date. A product must not be set "live" without an approval reference. Test: a live product with a changed interest rate becomes a "change request" whose effective date stays blank until approval is recorded. Basis: LN 191 regs 26, 55 ([TI]); [DR] Part IV "Products" (1).
34. The customer-notice scheduler must refuse an effective date less than 30 days after the notice date. For increases in charges or credit limits, it must also record customer acceptance. Test: notice on 1 Mar with effective date 30 Mar is refused; 31 Mar is accepted. Basis: LN 191 reg 55; [DR] Part IV "Products" (2), Part V "Variation" (2)-(3), "Loan agreement" (6).
35. The system must generate a pricing-parameter change request with justification, linked to the pricing model version. Basis: [DR] Part V "Variation of pricing parameters" (1), "Pricing Parameters" (3).
36. The channel register must hold delivery channels, paybill and till numbers, the unique mobile-money account number, apps and bank accounts. Each new entry starts a 30-day notice timer and generates a notice letter. Test: a paybill used 10 days after notice shows a breach warning. Basis: [DR] Part IV "Channel delivery" (1)-(2); [BD].
37. The agent register must hold name, ID, physical and postal address, phone, e-mail and location. It must include a 6-item contract-clause checklist and a suitability assessment. Appointment is allowed only 30 days after notice. A yearly renewal task falls due on 31 Oct ("two months before the end of each year"). Test: the register exports with all 7 fields, and an appointment on day 20 is flagged. Basis: [DR] Part IV "Agents" (1)-(7).
38. The outsourcing register must refuse to record outsourcing of loan decisions, management and control, board decisions, compliance determination or portfolio management. It must generate the 30-day notice with the required provider details, and check that the contract has the CBK-access clause. Basis: [DR] Part IV "Outsourcing" (1), (3)-(5).
39. The people-change register must generate a 30-day prior notice for any new director, CEO, senior officer or significant shareholder, and track fit-and-proper certification. Conditional CEO and senior-officer appointments must be flagged. Basis: [DR] Part IV "Fit and proper" (1)-(3), (9).
40. The share register must require prior-approval evidence for any transfer of 10% or more and a notice for smaller transfers. Capital injections need a prior notice holding investor, amount, post-injection %, UBO and source of funds. Basis: [DR] Part IV "Amalgamations" (5)-(7); Part VI "Sources of funds" (2).
41. The premises register must generate 30-day notices to open, move or close a place of business, keep a "licence displayed" checklist per site, and remind about the county business permit. Basis: [DR] Part IV "Place of business" (1)-(3); county permits (Regional differences).
42. The system must generate notices for an IT system change and for third-party investment or funding agreements (30 days before). Basis: [DR] Part IV "Information and technology systems" (2), "Amalgamations" (4).
43. The CBK correspondence log must hold directions, show-cause notices (response period of at least 14 days), review requests (within 14 days of a decision) and remediation plans (45 days), each with a timer. Basis: [DR] Part VII "Powers… to advise and direct"; Part IX "Notice to Show Cause" (2)(f), (vi); Part X "Review" (1).

**E. Complaints**

44. The complaints register must hold: date received, channel (oral or written), complainant name, address and phone, nature, persons complained about, investigation steps, findings, remedy, date and manner the complainant was told the result, outcome, reason if pending, and time taken. A complaint cannot be closed without outcome and notification fields. Basis: [DR] Part V "Customer complaints resolution" (5); "Consumer Protection Policies" (c)-(h).
45. The system must run three clocks per complaint: acknowledgement due 7 days after receipt; written "still pending" confirmation due 48 hours after receipt for unresolved oral complaints; resolution due 30 days after receipt. Overdue items go to a dashboard. Test: an oral complaint logged Monday 09:00 and still open creates a task due Wednesday 09:00. Basis: [DR] Part V "Customer complaints resolution" (2)-(4) (draft).
46. Acknowledgement, pending and outcome messages (SMS and e-mail, English and Swahili) must tell the customer of the right to go to CBK if dissatisfied. Basis: [DR] Part VIII "Market conduct" (v); Part V "Customer obligations" (2).
47. The system must export a complaints report for any period: received, by nature, resolved, unresolved with reasons, average and maximum time taken, outcomes, and corrective actions. Test: totals reconcile to the register. Basis: [DR] Part V "Customer complaints resolution" (6); Part III "Conversion" (3)(k).
48. Complaints must be capturable from a web form, forwarded e-mail and manual entry for walk-ins and calls. Basis: [DR] Part V "Customer complaints resolution" (1).

**F. Loan-level conduct tools** (templates and checkers working on CSV imports; the product is not a loan system)

49. The loan-agreement and KID generator must produce, for each product, all required contents (a)-(k) and the four documents given at signing. A checker must flag a missing item in an uploaded agreement. Test: an agreement without the CRB-listing period is flagged. Basis: LN 191 reg 54; [DR] Part V "Loan agreement" (1)-(3), "Key information document"; [CPA] s.65.
50. The ad and web-copy checker must flag any interest-rate mention without TCC, per-annum or per-month basis, and fixed or variable status. It must also flag a missing "regulated by the Central Bank of Kenya" line, and a trade name used without the company name. Basis: [DR] Part V "Marketing and Promotions", "False advertisements" (3), "Transparency" (1)(h)-(i), "Use of different business or trade name".
51. The NPL-cap calculator must compute the maximum recoverable amount as principal at the NPL date + min(contractual interest, that principal) + reasonable recovery costs, and flag excess collections. Test: principal 10,000, interest accrued 12,000, costs 500 gives a maximum of 20,500. Basis: [DR] Part IV "Limit on interest recoverable" (2)-(5).
52. The repayment-allocation checker must test an imported ledger against a configurable order (default interest, then fees and charges, then principal) and check same-day crediting. Basis: [DR] Part V "Loan repayment" (1)-(2); [BW] (final order unverified).
53. The CRB-listing module must block a negative listing at KES 1,000 or less. It must require a pre-listing notice at least 30 days before, or the contract period if shorter but never under 7 days, and only for repayment intervals under 30 days. It must create a post-listing notice task due within 30 days. Test: a 14-day-interval loan with a contract notice of 5 days is refused. Basis: [DR] Part IV "Exchange of credit information" (3), (6), (7).
54. The guarantor module must record consent before appointment, require a 14-day default notice before any demand, and record that non-judicial recovery against the borrower was exhausted. Basis: [DR] Part V "Fairness" (5)-(7), (11).
55. The collections-script checker must test scripts and SMS templates against the 11 banned practices, and enforce a configurable calling window ("odd hours" is undefined; default 08:00-18:00 is my assumption). Basis: [DR] Part IV "Credit collection" (1)(a)-(k).
56. The statement scheduler must record the statement interval agreed per product, and CPA duties: a 12-monthly disclosure for floating-rate fixed credit, a disclosure within 30 days after a rate increase, and monthly statements for open credit. Basis: [DR] Part V "Access to transaction and credit information" (1)(b); [CPA] ss.66-67.

**G. AML/CFT and data protection**

57. The system must record FRC goAML registration and start a 90-day timer when registered particulars change. Basis: [POC] s.47A(1)-(4).
58. The MLRO record must check: management level; not the internal auditor; not the CEO unless the firm is a sole proprietor. Any appointment or removal starts a 14-day notice to FRC **and** CBK. Basis: POCAML Regs reg 12 via [ACR].
59. The AML risk-assessment wizard must document the assessment, set a review no more than 24 months later, and force a review when a new product or channel is added to the registers. Basis: POCAML Regs regs 7-8 via [ACR].
60. The system must pre-fill the FRC Annual Compliance Report (template Ver. 7) with C, D or N per item and reasons drawn from system evidence. It must output the Word and PDF files named "ACR/<Year>/<Institution>", with a reminder (default 31 Jan, configurable). Basis: POCAML Regs reg 44 via [ACR]; deadline per [FNJ](https://fnjassociates.co.ke/?p=2097) (unverified).
61. CTR and STR helpers must **draft only, never send**. A cash transaction of USD 15,000 or more creates a CTR task due on the Friday of that week. An STR task gets a configurable deadline (default 2 days, alternative 7 days). Basis: [POC] s.44(2), (6); [ACR] reg 40; [FRC compliance page](https://www.frc.go.ke/?page_id=25) (via search summary).
62. The staff register must record pre-hire screening, periodic re-screening and AML and conduct training per person. Basis: [DR] Part V "Oversight of staff"; Part VIII "Skill, Care and Diligence" (c); [ACR] regs 11-12.

**H. Calendar, returns, evidence and platform**

63. The compliance calendar must hold these fixed items, each with owner, evidence upload and status:
    - annual fee, 31 Dec;
    - annual compliance certification, 31 Dec;
    - agent renewal, 31 Oct;
    - ODPC renewal, certificate expiry;
    - FRC annual report, 31 Jan (unverified);
    - consumer-protection policy review, 12 months;
    - AML risk-assessment review, 24 months;
    - customer-record refresh, 24 months.

    Basis: rows 10-20 of the duty table.
64. The fee calculator must show the annual fee by tier. Until the text is confirmed, it must show both late-payment readings: double fee if paid within 3 months, and a KES 1m penalty. After 3 months it must warn about revocation. Basis: [TI]; [TT]; [BD]; [Act] s.33S(7); [DR] Part IV "Suspension or revocation" (1)(b).
65. The annual-certification workpaper must list every obligation in the library, with evidence links and sign-off, and produce a draft certification letter for 31 Dec. Test: an obligation with no evidence cannot be marked "compliant". Basis: [DR] Part VII (7); [DCP22] reg 6(7).
66. The returns workspace must let users configure return types (name, frequency, deadline, template file). It must be preloaded with the known BSA returns (outstanding credit; quarterly financial statements; audited annual accounts; consumer protection; AML/CFT), each marked "frequency unverified", and keep a submission log (date, reference, file). The MVP has no direct CBK integration. Basis: [DR] Part VII (6); [CMA].
67. The system must reconcile return figures against an imported loan-book CSV: number of loans, NPL totals, borrowings list, agent count, bank and paybill list. Test: a 1-loan difference blocks "ready to file". Basis: [DR] Part VII (6)(b), (e)-(g), (i).
68. A one-click inspection pack must export: registers, policies with approval history, notices and approvals, complaints ageing, training, and the ODPC and FRC certificates. Basis: [DR] Part VII "Reporting requirements, onsite inspection" (1)-(3).
69. Every change to registers and documents must be written to an append-only audit log (user, time, old and new values) that can be exported. Basis: [DR] Part VIII "Business Integrity" (b)-(c); Part IV "Information and technology systems" (3)(f).
70. The obligation library must give each duty an ID, a source (draft or final), a regulation number, a status (confirmed or unverified) and an effective date. Loading the LN 191 text must produce a diff that updates all linked tasks, checks and templates. Test: changing the complaint clock from 30 to 21 days updates timers on open complaints and flags the affected policy. Basis: final text unread (see the caveat at the top).
71. The product must present outputs as support for the lender's own decisions, never as a compliance determination. The customer contract must give CBK access to the vendor's relevant records and systems, and the onboarding pack must include a draft "outsourcing notice to CBK" in case CBK treats the SaaS as outsourcing. Basis: [DR] Part IV "Outsourcing" (1)(d), (3), (5) (whether SaaS counts as outsourcing is unverified).
72. Security and data handling must include encryption in transit and at rest, role-based access, backups with a tested restore, and a data-processing agreement with each lender. The vendor must check whether it needs ODPC registration as a data processor. Basis: [DR] Part IV "Confidentiality", "Business continuity", "Information and technology systems" (1); [ODPC] reg 13 (processors also register); cross-border transfer rules under the Data Protection Act (not read, unverified).
73. All customer-facing templates (notices, KIDs, complaint messages, pre-listing notices) must be available in English and Swahili. Test: switching language changes the text and keeps every required data field. Basis: [DR] Part V "Transparency" (1)(c)-(d); "Loan agreement" (3).

## Open questions

1. **The final text.** Read LN 191 of 2026 (Kenya Law or the Kenya Gazette Supplement) and map final regulation numbers. Specifically confirm:
   - the threshold wording (≥ or >);
   - the late-fee mechanics (double fee versus a KES 1m penalty, added or replacing);
   - whether the 7-day, 48-hour and 30-day complaint clocks survived;
   - the periodic-returns list;
   - agent fees (the draft refers to a schedule that lists none);
   - the repayment-allocation order;
   - whether foreign, DFI and intra-group lenders are really in scope;
   - the details of reg 60;
   - whether registered firms need full policies or briefs;
   - whether the "any other entity approved by the Bank" exemption remains.
2. **Return frequencies and templates.** What does CBK require from licensed and registered NDTCPs through BSA, how often, and in what format? Does the API "data submission testing" still apply to NDTCPs, and does it cover registered firms?
3. **Annual compliance return.** What form or format does CBK specify for the 31 Dec certification?
4. **Portal.** Is the GDI portal used for NDTCP registrations as well as licences?
5. **Outsourcing.** Does CBK treat a compliance SaaS as "outsourcing" that needs a 30-day notice and a CBK-access clause?
6. **Advocates Act s.34.** Can a non-advocate sell generated policies and loan-agreement templates for a fee, or must an advocate prepare or review them?
7. **ODPC.** Must a foreign SaaS vendor register as a data processor? Which cross-border transfer safeguards apply?
8. **FRC.** What is the current ACR deadline (31 Jan?), and is the STR deadline now 2 days in the amended Act?
9. **CRB reporting.** How often must data go to CRBs, in which format, and which regulation sets the "at least monthly" rule?
10. **Excise duty.** Does the 20% excise on lenders' fees now apply to all NDTCPs or only digital ones, and does it reach interest?
11. **Records.** What retention period applies to complaints and agent registers (the draft is silent)?
12. **Inspections.** Has CBK done any onsite NDTCP inspection, and does it use a written checklist?
13. **County permits.** Is there a county permit category specific to lenders, and what does it cost?

## Sources

Primary legal texts:
- [Act] CBK Act Cap 491 (revision as at 27 Dec 2024): https://www.centralbank.go.ke/wp-content/uploads/2025/03/Central-Bank-of-Kenya-Act-Cap-491-Laws-of-Kenya-1.pdf
- [DR] Draft CBK (NDTCP) Regulations 2025: https://www.centralbank.go.ke/wp-content/uploads/2025/08/Draft-Central-Bank-of-Kenya-Non-Deposit-Taking-Credit-Providers-Regulations-2025.pdf
- [KL191] Kenya Law, LN 191 of 2026 (not opened, 403): https://new.kenyalaw.org/akn/ke/act/ln/2026/191/eng@2026-09-29
- [DCP22] CBK (Digital Credit Providers) Regulations 2022, LN 46: https://www.centralbank.go.ke/wp-content/uploads/2022/03/L-.N.-No.-46-Central-Bank-of-Kenya-Digital-Credit-Providers-Regulations-2022.pdf
- [POC] POCAMLA Revised Edition 2022: https://www.a-mla.org/sites/default/files/amla-import/711296287884447b06_0.pdf
- [ACR] FRC Annual Compliance Reporting Template Ver. 7: https://www.icpak.com/wp-content/uploads/2024/12/ACR-Template-2024-Vers.-7.docx
- [ODPC] Data Protection (Registration of Data Controllers and Data Processors) Regulations 2021: https://www.odpc.go.ke/wp-content/uploads/2024/03/THE-DATA-PROTECTION-REGISTRATION-OF-DATA-CONTROLLERS-AND-DATA-PROCESSORS-REGULATIONS-2021.pdf
- [CPA] Consumer Protection Act No. 46 of 2012: https://lists.kictanet.or.ke/pipermail/kictanet/attachments/20130219/a9fc4721/attachment.pdf
- Advocates Act s.34 (secondary text): https://www.sheriaplex.com/kenya-acts/5674-unqualified-person-not-to-prepare-certain-documents-or-instruments

CBK and FRC documents:
- [PROC] CBK DCP licensing procedures, Oct 2024: https://centralbank.go.ke/wp-content/uploads/2024/11/Procedures-for-licensing-Digital-Credit-Providers-Revised-October-2024.pdf
- [RIS] CBK Regulatory Impact Statement, May 2026: https://www.centralbank.go.ke/wp-content/uploads/2026/06/Regulatory-Impact-Assessment-Central-Bank-of-Kenya-Non-Deposit-Taking-Credit-Providers-Regulations-2025.pdf
- [BSAR] CBK Bank Supervision Annual Report 2025: https://www.centralbank.go.ke/uploads/banking_sector_annual_reports/1241268828_ANNUAL%20REPORT%202025.pdf
- [CBKLEG] CBK legislation and guidelines page: https://www.centralbank.go.ke/policy-procedures/legislation-and-guidelines/
- CBK press release, DCP licensing, Jul 2026: https://www.centralbank.go.ke/uploads/press_releases/1035898107_Press%20Release%20-%20Licensing%20of%20Digital%20Credit%20Providers%20-%20July%202026.pdf
- FRC compliance page (search summary only; TLS chain error): https://www.frc.go.ke/?page_id=25
- FRC goAML registration guide (search summary only): https://goaml.frc.go.ke/goAML_Prod/Images/customization/Registration%20of%20Reporting%20Entities.pdf

Press and commentary:
- [TI] Tech-ish, 4 Oct 2026: https://tech-ish.com/2026/10/04/cbk-raises-licensed-lenders-annual-fee-to-kes-500000-from-kes-20000/
- [TT] TechTrendsKE, 5 Oct 2026: https://techtrendske.co.ke/2026/10/05/cbk-non-deposit-taking-credit-providers-regulations/
- [BD] Business Daily, 3 Oct 2026: https://www.businessdailyafrica.com/bd/economy/thugge-raises-compliance-fees-non-deposit-taking-credit-firms-5617420
- [BW] Bowmans, final regulations (snippet only): https://bowmanslaw.com/insights/kenya-non-deposit-taking-credit-provider-regulations-are-here-what-lenders-need-to-know/
- [ITE] ITEdgeNews / Precursor, 1 Oct 2026: https://www.itedgenews.africa/kenya-licensed-digital-lenders-now-it-must-supervise-the-loan/
- [CMA] CM Advocates BSA training alert (search summary only): https://cmadvocates.com/blog/legal-alert-upcoming-bank-supervision-application-bsa-user-training-for-non-deposit-taking-credit-providers-stay-compliant/
- Business Daily, Sh50m threshold lobbying: https://www.businessdailyafrica.com/bd/economy/why-digital-lenders-seek-a-higher-sh50m-threshold-for-licensing-5162740
- Business Daily, 429 licences pending documentation, Mar 2024: https://www.businessdailyafrica.com/bd/economy/digital-lenders-seek-cbk-help-to-unlock-429-licences-4551784
- Business Daily, four digital lenders survive petition, Feb 2026 (search summary): https://www.businessdailyafrica.com/bd/corporate/companies/four-digital-lenders-survive-consumer-petition-on-lack-of-cbk-5371510
- Spencer West, refresher on non-deposit lenders: https://www.spencer-west.com/news/a-refresher-on-the-licensing-and-ongoing-compliance-requirements-for-non-deposit-taking-lenders-in-kenya/
- TechCrunch, Google Play removals, Mar 2023: https://techcrunch.com/2023/03/24/google-removes-hundreds-of-kenya-focused-loan-apps-from-play-store/amp
- Eastleigh Voice, regulators on the Microfinance Bill: https://eastleighvoice.co.ke/business/381762/regulators-push-for-changes-to-microfinance-eadb-bills-over-oversight-gaps
- Bowmans, Microfinance Bill 2026: https://bowmanslaw.com/insights/kenya-microfinance-bill-2026-key-implications-for-microfinance-banks/
- The Standard, CBK seeks AML powers: https://thestandard.ke/sports/amp/business/2001553419/cbk-seeks-powers-to-enforce-anti-money-laundering-compliance
- Business Today, Kenya still on FATF grey list: https://businesstoday.co.ke/kenya-still-on-fatf-grey
- The Star, 1 Jul 2026, grey list exit push: https://the-star.co.ke/news/2026-07-01-kenya-intensifies-fight-against-financial-crime-to-exit-grey-list
- FNJ & Associates, AML annual compliance report: https://fnjassociates.co.ke/?p=2097
- Business Daily (mirror), excise duty court challenge: https://www.mwanaspoti.co.tz/bd/economy/digital-lenders-move-to-court-to-challenge-20pc-excise-tax-3918950
- The Star, excise duty proposal, May 2023: https://www.the-star.co.ke/news/2023-05-25-digital-lenders-oppose-the-20-excise-duty-proposal
- Capital FM, Nairobi unified business permit: https://capitalfm.africa/all-you-need-to-know-about-the-unified-business-permit-costs-requirements-and-how-to-apply/

[Act]: https://www.centralbank.go.ke/wp-content/uploads/2025/03/Central-Bank-of-Kenya-Act-Cap-491-Laws-of-Kenya-1.pdf
[DR]: https://www.centralbank.go.ke/wp-content/uploads/2025/08/Draft-Central-Bank-of-Kenya-Non-Deposit-Taking-Credit-Providers-Regulations-2025.pdf
[KL191]: https://new.kenyalaw.org/akn/ke/act/ln/2026/191/eng@2026-09-29
[CBKLEG]: https://www.centralbank.go.ke/policy-procedures/legislation-and-guidelines/
[TI]: https://tech-ish.com/2026/10/04/cbk-raises-licensed-lenders-annual-fee-to-kes-500000-from-kes-20000/
[TT]: https://techtrendske.co.ke/2026/10/05/cbk-non-deposit-taking-credit-providers-regulations/
[BD]: https://www.businessdailyafrica.com/bd/economy/thugge-raises-compliance-fees-non-deposit-taking-credit-firms-5617420
[BW]: https://bowmanslaw.com/insights/kenya-non-deposit-taking-credit-provider-regulations-are-here-what-lenders-need-to-know/
[DCP22]: https://www.centralbank.go.ke/wp-content/uploads/2022/03/L-.N.-No.-46-Central-Bank-of-Kenya-Digital-Credit-Providers-Regulations-2022.pdf
[PROC]: https://centralbank.go.ke/wp-content/uploads/2024/11/Procedures-for-licensing-Digital-Credit-Providers-Revised-October-2024.pdf
[RIS]: https://www.centralbank.go.ke/wp-content/uploads/2026/06/Regulatory-Impact-Assessment-Central-Bank-of-Kenya-Non-Deposit-Taking-Credit-Providers-Regulations-2025.pdf
[BSAR]: https://www.centralbank.go.ke/uploads/banking_sector_annual_reports/1241268828_ANNUAL%20REPORT%202025.pdf
[POC]: https://www.a-mla.org/sites/default/files/amla-import/711296287884447b06_0.pdf
[ACR]: https://www.icpak.com/wp-content/uploads/2024/12/ACR-Template-2024-Vers.-7.docx
[ODPC]: https://www.odpc.go.ke/wp-content/uploads/2024/03/THE-DATA-PROTECTION-REGISTRATION-OF-DATA-CONTROLLERS-AND-DATA-PROCESSORS-REGULATIONS-2021.pdf
[CPA]: https://lists.kictanet.or.ke/pipermail/kictanet/attachments/20130219/a9fc4721/attachment.pdf
[ITE]: https://www.itedgenews.africa/kenya-licensed-digital-lenders-now-it-must-supervise-the-loan/
[CMA]: https://cmadvocates.com/blog/legal-alert-upcoming-bank-supervision-application-bsa-user-training-for-non-deposit-taking-credit-providers-stay-compliant/
