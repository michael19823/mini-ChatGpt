# Austria: country research (deep pass, as of 2026-10-05)

Method note: deep pass with about 50 web searches, mostly in German. WebFetch was unavailable, so the evidence comes from search-result summaries, not full-page reads. Austria is accessible to a foreign solo founder: EU member, SEPA/Stripe, no sanctions, GDPR applies. Overall conclusion: Austria is a small (9 million people), high-trust market with dense vertical software and many free government or chamber (WKO) tools. The few real gaps come from **Bundesland-level fragmentation** (nine provinces, each with its own databases and rules) and from **cross-border obligations** (posting workers to Austria). No idea reaches the "build" bar. The best is worth customer interviews. Anything not confirmed in a source is marked "unverified" or "estimate".

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Heating/HVAC installers and refrigeration technicians | Entering inspections and installations into Land heating/AC databases (NÖ since 2022, OÖ since 1 May 2026, Tirol THKDBV 2026, Salzburg, Steiermark, Burgenland) | **Candidate (best)** | New 2026 triggers and 6+ separate Land systems. Chimney-sweep software already integrates, but the installer side is unclear |
| Foreign construction/installation SMEs posting workers to Austria | ZKO3 notification per posting, Austrian collective-agreement (KV) wage check, German-language payroll pack on site (LSD-BG) | Candidate | High fines (up to EUR 20k per breach) and every posting repeats the work. The EU e-declaration (deal 23 Jun 2026) will commoditise the notification part |
| Demolition / asbestos / roofing | Authorised-employer list (GKV 2025 §26), per-project notification to the Labour Inspectorate | Weak candidate | Real 2026 trigger, but small niche, email/PDF forms and low frequency |
| Farmers / pesticide users | Electronic, machine-readable pesticide (PSM) records mandatory from 1 Jan 2027 (EU 2023/564 as amended by 2025/2203; Länder laws) | Too competitive (likely) | Farm-record apps and chamber tools exist (names unverified); many farmers are low-ARPU |
| Waste collectors/treaters | EDM: e-Begleitschein, annual waste balance XML, Green List/DIWASS | Rejected | Free eADok tool (oekobits with Land Salzburg), VEBSV 2.0, public XML interfaces already used by vendors |
| Beverage producers/retailers | Single-use deposit (Recycling Pfand Österreich, since 1 Jan 2025): product registration, producer fees, return settlement | Rejected | Central EWP portal handles registration and settlement. Already 21 months old, so the "why now" has passed |
| 24-hour care agencies | Carer rotations, trade registrations, SVS, subsidy forms | Too competitive | Betreuungsplaner, CareOrganise, HerzensManagement |
| Private childcare operators | Monthly attendance/subsidy proof to MA 10 (Vienna) and other Länder | Too competitive | T1M Kids, HOKITA, OKIDS, KigaSoft, KigaWeb |
| Renewable energy communities (EEG/BEG) | EDA data, member billing | Too competitive | neoom KLUUB, enox share and others |
| NIS2 entities (~4,000) | NISG 2026 registration by 31 Dec 2026, self-declaration by 30 Sep 2027 | Too competitive | Big-4 and many GRC/compliance vendors |
| Property managers / landlords | MieWeG rent-indexation caps from 1 Jan 2026 (adjustment only on 1 April) | Rejected | Annual. Free WKO MieWeG calculator, and property-management software updates |
| Construction general contractors | BUAK site database, BauID, HFU list (contractor liability) | Rejected | Government-run systems (BUAK will run BauID itself under BGBl I 2026/66) leave little room |
| Accommodation / private room renters | Guest register, local-tax (Ortstaxe) monthly declarations | Rejected | feratel dominates (89% of registrations digital). EU short-term-rental registration not adopted by any Land at the 20 May 2026 start |
| Pharmacies | Narcotics (Suchtgift) e-prescription and records | Rejected | Handled inside dominant pharmacy software (AVS/Apoverlag) |
| Veterinary | Annual antibiotic dispensing upload to AGES eService (Mengenströme-VO) | Rejected | Annual. Recognised reporting bodies (Meldestellen) and practice software already do it |
| Funeral homes (~550) | Death registration via Standesamt | Rejected | Small market. The Standesamt does the registry entry, and no EDRS-style duplicate entry was found |
| Forestry / sawmills | EUDR due-diligence statements | Rejected | Low-risk-country simplified regime (micro/small operators by 30 Jun 2027), crowded EUDR vendor market |
| Collective catering | Mandatory origin labelling for meat, milk and eggs (since 1 Sep 2023) | Rejected | Old trigger, recipe/menu software covers it, extension to all gastronomy not adopted |
| B2G/B2B e-invoicing | e-Rechnung.gv.at / Peppol; no national B2B mandate (ViDA only from 1 Jul 2030 for intra-EU sales) | Rejected | Free federal portal, every accounting package, no mandate |
| F-gas (refrigeration) logbooks | EU 2024/573 leak checks and logbooks | Rejected | DACH logbook tools exist (VDKF-LEC; Austrian-specific tools unverified) |

