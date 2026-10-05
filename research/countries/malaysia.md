# Malaysia - Opportunity research (deep pass, 2026-10-05)

**Research limits:** this deep pass ran about 45 WebSearch calls, in English and Bahasa Malaysia. WebFetch is blocked, so every finding comes from search-result snippets. Facts marked "unverified" or "estimate" need checking in customer interviews.

**Accessibility:** Malaysia is open to a foreign solo founder. There are no sanctions issues, the internet is open, and MYR payments work through cards and FPX. Foreign digital-service providers selling to Malaysian consumers face SST registration (unverified for B2B in this pass). The main practical barrier is that most government portals (eSWIS, MyKKP, MyTax, SPKA, FoSIM) have no public API, so products must sit beside the portals rather than integrate with them.

**Headline:** the strongest Malaysian pattern is in **factory EHS compliance**. Two regulatory resets have hit manufacturers:
- the DOE's eSWIS v2 (mandatory from April 2025) plus the 2024 Environmental Quality Act amendment, which raised maximum penalties to RM10M;
- DOSH's post-June-2024 OSHA regime: the Factories and Machinery Act was repealed, a 15-month Certificate of Fitness regime started, the Special Scheme of Inspection Regulations 2025 took effect, and an Industry Code of Practice for Plant Management Systems was published in January 2026.

