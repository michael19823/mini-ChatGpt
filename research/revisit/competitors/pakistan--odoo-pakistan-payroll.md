# Odoo Pakistan payroll (pakistan) - dropped idea C0736: EOBI/PESSI/SESSI contribution compliance

## Verdict: beatable

Searches used: 3 of 6 attempted (the first, an English query, failed on a usage-limit error; two returned results). No local-language (Urdu) search was completed, so that is a gap.

## Evidence
- A third-party add-on `l10n_pk_payroll` is listed on the Odoo Apps store for Odoo 18 and 19 (https://apps.odoo.com/apps/modules/19.0/l10n_pk_payroll, https://apps.odoo.com/apps/modules/18.0/l10n_pk_payroll). It is also listed on ecosire.com (https://ecosire.com/de/apps/odoo/odoo-pakistan-payroll).
- Per the listing text: it computes FBR income-tax withholding, EOBI (employer and employee shares on a minimum-wage-capped amount) and provincial social security (PESSI Punjab, SESSI Sindh, and equivalents for KPK/Balochistan). It also covers gratuity accrual and provident fund. It produces a payroll register (CSV/Excel) and a remittance summary split by FBR, EOBI and ESSI.
- Rates and ceilings are said to be configurable settings. It claims no Enterprise payroll is needed (Community and Enterprise).
- Odoo has no official Pakistan payroll localization in what I found. Partners such as Synavos and Metasoftec implement Odoo in Pakistan (https://www.odoo.com/partners/synavos-solutions-13284829, https://metasoftec.odoo.com/portfolio).
- Complaints: none found. No reviews of the module or of Odoo Pakistan payroll appeared in the search results. This is not proof that none exist.
- Momentum: the module is updated for FY2025-26 slabs and Odoo 19, so it appears actively maintained. Maintainer identity and update cadence are unverified.

## Pricing
- Listed at $119.00 (one-off, per the search snippet; license terms and support terms unverified). Odoo itself requires its own subscription or hosting, and partner implementation costs were not found.

## Fit gaps (inferred from listing, not tested)
- It is a computation and reporting add-on inside an ERP. The listing says nothing about generating EOBI or PESSI/SESSI portal filing files, challan or payment flows, or employee registration and contribution reconciliation (unverified).
- It requires Odoo, so it does not suit small firms that want a standalone compliance tool.
- No mention of Urdu UI, mobile or offline use, or multi-entity handling.

## Opening
Small Pakistani employers without Odoo, and anyone needing actual EOBI/PESSI/SESSI portal filing and reconciliation rather than a payroll calculation, are left unserved.