## Opportunities

### Opportunity: Multi-Land heating/AC database submitter for installers and refrigeration technicians

**Industry:**  
Heating, plumbing and HVAC installers (Installateure / SHK), refrigeration and air-conditioning technicians (Kältetechniker)

**Buyer:**  
Owner or office manager of a small to medium installer firm (2–50 staff) that installs or services boilers, heat pumps and AC units. They are registered as "authorised inspectors" (Prüfberechtigte) in one or more Länder.

**Trigger / Why now:**  
Austria's nine provinces run their own heating (and in some cases AC) databases, each with its own law, operator and workflow:
- Niederösterreich's Anlagendatenbank has run since 1 Jul 2022.
- Oberösterreich's Heizungs- und Klimaanlagendatenbank started on 1 May 2026 (LGBl 36/2026, Oö. HKDV). It covers space heating and hot water.
- Tirol issued a new database ordinance in 2026 (THKDBV 2026, under TGHKG 2013 §35). Both chimney sweeps and installers must register heating *and* AC systems.
- Salzburg (gizmocraft-built "Heizungs-Datenbank"), Steiermark (Heizungsdatenbank under the Feuerungsanlagengesetz) and Burgenland run their own systems.

Every installation and every periodic inspection must be entered. Systems get a QR/ID sticker.

**Current workflow:**  
1. The technician does the job and the flue-gas measurement (Wöhler/testo device), then fills in a paper or app service report.
2. Back in the office, someone logs into the relevant Land web portal (in OÖ via the USP business service portal), finds or creates the system, and re-types the system data sheet and measurement values.
3. A firm near a provincial border repeats this in a second or third portal with different fields and logins.
4. Separately, the same job feeds the customer invoice and, for fuel switches, the federal subsidy paperwork (Sanierungsoffensive, run by KPC) plus Land/municipal subsidy forms.

**Pain:**  
The Land sites say chimney sweeps can push data "directly via a digital interface using common chimney-sweep software". The installer side is mostly described as web entry, so a laptop is needed on site or in the office. WKO SHK sections publish step-by-step guides for installers (Steiermark guide, OÖ info page), which signals friction. WKO also reports that 70.9% of trade businesses say bureaucracy grew in the last 3 years. Direct installer complaints about double entry were **not found** (unverified pain).

**Existing solutions:**  
- WinChim/AppChim (chimney-sweep software with Burgenland HDB transfer).
- gizmocraft (builds the Salzburg database and ZEUS energy-certificate databases, with interfaces to chimney-sweep software).
- Wöhler devices with QR transfer into chimney-sweep district programs.
- Generic SHK software (Taifun, IN-Software and others; Austrian-Land database interfaces unverified).
- Manual web entry.

