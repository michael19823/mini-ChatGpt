# Plan #8: Argentina SIGIRAO bridge for agrochemical dealers and agronomists

*"One sale or one application becomes a compliant prescription."* Global rank #8, original score 6.5.
Plan date: 2026-10-05. Source: `research/countries/argentina.md`. Verification used 15 web
searches in Spanish and English, which is the full budget. WebFetch was blocked, so every finding
below rests on search-result summaries. Anything not confirmed is marked **unverified** or
**estimate**.

---

## 1. Verdict up front

**Interview first. Do not write code yet. The case is weaker than the ranking suggests.** The legal
trigger is real and in force. Every red- or yellow-band sale and every application in Buenos Aires
province must now go through SIGIRAO, and failing to use it is sanctionable under art. 13 of Ley
10.699. But verification changed one important fact. The ministry says it has **"habilitado
herramientas de vinculación para que la carga de los documentos sea automática"**, meaning it has
enabled linking tools so that documents load automatically. In other words, the government itself
is opening an integration path. This makes third-party integration legitimate and possibly
API-based, which is good for feasibility. It also means dealers' existing ERP vendors can plug in
directly, which removes the gap the product depends on. Add a hard ceiling of about 820 dealers in
one province, and the result is a lifestyle business at best (realistic ceiling of about
US$10–15k MRR in Buenos Aires province), unless it becomes a multi-province prescription layer.

**The three deciding facts:**
1. **The mandate is live and per-transaction.** It comes from Res. MDA 567/2025, and the dealer
   deadline was extended to 1 March 2026 by Res. 104/2026. Non-use is sanctioned under Ley 10.699
   art. 13, and the ministry has a track record of fining dealers (dozens of 2021 sanction
   dispositions).
2. **The market is small and countable.** 164 pilot agronomías were "about 20%" of dealers, which
   implies about 820 dealers. The number of agronomists is unknown.
3. **The ministry offers "linking tools" for automatic loading.** Their details (API, file import,
   who may use them) are **unverified**. This single fact decides whether the product is an
   easy-to-build connector, which ERPs could copy, or a browser-automation hack, which is fragile
   but harder to copy.

---

## 2. Verification results

| Claim from report | What you found | Source | Status |
|---|---|---|---|
| Res. MDA 567/2025 makes SIGIRAO mandatory in Buenos Aires province | Confirmed. It creates and implements SIGIRAO. The implementation period was 30 days for dealers and 120 days for the rest. After that, non-use is sanctioned per art. 13 of Ley 10.699 | normas.gba.gob.ar/ar-b/resolucion/2025/567/549242; Bichos de Campo (régimen/sanciones) | Confirmed |
| Dealer deadline extended to 1 March 2026 (Res. 104/2026) | Confirmed: "da por prorrogado el periodo… para los establecimientos expendedores de agroquímicos hasta el 1 de marzo de 2026". No later postponement found | normas.gba.gob.ar/ar-b/resolucion/2026/104/575269 | Confirmed (no further postponement found) |
| Three documents: purchase prescription (or Remito A), application prescription, Acta/Registro de Condiciones Técnicas | Confirmed, plus georeferenced protected areas (schools, apiaries) and 2,000 m exclusion zones. A unified complaints protocol is now part of SIGIRAO | Ámbito; gba.gob.ar MDA news | Confirmed |
| Web only (mi.mda.gba.gob.ar) | **Changed.** There is a web version (mi.mda.gba.gob.ar/sigirao) **and a SIGIRAO mobile app**. The ministry claims it works on satellite-internet devices and offers "automated document loading tools" | Ámbito; gba.gob.ar news "lanzó un nuevo sistema para la RAO" | Changed |
| No API found | **Changed / partly contradicted.** The ministry says "se habilitaron herramientas de vinculación para que la carga de los documentos sea automática". The form these tools take (web service, file import, ERP link) and who may use them are not documented in any search result | Ámbito / gba.gob.ar (search summaries) | Unverified, but an integration channel probably exists |
| About 800 dealers; 164 pilot dealers ≈ 20% | Confirmed: "164 agronomías, alrededor de un 20% del total de las expendedoras" | Bichos de Campo; gba.gob.ar | Confirmed (about 820 is derived) |
| Number of agronomists / asesores técnicos | Not found. A legislative information request asked for these figures but no answer was located | HCD Buenos Aires province project 2949/2019 | Unverified |
| Sanctions exist | Ley 10.699 sanction dispositions against dealers exist (e.g., Disp. 436/2021, 1059–1063/2021). Fines are measured in provincial minimum salaries. The exact art. 13 amounts were not found. A related regime (Decreto-Ley 8785/77) caps fines at 200 minimum public-administration salaries, but **whether this applies to 10.699 is unverified** | normas.gba.gob.ar disposiciones 2021; search summary | Confirmed (fines exist), amount unverified |
| Province enforces aggressively | Context: in a separate regime (Ley 27.279, empty containers) the province fined about 70 agrochemical companies about ARS 783 million, "the largest environmental fine in Argentina". This shows political will to enforce on agrochemicals | Bichos de Campo; economiasustentable.com | Confirmed (adjacent regime) |
| No private tool feeds SIGIRAO | No vendor found mentioning SIGIRAO integration in Spanish or English searches (agro ERPs, Auravant, Agrofy, Softland, Synagro). Absence in search results is not proof | Searches 4, 5, 9, 15 | Confirmed as of search date (weak evidence) |
| Córdoba RFD as an expansion target | Confirmed: digital since 20 Sep 2021, 58,000 prescriptions and 2 M ha by March 2023. Access is via CIDI (citizen login). Data is published as open geoservices. No third-party submission API found | Balbi et al., IDERA 2023 | Confirmed; integration unverified |
| Agronomist training still running August 2026 | Not re-checked (search budget). Kept from report | Diario Actualidad, San Cayetano | Unverified (from report) |
| Ministry's system built in-house (Symfony) | The JAIIO/SADIO paper from the ministry describes the earlier digital prescription system as built in-house. It suggests a technical team that could build its own bulk import | ojs.sadio.org.ar JAIIO 830 | Confirmed (paper exists); details unverified |

