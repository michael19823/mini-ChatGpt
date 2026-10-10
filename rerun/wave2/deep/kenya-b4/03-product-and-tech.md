# Kenya NDTCP pack: product, technical design and development plan (deep dive 03)

Part 3 of the Kenya B4 deep dive. Date: 10 Oct 2026. Status: IN PROGRESS.

Builds on [the B4 report](../reports/kenya-b4.md), [01 law and requirements](01-law-and-requirements.md) and [02 market and competition](02-market-and-competition.md). "Duty #58" means row 58 of the duty table in the 01 file. "My estimate" marks numbers I derived. "(unverified)" marks facts I could not confirm. KES 129 = USD 1 is assumed, as in the other files (unverified).

Working name in this file: **Kibali** (Swahili for "permit"). It is a placeholder.

## Summary

(to be finalised last)

## Users and jobs

### Buyers and their situations

There are four buyer situations. Each one needs a different first screen.

| Situation | Who | Count (from file 02) | What they buy first |
|---|---|---|---|
| **A. Licensed DCP, now "deemed licensed"** | 281 lenders on CBK's directory | 281 | An "LN 191 alignment" pack (rework policies), then the recurring registers and calendar |
| **B. Pending DCP applicant** | Applied since 2022, stuck on documents | about 300-450 still live (estimate) | Application kit: fix the dossier and answer CBK's queries |
| **C. Offline lender applying by about 29 Mar 2027** | Logbook, asset-finance, credit-only, P2P, incorporated moneylenders | 300-1,500 (low confidence) | Scope and tier check, then the application kit (licence or registration) |
| **D. Adviser** | Small law firms, consultants, accountants | 15-40 firms | Multi-client workspace, then white-label packs |

