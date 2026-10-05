# Czechia: indie software opportunity research

Researched 2026-10-04/05 with 17 web searches in Czech and English. WebFetch was not used. Anything I could not confirm from a search result is marked *unverified* or *estimate*.

**Accessibility:** Open EU market, with no sanctions or licensing barriers to selling SaaS. The practical barriers are Czech-language UX and Czech-language sales. Most state systems (ČSSZ ePortál, Finanční správa, ISPOP, Portál farmáře, ÚSKVBL, NÚKIB) take XML or web-service submissions from commercial software.

**Overall verdict:** Czechia has many strong 2025–2027 regulatory triggers: EET 2.0, JMHZ, NIS2, digital building permits, EUDR, veterinary antimicrobial reporting and eTurista. Most of them are already crowded, though. The state ships free tools (MOJE EET, the EPH app, the ÚSKVBL app), the large domestic ERP/payroll vendors move quickly (Pohoda, Money, Fakturoid), or small tools appeared within months (DokuCheck, kontrolapdf.cz). What remains are narrow integration-layer plays. None of them scores above 5/10.

---

## Industries screened

| Industry | Workflow examined | Verdict | One-line reason |
|---|---|---|---|
| Retail / services / hospitality (all B2C sellers) | EET 2.0 transaction reporting from 1 Jan 2027 | **Candidate (narrow)** | Mandatory per sale for a huge base. POS vendors and the free state app MOJE EET cover the mainstream; the gap is vertical/booking/invoicing systems without fiscal modules. |
| Forestry / timber | EUDR due-diligence statements for wood (applies 30 Dec 2026) | **Candidate (weak)** | Forest management is fragmented across owners and licensed forest managers, and geolocation per lot is new. Micro and small primary operators only need a one-time simplified declaration, and global EUDR SaaS is plentiful. |
| Mid-size firms in NIS2 sectors | Lower-regime cybersecurity obligations under Act 264/2025 and Decree 410/2025 | **Candidate (weak) / competitive** | 4,252 lower-regime entities are registered and must keep a prescribed measures overview. Consultants, Big4 firms and GRC tools are already active. |
| Payroll / accountants | JMHZ (single monthly employer report) to ČSSZ, live from April 2026 | Too competitive | Every Czech payroll package (Pohoda, Money, Fakturoid, Arrows etc.) implemented it, and the pain is a transition pain. |
| Architects / structural engineers | Portál stavebníka document submission (PDF/A-3, PAdES, qualified time stamps) | Rejected | DokuCheck and the free kontrolapdf.cz already validate packages, and the state portal is being rebuilt (full version expected 2028). |
| Agriculture (crop) | Plant protection product (POR) usage records in XML for ÚKZÚZ / EU Reg. 2023/564 | Rejected | Since 1 Apr 2025 only farms over 200 ha must submit electronically. There is a free EPH app on Portál farmáře, and farm-management software already exports the XML. |
| Veterinary (farm-animal practices) | Antimicrobial use (AMU) reporting to ÚSKVBL, extended to more species from 1 Jan 2026 | Rejected | Distributors already report on vets' behalf under contract, ÚSKVBL is launching its own app in mid-2026, and practice software is adding a module. |
| Accommodation | UbyPort foreigner reporting, municipal stay-fee records, future eTurista | Too competitive | Chekin, PMS vendors and channel managers already automate this, and eTurista dates are still unclear. |
| Waste producers / handlers | Continuous waste records, annual ISPOP report, SEPNO hazardous-waste transport | Too competitive | The workflow has been mature since 2021 under Act 541/2020, with established vendors (e.g. Inisoft) and SEPNO web forms. |
| Construction | Electronic construction diary (mandatory for above-threshold public contracts since 2021) | Too competitive | Not a new trigger, and multiple e-diary vendors exist (not individually verified). |

---

## Opportunities

### Opportunity: EET 2.0 bridge for vertical and booking software (fiscalisation as an API)