---

## 3. Customer and problem

**Buyer.** The owner or administrative manager of an *agronomía*, an agrochemical retailer registered
as an *expendedor* under Ley 10.699. These are typically family firms with 3–20 staff that sell
seed, fertiliser and agrochemicals on account (cuenta corriente) to farmers, and often employ or
contract the agronomist who writes prescriptions.

**Users:**
- the agronomía's counter or admin staff, who issue the purchase prescription or Remito A;
- the in-house or independent *ingeniero agrónomo* (asesor técnico), who issues the application
  prescription and closes the Acta de Condiciones Técnicas after spraying;
- secondarily, the spraying contractor (aplicador).

**Job to be done.** "When I sell a red- or yellow-band product or prescribe a spray, let me produce
the legally valid SIGIRAO record without typing the same farm, lot, product and dose twice. Then
let me prove it to an inspector."

**Current workflow** (inferred; the times are **estimates** to be measured in interviews):

| Step | Who | Time (estimate) | Cost (estimate) |
|---|---|---|---|
| 1. Agronomist diagnoses the field and writes the recommendation (notebook, WhatsApp, Auravant/FieldView) | Agronomist | 15–30 min per visit (this is the core work, not overhead) | n/a |
| 2. Dealer invoices the sale in its ERP (ARCA e-invoice and remito) | Counter staff | 3–5 min | already sunk |
| 3. Re-key buyer, establishment, product (from the SIGIRAO dropdown), quantity and lot into SIGIRAO as a purchase prescription or Remito A | Counter staff or agronomist | 4–8 min per sale | 10–25 sales/day at peak → 1–3 h/day in season |
| 4. Agronomist issues the application prescription in SIGIRAO (diagnosis, dose, georeferenced lot, check against exclusion zones) | Agronomist | 5–10 min per prescription | an agronomist's time is worth about US$10–20/h (estimate) |
| 5. After the application, complete the Acta de Condiciones Técnicas (wind, temperature, humidity, time, operator, machine) | Agronomist or aplicador | 5–10 min, often done late from memory | Risk of false or late data |
| 6. Reconcile sales vs prescriptions, fix mismatches, answer inspections | Admin | 1–4 h/month | |
| 7. If operating across provinces, repeat in Córdoba RFD (CIDI login) or other systems | Agronomist | Duplicate of steps 3–5 | |

Peak season (spring-summer spraying, roughly October–February) concentrates volume. **That is
right now.**

**Cost of failure:**
- A sanction under Ley 10.699 art. 13: a fine measured in provincial minimum salaries, with
  closure or disqualification possible (exact amounts **unverified**).
- Inability to sell red- or yellow-band products without a prescription, which means lost sales.
- Professional exposure for the agronomist if an application near an exclusion zone goes wrong.
  The new complaints protocol makes this more likely to surface.

---

## 4. Product definition

**Core loop.** The dealer's sale is imported. The product maps to a SIGIRAO product, and the buyer
and establishment come from a library. A draft purchase prescription is created. A human clicks
"Submit to SIGIRAO" (via the official linking tool if available, otherwise a browser extension
fills the form). The SIGIRAO number is stored in a ledger. When the application is done, the
agronomist opens the draft on their phone, weather fills automatically, they confirm, and the Acta
is submitted.

