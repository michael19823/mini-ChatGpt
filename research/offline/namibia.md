# Namibia: Offline / Quiet-Industries Pass

*Research date: 2026-10-05. Search budget: 20. Searches used: 6 (5 returned results; the 6th was refused with a usage-limit error, so I stopped searching as the instructions say). WebFetch was not used. This is a short report: several rows below rest on background knowledge and are marked "unverified". Counts without a source are estimates.*

Namibia is small: about 3M people and 242k registered entities (see the existing country report). Most quiet industries here have too few operators to support a standalone product. The ones worth a closer look are tied to **exports and tourism**, because foreign buyers and visitors bring both the paperwork and the money:

- charcoal, which falls under the EU Deforestation Regulation (EUDR);
- accommodation and hunting, which pay Namibia Tourism Board (NTB) levies and need hunting permits.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Charcoal producers and group schemes (bush-encroachment harvesting) | Forestry harvesting and transport permits. FSC group certification. EUDR due diligence with plot geolocation for EU exports | Rural farm operations. Permits come from Forestry offices. FSC group-scheme paperwork is held by scheme managers | About 320 FSC-certified landowners/managers on 1.6M ha (FSC Africa). Producer workforce in the thousands (estimate) | **Opportunity (moderate)** | New EU trigger plus a group-scheme manager who must collect evidence from many farms |
| Accommodation establishments (guest farms, B&Bs, lodges, Airbnb hosts) | NTB registration. Levy collected from guests, paid after each 2-month period, plus a Tourism Levy Return and Statistics Form | Return form plus proof of payment. NTB public warnings about unpaid levies. Crackdown on unregistered Airbnb hosts with a 30 Apr 2025 deadline | NTB register; the number of establishments was not verified (estimate: low thousands) | **Opportunity (weak–moderate)** | Recurring mandatory return with a penalty of 5% per month. PMS vendors may already cover part of it |
| Second-hand goods dealers, pawnbrokers, scrap-metal dealers, auctioneers | Second Hand Goods Act 23 of 1998: register the particulars of every item acquired (acquisition and disposal registers), open to police inspection | Police said in Oct 2024 that poor record-keeping fuels theft. Inspections of registers, warnings and cases opened | Not found (estimate: a few hundred dealers) | **Opportunity (weak)** | Enforced paper register. Low willingness to pay and no police portal to submit to |
| Trophy-hunting outfitters / hunting farms | MEFT permit for each hunting client (max. 2 trophies per species), special permits for big cats. Hunting farms must be registered. NTB registration. Professional-hunter registration and insurance | Permits issued by MEFT. Associations (NAPHA, NAU) publish rules as PDFs and Q&A pages | NAPHA membership; size not verified (estimate: a few hundred outfitters) | Watch | Per-client paperwork is real, but the season is seasonal, foreign-client CRM tools exist, and outfitters are few |
| Households as employers (domestic workers) | Labour Act contracts and payslips. Social Security Commission (SSC) registration and contributions. Minimum wage (unverified) | SSC forms are largely counter-based (unverified) | Not found | Reject | Very low willingness to pay per household. SA payroll tools (SimplePay and others) reportedly support Namibia (unverified) |
| Livestock traders / auctions / farmers | NamLITS movement permits and ear tags, stock brands | Rural | — | Reject | NamLITS Online is free (already rejected in the country report) |
| Well / borehole drillers | Drilling permits and borehole completion records under water-resources law (unverified) | Ministry counter filing (unverified) | Not found | Reject (not verified) | Couldn't confirm a recurring per-job filing within budget. Very few drillers |
| Liquor outlets / shebeens | Liquor Act 1998 licences through regional licensing committees (unverified) | Committee hearings, paper applications | Thousands of shebeens (estimate) | Reject | Annual renewal only, informal operators, no recurring data flow |
| Taxi / minibus operators | Road-carrier permits (Road Transportation Board); taxi associations (unverified) | Counter permits | Not found | Reject | Permit renewal is rare. The pain is fares and policing, not paperwork |
| Security companies | Registration and officer registration with the security regulator (SIRB) (unverified) | — | Not found | Reject | Mostly a payroll and roster problem that existing workforce tools already address |

