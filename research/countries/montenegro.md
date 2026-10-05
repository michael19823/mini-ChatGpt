# Montenegro: research report

This was a search-limited pass for a small market: 10 WebSearch calls, no WebFetch, no reads of primary-source portals. All findings come from search snippets, so treat them as preliminary. Today is 2026-10-04.

**Accessibility:** accessible. Montenegro is an EU candidate country, uses the euro, has no sanctions on software or IT services, and has normal payment rails. There is one practical barrier. Anything that issues receipts must connect to the Tax Administration's eFiskalizacija (real-time fiscalization, mandatory since 1 June 2021), so selling to accommodation and retail usually means bundling or integrating fiscalization.

**Market size:** small. The population is about 620k, and the business base is heavily tourism-driven. Most regulatory "why now" triggers come from EU-accession alignment: waste and EPR, e-invoicing, and the tourism register. Those systems are either still years away or are being built centrally by the state.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Private accommodation / short-term rental hosts | Registering guests within 24h (MUP / local tourist organization), calculating and remitting the tourist tax (about EUR 1/adult/night in 2026), fiscalized receipts | Weak lead (score 3) | Real, mandatory, per-guest work, fragmented across municipal TO apps. But cheap local tools already bundle it (Oblak, Rentay at about EUR 10), and the state is procuring a EUR 1.37M central tourism information system that may absorb it. |
| Invoicing / fiscalization (all B2C sellers) | eFiskalizacija real-time receipts (JIKR) | Too competitive | Mandatory since 2021. Every POS and invoicing vendor in the region supports it. |
| B2B / B2G e-invoicing | Planned structured e-invoicing on the existing fiscalization platform | Too early | Not yet in the Official Gazette. Reported target is "operational by end of 2028". Serbian SEF-experienced vendors would enter fast. |
| Waste producers / importers (EPR) | New Law on Waste Management (April 2024) introducing EPR for packaging and WEEE. State Waste Management Plan 2025–2029. | Unverified / too early | Couldn't confirm the reporting mechanics, the EPR operators, or any electronic register. Likely run by a few collective schemes rather than thousands of SMEs filing directly. |
| Exporters to the EU (packaging, PPWR) | EU PPWR applies from 12 Aug 2026, including to non-EU exporters | Reject for Montenegro | Montenegro's goods exports are tiny. The PPWR/EPR registration problem is better addressed from an EU-member market (Croatia, Germany). |

Not screened because of the search budget: food safety/HACCP (Uprava za bezbjednost hrane), veterinary, payroll, and construction.

## Opportunities

No opportunity meets the brief's standard. The single candidate below is documented for completeness and is not recommended for building.

### Opportunity: Booking/Airbnb to Montenegrin guest-registration and tourist-tax bridge for private hosts

**Industry:**  
Tourism: private accommodation (apartments, rooms, villas) on the coast (Budva, Bar, Tivat, Herceg Novi, Kotor, Ulcinj)

**Buyer:**  
Owner of registered private accommodation (often an individual with 1–10 units), or a small property-management agency running units for diaspora/foreign owners

**Trigger / Why now:**  
- Registration is strictly enforced and digital in 2026. Foreigners must be registered within 24h, and fines of about EUR 300 are reported.
- Several municipal tourist organizations launched their own registration apps: TO Bar "PrijavaBoravka", TO Tivat "Lotos Turist", and TO Herceg Novi (built with Primatech). That fragments the workflow by municipality.
- The Ministry of Tourism has launched procurement for a EUR 1.37M national tourism information system to centralize accommodation and guest records. It is reported as a 12-month, six-phase project, and the snippet seen gives no year for the bid deadline (unverified). Earlier, the Ministry of Finance announced a Croatian-style eVisitor system that links the Register of Foreign Stays and the Central Tourism Register.

**Current workflow:**  
1. Booking arrives via Booking.com/Airbnb/direct, and the host keeps a calendar or channel manager.
2. On arrival the host retypes each guest's passport data into the municipal TO app or web form (or goes to the tourist info bureau), and issues a registration confirmation.
3. The host calculates the tourist tax per guest-night and pays it to the municipal TO.
4. For paid stays the host issues a fiscalized receipt through eFiskalizacija-compliant software.
5. If the host has units in two municipalities, steps 2–3 run in two different apps.

**Pain:**  
Per-guest re-entry of passport data during peak season, a 24h deadline with fines, and different apps per municipality. Evidence is anecdotal (news/TO announcements). No complaint data was found.

**Existing solutions:**  
- Oblak (smjestaj.oblak.online): mobile app for e-registration of guests (RB90), fiscalization, card payments and e-reception.
- Rentay (rentay.me): fiscalization plus electronic guest check-in/check-out with MUP, reservations per apartment and automatic tourist-tax calculation. Snippet suggests about EUR 10.
- Free municipal TO apps (Bar, Tivat, Herceg Novi).
- The forthcoming national tourism information system (state, presumably free).
- Hotels use PMS vendors, which is out of scope.

