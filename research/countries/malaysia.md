# Malaysia - Opportunity research (2026-10-04)

**Research limits:** about 10 searches were run before the shared web-search budget was exhausted. WebFetch is blocked. Competitor diligence is therefore partial. Items marked "unverified" or "estimate" need checking in customer interviews. Malaysia is accessible: no sanctions problem, open internet, MYR payments via cards/FPX. A foreign solo founder can sell SaaS (SST on foreign digital services is a separate point, unverified here).

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| SME accounting / e-invoicing | LHDN MyInvois e-invoice, self-billed, consolidated invoices | Too competitive | Phase 4 mandatory from 2026-01-01; many local vendors (Niagawan, SQL, AutoCount etc.) and a free LHDN portal. |
| Payroll / HR statutory | EPF, SOCSO/PERKESO, EIS, PCB, HRDF monthly by the 15th | Too competitive | 2025-26 changes (foreign worker EPF from Oct 2025, SOCSO ceiling RM6,000, LINDUNG 24 Jam from June 2026) are real, but payroll vendors (e.g. Swingvy, PandaHRMS, Ramco) cover them. |
| Scheduled waste generators / collectors | eSWIS consignment notes, inventory, notification (EQ Scheduled Waste Regs 2005) | Promising, unverified | Mandatory per-movement workflow; about 343 licensed transporters and 406 licensed premises; generator side is much larger. Competitor scan not completed. |
| Palm oil mills, dealers, smallholders | MSPO 2.0 (from 2025-01-01), traceability, EUDR | Poor distribution / unverified | Government and big players (e-MSPO, MSPO Trace, SIMS, GeoPALM, FGV Prodata) dominate; EU recognised MSPO in Sept 2025. |
| Food manufacturers | JAKIM MYeHALAL application and renewal documentation | Weak | Document-heavy but halal certification is optional and consultants handle it; renewal-specific pain not verified. |
| Freight forwarders / customs agents | K1/K2 declarations via Dagang Net / SMK, Strategic Trade permits | Rejected for now | Dagang Net and established forwarding software; no 2026 trigger found. |
| Private clinics | PHFSA registration, SST on private healthcare from July 2025 | Unverified | MOH is amending PHFSA; no concrete mandatory data workflow found. |
| Factories / OSH | DOSH competent person registration, JKKP 6/7/8 statutory forms | Unverified | Possible niche for OSH consultants; no portal pain evidence found. |
| Construction | CIPAA payment claims, SST on construction | Weak | CIPAA is a legal process, not a recurring data workflow. |

## Opportunities

### Opportunity: eSWIS scheduled-waste compliance tool for small generators and collectors

**Industry:**  
Scheduled waste (hazardous waste) generation and collection

**Buyer:**  
EHS/compliance officer or owner at a small factory, workshop or licensed scheduled-waste collector

**Trigger / Why now:**  
No new 2026 trigger was verified. The trigger is the standing legal duty to record all scheduled waste movement in eSWIS. The Department of Environment (DOE) reviews generation volumes through consignment note transactions.

**Current workflow:**  
1. Waste is generated and the generator notifies DOE and keeps an inventory.
2. The waste is labelled and stored.
3. A consignment note is raised in eSWIS for each movement to a licensed collector or facility.
4. Records are reconciled by hand against invoices, weighbridge tickets and the inventory.

**Pain:**  
Per-movement recording is mandatory. DOE uses the data to check generation volumes. Evidence of how painful the workflow is for small operators was not found.

**Existing solutions:**  
The eSWIS portal itself. Consultants. Competitor vendors were not identified (unverified).

**The gap:**  
Unknown. The hypothesis is inventory-to-consignment-note reconciliation and reminders for small generators.

**Possible product:**  
A tool that keeps the scheduled-waste inventory, pre-fills consignment note data, and flags mismatches against what eSWIS shows.

**MVP:**  
Inventory ledger, a consignment-note checklist and a monthly reconciliation export.

**Pricing hypothesis:**  
RM99-299 per month (estimate).

