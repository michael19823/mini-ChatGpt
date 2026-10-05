# Australia

Researched 2026-10-05 (deep pass, building on the 2026-10-04 first pass). About 47 searches in this pass. WebFetch was blocked, so all findings come from search-result snippets. Anything I did not see stated in a snippet is marked "unverified" or "estimate".

**Accessibility:** open market. There are no sanctions, payment rails are normal and business is in English. Government systems (ATO, NDIA, ABF, state portals) are reached through registered software providers, spreadsheet upload or portal login, so a small foreign vendor can take part.

**Big picture:** Australia is a mature, software-saturated market. In 2026 the regulatory triggers are real and numerous: NSW eCert, AML/CTF Tranche 2, the Early Childhood Worker Register, Support at Home, new portable LSL schemes and NEXDOC. For most of them, a funded vertical vendor shipped a fix within weeks, often before the deadline. This is the brief's "fire inspection" lesson repeated many times. The one gap that survived competitor diligence is portable long service leave reporting for employers on Xero or MYOB payroll.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Community services / NDIS / cleaning / security / construction employers | Portable long service leave (PLSL) quarterly returns to 5+ state schemes | **Candidate (strongest)** | NSW (Jul 2025) and SA (Oct 2025) community-services schemes are new. Xero and MYOB have no PLSL report. The only automated builder is locked to PayCat payroll |
| Electricians (NSW) | CCEW lodgement via BCNSW eCert (mandatory 1 Jul 2026) | Rejected, too competitive | eCert API is open to job-management vendors. Fergus, Kando and Dataforce already lodge directly. The government portal is free |
| Plumbers / gasfitters (Vic) | Compliance certificate purchase and lodgement in VBA360 within 5 days; 12-month certificate expiry from Sep 2025 | Weak candidate | Failure to lodge is a leading complaint. VBA360 integration is unverified. SimpleCerts and NECA forms cover certificate creation but not lodgement |
| Liquid / hazardous waste transport | NSW IWTS, Vic Waste Tracker, Qld | Weak candidate | Fragmented, but competitor Kynection already targets waste-tracking compliance. Third-party APIs are unverified |
| Grease-trap pump-out (benchmark analogue) | Water-utility trade-waste service proof | Rejected | Sydney Water already uses barcode scanning at each service through authorised WasteSafe transporters. Elsewhere an invoice serves as proof |
| Accountants / real estate / lawyers | AML/CTF Tranche 2 (from 1 Jul 2026) | Rejected, too competitive | First AML (REIA preferred partner), ClearAML, Flagship AML, EasyAML, AMLHub and OverSEER all sell to small firms |
| Childcare (ECEC) | National Early Childhood Worker Register in NQAITS (from 27 Feb 2026) | Rejected | ACECQA offers Excel/JSON bulk upload. OWNA already exports in the NQAITS format, and other childcare platforms are likely following (unverified) |
| Home care (aged) | Support at Home claiming, monthly statements, third-party invoices (from 1 Nov 2025) | Rejected, too competitive | Pain is severe (millions in unpaid claims; only 35% of sampled claims had enough agreed-price evidence). But Brevity, Visualcare, ShiftCare/quickclaim, Lookout and AlayaCare all ship claiming, reconciliation and third-party invoice OCR |
| Funeral homes | Death registration with state BDMs (NSW eRegistry, Vic, Qld batch upload) | Rejected | FuneraBuddy already lodges with BDMs in every state plus NZ, with state-specific validation. Halcyon and Gather are also present |
| Veterinary clinics | S8 controlled-drug registers | Rejected | Modeus Vet S8 integrates with ezyVet and other practice-management systems and covers state rules |
| Food service | Standard 3.2.2A Food Safety Supervisor and record-keeping | Rejected | Generic HACCP/checklist market (SafetyCulture and many apps). Only category-one businesses must keep records. Not a submission workflow |
| Pesticide application (NSW) | Spray records within 48h, kept 3 years; EPA 2026 compliance campaign | Rejected | Record-keeping only, with no submission. Farm-management apps cover it (competitors not individually verified) |
| Horticulture (berries, leafy veg, melons) | FSANZ primary production standards (12 Feb 2025): traceability and state registration | Poor distribution | Record-keeping without a recurring filing. Growers are already in Freshcare/GFSI schemes (unverified detail) |
| Meat / food exporters | NEXDOC replacing EXDOC (meat moved Jul 2026) | Rejected | Few, large exporters. Established third-party software vendors integrate through DAFF's vendor development package |
| Labour hire providers and hosts | Qld six-monthly reports, Vic annual report, SA expanded to all industries (Apr 2026), Vic fit-and-proper rules (Jun 2026) | Rejected | Low frequency. The Vic LHA "Follow My Providers" licence-monitoring service is free. Largely consultant- and lawyer-driven |
| Construction (Qld) | Project trust accounts | Rejected | Further rollout paused in 2025 pending a Productivity Commission review, so the obligation is shrinking |
| Payroll | Payday Super (1 Jul 2026) | Rejected | Xero, MYOB, QuickBooks, KeyPay, Employment Hero and others shipped it (first pass) |
| Fire safety | NSW AFSS / AS1851 | Too competitive | FieldInsight, SafetyCulture and others (first pass) |
| Sheep / goat eID | NSW mandatory eID by 1 Jan 2027 | Poor distribution | Hardware-led. Saleyard and processor systems are incumbent |
| Mid-market suppliers | AASB S2 Group 2 (from 1 Jul 2026) supplier emissions requests | Rejected | Crowded carbon-accounting market (Trace, Lucent Sky, Avarni with BDO, and others) |
| Customs brokers | ICS / CRST | Rejected | Mature broker-software ecosystem; the ICS replacement is years away (first pass) |

