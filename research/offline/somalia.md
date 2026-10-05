# Somalia: Offline-Industries Pass

**Date:** 2026-10-05
**Existing report:** `research/countries/somalia.md` (ETAS sales tax and SOMCAS customs helpers, both low confidence; not repeated here)

**Method and limits (read first):**
- I used 6 of the 8 allotted WebSearch calls. WebFetch is blocked, so every fact below comes from search-result extracts. I did not open any PDF.
- This session was interrupted once by a usage-limit error. No search results from before the interruption survived, so this report rests only on the 6 searches listed in Method notes.
- Anything not confirmed by those searches is marked *unverified* or *estimate*.
- Somalia is legally reachable (sanctions are list-based, not a country-wide embargo; see the existing report), but it is practically hard to sell into:
  - Authority is split between the federal government, member states (Puntland, Jubaland and others) and Somaliland, which claims independence. Each runs its own ministries and ports.
  - Payments run on mobile money (EVC Plus, Zaad) and cash dollars.
  - Physical security is poor.
  - The regulators that would create recurring paperwork are mostly new and only partly operating.

**Bottom line:** **No quiet industry in Somalia meets the brief's bar.**

The most interesting obligations are:
- **livestock export certification**, a sector worth about USD 1 billion a year with a donor-backed traceability system (LITS) being assessed;
- **fishing-vessel registration**, mandatory since April 2026, with more than 1,000 vessels registered;
- **pharmacy licensing** under the new Pharmaceutical Law (January 2026).

In each case one of three things is true:
- the state or a donor builds the system;
- the buyers are too few or too informal to pay for software;
- the regulator does not exist yet.

The best realistic play is a **done-for-you service run by a local partner**, not SaaS sold by a non-local solo founder. I list three low-scored "watch" opportunities below so the ranking has the evidence.

---

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Livestock exporters (sheep, goats, camels, cattle to the Gulf) | Clinical inspection at regional markets, quarantine near the port, and a port-vet export health certificate per consignment. A Livestock Identification and Traceability System (LITS) is under assessment. | Certificates are issued by port veterinary officers after a physical inspection. LITS is still at the terms-of-reference / assessment stage (MoF ToR). | About USD 970m of live-animal earnings in 2024, with more than USD 1bn projected for 2025 (Central Bank of Somalia data via Food Business MEA). Exporter count: *unknown*. My estimate is low hundreds of trading firms across Berbera, Bosaso, Berbera-adjacent and Mogadishu routes. | Watch (Opp. A) | High value, per-consignment, mandatory. But the main system (LITS) will be donor- or state-built, and the ports sit in three political jurisdictions. |
| Livestock quarantine-station operators | Licence from the state, quarantine and health records | Somaliland revoked a major Berbera inspection facility's licence in February 2025 over a deal with the federal government (Hiiraan). | A handful of facilities | Reject | Too few buyers, and the sector is politically exposed |
| Artisanal fishing-vessel owners | Register the vessel and obtain a licence from the Ministry of Fisheries and Blue Economy (MFBE) under Law No. 008 of 2023. In April 2026 registration was ordered for *all* vessels, after a safety suitability assessment. | MFBE publishes SOPs, a vessel-registration brief and a licence page. Registration is done through a ministry campaign, not an operator self-service portal (*inferred* from Dawan coverage). | More than 1,000 vessels registered as of April 2026 (Dawan) | Watch (Opp. B) | New, mandatory and enforced. But owners are poor fishermen, and registration is closer to one-off plus annual than per job. |
| Fish exporters / processors | Export licences, catch documentation (*unverified*) | Not researched | Few | Not researched | Out of budget |
| Pharmacies and medicine importers | The new Pharmaceutical Law, passed by the House of the People on 3 January 2026, creates the Somali Pharmaceutical and Health Equipment Authority. Selling medicines without a licence becomes punishable by prison or a fine. | The authority is newly created. Before the law, Somalia "lacked a functional medicines regulatory agency" (Dawan). | Pharmacy count *unknown*. My estimate is thousands nationally, mostly informal. | Watch (Opp. C) | A real trigger, but the regulator, its forms and its register don't exist yet |
| Hawala / money-transfer businesses | Central Bank of Somalia (CBS) licensing regulations (2014), operational rules (2016), AML/KYC | CBS publishes PDF regulations | Seven licensed money-transfer businesses (Dahabshil, Salaam, Amal and others), per sominvest.gov.so | Reject | Few buyers, and they are large firms with in-house systems and enterprise AML vendors. Not a quiet industry. |
| Microfinance and takaful providers | New 2025 CBS licensing frameworks; first licences issued (regalert) | Regulatory PDFs | A handful | Reject | Too few. These are enterprise buyers. |
| SMEs needing a business licence (Mogadishu) | Online business registration and licensing system, launched March 2022 with IFC / World Bank support | The government built the portal. Target: about 5,000 businesses registered by December 2025 (IFC). | About 5,000 (target, IFC) | Reject | A free government portal is the substitute, and filing is annual. |
| Billboard / outdoor-advertising owners (Mogadishu) | New Banadir Regional Administration rules on billboards (Dawan headline) | Municipal regulation | *Unknown* | Reject | One-off permit, few operators. Details not verified. |
| Households as employers (domestic workers) | No enforced payslip or social-security scheme found | Informal, cash-paid | *Unknown* | Reject | No obligation to automate |
| Scrap metal / second-hand dealers | No police dealer-register regime found | Informal; scrap is exported via Gulf traders (*unverified*) | *Unknown* | Reject | No regulator-side record found |
| Khat importers | Import taxes and permits at airstrips (*unverified*) | Cash- and clan-run trade | *Unknown* | Reject | Informal and politically sensitive. No paperwork product. |
| Charcoal traders | Export is banned (UN sanctions regime; *unverified* in this session) | Illicit | n/a | Reject | Illegal trade |
| Minibus / bajaj (tuk-tuk) operators | Municipal stickers and taxes (*unverified*) | Paid in cash at checkpoints | *Unknown* | Reject | Informal taxation, no willingness to pay for software |

