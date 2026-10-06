# Competitor: agency EVV vendors (United States, commercial)

Idea killed: C1125 Medicaid EVV exception handling.
Searches used: 5 of 6 (English only; no local-language angle needed, the market is US, one Spanish-term query was folded into a vendor query).

## Verdict: strong

Established vendors (Axxess, WellSky, AlayaCare, HHAeXchange, Sandata) already ship exception-handling workflows inside their agency software. Agencies on those platforms have no strong reason to buy a separate exception tool.

## Evidence
- Axxess has a built-in "EVV Exception Center" to manage, correct and resubmit EVV data. A 2026 preprint says Axxess support (phone call, 16 Jun 2026) said most agencies use it. https://www.axxess.com/help/agencycore/integrations/evv-exception-center/ and https://preprints.jmir.org/preprint/104583
- The same preprint says WellSky support confirmed flagged visits can be changed to verified before aggregator transmission (secondhand, unverified by me).
- AlayaCare documents configurable intervention-free approval of GPS/telephony exceptions. https://alayacare.com/wp-content/uploads/2023/06/electronic-visit-verification.pdf
- Regulators push agencies to keep manual edits low (CMS goal under 15%; some states require 85% of visits verified without manual edits) and require issue logs and justification for manual edits. This is a real pain point and the demand is real. Examples: https://medquest.hawaii.gov/content/dam/formsanddocuments/provider-memos/qi-memos/qi-memos-2024/QI-2305C%20EVV%20Manual%20Editing%20and%20Entry%20of%20Visits%20(Update%20to%20QI-2305B)%20(part%201)%20-%20signed.pdf and https://www.dhs.pa.gov:443/providers/Billing-Info/Documents/EVV%20Compliance%20Reminder%20and%20General%20EVV%20Information.pdf
- Complaints (HHAeXchange, aggregated in search summary, not verbatim quotes): Capterra 3.6/5 from 100 users. Recurring themes are weak customer support, unfriendly UI, outages leaving no access to data, and missing EVV visits causing payer non-payment. https://www.capterra.com/p/140366/eXchange-Suite/reviews/?page=3
- Sandata: a SelectHub summary says reviews suggest it is cost-prohibitive for small agencies (secondhand, unverified). https://www.selecthub.com/p/home-health-software/sandata/
- No Reddit or Facebook-group complaints were found; searches returned only official and vendor sources.

## Pricing
- HHAeXchange: starting price listed as $375/month on aggregator sites; enterprise pricing not public (per fitgap/selecthub search summaries; verify before relying). https://us.fitgap.com/products/hhaexchange
- Sandata, Netsmart: no published pricing found.
- Exception modules in Axxess, WellSky, AlayaCare: no separate price found (unverified; likely bundled).

## Fit gaps
- Exception tools are bundled in full agency-management suites. An agency that uses a state-supplied free EVV system (open-model states) or a vendor without a strong exception module is not served.
- Small agencies face high cost and implementation fees for Sandata/HHAeXchange-class products (unverified).
- Complaints about support and UI suggest a UX gap, but not a missing feature.
- Not confirmed: whether any vendor handles multi-state aggregator rules (Sandata, HHAeXchange, Netsmart, etc.) in one exception layer.

## Opening
Only a thin, cheap, vendor-agnostic exception/audit-log layer for small agencies stuck on state-mandated or weak EVV systems; against bundled incumbents a standalone product is hard to sell.