Both resets hit the same EHS officer at the same factory, and no dedicated local SaaS was found for either. The evidence is still thin on how willing small factories are to pay. E-invoicing, payroll, halal, panel claims, pest control, fleet, ESG and strata are all crowded or have been defused.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Scheduled-waste generators (factories, workshops) | eSWIS v2 notification, daily inventory, consignment notes (CN), 180-day storage limit | **Opportunity (5/10)** | eSWIS v2 has been the only channel since 2025-04-01 and paper CNs are gone. EQA amendment 2024 penalties go up to RM10M. About 25,700 regulated premises. No dedicated SaaS found, only the portal, trainers and consultants. |
| Factories with boilers, pressure vessels, cranes | Certificate of Fitness (CF) renewals; Special Scheme of Inspection (SSI) Class B Plant Management System | **Opportunity (5/10)** | FMA was repealed 2024-06-01. CF is valid for 15 months. SSI Regs 2025 and the Class B PMS ICOP (Jan 2026) are new. Buyer overlaps with eSWIS. |
| Fire-safety maintenance contractors | Service records for the annual BOMBA Fire Certificate renewal (Form III via SPKA) | Opportunity, weak (4/10) | Mandatory annual renewal needs maintenance and fire-drill records. No new trigger. No vertical SaaS found, but generic field-service apps exist. |
| Landlords, property managers, HR | Stamp-duty self-assessment on e-Duti Setem (MyTax) from 2026-01-01; penalty waiver ends 2026-12-31 | Weak opportunity (3/10) | Real why-now, but each filing is a per-instrument, annual-ish task. Rental platforms (SPEEDHOME) and stamping services (esetem.my) already serve it. |
| SME accounting / e-invoicing | MyInvois Phase 4 exceptions | **Rejected** | Exemption threshold was raised to RM1M (Jan 2026), then to RM3M (v4.8, from 2026-09-01), and Phase 5 was cancelled. The addressable segment collapsed. Mature vendors remain. |
| Payroll / HR statutory | EPF/SOCSO/EIS/PCB/HRDF; EPF for foreign workers; LINDUNG 24 Jam | Too competitive | Payroll vendors (Swingvy, PandaHRMS, Ramco, many others) absorb each change. |
| Foreign-worker management | FWCMS eQuota (mandatory from 2026-07-06); Multi-Tier Levy Mechanism (MTLM) in 2026 | Poor fit | Politically volatile (the Turap proposal was shelved in 2026). The workflow runs through Bestinet's FWCMS and licensed agencies. MTLM rates are not gazetted. |
| Private GP clinics | Multi-TPA panel claims (PMCare Mediline within 3 days, MiCare, etc.); receivables reconciliation | Too competitive | Real pain: PMCare reported RM41M of receivables 31–120 days past due. But kumoDoc, OptimizeCare, MedicalMet and ClaimHub ("know what every panel owes you") already target it. |
| Private clinics / pharmacies | Medicine price display order (from 2025-05-01) | Rejected | High Court stayed enforcement in May 2026. Clinic systems and printed lists cover it. |
| Pharmacies | Psychotropic prescription register (Poisons Regs 1989) | Not pursued | No new trigger found. Pharmacy POS systems keep the register. |
| Halal food manufacturers | MYeHALAL renewal (fully digital since 2025-05-05); supplier halal-cert expiry tracking under MHMS 2020 | Too competitive | Taqyid, HIAS, MyHalalGig/HOLISTICS Lab and Teambench already sell halal assurance SaaS. |
| Pest control operators | Form F report to customer per treatment (Pesticide (PCO) Rules 2004) | Too competitive | M4 (Datum, local), efacility.my, Rentokil PestConnect and global apps (PestPac). No new trigger. |
| Trucking (goods vehicles) | APAD A-permit, ICOP GPS, new de-controlled vehicle rules for ≤7.5T from 2026-04-01 | Too competitive | The 2026 rule is a clarification and relaxation, not a new burden. GPS/fleet vendors (SafeTruck, Radius, many trackers) market ICOP compliance. |
| Freight forwarders / customs agents | SMK K1/K2 via Dagang Net; uCustoms migration; FoSIM food-import notification after the customs declaration | Not now | uCustoms rollout is stalled and unclear. The SMK→FoSIM→MAQIS re-entry is real, but no pain evidence or buyer count was found. Worth a watch. |
| Palm oil / rubber / timber exporters | MSPO 2.0, EUDR (large operators 2026-12-30, SMEs 2027-06-30) | Poor distribution / too competitive | Government systems (e-MSPO, MSPO Trace, RRIM GeoRubber, RRIMniaga) plus Agridence, TraceX and many EUDR vendors. Smallholder buyers are fragmented. |
| Listed companies' SME suppliers | Scope 3 / ESG data requests under the NSRF | Rejected | Bursa's CSI platform (with LSEG) offers supplier engagement and calculators, with core modules free to PLCs. |
| Construction contractors | CIDB G1–G7 renewal (every 2 years), green cards, CCD points | Rejected | Renewal is biennial and agents (Mishu, RenewCIDB) already sell it as a service. |
| Strata management (JMB/MC) | Accounts, COB oversight | Too competitive | No 2026 trigger. Several strata apps exist (TimeTec and others). |
| Childcare (TASKA) | JKM registration (5-year validity) | Rejected | Renewal is infrequent. Childcare apps (illumine and others) exist. |
| Private security companies | KDN licence; Certified Security Guard (CSG) training quota for 2027 licence renewal | Weak | Real 2026 obligation, but it is a training-quota tracking task once a year. Guard-tour apps exist. |
| OSH consultants / factories | JKKP 6/7/8 accident reporting via MyKKP; CHRA (USECHH 2000); OSH coordinator (s.29A, from 2024-06-01) | Folded into the factory-compliance idea | JKKP 8 is annual (31 Jan). CHRA is a 5-yearly consultant job. Best sold as part of a factory compliance register, not on its own. |

## Opportunities

### Opportunity: eSWIS v2 scheduled-waste inventory, storage-clock and CN reconciliation tool

**Industry:**  
Manufacturing / workshops generating scheduled (hazardous) waste

**Buyer:**  
EHS executive, OSH coordinator or plant admin at a small or mid-size factory, workshop, electroplater, printer or lab registered as a waste generator. A secondary buyer is the environmental consultant who manages eSWIS for several clients.

**Trigger / Why now:**  
- eSWIS v2 went live on 2025-01-01. It became the only system from 2025-04-01, the old eSWIS is read-only, and paper consignment notes are no longer accepted.
- The Environmental Quality (Amendment) Act 2024 raised maximum penalties to RM10M and widened personal liability for directors.
- Generators must notify each new waste category within 30 days.
- Generators must keep an up-to-date inventory of generated, stored and disposed quantities, and observe the 180-day storage limit (and 20-tonne cap; the cap is unverified in this pass).