Three of the screened groups are specific to Somalia: livestock export and quarantine, artisanal fishing-vessel registration, and hawala.

---

## 2. Opportunities (watch-list quality; none recommended to build)

### Opportunity A: Consignment document pack for livestock exporters

**Industry:**
Live-animal export (sheep, goats, camels, cattle) to Saudi Arabia, Oman, Kuwait and Qatar, through Berbera, Bosaso and Mogadishu.

**Buyer:**
Owner or manager of a livestock export trading company, or the clearing agent who handles its consignments.

**Trigger / Why now:**
- Exports are at a record high: USD 970m in 2024, with more than USD 1bn projected for 2025 (Central Bank of Somalia data).
- The Ministry of Finance has issued terms of reference for an assessment of a **Livestock Identification and Traceability System (LITS)**. LITS would add animal-ID and traceability records on top of the existing health certificates.
- SOMCAS automated customs is spreading (see the existing report).

**Current workflow:**
1. Animals are bought at regional markets such as Galkayo, Belet Weyn and Jowhar, and clinically inspected there.
2. They are trucked to quarantine stations near the port.
3. The port veterinary officer does a final inspection, checks the vessel, and issues the export health certificate.
4. Customs and export declarations are filed, increasingly through SOMCAS in federal-controlled ports. The importing country has its own requirements, such as Saudi import conditions.
5. Each consignment needs a set of matching documents: health certificate, quarantine record, customs entry and buyer paperwork. The details were not verified in this session.

**Pain:**
Each consignment involves several authorities. When a Gulf importer rejects a shipment or bans imports for disease, the losses are very large; the Rift Valley Fever bans are historical context (*unverified* this session). Port services are offered through the port vet (CGIAR appraisal).

There is **no direct evidence this session** of document-handling pain among exporters.

**Existing solutions:**
- Port-vet paper certificates
- SOMCAS, built by the government
- LITS, which would be a donor- or state-procured system (MoF ToR)
- Clearing agents doing the work by hand
- No vendor software found

**Offline evidence:**
Certification is done by inspection officers at the port. The traceability system is still being assessed. No exporter software listings were found.

**Offline channel:**
- Local livestock-exporter associations and chambers of commerce. The names are *unverified*; examples would be Berbera- and Bosaso-based exporter groupings.
- Clearing agents at the ports.
- Quarantine-station operators.

All of these need a Somali-speaking local partner.

**Market count:**
The exporter count is *unknown*; my estimate is low hundreds of firms. Value is about USD 1bn a year.

**The gap:**
A single consignment record that produces the health-certificate request, the quarantine log, the customs entry and the buyer pack, across federal, Puntland and Somaliland ports.

**Possible product:**
A consignment file per shipment, with animal counts, origin markets, inspection dates and vessel. It generates the paperwork set and keeps an audit trail for buyer disputes.

