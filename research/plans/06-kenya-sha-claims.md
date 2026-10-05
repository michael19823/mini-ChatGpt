# Plan 06: Kenya SHA claims exceptions and remittance reconciliation for private clinics

*Ranked #6 globally (score 6.5). Source: `research/countries/kenya.md`. Plan written 2026-10-05, with 15 web searches (the full budget) and no primary pages opened, because WebFetch is blocked. Facts that come only from search snippets are cited, and anything I could not check is labelled "unverified" or "estimate".*

---

## 1. Verdict up front

**Interview first, leaning towards a narrower pivot. Do not build the product described in the report.** The pain is real and getting worse, and the deadline is confirmed. But verification changed the two things the report's product depended on.

1. **SHA remittance data is already structured, claim by claim, and is exposed by API, but only to certified HMIS systems.**
   - DHA's Health Information Exchange (HIE) documents a "Get Remittances" call and a "Get Claims Paid by Remittance" call. The second takes a `bank_reference` plus the facility ID and returns the claims each payment covered. There is also a claim-status endpoint.
   - Production credentials go only to integrators who pass DHA certification.
   - So the "matching engine" the report pitches is largely a data fetch that HMIS vendors are expected to build. An outside tool can reach that data only through an HMIS export, an HMIS partnership, or its own certification.
2. **The HMIS market is very concentrated, and the leader is government-run.**
   - AfyaLink statistics (as summarised in a search snippet) show Tiberbu HMIS on 1,492 onboarded systems, or 86.8%. Next come Afyake (160), RuphaSoft (32), DataMedHMIS (5), AfyaKE (4) and KenyaEMR (3).
   - Tiberbu is described as the Taifa Care / SHA HMIS rolled out by DHA.
   - A "works across any HMIS" layer therefore mostly means "works on top of the government system". That depends on what Tiberbu exports, and Tiberbu could add the feature at any time.
3. **The money pain is confirmed and large, but it sits in disputes and exceptions, not in matching.**
   - SHA rejects about 1 in 5 claims from county facilities.
   - Providers say KSh 10.6bn was rejected without justification, despite a contractual 14-day window for decisions.
   - Private hospitals report being owed KSh 43bn in verified invoices, with another KSh 24bn under review.
   - What clinics lack is a rejection and dispute workflow: reason codes, fixes, resubmission, evidence of SLA breaches, and escalation. Matching is the smaller problem.

The surviving idea is a **"SHA rejections and disputes desk"**: a white-label module sold through the smaller certified HMIS vendors (Afyake, RuphaSoft and others), or a concierge billing service at first. It is not a standalone cross-HMIS reconciliation SaaS.

New score **5.0** (was 6.5).

---

## 2. Verification results

