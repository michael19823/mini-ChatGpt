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

### Flow 1: Free check to sign-up (5 minutes)
1. A lender finds the public checker through a law-firm alert, LinkedIn or a press story on the 29 Mar 2027 deadline.
2. It answers 6-8 questions: Are you a company? Do you lend your own money to the public? Are you a bank, microfinance bank, SACCO or credit guarantor? Is the credit only "incidental" to a sale? Is it hire purchase under the Hire-Purchase Act? What is your initial capital, borrowings and loan book? Are you already a licensed DCP or a pending applicant? ([01 file, "Who is obliged"](01-law-and-requirements.md)).
3. The result card says: in scope or not, licence or registration, fees (KES 100k application; KES 500k or 250k a year), the deadline, and the list of documents. Every rule shows a "draft-based" or "LN 191 confirmed" badge.
4. The lender creates an account to save the result and buys the kit.

### Flow 2: Application kit for an offline lender (the main flow)
1. **Profile (60-90 minutes, one sitting or several).** About 80 questions in plain English: business model, products, channels, rates and fees, collection practice, data held, governance, AML set-up. Each answer feeds the policies, the pricing sheet and the KIDs.
2. **Invite people (5 minutes).** The compliance lead adds each director, the CEO, senior officers and every 10% shareholder. Each gets a magic link.
3. **People fill their part (20-40 minutes each, on a phone).** Each person gives consent, enters fit-and-proper data, and uploads their ID, PIN certificate, CV, academic certificates, police clearance, KRA tax compliance certificate and CRB report.
4. **Critical path warning.** A police clearance takes 2-6 weeks after fingerprinting and costs KES 1,050 ([Kenyans.co.ke](https://www.kenyans.co.ke/news/56752-certificate-good-conduct-how-apply); [People Daily](https://peopledaily.digital/insights/what-is-a-police-clearance-certificate-and-how-to-apply-in-kenya/amp)). A CRB report must be less than 3 months old at submission ([CBK A-Z](https://centralbank.go.ke/wp-content/uploads/2024/11/Procedures-for-licensing-Digital-Credit-Providers-Revised-October-2024.pdf)). The calendar works backwards from the target submission date. It says "apply for police clearance by X" and "get the CRB report no earlier than Y".
5. **Policies (generated instantly, reviewed in 1-3 hours).** The app generates the policy set for the tier: six full policies for a licence; for a registration, a full credit policy and code of conduct plus four briefs ([01 file, tier table](01-law-and-requirements.md)). It also produces the complaints procedure, the pricing-model sheet, a KID per product, the 3-5 page business brief and a board resolution. The coverage view shows each legal minimum item and the clause that meets it.
6. **Optional advocate review (3-5 working days).** In the premium tier, a partner advocate reviews the set and signs off (see "Liability").
7. **Board approval.** The app produces the board resolution. The lender uploads the signed minute.
8. **Forms.** The app pre-fills the fit-and-proper forms (NDTCP 2 and 3) from the person data, as PDFs to print, sign and swear before a Commissioner for Oaths ([01 file, duty #6](01-law-and-requirements.md)).
9. **Ready gate.** The dossier turns green only when every item is present, in date and approved. Expiry is checked against the planned submission date.
10. **Submit.** CBK's process is an online user profile on its portal, an online application form that is printed and signed, and scanned uploads of the forms and documents. The originals go to CBK with the fee ([CBK A-Z](https://centralbank.go.ke/wp-content/uploads/2024/11/Procedures-for-licensing-Digital-Credit-Providers-Revised-October-2024.pdf)). The app gives a ZIP in the portal's order and a "copy sheet" with every form field. The lender types the form into the portal itself; we never log in to CBK for the lender.
11. **After submission.** The lender records the date and CBK's reference. Any CBK query is logged against checklist items with its due date. CBK may discontinue an application after 3 months' silence plus a 14-day show-cause notice ([01 file, duty #4](01-law-and-requirements.md)), so the app tracks both clocks (v1).

### Flow 3: Pending DCP applicant
1. Sign up as "pending applicant". Enter the application date and the CBK reference.
2. Upload CBK's latest query letter. The founder or adviser maps each query to checklist items (manual in the MVP).
3. Fix the gaps with Flow 2, steps 3-10. The app shows only what is missing.

### Flow 4: Licensed DCP aligning with LN 191
1. Sign up as "licensed". Pick the company from the CBK directory to pre-fill name, licence date and contacts ([CBK directory](https://www.centralbank.go.ke/wp-content/uploads/2026/09/Directory-of-Digital-Credit-Providers-September-2026.pdf)).
2. MVP: a guided self-check ("Does your credit policy state the default period after which a loan is non-performing?"). One question per legal minimum item. It gives a gap list.
3. v1: upload the existing policies. An AI pass maps each requirement to the lender's text and flags gaps. A person (the lender or an adviser) confirms every flag before the report is final.
4. Regenerate or patch the policies, then board approval.
5. Turn on the calendar and the registers. The first hard date is the 31 Dec 2026 fee and annual return.

### Flow 5: A complaint
1. A staff member logs the complaint: received date and time, channel (oral or written), complainant, subject, and the people involved. The field list follows the draft rules ([01 file, duty #58](01-law-and-requirements.md)).
2. Clocks start: acknowledge within 7 days; if an oral complaint is still open after 48 hours, send a written confirmation that it is pending; resolve within 30 days. The app does not yet know whether these are calendar or working days, so the MVP counts calendar days, which is the stricter reading (unverified).
3. The handler records investigation steps, findings, the reply (date and manner) and the outcome. The app reminds the handler to tell the customer of the right to go to CBK.
4. Overdue items turn red on the dashboard and go into the daily digest.
5. The register exports to CSV or XLSX for the CBK complaints report. The exact CBK layout is not public (unverified), so the export follows the field list until CBK's template is obtained.

### Flow 6: An interest-rate or product change
1. The product manager raises a change request: product, what changes, old and new values, reason.
2. The app drafts the letter to CBK asking for prior written approval (LN 191 regs 26 and 55, as reported by [Tech-ish](https://tech-ish.com/2026/10/04/cbk-raises-licensed-lenders-annual-fee-to-kes-500000-from-kes-20000/)).
3. The lender sends it and uploads CBK's approval when it arrives.
4. The app drafts the 30-day customer notice. Increases in charges or limits also need the customer's acceptance ([01 file, duty #23](01-law-and-requirements.md)).
5. Go-live gate: the change can be marked "live" only after the approval date and after 30 days from the notice date. The policy set, pricing sheet and KID update automatically to a new version.

### Flow 7: The year-end cycle
- **By about 31 Oct:** apply to renew all agent approvals (v1 agent register; [01 file, duty #13](01-law-and-requirements.md)).
- **November:** the annual compliance return workpaper opens. Each certification gets its evidence (v1).
- **By 31 Dec:** pay the annual fee and file the annual return. Reminders go out at 60, 30, 14, 7 and 1 days.
- **January:** the FRC annual compliance report. One compliance firm says it is due by 31 Jan ([FNJ](https://fnjassociates.co.ke/?p=2097)) (unverified).

### Flow 8: Adviser with many clients
1. The adviser opens an adviser workspace and creates or is invited to client organisations.
2. The client list shows readiness, the next deadline and red flags for each client.
3. The adviser fills profiles, reviews policies and exports packs. The client keeps ownership of its data and can remove the adviser.

### Flow 9: CBK inspection
1. The lender picks a scope (licence file, complaints for a period, product approvals, agents).
2. The app builds a ZIP with an index and a cover page. Each document shows its version and approval date.
3. Optional (later): a time-limited read-only link for the examiner.

## Screens

Screens are server-rendered pages. They should work on a phone for the person portal and on a laptop for everything else.

1. **Public checker.** One question per step, progress bar, result card with tier, fees, deadline countdown and the document list. "Save and continue" button.
2. **Onboarding wizard.** Choose a situation (licensed, pending, new applicant, adviser), company basics, tier, plan and payment.
3. **Home dashboard.** A deadline strip (days to 29 Mar 2027 and to 31 Dec), a readiness score for the dossier, tasks due this week, red flags (for example "CRB report for J. Mwangi expires before your submission date"), overdue complaints, and changes awaiting CBK.
4. **Dossier checklist.** Rows grouped in CBK portal order. Each row has status, owner, evidence file, issue and expiry dates, legal basis and a "draft-based / confirmed" badge. Filters by person and status. Buttons: "Export pack", "Copy sheet".
5. **People.** A list with each person's roles and document status. The detail page shows documents with expiry badges, invite status, consent record and a preview of the pre-filled NDTCP 2 or 3.
6. **Person portal (mobile).** Consent screen with plain-language risks, sections of the form, phone-camera upload, and a "done" page. No password.
7. **Questionnaire.** Sections with progress, help text, "why we ask" and the legal basis for each question. Answers save as the user types.
8. **Policy library.** Each document with status (draft, reviewed, board-approved), version, coverage and missing items, and buttons to download DOCX or PDF and compare versions.
9. **Coverage matrix.** Requirements in rows, with the clause that meets each one and its source status.
10. **Calendar.** A list view and a month view. Each obligation shows its legal basis, an evidence slot and a "mark done" button. iCal feed (v1).
11. **Complaints register.** A table with clock chips (acknowledgement, 48 hours, 30 days) and ageing buckets. The detail page has a timeline. Export button.
12. **Change log.** Change requests with status, the CBK letter draft, the approval upload, the notice tracker and the go-live gate.
13. **Products.** Each product with terms, pricing parameters and KID.
14. **Evidence pack builder.** Pick a scope and get a ZIP with an index.
15. **Adviser home.** Client list with readiness, next deadline and flags, plus a client switcher.
16. **Settings.** Users and roles, MFA, billing, data export and deletion, our data-processing agreement, and the generator for the lender's outsourcing notice to CBK.
17. **Content admin (internal).** Requirement library, clause templates, questionnaire versions and release notes. The advocate's sign-off is recorded per release.

## Data sources and integrations

**Bottom line.** No official system offers an API we can use. CBK's licensing portal takes an online form plus scanned uploads. Its returns system takes uploaded templates. Registers (BRS, KRA, police, CRBs, ODPC) are web services for the person concerned. So the MVP integrates with nothing official. It produces the right files and tracks dates. This is also what makes a 3-week MVP possible.

### At a glance

| Source | What we use it for | Access | Uploads or manual entry? | Licence / cost | Use in product |
|---|---|---|---|---|---|
| **CBK licensing portal** (`gdi.centralbank.go.ke`) | Name approval (new entrants) and the licence application | Web portal with a user profile. Online application form, printed and signed. Scans of forms and documents uploaded. Originals delivered to CBK with the fee ([CBK A-Z](https://centralbank.go.ke/wp-content/uploads/2024/11/Procedures-for-licensing-Digital-Credit-Providers-Revised-October-2024.pdf)) | **Both:** form fields typed in; documents uploaded as scans | Free | MVP: ZIP in portal order plus a field-by-field copy sheet. Whether the same portal and steps apply to NDTCPs under LN 191 is (unverified) |
| **CBK data-submission test** | Stage 3 of licensing: the applicant must test its regulatory "data submission" capability using APIs "with guidance from CBK" ([CBK A-Z](https://centralbank.go.ke/wp-content/uploads/2024/11/Procedures-for-licensing-Digital-Credit-Providers-Revised-October-2024.pdf)) | API; specification not public (unverified) | API from the lender's loan system | Free | Not ours. Checklist item only. The lender's loan-system vendor does this |
| **CBK BSA returns system** | Periodic returns | Download template, complete it, upload (CM Advocates training notice, via search summary in the [B4 report](../reports/kenya-b4.md)) | **Upload** of completed templates | Free | Later: pre-check a return file before upload, once the templates are obtained |
| **CBK Directory of DCPs** (PDF) | Lead list; pre-fill licensed lenders' details | PDF, updated with each licensing batch ([Sep 2026 edition](https://www.centralbank.go.ke/wp-content/uploads/2026/09/Directory-of-Digital-Credit-Providers-September-2026.pdf)) | n/a | Public | MVP: parse with a PDF table extractor into a lookup table, refresh after each batch |
| **CBK legislation page, press releases, Kenya Gazette** | Watch for the LN 191 text, guidance notes and circulars | Web pages and PDFs ([CBK legislation page](https://www.centralbank.go.ke/policy-procedures/legislation-and-guidelines/)) | n/a | Free | A weekly page-change check plus manual reading. Every change goes through the content release process |
| **Kenya Law / Laws.Africa** | Consolidated text of LN 191 and the CBK Act | The Kenya Law page for LN 191 ([KL listing](https://new.kenyalaw.org/akn/ke/act/ln/2026/191/eng@2026-09-29)) returned 403 to the law research ([01 file](01-law-and-requirements.md)). Laws.Africa sells a Content API with update webhooks | n/a | Laws.Africa: free for most non-commercial use; commercial "Scale" plan ZAR 6,700 per knowledge base per country per month, full legislation API from ZAR 42,000 per country per month; content under CC BY-NC-SA ([Laws.Africa pricing](https://developers.laws.africa/get-started/pricing); [Content API](https://laws.africa/api/detail)) | Too expensive for year 1. Read Kenya Law by hand and buy the gazetted LN from the Government Printer or through the partner advocate |
| **BRS (Business Registration Service) on eCitizen** | Proof of incorporation, directors and shareholders (official search, formerly "CR12") | Web, eCitizen login; official search fee KES 650; instant for verified companies, 3-5 days otherwise ([BRS fee schedule](https://brs.go.ke/?p=567); [BRS guide](https://brs.go.ke/wp-content/uploads/2023/07/How-to-Apply-OS.pdf)) | n/a; no public API found (unverified) | Fee per search | MVP: lender uploads the official search; app records its date and compares people with the people register |
| **KRA iTax TCC checker** | Check a tax compliance certificate | Public web check by certificate number; shows PIN, holder name and status ([KRA iTax e-services brochure](https://www.kra.go.ke/images/publications/iTax-eServices.pdf)) | Manual check | Free | MVP: deep link, user records "checked on" date. Validity 12 months per third-party guides ([Faidi HR](https://faidihr.com/blog/how-to-check-your-kra-compliance-certificate-status-online)) (unverified) |
| **Police clearance (DCI, on eCitizen)** | Good-conduct evidence for each person | Apply online, fingerprinting in person; KES 1,050; 2-6 weeks; valid 12 months per press ([Kenyans.co.ke](https://www.kenyans.co.ke/news/56752-certificate-good-conduct-how-apply); [Eastleigh Voice](https://eastleighvoice.co.ke/huduma%20kenya/213099/kenyans-can-now-get-police-clearance-certificates-at-select-huduma-centres)) | Person uploads a scan | Fee paid by the person | MVP: expiry = issue + 12 months; lead-time warning. No online verification found (unverified) |
| **CRB reports** (licensed bureaus) | Credit report for each person | The person requests a report from a licensed CRB | Person uploads | Small or free (unverified) | MVP: expiry = issue + 3 months, as CBK requires ([CBK A-Z](https://centralbank.go.ke/wp-content/uploads/2024/11/Procedures-for-licensing-Digital-Credit-Providers-Revised-October-2024.pdf)) |
| **ODPC registration** | The lender's data-controller certificate (required for financial services regardless of size) | Online application on the ODPC website; certificate valid 24 months; fee KES 4,000 / 16,000 / 40,000 by size ([ODPC FAQ](https://www.odpc.go.ke/faqs/); [01 file, duty #7](01-law-and-requirements.md)) | n/a | Fee | MVP: upload certificate, renewal reminder at 24 months |
| **FRC goAML** | MLRO registration, STRs, annual compliance report (ACR) | goAML web; ACR is a Word template sent through the goAML message board ([01 file, duty #18](01-law-and-requirements.md); [ACR template](https://www.icpak.com/wp-content/uploads/2024/12/ACR-Template-2024-Vers.-7.docx)) | Manual | Free | v1: ACR draft from the template; filing stays manual |
| **Transactional e-mail** (Postmark or similar) | Invitations, reminders, digests | API | n/a | About USD 15 a month for 10,000 e-mails (third-party price lists; [automationatlas](https://automationatlas.io/answers/postmark-pricing-explained-2026/)) (unverified) | MVP |
| **SMS** (Africa's Talking or a local aggregator) | Reminders to people; complaint acknowledgements | API | n/a | About KES 0.50-0.80 per SMS (third-party estimate, [HelloDuty](https://helloduty.com/blogs/how-to-send-bulk-sms-in-kenya-effectively)) (unverified) | v1 |
| **Card billing** (merchant of record such as Paddle) | Subscriptions and kit purchases | Hosted checkout and webhooks | n/a | Headline 5% + USD 0.50 per transaction (third-party, [Dodo Payments](https://dodopayments.com/blogs/paddle-fees-explained)) (unverified) | MVP. Payment details are in the company and payments file |
| **Claude API** (Anthropic) | v1 gap analysis of a lender's existing policies | API | n/a | Claude Sonnet 5.5 USD 2 / 10 per million input / output tokens; Claude Opus 5.5 USD 4 / 20; batch processing at half price ([Anthropic pricing](https://platform.claude.com/docs/en/about-claude/pricing); figures from Anthropic's model table dated 6 Oct 2026) | v1 |
| **Loan-management systems** (Loandisk, SuperLMS, Tunza, others) | Complaints, loans in arrears for CRB notices | CSV first; APIs later (unverified per vendor) | Upload | n/a | v1 CSV import; later API |

### File formats the product produces

| Output | Format | Why |
|---|---|---|
| Policies, procedures, business brief, board resolution | DOCX (editable) and PDF | Lenders and advocates edit in Word; CBK receives scans or PDFs |
| Fit-and-proper forms NDTCP 2 and 3, declarations | PDF for print, sign and swear | CBK wants executed forms scanned and originals delivered ([CBK A-Z](https://centralbank.go.ke/wp-content/uploads/2024/11/Procedures-for-licensing-Digital-Credit-Providers-Revised-October-2024.pdf)) |
| Dossier | ZIP with numbered files and an index (PDF and CSV) | Matches the portal upload order |
| Copy sheet | PDF and HTML | Lender types the online form fields from it |
| Registers | XLSX and CSV | CBK returns and inspections |
| Calendar | ICS feed (v1) | Outlook and Google Calendar |

### Content sources (the "legal layer")

- The **requirement library** starts from the duty table in the [01 file](01-law-and-requirements.md) (69 rows when this was written). Each row becomes one or more requirement records with a legal basis and a source status (draft, press report, LN 191 confirmed).
- The **clause library** is drafted by an AI content agent from those requirements and reviewed line by line by a Kenyan advocate. Only advocate-approved clauses ship.
- **Form layouts** for NDTCP 1-3 come from the draft's First Schedule ([CBK draft](https://www.centralbank.go.ke/wp-content/uploads/2025/08/Draft-Central-Bank-of-Kenya-Non-Deposit-Taking-Credit-Providers-Regulations-2025.pdf)). They must be checked against the gazetted forms.

## Data model

### Main entities

| Entity | Key fields | Notes |
|---|---|---|
| `Organisation` | name, registration number, KRA PIN, CBK status (licensed / pending / new / registered), tier (licence / registration), licence date, CBK reference, situation, capital, borrowings, loan book (for the KES 20m test) | The tenant. Every other customer row carries `organisation_id` |
| `User`, `Membership` | e-mail, MFA; membership role per organisation (owner, compliance, MLRO, complaints, product, adviser, reviewer) | One user can belong to many organisations (advisers) |
| `AdviserFirm` | name, billing, client list | v1 white-label settings |
| `Person` | name, ID number (encrypted), PIN (encrypted), contacts, roles (director, CEO, senior officer, shareholder %, MLRO), start and end dates, consent record | "Fit and proper" people |
| `PersonForm` | answers to NDTCP 2 or 3 sections (JSON, encrypted), status, generated PDF | Kept separate so it can be deleted after the licence decision |
| `Document` | type (police, TCC, CRB, ID, PIN, CV, certificate, ODPC, official search, audited accounts, minute ...), file key, issue date, expiry date (computed by type), checked-on date, uploaded by, hash | Expiry rules: CRB 3 months; police 12 months; TCC 12 months (unverified); ODPC 24 months |
| `Requirement` (content) | id, title, legal basis, source status, applies to (tier, situation), kind (dossier item / policy content / recurring / event), deadline rule, evidence types, help text, content version | Lives in the repository as YAML and is loaded into the database per release |
| `DossierItem` | organisation, requirement, status, owner, linked documents, N/A reason | The checklist |
| `Questionnaire`, `Answer` | question id, version, value | Answers drive policies and KIDs |
| `ClauseTemplate` (content) | id, policy type, text template, requirements met, conditions (when to include), advocate approval, content version | |
| `PolicyDocument`, `PolicyVersion` | type, version, generated file, answers snapshot, content version, status, board-approval minute, reviewer sign-off | Every version is immutable |
| `Product`, `PricingParameter`, `KID` | product terms; components (cost of funds, risk premium, fees); APR; KID version | |
| `ChangeRequest` | product, change type, old and new values, reason, CBK letter, submitted date, CBK decision and date, notice date, acceptance needed, effective date, status | Go-live gate in code |
| `Complaint`, `ComplaintEvent` | received at, channel, complainant (encrypted), subject, persons involved, investigation steps, findings, reply date and manner, outcome, pending reasons, time taken; computed due dates | Field list follows the draft ([01 file, duty #58](01-law-and-requirements.md)) |
| `Agent`, `Outsourcing`, `Notice` (v1) | agent identity, location, contract checklist, CBK notice date, renewal; provider, services, CBK-access clause; notice type, due date, sent date | |
| `Obligation` | organisation, requirement, due date, status, evidence, completed by | Generated by the deadline engine |
| `Reminder` | obligation, channel, send time, sent | |
| `CbkQuery` (v1) | received date, text, linked dossier items, response due, responded | |
| `EvidencePack` | scope, generated file, created by, share link and expiry | |
| `AuditEvent` | who, what, when, organisation, object, before/after hash, previous-event hash | Append-only, hash-chained |
| `Subscription` | plan, provider ids, status | From billing webhooks |

### The deadline engine

Each requirement has one deadline rule. Four kinds cover every duty in the 01 file:
- **Fixed annual date:** 31 Dec (fee, annual return); about 31 Oct (agent renewal).
- **Every N months from an event:** ODPC certificate 24 months; AML risk assessment 24 months; consumer-protection policy review 12 months.
- **Relative to an event, before it:** 30 days' notice to CBK before a new channel, agent, outsourcing, branch or people change; 30 days' customer notice before a product change.
- **Relative to an event, after it:** complaint clocks (7 days, 48 hours, 30 days); MLRO notice within 14 days; CBK review request within 14 days.

Weekend and holiday handling is a per-rule setting. Until the LN 191 text is read, the engine uses calendar days and never moves a due date later (my design choice; unverified against the text).

### Content release process

1. The content agent edits requirement YAML and clause templates in a branch.
2. Automated checks run: every requirement marked "policy content" maps to at least one clause; every clause has a legal basis; golden-file tests render sample lenders.
3. The advocate reviews the diff and signs the release in the content admin.
4. Customers see "What changed" with each release. Their documents show a "law as at" date and a "regenerate" button.

## Architecture and stack

### Recommendation: one plain monolith

A solo founder with AI agents needs few moving parts, strong conventions and code that agents can test.

| Layer | Choice | Why |
|---|---|---|
| Language and framework | Python with Django (current LTS) | Built-in admin for the content team, mature auth, migrations and forms. Agents write it well. One process |
| UI | Server-rendered templates with HTMX and a small amount of Alpine.js; Tailwind CSS | No separate front-end build to coordinate between agents; fast pages on mobile networks |
| Database | PostgreSQL (managed) | Row-level security as a second guard for tenancy; JSON fields for form answers |
| Background jobs | A Postgres-backed job queue (for example Procrastinate or django-q2) | Reminders, PDF rendering and pack building without running Redis |
| Documents | DOCX from Word templates with docxtpl; PDF through Gotenberg (a LibreOffice converter in Docker) | The advocate edits templates in Word; one PDF engine |
| Files | S3-compatible object storage, encrypted at rest, served through short-lived signed URLs; ClamAV virus scan on upload | |
| Auth | django-allauth with TOTP MFA (WebAuthn later); single-use magic links for people | |
| E-mail and SMS | Postmark (MVP); Africa's Talking or another aggregator (v1) | |
| Billing | Merchant-of-record hosted checkout plus webhooks | No card data touches our servers |
| AI (v1) | Claude API for gap analysis only, behind a feature flag | Policy text itself comes from approved clauses, not from free generation |
| Monitoring | Sentry (errors), an uptime checker, structured logs without personal data | |
| Deployment | Docker image; one VM or a small PaaS; infrastructure as code; CI with tests, linting, type checks, dependency and secret scanning | Portable across hosts, which matters because host prices change: Hetzner raised several cloud lines in 2026 ([Northflank](https://northflank.com/blog/hetzner-cloud-server-price-increases); [WZ-IT](https://wz-it.com/en/blog/hetzner-price-increase-june-2026-cpx-ccx-alternatives/)) |

TypeScript with Next.js would also work. I prefer Django here because the admin, auth and forms come built in. That means fewer pieces for the agents to wire together and less for the founder to review.

### Diagram

```
 Browser (lender, adviser)        Phone (person portal, magic link)
            \                         /
             \                       /
          [ Cloudflare DNS / TLS / WAF ]
                        |
             [ Django app (Docker) ]----[ Job worker (same image) ]
              |      |       |                 |
   [PostgreSQL] [Object storage] [Gotenberg PDF]  [Postmark / SMS / Claude API]
     (RLS, PITR)  (encrypted,      (internal only)
                   signed URLs)
                        |
              [Paddle webhooks]      [Nightly encrypted backup to a second provider]
```

### Multi-tenancy

- One shared database. Every customer table carries `organisation_id`.
- Layer 1: a tenant-scoped query manager that cannot be bypassed in views.
- Layer 2: PostgreSQL row-level security keyed on a per-request setting.
- Tests: for every model, a test creates two tenants and proves that tenant A cannot read, list, export or download tenant B's rows or files.


## Security, privacy and liability

### What personal data the product holds

| Data | Whose | Sensitivity | Our role |
|---|---|---|---|
| Fit-and-proper data: ID and PIN numbers, education, 5-year bank list, employment, shareholdings and directorships, default and conviction answers, referees ([01 file, duty #6](01-law-and-requirements.md)) | Directors, CEO, officers, shareholders | **High.** Kenya's "sensitive personal data" includes "property details" and "family details" ([ODPC guidance quoting DPA s.2](https://www.odpc.go.ke/wp-content/uploads/2026/04/Guidance-Note-on-Cross-border-Data-Transfers.pdf)). Shareholdings and any family details are likely to fall in it (my reading) | Processor for the lender |
| Police clearance, CRB report, KRA certificate | Same people | High in practice (criminal record and credit data), even where not "sensitive" in law | Processor |
| Complaints | Borrowers | Medium: names, phones, loan disputes | Processor |
| Agents (v1) | Agent individuals | Low-medium | Processor |
| User accounts, billing contacts, marketing leads | Our customers' staff | Low | Controller |

### Kenya's data protection law applied to us

- **The Act reaches us abroad.** ODPC says a controller or processor "not established or residing in Kenya" that processes data of people resident in Kenya must register ([ODPC FAQ](https://www.odpc.go.ke/faqs/)). Entities with turnover under KES 5m and fewer than 10 staff are exempt unless they are in a listed sector ([ODPC FAQ](https://www.odpc.go.ke/faqs/)). Our own sector (software) is not "financial services" (my reading). So we are probably exempt in year 1 and must register once revenue passes KES 5m. Registering early costs little (KES 4,000 for the smallest band, [01 file, duty #7](01-law-and-requirements.md)) and helps sales (unverified whether a foreign company needs a KRA PIN to register).
- **A processor contract is mandatory.** The controller (the lender) must engage us by a written contract with set particulars: subject matter, duration, nature and purpose, data types, data-subject categories, instructions, confidentiality, security measures, deletion or return at the end, and audit rights ([General Regulations, reg 24](https://www.odpc.go.ke/wp-content/uploads/2024/03/THE-DATA-PROTECTION-GENERAL-REGULATIONS-2021-1.pdf)). We need the lender's prior authorisation for sub-processors (hosting, e-mail, SMS, AI) and stay liable for them (reg 25, same source). Our DPA follows reg 24 item by item and lists sub-processors.
- **Hosting abroad is a cross-border transfer, and it is allowed with safeguards.**
  - Storing Kenyan personal data on cloud servers outside Kenya is a cross-border transfer ([ODPC cross-border guidance, s.14](https://www.odpc.go.ke/wp-content/uploads/2026/04/Guidance-Note-on-Cross-border-Data-Transfers.pdf); whether this April 2026 note is final is unverified).
  - The transferring entity must base the transfer on appropriate safeguards, an adequacy decision, necessity or consent (reg 40). Safeguards can be a binding legal instrument "essentially equivalent" to Kenyan law (reg 41(1)(a)). Each transfer must be documented with date, recipient, justification and data description, and the record shown to ODPC on request (reg 41(2)) ([General Regulations](https://www.odpc.go.ke/wp-content/uploads/2024/03/THE-DATA-PROTECTION-GENERAL-REGULATIONS-2021-1.pdf)).
  - **Sensitive data needs more.** A cross-border transfer of sensitive personal data needs the data subject's explicit consent plus safeguards (DPA s.49(1), as quoted in the [ODPC guidance, s.12](https://www.odpc.go.ke/wp-content/uploads/2026/04/Guidance-Note-on-Cross-border-Data-Transfers.pdf); reg 46(2)).
  - **Design response:** the person portal opens with an explicit consent screen that names the hosting country and the risks, and logs the consent. A person who refuses can use **"track-only" mode**: the app stores only document type, issue date and expiry, and the files stay with the lender.
- **No localisation duty for this use (my reading).** Regulation 26 requires processing in Kenya, or a serving copy in Kenya, only for listed "strategic interest" purposes: civil registration, elections, public finance, protected computer systems under the Computer Misuse and Cybercrimes Act, basic education and primary or secondary health care ([General Regulations, reg 26](https://www.odpc.go.ke/wp-content/uploads/2024/03/THE-DATA-PROTECTION-GENERAL-REGULATIONS-2021-1.pdf)). A compliance tool for lenders is not on the list. The Cabinet Secretary can order localisation for a controller abroad that ignores breaches or obstructs the Data Commissioner (reg 26(3)).
- **Breaches.** A processor must tell the controller within 48 hours of becoming aware of a breach; the controller must tell ODPC within 72 hours ([Bowmans](https://bowmanslaw.com/insights/kenya-a-few-insights-on-navigating-data-breaches-in-kenya-under-the-kenyan-data-protection-law/)). Our incident plan commits to notifying the lender within 24 hours (my design choice), with the facts ODPC's notice needs ([General Regulations, reg 38](https://www.odpc.go.ke/wp-content/uploads/2024/03/THE-DATA-PROTECTION-GENERAL-REGULATIONS-2021-1.pdf)).
- **DPIA.** The guidance points to a DPIA for high-risk transfers ([ODPC guidance, s.13.2](https://www.odpc.go.ke/wp-content/uploads/2026/04/Guidance-Note-on-Cross-border-Data-Transfers.pdf)). We write one DPIA for the product and give lenders a summary they can attach to their own records.
- **Retention.** Application documents for people: delete 90 days after CBK's decision unless the lender chooses to keep them (my design choice). Registers (complaints, agents, approvals): keep while the lender subscribes; 7 years is our recommended default, matching POCAMLA's record period ([01 file, duties #66-68](01-law-and-requirements.md)). On exit: full export, then deletion, as reg 24(2)(e) requires.

### CBK angle: is using Kibali "outsourcing"?

- The draft rules make a lender notify CBK 30 days before an outsourcing arrangement. The contract must give CBK access to the provider's premises, books, systems and staff ([01 file, duty #27](01-law-and-requirements.md)).
- A tool that holds the lender's complaints register and policies may count as outsourcing (unverified; ask the advocate).
- Design response: our terms include a CBK-access clause. The settings page generates the lender's 30-day outsourcing notice. The read-only reviewer link lets the lender give an examiner access quickly. This turns a possible objection into a sales point.

### Security baseline (MVP)

1. MFA required for owner, compliance, MLRO and adviser roles. Magic links for people are single-use, expire in 7 days and give access to one person's record only.
2. Tenant isolation in two layers plus automated cross-tenant tests for every model, list view, export and file download.
3. Files: type and size limits, ClamAV scan, encryption at rest, short-lived signed URLs. ID numbers, PINs and person form answers are also encrypted at field level with a key held outside the database.
4. Append-only audit log with a hash chain. It records every view of a person file, every export and every permission change.
5. Backups: daily encrypted database backups with point-in-time recovery, plus a nightly copy at a second provider. A restore drill before launch, then monthly.
6. Production access: the founder only, with a hardware security key. AI coding agents never receive production secrets or customer data; they work on synthetic data.
7. CI gates: tests, linting, type checks, dependency audit, secret scanning, static analysis. A separate review agent runs a security review on every pull request. The founder reads every change to auth, tenancy, files and billing.
8. Web hardening: strict Content Security Policy, CSRF protection, rate limits on login, magic links and the public checker, and Cloudflare in front.
9. Logs hold no personal data.
10. External penetration test before paid launch, then yearly and after major changes (see Budget).

The draft rules list what CBK expects in a lender's own IT policy: encryption, access, password security, audit logs, change control, backup and disaster recovery ([01 file, duty #46](01-law-and-requirements.md)). Kibali should meet the same list, and say so in a one-page security sheet for buyers.

### AI in the product

- The policy text comes from advocate-approved clauses. The AI does not write policy text freely. This keeps the advocate's sign-off meaningful.
- v1 gap analysis sends the lender's existing policies to the Claude API. The app warns users to remove personal data first and strips obvious identifiers. It is opt-in per organisation and listed as a sub-processor. Every AI finding is a suggestion that a person must confirm.

### Liability

- **Advocates Act, s.34.** It bars unqualified persons from preparing documents for a fee in listed areas: conveyancing, forming a company, partnership agreements, probate, matters with a fee set under s.44, and other legal proceedings. Breach is an offence, and fees can be recovered ([SheriaPlex, Advocates Act s.34](https://www.sheriaplex.com/kenya-acts/5674-unqualified-person-not-to-prepare-certain-documents-or-instruments)). Internal policies and CBK's own prescribed forms do not appear in that list (my reading). Mitigations:
  - sell self-service software, not legal drafting on instructions;
  - the premium review tier is delivered and invoiced by the partner advocate under the advocate's own engagement letter;
  - get a written opinion from the advocate in week 1, including on whether s.44 fee scales reach any of our documents and on any fee-sharing limits for advocates (unverified).
- **Outcome risk.** CBK decides. Terms say that the product is not legal advice, that the lender files and is responsible, and that liability is capped at the fees paid in the last 12 months. CBK fees and penalties are excluded.
- **A narrow guarantee sells.** If CBK raises a documentation query on an item the kit says it covers, we fix it free or refund the kit price (as proposed in the [B4 report](../reports/kenya-b4.md)).
- **Content dating.** Every document shows its content version, the "law as at" date and the review date. A change in the law triggers a "What changed" notice.
- **Insurance.** Get professional indemnity and cyber cover once revenue starts (cost unverified).

## Hosting and running costs

### Where to host

- **Choice: an EU region** (for example Frankfurt), or the region of the founder's company abroad. Reason: Kenyan law allows it with a contract, records and consent for sensitive data (above). EU hosting makes due diligence easy for larger lenders.
- **Kenya-local hosting is not needed** under reg 26 (above). AWS announced a Nairobi Local Zone in 2021 ([Capital FM](https://capitalfm.africa/amazon-announces-new-aws-local-zone-cloud-infrastructure-in-kenya/)); I could not confirm it is live (unverified). Revisit if a large lender insists on in-country data.
- **Latency** from Nairobi to Europe is fine for a forms-and-documents app (my estimate; not measured).
- **Keep it portable.** One Docker image and infrastructure as code. Hetzner raised several 2026 cloud prices sharply ([Northflank](https://northflank.com/blog/hetzner-cloud-server-price-increases)), which shows why.

### Monthly running cost estimate (USD, excluding staff, VAT and payment fees)

Prices are list prices where cited; sizes and totals are my estimates. DigitalOcean is used as the reference host: droplets from USD 4, managed databases from USD 15, object storage from USD 5, and backups at 20-30% of the droplet price ([DigitalOcean pricing](https://www.digitalocean.com/pricing)). The size-specific prices below are my estimates (unverified).

| Item | 50 customers | 300 customers | 1,000 customers |
|---|---|---|---|
| App and worker servers | 1 VM, 2 vCPU / 4 GB: 24 | 2 VMs, 4 GB each: 50-70 | 3 VMs, 8 GB each: 150-200 |
| Managed PostgreSQL | single node, 2 GB: 30 | 4 GB with a standby: 120-150 | 8 GB with a standby: 250-320 |
| Object storage and offsite backup copy | 10-20 GB: 8-10 | 60-100 GB: 10-20 | 200-400 GB: 25-45 |
| Server backups | 5 | 10-15 | 30-40 |
| Gotenberg PDF and ClamAV (on the app VMs) | 0 | 0-24 (own VM) | 24-48 |
| Transactional e-mail | 15 ([Postmark, third-party](https://automationatlas.io/answers/postmark-pricing-explained-2026/)) | 15-50 | 50-100 |
| SMS reminders (v1), about 50 per customer a month at KES 0.5-0.8 ([HelloDuty](https://helloduty.com/blogs/how-to-send-bulk-sms-in-kenya-effectively)) | 10-15 | 60-95 | 195-310 |
| Claude API for gap analysis (v1): about 50k input and 8k output tokens per run, about USD 0.18 on Sonnet 5.5 or 0.36 on Opus 5.5 ([Anthropic pricing](https://platform.claude.com/docs/en/about-claude/pricing)); runs a month = 0.5 x customers (my estimate) | 5-10 | 30-55 | 90-180 |
| Error monitoring, uptime, logs | 0-26 | 26-60 | 80-150 |
| Cloudflare, DNS, domain, status page | 2-5 | 25 | 25-50 |
| Code hosting and CI | 4-20 | 20-40 | 40-60 |
| **Total** | **about 100-170** | **about 370-620** | **about 960-1,500** |
| Planned revenue at about USD 80 a month per customer (blended from the [02 file](02-market-and-competition.md) price proposals) | 4,000 | 24,000 | 80,000 |
| **Running cost as share of revenue** | **2.5-4%** | **1.5-2.5%** | **1-2%** |

Notes:
- Payment fees are larger than hosting. At a headline 5% + USD 0.50 per transaction ([Dodo Payments on Paddle](https://dodopayments.com/blogs/paddle-fees-explained)) (unverified), a USD 80 monthly charge costs about USD 4.50, or 5.6%. Annual billing cuts the fixed part. Details belong to the payments file.
- 1,000 customers is more than the Kenyan serviceable base of about 550-950 lenders ([02 file](02-market-and-competition.md)). That column assumes Uganda or Tanzania.
- The founder's own tools (Claude Code plans, see Budget) are a development cost, not a running cost.

## Development plan

### Timing drives the plan

- Existing lenders must apply by about **29 Mar 2027** ([01 file](01-law-and-requirements.md)). A police clearance takes 2-6 weeks ([Kenyans.co.ke](https://www.kenyans.co.ke/news/56752-certificate-good-conduct-how-apply)), so most applicants must start their people documents by **mid-February 2027**. The kit must be on sale by **early December 2026** to catch most of the rush.
- The 281 licensed lenders face the new fee and annual return on **31 Dec 2026** ([Tech-ish](https://tech-ish.com/2026/10/04/cbk-raises-licensed-lenders-annual-fee-to-kes-500000-from-kes-20000/)). The calendar and the LN 191 self-check should be live before then.
- Plan: start **Mon 12 Oct 2026**. MVP feature-complete on staging by **Fri 30 Oct** (3 weeks). Sellable launch **Mon 30 Nov** (week 8), after legal sign-off, a penetration test and pilots.
- Public holidays to plan around: Mashujaa Day (Tue 20 Oct 2026) and Jamhuri Day (Sat 12 Dec 2026) ([Calendarific](https://calendarific.com/holidays/2026/ke)). Expect slow weeks from 24 Dec to 1 Jan.

### How the founder works with Claude Code and parallel agents

- **Roles.** The founder is architect, reviewer, integrator, product owner and content manager. AI agents write code, tests, help text and first drafts of content. A Kenyan advocate approves all legal content. A Kenyan compliance practitioner checks the workflows.
- **At most 5-6 streams at once.** The limit is the founder's review time, not the agents. Each stream works in its own git worktree and branch, and owns its own Django app folder, so merges rarely clash.
- **Contracts first.** At the end of week 1 the shared pieces are frozen: core models (organisation, membership, person, document, requirement, obligation, audit event), service interfaces (storage, e-mail, PDF rendering, deadline engine, audit), URL names, base templates and UI components. A change to a contract needs the founder's approval.
- **Spec, then code.** Each task is a short written spec with acceptance tests ("given / when / then"). The agent writes the tests first, then the code. CI must pass. A separate review agent runs a security and correctness review. The founder merges. Pull requests stay small (under about 400 lines).
- **Repository rules in `CLAUDE.md`:** commands, conventions, the tenant-isolation rules (never bypass the tenant manager, no raw SQL outside the data layer), no secrets in code, synthetic data only.
- **Synthetic test lenders** from day 1: a licensed digital lender, a pending applicant, a new logbook lender (licence tier), a small registered lender and an adviser with three clients. Every stream tests against them.
- **Daily rhythm:** morning, the founder writes or updates specs and merges yesterday's work; daytime, agents run; late afternoon, the founder reviews; evening, staging rebuilds and the end-to-end suite runs.

### Agent work streams for the MVP

| Stream | Scope | Owns | Depends on | Done by Fri 30 Oct when |
|---|---|---|---|---|
| **S0 Foundation** (founder + 2 agents, week 1) | Project skeleton, auth with MFA, organisations and memberships, roles, audit log, file storage, e-mail, PDF service (Gotenberg), job queue, CI/CD, staging, UI shell, seed data | `core`, `accounts`, infra | - | Frozen contracts; staging deploy on every merge; tenant tests in CI |
| **S1 Rules and calendar** | Requirement YAML loader and versioning; deadline engine (four rule kinds); obligations; reminders and digests; public scope and tier checker | `rules`, `obligations`, `checker` | S0 | All rule kinds pass time-travel tests; checker gives correct tier for 20 test cases |
| **S2 People and dossier** | People register; magic-link person portal with consent; uploads with expiry; NDTCP 2/3 PDF pre-fill; dossier checklist by tier and situation; ready gate; ZIP export and copy sheet | `people`, `dossier` | S0, S1 | A synthetic lender with 4 people reaches "ready" and exports a correct ZIP |
| **S3 Policy generator** | Questionnaire engine; clause templates (docxtpl); policy assembly by tier; coverage check; versions; approvals; board resolution; KID and pricing sheet | `questionnaire`, `policies`, `products` | S0, S1, S6 content | Golden-file tests render all documents for 5 synthetic lenders; coverage report shows no unmapped "policy content" requirement |
| **S4 Registers** | Complaints register with clocks and export; product and pricing change log with CBK letter, notice tracker and go-live gate | `complaints`, `changes` | S0, S1 | 100-complaint fixture gives correct due dates; go-live gate cannot be bypassed |
| **S5 Commercial** | Marketing site; checker embed; onboarding wizard; plans; merchant-of-record checkout and webhooks; multi-organisation switcher; account settings; data export and deletion | `web`, `billing` | S0 | Sandbox purchase creates an active subscription; adviser can switch between 3 clients |
| **S6 Content** (agent drafts; advocate reviews) | Requirement library from the 01 file's duty table; questionnaire (about 80 questions); clause library for 6 policies, complaints procedure, pricing sheet, KID, business brief, board resolution; help text; LN 191 diff as soon as the text is in hand | `content/` (YAML, DOCX) | 01 file; LN 191 text | Draft v0.9 of every template; advocate review round 1 booked |
| **S7 QA and security** (runs throughout) | Threat model; cross-tenant tests for every new model; end-to-end tests (Playwright); dependency and secret scans; backup and restore drill; load test | `tests/`, CI | all | No failing tenant test; restore drill documented |

### Calendar

| Week (start) | Engineering | Content and legal | Sales and pilots |
|---|---|---|---|
| 0 (Sat 10 Oct) | Accounts (code hosting, cloud, e-mail, billing sandbox); `CLAUDE.md`; architecture decisions | Obtain the LN 191 text (Government Printer or a partner advocate). Ask 2-3 small firms from the [02 file](02-market-and-competition.md) for a fixed quote | List 30 target lenders from the CBK directory |
| 1 (Mon 12 Oct) | **S0 foundation.** S1 checker logic (pure functions plus tests) | S6 requirement library v0 from the 01 file. **LC0:** advocate engaged; written questions sent (s.34, outsourcing, consent for sensitive data, LN 191 differences) | Landing page with the free checker and a waitlist. 10 discovery calls |
| 2 (Mon 19 Oct; Tue 20 Oct holiday) | **S1-S5 in parallel**, S7 alongside | S6 questionnaire and clause drafts. **LC1:** advocate approves the requirement map and the policy outlines | Recruit 3-5 pilot lenders and 1-2 adviser firms |
| 3 (Mon 26 Oct) | Streams finish. **Fri 30 Oct: MVP feature-complete on staging** (draft content) | S6 drafts v0.9 of all templates | Demo to pilots |
| 4 (Mon 2 Nov) | Integration, end-to-end tests, time-travel tests, mobile checks, performance | Advocate review round 1 of all templates | Concierge use: the founder runs 2 friendly lenders through staging (with consent) and delivers advocate-checked documents |
| 5 (Mon 9 Nov) | Fixes; pentest scoping; billing live; security sheet | **LC2:** content v1.0 signed off. Terms, DPA (reg 24 items), privacy notice, disclaimers, DPIA and transfer record approved | Founding-customer offer to the waitlist |
| 6 (Mon 16 Nov) | **External penetration test** (3-4 days) on a production-like copy | Pilot feedback into content | 3-5 paid pilots onboard (discounted founding price) |
| 7 (Mon 23 Nov) | Fix high and medium findings; retest; restore drill; monitoring | Launch guides: "29 March checklist" and "31 December checklist" | Partner advisers trained |
| 8 (Mon 30 Nov) | **Sellable launch.** Self-serve sign-up opens | Weekly law watch starts | Outreach to the CBK directory list and law-firm webinars |
| Dec 2026 | v1a: LN 191 gap analysis (AI, human-confirmed), adviser dashboard, CBK query log | Switch rule flags from "draft-based" to "LN 191 confirmed" | 31 Dec fee and return campaign to licensed lenders |
| Jan 2027 | v1b: AML pack (FRC annual report draft, MLRO notices), notices register, CRB pre-listing tracker | Content release with the AML pack | Rush selling through advisers |
| Feb-Mar 2027 | Support, speed, small fixes; no big features | Answer CBK guidance notes, if any | Peak: help applicants hit 29 Mar |
| Apr-Sep 2027 | v1c: agent register (before about 31 Oct), annual certification workpaper (before 31 Dec), public complaint form with SMS, evidence pack v2 | Uganda or Tanzania legal layer study | Move kit buyers to subscriptions |

The 3-week MVP is realistic because the product has no official integrations, the stack is plain, and content runs in parallel. The 8-week date depends on two outside parties: the advocate (LC1 and LC2) and the penetration tester. Book both in week 0.

### What to cut if time slips

1. First cut: the visual coverage matrix (keep the check in code, show a simple list), the go-live gate UI (keep a plain log), the multi-organisation switcher (create separate adviser logins by hand).
2. Never cut: tenant isolation and its tests, MFA, advocate sign-off of content, the penetration test, backups with a tested restore.

### Definition of done for the MVP (sellable on 30 Nov)

1. A pilot lender with 3-5 people produces a complete licence or registration dossier with every checklist item green, expiry-checked against its planned submission date. The lender spends **under 4 hours** of its own time on it, not counting waiting for police, KRA and CRB documents.
2. The policy set renders for both tiers. Every requirement marked "policy content" maps to at least one advocate-approved clause. Content v1.0 is signed off (LC2) and shows its "law as at" date.
3. The public checker returns the right scope and tier for 20 reference cases reviewed by the advocate.
4. The deadline engine passes time-travel tests for every rule kind: 31 Dec, about 31 Oct, 24 months, 12 months, document expiry, 30-day notices, complaint clocks and 29 Mar 2027.
5. The complaints register computes the 7-day, 48-hour and 30-day dates correctly on a 100-case fixture and exports CSV and XLSX.
6. The change log cannot mark a change live before CBK approval and 30 days after the customer notice.
7. Cross-tenant tests pass for every model and file route. The penetration test leaves no open high or critical finding. A restore from backup has been done and timed.
8. Terms, DPA, privacy notice, consent screens, DPIA and transfer record are approved by the advocate.
9. Card checkout works end to end, with invoices.
10. At least 3 pilot lenders have used it end to end, and at least 2 have paid.

## Budget

Cash costs only. The founder is unpaid, and no developers are hired. Company set-up costs are in the company file. USD at KES 129 (unverified).

| Item | Basis | MVP (weeks 0-8) | v1 (Dec 2026-Mar 2027) |
|---|---|---|---|
| Claude Code subscriptions | 2 x Max 20x at USD 200 a month for Oct-Nov, then 1 ([Novita](https://blogs.novita.ai/claude-subscription/); [heyuan110](https://www.heyuan110.com/posts/ai/2026-02-25-claude-code-pricing/)) | 800 | 800 |
| Claude API (product feature tests, evals) | Usage at the prices above | 50-150 | 100-200 |
| Kenyan advocate: content review, terms and DPA, written opinions (s.34, outsourcing, consent) | About 30-36 hours at a blended KES 15,000-25,000 an hour. Boutique 2026 bands: associate KES 12,000-22,000, partner KES 30,000-55,000 an hour ([Global Law Experts, 2 Oct 2026](https://globallawexperts.com/?p=1530199)). Hours are my estimate | 3,500-7,000 (KES 450k-900k) | 1,200-2,300 (updates, AML pack) |
| Kenyan compliance practitioner (workflow review, pilot introductions) | 8-12 days; a banking compliance specialist earns about KES 53k-142k a month ([Paylab, via the 02 file](02-market-and-competition.md)); freelance rate is my estimate | 800-1,550 | 400-800 |
| External penetration test, 3-4 days grey-box, with retest | Narrow web-app tests are quoted at USD 5,000-15,000 for 3-5 days ([Redfox Security](https://www.redfoxsec.com/blog/how-much-does-web-application-penetration-testing-cost-2026-pricing-guide); [Blaze](https://www.blazeinfosec.com/post/how-much-does-penetration-testing-cost/)). A Nairobi provider lists a KES 50,000 package ([Hostiko](https://hostiko.co.ke/services/cybersecurity)), probably too shallow alone | 5,000-8,000 | 0 (yearly retest later) |
| Hosting and SaaS tools during build | About USD 100-150 a month (table above) | 200-300 | 400-700 |
| UI kit, icons, stock | One-off | 0-300 | 0 |
| ODPC registration (when required) | KES 4,000 smallest band ([01 file, duty #7](01-law-and-requirements.md)) | 0-31 | 0 |
| LN 191 copy and small items | | 50 | 0 |
| Pilot trip to Nairobi (optional, 1 week) | Flights and lodging (my estimate) | 0-2,500 | 0-2,500 |
| Contingency, about 15% | | 1,600-3,100 | 400-1,100 |
| **Total** | | **about USD 12,000-24,000 (KES 1.5m-3.1m)** | **about USD 3,300-8,400** |

Reading:
- The **advocate and the penetration test are about two-thirds of MVP cash.** AI agents make the code cheap; trust is what costs money.
- The year-1 kit rush alone was estimated at KES 3.5m-5.6m (about USD 27k-43k) in the [B4 report](../reports/kenya-b4.md). So the MVP pays back if about 15-50 kits sell, depending on the kit price (KES 63k-100k).
- To spend less: get the advocate as a channel partner (lower review fee in exchange for review-tier referrals), and run a cheaper first test (local package plus automated scanning) with a full test after the first 20 paying customers. I do not recommend skipping the full test: the product holds directors' criminal-record and credit documents.
- A law firm's indicative fee for "a single licence application or straightforward compliance review" is KES 60,000-250,000 ([Global Law Experts](https://globallawexperts.com/?p=1530199)). A kit priced at about KES 63,000 ([02 file](02-market-and-competition.md)) sits at the bottom of that band.

## Risks

| Risk | Why it matters | Mitigation |
|---|---|---|
| **LN 191 differs from the 2025 draft** | Tiers, policy briefs, clocks or forms may change; content built on the draft would be wrong | Get the text in week 0; every rule carries a source flag; content releases with diffs; advocate sign-off before sale |
| **Advocate or pentest slot slips** | Both gate the 30 Nov launch | Book both in week 0; have a second firm quoted; concierge sales with advocate-checked documents if the app launch slips |
| **Founder review bottleneck** | Parallel agents produce more code than one person can review | Max 5-6 streams; small PRs; tests first; review agent; cut list ready |
| **AI-written code has security holes** | The data is very sensitive | Tenant tests, review agent, static analysis, external test, no production access for agents |
| **A breach of directors' documents** | Reputational end of the business; ODPC action | Minimise (track-only mode, deletion after decision), field encryption, MFA, audit log, incident plan |
| **Advocates Act or fee-sharing problem** | Could make the kit or review tier unlawful | Written opinion in week 1; software-only positioning; advocate invoices the review directly |
| **Outsourcing notice or CBK objection** | Lenders may hesitate to put registers in a foreign SaaS | CBK-access clause; notice generator; EU hosting; security sheet; export at any time |
| **Consent friction for sensitive data** | People may refuse to upload abroad | Track-only mode; clear consent text |
| **CBK publishes model policies or guidance notes** | Cuts kit value | Sell the running registers and calendar; adopt CBK's models as the base content |
| **Loan-system vendors add an NDTCP module** | Kovara and SuperLMS already claim "CBK ready" ([02 file](02-market-and-competition.md)) | Integrate with them (CSV/API) rather than compete on the loan book |
| **Police clearance delays** | Applicants miss 29 Mar regardless of our kit | Back-scheduled warnings from the first day; tell buyers early |
| **Card payments do not suit micro lenders** | Lost sales | Annual plans and invoices via advisers; M-Pesa later (see payments file) |
| **Host price changes** | Hetzner's 2026 rises show it happens ([Northflank](https://northflank.com/blog/hetzner-cloud-server-price-increases)) | Docker and infrastructure as code; move in a day |
| **Single founder** | Illness or overload stops support during the rush | Runbooks; the partner adviser can handle first-line support; status page |

## Open questions

1. What exactly does LN 191 say on tiers, the policy set for registered firms, complaint clocks (calendar or working days), annual return content, agent renewal dates and the forms? (Kenya Law returned 403 to the law research.)
2. Does CBK still use the `gdi.centralbank.go.ke` portal for NDTCP applications, and is Form NDTCP 1 entered online as Form DCP 1 was?
3. Does the Stage 3 API data-submission test apply to NDTCPs, including the registered tier? Who provides the specification?
4. What are the BSA return templates, their frequency and their deadlines for NDTCPs?
5. Is a compliance SaaS that holds a lender's registers "outsourcing" that needs 30 days' notice to CBK?
6. Does a foreign SaaS company need to register with ODPC now, and can it do so without a KRA PIN?
7. Does any critical-infrastructure designation in the financial sector bring a lender's compliance records under the localisation rule (reg 26(2)(d))? The designation notice in the [ODPC guidance](https://www.odpc.go.ke/wp-content/uploads/2026/04/Guidance-Note-on-Cross-border-Data-Transfers.pdf) annex did not extract as text.
8. Is the ODPC cross-border guidance note final, and will its standard clauses cover controller-to-processor transfers?
9. Does Advocates Act s.34 or s.44 reach any document the kit produces, and how may the partner advocate be paid for the review tier?
10. Do lenders want reminders by e-mail, SMS or WhatsApp? (Pilot question.)
11. Will lenders let an AI read their existing policies for the gap analysis?

## Sources
