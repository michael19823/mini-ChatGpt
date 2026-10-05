# Ireland - research report (deep pass, 2026-10-05)

Scope note: about 53 WebSearch calls (no page fetches, since WebFetch is blocked), so detail is at search-snippet level. Anything not confirmed by a source is marked "unverified" or "estimate". Ireland is a high-income, English-speaking EU market with good digital services and an active local SaaS scene (several Irish-built vertical tools turned up in this pass). Most regulated workflows already have a free government portal and one or more vendors.

Accessibility: no sanctions, licensing or payment barriers. A foreign solo founder can sell freely (EUR, SEPA, GDPR applies).

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Residential letting / letting agents | RTB registration, RPZ rent caps (nationwide since Jun 2025, new rules from 1 Mar 2026) | Reject (killed) | TenantSync (Irish, EUR 20-199/month) already automates RTB deadlines, RPZ calculations and Form 1 drafts. Rentalize also covers RTB/RPZ |
| Short-term letting | Fáilte Ireland STL register (opened 20 May 2026, mandatory by 31 Dec 2026, annual renewal) | Reject | Annual, per-unit and mostly one-off. Platforms must enforce the number. Managers (e.g. Houst) absorb it |
| Home support / home care | New Home Support Providers Act 2026 (HIQA registration), HSE invoicing | Too competitive | Act signed 1 Jul 2026 but not commenced. Access Group has an HCCI partnership with member discounts. Unique IQ markets HIQA readiness |
| Veterinary / licensed merchants | National Veterinary Prescription System (NVPS, mandatory Dec 2025) | Reject | Free DAFM app plus an API. Irish practice software (Herbst Software, VetDrive) integrates in the background |
| Payroll bureaus | Auto-enrolment (My Future Fund, live 1 Jan 2026) | Reject | BrightPay handles AEPNs, opt-outs and refunds. Sage, Thesaurus and others also support it |
| Employers / expenses | Revenue Enhanced Reporting Requirements (ERR, since 2024) | Too competitive | ExpenseIn, expense.ie, Capture Expense and Sage already file ERR in Revenue's JSON format or via its API |
| All VAT-registered SMEs | B2B e-invoicing (2028-2030) | Too competitive / too early | Basware, Comarch, Banqup, Sage |
| HR / employers 50+ | EU Pay Transparency Directive | Too early / competitive | Ireland missed the 7 Jun 2026 transposition date. Main duties unlikely before 2027. Many HR vendors (e.g. HRduo) |
| Insurance / mortgage brokers | Revised Consumer Protection Code (in force 24 Mar 2026) | Too competitive | Applied Systems and other broker-management systems (EUR 150-400/user/month) plus compliance consultancies |
| Construction | BCAR ancillary certificate collation; CIRI going mandatory in 2026 | Too competitive / weak | i3PT, BCR Comply and ComplyScope. CIRI is an annual registration run by CIF, phased from large housing builders |
| Construction (tax) | RCT payment notifications | Reject | Mature since 2012. Revenue web services are used by existing payroll/accounting packages |
| Childcare / childminders | Pobal Hive, NCS/ECCE returns; childminder Tusla registration (transition to Sep 2027) | Too competitive / poor WTP | Cheqdin and CrecheHQ cover NCS/ECCE. About 13,000 childminders have very thin margins |
| Solar PV installers | Per-job SEAI Declaration of Works, ESB Networks NC6, Safe Electric cert, grant evidence | **Opportunity (weak)** | 34k grant-aided installs in 2025. Sales and design tools exist, but the post-sale compliance pack is not clearly covered |
| Pesticide professional users | EU Reg 2023/564 electronic spray records (paper allowed in 2026, electronic from 1 Jan 2027) | **Opportunity (weak)** | Farmers are served (Herdwatch, Teagasc/Gatekeeper, AgriNet). Amenity, landscaping and contract sprayers are less clearly served |
| Fish buyers (first sale) | EU Reg 2023/2842: e-sales notes within 24/48h for all buyers, e-transport documents (from 10 Jan 2026) | **Opportunity (niche)** | New obligation for small buyers (fish shops, restaurants buying off boats). Only the free FishingNet portal found |
| Waste hauliers / desludgers | NWCPO annual return, hazardous WTFs, desludging records | Reject (downgraded) | Waste Logics serves owner-operated skip hire in Ireland. AMCS (Irish) serves enterprise. No new 2026 trigger |
| Customs / import agents | AIS/AES, ICS2, CBAM (definitive since 1 Jan 2026) | Too competitive | iCustoms, Descartes Thyme and MIC-CUST for AIS. A 50-tonne CBAM threshold exempts most SMEs |
| Agri-food exporters | EUDR for cattle/beef (30 Dec 2026, SMEs Jun 2027) | Reject for indie | Leather removed from scope in Jul 2026. Beef depends on national AIM movement data. A DAFM/processor-level solution is likely, plus osapiens and Coolset |
| Agricultural advisors | ACRES scorecards, BISS/TAMS on agfood.ie | Reject | State systems (AgriSnap, agfood.ie). ACRES ends 2027 and the next CAP is uncertain |
| Pharmacies | Common Conditions Service (pharmacist prescribing, regs signed Nov 2025) | Reject (unverified) | Claims will flow through existing pharmacy PMR vendors. Not dug into |
| Security companies | PSA licensing (1,383 licensed contractors), new PSA 80:2025 standard | Too competitive | Guardhouse, SecurityTime, SoftPatrol and MANAGR already track licences. They are UK/SIA-first but easy to adapt |
| Haulage | Smart tachograph v2 for LCVs (1 Jul 2026), posting declarations | Too competitive | Tachograph analysis vendors are well established (not individually verified this pass) |
| Funeral directors | Death registration | Reject | No statutory licensing in Ireland. The 2024 Civil Registration (Electronic Registration) Act moves death notification to an electronic process led by the state |
| Charitable lotteries / clubs | Gambling Regulation Act 2024 charitable licence | Watch only | Charitable licence not expected to open in 2026 (2027-2028) |
| Group water schemes / small private supplies | Registration and monitoring | Poor distribution | Irish Times (Jul 2026) reports unregistered, untested supplies. Market is small and run by volunteers |

