# Ireland: offline-industries pass (2026-10-05)

Scope: 38 WebSearch calls, no page fetches (WebFetch blocked), so all detail is at search-snippet level. Anything I could not confirm is marked "unverified" or "estimate". The existing country report (`research/countries/ireland.md`) already covers solar PV, pesticide records, fish-buyer e-sales notes, letting, home care, NVPS, childminders, waste hauliers, security and funeral directors. None of those are re-reported here.

Main finding: in Ireland the regulator usually *is* the software. DAFM (agfood.ie / MyAgfood, AIM, the National Fertiliser Database, Central Equine Database), the NTA, the HSE and the GRAI all run free portals, often with APIs that Irish vertical vendors such as Herbst Software already use. The quiet industries that still run on paper are the ones served by **fragmented local bodies**: 31 local authorities, cemetery trusts and parishes. Another paper case is where the regulator **still issues carbonless paper books**, as SFPA does for shellfish registration documents.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | Reason |
|---|---|---|---|---|---|
| Monumental sculptors (headstones) | Per-job headstone permit from each local authority, cemetery trust or parish; annual "approved sculptor" / contractor registration (insurance, tax clearance, Safe Pass) | Word/PDF forms (SDCC, Fingal, Roscommon .doc, Offaly, Laois) emailed or posted. Only Dublin Cemeteries Trust has an online sculptor login | Unverified estimate: 200-400 firms. Limerick publishes an approved list. About 35k deaths a year (estimate) | **Opportunity (weak)** | Fits the "one job, many receiving authorities" pattern. Low fee per job, but no tool targets the sculptor side in Ireland |
| Shellfish harvesters/growers and dispatch centres | SFPA registration document for every batch of live bivalves; digital lot traceability under Reg 2023/2842 since 10 Jan 2026 | Registration Document Books are issued on paper by SFPA port offices | Unverified: a few hundred licensed shellfish operators (BIM count not found) | **Opportunity (weak/niche)** | Paper book plus a new digital-lot duty. Generic EU traceability vendors exist |
| Horse keepers: livery yards, dealers, riding schools | Report equine movements on/off the premises to the Central Equine Database (Equine Herd Profiles, Jul 2026); census; inspections | Done in the free MyAgfood portal. Paper movement records at yards | 22,593 active equine premises (DAFM census report) | **Opportunity (weak)** | New enforced duty, but the state portal is free and there is no known third-party API |
| Household employers (nannies, carers) | Revenue employer registration, PAYE, PRSI, auto-enrolment from 1 Jan 2026 | Families register on ROS themselves or outsource | Unknown | Reject | NannyPayroll.ie (from about EUR 249/yr, per snippet) and NannyPay already sell done-for-you payroll |
| Scrap metal dealers | Waste facility permit/registration (2014 amendment): due diligence and traceability of purchases | Local authority permits | Unknown | Reject | No new trigger. Gaps are unregistered operators, not paperwork. Large yards use weighbridge software |
| Livestock dealers | DAFM dealer/agent approval; AIM movements | Mostly recorded by marts in AIM | 934 licensed dealers and agents (Agriland, Jul 2024) | Reject | Marts and AIM already capture movements; no recurring paperwork left for the dealer |
| Sheep flock keepers | Three-part paper dispatch dockets, flock register | Paper dockets, now replaceable by the free DAFM AIM Services photo app | Tens of thousands of flocks (estimate) | Reject | The state app closes the gap. Herdwatch and others serve farmers |
| Beekeepers | DAFM food business registration (honey) | Paper form posted or emailed to DAFM | Unknown | Reject | One-time and free. Hobbyists with no willingness to pay |
| Dog breeding establishments | Local authority registration (6+ breeding bitches), inspections, records | Per-council registers (Limerick, Kildare, Fingal) | Hundreds (estimate from council lists) | Reject | Small, annual, reputationally sensitive buyers. Welfare groups, not software, drive the issue |
| Small abattoirs / LA-supervised meat plants | Kill records, AIM, veterinary supervision; move to a single national vet service | Local authority vets | 173 LA-supervised abattoirs; about 500 small food businesses | Reject | Too few. Kill data already goes to AIM. Supervision is changing hands, not paperwork |
| Fertiliser merchants | Record every consignment to the National Fertiliser Database (since Sep 2023) | Manual entry on agfood.ie is the fallback | Not found | Reject | Herbst Software offers an API upload. No new trigger |
| Solid fuel retailers / firewood producers | EPA fuel register (producers re-register by 1 Sep yearly); retailers keep invoices showing producer registration numbers; EUDR covers firewood | Paper invoices; EPA PDF form | Not found | Reject | Annual, low value. Small EUDR primary operators get a one-time simplified declaration |
| Casual / market traders | Per-council casual trading licence (2026 bye-laws) | Moving online (Galway, SDCC say online only) | Not found | Reject | Annual, cheap, councils already online |
| Taxi / hackney (SPSV) | Annual NTA licence renewal, NCT, tax clearance, driver-vehicle link | Phone booking line for inspections | 27,891 licensed drivers (end-2025) | Reject | Annual. Free Now/Bolt and accountants already reach drivers |
| Tobacco/vape retailers | HSE licence per premises from 2 Feb 2026 (EUR 1,000-1,800/yr) | HSE application | Not found | Reject | Annual fee and a one-off application. EPOS vendors cover age checks |
| Independent bookmakers | GRAI in-person betting licence required from 1 Dec 2026; ongoing obligations | Law-firm-led applications | 721 betting shops (2025), mostly chains | Reject | Too few independents. Lawyers and the IBA already handle it |
| Registered gas installers | Declaration of Conformance for every gas job (Cert 1/2/3) | Cert books via RGII (digital status unverified) | Not found | Not pursued | Job-sheet apps likely cover it (unverified). No 2026 trigger found |
| Tattoo/piercing studios | None: unregulated in Ireland | n/a | n/a | Reject | No statutory obligation |
| Driving instructors (ADI) | EDT logbook stamping, RSA register | RSA MyEDT portal | ADI register is public (count not captured) | Reject | Portal is state-run. Low willingness to pay |
| Septic tank owners / desludgers | DWWTS inspections (about 1,200+ a year), desludging | LA advisory notices | About 500k systems | Reject | Householder-side duty. Hauliers are covered in the country report |