**MVP (must-have):**
1. CSV or Excel import of daily sales from the 3–4 most common dealer ERPs (identified in
   interviews).
2. A product-mapping table: ERP SKU to SIGIRAO product, learned once and reused.
3. A library of customers, establishments and lots (with polygons), imported from past SIGIRAO
   records or entered once.
4. A Chrome extension that fills the SIGIRAO purchase-prescription or Remito A form from a draft.
   A human always clicks the final submit.
5. A ledger: sale ↔ SIGIRAO record number ↔ status, plus a daily list of unmatched sales (red- or
   yellow-band sales without a prescription).

**v1:**
- Application prescription and Acta with automatic weather from a historical weather API at the
  application time and location.
- A mobile-friendly PWA for agronomists.
- Integration through the ministry's official "vinculación" tool if it is an API or file import.
- A multi-dealer view for agronomists who serve several agronomías.
- An inspection-ready PDF per customer and season.

**Later:**
- Córdoba RFD and other provinces.
- An empty-container (Ley 27.279) traceability tie-in.
- Native connectors to dealer ERPs.
- White-label for agrochemical brand dealer programmes.

**Out of scope:**
- Agronomic recommendation (no AI agronomist).
- Exclusion-zone determination as a legal opinion: show the ministry's layers only.
- Invoicing or ERP replacement.
- Fully unattended submission without a human click, which is a liability and terms risk.
- Provinces other than Buenos Aires until 30 paying dealers.

**Key screens and flows:**
1. **Today's sales inbox:** imported sale lines with a status chip (needs prescription / draft
   ready / submitted / not required (green band)), and a bulk "prepare drafts" button.
2. **Mapping wizard:** unmapped SKUs and customers, with fuzzy suggestions against the SIGIRAO
   product list. This is done once and then rarely.
3. **Submit flow:** opens SIGIRAO in a tab with the extension side panel. One click fills each
   field, the user reviews and submits, and the extension captures the returned record number.
4. **Agronomist mobile Acta:** pick an open application prescription, tap "applied now". Weather
   and GPS fill automatically, the user adds operator and machine, then submits.
5. **Compliance ledger:** a filterable list of all records with gaps highlighted, exportable to
   PDF for an inspector.

---

## 5. Technical design

**Architecture:**
- **Web app (Laravel or Django monolith)** for the inbox, mapping, ledger and agronomist PWA.
- **Postgres with PostGIS** for lots and establishments, holding polygons and exclusion-zone
  layers if the ministry publishes them.
- **Chrome extension (Manifest V3)** that reads drafts from the API and fills SIGIRAO DOM forms
  inside the user's own logged-in session. Credentials are never stored server-side.
- **Import workers** that parse ERP CSV, XLS and TXT exports.
- **Weather service adapter** (Open-Meteo historical API or similar) for the Acta fields.
- **Hosting:** a single VPS or managed platform in a US or EU region (see data residency below),
  with nightly encrypted backups.

Data flow: ERP export → import → normalised sales → drafts → extension or official link →
SIGIRAO → record number back → ledger.

**Stack for a solo developer.** Laravel (PHP) or Django with HTMX, Postgres/PostGIS, and a
TypeScript Chrome extension. Reasons:
- these are boring, fast CRUD frameworks;
- PHP/Symfony matches the ministry's stack, which helps if their "vinculación" tooling is a
  REST/SOAP service with PHP examples (speculative);
- PostGIS handles lots and zones without extra services;
- no mobile native app, only a PWA.

**Data model:**
- Dealer (CUIT, Ley 10.699 registration number).
- User (role: admin, counter, agronomist, with professional enrolment).
- Customer (CUIT, RENSPA if used).
- Establishment and Lot (polygon).
- Product (ERP SKU) ↔ SigiraoProduct (registration number, toxicological band).
- SaleLine.
- PurchasePrescription / RemitoA (draft → submitted, SIGIRAO id).
- ApplicationPrescription.
- TechnicalConditionsAct (weather snapshot, operator, machine).
- SubmissionLog (who, when, payload hash, screenshot).
- Mapping.

**Integrations:**

