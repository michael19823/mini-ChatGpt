# Poland - research report (2026-10-04)

Method note: about 9 searches (EN and PL), WebFetch blocked, so evidence is from search snippets only. Anything not in a source is marked unverified/estimate. Market is accessible (EU, PLN payments, no sanctions issue).

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Accounting / all VAT payers | KSeF mandatory e-invoicing (large firms 1 Feb 2026, other VAT payers 1 Apr 2026, micro under 10k PLN/month from 1 Jan 2027) | Too competitive | Every Polish invoicing/accounting vendor (inFakt, iFirma, wFirma, Saldeo, etc.) shipped KSeF support |
| Transport / freight forwarding / wholesale | SENT transport monitoring on PUESC, extended 17 Mar 2026 to clothing and footwear | Candidate | New product group, fines up to 46% of goods value (min 20,000 PLN), small firms newly in scope |
| Waste producers / waste carriers | BDO: KPO (waste transfer card), KEO, annual reports | Candidate (weak) | Paper KPO gone, API exists, but guide-site/consultant ecosystem is large |
| Importers (steel, aluminium, fertiliser, cement) | CBAM definitive phase from 1 Jan 2026, first declaration 30 Sep 2027 | Weak | Annual rhythm, 50 t de minimis, consultants and SAP already active |
| HR/payroll small employers | PPK, ZUS e-ZLA changes (2026) | Rejected | Payroll software (Symfonia, enova etc., unverified) and accountants handle it |
| Accounting offices | KSeF: invisible invoices, client authorisations, purchase invoice verification | Too competitive | Saldeo, Comarch and similar already target biura rachunkowe |
| Pharmacies, vets, funeral, labs | Not researched in depth (search budget) | Unscreened | No evidence gathered |

## Opportunities

### Opportunity: SENT Filing Desk for Clothing/Footwear Distributors and Small Carriers

**Industry:**
Wholesale/import of clothing and footwear, road carriers and small forwarders.

**Buyer:**
Owner/logistics clerk of an SME apparel or footwear wholesaler/importer/online seller shipping over 10 kg lots; small haulage firms moving them.

**Trigger / Why now:**
Since 17 March 2026 SENT covers knitted clothing and accessories (over 10 kg gross) and footwear. Companies must register or update data on PUESC. Penalty up to 46% of goods value, min 20,000 PLN. A forwarder must check SENT status, pass the data to the carrier and confirm an active locator.

**Current workflow:**
1. Warehouse prepares a shipment (invoice/WZ).
2. Clerk re-keys goods codes, quantities, weights, consignee and loading/unloading addresses into PUESC (or ERP module).
3. Reference number is passed to the driver/carrier by phone, email or WhatsApp.
4. Delivery is confirmed/closed in PUESC; changes and exceptions (split loads, vehicle swap) fixed by hand.

**Pain:**
New obligation for firms that never used SENT; large fixed penalties for errors. Frequency is per shipment. Pain level beyond regulatory text is unverified.

**Existing solutions:**
Comarch ERP XL SENT module (documented at pomoc.comarch.pl), other ERP modules (unverified), PUESC itself (free, manual), customs/forwarding consultants. Whether a cheap standalone tool exists is unverified.

**The gap:**
Small firms on basic ERP/Excel/e-commerce stacks and carriers who need a simple "paste shipment, get SENT filed and tracked, share number with driver, close on delivery" tool. API access for third parties via PUESC is unverified.

**Possible product:**
Web tool converting an invoice/shipment spreadsheet or PDF into SENT notifications, with status tracking, driver-share link and closure reminders.

**MVP:**
Guided form and CSV import generating the data package for PUESC entry, plus a shipment status board (manual-assist first; API later if PUESC permits).

**Pricing hypothesis:**
79-199 PLN/month per company or about 3-5 PLN per filing (estimate).

**How to find first customers:**
Apparel wholesaler associations, KRS/CEIDG PKD 46.42 wholesalers, carrier directories, trans.info readers, Allegro/Zalando-type sellers (unverified lists).

**Risks:**
Possible PUESC API access limits, ERP vendors bundling it, scope may narrow, limited customer count; may be a seasonal compliance spike that fades.

**Kill condition:**
No third-party integration route to PUESC and Comarch/others already offer cheap bundles; or interviews show forwarders handle it in minutes.