**The gap:**  
Unverified but plausible: installer and refrigeration service software (often German) may lack Austrian Land-database interfaces. No product found that takes one service record and files it to *whichever* of the 6+ Land databases applies, also covering AC systems (Tirol) and the new OÖ portal.

**Possible product:**  
A service-report app for installers. The technician captures the job once (system data, flue-gas values imported from the measurement device, photos). The app routes it to the right Land database via interface or browser automation, keeps the system's ID/QR history, and produces the customer report and subsidy evidence pack.

**MVP:**  
OÖ + NÖ only: a mobile form, a measurement-value import (CSV/QR from Wöhler/testo) and submission to both databases, using the official interface where installers can use it, otherwise a structured "copy assistant".

**Pricing hypothesis:**  
EUR 39–99/month per firm, or EUR 2–4 per submitted report (estimate).

**How to find first customers:**  
WKO firm directory (firmen.wko.at) filtered by Sanitär-Heizung-Lüftung trade per Land. Land lists of authorised inspectors (Steiermark keeps an expert list under §27 FAnlG; others unverified). WKO Landesinnungen SHK newsletters and training (klimaaktiv heating-check courses).

**Risks:**  
- Interface access for non-chimney-sweep software may be restricted or need certification per Land.
- Chimney sweeps may do most periodic inspections, leaving installers only installation entries (lower frequency).
- Established SHK vendors could add the interfaces.
- The installer market is small: roughly 6,000–7,000 SHK firms nationally (estimate, unverified).

**Kill condition:**  
Customer interviews show installers enter fewer than ~10 records/month, or the 2–3 largest Austrian SHK software vendors already push to the NÖ/OÖ/Tirol databases.

**Score:** 5/10

**Sources:**  
- https://www.land-oberoesterreich.gv.at/anlagendatenbank.htm
- https://www.wko.at/ooe/gewerbe-handwerk/sanitaer-heizung-lueftung/heizungsanlagendatenbank-ooe
- https://www.wko.at/ooe/umwelt/heizungs--und-klimaanlagendatenbankverordnung-1-mai
- https://gesetzefinden.at/landesrecht/verordnungen/oo-hkdv
- https://ooe.anlagendatenbank.net/info/USP
- https://www.energie-noe.at/anlagendatenbank
- https://gesetzefinden.at/landesrecht/verordnungen/thkdbv-2026
- https://www.tirol.gv.at/sicherheit/geoinformation/emissionskataster/heizungs-und-klimaanlagendatenbank-tirol/
- https://www.salzburg.gv.at/themen/umwelt/heizungsanlagen/heizungsanlagen-datenbank
- https://www.ea-stmk.at/eag/steirische-heizungsdatenbank/
- https://www.wko.at/stmk/gewerbe-handwerk/sanitaer-heizung-lueftung/2-leitfaden-fanlg-vo-hdb-installateur-voek.pdf
- https://www.winchim.com/files/Inhalte/Demo-Downloads/Anleitung_HDB_Bgld.pdf
- https://gizmocraft.com/de/work/heizanlagen/
- https://www.wko.at/gewerbe-handwerk/sanitaer-heizung-lueftung/installateurinnen-fordern-buerokratie-stopp
- https://www.bmluk.gv.at/service/presse/klima-umwelt/2026/sanierungsoffensive-2026-alle-foerdermittel-abgeholt.html

### Opportunity: "Posting to Austria" compliance pack for foreign trade SMEs

**Industry:**  
Construction, installation, assembly and building-trade SMEs based in Slovenia, Hungary, Czechia, Slovakia, Croatia, Germany and Italy (South Tyrol) that do jobs in Austria

**Buyer:**  
Owner or office/payroll manager of a foreign SME with 5–100 workers that regularly takes Austrian jobs, or the local accountant who serves them

**Trigger / Why now:**  
The LSD-BG requires, before each posting:
- an electronic ZKO3 notification to the BMF's central coordination office;
- A1 certificates;
- German-language payroll documents on site (contract, pay slips, time records, wage-classification proof);
- pay at least at the Austrian collective-agreement (KV) rate.

