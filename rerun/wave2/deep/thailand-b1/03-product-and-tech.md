# Thailand B1: migrant-worker permit desk: product, technical design and development plan (deep dive 03)

Date: 10 Oct 2026. Status: complete (first full version). Builds on [the B1 report](../reports/thailand-b1.md), [01-law-and-requirements.md](01-law-and-requirements.md) and [02-market-and-competition.md](02-market-and-competition.md). "My estimate" marks numbers I derived. "(unverified)" marks facts I could not confirm.

Working positioning (from part 02): a multi-client back office for proxy filers (ผู้ดำเนินการแทน) and smaller licensed import companies (บริษัทนำคนต่างด้าวมาทำงาน), not a generic expiry tracker for employers. workdoc already sells that one ([workdoc pricing](https://www.workdoc.cloud/pricing)).

## Summary

- **What to build.** A web back office, plus LINE, for people who renew work permits for many employers at once. The buyer is the proxy filer (ผู้ดำเนินการแทน) or the small licensed import company. Working name: "Permit Desk". It holds clients, workers, cohorts and deadlines in one place. It checks each worker's documents before filing. It prints powers of attorney (POAs) in bulk. It tracks every step of each application. It tells clients and workers what is happening, in their own language. The free employer view turns each agent into a sales channel (positioning from [part 02](02-market-and-competition.md)).
- **What the portal leaves undone.** e-WorkPermit is the only filing channel. It handles filing, upload of evidence, payment and status ([Thansettakij, 30 Mar 2026](https://www.thansettakij.com/social-biz/655341)). It is built around one employer or one worker at a time. I found no export, bulk view, deadline radar or API ([Exworker guide](https://www.exworker.co.th/en/blog/e-workpermit-en)). Its common errors are mismatched ID, passport or permit numbers, accounts still held by a previous agent, duplicates and name mismatches ([Exworker](https://www.exworker.co.th/en/blog/e-workpermit-en)). Software can catch most of these before the agent opens the portal.
- **No integration is possible today, so design around that.** The portal sits behind Cloudflare bot protection. It returned a 403 challenge page to this research machine on 10 Oct 2026. Users must prove their identity with the ThaID app before using it ([Emerhub](https://emerhub.com/news/digital-work-permits-for-foreign-employees/); [People Matters](https://sea.peoplemattersglobal.com/news/economy-policy/thailand-makes-online-work-permits-mandatory-for-foreign-workers-46835)). So the product never logs in for the user and never scrapes. The agent files by hand. The product makes that fast: a "filing sheet" per worker with fields in portal order and copy buttons, ready-named upload files, and bulk paste of application numbers. A browser extension that fills forms in the agent's own session comes in v1, after a check of the DOE's terms.
- **MVP (about 3 weeks of build).** Agency workspace with roles and MFA. Clients and workers. Excel import with validators (13-digit ID check, Buddhist-era dates, passport rules, duplicates). A cohort rules engine, preloaded with the 11 Dec 2026 renewal and the other open rounds. A per-worker checklist. Bulk POA and cover-sheet PDFs in Thai plus Burmese, Lao or Vietnamese. A filing tracker for every DOE step. Deadline reminders by LINE and email. A read-only client view. Full export and audit log.
- **v1 (months 2-4).** Worker self-service through LINE (upload photos, sign consent and POA, see status). Passport MRZ reading in-house. The autofill browser extension. Status updates parsed from forwarded portal e-mails. Client invoices with PromptPay QR. Section 13 hire and exit notices. Inspection pack per employer. Electronic POA with online stamp duty: the Revenue Department's e-Stamp Duty system covers powers of attorney and has an API ([InfoQuest, 2020](https://www.infoquest.co.th/?p=40873)). Whether the DOE accepts an e-POA is unverified.
- **Stack.** One Python/Django monolith with HTMX, PostgreSQL with row-level security, a Postgres job queue, WeasyPrint for Thai, Burmese and Lao PDFs, and the LINE Messaging API. Host it in the AWS Bangkok region (ap-southeast-7, live since Jan 2025) so worker data stays in Thailand ([AWS](https://aws.amazon.com/blogs/aws/announcing-the-new-aws-asia-pacific-thailand-region/)).
- **Privacy is the main legal design input.** The data is about vulnerable people. It includes health-check status, which is sensitive data under PDPA s.26 ([PDPA, unofficial English text](https://cc.kmutt.ac.th/Files/Act%20Eng/personal-data-protection-act-2019-en.pdf)). The agent or employer is the controller; we are the processor. A company abroad that serves Thai users falls under the PDPA (s.5) and must appoint a representative in Thailand (s.37(5), applied to processors via s.38) ([PDPA text](https://cc.kmutt.ac.th/Files/Act%20Eng/personal-data-protection-act-2019-en.pdf); [Lexbangkok](https://lexbangkok.com/pdpa-local-representative-thailand/)). Breach notice within 72 hours (s.37(4)). Fines up to 5 million baht for sensitive-data breaches (s.84). The first PDPA fine, 7 million baht in 2024, followed a leak with weak internal access control and slow handling of complaints ([IAPP](https://iapp.org/news/a/first-fine-imposed-under-thailand-s-personal-data-protection-act)).
- **Running cost is small.** About USD 150-250 a month at 50 customers, 450-700 at 300 and 1,100-1,700 at 1,000 (my estimates). That is about 7-12% of revenue at 50 customers and 3-6% at 300 or more, using part 02's agency price (my arithmetic).
- **Cash budget to "sellable" (8 weeks, founder unpaid, no hired developers).** About USD 10,000-30,500 (about 320,000-1,000,000 baht at an assumed 33 baht per USD); a lean path is about USD 10,000-14,000. Lawyer, domain expert, translations, the security test and (if selling from abroad) a PDPA representative are most of it. Claude Code subscriptions and hosting are small. Fixed running costs in year 1 are about USD 9,500-28,700 (my estimates).
- **Calendar.** Start Mon 12 Oct 2026. MVP feature-complete 1 Nov. Real-data pilot with 3-5 agencies from 2 Nov, during the 11 Dec 2026 rush. Security test mid-November. Sellable from 30 Nov. Paid launch in January 2027, ahead of the Feb and Mar 2027 deadlines. The rush is both the chance and the risk: busy agents may not switch tools mid-crunch. So the pilot offer is "send us your spreadsheet; we load it and you get a deadline radar and POA batches the same day".

## Users and jobs

### Who uses the product

| Role (Thai label) | Who | Main jobs | Rights |
|---|---|---|---|
| **Agency owner** (เจ้าของสำนักงาน / ผู้ดำเนินการแทน) | Proxy filer or owner of a small licensed import company (บริษัทนำคนต่างด้าวมาทำงาน) | Take on clients; set fees; watch every deadline; approve POA texts; bill clients | Everything in the workspace, billing, user admin |
| **Document officer** (เจ้าหน้าที่เอกสาร) | Agency staff, usually Thai, who files on e-WorkPermit under their own verified account (ThaID check for representatives assumed, unverified) | Collect and check documents; prepare POAs; file and pay on the portal; record application numbers, payments, appointments | Assigned clients or all clients; no billing |
| **Field coordinator / interpreter** (ผู้ประสานงาน / ล่าม) | Often a Burmese, Lao or Khmer speaker who meets workers at sites | Photograph passports, insurance cards and health certificates; get signatures; explain status to workers | Upload and view for assigned clients; mobile-first |
| **Client employer** (นายจ้าง / สถานประกอบการ) | Construction subcontractor, farm, factory, restaurant, household | See which workers are due, what is missing, what it costs; sign the employer POA; pay the agent | Free read-only view of own workers; sign and upload; no access to other clients |
| **Worker** (แรงงานต่างด้าว) | Lao, Myanmar or Vietnamese worker (Cambodian later) | Know own deadline and status; send document photos; sign consent and the POA to the employer or agent; see official fees | No account in MVP; a personal link or LINE page in v1, in own language |
| **Direct employer** (self-filing) | An employer with 20+ migrant workers who files itself | Same jobs as an agency, for one company | Single-employer mode of the same app |
| **Content editor** | Founder plus a paid domain expert; lawyer approves | Turn each cabinet resolution and DOE notice into a cohort rule set; keep checklists and templates current | Content admin only; no customer data |
| **Platform admin** | Founder | Support, billing, incidents | Customer data only with the customer's time-limited consent, logged |

The design follows how the portal splits users: employers, foreign workers, and import companies or authorised representatives who need a valid POA ([Exworker](https://www.exworker.co.th/en/blog/e-workpermit-en)). The DOE runs separate LINE accounts for each group: @doewp for employers, @990seasu for employment agencies and authorised representatives, @833nmpkk for foreigners ([PSU e-WorkPermit information PDF](https://gao.psu.ac.th/images/download/immigration/e-WorkPermit_Information.pdf)).

### Jobs to be done (in the agent's words)

1. "Show me, across all my clients, which workers must be filed by which date." One worker can be in the 11 Dec 2026 round, owe a passport and visa by 30 Jun 2027, and have insurance expiring in between ([Nation Thailand](https://www.nationthailand.com/news/policy/40069723)).
2. "Tell me what is still missing before I open the portal." For the 11 Dec round: passport or substitute; a prohibited-disease certificate from a hospital linked to the DOE system; social security proof, or health insurance of at least 6 or 12 months depending on the case and sector; and a POA with correct stamp duty ([Bangkok Biznews, 8 Sep 2026](https://www.bangkokbiznews.com/news/news-update/1250827)).
3. "Make 200 POAs in one go, correct, in a language the worker understands." In this round the worker either files in person or gives a POA to the employer or the import company ([Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1250827)). Stamp duty on a POA is 10 baht for one act and 30 baht for more than one act ([Revenue Department](https://www.rd.go.th/25348.html)).
4. "Let me file fast without retyping."
5. "Track every application: number, fee paid, review, approval, permit fee, appointment, card." The portal's own process has eight steps, from registration to the visit for photo and fingerprints ([PSU PDF](https://gao.psu.ac.th/images/download/immigration/e-WorkPermit_Information.pdf)).
6. "Keep my clients informed without 50 phone calls."
7. "Bill my clients and see who has paid."
8. "Remember the next round, and the hire and exit notices." Employers must notify the registrar within 15 days of a hire or exit, or face a fine of up to 20,000 baht ([drthawip.com law text](https://www.drthawip.com/book/export/html/3263)).
9. "Give my client a clean file for the labour inspector." The DOE inspected 74,265 workplaces in FY2026 ([Bangkok Biznews](https://www.bangkokbiznews.com/news/1250192)).

## Feature map

### Requirements that drive features

- **Deadlines and cut-offs.** 11 Dec 2026 round: filing and fee window 8 Sep-11 Dec 2026. On the last day, filing closes at 16:30 and payment at 20:00. Fees are 100 baht per application plus 900 baht per permit ([Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1250827)). The reminder engine needs time-of-day cut-offs, not just dates.
- **Renewal lead time.** Renewals can be filed up to 60 days before expiry, up from 30 ([Vialto](https://vialtopartners.com/regional-alerts/thailand-immigration-e-work-permit-system-now-operational), search summary). Default reminders: 60, 30, 14, 7, 3 and 1 days.
- **Rounds overlap and change with each cabinet resolution.** See [01-law-and-requirements.md](01-law-and-requirements.md). Rules must be data, not code, and each rule must cite its source.
- **Name and number mismatches are the top portal errors.** The rule is to follow the passport spelling ([Exworker](https://www.exworker.co.th/en/blog/e-workpermit-en)). The product keeps the passport Latin name as the master and flags differences across documents.
- **13-digit numbers.** Migrant workers' pink cards carry 13-digit numbers that start with 0 or 00, according to one report ([Daily News](https://www.dailynews.co.th/news/6195024/), search summary). Another says first digit 6 for registered three-nationality workers ([Thairath](https://www.thairath.co.th/newspaper/2954081), search summary). The sources conflict (unverified). The validator should check length and the standard check digit, and warn rather than block until a pilot confirms the formats.
- **Health data.** The health certificate goes from the hospital to the DOE system electronically ([Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1250827)). The product stores only the hospital, date, certificate number and "linked: yes/no", never diagnoses (data minimisation under PDPA s.26).
- **Worker protection.** Holding a worker's permit or ID papers is an offence (s.131). Costs charged to workers are limited, and deductions may not exceed 10% of monthly pay (s.49) ([drthawip.com](https://www.drthawip.com/book/export/html/3263); [01-law-and-requirements.md](01-law-and-requirements.md)). The product shows workers the official fees and, in v1, warns when a recorded deduction breaks the 10% cap.

### Feature map

| Module | MVP (build weeks 1-3) | v1 (months 2-4) | Later |
|---|---|---|---|
| Accounts and roles | Agency workspace; owner, document officer, coordinator; MFA (TOTP) for agency users; magic-link client view | Branches; per-client staff assignment; LINE Login for clients | SSO; API keys |
| Clients (employers) | Juristic person or individual; 13-digit tax or ID number; address; contacts (LINE, phone, e-mail); sector; POA status | Client documents (company affidavit, ID of signatory); multi-site | Link to DBD company data |
| Workers | Passport-master identity; nationality; DOB; sex; Thai name; documents (passport, CI or other substitute, visa, work permit, pink card, health certificate, SSO or insurance) with numbers and dates; job type; workplace; employer history | Photo of each document; MRZ reading; change of employer | Face photo check |
| Import | Excel/CSV template plus a "map my columns" step; validators (13-digit check digit, Buddhist-era or Gregorian dates, expiry logic, duplicates across clients); row error report | Import from workdoc or other exports; OCR batch import | Scheduled sync from a client's HR system |
| Cohort rules engine | Cohort = round set by a cabinet resolution or DOE notice: eligibility, deadlines with cut-off times, document set by sector and status, fees, source URLs, version. Preloaded: 11 Dec 2026 renewal; the passport and visa deadline of 30 Jun 2027; other open rounds from part 01 | Impact preview when a new resolution lands ("which of my 340 workers does this touch?"); MOU two-year renewals | Rule packs for Cambodian workers and border-pass (s.64) workers |
| Pre-filing checklist | Per worker traffic light; per client and per cohort "ready to file" lists; reasons in plain Thai | Worker-side upload requests by LINE | Health-check booking and insurance purchase through partners |
| Documents | Batch PDFs: POA worker→employer or agent and employer→agent, in Thai with the worker's language beside it; stamp-duty line (10 or 30 baht); cover sheet per client; fee quote | e-signature; e-POA with e-Stamp Duty via the Revenue Department API if the DOE accepts it; inspection pack per employer | Templates for change of employer and s.13 notices |
| Filing helper | Filing sheet per worker (fields in portal order, copy buttons); files renamed and resized for upload; bulk paste of application numbers | Browser extension that fills portal forms in the user's own session (human submits) | Portal API, if the DOE ever offers one |
| Case tracker | Stages: draft, documents complete, filed (application no.), application fee paid, under review, approved, permit fee paid, appointment booked, card issued, rejected/returned; dates and references; kanban and table | Status updates parsed from portal e-mails forwarded to a per-workspace address | |
| Reminders | Deadline radar; daily digest for staff; weekly per-client summary; LINE and e-mail; time-of-day cut-offs | Bring-your-own LINE Official Account per agency; SMS fallback | WhatsApp or Viber for workers if pilots ask |
| Client view | Read-only list of the client's workers, deadlines, missing items and costs; works on a phone | Client signs the POA and pays the invoice online | |
| Billing of clients | Fee quote PDF | Invoices and receipts with PromptPay QR; payment status; accounting export | Thai tax invoice format for VAT-registered agents |
| Compliance extras | Audit log; full export (CSV plus ZIP of files) | s.13 hire/exit 15-day clock; deduction cap warning (s.49); inspection pack | 90-day report and TM.30 reminders; SSO registration files |
| Languages | Thai UI; English for admin; worker-facing text in Burmese (Unicode), Lao and Vietnamese | Khmer | Malay and Indonesian if a Malaysia version is ever built |

### Why this cut

- The MVP covers the jobs that bite in the 11 Dec 2026 rush: see who is due, see what is missing, produce POAs, file fast, track. Everything else waits.
- Worker self-service is v1, not MVP. It needs a careful consent flow, native-speaker review and LINE LIFF work. In the MVP, the coordinator uploads photos from a phone browser.
- The autofill extension is v1. It depends on the portal's page structure, which I could not see, and on the DOE's view of such tools (unverified).

## Key flows

### Flow 1: First hour for a new agency (target: deadline radar in under 30 minutes)

1. Sign up with e-mail; set a password; turn on MFA. Pick the agency type: proxy filer, licensed import company, or direct employer.
2. Accept the data processing agreement (DPA). It states that the agency is the controller and we are the processor (PDPA s.40 requires a controller-processor agreement) ([PDPA text](https://cc.kmutt.ac.th/Files/Act%20Eng/personal-data-protection-act-2019-en.pdf)).
3. Upload the agency's existing spreadsheet, or download our template. Map columns once ("ชื่อ-สกุล (ตามพาสปอร์ต)" → passport name, and so on). The mapping is saved for next time.
4. The validator returns a row report: bad 13-digit numbers, impossible dates, Buddhist-era years in a Gregorian column, passports expiring before the new permit would end, the same passport under two clients.
5. The rules engine assigns each worker to a cohort and shows the deadline radar: workers due per client, per week, with cut-off times.
6. The agency invites its first client by LINE link. The client sees its own workers only.

### Flow 2: A renewal round, end to end (the 11 Dec 2026 round as the example)

1. Filter: cohort "renewal to 11 Dec 2027", client X, status "not filed".
2. The checklist shows what is missing per worker. One click sends the client a list ("3 workers need insurance proof; 2 need the health check") by LINE.
3. The coordinator photographs the documents at the site and uploads them from a phone browser. Each photo is tagged to a worker and a document type.
4. When a worker's checklist is green, the officer generates POAs in a batch (worker → employer or agent, Thai plus the worker's language, stamp-duty line) and the employer → agent POA where needed. Print, sign, stamp, scan back.
5. Filing: the officer opens the worker's filing sheet beside the portal, copies fields in order, and uploads the ready-named files. The portal is used in the officer's own verified account; the product never holds portal passwords.
6. After a session, the officer pastes the list of application numbers from the portal. The product matches them to workers by passport number and moves the cases to "filed".
7. Fees: the product shows what is unpaid against the 20:00 cut-off on the last day ([Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1250827)). The officer records payment references.
8. Review, approval, permit fee, appointment and card issue are recorded as they happen. The portal also sends status by e-mail, SMS and LINE ([PRD English](https://thailand.prd.go.th/en/content/category/detail/id/2874/iid/429777)). In v1 those e-mails can be forwarded to the product and parsed.
9. When the card is issued, the next deadlines are set automatically: passport and visa by 30 Jun 2027 where relevant ([Nation Thailand](https://www.nationthailand.com/news/policy/40069723)), insurance expiry, and the next renewal.

### Flow 3: A new cabinet resolution arrives

1. The content editor reads the resolution and the DOE notice. Sources: the PRD, the DOE and its LINE accounts, the Royal Gazette.
2. The editor drafts a new cohort version as tables: eligibility, deadlines, cut-off times, documents by sector and status, fees, and the source URL for each line.
3. Golden tests (20-40 sample workers with known answers) must pass. The domain expert reviews and the lawyer approves anything that changes legal text.
4. The impact preview shows each agency how many workers move. Publish. Agencies get a LINE note: "New rule: workers whose permits expire on X can renew until Y. 47 of your workers are affected."

### Flow 4: Client employer (free view)

1. The client opens a LINE link or a magic link. No password in the MVP.
2. It sees its workers, each with a status, a deadline, missing items and the agent's fee quote.
3. In v1 it signs the employer POA on screen and pays the agent's invoice by PromptPay QR.

### Flow 5: Worker self-service (v1)

1. The worker scans a QR code from the coordinator or opens a LINE link. The page opens in Burmese, Lao or Vietnamese.
2. A short notice in the worker's language says who holds the data and why (the agent's privacy notice).
3. The worker sees his or her own deadline, status and the official fees (100 + 900 baht for this round).
4. The worker uploads photos of the passport page and insurance card, and signs the POA and consent with a finger.

### Flow 6: Leaving and deleting

1. The agency exports everything: CSV plus a ZIP of files, and PDFs of the case history.
2. The agency asks for deletion. Data is deleted after a 30-day grace period. Backups age out on their own cycle. A log records it.
3. Traffic and client-identification logs are kept for at least 90 days after service ends, as the Computer Crime Act requires of service providers ([Tilleke](https://www.tilleke.com/insights/ensuring-compliance-thai-computer-related-crimes-act); [UNODC fiche](https://sherloc.unodc.org/cld/uploads/pdf/El%20Evidence%20Hub/Electronic_Evidence_Fiche_as_of_23_December_2022_THAILAND.pdf); search summaries).

## Screens (described)

1. **Deadline radar (home).** Bars per week up to 90 days ahead. Each bar is split by client and stage: missing documents, ready, filed, paid, done. Red badges for anything due within 7 days with documents still missing. A "today" strip with cut-off times.
2. **Clients list.** Name, workers, next deadline, missing items, unpaid fees, POA status. Bulk action: send missing-items list by LINE.
3. **Client detail.** Header with contact, POA and sector. Tabs: workers, cases, documents, invoices (v1), notes.
4. **Workers grid.** Spreadsheet-like table with saved filters (cohort, client, stage, nationality, missing item). Bulk actions: generate POAs, mark filed, export filing list. Keyboard friendly, because officers live in Excel today.
5. **Worker detail.** Identity block with the passport name as master and a mismatch warning if the Thai name or permit data differ. Document cards with photo, number, dates and expiry countdown. Checklist for the current cohort. Timeline of the case. Next deadlines.
6. **Import wizard.** Upload, map columns, preview, error report by row, commit. Undo for 24 hours.
7. **Campaign board.** Kanban by stage for one cohort. Drag or bulk-move cases. A paste box for application numbers.
8. **Filing sheet.** One worker per page, two columns: field name as the portal shows it, value with a copy button. Files listed with the names and sizes to upload. Built for a second screen next to the portal.
9. **Document generator.** Pick a template (POA worker→employer, POA employer→agent, cover sheet, quote), pick workers, preview one, generate all as one PDF or a ZIP.
10. **Inbox and reminders.** Today's tasks, overdue items, and messages that bounced.
11. **Client view (phone).** The client's workers and deadlines, what is missing, the agent's quote, and a contact button.
12. **Worker page (phone, v1).** Large text in the worker's language: name, deadline, status, official fees, upload buttons, signature pad.
13. **Rules admin (content).** Cohort versions, rule tables, golden tests with pass/fail, source links, a diff between versions, publish button.
14. **Settings.** Team and roles, MFA, LINE connection, templates (agency letterhead), billing (our subscription), data export and deletion.
15. **Audit log.** Who saw or changed what and when; filter by worker; export.

## Data sources and integrations

| Source | What it gives | Access, format, cost | How the product uses it |
|---|---|---|---|
| **e-WorkPermit** (eworkpermit.doe.go.th, run for the DOE by the Future Sky joint venture) | Filing, upload of evidence, online payment, status, appointment booking; 24 hours ([Thansettakij](https://www.thansettakij.com/social-biz/655341)) | No public API, export or bulk function found ([Exworker](https://www.exworker.co.th/en/blog/e-workpermit-en)). ThaID identity check at registration ([Emerhub](https://emerhub.com/news/digital-work-permits-for-foreign-employees/)). Cloudflare bot protection (403 challenge to this research machine, 10 Oct 2026). Accepts uploads; formats and size limits not published (unverified). Free apart from state fees | Manual filing by the user, sped up by the filing sheet; later an autofill extension in the user's own session. No scraping, no stored portal passwords |
| **e-WorkPermit notifications** | Status updates by e-mail, SMS and LINE OA ([PRD English](https://thailand.prd.go.th/en/content/category/detail/id/2874/iid/429777)) | E-mail format unknown (unverified) | v1: per-workspace inbound address; the agency forwards portal e-mails; we parse application number and status |
| **DOE user manuals** | Registration steps for employer signatories, authorised representatives (POA holders) and workers ([PSU PDF](https://gao.psu.ac.th/images/download/immigration/e-WorkPermit_Information.pdf)) | FlipHTML5 image books, no text layer | Read by the founder and expert to build the filing sheet field order |
| **Hospital health checks** | Certificate of prohibited-disease check; results linked electronically to the DOE system ([Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1250827)) | No access for us; hospital to DOE | Record hospital, date, certificate number, "linked" flag; reminder if missing |
| **Social Security Office** | s.33 insured status | No API used; proof is a document | Record SSO number and status; insurance fallback rules by sector |
| **Health insurers and state hospitals** | Migrant health insurance (6 or 12 months minimum depending on case) ([Bangkok Biznews](https://www.bangkokbiznews.com/news/news-update/1250827)) | Card or policy document | Record insurer, policy number, start and end; expiry reminders. Later: partner referrals |
| **Cabinet resolutions, DOE notices, PRD news, Royal Gazette** | The rules of each round | Web pages and PDFs; Thai only; DOE sites often block foreign or automated access (seen in part 02) | Content editor turns them into rule tables with source links. A Thai-based monitor (expert or VPN) checks weekly |
| **Revenue Department e-Stamp Duty (อ.ส.9)** | Online payment of stamp duty on electronic instruments, POAs included; API offered ([InfoQuest](https://www.infoquest.co.th/?p=40873)) | Requires an electronic instrument and RD registration (details unverified). Duty 10 or 30 baht per POA ([RD](https://www.rd.go.th/25348.html)) | Later: e-signed POA with e-stamp code, only if the DOE accepts e-POAs (open question) |
| **LINE Messaging API and LIFF** | Messages to clients and workers; mini web pages inside LINE | Free plan 300 messages a month; Basic 1,280 baht for 15,000 (extra 0.10 baht); Pro 1,780 baht for 35,000 (extra 0.06 baht) ([LINE for Business TH](https://lineforbusiness.com/th/service/line-oa-features/broadcast-message)). Push and multicast count; reply messages do not ([LINE Developers](https://developers.line.biz/en/docs/messaging-api/pricing/)) | Reminders, missing-item requests, status links. v1: each agency can connect its own OA so messages carry its name and its quota |
| **SMS and e-mail** | Fallback channels | ThaiBulkSMS from 0.15 baht per SMS, e-mail from 0.04 baht ([ThaiBulkSMS](https://www.thaibulksms.com/)); or a global e-mail API | Critical deadline alerts when LINE fails; magic links |
| **Passport MRZ reading** | Fields from the machine-readable zone | Open-source (for example PassportEye with Tesseract; licence to confirm) run on our server, so images do not leave Thailand | v1: pre-fill passport number, names, dates; human confirms |
| **Thai document OCR** | Pink card, permit card, insurance card | Typhoon OCR 1.5 (2B, open model from SCB 10X, built on Qwen3-VL 2B) ([Hugging Face](https://huggingface.co/scb10x/typhoon-ocr1.5-2b), search summary); licence said to be permissive (unverified). Or the Claude API: Haiku 5.5 at USD 0.10/0.50 per million tokens in/out, Sonnet 5.5 at 2/10 (Anthropic API price table of 6 Oct 2026; see [claude.com/pricing](https://claude.com/pricing), API tab), so well under 1 US cent per document, but images then leave Thailand | Later; the self-hosted model is preferred for privacy. If an API is used, the DPA and the agent's notice must cover the transfer (PDPA s.29) |
| **Burmese text handling** | Correct rendering for Myanmar workers | Myanmar switched officially from Zawgyi to Unicode on 1 Oct 2019, but most users were still on Zawgyi then, and migration slowed after 2021 ([Wikipedia](https://en.wikipedia.org/wiki/Zawgyi_font); [Frontier Myanmar](https://www.frontiermyanmar.net/en/zawgyi-to-unicode-the-big-switch)). ICU has a Zawgyi-to-Unicode transliterator ([Facebook engineering](https://engineering.fb.com/android/unicode-font-converter/)); Google's myanmar-tools detects Zawgyi ([GitHub](https://github.com/google/myanmar-tools), not opened) | Output Unicode only, with embedded Noto fonts in PDFs. Detect and convert Zawgyi in names typed by users |
| **PromptPay QR** | Payment QR on agency invoices | Thai QR standard (EMVCo), generated locally, no fee to us (unverified) | v1 client invoices |
| **Our own billing** | Card subscriptions | Paddle as merchant of record: 5% + 50 US cents per transaction ([Paddle](https://www.paddle.com/pricing)); company and payment choice in parts 04-05 | Webhooks set the plan and worker limits |

**What this means.** There is no data feed to buy and no API to integrate in the MVP. Data comes from the agency's spreadsheets and phone photos. The value is in validation, rules, documents and tracking around a portal that the user drives.

## Data model

### Main entities (PostgreSQL; every tenant row carries `agency_id`)

- **Agency** (tenant): name, type (proxy, licensed import company with licence number, direct employer), tax ID, plan, data region, DPA version accepted.
- **User**, **Membership** (agency, role, client scope), **MfaDevice**, **Session**.
- **Client** (employer): legal type, name (Thai), tax or ID number (13 digits), address (province, district, sub-district), sector (for insurance rules: domestic, agriculture, livestock, other), contacts, LINE user link, status.
- **Workplace**: client, address, province (matters for border-pass and change-of-employer rules).
- **Worker**: passport name (master, Latin), Thai name, nationality, date of birth, sex, phone, LINE link, preferred language, current client, status.
- **Employment**: worker, client, job type, start, end, end reason (for the s.13 notices), wage (optional; for the v1 deduction check).
- **IdentityDocument**: worker, type (passport, CI or other substitute, visa, work permit, pink card, border pass, health certificate, SSO card, insurance), number, issuing country or body, issue date, expiry date, extra fields as JSON (for example hospital, insurer), verification state (entered, checked by staff, OCR).
- **FileObject**: owner (document, POA, case), storage key, content type, size, SHA-256, per-agency encryption key ID, uploaded by, uploaded at.
- **Cohort**: code, title (Thai and English), legal basis (resolution date, notice), status, version, published at, source URLs.
- **CohortRule**: cohort version, rule type (eligibility, deadline, cut-off time, document requirement, fee, insurance minimum), condition (JSON expression on worker and client fields), value, source URL, note.
- **CohortAssignment**: worker, cohort version, assigned by (engine or user), reason.
- **Case** (one filing): worker, client, cohort, type (renewal, new, change of employer, s.13 notice), stage, application number, dates per stage, fee references, appointment centre and date, rejection reason, assigned officer.
- **PowerOfAttorney**: grantor (worker or client), grantee (client or agency), scope, language pair, template version, stamp duty amount, signed scan file, valid from and to.
- **Requirement status** (computed, cached): worker, cohort version, item, state (missing, provided, expired, not needed), explanation.
- **Task** and **Reminder**: due at (date and time, Asia/Bangkok), channel, recipient, state.
- **Message**: channel (LINE, e-mail, SMS), template, recipient, delivery state, cost units.
- **Invoice** and **Payment** (v1, agency to client): lines, PromptPay reference, state.
- **Consent / NoticeRecord**: worker, notice version, language, shown at, signed file (v1).
- **ImportJob**: file, mapping, row results.
- **AuditEvent**: actor, action, object, before and after hash, IP, time; hash-chained.
- **ContentSource**: URL, title, date, archive copy, which rules cite it.

### Rules for dates, names and numbers

- Store dates as Gregorian ISO dates and times in Asia/Bangkok. Show Buddhist-era dates (B.E. = C.E. + 543) on Thai screens and documents. Accept both on import and flag likely mix-ups (a year of 2569 in a C.E. column, or 2026 in a B.E. column).
- Keep the passport Latin name exactly as printed. Store the Thai name as a separate field. Compare normalised forms across documents and warn on differences.
- Validate 13-digit numbers by length and check digit, as a warning only (formats for migrants unverified, see above).
- Store document numbers as entered and in a normalised form (no spaces or dashes) for matching application numbers and duplicates.

### Rules engine (content as data)

- Each cohort version is a set of rule rows plus golden test cases. The engine evaluates a worker against the rules and returns requirements, deadlines and reasons in plain Thai.
- Rule changes never touch code. They go through draft, expert review, legal approval (when legal text changes), golden tests, publish.
- Every requirement shown to a user links to its source and shows "rule version X, reviewed on date Y".

## Architecture and stack

### Recommendation: one plain monolith that AI agents can work on safely

- **Language and framework: Python 3.13 with Django (LTS line).** Reasons: a built-in admin for the content editor; mature auth, forms and i18n (Thai, Burmese, Lao, Vietnamese locales); strong PDF and OCR libraries in Python. AI coding agents also do well on Django's conventions, which keeps parallel work consistent. TypeScript with Next.js would also work; I prefer one language for back end, PDFs and OCR.
- **Front end: server-rendered pages with HTMX and a little Alpine.js.** The app is tables, forms and documents. No single-page app. The worker and client pages are small mobile pages; in v1 they also open inside LINE through LIFF.
- **Database: PostgreSQL 16 or later** (managed RDS). JSONB for rule conditions and extra document fields. Row-level security keyed on `agency_id` as a second wall behind the app's own scoping. Trigram index for name matching and duplicate search.
- **Background jobs: a Postgres-backed queue** (for example Procrastinate), so no Redis at first. Jobs: reminder scan every 15 minutes (cut-offs are times of day); daily digests at 07:30 Bangkok time; batch PDF rendering; import processing; LINE and e-mail sending with retries; nightly rule re-evaluation; backup checks.
- **Documents: HTML templates rendered to PDF with WeasyPrint.** It shapes Thai, Burmese and Lao text through HarfBuzz and Pango (behaviour to confirm in week 1 with native readers). Embed open fonts: Sarabun or Noto Sans Thai, Noto Sans Myanmar, Noto Sans Lao. Templates are versioned content, editable by the content editor, with a "reviewed by, on" footer.
- **Files: S3 in the Bangkok region**, private buckets, server-side encryption with one KMS key and per-agency data keys (envelope encryption), virus scan on upload (ClamAV), images resized and stripped of location metadata.
- **Messaging: LINE Messaging API** behind one module (`notify`), with e-mail and SMS fallbacks. In v1 each agency can plug in its own LINE Official Account token.
- **Rules engine: a small module** that evaluates JSON conditions against worker and client fields. Plain Python, fully unit-tested, with golden test files per cohort version.
- **Multi-tenancy: one database.** `agency_id` on every tenant row; Django query scoping plus Postgres row-level security (`SET app.agency_id` per request); automated tests that try cross-tenant reads on every endpoint.
- **Deploy: Docker images on EC2** (one VM at first) behind Caddy or an AWS load balancer; infrastructure as code (OpenTofu or Terraform); GitHub Actions CI. No Kubernetes.
- **Observability:** structured logs with no personal data; error tracking with personal-data scrubbing; uptime checks from outside Thailand and inside; a status page.

### Diagram

```
Agency staff, clients (browser / LINE)          Workers (LINE LIFF page, v1)
                 |                                         |
                 v                                         v
        Caddy or AWS ALB (TLS)  --->  Django app (web)  ---> PostgreSQL (RDS, RLS, PITR)
                                         |      ^
                                         v      |
                                   Job workers (Postgres queue)
                                    |        |          |          |
                          LINE Messaging   E-mail    SMS API   WeasyPrint PDFs
                                API         API                 MRZ/OCR (v1)
                                         |
                              S3 Bangkok (encrypted files) + versioned backup bucket

The user files on eworkpermit.doe.go.th in his or her own browser session.
The product never logs in to the portal. (v1: optional browser extension fills
forms locally from data the user opens in the product.)
```

### Built for Claude Code and parallel agents

- **One repository, strict module boundaries:** `accounts`, `tenancy`, `clients_workers`, `imports`, `rules`, `documents`, `cases`, `notify`, `portal_client`, `portal_worker`, `content_admin`, `audit`, `billing`. Each module owns its models, views, templates and tests.
- **Contracts first.** The foundation stream fixes the data model, the service interfaces and the design system before the parallel streams start. Agents then work in separate git worktrees on separate modules, so merge conflicts stay small.
- **A `CLAUDE.md` with house rules:** tenant scoping on every query, no personal data in logs, every rule with a source URL, Thai strings in translation files only, tests required for each change.
- **Synthetic data only in development.** A generator creates realistic fake workers (Burmese, Lao and Vietnamese names, passport numbers with valid check digits, Buddhist-era dates). No real worker data on laptops.
- **Gates on every merge:** unit and tenant-isolation tests, Playwright end-to-end tests of the main flows, a static security scan (for example Semgrep), dependency audit, an OWASP ZAP baseline scan on staging, and a Claude Code security review of the diff. The founder reviews and merges.

## Security, privacy and liability

### Thai data protection law (PDPA B.E. 2562)

Article numbers below are from the unofficial English translation hosted by KMUTT ([PDPA text](https://cc.kmutt.ac.th/Files/Act%20Eng/personal-data-protection-act-2019-en.pdf)) unless stated.

- **The law reaches a company abroad.** It applies to a controller or processor outside Thailand that offers goods or services to people in Thailand (s.5). Selling to Thai agencies from a company abroad is caught.
- **Roles.** The agency or direct employer decides why worker data is collected: it is the **controller**. We process on its instructions: we are the **processor** (s.40). We are controller only for our own customer accounts, billing and marketing.
- **Processor duties (s.40):** act only on instructions; keep appropriate security; tell the controller about any breach; keep records of processing. The controller must sign an agreement with the processor. The product ships a standard DPA that customers accept at sign-up.
- **Representative in Thailand.** A foreign controller must appoint a representative in Thailand in writing (s.37(5)); the duty also reaches foreign processors (s.38; penalty in s.86) ([Lexbangkok](https://lexbangkok.com/pdpa-local-representative-thailand/)). If the founder sells from a company abroad, budget for a Thai law firm or service provider to act as representative (price unverified; get quotes). A Thai company would remove this item; see parts 04-05.
- **Sensitive data (s.26).** Racial or ethnic origin, health, biometric and criminal-record data need explicit consent unless an exception applies, such as compliance with law for employment protection or social security (s.26(5)). The work-permit health check is a legal requirement, so the controller has a basis, but the product should still minimise: store "certificate from hospital H on date D, linked yes/no", never results. Do not store fingerprints or face images beyond the document photos the process needs.
- **Data protection officer (s.41).** Required where the core activity is processing sensitive data under s.26, or large-scale regular monitoring. Our core activity is processing documents of migrant workers, including health-check status. Treat a DPO as required from the pilot stage (my view, to confirm with the lawyer). It can be an outside service (s.41).
- **Breach notice.** The controller notifies the PDPC Office within 72 hours where feasible, and the people affected if the risk is high (s.37(4)). The PDPC's 2022 rules allow up to 15 days with reasons if 72 hours is impossible ([Mondaq](https://www.mondaq.com/data-protection/1264734/pdpa-update-how-to-notify-data-breach-incidents), search summary). Our DPA promises to tell the agency within 24 hours of discovery, so it can meet its 72 hours.
- **Transfers abroad.** Hosting in Bangkok keeps the stored data in Thailand. Remote admin access by a founder abroad, and any foreign sub-processor (e-mail API, error tracker, LLM API), still count as transfers. The PDPC's 2023 rules allow transfers with adequacy, binding corporate rules, or safeguards such as standard contractual clauses; two SCC models are accepted and need no PDPC approval ([Tilleke](https://www.tilleke.com/insights/thailand-unveils-regulations-for-cross-border-personal-data-transfer)). Put SCCs in the DPA and the sub-processor contracts. Keep sub-processors abroad away from worker documents where possible.
- **Records of processing (s.39, s.40).** Keep one for us as processor, and give agencies a pre-filled template for theirs.
- **Notices to workers.** The controller must tell workers what it collects and why. The product provides the agency's notice in Thai, Burmese, Lao and Vietnamese, reviewed by the lawyer and native speakers, and records which version each worker saw (v1).
- **Fines.** Administrative fines go up to 1, 3 or 5 million baht depending on the breach; 5 million for sensitive-data breaches by a controller (s.84), and 1-5 million for processor breaches (s.85-87). The first fine, 7 million baht in 2024 against an online seller, followed a leak in which staff across the company could see all customer data and complaints went unanswered ([IAPP](https://iapp.org/news/a/first-fine-imposed-under-thailand-s-personal-data-protection-act)). Access control is the point regulators look at.

### Other Thai rules for a SaaS provider

- **Computer Crime Act s.26.** A service provider must keep computer traffic data for at least 90 days, and longer on an official's order; client identification data for at least 90 days after service ends; fine up to 500,000 baht ([Tilleke](https://www.tilleke.com/insights/ensuring-compliance-thai-computer-related-crimes-act); [UNODC](https://sherloc.unodc.org/cld/uploads/pdf/El%20Evidence%20Hub/Electronic_Evidence_Fiche_as_of_23_December_2022_THAILAND.pdf); search summaries). Keep access logs (no document contents) for 120 days in an append-only store.
- **No recruitment licence for software (my reading, unverified).** The licence in the Royal Ordinance covers bringing foreigners into Thailand to work ([legardy](https://legardy.com/thai-law/foreinger-work-law/foreinger-work-law-general); [01-law-and-requirements.md](01-law-and-requirements.md)). A tool that does not file, recruit or handle workers is outside it. The agencies hold their own registrations. Confirm with the lawyer in week 1.

### Security baseline (before any real worker data)

- TLS everywhere with HSTS. MFA required for all agency users. Argon2 password hashing, login rate limits, 30-minute idle timeout for agency users.
- Role-based access plus per-client scoping for staff, plus Postgres row-level security. Tenant-isolation tests in CI.
- Encryption at rest (RDS and S3 with KMS) and envelope encryption of files per agency. Signed, short-lived URLs for file downloads.
- Hash-chained audit log of every view and change of worker data, visible to the agency owner.
- Daily snapshots plus point-in-time recovery (14 days) and a versioned, object-locked backup bucket in the same region. Monthly restore drill. Targets: lose at most 15 minutes of data; back within 8 hours.
- Support access only with the agency's time-limited consent, logged.
- Weekly dependency updates. External penetration test before paid launch, then yearly.
- Written policies: information security, access control, incident response with the 24-hour processor notice, backup, sub-processor list. Agencies will ask for them.

### Liability and ethics

- **A tool, not a filer.** The product does not submit anything to the DOE, does not hold portal credentials, does not sell queue slots and does not handle state fees. The agency files and remains responsible. Queue-slot selling is under investigation and must stay out of the product ([Naewna](https://www.naewna.com/politic/950084)).
- **Content disclaimer.** Each requirement shows "rule version X, reviewed on date Y, source Z". The user must confirm against the DOE notice. We commit to publish rule updates within 3 working days of an official notice and to tell users (a promise the content process must meet).
- **Terms:** liability capped at fees paid in the last 12 months; no liability for fines where the user ignored a warning or a published update; clear statement that the product gives no legal advice.
- **Insurance:** cyber and professional indemnity cover once paying customers exist (price unverified).
- **Worker protection by design.** Workers can see their own status and the official fees. No "hold documents" feature. A warning when recorded deductions exceed 10% of monthly pay (v1). A plain-language notice in the worker's language. These also help sales to employers who supply brand buyers with audits (unverified).

## Hosting and running costs

### Choice: AWS Asia Pacific (Thailand), Bangkok

- **Why Bangkok.** Worker documents stay in Thailand. That simplifies the PDPA transfer story and is easy to explain to agencies. The region has three availability zones and offers EC2, RDS and S3 ([AWS](https://aws.amazon.com/blogs/aws/announcing-the-new-aws-asia-pacific-thailand-region/)).
- **Unit prices in the Thailand region (AWS public price list, read 10 Oct 2026):** EC2 Linux on-demand t4g.medium (2 vCPU, 4 GB) USD 0.0382 an hour, about 28 a month; t4g.large (8 GB) 0.0763, about 56 a month ([AWS EC2 price file](https://b0.p.awsstatic.com/pricing/2.0/meteredUnitMaps/ec2/USD/current/ec2-ondemand-without-sec-sel/Asia%20Pacific%20(Thailand)/Linux/index.json)). RDS PostgreSQL db.t4g.small single-AZ 0.046 an hour (about 34 a month); db.t4g.medium Multi-AZ 0.183 (about 134); db.m7g.large Multi-AZ 0.398 (about 291) ([AWS RDS price file](https://b0.p.awsstatic.com/pricing/2.0/meteredUnitMaps/rds/USD/current/rds-postgresql-ondemand.json)). S3 Standard 0.0225 per GB-month ([AWS S3 price file](https://b0.p.awsstatic.com/pricing/2.0/meteredUnitMaps/s3/USD/current/s3.json)). One-year reserved pricing would cut compute by roughly a third (unverified).
- **Cheaper fallback:** a single VM with self-managed Postgres in a Singapore data centre would cost less, but moves data abroad and puts backups and patching on the founder. Not recommended for this data.

### Monthly running cost (my estimates, USD, before VAT, excluding people)

Assumptions: average customer = an agency with about 150 active workers; about 3 MB of files per worker; about 10 LINE push messages per worker a year if we send them from our own LINE account.

| Item | 50 customers (~7,500 workers) | 300 customers (~45,000) | 1,000 customers (~150,000) |
|---|---|---|---|
| App and job servers (EC2) | 1 × t4g.medium: ~30 | 2 × t4g.large + 1 × t4g.medium + load balancer: ~165 | 3 × t4g.large + 2 × t4g.medium + load balancer: ~255 |
| PostgreSQL (RDS) incl. storage and backups | db.t4g.small single-AZ: ~40 | db.t4g.medium Multi-AZ: ~160 | db.m7g.large Multi-AZ: ~360 |
| S3 files plus backup copy (~25 / 150 / 450 GB) | ~2 | ~8 | ~22 |
| KMS, secrets, DNS, public IPs | ~8 | ~12 | ~20 |
| E-mail API | 5-15 | 20-35 | 40-60 |
| LINE Official Account (our account) | Basic 1,280 baht: ~39 | Pro 1,780 baht + extra: ~58 | Pro + ~90,000 extra messages: ~218 |
| SMS fallback | ~5 | 10-20 | 30-50 |
| Error tracking, logs, uptime | 10-30 | 30-60 | 60-120 |
| Document OCR (v1, Haiku-class API or self-hosted) | ~1 | ~7 | ~25 |
| Headroom (~20%) | ~30 | ~100 | ~200 |
| **Total a month** | **~150-250** | **~450-700** | **~1,100-1,700** |
| Per customer a month | ~3-5 | ~1.5-2.3 | ~1.1-1.7 |

- At the part 02 agency price (990 baht a month for 100 workers plus 8 baht per extra worker, about 1,390 baht or USD 42 for 150 workers) ([part 02](02-market-and-competition.md)), running cost is about 7-12% of revenue at 50 customers, 4-6% at 300 and 3-4% at 1,000 (my arithmetic; 33 baht per USD assumed).
- If agencies connect their own LINE accounts (v1), most messaging cost moves to them.
- Card fees are separate: Paddle takes 5% + 50 US cents per transaction ([Paddle](https://www.paddle.com/pricing)), about 6% on a USD 42 monthly charge and less on yearly billing.
- Fixed yearly items that do not scale with customers: PDPA representative and DPO service, yearly penetration test, lawyer and domain-expert retainers for rule updates, Claude Code subscription. See Budget.

## Development plan

### Basis

- The founder builds with Claude Code and several AI agents working in parallel. No salaried developers. The founder is product owner, reviewer, tester and the only one who merges.
- MVP in about 3 weeks of build. Sellable in about 8 weeks, once legal content is approved, the security test is passed and pilots have used it.
- Start Mon 12 Oct 2026. Thai public holidays in the window: 23 Oct (Chulalongkorn Day), 5 Dec and 10 Dec (substitute days unverified). The 11 Dec 2026 filing deadline falls in week 9.

### Build order

1. Foundation first: data model, tenancy, auth, design system, synthetic data. Every stream depends on it.
2. Then the four parts that make the MVP useful in the rush, in parallel: import, rules and checklist, documents, case tracker.
3. Then notifications and the client view, which need the first four.
4. Security hardening and operations run alongside from day 3.
5. Worker self-service, OCR, the autofill extension and billing of clients come after the pilot shows what is worth it.

### Agent work streams for the MVP

| Stream | Agent | What it builds | Depends on | Days (from 12 Oct) |
|---|---|---|---|---|
| WS0 Foundation | Founder + 1 agent | Repo, CLAUDE.md rules, CI, Django skeleton, auth with MFA, tenancy with row-level security and isolation tests, base layout in Thai, i18n files, synthetic data generator, the full data model and service interfaces, staging on AWS Bangkok via infrastructure code | none | 1-3 |
| WS1 Clients, workers, import | Agent A | Client and worker CRUD, document records, Excel/CSV template, column mapping, validators (13-digit check digit, B.E./C.E. dates, expiry logic, duplicates across clients), row error report, undo | WS0 | 4-12 |
| WS2 Rules engine and content admin | Agent B + founder + domain expert | Rule tables, condition evaluator, requirement status cache, golden tests, content admin with versions and source links, preloaded rounds from part 01 | WS0 | 4-12 (content continues to day 18) |
| WS3 Documents | Agent C | WeasyPrint templates with Thai, Burmese, Lao and Vietnamese fonts; POA worker→employer or agent and employer→agent; stamp-duty line; cover sheet; fee quote; batch rendering to one PDF or ZIP | WS0; lawyer's draft texts by day 10 | 4-14 |
| WS4 Cases and filing helper | Agent D | Case stages, kanban and table, bulk moves, paste-in of application numbers with matching, filing sheet with copy buttons, upload-ready file naming, deadline radar | WS0, WS1 models | 4-14 |
| WS5 Notifications and client view | Agent E | LINE Messaging API module, e-mail and SMS fallbacks, reminder scheduler with cut-off times, daily and weekly digests, magic-link client view on phone | WS0, WS2 deadlines | 6-15 |
| WS6 Security and operations | Agent F | KMS envelope encryption of files, signed URLs, audit log with hash chain, rate limits, backups and restore drill, logging without personal data, uptime checks, Semgrep and ZAP in CI, production environment | WS0 | 3-21 |
| WS7 Quality | Agent G (rotating) | Playwright end-to-end tests of flows 1-4, import fuzzing with messy spreadsheets, time-travel tests of reminders, review of every pull request | all | 5-21 |

- **Integration:** days 15-18 (26-29 Oct). **Feature freeze:** day 19 (30 Oct). **MVP feature-complete:** Sun 1 Nov.
- Keep four or five agents running at once at most. The founder's review time and the subscription's usage limits are the real bottleneck, not the agents.
- Every stream ends with a demo script the founder runs by hand.

### Calendar

| Week (starts) | Build | Content and legal | Pilot and sales |
|---|---|---|---|
| 0 (Sat 10 Oct) | Accounts: AWS, GitHub, LINE OA, domain | Find and brief the Thai lawyer and the domain expert | Book 10-12 interviews with proxies and small agencies by LINE or video, with a Thai-speaking helper |
| 1 (12 Oct) | WS0 foundation (days 1-3); WS1-WS4 and WS6 start | Expert drafts the 11 Dec 2026 round rules and checklists; lawyer confirms the "no licence needed" reading and the PDPA set-up | Interviews: collect blank or anonymised spreadsheets, POA samples, portal screenshots for field order |
| 2 (19 Oct) | Streams build; WS5 starts | Lawyer drafts POA texts and the worker notice; translations ordered once Thai texts are fixed | Pick 3-5 pilot agencies; sign pilot terms and the DPA |
| 3 (26 Oct) | Integration, end-to-end tests, staging; freeze 30 Oct; MVP complete 1 Nov | Native speakers check rendered POAs and notices; golden tests pass for all open rounds | Demo recordings in Thai |
| 4 (2 Nov) | Production go-live gate: MFA, encryption, backups, restore drill, ZAP clean, isolation tests | **Legal checkpoint 1:** POA templates, worker notice, DPA and pilot terms approved | Pilots start with real data; we load their spreadsheets for them the same day |
| 5 (9 Nov) | Daily fixes from pilot use | Expert reviews any new DOE notices | Watch officers use the filing sheet; measure minutes per worker |
| 6 (16 Nov) | **External penetration test** (about 5 working days); Paddle billing integration | Terms of service, privacy policy, disclaimers drafted | Pricing interviews with pilots |
| 7 (23 Nov) | Fix high and medium findings; retest | **Legal checkpoint 2:** ToS, DPA with SCCs, privacy, disclaimers final; PDPA representative and DPO appointed if selling from abroad | Pricing page in Thai; pilot-to-paid offer |
| 8 (30 Nov) | **Sellable.** Paid sign-up open | Rule set for the next rounds (13 Feb and 31 Mar 2027) drafted | Support pilots through the final week (7-11 Dec) |
| After (14 Dec-Jan) | v1: worker LINE page, MRZ reading, client invoices, s.13 clock, inspection pack | e-POA question put to the DOE | Paid launch in January for the Feb and Mar 2027 waves |

**Risk in the calendar.** Agencies are busiest from mid-November to 11 Dec. Some will not change tools then. The pilot offer is built for that: we import their data and hand them the deadline radar and POA batches with no setup work. If they still refuse, use the rush to observe, and onboard them in January.

### Definition of done for the MVP

1. An agency imports a 200-worker spreadsheet covering 10 clients in under 30 minutes, gets a row-by-row error report, and at least 95% of valid rows are placed in the right cohort automatically.
2. For the 11 Dec 2026 round, the checklist matches the DOE list (passport or substitute; linked health check; social security, or insurance of 6 or 12 months by case and sector; POA with stamp duty) on 30 golden test cases signed off by the domain expert.
3. 100 POAs (Thai plus Burmese, Lao or Vietnamese) render in under 2 minutes, and native speakers confirm the text renders correctly. The lawyer has approved the wording.
4. The case tracker covers every portal step. Pasting 50 application numbers updates 50 cases correctly.
5. Reminders fire correctly for all deadline and cut-off types in automated time-travel tests, by LINE and by e-mail.
6. The client view works on a phone and shows only that client's workers.
7. Tenant-isolation tests pass; MFA is enforced; a backup restore has been done; the penetration test has no open high or critical finding.
8. At least 3 pilot agencies have run a real batch through it; at least 2 say they would pay the planned price.
9. PDPA paperwork exists: DPA, sub-processor list, records of processing, breach runbook, worker notice templates, and the representative and DPO if selling from abroad.

## Budget

### Cash to "sellable" (8 weeks; founder unpaid; no salaried developers)

| Item | Low (USD) | High (USD) | Basis |
|---|---|---|---|
| Claude Code subscription (1-2 seats, 2-3 months) | 400 | 1,200 | Max plan from USD 100 a month ([claude.com/pricing](https://claude.com/pricing)); assume about USD 200 per seat-month for the higher tier (unverified) |
| Claude API for testing document extraction | 20 | 100 | Haiku 5.5 USD 0.10/0.50 per million tokens ([claude.com/pricing](https://claude.com/pricing), API tab) |
| GitHub, CI minutes, error tracking, design tools | 0 | 150 | Free tiers cover most |
| AWS staging and production for 2 months | 150 | 400 | Prices above |
| Domain, e-mail API, LINE OA Basic for 2 months, SMS credit | 100 | 200 | LINE Basic 1,280 baht a month ([LINE](https://lineforbusiness.com/th/service/line-oa-features/broadcast-message)) |
| Thai lawyer: 2 POA templates, worker notice and consent, DPA with SCCs, ToS, disclaimers, licence question (20-40 hours at 3,000-5,000 baht) | 1,800 | 6,100 | Rates from [Global Law Experts](https://globallawexperts.com/commercial-lawyer-cost-thailand/) and [ThaiLawOnline](https://www.thailawonline.com/?p=2657) (search summaries) |
| Domain expert (experienced proxy or agency document officer): rules, checklists, field order, 30 golden cases (30-60 hours at 800-1,500 baht, unverified) | 730 | 2,700 | My estimate |
| Translation and native-speaker review: Burmese, Lao, Vietnamese, about 5,000 words each (rate unverified) | 700 | 1,600 | My estimate |
| Thai-speaking helper for interviews and pilot support (part-time, optional) | 0 | 1,500 | My estimate |
| External penetration test (grey-box, 3 roles) | 2,500 | 6,000 | About USD 3,400 black-box, or 3,400 + 900 per role grey-box at one vendor ([Pentest-Tools](https://pentest-tools.com/services/web-app-penetration-testing), search summary); Thai quotes unverified |
| PDPA representative and outsourced DPO, first year (only if selling from a company abroad) | 900 | 3,600 | 30,000-120,000 baht, unverified; get quotes |
| Pilot trip to Thailand (flight and about 10 days) | 1,200 | 3,000 | My estimate |
| Contingency (15%) | 1,300 | 3,950 | |
| **Total** | **about 9,800** | **about 30,500** | about 320,000-1,000,000 baht at 33 baht per USD (assumed) |

**Lean path:** about USD 10,000-14,000. Skip the trip and the helper, use one Claude seat, narrow the pen-test scope to the agency and client roles, and delay the PDPA representative only if the first pilots are run under a Thai partner's entity (to check with the lawyer).

### Running cost in year 1 after launch (fixed items, USD a year, my estimates)

| Item | Low | High |
|---|---|---|
| Claude Code subscription (1 seat) | 1,200 | 2,400 |
| Hosting and messaging at 50-150 customers | 1,800 | 4,200 |
| Domain expert for new rounds (5-10 hours a month) | 1,500 | 5,500 |
| Lawyer for legal-text changes and contract questions (1-3 hours a month) | 1,100 | 5,500 |
| Second penetration test (month 12) | 2,500 | 6,000 |
| PDPA representative and DPO (if abroad) | 900 | 3,600 |
| Cyber and professional indemnity insurance (unverified) | 500 | 1,500 |
| **Total** | **about 9,500** | **about 28,700** |

Payment fees (Paddle 5% + 50 US cents) come on top, as a share of revenue.

## Risks

| Risk | Why it matters | Mitigation |
|---|---|---|
| Filing stays manual | No API, ThaID login and bot protection mean the product can only prepare and track. The saving per worker may be small | Measure minutes saved per worker in the pilot. Build the autofill extension only if the DOE has no objection. Sell the multi-client view and fewer rejections, not "automation" |
| Busy season adoption | Agents may refuse new tools in the last weeks before 11 Dec | Concierge import; free until January; target the Feb and Mar 2027 waves |
| A rule error causes a missed deadline or a fine | Fines reach 10,000-100,000 baht per worker ([drthawip.com](https://www.drthawip.com/book/export/html/3263)) | Expert and lawyer review, golden tests, source link on every rule, change log, disclaimers, liability cap, insurance |
| Data breach | Passport and health-check data of vulnerable workers; PDPA fines up to 5 million baht | Bangkok hosting, MFA, row-level security, encryption, minimal health data, audit log, pen test, 24-hour processor notice |
| AI-written code with hidden flaws | Parallel agents produce a lot of code fast | Small, boring stack; contracts first; tenant-isolation tests; static scans; security review on every diff; external pen test |
| Portal changes | Field order and file rules can change without notice; the operator dispute could bring a new system ([Thansettakij](https://www.thansettakij.com/general-news/668193)) | Filing sheet is data-driven and quick to edit; no hard dependency on portal pages |
| The DOE adds a bulk agent view | Would cut part of the value | Keep value in multi-client tracking, rules, documents and client communication, which a state portal rarely offers |
| workdoc adds a multi-client mode | The direct incumbent is owned by an import agency ([part 02](02-market-and-competition.md)) | Move fast with proxies; stress neutrality; price at or below workdoc per worker |
| Burmese text errors | Zawgyi versus Unicode can make POAs unreadable | Unicode only, embedded fonts, native-speaker checks, Zawgyi detection on input |
| LINE dependence | Pricing or API changes | Channel abstraction; e-mail and SMS fallbacks; agencies' own OA in v1 |
| Selling from abroad | PDPA representative, Thai tax invoices and Thai support are harder from abroad | Settle in parts 04-05; Thai-speaking helper; Thai-language help pages |
| One founder | Support load peaks in deadline weeks | Limit pilots; runbooks; status page; scheduled releases outside deadline weeks |

## Open questions

1. What file types and sizes does e-WorkPermit accept for uploads? (Not published; check with a pilot user.)
2. How does a proxy account link to many employers on the portal, and how is the POA recorded there? (DOE manual for authorised representatives is image-only: [FlipHTML5](https://online.fliphtml5.com/tcytp/hsif/).)
3. Does the DOE accept an electronically signed POA with an e-Stamp Duty code instead of paper with stamps?
4. Does the DOE object to a browser extension that fills forms in the user's own session?
5. What do the portal's status e-mails look like, and are they stable enough to parse?
6. Can employers or agents export a worker list from the portal? Not seen in any guide.
7. Which 13-digit formats do migrant pink cards use (0/00 or 6), and do they use the standard check digit?
8. How much time does an officer spend per worker today, and how much does the filing sheet save?
9. Will VAT-registered agencies buy from a foreign seller without a Thai tax invoice? (Parts 04-05.)
10. Price and scope of a PDPA representative and outsourced DPO service in Bangkok.
11. Is "data stays in Thailand" a selling point for agencies, or only for compliance?
12. Should the product cover Cambodian workers, whose track is separate ([01-law-and-requirements.md](01-law-and-requirements.md))?

## Sources

Opened and read (directly, by download, or by text extraction):
- DOE and portal: https://gao.psu.ac.th/images/download/immigration/e-WorkPermit_Information.pdf ; https://www.exworker.co.th/en/blog/e-workpermit-en ; https://www.thansettakij.com/social-biz/655341 ; https://mgronline.com/uptodate/detail/9680000104517 ; https://www.bangkokbiznews.com/news/news-update/1250827 ; https://eworkpermit.doe.go.th/ (Cloudflare 403 page only)
- Identity and upload rules: https://emerhub.com/news/digital-work-permits-for-foreign-employees/ ; https://ata-outsourcing.com/thailand-e-work-permit-mandatory-from-october-2025/ ; https://sea.peoplemattersglobal.com/news/economy-policy/thailand-makes-online-work-permits-mandatory-for-foreign-workers-46835 ; https://www.ey.com/content/dam/ey-unified-site/ey-com/en-gl/technical/tax-alerts/documents/thailand-launches-online-platform-for-work-permit-applications.pdf
- PDPA and other law: https://cc.kmutt.ac.th/Files/Act%20Eng/personal-data-protection-act-2019-en.pdf (unofficial English translation) ; https://lexbangkok.com/pdpa-local-representative-thailand/ ; https://www.tilleke.com/insights/thailand-unveils-regulations-for-cross-border-personal-data-transfer ; https://iapp.org/news/a/first-fine-imposed-under-thailand-s-personal-data-protection-act ; https://www.infoquest.co.th/?p=40873 (e-Stamp Duty)
- Messaging and payments: https://lineforbusiness.com/th/service/line-oa-features/broadcast-message ; https://developers.line.biz/en/docs/messaging-api/pricing/ ; https://www.thaibulksms.com/ ; https://www.paddle.com/pricing ; https://claude.com/pricing
- Hosting prices (AWS public price files, Asia Pacific (Thailand), read 10 Oct 2026): https://b0.p.awsstatic.com/pricing/2.0/meteredUnitMaps/ec2/USD/current/ec2-ondemand-without-sec-sel/Asia%20Pacific%20(Thailand)/Linux/index.json ; https://b0.p.awsstatic.com/pricing/2.0/meteredUnitMaps/rds/USD/current/rds-postgresql-ondemand.json ; https://b0.p.awsstatic.com/pricing/2.0/meteredUnitMaps/s3/USD/current/s3.json ; region launch: https://aws.amazon.com/blogs/aws/announcing-the-new-aws-asia-pacific-thailand-region/ (search result)

Search summaries only (not opened):
- https://vialtopartners.com/regional-alerts/thailand-immigration-e-work-permit-system-now-operational ; https://vialtopartners.com/regional-alerts/thailand-immigration-e-work-permit-processing-further-extended-until-28-october-2026
- https://www.dailynews.co.th/news/6195024/ ; https://www.thairath.co.th/newspaper/2954081 (13-digit numbers)
- https://en.wikipedia.org/wiki/Zawgyi_font ; https://www.frontiermyanmar.net/en/zawgyi-to-unicode-the-big-switch ; https://engineering.fb.com/android/unicode-font-converter/ ; https://github.com/google/myanmar-tools (not opened; access blocked)
- https://huggingface.co/scb10x/typhoon-ocr1.5-2b ; https://github.com/scb-10x/typhoon-ocr
- https://www.tilleke.com/insights/ensuring-compliance-thai-computer-related-crimes-act ; https://sherloc.unodc.org/cld/uploads/pdf/El%20Evidence%20Hub/Electronic_Evidence_Fiche_as_of_23_December_2022_THAILAND.pdf
- https://www.mondaq.com/data-protection/1264734/pdpa-update-how-to-notify-data-breach-incidents
- https://pentest-tools.com/services/web-app-penetration-testing ; https://globallawexperts.com/commercial-lawyer-cost-thailand/ ; https://www.thailawonline.com/?p=2657
- https://dev.classmethod.jp/articles/try-to-use-ap-southeast-7-thailand-region/

Carried over from the B1 report and parts 01-02 (not re-checked here):
- https://www.nationthailand.com/news/policy/40069723 ; https://thailand.prd.go.th/en/content/category/detail/id/2874/iid/429777 ; https://www.drthawip.com/book/export/html/3263 ; https://www.rd.go.th/25348.html ; https://www.bangkokbiznews.com/news/1250192 ; https://www.thansettakij.com/general-news/668193 ; https://www.naewna.com/politic/950084 ; https://legardy.com/thai-law/foreinger-work-law/foreinger-work-law-general ; https://www.workdoc.cloud/pricing

Assumption used throughout: 33 baht per US dollar (unverified).
