# South Africa: yearly RMCP filing kit for small accountable institutions — full plan

Combined plan from four deep-research parts (written 10 Oct 2026):

- [01 Law and product requirements](01-law-and-requirements.md): FIC Act s42, Directives 10, 11 and 12, Guidance Note 7B, PCC 53 and PCC 60, enforcement, and 72 testable requirements, each traced to its source.
- [02 Market and competition](02-market-and-competition.md): FIC registration counts by Schedule 1 item, firm counts, prices buyers already pay, competitors, channels and regional expansion.
- [03 Product and technical design](03-product-and-tech.md): users, features, flows, screens, data sources, architecture, security, calendar and build budget.
- [04 Go-to-market, company and finance](04-gtm-company-finance.md): pricing, channels, 90-day launch, payments and tax, company set-up, contracts, 36-month model and kill criteria. (03 mentions a "05 payments file". None was written for this idea; payments are covered in 04.)

Every fact below is sourced in those files. The main URLs are repeated here. This page reconciles the files where they disagree and gives one plan. "My estimate" marks numbers derived on this page. Money is in South African rand (R), excluding 15% VAT unless stated. I use R16.5 per US$, the rate used in 03 and 04 (unverified for October 2026).

Abbreviations: FIC = Financial Intelligence Centre (regulator and financial intelligence unit). RMCP = Risk Management and Compliance Programme (FIC Act s42). RCR = Risk and Compliance Return. GN 7B = FIC Guidance Note 7B. Org ID = an institution's FIC registration number on goAML, the FIC's portal. TCSP = trust and company service provider. HVGD = high-value goods dealer.

---

## 1. Decision in one page

**Verdict: worth a cheap, staged test. Sell it as "your FIC year, done and provable", to accountants first. Do not build it as a plain RMCP generator: that is now free or R3,500 a year elsewhere.**

**New score: 6/10. Unchanged from the re-assessment, but for different reasons.** The market is bigger and better counted than the re-assessment knew, and the build, payment and company path is clean and cheap. Against that, a direct rival launches the same core feature next month, the "RCR" half of the idea has gone, and the 2026 buying season ended yesterday.

**The case for it.**