Fines run up to EUR 20,000 per breach (EUR 40,000 when repeated) and add up per employee. Austria is known for strict checks (EUR 1,000–10,000 if the A1 is missing). The EU agreed on 23 Jun 2026 on a single posted-worker e-declaration in IMI. It will eventually replace national forms like ZKO3, which **removes** the notification part but not the Austria-specific KV wage check and German payroll pack.

**Current workflow:**  
1. Office staff fill in the ZKO3 web form by hand for each posting and each change (new worker, new site, extended dates).
2. They apply for A1 certificates in the home country.
3. They look up the applicable Austrian KV and wage group, and compare home-country pay including allowances.
4. They produce German payroll documents (often translated by hand or by a consultant) and keep them on site or available electronically.
5. They track posting duration, changes and the documents for each worker and site.

**Pain:**  
High per-breach penalties. Chambers in Germany, South Tyrol and Slovenia publish long guides and checklists, which signals complexity. Consultants and lawyers (Arletti Partners, Brandauer, Team23Tax, Fuchshuber) sell this as a service. Volume: about 129,000 Hungarians worked in Austria in 2025 (not all posted). Number of ZKO3 filings per year is unverified.

**Existing solutions:**  
- Consultants and tax advisers in Austria and neighbouring countries.
- Enterprise mobility tools for large corporations (CIBT Assure for A1, Nomadic for posted-worker notifications, Big-4 tools).
- The free BMF web form.
- subauftrag.com guides.
- Soon, the EU IMI e-declaration.

**The gap:**  
No SME-priced tool was found that combines (a) Austrian KV wage-group minimum-pay check for a home-country payroll, (b) generation of German-language payroll documents for the site, and (c) per-site/per-worker document tracking. Enterprise tools target travelling office staff of large firms, not trades crews.

**Possible product:**  
A web app where a foreign SME enters a crew and an Austrian job. It pre-fills the ZKO3 (later the EU e-declaration), checks pay against the relevant KV wage table, and generates a German "site folder" (Lohnunterlagen) per worker as a PDF or QR-linked web folder for Finanzpolizei checks.

**MVP:**  
One sector (construction KV, Bauindustrie/Baugewerbe) and one sending country language (Slovenian or Hungarian): crew list, KV minimum-wage check, German payroll document templates, posting-period tracker.

**Pricing hypothesis:**  
EUR 49–149/month, or EUR 15–30 per posted worker per posting (estimate).

**How to find first customers:**  
Chambers and trade associations in neighbouring countries (GZS/OZS Slovenia, Hungarian chambers, Bavarian/BW Handwerkskammern, lvh South Tyrol) that already publish Austria posting guides. Accountants in border regions. Austrian general contractors who must collect these documents from foreign subcontractors.

**Risks:**  
- The EU e-declaration will commoditise the notification part (date of application unverified, probably 2027–2028).
- KV wage tables change yearly and need careful maintenance (legal liability).
- Buyers are foreign SMEs in several languages, which makes distribution harder.
- Consultants bundle this with payroll.

**Kill condition:**  
Interviews show crews are mostly covered by consultants at flat fees under ~EUR 50/posting, or Austrian/neighbour-country payroll packages (e.g. Slovenian/Hungarian payroll vendors) already produce Austrian KV-compliant German Lohnunterlagen.

**Score:** 4/10

**Sources:**  
- https://www.usp.gv.at/themen/mitarbeiter-und-gesundheit/entgelt/massnahmen-gegen-lohn-und-sozialdumping.html
- https://www.bmf.gv.at/themen/betrugsbekaempfung/zentrale-koordinationsstelle.html
- https://brandauer-rechtsanwaelte.at/2026/06/03/lohn-sozialdumping-lsd-bg-entsendung-oesterreich/
- https://www.team23tax.at/entsendungen-nach-oesterreich-2026-pflichten-und-bescheinigung/
- https://www.subauftrag.com/was-muss-bei-der-entsendung-von-mitarbeitern-nach-oesterreich-beachtet-werden/
- https://www.consilium.europa.eu/de/press/press-releases/2026/06/23/council-and-parliament-agree-on-digital-declaration-system-for-posted-workers/
- https://www.grantthornton.at/en/insights/blogs/2022/a1-checks-within-the-eu-and-new-software-for-work-postings/
- https://cibtvisas.com/blog/introducing-cibt-assure
- https://szerkbiz.kisuzem.telex.hu/english/2026/01/26/last-year-nearly-130-000-hungarians-worked-in-austria

