# Liberia: Indie Software Opportunity Research

**Date:** 2026-10-04
**Market class:** Small, fragile, low-income economy (population about 5.5M, estimate). Small-market search budget.
**Research note:** The session's search quota ran out partway through. Only 2 of the planned searches returned results (one more was refused with "usage limit"), so I stopped searching as the instructions require. Everything below draws on those results. Background facts that I could not re-verify in this session are marked **(unverified)**.

## Accessibility check

- **Sanctions:** As far as I know, the US Liberia sanctions programme (formerly under EO 13348) ended in 2015–2016. There is no country-wide US/EU/UK embargo on selling software or IT services to Liberia **(unverified in this session)**. Some individuals are designated under Global Magnitsky, so screen counterparties.
- **Payments:** The economy is dual-currency (USD and LRD), and the USD is widely used, which makes USD SaaS pricing workable. Bank-card penetration is low. Mobile money (Orange Money, MTN MoMo) is the main rail **(unverified)**. Exporters and customs brokers can usually pay by USD bank transfer.
- **Internet:** No known restrictions on internet use.
- **Verdict:** A foreign solo founder can access the market legally. The problems are practical: the market is small, buyers have little money, and selling needs someone on the ground.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Cocoa / coffee exporters and buying agents | Farm-level geolocation and lot traceability for EUDR due-diligence statements | **Candidate (weak)** | Real deadline (31 Dec 2026, national NATS target). But a state system backed by LACRA, IFC and donors, plus established global traceability SaaS, crowd out a solo vendor. |
| Rubber (smallholder rubber to processors / exporters) | EUDR traceability for smallholder rubber | Folded into the above | Same workflow. Concentrated buyers (Firestone and a few processors) run enterprise or in-house systems **(unverified)**. |
| Customs brokers / freight forwarders | ASYCUDA electronic declarations with scanned supporting documents | **Candidate (weak)** | ASYCUDA went live recently, with nationwide rollout and a National Single Window planned. But the broker population is small and Single Window work is funded by the World Bank and UNCTAD. |
| SME tax compliance (LRA filings) | Monthly GST/withholding/payroll tax filing on the LRA portal | Not assessed | My search on LRA e-filing / e-invoicing was refused because of the quota, so I have no evidence either way. |
| Timber / forestry | Chain of custody (LiberTrace / VPA-FLEGT) | Rejected (from prior knowledge, unverified) | Government-run LiberTrace chain-of-custody system run by a contractor. Few concession holders. |
| Pharmacies | Product registration and import permits (LMHRA) | Not researched | Out of budget. Market probably too small. |

## Opportunities

### Opportunity: EUDR plot-mapping and lot-linking assistant for mid-size Liberian cocoa/coffee exporters and buying agents

**Industry:**
Agricultural commodity export (cocoa, coffee; rubber as a possible extension)

**Buyer:**
Compliance or operations manager at a licensed cocoa/coffee exporter or LACRA-licensed buying agent / cooperative union that sells into EU-bound supply chains. Not the large multinational traders, which already run their own systems.

**Trigger / Why now:**
The EUDR applies to cocoa, coffee and rubber. LACRA and its stakeholders signed a resolution to make the National Agriculture Traceability System (NATS) fully operational by **31 December 2026**. LACRA published a NATS roadmap in January 2026 and is working with the IFC on EUDR compliance. Authorities warn that more than 30% of farm output could be blocked from international markets if Liberia does not comply. EU agri-food imports from Liberia reached €118M in 2024, about 61% of it cocoa.

**Current workflow:**
1. Informal rural buyers pool beans from many undocumented farms.
2. Exporters or cooperatives send field staff to collect farmer names and plot GPS points or polygons. They use paper, spreadsheets or donor-provided mobile apps.
3. Lots are put together at the warehouse. The link between a lot and its plots is kept in Excel, if it is kept at all.
4. The EU importer asks for geolocation files (GeoJSON) and deforestation-risk evidence for each shipment, and the exporter rebuilds them by hand.
5. Once NATS is live, the same data will presumably also have to go to LACRA, which is a second channel (exact NATS interface **unverified**).

**Pain:**
There is official evidence of fragmented, undocumented aggregation networks (EFI preparedness check; LACRA statements). The regulatory deadline is hard and losing EU market access is costly. I found no direct complaints from exporters within budget.

**Existing solutions:**
- **LACRA NATS:** the state system, built with IFC and other donor support. It is the main substitute and may be free for exporters.
- **Global traceability SaaS** active in West African cocoa (from prior knowledge, **unverified for Liberia specifically**): Farmforce, SourceTrace, Koltiva (KoltiTrace), Meridia, TraceX, Satelligence (risk monitoring).
- **Buyer-provided tools:** large EU chocolate and coffee importers often require and pay for their own supplier-side traceability apps.
- Donor and NGO projects run by IDH, Solidaridad and Rainforest Alliance in the region **(unverified for Liberia)**.

**The gap:**
The likely gap is the "last mile" between whatever NATS records and what each EU buyer wants: turning one lot into several buyer-specific GeoJSON and due-diligence packages, and handling exceptions (missing polygons, plots that overlap forest-loss alerts, mixed lots). Whether this gap exists depends on how NATS ends up being designed, and that is unknown today.

**Possible product:**
A lightweight tool that imports plot data (spreadsheets, KoBo/ODK exports, NATS exports), links plots to warehouse lots, flags missing or invalid geometry, and produces buyer-ready EUDR geolocation packages for each shipment.

**MVP:**
Upload a CSV or KoBo export of plots → validate polygons and points (≥4 ha needs a polygon) → assign plots to lots → export GeoJSON and a summary PDF for each shipment.

