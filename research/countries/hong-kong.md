# Hong Kong: indie opportunity research

Method note: 15 web searches in English and Traditional Chinese. WebFetch was not used, so the claims below rest on search snippets from official sources (gov.hk, LegCo, C&ED, SWD) and law-firm guides. Anything not tied to a source is marked estimate or unverified. Hong Kong is open to a foreign solo founder: no sanctions on selling commercial software to private Hong Kong businesses, normal card and bank payment rails, and an open internet. Check US export-control and sanctions screening for any customer that is a government entity. The market has two problems. It is small (about 7.5M people), and government tends to fund or build free tools (TSW web portal, eHealth sponsorship). Most new 2025-2026 HR and payroll triggers have already been absorbed by a crowded local payroll-software market.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Freight forwarders / traders / cross-boundary trucking | Trade Single Window (TSW) Phase 3: one platform for ACI, cargo manifests, import/export declarations (TDEC), CO, DCP; replaces GETS and the ROCARS, air and sea cargo systems | Candidate (medium) | Strongest why-now: road ACI moved 1 May 2026; air ACI, air and road manifests and TDEC (all modes) in mid-2027; sea, rail and ferry manifests, CO and DCP in H2 2027. Incumbents: Tradelink and other GETS providers, CargoWise, free TSW portal |
| Property management / owners' corporations | Building Management (Amendment) Ordinance 2024 (in force 13 Jul 2025): procurement, tender and declaration-of-interest rules, with "essential requirements" that can make a contract void | Candidate (weak-medium) | Mandatory and per-procurement, with criminal and civil exposure; but buyers are concentrated in PMCs, and free ICAC/HAD templates exist |
| Construction subcontractors | Construction Industry Security of Payment Ordinance (Cap 652) in full force 28 Aug 2025: payment-claim and response timelines, adjudication | Candidate (weak) | Real statutory clock, but zero adjudications by Jun 2026, so little proven pain so far; QS/legal firms handle it |
| Residential care homes (elderly / disabled) | RCH Legislation Amendment: registered home manager mandatory from 16 Jun 2026; HCP registration regs gazetted Jun 2026; enhanced staffing from 16 Jun 2028; staff lists and records to SWD | Candidate (weak) | Real phased trigger, but small population (estimate under 1,000 homes) and partly served by care-home software |
| Employers / payroll bureaus | "468" continuous-contract rule (18 Jan 2026); MPF offsetting abolition (1 May 2025) split SP/LSP calculation | Too competitive | Many local HR/payroll vendors (e.g. Info-Tech and others) shipped updates and publish 468 guides; generic payroll |
| Private clinics | eHealth (Amendment) 2025: mandatory deposit of specified health data, scope set by subsidiary legislation | Reject | Government co-funds CMS/eMR vendors (eHealth+ Connectivity Support Scheme, HK$500 per doctor per month, Oct 2025-Mar 2026); incumbents absorb it |
| Others (waste PRS, food import, TCSP/estate-agent AML) | Not researched in depth | Unverified | Search budget; MSW charging deferred indefinitely in 2024 (from memory, unverified here) |

## Opportunities

### Opportunity: TSW Phase 3 "one shipment, every declaration" router for small forwarders and traders

**Industry:**
Freight forwarding, NVOCC, air-freight consolidators, SME import/export traders, cross-boundary trucking

**Buyer:**
Operations / documentation manager at a small forwarder (5-50 staff) that is not on CargoWise. Owner of an SME trader that currently files TDEC through a GETS provider or by hand.

**Trigger / Why now:**
TSW Phase 3 replaces GETS and C&ED's ROCARS, air cargo and sea cargo systems. Batch 1 (road ACI) went live 1 May 2026. Batch 2 (mid-2027) covers air ACI, air and road cargo manifests, and TDEC for all transport modes. Batch 3 (H2 2027) covers sea, rail and ferry manifests, CO and DCP. The Import and Export (Amendment) Ordinance 2025 sets up a regulatory framework for "value-added service providers" (VASPs) that submit on traders' behalf. Every filer has to re-onboard within roughly 18 months.