## 2. Strongest opportunities

### Opportunity: Headstone permit and cemetery-contractor pack for monumental sculptors

**Industry:**
Monumental sculptors / memorial masons (headstone makers and erectors)

**Buyer:**
Owner or office manager of a family-run memorial business, often multi-generational. Typical firms are 2-10 people and many have a yard and showroom.

**Trigger / Why now:**
There is no single regulatory trigger, which is the weakness. Councils keep revising bye-laws and fees: Fingal Burial Ground Bye-Laws 2023 add fixed payment notices and permit bans for sculptors who breach procedure; Galway City Cemetery Code of Practice 2023; South Dublin has a 2026 permit form at EUR 490 per headstone. Some councils now require sculptors to be on a "Register of Independent Cemetery Contractors" with insurance, tax clearance and Safe Pass. This is a "many receiving authorities" pattern without a "why now".

**Current workflow:**
1. The family orders a headstone, and the sculptor collects grave details, the grave owner's signature and proof of right of burial.
2. The sculptor downloads that cemetery owner's form (31 local authorities, Dublin Cemeteries Trust, and many parish or religious cemeteries). Formats include Word, PDF or the DCT online login.
3. The sculptor draws a sketch with dimensions and inscription and checks local height and material rules (e.g. a 1.2 m cap, with Celtic-cross exceptions).
4. The sculptor attaches insurance, tax clearance and Safe Pass copies, then emails or posts the pack and pays a fee that varies by authority (Carlow EUR 61.50, SDCC EUR 490).
5. The sculptor waits for the engineer's approval, books foundation work, installs and signs off. Contractor registration is renewed separately with each authority every year.

