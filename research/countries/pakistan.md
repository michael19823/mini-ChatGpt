# Pakistan: Indie-Hacker Opportunity Research (as of 2026-10-05)

**Research constraints (read first):** I worked only from WebSearch result titles and snippets (17 searches, all in English; one search was refused for a usage limit and the retry worked). I did not use WebFetch. I could not check the primary PDFs (DRAP draft guidelines, SRO texts) in full. Facts I could not confirm from a primary or reputable secondary source are marked **unverified** or **estimate**. I did not run Urdu-language searches, so local Facebook and WhatsApp trade-group evidence is missing.

**Accessibility:** Pakistan is not under comprehensive US, EU or UK sanctions, and a foreign solo founder can sell SaaS there. Two practical frictions:
- **Payments:** expect PKR invoicing through a local partner or bank transfer. Card-on-file SaaS billing is uncommon among SMEs (estimate).
- **Licensed integrators:** for FBR real-time integration, the licensing regime for "Licensed Integrators" (PRAL, Haball, EY, WebDNAworks and others) affects who may be the transmitting party. Anything that transmits invoices to FBR either partners with an integrator or sits on top of one.

**Big picture:** Pakistan's 2025–2026 "why now" comes from four state digitisation pushes:
1. **FBR sales-tax Digital Invoicing.** SRO 709(I)/2025 extended it to all corporate and non-corporate sales-tax-registered persons in 2025. Penalties (up to Rs 500,000) started in January 2026.
2. **Draft SRO 288(I)/2026.** This would extend real-time POS/e-invoice integration under the *Income Tax* Rules to schools, clinics, labs, gyms, restaurants, accountants and others. It is still a draft as far as I could verify.
3. **DRAP's nationwide pharma Track & Trace.** The Cabinet approved it on 2 June 2026. Draft guidelines came out on 29 June 2026, and **9 October 2026** is the deadline for 2D barcodes and serialisation on medicine packs.
4. **EU food-safety pressure on rice exporters.** There were dozens of RASFF interceptions in 2025.

The core issuance workflows (raising an e-invoice, filing a GD on PSW) are already crowded or state-provided. The indie gaps are in **data-submission and exception layers**: serialisation master and transaction data to DRAP, input-tax mismatches after digital invoicing, and bills that must reach both federal and provincial authorities.

---

## Industries screened

| # | Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|---|
| 1 | Pharma and veterinary manufacturers / importers | DRAP Track & Trace: GS1 serialisation, master data, XML/CSV transaction upload | **Opportunity (best)** | Brand-new mandate (9 Oct 2026 deadline) with CSV/XML exchange, and it covers vet medicines too; but line-level serialisation vendors bundle software |
| 2 | Tax consultants / SME sales-tax-registered buyers | Monthly sales-tax return: Annex A/C input-tax mismatches and disallowances after digital invoicing | **Opportunity (moderate)** | Recurring monthly pain documented by the tax bar (PTBA); one direct competitor (e-invoicing.pk IRIS Bridge) |
| 3 | Private schools, diagnostic labs, clinics (services) | One bill reported to FBR (income-tax integration, draft) and to a provincial authority (PRA eIMS / SRB / KPRA) | **Opportunity (speculative, conditional)** | "One bill → multiple authorities" fits the thesis, but the FBR rule is still a draft and integrators are already marketing both |
| 4 | Rice exporters | EU residue/aflatoxin lot evidence and traceability pack per shipment | **Watch / needs interviews** | Severe pain (EU rice exports fell sharply in 2025) but I found no verified new Pakistani mandate or software gap |
| 5 | All sales-tax-registered businesses | Issuing FBR digital invoices (B2B) | Too competitive | PRAL (free), Haball, EY, WebDNAworks, e-invoicing.pk, Faubix, Odoo app (~USD 38) |
| 6 | Customs agents / importers / exporters | GD filing and job tracking on Pakistan Single Window | Rejected | PSW is the mandatory platform; it added pre-import clearance and a mobile app (Jul 2026); third-party API access unverified |
| 7 | Employers / payroll bureaus | EOBI + PESSI/SESSI monthly contributions (by the 15th) | Rejected | Covered by ERPNext/Odoo Pakistan payroll localisations, Ramco and local payroll vendors; weak evidence of an unsolved exception |
| 8 | Textile and apparel exporters | EU Digital Product Passport / HREDD traceability data for buyers | Too early / too competitive | DPP for textiles applies from 2027 at the earliest; donor programmes and global traceability SaaS target this |
| 9 | Industrial units / environmental labs (Punjab) | SMART self-monitoring, emission test reports to Punjab EPA | Poor distribution | Only 10–20% of units comply, so enforcement is weak; EPA runs its own Eco Watch app; buyers won't pay without enforcement |

