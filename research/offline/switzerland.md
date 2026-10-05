# Switzerland: offline / quiet industries pass

Date: 2026-10-05. Searches used: about 16 of the 40 budgeted. The search tool was cut off twice by usage limits, the second time for good. Following the instructions ("if a search is refused, stop and write up what you have"), this report covers only what was verified before the cutoff. Queries were mostly in German. WebFetch was not used, so every claim rests on search-result snippets of official or association pages. Anything not cross-checked is marked "unverified" or "estimate".

Context from the main country report (`research/countries/switzerland.md`) still applies. Switzerland is well digitised, and federal offices and associations often ship free portals or standard interfaces quickly. That pattern showed up again here: weapons dealers, livestock traders and household employers all already have an official channel or a dominant service.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Heating service firms, chimney sweeps, wood-heating measurers (Feuerungskontrolle) | LRV emission measurement of oil, gas and wood heating. The report goes to the commune's official Feuerungskontrolleur, often with a paid vignette. Aargau directive from 1 Jan 2026 adds periodic measurement of wood central heating ≤70 kW every 4 years, plus a commissioning measurement | Communes ask for the "Rapport, Messstreifen und Russfilter" to arrive physically by a date. Vignette of about CHF 43 per report. Each commune has its own Reglement | Around 2,100 communes, each with its own control (FSO commune count, approximate). Number of service firms unverified | **Opportunity (weak–moderate)** | "One job, many receiving authorities" pattern. But BL and SO have central FEKO databases, Kaminfeger software (Feukolino, Winfeger, Genesis) feeds them, and the fossil base is shrinking |
| Geothermal-probe (Erdwärmesonden) drilling firms | Notify canton, commune and geology office at least 5 days before drilling. Afterwards, file the drilling documentation, geological profile and as-built plan, using canton-specific (often Word) forms | LU form is a Word download. Rules differ by canton (FWS 2017 overview of cantonal procedures) | 4.2 million drilling metres in 2025 (FWS). Firms: FWS quality-seal list (count not extracted, estimate a few dozen) | **Opportunity (weak)** | Per-job and growing, but there are few buyers and the geology office often does the paperwork |
| Commercial buyers of old precious metals (Altgold-Ankäufer) | Registration or authorisation with the Central Office for Precious Metals Control since 2023/24. Identify the seller, check origin, document every purchase, report suspicion | Zurich inspection (Feb 2026): violations at 10 of 14 dealers, including documentation, missing permits and uncalibrated scales | About 360 registered or authorised buyers (BAZG, via search snippet) | **Opportunity (weak)** | Enforced, documented pain, but a tiny market |
| Weapons dealers | Electronic report of every transaction to the cantonal weapons office within 30 days. The paper Waffenhandelsbuch was abolished at the end of 2021 | Was paper until 2021, now digital | About 250 retailers use Guichet Unique (Bedag) | Reject | Guichet Unique national platform, plus dealer software (comp-sys) |
| Livestock traders (Viehhändler) | Cantonal Viehhandelspatent (3 years), accompanying document for each transport, TVD movement reports, records checked by the cantonal vet | Some accompanying documents are still on paper | Count not found | Reject | eTransit electronic accompanying document (Identitas/BLW) with web services for accredited vendors. ATV-Viehhandel trade software |
| Households employing domestic workers | AHV from the first franc, NAV Hauswirtschaft minimum wage, annual wage declaration to the compensation office | Paper registration forms at compensation offices (e.g. SVA BL PDF) | Not counted | Reject | Quitt, the cantonal Chèque service (GE/VD) and Fairboss already offer done-for-you service |
| Winemakers and wine traders | Kellerbuch, Weinhandelskontrolle forms A/B, self-cellaring growers' Kellerblatt | Annual Formular B is posted to firms | Not counted | Reject | vinoo and CH-Vinarius generate the official forms. Bundesrat report (Nov 2025) on simplifying wine control lowers the burden further |
| Beekeepers | Apiary registration, Bieneninspektor checks, moves | Not verified (search refused) | — | Not screened | Search budget cut off |
| Tattoo and piercing studios | Cantonal food-law inspection of inks and hygiene | Not verified | — | Not screened | Search budget cut off |
| Cemeteries and monument makers | Communal grave-monument permits | Not verified | — | Not screened | Search budget cut off |
| Taxi and limousine operators | Cantonal licences (e.g. GE LTVTC), ARV driving-time records | Not verified | — | Not screened | Search budget cut off |
| Professional lake fishermen, game dealers | Cantonal catch statistics, game-meat inspection | Not verified | — | Not screened | Search budget cut off. Likely too small anyway (estimate) |