## 2. Strongest opportunities

### Opportunity: EUDR + FSC evidence pack for Namibian charcoal group schemes

**Industry:**
Charcoal production from encroacher bush, organised in FSC group schemes and exporters that ship mostly to the EU and UK.

**Buyer:**
The group-scheme manager or certification officer at a charcoal exporter or group scheme (for example Jumbo Charcoal in Okahandja, which renewed its environmental clearance in 2025). These people are responsible for many member farms.

**Trigger / Why now:**
The EUDR covers charcoal. Namibian press in Aug 2025 reported that "Namibia beef, charcoal exports face new EU forest rules". Exporters must give plot-level geolocation showing the charcoal comes from savannah and not from deforested land, and must show compliance with Namibian land, environment and labour law. The EU classed Namibia as **standard risk**, so 3% of consignments get in-depth checks.

The original application date reported was 1 Jan 2026. The EU has since postponed it again: as I understand it, to end-2026 for large operators and mid-2027 for small ones. This is unverified in this session. Either way, the deadline lands in the next 3–9 months.

**Current workflow:**
1. Member farms harvest under forestry harvesting permits and move product under transport permits.
2. The scheme manager keeps FSC records per farm: harvest areas, worker and safety records, and the permits. These are on paper and in spreadsheets (unverified).
3. For each EU consignment the exporter must assemble origin plots (polygons) and legality evidence for the EU importer's due-diligence statement.
4. FSC auditors visit every year. EU importers will now ask for geolocation files for each shipment.

**Pain:**
Industry sources say the "exporters are already FSC-certified, which has incorporated EUDR requirements". So the substance is covered. The new work is the per-consignment format: plot geolocation linked to each batch, which EU importers will demand. The penalty for getting it wrong is losing the EU market.

**Existing solutions:**
- The FSC certification system and FSC's EUDR-aligned tools.
- The EU TRACES information system, which the EU importer files to.
- Generic EUDR traceability SaaS (e.g. Preferred by Nature guidance, and many commodity-traceability vendors).
- GIZ / Namibian Charcoal Association support projects.
- Certification consultants.

**Offline evidence:**
Rural farm producers, forestry permits issued at offices, group schemes run from small towns (Okahandja, Otjiwarongo and others). No producer-facing software listings were found.

**Offline channel:**
- The Namibian Charcoal Association (NCA), which co-wrote the national FSC standard with GIZ.
- FSC Africa.
- Group-scheme managers, who are few and can each be reached by phone.

**Market count:**
About 320 FSC-certified landowners/managers covering 1.6M ha (FSC Africa). The number of exporting companies and group schemes was not found (estimate: 10–30). This means a small number of buyers.

**The gap:**
Generic EUDR tools are built for cocoa, coffee, soy and timber smallholders, and onboarding them is enterprise-heavy. A scheme manager who has to turn existing farm boundaries plus permit numbers into per-batch GeoJSON and evidence bundles may have nothing light-weight. This is unverified: FSC's own EUDR tooling may already cover it.

**Possible product:**
A batch register that links each bag or container lot to member-farm polygons, harvesting and transport permit numbers, and FSC certificate codes. It exports the EU importer's due-diligence package (GeoJSON plus a PDF legality pack).

**MVP:**
- Draw or upload farm polygons.
- Log permits.
- Use a "batch = which farms" picker.
- Export GeoJSON and PDF.

The target user is one group-scheme manager.

**Pricing hypothesis:**
US$100–300/month per scheme or exporter, or US$5–20 per consignment (estimate). Exporters would pay for software plus a done-for-you onboarding service.

**How to find first customers:**
- NCA membership.
- The FSC public certificate database (Namibian group certificates).
- Environmental clearance notices for charcoal group schemes.

**Risks:**
- Too few buyers.
- FSC or EU importers may provide the tool for free.
- EUDR has been delayed and simplified repeatedly.
- A non-local founder can sell this, since the buyers are export-oriented and English-speaking, but the farm polygons need on-the-ground help.

