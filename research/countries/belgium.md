# Belgium

Research depth: small-to-mid effort (about 7 searches, WebFetch blocked). Belgium is a high-wage, crowded, well-served B2B software market. Most claims below come from search snippets. Competitor facts not seen in a source are marked "unverified".

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Accounting / all VAT businesses | Mandatory B2B Peppol e-invoicing from 1 Jan 2026 | Too competitive | About 400 FPS-approved software packages; the accounting suites, Billit and Odoo are strong (names unverified in sources). |
| Payroll / employers | DIMONA / DmfA declarations | Rejected | Social secretariats (Partena, Securex) and payroll software own it. No new 2026 obligation found. |
| Energy experts (Flanders) | EPC for small non-residential (kNR) and NR buildings, mandatory from 1 Jan 2026 | Candidate | New 2026 demand spike. VEKA imposes its own software, so the gap is workflow around it. |
| Waste (Flanders) | VLAREMA collector duty: visual check of client residual waste, sorting-error register, collection contracts | Weak candidate | Mandatory and recurring, but the buyers are probably already on waste-hauler software (unverified). |
| Waste (Flanders) | OVAM registration of collectors, traders and brokers | Rejected | One-time or rare registration; low frequency. |
| Retail / horeca owners | EPC-NR ordering | Poor distribution | Consumer-like, one-time purchase. The real buyer is the energy expert. |

## Opportunities

### Opportunity: EPC kNR/NR field-to-VEKA workflow for energiedeskundigen (Flanders)

**Industry:**
Energy-performance certification (building inspection), Flanders.

**Buyer:**
Independent energy experts type A and D (solo practitioners and small firms) who issue EPC kNR and EPC NR certificates.

**Trigger / Why now:**
From 1 Jan 2026, owners of smaller non-residential premises (SMEs, shops, restaurants) must have an EPC NR or EPC kNR. Fines run EUR 500 to 5,000. Demand for type D experts should therefore jump in 2026.

**Current workflow:**
1. The owner requests quotes, since there is no fixed price. The expert quotes and schedules a site visit.
2. The expert inspects the unit on site and takes measurements and photos, which must be evidenced.
3. The expert re-enters the data into the VEKA-imposed EPC software, which generates advice and cost estimates automatically.
4. The expert issues the certificate and invoices the client.

**Pain:**
Many new, uneven-experience type D experts, plus evidence-collection duty and VEKA control checks. Pain is unverified beyond the regulatory facts. I found no complaints.

**Existing solutions:**
The VEKA official software (free and mandatory). Third-party EPC field-capture apps probably exist (unverified). Generic quoting and CRM tools.

**The gap:**
Possibly quote-to-scheduling, photo and evidence packaging and invoicing around the VEKA tool. The VEKA tool itself cannot be replaced, so there is no API integration. This is unverified.

**Possible product:**
A field-capture and evidence app with a quote and invoice pipeline for type D experts. It outputs a structured data sheet for fast entry into the VEKA tool.

**MVP:**
A mobile web form with a photo checklist per component, an export sheet in VEKA entry order, and a quote and invoice template.

**Pricing hypothesis:**
EUR 30-60 per month per expert. Roughly a few hundred experts, which is an estimate.

**How to find first customers:**
The Flemish list of recognised energy experts (published by VEKA, unverified format). Also type D training cohorts.

**Risks:**
Small niche. A one-time demand spike as the 2026 backlog clears. No integration possible with VEKA. Incumbent EPC apps are unverified.

**Kill condition:**
Existing EPC field apps already cover capture and export, or fewer than about 300 active type D experts.

**Score:** 4/10

**Sources:**
- https://www.vlaanderen.be/bouwen-wonen-en-energie/niet-residentiele-gebouwen/epc-van-een-kleine-niet-residentiele-gebouweenheid-epc-knr/taken-en-verantwoordelijkheden-bij-het-epc-klein-niet-residentieel
- https://www.vlaanderen.be/epc-pedia/info-type-d/werken-als-energiedeskundige-type-d/energiedeskundige-type-d-worden
- https://solarmagazine.nl/nieuws-zonne-energie/i43140/verplichting-vlaamse-energieprestatiecertificaten-verbreedt-kans-voor-leveranciers-zonnepanelen-en-batterijen

### Opportunity: VLAREMA sorting-control register for small waste collectors (Flanders)

**Industry:**
Commercial waste collection, Flanders.

**Buyer:**
Small and mid-size commercial waste collectors and haulers.

**Trigger / Why now:**
Since Sept 2021, VLAREMA requires collectors to inspect clients' residual waste for sorting errors. They must notify the client, keep a register, state in contracts which streams are banned from residual waste, and may refuse unsorted waste. The number of selective streams is 22 or 24 depending on business type. Further VLAREMA amendments are in progress for 2026.

**Current workflow:**
1. The driver visually checks the container at pickup.
2. A sorting error is noted on paper or in a driver app.
3. The office informs the client and logs the error in a register.
4. Contracts are updated per business type and stream list.

**Pain:**
Mandatory and per pickup, but the evidence of actual pain is thin.

**Existing solutions:**
Waste-hauler and route software (unverified). AMCS (a vendor that markets to Belgian waste operators, seen in search results). Collectors' own TMS.

**The gap:**
A cheap add-on for photo evidence, auto-notification and a register export. Unverified.

**Possible product:**
A driver-app module that logs a sorting error with a photo and sends the client notice automatically.

**MVP:**
A mobile web form, an auto email to the client and a register CSV.

**Pricing hypothesis:**
EUR 50-150 per month per collector. This is an estimate.

**How to find first customers:**
The OVAM register of registered collectors.

**Risks:**
Probably already bundled by incumbents. Small market. Enforcement intensity is unknown.

**Kill condition:**
The main haulage software already includes the sorting-error register, or the OVAM register shows fewer than about 100 relevant collectors.

**Score:** 3/10

**Sources:**
- https://www.unizo.be/berichten/nieuws/voldoet-jouw-bedrijf-aan-de-afvalsorteerverplichting
- https://www.vlaanderen.be/registratie-als-inzamelaar-handelaar-of-makelaar-van-afvalstoffen
- https://www.amcsgroup.com/resources/blogs/navigating-belgian-regulations-and-challenges-technology-as-a-guide-for-a-circular-economy/

## Rejected after competitor research

- **Peppol onboarding / e-invoicing helper for SMEs.** The need is real. About 8 in 10 SMEs were not connected before the deadline, and around 400 approved software packages exist. Billit, Odoo and the accounting suites also compete (named from memory, unverified in sources). Peppol access points are commoditised.
- **DIMONA / DmfA tooling.** Social secretariats (Partena, Securex) handle these for most employers, and no new 2026 obligation turned up.

## Attractive problem, poor distribution

- EPC NR compliance for shop and restaurant owners. The need exists, but each owner buys once. The channel to energy experts is the better target.

## Too competitive

- Peppol e-invoicing for SMEs.

## Not researched

Belgium's regional split (Flanders, Wallonia, Brussels) multiplies compliance work. I did not search for opportunities in Wallonia or Brussels, customs/freight (Antwerp), pharmacies (APB/FAMHP), agriculture manure rules (VLM), or funeral homes. A deeper pass there could find stronger leads.

## Overall

Belgium offers no clear solo-founder opportunity above 5/10 in this pass.

**Sources (general):**
- https://www.partena-professional.be/en/node/21852
- https://itdaily.com/news/software/e-invoicing-belgian-companies-lag-behind
- https://www.vatcalc.com/belgium/belgium-b2b-e-invoicing-july-2024-update/