| Integration | Method | Fallback |
|---|---|---|
| SIGIRAO submission | The official "herramientas de vinculación" if they are an API or file import (to confirm with the ministry, Dirección de Fiscalización Vegetal) | Browser extension that fills forms in the user's session; at worst, a printable "copy panel" with one-click copy per field |
| SIGIRAO product list | Scrape the dropdown via the extension during a logged-in session, or the official list | Manual mapping by the user |
| Dealer ERPs | CSV, XLS or TXT exports (formats collected in interviews) | Manual entry form or paste from the invoice |
| ARCA e-invoices | Optional: parse invoice PDFs or ARCA "Mis Comprobantes" exports | Manual |
| Weather | Open-Meteo or similar historical hourly API | Manual entry with on-screen hints |
| Protected areas / exclusion zones | Ministry geolayers if published (Córdoba publishes its own as geoservices; Buenos Aires province **unverified**) | Show SIGIRAO's own check only |

**Rules engine and validation:**
- Is a prescription required? Decided by the product's toxicological band (red or yellow), from
  the SIGIRAO product list.
- Remito A vs purchase prescription: the conditions come from the resolution annex, to be read in
  full.
- Mandatory fields per document.
- Dose within the label range (later).
- The Acta must follow the application prescription date.
- Flag weather values outside the prescription's conditions (for example, wind above a threshold
  is a warning only).
- Sale lines with no prescription after 24 h trigger an alert.

**Security, privacy and data residency:**
- **Ley 25.326 (Protección de Datos Personales)** applies to farmer names, CUITs and locations.
  Register the database with the AAIP (Agencia de Acceso a la Información Pública) if required.
- International transfer is permitted to countries with adequate protection or under the AAIP
  model contractual clauses. Use the AAIP standard clauses in the terms (requirement level
  **unverified**; confirm with a local lawyer).
- No SIGIRAO or Mi MDA passwords are stored. The extension operates in the user's session only.
- Encrypt at rest, use per-tenant row-level isolation, and keep an access log.

**Audit trail and liability:**
- Every submission stores the exact payload, the submitting user, a timestamp and a DOM screenshot
  or hash.
- The legal signer remains the agronomist or dealer, and the product never clicks the final submit
  alone.
- The terms state that the software is a data-preparation tool and that the user is responsible
  for the sworn content.
- If a submission is wrong, the ledger shows who approved it, and the user corrects it in SIGIRAO
  (whether SIGIRAO allows annulment or rectification is **unverified**).

**Localisation:**
- Spanish (Rioplatense, voseo in the UI copy).
- ARS pricing, indexed monthly or quarterly.
- CUIT validation (mod-11).
- Matrícula numbers for agronomists.
- Dates in DD/MM/AAAA, hectares, and litres or kg.

**Testing:**
- Record real SIGIRAO form HTML (from a pilot customer's session, with permission) as fixtures.
- Run Playwright tests of the extension against saved snapshots.
- Run a daily synthetic check in a test account (if the ministry provides one) to detect form
  changes.
- Use golden-file tests per ERP import format.
- Shadow-run with the first 3 dealers: they enter manually, we generate drafts, then we compare.

---

## 6. Build plan

| Week | Milestone | Dev-weeks |
|---|---|---|
| 0–3 | Validation only (section 13): 12+ interviews, collect ERP export samples, screen-record SIGIRAO entry, **ask the ministry what the "vinculación" tools are** | 0 (founder time) |
| 3 | Go/no-go. If the official API exists and the ERPs already use it, kill or pivot to "connector for ERP vendors" | |
| 4–5 | Data model, import of 2 ERP formats, product and customer mapping | 2 |
| 6–7 | Chrome extension filling the purchase prescription and Remito A; ledger | 2 |
| 8 | Concierge pilot with 3 dealers (founder or local partner maps their catalogue by hand) | 1 |
| 9–10 | Fixes. **First paying customer, target week 10** (pre-sold at a pilot price) | 1.5 |
| 11–14 | Application prescription and Acta with weather; agronomist PWA | 3 |
| 15–18 | Official integration if available; PDF inspection pack; multi-dealer agronomist view | 3 |
| 19–20 | v1 hardening, onboarding self-serve, payment automation | 2 |

That is **about 9.5 developer-weeks to the first paying customer** (week 10 calendar) and about
17.5 developer-weeks to v1 (week 20).

**Concierge MVP (done by hand at first):**
- SKU mapping;
- building each dealer's customer and lot library from their past SIGIRAO records or Excel;
- ERP export setup over a video call;
- a weekly reconciliation report emailed manually.

---

## 7. Go-to-market

**Ideal first 10 customers:**
- **Mid-size agronomías (3–10 staff, 10+ prescription-requiring sales a day in season)** in the
  core agricultural belt: north and west Buenos Aires province (Pergamino, Junín, 9 de Julio,
  Trenque Lauquen) and the southeast (Tandil, Necochea, Tres Arroyos, San Cayetano).
- **Priority: the 164 SIGIRAO pilot dealers.** They are already digital and have opinions. Their
  list is not public, so reach them via the ministry, CEDASAB or the brand distributors.
- Distributors of major brands (Bayer, Syngenta, Corteva, Nufarm, Rizobacter networks), which have
  higher volume and admin staff.

**How to reach them:**
- Buenos Aires province's Ley 10.699 registry of expendedores. Ask the Ministry of Desarrollo
  Agrario for the public list; whether it is online is **unverified**.
- CEDASAB (Buenos Aires province dealer chamber) and the Colegio de Ingenieros Agrónomos de la
  Provincia de Buenos Aires (CIAPBA).
- Municipal SIGIRAO training sessions (as in San Cayetano).
- Google Maps "agronomía" scraping by partido (district).
- WhatsApp is the main business channel.

**Outreach angles (Spanish):**
- "¿Cuántas recetas cargaste en SIGIRAO esta semana? Te las dejamos listas desde tu factura."
  (How many prescriptions did you enter in SIGIRAO this week? We prepare them straight from your
  invoice.)
- "Ninguna venta de banda roja o amarilla sin receta: te avisamos antes de que llegue la
  inspección." (No red- or yellow-band sale without a prescription: we warn you before the
  inspector arrives.)
