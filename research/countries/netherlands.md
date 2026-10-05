# Netherlands: opportunity research (deep pass, 2026-10-05)

Method note: deep pass with 54 web searches (Dutch and English), no page fetches (WebFetch blocked). Competitor diligence is at search-snippet level; anything not shown in a cited source is marked "unverified" or "estimate".
Accessibility: fully open market (EU, iDEAL/SEPA, no sanctions). The practical barriers are a Dutch-language product, eHerkenning/PKIoverheid for government integrations, and very mature vertical SaaS in most sectors.

Headline: the Netherlands is crowded. Most domestic compliance workflows already have incumbent software, and the new 2026–2027 laws (Wtta, truck toll, CBAM, EUDR) drew vendors in within months. The best leads are where **a government system is being switched off or replaced** (asbestos LAVS goes to DSO on 1 Jan 2027) and where **EU-wide digital mandates push manual re-keying onto SMEs** (fish-import CATCH since 10 Jan 2026; DIWASS Annex VII for green-list waste from 1 Jan 2027; electronic spray register from 1 Jan 2027). No lead clears the brief's "build" bar yet. The top two are worth interviews.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Asbestos inventory/removal + housing corporations | LAVS chain-tracking shut down; notifications move to DSO Omgevingsloket; new permit system (incl. "limited" permits for e.g. painters) | **Candidate (moderate)** | Strong trigger, but law still in Eerste Kamer (Sept 2026); Asbestmanager.app and Inspectus already target the gap |
| Seafood importers / cold stores / forwarders | Re-keying paper catch certificates into EU CATCH (TRACES NT), mandatory since 10 Jan 2026 | **Candidate (moderate)** | Documented 50 min to hours per certificate; competitors (UMT Catchflow, Infox, customs brokers) only just emerging; EU-wide |
| Recyclers / scrap & paper traders / waste brokers | EVOA/WSR: DIWASS mandatory 21 May 2026; Annex VII (green list) digital from 1 Jan 2027 | **Candidate (moderate-weak)** | Per-shipment, mandatory, but Travas, RecyclePro, zedal, Pionira, WasteTrade, Evreka already selling DIWASS connections |
| Agricultural contractors (loonwerkers) / growers | EU electronic plant-protection use register mandatory 1 Jan 2027 (NL used the 1-year postponement) | **Candidate (weak)** | Real trigger, but farm management systems (Agrovision, Dacom), Delvano Sprayday, AgroPro, Spotmaster exist; contractor-to-grower data hand-off is the only gap |
| Staffing agencies and hirers (inleners) | Wtta admission system: register Nov–Dec 2026, apply May–Jun 2027, public register 1 Jul 2027, enforcement 1 Jan 2028 | Too competitive | WTTA-Dossier, WTTA-Audit, wttaregister.nl, Wtta Kompas, HYTY, Flexhub, AFAS, GNR software all launched |
| Waste processors (domestic) | Monthly LMA receipt notifications via AMICE | Rejected | Long-standing duty (not new); weighbridge/waste ERP already reports (vendor names unverified) |
| Livestock manure intermediaries | rVDM real-time manure transport reporting via e-CertNL | Rejected | Live since 1 Jan 2023; BMS vendors integrated via RVO web services |
| Veterinarians | Antibiotic-use reporting extended to horses/sheep (2027), dogs/cats (2030) | Too early | SDa still designing the method; collection will likely run through practice software vendors |
| Youth care / Wmo providers | iJw/iWmo messages, per-municipality product codes | Too competitive | Mature ECD/billing vendor market (e.g. Sherpa automates iWmo/iJw); VECOZO/GGK standardised |
| Funeral directors | Digital death notification to municipalities | Poor distribution | VNG/KING + BGNU central eHerkenning form; the state is closing the gap |
| Construction installers | Wkb consumer dossier | Too competitive / uncertain | DiviD and quality assurers' tools; Wkb under evaluation (June 2026 letter), expansion undecided |
| Road haulage | Vrachtwagenheffing (truck toll, live 1 Jul 2026) cost pass-through per trip | Too competitive | OBU providers + TMS vendors (e.g. Adaption IT) + free calculators (impargo) |
| Importers of steel/aluminium/fertiliser | CBAM authorised declarant (since 1 Jan 2026) | Too competitive | Dozens of CBAM tools (e.g. Coolset); 50 t de minimis removes most SMEs |
| Cocoa/coffee/timber importers | EUDR due diligence (30 Dec 2026; micro/small 30 Jun 2027) | Too competitive | Crowded traceability SaaS; scope still shifting after the May 2026 simplification review |
| Fisheries (catching sector) | EU control regulation: e-logbook per haul (10 Jan 2026), digital traceability 2029 | Too early / served | E-logbook already state-provided; traceability duty in 2029 |
| Childcare | New direct-funding system (2029), LRK/GIR | Too early | 2029 start; existing childcare software vendors will integrate |
| Landlords / property managers | Wet betaalbare huur: WWS points statement mandatory since 1 Jan 2025 | Too competitive | Free Huurcommissie calculators + many WWS tools; small landlords have low willingness to pay |
| Container rental / movers | Per-municipality APV permits for containers on public roads | Rejected (weak evidence) | Fragmented (342 municipalities), but low value per permit and no evidence of recurring pain |
| Security companies | Wpbr staff permission (Justis/police) | Rejected | No new trigger; screening is per hire, handled by the planning/HR tools |
| Pest control | IPM rodent management + KPMB certification | Rejected | Mandatory since 2023; large players (Rentokil) have their own portals; no new filing |
| Refrigeration / F-gas | Leak-check logbook | Rejected | Free logbooks and existing installer tools; the BRL 200 change affects certification, not filing |
| Transport CSRD / SME e-invoicing / zzp compliance | — | Rejected / too early | CSRD scope cut (Directive (EU) 2026/470); B2B e-invoicing 2030; zzp fines deferred |