**Kill condition:**
- FSC's EUDR module already outputs per-batch geolocation accepted by EU importers, or
- there are fewer than 10 exporting entities.

**Score:** 4/10

**Sources:**
- https://www.namibian.com.na/namibia-beef-charcoal-exports-face-new-eu-forest-rules/
- https://allafrica.com/stories/202508190293.html
- https://www.namibian.com.na/eu-beef-charcoal-exports-to-continue-despite-new-rules/
- https://informante.web.na/?p=381060
- https://africa.fsc.org/en-cd/newsfeed/responsible-charcoal-production-is-possible-in-communal-areas-of-namibia
- https://the-eis.com/elibrary/search/33557
- https://we.com.na/agriculture-we/new-regulations-for-charcoal-production2022-04-26

### Opportunity: NTB tourism-levy return and statistics form for small accommodation operators

**Industry:**
Guest farms, B&Bs, self-catering units, small lodges and Airbnb hosts.

**Buyer:**
The owner-operator. On guest farms these are often older farming families.

**Trigger / Why now:**
NTB cracked down on unregistered operators, including Airbnb hosts, with a registration deadline of 30 Apr 2025:
- Unregistered operators face fines of up to N$20,000 or 2 years in prison.
- NTB has publicly warned operators over unpaid levies.

Newly registered small hosts now have a recurring obligation they have never filed before.

**Current workflow:**
1. The operator collects the levy from guests.
2. After each two-month period, they fill in the Tourism Levy Return and Statistics Form (guest nights, nationalities and similar statistics, per the 2004 regulations).
3. They pay NTB and attach proof of payment.
4. Late payment adds 5% per month. Failing to pay within 14 days of a written demand is an offence (fine up to N$4,000).

**Pain:**
- A penalty that compounds.
- Guest statistics that must be re-keyed from booking platforms.
- Public NTB warnings show non-compliance is widespread.

**Existing solutions:**
- PMS / channel managers used in southern Africa: NightsBridge publishes a "How to register with the Namibia Tourism Board" tutorial, and ResRequest (unverified).
- Booking.com / Airbnb exports.
- Accountants.
- The paper or PDF NTB form.

**Offline evidence:**
A form plus proof-of-payment process defined in 2004 regulations. Enforcement is by demand letters, and no levy-return software listing was found.

**Offline channel:**
- Hospitality Association of Namibia (HAN) and the Federation of Namibian Tourism Associations (FENATA) (unverified as channels).
- Contact the NTB-registered establishment list by phone or WhatsApp.
- Accountants in Windhoek and Swakopmund.

**Market count:**
Not verified. Estimate: low thousands of NTB-registered establishments.

**The gap:**
A PMS may export occupancy, but it is unverified whether any of them produce the NTB bi-monthly return in NTB's format with the levy calculated. Airbnb-only hosts have no PMS at all.

**Possible product:**
Upload a Booking.com or Airbnb reservations export and get a pre-filled NTB levy return, the statistics breakdown, the amount due and a deadline reminder.

**MVP:**
A CSV-to-form converter with a bi-monthly reminder.

**Pricing hypothesis:**
N$100–250 per return (about US$6–14), or N$1,000/year. This is likely a done-for-you service, with low software willingness to pay.

**How to find first customers:**
- The NTB registered-establishments list.
- HAN members.
- Airbnb listings in Swakopmund and Windhoek.

**Risks:**
- The market is tiny.
- NTB may launch an e-portal.
- PMS vendors can add this cheaply.
- A non-local founder could build it, but selling to guest farms needs local phone outreach (Afrikaans or German help).

**Kill condition:**
- NightsBridge or NTB already generates the return, or
- NTB moves to online filing that calculates the statistics itself.

**Score:** 3.5/10. Best as a feature inside a southern-African PMS, not a standalone product.