---

## Opportunities

### Opportunity: DRAP Track & Trace data-submission layer for small pharma, vet-pharma manufacturers and importers

**Industry:**
Pharmaceutical and veterinary-pharmaceutical manufacturing and import

**Buyer:**
Regulatory affairs / QA manager or plant IT lead at small and mid-size human and veterinary drug manufacturers, and at drug importers / marketing-authorisation holders. These companies have no in-house serialisation IT team.

**Trigger / Why now:**
- The Federal Cabinet approved a nationwide Track & Trace system and amendments to the Drugs (Labelling and Packing) Rules 1978 on 2 June 2026.
- DRAP published draft T&T Guidelines on 29 June 2026 and set **9 October 2026** as the deadline for a mandatory GS1 DataMatrix (GTIN, batch, expiry, serial) on secondary packs. This covers both human and veterinary medicines.
- Manufacturers and importers need GS1 registration and DRAP system registration, and must submit master data and transaction XML/CSV to DRAP.

**Current workflow:**
1. The company registers GTINs with GS1 Pakistan and keeps product master data in spreadsheets.
2. A line-level coder (printer + vision system, often from a hardware vendor's local agent) generates serials per batch.
3. Serial lists, any aggregation (parent–child) records and dispatch events must be assembled and converted into DRAP's CSV/XML format, then uploaded.
4. Rejections and corrections (wrong GTIN, duplicate serial, missing expiry) are handled by hand. Importers must reconcile foreign manufacturers' serial files with DRAP's format.

**Pain:**
- Hard deadline days away and a draft (not final) technical spec.
- The rule covers *all* manufacturers and importers, including veterinary firms (represented by PVPA), which are typically smaller.
- DRAP has notified PPMA, PVPA and the Chemists & Druggists Association, so the whole chain is affected.
- Non-compliant packs presumably cannot be sold (consequence is an inference; exact enforcement is **unverified**).

**Existing solutions:**
- International serialisation / L3–L4 vendors marketing Pakistan compliance: Visiott, LSPedia, Videojet (coding hardware), and 1DTS/TraceHub (published a guidelines summary).
- Local hardware agents and system integrators bundling software with printers (names **unverified**).
- GS1 Pakistan registration services.
- Consultants and in-house Excel work.

**The gap:**
Enterprise vendors sell full line-to-cloud stacks priced for multinationals. Small vet-pharma firms and importers mainly need:
- a GS1 master-data manager,
- serial-file validation and conversion to DRAP's CSV/XML,
- an upload/rejection queue,
- conversion of foreign manufacturers' serial files (importers).

None of this needs new line hardware. Whether anyone sells that cheap, narrow layer locally is **unverified**.

**Possible product:**
A web app where a QA manager keeps product master data (GTIN, registration no., pack levels) and imports serial/aggregation exports from any coder or a foreign supplier. It validates them against DRAP's rules and produces DRAP-ready XML/CSV, then tracks submissions and errors per batch.

**MVP:**
Master-data register + CSV/XML validator/converter for DRAP's published schema + per-batch submission log with an error checklist. Start with importers and vet-pharma, since they have the least existing tooling.

**Pricing hypothesis:**
PKR 25,000–60,000/month (~USD 90–215) per company, or per-batch pricing for low-volume importers. Optional onboarding fee (estimate).

**How to find first customers:**
- PVPA and PPMA member lists.
- DRAP registered-manufacturer and importer lists (DRAP publishes licensing data; exact list format **unverified**).
- GS1 Pakistan member events.
- Lahore and Karachi pharma clusters.

**Risks:**
- The spec may change (still a draft).
- DRAP may build a free upload portal that is good enough.
- Hardware vendors bundle software for free.
- The deadline may be extended repeatedly, which kills urgency.
- 21 CFR Part 11 / GAMP expectations may push buyers to validated enterprise vendors.

**Kill condition:**
DRAP's final guideline requires the transmitting software itself to be validated or certified, or DRAP offers a free bulk-upload tool with clear error reporting. Also kill if interviews show small firms simply buy the printer vendor's bundled L3 software.

**Score:** 6/10

**Sources:**
- https://pid.gov.pk/site/press_detail/32901 (Cabinet approval, June 2026)
- https://www.nation.com.pk/28-Jun-2026/drap-sets-october-9-deadline-mandatory-medicine-track-trace-system
- https://tribune.com.pk/story/2611187/federal-cabinet-clears-digital-tracking-system-for-medicines
- https://propakistani.pk/2026/06/02/pakistan-to-introduce-digital-verification-system-for-all-medicines/
- https://tracehub.1dts.com/Articles/Read/drap-announce-draft-track-and-trace-guidelines-in-pakistan-28
- https://www.visiott.com/info-point/regulations/pakistan-regulations/
- https://www.lspedia.com/regulation/pakistan

---

### Opportunity: Input-tax mismatch and disallowance reconciliation for tax consultants (post digital invoicing)

**Industry:**
Accounting / tax consultancy serving sales-tax-registered SMEs (manufacturers, distributors, importers)

**Buyer:**
Partner or sales-tax manager at small tax-consultancy firms handling 20–200 sales-tax clients, and finance managers at mid-size registered businesses.

**Trigger / Why now:**
- SRO 709(I)/2025 (22 April 2025) made FBR digital invoicing mandatory for all corporate and non-corporate sales-tax-registered persons. After deadline extensions, FBR began penalising non-integration from January 2026 (up to Rs 500,000).
- Supplier invoices now flow into FBR's system in real time, and IRIS / PRAL automatically cross-match buyers' input claims (Annex A) against suppliers' output (Annex C).
- The Pakistan Tax Bar Association has complained about automated input-tax disallowance repeated month after month without reasons, and about credit notes not flowing into Annex C.

**Current workflow:**
1. The consultant downloads the client's purchase register from their books and the system-generated Annex A from IRIS.
2. They match by supplier NTN and invoice in Excel and find missing, late or wrongly coded supplier invoices.
3. They chase suppliers by phone or WhatsApp to report or correct invoices, then decide what to claim this month or carry forward.
4. They answer FBR's automated discrepancy notices by hand.

**Pain:**
Monthly, per client. Input tax at 18% is real cash, so disallowed credit is a direct financial loss. There are automated discrepancy notices, and the tax bar has publicly complained (Business Recorder).

**Existing solutions:**
- e-invoicing.pk "IRIS 2.0 Sales Data Reconciliation Addon (IRIS Bridge)": a direct competitor.
- General accounting/ERP with FBR modules (Odoo FBR app, QuickBooks connectors, SAP/Tally via integrators).
- Consultants and Fiverr freelancers doing it manually in Excel.

**The gap:**
Existing tools focus on the *seller's* issuance and sales-side reconciliation. What I could not find is a multi-client, buyer-side workbench for consultants: per-client Annex A vs books matching, a supplier-chase queue, carry-forward tracking of disallowed credit, and notice-response drafts. IRIS Bridge's exact scope is **unverified**.

**Possible product:**
A consultant dashboard. Drop in each client's purchase ledger export and IRIS Annex A / Annex C files every month, and get matched, missing and mismatched invoices per supplier. It also gives a supplier-chase list, running tracking of disallowed credit, and a notice-response pack.

**MVP:**
Excel/CSV upload of the purchase register + IRIS annex export → matching report with supplier-level exceptions and a month-over-month carry-forward ledger. No FBR API needed.

**Pricing hypothesis:**
PKR 1,500–3,000 per client per month for consultants (a 50-client firm pays ~PKR 100k/month ≈ USD 360) (estimate).

**How to find first customers:**
- Pakistan Tax Bar Association and provincial/district tax bar members.
- ICAP and ICMAP member directories for small practices.
- Chambers of commerce (LCCI, KCCI, FPCCI) tax committees.
- YouTube and LinkedIn tax educators who already make IRIS walkthroughs.

**Risks:**
- FBR may fix IRIS matching itself.
- The direct competitor may expand.
- Consultants' willingness to pay is low and price-sensitive.
- File formats may change without notice.

**Kill condition:**
Interviews show IRIS Bridge or ERP vendors already do buyer-side multi-client matching well, or that consultants bill so little per client that PKR 1,500/client is unacceptable.

**Score:** 5/10

**Sources:**
- https://www.ey.com/en_gl/technical/tax-alerts/pakistan-extends-scope-of-electronic-invoicing-to-corporate-and-noncorporate-registered-persons
- https://profit.pakistantoday.com.pk/2026/01/08/fbr-to-penalise-companies-for-non-compliance-with-electronic-sales-tax-invoice-integration/
- https://www.brecorder.com/news/amp/40254071 (PTBA urges FBR to fix return-module glitches)
- https://www.brecorder.com/news/amp/40250030
- https://www.e-invoicing.pk/iris-bridge.html (competitor)
- https://e.fbr.gov.pk/SOP/IRIS/Filing_of_New_Sales_Tax_and_Federal_Excise_Return.pdf

---

### Opportunity: "One bill → FBR + provincial authority" router for private schools and diagnostic labs (conditional)

**Industry:**
Private education (fee-charging schools) and diagnostic laboratories / clinics

**Buyer:**
Owner or accounts head of a multi-campus private school chain or a mid-size diagnostic-lab chain.

**Trigger / Why now:**
- Draft SRO 288(I)/2026 (18 Feb 2026) would replace Chapter VIIA of the Income Tax Rules. It would require real-time e-invoice/POS integration with FBR for private schools (fee above Rs 1,000/child/month), clinics, diagnostic labs, hospitals, gyms, restaurants, accountants and others, with QR codes and digital signatures.
- These services already fall under provincial sales tax on services. For example, PRA's eIMS in Punjab, and SRB online-integration rules (2022) in Sindh.
- So the same bill or fee voucher could have to reach two authorities. **Status: still a draft as far as I could verify.**

**Current workflow:**
1. A school ERP or lab LIS produces fee vouchers or invoices.
2. Where provincial integration applies, a separate PRA/SRB integration posts transactions.
3. Under the draft, a second FBR integration would also be needed. Today staff would reconcile the two feeds and handle voided/refunded bills by hand.

**Pain:**
Mainly anticipated. Business Recorder reported the compliance would carry a "heavy cost" for the 14 business categories. Real pain only starts if the rule is finalised.

**Existing solutions:**
- e-invoicing.pk (markets FBR DI, FBR income-tax POS integration and PRA eIMS integration).
- Faubix (blog on doing both FBR DI and PRA eIMS).
- Switcher Techno (content on SRO 288).
- Local POS, school-ERP and LIS vendors, who will likely add connectors.

**The gap:**
A vertical connector that takes school-ERP fee vouchers or LIS invoices and routes each one to the right federal and provincial endpoints. It would handle exemptions (fee thresholds), voids and refunds, and reconcile both feeds. Generic integrators target retail/POS, not fee-voucher or lab-billing workflows (inference).

**Possible product:**
Middleware for school-ERP / LIS exports that posts each bill to FBR and the relevant provincial authority, applies threshold rules, and gives a daily reconciliation dashboard.

**MVP:**
CSV/API intake from the two or three most common school-ERP exports → PRA eIMS + FBR posting through a licensed-integrator partner → reconciliation report.

**Pricing hypothesis:**
PKR 5,000–15,000 per campus or branch per month (estimate).

**How to find first customers:**
- Provincial private-school regulators' registered-school lists (e.g., PEIRA in Islamabad; registration lists in Punjab and Sindh, format **unverified**).
- All Pakistan Private Schools Federation.
- Lab-chain directories.

**Risks:**
- The rule may never be finalised or may be diluted.
- Licensed-integrator requirements may apply.
- School-ERP vendors may add it natively.
- Strong lobbying by school associations.

**Kill condition:**
SRO 288 is not finalised within about 6 months, or the final version exempts education and health.

**Score:** 4/10

**Sources:**
- https://tribune.com.pk/story/2593493/fbr-unveils-draft-amendments-to-income-tax-rules-mandates-pos-integration-for-businesses
- https://www.vatupdate.com/2026/03/17/draft-amendments-to-income-tax-rules-introducing-mandatory-electronic-invoicing-pos-integration/
- https://www.switchertechno.com/sro-288-2026-fbr-online-integration-of-businesses
- https://www.brecorder.com/news/40315936
- https://www.e-invoicing.pk/pra-pos-integration.html
- https://einvoicing.faubix.com/blog/fbr-digital-invoicing-and-pra-eims
- https://assets.kpmg.com/content/dam/kpmg/pk/pdf/2025/02/A-Brief-on-Integration-Rules.pdf

---

### Opportunity: Per-shipment EU food-safety evidence pack for rice exporters (needs validation)

**Industry:**
Rice export (basmati and non-basmati)

**Buyer:**
Export/QA manager at a rice exporting company (Rice Exporters Association of Pakistan, REAP, members).

**Trigger / Why now:**
- RASFF logged about 40 interceptions of Pakistani rice in 2025 for pesticides (imidacloprid, chlorpyrifos), aflatoxin, heavy metals and mineral oil, and rice exports to the EU reportedly fell about 80% over H1 2025.
- In February 2025 the government reintroduced phytosanitary measures.
- Some rejections reportedly stem from documentation or traceability failures rather than lab results.

**Current workflow:**
1. Paddy is sourced from many growers and mills.
2. Pre-shipment lab tests come back as PDF certificates.
3. The phytosanitary certificate comes from DPP.
4. Buyers' document requests (origin, mill, lot, CoA) are answered by email.
5. Lot-to-test-to-container links live in spreadsheets.

**Pain:**
Lost EU market share and rejected containers (high value per event).

**Existing solutions:**
- Inspection and testing labs (SGS, Intertek, Bureau Veritas: presence assumed, **unverified**).
- DPP's official procedures.
- Generic food-traceability SaaS.
- Exporters' own ERPs.

**The gap:**
**Unverified.** I found no evidence of a new Pakistani mandatory traceability system or of a specific software gap. The root problem is farm-level residues, which software cannot fix.

**Possible product:**
A lot-to-container dossier builder that links mill lots, lab CoAs (checked against EU MRLs) and phyto certificates into a buyer-ready pack. It flags lots that are risky for EU shipment.

**MVP:**
CoA PDF/CSV intake + EU MRL check + a per-container evidence PDF.

**Pricing hypothesis:**
PKR 3,000–8,000 per shipment, or PKR 40k/month (estimate).

**How to find first customers:**
The REAP member directory.

**Risks:**
- Problem is agronomic, not administrative.
- Lab firms bundle reporting.
- Small number of buyers (a few hundred exporters, estimate).

**Kill condition:**
Interviews show rejections are almost entirely residue-driven (not documentation), or that labs already deliver EU-MRL-checked dossiers.

**Score:** 3.5/10

**Sources:**
- https://profit.pakistantoday.com.pk/2025/02/10/government-reintroduces-phytosanitary-measures-to-address-rice-shipment-interceptions/
- https://profit.pakistantoday.com.pk/2025/03/05/eu-continues-to-intercept-pakistani-rice-shipments-over-safety-violations/
- https://www.zawya.com/en/world/indian-sub-continent/pakistan-rice-exporters-facing-shipment-rejections-from-eu-uk-and-us-d7mtpnl4
- https://www.brecorder.com/trends/rice-exporters-association-of-pakistan

---

## Rejected after competitor research

- **FBR B2B digital-invoice issuance for SMEs.** Killed by PRAL (a licensed integrator offering integration at no cost), plus Haball, EY, WebDNAworks, e-invoicing.pk (Excel/PDF upload; Rs 15,000 setup, volume plans), Faubix, and an Odoo `fbr_pakistan` app at about USD 38. Commodity market.
  Sources: https://profit.pakistantoday.com.pk/2025/04/13/fbr-approves-four-companies-for-retailers-digital-invoice-integration/ · https://www.e-invoicing.pk/pricing.html · https://apps.odoo.com/apps/modules/18.0/fbr_pakistan
- **Customs-agent job/GD tool on PSW.** Killed by PSW itself: it is the mandatory single platform with step visibility, pre-import clearance (2025) and an official mobile app (July 2026). Third-party API access is unverified.
  Sources: https://www.psw.gov.pk/view-psw-quarterly-newsletter-Dec-2025-Pre-Import-Clearance · https://propakistani.pk/2026/07/22/pakistan-single-window-launches-official-mobile-app-to-digitalize-trade-management/
- **EOBI / PESSI / SESSI contribution compliance for payroll bureaus.** Killed by ERPNext and Odoo Pakistan payroll localisations (Ecosire), Ramco Payce and local payroll vendors. The monthly process is formulaic, and I found no exception pain.
  Sources: https://ecosire.com/ur/apps/erpnext/erpnext-pakistan-payroll · https://www.ramco.com/payce/payroll-compliance-pakistan

## Attractive problem, poor distribution

- **Punjab EPA industrial self-monitoring (SMART) and emission-test reporting.** Real legal obligation, but only 10–20% of units comply, and EPA uses its own Eco Watch app and CCTV mandates. With weak enforcement, buyers have no reason to pay.
  Sources: https://tribune.com.pk/story/2515098/industrial-units-evade-emissions-testing · https://www.zameen.com/news/punjab-goes-digital-for-environmental-monitoring.html
- **Rice-exporter evidence packs** (above): the pain is high, but the cause is agronomic and the buyer pool is small.

## Too competitive / too early

- **Textile DPP / HREDD traceability for EU buyers.** The DPP for textiles starts no earlier than 2027. Donor programmes (GOPA, PBC, APTMA initiatives) and global traceability platforms are already working with large mills. Revisit when the textile delegated act is final.
  Sources: https://www.pbc.org.pk/research/woven-in-or-locked-out-the-future-of-pakistan-textiles-exports-under-the-eus-new-standards/ · https://aptma.org.pk/?p=12361
- **Provincial sales-tax-on-services POS integration (PRA eIMS / SRB / KPRA).** Already sold by e-invoicing.pk, Faubix and POS vendors. KPRA also launched its own invoice-verification app (Sep 2026).
  Source: https://propakistani.pk/2026/09/11/kp-launches-new-app-to-verify-sales-tax-invoices-instantly/

## Not screened (follow-up leads, no claims made)

Funeral services, pesticide dealers (provincial pesticide registration), slaughterhouses (Punjab Food Authority), dairy, fisheries/seafood exports (EU-listed establishments), cold chain, security companies, insurance brokers (SECP), and the April 2026 PCS Delivery Order module for shipping agents (https://en.dailypakistan.com.pk/?p=206943, unverified details).
