# hms.co.tz (Tanzania) - competitor check

Idea killed: C1010, Tanzania NHIF claim submission module.

## Verdict
**beatable** (low confidence). The only evidence found is an ERPNext-based hospital system with built-in NHIF claims. I could not confirm it is a polished, supported product. The hms.co.tz site itself did not appear in search results.

## Evidence
- "HMS TZ" is a healthcare management module for ERPNext, built for Tanzania. It covers NHIF products, claims, reconciliations, responses and scheme details, plus lab, medication and patient-care services. Source: https://github.com/av-dev2/hms_tz
- I could not verify that this repo is the same thing as hms.co.tz. This is inferred from the name only (unverified).
- Searches in English and Swahili found no user reviews, app-store reviews or forum complaints about it. No complaints found.
- Wider context: NHIF set standards and API documentation for EMR systems to submit claims online by 2025. Other vendors are working to meet them, including iCare Connect+. Sources: https://dhis2.udsm.ac.tz/udsm-dhis2-team-joins-key-stakeholders-in-advancing-emr-integration-with-nhif/ and https://dhis2.udsm.ac.tz/?p=1976
- Other NHIF integrations exist: Care2x (an academic project; https://dspace.nm-aist.ac.tz/handle/20.500.12479/253?show=full) and an open-source Laravel package (https://packagist.org/packages/omakei/laravel-nhif).
- A Citizen article quotes the Deputy Health Minister on NHIF losses from unintegrated health systems. This is not about hms.co.tz specifically. Source: https://www.thecitizen.co.tz/tanzania/news/national/tanzania-s-deputy-health-minister-urges-system-integration-to-address-nhif-losses-and-medical-cost-inefficiencies-4852688

## Pricing
Not found (unverified). Nothing published in search results. The code is on GitHub, but I did not check its license.

## Fit gaps (inferred, unverified)
- It requires ERPNext (Frappe), so a facility would need a full ERP and HMS stack. That is heavy for a small clinic that only wants claim submission.
- It looks like a full hospital system, not a standalone NHIF claims add-on that works with a clinic's existing records.
- No evidence of offline or mobile use, or of Swahili-language support.
- Momentum is unknown. No release, activity or customer data was checked.

## Opening
A lightweight, standalone NHIF claims tool for small facilities that cannot adopt ERPNext. The risk is that NHIF's own API standards and the larger EMR vendors (e.g. iCare) squeeze out add-ons.