Country-specific groups found through registers (beyond the seed list): Feuerungskontrolle, Erdwärmesonden drillers, precious-metal Ankäufer, weapons dealers, wine Kellerbuch.

## 2. Strongest opportunities

### Opportunity: Feuerungskontrolle report router for heating service firms

**Industry:**
Heating service firms (oil/gas burner service), measurement-authorised chimney sweeps, and wood-heating measurers in cantons with a liberalised model

**Buyer:**
Owner or office manager of a small heating-service or Kaminfeger business that measures systems in many communes

**Trigger / Why now:**
Aargau's new directive on controlling oil, gas and wood heating takes effect on 1 Jan 2026. It introduces periodic measurement of wood central heating ≤70 kW every 4 years and a commissioning measurement (CO plus dust) by qualified specialists. Communes keep collecting and managing the reports. Other cantons revise their communal Reglemente regularly (e.g. Füllinsdorf 2023, Seltisberg 2025).

**Current workflow:**
1. The technician measures with a type-tested analyser that prints a measurement strip.
2. The firm fills in the commune's or canton's report form (e.g. GR forms LW001d/LW003d) and buys or attaches a vignette (about CHF 43 per report in some BL communes).
3. The firm sends the report, the strip and, for oil, the soot filter to that commune's official Feuerungskontrolleur by a deadline (e.g. 16 Apr 2026 in one commune).
4. The Feuerungskontrolleur validates the report and enters it into the communal or cantonal database (FEKO in BL/SO, or Kaminfeger software).
5. The commune charges the firm or the owner an administration fee. Missing reports trigger an official re-measurement.

**Pain:**
Every commune has its own Reglement, deadline, fee and vignette. A firm serving 30 communes runs 30 slightly different paper channels. The physical items (strip, filter) prevent a pure e-mail workflow. Evidence of the pain is indirect (forms and Reglemente). No operator complaints were found, which is typical for a quiet industry.

**Existing solutions:**
- BL: central FEKO database with an interface for authorised service firms (Lufthygieneamt beider Basel). SO uses a FEKO system too.
- Kaminfeger and Feuerungskontrolleur software with FEKO interfaces: Genesis, Winfeger, Feukolino (per an SO presentation).
- Service firms' own ERP or field-service software (not checked) and the analyser vendor's printouts.
- Paper forms and vignettes from each commune.

**Offline evidence:**
Communes still require original signatures (Binningen "Originalunterschrift" form), physical strips and soot filters, and paid paper vignettes. Report forms are PDF and Word downloads on commune and cantonal sites. No SaaS review listings were found for the service-firm side.

**Offline channel:**
suissetec regional sections and the Kaminfeger Schweiz association (names verified, partnership interest not), cantonal lists of measurement-authorised firms (e.g. BL authorises firms for data entry), analyser suppliers' calibration services (testo/Wöhler-type service points, unverified), and phone outreach to firms named on commune Feuerungskontrolle pages.

**Market count:**
About 2,100 communes act as receiving bodies (FSO, approximate). The number of service firms and measurers is not counted (unverified).

**The gap:**
The receiving side has software (Feukolino/Winfeger/FEKO), but nothing was found that lets a *service firm* take one measurement and output the right per-commune package (form variant, deadline, vignette tracking, fee reconciliation, re-measurement reminders). This is unverified: firm ERPs may already do part of it.

**Possible product:**
A field app or upload that takes the analyser result and system data and produces each commune's required form, tracks vignettes and deadlines per commune, and exports to FEKO where an interface exists.

**MVP:**
Aargau only. A rules table for its roughly 200 communes (deadlines, form, fee). A PDF generator from manually typed or CSV-imported analyser values. A deadline dashboard.

