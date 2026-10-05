# DR Congo: offline ("quiet") industries pass

Research date: 2026-10-05. 12 WebSearch calls used (French queries). WebFetch not used. Results were thin: the search engine often returned Morocco or France for generic French queries, and almost none of the DRC registers could be confirmed. Anything not backed by a URL below is marked "unverified". The existing report (`research/countries/dr-congo.md`) covers facture normalisée, mining subcontracting, FERI, traceability and EUDR; none of these is repeated here.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Households as employers (domestic staff) | Social security (CNSS) registration for domestic workers | Search returned only Morocco; no DRC rule or portal found | unverified | Not verified | No evidence of enforcement or a filing workflow; likely almost entirely informal |
| Pharmacies / officines | ACOREP licensing and inspection; closures of non-compliant outlets | Closure and sealing operations in Kinshasa health zones reported; no sign of a software workflow | About 5,000 illegal pharmacies in Kinshasa, and "80% of practice illegal" per a pharmacists' association officer (reported by Bankable, unverified count) | Weak | Problem is illegality, not paperwork; operators are not in a position to pay for software |
| Taxi-moto, minibus and bus operators (Kinshasa) | New public-transport plate and driver professional card (announced Aug 2026); plates mandatory for motos; police crackdowns | Enforcement by police at the roadside; driver associations strike and protest (Kananga Jan 2026, national strike Mar 2026) | No operator count found | Reject | Drivers contest the rules, margins are tiny, the charge is a fee and not a recurring report |
| Artisanal-mining cooperatives and traders (négociants) | Cooperatives mandatory; assignment to artisanal mining zones (ZEA) planned in 2026; SAEMAPE supervision; approved buying houses | SAEMAPE field staff and cooperatives; June 2026 minister meeting with cooperatives on ZEA assignment | No reliable count found (unverified) | Weak | Remote, conflict-exposed, no payment channel; covered by traceability programmes (see existing report) |
| Gold buyers (comptoirs) | Approved buying houses; state firm DRC Gold Trading SA is sole authorised exporter of artisanal gold; payment partnership with CADECO signed 24 Aug 2026 | State monopoly on export; few buyers | Count unverified | Reject | Single state counterparty; tiny buyer set |
| Money changers (bureaux de change, cambistes) | BCC Instruction no. 7 of 1 Sept 2023 on manual exchange; national or provincial competence | Law-firm note only | 15 approved bureaux (older data, per a search summary; unverified) | Reject | Too few licensed operators; informal cambistes will not adopt software |
| Private schools | Approval by the education ministry; fees set with parent committees; 10% of collections to the province | Local notices only | Not found | Not verified | No recurring filing found that software could address |
| Used-goods, scrap-metal, pawn dealers | Police dealer registers | No DRC evidence found | Not found | Not verified | No searchable regulation |
| Livestock, abattoirs, vets | Vet certificates | Not searched with results | Not found | Not verified | Budget spent elsewhere; no evidence |
| Cemeteries and funeral homes | Municipal burial permits | Not searched | Not found | Not verified | No evidence |
| Informal market traders and street vendors | Municipal taxes | Not searched | Not found | Reject on prior | Collected by cash tax agents; no recurring reporting |

## 2. The strongest opportunities

No opportunity in this pass reached the bar of the brief's Final Decision Rule (identifiable buyers, evidence of manual work, a named offline channel, a dated trigger). Two weak leads are recorded so the orchestrator can see why they scored low. Neither is recommended.

### Opportunity: Compliance and inspection-readiness file for licensed pharmacies (ACOREP)

**Industry:**
Retail pharmacies (officines) in Kinshasa and Lubumbashi.

**Buyer:**
Owner-pharmacist of a licensed pharmacy.

**Trigger / Why now:**
ACOREP has said it holds exclusive authority over pharmaceutical inspection nationwide and launched a clean-up of illegal pharmacies. Provincial authorities in Kinshasa have sealed pharmacies and health centres judged non-viable, starting in Kalamu 1 and extending to 11 more health zones. (Dates other than the existence of the operation: unverified.)

**Current workflow:**
1. Pharmacist keeps licence, diploma, premises and stock documents on paper (unverified).
2. An inspection team visits; paperwork is shown at the counter.
3. Non-compliance leads to sealing or a fine.

**Pain:**
Closure risk. No evidence found of paperwork volume or of fees paid to intermediaries.

**Existing solutions:**
Unverified. Could not identify pharmacy software vendors in the DRC; paper files and informal "facilitators" are the likely substitute.

**The gap:**
Unknown. The evidence points to a licensing problem that software cannot fix (unlicensed operators), not a reporting workflow among licensed ones.

**Possible product:**
A document vault with expiry alerts and an inspection checklist for licensed pharmacies.

**MVP:**
Checklist and expiry reminders over WhatsApp or SMS in French.

**Pricing hypothesis:**
Low, perhaps $5-15 per month (estimate, no evidence). Likely a done-for-you service rather than software.

**How to find first customers:**
The pharmacists' association provincial council in Kinshasa (named in the Bankable article) and ACOREP's list of licensed pharmacies, if published (unverified).

**Offline evidence:**
Inspections and sealing are done in person; no digital portal found.

**Offline channel:**
Pharmacists' association chapter meetings in Kinshasa. Needs a local seller.

**Market count:**
Not found for licensed pharmacies. The only figures are about illegal ones (about 5,000 in Kinshasa, unverified).

**Risks:**
Tiny willingness to pay; no mandatory recurring report found; needs a local founder; the DRC payment problem (see existing report).