## Opportunities

### Opportunity: Payroll-agnostic portable LSL return builder (community services, cleaning, security, construction)

**Industry:**
Employers covered by state portable long service leave schemes:
- community services (disability/NDIS, youth, family and homelessness services), in Vic, Qld, ACT, NSW, SA and soon NT;
- contract cleaning and security (Vic, NSW cleaning, ACT);
- construction (every state, through CoINVEST, QLeave, the NSW Long Service Corporation, MyLeave WA and others).

**Buyer:**
The bookkeeper, payroll officer or finance manager at a small-to-mid employer (10-300 workers) running **Xero or MYOB payroll**, especially not-for-profits and NDIS providers. Also the outsourced bookkeepers and payroll bureaus that file for many such employers.

**Trigger / Why now:**
- **NSW community services scheme** started 1 July 2025 with a 1.7% quarterly levy. The first service return (Jul 2025 to Mar 2026) was due April-May 2026. The Long Service Corporation's Appian portal went live in April 2026, and 2,100+ employers had submitted 8,200+ returns by then. LSC expects about 2,400 employers and 250,000 workers.
- **SA community services scheme** started 1 October 2025 with a 2.2% levy. The first quarterly return was due 21 January 2026.
- **NT community services scheme** was legislated in 2024, with commencement expected around 2025-26 (unverified exact date).
- **Victorian Court of Appeal (May 2026)** widened the construction scheme: coverage now follows the work performed, not the employer's main business.
- Each scheme sets its own reportable pay categories (penalties, allowances, overtime and leave are treated differently), its own frequency (quarterly, or monthly for some construction schemes, per first-pass sources) and its own spreadsheet template.

**Current workflow:**
1. Each quarter, export the Payroll Activity Summary/Detail report from Xero or MYOB.
2. In Excel, strip out non-reportable pay items according to that scheme's rules, then compute ordinary wages and days or hours per eligible worker.
3. Work out which workers are eligible, including part-industry workers and workers in more than one state.
4. Download the scheme's pre-populated template from its portal (PLSA Vic, LSC NSW Employer Portal via Service NSW, QLeave, ACT portableleave.org.au, MyLeave WA), paste the data in, upload it, then pay the levy.
5. Repeat for every scheme and state the employer operates in, and fix rejected rows and worker mismatches.

**Pain:**
- On the Xero Product Ideas forum, the request "AU Payroll - Add portable long service leave report" has been open for years. Users report PLSL reports can take "upwards of 3 hours each quarter", and say no other mainstream payroll provider does better.
- MYOB community users describe "an extremely manual process removing the non-reportable items".
- The penalty for failure is real: levy back-payments and the classification disputes highlighted by the Vic Court of Appeal decision.

**Existing solutions:**
- **PayCat Toolbox (PLSL):** pulls wages, applies each scheme's rules (NSW, Vic, Qld, SA, ACT) and builds the upload file, for AUD 2 per active employee per month. **It only works with PayCat Payroll.**
- **Employment Hero (Standard/Premium plans):** a generic PLSL report exported to Excel or CSV, with no scheme-specific template output (as seen in snippets).
- **Trimble Jobpac:** a PLSL report inside enterprise construction ERP.
- **Scheme portals:** free spreadsheet bulk upload, but no payroll mapping.
- **LSLcalc:** an LSL calculator that markets "why Xero and MYOB can't handle multi-state LSL". Whether it builds PLSL returns is unverified.
- **FairWorkMate and Plexa:** calculators only. Bookkeepers also do this manually.

