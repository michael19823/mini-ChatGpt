# Germany: country research (as of 2026-10-05, deep pass)

Method note: the first pass used about 14 searches. This deep pass added about 56 WebSearch calls, mostly in German, with no WebFetch. Evidence comes from search-result summaries of official sources (BAuA, Länder labour-protection and plant-protection services, gesetze-im-internet, Bundesrat), trade associations and vendor sites. Germany is open to a foreign solo founder: EU market, no sanctions, SEPA and Stripe work, GDPR applies, and buyers expect a German-language product and support.

Overall conclusion: Germany has a lot of regulation, but it also has a dense vertical-software market. Almost every regulatory trigger checked in this pass already has 3 or more specialised German vendors, a free state tool, or both. Examples are pesticide e-records, the new wine register, subcontractor certificates, Kita reporting, EBV (substitute building materials), tourist tax, grid registration and subsidy paperwork. The one new candidate that is reasonably clean is **asbestos-job compliance for craft businesses**, triggered by the GefStoffV reform with deadlines in 2026–2027. Every score here is modest, and no German idea clears the brief's build threshold without interviews first.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Roofers, SHK, demolition, drywall and other trades working on pre-1993 buildings | GefStoffV (5 Dec 2024) asbestos regime: company notification and authority approval by 2026-12-19, a time-and-place notification per job, work plan, staff qualification by 2027-12-05, exposure register | **Candidate (best in Germany)** | Mandatory, per job, deadlines in 2026–27, notices go to whichever authority covers the site; no dedicated SME tool found |
| Packaging producers / brand owners | PPWR declaration of conformity and technical file (from 2026-08-12), LUCID | Candidate (competitive) | Hard trigger, but tanso, osapiens, dpp-tool, tacto, lizenzero and a Händlerbund DoC service are all active |
| Non-farm pesticide users (§12 PflSchG permit holders, golf courses, landscapers, nurseries) | Records must be electronic and machine-readable from 2027-01-01; permit-specific documentation | Weak candidate | Farm tools cover farms well; the non-farm niche is small and fragmented |
| Grease-separator service firms | Operating log and disposal proof under municipal drainage bylaws | Weak candidate | Municipal fragmentation, but councils do not require digital submission |
| Farms and agricultural contractors | Electronic plant-protection records from 2027-01-01 (EU 2023/564) | Too competitive | FarmAct (500+ contractors), AGRARMONITOR, 365FarmNet-type farm software, free state tools (PSM-DOK Saxony, other states' platforms) |
| Wineries | New Wein-Überwachungsverordnung in force 2026-09-02: one "register" replaces the cellar/wine books; old rules allowed until 2027-08-31; new reporting rules from 2027-07-01 | Too competitive | 7+ officially approved winery programs (Winestro.Cloud reports 2,300+ users, DWine, ProVino, WISPremium, BOXXER VINO, MemoTech, WinWein) |
| Heat-pump / PV installers | KfW BzA and grid-operator and MaStR registration (KfW 458 changed 2026-07-21) | Rejected | Reonic does grid registration, MaStR and KfW subsidy filing as a built-in service and claims up to 12 hours saved per project |
| General contractors (construction) | Subcontractor certificates (SOKA-BAU, §48b exemption, tax clearance) | Too competitive | DEXEVO, CoCrafter, SubCheck, CONOVA24, topfact, freistellungsmanager |
| Construction / mineral recycling | EBV (substitute building materials) cover sheet, completion notice and delivery notes per job | Rejected | ZEDAL EBV already handles it; a July 2026 draft removes the cover sheet for jobs under 200 t |
| Kita providers | Monthly occupancy reports (KiBiz.web NRW, KiBiG.web BY, ISBJ Berlin, KiDz RLP), statements of how funds were used | Too competitive | winKITA, kitamaster and KitaPLUS already interface with the state portals |
| Holiday rentals / hotels | Guest tax and city tax reporting, guest cards | Too competitive | AVS Meldeschein (free for hosts), feratel, Chekin integrations |
| Property managers | Remote-readable meters by 2026-12-31 (HKVO), monthly consumption info for tenants | Rejected | Hardware plus metering-service oligopoly (ista, Techem, Brunata) |
| Security companies | Bewacherregister guard registration; planned Sicherheitsgewerbegesetz | Rejected | One-time registration per guard; scheduling tools already integrate it (e.g. Securo-Planer); the new law is still a draft (2023 ministry draft) |
| Dental laboratories | MDR custom-made device declaration and traceability | Rejected | Covered by lab software (e.g. DOCma Labor) and lab ERPs |
| Pharmacies | Apothekenreform (final part in force 2026-09-22), e-invoicing | Rejected | The reform *removes* documentation duties; pharmacy software is an oligopoly |
| Small water utilities | TrinkwV 2023: send results to the health office within 2 weeks, risk management | Rejected | Accredited labs and their LIMS handle submission; the work is done by labs, not utilities |
| Fire-safety contractors | Extinguisher and system inspection records | Rejected | Unlike the US benchmark, there is no government reporting portal; generic inspection apps (Lumiform etc.) |
| Pest control | Bait-station monitoring and IFS/QS audit documentation | Rejected | Specialised tools (DocMaH), IoT trap vendors, Rentokil's own digital stack |
| Livestock | Animal-husbandry labelling (start postponed to 2027-01-01) | Rejected | One-time farm registration; no recurring data flow for software |
| Coffee roasters | Coffee tax returns plus EUDR from 2026-12-30 (micro and small firms 2027-06-30) | Rejected | Small market; EUDR has been simplified and most roasters only pass on reference numbers |
| Importers of steel, aluminium, cement, fertiliser | CBAM definitive phase since 2026-01-01; declarant status; 50 t threshold | Too competitive | Many CBAM tools and customs brokers; the 50 t threshold exempts most small importers |
| Mittelstand suppliers | Sustainability questionnaires (VSME cap) and EUDR reference numbers | Too competitive / weakened | Commission adopted the Voluntary Standard on 2026-07-03; the value-chain cap from FY2027 *reduces* the pain; EcoVadis-type vendors |
| Veterinary, home care, hazardous waste, dangerous goods, funeral homes, e-invoicing, NIS2 | (first pass) | Rejected / too competitive | See below; nothing found in this pass changed these |

## Opportunities

### Opportunity: Asbestos Job Pack for Craft Businesses (GefStoffV 2024)

**Industry:**  
Construction trades that work in existing buildings: roofers (asbestos-cement sheets), SHK and heating installers, electricians, drywall, tilers and painters (asbestos in plaster, tile adhesive and filler), small demolition firms.

**Buyer:**  
Owner or office manager of a craft business with 5 to 50 staff, or a person named as Sachkundiger/Aufsichtführender (the supervisor with the required asbestos qualification). Second segment: small demolition and remediation firms with high job volume.

**Trigger / Why now:**  
- The amended Gefahrstoffverordnung took effect on 2024-12-05. It brought a risk "traffic light" model (low, medium, high risk) and moved the duty to check for asbestos onto the contractor.
- Firms doing demolition-type work in the low or medium risk band need authority approval. It counts as granted if the authority does not object within 4 weeks, and it must be in place by **2026-12-19**.
- Staff basic qualification (10 lessons) and supervisor qualification (17 lessons) must be shown by **2027-12-05**.
- TRGS 519 was revised on 2025-02-28 and the BAuA model forms on 2026-05-19. Niedersachsen reissued its notification forms in Nov 2025.

**Current workflow:**  
1. One-off: a company-level notification (TRGS 519 Annex 1.1) to the labour-protection authority, plus approval where needed.
2. Per job: assess the building's construction year and use history, classify the task's risk, and write a hazard assessment and work plan (Annex 1.4/1.5) plus operating instructions.
3. Per job at changing sites: send a "supplementary notification of place and time" (Annex 1.2) before work starts. For the high-risk band, send an object notification (Annex 1.3) at least 7 days ahead. These go by fax, email or a state/municipal online form, to the authority responsible for the *site*, which is not necessarily the firm's home authority.
4. Check that each worker on the job holds valid qualification.
5. Record exposure in the employer's exposure register, kept 40 years (DGUV ZED is a free option).
6. Arrange hazardous-waste disposal (via the separate eANV system) and file everything for inspections.

**Pain:**  
- Mandatory with deadlines. The notification is per job and goes to whichever authority covers the site, so a firm working across district or state lines deals with different offices and forms.
- Hamburg's labour-protection office alone received 2,601 asbestos notifications in 2018, before the reform widened who is in scope.
- Craft chambers (HWK Ulm, Reutlingen, Unterfranken) and BG BAU have published several explainers on "renewed changes". That suggests confusion among firms, but it is not direct proof of hours spent.
- Penalties: work stoppage and fines under GefStoffV (the size of the fines was not verified).
- Evidence level: official requirement confirmed. Complaints and hours spent are **unverified**.

**Existing solutions:**  
- Free official tools: DGUV ZED (exposure register), BG BAU guidance and model work plans, Länder online forms (Bayernportal, RLP service portal, a digital asbestos notification in Hamburg), and BAuA Word/PDF templates.
- Training providers (asbest-akademie, Deutsche Umweltakademie) sell the qualification courses.
- Generic HSE and hazard-assessment software and generic checklist apps.
- Large remediation firms have their own QM systems.
- **No SME tool combining notification, work plan, qualification tracking and exposure records was found** (absence is not proof; check before interviews).

**The gap:**  
Nobody combines the per-job steps for a craft business: classify risk → generate the right form for the authority responsible for the site → produce the work plan → check that the assigned workers' qualifications are valid → push exposure entries to ZED → keep an inspection-ready job file.

**Possible product:**  
"Asbest-Akte" (asbestos job file): the office enters one job record (address, building year, material, task, crew). The product finds the competent authority by address, fills TRGS 519 Annex 1.2/1.3 and the work plan, sends them by email or prints them, tracks worker qualifications and their expiry, and exports the exposure data.

**MVP:**  
- Job form, plus an authority lookup by postcode for 2–3 large states (NRW, Bayern, Niedersachsen).
- Annex 1.2/1.3 PDF generation and email dispatch with a sent log.
- Worker qualification register with expiry alerts.
- Inspection-ready PDF job file.

**Pricing hypothesis:**  
EUR 29–79/month for craft firms, EUR 149–299/month for demolition and remediation firms with many jobs. Alternatively EUR 5–10 per job.

**How to find first customers:**  
- Länder lists of approved and notified firms, where published (unverified).
- Course-participant pipelines at asbestos training providers, as a partnership channel.
- Guild (Innung) and HWK newsletters for roofers and SHK.
- Deutscher Abbruchverband member directory; BG BAU events.
- Search: "Asbestsanierung" plus a city on Google Maps.

**Risks:**  
- Notifications are short forms and many firms may simply email a PDF, so willingness to pay may be low.
- Authorities may build their own online forms, as Hamburg and the IFAS-integrated portals already do.
- HSE suites could add a module.
- Liability if the risk classification is wrong. The tool must never make the risk classification itself, only document the user's decision.

**Kill condition:**  
- Interviews with about 15 roofing, SHK and demolition firms show fewer than ~2 notifications a month for a typical firm, or that they already handle it with one Word template in under 15 minutes.
- Or a BG BAU or DGUV free tool already covers the whole flow.

**Score:** 5/10

**Sources:**  
- https://www.hwk-ulm.de/asbestarbeiten-was-ist-neu-seit-dezember-2024-und-was-galt-schon-vorher/  
- https://www.hwk-ufr.de/artikel/erneute-aenderungen-im-umgang-mit-asbest-78,0,6911.html  
- https://bauportal.bgbau.de/bauportal-12025/rund-um-die-bg-bau/novellierung-gefahrstoffverordnung-umgang-mit-asbest  
- https://www.deutsche-umweltakademie.de/asbest-2027-neue-regeln/  
- https://www.baua.de/DE/Angebote/Regelwerk/TRGS/pdf/TRGS-519.pdf?__blob=publicationFile  
- https://www.baua.de/DE/Angebote/Regelwerk/TRGS/pdf/Hinweise-Musterformulare-TRGS-519.pdf?__blob=publicationFile&v=2  
- https://www.gewerbeaufsicht.niedersachsen.de/download/223016/Formular_1.2_Ergaenzende_Anzeige_von_Ort_und_Zeit_zur_unternehmensbezogenen_Anzeige_bei_Taetigkeiten_mit_asbesthaltigen_Materialien_im_Bereich_mittleren_Risikos_Stand_11_2025.pdf  
- https://www.arbeitsschutz.nrw.de/antraege-formulare-hinweise/unternehmensbezogen-asbestanzeigen-gemaess-anlagen-der-trgs-519  
- https://www.dguv.de/ifa/gestis/zentrale-expositionsdatenbank-zed/index.jsp  
- https://www.aerzteblatt.de/news/tausende-asbestsanierungen-in-hamburg-d214d06a-7a50-42f5-885d-90ec2b108290

### Opportunity: PPWR Compliance File for Small Packaging Brand Owners

**Industry:**  
Packaging / consumer-goods SMEs, importers and online sellers

**Buyer:**  
Quality, packaging or regulatory lead, or the owner, at an SME manufacturer, brand owner or importer that places packaging on the EU market.

**Trigger / Why now:**  
PPWR (Regulation (EU) 2025/40) has applied since 2026-08-12. Packaging may not be placed on the market without a declaration of conformity backed by technical documentation. There is no SME exemption. Records must be kept 5 years (single-use) or 10 years (reusable). LUCID registration and dual-system licensing continue.

**Current workflow:**  
1. Collect material composition, substance (incl. PFAS) and recycled-content evidence from packaging suppliers by email or PDF.
2. Build the technical documentation in Excel or Word.
3. Draft and sign a declaration per packaging type.
4. Report quantities separately in LUCID and to the dual system.
5. Repeat whenever a spec or supplier changes.

**Pain:**  
New legal liability for whoever signs. Supplier evidence is scattered. Evidence level: vendor and association guidance; no user complaints found.

**Existing solutions (verified this pass):**  
tanso, osapiens (enterprise), dpp-tool, tacto (procurement AI), lizenzero (licensing), Händlerbund (DoC service for online retailers), WKO/IHK templates, consultants. Suppliers such as Streit already publish ready-made PPWR declarations for their own packaging.

**The gap:**  
The gap is narrowing. What remains is a cheap per-SKU tool for firms with 20–500 packaging SKUs that buy *unbranded stock packaging*: it reuses the supplier's published declarations and only chases the missing pieces.

**Possible product:**  
A per-SKU packaging file that imports suppliers' declarations, flags missing evidence, tracks spec changes, and outputs the declaration and technical file.

**MVP:**  
Upload supplier declarations, then a gap checklist per SKU and a DoC/technical-file PDF for 3 materials.

**Pricing hypothesis:**  
EUR 49–199/month.

**How to find first customers:**  
LUCID public register (search by producer), Händlerbund and the online-retailer ecosystem, packaging wholesalers' customer bases (partnership), IK packaging association.

**Risks:**  
Implementing acts and harmonised standards are still incomplete (unverified). Suppliers' ready-made declarations shrink the work left to do. Händlerbund and lizenzero bundle it into existing subscriptions.

**Kill condition:**  
Interviews show that suppliers' declarations plus a dual-system/Händlerbund add-on already satisfy small brand owners.

**Score:** 4/10 (rounded down from 5 after competitor diligence)

**Sources:**  
- https://www.tanso.de/blog/ppwr-konformitatserklarung-und-technische-dokumentation-was-unternehmen-ab-dem-12-august-2026-vorlegen-mussen  
- https://www.haendlerbund.de/de/leistungen/rechtssicherheit/ppwr-konformitaetserklaerung  
- https://www.tacto.ai/de/einkaufer-lexikon/ppwr-konformitaetserklaerung  
- https://dpp-tool.com/de/guide/ppwr-konformitaetserklaerung/  
- https://www.shop.streit.de/media/53/c1/d2/1786438217/175266_2026.07.27_Konformittserklrung_PPWR.pdf  
- https://www.lizenzero.de/blog/die-ppwr-konformitaetserklaerung-was-ihr-jetzt-wissen-solltet/  
- https://www.verpackungsregister.org/hilfe/datenmeldungen-in-lucid

### Opportunity: Machine-Readable Pesticide Records for Non-Farm Professional Users

**Industry:**  
Landscaping (GaLaBau), golf courses, nurseries and horticulture, municipal works yards, industrial-site vegetation control, i.e. pesticide users not served by arable-farm software.

**Buyer:**  
Owner of a GaLaBau firm with a pesticide licence, head greenkeeper, nursery manager, works-yard manager.

**Trigger / Why now:**  
EU Implementing Reg. 2023/564 extended the required record fields from 2026-01-01: authorisation number, EPPO code, location ID or GPS, BBCH stage. From **2027-01-01** records must be electronic and machine-readable (JSON, XML or CSV), available within 30 days. Holders of §12(2) PflSchG permits for non-crop land must also keep the permit-specific records, and Hessen, for example, issues documentation templates.

**Current workflow:**  
1. Apply the product under the permit.
2. Write it on paper or Excel (until end of 2026).
3. Look up the authorisation number and EPPO code by hand.
4. Keep the records for the authority or supply them on request.

**Pain:**  
Mandatory with a hard date, and handwritten records are banned from 2027. Volume per user is low (a few to dozens of applications per season). Evidence is from official guidance only; no complaints found.

**Existing solutions:**  
Farm-management and contractor tools (FarmAct, AGRARMONITOR, 365FarmNet-type systems), free state platforms (PSM-DOK in Saxony; offers from the official advisory services), Punctus greenkeeping software, GreenKeeper app (US), KTBL list of horticulture software, voice-documentation startups (bygmind).

**The gap:**  
A cheap mobile logger that already contains the official product and EPPO data, made for non-farm sites (no field IDs from the farm-subsidy application, so GPS or parcel IDs instead) and §12 permit conditions. The gap is real but small.

**Possible product:**  
A mobile app: pick the product (pulls the BVL authorisation data), the site on a map, the target; it exports a machine-readable record and a per-permit summary.

**MVP:**  
PWA with a BVL product list, EPPO lookup, GPS capture, CSV/JSON export.

**Pricing hypothesis:**  
EUR 9–29/month per user. Low.

**How to find first customers:**  
Golf club directory (DGV), GaLaBau association member lists (BGL), pesticide-licence course organisers.

**Risks:**  
Free state tools, very low price ceiling, small market (several thousand users at most, estimate).

**Kill condition:**  
Free state platforms accept non-farm users across most states, or Punctus and similar tools already cover golf.

**Score:** 3/10

**Sources:**  
- https://landwirtschaft.sachsen.de/download/20260319_Fachbeitrag_PSM_Aufzeichnungspflicht_elektronisch_2026.pdf  
- https://www.farmact.de/post/neue-digitale-pflanzenschutz-dokumentation-2026-2027  
- https://www.agrarmonitor.de/2026/02/22/digitale-pflanzenschutz-dokumentation-ab-2026/  
- https://www.agrarheute.com/pflanze/getreide/pflanzenschutz-elektronisch-dokumentieren-geht-ab-2027-638756  
- https://pflanzenschutzdienst.rp-giessen.de/fileadmin/dokumente/genehmigungen/Dokumentationshilfe_.pdf  
- https://www.punctus.com/en/greenkeeping-software  
- https://www.ktbl.de/fileadmin/user_upload/Artikel/Gartenbau/Software/12653_Software-Gaertner.pdf

### Opportunity: Grease-Separator Operator Log and Municipal Proof Pack

**Industry:**  
Food-service grease separators; service and hauling firms

**Buyer:**  
Grease-separator service and hauling companies (each serves many restaurants).

**Trigger / Why now:**  
None found. These are standing municipal drainage-bylaw obligations (DIN 4040-100, DIN EN 1825), with merkblatt updates such as Regensburg 2026. Berlin requires a notification for continued operation (paper form).

**Current workflow:**  
1. Emptying every 2–4 weeks, annual or 5-yearly inspection.
2. Paper operating log with maintenance reports and disposal slips attached.
3. The operator shows the proof to the municipality on request; a disposal certificate is needed above 5 t.

**Pain:**  
Plausible but unproven. No municipality was found that requires periodic digital submission.

**Existing solutions:**  
Paper logs, municipal forms, haulers' dispatch software (unverified), generic maintenance apps.

**The gap:**  
A per-site digital log that the hauler hands to the restaurant and the municipality.

**Possible product:**  
A hauler-side app producing the log and disposal proof per site.

**MVP:**  
Site register, visit record, auto-generated PDF log.

**Pricing hypothesis:**  
EUR 59–149/month per hauler.

**How to find first customers:**  
Municipal lists of approved disposers, Entsorgungsfachbetrieb (certified waste firm) registers.

**Risks:**  
No regulatory push, small buyer base, municipalities accept paper.

**Kill condition:**  
Haulers' existing dispatch or waste ERP already prints the log.

**Score:** 3/10

**Sources:**  
- https://www.regensburg.de/fm/RBG_INTER1S_VM.a.253.de/r_upload/merkblatt-fettabscheider-2026.pdf  
- https://www.berlin.de/ba-mitte/_assets/anzeige_weiterbetrieb_einer_fettabscheideranlage.pdf  
- https://www.hannover.de/Leben-in-der-Region-Hannover/Umwelt-Nachhaltigkeit/Wasser-Abwasser/Abwasser/Stadtentwässerung-Hannover/Abwasser-Kanäle/Abfallentsorgung/Abscheideranlagen

## Rejected after competitor research

- **Heat-pump/PV installer "one job, all submissions" (first pass 4/10):** killed by **Reonic**. Its installer CRM includes grid registration for PV, heat pumps and wallboxes (including completion notice and MaStR) and a KfW subsidy service, claiming up to 12 h saved per project. KfW 458 conditions changed on 2026-07-21 (eligible-cost cap down to EUR 28,000, speed bonus down to 16%), which adds churn but does not open a gap. https://reonic.com/de-de/product/360h/grid-registration/ ; https://www.adac.de/rund-ums-haus/energie/spartipps/foerderung-heizung/
- **Wine register under the new WeinÜV (in force 2026-09-02, old-law grace to 2027-08-31):** strong trigger, but 7+ officially approved winery programs exist (Winestro.Cloud with 2,300+ users, DWine, ProVino, WISPremium, BOXXER VINO, MemoTech, WinWein). There are about 15,151 wine holdings (2020). https://www.buzer.de/gesetz/17658/index.htm ; https://www.winestro.cloud/referenz-weingueter.php ; https://www.dwine.de/ ; https://www.meininger.de/weinbau/anbau/weinbaubetriebe-werden-groesser
- **Farm and contractor pesticide e-records (2027):** FarmAct (500+ contractors), AGRARMONITOR, farm-management systems and free state tools. https://www.lohnunternehmen.de/aktuelles/foemi-news/neue-dokumentationspflicht-fuer-pflanzenschutz-agrarmonitor-erleichtert-den-einstieg/
- **Subcontractor certificate management for general contractors:** DEXEVO, CoCrafter, SubCheck, CONOVA24 (subcontractors use it free), topfact, freistellungsmanager. https://www.dexevo.eu/ ; https://subcheck.online/ ; https://www.conova24.de/baubescheinigungen
- **EBV (substitute building materials) per-job documentation:** ZEDAL EBV (also the eANV hazardous-waste platform) handles delivery notes, cover sheets and the notices to authorities, with ERP integration. The July 2026 draft amendment removes the cover sheet for jobs under 200 t and cuts compliance cost by about EUR 42.8m a year. https://www.zedal.de/fileadmin/user_upload/pdfs/zedal-ebv-leistungsueberblick.pdf ; https://recht-energisch.de/2026/07/18/novelle-der-ersatzbaustoffverordnung-referentenentwurf-liegt-vor/
- **Kita monthly occupancy reports and statements of fund use:** winKITA, kitamaster and KitaPLUS interface with KiBiz.web, KiBiG.web and others. https://www.softguide.de/programm/winkita ; https://kitaplus.de/wp-content/uploads/2026/02/kitaplus_zusatzmodule.pdf
- **Guest tax and city tax reporting:** AVS Meldeschein (free for hosts, required by many municipalities), feratel, Chekin. https://www.cuxhaven.de/_Resources/Persistent/d/4/6/c/d46cbaca05f908f72c766699e9fdc23946e6c940/Leitfaden%20AVS.pdf ; https://chekin.com/de/blog/avs-gmbh-integration-zur-automatisierung/
- **Remote meter reading and monthly consumption info (HKVO, 2026-12-31):** ista, Techem, Brunata. https://www.ista.com/de/kontakt-service/fachwissen/unterjaehrige-verbrauchsinformation/
- **Dental-lab MDR documentation:** DOCma Labor and lab software. https://www.zwp-online.info/zwpnews/wirtschaft-und-recht/recht/mdr-in-kraft-getreten-an-alles-gedacht-die-checkliste-hilft
- **Pest-control documentation:** DocMaH, IoT trap vendors, Rentokil. https://www.softguide.de/ausschreibungen/schaedlingsbekaempfer-sucht-unternehmenssoftware
- **Security guard register:** Securo-Planer and similar integrate the Bewacherregister; the event is one-time per guard. https://www.ki-syndikat.de/tools/securo-planer/
- **Veterinary TAMG antibiotic reporting (first pass):** practice-software interfaces and CSV upload. https://www.antibiotika-tierhaltung.bayern.de/doc/information_tae_ab_meldepflichten_neue_tierarten.pdf
- **Home-care billing via the health-data network (TI/KIM) (first pass):** TI-ready billing software is the incumbent core product. https://www.aok.de/gp/fileadmin/user_upload/Pflege/Abrechnung/Telematikinfrastruktur_Pflege.pdf
- **Hazardous-waste tracking (eANV), dangerous-goods annual reports, funeral death registration (first pass):** mature eANV vendors and a free state eANV tool; dangerous-goods reports are annual; death registration is paper-based with no EDRS-style system. https://www.softguide.de/funktion/elektronisches-abfallnachweisverfahren-eanv
- **Drinking-water results reporting (small utilities):** labs and their lab-information systems submit results; §44 TrinkwV. https://lxgesetze.de/trinkwv/44

## Attractive problem, poor distribution

- **Parent-run Kitas (Elterninitiativen)** with volunteer boards struggling with personnel-cost billing and fund-use statements. The pain is real (NRW Landtag submission), but buyers are volunteer associations with tiny budgets that are served through umbrella associations. https://opal.landtag.nrw.de/portal/WWW/dokumentenarchiv/Dokument/MMST17-1781.pdf
- **Small ambulatory care providers** connecting to the health-data network (TI/KIM): sold through closed vendor and association channels.
- **Grease separators at individual restaurants:** a huge number of sites, tiny ticket, fragmented.

## Too competitive

- **E-invoicing for craft businesses (all B2B from 2028-01-01):** Lexware Office, sevDesk, Billomat, Plancraft, Papierkram. https://www.handwerksblatt.de/themen-specials/die-e-rechnung-wird-pflicht-tipps-fuer-handwerksbetriebe/ab-2025-die-elektronische-rechnung-wird-pflicht
- **NIS2 (in force 2025-12-06):** SECJUR and many GRC vendors. https://www.secjur.com/blog/nis2-umsetzung
- **CBAM declarant compliance:** many CBAM tools and customs brokers; the 50 t threshold removes most small importers. https://www.ihk.de/nordwestfalen/international/cbam-5836590
- **Supplier sustainability "answer once" hub (first pass 3/10):** the Commission adopted the Voluntary Standard on 2026-07-03, and the value-chain cap (FY2027+) limits what CSRD reporters may *require* from suppliers under 1,000 staff. Pain is falling, and EcoVadis-type platforms dominate. https://www.zevero.earth/blog/vsme-is-now-the-voluntary-standard-vs-what-changed ; https://www.bclplaw.com/en-US/events-insights-news/csrd-requesting-data-from-sme-suppliers.html
- **EUDR for traders (2026-12-30 / 2027-06-30):** coolset, tracextech and other EUDR vendors; the simplified regime leaves little work for downstream SMEs. https://tracextech.com/eudr-coffee-importers/

## Gaps in this research

- Asbestos candidate: national notification volume, typical notifications per firm per month, and the presence of any dedicated SME tool are **unverified**. These are the first interview questions.
- Fines for missing asbestos notifications not checked.
- No Capterra or forum complaint evidence retrieved for any candidate. No competitor pricing verified (Reonic, ZEDAL, Winestro and FarmAct do not publish prices in the search summaries).
- Not screened: customs brokers (ATLAS/ICS2 specifically), midwives (new midwifery-care contract billing), driving schools, elevator inspection bodies (usually TÜV/DEKRA, so enterprise).

## Pass history

- **First pass (2026-10-04):** about 14 searches. Opportunities: PPWR 5, heating/PV installer dossier 4, grease separator 3, supplier evidence hub 3.
- **Deep pass (2026-10-05, this file):** about 56 more searches, mostly German.
  - Screened about 20 more industries: asbestos/GefStoffV, pesticide e-records, wine register (new WeinÜV), EBV, subcontractor compliance, Kita reporting, tourist tax, HKVO metering, security register, dental labs, pharmacies, water utilities, fire safety, pest control, livestock labelling, coffee, CBAM.
  - Changes:
    - (a) Added **Asbestos Job Pack** (5/10) as the new top German candidate.
    - (b) **Rejected** the heating/PV installer idea after finding Reonic's built-in grid-registration and KfW service; verified the KfW 458 changes of 2026-07-21.
    - (c) Cut **PPWR** from 5 to 4 after verifying more competitors (osapiens, Händlerbund, tacto, dpp-tool) and suppliers' own declarations.
    - (d) Moved the **supplier evidence hub** to "too competitive", since the VSME cap was confirmed and reduces the pain.
    - (e) Added a niche **non-farm pesticide records** idea (3/10).
    - (f) Documented new negative findings for wine, EBV, subcontractors, Kita and tourist tax.