**How to find first customers:**  
DOE lists of licensed collectors and facilities. Industrial estate associations. Generator lists are not public (unverified).

**Risks:**  
Possible eSWIS integration limits. Small operators may outsource to the collector. Existing EHS software was not checked.

**Kill condition:**  
Interviews show collectors handle eSWIS entries for generators, or an existing vendor already covers this.

**Score:** 4/10

**Sources:**  
- https://www.kosmo.com.my/?p=22840
- https://www.env.go.jp/en/recycle/asian_net/Annual_Workshops/2012_PDF/D1S2-4[MALAYSIA]rev.pdf
- https://pardocs.sinarproject.org/documents/2020-november-december-parliamentary-session/oral-questions-soalan-lisan/2020-11-30-parliamentary-replies/20201130-p14m3p2-soalan-lisan-45.pdf

### Opportunity: Phase 4 e-invoice exception handler (self-billed and consolidated invoices over RM10,000)

**Industry:**  
SME accounting add-on

**Buyer:**  
Owner or bookkeeper at an SME with RM3M-5M turnover on Excel or a legacy accounting package

**Trigger / Why now:**  
Phase 4 mandatory from 2026-01-01. The penalty-free relaxation was extended to 2027-12-31 and full enforcement is 2028-01-01. Consolidated monthly invoices are allowed during relaxation, but single transactions over RM10,000 need individual e-invoices. The exemption threshold was reported to rise to RM3M from 2026-09-01.

**Current workflow:**  
1. Sales are recorded in Excel or an older accounting system.
2. Invoices over RM10,000 are keyed or converted to JSON for MyInvois.
3. Rejected invoices are fixed by hand.
4. Self-billed and consolidated invoices are prepared separately.

**Pain:**  
Rejections from typos and wrong tax data. Excel-to-JSON conversion is not beginner-friendly. Portal file-size limits.

**Existing solutions:**  
Free MyInvois portal. Niagawan, local accounting vendors, ClearTax Malaysia.

**The gap:**  
Mature vendors cover the common case. The gap is weak and the threshold keeps shifting, so the addressable market is shrinking.

**Possible product:**  
Excel/CSV to validated MyInvois submission with exception queues.

**MVP:**  
Upload, validate, submit and re-submit rejected documents.

**Pricing hypothesis:**  
RM50-150 per month (estimate).

**How to find first customers:**  
Bookkeeper and accounting-firm communities.

**Risks:**  
Heavy competition. Relaxation lowers urgency. Threshold changes remove customers.

**Kill condition:**  
Incumbents' free tiers already cover Excel upload.

**Score:** 3/10

**Sources:**  
- https://www.vatupdate.com/2026/04/23/malaysia-updates-e-invoicing-framework-specific-guide-v4-7-issued-and-phase-4-relaxation-extended-to-31-december-2027/
- https://beancount.io/blog/2026/09/16/malaysia-e-invoicing-phase-4-rm3m-exemption-rm10000-rule-guide
- https://niagawan.com/en/excel-manual-einvoicing-malaysia
- https://www.binarysemantics.com/blogs/top-challenges-faced-by-malaysian-businesses-during-e-invoicing-rollout/

## Rejected after competitor research
- E-invoicing for SMEs: killed by the free LHDN MyInvois portal plus Niagawan and other local accounting vendors.
- Statutory payroll (EPF/SOCSO/EIS/PCB): killed by existing payroll vendors (Swingvy, PandaHRMS, Ramco and similar).
- Customs declarations: killed by Dagang Net e-Declare and incumbent forwarding software.

## Attractive problem, poor distribution
- MSPO 2.0 / EUDR traceability for palm smallholders: large need, but e-MSPO, MSPO Trace, SIMS and GeoPALM are government-run, and buyers are fragmented smallholders.

## Too competitive
- E-invoicing and payroll (above).

## Not covered (no search budget left)
Pharmacy controlled-drug reporting, foreign-worker permit management, clinic SST, DOSH forms and halal renewal were not investigated deeply and deserve follow-up.