| Claim from report | What you found | Source | Status |
|---|---|---|---|
| Portal-to-HMIS deadline for private facilities is 30 Oct 2026 | Deadline moved from 1 Sep to 30 Sep 2026, then got a further one-month extension. The Ministry says all 6,427 public Level 2–4 facilities have moved, and that public Level 5 and the 518 contracted faith-based facilities must finish by 30 Oct 2026. Separately, the 2026–29 contracting deadline was extended to 14 Oct. | citizen.digital (CS Duale extension); capitalfm.africa; kenyans.co.ke; businessdailyafrica.com | Confirmed (30 Oct). Context changed: public facilities are already done. |
| Facilities must submit claims through a DHA-certified HMIS connected to the HIE | Confirmed. A certified HMIS is mandatory for the 2026/28 contracting cycle, and facilities without one risk exclusion from contracting. | kenyans.co.ke/news/124812; allafrica.com/stories/202609010210 | Confirmed |
| 28 HMIS platforms certified | Names surfaced: Tiberbu (86.8% of onboarded systems), Afyake, RuphaSoft, DataMedHMIS, AfyaKE, KenyaEMR. The total of 28 was not re-checked. | Search summary of afyalink.dha.go.ke statistics | Changed: heavy concentration on Tiberbu |
| Certified HMIS submit claims but don't reconcile remittances | The DHA HIE spec includes a remittance workflow "to automate matching of incoming payments to claims". The data is designed to flow into HMIS. Whether each vendor has built a UI on top of it is unverified. | hie-docs.dha.go.ke/docs/claims/process/remittances/* | Contradicted in part: the gap is narrower than claimed |
| Kill condition: is SHA remittance data available to facilities in a structured, claim-level form? | Yes, through the HIE API (remittance list, then claims paid per bank reference). | hie-docs.dha.go.ke getClaimsPaidbyRemittance | Confirmed. The idea passes this test, but the data is gated to certified systems. |
| A thin layer can avoid DHA certification | Production HIE credentials are issued only after DHA certification. Without certification, a product depends on exports or partners. | hie-docs.dha.go.ke/docs/goLive; afyalink.dha.go.ke/wiki/afyalink-requesting-credentials | Changed |
| ~50% of Level 2–4 claims unpaid; KSh 43bn outstanding | Private hospitals report KSh 43bn in verified invoices owed plus KSh 24bn under review. SHA rejects about 1 in 5 county-facility claims (KSh 40.91bn submitted vs 27.91bn paid by 30 Jun 2026). | serrarigroup.com; the-star.co.ke 2026-07-04 | Confirmed (figures updated) |
| Market size | 11,034 SHA-accredited facilities, about 6,228–6,427 public, and 518 faith-based facilities supported by government. That leaves roughly **3,500–4,000 private facilities at all levels (estimate by subtraction)**. County examples: 78 private Level 2–4 facilities in Narok, 35 in Baringo. | kenyanews.go.ke; citizen.digital; sha.go.ke contracted facilities | Estimate |
| Associations (RUPHA etc.) as a channel | RUPHA appears to have its own certified HMIS (RuphaSoft, 32 systems). That makes it a partner or a competitor, not a neutral channel. RuphaSoft's ownership is unverified. | afyalink statistics snippet | Changed / unverified |
| Health data law | Data Protection Act 2019; Digital Health Act 2023 (No. 15 of 2023, commenced 2 Nov 2023); Digital Health (Health Information Management Procedures) Regulations 2025, which keep a record of health data processors; ODPC registration of controllers and processors (2021 regulations). | new.kenyalaw.org Act 2023/15; clydeco.com (2026/03); kictanet regs PDF | Confirmed (details of each regulation unverified) |
| Pricing KSh 5–15k/month | No competitor pricing found. Willingness to pay is still unvalidated. | — | Unverified |

---

## 3. Customer and problem

**Buyer.** The owner or medical director of a private Level 3–4 facility (nursing home, medical centre or small hospital) with 50–500 SHA claims a month. Level 2 dispensaries are excluded, because they don't have the volume or the money.

**User.** The claims or billing officer, often one person per facility, who also handles private insurers. Large groups such as Avenue Healthcare employ "claims assurance assistants" in each branch (fuzu job listings).

**Channel buyer.** The product lead at a smaller certified HMIS vendor that serves private facilities and wants a claims-recovery feature to compete with the government system.

**Job-to-be-done.** "Every shilling SHA owes us should either arrive, or come back to me with a clear reason and a next step, before it is too old to dispute."

**Current workflow (times and costs are estimates for a facility submitting about 200 claims a month).**

| Step | What happens | Time per month (est.) | Cost (est., at about KSh 60k/month for a claims officer) |
|---|---|---|---|
| 1 | Check eligibility and pre-authorisation in the HMIS, wait out pre-auth backlogs, chase by phone | 15–25 h | KSh 6–9k |
| 2 | Compile the claim and attach documents (discharge summary, invoices) | 20–30 h | KSh 8–11k |
| 3 | Check claim status one claim at a time in the HMIS or portal, keep a spreadsheet of rejected and queried claims | 8–15 h | KSh 3–6k |
| 4 | SHA pays in batches: match the bank credit to claims, work out short-payments | 6–12 h | KSh 2–5k |
| 5 | Fix and resubmit returned claims, or write a dispute letter to the SHA regional office | 10–20 h | KSh 4–8k |
| 6 | Write-offs go unquantified: old claims are quietly abandoned | — | Lost revenue |