## Opportunities

### Opportunity: Post-sale compliance pack for domestic solar PV installers

**Industry:**
Solar PV / microgeneration installation

**Buyer:**
Owner or office/admin manager at an SEAI-registered solar PV company doing 100-2,000 domestic installs a year.

**Trigger / Why now:**
The market is at record volume: 33,048 SEAI Solar PV grants in 2025 (+16% on 2024), and the EUR 1,800 grant was kept for 2026 when a planned cut was reversed. Every job needs the same set of state paperwork. The NC6 notification must reach ESB Networks at least 20 working days before install, and starting work early can cost grant eligibility and export-payment registration. Standalone SEAI portals keep being added (e.g. the window/door grant portal opened 2 Mar 2026).

**Current workflow:**
1. Sales and design are done in a proposal tool (SurgePV, OpenSolar, Voltflo, Sunbase) or a spreadsheet.
2. Admin submits the NC6 (or NC7) to ESB Networks online with MPRN, system specs and the inverter EN 50549-1 type-test certificate, then tracks the date.
3. After install, the Safe Electric registered electrician issues a completion certificate in the Safe Electric system.
4. Installer completes the SEAI Declaration of Works, ITC and test records, and collects photos.
5. Homeowner (often helped by the installer) uploads the invoice, Safe Electric cert, DoW, NC6 confirmation and photos to SEAI. The installer chases missing items so that the grant pays out (4-6 weeks).

**Pain:**
The same job data (MPRN, address, panel and inverter specs, kWp, dates) is re-keyed into three external systems plus the customer pack. Deadline errors (NC6 timing, the 8-month grant window) have money consequences. One vendor guide calls this "paperwork with deadlines that are solved by a system that remembers what stage each job is at". Direct installer complaints were not found (unverified).

