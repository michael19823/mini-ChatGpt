# Birdie (United Kingdom, commercial) - competitor check

Idea killed: C1096 Homecare council invoicing and ECM exports.

## Verdict: strong

Birdie is a well-funded, active UK homecare platform that already has council/funder invoicing and accounting export built in.

## Evidence
- Trustpilot TrustScore 4.5/5 from 399 reviews, company replies to all negative reviews (search snippet; https://uk.trustpilot.com/review/birdie.care?page=5).
- Over 1,200 providers and 68M visits a year; launched SmartPlans AI assessment tool in June 2026 (search summaries, not directly verified): actively developed.
- Funding: $30M Series B in 2022, about $55M total (https://tech.eu/2022/06/28/london-based-operating-system-for-care-providers-birdie-raises-30-million/). No acquisition or shutdown news found.
- Finance module: invoices per payer including council payers, exported as CSV to accounting software (https://intercom.help/birdiecare/en/articles/5814199-how-to-export-and-send-invoices-in-birdie); AccountsIQ integration listed (https://www.accountsiq.com/integrations/birdie-homecare).
- Complaints (second-hand summary of Trustpilot pages, unverified wording): support ends at 8pm and can be slow; a visit log-in/out mistake could not be corrected; "switch agency" feature rarely works; an emergency number was switched off without notice; past app performance slowdown (Datadog case study). None relate to council invoicing.

## Pricing
Usage-based on scheduled care hours at an agreed hourly rate, with a minimum billing equivalent to 500 hours/month (G-Cloud pricing document, https://assets.applytosupply.digitalmarketplace.service.gov.uk/g-cloud-14/documents/712652/126012328431224-pricing-document-2026-05-27-1228.pdf). Exact rate not found. The 500-hour minimum suggests small agencies may be poorly served.

## Fit gaps
- Targets whole-agency operations, not standalone invoicing.
- Export is generic CSV; no evidence found of ECM-format (council-specific) export (unverified; absence not confirmed).
- 500 hours/month minimum excludes very small providers.
- Whole-platform switch needed; not a lightweight add-on.

## Opening
Only a narrow add-on for council-specific ECM/portal formats or very small agencies (under 500 hours/month) that sits alongside other rostering tools; weak against Birdie customers.