**Current workflow:**  
1. Production staff log waste generation on paper or in Excel: drums, bags, kg by SW code.
2. The EHS officer re-keys monthly or daily quantities into the eSWIS v2 inventory.
3. When the contractor comes, the EHS officer raises a consignment note in eSWIS v2 with SW code, quantity, transporter and receiver.
4. They then chase status. A CN still "submitted" after 30 days must be acted on by the generator, and a wrong SW code can lead to CN cancellation and enforcement.
5. Weighbridge tickets and contractor invoices are reconciled against eSWIS quantities by hand before DOE audits.

**Pain:**  
- Mandatory per-movement recording, with DOE monitoring through eSWIS.
- The v2 migration forced premises to carry over March 2025 inventory by hand.
- Training providers sell dedicated eSWIS v2 courses at RM450–500 per person, which shows the system is not self-explanatory.
- Industry guides (Foundation, Metahub, JT-Nam) all stress the RM10M exposure.
- No direct user complaints were found. Pain evidence is indirect.

**Existing solutions:**  
- eSWIS v2 itself (free, DOE).
- Trainers and consultants (CePSWaM / Greenvell training, EHS consultancies).
- Waste contractors' customer portals (Kualiti Alam/Cenviro has a customer login; its scope is unverified).
- Enterprise EHS suites used by multinationals (Enhesa, Intelex, Cority, Sphera; Malaysian eSWIS-specific features unverified).
- ERP inventory modules (no eSWIS link found).
- No dedicated Malaysian eSWIS companion SaaS was found in the English or Malay searches.

**The gap:**  
eSWIS v2 is a filing portal, not an operational tool. Several jobs are left to people:
- a shop-floor capture of drums and bags;
- a running per-category storage clock (180 days / 20 t);
- reminders when a new waste category triggers the 30-day notification;
- chasing CNs stuck in "submitted";
- three-way reconciliation of generator log vs CN quantity vs contractor weighbridge/invoice.

**Possible product:**  
A mobile and web "waste store" ledger. Staff scan or label each container at generation. The app keeps the storage clock and SW-code master, and produces copy-ready data for each eSWIS v2 CN (or browser-assisted form fill). After pickup it matches CN, weighbridge ticket and invoice, and flags differences before the DOE audit.

**MVP:**  
- Container ledger with SW codes and labels.
- 180-day / quantity alerts.
- CN checklist with status chasing.
- Monthly reconciliation report (PDF/Excel) to keep for audits.
- No portal integration in v1.

**Pricing hypothesis:**  
RM99–249 per site per month (estimate). Consultants pay RM49 per client site per month to manage portfolios.

**How to find first customers:**  
- DOE lists of licensed transporters and recovery facilities. Partnering with collectors who want to offer a "free compliance portal" to generators is the strongest channel.
- FMM and SME industrial-estate associations (Shah Alam, Penang, Johor).
- eSWIS v2 training cohorts and trainers such as CePSWaM, as resellers.
- EHS consultants.

**Risks:**  
- Without an eSWIS API, double entry stays: the product only moves the re-keying.
- Small generators may generate waste only a few times a year.
- Collectors may already do CN entry on the generator's behalf (unverified).
- DOE may add the missing features to eSWIS v2.

**Kill condition:**  
Interviews with 10 EHS officers show that eSWIS v2 already handles storage clocks and reconciliation well enough, or that collectors handle CNs. Or fewer than about 30% of generators move waste monthly.

**Score:** 5/10

**Sources:**  
- https://sites.google.com/doe.gov.my/faq-eswisv2/home (DOE eSWIS v2 FAQ: phase 1/2 transition, 30-day CN status rule)
- https://eswisv2.doe.gov.my/
- https://cepswam.com/eswis/ and https://cepswam.com/wp-content/uploads/2025/10/Brochure-ESWIS-V2-2025-vSEPTEMBER2025.pdf (paid eSWIS v2 courses, RM450–500)
- https://www.getfoundation.com.my/blog/scheduled-waste-management-malaysia-doe-eswis-factory-guide
- https://www.jt-nam.com/post/avoiding-rm10-million-penalty-doe-scheduled-waste-disposal
- https://metahub.com.my/scheduled-waste-management-malaysia-complete-guide/
- https://pardocs.sinarproject.org/documents/2020-november-december-parliamentary-session/oral-questions-soalan-lisan/2020-11-30-parliamentary-replies/20201130-p14m3p2-soalan-lisan-45.pdf (22,514 of 25,696 premises registered in eSWIS as of Oct 2020)
- https://www.kosmo.com.my/?p=22840 (343 licensed transporters, 406 licensed facilities)
- https://www.cenviro.com/scheduled-waste-management/

