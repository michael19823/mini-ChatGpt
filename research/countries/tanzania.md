# Tanzania — Indie-Hacker Opportunity Research

*Research date: 2026-10-04. Track: Tanzania (mainland + Zanzibar).*

**Method note (read first):** WebFetch was blocked by network policy for every domain tried (tra.go.tz, dailynews.co.tz, allafrica.com, pwc.co.tz, vatupdate.com, vatcalc.com, pkfea.com, build.fhir.org). All evidence below therefore comes from **WebSearch result summaries and snippets** (about 30 searches, English plus one Swahili attempt that hit the shared search cap). I could not open primary PDFs (regulations, TRA notices) to read the exact wording. Where a fact comes only from a search summary I cite the URL the search returned. Numbers I could not verify are marked **unverified** or **estimate**. Treat every score as provisional until the primary documents are read and customers are interviewed.

---

## Industries screened

| # | Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|---|
| 1 | Mining contractors / suppliers | Quarterly and annual local-content performance reports to the Mining Commission (GN 563/2025) | **Opportunity** | New Sept-2025 amendment adds sub-plans and quarterly reporting, with a TZS 10m fine and a bidding ban. No dedicated software found, only law firms. |
| 2 | Safari tour operators / lodges | Park permits, fees and concession fees across TANAPA, NCAA and TAWA portals, paid by GePG control number | **Opportunity** | Separate government portals, re-keying for every client, new TANAPA permits from 1 Jun 2026. Operator software (SafariOffice, Safari Portal) stops at the quote. |
| 3 | Accountants / VAT-registered SMEs | Input-VAT claims: typing EFD/VFD receipt verification codes into the return; moving to IDRAS (Feb 2026) | **Opportunity (conditional)** | Every purchase receipt needs its code entered, and receipts missing from EFDMS lose the input credit. The risk is that IDRAS pre-fills purchases. |
| 4 | Private clinics / pharmacies | NHIF claims (now under Universal Health Insurance, live Jan 2026) plus private insurers; rejections and payment reconciliation | **Weak opportunity** | Pain is real (15% rejections in a CAG sample, payments months late), but HMS vendors already integrate NHIF. Only the reconciliation niche is left. |
| 5 | Tier-2 microfinance / money lenders | Mandatory credit reference bureau (CRB) data submission; BoT returns; joining an association | **Lead, not diligenced** | Over 2,600 providers and a mandatory CRB duty. Competitors (loan software) were not checked because the search cap was hit. |
| 6 | Public-sector suppliers (SMEs) | NeST e-procurement tender submissions | **Poor distribution / low willingness to pay** | SMEs pay intermediaries up to TZS 100,000 per submission. Buyers are fragmented and low-ticket. |
| 7 | Zanzibar hotels | ZRA-approved PMS integrated with VFMS and ZAN Gateway (deadline 24 Apr 2026) | **Too competitive / late** | Approved PMS vendors and local integrators are already selling ZRA compliance, and the deadline has passed. |
| 8 | All employers / payroll bureaus | PAYE, SDL, NSSF, WCF, HESLB monthly filings | **Reject** | HONO, the Odoo l10n_tz_payroll module, PaySpace and EOR providers already cover it. |
| 9 | Any VAT business | Sales-side fiscalisation (EFD/VFD/EFDMS integration of ERPs) | **Reject** | Tally, Ecosire (Odoo and D365 BC connectors), EDICOM and local VFD providers already do this. |
| 10 | Coffee exporters | EUDR geolocation and due diligence | **Reject (for indie)** | Application delayed to 30 Dec 2026 / 30 Jun 2027, simplified for small operators. TraceX and others compete, and TCB/EU programmes are in place. |
| 11 | Clearing and forwarding agents | TANCIS / TeSWS declarations and regulator permits | **Reject** | The government single window (40 regulators onboarded, all agents registered) is the system. An indie product would be a thin wrapper. |
| 12 | Fish exporters (Nile perch) | EU CATCH IT catch certificates (Jan 2026) | **Reject** | Mandatory only for EU importers; voluntary for third-country exporters. Very few Tanzanian buyers. |

