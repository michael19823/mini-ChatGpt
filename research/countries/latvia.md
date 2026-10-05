# Latvia - research report (2026-10-05)

Method note: small market, 10 successful web searches (one further search was refused by the usage limit), WebFetch not used. Evidence comes from search-result summaries of official and trade sources (VID, tapportals.mk.gov.lv, likumi.lv, lvportals.lv, ifinanses.lv), not full reads of the primary documents. Competitor diligence is thin, and anything not verified is marked. Latvia is an accessible EU market: no sanctions, euro and SEPA payment rails, and no licence needed by a foreign software seller (for the products below; a cash-register service provider would be different). Population is about 1.9M, so every buyer pool is small. The realistic pattern is a Latvia-first product that later expands to Lithuania and Estonia.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Construction (general contractors and subcontractors) | EDLUS electronic site time recording, plus reconciliation with payroll within the 15% VEDLUDB tolerance | Candidate (opportunity 1) | Threshold lowered from EUR 350k to EUR 170k for projects started after 1 Jan 2025, binding on all such sites from 2026. Tolerance tightened from 20% to 15%. Fines up to EUR 100k |
| Outsourced accountants (licensed "ārpakalpojuma grāmatveži") | AML/CTF internal control system, client due diligence, beneficial-owner checks for VID inspections | Candidate (opportunity 2) | Mandatory VID licence (5 years) needs a working internal control system. VID inspections in 2026 focus on it. Many very small firms |
| Waste haulers / waste managers | APUS waste transport consignment notes, moving to full electronic data exchange (H2 2026) | Attractive problem, poor timing/distribution | The state system is being rebuilt (RRF-funded "complex waste circulation" system). Integration specs not yet public. Market small |
| All VAT payers / accountants | Structured e-invoicing (Peppol BIS 3.0): B2G from 2026, voluntary B2B from 30 Mar 2026, mandatory B2B plus reporting to VID from 1 Jan 2028 | Too competitive | Accounting suites (e.g. Tildes Jumis, Visma Horizon) and Peppol access points will cover it. Generic e-invoicing |
| Retail / hospitality | Electronic cash registers: registration and EDS confirmation (amended CM Reg. No. 96 effective 29 Dec 2025) | Rejected | Workflow is controlled by registered cash-register service providers. The change reduces burden (e-passports, remote updates). No gap |
| Food businesses | PVD traceability and labelling | Rejected (no trigger found) | Real inspection findings (17% traceability problems) but no new 2026 reporting duty found. Generic food-safety apps exist |

## Opportunities

### Opportunity: EDLUS-to-payroll reconciler for construction subcontractors

**Industry:**
Construction (general contractors and especially subcontractors on sites above EUR 170k)

**Buyer:**
Owner, payroll accountant or site manager of small and medium construction subcontractors (10-100 workers). Secondary buyer: the outsourced accountants who run their payroll.

**Trigger / Why now:**
Amendments to the Construction Law and Cabinet regulations lowered the EDLUS threshold from EUR 350,000 to EUR 170,000 (and new third-group buildings). This applies to projects whose start conditions were confirmed after 1 Jan 2025, and EDLUS is binding on all such sites from 1 Jan 2026. The planned tolerance between EDLUS hours and actually recorded working hours per person per month drops from 20% to 15%. VID runs at least 50 targeted site inspections a year from 2025 and uses EDLUS data for real-time risk checks. Fines reach EUR 100,000 for legal entities.

**Current workflow:**
1. The main contractor runs an EDLUS system (turnstile/card, biometric or mobile app, e.g. LMT EDLUS). Workers check in and out. The data flows to the VID VEDLUDB database.
2. Each subcontractor separately records working time in timesheets or Excel and runs payroll in its accounting software (Jumis, Horizon, Zalktis and others). Hours are reported to VID through EDS employer reports.
3. Before or after VID flags it, someone compares EDLUS hours exported per site or seen in EDS against payroll timesheet hours, worker by worker. They chase missing check-outs, workers registered under the wrong employer, and site transfers.
4. They correct timesheets or document reasons for discrepancies above the tolerance.

**Pain:**
The legal tolerance is explicit (15% planned) and monitored automatically by VID. Penalties are large compared with subcontractor margins. Many more and smaller sites (EUR 170k and up) are now in scope, so smaller subcontractors without HR staff are newly affected. Government reports note EDLUS is a primary tool against undeclared work in construction. Whether complaints are widespread was not verified.

**Existing solutions:**
- EDLUS system providers (e.g. LMT EDLUS mobile app; access-control and turnstile integrators). They serve the main contractor and produce worked-hours reports, but do not reconcile against the subcontractor's payroll.
- Latvian accounting/payroll software (Tildes Jumis, Visma Horizon, others). Payroll, but no EDLUS import confirmed (unverified).
- The VID EDS portal itself (subcontractors can view data, but without reconciliation logic; unverified).
- Outsourced accountants doing it manually in Excel.