**Cost of failure.** Each rejected or under-paid claim is direct lost revenue.
- If 20% is rejected, about half of that is recoverable, and the average outpatient/inpatient claim mix is KSh 3–8k (estimate), then a 200-claim facility leaves roughly **KSh 60–160k per month** on the table.
- That is about 4–10 times the proposed price.
- The other failure is falling out of SHA contracting altogether by missing HMIS compliance. The HMIS handles that, not this product.

---

## 4. Product definition (pivoted)

**Core loop.** Pull claims, statuses and remittances, then classify each claim as paid, short-paid, rejected, returned, pending past 14 days, or unaccounted. Give each exception an owner, a fix checklist and a deadline. Resubmit or dispute. Track what was recovered.

**MVP (must-have)**
- Import of claims, statuses and remittances. Version 0 uses the HMIS CSV/Excel export plus the bank statement. Version 1 uses a partner HMIS's HIE data feed.
- Matching of bank credits to remittances to claims, with short-pay detection against the SHA tariff amount.
- An exception queue:
  - rejection reason grouped into a fixable cause (missing document, tariff mismatch, eligibility, pre-auth missing);
  - age of the exception;
  - flags for claims past the 14-day SLA.
- Dispute pack: a per-regional-office PDF/Excel listing the claims, amounts, dates, SLA breach and evidence checklist.
- A monthly "recovered vs written off" report for the owner.

**v1**
- Pre-submission checks: required attachments by benefit package, pre-auth present, duplicate detection.
- Rejection-reason analytics by clinician or department.
- Multiple facilities for small groups.
- WhatsApp/SMS digests for the owner.

**Later**
- Private-insurer claims (AAR, Jubilee, Britam and others: their formats are unverified).
- Benchmarking across facilities.
- Receivables finance referrals.

**Out of scope**
- Building an HMIS.
- Submitting claims ourselves (that needs certification).
- Clinical coding advice.
- Patient-facing features.
- Level 2 dispensaries.

**Key screens**
1. **Money board:** submitted, paid, short-paid, rejected, pending over 14 days and unaccounted, in KSh, with 30/60/90-day buckets.
2. **Remittance view:** each SHA bank credit with the claims it covered, the variance, and the unmatched credits or claims.
3. **Exception queue:** a list filtered by reason group and age. Each row opens a fix checklist and has a "resubmitted" or "disputed" action.
4. **Dispute pack builder:** select claims, pick the regional office, export the letter and schedule.
5. **Import wizard:** column mapping saved per HMIS export format.

---

## 5. Technical design

**Architecture**
- A single web app (server-rendered), a Postgres database and a background job runner.
- Ingestion adapters, each one a mapping onto a canonical claim:
  - HMIS CSV/Excel;
  - bank statement CSV for Equity, KCB and Co-op (formats unverified);
  - later, a partner HMIS's API or webhook.
- Data flow: upload or feed, then normalise, then match, then classify exceptions, then show the work queue and exports.

**Stack.** Django or Rails with Postgres and htmx. A monolith is the fastest way for one developer to build CRUD screens, admin pages and background jobs. Excel/PDF generation uses openpyxl and WeasyPrint.
- **Hosting:** a provider with Kenyan or regional data centres if the law requires it. Local providers such as Safaricom's cloud or iXAfrica are possible but **unverified**. Until legal advice confirms that cross-border transfer is allowed, avoid hosting abroad.