**Existing solutions:**
SurgePV (proposals with SEAI grant bands and NC6/NC7 thresholds, USD 1,299-1,899/user/year), OpenSolar (free design/proposals), Voltflo (Ireland-targeted sales CRM), Sunbase (markets to Irish installers), Pylon, plus generic CRMs (HubSpot, Monday) and admin staff with spreadsheets.

**The gap:**
The tools found cover the front end (lead, design, proposal). None of them clearly owns the post-sale state-compliance pipeline: pre-filled NC6 data, the Safe Electric cert, the DoW and the photo checklist, per-job deadline tracking, and a complete grant-evidence pack sent to the homeowner. Unverified: whether Voltflo or Sunbase already do this, and whether ESB Networks or SEAI offer any API (probably not; likely browser forms).

**Possible product:**
A "job-to-paperwork" tracker. One job record produces the NC6 data sheet, the DoW/handover document set and a homeowner grant-claim pack, with a stage board and deadline alerts. It plugs into the installer's existing CRM by CSV or webhook.

**MVP:**
Job import (CSV/Zapier), a per-job checklist with NC6 and 8-month grant-window countdowns, generated PDFs (customer handover pack, photo evidence sheet, pre-filled NC6 data), and a homeowner upload link. No portal automation at first.

**Pricing hypothesis:**
EUR 5-10 per completed job, or EUR 79-199/month per installer.

**How to find first customers:**
SEAI's public "Solar PV companies" register (about 40+ result pages, so roughly 400+ companies; estimate) and SEAI's Non-Domestic Microgen registered installers list. Also the Irish Solar Energy Association (unverified membership list).

**Risks:**
A CRM vendor (Voltflo, Sunbase, SurgePV) adds this module. SEAI/ESB portal changes. A grant cut or market slowdown. Many installers are small and admin is done by the owner's family. Ireland-only, so there are a few hundred buyers at most.

**Kill condition:**
Five installer interviews show that admin takes under 30 minutes a job, or that a CRM they already use covers NC6/DoW/Safe Electric tracking.

**Score:** 4/10

**Sources:**
- https://www.solarpowerportal.co.uk/residential-solar/record-year-for-home-solar-pv-systems-in-ireland-in-2025-with-over-34-000-grants-awarded
- https://www.farmersjournal.ie/more/renewables/continuation-of-seai-s-1-800-grants-for-rooftop-solar-into-2026-welcomed-894151
- https://www.surgepv.com/solar-compliance/ireland/guides/seai-grants
- https://www.esbnetworks.ie/help-centre/generator-connections/connect-a-micro-generator
- https://www.heavengreenenergy.com/blog/best-solar-proposal-software-ireland
- https://quickestimate.co/best-solar-crm/ireland
- https://www.g2.com/products/voltflo/discuss
- https://seai.ie/find-grants-and-contractors/find-contractors/solar-pv-companies
- https://seai.ie/grants/business-grants/commercial-solar-pv/registered-installers

### Opportunity: Electronic spray records for contract sprayers and amenity users (EU Reg 2023/564)

**Industry:**
Pesticide application: agricultural spraying contractors, landscapers and amenity contractors, golf/sports turf, forestry contractors

**Buyer:**
Owner of a spraying or landscaping contractor business, or a head greenkeeper / grounds manager.

**Trigger / Why now:**
Commission Implementing Regulation (EU) 2023/564 sets new record content from 1 Jan 2026: product, MAPP/PCS number, date/time, dose, area, crop, location, EPPO crop codes and BBCH growth stages. Records must be in electronic, machine-readable form from 1 Jan 2027 (deferral allowed by Reg 2025/2203), and paper records must be transferred within 30 days. Contractors must give clients a copy or access to their records "without undue delay". Ireland has 38,097 registered professional users.

**Current workflow:**
1. Operator sprays and writes a paper record, or uses a DAFM/PCS record sheet.
2. Office later types it into a spreadsheet, or doesn't.
3. For contract work, copies are posted or emailed to each farmer or client for their own inspection file.
4. At a DAFM inspection, the operator shows the professional user number, the sprayer test certificate and the records.

