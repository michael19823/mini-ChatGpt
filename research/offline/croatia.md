# Croatia: Offline-Industries Pass

**Date:** 2026-10-05. **Budget:** I made 20 WebSearch calls out of 20. One call was refused with "usage limit" (on foreign-worker accommodation), and I re-ran it after the coordinator told me to resume. WebFetch was not used.
**Scope note:** This pass does not re-report the e-ONTO/ePL waste opportunity from `research/countries/croatia.md`. Scrap-metal buyers fall under that same waste register (see Rejected).

Accessibility: Croatia is an EU and eurozone member. A foreign founder can sell there. In practice every quiet industry below needs Croatian-language support, and most state portals sit behind NIAS (e-Građani) credentials, which only the obliged person holds. That makes the work hard to automate on a user's behalf (general knowledge, not verified this pass).

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Professional pesticide users (OPG family farms, orchards, vineyards, contract sprayers) | Keep a record of every plant-protection-product (SZB) application. Must be electronic and machine-readable from 1 Jan 2026, with a transition to 1 Jan 2027 (EU Reg. 2023/564 / Art. 67 Reg. 1107/2009) | The ministry publishes an Excel template ("Evidencija SBZ.xlsx") and a paper/PDF sample table. Municipalities hand out paper tables. Data entry is through a FIS eObrazac behind NIAS | ~111,000 OPGs + ~38,000 SOPGs in the Upisnik poljoprivrednika (informator.hr, Dec 2025). The share holding a pesticide-user card is **unknown** | **Opportunity (5/10)** | A hard, dated trigger. The market is older users on paper. But the state gives free tools and Agrivi is local |
| Beekeepers | Annual update ("godišnja dojava") in the Evidencija pčelara i pčelinjaka (EPP). Request to move a migratory apiary 15–30 days ahead. Paperwork for CAP beekeeping-intervention subsidies | Forms (Prilog 3) go on paper to a local HPS trustee (povjerenik) | ~11,500 registered beekeepers, ~550,000 colonies (HPS survey figure via search summary; year unclear) | **Weak opportunity (3/10)** | Real paper workflow, but HPS owns the register and the channel, and willingness to pay is very low |
| Chimney sweeps (dimnjačari) | Municipal concession. Per-building records of inspections and cleaning. Reporting to the city/municipality. Each local unit writes its own decision | Each municipal "Odluka o obavljanju dimnjačarskih poslova" sets its own record fields. Records are signed per chimney | Count unknown. Roughly one or a few concessionaires per city/municipality (556 local units, general knowledge). Hrvatska dimnjačarska udruga exists | **Weak opportunity (3/10)** | Fits "one trade, many municipal rulebooks", but the market is tiny and the concessionaires are few |
| Wine producers / bottlers | Cellar book (podrumska evidencija) of inputs and outputs. Harvest/production declarations to APPRRR via AGRONET | A long-standing paper cellar-book requirement (Pravilnik NN 48/2014). No local cellar-book software surfaced in search | Vinogradarski registar (APPRRR). Count not found | Rejected (for now) | No 2025–26 trigger found. A durable but sleepy obligation; would need interviews |
| Livestock keepers (cattle, sheep, pigs) | Movements and births recorded in JRDŽ/JRG | Movements are entered by authorised veterinary organisations, who are paid fees for it | The register is maintained by HAPIH (count not found) | Rejected | The intermediary (vet station) already does the entry and is paid by the state. No gap for the farmer |
| Hunting licence holders (lovoovlaštenici / lovačka društva) | Središnja lovna evidencija (hunting grounds, contracts, tags). Cull structure records. Twice-yearly damage reports | Rulebook NN 45/2022. Paper hunting-club practice (unverified) | ~1,000 hunting grounds (estimate, unverified) | Rejected | Volunteer clubs with minimal budgets. Twice-yearly frequency. State database already exists |
| Small-scale coastal fishermen (mali obalni ribolov) | Catch reports. Daily electronic catch logging and direct-sale reporting, new 2026 rulebook | Older paper catch reports are being replaced | Count not found | Rejected | The state provides free mOčevidnik/eOčevidnik and mRecFish apps. The substitute is free and mandatory |
| Scrap-metal / secondary-raw-material buyers | Waste-dealer registration in the county register (Evidencija trgovaca otpadom). Per-shipment e-ONTO records. VAT reverse charge | Public PDF list of collection sites (ogo.mzozt.hr) | A county register exists; count not taken | Merged | Same workflow as the existing e-ONTO opportunity. No separate police seller register surfaced |
| Pesticide retailers (poljoprivredne ljekarne) | Each sale to an end user is recorded in FIS against a card barcode | Ministry ran an "integration of points of sale with FIS" programme | Count not found | Rejected as a product; **kept as a channel** | Their POS vendors already integrate. These shops are the best offline channel to OPGs |
| Employers of third-country workers (hospitality, construction, agriculture) | 2025 Aliens Act amendments (in force 15 Mar 2025): proof of "appropriate" accommodation, a cap on rent deductions, a financial guarantee per abandoned permit | Done by employment agencies and lawyers. Informator webinars sell the know-how | Not found (tens of thousands of permits a year, unverified) | Follow-up | Not truly quiet (agencies and consultants are online). Accommodation evidence could be a niche; competitors not checked |
| Household employers (domestic workers, carers) | Payroll/JOPPD via accountant or HZMO | Not researched (no budget) | Unknown | Not screened | Domestic employment is rare in Croatia (general knowledge) |
| Tattoo studios, taxis, market traders | Sanitary/municipal permits, fiscalisation | Not researched | Unknown | Not screened | Budget ran out. Fiscalisation is covered by the horizontal Fiskalizacija 2.0 vendors |

