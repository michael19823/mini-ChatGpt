# Greece: Offline-Industries Pass

Researched 2026-10-05. I ran 38 web searches, most of them in Greek; one was cut off by a session limit and rerun. WebFetch and the GitHub tools were not used. All facts come from search-result snippets of the cited pages. Anything not confirmed in a snippet is marked "unverified" or "estimate".

This pass adds to `research/countries/greece.md` and does not repeat it. That report already covers the events-sector Digital Client Registry (DCL), Phase B of the digital delivery note for wholesalers and carriers, the DCL for vehicle workshops, and livestock-vet e-prescription.

**Bottom line.** In Greece the "regulator-first" method mostly turns up ministries that **build the tool themselves**:

- the agriculture ministry is installing VMS trackers and supplying tablets for 10,743 small fishing boats;
- the AADE runs a bolus-traceability database whose readers send data straight to the database;
- the AADE gives the myDATAapp free, with an offline mode, to street-market sellers;
- e-EFKA runs a funeral-expense portal.

So the paper-to-portal gap is usually closed by the state, for free. Software can only add value at the **"one job, two or three receiving bodies"** junctions that the state tools don't join up. The best one found is restaurants and fishmongers who buy fish straight from boats: they file to the fisheries system (ΟΣΠΑ) within 48 h and also owe a purchase invoice in myDATA. No idea scores above 5/10.

---

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Restaurants / fishmongers buying direct from boats ("first buyers") | Register in ΟΣΠΑ; receipt declaration within 24 h (turnover above €200k) or 48 h (below), plus a sales declaration; buyer issues the purchase invoice when the fisher is under the special farmers' regime | Regional fisheries offices still send PDF notices (Ionian Region 2024); ΟΣΠΑ is being expanded and upgraded (KtP project) | Not found in sources. Feeder fleet: 10,743 small-scale coastal vessels (ΥΠΑΑΤ, Aug 2026) | **Candidate (5/10)** | Per purchase, mandatory, two receiving systems (ΟΣΠΑ + myDATA); no vendor found that links them |
| Street-market sellers (λαϊκές αγορές), producers and professionals | Consolidated delivery note (Συγκεντρωτικό Δελτίο Αποστολής) per trip to market; **handwritten allowed until 11 Oct 2026, digital only from 12 Oct 2026** (AADE circular Ε.2038/2026) | Handwritten until now; sellers' federation publicly said "No to the electronic delivery note" | Not found; all licences are registered in the ΟΣΠΑΑ "Open Market" system (openmarket.mindev.gov.gr) | Candidate, weak (4/10) | Starts in 7 days and repeats every market day, but the free myDATAapp (with offline mode) is the official answer |
| Funeral homes (γραφεία τελετών) | Submit the service receipt (ΑΠΥ) **with its AADE MARK number** to e-EFKA for the funeral-expense payment; new e-EFKA system live 6 Oct 2026; Digital Work Card for funeral homes in 2026 | Owner-run; association site (hufes.gr) posts notices; no Greek funeral software found | 643 listed on sillipitiria.gr (directory, likely an undercount) | Candidate, weak (4/10) | Revenue-linked (€800–1,200 per case), but a single portal and a simple payload |
| Sheep/goat farmers and certified vets (electronic boluses) | Bolus plus ear tag matched per animal, registered by a certified vet within 2 days in the new digital traceability database; pilot for farms above 900 head in 2026, **all farms from 2027** (joint ministerial decision ΚΥΑ 148097/2026, Government Gazette ΦΕΚ Β΄ 3300/11-06-2026) | Rural; helpline 1540; retail shops selling identification tags are also users of the platform | Not found (farm and vet counts unverified) | Watch (4/10) | Big dated trigger, but readers connect directly to the state database; the gap is only vet job batching and exceptions |
| Olive growers (Olive-Grove Register, harvest declaration ΔΣΕ) | Harvest declaration per parcel code with kg delivered to the mill; **mandatory from 1 Oct 2026**; fines of €60 per 100 kg misdeclared, enforced from 2027 | Older growers; consultants (trustcc.gr) and farmer service centres (ΚΥΔ) file as a service | Every holder of 21 or more olive trees (count not found) | Rejected as software | Annual, done as a service by ΚΥΔ and consultants; low WTP |
| Olive mills (ελαιοτριβεία) | Receive the farmers' digital delivery notes; issue purchase invoices to myDATA; data feeds the growers' harvest declarations | No: crowded vertical software | Not found | Rejected | Pegasus/TESAE, Z-net ("Olive Register ready"), Alpha Data, Amforeus (Nanosoft), aidpc, Zeyxis |
| Small-scale fishers (catch log) | EU Control Regulation 2023/2842: simplified e-logbook for vessels under 12 m | Paper logbooks until now | 10,743 vessels (ΥΠΑΑΤ 2026) | Rejected | The state funds trackers **and a tablet per vessel** (€62.1M project): the substitute is free hardware plus software |
| Small tsipouro distillers (two-day small distillers, still owners) | Distillation licence and excise declaration via ICISnet; possession permit for the still; new fields under circular Ε.2102/2025 | Customs appointments, municipal notices | Not found | Rejected | Seasonal (one season a year), tiny tickets, done by customs brokers and municipal help desks |
| Beekeepers | Annual declaration of hives held (by 20 Oct; late filing triggers an on-site inspection); half-year production and trade declaration | Paper submission to the regional agriculture/vet directorate (ΔΑΟΚ) still allowed | Not found (unverified) | Rejected | Annual, free gov.gr form, associations help |
| Dairies / cheese makers | Milk-receipt and milk-balance declarations to ELGO-DIMITRA "ARTEMIS"; fines for late filing | Portal plus PDFs | Not found | Rejected | Existing niche software ("Εισκομίσεις γάλακτος", Anaptixi OE) and dairy ERPs; mainly an annual/quarterly cycle |
| Households employing domestic workers | Pay through the εργόσημο voucher (contributions raised to 25%); registration in ERGANI | Bought via bank or e-EFKA | Not found | Rejected | Low pain per household; families and caregiver agencies (e.g. Nannuka) handle it |
| Seasonal farm workers | Agricultural-worker εργόσημο; farm workers excluded from the Digital Work Card; new ministerial decision announced | Farmers' unions and accountants | Not found | Rejected | No dated trigger confirmed; accountants do it |
| Scrap metal dealers | No Greek police transaction register found (only Electronic Waste Register (ΗΜΑ) registration) | n/a | Not found | Rejected (no evidence) | No recordkeeping mandate found in 2 searches |
| Pawnbrokers / gold buyers | Identity record per transaction (practice); no new electronic duty found | Viber photos, photocopied ID | Not found | Rejected (no evidence) | No 2024–2026 trigger found |
| Driving schools | gov.gr training slip; online booking of exam slots with the transport directorate (2026) | Manual for schools on the scheduling system | Not found | Rejected | State portal plus Anolla and Odoo; low duplicate entry |

