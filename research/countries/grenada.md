# Grenada — Opportunity Research

**Researched:** 2026-10-05 · **Market class:** microstate (population about 125k, estimate; GDP about US$1.3bn, estimate) · **Search budget used:** 4 of 4

## Summary verdict

There is **no viable standalone indie-software opportunity in Grenada**. The total number of formal businesses is small (likely a few thousand registered employers, estimate, unverified), and most mandatory workflows run through government systems the state built itself (GTAX for tax, ASYCUDA World for customs, NIS for social security). The one real 2026 trigger is the **GTAX mandatory e-filing cutover on 1 January 2026**. It only becomes interesting as an **add-on to a multi-island OECS/Eastern Caribbean payroll and tax-compliance product**, because St Vincent and other OECS states are digitising tax filing in parallel and all share the same EC dollar and similar PAYE/NIS structures.

Accessibility: no sanctions or internet restrictions. Grenada is an open, English-speaking, common-law market that uses the EC$ (pegged to US$). A foreign solo founder can sell software there. The constraints are market size and distribution, not access.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Accountants / small employers (all sectors) | Monthly PAYE + NIS remittance; 2026 mandatory GTAX filing of PIT, CIT, annual PAYE, withholding, excise and licences | Weak lead (add-on only) | Real mandatory trigger from 1 Jan 2026, but the buyer pool is tiny and GTAX is a free government portal |
| Customs brokers / importers | ASYCUDA World declarations; import licences/permits from Agriculture, Health and Police | Rejected | ASYCUDA World is the system of record. The single-window licence module is delayed until further notice, with a target date of 30 June 2030, so there is no integration surface or deadline yet |
| Nutmeg / cocoa / spice exporters | EU food-safety and traceability documentation | Rejected | Exports are concentrated in one statutory body, the GCNA, plus a few chocolate makers. Nutmeg is not an EUDR commodity. Cocoa volumes are tiny, so this is a consultant job, not a SaaS market |
| Tourism (hotels, villas, dive operators) | VAT/hotel levy filing; licences | Rejected | Already covered by GTAX filing plus hotel PMS/accounting tools; no distinct regulatory workflow found |
| Fisheries (tuna/fish exports) | Export health certificates, catch documentation | Not investigated in depth (budget) | Very few exporters; likely a government/donor-run process |

## Strongest opportunities

### Opportunity: OECS payroll-to-government filing pack (PAYE + NIS + GTAX), with Grenada as one module

**Industry:**
Accounting firms and small/medium employers (cross-sector)

**Buyer:**
Small accounting/bookkeeping practices that run payroll for clients; finance/admin officers at SMEs with 10–200 staff (hotels, retailers, distributors)

**Trigger / Why now:**
From 1 January 2026, Grenada's Inland Revenue Division requires PIT, CIT filing, annual PAYE, gaming, excise, withholding and annual stamp tax, plus all licences, to be submitted **exclusively through GTAX**. GTAX launched in January 2024 for VAT, monthly PAYE and CIT instalments, starting with large and medium firms. St Vincent and the Grenadines expanded its own eTax online filing in 2025, so neighbouring OECS tax authorities are moving the same way.

**Current workflow:**
1. Run payroll in Excel or in generic accounting software (QuickBooks/Sage-type tools; local usage unverified).
2. Calculate PAYE and NIS by hand or in a spreadsheet. The NIS employer rate is 7%, on insurable earnings up to EC$5,200/month.
3. Key the monthly PAYE return into GTAX, and separately prepare the NIS contribution schedule for the NIS. Both are due by the 15th of the following month.
4. At year end, compile the annual PAYE/NIS reconciliation (due 31 March) and now also file it in GTAX.

**Pain:**
Monthly, mandatory and penalty-bearing, with two separate agencies (IRD and NIS) receiving the same payroll data. Evidence of specific user complaints was **not found** (unverified).

**Existing solutions:**
- GTAX portal (free, government)
- NIS Grenada (nisgrenada.org) employer channel (online submission capability unverified)
- Ontop and other EOR/global payroll platforms advertise Grenada payroll with NIS handling
- Rivermate and other EOR cost calculators
- Generic accounting software, plus local accounting firms doing the work manually

