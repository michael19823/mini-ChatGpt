# Odoo (Oman) - competitor check

Ideas it killed: C0728 (Oman payroll SPF/WPS/Omanisation), C0732 (Oman payroll WPS SIF/SPF)

## Verdict: strong

Odoo ships an official Oman payroll localization (WPS included), and third-party modules add WPS SIF, PASI and Omanisation fields at low one-time prices. Wide coverage of the idea's core features. Caveat: SPF (new Social Protection Fund) support is unverified.

## Evidence
- Odoo documentation lists an Oman payroll localization (module l10n_om_hr_payroll) covering salary rules, leave, end of service and WPS. Source: https://www.odoo.com/documentation/master/applications/hr/payroll/payroll_localizations/oman.html (seen via search snippet only).
- ECOSIRE sells a build-to-order "Oman Payroll (WPS, PASI)" module: WPS/SIF bank file, PASI contributions, gratuity, Omanisation tracking fields. Odoo 17/18/19, Enterprise and Community. https://ecosire.com/apps/odoo/odoo-oman-payroll
- Pokutsoft "l10n_om_wps_sif" on Odoo Apps: Central Bank of Oman WPS SIF file, PASI, gratuity, Oman IBAN validation; works on Odoo HR without Enterprise payroll (v18, v19). https://apps.odoo.com/apps/modules/19.0/l10n_om_wps_sif
- Complaints: none found. No app-store, Reddit, forum or news complaints surfaced for the Oman payroll modules (English and Arabic searches). Finding none is not proof of quality; the search tool is weak on forums.
- SPF: results mention PASI (the old scheme). The Social Protection Fund / Law (Royal Decrees 50/2023, 52/2023) was not confirmed in any Odoo module. Unverified whether modules are updated for SPF.

## Pricing
- ECOSIRE module: one-time license from $299 USD, 12 months updates and support (per its page).
- Odoo Enterprise (per third-party 2026 guides, not the official page): Online $24.90/user/month Standard, $37.40 Custom; self-hosted about $16/user/month annual. Payroll-specific price not found. Source: https://www.erpresearch.com/pricing/odoo, https://octurasolutions.com/resources/how-much-does-odoo-cost-per-month-2026
- Pokutsoft module price: not seen (unverified).
- Odoo is a full ERP; a small Omani firm needing only payroll pays for or implements much more, plus implementer fees.

## Fit gaps (mostly inferred)
- Full ERP setup and partner customization for a small firm needing only payroll/WPS (inferred).
- SPF rules and rates not confirmed as supported (unverified).
- Arabic-first, mobile or offline lightweight UX not evidenced.
- Third-party modules depend on small vendors for updates.

## Momentum
Active: modules available for Odoo 17-19 and the official Oman localization is in master docs. Not stagnant.

## Opening
Little: only a lightweight, Arabic-first, cheap payroll-only tool with verified SPF support could differentiate, against $299 modules and Odoo's official localization.