## 2. Opportunities

### Opportunity: "Spray diary → FIS": electronic pesticide-application records for small Croatian farms

**Industry:**
Agriculture: OPG family farms, orchards, vineyards, vegetable growers and small contract sprayers who hold a professional-user card (iskaznica profesionalnog korisnika SZB).

**Buyer:**
The OPG holder, often older and paper-based. A better buyer is the person who already keeps records for them: an agricultural pharmacy (poljoprivredna ljekarna), a cooperative or a farm bookkeeping office, buying the tool for many farms at once.

**Trigger / Why now:**
From 1 Jan 2026, professional users must keep SZB usage records in an electronic, machine-readable format (EU Implementing Reg. 2023/564). Croatia allowed a transition: applications made up to 31 Dec 2026 need not be transferred, but from **1 Jan 2027** records must be in the prescribed electronic format and available to authorities. The ministry's advisory service published notices in Feb 2026 and keeps reminding growers in crop-specific bulletins (soy, vineyards, seedling producers, April 2026).

**Current workflow:**
1. The farmer buys product at an agro-pharmacy. The sale is recorded in FIS against his card barcode.
2. He sprays and writes product, date, dose, area and crop in a paper notebook or the ministry's sample table, or, less often, in the Evidencija SBZ.xlsx template.
3. From 2027 he must enter each application in FIS through an eObrazac on ePoljoprivreda, logging in with NIAS, or keep an equivalent machine-readable record.
4. On inspection (phytosanitary/agricultural inspection, and CAP conditionality checks, unverified), he shows the records.

**Pain:**
Spraying happens many times a season per parcel, so this is per-job frequency. Users are older and many lack the computer habit; one search hit shows a municipality distributing a printable table. Failure means inspection findings and possible CAP payment reductions (the conditionality link is unverified). The ministry's own messaging assumes many will still be on paper during 2026.

**Existing solutions:**
- **FIS eObrazac** on ePoljoprivreda: free, official, NIAS login, one form per application.
- **Evidencija SBZ.xlsx**: free ministry Excel template.
- **Agrivi** (Zagreb-based farm management software): records input applications and compliance reports. It targets larger farms and enterprises; whether it exports to FIS is unverified.
- **szb.kfs.hr**: a third-party "electronic SZB record per Art. 67" web tool exists. Owner, pricing and traction are unknown.
- The advisory service (savjetodavna služba) and agro-pharmacies help informally.

**Offline evidence:** The official substitute is a spreadsheet template plus a paper sample table distributed by municipalities. Records are kept in notebooks. No SaaS review pages for Croatian spray diaries exist.

**Offline channel:** About 1,000 agro-pharmacies (estimate, unverified) already see every card-holder at the counter and are already connected to FIS for sales. Others: cooperatives, LAGs, the advisory service's winter training days, Gospodarski list/Agroklub readership, and agricultural fairs (e.g. Gudovac, Osijek; unverified).

**Market count:** 111,000 OPGs + 38,000 SOPGs (Upisnik poljoprivrednika via informator.hr, Dec 2025). The number of professional-user cardholders is **not found**; a plausible order is tens of thousands (estimate).