**Score:** 5/10

**Sources:**
- https://e-prawnik.pl/artykuly/zmiany-w-systemie-sent-3.html
- https://kpmg.com/pl/pl/wiedza/podatki/nowe-obowiazki-sent-juz-za-niecaly-miesiac-kluczowe-zmiany-dla-przewozu-odziezy-i-obuwia.html
- https://trans.info/pl/za-tydzien-sent-zostanie-poszerzony-o-odziez-i-obuwie-kary-do-46-proc-wartosci-towaru-460841
- https://pomoc.comarch.pl/xl/index.php/dokumentacja/sent-zgloszenia-przewozu-towarow-wrazliwych/
- https://akademialtca.pl/blog/system-sent-w-praktyce-jak-prawidlowo-zweryfikowac-obowiazki-przy-przewozie-towarow

### Opportunity: BDO Waste Paperwork Router for Small Waste Producers and Carriers

**Industry:**
Waste management (collection, transport, small producers such as workshops, construction subcontractors, food outlets).

**Buyer:**
Small waste carrier/collector owner or EHS/office person at a firm that generates waste.

**Trigger / Why now:**
In 2026 KPO can only be issued electronically via the BDO account; amended Waste Act widened record-keeping; from 1 Jan 2027 new KPO data (transport type). Annual fee by 28 Feb, annual reports by 15 Mar.

**Current workflow:**
1. Generate waste during jobs.
2. Plan/issue KPO in BDO (drafts up to 30 days ahead), re-entering codes and counterparties.
3. Carrier and recipient confirm in BDO.
4. Keep KEO manually or in the firm's own system; file annual report.

**Pain:**
Mandatory per-transfer entry, strict administrative penalties (per sources). Quantified pain is unverified.

**Existing solutions:**
BDO's own web UI and REST API (official); guide/consultancy sites (kartaewidencji.pl, rozliczeniabdo.pl, ransigma.pl); ERP integrators (unverified). Dedicated BDO software vendors were not identified in searches, which does not mean none exist.

**The gap:**
Simple job-to-KPO flow for firms without ERP: reuse customer/counterparty data, bulk drafts, reminders for fees and reports.

**Possible product:**
Lightweight layer on BDO API: import jobs from spreadsheet/field app, create KPO drafts, track confirmation, generate KEO.

**MVP:**
Spreadsheet-to-KPO draft creator and confirmation tracker for waste carriers.

**Pricing hypothesis:**
49-149 PLN/month (estimate).

**How to find first customers:**
BDO public registers of registered waste entities (public search exists, unverified bulk access), regional waste associations, Google Ads on BDO queries.

**Risks:**
Government API changes, competition from consultants/ERP, low willingness to pay for micro firms, API partner approval process unclear.

**Kill condition:**
Existing cheap BDO apps with CSV import already serve carriers; or BDO API restricts third-party use.

**Score:** 4/10

**Sources:**
- https://kartaewidencji.pl/karta-przekazania-odpadu/
- https://bdo.mos.gov.pl/news/ewidencja-odpadow-a-kontekst-roku-4/
- https://www.ransigma.pl/blog/obowiazki-bdo-2026.html
- https://rozliczeniabdo.pl/keo-kpo-system-bdo-jak-prowadzic-ewidencje-odpadow/
- https://rev-log.com/pl/?p=797

## Rejected after competitor research

- KSeF tooling for SMEs: killed by inFakt, iFirma/wFirma-class invoicing tools, KluczeSoft and accounting suites that all published KSeF guidance/support (infakt.pl, kluczesoft.pl).
- PPK/e-ZLA payroll helpers: handled by payroll software and accountants; regulator is simplifying contact via ZUS accounts (podatki.biz).
- CBAM compliance for small importers: Crowe, SAP, celna24, amavat already publishing and selling; 50 t de minimis excludes many; annual rhythm.

## Attractive problem, poor distribution

- KSeF for micro firms (from 1 Jan 2027, under 10k PLN/month): large number of buyers but low price tolerance and they buy through accountants.

## Too competitive

- KSeF invoicing, purchase-invoice verification, accountant-office KSeF workflow (Saldeo, Comarch, wFirma, inFakt).

## Not researched (budget)

Pharmacies, veterinary, funeral homes (Polish USC system), labs, agricultural export; no conclusions.
