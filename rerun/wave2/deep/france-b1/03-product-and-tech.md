# France B1: conciergerie compliance console (NER tracker + API Meublés reporting): product and technical design

Part 3 of the France B1 deep dive: product, technical design and development plan. Written 10 Oct 2026. Builds on the [B1 report](../reports/france-b1.md) and on [01-law-and-requirements.md](01-law-and-requirements.md), whose 52 numbered requirements (R1-R52) are the spec this design implements. "My estimate" marks numbers I derived; "(unverified)" marks facts I could not confirm.

Status: complete as of 10 Oct 2026. Research budget used: 20 web searches, 8 web fetches, plus direct reads of the API Meublés public app code and endpoints.

Working name used below: **"Registre"** (placeholder, not a brand check).

## Summary

- **What to build.** A web console for conciergeries (and agencies) that act as "intermédiaires de meublés" (IDM). It keeps one register of every managed unit, tracks each unit's registration number (NER), collects the owner's sworn statement, counts nights against the 90/120-night cap, and produces the periodic API Meublés file with the state's own checks run in advance. It also builds a per-unit "dossier de diligence" for inspectors. A light plan serves multi-unit private hosts (NER tracker and night counter only).
- **The state side leaves room.** The API Meublés app takes a CSV upload (UTF-8, ";" separator, a fixed template "modele_import_idm.csv") or machine sending with an API key that expires and is IP-filtered. Logins use TOTP two-factor. I read this in the app's public JavaScript on 10 Oct 2026 ([API Meublés app chunk 190](https://apimeubles.finances.gouv.fr/190.4c12ffe223e5de0a.js); [chunk 305](https://apimeubles.finances.gouv.fr/305.6ed354c7ad3673e8.js)). The app shows communes the data per NER, listing URL ("id_meuble") and **month**, with "Jours de location" and a running total ([chunk 31](https://apimeubles.finances.gouv.fr/31.989438574242fcf1.js)). The state gives no register, no owner workflow, no cap counter and no evidence file ([DGE](https://www.entreprises.gouv.fr/espace-entreprises/s-informer-sur-la-reglementation/lapi-meubles-guichet-unique-de-centralisation)). That gap is the product.
- **The CSV template is behind a login.** Its column list is not public; the download endpoint `/api/import-file/import_idm/template` returned HTTP 401 without a session (my test, 10 Oct 2026; path from [chunk 305](https://apimeubles.finances.gouv.fr/305.6ed354c7ad3673e8.js)). The first task of week 1 is to get it from a pilot conciergerie that already has an IDM account. The generator keeps the column mapping in config, so a template change does not need a release.
- **Data comes mostly from PMS exports.** Smoobu's API gives bookings with channel and apartment, but no OTA listing URL and no NER field ([Smoobu API docs](https://docs.smoobu.com/)). Superhote documents only availability and booking-creation endpoints ([Superhote help](https://help.superhote.com/support/solutions/articles/150000053090-intégrer-l-api-rest-de-superhote-pour-récupérer-les-disponibilités-ou-créer-des-réservations-)). So the MVP imports CSV/XLSX exports with presets per PMS, and listing URLs are entered once per unit. API connectors (Beds24, Smoobu, Lodgify, Hostaway) come in v1.
- **Owners must declare "en personne"** ([Code du tourisme L324-1-1 III](https://codes.droit.org/PDF/Code%20du%20tourisme.pdf); [Paris](https://www.paris.fr/en/pages/furnished-vacation-rentals-rules-to-follow-34993)). The product never files for them. Instead it sends the owner a checklist and, if the DGE allows it, a **pre-filled draft** on Démarche Numérique, which has a pre-fill API ("REST et ne nécessite pas d'authentification") for draft or published procedures set to "opendata" ([data.gouv.fr](https://www.data.gouv.fr/dataservices/api-de-preremplissage-dun-dossier-de-demarche-numerique); [docs](https://doc.demarches-simplifiees.fr/pour-aller-plus-loin/api-de-preremplissage)). The owner logs in, checks and submits. Whether the national teleservice will allow pre-fill is unverified.
- **Stack.** One Django monolith with PostgreSQL, HTMX, a Postgres job queue and WeasyPrint for PDFs, hosted in Paris on Scaleway. This suits a solo founder with AI agents: a well-known stack, one repository, clear module boundaries and a built-in admin for the rules tables. A Paris VM costs EUR 6.55-20.10 a month and a managed PostgreSQL node from EUR 11.39 a month ([Scaleway instances](https://www.scaleway.com/en/pricing/virtual-instances/); [Scaleway databases](https://www.scaleway.com/en/pricing/managed-databases-pricing/)).
- **Running cost is small:** about EUR 40-75 a month at 50 customers, EUR 130-175 at 300 and EUR 370-480 at 1,000 (my estimates), about 1-2.5% of expected revenue at a 60 EUR per customer per month average. Payment fees (Stripe or Paddle, about 3-6% of revenue) cost more than the servers.
- **Build plan.** Week 1 foundation (founder plus one agent), weeks 2-3 six parallel agent work streams in separate git worktrees, week 4 integration and MVP demo (target **Fri 6 Nov 2026**). Weeks 5-8: lawyer approval of the owner notice, sworn statement and terms, an external security test, and 3-5 paid pilots. Paid launch **Mon 7 Dec 2026**, so pilots file their Q4 2026 data with the tool before the **31 Jan 2027** deadline (period end + one month, [R324-2-1](https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053703536)).
- **The Q3 2026 file is due by 30 or 31 Oct 2026**, before the MVP exists. Offer 3-5 conciergeries a done-with-you service: the founder runs the converter script on their exports. This gets the template, real data and the first testimonials.
- **Cash budget to paid launch: about EUR 8,300-19,900** (two lawyers EUR 3,000-6,500, security test and retest EUR 3,000-8,000, AI coding tools EUR 600-1,200, hosting and tools EUR 300-600, pilots and 15% contingency). No salaried developers. First-year cash cost about EUR 12,900-33,000 including insurance, a second security test and legal upkeep (my estimates). The real limit is the founder's review time, not money.

## Users and jobs

### Who uses the product

| Role | Who it is | Main jobs | Rights |
|---|---|---|---|
| **Firm admin** (gérant, mirrors "IDM-ADMIN" in API Meublés ([chunk 7](https://apimeubles.finances.gouv.fr/7.67f55a60e49ad2ec.js))) | Owner or manager of the conciergerie or agency | Set firm size class and reporting period (R4); approve the period file; manage users, billing, rules overrides; answer the commune | Everything in the firm; cannot edit the audit log |
| **Manager** (gestionnaire, mirrors "IDM-GEST") | Operations staff | Import units and bookings, chase owners, fix check errors, record listing captures, close calendars at the cap | Units and tasks; no billing, no rules tables (R47) |
| **Owner** (propriétaire / loueur) | The host the conciergerie works for; often a private person | Read the information notice; give the NER and receipt; prove main residence; sign the sworn statement; update when facts change (R11-R17) | No account. A one-time magic link per task; sees only own units |
| **Multi-unit host (solo plan)** | Private host with 2-10 units, no conciergerie | Track NERs and renewals; count nights; answer a commune's nights request (R27) | Is both admin and owner; no API Meublés module unless they run their own booking site |
| **Network head office** (later) | Franchise or network of conciergeries, agency with branches | See compliance status across member firms | Read-only across firms that grant access |
| **Inspector / commune agent** | Sworn agent of the commune, or a court | Ask for proof (L324-2-1 IV) | No login. Gets the dossier de diligence as PDF/ZIP from the firm |
| **Content editor** (domain lawyer) | External lawyer on meublés de tourisme | Edit notice, sworn statement and letter templates; edit rules tables (caps, cut-off dates, formats) with source and date | Admin content area only; no customer data |
| **Platform admin** | Founder | Support, rules updates, commune list sync, incident response | Support access only with time-limited customer consent, logged |

### Jobs to be done (in the buyer's words)

1. "Send our API Meublés file on time every quarter, without a day of spreadsheet work, and have it accepted first time" (R28-R37).
2. "Show me which units have no valid number, and chase those owners for me" (the re-registration wave after the national teleservice opens; R6-R11).
3. "Warn me before a main residence passes 90 or 120 nights, across all channels" (R22-R25; fine up to 50,000 EUR per listing ([Code du tourisme L324-2-1 III](https://codes.droit.org/PDF/Code%20du%20tourisme.pdf))).
4. "If the mairie or a judge asks, give me one file that proves we did our part" (R39; lawyers advise one compliance file per address ([Kohen Avocats](https://kohenavocats.fr/2026/05/25/contrat-conciergerie-airbnb-amende-annonce-irreguliere-20-mai-2026/))).
5. "Get owners to sign the sworn statement on their phone, without paper" (R15-R17).
6. "Tell me when a new commune joins API Meublés or a rule changes" (R3, R49).

## Feature map

"R" numbers refer to the requirements in [01-law-and-requirements.md](01-law-and-requirements.md).

| Area | MVP (build weeks 1-4, sell from week 9) | v1 (months 3-6) | Later |
|---|---|---|---|
| Account and firm | Sign-up, firm profile, size class and reporting period (R4), roles admin/manager (R47), TOTP for staff, French UI (R51) | Multi-entity firms and branches; network head-office view | White-label for PMS vendors and networks |
| Unit register | Units and owners from CSV/XLSX with column mapping and PMS presets; all decree fields (R1); source and date per field (R2); address normalised to the national address base with INSEE code | API sync from PMS; duplicate detection across imports | Bulk edit by rules (e.g. all units of one owner) |
| Communes and rules | Daily sync of the public API Meublés commune list; "reporting required" flag per unit (R3); versioned rules table: caps per commune and year, NER formats, legacy cut-off date, renewal period (R49) | Per-commune change-of-use and authorisation rules (R18, R19); taxe de séjour dates | Rules for Italy (CIN), Belgium, Spain |
| NER | Format checks: legacy 13 characters and INSEE match (R6), national pattern in config (R7), no duplicate (R14); status lifecycle with evidence (R8); cut-off and expiry alerts driven by config dates, left empty until the DGE publishes them (R9, R10) | Change-of-facts tasks for every declared field (R11) | Bulk check against commune NER lists if the DGE publishes them |
| Owner workflow | Magic-link portal: information notice with read receipt (R15); sworn statement with simple e-signature and e-mail OTP (R16, R17); upload of NER receipt and main-residence proof, encrypted (R12, R13) | Pre-filled teleservice draft via Démarche Numérique, if allowed (R12); reminders by SMS; 2D-Doc check of tax notices | Qualified e-signature option (Yousign) |
| Bookings and nights | Bookings from CSV exports (Superhote, Lodgify, Beds24, Smoobu, generic); guest names dropped at import; night ledger by date; year and period splits; cancellations out (R22) | API connectors (Beds24, Smoobu, Lodgify, Hostaway); Make.com webhook for Superhote | iCal fallback for small PMS |
| Night cap | Counter per unit per year against the commune cap (R23); forecast from confirmed bookings; alerts at 80/90/100% (R24) | "Close all calendars" task per listing with proof (R25); exception reasons with manager override (R26) | Automatic calendar blocks through PMS APIs |
| API Meublés reporting | Period list and deadline engine (R28, R34); pre-checks that mirror the commune's flags (R35); CSV per the DGE template, mapping in config (R29-R32); user uploads it; evidence record with file, SHA-256, status and log (R36); corrected re-submission (R37); IDM account status (R38) | Direct sending with the firm's API key from fixed outbound IPs (R33) | Monthly cycle for larger firms (R4 logic is MVP) |
| Listings | Listing URL per unit and channel (R5); manual capture upload with date | Browser extension: one-click capture of the listing with NER detection (R20, R21) | Number push to channels through PMS (R21) |
| Evidence | Append-only audit log (R40); per-unit dossier de diligence PDF+ZIP (R39) | Retention engine (R41); commune nights-request letters (R27) | Read-only "inspection room" link |
| Other duties | — | Copropriété notice tracking (R42) | Taxe de séjour per-stay lines (R43); DPE (R44); carte G status (R45) |
| Billing | Card payments per unit per month (Stripe or Paddle) | Annual plans; one-off "re-registration campaign" fee | Reseller billing for networks |

**Why this cut.** The MVP covers the two jobs with a hard date: the quarterly file (next deadline 31 Jan 2027) and the night cap (the counter restarts on 1 Jan 2027). The re-registration wave depends on the national teleservice, still announced only for Q4 2026 ([DGE](https://www.entreprises.gouv.fr/espace-entreprises/s-informer-sur-la-reglementation/lapi-meubles-guichet-unique-de-centralisation); [service-public.gouv.fr](https://www.service-public.gouv.fr/particuliers/actualites/A18880)), so its alerts sit on config dates that can be set the day the DGE publishes them. Direct API sending waits for the DGE's technical documentation, which is behind the IDM login.

## Key flows

### Flow 1: First day (target: under 45 minutes for a 30-unit firm)

1. Sign up with e-mail and password; set up TOTP.
2. Firm profile: name, SIRET (looked up in the public Sirene search API ([recherche-entreprises](https://recherche-entreprises.api.gouv.fr/))), headcount band and turnover band. The app sets the reporting period: quarterly for micro and small firms under 4,250 listings a month on average, otherwise monthly (R4; [R324-2-1 III](https://codes.droit.org/PDF/Code%20du%20tourisme.pdf)).
3. Upload a unit export from the PMS (or the provided Excel template). The mapper proposes column matches; the user confirms once and the mapping is saved as a preset.
4. Address check: each address is geocoded to the national address base, returning the INSEE commune code. Low-score matches go to a short review list.
5. Commune match: units in the 410 communes registered on API Meublés (10 Oct 2026 ([communes endpoint](https://apimeubles.finances.gouv.fr/api/grand-public/communes-list))) are flagged "reporting required". If the firm has no IDM account yet, a task links to the DGE's registration form ([Démarche Numérique](https://demarche.numerique.gouv.fr/commencer/db2338ad-4575-44c2-9728-505b529d1b68)).
6. NER check: format, commune code and duplicates. The dashboard shows the counts: no number, legacy number, national number, invalid.
7. "Invite owners": one click sends each owner a link for the notice, the sworn statement and the documents.

### Flow 2: Owner compliance (owner side, about 5 minutes on a phone)

1. The owner opens the link (valid 14 days, single use per task).
2. Reads the information notice: declaration duty, change of use, night cap, copropriété notice. Ticks "j'ai lu" (logged with version and time; R15).
3. Confirms or corrects the unit data shown (address, main residence yes/no, rooms, beds).
4. Enters or confirms the NER and uploads the receipt. If there is no number: the page shows the teleservice checklist and link, and later a pre-filled draft if the DGE allows it.
5. If "main residence = yes": uploads the tax notice with the unit's address as tax address (R13). The page asks the owner to hide amounts and offers the official SVAIR check, which needs the 13-digit tax number and notice reference ([economie.gouv.fr](https://www.economie.gouv.fr/particuliers/authenticite-avis-impot-svair)).
6. Signs the sworn statement: a one-time code by e-mail, then the PDF is generated with signer, time, IP, code hash and document hash (R16).
7. The unit turns "ready to publish" when notice, statement and a valid number are all present.

### Flow 3: Period reporting (quarterly, about 30-60 minutes per 100 units)

1. From the 1st day after the period ends, the app opens the period (for Q4 2026: 1 Oct-31 Dec 2026, due 31 Jan 2027).
2. Bookings for the period are imported (or synced in v1). The night ledger splits stays at period and year boundaries.
3. Pre-checks run: missing NER (still reported, R30); unknown NER (format or commune mismatch); over the cap for a declared main residence; address mismatch; main-residence mismatch (R35). These mirror the commune flags in the state app ("NER absents", "NER inconnus", "NER > seuil", "Incohérence adresse du meublé", "Incohérence statut résidence principale", and also "Coordonnées GPS incohérentes") ([chunk 542](https://apimeubles.finances.gouv.fr/542.74107fce698fecda.js); [chunk 190](https://apimeubles.finances.gouv.fr/190.4c12ffe223e5de0a.js)). So Registre geocodes each address itself and flags units whose geocode score is low.
4. The user fixes or accepts each finding with a reason.
5. The admin approves; the app builds the CSV (UTF-8, ";" separator, template column order). It refuses to build a file that would trigger the state's known rejections: wrong encoding, wrong separator, wrong header, invalid characters, script content in "id_meuble" ([chunk 305 error map](https://apimeubles.finances.gouv.fr/305.6ed354c7ad3673e8.js)).
6. MVP: the admin logs into API Meublés (TOTP) and uploads the file. The import shows "En cours", then "Terminé", "Terminé avec des alertes" or "Terminé en erreur" ([chunk 7](https://apimeubles.finances.gouv.fr/7.67f55a60e49ad2ec.js)). The admin records the status and uploads the returned log in Registre. v1: the app sends the file itself with the firm's API key.
7. The evidence record stores the exact file, its SHA-256 hash, time, user, status and log (R36).

### Flow 4: Night-cap watch (daily, automatic)

1. A nightly job recomputes nights per unit for the calendar year from all imported bookings, and forecasts year-end from confirmed future stays.
2. Main residences at 80%, 90% and 100% of the commune cap raise alerts to the manager and owner (R24).
3. At 100% (v1): a "close all calendars" task per listing, closed only when each listing has a proof (R25). In the MVP the alert names every listing to close.

### Flow 5: Re-registration wave (when the national teleservice opens)

1. The founder sets the teleservice opening date and the legacy cut-off date in the rules table, with the DGE source link (R9, R49).
2. Every unit with a legacy commune number gets status "to re-register" and a deadline.
3. A campaign sends each owner the checklist (and pre-filled draft, if allowed), with reminders at 60, 30, 14 and 7 days before cut-off (R9).
4. The new receipt sets status "national"; the old sworn statement expires and a new one is requested (R17); a task asks staff to update the number on each listing (R21).

### Flow 6: A commune joins API Meublés

1. The daily sync sees a new INSEE code in the public list ([communes endpoint](https://apimeubles.finances.gouv.fr/api/grand-public/communes-list)).
2. Affected units turn "reporting required" from the next period; the admin gets an e-mail (R3); if the firm has no IDM account, a registration task opens (R38).

### Flow 7: Inspection or commune request

1. The admin opens the unit and clicks "Dossier de diligence".
2. Within a minute the app builds a PDF summary plus ZIP: owner identity, address, status, NER and receipt, sworn statement, notice proof, captures, nights log, cap closures, period files sent (R39).
3. For a commune's nights request to the owner, a pre-filled reply letter with address, NER and nights is produced, with a one-month deadline (R27, v1).

## Screens

1. **Dashboard.** Risk counters with links: units without a number, legacy numbers, numbers due to expire, missing sworn statements, listings without a recent capture, units over 80% of cap, periods due or overdue, units in newly registered communes (R52). A deadline strip shows the next period due date.
2. **Units list.** Filterable table: unit, owner, commune, reporting required, NER status, statement status, nights this year / cap, last capture. Bulk actions: invite owners, export.
3. **Unit detail.** Tabs: Data (with source and date per field), Number (status history and evidence), Owner (notice, statement, documents), Listings (URL per channel, captures), Nights (ledger by month, chart against cap), Periods (rows sent), History (audit log).
4. **Import wizard.** Upload, column mapping with suggestions and saved presets, preview of the first 20 rows, validation results, confirm.
5. **Address review.** Low-confidence geocoding matches with map pin and alternatives.
6. **Owner portal (mobile first).** A step list: read notice, confirm data, number and receipt, proof, sign. No account, no password.
7. **Period screen.** Period dates, due date, rows to report, findings by type with fix links, approve button, "Download CSV", "Record upload result", versions.
8. **Night-cap board.** Main residences ranked by share of cap used, with forecast; open closure tasks.
9. **Communes and rules.** Read-only for customers: communes registered on API Meublés with date first seen, caps by year, source links. Editable for the content editor.
10. **Evidence.** Per period: files sent, hashes, statuses, logs. Per unit: dossier builder.
11. **Settings.** Firm profile and size class, users and roles, TOTP, IDM account status, API key and expiry (v1), outbound IP list (v1), PMS connections (v1), billing, data export, DPA download.
12. **Help.** Short French guides: how to register as IDM, how to upload in API Meublés, what to keep for inspectors.

## Data sources and integrations

### State systems

| Source | What it gives | Access | Format / endpoint | Cost and licence | Use in product |
|---|---|---|---|---|---|
| API Meublés public data | List of registered communes (410 on 10 Oct 2026), regions/departments, yearly statistics, CSV export | No authentication | `GET https://apimeubles.finances.gouv.fr/api/grand-public/communes-list`; `.../statistiques`; `.../export` (CSV, ";" separator) ([communes](https://apimeubles.finances.gouv.fr/api/grand-public/communes-list); [statistics](https://apimeubles.finances.gouv.fr/api/grand-public/statistiques)) | Free; no licence stated (unverified) | Daily sync of the commune list (R3) |
| API Meublés IDM space | CSV import of activity data; import history with log files; API keys | IDM account via a Démarche Numérique form; TOTP login; roles IDM-ADMIN and IDM-GEST ([DGE](https://www.entreprises.gouv.fr/espace-entreprises/s-informer-sur-la-reglementation/lapi-meubles-guichet-unique-de-centralisation); [chunk 7](https://apimeubles.finances.gouv.fr/7.67f55a60e49ad2ec.js)) | CSV, UTF-8, ";" separator, template "modele_import_idm.csv" (download needs login); a column "id_meuble" holds the listing URL; data stored per NER, listing and month ([chunk 190](https://apimeubles.finances.gouv.fr/190.4c12ffe223e5de0a.js); [chunk 31](https://apimeubles.finances.gouv.fr/31.989438574242fcf1.js)). API key per IDM with an expiry date; "Un filtrage IP est appliqué sur les API" ([chunk 305](https://apimeubles.finances.gouv.fr/305.6ed354c7ad3673e8.js)). The machine-sending endpoint is not in the public code (unverified). | Free | MVP: generate the file, user uploads. v1: send with the firm's key (R33) |
| Démarche Numérique (ex Démarches Simplifiées) | IDM registration form; the national host teleservice from Q4 2026 ([DGE](https://www.entreprises.gouv.fr/espace-entreprises/s-informer-sur-la-reglementation/lapi-meubles-guichet-unique-de-centralisation)) | Users log in themselves | Pre-fill API: REST, no authentication, creates a draft dossier the user then completes and submits; works only if the procedure is published and set to "opendata", otherwise needs GraphQL schema access ([data.gouv.fr](https://www.data.gouv.fr/dataservices/api-de-preremplissage-dun-dossier-de-demarche-numerique); [demo procedure](https://demarche.numerique.gouv.fr/preremplir/une-demarche-a-preremplir)) | Free | v1: pre-filled owner declaration and IDM registration, if the DGE procedures allow it (unverified) |
| National address base via the IGN Géoplateforme | Geocoding of addresses, INSEE commune code | No authentication; 50 requests per second per IP ([data.gouv.fr discussion](https://www.data.gouv.fr/dataservices/api-geoplateforme-geocodage/discussions)) | REST JSON; the old api-adresse.data.gouv.fr moved to the IGN ([data.gouv.fr](https://www.data.gouv.fr/fr/posts/lapi-adresse-de-la-base-adresse-nationale-est-transferee-a-lign-10/)) | Free (open licence, unverified) | Address normalisation and INSEE code (R1, R35). Batch the first import and cache results |
| Sirene search API | Company name, SIRET, NAF code, headcount band | No authentication ([recherche-entreprises](https://recherche-entreprises.api.gouv.fr/)) | REST JSON | Free | Firm and host SIRET look-up (R1) |
| Tax-notice checks | SVAIR: online check with tax number and notice reference; 2D-Doc barcode on notices since April 2022 ([economie.gouv.fr](https://www.economie.gouv.fr/particuliers/authenticite-avis-impot-svair)) | SVAIR is a manual web form; no public API found | 2D-Doc is a signed barcode read by approved apps (same source) | Free | MVP: link to SVAIR. v1: read the 2D-Doc in-app (decoding spec and certificates unverified) |

### PMS and channels

Majordia counted the software named on conciergerie websites: Superhote 48, Lodgify 42, Avantio 34, Smily 28, Beds24 26 ([Majordia observatory](https://www.majordia.fr/ressources/observatoire-conciergeries-lcd), via [02-market](02-market-and-competition.md)). Integration order follows that list and API openness.

| PMS | API facts | What it lacks for us | Plan |
|---|---|---|---|
| Superhote (French) | REST API v2 for availability and booking creation with an API key and property key ([Superhote help](https://help.superhote.com/support/solutions/articles/150000053090-intégrer-l-api-rest-de-superhote-pour-récupérer-les-disponibilités-ou-créer-des-réservations-)); Make.com triggers on booking created or changed ([Make](https://make.com/en/integrations/superhote/perplexity-ai)) | No documented endpoint to read all bookings (unverified) | MVP: CSV export preset. v1: Make.com webhook into Registre |
| Lodgify | Public API v1/v2 with an X-ApiKey header; webhooks; key under Settings > Public API; may be blocked on the Starter plan ([Supergood report](https://supergood.ai/api-report-card/lodgify)) | Plan gating (unverified) | MVP: CSV preset. v1: API |
| Beds24 | API V2 with refresh and access tokens; "read/bookings" scope; GET /bookings; Swagger docs ([Beds24 wiki](https://wiki.beds24.com/index.php/Guest_Services:_How_to_connect_to_Beds24_using_API_V2)) | — | v1: first API connector (best documented) |
| Smoobu | API with HMAC headers (the old Api-Key header stops after 31 Oct 2026); 700 requests per minute; reservations carry `arrival`, `departure`, `channel` {id, name}, `apartment` {id, name}, `type` (cancellation) ([Smoobu docs](https://docs.smoobu.com/)) | No listing URL, no OTA listing ID, no NER field (same source) | v1: API; listing URLs entered once |
| Hostaway | Public API at api.hostaway.com/v1, OAuth client-credentials token ([Bruin docs](https://getbruin.com/docs/bruin/ingestion/hostaway.html)) | Fields for NER and URLs unverified | v1-v2 |
| Avantio, Smily | Not checked in this pass (unverified) | — | CSV presets first |
| Airbnb, Booking.com | No API for small conciergeries (unverified). Airbnb's terms ban "bots, crawlers, scrapers or other automated means" ([ConductAtlas copy of Airbnb ToS](https://conductatlas.com/platform/airbnb/airbnb-terms-of-service/provision/CA-P-021897/prohibition-on-bots-and-automated-platform-access/)) | — | Never scrape. Listing captures are made by the user (upload in MVP, a browser extension the user clicks in v1) |

### Other services

| Service | Choice | Cost | Note |
|---|---|---|---|
| E-signature for the sworn statement | In-house simple electronic signature: e-mail one-time code, audit trail, PDF hash | Free | eIDAS art. 25: an electronic signature cannot be denied legal effect only because it is electronic ([Reg. 910/2014](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014R0910)). Lawyer to confirm it is enough for a "déclaration sur l'honneur" (LC1, week 5) |
| Optional qualified signature | Yousign API | About EUR 104 a month for 500 simple signatures a year (third-party figure, unverified) ([Verdocs](https://verdocs.com/?p=13994)) | Later, if customers ask |
| Optional AI column mapping | Claude API (Haiku 5.5: USD 0.10 / 0.50 per million input/output tokens; Opus 5.5: USD 4 / 20) ([Claude pricing](https://platform.claude.com/docs/en/about-claude/pricing)) | Under EUR 0.05 per import (my estimate) | Send only column headers and synthetic sample values, never personal data: the API's data-residency setting offers only "us" or "global", not EU (Claude API docs, unverified on the public page) |

## Data model

### Main entities (PostgreSQL)

- **Firm** — id, name, SIRET, size class (micro / small / other), avg listings last quarter, reporting frequency (3 or 1 month), IDM account status, plan.
- **User** — id, e-mail, password hash, TOTP secret (encrypted), last login. **Membership** — user, firm, role (admin, manager, read-only).
- **Owner** (host) — firm, type (person / company), name or company and legal representative, SIRET, postal and e-mail address, phone. Each field keeps source and confirmed-at (R2).
- **Unit** — firm, owner, internal ref, address lines (street, building, staircase, floor, flat or lot), BAN id, INSEE code, numéro invariant, main residence (yes / no / unknown), professional letting, disabled access, rooms, beds, classification level and date, declarant-is-host flag and declarant fields, active from/to, PMS external ids (R1).
- **FieldProvenance** — unit or owner, field, value, source (owner form, PMS import, tax notice, manual), confirmed_at, by.
- **Commune** — INSEE code, name, department, API Meublés registered (first seen, last seen), EPCI.
- **RuleSet / Rule** — key (cap, legacy cut-off, renewal period, NER pattern, CSV mapping, reporting thresholds), scope (national, commune, year), value (JSON), effective from/to, source URL, approved by, version (R49).
- **Ner** — unit, number (normalised), kind (legacy / national), status (missing, legacy, national, suspended, withdrawn, superseded, expired, invalid), valid from, expires at, receipt document, history rows with date, source and evidence (R8).
- **Listing** — unit, channel (Airbnb, Booking, Abritel, own site, other), URL, external id, start, end, published-by-firm flag (R5).
- **Capture** — listing, captured at, image or PDF, NER found (text), method (upload / extension).
- **Booking** — unit, listing or channel, check-in, check-out, status, external ref, source import. No guest name or contact stored (data minimisation).
- **NightLedger** — unit, date, booking (one row per night; about 4-9 million rows a year at 1,000 customers and 30,000 units, my estimate; partition by year).
- **Period** — firm, start, end, due date, frequency, status (open, ready, approved, uploaded, accepted, accepted with alerts, rejected, overdue).
- **Finding** — period, unit, check type (NER missing, NER unknown, over cap, address mismatch, GPS mismatch, main-residence mismatch), severity, resolution, reason, by.
- **Submission** — period, version, file (object key), SHA-256, row count, created by, uploaded at, API Meublés status, log file, current flag (R36, R37).
- **Notice / Acknowledgement** — notice template version; owner, unit, sent at, opened at, acknowledged at, IP.
- **SwornStatement** — unit, owner, NER, main-residence statement, change-of-use statement, signed at, OTP hash, IP, user agent, PDF key, SHA-256, status (valid, expired) (R16, R17).
- **Document** — type (NER receipt, tax notice, authorisation, DPE, capture, other), object key, per-firm data-key id, SHA-256, uploaded by, retention date.
- **Task** — unit or period, type, due, assignee, status, closure proof.
- **AuditEvent** — firm, actor, action, object, before, after, time, previous-hash, hash (append-only, hash chain; R40).
- **Integration** (v1) — firm, PMS type, encrypted credentials, last sync, status. **ApiMeublesKey** (v1) — firm, encrypted key, expiry date.

### Key rules in the model

- Units belong to exactly one firm; every tenant table carries `firm_id`, enforced in code and by PostgreSQL row-level security.
- Nights are derived only from the NightLedger, so the cap counter and the period file can never disagree.
- Legal parameters live only in RuleSet, never in code, each with a source URL and an effective date (R49).

## Architecture and stack

### Recommendation: one boring monolith that AI agents write well

- **Language and framework:** Python 3.13 and Django 5.2 LTS. Reasons: AI coding agents are fluent in it; the built-in admin gives the lawyer a rules and templates editor at no cost; mature auth, forms, French i18n and migrations; strong CSV/Excel tools (openpyxl, pandas) and PDF tools (WeasyPrint).
- **Front end:** server-rendered pages with HTMX and a little Alpine.js; Tailwind for styles. No SPA. Do **not** use the State design system (DSFR): the product must not look like a government site.
- **Database:** PostgreSQL 16 or later, row-level security for tenant isolation, a partitioned NightLedger, JSONB for rules values.
- **Background jobs:** Procrastinate (Postgres-backed queue), no Redis. Jobs: commune sync (daily 05:00), night ledger and cap alerts (nightly), deadline reminders (daily 07:00), owner reminders, PDF and ZIP builds on demand, retention sweep (weekly).
- **Files:** S3-compatible object storage in Paris; envelope encryption per firm (AES-256-GCM data keys, master key outside the database); virus scan on upload (ClamAV).
- **Outbound IP:** a fixed public IP for all calls to API Meublés (v1), shown on the Settings page so firms can give it to DGE support (R33).
- **E-mail:** a French or EU transactional provider, SPF/DKIM/DMARC on our domain.
- **Payments:** Stripe Billing or Paddle; the choice is covered in [04-gtm-company-finance.md](04-gtm-company-finance.md) (founder's foreign company, VAT handling).
- **Deploy:** Docker Compose behind Caddy on one Paris VM at first; managed PostgreSQL with point-in-time recovery from day 1 (it removes the riskiest admin job). CI on GitHub Actions: tests, migrations check, tenant-isolation tests, dependency audit, SAST.
- **Observability:** structured logs without personal data; error tracking (self-hosted GlitchTip or an EU-hosted service); uptime checks.

### Module boundaries (they are also the agent work streams)

| Module | Owns | Talks to others through |
|---|---|---|
| `core` | Firms, users, roles, TOTP, tenancy, audit log, settings | Base models and permission helpers (frozen after week 1) |
| `registry` | Owners, units, provenance, addresses, communes, import wizard | `registry.services` (create/update unit, import batch) |
| `rules` | RuleSet, commune sync, NER validation and lifecycle | `rules.get(key, scope, date)`; `ner.validate()` |
| `bookings` | Booking import, connectors, NightLedger, cap counter | `nights.for_unit(unit, start, end)` |
| `reporting` | Periods, findings, CSV generation, submissions | Reads registry, rules, bookings; never writes them |
| `owners` | Magic links, notices, sworn statements, OTP signature | `owners.request(unit, tasks)` |
| `documents` | Encrypted storage, PDF templates, dossier builder | `documents.put()`, `documents.render()` |
| `notify` | E-mail templates, reminders, digests | `notify.send(event, context)` |
| `billing` | Plans, per-unit metering, webhooks | Reads unit counts |

### Diagram

```
Browser (HTMX) / Owner phone (magic link)
        |
      Caddy (TLS) -- fixed outbound IP --> API Meublés (v1, API key)
        |
   Django app (web) -----------------> PostgreSQL (managed, RLS, PITR)
        |                                   ^
   Procrastinate workers -------------------+
     |        |          |         |
 Commune   PMS APIs   Géoplateforme  Object storage (encrypted documents,
 list sync (v1)       geocoding      captures, period files)
     |
 E-mail provider, payment provider webhooks
```

## Security, privacy and liability

### Data protection law and our role

- **Law.** The GDPR applies directly, with the French Loi Informatique et Libertés; the regulator is the CNIL. The CNIL's processor guide sets out what a software vendor must do: a written art. 28 contract, security, confidentiality, help with breach notices and audits, and written approval before using sub-processors ([CNIL guide du sous-traitant](https://www.cnil.fr/sites/default/files/atoms/files/rgpd-guide_sous-traitant-cnil.pdf); [GDPR](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679)). A processor can be fined directly (GDPR art. 82-83, same sources).
- **Roles.** Each conciergerie is the controller of its owners' and units' data. Registre is its processor: a DPA in the terms, a public sub-processor list, EU hosting (R46). Registre is controller only for its own user accounts, billing and marketing.
- **What personal data we hold.** Owner identity and contact details; unit addresses (personal data when the owner is a person); the main-residence status; tax notices (they show the tax number and income figures); signatures and IP addresses; staff accounts. The state treats the same API Meublés data as personal data (D324-2-13) ([Code du tourisme](https://codes.droit.org/PDF/Code%20du%20tourisme.pdf)).
- **Minimisation by design.**
  - Booking imports keep dates, unit, channel and status only. Guest names, e-mails and phones are dropped at import (GDPR art. 5(1)(c)).
  - Tax notices: the owner is asked to hide amounts; the file is encrypted with a per-firm key; staff see a watermarked preview; downloads are logged (R13, R48).
  - Optional fields of the API Meublés file are off by default and sent only when the firm turns them on (R31).
- **Retention.** Keep evidence at least until 31 Dec of the year after the rental year (the commune's request window), default 5 years, configurable; then delete automatically with a 30-day warning (R41). The DGE keeps intermediary data for the year received and the next year (R324-2-1 IV) ([Code du tourisme](https://codes.droit.org/PDF/Code%20du%20tourisme.pdf)). When a customer leaves: full export (CSV, PDFs, ZIP), then deletion after 90 days unless they buy an archive plan.
- **Owners' rights.** Owners are told by the conciergerie (art. 14 information). Registre supplies a French template notice and routes owner requests to the firm.
- **Breaches.** Processor tells the controller without undue delay; the controller notifies the CNIL within 72 hours (GDPR art. 33). Registre's incident plan targets notice to customers within 24 hours.
- **No transfers outside the EU for customer data.** Hosting, database, file storage and backups in France (Scaleway Paris). E-mail provider in the EU. If the optional AI column mapper is used, it receives only column headers and synthetic examples, never rows of customer data.
- **DPIA.** Probably not mandatory for the processor, but the tax-notice handling justifies a short internal DPIA that customers can read (my view).
- **Founder's company abroad.** If the selling company is outside the EU, its French customers' contracts still impose GDPR art. 28 duties on it, and it may itself fall under the GDPR and need an EU representative (art. 3(2) and 27; the scope for processors is debated, unverified) ([GDPR](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679)). Support access from a country without an EU adequacy decision is a transfer and needs standard contractual clauses. Keep all data in Paris and limit support access to the founder, with logging. A lawyer should confirm this in LC2.

### Security baseline (MVP)

- TLS everywhere, HSTS, secure cookies; Argon2 password hashing; login rate limits; session timeout after 30 minutes idle.
- TOTP two-factor login required for admins and managers (the state's own app requires TOTP for IDM users ([chunk 7](https://apimeubles.finances.gouv.fr/7.67f55a60e49ad2ec.js))). Owners use single-use magic links that expire after 14 days and only open their own tasks.
- Tenant isolation in two layers: `firm_id` scoping in code and PostgreSQL row-level security; automated tests that try cross-firm reads on every model.
- Envelope encryption for documents (per-firm data keys; master key in a secrets manager, not in the database); disk encryption by the provider.
- Append-only audit log with a hash chain (R40); visible to the firm admin; included in the dossier.
- Backups: managed PostgreSQL point-in-time recovery plus a nightly encrypted dump to a second provider; monthly restore test; target data loss under 15 minutes and recovery within 8 hours.
- Secrets: API Meublés keys (v1) and PMS credentials stored encrypted, never shown again after entry, expiry tracked (R33).
- Supply chain: pinned dependencies, weekly `pip-audit`, GitHub Dependabot, SAST (Bandit, Semgrep) in CI.
- **AI-agent rules:** agents work only on synthetic seed data; no production credentials or customer data on developer machines; every agent change goes through CI and a review (a second agent plus the founder) before merge; security-sensitive modules (`core`, `documents`, `owners`) get line-by-line founder review.
- External security test before paid launch, then yearly and after each large integration. French firms charge EUR 900-1,400 a day. A simple app with a client area and two roles takes 4-5 days (EUR 5,000-6,500), plus 1-2 days of retest (EUR 1,000-2,500) ([Kolonell, pre-launch](https://kolonell.com/fr/blog/pentest-application-web-avant-lancement-prix-2026)). ANSSI's PASSI qualification is "pas toujours obligatoire" ([Kolonell, SME](https://kolonell.com/fr/blog/prix-pentest-application-web-pme-france-2026)). An independent tester should cost less (unverified).
- Written policies (information security, access control, incident response, backup, sub-processors) for customers' due diligence.

### Liability and positioning

- **A tool, not legal advice, and not an intermediary.** The product never publishes listings, takes bookings or handles guest payments, which keeps the vendor outside the intermediary definition in L324-2-1 I (R50) ([Code du tourisme](https://codes.droit.org/PDF/Code%20du%20tourisme.pdf)).
- **The customer stays the declarant.** In the MVP the conciergerie uploads its own file. In v1 Registre sends with the firm's own API key, as its processor, only after the admin approves the period.
- **Owners file in person.** No agent filing by default (R12); only a checklist or a pre-filled draft the owner submits.
- **Templates show version and review date:** "Modèle v1.2, relu par [cabinet] le [date]". Owner documents are in French with article references (R51).
- **Terms:** liability capped at fees paid in the last 12 months; no liability for fines where the customer ignored a blocking finding or an alert; a clear list of what the product does not do (no filing for owners, no legal opinion on change of use).
- **Change commitment:** update rules and templates within 15 working days of a published change (teleservice opening, renewal decree, format arrêté, new commune caps) and notify customers. This is also the renewal story.
- **Insurance:** professional liability for a software publisher costs about EUR 2,000-6,000 a year in 2026 according to one broker guide, up 5-10% on 2024. The same guide advises checking that the policy explicitly covers damage caused by solutions that use AI ([Companeo](https://www.companeo.com/assurance-rc-pro/actualites/assurance-rc-pro-informatique)). A very small firm may pay less (TPE RC Pro EUR 300-1,500 a year per [Swim Legal](https://www.swim.legal/blog/assurance-entreprise-prix)). Prices for a micro-company insured abroad are unverified. Tell the insurer the code is written with AI agents and get the cover in writing.

## Hosting and running costs

### Choice: Paris region, one small provider

French conciergeries and their owners will ask "where is the data?". Hosting in Paris answers that. Scaleway list prices (before tax): DEV1-M 3 vCPU/4 GB EUR 14.74 a month, PLAY2-NANO 2 vCPU/4 GB EUR 20.10, PLAY2-MICRO 4 vCPU/8 GB EUR 40.20 ([Scaleway instances](https://www.scaleway.com/en/pricing/virtual-instances/)); managed PostgreSQL DB-DEV-S EUR 11.39, DB-DEV-M EUR 27.89 (+EUR 13.36 for a second node), DB-PRO2-XXS EUR 80.30 (+EUR 42.56); block storage about EUR 0.10 per GB and backups EUR 0.03 per GB a month ([Scaleway databases](https://www.scaleway.com/en/pricing/managed-databases-pricing/)); object storage about EUR 0.016 per GB a month (multi-AZ) with 75 GB of free egress a month ([Scaleway storage](https://www.scaleway.com/en/pricing/storage/)). Public IPv4 addresses are billed separately (price not shown; I assume about EUR 3 each, unverified). OVHcloud or Clever Cloud are French alternatives (prices not checked).

### Monthly running cost (my estimates, EUR, before VAT)

Assumptions: 30 units per customer; about 10 MB of documents and captures per unit per year; 100-200 e-mails per customer per month.

| Item | 50 customers (1,500 units) | 300 customers (9,000 units) | 1,000 customers (30,000 units) |
|---|---|---|---|
| App and worker servers | 1 × DEV1-M or PLAY2-NANO: 15-20 | PLAY2-NANO + DEV1-M worker: 35 | 2 × PLAY2-MICRO + PLAY2-NANO + load balancer: 110-120 |
| Public IPs (fixed outbound IP for API Meublés) | 3 | 6 | 9 |
| Managed PostgreSQL with storage and backups | DB-DEV-S: 13 | DB-DEV-M + standby: 45 | DB-PRO2-XXS + standby: 135 |
| Object storage + offsite backup copy | 2-5 | 5-10 | 20-30 |
| Transactional e-mail (Brevo from EUR 7 a month for 5,000 e-mails ([La Fabrique du Net](https://www.lafabriquedunet.fr/email-marketing/articles/tarifs-brevo/))) | 7-15 | 25-45 | 60-120 |
| Error tracking, uptime, logs | 0-15 | 15-30 | 30-60 |
| Domain, misc. | 2 | 2 | 5 |
| **Total** | **about 40-75** | **about 130-175** | **about 370-480** |
| Per customer per month | 0.8-1.5 | 0.45-0.6 | 0.37-0.48 |

At the proposed price of about 60 EUR per customer per month (30 units × 2 EUR, from the [B1 re-assessment](../reports/france-b1.md)), monthly revenue would be about EUR 3,000, 18,000 and 60,000. Servers then cost about 1.3-2.5%, 0.7-1.0% and 0.6-0.8% of revenue. Payment fees cost more: Paddle charges 5% + USD 0.50 per transaction as merchant of record; Stripe is cheaper per transaction but adds Billing (about 0.7%) and tax work ([DesignRevision](https://designrevision.com/blog/stripe-vs-paddle.md); [Costbench](https://costbench.com/compare/stripe-vs-paddle/)). The optional AI column mapper costs cents per import. People and the founder's time are the real cost.

## Development plan

### Approach: founder plus parallel AI agents

- **Roles.** The founder is architect, reviewer and product owner. He writes or approves every brief, reviews every merge, talks to customers and handles the lawyer. Claude Code agents write the code in parallel, each in its own git worktree and branch, each limited to one module directory.
- **Spec already exists.** The 52 requirements in [01-law-and-requirements.md](01-law-and-requirements.md) each have a "Test:" line. Week 1 turns them into failing acceptance tests. Agents then build until the tests pass. This is the main reason a 3-week MVP is realistic.
- **Rules that keep parallel agents from colliding.**
  1. Week 1 freezes `core`, all models and migrations, the service-function signatures and the seed-data generator. Later model changes go through the founder only.
  2. Each stream owns one module directory and its tests; it may read other modules only through their service functions.
  3. Each stream has a `BRIEF.md` (goal, requirement numbers, acceptance tests, files it may touch, definition of done) and the repository has a `CLAUDE.md` with conventions (French UI strings via gettext, no personal data in logs, tenant scoping).
  4. CI on every push: tests, migration check, tenant-isolation tests, linters, SAST. A reviewer agent comments on each pull request before the founder reviews it.
  5. Rebase on `main` daily; merge small pieces often.
- **Capacity limit.** The bottleneck is the founder's review time, about 1-2 hours per active stream per day. Six streams is the ceiling; four is comfortable (my estimate).

### Work streams for the MVP

| Stream | Module(s) | Builds | Key requirements | Depends on |
|---|---|---|---|---|
| F (foundation, week 1, founder + 1 agent) | `core`, all models | Project skeleton, tenancy and RLS, auth with TOTP, roles, audit log with hash chain, all models and migrations, seed-data generator (3 firms, 200 units, 5,000 bookings, edge cases), UI shell (Tailwind layout, tables, forms), CI, staging deploy | R40, R47 | — |
| S1 Registry and import | `registry` | Unit and owner import (CSV/XLSX), column mapper with saved presets for 4 PMS and a generic template, field provenance, geocoding with cache and review list, commune match | R1, R2, R5 | F |
| S2 Rules and NER | `rules` | Rules tables with admin editing and versions, daily commune sync from the public endpoint, NER validators (legacy, national pattern from config), NER lifecycle with evidence, duplicate check, cut-off and renewal fields | R3, R6-R10, R14, R49 | F |
| S3 Bookings and nights | `bookings` | Booking import presets (dates, unit, channel, status, no guest data), NightLedger with year and period splits, cap counter with forecast, 80/90/100% alerts | R22-R24 | F |
| S4 Reporting | `reporting` | Periods and deadline engine (quarterly or monthly), pre-checks, findings with resolution, CSV generator driven by a mapping config, refusal of known rejection causes, submissions with hash, status, log and versions, IDM account status | R4, R28-R32, R34-R38 | F; reads S1-S3 through services |
| S5 Owner portal | `owners`, `documents` (storage part) | Magic links, information notice with read receipt, data confirmation, NER receipt and proof uploads with encryption, sworn statement PDF with e-mail OTP signature | R11-R13, R15-R17, R48 | F |
| S6 Shell | `documents` (PDF part), `notify`, `billing`, dashboard, site | Dashboard counters, e-mail reminders and digests, dossier de diligence PDF+ZIP, Stripe or Paddle checkout and per-unit metering, public site with pricing and legal pages | R39, R51, R52 | F; reads all |
| Q (continuous) | tests only | Cross-cutting tests: tenant isolation, time-travel deadline tests over a full year, security linters, review comments on every pull request | R40, R47 | F |

### Calendar (start Monday 12 Oct 2026)

| Week | Dates | Founder (product, sales, legal) | Agents (engineering) | Gate |
|---|---|---|---|---|
| 1 | 12-16 Oct | 10 interviews (SNCL members, LinkedIn); get "modele_import_idm.csv" and a sample upload log from a conciergerie with an IDM account; engage the two lawyers; register domain; open Scaleway and GitHub | F: foundation, models, seed data, CI, staging. Side task: a converter script, PMS export to IDM CSV | Template in hand. Models frozen Fri 16 Oct |
| 2 | 19-23 Oct | Q3 rescue: run the converter for 3-5 conciergeries (free or small fee, under a one-page processing agreement) before the 30/31 Oct deadline; collect their exports and upload results | S1-S6 and Q in parallel | Daily merges green |
| 3 | 26-30 Oct | Q3 rescue continues; write owner notice and sworn statement drafts for the lawyer | S1-S6 continue | Q3 files uploaded by 30 Oct (strict reading of R34) |
| 4 | 2-6 Nov | Demo to the Q3 rescue firms; pilot agreements (free until the Q4 file, then list price) | Integration week: merge, end-to-end tests on seed data and on anonymised pilot exports, bug fixing | **MVP done Fri 6 Nov** (feature-complete, internal) |
| 5 | 9-13 Nov | **LC1:** domain lawyer reviews notice, sworn statement, owner letters, rules table, in-app warnings | Hardening, fixes from pilot use, help pages, billing tests | LC1 approved |
| 6 | 16-20 Nov | **LC2:** tech lawyer delivers CGV/CGU, DPA, privacy notice, sub-processor list | External security test (4-5 days); load test on 30,000 synthetic units | Test report received |
| 7 | 23-27 Nov | Pilots onboard real portfolios (3-5 firms); watch them live | Fix test findings; retest of high and critical issues | No open high/critical |
| 8 | 30 Nov-4 Dec | Pricing page, onboarding videos, launch e-mail to SNCL and trade media | Re-registration campaign feature (Flow 5) if the DGE has dated the teleservice; final checklist | Definition of done met |
| Launch | Mon 7 Dec 2026 | Paid launch | Support rota | — |
| Season | 1-29 Jan 2027 | Q4 2026 files for pilots and first customers (legal due date Sun 31 Jan 2027; aim for Fri 29 Jan) | On call; quick fixes | First real reporting cycle done |

Christmas week (21 Dec-1 Jan) is planned light. If week 4 slips, cut S6 billing to manual invoices and keep the date.

### Definition of done for the MVP (checked in week 8)

1. A 30-unit firm imports units and bookings from a Superhote, Lodgify, Beds24 or Smoobu export and builds its first period file in **under 45 minutes**, unaided, in at least 3 of 4 pilot firms.
2. A generated file from real pilot data imports into API Meublés with status "Terminé", or "Terminé avec des alertes" only for findings the user accepted. No "Terminé en erreur".
3. Night counts match a hand count on 20 sample units with zero errors, including stays across 31 Dec, across period ends and cancelled stays.
4. The "Test:" lines of R1-R9, R12-R17, R22-R24, R28-R32, R34-R40, R47, R49-R52 pass as automated tests.
5. Five test owners finish the owner flow on a phone in **under 5 minutes** each.
6. The deadline engine passes a time-travel test over a full year for quarterly and monthly firms, with reminders at D-14, D-7 and D-1.
7. Tenant-isolation tests pass; the external security test has no open high or critical finding; a backup restore has been tested.
8. LC1 and LC2 are signed off; every owner-facing template shows its version and review date.
9. Card payment, invoice and VAT handling work end to end.
10. At least 3 pilot firms say they will pay the list price after the Q4 2026 file.

### After launch (v1, months 3-6: Jan-Apr 2027)

- **Jan:** Beds24 then Smoobu API connectors; Make.com webhook for Superhote.
- **Feb:** direct sending with the firm's API key from a fixed IP, once the DGE spec is in hand (R33); browser-extension listing capture (R20, R21).
- **Mar:** pre-filled teleservice drafts if the DGE procedure allows it; cap-reached closure tasks (R25, R26); commune nights-request letters (R27).
- **Apr:** retention engine (R41); copropriété notice (R42); Lodgify and Hostaway connectors; second security test.
- Each month: a day of rules upkeep (new communes, caps, decrees) with the domain lawyer on call.

## Budget

### Cash budget to paid launch (Oct-Dec 2026, founder unpaid, EUR before VAT)

| Item | Low | High | Basis |
|---|---|---|---|
| AI coding tools (Claude Max at USD 200 a month for about 3 months, plus API overflow for extra parallel agents) | 600 | 1,200 | Max plans cost USD 100 or 200 a month and include Claude Code ([Noqta](https://www.noqta.tn/blog/claude-code-pricing-2026); [Superblocks](https://www.superblocks.com/blog/claude-code-pricing)) (third-party; check [claude.com/pricing](https://claude.com/pricing)) |
| Hosting (staging and production), domain, e-mail, error tracking, GitHub | 300 | 600 | Scaleway prices above; my estimate |
| Domain lawyer (meublés de tourisme): notice, sworn statement, owner letters, rules table, warnings (LC1) | 1,500 | 3,500 | About 6-12 hours (my estimate); a contract review starts around EUR 500 ([Swim Legal](https://www.swim.legal/blog/avocat-cgv-guide-pratique-securiser-conditions-generales-vente)) |
| Tech/data lawyer: CGV/CGU, DPA, privacy notice (LC2) | 1,500 | 3,000 | EUR 500 for a review to EUR 3,000+ for bespoke drafting; average CGV EUR 1,000 ([Swim Legal](https://www.swim.legal/blog/avocat-cgv-guide-pratique-securiser-conditions-generales-vente); [Captain Contrat](https://www.captaincontrat.com/articles-droit-commercial/combien-coute-redaction-cgv)) |
| External security test (4-5 days, grey box, two roles plus owner links) and retest | 3,000 | 8,000 | Firm: EUR 5,000-6,500 for a simple two-role app plus EUR 1,000-2,500 retest ([Kolonell](https://kolonell.com/fr/blog/pentest-application-web-avant-lancement-prix-2026)). Low case assumes an independent tester at about EUR 700 a day (unverified) |
| Pilots: travel to 2-3 conciergeries, one trade event | 300 | 1,000 | My estimate |
| Contingency (15%) | 1,100 | 2,600 | |
| **Total to launch** | **about 8,300** | **about 19,900** | |

### First-year cash cost (Oct 2026-Sep 2027)

| Item | Low | High |
|---|---|---|
| Launch budget (above) | 8,300 | 19,900 |
| AI coding tools, months 3-12 (Max at USD 100-200 a month) | 900 | 1,900 |
| Hosting and tools, months 3-12 (50-150 customers) | 500 | 1,200 |
| E-mail, monitoring, misc. | 200 | 500 |
| Lawyer upkeep for new texts (teleservice decree, renewal decree, possible format arrêté) | 1,000 | 2,500 |
| Second security test after the v1 connectors (smaller scope) | 1,500 | 4,000 |
| Professional liability insurance | 500 | 3,000 |
| **Total year 1** | **about 12,900** | **about 33,000** |

Not included: company set-up and accounting abroad, payment fees (a share of revenue), marketing spend, and the founder's time (see [04-gtm-company-finance.md](04-gtm-company-finance.md)). For comparison, the B1 re-assessment puts year-3 recurring revenue at about EUR 108,000 a year in the base case ([B1 report](../reports/france-b1.md)). A hired senior developer in France would cost more than this whole budget within a few months (my estimate). AI agents change the economics, but the founder's review time becomes the limit.

## Risks

| Risk | Why it matters | Mitigation |
|---|---|---|
| CSV template unknown or changed by the DGE | The file is rejected ("Entête du fichier invalide... l'ordre n'est pas respecté") ([chunk 305](https://apimeubles.finances.gouv.fr/305.6ed354c7ad3673e8.js)) | Get the template in week 1 from a pilot; mapping in config; a rejected upload creates an alert to the founder; test file each quarter |
| Machine API closed to vendors, or IP filtering per firm | v1 direct sending may not work for a multi-tenant service | MVP works by upload; ask the DGE (contact form ([Démarche Numérique](https://demarche.numerique.gouv.fr/commencer/api-meubles-contact))) whether one vendor IP can serve many IDMs; fixed outbound IPs |
| Legal reading changes counts | "Jours" vs nights; whether a conciergerie also reports OTA bookings; splits across months | Both readings as config switches; lawyer opinion; show the basis on every file |
| PMS exports lack listing URLs and clean channel data | Mandatory field missing (R29) | One-time URL entry with OTA ID patterns; v1 capture extension; findings block approval |
| Wrong data gives a wrong file | Customer exposed to fines; blame on us | Pre-checks, admin approval, evidence log, liability cap, clear terms |
| AI-written code has security flaws | Tax notices and identity data at stake | Test-first, reviewer agent, SAST, no production data with agents, external test, founder line-by-line review of sensitive modules; confirm the insurance policy covers AI-related damage ([Companeo](https://www.companeo.com/assurance-rc-pro/actualites/assurance-rc-pro-informatique)) |
| Founder review bottleneck | Parallel agents produce more code than one person can check | Cap at 4-6 streams; strict module boundaries; small pull requests |
| PMS vendors add API Meublés export | Price pressure | No PMS export found in a 10 Oct 2026 search (unverified). Stay multi-PMS, own the owner workflow and the dossier, offer an embed or API to PMS vendors |
| Pre-fill not allowed on the national teleservice | Weaker owner-filing help | Fallback checklist and deep link; the register and chase still work |
| Simple e-signature judged too weak for the sworn statement | Evidence challenged | Lawyer check in LC1; Yousign option |
| Deadline crunch | All customers file in the same weeks (by 31 Jan, 30 Apr, 30 Jul and 30 Oct on the strict reading of R34) | Internal target 2 days before; support rota; servers are not the constraint |
| Smoobu auth change | Old Api-Key header stops after 31 Oct 2026 ([Smoobu docs](https://docs.smoobu.com/)) | Build HMAC from the start |

## Open questions

1. What are the columns, order and size limit of "modele_import_idm.csv"? A "MAX_FILE_SIZE" error exists; the limit is not public ([chunk 305](https://apimeubles.finances.gouv.fr/305.6ed354c7ad3673e8.js)).
2. What is the machine-sending endpoint for an IDM API key, how is IP filtering set, and may one software vendor send for many IDMs?
3. Is one file row one NER × listing URL × month? The commune screens show data by month ([chunk 31](https://apimeubles.finances.gouv.fr/31.989438574242fcf1.js)).
4. Does the DGE count nights or days ("nombre de jours" in R324-2-1, "Jours de location" in the app)? How are stays across month ends split?
5. Must a conciergerie report nights booked through Airbnb or Booking, when the platform also reports them?
6. Will the national host teleservice be a published "opendata" procedure on Démarche Numérique, so drafts can be pre-filled ([data.gouv.fr](https://www.data.gouv.fr/dataservices/api-de-preremplissage-dun-dossier-de-demarche-numerique))? Will it accept a mandate?
7. Will the DGE offer any public check of a NER's validity? Communes may send their number lists to the DGE (R324-2-4) ([Code du tourisme](https://codes.droit.org/PDF/Code%20du%20tourisme.pdf)); I found no public check.
8. Which PMS exports include OTA listing IDs or URLs (Superhote, Lodgify, Avantio, Smily)?
9. Is a simple electronic signature with an e-mail code enough for the "déclaration sur l'honneur" in court?
10. Can the 2D-Doc on tax notices be decoded and verified by a private app with public certificates?

## Sources

State systems and law
- API Meublés public app and code (read 10 Oct 2026): https://apimeubles.finances.gouv.fr/ ; chunks https://apimeubles.finances.gouv.fr/7.67f55a60e49ad2ec.js , https://apimeubles.finances.gouv.fr/31.989438574242fcf1.js , https://apimeubles.finances.gouv.fr/190.4c12ffe223e5de0a.js , https://apimeubles.finances.gouv.fr/305.6ed354c7ad3673e8.js , https://apimeubles.finances.gouv.fr/542.74107fce698fecda.js
- API Meublés public endpoints: https://apimeubles.finances.gouv.fr/api/grand-public/communes-list ; https://apimeubles.finances.gouv.fr/api/grand-public/statistiques
- DGE, API Meublés: https://www.entreprises.gouv.fr/espace-entreprises/s-informer-sur-la-reglementation/lapi-meubles-guichet-unique-de-centralisation
- service-public.gouv.fr, 27 Jul 2026: https://www.service-public.gouv.fr/particuliers/actualites/A18880
- Décret 2026-196 art. 6: https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053703536
- Code du tourisme (consolidated, 6 Oct 2026): https://codes.droit.org/PDF/Code%20du%20tourisme.pdf
- Ville de Paris rules: https://www.paris.fr/en/pages/furnished-vacation-rentals-rules-to-follow-34993
- Démarche Numérique IDM form: https://demarche.numerique.gouv.fr/commencer/db2338ad-4575-44c2-9728-505b529d1b68 ; contact: https://demarche.numerique.gouv.fr/commencer/api-meubles-contact
- Démarche Numérique pre-fill API: https://www.data.gouv.fr/dataservices/api-de-preremplissage-dun-dossier-de-demarche-numerique ; https://doc.demarches-simplifiees.fr/pour-aller-plus-loin/api-de-preremplissage ; demo: https://demarche.numerique.gouv.fr/preremplir/une-demarche-a-preremplir
- Géoplateforme geocoding: https://www.data.gouv.fr/dataservices/api-geoplateforme-geocodage/discussions ; https://www.data.gouv.fr/fr/posts/lapi-adresse-de-la-base-adresse-nationale-est-transferee-a-lign-10/
- Sirene search API: https://recherche-entreprises.api.gouv.fr/
- Tax-notice checks (SVAIR, 2D-Doc): https://www.economie.gouv.fr/particuliers/authenticite-avis-impot-svair
- eIDAS Regulation 910/2014: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014R0910
- GDPR: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679
- CNIL processor guide: https://www.cnil.fr/sites/default/files/atoms/files/rgpd-guide_sous-traitant-cnil.pdf

PMS and channels
- Smoobu API docs: https://docs.smoobu.com/
- Superhote API help: https://help.superhote.com/support/solutions/articles/150000053090-intégrer-l-api-rest-de-superhote-pour-récupérer-les-disponibilités-ou-créer-des-réservations-
- Superhote on Make: https://make.com/en/integrations/superhote/perplexity-ai
- Lodgify API (third-party report): https://supergood.ai/api-report-card/lodgify
- Beds24 API V2: https://wiki.beds24.com/index.php/Guest_Services:_How_to_connect_to_Beds24_using_API_V2
- Hostaway API (third-party docs): https://getbruin.com/docs/bruin/ingestion/hostaway.html
- Majordia observatory: https://www.majordia.fr/ressources/observatoire-conciergeries-lcd
- Airbnb ToS clause (copy): https://conductatlas.com/platform/airbnb/airbnb-terms-of-service/provision/CA-P-021897/prohibition-on-bots-and-automated-platform-access/

Costs and tools
- Scaleway instances: https://www.scaleway.com/en/pricing/virtual-instances/
- Scaleway managed databases: https://www.scaleway.com/en/pricing/managed-databases-pricing/
- Scaleway storage: https://www.scaleway.com/en/pricing/storage/
- Brevo prices: https://www.lafabriquedunet.fr/email-marketing/articles/tarifs-brevo/
- Yousign API price (third-party): https://verdocs.com/?p=13994
- Claude API pricing: https://platform.claude.com/docs/en/about-claude/pricing
- Claude Code plans (third-party): https://www.noqta.tn/blog/claude-code-pricing-2026 ; https://www.superblocks.com/blog/claude-code-pricing ; official: https://claude.com/pricing
- Pen-test prices: https://kolonell.com/fr/blog/pentest-application-web-avant-lancement-prix-2026 ; https://kolonell.com/fr/blog/prix-pentest-application-web-pme-france-2026
- Lawyer fees: https://www.swim.legal/blog/avocat-cgv-guide-pratique-securiser-conditions-generales-vente ; https://www.captaincontrat.com/articles-droit-commercial/combien-coute-redaction-cgv
- Insurance: https://www.companeo.com/assurance-rc-pro/actualites/assurance-rc-pro-informatique ; https://www.swim.legal/blog/assurance-entreprise-prix
- Paddle and Stripe fees: https://designrevision.com/blog/stripe-vs-paddle.md ; https://costbench.com/compare/stripe-vs-paddle/
- Kohen Avocats (compliance file advice): https://kohenavocats.fr/2026/05/25/contrat-conciergerie-airbnb-amende-annonce-irreguliere-20-mai-2026/
