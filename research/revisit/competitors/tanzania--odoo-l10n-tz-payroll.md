# Odoo l10n_tz_payroll (Tanzania) - competitor check

Killed idea: C1008 Tanzania payroll statutory filings (PAYE, SDL, NSSF, WCF, HESLB).
Searches used: 4 of 6 (English and Swahili).

## Verdict: weak

A third-party computation add-on, not a filing product. It needs Odoo to run, and I found no sign of filing-format output, HESLB support or a user base.

## Evidence
- Listed on the Odoo Apps store as "l10n tz payroll" for Odoo 18.0 and 19.0, developed by Pokutsoft. It computes PAYE (TRA bands), NSSF 10%/10%, SDL and WCF per employee. It produces a payroll register (CSV/Excel) and a remittance summary split by TRA, NSSF and WCF. PAYE bands are an editable table.
  Sources: https://apps.odoo.com/apps/modules/18.0/l10n_tz_payroll , https://apps.odoo.com/apps/modules/19.0/l10n_tz_payroll
- It is built on Odoo's Human Resources app and does not need Enterprise payroll, so it runs on Community or Enterprise.
- The search results do not mention TRA/NSSF/WCF upload files or portal integration. The summaries are CSV/Excel only, so the user still files by hand (unverified beyond the listing summary).
- HESLB is not mentioned in the Odoo listing text I saw. One search summary credited HESLB handling to another vendor's page. Treat HESLB support in this module as unverified, probably absent.
- Complaints: I found no app-store reviews, forum threads, Reddit posts or outage/failed-filing news about this module. No complaints found; the module appears to have little public footprint.
- Other Tanzanian options surfaced: VVSD Payroll Package (https://vvsdtz.com/payroll-package), which claims reports for submission to TRA, NSSF and WCF. Enerpize, Hono and others also appeared. These were not assessed.

## Pricing
- $98.57 one-time on the Odoo Apps store, per the listing (versions 18.0/19.0).
- It requires an Odoo instance and the HR app. Odoo hosting or implementation cost is not included (unverified).

## Fit gaps
- Needs Odoo, so it is not a standalone tool for a small employer or accountant.
- No evidence of statutory filing formats (TRA portal, NSSF, WCF uploads); outputs are registers and summaries.
- HESLB deductions: not shown (unverified).
- No evidence of Swahili UI, mobile or offline use, or multi-employer use for accountants (unverified).
- Mainland only; Zanzibar is not covered.

## Momentum
Recent: it targets Odoo 18 and 19 and was published under the current versions. Small, single developer. The listing gave no reliable download or rating figures, so adoption is unverified.

## Opening
A standalone, Swahili-friendly payroll and filing tool for small Tanzanian employers and accountants that outputs TRA/NSSF/WCF/HESLB-ready files is not served by this Odoo add-on.
