# Kyrgyzstan: Offline (quiet) industries pass

Research date: 2026-10-05. Budget: 20 WebSearch calls, all used. Most queries were in Russian, the working language of regulators and business news. WebFetch was not used. All facts come from search-result summaries of the cited pages. Anything not confirmed there is marked *unverified* or *estimate*.

The existing country report (`research/countries/kyrgyzstan.md`) covers ESF 2.0 virtual-warehouse reconciliation and sanctions evidence packs. Neither is repeated here.

**Bottom line:** Kyrgyzstan's quiet industries are heavily regulated, but the state usually builds the digital rail itself:
- SIOZh for livestock identification;
- "Tulpar" for veterinary e-certificates;
- ESUVM for foreigner registration;
- a planned state enterprise, "Mal aman", that will absorb private vets.

In other cases, export bans freeze the trade (live animals, ferrous scrap). Obliged populations are small (tens to low hundreds) and ability to pay is low. Two weak-to-moderate leads survive. Neither is strong enough to build without interviews.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Private employment agencies placing workers abroad | Permit from the Center for Employment of Citizens Abroad (Ministry of Labour/Social Development). Mandatory pre-departure training for every applicant. Renewal applications | Permits are issued on paper application to the Center. Training content is prescribed but there is no tool for it (*unverified*) | 143 permitted agencies; 10.7k placements Jan–Jul 2026 (economist.kg) | **Candidate (weak)** | Per-worker recurring obligation; small, findable, licensed buyer set |
| Exchange offices (обменные бюро) | NBKR licence; AML/CFT client identification; suspicious-transaction reports to the FIU (ГСФР); new working-capital minimums by 1 Oct 2026 | Constant NBKR suspensions and fines; 382 orders issued to exchange offices in one quarter | Several hundred (*estimate*; no 2026 total found) | **Candidate (weak)** | Enforced, frequent and painful, but the regulator and the FIU fix the formats, and banking-software vendors are likely present |
| Veterinary pharmacies and the vets who prescribe | Licence rules tightened Jul 2026 (storage area, temperature and humidity control). Draft May 2026: prescription-only potent drugs, strict drug-use records, withdrawal periods for meat and milk | Sept 2026 inspections in Naryn, Osh and Jalal-Abad found pharmacies missing from the internal register and failing separate-storage rules | Unknown (*unverified*) | Candidate (weak, merged into the vet-drug log row below) | New record-keeping obligation, but tiny buyers and the rule is still a draft |
| Livestock farms and owners (animal register, SIOZh) | Animals must be identified and the farm registered. Draft Aug 2026 law lets owners update the register themselves through a personal cabinet | Registration is currently done by private vets at the ayil okmotu (village administration) | ~2.6M active animals in 2024; 2.2M cattle and 7M+ sheep and goats | **Rejected** | State system with a free state cabinet; owners are smallholders who won't pay |
| Private veterinarians | Vaccination under state order; issue e-certificates with QR codes before slaughter | Data entry into SIOZh / e-certificates | ~1,500, being moved into state enterprise "Mal aman" | **Rejected** | The buyer is becoming a state employee using state systems |
| Livestock traders and exporters | Export vet certificates (now fully in "Tulpar") | Already digital (state) | n/a | **Rejected** | Cabinet resolution No. 607 (10 Sep 2026) bans live-cattle, horse, sheep and goat exports for 6 months, except through a state operator |
| Slaughterhouses (убойные пункты) | Pre-slaughter vet check, post-mortem exam, stamp, e-certificate with QR code | Inspections, e.g. Naryn July 2026 | 97 official, only 7 meet international standards | **Rejected** | The workflow runs through the state e-certificate; few buyers and capex-driven pain |
| Scrap metal dealers | Export ban on HS 7204 outside the EAEU, extended again in 2026 | Little visible register or reporting regime | Unknown | **Rejected** | The ban channels scrap to a few domestic mills; no recurring paperwork pain found |
| Beekeepers and honey exporters | Exporters must be in the vet-service register and hold a vet-sanitary passport. EU access prep (TAIEX) | Paper passport (*unverified*) | Small; 152.8 t exported in Q1 2026 | **Rejected** | Too few exporters; the EU listing is years away |
| Dairy processors and milk collection | Export vet certificates to the EAEU; Mercury notifications for Russia | Handled by the state "Tulpar" system and Mercury.Notifications | 55 processors | **Rejected** | Small count; the state and Russian systems are the rails |
| Taxi and intercity passenger drivers | New licence regime (fines from 1 Jul 2026); quarterly safety briefings recorded on a sheet; resolution No. 5 (3 Sep 2026) | Paper sheet for briefings; licence through the Ministry of Internal Affairs (MVD) | Tens of thousands of individual drivers (*estimate*) | **Rejected** | Buyers are individuals paying 500 som a year for the licence; the aggregators (Yandex and others) are the natural channel and competitor |
| Market traders (Dordoi, Madina, Kara-Suu) | Cash registers (ККМ) mandatory for unified-tax payers | Mass protests | Large | **Rejected** | The strategic markets got a special regime that exempts them from cash registers; this is a politically volatile consumer-behaviour change |
| Hotels and guesthouses (foreign guests) | Foreigner registration within 5 working days; decree No. 602 (7 Sep 2026) on overstays | ESUVM portal and mobile app (state) | Unknown | **Rejected** | The free state portal already does the job |