**Pain:**
Each authority has its own forms, fees, rules and registration. Errors such as the wrong grave owner, missing documents or an unapproved design mean refusal, remedial costs or permit bans (Fingal bye-laws). This is evidenced by official forms; there is no direct operator complaint found, so pain level is unverified.

**Existing solutions:**
- PlotBox Memorial Mason Portal (Ballymena). It is a cemetery-side system, and its Irish contracts found so far are in Northern Ireland (Mid and East Antrim). No Republic of Ireland county council contract was found.
- Dublin Cemeteries Trust's own online sculptor login.
- Council Word/PDF forms plus email.
- UK masonry business software (not verified for Ireland).

**Offline evidence:**
Councils publish .doc and PDF forms (Roscommon, Offaly, Laois, SDCC, Fingal) for submission by email or post. The firms market themselves as "5th-8th generation" family businesses. No Irish software listings target memorial masons.

**Offline channel:**
- Wholesale granite and monument suppliers that deliver to sculptors nationwide (e.g. Murphy Granite & Marble, Cork, sells wholesale "throughout Ireland").
- Council approved-sculptor lists (Limerick publishes one with phone numbers), to phone directly.
- Funeral directors (IAFD member directory), who refer families to sculptors.

**Market count:**
Unverified estimate of 200-400 firms in the Republic, built from approved lists and Golden Pages. No association register was found.

**The gap:**
No tool keeps a sculptor's compliance documents (insurance, tax clearance, Safe Pass) and the rules for each of about 40+ cemetery authorities in one place, then turns one job record into each authority's specific application pack.

**Possible product:**
"One headstone job → the right permit pack for that cemetery." The job record includes a grave-owner e-signature, a sketch and inscription upload, and an auto-filled council form with the correct fee. It also tracks permit status and the renewal dates for each contractor registration.

**MVP:**
Templates for the 10 counties around one launch sculptor, a compliance-document wallet with expiry reminders, and a PDF/Word form filler with email sending. Delivered as a service plus software: we prepare the pack and the sculptor approves it.

**Pricing hypothesis:**
EUR 30-60/month, or EUR 10-15 per permit pack. Willingness to pay is modest. Many owners would pay only for done-for-you pack preparation, not for software.

**How to find first customers:**
Council approved-sculptor lists, granite wholesaler introductions, and calls to firms listed in Golden Pages "headstones".

**Risks:**
Low volume per firm (maybe 50-200 headstones a year). Councils could move to a shared online form (LA eForms) or adopt PlotBox. A non-local founder would struggle: the business is relationship-driven, rural and phone-based, so this needs a local or an Irish partner.

**Kill condition:**
Five sculptor interviews in which permit admin takes under 30 minutes a job and nobody would pay EUR 10 a pack, or evidence that most councils have moved to a common online portal.

**Score:** 4/10

**Sources:**
- https://www.sdcc.ie/en/services/environment/burial-grounds/application-for-headstone-permit-2026.pdf
- https://fingal.ie/sites/default/files/2023-11/Headstone%20Application%20Form.pdf
- https://www.roscommoncoco.ie/en/services/burial_grounds/burial-grounds/headstone-permit-application-2024.doc
- https://carlow.ie/environment/burials-and-cremations/headstone-erection-licence
- https://www.galwaycity.ie/sites/default/files/2025-03/Galway%20City%20Council%20Cemeteries%20-%20Code%20of%20Practice%202023.pdf
- https://www.dctrust.ie/sites/admin/plugins/elfinder/files/dct/PDF%20Uploads/DCT_MON_SCULPTORS_Policy_and_Appl_Procedure_V4.pdf
- https://www.limerick.ie/sites/default/files/media/documents/2024-07/2024-06-21-list-of-approved-monumental-sculptors.pdf
- https://www.leitrim.ie/Council/Services/Planning-Building/Headstones/
- https://plotbox.com/portal-for-memorial-masons
- https://www.newsletter.co.uk/business/global-technology-firm-transformingcemetery-mapping-939736
- https://murphygranite.ie/

### Opportunity: Shellfish batch documents and digital lot records for small shellfish harvesters

