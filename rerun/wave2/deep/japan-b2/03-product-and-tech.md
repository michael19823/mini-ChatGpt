# Japan animal-business records tool: product and technical design

Part 3 of the Japan B2 deep dive: product, technical design and development plan. Written 10 Oct 2026. Status: draft complete, being checked.
Builds on [the B2 report](../reports/japan-b2.md), [01 law and requirements](01-law-and-requirements.md) and [02 market](02-market-and-competition.md). "R1-R53" below are the numbered requirements in the 01 file's "PRODUCT REQUIREMENTS" list. "My estimate" marks numbers I derived. "(unverified)" marks facts I could not confirm. Money: ¥150 = US$1 is assumed (unverified rate, same as the 02 file).

## Summary

- **Product:** a phone-first web app, in Japanese, for dog and cat breeders and small pet shops. Its job is "inspection-ready records". It keeps the per-animal ledger (13 items), the breeding log with lifetime litter counts, the daily check log, microchip deadlines and the staff ratio. The 様式第十一の二 annual report (due 30 May) falls out of the ledger as a by-product. This follows the 02 file's positioning.
- **No portal to integrate with for the records.** The ledgers stay at the business and are shown on request; electronic records are allowed if they can be shown ([Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html)). The annual report is filed by LoGo web form (Tokyo asks for one Excel file per registration category), a prefectural e-application (Chiba), e-mail, post or counter. No authority offers an API ([Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html); 01 file). So the app produces the Excel and PDF and a "channel helper"; the user files.
- **One real integration: the MOE microchip database's bulk CSV.** It has four CSV types, including "new registration of animals a business acquired", with breed and coat-colour code lists, in manual v2.7 of July 2026 ([search result for the MOE manual](https://reg.mc.env.go.jp/owner/file/%E4%B8%80%E6%8B%AC%E6%89%8B%E7%B6%9A%E7%94%A8CSV%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E4%BD%9C%E6%88%90%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB(%E4%BB%A4%E5%92%8C8%E5%B9%B47%E6%9C%88).pdf)). The site returned HTTP 403 to me from abroad, so the column list is unconfirmed. Get the manual and the input format through a Japanese pilot user. Build the export as a versioned, data-driven format.
- **The report counting rules are mostly clear.** Tokyo's filled-in example says "new" covers animals bought, born, and brought in as breeding parents, but not eggs. "Out" covers sales, gifts, animals retired from rental, exhibition or breeding, and moves to another site of the same business. The owner's own pets are left out, and a year with no animals still needs a zero report ([Tokyo example](https://www.hokeniryo.metro.tokyo.lg.jp/documents/d/hokeniryo/teikihoukoku-kisairei2)). Stillbirths are not counted ([Aomori example](https://www.pref.aomori.lg.jp/soshiki/kenko/dobutu/files/20210108kisaireiteikihoukoku.pdf)). Year-end stock becomes next year's opening stock ([Koriyama](https://www.city.koriyama.lg.jp/uploaded/attachment/80653.pdf)). How to split animals between two registrations at one site (sale plus exhibition) is still open (unverified). The domain expert must decide it in week 1.
- **Stack for a solo founder with AI agents:** one Django monolith (Python), PostgreSQL, server-rendered pages with HTMX, WeasyPrint with Noto Sans JP for A4 PDFs, openpyxl to fill the official Excel form. Host on AWS Lightsail in Tokyo, with backups in Osaka. E-mail reminders in the MVP. LINE reminders in v1, because LINE has over 100 million monthly users in Japan ([Impress Watch](https://www.watch.impress.co.jp/docs/news/2081911.html)).
- **Privacy:** the breeder is the controller of buyers' names and addresses; we are its contractor (委託先). A foreign vendor counts as a "third party in a foreign country" under the privacy law (APPI Art. 28). That needs consent, an equivalent country, or a contract-based set-up. **If the founder's company sits in the EU/EEA or the UK, this is easiest, because Japan's privacy regulator (PPC) treats those as equivalent** ([PPC](https://www.ppc.go.jp/enforcement/cooperation/cooperation/sougoninshou/)). Elsewhere, sign APPI-standard contract terms and publish the country information.
- **New legal risk found: the scrivener law (行政書士法).** Since 1 January 2026, Art. 19(1) bans non-scriveners from preparing documents for government offices at another's request for pay "under any name" ([JEMCA notice](https://www.jemca.or.jp/wp-content/uploads/2026/01/gyoiseisyoshihoukaisei.pdf)). A self-service tool where the user enters data and files the report is probably outside this (my reading). But a paid "we prepare your report" pack is risky. Drop the 02 file's ¥4,980 "report season pack" as a document service unless a lawyer approves it. Get a written opinion in week 1.
- **Running cost is small:** about US$32-65 a month at 50 customers, US$165-265 at 300 and US$400-610 at 1,000 (my estimates). That is about 5-16% of revenue at ¥14,800 a year per customer.
- **Build plan:** MVP feature-complete in about 3.5 weeks (start Mon 12 Oct 2026, ready about 6 Nov). Then expert review, pilots on last year's data, lawyer review and an external security test. Paid launch about Mon 7 Dec 2026 (week 9). v1 (LINE, Excel import, photo import of paper ledgers, chip CSV, free report calculator) ships by end of February 2027, before the 1 April - 30 May 2027 report window. 30 May 2027 is a Sunday. The local government holiday rule may move the legal deadline to Monday 31 May (地方自治法 Art. 4-2(4), my reading; [Shugiin text of the 1988 amendment](https://www.shugiin.go.jp/internet/itdb_housei.nsf/html/houritsu/11319881213094.htm)). But authorities publish "30 May" even when it falls on a weekend; Kumamoto did so for Saturday 30 May 2026 ([Kumamoto](https://www.pref.kumamoto.jp/soshiki/30/167649.html)). So remind for 30 May and treat 31 May only as a fallback.
- **Cash to a sellable product:** about US$5,600-16,200 (¥0.84-2.4 million), most likely about US$9,000-12,000. The biggest lines are the security test, the lawyer, the domain expert and Japanese-language help. First-year running cash after launch is about US$5,000-13,000. No salaried developers.

## Users and jobs

### Who uses the product

Buyers are tiny. In Fukuoka 84% of registered sites are individuals, and the median dog and cat seller declares about 10 animals (02 file, own count of the [Fukuoka register](https://www.pref.fukuoka.lg.jp/contents/animalhandlingbusiness-type1-inspection.html)). So the "user" is usually one person doing every role, on a phone, in a kennel.

| Role (Japanese label) | Who it is | Main jobs in the app | Rights |
|---|---|---|---|
| **Owner / representative** (代表者, 登録者) | The registered breeder or shop owner; often a family business | Set up registrations; approve the annual report; pay; export the archive | Everything in own business; billing; add or remove users |
| **Responsible person** (動物取扱責任者) | One per site; often the owner. Must attend the yearly training and brief staff (Act 22; Standards 2(7)コ, see 01 file) | Daily checks; sales with face-to-face explanation; breeding decisions; training records | Everything except billing and user admin |
| **Staff** (従業員, パート, family helpers) | Keepers, shop staff | Daily check log; log births, deaths and arrivals; prepare a sale | Animals and logs of their site; cannot delete; cannot finalise the report |
| **Read-only viewer** (v1) | A partner, the vet, or the owner's accountant | Look at records | Read only, time-limited |
| **Inspector** (監視員; not a user) | Prefectural health-centre staff | Asks to see records; may take a copy | Gets an "inspection pack" PDF or the screen; never logs in |
| **Trade partner** (later) | Auction house, shop or marketplace buying puppies | Receives a clean per-puppy record (birth date, dam, litter number, chip) | Receives an export only |
| **Our support** (internal) | The founder | Fix problems | Only with the customer's time-limited consent; every access logged |

### Jobs to be done (in the buyer's words)

1. "When the inspector comes, I want to show 5 years of records in a minute, not hunt through binders." Inspections are frequent: 23,914 on-site inspections at 20,215 sites in FY2024 ([MOE R7 2_1_3](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_3.pdf)). In the 2023 national sweep, 496 of about 1,400 breeders had ledger defects and 314 had breeding-ledger defects ([MOE council paper](https://www.env.go.jp/council/content/i_10/000357242.pdf)).
2. "When a litter is born, I want to enter it once and have the ledger, the breeding log and the chip deadlines all updated."
3. "Before I mate a dam, I want to know if she is still allowed." Limits: dogs at most 6 litters; mating up to age 6, or 7 with proof (Standards 2(6)ホ-ヘ; 01 file R31).
4. "When I sell a puppy, I want the explanation sheet printed and the ledger closed in one go, and I want to be stopped if the puppy is too young or not chipped." (Act 21-4, 22-5, 39-2 to 39-6; R23, R28, R40.)
5. "In April, I want the report numbers right without counting sheets by hand, and I want to know where and how to send it."
6. "I want one reminder list: chip deadlines, vet checks, the report, training, registration renewal." Health centres in principle send no renewal notice ([Saitama guide p.7](https://www.pref.saitama.lg.jp/documents/281787/doutoriminasamahe260831.pdf)).
7. "I want to stop using paper, but I don't want to type my old ledger again." (Excel import; photo import in v1.)
8. Shops: "When I buy at auction, I want the 2-day observation and the chip change of owner tracked, and the breeder's records attached."

## Feature map

### Duties behind the features

The legal source for each feature is in the 01 file's duty table and requirements. Short map:

| Duty (01 file #) | Feature | Requirement |
|---|---|---|
| Animal ledger, 13 items, 5 years (#1) | Animal register with event timeline; no hard delete; history | R6-R13 |
| Annual report 様式第十一の二 (#2) | Report computed from events; reconcile; Excel/PDF; channel helper; reminders | R14-R22 |
| Face-to-face explanation, 18 items (#3); B2B document (#4) | Sale wizard with generated sheet and captured confirmation | R23-R24 |
| Daily facility and animal check (#5, #6) | One-tap daily log (参考様式第9) | R36 |
| Trade record (#7) | Derived from the ledger; standalone for boarding and training (later) | R37 |
| Breeding log, limits, caesarean (#8-#10) | Breeding board with lifetime litter counts and eligibility checks | R30-R34 |
| Yearly vet check (#11) | Due dates per animal; certificate storage | R35 |
| Staff ratio (#12) | Staff hours and ratio calculator, including the mixed dog/cat table | R38 |
| 56-day sale ban (#14); 2-day observation (#15) | Sale blocks | R28-R29 |
| Display card, ad footer, sign (#18-#20) | Printables | R25, R27 |
| Training, renewal, change notices (#21-#24) | Admin reminders | R43-R46 |
| Microchip fitting and registration (#27-#28) | Chip fields, deadlines, handover block, bulk CSV export | R39-R42 |
| Answer inspections (#30) | Inspection pack | R47-R48 |
| Privacy, language, archive | APPI measures, Japanese A4 output with era dates, archive after cancellation | R49-R52 |
| Other-mammal standards, expected spring 2027 | Rule toggles by effective date | R53 |

### Feature map

| Area | MVP (sellable early Dec 2026) | v1 (by end Feb 2027) | Later |
|---|---|---|---|
| **Setup** | Business, sites, registrations (category, number, dates); site address to receiving authority (67 authorities plus delegated core cities); duty engine switches records on and off (R1-R5); staff with hours | Registration certificate photo read by AI; look-up in published registers (Fukuoka, Kagoshima City) | Multi-site chain admin |
| **Animal ledger** | Dogs and cats one per animal; others by breed lot (R6); 13 items with legal fallbacks (R7); events (born, acquired, sold, handed over, rented, returned, died); counterparties; photo attachments; correction history; no hard delete (R10); opening balance wizard; "own pet, not for business" flag | Excel import of Tokyo 都参考様式1-4 and other common sheets (R13); photo import of paper ledgers (AI reads, user confirms); bulk litter actions | Barcode or chip-reader shortcuts beyond keyboard input |
| **Sales** | Sale wizard: age, chip and observation checks; 18-item explanation sheet PDF from animal and breed data; confirmation by on-screen signature or photo of the signed paper; B2B document and receipt (R23-R24); certificates handed over (R26) | Display card print (R25); ad footer and sign data (R27); breeding-log copy for B2B buyers (R33) | Customer-facing e-mail of the sheet; POS link (Square, STORES) |
| **Breeding** | Matings, litters, lifetime litter count, dog and cat limits (R30-R32); caesarean certificates (R34); 56/49-day sale lock (R28) | Heat and due-date calendar; history entry of past litters with proof photos | Genetics, pedigrees (not a legal duty) |
| **Health and staff** | Yearly vet check due dates and certificates (R35); daily check log (R36); staff ratio warning (R38); 2-day observation timer (R29) | Monthly self-check against the MOE checklist (R48); training and staff-briefing records (R45) | Vet system links |
| **Microchips** | Chip number (15 digits, Japan code 392) with format check; fitting and registration deadlines; handover block (R39-R40, R42) | MOE bulk CSV export, versioned format (R41) | Direct submission, only if MOE ever opens an API |
| **Annual report** | Per-registration computation, reconcile, death-rate warning, 様式第十一の二 Excel and PDF, authority addressee, channel helper, submission record, reminders from 1 April (R14-R22) | Free public "report calculator" from an uploaded Excel ledger (lead magnet, no account) | Pre-filled e-mail sending where an authority accepts e-mail |
| **Inspection** | Inspection pack for a date range: one merged PDF plus Excel files (R12, R47) | Offline read-only view on the phone (PWA cache) | Time-limited share link for an inspector (only if authorities want it) |
| **Reminders** | E-mail; dashboard task list | LINE Official Account messages; weekly digest | SMS for users without LINE |
| **Admin duties** | Registration expiry dates | Renewal window, change-notice and closure timers (R43-R44); health and safety plan versions (R46) | — |
| **Account** | Roles (owner, staff); audit log; billing; free tier up to 5 animals; full export; archive plan after cancellation (R52) | Read-only viewer role; LINE Login | Partner feeds to auctions and marketplaces |
| **New rules** | Rules carry effective dates | Other-mammal standards switched on when in force (R53) | Type-2 rescue mode (R4); boarding/training trade-log plan |

### Why this cut for the MVP

- The MVP must beat the free Excel template on the three things it cannot do (02 file): totals from the ledger, warnings, and instant inspection view. Everything in the MVP column serves one of these.
- The chip CSV waits for v1 because its column list is unconfirmed and the MOE site blocks access from abroad (02 file test; my 403). The MVP still tracks every chip deadline.
- Excel and photo import wait for v1 because the MVP pilots can start with an opening balance (animals on hand today) and one past year typed in. Import must be ready before the spring 2027 sales push, when most new users arrive with old sheets.
- LINE waits for v1 because e-mail is enough for 10-20 pilots, and LINE setup for a foreign company is unverified.
- Boarding and training sites are out of scope for version 1 (02 file), so their trade log is "later".

## Key flows

### Flow 1: First setup (target: under 20 minutes for a breeder with 15 animals)

1. Sign up with e-mail (LINE Login in v1). Pick "breeder" or "shop".
2. Enter the registration certificate data: category, registration number, registration date, expiry, responsible person. A site with sale and exhibition adds two registrations (R1).
3. Enter the site address. The postal code fills the prefecture and municipality from the Japan Post code file ([Japan Post](https://www.post.japanpost.jp/zipcode/download.html)). The authority table picks the receiving authority, for example Kawagoe City rather than Saitama Prefecture (R5).
4. The app shows the duty checklist it switched on: ledger, breeding log, daily log, chip tasks, staff ratio, report.
5. Add staff and weekly hours. The staff ratio appears at once (R38).
6. Opening balance: add dogs and cats on hand (name, breed, sex, birth date, chip number if fitted, dam and sire if known), and other animals by breed and count. For each breeding dam, enter her litters so far, with proof photos if available (R32).
7. Optional: enter last year's monthly counts, so the death-rate comparison works in the first season (R22).

### Flow 2: Mating, birth and litter

1. Log a mating: dam, sire, date. The app checks the dam's age on the mating date and her lifetime litters. It blocks a 7th dog litter or mating from the 7th birthday unless the age-7 exception applies (R31). The 01 file explains that "6歳以下" means under 7 full years.
2. Log the birth: date, number born alive, stillborn count, dam's condition. A caesarean needs the vet's name, the birth certificate and the vet's certificate on the dam's fitness to breed (R34).
3. The app creates one ledger record per live puppy with dam and sire. Stillbirths stay in the breeding log only, because they are not counted in the report ([Aomori example](https://www.pref.aomori.lg.jp/soshiki/kenko/dobutu/files/20210108kisaireiteikihoukoku.pdf)).
4. Deadlines appear: no display or sale before 57 days of age (R28); chip fitting and registration before handover (R40); the dam's next eligibility.

### Flow 3: Buying in (shop, or breeder buying stock)

1. Scan or type the chip number. A reader in keyboard mode types it into the field (Datamars pocket readers offer USB "keyboard wedge" and Bluetooth, [Datamars datasheet](https://pet.datamars.com/wp-content/uploads/2025/03/DS001097-datasheet-animal-ID.pdf)). Full-width digits are normalised.
2. Enter the supplier (registration number for businesses), date, breed, birth date and breeder (R7). Attach the B2B document and the breeding-log copy received.
3. The 2-day observation timer starts (R29). The change-of-owner registration deadline starts: 30 days or before handover (R40).

### Flow 4: Sale to a consumer (target: under 5 minutes of app time)

1. Pick the animal. The app checks age, observation, chip registration and vet certificates. Any failure blocks the sale with a plain reason.
2. The 18-item explanation sheet is generated from the animal record and the breed library (adult size, lifespan, common diseases, and so on; R23). The breed library is our content, reviewed by a vet.
3. The staff member explains face to face at the site. The customer signs on screen, or signs the printout and the staff member photographs it. Whether MOE accepts an on-screen signature as "署名等" is unverified; the photo route is safe either way.
4. Enter the buyer's name and address, and how the buyer's legal status was checked where relevant. Record the staff member who sold (R8).
5. Mark the chip registration certificate and vet certificates as handed over. The animal leaves stock; the event lands in the right month of the report.

### Flow 5: Sale to a business (auction, shop)

Same as Flow 4, but the app makes the B2B document (items may be "explained as needed") and records the buyer's receipt (R24). In v1 it also prints the breeding-log copy for the litter (R33) and a "per-puppy record" sheet the auction can check. MOE asked auctions and shops in September 2024 to check birth dates ([MOE council paper](https://www.env.go.jp/council/content/i_10/000357242.pdf)).

### Flow 6: Death

Enter date and cause (both mandatory, R9). Attach a post-mortem certificate if any. The death-rate monitor updates. If deaths run high, the app warns early, because the prefecture can order post-mortems (Act 22-6; R22).

### Flow 7: Daily check (target: 30 seconds)

Once a day the home screen shows "today's check". Tick cleaning, disinfection, maintenance; answer "number abnormal?" and "condition abnormal?". A "yes" needs a remark (R36). Missed days show as gaps. They are not filled in silently. A late entry more than 7 days back needs a reason (R49).

### Flow 8: Annual report (April-May; target: under 15 minutes per registration)

1. From 1 April, the dashboard shows one report per registration, with the due date the authority publishes (30 May). In 2027, 30 May is a Sunday; show 31 May only as the legal fallback (my reading of 地方自治法 Art. 4-2(4); [Shugiin](https://www.shugiin.go.jp/internet/itdb_housei.nsf/html/houritsu/11319881213094.htm)), because authorities print "30 May" even on weekends ([Kumamoto](https://www.pref.kumamoto.jp/soshiki/30/167649.html)).
2. The app computes, per kind (dogs, cats, other mammals, birds, reptiles): opening stock; monthly new (purchases, live births, breeding parents brought in; no eggs); monthly out (sales, gifts, animals retired from rental, exhibition or breeding and handed on, moves to another own site); monthly deaths; closing stock (R14). It excludes animals flagged "own pet" ([Tokyo example](https://www.hokeniryo.metro.tokyo.lg.jp/documents/d/hokeniryo/teikihoukoku-kisairei2)). Opening stock must equal last year's closing stock ([Koriyama](https://www.city.koriyama.lg.jp/uploaded/attachment/80653.pdf)).
3. Reconcile: opening + new − sold − dead = closing. Any mismatch blocks "final" and lists the records causing it (R15).
4. Warnings: death rate up on last year (R22); a registration with zero animals still gets a zero report (R19).
5. The owner reviews and confirms. The app writes 様式第十一の二 as Excel and PDF, with the authority as addressee and era dates such as 令和9年5月10日 (R18, R51).
6. Channel helper: Tokyo shows the right LoGo link (23 wards and islands, or Tama) and "one Excel per category" ([Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html)); Kumamoto shows its LoGo link, which takes the form as a doc, docx, xls, xlsx, pdf or jpg file ([Kumamoto](https://www.pref.kumamoto.jp/soshiki/30/167649.html)); e-mail authorities get a draft e-mail with the file; post authorities get a print-ready PDF and the address (R21).
7. The user records the date, channel and any reference number, and uploads the receipt or sent e-mail. The filed copy is locked.

### Flow 9: Inspection visit

Tap "inspection mode" (立入検査モード). The phone shows the site's registration and sign data, staff ratio, ledger, breeding log, daily logs, certificates and the last report with proof of filing, in large type (R47). One tap makes a merged PDF the inspector can take. Okayama City asks, at the renewal inspection, for the cleaning and facility check log, the customer ledger and the breeding record, "in a form that can be viewed at once" (すぐ閲覧できる形) ([Okayama City](https://www.city.okayama.jp/kurashi/0000016268.html)). That is this screen's job.

### Flow 10: Leaving

On cancellation the owner downloads a full archive: PDFs, Excel files, CSV, attachments. A cheap "archive only" plan keeps records readable for 5 years from the last entry (R52).

## Screens

All screens are Japanese, phone first (one column, large tap targets, base font 16-18 px), and work on a tablet at the counter. Older users are likely, so there is no hidden swipe navigation and every action has a text label (my design choice).

1. **Home (ホーム):** today's tasks in date order (chip deadlines, observation ends, vet checks due, report status, renewal); today's daily check card; animals on hand by species; staff ratio badge (green, amber, red).
2. **Animals (動物一覧):** list with filters (on hand, sold, dead; species; breed; dam); search by name or last digits of the chip; "+" opens a bottom sheet: birth, purchase, sale, death, other.
3. **Animal detail (個体詳細):** header with photo, name, breed, sex, birth date and age in days, chip status; timeline of events with who and when; documents; for dams, a litter list and eligibility; an "edit history" link.
4. **Breeding board (繁殖管理):** one row per breeding female: age, litters so far, last litter, next allowed date, traffic light; tap to log a mating or birth.
5. **Sale wizard (販売):** step 1 checks; step 2 buyer; step 3 explanation sheet preview; step 4 signature or photo; step 5 confirm.
6. **Counterparties (取引先):** businesses (registration number, address) and consumers; previous trades.
7. **Daily check (日常点検):** a single card with toggles and remark; a month calendar showing gaps.
8. **Staff (従業員):** people, roles, hours, responsible person, training dates; the ratio calculation shown step by step.
9. **Chip tasks (マイクロチップ):** list by deadline; status per animal (fitted, registered, handed over); v1 "export CSV for MOE".
10. **Annual report (定期報告):** one card per registration; the computed monthly grid as on the form; reconcile panel; warnings; "download Excel/PDF"; channel helper; submission record.
11. **Inspection mode (立入検査モード):** read-only, large type, sections as tabs; "make PDF".
12. **Documents (書類):** all attachments by type (vet certificates, caesarean papers, signed sheets, B2B documents, filed reports).
13. **Settings (設定):** business, sites, registrations, authority, users and roles, billing, data export, privacy.
14. **Imports (取込み, v1):** upload Excel or photos; column mapping; review screen where every row is confirmed before saving.

## Data sources and integrations

| Source | What we use | Format and access | Licence / cost | Accepts uploads? | Notes |
|---|---|---|---|---|---|
| **MOE microchip database** (犬と猫のマイクロチップ情報登録, run by a designated body) | Bulk registration of chips (v1) | Web portal; "一括手続" with 4 CSV types: new registration of animals a business acquired, change of owner, change of details, and registration plus change of owner together; manual v2.7 (July 2026) with breed and coat-colour lists; separate steps for Excel 2019/365 and Excel 2016 ([search result for manual v2.7](https://reg.mc.env.go.jp/owner/file/%E4%B8%80%E6%8B%AC%E6%89%8B%E7%B6%9A%E7%94%A8CSV%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E4%BD%9C%E6%88%90%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB(%E4%BB%A4%E5%92%8C8%E5%B9%B47%E6%9C%88).pdf)) | Fee ¥400 per registration or change online, ¥1,400 on paper; no consumption tax; online payment by credit card or barcode payment; certificates are issued electronically and must go with the animal ([MOE chip page](https://www.env.go.jp/nature/dobutsu/aigo/pickup/chip.html)) | Yes, CSV upload by the user | Columns, encoding, row limits and log-in method unverified: the PDF returned HTTP 403 to me, and the MOE page says nothing about bulk procedures or business accounts (same source). No API found. Do not automate the portal (no RPA); export a file the user uploads. Version the format so a new manual needs data, not code. |
| **Chip number format** | Validation | 15 digits under ISO 11784/11785; Japanese chips start with country code 392 ([MOE pamphlet](https://www.env.go.jp/nature/dobutsu/aigo/2_data/pamph/chip/02.pdf)) | Free | — | Imported animals may carry other codes: warn, don't block. |
| **Annual report filing channels** | Channel helper | Tokyo: two LoGo forms ([23 wards and islands](https://logoform.jp/form/tmgform/1256120), [Tama](https://logoform.jp/form/tmgform/1469693)); "prepare Excel data per registration category" ([Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html)). Kumamoto LoGo takes the form as an uploaded doc, docx, xls, xlsx, pdf or jpg file, even a phone photo ([Kumamoto](https://www.pref.kumamoto.jp/soshiki/30/167649.html)). Chiba e-application; e-mail in Saitama, Sendai, Shiga, Hiroshima City; post and counter almost everywhere (01 and 02 files) | Free | Web forms that take a file upload (Kumamoto confirmed; Tokyo by my reading of "Excelデータをご準備ください") | The Tokyo LoGo page needs cookies and did not render for me, so its fields are unverified. No API anywhere. |
| **Prefecture templates** | Output layout; import mapping | Tokyo: 様式第11の2 (Excel), 都参考様式1-4 ledger (PDF and Excel), filled-in examples ([Tokyo](https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html)); national 参考様式第9, 10, 11 ([Saitama guide](https://www.pref.saitama.lg.jp/documents/281787/doutoriminasamahe260831.pdf)); filled-in report examples ([Aomori](https://www.pref.aomori.lg.jp/soshiki/kenko/dobutu/files/20210108kisaireiteikihoukoku.pdf); [Nagano](https://www.pref.nagano.lg.jp/shokusei/kurashi/aigo/aigo/toriatsukaigyo/documents/kisokuyousiki11-2kinyuurei.pdf)) | Public documents; we reproduce a national form, not their files | — | Use the Tokyo Excel as the golden output test (R18). |
| **Authority table** | Map site to the receiving authority, office, channels | 47 prefectures plus 20 designated cities ([MOE R7 2_1_2](https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_2.pdf)), plus core cities with delegated powers (e.g. Kawagoe, Kawaguchi, Koshigaya; [Saitama](https://www.pref.saitama.lg.jp/a0706/doubutu-touroku/teikihoukoku.html)) | Our own curated content | — | About 70-90 rows, kept by the founder with AI help; each row has a source URL and a "checked on" date. |
| **Postal codes** | Address to municipality | Japan Post KEN_ALL CSV ([Japan Post](https://www.post.japanpost.jp/zipcode/download.html)) | Free download | — | Monthly refresh job. |
| **National holidays** | Deadlines, reminders | Cabinet Office CSV ([syukujitsu.csv](https://www8.cao.go.jp/chosei/shukujitsu/syukujitsu.csv)) | Free | — | Plus year-end office closure (29 Dec-3 Jan) as a setting. |
| **Law texts** | Law-change watch | e-Gov law data, e.g. [the Act via API v1](https://laws.e-gov.go.jp/api/1/lawdata/348AC1000000105) | Free | — | Weekly job compares the Act, Rules and Standards and alerts the founder. The other-mammal standards are expected around spring 2027 (01 file). |
| **Public business registers** (v1) | Prefill business data | Some authorities publish Excel registers (Fukuoka, Kagoshima City; 02 file) | Public data; personal data inside, use only for the user's own record | — | Optional convenience; not a sales list (see privacy). |
| **LINE Messaging API** (v1) | Reminders | Push messages from a LINE Official Account; plans: free 200 messages a month, Light ¥5,000 for 5,000, Standard ¥15,000 for 30,000 plus pay-as-you-go ([ligla](https://ligla.jp/blog/line-official/cost/); [aurant](https://aurant-technologies.com/blog/line-official-pricing-plan-2026/)); reply messages are free ([LINE manual](https://www.lycbiz.com/jp/manual/OfficialAccountManager/account-settings)) | Paid by volume | — | Extra-message prices change on 1 Oct 2026 (unverified). Whether a foreign company can run a verified account is unverified. |
| **E-mail** | Reminders, receipts | Amazon SES in Tokyo (about US$0.10 per 1,000 e-mails, [AWS SES pricing](https://aws.amazon.com/ses/pricing/), unverified for 2026) | Pay per use | — | SPF, DKIM, DMARC on our domain. |
| **Claude API** (v1) | Read photographed paper ledgers and registration certificates | Images in, structured rows out; the user confirms every row | Claude Sonnet 5.5 at US$2 / US$10 per million input / output tokens; Haiku 5.5 at US$0.10 / US$0.50 ([Anthropic pricing](https://platform.claude.com/docs/en/about-claude/pricing)) | — | My estimate: about US$0.01-0.03 per ledger page. Personal data goes to a US processor: make it opt-in and disclose it (see privacy). |
| **Chip readers** | Faster chip entry | Keyboard-wedge USB or Bluetooth readers type the number ([Datamars datasheet](https://pet.datamars.com/wp-content/uploads/2025/03/DS001097-datasheet-animal-ID.pdf)) | User's own hardware | — | No integration needed. Japanese radio certification (技適) of specific readers unverified. |
| **Billing** | Subscriptions | Stripe or Paddle checkout and webhooks; choice and tax set-up are in the 04 and 05 files | Provider fees | — | Japanese receipts (領収書) as PDF, because sole traders need them for tax returns (my reading). |
| **Fonts** | Japanese PDFs | Noto Sans JP ([Google Fonts](https://fonts.google.com/noto/specimen/Noto+Sans+JP)) | SIL Open Font Licence | — | Embed subsets in PDFs. |

**What the portals leave undone (where software adds value).** Every channel above takes a finished number or file. None computes the numbers from the animals, checks them, reminds the user, keeps the 13-item ledger, or shows 5 years of records at an inspection. The chip portal handles one registration per animal unless the user builds a CSV in Excel by hand from a manual. Those gaps are the product.

## Data model

PostgreSQL. Every tenant row carries `business_id`. Times are stored in UTC and shown in Japan time. Personal data fields are marked (PD).

### Main entities

| Entity | Key fields | Notes |
|---|---|---|
| `Business` | name, legal form (individual or company), representative (PD), address, phone, plan | The tenant. |
| `Site` (事業所) | business, name, address, postal code, municipality code, authority | One business can have several sites. |
| `Registration` (登録) | site, category (sale, boarding, rental, training, exhibition, auction, 譲受飼養), number, registered on, expires on, dog/cat seller flag, breeds flag, responsible person | Drives the duty engine; one annual report per registration (R1). |
| `Authority` | code, name, office name for the addressee, channels (LoGo URL, e-mail, post address), holiday rule flag, source URL, checked on | Curated content with versions. |
| `Person` | business, name (PD), role, full-time flag, weekly hours, qualifications, training dates | Staff and responsible persons; ratio uses hours (R38). |
| `Animal` (個体) | business, site, default registration, species (dog, cat), name, breed code, sex, coat colour, birth date (or estimated + import date), breeder (PD or business), chip number, own-pet flag, dam, sire, status | Dogs and cats only. Status is derived from events. |
| `BreedLot` (品種等) | business, site, registration, kind (other mammal, bird, reptile), breed name | Quantity tracked by events with counts (R6). |
| `Event` | animal or breed lot, type (born, acquired, sold, handed over, rented out, returned, died, transferred between registrations), date, quantity, counterparty, staff, registration, reason codes, cause of death | The core. Reports are queries over events. |
| `Counterparty` (取引先) | type (business or consumer), name (PD), registration number or address (PD), how compliance was checked | Items 2, 5, 7, 8 of the ledger (R7-R8). |
| `Sale` | event, explanation sheet version, explained on, explained by, confirmation (signature image or photo), B2B receipt, certificates handed over | R23-R26. |
| `Mating` / `Litter` | dam, sire, mating date, expected and actual birth date, live count, stillborn count, dam condition, caesarean flag, vet, certificates | Lifetime count per dam is a stored, recomputable number (R30-R34). |
| `ChipRecord` | animal, chip number, fitted on, fitted by (vet), fitting certificate, registered on, registration certificate, owner change on, handed over on | R39-R42. |
| `HealthCheck` | animal, date, vet, fit to breed, certificate | Yearly due date (R35). |
| `DailyCheck` | site, date, time, cleaning, disinfection, maintenance, number abnormal, condition abnormal, checker, remark | R36. |
| `Document` | owner object, type, file key, hash, uploaded by, uploaded at | Encrypted object storage. |
| `Report` | registration, period start and end, computed grid (JSON), status (draft, final, filed), snapshot hash, filed on, channel, reference, filed file | A final report is a frozen snapshot; later edits to past events show "report differs from ledger" instead of changing the filed copy. |
| `ChipExport` (v1) | format version, rows, file, created at | Keeps what was sent. |
| `Task` | type, due date, object, status | Generated by rules; drives reminders. |
| `RuleSet` | code, effective from, effective to, parameters | E.g. litter limits, sale age, other-mammal standards (R53). |
| `ContentItem` | type (explanation-sheet text, breed library entry, help text, disclaimer), version, reviewed by, reviewed on | Edited in the admin by the founder; reviewed by the expert or vet. |
| `AuditLog` | who, when, what, before, after, IP, reason | Append-only; hash-chained. |

### Key rules in the model

- **No hard delete inside 5 years.** Corrections write a new version with the old value kept (R10). Deleting an event writes a reversal event.
- **Birth dates are sensitive.** The 2023 sweep found 50 cases of breaking the 8-week ban, for example by changing birth dates ([MOE council paper](https://www.env.go.jp/council/content/i_10/000357242.pdf)). Changing a birth date after a sale or after the 56-day point needs a reason and shows on the timeline and in the inspection pack. The product must not make evasion easy.
- **Report counts** come only from events. "New" = bought + live births + breeding parents brought in (eggs excluded). "Out" = sold + given + retired from rental, exhibition or breeding and handed on + moved to another site of the same business. "Dead" = died. Own pets and stillbirths are excluded ([Tokyo example](https://www.hokeniryo.metro.tokyo.lg.jp/documents/d/hokeniryo/teikihoukoku-kisairei2); [Aomori example](https://www.pref.aomori.lg.jp/soshiki/kenko/dobutu/files/20210108kisaireiteikihoukoku.pdf)). Moves between two registrations at the same site need a rule the domain expert confirms (unverified). A rented-out animal that comes back is probably "new" again (unverified).
- **Period** 1 April to 31 March; a new registration starts on its registration date (R16).

### Simplified relations

```
Business 1-n Site 1-n Registration n-1 Authority
Site 1-n Animal (dogs, cats) 1-n Event n-1 Counterparty
Site 1-n BreedLot (others)  1-n Event
Animal (dam) 1-n Mating 1-1 Litter 1-n Animal (puppies)
Animal 1-1 ChipRecord ; Animal 1-n HealthCheck ; Event(sale) 1-1 Sale
Site 1-n DailyCheck ; Business 1-n Person ; Registration 1-n Report
```

## Architecture and stack

### Recommendation: one boring monolith, built for AI agents

- **Language and framework:** Python with Django 5.2 LTS ([Django downloads](https://www.djangoproject.com/download/)). Reasons: the built-in admin is the content tool for the authority table, breed library and explanation texts; mature auth, forms and Japanese i18n; strong libraries for this job (openpyxl to fill the official Excel; WeasyPrint for PDFs). AI coding agents produce reliable Django code because the framework is conventional (my judgement).
- **Front end:** server-rendered HTML with HTMX and a little Alpine.js; Tailwind for styles. No SPA. The app is forms, lists and documents. A small service worker in v1 caches the read-only inspection view for weak signal in rural kennels.
- **Database:** PostgreSQL 16 or 17 (managed). Row-level security as a second wall for tenant isolation. JSONB for the report snapshot and rule parameters.
- **Background jobs:** a Postgres-backed queue (Procrastinate or Django-Q2), so no Redis at first. Jobs: task generation nightly; reminders at 07:00 Japan time; digest weekly; postal code and holiday refresh monthly; law-text watch weekly; PDF and Excel rendering on demand.
- **Documents:** openpyxl writes into a copy of the official 様式第十一の二 Excel layout; WeasyPrint renders PDFs from HTML templates with Noto Sans JP; pypdf merges the inspection pack. Era dates (令和) come from a small tested function, because the national holiday and era tables are stable data (my choice).
- **Rules engine:** plain Python functions with effective dates and parameters from `RuleSet`. Every rule has golden tests with fixed dates ("time-travel" tests). This is where AI-written bugs would hurt most, so the tests are written from the 01 file's R-numbers before the code.
- **Files:** S3-compatible storage in Tokyo, server-side encryption, plus per-business keys for signatures and certificates (envelope encryption). Copies to the Osaka region for disaster recovery.
- **Japanese text handling:** NFKC normalisation for chip numbers and phone numbers (full-width digits); kana fields for names where users want sorting; Excel import reads .xlsx, .xls and CSV in UTF-8 or Shift_JIS (CP932).
- **Notifications:** e-mail (SES) in the MVP; LINE Messaging API in v1.
- **AI features (v1):** Claude API for photo import. The model returns structured rows; nothing is saved until the user confirms each row.
- **Deploy:** Docker Compose on AWS Lightsail in Tokyo behind Caddy (automatic TLS) at first; managed PostgreSQL. CI runs unit, rule, golden-file, tenant-isolation and end-to-end (Playwright) tests on every merge.
- **Observability:** structured logs with no personal data; Sentry (or self-hosted GlitchTip) for errors; uptime check; a simple status page.

### Diagram

```
Phone/tablet browser (HTMX, PWA cache in v1)
        |
     Caddy (TLS)  ->  Django web (Lightsail Tokyo)  ->  PostgreSQL (managed, RLS, PITR)
                          |        ^                         ^
                          v        |                         |
                     Job workers (Postgres queue) -----------+
                       |        |           |            |
              SES e-mail   LINE API (v1)  Claude API (v1)  Object storage (Tokyo, encrypted)
                                                            + copy in Osaka
   Outputs: 様式第十一の二 Excel/PDF, ledger PDF/Excel, inspection pack PDF, MOE chip CSV (v1)
   (the user files them; no automated submission to any portal)
```

### Why not something else

- **A native app:** two app stores, review delays and a second codebase. A web app on the phone's home screen does the job; offline needs are read-only (my judgement).
- **No-code (kintone and similar):** the market file shows kintone builds exist for pet shops ([Aurant](https://aurant-technologies.com/blog/kintone-pet-shop-management/)), but per-user licences and limited rule logic make it a poor base for ¥1,480-a-month customers (02 file price).
- **Microservices:** one founder cannot run them. Keep one deployable app.

## Security, privacy and liability

### Japan's privacy law (APPI) and our role

- **Who is the controller.** Every registered breeder or shop that keeps buyers' names and addresses is a personal-information handling business under APPI ([e-Gov APPI](https://laws.e-gov.go.jp/law/415AC0000000057)). The size threshold was removed in 2017, so even a home breeder is covered (my reading). We process the data for them: under APPI that is entrustment (委託). The PPC's "cloud exception" applies only where the provider does not handle the data ([PPC FAQ 1-Q10-25 via search](https://www.ppc.go.jp/all_faq_index/faq1-q10-25)). We compute reports and make documents from it, so we handle it (my reading).
- **The foreign-vendor issue (Art. 28).** A company abroad that receives the data is a "third party in a foreign country". The customer then needs one of: the buyers' consent; a recipient in a country the PPC designates as equivalent; or a recipient that keeps an equivalent system set up by contract, plus information on request ([PPC offshore guideline](https://www.ppc.go.jp/personalinfo/legal/guidelines_offshore); [Business Lawyers summary](https://www.businesslawyers.jp/practices/1439)). Consent from every puppy buyer is not practical.
  - **EU/EEA or UK company:** the PPC designated the EU and the UK as equivalent; the mutual framework with the EU took effect on 23 January 2019 ([PPC](https://www.ppc.go.jp/enforcement/cooperation/cooperation/sougoninshou/)). Then Art. 28 consent is not needed. The customer still must supervise us as a contractor.
  - **Other countries:** sign APPI-standard data-handling terms (purpose limits, security measures, sub-processor list, audit, breach notice), and publish a page on the country's privacy system for the customers' own disclosures (my reading of the guideline).
  - **Where servers are does not decide this.** It is the recipient company's location that matters, although the customer must also know which country stores the data (外的環境の把握) ([Business Lawyers](https://www.businesslawyers.jp/practices/1442)). Hosting in Tokyo still helps trust ("国内サーバー").
- **We are also directly subject to APPI.** A foreign business handling data of people in Japan in connection with services to Japan falls under the law's extraterritorial clause (APPI Art. 171, my reading of [e-Gov APPI](https://laws.e-gov.go.jp/law/415AC0000000057)).
- **Breach reporting.** Report qualifying leaks to the PPC: a quick report in about 3-5 days ([atsoho](https://atsoho.com/blog/data-breach-report-duty-sole-proprietor)) and a full report within 30 days, or 60 days where it may be malicious ([MIC guideline PDF](https://www.soumu.go.jp/main_content/000937727.pdf)). As a contractor we must tell the customer at once; the terms say how.
- **Sub-processors:** AWS (Tokyo, Osaka), e-mail provider, LINE (v1), Anthropic (v1, US) for photo import, error tracking. Photo import sends images with buyers' names to a US processor; make it opt-in per upload, explain it, and keep no copy at the vendor where the vendor offers that (unverified for our account type).
- **Data we do not need:** no ID cards, no bank details. Buyer phone numbers are optional. Signature images are encrypted separately.
- **Public registers are not a mailing list.** Using published register data to market to individuals raises purpose and acquisition questions (02 file flagged this). Keep register look-ups as a user's own prefill only (my judgement).

### Security baseline (MVP)

- TLS everywhere; HSTS; secure cookies.
- Passwords hashed with Argon2; login rate limits; optional TOTP two-factor for owners (older users may resist it, so offer e-mail one-time codes too).
- Roles plus PostgreSQL row-level security; automated tests that try cross-tenant reads.
- Encryption at rest (provider disks and database); envelope encryption for signatures and certificates.
- Append-only, hash-chained audit log; edit history shown on each record.
- Backups: daily snapshots plus point-in-time recovery (7-14 days); copies in Osaka; a monthly restore test.
- Support access only with the customer's time-limited consent; logged and shown to the customer.
- Weekly dependency updates; secret scanning in CI; a written threat model.
- External web application security test before paid launch, and after big changes.
- Agents never see real customer data: they work on a synthetic breeder data set only.

### Liability and disclaimers

- **The user is the filer.** The app computes and formats; the owner reviews and confirms the report; the app never files on the user's behalf. A false report carries a 過料 of up to ¥200,000 (Act 49; 01 file), so the reconcile block and the confirmation step are both product and protection.
- **Scrivener law (行政書士法) check.** From 1 January 2026, Art. 19(1) bars anyone who is not a 行政書士 from preparing, at another's request and for pay "under any name", documents to be filed with public offices; penalties now reach the company too ([JEMCA notice](https://www.jemca.or.jp/wp-content/uploads/2026/01/gyoiseisyoshihoukaisei.pdf)). A ministry answer says membership fees can count as pay, and "free form, paid extras" can still be pay for the form ([MLIT answer](https://www1.mlit.go.jp/jidosha/content/001747440.pdf)). The ledger and logs are not filed with any office, so they are outside this. The annual report is filed. A self-service tool where the user enters the data and generates his own report is probably his own preparation (my reading, unverified). So:
  - do not sell a "we fill in your report for you" service, or a separate paid "report pack", without a written opinion;
  - keep the report inside the subscription as a by-product of the ledger;
  - if customers want done-for-you help, refer them to a partner 行政書士.
  Get a written opinion from a lawyer or a 行政書士 in week 1. Whether the MOE chip registration body counts as a "public office" for this law is also unverified.
- **Terms of use (利用規約):** the product is a record tool, not legal advice; each rule shows "checked by [expert] on [date]"; liability capped at fees paid in the last 12 months; no liability where the user ignored warnings. Standard-form terms bind if agreed, but unfair clauses can be struck out under the Civil Code's standard terms rules (Art. 548-2) ([e-Gov Civil Code](https://laws.e-gov.go.jp/law/129AC0000000089)). Registered businesses are not "consumers" under the Consumer Contract Act (Art. 2) ([e-Gov](https://laws.e-gov.go.jp/law/412AC0000000061)), but a court may still read caps narrowly (my reading).
- **Change duty:** we commit to update rules within 30 days of a law or ordinance change and to tell users. This is also the renewal story (the other-mammal standards are expected around spring 2027, per the 01 file).
- **Reputation:** keep evasion-resistant design (birth-date history, late-entry reasons). Do not offer features that hide deaths or make records "inspection-friendly" by editing history.

## Hosting and running costs

### Choice: AWS Lightsail in Tokyo, backups in Osaka

- Lightsail bundles are simple and cheap. Linux instances cost US$5-44 a month for 0.5-8 GB of memory. Managed databases cost US$15-115 a month (standard) or US$30-230 (high availability) for 1-8 GB. Object storage costs US$1-5 a month for 5-250 GB. In Tokyo, object storage overage is US$0.025 per GB ([AWS Lightsail pricing](https://aws.amazon.com/lightsail/pricing/)).
- Tokyo gives low latency and a "国内サーバー" message. Nothing in the animal law requires data in Japan (01 file; my reading).
- Alternatives: a Japanese cloud (Sakura) or a European provider. Not priced here.

### Load assumptions (my estimates)

- A breeder customer has 15-60 animals on hand and 50-150 events a year. A shop has more.
- Attachments: about 200-400 photos a year per customer at about 300 KB, so about 60-120 MB a year per customer.
- Reminders: about 5-15 pushed messages a month per customer if LINE is on.
- Photo import: mostly at onboarding, 10-40 pages per new customer.

### Monthly running cost (my estimates, US$, excluding VAT/consumption tax and payment fees)

| Item | 50 customers | 300 customers | 1,000 customers |
|---|---|---|---|
| App server (Lightsail Tokyo) | 1 × 2-4 GB: 12-24 | 1 × 4-8 GB: 24-44 | 2 × 8 GB + load balancer: about 106 |
| PostgreSQL (managed) | 1-2 GB standard: 15-30 | 4 GB standard or 2 GB HA: 60 | 4-8 GB HA: 120-230 |
| Worker for jobs and PDFs | same box: 0 | 1 × 2 GB: 12 | 1 × 4 GB: 24 |
| Object storage + Osaka copy | 1-3 | 3-5 | 5-10 |
| E-mail (SES) | about 1 | about 2 | about 5 |
| LINE Official Account (v1) | free plan (200 messages) or Light ¥5,000: 0-33 | Light ¥5,000: about 33 | Standard ¥15,000: about 100 |
| Error tracking, uptime | free tiers: 0 | about 26 | 26-80 |
| Claude API (photo import) | 1-5 | 5-20 | 15-50 |
| Domain and misc. | 2 | 2 | 5 |
| **Total** | **about 32-65** | **about 165-265** | **about 400-610** |
| Per customer per month | about 0.65-1.30 | about 0.55-0.88 | about 0.40-0.61 |

Revenue check: at ¥14,800 a year (about US$8.2 a month; 02 file price) infrastructure is about 8-16% of revenue at 50 customers, 7-11% at 300 and 5-7% at 1,000 (my arithmetic). Error-tracking prices (Sentry Team about US$26 a month) are unverified for 2026. LINE plan prices are from third-party summaries, and extra-message prices change on 1 October 2026 ([aurant](https://aurant-technologies.com/blog/line-official-pricing-plan-2026/)).

## Development plan

### Basis

- The founder builds with Claude Code and several agents working in parallel, each in its own git worktree and branch. The founder writes the specs, reviews every merge and owns integration. No hired developers.
- Tools: Claude Max at US$100 a month (5x Pro usage) or US$200 (20x) ([Claude pricing](https://claude.com/pricing); 20x price as cited in the other deep dives, unverified here), plus API credits if parallel agents exceed plan limits.
- **Japanese is the bottleneck, not code.** Every screen, form, PDF, e-mail and help text is Japanese, and buyers are older rural people. Plan a native Japanese reviewer for UI copy, and an interpreter for interviews if the founder does not speak Japanese (unverified whether he does).
- **Spec first.** Parallel agents are safe only if interfaces are frozen. Week 1 produces the data model, the event model, the rule interface, the report fixtures and a synthetic breeder before feature work starts.
- Start date: **Monday 12 October 2026.**

### Agent work streams (parallel from week 2)

| Stream | Scope | Inputs frozen in week 1 | Done when |
|---|---|---|---|
| **A. Platform** | Auth, roles, tenancy, RLS, audit log and history, settings, billing webhooks, data export | Data model; role matrix | Cross-tenant tests pass; no hard delete possible; export works |
| **B. Ledger core** | Animals, breed lots, events, counterparties, attachments, opening balance, correction model, status derivation | Event model; 13-item field map (R7) | All R6-R13 tests pass (R13 import is v1) |
| **C. Rules engine** | Duty engine (R2-R3); breeding limits (R31); sale age (R28); observation (R29); chip deadlines (R40); vet check (R35); staff ratio with the mixed table (R38); death-rate (R22); report period and holiday rule | Rule interface; R-number test list; holiday data | Every rule has passing and failing fixtures with fixed dates; 100% rule coverage |
| **D. Documents and outputs** | 様式第十一の二 Excel and PDF; ledger, breeding log, daily log exports; explanation sheet and B2B document; inspection pack; era dates; fonts | Golden files from the Tokyo template and the Aomori/Nagano filled-in examples | Cell-by-cell match with the golden Excel; PDFs pass visual review by the Japanese reviewer |
| **E. Mobile UI** | Home, animals, detail, bottom-sheet events, sale wizard with signature capture, breeding board, daily check, report wizard, inspection mode; Japanese copy catalogue | Screen list above; copy catalogue keys | Playwright flows 1-9 pass on a phone viewport |
| **F. Tasks and reminders** | Task generation, e-mail reminders, dashboard ordering; LINE in v1 | Task types; message templates | Time-travel test fires every reminder type on the right day |
| **G. QA and security** (throughout) | Synthetic breeder generator (20 dams over 3 years, sales, deaths, an auction purchase), end-to-end tests, threat model, dependency scan, backup-restore script | All of the above | Nightly "full year" run green; restore drill documented |
| **H. Content** (founder + AI, reviewed by experts) | Authority table (about 70-90 rows), channel table, breed library (top 40 dog and 20 cat breeds) for the explanation sheet, help texts, disclaimers | Content schemas | Every row has a source and a "checked on" date; breed texts vet-reviewed |

Run 4-6 streams at once. More creates more review than one founder can do well (my judgement).

### How the founder runs the agents

- One repository with a CLAUDE.md that fixes conventions: module layout, naming, all Japanese strings in one catalogue, "no personal data in logs", test commands, "never edit golden files".
- Each stream gets a short spec file: goal, interfaces it may use, files it owns, acceptance tests. Specs cite the R-numbers.
- Tests first for the rules engine and the report. Golden files are the referee. Only the founder changes them, after the domain expert agrees.
- A separate review agent checks each pull request against the spec and the security checklist before the founder's own review.
- Merge daily. Run the full-year end-to-end test nightly on synthetic data.
- Real pilot data never enters agent sessions.

### Calendar (start Monday 12 October 2026)

| Week (start) | Product, legal, pilots | Engineering (agent streams) | Checkpoint |
|---|---|---|---|
| 1 (12 Oct) | Hire the domain expert (a 行政書士 who handles animal-business registrations, or a former health-centre inspector); book 10 breeder interviews (auction and marketplace contacts, 02 file); ask the lawyer for the scrivener-law and APPI opinions; get the Tokyo, Aomori and Nagano report files and a pilot's copy of the MOE chip CSV manual | Repo, CI, hosting; Django skeleton; data model; event model; rule interface; synthetic breeder; golden report fixtures | **Spec freeze** (16 Oct) |
| 2 (19 Oct) | Interviews 1-5; expert answers the open counting questions (registration split, transfers, births); authority table v0 | Streams A-F in parallel; G continuous | Daily merges; CI green |
| 3 (26 Oct) | Interviews 6-10; collect 3-5 real ledgers (Excel or paper) from willing pilots; landing page with waitlist | Streams continue; first end-to-end run (setup to annual report) on synthetic data | |
| 4 (2 Nov) | Expert reviews rules and generated report against real past filings; vet starts breed-library review | Integration week; bug bash; Japanese copy pass 1 | **MVP feature-complete (about 6 Nov)** |
| 5 (9 Nov) | **Dry-run pilots:** 3-5 breeders re-create FY2025 (April 2025 - March 2026) in the app and compare with what they filed in May 2026 | Fixes from pilots; performance with a 100-animal site | Report matches the filed report, or every difference is explained |
| 6 (16 Nov) | Lawyer drafts 利用規約, privacy policy, data-handling terms, 特商法 notice (scope per 04 file); Japanese copy pass 2 | Hardening: encryption, audit chain, backup-restore drill; billing in JPY | **LC1:** rules and outputs signed off by the expert |
| 7 (23 Nov) | External security test (3-4 days) | Fix findings; accessibility pass (large text, contrast) | |
| 8 (30 Nov) | Lawyer signs off documents; pricing page; 3 short how-to videos in Japanese | Re-test of fixes; monitoring dashboards | **LC2:** legal documents approved; no open high or critical findings |
| 9 (7 Dec) | **Paid launch** to pilots and waitlist; pilots convert at a founder discount | Support; small fixes | **Sellable** |
| 10-12 (14 Dec - 3 Jan) | Year-end holidays in Japan from about 29 Dec; light support | v1 start: Excel import, LINE, chip CSV (once the manual is in hand) | |
| Jan 2027 | Pilots use the app daily; collect feedback on daily-log burden | v1: photo import, free report calculator page, renewal and training reminders, display card | |
| Feb 2027 | SEO pages for 定期報告 書き方 and 様式第11の2; partner talks with an auction house and a marketplace (02 file) | v1 release (end Feb); other-mammal rule toggles if the ordinance is promulgated | **v1 live before 1 March** |
| Mar 2027 | Sales push; prepare report-season support | Load test for April | |
| 1 Apr - 31 May 2027 | **Report season.** Daily support; measure how many reports are made and filed through the app | Hot fixes only | Count filed reports and errors |

### Definition of done for the MVP

1. For at least 3 pilot breeders, the app's FY2025 report matches what they filed in May 2026, or every difference is explained and the expert agrees the app is right.
2. A breeder with 15 animals completes setup (Flow 1) in under 20 minutes without help, in at least 4 of 5 tries.
3. A consumer sale (Flow 4) takes under 5 minutes of app time and produces the 18-item sheet and a stored confirmation.
4. All rules tied to R28-R31, R35, R36, R38 and R40 have passing and failing tests; the breeding-limit test cases in R31 pass.
5. The 様式第十一の二 Excel matches the Tokyo template cell by cell; PDFs print correctly on A4 with era dates.
6. The inspection pack for a breeder site contains all 12 parts listed in R47 and opens offline as a PDF.
7. Reminders fire on the right day in a time-travel test, including the 31 May 2027 holiday shift.
8. Tenant-isolation tests pass; no hard delete is possible; backup restored in a drill; the external test has no open high or critical findings.
9. 利用規約, privacy policy and data-handling terms approved by a Japanese lawyer; the scrivener-law opinion received; rules and outputs signed off by the domain expert; breed texts reviewed by a vet.
10. At least 5 of the pilots say they will pay the planned price (02 file: ¥1,480 a month or ¥14,800 a year).

### If time slips

- Drop signature capture to v1 and keep "photo of the signed paper". The MVP still meets R23.
- Drop the staff-briefing and training records (already v1).
- Never drop: no-hard-delete history, tenant isolation, the reconcile block, the expert sign-off, the security test.
- If the paid launch slips past mid-January 2027, still ship v1 import and the report wizard before 1 April. The spring window is the one date that matters.

## Budget

### Cash costs to a sellable product (founder unpaid; my estimates)

| Item | Low (US$) | High (US$) | Basis |
|---|---|---|---|
| Claude Max for 2-3 months | 200 | 600 | US$100-200 a month ([Claude pricing](https://claude.com/pricing)) |
| Extra API use (agent spill-over, photo-import tests) | 50 | 300 | my estimate |
| Hosting, domain, e-mail, monitoring during build and pilot | 100 | 250 | table above |
| Domain expert (行政書士 or former inspector), 20-30 hours | 1,070 | 2,400 | ¥8,000-12,000 an hour assumed (unverified; no published rate found) |
| Vet review of breed library and explanation texts | 330 | 1,000 | ¥50,000-150,000 (unverified) |
| Lawyer: 利用規約 and privacy policy, data-handling terms, scrivener-law opinion | 200 | 2,330 | Terms plus privacy policy ¥200,000-350,000 from one Yokohama firm; review-only ¥30,000-100,000 ([tangram](https://tangram.gr.jp/blog/detail/20260616114948/)); another firm lists ¥275,000 for terms ([Kakui](https://www.kakuilaw.jp/legalfees.html)) |
| Japanese language help (interview interpreter, UI copy review), 30-60 hours | 600 | 2,000 | ¥3,000-5,000 an hour (unverified) |
| External security test, small scope, with re-test | 2,000 | 4,670 | Small sites with 10-20 screens: ¥200,000-1,000,000 for a manual test ([IT-trend](https://it-trend.jp/security_assessment_service/article/61-7052)); I assume ¥300,000-700,000 |
| Pilot incentives and interview thank-you gifts | 300 | 500 | my estimate |
| Contingency (15%) | 730 | 2,110 | |
| **Total to sellable** | **about 5,580** | **about 16,160** | **likely about US$9,000-12,000 (¥1.35-1.8 million)** |

Company formation, payment set-up and marketing are not included; they are in the 04 and 05 files. The low case assumes the founder speaks some Japanese and uses review-only legal help.

### First-year running cash after launch (my estimates)

| Item | US$ per year |
|---|---|
| Hosting and services at 50-300 customers | 600-3,000 |
| Claude Max for ongoing development | 1,200-2,400 |
| Claude API for photo import | 50-300 |
| LINE Official Account | 0-400 |
| Domain expert: other-mammal standards, report-season check (10-20 hours) | 670-1,600 |
| Legal updates | 330-1,000 |
| Security re-test after v1 | 2,000-4,670 |
| **Total (excluding payment fees and support staff)** | **about 4,850-13,370** |

Japanese-language customer support during April-May is the hidden cost. It belongs in the 04 file's plan; a part-time native speaker for 2 months would add roughly US$1,500-3,000 (unverified).

## Risks

| Risk | Why it matters | Mitigation |
|---|---|---|
| Scrivener law (行政書士法 Art. 19) | Since 1 Jan 2026 any paid preparation of documents for public offices by non-scriveners is banned "under any name" ([JEMCA](https://www.jemca.or.jp/wp-content/uploads/2026/01/gyoiseisyoshihoukaisei.pdf)) | Self-service only; report included in the subscription; no done-for-you service; written opinion in week 1; partner 行政書士 for help |
| Chip CSV format unknown and portal blocks foreign access | The v1 export may be wrong or late | Get the manual and input format from a pilot; data-driven format; test with one pilot's real upload; keep the deadline tracker as the fallback |
| Counting conventions | Wrong totals mean a false report | Expert sign-off on births, transfers and multi-registration sites; dry-run against filed FY2025 reports; reconcile block |
| Daily logging feels heavier than paper | Churn after the first season | 30-second daily check; bulk litter actions; photo import; measure time per task in pilots |
| Older, offline users | Low adoption | Large text; LINE reminders; printed quick guide; offline inspection PDF; phone support in season |
| AI-written rule bugs | Silent wrong warnings or blocks | Tests written from R-numbers before code; golden files owned by the founder; expert review |
| Japanese quality | Looks foreign, loses trust | Native reviewer for every screen and document; Japanese support address |
| Privacy cross-border | Customers' legal duty under Art. 28 | EU/UK company if possible; data-handling terms; country information page; opt-in for US AI processing |
| Hidden platform competitor (marketplace, auction) | They hold breeder data and could add a ledger (02 file) | Ship first; offer them a free per-puppy export; partnership |
| Law and form changes | Other-mammal standards around spring 2027; a possible Act amendment (01 file) | Rules with effective dates; weekly law-text watch; 30-day update promise |
| LINE pricing or policy | Extra-message prices change on 1 Oct 2026 | E-mail fallback; cap pushes per customer; digest instead of many alerts |
| Reputation | Pet-sale industry is criticised (B2 report) | Evasion-resistant design; position as welfare compliance |
| Founder far from customers | Inspections, interviews, support happen in Japan | Japanese-speaking helper; pilots by video call; expert as local contact |

## Open questions

1. Does the founder read and speak Japanese? If not, budget the language line at the high end and add a part-time native support person before April 2027.
2. Where is the founder's company? EU/EEA or UK makes the APPI cross-border rule simple ([PPC](https://www.ppc.go.jp/enforcement/cooperation/cooperation/sougoninshou/)).
3. Scrivener law: is a self-service report generator inside a paid subscription "preparation for others for pay"? Is the chip registration body a "public office"? (Lawyer or 行政書士 opinion.)
4. How should a site with both sale and exhibition registrations split animals between the two reports? How are moves between the business's own registrations counted?
5. Exact columns, encoding, row limits and log-in method for the MOE bulk CSV, and whether a business account is needed.
6. Does MOE or any prefecture accept an on-screen signature as the customer's confirmation (署名等) for the face-to-face explanation?
7. What fields does each LoGo form ask for: an Excel upload, typed numbers, or both? (The form did not render for me.)
8. Do authorities apply the holiday rule to 30 May, or do they publish 30 May as fixed? (Affects reminders in 2027.)
9. Can a foreign company open and verify a LINE Official Account and use the Messaging API?
10. Will a vet agree to review the breed library, and at what fee? Is there a licensable source for adult sizes and common diseases?
11. Are there Japanese-certified (技適) Bluetooth chip readers that work in keyboard mode with phones?
12. How many pilots will share their filed FY2025 reports for the dry run?

## Sources

Law, regulators and official forms:
- https://laws.e-gov.go.jp/law/348AC1000000105
- https://laws.e-gov.go.jp/api/1/lawdata/348AC1000000105
- https://laws.e-gov.go.jp/law/415AC0000000057
- https://laws.e-gov.go.jp/law/129AC0000000089
- https://laws.e-gov.go.jp/law/412AC0000000061
- https://www.shugiin.go.jp/internet/itdb_housei.nsf/html/houritsu/11319881213094.htm
- https://www.hokeniryo.metro.tokyo.lg.jp/douso/dt_gyou/doubutuhanbaigyoushatou.html
- https://www.hokeniryo.metro.tokyo.lg.jp/documents/d/hokeniryo/2026-08-07-141323-808
- https://logoform.jp/form/tmgform/1256120
- https://logoform.jp/form/tmgform/1469693
- https://www.pref.saitama.lg.jp/documents/281787/doutoriminasamahe260831.pdf
- https://www.pref.saitama.lg.jp/a0706/doubutu-touroku/teikihoukoku.html
- https://www.pref.aomori.lg.jp/soshiki/kenko/dobutu/files/20210108kisaireiteikihoukoku.pdf
- https://www.pref.nagano.lg.jp/shokusei/kurashi/aigo/aigo/toriatsukaigyo/documents/kisokuyousiki11-2kinyuurei.pdf
- https://www.city.koriyama.lg.jp/uploaded/attachment/80653.pdf
- https://www.city.okayama.jp/kurashi/0000016268.html
- https://www.pref.fukuoka.lg.jp/contents/animalhandlingbusiness-type1-inspection.html
- https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_2.pdf
- https://www.env.go.jp/nature/dobutsu/aigo/2_data/statistics/files/r07/2_1_3.pdf
- https://www.env.go.jp/council/content/i_10/000357242.pdf
- https://www.env.go.jp/nature/dobutsu/aigo/pickup/chip.html
- https://www.env.go.jp/nature/dobutsu/aigo/2_data/pamph/r0403b/01.pdf
- https://www.env.go.jp/nature/dobutsu/aigo/2_data/pamph/chip/02.pdf
- https://reg.mc.env.go.jp/owner/file/%E4%B8%80%E6%8B%AC%E6%89%8B%E7%B6%9A%E7%94%A8CSV%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E4%BD%9C%E6%88%90%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB(%E4%BB%A4%E5%92%8C8%E5%B9%B47%E6%9C%88).pdf (HTTP 403 from abroad; content via search summary)
- https://www.post.japanpost.jp/zipcode/download.html
- https://www8.cao.go.jp/chosei/shukujitsu/syukujitsu.csv

Privacy (PPC and guides):
- https://www.ppc.go.jp/enforcement/cooperation/cooperation/sougoninshou/
- https://www.ppc.go.jp/personalinfo/legal/guidelines_offshore
- https://www.ppc.go.jp/all_faq_index/faq1-q10-25
- https://www.businesslawyers.jp/practices/1439
- https://www.businesslawyers.jp/practices/1442
- https://www.soumu.go.jp/main_content/000937727.pdf
- https://atsoho.com/blog/data-breach-report-duty-sole-proprietor

Scrivener law:
- https://www.jemca.or.jp/wp-content/uploads/2026/01/gyoiseisyoshihoukaisei.pdf
- https://www1.mlit.go.jp/jidosha/content/001747440.pdf

Vendors, prices and tools:
- https://aws.amazon.com/lightsail/pricing/
- https://aws.amazon.com/ses/pricing/
- https://claude.com/pricing
- https://platform.claude.com/docs/en/about-claude/pricing
- https://ligla.jp/blog/line-official/cost/
- https://aurant-technologies.com/blog/line-official-pricing-plan-2026/
- https://www.lycbiz.com/jp/manual/OfficialAccountManager/account-settings
- https://www.watch.impress.co.jp/docs/news/2081911.html
- https://webtan.impress.co.jp/n/2023/09/01/45535
- https://pet.datamars.com/wp-content/uploads/2025/03/DS001097-datasheet-animal-ID.pdf
- https://fonts.google.com/noto/specimen/Noto+Sans+JP
- https://www.djangoproject.com/download/
- https://it-trend.jp/security_assessment_service/article/61-7052
- https://tangram.gr.jp/blog/detail/20260616114948/
- https://www.kakuilaw.jp/legalfees.html
- https://aurant-technologies.com/blog/kintone-pet-shop-management/

Earlier files in this deep dive: [01 law and requirements](01-law-and-requirements.md); [02 market and competition](02-market-and-competition.md); [B2 report](../reports/japan-b2.md).
