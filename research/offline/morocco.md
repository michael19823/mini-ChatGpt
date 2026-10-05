# Morocco: Offline-Industries Pass

Research date: 2026-10-05. Track: Morocco (sources in French and Arabic). This pass complements `research/countries/morocco.md`, which covered fiduciaires (69-21), driving schools (NARSA), riads (guest declarations), e-invoicing, CBAM, seafood, pharmacies, private schools, clinics, hazardous waste and customs brokers. None of those is repeated here.

> **Evidence limits.** WebFetch is blocked, so every claim below comes from search-result summaries, and only URLs those searches returned are cited. 27 of the 40 budgeted searches were used. The session hit a usage limit, and per the instructions I stopped and wrote up what I had. Two Arabic queries (on farm labour and scrap dealers) returned only off-topic foreign results. Numbers I could not verify are marked **unverified** or **estimate**.

---

## 1. Quiet industries screened

| # | Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|---|
| 1 | **Adouls** (traditional Islamic notaries) | New Law 51.26: **daily electronic deposit** of every act on a Ministry of Justice platform, 10-year retention, qualified e-signature. Existing obligations: DGI e-registration (SIMPL, since 2019, with a 1,000 MAD fine for errors) and filings to ANCFCC for property deeds | Paper "double reception" by two adouls, handwritten registers, kept on paper in court registries (greffe) until now. No adoul-specific software found in French or Arabic searches | **Unverified.** No official count was found. My estimate is several thousand | **Opportunity (watch)** | A hard trigger (in force about Nov 2026) plus three receiving bodies. Platform and integration risk is high |
| 2 | Well-drilling contractors (puisatiers/foreurs) | Law 36-15 art. 114: a **driller permit** (draft decree approved Dec 2023). Owners file authorisations on each basin agency's (ABH) portal. Each job needs a start authorisation and an end-of-works report | Trade is largely clandestine. Authorisations are filed per basin agency | 30,000–40,000 drilling authorisations a year (ABH, via Hespress). Number of contractors unverified | **Weak opportunity** | Per-job "one job, several basin agencies" pattern, but the decree's status is unverified and the operators are informal |
| 3 | Pesticide/agrochemical distributors | ONSSA registration since 2019. Mandatory **purchase and sale registers**, inspected. Law 34-18 replaces Law 42-95 | Paper registers and invoices checked at inspection. Trade is "still threatened by the informal sector" (Médias24 2024) | >1,157 distributors under ONSSA surveillance; >40 non-compliance reports by July 2023 (Hespress) | **Weak opportunity** | Real register with enforcement, but no fresh dated trigger was found. Small, price-sensitive base |
| 4 | Domestic-worker employers (households) | Law 19-12 and Decree 2.18.686: written contract and CNSS declaration, mandatory since 2020 | Contract filed with the labour inspector. Very low compliance | Only 2,228 CNSS declarations and 2,574 contracts by Aug–Sep 2020 (Hespress, TelQuel). No 2025–26 figures found | **Reject** | Almost no one complies, there is no enforcement, and households won't pay. CNSS is free |
| 5 | Livestock fatteners (Aïd sheep) | ONSSA registration of fatteners and ear-tagging of sheep and goats before Aïd al-Adha | Done at the farm by ONSSA agents, free of charge | >223,000 fatteners registered, ~6–8M head identified (FNH, 2026 season) | **Reject** | The state runs it end to end at no cost. No buyer for software |
| 6 | Bureaux de change (manual FX) | Office des Changes rules, AML compliance officer (Law 43-05), registers | Inspectors checked paper registers | 7,565 FX points, 78% of them bank-owned (Le360, older OC data) | **Reject** | The Office des Changes launched the **"Sarf" single platform** (live 15 June 2026) with real-time transmission and a built-in AML module. The regulator is the substitute |
| 7 | Grand and petit taxi licence holders and operators | Taxi licences (agréments), with reform under study by the Interior Ministry | Rent-based licence system. Paper | 77,200 taxis (44,650 grand, 32,550 petit), ~180,000 drivers (Hespress/Médias24, Dec 2025) | **Reject (for now)** | No reform text yet. Proposals include a **national unified app** (platform risk). On 9 Apr 2026 the ministry denied a rumoured July 2026 rule |
| 8 | Jewellers and gold buyers | AML-regulated: suspicious-transaction reports to ANRF, internal controls | Federation-led training. Cash trade | Unverified | **Reject** | Only event-driven STRs were found. No recurring register or filing was confirmed |
| 9 | Scrap metal dealers (ferrailleurs) | Copper-theft enforcement exists (police and gendarmerie seizures) | Informal yards | Unverified | **Reject (no evidence)** | No Moroccan dealer register or licence obligation was found. The searches returned French and foreign rules only |
| 10 | Live-poultry shops (riyachat) and poultry farms | Law 49-99: authorisation for farms over 500 birds, live-poultry transport and slaughter. Riyachat must convert to proximity slaughter or approved-meat outlets | ~15,000 informal slaughter points vs 27 ONSSA-approved poultry abattoirs | ~1,500 riyachat (FISA) vs 15,000 traditional units, a contradictory figure | **Reject** | This is a crackdown and conversion story, not a recurring filing. The operators are informal and cash-poor |
| 11 | Cooperatives (argan, women's, agricultural) | Law 112-12 governance and ODCO support. Annual filing obligations **unverified** (search failed) | Accounts are often kept by ODCO or a local accountant | 65,315 cooperatives, 789,000 members (maroc.ma, end of 2025) | **Not concluded** | Huge count, but low ability to pay and no confirmed recurring filing |
| 12 | Used-car dealers | VAT on the margin regime (needs item-by-item purchase/resale tracking) | Unverified | Unverified | **Not concluded** | No Moroccan police-register or 2026 rule was found. The results were French |
| 13 | Seasonal farm labour (CNSS for farm workers) | CNSS declaration of farm workers (AMO generalisation) | Unverified | Unverified | **Not concluded** | The Arabic query returned only US and UK results |

Country-specific groups added via registers: adouls (1), well drillers (2), Aïd fatteners (5), riyachat (10), bureaux de change (6).

---

## 2. Strongest opportunities

### Opportunity: Adoul Act Book: one act, deposited to Justice, DGI and ANCFCC

**Industry:**
Adoul notarial practice (marriage, divorce, inheritance (*frida*), lafif testimonies, rural and unregistered ("melkia") real estate).

**Buyer:**
An individual adoul or a pair of adouls sharing an office, usually near a first-instance court. Secondary buyer: the regional adoul councils (*conseils régionaux*) under the National Adoul Body (*Instance nationale des adouls*), as a bulk purchase for members.

**Trigger / Why now:**
- Law n° 51.26 on the adoul profession was promulgated by Dahir 1.26.58 of **28 July 2026** and published in **BO n° 7533**. It enters into force **90 days after publication**, so about late October or November 2026 (estimate: the exact BO date is unverified).
- It requires every adoul to **deposit acts electronically, daily**, on a digital platform supervised by the Ministry of Justice. It also allows **qualified electronic signatures** and **electronic preservation**, sets a 10-year retention period, and tightens discipline, with fines reported at up to 30,000 MAD (Sabah Agadir; not verified against the BO text).
- Existing obligations already apply. Since 1 Jan 2019, adouls must e-register acts with the **DGI via SIMPL**, and errors not corrected within 30 days cost 1,000 MAD. **ANCFCC** extended e-procedures to adouls in 2022.

**Current workflow:**
1. Two adouls take the parties' testimony and write it in a notebook (*mudhakkira*) by hand.
2. The act is drafted (often typed in Word, sometimes handwritten) and copied into the register. The court's notarial judge (*qadi at-tawthiq*) then approves it (*khitab*).
3. The adoul re-keys the act's data into DGI SIMPL for registration duties, and into ANCFCC e-services if it concerns real estate.
4. From about Nov 2026, the same act must also be uploaded **daily** to the Justice platform, with scans, e-signature and metadata.
5. Paper originals are archived in the office for at least 10 years.

**Pain:**
The profession went on a **19-day national strike** (18 Mar–5 Apr 2026) and further stoppages against the reform. That shows the burden is felt, but also that adouls resist digitisation. A daily deposit obligation with disciplinary sanctions, on top of SIMPL's 1,000 MAD error fines, gives the same act three keying points and three sets of mistakes. The Competition Council and CESE both pushed for digitisation and a direct adoul–greffe–judge link, so the platform is coming either way.

**Existing solutions:**
- **The Ministry of Justice platform itself.** It may cover drafting and deposit, and this is the main risk.
- DGI SIMPL-Enregistrement and the ANCFCC portals (free, separate logins).
- Generic Word templates, typists and "écrivains publics" near courts.
- Gulf legal-practice software (Daawa, Saudi MoJ apps). It is irrelevant to Moroccan adoul acts.
- No Moroccan adoul-office software was found in either French or Arabic searches. That is a gap, or a sign the market is too poor (unverified).

**Offline evidence:** Handwritten notebooks and registers. The law only now introduces e-signature and e-preservation. Strikes, not online forums, are where the profession expresses itself. No SaaS listings found.

**Offline channel:** The 10–20 adoul offices clustered outside each first-instance court (walk-in sales). Regional adoul councils and the National Adoul Body, which will run mandatory training on the new law. The National Association of Female Adouls (president Nadia Cherkaoui, Rabat). E-signature resellers (Barid eSign) who must reach every adoul anyway.

**Market count:** **Unverified.** No official count of practising adouls was found. Treat it as "several thousand" until it is confirmed with the Ministry of Justice or the National Adoul Body.

**The gap:**
Nobody turns one adoul act into (a) the Justice-platform deposit package, (b) SIMPL registration data and (c) the ANCFCC filing. Nobody has Arabic act templates (marriage, *frida*, lafif with 12 witnesses, *melkia*) that produce structured data once.

**Possible product:**
An Arabic-first act book. The adoul fills in a structured template once, and the tool produces the printable act, the register entry, the daily deposit file/upload, the SIMPL data and a 10-year e-archive. It also keeps a daily checklist of "deposited / not deposited".

**MVP:**
Templates for 5 common act types, a daily deposit checklist with a reminder, and a SIMPL field pre-filler (copy-paste helper; no API assumed). Local encrypted archive plus PDF export.

**Pricing hypothesis:**
100–200 MAD/month per adoul (about $10–20) for the software. A done-for-you scanning and deposit service by a clerk, at 5–15 MAD per act, is probably what actually sells. Adouls are fee-capped, older and reluctant, so expect a **service-plus-software** model.

**How to find first customers:**
Walk the court clusters in Casablanca, Rabat and Fès. Pitch the regional councils as a training partner for the new law. Bundle with an e-signature reseller.

**Risks:**
- The Ministry platform may include drafting, so the third-party layer has nothing left to do. No API is likely.
- The profession is hostile to digitisation and may get delays: the law was already reworked once after a Constitutional Court ruling.
- It needs Arabic legal fluency and a **local founder**. A non-local solo founder cannot sell this.

**Kill condition:**
The Ministry platform turns out to be a full drafting tool with built-in SIMPL/ANCFCC transmission, or practising adouls number under ~2,000.

**Score:** 5/10. Pain 6, Frequency 9 (daily), Mandatory 9, Fragmentation 5 (3 receiving bodies), Competition 7 (none found), Incumbent gap 4 (platform risk), Accessibility 6, WTP 3, MVP 6, Distribution 6 (councils, court clusters).

**Sources:**
- [Le Matin: Adouls, what the new law published in the BO changes](https://lematin.ma/nation/adouls-ce-que-change-la-nouvelle-loi-publiee-au-bulletin-officiel/361225)
- [Le360: The adoul law enters into force in three months](https://fr.le360.ma/societe/la-loi-sur-la-profession-dadoul-entre-en-vigueur-dans-trois-mois_FUJWL6XTYFE47NNURUZRBMEJQE/)
- [Al3omk: The Official Bulletin publishes the new adoul law (dahir of 28 July 2026, BO 7533)](https://al3omk.com/1180678.html)
- [Sabah Agadir: The new adoul law, fines up to 30,000 MAD](https://sabahagadir.ma/479737.html)
- [Hespress: After months of controversy, the adoul reform enters into force](https://fr.hespress.com/485162-apres-des-mois-de-controverse-la-reforme-de-la-profession-dadoul-entre-en-vigueur.html)
- [Médias24: Adoul reform after the Constitutional Court ruling (2 Jul 2026)](https://medias24.com/2026/07/02/reforme-de-la-profession-dadoul-pour-se-conformer-a-la-cour-constitutionnelle-le-gouvernement-adopte-un-nouveau-projet-de-loi-1714597/)
- [SNRT News: the Constitutional Court validates most of the text](https://snrtnews.com/fr/article/loi-sur-la-profession-des-adouls-la-cour-constitutionnelle-valide-lessentiel-du-texte-mais)
- [Hespress: Competition Council on the adoul profession](https://fr.hespress.com/479813-le-conseil-de-la-concurrence-plaide-pour-une-refonte-majeure-autorisant-les-adouls-a-recevoir-et-gerer-les-fonds-des-contractants.html)
- [Le Matin: electronic registration of acts, a 1,000 DH fine](https://lematin.ma/economie/enregistrement-electronique-des-actes-une-amende-de-1000-dh/258559/amp)
- [Médias24: ANCFCC extends digitisation to adouls](https://medias24.com/2022/04/18/lancfcc-etend-la-digitalisation-des-procedures-aux-adouls/)
- [Ministry of Justice: adouls page](https://justice.gov.ma/%D8%A7%D9%84%D8%B9%D8%AF%D9%88%D9%84/)

---

### Opportunity: Driller Job File: authorisation-to-completion pack for well-drilling contractors

**Industry:**
Water-well drilling and deepening contractors (foreurs, puisatiers) working for farmers.

**Buyer:**
The owner of a drilling rig, with 1–5 rigs. Secondary buyer: agricultural consultancies and topographers who assemble farmers' authorisation files.

**Trigger / Why now:**
- Law 36-15, art. 114: only holders of a **driller permit** may drill, deepen or repair wells, and their equipment must meet standards.
- The government approved the implementing **"permis de foreur" decree in Dec 2023**. It covers the conditions for exercising the trade, the content of the **drilling start authorisation**, and the elements of the **end-of-works report**.
- Basin agencies (ABH) issue **30,000–40,000 drilling/prospecting authorisations a year**, via each ABH's own portal. The drought has led to crackdowns on clandestine wells (an inventory was announced, with prosecutions).
- Status of the decree's publication and enforcement in 2025–26: **unverified**.

**Current workflow:**
1. The farmer (or a consultant) files the authorisation request on the relevant ABH portal.
2. The ABH commission investigates, and the director's decision sets the conditions and timeline.
3. The contractor drills, keeps a lithology and depth log on paper, and must file a start notice and a completion report.
4. Each of the ~10 ABHs has its own portal and forms.

**Pain:**
FNH calls well digging a "casse-tête" for farmers, and the trade is described as having a large clandestine segment. The new permit pushes compliant contractors toward per-job paperwork.

**Existing solutions:**
- ABH portals (free, per basin).
- Agricultural consultants and topographers who assemble files for a fee.
- Paper drilling logs.
- Generic field-service apps (no Moroccan ones found).

**Offline evidence:** A clandestine-dominated trade with rural, rig-based operators. Filing is done by consultants or at the ABH counter.

**Offline channel:** Drilling-equipment and pump suppliers in Agadir, Beni Mellal, Meknès and Marrakech. The ABH single windows (*guichets uniques*). Agricultural chambers. FNH and agricultural trade press.

**Market count:** 30,000–40,000 authorisations a year (ABH via Hespress). The number of contractors is **unverified**, likely in the low thousands (estimate).

**The gap:**
No tool turns one rig's job log into the start authorisation, completion report and per-ABH filing, or keeps a permit-compliant equipment record.

**Possible product:**
A mobile job file. Each job captures the authorisation number, GPS, depth, lithology, pump test and photos, then produces the ABH-specific completion report.

**MVP:**
An Arabic/French form app plus a PDF generator for 2 basins (Souss-Massa, Oum Er-Rbia).

**Pricing hypothesis:**
150–300 MAD per job report, or 300–500 MAD/month per rig. A service offered through consultants is more likely to sell than software.

**How to find first customers:**
The public list of permitted drillers, once the decree is applied. Pump and rig suppliers. Consultants who already file for farmers.

**Risks:**
The decree may not be in force. Informal operators avoid any paper trail. The ABH portals may absorb the report. Needs a local founder.

**Kill condition:**
No driller-permit register is published by mid-2027, or ABHs don't require a contractor-filed completion report.

**Score:** 4/10. Per-job mandatory paperwork with basin fragmentation, but an unverified trigger, an informal buyer and a weak distribution list.

**Sources:**
- [FNH: Well drilling, the ministry wants to regulate the sector further](https://www.fnh.ma/article/actualite-economique/forage-de-puits-la-tutelle-veut-encadrer-davantage-le-secteur)
- [Médias24: a decree to better regulate well drilling (Dec 2023)](https://medias24.com/2023/12/26/un-decret-pour-mieux-reguler-les-creusements-de-forages/)
- [Hespress: a decree to regulate use of the hydraulic public domain](https://fr.hespress.com/418717-418717.html)
- [Le360: fighting groundwater over-exploitation](https://fr.le360.ma/politique/lutte-contre-la-surexploitation-des-nappes-phreatiques-le-gouvernement-renforce-larsenal-legislatif_FJ47FCJOQVDNZCYSMGWBCCACV4/)
- [FNH: Clandestine well drilling on the rise](https://www.fnh.ma/article/actualite-economique/forage-des-puits-les-operations-clandestines-en-recrudescence)
- [FNH: Digging wells, a headache for farmers](https://fnh.ma/article/actualite-economique/creusement-de-puits-un-casse-tete-pour-les-exploitants-agricoles)
- [TelQuel: Clandestine wells, inventory planned (2022)](https://telquel.ma/2022/02/09/puits-clandestins-recensement-en-perspective-et-eventuelles-poursuites-contre-les-contrevenants_1753913)

---

### Opportunity: Agrochemical Register for ONSSA-registered pesticide shops

**Industry:**
Retail and wholesale distributors of pesticides and agrochemicals.

**Buyer:**
The owner of an agri-input shop (often also selling seed and fertiliser) registered with ONSSA.

**Trigger / Why now:**
- ONSSA registration of distributors since 2019, with inspections of storage, labelling, **purchase and sale registers** and invoices.
- Law 34-18 on phytopharmaceutical products replaced Law 42-95. It limits activities to authorised, qualified persons. The dates of its implementing texts are **unverified**.
- ONSSA ran a 2025 review of phytosanitary products (Hespress, El Bouari).

**Current workflow:**
1. The shop buys from importers or formulators and keeps the invoices.
2. It records purchases and sales in a paper register (the format was not found).
3. ONSSA inspectors check the register, the stock and the labels. Non-compliance leads to an official report (PV).

**Pain:**
More than 40 PVs among about 1,157 surveilled distributors by July 2023. The informal trade competes on price (Médias24 2024).

**Existing solutions:**
- Paper registers.
- Generic retail POS and stock software (Sage, local POS vendors).
- Distributor programmes run by agrochemical majors (unverified).

**Offline evidence:** The register is inspected on paper. The trade is rural.

**Offline channel:** The ONSSA list of registered distributors. Agrochemical importers' and formulators' sales reps. Agricultural fairs (SIAM Meknès).

**Market count:** >1,157 distributors (ONSSA via Hespress, 2023).

**The gap:**
No register tool tied to the ONSSA list of authorised products (homologation index), flagging banned or withdrawn products at the point of sale.

**Possible product:**
POS-light: scan or select a product from the ONSSA authorised list, record sale and buyer, and print a register page ready for inspection.

**MVP:**
An ONSSA product list plus a purchase/sale ledger with a printable register.

**Pricing hypothesis:**
100–200 MAD/month.

**How to find first customers:**
The ONSSA distributor list, introductions from importers' sales reps, and SIAM.

**Risks:**
No fresh trigger. Small base. Importers could give a tool away free.

**Kill condition:**
ONSSA or the importers launch a free e-register, or inspectors don't penalise register format.

**Score:** 3/10.

**Sources:**
- [Hespress: ONSSA steps up surveillance of agrochemical sellers](https://fr.hespress.com/327087-onssa-surveillance-accrue-des-vendeurs-de-produits-agrochimiques.html)
- [Médias24: pesticide trade still threatened by the informal sector (Jul 2024)](https://medias24.com/2024/07/09/le-commerce-des-pesticides-au-maroc-toujours-menace-par-linformel/)
- [Bladi: new law on agricultural pesticides](https://www.bladi.net/maroc-loi-pesticides-agricoles,63719.html)
- [Le360: approval, sale and use of pesticides in Morocco](https://fr.le360.ma/societe/agriculture-tout-savoir-sur-lhomologation-la-commercialisation-et-lusage-des-pesticides-au-maroc_EAREXQFWYJDEZIBMMULL752HC4/)
- [Hespress: El Bouari, ONSSA reviews phytosanitary products](https://fr.hespress.com/445754-el-bouari-lonssa-passe-au-crible-les-produits-phytosanitaires.html)

---

## 3. Rejected

- **Bureaux de change:** killed by the regulator's own tool. The Office des Changes' **"Sarf" single platform** (live 15 June 2026; training from May 2026) centralises operator data, transmits transactions in real time and includes an AML module. Sources: [Aujourd'hui](https://aujourdhui.ma/economie/change-de-devises-loffice-des-changes-actualise-sa-reglementation-et-lance-la-plateforme-sarf), [TelQuel](https://telquel.ma/instant-t/2026/05/01/loffice-des-changes-lance-des-formations-pour-utiliser-la-nouvelle-plateforme-unique-de-change-de-devises_1987297/), [Office des Changes](https://www.oc.gov.ma/fr/change-manuel-et-LBC-FT).
- **Aïd sheep fatteners:** ONSSA registers more than 223,000 fatteners and tags the animals for free. The state is the workflow. Source: [FNH](https://fnh.ma/article/laquotidienne/aid-al-adha-108-000-eleveurs-enregistres-et-3-7-millions-d-animaux-identifies).
- **Domestic-worker employers:** only about 2,200 CNSS declarations two years after the 2020 obligation, no enforcement, and households won't pay. Sources: [Hespress](https://fr.hespress.com/167283-travailleurs-domestiques-un-guide-pratique-et-plus-de-2000-declarations-cnss.html), [TelQuel](https://telquel.ma/2020/08/10/declaration-des-travailleurs-domestiques-deux-mois-apres-la-mise-en-application-de-la-loi-ou-en-est-on%e2%80%89_1693150).
- **Taxi licence holders:** the reform is still a study. The proposals include a state "national unified app", and the ministry denied a rumoured July 2026 rule. Sources: [Médias24](https://medias24.com/2025/12/22/laftit-le-taxi-doit-se-moderniser-pour-survivre-face-aux-bus-et-au-numerique-1601027/), [Médias24 denial](https://medias24.com/2026/04/09/le-ministere-de-linterieur-dement-la-publication-dun-communique-sur-la-gestion-et-lexploitation-des-agrements-de-taxis-1657094/).
- **Riyachat and live poultry:** a conversion crackdown, not a recurring filing. The operators are informal. Source: [Le360](https://fr.le360.ma/societe/abattage-de-la-volaille-laftit-declare-la-guerre-aux-tueries-dans-les-quartiers-populaires-190316/).
- **Jewellers and gold buyers:** only event-driven suspicious-transaction reports to ANRF were found. Source: [Le360](https://fr.le360.ma/societe/les-bijoutiers-alertent-sur-une-vaste-operation-de-blanchiment-dargent_ERGPHRHIBBG6HCVLYUDODXTJ6I/).
- **Scrap dealers:** no Moroccan dealer register was found. There is only copper-theft policing. Source: [Aujourd'hui](https://aujourdhui.ma/faits-divers/saisie-dune-importante-quantite-de-cables-en-cuivre-voles-a-marrakech-111242).
- **Not concluded (evidence gap, not killed):** cooperatives (65,315; filing obligations unverified), used-car dealers, and CNSS declarations for seasonal farm workers.

## 4. Method notes

- **What worked:** French queries naming the specific law plus "obligation / registre / plateforme" (Law 51.26, Law 36-15 art. 114, Law 49-99). Arabic queries naming the law number and Dahir (*al-jarida ar-rasmiyya*) found the BO number and promulgation date that French press omitted. The press titles Hespress, Médias24, FNH and Le360 carry most regulator news.
- **What didn't:** generic Arabic queries without a law number (farm labour, scrap) returned US and Gulf results. Counts of practitioners (adouls, drillers, scrap dealers) are not in the press, so they need a direct ask to the Ministry or the professional body. Moroccan regulators often build the platform themselves (Sarf, ONSSA identification, ABH portals, the NARSA example in the main report), so "the regulator is the substitute" is the default kill in this country.
- **Budget:** 27/40 searches used. The run stopped on a usage-limit refusal.

Research model: Opus