**Data model**
- Facility, User, HMISSource
- Claim: SHA claim ID, patient member number (pseudonymised), service date, benefit package, tariff amount, claimed amount, status history
- Remittance: bank reference, date, amount
- RemittanceLine: claim ID and amount paid
- BankCredit
- Exception: type, reason group, age, owner, state
- Dispute: office, claims, sent date, outcome
- AuditEvent

**Integrations**

| Integration | Method | Fallback |
|---|---|---|
| Claim and status data | HMIS export file (CSV/XLSX), then a partner HMIS API | Manual capture from the HMIS screens by our concierge staff |
| SHA remittance detail | Through the partner HMIS's HIE "claims paid by remittance" call, or our own DHA certification (unverified whether a read-only tool can be certified) | The remittance PDF or e-mail from SHA, if facilities receive one (unverified); otherwise bank statement plus amount heuristics |
| Bank credits | Statement CSV upload | Typed entry of SHA credits |
| Tariffs and benefit rules | Our own table, keyed from published SHA tariff documents | Manual updates |

**Rules engine.** Declarative, versioned rules for:
- tariff lookup by package and level;
- short-pay tolerance;
- the 14-day decision SLA;
- mapping of rejection reasons to reason groups;
- required attachments by package.

Every rule carries an effective date, because SHA changes tariffs.

**Security, privacy and residency.**
- Laws that apply: the Data Protection Act 2019, the Digital Health Act 2023 and its 2025 Health Information Management regulations, and the Data Protection (Registration) Regulations 2021.
- Register with ODPC as a data processor. Sign a processor agreement with each facility.
- Minimise data: store the member number hashed and no diagnosis free text. Use ICD/tariff codes only where a rule needs them.
- Health data is sensitive personal data. Whether the Data Protection (General) Regulations 2021 rules on processing in Kenya (local storage) apply to a private processor of health data is **unverified**: get a Kenyan lawyer's opinion before going live.
- Encrypt data at rest and in transit, enforce MFA, and log access per role.

**Audit trail and liability.** The product only advises; it never submits. Every status change, import and export is logged with the user and the source file hash. The terms say the facility stays responsible for what it submits to SHA. A wrong match costs a missed dispute, not a penalty.

**Localisation**
- Language: English (the claims workflow is in English); Swahili only for SMS digests.
- Currency: KSh.
- IDs: SHA facility code, KMHFL code, KRA PIN for invoicing.
- eTIMS: our own invoices to customers must be eTIMS-compliant if we have a Kenyan entity.

**Testing**
- Golden files of real (anonymised) HMIS exports and remittances from pilot sites.
- Property tests on the matcher, covering split payments, partial payments and duplicates.
- A rules regression suite run whenever tariffs are updated.
- If an HMIS partner is signed: contract tests against the HIE sandbox (test credentials are issued before certification).

---

## 6. Build plan

| Week | Milestone | Dev-weeks |
|---|---|---|
| 0–3 | Validation only (section 13). Get 3 facilities to share 3 months of exports, remittances and bank statements under an NDA. | 0 |
| 4–5 | **Concierge MVP:** reconcile pilot data by hand in a spreadsheet and deliver a dispute pack. Charge KSh 5k for the first report. | 0.5 |
| 6–9 | Code MVP: imports with mapping, matcher, exception queue, money board. | 4 |
| 10–11 | Dispute pack export, audit log, multi-user access, ODPC registration done. | 2 |
| 12 | **First paying subscription** (target). | — |
| 13–18 | Partner integration with one smaller HMIS vendor (API feed), pre-submission checks. | 5 |
| 19–24 | v1: analytics, multi-facility, WhatsApp digests, hardening. | 4 |

**Totals:** about 6.5 developer-weeks to the first subscription, and about 15.5 to v1.

**Done by hand at first:**
- column mapping for each new HMIS export;
- the tariff table;
- matching remittances against bank credits;
- writing the dispute letters.

---

## 7. Go-to-market