---

## 2. Strongest opportunities

### Opportunity: "Boat-to-table" first-buyer compliance for fish tavernas and fishmongers

**Industry:**
Small-scale fisheries supply chain: island and coastal fish tavernas, fishmongers and small fish traders who buy directly from fishing boats.

**Buyer:**
The owner of a fish taverna or fishmonger registered (or legally required to be registered) as a "first buyer" in ΟΣΠΑ, usually also the person who places the order with local fishers by phone.

**Trigger / Why now:**
- The EU fisheries Control Regulation 2023/2842 is phasing in full digital catch traceability.
- Greece's ΟΣΠΑ is being expanded and upgraded (Information Society S.A. project; information meetings for "fishers and first buyers" held by municipalities).
- The ministry is putting trackers and tablets on 10,743 small coastal vessels (2026), so the fishers' side of each landing is going digital. Buyer-side declarations will then be cross-checkable against catch data, which makes missing or late buyer filings visible.
- myDATA 2.0.2 (10 Sep 2026) and the delivery-note phases tighten the invoice side.

**Current workflow:**
1. The fisher lands and the taverna owner takes, say, 12 kg of mixed fish (cash or tab).
2. Within 48 h (turnover below €200k) or 24 h (above), the owner logs into the ΟΣΠΑ web app and files a receipt declaration with vessel, species and kg, then later a sales declaration.
3. Because most small fishers are under the special farmers' VAT regime, the **buyer** issues the purchase invoice and sends it to myDATA through their invoicing software or accountant.
4. Species names must match the official commercial-name list (337 names updated); the menu and labels must show the legally required origin information.
5. Everything is reconciled by the accountant at month end, often from handwritten notes.