**The gap:**
The 90% of small and mid employers on Xero or MYOB (estimate) have no tool that maps their pay items to each scheme's rules and outputs the scheme's own upload template. PayCat proves the product works and sets a price, but it requires switching payroll.

**Possible product:**
A Xero/MYOB-connected app that maps the employer's pay items to each scheme's reportable categories once. Each quarter it pulls ordinary wages and hours per worker, flags eligibility and multi-scheme edge cases, and produces ready-to-upload files for each scheme, plus a levy calculation and an audit trail. A bureau dashboard covers many client employers.

**MVP:**
- Xero Payroll AU API connection only.
- Two schemes: NSW Community Services (newest, 2,400 employers) and Vic PLSA (community services, cleaning, security).
- Output: the scheme's spreadsheet template, filled in, plus a variance report against the previous quarter.
- No portal submission. The user uploads the file.

**Pricing hypothesis:**
AUD 2-3 per covered worker per month, anchored on PayCat, with a minimum of AUD 49/month. For a 60-worker NDIS provider that is about AUD 120-180/month. Bureau tier: AUD 199-399/month for up to 20 client employers.

**How to find first customers:**
- The Xero Product Ideas thread itself: commenters are self-identified buyers.
- Xero App Store listing.
- Peak bodies: National Disability Services, ACOSS/NCOSS member lists, Jobs Australia.
- NDIS provider register (public). Vic and NSW community-sector bookkeeper networks.
- LSC and PLSA employer webinars (the schemes want employers to file correctly, so a partnership is plausible).

**Risks:**
- Xero or MYOB ships a native PLSL report. The idea has been open for years, which suggests a low priority.
- Scheme rules change, and eligibility advice carries liability.
- The market is moderate: about 2,400 NSW CSI employers plus thousands in Vic, Qld, SA and ACT (estimate: 10-20k covered employers nationally, including construction).
- Xero API access to pay-item detail must be confirmed (likely available; unverified).

**Kill condition:**
Interviews show most covered employers already use Employment Hero or PayCat, or the scheme templates turn out to be a 10-minute paste. Or Xero announces a PLSL report on its 2026-27 roadmap.

**Score:** 6.5/10

**Sources:**
- https://productideas.xero.com/forums/967118-payroll-expenses/suggestions/47693666-au-payroll-add-portable-long-service-leave-repor
- https://community.myob.com/discussions/staffing_and_payroll/portable-long-service-leave-report/896422
- https://www.paycat.com.au/portable-long-service-leave-toolbox
- https://help.employmenthero.com/hc/en-au/articles/17426642142095-Portable-Long-Service-Leave-Report-on-Payroll-classic
- https://www.lslcalc.com/blog/multi-state-long-service-leave-why-xero-myob-cant-handle-it
- https://www.hsfkramer.com/notes/employment/2025-posts/aus-portable-long-service-leave-scheme-to-commence-in-the-nsw-community-services-industry
- https://www.longservice.nsw.gov.au/csi/employers/manage-employer-service-returns
- https://www.itnews.com.au/news/nsw-long-service-corporation-builds-platforms-for-community-services-scheme-627581
- https://itwire.com/business-it-news/business-software/nsw-community-services-workers-now-accessing-long-service-leave-across-multiple-employers-on-appian
- https://sabusinesschamber.com.au/news/community-services-portable-long-service-leave
- https://www.plsa.vic.gov.au/how-to-upload-quarterly-return-spreadsheet
- https://www.qleave.qld.gov.au/community-services/employers/employer-returns/steps-to-submit-your-employer-return-via-spreadsheet
- https://www.portableleave.org.au/assets/downloads/How-to-complete-an-employer-return-via-return-upload.pdf
- https://www.wa.gov.au/organisation/myleave-construction-long-service-board/myleave-employer-information-page
- https://www.bakermckenzie.com/en/insight/publications/2026/09/australia-court-decision-broadens-application-of-portable-lsl

### Opportunity: Victorian plumbing compliance-certificate lodgement tracker

**Industry:**
Plumbing and gasfitting contractors in Victoria.

**Buyer:**
The owner or office manager at a plumbing business with 3-30 licensed plumbers.