**The gap:**
Nobody seems to own the subcontractor-side monthly check: "per worker, per site, are my payroll hours within 15% of EDLUS, and why not?" EDLUS vendors sell to the main contractor, and payroll vendors do not ingest EDLUS data. This is unverified: an EDLUS vendor or payroll module may already offer it.

**Possible product:**
A web tool where a subcontractor (or its accountant) uploads or pulls EDLUS exports and payroll timesheets. It matches workers by personal code and flags tolerance breaches, missing check-outs and wrong-employer registrations, then produces a corrected timesheet and a discrepancy-justification file for VID.

**MVP:**
CSV/XLSX import of EDLUS hours (format from one or two main-contractor systems) plus a timesheet export from one payroll package. Output: per-worker monthly variance report with a 15% flag and an editable explanation log.

**Pricing hypothesis:**
EUR 30-80/month per subcontractor (by headcount), or EUR 2-3 per worker per month. Accountant plan EUR 100-200/month for multiple clients. All prices are estimates.

**How to find first customers:**
Latvian Builders Association (Latvijas Būvuzņēmēju partnerība / latvijasbuvnieki.lv) members. The public Construction Information System (BIS) register of construction merchants. Main contractors' subcontractor lists on large public projects (iub.gov.lv procurement documents). Outsourced accountants with construction clients.

**Risks:**
Data access: whether EDLUS data can be exported by subcontractors, or only seen in EDS (unverified). The market is small (a few thousand construction firms, estimate). EDLUS vendors could add the feature. Main contractors may push the burden onto their own systems.

**Kill condition:**
Interviews show subcontractors cannot get machine-readable EDLUS data. Or VID's EDS already shows per-worker discrepancies with clear alerts. Or a major payroll package (Jumis/Horizon) already imports EDLUS.

**Score:** 5/10

**Sources:**
- https://www.ifinanses.lv/finanses/raksti/aktuali/likumdosana/lv-ari-mazakos-buvlaukumos-jaievies-elektroniskas-darba-laika-uzskaites-sistemas/26902
- https://ifinanses.lv/bizness/raksti/uznemuma-vadiba/uznemuma-vadiba/biz-new-kas-jazina-par-jauno-darba-laika-uzskaiti-buvlaukuma/30203
- https://tapportals.mk.gov.lv/annotation/56acb08b-c864-4d1d-a735-9ba203d107a1.docx
- https://vid.gov.lv/lv/media/669/download
- https://lvportals.lv/norises/367144-buvniecibas-objektos-stingrak-uzraudzis-elektronisko-darba-laika-uzskaiti-2024
- https://lvportals.lv/skaidrojumi/304599-sodis-par-parkapumiem-elektroniskas-darba-laika-uzskaites-sistema-2019
- https://www.latvijasbuvnieki.lv/wp-content/uploads/2021/07/vid-prezentacija-edlus-un-vedludb-dati30062021.pdf
- https://apps.apple.com/us/app/id1433909866 (LMT EDLUS app)

### Opportunity: AML internal-control kit for licensed outsourced accountants

**Industry:**
Accounting (outsourced bookkeeping firms, many 1-5 people)

**Buyer:**
Owner or AML responsible person (board member) of a licensed outsourced accounting firm ("ārpakalpojuma grāmatvedis").

**Trigger / Why now:**
Since 2021 outsourced accounting needs a VID licence (valid 5 years). Getting it requires a documented internal control system (IKS), liability insurance and qualifications. Licences issued in 2021-2022 come up for renewal in 2026-2027. In 2026 VID published guidance and inspection expectations ("what to expect from VID checks"): even small firms must have an IKS that works in practice, with client due diligence, beneficial-owner identification and a responsible person reported to VID within 30 days. Historically outsourced accountants received the most AML fines.