**Industry:**
Shellfish aquaculture and wild harvest of live bivalve molluscs (oysters, mussels, clams, cockles), plus the dispatch centres they supply.

**Buyer:**
Owner-operator of an oyster or mussel farm, or a registered gatherer. As a second buyer, small dispatch/purification centres.

**Trigger / Why now:**
Commission Delegated Reg 2025/1766 and Implementing Reg 2025/2196 under the revised Fisheries Control Regulation 2023/2842 entered into force on 10 Jan 2026. Lot information for fresh and frozen fishery and aquaculture products must be recorded and passed digitally to the next operator and to authorities, including the aquaculture production unit number. SFPA has also reminded harvesters to register as food business operators.

**Current workflow:**
1. The harvester fills in a paper Shellfish Registration Document from an SFPA-issued book for each batch: date, quantity, production area and classification, gatherer details.
2. The paper copy travels with the batch to the dispatch or purification centre. Copies are kept.
3. The harvester checks the production-area classification (annual SFPA list) and biotoxin/closure status.
4. Since Jan 2026, lot data must also be available digitally downstream. Small operators probably re-key it into spreadsheets or a buyer's system (unverified).

**Pain:**
Per-batch paper plus a new digital duty, with no evidence of tooling for the smallest operators. SFPA enforcement in fisheries is active, but no prosecution specific to shellfish documents was found.

**Existing solutions:**
- SFPA paper Registration Document Books.
- Generic EU seafood traceability vendors: osapiens, agritrack.io and TransGenie all market Reg 2023/2842 compliance.
- Dispatch-centre or processor systems, which are unverified.
- The free FishingNet portal, which covers sales notes for buyers but not batch registration documents.

**Offline evidence:**
The documents are carbonless paper books collected at SFPA port offices. Operators are coastal and family-run. No Irish software listing targets shellfish growers.

**Offline channel:**
- BIM shellfish workshops and regional officers. BIM has presented on registration documents (Gary McCoy, SFPA, at a BIM event).
- The IFA Aquaculture section.
- Dispatch centres, which would push their supplying harvesters onto one format.

**Market count:**
Not verified. Licensed shellfish operators probably number in the low hundreds (estimate). SFPA reviewed 139 production-area classifications in 2026.

**The gap:**
A phone-first batch record that prints or shares the SFPA registration document, and passes the 2023/2842 lot data digitally to the dispatch centre in one step. Generic vendors aim at processors and fleets, not two-person oyster farms. Unknown: whether SFPA accepts electronic registration documents.

**Possible product:**
A mobile app for the harvester: record a batch, auto-check the area classification, generate the registration document and a digital lot (QR or CSV) for the dispatch centre. The dispatch centre gets a dashboard of inbound lots.

**MVP:**
A web form that produces a PDF registration document plus a lot JSON/CSV, pilot-tested with one dispatch centre and its 5-10 harvesters.

**Pricing hypothesis:**
EUR 15-30/month per harvester, or EUR 100-250/month per dispatch centre that onboards its suppliers. A dispatch centre is the more likely payer.

**How to find first customers:**
The SFPA list of approved dispatch/purification centres (unverified as public), BIM regional officers and the IFA Aquaculture section.

**Risks:**
A small market. SFPA may require its own paper books or build a state app, as DAFM did for sheep. Generic vendors could add a "small producer" tier. A non-local founder could reach dispatch centres by email, but harvesters need on-site visits.

**Kill condition:**
SFPA confirms that only its paper book is valid and that 2023/2842 lot data can stay on paper for small primary producers, or dispatch centres say they already capture everything.

**Score:** 3/10

