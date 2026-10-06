# Odoo l10n_zm_payroll (Pokutsoft) - Zambia

Killed idea: C1161 (payroll statutory returns: PAYE/SDL, NAPSA, NHIMA, 2026 PAYE).

## Verdict: weak

A third-party $99 Odoo add-on that computes figures and a remittance summary. It does not file returns and needs an Odoo install.

## Evidence
- It is a third-party module by Pokutsoft on the Odoo Apps store, for Odoo 18 and 19 (Community and Enterprise). It is not an Odoo-official localization. https://apps.odoo.com/apps/modules/19.0/l10n_zm_payroll
- It computes PAYE on 2026 bands (0% to ZMW 5,100, then 20/30/37%), NAPSA at 5%+5% capped at ZMW 37,236, NHIMA and SDL. Bands are editable. https://apps.odoo.com/apps/modules/18.0/l10n_zm_payroll
- Output is a payroll register (CSV/Excel) and a remittance summary split by ZRA, NAPSA and NHIMA. The listing says the figures are filed by the user through ZRA TaxOnline, NAPSA and NHIMA with their own credentials. So there is no filing-format export or submission. This reading is from the listing text in search snippets.
- The listing tells users to confirm rates against official guidance before running live payroll.
- It is small: 828 lines of code, OPL-1 licence.
- Complaints: none found. No reviews of this module turned up in 5 searches, in English or against Zambian local sources. One search was meant for local-language terms, but Zambia's main business language is English and nothing relevant appeared. A general search turned up a claim that Odoo discourages payroll use in current versions. That is unverified and not specific to this module, and I have no URL I trust for it.
- Momentum: it exists for v18 and v19 with 2026 rates, so it is recent. Maintenance history and the number of installs are unverified.

## Pricing
- $99.00 (v19) and $98.57 (v18) one-time on the Odoo Apps store, per the listing. Odoo itself, hosting and an implementer are extra and unpriced here.

## Fit gaps
- Needs an Odoo instance with the HR app. This is heavy for a small employer or bureau.
- No direct filing to TaxOnline, NAPSA or NHIMA, and no ZRA return file format (unverified beyond the listing text).
- No mobile or offline use (unverified; Odoo is server-based).
- Whether it handles multiple employers (a bureau serving many clients) is unverified.

## Opening
A standalone, lightweight tool that produces ready-to-upload ZRA, NAPSA and NHIMA return files for small employers and bureaus, without an Odoo install.