**Current workflow:**
1. Shipment data sits in the forwarder's own system, Excel, carrier booking emails and the shipper's commercial invoice and packing list.
2. Staff re-key it into a GETS provider's front end (TDEC), into ROCARS/TSW (road ACI) and into the carrier or airline systems (manifests), and separately apply for a CO.
3. Amendments and late TDECs (statutory 14-day window, from memory, unverified) are handled by hand. Penalties apply for late or incorrect declarations.

**Pain:**
Several submissions with different formats for one consignment. A forced system migration with new accounts, new formats and a new VASP regime. C&ED had to station extra staff at land control points to help truck drivers on cut-over day, which points to friction for small operators.

**Existing solutions:**
Tradelink (incumbent GETS provider for 30 years, also runs the TSW call centre). Other GETS providers (names unverified). The free TSW web portal (manual entry). CargoWise and other forwarder TMS with HK customs modules (for larger forwarders). Customs-declaration agents doing it manually.

**The gap:**
A cheap tool for small filers that turns one shipment record (or invoice/packing-list upload) into TSW-ready ACI, manifest and TDEC payloads. It would validate HS codes and data against TSW rules before submission and keep amendments and deadlines in one queue. Tradelink is likely to move to TSW as a VASP. The open question is whether it serves the long tail well and cheaply.

**Possible product:**
A shipment workspace that holds the data once and generates every TSW Phase 3 document. Version one prepares bulk-upload files. Version two submits as a registered VASP or through a VASP partner.

**MVP:**
TDEC preparation for SME traders. Upload an invoice or packing list, map lines to HS codes, check the data against TSW rules, then export a TSW bulk file or fill the portal. Add a reminder for late-declaration deadlines.

**Pricing hypothesis:**
HK$300-1,500/month per company, or HK$5-15 per declaration (estimate; compare to GETS per-transaction fees, unverified).

**How to find first customers:**
HAFFA (HK Association of Freight Forwarding and Logistics) member directory, the HK Shippers' Council and FHKI (which publishes TSW notices), and the Cross-Boundary truck associations. TID/C&ED TSW briefing seminars draw the affected crowd.

**Risks:**
VASP registration requirements are unknown and may need local incorporation, security audit or bonding. Tradelink and the other GETS incumbents will migrate their customers. The free portal may be good enough for low-volume filers. TSW API specs may only go to registered VASPs.

**Kill condition:**
VASP requirements are out of reach for a solo founder and the bulk-upload route is not offered. Or incumbents carry existing customers over at the same price with no friction.

**Score:** 6/10

**Sources:**
- https://www.info.gov.hk/gia/general/202605/01/P2026050100156.htm
- https://www.customs.gov.hk/en/customs-announcement/press-release/index_id_5259.html
- https://www.legco.gov.hk/yr2024/chinese/panels/ci/papers/ci20241217cb2-1671-1-c.pdf
- https://www.info.gov.hk/gia/general/202507/11/P2025071100260.htm
- https://www.cedb.gov.hk/en/policies/trade-single-window.html
- https://www.customs.gov.hk/en/service-enforcement-information/trade-facilitation/single-window/index.html
- https://www.tradelink.com.hk/en/news/tradelink-awarded-contract-operate-call-center-services-for-trade-single-window-tsw/
- https://www.industryhk.org/en/info/industry-news/trade-single-window/

### Opportunity: BMO procurement compliance file for property management companies

**Industry:**
Property management / building management

**Buyer:**
Property manager or assistant property manager at a licensed property management company (PMC) that serves owners' corporations (OCs) of older multi-owner buildings. Secondary buyer: OC chairpersons and treasurers in self-managed buildings.

**Trigger / Why now:**
The Building Management (Amendment) Ordinance 2024 took effect 13 July 2025. It adds procurement rules for management committees, declaration-of-interest measures and large-scale maintenance voting thresholds (more than HK$30,000 per flat; at least 5% of owners or 100 owners voting in person). Some rules are "essential requirements": breaching them can make the contract void or voidable, and MC members and managers face civil or criminal liability. This follows the bid-rigging problems in building rehabilitation.

**Current workflow:**
1. The PMC drafts tender documents from Word templates and the HAD Code of Practice.
2. It collects bids by post or email, logs bid opening, and gathers declarations of interest from MC members on paper.
3. It prepares the general-meeting notice and resolution, counts votes against the thresholds, and keeps minutes and files for inspection or dispute.