**Pain:**
The electronic format becomes mandatory on a fixed date. EPPO/BBCH coding is unfamiliar to non-farm users, and contractors must produce per-client copies. No complaint evidence was found (unverified). Penalties exist but enforcement intensity is unknown.

**Existing solutions:**
For farms: Herdwatch (Irish, spray records included), Teagasc with Farmplan Gatekeeper Express+, AgriNet HerdApp. For turf: Syngenta GreenCast Turf App. EU-wide: Farmable (co-op focus). Free DAFM record sheets. Whether DAFM will offer a free online record tool for 2027 is unverified. That is the biggest risk.

**The gap:**
A tool built for the contractor (one spray job covers many client fields and produces a compliant record for each client automatically) and for non-agricultural users (amenity, landscaping, local-authority contracts) with EPPO/BBCH codes picked for them. The farm apps are built around the farmer as owner of the record.

**Possible product:**
A mobile job log for contract sprayers that pulls the product list from the PCS register, auto-codes EPPO/BBCH, and emails each client a machine-readable record and PDF. It runs as an EU-wide engine with country product registers, with Ireland and Northern Ireland as the first markets.

**MVP:**
Mobile form with a PCS product lookup, field/site list per client, generated per-client PDF and CSV, and a yearly export for inspection.

**Pricing hypothesis:**
EUR 15-40/month per contractor. Golf clubs EUR 20/month.

**How to find first customers:**
DAFM/PCS professional user and registered advisor/distributor registers (pcs.agriculture.gov.ie, whether lists are public is unverified). The Agricultural Contractors of Ireland association, the Golf Course Superintendents Association of Ireland and landscaping associations (memberships unverified).

**Risks:**
Low willingness to pay, a likely free DAFM tool, Herdwatch extending to contractors, and seasonal use. Ireland alone is too small, so the case depends on an EU-wide rollout with country product databases.

**Kill condition:**
DAFM announces a free electronic record facility, or Herdwatch/Gatekeeper already provide contractor multi-client records.

**Score:** 4/10

**Sources:**
- https://eur-lex.europa.eu/eli/reg_impl/2023/564/oj
- https://www.daera-ni.gov.uk/news/grace-period-transition-mandatory-digital-record-keeping-plant-protection-products
- https://www.daera-ni.gov.uk/articles/new-requirements-plant-protection-product-ppp-record-keeping-professional-users
- https://agriland.ie/farming-news/cork-has-highest-number-of-professional-pesticide-users
- https://www.pcs.agriculture.gov.ie/sud/sudreg/
- https://herdwatch.com/en-ie/solutions/farm-management-software/
- https://farmable.tech/digital-pesticide-record-keeping-for-eu-cooperatives-achieve-compliance-with-farmable-enterprise/
- https://www.cmaeurope.org/?p=3486

### Opportunity: E-sales note and transport document helper for small fish buyers

**Industry:**
Fisheries: first-sale buyers (small processors, fish shops, restaurants, co-ops buying direct from vessels)

**Buyer:**
Owner or manager of a small registered fish buyer.

**Trigger / Why now:**
The amended EU Fisheries Control Regulation (EU) 2023/2842 applies from 10 Jan 2026. Every registered buyer, whatever their turnover, must now submit electronic sales notes: within 24h if first-sale turnover is EUR 200k or more, within 48h if below. Transport documents must also be submitted electronically before transport starts, and traceability rules are stricter. Small buyers who used to be exempt or used paper now have a per-purchase digital obligation. The SFPA has published new FINs on sales notes.

**Current workflow:**
1. Buy fish at the quay. Weights, species and prices go on a paper docket or into a till system.
2. Log into FishingNet (DAFM) and key each sales note manually within 24/48h.
3. Key the transport document before the van leaves.
4. Keep traceability lot data for downstream customers separately.

