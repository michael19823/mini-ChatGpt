# France meublés de tourisme (loi Le Meur, API Meublés): the law turned into product requirements

Status: complete draft as of 10 Oct 2026 (open questions at the end). Deep dive 01 of the France B1 idea.

**Main legal source.** The consolidated Code du tourisme (edition of 6 Oct 2026), Code de la construction et de l'habitation (CCH, edition of 9 Oct 2026) and Code général des collectivités territoriales (CGCT, edition of 1 Oct 2026), as published by codes.droit.org from Légifrance data ([Code du tourisme PDF][CT]; [CCH PDF][CCH]; [CGCT PDF][CGCT]). I read the article texts directly in these files. I cross-checked the 2024 law and the March 2026 decrees on Légifrance ([loi 2024-1039 art. 1][LOI]; [décret 2026-196][D196]; [décret 2026-196 art. 6][D196A6]).

**Abbreviations.** NER = numéro d'enregistrement (registration or declaration number). IDM = intermédiaire de meublés (the DGE's term for intermediaries, conciergeries included). DGE = Direction générale des entreprises, the "single public body" that runs API Meublés. TJ = tribunal judiciaire. "Host" = loueur (the person who offers the unit).

## Summary

- **Two layers of duty.** Hosts must declare each unit and show its number on every listing (Code du tourisme L324-1-1 III and L324-2) ([CT]). Intermediaries, conciergeries included, have four separate duties under L324-2-1: inform the host, collect a sworn statement and the number before publishing, publish the number, stop renting a main residence at the night cap, and send activity data to the DGE ([CT]; [DGE]).
- **The conciergerie duties are where the money and the recurrence are.** The fines are civil fines set by the TJ president at the commune's request: up to 12,500 EUR per unit (information, sworn statement, number), up to 50,000 EUR per unit (data transmission) and up to 50,000 EUR per listing (night cap) (L324-2-1 III) ([CT]). Helping an illegal change of use costs up to 100,000 EUR per unit (CCH L651-2-1) ([CCH]).
- **The reporting duty is in force and live.** Décret 2026-196 (in force 21 Mar 2026) sets the fields and timing. Each intermediary sends, per unit rented in the period, the NER, the listing URL(s), the precise address and the nights rented through it. The period is three months for micro and small firms under 4,250 listings a month, and one month for others. The deadline is one month after the period ends (R324-2-1) ([CT]; [D196A6]). The API Meublés beta is open. IDM registration is mandatory if an IDM handles at least one unit in a registered commune ([DGE]). On 10 Oct 2026 the public list had 410 communes, including Paris, Lyon, Marseille, Nice, Toulouse and Nantes ([API communes endpoint][APICL]). Public statistics dated 4 Oct 2026 show 9.34 million nights already reported from 383 communes ([API stats endpoint][APIST]).
- **Small IDMs can upload a CSV.** The IDM screen of the state app accepts a CSV file ("Format supporté : CSV, Encodage : UTF-8, Séparateur ;") built from a template, "modele_import_idm.csv". It also issues API keys ([API Meublés app JS][APP]). The template sits behind a login. No arrêté on the format has been published: R324-2-6 says one "may" be issued ([CT]).
- **The host side is in limbo.** Since 20 May 2026 at the latest, the law requires a declaration on a national teleservice (L324-1-1 III; loi 2024-1039 art. 1 II) ([LOI]; [CT]). The teleservice is still not open. The DGE and service-public.fr plan it for Q4 2026 ([DGE]; [SP]). The decree on what the declaration must contain, and on how long a number stays valid, has not been published. On 6 Oct 2026 the code still carried the 2019 content list (D324-1-1) ([CT]). Old commune numbers will stay usable for "plusieurs mois" after the teleservice opens, then become invalid ([DGE]; [SP]). New numbers will read "FRA" + INSEE code + a random part ([DGE]).
- **Filing for the owner is risky.** The law says the host declares "préalablement en personne" (L324-1-1 III) ([CT]). Paris states that the declaration "cannot be filed on behalf of the property management company" ([Paris rules][PARIS]). The product should help owners file and should track numbers. It should not file as an agent by default.
- **Enforcement is real and reaches conciergeries.** On 10 Jul 2026 the Paris TJ fined an owner and her conciergerie 70,000 EUR each for one flat let without change-of-use authorisation (RG 26/52006) ([Simonnet Avocat][SIM]). Paris reports about 1.3 MEUR of fines in 2024, 2.4 MEUR in 2025 and about 1 MEUR in Q1 2026 (secondary source) ([Rentalscaleup][RSU]).
- **Product.** 52 testable requirements follow, each traced to its legal basis. The core is: a unit register shaped like the decree's data list, a NER lifecycle tracker (legacy, national, suspended, superseded, expired), a sworn-statement and information workflow, a cross-channel night-cap counter, the periodic API Meublés file with the state app's own checks run in advance, and a per-unit diligence file for inspectors.

## Who is obliged

**1. Hosts (loueurs).** "Toute personne qui offre à la location un meublé de tourisme" must declare (L324-1-1 III) ([CT]).
- A meublé de tourisme is a furnished villa, flat or studio for the tenant's exclusive use. It is offered to passing guests who do not take up residence, for stays by the day, week or month (L324-1-1 I) ([CT]).
- There is no size or income threshold, and no exemption for main residences. The main-residence status only changes the night cap and the proof required (L324-1-1 III, IV) ([CT]).
- Gîtes ruraux are meublés de tourisme (L324-6, as amended by loi 2026-103 art. 55) ([CT]). Chambres d'hôtes are a separate regime with their own declaration to the mayor (L324-3, L324-4) ([CT]).
- "Main residence" means a home occupied at least 8 months a year (loi 1989 art. 2, as cited by L324-1-1 III) ([CT]; [Paris rules][PARIS]).

**2. Intermediaries (L324-2-1 I).** The duty covers anyone who, for pay or for free, helps rent a meublé de tourisme "par une activité d'entremise ou de négociation ou par la mise à disposition d'une plateforme numérique" ([CT]).
- The DGE gives conciergeries as an example of intermediaries (DGE page, quoted in the [B1 report](../reports/france-b1.md); [DGE]). The API Meublés help text says "Tous les IDM sont concernés" ([APP]).
- There is no size exemption. Size only changes the reporting period. The period is three months for micro and small firms (Commission Recommendation 2003/361/CE) with a monthly average under 4,250 listings in the previous quarter, and one month for everyone else (R324-2-1 III) ([CT]). Almost every conciergerie will be on the quarterly cycle (my inference).
- The data duty applies only to units in a commune or EPCI that asked for data access (R324-2-1 I) ([CT]). The DGE adds that IDM registration on the beta is mandatory for "au moins un meublé de tourisme situé dans une commune inscrite sur l'API meublés" ([DGE]).
- The other intermediary duties (inform, sworn statement, number on the ad, night-cap stop) apply in every commune (L324-2-1 I and II) ([CT]).