### Opportunity: Asbestos authorisation and per-project notification tracker

**Industry:**  
Demolition, asbestos remediation, roofing, sheet-metal and timber construction (Abbruch, Dachdecker, Spengler, Holzbau)

**Buyer:**  
Owner or safety officer of a small trade firm that removes asbestos-cement (weakly or strongly bound asbestos)

**Trigger / Why now:**  
Grenzwerteverordnung 2025 (§26, in force 1 Jan 2026): only employers listed by the Central Labour Inspectorate may do asbestos work. The transition ran until 31 Mar 2026. The first notification must be filed at least 8 weeks before the first project, and every asbestos job must be notified in writing before work starts. Applications go **by email** using separate forms for strongly and weakly bound asbestos.

**Current workflow:**  
1. Download the WKO/ministry PDF form and fill in company data, project details and protective measures (exposure minimisation, dust control, decontamination, disposal).
2. Email it to the Labour Inspectorate.
3. Keep worker training, medical-exam and disposal evidence in folders or spreadsheets.
4. Repeat the project notification for each job.

**Pain:**  
A new obligation with PDF/email forms. WKO trade groups ran "secure your entry now" campaigns. No evidence of heavy volume or penalties was found.

**Existing solutions:**  
WKO PDF forms, safety consultants (Sicherheitsfachkräfte), generic construction and EHS software (not diligenced in depth).

**The gap:**  
Pre-filled per-project notification, a reusable protective-measures library and certificate expiry tracking. The gap is small.

**Possible product:**  
A form filler plus a per-job dossier (notification, worker list with valid training/medical exams, disposal proof).

**MVP:**  
Two notification templates, a worker certificate tracker and a dossier PDF export.

**Pricing hypothesis:**  
EUR 20–50/month (estimate).

**How to find first customers:**  
WKO Landesinnungen for Dachdecker/Spengler/Holzbau and the Arbeitsinspektorat's authorised-employer list (whether it is public is unverified).

**Risks:**  
Probably low hundreds to low thousands of firms (unverified). Low frequency for most firms. The ministry could add an online form.

**Kill condition:**  
Fewer than ~300 listed firms, or an online notification portal at the Labour Inspectorate.

**Score:** 3/10

**Sources:**  
- https://www.forum-media.at/arbeitssicherheit/Vorschriften/Grenzwerteverordnung-2025/4.-Abschnitt/26.-Ermaechtigte-Arbeitgeberinnen-und-Arbeitgeber-fuer-Abbruch-oder-Asbestsanierungsarbeiten
- https://www.forum-media.at/news/Arbeitssicherheit-Brandschutz/Grenzwerteverordnung-2025-die-Neuerungen-seit-01.01.2026
- https://www.wko.at/ooe/gewerbe-handwerk/bau/neue-meldepflicht-fuer-asbestarbeiten-ab-2026
- https://www.wko.at/stmk/news/jetzt-eintragung-fuer-asbestarbeit-sichern
- https://www.wko.at/oe/gewerbe-handwerk/holzbau/anmeldeformular-schwach-gebundener-asbest.pdf

## Rejected after competitor research

