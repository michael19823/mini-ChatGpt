# C1444 — Kenya: SHA claims / rejections desk for private clinics

## Verdict and score
**Narrow: 4.8/10.** The pain is enormous, but most of it is **political and fiscal, not
operational**, and the operational slice is being absorbed by the system itself.
- **Policy-driven rejections.** A Cabinet directive (27 Aug 2026) ordered rejection of Sh10.6bn of
  claims. Hospitals accuse SHA of dropping automated first-in-first-out processing for human
  adjudication. RUPHA (700+ private and faith-based hospitals) is demanding payment of all claims
  under Sh10m and an independent **Disputes Resolution Tribunal**, which doesn't exist yet. NHIF
  legacy claims are being settled with 50–90% haircuts. Software can't move any of this.
- **The operational slice is partly built in.** SHA's provider portal now has a **Missing
  Documents Resubmission Module**: a 14-day countdown per claim, add-only document uploads, and
  automatic rejection after 14 days. Appeals are lodged on afyayangu.go.ke against the claim
  reference.
- **Data is gated, and the HMIS market is concentrated.** Claims go through a DHA-certified HMIS
  (mandatory for 2026/28 contracting). Tiberbu, the government-rolled HMIS, holds ~87% of
  onboarded systems. Remittance and claim-status APIs are open only to certified integrators.
  Apeiro (Safaricom consortium) runs e-claims verification, and Savannah Informatics (Slade360)
  built the private-facility claims portal.

What remains is the narrow segment identified in plan 06: **a rejection-triage, dispute-pack and
recovery tracker for private Level 3–4 facilities**. It would be sold white-label through the
smaller certified HMIS vendors (Afyake, RuphaSoft, DataMedHMIS) or run as a concierge billing
service.

## What changed versus the Sonnet evidence
- Sonnet ran only 2 searches and called "HMIS platforms" beatable. The deeper plan (06, written
  2026-10-05) and this check agree on the conclusion, with three additions:
  - SHA's own resubmission module now covers the most common rejection cause, missing documents;
  - the big rejection waves are policy decisions (Cabinet directive, human adjudication), not
    clerical errors;
  - Savannah Informatics/Slade360, Smart Applications (MediSmart) and Apeiro are entrenched in
    claims flows, the first two on the private-insurer side as well.
- Content marketers (paybillke.com guides on rejections and appeals) are already publishing
  free how-tos.

## Competitors (corrected)
| Competitor | Type | Notes |
|---|---|---|
| SHA provider portal: resubmission module, afyayangu.go.ke appeals | Free government | 14-day countdown, add-only document fixes, appeal lodging |
| Tiberbu (Taifa Care HMIS) | Government-rolled certified HMIS | ~87% of onboarded systems |
| Afyake, RuphaSoft (RUPHA-linked), DataMedHMIS, KenyaEMR etc. | Certified HMIS | Claims submission; rejection workflow unverified |
| Savannah Informatics (Slade360 EDI) | Claims platform | Built the SHA private-facility claims portal; private-insurer EDI |
| Smart Applications (MediSmart, SmartHealth) | Claims/biometrics | Private-insurer claims |
| Apeiro (Safaricom consortium) | SHA e-claims verification operator | On the payer side |
| Q-AFYA and other HMIS (KES 119k+/yr) | HMIS | Facility systems |
| In-house claims officers, consultants, free guides (paybillke.com) | Manual | Default |

## Barriers
- DHA certification is needed for API access to claims and remittance data.
- Concentration on a government HMIS that could add the feature.
- The biggest losses come from policy and liquidity, which software doesn't address.
- Health data rules (Digital Health Act 2023, 2025 regulations, ODPC registration) and local
  hosting questions.

## Buyer and price
The buyer is the owner or medical director of a private Level 3–4 facility with 50–500 SHA claims
a month (an estimated 3,500–4,000 private facilities; plan 06). The channel buyer is a smaller
certified HMIS vendor. The price anchor is HMIS licences at KES 119k–368k/year (Q-AFYA). The
plan's KSh 5–15k/month for a recovery desk is unvalidated. The recoverable value is estimated at
KSh 60–160k/month for a 200-claim facility (plan 06 estimate).

## Scorecard
| # | Criterion | Score | Reason |
|---|---|---|---|
| 1 | Pain | 9 | Billions rejected or delayed; facilities suspending SHA services |
| 2 | Frequency | 9 | Per claim, daily |
| 3 | Mandatory | 7 | SHA contracting and HMIS mandatory; the desk itself is optional |
| 4 | Fragmentation | 3 | One payer; a few benefit packages |
| 5 | Competition | 4 | SHA's resubmission module, Tiberbu, Slade360/Smart on the claims side |
| 6 | Incumbent gap | 4 | Triage and dispute packs remain; the main resubmission flow is built in |
| 7 | Buyer accessibility | 7 | SHA contracted-facility lists; RUPHA, KAHP |
| 8 | Willingness to pay | 4 | Cash-starved facilities; losses are policy-driven |
| 9 | MVP simplicity | 5 | CSV/bank matching easy; API access gated |
| 10 | Distribution | 4 | Via smaller HMIS vendors; RUPHA has its own HMIS |
| | **Overall** | **4.8** | Real pain, but mostly political; narrow white-label recovery-desk niche |

## Sources
- research/plans/06-kenya-sha-claims.md (deep plan, 2026-10-05)
- https://www.standardmedia.co.ke/health/health-science/article/2001530084/private-hospitals-suspend-sha-services-over-sh10bn-pending-bills
- https://nation.africa/kenya/health/we-will-not-sign-hospitals-reject-sha-payout-5523134
- https://nation.africa/kenya/health/sha-in-sh1-billion-secret-deal-after-system-failure--4853132 (Savannah Informatics portal)
- https://www.kenyans.co.ke/news/116272-sha-gives-hospitals-15-days-account-claims-worth-ksh3-billion
- https://www.the-star.co.ke/news/2026-07-04-sha-rejects-one-in-five-claims-from-hospitals
- https://hapakenya.com/2026/03/09/how-clerical-errors-being-mislabelled-by-sha-as-fraud-are-undermining-healthcare-in-kenya/
- https://paybillke.com/guides/how-to-appeal-rejected-sha-claim-kenya
- https://peopledaily.digital/news/private-hospitals-demand-govt-to-settle-ksh76b-nhif-and-sha-debts/amp
- https://capitalfm.africa/smart-applications-kma-sign-mou-aimed-at-digitizing-health-care-sector/
- https://build.fhir.org/ig/IntelliSOFT-Consulting/Kenya-eClaims-FHIR-IG/actors.html
- research/revisit/competitors/kenya--hmis-platforms.md
- Searches used: 5 of 8.
