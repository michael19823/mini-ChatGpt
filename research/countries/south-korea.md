# South Korea - research report (2026-10-04)

Evidence base is thin: about 8 searches, WebFetch blocked, many Korean results returned only titles. Everything below that is not quoted from a search result is marked unverified. Accessibility: open market, no sanctions. Practical barriers for a foreign solo founder: Korean-language product, local payment/tax-invoice norms, and a mature domestic SaaS scene.

## Industries screened

| Industry | Workflow | Verdict | Reason |
|---|---|---|---|
| Export manufacturing (EU supply chain) | CBAM / customer carbon-data requests | Opportunity (weak) | ~1,700 Korean CBAM-reporting firms, mostly SMEs; 99.3% of surveyed exporters get carbon-data requests, two-thirds use no shared platform; but funded incumbents exist |
| Waste hauling / construction waste | Olbaro system manifests (15-day reporting) | Unverified | Mandatory, but no evidence of pain or an unserved gap found; state system likely has vendor integrations |
| Chemicals SMEs | K-REACH / chemical control registration, SDS | Poor distribution / consultant-led | Pain real (months and tens of millions KRW per substance), but done by consultants and gov-subsidised programs |
| Small workplaces (OSH) | Serious Accidents Punishment Act, risk assessment | Too competitive | Mandatory for under-50-employee sites since Jan 2024 per search summary; gov spends heavily on free tools (KOSHA); many vendors (unverified) |
| Veterinary clinics | Mandatory fee posting (20 items from 2025), vet prescription | Reject / unverified | Entrenched local clinic software (names not verified); low pain per clinic |
| Foreign worker employment reporting | HiKorea employment reporting | Unverified | Only a title surfaced; not researched |
| Cosmetics makers/importers | MFDS manufacturing/import amount and ingredient notification (Announcement 2026-183) | Unverified | Annual, small niche; not researched |
| Listed-company disclosure | English disclosure expansion (May 2026) | Reject | Enterprise buyers, procurement-heavy, no solo-founder fit |

## Opportunities

### Opportunity: CBAM / customer carbon-data pack for Korean SME exporters

**Industry:**  
Steel, aluminium, fertiliser, cement and downstream metal-part manufacturers exporting to the EU

**Buyer:**  
EHS / export manager or owner of an SME supplier (roughly 1,700 CBAM-reporting firms; more as Tier-2 suppliers get asked)

**Trigger / Why now:**  
CBAM definitive period began 2026 (verification plus certificate purchase). Government 15-measure support package and SME subsidy for measurement and verification (applications to 2026-09-15). KCCI survey (2026-08-20): 99.3% of exporters have received or expect customer emissions-data requests; two-thirds manage data with no shared platform.

**Current workflow:**  
1. Customer or EU importer sends an emissions-data template (Excel).
2. SME pulls energy, material and production data from ERP/MES/spreadsheets.
3. Consultant or staff compute embedded emissions per product.
4. Verifier checks; data is re-sent in each buyer's format.

**Pain:**  
Spreadsheet-based, repeated per buyer, with penalty and lost-order consequences. Evidence is survey-level, not workflow-level.

**Existing solutions:**  
Glassdome (SaaS, CBAM end-to-end), Three View's Eco365.Ai (TUV CBAM certification), other climate-tech vendors; government-funded programs; consultants.

**The gap:**  
Possibly the low end: tiny Tier-2 suppliers that cannot afford platforms, and multi-buyer template translation (one dataset to many customer formats). Unverified that incumbents do not already cover this.

**Possible product:**  
Lightweight data-to-template engine: ingest monthly energy/production sheets, compute CBAM default-value or actual-data emissions, output EU Commission and buyer-specific templates.

**MVP:**  
Excel upload, steel/aluminium calculation rules, export of CBAM communication template; Korean UI.

**Pricing hypothesis:**  
KRW 100-300k/month per firm (estimate); subsidy-eligible framing.

**How to find first customers:**  
Korea Industrial Complex Corp (KICOX) member firms, KCCI and SME Federation seminars, government CBAM briefings, KOTRA exporter lists.

**Risks:**  
Funded incumbents; government free tools; EU rule changes or simplification; verification and trust requirements; foreign founder credibility.

**Kill condition:**  
Interviews show suppliers already get this bundled free from their large customers (e.g. POSCO/Hyundai supplier portals) or from subsidised consultants.

**Score:** 4/10

**Sources:**  
- https://cbamguide.com/news/2026-08-20-korea-exporters-carbon-data-survey/  
- https://cbamguide.com/news/2026-09-02-korea-13th-joint-cbam-briefing-15-support-measures/  
- https://www.unicornfactory.co.kr/article/2024052010464766356  
- https://www.hellot.net/mobile/article.html?no=112693

## Rejected after competitor research
- CBAM as a generic carbon-accounting platform: Glassdome and Eco365.Ai already offer calculation, report and verifier handoff; only the narrow low-end variant above survives.
- Executive-level ESG / English-disclosure tooling: enterprise sales only.

## Attractive problem, poor distribution
- K-REACH / chemical-control registration for SMEs: costly and mandatory, but handled by consultants and Korea Environment Corp / SME Federation subsidised programs; joint-registration cost-sharing disputes are not software-solvable.

## Too competitive
- Serious Accidents Punishment Act / risk-assessment compliance for small workplaces: mandatory and recently expanded (risk-assessment regime stated as fully in force June 2026 in one unverified summary), but KOSHA free services and many safety-tech vendors.

## Not researched / unverified leads
- Olbaro waste manifests, HiKorea foreign-worker reporting, cosmetics MFDS notification, vet clinic software. Search coverage did not support scoring.

Sources reviewed: https://www.koreatimes.co.kr/amp/economy/20251231/english-disclosure-requirement-for-listed-firms-to-expand-yellow-envelope-law-to-take-effect-in-2026 ; https://www.dailian.co.kr/news/view/1322271 ; https://www.sidae.com/article/2026021117254765747