## 2. Opportunities

### Opportunity: Per-worker compliance file for licensed overseas-recruitment agencies

**Industry:**
Private employment agencies (ЧАЗ) that place Kyrgyz citizens in jobs abroad (Korea, UK seasonal work, EU, Gulf and others).

**Buyer:**
The owner or director of a licensed private employment agency, usually a small firm with 2–10 staff (*estimate*).

**Trigger / Why now:**
- 2024: the government announced stronger control of agencies placing citizens abroad.
- Aug 2026: the ministry stated that agencies are **obliged** to organise pre-departure training for every applicant. The training must cover entry rules, work conditions, migrant rights, financial literacy, risks and emergency procedures.
- 2026: the register of permitted agencies was updated (June 2026), and a new list was published of agencies allowed to place workers in five countries (Aug 2026).
- Permits must be renewed: 83 applications were received and 65 permits issued in 2026 so far.

**Current workflow:**
1. The agency recruits a candidate and collects the passport, medical certificates, a criminal-record certificate and diplomas, mostly as paper copies or WhatsApp photos (*unverified*).
2. The agency matches the candidate to an employer contract and prepares the destination-country visa or work-permit documents.
3. The agency runs pre-departure training and must be able to prove it took place (sign-in sheets; *unverified*).
4. The agency reports placements and keeps files for inspection by the Center and the ministry. It assembles a renewal dossier when its permit expires.

**Pain:**
- Loss of the permit means the agency's business stops.
- The ministry publicly polices unlicensed and non-compliant agencies (for example, the Monto Corporation case).
- Each placement involves several documents across three parties: the worker, the foreign employer and the Kyrgyz regulator.
- No direct complaints from agency operators were found. The pain is inferred from the obligations.

**Existing solutions:**
- Excel files, paper folders and WhatsApp.
- Generic recruitment CRMs (Bitrix24 is widely used in the CIS; its use by these agencies is *unverified*).
- Destination-country systems, such as Korea's EPS run through the state, which take part of the workflow out of the agency's hands.
- Lawyers and consultants who prepare permit applications.

**The gap:**
No product was found that combines three things for Kyrgyz agencies: a per-worker document checklist for each destination country, a record of pre-departure training attendance, and export of the placement data the Center asks for.

**Possible product:**
A Russian/Kyrgyz web app with three parts:
- a candidate file that holds per-country document templates and expiry tracking;
- a training-session log with the six mandatory topics and signed attendance;
- a one-click inspection or renewal pack for the agency.

**MVP:**
Candidate list, document checklist per destination, training log, and PDF export of the pack for the inspector or the Center.

**Pricing hypothesis:**
About USD 30–80 per month per agency, or a per-placement fee (*estimate*). Agencies earn fees on each worker, so a per-placement fee may fit better.

**How to find first customers:**
The published list of accredited agencies (economist.kg, 30 Dec 2025 and 5 Jun 2026 updates). Call or WhatsApp them directly.

**Risks:**
- The total market is only 143 agencies.
- The state may build its own e-registry for placements.
- Some agencies operate in grey zones and may avoid any audit trail.
- The work is document-heavy but could be low-frequency for small agencies.

