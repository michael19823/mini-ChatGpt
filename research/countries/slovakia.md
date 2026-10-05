# Slovakia: indie software opportunity research

Researched 2026-10-05, using 14 WebSearch calls (no WebFetch). Searches were in Slovak and English.
Slovakia is a mid-sized EU market of about 5.4m people. Software sales are open, with no sanctions or localization barriers.
A foreign solo founder can sell here, but the product and support need to be in Slovak, and buyers expect to deal with a local or Czech-Slovak company.

**Summary:** The biggest 2026–2027 triggers are mandatory B2B e-invoicing from 1 Jan 2027, quarterly electronic waste reporting to ISOH (postponed to 1 Jan 2027), the new Building Act (fully electronic since April 2025) and the EU Waste Shipment Regulation (DIWASS, 2026).
The e-invoicing trigger is already saturated: the Finance Administration register lists 77 certified "digitálni poštári" (Peppol access points).
The waste triggers are the most promising, but a group of local environmental-software vendors already serves them.
I found nothing scoring above 6/10.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| All VAT payers / accountants | E-invoicing and invoice-data reporting from 1 Jan 2027 | Too competitive | 77 certified Peppol providers (35 SK, 42 foreign), plus the accounting vendors Stormware, KROS and others |
| Waste collectors / recyclers / hazardous-waste receivers | Electronic hazardous-waste consignment note (sprievodný list) in ISOH after every transport, plus quarterly ISOH reporting from 2027 | **Opportunity (6/10)** | Per-job, mandatory, 5-working-day deadline. Incumbents exist but are aimed at generators. |
| Recyclers / scrap and plastic exporters | Cross-border waste shipments through EU DIWASS (from 2026) | **Opportunity (5/10)** | New EU system. Better built as a multi-country product. |
| Waste generators (manufacturers, workshops) | Monthly electronic waste records plus quarterly ISOH reports (Decree 89/2024, from 1 Jan 2027) | Too competitive | ENVITA/INISOFT, Envisys, ESPIK, Envis, Envirotree and BeSoft all sell this already |
| Designers / architects (construction) | Permit submissions through the Portál výstavby (URBION) under Act 25/2025 | **Opportunity (4/10)**, weak | Real friction, but only a state portal with no confirmed API |
| Accommodation providers | Reporting foreign guests to the police, plus the guest register | Rejected | Guest-register software is "part of almost all programs on the market". The QES/eID requirement adds friction. |
| Employers of third-country workers | Start/end/change notifications to ÚPSVaR (new slovensko.sk e-service from 15 Jul 2026, Act 128/2026) | Poor distribution / unclear | Low-frequency task, likely to be absorbed by payroll/HR tools and agencies. Not verified. |
| Forestry / wood processors | EUDR due-diligence statements in TRACES | Rejected | Slovakia is a low-risk country with simplified and repeatedly postponed obligations. Many EUDR SaaS vendors already exist. |

---

### Opportunity: Hazardous-waste consignment and ISOH reporting router for waste collectors

**Industry:**
Waste management: licensed collectors, transporters, treatment and recycling facilities (the "príjemca nebezpečného odpadu").

**Buyer:**
The operations or environmental manager at a small or medium waste-collection or recycling company that handles hazardous waste from many generators.

**Trigger / Why now:**
- From 1 Jan 2025, waste reports go to ISOH electronically only.
- Decree 89/2024 Z.z. (as amended by 369/2025) makes ongoing electronic waste records, kept at least monthly, and quarterly ISOH reporting mandatory from **1 Jan 2027**. The Environment Ministry postponed this from 2026 on 17 Dec 2025.
- The hazardous-waste consignment note becomes an electronic record in the information system:
  - The sender registers the transport before it happens.
  - The receiver completes it and files it after **every transport, within 5 working days**.

