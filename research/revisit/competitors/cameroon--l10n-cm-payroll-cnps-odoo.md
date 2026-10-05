# l10n_cm_payroll_cnps (Odoo module, "Cameroon CNPS Payroll") - Cameroon

Dropped idea: C0165, generating the CNPS and DGI monthly DIPE (payroll declarations).

## Verdict: strong

It does exactly what C0165 describes, is cheap, and is on current Odoo versions. Its limit is that it only reaches buyers who already run Odoo.

## Evidence
- The module is listed on the Odoo App Store for 18.0 and 19.0 (search results also showed a 16.0/17.0 listing). Source: https://apps.odoo.com/apps/modules/19.0/l10n_cm_payroll_cnps and https://apps.odoo.com/apps/modules/18.0/l10n_cm_payroll_cnps
- The search summary of the listing says it handles IRPP and CAC income tax, CNPS social security, CFC/FNE/TDL, and has its own payslip engine with editable IRPP bands and TDL brackets. It has no Odoo Enterprise dependency.
- The same summary says it generates the CNPS social-security DIPE and the DGI monthly salary-tax DIPE as upload-ready files. It also produces a CSV/Excel payroll register and a remittance summary split by collecting body.
- Filing is done by the user on the CNPS e-services and DGI portals with their own credentials. It does not file for them.
- A separate, older competing module, "Cameroun payroll / Paie Cameroun" by paiesoft (hr_payroll_cameroun, 14.0 to 17.0), needs Odoo Enterprise. It claims CNPS 2023 compliance, DIPE magnetic file generation and CNPS tele-declaration. Source: https://apps.odoo.com/apps/modules/17.0/hr_payroll_cameroun
- Complaints: none found. I found no customer reviews, ratings or forum complaints about either module in 5 searches (English and French). Absence of reviews may mean few users, not satisfied users. The App Store listing's own rating or review count was not visible in the results (unverified).
- Context: the CNPS site accepts DIPE by manual entry or by upload from payroll software. Source: https://kamerpower.com/fr/cnps-teledeclaration-cameroun-www-cnps-cm
- Momentum: the module targets Odoo 18 and 19, so it is current. Vendor name appears as Pokutsoft in the search summary; this was not verified.

## Pricing
- Cameroon CNPS Payroll (18.0/19.0): USD 249.00, as reported in search results from the App Store listing. Whether it is one-time or per-year was not stated (unverified).
- paiesoft Cameroun payroll: USD 853.04 (16.0 "Pro") and USD 1,025.01 (17.0), as reported in search results. It needs Odoo Enterprise, which is a separate recurring cost (price not checked).
- The 249 USD module is affordable for a small buyer. The real cost is Odoo itself and the setup effort.

## Fit gaps
- Only useful to companies that run Odoo, or will adopt Odoo, for payroll. Accountants and small firms using Excel or other payroll tools get nothing.
- It generates files only. The user still uploads them manually to the CNPS and DGI portals, so there is no filing, status tracking or error-correction loop.
- Possible gaps for a multi-client accountant workflow, mobile or offline use, and portal-rejection handling. I found no source confirming or denying these (unverified).
- Not verified: whether the file formats still match the current CNPS and DGI portal specifications.

## Opening
A standalone, non-Odoo DIPE tool for accountants and small employers (import from Excel, validate against portal rules, multi-client) is still open. A small Odoo user is already well served for about USD 249.