**Ideal first 10 customers**
- Private Level 3–4 facilities in Nairobi, Kiambu, Nakuru and Kisumu that are **not** on Tiberbu.
- They are SHA-contracted, with 100+ claims a month, and owners who have spoken publicly about unpaid claims.

**How to reach them**
- The SHA contracted-facilities list (sha.go.ke, by county, level and ownership) and KMHFL for contacts.
- SHA disbursement PDFs, which show who is being paid and how much.
- RUPHA and the Kenya Association of Private Hospitals: attend their meetings, offering a free "how much is SHA holding?" audit. Approach RUPHA carefully, because it may run RuphaSoft.
- Smaller certified HMIS vendors as resellers: one partner brings tens of facilities.

**Outreach angles**
1. "Send us 3 months of your SHA statements; we'll show how much is unpaid and how much is still disputable, free."
2. "SHA must decide within 14 days by contract. We list every claim where it didn't, with a dispute letter ready."
3. For HMIS vendors: "Tiberbu is free and everywhere. Give your clients a recovery feature it doesn't have, white-labelled, with revenue share."

**Timing**
- The 30 Oct 2026 migration and the 14 Oct contracting cycle will absorb facilities' attention in October and November.
- Run interviews now and start selling in **late November 2026**, once facilities feel the first remittance gaps on the new HMIS.

**Content.** English, plus Swahili for WhatsApp:
- "SHA claim rejected: what each reason means and how to fix it";
- "How to read an SHA remittance";
- "SHA 14-day rule".

Distribute through LinkedIn and Kenyan health-admin WhatsApp groups.

---

## 8. Pricing and unit economics

**Tiers (estimates; exchange rate ~KSh 129/US$, also an estimate)**

| Tier | Size | Price per month | Notes |
|---|---|---|---|
| Clinic | Up to 150 claims/month | KSh 6,000 | — |
| Hospital | Up to 600 claims/month | KSh 12,000 | — |
| Group | Multiple facilities | KSh 25,000+ | — |

Optional: a success fee of 5–10% of recovered disputes above a baseline, for groups that prefer it.

**Expected ACV:** about KSh 108k, or US$840, assuming a blended ARPA of about US$70 a month.

**CAC by channel (estimates)**

| Channel | CAC |
|---|---|
| Direct field sales with a local agent | US$150–300 per customer (commission plus travel) |
| Association events | US$100–200 |
| HMIS partner | US$30–80 (revenue share instead of CAC) |

**Gross margin:** about 80% (hosting, SMS, payment fees, part-time support).

**Payment rails**
- Clinics pay by M-Pesa paybill or bank transfer, and expect an eTIMS invoice.
- A foreign founder needs either a Kenyan entity, or a local partner company that invoices and collects (simplest), or a Kenyan payment provider. Stripe does not support Kenyan merchants (unverified as of 2026).
- A merchant of record such as Paddle is a poor fit, because clinics pay through M-Pesa.

**FX risk.** Prices are in KSh. Hedge by keeping costs in KSh where possible. KSh depreciation directly erodes USD income.

---

## 9. Company and legal setup

**Entity**
- A Kenyan private limited company, or a partnership with a local IT company acting as reseller and data processor of record.
- A local entity also helps with ODPC registration, eTIMS invoicing and trust.

**Tax**
- Without a Kenyan entity: register for simplified VAT on digital services at 16% (B2B as well as B2C since July 2022). The 3% Significant Economic Presence tax applies to non-resident digital income.
- With a Kenyan entity: ordinary VAT applies above the KSh 5M turnover threshold, plus corporate tax.

**Contracts**
- Master subscription agreement.
- Data processing agreement under the DPA 2019.
- A clause stating the product is advisory only, with no guarantee of recovery.
- A white-label reseller agreement with HMIS vendors.

**Professional liability.** A modest tech E&O policy, plus a contractual liability cap equal to 12 months' fees.

---

## 10. Financial model (24 months)

