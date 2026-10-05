# Saint Kitts and Nevis: Opportunity Research

**Market type:** Microstate. Population is about 47,000 (estimate, not verified in this session). Currency is the EC dollar, shared across the ECCU, and the US dollar is widely used.
**Search budget used:** 4 of 4 (microstate cap).
**Accessibility:** No sanctions or internet restrictions apply. A foreign solo founder can sell software here. The constraint is market size, not access.

**Bottom line:** I found **no viable standalone indie-software opportunity** in Saint Kitts and Nevis. The domestic SME base is too small for a recurring-revenue product to reach meaningful MRR. Two workflows are real and mandatory. They are worth carrying as **add-on modules** to a product built for a larger market:
- Nevis corporate service providers' AML and beneficial-ownership workflow, sold into a wider offshore/OECS CSP product.
- SMARTS tax-filing prep for accountants, sold into an ECCU-wide product.

---

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Corporate / trust service providers (Nevis offshore sector) | AML/CFT client due diligence, beneficial-ownership register upkeep, FSRC inspections | Weak candidate (add-on only) | The pressure is real, from the CFATF follow-up process (2025) and the BO register duty. But there are only a few dozen licensed providers, and global CSP/entity-management suites already serve this segment. |
| Accountants / tax preparers | VAT, corporate income tax and PAYE filing in the SMARTS portal (live since Feb 2024) | Weak candidate (add-on only) | The work is monthly and mandatory, and the portal has documented problems (deadline extensions, CIT-101 outage in Mar 2026). The buyer pool is tiny and the portal has no known public API. |
| CBI authorised agents / developers | Applicant due-diligence file assembly and agent regulatory reporting to the CIU | Reject | The CIU outsources due diligence to an EU firm (2025), so the core work is government-run. Agents are few, already licensed and served by global CBI CRMs. The sector is also reputationally sensitive. |
| Customs brokers / importers | ASYCUDA World declarations | Reject | Brokers are not mandatory. Direct trader input is free. ASYCUDA is a UNCTAD-standard system with a regional broker-software ecosystem, and import volume is tiny. |
| Hospitality / tourism SMEs | VAT plus hotel accommodation tax filing | Reject | Already covered by accounting packages and accountants, and the number of buyers is very small. |

---

## Opportunities (add-on modules only, not standalone)

### Opportunity: Nevis CSP AML / beneficial-ownership evidence pack (add-on to an OECS/offshore CSP compliance tool)

**Industry:**
Corporate and trust service providers (registered agents for Nevis LLCs, IBCs and trusts)

**Buyer:**
Compliance officer or MLRO at a licensed Nevis or St Kitts registered agent / trust company

**Trigger / Why now:**
- The CFATF/FATF enhanced follow-up (2025) re-rated Recommendations 24 (beneficial-ownership transparency of legal persons) and others. Further follow-up and inspection pressure continues.
- Licensed service providers must keep and verify beneficial-ownership registers and disclose them to authorities on request.
- CBI reform in 2024–2025 tightened AML checks across the financial ecosystem.

**Current workflow:**
1. The agent collects KYC documents from introducers abroad by email or PDF.
2. Staff screen names, sometimes manually, and store evidence in folders or the entity-management system.
3. Staff keep the BO register in a spreadsheet or the CSP system and update it when ownership changes.
4. For FSRC inspections or authority requests, staff manually assemble evidence packs and risk assessments.

**Pain:**
Mandatory work with penalty and licence risk, driven by the jurisdiction's need to show effectiveness to CFATF. The evidence is jurisdiction-level (FATF/CFATF reports). I found **no firm-level complaint evidence**, so the pain is unverified at the operator level.

**Existing solutions:**
- Global CSP/entity-management and KYC suites used across offshore centres. ViewPoint, Diligent Entities, Athennian and screening vendors such as World-Check, ComplyAdvantage and Sumsub are examples. Their presence in Nevis specifically is **unverified**.
- In-house spreadsheets.
- Regional AML consultants.

**The gap:**
Possibly a local inspection-ready evidence pack in the FSRC/Nevis format. Unverified.

**Possible product:**
A light compliance layer that turns a CSP's client file into a jurisdiction-specific BO register, risk rating and inspection pack. It would cover several small offshore jurisdictions: Nevis, Anguilla, BVI-lite players and other OECS states.

**MVP:**
A BO register with change log, an ownership-chain diagram and a one-click "authority request" export in the FSRC format.

**Pricing hypothesis:**
US$150–400/month per CSP (estimate).

**How to find first customers:**
The Nevis FSRC and St Kitts FSRC public lists of licensed registered agents / service providers.

