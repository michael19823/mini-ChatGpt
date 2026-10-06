# iCareConnect+ (Tanzania)

Idea killed: C1010, Tanzania NHIF claim submission module.

## Verdict: beatable

iCareConnect+ is a university-built, open-source EMR whose NHIF claims integration is still a stated plan, not a shipped product. It is not a standalone claims tool and has no commercial go-to-market that I could find.

## Evidence
- iCareConnect+ is an open-source, web-based EMR built on OpenMRS by the UDSM DHIS2 Lab (University of Dar es Salaam), with the Ministry of Health. Sources: https://dhis2.udsm.ac.tz/innovation/icareconnect/ , https://dhis2.udsm.ac.tz/?p=2270
- Modules: clinical, pharmacy, theatre and mortuary, ANC, HR, reporting, DHIS2 integration. Deployed at UDSM Hospital and CSSC hospitals. The UDSM health center deployment dates from October 2022 (about 2,500 patients a month). Source: https://dhis2.udsm.ac.tz/udsm-dhis2-team-joins-key-stakeholders-in-advancing-emr-integration-with-nhif/
- NHIF held an EMR vendor meeting on 14 Jan 2025 on API standards for online claims submission by 2025. The UDSM team said it is "committed to enhancing" iCareConnect+ to meet these standards and to add automated claims submission. This is future-tense wording, so I could not confirm that NHIF claims submission is live. Same source as above.
- NHIF itself has run e-claims since 2012 (ISSA: https://iskm.issa.int/node/5667), and the standardised API opens the market to any EMR vendor, so the integration is not exclusive to iCareConnect+.
- Complaints: none found about iCareConnect+. I found no app-store, forum or news reviews. Related context only: private providers in Dar es Salaam complain about delayed NHIF payments (https://www.thecitizen.co.tz/tanzania/news/national/private-health-providers-in-dar-es-salaam-complain-of-delayed-nhif-payments-4404364). That concerns NHIF, not this product.
- A Swahili search turned up no complaints either.

## Pricing
No pricing found. It is described as open source, so the software licence may be free. The licence type was not stated, and hosting, support and customisation costs are unverified.

## Fit gaps
- It is a full EMR, not a lightweight claims add-on. A clinic that already runs another EMR or paper records would have to switch, which is heavy.
- NHIF claims automation is announced, not confirmed shipped (unverified).
- Visible deployments are university and faith-based (CSSC) hospitals. Small private clinics have little visible presence (unverified).
- Offline or mobile support, and Swahili UI: not confirmed either way.
- A claims-focused product aimed at other EMRs, or at clinics without one, is not covered.

## Momentum
Active. There are 2025 posts (the NHIF vendor meeting, Zanzibar Afya Week 2025) and a government-aligned university team behind it. I found no sign of shutdown or stagnation.

## Opening
A thin NHIF claims layer that works with any EMR, or none, and targets small private facilities that will not adopt a full OpenMRS-based EMR. The risk is that NHIF's open API plus a free open-source EMR lowers the price ceiling.
