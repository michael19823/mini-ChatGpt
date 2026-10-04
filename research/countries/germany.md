# Germany: country research (as of 2026-10-04)

Method note: about 14 web searches (German and English), WebFetch unavailable. Most evidence is from search summaries, not full-page reads. Germany is accessible to a foreign solo founder (EU, no sanctions, SEPA/Stripe, GDPR applies). Overall conclusion: Germany is a crowded, high-trust, high-vendor-density market. Few clean gaps were found, and scores are modest. Anything not verified is marked.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Packaging producers / brand owners | PPWR declaration of conformity + technical documentation (from 2026-08-12), LUCID reporting | Candidate (competitive) | Hard new trigger, but several PPWR tools already exist |
| Heating / PV installers | KfW "Bestätigung zum Antrag" (BzA), BAFA, grid registration, MaStR, subsidy cuts from 2026-07-21 | Candidate | Multi-portal re-entry per job; incumbents unverified |
| Gastronomy / grease-separator service firms | Fettabscheider Betriebstagebuch, disposal proof, municipal rules | Weak candidate | Municipal fragmentation, but thin evidence of paid pain |
| Mittelstand suppliers | Customer sustainability questionnaires, VSME cap | Weak candidate | Real pain, but vendor-crowded and low urgency |
| EUDR traders (wood, coffee) | Collect supplier DDS reference numbers, from 2026-12-30 (small operators 2027-06-30) | Weak candidate | Simplified regime, delayed, many EUDR vendors |
| Veterinary (horses etc.) | TAMG antibiotic reporting to TAM-DB, first deadline 2027-01-14 | Rejected | Practice software interfaces and CSV upload exist |
| Home-care agencies | SGB XI electronic billing via TI/KIM (Dec 2026 / Oct 2027) | Rejected | Mandatory, but TI-ready billing software is the incumbent core product |
| Craft businesses (all trades) | E-Rechnung issuance (all B2B from 2028-01-01) | Too competitive | Lexware, sevDesk, Billomat, Plancraft, etc. |
| NIS2-covered firms (~30,000) | BSI registration, risk management, incident reporting | Too competitive | Law in force 2025-12-06; many GRC vendors |
| Hazardous waste handlers | eANV Nachweisverfahren | Rejected | Mature software market plus a free state eANV tool |
| Dangerous-goods transport | Gefahrgutbeauftragter annual report | Rejected | Existing dangerous-goods software; annual and low urgency |
| Funeral homes | Death notification to Standesamt | Rejected | Paper/written process, little evidence of an EDRS-style duplicate-entry pain; I found no digital integration to build on |

## Opportunities

### Opportunity: PPWR Compliance File for Small Packaging Brand Owners

**Industry:**  
Packaging / consumer goods manufacturing (SME)

**Buyer:**  
Packaging manager, quality manager or owner of an SME manufacturer, brand owner or importer that places packaging on the EU market.

**Trigger / Why now:**  
PPWR (Regulation (EU) 2025/40) applies from 2026-08-12. Packaging may not be placed on the market without a declaration of conformity backed by technical documentation. Records must be kept 5 years for single-use and 10 years for reusable packaging. LUCID registration and dual-system licensing remain in place.

**Current workflow:**  
1. Collect material composition, substance and recyclability evidence from packaging suppliers (PDFs, emails).
2. Build technical documentation in Excel or Word.
3. Draft and sign a declaration of conformity per packaging type.
4. Separately report quantities in LUCID and to the dual system.
5. Re-do it whenever a packaging spec changes.

**Pain:**  
New mandatory obligation with legal liability on the signer. Suppliers' evidence is scattered. Evidence level: vendor blogs, unverified for actual complaints.

**Existing solutions:**  
tanso, packintelx, dpp-tool, complydex, lizenzero (dual-system and licensing vendor) all publish PPWR DoC content or tools (vendor positioning not verified in depth). Consultancies. Spreadsheet.