**Sources:**
- https://www.sfpa.ie/Who-We-Are/News/Details/sfpa-issues-guidance-on-new-eu-fisheries-control-rules-effective-january-2026
- https://bim.ie/wp-content/uploads/2023/05/7.Intermediatory-Operator_Gary-McCoy-SFPA.pdf
- https://www.fsai.ie/getmedia/c8f4d945-b1ee-4cb5-a906-f6546b0339ab/shellfish-monitoring-programme-code-of-practice.pdf
- https://www.sfpa.ie/Who-We-Are/News/Details/sea-fisheries-protection-authority-publishes-food-safety-information-notice-registration-of-shellfish-harvesters-as-food-business-operators
- https://afloat.ie/port-news/fishing/sfpa/item/73217-annual-list-for-commercial-shellfish-production-areas-published-by-sfpa
- https://marketac.eu/wp-content/uploads/2024/12/DG-MARE-Presentation-Traceability-of-Fresh-and-Frozen-Products.pdf
- https://osapiens.com/en/regulations/eu-fisheries-control-regulation
- https://agritrack.io/eu-fisheries-control-regulation/
- https://www.transgenie.io/eu-seafood-traceability-requirements

### Opportunity: Equine movement register for livery yards, dealers and riding schools

**Industry:**
Equine establishments with frequent turnover of horses: livery yards, dealers, riding schools, pre-training and sales consignors.

**Buyer:**
Yard owner or manager.

**Trigger / Why now:**
Equine Herd Profiles and the Central Equine Database launched in July 2026 under the Wall Report action plan (March 2025). Operators must report every equine movement on or off their EPRN. Without an up-to-date profile they cannot sell, export or get grants. Non-responders to the census have their EPRN deactivated. DAFM inspectors started visits in 2026 and every establishment will be visited over the coming years. Sanctions are Single Farm Payment penalties, or fixed payment notices and prosecution for urban owners.

**Current workflow:**
1. A horse arrives or leaves (livery, sale, loan, schooling).
2. The yard keeps a paper or Excel diary of who is on the yard.
3. Someone logs into MyAgfood and keys each movement by UELN, from and to EPRN, and date.
4. The yard reconciles its herd profile before the annual census (31 Jul - 14 Aug).

**Pain:**
Liveries come and go often, and owners and yards disagree about who reports what. The duty is new and the state has signalled enforcement. Volume is unverified.

**Existing solutions:**
- MyAgfood (free, state-run).
- General yard-management apps; the UK-origin ones were not verified for Irish integration.
- Paper diaries.
- Horse Sport Ireland and Weatherbys passport-issuing bodies, for registrations rather than movements.

**Offline evidence:**
The census return rate was only 78%. DAFM sends inspectors to "engage and educate", which signals poor digital uptake. Many keepers are farmers or hobbyists.

**Offline channel:**
- Sales companies (Goresbridge, Irish Horse Board Co-op sales) and their consignor lists.
- Riding-school bodies (AIRE, unverified as a channel).
- Equine vets and farriers.
- Irish Field advertising.

**Market count:**
22,593 active equine premises and 120,912 equines (DAFM census report). Only a minority are busy yards, perhaps 1,000-2,000 (estimate).

**The gap:**
A yard-level roster that knows who is on site and prepares or queues the MyAgfood movements. Without a DAFM API the "submit" step stays manual, so the value is mostly the record-keeping that inspectors expect.

**Possible product:**
A yard register (horses, owners, passports, arrival and departure dates). It produces the movement list ready to enter, sends census reminders, and gives an inspection-ready export.

**MVP:**
A mobile check-in/check-out log by UELN with a weekly "movements to report" digest.

**Pricing hypothesis:**
EUR 10-25/month per yard. Willingness to pay is low, and it is mainly protection against inspection.

**How to find first customers:**
Sales-company consignor lists, livery yard directories and riding school association listings.

**Risks:**
MyAgfood is free and good enough. There is no API. The market is hobby-heavy. A local presence would be required.

**Kill condition:**
DAFM has no third-party API on its roadmap, and yards report fewer than 5 movements a month.

**Score:** 3/10