**Kill condition:**
No recurring submission to ACOREP exists (so far, none was found).

**Score:** 3/10

**Sources:**
- https://bankable.africa/en/business-climate/0310-354-drc-launches-clean-up-operation-in-pharmaceutical-industry-as-illegal-pharmacies-thrive
- https://infos.cd/actualite/sante/kinshasa-des-pharmacies-et-centres-de-sante-juges-non-viables-scelles/51889
- https://fr.allafrica.com/stories/202601260730.html

### Opportunity: Fleet and driver-credential tracker for urban public transport (plates and professional cards)

**Industry:**
Kinshasa minibus, bus and taxi-moto operators; owners of several vehicles.

**Buyer:**
Fleet owner who leases vehicles to drivers (bus-owner associations, "Esprit de Vie" credit beneficiaries).

**Trigger / Why now:**
August 2026: the Kinshasa provincial transport minister announced a specific plate for public-transport vehicles and a professional card for drivers. Drivers' associations denounced it as a charge increase and a "scam". The Kinshasa bus-credit scheme plans nearly 500 buses.

**Current workflow:**
1. Owner pays plate and card fees in person; documents are checked at roadside stops by police.
2. Penalties are paid on the spot.

**Pain:**
Roadside fines and harassment (reported in a Jan 2026 allAfrica story on controls and a national strike in Mar 2026). Not a reporting burden.

**Existing solutions:**
None found. Paper receipts and cash.

**The gap:**
Unknown; the pain is a fee and informal enforcement, not data movement.

**Possible product:**
Document-expiry and payment tracker for multi-vehicle owners.

**MVP:**
Spreadsheet-style vehicle register with expiry reminders.

**Pricing hypothesis:**
Very low; most buyers are individual owners paying in cash (estimate).

**How to find first customers:**
Driver and owner associations; the bus-credit scheme's beneficiary list (unverified whether public).

**Offline evidence:**
Cash fees, roadside document checks, strikes. No software listings.

**Offline channel:**
Transport associations. Requires a local, French- and Lingala-speaking seller.

**Market count:**
Not found.

**Risks:**
Rules contested and could be reversed; not a recurring regulator report; informal fees dominate.

**Kill condition:**
The plate and card are one-off purchases, not a recurring filing (likely).

**Score:** 2/10

**Sources:**
- https://www.mediacongo.net/article-actualite-166555_kinshasa_les_chauffeurs_denoncent_une_arnaque_derriere_l_imposition_de_nouvelles_plaques_aux_vehicules_de_transport_en_commun.html
- https://bankable.africa/en/news/2301-2286-kinshasa-bus-credit-scheme-to-deploy-nearly-500-buses-as-state-moves-to-recover-unpaid-fleet
- https://fr.allafrica.com/stories/202603160830.html
- https://fr.allafrica.com/stories/202601260534.html
- https://infos.cd/actualite/kinshasa-la-police-promet-de-traquer-toutes-les-motos-sans-plaque-des-ce-jeudi/7353

## 3. Rejected

- **Gold buyers and the artisanal gold chain:** DRC Gold Trading SA is the only company allowed to export artisanal gold (Bankable, 2026). One state counterparty, so no multi-buyer market. https://bankable.africa/en/mining/2508-3475-drc-gold-trading-strengthens-banking-links-to-draw-more-artisanal-gold-into-formal-channels
- **Artisanal-mining cooperatives (ZEA assignment, SAEMAPE):** Real obligation and a 2026 trigger, but no payers, no count, and conflict-exposed areas; also overlaps with traceability schemes rejected in the existing report. https://fr.allafrica.com/stories/202602280160.html
- **Bureaux de change and cambistes:** Only about 15 approved bureaux (older figure, unverified); the rest is informal. https://kalieu-elongo.com/nouvelle-reglementation-du-change-manuel-en-rdc-bureaux-de-changes-et-cambistes-tous-concernes/
- **Taxi-moto operators as individuals:** Fees paid in cash at the roadside; strong opposition to the 2026 measures.
- **Household employers:** No DRC obligation or enforcement found (all search results were about Morocco).

## 4. Method notes

- Worked: queries naming a specific regulator or city (ACOREP, Kinshasa plates, SAEMAPE) returned DRC news from bankable.africa, allAfrica, infos.cd and mediacongo.
- Did not work: generic French queries (domestic workers and CNSS, "comptoirs agréés CEEC", private schools) returned Morocco, France (CEE energy certificates) or Quebec. DRC official registers (ACOREP, CEEC, ARSP lists, BCC lists) did not appear in search results at all, so no register-based counts were possible.
- The searches that were planned but not run: livestock and veterinary certificates, scrap and second-hand dealer registers, cemeteries and funeral homes, fuel stations. No result either way; they stay "unverified".
- Overall conclusion: in the DRC the quiet industries are mostly informal and cash-based, so the regulator-first method finds few recurring filings. The better opportunities remain the ones in the existing report (facture normalisée and mining local-content).

## Opus review

**Verdict:** sound. An honest weak-lead report. Both leads are scored low and say plainly that no recurring filing exists. The 2026 triggers (the Kinshasa transport plate and card, the DRC Gold Trading–CADECO agreement) have dated sources.

**Claims checked:** none by search (0 searches; nothing scores 4 or higher).

**Re-scores:** none.

**Treat as unreliable:** "about 5,000 illegal pharmacies in Kinshasa" (an association officer quoted in the press); "15 approved bureaux de change" (older data).

Research model: Sonnet
