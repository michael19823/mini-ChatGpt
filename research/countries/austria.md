# Austria: country research

Research depth: light (4 searches, search budget nearly spent). Austria is a high-income, digitised market with strong incumbents. No accessibility problems for a foreign solo founder (EU, SEPA, GDPR applies). Many findings below are unverified; flagged as such.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Demolition / asbestos remediation | New authorised-employer list (GKV 2025 para 26) plus per-job pre-notification to Arbeitsinspektorat | Maybe (weak) | Real trigger, but a small niche; competitors not diligenced |
| Waste collectors/treaters | EDM (edm.gv.at) registration and reporting, new Green List reporting via DIWASS | Maybe (weak) | Government-provided EDM portal is free; ERP vendors likely cover it (unverified) |
| Refrigeration/HVAC (F-gas) | Leakage checks, logbooks, law change due 2025/26 | Reject | Dedicated tools exist (VDKF-LEC is German; Austrian equivalents unverified), 2027 trigger |
| B2G invoicing | e-Rechnung.gv.at / Peppol / ebInterface | Reject | Mandatory B2G already served by free federal portal and every accounting package |
| B2B e-invoicing (ViDA) | B2B still voluntary | Reject for now | No Austrian mandate confirmed; very crowded (Peppol access points) |
| Others (pharmacies, vets, funeral, trucking, food) | Not researched | Unscreened | Budget exhausted |

## Opportunities

### Opportunity: Asbestos/demolition authorisation and pre-notification tracker

**Industry:**  
Demolition, asbestos remediation, roofing and building trades

**Buyer:**  
Owner or safety officer of small construction/roofing/demolition firms (Dachdecker, Spengler, Holzbau, Abbruch)

**Trigger / Why now:**  
Grenzwerteverordnung 2025 (in force 1 Jan 2026) requires employers to be "authorised" via a new list at the Arbeitsinspektorat (transition until 31 Mar 2026). Each asbestos job must be notified in writing before work starts. The new limit is 10,000 fibres/m3.

**Current workflow:**  
1. Firm submits the initial registration documents to be listed.
2. Per job, staff fill in a WKO PDF form (weakly or strongly bound asbestos) and send it to the Arbeitsinspektorat.
3. Records, worker training and exposure documents are kept in files or spreadsheets.

**Pain:**  
Paper/PDF forms provided by WKO trade groups. Evidence of deep pain (penalties, volume) was not found. Unverified.

**Existing solutions:**  
WKO PDF forms, consultants, generic construction software and safety-management tools (not checked).

**The gap:**  
Per-job notification generation plus worker certificate and medical-exam expiry tracking. Gap unproven.

**Possible product:**  
Form-filler and document tracker that produces the notification and an audit pack per job.

**MVP:**  
PDF form generation, a deadline tracker for training and medical exams, and a per-job dossier.

**Pricing hypothesis:**  
EUR 30-60/month (estimate).

**How to find first customers:**  
WKO trade-group member lists (Dachdecker, Holzbau) and the Arbeitsinspektorat authorised-employer list, if public (unverified).

**Risks:**  
Small niche (probably low hundreds of firms), the transition deadline has passed so urgency is fading, and the filing is low-frequency for most firms.

**Kill condition:**  
Fewer than about 300 authorised firms, or the ministry launches an online notification form.

**Score:** 3/10

**Sources:**  
- https://www.wko.at/information-consulting/entsorgungs-ressourcenmanagement/abbruch-und-asbestsanierungsarbeiten
- https://www.forum-media.at/news/Arbeitssicherheit-Brandschutz/Grenzwerteverordnung-2025-die-Neuerungen-seit-01.01.2026
- https://www.wko.at/tirol/information-consulting/entsorgungs-ressourcenmanagement/meldepflicht-ermaechtigte-arbeitgeber-asbest

### Opportunity: EDM / DIWASS waste-shipment reporting bridge

**Industry:**  
Waste management and recycling

**Buyer:**  
Small waste collectors and recyclers that ship Green List waste across borders

**Trigger / Why now:**  
EU Waste Shipment Regulation 2024/1157 introduces Green List reporting through the DIWASS system. Austria connects via the EDM interface, with full functionality targeted for 31 Dec 2026.

**Current workflow:**  
1. Register in edm.gv.at.
2. Enter shipment data in the portal.
3. Re-key data from the ERP or weighbridge system.

**Pain:**  
Likely duplicate entry. Unverified.

**Existing solutions:**  
The free EDM portal; waste-industry ERP vendors (not identified, unverified).

**The gap:**  
An API/CSV bridge from the operator's own system to the national interface. Unproven.

**Possible product:**  
CSV/ERP-to-EDM/DIWASS uploader with validation.

**MVP:**  
CSV validator and submitter. Depends on the EDM interface being open to third parties (unverified).

**Pricing hypothesis:**  
EUR 50-150/month (estimate).

**How to find first customers:**  
The EDM registry is not public. WKO waste-management associations (Entsorgungs- und Ressourcenmanagement).

**Risks:**  
The interface may not be open, the market is tiny, and the schedule may slip.

**Kill condition:**  
No public API, or ERP vendors announce DIWASS support.

**Score:** 3/10

**Sources:**  
- https://www.bmluk.gv.at/themen/klima-und-umwelt/abfall-und-kreislaufwirtschaft/abfallwirtschaft/abfallverbringung/gruene-liste-meldungen.html
- https://www.forum-media.at/abfallwirtschaft/inhalt/-21.-Registrierungs-und-Meldepflichten-fuer-Abfallsammler-und-behandler-und-gemaesz-EG-VerbringungsV-Verpflichtete/18831

## Rejected after competitor research

- **F-gas leakage logbooks (refrigeration/HVAC):** dedicated certified-logbook software exists (VDKF-LEC in the DACH region; the Austrian equivalent was not verified). The new regulation's mobile-equipment scope only starts March 2027. Source: https://www.diekaelte.de/sites/default/files/ulmer/file_175205.pdf
- **B2G e-invoicing:** killed by the free federal portal e-Rechnung.gv.at, ebInterface and Peppol support in accounting software. B2B remains voluntary (verify, since ViDA timing is unclear). Source: https://www.b2brouter.net/se/international/austria/

## Attractive problem, poor distribution

None identified.

## Too competitive

- E-invoicing and Peppol access (B2B/B2G).

## Notes

Not screened due to budget: pharmacies, veterinary, funeral, trucking/cabotage, food traceability, EU Deforestation Regulation or CSRD exporters, and building-energy certificates. A later pass should check these.
