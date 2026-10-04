# United Kingdom: opportunity research

Date: 2026-10-04. Research was cut short: the shared web-search budget ran out after 8 searches (4 of them useful per topic). Several industries were NOT researched in depth and are marked "unscreened/unverified". The UK is accessible to a solo founder (no sanctions, payment rails fine). It is a very competitive, software-saturated market, so the bar is high.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Waste (receivers, carriers, brokers, skip hire) | Defra Digital Waste Tracking (DWT) mandatory records | Promising, but crowded | Oct 2026 phase 1 live now; Oct 2027 phase 2 hits carriers/brokers/dealers. About 25 listed vendors already. |
| Accountants / sole traders / landlords | Making Tax Digital for Income Tax (from 6 Apr 2026) | Too competitive | HMRC recognised-software list is large; free and cheap apps exist. |
| Private landlords / letting agents | Renters' Rights Act PRS Database (rollout from 15 Dec 2026, £65 per property per year) | Weak | Mostly one-time registration, plus agents' existing software will add it. Poor frequency. |
| Construction (higher-risk buildings) | Building Safety Act gateways / golden thread | Attractive problem, poor distribution | Gateway 2 rejections for failing golden thread; but buyers are large developers or contractors, and construction-software incumbents exist. |
| Importers / customs brokers | UK CBAM (starts 1 Jan 2027) | Too competitive / early | CBAMable, Customs Declarations UK and others already target brokers. Aluminium, cement, fertiliser, hydrogen, iron and steel only. |
| SPS food importers | BTOM border controls | Unscreened | Not enough evidence gathered. |
| Employers / sponsor licence holders | Sponsor Management System reporting, right-to-work | Too competitive | SponsorPro and others exist; the Home Office SMS has no batch reporting. |
| Packaging producers (pEPR) | Twice-yearly data reporting | Unscreened | Search budget exhausted. Likely crowded. |
| Care, vets, funeral, fire safety, etc. | n/a | Unscreened | Not researched. |

## Opportunities

### Opportunity: Phase-2 Waste Carrier/Broker Digital Waste Tracking Bridge (for micro skip-hire, grab-hire, and tradesperson carriers)

**Industry:**
Waste management / skip hire / grab hire / small carriers and brokers

**Buyer:**
Owner-manager of a small waste carrier, skip or grab hire firm, or a registered broker or dealer, typically 1-10 staff, who today uses paper waste transfer notes, WhatsApp and spreadsheets or a basic job-booking tool.

**Trigger / Why now:**
DWT is mandatory for about 12,000 permitted receiving sites from 1 Oct 2026 in England and Wales (Scotland and NI Jan 2027). Phase 2 covers carriers, brokers and dealers from Oct 2027, with a voluntary period from April 2027. The sector has about 300,000 registered carriers, brokers and dealers (per a trade report; some sources say more than 100,000 active operators). Penalties include a £1,000 fixed penalty and unlimited variable penalties.

**Current workflow:**
1. Job booked by phone or WhatsApp.
2. Paper or PDF waste transfer note with EWC code written by hand.
3. Site receipt records weights.
4. Admin re-keys data at the end of the week or month.
5. From Oct 2026 receiving sites must submit records within 2 working days, and carriers will need to supply the same data.

**Pain:**
New mandatory 2-working-day submission window, EWC code and data-quality requirements, and a temporary spreadsheet route that runs until at least Oct 2027 (per vendor blogs, unverified against Defra text).

**Existing solutions:**
Defra lists about 25 providers. Vendors found: weighzIO, AnyWaste (free core DWT tier), Digital Tracking (eWTN, API), Waste Logics, VWS Software, Wastebolt (small receivers). One listed provider is reportedly a convicted exporter (letsrecycle headline), so the vendor list is uneven.

**The gap:**
Unverified. A hypothesis is a thin "DWT router" for operators who will not adopt a full job-management system: import their existing spreadsheet, validate EWC codes, and submit to the Defra API. This needs interviews, because AnyWaste is free and many vendors are racing for the same buyers.

**Possible product:**
A spreadsheet/CSV/PDF-to-DWT submission and exceptions-queue tool. It would validate EWC and SIC codes, catch rejections, and keep an audit trail.

**MVP:**
CSV upload, validation, Defra API submission (needs approved API access, unverified), and an error dashboard.

**Pricing hypothesis:**
£15-40 per month per site or operator (estimate).

**How to find first customers:**
Public Environment Agency waste carrier register and permit register, plus trade bodies (ESA, CIWM, NAWDO; the last two names are unverified as relevant) and skip-hire forums.

**Risks:**
The 25-vendor field; free tiers from AnyWaste; Defra API onboarding requirements (unverified); the temporary spreadsheet route may make the problem small; small operators have low willingness to pay.

**Kill condition:**
If 10 interviews with micro carriers show they will use free AnyWaste or their existing booking software, or if Defra API access is not available to small vendors.

**Score:** 5/10

**Sources:**
- https://www.letsrecycle.com/news/defra-confirms-october-2026-start-date-for-dwt/
- https://www.clydeco.com/en/insights/2026/08/on-the-horizon-digital-waste-tracking-becomes-mand
- https://www.gov.uk/government/publications/digital-waste-tracking-service/digital-waste-tracking-service
- https://esremedia.co.uk/blog/waste-management-software-small-operators-skip-hire-uk
- https://anywaste.com/waste-brokers/
- https://www.digitaltracking.co.uk/contact-us
- https://wastebolt.app/waste-blog/digital-waste-tracking-software-small-waste-receivers-2026

## Rejected after competitor research

- Making Tax Digital for sole traders/landlords: the HMRC recognised-software list is large, with free options (makingtaxdigital.campaign.gov.uk). Killed by mass-market accounting apps.
- Sponsor licence compliance: SponsorPro and similar platforms already track visa expiry, UKVI reporting duties and right-to-work.
- UK CBAM broker tooling: CBAMable and Customs Declarations UK already launched for brokers and forwarders.
- PRS database helper: one-time registration, and letting-agent and landlord software will absorb it.

## Attractive problem, poor distribution

- Building Safety Act golden thread for subcontractors: real regulator rejections at Gateway 2, but buyers are fragmented trades inside large contractors, and the sales cycle goes through main contractors (pbctoday, Build UK, Sept 2025). Sources: https://www.pbctoday.co.uk/news/digital-construction-news/construction-software-news/the-golden-thread-applies-to-every-trade-are-subcontractors-ready/165134/

## Too competitive

- Making Tax Digital, sponsor compliance, UK CBAM software (see above).

## Limitations

Packaging EPR, SPS import controls, Scottish deposit return, care and vet sectors, and fire-safety/gas-safe contractor workflows were not investigated. A follow-up with more search budget is recommended before concluding the UK has nothing better than the DWT lead.
