# GoT-HoMIS (Tanzania) vs C1010: Tanzania NHIF claim submission module

## Verdict: beatable

GoT-HoMIS is a government-run EMR/HMIS for public primary-care facilities. It does exchange data with the NHIF claims system. It is not sold commercially, and it covers fewer than 30% of facilities. It is a real incumbent for public facilities, but it leaves private providers, small clinics and pharmacies largely unserved.

## Evidence
- The USAID/MSH PS3 case brief says GoTHOMIS exchanges information with the national HMIS, eLMIS and the NHIF claims management system. (https://uatweb.usaid.gov/sites/default/files/2022-05/PS3_Case_Brief_-_GoTHOMIS.pdf)
- Dodoma government page (Swahili): Kongwa District Hospital reports 99% GoT-HoMIS implementation, and monthly revenue rose from TSh 7m to 15m. This is a government source, so treat it as self-reported. (https://dodoma.go.tz/new/gothomis-yaongeza-ukusanyaji-mapato-wilaya-ya-kongwa)
- A search-result summary of a source I could not open says GoTHOMIS reached fewer than 30% of health facilities, mostly urban. Dispensaries and health centres in remote regions were largely excluded. A centralized version and mobile app were deployed in July 2023. I did not verify this against the original page; the likely source is the Daily News article "How strengthening health data can help Tanzania save more lives" (https://dailynews.co.tz/how-strengthening-health-data-can-help-tanzania-save-more-lives/). Treat the figure as unverified.
- UNICEF is recruiting a consultant to assess the transition to centralized GoTHOMIS for PHC in Kigoma and Mbeya. So it is still under active development. (https://jobs.unicef.org/fr/job/571190)
- openIMIS in Tanzania (run by Swiss TPH) is adding integrations with MUSE and GoT-HoMIS. (https://soldevelo.com/blog/how-openimis-improved-health-insurance-coverage-in-tanzania/)
- NHIF-side pain points (these are about NHIF, not GoT-HoMIS):
  - Private providers in Dar es Salaam complain of delayed NHIF payments. (https://www.thecitizen.co.tz/tanzania/news/national/private-health-providers-in-dar-es-salaam-complain-of-delayed-nhif-payments-4404364)
  - Health centres report payment delays of up to six months and some rejected claims. (https://mwananchi.co.tz/tanzania/news/national/fraud-crisis-nhif-and-health-centres-facing-overwhelming-deception-4990134)
  - Stakeholders propose claims review, training and independent mediation. (https://thecitizen.co.tz/tanzania/news/national/stakeholders-propose-solutions-to-resolve-nhif-hospital-payment-disputes-4991334)
  - The deputy health minister urged system integration to stop NHIF losses. (https://www.thecitizen.co.tz/tanzania/news/national/tanzania-s-deputy-health-minister-urges-system-integration-to-address-nhif-losses-and-medical-cost-inefficiencies-4852688)
  - NHIF says its claims processing was upgraded to about 1,000 claims in 40 minutes. This is from a search summary, so it is unverified.
- Complaints: I found no app-store reviews, G2/Capterra/Trustpilot reviews, Reddit threads or forum complaints about GoT-HoMIS itself. This is not evidence that it works well. It is a government system with no public review channels, and I ran only 4 searches.

## Pricing
No published price. It is government-provided to public facilities, so the effective price for them is zero. I found no evidence of a commercial offering for private facilities (unverified). A paid product cannot undercut it in the public sector.

## Fit gaps
- Coverage: fewer than 30% of facilities (unverified), mostly urban. Remote dispensaries and health centres are excluded.
- Private clinics, pharmacies and faith-based providers appear to be outside the programme (unverified).
- It is a full EMR, not a claims-quality tool. I found no evidence of pre-submission claim validation, rejection prevention or reconciliation against NHIF payments (unverified).
- The tools I saw are built around the NHIF and public-sector workflow, not multi-insurer use.
- Integration targets are shifting (centralized version, MUSE, openIMIS), so there may be instability for third parties.

## Opening
A claims-prep and reconciliation tool for private and unserved facilities. It would catch rejections before submission and track the delayed NHIF payments those providers complain about, working alongside or instead of GoT-HoMIS. Public facilities are not the target.
