# Germany: offline-industries pass (as of 2026-10-05)

Method: 39 WebSearch calls, mostly in German and aimed at regulators (state geological surveys, Zoll, municipal bylaws and forms, gesetze-im-internet, Bundestag and lobby-register entries, Destatis). No WebFetch. Every fact comes from search-result summaries. Anything not confirmed in those summaries is marked "unverified" or "estimate". This pass does not repeat the opportunities in `research/countries/germany.md` (asbestos, PPWR, non-farm pesticides, grease separators).

Overall conclusion: Germany's quiet industries are well documented by regulators. But the same pattern from the country report holds here too. In most of them a specialist vendor, an association tool or a free state portal already exists (DiWa for small sewage plants, Agrabiz for livestock traders, Rechnova for gaming-machine operators, Haushaltsscheck for household employers, certified NWR software for gun dealers). The one clean 2027 trigger is **small fruit distillers (Abfindungsbrenner) and their "Stoffbesitzer" customers**: from 2027-01-01, distillation notices must be filed through the Zoll-Portal only. The other candidates are small, fragmented "one dossier, many municipalities" workflows. None of them scores above 4/10.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Small fruit distillers (Abfindungsbrenner) and Stoffbesitzer | Abfindungsanmeldung (forms 1219/1220/1221) to HZA Stuttgart at least 5 working days before each run; **Zoll-Portal mandatory from 2027-01-01** | Paper forms still allowed today; associations run "form service" pages; elderly orchard owners must now get ELSTER or eID themselves | ~25,000–29,000 distilleries, ~19,000 in BW (2017/18); 100k–200k Stoffbesitzer a year (kleinbrennerei.de, kleinbrennerverband.de) | **Candidate (best)** | Hard 2027 trigger, a very old and offline population, dense association channel. But there is no API and willingness to pay is low |
| Showmen (Schausteller) | Application dossier per festival (Reisegewerbekarte, photos, insurance, Prüfbuch); notice of each set-up of a fliegender Bau to the local building authority ≥1 week ahead; Gebrauchsabnahme entered in the Prüfbuch | Every town has its own PDF form or portal; the Prüfbuch is a physical book | ~5,000–5,600 businesses; DSB has 4,399 members (31.12.2024) | Candidate | "One dossier, many municipalities". Organisers are digitising (Marktmeister Pro), operators are not |
| Ground-source (geothermal) borehole drillers | §49 WHG notice to the lower water authority 1 month ahead; GeolDG notice to the state geological survey 2 weeks ahead, then data within 3 months (6 for evaluations), in state-specific formats (e.g. SEP 3 in NI) | State-by-state PDF forms and handbooks; free GeODin-Shuttle; some state portals (AGU in SH) | ~318,000 ground-source systems installed; number of DVGW W120-2 firms **unverified** (estimate: a few hundred) | Candidate (weak) | Real multi-authority fragmentation, but the GeoBG (in force 2026-01-01) *removes* steps, and BoreDoc/Bohr2000 exist |
| Monument masons (Steinmetze) | Grabmalantrag to each cemetery before every headstone; TA-Grabmal acceptance certificate within 8 weeks | Each cemetery has its own PDF form (Dortmund, Bielefeld, Teltow, Herborn…) | ~5,700 businesses (1,900 one-person) (BIV interview, DHZ) | Weak candidate | Per-job and fragmented, but Dietrich-Software already derives applications from the order |
| Small sewage plant (Kleinkläranlage) maintenance firms | Send the maintenance protocol to the municipality, water authority and sewage association within 1 month | Paper still accepted in many districts | 1.3–2 m plants (estimate, no central register) | Rejected | DiWa5 (U.A.N.) is a nationwide interface standard; LinWAS, DiWapp and Click+Clean plug into it |
| Gaming-machine operators (Automatenaufsteller) | Monthly entertainment-tax (Vergnügungssteuer) return per municipality, with counter printouts | Municipal paper forms (Stuttgart form "valid from 01.07.2026") | BA ~2,000 member firms | Rejected | Rechnova and operator ERPs exist; shrinking, stigmatised sector |
| Childminders (Kindertagespflege) | Monthly hours sheet (Abrechnungsbogen) to each of ~560 youth offices | Paper sheets per district (e.g. Aurich) | <45,000 and falling (Destatis/BVKTP) | Rejected | Self-employed on low income; hobby tools exist (free "JA Abrechnung" add-on) |
| Livestock traders | Viehhandelskontrollbuch (§21 ViehVerkV); HI-Tier movement reports | Bound book allowed; court cases (VG Regensburg 2023) | Unverified | Rejected | Agrabiz does HIT reports and signed delivery papers; HI-Tier itself is free |
| Scrap, second-hand and precious-metal dealers | Geschäftsbuch for purchases under Land §38 GewO rules; GwG at cash ≥ EUR 2,000 (precious metals) | Some Länder want police-certified bound books | Unverified | Rejected | No new trigger found; the IMK wish for nationwide record-keeping had no 2025–26 law in the results; scrap yards use weighbridge software |
| Pawnbrokers | Pfandbuch, annual audit (PfandlV, amended 2024-12-11) | Bound books submitted to police | Small (unverified, roughly hundreds) | Rejected | Too few buyers |
| Gun dealers and gunsmiths | Electronic Waffenbuch reporting to the NWR (XWaffe), since 2020-09-01 | Already electronic by law | Unverified | Rejected | Mandatory electronic since 2020; vendors certified (e.g. TT-E) |
| Households as employers (minijob helpers, 24h live-in carers) | Haushaltsscheck to Minijob-Zentrale; live-in carers mostly posted via agencies (A1) | Paper, phone or online | Millions of households (not counted) | Rejected | Haushaltsscheck is free and simple; 24h care is run by agencies |
| Hunters / game | Wildursprungsschein (paper original plus 2 copies) for trichinella and sale | Paper, digital copy optional | ~400k hunters (estimate, not checked) | Rejected | Hobby buyers, tiny ticket |
| Small coastal fishers | EU control regulation e-logbooks | — | — | Rejected | Germany exempts vessels <15 m that fish only in the territorial sea |
| Chimney sweeps | Formblatt from a free sweep to the district sweep within 14 days, electronic where the district sweep offers access (§4 SchfHwG) | Mixed | ~7,500 districts (estimate) | Rejected | District sweeps do most work themselves; Kehrbuch software is established (vendors not verified) |
| Seasonal farm labour (incl. Georgia/Moldova placement agreements) | Hours records, housing, BA placement | Paper hours sheets; enforcement reports (IG BAU 2026) | Unverified | Rejected | Farm payroll handled by agricultural accounting offices; enforcement pain falls on workers, not as a software buyer |
| Beekeepers, farriers, tattoo studios | Vet registration, medicine records; no recurring filing found | — | — | Not pursued | No recurring filing to an authority worth software money |

