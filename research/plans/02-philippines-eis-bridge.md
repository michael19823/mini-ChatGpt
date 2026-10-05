# Development plan #2: Philippines EIS bridge for local CAS software vendors

**Ranked #2 globally, original score 7.0.** Source: `research/countries/philippines.md`.
**Plan date:** 2026-10-05. **Verification budget:** 15 web searches, all used. WebFetch was blocked, so every source below was read through search-result summaries, not opened directly.

---

## 1. Verdict up front

**Interview first, with a pivoted product. Do not build the hosted "transmit on the client's behalf" gateway the report described.** Verification did not kill the idea, but it changed it in three ways:

1. **Third-party providers are allowed in principle, but nobody can be accredited right now.** RMC 98-2026 (22 Sept 2026) lets taxpayers use an in-house system, a commercial solution, or an E-invoicing Service Provider (ESP). An ESP must be a juridical entity organised or licensed in the Philippines. On 14 Sept 2026, however, BIR said it has accredited no ESP. It suspended all ESP accreditation, onboarding and integration engagements, and it forbids anyone from claiming BIR affiliation. A foreign solo founder therefore cannot become an ESP before the deadline.
2. **The 31 Dec 2026 deadline stands, but it covers issuing invoices, not transmitting them.** The obligation is to *issue* structured e-invoices, with a Permit to Issue (PTI) first. Mandatory sales-data transmission (Sec. 237-A, e-sales reporting) has been split off and waits for a separate regulation. What does bind is the **EIS Certification within 6 months of the PTI**: a sandbox test proving the system *can* extract, sign (JWS) and transmit JSON. That sets a second hard window of roughly **Jan–Jun 2027**.
3. **POS users and micro taxpayers are out of this wave.** POS users, exporters and incentivised enterprises wait for separate regulations. The buyer narrows to vendors of CAS/CBA and invoicing software, and to their non-micro clients.

The surviving opportunity is a **self-hosted EIS SDK plus a certification kit** for small Philippine CAS and invoicing-software houses: a library or container that runs on the vendor's or taxpayer's own server, which fits BIR's "certificate per server" model. It needs no ESP status, never holds client keys centrally, and carries little liability. Hosted transmission becomes a later option, once BIR publishes its ESP framework and only through a Philippine entity or partner. Worth a 3-week interview sprint. If fewer than 4 of 12 vendors say they need outside help for the sandbox, kill it.

## 2. Verification results