---

## Top opportunities

### Opportunity: Mining Local-Content Quarterly Reporting Kit (GN 563/2025)

**Industry:**
Mining supply chain: contractors, subcontractors and suppliers to mines, plus mineral-right holders.

**Buyer:**
Compliance or procurement manager (often the finance manager) at a mining contractor, subcontractor or supplier: drilling, catering, haulage, security, explosives, engineering. Secondary buyer: local-content officers at mid-tier mines.

**Trigger / Why now:**
On 12 Sep 2025 the government published the Mining (Local Content) (Amendment) Regulations, GN No. 563/2025. Lexology and Bowmans describe it as the biggest overhaul since 2018. The changes:
- Local Content Plans gain a **Banking Services Sub-Plan** and a **Procurement Sub-Plan**.
- **Quarterly** performance reports are required from commencement, and annual reports within 60 days of year start, in the format of the Fourth Schedule.
- Missing a quarterly or annual report costs a **TZS 10 million fine**, and continued non-submission brings a **ban on bidding** for goods and services.
- Non-indigenous suppliers must form a joint venture with a 100% Tanzanian-owned company.
- The Commission is targeting 90% local procurement. Mining procurement in 2025 was TZS 5.35 trillion, of which 86% went to local firms.

**Current workflow (inferred from the regulation; not observed first-hand):**
1. Export the AP and procurement ledger from the ERP or accounting system (Sage, QuickBooks, Odoo, Excel) every quarter.
2. Classify each supplier by hand as indigenous or non-indigenous, by ownership %, goods/services category and the list of reserved items under Regulation 13A.
3. Pull banking and insurance spend (to show local banks and insurers are used), plus headcount and training data from HR spreadsheets.
4. Paste everything into the Fourth Schedule template and reconcile it with the approved Local Content Plan and sub-plans.
5. Submit to the Mining Commission and keep evidence for audits. Law firms and consultants are often paid to prepare plans.

**Pain:**
- The penalty is a fixed TZS 10m per late report plus a bidding ban, which is existential for a contractor.
- The workflow is a quarterly, multi-source reconciliation.
- The JV and reserved-items rules mean supplier classification must be tracked carefully.
- Hiring evidence: a "Supply Chain Compliance Supervisor (Business Analyst)" role at Sotta Mining requires ensuring procurement complies with Mining Commission local-content obligations.

**Existing solutions:**
- Law and advisory firms publishing guidance and selling plan preparation: FB Attorneys, Bowmans, Clyde & Co, CM Advocates, Theodore Attorneys, FIN & LAW.
- Generic ERPs and spreadsheets.
- Large mines' own procurement systems (SAP and similar). Global "supplier diversity / local content" tools may exist but none Tanzania-specific were found (**unverified**).

**The gap:**
No product found that maps an ERP or AP export to the Tanzanian Fourth Schedule format, with:
- a maintained registry of supplier indigenous-ownership status,
- Regulation 13A reserved-item checks,
- a banking/insurance sub-plan tracker,
- deadline reminders.

Consultants do the annual plan, but the quarterly reporting grind has no tool.

**Possible product:**
"Local-content ledger" for mining suppliers. Upload a quarterly AP export and an HR headcount sheet, then:
- auto-classify suppliers (with an ownership-evidence vault for BRELA certificates and shareholding),
- check spend against the reserved list and plan targets,
- generate the Fourth Schedule quarterly and annual report plus an audit trail.

**MVP:**
An Excel/CSV upload, a supplier classification table with evidence attachments, and a generated quarterly report in the official template. Manual support for the first 10 customers.

**Pricing hypothesis:**
TZS 250k–750k/month (about $100–300) per entity, or about $1,500–3,000/year. For comparison, one missed report costs TZS 10m (about $3.8k at an assumed ~2,600 TZS/USD) plus a bidding ban.