**MVP:**
A WhatsApp-friendly mobile form plus a PDF pack generator for one port (Bosaso or Berbera), sold through one clearing agent.

**Pricing hypothesis:**
USD 20–50 per consignment, or USD 100–300 a month per exporter. Payment would be through a local partner or a done-for-you service.

**How to find first customers:**
Port clearing agents and the exporter association at one port. No public register was found.

**Risks:**
- LITS is donor-procured and could be mandated as the single system.
- Political fragmentation between Somaliland and the federal government (the 2025 Berbera facility licence revocation).
- Large exporters are relationship- and clan-based.
- Security.
- Mobile-money collection.

**Kill condition:**
- LITS or SOMCAS ends up covering health certification end to end; or
- fewer than about 50 independent exporters exist; or
- exporters say clearing agents already handle this for a small fee.

**Willingness to pay / founder access:**
Exporters would likely pay only for a done-for-you service, not software. A non-local solo founder could **not** realistically sell this; it needs a local partner.

**Score:** 3/10
(Pain 5, Frequency 7, Mandatory 8, Fragmentation 6, Competition 6, Incumbent gap 4, Buyer access 2, Willingness to pay 4, MVP 6, Distribution 3)

**Sources:**
- https://www.foodbusinessmea.com/?p=2153162
- https://archive.mof.gov.so/sites/default/files/Publications/Terms%20of%20Reference%20-%20LITS%20Assessment.pdf
- https://cgspace.cgiar.org/bitstreams/758659da-fd30-4ca1-b71b-b624affd6486/download
- https://pmc.ncbi.nlm.nih.gov/articles/PMC3989042/
- https://hiiraan.com/news4/2025/Feb/200062/somaliland_shuts_down_key_livestock_facility_over_export_deal_with_somalia.aspx
- https://molfr.gov.so/wp-content/uploads/2024/06/LSDS-Final-Book-livestock-sector-development-strategy-published-2020-1-1.pdf

---

### Opportunity B: Fishing-vessel registration and licence-renewal service

**Industry:**
Artisanal and semi-industrial fishing: vessels up to 12 m and under 20 GT count as artisanal.

**Buyer:**
A fishing cooperative, or a boat owner with several vessels. Fish traders who finance boats are another possible buyer.

**Trigger / Why now:**
- In April 2026, the MFBE ordered **all** fishing vessels along the coast to register with the federal government. More than 1,000 vessels had been registered by then, and enforcement is stepping up (Dawan).
- The legal basis is the Law of Fisheries Management and Development (Law No. 008 of 2023).
- MFBE has published SOPs for vessel licensing and requirements for local licensing.

**Current workflow:**
1. The vessel passes a safety suitability assessment.
2. The owner registers the vessel with MFBE and applies for a licence under the SOP.
3. The licence is renewed periodically. Whether renewal is annual is *unverified*.

**Pain:**
The obligation is new and enforced. For owners who can't read the SOP or reach Mogadishu, compliance is hard (*inferred*).

**Existing solutions:**
- MFBE's own registration campaign and its licence page on mfbe.gov.so
- Donor programmes such as FAO / EU fisheries projects (*unverified*)
- Cooperatives acting as intermediaries

**Offline evidence:**
Registration is driven by a ministry campaign. No operator software exists.

**Offline channel:**
Fishing cooperatives, MFBE registration drives, and fish-landing sites. A local partner is required.

**Market count:**
More than 1,000 registered vessels (April 2026, Dawan). The total fleet is *unknown*.

**The gap:**
Help with document preparation and renewal tracking for owners. In practice this is a paperwork-agent service.

**Possible product / MVP:**
A renewal-reminder and document-checklist tool used by cooperative secretaries.

**Pricing hypothesis:**
About USD 5–20 per vessel per year (*estimate*). That is too small for a standalone product.

**Risks:**
The ministry provides registration for free. Frequency is annual at best. Buyers have very low incomes.

**Kill condition:**
MFBE handles renewal itself, or cooperatives won't pay. Both are likely.

**Willingness to pay / founder access:**
Buyers would pay for a service only, if at all. A non-local founder could not sell this.

**Score:** 2/10

**Sources:**
- https://www.dawan.africa/news/somalia-orders-fishing-vessels-to-register-to-boost-oversight
- https://mfbe.gov.so/blog/2024/07/23/ministry-of-fisheries-and-blue-economy-standard-operating-procedures-for-fishing-vessel-licensing-and-guidelines-and-requirements-for-local-licensing/
- https://mfbe.gov.so/uploads/documents/1775368408_BRIEF_on_Fishing_vessel_REGISTRATION_.pdf
- https://theoutlawocean.com/toolkit/global-fishing-legislation/somalia/vessel-registration-and-license-management
- https://www.seafoodsource.com/news/supply-trade/somalia-unveils-fishing-licensing-registration-guidelines

