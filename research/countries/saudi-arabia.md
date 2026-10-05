# Saudi Arabia (research date 2026-10-05, deep pass)

Depth: 8 searches in the first pass plus about 54 in this deep pass (English and Arabic). WebFetch is blocked, so everything here comes from search-result snippets. Anything marked "unverified" or "estimate" was not confirmed against a primary source.

## Accessibility check
Saudi Arabia is not sanctioned and its internet is open, so a foreign solo founder can sell software there. The practical frictions are:
- Arabic/RTL UI is mandatory.
- B2B buyers expect local payment rails (mada, SADAD, bank transfer) and a VAT-compliant invoice, which in practice means a Saudi entity or reseller (unverified in detail).
- PDPL data-residency expectations apply.
- Most government platforms (Qiwa, Mudad, Balady, Salamah, Ejar, FASAH) have no public developer API. Ejar, for example, publishes no developer portal, and API access has to be requested from NHC key accounts (https://noqta.tn/en/blog/ejar-integration-property-management-saudi-2026).

Products therefore have to be "prepare and track" layers, not direct submitters, unless the vendor gets partner status. Go-to-market depends on relationships, and an Arabic-speaking partner or reseller is strongly advised.

## Industries screened
| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Fire-safety contractors | Salamah maintenance contracts, periodic visit reports, safety-certificate renewals | **Candidate (best)** | Many small approved companies; contracts are registered on Salamah and a report follows every visit; only generic FSM tools found |
| Environmental consultancies / industrial facilities | NCEC monthly/quarterly/semi-annual environmental reports | **Candidate** | New NCEC reporting platform; reports must be prepared by licensed consultancies; no local tool found |
| Engineering offices | Saudi Building Code stage-supervision reports on Balady / Amanah portals | **Candidate** | About 2,800 licensed offices; MOMAH cites late and inaccurate supervision reports; tools are generic (PlanRadar) |
| HR / PRO offices | Qiwa ↔ Mudad ↔ GOSI reconciliation, Nitaqat | Candidate (downgraded) | Pain is real after 15 Apr 2026, but Jisr already ships a Nitaqat dashboard and ERPNext Qiwa connectors exist |
| Waste haulers | MWAN trips/manifests | Rejected | MWAN national E-Manifest already has GPS tracking and digital manifests |
| Customs brokers | FASAH declarations | Rejected | Clearcust middleware and an Odoo FASAH adapter already exist |
| Trucking | TGA Naql transport document, Wasl telematics, reclassification (deadline now 27 Feb 2027) | Too competitive | TMS/telematics vendors (Shiprex, Omniful and others) advertise TGA/Wasl integration |
| Pharmacies | SFDA RSD track-and-trace reporting | Rejected | Local pharmacy POS (e.g. RIV ERP) bundles RSD + ZATCA; chains build in-house |
| Clinics | NPHIES claims / denials | Too competitive | Waseel, InstaHMS, MocDoc and Medinous are NPHIES-certified RCM/HIS vendors |
| Hotels / holiday homes | Shomoos + NTMP guest reporting | Too competitive | PMS vendors (Hotelogix, Nazeel) are certified |
| Property / owners' associations | Ejar contracts and payments; Mullak OA governance | Rejected / poor access | Ejar has no public API and rent is paid only via Ejar; Qoyod Masakin covers OA finance |
| Medical-device distributors | SFDA UDI (Saudi-DI) submissions | Too competitive / poor distribution | Bulk templates exist; consultancies (Freyr, Reed Tech, Unifusion) serve foreign manufacturers |
| Food establishments | Balady worker health certificates | Rejected | Annual renewal on Balady itself; generic expiry tracking |
| Government vendors | LCGPA local-content certificate | Rejected | Valid 19 months (infrequent); done by consultants |
| Fuel stations | Ministry of Energy station requalification | Rejected | Hardware-heavy; the correction period has ended |
| Accounting / e-invoicing | ZATCA Fatoora Phase 2 | Too competitive | Wafeq, Qoyod, Zoho Books and Daftra are all certified |

## Opportunities

### Opportunity: Salamah Maintenance-Contract and Visit-Report Manager for Fire-Safety Contractors

**Industry:**
Fire protection installation and maintenance (Civil Defense-approved safety companies)

**Buyer:**
Owner or operations manager of a small or mid-size Civil Defense-approved safety company (5–50 technicians) that services restaurants, shops, warehouses, schools and clinics on annual maintenance contracts.

**Trigger / Why now:**
- Salamah (salama.998.gov.sa, built by Elm) is now the single channel for safety licensing. Maintenance contracts are activated online from the approved company's Salamah account.
- A valid maintenance contract and periodic system report are required to issue or renew the Civil Defense licence.
- Municipal licences (Balady) and, since 3 Apr 2026, the Unified Commercial Register link to a valid Salamah certificate. A lapsed contract therefore blocks the customer's business licence.

**Current workflow:**
1. Sell an annual contract to a facility. Register or activate the contract on Salamah under the company's approved account.
2. Schedule semi-annual, quarterly or monthly visits depending on the facility. Technicians check extinguishers, alarms, pumps and sprinklers on paper or WhatsApp photos.
3. The office types a technical report after each visit, in Arabic, often on a Word template.
4. Track contract and certificate expiry for hundreds of clients in Excel, chase renewals, and issue installation certificates or technical reports for Balady licence renewals.
5. Issue a ZATCA e-invoice separately.

**Pain:**
- Contracts and reports are prerequisites for the customer's licence, so missed renewals cost the customer their licence and cost the contractor recurring revenue.
- Contractor websites advertise "issuing a contract instantly", "uploading transactions online" and "a technical report after every visit". The core service is this paperwork, which shows how manual it is.
- Exact volume per company and time spent are unverified.

**Existing solutions:**
- Salamah itself, which handles the government side only.
- Generic or foreign field-service tools: Planado, Praxedo, Protecnus (Asolvi), FieldCircle (no Arabic), and Odoo field-service partners in KSA.
- Accounting tools (Qoyod, Wafeq) for invoices.
- A Saudi software house (geexar.com) lists a "fire and safety equipment maintenance program". Whether it is a product or custom development is unverified.
- No Salamah-aware vertical SaaS was found.

**The gap:**
- An Arabic visit checklist per system type that produces the report format the customer and Civil Defense expect.
- A contract register mirroring Salamah status, with renewal alerts tied to each client's Balady/CR licence dates.
- Batch preparation of Salamah contract and report data, which is currently re-keyed by hand.
- Integrated ZATCA invoicing per visit or contract.

**Possible product:**
A mobile-first Arabic app. Technicians complete per-device checklists with photos. The office gets a client and contract register with Salamah status, auto-generated bilingual visit reports and certificates, renewal pipeline alerts, and an invoice push to a ZATCA-certified accounting tool.

**MVP:**
- Client and contract register with expiry alerts.
- Offline technician checklist (extinguishers, alarm panel, pumps).
- PDF report in Arabic.
- Export of fields needed for the Salamah contract entry.
- No Salamah integration; the user still pastes into the portal.

**Pricing hypothesis:**
SAR 300–900/month per company, by technician seats (estimate). An alternative is SAR 5–10 per completed visit report.

**How to find first customers:**
- Salamah's approved-contractor directory (it exists per sources; public accessibility unverified).
- Haraj and OpenSooq listings of "civil defense safety works".
- Google Maps "شركة سلامة" in Riyadh, Jeddah and Dammam.
- Chamber of Commerce directories.
- Many firms have their own SEO sites (guardest.com, safety-level.com, salamahforsafety.com, teqaniksa.com), which suggests a few hundred reachable firms (estimate).

**Risks:**
- Salamah or Elm adds contractor-side visit logging and reporting.
- Small firms may stay on WhatsApp and Word.
- No API.
- Odoo partners could build a vertical module.

**Kill condition:**
Salamah already requires per-visit report upload in a fixed in-portal form (which would make the app pure double entry), or interviews show fewer than 100 contracts per typical firm.

**Score:** 6/10

**Sources:**
- https://www.bocsmart.com/en/article/salamah-compliance-overview
- https://sffeco.com/saudi-civil-defense-salamah-approval/
- https://www.elm.sa/ar/our-business/digital-products/Documents/En/Salamah%20EN.pdf
- https://noblecoreksa.com/?p=641
- https://teqaniksa.com/blog/%D8%B9%D9%82%D8%AF-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D8%AF%D9%81%D8%A7%D8%B9-%D8%A7%D9%84%D9%85%D8%AF%D9%86%D9%8A-%D9%85%D8%B9%D8%AA%D9%85%D8%AF-%D8%B3%D9%84%D8%A7%D9%85%D8%A9/a-1440992691
- https://wiqayah-safety.com/services/maintenance-contracts/
- https://geexar.com/ar/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D9%85%D8%B9%D8%AF%D8%A7%D8%AA-%D8%A7%D9%84%D8%A5%D8%B7%D9%81%D8%A7%D8%A1-%D9%88%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%D8%A9/
- https://www.fieldpromax.com/?p=29541

### Opportunity: NCEC Periodic Environmental Report Builder for Licensed Environmental Consultancies

**Industry:**
Environmental consulting and monitoring (serving factories, construction projects, waste and industrial facilities)

**Buyer:**
Report manager at an NCEC-licensed environmental consultancy or monitoring provider that prepares periodic reports for many client facilities. A secondary buyer is the EHS officer at a mid-size factory.

**Trigger / Why now:**
- NCEC launched a platform obliging establishments with environmental impact to submit monthly, quarterly or semi-annual reports, by classification. The reports cover emissions, waste and resource use.
- Reports must be prepared by a licensed consultancy, and monitoring must be done by a licensed monitoring provider.
- Consultants describe an operational "environmental record" that feeds an annual compliance report.
- Royal Commission RCER-2025 (in force 1 Jul 2025, full enforcement 1 Jan 2027, per a consultant summary) tightens monitoring in Jubail and Yanbu.

**Current workflow:**
1. A monitoring lab samples stack, ambient, effluent and noise data and returns lab certificates (PDF/Excel).
2. The consultant collects waste quantities (MWAN manifests), fuel and water use, and incident logs from the client by email.
3. The consultant compares results against permit limits, writes the report, and the client or consultant enters it on the NCEC portal.
4. The consultant tracks permit conditions, deadlines and corrective actions in spreadsheets.

**Pain:**
- Reporting frequency is monthly to semi-annual, per client, against permit-specific limits.
- NCEC reviews self-reports and follows up violations.
- The volume of rework and the rejection rate are unverified.

**Existing solutions:**
- Enterprise EHS suites (Intelex, Enablon, Cority; not Saudi-specific and expensive).
- CEMS/DAHS vendors for large stacks.
- Consultancies themselves (Environmental Horizons, Albuad, Aecon, Sustainable Resources Office), working in Excel and Word.
- No local SaaS for NCEC report preparation was found.

**The gap:**
A multi-client workspace that does the following:
- ingests lab certificates and client data;
- checks each value against the specific permit's limits;
- tracks each facility's reporting calendar by classification;
- outputs the NCEC report structure and the annual compliance report from the same environmental record.

**Possible product:**
"One environmental record, every NCEC report." A per-facility data register with permit limits, lab-result import, exceedance flags, deadline calendar, and Arabic/English report templates.

**MVP:**
- Facility and permit-limit register.
- Excel/CSV lab-result import with exceedance check.
- Deadline calendar.
- Auto-drafted periodic report (DOCX/PDF) in the NCEC section order.

**Pricing hypothesis:**
SAR 1,500–4,000/month per consultancy (multi-client), or SAR 300–600/month per facility (estimate).

**How to find first customers:**
- NCEC licensed-provider listings (a full public list is unverified).
- Consultancies advertising NCEC services (albuad.sa, aecon-sa.com, sustainableresourcesoffice.sa, enmksa.com, nineti.co).
- Saudi Environmental Society events.
- LinkedIn.
- The number of licensed consultancies is unknown; a few hundred is an estimate.

**Risks:**
- The NCEC portal's report structure is unknown (WebFetch blocked) and may already be a structured form, which would reduce the value of document generation.
- Large clients use enterprise EHS.
- The buyer pool may be small.

**Kill condition:**
The NCEC platform turns out to be a simple structured web form, so consultancies spend under 2 hours per report, or the top consultancies already use an EHS suite.

**Score:** 5/10

**Sources:**
- https://saudigazette.com.sa/article/634905
- https://www.ncec.gov.sa/ar/eServices/EservicesDirectory/Pages/Eservice028.aspx
- https://albuad.sa/en/periodic-environmental-record/
- https://www.aecon-sa.com/news/environmental-permit-saudi-arabia-ncec-guide
- https://ozoneco.sa/ncec-compliance/rcer-2025-regulations
- https://thehseverse.com/resource_library/saudi-environmental-compliance-ncec/

### Opportunity: Stage-Supervision Report Pack for Engineering Offices (Saudi Building Code / Balady)

**Industry:**
Engineering consulting offices (building design and supervision)

**Buyer:**
Owner or supervising engineer at a small or mid-size licensed engineering office doing residential and commercial supervision.

**Trigger / Why now:**
- Under the Saudi Building Code, the supervising office must upload supervision reports to Balady (or the Riyadh Amanah e-services) in step with construction stages, plus a final report and Civil Defense safety report.
- Supervision is mandatory above 50 m².
- Mandatory inherent-defects insurance (IDI, led by Tawuniya) adds third-party technical inspections at foundations, structure, insulation and finishing. SGS joined the IDI programme in June 2026.
- MOMAH ran a requalification of engineering firms on Balady Business from Feb to Jul 2025.

**Current workflow:**
1. The engineer visits the site and takes photos and notes.
2. Back at the office, the engineer writes a stage report and uploads it per licence. In Riyadh this is a separate Amanah flow: select licence, search by number and year, start technical report. Elsewhere it is Balady.
3. The engineer sends a separate progress report to the owner and coordinates with the IDI inspection agency and the contractor.
4. The office tracks which licences are due for which stage report across dozens of sites.

**Pain:**
- Ministry-cited common violations include "supervision reports that do not match reality" and "failure to submit reports and construction phases on their scheduled times".
- Both are compliance failures that a geotagged, timestamped capture tool addresses.

**Existing solutions:**
- Balady and Amanah portals.
- Generic construction QA tools (PlanRadar, used by large contractors in KSA; Fieldwire).
- Office ERP or custom tools.
- No vertical "Balady supervision" product was found.

**The gap:**
- Per-licence stage tracking across Balady and Riyadh Amanah.
- Site capture structured to SBC stage checklists.
- One capture producing three outputs: the portal report, the owner report and the IDI/TIS evidence.

**Possible product:**
- A mobile site-visit app with SBC stage checklists.
- A per-licence stage tracker with due alerts.
- Auto-generated Arabic stage reports formatted for Balady upload, plus owner-facing PDFs.

**MVP:**
Licence register, stage checklist capture with geotagged photos, and an Arabic PDF report, for residential villas only.

**Pricing hypothesis:**
SAR 200–600/month per office, or SAR 50–100 per supervised licence (estimate).

**How to find first customers:**
- Saudi Council of Engineers office registry (about 2,800 licensed offices at end-2024, per Al-Eqtisadiah).
- Balady-qualified engineering office listings.
- Offices advertising "مكتب هندسي بلدي".

**Risks:**
- Balady could add its own mobile inspector app.
- Small offices may tolerate manual work.
- Low price tolerance among villa supervisors.
- The portal upload format is unverified.

**Kill condition:**
Balady already provides an in-app field report with photos and geotagging for supervisors, or typical offices supervise fewer than 10 active licences.

**Score:** 5/10

**Sources:**
- https://www.alriyadh.gov.sa/ar/services/6?mainServiceCode=67
- https://x.com/Momah_SA/status/1404066132752060419
- https://www.argaam.com/ar/article/articledetail/id/1281516
- https://momah.gov.sa/en/node/14928
- https://amlak.net.sa/en/104874/
- https://sa.aqar.fm/blog/en/construction-and-contracting/saudi-building-code-2026-definition-scope-and-key-requirements
- https://www.sgs.com/en-om/news/2026/06/sgs-joins-tawuniyas-idi-program-with-independent-technical-inspection-services-in-saudi-arabia
- https://www.aleqt.com/2025/03/25/article_2758998.html

### Opportunity: Qiwa–Mudad–GOSI Mismatch Reconciler for Multi-Client PRO and Accounting Offices

**Industry:**
Outsourced HR/PRO services and accounting offices serving SMEs

**Buyer:**
Owner of a PRO/government-relations office or accounting firm handling 20–200 small establishments; secondarily, an SME HR manager without an HRIS.

**Trigger / Why now:**
- From 15 Apr 2026, only Saudis with Qiwa-authenticated contracts count toward Nitaqat. Documentation thresholds are 85% by 30 Apr and 90% by 30 Jun 2026.
- The new Nitaqat cycle removed the Yellow band.
- Profession-level quotas (dentists, engineers, marketing) can trigger a violation even when the overall rate is Green.
- Enterprise AM (Jun 2026) reports companies getting violation notices for compliant employees because of data mismatches across Qiwa, Mudad and GOSI.

**Current workflow:**
1. Export or screenshot Qiwa contract lists, Mudad WPS results and GOSI registrations per client.
2. Compare job titles, salaries and contract dates in Excel.
3. Fix mismatches in each portal and simulate hires for profession quotas.

**Pain:**
Red band blocks visas and work-permit renewals. Mismatches across the chain produce violation notices.

**Existing solutions:**
- Jisr (native GOSI, Mudad and Muqeem integration; live Nitaqat dashboard with alerts).
- ERPNext Qiwa/Muqeem sync apps (ecosire).
- ZenHR, Bayzat, greytHR, Menaitech.
- Qiwa's own Nitaqat calculator.
- Compliance consultancies (Saudi Compliance Institute).

**The gap:**
A multi-client view for offices whose SME clients have no HRIS: cross-portal diff plus a profession-quota simulator. Single-company HRIS tools do not target this buyer.

**Possible product:**
Upload per-client exports and get a mismatch list, band forecast and profession-quota alerts across the whole client book.

**MVP:**
Excel import of the three exports, diff rules and a client dashboard.

**Pricing hypothesis:**
SAR 1,000–3,000/month per office (estimate).

**How to find first customers:**
- PRO/مكتب خدمات عامة listings.
- Chamber of Commerce directories.
- Accounting-firm directories (SOCPA).

**Risks:**
- Jisr, ZenHR or Qiwa extend into this.
- Without an API, the tool relies on exports, which may be awkward.
- Rules change often.

**Kill condition:**
Qiwa offers a downloadable cross-check report, or PRO offices say clients will not pay for it.

**Score:** 4/10 (down from 5: Jisr already ships a Nitaqat dashboard and alerts)

**Sources:**
- https://enterpriseam.com/ksa/issues/nitaqat-reforms-expose-workforce-data-problem/
- https://www.jobbatical.com/blog/saudi-arabia-qiwa-electronic-contracts-nitaqat-compliance
- https://noqta.tn/blog/qiwa-integration-hr-systems-saudi-nitaqat-2026
- https://ecosire.com/apps/erpnext/erpnext-ksa-qiwa-muqeem-sync
- https://www.clydeco.com/en/insights/2026/02/the-first-saudisation-updates-of-2026-key-changes
- https://www.middleeastbriefing.com/news/saudi-arabias-nitaqat-2026-update-latest-quotas-by-sector-and-what-foreign-employers-need-to-comply-now/

## Rejected after competitor research
- **Waste transporter trip/manifest compliance:** the MWAN national E-Manifest (WSIS Prize 2025) already does GPS tracking and digital manifests across generators, transporters and receiving facilities, and MWAN is tendering a further national digital platform (https://www.itu.int/net4/wsis/stocktaking/Prizes/Prizes/Details/17392145995070312, https://www.sustainabilitymea.com/saudi-arabia-launches-digital-waste-platform-eoi-targeting-90-landfill-diversion-by-2040/). This was scored 4/10 in the first pass and is now rejected.
- **FASAH declaration prep for small brokers:** Clearcust offers a customs middleware API for brokers, and an Odoo module ships a FASAH JSON adapter for 7 declaration types (https://www.clearcust.com/en/logistics-operators/saruh/saudi-arabia/riyadh/customs-brokers/all, https://apps.odoo.com/apps/modules/18.0/eh_log_l10n_sa_customs). This was scored 4/10 in the first pass and is now rejected.
- **Pharmacy RSD drug-movement reporting:** SFDA fined 17 establishments SAR 1.57m in May–Jul 2026, so the pain is real. But local pharmacy POS such as RIV ERP bundles RSD and ZATCA, and the chains run in-house systems (https://gulfnews.com/world/gulf/saudi/saudi-arabia-fines-10-pharmacies-sr17-million-over-drug-tracking-violations-1.500407741, https://haraj.com.sa/en/11186829281/RIV_ERP_Pharmacies_SoftwareExpiry_Tracking_Cashier_and_Inv/).
- **Owners'-association management:** Mullak (REGA) handles governance, voting, invoices and enforcement bonds, and Qoyod Masakin handles OA finance (https://www.qoyod.com/en/masakin/, https://www.zawya.com/en/business/real-estate/saudi-real-estate-owners-associations-post-185-growth-in-first-half-of-2025-f7he3yns).
- **ZATCA Fatoora Phase 2:** Wafeq, Qoyod, Zoho Books and Daftra are all certified.
- **Balady worker health certificates:** annual and self-service on Balady; generic expiry tracking (https://balady.gov.sa/ar/services/%D8%AA%D8%AC%D8%AF%D9%8A%D8%AF-%D8%B4%D9%87%D8%A7%D8%AF%D8%A9-%D8%B5%D8%AD%D9%8A%D8%A9).
- **Fuel-station requalification:** hardware and capex-driven, and the correction period has ended (https://saudiauto.com.sa/en/saudi-fuel-reopening-conditions/).
- **LCGPA local-content certificate:** valid 19 months, so it is infrequent, and it is done by consultants (https://www.setupinsaudi.com/en/news/announcements/what-foreign-investors-should-know-about-saudi-local-content-rules).

## Attractive problem, poor distribution
- **Property managers and Ejar:** rent must now be paid only through Ejar, and every lease runs through it. There is no public API and access goes through NHC key accounts, so a small vendor cannot integrate (https://amlak.net.sa/en/61363/, https://noqta.tn/en/blog/ejar-integration-property-management-saudi-2026).
- **SFDA food product and facility registration for foreign exporters:** the buyers are foreign, the work is per-case, and SGS and consultants serve it (https://www.sgs.com/en-gb/news/2025/09/pca-2025-q3-streamlining-food-export-compliance-procedures-for-saudi-arabia).
- **SFDA medical-device UDI (Saudi-DI):** Class II deadline Jan 2026, submitted only via Saudi authorised representatives. Bulk templates (150 UDIs per file) already exist, and Freyr, Reed Tech and Unifusion serve manufacturers (https://www.reedtech.com/knowledge-center/saudi-arabia-sfda/, https://unifusion-bsc.com/en/udi-submission/).

## Too competitive
- ZATCA e-invoicing: https://www.wafeq.com/en-sa/business-hub/for-business/top-zatca-approved-accounting-software-for-smbs-in-saudi-arabia
- NPHIES claims/RCM for clinics: Waseel, InstaHMS, MocDoc and Medinous are certified. Market rejection rates are estimated at 15–25%, but crowded (https://noqta.tn/en/blog/nphies-integration-claim-denials-saudi-2026, https://waseel.com/wrcm/, https://mocdoc.com/nphies-integration).
- Hotel Shomoos/NTMP reporting: Hotelogix and Nazeel are certified (https://www.hospitalitynet.org/news/4127703.html).
- Trucking TGA/Wasl compliance: TMS and telematics vendors (Shiprex, Omniful) integrate it. The reclassification deadline was extended to 27 Feb 2027 (https://www.shiprexnow.com/blog/how-to-automate-wasl-tga-integration-saudi-3pl/, https://www.gccbusinessnews.com/saudi-tga-extend-road-transport-compliance/, https://spa.gov.sa/en/N2551489).

## Pass history
- **First pass (2026-10-04, 8 searches):** three opportunities: Nitaqat/Qiwa monitor 5/10, MWAN waste-hauler compliance 4/10, FASAH broker prep 4/10.
- **Deep pass (2026-10-05, about 54 searches including Arabic):**
  - Screened fire safety (Salamah), NCEC environmental reporting, engineering supervision, pharmacies (RSD), clinics (NPHIES), trucking (TGA/Naql/Wasl), hotels (Shomoos/NTMP), property (Ejar/Mullak), medical-device UDI, food health certificates, local content and fuel stations.
  - Added three new opportunities: fire-safety Salamah contract and visit manager 6/10, NCEC report builder 5/10, engineering supervision reports 5/10.
  - Downgraded the Nitaqat idea to 4/10 and refocused it on multi-client PRO offices, after confirming that Jisr ships a Nitaqat dashboard and that ERPNext Qiwa connectors exist.
  - Rejected the waste-hauler idea (MWAN E-Manifest already national, with GPS) and the FASAH idea (Clearcust, Odoo FASAH adapter).
  - The first pass rejected fire safety for lack of evidence. That is corrected: Salamah contract registration and per-visit reports are confirmed by multiple contractor sources, although the exact Salamah upload mechanics remain unverified.
