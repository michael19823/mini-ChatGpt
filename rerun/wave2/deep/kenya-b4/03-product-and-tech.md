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
| **Kenya Law / Laws.Africa** | Consolidated text of LN 191 and the CBK Act | Kenya Law page for LN 191 ([KL listing](https://new.kenyalaw.org/akn/ke/act/ln/2026/191/eng@2026-09-29)) returned 403 here. Laws.Africa sells a Content API with update webhooks | n/a | Laws.Africa: free for most non-commercial use; commercial "Scale" plan ZAR 6,700 per knowledge base per country per month, full legislation API from ZAR 42,000 per country per month; content under CC BY-NC-SA ([Laws.Africa pricing](https://developers.laws.africa/get-started/pricing); [Content API](https://laws.africa/api/detail)) | Too expensive for year 1. Read Kenya Law by hand and buy the gazetted LN from the Government Printer or through the partner advocate |
| **BRS (Business Registration Service) on eCitizen** | Proof of incorporation, directors and shareholders (official search, formerly "CR12") | Web, eCitizen login; official search fee KES 650; instant for verified companies, 3-5 days otherwise ([BRS fee schedule](https://brs.go.ke/?p=567); [BRS guide](https://brs.go.ke/wp-content/uploads/2023/07/How-to-Apply-OS.pdf)) | n/a; no public API found (unverified) | Fee per search | MVP: lender uploads the official search; app records its date and compares people with the people register |
| **KRA iTax TCC checker** | Check a tax compliance certificate | Public web check by certificate number; shows PIN, holder name and status ([KRA iTax e-services brochure](https://www.kra.go.ke/images/publications/iTax-eServices.pdf)) | Manual check | Free | MVP: deep link, user records "checked on" date. Validity 12 months per third-party guides ([Faidi HR](https://faidihr.com/blog/how-to-check-your-kra-compliance-certificate-status-online)) (unverified) |
| **Police clearance (DCI, on eCitizen)** | Good-conduct evidence for each person | Apply online, fingerprinting in person; KES 1,050; 2-6 weeks; valid 12 months per press ([Kenyans.co.ke](https://www.kenyans.co.ke/news/56752-certificate-good-conduct-how-apply); [Eastleigh Voice](https://eastleighvoice.co.ke/huduma%20kenya/213099/kenyans-can-now-get-police-clearance-certificates-at-select-huduma-centres)) | Person uploads a scan | Fee paid by the person | MVP: expiry = issue + 12 months; lead-time warning. No online verification found (unverified) |
| **CRB reports** (licensed bureaus) | Credit report for each person | The person requests a report from a licensed CRB | Person uploads | Small or free (unverified) | MVP: expiry = issue + 3 months, as CBK requires ([CBK A-Z](https://centralbank.go.ke/wp-content/uploads/2024/11/Procedures-for-licensing-Digital-Credit-Providers-Revised-October-2024.pdf)) |
| **ODPC registration** | The lender's data-controller certificate (required for financial services regardless of size) | Online application on the ODPC website; certificate valid 24 months; fee KES 4,000 / 16,000 / 40,000 by size ([ODPC FAQ](https://www.odpc.go.ke/faqs/); [01 file, duty #7](01-law-and-requirements.md)) | n/a | Fee | MVP: upload certificate, renewal reminder at 24 months |
| **FRC goAML** | MLRO registration, STRs, annual compliance report (ACR) | goAML web; ACR is a Word template sent through the goAML message board ([01 file, duty #18](01-law-and-requirements.md); [ACR template](https://www.icpak.com/wp-content/uploads/2024/12/ACR-Template-2024-Vers.-7.docx)) | Manual | Free | v1: ACR draft from the template; filing stays manual |
| **Transactional e-mail** (Postmark or similar) | Invitations, reminders, digests | API | n/a | About USD 15 a month for 10,000 e-mails (third-party price lists; [automationatlas](https://automationatlas.io/answers/postmark-pricing-explained-2026/)) (unverified) | MVP |
| **SMS** (Africa's Talking or a local aggregator) | Reminders to people; complaint acknowledgements | API | n/a | About KES 0.50-0.80 per SMS (third-party estimate, [HelloDuty](https://helloduty.com/blogs/how-to-send-bulk-sms-in-kenya-effectively)) (unverified) | v1 |
| **Card billing** (merchant of record such as Paddle) | Subscriptions and kit purchases | Hosted checkout and webhooks | n/a | Headline 5% + USD 0.50 per transaction (third-party, [Dodo Payments](https://dodopayments.com/blogs/paddle-fees-explained)) (unverified) | MVP. Payment details are in the company and payments file |
| **Claude API** (Anthropic) | v1 gap analysis of a lender's existing policies | API | n/a | Claude Sonnet 5.5 USD 2 / 10 per million input / output tokens; Claude Opus 5.5 USD 4 / 20; batch processing at half price ([Anthropic pricing](https://platform.claude.com/docs/en/about-claude/pricing), as listed on 6 Oct 2026) | v1 |
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

- The **requirement library** starts from the 69 duty rows in the [01 file](01-law-and-requirements.md). Each row becomes one or more requirement records with a legal basis and a source status (draft, press report, LN 191 confirmed).
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

## Hosting and running costs

## Development plan

## Budget

## Risks

## Open questions

## Sources