- **EDM / DIWASS waste reporting bridge** (scored 3/10 in the first pass): killed by the free **eADok** tool (oekobits with Land Salzburg), which already records waste, builds balances and transmits e-Begleitscheine. EDM also publishes open XML/webservice specifications (annual-balance upload interface v2.15, EBSM webservice, VEBSV 2.0) that waste ERP vendors use. Sources: https://www.bmluk.gv.at/themen/klima-und-umwelt/abfall-und-kreislaufwirtschaft/edm.html, https://test.umweltbundesamt.at/dataharmonisation/spec/index.html, https://www.usp.gv.at/themen/betrieb-und-umwelt/abfallrecht/weitere-informationen-abfallrecht/abfallsammlung-und-abfallbehandlung/gefaehrliche-abfaelle/begleitscheinmeldung.html
- **Single-use deposit (Pfand) admin for small beverage producers:** the central EWP Recycling Pfand Österreich portal handles product registration, producer fees and settlement (up to twice monthly), with a detailed producer handbook (v5, May 2026). Live since 1 Jan 2025, so the "why now" has passed. Sources: https://www.recycling-pfand.at/fuer-unternehmen.html, https://recycling-pfand.at/downloads/produzentenhandbuch-v5.pdf, https://www.cash.at/dienstleister-logistik/news/recycling-pfand-oesterreich-update-fuer-pfand-portal-33957
- **24-hour care agency admin:** Betreuungsplaner, CareOrganise and HerzensManagement already cover carers, trade registrations, SVS and billing. Sources: https://betreuungsplaner.at/, https://www.careorganise.com/, https://management.herzens.app/
- **Private kindergarten subsidy reporting:** T1M Kids (NÖ), HOKITA (Tirol/Salzburg, k5 export), OKIDS, KigaSoft and KigaWeb (Land subsidy billing). Sources: https://kids.t1m.at/, https://www.kufgem.at/hokita/, https://www.okids.at/, https://www.kigaweb.at/
- **Short-term rental registration / Ortstaxe:** no Bundesland adopted the EU STR registration at its 20 May 2026 start, and guest registration is dominated by feratel (89% digital). Sources: https://www.bmwet.gv.at/Themen/Tourismus/Tourismus-in-Oesterreich/Rechtliches/kurzzeitvermietung_str_vo.html, https://futurezone.at/amp/b2b/digitale-gaestemeldung-oesterreich-feratel-toursimus-markus-schroecksnadel/402487292
- **MieWeG rent-indexation:** an annual task with a free WKO calculator. Sources: https://www.wko.at/information-consulting/immobilien-vermoegenstreuhaender/immobilienrechner-mieweg-rechner, https://brandauer-rechtsanwaelte.at/2026/05/18/wertsicherung-mieweg-praxis-2026/
- **Construction site / worker ID compliance (BUAK):** BUAK runs the site database and, from BGBl I 2026/66, the BauID system itself (built by Tieto), with mandatory worker cards by 2029. Sources: https://www.wko.at/wirtschaftsrecht/meldepflicht-bauauftrag-baustellendatenbank, https://www.forvismazars.com/at/de/insights/newsletter/newsletter-oktober-2026/eckpunkte-der-buag-novelle-2026
- **Veterinary antibiotic reporting:** an annual upload to AGES eService via recognised reporting bodies. Source: https://www.ages.at/tier/tierarzneimittel-hormone/antibiotika-vertriebsmengen-in-der-veterinaermedizin
- **Pharmacy narcotics records:** e-prescription narcotics flags and records live inside the dominant pharmacy software (AVS). Source: https://avshandbuch.apoverlag.at/documents/341/AVS_SG-eRezept.pdf
- **B2G/B2B e-invoicing:** no national B2B mandate. ViDA intra-EU reporting starts only 1 Jul 2030. B2G is served by the free federal portal and all accounting packages. Sources: https://www.ey.com/de_at/insights/tax/e-rechnungspflicht, https://kpmg.com/at/de/insights/2026/03/vida-herausforderungen-und-chancen-in-der-umsatzsteuer.html
- **F-gas logbooks:** DACH certified-logbook tools exist (VDKF-LEC). Austrian-specific tools unverified. Source: https://www.diekaelte.de/sites/default/files/ulmer/file_175205.pdf
- **EUDR for Austrian forest owners/sawmills:** the simplified regime for micro/small operators in low-risk countries (deadline 30 Jun 2027) and a crowded EUDR tool market. Source: https://www.bakermckenzie.com/en/insight/publications/2026/05/eu-commission-publishes-simplification-review-of-eudr
- **Funeral homes:** about 550 firms. The Standesamt issues the death certificate and no duplicate-entry integration pain was found. Source: https://www.news.at/a/bestattung

