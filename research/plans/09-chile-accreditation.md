# Plan 09: Chile, subcontractor "accreditation once, push everywhere" pack

*Development plan written 2026-10-05 from `research/countries/chile.md` (ranked #9 globally, score 6.5).
Verification used 15 WebSearch queries in Spanish and English. WebFetch was blocked, so every
finding below comes from search-result summaries. Figures marked "estimate" are mine; "unverified"
means I could not confirm the point in this session.*

> **Verification changed the picture.** The report's kill condition was "a dominant portal already
> offers contractors a free multi-client passport". No dominant portal has done that yet. But
> between April 2025 and September 2026 at least three vendors launched **contractor- and
> worker-side multi-client accreditation passports aimed at Chilean mining**: MyPass Global
> (Expomin, April 2025), Mine Pass (a Mine Class spin-off, launched at Exponor in June 2026) and
> MINPASS (Safe Mining, September 2026). A fourth, ACREDIX, sells multi-platform accreditation to
> salmon-farming contractors. The large miners themselves (17 Consejo Minero members, plus Sonami,
> Aprimin and the CChC) are also standardising entry requirements under a "pasaporte minero".
> The *mining worker-file* half of the idea is now contested. The remaining gap is narrower: the
> **company-level monthly labour pack** (F30-1, payslips, contribution receipts, payroll book) for
> **non-mining** contractors who serve several mandantes on different portals. That gap may be
> real, but it's thinner and harder to defend than the report assumed.

---

## 1. Verdict up front

**Interview first, with a narrowed wedge. Do not build the mining version.** I would not write
code yet. I would spend three to four weeks interviewing accreditation officers at
**construction, industrial-maintenance, forestry/pulp and salmon-farming contractors** that serve
two or more mandantes on different portals. I'd build only if at least 6 of 12 say they would pay
about CLP 150k a month for a monthly-pack mapper. Mining is where the pain is loudest, and that's
exactly why funded "passport" startups and an industry homologation effort are converging on it.

The three facts that decide it:

1. **The passport space is no longer empty.** Mine Pass, MINPASS and MyPass Global all market a
   reusable, contractor- or worker-owned accreditation credential across mandantes in Chile, and
   all three launched in or entered Chile during the last 18 months. ACREDIX already sells the
   "multi-platform, preventive checklist, expiry alerts" pitch to salmon contractors.
2. **The pain and the money are real.** Dedicated "acreditación y control documental" jobs are
   advertised constantly. Mandantes withhold payment and site access under joint liability
   (Ley 20.123). The industry press cites miners losing about US$500k a year to accreditation
   delays. MINPASS cites a 39-day average accreditation time. Willingness to pay is anchored by
   a clerk's salary.
3. **There is still no integration path.** None of the client portals (SIGA, Webcontrol,
   Pronexo, ControlDoc, SUCAL) exposes a contractor-side API that I could find. The product can
   only generate correctly named bundles and, at most, use browser-assisted upload, which may
   breach portal terms. The defensible core is therefore a rules library (per portal, per
   mandante), not an integration. The well-funded passport vendors can copy that, and they have
   an incentive to.

---

## 2. Verification results

| Claim from report | What you found | Source | Status |
|---|---|---|---|
| Contractors re-upload the same monthly pack (F30-1, payslips, Previred receipts) to each client portal | Confirmed in substance. Trazit and the portal manuals list the monthly F30-1, signed payslips, AFP/health/unemployment receipts and attendance. A Webcontrol mandante-specific "Instructivo de certificación mensual" (Yamana) shows per-mandante instructions | trazit.co/blog/ley-subcontratacion-chile-gestion-documental; yamana.webcontrol.cl/ese/soporte/ManualAcreditacionMML_EECC.pdf | Confirmed |
| F30-1 is requested from the DT | The F30-1 is now requested through the **Mi DT** portal by the company's electronic labour representative and downloaded as a PDF from "Mis solicitudes" (DT news "a partir del 24 de marzo"; the year was not visible in the snippet). The DT issues it in 8 business days (5 for fewer than 25 workers) | dt.gob.cl/portal/1627/w3-article-123760.html; dt.gob.cl/portal/1627/w3-article-124815.html; dt.gob.cl/portal/1626/w3-article-94132.html | Changed (channel moved to Mi DT; year unverified) |
| Ministry of Labour accredits third-party "verification entities", e.g. Webcontrol Certify (Res. Ex. 903, July 2026) | The Res. Ex. N°903 PDF exists on mintrab.gob.cl (uploaded 2026/07). The Mintrab list of certifying entities shows Webcontrol Certify SpA (RUT 77.106.722-0) under earlier resolutions 1421/2023 and 1466/2024. A snippet says the INN accreditation runs to 8 Nov 2028. Certilap is another certifier. These entities certify compliance instead of the DT's F30-1 | mintrab.gob.cl/wp-content/uploads/2026/07/ResEx_N903_Webcontrol.pdf; mintrab.gob.cl/lista-de-empresas-certificadoras/; certilapchile.cl | Confirmed |
| Codelco SUCAL covers ~80,000 contractor workers | Not re-checked (search budget). Codelco's SIIRLL-VP portal for structural-project contractors (workers, vehicles and machinery, own and subcontracted) is confirmed | codelco.com/proveedores/portal-de-acreditacion-para-las-empresas-contratistas-de-vicepresidencia | Unverified (80k figure) |
| "All existing tools sit on the client side" / no contractor-side multi-client passport | **Contradicted.** Mine Pass (Mine Class spin-off, Exponor June 2026): AI accreditation and document management "of workers, contractor companies and mining companies". MINPASS (Sept 2026): "one system, one credential, zero friction" for workers and contractors before any miner in Chile and Peru, claiming to cut a 39-day process. MyPass Global (Australian; BHP, Shell, Chevron): free worker-owned digital competency passport, presented at Expomin April 2025. ACREDIX: a multi-platform accreditation service for salmon contractors (Pronexo, AQS, Certilap) with preventive checklists and expiry alerts. CheckDigital and acreditacioncontratistas.cl also sell accreditation, mostly mandante-side | reporteminero.cl (Exponor 2026 Mine Pass; 2026/09 MINPASS; Expomin 2025 MyPass); mine-pass.com; minpass.com; en-us.mypassglobal.com; acredix.cl/acreditacion-pronexo; acredix.cl/blog | Contradicted |
| Portals might build multi-client views themselves | The industry is building a shared standard instead: 17 Consejo Minero companies plus Sonami, Aprimin and the CChC agreed common criteria for pre-occupational health exams and basic induction, and a "pasaporte minero" single platform is "being developed". At this stage it's not a single document granting entry everywhere | redimin.cl (pasaporte-minero-avanza…; mineras-homologan-criterios…); mch.cl (Aprimin health-evaluation homologation); sonami.cl/v2/wp-content/uploads/2026/09/NOTA-DF.pdf | Changed (threat is real) |
| Payroll SaaS (Buk, Talana) only generates source documents | No evidence found of Buk or Talana pushing documents into Webcontrol, SIGA or Pronexo. Buk markets "gestión de contratistas" for its own contractors (a different job) | buk.cl/soluciones; web.talana.com/integraciones-y-extensiones-talana | Confirmed (absence of evidence) |
| Dedicated accreditation job roles exist | Confirmed: multiple chiletrabajos and computrabajo postings ("Acreditación y control documental", "Reclutador/a y acreditador/a de personal minería", "Encargado de relaciones laborales, acreditación y credencialización") | chiletrabajos.cl/trabajo/acreditacion-y-control-documental-3858527; chiletrabajos.cl/trabajo/reclutador-a-y-acreditador-a-de-personal-mineria-3856902; cl.computrabajo.com (Coquimbo posting) | Confirmed |
| Cost of failure is significant | Industry press headline: miners lose ~US$500k a year to accreditation delays (date of article not visible) | mch.cl/mineras-pierden-us500-mil-ano-demoras-la-acreditacion/ | Confirmed (mandante-side figure) |
| Market: ~1.4M subcontracted workers | Not re-checked. SICEP (AIA Antofagasta) has 3,500+ supplier companies used by 36 large mandantes. SICEP is itself a "qualify once, many buyers" supplier registry, but for commercial/financial qualification, not monthly labour accreditation | reporteminero.cl/noticia/entrevistas/2025/12/sicep-ecosistema-proveedores-mineros-chile | Partly confirmed |
| Contractors pay portal fees | Unverified. No pricing found for Webcontrol, SIGA, Pronexo or the passport vendors | none | Unverified |
| Portal ToS forbid automation | Unverified; no public ToS text found in snippets | none | Unverified |

---

## 3. Customer and problem

**Buyer.** The general manager or administration and finance manager of a contractor with 20–300
workers that serves **two or more mandantes on two or more different portals**.

**User.** The "encargado/a de acreditación" or "control documental" clerk. Often this is the risk
prevention technician (prevencionista) or an HR assistant doing it part-time.

**Wedge segments, in order** (estimate; to be validated):

1. Construction and industrial-maintenance contractors serving retail, energy, sanitation and
   cement mandantes (for example, Polpaico runs its own contractor portal).
2. Salmon-farming service contractors in Los Lagos and Aysén (Pronexo, AQS, Certilap). ACREDIX is
   already here.
3. Forestry and pulp contractors.
4. Mining is the last segment, and only for the company-level monthly pack, not worker passports.

**Job to be done.** "Every month, get every client to mark us *acreditado* before their cut-off
date so our invoice is paid and our people get on site, without one person spending a week
renaming PDFs."

**Current workflow** (time estimates for a 60-worker contractor with 3 mandantes on 3 portals;
all labelled **estimates**):

| # | Step | Time per month | Cost driver |
|---|---|---|---|
| 1 | Close payroll in Buk, Talana, Rex+ or with the accountant; pay Previred; upload the electronic payroll book (LRE) to the DT | (already done) | Payroll software |
| 2 | Request the F30-1 on Mi DT, then wait up to 8 business days | 0.5 h + wait | Wait delays everything downstream |
| 3 | Download payslips (signed), Previred receipts, F30-1, LRE receipt and attendance; split per client contract, because each mandante wants only the workers assigned to its contract | 4–8 h | Manual splitting by RUT and contract |
| 4 | Rename and upload to each portal according to its own instructions (file naming, one PDF per worker vs a consolidated file, period fields) | 3–6 h per portal → 9–18 h | Portal-specific rules |
| 5 | Worker-level accreditation for new or rotated workers: contract, annexes, ODI / risk briefing, PPE delivery, exams, licences, inductions, per mandante | 1–3 h per new worker | Duplicate per mandante |
| 6 | Read rejections ("observaciones"), fix, re-upload; chase expiries tracked in Excel | 4–10 h | Rejections often come days later |
| **Total** | | **~25–45 h/month**, i.e. 0.15–0.3 FTE; a full-time clerk at 150+ workers | Clerk ~CLP 700k–1.1M/month gross (estimate) |

**Cost of failure.**

- The mandante holds the invoice (retention under Ley 20.123 joint and subsidiary liability).
  On a CLP 30M monthly invoice, a 2-week delay is real working-capital pain.
- Workers are blocked at the gate. Idle crew-days cost the contractor wages without billing.
- Repeat failures can lead to contract penalties or loss of the contract (mandante-specific;
  unverified).
- DT fines for the underlying labour breaches are separate and out of this product's scope.

---

## 4. Product definition

**Positioning (narrowed).** "Pack Mensual": the contractor's monthly accreditation pack, built once
from payroll exports and split, named and checked for every mandante and portal. It is *not* a
worker passport. It complements the passports (and could integrate with them later) rather than
competing on worker credentials.

**Core loop.**

1. Payroll closes, and the contractor uploads exports: the Buk/Talana payslip ZIP, the Previred
   receipt PDF, the LRE CSV and the F30-1 PDF.
2. The engine parses them, maps workers to contracts and mandantes, and applies each portal's
   rules.
3. It produces a per-portal bundle (renamed, split or merged) plus a checklist showing what's
   missing.
4. The clerk uploads, using a checklist view next to the portal.
5. The clerk logs the result (accepted or observed). Observations go into a fix queue.
6. Expiry alerts trigger worker-level renewals.

**MVP (must-have).**

- Company and contract setup: mandantes, portals, contracts, and the workers assigned per contract.
- Ingestion: Buk and Talana payslip-ZIP and LRE exports, Previred PDF, F30-1 PDF. Extract the RUT
  and period by text parsing.
- A rules library for **3 portals × the top mandante variants** (candidates: Pronexo, Webcontrol,
  SIGA; choose after interviews), covering file naming, split rules and required documents.
- A bundle generator (ZIP per portal and contract) plus a printable checklist.
- A worker document vault with expiry dates and a per-mandante requirement matrix.
- An observation log and fix queue.
- Email and WhatsApp-link alerts (plain notifications, not a bot).

**v1.**

- 6–8 portal rule sets, plus a mandante-specific overrides editor (the user can encode a new
  mandante's rules).
- A browser extension that fills the portal upload form from the bundle, *with the user clicking
  submit*. Build it only if the portal ToS allow; keep it assistive, not autonomous.
- Multi-company view for outsourced acreditadores and accounting firms (the channel).
- An F30-1 timing tracker ("request by day X to make mandante cut-off Y").
- Rejection-reason analytics ("70% of your observations are unsigned payslips").

**Later.**

- Import and export with passport vendors (MINPASS, Mine Pass, MyPass) for worker credentials.
- Subcontractor tier: collect packs from your own subcontractors (the mirror problem).
- Peru (the same mining contractor pattern; MINPASS already targets it).

**Out of scope.** Payroll calculation, Previred payment, mandante-side approval, worker
credential issuance, training and courses, autonomous robotic submission to portals, and legal
advice on compliance.

**Key screens and flows.**

1. **"Mes en curso" board.** Rows are contracts and mandantes; columns are the required documents.
   Cells show status (missing, ready, uploaded, observed, accepted), plus the mandante cut-off
   date and days remaining.
2. **Drop zone and parse review.** Drag the payroll ZIP, Previred PDF and F30-1 in. The screen
   shows what was recognised (period, RUTs, worker count) and flags mismatches, such as a worker
   on the contract who is missing from the payroll, or a payslip without a signature field.
3. **Portal bundle view.** For one portal and contract: the generated files with their final
   names, a "copy field values" panel, a download ZIP button and a "mark uploaded" button.
4. **Worker file.** Documents with expiry dates, a per-mandante requirement matrix (green/red),
   and a "what's needed to send this person to mandante X tomorrow" answer.
5. **Observation inbox.** Paste or type each portal observation, tag the cause, attach the
   corrected file, then re-bundle.

---

## 5. Technical design

**Architecture.**

- A single web app (server-rendered) with a background job worker for parsing and bundling.
- Object storage for documents, encrypted at rest.
- A Postgres database.
- An optional Chrome extension for assisted form fill (v1).
- No portal API calls, because none exist. Data flows one way: contractor exports → parse →
  rules → bundles → the human uploads.

**Stack for a solo developer.**

- Django or Rails with Postgres. Pick whichever the founder knows; they're equivalent here.
  Mature admin, auth and background jobs (Celery or Sidekiq) matter more than novelty.
- PDF tooling: `pdfplumber` or `pypdf` to split, merge and extract text (payslips are
  text-layer PDFs from payroll SaaS). OCR (Tesseract) only as a fallback for scanned exams.
- Hosting: AWS `sa-east-1` (São Paulo) or a Santiago region if the chosen provider has one.
  Google Cloud has a Santiago region (`southamerica-west1`); I'd prefer it for data-residency
  optics, though Chilean law does not require local residency (see below).
- A Chrome extension in TypeScript (v1).

**Data model (main entities).** Company (contractor, RUT), Mandante, Portal, Contract
(company × mandante × portal, cut-off day), Worker (RUT, name), Assignment (worker × contract ×
dates), DocumentType (catalogue: payslip, F30-1, Previred receipt, LRE receipt, ODI, PPE, exam,
licence…), Document (file, type, worker or company, period, issue and expiry dates, hash),
PortalRule (portal × mandante override: required types, naming template, split/merge mode,
format), Bundle (contract × period, status), Observation (bundle or document, reason, status),
AuditEvent.

**Integrations.**

| Integration | Method | Fallback |
|---|---|---|
| Buk / Talana / Rex+ payslips and LRE | File export (ZIP of PDFs, LRE CSV per the DT format) | Manual upload of individual PDFs |
| Previred receipts | PDF upload, parsed | Manual tagging |
| F30-1 (DT, Mi DT) | PDF upload. Requesting it needs the company's electronic labour representative, so no automation | Reminder plus a deep link |
| Client portals (Pronexo, Webcontrol, SIGA, ControlDoc, SUCAL/SIIRLL-VP) | Generated bundles; human upload | Later, an assistive Chrome extension (fill, not submit). Check each ToS first |
| Passport vendors (MINPASS, Mine Pass, MyPass) | None now; explore partnership APIs | Worker-document export |

**Rules engine and validation.** Declarative rules per portal and mandante, stored as data (YAML
or JSON in the database, editable by an admin):

- the required document types per period and per worker;
- naming templates (e.g. `{RUT_EMPRESA}_{PERIODO}_{RUT_TRABAJADOR}_LIQ.pdf`; real templates to be
  collected in interviews);
- split vs merge;
- validity windows (an exam valid for 12 months; unverified per mandante);
- cross-checks: payslip period = bundle period; worker RUT is in the contract roster; the F30-1
  period and RUT match the company; Previred receipt totals vs headcount (where parseable).

Every rule has a "source" field (the portal manual URL or the mandante instruction PDF uploaded by
the customer), so rules can be audited.

**Security, privacy and data residency.**

- **Ley 19.628** applies until 30 Nov 2026, then **Ley 21.719** from 1 Dec 2026 (the new
  personal-data law with an agency and fines). Medical and occupational exams are *sensitive
  data*. The product is a **data processor (encargado)** for the contractor, so it needs a
  processing agreement, purpose limitation, security measures, and breach notification under
  the new law.
- No legal data-localisation requirement found; international transfers need adequate
  safeguards under Ley 21.719 (verify with local counsel).
- **Ley 21.663** (cybersecurity framework) applies to essential services and operators of vital
  importance, so probably not to a small SaaS, but mining mandantes may impose their own security
  questionnaires.
- Practical measures: encryption at rest, per-tenant isolation, MFA, signed download URLs,
  retention matched to labour-law retention needs (configurable), and no storage of portal
  passwords in MVP. In v1 the extension uses the user's own browser session.

**Audit trail and liability.**

- Immutable audit events: who uploaded, the parsed values, the rule version applied, the bundle
  hash, who marked it uploaded.
- The product never certifies compliance; it organises documents. The terms say the customer
  remains responsible for the content and the submission, and liability is capped at 12 months
  of fees.
- If a rule is wrong (a bad naming template causes a rejection), the remedy is fixing the rule
  and a service credit. Keep a rule changelog.

**Localisation.** Spanish (Chile) UI and Chilean terminology: mandante, contratista, liquidación,
F30-1, LRE, ODI, "observado". RUT validation (modulo-11 check digit). Dates as DD-MM-YYYY. Pricing
in CLP, optionally indexed to UF.

**Testing.**

- A golden-file test suite of real (anonymised) exports from Buk, Talana and Rex+ collected from
  pilot customers.
- One snapshot test per portal rule: given fixture inputs, expect this exact file list and these
  names.
- An "observation regression" test: every real rejection becomes a test case.
- Manual monthly smoke test with pilot customers in the first week of each month.

---

## 6. Build plan

| Week | Milestone | Dev-weeks |
|---|---|---|
| 0–3 | **No code.** 12–15 interviews (section 13); collect 3 real monthly packs and 3 portal manuals; pick the wedge segment and 3 portals; sign 3 LOIs | 0 |
| 3–5 | **Concierge MVP.** The founder builds packs for 3 pilots by hand with Python scripts plus a shared Drive, charging CLP 80–100k/month. Learn the rules | 1 |
| 5–9 | Web app: tenants, contracts, workers, ingestion of payslip ZIP, Previred and F30-1, rules for 3 portals, bundle ZIP, "Mes en curso" board | 4 |
| 9–10 | Move the pilots onto the app for one monthly cycle; observation inbox | 1.5 |
| **~Week 10–12** | **First paying customer on the software** (the concierge pilots pay from week 4) | |
| 12–16 | Worker vault, expiry alerts, requirement matrix, rules editor | 3 |
| 16–22 | 6–8 portals, multi-company view for acreditadores, F30-1 timing tracker | 4 |
| 22–26 | Chrome assist extension (only if the ToS check passes), analytics, Ley 21.719 hardening | 3 |
| **Week 26** | **v1** | **~16.5 total** |

**Faked or manual at first.** The rules library starts as a spreadsheet the founder maintains.
Portal observations are typed in by the user. The "assisted upload" is a checklist with copy
buttons. Onboarding (roster import, contract mapping) is done by the founder over a video call.

---

## 7. Go-to-market

**The first 10 customers.** Contractors with 30–200 workers serving 2–4 mandantes on different
portals, in one region (start with Biobío/Concepción for forestry and industry, or Los Lagos for
salmon), so visits are cheap.

**How to reach them.**

- **Job postings:** companies currently advertising "acreditación" or "control documental" roles
  on chiletrabajos.cl, computrabajo and LinkedIn. That's direct evidence of the pain. Pull 50 a
  month.
- **Mandante contractor lists:** Polpaico's contractor portal, Pronexo-using salmon companies,
  and forestry contractor associations. Mandantes sometimes publish contractor-induction
  calendars; unverified.
- **Associations:** the CChC (regional chambers); ACOFORAG and regional forestry-contractor
  associations (unverified names); SICEP / AIA Antofagasta (3,500+ suppliers) for mining later;
  APRIMIN (as a channel for health-exam data, later).
- **Accountants and outsourced acreditadores** who already handle several contractors. They are
  the best channel (multi-company licence).

**Outreach angles (Spanish).**

- "¿Cuántas horas al mes pasa su equipo renombrando liquidaciones para cada plataforma?"
- "Cargue el ZIP de Buk una vez; le entregamos el paquete listo para Pronexo, Webcontrol y SIGA,
  con los nombres correctos."
- "Cero observaciones por documentos mal nombrados o del periodo equivocado."
- "Sepa hoy qué trabajadores no pueden entrar a faena el lunes."

**Channel partners.** Payroll-outsourcing firms (Buk lists BPO partners), accounting firms serving
contractors, OTECs and prevention consultancies, and freelance acreditadores (a rev-share or
reseller licence).

**Launch timing.** There's no single regulatory date. The cadence is monthly: launch outreach
around payroll close (days 25–10), when the pain is acute. Use the 1 Dec 2026 Ley 21.719 start as
a secondary angle ("your worker medical files in WhatsApp and Gmail are now a sanctionable
risk").

**Content and SEO (Spanish).** Per-portal guides ("Cómo acreditarse en Pronexo/Webcontrol/SIGA",
"Instructivo de certificación mensual explicado", "Qué es el F30-1 y cómo pedirlo en Mi DT",
"Checklist acreditación contratista 2026"). ACREDIX and Trazit already run exactly this playbook,
which confirms the search demand and shows the space is contested.

---

## 8. Pricing and unit economics

**Tiers** (CLP, VAT added; estimates).

| Tier | For | Price/month |
|---|---|---|
| Básico | Up to 40 workers, 2 contracts | CLP 89,000 (~US$95) |
| Pro | Up to 150 workers, 6 contracts, worker vault | CLP 189,000 (~US$200) |
| Empresa | Up to 400 workers, unlimited contracts | CLP 349,000 (~US$370) |
| Acreditador | Multi-company, per client company | CLP 49,000 per company |

FX assumption: about CLP 940 per US$ (estimate; check before quoting).

- **Expected ACV:** ~CLP 2.1M (~US$2,300) a year, a blended ARPA of ~CLP 180k a month.
- **CAC by channel** (estimates):
  - Founder outbound to job-posting leads: US$300–600 (time plus a regional visit).
  - Accountant or acreditador channel: US$150–300 (rev-share of 20% in year 1).
  - SEO content: low marginal cost, but slow (6+ months), and competitors already rank.
- **Gross margin:** about 85% (hosting and storage are small; the main cost-of-goods item is
  onboarding and rules maintenance labour).

**Payment rails.**

- A foreign founder without a Chilean entity can bill in USD through Stripe (with a US or EU
  entity) or a merchant of record (Paddle or Lemon Squeezy, which handle Chilean digital-services
  VAT). Chilean SMEs, however, expect a **factura electrónica** from the SII to deduct VAT; a
  foreign invoice is a friction point.
- Better, by month 6: set up a Chilean SpA (possible online via "Empresa en un Día") and bill in
  CLP with factura electrónica. Collect by bank transfer or a local processor (Flow, Khipu,
  Mercado Pago); recurring card charges via Flow or Stripe (Stripe availability in Chile for local
  entities is unverified).

**FX risk.** Revenue in CLP and costs in USD. The CLP is volatile (±10–15% a year is common).
Mitigate by pricing Empresa in UF, keeping costs small, and repricing annually.

---

## 9. Company and legal setup

- **Entity:** start without one (an MoR or the founder's home entity) for concierge pilots, if
  they accept foreign invoices. Form a Chilean SpA by about month 6. The founder needs a RUT and
  a legal representative domiciled in Chile, or a local partner (verify with an accountant).
- **Local partner:** a part-time Chilean ex-acreditador (paid per hour or with equity), for
  portal rules, interviews and trust. This is essentially required.
- **Tax:** since 2020 Chile charges 19% VAT on digital services supplied by non-residents to
  non-VAT-registered persons (Ley 21.210). B2B sales to VAT-registered companies follow different
  rules (reverse-charge mechanics; verify). A Chilean SpA charges 19% VAT normally and pays first-
  category corporate tax (Pyme regime around 25%; verify the current rate).
- **Contracts:** SaaS terms in Spanish; a data-processing agreement compliant with Ley 21.719;
  explicit "no certification, no legal advice" language; customer warranty that it has the right
  to upload worker data (including the health-data basis).
- **Professional liability:** E&O / cyber insurance once it has more than 20 customers (Chilean
  insurers or a global SaaS policy). Cap liability at 12 months of fees.

---

## 10. Financial model (24 months)

**Assumptions** (all estimates):

- Concierge pilots in months 2–3 (discounted, counted as 0 to stay conservative).
- Software customers from month 4: +2 net in month 4, rising to +3 net a month by month 8, then
  about +2.7 net a month in year 2 after 3% monthly churn.
- ARPA of US$190 a month.
- Costs exclude founder salary. They cover hosting and tools (US$150), a local partner part-time
  from month 3 (US$800), marketing and travel (US$300), and accounting and entity (US$150), rising
  to a part-time support hire in Q7.
- Year-2 MRR uses the month-end customer count.

| Period | Customers (end) | MRR (US$) | Costs/month (US$) | Cumulative cash (US$) |
|---|---|---|---|---|
| M1 | 0 | 0 | 600 | -600 |
| M2 | 0 | 0 | 450 | -1,050 |
| M3 | 0 | 0 | 1,250 | -2,300 |
| M4 | 2 | 380 | 1,400 | -3,320 |
| M5 | 4 | 760 | 1,400 | -3,960 |
| M6 | 6 | 1,140 | 1,450 | -4,270 |
| M7 | 8 | 1,520 | 1,450 | -4,200 |
| M8 | 11 | 2,090 | 1,500 | -3,610 |
| M9 | 14 | 2,660 | 1,500 | -2,450 |
| M10 | 17 | 3,230 | 1,550 | -770 |
| M11 | 20 | 3,800 | 1,550 | +1,480 |
| M12 | 23 | 4,370 | 1,600 | +4,250 |
| Q5 (M13–15) | 30 | 5,700 | 1,800 | +14,525 |
| Q6 (M16–18) | 38 | 7,220 | 2,000 | +28,760 |
| Q7 (M19–21) | 46 | 8,740 | 2,800 | +45,080 |
| Q8 (M22–24) | 54 | 10,260 | 3,000 | +65,330 |

- **Break-even:** operating break-even (MRR above costs, excluding the founder) in **month 7**;
  cumulative cash break-even in **month 11**. With a founder draw of US$4,000 a month, break-even
  comes around **month 16–17**.
- **Month-12 MRR:** about **US$4.4k** (~CLP 4.1M).
- **Ceiling.** SAM is contractors with 20–500 workers, at least 2 mandantes on portals,
  construction, industrial, forestry, salmon and mining combined: roughly **6,000–10,000
  companies** (estimate; SICEP alone has 3,500+ mining suppliers). An achievable share of 3–5%
  over 4–5 years, given the passport competitors, is **180–500 customers × US$190 = US$34k–95k
  MRR** (US$0.4–1.1M ARR). That's a good solo business at the top end, but not more.

---

## 11. Team and founder fit

- **Skills:** a full-stack web developer comfortable with PDF processing, plus patient B2B sales.
  Fluent Spanish (Chilean register and its admin vocabulary) is required: the users are clerks
  who will phone or WhatsApp you on day 3 of the month.
- **Non-local founder:** feasible only with a local ex-acreditador partner and 2–4 weeks on the
  ground for interviews (Concepción or Puerto Montt, plus Santiago). Remote-only selling to
  regional contractors is hard.
- **Local help:** the ex-acreditador (rules and sales), a Chilean accountant (SpA, VAT, factura)
  and a data-protection lawyer for a one-off DPA review (CLP 1–2M, estimate).

---

## 12. Risks and mitigations

| Type | Risk | Mitigation |
|---|---|---|
| Competitive | MINPASS, Mine Pass, MyPass Global or ACREDIX extend to the monthly company pack and to non-mining sectors. They're funded and already have the "passport" narrative | Avoid mining at first; focus on the payroll-export → per-portal bundle engine they don't emphasise; aim to be the integration partner ("we feed your passport") rather than a rival |
| Industry standard | The "pasaporte minero" or mandante-side homologation makes contractor uploads unnecessary (mandantes pull from a shared source) | Monitor Consejo Minero and Aprimin; non-mining sectors are years behind |
| Platform | Portals change naming and fields without notice; ToS forbid automation; a portal blocks the extension | Keep MVP human-in-the-loop; rules as data with fast updates; no credential storage |
| Government | The DT adds direct F30-1 sharing with mandantes, or the DT or certifiers (Webcontrol Certify, Certilap) become the mandated single source | Turns part of the pack into a link; pivot to the worker-level and observation workflow |
| Operational | Rules maintenance across many mandante variants eats the founder's time | Charge setup fees for new mandantes; the customer-editable rules editor; prioritise by customer count |
| Demand | Most small contractors serve one mandante, so there's little duplication (the report's kill condition) | Pre-screen in interviews; target only multi-mandante companies found via job posts |
| Privacy | A breach of health exam data under Ley 21.719 | Encryption, minimal retention, DPA, insurance |
| FX / payment | CLP depreciation; local invoicing friction | UF pricing, a Chilean SpA, local collection |

---

## 13. Validation plan before writing code

**Interview targets (12–15).**

- 4 accreditation clerks at construction or industrial-maintenance contractors (found via job
  posts).
- 3 at salmon-farming service contractors (Puerto Montt).
- 2 at forestry contractors (Concepción).
- 2 at mining contractors. This is a competitive check: do they use MINPASS, Mine Pass or MyPass?
- 2 freelance or outsourced acreditadores, or accounting firms (the channel).
- 1–2 people on the mandante side (contractor-control administrators), to learn whether
  mandantes would accept or prefer a standard bundle.

**Questions.**

1. How many mandantes and portals did you upload to last month? Which ones?
2. Walk me through last month's pack, step by step. How many hours did each step take?
3. How many observations or rejections did you get? What were the top 3 causes?
4. Has an invoice or a worker entry been delayed because of accreditation in the last 6 months?
   By how much?
5. What do you use today: Excel, Drive, ACREDIX, MINPASS, Mine Pass, an outsourced acreditador?
   What do you pay?
6. Which payroll system do you use, and can you export payslips as a ZIP?
7. Would you let a tool hold worker medical exams? Who decides that?
8. If this cut the work by half and the observations to near zero, what would you pay a month?
   Who signs?

**Pass/fail thresholds.**

- **Pass:** at least 8 of 12 serve 2 or more mandantes on 2 or more different portals; median of
  15 or more hours a month on the pack; at least 6 say they'd pay CLP 100k or more a month; fewer
  than 3 of 12 already use a passport tool that covers the monthly company pack.
- **Fail (kill):** most serve one mandante or portal; *or* the passport vendors already cover the
  monthly pack and are cheap or free to contractors; *or* clerks say the pain is the worker
  exams and courses (the passports' turf), not the monthly pack.

**Pre-sale test.** Offer 5 contractors a "first month's pack done for you" concierge at
CLP 90k, with a letter of intent for 6 months of the software at the Pro price. The target is
3 paid concierge months plus 3 LOIs before writing app code.

---

## 14. Expansion path

- **Adjacent workflows:**
  - collecting packs from your own subcontractors (the contractor is a mandante one tier down);
  - preparing the contractor's own SICEP and Achilles supplier-registry renewals;
  - private-security guard credentials (Ley 21.659; see the sister Chile opportunity), since
    security companies are also contractors accredited on these same portals.
- **Other countries with the same pattern:**
  - Peru: mining contractors and mandante portals; MINPASS already targets it.
  - The Philippines: per-principal remittance proof packs (#3 in the global ranking; the same
    engine).
  - Colombia: contractor SG-SST and social-security accreditation on mandante portals
    (unverified).
  - Australia: contractor prequalification portals, though MyPass Global is strong there.

---

## 15. Reassessment scorecard

The country report gave only an overall 6.5, not per-criterion scores, so the "original" column
shows the overall score for reference.

| Criterion | Original | New | Reason |
|---|---|---|---|
| Pain | 6.5 (overall) | 7 | Dedicated clerk roles, invoice holds and site-entry blocks are confirmed |
| Frequency | – | 9 | Monthly per mandante, plus per new worker |
| Mandatory nature | – | 7 | Contractual, backed by Ley 20.123 joint liability, rather than a direct legal filing |
| Fragmentation | – | 8 | Many portals, plus per-mandante variants within the same portal |
| Existing competition | – | 4 | MINPASS, Mine Pass, MyPass Global and ACREDIX now sell multi-client contractor and worker passports or services |
| Incumbent gap | – | 5 | The gap narrows to the company-level monthly pack in non-mining sectors; it's thin and copyable |
| Buyer accessibility | – | 6 | Job postings, SICEP and CChC lists help; non-mining contractor lists are less structured |
| Willingness to pay | – | 6 | Clerk-salary anchor, but SMEs are price-sensitive and passports may be free to workers |
| MVP simplicity | – | 7 | File parsing and rules; no integration needed (and none available) |
| Distribution | – | 5 | No regulatory moment; funded competitors are already doing content and SEO |

**New overall score: 5.0 / 10 (was 6.5).** It falls by 1.5 because the report's central
assumption, that every tool sits on the client side and no contractor-side multi-client passport
exists, is contradicted by at least three 2025–2026 launches aimed at Chilean mining, plus an
industry-wide "pasaporte minero" homologation effort. What's left is a narrower non-mining
monthly-pack niche that needs interviews to prove it exists at a payable size.

---

### Sources (from this session's searches)

- https://www.reporteminero.cl/noticia/exponor-2026/2026/06/mine-class-lanza-mine-pass-pasaporte-digital-ia-acreditacion
- https://portalinnova.cl/mine-class-lanza-mine-pass-en-exponor-el-pasaporte-digital-que-usa-ia-para-transformar-la-acreditacion-minera/
- https://mine-pass.com/
- https://www.reporteminero.cl/noticia/entrevistas/2026/09/minpass-safe-mining-2026-pasaporte-digital-acreditacion-minera
- https://minpass.com/
- https://www.reporteminero.cl/noticia/expomin-2025/2025/04/mypass-global
- https://www.expomin.cl/mypass-global-transforma-la-gestion-de-la-conformidad-laboral-en-la-mineria-con-el-pasaporte-digital-de-competencias/
- https://en-us.mypassglobal.com/
- https://acredix.cl/acreditacion-pronexo
- https://acredix.cl/blog
- https://acredix.cl/blog/acreditacion-certilap
- https://trazit.co/blog/ia-compliance-documental-contratistas-chile
- https://trazit.co/blog/ley-subcontratacion-chile-gestion-documental
- https://checkdigital.cl/servicios/acreditacion.html
- https://acreditacioncontratistas.cl/
- https://www.polpaico.cl/contratistas/
- https://www.redimin.cl/pasaporte-minero-avanza-en-chile-homologacion-de-examenes-e-inducciones-busca-agilizar-ingreso-a-faenas
- https://www.redimin.cl/mineras-homologan-criterios-de-ingreso-a-faenas-para-reducir-examenes-y-cursos-duplicados
- https://www.mch.cl/aprimin-y-empresas-de-la-gran-mineria-firman-acuerdo-de-homologacion-para-evaluaciones-de-salud-pre-ocupacional/
- https://www.sonami.cl/v2/wp-content/uploads/2026/09/NOTA-DF.pdf
- https://www.mch.cl/mineras-pierden-us500-mil-ano-demoras-la-acreditacion/
- https://www.mintrab.gob.cl/wp-content/uploads/2026/07/ResEx_N903_Webcontrol.pdf
- https://www.mintrab.gob.cl/lista-de-empresas-certificadoras/
- https://www.certilapchile.cl/
- https://www.dt.gob.cl/portal/1627/w3-article-123760.html
- https://www.dt.gob.cl/portal/1627/w3-article-124815.html
- https://dt.gob.cl/portal/1626/w3-article-94132.html
- https://yamana.webcontrol.cl/ese/soporte/ManualAcreditacionMML_EECC.pdf
- https://www.codelco.com/proveedores/portal-de-acreditacion-para-las-empresas-contratistas-de-vicepresidencia
- https://www.reporteminero.cl/noticia/entrevistas/2025/12/sicep-ecosistema-proveedores-mineros-chile
- https://www.chiletrabajos.cl/trabajo/acreditacion-y-control-documental-3858527
- https://www.chiletrabajos.cl/trabajo/reclutador-a-y-acreditador-a-de-personal-mineria-3856902
- https://www.buk.cl/soluciones
- https://web.talana.com/integraciones-y-extensiones-talana
