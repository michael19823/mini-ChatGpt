# Plan 04: Egypt EPTTS serialization file compiler for small pharma importers and toll manufacturers

Prepared 2026-10-05 by the development-plan agent. Source: `research/countries/egypt.md` (ranked #4, score 7.0).
Verification used 15 WebSearch queries in English and Arabic. WebFetch was blocked, so every fact
below comes from search-result titles and snippets, including snippets of EDA's own PDFs. Figures I
could not confirm are marked **unverified** or **estimate**.

---

## 1. Verdict up front

**Interview first. Do not build yet. New score: 5.5/10 (was 7.0).**

The trigger is real and live: EPTTS went into operation for imported medicines in February 2026,
and local products followed from August 2026. Verification did weaken the core assumption,
though. The report said Phase 1 was "CSV only, with XML and API in later phases". In fact, EDA
already publishes a 2026 specification for the **Masar** platform that accepts **EPCIS 1.2 XML in two
forms**:
- a SOAP-wrapped B2B gateway for external manufacturers and distributors;
- a bare-EPCIS "Dashboard Bulk XML" upload.

That means any foreign supplier with a level-4 serialization system (TraceLink, Optel, rfxcel,
SAP ATTP and similar) can connect directly or hand over near-ready XML. The remaining gap is
narrower. It covers importers whose suppliers have **no** level-4 system (small Indian, Chinese,
Turkish and Jordanian generic makers that send Excel files) and local toll-manufacturing clients
whose contract manufacturer's line software does not export EDA-ready files. The gap still
exists, but the market is small: about 1,300 imported SKUs were in Phase 1. The idea is worth
10–15 interviews and a concierge pilot, not a product build.

**The three deciding facts:**
1. **A direct EPCIS XML path exists (Masar B2B and Dashboard Bulk XML).** The "only humans can
   convert to CSV" pain applies only to suppliers without level-4 systems. *(changed)*
2. **Phase 1 covered about 1,300 imported SKUs.** Rollout runs over 3–5 years, starting with the
   Egyptian Company for Pharmaceutical Trading and 30 government pharmacies. The obliged
   population is a few hundred entities at most, not thousands. *(estimate; narrows the market)*
3. **Enterprise vendors are marketing Egypt aggressively** (TraceLink, Optel, rfxcel, LSPedia,
   Vimachem, Visiott, 1DTS), and none publishes a price. No cheap importer-side converter was
   found, so the low-end gap is real but unproven, and its size depends on interviews.

---

## 2. Verification results

| Claim from report | What you found | Source | Status |
|---|---|---|---|
| EDA Decree 161/2025 and 475/2025 set imported medicines from 1 Feb 2026 and local from 1 Aug 2026 | Several sources repeat 1 Feb 2026 for fully finished imported products and 1 Aug 2026 for bulk imports and local manufacturing, packing and repacking. TraceLink says the law was published Aug 2025 and deadlines were updated in Dec 2025. | Optel; TraceLink; Visiott; Maven RS | Confirmed |
| The system is live, not postponed | Arabic press (Jul 2026): Phase 1 launched in February with scheduled and imported drugs (about 1,300 items), and Phase 2 started in early August targeting local drugs. An earlier report said only 25 imported drugs and 18,000 packs had been added since launch. The government promised to finish the system by year-end, with full national rollout over 3–5 years. | albawabhnews (24 Jul 2026); parlmany (31 Jul 2026); almanassa; masrawy | Confirmed live; scope narrower than implied |
| Phase 1 is CSV only; XML/API "in later phases" | The Phase-1 CSV guide exists. EDA *also* publishes "NP XML commissioning, packing and shipping in **Masar B2B EPCIS events 2026**". It accepts B2B partner XML (SOAP 1.2-wrapped EPCIS 1.2 with an SBDH header and GLN sender and receiver) and Dashboard Bulk XML (bare EPCIS 1.2). | EDA npxml Masar PDF; EDA track-and-trace services page | **Contradicted / changed** |
| CSV rules: at most 50k serials per file, at most 5 batches per commissioning file, chronological order, commissioning before packing, atomic rejection | All confirmed in snippets of the EDA CSV notice. It adds that readPointGLN is mandatory and must equal bizLocationGLN. | EDA eptts_phase1_csv PDF; FAQ v3 | Confirmed |
| The importer is legally accountable | FAQ v3 (EDREX:NP.CIP.009, v3.0, 23 Apr 2026) says the importing entity is accountable for commissioning, aggregation, shipping and receiving. Manufacturers and contract manufacturers may generate the data. | EDA FAQ v3 | Confirmed |
| Phase 1 upload is only commissioning and packing | Confirmed for the CSV route. Shipping is also present in the Masar XML specification. | EDA CSV notice; Masar XML PDF | Confirmed (CSV); broader for XML |
| Penalties in Decree 475/2025 | No penalty text was found in snippets. The practical consequence (product cannot be released or sold) is inferred. | (search returned nothing relevant) | Unverified |
| Market: 4,909 importer-register licences in 2025 | This figure was not re-checked. No Arabic source gave a count of medicine importers or toll-manufacturing clients. There are 179 drug factories (Jul/Aug 2026 press). | banker.news / parlmany (Aug 2026) | Unverified for medicines; factory count confirmed |
| Competitors: Optel, TraceLink, rfxcel, LSPedia, Vimachem, Visiott, 1DTS, Freyr, Maven | All still active on Egypt. TraceLink pushes "integrate once" (MINT and Serialized Operations Manager) and runs a MENA special-interest group. A Movilitas support site appeared on an EPTTS CSV query (Egypt content unverified). No pricing is public. | TraceLink; Optel; LSPedia; Visiott; search results | Confirmed; more crowded than implied |
| No cheap importer-side converter | None found in English or Arabic searches. | Searches 6, 7, 8 | Confirmed (absence of evidence) |
| EDA might release a free tool | EDA offers the Masar web dashboard (bulk XML and CSV upload). GS1 Egypt runs national support initiatives: free GLNs for pharmacies, 70% off for warehouses, and training for 10,000 pharma workers. No free converter was found. | amwalalghad (Feb 2026); almalnews | Partly confirmed: free upload UI, no converter |
| Industry pushback | The Federation of Chambers' pharma division warned that Decree 804/2025 "could collapse supply chains" and threatens more than 500 distributors and warehouses. It asked for an emergency meeting (Jan 2026). | masrawy (8 Jan 2026) | Confirmed: political risk and urgency |
| EDA uses SAP and partners | The pharma division head said EDA's use of "DAF, SAP and GS1" is necessary for success. The platform is likely SAP-based (unverified). | almalnews | Unverified detail |

---

## 3. Customer and problem

**Buyer:**
- the regulatory affairs manager or supply-chain/QA manager at an Egyptian licensed medicine importer (often a scientific office or agent for foreign generic makers);
- the owner or technical director of a *toll-manufacturing client* (شركة تصنيع لدى الغير) that owns registrations and has products made by a contract factory.

**User:** a pharmacist or data clerk in regulatory affairs or the warehouse who prepares and uploads files.

**Job-to-be-done:** "Every time a lot arrives, or a toll batch is released, get its serials and
aggregation accepted by EPTTS on the first upload, so the goods can be released and sold. Then
prove it later in an inspection."

**Current workflow (inferred; all times and costs are estimates to confirm in interviews):**

| Step | What happens | Time per lot (est.) | Cost (est.) |
|---|---|---|---|
| 1 | Chase the foreign supplier for the serial and aggregation file (Excel, CSV, or EPCIS from an L4) | 1–10 days elapsed, 1–3 h of effort | Delays release; storage costs |
| 2 | Check GTINs match the GTINs registered with EDA, and check expiry, batch and the GLNs | 1–2 h | Staff time, ~EGP 300–600 |
| 3 | Reformat into EDA CSV, or wrap XML (SBDH, sort by eventTime, commission before pack) | 2–6 h, or longer for multi-level aggregation | ~EGP 600–2,000 |
| 4 | Split into files of at most 50k serials and at most 5 batches | 0.5–2 h | — |
| 5 | Upload, read the rejection, fix, re-upload (all-or-nothing rejection) | 1–8 h across iterations | The main risk to release dates |
| 6 | Archive evidence for inspections | 0.5 h | — |

Total: about 6–20 staff hours per lot (**estimate**). Importers receive perhaps 2–20 lots a
month (**estimate**). For a small importer this is a part-time job, not a crisis, unless
rejections cascade.

**Cost of failure:**
- unreported packs cannot legally move through the traced chain (inferred), so stock sits in a bonded or own warehouse;
- penalties under Decree 475/2025 are **unverified**;
- medicines are in short supply and politically sensitive in Egypt, so a release delay means lost sales and pressure from EDA.

---

## 4. Product definition

**Core loop:** upload the supplier file → automatic mapping to EDA fields → validation against
every published rule → fix list → download compliant CSV files or Dashboard Bulk XML, split
automatically → mark as uploaded and record the EDA result → lot evidence pack.

**MVP (must-have):**
- Parsers for supplier Excel/CSV (with saved per-supplier column mappings) and EPCIS 1.2/2.0 XML.
- A product master: GTINs registered with EDA, own and supplier GLNs.
- A validator covering:
  - GTIN check digit and registration;
  - the AI(21) serial character set and length;
  - expiry and production date logic;
  - at most 5 batches and at most 50k serials per file;
  - eventTime order;
  - commissioning before packing;
  - readPointGLN equal to bizLocationGLN;
  - duplicate serials across all lots;
  - orphan or missing children in the aggregation hierarchy.
- Outputs: EDA Phase-1 CSV, plus Masar Dashboard Bulk XML (EPCIS 1.2 with SBDH).
- A per-lot log with rejection notes. Arabic/English interface.

**v1:**
- the shipping event (Masar XML);
- multi-user roles;
- a supplier portal link where the supplier uploads directly;
- a monthly compliance report;
- toll-manufacturer mode (CMO line export → client's GLN).

**Later:**
- a B2B SOAP gateway submission on the client's behalf, if EDA permits a third-party sender GLN (**unverified**; the SBDH sender must match the authenticated entity, so it probably needs the client's own credentials);
- distributor shipping/receiving events as later phases arrive;
- the same engine for other EPCIS-based markets.

**Out of scope:**
- line-level (L1–L3) serialization, printing and aggregation hardware;
- pharmacy dispensing;
- acting as the regulated reporting party;
- ERP replacement.

**Key screens:**
1. **Lot inbox:** a list of lots with status (awaiting supplier file → validated → files ready → uploaded → accepted or rejected).
2. **Mapping wizard:** drop the file, see the detected columns, map once per supplier, save the template.
3. **Validation report:** errors grouped by rule, with a row count, an example row and a one-click fix (sort, split, drop duplicates) where safe.
4. **Export:** split CSV/XML files named to a convention, with a checksum. The user records the EDA response.
5. **Evidence pack:** a lot PDF/ZIP (source file, outputs, validation log, upload status) for inspectors.

---

## 5. Technical design

**Architecture:**
- a single web app with background workers, and object storage for raw and output files;
- data flow: upload → stream parse → normalised event and serial tables → rules engine → generators → files;
- no live government integration in the MVP, because upload is manual.

**Hosting:** an EU region (e.g. Hetzner or AWS Frankfurt). Data is product serials, not personal
data. If clients insist on hosting in Egypt, offer a single-tenant Docker install later.

**Stack (solo developer):**
- Python (FastAPI) for the API and workers;
- `lxml` and streaming iterparse for EPCIS;
- `polars` for files with a million rows;
- PostgreSQL;
- HTMX or a light React front end;
- S3-compatible storage.

Python is chosen because XML/EPCIS libraries and data tooling are mature, and the work is
file transformation, not a UI-heavy app.

**Data model:** Tenant, User, Product (GTIN, EDA registration number, pack level), Location
(GLN), Supplier, MappingTemplate, Lot, SourceFile, Serial (SGTIN, batch, expiry, status),
AggregationLink (parent SSCC or SGTIN → child), Event (commissioning, packing, shipping),
ValidationRun, Finding, OutputFile, SubmissionRecord (manual EDA result), AuditLog.

**Integrations:**

| Integration | Method | Fallback |
|---|---|---|
| Supplier data | File upload (XLSX, CSV, EPCIS XML); later a supplier upload link | Email-in address that attaches files to a lot |
| EDA EPTTS / Masar | Generate the CSV or Dashboard Bulk XML; the user uploads manually | Concierge: the founder or a local partner prepares files |
| Masar B2B gateway (v2+) | SOAP 1.2 with the client's credentials and GLN | Stay file-based |
| EDA GTIN registry | The client keeps the master by hand or imports it | — |
| Browser automation of the EDA dashboard | **Not planned.** It carries ToS and credential risk, and the gain is small | — |

**Rules engine:** declarative rules in versioned YAML, one rule set per EDA document version
(e.g. `eda-csv-2026-04-v3`). Each rule has an ID, severity, a citation to the EDA document and
section, and an optional auto-fix. Rule sets are pinned per validation run so later disputes can
be replayed.

**Security, privacy and residency:**
- Data is commercial (serials, volumes, supplier names), so it is confidential, but mostly not personal data under Egypt's **Personal Data Protection Law 151/2020**. The executive regulations were not checked. User names and emails are personal data, so keep them minimal.
- Cybercrime Law 175/2018 applies generally.
- No Egyptian data-residency mandate for this data type was found (**unverified**). Ask EDA or interviewees whether EPTTS data has confidentiality rules.
- Measures: tenant isolation, encryption at rest, SSO later.

**Audit trail and liability:**
- every output is reproducible from the source file, mapping version and rule-set version;
- the tool is a *preparation aid*, and the client remains the reporting party;
- terms cap liability at 12 months' fees and exclude consequential loss (Egyptian law enforceability to be checked);
- if EDA rejects a file the validator passed, add the rule within 48 hours and credit the month.

**Localisation:**
- Arabic (RTL) and English interface; numbers in Latin digits in files;
- EGP pricing;
- Egyptian tax registration number and commercial register on invoices;
- dates in ISO 8601 with a timezone, as EPCIS requires (Africa/Cairo is UTC+2/+3 with daylight saving time since 2023, so this is a validation edge case).

**Testing:**
- golden-file tests built from EDA's published examples in the CSV and XML guides;
- property tests (random hierarchies, then verify splitting preserves parent-child integrity);
- a regression suite of real anonymised rejected files from pilot clients;
- XSD validation against EPCIS 1.2 and the EDA extension namespaces;
- re-run every rule set when EDA issues a new FAQ version (v3 came 23 Apr 2026).

---

## 6. Build plan

| Week | Milestone | Dev-weeks |
|---|---|---|
| 0–3 | Validation interviews (section 13); obtain 3–5 real anonymised supplier files and EDA rejection messages | 0 (sales) |
| 2–4 | **Concierge MVP:** Python scripts run by the founder; the client emails files and gets back validated CSV/XML within 24 h; charge per lot | 1.5 |
| 4–7 | Web MVP: upload, mapping templates, validator, CSV and bulk XML output, lot log | 3 |
| 6 | **First paying customer** (concierge, per-lot fee) | — |
| 8 | First subscription customer on the web MVP | — |
| 8–12 | Evidence pack, Arabic interface, multi-user, supplier upload link | 3 |
| 12–16 | Toll-manufacturer mode, shipping events, monthly report | 2.5 |
| 16–20 | v1 hardening, rule-set versioning UI, onboarding docs in Arabic | 2 |

**Effort to the first paying customer:** about 6 weeks (1.5 dev-weeks of scripts plus
interviews). **To v1:** about 12 dev-weeks in total.

**Do manually at first:**
- mapping new supplier formats;
- recording EDA results;
- Arabic support over WhatsApp;
- invoicing.

---

## 7. Go-to-market

**Ideal first 10 customers:**
- small and mid-size importers or scientific offices for Indian, Chinese, Pakistani, Turkish and Jordanian generic makers (suppliers least likely to have an L4 system);
- toll-manufacturing clients (EDA issued 23 toll-manufacturer licence addenda in 2025, per the report).

**How to reach them:**
- EDA's lists of registered imported products and importers, if public (**unverified**). Otherwise use the importers named in EDA news and drug-pricing databases.
- The pharma division of the Federation of Egyptian Chambers of Commerce (شعبة الأدوية), which is actively lobbying on Decree 804, and the Chamber of Pharmaceutical Industries.
- GS1 Egypt training cohorts (10,000 trainees targeted), as a partnership or sponsor.
- LinkedIn: "Regulatory Affairs" + "Egypt" + "import", and "Serialization Specialist Egypt".
- Arabic pharma Facebook groups for regulatory affairs staff (**unverified**).

**Outreach angles (Arabic first):**
- "ملف التتبع اترفض؟ ارفعه صح من أول مرة" ("File rejected? Upload it right the first time.")
- "Your supplier sends Excel; EDA wants EPCIS. We bridge it in 10 minutes per lot."
- "An audit-ready evidence pack for every lot."

**Channel partners:**
- Egyptian customs brokers and pharma logistics providers (they already handle importer paperwork);
- GS1 Egypt-affiliated consultants;
- Freyr and Maven (they consult and may want a tool to resell);
- local serialization integrators that install line equipment for toll factories.

**Launch timing:**
- the Aug 2026 local phase and the EDA promise to finish by end-2026 make Q4 2026–Q1 2027 the window;
- the risk is a Masar B2B "network" effect, where suppliers connect directly, so move before mid-2027.

**Content and SEO (Arabic):**
- explainers on "منظومة التتبع الدوائي رفع ملف CSV";
- "أخطاء رفض ملفات التتبع" (rejection errors);
- "SBDH شرح";
- an Arabic version of the CSV rules as a free checklist;
- a free single-file validator as a lead magnet (rules only, no export).

---

## 8. Pricing and unit economics

| Tier | Price (est.) | Includes |
|---|---|---|
| Per lot (concierge or self-serve) | EGP 1,000–2,000 (~US$20–40) per lot | Validation and output |
| Starter | EGP 4,000/month (~US$80) | Up to 5 lots/month, 2 users |
| Pro | EGP 8,000/month (~US$160) | Up to 25 lots, toll mode, evidence packs |
| Partner/broker | EGP 15,000+/month | Multi-client |

USD conversions assume about EGP 50 per US$ (**estimate**).

- **Expected ACV:** about EGP 70,000 (~US$1,400) a year (**estimate**).
- **CAC:**
  - founder-led direct, via LinkedIn and calls: about US$300–600 per customer in founder time;
  - chamber or GS1 events: about US$200–400;
  - channel partner: a 20–30% revenue share.
- **Gross margin:** about 85–90%. Hosting is under US$100 a month at this scale, and support time is the main cost.

**Payment rails:**
- Egyptian companies can pay foreign invoices by bank transfer in USD, but FX availability and bank paperwork are friction points (improved since the March 2024 float; **unverified** for 2026).
- Better: invoice in EGP through a local partner or reseller entity that pays the founder in USD. Paymob and Fawry accept EGP card payments but require a local entity.
- A merchant of record such as Paddle covers card payments only. Egyptian B2B buyers rarely pay SaaS by card, and the merchant of record would need to support Egypt (**unverified**).

**FX risk:** the EGP has devalued sharply several times (2016, 2022–24). Mitigate with:
- annual prepay;
- USD-indexed price clauses;
- quarterly re-pricing.

---

## 9. Company and legal setup

- **Entity:** start with a foreign entity (e.g. an existing LLC or sole proprietorship) and sell through a **local reseller or representative**: an Egyptian regulatory consultancy or customs broker. It invoices in EGP, issues ETA e-invoices (which Egyptian B2B buyers need for tax deductibility) and remits net to the founder. Form an Egyptian LLC only after about 20 customers.
- **Tax:**
  - Egypt amended its VAT law (Law 3/2023) to make non-resident e-service providers register through a simplified scheme at 14% (**unverified**; applies mainly to B2C). B2B buyers typically self-account.
  - Payments abroad for services may attract Egyptian withholding tax (rate **unverified**; often cited as 20%). Get advice from an Egyptian tax advisor before the first invoice.
  - The reseller route avoids most of this.
- **Contracts:** an MSA plus a data processing addendum, Arabic and English versions with the Arabic controlling, and an arbitration clause (CRCICA in Cairo).
- **Liability:** professional indemnity or technology E&O cover of about US$500k–1m (**estimate**). Disclaim the regulated-party role clearly, and cap liability.

---

## 10. Financial model (24 months)

**Assumptions:**
- the founder unpaid;
- infrastructure and tools at US$150/month;
- a local partner retainer at US$300/month from month 2 (reseller margin replaces it after month 6);
- legal and accounting at US$1,500 one-off in month 1, then US$100/month;
- marketing and events at US$200/month;
- ARPU of US$120/month rising to US$140 in year 2;
- churn of 2%/month;
- concierge per-lot revenue in months 2–4.

| Period | Paying customers | MRR (US$) | Monthly costs (US$) | Cumulative cash (US$) |
|---|---|---|---|---|
| M1 | 0 | 0 | 1,850 | −1,850 |
| M2 | 1 (per-lot) | 80 | 750 | −2,520 |
| M3 | 2 | 200 | 750 | −3,070 |
| M4 | 3 | 330 | 750 | −3,490 |
| M5 | 4 | 480 | 750 | −3,760 |
| M6 | 5 | 600 | 750 | −3,910 |
| M7 | 6 | 720 | 450 | −3,640 |
| M8 | 7 | 840 | 450 | −3,250 |
| M9 | 8 | 960 | 450 | −2,740 |
| M10 | 9 | 1,080 | 450 | −2,110 |
| M11 | 11 | 1,320 | 450 | −1,240 |
| M12 | 12 | 1,440 | 450 | −250 |
| Q5 (M13–15) | 15 | 2,100 | 500 | +3,950 |
| Q6 (M16–18) | 18 | 2,520 | 500 | +10,000 |
| Q7 (M19–21) | 21 | 2,940 | 550 | +17,150 |
| Q8 (M22–24) | 24 | 3,360 | 550 | +25,580 |

- **Break-even (cash, founder unpaid):** monthly break-even in about month 5–6, cumulative break-even in about month 13.
- **With a modest founder salary (US$4k/month):** no break-even within 24 months.

**Realistic ceiling:**
- the SAM is about 150–400 entities (importers whose suppliers lack L4 systems, plus toll-manufacturing clients; **estimate**);
- at 25% share and US$1,600 ACV, that is about **US$60k–160k ARR**;
- adding distributors (500+ firms) in later phases could double this, but only if their events become file-based and are not covered by ERP or SAP vendors.

This is a side business, not a full-time company, unless it expands to other countries.

---

## 11. Team and founder fit

- **Skills:** strong data engineering (EPCIS/GS1, XML, large files) and pharma-regulatory literacy (GTIN, SSCC, aggregation).
- **Language:** Arabic is essential for sales, support and reading EDA notices, many of which are Arabic-only (e.g. the Arabic implementation guide).
- **Non-local founder:** realistic only with an Egyptian co-founder or a paid local partner. The partner should be a pharmacist with regulatory affairs experience who has EDA relationships and attends EDA and GS1 sessions.
- **Ideal pair:** a developer plus an Egyptian regulatory affairs pharmacist.

---

## 12. Risks and mitigations

| Type | Risk | Mitigation |
|---|---|---|
| Regulatory | EDA changes formats often (FAQ v1→v3 within months); scope changes or delays under industry pushback (Decree 804 controversy) | Versioned rule sets; subscribe to EDA notices; build an XML-first core so CSV is just one output |
| Platform/government | The Masar B2B gateway lets suppliers' L4 systems report directly, removing the importer's conversion job; EDA adds dashboard validation or a free template tool | Target suppliers without L4; sell evidence, validation and the supplier-collection loop, not just conversion; kill test at interviews |
| Competitive | TraceLink and peers launch a cheap "Egypt importer" tier; GS1 Egypt or local integrators bundle a converter with training | Price far below enterprise tiers; partner with GS1 Egypt consultants rather than compete; move fast in Q4 2026 |
| Operational | One wrong output causes a rejection and a release delay; a solo founder is unavailable during a crisis | Pre-validation, replayable audit, a 24 h SLA via the local partner |
| FX/payment | EGP devaluation, transfer friction, withholding tax | EGP invoicing through a reseller, annual prepay, USD-indexed clauses |
| Market size | Too few obliged entities to justify full-time work | Treat as a wedge into other EPCIS markets (section 14) |

---

## 13. Validation plan before writing code

**Interview targets (12–15):**
- 6 small or mid-size medicine importers or scientific offices (mixed supplier origins: India, China, Turkey, Jordan, EU);
- 3 toll-manufacturing clients;
- 1 contract factory serialization or IT lead;
- 1 customs broker handling pharma;
- 1 GS1 Egypt trainer or consultant;
- 1 Freyr or Maven consultant;
- 1 person from the Federation of Chambers' pharma division.

**Questions:**
1. How many lots a month need EPTTS reporting, and how many SKUs?
2. In what format does each supplier send serial and aggregation data? Do any submit directly via Masar B2B?
3. Do you upload CSV or bulk XML? How many attempts until acceptance? Show me the last rejection message.
4. Who does this today, and for how many hours a month? Have you hired or reassigned staff for it?
5. Have you been quoted by TraceLink, Optel, rfxcel or a local integrator? At what price?
6. What happens to stock while a file is rejected?
7. Would you pay EGP 4–8k a month, or EGP 1–2k per lot, for first-time-right files? Who approves that?

**Pass thresholds:**
- at least 6 of 12 report at least one rejection cycle per month;
- at least 5 have a supplier that sends non-EPCIS files;
- at least 4 say they would pay at least EGP 4k a month;
- at least 3 will send real anonymised files.

**Fail and kill:**
- at least 5 of 10 importers say suppliers or forwarders already deliver files that upload without rejections, or that suppliers report directly via B2B; or
- EDA has a free in-dashboard converter or validator; or
- average volume is under 2 lots a month.

**Pre-sale test:** offer a paid concierge pilot of EGP 5,000 for the first 5 lots, money-back if any
file is rejected. Target 3 signed pilots or LOIs within 4 weeks of the first interview.

---

## 14. Expansion path

**Adjacent workflows in Egypt:**
- shipping and receiving events for distributors and warehouses in later phases;
- bulk-import and repacking events;
- recall and decommissioning evidence;
- GTIN registration preparation for EDA;
- medical devices if EDA extends traceability (**unverified**).

**Other countries with the same pattern** (national EPCIS/CSV reporting with importer
accountability, and many small importers):
- Saudi Arabia (RSD);
- Jordan (JFDA);
- Bahrain, Oman, UAE (Tatmeen);
- Algeria;
- Kazakhstan, Uzbekistan;
- Ukraine;
- Nigeria (NAFDAC traceability, in progress).

Status of each is **unverified** in this session; check before targeting. The reusable asset is
an "any supplier file → national EPCIS profile" rules engine.

---

## 15. Reassessment scorecard

| Criterion | Original (implied) | New | Reason |
|---|---|---|---|
| Pain | 7 | 6 | Atomic rejection is real, but suppliers with L4 systems can deliver EPCIS XML that Masar accepts directly |
| Frequency | 7 | 7 | Per lot, several times a month |
| Mandatory nature | 9 | 9 | In force since Feb and Aug 2026; the importer is legally accountable |
| Fragmentation | 6 | 6 | Many supplier formats; one regulator |
| Existing competition | 6 | 5 | Seven or more enterprise vendors plus GS1 Egypt support; the low end is still empty |
| Incumbent gap | 7 | 6 | The gap is limited to non-L4 suppliers and toll clients |
| Buyer accessibility | 6 | 6 | Chambers, GS1 cohorts and LinkedIn; no public importer list confirmed |
| Willingness to pay | 6 | 5 | A small EGP-priced market, FX friction, a price-sensitive sector under liquidity stress |
| MVP simplicity | 8 | 8 | Pure file processing and rules |
| Distribution | 6 | 5 | Needs an Arabic-speaking local partner; the market is a few hundred entities |
| **Overall** | **7.0** | **5.5** | Down 1.5: the direct EPCIS XML path (Masar B2B and bulk XML) removes much of the conversion pain, and the obliged market looks smaller (~1,300 imported SKUs in Phase 1) |

---

## Sources

- EDA EPTTS Technical FAQ v3 (2026): https://www.edaegypt.gov.eg/media/fs1folht/egyptian-track-trace-for-pharmaceutical-eptts-technical-faq-v3_20262.pdf
- EDA EPTTS Technical FAQ Phase 1: https://www.edaegypt.gov.eg/media/paif1cpf/egyptian-track-trace-for-pharmaceutical-eptts-technical-faq-phase-1-_2026.pdf
- EDA Phase-1 CSV notice: https://www.edaegypt.gov.eg/media/11dbtsln/eptts_phase1_csv_.pdf
- EDA Masar B2B EPCIS XML (Arabic): https://www.edaegypt.gov.eg/media/enxchlgk/npxml-commissioning-packing-and-shipping-in-masar-b2b-epcis-events-2026-ar.pdf
- EDA Arabic implementation guide for commissioning and packing: https://edaegypt.gov.eg/media/3w5jvh0u/notice-to-app-implementation-guide-for-commissioning-and-packing-ar.pdf
- EDA user guide: https://edaegypt.gov.eg/media/pz5mij1g/eptts-user-guide-notice-to-applicant.pdf
- EDA track-and-trace services page: https://edaegypt.gov.eg/en/services/track-and-trace/
- TraceLink Egypt guides: https://www.tracelink.com/resources/resource-center/integrate-once-interoperate-with-everyone-a-practical-guide-to-egypt-traceability-compliance and https://www.tracelink.com/resources/resource-center/egypt-traceability-meet-eda-requirements-and-stay-ahead-2026-mandates
- TraceLink MENA SIG: https://www.tracelink.com/resources/community/middle-east-and-north-africa-mena-special-interest-group
- Optel: https://www.optelgroup.com/en/compliance/egypt-eda-track-and-trace/
- LSPedia: https://www.lspedia.com/regulation/egypt
- Visiott: https://www.visiott.com/news/egypt-track-and-trace-regulations
- Maven RS: https://www.mavenrs.com/blog/egypt-pharmaceutical-serialization-track-and-trace-compliance-2026
- Freyr: https://www.freyrsolutions.com/fr/blog/egypt-pharma-serialization-track-and-trace-compliance-navigating-decrees-4752025-1612025
- Almanassa (25 imported drugs, 18,000 packs; 3–5 year rollout): https://almanassa.com/en/news/30267
- Al Bawaba (Jul 2026): https://www.albawabhnews.com/5315857
- Parlmany (31 Jul 2026, EDA project details): https://www.parlmany.com/News/2/550203/
- Masrawy (Chamber pharma division warning on Decree 804, Jan 2026): https://www.masrawy.com/news/news_egypt/details/2026/1/8/2921781
- Al Mal News (EDA with DAF, SAP, GS1): https://almalnews.com/2127647/
- Amwal Al Ghad (GS1 Egypt initiatives, Feb 2026): https://amwalalghad.com/2026/02/04/شركة-gs1-egypt-تطلق-مبادرات-قومية-لدعم-تطبيق-م/
- Al Mal News (free pharmacy GLN, 70% warehouse discount): https://almalnews.com/2097205/
- Parlmany (Aug 2026, 179 drug factories): https://www.parlmany.com/News/4/612553/
