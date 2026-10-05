# Guinea-Bissau: opportunity research

Researched 2026-10-05. I treated this as a small, fragile market and used 9 web searches. Searches were in Portuguese and English. WebFetch was not used, so every claim below rests on search-result summaries, and the URLs are given as returned.

## Bottom line

**I found no viable standalone indie-SaaS opportunity in Guinea-Bissau.** There are two real regulatory triggers:

- **VAT (IVA) since 1 January 2025.** It replaced the old sales tax (IGV) and requires monthly returns through the tax authority's (DGCI) Kontaktu portal.
- **Customs moved to ASYCUDAWorld in January 2026.** This replaced ASYCUDA++.

Neither trigger is enough on its own, for three reasons:

1. **The buyer base is tiny.** The export side has about 49 registered cashew exporters. VAT-registered firms probably number in the low thousands at most (my estimate; I found no official count).
2. **The government's own free tools already cover the core.** The Kontaktu portal issues invoices online for free and takes electronic returns.
3. **The country is politically unstable.** A military coup on 26 November 2025 installed an interim president. ECOWAS (the West African regional bloc) has rejected the junta's transition plan and threatened targeted sanctions.

The realistic route is to serve Guinea-Bissau as an add-on: either inside a Lusophone-Africa invoicing and VAT product (Cabo Verde, São Tomé, Angola, Mozambique) or inside a UEMOA/francophone West Africa product (UEMOA is the West African monetary union; Senegal is the obvious anchor). It should not be a primary target.

## Accessibility check

