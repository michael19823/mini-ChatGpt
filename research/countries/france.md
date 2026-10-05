# France: opportunity research (deep pass, 2026-10-05)

Method: about 54 web searches (mostly French), WebFetch unavailable, so the evidence comes from search-result summaries and official pages as indexed, not full-page reads. France is fully accessible to a foreign solo founder (EU, SEPA/Stripe, GDPR applies, French-language product and support needed).

Overall conclusion: France has many mandatory, state-run digital reporting tools (Trackdéchets, CalypsoVet, POF, PEMD platform, SYDEREP, CNAPS téléservice, SEFi). The state usually provides a free web UI, and often a free API and bulk import too. Vertical vendors have usually already plugged in. I found no opportunity above 4/10. The remaining gaps are small, low-ticket niches. **Nothing here is ready to build.** At most, run interviews on the two 4/10 items.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Waste carriers / collectors / BTP earthworks | Trackdéchets BSDs plus national register (RNDTS merged into Trackdéchets 5 May 2025; register deadline now one month under decree 2026-433) | Weak candidate (downgraded) | Trackdéchets has a free API **and** a native CSV/XLSX bulk-import (about 30,000 lines). ERP integrators exist (Logatik, Tradim, Trinov, InfinySoft, AMCS). Hesus/Soltracing (with BRGM) cover excavated soil. |
| Septic pumping (vidangeurs agréés ANC) | Paper bordereau in 3 copies per pump-out, 10-year register, annual report to the préfet by 1 April broken down by commune, SPANC programme reporting | Candidate (small) | Mandatory per job, but small market. Facilitime Assainissement and WinAssainissement already target it. |
| Pharmacies (officines) | Monthly declaration of veterinary antimicrobial dispensations in CalypsoVet | Candidate (small) | Per the Ordre des pharmaciens, most pharmacists lack qualified software and enter declarations by hand. Volumes per pharmacy are low. |
| Veterinary clinics | CalypsoVet antimicrobial-use transmission | Rejected | More than 90% of clinics have software with Calypso transmission. Only about 30% actually transmit, so the gap is activation, not software. |
| HVAC / refrigeration | Fiche d'intervention, BSFF, annual fluid declaration to the certification body, leak-check register | Rejected | Trackdéchets replaces the Cerfa fiche on smartphone (since April 2023). C'Fluide (FPA) covers the fiche, the annual declaration and reports. |
| Funeral homes | CertDc/POF death-certificate download, prior declarations to the mairie | Rejected | POF is free. Simplifia (700+ funeral directors), Funetec and Osiris cover the admin. Mairie declarations can be sent "by any means", including email. |
| Agriculture / ETA contractors | Digital phytosanitary register (EU 2023/564, pushed to 1 Jan 2027; electronic conversion strict only from 2030) | Rejected | Trigger delayed. Isagri ISAETA, Karnott Phyto (connected to E-Phy), Smag and Mes Parcelles already serve farmers and contractors. |
| Taxis conventionnés | New CPAM convention (Oct/Nov 2025), CNDA-certified billing software by 31 May 2026, SEFi + certified geolocation by 1 Jan 2027 | Rejected | Strong trigger, but it needs SESAM-Vitale/CNDA certification and the SEFi taxi candidacy closed in Oct 2025. Viatiss, Caree, Taxi-hand-go and Teletaxi are already positioned. |
| Producers under several REP schemes (e-commerce, SMEs) | Separate placed-on-market declarations to each eco-organisation (Citeo, Ecomaison, Refashion, ecosystem, Valobat...) | Too competitive / policy risk | CompliancR (AlgoREP), AuditREP, Leyton and e3conseil exist. A parliamentary amendment proposes an ADEME single window (guichet unique), which would remove the gap. |
| Private security companies | Mandatory CNAPS téléservice (decree of 28 Dec 2025, by 1 Oct 2026), card/MAC expiry tracking | Rejected | The téléservice is a per-person account, not a company data flow. Security planning tools already track CNAPS/SSIAP expiry. |
| Energy-renovation artisans (RGE) / MAR advisers | CEE 6th period (from 1 Jan 2026) tighter controls; MaPrimeRénov' / Mon Accompagnateur Rénov' paperwork | Rejected (policy risk) | Funding rules change yearly (MAR programme set only to 31 Dec 2026). The obligés/délégataires (Hellio, Effy, etc.) provide the dossier portals for free. |
| Demolition / major renovation | PEMD diagnosis and récolement Cerfas on the CSTB platform | Rejected | Done once per project by diagnosticians, on a free state platform. |
| Healthcare waste (DASRI) | BSDASRI on Trackdéchets | Rejected | Already dematerialised since 2023. Collectors are the natural integrators, and producers (nurses, vets) are scattered. |
| Restaurants (grease traps) | Pumping proofs for municipal discharge authorisations | Not pursued | Rules are local and mostly about contracts. I found no digital reporting obligation like Florida's. |
| Hotels / campings / short lets | Taxe de séjour declarations across commune platforms (3D Ouest, taxesejour.fr); meublé de tourisme registration via national téléservice from 20 May 2026 | Not pursued | Booking platforms collect most of the tax. PMS automation exists. The new registration is a one-off per property. |
| All SMEs | B2B e-invoicing (reception from 1 Sept 2026, SME issuing from 1 Sept 2027) | Too competitive | Dozens of approved platforms (PA) plus Pennylane, Sellsy and bank or software-vendor tools. |
| Large companies' suppliers | CSRD questionnaires | Rejected | The Feb 2026 Omnibus cut CSRD scope sharply. |