**Pricing hypothesis:**
CHF 40–100 per month per firm, or CHF 1–2 per report. Willingness to pay is for software only if it saves office time. Small firms may rather pay a bureau, so a done-for-you option may be needed.

**How to find first customers:**
Commune Feuerungskontrolle pages that name the authorised service firms. The cantonal BL list of firms authorised for FEKO data entry. suissetec section events.

**Risks:**
The fossil-heating base is shrinking fast (heat-pump replacement), so the market declines over time. Cantons may centralise into FEKO-style databases. Kaminfeger software vendors could add a service-firm module. DE/FR/IT split.

**Kill condition:**
Interviews show that service firms just hand everything to the commune's Feuerungskontrolleur and spend under 1 hour a month on it, or their ERP already prints the communal forms.

**Founder access:**
A non-local founder would struggle. It needs German-speaking phone outreach and commune-by-commune rules research. A local partner (an ex-Feuerungskontrolleur) would help.

**Score:** 4/10

**Sources:**
- https://www.ag.ch/de/themen/umwelt-natur/licht-luft-strahlung/luft/feuerungen-und-heizungen/feuerungskontrolle/feuerungskontrollen-durch-gemeinden/holzfeuerungen-mit-feuerungswaermeleistungen-70-kw-(ohne-restholzfeuerungen)
- https://www.kuenten.ch/services/aktuelles.html/283/news/933
- https://kanton.baselland.ch/bau-und-umweltschutzdirektion/lufthygiene/lufthygiene/feuerungskontrolle-gemeinden-bl
- https://so.ch/fileadmin/internet/bjd/bjd-afu/pdf/luft/praesentation_Infoveranstaltung_feuko_18.pdf
- https://www.binningen.ch/public/upload/assets/10497/20230821_%C3%96lfeuerungskontrolle_Originalunterschrift-2-.pdf?fp=3
- https://www.reinach-bl.ch/de/services/abfall-und-umwelt/feuerungskontrolle.php
- https://www.gr.ch/DE/institutionen/verwaltung/ekud/anu/ANU_Dokumente/LW001d_Kontrolle_GasOel_bis1000kW.pdf
- https://www.zh.ch/de/planen-bauen/bauvorschriften/bauvorschriften-luftreinhaltung/feuerungsanlagen/feuerungskontrolle.html

### Opportunity: Erdwärmesonden drilling-notification and documentation pack

**Industry:**
Geothermal-probe drilling firms

**Buyer:**
Office or project manager of a drilling firm, often on the FWS quality-seal list

**Trigger / Why now:**
Strong market growth: about 4.2 million drilling metres in 2025, against about 2.5 million a year around 2018 (FWS). This is driven by heat-pump replacement of fossil heating.

**Current workflow:**
1. The owner or installer obtains a cantonal permit (forms differ by canton, e.g. ZH AWEL form 400-003, TG, SO).
2. The driller notifies the canton (Amt für Umwelt), the commune's building authority and the geology office at least 5 days before drilling (SO/TG-type condition).
3. After drilling, the driller or the geologist delivers the drilling documentation and the geological profile (BE: one profile per installation, unsolicited) and an as-built plan within one month (BE).
4. The LU-type Meldeformular (Word) goes to the cantonal service after commissioning.

**Pain:**
There are 26 procedures, each with several recipients, and they repeat for every job. Missing documentation can hold up acceptance (inferred, unverified). No complaints were found.

**Existing solutions:**
Cantonal Word/PDF forms, geology offices that prepare profiles, the FWS overview of cantonal procedures, drilling firms' own office staff. No dedicated software was found (not deeply checked).

**Offline evidence:**
Word-form downloads (LU), e-mail or post submission, no SaaS listings found.

**Offline channel:**
The FWS quality-seal list (public PDF, updated July 2026) and FWS events. Geology offices that work with drillers.

**Market count:**
Drilling firms: a few dozen on the FWS list (estimate, list not counted). Jobs: 4.2 million m in 2025 (FWS), probably on the order of 10,000+ boreholes a year (estimate).

**The gap:**
One job record → canton + commune + geologist notifications and the post-drilling package in each canton's format.

