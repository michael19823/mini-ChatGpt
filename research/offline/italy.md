# Italy: offline-industries pass (2026-10-05)

Scope: quiet industries only, found through regulators, registers and official forms. Opportunities already in `research/countries/italy.md` (FSE 2.0, HVAC registry + F-gas, RENTRI autospurgo) are not repeated.

Method: 35 WebSearch calls, mostly in Italian; WebFetch and GitHub tools not used. Anything not confirmed in a source is marked "unverified" or "estimate".

Summary: Italy's quiet industries are well covered, either by micro-vertical software vendors (compro oro, vehicle rental, oil mills) or by the association/CAF/patronato network (domestic employers, beekeepers, farmers, market traders, fishermen). Two weak-to-moderate leads survive. Both come from public utilities and the subsoil, not from dealers.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Households employing colf/badanti | Payslips, quarterly INPS contributions (10 Apr/Jul/Oct/Jan), TFR, CU, new CCNL from 1 Nov 2025 | Families use CAF, patronati, Assindatcolf/Domina offices; INPS launched a video guide for families with irregular contributions from Q1 2026 | 804,464 domestic workers with at least one contribution in 2025 (INPS Osservatorio, June 2026) | **Rejected** | Saturated by service channels: Assindatcolf, CAF CGIL/ACLI and other CAFs, Webcolf Srl, the free INPS calculator. Households buy a done-for-you service, not software |
| Compro oro (gold buyers) | D.Lgs 92/2017: OAM register, progressively numbered transaction form with photo, dedicated bank account, AML | Paper "registro vidimato" from the questura still printed; register sign-up is telematic | Not found for the OCO register; only 404 of 699 professional gold operators are also OAM compro oro (OAM/Banca d'Italia, 2025) | **Rejected** | At least 7 dedicated vendors: Fixing, OroManager, OroGest, NvL, Fv ORO, Gestione Oro, software-compro-oro.it |
| Second-hand dealers / conto vendita (art. 126/128 TULPS) | Daily register of operations, shown to police on request | Paper registers stamped by the comune/questura | Not found | **Rejected** | Nothing is filed (register only shown on inspection), so there is no recurring submission to automate; conto-vendita POS software already exists |
| Gun shops (armerie) | Daily operations register (kept 50 years); monthly communication to the questura, to be replaced by the SITAM digital system (DM 114/2023) | Monthly lists sent to the questura; SITAM accessed with credentials issued by the questura | Not found (estimate: low thousands, unverified) | **Watch** | SITAM go-live date and whether it has an API for shop software could not be confirmed |
| Vehicle rental without driver (incl. seasonal scooter rental) | CaRGOS: send renter data to the Polizia di Stato before handing over the vehicle (DL 113/2018, amended by the April 2025 security decree); arrest up to 3 months or fine | Small renters type data into the CaRGOS portal; DIGOS sweep of rental firms in a Sicilian province (Aug 2026); a company seized near Benevento | Not found | **Rejected** | CaRGOS has a bulk web service, already integrated by RentHub, GestiRent, AppointRent, TopRentApp, GestionaleNoleggi and I-Factory |
| NCC (chauffeur hire) | Electronic foglio di servizio per trip, RENT register | MIT app/portal, experimental phase | Not found | **Watch** | Decrees suspended by TAR Lazio (Aug 2025) and challenged at the Constitutional Court; no stable workflow |
| Beekeepers | Annual BDN hive census 1 Nov–31 Dec; apiary signage | Associations and ASL vets enter it on the beekeeper's behalf | Not found (estimate: tens of thousands, unverified) | **Rejected** | Annual, free BDN, done by associations; no money |
| Small-scale fishermen | E-logbook (simplified below 12 m) under Reg. 2023/2842; VMS above 12 m | Coldiretti Impresa Pesca and CAP centres help; MASAF e-logbook app on Google Play | "3,000 Italian fishing vessels" newly affected by hi-tech obligations (ANSA) | **Rejected** | The state supplies the free app and equipment; vessels under 10 m are largely exempt |
| Oil mills (frantoi) | SIAN telematic oil register (loads/unloads) | Filed in the SIAN portal; olive merchants' registrations within 6 hours (2024 DM) | Not found | **Rejected** | TeamSystem Oil and other ERPs already file to SIAN |
| Microbreweries | Excise: conditioned-beer register, annual declaration by 31 Jan by PEC | PEC to the customs office | Not found | **Rejected** | 2025 simplified regime and excise cut reduced the work to an annual PEC |
| Street/market traders (ambulanti) | Annual regularity attestation (ex VARA): INPS/INAIL/CCIAA/tax checks; Piemonte 2026 deadline 17 Apr | Filed with the comune, usually through ANVA/FIVA associations | Not found | **Rejected** | Annual; associations do it as part of membership |
| Well drillers / geothermal probe drillers | L. 464/1984: ISPRA Mod. 1–4 for drilling deeper than 30 m, plus regional/provincial authorisation; Lombardy RSG register for geothermal probes | PDF forms sent by PEC to ISPRA; ISPRA estimates real wells in some regions at 10x those reported; the association mails paper ballots | ANIPA: about 125 members (2024) | **Opportunity (weak)** | One job, 2–4 receiving bodies, but a tiny market with weak enforcement |
| Small in-house drinking-water suppliers (comuni "in economia") | D.Lgs 18/2023: water safety plans (PSA), half-yearly data to the ISS AnTeA platform, PFAS limits (pushed back to 12 Jul 2026), ARERA regulatory convergence by 31 Dec 2026 | Lazio has not yet integrated data into AnTeA (Mar 2026); small comuni lack staff; PSA written by consultants | 1,738 in-house water managers out of 2,110 (2022, cited in Parliament); small systems are about 90% of operators and serve about 10% of the population | **Opportunity (best)** | Several new obligations in 2026, a public receiving platform and an under-resourced buyer |
| Gas installers to distributors (ARERA 40/2014) | Documentary check: Allegati H40/I40 and technical attachments to each local gas distributor | Distributors report incomplete or inconsistent documents; mixed PEC and portals | Not found | **Not pursued** | DiCo software is crowded (unverified); the budget went to stronger leads |

## 2. Opportunities

### Opportunity: AnTeA + PSA + PFAS compliance kit for comuni that run their own aqueduct

**Industry:**
Small drinking-water supply run directly by municipalities ("gestione in economia") and small local water operators, mostly in mountain and inland areas.

**Buyer:**
The comune's ufficio tecnico manager (often one technician covering roads, water and buildings), or the secretary of a small consortium or mountain union. The comune pays from its water budget, by direct award (small amounts can be bought directly from MEPA or by affidamento diretto under D.Lgs 36/2023).

**Trigger / Why now:**
- D.Lgs 18/2023 (implementing Directive 2020/2184) requires half-yearly transmission of drinking-water data to the ISS AnTeA platform, which is due to be fully operational in 2026.
- New PFAS limits under D.Lgs 102/2025 apply from 12 Jul 2026 (pushed back from 12 Jan 2026).
- Risk-based water safety plans (PSA) are due between 2027 and 2029.
- From 31 Dec 2026, municipalities that run the water service themselves must comply with ARERA regulation (tariff method, convergence).

**Current workflow:**
1. The comune contracts a private lab for the internal controls; the ASL/ARPA runs the external controls.
2. Results come back as PDF reports. The technician files them, or the lab or a consultant sends them on.
3. Half-yearly data has to reach AnTeA. In regions where integration is late (Lazio, March 2026), it is unclear who uploads what.
4. The PSA is outsourced to an engineering consultant as a one-off document, then not maintained.
5. ARERA data collections are handled by the ragioneria or a consultant, if at all.

**Pain:**
- ISS describes small systems as about 90% of Italian water operators. They face "structural issues" and limited capacity to invest.
- AnTeA is "not yet fully operational" in Lazio (Agenparl, Mar 2026).
- PFAS monitoring adds new parameters and costs (the cost per comune was not found).
- The obligations are layered and come from three bodies (ISS/AnTeA, ASL, ARERA). Each comune has one technician.

**Existing solutions:**
- Accredited labs that sample and analyse, and may upload results (whether they upload to AnTeA is unverified).
- Engineering consultants writing PSAs. ISS/regional PSA team-leader courses (e.g. Asti).
- Large ATO operators (Acque Bresciane, Hera, etc.) absorbing small comuni and doing PSAs in-house.
- The AnTeA-area PSA module from ISS itself, which is free.
- No vertical SaaS for in-house municipal waterworks was found in this pass (thin scan).

**Offline evidence:**
- Lab results arrive as PDFs; PSAs are one-off consultant documents; the comune technician works by PEC.
- AnTeA regional integration is lagging.
- No software listings, forums or review pages target "comuni in economia" water compliance.

**Offline channel:**
- Accredited drinking-water labs that already serve these comuni (resell or bundle).
- Regional ANCI and UNCEM (mountain municipalities) newsletters and training days.
- ATO/EGATO bodies that still oversee in-house operators.
- PSA team-leader courses run by ISS and the regions, where the attendees are exactly the buyers.
- Phone outreach to comuni listed as in-house operators in ARERA/EGATO records.

**Market count:**
- 1,738 in-house water managers out of 2,110 water service managers in 2022 (data cited in Camera dei Deputati bill documents).
- Small systems are about 90% of operators (ISS / Quotidiano Sanità).
- The count of operators still in house by 2026 is lower and unverified.

**The gap:**
No product links one record per supply zone (sources, treatment, lab results, PFAS parameters) to (a) a ready AnTeA half-yearly upload, (b) a living PSA hazard/risk register and (c) the ARERA data the comune now owes. Labs do (a) only for their own data, consultants do (b) once, and nobody does (c) for a 1,500-inhabitant comune.

**Possible product:**
A light web app for each comune: register supply zones and sources once, import lab PDFs/CSVs and validate them against D.Lgs 18/2023 limits including PFAS, produce the AnTeA half-yearly file (or upload it), and keep the PSA risk register and audit trail current. Sold as software plus an annual done-for-you service.

**MVP:**
Lab-report import (2–3 major labs' formats), parameter limits check with PFAS, and AnTeA half-yearly export for one region where AnTeA is live. A PSA template and risk register to follow.

**Pricing hypothesis:**
EUR 1,500–4,000 per comune per year, including service (estimate). That is below typical consultant PSA fees (unverified) and within direct-award thresholds. Willingness to pay is mainly for **service plus software**: a comune technician will not self-serve without support.

**How to find first customers:**
- Lists of in-house operators from EGATO/ATO records and ARERA data collections.
- ANCI/UNCEM regional federations.
- Partnership with 1–2 accredited labs in a region with many small mountain comuni (Piemonte, Lombardy valleys, Abruzzo, Calabria). Unverified which regions have the most.

**Founder access:**
Needs Italian-language sales and public-procurement familiarity (MEPA registration, electronic invoicing to the public administration, CIG codes). A non-local founder would struggle without an Italian partner, ideally a lab or an engineering firm.

**Risks:**
- Comuni consolidate into ATO operators, so the market shrinks every year.
- ISS's free AnTeA/PSA tools may be "good enough".
- Labs may bundle AnTeA upload for free.
- Public-sector sales cycles are slow, and budgets are tiny.
- Whether AnTeA accepts third-party uploads or has an API is unverified.

**Kill condition:**
Kill the idea if any of these holds:
- AnTeA uploads are done by the labs or ASL by default, so the comune has no task.
- Fewer than about 500 comuni remain in house in 2026.
- Five interviewed comune technicians say their lab or consultant already handles AnTeA and PSA for under EUR 1,000/yr.

**Score:** 4.5/10 (pain 6, frequency 5 (half-yearly plus continuous PSA), mandatory 8, fragmentation 6 (regional AnTeA integration), competition 6, incumbent gap 6, buyer access 6, WTP 4, MVP 6, distribution 5)

**Sources:**
- https://documenti.camera.it/leg19/pdl/pdf/leg.19.pdl.camera.1056.19PDL0031240.pdf (2,110 managers, 1,738 in house, 2022; small mountain comuni)
- https://temi.camera.it/leg19/temi/acque (ARERA convergence by 31 Dec 2026)
- https://www.agendadigitale.eu/infrastrutture/antea-un-approccio-cooperativo-per-la-gestione-delle-risorse-idriche/
- https://www.renewablematter.eu/pfas-nuove-garanzie-per-acqua-che-beviamo (half-yearly AnTeA transmission; PFAS from 2026)
- https://certifico.com/component/acym/archive/1667-monitoraggio-livelli-di-pfas-nellacqua-potabile-prorogato-12-gen-12-lug-2026 (PFAS pushed back to 12 Jul 2026)
- https://agenparl.eu/2026/03/24/acqua-potabile-il-sistema-antea-non-e-ancora-a-regime-nel-lazio-ritardi-nellintegrazione-dei-dati/
- https://www.iss.it/documents/20126/6683812/Analisi+rischio+sicurezza+acque+potabili+e+risultati+strumenti+operativi+definiti+nel+DLvo+23+febbraio+2023+n.18.pdf/11850da2-7a00-9b52-66bf-44498c25b8ed?t=1771318004246
- https://www.quotidianosanita.it/?p=30032 (small systems about 90% of operators, about 10% of the population)
- https://www.quotidianosanita.it/?p=87418 (PSA team-leader course, Asti)

### Opportunity: One drilling job to ISPRA L.464/84 + region/province + geothermal registers, for well and geothermal-probe drillers

**Industry:**
Water-well and geothermal-probe drilling contractors (small, often family firms, concentrated in the north).

**Buyer:**
The owner or office manager of the drilling company, sometimes the hydrogeologist who signs the technical forms.

**Trigger / Why now:**
- No new 2025–2026 law was found. The obligation dates from 1984.
- The demand driver is heat-pump and geothermal growth: Lombardy's RSG register makes every new probe installation register online first.
- Regional authorisation regimes keep being revised (Sicily decrees 2022, 2023 and Oct 2025; Calabria June 2024).
- The why-now is weak.

**Current workflow:**
1. Apply to the Region/Province (Genio Civile) for drilling authorisation or concession. Each region has its own forms and portals.
2. For drilling deeper than 30 m, send ISPRA Mod. 1 (start), Mod. 2/3 (suspension/resumption) and Mod. 4/4bis (end, with stratigraphy, filters, aquifers) as PDFs by PEC. The same communication goes to the regional geological service.
3. For closed-loop geothermal in Lombardy, register in the RSG before installation. A Province authorisation is needed for probes deeper than 150 m.
4. Re-type the same location, depth and stratigraphy data in each.

**Pain:**
- Fines of EUR 258–2,582 for not complying with L.464/84.
- ISPRA notes that actual wells in some regions may be ten times those reported, so compliance is poor and enforcement weak.
- The same data goes to 2–4 bodies in different formats.

**Existing solutions:**
- ISPRA's downloadable PDF forms plus PEC.
- Regional portals (Lombardy RSG).
- Geologists and hydrogeologists who prepare the paperwork as part of their fee.
- Generic stratigraphy and log software. Specific products were not verified.
- No dedicated "drilling compliance" product found.

**Offline evidence:**
- PDF forms by PEC.
- The association (ANIPA) runs board elections by posted paper ballots to about 125 members.
- No forums, SaaS listings or reviews for the trade.

**Offline channel:**
- ANIPA (association of well and geothermal drillers), its newsletter and the *Acque Sotterranee* journal.
- Drilling-rig and casing/filter suppliers.
- Regional geologists' orders (Ordini dei Geologi), whose members sign the forms.

**Market count:**
- ANIPA has about 125 member firms (2024 ballot mailing).
- The total number of drilling firms in Italy was not found (estimate: a few hundred to about 1,000, unverified).

**The gap:**
No tool takes one drilling record (location, depth, stratigraphy, filters, piezometric level) and fills in the ISPRA Mod. 1–4, the regional form and the RSG entry.

**Possible product:**
A form-filler where the driller enters each job once and gets pre-filled ISPRA PDFs, PEC-ready packages and regional/RSG data, with deadline reminders.

**MVP:**
ISPRA Mod. 1 and 4 generator plus the Lombardy RSG field set, for one region.

**Pricing hypothesis:**
EUR 20–40 per job or EUR 300–600 per firm per year (estimate). Drillers would likely pay only if a geologist or the association recommends it. WTP is weak, because the geologist already absorbs the work.

**How to find first customers:**
- The ANIPA member list.
- The RSG public map/register in Lombardy, to identify active installers.
- Rig suppliers' customer days.

**Founder access:**
A non-local founder could build it but would need an Italian partner (a geologist) to sell it through ANIPA.

**Risks:**
- Tiny market; enforcement is weak, so many firms simply don't file.
- The geologist, not the driller, may own the task.
- ISPRA may launch an online form.

**Kill condition:**
Kill the idea if the total number of drilling firms is under about 500, or if interviews show the geologist always files and charges nothing extra.

**Score:** 3/10 (pain 4, frequency 5, mandatory 7, fragmentation 6, competition 7, gap 6, buyer access 5, WTP 2, MVP 8, distribution 5; capped by market size)

**Sources:**
- https://www.isprambiente.gov.it/contentfiles/00010500/10535-specifica-tecnica-l464-84.pdf
- https://cittametropolitana.pa.it/wp-content/uploads/sites/2/2022/08/ISPRA_Istruzioni-per-linvio-Moduli.pdf
- https://www.provinciasondrio.it/sites/default/files/contents/modulistica_procedimenti/154/adempimenti-l-464_1984.pdf
- https://acquesotterranee.net/acque/article/download/690/503/6567 (actual wells up to 10x reported)
- https://www.regione.sicilia.it/sites/default/files/2022-03/DECRETO%20prot.%20n.33449%20del%2003-03-2022.pdf (fines; double communication ISPRA + Region)
- https://ediltecnico.it/lombardia-online-il-sito-del-registro-delle-sonde-geotermiche/
- https://www.assolombarda.it/informazioni/37286
- https://www.acquesotterranee.net/acque/article/view/730 (ANIPA, about 125 members)

## 3. Rejected

- **Domestic employers (colf/badanti):** 804k workers, strong pain, but buyers are households that pay for a service. The channel is owned by Assindatcolf, Domina, CAF CGIL/ACLI and other CAFs, plus Webcolf Srl and the free INPS calculator. The 2026 triggers (new CCNL, INPS irregularity outreach) feed those services.
- **Compro oro:** at least 7 vertical vendors (Fixing, OroManager, OroGest, NvL, Fv ORO, Gestione Oro, software-compro-oro.it); the market shrank with the 2025 OPO register.
- **Second-hand dealers (TULPS art. 128):** register only shown on inspection; nothing is filed.
- **Vehicle rental / CaRGOS:** an enforced, per-job obligation, but CaRGOS has a web service already integrated by at least 6 Italian rental systems.
- **Beekeepers (BDN census), small-scale fishing (e-logbook), oil mills (SIAN), microbreweries (excise), market traders (annual attestation):** either annual and free with association help, or already served (TeamSystem Oil, the MASAF app).
- **NCC electronic service sheet:** decrees suspended (TAR Lazio Aug 2025, Constitutional Court). Re-screen if reinstated.

Watch: **SITAM for gun shops**. A digital replacement for the paper daily register and the monthly questura lists. Re-screen once the go-live date and API availability are confirmed; it could create a POS-to-SITAM double-entry gap.

## 4. Method notes

What worked:
- Italian queries built around the named obligation (law number, form name, portal name such as "CaRGOS", "SITAM", "AnTeA", "L. 464/84") surfaced official PDFs, enforcement news and, quickly, vendor pages.
- Vendor-existence checks ("gestionale" + obligation) killed most dealer-register ideas within one search.
- Parliamentary dossiers (camera.it) gave the best market counts.

What didn't:
- Register counts for dealer licences (questura licences are not published nationally).
- Pricing for domestic-work services.
- Anything about SITAM's actual go-live.
- Italy's quiet trades are heavily intermediated by associations, CAFs, patronati and CAAs, which is why most of the screen was rejected.

Research model: Opus
