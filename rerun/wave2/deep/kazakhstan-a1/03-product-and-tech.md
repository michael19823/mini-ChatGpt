# Kazakhstan A1: kindergarten licence and inspection readiness - product, technical design and development plan

Part 3 of the Kazakhstan A1 deep dive. Status: complete draft (10 Oct 2026). Builds on [the A1 report](../reports/kazakhstan-a1.md), [01-law-and-requirements.md](01-law-and-requirements.md) (the law, turned into requirements) and [02-market-and-competition.md](02-market-and-competition.md) (buyers, prices, competitors). Company set-up and payments are in the 04 and 05 files.

Conventions:
- "My estimate" marks numbers I derived. "(unverified)" marks facts I could not confirm.
- Legal texts were read on the Ministry of Justice database (old.adilet.zan.kz). "Row" means a numbered row of the licence requirements table (Order 473 as amended by Order 268). "p." means a paragraph of an order.
- Money: 500 tenge (₸) per US$, as in the 02 file. Bank rates were 472-487 ₸ per US$ in October 2026 ([informburo](https://informburo.kz/novosti/vladelcy-castnyx-detsadov-v-kazaxstane-poprosili-edinyx-pravil-licenzirovaniia)), so US$ figures are slightly understated.
- Working product name: **"Daiyn"** (Kazakh for "ready"). It is a placeholder.
- "Forms 1-КК to 8-КК" means the seven forms filed by a preschool: 1-КК to 6-КК and 8-КК. Form 7 (digital literature) does not apply to preschools ([Order 248](https://old.adilet.zan.kz/rus/docs/V2500037314), per the 01 file).

## Summary

- **What to build.** A web app, in Russian and Kazakh, that tells a private kindergarten whether it will pass the licence check, fills in the licence data forms, and then keeps the kindergarten inspection-ready. It is a plain server-rendered monolith (Django, PostgreSQL, HTMX), hosted on servers in Kazakhstan. Legal content lives as versioned data that a lawyer and a methodist can edit without code.
- **The law is a ready-made spec.**
  - The licence check has 10 rows (73-82) with hard thresholds: at least 75% of teachers on a main-job contract; at least 20% with a category; 36 hours of training every 3 years; a lease of at least 5 years; a medical room above 3 groups; beds and lockers for every child; an edu.kz web domain; anti-terror equipment ([Order 268](https://old.adilet.zan.kz/rus/docs/V2500037500)).
  - The application needs seven one-off data forms (1-КК to 6-КК and 8-КК), collected "in electronic form" with the head's e-signature on eGov or elicense.kz ([Order 248](https://old.adilet.zan.kz/rus/docs/V2500037314)). I read every column of these forms in the primary text ([Order 473 annexes](https://old.adilet.zan.kz/rus/docs/V2200030721)). So the data model can mirror them exactly.
  - Inspectors use a 29-item quality checklist and a 9-item child-rights checklist, with each item graded gross, significant or minor ([CQA criteria](https://old.adilet.zan.kz/rus/docs/V1500012777); [CPCR criteria](https://old.adilet.zan.kz/rus/docs/V2600038978), per the 01 file).
  - An annual self-assessment has 9 scored criteria ([Order 486](https://old.adilet.zan.kz/rus/docs/V2200031053)). Not publishing it on the kindergarten's website is a **gross** violation ([CQA criteria, preschool item 32](https://old.adilet.zan.kz/rus/docs/V1500012777)).
- **What the state portal leaves undone.** eLicense takes the application and the fee. It does not check readiness, compute the staff shares, warn about expiring training or categories, keep the evidence, or prepare for unannounced checks. I found no public API for eLicense or NOBD, the national education database. So the product does not integrate with them. It produces the forms, a field-by-field "copy sheet" and a named evidence pack, and the head files them on the portal.
- **Two legal facts shape the architecture.**
  1. Personal data must be stored in a database located in Kazakhstan ([Personal Data Law Art. 12(2)](https://old.adilet.zan.kz/rus/docs/Z1300000094)). The staff register holds names, education, criminal-record status and medical checks, so the database and files must sit in Kazakhstan.
  2. A .kz domain is suspended if its site is hosted outside Kazakhstan, and it needs a TLS certificate ([domain rules, p.16(5)-(6), p.27](https://old.adilet.zan.kz/rus/docs/V1800016654)). Row 79 requires a third-level edu.kz domain. So a **hosted edu.kz website** is a natural paid add-on, and it must also run in Kazakhstan.
  - **Kazakh hosting is cheap.** hoster.kz sells a 4 vCPU / 8 GB / 200 GB cloud server for 23,040 ₸ (about US$46) a month ([hoster.kz](https://hoster.kz/cloud/)). Yandex Cloud has a Kazakhstan region priced in tenge ([Yandex Cloud](https://yandex.cloud/ru-kz/docs/compute/pricing)).
- **Keep children's data out.** The MVP stores counts per group, not children's names or health data. The anti-terror passport is marked "for official use", so the app records only that it exists and when it was approved; the file itself is not uploaded ([Order 117](https://old.adilet.zan.kz/rus/docs/V2200027414), per the 01 file).
- **MVP (about 3 weeks of build):**
  - free public self-check;
  - site, building and group profile;
  - staff register with threshold and expiry alerts;
  - readiness check for rows 73-82 with a red/amber/green (RAG) report;
  - forms 1-КК to 8-КК in Russian and Kazakh (DOCX, XLSX, PDF) and a portal copy sheet;
  - evidence locker and ZIP "licence pack";
  - the two inspection checklists with an "inspection binder" PDF;
  - reminders by e-mail and Telegram;
  - card billing;
  - a content console.
- **v1 (Jan-Jun 2027):** a one-page edu.kz website hosted in Kazakhstan; the self-assessment score and its publication; long-term plans and weekly cyclograms in the official forms ([Order 130](https://old.adilet.zan.kz/rus/docs/V2000020317)); a tracker for inspection recommendations and orders with legal deadlines; anti-terror and fire drill journals; multi-site and consultant views.
- **Plan and calendar.** Start Monday 12 Oct 2026.
  - Foundation in days 1-4, then eight parallel agent work streams.
  - Feature-complete MVP by 6 Nov. A public no-login self-check goes live by about 23 Oct to collect leads.
  - Lawyer and methodist content approval, Kazakh proofreading and an external penetration test in weeks 4-6.
  - Pilot with 10-15 kindergartens in weeks 5-7. Paid launch Monday 7 Dec 2026, about three weeks before applications open on 1 Jan 2027.
- **Cash budget (founder unpaid, no salaried developers):** about US$6,000-18,000 to a sellable product. The main items are the lawyer, methodist, pen test, Kazakh proofreading, AI tool seats and pilot travel. v1 (Jan-Jun 2027) adds about US$5,000-15,000 (my estimates).
- **Running cost is small.** Hosting and services come to about US$50-70 a month at 50 customers, US$160-230 at 300 and US$480-680 at 1,000 (my estimates). That is about US$0.5-1.5 per customer a month, against a planned price of 5,000-10,000 ₸ (US$10-20) a month. The real recurring cost is law-watch and content upkeep by the lawyer and methodist.
- **Biggest risks.** Content accuracy and regional differences in how rules are read. The unknown portal entry format. A state vendor bundling a free checklist. A delay or softening of the licensing start. And a tight timeline before 1 January.

## Users and jobs

### Who uses the product

| Role (Russian / Kazakh label) | Who it is | Main jobs in the product | Rights |
|---|---|---|---|
| **Owner** (учредитель / құрылтайшы) | Founder of the LLP or sole trader (ИП). Often a former teacher or head, usually a woman ([informburo, Jul 2022](https://informburo.kz/novosti/vladelcy-castnyx-detsadov-grozyat-zabastovkoi-iz-za-vvedeniya-licenzirovaniya), via the 02 file) | Decide on premises and lease issues; pay; see all sites | Everything, billing, users |
| **Head** (заведующий / меңгеруші) | Legal head. Fined as an "official" under the Administrative Code ([CoAO](https://old.adilet.zan.kz/rus/docs/K1400000235), per the 01 file). Signs the forms and files with an e-signature ([Order 248](https://old.adilet.zan.kz/rus/docs/V2500037314)) | Approve the readiness report; sign and file; handle inspectors; answer recommendations | Everything in own site(s) except billing if the owner restricts it |
| **Methodist** (методист / әдіскер) | Does the paperwork; often combined with the head in small kindergartens (02 file) | Staff register; plans; training and category records; self-assessment; evidence uploads | Edit everything except users and billing |
| **Teacher** (воспитатель / тәрбиеші) | About 8-9 teachers per organisation (02 file) | Upload own diplomas and training certificates; see own deadlines; later fill weekly cyclograms | Own records only. Upload by link, no full account needed |
| **Administrator or nurse** (завхоз, медсестра) | Facilities and medical staff | Upload sanitary, fire and anti-terror evidence; log drills | Building and journal sections |
| **Consultant or association partner** (v1) | General licensing consultants, association staff, accountants | Prepare several clients; review files | Delegated access per client, granted and revoked by the owner |
| **Content editor (internal)** | Our lawyer and methodist | Edit rules, questions, templates and regional notes; sign off versions | Admin console only. No access to customer data |

### Jobs to be done (in the buyer's words)

1. "Tell me now if we will get the licence, and what to fix first." Owners asked publicly for "a single list of clear and achievable requirements" ([informburo, 1 Oct 2026](https://informburo.kz/novosti/vladelcy-castnyx-detsadov-v-kazaxstane-poprosili-edinyx-pravil-licenzirovaniia)).
2. "Fill the seven forms correctly, so the commission does not send them back." An incomplete pack gets a reasoned refusal within 2 working days ([Order 248](https://old.adilet.zan.kz/rus/docs/V2500037314)).
3. "Tell me which papers to scan for each requirement, and name them so the inspector finds them."
4. "Keep our 75% and 20% staff shares and everyone's training and category dates under control when people come and go."
5. "Be ready for an inspector who arrives without warning." Unscheduled checks without notice are allowed for budget-funded children's organisations since 1 Feb 2026 ([Law on the Rights of the Child Art. 52-4](https://old.adilet.zan.kz/rus/docs/Z020000345_), per the 01 file).
6. "Answer a recommendation within 10 working days, so it does not turn into a visit" ([Art. 52(7)-(13)](https://old.adilet.zan.kz/rus/docs/Z020000345_), per the 01 file).
7. "Get our edu.kz site up and put the self-assessment on it."
8. "Write the yearly long-term plans and the weekly cyclograms in the official form without extra work." Teachers may keep them on paper or in Word or PDF, but not both ([Order 130, Annex 1](https://old.adilet.zan.kz/rus/docs/V2000020317)).
9. For owners with several sites: "One screen that shows which site is at risk."

### Design consequences

- **Phone first.** Owners and heads are not office workers. Every screen must work at 360 px width, with large buttons and plain words. Upload from the phone camera must be one tap.
- **Russian first, Kazakh close behind.** Turkestan, Shymkent and Almaty region hold most private kindergartens (02 file), and Kazakh is common there. The Language Law says forms of non-state organisations are in the state language, and in Russian if needed ([Language Law Art. 21](https://old.adilet.zan.kz/rus/docs/Z970000151_)). So every generated document needs a Kazakh version from day one.
- **Do not add paperwork.** Teachers complain about extra checks and apps ([zakon.kz, Jan 2024](https://www.zakon.kz/stati/6420659-verifitsiruy-menya-ili-zachem-kazakhstanskim-roditelyam-navyazyvayut-novoe-prilozhenie-dlya-detsadov.html)). The law also forbids keeping both a paper and an electronic version of the same teacher document ([Order 130](https://old.adilet.zan.kz/rus/docs/V2000020317)). The product must replace work, not duplicate it.

## Feature map

### Legal requirements behind the features (from primary texts)

| Source | What it requires | Feature that answers it |
|---|---|---|
| Row 73 ([Order 268](https://old.adilet.zan.kz/rus/docs/V2500037500)) | Copies of long-term plans per age group, cyclograms and individual child development cards, approved by the head | Plans checklist (MVP); plan generator (v1) |
| Row 74 | Teachers with pedagogical education; at least 75% on main-job contracts; at least 20% with a category (moderator, expert, researcher, master); head and teachers meet Order 338; Annex 1 staff form | Staff register; live thresholds; Form 1-КК |
| Row 75 | Teaching kits per Order 216; play materials per Order 70; Annex 2 literature form | Kit checklist; Form 2-КК |
| Row 76 | Medical room or point and a medical licence or contract; exempt up to 3 groups; Annex 3 | Applicability rule; Form 3-КК; contract expiry alert |
| Row 77 | Catering unit with a sanitary conclusion; Annex 4 | Building record; Form 4-КК |
| Row 78 | Own premises or a lease of at least 5 years; sanitary conclusion for each building; fire inspection act; Annex 5 | Lease-term check; per-building evidence; Form 5-КК |
| Row 79 (from 12 Jul 2026) | Equipment per Order 70; groups and group sizes per Order 385; edu.kz domain; lockers; beds (not for part-day mini-centres); toilets; anti-terror equipment per Order 117; counts based on enrolment or planned intake | Group-size check; beds and lockers check; anti-terror checklist; domain check; Form 6-КК; edu.kz site (v1) |
| Row 80 | Teacher training at least once in 3 years, at least 36 hours; head training in profile and management; Annex 8 (last 5 years) | Training log; alerts; Form 8-КК |
| Row 81 (from 12 Jul 2026) | Current data in NOBD, plus an "education management information system" with current databases matching NOBD | NOBD consistency checklist (MVP); comparison screen (later) |
| Row 82 | Conditions for children with special needs per Order 92 | Special-needs checklist |
| [CQA checklist and violation grades](https://old.adilet.zan.kz/rus/docs/V1500012777) | 29 items for preschools, each graded gross, significant or minor. Includes training certificates, category orders, NOBD match, curricula, diplomas, barred persons and the self-assessment on the website | Inspection self-audit with evidence |
| [CPCR checklist](https://old.adilet.zan.kz/rus/docs/V2600038978) (01 file) | 9 items: parent contracts; at most 3 special-needs children per group; no unlawful expulsions; 4-week menu; daily menu; premises; anti-terror means; anti-terror passport agreed with police; disability conditions | Inspection self-audit |
| [Order 486](https://old.adilet.zan.kz/rus/docs/V2200031053) | Yearly self-assessment, 9 criteria, 45 points maximum | Self-assessment score (v1), computed from the same data |
| [Order 130](https://old.adilet.zan.kz/rus/docs/V2000020317) | Teacher documents: yearly long-term plan per group; weekly cyclogram; development card (in NOBD for pre-school groups) | Plans module (v1) |
| [Order 117](https://old.adilet.zan.kz/rus/docs/V2200027414) (01 file) | Instruction twice a year per staff group; journal with a set layout; drills; passport updates within 20 working days of changes | Anti-terror journal and reminders (v1) |
| [Order 55](https://old.adilet.zan.kz/rus/docs/V2200026867) (01 file) | Fire drills at least once every half-year, with a journal; evacuation plan | Fire journal and reminders (v1) |
| [Law on Education Art. 57(4), (6)](https://old.adilet.zan.kz/rus/docs/Z070000319_) (01 file) | Licence annex for each building; re-issue within 30 days after reorganisation | Re-issue wizard (v1) |

### Feature map

| Area | MVP (sellable Dec 2026) | v1 (Jan-Jun 2027) | Later |
|---|---|---|---|
| Lead capture | Free public self-check (15 minutes, no login, no personal data) with a RAG summary and e-mail capture | Kazakh and Russian explainer pages for search | Association-branded versions |
| Profile | Organisation (BIN or IIN, LLP or sole trader, region, state order yes/no, new or existing); sites; buildings; groups (age, regime, places, enrolment, special-needs count, beds, lockers) | Multi-site owner view; consultant workspace | Chains and franchise roll-ups |
| Readiness check | Rows 73-82 broken into about 60-80 testable items; applicability rules (for example the medical room only above 3 groups); RAG per row; "fix first" list with land, premises and lease at the top; regional notes | Re-check history and trend | Benchmarks by region (anonymised) |
| Staff | Register with every Annex 1 field; education; employment type; category with date and order number; training log; medical exam date; criminal-record check date; Excel import; live 75% and 20% shares; 36-hour and 5-year category alerts | Teacher self-upload by link; reminders to teachers | OCR of certificates |
| Licence forms | Forms 1-КК, 2-КК, 3-КК, 4-КК, 5-КК, 6-КК and 8-КК in Russian and Kazakh as DOCX, XLSX and PDF; portal copy sheet; "as of" date; each output stamped with the rules version | Re-issue wizard (address change, reorganisation) | Direct portal hand-off if an API appears |
| Evidence | Locker per requirement and per building; camera upload; JPG-to-PDF and compression; expiry dates; ZIP licence pack with an index; site-visit preparation list (the commission visits and takes photos and video ([MTRK](https://mtrk.kz/ru/2026/07/24/licenzirovanie-detskikh-sadov-startu/))) | Version history per document | OCR to read dates from conclusions and contracts |
| Inspections | CQA 29 items and CPCR 9 items as a self-audit with evidence links and severity; "inspection binder" PDF for phone or print | Tracker for recommendations (10 working days) and orders, with deadlines; objection drafts; log of past inspections | Mock-inspection service by a partner |
| Plans | Checklist only: do plans and cyclograms exist and are they approved? | Long-term plan and weekly cyclogram in the Order 130 forms; template library per age group; Word and PDF | AI-drafted plan text (labelled under the AI law) |
| Self-assessment and website | edu.kz domain check | Order 486 score computed from the data; one-page edu.kz site hosted in Kazakhstan, with the self-assessment, licence details and contacts in both languages | Full site builder; parent survey reminders |
| Journals | — | Anti-terror instruction and drill journal (Order 117 Annex 3 layout); fire drill journal; printable for binding and sealing | Menu planner (4-week menu against the daily menu) |
| Notifications | E-mail; Telegram bot; weekly digest | WhatsApp through a business provider | SMS for critical alerts |
| Billing | Card checkout for the one-off pack and the subscription (provider per the 05 file); B2B invoice PDF | Annual plans; association discount codes | Local payment methods if a local company is set up (05 file) |
| Content console | Rules, questions, templates and regional notes as versioned data with effective dates and sign-off status | Law-watch alerts on changes in source texts | Content API for partners |

### Why this cut for the MVP

- **Timing.** Applications open on 1 Jan 2027, and the law has no transition clause (01 file). The forms, thresholds and evidence pack are what an owner needs in December. Plans and self-assessment matter next summer, before the school year starts on 1 September ([Order 385](https://old.adilet.zan.kz/rus/docs/V2200029329), per the 01 file).
- **Recurring value starts in the MVP.** The staff alerts and the inspection binder justify the subscription from day one. They also matter more than the licence itself, because the licence has no time limit ([Law on Education Art. 57(3-1)](https://old.adilet.zan.kz/rus/docs/Z070000319_), per the 01 file).
- **The edu.kz site moves to v1.** It is valuable, but it needs domain steps by the customer and a hosting set-up. Build it right after launch, in January 2027.

## Key flows

### Flow 1: Free self-check to paid licence pack (target: 15 minutes to a result)

1. An owner opens a link shared by an association or found through search. She chooses Russian or Kazakh.
2. She answers 25-30 questions about the organisation, not people: type, number of groups, full or part day, new or existing, own building or lease and its term, catering, medical room, edu.kz domain, anti-terror equipment, NOBD status, and rough staff counts.
3. She sees a RAG card per row, with the three biggest risks on top. Premises and lease problems go first, because software cannot fix them.
4. She enters an e-mail to get the PDF. The page offers the paid pack.
5. On payment she gets an account, and her answers carry over.

No staff names are collected here, so the public check can run before the full data-protection set-up is ready.

### Flow 2: Onboarding (target: under 90 minutes for a 6-group kindergarten)

1. Organisation details: BIN, name in both languages, legal form and region. The head's details.
2. Buildings: address, building type, ownership or lease dates, areas, rooms, catering, medical room.
3. Groups: age band, regime, places, enrolment, special-needs count, beds and lockers.
4. Staff: download the Excel template, fill it, upload it. Or add people one by one. The app computes the shares at once.
5. Evidence: a guided list ("scan your lease", "photograph the sanitary conclusion"). Each upload is tied to a row and a building.
6. Result: a readiness report (RAG per row and per item), a fix list with owners and dates, and the items that need a lawyer or a building expert.

### Flow 3: Prepare and file the licence application

1. Once all rows are green or accepted amber, the head opens "Licence pack".
2. The app generates forms 1-КК to 8-КК as of a chosen date, in Russian and Kazakh, plus a portal copy sheet that shows each field with a copy button.
3. It builds a ZIP of the e-copies, named by row and building, with an index PDF.
4. The head logs in to eGov or elicense.kz with her e-signature, fills or uploads the forms, attaches the e-copies and pays the fee. The fee is 10 MRP, or 43,250 ₸ in 2026 (01 file).
5. She records the application number and date in the app. The app counts the legal deadlines: completeness check in 2 working days; document check and site visit within 22 working days; decision within 30 working days ([Order 248](https://old.adilet.zan.kz/rus/docs/V2500037314)).
6. Before the site visit, a checklist covers the rooms and items to show. If a pre-refusal notice arrives, the app reminds her that the objection is due within 2 working days (same source).

### Flow 4: Staff change

A teacher leaves or joins. The methodist updates the register. If the main-job share drops below 75%, or the category share below 20%, the head gets an alert the same day, with the number of hires needed to get back above the line. New hires prompt for a diploma, a medical book and a criminal-record certificate. The certificate is free through eGov Mobile ([egov.kz](https://egov.kz/cms/ru/news/criminal_mobile)).

### Flow 5: Unannounced inspection

The head opens the "Inspection binder" on her phone. It shows the CQA and CPCR items with status and evidence, and it can be printed. After the visit she records the result: recommendations, an order with deadlines, or a fine. These become tasks with legal deadlines.

### Flow 6: Yearly cycle (v1)

- **June-August:** regroup children (1-31 August, [Order 385](https://old.adilet.zan.kz/rus/docs/V2200029329), per the 01 file); draft the long-term plans for each group before 1 September; review the training plan.
- **Each week:** cyclograms.
- **Yearly:** self-assessment score and publication on the edu.kz site.
- **Twice a year:** anti-terror instruction for each staff group and fire drills.
- **Every 6 and 12 months per person:** staff lab tests and chest X-ray.
- **Any time:** training expiry and category confirmation alerts.

### Flow 7: Consultant with many clients (v1)

The consultant invites owners, or owners invite the consultant. The consultant sees a list of clients with readiness scores and missing items, and can work in each file under the owner's audit trail.

## Screens

1. **Public self-check.** A one-question-per-screen wizard on the phone, with a progress bar and a language switch. The result card shows ten coloured tiles (rows 73-82) and the top three risks. Buttons: "Get PDF" and "Prepare my licence pack".
2. **Dashboard.** Readiness score per site; ten row tiles; "next 5 actions"; deadlines for the next 30 days; staff shares as two gauges (main-job against 75%, category against 20%); last inspection.
3. **Requirement page (one per row).** On top, the plain-language rule in Russian or Kazakh, with the legal source and its effective date. Below it, the questions, the computed checks, the evidence slots per building, and the regional note. Status chips: met, gap, not applicable, needs expert.
4. **Staff list.** A table that turns into cards on the phone. Columns: name, role, main job or part-time, category and expiry, training hours in the last 3 years, medical exam due, record check date. Filters: "missing data", "expiring in 90 days". Buttons: import from Excel, export to Form 1-КК.
5. **Staff card.** The Annex 1 fields grouped in tabs: education, employment, category, training (Annex 8 lines), medical and record checks, and documents.
6. **Buildings and groups.** Per building: address, type, ownership or lease (with a remaining-term bar), rooms and areas, catering, medical room, anti-terror items. Per group: age band, places, enrolled, special-needs count, beds, lockers, and a size check against the legal maximum.
7. **Evidence locker.** A grid by row and building, with empty slots in red. Shows the upload date, expiry and who uploaded. Camera button. Bulk upload with drag-and-drop on desktop.
8. **Licence pack.** A list of the seven forms with "preview", "DOCX", "XLSX" and "PDF" buttons per language, plus the portal copy sheet and the ZIP download. A banner shows the rules version and the "as of" date.
9. **Inspection binder.** The 29 CQA and 9 CPCR items, grouped by severity, each with status and evidence. Buttons: "Print binder" and "Record an inspection".
10. **Tasks and calendar.** One list of all deadlines (training, category, lease, contracts, drills, recommendations), with owner and due date, and a calendar view.
11. **Settings.** Users and roles, notification channels (e-mail, Telegram), language, billing, data export, and account deletion.
12. **Admin console (internal).** Requirements, questions, rules, templates and regional notes, each with versions, effective dates, reviewer and sign-off. A diff view between versions. A "golden test" runner.

## Data sources and integrations

| Source | What it gives | Access, format, cost | Use in product |
|---|---|---|---|
| **Legal texts** (Ministry of Justice database) | Orders 473/268, 248, 130, 486, 117, 385, 55; the risk criteria; the Administrative Code | HTML pages; free; no API found. The old portal shows a notice about moving to a new "Әділет" portal ([old.adilet](https://old.adilet.zan.kz/rus/docs/V2500037314)) | Content source. A weekly law-watch job downloads the pages, compares the text and alerts the lawyer to changes |
| **eGov / elicense.kz** | Filing, fee payment, decision | Web portal; the applicant needs an e-signature; no public applicant API found. The forms are collected "in electronic form" ([Order 248](https://old.adilet.zan.kz/rus/docs/V2500037314)). For the sister licence for children's camps, the steps are: log in, open "Education", pick the service and sub-type, "fill in the required data, pay, and sign the request" ([Kapital.kz, 24 Jun 2026](https://kapital.kz/tehnology/149635/licenzirovanie-detskih-obrazovatelno-ozdorovitelnyh-centrov-teper-dostupno-onlajn.html)). That suggests on-screen fields, but whether the preschool forms are typed in or uploaded as files is not stated (unverified). eLicense split education licensing by level in Feb 2025 ([egov.kz](https://egov.kz/cms/ru/news/educational_organisations), per search summary) | No integration. Output both a copy sheet (for field entry) and files (for upload). Confirm in the first pilot filing in January 2027 |
| **elicense.kz licence register** | Status of the clinic's medical licence (Annex 3 says it is checked there) | Public search on the portal; no API known (unverified) | Deep link and a "checked on" date |
| **NOBD** (national education database) | Staff and child data the kindergarten must keep current; development cards for pre-school groups are filled there ([Order 130](https://old.adilet.zan.kz/rus/docs/V2000020317)) | State system; no public API found in search | Checklist ("NOBD updated on…"); later a manual comparison screen |
| **ED24 / e-orda / Indigo** | Attendance and enrolment for the state order | Vendor systems paid by akimats (02 file); no API known | None in the MVP. Possible Excel import later (unverified) |
| **Business register (BIN)** | Name, address, head | The stat.gov.kz BIN search needs a login ([stat.gov.kz](https://stat.gov.kz/ru/cabinet/juridical/by/bin/)); the data.egov.kz API needs a key ([client library](https://packagist.org/packages/ginkida/opendata-client)) | Manual entry in the MVP; a paid lookup later if needed |
| **edu.kz domains** | The third-level domain needed by row 79 | EDU.KZ is reserved for Kazakhstan-resident organisations doing educational work. Names are issued on request through accredited registrars ([domain rules p.29-30](https://old.adilet.zan.kz/rus/docs/V1800016654); [nic.kz EDU.KZ policy draft v1.1, 5 Jun 2026](https://nic.kz/srs/edupolicy.pdf), per search summary; the PDF did not load). A plain .kz domain costs 9,590 ₸ a year at PS.kz ([ps.kz](https://www.ps.kz/cloud)); the edu.kz price was not found | Step-by-step guide; DNS check; hosting of the site in Kazakhstan (v1) |
| **E-signature** (NCALayer) | Signing with the Kazakh national key | Free NCALayer desktop app; open-source wrappers exist, for example [ncalayerjs (MIT)](https://github.com/seithq/ncalayerjs) | Not needed in the MVP, because filing happens on the portal. Later, to sign internal orders and plans |
| **Telegram** | Alerts | Bot API, free ([Telegram](https://core.telegram.org/bots/api)) | MVP alert channel |
| **WhatsApp / SMS** | Alerts | WhatsApp from about €0.02 and SMS about €0.14 per message through an aggregator ([Messaggio](https://messaggio.com/ua/messaging/kazakhstan/)); sender names must be pre-registered since 1 Jan 2022 ([sent.dm](https://sent.dm/en/resources/sms-pricing/kazakhstan-sms-pricing)) | v1 for WhatsApp; SMS only for critical alerts |
| **Card billing** | Payment for the pack and the subscription | Provider choice is in the 05 file. Kazakhstan charges 16% VAT on e-services to consumers from 2026; business buyers use reverse charge ([Quaderno](https://www.quaderno.io/tax-guides/kazakhstan-vat-guide), per search summary). Paddle's country list did not confirm Kazakhstan ([Paddle](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)) (unverified) | Collect the BIN and treat sales as B2B. Keep billing behind one interface, so a local option can be added later |
| **Document tooling** | DOCX, XLSX, PDF | [docxtpl](https://docxtpl.readthedocs.io/) (Word templates with tags); openpyxl; [Gotenberg](https://gotenberg.dev/) (LibreOffice to PDF); img2pdf and qpdf for scans; all open source | Forms, binder, reports |
| **Malware scan** | Safety of uploads | [ClamAV](https://www.clamav.net/), open source | Every upload |

**Portal format is the main unknown.** The forms are "one-off" administrative-data forms filed "when applying", "in electronic form", with filling notes for each column ([Order 248](https://old.adilet.zan.kz/rus/docs/V2500037314)). The product therefore generates three things for each form: a copy sheet that matches the column order, an XLSX in the official layout, and a PDF and DOCX ready to sign. Whichever way the portal works, one of them fits.

## Data model

### Main entities

| Entity | Key fields | Notes |
|---|---|---|
| **Organisation** | id; BIN or IIN; legal form (LLP, sole trader); name in Russian and Kazakh; region; state order (yes/no); type (kindergarten, nursery-kindergarten, mini-centre, family); new or existing | The tenant. Sole traders are covered from 2027 ([Law 148-VIII](https://old.adilet.zan.kz/rus/docs/Z2400000148), per the 01 file) |
| **Site / Building** | org; actual address; building type (standard project, adapted, other); title (own, economic management, operational or trust management, lease); lease start and end; total and useful area; anti-terror group (1 or 2); catering object; medical room | The licence annex is per building ([Law on Education Art. 57(4)](https://old.adilet.zan.kz/rus/docs/Z070000319_), per the 01 file). Mirrors Annexes 3-6 |
| **Room** | building; type (group room, music hall, gym, medical, kitchen); area m² | Annex 5 and 6 rows |
| **Group** | building; age band (1, 2, 3, 4, 5 or mixed); regime (4, 9, 10.5, 12 or 24 hours); places; enrolled; special-needs count; beds; lockers; language of instruction | Size limits: age 1 up to 10; age 2 up to 20; ages 3-5 up to 25; mixed 1-2 up to 15; mixed 3-5 up to 20; special-needs up to 3 per group ([Order 385 p.7-8, 10](https://old.adilet.zan.kz/rus/docs/V2200029329), per the 01 file). Counts only, no child records |
| **StaffMember** | org; full name; year and place of birth; position; is_teacher; is_head; employment (main job or part-time); hire and leave dates; subject or activity taught | Annex 1 columns 2, 3, 5 and 17 ([Order 268](https://old.adilet.zan.kz/rus/docs/V2500037500)) |
| **Education** | staff; level (higher, postgraduate, technical and vocational, post-secondary); specialty; qualification; institution; year; retraining; foreign-diploma recognition | Annex 1 columns 4 and 16 |
| **Category** | staff; level (moderator, expert, researcher, master); date; order number; next confirmation due (date plus 5 years) | Annex 1 column 8. The 5-year rule comes from the CQA violation list and Order 486 criterion 2 |
| **Training** | staff; topic; place and period; provider; hours; form of completion; certificate file | Annex 8 columns ([Order 473](https://old.adilet.zan.kz/rus/docs/V2200030721)) |
| **MedicalCheck** | staff; type (chest X-ray, lab tests); date; next due; personal medical book (yes/no) | Annex 1 column 9. Preschool staff need a chest X-ray (fluorography) every 12 months and lab tests (helminths, syphilis, gut-infection and staphylococcus carriage) every 6 months ([Order ҚР ДСМ-131/2020, row 8](https://old.adilet.zan.kz/rus/docs/V2000021443)). Intervals are content settings, not code |
| **RecordCheck** | staff; certificate date; result (none or present); file (restricted) | Annex 1 column 7; CQA item 14 (barred persons) |
| **AcademicRecord** | staff; master's, PhD, academic title, honours | Annex 1 columns 10-15. Rarely used in preschools |
| **LiteratureItem** | org; programme section; learners; title, year, authors; type; copies | Annex 2 |
| **MedicalProvision** | building; medical licence number or clinic contract (party, number, dates) | Annex 3; exempt up to 3 groups |
| **EquipmentItem** | building; category (furniture, teaching aids, CCTV, alarm, panic button, intercom, backup power); count; meets norm (yes/no) | Annex 6; Order 70 norms; Order 117 equipment |
| **Requirement** | code (for example R74.2); row; text in Russian and Kazakh; plain explanation; legal source and URL; effective from and to; applicability rule; evidence types; severity | Versioned content. Covers rows 73-82, the CQA and CPCR items and Order 486 criteria |
| **Rule** | requirement; expression (for example `share(teachers.main_job) >= 0.75`); parameters; golden test cases | Rules as data, tested |
| **Question / Answer** | requirement; type; options; answer per site; who answered and when | Readiness check |
| **Assessment** | site; date; rules version; result per requirement (met, gap, not applicable, expert); score | A frozen snapshot, so later rule changes do not rewrite history |
| **Evidence** | org; building (optional); requirement links; file key; type; issue date; expiry; uploaded by; sensitivity level | Files live in object storage in Kazakhstan |
| **GeneratedDocument** | org; template code and version; language; data snapshot hash; created by; file | Proves which rules and data produced each form |
| **Application** | org; type (issue, annex, re-issue); portal number; filed on; status; deadlines; decision | Licence tracking |
| **InspectionEvent** | org; body (CQA, CPCR, sanitary, fire, emergencies); type (planned, unscheduled, preventive without visit); date; result; recommendations; orders with deadlines; fines | v1 tracker |
| **Task** | org; source (rule, expiry, inspection); title; owner; due date; status | One engine for all reminders |
| **Plan** (v1) | group; type (long-term or cyclogram); period; content (structured); approval | Order 130 forms |
| **SelfAssessment** (v1) | org; year; criterion scores; total; level; published URL | Order 486 |
| **Website** (v1) | org; edu.kz domain; DNS status; pages; TLS status | Hosted in Kazakhstan |
| **User / Membership** | user; org; role; two-factor status; language; consent records | Roles from the users table |
| **AuditLog** | who; what; when; before and after; IP | Append-only |
| **RegionalNote** | region; requirement; note; source; date | For example, how a region treats land-use designation |

### Key rules (examples, all in data with tests)

- Main-job share = teachers with main-job contracts / all teachers. It must be at least 0.75 (row 74).
- Category share = main-job teachers with a category / all teachers. It must be at least 0.20, "except for preschool organisations with fewer than two groups" (row 74, [Order 268](https://old.adilet.zan.kz/rus/docs/V2500037500)). Row 74 also says staff (штатные) teachers must be at least 75% of the teaching headcount, so the app checks both 75% measures.
- Training: for each teacher, the sum of hours in the last 3 years must be at least 36. Alert at 90 and 30 days before a teacher falls below (row 80).
- Category: confirm or raise at least once in 5 years. Alert at 12 months, 6 months and 1 month.
- Medical room: required if there are more than 3 groups (row 76).
- Medical checks: chest X-ray every 12 months and lab tests every 6 months for every staff member ([Order ҚР ДСМ-131/2020](https://old.adilet.zan.kz/rus/docs/V2000021443)). Alert 30 days ahead.
- Beds and lockers: at least equal to enrolment for an existing kindergarten, or planned intake for a new one. Beds are not required for part-day mini-centres (row 79).
- Lease: the text says a lease "with a term of validity of at least 5 years" (аренда ... со сроком действия не менее 5 лет, row 78). **Open question:** is this the total contract term or the remaining term on the filing date? The app flags both until the lawyer decides.
- Anti-terror: group 1 needs an alert system, CCTV linked to police and a panic button. Group 2 (cities, district centres or more than 700 people) adds an intercom for preschools. CCTV storage at least 30 days; backup power ([Order 117](https://old.adilet.zan.kz/rus/docs/V2200027414), per the 01 file).
- Self-assessment (v1): 9 criteria, each scored 5, 4, 3 or 2 (100%, 95-99%, 80-94%, under 80%). Levels: exemplary 40-45, good 35-39, needs improvement 30-34, low under 30 ([Order 486](https://old.adilet.zan.kz/rus/docs/V2200031053)). The two satisfaction surveys are run online by ministry staff (same source). The app only reminds the head to get at least 90% of parents and teachers to take part.

### Content and template layer

- Requirements, rules, questions, checklists and regional notes are stored as YAML files in the repository. They are loaded into the database and also editable in the admin console. Each item has a source URL, an effective date, a reviewer and a sign-off state ("draft", "lawyer approved", "live").
- Templates are Word files with tags (docxtpl), one per form and language. The methodist or lawyer can edit wording in Word without code.
- Every rule has "golden" test cases: a fictional kindergarten, the expected result, and a lawyer's initials. CI refuses a content change that breaks a golden test.

## Architecture and stack

### Recommendation: one boring monolith, built for AI agents

| Layer | Choice | Why |
|---|---|---|
| Language and framework | Python 3.12, [Django](https://www.djangoproject.com/) 5 | Admin console for content for free; mature auth and forms; built-in translation that supports Kazakh (kk); agents write it well |
| UI | Server-rendered templates with [HTMX](https://htmx.org/) and a little Alpine.js; Tailwind | Fast on cheap phones; no separate front-end build; fewer moving parts for agents |
| Database | PostgreSQL 16, with row-level security as a second tenant guard | One database for data, jobs and full-text search |
| Background jobs | [Procrastinate](https://procrastinate.readthedocs.io/) (a job queue inside PostgreSQL) | No Redis to run |
| Documents | docxtpl, openpyxl, Gotenberg (in Docker), img2pdf, qpdf | Exact Word layouts of the official forms; good PDF output |
| Files | S3-compatible object storage in Kazakhstan, or MinIO on the server at first; encrypted | Keeps files in the country |
| Web server and TLS | Caddy, with automatic certificates, including [on-demand TLS](https://caddyserver.com/docs/automatic-https#on-demand-tls) for customer edu.kz sites | TLS is required for .kz sites ([domain rules p.27](https://old.adilet.zan.kz/rus/docs/V1800016654)) |
| Errors and logs | [GlitchTip](https://glitchtip.com/) (self-hosted, Sentry-compatible) and log files on the same servers | Logs hold personal data, so they stay in Kazakhstan |
| Tests | pytest; [Playwright](https://playwright.dev/) for end-to-end tests at phone and desktop sizes; golden content tests | Agents need fast, strict feedback |
| Deployment | Docker Compose on one VM, then two; GitHub Actions; Ansible for servers | A solo founder can run it |
| Backups | [WAL-G](https://github.com/wal-g/wal-g) for continuous PostgreSQL backup, plus nightly file sync, to a second provider in Kazakhstan | Survives the loss of one provider. Yandex's Kazakhstan region, for example, has only one zone, kz1-a ([Yandex Cloud](https://yandex.cloud/en/docs/managed-postgresql/pricing), per search summary) |

### Diagram

```
Phone / PC browser (ru / kk)
        |
   Caddy (TLS)  ---- customer edu.kz sites (v1, same servers)
        |
   Django app (web)  ---- Procrastinate worker (reminders, PDFs, law-watch)
        |                      |
   PostgreSQL 16 (KZ)    Gotenberg (PDF)    ClamAV
        |
   Object storage (KZ, encrypted)  --->  backups to a 2nd KZ provider

Outbound only: e-mail provider, Telegram API, payment provider webhooks
(no personal data of staff leaves Kazakhstan)
```

### Does the technical plan need a local company?

- **Hosting, probably not.** Yandex Cloud's Kazakhstan entity says non-residents can become clients, with exceptions for some countries ([Yandex Cloud FAQ](https://yandex.cloud/ru-kz/docs/billing/qa/non-resident), per search summary). Serverspace runs servers in the Kazteleport data centre in Almaty and takes euro card payments ([Serverspace](https://serverspace.io/services/vps-server/vps-in-kazakhstan)). Whether hoster.kz and PS Cloud accept a foreign company paying by card was not confirmed (unverified).
- **The product's own domain.** Use a .com or similar for the app. A .kz domain would have to be hosted in Kazakhstan (it would be). Whether a foreign company may register one was not checked (unverified).
- **The customer's edu.kz domain.** The kindergarten registers it in its own name, because only Kazakhstan-resident education organisations qualify ([domain rules p.29](https://old.adilet.zan.kz/rus/docs/V1800016654)). We only host the site.
- **Personal Data Law.** It sets duties for owners and operators of data. It does not say they must be local companies ([Personal Data Law](https://old.adilet.zan.kz/rus/docs/Z1300000094)). Whether a foreign operator has extra duties is a question for the lawyer.
- Company registration fees and running costs are covered in the 04 file.

## Security, privacy and liability

### Data we hold, and what we refuse to hold

| Data | Sensitivity | Decision |
|---|---|---|
| Organisation, buildings, groups (counts) | Low | Hold |
| Staff identity, education, employment, training | Personal data | Hold; needed for Form 1-КК |
| Criminal-record status and certificate | High | Hold the status and date. Keep the file only if the head chooses; owner and head roles only |
| Medical exam dates | Health-related | Hold dates only, no diagnoses |
| Children's names, health or development data | High | **Not in the MVP.** Counts per group only. Development cards for pre-school groups are kept in NOBD anyway ([Order 130](https://old.adilet.zan.kz/rus/docs/V2000020317)) |
| Anti-terror passport | Marked "for official use" ([Order 117](https://old.adilet.zan.kz/rus/docs/V2200027414), per the 01 file) | **Never uploaded.** Record only that it exists, the approval date and the police agreement date. The upload screen warns against it |

### Personal Data Law duties and how the product meets them

- **Storage in Kazakhstan** (Art. 12(2)): all databases, files, backups and logs stay in Kazakhstan.
- **Cross-border transfer** (Art. 16) is allowed to countries that protect personal data, or with the subject's consent. Billing contacts go to the payment provider, and user e-mail addresses go to the e-mail provider. Get explicit consent for both at sign-up, or use a Kazakh e-mail relay. Ask the lawyer which route is safer.
- **Consent** (Art. 7-8): the kindergarten, as employer, collects staff consent. The product supplies a consent template in both languages. It covers processing by a service provider and lets the head record that consent was given.
- **Our role:** the kindergarten owns the data, and we process it on its behalf. A data-processing agreement in both languages is part of the terms.
- **Duties of a legal entity** (Art. 25): approve a list of personal data and policy documents; appoint a responsible person; notify the authorised body when a breach is discovered. The law sets no hour limit ([Personal Data Law](https://old.adilet.zan.kz/rus/docs/Z1300000094)). The product needs an incident runbook from day one.
- **State access-control service** (Art. 8-1): integration is required only for those who interact with state data systems. Otherwise it is voluntary (same source). We do not connect to state systems, so it does not apply.
- **AI-made content.** The AI law has been in force since January 2026. Owners of AI systems must tell users when content is AI-generated, and Administrative Code Art. 641-1 sets fines ([Forbes.kz](https://forbes.kz/articles/zakon-ob-iskusstvennom-intellekte-vstupil-v-silu-v-kazahstane-7179c3); [zakon.kz](https://www.zakon.kz/pravo/6504703-novye-shtrafy-za-nezakonnoe-ispolzovanie-iskusstvennogo-intellekta-poyavyatsya-v-kazakhstane.html)). Any AI-drafted plan text (later) is labelled, and no personal data is sent to an AI service.

### Security baseline (MVP)

- TLS everywhere. HSTS. Strict content security policy.
- Passwords with a breach check; two-factor login (TOTP) required for owner and head.
- Role-based access; tenant checks in code plus PostgreSQL row-level security; automated tests that try to read another tenant's data on every endpoint.
- Files: virus scan; type and size checks; encryption at rest; short-lived signed links; no public buckets.
- Append-only audit log for every change and download.
- Backups: continuous database backup; nightly file sync to a second provider in Kazakhstan; 30-day retention; a monthly restore drill.
- Servers: SSH keys only; admin access over WireGuard; automatic security updates; secrets kept outside the repository.
- Development: AI agents work only on synthetic data, never production. Dependency audit (pip-audit) and static scans (Semgrep, Bandit) in CI. The founder reviews every change to authentication, tenancy or file access by hand.
- An external penetration test before launch, then yearly. Scope: tenant isolation, file access, authentication and the admin console.

### Liability

- **Position the product as preparation, not a guarantee.** The licensor decides, and regions read the rules differently ([informburo, 1 Oct 2026](https://informburo.kz/novosti/vladelcy-castnyx-detsadov-v-kazaxstane-poprosili-edinyx-pravil-licenzirovaniia)).
- Every requirement page shows its legal source, effective date and review date. Every generated form records the rules version used.
- Physical issues (land use, building designation, fire acts) are always marked "needs expert". The app never shows green unless the user uploads the official act.
- Terms in Russian and Kazakh, reviewed by the lawyer: liability capped at the fees paid in 12 months; no legal advice; the customer checks the data it enters.
- Whether giving licensing help as a non-lawyer company needs any permit was not checked (unverified). Ask the lawyer in week 1.

## Hosting and running costs

### Choice: a Kazakh provider, with a second Kazakh provider for backups

- **Primary:** a cloud VM at hoster.kz. Prices on 10 Oct 2026, per month ([hoster.kz](https://hoster.kz/cloud/)); VAT and data-centre city not shown in what I extracted (unverified):
  - 2 vCPU / 4 GB / 100 GB NVMe: 9,600 ₸;
  - 4 vCPU / 8 GB / 200 GB: 23,040 ₸;
  - 8 vCPU / 8 GB / 200 GB: 29,760 ₸;
  - 8 vCPU / 16 GB / 400 GB: 65,280 ₸.
- **Alternatives:**
  - PS Cloud (ps.kz) claims PCI DSS 4.0.1 and ISO 27001 certificates, but its VPS prices did not load ([ps.kz](https://www.ps.kz/hosting/vps)).
  - Serverspace in Almaty bills in euro by card ([Serverspace](https://serverspace.io/services/vps-server/vps-in-kazakhstan)).
  - Yandex Cloud's Kazakhstan region publishes tenge rates, VAT included. Its worked examples use, per hour: 8.70 ₸ per full vCPU and 2.33 ₸ per GB of RAM for VMs. Managed PostgreSQL uses 13.52 ₸ per vCPU and 3.63 ₸ per GB of RAM, plus 26.51 ₸ per GB-month of HDD storage. Object storage costs 16.67 ₸ per GB-month ([compute](https://yandex.cloud/ru-kz/docs/compute/pricing); [PostgreSQL](https://yandex.cloud/ru-kz/docs/managed-postgresql/pricing); [storage](https://yandex.cloud/ru-kz/docs/storage/pricing)). These are example figures from the pricing pages and may lag the live price list.
- **My pick:** hoster.kz (or PS Cloud) for the app VM, and Yandex Object Storage in the Kazakhstan region for backups. That gives two providers, both in the country. Test support response and payment from abroad in week 1.

### Assumptions (my estimates)

- Each customer stores about 300 MB of scans (leases, conclusions, diplomas, certificates), and backups keep about two copies.
- About 70% of customers use the edu.kz site from v1. The site is a few static pages with tiny traffic.
- Payment provider fees are a share of revenue and are not included here (see the 05 file).

### Monthly running cost estimate (₸, my estimates)

| Item | 50 customers | 300 customers | 1,000 customers |
|---|---|---|---|
| App server(s) | 1 VM 4 vCPU/8 GB: 23,040 | 1 VM 8 vCPU/8 GB: 29,760 | 2 VMs 8 vCPU/8 GB: 59,520 |
| Database | On the app VM: 0 | Separate VM 4 vCPU/8 GB: 23,040 | Managed PostgreSQL, 2 hosts of 2 vCPU/8 GB (Yandex KZ example rates): about 83,000 |
| Object storage (files and backups) | 15 GB + 30 GB: about 750 | 90 GB + 180 GB: about 4,500 | 300 GB + 600 GB: about 15,000 |
| Gotenberg, ClamAV, worker | Shared: 0 | Shared: 0 | 1 VM 4 vCPU/8 GB: 23,040 |
| Transactional e-mail | 0-7,500 (free tier to US$15) | 7,500-15,000 | 15,000-30,000 |
| WhatsApp and SMS alerts | 0 (Telegram and e-mail) | 5,000-15,000 | 15,000-50,000 |
| Monitoring and uptime | Self-hosted: 0-2,500 | 2,500-10,000 | 10,000-25,000 |
| AI drafting (later, no personal data) | 0 | 5,000-15,000 | 15,000-50,000 |
| Domains and certificates | about 1,500 | about 1,500 | about 3,000 |
| **Total** | **about 25,000-35,000 (US$50-70)** | **about 80,000-115,000 (US$160-230)** | **about 240,000-340,000 (US$480-680)** |
| Per customer a month | about US$1.0-1.4 | about US$0.5-0.8 | about US$0.5-0.7 |

Add software tools for the founder. Claude Max costs US$100-200 a month per seat (third-party price guide: [heyuan110](https://www.heyuan110.com/posts/ai/2026-02-25-claude-code-pricing/); check [claude.com/pricing](https://claude.com/pricing)). GitHub, a password manager and similar tools add about US$40-60 a month. With one Claude seat, the all-in tooling and hosting cost is roughly US$190-330 a month at 50 customers, US$300-490 at 300 and US$620-940 at 1,000 (my estimates).

At the planned 5,000-10,000 ₸ a month per site (02 file), hosting is about 2-10% of subscription revenue. The real recurring cost is law-watch and content upkeep: a lawyer at 5-10 hours a month and a methodist at 5-10 hours a month (see Budget).

## Development plan

### Principles for building with Claude Code and parallel agents

- **Contracts first, then parallel work.** The founder and one agent build the foundation: models, roles, tenancy, the design system and test harness. They freeze the data-model contracts on day 4. After that, each stream owns one Django app and one folder.
- **One git worktree and one branch per agent stream.** Each stream has its own tests. The founder merges at least daily. A separate review agent reads every pull request against a checklist covering tenancy, file access, translations and tests.
- **The repository holds the rules for agents:** CLAUDE.md with conventions, architecture decision records, a glossary (Russian, Kazakh, English) and fixtures. The fixtures are three fictional kindergartens: a 2-group mini-centre, a 6-group rented kindergarten and a 12-group own-building kindergarten.
- **Content is a separate human stream.** Agents draft text from the primary sources. The methodist and lawyer correct and sign it off. Nothing reaches the "live" state without sign-off.
- **No production data in agent sessions.** Synthetic data only.

### Agent work streams (MVP)

| Stream | Scope | Depends on | Agent-days (my estimate) |
|---|---|---|---|
| **WS0 Foundation** (founder + 1 agent, days 1-4) | Repository, Docker, CI; Django skeleton; authentication with two-factor login; organisation, site and membership models; roles; row-level security; Russian and Kazakh translation set-up; Tailwind component set; Playwright harness; fixtures; CLAUDE.md | — | 4 |
| **WS1 Rules engine and content model** | Requirement, Rule, Question, Answer, Assessment; YAML loader; applicability; scoring; golden tests; admin console with versions and sign-off | WS0 | 6-8 |
| **WS2 Staff register** | Staff, Education, Category, Training, MedicalCheck, RecordCheck; Excel template and import with validation; share calculations; expiry calculations | WS0, WS1 interfaces | 5-7 |
| **WS3 Buildings, groups, equipment** | Building, Room, Group, EquipmentItem, MedicalProvision, catering; group-size and beds/lockers checks; lease-term check; anti-terror group logic | WS0, WS1 | 4-6 |
| **WS4 Forms and licence pack** | Templates for forms 1-КК to 8-КК in both languages; DOCX, XLSX and PDF output; portal copy sheet; ZIP with index; GeneratedDocument records | WS2, WS3 models | 6-8 |
| **WS5 Evidence and inspections** | Uploads (camera, JPG to PDF, compression, virus scan, encryption, signed links); expiry; CQA and CPCR self-audits; inspection binder PDF | WS0, WS1 | 5-7 |
| **WS6 Tasks and notifications** | Task engine; reminder rules; e-mail; Telegram bot; weekly digest; calendar | WS2, WS3 | 3-4 |
| **WS7 Public self-check, landing, billing** | Public wizard (no personal data); PDF result; e-mail capture; landing pages in both languages; card checkout and webhooks; plans and entitlements | WS1 | 4-5 |
| **WS8 QA and security agent** (runs all the time) | End-to-end tests at phone width; tenant-isolation test suite; accessibility checks; Semgrep, Bandit, pip-audit; reviews pull requests | All | Continuous |
| **Content stream (people + drafting agent)** | Plain-language text for rows 73-82 (about 60-80 items); CQA 29 and CPCR 9 items; questions; regional notes; form filling notes; Kazakh versions; consent and terms drafts | Lawyer and methodist contracted in week 1 | About 15,000-25,000 words in Russian, then Kazakh |

The eight build streams add up to about 37-49 agent-days. They fit into about 3 calendar weeks if 4-6 agents run at once, with the founder as integrator and reviewer for 10-12 hours a day (my estimate). Founder review is the main bottleneck. If review falls behind, cut WS7 billing to a manual invoice and move Telegram to v1.

### Calendar (start Monday 12 Oct 2026)

| Week (start date) | Product and content | Engineering (agents) | Sales and pilot | Legal checkpoint |
|---|---|---|---|---|
| 1 (12 Oct) | Agents draft the requirement map from rows 73-82, the CQA and CPCR items and the form notes; contract the lawyer and methodist; 8-10 owner calls through the associations (02 file) | WS0 foundation (days 1-4); contracts frozen on Thursday; WS1 starts | Landing page "Licence from 1 January 2027: check in 15 minutes" with a waitlist | **LC0:** lawyer scope, rate and questions: lease-term reading, non-lawyer advice, consents, cross-border e-mail |
| 2 (19 Oct) | Methodist reviews the self-check questions; first regional notes from calls | WS1, WS2, WS3, WS5 and WS7 in parallel; **public self-check live about 23 Oct** | Share the self-check through Atameken and the associations; collect leads | **LC1:** requirement map and thresholds approved (rows 73-82) |
| 3 (26 Oct) | Form filling notes; inspection items text; Kazakh drafts | WS4 and WS6 start; daily integration; WS8 tenant tests | Recruit 10-15 pilot kindergartens: Almaty city and region, Shymkent, Turkestan, Astana | |
| 4 (2 Nov) | Kazakh UI and document review by a proofreader | **MVP feature-complete by Fri 6 Nov**; bug bash; restore drill; load test with 300 synthetic kindergartens | Two friendly kindergartens try it live with the founder on a video call | **LC2:** templates for forms 1-КК to 8-КК approved in both languages |
| 5 (9 Nov) | Terms, data-processing agreement, privacy notice, staff consent template | **External penetration test (3-5 days)** on staging; fixes start | Pilot onboarding (free until launch, weekly feedback) | **LC3:** terms, disclaimers and consents approved |
| 6 (16 Nov) | Adjust content from pilot questions | Fix pen-test findings; retest; usability fixes from session recordings (stored in Kazakhstan) | Pilot week 2; price test (pack 40,000-60,000 ₸; subscription 5,000-10,000 ₸ a month, 02 file) | |
| 7 (23 Nov) | FAQ and short videos in both languages | Hardening; monitoring dashboards; data export | Collect "would pay" answers; first association deal | **LC4:** lawyer reviews 3 real pilot packs as a mock licensor check |
| 8 (30 Nov) | Launch materials | Release candidate; definition-of-done check | **Paid launch Mon 7 Dec 2026** | |
| Dec 2026 | Support; regional notes | Fixes; start the edu.kz site (v1) | Sell packs before 1 Jan; webinars with associations. Plan around the mid-December Independence Day holidays (dates unverified) | Law-watch on any transition-period decision |
| Jan-Mar 2027 | First real filings: record the portal format | edu.kz site; recommendation and order tracker; WhatsApp; consultant view | Collect licensing outcomes as proof | Adjust the copy sheet to the real portal |
| Apr-Jun 2027 | Plan templates per age group | Plans module; self-assessment; journals | Upsell plans before the school year | Review Order 130 forms after any change |

The plan is tight. Two things make it workable. The public self-check needs no personal data and ships early. And the phased roll-out spreads licence demand over 2027-2029 (A1 report), so a slip of 2-3 weeks costs some December sales but does not kill the business.

### Fallback if the build slips: a concierge licence pack

- **What.** From week 3, sell the pack as a service. The owner fills a staff and building spreadsheet. The methodist (or the founder) runs it through the same form templates with a script, checks the result and sends the seven forms and an evidence checklist back.
- **Privacy catch.** The spreadsheet holds staff personal data. Do not collect it through Google Forms, Google Sheets or foreign e-mail, because storage must be in Kazakhstan (Art. 12(2)). Use an upload page on the Kazakh server from the WS0 foundation, and delete the files after delivery.
- **When to use it.** If the MVP is not feature-complete by 13 Nov, or if pilots show owners want someone to do it for them. The templates and rules are reused in the software, so little work is lost.

### Definition of done for the MVP

1. A pilot kindergarten with 6 groups goes from sign-up to a complete licence pack in **under 90 minutes** of its own work. This holds for at least 8 of 10 pilot kindergartens.
2. Forms 1-КК to 8-КК match the official column order and wording in Russian and Kazakh. The lawyer's mock check of 3 pilot packs finds no missing column or document.
3. The staff shares and expiry rules pass all golden tests. That means at least 40 cases signed by the lawyer, including the fewer-than-two-groups exception, both 75% measures and the 3-group medical-room exception.
4. Group-size, bed, locker and lease checks pass the golden tests for all three fixture kindergartens.
5. The inspection binder covers all 29 CQA and 9 CPCR items with their severity, and prints to PDF.
6. Reminders fire correctly in an automated time-travel test across 3 years.
7. All data, files, backups and logs are in Kazakhstan. A restore from backup has been tested.
8. The tenant-isolation suite passes. The pen test has no open high or critical findings.
9. Every screen works at 360 px width. Both languages are complete on every screen and document.
10. Every requirement shows its source, effective date and sign-off. Content checkpoints LC1-LC3 are signed.
11. At least 5 pilot kindergartens say they would pay the planned price.

### After launch: v1 and later

- **Jan-Feb 2027:** edu.kz one-page site; recommendation and order tracker with deadlines (10 working days for recommendations); WhatsApp alerts; consultant workspace; re-issue wizard.
- **Mar-Jun 2027:** long-term plans and weekly cyclograms in the Order 130 forms (the forms were restated in July 2026 ([Order 130](https://old.adilet.zan.kz/rus/docs/V2000020317))); self-assessment score and publication; anti-terror and fire journals; second pen test.
- **Later:** NOBD comparison screen; e-signature for internal documents through NCALayer; OCR of certificates and conclusions; menu planner or a partner integration; private schools (828) and colleges (326) on the same engine (02 file).

## Budget

### Cost basis (estimates)

- **Lawyer.** In-house lawyers with 3-6 years' experience earn about 600,000-650,000 ₸ a month after tax in Almaty ([hh.ru](https://hh.ru/vacancy/135533163)). Advocates in regional towns charge a minimum of 5,000 ₸ for a consultation ([inform.kz](https://www.inform.kz/ru/skolko-stoyat-uslugi-advokatov-v-kazahstane-cdaf32)); an Almaty advocate drafts documents from 25,000 ₸ ([Kaspi](https://obyavleniya.kaspi.kz/a/advokat-108282860)). I assume an education and licensing lawyer at 15,000-35,000 ₸ (US$30-70) an hour (unverified).
- **Methodist** (a former kindergarten head or methodist). Methodist pay is about 100,000-500,000 ₸ a month (02 file). I assume freelance work at 4,000-8,000 ₸ (US$8-16) an hour (unverified).
- **Penetration test.** Small web-app tests cost "a few thousand pounds" ([7asecurity](https://7asecurity.com/blog/2025/11/web-app-pen-test-cost/)). No Kazakh price was found. I assume US$1,500-4,000 for a 3-5 day grey-box test (unverified).
- **AI tools.** Claude Max costs US$100 or US$200 a month ([third-party guide](https://www.heyuan110.com/posts/ai/2026-02-25-claude-code-pricing/)). Running 4-6 agents at once will likely need two top-tier seats or extra API spend (my estimate).

### Cash budget (US$, founder unpaid, no salaried developers)

| Item | To sellable (weeks 1-8) | v1 (Jan-Jun 2027) |
|---|---|---|
| AI coding tools (2 Max seats for 2 months, plus overflow API use) | 800-1,600 | 1,200-2,400 |
| Lawyer: requirement map, form templates, terms, consents, mock check (30-50 hours) | 900-3,500 | Law-watch 5-8 hours a month: 900-3,400 |
| Methodist: questions, plain-language text, regional notes (60-100 hours) | 500-1,600 | Plan templates and self-assessment (80-120 hours): 650-1,900 |
| Kazakh translation and proofreading | 600-1,500 | 300-800 |
| Penetration test and retest | 1,500-4,000 | 500-1,500 |
| Hosting, backups, e-mail, domains, monitoring | 150-300 | 400-800 |
| Design review (optional freelance) | 0-800 | 0-500 |
| Pilot costs (one trip to Almaty and Shymkent, association events, small incentives) | 800-2,500 | 500-1,500 |
| Contingency (about 15%) | 800-2,400 | 650-1,900 |
| **Total** | **about 6,000-18,200** | **about 5,100-14,700** |

Not included: company set-up and accounting (04 file), payment fees (05 file), marketing spend and the founder's time.

## Risks

| Risk | Effect | Mitigation |
|---|---|---|
| **Content is wrong, or regions read it differently** | A customer is refused and blames us | Lawyer and methodist sign-off; sources and dates on every item; regional notes; "needs expert" flags; liability cap |
| **The law changes or the start is delayed** (owners asked for a transition period on 1 Oct 2026 ([informburo](https://informburo.kz/novosti/vladelcy-castnyx-detsadov-v-kazaxstane-poprosili-edinyx-pravil-licenzirovaniia))) | Sales of the pack slip; content goes stale | Weekly law-watch; effective dates in the rules; inspection readiness sells even without licensing |
| **Portal format unknown** | The copy sheet does not match the screens | Output fields and files; fix after the first filing in January 2027 |
| **"Information system" in row 81 is unclear** | A gap we cannot close | Ask the licensor and the lawyer. Do not claim the product fills this row |
| **A state vendor or association gives away a checklist** | The one-off pack loses value | Lead with recurring value: staff alerts, binder, tracker, website |
| **Single hosting zone or a weak local provider** | Downtime, including customers' mandatory websites | Backups with a second Kazakh provider; restore drills; a documented 4-hour rebuild |
| **Code written by AI agents has security holes** | Data breach | Tenant tests; human review of sensitive code; static scans; pen test before launch |
| **Kazakh language quality** | Loss of trust in the south | A native proofreader; glossary; pilot users in Turkestan and Shymkent |
| **Founder review is the bottleneck** | Slipping calendar | Cut scope (billing to invoice, Telegram to v1); keep the public self-check on time |
| **Cross-border transfer of e-mail and billing contacts** | Breach of Art. 16 | Consent at sign-up, or a Kazakh e-mail relay; the lawyer decides in week 1 |
| **Owners resist "one more app"** ([informburo on daily photo rules](https://informburo.kz/novosti/v-kyzylorde-cinovniki-obyazali-castnye-detskie-sady-ezednevno-fotografirovat-detei), via the 02 file) | Low activation | Phone-first; Excel import; teacher upload by link; show that it replaces paper |

## Open questions

1. **Portal format.** Does eLicense take forms 1-КК to 8-КК as typed fields or as uploaded files? What are the file size and type limits?
2. **Row 81.** What counts as an "education management information system with current databases matching NOBD"? Do ED24 or e-orda count?
3. **Lease term.** Does "at least 5 years" mean the total term or the remaining term at filing?
4. **Two 75% measures.** Row 74 has both a main-job share and a staff (штатные) share of at least 75%. Do licensors compute them the same way, for example for part-time staff teachers?
5. **edu.kz.** What does the registrar ask as proof of educational activity? What is the price? How long does it take?
6. **Foreign operator.** Does a foreign company processing staff data on Kazakh servers have extra duties, for example registration or a local representative?
7. **Cross-border.** Is consent enough for the e-mail provider and billing provider, or should all e-mail go through a Kazakh relay?
8. **Advice.** Does giving licensing help as a non-lawyer company need any permit?
9. **Hosting abroad.** Do hoster.kz and PS Cloud accept a foreign company paying by card? Do they have managed PostgreSQL and S3 storage, and at what prices?
10. **Medical book.** Do inspectors check the paper personal medical book, or an electronic record? (The exam intervals themselves are known: 12 months for the chest X-ray, 6 months for lab tests.)
11. **Inspections.** Do inspectors accept evidence on a screen, or do they want paper? This decides how much the binder must print.
12. **Self-assessment.** When in the year must private preschools publish the self-assessment? Is there a required format?

## Sources

Primary legal texts (Ministry of Justice database):
- Order 268 (preschool licence rows 73-82, Annex 1): https://old.adilet.zan.kz/rus/docs/V2500037500
- Order 473 (qualification requirements and Annexes 2-8): https://old.adilet.zan.kz/rus/docs/V2200030721
- Order 248 (licence service rules, forms 1-КК to 8-КК): https://old.adilet.zan.kz/rus/docs/V2500037314
- CQA risk criteria and preschool checklist: https://old.adilet.zan.kz/rus/docs/V1500012777
- CPCR risk criteria and checklist (via the 01 file): https://old.adilet.zan.kz/rus/docs/V2600038978
- Order 130 (teacher documents): https://old.adilet.zan.kz/rus/docs/V2000020317
- Order 486 (self-assessment criteria): https://old.adilet.zan.kz/rus/docs/V2200031053
- Domain rules (Order 38/НҚ of 2018): https://old.adilet.zan.kz/rus/docs/V1800016654
- Personal Data Law: https://old.adilet.zan.kz/rus/docs/Z1300000094
- Language Law: https://old.adilet.zan.kz/rus/docs/Z970000151_
- Law on Education (via the 01 file): https://old.adilet.zan.kz/rus/docs/Z070000319_
- Law on the Rights of the Child (via the 01 file): https://old.adilet.zan.kz/rus/docs/Z020000345_
- Law 148-VIII (via the 01 file): https://old.adilet.zan.kz/rus/docs/Z2400000148
- Order 117, anti-terror (via the 01 file): https://old.adilet.zan.kz/rus/docs/V2200027414
- Order 385, model rules (via the 01 file): https://old.adilet.zan.kz/rus/docs/V2200029329
- Order 55, fire rules (via the 01 file): https://old.adilet.zan.kz/rus/docs/V2200026867
- Order ҚР ДСМ-131/2020, medical exams: https://old.adilet.zan.kz/rus/docs/V2000021443
- Code on Administrative Offences (via the 01 file): https://old.adilet.zan.kz/rus/docs/K1400000235

Domains, portals, registers:
- nic.kz EDU.KZ policy draft (search summary; PDF did not load): https://nic.kz/srs/edupolicy.pdf
- egov.kz on eLicense education services (search summary): https://egov.kz/cms/ru/news/educational_organisations
- egov.kz criminal-record certificate: https://egov.kz/cms/ru/news/criminal_mobile
- Kapital.kz on online camp licensing via elicense.kz (24 Jun 2026): https://kapital.kz/tehnology/149635/licenzirovanie-detskih-obrazovatelno-ozdorovitelnyh-centrov-teper-dostupno-onlajn.html
- stat.gov.kz BIN search: https://stat.gov.kz/ru/cabinet/juridical/by/bin/
- Open data client (API key needed): https://packagist.org/packages/ginkida/opendata-client
- ncalayerjs: https://github.com/seithq/ncalayerjs
- Telegram Bot API: https://core.telegram.org/bots/api

Hosting and tools:
- hoster.kz cloud prices: https://hoster.kz/cloud/
- PS.kz: https://www.ps.kz/cloud ; https://www.ps.kz/hosting/vps
- Yandex Cloud Kazakhstan prices: https://yandex.cloud/ru-kz/docs/compute/pricing ; https://yandex.cloud/ru-kz/docs/managed-postgresql/pricing ; https://yandex.cloud/ru-kz/docs/storage/pricing ; https://yandex.cloud/en/docs/managed-postgresql/pricing
- Yandex Cloud non-resident FAQ: https://yandex.cloud/ru-kz/docs/billing/qa/non-resident
- Serverspace Kazakhstan: https://serverspace.io/services/vps-server/vps-in-kazakhstan
- Django: https://www.djangoproject.com/ ; HTMX: https://htmx.org/ ; Procrastinate: https://procrastinate.readthedocs.io/ ; docxtpl: https://docxtpl.readthedocs.io/ ; Gotenberg: https://gotenberg.dev/ ; ClamAV: https://www.clamav.net/ ; Caddy on-demand TLS: https://caddyserver.com/docs/automatic-https#on-demand-tls ; GlitchTip: https://glitchtip.com/ ; Playwright: https://playwright.dev/ ; WAL-G: https://github.com/wal-g/wal-g
- Claude pricing (third-party guide): https://www.heyuan110.com/posts/ai/2026-02-25-claude-code-pricing/ ; official: https://claude.com/pricing

Messaging, tax, costs:
- Messaggio Kazakhstan: https://messaggio.com/ua/messaging/kazakhstan/
- sent.dm Kazakhstan SMS: https://sent.dm/en/resources/sms-pricing/kazakhstan-sms-pricing
- Quaderno Kazakhstan VAT: https://www.quaderno.io/tax-guides/kazakhstan-vat-guide
- KPMG, Sep 2026: https://kpmg.com/us/en/taxnewsflash/news/2026/09/kazakhstan-proposed-tax-measures-foreign-e-commerce-electronic-service-providers.html
- Paddle tax countries: https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/
- 7asecurity pen-test cost: https://7asecurity.com/blog/2025/11/web-app-pen-test-cost/
- hh.ru lawyer vacancy: https://hh.ru/vacancy/135533163
- inform.kz advocate prices: https://www.inform.kz/ru/skolko-stoyat-uslugi-advokatov-v-kazahstane-cdaf32
- Kaspi advocate listing: https://obyavleniya.kaspi.kz/a/advokat-108282860

AI law:
- https://forbes.kz/articles/zakon-ob-iskusstvennom-intellekte-vstupil-v-silu-v-kazahstane-7179c3
- https://www.zakon.kz/pravo/6504703-novye-shtrafy-za-nezakonnoe-ispolzovanie-iskusstvennogo-intellekta-poyavyatsya-v-kazakhstane.html
- https://finratings.kz/news/10706-s-16-ianvaria-v-kazakhstane-vvodiat-shtrafy-za-ii-kontent-detali/

Market and context (via the A1 report and the 01 and 02 files):
- https://informburo.kz/novosti/vladelcy-castnyx-detsadov-v-kazaxstane-poprosili-edinyx-pravil-licenzirovaniia
- https://informburo.kz/novosti/vladelcy-castnyx-detsadov-grozyat-zabastovkoi-iz-za-vvedeniya-licenzirovaniya
- https://informburo.kz/novosti/v-kyzylorde-cinovniki-obyazali-castnye-detskie-sady-ezednevno-fotografirovat-detei
- https://mtrk.kz/ru/2026/07/24/licenzirovanie-detskikh-sadov-startu/
- https://www.zakon.kz/stati/6420659-verifitsiruy-menya-ili-zachem-kazakhstanskim-roditelyam-navyazyvayut-novoe-prilozhenie-dlya-detsadov.html
