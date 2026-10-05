# Guyana: Offline (Quiet) Industries Pass

**Research date:** 2026-10-05 · **Searches used:** 3 of 20. The search tool refused the 2nd call with a usage-limit error, so I stopped there, as the method requires.

**Bottom line:** This is a short, honest report. Guyana is small (about 0.8M people), and its quiet industries are tiny. Most of them report to a single national body, so there is little fragmentation. Only one weak candidate came out of this pass: AML reporting for small "reporting entities" (cambios, pawnbrokers and similar). It scores 3/10 and is not worth building on current evidence. Most counts below are **unverified**, because the search budget was cut off early.

---

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Scrap metal / old metal dealers | Licence under the Old Metal Dealers Act (Cap. 91:08, amended 2007), issued via the Ministry of Tourism, Industry and Commerce; the dealer must not handle stolen material | Licensing goes through the ministry; I found no public online register | Unknown (no public register found) | Reject | The government has repeatedly suspended the trade and reopened it "for a limited period" (DPI), so the market is unstable and enforcement is by licence cancellation, not by recurring filings |
| Cambios (foreign-currency dealers) | Licence under the Dealers in Foreign Currency (Licensing) Act 1989; Bank of Guyana is the AML supervisor; **monthly threshold reports to the FIU** (purchases > G$400k / US$2k, sales > G$1M / US$5k); customer ID from G$20k | Monthly report to the FIU; the format and channel (paper, email or goAML) are **unverified** | Low tens (estimate, unverified) | Weak candidate (see Opportunity 1) | Mandatory monthly filing, but very few buyers |
| Pawnbrokers / money lenders | Pawnbroker licensing plus AML reporting-entity duties under the AML/CFT Act (unverified detail) | Counter-based trade | Unknown | Fold into Opportunity 1 | Too few to stand alone |
| Licensed gold dealers / small-scale gold buyers | Licence from the Guyana Gold Board / GGMC, with declarations and sales to the GGB (unverified detail) | Field and counter based, in the interior | Unknown (search refused) | Not assessed | Possibly the most interesting quiet sector, but no evidence was gathered |
| Small and medium-scale gold miners | GGMC permits, production returns, and the mercury phase-out under the Minamata Convention (unverified detail) | Interior, low connectivity | Thousands of claims (unverified) | Not assessed | The government is the channel, and WTP is likely low |
| Households employing domestic workers | NIS registration and contributions; Guyana ratified ILO C189 (unverified) | Paper NIS schedules | Unknown | Reject | Low compliance, and households won't pay for software |
| Minibus / hire-car operators | Hire-car and minibus licences, route permits and road-service licences (GRA licence revenue; unverified) | Counter-based | Unknown | Reject | Annual licence only, with no recurring report |
| Rice millers | Guyana Rice Development Board licensing and export documentation (unverified) | Paper and association based | Low hundreds (estimate) | Reject | The GRDB is the single channel, and it is an export-document task already handled by GRDB |
| Market vendors / street traders | Municipal (Georgetown M&CC) stall fees | Cash at the counter | Unknown | Reject | No recurring regulated data flow, and no money in it |
| Pharmacies (controlled-drug registers) | See the existing country report | Paper and email | Tiny | Reject | Already covered in the country report |

## 2. Strongest opportunities

### Opportunity: AML threshold and STR filing helper for small DNFBP and cambio reporting entities

**Industry:**  
Cambios, pawnbrokers and money lenders, and possibly dealers in precious metals and stones, car dealers and real-estate agents. All of these are "reporting entities" under Guyana's AML/CFT regime.

**Buyer:**  
The owner or compliance officer of a single-site cambio or pawnshop.

**Trigger / Why now:**  
There is no confirmed 2025–2026 trigger. Guyana's post-oil financial growth and its CFATF follow-up keep pressure on supervisors, but this is **unverified** for 2026.

**Current workflow:**  
1. The counter clerk records each transaction and customer ID in a ledger or a basic POS.
2. At month end, the owner extracts transactions above the threshold.
3. The owner fills the FIU threshold report and sends it to the FIU. The channel (goAML, email or hand delivery) is **unverified**.

**Pain:**  
- The filing is monthly and mandatory, with penalties under the Dealers in Foreign Currency Act and the Bank of Guyana Act (Stabroek News; FIU).
- I found no complaint evidence.

**Existing solutions:**  
- The FIU's own reporting forms or portal (unverified whether it is goAML)
- Excel
- the owner's accountant

**Offline evidence:**  
- The industry is counter-based.
- I found no Guyana vendor or SaaS listing.
- FIU guidance is published as newsletters and PDFs.

**Offline channel:**  
- the Bank of Guyana's list of licensed cambios
- the FIU's reporting-entity outreach sessions
- walking Regent Street and Water Street in Georgetown, where cambios cluster

**Market count:**  
Low tens of cambios (estimate, unverified), plus an unknown number of pawnbrokers.

**The gap:**  
A tool that turns a counter log into an FIU-format threshold report. It may not be needed if the FIU portal already accepts simple uploads.

**Possible product:**  
A transaction log with ID capture and automatic monthly threshold-report export.

**MVP:**  
A spreadsheet template plus a generator for the FIU report format.

**Pricing hypothesis:**  
US$20–50 per month. Buyers more likely want a done-for-you service from their accountant than software.

**How to find first customers:**  
The Bank of Guyana licensed-dealer list and in-person visits.

**Risks:**  
- The market is tiny.
- A foreign solo founder would need a local partner, both for in-person sales and to win trust with cash businesses.
- The FIU may mandate goAML, whose XML schemas generic tools already support.

**Kill condition:**  
Drop the idea if the FIU uses goAML with a web-form entry, or if there are fewer than about 50 obliged small entities.

**Score:** 3/10

**Sources:**  
- https://fiu.gov.gy/?p=6190
- https://stabroeknews.com/?p=490546
- https://fiu.gov.gy/issue-no-2-what-is-the-fiu-what-is-a-reporting-entity-what-is-the-structure-of-the-fiu-how-is-the-fiu-funded-how-does-the-fiu-operate/

## 3. Rejected

- **Scrap metal dealers:** the trade is intermittently banned and reopened, so there is no stable recurring workflow. The licensing workflow is not public. Sources: https://dpi.gov.gy/scrap-metal-trade-re-opened-for-a-limited-period/, https://mola.gov.gy/public/laws/Volume%2018%20Cap.%2091.02%20-%2096.011695663913.pdf
- **Domestic-worker employers, minibus operators, market vendors, rice millers:** none has a recurring multi-recipient filing, or the government is the only channel and buyers have low WTP. These verdicts come from desk judgement, not search evidence.
- **Gold dealers and small miners:** not assessed because the search was refused. This sector would be the first follow-up if budget allows, specifically GGB dealer returns and GGMC miner returns.

## 4. Method notes

- English-language regulator queries work for Guyana: DPI, FIU and the MOLA law archive index well.
- The scrap query surfaced mostly Trinidad and UK registers, so Guyana's regulators publish few registers online.
- The search tool hit a usage limit on the 2nd call, so this pass is incomplete. The gold-sector queries are the main gap.