## 2. Strongest opportunities

### Opportunity: Abfindungsbrenner Season Desk (Zoll-Portal obligation 2027)

**Industry:**
Small licensed fruit distilleries (Abfindungsbrennereien, mostly in BW, Bavaria and the Palatinate) and the private orchard owners (Stoffbesitzer) who have their fruit distilled there.

**Buyer:**
The owner of the Abfindungsbrennerei (often a part-time farmer or family business). The Stoffbesitzer is the user, not the payer. A second buyer is the regional small-distillers' association (Kleinbrennerverband), buying a member service.

**Trigger / Why now:**
From **2027-01-01** the Zoll-Portal becomes mandatory for forms 1219 and 1220 (distiller's Abfindungsanmeldung) and 1221 (Stoffbesitzer's Abfindungsanmeldung). Stoffbesitzer are tax debtors and must register themselves, using ELSTER or the new ID card with AusweisApp. The online route opened in December 2021. A trade article asks "Das Ende der Stoffbesitzer?". The BW Landtag (Drs. 17/6680) records complaints that rules on querying Stoffbesitzer are "bürokratisch übertrieben", which a GZD letter of 2024-02-13 only partly fixed.

**Current workflow:**
1. In autumn and winter, Stoffbesitzer bring mash. The distiller agrees a date and quantities, often by phone or at the farm gate.
2. Today the distiller or the Stoffbesitzer fills paper form 1221 or 1219/1220 (or the portal), at least 5 working days before the run, and sends it to HZA Stuttgart.
3. The HZA sets the tax-free/flat-rate allowance (Abfindung). The distiller runs the still in the notified window, and the Stoffbesitzer pays the spirits tax on the notice.
4. From 2027, each Stoffbesitzer (100k–200k people, many elderly) must self-register and file online. Under the new process the distiller can push the planned run data to the Stoffbesitzer online first (per the summaries of the Zoll-Portal guidance).