**How to find first customers:**
- Suppliers registered with the Mining Commission's local-content database.
- Exhibitor lists from the Mining Commission local-content forum and the Tanzania Mining & Investment Forum.
- Tanzania Chamber of Minerals and Energy (TCME) members.
- Partnerships with the law firms above, who see the plans but do not want to do quarterly data work.

**Risks:**
- The Mining Commission may launch its own online reporting portal with built-in forms. A portal may already exist; not verified.
- Small total buyer count (estimate: a few hundred to low thousands of active contractors and suppliers; **unverified**).
- Large mines may impose their own templates.

**Kill condition:**
- The Commission's portal already collects quarterly reports as structured forms pulled automatically from licensee procurement data, or
- interviews show fewer than about 300 entities actually filing quarterly.

**Score:** 6.5/10
High pain, mandatory, quarterly, weak competition. Reachable buyers but a modest count, and portal risk is unverified.

**Sources:**
- https://www.lexology.com/library/detail.aspx?g=357fcc75-e970-4ceb-8b1c-937c03ac32fc
- https://www.clydeco.com/en/insights/2025/09/amendment-to-the-mining-local-content-regulations
- https://bowmanslaw.com/insights/amendments-to-tanzanias-mining-local-content-regulations/
- https://bowmanslaw.com/insights/tanzania-local-participation-in-mining-sector-highlighted-in-amendments-to-local-content-regulations/
- https://www.mondaq.com/mining/1762932/tanzania-mining-local-content-regulations-2025-what-foreign-investors-must-know-about-the-new-jv-rules
- https://fbattorneys.co.tz/mining-local-content-regulations-amended-2/
- https://tz.cmadvocates.com/amendment-of-the-mining-local-content-regulations/
- https://www.informea.org/en/content/legislation/mining-local-content-amendment-regulations-2025-gn-563-2025
- https://thecitizen.co.tz/tanzania/news/national/mavunde-local-content-drive-transforms-tanzania-s-mining-sector-5534714
- https://ippmedia.co.tz/the-guardian/news/local-news/read/mining-sector-rules-push-local-content-bid-to-90pc-2026-07-23-100702
- https://www.ajiriwa.net/my-cv/analyze/supply-chain-compliance-supervisor-business-analyst-6a226dfb47760
- https://discoveryalert.com/tanzania-mining-local-content-compliance-2026-rules/

---

### Opportunity: Safari Permit and Park-Fee Operations Desk (TANAPA + NCAA + TAWA)

**Industry:**
Tourism: safari tour operators and DMCs (Arusha, Moshi, Karatu), plus lodge/camp operators inside parks.

**Buyer:**
Operations manager or "park fees / permits" officer at a TALA-licensed tour operator. Secondary buyer: lodge groups paying concession fees.

**Trigger / Why now:**
- **TANAPA redesigned entry permits** came into force **1 June 2026**. Old permits stopped being valid at 23:59 on 31 May 2026. The new permits carry a park-specific identity, security features and traceability.
- Payment is GePG control number only: no cash at gates.
- **NCAA's separate Safari Portal** went through GePG changes, adding advance concession-fee payment and a permit-extension feature. NCAA sells no permits at the gate, so they must be arranged in advance through a registered tour operator or accommodation provider.
- Fee levels in 2026 are high: Serengeti entry about $70–83 per person per day; concession fees about $70.80 per person per night; Ngorongoro crater descent $295 per vehicle. Each mistake is expensive.

**Current workflow:**
1. A sale is closed in a quoting tool (SafariOffice, Safari Portal, Excel) with the itinerary and client list.
2. Operations re-types each client (name, nationality/residency, age band, passport), the vehicle, guide and dates into the **TANAPA reservation system** for each park, and separately into the **NCAA Safari Portal**. TAWA areas and others go through their own portals.
3. They generate GePG control numbers, pay by bank or mobile money, and track which control numbers are paid.
4. They print or download permits per park, and redo everything when dates or pax change (NCAA has permit extensions).
5. Finance reconciles prepaid fees, imprest and refunds against client invoices.

