# PRAL (Pakistan Revenue Automation Ltd) - Pakistan
Idea killed: C0734, FBR B2B digital invoice for SMEs, Pakistan.

## Verdict: strong
PRAL is the government-owned FBR technology arm and a licensed digital-invoicing integrator. It offers integration at no cost, which is hard to undercut on price. Complaints exist, but they are mostly about the FBR/PRAL system itself, which a private integrator cannot escape. The opening is narrow.

## Evidence
- PRAL says it will render cost-free integration services to all taxpayers (Business Recorder: https://www.brecorder.com/news/amp/40362590).
- Licensed integrators named in the search results are PRAL, Haball, EY and WebDNAworks (https://profit.pakistantoday.com.pk/2025/04/04/fbr-expands-digital-invoicing-network-with-two-new-private-integrators/). A later article reports four companies approved for retailer integration (https://profit.pakistantoday.com.pk/2025/04/13/fbr-approves-four-companies-for-retailers-digital-invoice-integration/). I did not verify the later list.
- Rule 150Q makes digital invoicing mandatory: corporate from 1 June 2025, non-corporate from 1 July 2025 (per search summary of the Business Recorder article). The demand is mandated.
- The PRAL route includes sandbox testing with scenario-based invoices, IP whitelisting and production access (search summary of the FBR DI user manual v1.5, https://download1.fbr.gov.pk/Docs/20257301171649798DIUserManualV1.5.pdf, and the FAQs). It is technical: it requires an ERP or software that calls the API.
- Complaints (secondhand, from search summaries, not from app-store or user reviews):
  - POS failures, unjustified profile disconnections, missing invoice uploads, "fake disconnection" errors, sync failures, and poor FBR-PRAL coordination.
  - IRIS downtime blocked invoice generation.
  - Traders rejected the abrupt rollout and penalties under section 25-A (https://www.brecorder.com/news/amp/40370109).
  - The Federal Tax Ombudsman ordered FBR to stop sealing Tier-1 retail outlets and fix POS flaws (https://www.brecorder.com/news/amp/40368868).
- No direct user reviews (Play Store, Reddit, Trustpilot) of PRAL's digital invoicing were found. Urdu search returned only FBR press releases and nothing useful.
- Momentum: active and state-backed. It opened a PRAL front desk at LTO Karachi (fbr.gov.pk press release) and continues to be the default integrator.

## Pricing
- PRAL: free, per its own statements. Support quality and limits for the free tier: unverified.
- Private integrators were reported charging up to Rs10 per invoice or Rs1 million annually (search summary; the exact source was not confirmed). A private SME product competes on usability, not on price.

## Fit gaps
- PRAL provides integration and API access, not a finished product. Small non-technical SMEs need invoicing software, UI, and urdu support on top. This is unverified, but is implied by the API/sandbox/IP-whitelisting process.
- Sandbox scenarios, IP whitelisting and ERP technical details are a burden for small shops.
- Reliability issues (disconnections, missed uploads) originate in the FBR/PRAL stack, so a wrapper product would inherit them.

## Opening
Only a thin one: an SME-friendly, Urdu, mobile/offline-tolerant invoicing front end that is built on PRAL's free API, with onboarding handled for the user and queued retries for outages. It cannot compete with PRAL on integration price, and it depends on PRAL's API.