## Opportunities

### Opportunity: Post-LAVS Asbestos Chain Dossier and DSO Notification Hub

**Industry:**
Asbestos inventory firms, asbestos removal contractors, final-inspection labs, and their repeat clients (housing corporations, demolition contractors).

**Buyer:**
Owner or project coordinator of certified inventory and removal firms. Second buyer: the asbestos or maintenance coordinator at housing corporations.

**Trigger / Why now:**
- In Feb 2026 the government decided to stop the Landelijk Asbestvolgsysteem (LAVS). From the new rules' start date (planned 1 Jan 2027), asbestos notifications go through the DSO Omgevingsloket.
- The government's own impact note says the DSO is a reporting system, not a chain-tracking system: LAVS information "returns, but not in the same form and context". The hand-offs between inventory, removal and final inspection lose their shared home.
- At the same time a new asbestos permit system comes in (limited/basic/extended permits, training recorded in a "Gezond en Veilig werken met Asbest" register), with 6 months of transition. Limited permits bring in non-specialists such as painters removing window putty.
- Status: passed the Tweede Kamer on 9 Jun 2026; the Eerste Kamer received the government's reply on 3 Sep 2026; the in-force date is set by royal decree (1 Jan 2027 expected, unconfirmed).

**Current workflow:**
1. The inventory firm produces an SC-540 report and today registers it in LAVS.
2. The client or demolisher files a demolition/asbestos notification. Since 16 Feb 2026 the Omgevingsloket form asks extra asbestos questions.
3. The removal firm plans the job and registers start and finish in LAVS. A lab does the final inspection and records it.
4. The housing corporation keeps its own asbestos register per dwelling.
5. From 2027 parties must re-assemble this chain themselves: DSO notification plus private sharing of reports, clearance certificates and waste records. On top come permit and training evidence per worker.

**Pain:**
- An official evaluation found LAVS complex, poorly matched to work processes, and hard to correct.
- The transition costs inspectors months: the Arbeidsinspectie cannot do risk-based inspection until at least 1 Oct 2027.
- Firms must now prove permits and worker training per job.
- Manual-work evidence is inferred from government documents, not from operator interviews (unverified).