**Pain:**
The obligation is mandatory and per run, with a hard date. The affected population is very offline. Associations (BDKO, Badens Brenner, Pfälzer Brenner, Kleinbrennerverband Nord-Württemberg, Brenner Franken) all publish portal walkthroughs, which shows that members struggle. If a Stoffbesitzer can't file, the distiller loses the job (the "end of the Stoffbesitzer" fear).

**Existing solutions:**
- The Zoll-Portal itself (free, mandatory endpoint).
- Association guides and form-service pages (free).
- LVWO Weinsberg advisory notes.
- Distillers who already fill forms for customers as an informal service.
- No dedicated distillery planning software appeared in the searches (unverified; not exhaustive).

**Offline evidence:**
The paper forms 1219/1220/1221 are still in use until the end of 2026. Associations run "Formularservice" pages. Distilleries sit in villages, and the customers are orchard owners. There are no SaaS review pages for this niche.

**Offline channel:**
Regional small-distillers' associations (newsletters, winter general meetings, distilling courses at LVWO Weinsberg), and still and equipment makers (Kothe, Arnold Holstein, Carl, all unverified as partners). Also the HZA Stuttgart "Arbeitsgebiet Abfindungsbrennen" information events (unverified), and phone outreach from association member lists.

**Market count:**
~25,000–29,000 Abfindungsbrennereien nationally, ~19,000 of them in BW (31.12.2017 / 01.07.2018 figures), and 100,000–200,000 Stoffbesitzer a year (estimates quoted by kleinbrennerei.de and kleinbrennerverband.de).

**The gap:**
The portal handles filing but does nothing on the distiller's side. That means the season schedule across many Stoffbesitzer, the 5-working-day timing, tracking which customer has registered and submitted, re-use of last year's data, and an assisted path for customers who have no eID.

**Possible product:**
A distillery season planner. It books runs, computes the latest filing date per run, pre-fills and pushes run data to each Stoffbesitzer, and tracks status. Paired with it, a low-tech "assisted filing" kit: printed step sheets, an SMS reminder, and a phone help line, which can be sold to associations.

**MVP:**
A web app for one distiller: customer list, run calendar, a deadline engine (5 working days, holidays by Land), status board (registered / submitted / approved), and printable letters to customers explaining ELSTER registration. No portal automation (there is no public API).

**Pricing hypothesis:**
EUR 5–10/month or EUR 49–99 per season per distillery. Or an association licence (for example EUR 1–2 per member a year). A paid done-for-you help line per Stoffbesitzer (EUR 10–20) may sell better than software. Most buyers will pay only for a service, not for software alone.

**How to find first customers:**
Kleinbrennerverband Nord-Württemberg, Badens Brenner, BDKO, Verband Pfälzer Klein- und Obstbrenner, Brenner Franken. Start with one association pilot before the 2026/27 season.

**Risks:**
- Zoll may add the distiller-side features itself (the "push data to Stoffbesitzer" function already narrows the gap).
- Very low ticket size.
- The obligation is personal: a third party may not be allowed to file for the Stoffbesitzer (unverified), which caps any automation.
- The season is short, so usage is concentrated in a few months.
- Demographics: the number of distilleries is falling.

**Kill condition:**
Kill it if association interviews show that distillers already handle this with the portal plus a paper calendar and won't pay EUR 50 a season, or if Zoll allows distillers to file on behalf of Stoffbesitzer through a mandate.

**Founder access:**
Needs fluent German and a local presence in Swabia, Baden or Franconia (association meetings, phone support in dialect). A non-local solo founder would struggle.