**Assumptions**
- ARPA is US$70 a month and net customer adds already include churn.
- Founder salary is excluded.
- Fixed costs are US$900 a month: hosting US$150, tools US$100, local partner/agent retainer US$400, accounting/legal US$150, SMS/miscellaneous US$100.
- Variable costs are 20% of MRR (commission, payment fees, support).
- One-off costs: setup and legal of US$3,000 in month 1 and a Nairobi trip of US$2,500 in month 2.
- A part-time local support hire at US$800 a month starts in month 19.

| Period | Customers (end) | MRR (end, US$) | Costs in period (US$) | Net in period (US$) | Cumulative cash (US$) |
|---|---|---|---|---|---|
| M1 | 0 | 0 | 3,900 | -3,900 | -3,900 |
| M2 | 0 | 0 | 3,400 | -3,400 | -7,300 |
| M3 | 2 | 140 | 928 | -788 | -8,088 |
| M4 | 4 | 280 | 956 | -676 | -8,764 |
| M5 | 6 | 420 | 984 | -564 | -9,328 |
| M6 | 9 | 630 | 1,026 | -396 | -9,724 |
| M7 | 12 | 840 | 1,068 | -228 | -9,952 |
| M8 | 15 | 1,050 | 1,110 | -60 | -10,012 |
| M9 | 18 | 1,260 | 1,152 | +108 | -9,904 |
| M10 | 22 | 1,540 | 1,208 | +332 | -9,572 |
| M11 | 26 | 1,820 | 1,264 | +556 | -9,016 |
| M12 | 30 | 2,100 | 1,320 | +780 | -8,236 |
| Q5 (M13–15) | 48 | 3,360 | 4,464 | +4,356 | -3,880 |
| Q6 (M16–18) | 66 | 4,620 | 5,220 | +7,380 | +3,500 |
| Q7 (M19–21) | 84 | 5,880 | 8,376 | +8,004 | +11,504 |
| Q8 (M22–24) | 102 | 7,140 | 9,132 | +11,028 | +22,532 |

**Break-even**
- Operating break-even (excluding founder pay) in **month 9**.
- Cumulative cash turns positive in about **month 17**.
- At month 24, MRR of about US$7.1k does not pay a non-local founder a market salary.

**Ceiling**
- SAM: about 3,500–4,000 private SHA-contracted facilities. Of these, an estimated 1,200–1,800 are Level 3–4 with enough volume, and an unknown share are not locked into Tiberbu.
- At 10–15% of the volume segment, that is 150–250 facilities × US$70–100, or **US$10k–25k MRR**.
- An HMIS white-label deal could raise reach but would halve the price per facility.

---

## 11. Team and founder fit

**Skills needed**
- A full-stack developer.
- Someone who understands Kenyan hospital billing: SHA benefit packages, tariffs, and what each rejection reason means in practice. This person matters most.
- Field sales in Nairobi and the counties.

**Language.** English is enough for the product. Swahili helps in sales and support.

**Non-local founder.** Possible only with a Kenyan co-founder or partner. Ideally a former SHA/NHIF claims officer, or the claims lead at a private hospital, on equity or revenue share. Health data residency, M-Pesa collection and relationships with associations and HMIS vendors all need local presence.

**Local help to budget for**
- a lawyer (data protection and contracts);
- an accountant (VAT, eTIMS);
- a part-time sales agent.

---

## 12. Risks and mitigations

