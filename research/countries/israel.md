# Israel - research report (as of 2026-10; 5 search calls used, shallow depth; WebFetch unavailable)

Accessibility: no sanctions barrier for software sales; shekel/card payments normal; Hebrew UI/RTL mandatory; Israeli-company reporting systems (ITA, Customs Shaar Olami) are API-accessible only to certified/registered software houses (unverified detail). Market is sophisticated, high-competition, high willingness to pay.

## Industries screened
| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| SMB accounting / invoicing | ITA "Israel Invoice" allocation numbers (threshold NIS 10k from 2026-01-01, NIS 5k from 2026-06-01) | Rejected (too competitive) | Green Invoice (Morning), iCount, others already integrated; strong regulatory trigger but incumbents closed it |
| Importers / customs brokers | Shaar Olami (Global Gate) importer declaration (from 2025-02-23), periodic importer declaration for imports >$5k (from 2025-03-24), exemption codes | Candidate (weak-medium) | Mandatory, changed recently; broker/ERP competition unverified |
| Food importers | MoH importer registration certificate + EU-track ("what is good for Europe") documentation, 44 EU food regs adopted 2025-01-01; proposal for US-track (11th amendment, 2025-12) | Candidate (medium) | New dual-track regime creates documentation work; buyer list is small |
| Packaging producers/importers | Packaging EPR law (60% recycling target, ILS 2,500/ton penalty), reporting to Producer Responsibility Dept | Unclear | Compliance handled by recycling corporations (e.g. Tamir, unverified) and consultants; could not verify reporting workflow |
| Construction contractors | Reporting on employees of contractors / responsible employees (gov.il service) | Insufficient evidence | Only a gov.il service page found; no pain evidence |
| Small-business income tax | Small business owner (osek zair) filing | Rejected | Government tax-coordination tool plus accountants; low pay |

## Opportunities

### Opportunity: Importer-declaration and exemption-code checker for small importers (Shaar Olami)

**Industry:**  
Import / customs

**Buyer:**  
Small and mid-size importers and small customs-broker offices

**Trigger / Why now:**  
New importer's declaration format (Feb 2025) and periodic importer declaration on all suppliers for imports above $5,000 (Mar 2025); broker staff must enter exemption codes in Global Gate. The ongoing Shaar Olami rollout keeps rules changing.

**Current workflow:**  
1. Importer receives supplier invoice/packing list (PDF/Excel).  
2. Broker re-keys data into Global Gate with HS codes, exemption/standard codes.  
3. Importer maintains supplier declarations by hand; errors lead to delays/fines.

**Pain:**  
Evidence is regulatory change only; no complaint data found (unverified pain level).

**Existing solutions:**  
Large brokers' in-house systems, Global Gate itself, ERP modules, freight-forwarder portals (e.g. FedEx/DHL clearance services). Not fully diligenced.

**The gap:**  
Unverified: exception handling for standards/exemption codes and supplier-declaration tracking at small importers.

**Possible product:**  
Document-to-declaration prep tool that validates invoice data, flags standard/exemption requirements, and tracks periodic supplier declarations.

**MVP:**  
Invoice PDF parser plus rules checklist exporting a broker-ready file.

**Pricing hypothesis:**  
NIS 200-600/month per importer (estimate).

**How to find first customers:**  
Customs-broker licensee list and importer associations (Israel Chamber of Commerce); MoH importer registry (not verified as public).

**Risks:**  
Brokers do the work and own the relationship; Customs/Global Gate API access restricted; Customs may improve its own tooling.

**Kill condition:**  
Brokers say Global Gate/their software already covers it, or small importers outsource entirely.

**Score:** 4/10

**Sources:**  
- https://www.freightnews.co.za/article/israeli-customs-extends-data-requirements  
- https://www.unitedxp.co.il/the-future-of-customs-brokerage-in-israel-toward-world-gate-and-ai-integration/  
- https://goldfarb.com/client-update-not-stopping-at-the-port-reform-launches-in-israel

### Opportunity: Food-import compliance file manager (EU-track / importer registration)

**Industry:**  
Food import

**Buyer:**  
Small food importers and their regulatory consultants

**Trigger / Why now:**  
Tenth Amendment (2025-01-01) adopted 44 EU food directives/regulations as an alternative track; US-track proposal published 2025-12-08; MoH importer registration certificate must be renewed and tied to warehouse.

**Current workflow:**  
1. Choose standard track (Israeli standard vs EU).  
2. Collect supplier certificates and labelling evidence per product.  
3. Apply/renew importer registration with MoH via gov.il; keep file for inspection.

**Pain:**  
Plausible (many product-by-product documents) but unverified by complaints.

**Existing solutions:**  
Regulatory law firms (Goldfarb), consultants, generic doc tools, ERP.

**The gap:**  
Product-level evidence tracking against the track chosen; unverified.

**Possible product:**  
Per-SKU compliance dossier with expiry reminders and label checklist.

**MVP:**  
Tracker plus renewal reminders and exportable dossier.

**Pricing hypothesis:**  
NIS 300-800/month (estimate).

**How to find first customers:**  
Food importer associations, Chamber of Commerce, MoH registry (access unverified).

**Risks:**  
Small buyer pool, consultant-driven, regime still being amended.

**Kill condition:**  
Fewer than a few hundred active small importers or consultants resist.

**Score:** 3.5/10

**Sources:**  
- https://www.goldfarb.com/the-new-food-reform-entering-into-force-in-2025/  
- https://www.gov.il/en/service/non-animal-derived-food-importer-registration  
- https://www.gov.il/en/service/food-importer-registration-extension

### Opportunity: Multi-client allocation-number exception monitor for bookkeepers
Weak. Score 3/10. Bookkeeper offices manage clients who use varied invoicing tools; a dashboard flagging invoices above the NIS 5,000 threshold lacking allocation numbers (customer cannot deduct input VAT otherwise). Buyer: bookkeeping offices. Pricing guess NIS 100-300/month. Kill: Green Invoice/Morning/iCount already offer multi-client views, likely. Sources: https://www.gov.il/he/service/request-assignment-number-for-tax-invoice ; https://www.kipa.co.il/כדאי-לדעת/1232040-0/ ; https://vatit.com/e-invoicing-guide/israel/

## Rejected after competitor research
- E-invoicing / allocation number app for SMBs: Green Invoice (Morning) and similar incumbents already issue invoices with allocation numbers; ITA provides a free gov.il request service.
- Small-business income-tax filing helper: government tax coordination system and accountants.

## Attractive problem, poor distribution
- Packaging EPR reporting: obligations real (ILS 2,500/ton penalty) but handled via recycling corporations/consultants; workflow unverified.

## Too competitive
- E-invoicing / accounting (see above).

## Not covered
Pharmacies, clinics, agriculture, security firms, home care (large Israeli verticals) were not searched due to budget; a follow-up pass is advisable.