**The gap:**
Probably the absence of a Grenada- and OECS-specific payroll tool that outputs GTAX-ready PAYE files and NIS schedules from one payroll run. **Unverified:** I did not confirm whether GTAX accepts bulk upload or has an API, or which Caribbean payroll vendors already serve this.

**Possible product:**
A lightweight OECS payroll engine with country rule packs (Grenada, St Vincent, St Lucia, Dominica, Antigua, St Kitts). One payroll run produces payslips, a GTAX/eTax PAYE return file or worksheet, and an NIS contribution schedule.

**MVP:**
A Grenada-only spreadsheet-import tool. It reads an employee pay CSV and outputs PAYE and NIS calculations, a GTAX-entry worksheet, an NIS schedule, and the year-end annual reconciliation.

**Pricing hypothesis:**
US$20–60/month per employer, or US$100–200/month for an accounting firm with many clients (estimate).

**How to find first customers:**
- Institute of Chartered Accountants of the Eastern Caribbean member listings (existence of a public directory unverified)
- Grenada Chamber of Industry and Commerce members
- IRD GTAX taxpayer sensitisation sessions

**Risks:**
- Tiny market (likely under 3,000 employers, estimate)
- GTAX may have no upload interface, which would mean re-keying anyway
- Regional payroll vendors may already exist (not checked)
- Each OECS state needs its own rules

**Kill condition:**
Either of these would kill it:
- An established Caribbean payroll product already outputs GTAX/NIS-ready files.
- GTAX offers no bulk-file or API channel, so the tool saves less than about 30 minutes per month per employer.

**Score:** 3/10 (Grenada alone: 2/10; as part of an OECS bundle: up to 4/10, pending diligence)

**Sources:**
- https://nowgrenada.com/2025/11/ird-to-expand-digital-service-for-tax-compliance/
- https://www.finance.gd/docs/2024/Press%20Release%20-%20Inland%20Revenue%20Division%20(IRD)%20Launches%20a%20New%20Digital%20Tax%20Administration%20System-%20GTAX.pdf
- https://kpmg.com/us/en/taxnewsflash/news/2025/07/saint-vincent-grenadines-etax-platform-expanded-online-filing.html
- https://nisgrenada.org/
- https://www.getontop.com/payroll-in/grenada
- https://rivermate.com/guides/grenada/employment-cost-calculator

## Rejected after competitor research

- **Customs broker / import permit automation:** killed by ASYCUDA World as the mandatory system of record, and by the single-window licence module being delayed indefinitely (definitive implementation date 30 June 2030). There is no near-term trigger and no integration surface. Sources: https://nowgrenada.com/?p=59120, https://tfadatabase.org/en/members/grenada/technical-assistance-projects/article-10-4
- **Spice/cocoa export traceability:** the buyer base is essentially the GCNA (a statutory association) and a handful of cocoa/chocolate producers. The substitute is donor/consultant-led food-safety upgrades. Source: https://www.caribbeannationalweekly.com/caribbean-breaking-news-featured/grenada-warns-nutmeg-farmers-food-safety/

## Attractive problem, poor distribution

- **Export food-safety/traceability documentation for small agri-exporters:** the pain is real (pressure from EU food-safety rules), but there are too few buyers to reach and none with budget.

## Too competitive

- **Generic payroll for Grenada employers:** EOR/global payroll platforms (Ontop, Rivermate and similar) and local accounting firms already cover it. A product only makes sense as a narrow GTAX/NIS filing add-on, as described above.

## Add-on note

Grenada is best treated as **one rule-pack inside an Eastern Caribbean (OECS / EC$-zone) compliance product**, alongside St Vincent and the Grenadines, St Lucia, Dominica, Antigua and Barbuda, and St Kitts and Nevis. These states share a currency, similar PAYE/NIS/VAT structures, ASYCUDA customs, and tax digitisation moving forward in parallel (2024–2026).
