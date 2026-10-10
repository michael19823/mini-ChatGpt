# South Africa: yearly RMCP filing kit for small accountable institutions — full plan

Combined plan from four deep-research parts (written 10 Oct 2026):

- [01 Law and product requirements](01-law-and-requirements.md): FIC Act s42, Directives 10, 11 and 12, Guidance Note 7B, PCC 53 and PCC 60, enforcement, and 72 testable requirements, each traced to its source.
- [02 Market and competition](02-market-and-competition.md): FIC registration counts by Schedule 1 item, firm counts, prices buyers already pay, competitors, channels and regional expansion.
- [03 Product and technical design](03-product-and-tech.md): users, features, flows, screens, data sources, architecture, security, calendar and build budget.
- [04 Go-to-market, company and finance](04-gtm-company-finance.md): pricing, channels, 90-day launch, payments and tax, company set-up, contracts, 36-month model and kill criteria. (03 mentions a "05 payments file". None was written for this idea; payments are covered in 04.)

Every fact below is sourced in those files. The main URLs are repeated here. FIC documents and the trade press on this duty are in English; the deep dive's Afrikaans searches returned only English pages (02, 03). This page reconciles the files where they disagree and gives one plan. "My estimate" marks numbers derived on this page. Money is in South African rand (R), excluding 15% VAT unless stated. I use R16.5 per US$, the rate used in 03 and 04 (unverified for October 2026).

Abbreviations: FIC = Financial Intelligence Centre (regulator and financial intelligence unit). RMCP = Risk Management and Compliance Programme (FIC Act s42). RCR = Risk and Compliance Return. GN 7B = FIC Guidance Note 7B. Org ID = an institution's FIC registration number on goAML, the FIC's portal. TCSP = trust and company service provider. HVGD = high-value goods dealer.

---

## 1. Decision in one page

**Verdict: worth a cheap, staged test. Sell it as "your FIC year, done and provable", to accountants first. Do not build it as a plain RMCP generator: that is now free or R3,500 a year elsewhere.**

**New score: 6/10. Unchanged from the re-assessment, but for different reasons.** The market is bigger and better counted than the re-assessment knew, and the build, payment and company path is clean and cheap. Against that, a direct rival launches the same core feature next month, the "RCR" half of the idea has gone, and the 2026 buying season ended yesterday. The score falls to 4-5 if eFICA's builder already covers the accountant view and the deadline clocks. It rises to 7 if 10 paid pilots and 3 accounting practices sign by late November.

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