**Pain:**
Per-transaction re-keying with short deadlines, by people without office staff. The evidence is the rule change itself. No complaint data was found (unverified).

**Existing solutions:**
Free FishingNet portal (state). Fish auction/ERP systems used by large processors (names not verified for Ireland). Fishing vessels use the SFPA's ieCatch logbook.

**The gap:**
A mobile capture flow that records the purchase once and produces the sales note, transport document and lot label for customers. Whether FishingNet accepts third-party XML/API submissions is unverified and is critical.

**Possible product:**
A phone app for "buy, label, submit" that turns one purchase record into the regulatory notes and a buyer-facing traceability label. The engine would be EU-wide, since every member state applies the same regulation through a different national system.

**MVP:**
A capture form plus a pre-filled copy-paste or browser-assisted FishingNet entry, deadline alerts, and lot labels.

**Pricing hypothesis:**
EUR 20-50/month.

**How to find first customers:**
Registered buyers register held by SFPA/DAFM (public availability unverified), BIM direct-sales guidance contacts, and fishery harbour centres.

**Risks:**
Small Irish market (registered buyer count unknown; estimate a few hundred). No API means fragile automation. The state could improve FishingNet.

**Kill condition:**
FishingNet offers no machine submission and small buyers report the portal takes under 5 minutes per note.

**Score:** 3/10

**Sources:**
- https://www.sfpa.ie/Who-We-Are/News/Details/sfpa-issues-guidance-on-new-eu-fisheries-control-rules-effective-january-2026
- https://thefishingdaily.com/seafood-business-news/sfpa-issues-information-notice-on-sales-notes/
- https://www.sfpa.ie/What-We-Do/Sea-Fisheries-Information/Fish-Buyers
- http://www.fishingnet.ie/
- https://afloat.ie/port-news/fishing/sfpa/item/69821-new-eu-fisheries-control-regulations-from-january-10th-2026-published-by-sfpa

## Rejected after competitor research

- **RPZ/RTB compliance desk for letting agents** (scored 4/10 in the first pass). Killed by TenantSync, an Irish product (EUR 20/month for 10 properties up to EUR 199/month for 200) that automates RTB registration deadlines, RPZ rent-cap calculation, Form 1 drafts and bank rent reconciliation. Rentalize also knows RTB/RPZ rules. Sources: https://www.capterra.ie/software/1079790/TenantSync , https://www.getapp.ie/software/2102032/rentalize
- **Waste hauler permit-return assistant** (scored 3/10 in the first pass). Waste Logics serves owner-operated skip hire across the UK and Ireland, and AMCS (Irish) serves larger operators. No new 2026 trigger, and there is no digital waste-tracking mandate in Ireland. Source: https://www.capterra.ie/software/135137/waste-logics
- **NVPS veterinary prescriptions**: there is a free DAFM app plus an API, and Herbst Software and VetDrive integrate it. Sources: https://www.herbstsoftware.com/national-veterinary-prescription-system/ , https://vetdrive.co/
- **Auto-enrolment**: BrightPay handles AEPNs, opt-outs and refunds. Source: https://www.brightpay.ie/docs/bpol/auto-enrolment-in-brightpay/processing-auto-enrolment-in-brightpay/
- **ERR expense reporting**: ExpenseIn, expense.ie and Capture Expense already cover it. Sources: https://www.expensein.com/err-revenue-reporting , https://www.expense.ie/
- **Home support HIQA readiness**: Access Group (HCCI partner) and Unique IQ already cover it. Sources: https://www.theaccessgroup.com/en-ie/about/news/the-access-group-strikes-agreement-with-home-community-care-ireland-hcci-to-support-irelands-home-care-sector/ , https://www.uniqueiq.co.uk/?p=4783
- **Customs declarations**: iCustoms, Descartes Thyme and MIC-CUST. Source: https://www.icustoms.ai/blogs/top-5-customs-declarations-software-in-ireland/
- **Childcare NCS/ECCE**: Cheqdin and CrecheHQ. Source: https://cheqdin.com/childcare-software-for-ncs-and-ecce-compliance-reporting-in-ireland
- **Cattle registration / EUDR beef**: national AIM/ICBF data plus EU-wide EUDR vendors (osapiens, Coolset). Leather was removed from EUDR scope on 13 Jul 2026.