### Opportunity: Plant register and CF/SSI "Plant Management System" for factories under the new OSHA regime

**Industry:**  
Manufacturing, food processing, palm oil mills, rubber/glove plants, any premises with steam boilers, unfired pressure vessels (air receivers) or lifting machinery

**Buyer:**  
Plant or maintenance engineer, or EHS manager, at a mid-size factory with roughly 10–100 CF-registered plants. A secondary buyer is the third-party "licensed person" / authorised inspection body that now does inspections.

**Trigger / Why now:**  
- Act 835 repealed the Factories and Machinery Act on 2024-06-01 and moved CF matters under OSHA.
- The OSH (Plant Requiring Certificate of Fitness) Regulations 2024 set a 15-month CF that needs periodic inspection before expiry.
- The OSH (Licensed Person) Order 2024 brings private licensed persons (OBL) and an authorised inspection-body list (DOSH guide updated 2025-12-22) into inspections.
- The OSH (Special Scheme of Inspection) Regulations 2025 (P.U.(A) 25/2025, in force 2025-01-21) let occupiers apply for longer intervals.
- Class B covers all CF plants including lifting machinery. Occupiers must establish and maintain a Plant Management System following the ICOP published by DOSH in January 2026 (P.U.(B) 399/2025).
- SSI applications are due at least 6 months before CF expiry.

**Current workflow:**  
1. The plant list (PMD/PMT numbers, CF expiry dates) sits in Excel.
2. The engineer books a DOSH or licensed-person inspection before each CF expiry and prepares the plant (hydrotest, NDT, safety-valve servicing).
3. They apply and pay through MyKKP.
4. CF certificates and inspection reports are filed as PDFs.
5. For SSI Class B, the engineer would also have to write and keep up PMS procedures, records and categorisation of plants (older or newer than 36 months) under the ICOP.

**Pain:**  
- Operating plant with an expired CF is an offence.
- With many plants, staggered 15-month cycles are easy to miss.
- SSI promises fewer shutdowns, but only if the PMS evidence exists.
- No direct complaints were found. The evidence is the volume of new DOSH guidance (2025–2026 guides on periodic inspection, advanced-technique inspection (PSTT), lifting-machinery design verification, and a 2026 one-off competent-person guide for boiler installers).

**Existing solutions:**  
- Excel.
- Generic CMMS (MaintainX, UpKeep and Malaysian CMMS vendors; DOSH-specific features unverified).
- Enterprise RBI/integrity software used in oil & gas (unverified for Malaysia SMEs).
- Inspection bodies and consultants who prepare SSI applications by hand.
- MyKKP, which holds the applications but is not a plant-management tool.

**The gap:**  
No product was found that combines:
- the DOSH plant register (PMD numbers, CF dates, inspection types);
- automatic 15-month and 6-month SSI deadlines;
- licensed-person booking records;
- an ICOP-structured PMS evidence pack for Class B.

Generic CMMS do maintenance, not DOSH compliance packaging.

**Possible product:**  
A DOSH-specific plant compliance register. It tracks every CF plant and its expiry, schedules inspections and competent-person tasks, and stores reports. It also generates the ICOP Class B PMS documentation and evidence index needed for an SSI application. It can later add JKKP 8 annual returns, BOMBA FC renewal dates and eSWIS duties as one "factory compliance calendar".

**MVP:**  
- Plant register import from Excel.
- CF expiry and SSI-window alerts.
- Document vault per plant.
- One-click "SSI Class B readiness" checklist mapped to the ICOP clauses.

**Pricing hypothesis:**  
RM300–800 per site per month for mid-size factories (estimate). A per-SSI-application package priced against consultants is also possible.

**How to find first customers:**  
- DOSH-listed authorised inspection bodies and licensed persons, as channel partners.
- FMM members.
- Boiler and pressure-vessel service firms (DOSH competent-firm lists).
- Palm oil mill associations (MPOA; mills run boilers).
- OSH coordinator training cohorts.