- For agronomists: "El Acta de Condiciones Técnicas se completa sola con el clima del momento de
  la aplicación." (The technical-conditions record fills itself with the weather at application
  time.)

**Channel partners:**
- Local agro ERP vendors and implementers. These are partners or acquirers, not only
  competitors.
- Accounting studios that serve agronomías.
- Brand distributor programmes: offer as a dealer benefit.
- CIAPBA, for continuing-education talks.

**Launch timing:**
- The spraying season runs October–March, which is **now**. Validation in October 2026, pilot in
  December 2026, and paid conversion before the 2027 fine-crop season (May–July) and the
  2027/28 summer campaign.
- Missing December means the first heavy season is spent selling with no product.

**Content and SEO (Spanish):**
- "cómo cargar receta agronómica SIGIRAO" (how to enter a SIGIRAO prescription);
- "Remito A SIGIRAO";
- "Acta de condiciones técnicas de trabajo";
- "receta agronómica obligatoria provincia de Buenos Aires 2026";
- "zona de exclusión 2000 metros escuelas";
- short YouTube screen recordings.

Ministry documentation is thin, so tutorials can rank.

---

## 8. Pricing and unit economics

**Tiers (billed in ARS, indexed monthly to the dollar or CPI):**
- **Agronomist solo:** about US$12/month equivalent.
- **Dealer Básico** (1 branch, up to 300 records/month): about US$39.
- **Dealer Pro** (multi-user, Acta and agronomist seats, inspection pack): about US$69.
- **Multi-branch distributor:** from about US$150.

Setup and mapping fee: about US$100 one-off (it covers the concierge work).

**Expected ACV:** dealers about US$540/year (blended US$45/month); agronomists about US$144/year.

**CAC estimate by channel (estimates):**
- Direct WhatsApp and phone plus a visit: US$150–300 per dealer, including travel
  amortisation.
- Association or brand-programme referral: US$50–100.
- SEO for agronomists: US$10–30.
- Payback: 4–7 months for dealers.

**Gross margin:** about 85–90%. Hosting is minimal. The main cost of revenue is payment and
withholding fees (about 6–10% in Argentina) plus support time.

**Payment rails:**
- Mercado Pago subscriptions (requires an Argentine CUIT and entity, or a local partner's
  account).
- Or a merchant of record such as Paddle or Lemon Squeezy charging cards in USD. **Whether these
  support Argentine buyers in ARS is unverified.** Many small dealers prefer bank transfer with an
  ARCA factura, which a foreign MoR cannot issue.
- Realistic setup: a local partner or a *monotributista* (simplified-regime taxpayer) bills
  locally and remits, or the founder forms an Argentine SAS (see section 9).

**FX risk:**
- The peso is volatile and inflation is still material (estimate).
- Index prices monthly and keep USD-denominated reference prices.
- Collect early in the month and convert promptly.
- Accept the risk of price resistance after devaluations.

---

## 9. Company and legal setup

- **Entity.**
  - Start with no Argentine entity during validation.
  - For paid customers, choose between:
    - (a) a local partner who is *monotributista* or a small SRL/SAS invoicing as reseller, on a
      revenue-share contract; or
    - (b) an Argentine **SAS**, which is quick to form but requires a local domicile and
      administrator (**unverified** timing in 2026).
  - Dealers will want an ARCA *factura*, so some local invoicing presence is practically
    required.
- **Local representative.** A part-time agronomist or ag-salesperson in the north of Buenos Aires
  province, for visits, onboarding and ministry contact.
