# Burkina Faso: offline / quiet-industries pass

Research date: 2026-10-05. Budget: 20 WebSearch calls, all used. WebFetch was not used, so findings come from search-result summaries only. Anything not confirmed by a source is marked "unverified" or "estimate".

Context, carried over from `research/countries/burkina-faso.md`: the country is run by a military transition government, it is in UEMOA (CFA franc and BCEAO payment rails), and it has a strong "economic sovereignty" line. A non-local founder needs a local partner. In 2026 the state is moving into several quiet industries itself: it buys artisanal gold through SONASP, it suspended livestock exports, it set up a slaughterhouse agency, and it caps prices for motorbikes and private-school fees. That shrinks the room for private software in most of them. The certified e-invoice (FEC) is already covered in the country report and is not repeated here.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Motorbike and tricycle dealers | Hold a "carte W" licence. Register every bike in the provisional WW series before it leaves the shop. Hand the buyer a WW certificate, which has been required for definitive registration since 1 Jan 2026. Also display prices and issue compliant invoices. | Enforcement is done by inspection teams visiting shops (DGTTM Nov 2025; BMCRF price raids Jul 2025 to Sep 2026). Many dealers lacked an RCCM, a tax number, purchase invoices or sales invoices. No dealer software turned up. | Not public. Ouagadougou alone likely has several hundred shops (estimate) | **Shortlist** | A hard new 2026 trigger with enforcement already happening. Weakness: the WW workflow may run through DGTTM or its plate contractor, not the dealer. |
| Small employers: bakeries, pastry shops, ice-cream shops, other SMEs | CNSS affiliation, worker registration, salary declarations and contributions. Penalties are 1.5% for late payment and a 25% automatic assessment if no declaration is filed. | In a Nov 2025 national raid on 659 bakeries, 163 employers were unknown to CNSS and 4,854 of 7,316 workers were unregistered. Raids are carried out with the security forces. | CNSS plans to inspect 16,916 employers in 2026 (Sidwaya / AllAfrica) | **Shortlist (service)** | Enforcement is real and widening. The portal (eCNSS) is free, so the gap is a service, not software. |
| Private schools (post-primary, secondary, higher education) | Fee caps set by decree (29 May 2026), with an annual list of establishments, permanent controls and sanctions | Compliance is checked by ministry controls. Fee schedules are posted on paper (unverified). | Unverified (the official annual list is to be published) | Weak shortlist | A new trigger, but it is a once-a-year fee-schedule check, and school-management software already exists. |
| Domestic workers (household employers) | CNSS registration in principle | No Burkina-specific campaign found. The hits were about Morocco. | Unknown | Reject | No enforcement and no trigger. Household employers won't pay. |
| Livestock traders and exporters | Special export authorisation (ASE), zoo-sanitary pass, certificate of origin | Paper permits issued at the border and by vet posts | Unknown | **Reject** | Livestock exports have been suspended indefinitely since 8 May 2026. Trucks are being seized. |
| Butchers and small abattoirs | Certificate of origin and zoo-sanitary pass before slaughter; post-mortem stamp | Paper, at the abattoir counter. Clandestine slaughter is widespread. | Unknown | Reject | The state agency Faso Abattoir (created Apr 2025) is centralising slaughter. Butchers have very low ability to pay. |
| Artisanal gold buyers (comptoirs) and gold sites | Licence plus purchase and production declarations to the ministry, ANEEMAS and SONASP | Over 800 informal sites. Only 8 artisanal permits and 7 semi-mechanised mines. | 15 formal operators (Financial Afrik 2025) | Reject | The state monopsony SONASP buys the gold (more than 42 t in 2025). The sector is mostly informal and insecure. |
| Money changers (agréés de change manuel) | BCEAO Instr. 15-07-2025 requires monthly reports within 10 working days. Instr. 07-07-2025 requires individual licence holders to re-license as legal entities within a year of 1 Aug 2025. | Reporting is to the Treasury/finance department and to BCEAO in a set format. | 13 licensed in Burkina (lefaso.net, old figure) | Reject for Burkina | Far too few. Worth a look UEMOA-wide (Senegal, Côte d'Ivoire, Benin). |
| Pesticide distributors, retailers and applicators | Approval (agrément) under Law 026-2017 and Decree 2019-0509, issued after training | Seizures of unregistered pesticides in markets. Approval comes from the commerce ministry. | Unknown | Reject | No recurring reporting duty was found, only a one-off approval. Retailers are informal. |
| Borehole drillers | Technical approval (agrément) to bid for public water contracts | Approval comes through the water ministry (DGRE). | Unknown | Reject | Approval matters only for public tenders and is renewed rarely. Most of the market is donor and state procurement. |
| Village pharmaceutical depots | Opening and operating authorisation by ministerial order | Paper orders. 148 of 1,540 supply points closed for security reasons. | About 1,540 supply points (search summary) | Reject | The state is taking over supply (70% of PROPHARM). Margins are thin and the security situation is bad. |
| Scrap metal dealers | None found for Burkina (Niger banned scrap exports in 2024) | Not found | Unknown | Reject (no evidence) | No obligation could be found. |

## 2. Strongest opportunities

### Opportunity: Compliance kit for motorbike dealers (WW sales register, compliant invoice and price list)

**Industry:**  
Motorbike and tricycle retail (two-wheel dealers, mostly in Ouagadougou and Bobo-Dioulasso).

**Buyer:**  
The owner-manager of a motorbike or tricycle shop that holds (or needs) a carte W. A secondary buyer is the importer or wholesaler that supplies many shops.

**Trigger / Why now:**  
The DGTTM started enforcing the 1994 provisional-registration (WW) rule with shop controls from 4 Nov 2025. Since **1 Jan 2026**, applications for definitive registration without the dealer's WW certificate are rejected, and a communiqué of 13 Aug 2026 repeated this. In parallel, the economic-control brigade (BMCRF) has run price-control raids on bike shops since July 2025, again in June 2026, and up to Sep 2026. Shops were closed for missing price displays, missing purchase invoices and non-compliant sales invoices. New measures on selling and using two-wheelers were reported in June 2026 (details not seen).

**Current workflow:**  
1. The dealer sells a bike for cash and writes a hand-made or pre-printed receipt. Often there is no proper invoice.  
2. For WW, the dealer has to record the buyer's ID and the bike's frame and engine numbers, carry out the provisional registration, and give the buyer a WW certificate. Whether this is done on a paper booklet issued by DGTTM or on a DGTTM/STH system is **unverified**.  
3. During inspections the dealer must show the carte W, the RCCM, the tax number (IFU), purchase invoices from the importer and the displayed prices. Gaps lead to fines or closure.

**Pain:**  
Enforcement is real. Raids have closed shops (Wakat Séra), and in a Dec 2025 check of tricycle drivers only 4 of 220 were compliant. Without the WW certificate the customer can't register the bike, so the dealer loses sales or gets complaints. Buyers are told publicly to check that the dealer holds a carte W.

**Existing solutions:**  
- Paper receipt books and carbon invoice pads from stationers (assumed; unverified).  
- The DGTTM process itself, and its plate contractor Supernet Technologie Holding (STH), which may already run a digital registration back end (unverified).  
- Generic point-of-sale and invoicing apps. Under the FEC rollout, small dealers will eventually need a DGI billing unit, but only from 2027–2028.  
- Business-formalities agents and accountants who get the RCCM, IFU and carte W for a fee.

**Offline evidence:**  
Compliance is checked by physical raids on shop counters. Inspectors found missing invoices and documents, which shows the records are paper or don't exist. No dealer-compliance software listing was found.

**Offline channel:**  
Visit shops in person along the motorbike-dealer streets of Ouagadougou. Importers and wholesalers that supply dealers could bundle the kit. Dealers who go to DGTTM for their carte W would be a natural place to reach them. Bike traders' associations may exist (unverified).

**Market count:**  
Not public. My estimate is a few hundred to about 1,000 shops nationally. The DGTTM carte W register would be the source, if it can be obtained.

**The gap:**  
One record per sale that produces the compliant invoice, the WW data the buyer needs and a register ready for inspection (purchase invoice linked to sale linked to buyer), printable on a cheap thermal printer.

**Possible product:**  
An Android app with a Bluetooth printer. The dealer enters stock from the importer's invoice once (frame and engine numbers). Each sale prints a compliant invoice and fills in a WW data sheet. A "control mode" shows the inspector the register.

**MVP:**  
A stock-and-sale register keyed on frame number, with a printable invoice template and a monthly PDF register. Kept deliberately away from the FEC billing-unit scope until 2027.

**Pricing hypothesis:**  
5,000–10,000 FCFA a month (about US$8–17), or a one-off 50,000 FCFA with a printer. That is an estimate, and willingness to pay for software is doubtful: dealers are likely to pay only for a done-for-you "papers in order" service (carte W, RCCM, IFU, register) bundled with the app.

**How to find first customers:**  
Walk the shops in Ouagadougou. Partner with one importer or wholesaler.

**Founder access:**  
A non-local solo founder could not sell this. It needs a local partner on the ground in Ouagadougou who speaks French and Mooré.

**Risks:**  
The WW step may already be digital and controlled by DGTTM or STH, leaving no dealer-side gap. The FEC rollout to small taxpayers (2027) could replace the invoice part. The market is small and has very low ability to pay. Price controls squeeze dealer margins.

**Kill condition:**  
Kill it if the WW certificate is generated in a DGTTM/STH system that dealers already use, or if fewer than about 300 shops hold a carte W.

**Score:** 4/10

**Sources:**  
- https://burkina24.com/2025/11/04/burkina-faso-la-dgttm-impose-limmatriculation-provisoire-ww-des-motos-avant-livraison/  
- https://burkina24.com/2026/08/13/communique-immatriculation-des-motos-le-certificat-provisoire-ww-desormais-obligatoire/  
- https://burkina24.com/2025/11/19/la-dgttm-sonde-la-qualite-des-plaques-dimmatriculation-les-concessionnaires-face-a-leurs-responsabilites/  
- https://burkina24.com/2025/07/17/marche-des-deux-roues-au-burkina-faso-un-mois-pour-se-conformer-ou-subir-les-sanctions/  
- https://fr.allafrica.com/stories/202606080692.html  
- https://fr.allafrica.com/stories/202606090756.html  
- https://www.wakatsera.com/prix-des-motos-des-magasins-ont-ete-fermes/  
- https://fr.allafrica.com/stories/202601040041.html

### Opportunity: Done-for-you CNSS and payroll compliance for small employers targeted by inspections (bakeries first)

**Industry:**  
Small employers in sectors targeted by CNSS raids: bakeries, pastry shops, ice-cream shops, then other sectors in the 2024–2026 national employer-inspection plan.

**Buyer:**  
The owner of a bakery with 5–30 workers, often not registered or under-declaring.

**Trigger / Why now:**  
This is the 2024–2026 national employer-inspection plan. In Nov 2025 a nationwide bakery raid, carried out with the security forces, found that 163 of 659 employers were unknown to CNSS and 4,854 of 7,316 workers were unregistered. CNSS plans **16,916 employer inspections in 2026** (+10.6%). The penalties are 1.5% for late payment and a 25% automatic assessment when no declaration is filed (Law 004/2021, Order 2022-061).

**Current workflow:**  
1. Workers are paid in cash with no payslips (inference from the raid results).  
2. Once inspected, the owner has to register the business and each worker, filing CNSS forms with ID documents, often at the counter.  
3. Salary declarations and payments then go through eCNSS (web and mobile app, launched Oct 2025, with mobile-money payment), and wage tax (IUTS) goes through eSINTAX.

**Pain:**  
The raids, the 25% automatic assessment and the sector-by-sector campaigns are all evidenced. Owners are rarely literate in the portals (inference).

**Existing solutions:**  
eCNSS (free, government-run), eSINTAX, local accountants and payroll packages (Sage-type), and CNSS counters.

**Offline evidence:**  
Thousands of workers were unregistered, and enforcement is by physical raid. The buyers are not portal users.

**Offline channel:**  
CNSS's own inspection lists are not public, but the sectors are known. The bakers' employer association (unverified), flour mills and distributors that deliver to every bakery, and accounting firms are the routes in.

**Market count:**  
16,916 employers scheduled for inspection in 2026 (CNSS). At least 659 bakery employers (Nov 2025 raid).

**The gap:**  
A flat-fee "regularise and stay compliant" service: register the workers once, then run monthly payroll from a WhatsApp message listing who worked, and file and pay on eCNSS and eSINTAX on the owner's behalf.

**Possible product:**  
An accountant-operated back office. Owners send monthly headcount and wages by WhatsApp or voice. The tool produces payslips and the eCNSS and IUTS figures, and a clerk files them.

**MVP:**  
A spreadsheet-backed payroll calculator (IUTS plus CNSS) with payslip PDF generation, run by one local accountant for 20 bakeries.

**Pricing hypothesis:**  
10,000–20,000 FCFA a month per employer (estimate). This is a service, not software. Bakeries would not buy software.

**How to find first customers:**  
Flour suppliers' delivery routes, bakery associations, and referrals from accountants after a raid.

**Founder access:**  
This needs a local accountant. A foreign founder can at most supply the tool to accounting firms.

**Risks:**  
Owners may stay informal and accept the risk. Margins are tiny. Local accountants already do this. It is a commodity that competes with free portals.

**Kill condition:**  
Kill it if accounting firms already offer per-employee CNSS packages below 5,000 FCFA a month, or if raids don't recur.

**Score:** 3/10

**Sources:**  
- https://www.sidwaya.info/protection-sociale-plus-de-4-800-travailleurs-non-immatricules-detectes-par-la-cnss-en-2025/  
- https://fr.allafrica.com/stories/202606080704.html  
- https://burkina24.com/?p=423227  
- https://fr.allafrica.com/stories/202601130212.html  
- https://fr.allafrica.com/stories/202510290346.html (eCNSS launch, cited in the country report)

### Opportunity (weak): Fee-cap compliance file for private schools

**Industry:**  
Private post-primary, secondary and higher-education institutions.

**Buyer:**  
The founder or administrator of a private school.

**Trigger / Why now:**  
The decree adopted 29 May 2026 (communicated July 2026) caps every fee category (application, registration, tuition, labs, defence, diploma) by level, category and location, at 25,000–150,000 FCFA. It provides for permanent controls, an annual update of the list of establishments, and sanctions.

**Current workflow:**  
The administrator maps the existing fee schedule onto the decree's ceilings by hand, reprints the fee lists, and answers to ministry controllers (assumed; unverified).

**Pain:**  
There are sanctions for overcharging. Schools lose revenue, so they will try to restructure fees within the cap. Inference.

**Existing solutions:**  
School-management software from local and regional vendors (unverified names), Excel, and private-school federations that advise members.

**Offline evidence:**  
Fee schedules are paper notices. Controls are on site.

**Offline channel:**  
Private-school federations and the ministry's annual list of establishments.

**Market count:**  
Unverified. The ministry list is to be published every year.

**The gap:**  
A ceiling checker plus a compliant fee-schedule generator. It is too thin and too annual to stand alone.

**Possible product:**  
A fee-schedule module bolted onto school billing.

**MVP:**  
A web form: pick level, category and location, enter current fees, get flags and a printable compliant schedule.

**Pricing hypothesis:**  
At most a one-off fee of 25,000–50,000 FCFA a year. Estimate.

**How to find first customers:**  
Private-school federations.

**Founder access:**  
Needs a local partner.

**Risks:**  
The check happens once a year. Federations will publish free tables. Existing school software will add it.

**Kill condition:**  
Kill it if the ministry or the federations publish a ready ceiling table, which is likely.

**Score:** 2/10

**Sources:**  
- https://burkina24.com/2026/07/14/burkina-faso-le-gouvernement-plafonne-les-frais-de-scolarite-dans-les-etablissements-prives/  
- https://fr.allafrica.com/stories/202605300047.html  
- https://www.sidwaya.info/reglementation-des-frais-de-scolarite-dans-les-structures-privees-denseignement-conseil-des-ministres/

## 3. Rejected

- **Livestock traders (export authorisations and health passes):** exports have been suspended indefinitely since 8 May 2026 and trucks are being seized. ([APA](https://fr.apanews.net/business/burkina-les-exportations-de-betail-suspendues-avant-la-tabaski/), [AllAfrica](https://fr.allafrica.com/stories/202605150138.html))
- **Butchers and small abattoirs:** the state agency Faso Abattoir (Apr 2025) and new public abattoirs are centralising slaughter, clandestine slaughter is common, and butchers can pay very little. ([AllAfrica](https://fr.allafrica.com/stories/202601060089.html), [Burkina24](https://burkina24.com/?p=430497))
- **Artisanal gold buyers and sites:** the state monopsony SONASP collected more than 42 t in 2025 and is opening its own buying windows. Only 15 formal operators exist against more than 800 informal sites. ([AllAfrica SONASP](https://fr.allafrica.com/stories/202510240226.html), [Financial Afrik](https://www.financialafrik.com/2025/09/18/burkina-faso-plus-de-800-mines-dor-artisanales-echappent-au-controle/))
- **Money changers:** the BCEAO 2025 monthly-report rule is real, but there are only 13 licensees in Burkina. Re-screen at UEMOA level. ([Financial Afrik](https://www.financialafrik.com/en/2025/08/02/breaking-news-bceao-publishes-a-series-of-key-instructions-on-exchange-regulation/), [Trésor Bénin instruction 07-07-2025](https://tresorbenin.bj/documentation/serve/instruction-ndeg-07-07-2025-rfe-relative-aux-conditions-dexercice-de-lactivite-dagree-de-change-manuel), [lefaso.net](https://lefaso.net/spip.php?article827=))
- **Pesticide sellers:** the approval is one-off with no recurring register found, and retailers are informal. ([LEAP decree 2019-0509](https://leap.unep.org/en/countries/bf/national-legislation/decret-ndeg-2019-0509prespmmciamaahmeevcc-du-22052019-portant))
- **Borehole drillers:** approval matters only for public and donor tenders, which a procurement consultant handles.
- **Village pharmaceutical depots:** state takeover of supply (PROPHARM) and security-driven closures. ([Ecofin](https://www.ecofinagency.com/finance/0705-46733-burkina-faso-to-acquire-70-of-propharm-to-strengthen-local-drug-supply))
- **Household employers of domestic workers, and scrap dealers:** no Burkina-specific obligation or enforcement found.

## 4. Method notes

- What worked: French queries naming the **enforcing body plus "contrôle"** (DGTTM, BMCRF, CNSS) through the national news sites burkina24, Sidwaya, lefaso.net and AllAfrica. Enforcement news is the best proxy for the regulator's records, because the registers themselves (carte W holders, CNSS employers, approved drillers) are not published online.
- What didn't: searching for registers and lists ("liste agréés", "registre") returned FAOLEX laws or results from other countries (Morocco, Niger). Searches on scrap and domestic workers found nothing for Burkina.
- Structural finding: in 2025–2026 the Burkinabe state is **taking over** several quiet industries (gold, livestock, abattoirs, pharmaceutical supply, price caps), which removes the private software buyer. The only fresh dealer-side trigger is motorbike WW registration. A non-local founder needs a local partner throughout.