**Risks:**
- The buyer pool is tiny (dozens).
- Established global suites already serve this segment.
- Inspection formats are not public.
- The product is only viable if the same tool sells across many offshore centres.

**Kill condition:**
Most Nevis CSPs already run ViewPoint or a similar suite with BO-register modules. Or there are fewer than about 30 licensed agents.

**Score:** 3/10 standalone; 5/10 as a module of a multi-jurisdiction offshore-CSP product.

**Sources:**
- https://www.fatf-gafi.org/en/publications/Mutualevaluations/St-Kitts-Nevis-FUR-2025.html
- https://cfatf-gafic.org/st-kitts-and-nevis-progress-in-strengthening-measures-to-tackle-money-laundering-and-terrorist-financing/
- https://www.fatf-gafi.org/en/publications/Mutualevaluations/Mer-st-kitts-nevis-2022.html
- https://amlnetwork.org/aml-news/nevis-fsrc-reinforces-aml-and-counter-terrorism-regime/

---

### Opportunity: SMARTS filing-prep for accountants (add-on to an ECCU tax-filing tool)

**Industry:**
Accountants and bookkeepers

**Buyer:**
Small accounting practices that file VAT, corporate income tax and payroll returns for SMEs

**Trigger / Why now:**
- The IRD moved to SMARTS (online filing and payment) in February 2024.
- 2025 brought repeated VAT and all-tax-type deadline extensions, to 24 Nov 2025 and 17 Dec 2025.
- The CIT-101 portal had technical difficulties in March 2026, ahead of the 15 April deadline.

**Current workflow:**
1. Export figures from QuickBooks, Sage or Excel.
2. Re-key the figures into the SMARTS return forms for each client.
3. Track deadlines and extensions, then pay online.
4. Keep the evidence.

**Pain:**
The VAT work is monthly and mandatory, and penalties and interest apply. Portal instability is documented. Manual re-keying is likely but **unverified**.

**Existing solutions:**
- Accountants' existing practice tools.
- QuickBooks and Sage tax reports.
- The SMARTS portal itself, which is free.
- Manual entry.

**The gap:**
Mapping accounting exports to SMARTS return fields across a multi-client deadline calendar. This only matters if the same SMARTS-style system is used in other ECCU states, which is unverified.

**Possible product:**
A multi-client VAT/CIT prep workbook with deadline tracking and an export to the SMARTS form layout.

**MVP:**
A QuickBooks/Xero export, a VAT return worksheet, and a deadline/extension tracker covering one ECCU country.

**Pricing hypothesis:**
US$30–80/month per practice (estimate).

**How to find first customers:**
The ICAECC (Institute of Chartered Accountants of the Eastern Caribbean) membership. Not verified this session.

**Risks:**
- There are perhaps 20–60 practices in total (estimate).
- There is no public portal API.
- Accounting vendors may add local VAT reports.

**Kill condition:**
SMARTS supports bulk upload or an API already, or the regional practice count is too small.

**Score:** 2/10 standalone; 4/10 as an ECCU-wide product.

**Sources:**
- https://www.sknird.com/
- https://www.sknird.com/announcements-upcoming-events
- https://www.sknird.com/cit-101-portal-technical-difficulties-march-5-2026/
- https://orbitax.com/news/country/article/Saint-Kitts-and-Nevis-Launchin-54306

---

## Rejected after competitor research

- **CBI applicant due-diligence and agent reporting tool.** The CIU partnered with an EU-based due-diligence firm and runs its own AML/CTF protocols (2025), so the core due diligence is done by government. Authorised agents are regulated (2023 rules) and use global CBI/immigration CRMs. The sector also carries reputational risk.
  Sources: https://ciu.gov.kn/2025/07/30/ and https://www.gov.kn/st-kitts-and-nevis-implements-new-regulations-for-cbi-authorized-agents/
- **Customs declaration prep for brokers and importers.** ASYCUDA World direct trader input is free, brokers are not mandatory, and the single window is government-run. Import volume is tiny.
  Source: https://tfadatabase.org/en/members/saint-kitts-and-nevis/article-10-6-2

## Attractive problem, poor distribution

- Both opportunities above. The pain is mandatory, but the buyer pool numbers only dozens of firms in-country.

## Too competitive

- AML/KYC screening for CSPs. Global screening vendors and CSP suites already cover this.

## Notes and limits

- Only 4 searches were run (microstate cap). Operator-level pain, the competitor presence in Nevis and the licensee counts are unverified.
- The jurisdiction should be researched as part of an **ECCU/OECS bundle**, or the **offshore-CSP vertical** across several small financial centres, not on its own.