**Score:** 4/10 (strong trigger, reachable and countable buyers; low willingness to pay, no API, seasonal)

**Sources:**
- https://www.zoll.de/DE/Privatpersonen/Verbrauchsteuern-im-Haushalt/Brauen-Brennen-Roesten/Alkoholerzeugnisse/Anmeldung-Brennen/anmeldung-brennen_node.html
- https://www.help.zoll-portal.de/DE/Hilfe/Dienstleistungen/abfindungsanmeldung/MerkblattAbfindungsbrenner/Merkblatt-Abfindungsbrenner-Stoffbesitzer.html
- https://bdko.de/zoll-portal-fuer-stoffbesitzer/
- https://www.badens-brenner.de/service/online-anmeldung-zoll-portal/
- https://www.pfaelzer-brenner.de/news/1/1219291/nachrichten/online-anmeldung-zoll-portal.html
- https://www.kleinbrennerei.de/aktuelles/news/article-8395194-203690/das-ende-der-stoffbesitzer-.html
- https://www.kleinbrennerei.de/aktuelles/news/article-6562990-203690/zahl-der-brennereien-.html
- https://www.kleinbrennerverband.de/brennerei/abfindungsbrennerei
- https://www.landtag-bw.de/resource/blob/266308/0c4c02a042e15346f3d7abdf33d490d7/17_6680_D.pdf
- https://lvwo.landwirtschaft-bw.de/,Lde/Startseite/Fachinformationen/Online-Anmeldung+ab+Januar+2022+fuer+Abfindungsbrenner+und+Stoffbesitzer

---

### Opportunity: Showmen's Season Dossier (one ride file, every fairground)

**Industry:**
Travelling showmen (rides, booths, food stalls) at Volksfeste, Kirmessen and Christmas markets.

**Buyer:**
The owner of the showman family business, often with a family member who does the office work.

**Trigger / Why now:**
There is no single new law. The trigger is that organisers are digitising one city at a time: Paderborn went digital-only after a 2022 trial, Berlin and Ulm have their own portals, Bremen has marktbewerbung:bremen, and Form-Solutions has partnered with Marktmeister Pro. Each showman now faces a mix of PDFs and different portals, each asking for the same documents. Building authorities keep requiring a separate notice for every set-up of a fliegender Bau.

**Current workflow:**
1. In winter, apply to each festival separately: Reisegewerbekarte, day and night photos, liability insurance, ride data, references.
2. After being accepted, send each local building authority the notice of set-up and request the Gebrauchsabnahme, at least 1 week ahead, on that town's form.
3. Present the paper Prüfbuch on site; the inspector writes the acceptance in it.
4. Repeat for 20–60 sites a season (estimate, unverified).

**Pain:**
Repetitive re-entry across dozens of municipal forms and portals. If the notice is late or the acceptance is missing, the ride can't operate (Dresden, Munich and Pirna guidance). Evidence of operator complaints is indirect: no forum posts were found, which fits a quiet industry.

**Existing solutions:**
- Organiser-side tools: Marktmeister Pro, Form-Solutions, Bremen's and Berlin's portals (Berlin reuses master data only within its own portal).
- Document-scanning services for Prüfbücher (dokuhaus).
- DSB and regional associations (lobbying, no tool found).
- Paper folders and copy shops.

**Offline evidence:**
Hundreds of town-specific PDF forms for notices and applications, the physical Prüfbuch, and no operator-side software listing found.

**Offline channel:**
Deutscher Schaustellerbund (4,399 members) and its regional associations (e.g. Schaustellerverband Frankfurt Rhein-Main), the trade weekly "Der Komet" (unverified as an ad channel), the winter season's association meetings and the EAS/Interschau-type trade fairs (unverified), and phone outreach from published festival exhibitor lists.

**Market count:**
~5,000–5,600 showman businesses (DSB figures; DSB claims it represents >90%).

**The gap:**
Nothing exists on the operator's side: one ride file (documents, photos, Prüfbuch scans, insurance expiry dates) that auto-fills each town's application and building-authority notice, plus a deadline calendar per site.