- **Tax.**
  - Argentina applies 21% IVA to digital services supplied by non-residents, collected via card
    issuers and payment intermediaries (general rule; 2026 specifics **unverified**).
  - Locally invoiced revenue pays IVA and Ingresos Brutos (provincial gross-receipts tax).
  - Get an accountant.
- **Contracts and terms.**
  - SaaS terms stating that the user is the declarant and the software is a preparation aid.
  - A data-processing annex per Ley 25.326.
  - An acceptable-use clause for the extension.
  - Explicit consent to store screenshots.
- **Professional liability.** Seek errors-and-omissions cover once revenue allows. Avoid giving
  agronomic advice. Never auto-submit.

---

## 10. Financial model (24 months)

**Assumptions:**
- Founder salary is excluded (sweat equity).
- Dealer ARPU is US$45 and agronomist ARPU is US$12.
- Net adds are after about 2%/month churn.
- Fixed costs:
  - infrastructure and tools: US$150/month;
  - local partner retainer: US$600/month from month 3;
  - accountant: US$150/month from month 3;
  - part-time support: US$600/month from month 19.
- Payment and withholding fees are 6% of MRR.
- Travel: US$2,500 in month 2, US$2,000 in month 8 and US$2,000 in Q5.
- Legal setup: US$1,500 in month 3.
- First revenue in month 3 (pilot conversions).

| Period | Dealers | Agronomists | MRR (US$) | Costs in period (US$) | Net in period (US$) | Cumulative cash (US$) |
|---|---|---|---|---|---|---|
| M1 | 0 | 0 | 0 | 150 | -150 | -150 |
| M2 | 0 | 0 | 0 | 2,650 | -2,650 | -2,800 |
| M3 | 2 | 0 | 90 | 2,405 | -2,315 | -5,115 |
| M4 | 5 | 0 | 225 | 914 | -689 | -5,804 |
| M5 | 9 | 5 | 465 | 928 | -463 | -6,267 |
| M6 | 14 | 10 | 750 | 945 | -195 | -6,462 |
| M7 | 19 | 15 | 1,035 | 962 | +73 | -6,389 |
| M8 | 25 | 20 | 1,365 | 2,982 | -1,617 | -8,006 |
| M9 | 30 | 28 | 1,686 | 1,001 | +685 | -7,321 |
| M10 | 35 | 35 | 1,995 | 1,020 | +975 | -6,346 |
| M11 | 40 | 42 | 2,304 | 1,038 | +1,266 | -5,080 |
| M12 | 45 | 50 | 2,625 | 1,058 | +1,567 | -3,513 |
| Q5 (M13–15) | 55 | 70 | 3,315 | 5,240 | +3,760 | +247 |
| Q6 (M16–18) | 65 | 90 | 4,005 | 3,366 | +7,734 | +7,981 |
| Q7 (M19–21) | 75 | 105 | 4,635 | 5,283 | +7,767 | +15,748 |
| Q8 (M22–24) | 85 | 120 | 5,265 | 5,391 | +9,459 | +25,207 |

(The MRR column shows the end of each period. Quarterly net uses the average MRR across the
quarter.)

- **Operating break-even: month 7, excluding founder salary.** Cumulative cash turns positive in
  **about month 15**.
- **Month-12 MRR:** about US$2.6k. **Month-24 MRR:** about US$5.3k. This is not a full-time
  salary for a Western founder.
- **Realistic ceiling (Buenos Aires province only):** about 820 dealers × 25% share × US$45 is
  about US$9.2k MRR, plus about 3,000 active agronomists (**estimate**, unverified) × 10% × US$12
  is about US$3.6k. Total **about US$12.8k MRR (about US$155k ARR)**. Adding Córdoba, Santa Fe,
  Entre Ríos and San Luis could reach 2–2.5× **if** those systems accept third-party input.

---

## 11. Team and founder fit

**Skills needed:**
- full-stack web development and browser-extension/automation skills;
- basic GIS (PostGIS);
- **fluent Rioplatense Spanish**;
- comfort selling by WhatsApp and in person in rural towns;
- enough agronomy literacy to talk about bands, doses and Actas.

**Non-local founder.** Realistic for the software, but **not** for distribution without a local
partner. Dealers buy from people they know, and invoicing needs local presence.

**Local help:**
- one agronomist or ag-salesperson partner (equity or revenue share);
- an Argentine accountant;
- a lawyer for terms and data protection (a few hours).

The ideal team of two is a developer plus a local agronomist with dealer relationships.

---

## 12. Risks and mitigations

