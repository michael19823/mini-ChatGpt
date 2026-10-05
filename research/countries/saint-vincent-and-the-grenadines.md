# Saint Vincent and the Grenadines: opportunity research

**Market classification:** Small or microstate economy (population about 100k, 2,000 to 4,000 formal businesses, estimate). I used 5 WebSearch calls. WebFetch was not used.

**Accessibility:** There are no sanctions and no data-localisation barriers to a foreign founder selling software here (EC$ currency is pegged to the USD, and card and wire rails are normal). The constraint is market size, not access.

**Bottom line:** No standalone opportunity in SVG reaches a 7/10 score. SVG does have two genuine 2025–2026 digitisation triggers, both government systems that are mandatory and recurring:
- the expanded IRD e-Tax platform (mandatory online VAT, PAYE and income-tax filing, 2025);
- the ASYCUDA World 4.40 upgrade under the Vincy Single Window for Trade (VSWIFT), live 8 June 2026.

Each trigger affects only a few hundred to a few thousand buyers. Either one is viable only as an **add-on to an OECS-wide or ASYCUDA-wide product** (St Lucia, Grenada, Dominica, Antigua, St Kitts, Barbados and others run the same ASYCUDA World system and similar NIS/PAYE/VAT regimes).

---

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Customs brokers / import agents | ASYCUDA World 4.40 declarations, manifests, supporting docs, ePayment (live June 2026) | Weak candidate (add-on only) | Real mandatory trigger, but only tens of licensed brokers in SVG (estimate). ASYCUDA itself provides XML integration and direct entry. |
| Importers / traders (VSWIFT) | Electronic licences, permits and certificates across agencies via VSWIFT | Watch | The single window is still rolling out. The government portal is the free substitute, and the pain is unproven until it goes live. |
| Payroll / small employers / accountants | Monthly PAYE on e-Tax plus the NIS eSubmit contribution schedule, with NIS rates changed 1 Jan 2026 | Weak candidate (add-on only) | Duplicate entry into two government systems each month. But the buyer base is tiny, and global EOR/payroll firms plus local accountants already cover it. |
| VAT-registered SMEs | Monthly VAT return on etax.gov.vc (due by the 15th) | Reject | Annual/monthly form only. Accountants and QuickBooks-style tools cover it, and the free government portal is the substitute. |
| Agriculture exporters (bananas, arrowroot, produce to the region) | Phytosanitary and export documents | Not verified / reject | My search found nothing about a 2026 trigger. Volumes are small and the work is handled through the Ministry and marketing bodies. |
| Yachting / marine services (Grenadines) | Port/customs clearance (SailClear/eSeaClear regionally) | Reject | Regional clearance tools already exist (I did not verify them in this session), and the buyers are consumers or charter firms. |

---

## Opportunities

### Opportunity: ASYCUDA World broker declaration-prep and document pack (OECS add-on)

**Industry:**
Customs brokerage / import agents

**Buyer:**
Licensed customs brokers and in-house import clerks at distributors, supermarkets and hardware importers in SVG. The realistic target is every ASYCUDA World broker across the OECS and Caribbean.

**Trigger / Why now:**
SVG Customs & Excise moved to the upgraded ASYCUDA World 4.40 on 8 June 2026 under the VSWIFT initiative. Declarations, manifests and supporting documents became fully electronic, with ePayment and risk-based selectivity, replacing paper procedures. Training of brokers began 19 May 2026.

**Current workflow:**
1. The broker receives the commercial invoice, packing list and bill of lading by email or PDF from the importer or shipper.
2. The broker keys line items, HS codes, values and freight into ASYCUDA World by hand.
3. The broker scans and attaches the supporting documents, then pays duties via ePayment.
4. The broker handles queries and selectivity (red/yellow lane) and resubmits corrections.

**Pain:**
Manual line-item keying from supplier invoices into ASYCUDA, with penalties and delays for errors. The newly paperless process forces every attachment to be uploaded. This pain is inferred from the workflow; I found no published broker complaints.

**Existing solutions:**
- ASYCUDA World direct entry (free, government-provided). It includes an XML integration upload, as documented in other ASYCUDA deployments.
- Broker spreadsheets and in-house macros.
- Regional broker software vendors (not verified in this session).
- Importer ERPs that export invoice data.

**The gap:**
A tool that turns supplier invoices (PDF/Excel) into a validated ASYCUDA World XML declaration, suggests HS codes from the broker's own history, and keeps the attachment pack. Whether local brokers already have this is unverified.

**Possible product:**
An invoice-to-ASYCUDA-XML converter with a per-client HS-code memory and a rule check against the national tariff, sold across all ASYCUDA World Caribbean jurisdictions.

**MVP:**
Upload an Excel or PDF invoice, map the lines, and export ASYCUDA-compliant XML for one jurisdiction (SVG), with HS lookup from the broker's past entries.

**Pricing hypothesis:**
US$50–150/month per broker, or US$2–5 per declaration.

**How to find first customers:**
SVG Customs & Excise list of licensed brokers and agents (the attendees of the May 2026 VSWIFT training), the SVG Chamber of Industry and Commerce, and equivalent broker lists in St Lucia, Grenada and Barbados.

**Risks:**
- The SVG market alone is too small (tens of brokers).
- Customs may restrict XML upload to approved software.
- Tariff and XML schema differences between countries.
- Generic AI invoice-OCR substitutes.

