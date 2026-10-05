# São Tomé and Príncipe: offline-industries pass

**Date:** 2026-10-05 | **Market class:** microstate (population about 230k, estimate) | **Search budget used:** 8 of 8

## Bottom line

**No quiet industry in São Tomé and Príncipe (STP) supports an indie software business.** One real 2026 regulatory trigger exists: the **artisanal fishing regulation approved in June 2026**. It requires a census of all fishers and *palaiês* (fish traders), new fisher and palaiê cards, paid licences, and fines enforced by the coast guard and port authority. But the obliged people are subsistence fishers and market women. They won't pay for software. The only buyer is the fisheries directorate, whose work is funded by FAO, so this is a donor-procurement deal, not an indie product. Everything else screened is either informal, unregulated in practice, or tiny.

The existing country report reached the same conclusion: market size, not access, is the binding constraint.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Artisanal fishers (canoe owners/crews) | New 2026 regulation: mandatory census, fisher card, paid fishing licence, fines | Census to be run in person in coastal communities with FAO support; no portal found | Fleet of 2,374 registered boats (528 motorised, 1,846 sail) (FAO sector study via search summary); fisher headcount unverified | Reject (as indie) | Obliged party can't pay; the government/FAO is the only buyer |
| Palaiês (fish traders, mostly women) | Same regulation: census, palaiê card, licence | Same as above | Unverified (thousands, estimate) | Reject | Informal, cash, subsistence margins |
| Households employing domestic workers | Decree-Law 25/2014 social protection for domestic workers: employer registers worker and pays contributions to INSS | Paper identification form handed in by the first contribution deadline (per decree text); no e-portal found | Unverified; formal registrations likely very low (estimate) | Reject | Weak enforcement, tiny paying base; an INSS counter visit is the substitute |
| Moto-taxi operators | Road code (Código da Estrada) licensing; district fees unverified | No STP-specific licensing information found online at all | Unverified | Reject | No traceable recurring filing; informal |
| Market traders / street vendors (Mercado Municipal, Mercado Novo) | District (Câmara Distrital de Água Grande) stall/daily fees, unverified | Fees collected in cash at the market (estimate); old municipal market closed, vendors relocated | Unverified | Reject | Cash collection by the district; no software buyer |
| Money changers (casas de câmbio / street cambistas) | Prior authorisation from the Central Bank (BCSTP) under Decree-Law 32/99; BCSTP has been simplifying licensing for exchange houses and payment institutions since June 2023 | Licensing is case-by-case at BCSTP | A handful of licensed houses (estimate) | Reject | Too few licensed operators; street market is informal by definition |
| Scrap metal dealers / exporters | General exporter registration and ID card from the Ministry of Industry and Commerce | No scrap-specific register found | Unverified, very few (estimate) | Reject | No dealer register or police reporting found |
| Livestock / pig keepers, small abattoirs, butchers | Decree-Law 07/2019 (public and private veterinary services regulation), Livestock Code; import/export animal health rules | Veterinary services are state-run; no digital forms found | Unverified; mostly backyard pigs and goats (estimate) | Reject | Backyard production; no recurring filing that a buyer would outsource |
| Beekeepers, kennels, farriers, tattoo studios, well drillers, chimney/boiler/lift inspectors | None found | n/a | Negligible | Reject | Industry barely exists or has no specific regime in STP |
| Funeral / burial / monument makers | Civil registration of deaths (DGRN), unverified detail | Paper civil registry (estimate) | Very few funeral operators (estimate) | Reject (not searched) | Too small; no budget to search |
| Cocoa smallholder cooperatives (field side of EUDR) | EUDR plot geolocation | Covered in the country report | CECAB about 3,000 farmers, CECAQ-11 1,135 members | Reject | Buyer-run and global traceability platforms already serve it (see country report) |

Country-specific groups added from the registers: palaiês, artisanal canoe owners and cambistas.

## 2. Strongest opportunity (below the bar)

### Opportunity: Artisanal fisher and palaiê census and licensing register

**Industry:**
Artisanal fisheries (canoe fishers and palaiê fish traders)

**Buyer:**
Not the operators. The realistic buyer is the national fisheries directorate (Direção das Pescas, unverified exact name), funded through FAO or other donor projects.

**Trigger / Why now:**
In June 2026 the government approved the artisanal fishing regulation, prepared with FAO technical and financial support. It mandates a census of all fishers and palaiês, issues fisher and palaiê cards, requires paid licences for fishing authorisation, bans grenade fishing, and introduces fines with permanent surveillance by the coast guard and port authority (Téla Nón, 23 June 2026). In April 2026 a professional certification for artisanal fishing was also introduced (Téla Nón, 30 April 2026).

**Current workflow:**
1. Fisheries agents visit landing beaches and record fishers, palaiês and canoes (on paper or spreadsheets, estimate).
2. Cards are issued and licence fees are collected in person.
3. Coast guard and port authority inspect at sea or on landing and check cards and licences, with no shared database (unverified).

**Pain:**
The regulation creates the register from zero. Licence renewal, fee collection, card checks by two enforcement bodies and fines all need one shared record. Fishers already protested that earlier legislation limiting fishing zones could cause unrest (VOA, unverified date), so friction is real.