**Current workflow:**
1. Write an IKS policy (often from a consultant's template).
2. For each client: collect ID, beneficial-owner data (Register of Enterprises/Lursoft), sanctions/PEP screening, risk scoring, all in Word/Excel folders.
3. Periodic client re-reviews and suspicious-transaction considerations, mostly undocumented.
4. Scramble to evidence all of this when VID inspects or at licence renewal.

**Pain:**
Fines for AML breaches concentrate in this group. VID states that incomplete IKS means inadequate client due diligence. Licence renewal depends on it.

**Existing solutions:**
- Consultant-written IKS templates and trainings (Latvian accounting associations, law firms).
- Lursoft / Firmas.lv company and beneficial-owner data (paid lookups).
- Baltic KYC/AML platforms such as Amlyze and Ondato (Lithuania). These are bank/fintech-oriented and likely priced above a 2-person bookkeeping firm (pricing unverified).
- Generic GRC tools and Excel.

**The gap:**
A cheap, Latvian-language, VID-inspection-shaped workflow: client risk questionnaire, UBO pull, sanctions check, re-review reminders and an "inspection pack" export mapped to VID's IKS expectations. Whether a local accountant-specific product already exists is unverified. This is the key diligence item.

**Possible product:**
A SaaS client-file and AML register for small accounting firms. It onboards each client with structured CDD, links UBO data from public registers, schedules re-reviews and generates the IKS evidence pack for VID inspections and licence renewal.

**MVP:**
Client register plus risk-scoring questionnaire, an EU/UN/Latvian sanctions list check, review-date reminders and a PDF inspection report. No paid data integrations at first.

**Pricing hypothesis:**
EUR 20-60/month per firm (by client count), estimate.

**How to find first customers:**
The VID public register of licensed outsourced accountants (believed public; unverified). The Latvian Association of Accountants (LGA) and the Association of Accounting Outsourcing Companies (unverified name). Accountant Facebook groups and ifinanses.lv readership.

**Risks:**
Sliding toward generic KYC/document collection (a trap in the brief). Small market (perhaps 1,500-3,000 licensees, an unverified estimate). Low willingness to pay among micro-firms. Lithuanian AML vendors could localise.

**Kill condition:**
A Latvian product already sells this to accountants for under EUR 30/month. Or accountants say VID accepts a static template, so no ongoing tool is needed.

**Score:** 4/10

**Sources:**
- https://ifinanses.lv/raksti/vadiba/saimnieciska-darbiba/lv-ieksejas-kontroles-sistema-ko-sagaidit-no-vid-parbaudem/34945
- https://ifinanses.lv/finanses/raksti/vadiba/saimnieciska-darbiba/lv-ieksejas-kontroles-sistema-ko-sagaidit-no-vid-parbaudem/30746
- https://vid.gov.lv/lv/media/2823/download
- https://lvportals.lv/skaidrojumi/325691-arpakalpojumu-gramatveziem-bus-vajadzigas-licences-2021
- https://lvportals.lv/skaidrojumi/314994-naudas-atmazgasanas-parkapumi-visvairak-sodu-arpakalpojumu-gramatveziem-2020

## Rejected after competitor research

- **E-invoicing compliance (B2B mandatory 1 Jan 2028, plus e-invoice data reporting to VID):** this would be generic e-invoicing. Latvian accounting suites (Tildes Jumis, Visma Horizon and others), Peppol access points and the state invoice delivery platform will absorb it. Sources: https://edicomgroup.com/blog/latvia-electronic-invoicing , https://meridianglobalservices.com/latvia-mandatory-b2b-e-invoicing-postponed/ , https://news.bloombergtax.com/daily-tax-report-international/latvia-gazettes-law-postponing-mandatory-e-invoicing-for-business-transactions
- **Cash-register registration and EDS confirmation (CM Reg. No. 96 amendments, 29 Dec 2025):** only registered cash-register service providers can install, seal and program devices, and the amendment reduces burden. No gap for an outside software vendor. Source: https://ifinanses.lv/zinas/actual-stajusies-speka-grozijumi-kases-aparatu-lietosanas-kartiba/30013

## Attractive problem, poor distribution / timing

- **Waste haulers and APUS consignment notes:** the VVD APUS system is being transformed (RRF investment 2.1.3.1.i) into a complex waste-circulation registration system, with full electronic data exchange targeted for H2 2026. This could create a "one job → APUS + customer + municipality" integration opportunity. But the API/spec is not public yet, the state may supply the needed functionality itself, and the number of licensed waste operators is small. Revisit in 2027. Sources: https://likumi.lv/ta/id/342447 , https://lvportals.lv/dienaskartiba/387740-mazinata-birokratija-informacijas-par-kugu-atkritumiem-aprites-sistemas-2026 , https://tap.mk.gov.lv/doc/2021_03/VARAMAnotp_130121_APUS.159.pdf

## Too competitive

- E-invoicing / Peppol (see above).
- General bookkeeping and payroll: dominated by local suites (Jumis, Horizon, and others).

## Overall verdict

Latvia has no strong standalone indie opportunity at the quality bar of the brief. The best lead is the EDLUS reconciliation tool, a narrow construction-compliance workflow with a 2025-2026 trigger and explicit penalties. Its main unknown is data access, and it should be validated in interviews with 5-10 subcontractors and their accountants. Both ideas would need Baltic expansion (Lithuania has similar construction-site worker registration; unverified) to reach meaningful revenue.
