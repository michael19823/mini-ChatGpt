# Samoa: Country Research

**Market type:** Microstate. Population is about 220,000 (approximate figure, not re-verified in this session) and the formal private sector is small, concentrated in Apia.
**Search budget used:** 4 of 4. Under the microstate rule this is a light screen, not a deep one.
**Accessibility:** No sanctions or internet restrictions affect Samoa, so a foreign solo founder can sell software there. Payment rails are bank transfer and cards. The binding constraint is market size, not legal access.

## Bottom line

**No viable standalone indie-software opportunity was found in Samoa.** The one recent regulatory trigger is Tax Invoice Monitoring System (TIMS) enforcement. TIMS is Samoa's fiscal-invoice system: it requires electronic fiscal invoices for VAGST-registered firms with turnover of SAT 200,000 or more. Seven or more accredited POS and E-SDC vendors already cover it. Those vendors include FiscoBridge, a cloud product built for both Fiji (whose system is called VMS) and Samoa (TIMS). Other mandatory workflows are export biosecurity and customs:
- MAF handles export biosecurity certificates government to government, and those volumes are tiny.
- Customs runs on ASYCUDA World, a UN customs system, so it is not a private-vendor market.

At best, Samoa is an **add-on market** to a Fiji-centred product. Fiji's VMS and Samoa's TIMS share the same fiscalisation design pattern.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Retail / hospitality / all VAGST-registered SMEs | TIMS fiscal invoicing (electronic fiscal devices and E-SDC), with penalties now enforced | Rejected (too competitive) | More than 7 accredited vendors, including a cloud E-SDC built for Fiji and Samoa together; the buyer pool is small |
| Accountants / bookkeepers | Reconciling TIMS fiscal invoices with the accounting ledger and VAGST returns | Weak add-on only | Real but small pain; only worth it bundled into a Fiji VMS product (unverified demand) |
| Agricultural exporters (taro, banana, noni, kava, coconut) | MAF farm registration, export licence per destination, treatment and phytosanitary certificates | Poor distribution / too small | MAF issues certificates government to government by email or in person; very few commercial exporters |
| Fisheries exporters (tuna longline) | Catch documentation and export health certificates | Not pursued | A handful of firms; documentation follows regional and buyer schemes (FFA/WCPFC), not something a local SaaS controls |
| Customs brokers / importers | Import declarations | Rejected | Uses ASYCUDA World (UNCTAD), with capacity building scheduled to 2027 and a single-window deadline of 2040; few brokers; the government owns the system |

## Opportunities

There are no strong opportunities. The idea below is kept only as a low-scored watch item, for the orchestrator's cross-country view.

### Opportunity: TIMS/VMS fiscal-invoice to ledger reconciliation (Pacific add-on)

**Industry:**
Accounting / bookkeeping for SMEs registered for VAGST (Samoa) and VAT (Fiji)

**Buyer:**
Small accounting practices and in-house bookkeepers at SMEs with turnover of SAT 200,000 or more that use Xero/MYOB plus a separate TIMS-accredited POS

**Trigger / Why now:**
The Ministry for Revenue has ended TIMS compliance extensions and is applying penalties. A TIMS system upgrade was notified to vendors in May 2025, and taxpayers had mandatory refresher training from 30 April to 7 May 2026.

**Current workflow:**
1. The POS issues fiscal invoices through the Sales Data Controller (SDC/E-SDC), which reports them to the Ministry.
2. The bookkeeper exports POS sales and re-keys or imports them into the accounting software.
3. The bookkeeper reconciles the fiscal-invoice totals that Revenue sees against the ledger and the VAGST return, and investigates mismatches by hand (estimate; not directly evidenced).

**Pain:**
Revenue now sees invoice-level data, so a mismatch between TIMS data and the VAGST return becomes an audit risk. No direct complaints were found (unverified).

