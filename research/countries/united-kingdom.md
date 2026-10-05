# United Kingdom: opportunity research (deep pass)

Date: 2026-10-05. Deep pass using 49 web searches (WebFetch blocked; findings come from search-result summaries, so details marked "unverified" need a direct read of the source before anyone acts on them).

**Accessibility:** open to a foreign solo founder. There are no sanctions issues, card and Direct Debit payment rails are standard, and government services publish open APIs (Defra Receipt of Waste API, Street Manager API, LIS cattle API). It is a software-saturated market, so the bar is high. Many headline 2025–2027 regulatory triggers already have several vendors, and some have free tools.

**Bottom line:** none of the big national triggers (Making Tax Digital, Digital Waste Tracking, pEPR, Awaab's Law, Companies House filing) leaves a clean gap. Each already has 5–25 vendors, often with free tiers. The better UK leads are older, **fragmented, per-case submissions to 150+ local authorities**, where software tracks the item but a human still files it, council by council:
- highway skip and scaffold licences;
- Deprivation of Liberty Safeguards (DoLS) applications.

Two new triggers deserve interviews but have small or contested markets:
- CMA vets order (2026–27);
- Vaping Products Duty (from 1 Oct 2026).

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Skip hire / scaffolding (highway licences) | Per-job skip and scaffold licences from each of ~150+ highway authorities (forms, portals, Word/PDF, email) | **Promising** | Per job, mandatory, fragmented. Skip-hire software tracks permit numbers and expiry but does not file applications. No cross-council filing platform found. |
| Care homes (DoLS) | Form 1/Form 2 DoLS applications to 153 English LAs, renewals, CQC outcome notifications | **Promising, with reform risk** | 364,900 applications a year and a 118,850 backlog. Each LA has its own submission route (email, portal, even fax). Liberty Protection Safeguards (LPS) reform consultation in 2026 is the main risk. |
| Veterinary practices | CMA Order 2026: price lists, itemised bills, estimates, Find a Vet price data, prescription fee caps | Promising, crowded fast | Hard new mandate (order made Sept 2026; small practices in 2027), but VetComply, Vetstoria and PMS vendors are already moving. |
| Vape manufacturers / importers | Vaping Products Duty monthly returns, duty account, stamp reconciliation (from 1 Oct 2026) | Promising, small market | About 200 manufacturers and up to 750 importers/warehousekeepers. Enterprise excise tools (Descartes, SGS) target large firms. |
| Waste carriers / brokers (micro) | DWT phase 2 (Oct 2027) + carrier/broker/dealer permit reform (SI 2026/873, from 22 July 2027) | Weakened | Real double trigger, but LoadLog and AnyWaste are free and Defra lists ~25 providers. |
| Waste receiving sites | DWT phase 1 (live 1 Oct 2026) | Too competitive | Open API plus a Defra spreadsheet route; Weighsoft, Waste Logics, VWS, weighzIO, Wastebolt and others. |
| EV chargepoint operators (street works) | Street Manager permits/notices for EV chargepoint operators (CPOs), newly undertakers from April 2026; FPNs doubled Jan 2026 | Niche | Real trigger, but few buyers. Symology and Depotnet already cover street works, and the free Street Manager UI is a substitute. |
| Packaging producers | pEPR RPD data, RAM recyclability ratings | Too competitive | Compliance schemes (Valpak, Ecosurety, ERP UK) plus the free government data-file generator. |
| Drinks producers | Deposit Return Scheme (Oct 2027) | Weak | Single DMO (Exchange for Change) for all four nations, 0p producer fee until Dec 2028, glass deferred in Wales. Mostly one-time setup. |
| Nurseries | Funded-hours termly headcount to 152 LA portals | Rejected | Funding Loop already automates portal entry (2,000+ nurseries, £2.50 per child per term). |
| Social landlords | Awaab's Law phase 2 (30 Nov 2026) hazard timescales | Too competitive | Plentific, Made Tech, Weightmans tool, CHPS Salesforce, Netcall. Buyers are councils and housing associations with procurement. |
| High-rise residential (fire) | Residential PEEPs (6 Apr 2026); fire risk assessor certification (~2028–29) | Too competitive / early | RiskBase Engage, Brocade, Shine Compliance. Assessor certification is years away. |
| Homecare agencies | Visit data and invoices to multiple councils (CM2000, ContrOCC, portals) | Too competitive | CareLineLive, Birdie, Access, OneAdvanced already export to council systems. |
| Food importers | BTOM / IPAFFS SPS pre-notification | Rejected | UK–EU SPS agreement expected mid-2027 removes routine EU→GB checks, so the problem shrinks. |
| Funeral directors (Scotland) | Funeral Director Code of Practice (Mar 2025), inspections | Weak | Record-keeping rather than recurring submissions. Small market. Licensing still only "under consideration". |
| Pest control | Glue-trap class licence "report of action" within 5 working days to Natural England | Too small | Glue-trap use is exceptional-only, so volumes are low. |
| HVAC / refrigeration | F-gas records, leak checks | Too competitive | Field-service and F-gas log apps are common. One claim about a 2025 quarterly UK reporting change is unverified. |
| Venues (Martyn's Law) | SIA notification, procedures (spring 2027) | Rejected | Mostly one-time. Consultants and training firms already serve it. |
| Dental labs | MHRA custom-made device statements, PMS rules (16 Jun 2025) | Not pursued | Lab management software likely produces statements (unverified). Low regulatory change for custom-made devices. |
| Cattle farmers | CTS → Livestock Information Service (summer 2026), bovine EID 2027 | Too competitive | Free statutory service; existing farm, market and abattoir software integrates via API. |
| Small companies / accountants | Companies House software-only accounts filing (2027; ICAEW reports P&L changes from Apr 2028) | Too competitive | TinyTax (free for micro), TaxCalc, IRIS, Sage. Annual only. |
| Public bodies (academy trusts etc.) | Procurement Act 2023 notices, biannual payments compliance notice | Weak | Low frequency. e-tendering suites publish notices to the Central Digital Platform. |
| (from first pass) Sole traders / landlords | Making Tax Digital for Income Tax (Apr 2026) | Too competitive | Large HMRC recognised-software list including free options. |
| (from first pass) Sponsor licence holders | SMS reporting, right-to-work | Too competitive | SponsorPro and similar. |
| (from first pass) Importers | UK CBAM (Jan 2027) | Too competitive | CBAMable, Customs Declarations UK. |
| (from first pass) Landlords | PRS Database (Renters' Rights Act) | Weak | Mostly one-time. Agent software will absorb it. |

## Opportunities

### Opportunity: Highway Licence Router for skip-hire and scaffolding firms

**Industry:**
Skip hire, grab/skip waste carriers, scaffolding contractors (also hoarding / building-materials road occupation).

**Buyer:**
Owner or office/admin manager at a skip-hire firm (typically 2–30 staff) or scaffolding contractor working across several council areas, especially in London and other metro areas where on-road placement is common.

**Trigger / Why now:**
There is no new law; this is a standing, per-job mandatory workflow. It is now more painful because:
- councils are moving to their own online-only form platforms. Cambridgeshire no longer accepts phone or email; Walsall, Lambeth and Hampshire each run their own online form.
- skip firms face added admin load from Digital Waste Tracking phase 2 (Oct 2027) and the carrier/broker/dealer permit reform (SI 2026/873, in force 22 July 2027). This gives a bundle angle.

**Current workflow:**
1. Customer books a skip or scaffold that must sit on the road or pavement.
2. Admin finds the right highway authority (county vs. district vs. London borough vs. TfL red route) and its specific form. That may be an online portal account, a downloadable Word/PDF form or email.
3. Admin re-types address, location plan, dates, sizes, lighting/cone arrangements and insurance details. Scaffolds also need £5m–£10m PLI certificates, drawings and TG20 compliance, which vary by council.
4. Admin pays a fee (average about £30 for skips, about £68 in London per a vendor guide) and waits.
5. Admin tracks expiry (skip permits are typically up to 28 days, or 14 days on verges in summer) and re-applies for extensions. Missed renewals risk enforcement.
6. Notice periods differ: 10 working days in some councils, 5 in others.

**Pain:**
Per-job, mandatory and fragmented. Council forms differ in fields, insurance minimums and lead times, and each council keeps its own account and submission history. Skip-hire software already records permit numbers and sends expiry reminders, which shows the tracking pain is known, but the filing itself is still manual.

**Existing solutions:**
- Skip-hire / waste job systems that record permit numbers and expiry: Trade2Base skip-hire module, Waste Logics, Fractal, LoadLog. They do not submit to councils.
- Scaffolding software: Baton (scaffolding ERP), ScaffoldIQ (Avontus), Scafflinq, Lyndon Inspection Manager. These focus on inspections, tagging and handovers, not council licences.
- GOV.UK "Find licences" only links to individual councils.
- Substitute: office admin doing it by hand.
- No unified multi-council skip/scaffold licence filing service found (absence is not proof).

**The gap:**
Nobody turns "one job record" into the right council's licence application, with correct attachments, lead-time warning, fee tracking and renewal, across councils.

**Possible product:**
A licence router. The firm enters the job once (or it is pulled from its skip/scaffold system). The tool picks the highway authority, pre-fills that council's form (browser automation or a generated PDF/email), attaches the stored insurance and plans, tracks status and fees, and auto-prompts extensions.

**MVP:**
- Skip licences only, for the ~20–30 councils that one or two pilot firms use most (for example a cluster of London boroughs).
- Generated applications plus a "submit assist" browser extension.
- An expiry/renewal dashboard.
- A shared insurance-document vault.

**Pricing hypothesis:**
£49–149 per month by volume, or about £2–4 per application filed (estimate). Scaffolding licences are higher value per application (estimate £5–10).

**How to find first customers:**
- Environment Agency public waste carrier register (filter skip/grab hire).
- Council-published lists of licensed skip operators, which some councils publish (unverified).
- NASC member directory for scaffolders.
- Skip-hire trade groups and Facebook groups.
- Google Maps listings per borough.

**Risks:**
- Councils may block automation or require a council-specific login; payment automation is hard.
- On-road skip volume may be low outside cities.
- Incumbent skip software could add filing for top councils.
- Some councils may consolidate onto shared platforms.

**Kill condition:**
Interviews with 10 skip/scaffold firms show fewer than ~5 on-road licence applications per week, or that a few local councils cover 90% of their volume, so the admin cost is tolerable.

**Score:** 6/10

**Sources:**
- https://www.cambridgeshire.gov.uk/residents/travel-roads-and-pathways/highway-licences-and-permits
- https://forms.walsall.gov.uk/Application-For-A-Skip-Licence
- https://lambeth.gov.uk/Business-rates-services-and-licensing/licensing-and-permits/Apply-change-or-pay-for-a-licence/Apply-for-a-skip-licence
- https://www.hants.gov.uk/transport/licencesandpermits/scaffolding
- https://www.suffolk.gov.uk/asset-library/2025-sca-application.docx
- https://www.rbwm.gov.uk/business-and-economy/licensing-and-regulation/scaffolding-and-hoarding/apply-scaffolding-commercial-licence
- https://www.gov.uk/find-licences/apply-skip-permit
- https://www.skipsandbins.com/a-guide-to-skip-permits/
- https://www.trade2base.com/skip-hire
- https://scaffmag.com/news/products-services/new-software-aims-to-transform-scaffolding-business-management
- https://www.avontus.com/scaffoldiq/purchase/
- https://www.circularonline.co.uk/news/ciwm-competence-scheme-moves-into-delivery-as-waste-permitting-reforms-become-law/

### Opportunity: DoLS Application and Notification Router for care homes

**Industry:**
Adult social care: residential and nursing care homes in England (and hospitals as managing authorities).

**Buyer:**
Registered Manager or deputy/administrator at an independent care home or small group (1–20 homes). Group compliance lead for larger groups.

**Trigger / Why now:**
- Volume keeps rising: 364,900 DoLS applications in 2024–25 (+9.8%), with a backlog of 118,850 and only 21% completed within the 21-day statutory timeframe (average 126 days).
- The government announced a Liberty Protection Safeguards consultation for the first half of 2026. That is both a risk and a coming transition that providers will need help with.
- Separately, CQC requires a notification of every DoLS outcome. Non-compliance with that duty is widely reported (one survey summary says about two-thirds of providers fail to notify; treat that figure as unverified).

**Current workflow:**
1. Manager identifies a resident who lacks capacity and is under continuous supervision and control, and decides whether to grant an urgent authorisation (7 days).
2. Completes Form 1 (new) or Form 2 (renewal, at least 28 days before the 12-month expiry).
3. Submits it to the resident's supervisory body. Each LA's route differs: email (Leicester, Carmarthenshire), online form (Leicestershire), a dedicated portal (Darlington), or email/fax (West Sussex). Residents placed by different LAs mean several routes for one home.
4. Chases the LA for months because of the backlog, re-sends forms and logs changes of circumstance.
5. On the outcome, notifies CQC via its online form/email, then updates the care plan and conditions.

**Pain:**
- Recurring per resident and per year, mandatory under the Mental Capacity Act and CQC regulations.
- Unlawful deprivation of liberty is a legal and inspection risk.
- Today's "DoLS tracker" is often a £12.99 Word/PDF template (care4quality) or a generic audit checklist.

**Existing solutions:**
- Digital care-planning systems: Person Centred Software (8,000+ providers), Nourish, Access Care Planning and others. These likely hold DoLS fields and expiry dates; whether they submit to LAs is unverified.
- DoLSpro: specialist DoLS software, mainly for supervisory bodies and assessors.
- Word/Excel trackers.
- LA portals themselves.

**The gap:**
Nothing found that routes Form 1/2 to the correct LA in that LA's required way, tracks acknowledgement and chases, auto-generates the CQC outcome notification, and keeps renewal deadlines across residents funded by different LAs.

**Possible product:**
A DoLS compliance workspace for care homes:
- resident register;
- Form 1/2 pre-fill from resident data;
- an LA routing table (email/portal/form per supervisory body);
- an outstanding-applications chaser log;
- 28-day renewal alerts;
- one-click CQC outcome notification draft;
- an inspection-ready audit trail.

**MVP:**
- Resident DoLS register plus Form 1/2 generator.
- Per-LA submission instructions and email send with a tracked audit log.
- Expiry/renewal alerts and a CQC notification template.
- Pilot with 5–10 homes in two or three LA areas.

**Pricing hypothesis:**
£25–60 per home per month (estimate). Group pricing for multi-home operators.

**How to find first customers:**
- CQC public register of care homes (downloadable directory; about 14,000+ care homes in England, estimate).
- Local care associations and registered manager networks.
- LA provider forums (DoLS teams already brief providers).

**Risks:**
- LPS reform could replace DoLS and change the care home's role. Timing is unclear; the consultation is in 2026 and implementation is likely years later.
- Care-planning incumbents (PCS, Nourish) could add the feature.
- Special-category health data means GDPR, DSPT and NHS data-security expectations.

**Kill condition:**
- Government confirms an LPS start date within ~18 months that removes care homes' application role; or
- interviews show PCS/Nourish already handle submission and CQC notification well enough; or
- most LAs move to a single shared portal.

**Score:** 6/10

**Sources:**
- https://www.gov.uk/government/statistics/deprivation-of-liberty-safeguards-england-2024-to-2025/deprivation-of-liberty-safeguards-england-2024-to-2025-statistical-commentary
- https://www.carmarthenshire.gov.wales/council-services/social-services/deprivation-of-liberty-safeguards-dols/managing-authorities/
- https://www.leicester.gov.uk/your-council/policies-plans-and-strategies/social-care-and-education/deprivation-of-liberty-safeguards-dols/
- https://www.westsussex.gov.uk/social-care-and-health/social-care-and-health-information-for-professionals/adults/deprivation-of-liberty-safeguards-dols/
- https://adultservices.darlington.gov.uk/web/portal/pages/dols
- https://www.medway.gov.uk/info/200169/adult_social_care/432/the_deprivation_of_liberty_safeguards_dols/3
- https://cqc.org.uk/node/2375
- https://www.care4quality.co.uk/?p=32128
- https://www.dolspro.co.uk/about-us.html
- https://www.sacpa.org.uk/2025/10/29/uk-government-to-launch-consultation-on-liberty-protection-safeguards-in-2026/
- https://www.hcrlaw.com/news-and-insights/liberty-protection-safeguards-what-the-2026-consultation-means-for-health-and-social-care-providers/
- https://personcentredsoftware.com/resources/pcs-vs-nourish

### Opportunity: CMA Vets Order compliance sync for independent practices

**Industry:**
Veterinary practices (small-animal first-opinion).

**Buyer:**
Practice owner or practice manager at an independent practice (1–14 sites). Practices with fewer than 15 sites are exempt from annual compliance confirmation to RCVS, but not from the rules.

**Trigger / Why now:**
The CMA published its final decision on 24 March 2026 and made the Veterinary Services Market Investigation Order 2026 in September 2026. Rollout is from December 2026 for large chains, with smaller practices following in 2027. Requirements:
- full price lists, plus a separate parasiticide price list;
- itemised bills, and written estimates above £500;
- ownership disclosure;
- capped prescription fees (£21 first item, £12.50 each additional);
- price data submitted to the RCVS for the enhanced Find a Vet comparison site.

Every practice also pays the RCVS a levy (initial payment £349.43).

**Current workflow:**
1. Manager exports the fee list from the PMS (RoboVet, ezyVet, Provet Cloud, VetIT, etc.).
2. Maps it by hand to the CMA's standardised service names and formats.
3. Publishes it on the website and in practice.
4. Submits it to RCVS Find a Vet.
5. Repeats on every price change; separately produces estimate and prescription paperwork.

**Pain:**
New legally binding obligations with CMA/RCVS monitoring. Price lists go stale every time PMS prices change. Most independents have no compliance staff.

**Existing solutions:**
- VetComply: CMA pricing transparency plus RCVS PSS, H&S and COSHH; offers free tools.
- Vetstoria (booking platform) markets CMA-requirement support.
- Agilio Software publishes CMA guidance and sells to vets.
- Vetrics (analytics) covers CMA data sharing.
- VetsCompared is an existing comparison site.
- PMS vendors are likely to add exports.
- Gov.uk guidance for practices.

**The gap (hypothesis):**
Continuous PMS-price → CMA standard list → website and RCVS feed sync with change detection. Whether VetComply or PMS vendors already do this is unverified, and the field is filling fast.

**Possible product:**
A connector that reads PMS price tables, maps them to CMA categories once, then republishes the price page and RCVS submission whenever prices change. It would also generate estimate and written-prescription templates.

**MVP:**
CSV import from the two most common independent PMS systems, a mapping UI to the CMA list, a hosted price-list page and embed, and an RCVS-format export.

**Pricing hypothesis:**
£29–79 per practice per month (estimate).

**How to find first customers:**
- RCVS Find a Vet / RCVS register of practice premises.
- SPVS (Society of Practising Veterinary Surgeons) and independent buying groups.
- VetTimes advertising.

**Risks:**
- VetComply is already positioned; PMS vendors will add native exports.
- Once set up, it may be "set and forget", so churn is likely.
- RCVS data format not yet known.

**Kill condition:**
The RCVS submission format is simple and PMS vendors ship native exports by mid-2027, or VetComply's free tools cover it.

**Score:** 5/10

**Sources:**
- https://www.gov.uk/guidance/what-veterinary-businesses-and-vets-need-to-do-following-the-cmas-final-vets-report
- https://www.avma.org/news/uk-veterinary-businesses-have-one-year-implement-major-reforms
- https://assets.publishing.service.gov.uk/media/6ab237c14c0f475de0a66b27/__Veterinary_Services_Market_Investigation_Order_2026__.pdf
- https://assets.publishing.service.gov.uk/media/6a86eb4054bcee010d5145c3/_Veterinary_Services_Market_Investigation__Funding__Order_2026_.pdf
- https://agiliosoftware.com/articles/cma-final-decision/
- https://vetcomply.co.uk/
- https://www.vetstoria.com/vetstoria-helps-veterinary-practices-meet-the-new-cma-requirements/
- https://www.vetrics.co/blog/cma-veterinary-data-sharing-and-the-rcvs-levy
- https://www.vettimes.com/news/business/digital/price-comparison-service-launched-for-uk-vet-practices

### Opportunity: Vaping Products Duty account and stamp reconciliation for small e-liquid makers and importers

**Industry:**
Vape e-liquid manufacturers, importers, warehousekeepers.

**Buyer:**
Owner or finance lead at a small UK e-liquid brand or importer that holds (or needs) HMRC VPD approval.

**Trigger / Why now:**
- Vaping Products Duty began on 1 October 2026 at £2.20 per 10ml. It needs HMRC approval, approved premises, duty stamps from 1 Oct 2026, and all products stamped from 1 April 2027.
- Monthly returns are due by the 7th, with payment by the 15th.
- Records kept for 6 years: duty account, stock records by duty status and location, movement records, and an audit trail from production and imports to sales.

**Current workflow:**
1. Production and import records are kept in spreadsheets or a basic ERP.
2. Accountant or owner calculates liquid volumes per product and period.
3. Stamps are ordered and applied, and stamp usage and wastage tracked.
4. Monthly return is filed with HMRC.
5. Records are reconciled for HMRC assurance visits.

**Pain:**
A new monthly excise regime that small firms have never run. Commentators expect smaller manufacturers to exit because of the cost and complexity. Software and staffing to administer the duty are named as added costs.

**Existing solutions:**
- Descartes (VPD compliance landing page), SGS eCustoms, and general excise/bonded-warehouse systems, mostly enterprise.
- Accountants (UHY, Hillier Hopkins, Brown Butler and others publish guidance).
- Spreadsheets.

**The gap:**
A lightweight, SME-priced VPD duty account: product ml master data, stock by duty status, stamp ledger and a monthly return worksheet, for firms too small for Descartes or SGS.

**Possible product:**
A duty ledger connected to Shopify/Xero/stock sheets. It computes the VPD liability, tracks stamps, produces the monthly return figures and keeps an HMRC-ready audit trail.

**MVP:**
Product catalogue with ml per unit, stock movement import (CSV), stamp register, and a monthly return calculator plus record pack.

**Pricing hypothesis:**
£99–299 per month (estimate).

**How to find first customers:**
- HMRC approved-business checker (if published; unverified).
- IBVTA and UKVIA members.
- E-liquid brands on trade show exhibitor lists.
- Accountants advising vape clients.

**Risks:**
- Small, shrinking market (about 200 manufacturers and up to 750 importers/warehousekeepers, per HMRC impact estimates).
- Reputational and payment-processor issues with the vape sector.
- Consolidation onto contract manufacturers that already have excise systems.

**Kill condition:**
Fewer than ~300 small approved entities remain, or contract manufacturers and accountants absorb the returns.

**Score:** 5/10

**Sources:**
- https://www.gov.uk/government/news/new-vaping-products-duty-comes-into-effect
- https://www.gov.uk/guidance/keeping-records-for-vaping-products-duty-and-the-vaping-duty-stamps-scheme
- https://www.gov.uk/government/publications/introduction-of-vaping-duty-stamps-scheme-on-1-october-2026/vaping-duty-stamps-scheme-information
- https://www.uhy-uk.com/insights/are-you-ready-hmrcs-vaping-products-duty-and-vaping-duty-stamps-scheme-arriving-2026
- https://hillierhopkins.co.uk/insight-posts/vaping-duty-hits-the-uk/
- https://www.descartes.com/lp/vpd-compliance-made-simple
- https://ecustoms.sgs.com/?p=14386

### Opportunity: Micro waste carrier "2027 pack": Digital Waste Tracking phase 2 + new transporter permit

**Industry:**
Waste carriers, brokers and dealers: skip/grab hire, man-and-van clearance, small trade-waste collectors.

**Buyer:**
Owner-manager of a 1–10 person waste carrier or broker.

**Trigger / Why now:**
Two hard deadlines in 2027:
- Digital Waste Tracking becomes mandatory for carriers, brokers, dealers and exporters from October 2027, after a private beta from Oct 2026 and a public beta in spring 2027.
- The Environmental Permitting (Waste Controlling or Transporting) Regulations 2026 (SI 2026/873) replace carrier/broker/dealer registration with standard-rules permits or registered exemptions, with technical competence and ID/criminal checks, from 22 July 2027. Upper-tier carriers move over as registrations expire; lower-tier have a further 12 months. CIWM's competence scheme is moving into delivery.

**Current workflow:**
1. Paper or PDF waste transfer notes.
2. Re-keying for receiving sites (now on DWT since 1 Oct 2026).
3. Registration renewal, then the new permit application and competence evidence.

**Pain:**
New digital record duty plus a new permit regime in the same year. Paper transfer notes continue in parallel until at least Oct 2027.

**Existing solutions:**
- LoadLog (free, submits WTNs to DWT) and AnyWaste (free core DWT tier).
- Waste Logics, Access Weighsoft, Fractal, Trade2Base skip-hire module, Digital Tracking (eWTN), Wastebolt.
- About 25 Defra-listed providers.
- CIWM for competence.

**The gap:**
Narrow at best. A combined "permit + competence evidence + DWT movements + skip/highway licences" pack for micro operators is the only angle not covered, and free DWT tools undercut it.

**Possible product:**
Bundle into the Highway Licence Router above rather than stand alone.

**MVP:**
DWT movement entry via the open Receipt of Waste / carrier API (phase 2 API not yet confirmed), with permit renewal and competence document tracking.

**Pricing hypothesis:**
£15–40 per month (estimate); low willingness to pay.

**How to find first customers:**
Environment Agency public register of waste carriers, brokers and dealers.

**Risks:**
Free incumbents, a crowded vendor list, low willingness to pay, and a phase 2 API spec still to come.

**Kill condition:**
Free tools (LoadLog, AnyWaste) cover carrier phase 2 completely. On current evidence this is likely.

**Score:** 4/10 (down from 5/10 in the first pass because free carrier-side tools were found)

**Sources:**
- https://defra.github.io/waste-tracking-service/production/
- https://bpca.org.uk/news-and-blog/digital-waste-tracking-dwt-is-coming-1-october-2026
- https://www.burges-salmon.com/articles/102mrv5/the-rollout-of-digital-waste-tracking-in-the-uk-what-you-need-to-know/
- https://www.clydeco.com/en/insights/2026/06/carriers-brokers-and-dealers-reform-transition-to
- https://www.circularonline.co.uk/news/ciwm-competence-scheme-moves-into-delivery-as-waste-permitting-reforms-become-law/
- https://www.capterra.co.uk/software/1238800/LoadLog
- https://anywaste.com/waste-brokers/
- https://www.folderit.com/blog/receipt-of-waste-api-software/

### Opportunity: Street works companion for new EV chargepoint undertakers

**Industry:**
EV chargepoint operators (CPOs) and their civils installers.

**Buyer:**
Operations / deployment manager at a small or mid CPO doing on-street installs.

**Trigger / Why now:**
- The Planning and Infrastructure Act 2025 and the Traffic Management Permit Scheme (Amendment) Regulations 2026 made CPOs "undertakers" with access to street works permits and Street Manager (guidance from 19 March / 10 April 2026).
- From 5 January 2026, FPNs doubled (£240, or £160 discounted, for late notices and permit-condition breaches) and section 74 overrun charges extended to weekends and bank holidays.

**Current workflow:**
1. Plan sites.
2. Raise permits in Street Manager, honouring each highway authority's permit conditions.
3. Send start/stop notices on time.
4. Register reinstatements.
5. Respond to FPNs and inspections.

**Pain:**
CPOs are new to a regime that utilities have run for years. Timing errors cost an FPN per breach.

**Existing solutions:**
Symology (Insight/Aurora), Depotnet (utilities job management with Street Manager API), Re-flow and Cogna (compliance), the free Street Manager web UI, and civils subcontractors with their own systems.

**The gap:**
Lightweight deadline and evidence management for organisations with tens to hundreds of works a year, not utility-scale.

**Possible product:**
A Street Manager API companion: permit-condition checklist per authority, notice deadline alarms, photo evidence capture, and FPN register and dispute log.

**MVP:**
Read permits via the Street Manager API, compute deadlines, send alerts, and keep an FPN log.

**Pricing hypothesis:**
£200–600 per month per CPO (estimate).

**How to find first customers:**
- Zapmap / OZEV lists of public chargepoint operators.
- Local EV Infrastructure (LEVI) fund award lists.
- ChargeUK members.

**Risks:**
Few buyers (tens), installs often subcontracted to firms already on Symology or Depotnet, and API access terms unverified.

**Kill condition:**
CPOs mostly outsource permitting to civils contractors.

**Score:** 4/10

**Sources:**
- https://www.gov.uk/government/publications/street-works-permits-for-electric-vehicle-charge-point-operators/street-works-permits-for-electric-vehicle-charge-point-operators
- https://www.depotnet.co.uk/blog-ev-charge-point-street-works-dft-guidance/
- https://static.hauc-uk.org.uk/downloads/HAUCEngland-Changes-to-Street-Works-Legislation-from-5-January-2026.pdf
- https://www.dorsetcouncil.gov.uk/w/electric-vehicle-charge-point-operators-street-works-in-dorset
- https://depotnet.co.uk

## Rejected after competitor research

- **Nursery funded-hours headcount to 152 LA portals:** killed by Funding Loop (portal automation, 2,000+ nurseries, £2.50 per child per term), plus nursery management systems with LA exports.
- **Awaab's Law phase 2 hazard case management:** Plentific, Made Tech Hazard Case Management, Weightmans compliance tool, CHPS (Salesforce), Netcall.
- **Residential PEEPs (April 2026):** RiskBase Engage, Brocade, Shine Compliance.
- **Homecare council invoicing and ECM exports:** CareLineLive, Birdie, Access Group, OneAdvanced Care Invoicing.
- **pEPR packaging data:** compliance schemes (Valpak, Ecosurety, ERP UK) and the free government packaging-data-file generator.
- **DWT phase 1 for receiving sites:** about 25 Defra-listed vendors, including Access Weighsoft, Waste Logics, VWS, weighzIO and Wastebolt.
- **Companies House software-only filing:** TinyTax (free for micro-entities), TaxCalc, IRIS, Sage. Annual only.
- **Cattle movement reporting (LIS):** free statutory service; existing farm software integrates.
- **BTOM / IPAFFS for SPS importers:** the UK–EU SPS agreement (expected mid-2027) removes routine EU→GB checks.
- **Making Tax Digital, sponsor licence compliance, UK CBAM, PRS database:** see first-pass reasons in the table above.

## Attractive problem, poor distribution

- **Building Safety Act golden thread for subcontractors:** real Gateway 2 rejections, but subcontractors are sold to through main contractors. Source: https://www.pbctoday.co.uk/news/digital-construction-news/construction-software-news/the-golden-thread-applies-to-every-trade-are-subcontractors-ready/165134/
- **Procurement Act 2023 notices for small contracting authorities (e.g. academy trusts):** a real notice burden, but low frequency and a public-sector buyer. Source: https://www.localgovernmentlawyer.co.uk/procurement-and-contracts/308-procurement-features/62330-payment-requirements-under-the-procurement-act-2023
- **Scottish funeral directors (Code of Practice, inspections):** small buyer pool and licensing not yet introduced. Source: https://www.gov.scot/publications/inspector-burial-cremation-funeral-directors-2025-26-annual-report/pages/6/

## Too competitive

- Making Tax Digital; sponsor licence compliance; UK CBAM; DWT for receiving sites; pEPR; Awaab's Law; residential PEEPs; homecare invoicing; Companies House filing software; F-gas logbooks.

## Limitations

- The search budget did not stretch to pharmacy (NHS service claims), private hire licensing (260+ licensing authorities), security (SIA) or freight/Windsor Framework.
- Market sizes for skip-hire and scaffolding firms are not verified.
- The DoLS submission capabilities of Person Centred Software and Nourish are unverified and should be checked first.

## Pass history

- **First pass (2026-10-04, 8 searches):** DWT phase 2 bridge scored 5/10; most sectors unscreened.
- **Deep pass (2026-10-05, 49 searches):**
  - **New industries screened:** nurseries, vets, vape duty, funeral (Scotland), social housing, fire/PEEPs, homecare, care homes/DoLS, SPS imports, pest control, F-gas, Martyn's Law, dental labs, cattle, street works, DRS, Companies House, procurement, skip/scaffold licences.
  - **Corrections:** confirmed the DWT dates and the open Receipt of Waste API. Found free carrier-side tools (LoadLog, AnyWaste) and the carrier/broker/dealer permit reform (SI 2026/873, 22 July 2027). The DWT lead drops to 4/10.
  - **Added opportunities:** Highway Licence Router (6), DoLS router (6), CMA vets sync (5), VPD duty account (5), EV CPO street works companion (4).
  - **New rejections:** nursery funding (Funding Loop), Awaab's Law, PEEPs, homecare, pEPR, SPS/IPAFFS.
