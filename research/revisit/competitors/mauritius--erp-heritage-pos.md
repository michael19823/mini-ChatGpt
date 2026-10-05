# ERP Heritage POS (Mauritius)

Idea it killed: C0607, MRA e-invoicing (EBS fiscalisation) for Phase 2/3 SMEs.
Searches used: 4 of 6 (English and French).

## Verdict: beatable

It is not a standalone product. It is a paid add-on for Odoo by the vendor "ERP Heritage", sold on the Odoo App Store. It works only for businesses already running Odoo, so it does not compete for the general SME buyer.

## Evidence
- The "Mauritius e-Invoicing POS" add-on (eh_l10n_mu_einvoice_pos) fiscalises each paid Odoo POS order with the MRA in real time. It captures the IRN and prints the MRA QR code on the receipt. It uses RSA and AES-256 encryption per the EBS technical guide. Source: https://apps.odoo.com/apps/modules/18.0/eh_l10n_mu_einvoice_pos
- It requires the companion "Mauritius e-Invoicing" module (eh_l10n_mu_einvoicing) and Odoo Point of Sale. The companion module fiscalises customer invoices on posting. Sources: https://apps.odoo.com/apps/modules/18.0/eh_l10n_mu_einvoicing and https://apps.odoo.com/apps/modules/17.0/eh_l10n_mu_einvoice_pos/
- Technically complete: it shares one EBS sequence between invoices and POS, and has a SHA-256 hash chain and an audit log. The only source is the vendor's own listing.
- Phase 2 (revenue over MUR 80m, FY2025-26) per EDICOM: https://edicomgroup.com/fr/facture-electronique/ile-maurice
- Complaints: none found. The searches returned no reviews, ratings, forum posts or news about outages or failed filings. No review data was visible in the results, so ratings are unverified. This is a valid result and not evidence of quality.
- Momentum: listings exist for Odoo versions 16 through 19, so it appears actively maintained. Release dates and the install base are unverified.

## Pricing
- POS add-on: USD 149, one-time (listing, via search snippet).
- Required e-Invoicing module: about USD 368 to 373, depending on the Odoo version.
- Combined: about USD 520 one-time. Odoo licences, hosting, and the implementation partner are extra and unquantified.
- That is cheap for the module, but the total cost of ownership for a small shop on Odoo is unverified.

## Fit gaps
- Only helps businesses on Odoo. Shops on other systems, spreadsheets or manual billing get nothing.
- Needs an Odoo implementation partner and setup, which is heavy for micro and small SMEs.
- No evidence of offline mode, a mobile or simple-app option, or a French or Creole interface.
- Not verified: whether it supports multi-entity setups, or whether it supports the MRA self-service or lighter filing routes.
- Sold as a code module. Support quality and SLA are unknown.

## Opening
A standalone, lightweight MRA e-invoicing tool for non-Odoo Phase 2/3 SMEs is not served by this add-on. It reaches only the Odoo niche, and no complaints were found to build on.
