# Libya: Indie-Hacker Opportunity Research

Research date: 2026-10-05. Search budget: 8 searches (treated as a fragile, hard-to-access market).
Languages searched: English and Arabic.

## Bottom line

**Libya is not a viable market for a foreign solo founder selling software in 2026.** It is not
fully closed by law, but in practice it is close to inaccessible:

- **Sanctions are targeted, not comprehensive.** UN, EU and UK measures on Libya are an arms embargo
  plus asset freezes on listed people and entities. The EU list was updated by Decision (CFSP)
  2025/1333. Export restrictions cover military and security goods, related software and
  technology, and related technical assistance. Ordinary business SaaS is not banned outright, but
  every customer has to be screened against the lists. Many state-linked buyers (NOC subsidiaries,
  state banks, ministries) carry extra legal risk. The US position (EO 13566 family) was not checked
  in a current official source: **unverified**. Sources: WKO sanctions summary; UK statutory guidance
  on the arms embargo.
- **Payments.** PayPal is not available (there is a public #PayPal4Libya campaign). Card acceptance
  runs through a domestic switch (Moamalat) and a short list of e-wallets licensed by the Central
  Bank of Libya (CBL), most with licences extended only to 31/12/2025. Strict CBL foreign-exchange
  controls mean a Libyan SME cannot easily pay a foreign subscription in USD or EUR. Imports of
  services generally need CBL-coded letters of credit. Sources: CBL list of approved e-payment
  services; CBL FX circulars 2024.
- **Political and security setting.** There are two rival governments (GNU in Tripoli, GNS in the
  east). Militias fought heavy battles in Tripoli in May 2025, with mobilisation lasting until
  September. The German Foreign Office travel warning is still in force as of 31 Aug 2026, and
  kidnapping risk for foreigners is high. You cannot visit customers to sell, and regulators are
  split by region.
- **No regulatory trigger found.** No Libyan e-invoicing mandate, VAT rollout or new mandatory
  SME portal for 2025–2026 turned up, in English or Arabic. The nearest recent change is Decision
  247/2024, which added electronic payment of income tax. Neighbours (Egypt, Algeria) have
  e-invoicing triggers. Libya does not.

The candidates below are the least-bad workflows found. **None reaches the brief's build
threshold.** They are recorded so the cross-country ranking has a complete negative result.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Importers / customs brokers | CBL letter-of-credit file plus pre-shipment inspection certificate plus customs declaration, per shipment | Weak candidate (3/10) | Real, mandatory, document-heavy and repeated per shipment. But banks, inspection firms and brokers own the workflow, and the buyer can't pay a foreign vendor. |
| Oil & gas service subcontractors | NOC operating-company prequalification and tender document packs | Weak candidate (3/10) | Active 2025–2026 tenders (Akakus, Mabruk, Sarir, Nafusah). The workflow is episodic, relationship-driven and touches sanctions-sensitive state entities. |
| Accountants / tax filing | E-invoicing or VAT reporting | Rejected | No e-invoicing or VAT mandate exists. Only e-payment of income tax (Decision 247/2024). |
| Customs (direct) | ASYCUDA World declarations | Rejected | ASYCUDA World is being rolled out with IMF technical assistance. The state system plus licensed brokers do this, and there is no third-party API path. |
| Payments / e-commerce merchants | Online payment acceptance | Rejected | Every rail is a CBL-licensed local provider (Moamalat and licensed wallets). A foreign founder can't get in without a local licence. |
| Pharmacies / medical supply | Drug registration, controlled-drug reporting | Not researched in depth | No public digital reporting requirement surfaced. Public procurement runs through state bodies. Budget was spent on access questions. |

## Opportunities (all below threshold)

### Opportunity: Import-shipment document pack checker (LC + inspection + customs)

**Industry:**
Import trade / customs brokerage

**Buyer:**
Import manager or owner at Libyan trading companies (food, building materials, spare parts), and
small customs-clearance agencies

**Trigger / Why now:**
No new 2025–2026 trigger. There is a steady stream of CBL circulars on FX and documentary-credit
controls (Circulars 2/2016, 2/2017, 15/2022, 12/2023, and A.R.M.N 2024/02 on FX dealing). Each one
changes the required documents and the deadlines, such as returning FX to the CBL if the LC is not
opened within 15 days of the currency purchase.

**Current workflow:**
1. The importer gets a pro-forma invoice from the manufacturer or an authorised agent (a CBL
   requirement), plus a packing list.
2. The importer applies to its commercial bank for an LC under its CBL importer code, and the bank
   buys the FX.
3. An approved international inspection company (Intertek, SGS and similar) issues a Certificate of
   Inspection, applied for with the pro-forma, packing list and LC copy.
4. Customs declaration and clearance follow. The importer's deposit is released only after the
   authorities confirm the goods were delivered in Libya and all customs, tax and bank dues are
   paid.

**Pain:**
Several documents must match across bank, inspector and customs. A mismatch delays the LC or
blocks the deposit. Evidence comes from the CBL circular text and inspection-company guidance. No
user complaints were found (**unverified** in terms of hours lost).

**Existing solutions:**
Bank trade-finance desks, international inspection companies (Intertek PSI programme), licensed
customs brokers who do it by hand, and generic ERP. ASYCUDA World is the state customs system.

**The gap:**
No tool checks a document pack against the current CBL rules before submission. But the checking
is already done (and paid for) by brokers and bank staff.

**Possible product:**
An Arabic-first checklist and validator: upload the pro-forma, packing list, LC and inspection
certificate, then flag field mismatches and missing items against the current CBL circular.

**MVP:**
A rules checklist for one product class with PDF field extraction and a mismatch report.

**Pricing hypothesis:**
LYD-priced per-shipment fee (estimate equal to about USD 10–20). Collecting it from abroad is
practically impossible without a local entity.

**How to find first customers:**
Chambers of commerce, the Ministry of Economy importer register (not verified as public), and
customs-broker associations (**unverified**).

**Risks:**
FX controls block foreign subscriptions. The rules change by circular with no notice. Split
east/west authorities. Brokers have a reason to resist. You can't visit customers.

**Kill condition:**
If buyers cannot pay a foreign entity (very likely), or brokers already handle exceptions at
negligible cost.

**Score:** 3/10

**Sources:**
- https://lawsociety.ly/?p=50283 (CBL circular A.R.M.N 2024/02, FX dealing controls)
- https://lawsociety.ly/legislation/%d9%85%d9%86%d8%b4%d9%88%d8%b1-%d8%b1%d9%82%d9%85-12-%d9%84%d8%b3%d9%86%d8%a9-2023-%d8%a8%d8%b4%d8%a3%d9%86-%d8%aa%d8%b9%d8%af%d9%8a%d9%84-%d8%a8%d8%b9%d8%b6-%d8%a7%d9%84%d8%b6%d9%88%d8%a7%d8%a8%d8%b7/ (CBL circular 12/2023 on LC procedures)
- https://www.intertek.com.hk/government/certificate-of-inspection-for-exports-and-imports-into-libya
- https://cbl.gov.ly/en/?p=50662
- https://www.imf.org/en/publications/cr/issues/2022/09/02/libya-technical-assistance-report-review-the-installation-implementation-status-of-modules-522827

### Opportunity: NOC prequalification and tender-pack tracker for oilfield subcontractors

**Industry:**
Oil & gas services / subcontracting

**Buyer:**
Bid or contracts coordinator at Libyan and foreign oilfield service subcontractors (HSE, waste,
transport, engineering)

**Trigger / Why now:**
NOC operating companies issued a steady flow of tenders and prequalifications in 2025–2026 (for
example Akakus BC-2025-HSE-03/04, Sarir TC-ENG-005-2026, Nafusah NOO-NHF-GSD-ITT-0008-26, and a
waste-management PQQ). Bidders need Ministry of Economy registration or a written commitment to
register.

**Current workflow:**
1. Watch noc.ly and each operating company's site for notices.
2. Assemble a company profile, legal documents, experience certificates and questionnaire answers
   for each operator.
3. Submit a letter of interest to each prequalification committee, then track replies by email.

**Pain:**
Each operator has its own questionnaire and the same documents get reassembled each time. Pain is
moderate and episodic.

**Existing solutions:**
The NOC tender pages (free), tender-alert aggregators, local agents and consultants, and in-house
document folders.

**The gap:**
No reusable document vault mapped to each operator's PQQ format. Small gap.

**Possible product:**
Tender alerts for noc.ly and the operators, plus a reusable compliance-document vault that
assembles PQQ responses.

**MVP:**
A scraper of the NOC tender listings with keyword alerts, plus a document-expiry tracker.

**Pricing hypothesis:**
USD 50–150 per month, billed to the foreign-parent or Gulf entity (estimate).

**How to find first customers:**
Past tender award notices, and service-company lists from Libya energy expos (**unverified**).

**Risks:**
NOC entities may be list-sensitive. Tender alerts are already a commodity. Bidding depends on
relationships. Tender activity stops whenever oil is blockaded.

**Kill condition:**
If existing tender aggregators already cover noc.ly (likely), or the customer base is under a few
hundred firms.

**Score:** 3/10

**Sources:**
- https://noc.ly/en/tenders/akakus-oil-operations-company-tender-no-bc-2025-hse-04/
- https://noc.ly/en/tenders/sarir-oil-operations-company-tender-no-tc-eng-005-2026/
- https://noc.ly/en/tenders/nafusah-oil-operations-b-v-tender-no-noo-nhf-gsd-itt-0008-26
- https://noc.ly/moselef/2025/02/Waste-Management-Prequalification-Questionnaire.pdf
- https://noc.ly/en/tenders/mabruk-oil-operations-announcement-pre-qualification-invitation-5

## Rejected after competitor research

- **E-invoicing or VAT compliance connector.** Killed because no mandate exists. The tax authority
  only added electronic income-tax payment (Decision 247/2024).
  https://lawsociety.ly/en/legislation/decision-no-247-of-2024-on-adding-a-method-for-collecting-income-tax/
- **Customs declaration automation.** Killed by the state ASYCUDA World rollout plus licensed
  brokers, with no API access for third parties.
- **Payment or e-commerce tooling.** Killed by the CBL licensing regime. Moamalat and the licensed
  wallets own the rails. https://cbl.gov.ly/en/?p=15034

## Attractive problem, poor distribution

- **Import LC and inspection document reconciliation.** The pain is real and repeats per shipment,
  but buyers can't pay foreign vendors under FX controls and you can't sell in person.

## Too competitive

- **NOC tender alerts.** Commodity tender-aggregator services, plus the free noc.ly listings.

## Accessibility verdict

**Practically inaccessible to a foreign solo founder** because of payment rails, FX controls,
security and split government. Sanctions are targeted rather than total, so legal access is
partial and every customer needs screening. If Libya is served at all, it should be as an Arabic
add-on to an Egypt or Tunisia product sold through a local partner, not as a standalone market.

Sources:
- https://www.wko.at/service/aussenwirtschaft/Aktueller_Stand_der_Sanktionen_gegenueber_Libyen.html
- https://gov.uk/guidance/arms-embargo-on-libya
- https://technology.ly/en/paypal4libya-campaign/
- https://cbl.gov.ly/en/?p=15034
- https://www.buch-dein-visum.de/en/news/libyen/libyen-reisewarnung-des-auswaertigen-amts-bleibt-bestehen-stand-31-08-2026-e2f982
- https://www.auswaertiges-amt.de/de/service/laender/219624
