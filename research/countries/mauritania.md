# Mauritania: Country Research Track

**Market size class:** Small (population about 5 million; formal private sector concentrated in Nouakchott and Nouadhibou). Search budget used: 10 of 10.

**Bottom line:** I found no strong standalone indie-SaaS opportunity. The only lead worth noting is fisheries exporters adapting to the EU's mandatory digital catch certificate (CATCH, effective 10 January 2026). Even that is weak. The buyers are a few dozen to low hundreds of firms, the EU's own system is free, and Mauritanian authorities (ONISPA and the Ministry of Fisheries) control validation. Mauritania is better treated as an add-on to a Senegal or Morocco fisheries-export or francophone accounting product than as a market of its own.

## Accessibility check

- **Sanctions:** I found no evidence of US, EU or UK sanctions restricting software or IT services to Mauritania. This is based on general knowledge; I did not search it specifically, so treat it as **unverified**.
- **Payments:** Card acceptance and international SaaS billing are weak, and I am not aware of Stripe supporting local merchants (**unverified**). Domestic digital payments run mainly through mobile wallets. The 2026 Finance Law adds a new 0.1% tax on electronic transactions, collected by wallet operators ([Invest-Time](https://invest-time.com/2026/01/17/mauritanie-budget-2026-taxe-electro/), [LF 2026](https://www.finances.gov.mr/sites/default/files/2026-01/Loi%20de%20Finances%20pour%20l%E2%80%99ann%C3%A9e%202026.pdf)). A foreign solo founder would probably need to bill in EUR/USD by bank transfer or use a local reseller.
- **Languages:** French is the business language and Arabic is official. Hassaniya is used in daily life.
- **Verdict:** The market is accessible but hard to monetise. It is not blocked.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Fisheries / seafood exporters | Health certificates (ONISPA) plus EU catch certificate (CATCH, mandatory since 10 Jan 2026) plus traceability by lot | Weak lead | Real new trigger, but there are few buyers, the EU tool is free and the state controls validation |
| Accountants / SME tax | DGI tax filing and payment on stt.e-tax.impots.gov.mr; SYSCOHADA bookkeeping | Rejected | Portal exists, there is no e-invoicing mandate yet, the market is small, and local firms and Sage-type tools cover it |
| Payroll / social security | Monthly CNSS employer filings | Rejected | Monthly and mandatory, but I could not confirm any CNSS e-filing portal to integrate with; few formal employers; EOR/payroll bureaus serve foreign firms |
| Customs brokers / freight forwarders | Customs declarations and single window (ASYCUDA/SYDONIA) | Rejected | No Mauritania-specific evidence of a new portal trigger; brokers key directly into the customs system; tiny buyer pool |
| Artisanal gold (Maaden) | Licensing of miners and traceability of gold sold to the Central Bank | Rejected | The state runs the whole chain (Maaden company, the Central Bank buys at a fixed price, 60–70% goes to the black market); no SME buyer for software |
| Fishmeal plants | Environmental and licensing compliance | Rejected | The industry has shrunk to about 8 active plants (Sept 2025) as regulation tightened |

## Opportunities

### Opportunity: EU CATCH and sanitary-certificate pack for Mauritanian seafood exporters

**Industry:**
Fisheries / seafood processing and export (mainly Nouadhibou)

**Buyer:**
Export manager or quality manager at EU-approved processing and freezing plants and at freezer-vessel operators exporting to the EU

**Trigger / Why now:**
Since 10 January 2026, the EU requires digital catch certificates through the CATCH system for all fishery imports. New digital rules on lots and traceability also apply to fresh and frozen products. Exporters and flag-state authorities in non-EU countries must create, validate and transfer certificates online. ([worldfishing.net](https://www.worldfishing.net/?p=29198), [AGRINFO](https://agrinfo.eu/book-of-reports/revised-eu-rules-and-digitalisation-of-fisheries-control/), [French ministry CATCH guide](https://www.mer.gouv.fr/sites/default/files/2025-12/2025-0418_guide-catch.pdf))

**Current workflow:**
1. The plant records landings and purchases from vessels or pirogues, often on paper or in spreadsheets.
2. It asks ONISPA for the control, origin and sanitary certificate required for each export lot ([FAOLEX](https://faolex.fao.org/docs/pdf/mau1401.pdf)).
3. It enters the same catch, vessel and lot data again into CATCH for validation by the Mauritanian fisheries authority.
4. It sends the same data a third time in buyer-specific spec sheets and traceability files for EU importers.

**Pain:**
The same lot data is entered into three or more places, and certificates rejected at an EU border hold up payment. The pain is inferred from the trigger. I did not find any Mauritania-specific complaint (**unverified**). Artisanal supply is hard to trace ([trade.gov](https://trade.gov/country-commercial-guides/mauritania-fisheries)).

**Existing solutions:**
- The EU CATCH web interface, which is free
- National systems run by the Mauritanian authorities (ONISPA and the ministry), whose digital status is **unverified**
- Large exporters' ERPs
- Global seafood traceability platforms such as Trace Register and Wholechain (named from general knowledge; their activity in Mauritania is **unverified**)
- Local quality consultants

**The gap:**
A tool that turns one lot record into the ONISPA request, a pre-filled CATCH certificate and the buyer's traceability file. This is only possible if CATCH and ONISPA accept bulk or API input from third parties, which is **unverified**.

**Possible product:**
A lot-register web app that generates all export documents from one entry, with a CATCH-ready data export and rule checks before submission.

**MVP:**
A spreadsheet-like lot register, plus a PDF/CSV generator for the CATCH fields and the ONISPA request template, in French.

**Pricing hypothesis:**
EUR 100–300 per month per plant (**estimate**).

**How to find first customers:**
The EU list of approved Mauritanian establishments and freezer vessels (published in TRACES / DG SANTE lists), and the Nouadhibou free-zone directory.

**Risks:**
- The buyer pool is small: probably under 150 EU-approved establishments (**estimate**).
- The authorities may build or mandate their own tool, possibly donor-funded.
- Payment collection is hard.
- Senegal and Morocco would have to be added to make the business viable.

**Kill condition:**
Any one of these: CATCH has no third-party upload or API; ONISPA validation must stay paper-based or in person; or fewer than 50 plants actively export to the EU.

**Score:** 4/10

**Sources:**
- https://www.worldfishing.net/?p=29198
- https://agrinfo.eu/book-of-reports/revised-eu-rules-and-digitalisation-of-fisheries-control/
- https://www.mer.gouv.fr/sites/default/files/2025-12/2025-0418_guide-catch.pdf
- https://faolex.fao.org/docs/pdf/mau1401.pdf
- https://trade.gov/country-commercial-guides/mauritania-fisheries
- https://news.mongabay.com/2026/01/mauritanias-fishmeal-fever-ends-as-government-tightens-regulation/

No other opportunity reached the bar. I list only one rather than padding the report.

## Rejected after competitor research

- **E-invoicing compliance add-on.** DGI has no e-invoicing mandate (third-party summary at [tax2gov](https://tax2gov.com/mauritania-dgi-e-invoicing-api/), not confirmed in official DGI material). Tax filing and payment already run on DGI's own free e-tax portal ([impots.gov.mr teleservices](https://impots.gov.mr/DGI/teleservices.html)), so there is no trigger and no gap. This needs a re-check if a future finance law adds e-invoicing.
- **SME accounting / tax-filing tool for accountants.** The free DGI portal plus SYSCOHADA-compatible accounting packages, together with established firms such as EXCO GHA ([aviaanaccounting](https://aviaanaccounting.com/accounting-firms-in-mauritania/)), already cover this. The market is too small.
- **Gold traceability (Maaden).** The state-run chain is the substitute: Maaden handles formalisation and the Central Bank buys at a fixed price ([le360](https://afrique.le360.ma/mauritanie/economie/2020/11/04/32441-mauritanie-apres-la-ruee-vers-lor-voici-pourquoi-les-autorites-formalisent-aujourdhui)). There is no private SME buyer.
- **Fishmeal plant compliance.** Only about 8 plants are still active ([Mongabay, Jan 2026](https://news.mongabay.com/2026/01/mauritanias-fishmeal-fever-ends-as-government-tightens-regulation/)).

## Attractive problem, poor distribution

- **CNSS monthly employer declarations.** The filings are mandatory every month ([asanify](https://asanify.com/global-employer-of-record/mauritania/payroll/)), but formal employers are few, I could not confirm any portal to integrate with, and outsourced payroll bureaus already serve the foreign firms ([africa-hr](https://africa-hr.com/mauritania-payroll-outsourcing/)).
- **Customs brokers and the single window.** I found no Mauritania-specific evidence of a new portal. The buyer pool is tiny and closed.

## Too competitive

None in a meaningful sense. The market is limited more by its small size than by competition.

## Add-on note

Mauritania could be added to a regional West Africa/Maghreb seafood-export compliance product built mainly for Senegal and Morocco, which have far more EU-approved establishments. It is not worth targeting first.