**Possible product:**
A "ride passport" vault, with a form-filler for the top 200 festival PDFs and portals, and a season calendar that generates each building-authority notice and reminds about insurance and Prüfbuch renewal dates.

**MVP:**
A document vault plus PDF auto-fill for 30 common municipal forms in one Land (e.g. NRW Kirmessen). Email or fax sending, and a calendar.

**Pricing hypothesis:**
EUR 15–30/month per business, or EUR 150–250 per season. A DSB member discount.

**How to find first customers:**
DSB regional associations; exhibitor lists from the published allocation results of large festivals.

**Risks:**
- Organiser portals may converge on a few vendors (Marktmeister Pro), which reduces fragmentation.
- Family businesses with low IT use.
- Form coverage is a long tail.

**Kill condition:**
Kill it if 10 showmen say each application takes under 15 minutes because towns reuse last year's data, or if Marktmeister Pro offers a cross-festival applicant account.

**Founder access:**
Needs German and presence at association meetings and fairs. A non-local founder would find it hard, but not impossible through DSB.

**Score:** 4/10

**Sources:**
- https://www.dresden.de/de/rathaus/dienstleistungen/fliegende-bauten.php
- https://www.eberswalde.de/downloads/Bauen/Formular-Anzeige-Fliegende-Bauten_1.pdf
- https://lhm.muenchen.swm.de/dam/jcr:2c6baa0f-f13b-4915-a897-c776b833c0cc/Abnahme_fliegende_Bauten_2023_web.pdf
- https://www.bayernportal.de/dokumente/leistung/4671270534135
- https://marktmeister-pro.de/digital-application-process-with-marktmeister-pro/?lang=en
- https://www.kommune21.de/k21-meldungen/maerkte-leichter-planen/
- https://volksfest-berlin.de/bewerbungsportal/
- https://www.marktbewerbung-bremen.de/
- https://www.dsbev.de/unsere-mitglieder/
- https://www.lobbyregister.bundestag.de/suche/R003862

---

### Opportunity: Borehole Notice Pack for Ground-Source Drillers

**Industry:**
Drilling firms for geothermal probes and wells (DVGW W 120-2 certified).

**Buyer:**
The owner or office manager of a small drilling firm (often a well-drilling family business).

**Trigger / Why now:**
Ground-source heat pump demand, plus the Geothermie-Beschleunigungsgesetz (GeoBG, BGBl. 2025-12-22, mostly in force 2026-01-01, Art. 1 §6 from 2026-06-22). It brings a one-month fiction (silence counts as approval) for water-law notices and drops the mining-law review for shallower bores (search summary says up to 400 m, **unverified**). A one-month fiction only works if the notice is complete, so complete notices matter more.

**Current workflow:**
1. §49 WHG notice to the lower water authority (~400 districts, each with its own form) about 1 month ahead.
2. GeolDG notice to the state geological survey at least 2 weeks ahead (the name of the drilling company is mandatory; each Land has its own handbook or portal).
3. Drill, and record the layer log (Schichtenverzeichnis) on paper or in BoreDoc or Bohr2000.
4. Send specialist data within 3 months and evaluation data within 6 months, in the state format (e.g. SEP 3 for Lower Saxony, LGRB workflow in BW).

**Pain:**
Per job, 2–3 authorities, 16 state formats, deadlines after the job is finished. Volume complaints were not found (unverified).

**Existing solutions:**
BoreDoc (layer logs, profiles), Bohr2000, GeODin and the free GeODin-Shuttle (SEP 3), state portals (AGU in SH, LGRBbohrungen), and the geology consultants who often do the notices.

**Offline evidence:**
State PDF handbooks and municipal Word or PDF forms (Gundelsheim, Dithmarschen, Münster). Data delivery is often by file upload or email.

**Offline channel:**
Regional drilling associations (e.g. Vereinigung Bohrbrunnenbau Bayern), certification bodies (DVGW-Cert, Zertbau), the Bundesverband Geothermie, and the state geological surveys' expert meetings (e.g. HLNUG Fachgespräch Erdwärme).

**Market count:**
Unverified. About 318,000 ground-source systems are installed. The number of certified drilling firms was not found (estimate: low hundreds).

