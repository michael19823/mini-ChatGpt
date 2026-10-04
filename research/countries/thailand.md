# Thailand: indie-hacker opportunity research

Research date: 2026-10-04. Caveat: the shared search budget ran out after about 12 searches. Competitor diligence is therefore thin, and the Thai-language waste and carbon vendor searches never ran. Scores are capped accordingly, and everything not in a cited source is marked "unverified" or "estimate". Accessibility: Thailand is open. No sanctions or payment blockers were identified. PromptPay and Thai QR are the local rails; a Thai entity may be needed for some B2B invoicing (unverified).

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Agri exporters (rubber, palm, coffee, cocoa, timber) | EUDR due diligence statements and geolocation | Maybe (partly pre-empted) | Hard deadlines, but the government's free NESW platform plus ARDA and EU-funded tooling cover the core. |
| Factories / waste generators | DIW waste transport permits, manifests, e-manifest | Best lead, thin diligence | Mandatory, recurring, per shipment. DIW issued new notifications in 2026. Incumbents unverified. |
| CBAM-exposed exporters (steel, aluminium) | Embedded-emissions data for EU importers | Maybe | Real pain for SMEs, but the segment is narrow and consultants and large vendors are likely. |
| Online sellers (Shopee, Lazada, TikTok) | Platform income reports to the Revenue Department and annual tax filing | Reject (weak) | Consumer-like buyers, and accounting tools such as FlowAccount and PEAK likely cover it (unverified). |
| E-invoicing (e-Tax Invoice) | Mandate preparation | Reject | Voluntary until about 2028, and the Revenue Department offers a free email route for SMEs under THB 30m. |
| Hotels / landlords | TM30 foreigner notification | Reject | Thai hotel PMS and Cloudbeds already integrate, and the fine is small (THB 2,000 per person). |
| Employers of foreign workers | 90-day report and work permit renewal | Poor distribution | Fragmented agents and manual immigration offices, but filing is physical or by agent. No API for a small vendor (unverified). |
| Food factories | Thai FDA licence renewal | Reject | The Thai FDA launched automated e-Submission renewal in Nov 2025 to Jan 2026, which removes the pain. |
| PDPA compliance (all SMEs) | DPO, records of processing, complaints | Too competitive | Generic compliance software and law firms, with a weak mandatory-action cadence. |

## Opportunities

### Opportunity: Factory Waste Transport Permit and Manifest Router (DIW)

**Industry:**  
Industrial waste generators and waste haulers and processors (factories under the Factory Act).

**Buyer:**  
Environmental or EHS officer at small and mid-size factories, and dispatch or compliance staff at licensed waste transporters and processors.