**Possible product:**
A job sheet that generates every canton-specific notification and closing document and tracks what has been sent to whom.

**MVP:**
Templates for ZH, BE, LU, AG and SO, plus e-mail sending and a checklist per job.

**Pricing hypothesis:**
CHF 150–300 per month per firm. Only a few dozen buyers, so at best a small business.

**How to find first customers:**
FWS quality-seal list. Phone calls in German or French.

**Risks:**
Too few buyers. Geologists may own the paperwork. Cantons may move to e-permit portals (e.g. eBau).

**Kill condition:**
Fewer than about 40 active firms, or drillers say the geologist handles all filings.

**Founder access:**
Needs a local (German/French speaker). Hard for a non-local.

**Score:** 3/10

**Sources:**
- https://www.fws.ch/wp-content/uploads/2018/06/Bewilligungsverfahren_EWS.pdf
- https://www.fws.ch/wp-content/uploads/2026/06/20260611_MM_EWS-Markt-GS.pdf
- https://www.fws.ch/wp-content/uploads/2026/07/072026_FWS_GSP_Guetesiegelliste_D_F.pdf
- https://uwe.lu.ch/-/media/UWE/Dokumente/formulare/grundwasser_erdwaermesonde_meldeformular_word.pdf?dl=1&rev=6dd41cc13e1045228684350f0be8c564
- https://www.bvd.be.ch/content/dam/bvd/dokumente/de/awa/wasser/gew%C3%A4sserschutz/erdw%C3%A4rme/allgemeine-bedingungen-auflagen-und-hinweise-fuer-erstellung-und-betrieb-erdwaermesondenanlagen.pdf
- https://so.ch/verwaltung/bau-und-justizdepartement/amt-fuer-umwelt/boden-untergrund-geologie/erdwaermegeothermie/erdwaermesonden-ews/
- https://umwelt.tg.ch/gewaesserqualitaet-und-nutzung/waerme-aus-der-umwelt/untiefe-geothermie/bewilligungsverfahren.html/12583
- https://www.zh.ch/content/dam/zhweb/bilder-dokumente/themen/planen-bauen/bauvorschriften/energienutzung-aus-untergrund-und-wasser/gesuch_erdsonden.pdf

### Opportunity: Purchase register for precious-metal (Altgold) buyers

**Industry:**
Gold buyers, jewellers and coin dealers buying old precious metal (Schmelzgut)

**Buyer:**
Owner of a small registered Ankäufer business

