# Zimbabwe: accounting packages (Sage/Pastel, Odoo, Manager, Zoho etc.) vs C1165 ZIMRA FDMS reconciliation

## Verdict: beatable

Accounting packages cover FDMS submission (sending invoices to ZIMRA) via add-ons and vendor modules, but nothing found shows a purpose-built reconciliation tool (matching fiscal device or FDMS records to the ledger). Based on 3 searches; coverage thin.

## Evidence
- Sage community thread shows Sage Evolution / Sage 300 users asking how to do fiscal integration in Zimbabwe, which suggests no native, built-in support: https://communityhub.sage.com/za/sage-200-evolution/f/general-discussion/270031/fiscal-intergration-in-zimbabwe
- Manager.io users discussing fiscalisation options in Zimbabwe (workaround-style, unverified detail): https://forum.manager.io/t/fiscalisation-options-for-manager-users-in-zimbabwe/58129
- An Odoo "ZIMRA Fiscalisation" module exists (device/FDMS integration): https://apps.odoo.com/apps/modules/18.0/fiscalisation
- Sage X3 integration is offered through third-party "Fiscalize" subscriptions (per search summary; unverified details).
- ZIMRA allows virtual fiscalisation by direct API from accounting systems, so custom integrations are common (e.g. Fiverr gigs offering FDMS API work): https://fiverr.com/usmanamin178/develop-zimra-accounting-pos-software
- Complaints are about FDMS and fiscal devices in general, not accounting packages: businesses called the rollout rushed and untested, invoice standardisation problems, and high cost of fiscal devices for SMEs (https://www.newsday.co.zw/business/article/200025042/local-firms-slam-zimras-new-tax-system). OK Zimbabwe was fined US$2.05m over FDMS non-compliance (https://www.newsday.co.zw/business-digest/article/200046792/zimra-slaps-ok-with-us2m-penalty-amid-financial-woes), showing real compliance risk.
- ZIMRA required device upgrades by 31 May 2025 for buyer-detail transmission (https://www.fiscal-requirements.com/news/3942-zimbabwe-mandates-fiscal-device-upgrade-for-buyer-detail-transmission).
- No app-store, G2, Capterra, Trustpilot or Reddit complaints specific to FDMS reconciliation in accounting packages were found. No local-language results surfaced (searches returned English only).

## Pricing
- Zoho Books (global list, not Zimbabwe-specific): Free under US$50K turnover, Standard $15/mo, Professional $40/mo, Premium $60/mo billed annually (GetApp listing).
- Sage Pastel cloud in Zimbabwe was US$20/month for 2 users in 2013 (techzim.co.zw); outdated, current price unverified.
- Prices of FDMS add-ons/modules: not found (unverified).

## Fit gaps
- Packages submit invoices; no evidence of a reconciliation view (ledger vs FDMS vs device Z-reports, rejected or unsent receipts, credit notes).
- Sage Evolution / 300 appear to need third-party add-ons or custom API work.
- Small buyers on spreadsheets or Manager.io rely on workarounds.
- Momentum: Odoo and Sage actively developed; ZIMRA rules keep changing (buyer details 2025), which adds work for vendors.

## Opening
A lightweight, package-agnostic tool that imports sales/ledger exports and FDMS/device data to flag unfiscalised, rejected or mismatched invoices is a plausible gap, but the risk is that vendors or add-on makers bolt this on.
