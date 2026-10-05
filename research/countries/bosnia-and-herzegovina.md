# Bosnia and Herzegovina: opportunity research

Researched 2026-10-05. Treated as a **small market**, with 10 WebSearch calls (Bosnian/Serbian/Croatian and English). WebFetch was not used. Everything comes from search-result summaries, so the figures should be checked against the primary sources before any interviews.

**Accessibility:** BiH has no country-wide sanctions on software or IT services. EU-candidate status (2024) means EU rules increasingly shape local compliance. Payment rails are normal (KM is pegged to EUR). Two things complicate the market. Regulation is split between the State, the Federation of BiH (FBiH), Republika Srpska (RS) and Brčko District, which adds fragmentation and also adds work. And the domestic market is small (about 3.2M people, estimate), so most ideas below only work if they are sold **regionally across the Western Balkans** (BiH + Serbia + Montenegro + North Macedonia).

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| International road haulage | Tracking drivers' Schengen 90/180-day stays under the EU Entry/Exit System (EES), and planning dispatch around those limits | **Candidate** | New hard constraint (EES fully live 10 Apr 2026); the EU refused an exemption; drivers face arrest/deportation; only early tools exist |
| Forestry / sawmills / furniture exporters | EUDR geolocation plus due-diligence package for EU buyers | **Candidate (weak)** | Real mandatory pain, but plot data is held upstream by public forest enterprises; global EUDR SaaS already exists |
| Retail / hospitality / crafts / micro-earners (FBiH) | New Law on Fiscalization of Transactions: software-based real-time invoice fiscalization | **Too competitive (mass POS)**; one narrow niche is kept as a low-score candidate | The law is in force since 12 Feb 2026 and applies at the latest about Aug 2027; dozens of Serbian accredited ESIR vendors plus local e-fiskal.ba / esir.ba will move in |
| B2B e-invoicing | E-invoice mandate | **No trigger found** | Searches returned Serbia's e-invoicing law, not a binding BiH/RS mandate (unverified that none exists) |
| Heavy industry exporters (aluminium, steel, cement, electricity) | EU CBAM reporting | **Rejected: poor distribution / enterprise** | A handful of large installations that buy from consultants and enterprise vendors. Desk judgement only, not searched in depth |

---

### Opportunity: EES 90/180 driver-days dispatch planner for Western Balkan hauliers

**Industry:**
International road freight (trucking), BiH first, then the same product for Serbia, Montenegro and North Macedonia.

**Buyer:**
Owner/dispatcher (*disponent*) of a small or mid-size BiH transport company (5–100 trucks) running international routes into the EU/Schengen. A secondary buyer is the freight forwarder who subcontracts those carriers.

**Trigger / Why now:**
The EU Entry/Exit System has been rolled out since Oct 2025 and runs fully (24 h) from **10 April 2026**. It now records each third-country driver's entries and exits biometrically and enforces the 90-days-in-180 Schengen limit, which was loosely checked before. In January 2026, truckers from BiH, Serbia, Montenegro and North Macedonia blockaded freight terminals ("90/180" protests). The European Commission said it **will not change** the 90/180 rule for professional drivers. Talk of a "transitional model" and of bilateral arrangements is unresolved, and Croatia is the only member state pushing for an exemption. Drivers who overstay face arrest and deportation.

**Current workflow:**
1. The dispatcher assigns a driver to an EU tour based on availability and tachograph hours.
2. Schengen days are counted by hand from passport stamps, tachograph country-entry records or driver memory, often in Excel or with free consumer 90/180 calculators.
3. Before each new tour, someone recalculates the driver's remaining days for the rolling 180-day window and the date his days will "free up".
4. Exceptions are handled ad hoc: non-Schengen EU states (Cyprus, Ireland), transit through non-Schengen corridors, differing bilateral arrangements, and a driver who has to come home early.
5. Mistakes lead to the driver being stopped or deported, the truck stranded, the load late, penalties from the shipper, and a lost driver.

**Pain:**
Industry-wide blockades in January 2026 and repeated threats of new blockades. The open letter from regional transport associations says the limit "threatens their ability to work". Drivers have been arrested and deported for overstays. Fleets now have to run more drivers per truck and rotate them, which makes this a daily planning problem as well as a compliance one.

