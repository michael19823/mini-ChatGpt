# Slovenia: offline (quiet) industries pass

Research date: 2026-10-05. Budget: 20 WebSearch calls, 19 used. Slovenia is a small market (2.1M people). Its state builds central portals for most registers: Register čebelnjakov (apiaries), EviDim (chimney sweeps), IS-Odpadki (waste), eUprava vouchers for household work, CIS VET (vet medicines). That pattern kills many quiet-industry ideas that would work elsewhere. This pass does not repeat the country report's ideas (EUDR timber intake, FFS spray records, PPWR packaging).

**Overall verdict:** The two leads below are honest, but both are small. Nothing here beats 5/10. Most of the quiet industries in Slovenia either file through a free state web app already, or have too few operators.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Small winemakers and bottlers | Cellar register (kletarska evidenca), with each operation entered within 10 working days. Annual harvest declaration due 20 Nov. Stock declaration due by 31 Jul. Accompanying documents when wine moves | The rules allow paper records on "fixed, sequentially numbered sheets". Declaration forms are on eUprava **and on paper at administrative units (upravne enote)**. A local wine-growers' society hands out an Excel "cellar diary". The wine inspectorate has issued decisions for poorly kept registers | About 1,800 registered bottlers, and more than 2,500 producers who bottle their own wine. About 27,000 farms grow vines (MKGP, gov.si topic page) | **Candidate (4/10)** | Real recurring duty on paper, but eKletar and HisoftPlus already exist |
| Farms using seasonal workers (hops, fruit, wine, vegetables) | Temporary or occasional farm work under ZKme-2 Arts. 105a–105e: insurance registration, REK-2 tax and contribution return, minimum hourly rate (EUR 7.34 from 12 Mar 2025), a cap of 120 days per farm and 90 days per worker per year | KGZS publishes printed-style PDF guides. Farmers rely on accountants and the chamber of agriculture. Nothing confirms the 90-day cap across farms (unverified) | Unverified. Hops, orchards and vineyards are the heavy users. The state runs a "Sezonska dela v kmetijstvu 2026" job listing | **Candidate (4/10)** | Per-payment filing and a cap tracked across farms. Accountants and generic payroll are the substitutes |
| Chimney-sweep companies (dimnikarske družbe) | Licence from the ministry. Every service and every small heating appliance must be entered into the state register EviDim. Emission measurements on small heating appliances have been postponed again, by about 3 years | EviDim has web services (StoritevWs), so it is not paper-bound. The ministry still names unlicensed operators (ZS Dimko, 2025 and 2026) | 149 licensed companies in 2021 (ministry inspection report). Current list: ministry xlsx dated 28 Jul 2026 | Rejected | Too few buyers. Dovrtel sistemi already sells software for chimney-sweep companies. The measurement trigger was postponed |
| Small and village water supplies | Uredba o pitni vodi (2023): risk assessment and a water safety plan. Ministry guidelines were due by 31 Dec 2025. HACCP-based internal monitoring | NLZOH and the investigative site Pod črto found many self-run supplies with no internal-monitoring documents and no HACCP plan | 849 supply areas are monitored. 164,195 people (7.7%) are on supplies with unknown quality, outside monitoring (NIJZ 2024 report) | Rejected (watch) | The buyers are village committees and municipalities with no budget. Utilities and consultants (and Forum Media's guide) are the substitutes. This is a service, not software |
| Beekeepers | Report the number of colonies for 15 Apr and 31 Oct (deadline 1 Dec). Permits to move hives | State web app Register čebelnjakov, plus a no-login form that only needs the apiary number and tax number. A PDF form also exists | Many thousands (unverified in this pass) | Rejected | The free state app recently gained automatic permits for moving colonies |
| Households as employers (cleaning, help in the home) | Personal supplementary work (osebno dopolnilno delo, ODD): the buyer buys a voucher before the work. The provider registers with AJPES | Vouchers bought at the counter of an administrative unit or on eUprava | AJPES publishes the list of ODD providers | Rejected | One simple voucher purchase. No recurring data work left to automate |
| Scrap-metal collectors | Collector or waste-trader registration. Seller ID and quantity recorded per purchase | The evidence lists go through IS-Odpadki | Ministry lists of waste collectors and traders (gov.si PDFs, 2026) | Rejected | IS-Odpadki covers it, and collectors already have software (see the country report) |
| Gold buyers, pawnbrokers, second-hand dealers | A police register of purchases (unverified in Slovenia) | Not found | Unknown | Not assessed | The search returned only US and South African law. I could not confirm a Slovenian police-register duty |
| Livestock traders and importers | Notify the regional UVHVVR office of intra-EU arrivals **by email or fax** no later than 1 working day before arrival. Register of live-animal transporters | Fax and email notification are written into the official instructions | Transporter register (UVHVVR PDF). The number of traders is unknown | Rejected | The certificates already go through EU TRACES. The fax step is small, and there are few traders |
| Cemetery managers | Permanent register of the deceased, grave cadastre, and grave-lessee records for 10 years (ZPPDej) | Municipal ordinances (odloki). Some cemeteries are run by public companies | About 212 municipalities (general knowledge, estimate) | Rejected | The buyer is a municipality or public company, which means public procurement, and GIS vendors probably exist (unverified) |
| Farm direct sellers, tattoo studios, hunting clubs, fish sellers | Various sanitary or species registers | Not researched (out of budget) | — | Not assessed | Budget spent on the wine and labour leads |

## 2. Opportunities

### Opportunity: Cellar book to state-declaration pack for small Slovenian winemakers

**Industry:**  
Viticulture and wine (small family wineries that bottle their own wine)

**Buyer:**  
The owner of a family wine estate or farm (often an older farmer) who is registered in the register of grape and wine producers (RPGV) and bottles or sells wine. Their bookkeeper is the secondary buyer.

**Trigger / Why now:**  
There is no new 2026 law; the trigger is a recurring cycle. The ministry repeats the harvest-declaration notice every year (the 2026 notice was published 23 Sep 2026, deadline 20 Nov). The stock declaration as of 31 Jul is also annual. Wine inspectors issue decisions for poorly kept cellar registers. The weak "why now" is generational turnover in family wineries, plus EU wine-label rules. The trigger is weak.

**Current workflow:**
1. Every racking, addition, blend and bottling is written into a paper cellar book on numbered sheets, or into an Excel file from a local society, within 10 working days.
2. Every September, wine stocks as of 31 Jul are added up by hand and declared.
3. Every November, grape kg, must and wine litres per variety are added up and declared on the eUprava form or a paper form at the administrative unit.
4. When wine is sold in bulk, an accompanying document is written for each shipment.
5. When the inspectorate visits, the paper book must match the declarations and the stock.

**Pain:**  
Inspectorate decisions for poorly kept cellar records (an IKGLR sample decision is published). The data are re-keyed three times: cellar book, then stock declaration, then harvest declaration. Ministry reminders after the deadlines suggest many people file late. The pain is moderate and seasonal.

**Existing solutions:**  
eKletar (ekletar.si, a dedicated Slovenian cellar and accounting package), HisoftPlus "Vinska klet" (harvest, bottling, batches, stock), the free Excel "cellar diary" from the Sevnica-Boštanj wine-growers' society, KGZS advisers, and international winery software (vintrace and others, not localised).

**Offline evidence:**  
Paper registers on numbered sheets are explicitly allowed. Declarations are still accepted on paper at administrative units. Local wine-growers' societies (društva vinogradnikov) hand out templates. I found no SaaS reviews for Slovenian cellar software.

**Offline channel:**  
Wine-growers' societies (each wine district has several, and they run evening talks before harvest). KGZS wine advisers. Regional wine fairs and competitions (for example, the local wine assessments where samples are submitted). Wine-supply shops that sell enological products and bottling services.

**Market count:**  
About 1,800 registered bottlers, and more than 2,500 producers who bottle their own wine (MKGP). About 27,000 farms with vineyards, most below any paying threshold.

**The gap:**  
eKletar and HisoftPlus look like desktop or accounting-oriented products (I did not verify prices). No found tool is a phone-first cellar book that fills the eUprava stock and harvest declarations and prints the accompanying document automatically. This gap is unconfirmed: eKletar may already do it.

**Possible product:**  
A Slovenian-language mobile cellar book (tanks, operations, additives, bottlings) that keeps a running stock. It prepares the 31 Jul stock declaration and the 20 Nov harvest declaration, and prints accompanying documents.

**MVP:**  
A PWA with tank list, operation log and a PDF export that matches the official harvest and stock forms field by field. No eUprava integration at first: the user copies the numbers or prints the form.

**Pricing hypothesis:**  
EUR 8–15 per month, or EUR 90–150 per year. Willingness to pay is low. A done-for-you "declaration season" service through a bookkeeper may sell better than pure software.

**How to find first customers:**  
The RPGV list of bottlers (ask MKGP for public data; unverified whether it is public). Society member lists. Exhibitor lists from wine fairs.

**Risks:**  
Existing local vendors (eKletar, HisoftPlus). Older users who prefer paper. A tiny market (about 2,000 buyers). Annual declarations give low frequency. A non-local founder would need a Slovenian partner to get into the societies.

**Kill condition:**  
Interviews show that eKletar already covers phone use and fills the declarations at a similar price, or fewer than 1 in 10 bottlers would pay EUR 100 or more a year.

**Score:** 4/10

**Sources:**
- https://pisrs.si/Pis.web/pregledPredpisa?id=PRAV9558 (Pravilnik o kletarski evidenci in spremnih dokumentih za promet z vinom)
- https://www.gov.si/novice/2026-09-23-vinogradniki-morajo-prijaviti-letni-pridelek/
- https://www.gov.si/novice/2020-08-26-obvestilo-vinogradnikom-prijava-zalog-vina/
- https://www.gov.si/assets/organi-v-sestavi/IKGLR/Primeri-odlocb/Vinarska-inspekcija/836841f058/ZIN-odlocba-pomanjkljivo-vodenje-kletarske-evidence.pdf
- https://www.gov.si/teme/vinogradnistvo-in-vinarstvo/
- https://www.drustvo-vinogradnikov.si/189-vodenje-kletarske-evidence-in-prijava-pridelka
- http://www.ekletar.si/vsebine/o-programu-ekletar
- https://www.hisoftplus.si/index.php/programi/proizvodnja/vinska-klet.html

---

### Opportunity: Seasonal-worker register and REK-2 pack for hop, fruit and wine farms

**Industry:**  
Agriculture: hop growing (Savinja valley), orchards, vineyards, vegetables

**Buyer:**  
The owner of a farm that hires temporary or occasional farm workers (pickers, hop workers) under ZKme-2 Arts. 105a–105e. Also small accounting offices that serve farms.

**Trigger / Why now:**  
The minimum gross hourly rate was raised to EUR 7.34 on 12 Mar 2025, so the rate rules change. RTV coverage in 2025–2026 reports that hop farms struggle to find workers. The caps of 120 days per farm and 90 days per worker per calendar year require counting across seasons and farms. The trigger is moderate.

**Current workflow:**
1. The farmer agrees work with a picker, often a student, pensioner or foreign worker.
2. The farmer registers the worker for insurance and keeps daily hours on paper.
3. For each payment, the farmer or their accountant files a REK-2 tax and contribution return on eDavki at the KGZS-documented contribution rates (8.85% employer pension and disability, health 0.53% plus 6.36%, and others).
4. The farmer counts the days per worker by hand against the 90 and 120 day caps.

**Pain:**  
Many forms per short work spell. Contribution maths with several rates. Liability if a worker exceeds the 90-day cap. KGZS publishes two separate guides on the topic, which shows that farmers find it confusing. I did not find direct complaints.

**Existing solutions:**  
Accounting offices (računovodski servisi) that charge per REK-2. General payroll software (for example Minimax, SAOP, Pantheon) that handles REK-2 for "other contractual relationships" (I did not verify that they support this specific code). Free KGZS guides and advice. eDavki entered by hand.

**Offline evidence:**  
The guidance is mainly KGZS PDF guides and articles in the farmers' paper Kmečki glas. Daily hours are kept on paper in the field. Farmers delegate to accountants.

**Offline channel:**  
The KGZS regional institutes (advisers already run courses on hiring labour). Hop growers' association and cooperative in Žalec. Fruit-grower associations. Accountants who specialise in farms (a referral or white-label channel).

**Market count:**  
Unverified. The users are concentrated in hops, orchards and vineyards. Estimate: a few hundred to about 2,000 farms use the scheme each year. This needs data from FURS or ZZZS on the number of returns.

**The gap:**  
A field-friendly day and hour log per worker that tracks the 90 and 120 day caps and produces an eDavki-ready REK-2 XML (eDavki accepts XML import) with the correct insurance codes. General payroll tools assume ordinary employees.

**Possible product:**  
A phone app for the foreman to tick workers in and out each day, a cap tracker, and a monthly REK-2 XML plus payslip. It is sold to accountants as well as farms.

**MVP:**  
A worker list, a daily attendance grid, a calculator for the rate and contributions, and a REK-2 XML export for eDavki import.

**Pricing hypothesis:**  
EUR 15–30 per month during the season, or per worker per season. Alternatively EUR 20–40 per month per accountant seat. A done-for-you service through partner accountants may be the realistic model.

**How to find first customers:**  
KGZS courses, the Žalec hop growers' association, fruit-grower associations, and farm accountants' listings.

**Risks:**  
Seasonal, low-volume usage. Accountants already absorb the work cheaply. Payroll vendors may already support the code. FURS or eUprava could add a simple online calculator. A non-local founder would need a Slovenian accountant partner.

**Kill condition:**  
FURS or ZZZS data shows fewer than about 500 farms a year use the scheme, or a farm accountant shows that the current payroll tool already does this in minutes.

**Score:** 4/10

**Sources:**
- https://www.gov.si/teme/zacasno-in-obcasno-delo-v-kmetijstvu/
- https://www.kgzs.si/uploads/dokumenti/strokovna_gradiva/zacasno_in_obcasno_delo_v_kmetijstvu_1.pdf
- https://www.kgzs.si/uploads/dokumenti/strokovna_gradiva/zaposlovanje_na_kmetiji.pdf
- https://www.racunovodja.com/clanki.asp?clanek=11322%2FNajnizja_bruto_urna_postavka_za_opravljeno_zacasno_ali_obcasno_delo_v_kmetijstvu
- https://www.rtvslo.si/okolje/kmetijstvo/sezonskim-delavcem-v-kmetijstvu-5-16-evra-s-tem-se-ne-da-zasluziti-minimalca/521059
- https://edavki.durs.si/EdavkiPortal/openportal/CommonPages/Opdynp/PageD.aspx?category=technicals_manualimport

## 3. Rejected

- **Chimney-sweep service records (EviDim):** About 149 licensed companies (2021). EviDim already has SOAP web services. Dovrtel sistemi sells software for chimney-sweep companies. The emission measurements, which would have been the trigger, were postponed again by about 3 years (Uredba consolidated text of 16 Jun 2026, STA). Sources: https://www.gov.si/assets/ministrstva/MOPE/Okolje/Dimnikarska-dejavnost/Evidim_predstavitev_24okt17.pdf, https://www.dovrtel-sistemi.si/dimnikarska-dejavnost/dimnikarska-druzba, https://www.tax-fin-lex.si/home/novica/36219, https://www.gov.si/novice/2022-03-14-nadzor-dimnikarskih-druzb-dimnikarjev-dimnikarskih-storitev-in-njihovih-uporabnikov-v-letu-2021/
- **Water safety plans for small and village water supplies:** The duty is real (Uredba o pitni vodi 2023) and the pain is documented. But the buyers are unfunded village committees, and the work is consultancy, not software. Sources: https://www.uradni-list.si/glasilo-uradni-list-rs/vsebina/2023-01-1848/uredba-o-pitni-vodi, https://nijz.si/wp-content/uploads/2026/04/Dostop-do-PV-in-njena-kakovost-v-Sloveniji-za-leto-2024.pdf, https://podcrto.si/nevarna-voda-kateri-vodovodi-ogrozajo-zdravje-ljudi-in-zakaj/, https://forum-media.si/izdelek/varnostni-nacrt-za-pitno-vodo/
- **Beekeeper colony reporting:** The free Register čebelnjakov app covers it, with a no-login form. Source: https://www.gov.si/zbirke/storitve/sporocanje-stevila-cebeljih-druzin-v-register-cebelnjakov-in-podatkov-v-register-zivilskih-obratov
- **Household-help payroll (ODD vouchers):** It is a one-step voucher purchase on eUprava or at the administrative-unit counter. Source: https://spot.gov.si/sl/teme/osebno-dopolnilno-delo
- **Scrap-metal purchase records:** Covered by IS-Odpadki and collectors' own systems. Source: https://www.gov.si/assets/ministrstva/MOPE/Okolje/Odpadki/Podatki/Zbiralci-Odpadkov.pdf
- **Livestock intra-EU arrival notices by email or fax:** The fax step is real, but it is a small part of a TRACES-dominated workflow, and there are few traders. Source: https://www.gov.si/assets/organi-v-sestavi/UVHVVR/Bolezni-zivali/Seznam-obratov/Seznam-obratov-splosni/Register-prevoznikov-zivih-zivali.pdf
- **Cemetery records:** The buyer is a municipality, which means procurement. Source: https://www.uradni-list.si/glasilo-uradni-list-rs/vsebina/2018-01-1610/odlok-o-pokopaliskem-redu-v-mestni-obcini-slovenj-gradec

## 4. Method notes

- The searches that worked were Slovenian queries naming the official register or form ("register čebelnjakov", "EviDim", "kletarska evidenca", "upravljavec pokopališča evidenca"), and gov.si "novice" reminders, which show the annual deadlines and enforcement.
- SPOT (spot.gov.si) activity pages and KGZS strokovna gradiva (expert guides) are the best offline-workflow sources.
- Queries about second-hand dealers and gold buyers drifted to US law. A police-register duty for Slovenia remains unverified.
- Each time I found a register, the same pattern showed up: the Slovenian state usually provides a free web app or web service. In this country, check for that state tool first.