**Kill condition:**
- The Center launches an online portal where agencies must file placements and training records, or
- interviews show that agencies place fewer than about 10 workers a month each.

**Offline evidence:**
- Permits are granted by application to a state center.
- The training obligation is stated in prose by the ministry, with no form or e-system mentioned.
- No vendor software listings were found.

**Offline channel:**
- The public list of accredited agencies, contacted by phone or WhatsApp.
- The Center for Employment of Citizens Abroad, which holds briefings for agencies.
- IOM and ILO labour-migration projects that train agencies (*unverified* in this pass).

**Market count:**
143 agencies with permits (economist.kg, 30 Jul 2026). 10.7k workers were placed Jan–Jul 2026.

**Willingness to pay / founder access:**
Buyers would pay modestly for software and perhaps more for done-for-you dossier preparation. The product needs a Russian-speaking founder with local presence. A non-local solo founder could only sell this with a local partner.

**Score:** 4/10

**Sources:**
- https://economist.kg/society/2026/07/30/trudoustroystvo-za-rubezhom-chastnye-agentstva/
- https://economist.kg/society/2026/08/12/rabota-za-rubezhom-podgotovka-kyrgyzstantsev/
- https://economist.kg/society/2026/08/13/chastnye-agentstva-zanyatosti-za-rubezhom/
- https://economist.kg/pravo-znat/2026/06/05/employment-agencies-abroad-list/
- https://economist.kg/society/2025/12/30/gdie-iskat-rabotu-za-ghranitsiei-spisok-akkrieditovannykh-v-kr-aghientstv/
- https://economist.kg/biznes/2024/07/16/kyrghyzstan-usilit-kontrol-za-chastnymi-aghientstvami-trudoustraivaiushchimi-ghrazhdan-za-rubiezhom/

### Opportunity: AML/KYC compliance kit for small exchange offices

**Industry:**
Licensed currency exchange offices (обменные бюро), mostly single-site and owner-operated.

**Buyer:**
The exchange-office owner or the compliance person they are required to appoint.

**Trigger / Why now:**
- NBKR raised the working-capital minimums. Existing offices must hold 1M som (2M in Bishkek and Osh) by **1 Oct 2026**, rising through 2030.
- The NBKR is suspending licences almost monthly in 2026 (Jan, May, Jun, Sep ×2, Oct).
- It issued 382 orders to exchange offices in a single quarter: 26 from on-site inspections and 356 from off-site supervision.
- The sanctions climate adds pressure; see the country report.

**Current workflow:**
1. The cashier identifies the client, records passport data above thresholds and fills the client register. This is often a paper log or a basic exchange-counter program (*unverified*).
2. The office reports to NBKR on a periodic schedule and files suspicious-transaction reports to the FIU (ГСФР).
3. It maintains the internal AML control rules required by law.
4. It responds to NBKR off-site supervision queries, which are the source of most of the 356 orders.

**Pain:**
- NBKR suspends licences and imposes fines; one example is 55k som per office.
- The suspensions are public and frequent.
- The off-site supervision orders suggest that reporting errors are common. The exact violations were not detailed in the results (*unverified*).

**Existing solutions:**
- Exchange-counter software sold by local vendors (names *unverified*; likely present).
- 1C configurations.
- Rate-board and cashier programs.
- Accountants and AML consultants who write internal control rules.
- The FIU's own reporting channel.

**The gap:**
The likely gap (*unverified*) is a cheap tool for single-office operators that does three things:
- automatically checks names against the Kyrgyz FIU sanctions list and the UN, EU and US lists at the counter;
- flags threshold and structuring patterns;
- produces NBKR-ready registers so that off-site supervision finds nothing to fix.

**Possible product:**
A counter-side KYC log (via tablet or PC) with list screening, threshold rules and export of NBKR and FIU reports.

**MVP:**
Client register, sanctions-list screening and a threshold or suspicious-pattern flag, with CSV/PDF export in the regulator's format.

**Pricing hypothesis:**
About USD 30–60 per month per office (*estimate*).

**How to find first customers:**
- The NBKR's public register of licensed exchange offices (*unverified* that it is downloadable).
- Walking the exchange-office clusters in Bishkek and Osh.