**Pricing hypothesis:**
$100–300 per month per exporter, or $20–50 per shipment package (estimate). Willingness to pay is uncertain because donor-funded alternatives are common.

**How to find first customers:**
LACRA's list of licensed exporters and buying agents (exists by statute; public availability **unverified**), the Liberia Cocoa and Coffee exporters' associations **(unverified names)**, and attendees of LACRA's EUDR stakeholder meetings as reported in the local press.

**Risks:**
- NATS or a donor-funded platform makes the product unnecessary.
- The market is tiny: probably a few dozen exporters at most (estimate).
- Selling and data collection need people on the ground.
- EU rules may change again (simplification or delay).

**Kill condition:**
Kill the idea if NATS produces EU-buyer-ready geolocation exports itself, or if the main EU buyers supply their own tools to Liberian exporters at no cost. Either would remove the gap.

**Score:** 3/10

**Sources:**
- https://allafrica.com/stories/202601270335.html (LACRA NATS roadmap, Jan 2026)
- https://frontpageafricaonline.com/liberia-lacra-stakeholders-sign-resolution-to-safeguard-smallholder-farmers-and-meet-eu-deforestation-regulations/ (31 Dec 2026 NATS target)
- https://fpa.news/liberia-lacra-ifc-deepen-cooperation-on-eudr-compliance-and-sustainable-agricultural-trade/ (IFC cooperation)
- https://www.ecofinagency.com/news-agriculture/3001-52432-liberia-moves-to-build-agricultural-commodity-traceability-system (EU import value, 30% at-risk figure)
- https://efi.int/publication/preparedness-check-liberia-eu-deforestation-regulation (EFI preparedness check)

### Opportunity: ASYCUDA declaration-prep and document-pack tool for Liberian customs brokers

**Industry:**
Customs brokerage / freight forwarding

**Buyer:**
Owner or declarations clerk at a small licensed customs brokerage in Monrovia (Freeport).

**Trigger / Why now:**
The LRA recently put ASYCUDA into live operation. Connectivity is being extended to all customs offices, and a World Bank-funded National Single Window is being built with UNCTAD's ASYCUDA programme (LRA trade-facilitation news, July 2026). Declarations need scanned supporting documents attached.

**Current workflow:**
1. The broker receives the invoice, packing list, bill of lading and permits (often PDFs or paper) from the importer.
2. The clerk re-keys line items and HS codes into an ASYCUDA declaration.
3. The clerk scans and attaches the supporting documents, then follows up with the importer for any that are missing.
4. Queries and assessments are handled manually.

**Pain:**
Re-keying work and missing documents are typical of ASYCUDA markets. I found no Liberia-specific complaint evidence within budget.

**Existing solutions:**
- ASYCUDA World itself (free to declarants).
- The coming National Single Window (government).
- Regional forwarder software and generic freight systems (e.g. CargoWise for the large forwarders; **unverified locally**).
- Manual clerks, which cost very little in Liberia.

**The gap:**
Turning invoice and packing-list PDFs into an ASYCUDA-ready item list, plus a document checklist for each regime. This is a well-known pattern, but ASYCUDA usually has no public API for third parties, so the output would have to be copy-paste or XML import, if the LRA configuration allows XML import (**unverified**).

**Possible product:**
A document-to-declaration prep tool that extracts line items, suggests HS codes from the importer's history, and produces a checklist and export file for ASYCUDA.

**MVP:**
Upload invoice PDF → editable line table with HS codes → export in the ASYCUDA item format, with a missing-documents checklist.

**Pricing hypothesis:**
$30–80 per month per brokerage (estimate). Clerk labour is cheap, which caps the value.

**How to find first customers:**
The LRA licensed customs broker list **(unverified public availability)** and Freeport of Monrovia broker associations.

**Risks:**
- Very small market (probably low hundreds of brokers; estimate).
- Low labour cost.
- The Single Window may cover the need.
- Generic AI document tools are an easy substitute.
- The broader multi-country ASYCUDA play is crowded.

**Kill condition:**
Kill the idea if LRA ASYCUDA does not accept any file or XML import, or if fewer than about 100 active brokerages exist.

**Score:** 2/10

**Sources:**
- https://allafrica.com/stories/202607140282.html (LRA trade facilitation, July 2026)
- https://revenue.lra.gov.lr/import-and-export/ (LRA import/export procedures)
- https://unctad.org/node/14907 (ASYCUDA live in Liberia)
- https://tfadatabase.org/en/members/liberia/technical-assistance-projects/article-10-4 (Single Window technical assistance)

## Rejected after competitor research

- **Timber chain-of-custody reporting:** killed by the government-mandated LiberTrace system and the small number of concession holders (prior knowledge, unverified in this session).
- **Generic multi-country ASYCUDA declaration automation:** only shown above as a Liberia-specific variant. Region-wide it is crowded with forwarder ERPs and broker tools, and the Single Window programmes are free.

## Attractive problem, poor distribution

- **EUDR smallholder traceability:** the problem is real and has a hard deadline. Distribution is poor because the buyers are few, donors fund the alternatives, and the state NATS is the default channel.

## Too competitive

- **Farm-to-export traceability as a general product:** Farmforce, SourceTrace, Koltiva, Meridia, TraceX and similar vendors already serve West African cocoa (unverified for Liberia specifically).

## Bottom line

Liberia offers no viable standalone indie SaaS opportunity on the evidence I could gather. The only strong "why now" is EUDR/NATS, and it is dominated by government and donor systems. Liberia is better treated as an **add-on market** to an EUDR exporter-compliance product built for Côte d'Ivoire, Ghana or Sierra Leone, or to an ASYCUDA broker tool built for a larger ASYCUDA country. Research coverage is incomplete because the search quota ran out: SME tax filing on the LRA portal was not assessed.
