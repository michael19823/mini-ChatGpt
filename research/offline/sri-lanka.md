# Sri Lanka: offline (quiet) industries pass

Date: 2026-10-05. **This is a short, partial report.** The search tool returned a usage-limit
refusal on call 9 of the 20 allowed. Per the instructions, I stopped searching there and wrote up
what I had. Eight searches succeeded. Several seed groups (tea bought-leaf collectors, fisheries
logbooks, excise and toddy licensees, private tuition classes, pre-schools) could not be screened
and are marked "not screened". Nothing below was verified beyond the cited search results. All
counts not taken from a cited source are marked "estimate" or "unverified".

The existing country report (`research/countries/sri-lanka.md`) covers RAMIS e-invoicing, EUDR
rubber traceability and customs pre-arrival approvals. None of those is repeated here.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Gem dealers (NGJA licensees) | Annual NGJA Gem Dealer's Licence. Exports go through NGJA. Customs TIEP scheme registration and renewal for gem and gold-jewellery firms (guidelines posted Sept 2025) | Fees and rules set by gazette under NGJA Act No. 50 of 1993. Customs guidelines are a .docx download | ~6,500 dealer licences in 2023 (search summary, source page not opened, so unverified). >7,500 gem-mining licences issued in a year (The Island) | Weak keep | Many small, family, older operators, but the recurring per-transaction filing burden is unverified |
| Sawmills and timber depots | Registration of Timber Depots and Property Marks Regulation No. 01 of 2014. Per-movement timber transport permits. Tree-felling permits from the Divisional Secretariat | Saw Millers Cluster (Daily FT) says operators must "visit several times" the Divisional Secretariat and the Forest Department for felling, transport and onward permits | Unknown (not found) | Weak keep | Real multi-authority counter pain, but no digital surface for software to plug into |
| Tourist guest houses and homestays | SLTDA registration and annual licence renewal (Tourism Act No. 38 of 2005). Inspection after payment | An e-services portal exists (eservices.sltda.gov.lk). ADB and press report many unregistered homestays. SLTDA set up an Enforcement Unit | Unverified (thousands of unregistered homestays per press) | Weak keep (service) | The obligation is real, but this is a one-time-plus-annual workflow, better served by a done-for-you agent |
| Livestock traders (cattle) | Per-movement transport permit from the District/Divisional Secretary, plus a health certificate from the Government Veterinary Surgeon. Permit valid 3 months. Report new animals to the vet within a week | Animals Act No. 29 of 1958 and the 2009 regulations prescribe paper forms filed at the Divisional Secretariat | Not found | Reject | Traders are poor and fragmented, there is no portal to integrate with, and the permit is often handled informally |
| Pawnbrokers | Licence from the Divisional Secretary plus a cash security deposit (Pawnbrokers Ordinance and provincial statutes, e.g. Western Province) | Licensing sits at Divisional Secretary and provincial level | Not found | Reject | Pawning is dominated by licensed banks and finance companies with core banking systems. Small pawnbrokers are a shrinking tail |
| Scrap metal dealers | Export restrictions on ferrous and non-ferrous scrap, needing Ministry of Industry / IDB approval | No police dealer register was found | Not found | Reject | No recurring domestic register obligation found. Exports are a ban-and-permit regime, so this is a one-off workflow |
| Households employing domestic workers | None mandatory. Verité Research recommends extending EPF/ETF and registration to domestic workers. The national minimum wage rises to Rs 30,000/month from 1 Jan 2026 (Act No. 11 of 2025) | No register exists | Not found | Reject | No legal trigger yet. Revisit if domestic-worker legislation passes |
| Three-wheeler taxis | Fare meters mandatory in Western Province since Jan 2022 (WPRPTA rules) | Enforcement is weak per the press | Not found | Reject | Ride-hailing apps (PickMe, Uber) already digitise the paying segment. The rest of the market resists metering |
| Tea bought-leaf collectors / small factories | (Tea Board registration, presumed) | — | — | Not screened | The search was refused |
| Multi-day fishing vessels (IUU logbooks, catch certificates) | (DFAR, presumed) | — | — | Not screened | The search was refused |
| Excise licensees (toddy, taverns) | (Excise Department, presumed) | — | — | Not screened | The search was refused |