**Risks:**
- Established local exchange software likely already covers this.
- The higher capital rules may consolidate the sector and shrink the buyer count.
- Regulator-fixed formats may change.
- The sector carries sanctions and reputational exposure.

**Kill condition:**
Existing counter software already produces NBKR and FIU reports and screens lists, which is likely and has not been verified.

**Offline evidence:**
- The enforcement stream is visible only through NBKR press releases.
- No local AML SaaS listings were found in this pass.

**Offline channel:**
- The NBKR licence register.
- Physical visits to exchange-office clusters.
- Accountants who serve exchange offices.

**Market count:**
Unknown. The 2026 total was not found; an *estimate* is several hundred offices nationally.

**Willingness to pay / founder access:**
Owners would pay for a tool that prevents suspension. This needs a local, Russian-speaking presence and trust. It is not realistic for a non-local solo founder.

**Score:** 3.5/10

**Sources:**
- https://economist.kg/dengi/2026/05/19/natsbank-povysil-trebovaniia-k-oborotnym-sredstvam-obmenok-kyrgyzstana/
- https://economist.kg/dengi/2026/05/25/v-bishkeke-priostanovili-litsenzii-dvukh-obmennykh-biuro-i-oshtrafovali-narushitelei/
- https://economist.kg/dengi/2026/06/10/nbkr-suspended-exchange-offices-bishkek/
- https://economist.kg/dengi/2026/09/07/natsbank-oshtrafoval-tri-obmennykh-biuro-i-priostanovil-dve-litsenzii/
- https://economist.kg/dengi/2026/10/01/natsbank-tri-obmennykh-punkta/
- https://www.tazabek.kg/news:2537065
- https://banks.kg/news/four-exchange-offices-sanctioned-regulator

### Opportunity (watch-list): Veterinary drug-use and withdrawal-period log

**Industry:**
Veterinary pharmacies, practising vets, and commercial dairy and feedlot farms.

**Buyer:**
Vet-pharmacy owners, and the farm manager at commercial dairies supplying the 55 processors.

**Trigger / Why now:**
- Draft cabinet resolution (May 2026), amending resolution No. 377 of 2015. It would bring strict accounting of vet drugs, a ban on antibiotic growth promoters, prescription-only sale of potent drugs, and mandatory withdrawal periods before meat or milk is sold.
- July 2026: the cabinet tightened licensing for the production and sale of vet drugs (warehouse area, temperature and humidity control).
- Feb 2026: vet-drug registration is being digitised.
- Sept 2026: inspections found pharmacies missing from the internal register.
- In 2025, 166 of more than 47k lab tests were positive for antibiotic or drug residues.

**Current workflow:**
- Pharmacies keep paper sales and storage journals (*unverified*).
- Farms keep no treatment records, or keep them in notebooks.
- Processors test incoming milk for residues.

**Pain:**
Residue findings block exports to the EAEU. Inspections are now targeting pharmacies.

**Existing solutions:**
- Paper journals.
- Possibly the state vet IS (the SIOZh vaccination module).
- 1C retail for the larger pharmacies.

**The gap:**
A cheap prescription, treatment and withdrawal-period log that links a pharmacy sale to a treated animal's SIOZh ID and blocks milk or meat sale until the withdrawal period clears.

**Possible product / MVP:**
A mobile log for pharmacies and vets: prescription entry, a drug table with withdrawal periods, and a per-animal "safe-to-sell" date with an SMS reminder.

**Pricing hypothesis:**
About USD 10–20 per month (*estimate*). Processors may sponsor it for their supplier farms.

**How to find first customers:**
- The 55 dairy processors, which could push the tool to their supplier farms.
- The vet service's pharmacy register.

**Risks:**
- The rule is still a draft.
- Buyers are very low-income.
- The state may add a module to SIOZh.

**Kill condition:**
The final resolution drops the record-keeping duty, or SIOZh adds treatment logging.

**Offline evidence:**
- Inspection findings are about paper registers and storage.
- No local software listings were found.

**Offline channel:**
Dairy processors (the 55 companies are concentrated in Chui oblast) acting as distributors to their farms; the Veterinary Service's inspection rounds.

**Market count:**
- 55 dairy processors (Tazabek).
- The number of vet pharmacies is unknown.

**Willingness to pay / founder access:**
Low. Probably only processor-sponsored. Needs a local founder.

**Score:** 3/10

