# Greece: Indie Software Opportunity Research

Researched 2026-10-05 using 16 web searches, in Greek and English. WebFetch was not used. Facts come from search-result snippets of the cited pages. Anything not confirmed in a snippet is marked "unverified" or "estimate".

**Bottom line:** Greece is easy to sell into: it is in the EU and the euro area, it has no software licensing regime, and SEPA and Stripe work there. It also has one of the densest streams of new mandatory digital workflows in Europe. Almost all of them come from the tax authority (AADE) and the labour ministry (ERGANI II):

- myDATA B2B e-invoicing (2 Feb 2026 and 1 Oct 2026)
- Phase B of the digital delivery note (12 Oct 2026)
- the Digital Client Registry (Ψηφιακό Πελατολόγιο, "DCL") expanding to new sectors in 2026
- the Digital Work Card expanding to about 10 new sectors in 2026
- e-prescription of veterinary medicines, extended to sheep, goats and fish from 1 Jan 2026

The catch is that each AADE mandate comes with:

- a public REST API, which ERP and invoicing vendors adopt quickly;
- a free AADE app (myDATAapp, timologio, the DCL web app);
- a large, aggressive local vendor ecosystem that bundles compliance into existing subscriptions: Epsilon Net, SoftOne, Entersoft, Prosvasis, SBZ Systems, plus about 30 approved e-invoicing providers.

Generic "comply with the new AADE rule" products are therefore **too competitive**. The remaining openings are narrow vertical layers where the mandate meets a sector-specific workflow that horizontal ERPs model badly. The best of these is the DCL for the events sector: per-event registration plus correlation with deposits and invoices. No idea scores above 6/10.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Event venues / catering / wedding suppliers | Digital Client Registry entry per event before service starts, then correlating deposits and final invoices to the entry | **Candidate (6/10)** | New 2026 sector expansion, per-job frequency, €100 fine per violation, public DCL API; horizontal ERPs don't model events, deposits or multi-supplier jobs well |
| Vehicle repair shops / parking / car rental | DCL entry per vehicle job (mandatory since 1 Jul 2025) | Candidate, crowded (4/10) | Real pain, with documented pushback from repair shops, but already a year old and covered by ERP vendors, booking tools (Anolla) and the free AADE app |
| Gyms / beauty / physio / hotels | DCL expansion during 2026 | Watch / folded into #1 | Dates not confirmed in sources; gyms and beauty are better served by existing booking SaaS that will add DCL |
| Wholesalers / small carriers / goods receivers | Digital delivery note Phase B: loading, transhipment and receipt events, plus quantity/quality check data, from 12 Oct 2026; TARIC item codes from 1 Jan 2027 | Candidate (4/10) | Strong, dated trigger, but the free myDATAapp, ERP vendors and carrier apps (EMDI Transit) are already moving |
| Livestock vets / vet-drug retailers | E-prescription of veterinary medicines on gov.gr (sheep, goats, fish since 1 Jan 2026) | Attractive problem, poor distribution (4/10) | Per-prescription and mandatory, but no confirmed API, a small rural buyer pool and low WTP |
| All B2B (e-invoicing) | Mandatory B2B e-invoicing through an approved provider (Phase 1: 2 Feb 2026; Phase 2: 1 Oct 2026) | Too competitive | About 30 AADE-approved providers plus the free AADE "timologio" app |
| Employers in newly covered sectors (health, cleaning, hairdressers, logistics, repairs, consulting…) | Digital Work Card clock-in/out to ERGANI II; pilots Jun–Nov 2026 | Too competitive | Epsilon Net gives the card scanner and digital schedule free to accountants and businesses; payroll vendors cover 1.8M employees |
| Short-term rental hosts / managers | Per-stay "Δήλωση Βραχυχρόνιας Διαμονής" by the 20th of the following month; climate-resilience fee; AMA registry number | Too competitive | PMS products already generate the Taxisnet XML and push the AMA number to the platforms |
| Businesses with fire-safety certificates | Renewal of the active fire-protection certificate (fully electronic, ≥2 months before expiry) | Rejected | Low frequency (multi-year renewals); engineers and fire-safety contractors handle it as a service |
| Waste producers / collectors | Electronic Waste Register (ΗΜΑ) registration and annual reporting | Rejected (insufficient evidence) | Annual cadence; no 2025–2026 trigger found in searches |

---

### Opportunity: Events-sector Digital Client Registry companion (venues, caterers, wedding suppliers)

