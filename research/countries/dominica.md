# Dominica (Commonwealth of Dominica): Opportunity Research

**Date:** 2026-10-04
**Market class:** Microstate. Population about 72,000 (estimate), GDP around US$0.6–0.7bn (estimate). Currency is the Eastern Caribbean dollar (XCD), pegged to USD at 2.70. Member of the OECS / ECCU.
**Search budget used:** 4 of 4 (microstate cap). The findings below are therefore thin, and anything not backed by a cited result is marked *unverified* or *estimate*.
**Accessibility:** Accessible. Dominica is not sanctioned, it is English-speaking, it has no data-localization regime that would stop a foreign SaaS vendor, and payments run in USD/XCD through normal card and bank rails. The problem is size, not access.

## Bottom line

Dominica cannot support a standalone indie SaaS opportunity. Even where a workflow is mandatory and recurring (monthly VAT, monthly social-security remittance, customs entries, CBI due diligence), the buyer counts are in the tens to low hundreds. Accountants and brokers handle the work manually, and the government already gives taxpayers a free e-filing channel. The only sensible framing is **Dominica as an add-on market to a product built for the wider OECS/ECCU** (St Lucia, Grenada, St Vincent, Antigua, St Kitts, plus Dominica). All OECS members share similar VAT, PAYE and social-security monthly cycles and ASYCUDA-based customs. Every idea below scores low as a Dominica-only play.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Accountants / small businesses (tax) | Monthly VAT return (15%; 10% for accommodation/diving) due on the 20th via IRD eFiling | Reject (standalone) | IRD runs a free e-filing portal (efiling.ird.gov.dm), there is no public API, and VAT registrants are few because the threshold is XCD 200k turnover |
| Payroll bureaus / employers | Monthly Dominica Social Security remittance (7.5% employer + 6.5% employee, ceiling about EC$6,000/month, due on the 15th) + PAYE | Add-on only | The workflow is real and monthly, but the employer count is tiny (estimate: low thousands, mostly micro). Accountants, QuickBooks/Excel and global EOR/payroll players (Playroll, Pebl, Rivermate) cover it |
| Customs brokers / importers | ASYCUDA World entries; single-window project (indicative date 2022) | Reject | Very few licensed brokers (estimate: a few dozen), the government owns the core system, and the single-window rollout status is unverified |
| Citizenship by Investment (CBI) agents / developers | Applicant due-diligence files, document packs and status tracking under tightened 2025–2026 CBI regulations (EU-driven; 30-day physical presence, in-person biometric passport collection) | Attractive problem, poor distribution | Regulation creates a real why-now, but buyers are a small closed set of licensed agents and law firms. The work is relationship-driven and handled by incumbent consultants, and international due-diligence firms dominate |
| Tourism / accommodation | 10% accommodation VAT, guest registration, new-airport (expected 2027) growth | Reject | Small stock of eco-lodges and boutique hotels; global PMS/channel managers (Cloudbeds, etc.) already serve them, and the local tax step is a single monthly return |

## Strongest opportunities

There is no opportunity worth building for Dominica alone. Below is the single least-weak idea, framed as an OECS-wide product in which Dominica is one of six or seven jurisdictions.

### Opportunity: OECS monthly statutory-remittance pack (Social Security + PAYE + VAT) for accountants

**Industry:**
Accountants / payroll bureaus serving SMEs (OECS-wide; Dominica as one jurisdiction)

