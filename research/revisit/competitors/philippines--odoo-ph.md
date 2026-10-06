# Odoo PH (Philippines) - competitor check for C0772 (BIR 2307 issuance and SAWT/QAP)

## Verdict: beatable

Odoo's Philippine localization officially covers 2307, SAWT and QAP, but only inside a full ERP that needs an implementer. It is not a lightweight, payee-side tool. 4 of 6 searches were run, and none returned Philippines-specific user complaints.

## Evidence
- Odoo's documentation has a Philippines fiscal localization page (l10n_ph and l10n_ph_reports). Search-result snippets say ATC codes are used to generate BIR 2307, SAWT and QAP reports, and that EWT, FWT and withholding VAT are supported. Source: https://www.odoo.com/documentation/master/applications/finance/fiscal_localizations/philippines.html (only the search snippet was seen; exact report coverage and edition (Enterprise or Community) is unverified).
- A third-party blog (Ecosire) says Odoo needs the Enterprise or custom modules for some Philippine reports, and that custom modules typically generate the 2307 PDF and QAP. It also says computerized accounting systems need a BIR CAS permit. Source: https://ecosire.com/blog/odoo-philippines-localization-guide-2026. This is a vendor blog and the claims are unverified.
- Generic Odoo reviews: Capterra shows 4.2/5 from about 1,288 reviews. Complaints are about bugs, slow support, thin documentation and confusing billing. Sources: https://www.capterra.com/p/135618/Odoo/reviews/?page=2 and https://ie.trustpilot.com/review/odoo.com?page=10. None of these are specific to the Philippines or to 2307, SAWT or QAP.
- Philippines-specific complaints (Google Play, App Store, Reddit, Facebook groups, local forums, Tagalog searches): none found. A search in Filipino returned only the Ecosire blog.
- Momentum: the docs cover recent Odoo versions (saas-19.x and 20.0), so the localization is actively maintained. No news of acquisition or shutdown was found.

## Pricing
- Odoo Enterprise starts around $24.90 per user per month, per third-party articles; the figure varies by region. No Philippines peso pricing was found (unverified).
- Third-party sources put implementation at $15k-$250k, with a median mid-market project of $40k-$120k. These are global figures, not Philippines-specific. Source: https://ecosire.com/hi/blog/odoo-implementation-cost-breakdown-2026.
- For a small buyer the real cost is the implementer and setup, not the licence.

## Fit gaps
- It is a full ERP, not a point tool. It does not suit a small business or freelancer that only needs to issue or collect 2307s.
- It is oriented to the payor (issuer) side. No payee-side feature was found for chasing missing 2307s from clients, or for reconciling received 2307s against receivables. This is unverified, since the search found no evidence either way.
- Per third-party sources, 2307 output and QAP may need custom modules, a serial number from the BIR booklet, and a CAS permit.
- The generic complaints (bugs, slow support, billing confusion) probably apply here too, but none were verified for the Philippines.

## Opening
A cheap, standalone payee-side tool for tracking, chasing and reconciling 2307s, with SAWT output, for small businesses that will not buy an ERP. Odoo does not appear to serve this segment.
