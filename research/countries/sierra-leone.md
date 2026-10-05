# Sierra Leone: Indie Opportunity Research (as of 2026-10-05)

> **Research constraints (read first).** This track was cut short by tooling limits:
> - WebFetch was not used, per the method notes (blocked for almost all domains).
> - **The shared WebSearch budget ran out after 2 successful searches.** The third search (cocoa/coffee EUDR traceability) was refused with "usage limit", and the method says to stop at that point.
>
> **Verified** below means the fact appeared in search-result content returned in this session. The listed URLs could not be opened. **Desk screen** rows come from background knowledge only and were **not verified**. No numbers, URLs or product names have been invented. Anything not confirmed is marked *unverified* or *estimate*.
>
> **Accessibility:** Sierra Leone is not under comprehensive US/EU/UK sanctions (desk knowledge, unverified in this session). A foreign solo founder could sell software there. The practical limits are the small formal economy, low software budgets and mobile-money/USD payment rails.

**Bottom line.** Sierra Leone is a small, low-income market. No opportunity found reaches the brief's bar of 5,000 reachable buyers at $200–500/month. The two items below are the least-bad leads, scored honestly low. The country is better served as an add-on to a regional West African product (Ghana, Liberia, Guinea) than as a standalone market.

---

## Industries screened

| # | Industry | Workflow looked at | Evidence | Verdict | One-line reason |
|---|---|---|---|---|---|
| 1 | GST-registered retailers/wholesalers | Monthly GST returns; ECR (electronic cash register) obligations under Finance Act 2026 | Verified (law changes) | **Weak shortlist (Opp. 1)** | Mandatory monthly filing, but the GST-registered population is small, and ECR vendors plus the NRA portal cover the core. |
| 2 | Mineral dealers / exporters (gold, diamonds) | Purchase records, dealer→exporter chain, export valuation via the NMA | Verified (licence data, MCAS) | **Weak shortlist (Opp. 2) / poor distribution** | Real chain-of-custody paperwork, but a state system (MCAS) runs licensing and export valuation, and there are only a few hundred licensees. |
| 3 | Foreign digital service providers | GST registration/representative under Finance Act 2026 | Verified (rule exists) | Reject | Handled by global tax-compliance vendors and advisors. The buyers are foreign multinationals, not local SMEs. |
| 4 | Cocoa/coffee exporters | EUDR geolocation/traceability packages | Search refused, not verified | Not assessed (likely poor distribution) | Small export volumes; buyers' own traceability systems likely dominate (unverified). |
| 5 | Employers / payroll | Monthly PAYE (NRA) + NASSIT contributions | Desk screen (unverified) | Likely reject | Small formal payroll base; generic payroll/accounting tools and accountants already do this. |
| 6 | Customs brokers / clearing agents | ASYCUDA declarations | Desk screen (unverified) | Needs verification | Third-party automation access to ASYCUDA unknown. The broker pool is small. |
| 7 | Pharmacies / medicine importers | Pharmacy Board product registration and import permits | Desk screen (unverified) | Reject | Low-frequency permits; few importers. |

---

## Strongest opportunities

### Opportunity: GST month-end pack for small GST-registered traders

**Industry:**
Retail/wholesale trade (GST-registered SMEs).

**Buyer:**
Owner or bookkeeper of a GST-registered trading business, or the small accounting firm that files for several of them.

**Trigger / Why now:**
- The **Finance Act 2026** replaced GST Act s.38(1). GST is now due no later than the end of the month after the tax period.
- From 1 Jan 2026, GST-registered taxpayers who operate **ECR machines** must replace damaged or faulty machines at a cost the Commissioner-General sets in the Gazette.
- Other 2026 GST changes include digital-services registration triggers and input-tax denial rules.

**Current workflow:** *(presumed; validate in interviews)*
1. The trader issues sales through an ECR and keeps purchase invoices on paper or in Excel.
2. At month-end the bookkeeper totals ECR Z-reports and purchase invoices by hand.
3. The bookkeeper computes output and input GST and files/pays through the NRA channel by the new deadline.

**Pain:**
The deadline is mandatory and late payment carries penalties *(penalty specifics unverified)*. ECR data and purchase records live in separate places. No complaint evidence was gathered.

**Existing solutions:**
NRA-approved ECR vendors and the NRA's own filing channel *(unverified names)*, generic accounting software (QuickBooks, Sage, etc.) and local accountants doing it manually.