**Industry:**
B2C services sold in person: salons, physiotherapy, driving schools, sports facilities, tour operators, mobile tradespeople, farm shops.

**Buyer:**
Primary: Czech vertical-SaaS vendors with no fiscal module, such as reservation, membership, school, gym and invoicing systems. Secondary: small businesses whose operational system is one of those tools and who do not want a separate POS.

**Trigger / Why now:**
The EET 2.0 law was finally passed on 9 Sep 2026 when the Chamber overrode the Senate. It takes effect 1 Jan 2027, and certificates can be downloaded on MOJE daně from 1 Nov 2026. Unlike EET 1 (2016–2020), it covers **all in-person payments**: cash, card, QR, vouchers and crypto. Technical documentation is published on eet.gov.cz. Vendors have under three months to implement it.

**Current workflow:**
1. A service is booked or invoiced in a vertical system (e.g. a reservation or club-membership app) and paid by card or QR on the spot.
2. Without a fiscal module, from 2027 the business must register each sale a second time in a POS or the free MOJE EET web app. That means duplicate entry for every sale.
3. The business keeps the FIK/receipt code, handles offline mode, and reconciles the two systems at month end.

**Pain:**
The obligation applies to every in-person sale and is mandatory, with Finanční správa penalties. Duplicate entry happens per transaction. MOJE EET explicitly supports no receipt printers, barcode readers, payment terminals or advanced reporting, and allows at most two evidence units, so it is a stopgap for the smallest sellers.

**Existing solutions:**
- Finanční správa's free **MOJE EET** web app, live 1 Dec 2026.
- POS vendors (e.g. Dotykačka, Storyous; names known, pricing *unverified* for 2027) and accounting/invoicing tools (Pohoda, Fakturoid; Fakturoid has an EET developer API page).
- Open-source EET 1 client libraries on Packagist (cmelda/eet, fritak/eet), which need updating for the 2.0 protocol.
- A 5,000 CZK tax credit for buying a cash-register device, which pushes merchants toward POS hardware.

**The gap:**
Small vertical-SaaS vendors must implement the new XML/web-service protocol, certificate handling, offline queueing, retries and receipt-code rendering within weeks. A hosted "fiscalisation API" that handles certificates per merchant, signing, queueing, status webhooks and audit logs lets each vendor add EET 2.0 with one REST call.

**Possible product:**
Multi-tenant EET 2.0 gateway: merchants upload or authorise their certificate, the vendor calls `POST /sale`, and the gateway signs, submits, retries offline items within the legal window and returns the receipt code. A dashboard gives merchants a daily/monthly reconciliation export.

**MVP:**
REST API plus certificate vault, an offline queue with retry, a webhook and a PDF/HTML receipt snippet, with one pilot integration (one reservation SaaS).

**Pricing hypothesis:**
For vendors, 150–300 CZK per merchant per month or about 0.05 CZK per transaction (*estimate*). Direct small merchants via a plugin: 149–249 CZK per month.

**How to find first customers:**
- Czech SaaS vendor lists (Capterra CZ categories, the Czech startup ecosystem, ČSSI/ICT Unie members; *unverified* as directories).
- Developers reading the eet.gov.cz technical documentation.
- Packagist dependents of the old EET libraries, whose maintainers already had EET 1 integrations.

**Risks:**
- Large vendors build their own integrations, and payment-terminal providers may bundle fiscalisation.
- The protocol could get a further delay or simplified regime. EET 1 was abolished in 2023, so political risk is real.
- Liability for failed submissions.
- Per-merchant prices are low.

**Kill condition:**
Kill the idea if interviews with 15 vertical-SaaS vendors find that most have already built it or will bundle it via their payment-terminal partner, or if MF announces a simplified regime exempting card/QR payments under some threshold.

**Score:** 5/10

