# Zimbabwe: ZIMRA-accredited fiscal-device, POS and ERP vendors

Idea killed: C1165, ZIMRA fiscalisation reconciliation (FDMS). No single URL; this is a class of vendors.

## Verdict: beatable

The vendors sell devices and POS or ERP connectors that submit receipts and close the fiscal day. I found no product aimed at reconciling FDMS records against the books. Complaints in the results are about device cost and rollout, not about reconciliation.

## Evidence
- ZIMRA news pages and a search summary list approved suppliers: Microwarehouse, Axis Solutions, Rumikon (Matrix Warehouse), Global Horizons, Fiscal Revenue Solutions (Aura Group), Fiscal Support Services, Just IT, and ZIMRA itself. https://zimra.co.zw/news/2307-compliance-with-the-zimra-fiscalisation-data-management-system-fdms. The official list is cited at zimra.co.zw (link not opened). The list may be outdated: unverified.
- FDMS requires a daily Z-report. ZIMRA closes the fiscal day only if the report matches its records and the transaction sequences have no gaps. The vendor side therefore has a basic built-in check, but only for submission and day close. Source: search summary of ZIMRA/fiscal-requirements pages.
- Accounting and ERP integrations exist: an Odoo module (apps.odoo.com l10n_zw_fdms_fiscalisation, listed at $118.02), Python libraries on PyPI (zimra, fiscguy), Fiverr freelancers offering FDMS API integration, and a Manager.io forum thread on fiscalisation options. These cover issuing and submitting receipts. I saw no reconciliation tooling.
- Virtual fiscal device (API) route: TechCabal (May 2025) covers Roundihmp, a $10/month mobile tool for ZIMRA-compliant receipts. https://techcabal.com/?p=157643
- Complaints found (news, not app-store reviews):
  - Businesses complained about high device cost and a lack of competition (NewsDay / Nehanda Radio, 2022 article "companies squeal as zimra brings another gadget").
  - Executives said ZIMRA rushed the new system without proper testing (NewsDay, "Local firms slam Zimra's new tax system").
- No app-store, G2, Capterra, Trustpilot or Reddit reviews of these vendors were found. No complaints about reconciliation specifically were found. Local-language (Shona/Ndebele) searches were not run: the 6-search budget went to English queries, and ZIMRA business is conducted in English.

## Pricing
- Hardware fiscal devices: reported US$500 each (FER, 2022), US$500-800 (ESD), up to about US$1,000 per machine, plus US$200-300 setup (TechCabal). Older reports cite $1,200-1,700. Figures are from news and not from vendor price lists. Treat them as unverified.
- Software: Roundihmp at $10/month; Odoo FDMS module at $118.02.
- Reconciliation add-ons: no published price found.

## Fit gaps
- Vendors target issuing and submitting receipts, not reconciling FDMS data against the ledger, bank or POS totals.
- Hardware dependence and cost hurt small buyers.
- Multi-currency (USD/ZiG) and multi-branch reconciliation: no evidence either way (unverified).
- Reconciliation troubleshooting is handled by contacting the supplier or ZIMRA (search summary, thin evidence).

## Opening
A cheap software-only layer that reconciles FDMS-submitted receipts and Z-reports with the books and POS totals appears unserved, but vendors could add it as a feature.