## Opportunity: CalypsoVet declaration bridge for pharmacies

**Industry:**  
Retail pharmacy (officine), mainly rural pharmacies that serve livestock farmers and pet owners.

**Buyer:**  
Pharmacist-owner (titulaire) or deputy pharmacist of an independent officine. The secondary buyer is a pharmacy group (groupement) buying for its members.

**Trigger / Why now:**  
EU Regulation 2019/6 requires reporting of antimicrobial use. Since late 2024, French pharmacists must declare every dispensation of a veterinary antimicrobial in CalypsoVet, at least monthly. Authorities announced controls from January 2025, and a decree fixing sanctions is still pending.

**Current workflow:**  
1. Dispense the veterinary prescription in the pharmacy software (LGPI, Winpharma, Smart Rx, LEO...).
2. At least monthly, log into calypsovet.fr with a CPS/e-CPS card through Pro Santé Connect.
3. Re-key each dispensation by hand (product, quantity, species, prescribing vet).
4. Keep proof for inspection.

**Pain:**  
The Ordre des pharmaciens says most pharmacists have no qualified software and must use manual entry. The only automated route is to install a VIMS (vets' software). This is monthly, mandatory duplicate entry, with sanctions announced. The pain scales with volume, though, and many pharmacies dispense veterinary antimicrobials only occasionally.

**Existing solutions:**  
Calypso manual-entry module (free). Veterinary VIMS software with API mode. The LGO vendors (Pharmagest/LGPI, Winpharma, Cegedim Smart Rx, LEO) could add the module; I could not verify whether any has done so by Oct 2026. Pharmacy staff re-keying by hand.

**The gap:**  
A pharmacy-side bridge that reads LGO dispensation exports (or scans ordonnances) and pushes them to Calypso through the API. This exists only if third-party, non-VIMS software can be qualified for Calypso API access (unverified).

**Possible product:**  
A small desktop or web app that ingests the LGO's sales export filtered to veterinary antimicrobials, maps species and prescriber, and submits to CalypsoVet monthly. It keeps an audit log for inspections.

**MVP:**  
CSV import from one LGO (LGPI, the largest installed base) plus a pre-filled monthly batch the pharmacist validates. API submission comes only after qualification. Before that, an assisted-entry helper.

**Pricing hypothesis:**  
EUR 10–25 per month per pharmacy (estimate). Groupements could buy it in bulk.

**How to find first customers:**  
The Ordre des pharmaciens public directory (annuaire), rural pharmacies near livestock areas, and pharmacy groupements. USPO and FSPF unions publish Calypso fact sheets, which suggests their members have questions.

**Risks:**  
LGO vendors add it for free. Calypso API access may be limited to qualified vet software. Low per-pharmacy volume means low willingness to pay. The sanctions decree may never appear.

**Kill condition:**  
Interviews show a typical pharmacy declares fewer than about 10 dispensations a month, any major LGO ships a Calypso export, or ANSES/the Ordre des vétérinaires will not qualify a non-VIMS client.

**Score:** 4/10

**Sources:**
- https://www.ordre.pharmacien.fr/je-suis/pharmacien/pharmacien/mon-exercice-professionnel/les-fiches-professionnelles/declaration-des-dispensations-d-antimicrobiens-a-usage-veterinaire-dans-calypso-une-obligation-du-pharmacien-d-officine
- https://uspo.fr/wp-content/uploads/2024/10/241023-fiche-pratique-calypso.pdf
- https://www.lemoniteurdespharmacies.fr/legislation/dispensation/antimicrobiens-veterinaires-pas-de-dispensation-sans-declaration
- https://www.anses.fr/fr/content/declarer-les-utilisations-dantimicrobiens-calypsovet
- https://www.skello.io/blog/logiciels-pharmacie (LGO market overview)

## Opportunity: Septic pumping (vidangeur agréé) bordereau and annual préfecture report

**Industry:**  
Septic tank / ANC pumping and hydrocleaning (hydrocurage) contractors

**Buyer:**  
Owner or office manager of a small approved pumping company (vidangeur agréé), often 1–15 staff and frequently also doing hydrocurage or agricultural work.

**Trigger / Why now:**  
No new trigger; this is a standing obligation under the arrêté of 7 Sept 2009. The mild "why now" is SPANCs and départements running organised pumping campaigns, which ask for reporting back, plus the broader Trackdéchets digitisation pushing waste paperwork online. The why-now is weak.

**Current workflow:**  
1. For each pump-out, fill a 3-copy paper bordereau (owner, vidangeur, treatment site) with the approval number, vehicle, volume and destination.
2. File the copies in a chronological register kept for 10 years.
3. Before 1 April each year, compile a report for the préfet: installations pumped per commune, volumes per disposal route, equipment.
4. For SPANC campaigns, report interventions back to the SPANC or département.

**Pain:**  
Per-job paper, plus a yearly by-commune aggregation done from paper copies. Evidence is regulatory (prefectoral approval orders restate the obligations), with no first-hand complaints found.

**Existing solutions:**  
Facilitime Assainissement (tablet bordereaux, printed on site). WinAssainissement (OBBC Développement). Generic field-service tools. SPANC-side software (IsiGéo ANC, VisioANC, Y-Assainissement, ePerf SPANC) serves the municipality, not the pumper. Paper carnets.

**The gap:**  
Possibly a cheap mobile bordereau that auto-generates the per-commune annual préfecture report and the SPANC campaign returns. Facilitime may already do this (unverified).

**Possible product:**  
A phone app for the bordereau, with e-signature and an emailed copy to the owner. It auto-builds the register and the 1 April report in the prefecture's template, plus exports per SPANC.

**MVP:**  
Mobile bordereau, PDF copies and a one-click annual report for one département's template.

**Pricing hypothesis:**  
EUR 20–50 per month per company (estimate).

**How to find first customers:**  
Each préfecture publishes its list of vidangeurs agréés (Aveyron, Pas-de-Calais, Orne, Calvados, Isère and others have public lists). Département ANC programmes (Deux-Sèvres, Vienne) also list member pumpers. CAPEB ANC meetings are another channel.

**Risks:**  
Small market: Vendée has only 11 approved pumpers, which points to roughly 1,000–2,500 nationally (estimate, unverified). Incumbents already exist. Low willingness to pay.

**Kill condition:**  
Facilitime or WinAssainissement already produce the annual report at a similar price, or the national count of approved pumpers is under about 1,500.

**Score:** 4/10

**Sources:**
- https://www.yonne.gouv.fr/contenu/telechargement/28216/218743/file/AgrementVidangeurs_cle545315.pdf
- https://loire.gouv.fr/contenu/telechargement/12243/91250/file/modele-bilan-annuel-activite.pdf
- https://www.digitaldcsysteme.com/facilitime-assainissement/
- https://obbc.fr/product/winassainissement/
- https://www.aveyron.gouv.fr/Actions-de-l-Etat/Environnement/Gestion-de-l-eau/Assainissement/Assainissement-non-Collectif/Vidangeurs-agrees
- https://www.capeb.fr/www/capeb/media/pays-de-la-loire/document/85-20241129-Rencontre-ANC_Vendee.pdf

## Opportunity: Trackdéchets register mapper for small waste and earthworks operators

**Industry:**  
Small waste collectors and carriers, transit/sorting platforms, earthworks and demolition firms

**Buyer:**  
Office manager or QSE person at a waste or earthworks SME (3–50 staff) without a waste ERP.

**Trigger / Why now:**  
The RNDTS was merged into Trackdéchets on 5 May 2025. Trackdéchets is strictly mandatory for road carriers of hazardous waste from 1 Jan 2026. Decree no. 2026-433 of 2 June 2026 (JO 4 June 2026) set a one-month deadline for transmitting register data (hazardous, POP, non-hazardous and SSD registers) and named BRGM as the tool operator. Fines are EUR 750–150,000, up to EUR 750,000 for a legal entity (secondary source).

**Current workflow:**  
1. Weighbridge tickets, a transport app or Excel record each load.
2. Staff copy the data into Trackdéchets' fixed import template (columns cannot be changed), or key BSDs in the web UI.
3. Staff fix import errors, refusals and corrections, then track the monthly deadline.

**Pain:**  
Re-formatting into a strict template every month, plus exception handling. No first-hand complaints were found.

**Existing solutions:**  
Trackdéchets web UI, GraphQL API and native CSV/XLSX bulk import with templates and documentation (all free). Waste ERPs integrated with the API (Logatik, Tradim, Trinov, InfinySoft, AMCS, plus Kerlog referenced by FEDEREC). Hesus/Soltracing for excavated soil. HelloPro buyer guides.

**The gap:**  
Narrow: mapping messy weighbridge or Excel exports into the official template and validating them before import, for firms too small for a waste ERP. The free bulk import shrinks this gap a lot compared with the first-pass view.

**Possible product:**  
A saved-mapping converter (weighbridge or Excel to the Trackdéchets register template), with pre-validation, a monthly reminder and an error explainer.

**MVP:**  
Upload file, map columns once, download a validated Trackdéchets import file. API push comes later.

**Pricing hypothesis:**  
EUR 29–79 per month (estimate).

**How to find first customers:**  
The data.gouv.fr dataset of establishments registered on Trackdéchets ("établissements inscrits sur Trackdéchets"), FNADE, FEDEREC and FNTP member lists.

**Risks:**  
The government improves the import UX itself. A converter is easy to copy. Accountants or ERP vendors absorb it.

**Kill condition:**  
Interviews show the native import is "good enough", or that target firms already have an integrated ERP.

**Score:** 3/10 (down from 5/10; native bulk import and named integrators found)

**Sources:**
- https://blog.landot-avocats.net/2026/07/01/transmission-des-donnees-au-registre-national-trackdechets-nouveaux-delais/
- https://www.banquedesterritoires.fr/lutte-contre-les-depots-sauvages-de-dechets-un-decret-apporte-quelques-ameliorations
- https://faq.trackdechets.fr/registre-national/importer-des-declarations-en-masse/fichier-dimport-en-masse-des-donnees
- https://conseils.hellopro.fr/quel-erp-choisir-pour-la-gestion-des-dechets-4997.html
- https://conseils.hellopro.fr/trackdechets-pour-les-transporteurs-obligations-inscription-et-utilisation-4989.html
- https://www.data.gouv.fr/datasets/etablissements-inscrits-sur-trackdechets-1
- https://www.usinenouvelle.com/article/avec-soltracing-hesus-et-le-brgm-s-attaquent-a-la-tracabilite-des-terres-excavees.N922459

## Rejected after competitor research

- **Refrigerant fiche d'intervention + BSFF + annual fluid declaration (HVAC; first pass had it at 4/10):** Killed by Trackdéchets itself (it serves as the fiche on smartphone, since April 2023) and by C'Fluide from FPA (fiche, intervention reports, annual stock/movement declaration). Sources: https://gasco-france.com/upload/documents/125/16-la-petite-note-trackdechets.pdf , https://fpa.fr/wp-content/uploads/2021/02/202102.-C-Fluide_communique-presse.pdf
- **Funeral-home admin (EDRS analogue):** The state POF portal is free. Simplifia (700+ directors), Funetec and Osiris are established. Sources: https://www.capterra.fr/software/1057933/simplifia , https://www.auvergne-rhone-alpes.ars.sante.fr/declarer-un-deces-par-voie-electronique-procedure-suivre
- **Taxi conventionné SEFi 2027 billing:** Requires CNDA/SESAM-Vitale certification. Viatiss, Caree, Taxi-hand-go and Teletaxi are already positioned. Sources: https://viatiss.fr/logiciel-taxi-conventionne , https://roullepro.com/transport-medical/sefi-2027 , https://www.lofficieldesmetiers.fr/taxis-la-nouvelle-convention-cpam-2025-revue-et-corrigee-est-officiellement-approuvee/
- **Digital phytosanitary register for ETAs/farmers:** Isagri ISAETA, Karnott Phyto and Smag. The trigger slipped to 2027, with strict rules only from 2030. Sources: https://www.reussir.fr/grandes-cultures/registre-phytosanitaire-numerique-annie-genevard-fixe-les-regles-pour-2027 , https://www.reussir.fr/karnott-le-module-phyto-automatise-la-tracabilite-jusqua-la-fiche-de-chantier
- **Vet CalypsoVet transmission:** More than 90% of clinics already equipped (ANSES). Source: https://www.anses.fr/fr/content/declarer-les-utilisations-dantimicrobiens-calypsovet
- **B2B e-invoicing helper:** Approved platforms, Pennylane and many others. Source: https://www.dougs.fr/blog/liste-pa-facturation-electronique/
- **CSRD supplier reporting:** Scope cut by the Omnibus (Feb 2026).

## Attractive problem, poor distribution / policy risk

- **Energy-renovation dossiers (CEE 6th period plus MaPrimeRénov'):** Real paperwork pain for about 1,500 MAR structures and RGE artisans. But rules change every year, the MAR programme is set only to end-2026, and obligés give artisans free dossier portals. Sources: https://www.banquedesterritoires.fr/certificats-deconomies-denergie-larrete-relatif-la-sixieme-periode-est-paru , https://www.developpement-durable.gouv.fr/sites/default/files/CR%20GT3%20P6%20n%C2%B03%20-%20Contr%C3%B4le%20et%20lutte%20contre%20la%20fraude.pdf
- **DASRI for nurses and vets:** Already on Trackdéchets. Buyers are scattered, and the collector is the integrator.

## Too competitive

- E-invoicing and e-reporting (2026–2027).
- Multi-REP producer declarations: CompliancR, AuditREP and Leyton, plus a proposed ADEME single window. Sources: https://www.compliancr.io/en , https://www.assemblee-nationale.fr/dyn/17/amendements/1191/AN/869.pdf
- Private-security CNAPS card and MAC tracking: planning tools already cover it. Source: https://kolonell.com/fr/blog/logiciel-planning-agents-securite-privee-toulouse-2026

## Pass history

- **First pass (2026-10-04):** about 7 searches. Two candidates: the Trackdéchets register router (5/10) and HVAC fiche + BSFF (4/10).
- **Deep pass (2026-10-05, this file):** about 54 searches, mostly in French, covering 17 industries. Changes:
  - Decree 2026-433 confirmed from a second source (JO 4 June 2026, one-month register deadline).
  - Trackdéchets downgraded to 3/10 after finding its native bulk import, five named API integrators and Hesus/Soltracing.
  - HVAC moved to rejected (Trackdéchets mobile fiche plus C'Fluide).
  - DASRI found to be already dematerialised since 2023.
  - Two new small candidates added: the CalypsoVet pharmacy bridge and the vidangeur ANC reporting tool, both 4/10.
  - New rejections: funeral, taxi SEFi, phyto register, vet Calypso, multi-REP, private security, CEE/MAR.
  - France remains a low-yield country for this thesis.