**Kill condition:**
Any one of these kills it:
- SVG Customs does not allow broker-side XML upload;
- brokers say keying time is under 1 hour per day;
- an existing regional broker tool already does this at under US$50/month.

**Score:** 4/10 (standalone SVG). It might reach 6/10 as an OECS/Caribbean-wide ASYCUDA product.

**Sources:**
- https://onenewsstvincent.com/2026/05/26/svg-customs-to-launch-upgraded-digital-trade-platform-in-june/
- https://finance.gov.vc/finance/index.php/news/431-svg-customs-to-go-live-with-upgraded-asycuda-world-system
- https://www.gov.vc/index.php/media-center/4319-svg-customs-to-go-live-with-upgraded-asycuda-world-system
- https://finance.gov.vc/finance/images/PDF/SVGCED_ASYCUDA_GoLive.pdf
- https://tuvalu.asycuda.org/documents/aw/TUVALU%20Customs%20User%20Guide%20-%20ASYCUDAWorld%20Declaration%20Submission.pdf (XML integration feature in ASYCUDA World generally)
- https://www.barbadoschamberofcommerce.com/asycuda-world-implementation-update-1/ (regional ASYCUDA World rollout)

### Opportunity: One payroll run → e-Tax PAYE + NIS eSubmit filings (OECS add-on)

**Industry:**
Payroll bureaus / accountants / small employers

**Buyer:**
Small accounting firms and payroll clerks at SMEs with 5–100 staff.

**Trigger / Why now:**
- IRD made online filing mandatory for VAT, PAYE and income tax on the relaunched e-Tax platform (relaunched February 2025; monthly VAT and PAYE added May 2025).
- NIS contribution rates rose from 1 January 2026, to a 14% total (7.5% employer, 6.5% employee) with a ceiling of EC$5,200 per month.
- NIS schedules go through a separate eSubmit system.

**Current workflow:**
1. Run payroll in a spreadsheet or a generic accounting package.
2. Re-key or reformat the PAYE data into etax.gov.vc by the 15th.
3. Separately build the NIS contribution schedule and submit it via NIS eSubmit.
4. Reconcile any differences, such as rate changes and ceiling caps.

**Pain:**
Two government systems are fed from one payroll each month, and the 2026 rate change forces a spreadsheet update. The evidence is the official reminders. Volume is modest.

**Existing solutions:**
- Global EOR/payroll providers: Playroll, Safeguard Global, TopSource, Rivermate (aimed at foreign employers).
- Local accountants doing the work manually.
- Generic accounting software with custom payroll setups.
- Regional or local payroll packages (unverified).

**The gap:**
Producing upload-ready files for both e-Tax (PAYE) and NIS eSubmit from one payroll, with SVG rate tables kept current. Whether either portal accepts file uploads is unverified.

**Possible product:**
A lightweight payroll calculator for the Eastern Caribbean (one rules pack per island) that outputs the PAYE and NIS schedules in each portal's format.

**MVP:**
Upload a CSV of payroll and get the SVG PAYE summary plus the NIS eSubmit schedule file, with the 2026 rates and ceiling applied.

**Pricing hypothesis:**
US$20–60/month per employer, or US$100–200/month for an accounting firm with many clients.

**How to find first customers:**
- Institute of Chartered Accountants of the Eastern Caribbean membership (SVG branch).
- SVG Chamber of Industry and Commerce members.
- Repeating the same channels on other islands.

**Risks:**
- Tiny market.
- The portals may not accept uploads, which would make this a screen-scraping job.
- Local accounting firms already have templates.
- Global payroll players.

**Kill condition:**
Either of these kills it:
- neither e-Tax nor NIS eSubmit supports file import;
- accountants report under 2 hours per month of re-entry per client.

**Score:** 3/10 (standalone). It might reach 5/10 as an OECS-wide rules pack.

**Sources:**
- https://kpmg.com/us/en/taxnewsflash/news/2025/07/saint-vincent-grenadines-etax-platform-expanded-online-filing.html
- https://www.gov.vc/images/pdf_documents/IRD-Media-Release---30-March-2026.pdf
- https://onenewsstvincent.com/2025/12/30/all-employers-and-employees-reminded-of-nis-increase-from-jan-1-2026/
- https://www.playroll.com/payroll/st-vincent-grenadines
- https://www.safeguardglobal.com/country/saint-vincent-and-the-grenadines/payroll

---

## Rejected after competitor research

- **VAT return filing tool:** Killed by the free IRD e-Tax portal (etax.gov.vc) plus local accountants and standard accounting software. It is a simple monthly form with no fragmentation.
- **Foreign-employer payroll compliance:** Killed by global EOR/payroll vendors (Playroll, Safeguard Global, TopSource Worldwide, Rivermate) that already list SVG.
- **Yacht clearance:** Killed by existing regional e-clearance systems (SailClear/eSeaClear, not verified this session) and by the consumer-facing buyer.

## Attractive problem, poor distribution

- **VSWIFT multi-agency permits and licences for importers:** A one-shipment-to-many-agencies pattern, but the government single window is the intended free solution and the buyer base is a few hundred importers. Revisit once VSWIFT permit modules are live and brokers complain.

## Too competitive

- **Generic payroll / EOR for SVG:** Crowded with global vendors relative to the market size.

## Inaccessible markets

- None. SVG is accessible; the limitation is scale.