| Risk | Type | Mitigation |
|---|---|---|
| Tiberbu (the government SHA HMIS) or SHA adds a remittance and rejection dashboard, which the HIE spec already anticipates | Government/platform | Target facilities on non-Tiberbu HMIS, sell through those vendors, and make dispute workflow and SLA evidence the core (the government is unlikely to build tooling to dispute itself) |
| No data access: exports lack status or reason codes; no HIE credentials without certification | Platform | Test export contents in the first interviews (kill test); HMIS partnership; check whether DHA would certify a read-only claims tool (unverified) |
| SHA changes rules, tariffs or the pay-to-facility model | Regulatory | Versioned rules table; keep the product payer-agnostic so private insurers can be added |
| Facilities won't pay software fees while SHA doesn't pay them | Commercial | Success-fee option; free audit as the entry offer; price below one recovered claim a month |
| Health data breach or residency non-compliance | Legal | ODPC registration, data minimisation, Kenyan hosting, lawyer review before the first pilot |
| HMIS vendors build it themselves after seeing the demo | Competitive | Revenue-share contract with exclusivity per vendor; move fast |
| KSh depreciation; M-Pesa collection through an intermediary | FX/payment | KSh pricing reviewed yearly; local entity or reseller collects |

---

## 13. Validation plan before writing code

**Interview targets (13)**
- 6 claims officers or owners at private Level 3–4 facilities: 3 on Tiberbu and 3 on other HMIS, drawn from the SHA contracted list for Nairobi, Kiambu and Nakuru.
- 2 private-hospital group finance managers.
- 2 smaller certified HMIS vendors (Afyake and one more found via AfyaLink).
- 1 RUPHA official.
- 1 medical billing consultant or bureau.
- 1 DHA/AfyaLink integration contact, to ask whether a read-only claims tool can be certified.

**Questions**
1. Show me your last SHA remittance. How do you know which claims it paid?
2. What can you export from your HMIS? (Ask to see it: does it include claim status and rejection reason?)
3. How much did you claim, receive and write off in the last 6 months?
4. What happens to a rejected claim today, who handles it, and how long does it take?
5. Have you ever disputed using the 14-day rule? What happened?
6. What do you pay for your HMIS, and does it show remittance detail?
7. Would you pay KSh 6–12k a month, or 10% of recovered amounts? Which, and why?

**Pass thresholds** (all must hold)
- At least 4 of 6 facilities can export claim-level status with reasons, or get remittance detail from their HMIS.
- At least 4 of 6 cannot already see claim-level remittance matching inside their HMIS.
- At least 3 facilities report KSh 100k or more in unresolved claims older than 30 days.
- At least 1 HMIS vendor is interested in white-label or referral.

**Fail.** Any one of these kills the idea:
- Tiberbu already shows claims paid per remittance plus rejection aging.
- Fewer than 3 of 6 facilities can export usable data.

**Pre-sale test**
- Offer a paid "SHA recovery audit" at KSh 5,000 per facility, using 3 months of their data.
- Target: 3 paid audits and 2 signed LOIs for a KSh 6–12k monthly subscription, within 4 weeks.

---

## 14. Expansion path

- **Adjacent workflows**
  - private-insurer claims reconciliation (AAR, Jubilee, Britam, Madison: all unverified as to format);
  - pre-authorisation tracking;
  - SHA contracting and document renewals.
- **Same pattern elsewhere**
  - Rwanda: RSSB and the Community-Based Health Insurance scheme (CBHI) (scored 6.0 in the global ranking);
  - Tanzania: NHIF, under the Universal Health Insurance rollout (unverified);
  - Nigeria: state health insurance schemes (unverified);
  - Ghana: NHIA e-claims (unverified).

  All of these share the pattern of a national payer with digital claims and poor remittance transparency. Each needs its own payer rules, but the core engine (claim–remittance–exception) can be reused.

---

## 15. Reassessment scorecard

*The country report gave only an overall score (6.5) and no per-criterion scores, so the "Original" column is blank.*