**Sources:**
- https://economist.kg/agriculture/2026/05/18/minselkhoz-kr-predlagaet-uzhestochit-uchet-lekarstv-v-zhivotnovodstve/
- https://economist.kg/agriculture/2026/07/14/pravila-proizvodstva-prodazhi-vetpreparatov/
- https://economist.kg/agriculture/2026/09/07/vetapteki-narusheniya-tri-oblasti/
- https://knews.kg/2026/09/07/vetsluzhba-proverila-veterinarnye-apteki-v-v-narynskoj-oshskoj-i-dzhalal-abadskoj-oblastyah
- https://economist.kg/agriculture/2026/02/17/v-kyrghyzstanie-otsifruiut-rieghistratsiiu-vietprieparatov/
- https://24.kg/obschestvo/374207_fermeram_kyirgyizstana_hotyat_zapretit_skryivat_antibiotiki_vmyase_imoloke/
- https://www.tazabek.kg/news:2469936

## 3. Rejected

- **Livestock register self-service for farmers:** the state SIOZh cabinet is free (draft law, Aug 2026), and the buyers are smallholders. (https://economist.kg/agriculture/2026/08/26/fermery-reestr-zhivotnyh/)
- **Private vets' data-entry tool:** about 1,500 private vets are being moved into the state enterprise "Mal aman". (https://kaktus.media/doc/551630_v_kr_sozdaut_gp_mal_aman_i_sobirautsia_privlekat_chastnyh_veterinarov_na_gosslyjby.html, https://www.tazabek.kg/news:2518330)
- **Livestock trader and export documents:** vet certificates are fully in the state "Tulpar" system. Live-animal exports are banned for 6 months under resolution No. 607 (10 Sep 2026), with exports only through a state operator. (https://economist.kg/agriculture/2026/07/20/veterinarnye-sertifikaty-eksport-tulpar/, https://economist.kg/agriculture/2026/09/12/kyrgyzstan-zapret-eksport-skota-polgoda/)
- **Slaughterhouses:** there are 97 facilities, and certificates run through state QR e-certificates. (https://economist.kg/agriculture/2026/07/15/naryn-vetkontrol-miasnye-rynki-uboinye-punkty/)
- **Scrap metal:** the export ban on HS 7204 has been extended repeatedly, and no recurring dealer reporting regime was found. (https://economist.kg/ekonomika/2026/07/17/metal-scrap-export-ban-2026/)
- **Honey exporters and dairy processors:** the counts are too small and the state or Mercury systems are the rails. (https://economist.kg/agriculture/2025/11/03/kyrghyzstan-ghotovit-proizvoditieliei-mieda-k-eksportu-tovara-v-ies/)
- **Taxi licensing:** the buyers are individual drivers with a 500-som licence, and the aggregators own the channel. (https://economist.kg/transport/2026/07/01/taksi-bez-licenzii-shtrafy-1-iyulya/, https://economist.kg/transport/2026/09/04/taksi-mezhdugorodnie-perevozki-pravila/)
- **Market traders and cash registers:** the strategic markets are exempt under a special regime, and the issue is politically volatile. (https://economist.kg/biznes/2026/05/22/patent-ne-otmeniaet-chek-gns-napomnila-biznesu-pravila-primeneniia-kkm-video/)
- **Guesthouse foreigner registration:** the state ESUVM portal and mobile app already do this. (https://www.currenttime.tv/a/33849992.html)
- **Not screened for lack of budget:** households as employers, cemeteries and halal certification, hunting outfitters.

## 4. Method notes

What worked:
- Russian-language regulator-news queries. economist.kg's "agriculture", "dengi" and "society" sections reprint ministry and NBKR press releases almost daily, with counts. This was the best single source.
- "Нацбанк приостановил лицензии обменных бюро" for enforcement evidence.
- "реестр"/"разрешение" combined with an industry name for licensed-population counts.

What didn't work:
- Queries about specific record-book or form details. The results drifted to Russian (Rosselkhoznadzor) material.
- Searches for total licence counts for exchange offices and vet pharmacies.

The recurring pattern: Kyrgyzstan digitises quiet-industry obligations through state systems (SIOZh, Tulpar, ESUVM, ESF), or it freezes trades with export bans. That leaves little room for a private intermediary.

Research model: Opus