**Risks:**  
- The number of factories that will opt into SSI is unknown and may be mostly large plants.
- DOSH could extend MyKKP.
- The buyer count is unverified (no statistics on CF plants were found).
- The ICOP may be read by consultants, not by software.

**Kill condition:**  
DOSH data or interviews show that only a few hundred occupiers will apply for SSI Class B. Or CF tracking alone turns out to be adequately handled in Excel or CMMS by the target factories.

**Score:** 5/10

**Sources:**  
- https://dosh.gov.my/wp-content/uploads/2026/01/Industry-Code-of-Practice-for-Plant-Management-System-Special-Scheme-of-Inspection-Class-B.pdf
- https://dosh.gov.my/wp-content/uploads/2025/01/Peraturan-Peraturan-Keselamatan-dan-Kesihatan-Pekerjaan-Skim-Pemeriksaan-Khas-2025.pdf
- https://www.skrine.com/insights/alerts/april-2025/the-occupational-safety-and-health-special-scheme
- https://dosh.gov.my/wp-content/uploads/2024/10/Akta-Kilang-dan-Jentera-Pemansuhan-2022-Akta-835.pdf
- https://enviliance.com/regions/southeast-asia/my/report_11888
- https://dosh.gov.my/wp-content/uploads/2025/07/PANDUAN-PERMOHONAN-DAFTAR-SENARAI-BADAN-PEMERIKSAAN-YANG-DIBERI-KUASA-Kemaskini-22-Dis-2025.pdf
- https://dosh.gov.my/wp-content/uploads/2026/01/Panduan-PSTT.pdf
- https://www.getfoundation.com.my/blog/pressure-vessel-registration-malaysia-dosh-certificate-fitness-compliance-guide

### Opportunity: Fire-system maintenance records to BOMBA Fire Certificate renewal pack

**Industry:**  
Fire-protection maintenance contractors (sprinkler, hose reel, alarm, FM200, extinguishers)

**Buyer:**  
Owner or operations manager of a BOMBA-registered fire-protection servicing contractor. Facility managers of designated premises are secondary buyers.

**Trigger / Why now:**  
No new 2026 rule was found. The standing duty is that the Fire Certificate for designated premises is valid for one year and must be renewed with Form III at least 30 days before expiry via the SPKA portal. Renewal must include maintenance records and the last two fire-drill records. Late renewal is penalised, and an expired certificate forces a full Form I re-application.

**Current workflow:**  
1. Technicians service systems monthly or quarterly using paper checklists.
2. The office types up service reports, often per system and per building.
3. Before renewal, the contractor or facility manager compiles a year of records and drill reports into the SPKA submission.
4. Defects found by BOMBA inspection are fixed and re-documented.

**Pain:**  
Annual hard deadline with penalties, and evidence must be assembled from scattered servicing visits. No direct complaints were found (unverified).

**Existing solutions:**  
Generic field-service apps (FieldMotion, Connecteam and similar), local facility-management systems, Excel and Word templates, and fire consultants who prepare FC applications (PSB Fire Engineers, Hegel Engineering, ipm.my). No Malaysia-specific fire-maintenance SaaS was found.

**The gap:**  
Turning recurring servicing data into a ready BOMBA renewal evidence pack per premises, with expiry tracking across a contractor's whole client base.

**Possible product:**  
A mobile checklist app with templates for each Malaysian fire system. It produces per-premises annual evidence packs and FC expiry reminders, and gives the client building a portal.

**MVP:**  
Checklist templates (sprinkler, hose reel, alarm, extinguisher), a PDF service report, and an FC expiry dashboard per client.

**Pricing hypothesis:**  
RM150–400 per month per contractor, by technician count (estimate).

**How to find first customers:**  
BOMBA registered-contractor lists (unverified as public), the Fire Protection Association of Malaysia (unverified), and Google Maps / directory listings for "Bomba certification" servicers.

**Risks:**  
No why-now. Generic field-service apps may be "good enough". Small contractors may resist paying.

**Kill condition:**  
Interviews show contractors are content with generic apps or paper, or that BOMBA SPKA does not need structured maintenance evidence in practice.