- **Sanctions:** no general US, EU or UK sanctions on software or IT services were found. ECOWAS threatens *targeted* sanctions on junta members (asset freezes, travel bans), not on the economy as a whole. Political risk is high, but selling is legally possible.
- **Payments:** Orange Money and MTN are the main wallets. Orange Money Web Payment is available to merchants in Guinea-Bissau, and Orange Money / Mastercard virtual cards are being rolled out. Collecting from foreign SaaS customers is possible but awkward. Invoices would be in CFA francs (XOF).
- **Language and law:** Portuguese is the official language. The business-law framework is OHADA (the shared business-law system of 17 mainly francophone African states), the tax framework is aligned with UEMOA, and the tax portal is modelled on Portugal's.
- **Verdict:** technically accessible, commercially marginal.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Accountants / SMEs (VAT) | Monthly VAT return + compliant invoicing after IVA started on 1 Jan 2025 | Weak (kept as #1, low score) | Real new mandatory monthly task, but Kontaktu is free and issues invoices; few buyers; Portuguese ERPs (Primavera/PHC, now both Cegid) can be adapted |
| Cashew exporters | Campaign licences, evacuation permits, customs export declaration, buyer document pack | Weak (kept as #2, low score) | Cashew is the economic backbone, but there are only about 49 exporters, the season is short, and freight forwarders already do the paperwork |
| Customs brokers / freight forwarders | Re-keying into the new ASYCUDAWorld (live Jan 2026); e-manifest 48 h before arrival | Reject | Few brokers; ASYCUDAWorld is a closed UNCTAD system with no public API; a handful of incumbent brokers |
| Fisheries | EU catch certificates / licensing for industrial fleets | Reject | Fleets are mostly foreign; the flag state's or agent's systems handle it; tiny local buyer base |
| Pharmacies / clinics | Controlled-drug and stock reporting | Reject (not researched in depth) | No 2025–26 digital reporting trigger found; very small formal sector |
| Payroll / social security | Monthly contribution returns | Reject | Kontaktu already carries contribution declarations; a small formal workforce |

## Opportunities (both below the bar, listed for completeness)

### Opportunity: IVA monthly-return and invoice-compliance assistant for accounting offices

**Industry:**
Accounting / tax compliance (cross-industry SMEs)

**Buyer:**
Small accounting firms (*gabinetes de contabilidade*) and the finance staff of VAT-registered SMEs in Bissau: traders, importers and service firms. Foreign-owned firms dominate formal trade, according to the Chamber of Commerce.

**Trigger / Why now:**
IVA started on 1 January 2025 and replaced the IGV in use since the 1990s. Rates are 19% standard, 10% reduced, 5% simplified regime and 0% exports. Registration is required above FCFA 10 m turnover, the simplified regime is optional up to FCFA 40 m, and returns are due monthly by the 15th. Input-VAT deduction is new to these businesses: it requires proper invoices and purchase-ledger reconciliation, which the old IGV did not demand in the same way.

**Current workflow:**
1. Sales invoices are issued in Kontaktu online, in the firm's own software, or on paper from a DGCI-accredited printer.
2. Purchase invoices are collected as paper or PDF, and the accountant types them into Excel to work out deductible VAT.
3. The accountant fills in the monthly IVA return in Kontaktu and generates a payment slip. Portal access must first be authorised in person at the DGCI.

**Pain:**
The new input/output VAT logic, mixed invoice sources (portal, software, paper) and monthly deadlines. Specific complaints from businesses were *not found*, so the pain is inferred from the structure of the workflow.

**Existing solutions:**
Kontaktu (free government portal: e-invoicing, returns, payments); Primavera and PHC, both Portuguese ERPs owned by Cegid, through any regional resellers (not verified in Bissau); Excel plus local accountants; Sage.

**The gap:**
Reconciling purchase invoices from three sources (portal, software, paper) into a ready-to-file IVA return, with Guinea-Bissau's rate set and simplified-regime rules. The Portuguese ERPs follow Portugal's rules (SAF-T PT) and would need localisation.

**Possible product:**
A lightweight purchase/sales VAT ledger that ingests Kontaktu exports, Excel files and photographed invoices. It applies the 19/10/5/0% rules and produces the figures for the monthly return, with a checklist for each client.

**MVP:**
An Excel-template-driven web app for accountants: upload purchases and sales, get a reconciled VAT summary and an exceptions list (missing tax number (NIF), wrong rate).

**Pricing hypothesis:**
About FCFA 15,000–30,000 (US$25–50) per month per accounting office (estimate). Willingness to pay is likely low.

**How to find first customers:**
The Ordem/association of accountants (existence not verified), the Chamber of Commerce (CCIAS), DGCI taxpayer training sessions, and Portuguese-speaking accounting networks.

**Risks:**
Kontaktu adds the same features for free. There are very few buyers. The coup could disrupt reforms. Payment collection is hard. An implementation-heavy, high-touch sale.

**Kill condition:**
Kontaktu already pre-fills the return from e-invoices, or fewer than about 300 active accounting offices and VAT filers would pay.

**Score:** 3/10

**Sources:**
- https://forbesafricalusofona.com/?p=117583 (IVA from Jan 2025, replaces IGV)
- https://innovatetax.com/blog/guinea-bissaus-transition-to-vat-reform/ (rates, thresholds, monthly filing)
- https://kontaktu.mef.gw/ and https://kontaktu.mef.gw/api/public_files/Ze4hT3gBTtIyVO-smZIg.pdf (Kontaktu e-filing, three invoicing methods, in-person authorisation)
- https://aman-alliance.org/Home/ContentDetail/87774 (more than FCFA 6 bn collected in the first two months)
- https://rtpafrica.rtp.pt/noticias/guine-bissau-impacto-das-disputas-politicas-e-da-presenca-estrangeira-no-comercio (foreign dominance of commerce)

### Opportunity: Cashew campaign compliance pack for exporters and intermediaries

**Industry:**
Agricultural export (raw cashew nuts, more than 90% of exports)

**Buyer:**
Registered cashew exporters (about 49 companies) and the larger licensed intermediaries (about 2,099 licences issued).

**Trigger / Why now:**
The 2026 campaign runs under a "zero tolerance to smuggling" motto, with a fixed farm-gate reference price of FCFA 478/kg and evacuation permits. Customs moved to ASYCUDAWorld in January 2026. Smuggling is estimated to cost about US$50 m per campaign, so traceability pressure is rising.

**Current workflow:**
1. Obtain the trade-ministry licence and evacuation permits for moving nuts from the regions to Bissau.
2. Track purchases against the reference price, and keep warehouse and quality records (paper or Excel).
3. A freight forwarder or customs broker files the export declaration in ASYCUDAWorld; certificates of origin, phytosanitary certificates and the buyer's documents are prepared separately.

**Pain:**
Many documents for each lot, a short and intense season, and a risk of seizure for unpermitted movement. There is no direct evidence of software demand.

**Existing solutions:**
Freight forwarders and customs brokers (manual), Excel, buyers' own traceability platforms (Olam/ofi-type systems on the buyer side; not verified for Guinea-Bissau), and the ASYCUDAWorld broker interface.

**The gap:**
One lot record that produces the permit, customs and buyer documents. In practice brokers absorb this work.

**Possible product:**
A lot-level ledger (purchase, permit, warehouse, export) that generates the per-shipment document set.

**MVP:**
A shared spreadsheet-backed web form producing a per-container document checklist and PDF pack.

**Pricing hypothesis:**
US$100–300 per month during the season (estimate). Fewer than 50 buyers caps revenue at roughly US$50–100k a year even in the best case.

**How to find first customers:**
The ministry of trade's list of licensed exporters; the cashew association (ANCA-GB, existence not verified).

**Risks:**
Seasonal use (about 4–6 months), a tiny market, politically connected exporters, and informal trade.

**Kill condition:**
Exporters say their broker does everything and they would not pay; or there is no permit data to digitise.

**Score:** 2/10

**Sources:**
- https://forbesafricalusofona.com/?p=169801 (2026 reference price unchanged at FCFA 478/kg)
- https://forbesafricalusofona.com/?p=169899 (about US$50 m smuggling loss per campaign)
- https://cropgpt.ai/guinea-bissau-cashews-2024-campaign-pricing-and-export-performance (49 registered exporters, more than 1,700 intermediaries; secondary source)
- https://www.ecofinagency.com/news-agriculture/1010-49474-guinea-bissau-raises-2025-cashew-export-forecast-to-250-000-tons
- https://asycuda.org/guinea-bissau-launches-asycudaworld-to-strengthen-customs-digitalization/

## Rejected after competitor research

- **ASYCUDAWorld re-keying for customs brokers:** killed by UNCTAD's ASYCUDAWorld itself (closed system, no public API) and by the tiny number of brokers. Brokers already key directly into it. Source: https://asycuda.org/guinea-bissau-launches-asycudaworld-to-strengthen-customs-digitalization/ and https://www.dn.pt/lusa/interior/guine-bissau-simplifica-procedimentos-para-retirar-mercadorias-das-alfandegas-9349796.html
- **Standalone e-invoicing tool:** killed by Kontaktu's free online invoice issuance, and by Primavera/PHC (Cegid) as the incumbent Lusophone ERPs.
- **Payroll / social-contribution filing:** killed by Kontaktu, which already hosts contribution declarations (https://kontaktu.mef.gw/api/public_files/cQ07WYIBVxKCKoELcDhC.pdf).

## Attractive problem, poor distribution

- **Cashew traceability and anti-smuggling:** a real US$50 m-a-year problem, but the buyer is effectively the state or international buyers, there are fewer than 50 commercial customers, and the work is seasonal.

## Too competitive

- None in absolute terms. In this market, the free government portals (Kontaktu, ASYCUDAWorld) are the main competitors.

## Inaccessible markets

- Not inaccessible. High political risk after the November 2025 coup: ECOWAS rejected the junta's transition plan and threatened targeted sanctions. Sources:
  - https://www.ecofinagency.com/news/1712-51466-ecowas-hardens-stance-rejects-military-led-transition-plan-in-guinea-bissau
  - https://aa.com.tr/en/africa/ecowas-rejects-guinea-bissaus-military-junta-transition-program-calls-for-inclusive-governance/3772410
- Payment rails source: https://developer.orange.com/apis/om-webpay