**Sources:**
- https://www.epravo.cz/top/aktualne/eet-20-je-na-svete-od-ledna-2027-budou-podnikatele-evidovat-i-platby-kartou-a-qr-kodem-121639.html
- https://mf.gov.cz/cs/ministerstvo/media/tiskove-zpravy/2026/snemovna-prehlasovala-senat-a-stvrdila-zavedeni-ee-65151
- https://www.dauc.cz/aktuality/2087/moje-eet-pro-drobne-podnikatele
- https://financnisprava.gov.cz/cs/financni-sprava/novinky/novinky-2026/nejcastejsi-otazky-k-eet-2-0
- https://www.podnikatel.cz/clanky/financni-sprava-zverejnila-technicke-informace-a-dokumentaci-k-eet-2-0/
- https://www.fakturoid.cz/podpora/automatizace/eet-pro-vyvojare
- https://packagist.org/packages/cmelda/eet

---

### Opportunity: EUDR timber DDS desk for licensed forest managers (OLH) and mid-size forest owners

**Industry:**
Forestry and roundwood trade.

**Buyer:**
- Licensed forest managers (*odborný lesní hospodář*, OLH), who manage forests for many owners.
- Mid-size private, municipal and church forest owners that are not "micro/small".
- Timber purchasing companies acting as first placers on the market.

**Trigger / Why now:**
EUDR (EU 2023/1115, as revised) applies to the wood sector from **30 Dec 2026**. Every placing on the market needs a due-diligence statement in TRACES with geolocation of the plots, and returns a reference number. ÚHÚL is the Czech competent authority. Micro and small primary operators from low-risk countries need only a one-time simplified declaration.

**Current workflow:**
1. Plot polygons exist in forest management plans (LHP/LHO) and cadastre data held by ÚHÚL, the owner or the OLH.
2. For each harvest or sale lot, someone must extract the polygons into GeoJSON, fill the TRACES DDS, and attach the reference number to the delivery note or contract.
3. That reference number must then pass to the buyer, such as a sawmill or exporter.

**Pain:**
The obligation is new and recurring, per lot or per period. Small forestry actors have no GIS skills. Czech timber volumes are high after the bark-beetle years (*unverified* that volumes remain elevated in 2026).

**Existing solutions:**
- TRACES web form (free), plus the EU API.
- Global EUDR SaaS (many vendors, mostly aimed at importers of cocoa, coffee, soy and palm).
- Large Czech operators such as Lesy ČR are likely to build their own (*estimate*).
- Czech forestry/GIS software vendors (not verified).

**The gap:**
Nothing I found converts Czech LHP/LHO forest-unit identifiers into TRACES-ready geolocation and batches DDS filings per lot for an OLH managing dozens of owners.

**Possible product:**
"Lot to DDS": the user selects forest units from an imported LHP/LHO layer, enters the lot (volume, species, HS code), and the tool generates the GeoJSON, submits via the TRACES API, stores the reference number and prints it on the delivery note.

**MVP:**
LHP/LHO polygon import, lot form, a TRACES API submission client, and a reference-number register with CSV export for buyers.

**Pricing hypothesis:**
OLH: 500–1,500 CZK per month. Mid-size owner: 300 CZK per month or 50–100 CZK per DDS (*estimate*).

**How to find first customers:**
The public register of OLH and forest districts maintained by regional authorities (*unverified* format), the Sdružení vlastníků obecních a soukromých lesů (SVOL) membership, and the Czech forestry chamber and associations.

**Risks:**
- The micro/small simplified regime removes most of the volume.
- A further EUDR delay or revision (it has already been delayed twice).
- TRACES API access for third parties.
- ÚHÚL or Lesy ČR may offer a free tool.

**Kill condition:**
Kill the idea if ÚHÚL publishes a free LHP-to-TRACES export, or if fewer than about 1,000 Czech actors need non-simplified DDS.

**Score:** 4/10

**Sources:**
- https://celnisprava.gov.cz/cz/dalsi-kompetence/ochrana-spolecnosti-a-zivotniho-prostredi/aktuality/Documents/DEFORESTACE%20(EUDR).pdf
- https://cm.twobirds.com/en/insights/2026/germany/entwaldungsfreie-lieferketten-frühestens-ab-2026-–-längerer-weg-mit-weniger-steinen
- https://www.compliancegate.com/eudr-due-diligence-statement/

