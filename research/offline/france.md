# France: offline-industries pass (2026-10-05)

Method: 35 WebSearch calls, mostly in French. The search tool returned a usage-limit refusal on call 36, so I stopped there, as the instructions say. WebFetch was not used, so all evidence comes from search-result summaries and indexed official pages. I did not re-report the main France report's items (CalypsoVet pharmacy bridge, vidangeur ANC reporting, Trackdéchets register mapper, funeral, taxi SEFi, phyto register, HVAC, CNAPS).

**Bottom line:** France again yields little. In quiet industries the French state tends to provide a free channel itself: VISIOCaptures for small fishing boats, CESU+/Pajemploi+ for household employers, TéléRuchers for beekeepers. Where it doesn't, the obligation is often a register kept on site and shown only on inspection, not a recurring filing. A newly regulated area that looked promising, collective-pool water surveillance (transferred from the ARS to operators on 1 Jan 2027), already has at least six digital carnet-sanitaire vendors. Two small "one record, many receiving bodies" niches survive, both at 3–4/10. Neither is ready to build.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Fairground operators (forains, manège owners) | Per installation, the operator must give each mayor the conclusions of the valid contrôle technique / vérification report, a corrective-action declaration if needed, and an attestation de bon montage after set-up (décret 2008-1458, art. 11). Each commune also has its own arrêté and emplacement application | Municipal arrêtés (Avignon 2026, Bretagne communes) and AMF guidance describe paper dossiers handed to the mairie. I found no software listing | Not verified. Search refused before I could find a count. | **Candidate (small)** | A true "one ride dossier, many communes" pattern. Low software density, but the count and willingness to pay are unknown |
| Vide-grenier / brocante organisers (associations, comités des fêtes, communes) | Register of exhibitors (identity, ID number, attestation of no more than 2 sales a year), numbered and signed by the mayor, filed with the mairie or sous-préfecture within 8 days of the event | Associathèque, MAIF and commune regulations all describe a paper "cahier de police". Organisers use HelloAsso to collect fees and ID scans, then copy into the register by hand | About 50,000 brocantes, braderies and vide-greniers a year (Businesscoot market study) | **Candidate (weak)** | Very large count and real per-event paperwork, but volunteer buyers, 1–2 events a year each, and HelloAsso is free |
| Collective pools in campsites, hotels and gîtes (piscines types A–D) | Décret 2026-118 (20 Feb 2026) and arrêté 23 June 2026: from 1 Jan 2027 the person responsible for the pool (PRP) runs the sampling programme via an accredited lab. Daily carnet sanitaire with 2 readings a day, results displayed and kept available to the ARS, incidents notified | Many operators still use printed carnets (ARS PDF templates, Excel models) | Not verified nationally. IdF alone has 222 type A/B establishments under ARS control (ARS IdF) | **Rejected: too competitive** | Becarepool, Poolog, Aquatycia, E-Carnet, Naly and Piscilog already sell digital carnets. Accredited labs (IANESCO and others) are the natural integrators |
| Small-scale fishing boats (<12 m) | Fishing sheet or logbook. E-reporting phased in to 10 Jan 2028. Arrêté of 12 May 2026 (JO 30 May) made it mandatory from 1 July 2026 for about 700 boats under multi-year plans | Many still file paper fiches de pêche | About 700 boats in the July 2026 wave; the rest of the <12 m fleet by 2028 (arrêté via L'Officiel des métiers) | **Rejected** | FranceAgriMer's VISIOCaptures app is free and covers both fiche and journal formats |
| Professional shore gatherers (pêche à pied professionnelle) | Monthly catch declaration by the 5th, one sheet per département, electronic or paper (arrêté 22 Oct 2012 as amended in 2017) | The paper fiche is still allowed | Not verified (small, coastal) | **Rejected** | Monthly but tiny volume. There is a state e-channel. The CRPMEM committees are the receivers, so there is no fragmentation |
| Household employers (domestic workers, nannies) | Monthly declaration, payslip and withholding tax | Fully digital, run by the state | Millions of employers (URSSAF) | **Rejected** | CESU+ and Pajemploi+ are free and include the immediate tax-credit advance |
| Second-hand dealers, dépôt-vente, antiques (brocanteurs) | Registre des objets mobiliers / livre de police, paper (initialled by the mayor) or ISO 14641 electronic, kept 10 years | Paper books still sold. Electronic is mandatory only for auction houses | Not verified | **Rejected** | The register is kept on site, not filed, and there is no new trigger. Livre-de-police.com and stock software already cover it |
| Scrap-metal dealers (ferrailleurs) | Police register (Penal Code art. 321-7), no cash payments since 2011, prior declaration to the préfecture. Six months' prison and €30,000 fine for failures | Gendarmerie inspects paper books. Recent copper-theft concern (Hauts-de-France about 30% of thefts) | Not verified | **Rejected** | No transmission obligation and no 2025–26 trigger. Okapia OS (livre de police + weighbridge), ScrapRight and similar exist |
| Gold and precious-metal buyers | Declaration of existence, livre de police (CGI art. 537), identity for transactions of €15,000 or more | Paper registers | Not verified | **Rejected** | Same register pattern. Small market already served by jeweller and stock software |
| Livestock traders (négociants en bestiaux) | BDNI movement notifications via EdE, herd register | Instructions are old (2004–2007). I could not confirm the current workflow | Not verified | **Not resolved** | Ran out of search budget. Agricultural cooperatives and EdE tools are probable substitutes (unverified) |
| Beekeepers | Annual hive declaration (1 Sept–31 Dec), NAPI number, receipt needed for subsidies | Online via TéléRuchers / mesdemarches. Cerfa 13995 on paper | Not verified | **Rejected** | Annual and free. Hobbyist-heavy |
| Tattoo and piercing studios | Prior ARS declaration, hygiene training (new arrêté of 5 March 2024, valid 5 years), DASRI | Paper or e-mail declaration to the ARS | Not verified | **Rejected** | One-off filing. DASRI is already on Trackdéchets (main report) |
| Farm seasonal-worker housing | Cerfa 61-2091 declaration to the préfet within 30 days, renewed yearly, plus a new one for each move of mobile housing. Fine €300–6,000 | Paper, filed in duplicate (DREETS guides, 2024–2025) | Not verified | **Rejected** | Annual, done once per site. Too infrequent to pay for software |

## 2. Opportunities

### Opportunity: Forain "dossier manège" router (one ride dossier → every commune on the tour)

**Industry:**
Fairground operators (industriels forains) running rides (manèges) at municipal fêtes foraines.

**Buyer:**
Owner-operator of a family fairground business with one to a few rides. Possibly also the fair organiser or the commune's placier, who receives the dossiers.

**Trigger / Why now:**
No new 2025–26 trigger found. The obligation is structural: décret 2008-1458, art. 11, plus commune arrêtés that are renewed every season (e.g. Avignon's arrêté for the 14 Feb–15 Mar 2026 fair). The why-now is weak, which is the main reason for the low score.

**Current workflow:**
1. Once a year, an approved body runs the contrôle technique or vérification on each ride. The report goes into the ride's dossier technique, which the operator keeps.
2. For each fair (many a season), the operator applies for an emplacement under that commune's arrêté. The application bundles the contrôle-technique conclusions, any corrective-action declaration, insurance, Kbis and carte de commerçant ambulant (bundle contents partly unverified per commune).
3. After set-up, the operator hands the mairie an attestation de bon montage, plus any new vérification or contre-visite report.
4. The commune checks the papers. In case of accident, the mayor's liability depends on having demanded them (Sénat question 2020, AMF guidance).

**Pain:**
The same documents go to every commune on the tour, in each commune's own format and deadline. The mayor's liability gives communes a reason to reject incomplete dossiers. I found no complaints posted online; the evidence is regulatory only.

**Existing solutions:**
Paper and e-mail. The approved inspection bodies issue the reports. Municipal market and fair management tools for placiers exist (names not verified this pass). Fetes-foraines.fr publishes the texts. I found no forain-side dossier software.

**Offline evidence:**
Commune arrêtés and AMF guidance describe paper pieces handed to the mairie. There is no SaaS review page or vendor blog for this workflow.

**Offline channel:**
Forain trade unions and federations (names and member counts not verified), the approved inspection bodies that visit every ride each year, and the placiers at the large fairs (Foire du Trône, Avignon, Lille and others). Phone outreach from commune fair arrêtés, which list operators in some cases.

**Market count:**
Not verified. The search budget ran out before I found a count. Must be established from the unions or INSEE NAF 93.21Z before any further work.

**The gap:**
No tool keeps a ride's dossier technique valid (expiry of the contrôle technique, contre-visite status) and produces each commune's application pack and attestation de bon montage on demand.

**Possible product:**
A per-ride document vault with expiry tracking, plus a "send pack to commune X" button that produces a PDF or e-mail matching that commune's arrêté and logs the attestation de bon montage.

**MVP:**
A mobile web app: upload the ride's reports and insurance, get expiry alerts, generate a dossier PDF per fair and an attestation de bon montage form to sign on site.

**Pricing hypothesis:**
€15–30 a month per business, or a done-for-you service at about €10 per dossier sent. Willingness to pay for pure software is doubtful. A service (we compile and send) is more realistic.

**How to find first customers:**
Fairs themselves (walk the fairground), forain unions, inspection bodies as resellers.

**Risks:**
Older, family-run, often itinerant buyers. Low software adoption. Small market. Communes may standardise or digitise their own intake.

**Founder access:**
Needs a French-speaking founder who is physically present at fairs. A non-local solo founder could not realistically sell this.

**Kill condition:**
Fewer than about 3,000 ride-operating businesses, or interviews showing that most fairs are long-standing places where the commune keeps last year's dossier and asks only for the new contrôle-technique conclusions.

**Score:** 3/10 (pain 5, frequency 6, mandatory 8, fragmentation 7, competition 7, incumbent gap 6, buyer accessibility 4, willingness to pay 3, MVP 8, distribution 4. No why-now, unverified market).

**Sources:**
- https://www.legifrance.gouv.fr/loda/id/JORFTEXT000020016181
- https://www.avignon.fr/fileadmin/actualites/Documents/2026/02_Fevrier/Arretes/Arrete_portant_reglement_de_la_fete_foraine_annee_2026_du_14_fevrier_2026_au_15_mars_2026.PDF
- https://www.amf.asso.fr/m/document/document.php?id=10059
- https://www.senat.fr/questions/base/2020/qSEQ200114006.html
- https://www.fetes-foraines.fr/textes-de-lois/modalites-du-controle-de-la-securite-des-maneges/

### Opportunity: Vide-grenier exhibitor register (online sign-up → mayor-ready register + filing)

**Industry:**
Organisers of ventes au déballage: vide-greniers, brocantes and braderies.

**Buyer:**
The commune (mairie events or associations service) that runs or authorises many events a year, or a large recurring organiser (comité des fêtes, parents' association). Single-event volunteer associations are not realistic payers.

**Trigger / Why now:**
No new rule. Steady demand: about 50,000 events a year and growing, with tax, customs and DGCCRF able to inspect the register during the event.

**Current workflow:**
1. The organiser files the prior declaration of the vente au déballage with the mairie.
2. Exhibitors sign up on paper or through HelloAsso and send an ID copy plus a signed attestation that they have not done more than two sales that year.
3. A volunteer copies names, addresses and ID numbers into a register that is numbered and initialled by the mayor.
4. The register stays on site during the event, then goes to the mairie or sous-préfecture within 8 days.

**Pain:**
Hand-copying hundreds of exhibitors for each event. Rules on the two-sales limit are hard to check. Sources disagree on where the register goes (mairie or sous-préfecture), which suggests local variation.

**Existing solutions:**
HelloAsso (free fee collection and form, no register output), paper bulletins and Excel. Some communes use online reservation tools with stand plans (named only generically in results; vendors not verified). Brocabrac hosts event documents.

**Offline evidence:**
Commune regulations as PDF and DOCX (Garches 2026, Saint-Aubin-sur-Mer 2026, Domloup and others) describe paper registers. Associations' insurers (MAIF, Matmut) publish the how-to guides.

**Offline channel:**
Mairies (events services). Departmental federations of comités des fêtes. Associations' insurers (MAIF and Matmut guides are already read by organisers). Phone outreach to organisers listed on Brocabrac and similar calendars.

**Market count:**
About 50,000 events a year (Businesscoot). The number of distinct paying organisers is far lower. Not verified.

**The gap:**
No organiser tool found that turns online sign-ups directly into a compliant, ordered register with ID details and attestation, ready for the mayor's initials, plus an archive per event.

**Possible product:**
A sign-up page where exhibitors enter identity data and the attestation and pay a fee. It outputs the numbered register PDF, a stand plan and the post-event filing pack.

**MVP:**
A form, payment and an ordered-register PDF export. Free for organisers, with a €1–2 fee per exhibitor.

**Pricing hypothesis:**
A per-exhibitor fee of €1–2 (exhibitors already pay €10–20 per pitch), or €200–500 a year per commune. Organisers will pay a transaction fee, not a subscription.

**How to find first customers:**
Event calendars (Brocabrac, vide-greniers listings) give organiser names and dates. Mairies of medium-sized towns that run several events a year.

**Risks:**
HelloAsso adds a register export. Volunteer churn. Seasonal (spring to autumn). Handling ID numbers creates GDPR exposure.

**Founder access:**
A non-local founder could build it. Selling to communes needs French and phone work. Possible remotely, but slow.

**Kill condition:**
HelloAsso or Brocabrac already offers register export (not verified this pass), or communes say a typed Excel list is accepted.

**Score:** 3/10 (pain 4, frequency 3, mandatory 7, fragmentation 4, competition 6, incumbent gap 6, buyer accessibility 6, willingness to pay 2, MVP 9, distribution 5).

**Sources:**
- https://www.associatheque.fr/fr/focus-vide-grenier-reglementation-a-respecter.html
- https://www.associatheque.fr/fr/fichiers/focus/Focus_Vide_Greniers.pdf
- https://www.maif.fr/associationsetcollectivites/associations/guides-manifestations/organiser-vide-grenier.html
- https://businesscoot.com/en/study/the-flea-market-france
- https://www.helloasso.com/associations/l-ecole-du-petit-vivier-en-fete-association-des-p/evenements/vide-grenier
- https://garches.fr/app/uploads/2026/03/Reglement-interieur-Vide-Grenier-2026.pdf

## 3. Rejected

- **Collective-pool surveillance, 2027 transfer from the ARS to operators:** This was the best trigger found (décret 2026-118 and arrêté of 23 June 2026, in force 1 Jan 2027, covering campsites, hotels and residences). It is killed by competition: Becarepool, Poolog (Neptech), Aquatycia, E-Carnet, Naly and Piscilog already sell digital carnets sanitaires. The accredited labs that will run the new sampling programmes are the natural integrators. Results are kept available to the ARS, not transmitted, so there is no filing router to build. Sources: https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054321840 , https://www.aquaproxima.fr/piscines-fin-prelevements-ars-controle-exploitant/ , https://becarepool.com/ , https://poolog.fr/ , https://www.aquatycia.fr/carnet-sanitaire-piscine
- **Small-boat fishing e-reporting (1 July 2026 wave and 2028):** FranceAgriMer's VISIOCaptures app is free. Source: https://play.google.com/store/apps/details?id=fr.franceagrimer.visiocaptures , https://www.lofficieldesmetiers.fr/petite-peche-la-declaration-numerique-saccelere-au-1er-juillet/
- **Household employers:** CESU+ and Pajemploi+ are free and do payslips, withholding and the tax-credit advance. Source: https://www.l-expert-comptable.com/a/529923-le-cheque-emploi-service.html
- **Scrap, second-hand and gold dealer police registers:** Registers are kept on site and not filed, and there is no new trigger. Okapia OS and livre-de-police.com exist. Sources: https://entreprendre.service-public.gouv.fr/vosdroits/F39552 , https://okapia-os.com/blog/logiciel-negoce-metaux-ferraille-recyclage , https://www.livre-de-police.com/reglementation-livre-de-police-electronique.html , https://www.douane.gouv.fr/sites/default/files/dana/files/6030.pdf
- **Pêche à pied professionnelle:** Monthly filing, but small volume and a state e-channel. Source: https://legifrance.gouv.fr/eli/arrete/2017/12/18/AGRM1734496A/jo/texte/fr
- **Beekeepers, tattoo studios, seasonal-worker housing:** Annual or one-off filings with free state channels. Sources: https://www.formulaires.service-public.fr/gf/cerfa_13995.do , https://www.auvergne-rhone-alpes.ars.sante.fr/tout-savoir-sur-le-tatouage-percage-et-maquillage-permanent , https://occitanie.dreets.gouv.fr/sites/occitanie.dreets.gouv.fr/IMG/pdf/hebergement_agricole_dreets_occitanie.pdf

## 4. Method notes

- **Worked:** French regulator vocabulary ("registre de police", "carnet sanitaire", "arrêté du … 2026", "déclaration au maire", "cerfa") surfaced Légifrance, ARS, DREETS and commune arrêtés quickly. Commune PDF regulations are the best offline evidence. AIDA/INERIS and lawyer blogs (kohenavocats) indexed 2026 arrêtés fast.
- **Didn't work:** Count queries (number of forains, pools, dealers) returned nothing usable. Old Assemblée nationale written questions (2007–2014) dominate the dealer queries. Before scoring any "unserved" niche, always run a "<obligation> numérique / application" query. It found the pool vendors and VISIOCaptures.
- **Unfinished:** The search tool refused at call 36. Livestock traders and forain market counts are unresolved.

Research model: Opus
