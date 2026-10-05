# devPOS (Albania) vs C0004 E-invoicing / fiscalization connector

## Verdict: beatable (low confidence; evidence is thin)

## Evidence
- devPOS is a sales/POS app integrated with Albania's fiscalization system, "suitable for any type of activity"; the App Store listing describes it as free on iPad. Source: https://apps.apple.com/tc/app/devpos/id1587005119
- Developer: Image and Communications Development SH.P.K. / dev.al, founded by Igli Gjelishti. Source: https://al.linkedin.com/in/igligjelishti
- It integrates with the Pago payment terminal (invoice amount is pushed to the terminal and confirmation returns). Source: search summary, unverified beyond that.
- Albania fiscalization (CIS/e-Fiskal, NIVF) is mandatory for B2G, B2B and B2C since 2021, so there is a real market. Source: https://sovos.com/vat/tax-rules/albania-e-invoicing/
- The market has other certified players, e.g. easyPos (DPT and AKSHI certified, with a fiscalisation REST API for ERP/POS/ecommerce integration). Source: https://easypos.al/en/fiscalisation-api
- Complaints: none found. Searches in English and Albanian returned no reviews or complaints for devPOS. I did not open the App Store review text, so ratings are unverified.
- Momentum: unknown. I found no dates on releases, funding or shutdown (unverified).

## Pricing
- App listed as free on iPad (App Store listing). Paid tiers, minimums or API fees: not found (unverified).
- For comparison only: easyPos ALL 7,000/yr, easyInvoice ALL 10,000/yr, bundle ALL 15,000/yr (https://easypos.al/en/fiscalisation-api).

## Fit gaps (mostly inferred, unverified)
- It is an iPad-centred POS app; no evidence of a standalone connector or API for third-party ERP/accounting systems (easyPos does offer one).
- No evidence found of multi-entity, multi-language or offline-mode support.

## Opening
A POS-centred app, not a connector. A fiscalization API/connector for existing ERPs and ecommerce is not clearly covered by devPOS, though easyPos already competes in that niche.