**Industry:**
Event venues (κτήματα, αίθουσες δεξιώσεων), catering companies and wedding/baptism suppliers (photographers, florists, DJs/musicians).

**Buyer:**
Owner or office manager of a wedding/reception venue or catering company. The outside accountant (λογιστής) who maintains the client's myDATA setup is the secondary buyer or channel.

**Trigger / Why now:**
AADE is expanding the DCL from vehicles (mandatory since 1 Jul 2025) to social events in 2026: weddings, baptisms, receptions and parties, with venues and caterers named explicitly. Press reports also name florists, photographers, musicians and DJs as targeted. Under Decision A.1057/2025, the DCL records each transaction "in real time and in any case before the start of provision of the service". Each undeclared or late entry costs €100 and can trigger a tax audit. Several press items (June 2026) say AADE will cross-check details such as guest numbers. **The exact mandatory start date for the events sector was not confirmed in the sources (unverified).**

**Current workflow:**
1. The event is booked months ahead, often with a cash or bank deposit; the contract and menu sit in Word or Excel and WhatsApp.
2. Before the event, someone must open a DCL entry, either in the AADE web app or through their ERP if it supports the DCL API, with client and service details.
3. Deposits, the final invoice or receipt and any changes (guest count, extra services) must later be correlated to that DCL entry and transmitted to myDATA.
4. Cancellations and date changes need the entry amended or cancelled; subcontracted suppliers (catering inside a venue) create cross-entity mismatches.
5. The accountant reconciles at month end and fixes missing correlations.

**Pain:**
- €100 per violation, with audit risk.
- High value per event and heavy use of cash in the sector, the stated reason AADE targets it.
- Events are booked long before they are invoiced, so the "registered before service" and "correlate later" steps are separated by months. That is exactly the exception pattern generic invoicing tools handle badly.
- In the vehicle sector, the DCL rollout drew documented pushback from repair shops and AADE delayed further sectors "to avoid the errors and malfunctions recorded in the vehicle sector".

**Existing solutions:**
- AADE's own DCL web app (free, manual).
- ERP/commercial packages with DCL API support: Epsilon Net, SoftOne, Prosvasis and others (DCL support in each package unverified individually).
- Booking SaaS such as Anolla, which markets DCL-related booking software for car workshops and fitness.
- Accountants doing it manually.
- No events-specific DCL tool found (absence not proven).

**The gap:**
- An event-shaped record: booking date far from service date, deposits, guest-count changes, cancellations and multiple suppliers per event.
- Correlating every deposit and invoice to the right DCL entry automatically.
- Alerts for "event in 48h with no DCL entry".
- None of this is how horizontal ERPs or the AADE app model the work.