**Score:** 4/10

**Sources:**  
- https://www.bomba.gov.my/en/perakuan-bomba/
- https://www.getfoundation.com.my/blog/bomba-fire-certificate-malaysia-application-renewal-guide-2026
- https://www.psbfireengineers.com/firecertification
- https://www.firefighter.com.my/pages/fire-extinguisher-servicing-with-bomba-license

### Opportunity: Stamp-duty self-assessment desk for property managers and multi-unit landlords

**Industry:**  
Property management / residential and commercial leasing

**Buyer:**  
Property-management firms, co-living operators and landlords with many tenancies. HR teams with many contracts are a secondary buyer, but only for staff above RM3,000 per month.

**Trigger / Why now:**  
- The Stamp Duty Self-Assessment System started on 2026-01-01. Phase 1 covers tenancies/leases, general stamping and securities. Phase 2 (property transfers) starts in 2027 and phase 3 (all other instruments) in 2028.
- Filing moved to e-Duti Setem on MyTax, replacing STAMPS.
- The RM2,400 tenancy exemption was removed from 2025.
- LHDN waives penalties only for submissions made in 2026, so errors become penalisable from 2027.

**Current workflow:**  
1. Agreement signed.
2. Duty computed by hand from the new scale.
3. Agreement uploaded and keyed per instrument into MyTax under the payer's or appointed agent's TIN.
4. Payment made.
5. Certificate filed against the tenancy.

**Pain:**  
Per-tenancy re-keying, a new self-assessment liability and audit exposure from 2027. The volume of consumer guides suggests confusion.

**Existing solutions:**  
SPEEDHOME (stamping bundled with rentals), esetem.my (online stamping service), property-management software, lawyers and agents.

**The gap:**  
Bulk tracking and assessment for firms with hundreds of tenancies: renewals, rent changes, audit trail. Whether e-Duti Setem supports bulk submission was not verified.

**Possible product:**  
A tenancy register that computes duty, prepares each MyTax entry, tracks payment and certificate, and flags renewals.

**MVP:**  
CSV import of tenancies, a duty calculator, a submission checklist, and a certificate vault.

**Pricing hypothesis:**  
RM5–10 per instrument, or RM99–199 per month (estimate).

**How to find first customers:**  
Property-management firms (Board of Valuers registry), co-living operators, strata managing agents.

**Risks:**  
Services such as esetem.my and SPEEDHOME already exist. LHDN may add bulk features. Volume per buyer may be too low.

**Kill condition:**  
e-Duti Setem already offers bulk upload, or property managers report fewer than about 20 instruments a month.

**Score:** 3/10

**Sources:**  
- https://www.rdslawpartners.com/post/key-stamp-duty-changes-in-malaysia-from-1-january-2026
- https://www.crowe.com/my/insights/redefining-compliance---stamp-duty-under-malaysias-self-assessment-regime
- https://assets.kpmg.com/content/dam/kpmgsites/my/pdf/2025/12/stamp-duty-in-malaysia-are-you-ready-for-the-self-assessment-era.pdf.coredownload.inline.pdf
- https://www.hrforte.com/taxtok-hrforte/malaysia-stamp-duty-faqs-employment-contracts-stsds
- https://speedhome.com/blog/self-assessment-stamp-duty-malaysia-2026/
- https://esetem.my/en/lhdn-stamp-duty/

## Rejected after competitor research