**Pain:**
Many procurements per building per year (cleaning, security, lifts, repairs, insurance). Procedural mistakes now void contracts and create personal liability. The evidence trail is spread across paper and email.

**Existing solutions:**
HAD and ICAC free guides and templates (Building Management Toolkit; product names unverified). URA Smart Tender (building-rehabilitation tendering only). PMC in-house systems and generic property-management software (names unverified). Surveyors and lawyers.

**The gap:**
No dedicated tool found (unverified) that walks each procurement through the amended BMO checklist, records declarations and vote counts, and produces a ready audit pack.

**Possible product:**
A procurement wizard tied to each building's OC. It picks the threshold path, generates notices, collects e-declarations, records sealed-bid opening, counts quorum and votes, and exports a compliance file.

**MVP:**
Bilingual (Chinese/English) checklist and document generator for one procurement type (service contracts above threshold), plus a declaration-of-interest e-signature form.

**Pricing hypothesis:**
HK$200-500 per building per month for PMCs, or HK$1,000-3,000 per procurement for self-managed OCs (estimate).

**How to find first customers:**
PMSA public licence register of PMCs and property management practitioners. The HK Association of Property Management Companies membership list. HAD's OC lists by district.

**Risks:**
Chinese-language legal content needs local legal review. Large PMCs build this themselves. Buyers are conservative and sensitive to fees passed on to owners.

**Kill condition:**
Interviews with 10 PMCs show the free HAD templates plus in-house Excel are considered enough, or large PMCs already have it in their property management systems.

**Score:** 5/10

**Sources:**
- https://conventuslaw.com/report/hong-kong-legislative-reform-on-building-management-and-its-implications
- https://www.info.gov.hk/gia/general/202407/04/P2024070400245p.htm
- https://legco.gov.hk/yr2024/english/ord/2024ord020-e.pdf
- https://www.isd.gov.hk/eng/tvapi/25_hb232.html

### Opportunity: SOPO payment-claim clock for construction subcontractors

**Industry:**
Construction subcontractors and suppliers

**Buyer:**
Commercial manager or QS at a small or mid-size subcontractor on contracts covered by Cap 652.

**Trigger / Why now:**
The Construction Industry Security of Payment Ordinance is in full force for contracts made on or after 28 Aug 2025. It covers construction main contracts of HK$5M or more and supply contracts of HK$500K or more, and every subcontract down the chain when the main contract qualifies. Payment claims, responses and adjudication run to statutory deadlines, and missing a deadline loses rights.

**Current workflow:**
1. Monthly interim claims go out as Excel or PDF by email.
2. Staff track the payer's response deadline by hand, if at all.
3. When payment is missed, they call a lawyer or QS to start adjudication or suspend works.

**Pain:**
Late payment is a long-standing problem in Hong Kong construction. However, no adjudications had been started by June 2026, so the new tool is not yet widely used and the pain has not shown up as demand.

**Existing solutions:**
QS consultancies and law firms. Construction ERP and claim tools (Payapps-type products from Australia; Hong Kong presence unverified). Excel.

**The gap:**
A cheap tracker that marks each claim as SOPO-compliant and counts the statutory deadlines, for subcontractors without legal staff.

**Possible product:**
A claim register that creates SOPO-compliant payment claims, starts a deadline clock for each one and generates notice templates (suspension, adjudication start).

**MVP:**
A web form that builds a compliant payment claim and sends email alerts for response and adjudication deadlines.

**Pricing hypothesis:**
HK$300-800/month per company (estimate).

**How to find first customers:**
CIC Subcontractor Registration Scheme register, the HK Construction Sub-Contractors Association, and trade-union subcontractor lists.

**Risks:**
Low adoption so far. Lawyers may treat it as legal advice. Episodic usage.

**Kill condition:**
Adjudication volumes stay near zero through 2027, or subcontractors say main contractors' pay-when-paid practice is unaffected.

**Score:** 4/10

