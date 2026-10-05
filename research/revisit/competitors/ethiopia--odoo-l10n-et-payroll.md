# Odoo l10n_et_payroll (Ethiopia)

Dropped idea: C0297, Ethiopia payroll/PAYE + POESSA pension.
Searches used: 3 of 6 (English x2, Amharic x1). The Amharic search returned only irrelevant salary-survey pages.

## Verdict: weak

It is a $59 third-party add-on for Odoo, not an official Odoo localization. It needs an Odoo install and an Odoo admin, which a small Ethiopian employer is unlikely to have.

## Evidence
- The Odoo Apps listing for `l10n_et_payroll` (v18.0 and v19.0) shows the vendor as Pokutsoft, so it is third-party. Sources: https://apps.odoo.com/apps/modules/18.0/l10n_et_payroll , https://apps.odoo.com/apps/modules/19.0/l10n_et_payroll
- Features per the listing:
  - monthly employment income tax with 0/15/20/25/30/35% bands under Proclamation 1395/2025, and an ETB 2,000 exemption threshold;
  - pension under Proclamation 1268/2022: 7% employee and 11% employer, on basic salary, with an opt-out for non-pensionable staff;
  - transport-allowance exemption;
  - payroll register (CSV/Excel) and a remittance summary for the Ministry of Revenue and the pension fund.
- It runs on Odoo Community or Enterprise and has its own payslip models, so Enterprise payroll is not required.
- Complaints: none found. No reviews were found in the searches (I did not see any on the listing). Absence of reviews is not evidence of quality.
- Momentum: the module is current with the 2025 income-tax proclamation and has v18 and v19 builds, so it is recently maintained. Install base and update cadence are unverified.
- Other Ethiopia payroll options surfaced only as EOR/global-payroll vendors (Ontop, Multiplier, Mercans, Globalization Partners). Their pricing was not seen, and they are not tools for a small local employer.
- Not checked (search budget): Google Play and App Store, Reddit and Facebook groups, local forums.

## Pricing
$59.05 one-time on the Odoo Apps listing, per the search snippet (the listing page was not opened). Odoo hosting, implementation and an Odoo user subscription for the HR app are extra and unverified.

## Fit gaps
- It requires running Odoo, so there is no turnkey path for micro and small employers.
- The listing shows no payslips in Amharic and no mobile or offline use (unverified).
- No direct filing or e-filing format was mentioned, only CSV/Excel summaries.
- No multi-entity support was mentioned (unverified).
- No mention of other statutory items such as the Ethiopia pay-as-you-earn declaration form layouts or other POESSA/SSA report formats (unverified).

## Opening
A hosted, Amharic-capable PAYE and pension payroll tool for small Ethiopian employers is not served by an Odoo add-on that needs an Odoo install.
