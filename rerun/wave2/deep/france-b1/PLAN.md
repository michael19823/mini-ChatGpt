# France: compliance file and API Meublés reporting for conciergeries — full plan

The original idea was a "tourist-rental registration and renewal manager (API Meublés number tracker)". The deep dive moved its core to the conciergerie's quarterly API Meublés file and its proof file per unit. Number tracking stays in, as one module.

Combined plan from four deep-research parts (written 10 Oct 2026):

- [01 Law and product requirements](01-law-and-requirements.md): the consolidated codes, the March 2026 decrees, the API Meublés app, and 52 testable requirements, each traced to an article.
- [02 Market and competition](02-market-and-competition.md): buyer counts from Sirene and the API Meublés data, prices, competitors, channels and other countries.
- [03 Product and technical design](03-product-and-tech.md): users, features, flows, screens, data sources, architecture, security, the AI-agent build plan and the budget.
- [04 Go-to-market, company and finance](04-gtm-company-finance.md): pricing, channels, the 90-day launch, payments and tax, company set-up, the 36-month model and kill criteria.

Starting point: [the B1 report and its re-assessment](../reports/france-b1.md) (6/10).

Factual claims below carry a URL. The section files hold the full source lists. This page reconciles the files where they disagree and gives one plan. "My estimate" marks numbers derived here. "(unverified)" marks claims no source confirmed. Two web searches were run for this page, to settle two disagreements between the files (see §2).

---

## 1. Decision in one page

**Verdict: go, as a cheap, time-boxed test aimed at the 31 January 2027 filing deadline.** Build it as a small compliance add-on for conciergeries, priced per unit. Plan for a sale to a PMS vendor as the likely end. Do not expect a large standalone company.

**Score: 6/10.** Unchanged from the re-assessment (6/10). The first score was 4/10.

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
- **The first build is easier.** Small intermediaries can upload a CSV (UTF-8, ";" separator, a template "modele_import_idm.csv") ([APP305]). The MVP needs no DGE approval. But sending is also less painful than feared. The value moves to preparing, checking and proving the data.
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

- At 2.5-4 times ARR, the base is worth about 225,000-380,000 EUR at month 36, and the good case about 330,000-530,000 EUR. This is one source, so treat it as indicative ([beancount.io][BEAN]).
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

**Filing deadlines (settled here).** 01 and 03 read the quarterly due date for Q3 as 30 October. 04 used 31 October. Under the French rule for deadlines counted in months (Code de procédure civile art. 641), the deadline expires on the same day number of the following month, or on that month's last day if the day number does not exist ([e-Justice portal][EJ641]). A quarter that ends on 30 September therefore closes on 30 October. **This plan uses 30 Oct, 31 Jan, 30 Apr and 30 Jul.** Art. 642 moves a deadline that falls on a weekend to the next working day for procedural deadlines ([EJ641]). Whether that applies to this administrative duty is unverified, so do not rely on it. The Q4 2026 file is due Sun 31 Jan 2027; aim for Fri 29 Jan.

**What the state gives, and what it leaves undone.**

- **API Meublés gives:**
  - an IDM account through a Démarche Numérique form ([IDM form][DN]);
  - a TOTP two-factor login and two roles, IDM-ADMIN and IDM-GEST ([app code][APP7]);
  - a CSV import from a template that sits behind the login, with statuses "Terminé", "Terminé avec des alertes" and "Fichier rejeté" ([APP305]);
  - API keys with an expiry date, and the warning "Un filtrage IP est appliqué sur les API" ([APP305]).
- **Communes see ready-made flags** on intermediary data: "NER absents", "NER inconnus", "NER > seuil", "Incohérence adresse du meublé", "Incohérence statut résidence principale" ([app code][APP542]; [APP190]). These work as the inspector's checklist.
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

- TJ Paris, 10 Jul 2026 (RG 26/52006): owner and conciergerie fined 70,000 EUR each for one flat let without change-of-use authorisation. The court relied on the mandate, the platform account and the channel manager that the conciergerie ran ([SIM]).
- Four Paris decisions reported in July 2026 fined an owner and her conciergerie 440,000 EUR in total ([KOHJ]). They may overlap with the case above (unverified).
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
| Conciergerie head offices inside an API Meublés commune | 27% (47 of 175 sampled) | medium-low | 02's match against [APICL] |
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

