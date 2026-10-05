# Belize: Indie-Hacker Opportunity Research

_Research date: 2026-10-05. Belize track (small market: 10 WebSearch queries, all in English, which is Belize's official language)._

**Method and limitations (read first).** WebFetch was not used because the environment blocks it. Every fact below comes from search-result extracts, not from reading full documents. Where a competitor or number comes from my background knowledge and was not confirmed in a search, it is marked **unverified** or **estimate**.

Belize is a very small economy: population is roughly 0.4–0.45 million (estimate, not verified in this session), and buyer pools in most verticals run from dozens to low hundreds. **Bottom line: I found no strong standalone indie opportunity in Belize.** The one real "why now" is the GST e-invoicing mandate expected in 2027. Even that is best treated as an **add-on market** for a Central America / Caribbean e-invoicing or compliance product (Panama, Guatemala, Caribbean CARICOM states), not as a business on its own.

**Accessibility:** Belize has no sanctions or software-import restrictions and is English-speaking and USD-pegged (BZD 2:1). It is open to a foreign solo founder. The open question is whether non-resident software vendors can get BTS accreditation for e-invoicing, which is still unpublished.

---

## Industries screened

| # | Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|---|
| 1 | GST-registered SMEs, accountants, POS/ERP resellers | Pre-clearance B2B e-invoicing with the Belize Tax Service (BTS), large taxpayers first in 2027 | **Opportunity #1 (weak, watch)** | Real mandatory trigger (GST Amendment Act 2024; Budget of 10 Mar 2026; BTS FAQ of 9 Jun 2026). But technical specs are unpublished, wave 1 is only a few large taxpayers, and global providers (EDICOM, Comarch) plus a local Odoo partner are already positioning |
| 2 | Corporate service providers / licensed registered agents (offshore IBC sector) | OBRS annual returns (made up to 31 Dec, due by 30 Jun), beneficial-ownership filings, MLTPA KYC refresh | **Opportunity #2 (weak)** | Mandatory and recurring, and only registered agents can access OBRS. But there are few buyers (est. low hundreds or fewer), and global CSP/entity-management software already exists |
| 3 | Employers / payroll bureaus | Monthly SSB contribution statement via online portal, plus PAYE to BTS | **Opportunity #3 (weak)** | Monthly and mandatory, with two separate government systems. But it is a tiny market, payroll tools are a commodity, and SSB already provides an online portal and calculator |
| 4 | Hotels / tourist accommodation | Monthly 9% hotel-tax return to the Belize Tourism Board (BTB) portal, plus GST to BTS | Poor distribution / low pain | BTB portal has accepted online monthly returns and payments since 2017, so the remaining pain is one re-keying step a month |
| 5 | Seafood exporters (lobster, conch) | EU catch certificates (Reg. 1005/2008), BAHA certification, EU CATCH IT system (digital from Jan 2026) | Attractive problem, poor distribution | Exports are concentrated in a handful of fishermen's cooperatives (2019: 2.06M lb, about $21.3M), so a few buyers handle it manually or with government help |
| 6 | Customs brokers / importers | ASYCUDA World declarations; Single Window due by 31 Dec 2026 | Rejected | Brokers are not mandatory (direct trader input is allowed in ASYCUDA World), and the Single Window is a government/donor project. No small-vendor gap is visible |
| 7 | DNFBPs (real-estate agents, lawyers, accountants) | AML/CFT supervision by the FIU (STR filing, CDD) | Rejected (generic KYC trap) | No specific 2025–26 reporting cadence found, buyers are tiny, and the product would be generic KYC |

---

## Opportunity: Belize e-invoicing connector / "BTS clearance adapter" for existing POS and accounting tools

**Industry:**
Cross-industry. Buyers are GST-registered businesses (annual sales above BZD 75,000) and the accountants and POS resellers who serve them.

**Buyer:**
Finance manager or owner of a GST-registered mid-size business (distributors, hardware, wholesalers, hotels) that uses QuickBooks/Xero/Excel or a local POS. A second buyer is local POS/ERP resellers that need a clearance API.

**Trigger / Why now:**
- The General Sales Tax (Amendment) Act 2024, in force 1 Jan 2025, introduced mandatory e-invoicing and digital receipts.
- The 2026/27 Budget (10 Mar 2026) confirmed the rollout.
- BTS published a 13-page e-invoicing FAQ on 9 Jun 2026: a pre-clearance (CTC) model similar to the LatAm regimes, with large taxpayers live in 2027, B2B first, and connected to the existing IRIS portal.
- Technical specs, sandbox and accreditation rules were still pending as of June 2026.

**Current workflow:**
1. The business issues a paper or PDF invoice from QuickBooks, Excel or a POS.
2. An accountant compiles the monthly GST return and files it in the BTS IRIS portal.
3. After go-live, each B2B invoice must be authorized by BTS before it is delivered. QuickBooks has no Belize GST localization (Belize is not in QuickBooks' list of pre-filled countries).

**Pain:**
Today the pain is expected rather than observed. Once clearance applies, failing to issue cleared invoices brings GST compliance risk. The pain observed in other LatAm CTC regimes (rejections, contingency mode, credit notes) will likely repeat here.

**Existing solutions:**
- EDICOM and Comarch: global e-invoicing providers already publishing Belize content, which signals intent.
- Core Technology Belize: Odoo-based local POS/accounting provider, "Belize's first official local POS & accounting software provider".
- Odoo partners (ClearCommerce/"ClearSign" seen in results; its Belize relevance is unverified).
- Possibly a free BTS issuing tool. It has not been announced; this is unverified.

**The gap:**
A cheap connector that lets QuickBooks Online/Xero/Excel users clear invoices with BTS and handles rejections and credit notes, without migrating to Odoo or buying an enterprise EDICOM contract. Whether the gap exists depends entirely on the unpublished BTS spec and on whether BTS ships a free portal issuer.

**Possible product:**
A QuickBooks/Xero add-on plus a CSV/Excel uploader. It sends invoices to the BTS clearance API, stores authorization codes and the QR/PDF, and keeps a rejection queue. The same codebase can be reused for other small CTC jurisdictions.

**MVP:**
QuickBooks Online → BTS clearance for B2B invoices only, with a rejection/exception dashboard. Build only after BTS publishes the spec and sandbox.

**Pricing hypothesis:**
USD 30–80/month per entity, or USD 0.05–0.15 per cleared invoice. Accountants get multi-client plans.

**How to find first customers:**
- The BTS large-taxpayer list, if published (unverified).
- Belize Chamber of Commerce and Industry members.
- Accounting firms (ICAB, the Institute of Chartered Accountants of Belize; directory unverified).
- QuickBooks ProAdvisors in Belize.

**Risks:**
- BTS may offer a free web issuer that covers SMEs.
- Accreditation may require local presence.
- Wave 1 is only a few large taxpayers, who will buy from EDICOM or local Odoo partners.
- The total market is small (GST registrants are probably in the low thousands; estimate, unverified).

**Kill condition:**
BTS announces a free portal/app issuer for small taxpayers, or restricts accreditation to locally registered providers, or the SME wave is not scheduled before 2028.

**Score:** 4/10 (standalone). It reaches about 6/10 if Belize is one of several jurisdictions served by a shared CTC connector codebase.

**Sources:**
- https://kpmg.com/us/en/taxnewsflash/news/2026/03/tnf-belize-mandatory-e-invoicing-announced-as-part-of-2026-2027-budget.html
- https://www.vatcalc.com/belize/belize-b2b-e-invoicing-faqs-potential-2027-launch/
- https://www.vatupdate.com/2026/06/11/bts-publishes-e-invoicing-faqs-to-prepare-businesses-for-mandatory-digital-compliance/
- https://www.vatupdate.com/2026/06/20/briefing-document-podcast-e-invoicing-e-reporting-in-belize/
- https://www.comarch.com/trade-and-services/data-management/legal-regulation-changes/belize-advances-mandatory-e-invoicing-under-gst-regime/
- https://edicomgroup.com/blog/electronic-invoice-belize
- https://core-technology-belize.odoo.com/coretech-powered-by-odoo-showcase
- https://quickbooks.intuit.com/global/resources/taxes/what-is-gst/
- https://bts.gov.bz/guides/

---

## Opportunity: Registered-agent compliance calendar for OBRS annual returns, UBO filings and KYC refresh

**Industry:**
Offshore / corporate services (licensed registered agents under the Belize FSC).

**Buyer:**
Compliance officer or managing director of a Belize licensed registered agent / corporate service provider.

**Trigger / Why now:**
- The Companies Act 2022 moved filings to the Online Business Registry System (OBRS), and the annual return now reports directorships and shareholdings.
- The Companies (Amendment) Act 2023 (in force 13 Jul 2023) made UBO filing in OBRS mandatory.
- The LLC Act No. 48 of 2023 added a further entity type.
- AML pressure continues after the 4th-round mutual evaluation (GFI commentary).
- This is not a fresh 2026 trigger.

**Current workflow:**
1. The agent chases each client company (often foreign-owned) for director, shareholder and UBO updates and KYC documents by email.
2. Staff key the data into OBRS manually: the annual return made up to 31 Dec, due by 30 Jun, plus UBO changes.
3. KYC files are kept separately to meet MLTPA retention and refresh rules.

**Pain:**
Hundreds to thousands of entities per agent, all on the same annual deadline, plus event-driven UBO changes. Errors risk FSC sanctions. Evidence of the pain is inferred from the obligations, not from complaints found.

**Existing solutions:**
- Global CSP/entity-management software used by offshore agents (for example ViewPoint and similar, **unverified for Belize**).
- In-house spreadsheets.
- OBRS itself, the government system, which is the filing endpoint.

**The gap:**
OBRS is a government-controlled system, and no API was found. A tool would only be a pre-filing collection and calendar layer, close to the "generic document collection" trap.

**Possible product:**
A client-facing portal that collects UBO/director confirmations and KYC refreshes against the 30 June OBRS deadline. It produces a data sheet laid out in OBRS field order and an audit trail for FSC inspections.

**MVP:**
Entity list import → automated confirmation requests → OBRS-ready export and a deadline dashboard.

**Pricing hypothesis:**
USD 200–600/month per agent, tiered by entity count.

**How to find first customers:**
The FSC public list of licensed registered agents / corporate service providers (belizefsc.org.bz; that a list exists is unverified).

**Risks:**
- Very few buyers.
- Mature global CSP software.
- Offshore-sector volume is shrinking under the BO/ES regimes.
- Changes to the government system.

**Kill condition:**
There are fewer than about 60 licensed agents, or the main agents already use a CSP platform with an OBRS export.

**Score:** 3/10

**Sources:**
- https://bbcincorp.com/offshore/news/the-belize-companies-act-2022
- https://www.expanship.com/bz/registered-agent
- https://www.expanship.com/bz/blog/belize-company-privacy
- https://www.belizefsc.org.bz/wp-content/uploads/2023/12/Act-No.-48-of-2023-Limited-Liability-Companies.pdf
- https://gfintegrity.org/belizes-fourth-round-mutual-evaluation-progress-challenges-and-the-road-ahead/

---

## Opportunity: Belize payroll compliance pack (SSB monthly statement + PAYE + payslips)

**Industry:**
Payroll bureaus, accountants and SMEs with employees.

**Buyer:**
Small accounting firms running payroll for clients, and SMEs with 5–100 staff.

**Trigger / Why now:**
There is no new trigger. These are standing obligations:
- monthly SSB contribution statement submitted via the online portal (employer rate 8.13%, with a cap);
- mandatory payslips showing deductions;
- PAYE to BTS.

**Current workflow:**
1. Payroll is calculated in Excel or a generic tool.
2. The SSB contribution statement is keyed into the SSB portal.
3. Payment is made via Atlantic, Belize Bank or Heritage online banking using a payment reference.
4. PAYE is filed separately with BTS.

**Pain:**
Two government systems and a bank step every month. It is moderate pain for an accountant running payroll for many clients.

**Existing solutions:**
- Excel.
- The SSB online portal and contributions calculator.
- Global EOR/payroll providers (Rivermate, Asanify) for foreign employers.
- Local payroll software (unverified).

**The gap:**
A single payroll run that produces an SSB-ready statement file and the PAYE figures for an accountant with many clients. Whether SSB accepts file upload is unverified.

**Possible product:**
A multi-client Belize payroll calculator that outputs SSB statements, PAYE schedules and payslips.

**MVP:**
Excel import → SSB statement + payslip PDFs.

**Pricing hypothesis:**
USD 2–4 per employee per month, or USD 50–150/month per accounting firm.

**How to find first customers:**
- Accounting firm directories.
- Belize Chamber of Commerce.
- QuickBooks ProAdvisors.

**Risks:**
- Tiny market.
- Commodity product.
- An SSB portal redesign could break it.

**Kill condition:**
SSB has no bulk upload and accountants report the pain as low.

**Score:** 3/10

**Sources:**
- https://socialsecurity.org.bz/faqs/
- https://rivermate.com/en/guides/belize/taxes
- https://asanify.com/global-employer-of-record/belize/payroll/

---

## Rejected after competitor research

- **Customs declaration / broker tooling:** killed by ASYCUDA World direct trader input (brokers are not mandatory) and by the government/donor-funded Single Window due by 31 Dec 2026. Sources: https://tfadatabase.org/en/members/belize/article-10-6-2, https://tfadatabase.org/en/members/belize/technical-assistance-projects/article-7-1
- **Hotel-tax filing automation:** killed by the BTB online portal, which has taken monthly hotel-tax returns and payments since 2017. The remaining value is one monthly re-entry from the PMS, too thin to sell. Sources: https://www.belizetourismboard.org/btb-launches-new-online-portal/, https://www.belizetourismboard.org/?p=1586
- **DNFBP AML/KYC tool:** a generic KYC product sold to a tiny buyer pool. The FIU runs its own forms and STR channel (fiubelize.org). Source: https://gfintegrity.org/belizes-fourth-round-mutual-evaluation-progress-challenges-and-the-road-ahead/

## Attractive problem, poor distribution

- **Seafood export EU catch-certificate / traceability packages:** EU CATCH IT went digital for imports from Jan 2026, and BAHA and the Fisheries Department are the competent authorities. But exports are concentrated in a few cooperatives (about $21.3M in 2019), so the buyer count is too small for a product. Sources: https://www.mlcalliance.org/post/new-eu-catch-certificate-requirements-for-lobster-exports, https://unctad.org/publication/oceans-economy-and-trade-strategy-belize-marine-fisheries-and-seafood-processing, https://www.mondaq.com/eu-law/128338/council-regulation-ec-regulation-no-10052008-and-current-practices-in-belize

## Too competitive

- **Large-taxpayer e-invoicing (wave 1):** large taxpayers will go to EDICOM/Comarch-class providers or local Odoo partners (Core Technology Belize). Only the SME long tail might be open, and only if BTS does not ship a free issuer.

## Add-on note

Belize works best as an extra jurisdiction for a regional CTC e-invoicing connector (for example alongside Panama, Guatemala, Costa Rica and Dominican Republic adapters), or for a Caribbean registered-agent compliance product (BVI, Bahamas, Belize). It is not a standalone market.