**The gap:**  
Unverified. Possibly a cheap, supplier-evidence-collection and per-SKU DoC generator for firms with 20 to 500 packaging SKUs, below enterprise PPWR suites.

**Possible product:**  
Per-SKU packaging file that chases suppliers for evidence, tracks expiry and spec changes, and outputs the DoC and technical file.

**MVP:**  
Supplier request portal plus DoC/technical-file template generator for 3 packaging materials.

**Pricing hypothesis:**  
EUR 79 to 249/month per company.

**How to find first customers:**  
Verpackungsregister LUCID public register (search by brand/producer), industry associations (IK, packaging trade fairs), dual-system partner channels.

**Risks:**  
Secondary legislation and harmonised standards are still incomplete (unverified), so the DoC content may shift. Vendors already active. Possible buyer indifference until enforcement starts.

**Kill condition:**  
Three or more existing SME-priced tools already doing supplier evidence collection, or customer interviews show consultants/ERP already cover it.

**Score:** 5/10

**Sources:**  
- https://www.tanso.de/blog/ppwr-konformitatserklarung-und-technische-dokumentation-was-unternehmen-ab-dem-12-august-2026-vorlegen-mussen  
- https://www.lizenzero.de/blog/die-ppwr-konformitaetserklaerung-was-ihr-jetzt-wissen-solltet/  
- https://www.verpackungsregister.org/hilfe/datenmeldungen-in-lucid  
- https://www.xictron.com/de/blog/verpackungsregister-lucid-pflicht-online-shop-2026/

### Opportunity: Heating/PV Installer "One Job, All Submissions" Dossier

**Industry:**  
Heat-pump and PV installation (SHK and electrical trades)

**Buyer:**  
Owner or office manager of a 3 to 30 person SHK or electrical installer.

**Trigger / Why now:**  
Heating subsidy cuts planned from 2026-07-21 (per search summary; verify). Heating replacement for owner-occupied homes via KfW needs the installer to enter data in a KfW tool to obtain a BzA before work starts. BAFA covers commercial and multi-family buildings. Invoices must carry BAFA-compliant content. All B2B e-invoicing becomes mandatory 2028-01-01.

**Current workflow:**  
1. Survey and quote in craft software.
2. Re-key customer, building and device data into the KfW tool for the BzA.
3. Register the PV or storage unit with the grid operator portal and in the Marktstammdatenregister (MaStR, about 20 to 30 minutes per entry according to one source).
4. Build a compliant invoice and attach documentation (hydraulic balancing etc.).
5. Handle rejections or queries by email.

**Pain:**  
Search results show installers routinely do both registrations as a standard service. Source evidence of installer complaints about grid-portal inconsistency was NOT found; the pain is plausible, not proven.

**Existing solutions:**  
Craft software (Plancraft, Billomat and similar, unverified for subsidy modules), PV design/quoting tools such as Aurora-type tools (unverified), KfW and BAFA portals, large installers' in-house teams, consultants (Energieeffizienz-Experten, about 22,800 listed).

**The gap:**  
Unverified. Possible gap in exceptions: per-grid-operator document packs (there are hundreds of grid operators), and compliance checks before submission.

**Possible product:**  
A checklist and document engine that takes one project record and produces the KfW inputs, grid-operator pack and MaStR data, with rejection tracking.

**MVP:**  
Heat-pump BzA data pack and invoice-content checker for one installer vertical; later add grid operators.

**Pricing hypothesis:**  
EUR 49 to 149/month per installer, or EUR 10 to 25 per project.

**How to find first customers:**  
Handwerkskammer craft directories, Innungen (SHK), KfW/dena expert list, manufacturer installer-partner lists.

**Risks:**  
KfW and grid operators do not offer APIs, so portal automation is fragile or disallowed. Subsidy rules changing. Demand falling if subsidies are cut.

**Kill condition:**  
Interviews show craft software already auto-fills KfW/BAFA/MaStR, or installers outsource the work for a few euros per job.

