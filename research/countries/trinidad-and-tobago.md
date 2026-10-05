# Trinidad and Tobago: Indie Software Opportunity Research

Researched 2026-10-05. Small market (about 1.4M people). I used the small-market search budget of 10 searches and could not fetch pages directly, so everything here comes from search-result snippets. Anything I could not confirm is marked "unverified" or "estimate".

**Accessibility:** T&T is not sanctioned. It has open internet and English-language government portals, and it is no longer under FATF increased monitoring. A foreign solo founder can sell software there. The practical limits are that it is a small market and that most portals (BIR e-Tax, TTBizLink, NIBTT Empower) have no published API that I could verify.

**Bottom line:** I found no standalone opportunity that clears the brief's bar. There are two moderate leads, both driven by 2026 events: the NIS rate rise plus the NIBTT Empower migration, and the CFATF 5th-round evaluation for listed businesses. Neither has a large enough buyer pool on its own. Both make more sense as a CARICOM-wide product (T&T, Jamaica, Barbados, Guyana, OECS) than as a T&T-only business.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| All employers / payroll bureaus | Monthly NIS contribution remittance and reconciliation after the 2026 rate change and the Empower migration | Weak lead (scored) | Real 2026 trigger, but crowded by local payroll packages; not clear if Empower allows bulk upload |
| Listed businesses (real estate, motor vehicle dealers, jewellers, accountants, attorneys, private members' clubs) | FIUTT AML/CFT compliance programme, CDD records, risk assessment, STR filing | Weak lead (scored) | CFATF onsite visit March 2026, plenary Nov 2026; small buyer pool; consultants and global KYC tools compete |
| All VAT-registered businesses | E-invoicing / CTC | Rejected | No mandate: T&T is "post-audit", with no required format or infrastructure |
| Gaming operators | Amusement Gaming Tax online filing (mandatory online from April 2026) | Rejected | Free IRD e-Tax portal; tiny niche; a one-off switch from paper |
| Customs brokers / clerks | ASYCUDA + TTBizLink declarations | Not viable (evidence too thin) | Systems run by government and UNCTAD; outages are the pain, not missing software; few buyers |
| SMEs (general tax) | BIR e-Tax returns (TD4, VAT, corporation tax) | Rejected | Free government portal plus accountants plus local payroll software already cover it |

---

### Opportunity: NIS 2026 Rate-Change and Empower Reconciliation Add-on

**Industry:**
Payroll bureaus, accounting firms, and SME employers of all sectors

**Buyer:**
Payroll administrators and HR/finance officers at SMEs with 10–200 staff, and small payroll bureaus or accounting practices that run payroll for several clients

**Trigger / Why now:**
- The NIS contribution rate rose from 13.2% to 16.2% on January 5, 2026 (employer 10.8%, employee 5.4%). It uses earnings-class bands up to TT$13,600/month.
- NIBTT is moving employers to its "Empower" digital platform. Phases 1–2 went live in August 2024, at a reported cost of about TT$143M.
- Press reports conflict on adoption: one says about 14,000 employers have onboarded, another says about 1,400.
- The Employers Consultative Association of T&T (ECA) runs sensitisation sessions on Empower, which suggests employers are confused.

**Current workflow:**
1. Run payroll in local software (Paymaster, TTPay, Payroll123, Payroll Control, an Odoo module) or in Excel.
2. Work out the NIS earnings class for each employee and week. Apply the new 2026 bands, including back-pay and mid-period changes.
3. Pay through online banking and send the contribution and employee data to NIBTT electronically. In practice this means re-keying into Empower or the older online payment scheme.
4. Match NIBTT statements against payroll. Chase unmatched employees (wrong NIS numbers, new hires not yet registered) and missing compliance certificates. Employers must register within 14 days of their first hire, and registration takes 10–15 working days.
5. Get NIS compliance certificates, which government tenders and contracts need.

**Pain:**
The rate change plus the new platform means many employers are dealing with weekly earnings-class rules and a new portal at the same time. The 1,400 vs 14,000 onboarding figures and the ECA training sessions both point to a slow, confusing migration. I found no direct complaints about mismatches (unverified).

**Existing solutions:**
- Paymaster, TTPay, Payroll123 (local; handle NIS, PAYE and Health Surcharge)
- Payroll Control (Port of Spain; T&T and OECS)
- VedTech T&T Payroll for Odoo
- Global EOR/payroll providers (Playroll, Multiplier, Activpayroll)
- nibempower.com: I could not tell whether this is the official NIBTT site or a third party (unverified)
- Accountants doing it by hand

**The gap:**
The possible gap is the step after payroll is calculated: building the Empower file or entries, checking employee NIS numbers before submission, and matching NIBTT statements back to payroll. This only exists if local payroll packages do not produce Empower-ready output and if Empower accepts a bulk upload. I could not verify either.

**Possible product:**
A browser-based "NIS reconciler". It imports a payroll export (CSV/Excel from common local packages), checks earnings classes against the 2026 bands, produces the Empower submission file, and flags employees who don't match on the NIBTT statement. It also tracks compliance-certificate status for contractors.

**MVP:**
Upload a payroll CSV, recompute NIS by earnings class under the 2026 rules, and show the differences. Upload the NIBTT statement and get an unmatched-employee report. Do not integrate with Empower until its file format is confirmed.

**Pricing hypothesis:**
About US$30–80/month per employer. Payroll bureaus pay US$10–20 per client per month. This is an estimate.

**How to find first customers:**
- ECA membership and its Empower training attendees
- T&T Chamber of Industry and Commerce directory
- ICATT (accountants' institute) member practices
- Government contractor lists (contractors need NIS compliance certificates)

**Risks:**
- Local payroll vendors can add the same output quickly.
- Empower may have no bulk upload or may change its format.
- Small market.
- Price-sensitive SMEs.

**Kill condition:**
Kill the idea if Paymaster/TTPay already export Empower-ready files, or if Empower offers a free bulk upload that matches records itself.

**Score:** 4/10

**Sources:**
- https://guardian.co.tt/news/nib-reminds-public-contribution-rate-to-rise-in-2026-6.2.2475167.a4c6da0e48
- https://www.nibtt.net/NI_Payment_Registration/Introduction.html
- https://www.nibtt.net/Downloads/employer_guide.pdf
- https://trinidadexpress.com/news/local/nibtt-owes-50m-to-vendor-for-empower-tech-upgrade/article_ecb2bed1-8c06-4084-ab94-c1a26dd573d3.html
- https://ecatt.org/index.php/employers-solution-centre/training-development/training-session-calendar/membership-sensitisation/understanding-the-nibtt-empower-platform
- https://www.workzoom.com/blog/trinidad-tobago-payroll-compliance-guide-2026/
- https://www.acciyo.com/trinidad-payroll-software-the-complete-guide-to-local-global-options-for-tt-business-compliance/
- https://apps.odoo.com/apps/modules/19.0/vedtech_tt_payroll
- https://www.odoo.com/customers/payroll-control-13446918
- https://nibempower.com/terms-conditions

---

### Opportunity: AML/CFT Compliance Kit for FIUTT Listed Businesses

**Industry:**
Non-financial "listed businesses" (DNFBPs): real estate agents, motor vehicle dealers, jewellers, accountants, attorneys, private members' clubs, art dealers

**Buyer:**
The owner or designated compliance officer at a small listed business registered with the FIUTT

**Trigger / Why now:**
- T&T's CFATF 5th-round mutual evaluation had a possible onsite visit in March 2026 and a possible plenary in November 2026.
- The previous evaluation found that real estate agents and motor vehicle vendors "do not consistently apply AML/CFT measures commensurate with the risks".
- After an evaluation, supervisors usually step up inspections. The FIUTT publishes a list of registrants, CDD guidance, and regular targeted-sanctions notices (CL/04–06/2025).

**Current workflow:**
1. Register with the FIUTT and appoint a compliance officer.
2. Write a compliance programme and an enterprise risk assessment, usually a consultant template in Word.
3. Do CDD for each qualifying transaction. Take ID copies by hand, often on paper. Check PEP status and the FIUTT terrorist and sanctions lists.
4. Keep records for the required period and train staff.
5. File STRs/SARs through FIUTT caseKonnect. Respond to FIUTT compliance examinations.

**Pain:**
Regulators have documented the gaps in these sectors (the CFATF evaluation). Every new FIUTT freezing notice means re-screening customers. Evaluation-year inspections can bring penalties. I found no direct practitioner complaints (unverified).

**Existing solutions:**
- Global screening and KYC APIs (Didit, other sanctions/PEP API vendors)
- Arctic Intelligence (enterprise AML risk assessment)
- Local AML consultancies and law firms selling programme templates and outsourced compliance-officer services (exist, but I did not verify specific firm names)
- Free FIUTT guidance and templates
- Excel and paper

**The gap:**
No affordable tool for very small T&T DNFBPs combines four things:
- a CDD form for each transaction,
- automatic re-screening when FIUTT issues a freezing notice,
- a risk-assessment template mapped to FIUTT guidance,
- an inspection-ready evidence pack.

Global KYC APIs are built for fintechs and developers, not for a car dealer.

**Possible product:**
A "FIUTT-ready" compliance workspace. It covers transaction-level CDD capture, local list screening (re-run each time the FIUTT updates a list), risk-rating rules, staff-training logs, and a one-click export for examinations.

**MVP:**
- A web form for CDD on each transaction
- Screening against the FIUTT/UN consolidated lists
- An audit log
- A PDF evidence pack laid out like the FIUTT examination checklist

**Pricing hypothesis:**
About US$40–100/month per business. Consultants could resell it to their clients. This is an estimate.

**How to find first customers:**
- The FIUTT published "List of Registrants" (as at June 30, 2025). The number of registrants is unverified; it is probably in the low thousands.
- Real estate associations and motor dealer associations
- Accountants' and attorneys' bodies
- Partnerships with AML consultants

**Risks:**
- Small pool of buyers who will actually pay. Many registrants are dormant or tiny.
- Urgency fades after the November 2026 plenary.
- Consultants bundle templates cheaply.
- Data-protection expectations around ID copies.

**Kill condition:**
Kill the idea if fewer than about 1,500 active registrants exist, or if interviews show owners only buy a one-off consultant template and never software.

**Score:** 4.5/10. It scores better if built as a CARICOM-wide DNFBP product, since Jamaica, Barbados, Guyana and the Bahamas have similar regimes.

**Sources:**
- https://fiu.gov.tt/category/reports/
- https://fiu.gov.tt/author/fiutt-admin/page/7/
- https://www.fatf-gafi.org/en/calendars/assessments.html
- https://www.fatf-gafi.org/en/publications/Mutualevaluations/Mutualevaluationoftrinidadandtobago.html
- https://www.bvifsc.vg/sites/default/files/documents/AML_CFT/CFATF/4th_ROUND_MUTUAL_EVAUATION_REPORTS/cfatf-4mer-trinidad-tobago_0.pdf
- https://www.knowyourcountry.com/country-aml-intelligence/country/trinidad-tobago/
- https://arctic-intelligence.com/countries/compliance-trinidad-tobago
- https://didit.me/blog/aml-screening-api-trinidad-tobago-51812/

---

## Rejected after competitor research

- **E-invoicing compliance tool:** there is no mandate. T&T's model is "post-audit", with no required format or infrastructure (Thomson Reuters regulatory tracker: https://europe.thomsonreuters.com/de/compliance/regulatory-updates/trinidad-and-tobago).
- **Amusement Gaming Tax filing helper:** filing became online-only through the free IRD e-Tax portal from April 1, 2026. It is a tiny niche and the change happens once (https://www.finance.gov.tt/media-release-inland-revenue-division-ird-announces-mandatory-online-filing-for-amusement-gaming-tax-returns/).
- **General SME payroll / statutory deductions:** already covered by Paymaster, TTPay, Payroll123, Payroll Control, Odoo VedTech, and global EOR providers.

## Attractive problem, poor distribution

- **Customs broker declaration and exception tooling (ASYCUDA + TTBizLink):** the CCCBA has publicly complained about ASYCUDA failures, and TTBizLink was recently enhanced. But the systems belong to government and UNCTAD, there is no integration access, and the buyer pool is small (https://guardian.co.tt/news/cccba-calls-for-action-following-asycuda-failure-6.2.2346710.31125151b7, https://tradeind.gov.tt/launch-of-the-enhanced-ttbizlink-platform/).

## Too competitive

- T&T payroll engines (see above).
- BIR e-Tax return preparation, which accountants and the free portal already cover.
