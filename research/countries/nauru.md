# Nauru: country research

**Bottom line: there is no viable standalone indie SaaS opportunity in Nauru.** The population is about 12,000 (2025). The formal economy runs mainly on government, the Regional Processing Centre (RPC), fishing-licence rents (PNA Vessel Day Scheme) and, since January 2025, a citizenship-by-investment programme. Private businesses number in the low hundreds at most (estimate, unverified; no business registry count found). Every recurring compliance workflow found has a buyer pool that is too small to support a product, or is handled by a government system or regional body. The best route is to serve Nauru as an add-on to a Pacific-wide product (Australia/Fiji/PNG-anchored), not to sell to it directly.

Research budget: microstate, 4 web searches used (the cap).

## Accessibility check

- **Sanctions:** none relevant. Nauru is not under US/EU/UK sanctions.
- **Banking/payment rails:** these are fragile. Bendigo Bank's agency, for years the only bank, delayed its exit to June 2025. Commonwealth Bank of Australia (CBA) is taking over under an Australia–Nauru treaty, and a Bank of China delegation had also explored stepping in. Card and online payments from local SMEs to a foreign SaaS vendor are therefore possible in principle but thin. Invoicing in AUD to a CBA account is the realistic channel. Sources: [Islands Business: Bendigo delays exit](https://islandsbusiness.com/?p=32657), [Treasury.gov.au: CBA to establish operations in Nauru](https://ministers.treasury.gov.au/ministers/jim-chalmers-2022/media-releases/commonwealth-bank-establish-operations-nauru), [Lowy Interpreter on treaty](https://www.lowyinstitute.org/the-interpreter/new-treaty-ties-nauru-australia-banks-security-telecommunications)
- **Verdict:** legally accessible, but commercially marginal.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Payroll / employers (incl. RPC contractors) | Monthly withholding of the Employment and Services Tax (EST): payer withholds tax and files Form A by the 15th of the next month; rates of 20% (non-RPC) and 30% (RPC) plus thresholds | Reject (market too small) | It is a real mandatory monthly task, but there are perhaps a few dozen to a few hundred employers. The big payers (government, RPC contractors) run Australian payroll systems or in-house finance. The rules are simple enough for a spreadsheet. |
| Accountants / tax compliance | Nauru Revenue Office Compliance Improvement Strategy (tax, superannuation, price-control rules) | Reject | There are no local accounting-firm clusters to sell to. Work is done in-house or by Australian/Fijian firms. |
| Customs brokers / importers | ASYCUDA declarations (Nauru adopted ASYCUDA in October 2023) | Reject | Very few importers. ASYCUDA is a UN-supplied government system. A broker-side helper would only be worth building region-wide (PACER+ ASYCUDA rollouts in Tonga, Cook Islands, Niue and others). |
| Fisheries | Vessel licensing and reporting under the PNA Vessel Day Scheme / FSM Arrangement | Reject | This is run by the PNA Office, the Pacific Islands Forum Fisheries Agency (FFA) and WCPFC with their own systems (e.g. FFA vessel registers). Buyers are foreign fleet operators, not Nauruan SMEs. |
| Citizenship by investment (ECRCP) | Applicant due diligence and document packages for licensed agents (programme launched 1 Jan 2025; minimum about USD 130k, promotional USD 90k until 30 Jun 2026) | Reject (too competitive / one-time) | The workflow happens once per applicant. Agents already use generic CBI/KYC platforms built for the Caribbean programmes. Volume is unproven. |
| Government vendors / donor-funded projects | Procurement and reporting to donors (Australia, ADB, World Bank) | Poor distribution | The work is spread across a handful of contractors who answer to donor-specific templates. There is no list of prospects and no scale. |

## Strongest opportunities

None meet the brief's bar. The only idea worth noting is an add-on, not a Nauru-specific product.

### Opportunity: Pacific microstate payroll-tax withholding add-on (Nauru EST module)

**Industry:**
Payroll / employers

**Buyer:**
Finance or payroll officer at an Australian or regional contractor with staff on Nauru (RPC services, construction, port projects), or at a Nauru state-owned enterprise.

**Trigger / Why now:**
- The 2024–25 EST rules split rates by RPC vs non-RPC employment and by resident/non-resident status, which adds threshold complexity.
- The Nauru Revenue Office runs an active compliance strategy.
- The bank migration from Bendigo to CBA in 2025 changes the payment channel for remittances.