**Score:** 4/10

**Sources:**  
- https://www.photovoltaik.info/netzanmeldung-pv-anlage-fachbetrieb/  
- https://ema-energiewelt.de/wissen/pv-netzanmeldung-marktstammdatenregister-2026  
- https://www.energie-fachberater.de/news/kuerzungen-heizungsfoerderung.php  
- https://kostenlose-erechnung.de/ratgeber/bafa-rechnung-heizungstausch-pflichtinhalt/  
- https://ema-energiewelt.de/wissen/energieberater-kosten-bafa-foerderung-2026

### Opportunity: Grease-Separator Operator Log and Municipal Proof Pack

**Industry:**  
Gastronomy / food-service grease separators; hauling firms

**Buyer:**  
Grease-separator service and hauling companies (they serve many restaurants), not individual restaurants.

**Trigger / Why now:**  
No new law found. Municipal merkblatt updates (e.g. Regensburg 2026) reflect rules under DIN 4040-100 and DIN EN 1825. This is a standing obligation, not a trigger.

**Current workflow:**  
1. Service visit each 2 to 4 weeks, annual qualified inspection.
2. Paper operating log (Betriebstagebuch) and disposal slip.
3. Operator keeps proof for the municipality, which can request it.

**Pain:**  
Plausible only. No evidence of penalties or complaints found.

**Existing solutions:**  
Paper logs, municipal forms, hauler dispatch/route software (unverified), generic maintenance apps.

**The gap:**  
Unverified. Municipal fragmentation might support a per-municipality proof pack, but I found no evidence municipalities demand digital submission.

**Possible product:**  
Hauler-side app producing the log, disposal proof and municipal report per site.

**MVP:**  
Site register plus visit record, auto-generated PDF log.

**Pricing hypothesis:**  
EUR 59 to 149/month per hauler.

**How to find first customers:**  
Municipal lists of approved disposers, trade association for waste and wastewater (unverified), Entsorgungsfachbetrieb lists.

**Risks:**  
Annual or low-urgency pain, small buyer base, municipalities may not accept electronic evidence.

**Kill condition:**  
No municipality asks for periodic reports, or haulers already use dispatch software with logs.

**Score:** 3/10

**Sources:**  
- https://www.regensburg.de/fm/RBG_INTER1S_VM.a.253.de/r_upload/merkblatt-fettabscheider-2026.pdf  
- https://www.baulinks.de/webplugin/2020/1937.php4

### Opportunity: Supplier Evidence Hub for Mittelstand Suppliers (VSME + EUDR reference numbers)

**Industry:**  
Manufacturing and trading SMEs that are suppliers to large regulated firms

**Buyer:**  
Quality, sustainability or purchasing lead at a 50 to 500 employee supplier or trader.

**Trigger / Why now:**  
CSRD/LkSG trickle-down: large customers send sustainability questionnaires. Per a search summary, the Omnibus package caps what large firms may request from SME suppliers at the VSME standard (verify the legal text). EUDR applies 2026-12-30 (small operators 2027-06-30). Under the simplified regime, SME traders collect and retain supplier DDS reference numbers instead of filing their own.

**Current workflow:**  
1. Receive differing customer questionnaires (Excel, portals).
2. Gather the same data internally and re-enter per customer.
3. For EUDR goods, collect upstream DDS reference numbers by email and store them.

**Pain:**  
A bank survey cited in press suggests nearly half of corporate customers feel overwhelmed (secondary source). No direct hard evidence of hours or penalties.

**Existing solutions:**  
EcoVadis-style platforms and customer portals (unverified here), coolset, integritynext and other EUDR vendors, tanso, consultants, spreadsheets.

**The gap:**  
Unverified. Possibly a lightweight "answer once, export to many customers' formats" tool, but EcoVadis and large vendors may already cover this.

**Possible product:**  
VSME data vault with export to common questionnaire formats and a supplier-DDS reference log.