**The gap:**
Possibly the reconciliation between ECR Z-reports and purchase-side input GST in a Sierra Leone return format. Not validated.

**Possible product:**
A mobile-first tool that captures ECR Z-report totals and purchase invoices and outputs a ready-to-file GST worksheet each month.

**MVP:**
Spreadsheet-like web app with an NRA GST return template, a deadline reminder and a per-client view for accountants.

**Pricing hypothesis:**
$10–25/month per business, or $50–100/month for an accounting firm *(estimate)*.

**How to find first customers:**
Accounting firms (ICASL member directory, *unverified availability*), and NRA taxpayer-education events.

**Risks:**
A small GST-registered base; low willingness to pay; the NRA could ship its own e-invoicing/e-filing integration; generic accounting tools.

**Kill condition:**
Fewer than about 2,000 GST registrants, or ECR vendors already export return-ready data.

**Score:** 3/10

**Sources:**
- https://lookuptax.com/tax-changes/sierra-leone/ecr-replacement-duty-2026
- https://lookuptax.com/tax-changes/sierra-leone/gst-payment-deadline-2026
- https://lookuptax.com/tax-changes/sierra-leone/digital-services-registration-trigger-2026
- https://sierraleone.budgit.org/2026/06/18/the-new-finance-act-2026-and-its-impact-on-sierra-leone-budgit-sierra-leone-perspective/

---

### Opportunity: Dealer/exporter purchase ledger for artisanal gold and diamond buyers

**Industry:**
Artisanal mineral trading (gold, diamonds).

**Buyer:**
Licensed mineral dealers and holders of a Mineral Exporter's Licence.

**Trigger / Why now:**
- The **National Minerals Agency (NMA)** has deployed the **MCAS** system to administer the whole licensing chain and the gold/diamond valuation desks used before export. The WCO News 2026 issue covers it.
- Artisanal gold licences rose from 217 (2023) to 319 (2025). Diamond artisanal licences fell from more than 1,200 to 679 over the same period.
- 207 kg of gold was exported in H1 2026.
- The Mineral Exporter's Licence is annual. The exporter may buy only from licensed dealers or dealer's agents, which implies keeping purchase-provenance records.

**Current workflow:** *(presumed)*
1. The dealer buys from licensed miners and records weight and seller licence in a book or Excel.
2. The exporter buys from the dealer and assembles provenance documents.
3. The exporter presents the consignment at the NMA valuation desk, where the data goes into MCAS. Any reporting obligations to NMA are unverified.

**Pain:**
Chain-of-custody evidence is mandatory and transaction values are high. No complaint evidence was gathered.

**Existing solutions:**
NMA's MCAS (government system), Kimberley Process paperwork handled by the NMA, and manual ledgers.

**The gap:**
The dealer-side purchase register before MCAS. Possibly not needed if MCAS covers dealers.

**Possible product:**
A purchase register that validates seller licences and generates provenance packs for each export lot.

**MVP:**
A web/mobile ledger with a seller-licence field, lot builder and PDF export.

**Pricing hypothesis:**
$30–80/month per dealer *(estimate)*.

**How to find first customers:**
NMA licence registers / online repository *(availability unverified)*.

**Risks:**
- A state system dominates.
- Only a few hundred buyers.
- High AML/integrity reputational risk.
- Informal market.

**Kill condition:**
MCAS already provides dealer-level purchase entry, or there are fewer than about 100 active dealers.

**Score:** 2/10

**Sources:**
- https://awokonewspapersl.com/sharp-fall-in-diamond-licences-gold-exports-rise-nma-calls-for-data-driven-policy/
- https://mag.wcoomd.org/magazine/wco-news-110-issue-2-2026/digitalizing-diamond-and-gold-export-controls/
- https://www.nma.gov.sl/wp-content/uploads/2025/12/ApplicationProcess.pdf
- https://www.nma.gov.sl/service-charter/

---

## Rejected after competitor research

- **Digital-services GST compliance for foreign providers:** the buyers are foreign platforms, already served by global indirect-tax vendors and advisors (verified rule; competitor names not checked in this session).
- **Mineral export documentation (export stage):** killed by the NMA's MCAS system, which handles licensing and export valuation (verified, WCO 2026).

## Attractive problem, poor distribution

- Artisanal gold/diamond chain of custody (a few hundred licensees, informal sellers).
- Cocoa/coffee EUDR traceability (not verified; small exporter pool).

## Too competitive

- Payroll PAYE/NASSIT (desk screen, unverified): generic payroll tools and accountants.
