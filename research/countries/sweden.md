# Sweden - research report (2026-10-05)

Method note: 6 web searches only (budget-limited), WebFetch unavailable. Evidence is from search summaries, not full reads of the primary documents. Competitor diligence is thin; unverified items are marked. Sweden is an accessible market (EU, no sanctions, BankID/Swish/Klarna rails; no foreign-seller licensing barrier identified).

## Industries screened

| Industry | Workflow | Verdict | Reason |
|---|---|---|---|
| Commercial waste / spent cooking fat (restaurants, retail, haulers, grease collectors) | Waste handling and reporting after 1 Jul 2026 responsibility shift | Candidate (opportunity 1) | New law, more actors must report statistics to Naturvardsverket |
| Producer responsibility (packaging, batteries) | EPR registration and reporting | Too competitive | PROs (e.g. ERP, others) and compliance vendors serve it |
| Construction / restaurants / hairdressers / car services | Personalliggare (staff register) | Candidate, weak | Mandatory electronic; many approved vendors exist (unverified list) |
| Customs importers/exporters | Tullverket CCI phase 2 (1 Sep 2026), end of EUR 150 duty relief (1 Jul 2026), EIDR | Candidate (opportunity 2) | Change for small importers, but incumbent customs software/brokers |
| Bookkeeping / SMEs | Skatteverket online audit access from 1 Apr 2026; K2/K3 changes; ViDA e-invoicing inquiry | Too competitive | Fortnox, Visma, Björn Lundén dominate |
| HR / employers | Pay transparency (postponed to 1 Jan 2027; first report May 2028) | Poor fit | Mostly firms >100 staff, HR suites cover it, annual |
| Building contractors | Boverket klimatdeklaration (since 2022) | Rejected | Already a mature workflow with existing tools (unverified specifics) |

## Opportunities

### Opportunity: Verksamhetsavfall Reporter (commercial waste and used-cooking-fat records and statistics)

**Industry:**
Waste management / hospitality and retail waste

**Buyer:**
Small and mid-size waste collectors and grease/cooking-oil collectors; secondarily restaurant and retail chains that now arrange their own waste handling.

**Trigger / Why now:**
From 1 July 2026 waste producers themselves take responsibility for municipal-type waste from retail, spent cooking fat and used office paper from businesses; municipalities keep only a secondary responsibility. More actors than municipalities must now submit collected/treated quantity statistics to Naturvardsverket (municipal deadline is 30 June annually). Local authorities are running waste supervision projects in 2026.

**Current workflow:**
1. Haulers collect from many small customers and record weights/fractions in own systems, paper slips or Excel.
2. Contracts and handover documents are assembled per customer.
3. Annual/periodic quantities per fraction and treatment route are compiled manually for Naturvardsverket and for supervision by the municipal environment office.

**Pain:**
New reporting duty for actors who never reported before (inferred from Naturvardsverket text). Actual pain level and form of reporting for private actors unverified.

**Existing solutions:**
Municipal waste companies' own systems; waste-industry ERP/route systems (names unverified); Avfall Sverige guidance; consultants. Not diligenced.

**The gap:**
Unverified: likely a lightweight record-and-report tool for small private collectors and self-responsible businesses.

**Possible product:**
Collection-record to statistics-report tool mapping fractions and treatment routes to the required Naturvardsverket format, plus customer-facing handover documents.

**MVP:**
CSV/photo-slip import, per-fraction quantity aggregation, export in the reporting format.

**Pricing hypothesis:**
SEK 500-1,500/month per collector (estimate).

**How to find first customers:**
Municipal and Naturvardsverket lists of registered waste transporters; Avfall Sverige and Svensk Avfallshantering member lists; restaurant trade bodies.

**Risks:**
Reporting format and who exactly must report is unclear; the market may be only a few hundred actors; incumbents may add a module.

**Kill condition:**
Naturvardsverket reporting is covered by an existing free portal or private collectors are not actually obliged to report.

