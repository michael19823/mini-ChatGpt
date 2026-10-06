# ClaimHub (Malaysia) - competitor check

Dropped idea: C0580 GP panel/TPA claims reconciliation
Site: https://www.claimhub.cc/ ("ClaimHub — Know What Every Panel Owes You")

## Verdict: beatable

ClaimHub is a direct, purpose-built hit on the idea (matching panel payments to clinic records), at a very low per-use price. But it looks like a small, new, single-feature web tool. I found no reviews, users, funding or press, so there is no evidence of traction or satisfaction. It is beatable on workflow depth, not on the core matching feature or on price.

## Evidence
- Search summary of the homepage (I could not open it; WebFetch is blocked): it matches each panel payment to the clinic's patient list and shows which claims were paid in full, paid short or not paid, with patient name, visit date and the amount owed. It also offers a dashboard to track outstanding panel claims and dispute unpaid ones. Aimed at Malaysian private GP clinics. Source: https://www.claimhub.cc/
- Privacy claim (vendor claim, unverified): reconciliation runs transiently in the browser session, no patient data retained, files discarded after the report is generated. Source: https://www.claimhub.cc/
- Complaints: none found. Searches (English and Malay, 5 in all) returned no app-store reviews, Trustpilot, G2, Reddit, Facebook or forum mentions of this ClaimHub. Other "ClaimHub"/"Claims Hub" results (US P&C software, UK planning-compensation, TAL Australia) are unrelated companies.
- Momentum: unknown. No dated news, blog or changelog found. Unverified whether it is actively developed or has paying users.
- The buyer pain is real and independent of the vendor (CodeBlue coverage of TPA payment problems), e.g. https://codeblue.galencentre.org/2024/06/health-care-costs-will-rise-further-if-tpas-remain-unregulated-mma/ . These are not complaints about ClaimHub.

## Pricing
Per-reconciliation pricing, no monthly fees (per search summary of the homepage): RM 135 for 600 reconciliations (RM 0.225 each). Other tiers not seen; unverified beyond that one figure. Not overpriced for a small GP.

## Fit gaps (inferences, unverified)
- Looks like upload-and-report: no evidence of stored history, ageing across months, trends per TPA or per panel, or multi-clinic roll-ups, since it states no data is retained.
- No evidence of integration with clinic management systems (e.g. MedicalMet) or of automated submission or rejection-reason tracking.
- Dispute handling appears limited to a dashboard; no evidence of drafting or sending appeals.
- Which panel/TPA payment file formats it supports is unknown.

## Opening
A persistent layer on top of reconciliation (claim ageing, rejection-reason analytics, appeal workflow, multi-clinic and system integrations) is open if ClaimHub stays a stateless per-use matcher; plain matching alone is not worth competing on at RM 0.225 each.