Job ads confirm this work:
- Asilia: "liaison… regarding imprest and park fees… ensuring all camps TANAPA and NCAA requirements are met"
- Niajiri, April 2026: "ensuring all park fees, permits, and bookings are completed at least one week in advance"
- Lodge ops manager: "prepare staff permits according to NCAA and TANAPA permit systems"

**Pain:**
- Many per-client, per-park entries in separate government portals.
- High-value prepayments in USD.
- Reconciliation of imprest and control numbers.
- Dedicated staff roles exist for this work.
- Tripadvisor operator threads show friction when concession-fee rules change mid-season.

**Existing solutions:**
- **SafariOffice** (SafariBookings sister company): inquiries, quotes, operations.
- **Safari Portal**: itineraries, proposals, payments, invoicing.
- Tourwriter / Wetu: itineraries (not verified for Tanzania permits).
- Government portals themselves: TANAPA online reservation and NCAA Safari Portal.
- Spreadsheets.

**The gap:**
Quoting tools stop at the price. None found that:
- turns a confirmed booking into a permit pack per authority (pre-validated passenger manifest, residency/age fee category, park/day schedule),
- tracks GePG control numbers through to paid and permit-issued,
- reconciles fees paid against fees quoted and invoiced.

There is no evidence of a public TANAPA or NCAA API (**unverified**).

**Possible product:**
"Permit desk" for safari operators:
- import the manifest from the booking or quote tool or CSV,
- validate fee categories against current TANAPA/NCAA tariffs,
- produce per-authority entry sheets, or browser-extension autofill into the portals,
- track control numbers, payments and permit PDFs,
- flag changes and reconcile prepaid fees against invoices.

**MVP:**
CSV/manifest import, a 2026/27 tariff rules engine, a per-trip permit checklist, a control-number tracker and a reconciliation report. Add a Chrome autofill extension for the TANAPA and NCAA forms once access is confirmed.

**Pricing hypothesis:**
$49–199/month by trip volume, or $3–5 per trip processed. Operators earn in USD; a single wrong residency category or a missed permit costs more than a month's fee.

**How to find first customers:**
- TATO member directory (tatotz.org).
- Licensed tour operator lists from the Ministry of Natural Resources and Tourism (TALA licences, reportedly $2,000; **unverified**).
- Operators listed on SafariBookings for Tanzania.
- Arusha is concentrated: in-person visits, plus the Karibu-Kilifair trade fair.

Market size estimate: roughly 1,000–2,000 licensed operators (**unverified**), maybe 300–600 with enough volume to pay.

**Risks:**
- Government portals may block automation, change without notice, or add their own bulk/API features.
- SafariOffice or Safari Portal could add a "Tanzania permits" module quickly, since they own the booking data.
- Authorities may restrict third-party access to operator accounts.

**Kill condition:**
- TANAPA/NCAA portals already offer bulk upload or operator APIs that SafariOffice or Safari Portal plug into, or
- operator interviews show permit entry takes under about 15 minutes per trip.

**Score:** 6/10