## Attractive problem, poor distribution

- **Posting to Austria compliance** (above): the pain is in Austria, but the buyers sit in 5–7 neighbouring countries and languages, and the EU e-declaration will absorb part of it.
- **Small drinking-water suppliers (Wassergenossenschaften):** about 4,700 supply systems above 10 m³/day after the TWV amendment (BGBl II 57/2024). Risk assessment is mandatory for systems above 100 m³/day by 12 Jan 2029, and annual tests are required. These are volunteer-run cooperatives, so willingness to pay is likely low and labs/Land authorities do much of the reporting. Not diligenced further. Sources: https://www.ris.bka.gv.at/Dokumente/BgblAuth/BGBLA_2024_II_57/BGBLA_2024_II_57.html, https://www.verbrauchergesundheit.gv.at/dam/jcr:8e1daac1-87b6-40b6-bb19-093525142d3f/%C3%96sterreichischer%20Trinkwasserbericht%202024.pdf

## Too competitive

- **Energy-community (EEG) billing:** neoom KLUUB, enox share and others. Sources: https://a.storyblok.com/f/139490/x/dcef7c1e6f/produktinfo-enox_share-dezember-2025.pdf, https://www.energiesparhaus.at/forum-neoom-energiegemeinschaft-wer-ist-schon-dabei/75958_5
- **NISG 2026 (NIS2):** in force 1 Oct 2026, about 4,000 entities, registration by 31 Dec 2026. Consultancies and GRC tools are already selling. Sources: https://www.forvismazars.com/at/de/unsere-expertise/it-consulting/neue-registrierungsphase-fuer-nis2, https://kpmg.com/at/de/media/press-releases/2026/nisg-2026.html
- **Electronic pesticide records from 1 Jan 2027:** a real mandate (Länder plant-protection laws, EU 2023/564 as amended by 2025/2203; conversion allowed until 30 Jan of the following year before 2030). Farm-record apps and chamber tools exist (specific Austrian products such as farmdok not verified in this pass), and buyers are low-ARPU farms. Sources: https://www.wien.gv.at/recht/landesrecht-wien/begutachtung/pdf/2026003-05052026.pdf, https://noe-landtag.gv.at/fileadmin/gegenstaende/20/10/1056/1056_Motivenbericht.pdf
- **E-invoicing / Peppol access:** crowded. No mandate yet.

## Pass history

- **First pass (light, 4 searches):** two weak opportunities (asbestos tracker 3/10, EDM/DIWASS bridge 3/10). Several industries were unscreened.
- **This deep pass (about 50 searches, mostly German):**
  - Screened 20 industries.
  - Added the multi-Land heating/AC database opportunity (5/10), driven by the OÖ database start on 1 May 2026 and Tirol's THKDBV 2026.
  - Added the posting-to-Austria compliance pack (4/10) and flagged the EU e-declaration deal of 23 Jun 2026 as a threat.
  - Verified the asbestos rules: forms go by email and the first notification is due 8 weeks ahead. Kept at 3/10.
  - Rejected the EDM/DIWASS bridge after finding the free eADok tool and the open EDM interfaces.
  - Rejected or marked as too competitive: the deposit system, 24-hour care, childcare, energy communities, NIS2, short-term rentals, MieWeG, BUAK/BauID, veterinary, pharmacies, funeral homes, EUDR and pesticide records.
  - Confirmed there is no Austrian B2B e-invoicing mandate.
