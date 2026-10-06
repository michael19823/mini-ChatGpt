# Competitor: Odoo l10n_gy_payroll (Guyana)

Idea it killed: C0391, payroll filing (GRA PAYE Form 2/5 CSV plus NIS schedules).

## Verdict: beatable

## Evidence
- An Odoo Apps listing exists, "l10n gy payroll" for Odoo 19.0 (https://apps.odoo.com/apps/modules/19.0/l10n_gy_payroll). Search snippets describe it as a Guyana payroll localization covering GRA PAYE and NIS for employees, employers and the self-employed. Snippets say it uses NIS 5.6% employee and 8.4% employer with an insurable-earnings ceiling. It is third-party, not part of Odoo's official localization list as far as the searches showed (unverified).
- No evidence found, in snippets, that it produces the GRA-prescribed upload file for Form 2/5 or an NIS schedule. This is unverified. The listing page was not readable (no WebFetch).
- The snippet quotes PAYE bands of 25%/35% "per GRA 2026 notice". Other sources in the same results say 28%/40%. The conflict is unresolved (unverified).
- GRA has relaunched online PAYE upload through eServices and published PAYE Return Guide v4.4 (https://gra.gov.gy/storage/2026/05/PAYE-Return-Guide-v4.4.pdf), so a prescribed upload format exists to target.
- Complaints: none found. No reviews, forum threads or news about failed filings surfaced in 3 searches. No local-language search was run, because Guyana's language is English.
- Momentum: the listing is for the current Odoo 19.0 branch. Actual release dates and maintenance cadence are unverified.

## Pricing
Not found. Unverified. Using it requires an Odoo instance (and likely Odoo Payroll, which is an Enterprise feature, unverified). That is heavy for a small Guyanese employer.

## Fit gaps
- Requires running or paying for Odoo, which is an ERP rather than a lightweight filing tool.
- Unconfirmed GRA upload-file and NIS schedule output.
- Not aimed at tax agents or accountants who file for many small clients (unverified).
- Offline and mobile use are unlikely to be strong (unverified).

## Opening
A standalone, cheap tool that outputs the GRA PAYE upload file and NIS schedule for small employers and accountants beats an Odoo-dependent module, provided the module does not already emit GRA's format (to be checked on the listing).
