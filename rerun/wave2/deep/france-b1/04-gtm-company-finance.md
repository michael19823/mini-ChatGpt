# France B1: go-to-market, payments, company setup and financials (deep dive 04)

Date: 10 Oct 2026. Money is in EUR. "HT" means before French VAT (TVA, 20%); "TTC" means VAT included. The seller is assumed to be the founder's existing company in another EU state; UK, US and other non-EU sellers are noted where they differ. "My estimate" marks a planning assumption. "(unverified)" marks a claim no source confirmed.

Builds on: [B1 report](../reports/france-b1.md), [01 law](01-law-and-requirements.md), [02 market](02-market-and-competition.md), [03 product](03-product-and-tech.md). Dates for the build come from 03: MVP demo Fri 6 Nov 2026, paid launch Mon 7 Dec 2026.

Status: complete (10 Oct 2026). Research used 22 web searches and 15 web fetches (two fetches were refused by the sites).

## Summary

- **Price per active unit, below the tools buyers already pay for.** Conciergeries pay a PMS 3-10 EUR per unit per month and the Firby add-on 3-5 EUR ([comparatifchannelmanager](https://comparatifchannelmanager.fr/?p=2312); [Firby](https://firby.fr/)). Plan: **2.50 EUR HT per unit per month**, falling to 1.50 EUR above 150 units, with a 25 EUR monthly minimum. A 30-unit firm pays 75 EUR HT a month. Add-ons:
  - a re-registration campaign at 15 EUR per unit, under Hostcare's 39 EUR TTC filing price ([Jotform](https://form.jotform.com/260773313676361));
  - a 149 EUR onboarding fee.
  A 59 EUR TTC yearly plan serves private hosts.
- **Sell on the deadlines.** The API Meublés file is due one month after each quarter: 31 Jan, 30 Apr, 31 Jul and 31 Oct ([décret 2026-196](https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053703536)). The national teleservice (still "Q4 2026") will start a one-off re-registration wave.
  - Best selling windows: mid-October to mid-December, mid-January to mid-March, and April-May.
  - July-August is for customer success only.
- **Channels, in order:**
  1. trigger-based outbound from public data (Sirene plus the 410 API Meublés communes);
  2. free tools and a webinar before each deadline;
  3. the SNCL union's buying group;
  4. PMS integrations and white-label;
  5. HostLegal and insurers;
  6. SCALE France (25-26 Nov 2026).
  B2B cold e-mail is allowed on legitimate interest with a simple opt-out ([CNIL](https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique-sms-mms-et-automate-dappel)). Year-1 marketing is **about 14,000 EUR** plus partner commissions.
- **Payments: Stripe from the founder's EU company works.** French CB cards are 95% co-badged Visa/Mastercard and accepted by any EU Stripe account ([Stripe](https://docs.stripe.com/payments/cartes-bancaires.md?platform=web)). Fees are about 2.7-3.7% per charge with Billing and Tax, or 1.2-2.6% by SEPA debit ([Stripe pricing](https://stripe.com/fr/pricing)). Paddle (5% + 50¢) costs 2-4 points more and is only worth it for a non-EU seller ([Paddle](https://www.paddle.com/pricing)).
- **Tax friction is small if handled right.**
  - VAT-registered buyers reverse-charge.
  - Sole traders under the VAT "franchise" would need an intra-EU VAT number and would pay the reverse-charged VAT with no deduction ([Bpifrance Création](https://bpifrance-creation.fr/encyclopedie/fiscalite-lentreprise/tva/tva-prestations-services-lunion-europeenne)). So charge them 20% French VAT through OSS and do not ask for a number.
  - No French VAT registration is needed for an EU seller.
  - The 25% art. 182 B withholding is normally removed by tax treaties; keep a residence certificate ready ([Advizexperts](https://advizexperts.fr/code-general-impots/article-182-b-cgi-retenue-source-non-residents/)).
  - Foreign sellers are outside France's e-invoicing duty ([Tiime](https://blog.tiime.fr/facture-electronique-etranger)).
- **No French company is needed to start.** If one becomes needed, a SASU costs about 230-500 EUR in official fees online (registration is online only), or 1,000-2,500 EUR through a lawyer or accountant. Capital can be 1 EUR. Running it costs about 1,500-3,500 EUR a year ([LegalPlace](https://www.legalplace.fr/guides/cout-creation-sasu/); [Socic](https://www.socic.fr/ressources-comptabilite/articles/cout-dune-sasu-par-an-en-2026-frais-fixes-greffe-comptable-assurance-banque-cfe-et-budget-reel-a-prevoir)). It would pay 25% corporate tax if owned by the founder's company.
- **Base case** (built with AI agents, founder unpaid):
  - 160 paying conciergeries and **about 132,000 EUR ARR** at month 36;
  - profitable each quarter from April-June 2027;
  - **peak cash need about 15,600 EUR**;
  - year-3 profit before founder pay about 61,000 EUR (about 25,000 EUR after a 3,000 EUR monthly founder pay).
  **Low case:** 61 customers, 38,000 EUR ARR, about 29,000 EUR peak cash, never really profitable. **High case:** 302 customers, 320,000 EUR ARR.
- **Main risk: PMS vendors adding the feature.** Easy Concierge already lists an API Meublés module "en préparation"; Biloki has half the features ([02](02-market-and-competition.md)). The answers are:
  - stay PMS-agnostic, with the owner workflow and proof file at the core;
  - offer white-label to PMS vendors;
  - keep an early sale to a PMS (Guesty bought the French PMS Smily) as the likely exit.
  At 2.5-4x ARR, the base case is worth about 330,000-530,000 EUR at month 36 ([beancount.io](https://beancount.io/fr/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide)).
- **Kill criteria:**
  - fewer than 3 pilots with an IDM account by 31 Oct 2026;
  - fewer than 3 pre-commitments from 30 conversations by 10 Nov 2026;
  - fewer than 10 paying by 31 Jan 2027;
  - fewer than 30 paying by month 12;
  - a top PMS ships the feature free and quarterly churn passes 10% for two quarters.

## Pricing and packaging

### What buyers already pay (anchors)

| Item | Price | Source |
|---|---|---|
| Superhote (the PMS most seen on French conciergerie sites) | 67 EUR HT a month for 3 units + 7 EUR HT per extra unit | [comparatifchannelmanager](https://comparatifchannelmanager.fr/?p=2312) |
| Smoobu | 29 EUR a month for 1 listing + 9.60 EUR per extra listing | [Chanlify comparison](https://chanlify.fr/comparatif-channel-managers-2026) |
| Easy Concierge (small French PMS; API Meublés module "en préparation") | 25 EUR HT a month for 5 units + 3 EUR per extra unit | [easy-concierge.fr](https://easy-concierge.fr/) |
| **Firby (owner-invoicing add-on that plugs into 7 PMS)** | **5.00 EUR per active unit per month (1-10 units), falling to 3.00 EUR (101+ units)** | [firby.fr](https://firby.fr/) |
| HostLegal (carte G cover, contracts, legal watch) | from 49.90 EUR HT a month | [hostlegal.fr](https://www.hostlegal.fr/) |
| Hostcare (done-for-you registration filing, one unit) | 39 EUR TTC per unit, one-off | [Jotform](https://form.jotform.com/260773313676361) |
| Chekin (guest check-in compliance; France "coming soon") | 3.95 / 5.95 / 7.95 EUR per property per month | [chekin.com](https://chekin.com/en/pricing/) |
| SNCL union membership (ex-Réseau CLF) | 95 EUR TTC | [reseauclf.fr](https://reseauclf.fr/) |
| Fines on an intermediary (civil fines, per unit or listing) | up to 12,500 EUR per unit (information, sworn statement, number); up to 50,000 EUR per unit (data transmission); up to 50,000 EUR per listing (night cap) | Code du tourisme L324-2-1 III, read in [01](01-law-and-requirements.md) ([Code du tourisme PDF](https://codes.droit.org/PDF/Code%20du%20tourisme.pdf)) |

What this tells us:
- Conciergeries already pay per unit per month. A PMS costs them 3-10 EUR per unit. An add-on (Firby) costs 3-5 EUR per unit.
- A compliance add-on must sit below Firby and well below the PMS. 2.50 EUR per unit is about a third of Superhote's per-unit fee.
- Done-for-you filing is priced at 39 EUR TTC (32.50 EUR HT) per unit. That is the ceiling for a re-registration add-on.
- One fine is about 400-1,700 times the yearly fee for one unit (30 EUR at 2.50 EUR a month). Sell on the fines and on time saved, not on features.

### Proposed plans (HT; TTC shown where buyers are mostly not VAT-registered)

| Plan | Who | Price | What is included |
|---|---|---|---|
| **Vérif** (free) | Anyone; lead magnet | 0 | Up to 3 units. Number-format check, "is my commune on API Meublés?" check, night counter. No file export. |
| **Hôte** | Private hosts with 2-10 units (registration duty only, no intermediary duty) | 59 EUR TTC a year for up to 5 units, + 10 EUR TTC per extra unit | Number tracker (old commune number, new national number, expiry), night-cap counter, reminders when the transition window closes. |
| **Conciergerie** (core) | Conciergeries acting as "intermédiaires de meublés" (IDM) | **2.50 EUR HT per active unit per month** (units 1-50); 2.00 EUR (51-150); 1.50 EUR (151+). Minimum 25 EUR HT a month (covers 10 units). Yearly prepaid = 10 months' price. | Unit register; number lifecycle; owner portal with the information notice and the sworn statement (e-signed); night-cap watch per commune; periodic API Meublés CSV with the state's own checks run first; "dossier de diligence" per address; commune-joins alerts; 3 users. |
| **Réseau** | Agencies with a carte G, franchise networks, firms with several legal entities | Same per-unit rates + 39 EUR HT a month per extra legal entity; quote above 500 units | Multi-entity dashboard, API connectors, owner portal in the network's brand, priority support. |

Worked examples (my arithmetic):
- 8 units: 25 EUR HT a month (the minimum).
- 30 units: 75 EUR HT a month (90 EUR TTC), or 750 EUR HT a year prepaid. Superhote for the same 30 units costs about 256 EUR HT a month, so the add-on is about 29% of the PMS bill.
- 100 units: 50 × 2.50 + 50 × 2.00 = 225 EUR HT a month.
- 200 units: 125 + 200 + 75 = 400 EUR HT a month.

Add-ons:
- **Campagne ré-immatriculation: 15 EUR HT per unit, one-off.** When the national teleservice opens, the tool chases each owner until the new national number is filed, captured and checked. The owner files in person, as the law requires (L324-1-1 III, per [01](01-law-and-requirements.md)). 30 units cost 450 EUR HT, against 1,170 EUR TTC at Hostcare's price.
- **Mise en route: 149 EUR HT, one-off.** Import from the PMS export and capture of listing URLs. Free on yearly plans.
- **Lawyer review of an inspection file:** by referral only. A French avocat may not pay or receive a fee for a referral (décret 2023-552 art. 10 and RIN art. 11.3), so there is no revenue share ([Simonnet Avocat](https://www.simonnetavocat.fr/remuneration-de-lapport-daffaires-et-avocat-que-dit-la-loi/); [CNB, 15 Sep 2026](https://cnb.avocat.fr/actualite/remuneration-de-l-apport-d-affaires-entre-avocats-le-cnb-ouvre-la-concertation)). The value is trust and leads both ways.

Packaging rules:
- **Price per active unit.** Buyers already think this way (Firby, PMS). It grows with the portfolio, and it rises as more communes join API Meublés.
- **Never sell the CSV alone.** The register, owner file and cap watch are what make customers stay. The CSV is the reason to start.
- **Monthly by default, yearly as an option.** Conciergeries are micro firms with seasonal cash. Monthly card or SEPA debit lowers the entry barrier. Yearly prepaid gets two months free.
- **Discounts:**
  - Founding offer: 20% off the first year for the first 100 conciergeries that sign by 31 Mar 2027.
  - SNCL members: 10% off, listed in the union's buying group ([reseauclf.fr](https://reseauclf.fr/)).
  - Pilots (5 firms): free until 31 Jan 2027, then 50% off for 2027, in return for the CSV template, data and a testimonial.
- **Price review:** +5-10% in 2028 if no major PMS has shipped the same features (my estimate).

### VAT on the price

- Publish prices HT, with TTC beside them. French B2B buyers read HT; micro-entrepreneurs read TTC.
- From an EU company, the rules are (details in "Payments and tax friction"):
  - **Buyer gives a valid French VAT number:** invoice HT. The buyer reverse-charges French VAT and deducts it ([Bpifrance Création](https://bpifrance-creation.fr/encyclopedie/fiscalite-lentreprise/tva/tva-prestations-services-lunion-europeenne)).
  - **Buyer gives no VAT number** (many sole-trader conciergeries under the "franchise en base", and private hosts): charge 20% French VAT and declare it through the EU One-Stop Shop (OSS) ([Fonoa](https://www.fonoa.com/resources/country-tax-guides/france/tax-on-digital-services)).
- The price per unit is the same in both cases. Only the VAT line changes.

## Go-to-market

### Timing: deadlines and seasons

**Legal deadlines that create demand.**
- **Quarterly API Meublés file (micro and small intermediaries):** due within one month of each quarter's end, so by **31 Jan, 30 Apr, 31 Jul and 31 Oct**. Larger firms file monthly (R324-2-1; [Légifrance, décret 2026-196 art. 6](https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053703536)). The Q3 2026 file is due on **31 Oct 2026**, before the MVP. The Q4 2026 file is due on **31 Jan 2027**, the first deadline the product can serve.
- **Re-registration wave:** the national teleservice for hosts is still planned for "Q4 2026", with no date. Old commune numbers stay valid for "plusieurs mois" after it opens ([DGE](https://www.entreprises.gouv.fr/espace-entreprises/s-informer-sur-la-reglementation/lapi-meubles-guichet-unique-de-centralisation); [service-public.gouv.fr](https://www.service-public.gouv.fr/particuliers/actualites/A18880); [Socic](https://www.socic.fr/ressources-comptabilite/articles/declaration-en-ligne-des-meubles-de-tourisme-des-le-20-mai-2026-mode-demploi-complet)). The wave probably runs from early 2027 to mid-2027 (my estimate). It is a one-off sales window.
- **Communes joining API Meublés:** 410 communes on 10 Oct 2026 ([commune list](https://apimeubles.finances.gouv.fr/api/grand-public/communes-list), per [02](02-market-and-competition.md)). Each new commune creates new obliged conciergeries. Watch the list weekly and trigger outreach.
- **Enforcement news:** Paris court decisions against conciergeries (440,000 EUR in four decisions reported in July 2026) ([Kohen Avocats](https://kohenavocats.fr/2026/07/16/conciergerie-airbnb-condamnee-paris-amende-changement-usage-2026/)). Each new decision is a reason to write to the list.

**Seasons (my estimate, unverified).**
- **Bad months to sell:** June to early September on the coast; late December to March in ski resorts. Teams are busy with check-ins.
- **Good months to sell:** October-November (quiet season, budgets for next year, SCALE France), January-March for coastal firms (planning the season, Q4 file due 31 Jan), and April-May (Q1 file due 30 Apr, pre-season set-up).
- So the year has three selling peaks: **mid-Oct to mid-Dec, mid-Jan to mid-Mar, and April-May**. July-August is for customer success only.

**Events.**
- **SCALE France**, Paris, 25-26 Nov 2026, for managers of dozens or hundreds of units; "SCALE With AI" half-day on 24 Nov at 39-49 EUR HT ([Rental Scale-Up](https://www.rentalscaleup.com/fr/scale-france-2026-cinq-ans/)). The main pass price was not published in the article.
- **SNCL Salon de la conciergerie**: the 2026 edition is in Marseille; no date found ([reseauclf.fr](https://reseauclf.fr/)).
- **FNAIM Rencontres de l'immobilier de loisirs** (holiday-rental agencies), in September; the 22nd was in Saint-Malo on 18-19 Sep 2025 ([MySweetImmo](https://www.mysweetimmo.com/2025/07/18/rendez-vous-a-saint-malo-les-18-et-19-septembre-pour-les-22ᵉ-rencontres-de-limmobilier-de-loisirs/)).
- **Exit Door** (Paris, 22 May 2026) is closed to technology suppliers, so it is not a channel ([Rental Scale-Up](https://www.rentalscaleup.com/fr/exit-door-2026-la-salle-parisienne-ou-se-negocie-la-consolidation-de-la-location-meublee-en-france/)).

### Who to sell to first

1. Conciergeries with **10-200 units** and units in the **410 API Meublés communes**: Paris (about 510 conciergeries by name), Alpes-Maritimes (about 290), Var, Haute-Savoie, Charente-Maritime, Morbihan ([02](02-market-and-competition.md)). About 1,000-2,000 firms today (02's estimate, unverified).
2. Agencies with a carte G that run seasonal rentals (about 1,000-3,000; 02's guess, unverified).
3. Franchise and network heads (Welcome 2 Home, Home Partner, La Conciergerie.fr; HostnFly's network of about 140 local conciergeries, unverified) ([02](02-market-and-competition.md)). One deal gives many branches.
4. Private hosts with 2-10 units (Hôte plan): low price, self-serve only, no sales time.

### Channels, in priority order

| # | Channel | What we do | Deal | Share of new customers, year 1 (my estimate) | CAC (my estimate) |
|---|---|---|---|---|---|
| 1 | **Trigger-based outbound** from public data | Build the list from Sirene (6,370 active "conciergerie" units, per [02](02-market-and-competition.md)) and the API Meublés commune list. Email, LinkedIn and phone, timed to quarter deadlines and to "your commune just joined". | Staff time + tools | 35% | 150-250 EUR |
| 2 | **Free tools, content and webinars** | Commune checker, deadline calendar, number validator, a lawyer-reviewed model sworn statement; a webinar two weeks before each deadline; SEO on "API Meublés conciergerie", "déclaration trimestrielle", "loi Le Meur conciergerie". | Content cost | 20% | 100-200 EUR |
| 3 | **SNCL** (conciergerie union) | Buying-group listing with 10% off; member webinar; stand at the yearly salon. | Member discount | 15% | 150-250 EUR |
| 4 | **PMS and tool partners** | Integration listing and referral: Beds24, Smoobu, Lodgify, Hostaway first (open APIs); white-label for small PMS without the module (Easy Concierge, Chanlify). Firby shows these marketplaces accept add-ons ([firby.fr](https://firby.fr/)). | 20% of first-year revenue, or a per-unit white-label fee | 10% | 100-200 EUR |
| 5 | **Compliance-adjacent partners** | HostLegal bundle (they sell contracts and carte G cover, not a register) ([hostlegal.fr](https://www.hostlegal.fr/)); conciergerie insurers (SNCL's partner "Assurances Conciergerie"); LMNP accountants. | 20% of first-year revenue | 10% | 100-200 EUR |
| 6 | **Events and trade media** | SCALE France; sponsored content in Rental Scale-Up (owned by PriceLabs since 2022 ([Rental Scale-Up](https://www.rentalscaleup.com/fr/pricelabs-acquiert-rental-scale-up-pour-offrir-plus-dinformations-sur-la-location-saisonniere/))); no public rate card found. | Fees | 5% | 400-800 EUR |
| 7 | **Lawyers who write on loi Le Meur** (Kohen, Derhy, Simonnet) | Co-written guides and webinars; referrals both ways, unpaid (see Pricing). | None | 5% | low |
| 8 | **Paid search and LinkedIn ads** | Small tests only, around deadlines. Google B2B clicks cost about 2-5 EUR; LinkedIn about 4.50-12 EUR in France ([La Fabrique du Net](https://www.lafabriquedunet.fr/logiciels/tendances/facebook-linkedin-instagram-twitter-quel-est-le-cout-dune-annonce); [Searchlab](https://searchlab.nl/en/compare/google-ads-vs-linkedin-ads)). | Media spend | <5% | 300-600 EUR |

Notes:
- **B2B cold email is legal in France with care.** The CNIL allows prospecting professionals on "legitimate interest" when the message relates to their job. They must be told how their address is used and be able to object simply. Keep a suppression list ([CNIL](https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique-sms-mms-et-automate-dappel); [CNIL, règles d'or](https://www.cnil.fr/fr/les-regles-dor-de-la-prospection-par-courrier-electronique-0)). Many conciergeries are sole traders; treat them as professionals only when writing to their business address about their business.
- **SNCL is lobbying against the conciergerie duties** ("une conciergerie ne doit pas être considérée comme responsable des obligations qui incombent à son client propriétaire") ([reseauclf.fr](https://reseauclf.fr/)). Pitch the tool to the union as "proof that our members comply", not as "the law is good".
- **Language.** Every page, e-mail, call and document must be in French. If the founder does not speak French at a business level, the part-time French-speaking customer-success person (see the plan) must start in month 1, not month 7 (open question).

### Sales motion

- **Self-serve first.**
  - Free Vérif plan, then a 14-day full trial with no card.
  - Card or SEPA debit at the end of the trial. Yearly invoice by bank transfer for the Réseau plan.
  - Promise: "Votre déclaration API Meublés prête en 30 minutes, et un dossier par logement prêt pour un contrôle."
- **A light human touch above 50 units.** A 20-minute demo by video in French. A weekly live group demo before each deadline.
- **Done-with-you first file.** For each new customer, the first quarterly file is checked together on a call. This builds trust and catches data problems.
- **Onboarding target:** under 45 minutes for a 30-unit firm (from [03](03-product-and-tech.md)).
- **What keeps customers (renewal drivers):**
  - the next deadline (four a year, or twelve for larger firms);
  - the owner files and sworn statements, which a firm does not want to rebuild;
  - commune changes (new communes, lower caps) handled for them;
  - a "compliance score" e-mail after each filing.
- **Churn to expect.** Conciergerie closures rose from 214 (2023) to 386 (2024) and 478 (2025) ([Majordia](https://www.majordia.fr/ressources/observatoire-conciergeries-lcd)). Plan for 2% logo churn a month in the base case.

## 90-day launch plan

Start Mon 12 Oct 2026. Day 90 is Sat 9 Jan 2027. Product milestones follow [03](03-product-and-tech.md).

**Days 1-14 (12-25 Oct): pilots and set-up.**
- Find 5 pilot conciergeries that already have an IDM account, ideally in Paris, Alpes-Maritimes, Haute-Savoie and Var. Offer to prepare their Q3 2026 file for free by 31 Oct (a converter script run by the founder). Get the "modele_import_idm.csv" template from them.
- Hold 25 discovery calls. Test 2.50 EUR per unit and the 15 EUR re-registration add-on.
- Engage the two lawyers from 03 (domain lawyer; tech and data lawyer).
- Seller set-up: confirm the founder's EU company is VAT-registered with OSS access; open Stripe; turn on Stripe Billing and Stripe Tax; register a .fr domain (allowed for a company based in the EU, EEA or Switzerland ([AN answer QE 37916](https://www2.assemblee-nationale.fr/questions/detail/15/qe/37916/(vue)/pdf))).
- Landing page in French with a waitlist and the free commune checker.

**Days 15-28 (26 Oct-8 Nov): first files and MVP.**
- File the pilots' Q3 2026 data by **Sat 31 Oct**. Collect errors and quotes.
- MVP demo on **Fri 6 Nov**.
- Build the lead list: Sirene "conciergerie" units matched to the 410 communes, with websites and generic e-mails. Write the CNIL information notice.
- Contact SNCL (buying-group offer, member webinar), HostLegal (bundle), and Beds24, Smoobu, Lodgify, Easy Concierge (integration or white-label).

**Days 29-56 (9 Nov-6 Dec): trust and pipeline.**
- Security test and lawyer sign-off of the owner notice, sworn statement, CGV/CGU and DPA (03, weeks 5-8).
- **SCALE France, 25-26 Nov, Paris:** attend with a pass; book 10 meetings in advance.
- Webinar 1 (about 1 Dec), with a partner lawyer: "Loi Le Meur : le dossier de conformité de la conciergerie".
- Outbound wave 1: 500 conciergeries in the API Meublés communes.
- Open the founding offer (20% off year 1 until 31 Mar 2027).

**Days 57-90 (7 Dec-9 Jan): paid launch and the first deadline.**
- **Paid launch Mon 7 Dec.** Convert the pilots. Target 8 paying by 31 Dec.
- If the teleservice opens: launch the re-registration add-on within 48 hours and e-mail the whole list.
- Webinar 2 (about 7 Jan): "Déclaration T4 2026 : tout envoyer avant le 31 janvier".
- Outbound wave 2: 700 more conciergeries, timed to the 31 Jan deadline.
- Holiday weeks (21 Dec-3 Jan): no outreach; ship connectors (Beds24, Smoobu) per 03.
- **Day-90 review** against the milestones below. Continue, re-price or stop.

## 12-month marketing plan and budget

Period: Oct 2026 to Sep 2027. EUR HT. The total matches the financial model's base case (about 14,000 EUR of spend plus partner commissions of about 5% of subscription revenue). It excludes the founder's time and the part-time French-speaking helper (in the model as a separate line).

| Quarter | Focus | Main activities | Budget |
|---|---|---|---|
| Oct-Dec 2026 | Pilots, first deadline, SCALE | Landing page and free tools; French copywriter (about 300 a month); SCALE France pass and Paris trip; webinar 1; outbound tools (CRM, e-mail sending, LinkedIn Sales Navigator, about 100 a month); first SEO articles | 3,500 |
| Jan-Mar 2027 | Q4 deadline, re-registration wave, founding offer | Webinar 2 and 3; outbound waves 2-3; Google Ads test around "API Meublés" (about 500 a month in January and March); SNCL buying-group launch; one trip to Nice and Annecy (customer visits) | 4,500 |
| Apr-Jun 2027 | Q1 deadline (30 Apr), pre-season | Webinar 4 (before 30 Apr); Rental Scale-Up sponsored article (budget 1,500, unverified price); case studies from pilots; PMS marketplace listings live; LinkedIn ads test (about 1,000) | 4,000 |
| Jul-Sep 2027 | High season: retain, do not push | Customer success only; Q2 file support (31 Jul); prepare the autumn campaign; SNCL salon stand if dated (budget 1,000-1,500, unverified) | 2,000 |
| **Total** | | | **14,000** |

Years 2 and 3 (my estimate): about 14,000 and 15,000 EUR a year, with the same rhythm, plus partner commissions. A second SCALE France and a salon stand each year.

KPIs to watch every month:
- trials started, trial-to-paid rate (target 25%), paying conciergeries, units under management, MRR;
- share of customers who filed the last quarter with the tool (target 90%);
- logo churn a month (target under 2%);
- blended CAC (target under 300 EUR);
- partner-sourced share (target 30% by month 12).

## Payments and tax friction

### Do French cards work for cross-border online payments?

- **Yes.** French cards are mostly Cartes Bancaires (CB). More than 95% are co-badged with Visa or Mastercard. Stripe accounts in all EU states (and the UK, US, Switzerland and others) can accept CB, including for subscriptions. A non-French account must first process one CB payment to fully enable it. CB disputes cost 0 EUR ([Stripe docs](https://docs.stripe.com/payments/cartes-bancaires.md?platform=web)).
- Inside the EEA a card payment in EUR has no currency conversion. Sell in EUR only.
- **SEPA Direct Debit** (prélèvement) is common for French B2B subscriptions (my estimate) and is the cheapest method on Stripe (0.35 EUR) ([Stripe pricing](https://stripe.com/fr/pricing)). Offer it beside the card at checkout.
- **Bank transfer** (virement SEPA) is normal for yearly invoices. From an EU seller with an EUR IBAN it is domestic-like for the buyer. Use it only for Réseau plans and yearly invoices above about 1,000 EUR, because it needs manual matching.

### Stripe from the founder's company

Fees ([Stripe pricing](https://stripe.com/fr/pricing)):
- standard EEA cards: 1.5% + 0.25 EUR (premium and business cards may cost more; rate not checked); UK cards 2.5% + 0.25 EUR; other international cards 3.15% + 0.25 EUR; +2% if currency conversion applies;
- SEPA Direct Debit: 0.35 EUR;
- Stripe Billing (subscriptions): 0.7% of billing volume;
- Stripe Tax: 0.5% per transaction (no-code) or 0.45 EUR via the API;
- Stripe Managed Payments (Stripe acting as merchant of record): 3.5% on top of payment fees.

Cost per charge (my arithmetic, card + Billing + Tax):

| Charge | Stripe (card) | Stripe (SEPA debit) | Paddle (5% + USD 0.50) |
|---|---|---|---|
| 25 EUR monthly (minimum plan) | 0.93 EUR (3.7%) | 0.65 EUR (2.6%) | about 1.68 EUR (6.7%) |
| 75 EUR monthly (30 units) | 2.28 EUR (3.0%) | 1.25 EUR (1.7%) | about 4.18 EUR (5.6%) |
| 750 EUR yearly (30 units) | 20.50 EUR (2.7%) | 9.35 EUR (1.2%) | about 37.93 EUR (5.1%) |

### Merchant of record options

| Option | Fee | Supports French buyers | When to use |
|---|---|---|---|
| Paddle | 5% + 50¢ per transaction; handles VAT as merchant of record; B2B invoicing included ([Paddle pricing](https://www.paddle.com/pricing)) | Yes (sells worldwide) | A non-EU seller who wants no EU VAT registration at all |
| Lemon Squeezy | 5% + 50¢; "small additional fees" outside the US; a "2026 Update: Lemon Squeezy + Stripe Managed Payments" banner ([Lemon Squeezy pricing](https://www.lemonsqueezy.com/pricing)) | Yes | Not recommended while its future inside Stripe is unclear |
| Stripe Managed Payments | 3.5% + normal Stripe fees ([Stripe pricing](https://stripe.com/fr/pricing)); seller eligibility by country not confirmed ([Freemius](https://freemius.com/blog/stripe-merchant-of-record/)) | Yes | Possible later; check seller eligibility |

**Recommendation.** From an EU company, use **Stripe Billing + Stripe Tax** and the home state's OSS. A merchant of record costs about 2-4 points of revenue more (about 2,500-5,000 EUR a year at base-case year-3 revenue) to solve a problem that OSS solves cheaply. A merchant of record makes sense only for a non-EU seller.

### Buyer-side VAT

- **VAT-registered conciergerie (most companies).** It gives its VAT number. We invoice HT with both VAT numbers and the reverse-charge mention. It self-assesses 20% French VAT and deducts it in the same return, so the net cost is the HT price ([Bpifrance Création](https://bpifrance-creation.fr/encyclopedie/fiscalite-lentreprise/tva/tva-prestations-services-lunion-europeenne)).
- **Sole trader under the "franchise en base" (no VAT charged on its sales).** If it buys a service from another EU state as a business, it must ask its tax office for an intra-EU VAT number, declare the reverse-charged VAT and pay it, with no deduction (same source). That is real paperwork for a micro firm. **Fix:** do not ask such buyers for a VAT number. A supplier may treat a customer who gives no VAT number as a non-taxable person (Implementing Regulation 282/2011, art. 18(2); [EUR-Lex](https://eur-lex.europa.eu/eli/reg_impl/2011/282/oj/fra); exact wording not re-read in this run). We then charge 20% French VAT through OSS. The buyer pays the same TTC price it would pay a French supplier, with no form.
- The franchise thresholds stay at **37,500 EUR** of services turnover (41,250 EUR upper limit) in 2026; the cut to 25,000 EUR was dropped ([LegiFiscal](https://www.legifiscal.fr/actualites-fiscales/4289-adoption-definitive-texte-seuils-franchise-base-tva.html); [CCI Lyon](https://www.lyon-metropole.cci.fr/actualite/micro-entreprises-le-projet-de-loi-de-finances-2026-relance-la-reforme-du-seuil-de)). So many small conciergeries are in the franchise.
- **Private hosts (Hôte plan)** are consumers or exempt landlords. Charge French VAT through OSS.

### Does a foreign seller have to register for French VAT?

- **EU seller:** no French registration. B2B sales are reverse-charged. B2C sales go through the home state's OSS. Under 10,000 EUR a year of cross-border B2C sales in the whole EU, home-state VAT may apply instead; opting for French VAT from day one is simpler ([Fonoa](https://www.fonoa.com/resources/country-tax-guides/france/tax-on-digital-services)).
- **Non-EU seller (UK, US, other):** B2B is still reverse-charged by the French buyer. For B2C there is **no threshold**: register in the non-Union OSS from the first euro, or use a merchant of record ([Fonoa](https://www.fonoa.com/resources/country-tax-guides/france/tax-on-digital-services); [Junto](https://junto.fr/en/blog/vat-in-france)). Sellers from countries without a mutual-assistance agreement with France may need a fiscal representative for direct registration (same sources).
- **E-invoicing.** France's e-invoicing reform covers transactions between businesses established in France. Receiving is mandatory for all from 1 Sep 2026; small firms must issue from 1 Sep 2027 ([Socic](https://www.socic.fr/ressources-comptabilite/articles/facturation-electronique-obligatoire-2026-2027-calendrier-plateformes-agreees-e-reporting-et-checklist-tpe-pme)). Transactions with firms established outside France are **not** in the e-invoicing obligation ([Tiime](https://blog.tiime.fr/facture-electronique-etranger)). A foreign seller keeps sending a normal PDF invoice. Whether the French buyer must "e-report" the purchase from 2027 is unverified. A French subsidiary would have to issue e-invoices through an approved platform from Sep 2027.

### Withholding tax on payments to a non-resident

- **The rule.** Art. 182 B CGI imposes a withholding on "prestations de toute nature fournies ou utilisées en France" paid to a non-resident with no fixed base in France. The rate is the normal corporate rate (25%), and 75% if the seller is in a non-cooperative state ([Advizexperts, art. 182 B](https://advizexperts.fr/code-general-impots/article-182-b-cgi-retenue-source-non-residents/)). Courts read "utilisées en France" broadly ([Etudes fiscales internationales](https://www.etudes-fiscales-internationales.com/archive/2017/07/09/art-182-b-et-traites-fiscaux-pas-d-imposition-pas-de-convent-25554.html)).
- **The treaty effect.** A tax treaty usually treats a SaaS fee as business profits, taxable only where the seller is based unless it has a permanent establishment in France. Then no withholding applies (my reading; the SaaS-versus-royalty question was not confirmed for each treaty, unverified). Practitioners advise the payer to hold the seller's **certificate of tax residence** ([Etudes fiscales internationales](https://www.etudes-fiscales-internationales.com/archive/2017/07/09/art-182-b-et-traites-fiscaux-pas-d-imposition-pas-de-convent-25554.html)).
- **In practice.** French micro firms pay foreign SaaS by card without withholding (my estimate). The risk sits with the buyer. Reduce it: put a residence certificate in the help centre; state in the terms that the fee is for a standard online service with no licence of intellectual property.
- **Seller in a non-treaty or non-cooperative state:** real risk. Do not sell from such a company.

## Company setup (needed or not, costs)

### Verdict: no French company is needed to start

Reasons:
- The product is an online service sold remotely. No staff or office in France means no permanent establishment (my reading).
- B2B sales are reverse-charged; B2C sales go through OSS. No French VAT number is needed.
- Stripe accepts French cards and SEPA debits from any EU account.
- A .fr domain is open to companies based in the EU, EEA or Switzerland ([AN answer QE 37916](https://www2.assemblee-nationale.fr/questions/detail/15/qe/37916/(vue)/pdf)).
- French buyers already pay foreign software (Lodgify, Hostaway, Guesty, Chekin) (my estimate).

When to open one:
1. If the DGE only gives machine API access to French-registered providers (unverified; ask in month 1).
2. If franchise heads or public bodies insist on a French supplier with a SIRET (unverified).
3. If the firm hires staff in France. A foreign employer can also hire through URSSAF's foreign-firms scheme without a company (unverified).
4. If revenue passes about 300,000 EUR a year and local presence clearly helps sales (my estimate).
5. If the founder's company is outside the EU and a .fr domain or EU-only partners matter.

### If a French company is needed: SASU costs

Registration is **online only**, through the INPI "guichet unique", since 1 Jan 2023 ([Copeps](https://copeps.fr/actualites/immatriculation-au-registre-du-commerce-et-des-societes-rcs-obligatoire/)). There is no counter to visit. A non-resident can be the sole shareholder and appoint the president ([Socic](https://www.socic.fr/ressources-comptabilite/articles/creer-une-sasu-en-france-depuis-letranger-conditions-fiscalite-et-obligations-du-non-resident-fiscal-francais)).

| Item | Do it yourself online (official fees) | Through a lawyer or accountant, remotely |
|---|---|---|
| Greffe registration (RCS, Kbis) | 33.83 EUR TTC ([LegalPlace](https://www.legalplace.fr/guides/cout-creation-sasu/)) | included in fees |
| Beneficial-owner declaration (RBE) | 19.33 EUR (same source) | included |
| Legal notice (annonce légale) | 142 EUR HT in mainland France (same source) | included |
| Statutes | own draft, or an online service from 0-99 EUR HT + legal fees (same source) | 500-1,500 EUR ([Socic](https://www.socic.fr/ressources-comptabilite/articles/cout-dune-sasu-par-an-en-2026-frais-fixes-greffe-comptable-assurance-banque-cfe-et-budget-reel-a-prevoir)) |
| Full creation service | online platforms 200-500 EUR all-in ([LegalPlace](https://www.legalplace.fr/guides/cout-creation-sasu/)) | 1,000-2,000 EUR (same source); 800-2,000 EUR ([Socic](https://www.socic.fr/ressources-comptabilite/articles/cout-dune-sasu-par-an-en-2026-frais-fixes-greffe-comptable-assurance-banque-cfe-et-budget-reel-a-prevoir)) |
| Minimum capital | 1 EUR; half of cash contributions paid at once, the rest within 5 years ([LegalPlace](https://www.legalplace.fr/guides/cout-creation-sasu/)) | same |
| **Total to create** | **about 230-500 EUR** | **about 1,000-2,500 EUR** |

Time: 1-3 weeks once the bank deposit certificate and domiciliation contract exist (unverified). Some online banks may refuse a non-resident president (unverified); check before starting.

Ongoing costs of a SASU with no salary:

| Item | Yearly cost | Source |
|---|---|---|
| Accountant (expert-comptable) | 300-600 EUR (automated) or 900-2,000 EUR (normal) | [Socic](https://www.socic.fr/ressources-comptabilite/articles/cout-dune-sasu-par-an-en-2026-frais-fixes-greffe-comptable-assurance-banque-cfe-et-budget-reel-a-prevoir) |
| Domiciliation address | 25-80 EUR a month, so 300-960 EUR | [Socic](https://www.socic.fr/ressources-comptabilite/articles/domiciliation-sasu-2026-domicile-societe-de-domiciliation-ou-local-commercial-comparatif-complet); [LegalPlace](https://www.legalplace.fr/guides/cout-creation-sasu/) |
| Bank | 0-360 EUR | [Socic](https://www.socic.fr/ressources-comptabilite/articles/cout-dune-sasu-par-an-en-2026-frais-fixes-greffe-comptable-assurance-banque-cfe-et-budget-reel-a-prevoir) |
| Professional liability insurance | 100-800 EUR | same |
| CFE (local business tax) | 0 in year 1; 150-500 EUR after for a small domiciled firm | same |
| Filing annual accounts | 45-50 EUR | same |
| **Total** | **about 1,500-3,500 EUR a year** | same |

Corporate tax: 25%, with 15% on the first 42,500 EUR of profit only for firms at least 75% owned by individuals ([Compteo](https://www.compteo.fr/blog/taux-reduit-is); [Legalstart](https://www.legalstart.fr/fiches-pratiques/fiscalite-entreprises/taux-is/)). A SASU owned by the founder's foreign company would not get the 15% rate. Paying the president a salary adds about 70-90% on top of the net salary ([Socic](https://www.socic.fr/ressources-comptabilite/articles/cout-dune-sasu-par-an-en-2026-frais-fixes-greffe-comptable-assurance-banque-cfe-et-budget-reel-a-prevoir)).

## Contracts and liability

### Documents needed before the paid launch

All in French, reviewed by the tech and data lawyer in [03](03-product-and-tech.md) (budget 1,500-3,000 EUR):
1. **CGV/CGU** (B2B terms of sale and use).
2. **DPA** (data processing agreement, GDPR art. 28). The conciergerie is the controller of owner data; we are its processor.
3. **Owner-facing notice** in the owner portal (owners are not our customers, but we hold their data and tax notices).
4. **Sub-processor list** (hosting in Paris, Stripe, e-mail sender) and a privacy policy.
5. **Partner agreements:** a referral agreement (20% of first-year revenue) and a white-label licence for small PMS.

### Key clauses

- **Who does what.** The customer is the intermediary (IDM). It stays responsible for its legal duties. The tool prepares, checks and stores. The customer approves each file before it is sent or uploaded. We never file a host declaration for an owner; the law requires the host to declare "en personne" ([01](01-law-and-requirements.md)).
- **Data in, data out.** Results depend on the customer's PMS exports and the owners' statements. The tool flags gaps; it cannot invent missing data.
- **Liability cap.** Cap at the fees paid in the last 12 months. Exclude indirect losses. State that fines are the customer's own risk. Two limits under French law:
  - a clause that empties the supplier's essential obligation of its substance is deemed unwritten (Code civil art. 1170);
  - a cap does not apply to gross or wilful fault (Code civil art. 1231-3) ([Code civil PDF](https://codes.droit.org/PDF/Code%20civil.pdf)).
  So the cap must leave a real promise in place: "the file matches the data you approved and the published format".
- **Rule changes.** We update rules and templates when texts change, within a stated time (for example 30 days after publication in the JO). No promise of "conformité garantie" in the terms or the marketing (my recommendation).
- **Payment terms.** Invoices must show the late-payment penalty rate and the 40 EUR flat recovery indemnity; payment within 30 days for yearly invoices (Code de commerce L441-10; [Code de commerce PDF](https://codes.droit.org/PDF/Code%20de%20commerce.pdf)).
- **Term and switching.** Monthly plans roll monthly. Yearly plans are prepaid. Since 12 Sep 2025 the EU Data Act lets SaaS customers start switching with at most two months' notice, even in a fixed term. Early-termination fees must be proportionate, and switching charges end on 12 Jan 2027 ([Bird & Bird](https://www.twobirds.com/da/insights/2025/the-data-act-what-mandatory-switching-rights-mean-for-fixed-term-saas-models); [Krogerus](https://www.krogerus.com/articles/news/the-eu-data-act-and-saas-how-to-secure-annual-recurring-revenue-amid-mandatory-termination-rights)). Whether a micro supplier is exempt was not confirmed (unverified). So: offer a free full export (CSV plus PDF files) at any time, and refund unused yearly months minus a stated, proportionate fee.
- **Law and courts.** French law and Paris courts. French buyers and their lawyers trust it, and the product is about French law (my recommendation). The seller's own law would be cheaper to defend but harder to sell.
- **Personal data.** Hosting in France; encryption of tax notices; deletion when a unit leaves the portfolio, unless the customer keeps the proof file for its own legal defence (period to set with the lawyer).
- **Insurance.** Professional liability plus cyber, covering errors in delivered files. 03 budgets 500-3,000 EUR a year. Get a quote that names "regulatory reporting software" before launch.

## Financial model

### Assumptions

Quarter 1 is Oct-Dec 2026. All figures EUR HT. Profit is before the founder's pay and before corporate tax (paid where the founder's company is based). "My estimate" applies to every assumption below.

| Assumption | Low | Base | High | Basis |
|---|---|---|---|---|
| New paying conciergeries over 36 months | 97 | 218 | 369 | Seasonal: most adds Oct-Dec, Jan-Mar and Apr-Jun; few in Jul-Sep. Targets 1,000-2,000 today, growing as communes join ([02](02-market-and-competition.md)) |
| Monthly logo churn | 3.0% | 2.0% | 1.25% | Conciergerie closures of 478 in 2025 on about 6,400-8,500 firms ([Majordia](https://www.majordia.fr/ressources/observatoire-conciergeries-lcd)), plus switching to a PMS |
| Average revenue per conciergerie per month (year 1) | 45 | 60 | 75 | 2.50 EUR per unit, after yearly and founding discounts, so about 20 / 26 / 32 units |
| ARPA growth a year (more units per account) | 3% | 5% | 7% | My estimate |
| Re-registration add-on | half of base | 50% of new and 15% of existing customers in Jan-Sep 2027, 20 units × 15 EUR | 1.3 × base | Depends on the teleservice opening |
| Onboarding fee | 25% of new customers × 149 EUR | same | same | Monthly-plan buyers |
| Hôte plan (private hosts) | half of base | about 190 sign-ups in 3 years, 8% churn a quarter, 49 EUR HT a year | 1.5 × base | Small, self-serve |
| Launch budget (lawyers, security test, AI tools, hosting, pilots) | 9,000 | 13,000 | 17,000 | [03](03-product-and-tech.md): 8,300-19,900 |
| AI coding tools after launch | 450 a quarter | 450 | 450 | 03: Claude Max at USD 100-200 a month |
| Hosting and tools | 300 a quarter + 1.50 per customer per quarter | same | same | 03: 40-75 EUR a month at 50 customers |
| Payment fees | 3.2% of revenue | same | same | Stripe card + Billing + Tax, above |
| Lawyer upkeep; insurance; admin of the foreign company (OSS, bookkeeping) | 500 + 300 + 300 a quarter | same | same | 03; my estimate |
| Security re-test | 2,500 in Jul-Sep each year | same | same | 03 |
| Marketing (excluding commissions) | 14,000 in year 1, then 60% | 14,000; 14,000; 15,000 | 14,000, then 130% | Plan above |
| Partner commissions | 5% of subscription revenue | same | same | 20% of year-1 revenue on about 25-30% of customers |
| Part-time French-speaking customer-success and sales helper | half of base | 1,200 a month from Apr 2027; 2,000 from Apr 2028; 2,500 from Jan 2029 | 1.6 × base | My estimate (freelance) |
| Founder pay | 0 | 0 (variant: 3,000 a month from Oct 2027) | 0 | Shown separately |

### Base case by quarter (EUR)

| Quarter | New | Lost | Paying conciergeries (end) | Hosts | Revenue | of which one-off | Costs | Profit | Cumulative cash |
|---|---|---|---|---|---|---|---|---|---|
| Oct-Dec 2026 | 8 | 0 | 8 | 0 | 538 | 418 | 16,035 | -15,497 | -15,497 |
| Jan-Mar 2027 | 25 | 0.5 | 33 | 40 | 8,632 | 5,041 | 8,780 | -148 | **-15,645** |
| Apr-Jun 2027 | 22 | 2 | 53 | 67 | 14,065 | 5,583 | 10,362 | 3,703 | -11,943 |
| Jul-Sep 2027 | 10 | 3 | 60 | 71 | 15,208 | 4,240 | 11,031 | 4,178 | -7,765 |
| Oct-Dec 2027 | 22 | 3.5 | 78 | 86 | 15,198 | 1,150 | 11,703 | 3,494 | -4,271 |
| Jan-Mar 2028 | 25 | 5 | 98 | 99 | 19,193 | 1,306 | 11,046 | 8,147 | 3,876 |
| Apr-Jun 2028 | 20 | 6 | 113 | 106 | 22,290 | 1,045 | 13,230 | 9,060 | 12,937 |
| Jul-Sep 2028 | 10 | 7 | 116 | 105 | 23,424 | 522 | 13,854 | 9,570 | 22,506 |
| Oct-Dec 2028 | 22 | 7 | 131 | 112 | 27,052 | 1,150 | 15,139 | 11,913 | 34,420 |
| Jan-Mar 2029 | 24 | 8 | 148 | 118 | 30,353 | 1,254 | 15,925 | 14,427 | 48,847 |
| Apr-Jun 2029 | 20 | 9 | 159 | 121 | 32,915 | 1,045 | 15,661 | 17,254 | 66,101 |
| Jul-Sep 2029 | 10 | 9 | 160 | 117 | 33,537 | 522 | 16,241 | 17,295 | 83,396 |

"One-off" = re-registration add-on and onboarding fees. Hosts' revenue is included in Revenue.

### Scenarios side by side

| Measure | Low | Base | High |
|---|---|---|---|
| Paying conciergeries at month 12 / 24 / 36 | 25 / 47 / 61 | 60 / 116 / 160 | 104 / 211 / 302 |
| ARR at month 12 / 24 / 36 (incl. hosts) | 15,000 / 29,000 / 38,000 | 46,000 / 93,000 / 132,000 | 99,000 / 211,000 / 320,000 |
| Revenue, year 1 / 2 / 3 | 12,000 / 26,000 / 37,000 | 38,000 / 80,000 / 124,000 | 81,000 / 176,000 / 290,000 |
| Profit before founder pay, year 1 / 2 / 3 | -24,900 / -4,100 / +1,600 | -7,800 / +30,300 / +60,900 | +23,600 / +101,900 / +191,600 |
| Quarterly break-even (before founder pay) | about Jan-Mar 2029, barely | Apr-Jun 2027 (months 7-9) | Jan-Mar 2027 (months 4-6) |
| Cumulative cash turns positive | not within 36 months | Jan-Mar 2028 (months 16-18) | Apr-Jun 2027 (months 7-9) |
| **Peak cash need, no founder pay** | **about 29,000** | **about 15,600** | **about 18,500** |
| Peak cash need, founder paid 3,000 a month from Oct 2027 | about 99,000 (stop before this) | about 15,600; cash positive again in Apr-Jun 2029; year-3 profit after pay about 24,900 | about 18,500 |
| Blended CAC (marketing + commissions per new customer) | about 280-500 | about 230-260 | about 150-250 |

### Sensitivities on the base case

| Change | Customers at month 36 | Year-3 profit before founder pay | Peak cash need |
|---|---|---|---|
| Base | 160 | 60,900 | 15,600 |
| No re-registration add-on (teleservice slips or is easy enough) | 160 | 60,900 | 20,500 (year-1 revenue falls from 38,400 to 25,700) |
| Monthly churn 3.5% (a PMS ships the feature) | 129 | 44,400 | 15,700 |
| ARPA 45 instead of 60 | 160 | 34,700 | 16,400 |
| 30% fewer new customers | 112 | 28,700 | 17,900 |

### Unit economics (base, my estimates)

- **Gross margin about 92%:** hosting, AI tools and payment fees are about 5-8% of revenue.
- **Lifetime value:** 60 EUR × 92% ÷ 2% churn ≈ 2,760 EUR per conciergerie.
- **CAC:** about 230-260 EUR on marketing and commissions alone. Adding the part-time helper's cost raises it to about 340 EUR (year 1), 480 EUR (year 2) and 630 EUR (year 3). LTV/CAC is still about 4-8.
- **Payback:** about 4-5 months on marketing CAC; about 6-12 months fully loaded.

### What the model says

- **The base case is a small, profitable business, not a venture.** It needs about 16,000 EUR of cash, mostly before launch. It earns about 60,000 EUR a year before founder pay by year 3.
- **The founder's time is the real cost.** With a 3,000 EUR monthly founder pay from Oct 2027, the base case is about break-even in year 2 and earns about 25,000 EUR in year 3.
- **The first year leans on one-off revenue** from the re-registration wave. Without it the peak cash need rises to about 20,500 EUR.
- **The low case does not justify continuing.** The kill criteria below are set to catch it by month 6-12, before about 25,000 EUR is spent.

## Regional expansion

**Sell France first, and deepen there before going abroad.** The conciergerie data duty is French. The EU Regulation 2024/1028 puts the data duty on platforms; France alone extended it to every intermediary (per [02](02-market-and-competition.md); [European Commission](https://transition-pathways.europa.eu/construction/news-publications/short-term-rentals-eu-transparency-rules-now-force)).

Order of expansion (my estimate):
1. **All of France as communes join API Meublés** (410 today). This is the main growth engine and costs nothing extra.
2. **More duties for the same buyer in France** (raises ARPA from about 2.50 toward 3.50 EUR per unit, unverified):
   - change-of-use authorisation tracking in Paris, Lyon and other tense cities (the source of the 70,000 EUR Paris fines on a conciergerie, per [01](01-law-and-requirements.md));
   - taxe de séjour on direct bookings (duty on hosts and intermediaries not checked in this run, unverified);
   - the guest police form for foreign guests, where Chekin lists France as "coming soon" ([Chekin](https://chekin.com/en/pricing/)); integrate rather than build.
3. **French-speaking Belgium (year 2 at the earliest).** Brussels requires registration and a number on listings (unverified); Wallonia is drafting short-term rental rules ([APD opinion 113/2026](https://www.autoriteprotectiondonnees.be/index.php/publications/avis-n0-113-2026.pdf)). Only the register and proof-file modules would travel. Duties on managers are unverified.
4. **Italy and Portugal: partner, do not build.** Italy's CIN is a one-off code that intermediaries display; Portugal keeps RNAL ([02](02-market-and-competition.md)). Guest-registration tools already own the compliance budget there.
5. **Spain: a warning, not a market.** The Supreme Court annulled the national NRUA register in May 2026 ([notariosyregistradores](https://www.notariosyregistradores.com/web/participa/noticias/el-ts-anula-registro-arrendamientos-corta-duracion/)). A rule-driven product can lose its rule overnight.

Regional expansion is **not** in the financial model. It is upside only.

## Exit and partnerships

**Likely buyers.**
- **PMS vendors serving French conciergeries:** Superhote, Biloki, Lodgify, Hostaway, Beds24, and Guesty, which bought the French PMS Smily and merged teams for the French market ([PhocusWire](https://www.phocuswire.com/news/online/guesty-acquires-smily-expand-french-str-market); date of the deal unverified). For them, buying a working, lawyer-checked module is faster than building it.
- **Compliance tools entering France:** Chekin (3.95-7.95 EUR per property, France "coming soon") ([Chekin](https://chekin.com/en/pricing/)).
- **Data and media:** PriceLabs, which owns Rental Scale-Up ([Rental Scale-Up](https://www.rentalscaleup.com/fr/pricelabs-acquiert-rental-scale-up-pour-offrir-plus-dinformations-sur-la-location-saisonniere/)).
- **Compliance services and add-on peers:** HostLegal; Firby (same per-unit add-on model) ([02](02-market-and-competition.md)).

**What it could be worth.** Small SaaS businesses under 1 MUSD ARR sell for about 2.5-4x revenue, or 4-6x seller's discretionary earnings when owner-dependent ([beancount.io, Jul 2026](https://beancount.io/fr/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide)). Single source; treat as indicative.
- Base case at month 36: ARR about 132,000 EUR, so about **330,000-530,000 EUR**; on earnings (about 61,000 EUR before founder pay), about 245,000-365,000 EUR.
- High case: ARR about 320,000 EUR, so about 0.8-1.3 MEUR.
- Low case: little more than the code and the rules table.

**Partnership routes that also work as exits.**
- **White-label licence to a PMS:** a per-unit fee (for example 0.50-1.00 EUR per unit per month; my estimate) for the register, owner workflow and CSV, inside the PMS. This turns the main threat into revenue.
- **Asset sale** of the rules engine and customer list to a PMS that wants the feature quickly, probably at months 12-24, before the PMS builds its own (02 puts the window at 12-18 months).

**What raises the price:** clean per-unit metrics; churn under 2% a month; connectors to the top PMS; a lawyer-reviewed rules table kept up to date; French hosting; a codebase with tests that a buyer's engineers can read (important for code written by AI agents).

## Risks and mitigations

| # | Risk | Likelihood / impact | Mitigation |
|---|---|---|---|
| 1 | **PMS absorption.** Superhote, Biloki or Easy Concierge ship an API Meublés export ([02](02-market-and-competition.md)) | High / high | Stay PMS-agnostic; make the owner workflow and proof file the core; offer white-label to small PMS; sell early; keep the asset-sale exit open |
| 2 | **Chekin or another compliance tool** enters France with a bundle | Medium / medium | Integrate (Chekin has 50+ PMS links); price below; focus on the French IDM duties it does not cover |
| 3 | **Teleservice slips again** or opens with easy agent features | Medium / medium | Model without the add-on: peak cash rises from about 15,600 to 20,500 EUR. Sell the recurring file, not the wave |
| 4 | **The intermediary duty is softened or not enforced** (SNCL and UNPLV are lobbying) ([reseauclf.fr](https://reseauclf.fr/)) | Medium / high | Track enforcement; the proof file still serves change-of-use and night-cap defence; kill criterion below |
| 5 | **The state improves its own IDM tool** (register, bulk checks) | Low-medium / medium | The state will not build owner workflows or multi-PMS imports; keep those at the core |
| 6 | **High buyer churn** (closures, consolidation, carte G pressure) | High / medium | Target 10+ units; yearly plans; network deals; win the buyers of closing firms |
| 7 | **Founder abroad and not fluent in French** | Medium / high | French-speaking part-time helper from day 1 if needed; lawyer partners; trips at deadlines |
| 8 | **Liability for a wrong file** | Low / high | Customer approval of every file; pre-checks; liability cap within art. 1170 limits; insurance |
| 9 | **VAT errors** (charging or not charging French VAT) | Medium / low | Stripe Tax; VIES check of VAT numbers; OSS from day 1 |
| 10 | **Withholding tax raised by a buyer's accountant** | Low / low | Residence certificate in the help centre; standard-service wording in the terms |
| 11 | **Data Act early-termination rights** reduce yearly prepay | Low / low | Monthly by default; proportionate refund rules; free export |
| 12 | **Seasonal cash** (few sales June-September) | Certain / low | Plan spend around the three selling peaks; yearly plans in the low season |
| 13 | **Security incident** with owners' tax notices | Low / high | External security test before launch and yearly; encryption; short retention ([03](03-product-and-tech.md)) |
| 14 | **API Meublés format change** | Medium / medium | Column mapping in config; test file each quarter ([03](03-product-and-tech.md)) |

## Milestones and kill criteria

| Date | Milestone (base case) | Kill or change trigger |
|---|---|---|
| Sat 31 Oct 2026 (day 20) | 3+ pilots' Q3 2026 files prepared with our converter; the CSV template in hand | Fewer than 3 conciergeries with an IDM account found in 3 weeks: the duty is not yet live in practice. Pause sales; re-test in January |
| Tue 10 Nov 2026 (day 30) | 5+ written pre-commitments (founding offer or letter of intent) from 30 conversations | Fewer than 3: re-price or stop |
| Fri 6 Nov / Mon 7 Dec 2026 | MVP demo / paid launch (03) | Launch slips past 15 Jan 2027: miss the first deadline; cut scope |
| Sun 31 Jan 2027 | 25+ paying conciergeries; 80%+ of them filed Q4 2026 with the tool | Fewer than 10 paying: stop or sell the code |
| Fri 30 Apr 2027 | 45+ paying; trial-to-paid 20%+ | Fewer than 20 paying: stop paid marketing; run as a side product |
| Thu 30 Sep 2027 (month 12) | 60+ paying; MRR 3,600+ EUR; monthly churn 2.5% or less | Fewer than 30 paying or MRR under 1,800 EUR: stop, or sell to a PMS |
| Sat 30 Sep 2028 (month 24) | 115+ paying; ARR 90,000+ EUR | Fewer than 60 paying: stop investing; maintenance mode or sale |
| Sun 30 Sep 2029 (month 36) | 160+ paying; ARR 130,000+ EUR | Below 100: plan the exit |

Standing kill triggers at any time:
- Superhote, or two other top-5 PMS among French conciergeries, ship a free API Meublés export **and** quarterly churn passes 10% for two quarters in a row.
- The intermediary data duty (L324-2-1) is repealed or suspended.
- The lawyers find that the core output exposes the vendor to liability that insurance will not cover.

## Open questions

1. Does the founder speak business-level French? If not, the French-speaking helper starts in month 1, which adds about 3,600 EUR a quarter to the first two quarters.
2. Is the founder's company in the EU? If not, use Paddle or the non-Union OSS, and check the .fr domain and the 182 B treaty position for that country.
3. Will the DGE give one software vendor API access for many intermediaries, or only per-firm keys from fixed IPs ([03](03-product-and-tech.md))? Does it require a French SIRET?
4. When exactly does the national teleservice open, and how long is the transition window?
5. Do Superhote, Biloki and Easy Concierge plan an API Meublés export, and when? Would any of them white-label instead?
6. SNCL: salon date and stand price; how the buying group lists suppliers; member count.
7. Rental Scale-Up and SCALE France: sponsor and exhibitor prices (not public).
8. Must a French buyer "e-report" a purchase of services from a foreign supplier from Sep 2027?
9. Is a micro SaaS supplier exempt from the Data Act switching rules?
10. Does a SaaS fee count as business profits, not royalties, under the treaty between France and the founder's country?
11. Real seasonality of conciergerie buying: test with the first 50 sales.

## Sources

Primary and official:
- Code du tourisme (consolidated PDF): https://codes.droit.org/PDF/Code%20du%20tourisme.pdf
- Code civil (consolidated PDF): https://codes.droit.org/PDF/Code%20civil.pdf
- Code de commerce (consolidated PDF): https://codes.droit.org/PDF/Code%20de%20commerce.pdf
- Décret 2026-196, art. 6: https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053703536
- DGE, API Meublés: https://www.entreprises.gouv.fr/espace-entreprises/s-informer-sur-la-reglementation/lapi-meubles-guichet-unique-de-centralisation
- API Meublés commune list: https://apimeubles.finances.gouv.fr/api/grand-public/communes-list
- service-public.gouv.fr: https://www.service-public.gouv.fr/particuliers/actualites/A18880
- Bpifrance Création, VAT on EU services: https://bpifrance-creation.fr/encyclopedie/fiscalite-lentreprise/tva/tva-prestations-services-lunion-europeenne
- Implementing Regulation 282/2011 (EUR-Lex): https://eur-lex.europa.eu/eli/reg_impl/2011/282/oj/fra
- CNIL, e-mail prospecting: https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique-sms-mms-et-automate-dappel ; https://www.cnil.fr/fr/les-regles-dor-de-la-prospection-par-courrier-electronique-0
- Assemblée nationale, QE 37916 (.fr eligibility): https://www2.assemblee-nationale.fr/questions/detail/15/qe/37916/(vue)/pdf
- CNB, referral fees between lawyers (15 Sep 2026): https://cnb.avocat.fr/actualite/remuneration-de-l-apport-d-affaires-entre-avocats-le-cnb-ouvre-la-concertation
- European Commission, STR rules: https://transition-pathways.europa.eu/construction/news-publications/short-term-rentals-eu-transparency-rules-now-force
- Belgian DPA opinion 113/2026: https://www.autoriteprotectiondonnees.be/index.php/publications/avis-n0-113-2026.pdf

Payments:
- Stripe pricing (France): https://stripe.com/fr/pricing
- Stripe, Cartes Bancaires: https://docs.stripe.com/payments/cartes-bancaires.md?platform=web
- Paddle pricing: https://www.paddle.com/pricing
- Lemon Squeezy pricing: https://www.lemonsqueezy.com/pricing
- Freemius on Stripe Managed Payments: https://freemius.com/blog/stripe-merchant-of-record/

Tax and company:
- Fonoa, France digital services VAT: https://www.fonoa.com/resources/country-tax-guides/france/tax-on-digital-services
- Junto, VAT in France: https://junto.fr/en/blog/vat-in-france
- LegiFiscal, franchise thresholds: https://www.legifiscal.fr/actualites-fiscales/4289-adoption-definitive-texte-seuils-franchise-base-tva.html
- CCI Lyon, LF 2026 thresholds: https://www.lyon-metropole.cci.fr/actualite/micro-entreprises-le-projet-de-loi-de-finances-2026-relance-la-reforme-du-seuil-de
- Socic, e-invoicing calendar: https://www.socic.fr/ressources-comptabilite/articles/facturation-electronique-obligatoire-2026-2027-calendrier-plateformes-agreees-e-reporting-et-checklist-tpe-pme
- Tiime, e-invoicing and foreign firms: https://blog.tiime.fr/facture-electronique-etranger
- Advizexperts, CGI art. 182 B: https://advizexperts.fr/code-general-impots/article-182-b-cgi-retenue-source-non-residents/
- Etudes fiscales internationales, 182 B and treaties: https://www.etudes-fiscales-internationales.com/archive/2017/07/09/art-182-b-et-traites-fiscaux-pas-d-imposition-pas-de-convent-25554.html
- LegalPlace, SASU creation cost: https://www.legalplace.fr/guides/cout-creation-sasu/
- Socic, yearly SASU cost: https://www.socic.fr/ressources-comptabilite/articles/cout-dune-sasu-par-an-en-2026-frais-fixes-greffe-comptable-assurance-banque-cfe-et-budget-reel-a-prevoir
- Socic, domiciliation: https://www.socic.fr/ressources-comptabilite/articles/domiciliation-sasu-2026-domicile-societe-de-domiciliation-ou-local-commercial-comparatif-complet
- Socic, SASU from abroad: https://www.socic.fr/ressources-comptabilite/articles/creer-une-sasu-en-france-depuis-letranger-conditions-fiscalite-et-obligations-du-non-resident-fiscal-francais
- Copeps, RCS registration: https://copeps.fr/actualites/immatriculation-au-registre-du-commerce-et-des-societes-rcs-obligatoire/
- Compteo, IS reduced rate: https://www.compteo.fr/blog/taux-reduit-is
- Legalstart, IS rates: https://www.legalstart.fr/fiches-pratiques/fiscalite-entreprises/taux-is/
- Simonnet Avocat, referral fees: https://www.simonnetavocat.fr/remuneration-de-lapport-daffaires-et-avocat-que-dit-la-loi/
- Bird & Bird, Data Act switching: https://www.twobirds.com/da/insights/2025/the-data-act-what-mandatory-switching-rights-mean-for-fixed-term-saas-models
- Krogerus, Data Act and SaaS: https://www.krogerus.com/articles/news/the-eu-data-act-and-saas-how-to-secure-annual-recurring-revenue-amid-mandatory-termination-rights

Market, prices and channels:
- comparatifchannelmanager (Superhote): https://comparatifchannelmanager.fr/?p=2312
- Chanlify comparison: https://chanlify.fr/comparatif-channel-managers-2026
- Easy Concierge: https://easy-concierge.fr/
- Firby: https://firby.fr/
- HostLegal: https://www.hostlegal.fr/
- Hostcare mandate (Jotform): https://form.jotform.com/260773313676361
- Chekin pricing: https://chekin.com/en/pricing/
- SNCL / Réseau CLF: https://reseauclf.fr/
- Majordia observatory: https://www.majordia.fr/ressources/observatoire-conciergeries-lcd
- Kohen Avocats, Paris conciergerie fines: https://kohenavocats.fr/2026/07/16/conciergerie-airbnb-condamnee-paris-amende-changement-usage-2026/
- Socic, teleservice guide: https://www.socic.fr/ressources-comptabilite/articles/declaration-en-ligne-des-meubles-de-tourisme-des-le-20-mai-2026-mode-demploi-complet
- Rental Scale-Up, SCALE France 2026: https://www.rentalscaleup.com/fr/scale-france-2026-cinq-ans/
- Rental Scale-Up, Exit Door 2026: https://www.rentalscaleup.com/fr/exit-door-2026-la-salle-parisienne-ou-se-negocie-la-consolidation-de-la-location-meublee-en-france/
- Rental Scale-Up, PriceLabs acquisition: https://www.rentalscaleup.com/fr/pricelabs-acquiert-rental-scale-up-pour-offrir-plus-dinformations-sur-la-location-saisonniere/
- MySweetImmo, FNAIM Rencontres: https://www.mysweetimmo.com/2025/07/18/rendez-vous-a-saint-malo-les-18-et-19-septembre-pour-les-22ᵉ-rencontres-de-limmobilier-de-loisirs/
- La Fabrique du Net, ad prices: https://www.lafabriquedunet.fr/logiciels/tendances/facebook-linkedin-instagram-twitter-quel-est-le-cout-dune-annonce
- Searchlab, Google vs LinkedIn CPC: https://searchlab.nl/en/compare/google-ads-vs-linkedin-ads
- PhocusWire, Guesty acquires Smily: https://www.phocuswire.com/news/online/guesty-acquires-smily-expand-french-str-market
- beancount.io, SaaS multiples 2026: https://beancount.io/fr/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide
- notariosyregistradores, Spain NRUA: https://www.notariosyregistradores.com/web/participa/noticias/el-ts-anula-registro-arrendamientos-corta-duracion/