**The gap:**  
Possibly only automated import from channel managers/OTAs plus passport OCR, routed to whichever municipal system applies. Unverified whether Oblak or Rentay already import from OTAs.

**Possible product:**  
A host connects Booking/Airbnb (via channel-manager iCal/API). Guests pre-fill passport data through a link, and the tool files the registration and computes the tourist tax per municipality.

**MVP:**  
Guest pre-check-in form plus passport OCR, which outputs a ready-to-file record for one municipality's system (Budva or Bar). It needs confirmation that the system accepts machine submission.

**Pricing hypothesis:**  
EUR 5–15/month per host, or about EUR 1 per registration in season. That is capped by incumbents charging about EUR 10.

**How to find first customers:**  
Municipal tourist-organization registers of private accommodation providers, local Facebook host groups, and property-management agencies in Budva and Tivat.

**Risks:**  
- The state's central system (and its own mobile app) could make the problem free.
- Local incumbents are cheap.
- No public API is known for MUP or TO submission.
- Demand is highly seasonal.
- The market is small (low thousands of hosts, estimate).

**Kill condition:**  
Any one of these would kill it:
- the national tourism information system ships a free host app with OTA import;
- Oblak or Rentay already import Booking/Airbnb reservations;
- no machine-submission route to the registration systems exists.

**Score:** 3/10

**Sources:**  
- https://barinfo.me/elektronska-prijava-boravka-preko-aplkacije-to-bar/
- https://tivat.travel/prijava-boravka-turista/
- https://hercegnovi.travel/me/desavanje/turisticka-organizacija-herceg-novi-pokrenuta-mobilna-aplikacija-za-prijavu-gostiju
- https://smjestaj.oblak.online/
- https://rentay.me/fiskalizacija-i-elektronska-prijava-odjava-gostiju/
- https://monte.business/montenegro-invests-in-digital-tourism-system-to-address-revenue-loss/
- https://biznis.rs/vesti/region/ministarstvo-finansija-crne-gore-najavilo-uvodjenje-e-visitor-sistema/
- https://biznis.rs/vesti/region/evidentiranje-crnogorskih-turista-uskoro-ce-se-obavljati-preko-mobilne-aplikacije/
- https://gov.me/en/article/application-of-foreign-nationals-who-use-the-services-of-the-accommodation-provider
- https://mdrealty.me/en/blog/registracija-turistic-nalog-montenegro
- https://www.kurir.rs/region/crna-gora/2362295/ako-krecete-na-more-treba-da-znate-paprene-kazne-za-turiste-bez-prijave-boravka

## Rejected after competitor research

- **Fiscalization / invoicing software for small businesses:** killed by the many existing eFiskalizacija-certified POS and invoicing vendors. In accommodation specifically, Oblak and Rentay bundle fiscalization with guest registration. Sources: https://e-invoices.online/sr-Latn-ME/blog/fiscalizacija-crna-gora, https://rentay.me/fiskalizacija-i-elektronska-prijava-odjava-gostiju/
- **Guest registration as a standalone product:** effectively killed by the free municipal TO apps (Bar, Tivat, Herceg Novi), cheap bundled tools (Oblak, Rentay), and the state's centralized tourism information system procurement. This is the downgraded lead above.

## Attractive problem, poor distribution

- **EPR / packaging and WEEE reporting under the 2024 Law on Waste Management:** probably real obligations for importers. But the buyer base is small, the reporting mechanics were unverified, and the work will likely be handled by a few collective EPR schemes or consultants. Sources: https://faolex.fao.org/docs/pdf/mne230606.pdf, https://www.ecoportal.me/crna-gora-dobila-novi-petogodisnji-plan-za-upravljanje-otpadom/

## Too competitive / too early

- **B2B/B2G e-invoicing:** planned, not legislated, with a reported 2028 target. Regional vendors from Serbia (SEF) and Croatia will cover it. Sources: https://www.vatcalc.com/montenegro/montenegro-prepares-b2b-e-invoicing/, https://bankar.me/clanci/poreska-uprava-uvodi-e-fakture-i-analizu-rizika/

## Bottom line

Montenegro shows no viable standalone indie opportunity at this evidence level. The market is small, and the main mandatory recurring workflows (fiscalization, guest registration) are already served cheaply or are being centralized by the state. If a guest-registration or tourist-tax compliance bridge is built for Croatia (eVisitor) or the wider Adriatic short-term-rental market, Montenegro could be an add-on module, once the national tourism information system's interfaces are known.