- **Phase 4 e-invoice exception handler** (scored 3/10 in the first pass). The exemption threshold rose to RM1M on 2026-01-01 and to RM3M on 2026-09-01 (guideline v4.8), and Phase 5 was cancelled. Most of the target segment is now exempt, and the rest is served by the free MyInvois portal plus Niagawan, ClearTax, SQL, AutoCount and others. Sources: https://jomeinvoice.my/article/lhdn-e-invoice-general-guideline-v4-8-rm3-million-exemption/ , https://www.cleartax.com/my/en/different-phases-implementation-timelines-einvoicing-malaysia
- **GP panel/TPA claims reconciliation:** killed by kumoDoc, OptimizeCare, MedicalMet and ClaimHub (https://www.claimhub.cc/). Pain is real (https://codeblue.galencentre.org/2025/11/pmcare-advocates-for-doctors-tpa-more-than-middleman/).
- **Halal supplier-certificate tracking (MHMS 2020):** killed by Taqyid, HIAS and HOLISTICS Lab (MyHalalGig) (https://www.taqyid.com/blog/mhms-2020-guide-malaysian-manufacturers, https://www.hias.co/).
- **Pest-control Form F digital reports:** killed by Datum M4, efacility.my and Rentokil PestConnect (https://www.datumcorp.com/2024/01/09/m4-2024-edition/).
- **APAD/ICOP fleet compliance:** killed by GPS/fleet vendors (SafeTruck, Radius) (https://safetruck.co/how-safetruck-complies-to-apad-icop-regulations-in-fleet-management-system/).
- **Supplier ESG/Scope 3 data for SMEs:** killed by Bursa's CSI platform (https://assist.bursamalaysia.com/hc/en-us/articles/14367398931087-What-is-the-Centralised-Sustainability-Intelligence-CSI-Solution).
- **Medicine price display:** enforcement was stayed by the High Court in May 2026 (https://codeblue.galencentre.org/2026/05/high-court-stays-enforcement-of-drug-price-display/).
- **Statutory payroll:** killed by payroll vendors (Swingvy, PandaHRMS, Ramco and others).
- **CIDB renewal:** killed by biennial frequency and agents (Mishu, RenewCIDB).

## Attractive problem, poor distribution

- **EUDR / MSPO 2.0 traceability for rubber, palm and timber smallholders and dealers.** The need is large: rubber is about 90% smallholder, Malaysia is "standard risk", and the EUDR deadlines are 2026-12-30 (large) and 2027-06-30 (SMEs). But it is served by government platforms (e-MSPO, MSPO Trace, RRIM GeoRubber, RRIMniaga) plus Agridence, TraceX and other EUDR vendors, and the buyers are fragmented. Sources: https://tracextech.com/eudr-dds/rubber-exporters-malaysia/ , https://theedgemalaysia.com/node/814575
- **Foreign-worker quota and levy administration** (FWCMS eQuota from 2026-07-06, MTLM in 2026). The burden is real but runs through a politically contested monopoly system and licensed agencies. Sources: https://www.apandaraya.com/foreign-worker-quota , https://theedgemalaysia.com/node/801091
- **Food-import re-entry** (customs SMK declaration, then FoSIM notification, then MAQIS permit, per consignment). Fits the "one shipment → many systems" pattern, but no pain evidence or customs-agent count was found, and uCustoms migration timing is unclear. Sources: http://fsis2.moh.gov.my/ , https://dnelogistics.com.my/customs-clearance-malaysia-guide.html

## Too competitive

E-invoicing, payroll, GP panel claims, halal assurance, pest control, fleet GPS/ICOP, strata management and ESG supplier data (see above).

## Pass history

- **First pass (2026-10-04):** about 10 searches. It found eSWIS (4/10) and the Phase 4 e-invoice handler (3/10), and left pharmacy, foreign workers, clinics, DOSH and halal unscreened.
- **Deep pass (2026-10-05, this file):** about 45 searches in English and Bahasa Malaysia.
  - Found that eSWIS v2 (live 2025-01-01, mandatory 2025-04-01) and the EQA 2024 penalties are a real why-now. No dedicated SaaS competitor turned up. eSWIS rescored from 4 to 5.
  - Added the DOSH CF/SSI Plant Management System idea (5/10), based on the FMA repeal, the 2024 CF regulations, the 2025 SSI regulations and the January 2026 ICOP.
  - Added fire-maintenance (4/10) and stamp-duty self-assessment (3/10).
  - Removed the e-invoice idea: the RM3M exemption from 2026-09-01 and the cancelled Phase 5 collapsed its segment.
  - Screened and rejected clinics (panel claims, price display), pharmacy, halal, pest control, trucking, foreign workers, ESG, CIDB, strata, childcare and security guards.
  - Corrected the e-invoice exemption figure: RM1M from January 2026, then RM3M from 2026-09-01.
  - No Malaysian idea reaches 6/10 or above. Customer interviews with factory EHS officers should come first.