**MVP:**  
VSME basic-module data capture plus exports into 3 common customer questionnaire templates.

**Pricing hypothesis:**  
EUR 99 to 299/month.

**How to find first customers:**  
IHK member directories, supplier lists published by large firms, trade associations.

**Risks:**  
Regulatory retreat (cuts, delays) reduces urgency. Heavy competition. Generic "compliance questionnaire" is a brief trap.

**Kill condition:**  
Interviews show customers force use of their own portals so no export is wanted, or EcoVadis-type tools are already accepted everywhere.

**Score:** 3/10

**Sources:**  
- https://www.boerse-express.com/news/articles/nachhaltigkeitsberichterstattung-80-der-lieferanten-ohne-risikomanagement-923739  
- https://www.tanso.de/blog/auswirkungen-herausforderungen-und-chancen-der-csrd-fur-den-deutschen-mittelstand  
- https://vinciworks.com/blog/eudr-delayed-again-what-changed-what-is-now-fixed-and-what-businesses-should-do-in-2026/  
- https://www.coolset.com/academy/eudr-frequently-asked-questions

## Rejected after competitor research

- **Veterinary TAMG antibiotic reporting for horses and other new species (deadline 2027-01-14):** killed by practice-software interfaces to HIT, direct TAM-DB entry and CSV/Excel batch upload; official sources say many practice-software vendors already provide interfaces. Source: https://www.antibiotika-tierhaltung.bayern.de/doc/information_tae_ab_meldepflichten_neue_tierarten.pdf
- **Home-care billing via TI/KIM (SGB XI fully electronic from 2026-12-01 per search summary; KIM from 2027-10-01):** killed because care-documentation/billing software must be TI-ready and incumbents are the natural vendors. Sources: https://www.aok.de/gp/fileadmin/user_upload/Pflege/Abrechnung/Telematikinfrastruktur_Pflege.pdf
- **eANV hazardous-waste verification:** killed by established eANV software providers and a free state eANV for low-volume users. Sources: https://www.softguide.de/funktion/elektronisches-abfallnachweisverfahren-eanv
- **Dangerous-goods advisor reporting:** killed by existing dangerous-goods software and low frequency (annual report). Source: https://www.weka.de/gefahrguttransport/jahresbericht-gefahrgutbeauftragter-dl/
- **Funeral-home death registration:** the process is a written notification to the Standesamt with no evident EDRS-style system; no integration pain evidence found. Source: https://fimportal.de/api/v0/xzufi-services/L100040/8669412/de/pdf

## Attractive problem, poor distribution

- Small ambulatory care providers needing TI connection and KIM billing (high pain, but sold via closed vendor channels and associations).
- Grease-separator operators at individual restaurants (huge number, tiny ticket, fragmented).

## Too competitive

- E-Rechnung issuance for craft and small businesses: mandatory for all B2B from 2028-01-01 (over EUR 800,000 prior-year turnover from 2027). Lexware Office, sevDesk, Billomat, Plancraft, Papierkram all reviewed as ready. Sources: https://www.handwerksblatt.de/themen-specials/die-e-rechnung-wird-pflicht-tipps-fuer-handwerksbetriebe/ab-2025-die-elektronische-rechnung-wird-pflicht ; https://www.cleartax.com/de/e-rechnungpflicht-fur-kleinunternehmer
- NIS2 compliance for roughly 30,000 firms (law in force 2025-12-06, BSI registration grace to 2026-07-31): SECJUR and numerous GRC vendors. Sources: https://www.secjur.com/blog/nis2-umsetzung ; https://www.ferner-alsdorf.de/frist-fuer-die-nis-2-registrierung-2026/

## Gaps in this research

- No direct customer-complaint evidence (Capterra/forums) was retrieved for any candidate.
- No competitor pricing verified.
- Not screened: customs brokers (ATLAS), pharmacies, agriculture, fire-safety contractors, small water utilities, private schools, property managers.
