# Odoo PNG payroll (papua-new-guinea)

Idea killed: C0757 (PNG payroll SWT and super). Searches used: 4 of 6 (English only; no PNG-local-language results expected, Tok Pisin/English are mixed and none surfaced).

## Verdict: beatable

It is a real, working product, but it is a third-party add-on for Odoo, not a standalone PNG payroll product. A small PNG employer would have to run Odoo (HR app) to use it.

## Evidence
- Listing on Odoo Apps store, module `l10n_pg_payroll`, for Odoo 18 and 19, Community and Enterprise: https://apps.odoo.com/apps/modules/18.0/l10n_pg_payroll and https://apps.odoo.com/apps/modules/19.0/l10n_pg_payroll
- Per the listing, it computes fortnightly SWT (26 fortnights; resident scale 0% to K20,000, then 30/35/40%, 42% above K250,000), and mandatory super (6% employee, 8.4% employer, Nasfund/Nambawan). It outputs a payroll register (CSV/Excel), per-employee SWT remittance schedule and a remittance summary by IRC and super fund. Handles no-declaration flat rate.
- Appears to come from developer Pokutsoft (search snippet attribution; the developer's other localisation modules are on the same store). Sibling modules exist: `l10n_pg_gst_invoice` (GST, Form G1) and `pg_public_holidays` (2026-2035). Momentum: actively built for current Odoo versions (18/19); a one-developer add-on, so unknown support depth.
- Complaints: none found. No reviews, ratings or forum threads surfaced in the searches. Absence may reflect a tiny user base.

## Pricing
- Price for the PNG module: unverified (not shown in search results).
- For reference, the same developer's other payroll modules list at about US$63 to US$217 one-off (Lithuania $199, Angola about $216, France $62.80), so PNG is probably similar. This is inference only.
- Odoo itself is also needed (Community is free to self-host; hosting/Enterprise costs unverified).

## Fit gaps (mostly inferred from the listing; unverified in use)
- Requires an Odoo installation and someone to administer it; poor fit for micro and small PNG employers without IT.
- No mention of payslip e-delivery, mobile, offline use, or direct filing to IRC / fund portals; output is CSV/Excel schedules only.
- Super rule noted as for employers with 15 or more citizen employees; edge cases (smaller employers, voluntary super, training levy, leave, allowances) not confirmed.
- No evidence of local support in PNG.

## Opening
A standalone, lightweight, mobile-friendly PNG payroll/SWT/super tool with IRC and fund-ready filings and local support for small employers who will not run Odoo.