**Possible product:**
An events calendar/booking ledger that pushes each confirmed event to the AADE DCL API, ties deposits and the final invoice (through the customer's existing e-invoicing provider) to the entry, and flags gaps before AADE does. It also includes an accountant view across several clients.

**MVP:**
1. Import or enter events.
2. One-click DCL creation, amendment and cancellation via the DCL API using the business's AADE user codes.
3. A deposit and invoice correlation checklist.
4. Daily email/SMS alerts for unregistered upcoming events.
5. Monthly reconciliation export for the accountant.

**Pricing hypothesis:**
€29–59/month per venue or caterer (estimate). An accountant plan of about €10/client/month.

**How to find first customers:**
- Venue listings on wedding directories and Google Maps (κτήματα γάμου by region).
- Catering associations and wedding fairs.
- Accountants who serve hospitality clients, reached through taxheaven/forin and accountant Facebook groups.
- Number of venues and caterers unverified: estimate of a few thousand venues and caterers nationally, more if photographers and florists are included.

**Risks:**
- AADE may delay or water down the events phase.
- ERP vendors may add an "events" template.
- Buyers are highly seasonal and price-sensitive.
- The free AADE app may be "good enough" for low-volume venues.
- Using the DCL API from a third-party tool requires the business's AADE credentials (an onboarding step, not a licensing barrier).

**Kill condition:**
- The events-sector DCL is postponed beyond 2027, or turns out to require only a simple single entry with no later correlation.
- Or 10 venue interviews show their existing invoicing provider already handles it at no extra cost.

**Score:** 6/10

**Sources:**
- https://www.newsit.gr/oikonomia/finance/aade-se-catering-ktimata-gamon-kai-epixeiriseis-ekdiloseon-epekteinontai-oi-elegxoi-meso-psifiakou-pelatologiou/4719054/
- https://athina984.gr/2026/06/16/psifiako-pelatologio-epekteinetai-se-gamoys-vaftisia-aithoyses-dexioseon-kai-etaireies-catering/
- https://www.powergame.gr/forologia/1181703/psachnoun-mavro-chrima-se-gamous-vaptiseis-kai-parti-me-oplo-to-neo-psifiako-pelatologio/
- https://forolink.gr/psifiako-pelatologio-gamoi-catering-ekdiloseis/
- https://www.newmoney.gr/roh/palmos-oikonomias/oikonomia/psifiako-pelatologio-pai-gia-to-2026-i-epektasi-tou-se-neous-kladous/amp/
- https://www.forin.gr/articles/article/84337/a-1057-2025 (Decision A.1057/2025)
- https://www.aade.gr/sites/default/files/2025-06/DCL%20API%20Documentation%20v1.1_official_erp.pdf
- https://www.aade.gr/sites/default/files/2025-07/FAQs_psifiako_pelatologio.pdf
- https://www.powergame.gr/forologia/985015/premiera-sto-psifiako-pelatologio-antidraseis-apo-synergeia-aftokiniton/

---

### Opportunity: Delivery-note Phase B "receipt and quantity check" tool for small receivers and carriers

**Industry:**
Wholesale distribution, small manufacturers, food and beverage distributors, and third-party road carriers.

**Buyer:**
Warehouse or logistics manager at an SME that receives or dispatches goods without a full ERP, and owner-operators of small trucking firms that carry goods for others.

**Trigger / Why now:**
A joint ministerial/AADE decision of 30 Apr 2026 split Phase B of the digital delivery note into stages:

- **From 12 Oct 2026**, loading, transhipment and receipt procedures for digital traceability of stock movement are activated, along with transmission of quantity and quality check data.
- New document types are added: 9.1 correlated delivery note, 9.2 summary delivery note and 10.2 quantity-receipt note.
- **From 1 Jan 2027**, items must be coded to the Combined Nomenclature (TARIC).

**Current workflow:**
1. The sender issues the delivery note from its ERP or myDATAapp; it gets a MARK/QR code.
2. The carrier loads, possibly tranships, and delivers; under Phase B each event must be recorded.
3. The receiver checks quantity and quality; discrepancies must be transmitted (10.2) and reconciled against the note and later invoice.
4. Exceptions (partial deliveries, returns, damaged goods, multi-drop routes) are handled on paper and keyed in afterwards.

**Pain:**
Mandatory per shipment, so the frequency is daily. Fines and audit exposure are described in AADE's April 2026 circular coverage. TARIC coding of every item from 2027 is a large one-off data-cleansing job, followed by ongoing maintenance.

**Existing solutions:**
- AADE myDATAapp (free; upgraded in 2026 with QR tracking of movements).
- ERP vendors (SoftOne, Epsilon, Entersoft, SBZ Systems, Prosvasis).
- Carrier-specific apps such as EMDI Transit, marketed as built for Phase B.
- Accountants.

**The gap:**
- Receiver-side discrepancy handling (10.2) and multi-drop and transhipment exceptions for SMEs whose invoicing tool only issues documents.
- A TARIC-mapping helper for SMEs' item catalogues before 1 Jan 2027.

**Possible product:**
A mobile-first receiving and dispatch app that scans the delivery-note QR code, records loading and receipt events, and captures discrepancies with photos. It submits the events through the myDATA API and adds an item-to-TARIC mapping assistant.

**MVP:**
QR scan, then receipt confirmation, then a quantity-discrepancy form submitted to myDATA, plus a weekly exceptions report for the accountant.

**Pricing hypothesis:**
€19–49/month per site or truck (estimate). A one-off TARIC mapping service of €200–500.

**How to find first customers:**
- Carrier members of road-haulage federations (e.g., OFAE, which published the Phase B timetable).
- Chambers of commerce membership lists.
- Distributors' supplier networks.

**Risks:**
- The free myDATAapp keeps improving.
- ERP vendors dominate.
- AADE has postponed Phase B several times and may again.

**Kill condition:**
myDATAapp fully supports receipt and discrepancy flows by Q4 2026, or AADE postpones 12 Oct 2026 again.

**Score:** 4/10

**Sources:**
- https://aade.gr/sites/default/files/2026-04/dt_30.04.2026.pdf
- https://www.taxheaven.gr/news/73472/paratash-b-fashs-gia-to-pshfiako-deltio-apostolhs
- https://www.ofae.gr/el/nea/communication-ministries/pshfiako-deltio-apostolhs-paratash-sth-b-fash-neo/
- https://foronews.gr/6/index.php/forologika/epikairotita/1751-psifiako-deltio-apostolis-stin-teliki-eftheia-i-v-fasi-ti-allazei-kai-ti-zita-i-agora
- https://www.forin.gr/articles/article/92178/aade-nea-anabathmish-tou-mydata-perissoteres-pshfiakes-dunatothtes-sth-diakinhsh-agathwn
- https://www.tanea.gr/2026/04/19/economy/psifiako-deltio-apostolis-ti-allazei-me-tin-egkyklio-tis-aade-ypoxreoseis-eksaireseis-kai-prostima/
- https://www.sbzsystems.com/el/nea/paratasi-b-fasis-psifiakoy-deltioy-apostolis/

---

### Opportunity: Vehicle-sector DCL exception and reconciliation layer for independent workshops

**Industry:**
Independent car and motorcycle repair shops, tyre shops, car washes and parking operators.

**Buyer:**
Owner of a 1–10-person workshop and their outside accountant.

**Trigger / Why now:**
The DCL has been mandatory for the vehicle sector since 1 Jul 2025. Each vehicle job must be registered before work starts and later correlated with the receipt or invoice. The fine is €100 per violation.

**Current workflow:**
1. The vehicle arrives and the shop opens a DCL entry in the AADE app, or in its ERP if supported.
2. The work is done; parts and labour are invoiced, often days later.
3. The receipt must be correlated with the DCL entry; jobs that are cancelled, warranty or free need special handling.
4. The accountant chases missing correlations.

**Pain:**
Documented complaints from workshops at the launch. AADE itself cited "errors and malfunctions" in the vehicle sector as the reason for slowing the rollout.

**Existing solutions:**
- AADE free DCL app.
- ERP and commercial packages using the DCL API.
- Workshop booking and management tools (e.g., Anolla).
- Accountants.

**The gap:**
Only exception reconciliation (open entries with no invoice, and the reverse) across clients for accountants. Basic entry is commoditised.

**Possible product:**
An accountant-facing dashboard that pulls DCL entries and myDATA documents for all client workshops and lists uncorrelated or late items.

**MVP:**
Read-only reconciliation report per client from the DCL and myDATA APIs. Whether accountants can call these APIs on clients' behalf is unverified.

**Pricing hypothesis:**
€5–10/client/month to accountants (estimate).

**How to find first customers:**
Accountant communities (taxheaven/forin readership, regional accountant associations) and workshop associations.

**Risks:**
Major Greek accounting-software vendors (Epsilon Net and others) are likely to add this view, and the market is a year old.

**Kill condition:**
Epsilon or SoftOne accountant suites already show DCL–invoice mismatches.

**Score:** 4/10

**Sources:**
- https://www.forin.gr/articles/article/87052/suxnes-erwthseis-apanthseis-aade-pshfiako-pelatologio
- https://www.odigostoupoliti.eu/poies-epicheiriseis-tiroun-ypochreotika-psifiako-pelatologio-ochimaton/amp/
- https://www.powergame.gr/forologia/985015/premiera-sto-psifiako-pelatologio-antidraseis-apo-synergeia-aftokiniton/
- https://anolla.com/el/loghismiko-autokiniton
- https://www.aade.gr/sites/default/files/2025-06/DCL%20API%20Documentation%20v1.1_official_erp.pdf

---

### Opportunity: Livestock-vet e-prescription and farm medicine-register helper

**Industry:**
Food-producing-animal veterinary practices; vet-drug retailers.

**Buyer:**
Rural livestock vet (solo or small practice) and agricultural-supply stores selling veterinary medicines.

**Trigger / Why now:**
Ministerial Decision 407523/2024 (Government Gazette (ΦΕΚ) Β 7607/31.12.2024) made e-prescription on gov.gr mandatory:

- from 1 Jan 2025 for cattle, pigs, broilers, layers and turkeys;
- from 1 Jan 2026 for sheep, goats, fish, rabbits, ducks, geese, horses and fur animals.

Its purpose is EU antimicrobial-use reporting.

**Current workflow:**
1. The vet visits the farm and treats the animals.
2. The vet logs in to the gov.gr service and keys in the prescription manually: farm, species, drug and quantities.
3. The retailer executes the prescription on the system.
4. The farm's own treatment records are kept separately.

**Pain:**
Manual entry for every prescription, done in the field. Exposure to antimicrobial-use audits. No direct complaint evidence was found in searches (unverified).

**Existing solutions:**
- The gov.gr service (free).
- Greek companion-animal practice software (not checked).
- Paper.

**The gap:**
Offline field capture and templating of repeat herd treatments. Whether any API exists for third-party submission is **unverified**; without one, the product is a pre-fill helper only.

**Possible product:**
A mobile app for vets with offline treatment capture, prescription templates and pre-filled submission, plus farm-level treatment history.

**MVP:**
Offline capture and a template library, plus export or copy-assist into the gov.gr form.

**Pricing hypothesis:**
€15–30/month per vet (estimate).

**How to find first customers:**
Panhellenic Veterinary Association (ΠΚΣ) regional chapters and livestock cooperatives.

**Risks:**
No API, a small buyer pool (the number of livestock vets is unverified, likely in the low thousands at most), low WTP, and seasonal and rural reach.

**Kill condition:**
No API or browser automation is permitted, and vets say the gov.gr form takes under 2 minutes.

**Score:** 3/10

**Sources:**
- https://www.gov.gr/ipiresies/georgia-kai-ktenotrophia/ktenotrophia/elektronike-suntagographese-kteniatrikon-pharmakon
- https://www.taxheaven.gr/circulars/49435/407523-27-12-2024
- https://forin.gr/downloads/download/102720/fek-b-7607-31122024?get=1
- https://www.odigostoupoliti.eu/ilektroniki-syntagografisi-ton-ktiniatrikon-farmakon/

---

## Rejected after competitor research

- **B2B e-invoicing compliance for SMEs** (Phase 1 from 2 Feb 2026, Phase 2 from 1 Oct 2026). Killed by about 30 AADE-approved e-invoicing providers and the free AADE "timologio" app. Sources: https://www.aftodioikisi.gr/oikonomia/ypochreotiki-i-ilektroniki-timologisi-apo-2-fevroyarioy/, https://www.rsm.global/greece/node/338
- **Digital Work Card for newly covered sectors** (health, cleaning, hairdressers, logistics, repairs, water/wastewater and others; pilots 2 Jun–15 Nov 2026). Killed by Epsilon Net's free Epsilon Smart Ergani tiers for accountants and businesses (free HR Card Scanner) and by payroll vendors covering about 1.8M employees. Sources: https://www.in.gr/2026/03/25/economy/psifiaki-karta-ergasias-epekteinetai-se-8-kladous-prin-pasxa/, https://www.powergame.gr/epichirisis/342605/epsilon-net-oi-allages-me-tin-psifiaki-karta-ergasias, https://www.e-forologia.gr/cms/viewContents.aspx?id=238622
- **Short-term-rental per-stay declarations and AMA compliance.** Killed by PMS products that already generate the Taxisnet XML and push AMA numbers to the platforms (e.g., Vezpa's AMA guide), and by tax accountants. Sources: https://www.aade.gr/sites/default/files/2025-09/FAQs_braxixronias_misthosis1.pdf, https://vezpa.it/gr/blog/mitroo-ama-vrachychronia-diamoni/
- **Fire-safety certificate renewals.** Multi-year cadence; already a service done by engineers and contractors on a fully electronic Fire Service process. Source: https://mitos.gov.gr/index.php/ΔΔ:Ανανέωση_πιστοποιητικού_(ενεργητικής)_πυροπροστασίας

## Attractive problem, poor distribution

- Livestock-vet e-prescription (above): mandatory and per-prescription, but rural buyers are few with low WTP and API access is unverified.
- Electronic Waste Register (ΗΜΑ) reporting for licensed producers and collectors: real obligation, but annual cadence and no 2025–2026 trigger found. Sources: https://api-wrm.ypeka.gr/promo_assets/files/ΗΜΑ_faq_v5.pdf

## Too competitive

- myDATA e-invoicing, Digital Work Card / ERGANI II, STR declarations (above).
- Basic DCL entry for vehicles, gyms and beauty: commoditised by ERP vendors, booking SaaS (Anolla) and the free AADE app. Only exception reconciliation remains (scored 4/10 above).

## Cross-market note

Greek-language products built on AADE APIs can also be offered in Cyprus, where Greek is the official language and the market is small. However, Cyprus has no DCL or myDATA equivalents, so only the general workflow would carry over.