**Existing solutions:**
- Asbestmanager.app: explicitly positioned as the "LAVS successor" for property owners, inventory firms and removal firms.
- Inspectus: inventory software that publishes on the LAVS phase-out.
- Other LAVS-linked software (a software-supplier forum exists; names unverified).
- The DSO Omgevingsloket itself (free).
- Generic ERP and planning tools, and consultants.

**The gap:**
- A neutral chain dossier that links SC-540 report, DSO notification, removal job, final clearance and waste per address, shared across separate companies.
- Plus per-job proof of permit category and worker training against the new register.
- The DSO allows third-party submission portals for PKIoverheid-certified software vendors, so a "file once" route is possible but has a high bar.

**Possible product:**
"One asbestos job record": inventory report → DSO notification → removal → clearance → waste, shared with the client and auditable. Permit and training checks per worker are built in.

**MVP:**
- For removal firms: a job dossier that ingests the SC-540 PDF and generates DSO notification data (copy-assist first, no API).
- Tracks worker training and permit validity.
- Exports a clearance package for the client.

**Pricing hypothesis:**
- EUR 150–400/month per removal or inventory firm.
- EUR 0.5–2k/month per housing corporation for the portfolio view (estimate).

**How to find first customers:**
- Ascert register of certified firms.
- Sloopaannemers / VOAM (asbestos removers' association, actively campaigning on LAVS→DSO).
- Aedes (housing corporations, about 280 members, estimate).
- Later, permit holders in the new public register.

**Risks:**
- Law not yet passed by the Eerste Kamer; date may slip.
- Asbestmanager.app and Inspectus already target this exact gap.
- Small core pool (certified firms likely in the low-to-mid hundreds; estimate).
- PKIoverheid/DSO integration cost.

**Kill condition:**
Interviews show firms happily use Asbestmanager.app/Inspectus, or the DSO plus the certification-body portals cover the chain. Or the implementing law is delayed beyond 2027.

**Score:** 5.5/10 (up from 4.5: stronger, dated trigger; down-weighted for live competitors)

**Sources:**
- https://www.rijksoverheid.nl/documenten/2026/02/10/geen-verdere-doorontwikkeling-landelijk-asbestvolgsysteem-lavs-en-borging-meldplichten
- https://omgevingsweb.nl/beleid/overgang-asbestmeldingen-naar-dso-kost-toezicht-maanden-maar-moet-vooral-vertraging-en-extra-kosten-voorkomen/
- https://omgevingsweb.nl/wp-content/uploads/2026/06/Gevolgen-van-de-overgang-van-de-meldplichten-van-het-Landelijk-Asbestvolgsysteem-LAVS-naar-het-Digitaal-Stelsel-Omgevingswet-DSO.pdf
- https://www.rijksoverheid.nl/actueel/nieuws/2026/04/09/veiliger-werken-met-asbest-met-nieuw-vergunningstelsel
- https://www.eerstekamer.nl/wetsvoorstel/36843_implementatiewet_richtlijn
- https://iplo.nl/digitaal-stelsel/storingen-onderhoud-release-informatie/release-informatie/2026/wijzigingen-melding-slopen-asbest-omgevingsloket/
- https://iplo.nl/digitaal-stelsel/vergunningaanvragen-ontvangen-samenwerken/aanvragen-meldingen-ontvangen/
- https://voam.nl/onderwerpen/stopzetten-lavs-en-melden-via-dso/
- https://asbestmanager.app/
- https://inspectus.nl/blog/lavs-wordt-stapsgewijs-uitgefaseerd/

### Opportunity: Catch-Certificate Capture for EU CATCH (Seafood Importers)

**Industry:**
Seafood importers, processors, cold stores and the customs/forwarding agents serving them. The Netherlands (Rotterdam, IJmuiden, Urk) is a major EU entry point; the product is EU-wide.

**Buyer:**
Import or compliance administrator at SME seafood importers. Alternatively, the customs desk of forwarders who process catch certificates for many importers.

**Trigger / Why now:**
Since 10 Jan 2026, importers must submit catch certificates and processing statements through CATCH (TRACES NT). Many flag-state authorities cannot yet issue electronic certificates, so EU operators re-key paper certificates by hand.

**Current workflow:**
1. The exporter sends a scanned or paper catch certificate (plus processing statement) for each consignment.
2. Importer staff re-enter vessel, licence, species, weights, landing and processing data into CATCH field by field, and upload the scans.
3. Staff fix validation errors and answer authority queries. Clearance waits on CATCH acceptance.
4. Forwarders cannot formally act for the importer: there is no delegation mechanism, per CLECAT/FIATA.

**Pain:**
- Industry feedback: about 50 minutes for one simple certificate, several hours for multi-vessel or multi-licence ones.
- Some shipments need "several thousand data entries".
- The cost falls disproportionately on SME importers without compliance teams.
- European seafood sectors call the system "not yet fully technically operational in practice".

**Existing solutions:**
- UMT "Catchflow Agent": AI vision automation for CATCH/TRACES, launched 2026.
- Infox: managed CATCH compliance service.
- Customs brokers offering CATCH handling (e.g. Customswise in Ireland).
- The free CATCH web interface itself, plus a bulk "data upload" option on the exporter side.

**The gap:**
- PDF/scan → validated CATCH data with checks against the commercial invoice and customs declaration.
- Reuse of recurring vessel and licence data.
- A team queue for many consignments.
- The incumbents are new and mostly German/Irish. No Dutch-language offer was found (unverified).

**Possible product:**
Upload the exporter's certificate pack. The tool extracts and validates it against the invoice and packing list, then pre-fills CATCH (API if available, otherwise assisted entry). It keeps a vessel/licence library.

**MVP:**
- Extraction for the 3–5 most common origin-country certificate formats used by Dutch importers.
- Output as a CATCH-ready data sheet or browser-assisted fill.
- Per-consignment audit trail.

**Pricing hypothesis:**
EUR 15–40 per certificate, or EUR 300–1,000/month for SME importers (estimate). Compare with about 1 hour of skilled staff time per certificate.

**How to find first customers:**
- Dutch fish trade federation (Visfederatie) members.
- Urk/IJmuiden importer clusters.
- NVWA-registered fishery establishments.
- Forwarders active in reefer imports at Rotterdam.

**Risks:**
- The Commission may add bulk upload, M2M access or delegation.
- Third countries may move to electronic issuance, which removes the re-keying.
- Machine access to TRACES NT/CATCH for operators is unverified (browser automation is fragile and may breach terms).
- UMT and Infox are ahead.

**Kill condition:**
- The Commission ships operator-side bulk upload or delegation that removes most re-entry.
- Or the share of electronically issued certificates exceeds about 70% for Dutch import flows.
- Or interviews show forwarders absorb the work at no visible cost.

**Score:** 5.5/10

**Sources:**
- https://oceans-and-fisheries.ec.europa.eu/news/new-digital-certification-system-tackle-illegal-fishing-2026-01-12_en
- https://www.fischverband.de/download/grundsatzpapier-catch-in-practice-bridging-regulatory-intent-and-operational-reality-under-regulation-eu-2023-2842
- https://www.clecat.org/positions/customs/clecat-position-on-the-mandatory-implementation-of
- https://fiata.org/n/alert-the-eu-catch-system-will-enter-into-force-on-10-january/
- https://www.customswise.ie/post/guide-eu-catch-catch-certificates
- https://umt.ag/en/umt-launches-ai-based-catchflow-agent-for-automating-eu-catch-documentation-catch/
- https://infox.com/blog/eu-catch-certificate-processing-2026
- https://weareaquaculture.com/news/seafood/european-seafood-sectors-urge-changes-to-eu-fisheries-control-rules
- https://www.rvo.nl/onderwerpen/veranderingen-visserij-2026

### Opportunity: DIWASS Annex VII Filing for Green-List Waste Traders

**Industry:**
Scrap metal, paper, plastics and e-waste recyclers and brokers shipping green-list waste across borders. Busy NL–BE–DE flows and port exports.

**Buyer:**
Logistics or administration manager at SME recyclers, waste brokers and ITAD firms.

**Trigger / Why now:**
- The revised EU Waste Shipment Regulation (2024/1157) applies from 21 May 2026, making DIWASS mandatory. ILT warns that a DIWASS account is required.
- Digital Annex VII (green-list) documents were postponed to 1 Jan 2027. A new Annex VII form and contract template already apply from 21 May 2026.

**Current workflow:**
1. A paper or PDF Annex VII form plus contract accompanies each shipment.
2. Data is typed into the form from the weighbridge or ERP, and carriers are added by hand.
3. From 2027, every shipment must be created and tracked in DIWASS (web GUI or API via the EU data-exchange hub), including carrier changes and receipt confirmation.

**Pain:**
Per-shipment, mandatory, with ILT enforcement. Trade press warns that ITADs and e-waste processors are unprepared. Volume per firm can be tens to hundreds of shipments a month (estimate).

**Existing solutions:**
- Travas (NL–BE shipment tooling).
- RecyclePro: Belgian recycling ERP that emits Annex VII "at the push of a button".
- zedal: German eANV leader, now marketing in Dutch.
- Pionira (BE), WasteTrade, Evreka360 DIWASS.
- The free DIWASS GUI.

**The gap:**
A cheap, light connector for small recyclers whose weighbridge or ERP has no DIWASS connection: import from the weighbridge CSV, a carrier library and API submission. The gap is narrowing quickly.

**Possible product:**
Weighbridge/ERP export → validated DIWASS Annex VII submissions through the API, with a template per recurring customer/route.

**MVP:**
CSV/Excel import + Annex VII template library + DIWASS API submission for one route type (NL→BE/DE scrap/paper).

**Pricing hypothesis:**
EUR 2–5 per shipment or EUR 100–300/month (estimate).

**How to find first customers:**
- ILT/LMA-registered collectors, traders and brokers (VIHB list).
- Members of the metal recycling federation and paper recyclers (association names unverified).
- Recycling Magazine Benelux readership.

**Risks:**
- At least six vendors are already selling.
- Waste ERPs add DIWASS natively.
- The EU API certification and onboarding process is unclear (unverified).

**Kill condition:**
Interviews show most small recyclers' weighbridge/ERP vendors deliver DIWASS by early 2027, or the GUI is "good enough" at their volumes.

**Score:** 5/10

**Sources:**
- https://www.ilent.nl/onderwerpen/afval/afvaltransport-evoa/regels-afvaltransport/herziene-evoa/diwass-voor-internationaal-afvaltransport
- https://www.transport-online.nl/126438/ilt-waarschuwt-transportsector-vanaf-21-mei-diwass-account-verplicht-voor-internationaal-afvaltransport/
- https://www.recyclingmagazine.nl/nieuws/business/diwass-registratie-voor-transport-groene-lijst-afvalstoffen-uitgesteld/56588/
- https://www.ilent.nl/onderwerpen/afval/afvaltransport-evoa/informatieverplichting-bijlage-vii/toelichting-bijlage-vii-formulier
- https://green-forum.ec.europa.eu/green-business/digital-waste-shipment-system-diwass_en
- https://recyclepro.eu/nieuws/klaar-voor-diwass/
- https://www.zedal.com/nl/kennis/advies-van-deskundigen
- https://en.travas.eu/
- https://circulaire-it.nl/itads-en-e-wasteverwerkers-opgelet-diwass-verplichting-komt-eraan/

### Opportunity: Contractor-to-Grower Spray Record Bridge

**Industry:**
Agricultural contractors (loonbedrijven) that spray crops for growers, and the growers who must hold the register.

**Buyer:**
Office manager or owner of spraying contractors. Cumela has about 2,000 members; only a subset spray.

**Trigger / Why now:**
- EU Implementing Regulation 2023/564: extra register fields from 1 Jan 2026 and an electronic register mandatory from 1 Jan 2027.
- 2027 records must be electronic by 31 Jan 2028. From 2030, data must be electronic within 30 days of use.
- The NVWA will not accept paper registers.
- A draft Dutch amendment makes missing digital spray records fineable, with fines indexed +50%.
- Third parties that apply products must pass the data to their clients "as soon as possible".

**Current workflow:**
1. The contractor sprays and records it on a paper or digital job sheet (AgroPro, Spotmaster).
2. Data reaches the grower by invoice or job sheet, and the grower re-enters it into their farm management system or register.
3. Each grower uses a different system or paper.

**Pain:**
"One job → many clients' registers" re-entry, now fineable. The grower carries the legal duty. Evidence of pain is regulatory, not from interviews (unverified).

**Existing solutions:**
- Farm management systems: Agrovision (NVWA whitepaper), Dacom (3,000+ Benelux clients).
- Delvano Sprayday app.
- AgroPro and Spotmaster (contractor job sheets).
- Sprayer terminal logs. Paper-then-convert remains allowed until 2030.

**The gap:**
A standard hand-off from contractor records to each grower's register or farm management system (export per client in the right format, with approval numbers validated against the Ctgb database). Whether AgroPro/Spotmaster already do this is unverified.

**Possible product:**
Contractor portal that turns job sheets/terminal logs into register-ready records per grower, emailed or pushed to their system, with Ctgb approval and dose checks.

**MVP:**
Upload job CSV/terminal export → per-grower register PDF/CSV + compliance check.

**Pricing hypothesis:**
EUR 50–150/month per contractor (estimate).

**How to find first customers:**
- Cumela member list and its sector sections.
- Agricultural trade fairs.
- Spray-equipment dealers (e.g. Delvano dealers).

**Risks:**
- Incumbent farm management and job-sheet vendors can add an export quickly.
- Paper-then-convert annually lowers urgency until 2030.
- Low price ceiling.

**Kill condition:**
AgroPro/Spotmaster or the main farm management systems already exchange spray records (e.g. via AgroConnect standards), or contractors say growers re-key without complaint.

**Score:** 4.5/10

**Sources:**
- https://www.bpnieuws.nl/article/9786976/elektronisch-register-gebruik-gewasbeschermingsmiddelen-met-een-jaar-uitgesteld/
- https://www.nfofruit.nl/nieuws/verplichte-registratie-gewasbeschermingsmiddelen/
- https://www.stichting-jas.nl/2026/10/papieren-spuitboek-verleden-tijd-vanaf.html
- https://www.bijzonderstrafrecht.nl/home/ontwerpwijziging-regeling-gewasbeschermingsmiddelen-en-biociden-ter-consultatie-boetetarieven-met-vijftig-procent-gendexeerd-en-digitale-spuitregistratie-beboetbaar
- https://www.akkerbouwbedrijf.nl/akkerbouwmachines/veldspuit/delvano-lanceert-app-voor-digitaal-spuitregister/
- https://agrovision.com/wp-content/uploads/2025/02/NL-Whitepaper-Crops-NVWA.pdf
- https://www.cumela.nl/media/1313/download?delta=0
- https://www.potatopro.com/nl/news/2021/why-cropx-acquired-netherland-based-dacom-farm-intelligence

## Rejected after competitor research

- **Wtta staffing compliance (agencies and inleners):** strong trigger (inlener fines up to EUR 90,000 per violation; public register 1 Jul 2027; enforcement 1 Jan 2028). Killed by a vendor rush: WTTA-Dossier, WTTA-Audit, wttaregister.nl, Wtta Kompas, HYTY, Flexhub, plus AFAS/GNR modules. A residual gap may remain for continuous supplier monitoring for inleners, since the register gives no automatic alert. https://flexhub.nl/wtta/ , https://wtta-dossier.nl/ , https://hyty.nl/welke-boetes-riskeer-ik-als-ik-de-wtta-niet-naleef/ , https://www.hrpraktijk.nl/juridisch/wet-en-regelgeving/wtta-weten-we-wel-wie-voor-onze-organisatie-werkt-keuze-externe-leveranciers-wordt-ook-organisatie-en-hr-risico/
- **Manure transport (rVDM):** live since 2023 through e-CertNL, and business management systems are integrated via RVO web services. https://www.rvo.nl/onderwerpen/mest/vervoeren-nederland/dierlijke-mest/rvdm/voorbereiden
- **Truck toll pass-through:** TMS vendors (Adaption IT) and toll calculators (impargo) cover it. https://www.adaption-it.nl/?p=38862
- **CBAM declarant tooling:** crowded (Coolset and many others). https://www.stibbe.com/nl/publications-and-insights/cbam-de-verplichtingen-die-nu-en-straks-gelden-voor-importeurs-van
- **F-gas logbook:** free logbooks and installer tools.
- **Pest control IPM records:** in force since 2023; Rentokil-type portals and field-service tools. https://www.kiwa.com/nl/nl/diensten/certificering/keurmerk-plaagdiermanagement/

## Attractive problem, poor distribution

- **Funeral directors, digital death notification:** 75% time saving in pilots, but VNG/KING and BGNU are building a central eHerkenning form, so the state fixes it. https://www.binnenlandsbestuur.nl/digitaal/rekenkamer/vng-en-king-werken-aan-centrale-aangifte-overlijden
- **Container/hoist permits per municipality:** real fragmentation (each APV differs; e.g. EUR 210 permits plus precario), but low value per permit and no evidence of who would pay. https://zoek.officielebekendmakingen.nl/gmb-2026-224192.html

## Too competitive / too early

- **Wkb consumer dossier:** DiviD, quality assurers' tools. Wkb mid-term evaluation (Arcadis, June 2026 letter) leaves expansion undecided. https://apps.apple.com/nl/app/divid/id971765642 , https://omgevingsweb.nl/wp-content/uploads/2026/05/wkb.pdf
- **Youth care/Wmo billing per municipality:** mature vendor market (e.g. Sherpa). https://www.emerce.nl/wire/sherpa-wisselt-eerste-zorgorganisatie-nederland-zelfstandig-geautomatiseerd-iwmo-ijw-uit-gemeenten
- **EUDR:** application 30 Dec 2026 / 30 Jun 2027; crowded traceability SaaS. https://www.arendt.com/news-insights/news/eudr-simplification-review-published-what-the-2026-package-means-for-in-scope-companies/
- **Veterinary antibiotic reporting (horses/sheep 2027, pets 2030):** too early; the SDa method is undecided. https://www.nieuweoogst.nl/nieuws/2026/03/31/ook-antibioticagebruik-bij-schapen-en-paarden-gemonitord
- **Childcare direct funding:** 2029. https://www.rijksoverheid.nl/actueel/nieuws/2026/09/21/kabinet-zet-belangrijke-stap-naar-nieuwe-financieringsstelsel-kinderopvang
- **Fishery-product traceability (2029) / e-logbook:** too early or state-provided. https://www.rvo.nl/onderwerpen/veranderingen-visserij-2026
- **Rental WWS points statements:** free Huurcommissie tools plus many calculators. https://www.rijksoverheid.nl/onderwerpen/woning-huren/vraag-en-antwoord/maximale-huurverhoging-middenhuur-2026
- **B2B e-invoicing (2030), zzp enforcement (deferred), transport CSRD (scope cut):** as in the first pass. https://www.dlapiper.com/en/insights/publications/indirect-tax-monthly-alert-series/2026/indirect-tax-monthly-alert-march-2026/e-invoicing-and-digital-reporting-in-the-netherlands-current-status-and-what-lies-ahead

## Pass history

- **First pass (2026-10-04):** 9 searches, 2 weak opportunities (asbestos tracker 4.5, Wkb dossier 3.5).
- **Deep pass (2026-10-05):** 54 searches, about 20 industries screened. Changes:
  - **Asbestos:** re-framed around the confirmed LAVS shutdown and move to the DSO (Feb 2026 decision) and the bill's status. Re-scored 4.5 → 5.5. Named live competitors (Asbestmanager.app, Inspectus), replacing the earlier "no vendor identified".
  - **Wkb:** moved to "too competitive / uncertain".
  - **New opportunities:** EU CATCH catch-certificate capture (5.5), DIWASS Annex VII filing (5), contractor spray-record bridge (4.5).
  - **Newly rejected or downgraded:** Wtta (vendor rush), rVDM, truck toll, CBAM, EUDR, pest control, youth care, vet antibiotics, childcare 2029, rental WWS.
  - **Still unverified:** firm counts (asbestos, recyclers, seafood importers), competitor pricing, and operator machine access to CATCH and DIWASS.
