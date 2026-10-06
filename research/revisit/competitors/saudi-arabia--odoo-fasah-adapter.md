# Odoo FASAH adapter (Saudi Arabia)

Killed idea: C0852 (Saudi FASAH declaration prep for small brokers). Searches used: 4 of 6.

## Verdict: weak

## Evidence
- An Odoo Apps module `eh_log_l10n_sa_customs` exists for Odoo 16-19. Per search snippets, it serialises a declaration into a FASAH JSON envelope, dispatches it and parses the response. It supports declaration types, KSA HS codes and per-company API keys, and has a mock/sandbox mode. Sources: https://apps.odoo.com/apps/modules/18.0/eh_log_l10n_sa_customs , https://apps.odoo.com/apps/modules/19.0/eh_log_l10n_sa_customs
- It is part of a vendor-specific "eh log suite sa" logistics bundle. It is an add-on to Odoo, not a standalone product for brokers. https://apps.odoo.com/apps/modules/18.0/eh_log_suite_sa
- The snippets mention mock mode ("before live credentials exist"). I could not verify that live FASAH production integration works. (unverified)
- Complaints: none found. I found no reviews, ratings or user feedback in the search results. I could not open the pages, so absence of reviews on the page itself is unverified.
- Other Odoo-for-brokers content in Arabic (dasolo.ai blog, ZATCA e-invoicing services on khamsat) is marketing or freelance integration work, not a FASAH declaration product. https://www.dasolo.ai/ar/blog/اودو-حسب-الصناعة-8/odoo-sharikat-takhlees-jumruk-tawthiq-emtithal-fawatra-motakamel-719
- Momentum: published for four Odoo versions plus sibling modules for Bahrain and Oman, so it is under some development. Developer identity and release dates are unverified.

## Pricing
- The sibling Bahrain and Oman modules appear free (LGPL-3). The Saudi module's price was not confirmed. (unverified) Odoo itself needs a licence or hosting plan, and an implementer is likely needed. I found no published price.

## Fit gaps
- It requires an Odoo deployment, so it is unsuitable for a small broker without an ERP.
- No evidence of document or invoice OCR, or of pre-filing validation or review assistance beyond serialising and submitting data. (unverified)
- No Arabic UI or local-support evidence found. (unverified)
- Mock mode suggests it may not yet be proven against live FASAH.

## Opening
Small brokers who do not run Odoo have no real alternative here, so a lightweight standalone prep and validation tool is still open.
