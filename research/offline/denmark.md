# Denmark: offline / quiet industries pass

Date: 2026-10-05. Searches used: 19 of 40. An API session limit cut the run short, so this is a
short, honest report. Rows marked "desk only" were not searched in this pass and are not evidence.

Context: Denmark is one of the most digitised administrations in the world (MitID, virk.dk, NemKonto,
eIndkomst). Most "quiet" obligations are already filed in a state portal, so the classic
"paper register + counter filing" pattern is rare. Where pain exists, it is usually "one job → several
public receivers" or "new risk-documentation duty for volunteer-run bodies", and trade associations
already provide the tooling.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Second-hand dealers, pawnbrokers, bike/car-part/gold buyers | Police licence (bevilling) under the new Act on trade in used goods (L54 2024/25, in force 1 Jan 2025; BEK 1497 of 10/12/2024); duty to investigate goods and report to police | Licence applied for by form to police. The new act **abolished authorised business books (protokol)** and the fixed-premises rule | Not found (police do not publish a count in results seen) | Reject | Deregulation, not a new duty. The paper register went away and no recurring filing replaced it |
| Scrap metal dealers | Covered by the same used-goods act where relevant; no Danish cash ban found (results were Swedish proposals only) | — | Unknown | Reject | No Danish-specific recurring report found |
| Well drillers (brøndborere) | Municipal permit/notification per borehole; A/B certificate; digital report to GEUS Jupiter within 3 months; soil samples + boring report to GEUS; separate closure report | Samples physically sent; per-job reporting split between municipality and GEUS; Lovguiden lists enforcement practice for the trade | Not verified (estimate: low hundreds of certified drillers/firms) | **Weak opportunity** | Clean "one job, many receivers" pattern, but small market and GEUS provides free entry tools |
| Small public waterworks (almene vandværker, often volunteer boards) | New BEK 1271/2025 on quality assurance of water supply systems: risk-based management from source to tap, competence requirements; first risk assessment/risk management due **12 Jan 2029**, revised every ≤6 years; annual control sampling; reporting to Jupiter | Danske Vandværker offers a **downloadable paper management system for small works**; municipal inspection reports (e.g. Randers) | Not verified in this pass (commonly cited ~2,000+ small works; estimate) | **Weak opportunity / likely too competitive** | Real new duty, but the association's own system (Tethys) and consultants already cover it |
| Soil hauliers (vognmænd) and contractors moving soil | Jordflytning notification via JordWeb; political agreement of 28 Jan 2026 adds **registration of all soil moves above a threshold** and a national public IT solution (DKK 17.6m, 2026–2029) | Today: municipal regulations, PDFs, weigh slips; data "in different systems without common standards" (ft.dk) | Unknown | Watch | Trigger is real but the state is building the receiving system; spec and dates not yet set |
| Tattoo studios | Registration with Sikkerhedsstyrelsen; inspections | Register is online | ~572 registered studios (sik.dk tattoo register, Apr 2026) | Reject | One-off registration, tiny market, no recurring filing found |
| Beekeepers | Registration with Fødevarestyrelsen (bee register with disease zones, movement, sales) | Import/export registration can be sent by post | Not found | Reject | Mostly hobbyists; free state register; no money |
| Chimney sweeps | Municipal scheme; KL publishes guideline fees (2026 +4.2%, 2027 table) | Sweeps work under municipal arrangement | Not found | Reject (desk + 1 search) | No liberalisation bill found; fees and workflow set by municipality |
| Households as employers (nannies, au pairs, home help) | Payroll/eIndkomst, holiday pay, ATP; au pair permits via SIRI | Desk only | — | Not screened | Danish payroll bureaus (e.g. Danløn, unverified this pass) likely cover it |
| Livestock traders, animal transport, horse passports | CHR movements, journey logs | Desk only | — | Not screened | SEGES / CHR portal likely dominate (unverified) |
| Fishermen selling own catch, game dealers | First-hand sale and traceability rules | Desk only | — | Not screened | Budget |
| Taxi / driving instructors / private childminders | Licences, taximeter data, municipal approval | Desk only | — | Not screened | Budget |

## 2. Opportunities

### Opportunity: Borehole job router for well drillers (permit → GEUS Jupiter → closure)

**Industry:**
Well drilling (water, geothermal/heat-pump boreholes, environmental/geotechnical borings).

**Buyer:**
Owner of a small well-drilling firm (A/B-certified driller) or the office person who files reports.

**Trigger / Why now:**
No new 2025–2026 trigger found. The pull is structural: growth in ground-source heat-pump and
geotechnical borings (e.g. offshore-wind and emergency-supply borings visible in 2025 municipal permits)
increases job counts. Weak why-now.

**Current workflow:**
1. Apply for municipal permit or notify the municipality before drilling (per borehole, per municipality).
2. Drill; log soil layers, casing, method, coordinates on site (often paper/field notes).
3. Within 3 months, report the boring digitally to GEUS Jupiter and send soil samples plus a copy of the
   boring report to GEUS.
4. Later, report any closure (sløjfning) separately to GEUS within 3 months.