---

### Opportunity C: Pharmacy licensing and stock-register compliance under the 2026 Pharmaceutical Law

**Industry:**
Retail pharmacies and medicine importers or wholesalers.

**Buyer:**
Pharmacy owners and medicine importers.

**Trigger / Why now:**
- The House of the People approved the Pharmaceutical Law on 3 January 2026.
- The law creates the Somali Pharmaceutical and Health Equipment Authority.
- It makes selling medicines without a licence an offence punishable by prison or a fine (Dawan).

**Current workflow:**
- Before the law, there was no functional medicines regulator.
- Today, licensing rules, forms and register requirements are **not yet published**, as far as this session found.

**Pain:**
A licensing wave is expected, but it is not yet observable.

**Existing solutions:**
- None specific to Somalia.
- Generic pharmacy POS systems from Kenya and the Gulf (*unverified*).
- Possibly a donor-funded regulatory information system later; WHO EMRO supports pharmaceutical policy.

**Offline evidence:**
The regulator is being built from scratch.

**Offline channel:**
- Pharmacy and pharmacist associations (names *unverified*)
- Medicine importers and wholesalers that supply pharmacies

**Market count:**
*Unknown.* My estimate is thousands of outlets, many unlicensed.

**The gap / possible product:**
Once the Authority publishes requirements:
- licence-application preparation;
- a batch / expiry stock register for inspections.

**Pricing hypothesis:**
About USD 10–30 a month (*estimate*).

**Risks:**
- The Authority may take years to operate, and enforcement may be weak.
- Buyers are informal.
- WHO or donors may supply the tooling.

**Kill condition:**
No implementing regulations or licence register by 2027.

**Willingness to pay / founder access:**
Low willingness to pay. A local partner is needed.

**Score:** 2/10 (revisit when implementing regulations appear)

**Sources:**
- https://dawan.africa/news/somali-parliament-approves-pharmaceutical-law
- https://dawan.africa/news/bridging-pharmaceutical-regulatory-and-education-gaps-in-somalia-1-2
- https://www.emro.who.int/somalia/priority-areas/essential-medicines-and-pharmaceutical-policies.html

---

## 3. Rejected

- **Hawala / money-transfer AML reporting:**
  - Only seven licensed money-transfer businesses, all large (Dahabshil, Salaam, Amal and others).
  - They use in-house systems and enterprise AML vendors.
  - Not a quiet industry.
  - Sources: sominvest.gov.so; CBS registration and licensing regulations.
- **Microfinance and takaful licensing (2025 CBS frameworks):** only a handful of licensees, which are enterprise buyers.
- **Mogadishu SME business licensing:** filing is annual, and the substitute is the free government online registration and licensing system (IFC / World Bank, launched 2022, target about 5,000 businesses).
- **Quarantine-station operators:** a handful of politically exposed facilities (the 2025 Berbera revocation).
- **Billboard permits (Banadir):** one-off, with few operators.
- **Domestic-worker employment, scrap and second-hand dealers, khat, minibus and bajaj operators:** no enforced records obligation, or the trade is informal or illicit.
- **Charcoal:** export is banned.

## 4. Method notes

- **Worked:**
  - English queries naming the specific ministry (MFBE, CBS, Ministry of Livestock) plus "2025" or "regulation". These surfaced ministry PDFs and SOPs.
  - Dawan.africa as the news source for new obligations.
- **Didn't work:**
  - Municipal (Banadir) licensing queries, which returned Saudi and Samoa results.
  - "NMRA"-style pharmacy queries, which returned Sri Lanka.
  - There are no licensing registers or enforcement lists for Somalia online.
- **Not tried:** Somali-language queries (for example "shatiga ganacsiga" for business licence, or "diiwaangelinta" for registration). These are worth trying with a future budget.
- **Overall:** quiet industries in Somalia are quiet because the state registers are only now being built, mostly by donors. The relevant regulator-first signal is the donor terms of reference and procurement (LITS), not operator registers.

Searches used (6 of 8):
1. livestock export certification and quarantine
2. CBS hawala licensing
3. fisheries vessel registration
4. pharmacy regulation
5. Banadir business licensing
6. livestock exports 2025 and traceability
