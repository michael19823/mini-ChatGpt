# Lebanon: Indie Software Opportunity Research

*Research date: 2026-10-05. Budget: 10 web searches (small, crisis-affected market). WebFetch not used.*

## Bottom line

Lebanon is **accessible but structurally weak** for a foreign solo founder. There are no comprehensive US, EU or UK sanctions on Lebanon. US/EU designations target Hezbollah-linked persons and entities (general knowledge, not re-verified here), so every customer must be screened. Lebanon has been on the FATF grey list since October 2024 and was kept there in June 2026 ([BLOMInvest](https://blog.blominvestbank.com/wp-content/uploads/2026/07/Financial-Action-Task-Force-Retains-Lebanon-on-its-Grey-List.pdf), [Al-Modon](https://www.almodon.com/economy/2026/06/21/%D9%84%D8%A8%D9%86%D8%A7%D9%86-%D9%88%D8%A7%D9%84%D9%84%D8%A7%D8%A6%D8%AD%D8%A9-%D8%A7%D9%84%D8%B1%D9%85%D8%A7%D8%AF%D9%8A%D8%A9-%D8%A7%D9%84%D8%AA%D8%B5%D9%86%D9%8A%D9%81-%D8%A8%D8%A7%D9%82-%D8%AD%D8%AA%D9%89-%D8%A5%D8%B4%D8%B9%D8%A7%D8%B1-%D8%A2%D8%AE%D8%B1)). Payment rails are poor:
- Stripe and PayPal do not serve Lebanese merchants.
- Tap Payments no longer accepts new Lebanese merchants ([Dodo Payments](https://dodopayments.com/blogs/tap-payments-alternatives), [Executive Magazine](https://www.executive-magazine.com/?p=38363)).
- The economy is largely cash-based in USD.

Collecting from Lebanese SMEs is possible: they can pay with "fresh" USD cards or through a local reseller. But it adds friction.

The one real regulatory trigger is **mandatory monthly electronic stamp-duty declarations (Form G20 with payment advice S17)**. These have applied to every issuer of invoices and receipts since August 2025 and were confirmed in the 2026 Budget Law. But Odoo add-ons and local accounting packages already serve it partly, and willingness to pay is low. **No opportunity scored 6 or more. Lebanon is not recommended as a standalone market.** The ideas below are best seen as possible add-ons for a product built for the wider Levant or GCC, run through Lebanese accounting firms.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Accounting firms / all invoice-issuing SMEs | Monthly G20 stamp-duty e-declaration + S17 payment, reconciled with quarterly VAT | Weak opportunity (4/10) | Real new mandatory monthly duty (24,118 online filings by Nov 2025), but Odoo module + licensed stamping machines + local packages cover it; low WTP |
| Payroll bureaus / employers | MoF payroll tax (R-forms) + NSSF monthly contributions with LBP ceilings that keep changing | Rejected – too competitive | IDS "Libra Salary Declaration" and "Payroll Junior" do exactly this; many local payroll packages |
| Real estate brokers, jewelers (DNFBPs) | AML record-keeping, CDD, suspicious-transaction reports to the SIC under grey-list pressure | Weak opportunity (4/10) | Real pressure from FATF, but enforcement on DNFBPs is weak and buyers pay little; generic AML vendors cover Lebanon |
| Pharmacies | MediTrack (GS1 2D barcode) traceability enrolment and dispensing records | Attractive problem, poor distribution (3/10) | Joining is voluntary-ish (Resolution 264/2025); unclear whether a third party can get API access; government system is free |
| Customs brokers / freight forwarders | NAJM customs declarations + Economy Ministry import pre-declaration platform | Rejected | Government systems plus a broker-led, relationship-driven trade; no evidence of a portal a vendor can reach |
| E-invoicing (general) | B2B/B2G e-invoice mandate | Rejected – no trigger | Lebanon has no mandatory general e-invoicing regime as of 2026 |

## Opportunities

### Opportunity: Monthly stamp-duty (G20/S17) declaration builder for accounting firms

**Industry:**  
Accounting and bookkeeping firms serving Lebanese SMEs (retail, services, distributors).

**Buyer:**  
Owner or tax manager of a small Lebanese accounting firm filing for 20–200 client companies. Second buyer: the finance manager of a mid-size SME that issues many invoices and receipts each month.

**Trigger / Why now:**  
MoF Notification 2665/1 (1 Aug 2025) made the G20 stamp-duty declaration and S17 payment advice electronic-only. The 2026 Budget Law confirmed that every taxpayer issuing invoices, receipts, debit notes or credit notes must pay the fixed fiscal stamp monthly and file an electronic declaration within 15 days of month-end. The only exemption is for users of MoF-licensed stamping machines. By 5 Nov 2025, 24,118 declarations had been filed online. MoF keeps issuing deadline extensions, for example Decision 427/1 for March 2026, which points to friction in the process.

**Current workflow:**  
1. The client sends its invoice and receipt registers (Excel, export from a local package, or paper books) to the accountant each month.
2. The accountant counts documents by type and value band, then calculates the fixed stamp amounts. The Lebanese stamp regime mixes fixed and proportional duties.
3. The accountant re-keys the totals into the MoF e-declaration form (G20), produces the S17 payment advice, and the client pays at a bank or OMT.
4. The same invoice data is re-keyed again for the quarterly VAT return. Mismatches are reconciled by hand.

**Pain:**  
- A new monthly duty for every invoicing business.
- Repeated deadline extensions point to friction (inference, not direct complaint evidence).
- The duty multiplies across each client of an accounting firm.
- No direct user complaints were found. Pain is inferred from how the obligation is designed.

**Existing solutions:**  
- Odoo App Store module `azk_fiscal_stamp` (v17–19), which numbers stamp sequences and generates the S17 declaration PDF.
- MoF-licensed stamping machines.
- Local accounting packages. IDS (Libra) is confirmed for payroll; whether it covers G20 is unverified.
- Accounting firms such as Forvis Mazars Lebanon and ALDIC, which file manually and publish compliance alerts.

**The gap:**  
Firms not on Odoo still have no multi-client batch tool that turns heterogeneous client invoice exports into G20 totals and cross-checks them with VAT. This is a hypothesis to test in interviews.

**Possible product:**  
A web tool where an accountant uploads each client's monthly invoice or receipt export. It classifies documents, computes stamp duty, outputs data ready for G20 entry or a completed form, and flags mismatches against VAT sales for the quarter.

**MVP:**  
- CSV/Excel import mapper for 3–4 common local package exports.
- Stamp-duty calculator.
- Printable G20 worksheet.
- Multi-client deadline dashboard.

**Pricing hypothesis:**  
$30–80/month per accounting firm, or about $2–4 per client company per month. Lebanese WTP is low.

**How to find first customers:**  
- LACPA (Lebanese Association of Certified Public Accountants) member directory.
- Accounting firms publishing MoF alerts (ALDIC, Forvis Mazars LB and similar).
- LinkedIn and Facebook groups of Lebanese accountants.

**Risks:**  
- MoF may add bulk upload or change the form.
- Odoo and local vendors will add the feature.
- Payment collection is hard.
- The rules are simple enough to handle in Excel.

**Kill condition:**  
Interviews show that the main local packages already export G20 totals, or that accountants spend under 1 hour per client per month on it.

**Score:** 4/10

**Sources:**  
- https://www.aldic.net/mof-notification-2665-on-electronic-declaration-of-stamp-duty/
- https://economics.creditlibanais.com/Article/213139
- https://www.forvismazars.com/lb/en/content/download/1292212/file/Alert%2021-2026%20-%20Q1%202026-%20R10%20and%20March%202026%20stamp%20duty%20postponement%20.pdf
- https://apps.odoo.com/apps/modules/19.0/azk_fiscal_stamp
- https://taxsummaries.pwc.com/lebanon/corporate/other-taxes
- https://trykintsugi.com/sales-tax-guides/middle-east/lebanon

### Opportunity: Grey-list AML compliance kit for real estate brokers and jewelers

**Industry:**  
Real estate brokerage, and dealers in precious metals and stones. These are DNFBPs (designated non-financial businesses and professions) under AML rules.

**Buyer:**  
Owner of a small real estate agency or jewelry shop. Possibly the syndicates (Real Estate Brokers Syndicate, Jewelers Syndicate) as group buyers.

**Trigger / Why now:**  
FATF grey-listed Lebanon in Oct 2024 and kept it there in June 2026. Weak DNFBP risk understanding and weak sanctions were named as unmet action items. The SIC trains jewelers' syndicates and money dealers on record-keeping and reporting STRs (suspicious-transaction reports).

**Current workflow:**  
1. The business takes paper copies of client IDs.
2. It may or may not keep a ledger of transactions above the SIC threshold.
3. It rarely or never files an STR.
4. It has no documented risk assessment.

**Pain:**  
- Regulatory pressure exists, but enforcement on DNFBPs is weak, which is the very reason Lebanon is grey-listed.
- Pain will be low until the SIC or ministries inspect and sanction.

**Existing solutions:**  
- Sanction Scanner and AML Watcher (generic screening, both cover Lebanon).
- Local AML consultants and law firms.
- Syndicate guidance documents.
- Excel.

**The gap:**  
A cheap, Arabic-first CDD record, threshold log and risk-assessment template tied to Lebanese SIC requirements. The gap only matters if enforcement starts.

**Possible product:**  
A mobile or web logbook: capture the client ID, record the transaction, screen against sanctions lists, and export an SIC-ready record and an annual risk-assessment document.

**MVP:**  
Arabic/French form plus PDF export plus UN/OFAC list screening.

**Pricing hypothesis:**  
$15–40/month per shop. Syndicate bulk deal possible.

**How to find first customers:**  
Real Estate Brokers Syndicate and Jewelers Syndicate member lists, and Beirut gold souk clusters.

**Risks:**  
- No enforcement.
- Cash-economy culture is hostile to recording.
- Political sensitivity.
- Low WTP.
- Sanctioned-party exposure for the vendor itself.

**Kill condition:**  
No inspection or sanction of a DNFBP by mid-2027, or the syndicates refuse to engage.

**Score:** 4/10

**Sources:**  
- https://blog.blominvestbank.com/wp-content/uploads/2026/07/Financial-Action-Task-Force-Retains-Lebanon-on-its-Grey-List.pdf
- https://nowlebanon.com/lebanons-measures-to-fight-illicit-finance-and-escape-fatf-grey-list/
- https://amlwatcher.com/our-coverage/lebanon/
- https://www.sanctionscanner.com/aml-guide/anti-money-laundering-aml-in-lebanon-1096
- https://ezine.eversheds-sutherland.com/global-aml-guide/lebanon
- https://www.annahar.com/lebanon/300254/ (Real Estate Brokers Syndicate statement)

### Opportunity: MediTrack bridge for community pharmacies

**Industry:**  
Community pharmacies.

**Buyer:**  
Pharmacy owner or pharmacist. There are roughly 3,000 pharmacies nationally (estimate, unverified).

**Trigger / Why now:**  
Minister's Resolution No. 264 (3 Feb 2025) regulates how pharmaceutical institutions work on MediTrack and opened registration to pharmacies. GS1 2D barcodes are already mandatory on packs. Today MediTrack covers about 200 drugstores, 60 hospitals and 180 pharmacies, mainly for subsidized catastrophic-illness drugs.

**Current workflow:**  
The pharmacy scans or keys dispensing data into MediTrack separately from its own POS or stock system.

**Pain:**  
Likely double entry, but this is unverified. No evidence that MediTrack offers an API to third parties.

**Existing solutions:**  
- MediTrack itself (free, government/WHO-backed).
- Local pharmacy POS vendors (not identified within the search budget).

**The gap:**  
Unknown. It depends on whether MediTrack accepts machine submissions.

**Possible product:**  
A POS-to-MediTrack sync, or a scan-once app that does both stock and MediTrack.

**MVP:**  
Not definable without access to the MediTrack interface.

**Pricing hypothesis:**  
$20–40/month per pharmacy.

**How to find first customers:**  
Order of Pharmacists of Lebanon member list, and the MoPH list of MediTrack-registered pharmacies.

**Risks:**  
- The government may forbid third-party integration.
- POS vendors will add it.
- Coverage is limited to subsidized drugs.

**Kill condition:**  
No API or bulk upload exists, or MediTrack stays limited to subsidized drugs.

**Score:** 3/10

**Sources:**  
- https://mophweb.intouchmena.com/en/Media/view/77994/invitation-to-pharmaceutical-institutions-to-join-meditrack-system
- https://www.lspedia.com/fr/regulation/lebanon

## Rejected after competitor research

- **Payroll tax and NSSF declarations.** These are real and recurring: NSSF contributions are 23.5% with LBP ceilings that keep changing, and the minimum wage is LBP 28M. Rejected because IDS's *Libra Salary Declaration* (MoF + NSSF) and *Payroll Junior* (official reports) already target exactly this, alongside EOR providers such as Playroll and RemotePass for foreign employers. Sources: https://libra.ids.com.lb/salary-declaration/, https://www.ids.com.lb/news/payroll-junior-released-standard-payroll-with-official-reports/
- **Customs and import documentation.** The government NAJM system plus the Economy Ministry's import pre-declaration platform, with a relationship-driven broker trade around them. There is no external portal access for a small vendor. Sources: https://trade.gov/country-commercial-guides/lebanon-customs-regulations, https://today.lorientlejour.com/article/1351425/beirut-port-goods-held-up-at-customs-due-to-technical-problem.html
- **E-invoicing readiness.** No mandatory general e-invoicing regime exists in Lebanon as of 2026, so there is no trigger. Source: https://trykintsugi.com/sales-tax-guides/middle-east/lebanon

## Attractive problem, poor distribution

- Pharmacy MediTrack integration: unclear API access, and the government tool is free.
- DNFBP AML compliance: mandatory on paper, but there is no enforcement and the sector culture is cash-based.

## Too competitive

- Payroll and NSSF declarations (IDS Libra and other local payroll packages).
- Stamp-duty sequencing for Odoo users (`azk_fiscal_stamp` module).

## Accessibility notes

- **Sanctions:** Lebanon is not comprehensively sanctioned. Targeted US/EU designations of Hezbollah-linked persons and entities require customer screening (not re-verified in this session).
- **FATF:** grey-listed since Oct 2024 and retained in June 2026. EU high-risk third-country listing is unverified here.
- **Payments:** Stripe and PayPal are unavailable to Lebanese merchants, and Tap Payments has stopped onboarding them. Buyers can pay foreign SaaS by fresh-USD card. Expect a cash or reseller channel.