- **A good small business, not a large one.** The planning case can pay the founder about R40,000 a month from year 2. Exit at 2.5-4x ARR is worth about R5.3m-R8.4m in the planning case and R7.7m-R12.2m in the base ([valuation guide](https://beancount.io/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide)).
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

**Why pilots can file for real in November.** Any RMCP approved after 9 October must be uploaded within 10 days (Directive 12 para 8). So each pilot's new approval triggers a real goAML upload, and late filers need to upload anyway.

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

---

## 8. Go-to-market

### Pricing (reconciled)

The re-assessment, 02 and 04 agree on the core: about R2,500 a year for one entity and R900 per entity for accountants. 04 adds the detail; I use 04's packaging.

| Plan | Price excl. VAT, yearly in advance | Incl. 15% VAT | Who | Includes |
|---|---|---|---|---|
| **Free check** | R0 | R0 | Any registrant | "Which FIC deadline is mine?", 15-question RMCP health check, e-mail reminders (with consent) |
| **Solo** | **R2,490** | R2,863.50 | One Org ID: sole practitioner, small credit provider, dealer | Interview, risk assessment, tailored RMCP, approval record, goAML-ready PDF, upload checklist and proof store, all deadline clocks, staff acknowledgements, inspection pack, yearly review. Directive 10 and training registers added free by March 2027 |
| **Practice** | **R4,490** | R5,163.50 | Up to 3 Org IDs or standalone branches, up to 15 staff | Solo plus several registrations and two approvers |
| **Accountant / consultant** | **R900 per client entity, minimum 10 (R9,000)**; R750 from 25 entities | R1,035 per entity | Accounting practices, compliance consultants | Portfolio dashboard; white-label PDFs (v1); the practice's own RMCP free. Each client still approves and uploads with its own goAML login |
| Add-on: **FICA attorney review** | about R1,950 per RMCP, set and billed by the partner attorney | | Firms wanting a named expert sign-off | Under the attorney's own engagement letter; we take no share at first |
| Add-on: **New-practice starter** | R990 once | R1,138.50 | New firms (90-day duty) | Registration checklist, first RMCP, 90-day plan; converts to Solo |

- **Founding price:** Solo at R1,490 for year 1 for the first 50 customers, in return for feedback and a testimonial; renews at R2,490.
- **Monthly option:** R249 a month by card only, for firms that will not prepay.
- **Price logic** (04): Solo is 29% below eFICA's Builder (R3,500) and half of Moonstone's one-off template (R4,995). It is a quarter of a typical R10,000 settled fine. An accountant can resell at R1,500-R2,500 a client and keep a margin.
- **VAT matters to small buyers.** Many sole practitioners are below the VAT registration threshold (R2.3m from 1 April 2026, per 04's search summary of [Cliffe Dekker Hofmeyr](https://www.cliffedekkerhofmeyr.com/news/publications/2026/South-Africa/Tax-Exchange-Control/Tax-and-Exchange-Control-25-February-2026-Budget-summary-VAT)), so they compare the VAT-inclusive price. R2,863.50 is still below eFICA's R4,025 incl. VAT.
- **Do not price per document.** The clocks and the inspection pack are what make customers renew.

### Channels, in priority order (04)

1. **Accounting practices, as buyers and resellers.** 2,574 TCSP registrations, mostly accounting practices, file by 9 October and look after small credit providers, dealers and other clients. No competitor offers them a multi-client view. Reach them through CPD webinars with the Tax Faculty (SAIT), SAIPA and SAICA, Accounting Weekly and Accounting Academy, and FISA for trust practitioners ([Tax Faculty](https://taxfaculty.ac.za/events/how-to-implement-an-rmcp-in-your-firm-after-registering-with-the-fic); [Accounting Weekly](https://www.accountingweekly.com/financial-intelligence-centre/fic-2026-rcr-deadline-is-coming-are-you-ready)). Offer: the practice's own RMCP free with 10 client entities.
2. **Sole practitioners outside nCino's LSSA base.** Search ("submit RMCP goAML", "Directive 12", "GN 7B RMCP"), the free check, GoLegal's newsletter (about 16,000 subscribers in 2020; search summary of [GoLegal](https://www.golegal.co.za/advertise/)), De Rebus, BLA and NADEL regional events.
3. **New practices.** Every attorney opening a practice must first complete LPC-approved practice-management training ([LEAD PMT](https://www.lssalead.org.za/legal-practitioners/practice-management-training/)), then file an RMCP within 90 days. Offer LEAD a free "FIC starter" module.
4. **Credit providers.** CASA has "more than 1,800 non-bank credit providers" ([Moonstone](https://www.moonstone.co.za/microfinance-sa-rebrands-as-casa-to-broaden-focus-across-credit-sector/)). Member webinar and discount; referrals from micro-lender software such as ACPAS.
5. **Motor and other high-value goods dealers.** NADA already warns against templates. A motor-dealer edition and a NADA/RMI webinar before 31 October.
6. **Resellers:** Moonstone, Probeta and small consultancies on the accountant plan.
7. **Later:** practice-software vendors (LegalSuite, GhostPractice, Lexpro).

**Cold e-mail is restricted.** POPIA s69 allows one approach to a non-customer, on the prescribed form; commentators read it as covering B2B ([MJ Kotze Inc](https://mjkinc.co.za/popia/companies-and-b2b)). So: content, partners, webinars and search, plus at most one compliant approach per prospect.

**Sales motion** (04):
- **Self-serve for Solo and Practice: "free to build, pay to finalise".** The buyer completes the interview and sees a watermarked draft. Paying unlocks the clean PDF, approval record, filing store and reminders. Target: 20-25% of finished drafts convert in season (04's estimate).
- **Founder-led demos for accountants:** a 30-minute video call, a 14-day trial with three client entities, then the 10-entity minimum. South Africa is UTC+2, which suits European working hours.
- **Webinars are the main event:** monthly, weekly in season, co-hosted with a partner, with the named attorney on the panel.
- **Renewal:** a CPA-compliant notice 40-80 business days before expiry, with "what changed in FIC rules this year" ([CPA s14](https://www.acts.co.za/consumer-protection/14_expiry_and_renewal_of_fixed_term_agreements)).

### Selling calendar

| Period | Buyers' state | Our action |
|---|---|---|
| Oct-Nov 2026 | 9 Oct just passed; 31 Oct due for items 20 and 22; Directive 10 due about 29-31 Oct; many late filers (my inference) | Waitlist, free checklists, "filed late? fix it properly" message, paid pilots |
| Dec 2026-mid Jan 2027 | Summer shutdown (common practice, unverified) | Launch 1 Dec, then build v1 and SEO pages |
| Jan-Mar 2027 | GN 7B revisions due; new practices; accountants planning the year | Accountant push; GN 7B revision campaign; new-practice starter |
| Apr-May 2027 | Quiet | Credit providers (CASA) and dealers (NADA); inspection-pack campaign using new sanction cases |
| Jun-Jul 2027 | Renewal notices for Nov-Dec 2026 buyers start | "Year 2 of Directive 12" webinars; RCR workbook if a return is called |
| **Aug-early Oct 2027** | **Peak for the 9 Oct group** | Weekly webinars, Google and GoLegal ads, De Rebus, partner pushes, reminders to all free-check users |
| Oct 2027 | 31 Oct group; first renewals | Dealers and crypto; review the year |

About half of each year's new sales should land in August-October (52% in 04's model).

### Marketing budget, year 1 (Nov 2026-Oct 2027): R180,000 (about US$11,000)

From 04. Low case R120,000; high case R240,000. Referral commissions (20% of first-year fees on referred sales) are paid on results and sit in the financial model.

| Item | R |
|---|---|
| Content and SEO (30 pages: one per item, Directive 12, GN 7B, the 10-day rule, goAML how-to) | 25,000 |
| Webinar platform and recordings | 6,000 |
| CPD webinar partnerships (Tax Faculty, SAIPA, Accounting Academy, FISA, CASA, NADA; fees unknown) | 40,000 |
| GoLegal website and newsletter ads (rate card on request) | 30,000 |
| De Rebus ads (rates not found, unverified) | 15,000 |
| Google search ads on narrow FIC terms (cap R1,000 a day in peak) | 30,000 |
| LinkedIn tests | 10,000 |
| Events and association presence | 20,000 |
| Design, video, testimonials | 4,000 |
| **Total** | **180,000** |

Year-1 targets (04 base): 250 direct customers, 20 accountant practices (about 300 entities), about R0.97m ARR in October 2027. In my planning case, about 175 direct customers and 14 practices.

### First 90 days (Mon 12 Oct 2026 to Sat 9 Jan 2027)

Reconciled from 03 (build calendar) and 04 (launch plan). The main change: credit-provider and dealer modules move to January-February, after their attorney review.

| Dates | Product | Market and sales | Company, legal, payments | Exit test |
|---|---|---|---|---|
| 12-16 Oct | Spec freeze; skeleton; 8 test firms | Landing page with the free deadline finder and waitlist. Book 30 calls: 10 sole practitioners, 8 accountants, 5 credit providers, 4 dealers, 3 consultants | Apply to Paddle; shortlist 3 FICA attorneys; brief a compliance expert for item 2 | 30 calls booked |
| 19-30 Oct | Agent streams; items 1 and 2 content; **MVP feature-complete Fri 30 Oct** | 15 calls done; free 31 October / Directive 10 checklist and GN 7B change list; one compliant approach to dealers and crypto firms | Sign the attorney (about R40,000 fixed); order the security test | MVP works end to end |
| 2-13 Nov | Clause book review; dry run with 3 pilots; content release 1.0 | 30 calls done; founding offer R1,490 | Terms, operator agreement, privacy notice drafted | **At least 3 pre-orders by 10 Nov (kill test)** |
| 16-27 Nov | Pilots live; security test and fixes | **10-15 paid pilots** (sole practitioners, small firms, 2-3 accountants); at least 3 goAML uploads | Paddle live in rand; insurance quote | 10 paid pilots by 25 Nov |
| 30 Nov-11 Dec | **Paid launch Tue 1 Dec** | Webinar 1 with the attorney: "Directive 12 and GN 7B: what to fix before your next amendment". Pitch the Tax Faculty, SAIPA and Accounting Weekly for January. First GoLegal ad. Accountant partner programme | Terms with the CPA renewal notice and a bold liability box | First 20 paying customers |
| 14 Dec-9 Jan | v1 starts: item 11 pack, Directive 10 register; SEO pages; help centre | Low activity. CASA and NADA introductions; LEAD PMT proposal; 2027 webinar calendar | Decide the attorney review add-on (direct billing). **Day-90 review** | **25 paying direct customers and 3 accountant practices** |

---

## 9. Payments, company and legal

### Payments: Paddle from the founder's company abroad

- **South African cards can pay a foreign seller.** Residents may pay foreign suppliers by card for "services or subscriptions" up to **R100,000 per transaction** since 8 April 2026 ([SARB Circular 12/2026](https://www.resbank.co.za/content/dam/sarb/what-we-do/financial-surveillance/financial-surveillance-documents/2026/12-2026.pdf)). Some cards must first be enabled for international online use (bank-specific, unverified). Show a "card declined?" tip at checkout.
- **Paddle (recommended at launch).**
  - Covers South Africa at 15% VAT for B2B and B2C ([Paddle VAT list](https://paddle.com/support/which-countries-does-paddle-charge-vat-for)).
  - Rand is a payment and payout currency; bank transfer only in USD, EUR and GBP ([Paddle currencies](https://developer.paddle.com/concepts/sell/supported-currencies)).
  - Fee 5% + US$0.50 ([Paddle pricing](https://www.paddle.com/pricing)): about R151 on a Solo sale, **6.1% of the net price** (04).
  - Paddle is the seller of record: it charges and pays VAT, issues the tax invoice and takes fraud and chargebacks.
  - **Paddle will not sell legal advice** ([Paddle restricted list](https://paddle.com/help/start/intro-to-paddle/what-am-i-not-allowed-to-sell-on-paddle), search summary). So the attorney bills the review add-on directly. Ask Paddle in writing whether the new-practice starter counts as software.
- **Stripe on the founder's company (back-up).** A UK account pays about 3.15% + 20p for non-EEA cards, +2% for conversion, +0.7% for Billing ([Stripe UK](https://stripe.com/gb/pricing)): about the same cost as Paddle, but the founder carries VAT and chargebacks.
- **Bank transfer.** A SWIFT payment costs the buyer R210-R995 at Standard Bank or R250-R500 at Capitec (04, search summaries). That adds 7-10% to a Solo plan, so **no SWIFT for Solo**. Accountant plans above about R9,000 can be invoiced in EUR, GBP or USD for bank transfer through Paddle.

| Route, one Solo sale (R2,490 net) | Fee | Who handles VAT | Net to founder |
|---|---|---|---|
| **Paddle** | about R151 | Paddle | **about R2,339** |
| Stripe, UK account | about R150 | Founder (buyer may owe imported-services VAT until the founder registers) | about R2,340 |
| Local company + PayFast card (3.2% + R2; [PayFast](https://payfast.io/?p=25639)) | about R94 | Local company | about R2,396, before R30,000-R50,000 a year of company costs |
| Local company + PayFast Instant EFT (2%) | about R57 | Local company | about R2,433, same caveat |

### Tax friction

- **VAT.** A foreign seller of electronic services must register for South African VAT only above **R2.3m of South African sales in 12 months** (from 1 April 2026). The B2B exclusion does not help a seller with mixed customers ([SARS guide VAT-REG-02-G02](https://www.sars.gov.za/vat-reg-02-g02-supply-of-electronic-services-by-foreign-suppliers-and-foreign-intermediaries-external-guide/); [SARS FAQ, Q6](https://www.sars.gov.za/lapd-vat-g16-vat-faqs-supplies-of-electronic-services)). With Paddle this does not arise. Without Paddle, a non-VAT-registered buyer would owe 15% itself on form VAT215 within 60 days (SARS FAQ, Q70-Q71).
- **Withholding tax: none in the normal case.** South Africa has no withholding tax on service fees to non-residents ([PwC](https://taxsummaries.pwc.com/south-africa/corporate/withholding-taxes)). The 15% royalty withholding tax applies only if the contract licenses software. Draft the terms as access to a hosted service.

### Company: no South African company at launch

**Reasons** (04): card payments are allowed; Paddle handles VAT; no withholding tax; no licence is needed to sell compliance software (04's reading, unverified). A foreign company must register in South Africa as an "external company" only if it "conducts business" there, for example by being party to a South African employment contract ([Companies Act s23](https://www.acts.co.za/companies-act-2008/23_registration_of_external_companies_and_registered_office), search summary). No source addresses online sales directly (unverified). **So do not hire a South African employee on the foreign company;** use contractors or an employer-of-record.

**Open a local (Pty) Ltd only if:**
1. more than about 25% of qualified buyers refuse card payment and want rand EFT or debit order;
2. a channel partner (LEAD, a practice-software vendor, CASA, a bank) will only contract with a South African entity or asks for a B-BBEE certificate;
3. the founder wants a South African employee; or
4. the founder moves to South Africa.

**Costs if a local company is needed** ([MJ Kotze Inc, foreigners guide](https://mjkinc.co.za/doing-business-in-south-africa/company-registration-foreigners) unless stated):

| Item | Founder files himself (official fees) | Through a lawyer or agent, remotely |
|---|---|---|
| Name reservation | R50 | included |
| Incorporation, standard MOI / custom MOI | R175 / R475 | included |
| Beneficial-ownership filing | free | included |
| Professional fee | — | R880 (Govchain basic; whether it serves foreign directors is unverified; [Govchain](https://help.govchain.co.za/en/articles/1807746-how-much-does-company-registration-cost)) to about R5,000-R15,000 at a law firm (04's estimate; no firm published a price) |
| Minimum share capital | none (one R1 share is valid) | same |
| Public officer for SARS | must be an individual resident in South Africa | nominee about US$2,550 a year (2017 quote, old; [Healy Consultants](https://www.healyconsultants.com/wp-content/uploads/2017/03/draft-invoice-South-Africa-business-package.pdf)) |
| Registered office | any South African address | virtual office R150-R600 a month ([OurPower](https://www.ourpower.co.za/tools/company-registration/foreign-directors-sa-company), vendor page) |
| Bank account | bank fees; some banks want in-person verification | 3-6 weeks, 8+ for complex structures |
| CIPC annual return | R100 (turnover under R1m) or R450 (R1m-R10m) ([OurPower](https://www.ourpower.co.za/tools/company-registration/annual-return-cipc-explained), single source) | agent fee extra |
| Bookkeeping, VAT and tax returns, annual statements | — | about R25,000-R45,000 a year (04's estimate) |

- **In person versus remote.** The official fees are the same either way (about R225-R525). A foreign founder must use CIPC e-Services even in person, because BizPortal needs a South African ID (search summary of [OurPower](https://www.ourpower.co.za/tools/company-registration/foreign-directors-sa-company)). Being in the country mainly helps with the bank account.
- **Time:** 1-3 weeks to a registered company; 4-8 weeks to a working one with a bank account.
- **Directors:** no nationality or residence rule; one is enough (04).
- **Tax in a local company:** 27% corporate income tax; 20% dividends tax, often cut by treaty; VAT compulsory above R2.3m (04).
- **Total:** about **R35,000-R60,000 (US$2,100-3,600) in year 1** and R30,000-R50,000 a year after. PayFast instead of Paddle saves about 3% of revenue, so a local company pays for itself only above about R1.5m-R2m a year of sales, or if it unlocks a channel (04).

### Contracts and legal

- **Consumer law reaches many buyers.** The CPA protects juristic persons below R2m turnover or assets, and natural persons such as sole practitioners ([SAICA on the CPA](https://saica.org.za/resources/legislation-and-governance/consumer-protection-act), search summary). For natural persons, CPA s14 requires a renewal notice **40-80 business days before expiry** and allows cancellation on 20 business days' notice ([CPA s14](https://www.acts.co.za/consumer-protection/14_expiry_and_renewal_of_fixed_term_agreements); [CGSO guidance](https://acts.co.za/news/blog/2025/10/cgso-fixed-term-agreement-guidance)). Build the notice into the product, keep terms at 12 months, offer pro-rata refunds and a 7-day no-questions refund for Solo.
- **Liability.** Cap at fees paid in the last 12 months. Exclude fines and indirect loss, but not gross negligence or fraud. Show the liability clause in a bold box at checkout (CPA s49, unverified). Promise content updates within 30 days of any new FIC directive or guidance note.
- **Not legal advice; not reserved work.** The Legal Practice Act reserves court work and court documents for practitioners ([LPA s33](https://www.acts.co.za/legal-practice-act-2014/33__authority_to_render____)). An RMCP is not a court document, so selling the software looks allowed (03 and 04's reading; eFICA and Moonstone already sell RMCP drafting). The product must not call itself a law firm.
- **Attorney add-on.** A direct contract between buyer and attorney. Check the LPC Code of Conduct on fee sharing and touting before any revenue share.
- **POPIA.** Operator agreement (s21) with s72 transfer terms; sub-processor list; no client files in the MVP. Whether a foreign vendor must register an Information Officer is open (03).
- **Copyright.** Do not copy FIC guidance or the LSSA guide; write our own clauses and cite paragraphs (01).
- **Insurance.** Professional indemnity and tech errors-and-omissions cover in the founder's country, naming South African customers. Budget **R15,000 a year**; get a broker quote ([Simply Business](https://www.simplybusiness.co.uk/business-insurance/professional-indemnity/) shows UK contractor cover from about £83-97 a year; a compliance SaaS will pay more).
- **Documents to prepare** (about R25,000-R40,000 once, 04's estimate): SaaS terms proofed for the CPA and ECTA; privacy notice and operator agreement; accountant and reseller agreement (no shared goAML logins); partner attorney agreement; a "what this is and is not" page. A South African technology lawyer should review the first three.

---

## 10. Financials

### Model assumptions (04)

Month 1 is November 2026; month 36 is October 2029. Rand excl. VAT. Customers prepay a year. "Profit" is cash in minus cash costs, before founder pay and before tax in the founder's country.

| Assumption | Low | Base | High |
|---|---|---|---|
| Serviceable pool | 20,500 | 20,500 | 20,500 |
| New direct customers, years 1 / 2 / 3 | 100 / 150 / 170 | 250 / 330 / 380 | 400 / 520 / 600 |
| New accountant practices a year | 5 / 7 / 8 | 20 | 25 / 30 / 35 |
| Client entities per practice | 12 | 15 | 18 |
| Direct renewal, first / later | 60% / 70% | 70% / 80% | 80% / 88% |
| Practice renewal | 75% | 85% | 90% |
| Prices | Solo/Practice blend R2,790; accountant entity R850 blended; +5% a year; first 50 at R1,490 | same | same |
| Payment cost (Paddle) | 6.1% of cash in | same | same |
| AI tools | R6,500 a month in year 1, R5,000 after | same | same |
| Attorney | R40,000 first review, then R5,000 a month | same | same |
| Security test | R50,000, then R35,000 a year | same | same |
| Marketing, years 1 / 2 / 3 | R120k / 150k / 150k | R180k / 240k / 300k | R240k / 320k / 400k |
| South African customer-success contractor | from month 13 | R12,000 a month from month 8, rising to R25,000 | from month 6 |

Seasonality of direct sales follows the deadlines: about 52% of each year's new sales fall in August-October.

### Scenario results (04 model)

| Measure | Low | Base | High |
|---|---|---|---|
| Direct customers at month 12 / 24 / 36 | 100 / 210 / 302 | 250 / 505 / 751 | 400 / 840 / 1,298 |
| Accountant entities at month 12 / 36 | 60 / 193 | 300 / 772 | 450 / 1,480 |
| ARR at month 12 / 24 / 36 | R0.33m / R0.74m / R1.12m | R0.97m / R2.00m / **R3.06m** | R1.52m / R3.35m / R5.44m |
| Cash in, years 1 / 2 / 3 | R0.27m / R0.74m / R1.12m | R0.90m / R2.02m / R3.09m | R1.47m / R3.38m / R5.49m |
| Costs, years 1 / 2 / 3 | R0.46m / R0.58m / R0.65m | R0.64m / R0.83m / R1.10m | R0.79m / R1.20m / R1.61m |
| Profit before founder pay, years 1 / 2 / 3 | -R0.19m / R0.16m / R0.47m | R0.26m / R1.19m / **R1.99m** | R0.67m / R2.19m / R3.88m |
| Cumulative cash positive for good | month 32 | month 10 | month 6 |
| Peak cash need (model) | R272,000 | R128,000 | R109,000 |

**Sensitivity (base, 04):**

| Change | ARR month 36 | Year-3 profit | Peak cash |
|---|---|---|---|
| Base | R3.06m | R1.99m | R128,000 |
| Prices 20% lower (eFICA price war, Solo R1,990) | R2.60m | R1.57m | R128,000 |
| **New sales 30% lower** | **R2.14m** | **R1.13m** | **R162,000** |
| Renewal 55% then 70% | R2.78m | R1.72m | R128,000 |

### My planning case, and why

**What I adjust.**

1. **Sales 30% below the base.** eFICA launches the same core feature at R3,500 a year in November, VerifyNow's generator is free, the 2026 season is lost, the founder sells from abroad, and POPIA blocks cold e-mail. The base needs about 2,500 free checks a year at 10-12% paid conversion (04), which is untested. I take 04's own "new sales 30% lower" row.
2. **Content costs the model leaves out.** 04 budgets the attorney at R40,000 plus R5,000 a month. 03 adds the v1 sector packs (R60,000-R150,000), the item 2 compliance expert (R8,000-R30,000) and a law-watch budget of R48,000-R168,000 a year. I add about **R100,000-R250,000 in year 1** and **R50,000-R100,000 a year after**.

**Result (my estimates):**

| Measure | Planning case |
|---|---|
| Direct customers / accountant entities at month 36 | about 520 / 540 (04 base × 0.7, approximate) |
| ARR at month 12 / 36 | about R0.68m / **R2.1m (US$130k)** |
| Year-1 profit before founder pay | about R0 to -R0.25m |
| Year-3 profit before founder pay | **about R1.0m (US$60k)** |
| Peak cash need | **about R300,000-R400,000** (R162,000 plus the extra content costs, most of which fall in Dec-Mar when cash is lowest) |
| Cash to hold | **R400,000 (US$24,000)** |

The same content-cost correction moves the base case's peak cash from R128,000 to about R250,000-R350,000, and the low case's from R272,000 to about R400,000-R500,000, with low-case year-3 profit falling from R0.47m to about R0.4m (my estimates).

### Unit economics (04 base)

| Measure | Value |
|---|---|
| Year-1 marketing + referral commissions + customer success, per new account | about R980 (planning case about R1,400) |
| First-year price (Solo/Practice blend, after the founding period) | R2,790 |
| Payback | under 6 months |
| Renewal | 70%, then 80% |
| Average customer life | about 4.5 years |
| Lifetime value (revenue / after payment, hosting and content) | about R12,500 / R10,500 |
| Infrastructure + payment fees | about 8-11% of revenue at 300-1,000 customers (03, 04; my sum) |

**The limit is the small pool and the founder's selling time in August-October, not the unit economics.**

### Founder income

- **Base (04):** could pay the founder R40,000 a month from year 2 and still end month 36 with about R2.5m cash.
- **Planning (my rough estimate):** could pay R40,000 a month from November 2027, after the first October season's cash is in, and end month 36 with roughly R0.3m-R0.6m. Keep a buffer for the November-July dip each year.
- **Low:** cannot pay the founder within 36 months.

### Exit

- Likely buyers: KYC and AML platforms that want the RMCP layer (eFICA, VerifyNow, nCino KYC, Instarc, SearchWorks), regulatory-reporting firms, legal publishers and practice-software vendors (04). nCino paid US$75m for DocFox in 2024 ([The Digital Banker](https://thedigitalbanker.com/ncino-set-to-acquire-docfox-for-75m/)), which shows global buyers buy South African compliance software, at a far larger scale.
- Bootstrapped SaaS under US$1m ARR sells for about 2.5-4x revenue ([valuation guide](https://beancount.io/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide)).

| Case | ARR month 36 | At 2.5-4x ARR |
|---|---|---|
| Low | R1.12m | R2.8m-R4.5m (US$170k-270k) |
| **Planning** | **about R2.1m** | **about R5.3m-R8.4m (US$320k-510k)** |
| Base | R3.06m | R7.7m-R12.2m (US$460k-740k) |
| High | R5.44m | R13.6m-R21.7m (US$820k-1.3m) |

Seasonality and dependence on one regulator push buyers to the low end of the range.

---

## 11. Regional expansion

**Expand inside South Africa first; regional expansion is weak** (02, 04).

| Option | Size | Notes | When |
|---|---|---|---|
| **Estate agents (item 3)** | 9,695 registrations, +45% | Same duty, portal and most of the product; 31 October deadline. Overlaps the separate estate-agent idea: build one pack, decide which idea owns it. Agencies already pay about R999 a month for compliance software (Realty Comply, unverified) | Months 12-24 |
| **All other accountable institutions** | about 13,500 registrations, mostly financial firms | Only if the FIC extends yearly filing, which it says further directives may do (consultation feedback, para 11). Needs a financial-services module | If and when a directive is issued |
| **Item 20 pack shared with the A1 dealer idea** | 5,581 registrations | Build once for both ideas (03) | v1 (Feb 2027) |
| Namibia | about 780 lawyers (2017) | English, same legal roots, goAML, FIC Namibia sector guidance for lawyers, estate agents and dealers. But no yearly RMCP upload, and its yearly return covers banks only ([FIC Namibia](https://www.fic.na/how-we-do-it/guidance/); [Directive 03 of 2023](https://www.fic.na/wp-content/uploads/2026/03/Directive-03-of-2023-FIA-Compliance-Returns.pdf)). Under R200,000 a year (04's estimate) | Month 24+, low cost |
| Botswana, Kenya, Mauritius | small or different regimes | Different laws and supervisors; no yearly upload trigger | Not before year 3 |

**What travels.** The interview engine, approval log, amendment clock and multi-client dashboard are country-neutral. Only content and the deadline calendar are South African. The same code base can serve the Bosnia AML kit or a similar product elsewhere.

---

## 12. Risks and mitigations

| Risk | Likelihood / impact | Mitigation |
|---|---|---|
| **eFICA's R3,500 builder (Nov 2026)** and VerifyNow's free generator make a "builder" a commodity | High / High | Sell the FIC year, not a generator; lead with the accountant view; price 29% below eFICA; a 20% price cut still leaves R2.6m base ARR. Kill trigger in §13 |
| **nCino/LSSA bundles a cheap builder** for attorneys | Medium / Medium | Focus on accountants, credit providers, dealers and non-nCino sole practitioners; keep law firms under half of sales |
| **Template distrust**: a customer is sanctioned and blames the tool | Medium / High | Visible tailoring; named attorney sign-off per content release; coverage checks; "approval stays with you" wording; liability cap; PI insurance |
| **Content error** spreads to every customer | Low / High | Content as code with golden files; attorney-signed releases; source and date on every clause; founder-only golden-file updates |
| **AI agents change legal text or rules silently** | Medium / High | Golden-file diffs, a review agent, founder review of every merge, attorney sign-off per release |
| **Seasonality**: most demand in Aug-Oct; first full season is 2027 | Certain / Medium | Yearly prepayment; off-season offers (late filers, GN 7B rewrites, new practices, accountants); low fixed costs |
| **Late-filer demand is smaller than hoped** (my inference that many missed 9 Oct 2026 is untested) | Medium / Medium | Test it in the 30 calls; ask the FIC or trade press for 2026 filing numbers |
| **Low typical fines** (about R10,000) cap urgency | High / Medium | Lead with inspection risk, the R175,000 and R7.7m cases, and the s45D "record only" appeal rule |
| **FIC changes the process** or adds a builder to goAML | Low / High | Daily law watch; 30-day update promise; the clocks, portfolio and evidence stay useful without the drafting job |
| **Approval form not accepted** (in-app record versus signed minute) | Medium / Medium | Offer both from day one; ask the attorney and the FIC |
| **Card-only payment** loses EFT-minded buyers | Medium / Medium | Measure at checkout; open a local company and add PayFast Instant EFT if over 25% of qualified buyers ask |
| **Paddle refuses or freezes the account** | Low / Medium | Stripe on the foreign company as back-up; ask Paddle about the category in writing |
| **Consumer-law exposure** (CPA renewal notices, liability notices) | Medium / Low-medium | Renewal notice and cancellation flow built in; South African lawyer reviews the terms |
| **POPIA limits cold e-mail** | Certain / Medium | Partner-led and content-led acquisition; one compliant approach only |
| **Third-party record keeper** duties (s24, Reg 20); hosting abroad | Medium / Low | Ready Reg 20 sheet; one-click export; EU hosting under an operator agreement with s72 terms; South African hosting option |
| **External-company registration** triggered by South African staff | Low / Low | Contractors or an employer-of-record |
| **Exchange rate**: rand revenue, dollar tools | Medium / Low-medium | Review rand prices each July (+5% assumed); keep dollar costs at about R10,000 a month |
| **Founder bandwidth** in the September-October peak | High / Medium | Self-serve flow, webinars not demos, a South African customer-success contractor from mid-2027 |

---

## 13. Milestones and kill criteria

From 04, with three triggers added (eFICA, attorney, Paddle). "Planning" figures are my estimates (04 base × 0.7).

| When | Target (base / planning) | Stop or pivot if |
|---|---|---|
| **Day 30 (Tue 10 Nov 2026)** | 30 conversations; at least 3 pre-orders; attorney signed; Paddle applied | **Kill if fewer than 3 pre-orders from 30 conversations** |
| **Day 45 (Wed 25 Nov 2026)** | 10 paid pilots; content release 1.0 signed; security test passed | **Pause if no FICA attorney will put a name to the content.** Switch to Stripe if Paddle refuses |
| **eFICA launch (Nov-Dec 2026)** | Feature-by-feature comparison done | **Re-plan within 30 days** if eFICA's R3,500 builder already has a multi-entity view, the 10-day clock and an inspection pack: narrow to accountants only, or stop |
| **Day 90 (Sat 9 Jan 2027)** | 25 direct customers, 3 accountant practices | Pivot to accountants only if direct sales are under 10 while accountants show interest |
| **Month 6 (30 Apr 2027)** | 67 direct, 8 practices / about 47 and 6 | **Kill if under 25 direct customers and under 3 practices** |
| **Month 12 (31 Oct 2027)**, after the first full season | ARR about R0.97m / about R0.68m | **Kill or sell the code if ARR is under R0.33m** |
| Nov 2027-Jan 2028 | First renewals: 70% | **Kill if first-year renewal is under 50%** |
| Month 24 (Oct 2028) | ARR about R2.0m / about R1.4m; decide on estate agents and a local company | Hold growth spending if ARR is under R0.75m |
| Month 36 (Oct 2029) | ARR about R3.1m / about R2.1m; exit options open | — |
| Any time | | Over 25% of qualified buyers refuse card payment: open a local company (a payment change, not a kill) |

---

## 14. Open questions to settle first

1. **eFICA's builder at launch.** Does it handle many entities, the 10-day rule, Directive 10 and an inspection pack? How many of its 500+ clients take it? (Its site returned HTTP 503 on 10 Oct 2026.)
2. **Directive 12 details for the FIC** (one compliance query): 10 or 90 days for amendments; calendar or business days; whether weekend deadlines move; file-size and format limits.
3. **Approval form.** Is an in-app record (name, capacity, time, document hash) enough under GN 7B paras 181-181L, or do inspectors expect a signed minute?
4. **May an accountant upload a client's RMCP from its own goAML user?** Directive 12 is silent; PCC 60 bans third-party submission only for the RCR. This shapes the accountant plan.
5. **Which FICA attorney**, at what fixed fee, and on what terms for a named content partnership or retainer?
6. **Paddle approval** of a compliance-document tool, and whether the new-practice starter counts as software.
7. **Will buyers pay before they are inspected?** Test with 10 sole practitioners, 5 accounting practices, 5 dealers and 5 credit providers. Did many miss 9 October 2026?
8. **Share of buyers who refuse card payment** (decides the local company).
9. **Real firm counts per item.** How many of the 21,034 item 1 registrations are active firms? How many of the 8,147 NCR credit providers must register under item 11 after PCC 23A?
10. **Next RCR:** when, and on which platform? This decides the RCR workbook.
11. **Our own legal status:** third-party record keeper (s24, Reg 20)? Information Officer for a foreign vendor? External-company test for online sellers (a one-page opinion, about R5,000)?
12. **LPC Code of Conduct** on fee sharing and touting, before any revenue share with partner attorneys.
13. **Is Exemption 10 for litigation-only attorneys still in force?**
14. **Partner fees** for co-hosted webinars and ads (Tax Faculty, SAIPA, CASA, NADA, GoLegal, De Rebus).
15. **Overlap with the A1 dealer and estate-agent ideas:** who owns the item 20 and item 3 packs.

---

## 15. Next steps this week (Mon 12 - Fri 16 Oct 2026)

1. **Decide to run the 8-week test** and block the time. Hold R400,000 of cash for the first year.
2. **Book 30 discovery calls**: 10 sole practitioners, 8 accountants, 5 credit providers, 4 dealers, 3 consultants. Ask whether they filed by 9 October, what they used, and what they would pay.
3. **Shortlist and brief 3 FICA attorneys.** Ask for a fixed fee for the items 1 and 2 clause book (two rounds and a mock inspection), and for their view on open questions 2-4 and 13.
4. **Apply to Paddle** and ask in writing about the product category and the starter add-on. Open a Stripe account on the founder's company as back-up.
5. **Put up the landing page**: the free "which FIC deadline is mine?" tool, a waitlist with POPIA-compliant consent, and the founding offer at R1,490.
6. **Freeze the spec by Friday 16 October**: data model, content schema, deadline-rule interface, Word template, 8 test firms, and a CLAUDE.md with the rules for the agents.
7. **Collect 5-10 real, redacted RMCPs** as test material.
8. **Send the FIC a compliance query** on 10 or 90 days, calendar days, weekend deadlines and third-party uploads.
9. **Set an alert for eFICA's builder launch** and plan the comparison.