**3. Communes and EPCIs.** They are not buyers, but they drive the duty. A commune that wants the data sends its deliberations to the DGE and reports any change within one month (R324-2-3) ([CT]). It may also send the DGE its list of issued numbers (R324-2-4) ([CT]).

**4. Online platforms (EU layer).** Regulation (EU) 2024/1028 applies to "online short-term rental platforms": they must collect and show numbers, run random checks and send data monthly, or quarterly if small ([EU Reg 2024/1028][EU]). A conciergerie is not a platform under the Regulation unless it runs a site where guests contract with hosts (my reading; see open questions).

**5. Who is not obliged.** I found no duty on a pure software vendor that does not broker or publish rentals. A product that never publishes listings or takes bookings should stay outside L324-2-1 (my reading, unverified). This is a design constraint (requirement 50).

## Duty-by-duty table

"CT" = Code du tourisme, "CCH" = Code de la construction et de l'habitation, "CGCT" = Code général des collectivités territoriales, consolidated editions linked above. Penalties are maxima.

| # | Duty | Legal basis | What must exist or be done | Frequency or deadline | Evidence an inspector or court asks for | Penalty |
|---|---|---|---|---|---|---|
| H1 | Declare the unit before offering it | CT L324-1-1 III ([CT]) | Declaration "préalablement en personne" on the national teleservice. It states main residence or not, with proof (tax notice at the unit's address). An electronic receipt with a number is issued "sans délai". Until the teleservice opens, communes with a registration procedure still issue numbers ([SP]; [DGE]). | Before the first offer | Receipt and number; declaration content; proof of main residence | Up to 10,000 EUR administrative fine by the commune (L324-1-1 V) ([CT]) |
| H2 | Update the declaration on any change | CT L324-1-1 III para 4 ([CT]); D324-1-1 III ([CT]) | New or updated declaration when information or documents change. Paris: withdraw and re-file, then use the new number ([PARIS]). | On each change | Current declaration matches reality | Up to 10,000 EUR (failure under III); up to 20,000 EUR if false ([CT]) |
| H3 | Renew the declaration | CT L324-1-1 III para 4 ([CT]) | Renew "à l'expiration d'un délai fixé par décret" | **Period not yet set** (no decree on 6 Oct 2026) ([CT]) | Valid, unexpired number | Up to 10,000 EUR ([CT]) |
| H4 | Re-register old commune numbers | DGE and service-public notices ([DGE]; [SP]) | Re-declare on the national teleservice | "Plusieurs mois" after the Q4 2026 opening; length not published | New national number | Old number becomes invalid with IDMs ([DGE]) |
| H5 | Never make a false declaration or use a false number | CT L324-1-1 V para 2 ([CT]) | Truthful data | Always | Cross-checks of address, status, tax notice | Up to 20,000 EUR administrative fine ([CT]) |
| H6 | Show the number on every offer, and the "professionnel / particulier" mention | CT L324-2; D324-1-3 (décret 2026-197) ([CT]) | Number in every ad. "Annonce professionnelle" or "annonce d'un particulier" (CGI art. 155 test) shown on the platform's ad | Every ad, always | Dated listing captures | No separate host fine found in the consolidated text. Paris still cites 5,000 EUR, probably from the old text (unverified) ([PARIS]) |
| H7 | Respect the night cap on a main residence | CT L324-1-1 IV ([CT]) | At most 120 nights per calendar year, or the commune's lower cap (at least 90). Exceptions: professional obligation, health, force majeure. | Calendar year | Nights count per year; any justification | Up to 15,000 EUR civil fine (L324-1-1 V) ([CT]) |
| H8 | Answer a commune's request for nights | CT L324-1-1 IV para 3 ([CT]) | Send the number of nights rented, with the address and NER. Main residence or not. | Within 1 month of the request. Requests are possible until 31 Dec of the year after the rental year. | Letter with nights, address, NER | Not listed in V. A 10,000 EUR civil fine for this under the old text was upheld by Cass. 26 Jan 2022 n° 21-40.026 ([ANIL jurisprudence][ANILJ]). The current amount is unverified. |
| H9 | Get change-of-use authorisation where the commune requires it (non-main residence) | CCH L631-7, L631-7-1 A, L631-10 ([CCH]) | Authorisation (permanent, possibly with compensation, or temporary for under 5 years). DPE class A to E for new authorisations, A to D from 1 Jan 2034 (metropolitan France only). Sworn statement that the copropriété rules allow it (temporary regime). | Before letting | Authorisation decision, DPE, copro statement | Up to 100,000 EUR per unit, plus up to 1,000 EUR per day per m² until the flat returns to housing (CCH L651-2) ([CCH]) |
| H10 | Non-residential premises let as meublé (where the commune requires it) | CT L324-1-1 IV bis; R324-1-6, R324-1-7 ([CT]) | Mayor's authorisation. The request lists identity, SIRET, address with lot, surface, rooms, works and maximum guests. It lapses if the unit is not let within 3 years. | Before letting | Authorisation | Up to 25,000 EUR civil fine ([CT]) |
| H11 | Unit under a safety or insalubrity order | CT L324-1-1 III bis ([CT]) | The mayor may suspend the number and order platforms to remove ads | On order | — | Up to 50,000 EUR per unit (civil) ([CT]) |
| H12 | Tell the syndic (copropriété) | Loi 10 Jul 1965 art. 9-2 (article number per ANIL) ([ANIL]); [SP] | The owner (or an authorised tenant) informs the syndic when declaring a lot as meublé de tourisme. The syndic puts an information item on the next AG agenda. | On declaration | Proof of notice to the syndic | No fine found (unverified) |
| H13 | Energy rating (DPE) | CT L324-2-2 per ANIL (not shown in the 6 Oct 2026 consolidated edition; unverified) ([ANIL]); CCH L631-10 ([CCH]) | A to D for meublés from 1 Jan 2034 (main residences exempt). The mayor may demand a valid DPE at any time, to be sent within 2 months. | 2034, and on request | DPE | 100 EUR per day for a late DPE; up to 5,000 EUR per unit ([ANIL]) |
| I1 | Inform the host of the declaration and authorisation duties | CT L324-2-1 I ([CT]) | Information given to the host | Before the ad goes online | Proof the information was given (lawyers' advice) ([Kohen][KOH]) | Up to 12,500 EUR per unit (civil, TJ) (L324-2-1 III) ([CT]) |
| I2 | Get a sworn statement and the number before publishing | CT L324-2-1 I ([CT]) | "Déclaration sur l'honneur" that the host complies with the declaration and authorisation duties, says whether the unit is the main residence, and gives the number | Before publication or going online | The signed statement. Sworn agents can demand "toute déclaration" from intermediaries (L324-2-1 IV) ([CT]). | Up to 12,500 EUR per unit ([CT]) |
| I3 | Publish the number in every ad for the unit | CT L324-2-1 I; L324-2 ([CT]) | Number in every ad the intermediary publishes, including its own website | Always | Dated captures of each listing | Up to 12,500 EUR per unit ([CT]) |
| I4 | Send activity data to the DGE (API Meublés) | CT L324-2-1 II para 1; R324-2-1, R324-2-2 ([CT]); [D196A6] | Per unit in a registered commune rented at least once in the period: NER; listing URL(s) if published online; precise address; nights rented through it in the period. Sent even if the unit is no longer offered. Optional fields if known: host name or company and legal representative, SIRET, postal and email address, main residence or not, professional or not, disabled access, nights this year and last year by period. Optional data go in the same file, at the same time. | After each period (quarter or month), at the latest one month after it ends | Upload records in API Meublés; the file sent | Up to 50,000 EUR per unit (civil, TJ) ([CT]) |
| I5 | Register as an IDM on API Meublés | DGE notice ([DGE]); D324-2-9 3° (IDM account data) ([CT]) | Account via a Démarche Numérique form: company name, representatives' names, emails, phones, functions, logins | Before the first transmission; mandatory if one unit is in a registered commune | Account in place | Same exposure as I4 (my reading) |
| I6 | Stop offering a main residence at the cap | CT L324-2-1 II para 2 ([CT]) | Stop offering once the intermediary knows the unit has been rented through it for more than 120 nights, or the commune's lower cap, in the calendar year. It may rely on the sworn statement for the main-residence status. A shared take-down system must be certified each year before 31 Dec by an independent third party. | Continuous within the calendar year | Calendar closures; nights log | Up to 50,000 EUR **per listing** (civil, TJ) ([CT]) |
| I7 | Do not help an illegal change of use | CCH L651-2-1 ([CCH]) | Do not broker, negotiate or provide services for a unit let without the required authorisation (digital platforms are excluded from this article) | Always | Mandate, platform account creation, channel-manager use, commission (facts the Paris court relied on) ([SIM]) | Up to 100,000 EUR per unit (civil). In practice courts also fine conciergeries as co-offenders under L651-2 (70,000 EUR, TJ Paris 10 Jul 2026) ([SIM]) |
| I8 | Taxe de séjour, if the conciergerie receives the rents | CGCT L2333-33, L2333-34, L2333-34-1 ([CGCT]) | Collect the tax before the guest leaves. Pay it on the commune's dates. File a declaration per stay: start date, collection date, address, guests, nights, nightly price if unclassified, tax amount, NER, and any exemption reason. | Dates set by each commune's deliberation | Declarations and receipts | Late declaration 750 to 12,500 EUR; 150 EUR per omission or error; failure to collect or pay 750 to 2,500 EUR ([CGCT]) |
| I9 | Carte G (loi Hoguet) for managing rentals under a mandate | Loi n° 70-9 (Hoguet), per FNAIM's April 2026 report ([Rentalscaleup FNAIM][RSUH]) | A professional card when the firm signs contracts and collects rents for owners (secondary sources) | Before trading | Card, mandates | Criminal penalties cited by secondary sources (unverified). Adjacent topic, outside the product core. |

## Filing channels and formats

**Host declaration (today and from Q4 2026).**
- Today: in a commune with a registration procedure, the commune's own online service issues the number. Examples are Paris's teleservice and Déclaloc where a commune has deployed it ([PARIS]; [Hoteboost][HOTE]). Elsewhere, hosts were told to use the Cerfa 14004 at the mairie for second homes ([Hoteboost][HOTE]). Its legal basis, the old L324-1-1 II, now shows "(Abrogé)" in the consolidated code ([CT]). This is a grey zone until the teleservice opens.
- From Q4 2026: a national teleservice on Démarche Numérique, with numbers issued automatically ([DGE]). A decree will set the information and documents. The law names an income-tax notice in the host's name with the unit's address as the tax address for main residences (L324-1-1 III) ([CT]).
- Number formats:
  - Legacy commune numbers are 13 characters in three groups: the 5-digit INSEE commune code, a 6-digit identifier and a 2-character alphanumeric key (D324-1-1 II) ([CT]).
  - New national numbers have a fixed part ("FRA" + INSEE code) and a random part ([DGE]). The exact length is not published (unverified).
- The legacy content list (D324-1-1 II) has these fields: declarant identity, postal and email address; unit address with building, staircase, floor and flat number (or the "numéro invariant" from the taxe d'habitation notice); main residence or not; rooms, beds, and classification date and level ([CT]). The EU Regulation's minimum list is close: address with floor or flat, unit type, whole or part, primary, secondary or other use, maximum beds and guests, authorisation status, and owner identity and contact details ([EU]). Expect the national decree to align with the EU list ([ANIL]).

**Intermediary data (API Meublés).**
- Registration: on apimeubles.finances.gouv.fr ("Connexion", then "Créer un compte"), which leads to a Démarche Numérique form ([DGE]). The public endpoint returns the form link ([DN form][DN]). Contact goes through a form ([DN contact][DNC]).
- In the app ([APP], public JavaScript read 10 Oct 2026):
  - User profiles are IDM-ADMIN and IDM-GEST. Login uses TOTP two-factor authentication.
  - The "Import données meublés" screen takes a CSV in UTF-8 with ";" as the separator. It offers "Télécharger le modèle" (modele_import_idm.csv), which needs a login (the template endpoint returned HTTP 401 without one).
  - Import statuses include "Terminé avec des alertes" and "Fichier rejeté". Each upload keeps log files.
  - "Gestion clé API" issues API keys for machine sending.
  - IDM screens show NER, listing URL, month, nights and year-to-date nights, plus a "Télécharger la liste des communes" button.
  - The app text says the upload frequency is "1 ou 3 mois selon l'activité de ces intermédiaires".
- Checks the commune sees on IDM data (filters in the same app) ([APP]): "NER réconciliés", "NER absents", "NER inconnus", "NER > seuil" (Dépassement du seuil), "Résidences principales", "Incohérence adresse du meublé" and "Incohérence statut résidence principale". These work as the inspector's checklist for intermediary data.
- The address check probably uses the national address base: the app's content policy allows calls to data.geopf.fr ([APP]) (unverified link to the check).
- The 2022 pilot (PEReN) also offered an API and a CSV drop box for intermediaries with fewer resources ([PEReN][PEREN]).
- Format law: a joint arrêté "peut préciser le format" (R324-2-6) ([CT]). None was found. The format today is whatever the DGE template says.
- The DGE keeps intermediary data for the year received and the following year (R324-2-1 IV). Login logs are kept 6 months (D324-2-12) ([CT]).

**Commune requests to hosts (nights count).** A letter or email from the commune, answered within one month with the address and NER (L324-1-1 IV) ([CT]). No set format.

**Taxe de séjour.** Paid and declared to each commune or EPCI on the dates its council sets. The declaration content is fixed by CGCT L2333-34 III ([CGCT]). Portal and format vary by commune (unverified).

## Supervisors and enforcement evidence

**Who supervises.**
- The **mayor** imposes the administrative fines for declaration failures (10,000 EUR) and false data (20,000 EUR) (L324-1-1 V). The mayor can suspend a number (L324-1-1 III bis) ([CT]).
- The **TJ president**, ruling in the "procédure accélérée au fond" at the commune's request, imposes all intermediary fines and the cap, safety-order and IV bis fines. The fines go to the commune (L324-1-1 V; L324-2-1 III) ([CT]). For change of use, the commune, the housing authority, the EPCI or the ANAH can sue (CCH L651-2) ([CCH]).
- **Sworn agents** of municipal or departmental housing services look for breaches and can demand any declaration from hosts and intermediaries (L324-2-1 IV) ([CT]). Paris says its sworn officers can enter premises, verify statements and ask for proof of occupancy ([PARIS]).
- The **DGE** runs API Meublés. It tells a commune when a declared main residence passes the cap (L324-2-1 II) and publishes aggregate statistics (R324-2-5) ([CT]).
- The **CNIL** gave a favourable opinion on the beta on 18 Dec 2025 ([DGE]; [APP]).

**Inspection practice.**
- Paris runs field and internet investigations and targeted operations in tourist areas, then sends cases to court ([Banque des Territoires][BDT]).
- The state app gives communes ready-made flags: missing NER, unknown NER, over-cap units, address and main-residence inconsistencies ([APP]). Expect checks to start from these flags.
- I found no official questionnaire or checklist for intermediaries. The nearest are lawyers' lists of what to keep per unit: owner identity, address, status, NER, sworn statement, authorisation, copropriété rules, proof the owner was informed, dated listing capture, and proof of removal after an alert ([Kohen, 25 May 2026][KOH]).

**Evidence of enforcement.**
- TJ Paris, 10 Jul 2026, RG 26/52006: owner and conciergerie fined 70,000 EUR each for one flat let without change-of-use authorisation. The court relied on the exclusive mandate, the platform account the conciergerie created, its channel-manager and pricing tools, its 20% commission and the listing on its own site ([SIM]).
- TJ Paris, 15 Apr 2026: an SCI fined a record 585,000 EUR for converting a whole building ([RSU]).
- Paris totals: about 1.3 MEUR of fines in 2024, 2.4 MEUR in 2025 and close to 1 MEUR in Q1 2026. The city estimates about 25,000 illegal rentals (deputy mayor quoted by a trade site; unverified) ([RSU]).
- Airbnb was ordered to pay 8,000 EUR per listing without a number (TJ Paris, référé, 1 Jul 2021) ([Le Monde du Droit][LMDD]).
- Cour de cassation, 26 Jan 2022, n° 21-40.026: upheld the fine for a host who did not send the nights count ([ANILJ]).
- API Meublés is already receiving data. On 4 Oct 2026: 9,342,745 nights, 383 communes, 27,142 units with a NER, 6,500 main residences, 213,845 other units, and 193,003 units with unknown main-residence status ([APIST]). My reading of these field names is unverified. If correct, most data still lacks a NER match and a status, which communes will chase.
- I found no reported case yet of a fine on a conciergerie for failing to send API Meublés data. The duty only started in 2026.

## Regional differences

- **Which communes count for reporting.** Only units in communes registered on API Meublés: 410 on 10 Oct 2026 ([APICL]). The list is public and growing ([communes list][APIC]). Top departments are Var (48 communes), Ardèche (47), Haute-Savoie (36), Charente-Maritime (26) and Morbihan (25). Paris, Lyon, Marseille, Nice, Toulouse, Nantes, Lille, Strasbourg, Montpellier, Rennes, Annecy, Biarritz, Saint-Malo, La Rochelle and Bastia are in. Bordeaux, Cannes, Chamonix, Ajaccio and Arcachon were not on 10 Oct 2026 (my check of [APICL]).
- **Night caps.** The default is 120 nights. A commune may lower it to as few as 90 by reasoned deliberation (L324-1-1 IV) ([CT]). Paris has applied 90 nights since 1 Jan 2025 (délibération 2024 DLH 398) ([Paris 90 days][P90]). The app stores a per-commune, per-year threshold ("seuil") ([APP]), but I found no public list of communes at 90 (unverified).
- **Registration today.** Until the teleservice opens, numbers exist only where communes run a registration procedure, mostly tight-market ("zones tendues") communes ([SP]).
- **Change of use.**
  - Since loi 2026-103 of 19 Feb 2026 (art. 108), CCH L631-7 applies to communes on the list in the decree under CGI art. 1406 bis I B. There the change of use "peut être soumis, sur décision de l'organe délibérant, à autorisation préalable" ([CCH]; [Légifrance L631-7][L6317]). The older text covered communes over 200,000 inhabitants and the three inner Paris departments automatically. Whether existing city schemes need new deliberations, and from when, is unverified (an annotation points to taxes from 2027) ([Doctrine annotation][DOC]).
  - Paris requires compensation for second homes ("3 pour 1" in some zones) under its règlement municipal 2025 DLH 44 ([Paris règlement][PREG]; [PARIS]).
  - Communes may run temporary authorisations with quotas by zone (CCH L631-7-1 A) ([CCH]).
  - Communes may require authorisation for non-residential premises (CT L324-1-1 IV bis) ([CT]).
- **Corsica.** Declaration data also go to the Collectivité de Corse (L324-1-1 III) ([CT]). ANIL says Corsica will have its own teleservice ([ANIL]) (unverified detail).
- **Overseas.** The DPE rule for authorisations applies only in metropolitan France (CCH L631-10 II) ([CCH]). ANIL says the 2034 DPE rule does not apply overseas ([ANIL]).
- **Taxe de séjour.** Rates, payment dates and declaration portals are set commune by commune (CGCT L2333-34 I) ([CGCT]).

## Upcoming changes

1. **National teleservice and API Meublés final version: Q4 2026** ([DGE]; [SP]). Expect a decree on the declaration content and documents, aligned with the EU Regulation ([ANIL]). It may also set the validity period (L324-1-1 III) ([CT]). Not yet published on 6 Oct 2026 ([CT]).
2. **Re-registration wave.** All old commune numbers must be re-declared within "plusieurs mois" of the opening, then become invalid ([DGE]; [SP]). This creates a one-off chase for every managed unit.
3. **Possible format arrêté** under R324-2-6 ([CT]). None found.
4. **More communes joining API Meublés.** Each new commune brings new reporting duties. From the next version, the duty applies only for communes that request the data ([DGE]).
5. **EU Regulation 2024/1028** has applied since 20 May 2026 (24 months after entry into force; Member State penalty rules were due by 20 May 2026, art. 15(4)) ([EU]). Platforms send data monthly, or quarterly if small, to a single digital entry point, and must run random checks on numbers ([EU]). Platform checks will push conciergeries to keep numbers clean.
6. **DPE**: A to D for meublés from 1 Jan 2034 (L324-2-2 per [ANIL]), and A to D for new change-of-use authorisations from 1 Jan 2034 (CCH L631-10) ([CCH]).
7. **Change-of-use scope reform** under loi 2026-103, with effects from 2027 (unverified) ([DOC]).
8. **Political pressure.** UNPLV launched "La Voix des Hébergeurs" in July 2026 to push for softer rules ([Tendance Hôtellerie][TH]). FNAIM's April 2026 report pushes for carte G on conciergeries ([RSUH]). A Cour de cassation ruling of 3 Sep 2026 on repeated short lets as change of use is reported by a lawyer (unverified) ([Kohen, 7 Oct 2026][KOH2]).

## PRODUCT REQUIREMENTS

Each requirement is testable. "Basis" gives the legal source (CT = Code du tourisme, CCH, CGCT, EU = Reg 2024/1028), with links in the sections above. "Config" means the value must sit in a versioned rules table, not in code, because the source is pending or local.

**A. Portfolio and scope**

1. The system must hold a unit register with these fields: NER; precise address (street, building, staircase, floor, flat or lot number); INSEE commune code; local fiscal identifier or "numéro invariant"; main residence (yes, no, unknown); professional letting (yes, no) under CGI art. 155; disabled access (yes, no); rooms; beds; classification level and date; host type (person or company); host name, or company name and a legal representative; host SIRET; host postal and email address; "declarant is the host" (yes, no); and the declarant's identity, SIRET, postal and email address. Test: an export lists every field of R324-2 II-III for each unit. Basis: CT R324-2, R324-2-1 II, D324-2-9 1°-2°.
2. Each field must record its source (owner form, PMS import, tax notice, manual) and the date it was last confirmed. Test: the unit history shows source and date for each value. Basis: CT L324-1-1 III (update duty), L324-2-1 I (sworn statement as the basis).
3. The system must fetch the public list of API Meublés communes at least daily and mark each unit "API Meublés reporting: required / not required". Test: add a commune to a mocked list; within 24 hours affected units turn "required" and an alert is sent. Basis: CT R324-2-1 I; [DGE]; [APICL].
4. The system must store the firm's size class (micro, small or other, per Recommendation 2003/361/CE) and compute the monthly average of listings over the previous quarter. It must then set the reporting period: 3 months if micro or small and under 4,250 listings, otherwise 1 month. It must recompute each quarter. Test: a small firm with 4,300 average listings switches to monthly for the next period. Basis: CT R324-2-1 III.
5. For each unit and channel the system must record whether the firm acts as intermediary (brokering, negotiating, its own website) and which listing URLs it publishes. Test: a unit with Airbnb, Booking and direct-site URLs shows three channel rows with URL and start date. Basis: CT L324-2-1 I, R324-2-1 I.

**B. Registration number (NER) lifecycle**

6. The system must validate legacy numbers: 13 characters; the first 5 digits equal the unit's INSEE code; then 6 digits; then 2 alphanumeric characters (separators allowed in input, stored normalised). Test: a Lyon unit with a 75056-prefixed number is rejected. Basis: CT D324-1-1 II.
7. The system must accept national numbers of the form "FRA" + INSEE code + random part, with the exact pattern held in config until published. Test: changing the config pattern changes validation without a release. Basis: [DGE].
8. Each number must carry a status: missing; legacy (commune); national; suspended; withdrawn; superseded (by a new declaration); expired. Status changes must keep the date, the source and an evidence file. Test: setting "suspended" requires a date and a document. Basis: CT L324-1-1 III, III bis; EU art. 6.
9. The system must hold the legacy-number cut-off date per commune or nationally as config. It must alert owners and staff 60, 30, 14 and 7 days before it. From the cut-off, a legacy number must count as "invalid" in every check and export. Test: with the cut-off set to yesterday, a legacy number triggers "invalid" and blocks publication tasks. Basis: [DGE]; [SP].
10. The system must hold the renewal period as config (empty until a decree sets it). Once set, it computes an expiry date per number and alerts 60 and 30 days before. Test: entering "N years" fills an expiry date on every national number. Basis: CT L324-1-1 III para 4.
11. Any change to a declared field (owner, address, main-residence status, rooms, beds, classification, change-of-use status) must open an "update the declaration" task for the owner. It must flag the unit until the owner confirms the update and uploads the new receipt. Paris units must default to "new number expected". Test: changing beds from 4 to 6 opens a task; the unit shows "declaration out of date". Basis: CT L324-1-1 III para 4; D324-1-1 III; [PARIS].
12. The system must not submit declarations in the owner's name by default. It must give the owner a pre-filled checklist of the data and documents the teleservice asks for, a link to the official service, and an upload slot for the electronic receipt. Agent filing may only be switched on per commune by config, after legal confirmation. Test: no default flow sends data to a declaration service. The receipt upload sets status "national". Basis: CT L324-1-1 III ("en personne"); [PARIS] ("cannot be filed on behalf of the property management company").
13. When main residence is "yes", the system must require a proof document: by default an income-tax notice in the host's name with the unit's address as tax address. The document is stored encrypted, and the user is prompted to hide tax amounts. Test: "main residence = yes" cannot be saved without a document. Basis: CT L324-1-1 III paras 2 and 5.
14. The system must check that each number's commune code matches the unit's INSEE code and that no number is used for two units. Test: a duplicate number on two units raises a blocking error. Basis: CT L324-1-1 V para 2 (false number, 20,000 EUR).

**C. Intermediary duties before publication**

15. The system must send the owner a dated information notice on the declaration duty, the change-of-use duty, the night cap and the copropriété notice. It must log the version, channel, time and read receipt. Test: no unit can reach "ready to publish" without a logged notice. Basis: CT L324-2-1 I; [KOH].
16. The system must collect an e-signed sworn statement per unit. It must state that the owner meets the declaration and authorisation duties, whether the unit is the main residence, and the number. Test: the PDF holds the three items, signer identity and a timestamp; "ready to publish" is blocked without it. Basis: CT L324-2-1 I.
17. A new sworn statement must be required when the number, the main-residence status or the change-of-use status changes. Test: replacing the number sets the statement to "expired" and blocks publication tasks. Basis: CT L324-2-1 I.
18. A per-commune rules table must say whether change-of-use authorisation is required, whether quotas or temporary regimes apply, and whether IV bis applies to non-residential premises, each with its source deliberation. Test: a Paris second home without an authorisation record is blocked. Basis: CCH L631-7, L631-7-1 A, L631-9; CT L324-1-1 IV bis.
19. For units that need authorisation, the system must store the decision, its date, expiry (temporary authorisations last under 5 years), compensation reference if any, and the DPE class used. It must warn if the DPE is worse than E, or worse than D for authorisations from 1 Jan 2034. Test: DPE F blocks the unit; DPE E triggers a warning dated for 2034. Basis: CCH L631-7-1 A, L631-10; CCH L651-2 and L651-2-1 (fines).
20. The system must record, per listing URL, a dated capture showing the number, refreshed at least monthly and on every number change. On the firm's own website it must also check the "annonce professionnelle" or "annonce d'un particulier" mention. Test: a capture older than 31 days marks the listing "check due". Basis: CT L324-2, L324-2-1 I, D324-1-3.
21. Where a PMS or channel-manager integration exists, the system must push the current number to each channel and compare it with the number shown. Test: a mismatch between register and listing raises an alert within one sync cycle. Basis: CT L324-2-1 I.

**D. Night caps**

22. The system must count rented nights per unit per calendar year across all channels the firm handles, by the date of each night. Stays across 31 Dec are split. Cancelled stays are excluded. Test: a stay from 30 Dec to 3 Jan adds 2 nights to each year. Basis: CT L324-1-1 IV, L324-2-1 II para 2.
23. The cap must come from the per-commune rules table: 120 by default, or the commune's value (90 to 119) with its deliberation and effective date, kept per year. Test: a Paris main residence uses 90 for 2025 onward. Basis: CT L324-1-1 IV; [P90].
24. The system must forecast the year-end total from confirmed future bookings. It must alert at 80%, 90% and 100% of the cap, and block new booking tasks in the system once the cap is reached. Test: a unit at 81 of 90 nights shows a "90%" alert. Basis: CT L324-2-1 II para 2.
25. When the cap is reached, the system must open a "close all calendars" task per listing. It must record the time and proof of closure for each channel. Test: the task stays open until every listing has a closure record. Basis: CT L324-2-1 II para 2 (50,000 EUR per listing).
26. The system may record a host's reason to exceed the cap (professional obligation, health, force majeure) with documents. It must still flag that the intermediary stop rule names no exception and require a manager override with a logged reason. Test: an override without a reason cannot be saved. Basis: CT L324-1-1 IV; L324-2-1 II para 2 (see open questions).
27. When a commune asks a host for the nights count, the system must produce a reply with the address, NER and nights for the year asked (current or previous). It must track a deadline of one month from receipt. Test: entering a request dated 1 Mar sets a due date of 1 Apr and a pre-filled letter. Basis: CT L324-1-1 IV para 3.

**E. API Meublés transmission**

28. For each period, the system must list every unit in a registered commune with at least one night rented through the firm in that period. This includes units no longer offered. Test: a unit archived in February still appears in the Q1 file if rented in January. Basis: CT R324-2-1 I.
29. Each row must carry the mandatory fields: NER, listing URL(s) when published online, precise address, nights rented through the firm in the period. Test: a row with no URL is allowed only when the unit has no online listing. Basis: CT R324-2-1 I.
30. A unit rented in the period but without a valid NER must still be reported, with a blocking alert to staff and owner. Leaving the unit out is not an option. Test: the export includes the unit with NER empty and the dashboard shows "NER missing, reported". Basis: CT R324-2-1 I, L324-2-1 III (50,000 EUR per unit for not transmitting).
31. Optional fields must be sent only if the user has turned them on, and then in the same file as the mandatory data: host identity, SIRET, addresses, main residence, professional, disabled access, year-to-date and previous-year nights by period. Test: switching "main residence" on adds that column to the next file only. Basis: CT R324-2-1 II.
32. The system must produce a CSV in UTF-8 with ";" as separator, with the columns of the DGE template (modele_import_idm.csv). The column mapping must sit in config. Test: a sample file imports into API Meublés with status "Terminé", not "Fichier rejeté". Basis: [APP]; CT R324-2-6.
33. The system must support sending by API key when the firm has one. The key is stored encrypted, its expiry date tracked, and the user warned to declare the sending IP if the DGE filters by IP. Test: an expired key blocks sending and alerts 14 days before expiry. Basis: [APP]; CT L324-2-1 II ("de manière électronique, sous un format standardisé").
34. The deadline engine must set due date = period end + 1 month and alert at D-14, D-7 and D-1. It must show "overdue" from D+1 until a submission is recorded. Test: Q3 2026 (ending 30 Sep) is due 31 Oct 2026. Basis: CT R324-2-1 I.
35. Before export, the system must run the same checks the commune sees: NER absent; NER unknown (format or INSEE mismatch, or not in the owner's receipt); nights over the commune cap for a declared main residence; address inconsistency against the national address base; main-residence inconsistency (for example a main residence whose host address differs from the unit). Test: each check fires on a seeded faulty row. Basis: [APP] (NER_ABSENT, NER_INCONNUS, NER_SUP_120, INCOHERENT_ADRESSE, INCOHERENT_RES_PRINC); CT L324-2-1 II.
36. Each submission must be stored with the exact file, a SHA-256 hash, the time, the user, the API Meublés import status (including "avec des alertes") and the log file returned. Test: the evidence pack for a period shows all six items. Basis: CT L324-2-1 III-IV (proof in case of a fine).
37. The system must allow a corrected re-submission for a past period, keep every version and show which one is current. Test: two uploads for Q1 both appear, the later one marked current. Basis: CT R324-2-1 I.
38. The system must hold, per firm, the IDM account status (form sent, account active, users with IDM-ADMIN and IDM-GEST roles) and alert if a unit becomes "reporting required" while no account is active. Test: a first unit in a registered commune with no account opens a "register on API Meublés" task. Basis: [DGE]; CT D324-2-9 3°.

**F. Records and inspection pack**

39. For each unit the system must generate a "dossier de diligence" (PDF plus ZIP) within one minute. It contains: owner identity; address; status; NER and receipt; sworn statement; information notice proof; authorisation and DPE if any; copropriété notice; dated listing captures; nights log; cap closures; API Meublés submissions. Test: the pack builds for a 50-unit firm in under 10 minutes. Basis: CT L324-2-1 IV; [KOH].
40. All changes must go to an append-only audit log (who, what, when, before and after values). Test: no user, admins included, can edit or delete log entries. Basis: CT L324-2-1 IV (proof); GDPR art. 5(2) (accountability).
41. Retention: keep records at least until 31 Dec of the year after the rental year (the commune's access window). Default to 5 years (my recommendation; the law sets no period for intermediaries), configurable, with deletion after. Test: changing retention to 2 years schedules deletion of older records. Basis: CT L324-1-1 IV, L324-2-1 II; GDPR art. 5(1)(e).

**G. Adjacent duties (optional modules)**

42. Copropriété: record whether the unit is in a copropriété, whether the rules allow short lets, and the date and proof of the notice to the syndic. Test: a copro unit without a notice shows a warning. Basis: loi 1965 art. 9-2 (per [ANIL]); [SP].
43. Taxe de séjour: if the firm collects rents, compute the tax per stay and produce the per-stay declaration lines (stay start, collection date, address, guests, nights, nightly price if unclassified, amount, NER, exemption reason). Payment dates are config per commune. Test: an export for one commune and period holds every field of L2333-34 III. Basis: CGCT L2333-33, L2333-34, L2333-34-1.
44. DPE: store class and date per unit, flag units below D for 2034, and track a mayor's DPE request with a 2-month deadline. Test: a request dated 1 Jun sets a 1 Aug deadline. Basis: CT L324-2-2 per [ANIL] (unverified in consolidated code); CCH L631-10.
45. The system must record the firm's carte G status and mandate type for information only, with no compliance logic. Basis: loi Hoguet ([RSUH]).

**H. Data protection, security and roles**

46. The vendor must act as a GDPR processor under a written art. 28 agreement, host data in the EU, and publish a sub-processor list. Test: the DPA template exists and the hosting region is EU. Basis: GDPR art. 28; D324-2-13 (the state treats this data as personal data).
47. Roles must mirror the state app (firm admin, manager), plus a read-only owner portal per unit. TOTP two-factor login is required for staff. Test: a manager cannot change rules tables; owners see only their units. Basis: CT D324-2-10 (need-to-know access); [APP].
48. Documents with tax or identity data must be encrypted at rest, and downloads logged. Test: every document download writes an audit entry. Basis: GDPR art. 32.

**I. Rules maintenance and scope guardrails**

49. All legal parameters must live in a versioned rules table with source URL and effective date: caps per commune, legacy cut-off date, renewal period, number formats, reporting periods, fine amounts shown in the UI, the CSV mapping, the commune list. Test: a change of the Paris cap takes effect from its date without a deploy. Basis: CT L324-1-1 III-IV; R324-2-1 III; R324-2-6.
50. The product must not publish listings, take bookings or process guest payments. That keeps the vendor outside the intermediary definition. Test: no feature writes to a channel except number fields and calendar blocks the firm triggers. Basis: CT L324-2-1 I (definition of intermediary).
51. All owner-facing text and documents must be in French, with article references. Test: notice, sworn statement and commune reply templates exist in French. Basis: CT L324-2-1 I (information duty); practice.
52. The dashboard must show, per firm, the counts for each risk: units with no number, legacy numbers, numbers due to expire, missing sworn statements, listings without a recent capture, units over 80% of cap, periods overdue, units in newly registered communes. Each count links to the units. Test: seeded data produces the expected counts. Basis: summary of duties H1-H8 and I1-I6 above.

## Open questions

1. **Validity period.** How long will a national number stay valid, and which decree will set it? Is there a fee? (L324-1-1 III; no decree on 6 Oct 2026) ([CT]).
2. **Transition.** When does the "plusieurs mois" window for old numbers start, and how long is it? Will it differ by commune? ([DGE]; [SP]).
3. **Agent filing.** The law says "en personne" and Paris refuses filing by a manager, while R324-2 and D324-2-9 provide for a declarant who is not the host ([CT]; [PARIS]). Will the national teleservice allow a mandate (for example for a company's legal representative, or a conciergerie)? This decides whether a "done-for-you" filing service is legal.
4. **CSV template and API spec.** What are the template's columns, and is there an API spec for IDMs? Both sit behind the IDM login ([APP]). Registering as an IDM, or asking a pilot conciergerie for the template, is the fix.
5. **Counting.** Does API Meublés expect nights or days, and how are stays split across period boundaries? The text says "nombre de jours" (R324-2-1), while the app uses "nuitées" ([CT]; [APP]).
6. **Double reporting.** When a conciergerie lists a unit on Airbnb, both are intermediaries. The decree's per-intermediary breakdown (R324-2 II) suggests both report the same nights ([CT]). Is that the DGE's expectation for conciergeries without their own booking site?
7. **Cap exceptions.** Does the intermediary's stop rule (L324-2-1 II para 2) accept the host's exceptions (professional obligation, health, force majeure) that L324-1-1 IV allows? ([CT]).
8. **DPE article.** ANIL cites a new CT L324-2-2 (DPE A-D in 2034, mayor's request, 100 EUR per day, 5,000 EUR fine), but it is missing from the 6 Oct 2026 consolidated edition ([ANIL]; [CT]). Is it in force, deferred or codified elsewhere?
9. **Host fine for a missing number on ads** under the new text: none found in L324-1-1 V; Paris still quotes 5,000 EUR ([CT]; [PARIS]).
10. **Nights-request fine.** The new V has no fine for a host who ignores a commune's nights request (old text: 10,000 EUR) ([CT]; [ANILJ]).
11. **Change-of-use scope after loi 2026-103.** Which communes are on the CGI 1406 bis decree list, and do existing city schemes need new deliberations? ([L6317]; [DOC]).
12. **Direct-booking sites.** Does a conciergerie's own booking site make it an "online short-term rental platform" under the EU Regulation, with monthly or quarterly data including guests and their countries? ([EU]).
13. **Per-commune caps.** Is there a public list of communes at 90 nights? The app stores a "seuil" per commune and year, but no public export was found ([APP]).
14. **Retention.** No retention period is set for intermediaries' sworn statements and evidence. Five years is my assumption ([CT]).

## Sources

Primary (law and state systems):
- [CT]: Code du tourisme, consolidated, edition 6 Oct 2026 (codes.droit.org, Légifrance data): https://codes.droit.org/PDF/Code%20du%20tourisme.pdf
- [CCH]: Code de la construction et de l'habitation, edition 9 Oct 2026: https://codes.droit.org/PDF/Code%20de%20la%20construction%20et%20de%20l%27habitation.pdf
- [CGCT]: Code général des collectivités territoriales, edition 1 Oct 2026: https://codes.droit.org/PDF/Code%20g%C3%A9n%C3%A9ral%20des%20collectivit%C3%A9s%20territoriales.pdf
- [LOI]: Loi n° 2024-1039 du 19 novembre 2024, art. 1: https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000050612712
- [D196]: Décret n° 2026-196 du 19 mars 2026: https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053703509
- [D196A6]: Décret n° 2026-196, art. 6: https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053703536
- [L6317]: CCH L631-7 on Légifrance: https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000053546358
- [EU]: Regulation (EU) 2024/1028: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1028
- [DGE]: DGE, "L'API meublés, guichet unique" (updated 23 Jul 2026): https://www.entreprises.gouv.fr/espace-entreprises/s-informer-sur-la-reglementation/lapi-meubles-guichet-unique-de-centralisation
- [SP]: service-public.gouv.fr, 27 Jul 2026: https://www.service-public.gouv.fr/particuliers/actualites/A18880
- [APP]: API Meublés web app and its public JavaScript (read 10 Oct 2026): https://apimeubles.finances.gouv.fr/
- [APIC]: API Meublés public communes list page: https://apimeubles.finances.gouv.fr/communes-list
- [APICL]: public communes endpoint (410 entries on 10 Oct 2026): https://apimeubles.finances.gouv.fr/api/grand-public/communes-list
- [APIST]: public statistics endpoint (dateCalcul 2026-10-04): https://apimeubles.finances.gouv.fr/api/grand-public/statistiques
- [DN]: IDM registration form (Démarche Numérique): https://demarche.numerique.gouv.fr/commencer/db2338ad-4575-44c2-9728-505b529d1b68
- [DNC]: API Meublés contact form: https://demarche.numerique.gouv.fr/commencer/api-meubles-contact
- [PEREN]: PEReN 2022 pilot, intermediaries page: https://meubles.peren.fr/intermediaire/
- [PARIS]: Ville de Paris, "Furnished vacation rentals: rules to follow" (updated 20 Apr 2026): https://www.paris.fr/en/pages/furnished-vacation-rentals-rules-to-follow-34993
- [P90]: Ville de Paris, 90-day limit: https://www.paris.fr/pages/location-limitee-a-90-jours-paris-serre-la-vis-sur-les-meubles-touristiques-29653
- [PREG]: Paris règlement municipal 2025 DLH 44: https://cdn.paris.fr/paris/2025/06/06/2025-dlh-44-reglement-municipal-sur-les-changements-d-usage-consolide-03-03-25-EPOl.pdf
- [ANIL]: ANIL analysis of loi 2024-1039 (18 Dec 2024): https://www.anil.org/aj-renforcer-outils-regulation-meubles-tourisme/
- [ANILJ]: ANIL case law on nights transmission: https://www.anil.org/jurisprudences-meubles-touristiques-obligation-transmission-donnes

Secondary (lawyers, trade press):
- [SIM]: Simonnet Avocat, 21 Jul 2026 (TJ Paris 10 Jul 2026, RG 26/52006): https://www.simonnetavocat.fr/conciergerie-de-location-touristique-condamnee-responsabilite-et-recours-du-proprietaire/
- [KOH]: Kohen Avocats, 25 May 2026: https://kohenavocats.fr/2026/05/25/contrat-conciergerie-airbnb-amende-annonce-irreguliere-20-mai-2026/
- [KOH2]: Kohen Avocats, 7 Oct 2026: https://kohenavocats.fr/2026/10/07/meuble-touristique-paris-octobre-2026-changement-usage-amende-copropriete-louer-regle/
- [RSU]: Rentalscaleup, Paris fines: https://www.rentalscaleup.com/fr/pres-de-1-million-deuros-damendes-airbnb-a-paris-en-trois-mois-le-renforcement-de-la-reglementation-en-france-saccelere/
- [RSUH]: Rentalscaleup, FNAIM report on loi Hoguet (Apr 2026): https://www.rentalscaleup.com/fr/locations-de-courte-duree-en-france-et-la-loi-hoguet-que-dit-le-rapport-fnaim-davril-2026/
- [BDT]: Banque des Territoires, Paris enforcement: https://www.banquedesterritoires.fr/meubles-de-tourisme-la-ville-de-paris-se-saisit-de-la-nouvelle-loi-pour-renforcer-la-regulation
- [LMDD]: Le Monde du Droit, Airbnb 2021: https://www.lemondedudroit.fr/droit-civil/280-immobilier-construction/76464-airbnb-condamnation-pour-defaut-de-numero-de-declaration-dans-ses-annonces.html
- [HOTE]: Hoteboost, status of registration in 2026: https://hoteboost.fr/blog/numero-enregistrement-location-saisonniere-2026
- [DOC]: Doctrine annotation of CCH L631-7: https://www.doctrine.fr/l/texts/codes/LEGITEXT000006074096/articles/LEGIARTI000006825981
- [TH]: Tendance Hôtellerie, UNPLV campaign: https://www.tendancehotellerie.fr/articles-breves/communique-de-presse/19798-article/l-unplv-donne-la-parole-aux-hebergeurs-francais-pour-contribuer-collectivement-a-une-revision-plus-equilibree-des-regles-encadrant-le-secteur-de-la-location-touristique

[CT]: https://codes.droit.org/PDF/Code%20du%20tourisme.pdf
[CCH]: https://codes.droit.org/PDF/Code%20de%20la%20construction%20et%20de%20l%27habitation.pdf
[CGCT]: https://codes.droit.org/PDF/Code%20g%C3%A9n%C3%A9ral%20des%20collectivit%C3%A9s%20territoriales.pdf
[LOI]: https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000050612712
[D196]: https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053703509
[D196A6]: https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053703536
[L6317]: https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000053546358
[EU]: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1028
[DGE]: https://www.entreprises.gouv.fr/espace-entreprises/s-informer-sur-la-reglementation/lapi-meubles-guichet-unique-de-centralisation
[SP]: https://www.service-public.gouv.fr/particuliers/actualites/A18880
[APP]: https://apimeubles.finances.gouv.fr/
[APIC]: https://apimeubles.finances.gouv.fr/communes-list
[APICL]: https://apimeubles.finances.gouv.fr/api/grand-public/communes-list
[APIST]: https://apimeubles.finances.gouv.fr/api/grand-public/statistiques
[DN]: https://demarche.numerique.gouv.fr/commencer/db2338ad-4575-44c2-9728-505b529d1b68
[DNC]: https://demarche.numerique.gouv.fr/commencer/api-meubles-contact
[PEREN]: https://meubles.peren.fr/intermediaire/
[PARIS]: https://www.paris.fr/en/pages/furnished-vacation-rentals-rules-to-follow-34993
[P90]: https://www.paris.fr/pages/location-limitee-a-90-jours-paris-serre-la-vis-sur-les-meubles-touristiques-29653
[PREG]: https://cdn.paris.fr/paris/2025/06/06/2025-dlh-44-reglement-municipal-sur-les-changements-d-usage-consolide-03-03-25-EPOl.pdf
[ANIL]: https://www.anil.org/aj-renforcer-outils-regulation-meubles-tourisme/
[ANILJ]: https://www.anil.org/jurisprudences-meubles-touristiques-obligation-transmission-donnes
[SIM]: https://www.simonnetavocat.fr/conciergerie-de-location-touristique-condamnee-responsabilite-et-recours-du-proprietaire/
[KOH]: https://kohenavocats.fr/2026/05/25/contrat-conciergerie-airbnb-amende-annonce-irreguliere-20-mai-2026/
[KOH2]: https://kohenavocats.fr/2026/10/07/meuble-touristique-paris-octobre-2026-changement-usage-amende-copropriete-louer-regle/
[RSU]: https://www.rentalscaleup.com/fr/pres-de-1-million-deuros-damendes-airbnb-a-paris-en-trois-mois-le-renforcement-de-la-reglementation-en-france-saccelere/
[RSUH]: https://www.rentalscaleup.com/fr/locations-de-courte-duree-en-france-et-la-loi-hoguet-que-dit-le-rapport-fnaim-davril-2026/
[BDT]: https://www.banquedesterritoires.fr/meubles-de-tourisme-la-ville-de-paris-se-saisit-de-la-nouvelle-loi-pour-renforcer-la-regulation
[LMDD]: https://www.lemondedudroit.fr/droit-civil/280-immobilier-construction/76464-airbnb-condamnation-pour-defaut-de-numero-de-declaration-dans-ses-annonces.html
[HOTE]: https://hoteboost.fr/blog/numero-enregistrement-location-saisonniere-2026
[DOC]: https://www.doctrine.fr/l/texts/codes/LEGITEXT000006074096/articles/LEGIARTI000006825981
[TH]: https://www.tendancehotellerie.fr/articles-breves/communique-de-presse/19798-article/l-unplv-donne-la-parole-aux-hebergeurs-francais-pour-contribuer-collectivement-a-une-revision-plus-equilibree-des-regles-encadrant-le-secteur-de-la-location-touristique
