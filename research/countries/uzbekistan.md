# Uzbekistan: Indie-Hacker Opportunity Research

**Status: incomplete (search budget ran out).** The second WebSearch call was refused ("usage limit"). As `agent-instructions.md` requires, research stopped there. Only one search returned results, so this report is thin. Claims not backed by the sources below are marked **unverified** and come from prior background knowledge. Treat every score as provisional, and re-run this country when search budget is available.

## Accessibility check

- Uzbekistan is not under comprehensive US/EU/UK sanctions. A foreign solo founder can in principle sell software there (**unverified** against current OFAC/EU lists in this run).
- Practical frictions (**unverified**):
  - Local payments run on UzCard/Humo, Payme and Click, so foreign card billing is awkward and many SMEs want invoices in UZS.
  - Personal data of Uzbek citizens must be stored on servers inside Uzbekistan (data-localization amendments to the personal data law, 2021).
  - The working languages are Russian and Uzbek, the latter in both Latin and Cyrillic script.
- Verdict: accessible, but the data-localization rule and local payment rails probably require a local partner or local hosting.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| FMCG distributors / retailers (water, soft drinks, appliances, medicines) | Asl Belgisi digital marking: code ordering, aggregation, acceptance/shipping documents, sale at the cash register | Candidate (provisional) | Mandatory and per-transaction, and new product groups keep being added. The operator CRPT Turon (the Uzbek counterpart of Russia's Chestny Znak, which built a large ecosystem of third-party integrators) and established integrators are the competition (**unverified** detail). |
| Agrochemical / fertilizer dealers | Digital marking of fertilizers and plant protection products: pilot May–Oct 2025, mandatory from May 2026 | Candidate (provisional) | Fresh trigger, and the buyers (rural dealers) are under-served. Competitor coverage was not checked. |
| Jewelry / precious-metal retailers | Proposed digital marking: pilot to Dec 2027, mandatory from 1 Jan 2029 | Too early | The mandate is years away and only proposed. Watch-list. |
| All VAT payers / SMEs | E-invoicing (ESF) via licensed operators | Too competitive (**unverified**) | Several licensed operators (Didox, Faktura.uz, Soliq's own tools) plus 1C integrations already serve this. Could not verify in this run. |
| Retail / services | Online fiscal cash registers and OFD (fiscal data operator) | Too competitive (**unverified**) | Hardware-adjacent and dominated by local OFD/cash-register vendors. |
| Textile exporters | EU GSP+ / buyer traceability and due-diligence evidence | Not researched | Search budget exhausted. Plausible lead, given the cotton-sector forced-labour history and EU due-diligence rules. |
| Pharmacies | Medicine marking plus licensing | Folded into the first row | Medicines are already under mandatory marking. |

## Opportunities (provisional)

### Opportunity: Asl Belgisi marking operations for agro-input dealers

**Industry:**
Agrochemical and fertilizer wholesale/retail (agro-input dealers).

**Buyer:**
Owner or accountant of a small or mid-size fertilizer / plant-protection-product dealer or importer.

**Trigger / Why now:**
The Cabinet of Ministers approved digital labeling of mineral fertilizers and plant protection products. The experiment ran from 1 May to 31 October (2025), and labeling becomes mandatory from May 2026 (kun.uz). Data flows through the Asl Belgisi system operated by CRPT Turon.

**Current workflow (inferred from how the Asl Belgisi / Chestny Znak model works generally; unverified for this product group):**
1. Register in Asl Belgisi with an electronic digital signature (EDS/ERI).
2. Order marking codes and print or apply them, or receive goods that are already coded.
3. Accept incoming goods, then ship to downstream dealers or farmers with e-documents that reference the codes.
4. Register each sale or withdrawal from circulation, and reconcile the remaining stock against Asl Belgisi.

**Pain:**
Rural dealers are unlikely to run modern ERP. Codes that do not match the stock records, or goods sold that were never registered, risk fines and blocked sales. Evidence of this specific pain was **not collected**.

**Existing solutions:**
- Asl Belgisi's own personal-account web interface (free).
- 1C configurations with marking modules sold by local 1C franchisees (**unverified**).
- Integrators and partners accredited by CRPT Turon (**unverified**).
- Consultants and accountants doing the work manually.

**The gap:**
Hypothesis: a lightweight, mobile-first tool for dealers without 1C, handling acceptance, shipment and sale with scan-to-document flows and reconciliation of stock against Asl Belgisi. Not validated.

**Possible product:**
A phone-based app that scans incoming coded goods, creates the required Asl Belgisi transfer documents, and flags mismatches between physical stock and system balances.

**MVP:**
A web or PWA scanner plus Asl Belgisi API integration covering acceptance and shipment for a single product group (fertilizers).

**Pricing hypothesis:**
About $20–50/month per outlet. **Estimate:** local SME software prices are low.

**How to find first customers:**
- Registered importers and dealers of plant protection products: the registry of pesticides and agrochemicals (state chemical commission). Registry access is **unverified**.
- Farmer and dealer associations.
- CRPT Turon partner events.

**Risks:**
- CRPT Turon may ship its own free mobile app (Chestny Znak did).
- API access may require local accreditation.
- Personal-data and hosting localization.
- Low willingness to pay.
- Russian-speaking integrators already serve Chestny Znak at scale and can port their tools.

**Kill condition:**
CRPT Turon offers a free mobile acceptance and sale app, or third-party API access requires an accredited local legal entity.

**Score:** 4/10 (provisional; competitor diligence incomplete)

**Sources:**
- https://kun.uz/en/56079687
- https://zamin.uz/en/economy/220721-new-requirements-established-for-the-sale-of-marked-products.html
- https://www.securingindustry.com/uzbekistan-plans-russia-powered-traceability-drive/s111/a12677

### Opportunity: Marking-compliance checker for small multi-category retailers

**Industry:**
Small retail and distribution (appliances, bottled water, soft drinks, medicines).

**Buyer:**
Owner of a small retail chain or distributor that sells several marked categories.

**Trigger / Why now:**
Marking is already mandatory for:
- tobacco and alcohol
- medicines
- household appliances
- bottled water and soft drinks

New requirements for selling marked products were published (zamin.uz), and the list keeps expanding: Gratanet reports added groups, and jewelry is proposed for 2029.

**Current workflow (inferred, unverified):**
1. Receive coded goods.
2. Accept them in Asl Belgisi.
3. Sell them through an online cash register that must transmit the code.
4. Handle returns, write-offs and re-aggregation by hand.

**Pain:**
**Unverified.** By analogy with Russia, typical problems are codes rejected at the register, goods that were never accepted, and returns that cannot be processed.

**Existing solutions:**
- Cash-register and OFD vendors.
- 1C.
- Asl Belgisi's free tools.
- CRPT partners.

None of these were verified in this run.

**The gap:**
Unknown. The idea is plausible only if the existing tools leave exception handling (returns, write-offs, mismatches) manual.

**Possible product:**
A daily reconciliation dashboard that compares cash-register sales and inventory against Asl Belgisi balances and generates the corrective documents.

**MVP:**
CSV or API import from one popular cash-register system and from Asl Belgisi, plus a mismatch report.

**Pricing hypothesis:**
About $15–40/month per store. **Estimate.**

**How to find first customers:**
- CRPT Turon participant lists, if public (**unverified**).
- Distributor associations.
- Cash-register resellers acting as a channel.

**Risks:**
Cash-register vendors probably bundle this. Willingness to pay is low.

**Kill condition:**
The leading cash-register vendors already provide Asl Belgisi reconciliation.

**Score:** 3/10 (provisional)

**Sources:**
- https://zamin.uz/en/economy/220721-new-requirements-established-for-the-sale-of-marked-products.html
- https://gratanet.com/news/uzbekistan-expanded-list-of-products-subject-to-mandatory-digital-labelling
- https://business.gov.lv/en/news/uzbekistan-start-new-stage-mandatory-product-marking-june-1

## Rejected after competitor research

None formally. No competitor diligence could be completed.

## Too competitive (based on unverified background knowledge)

- **E-invoicing (ESF):** licensed operators such as Didox and Faktura.uz, plus the tax committee's own tools and 1C integrations.
- **Online cash registers / OFD:** established local vendors.

## Too early / watch-list

- **Jewelry digital marking:** pilot to 30 Dec 2027, mandatory 1 Jan 2029 (kun.uz, uzdaily.uz). Revisit in 2027.
  - https://kun.uz/en/news/2026/07/08/uzbekistan-may-introduce-mandatory-digital-labeling-for-jewelry-9c9a84
  - https://www.uzdaily.uz/en/uzbekistan-proposes-digital-marking-for-jewelry-items/

## Attractive problem, poor distribution

- **Textile and cotton exporters' buyer due-diligence packs** (forced-labour history, EU due-diligence rules). Not researched. The buyer is reachable through Uztextileprom, but this is unverified.

## Next steps if re-run

Spend 8–10 searches on:
1. The CRPT Turon / Asl Belgisi partner list and API terms.
2. Local marking apps (Russian-language: "маркировка Asl Belgisi приложение").
3. Fertilizer dealer counts.
4. Textile export compliance.
5. Pharmacy licensing.
6. Customs brokers (e-declaration).