**Current workflow:**
1. The collector's dispatcher plans pickups in its own TMS, a spreadsheet or a weighbridge system.
2. The generator (the customer) is supposed to start the consignment note in ISOH. Many small generators do not know how, so the collector's staff do it for them or chase them for it.
3. After weighing, the receiver re-enters the weights, waste codes and parties into ISOH to complete the note, within 5 working days.
4. The same data is entered again for the receiver's own waste records and its quarterly ISOH report, and for invoicing (which also becomes a structured e-invoice in 2027).

**Pain:**
- The obligation applies per transport and carries a hard deadline.
- Experts and the industry said ISOH would not be ready, and collectors pushed for the postponement ([odpady-portal: "Odložte to, vyzývajú odpadári"](https://www.odpady-portal.sk/Dokument/108974/elektronika-evidencia-odpadov-isoh-odklad.aspx)).
- One interviewed expert said the state "will ask for a large amount of data".
- Electronic reporting is "not an automated system that corrects you"; it is a form where you have to enter correct summary data yourself.

**Existing solutions:**
- ENVITA by INISOFT. INISOFT also built the original ISOH, and ENVITA exports ISOH XML; module prices appear in public contracts at €19–33 per module.
- Envisys
- ESPIK
- Envis.sk
- Envirotree
- BeSoft
- The ISOH web forms themselves (free)
- Environmental consultants who file on clients' behalf

**The gap:**
The incumbents mostly target the waste generator's annual or quarterly records.
- **Unverified:** whether any of them handles the collector-side, per-transport loop: weighbridge/TMS data → completed ISOH consignment note → the generator's confirmation → the collector's own quarterly report → the invoice line.
- **Unverified:** whether ISOH exposes an API to third parties or only XML import. This decides whether the product can work at all.

**Possible product:**
One record per pickup, from scale ticket or driver app, produces:
- the ISOH consignment-note data,
- a confirmation pack for the generator,
- the receiver's monthly record lines and quarterly ISOH export,
- the structured invoice data.

Exceptions (wrong waste code, weight mismatch, missing generator ID) go to a review queue.

**MVP:**
1. Import CSV from the weighbridge or a spreadsheet.
2. Validate against the waste catalogue and the ISOH code lists.
3. Generate ISOH XML or batch forms.
4. Show a deadline dashboard for the 5-working-day rule.

**Pricing hypothesis:**
€99–299 per month per facility, tiered by number of transports.

**How to find first customers:**
- The public ISOH and district-office registers of authorised waste collectors and treatment facilities.
- Members of the Slovak waste-management association ZOHO (unverified as a channel).
- Advertisers and contributors on odpady-portal.sk.

**Risks:**
- INISOFT's closeness to ISOH. A €6m ISOH rebuild by a new contractor is under way.
- Further postponement past 2027.
- No API. The market is small, likely a few hundred to a low thousand collectors and treaters (estimate).

**Kill condition:**
Either of these kills it:
- ENVITA or Envisys already offers collector-side batch completion of consignment notes, sold at a low price.
- The new ISOH provides free bulk import that collectors find adequate.

**Score:** 6/10

**Sources:**
- https://www.odpady-portal.sk/Dokument/108856/evidencia-odpadov-isoh-inisoft-martina-polackova-odpady.aspx
- https://www.odpady-portal.sk/Dokument/109025/evidencia-odpadov-isoh-2026.aspx
- https://www.odpady-portal.sk/Dokument/108974/elektronika-evidencia-odpadov-isoh-odklad.aspx
- https://envisys.sk/odborne-clanky-odpady/povinna-elektronicka-evidencia-odpadov-sa-posuva-na-rok-2027-co-plati-dovtedy-a-ako-odklad-vyuzit/
- https://www.zakonypreludi.sk/zz/2024-89/znenie-20270101
- https://static.slov-lex.sk/static/SK/ZZ/2024/89/20270101.html
- https://besoft.sk/preprava-odpadu-2026/
- https://www.espik.sk/blog/evidencia-odpadov-od-roku-2026-co-sa-meni-a-na-co-sa-pripravit
- https://envis.sk/aktuality/ohlasovanie-udajov-z-elektronickej-evidencie-odpadov-do-isoh-od-1-1-2026/
- https://www.crz.gov.sk//data/att/4323127.pdf (ENVITA price list in a public contract)

---

### Opportunity: Cross-border waste shipment (DIWASS) paperwork for small recyclers and brokers

**Industry:**
Recycling, scrap metal, plastics and waste brokerage that ships to or from AT, CZ, HU and PL.

**Buyer:**
The owner or logistics clerk at a small recycler or waste broker that ships Green-list or notified waste across borders.

**Trigger / Why now:**
- The EU Waste Shipment Regulation (EU) 2024/1157 moves shipment documents into the central EU system DIWASS.
- Operator registration in DIWASS opened on 21 Apr 2026, and odpady-portal reports that the rules change in 2026.

**Current workflow:**
1. Fill in the Annex VII form, or the notification and movement documents, on paper or PDF.
2. Email them to the consignee, carrier and authorities.
3. Re-key the same data into the Slovak ISOH record and the invoice.
4. Now also enter it in DIWASS, for every shipment.

**Pain:**
Each truckload needs documents. A broker sits in the middle between generator, carrier and foreign facility. Errors lead to fines or shipments being stopped at the border.

**Existing solutions:**
- The DIWASS web UI itself (free).
- Consultants.
- Waste-management ERPs (incumbents like ENVITA may add modules; unverified).
- Possibly EU-wide vendors (not verified in this run).

**The gap:**
Unverified, but the likely gap is the link from one shipment record to DIWASS, the Slovak ISOH records and the customer documents, with multi-language output.

**Possible product:**
A shipment workspace that fills in Annex VII and DIWASS data once and syncs it to the national waste records.

**MVP:**
1. Annex VII and movement-document generator with party and code libraries.
2. DIWASS-ready data export.
3. Export of the national waste-record lines.

**Pricing hypothesis:**
€5–15 per shipment, or €79–199 per month.

**How to find first customers:**
- The register of waste-shipment permits held by the Environment Ministry (MŽP SR).
- Lists of authorised collectors.
- Scrap-metal associations.

**Risks:**
- The obligation is EU-wide, so it is better tackled as a multi-country product. Slovakia alone is small.
- DIWASS access for third parties (an API, or system-to-system access) is unclear.
- Larger EU vendors may enter.

**Kill condition:**
- DIWASS provides no machine interface, and its UI is good enough for low-volume shippers.

**Score:** 5/10

**Sources:**
- https://www.odpady-portal.sk/Znacka/2667/diwass
- https://www.odpady-portal.sk/Znacka/1076/cezhraničná-preprava-odpadu
- https://besoft.sk/preprava-odpadu-2026/

---

### Opportunity: Permit-submission packager for designers on the Portál výstavby

**Industry:**
Construction design and engineering: authorised designers (projektanti) and architects.

**Buyer:**
The owner of a small design or engineering office that files building permits for clients.

**Trigger / Why now:**
- The new Building Act 25/2025 Z.z. has been in force since 1 Apr 2025.
- Submissions are **electronic only** through vystavba.uupv.sk (URBION / Portál výstavby).
- Decree 60/2025 Z.z. sets the content and structure of submissions and of the construction documentation.

**Current workflow:**
1. Prepare the project documentation in CAD/PDF.
2. Collect statements from the affected authorities and utility companies.
3. Restructure the files to the decree's required content.
4. Upload them through the portal with an eID or qualified electronic signature (QES).
5. Track requests for completion.

**Pain:**
- The Slovak Chamber of Civil Engineers (SKSI) says permitting is held back by poor digitalisation, and that Slovakia lags "even developing countries".
- The neighbouring Czech portal shows the same pattern, with documented problems for designers.

**Existing solutions:**
- The state portal itself.
- Document-management tools and CAD vendors.
- Permit consultants and engineering firms doing the work by hand.

**The gap:**
A checklist/validator for Decree 60/2025 that structures the documents, plus tracking of authority statements per project. This is unverified as a real gap; I found no specific complaints about portal usability in Slovakia.

**Possible product:**
A pre-submission validator that packages the files and tracks the statements from affected authorities.

**MVP:**
A checklist generator by building type, file naming and structure checks, and a status tracker.

**Pricing hypothesis:**
€29–59 per month per designer, or €20 per project.

**How to find first customers:**
- The SKSI member directory of authorised engineers.
- The Slovak Chamber of Architects (SKA) directory.

**Risks:**
- No API. The value is mostly checklist-level, and the state may improve the portal.
- Willingness to pay is low.

**Kill condition:**
- Interviews show that portal problems are not where designers lose most of their time.
- Or the portal already enforces structure at upload.

**Score:** 4/10

**Sources:**
- https://www.zakonypreludi.sk/zz/2025-60
- https://static.slov-lex.sk/static/SK/ZZ/2025/60/20250401.html
- https://uupv.sk/storage/app/media/Tlacove%20spravy/2026/1776765335-3224-TS_UUPV%20SR_Rok%20s%20nov%C3%BDm%20stavebn%C3%BDm%20z%C3%A1konom_21042026.pdf
- https://sita.sk/vrealitach/vystavbu-brzdia-viacere-problemy-slovensko-v-elektronizacii-zaostava-aj-za-rozvojovymi-krajinami/

---

## Rejected after competitor research

- **E-invoicing / "digitálny poštár" for SMEs (from 1 Jan 2027).**
  - The trigger is strong: VAT payers must issue invoices and report data through a certified provider, non-VAT payers must be able to receive them, and there is a no-fine period only until 30 Jun 2027.
  - It is killed by saturation: the Finance Administration register lists 77 certified providers, there are comparison sites (epostari.sk lists 166 offerings), and accounting vendors such as Stormware/POHODA and KROS build it in.
  - Sources:
    - https://www.digitalnipostari.sk/zoznam-postarov
    - https://www.epostari.sk/
    - https://www.podnikajte.sk/pripravovane-zmeny-v-legislative/efaktura-od-2027
    - https://www.stormware.sk/dnload/E-book_1_E-fakturacia_SK.pdf
- **Waste-generator electronic records and ISOH quarterly reporting.** Killed by ENVITA (INISOFT), Envisys, ESPIK, Envis, Envirotree and BeSoft, which all already market 2027-ready waste records.
- **Accommodation foreign-guest reporting to police.** Killed because guest-register software is already part of almost all programs on the market, plus the official ePolice e-form and import of the provider's own register.
  - Sources:
    - https://www.podnikajte.sk/zakonne-povinnosti-podnikatela/hlasenie-pobytu-cudzincov
    - https://www.slovensko.sk/sk/zivotne-situacie/zivotna-situacia/_hlasenie-kratkodobeho-pobytu-c/
- **EUDR due diligence for wood.** Killed because Slovakia is low-risk, the regime is simplified and postponed (the exact current dates were not re-verified in this run), and many EUDR SaaS vendors exist.
  - Source: https://www.naturpack.sk/content/04/povinnosti-hospodarskych-subjektov-a-obchodnikov-podla-eudr-naradenia-europskej-unie-proti-globalnemu-odlesnovan.pdf

## Attractive problem, poor distribution

- **Third-country worker notifications to ÚPSVaR** (new e-service from 15 Jul 2026, single-permit reform under Act 128/2026).
  - The pain is real for temporary-work agencies, but notifications happen only at hire, exit or change of details.
  - Agencies probably use payroll/HR suites, and the agency registry is the only channel. Not verified further.
  - Sources:
    - https://www.najpravo.sk/kratke-spravy/nove-elektronicke-sluzby-v-oblasti-zamestnavania-cudzincov-od-15-7-2026.html
    - https://pravnenoviny.sk/zamestnavanie-cudzincov-jednotne-povolenie/
- **Permit packager for designers** (above). Designers are easy to reach, but the value is shallow and the state portal is the bottleneck.

## Too competitive

- E-invoicing and Peppol access (77 certified providers).
- Waste-generator records and ISOH reporting (6 or more local vendors).
- Accommodation guest registers.
