# Pokutsoft Odoo module (Mauritius EBS Invoice / EBS POS)

Idea revisited: C0607, MRA e-invoicing (EBS fiscalisation) for Phase 2/3 SMEs.

## Verdict: beatable

It is a real, live Odoo add-on, but it only helps firms already running Odoo 18 or 19. It is not a standalone product for the wider SME segment. A second Odoo module (ERP Heritage) competes with it directly.

## Evidence
- Pokutsoft lists "Mauritius EBS Invoice" (technical name l10n_mu_ebs_einvoice) on apps.odoo.com for Odoo 18.0 and 19.0. It sends each customer invoice to the MRA EBS when posted and returns an IRN and QR code. A setup wizard captures BRN/TAN. It is bring-your-own-key: the user supplies their own MRA EBS credentials and signing key. Sources: https://apps.odoo.com/apps/modules/19.0/l10n_mu_ebs_einvoice , https://apps.odoo.com/apps/modules/18.0/l10n_mu_ebs_einvoice
- A separate "Mauritius EBS POS" module covers B2C retail receipts: https://apps.odoo.com/apps/modules/19.0/l10n_mu_ebs_pos
- Competing Odoo modules exist from ERP Heritage ("eh_l10n_mu_einvoicing", Odoo 16 to 19, plus a POS module). Source: https://apps.odoo.com/apps/modules/18.0/eh_l10n_mu_einvoicing
- Phasing (secondary sources): Phase 1 from 15 May 2024 for turnover above Rs100m. Phase 2 in FY2025-26 for turnover above Rs80m. Phase 3 (unconfirmed) for turnover Rs50m to Rs80m. Sources: https://edicomgroup.com/fr/facture-electronique/ile-maurice , https://www.mra.mu/e-invoicing
- Complaints: none found. The searches returned no reviews, ratings or outage reports for the Pokutsoft module. I could not read the apps.odoo.com review sections, so this does not show that no complaints exist.
- Momentum: the listing covers the two newest Odoo versions, which suggests it is current. Release dates and update history are unverified.

## Pricing
- EBS Invoice: $218.04. EBS POS: $109.02. Both are as shown in the search result summary, and it is unverified whether these are one-off or per-version prices.
- The module is only useful if the buyer already pays for Odoo. Odoo licensing cost is not included in these prices.

## Fit gaps
- It requires Odoo 18 or 19, so it does nothing for firms on QuickBooks, Sage, Tally, Excel or paper invoicing.
- It is bring-your-own-key. The user must complete MRA EBS registration, credentials and self-certification, and the module does not appear to handle onboarding.
- Odoo is a minority choice among small Mauritian SMEs. The module also needs an Odoo admin or integrator.
- No sign of an offline or mobile workflow, a French or Creole interface, or a lightweight standalone invoicing app (all unverified).
- Competing Odoo modules reduce its exclusivity.

## Opening
A standalone, low-cost, no-ERP MRA EBS invoicing app with guided EBS onboarding, aimed at Phase 2/3 SMEs not on Odoo, is still open. The Odoo module only covers the Odoo-user subset.