**Trigger / Why now:**
The Building and Plumbing Commission replaced the VBA from 1 July 2025. From August/September 2025, purchased compliance certificates expire after 12 months, and unused stock is lost. Certificates must be lodged within 5 days for gas appliances, gas piping, below-ground sanitary drains and cooling towers. A certificate must be issued to the customer for work of AUD 750 or more.

**Current workflow:**
1. The office buys blocks of certificates in VBA360 and allocates them to plumbers.
2. The plumber completes the job in field software (simPRO, AroFlo, Fergus, ServiceM8) or on paper.
3. Someone re-keys the job and site details into VBA360 to lodge within 5 days, and sends a copy to the customer.
4. Track unused or expiring certificates and fix site-address errors.

**Pain:**
About 38% of plumbing complaints to the VBA since July 2021 relate to compliance certificates, and failure to lodge is among the most frequent issues. Snippets did not show how much time the re-keying takes (unverified).

**Existing solutions:**
- VBA360 itself (free; MFA login).
- SimpleCerts for simPRO: generates gas, electrical and fire certificates from job data. Whether it lodges with VBA360 is unverified.
- NECA safety-compliance forms inside AroFlo (electrical).
- Field-service forms generally.
- No VBA360 API was found in searches (unverified that none exists).

**The gap:**
Nothing found ties job completion to the 5-day lodgement deadline, certificate-stock expiry and proof sent to the customer.

**Possible product:**
A deadline-and-inventory layer that reads completed jobs from simPRO, AroFlo or Fergus. It shows which jobs need a certificate, pre-fills the VBA360 fields (copy-assist or a browser extension), tracks the 5-day clock and alerts on certificate expiry.

**MVP:**
A simPRO or Fergus connector plus a Chrome extension that autofills the VBA360 lodgement form, with a daily "unlodged jobs" email.

**Pricing hypothesis:**
AUD 29-79/month per business.

**How to find first customers:**
The BPC public register of licensed plumbers, Master Plumbers Victoria, and plumbing wholesaler counters (Reece).

**Risks:**
- Browser automation on a government portal with MFA is fragile and may breach its terms.
- Field-service vendors could add the feature, as Fergus did for NSW eCert within months.
- Willingness to pay is low for a 5-minute task.

**Kill condition:**
BPC opens an eCert-style API to job-management vendors (as NSW did), or interviews show lodgement takes under 3 minutes and is rarely missed.

**Score:** 4/10

**Sources:**
- https://www.vba.vic.gov.au/registration-and-licensing/plumbing-registration-and-licensing/renewals-other-requirements/compliance-certificates
- https://www.bpc.vic.gov.au/plumbers/compliance-certificates
- https://www.vba.vic.gov.au/tools/vba360/compliance-certificates
- https://www.vba.vic.gov.au/news/news/2024/most-victorian-plumbers-doing-the-right-thing
- https://www.simplementary.com/simplecerts-for-simpro

### Opportunity: Multi-state hazardous and liquid waste tracking router

**Industry:**
Waste transport (liquid, grease, hazardous and asbestos).

**Buyer:**
The dispatch or compliance coordinator at a small transporter or receiver working across NSW, Vic and Qld.

**Trigger / Why now:**
- NSW IWTS (built and run by KPMG Origins) replaced the old online waste-tracking, WasteLocate tyre and asbestos systems.
- Qld is co-delivering IWTS with NSW EPA.
- Vic EPA Waste Tracker requires real-time records, and EPA runs roadside and snap inspections.
- Interstate movements need both states' systems.

**Current workflow:**
1. Record the job in dispatch software or on paper.
2. Re-key the consignment into each state's system (Vic Waste Tracker app/portal, NSW IWTS).
3. Reconcile with customer dockets and invoices.
4. Handle exceptions such as rejected loads or the wrong receiver.

**Pain:**
Plausible double entry for interstate operators. EPA Vic notes Waste Tracker "does not replace your commercial transaction records", which implies parallel systems. No complaint data was found.

**Existing solutions:**
The state portals (free), Kynection (waste-tracking compliance software marketed for 2026), waste ERPs (not individually verified) and consultants.

**The gap:**
One job record pushed to several state systems. This is only buildable if APIs exist. KPMG describes IWTS as "designed to integrate with existing business systems", but third-party access is unverified.

**Possible product:**
Job record → multi-state submission + exception queue.

**MVP:**
NSW IWTS integration only, if third-party access exists.

**Pricing hypothesis:**
AUD 99-299/month per depot.

**How to find first customers:**
EPA licence public registers (NSW POEO, Vic EPA permissions) and Waste Management and Resource Recovery Association members.