**Sources:**
- https://www.we.com.na/mw-main/ntb-warns-operators-over-unpaid-levies-NMH015397-3015-19084
- https://www.tourismupdate.com/node/1265297165
- https://voyagesafriq.com/?p=31809
- https://nightsbridge.screenstepslive.com/a/1943980-how-to-register-with-the-namibia-tourism-board
- https://www.lac.org.na/laws/annoREG/Namibia%20Tourism%20Board%20Act%2021%20of%202000-Regulations%202004-137.pdf
- https://www.namibian.com.na/ntb-cracks-down-on-pirate-tour-operators/

### Opportunity: Digital acquisition register for second-hand, pawn and scrap dealers

**Industry:**
Second-hand goods dealers, pawnbrokers, scrap-metal dealers and auctioneers.

**Buyer:**
The shop owner or the counter clerk.

**Trigger / Why now:**
The Second Hand Goods Act 23 of 1998 requires registers of the particulars of every item acquired. In Oct 2024 Namibian Police announced intensified inspections, saying "poor record-keeping fuels theft". Police inspect acquisition and disposal registers, issue warnings and open cases against non-compliant dealers.

**Current workflow:**
1. The clerk writes the seller's ID, a description of the item and the price in a paper register.
2. The shop holds the goods for the required period (period unverified).
3. Police visit and read the book. Matching to stolen-goods reports is done manually.

**Pain:**
Cases are opened against dealers, which carries legal risk. Handwritten registers are incomplete.

**Existing solutions:**
- Paper register books.
- Pawn and point-of-sale software from SA, e.g. pawnbroker systems built for SA's Second-Hand Goods Act (unverified for Namibia).
- Spreadsheets.

**Offline evidence:**
The register is a paper book inspected in person, and there is no police submission portal.

**Offline channel:**
Visiting shops in Windhoek's industrial areas and Katutura. Possibly through station commanders' compliance briefings.

**Market count:**
Not found. Estimate: a few hundred.

**The gap:**
There is no electronic report to submit, so software only helps when police inspect. Without a portal to file to, there is no "one job, many authorities" pattern.

**Possible product:**
A phone app that photographs the seller's ID and the item, and prints or exports a register in the Act's format.

**MVP:**
A form, photos and a PDF register.

**Pricing hypothesis:**
N$200–400/month (estimate). Willingness to pay is weak.

**How to find first customers:**
Walking shop to shop. No public register was found.

**Risks:**
- Low willingness to pay.
- No enforcement deadline.
- Needs a local founder.

**Kill condition:**
Dealers say police inspections are rare or easily satisfied by the paper book.

**Score:** 2.5/10

**Sources:**
- https://namibiansun.com/local-news/poor-record-keeping-fuels-theft-police2024-10-17
- https://namiblii.org/akn/na/act/1998/23

## 3. Rejected

- **Trophy-hunting permit and hunting-register admin.** Each client needs a separate MEFT permit (max. 2 trophies per species), big cats need special permits, and operators need NTB registration. But the work is seasonal (1 Feb–30 Nov), there are few outfitters, NAPHA supplies guidance, and outfitters already use international hunting-booking tools. Watch only. Sources: https://napha-namibia.com/qa/, https://www.napha-namibia.com/legal, https://www.nau.com.na/post/announcement-of-hunting-season-2024
- **Household employers of domestic workers.** Willingness to pay is too low per household, and SA payroll tools reportedly cover Namibia (unverified).
- **Livestock trading.** NamLITS Online is free (see the country report).
- **Well drillers, liquor outlets, taxi operators, security companies.** These were not verified within the budget. On background knowledge, either the frequency is annual or rare, or there are too few operators.

## 4. Method notes

- What worked: Namibian news sites (namibian.com.na, we.com.na, namibiansun.com, thebrief.com.na) report regulator crackdowns (police, NTB) clearly. NamibLII and LAC hold the Acts and regulations. Association sites (NAPHA, NAU) publish the hunting rules.
- What didn't work: public counts of licensed operators are almost never online.
- Searches were cut off after 6 by the usage limit, so the domestic-worker, driller, liquor and transport rows are unverified.
- In Namibia, export-linked rules (EUDR) and tourism levies are the only quiet-industry triggers backed by real money.
