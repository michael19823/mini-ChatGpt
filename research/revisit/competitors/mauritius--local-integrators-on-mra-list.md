# Mauritius: local integrators on the MRA EBS solution-provider list

Killed idea: C0609, MRA e-invoicing / fiscalisation connectors.
Competitor type: commercial (a group of providers, no single URL). 5 of 6 searches used.

## Verdict: beatable

The MRA publishes a list of self-certified EBS solution providers. That is a real, crowded channel,
but it is made up of ERP resellers and small module vendors. I found no direct complaints, so
"beatable" rests on market structure and not on customer evidence.

## Evidence
- MRA's own PDF lists EBS solution providers that self-certify compliance, dated 19 Apr 2024.
  Names seen in the search summary:
  - Smartsoft (ABS)
  - Streak Technologies (ebsmauritius.com, web invoicing)
  - Cybernaptics (Dynamics 365 Business Central)
  - SAV Consulting (Sage Evolution)
  - SSL Consulting Services (Odoo)
  Source: https://mra.mu/download/eInvoicing/EBSSolutionProviders.pdf (the list may have changed since).
- Odoo modules for the MRA EBS exist on apps.odoo.com (Pokutsoft, ERP Heritage). These are
  connector-type products, so the connector space is already contested.
  https://apps.odoo.com/apps/modules/18.0/l10n_mu_ebs_einvoice
- A vendor blog (webtel.in, so marketing and not neutral) says most e-invoicing solutions are built into heavy accounting
  software for large corporates, leaving SMEs "too basic or too complicated". It also warns that cheap
  invoicing tools that are only VAT-compliant may not be EBS-compliant later.
  https://webtel.in/Blog/what-to-look-for-in-a-mauritian-e-invoicing-solution-for-your-erp-or-accounting-system/3455
- Rollout (per Comarch/lookuptax summaries): phase 1 (turnover over Rs 100m) from 15 May 2024; over
  Rs 80m from 30 Jun 2026; Medium and Small Taxpayer Department operators over Rs 40m from 1 Sep 2026.
  The wave of smaller firms arrives now, which is the demand an integrator or connector would serve.
  https://lookuptax.com/tax-changes/mauritius/einvoicing-phase3-mur40m-2026
- Complaints: none found (app stores, forums, news). Finding none may reflect weak search coverage of
  Mauritian sources (US-only search; French/Creole forums not surfaced). Unverified either way.
- Momentum: the vendors appear active (Odoo modules for v16 to v19), but no firm-level data found.

## Pricing
- Only Odoo module prices were seen: about USD 218 (Pokutsoft) and USD 367.81 (ERP Heritage), one-off, from
  the apps.odoo.com listings as summarised by search. The Odoo-side cost excludes the ERP itself.
- Other integrators' prices: unverified (not published in what I found). ebsmauritius.com subscription
  price: unverified.

## Fit gaps
- Providers are ERP-centric (Business Central, Sage, Odoo). A business on a different, local or legacy
  billing tool, or on spreadsheets, has fewer options (inferred from the list, not proven).
- Vendor marketing claims an SME gap between basic and heavy tools. Unverified by independent customers.
- Self-certification means MRA does not vouch for quality. That could cause integration defects, but I found no reports.

## Opening
A lightweight, fixed-price EBS connector for small firms on non-mainstream billing tools, timed to the
Rs 40m wave (1 Sep 2026), is plausible. Entrenched ERP resellers hold the larger accounts. Validate
demand and price with real prospects before building.
