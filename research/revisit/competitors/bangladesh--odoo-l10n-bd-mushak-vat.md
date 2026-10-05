# Odoo l10n_bd_mushak_vat (Pokutsoft) - Bangladesh

Dropped idea: C0081, NBR VAT management software (Mushak 6.3 invoicing, 6.1/6.2 registers, 9.1 return).

## Verdict: beatable

An Odoo add-on, not a standalone product. It covers the same forms as the idea, but only for firms that already run Odoo 18/19.

## Evidence
- Odoo Apps listing says it generates Mushak 6.3 invoice, 6.1/6.2 registers, 9.1 return, BIN validation, VAT rate buckets and Supplementary Duty. Versions 18.0 and 19.0 only. Source: https://apps.odoo.com/apps/modules/19.0/l10n_bd_mushak_vat
- A separate paid module from the same vendor does the 9.1 return and says it computes net VAT "exactly as the NBR IVAS portal does" (vendor claim, unverified). Source: https://apps.odoo.com/apps/modules/18.0/l10n_bd_vat_return_9_1
- Other Bangladesh VAT tools exist (ERPNext Mushak app at ecosire.com, Frappe "vat_compliance", iBOS "best VAT software in Bangladesh" page). I did not assess them here.
- Complaints: none found in 3 searches (English and Bengali). The listings show no reviews in the results I saw. This is a valid null result, not proof the product is good. Not searched: Facebook groups, Reddit, local forums.
- Momentum: listed for versions 18 and 19, so it is current. I could not verify release dates or the vendor's size.

## Pricing
- Listed at $118.01 for the Mushak VAT module (v19 page). The 9.1 return module is a separate listing at $79.00 (v18) / $79.06 (v19). Both are as shown in search snippets. Whether they are one-time or per-year was not stated: unverified.
- Odoo itself (licence or hosting, Odoo Online/Sh/on-prem), plus an implementer, is additional and was not researched: unverified.

## Fit gaps
- Needs an Odoo ERP, so it does not serve small shops or traders on spreadsheets or paper.
- Only Odoo 18/19, which excludes older Odoo installs.
- No evidence of direct submission to the NBR portal; it appears to produce figures and print forms: unverified.
- No evidence of a mobile or offline POS-style Mushak 6.3 workflow, or of Bengali-language UI: unverified.
- Multi-entity or multi-BIN support not stated.

## Opening
A standalone, lightweight, Bengali-first Mushak 6.3/9.1 tool for small VAT-registered businesses that do not run Odoo.