| Criterion | Original | New | Reason |
|---|---|---|---|
| Pain | — | 8 | 1-in-5 rejections, KSh 43bn owed, 14-day SLA ignored (confirmed) |
| Frequency | — | 8 | Per claim and per remittance batch, at least monthly |
| Mandatory nature | — | 6 | Submission is mandatory; reconciliation is revenue-critical but optional |
| Fragmentation | — | 3 | One payer and one national API: little defensibility from variety |
| Existing competition | — | 4 | A free, dominant government HMIS (Tiberbu, about 87%) sits in the data path |
| Incumbent gap | — | 5 | The HIE already supplies claim-level remittance data; the gap left is exception and dispute workflow (unverified) |
| Buyer accessibility | — | 7 | SHA contracted list by county, level and ownership, plus disbursement PDFs |
| Willingness to pay | — | 4 | Cash-starved facilities; no price anchors found |
| MVP simplicity | — | 5 | The code is simple, but data access is gated behind certification or partners |
| Distribution | — | 5 | HMIS vendors are the scalable channel but may compete; associations are partly conflicted |

**New overall: 5.0 (was 6.5).** The mean of the criteria is 5.5. I scored it lower because data access and the dominance of the government HMIS are near-binary risks.
- Down 1.5 because verification showed that remittance matching is built into the national HIE API.
- The leading HMIS is government-run and holds about 87% of onboarded systems.
- An outside tool cannot get production data without certification or a partner.

---

### Sources
- Deadline and extensions: https://citizen.digital/article/cs-duale-extends-deadline-for-health-facilities-to-switch-to-shas-digital-system-n391243 ; https://capitalfm.africa/sha-gives-hospitals-one-more-month-to-meet-digital-health-rules ; https://www.kenyans.co.ke/news/126681-sha-extends-deadline-healthcare-providers-comply-hmis ; https://www.kenyans.co.ke/news/124812-sha-makes-accredited-hmis-mandatory-all-healthcare-providers ; https://www.businessdailyafrica.com/bd/corporate/health/sha-extends-healthcare-provider-contracting-deadline-5615818
- Taifa Care / Tiberbu rollout and facility counts: https://www.the-star.co.ke/news/2026-07-01-sha-shifts-level-4-public-hospitals-to-taifa-care-hmis ; https://www.kenyanews.go.ke/sha-begins-transition-to-integrated-digital-healthcare-management-system/ ; https://makueni.go.ke/2025/news/digital-health-platform-boosts-kathonzweni-hospital-own-source-revenue-to-ksh-1-7-million/ ; https://afyalink.dha.go.ke/ (HMIS onboarding statistics, via search summary)
- HIE remittance API and credentials: https://hie-docs.dha.go.ke/docs/claims/process/remittances/remittanceProcessOverview ; https://hie-docs.dha.go.ke/docs/claims/process/remittances/getClaimsPaidbyRemittance ; https://hie-docs.dha.go.ke/docs/claims/process/remittances/getRemittance ; https://hie-docs.dha.go.ke/docs/goLive ; https://afyalink.dha.go.ke/wiki/afyalink-requesting-credentials ; https://build.fhir.org/ig/IntelliSOFT-Consulting/Kenya-eClaims-FHIR-IG/actors.html
- Rejections and arrears: https://www.the-star.co.ke/news/2026-07-04-sha-rejects-one-in-five-claims-from-hospitals ; https://serrarigroup.com/?p=30942 ; https://serrarigroup.com/private-hospitals-halt-sha-services-as-claims-delays-deepen-crisis/ ; https://nation.africa/kenya/health/we-will-not-sign-hospitals-reject-sha-payout-5523134
- Contracted facilities: https://www.sha.go.ke/?p=347
- Data protection: https://new.kenyalaw.org/akn/ke/act/2023/15/eng@2023-11-24 ; https://www.clydeco.com/en/insights/2026/03/health-data-protection-in-kenya-strategic-complian ; https://posts.kictanet.or.ke/wp-content/uploads/2024/12/FINAL-Digital-Health-Health-Information-Management-Regulations-19.11.24-1.pdf
- Tax: https://www.vatcalc.com/kenya/kenya-vat-on-non-resident-digital-services-update-2/ ; https://taxsummaries.pwc.com/Kenya/Corporate/Other-taxes
- Job listings: https://www.fuzu.com/kenya/jobs/claims-assurance-assistant-nakuru-avenue-healthcare