| Risk | Type | Likelihood | Mitigation |
|---|---|---|---|
| The ministry's "vinculación" tools let dealer ERPs integrate natively, closing the gap | Competitive / platform | **High** (it is stated policy) | Find out in week 0. If true, pivot to being the integration vendor *for* small ERPs, or serve the agronomist-side Acta workflow that ERPs don't touch |
| SIGIRAO form changes break the extension | Platform | Medium–high | Snapshot tests, a daily canary, a copy-panel fallback, and fast patch releases |
| Terms of use forbid automation, or the ministry blocks extensions | Government | Low–medium (unverified) | Ask the ministry openly and position the product as a helper. A human always submits |
| Change of provincial government (the 2027 election) relaxes Ley 10.699 enforcement or SIGIRAO | Regulatory | Medium | Diversify to other provinces' prescriptions. Value remains as record-keeping |
| Dealers tolerate manual entry (low volume) | Market | Medium | Kill thresholds in section 13 |
| A local agro ERP vendor (Synagro, Softland agro, others) adds a SIGIRAO module | Competitive | Medium | Partner early; offer a white-label connector |
| ARS devaluation erodes revenue | FX | High | Monthly indexation, USD reference pricing, prompt conversion |
| Collection friction for a foreign founder | Payment | High | Local partner invoicing; Mercado Pago |
| An incorrect submission leads to a sanction and the customer blames the vendor | Liability | Low–medium | Human-in-the-loop, payload logs, terms |

---

## 13. Validation plan before writing code

**Interview targets (15):**
- 6 agronomía owners or admins (at least 3 from the 164-dealer pilot, via CEDASAB or brand
  distributors), across north, west and southeast Buenos Aires province;