## 2. Strongest opportunities (all weak; none is recommended for building)

### Opportunity: Timber Permit Chain Tracker for Sawmills and Timber Depots

**Industry:**
Sawmills and registered timber depots.

**Buyer:**
The owner-operator of a sawmill or timber depot.

**Trigger / Why now:**
No new 2025–26 trigger was found. Regulation No. 01 of 2014 (timber depot registration and property marks) is the standing obligation. The pain is chronic, not new.

**Current workflow:**
1. Obtain a tree-felling permit at the Divisional Secretariat (private land).
2. Obtain a timber transport permit from the Forest Department or a forest officer for each consignment.
3. Record stock in the depot against property marks.
4. Obtain a further transport permit to move sawn timber to buyers.

**Pain:**
The Saw Millers Cluster (Daily FT) says operators must visit the Divisional Secretariat and the Forest Conservation Department "several times" for the different permits.

**Existing solutions:**
Paper permits and counter visits. Local fixers and agents (unverified). No software found.

**Offline evidence:**
The permits are issued over the counter. No online permit system was found.

**Offline channel:**
The Saw Millers Cluster or association (named in Daily FT), and Forest Department range offices.

**Market count:**
Unknown. The Forest Department's register of timber depots was not found.

**The gap:**
A record linking each log to its felling permit, transport permit, depot stock and outgoing permit, so the depot can pass inspection.

**Possible product:**
A mobile logbook that links permits to stock movements and prints inspection-ready registers.

**MVP:**
A permit and stock ledger with photo capture of paper permits and an expiry tracker.

**Pricing hypothesis:**
LKR 2,000–4,000/month (estimate). Willingness to pay for software is doubtful. A permit-runner service is more likely to sell.

**How to find first customers:**
The sawmillers' cluster or association. Visits to timber-depot clusters.

**Risks:**
The real pain is the authority's counter process, which software cannot remove. Informal payments may substitute for compliance. A non-local solo founder could not sell this, so it needs a Sinhala-speaking local.

**Kill condition:**
Depots say the pain is the queue, not the record-keeping.

**Score:** 3/10

**Sources:**
- https://www.ft.lk/Business/saw-millers-cluster-makes-voice-on-their-business-issues/34-13257
- https://leap.unep.org/en/countries/lk/national-legislation/forest-conservation-registration-timber-depots-and-property-marks
- https://faolex.fao.org/docs/pdf/srl133973.pdf

### Opportunity: Gem Dealer Licence, NGJA Export and TIEP Compliance Desk

**Industry:**
Gem and gold-jewellery dealers and small exporters.

**Buyer:**
The owner of a small licensed gem dealer or exporter, in Ratnapura, Beruwala or Colombo.

**Trigger / Why now:**
Customs posted guidelines for registering and renewing gem and gold-jewellery companies under the TIEP scheme (upload dated Sept 2025). NGJA licence fees are amended by gazette (2021, 2023).

**Current workflow:**
1. Renew the NGJA dealer licence every year.
2. For each export, take the stones to NGJA for assessment and declaration.
3. File the customs declaration (CusDec) through a customs house agent.
4. Register or renew under TIEP and keep its import and re-export records.

**Pain:**
Only inferred. There is no direct complaint evidence (unverified).

**Existing solutions:**
Customs house agents, NGJA counter services and accountants. ASYCUDA (Customs) is the government system.

**Offline evidence:**
The guidelines are a .docx download. Assessment is done in person at NGJA.

**Offline channel:**
The Sri Lanka Gem and Jewellery Association (exists, but member list not checked), and the NGJA gem testing and assessment counters.

**Market count:**
~6,500 dealer licences (2023, per search summary; unverified). The exporter subset is unknown.

**The gap:**
A TIEP ledger that reconciles imported gold and rough stones against re-exported jewellery. This is unverified as a real pain point.

**Possible product:**
A TIEP and export-lot ledger that produces the reconciliation customs expects.

