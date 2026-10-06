# ERPNext PH Payroll (philippines) - dropped idea C0770: SSS/PhilHealth/Pag-IBIG remittance files

## Verdict: beatable

ERPNext core has no Philippine statutory deductions. The only PH payroll product found is a build-to-order add-on from a consultancy (ECOSIRE). Its listing describes remittance data and schedules, but not agency-format upload files (SSS R3, Pag-IBIG MCRF), so the filing-file gap looks open (unverified).

## Evidence
- ECOSIRE's page says ERPNext core Payroll has no concept of mandatory PH deductions, so SSS, PhilHealth, Pag-IBIG and BIR tables are kept in spreadsheets or brittle formulas. Source: https://ecosire.com/apps/erpnext/erpnext-philippines-payroll
- The same page lists SSS, PhilHealth and Pag-IBIG contribution automation, BIR withholding, 13th-month pay, per-agency remittance schedules, the BIR alphalist and 1601C, and remittance data via the Frappe REST API. It does not mention agency upload file formats (R3, MCRF, PhilHealth RF-1/ER2 files). Absence from a marketing page is not proof, so treat this as unverified.
- It is built to order per customer on a Frappe bench, with support after go-live. It is not a packaged self-serve product.
- No URL for an official ERPNext/Frappe PH localization was found.

## Complaints
None found. 4 searches (English plus a Tagalog term, "reklamo") returned only the ECOSIRE page in multiple language versions. No reviews, forum threads or Reddit posts surfaced. This is a valid null result, not evidence of satisfaction.

## Pricing
Indicative price from $249.00 USD, with a quoted proposal required (ECOSIRE page above). It targets ERPNext v15/v16. Customers also need to host and run ERPNext, so the real cost is higher. Whether it is overpriced for a small buyer is unverified.

## Fit gaps
- Needs an ERPNext/Frappe install, which is heavy for micro and small businesses.
- Custom-quoted and built to order, with no self-serve signup.
- No mention of agency-format remittance upload files (unverified).
- No mention of mobile or offline use, or of Filipino-language UI (unverified).

## Momentum
Unclear. Claims v15/v16 support, which suggests it is maintained, but the only source is a vendor marketing page. Momentum is unverified.

## Opening
A standalone, self-serve tool that outputs agency-ready SSS/PhilHealth/Pag-IBIG remittance files for small employers, without ERPNext hosting, is not served by this competitor.