- 3 independent agronomists (via CIAPBA or municipal training contacts);
- 1 spraying contractor;
- 2 local agro ERP vendors or implementers ("Do you integrate with SIGIRAO? Are you planning
  to?");
- 1 call or email to the **Dirección de Fiscalización Vegetal / MDA SIGIRAO team** asking what the
  "herramientas de vinculación" are, who can use them, and whether a test environment exists;
- 1 CEDASAB staff member;
- 1 Córdoba asesor fitosanitario (expansion check).

**Questions:**
1. How many SIGIRAO records (purchase, Remito A, application, Acta) do you create per day in peak
   season and off-season?
2. Show me one. How many minutes does it take? (Time it on a screen share.)
3. Who enters them? What do they re-type from your invoice or ERP?
4. Which ERP do you use, and can it export daily sales?
5. Have you used the automatic linking tools? Does your ERP vendor offer SIGIRAO integration?
6. Have you been inspected or sanctioned since March 2026? What did the inspector ask for?
7. What would you pay per month to have the drafts prepared from your sales?
8. Agronomists: when do you fill the Acta? Where do the weather data come from?

**Pass / fail thresholds:**
- **Pass:**
  - at least 6 of 10 dealers report 10 or more prescription records per day in season and 4 or
    more minutes each (about 40+ min/day);
  - at least 4 say they would pay US$30+ per month;
  - no major ERP vendor is shipping SIGIRAO integration within 6 months;
  - the ministry confirms that third-party tools may be used, or does not object.
- **Fail (kill):**
  - the median dealer handles fewer than 10 records/day or spends under 2 minutes each;
  - or the official linking tool is already integrated by the dominant dealer ERPs;
  - or the ministry prohibits automation and offers no file import.

**Pre-sale test:**
- Offer a "temporada 2026/27" pilot: US$100 setup plus 3 months at US$29, paid in advance via
  Mercado Pago or transfer, with a refund if fewer than X records are prepared.
- Target 5 paid pilots from 15 conversations before week 4. If fewer than 3 pay, stop.

---

## 14. Expansion path

**Adjacent workflows:**
- empty-container traceability (Ley 27.279; the province has shown it will levy large fines);
- spraying-contractor (aplicador) job records and machine registration;
- municipal ordinance compliance (buffer zones vary by municipality, which adds fragmentation);
- SENASA / RENSPA data reuse;
- input-sale traceability for export certification (EU deforestation-free and sustainability
  buyers).

**Other provinces with the same pattern:**
- Córdoba RFD (digital since 2021, CIDI login, open geodata);
- San Luis (digital prescription);
- Santa Fe and Entre Ríos (prescription rules per CASAFE's provincial summary; digital status
  **unverified**).

**Other countries:**
- Brazil's *receituário agronômico*: already productised by Agrotis, Siagri and others, so it is
  an example rather than a target.
- Uruguay and Paraguay (**unverified**).
- Peru's controlled agri-input registers (ranked separately).

---

## 15. Reassessment scorecard

The original report gave only an overall 6.5, so the "original" column shows **per-criterion scores
implied by the report's text** (estimate).

| Criterion | Original (implied) | New | Reason |
|---|---|---|---|
| Pain | 7 | 6 | Re-keying is real, but per-record time is unmeasured and the ministry claims a fast UI plus automatic loading tools |
| Frequency | 8 | 8 | Per sale and per application, concentrated in the spraying season |
| Mandatory nature | 9 | 9 | Confirmed: Res. 567/2025 is in force, the dealer deadline has passed, and art. 13 sanctions apply |
| Fragmentation | 6 | 6 | Each province has its own system; Buenos Aires province alone is a single format |
| Existing competition | 7 | 6 | Still no private SIGIRAO tool found, but an official integration path invites ERPs |
| Incumbent gap | 7 | 5 | The "vinculación" tools may let ERPs close the gap quickly |
| Buyer accessibility | 7 | 6 | About 820 dealers, but the registry and pilot list are not confirmed public; reached via associations and brands |
| Willingness to pay | 5 | 5 | Small family dealers, ARS pricing, about US$30–70/month |
| MVP simplicity | 7 | 7 | CSV import plus extension is simple; official link may make it simpler |
| Distribution | 6 | 5 | Requires a local partner and in-person selling in rural Buenos Aires province |

**New overall score: 5.5/10** (was 6.5). The change is more than 1 point because verification
showed two things. First, the ministry already provides automatic loading or linking tools, which
weakens the double-entry gap and invites ERP vendors to integrate natively. Second, the market is
capped at about 820 dealers in one province, which leaves a realistic ceiling of about US$13k MRR.
It remains worth interviews because the mandate is in force now and no private tool was found.

---

### Sources

- Res. MDA 567/2025: https://normas.gba.gob.ar/ar-b/resolucion/2025/567/549242
- Res. 104/2026 (dealer extension to 1 March 2026): https://normas.gba.gob.ar/ar-b/resolucion/2026/104/575269
- Res. 595/2025 (related, from search results; content not checked): https://normas.gba.gob.ar/ar-b/resolucion/2025/595/549855
- Ámbito, SIGIRAO obligatorio: https://www.ambito.com/ambito-nacional/buenos-aires-implementa-el-sigirao-un-sistema-obligatorio-controlar-el-uso-agroquimicos-n6214534
- MDA news, launch of the new RAO system: https://gba.gob.ar/desarrollo_agrario/Noticias/el_ministerio_de_desarrollo_agrario_lanz%C3%B3_un_nuevo_sistema_para_la_rao
- Bichos de Campo, régimen and sanciones: https://bichosdecampo.com/rige-un-nuevo-regimen-para-la-aplicacion-de-agroquimicos-en-la-provincia-de-buenos-aires-para-evitar-sanciones-habra-que-declarar-la-receta-agronomica-en-una-nueva-aplicacion-llamada-sigirao/
- Bichos de Campo, 164 pilot agronomías: https://bichosdecampo.com/la-receta-agronomica-ahora-100-digital-el-ministerio-de-desarrollo-agrario-bonaerense-presento-un-nuevo-sistema-que-ya-fue-testeado-por-mas-de-160-expendedores-de-agroquimicos/
- Resolution PDF hosted by Bichos de Campo: https://bichosdecampo.com/wp-content/uploads/2025/11/RS-2025-41517140-GDEBA-MDAGP-1-1.pdf
- Ley 10.699 sanction dispositions (examples): https://normas.gba.gob.ar/ar-b/disposicion/2021/436/259620 and https://normas.gba.gob.ar/ar-b/disposicion/2021/1063/261099
- Decreto 499/91: https://www.gba.gob.ar/static/agroindustria/docs/legislacion/Decreto_499-91.pdf
- Container fine (about ARS 783 M): https://bichosdecampo.com/en-provincia-de-buenos-aires-multan-por-casi-800-millones-de-pesos-a-las-empresas-de-agroquimicos-por-no-cumplir-plenamente-con-el-retiro-de-los-bidones-vacios/
- HCD Buenos Aires province information request on registry counts: https://intranet.hcdiputados-ba.gov.ar/proyectos/15-16D2949012019-09-0414-56-15.pdf
- Córdoba RFD (IDERA 2023): https://opendata.fi.uncoma.edu.ar/jornadasIDERA/trabajos2023/Balbi2_etal.pdf
- JAIIO/SADIO paper on the ministry's prescription system: https://ojs.sadio.org.ar/index.php/JAIIO/article/download/830/671
- Softland agro (generic ERP, no SIGIRAO module found): https://softland.com/ar/soluciones-por-industria/agroindustrias/
- Synagro: https://synagroweb.com/
- Agrotis (Brazil receituário): https://www.agrotis.com/en/segments/agronomic-recipe
