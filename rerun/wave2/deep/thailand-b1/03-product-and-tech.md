# Thailand B1: migrant-worker permit desk: product, technical design and development plan (deep dive 03)

Date: 10 Oct 2026. Status: IN PROGRESS. Builds on [the B1 report](../reports/thailand-b1.md), [01-law-and-requirements.md](01-law-and-requirements.md) and [02-market-and-competition.md](02-market-and-competition.md). "My estimate" marks numbers I derived. "(unverified)" marks facts I could not confirm.

Working positioning (from part 02): a multi-client back office for proxy filers (ผู้ดำเนินการแทน) and smaller licensed import companies (บริษัทนำคนต่างด้าวมาทำงาน), not a generic expiry tracker for employers. workdoc already sells that one ([workdoc pricing](https://www.workdoc.cloud/pricing)).

## Summary

- **What to build.** A web back office, plus LINE, for people who renew work permits for many employers at once. The buyer is the proxy filer (ผู้ดำเนินการแทน) or the small licensed import company. Working name: "Permit Desk". It holds clients, workers, cohorts and deadlines in one place. It checks each worker's documents before filing. It prints powers of attorney (POAs) in bulk. It tracks every step of each application. It tells clients and workers what is happening, in their own language. The free employer view turns each agent into a sales channel (positioning from [part 02](02-market-and-competition.md)).
- **What the portal leaves undone.** e-WorkPermit is the only filing channel. It handles filing, upload of evidence, payment and status ([Thansettakij, 30 Mar 2026](https://www.thansettakij.com/social-biz/655341)). It is built around one employer or one worker at a time. I found no export, bulk view, deadline radar or API ([Exworker guide](https://www.exworker.co.th/en/blog/e-workpermit-en)). Its common errors are mismatched ID, passport or permit numbers, accounts still held by a previous agent, duplicates and name mismatches ([Exworker](https://www.exworker.co.th/en/blog/e-workpermit-en)). Software can catch most of these before the agent opens the portal.
- **No integration is possible today, so design around that.** The portal sits behind Cloudflare bot protection. It returned a 403 challenge page to this research machine on 10 Oct 2026. Users must prove their identity with the ThaID app before using it ([Emerhub](https://emerhub.com/news/digital-work-permits-for-foreign-employees/); [People Matters](https://sea.peoplemattersglobal.com/news/economy-policy/thailand-makes-online-work-permits-mandatory-for-foreign-workers-46835)). So the product never logs in for the user and never scrapes. The agent files by hand. The product makes that fast: a "filing sheet" per worker with fields in portal order and copy buttons, ready-named upload files, and bulk paste of application numbers. A browser extension that fills forms in the agent's own session comes in v1, after a check of the DOE's terms.
- **MVP (about 3 weeks of build).** Agency workspace with roles and MFA. Clients and workers. Excel import with validators (13-digit ID check, Buddhist-era dates, passport rules, duplicates). A cohort rules engine, preloaded with the 11 Dec 2026 renewal and the other open rounds. A per-worker checklist. Bulk POA and cover-sheet PDFs in Thai plus Burmese, Lao or Vietnamese. A filing tracker for every DOE step. Deadline reminders by LINE and email. A read-only client view. Full export and audit log.
- **v1 (months 2-4).** Worker self-service through LINE (upload photos, sign consent and POA, see status). Passport MRZ reading in-house. The autofill browser extension. Status updates parsed from forwarded portal e-mails. Client invoices with PromptPay QR. Section 13 hire and exit notices. Inspection pack per employer. Electronic POA with online stamp duty: the Revenue Department's e-Stamp Duty system covers powers of attorney and has an API ([InfoQuest, 2020](https://www.infoquest.co.th/?p=40873)). Whether the DOE accepts an e-POA is unverified.
- **Stack.** One Python/Django monolith with HTMX, PostgreSQL with row-level security, a Postgres job queue, WeasyPrint for Thai, Burmese and Lao PDFs, and the LINE Messaging API. Host it in the AWS Bangkok region (ap-southeast-7, live since Jan 2025) so worker data stays in Thailand ([AWS](https://aws.amazon.com/blogs/aws/announcing-the-new-aws-asia-pacific-thailand-region/)).
- **Privacy is the main legal design input.** The data is about vulnerable people. It includes health-check status, which is sensitive data under PDPA s.26 ([PDPA, unofficial English text](https://cc.kmutt.ac.th/Files/Act%20Eng/personal-data-protection-act-2019-en.pdf)). The agent or employer is the controller; we are the processor. A company abroad that serves Thai users falls under the PDPA (s.5) and must appoint a representative in Thailand (s.37(5), applied to processors via s.38) ([PDPA text](https://cc.kmutt.ac.th/Files/Act%20Eng/personal-data-protection-act-2019-en.pdf); [Lexbangkok](https://lexbangkok.com/pdpa-local-representative-thailand/)). Breach notice within 72 hours (s.37(4)). Fines up to 5 million baht for sensitive-data breaches (s.84). The first PDPA fine, 7 million baht in 2024, was for poor access control ([IAPP](https://iapp.org/news/a/first-fine-imposed-under-thailand-s-personal-data-protection-act)).
- **Running cost is small.** About USD 150-250 a month at 50 customers, 450-700 at 300 and 1,100-1,700 at 1,000 (my estimates). That is about 2-8% of the revenue in part 02's price model.
- **Cash budget to "sellable" (8 weeks, founder unpaid, no hired developers).** About USD 11,000-30,000 (about 360,000-990,000 baht at an assumed 33 baht per USD). Lawyer, domain expert, translations and the security test are most of it. Claude Code subscriptions and hosting are small.
- **Calendar.** Start Mon 12 Oct 2026. MVP feature-complete 1 Nov. Real-data pilot with 3-5 agencies from 2 Nov, during the 11 Dec 2026 rush. Security test mid-November. Sellable from 30 Nov. Paid launch in January 2027, ahead of the Feb and Mar 2027 deadlines. The rush is both the chance and the risk: busy agents may not switch tools mid-crunch. So the pilot offer is "send us your spreadsheet; we load it and you get a deadline radar and POA batches the same day".

## Users and jobs

### Who uses the product

| Role (Thai label) | Who | Main jobs | Rights |
|---|---|---|---|
| **Agency owner** (เจ้าของสำนักงาน / ผู้ดำเนินการแทน) | Proxy filer or owner of a small licensed import company (บริษัทนำคนต่างด้าวมาทำงาน) | Take on clients; set fees; watch every deadline; approve POA texts; bill clients | Everything in the workspace, billing, user admin |
| **Document officer** (เจ้าหน้าที่เอกสาร) | Agency staff, usually Thai, who files on e-WorkPermit under their own ThaID-verified account | Collect and check documents; prepare POAs; file and pay on the portal; record application numbers, payments, appointments | Assigned clients or all clients; no billing |
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
5. Filing: the officer opens the worker's filing sheet beside the portal, copies fields in order, and uploads the ready-named files. The portal is used in the officer's own ThaID-verified account.
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
| **Thai document OCR** | Pink card, permit card, insurance card | Typhoon OCR 1.5 (2B, open model from SCB 10X, built on Qwen3-VL 2B) ([Hugging Face](https://huggingface.co/scb10x/typhoon-ocr1.5-2b), search summary); licence said to be permissive (unverified). Or the Claude API: Haiku 5.5 at USD 0.10/0.50 per million tokens in/out, Sonnet 5.5 at 2/10 (Anthropic price list, Oct 2026), so well under 1 US cent per document, but images then leave Thailand | Later; the self-hosted model is preferred for privacy. If an API is used, the DPA and the agent's notice must cover the transfer (PDPA s.29) |
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

## Notes (raw, to fold into sections)

- (filled as research proceeds)
- Portal access: eworkpermit.doe.go.th returned a Cloudflare "Attention Required" 403 page to this research machine (10 Oct 2026). Bot protection means scraping or robotic filing would be fragile.
- DOE user manuals (FlipHTML5, image-only): employer signatory registration https://online.fliphtml5.com/tcytp/djhr/ ; authorised representative (POA holder) registration https://online.fliphtml5.com/tcytp/hsif/ ; foreign workers https://fliphtml5.com/bookcase/jfmqd/?foldId=3467 . LINE OA: employers @doewp; employment agencies and authorised representatives @990seasu; foreigners @833nmpkk. 8 steps: register, apply, pay application fee, verify documents, check approval, pay permit fee, book appointment, visit service centre ([PSU e-WorkPermit information PDF](https://gao.psu.ac.th/images/download/immigration/e-WorkPermit_Information.pdf)).
- Identity: employers (or authorised director) and foreign employees verify identity in the ThaiID (ThaID) app before using the portal; documents (passport, medical certificate, degrees) are uploaded digitally; biometrics at a service centre for a smart card ([Emerhub](https://emerhub.com/news/digital-work-permits-for-foreign-employees/); [ATA Outsourcing](https://ata-outsourcing.com/thailand-e-work-permit-mandatory-from-october-2025/); [People Matters](https://sea.peoplemattersglobal.com/news/economy-policy/thailand-makes-online-work-permits-mandatory-for-foreign-workers-46835)). Licensed recruitment companies could register from 6 Oct 2025; nationwide 13 Oct 2025 (search summary).
- Portal request types: new permit, renewal, notify entry/exit or change employer, edit application, appointment, status, problem report. Errors: no data found (ID/passport/permit number mismatch), wrong account type, duplicates, account held by previous agent, name mismatch (follow passport spelling). No export, bulk or API mentioned ([Exworker](https://www.exworker.co.th/en/blog/e-workpermit-en)).
- Paper fallback for s.59, 60 para 2, 61, 62 and 67 extended to 28 Oct 2026 ([Vialto](https://vialtopartners.com/regional-alerts/thailand-immigration-e-work-permit-processing-further-extended-until-28-october-2026), search summary). Renewal can be filed up to 60 days before expiry (was 30) ([Vialto](https://vialtopartners.com/regional-alerts/thailand-immigration-e-work-permit-system-now-operational), search summary).
- LINE OA Thailand prices: Free 300 broadcast messages/month; Basic 1,280 baht/month 15,000 messages, extra 0.10 baht; Pro 1,780 baht/month 35,000 messages, extra 0.06 baht (prices marked *, probably before VAT) ([LINE for Business TH](https://lineforbusiness.com/th/service/line-oa-features/broadcast-message)).
- SMS: ThaiBulkSMS from 0.15 baht/SMS; email from 0.04 baht; LINE notification without friend (LON) from 4,500 baht/month ([ThaiBulkSMS](https://www.thaibulksms.com/)).
- PDPA transfers: PDPC notifications under s.28 and s.29 (effective 24 Mar 2024); adequacy case by case or list; else BCRs or safeguards; two SCC models accepted (Thai Model, Overseas Model); SCCs need no PDPC approval ([Tilleke](https://www.tilleke.com/insights/thailand-unveils-regulations-for-cross-border-personal-data-transfer)).
- PDPA s.5 extraterritorial (offering services to people in Thailand); s.37(5) foreign controller must appoint a representative in Thailand in writing; processors have a parallel duty; fine commonly cited up to 1 million baht for this breach; admin fines up to 5 million ([Lexbangkok](https://lexbangkok.com/pdpa-local-representative-thailand/)).
- Portal scope (operator): 3.6 million workers in the system and 500,000+ permits issued 13 Oct 2025-30 Mar 2026; about 100,000 permits a month; 40 outsourcing centres, 5 border centres, 8 mobile units; filing, attaching evidence and paying are all online, 24 hours ([Thansettakij, 30 Mar 2026](https://www.thansettakij.com/social-biz/655341)). Early faults: registration, employers not finding their own workers' permit data ([MGR Online, 2 Nov 2025](https://mgronline.com/uptodate/detail/9680000104517)).
- 11 Dec 2026 round documents ([Bangkok Biznews, 8 Sep 2026](https://www.bangkokbiznews.com/news/news-update/1250827)): worker files personally OR gives a power of attorney to the employer or the import company to act (POA with correct stamp duty); 1. passport or substitute (Myanmar without passport may attach later); 2. certificate of prohibited-disease check from a public or licensed private hospital whose results are linked electronically to the DOE system; 3. s.33 social security proof; if changed employer and SSO not yet approved, health insurance >= 6 months; exempt sectors (domestic, agriculture, livestock) health insurance >= 1 year from a state hospital or private insurer; 4. POA if not filing in person. Window 8 Sep-11 Dec 2026; last day file by 16:30, pay by 20:00; 100 + 900 baht.
- 13-digit ID: pink-card holders with numbers starting 0 or 00 are migrant workers and dependants under cabinet resolutions ([Daily News](https://www.dailynews.co.th/news/6195024/), search summary); first digit 6 for temporarily permitted aliens incl. registered three-nationality workers per another report ([Thairath](https://www.thairath.co.th/newspaper/2954081), search summary). Sources conflict (unverified).
- Burmese script: official switch from Zawgyi to Unicode on 1 Oct 2019 ("U-Day"); in late 2019 an estimated 85-90% still used Zawgyi; migration slowed after the 2021 coup ([Wikipedia, Zawgyi](https://en.wikipedia.org/wiki/Zawgyi_font); [Frontier Myanmar](https://www.frontiermyanmar.net/en/zawgyi-to-unicode-the-big-switch)). ICU has a Zawgyi-my transliterator; Facebook auto-converts ([Facebook engineering](https://engineering.fb.com/android/unicode-font-converter/)).
- PDPA (unofficial English text, [KMUTT copy](https://cc.kmutt.ac.th/Files/Act%20Eng/personal-data-protection-act-2019-en.pdf)): s.5 applies to foreign controllers/processors offering services to people in Thailand; s.26 sensitive data incl. racial, ethnic origin, health, biometric, criminal records -> explicit consent unless exception (incl. compliance with law on employment protection/social security, s.26(5)); s.37(4) breach notice to Office within 72 hours; s.37(5) foreign controller must appoint a representative in Thailand; s.39 records of processing; s.40 processor duties (act on instructions, security, notify controller of breach, keep records; controller must sign an agreement with processor); s.41 DPO if core activity is s.26 data or large-scale regular monitoring; fines s.82 up to 1m, s.83 up to 3m, s.84 up to 5m (sensitive data), s.85-87 processors 1-5m.
- AWS Asia Pacific (Thailand) region ap-southeast-7 GA with 3 AZs (Jan 2025) ([AWS blog](https://aws.amazon.com/blogs/aws/announcing-the-new-aws-asia-pacific-thailand-region/)); RDS among launch services ([Classmethod](https://dev.classmethod.jp/articles/try-to-use-ap-southeast-7-thailand-region/), search summary).
- e-Stamp Duty: Revenue Department system อ.ส.9 lets the payer of stamp duty on an electronic instrument pay online (before or within 15 days of making it), incl. ใบมอบอำนาจ (POA) among 5 instrument types; filing also via an RD API; after payment RD issues a stamp-duty code and receipt, and the e-instrument counts as fully stamped ([InfoQuest, 7 Oct 2020](https://www.infoquest.co.th/?p=40873)). Whether DOE accepts an electronic POA with an e-stamp code: unverified.
- Computer Crime Act s.26: service providers keep computer traffic data >= 90 days (extendable by order), client identification data >= 90 days after service ends; fine up to 500,000 baht ([Tilleke](https://www.tilleke.com/insights/ensuring-compliance-thai-computer-related-crimes-act); [UNODC fiche](https://sherloc.unodc.org/cld/uploads/pdf/El%20Evidence%20Hub/Electronic_Evidence_Fiche_as_of_23_December_2022_THAILAND.pdf)) (search summaries).
- Pen test price anchors: black-box web app about USD 3,400; grey-box from USD 3,400 + about USD 900 per user role ([Pentest-Tools](https://pentest-tools.com/services/web-app-penetration-testing), search summary). No Thai price list found.
- Thai lawyer rates (marketing estimates): Bangkok associates 3,000-5,000 baht/h, partners 6,000-8,000+ ([Global Law Experts](https://globallawexperts.com/commercial-lawyer-cost-thailand/), search summary); fixed fees: contract review 9,000, contract drafting 20,000, consultation 2,000/h ([ThaiLawOnline](https://www.thailawonline.com/?p=2657), search summary).
- Claude plans: Max from USD 100/month (5x or 20x Pro usage) ([claude.com/pricing](https://claude.com/pricing)). API (Anthropic price table cached 6 Oct 2026): Haiku 5.5 USD 0.10/0.50 per M tokens in/out; Sonnet 5.5 2/10; Opus 5.5 4/20; batch about 50% off.
- Paddle: 5% + 50 US cents per checkout transaction, merchant of record ([Paddle pricing](https://www.paddle.com/pricing)).