**Pain:**
Per-job, deadline-bound, split across municipality and GEUS; Lovguiden lists practice/enforcement
for the trade. Pain intensity not verified with operators.

**Existing solutions:**
GEUS's own Jupiter reporting interface (free); municipal self-service forms; general field-service
apps; consultants (NIRAS, etc.) on larger jobs. Driller-specific Danish software not verified.

**Offline evidence:**
Physical soil samples must be mailed; field logs are typically paper; no review-site software category
for Danish well drillers was found.

**Offline channel:**
The certification course/exam body for A/B certificates and the drillers' trade association
(name not verified in this pass); municipal permit lists (boretilladelser are published as PDFs on
municipal sites, naming the driller).

**Market count:**
Not verified. Estimate: low hundreds of certified drillers. Must be checked against the certificate
register before any further work.

**The gap:**
A single field record that pre-fills the municipal application, the Jupiter report and the closure report,
with a 3-month deadline tracker per borehole.

**Possible product:**
Mobile borehole log → auto-generated municipal application and Jupiter-ready report, with sample
dispatch checklist and deadlines.

**MVP:**
Web form + PDF/Jupiter field mapping + deadline reminders, for heat-pump borehole drillers only.

**Pricing hypothesis:**
DKK 300–600/month per firm (estimate).

**How to find first customers:**
Scrape driller names from published municipal boring permits; phone outreach.

**Risks:**
Tiny market; GEUS may already offer bulk upload; drillers may outsource to GEUS staff support.

**Kill condition:**
Fewer than ~300 active drilling firms, or GEUS Jupiter already accepts structured file upload that common
tools produce.

**Score:** 3/10 (Pain 4, Frequency 6, Mandatory 9, Fragmentation 5, Competition 6, Gap 4, Access 6,
WTP 3, MVP 7, Distribution 4). Non-local founder: hard; Danish-language phone sales needed.

**Sources:**
- https://admin.geus.dk/Media/638370248539885459/OprettelseAfBoringer.pdf
- https://www.lovguiden.dk/praksisoversigt/branche/broendboring
- https://www.odsherred.dk/media/zm4fxc2o/endelig-boretilladelse-til-20-a-boringer.pdf
- https://aabenraa.dk/media/z5zna1m0/wt-kassoevej-23-6230-roedekro-afgoerelse-om-etablering-af-boringer-til-beredskabssituation.pdf

### Opportunity: 2029 risk-assessment kit for volunteer-run small waterworks

**Industry:**
Small public waterworks (almene vandværker, consumer-owned, volunteer boards).

**Buyer:**
Board chair / operations manager (driftsansvarlig) of a small waterworks; sometimes the municipality's
water council (vandråd).

**Trigger / Why now:**
BEK 1271/2025 (quality assurance of water supply systems), implementing the recast EU Drinking Water
Directive: documented risk-based management of the whole system, competence requirements, first risk
assessment and risk management by 12 Jan 2029, revision every ≤6 years. Danske Vandværker warned of
"large new administrative burdens". Also, from 31 Dec 2026 the EU system for materials in contact with
drinking water starts.

**Current workflow:**
1. Board or volunteer operator keeps a DDS handbook (often the association's downloadable paper
   template) or pays a consultant.
2. Annual control sampling per the municipal control programme (2026–2031 programmes being issued now).
3. Municipal inspection checks documentation; results reported to Jupiter.
4. By 2029: full risk assessment including distribution and climate risks and the state's catchment risk
   assessment.

**Pain:**
Association statements on administrative burden; volunteer boards with limited time; new competence rules.

**Existing solutions:**
Danske Vandværker's **Tethys** digital management system plus its paper system for small works;
Krüger **WaterManager**; consultants (Øllgaard, NIRAS, Renform); DANVA guidance and courses.

**Offline evidence:**
Association explicitly provides a paper system for small works; volunteer boards; inspection reports as
municipal PDFs.

**Offline channel:**
Danske Vandværker regional meetings and courses (it runs events on the new rules), municipal water
councils (vandråd), labs that do control sampling.

**Market count:**
Not verified in this pass (estimate 2,000+ small works; needs Jupiter/MST count).

**The gap:**
Possibly a done-for-you 2029 risk assessment for works too small for consultants. But the association
itself owns the channel and a product, so the gap may be zero.

**Possible product:**
Guided risk-assessment builder pre-filled from Jupiter data and the municipal control programme, output
in the format inspectors expect.

**MVP:**
Questionnaire + Jupiter data pull + generated risk-assessment document.

**Pricing hypothesis:**
DKK 3,000–8,000 one-off plus DKK 1,000–2,000/year (estimate). Buyer pays for a service more readily than
software.

**How to find first customers:**
Jupiter lists of public waterworks; municipal water-council member lists.

**Risks:**
Association already sells Tethys to its members; consultants bundle it; mostly a 6-year cycle.

**Kill condition:**
Tethys (or its paper template) already includes a 2029 risk-assessment module at member pricing.

**Score:** 3/10. Too competitive via the association; a non-local founder can't sell into volunteer boards.