**Pain:**
- Mandatory per purchase with a 24/48 h deadline.
- Two unconnected receiving systems: ΟΣΠΑ (agriculture ministry) and myDATA (AADE).
- Species-name mapping, and mixed catches from several boats per day in summer.
- Fines for undeclared first sales exist under the fisheries code, but specific amounts were not confirmed in snippets (unverified).

**Existing solutions:**
- The ΟΣΠΑ web application (free; manual entry).
- Generic invoicing and ERP software for the myDATA purchase invoice (Epsilon, SoftOne, Prosvasis, and others).
- Accountants.
- The ΟΠΣΔΙ fish-auction software, which serves the large fish markets (ιχθυόσκαλες), not tavernas.
- Fisher-cooperative traceability schemes ("Fish with a Story" type).
- No product found that files ΟΣΠΑ declarations for buyers.

**Offline evidence:**
- Regional fisheries departments still issue the rules as scanned PDF notices (pin.gov.gr 2024; Arta chamber).
- The search found no vendor pages, forums or reviews for "ΟΣΠΑ software".
- Buyers are seasonal island businesses ordering by phone.

**Offline channel:**
- Regional fisheries directorates' info days (e.g. Monemvasia, Arta chamber sessions).
- Local fishers' associations and cooperatives, since a fisher can push "his" tavernas onto the tool.
- Chambers of commerce and accountants in island towns.
- Walk-ins along tourist harbour fronts in May–June.

**Market count:**
- First-buyer register size: not found (unverified).
- Supply side: 10,743 small-scale coastal vessels (ΥΠΑΑΤ, Aug 2026).
- Estimate: low thousands of tavernas and fishmongers buy direct from boats, but this is unverified.

**The gap:**
No tool turns a single "I took X kg from boat Y" entry into the ΟΣΠΑ receipt declaration, the myDATA purchase invoice for the special-regime fisher, and a species-correct label or menu line, with a 48 h reminder.

**Possible product:**
A phone-first purchase log. The owner snaps or enters the catch per boat; the product maps species to official names and produces three outputs:
1. a ready-to-file ΟΣΠΑ declaration (assisted entry if there is no API);
2. the self-billed purchase invoice through a myDATA provider API;
3. a monthly reconciliation pack for the accountant.

**MVP:**
- A PWA with a boat list, a species picklist using the official names, and a 48 h deadline tracker.
- Output: a pre-filled ΟΣΠΑ entry sheet plus a myDATA purchase invoice through one invoicing-provider API.
- Pilot with 5 tavernas on one island.

**Pricing hypothesis:**
€15–25/month, seasonal (April–October), or bundled through the accountant at €5/client/month. Most buyers are likely to pay only for a done-for-you service. A realistic model is software sold to accountants who handle many island tavernas.

**How to find first customers:**
- Fishers' cooperatives and associations.
- Regional fisheries directorates' info sessions.
- Island accountants.
- Harbour-front walk-ins.

**Risks:**
- ΟΣΠΑ may have no API (automation by browser would be fragile).
- Enforcement on tavernas may be light.
- The upgraded ΟΣΠΑ might add a buyer mobile app.
- Very seasonal revenue.
- **A non-local founder would struggle:** it needs Greek and in-person presence on the islands.

**Kill condition:**
Kill it if any of these turns out true:
- the upgraded ΟΣΠΑ ships a buyer app that also issues the myDATA invoice;
- fewer than about 1,000 first buyers are registered;
- interviews show tavernas skip ΟΣΠΑ declarations without consequence.

**Score:** 5/10

