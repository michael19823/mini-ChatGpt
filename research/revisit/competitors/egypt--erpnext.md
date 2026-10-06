# ERPNext (Egypt) - competitor check for C0272 (Egypt HR/payroll)

## Verdict: beatable

ERPNext core has no Egypt payroll; it is a generic ERP that needs a paid third-party add-on plus an implementer. Fit for a small Egyptian HR/payroll buyer is poor out of the box.

## Evidence
- Core ERPNext ships a generic Salary Structure / Salary Slip engine and does not know Egypt's progressive income-tax brackets, annual exemption, or employer/employee social-insurance split against a capped insurable wage. Source: ECOSIRE product page, https://ecosire.com/apps/erpnext/erpnext-egypt-payroll (vendor marketing text, so it is partly self-serving).
- The same page says teams end up with side spreadsheets and hand-keyed deductions, and that Arabic payslips and local authority report layouts are not available out of the box.
- An Egypt payroll and social insurance app exists only as a paid third-party add-on from ECOSIRE (tax brackets, insurance contributions, end-of-service settlement, Arabic payslips). It is scoped by a call, not an off-the-shelf download; typical delivery is stated as 2-4 weeks.
- ERPNext core also lacks the Egyptian Tax Authority (ETA) e-invoice and e-receipt schema and signing; again ECOSIRE sells connectors. Source: https://ecosire.com/ar/apps/erpnext/erpnext-egypt-einvoicing-connector (vendor page).
- Complaints: none found. No app-store reviews, Reddit or Frappe forum threads, or Arabic-language posts about ERPNext Egypt payroll surfaced in 4 searches (English and Arabic). This is absence of evidence from a limited search, not proof of satisfaction.
- Momentum: ERPNext itself is actively developed (the add-on targets v15/v16, per the ECOSIRE page). Not verified beyond that.

## Pricing
- ERPNext software is open source and free. Egypt Payroll add-on: indicative "from $249 USD" per ECOSIRE, with custom quotes after scoping. Hosting, implementation and ongoing legal updates (tax and insurance rule changes) are extra and unpriced. Frappe Cloud hosting pricing: unverified.

## Fit gaps
- Requires implementer or technical staff (bench install, scoping call); not self-serve for a small firm.
- Statutory rules are encoded in a third-party add-on that must be kept current by that vendor.
- Generic ERP complexity is heavy for a small buyer who only wants payroll and HR.
- Mobile or offline use and WhatsApp-style workflows: unverified.

## Opening
A self-serve, Arabic-first Egypt payroll and social-insurance tool for small firms that works without an ERP implementer; ERPNext's only Egypt answer is a paid, implementer-dependent add-on.