**Sources:**
- https://www.retsinformation.dk/eli/lta/2025/1271/dan/pdf
- https://danskevv.dk/nyheder/dansk-lovforslag-skal-implementere-eus-drikkevandsdirektiv/
- https://www.opkurser.dk/nyheder/miljoeret/nye-regler-for-drikkevandskvalitet-risikostyring-og-teknisk-vandforsyning
- https://vandguiden.dk/artikel/faa-succes-med-dokumenteret-drikkevandssikkerhed/
- https://www.kruger.dk/brancher/vandforsyning/dokumenteret-drikkevandssikkerhed-og-egenkontrol
- https://ollgaard.dk/dds-system-lendemarke-vandvaerk/
- https://danskevv.dk/arrangementer/fysiske/bliv-opdateret-om-de-nye-lovkrav-til-drift-og-hygiejne/

### Opportunity (watch): Per-load soil-move registration for hauliers

**Industry:** Soil hauliers (vognmænd) and earthworks contractors.
**Buyer:** Owner of a small haulage firm; site manager of an earthworks contractor.
**Trigger / Why now:** Broad political agreement on 28 Jan 2026 after the "Den Sorte Svane" soil-fraud
coverage: registration of all soil moves above a threshold across a cadastral boundary, receiving
municipalities to be notified for moves to approved facilities too, tougher penalties, and a national
public IT solution (DKK 17.6m for preparation 2026–2029). From 2026, municipalities charge DKK 954/hour for
soil-move case handling via JordWeb.
**Current workflow:** Notify via JordWeb (per municipality's soil regulation); keep weigh slips and
analyses; drivers hand in paper slips.
**Pain:** Fraud cases and MST guidance (April 2025) show enforcement is rising; data "in different systems
without common standards".
**Existing solutions:** JordWeb (public); fleet/haulage apps; weighbridge systems at receiving facilities.
Danish soil-specific commercial tools not verified.
**Offline evidence:** Paper weigh slips; municipal PDF regulations differ by municipality.
**Offline channel:** Haulier associations (DTL / ITD, unverified as a channel), receiving facilities,
municipal environment departments.
**Market count:** Unknown.
**The gap:** Per-load capture that feeds the future national register. It can't be specified until the
state publishes its IT solution and data standard.
**Possible product / MVP:** Driver app that logs pickup, load, weigh slip and destination per load and
exports to JordWeb/national format.
**Pricing hypothesis:** DKK 100–200/truck/month (estimate).
**How to find first customers:** Receiving-facility customer lists; municipal soil-notification records.
**Risks:** The state builds the capture side itself; incumbent fleet software adds a module.
**Kill condition:** The national solution includes a free driver app, or the threshold excludes small loads.
**Score:** 3/10 (watch; revisit when the bill and the IT specification are published).
**Sources:**
- https://mim.dk/media/qkqhzkzo/endelig-aftaletekst-vedr-jord_28januar2026.pdf
- https://mim.dk/nyheder/pressemeddelelser/2026/januar/ny-politisk-aftale-styrker-kontrol-med-forurenet-jord
- https://dakofa.dk/nyhed/ny-folketingspolitsk-aftale-om-forurenet-jord
- https://mst.dk/media/di1hbswd/vejledende-udtalelse-om-jordflytning-april-2025.pdf
- https://www.ft.dk/samling/20241/almdel/mof/bilag/530/3047064.pdf

## 3. Rejected

- **Second-hand dealers / pawnbrokers:** the new act (in force 1 Jan 2025) *removed* the authorised
  business-book requirement and the fixed-premises rule. What's left is a licence plus a duty to
  investigate and report, with no recurring filing to automate.
  https://politi.dk/drift-af-virksomhed/handel-med-brugte-genstande-og-pantelaanervirksomhed ·
  https://www.retsinformation.dk/eli/lta/2024/1450/pdf
- **Scrap metal:** no Danish cash ban or scrap register found; search results were Swedish proposals.
- **Tattoo studios:** about 572 studios, one-off registration with Sikkerhedsstyrelsen, no recurring
  report. https://pp.sik.dk/tattooregister
- **Beekeepers:** free Fødevarestyrelsen register, mostly hobbyists, no willingness to pay.
- **Chimney sweeps:** municipally organised with KL guideline fees; no liberalisation trigger found.
  https://backoffice.kl.dk/media/ofpnxnk3/kl-vejledende-takster-for-lovpligtig-skorstensfejerarbejde-2026.pdf
- **Small waterworks software:** close to rejected, because Danske Vandværker's Tethys and its paper
  system already serve the segment (kept above only as a service angle).

## 4. Method notes

Worked: Danish-language regulator queries (retsinformation.dk BEK numbers, politi.dk, sik.dk registers,
mim.dk agreements, municipal permit PDFs) found triggers quickly. Lovguiden "praksisoversigt/branche"
pages are a useful index of regulated trades. Didn't work: scrap queries returned Swedish material, and
competitor searches for niche Danish trades returned little. In Denmark the trade association
(Danske Vandværker, KL) is usually both the channel *and* the incumbent tool provider, which kills
most quiet-industry gaps. Household employers, livestock, fishermen, taxi and childminders were not
screened because the run was cut short.