---

### Opportunity: NIS2 lower-regime "security measures overview" kit for mid-size firms

**Industry:**
Mid-size firms in NIS2 sectors: manufacturing, food, waste, transport, small telecoms and ISPs, healthcare providers.

**Buyer:**
IT manager or managing director of a 50–250-employee company in the lower-obligations regime. Small IT service providers (MSPs) can act as resellers.

**Trigger / Why now:**
Act 264/2025 Sb. has been effective since 1 Nov 2025. Self-registration was due 31 Dec 2025. NÚKIB records 5,768 entities: 1,516 in the higher regime and **4,252 in the lower regime**. Decree 410/2025 Sb. prescribes lower-regime security measures, with a model "overview of security measures" (*přehled bezpečnostních opatření*) the entity must keep. NÚKIB published an Oct 2026 note on its control and sanctions practice, so audits are starting.

**Current workflow:**
1. An external consultant or the IT person fills the NÚKIB manual and model overview in Word/Excel.
2. Evidence (training, backups, MFA, incident contacts, supplier list) is kept in scattered files.
3. Incidents are reported via the NÚKIB portal.

**Pain:**
Media coverage shows small firms, for example small telecoms, describe it as heavy bureaucracy. Fines reach up to 230 million CZK, but practical enforcement in the lower regime is unclear.