**Sources:**
- https://pin.gov.gr/wp-content/uploads/2024/08/2024-08-09_ΠΡΩΤΗ-ΠΩΛΗΣΗ.pdf
- https://arcadianet.gr/2024/08/05/ti-ischyei-gia-tin-proti-polisi-alieftikon-proionton/
- https://www.agronews.gr/thesmika/forologika/176844/diadikasies-eggrafis-prothesmies-upovolis-gia-epiheiriseis-polisis-alieumaton/
- https://monemvasia.gov.gr/ (info meeting on ΟΣΠΑ expansion for fishers and first buyers)
- https://www.ktpae.gr/erga/epektasi-anavathmisi-tou-ospa-olokliromeno-systima-parakolouthisis-kai-katagrafis-ton-alieftikon-drastiriotiton/
- https://www.ilialive.gr/gaia365/protogenis-tomeas/434932/ypaat-neo-systima-parakoloythisi-gia-10-743-skafi-mikris-paraktias-alieias
- https://selfservice.gr/elliniki-alieia-mitroo-agoraston-kai-337-epikairopoiimenes-eborikes-onomasies-ichthyiron/
- https://www.agronews.gr/thesmika/forologika/215370/pote-o-agrotis-kovei-timologio-pote-auto-ekdidetai-apo-ton-agorasti-kai-pou-dieukolunei-to-mydata/
- https://www.economix.gr/2026/09/09/mydata-2-0-2-nea-psifiaka-ergaleia-gia-parastatika-paralaves-metafores-kai-paradoseis-ti-allazei-apo-10-septemvriou/

---

### Opportunity: Market-day delivery-note kit for street-market sellers (λαϊκές αγορές)

