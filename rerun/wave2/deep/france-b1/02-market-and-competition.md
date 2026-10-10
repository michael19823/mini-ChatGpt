# France B1: tourist-rental registration and reporting manager for conciergeries: market size, buyers and competition (deep dive 02)

Date: 10 Oct 2026. Builds on [the B1 report](../reports/france-b1.md). Scope: market size, buyers, competition, channels and regional expansion. Law, product design and go-to-market detail are covered by the other agents.

Status: complete (10 Oct 2026). The full Sirene-by-commune match was cut short: the company-search API stopped answering after 175 records, so the share in scope comes from that sample.

## Summary

- **The buyer pool is real but small, and very micro.** I count **6,370 active legal units with "conciergerie" in their name** in Sirene (my count, 10 Oct 2026, via the state's [company search API](https://recherche-entreprises.api.gouv.fr/search?q=conciergerie&etat_administratif=A)). Only 543 are employers, 101 have 6 or more staff and 59 have 10 or more. Majordia's observatory, built on the same register, finds 8,492 conciergeries and independent hosts; 89% have no employees ([Majordia](https://www.majordia.fr/ressources/observatoire-conciergeries-lcd)). Trade sources say "about 5,000" conciergeries managing 300,000-400,000 units ([LivretAccueil](https://livretaccueil.com/en/etude-marche-conciergerie-locative-2026); [Hosting Academy](https://www.hosting-academy.fr/ressources/metiers/domaines/location-de-courte-duree)). My working number of **paying-capable targets is about 1,000-2,000 conciergeries today** (about 10 or more units and some units in an API Meublés commune), rising as more communes join (estimate, unverified).
- **The reporting duty only bites where a commune has joined API Meublés.** The public API of the state platform lists **410 communes** (383 with data on 4 Oct 2026). They include Paris, Nice, Marseille, Lyon, Toulouse, Lille, Strasbourg, Annecy, La Rochelle and Biarritz, but no commune in Gironde (so not Bordeaux) ([commune list](https://apimeubles.finances.gouv.fr/api/grand-public/communes-list); [statistics](https://apimeubles.finances.gouv.fr/api/grand-public/statistiques)). The platform already holds 9.34 million nights for 2026 on about 413,000 units, but only 27,142 units carry a registration number in the data ([public export](https://apimeubles.finances.gouv.fr/api/grand-public/export)). So the re-registration wave has barely begun.
- **Enforcement already reaches conciergeries.** Four Paris decisions reported in July 2026 fined an owner and her conciergerie company 440,000 EUR in total (change of use). The Cour de cassation says a professional manager "ne pouvait ignorer la réglementation applicable", and fines are set per person and per unit ([Kohen Avocats](https://kohenavocats.fr/2026/07/16/conciergerie-airbnb-condamnee-paris-amende-changement-usage-2026/)). The lawyer's advice is a product spec: one compliance file per address, dated proofs, a nights counter, exports and re-checks.
- **No product does the whole job.** No PMS was found that sends data to API Meublés. Easy Concierge (a small Breton PMS) lists an API Meublés module as "en préparation" ([easy-concierge.fr](https://easy-concierge.fr/)). Biloki stores numbers and counts nights but does not claim transmission ([Biloki](https://blog.biloki.fr/fr/blog/api-meubles-proprietaire-airbnb-abritel-guide-2026)). HostLegal sells carte G cover and contracts, not a compliance register ([HostLegal](https://www.hostlegal.fr/)). The real incumbent is the spreadsheet.
- **Willingness to pay is proven for add-ons priced per unit.** Firby sells an owner-invoicing add-on that plugs into seven PMS at **3-5 EUR per active unit per month** ([Firby](https://firby.fr/)). Conciergeries pay Superhote about 67 EUR HT a month for 3 units plus 7 EUR per extra unit ([comparatifchannelmanager](https://comparatifchannelmanager.fr/?p=2312)), HostLegal from 49.90 EUR HT a month, and Hostcare 39 EUR TTC per filing ([Jotform](https://form.jotform.com/260773313676361)). A compliance add-on at **2-3 EUR per unit per month with a 19-29 EUR floor** fits under these anchors.
- **Churn is high.** Sirene closures of conciergeries rose from 214 (2023) to 386 (2024) and 478 (2025), while 1,364 were created in 2024 ([Majordia](https://www.majordia.fr/ressources/observatoire-conciergeries-lcd)).
- **Channels are clear and cheap:** the new union SNCL (ex-Réseau CLF, 95 EUR membership, a buying group and a yearly salon), SPLM, UNPLV and FNAIM; Rental Scale-Up and its SCALE France event (Paris, 25-26 Nov 2026, for managers of 20+ units); PMS integration marketplaces; and a public lead list (Sirene plus the API Meublés commune list).
- **Regional expansion is weak for the reporting module.** The EU Regulation 2024/1028 puts the data duty on online platforms ([European Commission](https://transition-pathways.europa.eu/construction/news-publications/short-term-rentals-eu-transparency-rules-now-force)). France extended it to conciergeries. Spain's Supreme Court struck down the national NRUA register in May 2026 ([notariosyregistradores](https://www.notariosyregistradores.com/web/participa/noticias/el-ts-anula-registro-arrendamientos-corta-duracion/)). The register and diligence module could travel to Belgium (Brussels, Wallonia) and Italy (CIN), but guest-registration tools (Chekin, GuestAdmin) already own the compliance budget there.
- **Revenue view:** 75-150 customers at about 30 units and 2.5 EUR per unit per month (900 EUR a year each) gives **about 70,000-135,000 EUR a year**, base about 90,000 EUR. That is close to the B1 re-assessment (about 108,000 EUR base). It is a small, focused business, and the window before PMS vendors catch up is perhaps 12-18 months (my estimate).

## Buyer segments

| Segment | Count | Source | Year | Confidence |
|---|---|---|---|---|
| Meublés de tourisme (units) in France | about 1.2 million; "plus de 1,2 million d'enregistrements projetés" | [AN QE 14825](https://questions.assemblee-nationale.fr/q17/17-14825QE.htm) | 2026 | medium |
| **Communes on API Meublés** (where the intermediary reporting duty applies) | **410** in the public list; 383 with data. Top departments by number of communes: Var 48, Ardèche 47, Haute-Savoie 36, Charente-Maritime 26, Morbihan 25 | my count of [api/grand-public/communes-list](https://apimeubles.finances.gouv.fr/api/grand-public/communes-list) | 10 Oct 2026 | high (official live data) |
| Units and nights in API Meublés data (2026) | 9,342,745 nights; 213,845 "other" meublés, 6,500 main residences, 193,003 of unknown status (about 413,000 in all); 27,142 units with a registration number. Paris alone: 2.2 million nights, 50,296 "other" meublés, 0 with a number | [statistiques](https://apimeubles.finances.gouv.fr/api/grand-public/statistiques) and [export CSV](https://apimeubles.finances.gouv.fr/api/grand-public/export) (dateCalcul 4 Oct 2026); my sums | 2026 | high for the figures; my reading of "with a registration number" (probably new national or commune-uploaded numbers) is unverified |
| Conciergeries (trade estimates) | about 5,000, each managing 20-70 units on average; 300,000-400,000 units managed | [Xerfi](https://www.xerfi.com/blog/conciergeries-airbnb-un-marche-en-plein-essor-bouscule-par-la-loi-le-meur_2321); [Hosting Academy](https://www.hosting-academy.fr/ressources/metiers/domaines/location-de-courte-duree); [LivretAccueil](https://livretaccueil.com/en/etude-marche-conciergerie-locative-2026) | 2024-2026 | low-medium (no method published) |
| **Active legal units with "conciergerie" in the name (Sirene)** | **6,370** active (8,479 including closed); 2,936 sole traders, 3,411 companies; 543 employers; 101 with 6+ staff; 59 with 10+ staff | my count via [recherche-entreprises.api.gouv.fr](https://recherche-entreprises.api.gouv.fr/search?q=conciergerie&etat_administratif=A) | 10 Oct 2026 | high for the count. A sample of 75 names suggests most are short-term-rental firms (coast, mountains), with some corporate, child-care and car "conciergeries" mixed in. Firms without the word in their name (GuestReady, HostnFly, Welkeys) are missed. |
| Same, by NAF code | 96.09Z 3,149; 81.21Z 802; 68.32A 255; 82.99Z 218; 68.31Z 217; 55.20Z 201; 68.20A 173; 79.90Z 153; 68.20B 140; 81.10Z 80 | same API, `activite_principale` filter | 10 Oct 2026 | high |
| Same, in departments with the most API Meublés activity | Paris 510; Alpes-Maritimes 292; Gironde 222 (not on API Meublés) | same API, `departement` filter | 10 Oct 2026 | high |
| **Share of conciergerie head offices inside an API Meublés commune** | **27% (47 of 175)**; 26% (34 of 129) for short-term-rental NAF codes; 12 of 44 employers. Paris alone is 15 of the 47 | my match of the first 175 Sirene records against the 410 communes (INSEE codes from [geo.api.gouv.fr](https://geo.api.gouv.fr/communes?fields=nom,code,departement)); the full pull of 6,370 was blocked by the API | 10 Oct 2026 | medium-low (small, relevance-ordered sample; head office only, while units spread to nearby communes) |
| Conciergeries in Majordia's observatory | 8,492 "conciergeries and independent hosts" (the page also gives 8,813 and 11,968; not reconciled). 6,019 no employees (89.2%), 649 with 1-9 (9.6%), 60 with 10-49, 18 with 50+. Top: Paris 600, Var 526, Alpes-Maritimes 487, Bouches-du-Rhône 382, Gironde 298. 26.4% sole traders. 1,364 created in 2024. Closures 214 (2023), 386 (2024), 478 (2025), 291 (2026 to Oct) | [Majordia observatory](https://www.majordia.fr/ressources/observatoire-conciergeries-lcd) | Oct 2026 | medium (vendor, but built on Sirene and refreshed weekly) |
| **Working target: conciergeries with about 10+ units and at least some units in API Meublés communes** | **about 1,000-2,000 today** | my estimate: 6,400-8,500 conciergeries; 27% have their head office in a listed commune and perhaps 35-50% have at least one unit in one (units spread to nearby communes); about half of those run 10+ units. It grows as communes join | 2026 | low-medium (unverified) |
| Real-estate firms with a carte G (gestion) | 15,437 cards at 1 Jan 2025 (-176 in a year); 42,221 transaction cards; 5,088 syndic cards. Only a minority run seasonal rentals. | [Immo Matin, citing the CCI](https://www.immomatin.com/franchise/reseaux-franchise/immobilier-15-847-cartes-professionnelles-delivrees-par-les-cci-en-2025-par-rapport-a-2024.html) | 2025 | high for the stock; the seasonal share is unknown |
| Agencies running seasonal rentals (IDM too) | about 1,000-3,000 (my guess, unverified). The only hard figure is old: in 2017 the FNAIM holiday site listed 63,000 properties from 600 agencies | [FNAIM press release via Galivel (search snippet)](https://www.galivel.com/media/files/fnaim_lancement_appli_vacances_btob_ga.pdf) | 2017 | low |
| Large operators (in-house tech, poor targets) | HostnFly: 3,000+ apartments and about 140 local conciergeries (franchise-type); GuestReady: 600+ units in Paris, 1,000+ worldwide | search snippets of [Tourmag](https://www.tourmag.com/HostnFly-leve-9-M-pour-devenir-le-leader-europeen-de-la-conciergerie-des-logements_a99585.html), [investissement-locatif-avis](https://investissement-locatif-avis.fr/guestready-avis/), [Tendance Hôtellerie](https://www.tendancehotellerie.fr/articles-breves/communique-de-presse/10675-article/la-conciergerie-guestready-initie-un-partenariat-avec-we-stay-in-paris-et-acquiert-le-portefeuille-clients-d-ocf-porto) (unverified) | 2023-2026 | low. HostnFly's local network could be a channel. |
| Gîtes de France network (an IDM through its departmental relays) | 56,000 structures, 43,000 owners | search snippet of [L'Echo touristique](https://www.lechotouristique.com/article/gites-de-france-sest-approche-des-30-millions-de-nuitees-en-2025) (unverified) | 2025 | medium. Not a target: the network runs its own systems. |
| Multi-listing hosts (registration duty only, no IDM duty) | 38% of Île-de-France listings belong to multi-listing hosts in 2024 (29% in 2018) | Institut Paris Région, via search snippet ([Reporterre](https://reporterre.net/A-Paris-l-emprise-d-Airbnb-depasse-desormais-le-periph)) (unverified) | 2024 | low-medium. A weak payer for this product. |
| New concierges joining one marketplace | 258 new concierges on Superhosts.io in Jan-May 2026, 93 in May alone | search snippet of [Superhosts](https://superhosts.io/fr/blog/ete-2026-demande-conciergerie-airbnb-france) (unverified) | 2026 | low |

**Reading the numbers.**
- The register gives a hard floor: about 6,400 legal units call themselves "conciergerie", and the true number of short-term-rental managers is likely 6,000-8,500 once firms with other names are added (Majordia).
- Almost all are micro firms. Only about 730 employ anyone (Majordia). A no-employee conciergerie can still run 10-30 units, so units, not staff, define the target (unverified).
- The duty to send data applies only to units in the 410 API Meublés communes. About a quarter of conciergerie head offices sit in one of them (sample above), and more have some units there, because a conciergerie serves the communes around its base (estimate, unverified). Bordeaux (Gironde, about 220-300 conciergeries) is not yet on the list.
- The list grows as communes join. Each new commune creates new obliged conciergeries. That is a trigger a seller can watch.

## Buyer profile and pain

**Who the buyer is.**
- A founder-run firm with 0-2 staff, 10-50 units and a 15-35% commission ([LivretAccueil](https://livretaccueil.com/en/etude-marche-conciergerie-locative-2026); [Hosting Academy](https://www.hosting-academy.fr/ressources/metiers/domaines/location-de-courte-duree)). It is often young: many Sirene records date from 2019-2026 (my sample).
- It runs a PMS or channel manager. The ones seen most on conciergerie websites are Superhote (48), Lodgify (42), Avantio (34), Smily (28) and Beds24 (26) ([Majordia](https://www.majordia.fr/ressources/observatoire-conciergeries-lcd)). Below about 20 units, the spreadsheet still rules ([Rentaplus](https://rentaplus.immo/blog/logiciel-conciergerie-airbnb-5-20-logements/)).
- Many work without a carte G. FNAIM's April 2026 report says many are now applying for one ([Rental Scale-Up](https://www.rentalscaleup.com/fr/locations-de-courte-duree-en-france-et-la-loi-hoguet-que-dit-le-rapport-fnaim-davril-2026/)). HostLegal rents out its card for that reason ([HostLegal](https://www.hostlegal.fr/)).

**How they comply today.**
- The number is typed by hand into the PMS, which pushes it to Airbnb and Booking ([B1 report](../reports/france-b1.md)).
- The owner's sworn statement (L324-2-1) is likely collected on paper or by e-mail, if at all (unverified). I found no free conciergerie template for it in one search (gap).
- No conciergerie testimony about using API Meublés was found. The DGE says all IDM "doivent déjà utiliser la version bêta" ([DGE](https://www.entreprises.gouv.fr/espace-entreprises/s-informer-sur-la-reglementation/lapi-meubles-guichet-unique-de-centralisation)). How many have signed up is not public. The platform's public endpoints show no IDM count (my check of its public JavaScript).

**Pain, with evidence.**
- **Personal liability.** Paris courts fined an owner and her conciergerie company 440,000 EUR in total in four decisions (reported July 2026). Fines are per person and per unit and are not shared ([Kohen Avocats](https://kohenavocats.fr/2026/07/16/conciergerie-airbnb-condamnee-paris-amende-changement-usage-2026/)). The same lawyer cites up to 12,500 EUR per unit for information and display failures and up to 50,000 EUR for transmission or withdrawal failures (same source; amounts to be checked in file 01).
- **What lawyers tell them to keep:** one compliance file per address; dated copies of title, co-ownership rules, change-of-use permit, registration and main-residence proof; a nights count per unit and year; regular booking exports; suspension of listings on a warning (same source). Today this lives in folders and e-mails.
- **Union push-back.** SNCL argues that "une conciergerie ne doit pas être considérée comme responsable des obligations qui incombent à son client propriétaire" ([reseauclf.fr](https://reseauclf.fr/)). The industry feels the burden, and it may lobby it down.
- **Re-registration chase.** Only 27,142 units in the API Meublés data carry a number so far ([export](https://apimeubles.finances.gouv.fr/api/grand-public/export)). When the national teleservice opens (planned Q4 2026), each conciergerie must get every owner to re-file, then collect and check the new number.
- **Thin direct evidence.** Searches for forum posts and press testimony about API Meublés from conciergeries found none. The system is new and the teleservice is not open (unverified whether pain is felt yet).

## Willingness to pay

| What they buy today | Price | Source |
|---|---|---|
| Superhote (French PMS) | 67 EUR HT/month for 3 units + 7 EUR HT per extra unit | [comparatifchannelmanager](https://comparatifchannelmanager.fr/?p=2312) |
| Smoobu | 29 EUR/month for 1 listing + 9.60 EUR per extra listing (+0.9% commission on the Flex plan) | [Chanlify comparison](https://chanlify.fr/comparatif-channel-managers-2026) (vendor-published) |
| Easy Concierge (small French PMS) | 25 EUR HT/month for 5 units + 3 EUR per extra unit; 99 EUR for 15 units | [easy-concierge.fr](https://easy-concierge.fr/) |
| Beds24 / Guesty Lite / Eviivo | from 15.50 EUR/month / 9 USD per listing / 40-110 EUR HT a month | [Chanlify comparison](https://chanlify.fr/comparatif-channel-managers-2026) |
| **Firby (owner-invoicing add-on on top of 7 PMS)** | **5.00 EUR per active unit per month (1-10 units), falling to 3.00 EUR (101+)** | [firby.fr](https://firby.fr/) |
| HostLegal (carte G cover, contracts, legal watch) | from 49.90 EUR HT/month | [hostlegal.fr](https://www.hostlegal.fr/) |
| Hostcare (done-for-you registration filing) | 39 EUR TTC per unit, one-off | [Jotform](https://form.jotform.com/260773313676361) |
| GuestAdmin (Spanish guest-registration compliance) | "less than 1 EUR per property per week" | [guestadmin.io](https://guestadmin.io/) |
| Chekin (guest check-in compliance, France "coming soon") | 3.95-7.95 EUR per property per month | [chekin.com](https://chekin.com/en/pricing/) |
| SNCL union membership | 95 EUR TTC a year (unverified whether yearly) | [reseauclf.fr](https://reseauclf.fr/) |

**What it means.**
- Revenue per unit: 300,000-400,000 managed units bring 1.5-2 billion EUR of rent ([LivretAccueil](https://livretaccueil.com/en/etude-marche-conciergerie-locative-2026)). That is about 5,000 EUR per unit per year, so a 20% commission earns the conciergerie about 1,000 EUR per unit per year (my arithmetic). LivretAccueil's own "direct revenue" figure of 50-60 MEUR does not reconcile with this.
- A compliance add-on at 2 EUR per unit per month (24 EUR a year) is about 2.4% of that commission. Firby's 3-5 EUR is 4-6%. The tool costs far less than one fine.
- Fines are the strongest argument: 12,500-50,000 EUR per unit cited by lawyers, and real six-figure Paris cases ([Kohen Avocats](https://kohenavocats.fr/2026/07/16/conciergerie-airbnb-condamnee-paris-amende-changement-usage-2026/)).
- Two compliance-type tools already sit at 4-8 EUR per unit per month (Chekin) and about 4 EUR (GuestAdmin). A French compliance file at 2-3 EUR is cheap next to them.
- Limits: most buyers have no staff and watch every subscription. They expect the PMS to include such features. Pricing must stay below the PMS's per-unit fee (3-10 EUR) and ideally below Firby.

## Competitor table and discussion

"Duty list" means the conciergerie's duties as an intermediary (IDM): (1) inform owners and collect the sworn statement and number before listing; (2) show the number on every listing; (3) watch the 120-night cap (or the commune's lower cap) for main residences; (4) send each unit's number, address, listing URLs and nights to API Meublés every quarter (small firms) or month; (5) keep a proof file. Plus the one-off re-registration wave.

| Product | Country | What it covers vs the duty list | Price | Customers | Verdict |
|---|---|---|---|---|---|
| API Meublés (DGE) | FR | Receives (4). Has an IDM account with CSV upload and an API key screen (per file 01). No register, no diligence file, no cap counter for the IDM. | Free | All IDM; count not public | The pipe, not the tool. ([DGE](https://www.entreprises.gouv.fr/espace-entreprises/s-informer-sur-la-reglementation/lapi-meubles-guichet-unique-de-centralisation)) |
| National teleservice for hosts (Q4 2026) | FR | Issues the number to the host. Agent or bulk mode unverified. | Free | 1.2 M hosts | Covers filing for a single host; does nothing for the conciergerie's portfolio. ([service-public](https://www.service-public.gouv.fr/particuliers/actualites/A18880)) |
| Airbnb, Booking (platforms) | Global | Show and check (2); report their own data to API Meublés. | Commission | Everyone | They do not cover the conciergerie's own report or its proof file (unverified whether communes will accept platform data instead). |
| Biloki (PMS) | FR | (2) via sync; part of (3) with a cross-OTA nights counter and AI alerts; reports per unit. No claim of (4) or (5). | Not public; trial | Not public | Closest PMS. A partner or a fast follower. ([Biloki](https://blog.biloki.fr/fr/blog/api-meubles-proprietaire-airbnb-abritel-guide-2026)) |
| Easy Concierge (PMS) | FR | API Meublés module "en préparation"; addresses already normalised to the national address base (BAN) and INSEE codes. Nothing for (1), (3) or (5) on the page. | 25 EUR HT/month for 5 units + 3 EUR/unit | 20 clients, 170+ units (18 Sep 2026) | Proof that PMS vendors see the need. Tiny today. ([easy-concierge.fr](https://easy-concierge.fr/)) |
| Superhote, Smily, Avantio, Beds24, Lodgify, Smoobu, Hostaway, Guesty | FR / EU / US | (2) via a number field synced to channels (Smoobu, Lodgify confirmed). No API Meublés export found in searches (Oct 2026). | 3-10 EUR per unit per month | Superhote leads among French conciergeries (Majordia sample); founded 2016, "40,000+ users" per a comparison site ([comparatifchannelmanager](https://comparatifchannelmanager.fr/?p=2616), unverified) | The main threat if they add (4). They hold the bookings. ([Majordia](https://www.majordia.fr/ressources/observatoire-conciergeries-lcd); [Smoobu](https://www.smoobu.com/fr/?p=63976)) |
| Chanlify (channel manager for 1-20 listings) | FR | Says its tools include Loi Le Meur compliance features (no detail). | 19.90 EUR TTC/month for 1-3 listings + 9.90 EUR each | Not public | Small; claim unverified. ([Chanlify](https://chanlify.fr/comparatif-channel-managers-2026)) |
| HostLegal | FR | Contract pack (mandate plus amendment), dashboard of signatures, legal support, Le Meur watch. Partly (1). No (3), (4) or (5). | from 49.90 EUR HT/month | Not public | Proves conciergeries pay monthly for compliance comfort. Good bundle partner. ([HostLegal](https://www.hostlegal.fr/)) |
| Hostcare | FR | Done-for-you registration for one unit under a mandate. | 39 EUR TTC per unit | Its conciergerie network | One-off service; sets the price for assisted filing. ([Jotform](https://form.jotform.com/260773313676361)) |
| Firby | FR | None of the duties (owner invoicing). Imports from Superhote, Guesty, Lodgify, Smoobu, Smily, Hostaway, Beds24. | 3-5 EUR per active unit per month | Not public | Not a competitor. The model to copy: a PMS-agnostic add-on priced per unit. ([Firby](https://firby.fr/)) |
| Chekin | ES / EU | Guest check-in compliance: online check-in, "legal compliance", tourist taxes, ID checks; 50+ PMS integrations. Its French page describes the fiche de police, but its pricing page lists France as "coming soon". Nothing found on (1)-(5). | 3.95 / 5.95 / 7.95 EUR per property per month (Basic / Premium / Enterprise); minimum 3 units | "+200,000 properties worldwide" | A likely entrant: it is about to sell "compliance" to the same buyer in France, at a price buyers already accept. ([Chekin pricing](https://chekin.com/en/pricing/); [Chekin France](https://chekin.com/fr/legal/france/)) |
| GuestAdmin (Hubconnect) | ES / UK | Guest registration and reporting to authorities "across Europe". No French duties named. | < 1 EUR per property per week | "Hundreds of property managers" | Price anchor; not in France yet. ([guestadmin.io](https://guestadmin.io/)) |
| AdminLanding "Rent" app | FR | Said to track the 120/90-night cap and the registration number for owners. | not checked | not checked | Owner tool; unverified. ([AdminLanding](https://www.adminlanding.com/meuble-de-tourisme-registration)) |
| Déclaloc (Nouveaux Territoires) | FR | Commune-side declaration and validation; nothing for intermediaries found. | Paid by communes | Many intercommunalités | Not a competitor; a possible data partner. ([Grand Chambéry](https://www.grandchambery.fr/fileadmin/mediatheque/Oxyad/DelmDec/indexdec_20230511/Annexe31493.pdf)) |
| Lawyers (Kohen, Derhy and others) | FR | Advice and litigation; lists of what to keep. | hourly (unverified) | - | Referral partners, not competitors. |
| Spreadsheet plus shared folders | - | Everything, badly. | Free | Most conciergeries | The real incumbent. |

**Discussion.**
- Nobody yet sells the full compliance file plus the API Meublés pack. The closest is Biloki (register and night counter inside a PMS). Easy Concierge shows that PMS vendors are starting on transmission.
- The opening is a **PMS-agnostic compliance layer**: a unit register with number status, the owner's sworn statement e-signed, a proof file per address, a nights counter across PMS exports, and a quarterly CSV in the API Meublés format. Firby proves that French conciergeries buy such a layer per unit.
- The threat is strongest from Superhote, Biloki and Chekin. Superhote owns the French conciergerie base, Biloki already has half of the features, and Chekin sells compliance through 50+ PMS integrations elsewhere and lists France as "coming soon".

## Channels

- **Unions and networks.**
  - SNCL (Syndicat National des Conciergeries Locatives) is replacing Réseau CLF, which five conciergeries founded in 2020. Membership is 95 EUR TTC via HelloAsso. It lists members by department, runs a buying group ("centrale d'achat") with negotiated offers, and holds a yearly Salon de la conciergerie (Lille 2025, Marseille 2026) ([reseauclf.fr](https://reseauclf.fr/); [CLF deck](https://pros.martinique.org/wp-content/uploads/2025/08/Conference-CMT-CLF.pdf)).
  - SPLM, the other body named by CLF (same deck).
  - UNPLV, which launched "La Voix des Hébergeurs" in July 2026 ([Tendance Hôtellerie](https://www.tendancehotellerie.fr/articles-breves/communique-de-presse/19798-article/l-unplv-donne-la-parole-aux-hebergeurs-francais-pour-contribuer-collectivement-a-une-revision-plus-equilibree-des-regles-encadrant-le-secteur-de-la-location-touristique)).
  - FNAIM (agencies; April 2026 report on conciergeries and loi Hoguet; its Commission Locations de Vacances holds the yearly "Rencontres" for holiday-rental agencies, the 22nd in Saint-Malo on 18-19 Sep 2025 ([MySweetImmo](https://www.mysweetimmo.com/2025/07/18/rendez-vous-a-saint-malo-les-18-et-19-septembre-pour-les-22ᵉ-rencontres-de-limmobilier-de-loisirs/))) ([Rental Scale-Up](https://www.rentalscaleup.com/fr/locations-de-courte-duree-en-france-et-la-loi-hoguet-que-dit-le-rapport-fnaim-davril-2026/)).
- **Media and events.** Rental Scale-Up (trade media) runs SCALE France on 25-26 Nov 2026 in Paris for managers of more than 20 units, with a "SCALE With AI" day on 24 Nov; Guesty sponsors ([Rental Scale-Up](https://www.rentalscaleup.com/fr/scale-france-2026-cinq-ans/); [Guesty](https://www.guesty.com/event-lp/scale-france/)).
- **Influencers and trainers.** Loïc Cardin (Invest Malin, YouTube) trains new conciergerie founders ([PriceLabs](https://hello.pricelabs.co/fr/blog/leaders-location-courte-duree-en-france/)). LivretAccueil and Hosting Academy run content and training ([LivretAccueil](https://livretaccueil.com/formation-conciergerie/reglementation-conformite)).
- **PMS integration marketplaces.** Superhote, Guesty, Lodgify, Smoobu, Smily, Hostaway and Beds24 already let Firby read their data ([Firby](https://firby.fr/)). Listing in their marketplaces puts the product where the data is.
- **Partners who sell compliance.** HostLegal (carte G plus contracts), conciergerie insurers (SNCL's partner "Assurances Conciergerie"), and lawyers who write on Le Meur (Kohen, Derhy).
- **Data-driven outbound.** The Sirene API gives names, addresses and NAF codes for every "conciergerie". The API Meublés commune list shows where the duty applies and grows over time. Majordia finds a website for 28.7% of conciergeries ([Majordia](https://www.majordia.fr/ressources/observatoire-conciergeries-lcd)). An email or LinkedIn sequence can be triggered when a commune joins.
- **Franchise networks** sell to many branches at once: for example Welcome 2 Home ([toute-la-franchise](https://www.toute-la-franchise.com/franchise/welcome-2-home)), Home Partner and La Conciergerie.fr ([AC Franchise](https://ac-franchise.com/article/zoom-sur-la-franchise-home-partner-la-conciergerie); [AC Franchise](https://ac-franchise.com/article/coup-de-projecteur-sur-le-reseau-la-conciergerie-fr)), and HostnFly's network of about 140 local conciergeries (search snippet, unverified). Their sizes are not checked.

## Regional expansion

- **The quarterly reporting module is mostly French.** The EU Regulation 2024/1028 applies from 20 May 2026. It sends booking data monthly from platforms to each state's Single Digital Entry Point, and registration schemes are optional for states ([European Commission](https://transition-pathways.europa.eu/construction/news-publications/short-term-rentals-eu-transparency-rules-now-force)). France's décret 2026-196 extends the data duty to every intermediary, including conciergeries ([DGE](https://www.entreprises.gouv.fr/espace-entreprises/s-informer-sur-la-reglementation/lapi-meubles-guichet-unique-de-centralisation)). I found no other state doing the same (unverified).
- **Belgium (French-speaking, closest fit).** Brussels requires registration with Bruxelles Économie et Emploi and the number on the listing (unverified; secondary search result only). Wallonia is drafting short-term rental rules with platform controls reported to Tourisme Wallonie ([APD opinion 113/2026](https://www.autoriteprotectiondonnees.be/index.php/publications/avis-n0-113-2026.pdf)). The register and proof-file modules could sell there. Duties on managers are unverified.
- **Spain (cautionary).** The Supreme Court annulled the national NRUA register (judgment 620/2026, announced 21 May 2026, published in the BOE on 8 Jun 2026). Regional licences and the digital single window remain ([notariosyregistradores](https://www.notariosyregistradores.com/web/participa/noticias/el-ts-anula-registro-arrendamientos-corta-duracion/); [idealista](https://www.idealista.com/news/node/898563)). The yearly February report (Orden VAU/1560/2025) seems to fall with it (unverified) ([infobae](https://www.infobae.com/america/agencias/2025/12/31/vivienda-aprueba-el-modelo-informativo-anual-obligatorio-para-los-arrendamientos-de-corta-duracion/); [net2rent](https://net2rent.com/nueva-normativa-alquiler-vacacional/)). Lesson: a rule-driven product can lose its rule overnight.
- **Italy.** The national CIN code (BDSR portal) has applied since 1 Jan 2025. Intermediaries must show it on listings ([money.it](https://www.money.it/come-indicare-il-cin-affitti-brevi-nel-730-2026); [investireoggi](https://www.investireoggi.it/cin-affitti-brevi-proroga-per-tutti-al-1-gennaio-2025-avviso-mitur/)). This is a one-off code, and guest-reporting tools already serve managers there.
- **Portugal.** RNAL stays the registration system; the number becomes the EU identifier ([MCS](https://mcs.pt/eu-regulation-2024-1028-on-short-term-rentals-enters-into-application-on-20-may-2026-what-changes-for-alojamento-local-platforms-and-hosts/)).
- **Switzerland.** Geneva asks hosts to register with the tourism office and to report foreign guests to the police; Vaud keeps a host register and a traveller register. No listing number or manager reporting was found ([Airbnb help, Switzerland](https://sk.airbnb.com/help/article/1738?locale=fr)). The market is small: about 692 active listings around Geneva, Annemasse and Thonon, half run by professional managers ([bnbcalc](https://www.bnbcalc.com/fr/markets/ch/geneva)) (unverified).
- **Luxembourg, Québec:** not checked (open question).
- **Verdict:** sell France first and only. A later "EU register and proof file" product for Belgium and Italy is possible but small, and it would compete with Chekin and GuestAdmin.

## Implications for positioning and pricing

1. **Position as the conciergerie's compliance file, not a filing service.** Lead with "one file per address, ready for an inspection, plus the quarterly API Meublés CSV". This answers the lawyer's checklist and the fines. Filing help for the re-registration wave is the door-opener, sold per unit.
2. **Be PMS-agnostic and per-unit, like Firby.** Start with CSV import from Superhote, Lodgify, Smoobu, Smily, Avantio and Beds24 exports, then add APIs in the order of the Majordia sample (Superhote first).
3. **Price:** 2.50 EUR per unit per month, with a floor of 19 EUR (up to about 8 units) and volume steps down to about 1.50 EUR above 100 units. Assisted re-registration at 15-25 EUR per unit, under Hostcare's 39 EUR. That stays under Firby (3-5 EUR) and well under a PMS seat (my proposal, unverified).
4. **Target first** the conciergeries with units in the 410 API Meublés communes: Paris (about 510 by name), Alpes-Maritimes (about 290), Var, Haute-Savoie, Charente-Maritime, Morbihan and Loire-Atlantique. Watch the commune list and email conciergeries when their commune joins.
5. **Partner rather than fight:** an SNCL buying-group discount, a HostLegal bundle (they have contracts but no file), and lawyer referrals. Offer white-label or a data feed to small PMS vendors (Easy Concierge, Chanlify) who lack the module.
6. **Plan for absorption.** If Superhote or Biloki ships an API Meublés export, the moat is the proof file, multi-PMS portfolios, owner e-signature and the cap rules per commune. Keep those at the core.
7. **Size expectations.** With about 1,000-2,000 targets today, 75-150 customers at about 30 units each gives about 70,000-135,000 EUR ARR. That is a viable solo business with the owner's low build cost, not a venture-scale one.

## Open questions

- How many IDM have registered on API Meublés? The public endpoints do not show it. Ask the DGE (api-meubles.dge@finances.gouv.fr, per the app's code).
- What share of conciergeries have units in the 410 communes? My match covers 175 head offices only (27%). Re-run the full pull of 6,370 records when the company-search API answers again, and survey unit locations in interviews.
- Will communes and the DGE enforce conciergerie reporting, or rely on Airbnb and Booking data?
- What do the 27,142 "units with a registration number" mean, and why does Paris show 0?
- How are conciergeries distributed by number of units? No survey was found.
- Do Superhote, Lodgify, Smoobu, Hostaway, Guesty, Avantio and Smily plan an API Meublés export, and when?
- What does Chekin charge in France, and does it plan Le Meur features?
- Do Belgium (Brussels, Wallonia), Switzerland, Luxembourg or Québec impose reporting duties on managers?
- How many real-estate agencies run seasonal rentals?

## Sources

All accessed 10 Oct 2026. Primary or official sources are marked (official).

- https://recherche-entreprises.api.gouv.fr/search?q=conciergerie&etat_administratif=A (official)
- https://www.majordia.fr/ressources/observatoire-conciergeries-lcd
- https://livretaccueil.com/en/etude-marche-conciergerie-locative-2026
- https://www.hosting-academy.fr/ressources/metiers/domaines/location-de-courte-duree
- https://apimeubles.finances.gouv.fr/api/grand-public/communes-list (official)
- https://apimeubles.finances.gouv.fr/api/grand-public/statistiques (official)
- https://apimeubles.finances.gouv.fr/api/grand-public/export (official)
- https://kohenavocats.fr/2026/07/16/conciergerie-airbnb-condamnee-paris-amende-changement-usage-2026/
- https://easy-concierge.fr/
- https://blog.biloki.fr/fr/blog/api-meubles-proprietaire-airbnb-abritel-guide-2026
- https://www.hostlegal.fr/
- https://firby.fr/
- https://comparatifchannelmanager.fr/?p=2312
- https://form.jotform.com/260773313676361
- https://transition-pathways.europa.eu/construction/news-publications/short-term-rentals-eu-transparency-rules-now-force (official)
- https://www.notariosyregistradores.com/web/participa/noticias/el-ts-anula-registro-arrendamientos-corta-duracion/
- https://questions.assemblee-nationale.fr/q17/17-14825QE.htm (official)
- https://www.xerfi.com/blog/conciergeries-airbnb-un-marche-en-plein-essor-bouscule-par-la-loi-le-meur_2321
- https://geo.api.gouv.fr/communes?fields=nom,code,departement (official)
- https://www.immomatin.com/franchise/reseaux-franchise/immobilier-15-847-cartes-professionnelles-delivrees-par-les-cci-en-2025-par-rapport-a-2024.html
- https://www.galivel.com/media/files/fnaim_lancement_appli_vacances_btob_ga.pdf
- https://www.tourmag.com/HostnFly-leve-9-M-pour-devenir-le-leader-europeen-de-la-conciergerie-des-logements_a99585.html
- https://investissement-locatif-avis.fr/guestready-avis/
- https://www.tendancehotellerie.fr/articles-breves/communique-de-presse/10675-article/la-conciergerie-guestready-initie-un-partenariat-avec-we-stay-in-paris-et-acquiert-le-portefeuille-clients-d-ocf-porto
- https://www.lechotouristique.com/article/gites-de-france-sest-approche-des-30-millions-de-nuitees-en-2025
- https://reporterre.net/A-Paris-l-emprise-d-Airbnb-depasse-desormais-le-periph
- https://superhosts.io/fr/blog/ete-2026-demande-conciergerie-airbnb-france
- https://rentaplus.immo/blog/logiciel-conciergerie-airbnb-5-20-logements/
- https://www.rentalscaleup.com/fr/locations-de-courte-duree-en-france-et-la-loi-hoguet-que-dit-le-rapport-fnaim-davril-2026/
- https://www.entreprises.gouv.fr/espace-entreprises/s-informer-sur-la-reglementation/lapi-meubles-guichet-unique-de-centralisation (official)
- https://reseauclf.fr/
- https://chanlify.fr/comparatif-channel-managers-2026
- https://guestadmin.io/
- https://chekin.com/en/pricing/
- https://www.service-public.gouv.fr/particuliers/actualites/A18880 (official)
- https://comparatifchannelmanager.fr/?p=2616
- https://www.smoobu.com/fr/?p=63976
- https://chekin.com/fr/legal/france/
- https://www.adminlanding.com/meuble-de-tourisme-registration
- https://www.grandchambery.fr/fileadmin/mediatheque/Oxyad/DelmDec/indexdec_20230511/Annexe31493.pdf
- https://pros.martinique.org/wp-content/uploads/2025/08/Conference-CMT-CLF.pdf
- https://www.tendancehotellerie.fr/articles-breves/communique-de-presse/19798-article/l-unplv-donne-la-parole-aux-hebergeurs-francais-pour-contribuer-collectivement-a-une-revision-plus-equilibree-des-regles-encadrant-le-secteur-de-la-location-touristique
- https://www.mysweetimmo.com/2025/07/18/rendez-vous-a-saint-malo-les-18-et-19-septembre-pour-les-22ᵉ-rencontres-de-limmobilier-de-loisirs/
- https://www.rentalscaleup.com/fr/scale-france-2026-cinq-ans/
- https://www.guesty.com/event-lp/scale-france/
- https://hello.pricelabs.co/fr/blog/leaders-location-courte-duree-en-france/
- https://livretaccueil.com/formation-conciergerie/reglementation-conformite
- https://www.toute-la-franchise.com/franchise/welcome-2-home
- https://ac-franchise.com/article/zoom-sur-la-franchise-home-partner-la-conciergerie
- https://ac-franchise.com/article/coup-de-projecteur-sur-le-reseau-la-conciergerie-fr
- https://www.autoriteprotectiondonnees.be/index.php/publications/avis-n0-113-2026.pdf (official)
- https://www.idealista.com/news/node/898563
- https://www.infobae.com/america/agencias/2025/12/31/vivienda-aprueba-el-modelo-informativo-anual-obligatorio-para-los-arrendamientos-de-corta-duracion/
- https://net2rent.com/nueva-normativa-alquiler-vacacional/
- https://www.money.it/come-indicare-il-cin-affitti-brevi-nel-730-2026
- https://www.investireoggi.it/cin-affitti-brevi-proroga-per-tutti-al-1-gennaio-2025-avviso-mitur/
- https://mcs.pt/eu-regulation-2024-1028-on-short-term-rentals-enters-into-application-on-20-may-2026-what-changes-for-alojamento-local-platforms-and-hosts/
- https://sk.airbnb.com/help/article/1738?locale=fr
- https://www.bnbcalc.com/fr/markets/ch/geneva
- https://rendify.fr/ (checked; a free yield simulator with Le Meur guides, not a competitor)