**Sources:**
- https://www.thecitizen.co.tz/tanzania/news/national/tanapa-unveils-new-entry-permits-to-boost-park-management-5480684
- https://dailynews.co.tz/tanapa-rolls-out-redesigned-entry-permits-to-boost-tourism-services/
- https://www.therespondents.co.tz/2026/05/tanapa-rolls-out-redesigned-national.html
- https://www.travelandtourworld.com/news/article/h5jfjl09tjr3/
- https://safariportal.ncaa.go.tz/Content/uploads/userguide-gepg-changes.pdf
- https://www.tanzaniaparks.go.tz/tourism/visitor-information/tariff
- https://www.tripadvisor.com/ShowTopic-g293747-i9226-k4694134-o10-TANAPA_mandate_for_TATO_operators_new_concession_fees-Tanzania.html
- https://www.ajiriwa.net/view-job/operations-assistant-63fa115274a65
- https://app.niajiri.africa/job-position/965add60-639c-4abc-b517-094cc70954e3
- https://mabumbe.com/jobs/camps-and-lodges-operations-manager-june-2024/
- https://www.safarioffice.com
- https://hostagencyreviews.com/travel-agency-software/safari-portal
- https://www.serengetiparktanzania.com/information/2025-2026-serengeti-national-park-entrance-fees/
- https://www.ngorongorocratertanzania.org/ngorongoro-crater-park-fees/

---

### Opportunity: Input-VAT Receipt Capture and EFDMS Reconciliation for Accountants (IDRAS era)

**Industry:**
Accounting firms and in-house finance teams of VAT-registered SMEs: distributors, hardware, construction, hospitality.

**Buyer:**
Managing partner of a small accounting or tax firm filing monthly VAT for 20–200 clients, or the chief accountant of a mid-size VAT-registered trader.

**Trigger / Why now:**
- **IDRAS** replaced TRA's fragmented domestic-tax platforms. Legacy portals were offline 6–8 Feb 2026 for migration, with go-live right after. IDRAS covers registration, returns, payments, objections and "sales monitoring", and links to other government databases.
- Since March 2022 the VAT return only accepts input VAT backed by EFD/VFD receipts **with verification codes and the buyer's TIN**. Taxpayers key in the verification code of each purchase.
- The 2025/26 Budget proposed a **token-based pre-clearance** model for VFD e-invoices.
- TRA has publicly vowed tough action against evaders (Jan 2026).