**Existing solutions:**
- NÚKIB's free manual and model templates.
- Big4/consultancies (EY, PwC, Forvis Mazars) and many local consultants.
- International GRC tools and NIS2 tool directories (nisd2.eu buyer's guide).
- MSPs bundling compliance.

**The gap:**
A cheap, Czech-specific tool that maps exactly to the Decree 410/2025 measures list, tracks evidence per measure with reminders, and produces the overview in NÚKIB's expected structure. This gap is *unverified*: Czech-specific SaaS may already exist but was not found in 2 searches.

**Possible product:**
A checklist-driven web app with one row per Decree 410/2025 measure, evidence upload and owner, recurring task reminders, an incident-report draft, and a one-click export of the overview. The product is white-labelled for MSPs.

**MVP:**
Measures register plus evidence locker plus PDF export, with an MSP multi-client view.

**Pricing hypothesis:**
1,000–2,500 CZK per month per entity. An MSP licence is about 5,000 CZK per month for 10 clients (*estimate*).

**How to find first customers:**
The NÚKIB register of regulated services is not public (*unverified*), so outreach must go by sector: chamber-of-commerce lists, ČTÚ telecom-operator registry for small ISPs, and MSP partner channels.

**Risks:**
- Crowded with consultants.
- It drifts toward the generic "compliance checklist" trap.
- Buyers may be satisfied with free NÚKIB templates.

**Kill condition:**
Kill the idea if 2–3 Czech NIS2 SaaS products below 1,500 CZK per month are found, or if MSPs say clients won't pay beyond the templates.

**Score:** 4/10

**Sources:**
- https://www.lupa.cz/clanky/regulace-podle-nis2-zakon-o-kyberbezpecnosti-zacal-platit-registrovat-se-musite-sami-pozor-na-pokuty/
- https://nukib.gov.cz/download/uredni_deska/odpovedi_106/2026_10_Informace-ke-kontrolni-a-sankcni-praxi-NUKIB.pdf
- https://www.businessinfo.cz/clanky/smernice-nis2-nukib-vydal-novy-manual-pro-subjekty-v-rezimu-nizsich-povinnosti/
- https://www.lupa.cz/clanky/znici-kyberbezpecnostni-byrokracie-male-telekomunikacni-firmy/
- https://nisd2.eu/cs/nis2-tool

---

## Rejected after competitor research

- **Portál stavebníka submission validator for architects and engineers.** The pain is severe: projects must be uploaded only through the broken portal, ČKAIT has warned about the losses, and permits take over a year. However, **DokuCheck** (Microsoft Store agent with a PRO licence) and the free **kontrolapdf.cz** already check PDF/A-3, PAdES signatures, authorisation stamps and time stamps. The state is also replacing the portals, with a full version targeted for 2028.
  Sources: https://www.dokucheck.cz/ , https://kontrolapdf.cz/ , https://ct24.ceskatelevize.cz/clanek/domaci/projektanti-museji-dal-vkladat-zadosti-pres-problemovy-portal-stavebnika-354770 , https://zpravy.ckait.cz/vydani/2026-03/digitalizace-stavebniho-rizeni-prinesla-necekana-rizika-pri-kontrole-dokumentace/
- **Plant protection product (POR) e-records for farmers.** The government cut the electronic submission duty to farms over 200 ha from 1 Apr 2025. The free **EPH app on Portál farmáře** and commercial farm software export the required XML, and EU Reg. 2023/564 machine-readable records can be deferred to 1 Jan 2027.
  Sources: https://ukzuz.gov.cz/public/portal/ukzuz/pripravky-na-or/kontrola-por/vr , https://mze.gov.cz/public/portal/mze/-q463483---5_gxbgmz/vedeni-zaznamu-o-pouzivani-por-a-pp-od
- **Veterinary antimicrobial-use reporting.** Species coverage expands from 1 Jan 2026, but **drug distributors already report on vets' behalf** under contract. ÚSKVBL is launching a free app in mid-2026, and practice-software vendors are getting technical specs.
  Source: https://www.uskvbl.gov.cz/attachments/article/289/Informace%20pro%20veterin%C3%A1%C5%99e%20od%201.1.%202026.pdf
- **JMHZ (single monthly employer report) helper.** Big trigger (April 2026, retroactive Jan–Mar reports due 30 Jun 2026), but **Pohoda, Money, Fakturoid, Arrows and every payroll package** implemented it, and the remaining errors are a transition issue.
  Sources: https://portal.pohoda.cz/rychle-zpravy/eportal-cssz-spousti-jednotne-mesicni-hlaseni-od-1-dubna-2026/ , https://www.fakturoid.cz/almanach/hr/jednotne-mesicni-hlaseni , https://arws.cz/novinky-v-arrows/jednotne-mesicni-hlaseni-v-praxi

## Attractive problem, poor distribution

- **eTurista / municipal stay-fee reporting for small hosts.** Fragmented municipal ordinances could create defensibility, but the eTurista timeline is still undefined (2026–2027 phases, no dates). The existing tool **Chekin**, plus PMS vendors, already automate UbyPort and stay-fee records. Micro hosts are hard to reach except via Airbnb/Booking channels that incumbents already occupy.
  Sources: https://www.podnikatel.cz/clanky/ubytovavate-v-hotelu-nebo-pres-airbnb-budete-se-muset-registrovat-do-eturisty/ , https://chekin.com/cs/blog/ubyport-a-e-turista-jak-splnit-povinnosti-evidence-hostu/
- **EUDR for micro/small forest owners.** There are many owners, but each needs only a one-time simplified declaration, and there is no channel except associations.

## Too competitive

- **Waste records / ISPOP / SEPNO:** a mature workflow with established vendors (e.g. Inisoft) and state web forms. Sources: https://www.businessinfo.cz/clanky/poradna-evidenci-a-ohlasovani-odpadu-system-ispop/ , https://www.businessinfo.cz/formulare/ohlasovani-prepravy-nebezpecnych-odpadu/
- **Electronic construction diary:** mandatory for above-threshold public contracts since 2021, with multiple vendors. Source: https://www.epravo.cz/top/clanky/stavebni-denik-v-elektronicke-forme-vykladove-nejasnosti-114398.html
- **EET 2.0 for mainstream retail and hospitality:** POS vendors plus the free MOJE EET app. Only the vertical-software bridge above remains.
- **JMHZ payroll:** see rejected above.