**The gap:**
Nobody routes one borehole record into the water-authority notice, the GeolDG notice and the state-format data delivery, with a deadline tracker.

**Possible product:**
A "one borehole, every notice" tool: enter the site and bore data once, generate each authority's form and the state data file, and track the 2-week, 1-month, 3-month and 6-month clocks.

**MVP:**
Two Länder (BW and Bavaria), the GeolDG notice plus data export, and a deadline board.

**Pricing hypothesis:**
EUR 10–20 per borehole, or EUR 79–149/month.

**How to find first customers:**
Association member lists, DVGW W120 certificate holders, firms named in state guidance.

**Risks:**
- A small, unverified buyer count.
- The GeoBG simplifies the process further.
- BoreDoc could add notices.
- Consultants do the work.

**Kill condition:**
Kill it if there are fewer than ~300 certified firms, or if most notices are filed by planners rather than drillers.

**Founder access:**
German needed; a non-local founder could sell through associations.

**Score:** 3/10 (rounded down from 4 because the GeoBG removes steps and the market count is unverified)

**Sources:**
- https://www.lgrb-bw.de/download_pool/merkblatt_geoldg_workflowbeschreibung.pdf
- https://www.schleswig-holstein.de/mm/downloads/LFU/Geologie/Merkblatt_Bohranzeigen_GeolDG_SH_.pdf
- https://www.lgb-rlp.de/fileadmin/service/lgb_downloads/geoldg/handbuch_anzeige_geologischer_untersuchungen_und_bohrungen_rlp.pdf
- https://www.lbeg.niedersachsen.de/karten_daten_publikationen/bohrdatenbank/sep_3/sep-3---die-schnittstelle-zur-neuen-bohrdatenbank-niedersachsens-724.html
- https://www.energie-experten.org/erneuerbare-energien/erdwaerme/erdwaermebohrung/genehmigung
- https://boredoc.eu/en/
- https://www.weka.de/architekten-ingenieure/geothermie-beschleunigungsgesetz-geobg/
- https://www.bundestag.de/dokumente/textarchiv/2025/kw49-de-geothermie-1128166
- https://www.zfk.de/energie/waerme/brandenburg-erdwaerme-immer-mehr-genutzt-und-auch-interessanter

---

### Opportunity: Headstone Application and TA-Grabmal Acceptance Router

**Industry:**
Monument masons (Steinmetze, grave-monument segment).

**Buyer:**
The owner of a small mason's workshop (1,900 of ~5,700 are one-person businesses).

**Trigger / Why now:**
Weak. There is no new law. Cemeteries keep updating forms (Teltow "ab 2024", Bielefeld 11-2025), and the TA-Grabmal standard requires a documented load test plus an acceptance certificate within 8 weeks.

**Current workflow:**
1. Request or download the specific cemetery's application form.
2. Fill in deceased, grave number, dimensions, material, a drawing and the company stamp, then send.
3. After installation, do the load test and send the acceptance certificate (Abnahmebescheinigung) within 8 weeks.

**Pain:**
Per job, with many form variants (tens of thousands of cemeteries; estimate). The pain is moderate.

**Existing solutions:**
Dietrich-Software (mason ERP with automatic approval applications), online retailers' application services (deinsteinmetz.de), and the cemeteries' own fillable PDFs.

**Offline evidence:**
Fillable PDFs per town, stamps, post and fax.

**Offline channel:**
Bundesverband Deutscher Steinmetze and its Land guilds, the Stone+tec trade fair, and stone wholesalers.

**Market count:**
~5,700 businesses (BIV figures via Deutsche Handwerks Zeitung).

**The gap:**
A library of cemetery forms with auto-fill, plus a tracker for the 8-week acceptance deadline, for masons who don't use a full ERP.

**Possible product:**
A form library plus auto-fill, plus an acceptance-certificate tracker.

**MVP:**
The 100 largest cemeteries' forms in one Land.

**Pricing hypothesis:**
EUR 19–39/month.

**How to find first customers:**
Guild directories (Innungen).

**Risks:**
A falling market (urns, forest burials), the Dietrich incumbent, and a long tail of forms.

