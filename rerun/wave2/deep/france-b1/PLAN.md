# France: compliance file and API Meublés reporting for conciergeries — full plan

The original idea was a "tourist-rental registration and renewal manager (API Meublés number tracker)". The deep dive moved its core to the conciergerie's quarterly API Meublés file and its proof file per unit. Number tracking stays in, as one module.

Combined plan from four deep-research parts (written 10 Oct 2026):

- [01 Law and product requirements](01-law-and-requirements.md): the consolidated codes, the March 2026 decrees, the API Meublés app, and 52 testable requirements, each traced to an article.
- [02 Market and competition](02-market-and-competition.md): buyer counts from Sirene and the API Meublés data, prices, competitors, channels and other countries.
- [03 Product and technical design](03-product-and-tech.md): users, features, flows, screens, data sources, architecture, security, the AI-agent build plan and the budget.
- [04 Go-to-market, company and finance](04-gtm-company-finance.md): pricing, channels, the 90-day launch, payments and tax, company set-up, the 36-month model and kill criteria.

Starting point: [the B1 report and its re-assessment](../reports/france-b1.md) (6/10).

Factual claims below carry a URL. The section files hold the full source lists. This page reconciles the files where they disagree and gives one plan. "My estimate" marks numbers derived here. "(unverified)" marks claims no source confirmed. Two web searches were run for this page, to settle two disagreements between the files (see §2). Short link keys: [CT] is the consolidated Code du tourisme, [CCH] the Code de la construction et de l'habitation, [CGCT] the Code général des collectivités territoriales, [DGE] the DGE's API Meublés page and [SP] the service-public.gouv.fr notice of 27 Jul 2026.

---

## 1. Decision in one page

**Verdict: go, as a cheap, time-boxed test aimed at the 31 January 2027 filing deadline.** Build it as a small compliance add-on for conciergeries, priced per unit. Plan for a sale to a PMS vendor as the likely end. Do not expect a large standalone company.

**Score: 6/10.** Unchanged from the re-assessment (6/10). The original report gave 5/10 and the first screen 4/10.

**The case for it.**

- **The duty is real, recurring and in force.** Every intermediary must send API Meublés each unit's registration number (NER), listing URLs, address and nights rented. Small firms do it every quarter, within one month of the quarter's end (Code du tourisme R324-2-1) ([Code du tourisme][CT]; [décret 2026-196 art. 6][D196A6]). The DGE lists "conciergeries" and "agences immobilières" among the intermediaries ([DGE][DGE]).
- **Four more duties apply in every commune.** Inform the owner; collect a sworn statement and the number before listing; show the number; stop a main residence at the night cap (L324-2-1) ([CT]).
- **The fines are in the consolidated code.** Up to 12,500 EUR per unit for the first three duties, 50,000 EUR per unit for the data and 50,000 EUR per listing for the cap (L324-2-1 III) ([CT]).
- **Courts already fine conciergeries**, so far for change of use. TJ Paris fined one owner and her conciergerie 70,000 EUR each for one flat ([Simonnet Avocat][SIM]). Four Paris decisions reported in July 2026 total 440,000 EUR ([Kohen Avocats][KOHJ]).
- **The state gives a pipe, not a tool.** API Meublés takes a CSV upload or an API key ([API Meublés app code][APP305]). It has no unit register, no owner workflow, no cross-channel night counter and no proof file ([DGE]).
- **No product does the whole job.** Biloki has a number register and a night counter ([Biloki][BILOKI]). Easy Concierge lists an API Meublés module "en préparation" ([Easy Concierge][EASY]). The real incumbent is the spreadsheet.
- **It is cheap and quick to build.** About 8,300-19,900 EUR to paid launch, with no hired developers. MVP on Fri 6 Nov 2026; paid launch on Mon 7 Dec 2026 ([03](03-product-and-tech.md)).

**What the deep dive changed** (versus the re-assessment):

- **The law is firmer.** The fines and the reporting duty were read in the consolidated code, not only in lawyers' notes ([CT]).
- **The first build is easier.** Small intermediaries can upload a CSV (UTF-8, ";" separator, a template "modele_import_idm.csv") ([API Meublés app code][APP305]). The MVP needs no DGE approval. But sending is also less painful than feared. The value moves to preparing, checking and proving the data.
- **The live pool is smaller.** The reporting duty applies only to units in communes registered on API Meublés: 410 on 10 Oct 2026 ([communes endpoint][APICL]). The working target is about **1,000-2,000 conciergeries** today, not 2,500 ([02](02-market-and-competition.md)). It grows as communes join.
- **No filing for owners.** The host must declare "préalablement en personne" (L324-1-1 III) ([CT]). Paris says the declaration "cannot be filed on behalf of the property management company" ([Ville de Paris][PARIS]). So the "assisted filing" add-on becomes a re-registration campaign that chases owners, at 15 EUR per unit.
- **"Renewal" is still empty.** No decree sets how long a number stays valid ([CT]). The national teleservice is still "Q4 2026" ([DGE]; [service-public.gouv.fr][SP]). Renewal stays a config field, not a selling point.
- **Competitors are closer.** Easy Concierge is building the module. Chekin sells "compliance" at 3.95-7.95 EUR per property and lists France as "coming soon" ([Chekin][CHEKIN]). The window before PMS vendors catch up is perhaps 12-18 months (my estimate, from 02).
- **Pain is not yet heard.** No conciergerie testimony about API Meublés was found. No fine for a missed file has been reported yet ([02](02-market-and-competition.md); [01](01-law-and-requirements.md)).

Net: the law and the build got better; the market size and the moat got worse. The score stays at 6.

**What it is worth** (EUR, founder unpaid; from 04's model; the base used here is 04's "30% fewer new customers" case, see §10):