**Industry:**
Street (farmers') markets: licensed producer-sellers and professional sellers.

**Buyer:**
The licensed street-market seller (owner-operator, often older); in practice often their accountant.

**Trigger / Why now:**
- AADE circular Ε.2038/2026: for every trip of goods to a street market a Consolidated Delivery Note is issued. It may be handwritten **until 11 Oct 2026** and must be **digital from 12 Oct 2026**.
- Ministerial decision 66390 (Aug 2026) also adds new mandatory stall signage showing licence and ΟΣΠΑΑ numbers.

**Current workflow:**
1. The seller loads the van at the farm, or buys at the central wholesale market.
2. The seller writes a paper consolidated delivery note listing goods and the markets/dates.
3. After the market, unsold goods return home or go to the next market, with no record.
4. Sales are rung up on a cash register or POS; the accountant reconciles monthly.

From 12 Oct the note must be issued in myDATAapp or ERP software before the van moves, with offline handling and returns of unsold goods.

**Pain:**
- Per market day (2–6 times a week).
- The sector openly rejects the measure ("Όχι στο ηλεκτρονικό δελτίο αποστολής", agrotypos).
- Low digital literacy; rural connectivity.
- Unsold-goods returns and multi-market rounds are where errors happen.

**Existing solutions:**
- AADE myDATAapp (free, with an offline indicator).
- For professional sellers, the supplier's or wholesaler's digital purchase document, which can list the market dates and replace the note.
- Invoicing apps and ERPs (Epsilon, Prosvasis, SoftOne, Elorus and others).
- Accountants.

**Offline evidence:**
- Notes were handwritten by law until 11 Oct 2026.
- Licences are managed through municipalities and regions and the ΟΣΠΑΑ registry.
- The federations communicate through press statements, not online communities.

**Offline channel:**
- Market-seller federations and associations (Attica, Thessaly).
- Regional and municipal market committees.
- Accountants serving farmers.
- Physical presence at markets: the buyers are standing at stalls every week.

**Market count:**
All licensed sellers are recorded in the ΟΣΠΑΑ "Open Market" system. The total was not found in snippets (unverified; estimate in the tens of thousands).

**The gap:**
myDATAapp issues one document but does not remember a seller's weekly market round, standard loads or unsold carry-overs. Nothing reconciles notes against POS sales for the accountant.

**Possible product:**
A "my weekly markets" template app: one tap issues the consolidated note for today's market from a saved load. It logs unsold returns and sends the week's documents to the accountant.

**MVP:**
- Saved loads and market calendar.
- Issuing through a licensed myDATA provider API.
- A weekly PDF/CSV for the accountant.

**Pricing hypothesis:**
€5–10/month per seller. More realistically, €2–4 per seller per month paid by accountants or the association, or included in a POS bundle. Willingness to pay for software alone is low; this probably sells only as part of an accountant's service.

**How to find first customers:**
- Market federations.
- Accountants in agricultural towns.
- In-person demos at markets.

**Risks:**
- The free myDATAapp is good enough.
- Deadlines get postponed again (Phase B has already been postponed several times).
- Exemptions widen.
- POS vendors add the feature.
- Needs a Greek-speaking local.

**Kill condition:**
Kill it if any of these turns out true:
- the 12 Oct 2026 date slips again;
- myDATAapp adds saved templates for repeat trips;
- 10 seller interviews show they will just use myDATAapp or the wholesaler's document.

**Score:** 4/10

**Sources:**
- https://www.taxheaven.gr/circulars/54628/e-2038-2026
- https://www.taxheaven.gr/news/74261/agrotes-pshfiako-deltio-apostolhs-kai-diabibash-mydata-nees-dieykriniseis-aade
- https://www.reporter.gr/eidhseis/oikonomia/681891-aade-10-apantiseis-gia-ta-psifiaka-deltia-apostolis-ti-allazei-gia-agrotes-elaioparagogoys-laikes-agores
- https://www.agrotypos.gr/ochi-sto-ilektroniko-deltio-apostolis-lene-oi-ekprosopoi-tou-kladou-laikon-agoron
- https://www.larissapress.gr/2026/08/19/ypourgiki-apofasi-ti-allazei-gia-tous-polites-stis-laikes-agores/
- https://php.gov.gr/wp-content/uploads/2024/03/ανακοινωση-για-την-καταγραφή-των-αδειούχων-πωλητών-υπαίθριου-εμπορίου-στο-ο.π.σ.α.α_.pdf

---

### Opportunity: Funeral-case file for Greek funeral homes (e-EFKA claim + MARK + case paperwork)

**Industry:**
Death care (γραφεία τελετών).

**Buyer:**
The owner of a small family funeral home.

**Trigger / Why now:**
- e-EFKA moved the funeral-expense e-service to its new integrated system (ΟΠΣ), live from **6 Oct 2026** after downtime from 28 Sep to 5 Oct.
- Every service receipt must now carry the AADE **MARK** number, and funeral-home data is cross-checked against the business registry (ΓΕΜΗ).
- The Digital Work Card is being extended to funeral homes in 2026: from 1 Apr per one source, 1 Sep per the association.

**Current workflow:**
1. The family hires the funeral home.
2. The funeral home issues the service receipt in its invoicing software, which returns a MARK.
3. The funeral home logs into the e-EFKA portal and keys in the deceased's details, the beneficiary, the receipt and its MARK, then uploads documents.
4. It waits for payment (IKA-ETAM pays €883.92; former OAEE €1,200; former OGA €800, per a funeral-home guide).
5. Separately, it books the cemetery or crematorium, church and municipality, and handles staff clock-ins for the Digital Work Card.

**Pain:**
- Per case, and directly tied to cash collection.
- The new mandatory MARK linkage and the new system mean rejections during the transition.
- Payment amounts differ by former fund.

Evidence of complaints was **not** found in searches.

**Existing solutions:**
- The e-EFKA portal (free).
- Generic invoicing and ERP for the receipt and MARK.
- Accountants.
- No Greek funeral-home software found. Capterra lists only foreign products (Passare and others), which don't cover e-EFKA.

**Offline evidence:**
- Small family firms; the association (hufes.gr) relays notices.
- No Greek vertical software listings found.

**Offline channel:**
- Ένωση Λειτουργών Γραφείων Κηδειών και Ταριχευτών Ελλάδος (hufes.gr).
- Directories (sillipitiria.gr: 643 listed; vrisko.gr) for phone outreach.
- Coffin and casket suppliers, who visit every funeral home.

**Market count:**
643 funeral homes listed on sillipitiria.gr (directory; the true number is likely higher, unverified). About 130,000 deaths a year in Greece (estimate, not from snippets).

**The gap:**
Nothing joins the case: receipt and MARK, then the e-EFKA claim, then tracking payment status by fund, plus municipal and cemetery paperwork. Funeral homes re-key the same deceased and family data 3–4 times.

**Possible product:**
A case file per funeral that stores the family and deceased data once. It issues the receipt through a myDATA provider, pre-fills the e-EFKA claim (assisted entry), and tracks claim status and the amount expected by fund.

**MVP:**
- Case form, receipt through an invoicing API, a printable e-EFKA claim checklist, and a "money owed by EFKA" dashboard.

**Pricing hypothesis:**
€30–60/month per funeral home. They would likely pay for software only if it visibly speeds up EFKA cash collection.

**How to find first customers:**
- The association.
- Directory phone outreach.
- Coffin suppliers.

**Risks:**
- The e-EFKA portal is already simple, and payments may be fast.
- The market is small.
- No API, so assisted entry only.
- Needs a Greek-speaking local.

**Kill condition:**
Kill it if fewer than about 1,000 funeral homes are confirmed, or if interviews show EFKA claims take under 10 minutes and pay quickly.

**Score:** 4/10

**Sources:**
- https://www.taxheaven.gr/news/74703/e-efka-allagh-ston-tropo-ypobolhs-parastatikwn-apo-ta-grafeia-teletwn
- https://taxrevenue.gr/efka-grafeia-teleton-mark-apy-exoda-kideias/
- https://www.capital.gr/epikairotita/4019586/neo-ops-e-efka-anabathmizetai-i-ilektroniki-upiresia-exodon-kideias/
- https://www.hufes.gr/ (Digital Work Card notice for funeral homes)
- https://sillipitiria.gr/
- https://www.grafeioteletonfoteinopoulou.gr/asfalistika-tameia/eksoda-kideias-oga/

---

### Opportunity: Bolus-rollout job manager for certified vets (sheep/goat electronic ID, 2027 universal)

**Industry:**
Sheep and goat farming; certified private vets.

**Buyer:**
A private vet certified to fit and register boluses, or a vet practice serving many flocks.

**Trigger / Why now:**
- Joint ministerial decision ΚΥΑ 148097/2026 (ΦΕΚ Β΄ 3300/11-06-2026): an electronic stomach bolus matched to the ear tag, registered in the new Digital Traceability Database within 2 days.
- This is a condition for CAP subsidies for farms above 900 head in 2026, and for **all** sheep and goat farms from 2027.
- The bolus costs €10 per animal.

**Current workflow:**
1. The farmer applies on the platform for boluses.
2. An approved distributor or retail shop supplies them.
3. The vet visits, fits the boluses, and scans each one; the reader pushes data to the database.
4. Mismatches (lost ear tags, dead animals, wrong code pairs) are handled by hand.
5. The farmer's subsidy eligibility depends on the match.

**Pain:**
- Animals are counted in the hundreds to thousands per farm.
- There is a 2-day registration window, and subsidies are at stake.
- 2027 brings a nationwide rush.

Evidence of pain from the field was not yet found; the measure is in its pilot.

**Existing solutions:**
- The state platform and readers that connect directly to the database.
- Approved bolus distributors.
- Generic farm-management apps (none found specific to Greece).

**Offline evidence:**
- Rural; information comes by phone helpline (1540) and agricultural press.
- Retail shops selling identification tags are users of the platform.

**Offline channel:**
- Approved bolus distributors and the retail shops selling identification tags (the platform lists them).
- Regional vet associations (geotee.gr / Panhellenic Veterinary Association).

**Market count:**
Farm and certified-vet counts were not found (unverified).

**The gap:**
Only the job-batching and exception side: scheduling farm visits before deadlines, reconciling unmatched or lost tags, and producing the evidence pack for the subsidy check. Data capture itself is solved by the state readers.

**Possible product:**
A vet-side job board: farms, deadlines, animals done versus pending, and an exception list exported from reader files.

**MVP:**
- Import of reader CSV files, a reconciliation against the farm register export, and a deadline list.

**Pricing hypothesis:**
€20–40/month per vet during the rollout. This is likely a one-off rush, so the revenue is not recurring.

**How to find first customers:**
- Bolus distributors.
- Vet associations.

**Risks:**
- Mostly a one-time rollout workflow.
- The state platform adds a vet dashboard.
- No access to export files.
- Needs a local.

**Kill condition:**
Kill it if the platform already gives vets a job and exception list, or if readers' data can't be exported.

**Score:** 3/10 (watch only)

**Sources:**
- https://tirnavospress.gr/ilektronikos-volos-sta-aigoprovata-t/
- https://www.newsit.gr/oikonomia/xristika/anoikse-i-platforma-gia-tous-volous-to-neo-metro-gia-na-min-ksexastei-kanena-zoo-stin-epomeni-katagrafi/4707279/
- https://cibum.gr/nea/psifiaki-platforma-gia-ilektronikoys-voloys-se-aigoprovata/
- https://www.agrotypos.gr/ektrofes/aigoprovatotrofia/ichnilatisi-aigoprovaton-me-ilektronikous-volous-pilotiki-efarmogi-to-2026-katholiki-efarmogi-apo-to-2027
- https://www.aade.gr/sites/default/files/2026-06/dt_11.06.2026..pdf

---

## 3. Rejected

- **Olive-mill compliance software.** The workflow is real: digital delivery notes from grove to mill, purchase invoices to myDATA, and data feeding the growers' harvest declarations. But at least six Greek vendors already sell "myDATA / Olive Register-ready" mill software: Pegasus (TESAE / Z-net / Dual Logicom), Alpha Data, Amforeus (Nanosoft), aidpc, Zeyxis. Sources: https://www.tesae.gr/Elaiotriveio/Pegasus-ERP-Elaiotriveio, https://z-net.gr/elaiotriveio-erp-mydata-ready-einai-i-pleon-olokliromeni-lysi-tis-agoras/, https://nanosoft.gr/
- **Olive growers' harvest declaration (ΔΣΕ, mandatory from 1 Oct 2026).** The trigger and fines are strong (€60 per 100 kg misdeclared, enforced from 2027), but the declaration is annual. It is free on elaiokomiko.minagric.gr and done as a service by ΚΥΔ centres and consultants (trustcc.gr), and growers' WTP is low. Sources: https://www.taxheaven.gr/news/70483/dhlwsh-sygkomidhs-elaiokarpoy-kai-elaiokomiko-mhtrwo, https://www.aftodioikisi.gr/koinonia/prostima-eos-5-000-eyro-gia-toys-elaioparagogoys-ti-allazei-fetos/
- **Small-scale fishers' catch logging.** The state supplies trackers plus a tablet per vessel for 10,743 boats (€62.1M). https://www.voria.gr/article/ypaat-erhetai-psifiako-systima-gia-tin-parakoloythisi-tis-mikris-paraktias-alieias
- **Tsipouro two-day distillers and still owners.** Seasonal ICISnet excise declaration; handled by customs and municipal help desks. https://mitos.gov.gr (distillation-licence procedure), https://www.forin.gr/articles/article/88141/e-2102-2025
- **Beekeepers.** Annual hive declaration on gov.gr or on paper; low frequency. https://www.ypaithros.gr/dilosi-katechomenon-kypselon-2026-eos-20-oktovriou/
- **Dairies (ELGO "ARTEMIS" milk declarations).** Existing niche software and ERP coverage. https://anaptixioe.gr/
- **Household employers (εργόσημο).** Low pain; caregiver platforms and banks cover it. https://www.taxheaven.gr/news/65134/amoibh-kai-asfalish-me-ergoshmo
- **Seasonal farm labour.** Excluded from the Digital Work Card; no dated trigger confirmed.
- **Scrap metal, pawnbrokers and gold buyers.** No Greek police-register mandate or 2024–2026 trigger found.
- **Driving schools.** State scheduling portal plus Anolla and Odoo cover it.

## 4. Method notes

- **Worked:**
  - Greek queries naming the specific **document or system** (Συγκεντρωτικό Δελτίο Αποστολής, ΟΣΠΑ πρώτοι αγοραστές, Ε.2038/2026, ΚΥΑ βώλοι, ΑΠΥ ΜΑΡΚ έξοδα κηδείας). Taxheaven, agrotypos, ellinasagrotis and regional-government PDFs (pin.gov.gr) are the best sources.
  - Searching "πρόγραμμα <industry> myDATA" is a fast competitor check: it immediately exposed the crowded olive-mill niche.
- **Didn't work:**
  - Market counts. Greek registers (ΟΣΠΑΑ, ΟΣΠΑ, still licences, bolus vets) rarely publish totals in searchable form.
  - Police-register queries for scrap and gold, where the results drifted to US laws.
- **Structural finding:** Greek ministries increasingly ship their own free apps and hardware, which compresses the software gap. Look for the **seam between two state systems** (ΟΣΠΑ↔myDATA, e-EFKA↔AADE MARK), not for paper-to-digital.