**Existing solutions:**
- **NTS International** (Serbia): its tachograph/fleet mobile app added an automatic Schengen-day counter, plus a central view of tachograph data, working time and 90/180 stays. This is the closest competitor.
- **Tahomotive** (Serbia): tachograph data app that records the countries a driver passes through. It is unclear whether it does 90/180 planning (unverified).
- Tachograph analysis services (e.g., tahografbg.rs) and generic fleet telematics.
- Free consumer calculators (e.g., Schengen Days by Univerum; the EU's own short-stay calculator).
- Manual Excel at the dispatcher's desk.

**The gap:**
The existing tools *count* days for one driver. Based on the search evidence (to verify in interviews), none clearly does **forward-looking dispatch**:
- which driver can legally take *this* tour (with planned return date) without breaching 90/180;
- a roster across the whole fleet showing when each driver's days come back;
- handling Schengen versus non-Schengen EU states and transit;
- reconciling the tachograph country log against the EES record when they disagree.

**Possible product:**
A web/mobile planner that imports tachograph card files (.ddd) or border-crossing logs per driver and computes the rolling 90/180 position. It answers "who can take this tour?" and alerts before a breach. A planning calendar shows the fleet's legal availability.

**MVP:**
- Driver list.
- Entry/exit logging from manual input and .ddd country records.
- A rolling 90/180 engine with forecast ("if he leaves on X and returns on Y, is he legal?").
- Fleet availability calendar.
- WhatsApp/email alerts at 75/85 days.
- Bosnian/Serbian/Croatian UI.

**Pricing hypothesis:**
€3–6 per driver per month, or €30–150 per fleet per month. A company with 20 drivers pays about €80/month (estimate).

**How to find first customers:**
- Transport associations behind the protests (BiH carriers' associations, and the regional associations that signed the open letter).
- Chambers of commerce transport sections (Vanjskotrgovinska komora BiH, Privredna komora FBiH and RS).
- Holders of ECMT/bilateral permits allocated by the BiH Ministry of Communications and Transport.
- Trans.eu / freight exchanges, tachograph workshops (as resellers), and Facebook groups of drivers and dispatchers.

The number of BiH international carriers was **not verified**. It is likely in the low thousands across the region (estimate).

**Risks:**
- **Policy risk:** an EU exemption, bilateral deals, or a special professional-driver visa would shrink or kill the need.
- NTS International or a telematics vendor could add a forecast mode quickly.
- A small per-country market.
- Integration with .ddd parsing is well understood but fiddly.

**Kill condition:**
- The EU adopts a professional-driver exemption or long-stay mechanism for WB drivers in 2026–27; or
- interviews show that NTS/telematics tools already do fleet-level forward planning and carriers are satisfied.

**Score:** 6/10. Strong why-now and mandatory pain, but an early competitor already exists and the whole thing hinges on EU policy.

**Sources:**
- https://europeanwesternbalkans.com/2026/01/26/truck-drivers-from-the-wb-blocked-border-terminals-towards-the-schengen-area/
- https://europeanwesternbalkans.com/2026/02/04/the-eu-is-working-on-a-transitional-model-for-the-professional-truck-drivers-from-the-wb/
- https://sarajevotimes.com/european-commission-rejects-changes-to-schengen-rules-as-western-balkan-truckers-threaten-eu-freight-blockade/
- https://fena.ba/article/1662885/carriers-block-freight-terminals-for-a-second-day-over-ees-system-and-schengen-restrictions
- https://n1info.ba/english/news/croatia-continues-push-for-eu-driver-exemptions-amid-ees-implementation/
- https://www.intellinews.com/western-balkans-truck-drivers-warn-of-new-blockades-over-schengen-stay-rules-426334/
- https://plutonlogistics.com/cont/uploads/2026/01/OPEN-LETTER_Limited-number-of-days-of-stay-in-Schengen-countries-for-non-EU-drivers.pdf
- https://plutonlogistics.com/spedicija/pracenje-broja-dana-provedenih-u-sengenu-nova-opcija-u-nts-aplikaciji/ (competitor: NTS)
- https://www.tahomotive.rs/karakteristike/ (competitor)
- https://schengendays.univerum.com/sr/ (free substitute)
- https://biznis.telegraf.rs/info-biz/4302604-senicic-ees-sistem-24-sata-od-10-aprilamoguce-odlaganje-primene-u-nekim-zemljama

---

### Opportunity: EUDR origin and geolocation package builder for BiH wood exporters

**Industry:**
Sawmills, timber traders, and furniture/wood-product manufacturers exporting to the EU.

**Buyer:**
Owner or export manager at a small or medium sawmill or furniture maker selling to EU importers. Under EUDR the EU importer is the "operator" and asks its BiH supplier for the data.

**Trigger / Why now:**
The EU Deforestation Regulation requires every timber product placed on the EU market to carry WGS84 geolocation of the plot of harvest and proof of no degradation since 2020. Application was postponed. My understanding is end-December 2026 for large/medium operators and mid-2027 for micro/small; **verify this against the current text, as further simplification was under discussion in 2026**. Transparency International BiH warns that BiH exports to the EU are "in question". The FBiH and RS chambers ran EUDR workshops in Nov 2025 and held an EUDR conference in June 2026.

**Current workflow:**
1. The exporter buys logs from public forest enterprises (e.g., cantonal/RS forestry companies) with paper or PDF dispatch documents (*otpremnice*) referencing forest units and compartments.
2. The exporter has to translate compartment references into polygons/coordinates and keep a lot-level link from logs to sawn timber to shipment.
3. The EU buyer sends its own questionnaire or template. The exporter fills it in by hand in Excel/PDF and repeats this per buyer and per shipment.

**Pain:**
The TI BiH policy brief lists "lack of geolocation data, digital records and traceability" as an operational risk and says the requirement currently "cannot be fulfilled from a legal, technical, and operational perspective". Losing EU customers is the consequence.

**Existing solutions:**
- Global EUDR compliance SaaS for EU operators (several vendors; not diligenced by name in this run, so the market is assumed crowded at the operator end).
- The EU TRACES information system (for operators' due diligence statements).
- FSC/PEFC chain-of-custody certification and consultants.
- Chamber/SIPPO-supported workshops and advisors.

**The gap:**
The tools are built for EU operators, not for the Balkan supplier who has to produce the data. Missing pieces:
- converting local forestry documents (forest unit/compartment) into geolocation polygons;
- keeping lot-level mass balance from logs through to shipment;
- auto-filling the different EU buyers' questionnaires from one record ("one lot, many buyer packages").

**Possible product:**
A supplier-side traceability ledger. It records log purchases (with compartment mapped to polygon), the conversion to products and the shipments, then exports EUDR-ready GeoJSON plus buyer-specific evidence packs.

**MVP:**
- Upload or enter forestry dispatch notes.
- Pick or draw the plot on a map, with a cached forest-management layer where one is publicly available.
- Lot ledger.
- Per-shipment GeoJSON plus PDF evidence export.

**Pricing hypothesis:**
€50–150 per month per exporter, or €10–20 per shipment package (estimate).

**How to find first customers:**
- Wood-industry associations within the FBiH and RS chambers (attendees of the EUDR workshops/conference).
- Foreign Trade Chamber of BiH exporter lists.
- SIPPO programme partners.

The number of exporters was not verified. Wood is one of BiH's main export sectors.

**Risks:**
- The data needed upstream (compartment polygons) is held by public forestry enterprises and may not be released.
- Further EUDR delays or simplification, e.g. a "low-risk country" lighter regime.
- EU operator-side vendors may extend down to suppliers.

**Kill condition:**
- Forestry enterprises or the State start issuing geolocated dispatch documents themselves (making the tool trivial); or
- EUDR is further postponed or simplified so that suppliers in low-risk countries no longer need plot-level data.

**Score:** 5/10.

**Sources:**
- https://ti-bih.org/wp-content/uploads/2025/12/POTENCIJALNI-UTICAJ-EUDR-A-NA-SEKTOR-SUMARSTVA-I-BH-IZVOZNIKE-PROIZVODA-OD-DRVETA-NA-EU-TRZISTE-Policy-brief.pdf
- https://ti-bih.org/possible-suspension-of-timber-exports-to-the-eu-forests-of-una-sana-canton-victims-of-devastation-and-poor-laws/?lang=en
- https://www.kfbih.com/en/?p=29624
- https://www.kfbih.com/wp-content/uploads/2026/06/EUDR_Konferencija-Agenda.pdf
- https://komorabih.ba/wp-content/uploads/2026/06/Amer-Sabic_prezentacija.pdf
- https://bl.komorars.ba/wp-content/uploads/2025/11/Poziv-na-radionicu.pdf

---

### Opportunity: Fiscal-invoice app for newly covered FBiH micro-earners (non-registered individuals with more than 5,000 KM per year)

**Industry:**
Micro-earners newly brought under fiscalization: individuals renting rooms/apartments, freelancers, and other non-registered individuals earning more than 5,000 KM per year in FBiH.

**Buyer:**
The individual themselves, or the accountant/bookkeeping bureau acting for many such clients.

**Trigger / Why now:**
FBiH adopted the **Law on Fiscalization of Transactions** (House of Representatives 20 Jan 2026, House of Peoples 23 Jan 2026; Official Gazette 9/2026). It entered into force 12 Feb 2026 and applies once bylaws are adopted, at the latest 18 months after entry into force (about Aug 2027). It replaces hardware fiscal cash registers with software invoicing (phone app, PC program or cloud) and reports each transaction in real time. It extends the obligation to **individuals who are not registered entrepreneurs but earn more than 5,000 KM per year**. By mid-2026 the bylaws were reportedly late ("rok prošao, pravilnika nema").

**Current workflow:**
Newly obliged individuals have no invoicing tool at all today. They would need a certified software invoicing app and would have to keep records for tax purposes.

**Pain:**
A brand-new mandatory per-transaction obligation, with penalties, for a group that has never fiscalized before. The exact penalties and certification rules are unknown until the bylaws are published.

**Existing solutions:**
- Serbian accredited ESIR vendors (YuTeam, BizniSoft, Teron, IT Creator, fiskal.rs etc.). Serbia had about 95 approved solutions after its 2022 switch.
- Local players already branded for BiH (e-fiskal.ba, esir.ba).
- All POS and accounting vendors in FBiH.
- A possible free government app (unknown; Croatia and Serbia both have state or low-cost options).

**The gap:**
Only a possible one: a phone-only, very cheap fiscal invoicing app for non-merchant individuals, optionally managed by their accountant. This depends entirely on the bylaws, and on whether the state supplies a free app.

**Possible product:**
A mobile fiscal-invoice issuer for individuals, plus an accountant multi-client dashboard.

**MVP:**
Wait for the bylaws. Then build the certified issuance flow, receipt sharing via link/QR, and an annual summary for the tax return.

**Pricing hypothesis:**
€3–8 per month per individual; €30–80 per month per accountant for multiple clients (estimate).

**How to find first customers:**
- Accountants' associations in FBiH.
- Tourist-board registers of private accommodation (cantonal).
- Freelancer communities.

**Risks:**
- Software certification/accreditation burden.
- A free government app.
- A flood of Serbian ESIR vendors porting their products.
- The bylaws may exempt or simplify this group.

**Kill condition:**
- The FBiH Tax Administration provides a free app for small issuers (as some neighbouring regimes do); or
- certification costs or timelines are prohibitive for a solo developer.

**Score:** 4/10.

**Sources:**
- https://upfbih.ba/usvojen-zakon-o-fiskalizaciji-transakcija-u-fbih
- https://feb.ba/wp-content/uploads/2026/02/Zakon-o-fiskalizaciji-transakcija-u-FBiH-1.pdf
- https://forbes.n1info.ba/ekonomija/sta-se-mijenja-za-firme-i-koji-su-rokovi-za-nove-fiskalne-kase-svi-detalji-zakona-o-fiskalizaciji-u-fbih/
- https://advokatskafirmasajic.com/blog/bs/novi-zakon-o-fiskalizaciji-transakcija-u-federaciji-bih-kljucne-novine-i-obaveze/
- https://magazinplus.eu/utihnula-prica-o-fiskalizaciji-rok-prosao-pravilnika-nema/
- https://www.fiscal-requirements.com/documents/1037-draft-law-on-fiscalization-of-transactions-in-the-federation-of-bosnia-and-herzegovina-en
- https://e-fiskal.ba/ and https://esir.ba/ (local competitors)
- https://www.b92.net/biz/fokus/analiza/istrazujemo-kakva-resenja-se-nude-za-prelazak-na-novi-sistem-fiskalizacije-2086992 (Serbian vendor landscape)

---

## Rejected after competitor research

- **General FBiH software fiscalization / ESIR POS for shops and restaurants.** The trigger is strong: more than 83,000 existing fiscal devices in FBiH (2020 Government figure) must move to software by about Aug 2027. It is killed by the crowd of experienced Serbian ESIR vendors (YuTeam, BizniSoft, Teron, IT Creator and the rest of about 95 accredited solutions), by the local e-fiskal.ba / esir.ba, and by every incumbent POS/ERP vendor. This is a commodity race, not an indie gap.
- **Schengen 90/180 counter alone, without dispatch planning.** Killed by NTS International's built-in counter and by free calculators (Schengen Days, the EU's own calculator). Only the fleet-planning angle above survives.

## Attractive problem, poor distribution

- **CBAM emissions reporting for BiH aluminium/steel/cement/electricity exporters.** The pain is real (definitive CBAM period from 2026), but there are very few installations, enterprise buyers and consultant-led purchasing. Not diligenced in depth.
- **EUDR plot data at the source.** The real bottleneck is public forestry enterprises (state/cantonal), which means government procurement, not SMB sales.

## Too competitive

- FBiH fiscal POS/ESIR software (see above).

## Inaccessible markets

- None. BiH is accessible to a foreign solo founder. The main constraints are the small market size and fragmented regulation between FBiH, RS and Brčko.