**Existing solutions:**
Accredited TIMS vendors: Computer World (BlueCash-50), Triquestra Infinity RMS, FiscoBridge (MetricMaster), LinkSOFT (InfoTECH/Link Technologies), RoomMaster (Yield Management Services), NEED ERP and Counterpoint CP TIMS. ERP-integrated vendors such as NEED ERP and LinkSOFT already join POS and ledger. Local accountants do the rest by hand.

**The gap:**
Firms whose POS is accredited but whose ledger is separate (for example Xero) may lack an automated "TIMS vs. ledger vs. VAGST return" reconciliation. This is unverified.

**Possible product:**
A reconciliation dashboard that pulls POS or E-SDC fiscal-invoice exports and the ledger, flags gaps before the VAGST return is filed, and supports both Fiji VMS and Samoa TIMS.

**MVP:**
CSV import of fiscal-invoice journals from 2–3 accredited POS products, plus a Xero API connection, a variance report and a pre-filled VAGST return worksheet.

**Pricing hypothesis:**
About USD 20–40 per month per entity. Samoa alone could plausibly support only a few dozen paying firms (estimate).

**How to find first customers:**
- The list of accredited vendors on revenue.gov.ws, for partnerships
- Samoa Chamber of Commerce and Industry members
- The Samoa Institute of Accountants member list (existence assumed; unverified)

**Risks:**
- Accredited vendors could add the feature cheaply.
- Revenue's portal may already provide reconciliation views.
- The market is tiny.

**Kill condition:**
Kill the idea if accredited POS vendors already push data to Xero/MYOB, or if a Fiji-side interview round shows no reconciliation pain.

**Score:** 3/10

**Sources:**
- https://lookuptax.com/tax-changes/samoa/tims-enforcement-2026
- https://revenue.gov.ws/2025/05/07/notice-for-vendors-on-tims-upgrade/
- https://support.tims.revenue.gov.ws/
- https://revenue.gov.ws/2022/08/24/tims-unlicensed-pos-supplier/
- https://fiscobridge.com/blog/read/5/fiji-samoa-pos-migration-to-v3-compliance-frcs-vms-tims
- https://infinityrms.com/blog-feed/2020/09/17/infinity-is-now-accredited-for-samoas-new-tax-invoice-monitoring-system/

## Rejected after competitor research

- **TIMS compliance POS / E-SDC for SMEs:** this was killed by the 7+ accredited vendors. FiscoBridge Cloud POS and E-SDC already targets Fiji and Samoa together, and Infinity RMS, LinkSOFT, NEED ERP, CP TIMS and BlueCash compete as well. Vendor accreditation through the Ministry's Developer Portal is a further barrier. Sources: https://revenue.gov.ws/2025/05/07/notice-for-vendors-on-tims-upgrade/, https://fiscobridge.com/blog/read/1/do-you-need-a-powerful-software-for-your-pos-devices-heres-the-best-solution
- **Customs declaration tooling for brokers:** this was killed by ASYCUDA World, the UNCTAD system that the government owns and operates. It has donor-funded capacity building to 2027, and Samoa's single-window deadline is 2040. Sources: https://tfadatabase.org/en/members/samoa/pdf, https://www.dfat.gov.au/news/customs-revenues-pacific-grow-thanks-major-tech-boost

## Attractive problem, poor distribution

- **Agricultural export compliance packs** (farm registration, export licence per destination, treatment and phytosanitary certificates): the workflow is mandatory, but MAF handles it government to government by email or in person. There are very few commercial exporters, and biosecurity and finance are cited as their main obstacles, not paperwork tooling. Sources: https://maf.gov.ws/biosecurity/, https://maf.gov.ws/wp-content/uploads/2025/09/A1-POSTER-EXPORTING.pdf, https://www.samoaobserver.ws/category/article/58146, https://samoa.tradeportal.org/procedure/16?l=en

## Too competitive

- TIMS fiscal POS / E-SDC (see above).

## Add-on note

Samoa is best served as an add-on to a **Fiji** product. Fiji's VMS and Samoa's TIMS follow the same fiscalisation architecture, as FiscoBridge's combined migration guide shows. Any Pacific fiscal or accounting reconciliation idea should be validated in Fiji first.