Sources for the counts: [02 market file](02-market-and-competition.md), which counted the [CBK directory of 29 Sep 2026](https://www.centralbank.go.ke/wp-content/uploads/2026/09/Directory-of-Digital-Credit-Providers-September-2026.pdf).

### User roles inside one lender

Most buyers are small. 40% of licensed lenders list a Gmail, Yahoo, Hotmail or Outlook address with CBK ([02 file](02-market-and-competition.md)). So one person often holds several roles. The product must work for a one-person compliance function and scale to five or six users.

| Role | Typical person | Jobs | Rights |
|---|---|---|---|
| **Owner / director** | Founder, board member | Approve policies (board), sign declarations, pay CBK and us, see status | All, plus billing and user management |
| **Compliance lead** | Compliance officer, CEO, or company secretary in small firms | Run the dossier, policies, calendar and registers; answer CBK | All operational rights |
| **MLRO** | Money Laundering Reporting Officer. Must be management level, not the CEO or internal auditor ([01 file, duty #36](01-law-and-requirements.md)) | AML policy, FRC annual report, MLRO notices | AML section; read the rest |
| **Complaints handler** | Customer-care staff | Log complaints, acknowledge, resolve, record outcome | Complaints register only |
| **Product / credit manager** | Head of credit or product | Raise product and pricing changes, keep product terms and KIDs | Products and change log |
| **Person (director, CEO, senior officer, 10% shareholder)** | Each "fit and proper" person | Fill their own fit-and-proper data once; upload police, KRA and CRB documents | Own record only, via a magic link, no full account |
| **Adviser** | Advocate, consultant or accountant serving several lenders | Set up clients, prepare packs, review, hand over | Rights granted per client; switch between clients |
| **Reviewing advocate (partner)** | Our partner advocate for the premium tier | Review a lender's generated policy set and sign off | Read and comment on that client's policies |
| **Read-only reviewer** | External auditor, board member, or a CBK examiner during an inspection | See an evidence pack | Time-limited, read-only link to a chosen pack |
| **Our content editor** | Founder plus contract advocate | Maintain the requirement library, questionnaire and clause templates | Content admin (not customer data) |

### Jobs to be done (in the buyer's words)

1. "Tell me if I need a licence or a registration, what it costs and by when." (Duty #1-2, #9.)
2. "Give me every document CBK wants, in the right form, so my application does not sit 'pending documentation'." CBK says most stuck applicants are "largely awaiting the submission of requisite documentation" ([CBK press release, Jul 2026](https://www.centralbank.go.ke/uploads/press_releases/632621862_Press%20Release%20-%20Licensing%20of%20Digital%20Credit%20Providers%20-%20July%202026.pdf)).
3. "Chase my four directors for their good-conduct certificate, KRA tax compliance certificate and CRB report, and warn me before the CRB report is older than three months." CBK wants a CRB report "not more than three months since issuance" ([CBK A-Z of licensing](https://centralbank.go.ke/wp-content/uploads/2024/11/Procedures-for-licensing-Digital-Credit-Providers-Revised-October-2024.pdf)).
4. "Write my six policies so that they meet LN 191 and fit my business, not a bank's." (Duty #39-49.)
5. "I am already licensed. Show me what LN 191 changed and fix my existing policies." (Situation A.)
6. "Never let me miss 31 December." The annual fee and the annual compliance return are both due then; late payment costs double or KES 1m ([Tech-ish](https://tech-ish.com/2026/10/04/cbk-raises-licensed-lenders-annual-fee-to-kes-500000-from-kes-20000/); [01 file, duties #10-11](01-law-and-requirements.md)).
7. "Log every complaint and prove that we met the 7-day, 48-hour and 30-day rules." (Duty #58.)
8. "Before we change an interest rate, prepare the CBK request, and do not let us go live until CBK approves and 30 days' notice has run." (Duties #21-23.)
9. "Do not let collections list a borrower with a CRB before the 30-day notice has run." (Duty #57.)
10. "When CBK inspects, give me one folder with the evidence." (Duty #69.)
11. Adviser: "Run 15 client files from one screen and hand each client a clean pack."

## Feature map

Rules for the cut:
- The MVP must sell before the 29 Mar 2027 deadline and before the 31 Dec 2026 fee date. So the MVP is the **application kit** plus the **calendar** and the two registers that LN 191 made urgent (complaints and product/rate changes).
- Nothing in the MVP needs an integration with a CBK system. CBK's portal takes uploads ([CBK A-Z](https://centralbank.go.ke/wp-content/uploads/2024/11/Procedures-for-licensing-Digital-Credit-Providers-Revised-October-2024.pdf)), so the product only has to produce the right files.
- Every rule taken from the 2025 draft carries a "draft-based" flag. It can be switched to "LN 191 confirmed" once the gazetted text is read ([01 file](01-law-and-requirements.md)).

| # | Feature | MVP (wk 1-8) | v1 (Dec 2026-Mar 2027) | Later | Duties covered |
|---|---|---|---|---|---|
| 1 | **Scope and tier checker** (public, no login): in or out of scope; route away banks, MFIs, SACCOs, hire purchase, credit guarantors and NDTMBs; licence vs registration at KES 20m; fees; deadline countdown | Yes | Save result to an account | | #1-2, #9 |
| 2 | **Company profile** (one questionnaire feeds every document) | Yes | | | all |
| 3 | **People register** (directors, CEO, senior officers, 10% shareholders, MLRO) with roles and dates | Yes | Change notices to CBK (30 days before) | | #6, #28, #36 |
| 4 | **Person portal** (magic link): each person fills fit-and-proper data, uploads police, KRA, CRB, ID, PIN, CV; prefilled form for swearing | Yes | Reminders by SMS | | #6 |
| 5 | **Application dossier builder**: checklist by tier and situation (new entrant, existing lender, pending DCP, conversion); status, owner, evidence, expiry; "ready to submit" gate; ZIP in CBK portal order | Yes | CBK query log with the 3-month and 14-day show-cause clocks | | #3-6, #9 |
| 6 | **Policy generator**: six policies (full or brief by tier), complaints procedure, pricing-model sheet, KID per product, board resolution; coverage matrix (each legal minimum item mapped to a clause); versions and approvals; DOCX and PDF | Yes | Gap analysis of a lender's existing policies (AI-assisted, human-reviewed) | Policy "diff" when the law changes | #39-49 |
| 7 | **Compliance calendar and reminders**: 31 Dec fee and annual return; about 31 Oct agent renewal; ODPC 24-month renewal; AML risk assessment every 2 years; annual consumer-protection policy review; document expiry; 29 Mar 2027 | Yes (e-mail) | WhatsApp or SMS digests; iCal feed | | #10-19 |
| 8 | **Complaints register** with the 7-day, 48-hour and 30-day clocks, ageing, CSV/XLSX export | Yes | Public complaint form per lender (link and QR); SMS acknowledgement; CBK return in the official layout once obtained | LMS import | #58 |
| 9 | **Product and pricing change log**: change request, CBK letter draft, approval date, 30-day notice tracker, go-live gate | Yes | Customer-acceptance log for increases | | #21-23 |
| 10 | **Multi-organisation access** (one login, several lenders) | Yes (basic switcher) | Full adviser dashboard, white-label PDFs, client billing | | adviser channel |
| 11 | **Billing** (card, through a merchant of record) | Yes | Annual plans, invoices in KES | M-Pesa | - |
| 12 | Agent register, agent contract checklist, annual renewal pack | | Yes | | #13, #26 |
| 13 | Notices register: channels, paybills and apps, branches, outsourcing, capital injections, IT system change; letter templates | | Yes | | #24-34 |
| 14 | CRB pre-listing notice tracker (import a CSV of loans in arrears; block listing before day 30; KES 1,000 floor) | | Yes | LMS API | #57 |
| 15 | Annual compliance certification workpaper (evidence per certification, draft return) | | Yes (before Dec 2027) | | #11 |
| 16 | AML pack: MLRO notices, risk-assessment template, FRC annual compliance report draft ([FRC ACR template](https://www.icpak.com/wp-content/uploads/2024/12/ACR-Template-2024-Vers.-7.docx)) | | Yes | Sanctions screening via a partner | #18-19, #36-37, #42 |
| 17 | AI and automated decisions register (LN 191 reg 60) | | Yes | | #49 |
| 18 | Evidence and inspection pack (ZIP with index) | Basic export | Full pack with cross-references | Read-only inspection room | #69 |
| 19 | BSA return pre-check (validate a return file before upload) | | | When CBK templates are obtained | #12 |
| 20 | Staff training module (conduct, debt collection, data protection) with quiz and log | | | Yes | #16, #41 |
| 21 | Uganda and Tanzania legal layers; Swahili UI | | | Yes | - |

Why this cut:
- Features 1-11 match what a lender must have at application and what LN 191 made urgent for the 281 licensed lenders.
- The application window closes about 29 Mar 2027 ([01 file](01-law-and-requirements.md)). Features 12-17 are recurring and can follow in v1, before the next 31 Oct and 31 Dec dates.
- BSA returns (feature 19) are last. CBK's portal is free, return layouts are not public, and loan-management vendors already claim reporting ([02 file](02-market-and-competition.md)).

## Key flows

(drafting)

## Screens

## Data sources and integrations

## Data model

## Architecture and stack

## Security, privacy and liability

## Hosting and running costs

## Development plan

## Budget

## Risks

## Open questions

## Sources