| Case | Paying conciergeries, month 36 | ARR, month 36 | Year-3 profit before founder pay | Peak cash need |
|---|---|---|---|---|
| Low | 61 | about 38,000 | about 1,600 | about 29,000 |
| **Base (used here)** | **about 112** | **about 90,000-95,000** | **about 28,700** | **about 17,900** |
| Good (04's base) | 160 | about 132,000 | about 60,900 | about 15,600 |
| High | 302 | about 320,000 | about 191,600 | about 18,500 |

- At 2.5-4 times ARR, the base is worth about 225,000-380,000 EUR at month 36, and the good case about 330,000-530,000 EUR. A buyer pricing on 4-6 times owner earnings would pay only about 115,000-170,000 EUR for the base. This is one source, so treat it as indicative ([beancount.io][BEAN]). A sale to a PMS vendor in months 12-24 is the likelier exit (§10).
- In the base case it pays the founder about 2,400 EUR a month by year 3 (my arithmetic). It is a side business or a sale, not a living, unless the good case happens.

**Key conditions.**

1. **Pilots with an IDM account.** At least 3 conciergeries that already have an API Meublés account, and will share the CSV template, by Fri 30 Oct 2026. Without them the duty is not live in practice.
2. **Business French.** Every page, call and document must be in French. If the founder is not fluent, a French-speaking helper starts in month 1. That adds about 7,200 EUR and lifts peak cash to about 23,000-25,000 EUR (my estimate, from 04).
3. **The selling company.** An EU company sells with Stripe and the EU One-Stop Shop (OSS) and needs no French company. A non-EU company should use Paddle and check GDPR representation (§9).
4. **Speed and focus.** Sell before a PMS ships the feature. Make the owner workflow and the proof file the core, not the CSV.

**Do this first** (in the next three weeks; under about 2,000 EUR of cash, my estimate):

1. Find 3-5 conciergeries with an IDM account in Paris, Alpes-Maritimes, Var or Haute-Savoie. Prepare their Q3 2026 file for free by **Fri 30 Oct**, and get the template.
2. Hold 25-30 discovery calls. Test 2.50 EUR per unit per month.
3. Build the foundation and a converter script in week 1; reach the MVP by Fri 6 Nov.
4. Pass the day-19 and day-30 kill criteria (§13).

---

## 2. Why now: the law and enforcement

**Where the duty comes from.**

- Loi n° 2024-1039 ("loi Le Meur") rewrote the meublé de tourisme articles of the Code du tourisme ([loi 2024-1039 art. 1][LOI]).
- Décrets 2026-196 and 2026-197 of 19 Mar 2026, in force since 21 Mar 2026, set up the API Meublés data system and the data fields ([décret 2026-196][D196]; [art. 6][D196A6]).
- EU Regulation 2024/1028 has applied since 20 May 2026. It puts the data duty on online platforms ([EUR-Lex][EU]). France extended it to every intermediary ([DGE]). I found no other state that did the same (unverified, from 02).

**Who is obliged.**

- **Hosts:** anyone who offers a meublé de tourisme. There is no size or income threshold (L324-1-1) ([CT]).
- **Intermediaries:** anyone who helps rent one "par une activité d'entremise ou de négociation" (L324-2-1 I) ([CT]). The DGE's own definition of IDM gives "Airbnb, Booking, Gîtes de France, conciergeries, agences immobilières" as examples ([DGE]). This settles a doubt in 01, which could not re-confirm that wording on its fetch (settled by one search on 10 Oct 2026).
- **No size exemption.** Size only sets the period: three months for micro and small firms under 4,250 listings a month, one month for the rest (R324-2-1 III) ([CT]). Almost every conciergerie files quarterly.

**Duty table** (condensed from 01; penalties are maxima; source [CT] unless another is named):

| # | Duty | Who | When | Penalty |
|---|---|---|---|---|
| H1 | Declare each unit on the national teleservice, "en personne", with proof if it is the main residence | Host | Before the first offer. The teleservice is due "Q4 2026" ([DGE]) | 10,000 EUR (mayor) |
| H2-H3 | Update on any change; renew "à l'expiration d'un délai fixé par décret" | Host | On change. **Renewal period not set** | 10,000 EUR; 20,000 EUR if false |
| H4 | Re-register old commune numbers | Host | "Plusieurs mois" after the teleservice opens ([DGE]; [SP]) | Old number becomes invalid |
| H7 | Night cap on a main residence: 120 nights, or the commune's lower cap (Paris: 90 since 1 Jan 2025 ([Ville de Paris][P90])) | Host | Calendar year | 15,000 EUR |
| H9 | Change-of-use authorisation where the commune requires it | Host | Before letting | 100,000 EUR per unit ([CCH][CCH]) |
| I1 | Inform the host of its duties | Intermediary | Before the ad goes online | 12,500 EUR per unit |
| I2 | Collect a sworn statement and the number | Intermediary | Before publication | 12,500 EUR per unit |
| I3 | Show the number in every ad | Intermediary | Always | 12,500 EUR per unit |
| I4 | Send NER, listing URLs, address and nights to API Meublés for units in registered communes | Intermediary | Each quarter (small firms) or month, within one month of the period's end | 50,000 EUR per unit |
| I5 | Register as an IDM on API Meublés | Intermediary | Before the first file, if one unit is in a registered commune ([DGE]) | Same exposure as I4 (01's reading) |
| I6 | Stop offering a main residence at the cap | Intermediary | Continuous | 50,000 EUR per listing |
| I7 | Do not help an illegal change of use | Intermediary | Always | 100,000 EUR per unit ([CCH]) |

Intermediary fines are civil fines. The court president sets them at the commune's request (L324-2-1 III) ([CT]).

**Filing deadlines (settled here).** 01 and 03 read the quarterly due date for Q3 as 30 October. 04 used 31 October. Under the French rule for deadlines counted in months (Code de procédure civile art. 641), the deadline expires on the same day number of the following month, or on that month's last day if the day number does not exist ([e-Justice portal][EJ641]). A quarter that ends on 30 September therefore closes on 30 October. **This plan uses 30 Oct, 31 Jan, 30 Apr and 30 Jul.** Art. 642 moves a deadline that falls on a weekend to the next working day for procedural deadlines ([e-Justice portal][EJ641]). Whether that applies to this administrative duty is unverified, so do not rely on it. The Q4 2026 file is due Sun 31 Jan 2027; aim for Fri 29 Jan.

**What the state gives, and what it leaves undone.**

- **API Meublés gives:**
  - an IDM account through a Démarche Numérique form ([IDM form][DN]);
  - a TOTP two-factor login and two roles, IDM-ADMIN and IDM-GEST ([app code][APP7]);
  - a CSV import from a template that sits behind the login, with statuses "Terminé", "Terminé avec des alertes" and "Fichier rejeté" ([API Meublés app code][APP305]);
  - API keys with an expiry date, and the warning "Un filtrage IP est appliqué sur les API" ([API Meublés app code][APP305]).
- **Communes see ready-made flags** on intermediary data: "NER absents", "NER inconnus", "NER > seuil", "Incohérence adresse du meublé", "Incohérence statut résidence principale" ([app code][APP542]; [app code][APP190]). These work as the inspector's checklist.
- **Left undone by the state** (the product's job):
  - a register of the firm's units and owners;
  - the owner notice and the sworn statement;
  - merging PMS exports into the file;
  - running the commune's checks before upload;
  - a night counter across all channels;
  - deadline reminders, and alerts when a commune joins;
  - a proof file per unit.
- **The national host teleservice** will issue numbers one unit at a time. A bulk or agent mode is unverified ([SP]).

**Enforcement evidence.**

- TJ Paris, 10 Jul 2026 (RG 26/52006): owner and conciergerie fined 70,000 EUR each for one flat let without change-of-use authorisation. The court relied on the mandate, the platform account and the channel manager that the conciergerie ran ([Simonnet Avocat][SIM]).
- Four Paris decisions reported in July 2026 fined an owner and her conciergerie 440,000 EUR in total ([Kohen Avocats][KOHJ]). They may overlap with the case above (unverified).
- Paris fines: about 1.3 MEUR in 2024, 2.4 MEUR in 2025 and about 1 MEUR in Q1 2026 (trade source, unverified) ([Rentalscaleup][RSU]).
- API Meublés already holds 9.34 million nights from 383 communes, but only 27,142 units with a registration number (4 Oct 2026) ([statistics][APIST]; [export][APIEX]). The re-registration wave has barely begun.
- A deputy's written question says medium-sized towns and intercommunalities lack the staff and tools to use the platform ([AN QE 14825][ANQE]). Enforcement outside big cities may be slow (my reading).
- No fine on a conciergerie for a missed API Meublés file has been reported. The duty only began in 2026 ([01](01-law-and-requirements.md)).

**Still moving.**

- The national teleservice and the next API Meublés version: "Q4 2026", after a slip from May 2026 ([DGE]; [SP]).
- The decree on the declaration's content and on number validity: not published by 6 Oct 2026 ([CT]).
- A format arrêté "may" be issued (R324-2-6) ([CT]). None was found.
- More communes join over time; each one creates new obliged conciergeries ([communes list][APICL]).
- Lobbying: the conciergerie union SNCL argues that a conciergerie should not answer for its owners' duties ([SNCL][SNCL]). UNPLV campaigns for softer rules ([Tendance Hôtellerie][TH]).

---

## 3. Customers

| Segment | Count | Confidence | Source |
|---|---|---|---|
| Meublés de tourisme | about 1.2 million | medium | [AN QE 14825][ANQE] |
| Active legal units named "conciergerie" | 6,370 (543 employers; 59 with 10+ staff) | high for the count | [Sirene search][SIRENE], via 02 |
| Conciergeries and independent hosts (vendor observatory on Sirene) | 8,492; 89% with no employees | medium | [Majordia][MAJ] |
| Trade estimate | about 5,000 conciergeries managing 300,000-400,000 units | low-medium | [Xerfi][XERFI]; [LivretAccueil][LIV] |
| Conciergerie head offices inside an API Meublés commune | 27% (47 of 175 sampled) | medium-low | 02's match against [communes endpoint][APICL] |
| **Working target: about 10+ units, with some units in an API Meublés commune** | **about 1,000-2,000 today** | low-medium | 02 (my estimate there) |
| Holders of a carte G for property management | 15,437; only a minority run seasonal rentals | high for the stock | [Immo Matin][IMMO] |
| Agencies running seasonal rentals | about 1,000-3,000 (guess, unverified) | low | 02 |
| Multi-unit private hosts | many; registration duty only, weak payers | low | 02 |

**Reconciled buyer count.** The re-assessment assumed about 2,500 good targets (half of 5,000). The register shows more firms (6,400-8,500), but the quarterly file only bites in 410 communes. **I use 1,000-2,000 conciergeries today as the core pool**, because the file is the selling hook and 02's figure rests on a register sample. Three things widen it over time: new communes joining, agencies with seasonal rentals, and the four duties that apply everywhere (sworn statement, number, cap, proof file).

**Buyer profile.**

- A founder-run firm with 0-2 staff, 10-50 units and a 15-35% commission ([LivretAccueil][LIV]; [Hosting Academy][HACAD]).
- It runs a PMS. Superhote, Lodgify, Avantio, Smily and Beds24 are the names seen most on conciergerie websites ([Majordia][MAJ]). Below about 20 units the spreadsheet still rules ([Rentaplus][RENTAPLUS]).
- It earns about 1,000 EUR per unit per year in commission (02's arithmetic from [LivretAccueil][LIV]). A fee of 2.50 EUR per unit per month is about 3% of that.
- It churns. Conciergerie closures rose from 214 (2023) to 386 (2024) and 478 (2025) ([Majordia][MAJ]).
- It is busy in season: the coast from June to early September, ski resorts from late December to March (04, unverified).

**How they comply today.**

- The number is typed into the PMS, which syncs it to Airbnb and Booking ([Smoobu][SMOOBU]).
- Sworn statements are on paper or in e-mails, if they exist at all (unverified).
- How conciergeries send API Meublés data is unknown. The DGE says all IDM "doivent déjà utiliser la version bêta" ([DGE]). Probably by hand, or not yet (unverified).

**Jobs, in the buyer's words** (from 03):

1. "Send our API Meublés file on time every quarter, and have it accepted first time."
2. "Show me which units have no valid number, and chase those owners for me."
3. "Warn me before a main residence passes 90 or 120 nights, across all channels."
4. "If the mairie or a judge asks, give me one file that proves we did our part." Lawyers advise one compliance file per address ([Kohen Avocats][KOH]).
5. "Get owners to sign the sworn statement on their phone."
6. "Tell me when my commune joins API Meublés."

---

## 4. Competition

| Alternative | What it does against the duties | Price | What it means for us |
|---|---|---|---|
| API Meublés (DGE) | Receives the file by CSV or API key; shows communes their flags | Free ([DGE]) | The pipe, not the tool |
| National teleservice (Q4 2026) | Issues a number to one host for one unit | Free ([SP]) | Nothing for the portfolio |
| Airbnb, Booking | Check and show numbers; report their own data | Commission | Do not cover the conciergerie's own file or proof. Whether communes will accept platform data instead is unverified |
| **Biloki** (PMS) | Number register; pushes a changed number to channels; cross-OTA night counter with AI alerts; reports. No API Meublés sending claimed | Not public ([Biloki][BILOKI]) | Closest product. Partner or fast follower |
| **Easy Concierge** (PMS) | API Meublés module "en préparation"; addresses already tied to INSEE codes | 25 EUR HT a month for 5 units + 3 EUR per unit; 20 clients ([Easy Concierge][EASY]) | Proof that PMS vendors see the need. Tiny today |
| Superhote, Lodgify, Smoobu, Smily, Avantio, Beds24, Hostaway, Guesty | A number field synced to channels. No API Meublés export found (Oct 2026) | About 3-10 EUR per unit per month ([comparatifchannelmanager][SUPERHOTE]; [Chanlify][CHANLIFY]) | The main threat if they add the export. They hold the bookings |
| **Chekin** | Guest check-in compliance, 50+ PMS links; France "coming soon" | 3.95-7.95 EUR per property per month ([Chekin][CHEKIN]) | A likely entrant under a "compliance" label |
| HostLegal | Carte G cover, mandate templates, legal watch | From 49.90 EUR HT a month ([HostLegal][HOSTLEGAL]) | Proves monthly spend on compliance. Bundle partner |
| Hostcare | Files one owner's registration under a mandate | 39 EUR TTC per unit ([Hostcare form][HOSTCARE]) | Sets the ceiling for re-registration help. Agent filing looks risky under "en personne" (01) |
| Firby | Owner-invoicing add-on over 7 PMS | 3-5 EUR per active unit per month ([Firby][FIRBY]) | Not a competitor. The model to copy |
| Spreadsheet and shared folders | Everything, badly | Free | The real incumbent |

**Conclusion.**

- **The incumbents are partial.** Nobody sells the full set: unit register, owner sworn statement, cap watch, the quarterly CSV checked in advance, and a proof file per unit. Under the owner's criteria, that is an opening.
- **The price room is clear.** Stay under Firby (3-5 EUR) and well under a PMS (3-10 EUR per unit).
- **The threat is near.** Superhote owns the base, Biloki has half the features, Easy Concierge is building the module, and Chekin is entering. Move first, and offer white-label to PMS vendors to turn the threat into a channel.


---

## 5. Product

### Positioning

> "Votre déclaration API Meublés prête en 30 minutes, et un dossier par logement prêt pour un contrôle." (04's promise, [04](04-gtm-company-finance.md))

- **What it is.** A web console for conciergeries and agencies that act as intermediaries (IDM). It keeps one register of every managed unit, tracks each registration number (NER), collects the owner's sworn statement, counts nights against the cap, and builds the quarterly API Meublés file with the state's own checks run first. It also builds a proof file ("dossier de diligence") per unit ([03](03-product-and-tech.md)).
- **What changed from the original idea.** The "number tracker and renewal manager" is now one module. Renewal has no date in law yet ([CT]). The selling hook is the quarterly file; the reason to stay is the owner file, the cap watch and the proof file.
- **Never sell the CSV alone.** The CSV is the reason to start; the register and the proof file are the reason to keep paying ([04](04-gtm-company-finance.md)).
- **A tool, not advice, and not an intermediary.** It never publishes listings, takes bookings or handles guest money. That keeps the vendor outside the L324-2-1 definition ([CT]; requirement R50 in [01](01-law-and-requirements.md)).
- **The customer stays the declarant.** The conciergerie approves and uploads each file. Owners file their own declaration "en personne" ([CT]); the product only chases and checks.
- **Working name:** "Registre" (placeholder; no brand check done).

### Users

| Role | Who | Main jobs | Access |
|---|---|---|---|
| Firm admin | Gérant of the conciergerie; mirrors IDM-ADMIN in API Meublés ([API Meublés app code][APP7]) | Sets size class and period; approves the period file; users and billing | Full firm access; cannot edit the audit log |
| Manager | Operations staff; mirrors IDM-GEST | Imports units and bookings; chases owners; fixes findings; closes calendars at the cap | Units and tasks; no billing or rules |
| Owner | The host; often a private person | Reads the notice; gives NER and receipt; proves main residence; e-signs the sworn statement | No account; a one-time magic link per task |
| Multi-unit host (Hôte plan) | Private host with 2-10 units | Tracks numbers; counts nights | Admin and owner in one |
| Inspector or commune | Sworn agent or court (L324-2-1 IV) ([CT]) | Asks for proof | No login; receives the PDF/ZIP dossier |
| Content editor | Outside lawyer on meublés de tourisme | Edits notice, sworn statement, letters and rules tables | Content area only |
| Platform admin | Founder | Support, rules upkeep, commune sync | Support access only with logged, time-limited consent |

Source: [03](03-product-and-tech.md).

### Feature map

| Area | MVP (built weeks 1-4, sold from week 9) | v1 (Jan-Apr 2027) | Later |
|---|---|---|---|
| Firm and users | Sign-up; size class and reporting period (quarterly or monthly); admin and manager roles; TOTP; French UI | Multi-entity firms; network view | White-label for PMS vendors and networks |
| Unit register | CSV/XLSX import with saved PMS presets; all decree fields; source and date per field; address geocoded to the national base with INSEE code | API sync from PMS; duplicate detection | Bulk edit by rules |
| Communes and rules | Daily sync of the 410-commune list; "reporting required" flag; versioned rules table (caps per commune and year, NER formats, cut-off and renewal dates, CSV mapping) | Change-of-use rules per commune; taxe de séjour dates | Belgium and Italy rules |
| NER | Legacy 13-character check with INSEE match; national pattern in config; duplicates; status lifecycle with evidence; cut-off and expiry alerts on config dates | Change-of-facts tasks | Bulk check if the DGE ever publishes one |
| Owner workflow | Magic-link portal: notice with read receipt; sworn statement with e-mail code signature; encrypted upload of receipt and tax notice | Pre-filled teleservice draft, if allowed; SMS reminders | Qualified e-signature (Yousign) |
| Bookings and nights | Booking import (dates, unit, channel, status; guest names dropped); night ledger; year and period splits | API connectors (Beds24, Smoobu, Lodgify, Hostaway); Make.com hook for Superhote | iCal fallback |
| Night cap | Counter per unit and year; forecast; alerts at 80/90/100% | "Close all calendars" task with proof; exception log | Calendar blocks via PMS APIs |
| API Meublés file | Period and deadline engine; pre-checks that mirror the commune flags; CSV per the DGE template; user uploads; evidence record (file, SHA-256, status, log); corrected re-submission | Direct sending with the firm's API key from a fixed IP | Monthly cycle tuning for larger firms |
| Listings | URL per unit and channel; manual capture upload | Browser extension for one-click captures | Number push via PMS |
| Evidence | Append-only audit log; dossier PDF+ZIP per unit | Retention engine; commune nights-request letters | Read-only "inspection room" link |
| Billing | Card or SEPA per unit per month | Yearly plans; re-registration campaign fee | Reseller billing |

Condensed from [03](03-product-and-tech.md). **The full list of 52 legal requirements (R1-R52), each with a "Test:" line, is in [01 §PRODUCT REQUIREMENTS](01-law-and-requirements.md#product-requirements).** Treat it as the acceptance checklist.

### Key flows

1. **First day (under 45 minutes for 30 units).** Sign up and set TOTP. Enter the SIRET; the app looks it up in the public Sirene API ([Sirene API][RECH]) and sets the period (quarterly for micro and small firms under 4,250 listings a month, R324-2-1 III ([CT])). Upload the PMS unit export; confirm the column mapping once. Addresses are geocoded; units in the 410 communes are flagged ([communes endpoint][APICL]). If the firm has no IDM account, a task links to the DGE form ([IDM form][DN]). One click invites all owners.
2. **Owner compliance (about 5 minutes on a phone).** Open the link. Tick "j'ai lu" on the notice. Confirm the unit data. Enter the NER and upload the receipt, or get the teleservice checklist. If main residence: upload the tax notice, with amounts hidden. Sign with an e-mail code. The unit turns "ready to publish".
3. **Period file (30-60 minutes per 100 units).** The period opens the day after the quarter ends. Import bookings. Pre-checks run: NER missing, NER unknown, over the cap, address mismatch, main-residence mismatch, GPS mismatch. These mirror the commune flags in the state app ([app code][APP542]; [app code][APP190]). Fix or accept each finding with a reason. The admin approves; the app builds the CSV (UTF-8, ";") and refuses known rejection causes ([API Meublés app code][APP305]). The admin uploads it to API Meublés and records the status and log. The evidence record keeps the file and its hash.
4. **Night-cap watch (nightly).** Recount nights per unit for the year; forecast year-end; alert manager and owner at 80, 90 and 100% of the commune cap.
5. **Re-registration wave (when the teleservice opens).** The founder sets the opening and cut-off dates in the rules table. Every legacy number becomes "to re-register". Owners get the checklist and reminders at 60, 30, 14 and 7 days. A new receipt sets status "national" and asks for a new sworn statement.
6. **A commune joins API Meublés.** The daily sync sees the new code. Affected units turn "reporting required"; the admin is told; an IDM-account task opens if needed.
7. **Inspection.** One click builds the dossier: owner, address, status, NER and receipt, sworn statement, notice proof, captures, nights log, cap closures and period files.

Source: [03](03-product-and-tech.md).

### Screens

1. Dashboard: risk counters (no number, legacy numbers, expiring numbers, missing statements, stale captures, units over 80% of cap, periods due, new communes) and a deadline strip.
2. Units list with filters and bulk actions.
3. Unit detail: data with provenance, number history, owner documents, listings, nights chart, periods, history.
4. Import wizard with mapping presets and a 20-row preview.
5. Address review (low-confidence geocodes).
6. Owner portal (mobile first, no password).
7. Period screen: findings, approve, download CSV, record result, versions.
8. Night-cap board.
9. Communes and rules (read-only for customers).
10. Evidence: files sent, hashes, statuses; dossier builder.
11. Settings: firm, users, TOTP, IDM status, API key and outbound IP (v1), PMS links (v1), billing, data export, DPA.
12. Help: short French guides (IDM registration, upload, what to keep).

---

## 6. Technical design

**Stack** (from [03](03-product-and-tech.md)): one boring monolith that AI agents write well.

- Python and Django, server-rendered pages with HTMX and a little Alpine.js; Tailwind. No single-page app.
- PostgreSQL with row-level security per firm, a night ledger partitioned by year, and JSONB for rules values.
- Procrastinate (a Postgres-backed job queue), so no Redis.
- WeasyPrint for PDFs; S3-compatible storage in Paris with per-firm envelope encryption; ClamAV on uploads.
- Docker Compose behind Caddy on one Paris VM; managed PostgreSQL with point-in-time recovery from day 1; CI on GitHub Actions.
- Do not use the State's design system (DSFR). The product must not look like a government site.

**Rules live in data, not code.** Caps, number formats, cut-off and renewal dates, reporting thresholds and the CSV column mapping sit in a versioned rules table with a source URL and an effective date (R49 in [01](01-law-and-requirements.md)). A DGE template change or a new decree is a data edit, not a release.

**Data sources and integrations.**

| Source | What it gives | Access | Use |
|---|---|---|---|
| API Meublés public endpoints | Commune list (410 on 10 Oct 2026), statistics, CSV export | Open, no login ([communes endpoint][APICL]; [statistics][APIST]) | Daily commune sync |
| API Meublés IDM space | CSV import (UTF-8, ";", template "modele_import_idm.csv"), import logs, API keys with expiry and IP filtering | IDM account, TOTP ([API Meublés app code][APP305]; [API Meublés app code][APP7]) | MVP: the user uploads our file. v1: send with the firm's key. The template and the machine endpoint sit behind the login (unverified until a pilot shares them) |
| Démarche Numérique pre-fill API | Creates a draft dossier a user then submits; open only for procedures set to "opendata" | REST, no authentication ([pre-fill API][DNPRE]) | v1: pre-filled owner drafts, if the teleservice allows it (unverified) |
| IGN Géoplateforme geocoding | Address to INSEE code; 50 requests a second per IP | Open ([Géoplateforme][GEOPF]) | Address check and commune match |
| Sirene search API | Company name, SIRET, NAF, headcount | Open ([Sirene API][RECH]) | Firm and owner look-up; lead lists |
| SVAIR | Online check of a tax notice | Manual web form ([economie.gouv.fr][SVAIR]) | MVP: link only |

**PMS data.** The MVP imports CSV/XLSX exports with presets for Superhote, Lodgify, Beds24 and Smoobu, plus a generic template. Listing URLs are entered once per unit, because Smoobu's API has no OTA listing URL or NER field ([Smoobu API docs][SMOOBUAPI]) and Superhote documents only availability and booking-creation endpoints ([Superhote help][SUPERHOTEAPI]). Beds24 has the best-documented API (read/bookings scope) and comes first in v1 ([Beds24 wiki][BEDS24]). Never scrape Airbnb or Booking: Airbnb's terms ban automated access ([03](03-product-and-tech.md)).

**Core data model.** Firm, User and Membership; Owner; Unit (all decree fields); FieldProvenance; Commune; RuleSet; Ner (status lifecycle); Listing; Capture; Booking (no guest data); NightLedger (one row per night); Period; Finding; Submission (file, hash, status, log); Notice and Acknowledgement; SwornStatement; Document; Task; AuditEvent (hash chain). Every tenant table carries `firm_id`, enforced in code and by row-level security. Nights come only from the ledger, so the cap counter and the period file cannot disagree ([03](03-product-and-tech.md)).

**Security and privacy.**

- **Roles under GDPR.** The conciergerie is the controller of owner and unit data. Registre is its processor under an art. 28 contract, as the CNIL's processor guide requires ([CNIL processor guide][CNILGUIDE]; [GDPR]).
- **Minimise.** Booking imports keep dates, unit, channel and status only; guest names are dropped. Tax notices are encrypted per firm, previews are watermarked, and every download is logged.
- **Hosting.** All customer data in France (Scaleway Paris), with an EU e-mail provider. No customer rows go to any AI API. The optional AI column mapper sees only headers and synthetic samples ([03](03-product-and-tech.md)).
- **Controls.** TOTP for staff; single-use owner links that expire after 14 days; two-layer tenant isolation with automated cross-firm tests; an append-only, hash-chained audit log; point-in-time recovery plus a nightly encrypted dump to a second provider and a monthly restore test.
- **Retention.** Keep evidence at least until 31 Dec of the year after the rental year (the commune's request window), default 5 years, configurable (R41 in [01](01-law-and-requirements.md)).
- **Agent rules.** Agents work only on synthetic seed data. No production credentials on developer machines. Every change passes CI, a reviewer agent and the founder. The founder reviews `core`, `documents` and `owners` line by line.
- **External security test** before paid launch, then yearly. A French firm charges about 5,000-6,500 EUR for 4-5 days on a simple two-role app, plus 1,000-2,500 EUR for a retest ([Kolonell][KOLONELL]).

**Running cost** (my estimates in [03](03-product-and-tech.md), from Scaleway list prices ([Scaleway][SCW]; [Scaleway databases][SCWDB])):

| Customers (30 units each) | Per month | Share of revenue at 60 EUR a customer |
|---|---|---|
| 50 | about 40-75 EUR | 1.3-2.5% |
| 300 | about 130-175 EUR | 0.7-1.0% |
| 1,000 | about 370-480 EUR | 0.6-0.8% |

Payment fees (about 3% of revenue on Stripe, §9) cost more than the servers. The founder's review time is the real cost.

---

## 7. Development steps

### Approach

- **The founder is architect, reviewer and product owner.** Claude Code agents write the code in parallel, each in its own git worktree and branch, each limited to one module directory ([03](03-product-and-tech.md)).
- **The spec already exists.** The 52 requirements in [01](01-law-and-requirements.md) each carry a "Test:" line. Week 1 turns them into failing acceptance tests; agents build until they pass. This is why a 3-4 week MVP is realistic.
- **Rules that stop agents colliding:** freeze `core`, all models, migrations and service signatures at the end of week 1; one module per stream; a `BRIEF.md` per stream and a `CLAUDE.md` with conventions (French strings via gettext, no personal data in logs, tenant scoping); CI and a reviewer agent on every pull request; daily rebase ([03](03-product-and-tech.md)).

### Agent work streams

| Stream | Module | Builds | Requirements |
|---|---|---|---|
| F (week 1, founder + 1 agent) | `core`, all models | Skeleton, tenancy and row-level security, TOTP auth, roles, hash-chained audit log, all models, seed data (3 firms, 200 units, 5,000 bookings with edge cases), UI shell, CI, staging. Side task: a converter script from PMS export to the IDM CSV | R40, R47 |
| S1 Registry and import | `registry` | Unit and owner import with mapping presets, provenance, geocoding with cache and review list, commune match | R1, R2, R5 |
| S2 Rules and NER | `rules` | Rules tables with versions, daily commune sync, NER validators and lifecycle, duplicate check, cut-off and renewal fields | R3, R6-R10, R14, R49 |
| S3 Bookings and nights | `bookings` | Booking import (no guest data), night ledger with year and period splits, cap counter, forecast, alerts | R22-R24 |
| S4 Reporting | `reporting` | Periods and deadline engine, pre-checks, findings, CSV generator from config, refusal of known rejection causes, submissions with hash and versions, IDM status | R4, R28-R32, R34-R38 |
| S5 Owner portal | `owners`, `documents` (storage) | Magic links, notice with read receipt, encrypted uploads, sworn statement PDF with e-mail code signature | R11-R13, R15-R17, R48 |
| S6 Shell | `documents` (PDF), `notify`, `billing` | Dashboard, reminders, dossier PDF+ZIP, Stripe checkout and per-unit metering, public site | R39, R51, R52 |
| Q (continuous) | tests | Tenant isolation, a full-year time-travel deadline test, linters, review comments | R40, R47 |

**Reconciling capacity.** 03 runs six streams at once in weeks 2-3. It also says the founder needs 1-2 hours of review per stream per day, with four streams "comfortable" ([03](03-product-and-tech.md)). In the same weeks 04 has the founder hold 25 discovery calls and prepare the pilots' Q3 files ([04](04-gtm-company-finance.md)). That does not fit in one person's day. **I use four build streams at a time:** S1, S3, S4 and S5 in week 2; S2 and S6 join in week 3 as the first ones finish. Q runs throughout. If week 4 slips, cut billing to manual invoices (03's own fallback) and let the MVP move to Fri 13 Nov. Keep the 7 Dec launch.

### Calendar (start Mon 12 Oct 2026)

| Week | Dates | Founder: product, sales, legal | Agents | Gate |
|---|---|---|---|---|
| 1 | 12-16 Oct | 10 interviews; get "modele_import_idm.csv" and an upload log from a conciergerie with an IDM account; brief two lawyers; domain, Scaleway, GitHub | F; converter script | Template in hand; models frozen Fri 16 Oct |
| 2 | 19-23 Oct | Q3 rescue: run the converter for 3-5 conciergeries under a one-page processing agreement; 10-15 more calls | S1, S3, S4, S5; Q | Daily merges green |
| 3 | 26-30 Oct | Q3 files uploaded by **Fri 30 Oct**; owner notice and sworn statement drafts to the lawyer | S2, S6 join; four at a time | Pilots' Q3 files accepted |
| 4 | 2-6 Nov | Demo to the Q3 firms; pilot agreements | Integration; end-to-end tests on seed and anonymised pilot data | **MVP Fri 6 Nov** (internal) |
| 5 | 9-13 Nov | **LC1:** domain lawyer reviews notice, statement, letters, rules table, warnings | Hardening; help pages; billing tests | LC1 approved |
| 6 | 16-20 Nov | **LC2:** tech lawyer delivers CGV/CGU, DPA, privacy notice, sub-processor list | External security test (4-5 days); load test on 30,000 synthetic units | Test report in |
| 7 | 23-27 Nov | Pilots load real portfolios; SCALE France 25-26 Nov | Fix findings; retest | No open high or critical finding |
| 8 | 30 Nov-4 Dec | Pricing page, videos, launch e-mail | Re-registration campaign (Flow 5) if the teleservice has a date | Definition of done met |
| Launch | **Mon 7 Dec 2026** | Paid launch | Support rota | |
| Season | 4-29 Jan 2027 | Q4 2026 files for pilots and customers; aim to finish by **Fri 29 Jan** (legal due date Sun 31 Jan, §2) | On call | First real cycle done |

Christmas week (21 Dec-1 Jan) is planned light. Source: [03](03-product-and-tech.md), with the Q3 date reconciled in §2.

### MVP definition of done (checked in week 8)

1. A 30-unit firm imports units and bookings from a Superhote, Lodgify, Beds24 or Smoobu export and builds its first period file in under 45 minutes, unaided, in 3 of 4 pilot firms.
2. A file from real pilot data imports into API Meublés as "Terminé", or "Terminé avec des alertes" only for accepted findings. No rejected file.
3. Night counts match a hand count on 20 sample units, including stays across 31 Dec, across period ends, and cancellations.
4. The "Test:" lines of R1-R9, R12-R17, R22-R24, R28-R32, R34-R40, R47 and R49-R52 pass as automated tests.
5. Five test owners finish the owner flow on a phone in under 5 minutes each.
6. The deadline engine passes a full-year time-travel test for quarterly and monthly firms.
7. Tenant-isolation tests pass; no open high or critical security finding; a backup restore has been tested.
8. LC1 and LC2 are signed off; every owner-facing template shows its version and review date.
9. Card payment, invoice and VAT work end to end.
10. At least 3 pilot firms say they will pay list price after the Q4 2026 file.

Source: [03](03-product-and-tech.md).

### After launch (v1, Jan-Apr 2027)

- **Jan:** Beds24 then Smoobu API connectors (Smoobu's old API-key header stops after 31 Oct 2026, so build HMAC from the start ([Smoobu API docs][SMOOBUAPI])); Make.com hook for Superhote.
- **Feb:** direct sending with the firm's API key from a fixed IP, once the DGE spec is in hand; browser-extension listing capture.
- **Mar:** pre-filled teleservice drafts if allowed; cap closure tasks; commune nights-request letters.
- **Apr:** retention engine; copropriété notice; Lodgify and Hostaway connectors; second security test.
- **Each month:** one day of rules upkeep (new communes, caps, decrees).

### Build budget (cash, founder unpaid, EUR before VAT)

| Item | Low | High | Basis |
|---|---|---|---|
| AI coding tools for about 3 months (Claude Max plus API overflow) | 600 | 1,200 | Max at USD 100-200 a month (third-party figures; check [claude.com/pricing][CLAUDEPRICE]) ([03](03-product-and-tech.md)) |
| Hosting, domain, e-mail, error tracking, GitHub | 300 | 600 | Scaleway prices ([Scaleway][SCW]) |
| Domain lawyer (LC1) | 1,500 | 3,500 | About 6-12 hours; reviews start near 500 EUR ([Swim Legal][SWIM]) |
| Tech and data lawyer (LC2) | 1,500 | 3,000 | CGV average about 1,000 EUR; bespoke 3,000+ ([Captain Contrat][CAPTAIN]; [Swim Legal][SWIM]) |
| Security test and retest | 3,000 | 8,000 | [Kolonell][KOLONELL]; low case assumes an independent tester (unverified) |
| Pilot travel, one trade event | 300 | 1,000 | My estimate |
| Contingency (15%) | 1,100 | 2,600 | |
| **Total to paid launch** | **about 8,300** | **about 19,900** | [03](03-product-and-tech.md) |

- **I use 13,000 EUR** as the base, the value 04 put in its base model (its low and high cases use 9,000 and 17,000) ([04](04-gtm-company-finance.md)).
- **First-year development cash** is about 12,900-33,000 EUR. It adds AI tools for months 3-12, hosting, lawyer upkeep for new decrees, a second security test and insurance ([03](03-product-and-tech.md)).
- **Not included here:** marketing, the French-speaking helper, payment fees and company admin. They are in §8-§10.

---

## 8. Go-to-market

### Pricing (reconciled)

The files proposed three grids:

- the re-assessment: 2 EUR per unit, with a 29 EUR minimum ([report](../reports/france-b1.md));
- 02: 2.50 EUR, with a 19 EUR floor, falling to about 1.50 EUR above 100 units ([02](02-market-and-competition.md));
- 04: 2.50 / 2.00 / 1.50 EUR by band, with a 25 EUR minimum ([04](04-gtm-company-finance.md)).

**I use 04's grid.** It sits under Firby's 3-5 EUR per unit ([Firby][FIRBY]) and under a PMS at 3-10 EUR per unit ([comparatifchannelmanager][SUPERHOTE]). It also matches the 60 EUR average per customer that 03 and 04 both use.

| Plan | For | Price (HT unless stated) | Includes |
|---|---|---|---|
| Vérif (free) | Lead magnet | 0; up to 3 units | Number check, "is my commune on API Meublés?", night counter. No file export |
| Hôte | Private hosts, 2-10 units | 59 EUR TTC a year for 5 units, +10 EUR TTC per extra unit | Number tracker, cap counter, cut-off reminders |
| **Conciergerie** (core) | Conciergeries acting as IDM | **2.50 EUR per active unit per month** (1-50), 2.00 (51-150), 1.50 (151+). Minimum 25 EUR a month. Yearly prepaid = 10 months | Register, number lifecycle, owner portal with e-signed statement, cap watch, period CSV with pre-checks, dossier per unit, commune alerts, 3 users |
| Réseau | Agencies, franchise networks, multi-entity firms | Same unit rates + 39 EUR a month per extra legal entity; quote above 500 units | Multi-entity view, API connectors, branded owner portal, priority support |

Worked examples: 8 units = 25 EUR a month; 30 units = 75 EUR (about 29% of a Superhote bill for the same units); 100 units = 225 EUR; 200 units = 400 EUR ([04](04-gtm-company-finance.md)).

**Add-ons and discounts** ([04](04-gtm-company-finance.md)):

- **Re-registration campaign: 15 EUR per unit, one-off.** It chases each owner until the new national number is filed, captured and checked. That is under Hostcare's 39 EUR TTC filing price ([Hostcare form][HOSTCARE]). **This is the weakest price in the plan.** The owner still files, so the value is chasing and checking, not filing. Test 5-10 EUR per unit, or include it in yearly plans. Without it, base peak cash rises by about 4,900 EUR (04's sensitivity: 15,600 to 20,500).
- **Onboarding: 149 EUR**, free on yearly plans.
- **Founding offer:** 20% off year 1 for the first 100 conciergeries signed by 31 Mar 2027.
- **SNCL members:** 10% off through the union's buying group ([SNCL][SNCL]).
- **Pilots (5 firms):** free until 31 Jan 2027, then 50% off for 2027, in return for the template, data and a testimonial.
- **Lawyer review of an inspection file:** referral only. French lawyers may not pay or take referral fees, so there is no revenue share ([04](04-gtm-company-finance.md)).

**VAT on the price.** Publish HT with TTC beside it. VAT-registered buyers are invoiced HT and reverse-charge. Buyers who give no VAT number (many sole traders under the VAT franchise, and private hosts) pay 20% French VAT through OSS (§9).

### Channels, in priority order

| # | Channel | What we do | Share of new customers, year 1 (04's estimate) | CAC (04's estimate) |
|---|---|---|---|---|
| 1 | Trigger-based outbound | List from Sirene (6,370 "conciergerie" units ([Sirene search][SIRENE])) matched to the 410 communes; e-mail, LinkedIn and phone timed to deadlines and to "your commune just joined" | 35% | 150-250 EUR |
| 2 | Free tools and webinars | Commune checker, deadline calendar, number validator, a lawyer-reviewed model sworn statement; a webinar two weeks before each deadline; SEO on "API Meublés conciergerie" | 20% | 100-200 EUR |
| 3 | SNCL union | Buying-group listing; member webinar; salon stand ([SNCL][SNCL]) | 15% | 150-250 EUR |
| 4 | PMS partners | Marketplace listings (Beds24, Smoobu, Lodgify, Hostaway); white-label for small PMS without the module (Easy Concierge, Chanlify). Firby proves these marketplaces take add-ons ([Firby][FIRBY]) | 10% | 100-200 EUR |
| 5 | Compliance partners | HostLegal bundle ([HostLegal][HOSTLEGAL]); conciergerie insurers; LMNP accountants | 10% | 100-200 EUR |
| 6 | Events and trade media | SCALE France; Rental Scale-Up content (no public rate card) | 5% | 400-800 EUR |
| 7 | Lawyers who write on loi Le Meur | Co-written guides; unpaid referrals both ways | 5% | low |
| 8 | Paid search and LinkedIn | Small tests around deadlines only | <5% | 300-600 EUR |

Notes:

- **Cold e-mail to businesses is legal in France** on legitimate interest, if the message relates to the person's job and gives a simple way to object ([CNIL][CNILPROSP]). Keep a suppression list.
- **SNCL lobbies against the conciergerie duties** ([SNCL][SNCL]). Pitch the tool to the union as "proof that our members comply", not as support for the law.
- **Self-serve first:** the free Vérif plan, then a 14-day trial without a card. A 20-minute video demo in French above 50 units. The first quarterly file is checked with each new customer on a call.

### Selling calendar

- **Filing deadlines** (small firms, §2): 30 Oct, 31 Jan, 30 Apr and 30 Jul. Write to the list three and one weeks before each.
- **Seasons** (04's estimate, unverified): the coast is busy from June to early September; ski resorts from late December to March.
- **Three selling peaks:** mid-Oct to mid-Dec; mid-Jan to mid-Mar; April-May. July-August is for customer success only ([04](04-gtm-company-finance.md)).
- **Events:**
  - SCALE France, Paris, 25-26 Nov 2026, for managers of 20+ units ([Rental Scale-Up][RSUSCALE]);
  - the SNCL Salon de la conciergerie (Marseille in 2026, date not found) ([SNCL][SNCL]);
  - the FNAIM Rencontres de l'immobilier de loisirs for holiday-rental agencies, held in September (Saint-Malo, 18-19 Sep 2025) ([MySweetImmo][MYSWEET]).
- **Trigger events:** a commune joins the list; the teleservice opens; a court fines a conciergerie. Each one is a reason to write to the list.

### Marketing budget, year 1: about 14,000 EUR plus partner commissions (about 5% of subscription revenue)

| Quarter | Focus | Main spend | Budget (EUR) |
|---|---|---|---|
| Oct-Dec 2026 | Pilots, first deadline, SCALE | Landing page and free tools; French copywriter (about 300 a month); SCALE pass and Paris trip; webinar 1; CRM and outbound tools (about 100 a month) | 3,500 |
| Jan-Mar 2027 | Q4 file, re-registration wave, founding offer | Webinars 2-3; outbound waves 2-3; Google Ads test (about 500 a month in Jan and Mar); SNCL launch; trip to Nice and Annecy | 4,500 |
| Apr-Jun 2027 | Q1 file (30 Apr), pre-season | Webinar 4; Rental Scale-Up sponsored article (about 1,500, unverified); case studies; PMS listings live; LinkedIn test (about 1,000) | 4,000 |
| Jul-Sep 2027 | High season | Customer success; Q2 file support; SNCL salon stand if dated (1,000-1,500, unverified) | 2,000 |
| **Total** | | | **14,000** |

Source: [04](04-gtm-company-finance.md). Years 2 and 3: about 14,000 and 15,000 EUR. This excludes the French-speaking helper, who is a separate line in §10.

### First 90 days (Mon 12 Oct 2026 to Sat 9 Jan 2027)

**Days 1-19 (12-30 Oct): pilots, set-up, first files.**
- Find 5 pilots that already have an IDM account (Paris, Alpes-Maritimes, Var, Haute-Savoie). Prepare their Q3 2026 file free with the converter script, uploaded by **Fri 30 Oct**. Get the template.
- Hold 25-30 discovery calls. Test 2.50 EUR per unit and the re-registration add-on at 5, 10 and 15 EUR.
- Engage both lawyers. Open Stripe with Billing and Tax; confirm OSS access in the home state; register a .fr domain (open to EU, EEA and Swiss companies ([AN answer QE 37916][AFNIC])).
- French landing page with a waitlist and the free commune checker.

**Days 20-28 (31 Oct-8 Nov): MVP and pipeline.**
- MVP demo Fri 6 Nov.
- Build the lead list (Sirene "conciergerie" units matched to the 410 communes) and write the CNIL information notice for prospects.
- Contact SNCL (buying group, webinar), HostLegal (bundle), and Beds24, Smoobu and Lodgify (marketplace listing).

**Days 29-56 (9 Nov-6 Dec): trust.**
- Security test and lawyer sign-off.
- SCALE France 25-26 Nov, with 10 meetings booked in advance.
- Webinar 1 with a partner lawyer (about 1 Dec): "Loi Le Meur : le dossier de conformité de la conciergerie".
- Outbound wave 1: 500 conciergeries in the API Meublés communes. Open the founding offer.

**Days 57-90 (7 Dec-9 Jan): paid launch.**
- Paid launch Mon 7 Dec. Convert the pilots. **Target 6-8 paying by 31 Dec.**
- If the teleservice opens, launch the re-registration campaign within 48 hours.
- Webinar 2 (about 7 Jan): "Déclaration T4 2026 : tout envoyer avant le 31 janvier".
- Outbound wave 2: 700 more conciergeries. No outreach 21 Dec-3 Jan.
- **Day-90 review** against §13: continue, re-price or stop.

**KPIs every month:** trials started; trial-to-paid (target 25%); paying conciergeries; units under management; MRR; share of customers who filed the last period with the tool (target 90%); logo churn (target under 2% a month); blended CAC (target under 350 EUR in my base, §10); partner-sourced share (target 30% by month 12).

---

## 9. Payments, company and legal

### Verdict: sell from the founder's own company abroad; no French company is needed to start

The files agree on this ([04](04-gtm-company-finance.md); [03](03-product-and-tech.md)). The answer depends on where the founder's company is.

**A. The founder's company is in the EU (recommended set-up).**

- **Cards work.** French cards are Cartes Bancaires (CB), and more than 95% are co-badged with Visa or Mastercard. Any EU Stripe account can accept CB, subscriptions included. A non-French account must process one CB payment before CB is fully enabled. CB disputes cost 0 EUR ([Stripe docs][STRIPECB]).
- **Use Stripe Billing and Stripe Tax, plus SEPA Direct Debit.** Stripe's French price list ([Stripe pricing][STRIPE]):
  - EEA cards: 1.5% + 0.25 EUR;
  - SEPA Direct Debit: 0.35 EUR;
  - Billing: 0.7%;
  - Tax: 0.5%.

| Charge | Stripe card + Billing + Tax | Stripe SEPA debit | Paddle (5% + USD 0.50) |
|---|---|---|---|
| 25 EUR a month (minimum) | 0.93 EUR (3.7%) | 0.65 EUR (2.6%) | about 1.68 EUR (6.7%) |
| 75 EUR a month (30 units) | 2.28 EUR (3.0%) | 1.25 EUR (1.7%) | about 4.18 EUR (5.6%) |
| 750 EUR a year (30 units) | 20.50 EUR (2.7%) | 9.35 EUR (1.2%) | about 37.93 EUR (5.1%) |

Source: 04's arithmetic from [Stripe pricing][STRIPE] and [Paddle pricing][PADDLE]. A merchant of record would cost about 2-4 points of revenue more. For an EU seller, OSS solves the same problem more cheaply ([04](04-gtm-company-finance.md)).

- **VAT.**
  - A buyer with a valid French VAT number gets an HT invoice and reverse-charges ([Bpifrance Création][BPI]).
  - A sole trader under the VAT franchise would have to get an intra-EU number and pay the reverse-charged VAT with no deduction ([Bpifrance Création][BPI]). So do not ask such buyers for a number. Charge them 20% French VAT through the home state's OSS. EU rules let a supplier treat a buyer who gives no VAT number as a non-taxable person (Implementing Regulation 282/2011 art. 18(2) ([Regulation 282/2011][EUR282]); wording not re-read, per 04).
  - The franchise threshold stays at 37,500 EUR for services in 2026, so many small conciergeries are in it ([LegiFiscal][LEGIFISCAL]).
  - No French VAT registration is needed ([Fonoa][FONOA]).
- **E-invoicing.** France's reform covers businesses established in France. A foreign seller keeps sending PDF invoices ([Tiime][TIIME]).
- **Ongoing cost of selling from abroad.** Stripe has no fixed monthly fee ([Stripe pricing][STRIPE]). The extra work is a quarterly OSS return and bookkeeping in the home country. 04's model allows about 300 EUR a quarter for this (my estimate there; it depends on the country).
- **Withholding tax.** Art. 182 B CGI imposes a 25% withholding on services used in France and paid to a non-resident ([Advizexperts][ADVIZ]). A tax treaty normally removes it for a standard online service (04's reading, unverified for each treaty). Put the company's tax residence certificate in the help centre. In the terms, describe the fee as a standard online service with no licence of intellectual property. Do not sell from a non-treaty or non-cooperative country.

**B. The founder's company is outside the EU (UK, US or other).**

- **Use Paddle as merchant of record** (5% + 50 cents per transaction; it handles VAT and B2B invoices) ([Paddle pricing][PADDLE]). The alternative is the non-Union OSS, which has no threshold for consumer sales ([Fonoa][FONOA]).
- **GDPR.** French customers' contracts impose art. 28 processor duties. The company may also need an EU representative under art. 27; the scope for processors is debated (unverified) ([GDPR]; [03](03-product-and-tech.md)). Support access from a country without an EU adequacy decision needs standard contractual clauses. The LC2 lawyer should confirm this.
- **The .fr domain** is open only to companies in the EU, EEA or Switzerland ([AN answer QE 37916][AFNIC]). Use a .com, or open an EU entity.

### When to open a French company

Open one only if one of these happens ([04](04-gtm-company-finance.md)):

1. The DGE gives machine API access only to providers with a French SIRET (unverified; ask in month 1).
2. Franchise heads or public bodies insist on a French supplier (unverified).
3. The business hires staff in France.
4. Revenue passes about 300,000 EUR a year and local presence clearly helps sales (my estimate).
5. The founder's company is outside the EU, and the .fr domain or EU partners matter.

### If a French company is needed: SASU costs

- **There is no in-person option.** Since 1 Jan 2023 registration is online only, through the INPI "guichet unique" ([Copeps][COPEPS]).
- **The real choice** is doing it yourself online or paying a lawyer or accountant to do it remotely.
- **A non-resident** can be the sole shareholder and the president ([Socic, non-residents][SOCICNR]).

| Item | Yourself, online (official fees) | Lawyer or accountant, remotely |
|---|---|---|
| Greffe registration (RCS, Kbis) | 33.83 EUR TTC ([LegalPlace][LEGALPLACE]) | included |
| Beneficial-owner declaration | 19.33 EUR ([LegalPlace][LEGALPLACE]) | included |
| Legal notice (annonce légale) | 142 EUR HT in mainland France ([LegalPlace][LEGALPLACE]) | included |
| Statutes | own draft, or an online service for 0-99 EUR HT plus fees ([LegalPlace][LEGALPLACE]) | 500-1,500 EUR ([Socic][SOCIC]) |
| Full service | online platforms 200-500 EUR all-in ([LegalPlace][LEGALPLACE]) | 1,000-2,000 EUR ([LegalPlace][LEGALPLACE]); 800-2,000 EUR ([Socic][SOCIC]) |
| Minimum capital | 1 EUR ([LegalPlace][LEGALPLACE]) | same |
| **Total to create** | **about 230-500 EUR** | **about 1,000-2,500 EUR** |

- **Time:** 1-3 weeks once the bank deposit certificate and a domiciliation contract exist (unverified). Some online banks may refuse a non-resident president (unverified).
- **Running costs, no salary:**
  - accountant: 300-600 EUR (automated) or 900-2,000 EUR (normal);
  - domiciliation: 300-960 EUR;
  - bank: 0-360 EUR;
  - liability insurance: 100-800 EUR;
  - CFE: 0 in year 1, then 150-500 EUR;
  - filing the accounts: 45-50 EUR.
  - **Total: about 1,500-3,500 EUR a year** ([Socic][SOCIC]).
- **Corporate tax** is 25%. The 15% rate on the first 42,500 EUR applies only to firms at least 75% owned by individuals. A SASU owned by the founder's foreign company would not get it ([Compteo][COMPTEO]).
- **E-invoicing.** A French SASU would have to issue e-invoices through an approved platform from Sep 2027 ([Socic, e-invoicing][SOCICEINV]).

### Legal documents before paid launch (all in French; tech lawyer, LC2)

1. CGV/CGU (B2B terms of sale and use).
2. DPA (GDPR art. 28): the conciergerie is the controller; we are its processor.
3. Owner-facing privacy notice in the portal.
4. Sub-processor list and privacy policy.
5. Partner agreements: referral (20% of first-year revenue) and a white-label licence ([04](04-gtm-company-finance.md)).

### Key clauses

- **Who does what.** The customer is the intermediary and keeps its legal duties. The tool prepares, checks and stores. The customer approves each file. We never file a host declaration for an owner.
- **Liability cap** at the fees paid in the last 12 months, with fines excluded. Two French limits apply. A clause that empties the supplier's essential obligation is deemed unwritten (Code civil art. 1170). A cap does not cover gross or wilful fault (art. 1231-3) ([Code civil][CODECIV]). So keep a real promise in place: "the file matches the data you approved and the published format".
- **Rule changes.** 03 says rules are updated within 15 working days; 04 suggests "for example 30 days after publication". **Use 15 working days as the internal target and promise 30 days in the terms.** Never promise "conformité garantie".
- **Payment terms.** Invoices show the late-payment rate and the 40 EUR recovery indemnity (Code de commerce L441-10) ([Code de commerce][CODECOM]).
- **Switching.** Since 12 Sep 2025 the EU Data Act lets SaaS customers switch with at most two months' notice ([Bird & Bird][BIRD]). Whether a micro supplier is exempt is unverified. Offer a free full export at any time; refund unused yearly months minus a stated, proportionate fee.
- **Law and courts:** French law, Paris courts. French buyers trust it.

**Insurance.** Professional liability plus cyber, covering errors in delivered files. One broker guide puts software-publisher cover at 2,000-6,000 EUR a year and says to check that damage from AI-built solutions is covered ([Companeo][COMPANEO]). A very small firm may pay 300-1,500 EUR ([Swim Legal][SWIMINS]). The model uses 300 EUR a quarter. Tell the insurer the code is written with AI agents, and get the cover in writing.

---

## 10. Financials

### Which model I use, and why

04 built a full 36-month model. Its base reaches 160 paying conciergeries and 132,000 EUR ARR at month 36 ([04](04-gtm-company-finance.md)). I do not use that as the base, for three reasons:

1. **The pool is 1,000-2,000 conciergeries today (§3).** 04's base signs 218 new customers in 36 months. That is 11-22% of today's pool ever signing, and 8-16% paying at month 36.
2. **02's independent view is lower:** 75-150 customers and about 90,000 EUR ARR ([02](02-market-and-competition.md)).
3. **No conciergerie has yet been heard complaining about API Meublés,** and no fine for a missed file has been reported ([02](02-market-and-competition.md); [01](01-law-and-requirements.md)).

**So the base here is 04's own "30% fewer new customers" sensitivity:** 112 customers at month 36, year-3 profit 28,700 EUR and peak cash 17,900 EUR ([04](04-gtm-company-finance.md)). It matches 02's figure. 04's base becomes the "good" case. The base's year-1 and year-2 figures below are my scaling of 04's base by 0.7 on revenue. Costs stay almost fixed.

### Scenarios (EUR, before founder pay and corporate tax)

| Measure | Low (04) | **Base (used here)** | Good (04's base) | High (04) |
|---|---|---|---|---|
| Paying conciergeries at month 12 / 24 / 36 | 25 / 47 / 61 | **about 42 / 81 / 112** | 60 / 116 / 160 | 104 / 211 / 302 |
| ARR at month 12 / 24 / 36 | 15,000 / 29,000 / 38,000 | **about 32,000 / 65,000 / 92,000** | 46,000 / 93,000 / 132,000 | 99,000 / 211,000 / 320,000 |
| Revenue, year 1 / 2 / 3 | 12,000 / 26,000 / 37,000 | **about 27,000 / 56,000 / 87,000** | 38,000 / 80,000 / 124,000 | 81,000 / 176,000 / 290,000 |
| Profit, year 1 / 2 / 3 | -24,900 / -4,100 / +1,600 | **about -18,000 / +8,000 / +28,700** | -7,800 / +30,300 / +60,900 | +23,600 / +101,900 / +191,600 |
| Peak cash need | about 29,000 | **about 18,000** (04: 17,900) | about 15,600 | about 18,500 |
| Cumulative cash turns positive | not within 36 months | **around months 28-30** | months 16-18 | months 7-9 |

Base figures other than month 36 and peak cash are my estimates.

**Main assumptions** (04's base; details in [04](04-gtm-company-finance.md)):

- logo churn 2% a month;
- 60 EUR a month per conciergerie in year 1, growing 5% a year;
- re-registration add-on bought by 50% of new and 15% of existing customers in Jan-Sep 2027, at 20 units × 15 EUR;
- onboarding fee from 25% of new customers;
- about 190 Hôte sign-ups in 3 years;
- launch budget 13,000 EUR;
- AI tools 450 EUR a quarter;
- hosting 300 EUR a quarter plus 1.50 EUR per customer;
- payment fees 3.2%;
- lawyer, insurance and foreign-company admin 1,100 EUR a quarter;
- security retest 2,500 EUR a year;
- marketing 14,000 / 14,000 / 15,000 EUR, plus 5% partner commissions;
- a French-speaking helper at 1,200 EUR a month from Apr 2027, rising to 2,500 EUR.

**Sensitivities** (04, on its own base):

| Change | Customers, month 36 | Year-3 profit | Peak cash |
|---|---|---|---|
| None (04's base) | 160 | 60,900 | 15,600 |
| No re-registration add-on | 160 | 60,900 | 20,500 |
| Churn 3.5% a month (a PMS ships the feature) | 129 | 44,400 | 15,700 |
| 45 EUR a month per customer instead of 60 | 160 | 34,700 | 16,400 |
| 30% fewer new customers (**this plan's base**) | 112 | 28,700 | 17,900 |

**If the founder is not fluent in French**, the helper starts in month 1, not month 7. That adds about 3,600 EUR a quarter for two quarters ([04](04-gtm-company-finance.md)) and lifts base peak cash to about 25,000 EUR (my arithmetic).

### Unit economics (base, my estimates)

- **Gross margin about 92%.** Hosting, AI tools and payment fees are about 5-8% of revenue ([04](04-gtm-company-finance.md)).
- **Lifetime value** about 2,760 EUR (60 × 92% ÷ 2% churn).
- **Acquisition cost.** On marketing and commissions alone, CAC is about 330-370 EUR. That is 04's 230-260 EUR divided by 0.7, because the same spend buys 30% fewer customers. With the helper's cost it is about 500-900 EUR.
- **LTV to CAC** is about 3-8, and payback about 6-15 months.

### What it means

- **Cash.** The base needs about 18,000 EUR, mostly before launch (25,000 EUR with a French helper from day 1).
- **Founder income.** By year 3 the base pays the founder about 2,400 EUR a month. With a 3,000 EUR monthly founder pay it would still lose money in year 3 (my arithmetic). It is side income or a sale, unless the good case happens.
- **Value at month 36.** Small SaaS sells for about 2.5-4 times ARR, or 4-6 times owner earnings ([beancount.io][BEAN], one source).
  - Base: about 230,000-370,000 EUR on ARR, but only about 115,000-170,000 EUR on earnings.
  - Good case: about 330,000-530,000 EUR on ARR.
  - **A sale to a PMS vendor in months 12-24** is the more likely exit, before the vendors build the feature themselves (02 puts the window at 12-18 months). Likely buyers: Superhote, Biloki, Lodgify, Hostaway, Beds24; Guesty, which bought the French PMS Smily ([PhocusWire][PHOCUS]); and Chekin ([04](04-gtm-company-finance.md)).
- **The low case does not justify continuing.** The kill criteria in §13 catch it by month 6-12, before about 25,000 EUR is spent.

---

## 11. Regional expansion

**Sell France first, and go deeper there before going abroad.** The EU Regulation 2024/1028 puts the data duty on platforms ([European Commission][EUCOM]). France extended it to every intermediary ([DGE]). I found no other state that did the same (unverified, from [02](02-market-and-competition.md)). So the quarterly file is a French product.

| Order | Market | What travels | Notes | When |
|---|---|---|---|---|
| 1 | All of France, as communes join API Meublés | Everything | 410 communes today; Bordeaux, Cannes, Chamonix, Ajaccio and Arcachon were not on the list on 10 Oct 2026 ([communes endpoint][APICL]; [01](01-law-and-requirements.md)). Each new commune creates new obliged conciergeries at no extra cost | Continuous; the main growth engine |
| 2 | More duties for the same French buyer | Same customers | Change-of-use tracking in Paris, Lyon and other tight cities (the source of the 70,000 EUR fines ([Simonnet Avocat][SIM])); taxe de séjour per-stay lines (CGCT L2333-34 ([CGCT])); the guest police form through a Chekin integration, not our own build ([Chekin][CHEKIN]). Could lift the price from about 2.50 to 3.50 EUR per unit (unverified) | v1-v2 (2027) |
| 3 | French-speaking Belgium | Register and proof file only | Brussels requires registration and a number on listings (unverified). Wallonia is drafting rules ([Belgian DPA opinion 113/2026][APD]). Duties on managers are unverified | Year 2 at the earliest |
| 4 | Italy, Portugal | Partner only | Italy's CIN is a one-off code; Portugal keeps RNAL. Guest-registration tools already own the compliance budget ([02](02-market-and-competition.md)) | Partnership only |
| 5 | Spain | Nothing | The Supreme Court annulled the national NRUA register in May 2026 ([notariosyregistradores][NOTARIOS]). A rule-driven product can lose its rule overnight | Not a market |
| 6 | Switzerland | Little | Geneva and Vaud keep host and traveller registers; no number on listings or manager reporting found ([02](02-market-and-competition.md)) | Not planned |

Regional expansion is **not** in the financial model. It is upside only.

---

## 12. Risks and mitigations

| # | Risk | Likelihood / impact | Mitigation |
|---|---|---|---|
| 1 | **A PMS ships an API Meublés export.** Easy Concierge has it "en préparation"; Biloki has a number register and night counter ([Easy Concierge][EASY]; [Biloki][BILOKI]) | High / high | Stay PMS-agnostic; make the owner workflow and proof file the core; offer white-label to small PMS; sell early; keep the asset-sale exit open |
| 2 | **The pain is not felt yet, or the conciergerie duty is not enforced.** Platform data may be judged enough (unverified). SNCL and UNPLV lobby against the rules ([SNCL][SNCL]; [Tendance Hôtellerie][TH]). Medium-sized towns lack staff to use the platform ([AN QE 14825][ANQE]) | Medium / high | The day-19 and day-30 kill criteria test this before real money is spent. The proof file and cap watch also defend against change-of-use and cap fines, which courts do impose ([Simonnet Avocat][SIM]; [Kohen Avocats][KOHJ]) |
| 3 | **The DGE says conciergeries need not report nights booked through Airbnb or Booking** (01's open question 6) | Medium / high | Ask the DGE in week 1. If so, re-plan around the proof file, the owner workflow and the cap watch, and re-price |
| 4 | **The pool stays small** (communes join slowly) | Medium / medium | Commune-join triggers; agencies with seasonal rentals; the Hôte plan; more duties for the same buyer (§11) |
| 5 | **Chekin or another compliance tool enters France** at 3.95-7.95 EUR per property ([Chekin][CHEKIN]) | Medium / medium | Integrate rather than fight; price below; focus on the French intermediary duties it does not cover |
| 6 | **The teleservice slips again, or opens with easy agent features** ([DGE]; [SP]) | Medium / medium | Sell the recurring file, not the wave. Without the add-on, peak cash rises by about 4,900 EUR (§10) |
| 7 | **The CSV template is unknown or changes; the machine API is closed to vendors** ([API Meublés app code][APP305]) | Medium / medium | Template from a pilot in week 1; column mapping in config; upload by the user in the MVP; a test file each quarter; ask the DGE about vendor access |
| 8 | **The legal reading changes the counts** ("jours" or nights; stays across month ends) | Medium / medium | Both readings as config switches; lawyer opinion; show the basis on every file |
| 9 | **A wrong file exposes a customer to fines** | Low / high | Pre-checks; admin approval of every file; evidence log; liability cap within art. 1170 limits; insurance |
| 10 | **AI-written code has security flaws** (tax notices, identity data) | Low / high | Test-first; reviewer agent; SAST; no production data with agents; external test before launch; founder line-by-line review of sensitive modules; insurance that covers AI-built software ([Companeo][COMPANEO]) |
| 11 | **The founder's review time is the bottleneck** | High / medium | Four build streams at a time; small pull requests; strict module boundaries |
| 12 | **The founder is abroad and not fluent in French** | Medium / high | French-speaking helper from month 1 (+7,200 EUR); lawyer partners; trips at deadlines |
| 13 | **Buyers churn** (478 conciergerie closures in 2025 ([Majordia][MAJ])) | High / medium | Target firms with 10+ units; yearly plans; network deals; win the buyers of closing firms |
| 14 | **The state improves its own IDM tool** | Low-medium / medium | The state will not build owner workflows or multi-PMS imports; keep those at the core |
| 15 | **VAT or withholding errors** | Medium / low | Stripe Tax; VIES checks; OSS from day 1; residence certificate in the help centre |
| 16 | **Seasonal cash** (few sales June-September) | Certain / low | Spend around the three selling peaks; push yearly plans in the low season |

Sources: [03](03-product-and-tech.md); [04](04-gtm-company-finance.md), merged and re-ranked.

---

## 13. Milestones and kill criteria

Targets are for this plan's base. 04's targets, kept as the "good" column, are about 1.4 times higher. Dates follow §2 (30 Oct, not 31 Oct).

| Date | Base target | Good case (04) | Kill or change trigger |
|---|---|---|---|
| **Fri 30 Oct 2026 (day 19)** | 3+ pilots with an IDM account; their Q3 files prepared with the converter; the CSV template in hand | same | **Fewer than 3 conciergeries with an IDM account found.** The duty is not yet live in practice: pause sales, keep spend under about 2,000 EUR, re-test in January |
| **Tue 10 Nov 2026 (day 30)** | 5+ written pre-commitments from 30 conversations | same | **Fewer than 3: re-price or stop** |
| Fri 6 Nov / Mon 7 Dec 2026 | MVP / paid launch | same | Launch slips past Fri 15 Jan 2027 (misses the first deadline): cut scope |
| Sun 31 Jan 2027 | 18+ paying; 80% of them filed Q4 2026 with the tool | 25+ | **Fewer than 10 paying: stop or sell the code** |
| Fri 30 Apr 2027 | 32+ paying; trial-to-paid 20%+ | 45+ | Fewer than 20: stop paid marketing; run it as a side product |
| Thu 30 Sep 2027 (month 12) | 42+ paying; MRR 2,500+ EUR; churn 2.5% a month or less | 60+; MRR 3,600+ | **Fewer than 30 paying or MRR under 1,800 EUR: stop, or sell to a PMS** |
| Sat 30 Sep 2028 (month 24) | 80+ paying; ARR 65,000+ EUR | 115+; ARR 90,000+ | Fewer than 60: stop investing; maintenance mode or sale |
| Sun 30 Sep 2029 (month 36) | 112+ paying; ARR 90,000+ EUR | 160+; ARR 130,000+ | Below 100: plan the exit |

**Standing triggers, at any time** ([04](04-gtm-company-finance.md), plus one from §12):

- Superhote, or two other top-5 PMS among French conciergeries, ship a free API Meublés export **and** quarterly churn passes 10% for two quarters in a row.
- The intermediary data duty (L324-2-1) is repealed or suspended.
- The lawyers find that the core output exposes the vendor to liability that insurance will not cover.
- The DGE says conciergeries without their own booking site need not report platform bookings: re-plan within 30 days (§12, risk 3).

---

## 14. Open questions to settle first

1. **The founder.** Does he speak business-level French? Is his company in the EU? The answers set the helper's start date (§10) and Stripe or Paddle (§9).
2. **Practice today.** How many conciergeries have an IDM account, and how do they send data now? The DGE does not publish the count. Ask pilots, and ask the DGE (api-meubles.dge@finances.gouv.fr, per 02).
3. **The file.** What are the columns, order and size limit of "modele_import_idm.csv"? Is one row one NER × listing URL × month? Does the DGE count nights or days, and how are stays across month ends split ([03](03-product-and-tech.md))?
4. **Double reporting.** Must a conciergerie report nights booked through Airbnb or Booking when the platform also reports them ([01](01-law-and-requirements.md))? This decides how much of the file's value survives.
5. **Vendor access.** May one software vendor send for many IDMs with their API keys from one IP? Is a French SIRET needed?
6. **Teleservice.** When does it open? How long is the transition? Will it accept a mandate, or allow pre-filled drafts ([pre-fill API][DNPRE])?
7. **PMS plans.** Do Superhote, Biloki and Easy Concierge plan an export, and when? Would any of them white-label instead?
8. **Legal checks.** Is a simple e-signature with an e-mail code enough for the "déclaration sur l'honneur"? Will an insurer cover software written with AI agents, and at what price?
9. **Channels.** SNCL's buying-group terms, member count and salon date; SCALE France pass and sponsor prices.
10. **Tax.** Does the treaty between France and the founder's country treat a SaaS fee as business profits? Is a micro supplier exempt from the Data Act switching rules?

---

## 15. Next steps this week (Mon 12 - Fri 16 Oct 2026)

1. **Answer question 1** (French and company). If the company is in the EU: confirm OSS access and open Stripe with Billing, Tax and SEPA debit. If not: open Paddle.
2. **Recruit pilots.** Pull Sirene "conciergerie" units in Paris, Alpes-Maritimes, Var and Haute-Savoie and match them to the 410 communes. Send 40-50 messages and book 10 calls. Ask each firm whether it has an IDM account and how it will file Q3.
3. **Write to the DGE** through the contact form ([DGE contact form][DNC]) with questions 3-5.
4. **Get fixed-fee quotes** from a meublés-de-tourisme lawyer (LC1, week 5) and a tech and data lawyer (LC2, week 6). Book a security tester for week 6.
5. **Start the build.** Repository, `CLAUDE.md`, a `BRIEF.md` for each of S1-S6, the foundation and seed data. Freeze the models on Fri 16 Oct. Have the converter script ready for week 2.
6. **Publish a French landing page** with the free commune checker and a waitlist.
7. **Book a SCALE France pass** (25-26 Nov) and write to SNCL.
8. **Set the spending gate.** Spend no more than about 2,000 EUR before the day-19 check (§13).

---

## Sources

Every bracketed source in the text is a clickable link. The link targets are defined below; they show in the Markdown source and are hidden when the page is rendered. All were cited by the four section files, except the e-Justice page on deadlines and the DGE wording in §2, which came from the two searches run for this page on 10 Oct 2026. Each section file lists its full sources.

<!-- Law and state systems -->

[CT]: https://codes.droit.org/PDF/Code%20du%20tourisme.pdf
[CCH]: https://codes.droit.org/PDF/Code%20de%20la%20construction%20et%20de%20l%27habitation.pdf
[CGCT]: https://codes.droit.org/PDF/Code%20g%C3%A9n%C3%A9ral%20des%20collectivit%C3%A9s%20territoriales.pdf
[CODECIV]: https://codes.droit.org/PDF/Code%20civil.pdf
[CODECOM]: https://codes.droit.org/PDF/Code%20de%20commerce.pdf
[LOI]: https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000050612712
[D196]: https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053703509
[D196A6]: https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053703536
[EU]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1028
[EUCOM]: https://transition-pathways.europa.eu/construction/news-publications/short-term-rentals-eu-transparency-rules-now-force
[GDPR]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679
[EUR282]: https://eur-lex.europa.eu/eli/reg_impl/2011/282/oj/fra
[EJ641]: https://e-justice.europa.eu/topics/court-procedures/civil-cases/time-limits-procedures/fr_fr
[DGE]: https://www.entreprises.gouv.fr/espace-entreprises/s-informer-sur-la-reglementation/lapi-meubles-guichet-unique-de-centralisation
[SP]: https://www.service-public.gouv.fr/particuliers/actualites/A18880
[PARIS]: https://www.paris.fr/en/pages/furnished-vacation-rentals-rules-to-follow-34993
[P90]: https://www.paris.fr/pages/location-limitee-a-90-jours-paris-serre-la-vis-sur-les-meubles-touristiques-29653
[ANQE]: https://questions.assemblee-nationale.fr/q17/17-14825QE.htm
[AFNIC]: <https://www2.assemblee-nationale.fr/questions/detail/15/qe/37916/(vue)/pdf>
[APICL]: https://apimeubles.finances.gouv.fr/api/grand-public/communes-list
[APIST]: https://apimeubles.finances.gouv.fr/api/grand-public/statistiques
[APIEX]: https://apimeubles.finances.gouv.fr/api/grand-public/export
[APP7]: https://apimeubles.finances.gouv.fr/7.67f55a60e49ad2ec.js
[APP190]: https://apimeubles.finances.gouv.fr/190.4c12ffe223e5de0a.js
[APP305]: https://apimeubles.finances.gouv.fr/305.6ed354c7ad3673e8.js
[APP542]: https://apimeubles.finances.gouv.fr/542.74107fce698fecda.js
[DN]: https://demarche.numerique.gouv.fr/commencer/db2338ad-4575-44c2-9728-505b529d1b68
[DNC]: https://demarche.numerique.gouv.fr/commencer/api-meubles-contact
[DNPRE]: https://www.data.gouv.fr/dataservices/api-de-preremplissage-dun-dossier-de-demarche-numerique
[GEOPF]: https://www.data.gouv.fr/dataservices/api-geoplateforme-geocodage/discussions
[RECH]: https://recherche-entreprises.api.gouv.fr/
[SIRENE]: https://recherche-entreprises.api.gouv.fr/search?q=conciergerie&etat_administratif=A
[SVAIR]: https://www.economie.gouv.fr/particuliers/authenticite-avis-impot-svair
[CNILGUIDE]: https://www.cnil.fr/sites/default/files/atoms/files/rgpd-guide_sous-traitant-cnil.pdf
[CNILPROSP]: https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique-sms-mms-et-automate-dappel
[APD]: https://www.autoriteprotectiondonnees.be/index.php/publications/avis-n0-113-2026.pdf
[BPI]: https://bpifrance-creation.fr/encyclopedie/fiscalite-lentreprise/tva/tva-prestations-services-lunion-europeenne

<!-- Enforcement, lawyers and trade -->

[SIM]: https://www.simonnetavocat.fr/conciergerie-de-location-touristique-condamnee-responsabilite-et-recours-du-proprietaire/
[KOH]: https://kohenavocats.fr/2026/05/25/contrat-conciergerie-airbnb-amende-annonce-irreguliere-20-mai-2026/
[KOHJ]: https://kohenavocats.fr/2026/07/16/conciergerie-airbnb-condamnee-paris-amende-changement-usage-2026/
[RSU]: https://www.rentalscaleup.com/fr/pres-de-1-million-deuros-damendes-airbnb-a-paris-en-trois-mois-le-renforcement-de-la-reglementation-en-france-saccelere/
[RSUSCALE]: https://www.rentalscaleup.com/fr/scale-france-2026-cinq-ans/
[SNCL]: https://reseauclf.fr/
[TH]: https://www.tendancehotellerie.fr/articles-breves/communique-de-presse/19798-article/l-unplv-donne-la-parole-aux-hebergeurs-francais-pour-contribuer-collectivement-a-une-revision-plus-equilibree-des-regles-encadrant-le-secteur-de-la-location-touristique
[MYSWEET]: <https://www.mysweetimmo.com/2025/07/18/rendez-vous-a-saint-malo-les-18-et-19-septembre-pour-les-22ᵉ-rencontres-de-limmobilier-de-loisirs/>
[NOTARIOS]: https://www.notariosyregistradores.com/web/participa/noticias/el-ts-anula-registro-arrendamientos-corta-duracion/

<!-- Market and competitors -->

[MAJ]: https://www.majordia.fr/ressources/observatoire-conciergeries-lcd
[XERFI]: https://www.xerfi.com/blog/conciergeries-airbnb-un-marche-en-plein-essor-bouscule-par-la-loi-le-meur_2321
[LIV]: https://livretaccueil.com/en/etude-marche-conciergerie-locative-2026
[HACAD]: https://www.hosting-academy.fr/ressources/metiers/domaines/location-de-courte-duree
[IMMO]: https://www.immomatin.com/franchise/reseaux-franchise/immobilier-15-847-cartes-professionnelles-delivrees-par-les-cci-en-2025-par-rapport-a-2024.html
[RENTAPLUS]: https://rentaplus.immo/blog/logiciel-conciergerie-airbnb-5-20-logements/
[SMOOBU]: https://www.smoobu.com/fr/?p=63976
[SUPERHOTE]: https://comparatifchannelmanager.fr/?p=2312
[CHANLIFY]: https://chanlify.fr/comparatif-channel-managers-2026
[BILOKI]: https://blog.biloki.fr/fr/blog/api-meubles-proprietaire-airbnb-abritel-guide-2026
[EASY]: https://easy-concierge.fr/
[CHEKIN]: https://chekin.com/en/pricing/
[HOSTLEGAL]: https://www.hostlegal.fr/
[HOSTCARE]: https://form.jotform.com/260773313676361
[FIRBY]: https://firby.fr/
[PHOCUS]: https://www.phocuswire.com/news/online/guesty-acquires-smily-expand-french-str-market
[BEAN]: https://beancount.io/fr/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide

<!-- Product and technical -->

[SMOOBUAPI]: https://docs.smoobu.com/
[SUPERHOTEAPI]: <https://help.superhote.com/support/solutions/articles/150000053090-intégrer-l-api-rest-de-superhote-pour-récupérer-les-disponibilités-ou-créer-des-réservations->
[BEDS24]: https://wiki.beds24.com/index.php/Guest_Services:_How_to_connect_to_Beds24_using_API_V2
[SCW]: https://www.scaleway.com/en/pricing/virtual-instances/
[SCWDB]: https://www.scaleway.com/en/pricing/managed-databases-pricing/
[KOLONELL]: https://kolonell.com/fr/blog/pentest-application-web-avant-lancement-prix-2026
[CLAUDEPRICE]: https://claude.com/pricing
[SWIM]: https://www.swim.legal/blog/avocat-cgv-guide-pratique-securiser-conditions-generales-vente
[CAPTAIN]: https://www.captaincontrat.com/articles-droit-commercial/combien-coute-redaction-cgv
[COMPANEO]: https://www.companeo.com/assurance-rc-pro/actualites/assurance-rc-pro-informatique
[SWIMINS]: https://www.swim.legal/blog/assurance-entreprise-prix

<!-- Payments, tax and company -->

[STRIPE]: https://stripe.com/fr/pricing
[STRIPECB]: https://docs.stripe.com/payments/cartes-bancaires.md?platform=web
[PADDLE]: https://www.paddle.com/pricing
[FONOA]: https://www.fonoa.com/resources/country-tax-guides/france/tax-on-digital-services
[LEGIFISCAL]: https://www.legifiscal.fr/actualites-fiscales/4289-adoption-definitive-texte-seuils-franchise-base-tva.html
[TIIME]: https://blog.tiime.fr/facture-electronique-etranger
[ADVIZ]: https://advizexperts.fr/code-general-impots/article-182-b-cgi-retenue-source-non-residents/
[COPEPS]: https://copeps.fr/actualites/immatriculation-au-registre-du-commerce-et-des-societes-rcs-obligatoire/
[SOCICNR]: https://www.socic.fr/ressources-comptabilite/articles/creer-une-sasu-en-france-depuis-letranger-conditions-fiscalite-et-obligations-du-non-resident-fiscal-francais
[LEGALPLACE]: https://www.legalplace.fr/guides/cout-creation-sasu/
[SOCIC]: https://www.socic.fr/ressources-comptabilite/articles/cout-dune-sasu-par-an-en-2026-frais-fixes-greffe-comptable-assurance-banque-cfe-et-budget-reel-a-prevoir
[SOCICEINV]: https://www.socic.fr/ressources-comptabilite/articles/facturation-electronique-obligatoire-2026-2027-calendrier-plateformes-agreees-e-reporting-et-checklist-tpe-pme
[COMPTEO]: https://www.compteo.fr/blog/taux-reduit-is
[BIRD]: https://www.twobirds.com/da/insights/2025/the-data-act-what-mandatory-switching-rights-mean-for-fixed-term-saas-models