**Current workflow:**
1. Clients send piles of paper or photographed EFD/VFD receipts each month.
2. Clerks type each verification code (and amounts) into the purchases section of the return.
3. When a code is "not found" (the supplier never uploaded the receipt, or it lacks the buyer's TIN), the clerk chases the supplier or drops the input credit.
4. Clerks spot-check suspicious receipts on TRA's receipt verification page.
5. They reconcile the return against the general ledger before the monthly deadline.

**Pain:**
- Input VAT is lost whenever a receipt is invalid or missing from EFDMS; search summaries describe this "receipt not found" problem.
- Data entry scales with purchase volume and recurs monthly.
- Firms serving many clients do it in bulk.

**Existing solutions:**
- Sales-side fiscalisation is well served: Tally e-invoice for Tanzania, Ecosire's Odoo and D365 BC TRA-EFD connectors, EDICOM, local VFD providers.
- TRA's own verification page and the IDRAS portal (with free online invoicing).
- Generic receipt-OCR apps (a trap category).
- Accounting firms' clerks.

**The gap:**
The **purchase side** is underserved: bulk-scanning the QR/verification codes on supplier receipts, validating them against EFDMS before month-end, flagging invalid or no-TIN receipts in time to ask suppliers to re-issue, and outputting the purchases schedule in whatever bulk format IDRAS accepts. This is "exceptions" work that ERPs ignore.

**Possible product:**
Mobile and web "receipt inbox" for accounting firms:
- staff or clients snap receipts, and the QR is decoded (not generic OCR),
- codes are validated and de-duplicated,
- a per-client exception list ("chase these 7 suppliers") is produced,
- a filing-ready purchases schedule is exported.

**MVP:**
QR scan to a validated list to a CSV/Excel in the IDRAS purchases format, plus an exceptions dashboard per client. Pilot with 5 accounting firms.

**Pricing hypothesis:**
TZS 20k–50k (about $8–20) per client entity per month to accounting firms, or about $50–150/month for in-house teams.

**How to find first customers:**
- NBAA register of practising firms.
- TRA-registered tax consultants list.
- TAA / NBAA CPD events.
- Market size: VAT-registered taxpayers estimated in the tens of thousands (**unverified**; TRA statistics not found).

**Risks:**
- **IDRAS may pre-populate input VAT from EFDMS receipts that carry the buyer's TIN.** That would erase the data-entry pain and leave only thin exception handling.
- The token pre-clearance model may make invalid receipts rarer.
- TRA may not offer bulk validation access, and scraping a verification page is fragile.

**Kill condition:**
A walkthrough of IDRAS (with a tax agent) shows purchases are pre-filled from EFDMS by buyer TIN, or that codes cannot be uploaded in bulk.

**Score:** 5.5/10
Strong mandatory monthly pain, but high platform risk from IDRAS. Verify first.

**Sources:**
- https://www.tra.go.tz/images/uploads/public_notice/english/TIMETABLE_ENGLISH_IDRAS.pdf
- https://pkfea.com/publications/2026/all-about-tanzanias-new-integrated-domestic-revenue-administration-system-idras/
- https://www.pkfea.com/media/u3jbvdpw/all-about-tanzanias-new-idras.pdf
- https://support.payspace.com/portal/en/kb/articles/tanzania-launch-of-integrated-domestic-revenue-administration-system-idras
- https://allafrica.com/stories/202601260522.html
- https://allafrica.com/stories/202601160419.html
- https://globaltaxnews.ey.com/news/2022-5160-tanzania-revenue-authority-upgrades-vat-electronic-filing-system
- https://www.pwc.co.tz/assets/pdf/tax-alert-update-vat-e-filling-system.pdf
- https://www.bdo-ea.com/getmedia/f356ae2e-2fd1-4edb-a69e-66eba6c108ed/Tanzania-VAT-efiling-system.pdf.aspx?ext=.pdf
- https://www.vatcalc.com/tanzania/tanzania-vfd-e-invoicing-to-include-pre-clearance/
- https://www.vatupdate.com/2026/07/07/tanzania-e-invoicing-e-reporting-country-booklet/
- https://mabumbe.com/efd-verification-how-to-verify-tra-tax-receipts-online/
- https://tallysolutions.com/ssa/vat/how-to-generate-einvoice-in-tanzania
- https://ecosire.com/ur/apps/odoo/odoo-tanzania-tra-efd

---

### Opportunity: NHIF / UHI Claims Rejection and Remittance Reconciliation for Private Facilities

**Industry:**
Private clinics, dispensaries, polyclinics and NHIF-accredited pharmacies.

**Buyer:**
Facility owner or administrator, or the "medical claims officer" (hiring evidence exists) at private and faith-based facilities.

**Trigger / Why now:**
- **Universal Health Insurance (Bima ya Afya kwa Wote)** took effect 26 Jan 2026. NHIF is the single public pool, absorbing CHF, with a TZS 150,000 household premium. NHIF volume is growing.
- NHIF presented standards and API documentation for **online claims submission by 2025** (UDSM DHIS2 Lab, Jan 2025).
- NHIF tariff disputes with APHFTA (the private facilities association) in 2024 ended in a government u-turn.

**Current workflow:**
1. Verify the member and authorise the visit.
2. Record services in the facility HMS (or on paper).
3. Submit claims (folios) to NHIF and, separately, to private insurers' portals.
4. Receive payment months later with deductions and rejections.
5. Reconcile line by line in Excel and appeal.

**Pain:**
- CAG audit: NHIF rejected **TZS 11.83bn of 76.89bn (15%)** of claims from four public hospitals in 2022/23.
- Payment delays up to five months; arrears around TZS 300bn reported.
- A 2025 MDPI study attributes rejections to documentation errors, coding mistakes and non-compliance with NHIF rules.

**Existing solutions:**
- POWERHMS (Powercomputers): NHIF and Jubilee e-claims plus eligibility.
- hms.co.tz.
- Movetech HMS.
- Medicore Solutions (Kenya, serving Tanzania).
- iCareConnect+ (UDSM, NHIF e-claim module).
- GoT-HoMIS for public facilities.
- NHIF's own portal.

**The gap:**
Submission is commoditised. What remains is **pre-submission rule checks** (tariff/benefit-package, STG and pre-approval) and **post-payment remittance reconciliation** across NHIF plus private insurers, for facilities whose HMS lacks it.

**Possible product:**
Add-on "claims auditor": import submitted claims and NHIF payment statements, auto-match deductions to reasons, generate the appeal list, and run pre-submission checks against the current NHIF price package.

**MVP:**
Excel/CSV import of claims plus the NHIF statement, a matching engine and a rejection dashboard.

**Pricing hypothesis:**
TZS 100k–300k/month (about $40–120), or about 1–2% of recovered rejections.

**How to find first customers:**
- APHFTA membership.
- NHIF accredited-facility lists.
- Pharmacy Council registers.
- Partnerships with HMS vendors that lack reconciliation.

**Risks:**
- HMS vendors add reconciliation.
- NHIF cash stress means facilities have limited budget.
- NHIF statement formats may not be machine-readable.

**Kill condition:**
The leading private HMSs already reconcile NHIF remittances, or NHIF statements are only available as non-itemised PDFs.

**Score:** 5/10

**Sources:**
- https://www.thecitizen.co.tz/tanzania/news/national/nhif-ready-for-2026-rollout-of-universal-health-insurance-5305964
- https://www.tanzaniainvest.com/health/universal-health-insurance-scheme-launch
- https://english.news.cn/africa/20260124/b7b4cdca2cca42e3a124deb2990e8f8b/c.html
- https://thebizlens.co.tz/2026/05/11/tanzania-launches-universal-insurance-scheme-as-health-budget-rises-to-sh1-8-trillion/
- https://www.thecitizen.co.tz/tanzania/news/national/fraud-crisis-nhif-and-health-centres-facing-overwhelming-deception-4990134
- https://www.thecitizen.co.tz/tanzania/news/national/stakeholders-propose-solutions-to-resolve-nhif-hospital-payment-disputes-4991334
- https://thechanzo.com/2024/02/28/tanzanias-private-health-providers-say-they-wont-accept-nhif-members-as-talks-falter/
- https://www.theafricareport.com/348097/tanzania-national-health-fund-risks-collapse-over-mounting-debt/
- https://www.mdpi.com/2227-9032/13/3/320
- https://dhis2.udsm.ac.tz/udsm-dhis2-team-joins-key-stakeholders-in-advancing-emr-integration-with-nhif/
- https://powercomputers.co.tz/hospital-management-system-hms/
- https://hms.co.tz/
- https://tanzania.movetechsolutions.com/hospital-management-system-tanzania/
- https://dhis2.udsm.ac.tz/innovation/icareconnect/
- https://ajiriwa.net/job-amp/medical-claims-officer-6842c9e874eb4

---

## Lead needing diligence (not scored)

**Tier-2 microfinance: CRB submissions and BoT returns.**
- BoT counts **over 2,600 Tier-2 providers**: credit companies, individual money lenders and digital lenders.
- The Microfinance Regulations require Tiers 2–4 to **submit credit information to a credit reference bureau**.
- Since 7 Aug 2025, Tier-2 providers had six months to join TAMFI or TAMIU under guided self-regulation. Those two associations are a ready distribution channel.

Not scored because competitor diligence (loan-management systems with CRB export, and the bureaus' own upload tools) could not be completed within the search cap.

Sources:
- https://www.tanzaniainvest.com/finance/banking/tier-2-microfinance-self-regulation-launch
- https://www.bot.go.tz/Publications/Acts,%20Regulations,%20Circulars,%20Guidelines/Regulations/en/2020021122490967551.pdf
- https://www.bot.go.tz/Publications/Acts,%20Regulations,%20Circulars,%20Guidelines/Guidelines/en/2024082813141188.pdf

---

## Rejected after competitor research

| Idea | Killer competitor / reason | Sources |
|---|---|---|
| Payroll statutory filings (PAYE, SDL, NSSF, WCF, HESLB) | HONO (Tanzania payroll covering WCF and HESLB), Odoo `l10n_tz_payroll`, PaySpace (already updated for IDRAS), EOR providers | https://www.hono.ai/solutions/africa/tanzania, https://apps.odoo.com/apps/modules/19.0/l10n_tz_payroll, https://support.payspace.com/portal/en/kb/articles/tanzania-launch-of-integrated-domestic-revenue-administration-system-idras |
| ERP to VFD/EFDMS sales fiscalisation connector | Tally, Ecosire (Odoo / D365 BC), EDICOM, local VFD providers | https://tallysolutions.com/ssa/vat/how-to-generate-einvoice-in-tanzania, https://ecosire.com/fr/apps/dynamics-365-business-central/d365bc-tanzania-tra-efd, https://edicomgroup.com/blog/the-electronic-invoice-in-tanzania |
| NHIF claim submission module | POWERHMS, hms.co.tz, Movetech, Medicore, iCareConnect+, GoT-HoMIS | see NHIF section |
| Zanzibar hotel ZRA/VFMS PMS compliance | Approved PMS vendors and integrators already selling it (HotelPlus Africa ZRA compliance, eZee Absolute, Hotelogix, Zantrix). Deadline (24 Apr 2026) already passed. | https://hotelplusafrica.com/zra-compliance, https://compliance.zanrevenue.org/, https://www.thecitizen.co.tz/tanzania/zanzibar/zanzibar-links-142-hotels-to-digital-system-as-sdl-collections-surpass-sh18bn-5371318, https://www.ezeeabsolute.com/hotel-software-in-tanzania.php |
| Coffee EUDR traceability | TraceX and other EUDR vendors, TCB/EU readiness programme. EUDR postponed to 30 Dec 2026 / 30 Jun 2027 (Reg. 2025/2650), with simplified declarations for small operators. | https://tracextech.com/eudr-exporter/coffee-exporters-tanzania/porters-tanzania/, https://www.eeas.europa.eu/delegations/tanzania/tcb-eu-building-eudr-readiness-tanzanian-coffee-exporters_en, https://trade.ec.europa.eu/access-to-markets/en/news/delay-until-december-2026-and-other-developments-implementation-eudr-regulation |
| Customs agent declaration tooling | TANCIS/TeSWS government single window (40 regulators onboarded, all agents on it) | https://tfadatabase.org/members/tanzania/technical-assistance-projects/article-10-4, https://www.thecitizen.co.tz/tanzania/business/traders-suffer-losses-as-tra-grapples-with-platform-outage-4535696 |
| Fish exporters: EU CATCH IT | Mandatory only for EU importers from 10 Jan 2026, voluntary for exporters. Tiny buyer pool. | https://fiata.org/n/alert-the-eu-catch-system-will-enter-into-force-on-10-january/ |

## Attractive problem, poor distribution

- **NeST tender submission for SMEs.** SMEs struggle with digital literacy and the English-only interface, and pay intermediaries up to TZS 100,000 per tender. The buyers are thousands of tiny, price-sensitive firms with low willingness to pay, and intermediaries already serve them. https://thecitizen.co.tz/tanzania/news/national/study-women-entrepreneurs-struggle-to-access-tanzania-s-preferential-procurement-opportunities-5390354, https://thecitizen.co.tz/tanzania/news/national/study-highlights-why-tanzania-s-smes-miss-lucrative-public-tenders-5534818
- **NHIF claims for small dispensaries and pharmacies.** The pain is real, but the buyers are cash-starved by NHIF arrears.

## Too competitive

- Payroll (HONO, Odoo, PaySpace).
- VFD/EFD sales-side fiscalisation (Tally, Ecosire, EDICOM).
- Zanzibar hotel PMS compliance (approved PMS vendors).