**Trigger / Why now:**  
The MOI notification on waste management (B.E. 2566) took effect 1 Nov 2023 and applies the polluter-pays principle. The generator stays liable until final disposal, and transport off-site needs DIW permission via the i-Industry system or in person. DIW also issued three new waste-related notifications in B.E. 2569 (2026) that move more of the process to electronic frameworks (the notifications' contents are unverified; they come from a secondary summary).

**Current workflow:**  
1. The factory classifies the waste and gets DIW permission to move it, via i-Industry or in person.
2. Each load ships with a manifest (paper or DIW e-manifest).
3. The haulers' and processors' records are reconciled against the generator's own records.
4. Annual or periodic waste reports and evidence are kept for audits.

**Pain:**  
Generator liability runs to final disposal, so proof of proper disposal is the key deliverable. Duplicate entry between the factory's own records, the hauler's records and DIW is likely but unverified.

**Existing solutions:**  
DIW's own portals (i-Industry, e-manifest). Local EHS consultants. ERP or Excel. Dedicated waste software for Thailand: not found, because the search was not run.

**The gap:**  
The gap is unverified: it is probably a lightweight layer that captures one load record and produces permits, manifests and disposal-proof packs, with reconciliation across generator, hauler and processor.

**Possible product:**  
A per-load waste record that outputs the DIW permit data, the manifest and the audit pack, with expiry alerts for licences and permits.

**MVP:**  
Thai-language web app with a waste-type catalogue, a load log, document generation, a reconciliation dashboard, and LINE notifications.

**Pricing hypothesis:**  
Estimate: THB 1,500 to 5,000 per month per factory. Haulers could pay per-load or per-fleet pricing.

**How to find first customers:**  
The DIW factory registry and the list of licensed waste processors and transporters (public, unverified). Industrial estate operators, plus EHS training groups.

**Risks:**  
DIW portals may not allow third-party integration. Incumbent vendors are unknown. The gap could be smaller than assumed once the 2026 e-manifest is live.

**Kill condition:**  
Interviews show DIW e-manifest already covers the whole flow, or a local waste-tech vendor already serves haulers.

**Score:** 6/10

**Sources:**  
- https://www.tilleke.com/insights/thailand-embraces-polluter-pays-principle-as-new-regulation-on-industrial-waste-takes-effect
- https://enviliance.com/regions/southeast-asia/th/th-waste
- https://api-diwwaste.diw.go.th/files/manual/wg.pdf

### Opportunity: EUDR Evidence Pack for Smaller Thai Exporters

**Industry:**  
Agricultural exporters and traders (rubber, palm oil, coffee, cocoa, timber).

**Buyer:**  
Compliance or export manager at small and mid-size exporters, plus cooperatives and aggregators.

**Trigger / Why now:**  
Large and mid-size operators must comply by 30 Dec 2026, and micro and small ones by 30 Jun 2027 (per search summary). ARDA launched the "EUDR One Data Thailand" platform and the NESW single window (eudrthai.com), which can generate DDSs.

**Current workflow:**  
1. Collect farm-level plot geolocation and legality documents from suppliers.
2. Run the risk assessment.
3. Prepare a DDS per shipment for the EU buyer.
4. Retain the records.

**Pain:**  
Geolocation data is collected per farmer, and cooperatives are fragmented. Thailand is rated low-risk, which lowers the burden.

**Existing solutions:**  
Government NESW (free). International tools such as Tracextech, which markets Thai rubber exporters directly. ERP modules. Consultants.

**The gap:**  
Possibly the messy supplier-data intake (LINE and Excel) before data goes into NESW, and buyer-specific packs. Unverified.

**Possible product:**  
A supplier-data collection and validation layer that exports to NESW and to buyer formats.

**MVP:**  
Excel and LINE intake, polygon validation, and a export file for NESW.

**Pricing hypothesis:**  
Estimate: THB 3,000 to 10,000 per month per exporter.

**How to find first customers:**  
Rubber Authority of Thailand (RAOT) and Thai Rubber Association member lists, plus coffee and palm associations.

**Risks:**  
A free government platform is the main threat. Low-risk status and EU delays reduce urgency. Sales are partly to a few large exporters.

**Kill condition:**  
NESW supports bulk intake and buyer exports, or the segment has fewer than about 300 reachable exporters.

**Score:** 4/10

**Sources:**  
- https://thailand.go.th/issue-focus-detail/thailand-launches-eudr-one-data-platform-for-farm-exports
- https://www.nationthailand.com/business/economy/40069064
- https://tracextech.com/eudr-exporters/rubber-parts-exporters-thailand/
- https://en.thairath.co.th/agriculture/agricultural-policy/2909150

### Opportunity: CBAM Embedded-Emissions Data Pack for Thai Steel and Aluminium Suppliers

**Industry:**  
Small steel and aluminium fabricators and suppliers exporting to the EU.

**Buyer:**  
Sustainability or quality manager at SME exporters, or the sales manager who answers the EU importer's data request.

**Trigger / Why now:**  
The CBAM definitive phase started 1 Jan 2026. Thai CBAM-covered exports grew 54.71% in the first ten months of 2025, with steel above 84% and aluminium 15.5%. Reports say SMEs lack IT solutions to record and calculate emissions.

**Current workflow:**  
1. An EU importer sends an emissions data template.
2. The exporter collects energy and material data in spreadsheets.
3. A consultant or verifier calculates and signs off.
4. The data goes back to the importer, for every buyer separately.

**Pain:**  
Cost of consultants and verifiers and staff hours, as reported by the sources.

**Existing solutions:**  
Consultants and verifiers. Global carbon-accounting SaaS (unverified names). Thai Greenhouse Gas Management Organization (TGO) tools (unverified).

**The gap:**  
Unverified. Competitor search was not completed.

**Possible product:**  
Buyer-template-aware CBAM data collector with calculation rules.

**MVP:**  
Template filler and calculator for steel and aluminium only.

**Pricing hypothesis:**  
Estimate: THB 5,000 to 15,000 per month.

**How to find first customers:**  
Thai Iron and Steel Institute members and Federation of Thai Industries (FTI) lists.

**Risks:**  
Small market and rule changes (EU simplification). Verification must stay with accredited verifiers. Calculation liability.

**Kill condition:**  
Fewer than about 200 Thai SME exporters ship CBAM goods directly, or large carbon-software vendors already localise.

**Score:** 4/10

**Sources:**  
- https://www.lhbank.co.th/getattachment/5f7ab47d-4eb2-4cec-bc49-d63b88422a51/economic-analysis-Economic-and-Industry-Analysis-2026-CBAM-Impact-Analysis-Jan2026
- https://en.daibieunhandan.vn/thai-exporters-face-difficulties-in-meeting-eus-requirement-for-carbon-emissions-reporting-post290048.html
- https://thailand.go.th/issue-focus-detail/thai-cbam-exports-to-eu-continue-to-grow-businesses-urged-to-accelerate-sustainability-efforts/

## Rejected after competitor research

- e-Tax Invoice readiness product: no mandate until about 2028, and the Revenue Department's free email route covers SMEs below THB 30m revenue. Source: https://www.fiscal-requirements.com/news/5729-thailands-e-invoicing-remains-voluntary-key-20262027-updates-and-tax-incentives
- Food-factory licence renewal tool: killed by Thai FDA's own automated e-Submission renewal. Source: https://en.fda.moph.go.th/news/thai-fda-launches-automated-system-for-food-license-renewal-apply-anytime-anywhere
- TM30 filer for landlords: hotel software such as Cloudbeds already handles Thai TM30. Source: https://cloudbeds.com/government-compliance/thailand

## Attractive problem, poor distribution

- 90-day report and work-permit renewal for foreign workers: the electronic permit system (eworkpermit.doe.go.th) exists, but the 90-day report is done at immigration offices or by agents. Buyers are fragmented. Source: https://www.bal.com/immigration-news/thailand-additional-requirements-for-90-day-report-applications-announced/
- Online-seller income reporting: the platform reports to the Revenue Department (150 days after year-end) and about 3 million sellers are exposed, but the sellers are consumer-like. Source: https://www.tilleke.com/insights/thailand-requires-electronic-platforms-to-report-income-from-business-operators/

## Too competitive

- PDPA compliance: PDPC fines total about THB 21.5m, with 2,672 complaints by Jan 2026, and law firms and generic privacy tools serve it. Source: https://www.tilleke.com/insights/key-takeaways-from-thailands-data-privacy-day-2026/