**Sources:**
- https://www.gov.ie/en/department-of-agriculture-food-and-the-marine/press-releases/minister-heydon-launches-new-equine-herd-profiles-and-equine-census-2026/
- https://www.agriland.ie/farming-news/minister-launches-new-equine-herd-profiles-and-2026-census/
- https://www.irishexaminer.com/farming/arid-41891335.html
- https://www.gov.ie/en/department-of-agriculture-food-and-the-marine/press-releases/minister-heydon-says-equine-census-report-provides-most-accurate-picture-yet-of-irelands-horse-population
- https://www.theirishfield.ie/horse-and-farm-management/general/department-launches-new-equine-tracking-measures-925248
- https://www.agriland.ie/farming-news/rules-on-horse-traceability-aligned-north-and-south-of-border/

## 3. Rejected

- **Household-employer payroll (nannies, carers, auto-enrolment 2026):** NannyPayroll.ie and NannyPay already sell done-for-you payroll. Source: https://www.capterra.ie/reviews/31890/nannypay , https://www.hrheadquarters.ie/opinion/staff-advise-why-you-shouldnt-let-tax-worries-put-you-off-getting-childcare-at-home/
- **Fertiliser merchants' National Fertiliser Database returns:** the state offers an API and Herbst Software automates the upload. No new trigger. Source: https://www.herbstsoftware.com/introducing-the-national-fertiliser-database/ , https://assets.gov.ie/236512/8b5487f1-430d-451a-a0b6-86216e0feb34.pdf
- **Scrap metal dealer registers:** the 2014 permit regulations already require traceability. The problem is unregistered operators, not paperwork. Source: https://www.oireachtas.ie/ga/debates/question/2022-02-09/37/
- **Livestock dealers (934) and sheep dispatch dockets:** marts and AIM capture movements, and the free DAFM AIM Services app replaces posting dockets. Source: https://agriland.ie/farming-news/table-number-of-licenced-livestock-dealers-in-each-county , https://teagasc.ie/news--events/daily/new-app-aims-to-simplify-sheep-movements/
- **Solid fuel / firewood producers (EPA register, EUDR):** annual and low value. Small primary operators get a one-time EUDR declaration. Source: https://epa.ie/our-services/licensing/air/solid-fuel-regulations
- **Tobacco/vape retail licence (from Feb 2026):** an annual application and fee, not a workflow. Source: https://www.lawsociety.ie/gazette/top-stories/2025/january/retailers-face-annual-tobacco-licence-fees/
- **Independent bookmakers (GRAI in-person licence, Dec 2026):** only 721 shops, mostly chains. Law firms handle applications. Source: https://www.irishbookmakersassociation.com/retail-bookmakers-licence-in-ireland/
- **Taxi/SPSV (27,891 drivers):** annual renewals, a phone booking line, and low willingness to pay. Source: https://dublinpeople.com/news/dublin/articles/2026/08/31/nta-research-reveals-growing-taxi-sector/
- **Casual traders:** councils are moving to online-only annual applications. Source: https://www.galwaycity.ie/ga/node/2192
- **Small abattoirs (173):** too few. Kill data already goes to AIM. Source: https://www.oireachtas.ie/en/debates/question/2024-04-25/70/
- **Tattoo studios:** no statutory regulation in Ireland. Source: https://www.limerickleader.ie/news/limerick-td-pushes-for-tattoo-parlour-regulation-8140381
- **Dog breeders, beekeepers, driving instructors, septic owners:** annual or one-off duties, state portals, or no willingness to pay.

## 4. Method notes

- What worked: council PDF and .doc forms (search "<thing> application form council"), DAFM press releases for new 2026 duties (equine), SFPA notices, and Oireachtas PQs for counts.
- What didn't: industry-count queries (sculptors, shellfish operators, fertiliser merchants, AML art dealers) returned nothing usable, so counts need CSO NACE data or registers fetched directly. Irish-language queries were not needed because all sources are in English.
- Pattern for Ireland: DAFM and the other national regulators already digitise centrally, and Irish vertical vendors such as Herbst follow fast. Offline gaps survive only where many local bodies each run their own paper process (cemeteries, casual trading) or where the regulator still issues paper books (SFPA).
- Northern Ireland is a natural extension for every lead, since equine rules are aligned all-island and PlotBox is based there.

Research model: Opus