**Kill condition:**
Kill it if masons say the application takes under 10 minutes or that their ERP already does it.

**Founder access:**
German needed.

**Score:** 3/10

**Sources:**
- https://www.dortmund.de/dortmund/projekte/rathaus/verwaltung/friedhoefe-dortmund/downloads/68_666_02_18_grabmalantrag.pdf
- https://www.bielefeld.de/sites/default/files/datei/2025/Antrag_auf_Errichtung_AenderungGrabmalen_Grabeinfassungen_mit_DS_11-2025.pdf
- https://www.graevenwiesbach.de/fileadmin/Dateien/Dateien/2020-06-22-TA_Grabmalantrag.pdf
- https://www.aeternitas.de/fileadmin/user_upload/Downloads/Infoblatt_Grabmalstandsicherheit_2026.pdf
- https://www.dietrich-software.de/grabmale_verkaufen-Software_Steinmetz-Programm_Steinmetze
- https://www.deinsteinmetz.de/pages/antrag-auf-aufbau-eines-grabmals
- https://www.deutsche-handwerks-zeitung.de/?p=270033

## 3. Rejected

- **Small sewage plant maintenance protocols:** a textbook "one job, several receiving bodies" case (municipality, lower water authority, sewage association). But U.A.N.'s DiWa5 already defines a nationwide interface, and LinWAS, DiWapp/homebook and Click+Clean (Börsch) build on it. https://www.uan.de/dienstleistungen/diwa-digitales-wartungsprotokoll ; https://www.linstep.de/instandhaltung-wartung-software/linwas-wartungssoftware-kleinklaeranlagen/
- **Entertainment tax (Vergnügungssteuer) for gaming-machine operators:** monthly returns per municipality with counter printouts (e.g. the Stuttgart form valid from 2026-07-01). Rechnova and operator systems already compute it, and the sector is shrinking and reputationally awkward. https://www.stuttgart.de/medien/ibs/steuererklaerung-fuer-spielgeraete-mit-gewinnmoeglichkeit-in-spielhallen-gueltig-ab-01.07.2026-ausfuellbar-1.pdf ; https://rechnova.de/
- **Childminder monthly billing to youth offices:** paper sheets that vary by district, but under 45,000 self-employed carers (and falling) with very low willingness to pay, and free add-ons exist. https://www.landkreis-aurich.de/fileadmin/dateiablage/51-jugendamt/pdf/Abrechnungsbogen.pdf
- **Livestock-trader control book and HI-Tier:** Agrabiz plus the free HI-Tier portal. https://www.topagrar.com/perspektiven/digitalisierung/eine-app-fuer-den-viehhandel-12468276.html
- **Gun-dealer NWR reporting:** electronic by law since 2020; certified vendors. https://www.mtrlegal.com/wiki/nationales-waffenregister-nwr/
- **Scrap and second-hand dealer books:** existing Land rules, no new trigger found; the bvse ID-copy relief *reduced* the burden. https://www.euwid-recycling.de/news/wirtschaft/bargeldgeschaefte-auf-dem-schrottplatz-datenschutzkonflikt-behoben-260124/
- **Household employers:** the Haushaltsscheck is free and simple; live-in carers are agency-run. https://www.finanztip.de/haushaltsscheck/
- **Pawnbrokers, hunters/game, coastal fishers (exempt below 15 m), chimney-sweep forms:** too few buyers, hobby buyers, exempt, or already served.

## 4. Method notes

What worked: German regulator queries built from the name of the form or the paragraph ("Bohranzeige GeolDG", "Anzeige Fliegende Bauten Formular", "Abfindungsanmeldung 1221", "Vergnügungssteuer Zählwerksausdrucke"). Municipal PDFs show fragmentation immediately, and lobby-register entries give association member counts. Searching association sites (kleinbrennerverband, badens-brenner, DSB) surfaced the strongest trigger (Zoll-Portal 2027).

What didn't: count queries (driller numbers, pawnbrokers, livestock traders) rarely returned figures, and complaint evidence is nearly absent, as expected for quiet industries. Interviews are needed for both. Searches for operator-side software often return only the organiser- or authority-side tools.

Research model: Opus