**Score:** 4/10

**Sources:**
- https://www.naturvardsverket.se/amnesomraden/avfall/reformering-av-avfallslagstiftningen-for-okad-materialatervinning/
- https://www.naturvardsverket.se/vagledning-och-stod/avfall/kommunalt-avfall/att-lamna-uppgifter-om-kommunalt-avfall/
- https://www.avfallsverige.se/media/ovnibjat/pm-nr-6-2026-avreglerat-avfall.pdf
- https://koping.se/foretagare--naringsliv/upphandling-tillstand-och-tillsyn/tillstand-regler-och-tillsyn/avfallstillsyn-projekt-2026.html

### Opportunity: Small-importer customs change helper (CCI phase 2 / low-value parcels)

**Industry:**
Import/export, e-commerce importers

**Buyer:**
Small e-commerce importers and small customs agents.

**Trigger / Why now:**
Duty relief for goods of EUR 150 or less removed 1 July 2026 (interim flat EUR 3 per parcel); Tullverket CCI part 2 (simplified/supplementary declarations, entry in declarant's records) in Sweden 1 Sept 2026; EIDR for export since 26 Feb 2026; NCTS-P6 since Feb 2026.

**Current workflow:**
1. Importer or broker assembles invoice and HS data per shipment.
2. Declaration is submitted via broker or system-to-system.
3. Supplementary declarations and records are reconciled manually.

**Pain:**
Change-driven, but evidence of small-firm pain not found.

**Existing solutions:**
Descartes and other customs software, customs brokers, freight forwarders (all unverified depth).

**The gap:**
Unverified; likely none exploitable without Tullverket system-to-system access.

**Possible product:**
Reconciliation/records tool for declarant records.

**MVP:**
Import broker statements, reconcile with accounting.

**Pricing hypothesis:**
SEK 500-1,000/month (estimate).

**How to find first customers:**
Tullverket-registered declarants; Svensk Handel members.

**Risks:**
Access to Tullverket APIs requires certification; brokers dominate.

**Kill condition:**
Brokers/ERP modules already cover declarant records.

**Score:** 3/10

**Sources:**
- https://www.tullverket.se/en/startpage/business/infocus/futuredevelopmentsinthecustomsspace/timeline/2026.4.7822c36919518484893553bc.html
- https://tullverket.se/en/startpage/business/infocus/futuredevelopmentsinthecustomsarea.4.7822c36919518484893550ed.html

## Rejected after competitor research
- Skatteverket remote audit readiness / SME bookkeeping compliance: Fortnox, Visma, Björn Lundén dominate (their market position is general knowledge, not searched).
- Personalliggare: mandatory and ~20% of inspected firms have deficiencies (2024), but approved electronic register vendors already exist (not named/verified here); proposals to require electronic registers in all sectors would favour incumbents.
- Pay transparency: delayed to 1 Jan 2027, reporting only for >100 employees, served by HR suites.

## Attractive problem, poor distribution
- Personalliggare for tiny hairdressers/restaurants: large count of buyers but low willingness to pay and crowded by POS/time-tracking vendors.

## Too competitive
- Bookkeeping/e-invoicing/ViDA tooling; packaging and battery EPR compliance.

## Inaccessible markets
None. Overall: Sweden is a digitised, well-served market; best lead is the July 2026 waste reform, needing customer interviews to confirm real reporting obligations.

Sources (general): https://1office.co/blog/doing-business-in-sweden-2026-legislative-changes/ ; https://techsverige.se/en/2026/03/sverige-skjuter-upp-genomforandet-av-lonetransparensdirektivet-valkommet-besked/ ; https://www.realtid.se/juridik/vart-fjarde-byggforetag-bryter-mot-lagen/ ; https://www.naturvardsverket.se/en/guidance/extended-producer-responsibility-epr/packaging-and-packaging-waste-regulation-ppwr/packaging-producer--what-applies-to-you/
