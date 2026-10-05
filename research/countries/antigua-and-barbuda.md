# Antigua and Barbuda: Indie-Hacker Opportunity Research

**Date:** 2026-10-04 · **Market class:** Microstate (population about 100k; two islands; an economy based on tourism and the Citizenship by Investment programme) · **Search budget used:** 4 of 4 (microstate cap)

## Bottom line

No standalone opportunity is viable in Antigua and Barbuda. The market is too small to support a solo-founder software business on its own. Its buyers number in the hundreds, not thousands. The one real "why now" is the government's announcement of **ABST (sales tax) e-invoicing plus a new Inland Revenue tax-administration platform** (2026 Budget). Even that has no published scope, technical spec or date yet. It is worth tracking only as an **add-on module** for a product built for a larger Caribbean / OECS market, such as Barbados, Jamaica, Trinidad and Tobago or the Dominican Republic. Those markets could share a Caribbean sales-tax e-invoicing connector.

There are no accessibility problems: Antigua and Barbuda is not sanctioned, uses USD-pegged XCD, and has normal internet access.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Retail / hospitality / all ABST registrants | Monthly ABST return, upcoming e-invoicing | Watch (add-on only) | Real 2026 trigger, but no spec or timeline yet, and there are only a few thousand registrants at most (estimate) |
| Customs brokers / importers | Customs entries (ASYCUDA) plus planned trade single window | Reject | The single window is "conceptual", and the government/UNCTAD will provide the integration. The broker count is tiny |
| Maritime agents / ship agents | IMO-backed maritime single window for vessel notifications | Reject | The government will provide the system through IMO technical cooperation. There are very few agents |
| DNFBPs (real estate, car dealers, lawyers, accountants, CIP agents) | AML/KYC records and reporting to ONDCP | Reject | The buyer pool is small, generic KYC tools already exist, and evidence of a new 2025–26 trigger is weak |
| Employers / payroll | Social Security, Medical Benefits and Education Levy filings | Not researched in depth (budget) | Probably real duplicate entry, but too few employers for a standalone product |

## Opportunities

### Opportunity: ABST E-Invoicing Connector (as a Caribbean add-on module, not standalone)

**Industry:**
Retail, hospitality, distribution and professional services registered for ABST

**Buyer:**
Owner or bookkeeper of an ABST-registered business (taxable supplies above EC$300,000 per year), plus the local accounting firms that file for them

**Trigger / Why now:**
On 4 Dec 2025 the Prime Minister announced e-invoicing to support "full digitization" of ABST. He also announced a new tax-administration platform at the Inland Revenue Department (2026 Budget). Scope, technical specifications and timeline are **not yet disclosed** (KPMG, Dec 2025 and Jan 2026).

**Current workflow:**
1. The business issues invoices from its POS, accounting software or by hand.
2. Each month the bookkeeper totals ABST from sales records in spreadsheets or the accounting software.
3. The bookkeeper files the monthly ABST return, due by the last day of the following month.
4. After e-invoicing: invoices will presumably have to be reported or cleared in real time or near real time. The format is unknown.

**Pain:**
At present this is a routine monthly return, so the pain is moderate. The pain will spike when e-invoicing becomes mandatory, if the POS and accounting software in use cannot connect to the new system. That is unverified until the spec is published.

**Existing solutions:**
- Generic accounting software (QuickBooks, Sage and Xero are commonly used in the Caribbean; local usage share is unverified).
- Local accounting and bookkeeping firms filing manually.
- Whatever free portal or invoicing tool the new IRD platform provides. Caribbean tax authorities often provide a free web invoicing tool for small taxpayers.
- Global e-invoicing vendors (e.g. Avalara, Sovos, Pagero) may add Antigua if the volume justifies it (unverified).

**The gap:**
Global accounting software is unlikely to build a connector for a market of about 100k people. Businesses may end up re-keying invoices into a government portal. That gap appears only once the spec is published.

**Possible product:**
A middleware that takes invoices from QuickBooks/Xero/POS exports, validates them against ABST rules, and submits them to the IRD e-invoicing endpoint. The same core would be reused across several Caribbean jurisdictions.

**MVP:**
Can't define one yet, because there is no spec. The step before an MVP is to monitor the IRD for the technical specification and API (or lack of one).

**Pricing hypothesis:**
US$20–50/month per business (estimate). Revenue from Antigua alone would be well below what one founder needs to live on.

**How to find first customers:**
Local accounting firms, the Antigua and Barbuda Chamber of Commerce membership, and POS resellers.

**Risks:**
- The government may provide a free invoicing portal or approve only certified fiscal devices/vendors.
- There may be no API.
- The timeline may slip. Caribbean digitization projects often take years.
- The market is tiny.

**Kill condition:**
Any one of these: the IRD publishes no API, it provides a free tool that covers small businesses, or no other Caribbean market adopts a compatible e-invoicing mandate within 24 months.

**Score:** 3/10 (standalone); about 5/10 as part of a multi-island Caribbean e-invoicing product

**Sources:**
- KPMG, "Antigua and Barbuda: Planned e-invoicing system" (Dec 2025): https://kpmg.com/us/en/taxnewsflash/news/2025/12/antigua-barbuda-planned-e-invoicing-system-tax-compliance.html
- KPMG, "Antigua and Barbuda: 2026 budget" (Jan 2026): https://kpmg.com/us/en/taxnewsflash/news/2026/01/antigua-barbuda-2026-budget.html
- Government 2026 Budget Statement: https://ab.gov.ag/pdf/budget/2026/2026_budget_statement.pdf
- VATupdate (Dec 2025): https://www.vatupdate.com/2025/12/09/antigua-and-barbuda-to-launch-e-invoicing-system-for-sales-tax-digitization/
- ABST threshold and monthly filing: https://www.bizlatinhub.com/tax-obligations-in-antigua-and-barbuda/

## Rejected after competitor research

- **Customs broker / single-window data bridge:** The government plans a single window that integrates agencies with ASYCUDA, but it is "still in its conceptual stages". UNCTAD/ASYCUDA and the government itself will provide the integration, so there is no room for a small vendor, and the broker count is very small. Sources: https://antiguaobserver.com/?p=320289, https://asycuda.org/news/
- **Maritime single-window filing for ship agents:** The IMO technical cooperation programme is delivering it as a government system, and there are very few buyers. Source: https://antiguaobserver.com/?p=320289
- **DNFBP AML compliance (real estate, car dealers, CIP agents):** The regulator is ONDCP, which acts as Supervisory Authority and FIU. The guidelines were updated May 2024, and the country has already exited the CFATF follow-up process, so there is no fresh trigger. The buyer pool is small, and generic global KYC/AML tools (e.g. VinciWorks training, standard KYC vendors) are a substitute. Sources: https://vinciworks.com/blog/a-guide-to-money-laundering-compliance-in-antigua-and-barbuda/, https://abstvradio.com/prime-minister-gaston-browne-encouraged-by-positive-review-of-antiguas-fight-against-money-laundering/

## Attractive problem, poor distribution

- **Payroll statutory filings** (Social Security, Medical Benefits, Education Levy): duplicate entry is likely, but there are too few employers and this was not verified (search budget exhausted). It is better approached as an OECS-wide payroll compliance add-on.

## Too competitive

- None identified. The constraint in Antigua and Barbuda is market size, not competition.

## Recommendation

Do not pursue Antigua and Barbuda as a standalone market. Add the ABST e-invoicing mandate to a watch list. Revisit when the IRD publishes the e-invoicing technical specification. Treat Antigua as one jurisdiction within a pan-Caribbean sales-tax/e-invoicing compliance product.