**MVP:**
A spreadsheet-replacing ledger for the TIEP import and re-export balance.

**Pricing hypothesis:**
LKR 5,000–10,000/month for exporters (estimate).

**How to find first customers:**
The NGJA licensee list (if published) and the association member list.

**Risks:**
The exporter count may be small. Trade is cash-based and secretive. Customs house agents already absorb the work. A non-local founder is not realistic.

**Kill condition:**
TIEP gem users number under 200, or customs house agents already do the reconciliation for free.

**Score:** 3.5/10

**Sources:**
- https://www.customs.gov.lk/wp-content/uploads/2025/09/Guidelines-for-registering_-renewal-Gem-_Gold-Jewellery-companies-for-TIEP-scheme.docx
- https://www.documents.gov.lk/view/extra-gazettes/2023/3/2324-33_E.pdf
- https://island.lk/more-than-7500-gem-mining-licences-issued-last-year/
- https://www.srilankabusiness.com/faq/gem-diamond-and-jewellery/exporters/gem-export-procedure.html

### Opportunity: Homestay SLTDA Registration and Renewal Service

**Industry:**
Small guest houses and homestays.

**Buyer:**
A family homestay owner in a tourist zone.

**Trigger / Why now:**
SLTDA has an Enforcement Unit, and ADB is pressing for homestay registration. Renewal is annual.

**Current workflow:**
1. Apply on the SLTDA e-services portal.
2. Pay a Rs 10,000 admin fee.
3. Pass an SLTDA inspection within a month.
4. Renew every year.

**Pain:**
The press reports many homestays operating unregistered.

**Existing solutions:**
The SLTDA portal itself. Local consultants. Booking platforms (which do not require an SLTDA licence).

**Offline evidence:**
Owners are informal, and the document checklist is a PDF.

**Offline channel:**
Tourism-zone homestay associations (unverified) and SLTDA provincial offices.

**Market count:**
Unverified.

**The gap:**
Done-for-you help preparing documents for the inspection.

**Possible product:**
A service that assembles the application documents and prepares the homestay for inspection.

**MVP:**
A checklist and document pack, sold as a service.

**Pricing hypothesis:**
A one-off LKR 15,000–30,000 fee (estimate).

**How to find first customers:**
Listings on Booking.com and Airbnb in Ella, Mirissa and Kandy that lack an SLTDA number.

**Risks:**
This is mostly a one-time workflow, so it falls into a trap the brief warns against. It is a service, not software.

**Kill condition:**
Enforcement stays nominal.

**Score:** 2.5/10

**Sources:**
- https://www.dailymirror.lk/business/ADB-stresses-need-to-get-homestay-owners-registered-under-SLTDA/215-273114
- https://www.ft.lk/Front-Page/SLTDA-launches-Enforcement-Unit/26-645842
- https://sltda.gov.lk/storage/common_media/Document%20Requirement-Guest%20House.pdf

## 3. Rejected

- **Cattle transport permits:** a paper permit from the Divisional Secretary plus a vet certificate. The buyers cannot pay, and there is no portal (Animals Act 1958 and 2009 regulations).
- **Pawnbrokers:** banks and finance companies dominate pawning and already run core systems.
- **Scrap metal:** an export ban-and-permit regime. No domestic dealer register was found.
- **Household employers of domestic workers:** no legal obligation yet. Only proposals exist (Verité Research).
- **Three-wheelers:** meter rules are poorly enforced, and ride-hailing apps already cover the digitised segment.

## 4. Method notes

- English-language queries on the regulator's name worked: documents.gov.lk gazettes, lawnet and srilankalaw statutes, and FAOLEX for animal and forest law. Most quiet-industry rules sit with Divisional Secretariats and provincial statutes, so they are fragmented but not digitised.
- Daily FT and Daily Mirror are the best sources for insider pain.
- Sinhala and Tamil queries were not tried, because the budget ended early.
- The session stopped after 9 searches (8 succeeded) when the tool returned a usage-limit refusal. Tea, fisheries and excise remain unscreened and are the best next targets.
