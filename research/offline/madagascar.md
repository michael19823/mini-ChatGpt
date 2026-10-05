# Madagascar: Offline-Industries Pass

**Date:** 2026-10-05 | **Searches used:** 13 of 20 | **Languages:** French (all regulator queries), English
**Existing report:** `research/countries/madagascar.md` (e-invoicing/EBM, vanilla exporters, payroll DS). Those are not repeated here.

## Bottom line

Madagascar's quiet industries are numerous, regulated on paper, and almost entirely informal or cash-based. The regulator-first method found real obligations, including cattle passports (FIB), gold-collector cards, vanilla collector cards, fishery-collector permits and medicine-depot licences. But nearly every one of them is either **run by the state itself** (the state issues the document, so the state controls the rails), or it is **paid for by operators with little or no money**. Madagascar also has political instability: a military-led transition has run since October 2025, and the African Union has suspended the country. Only one lead has a dated trigger and a buyer who can pay: the conversion of minibus transport cooperatives into companies. Even that lead is a service sold through local accountants, not software a foreign founder could sell on their own. **Nothing here is worth building. At most, one idea is worth testing in interviews through a local partner.**

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Taxi-be / suburban minibus operators (cooperatives) | Every cooperative must become an SARL, SA or GIE to keep its line licence after 31 Jul 2026. Drivers and receveurs (fare collectors) are affiliated to CNaPS | Paper cahier des charges from the Commune; cash fares, with electronic payment terminals only announced; cooperative statutes | About 6,000 minibuses on 82 routes in Antananarivo (Wikipedia/Codatu). Cooperative count not found | **Candidate (weak)** | Hard dated trigger that creates new bookkeeping, tax and payroll duties. The buyer is the new company, reached through accountants |
| Medicine depots (dépôts de médicaments) | Ministerial licence (arrêté), INSPC training, supply only through approved channels; a 2026 bill would align their status with pharmacies | Licence file submitted at the counter via district and region; no software listings found | About 1,500 depots vs about 300 pharmacies (L'Express, Apr 2026) | **Candidate (weak)** | Real register and stock-control duty, but tiny margins and a stalled bill |
| Cattle (zebu) owners and traders, cattle markets | Fiche Individuelle de Bovin (FIB) per animal, transport and sale permits (Décret 2017-023); electronic ear-tag pilot (STIB) | Paper FIB issued by the chef de district; BIANCO documents payments demanded at every step | National herd of millions (not counted here); STIB pilot target was 80,000 head | Rejected | The state owns the register; the pain is corruption, not workflow; the payers are farmers |
| Gold collectors and comptoirs (gold buying houses) | COM collector card, laissez-passer, withholding of mining royalties at source; central bank collection points (Sep 2026) | Mayors keep paper card registers; cash trade | Not found; the Cour des comptes 2022 audit notes most of the trade is informal | Rejected | The state is building its own buying channel; operators avoid traceability |
| Vanilla collectors and preparers (upstream of exporters) | CNV professional card; DRCC-certified purchase invoices; campaign accreditation window (11–30 Nov 2025) | Accreditation by paper or email; lists published by the ministry | Not counted; exporters about 80–300 (existing report) | Rejected | Already covered via exporters; collectors are seasonal and cash-poor in an oversupply crisis |
| Fishery-product collectors (cat. A/B) | Collection permit (Arrêté 21946/2021); monthly catch declarations sent by post or email to the regional fisheries office | FiTI report: declarations by mail; most collectors are informal | "Numbers are not known" (FiTI 2024) | Rejected | No count, mostly informal; exporters already covered by ASH/HACCP consultants |
| Precious-stone dealers | BCMM trading licence; export laissez-passer above value thresholds | Counter process at BCMM, which takes "several days" | Not found | Rejected | Small, opaque, partly informal; single state counter |
| Household employers of domestic workers | Loi 2018-035 on domestic workers; C189 ratified; CNaPS affiliation in principle | No online channel found; affiliation rarely applied | Not found | Rejected | Wages are very low; households will not pay for payslip or CNaPS software |
| Scrap metal / second-hand dealers | No police-register obligation found | n/a | n/a | Rejected (no evidence) | No obligation surfaced in searches (not searched in depth) |
| Butchers / small abattoirs | FIB check at slaughter; veterinary inspection | Paper | Not found | Rejected | Same state-owned FIB rail as cattle |
| Beekeepers, tattoo studios, well drillers, backflow testers, chimney sweeps | Not regulated as distinct trades, or negligible | n/a | n/a | Not applicable | Market too small or no specific regime |

## 2. Strongest opportunities

### Opportunity: "Coopérative → société" compliance pack for minibus operators (via accounting firms)

**Industry:**
Urban and suburban minibus transport (taxi-be), Antananarivo first.

**Buyer:**
The newly formed transport SARL, SA or GIE (the former cooperative's manager or treasurer). Bought through the cabinet comptable (accounting firm) that keeps its books.

**Trigger / Why now:**
- A state decision implemented by the ATT (Agence des Transports Terrestres): from 31 July 2026, only companies (SARL, SA or GIE) may operate public transport lines. Cooperatives had one year to convert.
- The Commune of Antananarivo has a new cahier des charges for taxi-be.
- Electronic fare-payment terminals have been announced.
- CNaPS affiliation of drivers and receveurs was agreed in a Commune–CNaPS–cooperatives partnership.
- **Unverified:** whether the deadline was enforced or extended after the October 2025 change of regime. No 2026 enforcement article was found.

**Current workflow:**
1. Vehicle owners pay a daily "versement" to the cooperative in cash. Drivers keep the rest; receveurs collect fares.
2. The cooperative keeps paper membership, vehicle and line registers for the Commune and the ATT.
3. As a company, it must now keep commercial accounts, file DGI returns, run monthly payroll declarations (IRSA, CNaPS, OSTIE) for drivers and receveurs, and keep its fleet and licence documents current for the ATT and the Commune.

**Pain:**
- Operators who have never kept formal books suddenly face corporate tax, payroll and licence-renewal duties.
- Losing the line licence ends the business.
- Evidence of the pain is inferred from the reform itself. No operator complaint was found.

**Existing solutions:**
- Local accounting firms working on paper or Excel.
- Sage 100 / Sage Paie via SRA Madagascar, used by larger firms.
- Ride-hailing and "uberisation" apps for taxis (Eco Austral), which do not cover minibus line compliance.
- The announced electronic payment terminal providers (not identified).
- The Commune's digital taxi licence, in place since 2020.

**Offline evidence:**
- Cash fares and paper cahier des charges.
- Licensing is done at the Commune and ATT counters.
- No minibus-fleet-compliance software found in Madagascar.

**Offline channel:**
- FMA (Fikambanan'ny Mpitatitra Antananarivo), the transport operators' federation; the UCTU (urban) and UCTS (suburban) cooperative unions.
- The ATT, which keeps the list of authorised operators.
- Accounting firms that handled the conversions.

**Market count:**
About 6,000 taxi-be on 82 routes in Antananarivo (Wikipedia / Codatu). The number of operating companies is unknown. **Estimate:** a few hundred line operators nationally, each with 10–100 vehicles.

**The gap:**
No tool links the daily cash versement per vehicle to the company's ledger, the monthly payroll declarations for crews and the ATT/Commune licence file. This is a hypothesis.

**Possible product:**
A mobile-first daily versement log per vehicle, generating monthly accounting entries, crew payroll declarations and a licence and insurance expiry board for the ATT and Commune. It would be sold to accounting firms serving transport companies.

**MVP:**
A spreadsheet-style web app: vehicle register, daily cash entry, monthly CNaPS/IRSA output for crews, and document expiry alerts. Piloted with one accounting firm and 2–3 operators.

**Pricing hypothesis:**
About 5,000–10,000 MGA per vehicle per month (about US$1–2, estimate), or about US$50–100/month per accounting firm. Buyers will probably pay only for a **done-for-you service**: an accountant using the tool, not the operator.

**How to find first customers:**
- The FMA, UCTU and UCTS offices in Antananarivo.
- The ATT operator list.
- Accountants who handled the conversions.

**Risks:**
- The deadline may have been suspended after the regime change.
- Strike-prone, politically sensitive sector (taxi-be strikes in 2024–2025).
- Very low prices.
- A state-chosen e-ticketing vendor may bundle fleet reporting.
- **A non-local solo founder cannot sell this.** It needs a Malagasy partner, ideally an accounting firm.

**Kill condition:**
- The ATT/Commune deadline was postponed indefinitely.
- Or the e-ticketing contract includes fleet and payroll reporting.
- Or the companies are shells that keep paying cash with no formal payroll.

**Score:** 3/10

**Sources:**
- https://www.lexpress.mg/2025/07/antananarivo-une-societe-de-transport.html
- https://tanikomadagascar.com/2025/07/07/anyananarivo-une-societe-de-transport-public-en-gestation/
- https://www.agencemalagasydepresse.com/economie/transports-les-cooperatives-statut-a-reviser/
- https://2424.mg/antananarivo-transport-urbain-la-mairie-boucle-le-nouveau-cahier-des-charges-pour-les-taxi-be/
- https://www.lexpress.mg/2025/04/mobilite-le-transport-urbain-lheure-de.html
- https://www.lexpress.mg/2025/03/antananarivo-tous-les-transports.html
- https://ecoaustral.com/transport-urbain-la-course-a-luberisation-est-lancee/
- https://fr.wikipedia.org/wiki/Transports_en_commun_d'Antananarivo
- https://www.madagascar-tribune.com/Les-taxi-be-reprennent-du-service-apres-des-negociations-sous-fond-de-pression.html

---

### Opportunity: Stock and supply register for licensed medicine depots

**Industry:**
Medicine depots (dépôts de médicaments): rural and peri-urban licensed outlets selling essential medicines.

**Buyer:**
The dépositaire (owner-operator holding the ministerial licence), or a wholesaler (grossiste) supplying many depots.

**Trigger / Why now:**
- A 2026 bill would let depots open where pharmacies exist and align their status with pharmacies. Pharmacists oppose it, and examination was adjourned in June 2026.
- The AMM (Agence du médicament de Madagascar) is campaigning against illicit medicine sales (April 2026).
- Depots are spreading into Antananarivo's suburbs (June 2026).
- If the bill passes, depots would probably face pharmacy-level traceability and inspection. This is unverified.

**Current workflow:**
1. Buy only from approved wholesalers.
2. Keep paper purchase and sales records for district and regional inspection.
3. Renew the licence through the district, the region and the Direction de la Pharmacie.

**Pain:**
- Inspection and licence-loss risk.
- Proving supply through official channels during anti-counterfeit campaigns.
- Direct evidence of paper registers was not found; this is inferred.

**Existing solutions:**
- Paper registers.
- Wholesalers' own order systems.
- Generic pharmacy POS software sold in Madagascar (not identified by name in searches).
- Donor-funded supply-chain tools for public health facilities, such as the logistics systems behind the MSH/USAID IMPACT programme, which do not target private depots.

**Offline evidence:**
- Licence applications go through district and regional counters, plus INSPC training.
- No depot-specific software found.

**Offline channel:**
- The approved wholesalers who supply all 1,500 depots.
- INSPC training cohorts.
- The Direction de la Pharmacie's list of licensed depots.

**Market count:**
About 1,500 depots and about 300 pharmacies (L'Express, April 2026).

**The gap:**
A cheap, offline-capable register proving origin from approved wholesalers, ready for inspection. This is a hypothesis.

**Possible product:**
A phone app that records wholesaler invoices and daily sales by product and prints an inspection-ready register. It would be distributed by a wholesaler as a loyalty tool.

**MVP:**
Invoice-photo capture, product list from one wholesaler's catalogue, and a monthly register PDF.

**Pricing hypothesis:**
Paid by the wholesaler at about US$200–500/month for its depot network (estimate). Depots themselves would pay at most US$2–5/month.

**How to find first customers:**
- The top 3–5 pharmaceutical wholesalers in Antananarivo.
- INSPC training sessions.

**Risks:**
- The bill is stalled and inspections are lax.
- Depot margins are tiny.
- A wholesaler could build this itself.
- **A non-local founder cannot sell this without a local partner.**

**Kill condition:**
- Inspectors do not ask for registers in practice.
- Or wholesalers show no interest in funding it.

**Score:** 2/10

**Sources:**
- https://www.lexpress.mg/2026/04/soins-et-sante-louverture-des.html
- https://www.lexpress.mg/2026/06/sante-les-pharmaciens-rejettent-le.html
- https://www.lexpress.mg/2026/06/antananarivo-les-depots-de-medicaments.html
- https://www.lexpress.mg/2026/04/commerce-illegal-les-ventes-illicites.html
- https://www.lexpress.mg/2025/07/sante-la-loi-sur-la-vente-de.html
- https://msh.org/wp-content/uploads/2024/09/IMPACT-TechnicalHighlight-Regulatory-Systems-Reform-FR-LHv3-WEB-1.pdf

## 3. Rejected

- **Zebu FIB / cattle-trade paperwork.**
  - Décret 2017-023 makes the FIB mandatory for every bovine, plus permits for movement and sale. The STIB electronic ear-tag pilot started in 2021, and a February 2026 Ministry of Livestock document and a June 2026 digital agriculture infrastructure event show the state digitising this itself.
  - The BIANCO (anti-corruption bureau) reports that the pain is informal payments at every step. Software cannot fix that.
  - The payers are smallholders.
  - Sources: https://textes.lexxika.com/lois-malagasy/decret-n2017-023-du-10-janvier-2017-relatif-au-recensement-a-lidentification-a-la-circulation-et-a-la-commercialisation-des-bovins/, https://bianco-mg.org/wp-content/uploads/2024/10/SYNTHESE-RAPPORT-ACW-FIB_-DT-Toliara.pdf, https://www.ifc.org/fr/stories/2022/un-systeme-de-marquage-moderne-pour-proteger-une-race-bovine-ancienne-a-madagascar, https://cgspace.cgiar.org/server/api/core/bitstreams/ea143266-eb64-4ba1-986b-01e8fdbd9a8b/content
- **Gold collectors and comptoirs.**
  - The COM (Centrale de l'or de Madagascar, which replaced ANOR) issues collector cards and the laissez-passer.
  - Mayors keep the card registers.
  - Royalties are withheld at source, and the central bank opened its own gold collection points in September 2026.
  - The state is the substitute, and operators avoid traceability.
  - Sources: https://www.studiosifaka.org/articles/actualites/item/7870-la-centrale-de-l-or-de-madagascar-remplace-l-agence-nationale-de-l-or.html, https://fr.allafrica.com/stories/202609010136.html, https://www.lexpress.mg/2026/09/betsiboka-lexploitation-de-lor-mise.html, https://ccomptes.mg/uploads/Suivi-des-activites-d-orpaillage-dans-les-phases-de-production-et-de-commercialisation1674455842.pdf
- **Vanilla collectors and preparers.**
  - The CNV card, DRCC-certified invoices and the campaign accreditation window are real obligations.
  - But the buyers are cash-poor in an oversupply crisis, and the exporter angle is already in the country report.
  - Source: https://www.pic.commerce.mg/sites/default/files/2025-11/AVIS%20VANILLE%20campagne%202025-2026.pdf
- **Fishery-product collectors.**
  - Permit under Arrêté 21946/2021; catch declarations are sent monthly by post or email.
  - But FiTI says the collectors' numbers are unknown and most are informal.
  - Source: https://fiti.global/wp-content/uploads/2025/03/FiTI_MDG_RapportDetaillee_FR_20241227_Final.pdf
- **Domestic-worker employers.** Loi 2018-035 and C189 ratification exist, but wages are very low and there is no evidence that CNaPS affiliation is enforced. Households will not pay. Source: https://www.assemblee-nationale.mg/wp-content/uploads/2020/09/Loi-n°2018-035-travailleurs-domestiques.pdf
- **Gem dealers.** There is a single counter at the BCMM (Bureau du Cadastre Minier de Madagascar), and the trade is opaque and partly informal. No count was found.

## 4. Method notes

- **What worked:** French regulator vocabulary ("carte de collecteur", "FIB", "arrêté", "registre", "cahier des charges") together with the Malagasy dailies (lexpress.mg, newsmada, 2424.mg, allAfrica FR). These surfaced dated 2025–2026 reforms quickly. Audit bodies (the Cour des comptes and the BIANCO anti-corruption bureau) and transparency reports (FiTI, EITI) proved the best sources of evidence on how the workflows really run.
- **What didn't:** queries on domestic workers and gems returned NGO and tourist pages. No operator counts exist for most trades, and no trade-association directories are online.
- **Overall:** in Madagascar, a "quiet industry" usually means one that is informal and state-administered, so there is little room for a third-party software vendor.

Research model: Opus
