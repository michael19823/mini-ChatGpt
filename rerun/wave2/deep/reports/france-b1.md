# France B1: Tourist-rental registration and renewal manager for conciergeries (API Meublés)

## Summary

**Verdict: maybe. Score: 5/10.**

The duty is real and wide. Under loi n° 2024-1039 and Art. L324-1-1 Code du tourisme, every meublé de tourisme in France needs a national registration number (NER) shown on each listing. The national teleservice for hosts is still not open: the DGE plans it for Q4 2026 ([DGE](https://www.entreprises.gouv.fr/espace-entreprises/s-informer-sur-la-reglementation/lapi-meubles-guichet-unique-de-centralisation); [service-public.gouv.fr, 27 Jul 2026](https://www.service-public.gouv.fr/particuliers/actualites/A18880)). When it opens, every holder of an old commune number must re-register within "several months", so a one-off wave of about 1.2 million filings is coming (same sources).

The original idea (track registrations and renewals) is weak on its own. Filing is free, Hostcare already files for 39 EUR per unit, PMS tools already store and sync the number, and the renewal interval is still unpublished, so the "recurring" part is unproven. This pass found a stronger hook. The DGE names **conciergeries as intermediaries (IDM)**. Under décret 2026-196, intermediaries must send the DGE each listing's number, address, listing URLs and nights rented: **quarterly for micro and small firms, monthly for larger ones** ([DGE](https://www.entreprises.gouv.fr/espace-entreprises/s-informer-sur-la-reglementation/lapi-meubles-guichet-unique-de-centralisation); [Légifrance, décret 2026-196 art. 6](https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053703536)). That is a true recurring reporting duty on about 5,000 small firms. The pitch is "one bundle: NER filing and tracking for every unit, plus quarterly API Meublés reporting".

The main risk is that the PMS and channel-manager vendors (Smoobu, Lodgify, Hostaway, Guesty, Superhote) add this as a feature. They already hold the data. The buyer pool is also small.

## Duty

**Legal basis**
- Loi n° 2024-1039 of 19 Nov 2024 ("loi Le Meur") rewrote Art. L324-1-1 Code du tourisme. From 20 May 2026, anyone offering a meublé de tourisme anywhere in France must declare it to a national teleservice and get a registration number. The number must appear on every listing ([Kohen Avocats, 2 Sep 2026](https://kohenavocats.fr/2026/09/02/numero-enregistrement-airbnb-2026-teleservice-national-quatrieme-trimestre-recours/); [Socic](https://www.socic.fr/ressources-comptabilite/articles/declaration-en-ligne-des-meubles-de-tourisme-des-le-20-mai-2026-mode-demploi-complet)).
- Décrets n° 2026-196 and 2026-197 of 19 Mar 2026 were published in the JO of 20 Mar and took effect on 21 Mar 2026 ([Banque des Territoires](https://www.banquedesterritoires.fr/meubles-de-tourisme-le-controle-des-donnees-enfin-operationnel-pour-les-communes); [Landot avocats](https://blog.landot-avocats.net/2026/03/20/collectivites-et-meubles-de-tourisme-deux-decrets-relatifs-a-la-plateforme-api-meubles/)). Décret 2026-197 creates the "API Meublés" data system. Décret 2026-196 adds Art. R.324-2-1 to R.324-2-6 ([Légifrance](https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053703536)).

**What hosts must do**
- Declare each unit, state whether it is the main residence, and prove it if so (for example with a tax notice) ([Moneyvox](https://www.moneyvox.fr/immobilier/actualites/108657/meubles-touristiques-une-declaration-en-ligne-bientot-obligatoire-pour-tous-les-loueurs)).
- Update the declaration when facts change, and renew it when it expires after a period "fixed by decree" ([Sénat, PPL text](https://conferenceconsensuslogement.senat.fr/leg/ppl24-086.pdf)). **I did not find that period in any source. It is not in Art. 6 of décret 2026-196 (unverified whether another text sets it).**
- Holders of a commune-issued number get "several months" to re-register on the national teleservice. After that, old numbers become invalid with platforms ([DGE](https://www.entreprises.gouv.fr/espace-entreprises/s-informer-sur-la-reglementation/lapi-meubles-guichet-unique-de-centralisation)). The length of the window is not stated.
- Paris and other tense-market cities add a second layer: a change-of-use permit for second homes, and a 90-night cap on main residences in Paris from 1 Jan 2025 ([Kohen Avocats](https://kohenavocats.fr/2026/09/02/numero-enregistrement-airbnb-2026-teleservice-national-quatrieme-trimestre-recours/)).

**What intermediaries (including conciergeries) must do**
- The DGE page says: "Sont par exemple considérées comme des intermédiaires de meublés les conciergeries de meublés de tourisme" ([DGE](https://www.entreprises.gouv.fr/espace-entreprises/s-informer-sur-la-reglementation/lapi-meubles-guichet-unique-de-centralisation)).
- Under R.324-2-1, an intermediary must send, for each unit: the registration number, the listing URL(s), the exact address and the nights rented through it. It may also send host identity, SIRET, main-residence status and yearly totals ([Légifrance](https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053703536)).
- The data goes in at the end of each period, within one month. The period is three months for micro and small firms that averaged under 4,250 listings a month, under EU Regulation 2024/1028, and one month for everyone else (same source).
- IDM registration on the API Meublés beta is mandatory for any intermediary handling at least one unit in a registered commune ([DGE](https://www.entreprises.gouv.fr/espace-entreprises/s-informer-sur-la-reglementation/lapi-meubles-guichet-unique-de-centralisation)). The technical channel for small IDM (API only, or also a file upload or web form) is **unverified**. The portal apimeubles.finances.gouv.fr gave no readable content.
- Intermediaries must also tell hosts about their declaration duties (Art. L324-2-1) ([CNFPT](https://www.cnfpt.fr/sites/default/files/standalone/1730989990/cadre-juridique.pdf)).

**Penalties**
- Hosts: a fine of up to 10,000 EUR for not declaring, and up to 20,000 EUR for a false declaration or false number ([Kohen Avocats](https://kohenavocats.fr/2026/09/02/numero-enregistrement-airbnb-2026-teleservice-national-quatrieme-trimestre-recours/); [Rentalscaleup](https://www.rentalscaleup.com/fr/pres-de-1-million-deuros-damendes-airbnb-a-paris-en-trois-mois-le-renforcement-de-la-reglementation-en-france-saccelere/)). I could not check these against the consolidated Légifrance text (unverified). Other sources cite 5,000 or 15,000 EUR.
- Hosts who fail to send the nights count to the commune face a civil fine of up to 10,000 EUR. The Cour de cassation upheld it on 26 Jan 2022, n° 21-40.026 ([ANIL](https://www.anil.org/jurisprudences-meubles-touristiques-obligation-transmission-donnes)).
- Intermediaries: a 2019 government answer cited up to 50,000 EUR per unit for a platform that fails to transmit data under the ELAN law ([Assemblée nationale QE 24839](https://www2.assemblee-nationale.fr/questions/detail/15/qe/24839/(vue)/pdf)). The current amount for a conciergerie is **unverified**.
- Change of use (CCH L651-2): up to 100,000 EUR per unit ([Kohen Avocats](https://kohenavocats.fr/2026/09/02/numero-enregistrement-airbnb-2026-teleservice-national-quatrieme-trimestre-recours/)).

**Enforcement**
- Paris: total fines are reported at about 1.3 MEUR in 2024 and 2.4 MEUR in 2025, and close to 1 MEUR in Q1 2026. A court fined one company 585,000 EUR on 15 Apr 2026. The city estimates about 25,000 illegal rentals ([Rentalscaleup](https://www.rentalscaleup.com/fr/pres-de-1-million-deuros-damendes-airbnb-a-paris-en-trois-mois-le-renforcement-de-la-reglementation-en-france-saccelere/)). This is a secondary source, so treat the figures as unverified.
- Airbnb was ordered to pay 8,000 EUR per listing published without a number (TJ Paris, référé, 1 Jul 2021) ([Le Monde du Droit](https://www.lemondedudroit.fr/droit-civil/280-immobilier-construction/76464-airbnb-condamnation-pour-defaut-de-numero-de-declaration-dans-ses-annonces.html)).
- I found no enforcement yet against a conciergerie for failing to report to API Meublés. This is expected, since the system only went live in 2026.

**Recent changes and timing**
- The API Meublés beta is live for communes and IDM. The next version and the host teleservice (built on Démarche Numérique) are planned for Q4 2026 ([DGE](https://www.entreprises.gouv.fr/espace-entreprises/s-informer-sur-la-reglementation/lapi-meubles-guichet-unique-de-centralisation)).
- In July 2026 the UNPLV lobby launched "La Voix des Hébergeurs" to push for softer rules ([Tendance Hôtellerie](https://www.tendancehotellerie.fr/articles-breves/communique-de-presse/19798-article/l-unplv-donne-la-parole-aux-hebergeurs-francais-pour-contribuer-collectivement-a-une-revision-plus-equilibree-des-regles-encadrant-le-secteur-de-la-location-touristique)).

## Buyers

- **Units:** about 1.2 million meublés de tourisme. Expected registrations are "plus de 1,2 million" ([AN QE 14825, JO 5 May 2026](https://questions.assemblee-nationale.fr/q17/17-14825QE.htm)). About 29,000 communes host meublés (France urbaine, cited by [Banque des Territoires](https://www.banquedesterritoires.fr/meubles-de-tourisme-le-controle-des-donnees-enfin-operationnel-pour-les-communes)).
- **Conciergeries:** about 5,000 in 2024 ([Xerfi, Oct 2025](https://www.xerfi.com/blog/conciergeries-airbnb-un-marche-en-plein-essor-bouscule-par-la-loi-le-meur_2321)). This is not a register count. A Sirene count by NAF code (for example 68.32A or 96.09Z) was not done (unverified). Commissions run 10 to 25% (Xerfi).
- **Segments:**
  1. Conciergeries with 10 to 200 units. They are the target: reporting duties fall on them directly, and they file or chase NERs for many owners.
  2. Real-estate agencies holding a carte G that run seasonal rentals. They are also IDM.
  3. Multi-unit private hosts with 2 to 10 units: a registration duty only, and a weak payer.
  4. Single-unit hosts: the free teleservice is enough for them.
- **How they comply today:** through the mairie, by commune web form or Déclaloc where one exists, until the teleservice opens ([gererseul.com](https://www.gererseul.com/numero-enregistrement-meuble-tourisme/); [Grand Chambéry](https://www.grandchambery.fr/fileadmin/mediatheque/Oxyad/DelmDec/indexdec_20230511/Annexe31493.pdf)). The number is typed by hand into the PMS, which pushes it to Airbnb and Booking ([Eldorado Immobilier](https://eldorado-immobilier.com/smoobu-vs-lodgify/)). How small conciergeries handle API Meublés reporting today is unknown (unverified). It is likely spreadsheets, or nothing yet.
- **Side pressure:** an April 2026 FNAIM report argues that many conciergeries need a carte G under the loi Hoguet ([Rentalscaleup](https://www.rentalscaleup.com/fr/locations-de-courte-duree-en-france-et-la-loi-hoguet-que-dit-le-rapport-fnaim-davril-2026/)). This could shrink or professionalise the segment.

## Competition

| Alternative | What it does | Price |
|---|---|---|
| National teleservice (DGE, Q4 2026) | Free filing, one unit at a time. Bulk or agent mode unverified. | Free ([service-public](https://www.service-public.gouv.fr/particuliers/actualites/A18880)) |
| Commune portals / Déclaloc (Nouveaux Territoires) | Commune-side declaration, used until the switch | Free to hosts ([Grand Chambéry](https://www.grandchambery.fr/fileadmin/mediatheque/Oxyad/DelmDec/indexdec_20230511/Annexe31493.pdf)) |
| Hostcare (Ac Gestion, Paris) | Done-for-you NER filing under a mandate, for its conciergerie network. No renewal; one unit per mandate. | 39 EUR TTC per unit (39.99 shown at payment) ([Jotform](https://form.jotform.com/260773313676361)) |
| Smoobu, Lodgify (PMS) | Store the NER per unit and sync it to channels. No validity check, no 120-night block. | Subscription (no separate fee) ([Eldorado](https://eldorado-immobilier.com/smoobu-vs-lodgify/); [Smoobu](https://www.smoobu.com/fr/?p=63976)) |
| Hostaway, Guesty, Superhote, Beds24 | NER fields or API Meublés export not confirmed | unverified |
| JD2M (jedeclaremonmeuble.com), accountants | Explain the process. LMNP tax work is the main product. | Not priced for this |

- I found **no PMS or other product that advertises automatic API Meublés reporting** for conciergeries ([search result, no match](https://hello.pricelabs.co/fr/blog/logiciel-de-conciergerie-comment-choisir-les-bons-outils-pour-gerer-vos-locations-saisonnieres/)). Large platforms (Airbnb, Booking) will build their own feeds.
- A free state tool covers host filing. No state tool does the conciergerie's quarterly data compilation; the state only provides the receiving API.

## Willingness to pay

- The only visible price for done-for-you filing is 39 EUR per unit ([Hostcare](https://form.jotform.com/260773313676361)). For a 50-unit conciergerie, the one-off re-registration wave is worth about 2,000 EUR at that price.
- Fines are high next to any likely fee: up to 10,000 or 20,000 EUR per unit for hosts (unverified against the code), and per-unit fines for intermediaries (50,000 EUR in the 2019 text, current level unverified). Paris collects millions a year ([Rentalscaleup](https://www.rentalscaleup.com/fr/pres-de-1-million-deuros-damendes-airbnb-a-paris-en-trois-mois-le-renforcement-de-la-reglementation-en-france-saccelere/)).
- Staff time: each quarter, compiling nights, URLs and addresses per unit from the PMS is perhaps 1 to 2 minutes per unit if the data is clean (my estimate, unverified). For a 100-unit firm that is a few hours a quarter. That is a modest pain.
- A plausible price is 1 to 2 EUR per unit per month (about 30 to 100 EUR a month for a typical conciergerie), plus 20 to 39 EUR per unit for assisted filing. These are my estimates (unverified). PMS seats already cost money, and buyers will expect the feature to be bundled.
- Rough ceiling: 5,000 conciergeries × about 600 EUR a year ≈ 3 MEUR a year in total. Reaching 5% of that gives about 150 kEUR ARR. That fits a solo business but is not large.

## Channels

- **Associations:** Réseau des Conciergeries Locatives de France (CLF, 2020) and SPLM (professionals of furnished rental, 2010) ([Martinique conference deck](https://pros.martinique.org/wp-content/uploads/2025/08/Conference-CMT-CLF.pdf)). Also UNPLV ([Tendance Hôtellerie](https://www.tendancehotellerie.fr/articles-breves/communique-de-presse/19798-article/l-unplv-donne-la-parole-aux-hebergeurs-francais-pour-contribuer-collectivement-a-une-revision-plus-equilibree-des-regles-encadrant-le-secteur-de-la-location-touristique)) and the FNAIM Commission Locations de Vacances ([Rentalscaleup](https://www.rentalscaleup.com/fr/locations-de-courte-duree-en-france-et-la-loi-hoguet-que-dit-le-rapport-fnaim-davril-2026/)).
- **Networks:** Hostcare-style conciergerie networks and franchises (unverified list), and trade media such as Rentalscaleup.
- **Marketplace integrations:** listing in the Smoobu, Lodgify or Hostaway app marketplaces puts the tool where the data lives (availability and terms unverified).
- **SEO:** demand is high right now for "numéro d'enregistrement meublé de tourisme 2026". Dozens of blogs rank for it ([gererseul](https://www.gererseul.com/numero-enregistrement-meuble-tourisme/), [flexiimo](https://flexiimo.fr/numero-enregistrement-meuble-tourisme/), [hoteboost](https://hoteboost.fr/blog/numero-enregistrement-location-saisonniere-2026)), so the space is crowded.
- **Offices de tourisme and intercommunalités:** they run taxe de séjour and Déclaloc and could refer conciergeries, but they serve communes, not intermediaries.

## Risks

1. **PMS absorption (high).** PMS tools hold the bookings, URLs and addresses, so an API Meublés export is a small feature for them. The large vendors serving France are likely to add it.
2. **Free state tool (high for filing).** The teleservice is free. If it adds an agent or bulk mode, done-for-you filing loses value.
3. **Recurrence unproven for NER.** The renewal period is unpublished. Registration may be close to a one-off wave in 2026-27.
4. **Unclear technical access.** It is unverified whether small IDM must use a machine API, or can upload files or type data into a web form. If a simple web form exists, the pain is low. If only an API exists, the pain is real but the tool needs DGE onboarding.
5. **Timing.** The teleservice keeps slipping (first 20 May 2026, now Q4 2026). The sales window depends on the DGE.
6. **Market size and churn.** About 5,000 conciergeries; many are tiny and short-lived. Hoguet (carte G) pressure may consolidate them.
7. **Liability and mandate.** Filing for owners needs a written mandate (Hostcare uses one). A wrong number or a false main-residence claim exposes the host to a fine of up to 20,000 EUR, and the tool vendor could be blamed. One summary says the declaration must be made "préalablement et en personne" ([Banque des Territoires](https://www.banquedesterritoires.fr/meubles-de-tourisme-le-controle-des-donnees-enfin-operationnel-pour-les-communes)), while décret 2026-196 lets the declarant differ from the host ([Légifrance](https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053703536)). Whether agents may file is unverified.
8. **Political softening.** The UNPLV lobbies for revision. A repeal is unlikely, since the EU STR Regulation 2024/1028 underpins the data flows.

## First product

**Version 1 (a conciergerie compliance console):**
- Import the portfolio from a PMS export (CSV first; Smoobu, Lodgify or Hostaway API later): unit, address, owner, listing URLs, NER.
- NER register: status per unit (missing, commune number awaiting migration, national number, invalid or expired), a validity checker for the 13-character format and commune code, and alerts when the migration window closes.
- Owner chase: send each owner a link to sign a mandate and upload a main-residence proof; then file for them (assisted) or guide them through the teleservice.
- Quarterly API Meublés pack: compute nights per unit per quarter from the bookings, and produce the R.324-2-1 dataset (NER, address, URLs, nights) in the DGE format. Send it via the API if access is possible; otherwise give a file and a checklist.
- Night caps: count nights per unit against the 120-day cap, or the commune's lower cap (Paris 90), and warn before the limit.

**First 30 days:**
1. Days 1-5: get the IDM technical documentation and the FAQ or replay from the DGE; register as an IDM on the API Meublés beta if allowed; confirm the format and whether there is an upload or form channel.
2. Days 1-10: interview 15 conciergeries through CLF, SPLM and LinkedIn. Ask how they plan to report, what PMS they use, and what they would pay.
3. Days 5-20: build the CSV import, the NER register, and the quarterly nights report generator (from Smoobu or Lodgify exports).
4. Days 15-30: run a paid pilot with 3 to 5 conciergeries before the Q4 2026 teleservice opening, and line up the first reporting deadline (the month after the quarter closes).
5. In parallel: write to Smoobu, Lodgify and Hostaway about their API Meublés roadmaps. If they plan it, pivot to filing assistance and the multi-commune rules layer.

## Open questions

- What is the validity period of a NER, and which text sets it? Is there a fee?
- How long is the migration window for commune numbers, and when does it start?
- Can a conciergerie file in bulk, or as agent, on the national teleservice?
- What exact channel do small IDM use to send data to API Meublés (API, file, form)? Has a ministerial arrêté set the format (R.324-2-6)?
- What is the current fine for an intermediary that fails to transmit data, and how would it apply to a small conciergerie?
- How many conciergeries are on Sirene, and how many are registered as IDM on API Meublés?
- Do Hostaway, Guesty, Superhote and Beds24 already plan API Meublés export?

## Sources

- https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053703536
- https://www.entreprises.gouv.fr/espace-entreprises/s-informer-sur-la-reglementation/lapi-meubles-guichet-unique-de-centralisation
- https://www.service-public.gouv.fr/particuliers/actualites/A18880
- https://questions.assemblee-nationale.fr/q17/17-14825QE.htm
- https://www2.assemblee-nationale.fr/questions/detail/15/qe/24839/(vue)/pdf
- https://conferenceconsensuslogement.senat.fr/leg/ppl24-086.pdf
- https://www.cnfpt.fr/sites/default/files/standalone/1730989990/cadre-juridique.pdf
- https://www.anil.org/jurisprudences-meubles-touristiques-obligation-transmission-donnes
- https://www.banquedesterritoires.fr/meubles-de-tourisme-le-controle-des-donnees-enfin-operationnel-pour-les-communes
- https://blog.landot-avocats.net/2026/03/20/collectivites-et-meubles-de-tourisme-deux-decrets-relatifs-a-la-plateforme-api-meubles/
- https://kohenavocats.fr/2026/09/02/numero-enregistrement-airbnb-2026-teleservice-national-quatrieme-trimestre-recours/
- https://www.socic.fr/ressources-comptabilite/articles/declaration-en-ligne-des-meubles-de-tourisme-des-le-20-mai-2026-mode-demploi-complet
- https://www.moneyvox.fr/immobilier/actualites/108657/meubles-touristiques-une-declaration-en-ligne-bientot-obligatoire-pour-tous-les-loueurs
- https://www.gererseul.com/numero-enregistrement-meuble-tourisme/
- https://form.jotform.com/260773313676361
- https://www.smoobu.com/fr/?p=63976
- https://eldorado-immobilier.com/smoobu-vs-lodgify/
- https://www.xerfi.com/blog/conciergeries-airbnb-un-marche-en-plein-essor-bouscule-par-la-loi-le-meur_2321
- https://www.rentalscaleup.com/fr/pres-de-1-million-deuros-damendes-airbnb-a-paris-en-trois-mois-le-renforcement-de-la-reglementation-en-france-saccelere/
- https://www.rentalscaleup.com/fr/locations-de-courte-duree-en-france-et-la-loi-hoguet-que-dit-le-rapport-fnaim-davril-2026/
- https://www.lemondedudroit.fr/droit-civil/280-immobilier-construction/76464-airbnb-condamnation-pour-defaut-de-numero-de-declaration-dans-ses-annonces.html
- https://pros.martinique.org/wp-content/uploads/2025/08/Conference-CMT-CLF.pdf
- https://www.tendancehotellerie.fr/articles-breves/communique-de-presse/19798-article/l-unplv-donne-la-parole-aux-hebergeurs-francais-pour-contribuer-collectivement-a-une-revision-plus-equilibree-des-regles-encadrant-le-secteur-de-la-location-touristique
- https://www.grandchambery.fr/fileadmin/mediatheque/Oxyad/DelmDec/indexdec_20230511/Annexe31493.pdf
- https://hello.pricelabs.co/fr/blog/logiciel-de-conciergerie-comment-choisir-les-bons-outils-pour-gerer-vos-locations-saisonnieres/
- https://flexiimo.fr/numero-enregistrement-meuble-tourisme/
- https://hoteboost.fr/blog/numero-enregistrement-location-saisonniere-2026
