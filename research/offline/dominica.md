# Dominica: Offline (quiet) industries pass

**Date:** 2026-10-05
**Market class:** Microstate, population about 72,000 (estimate). English-speaking, XCD pegged to USD, OECS/ECCU member. Accessible: not sanctioned, no data-localization barrier.
**Search budget:** 8. This session used 6 standard WebSearch calls, but searches made before the run was interrupted were not logged, so the total may be higher. The report is short on purpose.
**Prior report:** `research/countries/dominica.md` concluded that no Dominica-only SaaS works. Its single idea was an OECS statutory-remittance pack for accountants, scored 3/10. I do not repeat it here.

## Bottom line

The quiet industries exist and are regulated: pesticide import licensing, fisher and vessel registration, minibus "H" permits, slaughter inspection under the Roseau Market Act, and domestic-worker social-security registration. But each obliged population is between a handful and about 2,000 operators. Most are micro-scale, cash-based and low-margin, and the obligation is usually a one-time registration or annual licence, not a recurring filing. None of them supports software sold on its own. The only defensible framing is again **an OECS-wide product in which Dominica is one jurisdiction among six or seven**. One such idea is scored below, and it scores low.

One factual correction for the prior report: the DSS registration page found in this pass gives contribution rates of **6.75% employee and 7.75% or 8.00% employer** (8.00% where redundancy cover applies), remitted **by the 14th** of the following month. The country report gives 7.5% / 6.5% and the 15th. Treat the rates as unsettled until someone checks them against dss.dm directly.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Households employing domestic workers | Register the employer and each employee with DSS within 4 days; remit 14.5–14.75% of wages by the 14th monthly | Registration forms are taken in person with an original birth certificate and ID (dss.dm) | Unknown; estimate a few hundred households | Reject | The obligation is real and monthly, but a household's remittance is one line; DSS counter or bank payment is the substitute; nobody pays software fees for this |
| Scrap metal dealers / exporters | No Dominica-specific scrap dealer register found; the search returned only Trinidad & Tobago's Scrap Metal Act 2022 | None found | Unknown; estimate fewer than 10 exporters, post-Hurricane Maria clean-up trade | Reject | No identifiable register or trigger in Dominica; the population is tiny |
| Second-hand dealers / pawnbrokers | Not screened (no budget); no evidence found | n/a | Estimate a handful | Reject | Too few operators to matter |
| Livestock / abattoir / butchers | Slaughter and meat inspection under the Roseau Market Act (Cap. 20:08); state abattoir (Venezuela-funded, EC$10m) with export ambitions to Martinique, Guadeloupe and the EU | Inspection is done by government vets at a single state facility | 1 main abattoir (gov.dm news); butchers unknown | Reject | One government-run facility is the buyer; any EU export traceability would be a procurement/donor project, not indie SaaS |
| Beekeepers | Not verified in this pass | n/a | Estimate tens | Reject | Too small |
| Pesticide importers / retailers | Pesticides Control Act Cap. 40:10 and 1987 Registration and Licensing Regulations: every product registered with the Board and gazetted; every importer and seller licensed | The 1987 regulations prescribe paper application forms; no portal found | Estimate 5–15 licensed importers/agro-dealers (unverified) | Reject (OECS add-on at best) | Annual licence plus per-product registration; buyer count too small; regional harmonisation (CAHFSA/OECS) could change this, but no 2025–2026 trigger found |
| Pesticide applicators / farmers | Use is restricted to registered products; no applicator record-keeping duty found | Paper / none | About 90% of pesticide use is agricultural (Pesticide Control Board, via search) | Reject | No recurring reporting duty found |
| Fishers and fishing vessels | Fisheries Act 1987: fisher and vessel registration and licensing with the Fisheries Division; FAD fishing licences | Registration is done at Fisheries Division and landing sites; data collection is mostly paper (FAO/JICA reports) | 1,800 part-time + 435 full-time registered fishers (Fisheries Division, 2000, via FAO); about 50 FAD licensees (JICA/CRFM) | Reject | Fishers don't pay for software; catch data is collected by government and donors (JICA, CRFM) |
| Fish vendors / sellers of own catch | Market vendor rules under the Roseau Market Act | Market stall/counter | Unknown | Reject | Cash, informal, no filing |
| Minibus / taxi operators | "H"/"HA" plate permits from the Dominica Transport Board; fares set by Cabinet on drivers' associations' advice | Permits issued at the counter; associations negotiate fares | Unknown; estimate several hundred minibuses (unverified) | Reject | Annual permit plus cash fares; no recurring report; the associations are the only channel, and they negotiate with government rather than buy tools |
| Market traders / street vendors | Roseau Market Act stall rules; Roseau City Council fees | Counter / cash | Unknown | Reject | No money and no filing |
| Customs brokers (prior report) | ASYCUDA entries | Government-owned system | Few dozen (estimate) | Already rejected | See the country report |
| CBI agents (prior report) | Due-diligence files | Relationship-driven | Small closed set | Already rejected | See the country report |
| Tour/dive operators and eco-lodges (country-specific) | 10% accommodation VAT; Discover Dominica Authority licensing (unverified) | Mixed | Estimate fewer than 150 properties | Reject | Global PMS tools serve them; filing is one monthly return |

## 2. Strongest opportunities

Nothing reaches the bar. The least-weak quiet-industry idea is below, framed OECS-wide.