- **The duty is real, final and yearly.** Directive 12 (GG 55337, 4 Sep 2026) requires a board-approved RMCP to be uploaded through goAML every year ([Directive 12](https://www.fic.gov.za/wp-content/uploads/2026/09/Directive-12-On-the-submission-of-risk-management-and-compliance-programmes.pdf)):
  - by **9 October**: legal practitioners (item 1), TCSPs (item 2), gambling (item 9), non-bank credit providers (item 11);
  - by **31 October**: estate agents (item 3), HVGDs (item 20), crypto asset service providers (item 22);
  - new institutions within **90 days** of starting business;
  - any RMCP re-approved after the yearly deadline within **10 days** of approval.
- **Most existing RMCPs are out of date.** GN 7B (3 Aug 2026) requires three parts (risk assessment, mitigation, monitoring), an entity-wide risk assessment first, approval that cannot be delegated, and a full description rather than "see our CDD manual" ([GN 7B, paras 181-185A](https://www.fic.gov.za/wp-content/uploads/2026/08/Guidance-Note-7B-%E2%80%93-Implementation-of-various-aspects-of-the-FIC-Act.pdf)).
- **Enforcement is active.** The FIC issued 549 inspection reports in 2025/26. "No RMCP" was a top finding. A law firm was fined R7.7m, including R3.8m for having no implemented RMCP ([Moonstone on the FIC annual report](https://www.moonstone.co.za/?p=61901); [Moonstone on Kunene Ramapala](https://www.moonstone.co.za/r7-7m-fine-stands-as-fic-appeal-board-rules-against-law-firm/)). Appeals are decided only on the record that was before the FIC ([s45D](https://www.acts.co.za/financial-intelligence-centre-act-2001/45d__appeal.php)), so dated evidence kept in advance is worth a lot.
- **The portal leaves the work undone.** goAML only takes a PDF named `YYYYMMDD_RMCP.pdf` ([FIC graphic](https://www.fic.gov.za/wp-content/uploads/2026/10/HTSRMCP.png)). A successful upload proves the format, not adequacy ([consultation feedback, paras 18-20](https://www.fic.gov.za/wp-content/uploads/2026/09/Consultation-feedback-note-Relating-to-draft-Directive-12-on-the-submission-of-RMCPs.pdf)). Nothing official drafts, tailors, records approval, versions, times the 10-day rule or handles many Org IDs.
- **The market is bigger than the re-assessment thought.** There are 46,622 Directive 12 registrations, and only 10,675 RMCPs (23%) reached the FIC from these sectors in 2025/26 ([FIC Annual Report 2025/26](https://www.fic.gov.za/wp-content/uploads/2026/09/FIC-Annual-Report-2025-2026.pdf), 02's calculation). The serviceable pool is about **20,500 small firms**, excluding estate agents and gambling.
- **It is easy and cheap to build.** Forms, rules, documents and reminders, with no goAML integration (none exists). MVP in 3 weeks, sellable in 7 weeks, cash to sellable about **R180,000-R250,000** (03).
- **No local company is needed.** Paddle sells in rand and handles South African VAT ([Paddle VAT list](https://paddle.com/support/which-countries-does-paddle-charge-vat-for)). South African cards may pay foreign suppliers up to R100,000 per transaction ([SARB Circular 12/2026](https://www.resbank.co.za/content/dam/sarb/what-we-do/financial-surveillance/financial-surveillance-documents/2026/12-2026.pdf)).

**What the deep dive changed** (compared with the re-assessment that scored it 6/10):

- **Competition is closer.** eFICA announces a self-service **RMCP Builder at R3,500 a year from November 2026**, plus a free RMCP Manager with versions and a change log ([efica.co.za](https://efica.co.za/)). VerifyNow gives a basic RMCP generator away free ([VerifyNow](https://www.verifynow.co.za/tools/rmcp-generator)). The re-assessment's "no local product does the whole job" is now only half true. The gap that remains is the accountant's multi-client view, the full FIC year (10-day clock, Directive 10 locations, inspection pack) and the non-law sectors.
- **The RCR half of the idea has gone.** Directive 11's RCR was a single return covering three years, due 30 June or 31 July 2026. No next date is set ([Directive 11](https://www.fic.gov.za/wp-content/uploads/2026/03/Directive-11-%E2%80%93-Risk-and-compliance-return.pdf)). An RCR workbook is built only if the FIC calls a new return.
- **More buyers, better counted.** 20,500 serviceable firms from the FIC's own item counts, against the re-assessment's 14,900 proxy.
- **The 2026 season is lost.** The 9 October deadline passed yesterday. The first full season is August-October 2027. Before then, sell to late filers, GN 7B rewrites (each triggers the 10-day rule), new practices and accountants.
- **Cold email is restricted.** POPIA s69 limits electronic direct marketing, B2B included ([MJ Kotze Inc](https://mjkinc.co.za/popia/companies-and-b2b)). Growth must come from partners, webinars and search.
- **The money and company side is cleaner than expected**: Paddle, no local company, no withholding tax on SaaS fees ([PwC](https://taxsummaries.pwc.com/south-africa/corporate/withholding-taxes)).

**What it is worth** (month 36 = October 2029; rand excl. VAT; founder unpaid; "planning" is my case, explained in §10):

| Case | Direct customers / accountant-managed entities | Recurring revenue (ARR) | Year-3 profit before founder pay | Peak cash need |
|---|---|---|---|---|
| Low (04 model) | 302 / 193 | R1.12m (US$68k) | about R0.4m | about R400,000-R500,000 with full content costs |
| **Planning (my estimate)** | **about 520 / 540** | **about R2.1m (US$130k)** | **about R1.0m (US$60k)** | **about R300,000-R400,000** |
| Base (04 model) | 751 / 772 | R3.06m (US$186k) | R1.99m | R128,000 in the model; about R250,000-R350,000 with full content costs |
| High (04 model) | 1,298 / 1,480 | R5.44m (US$330k) | R3.88m | about R110,000 in the model |

- **A good small business, not a large one.** The planning case can pay the founder about R40,000 a month from year 2. Exit at 2.5-4x ARR is worth about R5m-R8.5m in the planning case and R7.7m-R12.2m in the base ([valuation guide](https://beancount.io/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide)).
- **Hold R400,000 (about US$24,000) of cash**, not the R300,000 04 suggests, because the 04 model leaves out the attorney fees for the v1 sector packs.

**The key conditions.**

1. **eFICA's builder must leave a gap.** When it goes live in November, check it. If it already offers a multi-entity view, the 10-day clock and an inspection pack at R3,500, narrow to accountants only or stop.
2. **A named FICA attorney must sign the content**, at a fixed fee (about R40,000 for items 1 and 2). Without a name on it, the "it is just a template" objection wins.
3. **Accountants must bite.** At least 3 accounting practices signed by day 90.
4. **Paddle must accept the product.** Stripe on the founder's company is the back-up.

**Do this first** (12 October to 1 December 2026, about R250,000 of cash):

1. Hold 30 discovery calls by 10 November and get at least 3 pre-orders.
2. Sign the FICA attorney and apply to Paddle this week.
3. Build the MVP (12-30 October). Run 10-15 paid pilots by 25 November. Paid launch on **Tuesday 1 December 2026**.
4. Compare eFICA's builder feature by feature when it launches.

---

## 2. Why now: the law and enforcement

### Who is obliged

The Directive 12 items, from Schedule 1 of the FIC Act ([Schedule 1](https://www.acts.co.za/financial-intelligence-centre-act-2001/schedule_1_list_of_accountable_institutions.php); [Directive 12, Annexure A](https://www.fic.gov.za/wp-content/uploads/2026/09/Directive-12-On-the-submission-of-risk-management-and-compliance-programmes.pdf)):

| Item | Who | Yearly RMCP deadline | Target buyer? |
|---|---|---|---|
| 1 | Legal practitioners: own-account attorneys (incl. conveyancers and notaries), advocates taking work direct from the public, and attorney-owned firms. Attorneys employed by a registered firm do not register separately ([PCC 47A](https://www.fic.gov.za/wp-content/uploads/2023/10/2023.10-PCC-PCC-47A-Guidance-on-the-interpretation-of-Legal-Practitioners.pdf)) | 9 Oct | Yes, launch pack |
| 2 | Trust and company service providers. Catches many accountants and company secretaries | 9 Oct | Yes, launch pack and channel |
| 9 | Licensed gambling businesses | 9 Oct | No (mostly outlets of chains, unverified) |
| 11 | Credit providers under the National Credit Act; bank-group providers excluded | 9 Oct | Yes, v1 pack |
| 3 | Estate agents | 31 Oct | Later (separate estate-agent idea) |
| 20 | Dealers receiving R100,000 or more for an item valued at R100,000 or more | 31 Oct | Yes, v1 pack |
| 22 | Crypto asset service providers | 31 Oct | Yes, later v1 |
| 14, 21 | Postbank, SA Mint | 31 Oct | No |

- **There is no small-firm exemption.** A simple business may have a "relatively simple" RMCP, but every s42(2) element must be covered or explained ([GN 7B, para 185](https://www.fic.gov.za/wp-content/uploads/2026/08/Guidance-Note-7B-%E2%80%93-Implementation-of-various-aspects-of-the-FIC-Act.pdf)).
- **The only size relief:** a sole practitioner need not appoint a separate compliance person ([s42A(4)](https://www.acts.co.za/financial-intelligence-centre-act-2001/42a__governance_of_anti-money_.php)).
- **One filing per Org ID.** A firm registered under two items files twice. Standalone branches file their own ([consultation feedback, paras 5-7](https://www.fic.gov.za/wp-content/uploads/2026/09/Consultation-feedback-note-Relating-to-draft-Directive-12-on-the-submission-of-RMCPs.pdf)).

### What must exist, and when

| Duty | Deadline or frequency | Basis |
|---|---|---|
| Register on goAML, one Org ID per item | Within 90 days of starting business | [s43B](https://www.acts.co.za/financial-intelligence-centre-act-2001/43b__registration_by_accountable_institution_and_reporting_institution.php) |
| Keep registration current, incl. head office and branch details | Changes within 90 days; existing registrants by about 29 Oct 2026 (01's count; GoLegal says 31 Oct) | [Directive 10](https://www.fic.gov.za/wp-content/uploads/2026/07/Directive-10-On-information-pertaining-to-geographic-locations.pdf) |
| Written RMCP covering all 20 elements of s42(2), incl. proliferation financing, or saying why one does not apply | Continuous | [s42](https://www.acts.co.za/financial-intelligence-centre-act-2001/42__risk_management_and_compliance_.php); GN 7B |
| Entity-wide money laundering, terrorist financing and proliferation financing risk assessment; new-product assessment; client risk method | Before the RMCP is approved; new products before launch | GN 7B paras 37A, 183B; [PCC 53](https://www.fic.gov.za/wp-content/uploads/2023/09/2022.08-PCC-PCC-53-RMCP.pdf) |
| Approval by the board, else senior management, else the highest authority. Cannot be delegated, not even by a sole proprietor | Each new or amended version | s42(2B); GN 7B paras 181C-E |
| Review at regular intervals (FIC recommends yearly) | Yearly, and on material change | s42(2C); PCC 53 para 2.4 |
| RMCP available to staff; ongoing training | Continuous | s42(3); [s43](https://www.acts.co.za/financial-intelligence-centre-act-2001/43__training_relating_to_.php) |
| Employee screening, incl. against sanctions lists | Periodic | [Directive 8](https://www.acts.co.za/financial-intelligence-centre-act-2001/n3257_2__directive.php) |
| **Upload the approved RMCP via goAML** | **9 Oct or 31 Oct yearly**; 90 days for new institutions; **10 days** after any later re-approval | Directive 12 paras 5-8 |
| Client due diligence, sanctions screening, 5-year records, reports to the FIC | Ongoing; cash reports within 3 days, suspicious reports within 15 days | 01, duty rows 16-19 |
| RCR | Only when the FIC calls one. The last was due 30 Jun / 31 Jul 2026 | [Directive 11](https://www.fic.gov.za/wp-content/uploads/2026/03/Directive-11-%E2%80%93-Risk-and-compliance-return.pdf) |

**Weekend dates.** 31 Oct 2026 is a Saturday; 9 Oct 2027 is a Saturday; 31 Oct 2027 is a Sunday. Directive 12 does not say whether a weekend deadline moves (unverified). The product advises filing on the previous working day (01).

**The 10-day versus 90-day conflict.** The gazetted directive says 10 days for an amended RMCP. The FIC's own information sheet says 90 days ([info sheet, copy hosted by Moonstone](https://www.moonstone.co.za/wp-content/uploads/library/newsletter/Directive-12-on-the-Submission-of-Risk-Management-and-Compliance-Programmes-RMCPs.pdf)). **I use 10 calendar days**, because the gazette governs and it is the safe choice. The FIC refused to limit this to material changes (consultation feedback, paras 28, 30).

### Fines

- Every breach above is an administrative sanction under [s45C](https://www.acts.co.za/financial-intelligence-centre-act-2001/45c__administrative_sanctions.php): a caution, reprimand, directive, restriction, or a fine of up to **R10m** for a natural person and **R50m** for a legal person. The FIC may make an individual pay personally, and must publish final decisions.
- Late RMCP filing "may result in an administrative sanction, which may include a financial sanction" (info sheet).
- Approvers themselves can be sanctioned (GN 7B para 181M).

### Enforcement evidence (FIC 2025/26)

All from the FIC annual report ([FIC AR 2025/26](https://www.fic.gov.za/wp-content/uploads/2026/09/FIC-Annual-Report-2025-2026.pdf); [Moonstone summary](https://www.moonstone.co.za/?p=61901)):

- **549 inspection reports**: 169 legal practitioners, 111 estate agents, 76 credit providers, 61 precious metal and stone dealers, 37 motor dealers.
- **161 lighter compliance reviews** focused on RMCP drafting: 43 legal practitioners, 24 credit providers, 23 HVGDs, 22 TCSPs, 9 gambling, 8 crypto.
- **Targets come mainly from RCR data.** 171 institutions were treated as high risk only because they had not filed an RCR.
- **Top findings:** no RMCP, an RMCP that does not meet the Act, an RMCP not produced on request, and no documented sanctions screening.
- **361 admission-of-non-compliance notices** (209 unfiled RCRs, 152 non-registration). 149 settled for R1.49m in total, about **R10,000 each**.
- **Named cases:** an estate agent fined R175,000 for RMCP failures; legal practitioners fined R25,000-R50,000 for a missed RCR; an accounting firm's consent order with R307,000 for s42 (02).
- **Kunene Ramapala Inc**: R7.7m in total, incl. R3.8m for no implemented RMCP and R3.92m for no sanctions screening. "An administrative sanction cannot be avoided merely because non-compliance was rectified after the fact" ([Moonstone](https://www.moonstone.co.za/r7-7m-fine-stands-as-fic-appeal-board-rules-against-law-firm/)).
- **Len Dekker Attorneys (High Court, 25 Mar 2026)**: remedial steps must be weighed in sanctions ([Moonstone](https://www.moonstone.co.za/fic-cannot-rely-on-pre-2022-non-compliance-in-attorney-sanctions-high-court-finds-2/)). A remediation log has value.

**Honest reading.** Most fines are small (about R10,000). Large fines exist but are rare. Fear of inspection, not the average fine, is what sells.

### What goAML leaves undone

- The upload steps: save the PDF as `YYYYMMDD_RMCP.pdf` (approval date), open "My Org Details", type "RMCP submission" in the comment box (without it the button stays inactive), attach, submit. The FIC then sends an acknowledgement ([FIC graphic](https://www.fic.gov.za/wp-content/uploads/2026/10/HTSRMCP.png); [FIC notice, 9 Oct 2026](https://www.fic.gov.za/2026/10/09/important-information-on-submission-of-rmcp-submissions-9-october-2026/)).
- No drafting, tailoring, approval record, version history, 10-day clock, multi-entity view or reminders.
- **No API and no agent filing.** goAML credentials may not be shared, and third parties may not submit the RCR ([PCC 60, paras 4.10-4.11](https://www.fic.gov.za/wp-content/uploads/2026/06/2026.6-PCC-60-RCR-_On-RCR-Submission.pdf)). The product prepares the file; the institution's own user clicks Submit.
- **Channel confusion is real.** The FIC flagged RMCPs uploaded in place of RCRs ([Moonstone](https://www.moonstone.co.za/fic-flags-filing-errors-as-rcr-deadline-closes/)).

### Still moving

- **Yearly filing may extend to all accountable institutions**, including financial firms (consultation feedback, para 11). That would add about 13,500 registrations (02).
- **No next RCR date.** The earlier returns (Directives 6 and 7 of 2023, then Directive 11 of 2026) suggest a cycle of about three years (01's inference, unverified).
- **FATF.** South Africa left the grey list on 24 October 2025 ([National Treasury](https://www.treasury.gov.za/comm_media/press/2025/2025102401%20MEDIA%20STATEMENT-SOUTH%20AFRICA%20EXITS%20THE%20FATF%20GREYLIST%20ON%2024%20OCTOBER%20%202025.pdf)), but the FIC still issued Directives 10, 11 and 12 and GN 7B in 2026. The next mutual evaluation is expected to finish in October 2027 ([Moonstone](https://www.moonstone.co.za/?p=61863)), so pressure should stay high through 2027 (my inference).
- **AML Bill 2026** is in Parliament; no change to s42 was found (01).
- **Draft PCC 126** (precious metals and stones dealers) is open for comment until 16 Oct 2026 (01).
- **Exemption 10** may still let litigation-only attorneys mark client due diligence "not applicable". It does not remove the RMCP duty. Status unconfirmed (01).

---

## 3. Customers

### Segments

Registrations are FIC Org IDs at 31 March 2026, from the FIC's own table ([FIC AR 2025/26, PDF p.29 and p.36](https://www.fic.gov.za/wp-content/uploads/2026/09/FIC-Annual-Report-2025-2026.pdf)). Firm counts come from the professional bodies.

| Segment | FIC registrations | RMCPs sent in 2025/26 | Firms (serviceable) | Confidence |
|---|---|---|---|---|
| Item 1 legal practitioners | 21,034 | 4,218 (20%) | **9,276** firms under 20 attorneys: 6,969 sole practitioners, 2,241 with 2-9 attorneys ([LSSA](https://www.lssa.org.za/about-us/about-the-attorneys-profession/statistics-for-the-attorneys-profession/)) | medium-high |
| Item 2 TCSPs (mostly accounting practices) | 2,574 | 1,028 (40%) | up to 2,574 | high (registrations); firms fewer |
| Item 11 credit providers | 2,697 | 1,076 (40%) | up to 2,697; another ~5,400 NCR-registered providers may be in scope but unregistered ([NCR AR 2024/25](https://ncr.org.za/documents/pages/Annual%20Reports/NCR%20Annual%20Report%202024_2025_signed.pdf); 02's calculation, unverified) | medium |
| Item 20 motor dealers | 4,277 (RCR base) | part of 1,670 | 4,277, incl. franchise dealers in groups | medium |
| Item 20 other HVGDs | 1,304 | part of 1,670 | 1,304 | medium |
| Item 22 crypto | 362 | 173 (48%) | 362 | high |
| **Serviceable total** | | | **about 20,500 (ceiling)** | medium |
| Item 9 gambling (excluded) | 4,676 | 450 (10%) | mostly chain outlets (unverified) | low |
| Item 3 estate agents (excluded; separate idea) | 9,695 | 2,059 (21%) | | high |

**Which number I use.** The re-assessment used about 14,900 (law firms plus the 30 June RCR group as a proxy). 02 replaced the proxy with the FIC's per-item counts and got about 20,500. 04's model uses 20,500. **I use 20,500 as the ceiling.** The true firm count is lower: TCSP and credit-provider registrations include branches and duplicates, and many motor dealers belong to groups. The planning case reaches about 520 direct customers by month 36, about 2.5% of the ceiling or 6% of the 8,616 non-estate-agent registrations that sent an RMCP last year (my calculation).

### Buyer profile

- **Micro firms.** 75% of law firms are sole practitioners and 98% have fewer than 10 attorneys ([LSSA](https://www.lssa.org.za/about-us/about-the-attorneys-profession/statistics-for-the-attorneys-profession/)). Most new credit providers are "sole-director businesses" ([NCR AR 2024/25, p.29](https://ncr.org.za/documents/pages/Annual%20Reports/NCR%20Annual%20Report%202024_2025_signed.pdf)).
- **Many do nothing until pushed.** Only 23% of Directive 12 registrations sent the FIC an RMCP after the FIC asked everyone in March 2025 ([FIC letter](https://www.fic.gov.za/wp-content/uploads/2025/03/2025.3-GN-RMCP-Letter-Request_250304.pdf); FIC AR). Only 9.7% of legal practitioners had filed their 2026 RCR two weeks before the deadline ([Moonstone](https://www.moonstone.co.za/fic-flags-filing-errors-as-rcr-deadline-closes/)). If 2026 looks like 2025, most registrations missed 9 October 2026 (my inference; no 2026 figures yet). Those late filers are the first market.
- **Regulators and associations warn against templates.** NADA told motor dealers the FIC "will not accept standard templates" (search summary of [NADA](https://nada.co.za/?p=5097)). The FIC says a one-person firm "does not need a 200-page document" ([Moonstone](https://www.moonstone.co.za/fic-urges-businesses-to-simplify-compliance-focus-on-risks-not-paperwork/)).
- **What they already pay** (02):
  - eFICA RMCP Builder R3,500 a year; eFICA "we draft it with you" R8,500 ([efica.co.za](https://efica.co.za/));
  - Moonstone template R4,995 once ([Moonstone](https://www.moonstone.co.za/new-do-it-yourself-fica-compliance-solution-for-accountable-institutions/));
  - a 2.5-hour LSSA LEAD FICA webinar R1,200 per person incl. VAT (search summary of [LEAD](https://www.lssalead.org.za/course/fica-webinar/));
  - VerifyNow AML monitoring from R1,999 a year ([VerifyNow pricing](https://www.verifynow.co.za/pricing)).
- **Software they use.** Law firms use practice and trust-accounting software (AJS, LegalSuite, Lexpro, GhostPractice); AJS integrates nCino KYC ([GoLegal](https://www.golegal.co.za/?p=57648)). Everyone uses goAML.
- **No forum voice.** No Reddit or MyBroadband threads were found. Buyers talk through associations, trade press and paid webinars (02).

### The real jobs, in their words (03)

1. "Give me an RMCP that fits my firm and that an inspector will accept."
2. "Get it approved properly and filed on time."
3. "Tell me when I must file again."
4. "Show that I actually do what my RMCP says."
5. "Have everything ready when the inspector calls."
6. Accountant: "Run this for my 30 clients without sharing their goAML logins."
7. "Check the RMCP I already have" (most need a GN 7B rewrite).

---

## 4. Competition

| Alternative | What it does | Price (excl. VAT) | What it means for us |
|---|---|---|---|
| **eFICA** (Charter Group) | KYC platform. RMCP Pro v2 ("we draft it with you"); a **self-service RMCP Builder announced for November 2026**; a free RMCP Manager (versions, publish, change log). Lists the 9 Oct / 31 Oct deadlines and the 10-day rule. Claims "over 500 accountable institutions" | Builder **R3,500 a year**; Pro R8,500; both R10,000 | **The main threat.** Same idea, same price band, an existing customer base. Not yet known: multi-entity view, clocks, inspection pack. Its site returned HTTP 503 on 10 Oct 2026 (04) ([efica.co.za](https://efica.co.za/)) |
| **VerifyNow** free RMCP generator | A few questions produce a PDF RMCP. No approval pack, versions, reminders, filing help or multi-entity view | Free; a lead magnet for paid ID checks | **Sets the price of a plain RMCP at zero** ([VerifyNow](https://www.verifynow.co.za/tools/rmcp-generator)) |
| **nCino KYC** (formerly DocFox) | KYC for law firms; RMCP template and an expert service; LSSA partnership with free onboarding; integrates with AJS, LegalSuite, Lexpro | Not published (unverified); onboarding "valued at" R7,500-R45,000 | Holds LSSA-linked attorneys. Do not fight it there ([GoLegal](https://www.golegal.co.za/docfox-lssa-fica/); [nCino blog](https://blog.kycafrica.ncino.com/fic-updates-directive-10-draft-directive-12-guidance-note-7b)) |
| **Moonstone FICA Toolkit** | Editable Word RMCP, risk register, instructions | R4,995 once, plus hourly help | Static. A reseller candidate ([Moonstone](https://www.moonstone.co.za/new-do-it-yourself-fica-compliance-solution-for-accountable-institutions/)) |
| **Probeta "FICA Risk Management Compliance Hub"** | Policies and annexures for accounting practices, sold with Tax Faculty webinars | Not published | A partial rival for item 2; also a partner candidate ([Tax Faculty](https://taxfaculty.ac.za/events/how-to-implement-an-rmcp-in-your-firm-after-registering-with-the-fic)) |
| **Free material** (FIC PCC 53 template, LSSA 55-page guide, REBOSA pro-forma, law-firm templates) | Content. All warn that a template must be adapted | Free | Content, not workflow ([PCC 53](https://www.fic.gov.za/wp-content/uploads/2023/09/2022.08-PCC-PCC-53-RMCP.pdf); [LSSA guide](https://www.lssa.org.za/wp-content/uploads/2025/10/Final-Draft-RMCP-Guidelines-6-5-25-Final.pdf)) |
| **Realty Comply** | Estate-agency compliance records | R999 a month plus R499 per seat (unverified) | Estate agents only ([Realty Comply](https://www.realtycomply.com/)) |
| **ClearComply** | CIPC and SARS deadline tracker; no RMCP | from R99 a month | Shows the price point for reminders ([ClearComply](https://www.clearcomply.co.za/blog/fica-compliance-south-africa)) |
| **LexisNexis GRC** | Enterprise compliance | Quote only | Not aimed at small firms (02) |
| **KYC and screening vendors** (AML GO, Instarc, ACPAS) | Client due diligence and screening | Not published | Referral partners (02) |
| **Consultants and law firms** (MJK, Miltons) | Bespoke drafting | Not published; eFICA's R8,500 is the best anchor | Resellers (02) |
| **goAML** | Upload only | Free | The filing channel, not a competitor |

**Conclusion.**

- **The market has three layers** (02): free content and a free generator; templates and drafting at R5,000-R10,000 once; and KYC platforms that use an RMCP add-on to win KYC customers.
- **Nobody found sells the whole FIC year for many entities**: an accountant's portfolio, the 10-day clock, the Directive 10 register, an inspection pack and non-law sector packs. That is the opening. It is partial-incumbent territory, which suits the owner's criteria.
- **But the opening is narrower than the re-assessment thought.** eFICA could close part of it in November. Price at least 25% below eFICA and win on the accountant view and evidence, not on the document.

---

## 5. Product

### Positioning

> "Your FIC year, done and provable."

- **Not "an RMCP generator".** VerifyNow gives one away and eFICA sells one at R3,500 a year.
- **What the customer gets:**
  - a short, tailored RMCP and business risk assessment, mapped to every s42(2) element and GN 7B's three parts;
  - an approval minute and an approval record embedded in the filed PDF;
  - the goAML-ready file (`YYYYMMDD_RMCP.pdf`), the upload steps and a store for the FIC acknowledgement;
  - deadline clocks per Org ID: 9 Oct or 31 Oct, the 10-day amendment rule, the 90-day new-institution rule and the yearly review;
  - staff read-acknowledgements, then training and screening logs;
  - a one-click inspection pack;
  - one login for accountants and consultants with many client entities.
- **Visible tailoring answers the "template" objection.** Each paragraph traces to the firm's own answers. A sole practitioner's RMCP is 12-25 pages. Any two test firms differ in at least 40% of paragraphs (03's targets).
- **A tool with reviewed content, not legal advice.** Every document shows "content release X, reviewed by [named attorney] on [date]". Approval stays with the customer, as the law requires (GN 7B paras 181C-E, 181M).

### Users (03)

| Role | Who | What they do | Rights |
|---|---|---|---|
| Approver | Board, directors, partners or the sole practitioner | Reviews and approves each version | Approve, view all, billing |
| Compliance officer | The s42A person; in a sole practice, the practitioner | Runs the interview, prepares the pack, uploads to goAML with own login, stores the acknowledgement | Everything except approval |
| Staff | Attorneys, bookkeepers, admin | Read the current RMCP and acknowledge it; later, training | Read the approved version |
| Accountant or consultant | Practice serving many small clients | Creates client entities, runs or sends the interview, tracks all deadlines | Per-client access; **cannot approve** for a client |
| Reviewing attorney (add-on) | Partner FICA attorney | Comments and signs a review note, under its own contract with the customer | Drafts shared with them |
| Content editor | Our FICA attorney | Signs each content release | Content only, no customer data |
| Inspector | FIC | Receives the inspection pack | No login |

### Feature map

Reconciled from 03 and 04. **Where they differ:** 04's Solo plan lists the Directive 10 and training registers at launch, and its 90-day plan builds a credit-provider module in November and a motor-dealer edition in December. 03 puts all of these in v1, because each sector pack needs its own attorney review (R20,000-R50,000 each). **I follow 03, but pull the sector packs forward**: item 11 by end-January and item 20 by end-February 2027, in time for 04's April-May credit-provider and dealer campaign. The Directive 10 initial deadline (about 29 October 2026) passes before launch anyway.

| Module | MVP (built 12-30 Oct, sold from 1 Dec 2026) | v1 (Dec 2026-Mar 2027) | Later (Apr 2027 on) |
|---|---|---|---|
| Accounts and roles | One organisation per Org ID; roles; two-factor login; invites | Bulk invites; client approval link | SSO for larger firms |
| Accountant portfolio | Client list with item, deadline, RMCP status, approval date, 10-day clock; CSV import | White-label PDFs; per-client billing; export | Partner API |
| Interview | 50-70 branching questions in 9 blocks; "why we ask" with the legal reference; save and resume | "What changed since last year" mode; pre-fill from the gap check | Afrikaans interface if asked for |
| Business risk assessment | Inherent risk per factor (client, product, geography, channel, other, plus terrorist and proliferation financing); editable narratives; risk appetite | National and sector risk assessment references updated per release | Anonymised peer benchmarks |
| RMCP generator | Clause library for **items 1 and 2**; GN 7B three-part skeleton; s42(2) coverage annex; "not applicable because" clauses; client risk matrix; DOCX and PDF | **Item 11 (Jan), item 20 (Feb), item 22 (Mar)** packs | Item 3 (if merged with the estate-agent idea); group extracts |
| Approval | Approval minute; in-app approval bound to the document hash, or upload a signed scan; approval page merged into the PDF | Several approvers in sequence | |
| Versions | Frozen approved versions; diff view | Plain-English change log | |
| Filing pack | Correct file name; goAML steps; "mark as filed"; acknowledgement upload | Directive 10 and registration-change tasks | |
| Deadlines | 9 Oct / 31 Oct; 10-day; 90-day; yearly review; weekend warnings; e-mail reminders; calendar feed | Directive 10 and s43B 90-day clocks; RCR window if called | SMS or WhatsApp |
| Staff | People list; read-acknowledgement per version | Training register with one course and quiz; Directive 8 screening log | |
| Screening | — | Staff and client names against the FIC sanctions list, with saved evidence | Paid PEP data |
| Gap check | Free 15-question health check on the website | AI review of an uploaded RMCP against an attorney-approved rubric | |
| RCR | — | Workbook following the FIC questionnaire, **only if a new RCR is called** | |
| Inspection pack | ZIP and merged PDF: RMCP, approval, history, filing proofs, risk assessment, acknowledgements | Adds training, screening and location registers | Read-only link |
| Law watch | Daily FIC feed poll opens a content ticket | Customer notices with suggested re-approval | |
| Billing | Paddle checkout in rand, yearly per Org ID | Accountant bundles | |

**What stays out:** client-level due diligence (ID documents, beneficial owners). It brings heavy POPIA duties and competes with nCino, eFICA and VerifyNow, which already do it. The RMCP says how the firm does due diligence; the product does not do it (03).

**Requirements.** The full list of **72 legal requirements**, each with a test and a source, is in [01 §PRODUCT REQUIREMENTS](01-law-and-requirements.md#product-requirements). 03's R1-R18 table maps them to features. Treat the 72 as the acceptance checklist. The MVP should pass all of them except 5, 6, 11, 14, 51, 52, 54, 55, 57, 59 and 63, which are v1 (my split, following 03's feature map). Requirements 56 and 69 (suspicious-transaction notes) are met by design: the product holds no such notes (03).

### Key flows (03)

1. **First RMCP for a sole practitioner: under 60 minutes, no help.**
   1. Sign up and pick "my own firm" or "accountant or consultant".
   2. Enter the Org ID, item, start date, staff and branches. The app sets the deadline group and any 90-day clock.
   3. Interview, 30-40 minutes, each question showing why it is asked.
   4. Review the risk table and edit the narratives.
   5. Preview the draft with a coverage panel. Any uncovered s42(2) element blocks approval.
   6. Approve in the app (name, capacity, date, document hash) or upload a signed scan.
   7. Download `YYYYMMDD_RMCP.pdf`, follow the goAML steps, upload the FIC acknowledgement.
   8. Next deadlines are set and staff get a link to acknowledge.
2. **Amendment and the 10-day rule.** An edited answer creates a draft. If approval falls after this year's deadline, a 10-day filing clock starts with reminders on days 3, 7 and 9.
3. **Yearly cycle.** 60 days before the deadline, a "what changed" review. Re-approval is recorded even if nothing changed. Then file and store the acknowledgement.
4. **New institution.** A 90-day clock for the first RMCP and a reminder that goAML registration is due within 90 days. A "new practice starter" offer for the LEAD practice-management channel.
5. **Accountant with many clients.** Add clients by CSV. Run the interview with each client or send a link. The client's approver approves through a secure link. The client uploads with its own goAML login. The portfolio filters by "due in 30 days", "10-day clock running" and "not filed".
6. **Inspection notice.** One click builds the pack with an index.
7. **Gap check (v1).** Upload an existing RMCP. An LLM tests it against a fixed rubric and returns a traffic-light table with page references. The user confirms every pre-filled answer; nothing is generated from the old text.

### Screens (03)

1. Dashboard per organisation: a "FIC year" line with RMCP status, next deadline, running clocks and open tasks.
2. Accountant portfolio table with bulk actions.
3. Organisation setup.
4. Interview: blocks on the left, questions in the centre, "how this changes your RMCP" on the right.
5. Risk assessment review.
6. Draft and coverage: document preview with the s42(2) checklist beside it.
7. Approval.
8. Filing pack.
9. Versions with side-by-side diff.
10. Deadlines (calendar and list).
11. People and acknowledgements.
12. Inspection pack.
13. Billing.
14. Public health check (website).
15. Internal content console: releases, sign-offs, clause book, golden-file diffs, law-watch tickets.

Design rules: plain English, the legal reference in a tooltip, works on an old laptop and a phone, everything printable.

---

## 6. Technical design

**Stack: one plain monolith that one founder and AI agents can run** (03).

- **App:** Python and Django 5.2 LTS, server-rendered pages with HTMX, a little Alpine.js, Tailwind. No single-page app.
- **Database:** managed PostgreSQL; JSONB for answers and coverage maps; row-level security as a second wall between tenants.
- **Jobs:** a Postgres-backed queue (Procrastinate or Django-Q2), so no Redis. Nightly task generation, 07:00 SAST reminders, weekly digest, daily FIC feed poll, document rendering.
- **Documents:** docxtpl renders DOCX from a Word template; Gotenberg (LibreOffice) converts to PDF; pypdf merges the approval page and builds the inspection pack.
- **LLM use:** only for the v1 gap check, with structured output against a fixed rubric. **Never to write RMCP text.** Generated RMCPs must be deterministic and attorney-reviewed.

**Content as code** (the most important design choice):

- Questions (YAML), clauses (Jinja Markdown with conditions), risk rules (YAML tables) and indicator lists live in a `content/` folder in git.
- A release script builds a **clause book PDF**: every clause, its conditions and its s42(2) or GN 7B reference. The attorney reviews and signs the book, not the code.
- **Golden files:** 8 synthetic firms for the MVP (e.g. litigation-only sole practitioner, sole conveyancer, 5-attorney practice with trust investments, accounting practice that forms companies, trust administrator), 12+ in v1. Each produces a committed document snapshot. Any change shows as a diff. Only the founder may update golden files; content changes need a new attorney sign-off.
- Same answers plus same content release give an identical document. That makes tests possible and lets us prove later what the customer saw.
- Every clause stores its source and the source's date. When a source changes, every RMCP using it is flagged "review needed" (requirement 70).

**Key data rules** (03 data model):

- Organisation = one Org ID. A consultant has memberships in many organisations and works in one at a time.
- Answer sets are never overwritten; each edit session is a new row.
- Approved RMCP versions are frozen and bound to the SHA-256 of the exact PDF.
- Deadline rules are data with time-travel tests: `RMCP_ANNUAL`, `RMCP_AMENDMENT` (+10 days), `RMCP_NEW` (+90 days), `D10_CHANGE`, `REG_CHANGE`, `REVIEW` (+12 months).
- An append-only, hash-chained audit log.

**Data sources** (03):

| Source | Use | Access | Cost |
|---|---|---|---|
| goAML | Where the customer uploads | Web only; no API; credentials may not be shared. The product never logs in | Free |
| FIC publications feed | Law watch | RSS at [fic.gov.za/feed](https://www.fic.gov.za/feed/), worked on 10 Oct 2026 | Free |
| FIC sanctions list | v1 screening log | PDF, Excel, XML; updated within 24 hours of UN changes ([FIC TFS page](https://www.fic.gov.za/targeted-financial-sanctions/)); no API | Free |
| FIC sector RCR questionnaires | v1 RCR workbook | PDF ([legal practitioner questionnaire](https://www.fic.gov.za/wp-content/uploads/2026/05/Legal-practitioner-questionnaire.pdf)); link, do not copy | Free |
| FIC guidance (GN 7B, PCC 53, PCC 47A) | Clause drafting | PDFs; reproduction allowed only unaltered and non-commercial, so write our own text and cite paragraphs (01) | Free |
| CIPC, LPC, NCR registers | Registration numbers | No free public API found (unverified); manual entry | Free |
| Payments | Checkout, invoices, VAT | Paddle (Stripe as back-up) | about 6% of revenue |
| E-mail | Reminders, invites | Postmark, about US$15 a month (third-party price guides, 03) | small |
| Claude API | v1 gap check | About US$0.10-0.15 per check on Sonnet (03's estimate; [claude.com/pricing](https://claude.com/pricing)) | small |
| E-signature | Approval | The Act requires approval, not a signature (03's reading; confirm with the attorney). In-app record plus optional signed scan | none |

**Security and privacy** (03):

- **Little personal data by design.** The MVP holds users' names and e-mails and the names, roles and experience of approvers, the compliance officer and staff. No ID numbers and no client files.
- **Our role under POPIA:** the customer's operator. We need a written operator contract with security duties and immediate breach notice ([POPIA s21](https://popia.co.za/section-21-security-measures-regarding-information-processed-by-operator/)) and a cross-border basis for hosting abroad ([POPIA s72](https://source.acts.co.za/protection-of-personal-information-act-2013/72__transfers_of_personal_info.php)).
- **FICA record rules.** Keeping compliance records with us may make us a third-party record keeper whose details the customer must give the FIC ([Reg 20](https://www.acts.co.za/financial-intelligence-centre-act-2001/r1595_20__particulars_of_third_parties_keeping_records.php); 03's reading, unverified). So: publish a ready Reg 20 particulars sheet, offer a one-click full export, and keep at least 5 years of records after cancellation (cheap "archive only" plan).
- **Controls:** two-factor login for approvers, compliance officers and consultants; role checks plus row-level security with cross-tenant tests in CI; encryption at rest; signed download links; daily backups with point-in-time recovery, a nightly copy to a second provider and a monthly restore drill; consent-based, logged support access; an external security test before launch and yearly.
- **AI-agent hygiene:** agents work only on synthetic data, never with production credentials; a review agent checks each pull request against a security checklist before the founder reviews it.

**Hosting.** Fly.io in Amsterdam at launch. Fly runs apps in Johannesburg but does not offer managed Postgres there ([Fly regions](https://docs.fly.io/reference/regions)). Latency of about 150-200 ms is fine for forms (03's estimate). Add a South African region (Vultr Johannesburg or AWS Cape Town) only if pilots or a partner insist.

**Running cost** (03, excluding staff, VAT and payment fees):

| Customers | Per month | Share of revenue |
|---|---|---|
| 50 | about US$85-115 | about 14-18% |
| 300 | about US$170-210 | about 5% |
| 1,000 | about US$270-610 | about 2-5% |

People and legal content, not servers, are the cost.

---

## 7. Development steps

### Basis

- The founder builds with Claude Code and **4-6 agents in parallel**, each in its own git worktree. The founder writes specs, reviews every merge and owns integration. No hired developers (03).
- **Content is the bottleneck, not code.** Two sector packs need about 60-100 founder hours with Claude drafting from primary sources, plus 20-40 hours of attorney review (03's estimate).
- **Spec first.** Week 1 freezes the data model, the content schema, the deadline-rule interface, the 8 test firms and the Word template. Parallel agents are only safe with frozen interfaces.

### Agent work streams (03)

| Stream | Scope | Done when |
|---|---|---|
| A. Platform | Auth, two-factor login, organisations, roles, row-level security, audit log, support consent, Paddle webhooks, export | Cross-tenant tests pass; export gives every file |
| B. Interview engine | YAML questions, branching, validation, save and resume, "send link to client" | All 8 test firms can be entered by script |
| C. Rules and risk | Risk scoring, appetite, client matrix, s42(2) coverage, "not applicable" logic | Every rule has passing and failing fixtures; 100% coverage for all test firms |
| D. Documents | Clause assembly, DOCX, PDF, approval page, file naming, diff, inspection pack, clause book | Golden files stable; file name matches the approval date |
| E. Deadlines and notifications | Rules, tasks, reminders, digest, calendar feed, FIC feed job | Time-travel tests fire every reminder on the right day, incl. year rollover and weekends |
| F. Interface | All MVP screens, portfolio, phone layout, copy | Browser tests of flows 1-6 pass on desktop and phone |
| G. QA and security (continuous) | Test-firm generator, end-to-end tests, threat model, scans, restore script, review agent | Nightly full run green |
| H. Content (founder + Claude, attorney review) | Questions, clauses for items 1 and 2, risk factors, help texts, goAML guide, disclaimers | Every clause has a source and a "checked on" date; clause book signed |

### Calendar (start Monday 12 October 2026)

| Week | Product, legal, pilots | Engineering | Checkpoint |
|---|---|---|---|
| 1 (12 Oct) | Engage the FICA attorney and an accounting-practice compliance expert on fixed fees. Book 30 calls. Collect 5-10 real, redacted RMCPs. Draft the s42(2) / GN 7B / PCC 53 requirement map | Repo, CI, Fly.io, Django skeleton, auth, data model, content schema, rule interface, Word template, 8 test firms | **Spec freeze Fri 16 Oct** |
| 2 (19 Oct) | Calls 1-15. Item 1 questions and clauses v0. Landing page and free health check live | Streams A-F in parallel; G continuous | Daily merges, CI green |
| 3 (26 Oct) | Calls 16-30. Item 2 clauses. Use the 31 Oct deadline and Directive 10 for waitlist outreach | First end-to-end run: interview to approved PDF to filing pack | **MVP feature-complete Fri 30 Oct** |
| 4 (2 Nov) | Clause book to the attorney. Dry run: 3 pilots rebuild their own RMCP | Bug bash; PDF job performance; copy | **LC1:** attorney's first comments; **day-30 kill test (10 Nov)** |
| 5 (9 Nov) | Fix content; attorney second pass. Lawyer drafts terms, operator agreement, privacy notice | Dry-run fixes; Paddle checkout in rand | **LC2:** content release 1.0 signed (items 1 and 2) |
| 6 (16 Nov) | 10-15 paid pilots use the app for real, incl. 2-3 accountants with 3-5 clients each. At least 3 upload to goAML and get the acknowledgement | External security test (3-4 tester days) | 10 paid pilots by 25 Nov |
| 7 (23 Nov) | Pilot feedback; pricing page; 3 how-to videos | Fix findings; re-test; restore drill; monitoring | **LC3:** legal documents approved; no open high or critical findings |
| 8 (30 Nov) | **Paid launch Tue 1 Dec 2026** | Support and small fixes | **Sellable** |
| 9-13 (7 Dec-8 Jan) | Light support over the December shutdown | v1: item 11 pack, Directive 10 register | |
| Jan-Mar 2027 | Item 11 signed (Jan), item 20 (Feb), item 22 (Mar); accountant push | Gap check, training register, screening log, white-label | **v1 live by 31 Mar 2027** |
| Apr-Aug 2027 | RCR workbook only if the FIC calls a return; estate agents if merged | Load test for the September peak; second security test | |
| Sep-Oct 2027 | **Peak:** 9 Oct and 31 Oct | Hot fixes only | Count filings made through the app |

This meets the owner's frame: MVP in 3 weeks (30 October), sellable in 7 weeks (1 December) after legal content, a security test and pilots.

**Why the pilots can file in November.** Items 1 and 2 missed nothing by using the app late: any RMCP approved after 9 October must be filed within 10 days (Directive 12 para 8). So each pilot's new approval triggers a real goAML upload.

### MVP definition of done (03)

1. At least 8 of 10 pilot users go from sign-up to an approved RMCP and filing pack without help: a sole practitioner in under 60 minutes, a 2-9 attorney firm in under 90.
2. For all 8 test firms, every s42(2)(a)-(s) element is covered or "not applicable because ..."; every RMCP has GN 7B Parts 1-3, an approval page and no references to outside documents.
3. Tailoring is visible: any two test firms differ in at least 40% of paragraphs; a sole practitioner's RMCP is 12-25 pages.
4. The attorney has signed content release 1.0, and a mock inspection of 3 pilot RMCPs found nothing missing.
5. At least 3 pilots uploaded their `YYYYMMDD_RMCP.pdf` to goAML and stored the FIC acknowledgement.
6. Time-travel tests pass for 9 Oct / 31 Oct, the 10-day clock, the 90-day clock, the yearly review and year rollover.
7. Tenant-isolation tests pass; no open high or critical security findings; a backup restore has been done.
8. Terms, operator agreement and privacy notice approved by a lawyer; disclaimers in the app and on every document.
9. Checkout works in rand, and at least 5 pilots say they will pay the planned price.

**If time slips** (03): drop in-app approval (keep "print, sign, upload"), the calendar feed and the digest; launch with item 1 only and add item 2 in January. **Never drop** the attorney sign-off, golden-file tests, tenant isolation, the security test or the 10-day clock.

### Build budget: cash to a sellable product (founder unpaid)

From 03 (my rounding):

| Item | Low (R) | High (R) |
|---|---|---|
| Claude Max, 2 months (US$100-200 a month; [claude.com/pricing](https://claude.com/pricing)) | 3,300 | 6,600 |
| Extra API use | 800 | 5,000 |
| **FICA attorney: clause book for items 1 and 2, two rounds, mock inspection** (20-40 hours at R2,000-R3,500; aim for a fixed fee) | **40,000** | **140,000** |
| Compliance expert for the item 2 pack | 8,000 | 30,000 |
| Lawyer: terms, POPIA operator agreement, privacy notice | 15,000 | 45,000 |
| **External security test with re-test** (US$2,500-6,000; [benchmark](https://cipherssecurity.com/penetration-testing-cost-2026-smb-enterprise/)) | **41,000** | **99,000** |
| Hosting, e-mail, monitoring (2 months) | 2,500 | 5,000 |
| Domains and tools | 1,500 | 4,000 |
| Pilot vouchers and two webinars | 3,000 | 10,000 |
| Contingency (15%) | 17,300 | 52,000 |
| **Total** | **about 132,000** | **about 397,000** |

**Most likely: R180,000-R250,000 (US$11,000-15,000).** The attorney and the security test are about 60% of it. Company, payments, insurance and marketing are in §8-9.

**First-year running costs after launch** (03): about R180,000-R474,000, excluding marketing, payment fees and insurance. The big items are attorney law watch (R48,000-R168,000), the v1 sector packs (R60,000-R150,000 for items 11, 20 and 22) and a security re-test (R33,000-R66,000). **The attorney is the cost to negotiate:** a retainer plus a named content partnership cuts cash cost and adds credibility.

**Reconciling AI tool costs.** 03 budgets Claude Max at US$100-200 a month; 04's model uses R6,500 a month (about US$390) in year 1, which leaves room for API overflow when agents run in parallel. I use 04's figure in the financials, as the safer one.