**Trigger / Why now:**
Under the revised Precious Metals Control Act, registration has applied since 1 Jan 2023 and all buyers needed registration or authorisation by 1 Jan 2024. PREZIUS (BAZG's digital application) has been live since May 2024. A Zurich police and precious-metals-control check (Feb 2026) found violations at 10 of 14 dealers, including due-diligence and documentation failures, missing permits and uncalibrated scales.

**Current workflow:**
1. The customer brings gold. The buyer checks ID and copies it.
2. The buyer weighs and tests the gold and asks about its origin.
3. The buyer records name, address, ID, items and price in a book, a spreadsheet or POS notes (form unverified).
4. Records are kept for inspection, and suspicious cases are reported (MROS).

**Pain:**
Enforced. 10 of 14 inspected dealers had violations (Zurich, 2026).

**Existing solutions:**
BAZG Directive R-243 and PREZIUS (registration side), generic POS and jeweller software (not checked), paper purchase books, AML consultants and SROs.

**Offline evidence:**
Counter business. Many buyers are small shops with minimal web presence. The inspection findings point to paper-based or missing records.

**Offline channel:**
BAZG's public register or list of registered buyers (if published, unverified), jewellers' association (VSGU, unverified), coin dealers' fairs.

**Market count:**
About 360 registered or authorised buyers (BAZG figure via search snippet).

**The gap:**
A purchase register that is compliant by design: ID capture, an origin question, scale-calibration date, a suspicious-pattern flag and an inspection export.

**Possible product:**
A tablet purchase log with ID scan and an R-243 checklist.

**MVP:**
A web form plus PDF/CSV export that matches the R-243 documentation fields.

**Pricing hypothesis:**
CHF 30–60 per month. Total market at most about CHF 250k a year, so too small to be more than a side product.

**How to find first customers:**
Registered-buyer list, walk-ins in city centres, jewellers' associations.

**Risks:**
Tiny market. Jeweller POS vendors can add it. AML liability.

**Kill condition:**
Common jeweller POS systems already include an Ankauf register that satisfies R-243.

**Founder access:**
Possible for a non-local in German or French, but walk-in sales favour a local.

**Score:** 3/10

**Sources:**
- https://www.bazg.admin.ch/de/gewerbsmaessiger-ankauf-von-altedelmetallen
- https://pestalozzilaw.com/de/insights/aktuell/legal-insights/revidiertes-edelmetallkontrollgesetz-neue-registrierungs-und-bewilligungspflichten-fur-ankaufer-von-altedelmetallen/
- https://www.bazg.admin.ch/dam/bazg/de/dokumente/verfahren-betrieb/Edelmetallkontrolle/R-243_D_V10.pdf.download.pdf/R-243_D_V10.pdf
- https://www.polizeinews.ch/2026/02/05/zuerich-zh-kontrollen-bei-edelmetallhaendlern-bei-zehn-betrieben-verstoesse-entdeckt/
- https://muula.ch/aktuell/neue-regulierungskeule-ab-januar-bei-edelmetallen-altgold-schmelze-fabrikabfaelle-bazg-registrierung-geldwaescherei-dokumentation-handelsregister-bewilligung-aufsicht/

## 3. Rejected

- **Weapons-dealer transaction reporting.** The paper Waffenhandelsbuch ended on 31 Dec 2021. About 250 retailers report electronically through Guichet Unique (Bedag), and dealer software exists (comp-sys). Sources: https://www.bedag.ch/de/aktuelles/meldungen/Guichet-Unique-nationale-Meldeplattform-fuer-Waffentransaktionen.php, https://comp-sys.ch/waffenhaendler/
- **Livestock-trader accompanying documents and TVD.** Identitas runs eTransit (electronic accompanying documents) with web services for accredited software vendors, and ATV-Viehhandel exists. Sources: https://www.bk.admin.ch/dam/bk/de/dokumente/dti/eservices/technische_servicebeschreibung_accompanyingdocument.pdf.download.pdf/technische_servicebeschreibung_accompanyingdocument.pdf, https://www.blv.admin.ch/blv/de/home/tiere/transport-und-handel/viehhandel.html
- **Household employers (domestic workers).** Quitt ("Cheque Emploi Service" covering registration, contracts and social insurance), the cantonal Chèque service and Fairboss already offer done-for-you service. Compensation offices offer simplified procedures. Sources: https://quitt.ch/en/, https://www.ahv-iv.ch/p/2.06.d, https://www.fairboss.ch/haushaltshilfe-anstellen/lohnempfehlungen
- **Wine Kellerbuch and Weinhandelskontrolle.** vinoo and CH-Vinarius produce forms A/B. The Bundesrat's Nov 2025 report points toward simplification for self-cellaring growers, which reduces the burden. Sources: https://www.vinoo.ch/, https://www.ch-vinarius.ch/, https://www.parlament.ch/centers/eparl/curia/2021/20214446/Bericht%20BR%20D.pdf

## 4. Method notes

- What worked: German queries naming the regulator's own terms (Feuerungskontrolle, Ankäufer Altedelmetalle, Viehhandelspatent, Meldeformular Erdwärmesonde) surfaced commune and canton PDFs that show paper workflows directly (vignettes, original signatures, Word forms). Association lists (FWS quality seal) and enforcement news (polizeinews.ch) gave counts and proof of enforcement.
- What didn't work: queries for operator counts rarely returned numbers.
- Lesson: in Switzerland the federal level is usually already digital (Guichet Unique, eTransit, PREZIUS, Quitt). The remaining offline friction sits at **commune** level (Feuerungskontrolle) and in cantonal environmental filings.
- Not done: beekeepers, tattoo studios, cemeteries, taxis, fishermen, pawnbrokers and scrap dealers were not screened, because the search tool hit a usage limit after about 16 searches.