**Existing solutions:**
FAO tools for artisanal fisheries data collection (such as Open Arty / Calipseo, which FAO deploys in small-island states; its use in STP is unverified), plus spreadsheets, plus any donor-funded vessel registry.

**Offline evidence:**
No STP fisheries portal or online licence form turned up. The census is described as a field exercise.

**Offline channel:**
Only through FAO's country office and the fisheries directorate. Fishers themselves are reached through landing-beach associations, but they are not buyers.

**Market count:**
2,374 registered artisanal boats (528 motorised, 1,846 sail), from the FAO seafood-sector study as summarised in search results. One buyer: the government.

**The gap:**
The gap is a shared, offline-capable register of fishers, palaiês and canoes, with licence-fee status that coast guard and port officers can check from a phone. FAO's own free tools probably fill it.

**Possible product:**
A mobile, offline-first licence register with QR-coded cards, fee-payment status and an inspection log shared by the fisheries directorate, coast guard and port authority.

**MVP:**
An Android form app that syncs to a web register and prints QR cards.

**Pricing hypothesis:**
One-off donor-funded contract of roughly EUR 10–40k plus maintenance (estimate). There is no recurring SaaS revenue from operators.

**How to find first customers:**
FAO São Tomé office, fisheries directorate, and donor procurement notices (FAO, World Bank, AfDB blue-economy projects).

**Risks:**
FAO supplies its own free tools. Procurement is slow and political, and elections were held in 2026. It is a single customer, and it is not repeatable without selling to other small-island governments.

**Kill condition:**
FAO confirms it is deploying Calipseo or Open Arty (or another in-house tool) for the STP census. This is likely.

**Score:** 2/10

Scoring notes: pain 5, frequency 4 (annual licence plus inspections), mandatory 8, fragmentation 3, competition 3 (FAO's free tools), incumbent gap 3, buyer accessibility 4, willingness to pay 2 (operators: none; government: done-for-you donor contract only), MVP 6, distribution 2 (FAO is the only channel). Founder access: a non-local solo founder cannot sell this. It needs Portuguese, an in-country presence and donor-procurement experience.

**Sources:**
- Téla Nón, "Aprovado o regulamento da pesca artesanal em São Tomé e Príncipe" (2026-06-23): https://www.telanon.info/sociedade/2026/06/23/53368/aprovado-o-regulamento-da-pesca-artesanal-em-sao-tome-e-principe/
- Téla Nón, "Pesca artesanal ganha certificação profissional em São Tomé e Príncipe" (2026-04-30): https://www.telanon.info/sociedade/2026/04/30/52707/pesca-artesanal-ganha-certificacao-profissional-em-sao-tome-e-principe/
- FAO, seafood sector study in STP (fleet figures): https://www.fao.org/sao-tome-e-principe/noticias/detail-events/en/c/1274656/
- VOA Português on fishers' protest over zone limits: https://www.voaportugues.com/a/pescadores-s%C3%A3o-tomenses-alertam-que-nova-legisla%C3%A7%C3%A3o-pode-criar-tumultos/7515640.html
- RILP article on sustainable fishing in STP: https://www.rilp-aulp.org/index.php/rilp/article/download/449/211

No other candidate reached a full write-up.

## 3. Rejected

- **Domestic-worker payroll/INSS registration for households.** Decree-Law 25/2014 does create the obligation (employer files an identification form and pays contributions). But formal compliance is very low, the paying base is tiny, and a visit to the INSS counter is the substitute. Source: https://natlex.ilo.org/dyn/natlex2/natlex2/files/download/104597/DECRETO-LEI%20%2025%202014%20SANTO%20TOME.pdf
- **Exchange-house compliance (BCSTP reporting).** Only a handful of licensed houses (estimate). Banks and BCSTP's own templates are the substitute. Sources: https://bcstp.st/Upload/Lei_Cambial.pdf, https://rstp.st/2025/01/20/comunicado-banco-central-de-sao-tome-e-principe-bcstp/
- **Palaiê licence/card management for traders.** Subsistence traders with no ability to pay.
- **Moto-taxi, market-vendor and scrap registers.** No traceable recurring filing was found online. They are informal and the districts collect in cash.
- **Veterinary/abattoir records.** State veterinary services under Decree-Law 07/2019 and backyard livestock mean there is no private buyer. Source: https://faolex.fao.org/docs/pdf/sao196904.pdf (STP animal import/export legislation; exact document content unverified).

## 4. Method notes

Local-language (Portuguese) queries with STP-specific terms (*palaiê*, *Câmara Distrital*, *BCSTP*) worked best. The local news site Téla Nón was the only source of 2026 regulatory triggers. Generic Portuguese queries mostly returned Portugal (seg-social.pt, DGRM, DGAV) or Brazil results, so future queries should add "telanon" or ".st". FAOLEX and ILO NATLEX hold the actual STP decrees. Searches for municipal/district fee schedules and moto-taxi licensing returned nothing: those regimes are not published online.

Research model: Opus