| Claim from report | What you found | Source | Status |
|---|---|---|---|
| Deadline 31 Dec 2026 (RR 11-2025 as amended by RR 26-2025) | Retained by RMC 98-2026, issued 22 Sept 2026 and effective immediately. Micro taxpayers excepted. | [Grant Thornton](https://www.grantthornton.com.ph/technical-alerts/tax-alert/2026/bir-issues-guidelines-on-electronic-invoicing-retains-31-dec-2026-deadline/), [KPMG](https://kpmg.com/us/en/taxnewsflash/news/2026/09/philippines-e-invoicing-required-dec-31-2026.html), [Sovos](https://sovos.com/regulatory-updates/global-vat/philippines-publishes-policies-and-guidelines-on-e-invoicing-mandate-ahead-of-december-2026-deadline/) | Confirmed |
| Sales data goes to EIS as JSON within 3 days | Issuance (Sec. 237) is "separate and distinct" from e-sales reporting (Sec. 237-A). Mandatory sales-data transmission is excluded until a separate regulation. The 3-day rule is not yet binding for this wave. | [Sovos](https://sovos.com/regulatory-updates/global-vat/philippines-publishes-policies-and-guidelines-on-e-invoicing-mandate-ahead-of-december-2026-deadline/), [vatupdate briefing](https://www.vatupdate.com/2026/09/26/briefing-document-podcast-philippines-e-invoicing-and-e-reporting/), [borncity](https://borncity.com/news/e-rechnungen-und-eis-bir-trennt-rechnungspflicht-vom-datentransfer/) | **Changed** |
| PTI first, then EIS certification within 6 months | Confirmed. EIS Certification validates the ability to "extract, process and transmit sales data" to BIR technical standards. The PTI can be revoked if certification is missed. Portal: eis-cert.bir.gov.ph. | [Taxumo](https://www.taxumo.com/blog/bir-eis-explained-new-pti-and-downtime-rules-under-rmc-no-98-2026/), [Reyes Tacandong](https://www.reyestacandong.com/rmc-no-98-2026-electronic-invoicing-guidelines/), [GVES Law](https://gveslaw.com/rmc-no-98-2026-policies-and-guidelines-on-the-issuance-of-electronic-invoices/) | Confirmed |
| PTI applications due by late November 2026 | Not found in any summary | n/a | Unverified |
| Covered taxpayers include CAS/CBA users | Narrower than the report: "CAS or CBA with Accounting Records (**with electronic invoicing**), and other invoicing software". | [Sovos](https://sovos.com/regulatory-updates/global-vat/philippines-publishes-policies-and-guidelines-on-e-invoicing-mandate-ahead-of-december-2026-deadline/), [Grant Thornton](https://www.grantthornton.com.ph/insights/articles-and-updates1/tax-notes/rmc-no-98-2026-prescribing-policies-and-guidelines-on-the-issuance-of-electronic-invoice-under-rr-no-8-2022-and-rr-no-11-2025-as-amended-by-rr-no-26-2025/) | Changed (narrower) |
| POS users are a second wave | Confirmed. POS users, exporters and incentivised RBEs await separate regulations. | Sovos (above) | Confirmed |
| BIR accredited no ESP and suspended some engagements | Stronger than reported. As of 14 Sept 2026, BIR has accredited no entity. It suspended *all* ESP meetings, demos, accreditation, onboarding and integration requests, and it prohibits claims of accreditation or affiliation. | [KPMG advisory PDF](https://assets.kpmg.com/content/dam/kpmgsites/ph/pdf/InTAX/2026/EIS-Public-Advisory-Sep-2026-redacted.pdf), [vatupdate](https://www.vatupdate.com/2026/09/26/briefing-document-podcast-philippines-e-invoicing-and-e-reporting/) | Confirmed, and worse |
| Third parties can transmit on a taxpayer's behalf | **Allowed in principle.** RMC 98-2026 defines an ESP as a PH-organised or PH-licensed juridical entity providing integration, validation, transmission, storage and similar services, and says taxpayers may use one. **No accreditation route is open today.** | [KPMG](https://kpmg.com/us/en/taxnewsflash/news/2026/09/philippines-e-invoicing-required-dec-31-2026.html), [Cruz Marcelo](https://cruzmarcelo.com/bir-issues-policies-and-guidelines-on-the-issuance-of-electronic-invoice/) | Changed: possible later, blocked now |
| Integration is via JSON API | JSON payload signed with a JWS (the taxpayer's private key). Sandbox testing on the certification portal leads to the EIS certificate and a Permit to Transmit. Per ClearTax, the EIS certificate is issued **per server, not per company**, and sandbox registration needs the TIN, a board resolution, an ID and the CAS permit. | [ClearTax EIS certificate guide](https://www.cleartax.com/ph/how-to-get-eis-certificate-philippines), [ClearTax JSON format](https://www.cleartax.com/ph/philippines-bir-e-invoice-json-format), [Cygnet](https://www.cygnet.one/ph/products/e-invoicing/) | Confirmed (vendor sources; "per server" is unverified with BIR) |
| Penalties | Failure to issue an invoice: ₱1,000–50,000 plus imprisonment, per offence. Failure to transmit: higher fines (₱10k/day or 0.1% of net income; ₱500k–10M plus closure for e-receipt transmission failures). Transmission penalties matter only once e-sales reporting is mandatory. | [ClearTax penalties](https://www.cleartax.com/ph/bir-e-invoicing-penalties-philippines), [GT EOPT summary](https://www.grantthornton.com.ph/contentassets/2208a706d6c743e0a9a6c4f6d89d81b1/eopt-act-comparative-summary.pdf) | Unverified (vendor summary; check the NIRC text) |
| Competitors are enterprise players plus Juan/NextPay | Also found: an **Odoo app "l10n_ph_einvoice_gb" at about US$79** (one-off), **AutoCount** (Malaysian vendor, BIR-accredited POS, targets PH SMEs), **RTC Suite**, **Flick**, a public tender for a "Philippine e-Invoicing Middleware Solution". No PH startup selling a vendor SDK was found. | [Odoo app](https://apps.odoo.com/apps/modules/18.0/l10n_ph_einvoice_gb), [AutoCount](https://www.malaymail.com/amp/news/money/mediaoutreach/2025/04/09/autocount-pos-achieves-bir-accreditation-simplifying-tax-for-philippine-smes-and-driving-growth/372633), [RTC Suite](https://rtcsuite.com/e-invoicing-philippines/), [Flick](https://www.flick.network/en-ph/philippines-e-invoicing-compliance-2026), [tender](https://www.find-tender.service.gov.uk/procurement/ocds-h6vhtk-06f41c) | Changed (more competitors) |
| Many thousands of covered SMEs | No count found for CAS/CBA users or for software houses with BIR acknowledgement certificates. No public list of software providers found. | searches 9, 14 | Unverified |
| Juan/NextPay e-invoicing pricing | Not found | search 12 | Unverified |

## 3. Customer and problem

**Buyer.** The owner or CTO of a small Philippine software house (about 2–30 staff) that sells a CAS, CBA or invoicing system to SMEs, typically 20–500 client taxpayers. Many are built on .NET/VB, PHP or Java with an on-premise database at the client site.

**User.** The vendor's developer who must pass the BIR sandbox, then the vendor's support staff who run per-client PTI and certification paperwork.

**Secondary buyer.** The finance head of a medium taxpayer running a home-grown CAS with no vendor left to call.

**Job to be done.** "Make our existing invoicing product produce BIR-compliant structured e-invoices and pass EIS Certification for each client server within 6 months of the PTI, without rewriting the product or losing clients to Juan, NextPay or ClearTax."

**Current workflow (all times and costs are estimates):**

| Step | Who | Time | Cost |
|---|---|---|---|
| 1. Read RR 11-2025, RR 26-2025, RMC 98-2026 and the EIS technical specs; follow seminars | Vendor owner/dev | 3–5 days | ₱0–₱10k in seminar fees |
| 2. Map the product's invoice tables to the BIR JSON schema (header, buyer TIN, line VAT breakdown, discounts, credit/debit notes) | Developer | 2–4 weeks | ₱80k–₱200k at local dev rates |
| 3. Implement JWS signing and key handling per client | Developer | 1–2 weeks | ₱40k–₱100k |
| 4. Build transmission, retry and acknowledgement handling for the sandbox | Developer | 1–2 weeks | ₱40k–₱100k |
| 5. For each client: register on the EIS cert portal (TIN, board resolution, ID, CAS permit), run sandbox tests, request the certificate and Permit to Transmit | Support staff plus the client's accountant | 1–3 days per client | ₱5k–₱15k per client in staff time |
| 6. Handle rejections, spec changes and BIR advisories | Developer | Ongoing, 1–3 days a month | ₱10k–₱30k a month |

Total one-off build per vendor: **about 5–9 developer-weeks (₱160k–₱400k, estimate)**, plus per-client certification labour. Thirty small vendors each solving the same problem alone is the inefficiency to sell into.

**Cost of failure.**
- For the client: invoicing without a compliant e-invoice after 31 Dec 2026 risks ₱1,000–₱50,000 per offence (unverified) and PTI revocation if certification is missed.
- For the vendor: churn to Juan, NextPay, ClearTax or Odoo. This churn threat is the real driver of willingness to pay.

## 4. Product definition

**Core loop.** Vendor's system emits an invoice → SDK maps and validates it to the BIR JSON → signs it with the client's key held locally → issues the structured invoice to the buyer (PDF plus JSON) → stores it → (when required) transmits it to EIS and records the acknowledgement → exceptions show on a local dashboard → a monthly certification and health report goes to the vendor.

**MVP (must-have, aimed at certification):**
- Canonical "simple invoice" input format (JSON or CSV) and a reference mapping guide for common table layouts.
- Validator implementing BIR field rules: TIN format, VAT/zero-rated/exempt breakdown, totals arithmetic, document types, credit/debit notes, cancellations.
- JWS signing module with local key storage. Keys never leave the client server.
- Sandbox transmission client with retry and an acknowledgement log.
- **Certification kit**: a scripted test suite that runs the BIR sandbox scenarios, plus a templated evidence pack (screenshots, logs, board-resolution template, checklist).
- Distribution as a Docker container and a small Windows service, since many clients are on-premise Windows.

**v1:**
- Production transmission mode, switched on only when e-sales reporting becomes mandatory.
- Vendor console (hosted, metadata only) showing each client's certification status, SDK version and error counts.
- Auto-update of rules when BIR changes its specs.
- Client libraries for .NET, PHP and Java.

**Later:**
- Hosted ESP mode through a Philippine entity or partner, once BIR publishes ESP accreditation.
- POS module when the POS regulation lands.
- Buyer-side e-invoice ingestion for AP and 2307 matching.

**Out of scope:** being a ledger or accounting system; marketplace (Shopee/Lazada) connectors; large-taxpayer ERP connectors (SAP/Oracle); holding client signing keys centrally; any claim of BIR accreditation (prohibited by the 14 Sept advisory).

**Key screens and flows:**
1. *Vendor onboarding:* create the vendor account, download the SDK, run `eis-doctor`, which checks connectivity, clock, key and a sample-invoice validation.
2. *Mapping workbench:* paste a sample invoice from the vendor's database. It shows field-by-field mapping to BIR JSON with red and amber validation messages.
3. *Certification run:* for a chosen client server, a step list (portal registration checklist → sandbox test scenarios → evidence pack PDF), each step with pass/fail.
4. *Local exceptions queue* (on the client server): rejected or invalid invoices with a reason and fix hint, and resubmit.
5. *Vendor console:* a table of clients with PTI date, 6-month certification deadline countdown, SDK version and last error.

## 5. Technical design

**Architecture.**
- **Edge agent:** self-hosted at the vendor or client server. It contains the validator, the signer, the transmitter, a local SQLite or Postgres store, and a small local web UI.
- **Control plane:** hosted. It provides licensing, the rules/spec update feed, metadata-only telemetry (counts, error codes, versions, no invoice content by default), the vendor console, and the certification-kit generator.
- Data flow: invoice content stays on the client's server and goes straight to BIR. Only metadata reaches the control plane.
- Hosting: a single region near the Philippines (AWS ap-southeast-1 Singapore) is fine for metadata. It also keeps the product outside the "processing invoice data on behalf of taxpayers" ESP definition for as long as possible.

**Stack for a solo developer.**
- Edge agent in **Go**: a single static binary for Windows and Linux, easy to run as a service, with good JOSE/JWS libraries. A thin HTTP API means the vendor's .NET, PHP or VB code can call `localhost`.
- Control plane: TypeScript (Next.js) plus Postgres on a managed host. Paddle or Lemon Squeezy for billing (see §8).
- Reasons: one deployable binary avoids dependency hell on old client PCs, and Go's cross-compilation covers both operating systems.

**Data model.**
- `Vendor`, `ClientTaxpayer` (TIN, branch code, RDO, classification, PTI date, certification deadline), `Server` (certificate status, because certification is per server)
- `Invoice` (edge only: canonical JSON, BIR JSON, signature, status)
- `Transmission` (attempt, response, acknowledgement ID), `ValidationError`, `RuleSetVersion`, `CertificationRun` (scenario results, evidence files)

**Integrations.**

| Integration | Method | Fallback |
|---|---|---|
| BIR EIS sandbox (certification) | REST/JSON with JWS, per the published spec | Generate a valid JSON file and a step-by-step guide for manual upload on the portal (if the portal offers it; unverified) |
| BIR EIS production transmission | Same API, once e-sales reporting is mandated | Queue locally; keep the evidence trail |
| Vendor product | Local HTTP API, CSV drop folder, or direct DB view mapping | Concierge mapping done by the founder |
| Buyer delivery | PDF plus JSON by email or download link | Printed representation |

**Rules engine.** Declarative YAML or JSON rules, versioned (`RuleSetVersion`) and pushed from the control plane. Each rule has an ID, a severity, a BIR reference (RR or RMC paragraph or spec field) and a fix hint. A golden test corpus of about 200 invoices (VAT, zero-rated, exempt, mixed, discounts, senior/PWD discounts, credit/debit notes, cancellations, foreign currency) runs on every rules release.

**Security, privacy and data residency.**
- **Data Privacy Act of 2012 (RA 10173)** and NPC rules: buyer names and TINs are personal data for sole proprietors. If metadata telemetry stays content-free, the control plane is barely a personal-information processor. Sign data-processing agreements with vendors anyway.
- NPC registration thresholds (NPC Circular 2022-04) need checking. Unverified.
- No Philippine data-localisation law is known for this data (unverified). BIR record-keeping rules apply to the taxpayer's own storage, which the edge agent keeps locally.
- Private keys are generated and stored on the client server (OS keystore or an encrypted file). The founder never holds them.

**Audit trail and liability.**
- The edge agent keeps an append-only log: hash-chained invoice JSON, signature, validation result, transmission attempts and responses.
- The taxpayer remains legally responsible for issuance. Contracts state the product is a software tool, not an ESP or a BIR-accredited provider.
- Liability is capped at 12 months of fees, with a clear "validator passes ≠ BIR acceptance" clause.
- If a submission is wrong, the log shows which rule version validated it, and a correction is issued through a credit/debit note flow.

**Localisation.** English UI (Philippine business and tax software is English-first); Tagalog/Taglish only in marketing videos. Currency PHP with centavo precision. TIN in 9 digits plus a 3–5 digit branch code. RDO codes. VAT 12%, plus zero-rated and exempt categories.

**Testing against the government format.**
- Contract tests against the published JSON schema.
- A nightly sandbox smoke test with a test TIN, if BIR issues one to developers (unverified).
- A golden corpus, plus diffing against invoices accepted by design partners' sandbox runs.
- Spec-change monitoring: a weekly manual check of BIR issuances and the eis-cert portal.

## 6. Build plan

Week 0 is 5 Oct 2026. Effort is in developer-weeks (dw) for one developer.

| Weeks | Milestone | Effort |
|---|---|---|
| 0–3 (5–23 Oct) | Validation sprint (§13). Obtain the EIS technical specs and sandbox access through a design partner's client. Pre-sell certification-kit pilots. **Go/no-go on 23 Oct.** | 0 dw (founder time) |
| 4–6 (26 Oct–13 Nov) | Edge agent: canonical input, BIR JSON mapper, validator v0, JWS signing, sandbox client. One design partner mapped by the founder (concierge). | 3 dw |
| 7–8 (16–27 Nov) | Certification kit: scenario runner plus evidence-pack PDF. First design partner's client passes the sandbox. | 2 dw |
| 9 (30 Nov–4 Dec) | Licensing, Paddle checkout, installer (Windows service plus Docker). **First paying vendor** (pilot conversion). | 1 dw |
| 10–13 (Dec) | Deadline crunch: support 3–5 vendors, CSV drop-folder mode, credit/debit notes, cancellations. | 3 dw |
| 14–20 (Jan–mid Feb 2027) | Vendor console (certification deadlines per server), rules update feed, .NET and PHP client snippets. | 4 dw |
| 21–26 (to end Mar 2027) | v1: production transmission mode behind a flag, hash-chained audit log, monitoring, docs site. | 4 dw |

**To first paying customer:** about 6 dw over 9 calendar weeks. **To v1:** about 17 dw (about 26 weeks).

**Concierge at first:**
- The founder maps each vendor's tables by hand.
- The evidence pack is assembled in Google Docs.
- The vendor console starts as a shared spreadsheet.
- Rules updates are shipped as new binaries.
- Portal registration paperwork is done over a video call with the client's accountant.

## 7. Go-to-market

**The ideal first 10 customers:** PH software houses selling CAS/CBA or invoicing software to non-micro SMEs (distributors, contractors, professional firms, small manufacturers) with 30–300 clients, an owner-developer, and no enterprise e-invoicing partner yet.

**How to reach them:**
- **Accounting firms.** Ask 20 bookkeeping and accounting firms which local systems their clients run. This is the best list source, because no public BIR software-provider list was found.
- **Vendor websites and Facebook pages advertising "BIR-accredited" or "BIR CAS-ready" software.** Search Facebook, Google Maps and Philippine software directories.
- **Seminar circuits.** Grant Thornton, KPMG and PICPA chapters run e-invoicing webinars, and vendors attend.
- **Philippine Software Industry Association (PSIA)** member directory (unverified that members include small CAS vendors).
- **LinkedIn** search for "CAS" plus "BIR" plus "software" in the Philippines.

**Outreach angles:**
- "Your clients' PTI clock starts the day they get it, and they have 6 months to pass EIS Certification **per server**. We give you a tested signer, validator and certification run, so you don't spend 6 developer-weeks on it."
- "Keep your clients. Don't let Juan or ClearTax use the e-invoicing deadline to migrate them off your product."
- "Your invoice data never leaves your client's server. We are a software tool, not an ESP."

**Channel partners:**
- Accounting and tax firms (referral fee of 10–20% of the first year).
- Local systems integrators.
- Possibly a PH partner that becomes the ESP later, while we supply the engine.

**Timing against the regulatory calendar:**
- October–November: sell to vendors whose clients file PTIs before 31 Dec.
- January–June 2027: peak demand as 6-month certification deadlines fall.
- Then the next spikes: the e-sales reporting regulation (transmission becomes real) and the POS regulation (a new vendor wave).

**Content and SEO (English with Taglish video):**
- "RMC 98-2026 for software developers"
- "EIS JSON field mapping cheat sheet"
- "How to pass the BIR EIS sandbox"
- "EIS certification per server: what it means for on-premise CAS"
- An open-source JSON validator on GitHub as lead generation.

## 8. Pricing and unit economics

**Tiers (estimates):**

| Tier | Price | Includes |
|---|---|---|
| Certification kit (one-off) | ₱40,000 per vendor | SDK licence for certification, scenario runner, evidence-pack templates, 2 concierge mapping sessions |
| Vendor plan | ₱15,000/month | Up to 10 client servers, rules updates, vendor console, email support |
| Per extra server | ₱500/month | Each deployed client server beyond 10 |
| Medium taxpayer direct (no vendor) | ₱3,000/month | Single server, self-serve |

**Expected ACV:** about ₱20k/month blended, roughly ₱240k/year (about US$4,300 at ₱56/US$, an estimate), plus ₱40k one-off.

**CAC by channel (estimates):**
- Founder direct outreach to vendors: ₱15k–₱30k (time-cost based, about 8 hours per closed deal).
- Accountant referral: 15% of first-year revenue, about ₱36k.
- Webinar/SEO: low marginal cost, slow.

**Gross margin:** about 85–90%. Hosting is small. Support is the main cost of revenue, and concierge mapping in year 1 pulls it toward 75%.

**Payment rails for a foreign founder:**
- Use **Paddle or Lemon Squeezy as merchant of record** for card payments and invoices in USD or PHP. The MoR handles Philippine VAT on digital services (RA 12023, the 2024 VAT on digital services law; details not verified this session).
- Many PH software houses prefer bank transfer and an official receipt. For those, use **Wise** PHP receiving details, or a PH reseller who issues a BIR-registered receipt.
- If the buyer must withhold expanded withholding tax and needs a Form 2307, invoicing from a foreign entity complicates their books. This friction is a reason to use a local reseller.

**FX risk:** revenue in PHP, costs largely in USD. The PHP has moved about 5–10% a year historically (estimate). Price in PHP for local fit and review yearly.

## 9. Company and legal setup

- **Entity:** not needed for an SDK sold through an MoR. **Needed to become an ESP**, which RMC 98-2026 says must be "organized or duly licensed to do business in the Philippines". Foreign-owned domestic corporations face minimum paid-up capital rules (US$200k, lowered in some cases under RA 11647). Unverified; get counsel. The realistic path is a **local partner** (an accounting-tech firm or software house) that holds ESP status later, with us licensing the engine to it.
- **Local partner or representative:** one PH-based partner for receipts, bank transfers, BIR-facing paperwork and in-person seminars, paid on revenue share (20%).
- **Tax/VAT:** RA 12023 imposes 12% VAT on digital services by non-residents. B2B sales to VAT-registered buyers are handled by reverse charge or by an MoR (unverified details). Home-country income tax applies to the founder.
- **Contracts:**
  - SDK licence and SaaS terms: not an ESP, no BIR affiliation claim, the taxpayer remains responsible, a liability cap.
  - Data processing agreement under RA 10173.
  - Vendor reseller terms that let vendors white-label.
- **Professional liability:** tech E&O cover of about US$1M (estimate US$1–2k/year) once there are 10 or more vendors.

## 10. Financial model (base case, conditional on interviews passing)

**Assumptions (all estimates):**
- Vendor ARPU ₱20k/month. Certification kit ₱40k per new vendor.
- Ramp: first vendor in month 3 (December 2026), then +1 a month to 10 by month 12, then +2 per quarter.
- Costs: PH partner/accountant ₱25k/month, hosting and tools ₱5.6k/month, partner and referral commission 20% of revenue.
- Founder draw ₱112k/month (about US$2k).
- One-off legal and setup ₱85k in month 1.
- No hosted-ESP revenue and no POS wave included.
- Month 1 = October 2026.

| Period | Vendors | MRR (₱) | Revenue in period (₱) | Costs (₱) | Net (₱) | Cumulative cash (₱) |
|---|---|---|---|---|---|---|
| M1 Oct-26 | 0 | 0 | 0 | 227,600 | -227,600 | -227,600 |
| M2 Nov-26 | 0 | 0 | 0 | 142,600 | -142,600 | -370,200 |
| M3 Dec-26 | 1 | 20,000 | 60,000 | 154,600 | -94,600 | -464,800 |
| M4 Jan-27 | 2 | 40,000 | 80,000 | 158,600 | -78,600 | -543,400 |
| M5 Feb-27 | 3 | 60,000 | 100,000 | 162,600 | -62,600 | -606,000 |
| M6 Mar-27 | 4 | 80,000 | 120,000 | 166,600 | -46,600 | -652,600 |
| M7 Apr-27 | 5 | 100,000 | 140,000 | 170,600 | -30,600 | -683,200 |
| M8 May-27 | 6 | 120,000 | 160,000 | 174,600 | -14,600 | -697,800 |
| M9 Jun-27 | 7 | 140,000 | 180,000 | 178,600 | 1,400 | -696,400 |
| M10 Jul-27 | 8 | 160,000 | 200,000 | 182,600 | 17,400 | -679,000 |
| M11 Aug-27 | 9 | 180,000 | 220,000 | 186,600 | 33,400 | -645,600 |
| M12 Sep-27 | 10 | 200,000 | 240,000 | 190,600 | 49,400 | -596,200 |
| Q5 (M13–15) | 12 | 240,000 | 760,000 | 579,800 | 180,200 | -416,000 |
| Q6 (M16–18) | 14 | 280,000 | 880,000 | 603,800 | 276,200 | -139,800 |
| Q7 (M19–21) | 16 | 320,000 | 1,000,000 | 627,800 | 372,200 | +232,400 |
| Q8 (M22–24) | 18 | 360,000 | 1,120,000 | 651,800 | 468,200 | +700,600 |

**Summary:**
- **Month-12 MRR:** ₱200k (about US$3.6k).
- **Operating break-even:** month 9 (June 2027).
- **Cumulative cash break-even:** about month 20 (mid-2028).
- **Peak funding need:** about ₱700k (about US$12.5k).

**Realistic ceiling:** SAM is an estimated 150–400 local CAS/invoicing software houses (no registry count found) plus direct medium taxpayers. A 15–25% share gives about 30–80 vendors × ₱20–30k, or **₱0.6M–₱2.4M MRR (about US$11k–43k)**. Upside comes if the e-sales reporting and POS regulations land, roughly doubling the vendor pool (estimate). Downside: if BIR extends the deadline again, the curve shifts right by 6–12 months.

## 11. Team and founder fit

- **Skills:**
  - A backend developer comfortable with JOSE/JWS, schema validation, Windows services and messy legacy databases.
  - Enough PH tax literacy (VAT, TIN/branch codes, invoice rules) to talk to accountants.
  - English is sufficient for business. Tagalog helps for rapport and video content, but is not required.
- **Non-local founder:** realistic for the SDK model (remote sales over Zoom and Viber/WhatsApp, an English-speaking market, UTC+8). Weak for the ESP model, which needs a PH entity and BIR relationships, and BIR currently refuses ESP meetings anyway.
- **Local help needed:**
  - A part-time PH partner (a CPA or accounting-tech person) for BIR-facing questions, seminars, receipts and referrals.
  - A PH tax lawyer for 2–3 hours to confirm the "tool vs ESP" positioning.

## 12. Risks and mitigations

| Risk | Type | Likelihood | Mitigation |
|---|---|---|---|
| BIR extends the 31 Dec 2026 deadline again (it slipped once already) | Regulatory | Medium | Sell the certification kit as one-off value; the 6-month certification clock still applies when PTIs are issued. Keep costs variable. |
| BIR's later ESP framework requires accredited ESPs only, or restricts self-hosted middleware | Regulatory | Low–medium | Sit under the vendor's or taxpayer's own system, which RMC 98-2026 explicitly allows ("in-house or commercial solution"). Prepare a licensing deal with a PH ESP partner. |
| Spec changes or portal instability | Platform | High | Versioned rules feed, a golden corpus, weekly issuance monitoring. |
| Vendors find the build easy (the JSON plus JWS is only a few weeks of work) and do it themselves | Competitive | **High** | This is the main kill test. Value sits in certification throughput and ongoing updates. Price below 1 developer-week. |
| ClearTax, Cygnet or Flick release cheap SDK or API plans; AutoCount and Odoo modules cover their own ecosystems | Competitive | Medium | Focus on on-premise legacy CAS vendors, which global SaaS gateways don't serve with local-only data. |
| Sales-data transmission stays non-mandatory for years, so "transmission" value is small | Regulatory | Medium | MVP value is issuance plus certification, not transmission. |
| Founder blamed for a client's penalty | Operational/legal | Low | Contract language, audit log, liability cap, E&O. |
| Collections friction (bank transfer, 2307 withholding, official receipts) | Payment | Medium | MoR for cards plus a PH reseller for receipts. |
| PHP depreciation | FX | Medium | Annual price review; costs mostly PHP-denominated via the local partner. |

**Biggest risk:** vendors build it themselves. The technical core is small enough that the decisive question is whether small vendors see weeks of developer time and per-server certification as worth paying to outsource.

## 13. Validation plan before writing code (5–23 Oct 2026)

**Interview targets (12–15):**
- 8–10 PH CAS/CBA or invoicing software owners or CTOs, found through accountants, Facebook "BIR-accredited software" pages and PSIA.
- 3 accounting firms with 50+ SME clients.
- 1–2 medium taxpayers on a home-grown CAS.
- 1 PH tax adviser, to sanity-check the ESP versus software-tool positioning.

**Questions:**
1. How many of your clients are non-micro and must issue e-invoices by 31 Dec 2026? How many have filed or plan to file a PTI, and when?
2. What have you built so far for the JSON schema, signing and sandbox? How many developer-weeks has it taken, and how many remain?
3. Have you accessed the eis-cert sandbox? What blocked you?
4. How will you handle certification per server for on-premise clients?
5. Are any clients threatening to switch to Juan, NextPay, ClearTax or Odoo because of e-invoicing?
6. Would you embed a third-party signer/validator? What would stop you (data, trust, price, language)?
7. What would you pay: one-off and monthly? How do you pay vendors today (card, bank transfer, need for a receipt)?

**Pass/fail thresholds:**
- **Pass:** at least 5 of 10 vendors have not yet passed the sandbox, at least 4 say they would embed an SDK, and at least 3 accept ₱15k/month or more (or ₱40k one-off).
- **Fail:**
  - 6 or more vendors are already done or nearly done;
  - or 6 or more will hand clients to a suite;
  - or vendors refuse any third-party code in their invoicing path.
- **Ambiguous:** demand is real but only for one-off help. Then sell a ₱40–80k fixed-price certification service with no SaaS, or walk away.

**Pre-sale test:** offer a "certification pilot" at ₱40,000, with 50% refundable if the first client server doesn't pass the sandbox by 31 January 2027. Target 3 paid deposits (or signed LOIs with a payment date) by 23 October. Fewer than 2 means kill.

## 14. Expansion path

- **Adjacent workflows in the Philippines:**
  - E-sales reporting transmission (Sec. 237-A) once mandated.
  - The POS regulation wave (a much larger vendor and user base).
  - Exporters and RBEs when covered.
  - Buyer-side e-invoice capture feeding Form 2307 and SAWT matching.
- **Same pattern elsewhere:** "local legacy-software vendors need a drop-in fiscal signer plus certification kit" fits countries where e-invoicing mandates reach SMEs through local software houses:
  - **Sri Lanka** (ranked 6.5 in the pattern table);
  - **Egypt** (the e-receipt POS wave);
  - **Malaysia** (MyInvois phases for smaller taxpayers; competitive);
  - **Vietnam, Kenya (eTIMS) and Bangladesh** (unverified fits).

## 15. Reassessment scorecard

The country report gave only an overall 7.0. The "original" column shows the per-criterion scores implied by its text (estimates).

| Criterion | Original (implied) | New | Reason |
|---|---|---|---|
| Pain | 8 | 6 | Transmission isn't mandatory yet. The pain is a one-off build plus per-server certification, not a daily burden. |
| Frequency | 7 | 5 | Issuance is per invoice, but the buyer's pain is mostly a one-off build and certification, then spec updates. |
| Mandatory nature | 9 | 8 | Issuance by 31 Dec 2026 and certification within 6 months are mandatory. It has slipped before. |
| Fragmentation | 5 | 5 | One national format. Fragmentation sits in vendor stacks and per-server certification. |
| Existing competition | 5 | 4 | More players than reported: Odoo module (~US$79), AutoCount, Flick, RTC Suite, plus enterprise gateways. |
| Incumbent gap | 7 | 6 | No vendor SDK aimed at small local legacy CAS was found, but the gap is narrow and DIY is feasible. |
| Buyer accessibility | 6 | 4 | No public list of CAS software providers was found; the list must be built from accountants and social media. |
| Willingness to pay | 6 | 5 | Vendors pay to avoid churn, but likely prefer one-off fees. Unproven. |
| MVP simplicity | 7 | 7 | Self-hosted Go agent plus validator plus cert kit is about 6 dw to first sale. ESP status is avoided. |
| Distribution | 7 | 5 | The channel logic holds (one vendor, many SMEs), but outreach is manual and BIR blocks ESP-style partnerships for now. |

**New overall score: 5.5/10 (was 7.0).** It drops 1.5 points because:
- verification showed mandatory transmission is deferred and POS users are excluded, which removes the recurring "transmission gateway" core;
- BIR has frozen the ESP route that the hosted product needed;
- there are more cheap competitors than reported.

It stays above 5 because a hard, near-term certification window exists, and a self-hosted SDK avoids the third-party barrier. Run interviews only; build only if the pre-sale clears.

---

### Sources

- https://kpmg.com/us/en/taxnewsflash/news/2026/09/philippines-e-invoicing-required-dec-31-2026.html
- https://assets.kpmg.com/content/dam/kpmgsites/ph/pdf/InTAX/2026/RMC-No-98-2026-redacted.pdf
- https://assets.kpmg.com/content/dam/kpmgsites/ph/pdf/InTAX/2026/EIS-Public-Advisory-Sep-2026-redacted.pdf
- https://www.grantthornton.com.ph/technical-alerts/tax-alert/2026/bir-issues-guidelines-on-electronic-invoicing-retains-31-dec-2026-deadline/
- https://www.grantthornton.com.ph/insights/articles-and-updates1/tax-notes/rmc-no-98-2026-prescribing-policies-and-guidelines-on-the-issuance-of-electronic-invoice-under-rr-no-8-2022-and-rr-no-11-2025-as-amended-by-rr-no-26-2025/
- https://sovos.com/regulatory-updates/global-vat/philippines-publishes-policies-and-guidelines-on-e-invoicing-mandate-ahead-of-december-2026-deadline/
- https://www.vatupdate.com/2026/09/26/briefing-document-podcast-philippines-e-invoicing-and-e-reporting/
- https://borncity.com/news/e-rechnungen-und-eis-bir-trennt-rechnungspflicht-vom-datentransfer/
- https://cruzmarcelo.com/bir-issues-policies-and-guidelines-on-the-issuance-of-electronic-invoice/
- https://www.taxumo.com/blog/bir-eis-explained-new-pti-and-downtime-rules-under-rmc-no-98-2026/
- https://www.reyestacandong.com/rmc-no-98-2026-electronic-invoicing-guidelines/
- https://gveslaw.com/rmc-no-98-2026-policies-and-guidelines-on-the-issuance-of-electronic-invoices/
- https://www.cleartax.com/ph/how-to-get-eis-certificate-philippines
- https://www.cleartax.com/ph/philippines-bir-e-invoice-json-format
- https://www.cleartax.com/ph/bir-e-invoicing-penalties-philippines
- https://www.grantthornton.com.ph/contentassets/2208a706d6c743e0a9a6c4f6d89d81b1/eopt-act-comparative-summary.pdf
- https://www.cygnet.one/ph/products/e-invoicing/
- https://apps.odoo.com/apps/modules/18.0/l10n_ph_einvoice_gb
- https://www.malaymail.com/amp/news/money/mediaoutreach/2025/04/09/autocount-pos-achieves-bir-accreditation-simplifying-tax-for-philippine-smes-and-driving-growth/372633
- https://rtcsuite.com/e-invoicing-philippines/
- https://www.flick.network/en-ph/philippines-e-invoicing-compliance-2026
- https://www.find-tender.service.gov.uk/procurement/ocds-h6vhtk-06f41c