**Buyer:**
Small accounting practices and payroll bureaus in Roseau (and their equivalents in Castries, St George's, Kingstown, etc.) that run monthly payroll and filings for many micro-employers.

**Trigger / Why now:**
There is no strong Dominica-specific 2025–2026 trigger. Contribution rates and ceilings are updated periodically (2025: 7.5% employer, 6.5% employee, about EC$6,000/month ceiling). The IRD eFiling system is live, which moves VAT filing online without any bulk or API interface. The new international airport (expected 2027) may grow the hospitality employer base. This is a weak why-now.

**Current workflow:**
1. Accountant collects payroll data from each client (Excel, paper, QuickBooks).
2. Computes DSS contributions (with the ceiling) and PAYE by hand or in a spreadsheet.
3. Completes the DSS contribution schedule and remits by the 15th.
4. Prepares the VAT return in a spreadsheet and keys it into IRD eFiling by the 20th.
5. Repeats this for each client, and separately in each OECS island with different rates and forms.

**Pain:**
Two hard monthly deadlines (15th and 20th), with a late VAT return penalty of XCD 100/month and 10% on unpaid tax. The ceiling and rate logic is error-prone. I found no direct complaint evidence, so the pain is *unverified*.

**Existing solutions:**
QuickBooks/Xero plus spreadsheets; global payroll/EOR providers listing Dominica (Playroll, Pebl, Rivermate); the free IRD eFiling portal; local accountants doing the work manually; regional Caribbean payroll packages (names *unverified*).

**The gap:**
A rules engine for each OECS island that turns one payroll export into a ready-to-file DSS schedule, PAYE figures and a VAT return worksheet across many clients, with a deadline dashboard. Whether this gap really exists is *unverified*: regional payroll vendors may already cover it.

**Possible product:**
Multi-client, multi-island compliance calendar and calculator. Upload a payroll CSV and get the per-island social-security and PAYE schedules plus VAT worksheets in the formats each portal or office expects.

**MVP:**
Dominica + St Lucia only: a CSV-to-DSS/NIC schedule generator plus a deadline tracker for 20–50 client entities.

**Pricing hypothesis:**
US$30–80/month per accounting practice (estimate). The Dominica TAM is likely below US$20k/year, so the product only makes sense OECS-wide.

**How to find first customers:**
Institute of Chartered Accountants of the Eastern Caribbean (ICAEC) member list (*unverified* availability); the Dominica Association of Industry and Commerce; IRD-registered tax preparers.

**Risks:**
Tiny market; existing regional payroll software; portals with no API; accountants' low willingness to pay; rates that change without notice.

**Kill condition:**
Either of these: an established Caribbean payroll package already outputs OECS social-security schedules, or fewer than about 30 OECS practices say they would pay US$50/month.

**Score:** 3/10

**Sources:**
- IRD Dominica media centre / eFiling: https://www.ird.gov.dm/media-centre
- IRD VAT forms: https://ird.gov.dm/component/phocadownload/category/1-forms/8-vat-forms?Itemid=101
- IRD tax laws: https://www.ird.gov.dm/tax-laws
- DSS contributions: https://dss.dm/contributors/definition-ee/pmt-contrib-ee/
- Payroll overview (rates/ceiling): https://www.rivermate.com/guides/dominica/taxes ; https://www.playroll.com/payroll/dominica ; https://hellopebl.com/resources/blog/payroll-tax-in-dominica/

## Rejected after competitor research

- **VAT e-filing helper for Dominica SMEs.** Killed by the IRD's free eFiling portal (efiling.ird.gov.dm), the tiny registrant base (XCD 200k threshold) and accountants already doing it. Sources: https://www.ird.gov.dm/media-centre
- **Customs broker entry automation.** Killed by government-owned ASYCUDA World with no third-party integration, a few dozen brokers, and an unclear single-window timeline. Sources: https://tfadatabase.org/en/members/dominica/technical-assistance-projects/article-10-4 ; https://unctad.org/system/files/official-document/dtlasycudainf2025d1_en.pdf
- **Hotel/guest compliance tool.** Killed by global PMS/channel managers and a small accommodation stock; the local tax step is a single monthly VAT line.

## Attractive problem, poor distribution

- **CBI agent due-diligence and case-file management.** The 2025–2026 tightening of Dominica's CBI rules (EU-aligned, a name-change ban, 30-day physical presence, biometric passport collection) adds evidence-gathering and tracking work for licensed agents. However, the buyer set is small, closed and relationship-driven. Incumbent law firms, international due-diligence providers and the government Citizenship Unit control the process. A version covering all five Caribbean CBI states (Dominica, St Kitts, St Lucia, Grenada, Antigua) is the only plausible framing, and even then it is enterprise-like and reputationally sensitive. Sources: https://uglobal.com/blog/dominica-tightens-rules-for-cbi-program-addresses-eu-demands/ ; https://www.aap.com.au/aapreleases/globenewswire9007108/ ; https://migronis.com/guides/dominica/en/ ; https://printery.dominica.gov.dm/Gazettes/Details/14829

## Too competitive

- **Payroll for foreign employers hiring in Dominica.** Global EOR/payroll providers (Playroll, Rivermate, Pebl) already publish Dominica guides and services.

## Add-on recommendation

Treat Dominica as a jurisdiction module inside any OECS/ECCU-wide payroll, social-security or tax-compliance product (for example, one built first for St Lucia or a larger Caribbean market such as Jamaica or Trinidad & Tobago). It should not be a target for a standalone product.