**Risks:**
No API. The market is small (interstate operators are a minority). Kynection and ERPs may already cover it.

**Kill condition:**
No third-party submission interface exists, or Kynection or waste ERPs already sync to both systems.

**Score:** 3/10

**Sources:**
- https://www.epa.nsw.gov.au/your-environment/waste/integrated-waste-tracking-solution
- https://kpmgorigins.com/customers/nswepa
- https://www.epa.vic.gov.au/waste-tracker
- https://www.epa.vic.gov.au/transport-waste-interstate
- https://www.kynection.com.au/waste-tracking-compliance-made-easier-what-to-digitise-when-you-switch-systems/

## Rejected after competitor research

- **NSW CCEW / eCert (mandatory 1 Jul 2026):** a strong regulatory trigger, but BCNSW published an API for job-management vendors. Fergus (built-in NSW eCert), Kando (lodges via the API in about 90 seconds) and Dataforce ASAP already lodge directly, and the portal is free. This is the clearest example of an incumbent closing the gap before the deadline.
- **AML/CTF Tranche 2 for accountants, real estate and lawyers:** First AML (REIA preferred partner; Raine & Horne), ClearAML (from AUD 5 per check), Flagship AML, EasyAML, AMLHub and OverSEER AML.
- **Early Childhood Worker Register:** ACECQA provides JSON/Excel bulk upload, and OWNA already exports it.
- **Support at Home claiming and evidence:** Brevity (third-party OCR invoice reconciliation), Visualcare, ShiftCare with quickclaim, Lookout and AlayaCare. Pain is high, but the gap belongs to these platforms.
- **Funeral death registration:** FuneraBuddy (automated BDM lodgement in all states plus NZ).
- **Vet controlled drugs:** Modeus Vet S8 with ezyVet integration.
- **Grease-trap service proof:** Sydney Water's WasteSafe barcode scanning already digitises it.
- **NEXDOC meat export documentation:** few large exporters, served by existing third-party vendors through DAFF's vendor development package.
- **Labour hire licensing:** low frequency, and the free Vic LHA "Follow My Providers" service covers licence monitoring.
- **Qld project trust accounts:** rollout paused in 2025.
- **Payday Super, fire AFSS, NDIS claims, customs brokers, e-invoicing, Privacy Act** (first pass): all served by Xero/MYOB/KeyPay etc., FieldInsight/SafetyCulture, ShiftCare/CareMaster, mature broker software, or not mandatory.

## Attractive problem, poor distribution

- Sheep and goat eID (NSW full mandate 1 Jan 2027): hardware-led, with fragmented producers.
- Horticulture primary production standards (Feb 2025): traceability record-keeping for growers. Growers are reached through packhouses and GFSI schemes, and there is no recurring filing.
- Aged care financial reporting (ACFR, quarterly financial report): sold through consultants to larger providers.

## Too competitive

NSW eCert/CCEW, AML/CTF Tranche 2, Support at Home claiming, NDIS provider management, fire-safety inspection, Payday Super, food-safety record apps, carbon accounting for AASB S2 suppliers, and customs-broker software.

## Honest summary

Australia had many 2025-26 regulatory triggers, but most were absorbed quickly by well-funded vertical SaaS: Fergus and Kando for eCert, First AML for Tranche 2, OWNA for the worker register, Brevity and others for Support at Home. The surviving lead is PLSL return generation for employers on Xero or MYOB. It has new schemes (NSW Jul 2025, SA Oct 2025, NT pending), a documented complaint thread on Xero's own forum, and a working price anchor from PayCat (AUD 2 per employee per month). The next step is about 10 interviews with NSW and Vic community-services bookkeepers. The other leads are weak.

## Pass history

- **First pass (2026-10-04, about 11 searches):** PLSL scored 5/10 with the gap unverified, and waste tracking scored 3/10. Food safety, pesticides, vets and funeral homes were not screened.
- **Deep pass (2026-10-05, about 47 searches).** What changed:
  1. PLSL re-scored to 6.5/10 and refocused on community services, using the new NSW and SA schemes and Xero/MYOB complaint evidence.
  2. PayCat Toolbox, Employment Hero and Jobpac identified as the real PLSL competitors.
  3. Ten more industries screened and rejected with named competitors: NSW eCert, AML Tranche 2, the ECEC Worker Register, Support at Home, funeral BDM, vet S8, food safety, pesticides, NEXDOC, labour hire and Qld trust accounts.
  4. New weak lead added: Vic plumbing compliance certificates.
  5. Waste tracking kept at 3/10, now with Kynection named as a competitor.
