# Odoo fbr_pakistan (Pakistan) - competitor check

Idea killed: C0734, FBR B2B digital invoice for SMEs in Pakistan.

## Verdict: weak (as a competitor to a standalone SME product)

It is a real, cheap, working add-on, but only for businesses that already run Odoo. It is not a standalone SME invoicing product.

## Evidence
- `fbr_pakistan` is an Odoo add-on by EBITDA Solutions LLP for single-company use. It generates, manages and submits FBR-compliant digital invoices from Odoo. It has Excel import/export, JSON payload logs and PDF invoices, and covers Odoo 17, 18 and 19. Source: https://apps.odoo.com/apps/modules/18.0/fbr_pakistan
- The same vendor lists related modules: `fbr_non_company` and `fbr_pos`. Source: https://apps.odoo.com/apps/modules/18.0/fbr_non_company
- Competing Odoo modules exist: Odolution's "Pakistan FBR PRAL Digital Invoicing" (https://apps.odoo.com/apps/modules/18.0/pakistan_fbr_pral_digital_invoicing) and ECOSIRE's build-to-order FBR module (https://ecosire.com/apps/odoo/fbr-digital-invoicing-pakistan).
- Complaints about this module: none found. The Odoo Apps listings returned by search showed no customer reviews. That may mean no reviews exist, or that search could not see them (unverified).
- Market-level pain, not specific to Odoo:
  - FBR extended the digital invoicing deadline twice in four months, and small businesses were patchily onboarded. Source: https://www.e-invoice.app/discussions/pakistan-a-second-fbr-extension-in-four-months-for-digital-invoicing-dff037
  - Reported pain points: certificate-management documentation, small firms lacking IT capability, and a slow PRAL helpdesk. Source: same page as above.
  - Manager.io users have their own thread on a Pakistan digital invoicing solution: https://forum.manager.io/t/pakistan-digital-invoicing-solution-for-manager-io-users/61431?page=18
- Free alternative: PRAL is a notified licensed integrator offering free integration to taxpayers. Source: https://www.brecorder.com/news/amp/40362590. This is a bigger threat to a paid SME product than Odoo is.

## Pricing
- fbr_pakistan (single company): about $37.57 on Odoo 17, $38.27 on Odoo 18 and $38.25 on Odoo 19 (one-off app price per the Odoo Apps listing). Source: https://apps.odoo.com/apps/modules/17.0/fbr_pakistan
- This does not include Odoo itself, hosting or implementation (unverified).
- ECOSIRE price: unverified.

## Fit gaps
- It requires Odoo, so it does not serve SMEs on Excel, Tally, Manager.io, QuickBooks or paper.
- It is "single company" only. Multi-entity use needs other modules (unverified detail).
- It depends on the buyer's own PRAL token and credentials, and the SME must handle certificates and onboarding itself.
- The listing says FBR schema changes are handled by the vendor, but update speed is unverified.
- No SME-specific workflow, such as WhatsApp or mobile use, shows up in the listing.

## Opening it leaves
Odoo add-ons cover only the Odoo-using minority. The opportunity is a standalone, no-ERP onboarding and invoicing layer for SMEs, and it has to beat PRAL's free integration on ease of use (certificates, support, Urdu, mobile) rather than on price.