## Attractive problem, poor distribution

- **Childminders' Tusla registration and NCS admin** (about 13,000 childminders, transition to Sep 2027): very low willingness to pay, and many are leaving the sector. Source: https://www.earlychildhoodireland.ie/wp-content/uploads/2026/01/Explainers_ActionPlanChildminding_2026.pdf
- **Group water schemes and small private supplies**: there is a compliance gap (Irish Times, 30 Jul 2026), but the schemes are volunteer-run and few. Source: https://www.irishtimes.com/environment/2026/07/30/gap-in-law-allows-drinking-water-supplies-to-be-unregistered-and-untested/
- **Charitable/club lottery licensing** under the Gambling Regulation Act 2024: thousands of clubs, but the licence will not open before 2027-2028 and club lotto platforms will absorb it. Source: https://www.con-telegraph.ie/2026/08/20/what-the-new-gambling-law-means-for-your-club-lottery/

## Too competitive

- **BCAR ancillary certificate collation**: i3PT (large contractors), BCR Comply and ComplyScope. The NBCO has flagged collation quality problems, but vendors are present. Sources: https://complyscope.ie/ , https://www.bcrcomply.com/ , https://nbco.nbco.localgov.ie/sites/default/files/4567776/2025-10/Presentation%203%2020250923%20Dermot%20Mullally%20collation%20of%20Ancillary%20Certificates.pdf
- **Consumer Protection Code 2025 for brokers**: Applied Systems and other broker-management systems, plus compliance consultants. Source: https://www1.appliedsystems.com/en-ie/blog/posts/compliance-confidence-irish-brokers/
- **PSA security licensing**: Guardhouse, SecurityTime, SoftPatrol and MANAGR. Source: https://www.irishlegal.com/articles/compliance-activity-by-the-private-security-authority-reaches-all-time-high-in-2025
- **B2B e-invoicing (2028-2030)**: Basware, Comarch, Banqup and Sage. Source: https://www.matheson.com/insights/mandatory-einvoicing-and-real-time-reporting-coming-to-ireland/
- **Pay transparency**: transposition missed. Main duties are unlikely before 2027, and HR vendors are already marketing. Source: https://leglobal.law/2026/04/21/ireland-update-on-the-eu-pay-transparency-directive-2023-970-transposition-in-ireland-and-what-employers-can-expect/

## Overall view

Ireland still has no strong standalone opportunity. The market is small (5.3m people) and Irish-built vertical tools move quickly. TenantSync, Herbst/VetDrive and Herdwatch each closed a gap that looked open. The best leads are **EU-wide regulations with per-transaction record duties** (pesticide records under Reg 2023/564, fish sales notes under Reg 2023/2842). For those, Ireland and Northern Ireland are an English-language test market for a multi-country product, not the whole business. The solar compliance pack is the most Ireland-specific lead and is worth 5 installer interviews before any build.

## Pass history

- First pass (2026-10-04): about 10 searches. Two opportunities: RPZ/RTB letting-agent desk (4/10) and waste hauler returns (3/10).
- Deep pass (2026-10-05, this report): about 53 searches. Both earlier opportunities were rejected after competitor checks: RPZ by TenantSync and Rentalize, waste by Waste Logics and AMCS. Screened about 20 more industries: STL register, home support, NVPS, ERR, pay transparency, CPC brokers, BCAR/CIRI, RCT, childminders, solar PV, pesticides, fisheries, customs/CBAM, EUDR, agri advisors, pharmacy, security, haulage, funeral, lotteries and group water schemes. Added three new weak-to-niche opportunities: solar compliance pack (4/10), contractor/amenity spray records (4/10) and fish-buyer e-sales notes (3/10). Verified auto-enrolment and e-invoicing competitors.