### Opportunity: OECS pesticide and agro-input licensing and gazette tracker for agro-dealers

**Industry:**
Agro-input importers and retailers (pesticides and fertiliser), OECS-wide; Dominica as one jurisdiction

**Buyer:**
Owner or manager of a licensed pesticide importer or agro-dealer that sells across several OECS islands, or the regional distributor that supplies them.

**Trigger / Why now:**
Weak. Dominica's Pesticides Control Act and 1987 regulations require product registration, gazetting and importer/seller licences. Each OECS island has its own Pesticide Control Board, list and forms. I found no 2025–2026 amendment. Regional harmonisation is a possible future trigger (unverified).

**Current workflow:**
1. Importer compiles a dossier per product (label, SDS, efficacy data) on the prescribed paper form for each island's Board.
2. Waits for Board approval and publication in the Gazette.
3. Renews importer and seller licences periodically.
4. Checks each shipment against the island's approved list before customs clearance.
5. Repeats this per island, with different forms and lists.

**Pain:**
Unverified. No complaints found. The likely pain is tracking which product is approved on which island and when licences lapse.

**Existing solutions:**
Each Board's paper process and Gazette; global agrochemical manufacturers' regulatory teams, which prepare the dossiers for their distributors; spreadsheets; local customs brokers.

**Offline evidence:**
Forms prescribed in 1987 regulations; approval by Gazette publication; no online portal or software listing found.

**Offline channel:**
The Pesticide Control Board's licensee list (on request); agricultural input suppliers; CARDI/OECS agriculture desks; the Dominica Agricultural Industrial and Development Bank (unverified as a channel).

**Market count:**
Estimate 5–15 licensees in Dominica and perhaps 50–100 across the OECS. No register count was found.

**The gap:**
A cross-island view of "which product is approved where and which licence expires when." It is a narrow gap with very few buyers.

**Possible product:**
A shared database of approved pesticide lists per OECS island plus a licence-expiry tracker for distributors.

**MVP:**
A spreadsheet-backed web page listing approved products for 2–3 islands, with expiry reminders by email.

**Pricing hypothesis:**
US$20–50/month per distributor (estimate). Total addressable revenue is well under US$50k/year.

**How to find first customers:**
Ask each island's Pesticide Control Board for its licensee list, then phone the licensees.

**Risks:**
Too few buyers. Manufacturers' regulatory teams already do the work. Approved lists may not be public in machine-readable form. Willingness to pay is likely near zero.

**Kill condition:**
Fewer than 20 OECS distributors, or manufacturers confirm they handle registrations for their distributors.

**Willingness to pay:** Would pay, if at all, only for a done-for-you registration service, not software.
**Founder access:** Needs a Caribbean-based or regionally connected founder, because Boards and distributors are reached by phone and in person.

**Score:** 2/10

**Sources:**
- Pesticides Control (Registration and Licensing) Regulations 1987, Dominica: https://leap.unep.org/en/countries/dm/national-legislation/pesticides-control-registration-and-licensing-regulations-1987
- Pesticides Control Act Cap. 40:10: https://leap.unep.org/en/countries/dm/national-legislation/pesticides-control-act-cap-4010
- FAOLEX text: https://faolex.fao.org/docs/pdf/dmi6526.pdf

## 3. Rejected

- **Domestic-worker DSS payroll for households:** real monthly duty (register within 4 days, remit by the 14th), but each household has one worker and a single cash remittance. The DSS counter is the substitute. https://dss.dm/contributors/definition-ee/registration-of-employees/
- **Fisher/vessel registration and catch logs:** about 2,235 registered fishers (2000 figure, FAO). The data is collected by the government and donors (JICA/CRFM FAD projects), so fishers are not buyers. https://www.fao.org/4/Y4260E/y4260e07.htm ; https://www.crfm.int/~uwohxjxf/images/JICA_Activities_for_the_profitability_and_sustainability_of_FAD_Fisheries.pdf
- **Abattoir and meat traceability:** a single state-run abattoir; any export traceability would be a government or donor procurement. https://news.gov.dm/news/news-items/director-of-agriculture-says-abattoir-a-good-move ; https://leap.unep.org/en/countries/dm/national-legislation/roseau-market-act-cap-2008
- **Minibus/taxi permit management:** annual Transport Board permit, cash fares, and associations that bargain with Cabinet rather than buy tools. https://www.news.gov.dm/news/news-items/cabinet-approves-the-implementation-of-new-bus-fares-and-taxi-rates-2 ; https://discoverdominica.com/island-transportation
- **Scrap metal dealers:** no Dominica register or law surfaced; only Trinidad & Tobago's Act 2022 came up. https://tradeind.gov.tt/documents-resources/proclamation-of-the-scrap-metal-act-2022/
- **Market vendors, beekeepers, second-hand dealers:** populations too small and informal; not checked further.

## 4. Method notes

- Regulator-first queries found **laws** (FAOLEX/UNEP LEAP host Dominica's Pesticides, Fisheries and Roseau Market Acts) and **DSS forms pages**. They did not find registers or counts. Dominica publishes almost no licensee lists online, so counts come from old FAO/JICA reports or are estimates.
- Searches for Dominica are often polluted by results for the Dominican Republic and Trinidad & Tobago. Using exact agency names ("Dominica Transport Board", "dss.dm", "Fisheries Division") helped.
- For a microstate, the right unit of research is the OECS. A future pass should screen quiet industries once across all six or seven OECS states, not island by island.