**The gap:**
No tool fills in the farm's spray record automatically from the products it buys. The pharmacy sale is already in FIS with product and quantity. The farmer only adds date, parcel (ARKOD), crop and dose. Nobody turns "what I bought" plus "my ARKOD parcels" into a one-tap mobile entry and then into a FIS-compatible record. Whether FIS accepts a bulk upload or API is **unverified**; the xlsx template suggests a standard format.

**Possible product:**
A very simple Croatian mobile/web spray diary. The farm's parcels are preloaded, the product list comes from the authorised SZB list, and each entry takes three taps. It produces the prescribed machine-readable file or FIS entries. A pharmacy or cooperative dashboard lets one clerk keep records for many farms.

**MVP:**
A phone form plus a parcel list plus an export to the ministry's xlsx structure, with a printable inspection report. Run it as a done-for-you service for one cooperative or agro-pharmacy and its 50 farmers.

**Pricing hypothesis:**
€3–5 per farm per month, or €30–50 a year. Alternatively €50–150 a month per pharmacy or cooperative covering its farmers. Willingness to pay from individual OPGs is low; it is more realistic as a service or bundled by the pharmacy.

**How to find first customers:**
Agro-pharmacies (the FIS distributor register exists), cooperatives, and advisory-service regional offices.

**Risks:**
- The free FIS eObrazac may be "good enough", or the ministry may ship a mobile app (it did for fishermen).
- Agrivi or szb.kfs.hr may already do this.
- If there is no FIS import/API, the tool only produces a "machine-readable record", which may still satisfy the legal requirement.
- Founder access: this needs a Croatian speaker and in-person pharmacy and cooperative sales. A non-local solo founder is unrealistic.

**Kill condition:**
The ministry launches a free mobile spray diary, or szb.kfs.hr/Agrivi already offers cheap FIS-compatible records with traction, or agro-pharmacies refuse to resell.

**Score:** 5/10. Pain 6, frequency 8, mandatory 9, fragmentation 2, competition 4, incumbent gap 5, buyer access 6, willingness to pay 3, MVP 8, distribution 6. The trigger is strong, but the free state substitute and low willingness to pay cap it.