**Sources:**
- https://www.info.gov.hk/gia/general/202606/24/P2026062400502p.htm
- https://www.ashurst.com/en/insights/hong-kong-construction-sector-security-of-payment-regime-coming-into-full-effect
- https://cms.law/en/hkg/legal-updates/hong-kong-security-of-payment-legislation-comes-into-force

### Opportunity: Residential care home staffing and registration compliance tracker

**Industry:**
Residential care homes for the elderly (RCHE) and for persons with disabilities (RCHD)

**Buyer:**
Operator or home manager of a private RCHE (single-home or small-chain operators).

**Trigger / Why now:**
The RCH Legislation (Miscellaneous Amendments) Ordinance 2023 is being phased in:
- 16 Jun 2025: certificate-of-exemption regime abolished.
- 16 Jun 2026: a registered home manager is mandatory.
- Jun 2026: regulations gazetted bringing registered health and care practitioners into staffing requirements; SWD also issued new "specific hours" application forms.
- 16 Jun 2028: enhanced minimum staffing for high-care homes.

**Current workflow:**
1. Home managers build shift rosters in Excel.
2. They check by hand that staffing meets the statutory ratio by shift and that staff registrations are valid.
3. They submit staff lists and changes to SWD on forms and keep records for inspections.

**Pain:**
Offences exist for failing to submit staff lists and keep records. Sector staffing is tight, so ratio breaches are likely during shortages. Inspection-driven.

**Existing solutions:**
Care-home management software from local vendors (names unverified). Generic rostering tools. SWD forms.

**The gap:**
A roster checker that flags shifts falling below the legal ratio, tracks registration expiry and fills the SWD staff list (unverified whether existing software does this).

**Possible product:**
Upload a roster, get statutory-ratio checks by shift, track registration expiry and generate the SWD staff list.

**MVP:**
Excel-roster import with ratio rules for one home category.

**Pricing hypothesis:**
HK$500-1,500/month per home (estimate).

**How to find first customers:**
SWD public lists of licensed RCHEs and RCHDs (elderlyinfo.swd.gov.hk / rchdinfo.swd.gov.hk) and private elderly-home operator associations.

**Risks:**
Small total market. Low-margin operators. Possible government-funded gerontech subsidies for incumbent vendors.

**Kill condition:**
The main care-home software vendors already do statutory staffing checks.

**Score:** 4/10

**Sources:**
- https://www.swd.gov.hk/en/pubsvc/lr/lr_info/ordinance/dates/
- https://www.news.gov.hk/eng/2026/06/20260605/20260605_153618_988.html
- https://oln-law.com/new-residential-care-homes-legislation-hong-kong/
- https://rchdinfo.swd.gov.hk/en/licensing_introduction.html

## Rejected after competitor research

- **eHealth mandatory data deposit for private clinics.** Rejected because the government sponsors CMS/eMR vendors directly (eHealth Adoption Sponsorship Pilot Scheme, then the eHealth+ Connectivity Support Scheme at HK$500 per doctor per month), so incumbents absorb the upload work. The scope of the mandate still waits on subsidiary legislation. Sources: https://www.info.gov.hk/gia/general/202503/19/P2025031900179p.htm, https://www.news.gov.hk/eng/2025/10/20251013/20251013_190307_973.html
- **Road ACI tool for cross-boundary truckers (TSW Batch 1).** Already cut over on 1 May 2026, with accounts migrated automatically from ROCARS. The free TSW portal and existing providers serve it, so the window has passed. It is folded into opportunity 1.

## Too competitive

- **468 continuous-contract tracking and MPF offsetting split calculation.** Real 2025-2026 triggers affecting every employer, but Hong Kong payroll/HR vendors (e.g. Info-Tech, which already blogs on the 468 rule) and EOR and payroll bureaus updated quickly. This is generic payroll. Sources: https://www.info-tech.com.hk/blog/?p=2214, https://www.china-briefing.com/news/hong-kong-employment-compliance-2026-whats-new/, https://china-briefing.com/news/how-to-prepare-for-mpf-offsetting-abolition-hong-kong

## Attractive problem, poor distribution

- **Self-managed OCs (no PMC).** BMO procurement liability falls on volunteer MC members. The pain is high, but buyers are fragmented, unpaid volunteers who are hard to reach and slow to pay. Reach them only through PMCs or district HAD channels.