**Current workflow:**
1. Run payroll in an Australian system (Xero, MYOB, KeyPay/Employment Hero) or a spreadsheet.
2. Manually calculate EST by category (RPC 30%, non-RPC 20%, resident thresholds, the $20k government-contract threshold).
3. Fill in the Monthly Withholding Tax Return (Form A) PDF.
4. Pay the Nauru Revenue Office by the 15th of the following month.

**Pain:**
The return is a mandatory monthly PDF form, and the rate categories are unusual enough that mainstream payroll software does not support Nauru. Evidence of real complaints was not found (unverified).

**Existing solutions:**
- Spreadsheets
- Employer of record (EOR) providers (Rivermate, Expanship and others publish Nauru guides)
- In-house finance teams
- Australian payroll firms working manually

**The gap:**
- No payroll tool calculates Nauru EST or produces Form A (not exhaustively verified).
- The same gap probably exists for other Pacific microstates: Tuvalu, Kiribati, Marshall Islands and others (unverified).

**Possible product:**
A multi-country Pacific payroll-tax "localisation pack". It takes a payroll export from Xero/Employment Hero and produces the local withholding returns for Nauru, Tuvalu, Kiribati and similar states.

**MVP:**
- Upload a CSV and get the Nauru EST calculation plus a pre-filled Form A PDF.

**Pricing hypothesis:**
AUD 30–100 per employer per month. Nauru alone would mean tens of customers at most, which is a few hundred to a few thousand AUD a month. That is not viable unless other countries are added.

**How to find first customers:**
- Lists of RPC service contractors (Australian Home Affairs contract notices on AusTender)
- Nauru state-owned enterprises
- EOR firms serving the Pacific

**Risks:**
- The market is tiny.
- The Revenue Office could change the form or rates at any time.
- Large employers already handle this in-house.
- RPC contracts depend on Australian policy.

**Kill condition:**
- Fewer than about 10 Nauru employers outside government, or
- No equivalent gap in at least 4–5 other Pacific jurisdictions.

**Score:** 2/10 (as a Nauru standalone); this is only worth revisiting as one module of a Pacific-wide payroll-localisation product.

**Sources:**
- [NRO Q&A: Employment and Services Tax 2024–2025](https://naurufinance.info/wp-content/uploads/2024/06/QA-Employment-and-Services-Tax-2024-2025-1.pdf)
- [Monthly Withholding Tax Return Form A](https://naurufinance.info/wp-content/uploads/2024/06/Monthly-Withholding-FORM-A-20-1.pdf)
- [Nauru Revenue Office](https://naurufinance.info/nauru-revenue-office/)
- [Rivermate Nauru tax guide](https://www.rivermate.com/guides/nauru/taxes)
- [Nauru Government Gazette 2025/155](https://pacliirms.paclii.org/nr/other/NRGovGaz/2025/155.pdf)

## Rejected after competitor research

- **Customs declaration helper:** killed by ASYCUDA, the UN-supplied government system (in use since October 2023), and by tiny import volume. Source: [nauru.asycuda.org](https://nauru.asycuda.org)
- **Fisheries licensing / reporting tool:** killed by the PNA Office, FFA and WCPFC systems. The buyers are foreign fleets, not local businesses. Sources: [WCPFC](https://meetings.wcpfc.int/file/17648/download), [Tuna Pacific VDS](https://tunapacific.ffa.int/?p=1222)
- **CBI applicant due-diligence workflow:** killed by existing CBI/KYC tooling that agents already use for Caribbean programmes, the one-time nature of each case and unproven volume. Sources: [APIBC on ECRCP](https://apibc.org.au/2026/nauru-looks-to-citizenship-programme-as-new-pillar-of-economic-growth/), [Nomad Watch ECRCP](https://nomad.watch/visas/citizenship/nauru-cbi-ecrcp)

## Attractive problem, poor distribution

- **Donor-funded project reporting:** the pain is real, but there are only a handful of contractors and every template is donor-specific.
- **Nauru EST payroll compliance (standalone):** see the scored opportunity above.

## Too competitive

- **CBI agent tooling:** it is a global category with incumbents.

## Note for regional aggregation

Nauru should be bundled into a Pacific-islands product line if one emerges from the Fiji, PNG or Australia research. Two candidates are payroll-tax localisation, and ASYCUDA broker tooling across the PACER+ rollouts (Tonga, Cook Islands, Niue). Source: [tonga.asycuda.org](https://tonga.asycuda.org)