**Sources:**
- [Ministry advisory notice, Feb 2026](https://savjetodavna.mps.hr/2026/02/02/obavijest-o-elektronskom-vodenju-evidencije-o-uporabi-sredstava-za-zastitu-bilja/)
- [Agroklub: from 2026 mandatory e-record](https://www.agroklub.com/poljoprivredne-vijesti/od-2026-obvezna-elektronicka-evidencija-o-uporabi-sredstava-za-zastitu-bilja/110002/)
- [Gospodarski list Q&A](https://gospodarski.hr/rubrike/pitanja-i-odgovori/pravni-savjeti/elektronicko-vodenje-evidencije-upotrebe-pesticida/)
- [ZZJZ PGŽ guidance PDF](https://zzjzpgz.hr/wp-content/uploads/2025/03/elektronicka-EVIDENCIJA-o-primjeni-SZB_CL.67.pdf)
- [FIS user manual (NIAS)](https://zzjzpgz.hr/wp-content/uploads/2025/05/FIS-Korisnicke-upute-za-NIAS-korisnika.pdf)
- [Ministry: integrating pesticide points of sale with FIS](https://poljoprivreda.gov.hr/vijesti/integracija-prodajnih-mjesta-koja-prodaju-pesticide-s-fis-om/5821)
- [Mali Bukovec paper table](https://www.mali-bukovec.hr/dokumenti/ostalo/317-tablica-vodjenja-evidencije-za-zastitu-bilja/file)
- [szb.kfs.hr](https://szb.kfs.hr/)
- [Agrivi](https://www.agrivi.com/case-studies/moslavina-voce)
- [informator.hr: OPG counts](https://informator.hr/vijesti/za-daljnji-razvoj-opg-a-nuzna-revizija-administrativnog-opterecenja)
- [PAN Europe letter, Sept 2025](https://www.pan-europe.info/sites/pan-europe.info/files/public/resources/Letters/Electronic%20registration%20of%20pesticides%20data%20should%20be%20implemented%20without%20delay%20-%20PAN%20Europe%20-%20September%202025.pdf)

### Opportunity: Beekeeper register-and-subsidy paperwork kit (EPP + migratory moves + CAP beekeeping intervention)

**Industry:**
Beekeeping.

**Buyer:**
Local beekeeping associations (udruge pčelara) and their trustees (povjerenici), who collect members' annual reports. The secondary buyer is the commercial migratory beekeeper with 100+ hives.

**Trigger / Why now:**
- A new Pravilnik o držanju pčela was in public consultation in 2025 (esavjetovanja).
- The rulebook for the CAP beekeeping intervention for 2027 was published in NN 80/2026 (July 2026).
- The annual EPP update governs eligibility for subsidies, blue diesel and national honey labels.

**Current workflow:**
1. Each beekeeper fills in the Prilog 3 annual report on paper (OIB, IBAN, number of colonies, apiary locations) and hands it to the local trustee by 31 Dec.
2. The trustee enters it into the EPP, which the Croatian Beekeepers' Association (HPS) runs for the ministry.
3. HPS sends the data to APPRRR by 10 Feb.
4. Migratory beekeepers submit a relocation request on a prescribed form 15–30 days before each move.
5. Subsidy applications under the beekeeping intervention go to APPRRR separately.

**Pain:**
Paper forms are re-keyed by volunteer trustees. Migratory moves repeat several times a season. Missing the annual update costs the beekeeper subsidies and rights.

**Existing solutions:**
- The HPS EPP system with trustee entry.
- Paper forms from association websites (pdz.hr, upmatica.hr, pcelinjak.hr).
- Generic hive-tracking apps (none Croatian-specific found).

**Offline evidence:** Forms are printable PDFs. Submission is to a person (the trustee). The deadline is published as a paper process.

**Offline channel:** HPS and about 100+ local associations (count unverified), beekeeping fairs, and association newsletters.

**Market count:** ~11,500 registered beekeepers; ~550,000 colonies.

**The gap:**
No tool lets a beekeeper or association keep the colony and apiary data once and generate the annual report, relocation requests and subsidy evidence from it.

**Possible product:**
An association-level membership and EPP-prep tool. Members' data feeds all three forms.

**MVP:**
Form generator plus a deadline reminder for one association.

**Pricing hypothesis:**
€100–300 a year per association, or €2–5 a month per commercial beekeeper. Probably service-plus-software only.

**How to find first customers:**
The HPS association list.

**Risks:**
HPS controls the register and could block or replicate the tool. The market is tiny and willingness to pay is minimal. It needs a local founder.

**Kill condition:**
HPS already offers online self-entry, or associations will not pay over €100 a year.

**Score:** 3/10

**Sources:**
- [upmatica.hr: annual update 2025](https://upmatica.hr/godisnja-dojava-azuriranje-podataka-u-evidenciji-pcelara-i-pcelinjaka-epp-za-2025-godinu/)
- [pcelinjak.hr: Prilog 3 form](http://www.pcelinjak.hr/files/entries/2024/10/Godisnja-dojava-Prilog-3-sa-IBAN-om-2025.pdf)
- [pcela.hr: register instructions](https://www.pcela.hr/god_popis.pdf)
- [Draft Pravilnik o držanju pčela](https://esavjetovanja.gov.hr/Econ/MainScreen?EntityId=21258)
- [APPRRR: 2027 beekeeping intervention rulebook](https://www.apprrr.hr/wp-content/uploads/2026/08/Pravilnik-o-provedbi-intervencija-u-sektoru-pcelarstva-unutar-Strateskog-plana-Zajednicke-poljoprivredne-politike-Republike-Hrvatske-2023.-%E2%80%93-2027.-za-2027.-godinu.pdf)

### Opportunity: Chimney-sweep concession records across municipal rulebooks

**Industry:**
Chimney sweeping (communal concession activity).

**Buyer:**
The owner of a chimney-sweep craft business or company holding one or several municipal concessions.

**Trigger / Why now:**
No new 2025–26 trigger was found. The driver is structural: each city or municipality writes its own Odluka o obavljanju dimnjačarskih poslova and grants concessions of about 4 years. Each renewal brings new reporting terms.

**Current workflow:**
1. The sweep inspects or cleans chimneys and signs a per-building record (building, address, customer, chimney ID, date, work done).
2. He keeps the records per municipality.
3. He reports to the municipal administrative body as its decision requires, and issues defect notices to owners.

**Pain:**
Unverified. The structure suggests repeated record formats per municipality and per-visit frequency. No complaints were found.

**Existing solutions:**
Paper record books. Generic field-service apps. Hrvatska dimnjačarska udruga publishes a model decision (ogledni primjerak), which may standardise formats and so weaken fragmentation.

**Offline evidence:** Municipal decisions published as PDFs. Signature-based records.

**Offline channel:** Hrvatska dimnjačarska udruga, the craft chambers (HOK), and municipal concession lists, which are public (e.g. Rijeka, Zgradonačelnik list for Zagreb).

**Market count:** Unknown. Plausibly a few hundred concession holders (estimate).

**The gap:**
A per-building chimney register and per-municipality report generator. Whether one already exists is unverified.

**Possible product:**
A mobile visit log that holds building chimney history and outputs each municipality's report format.

**MVP:**
Mobile log plus a PDF report for one municipality's format.

**Pricing hypothesis:**
€20–40 a month per business.

**How to find first customers:**
Municipal concession lists and the association.

**Risks:**
A tiny market. The association's model decision may make formats uniform.

**Kill condition:**
Fewer than 300 concession holders, or reports are simple annual letters.

**Score:** 3/10

**Sources:**
- [Rijeka: chimney-sweep concessions](https://www.rijeka.hr/teme-za-gradane/biznis-i-investicije/koncesije/dimnjacarski-poslovi/)
- [Solin decision PDF](https://solin.hr/wp-content/uploads/2020/01/Odluka-o-OBAVLJANJU-DIMNJA%C4%8CARSKE-DJELATNOSTI-.pdf)
- [HDU: model decision](https://hrvatska-dimnjacarska-udruga.hr/ogledni-primjerak-odluke-dimnjacarske-sluzbe/)
- [Zgradonačelnik: list of authorised sweeps](https://www.zgradonacelnik.hr/servisne-informacije/dimnjacari-zasto-ih-zvati-kada-dolaze-te-popis-ovlastenih-dimnjacara/358)

## 3. Rejected

- **Small-scale fishermen catch logging (2026 rules):** The state provides free mOčevidnik, eOčevidnik and mRecFish apps ([morski.hr](https://www.morski.hr/od-1-sijecnja-novi-pravilnik-o-dostavi-podataka-o-ulovu-u-gospodarskom-ribolovu/), [Glas Istre, May 2026](https://www.glasistre.hr/more-i-nautika/2026/05/24/idete-u-ribolov-novi-pravilnik-donosi-obvezu-koja-se-mnogima-nece-svidjeti-1071039)).
- **Livestock movements (JRDŽ/JRG):** Authorised veterinary organisations do the entry and are paid by the state ([NN 108/2013](https://narodne-novine.nn.hr/clanci/sluzbeni/2013_08_108_2414.html)).
- **Hunting records (SLE):** Volunteer clubs, twice-yearly reports, and an existing state database ([NN 45/2022](https://narodne-novine.nn.hr/clanci/sluzbeni/2022_04_45_568.html)).
- **Wine cellar book:** A real paper obligation, but no new trigger was found. Needs interviews before scoring ([Pravilnik NN 48/2014](https://narodne-novine.nn.hr/clanci/sluzbeni/2014_04_48_925.html)).
- **Scrap/secondary raw materials:** Folded into the existing e-ONTO waste opportunity. No separate police register surfaced.
- **Pesticide retailers' FIS sales integration:** Already pushed through POS integration. These shops are kept as a channel, not a product.
- **Foreign-worker employers (Aliens Act, 15 Mar 2025):** A real trigger, but agencies, lawyers and webinars (Informator, Crowe) serve it, and it is not a quiet industry. Accommodation-proof tooling needs a follow-up ([Crowe](https://www.crowe.com/hr/news/izmjene-i-dopune-zakona-o-strancima), [teb.hr](https://teb.hr/novosti/2025/izmjene-i-dopune-zakona-o-strancima-od-1532025/)).

## 4. Method notes

- **What worked:** Croatian-language queries naming the rulebook or register (Pravilnik, evidencija, eObrazac, Narodne novine) plus the ministry advisory site savjetodavna.mps.hr, plus agro media (Agroklub, Gospodarski list). In Croatia the state usually ships a free portal or app, so the competitor check must start with "does the ministry already give a free tool?"
- **What didn't work:** Operator counts. Registers are seldom summarised, so searches for "broj …" mostly failed. Competitor-name searches returned generic English SaaS pages.
- **Budget:** One call was refused mid-pass. Tattoo, taxi, market-trader and household-employer screening were not done.

Research model: Opus
