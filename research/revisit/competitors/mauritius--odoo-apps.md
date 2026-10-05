# Mauritius: Odoo apps (MRA e-invoicing / fiscalisation connectors)

Idea killed: C0609 (MRA e-invoicing/fiscalisation connectors). 4 WebSearch calls used (English and French).

## Verdict: beatable (for non-Odoo users); strong within Odoo

Odoo-only add-ons are a real, shipping answer for Odoo users, but they only serve businesses already on Odoo. They do nothing for the many Mauritian SMEs on other accounting/POS software or on spreadsheets.

## Evidence
- ERP Heritage sells "Mauritius e-Invoicing" (eh_l10n_mu_einvoicing) for Odoo 16.0-19.0: real-time MRA fiscalisation, IRN captured, QR printed on invoice PDF. Companion POS module (eh_l10n_mu_einvoice_pos) for 16.0-19.0. Source: https://apps.odoo.com/apps/modules/18.0/eh_l10n_mu_einvoicing
- Pokutsoft sells "l10n_mu_ebs_einvoice" (Odoo 18.0, 19.0), plus l10n_mu_ebs_pos and l10n_mu_ebs_credit_note (credit notes referencing original IRN). Source: https://apps.odoo.com/apps/modules/19.0/l10n_mu_ebs_einvoice
- Versions up to 19.0 are listed, so both vendors are actively maintained.
- Complaints: none found. Searches for forum, Reddit and review complaints returned only official MRA/consultancy material. Marketplace review contents were not visible in the search results (unverified whether any reviews exist).
- Context: MRA e-invoicing is being rolled out in phases, starting with large taxpayers (revenue above MUR 100m). Sources: https://www.cleartax.com/mu/e-invoicing-mauritius , https://edicomgroup.com/fr/facture-electronique/ile-maurice

## Pricing (as shown in search snippets; may vary by version)
- ERP Heritage e-invoicing: about USD 367.81 to 372.52, one-time purchase.
- Pokutsoft EBS invoice: about USD 218.03 to 218.04.
- POS and credit-note modules are separate purchases; their prices were not seen (unverified).
- Odoo itself has its own subscription cost on top (not researched).

## Fit gaps
- Only usable on Odoo; nothing for other ERPs, accounting packages, custom billing systems or spreadsheets.
- Odoo requires a technical partner for setup and upgrades; a small buyer may find this heavy (inference, unverified).
- Modules are version-specific, so older Odoo versions may be unsupported (the Pokutsoft modules list only 18.0 and 19.0).
- No evidence found of support for non-Odoo POS hardware or an offline mode (unverified).

## Opening
A standalone, ERP-agnostic MRA EBS connector or small-business invoicing tool for the many Mauritian firms not on Odoo remains uncontested by these add-ons, and a one-time price of roughly USD 220-370 is the benchmark to undercut.
