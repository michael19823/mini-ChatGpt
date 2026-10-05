# Turkey (Türkiye): Offline-industries pass (2026-10-05)

**Status: incomplete pass.** The search tool returned "You've hit your usage limit" on the 4th WebSearch call. Following the instructions ("If a search is refused, stop and write up what you have"), I stopped there. Only 3 searches returned results, all on the scrap and second-hand dealer group. Every other row below is **not screened**. I have not filled those rows with facts from memory, and they should be re-run in a later pass.

The existing country report (`research/countries/turkey.md`) already covers B-Reçete pesticide dealers, the ÜTS medical-device bridge, fresh-produce exporters, HKS hal merchants and others. None of those are repeated here.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Second-hand goods and scrap dealers (ikinci el eşya / hurda alım satım), Istanbul | Istanbul Valiliği decision (Dec 2024). For every purchase and sale, issue an "İkinci El Malzeme/Eşya Alım Satım Belgesi" with the counterparty's ID, address, date, quantity and item features. Also: keep an inventory list, keep the documents for 1 year, show the invoice to police on request, install indoor and outdoor CCTV. Itinerant scrap collectors (seyyar hurdacı) need documents from the municipality or the provincial environment directorate. | The decision prescribes a paper document plus a police inspection on request. No police upload portal is mentioned in any of the 10+ news reports found. No software vendor surfaced in the searches. | Unknown. No register count found (gap). | **Watch / interview** | A real per-transaction register obligation enforced by police, but only in one province so far, with no count and no evidence of willingness to pay |
| Same obligation in other provinces (Ankara, İzmir, Bursa and others) | Unknown whether other valilik issued similar decisions | Not screened | – | Not screened | Search budget refused |
| Gold buyers / jewellers (kuyumcu) buying used gold | Possible police or MASAK record-keeping | Not screened | – | Not screened | Search budget refused |
| Used-car dealers (oto galeri) | Ticaret Bakanlığı authorisation certificate (yetki belgesi) regime | Not screened; probably online-heavy (ilan sites) | – | Not screened | – |
| Households employing domestic workers and caregivers | SGK insurance registration, foreign-worker permits | Not screened | – | Not screened | Search refused at this query |
| Beekeepers (arıcılar) | Beekeeping registration system, migratory-hive movements | Not screened | – | Not screened | – |
| Livestock traders and animal markets | TÜRKVET ear-tag and movement records, transport documents | Not screened | – | Not screened | – |
| Seasonal agricultural labour intermediaries (tarım aracıları) | İŞKUR intermediary certificate | Not screened | – | Not screened | – |
| Water-well drillers | DSİ groundwater permits | Not screened | – | Not screened | – |
| Small-scale fishermen | Catch and vessel records | Not screened | – | Not screened | – |
| Street-market traders (pazarcılar) | Possible HKS künye for produce sold at markets (unverified) | Not screened | – | Not screened | – |
| Minibus (dolmuş) operators | Municipal UKOME plates and route permits | Not screened | – | Not screened | – |

## 2. Strongest opportunity (one tentative lead)

### Opportunity: Digital Second-Hand/Scrap Purchase Register for Istanbul Dealers

**Industry:**
Second-hand goods dealers (phones, tablets, computers, furniture, white goods) and scrap buyers (hurdacılar) in Istanbul.

**Buyer:**
The owner-operator of a small second-hand or scrap shop.

**Trigger / Why now:**
In December 2024, Istanbul Valiliği required the following from every second-hand and scrap business:
- an "İkinci El Malzeme Alım Satım Belgesi" for each transaction, naming the person, their ID and address, the date, and the item quantity and features;
- an inventory list;
- 1-year retention of the documents;
- invoices shown to police on request;
- indoor and outdoor CCTV.

**Current workflow:**
1. A seller walks in. The dealer copies the ID details and item description onto a paper document. I found no prescribed digital format.
2. The dealer files the paper and updates an inventory list (paper or Excel, assumed).
3. When police inspect, the dealer finds the matching document and invoice.

**Pain:**
- The obligation applies to every transaction and is checked by police.
- Its stated purpose is stolen-goods control, so a missing document links the dealer to receiving stolen goods.
- I found no operator complaints or fine amounts (unverified).

**Existing solutions:**
- Paper documents, probably printed by stationers or local printers (assumed, unverified).
- Generic pre-accounting and stock tools (e.g. Paraşüt, Akınsoft): none seen advertising this document.
- No police portal found.
- For phones specifically, IMEI registration with BTK is a separate, existing system (general knowledge, not re-verified in this pass).

**Offline evidence:**
- The rule was published as a governor's decision and reported in the general press (TRT Haber, Hürriyet, Cumhuriyet, NTV, Yeni Şafak).
- No vendor pages, forum threads or software listings appeared in three Turkish searches.
- Enforcement is a police counter inspection, not a portal.

**Offline channel:**
- Istanbul tradesmen's chambers (esnaf odaları) for second-hand dealers and hurdacılar; the specific chamber is unverified.
- Physical clusters such as Istanbul's second-hand and scrap markets, visited door to door.
- CCTV installers who are already selling to these shops because of the same decision.

**Market count:**
Unknown. No register count was found. It could be estimated from the chamber's membership or from the NACE codes for second-hand retail and scrap wholesale in TOBB/TESK statistics (not retrieved).

**The gap:**
A legally acceptable, searchable register that:
- captures the seller's ID (photo or scan of the ID card);
- records the item, including IMEI or serial where one exists;
- prints or exports the belge in the expected layout;
- keeps the records for 1 year;
- produces the inventory list on request.

**Possible product:**
A phone app for the counter. It scans the ID and the item serial or IMEI and generates the belge PDF and the inventory list. A one-tap "police view" retrieves any transaction by date, item or person.

**MVP:**
- Android app with ID-card OCR and IMEI/barcode scanning.
- Belge PDF template.
- Inventory export.
- KVKK consent text.

**Pricing hypothesis:**
About 300–700 TRY/month per shop (estimate). Willingness to pay is doubtful: many operators are cash-based micro-businesses. A done-for-you model through a CCTV installer bundle may sell better than software alone.

**How to find first customers:**
Walk the Istanbul second-hand and scrap clusters. Use chamber member lists and bundle with CCTV installers.

**Risks:**
- Only one province is confirmed.
- Enforcement intensity is unknown.
- Operators may prefer to stay informal.
- Storing ID data creates KVKK liability.
- The police may launch their own digital system (this happened elsewhere, unverified for Turkey).
- A non-local solo founder could not realistically sell this. It needs a Turkish-speaking local doing door-to-door sales.

**Kill condition:**
- Police accept a simple carbon-copy receipt book and do not fine anyone, or
- 10 shop visits show nobody keeps the belge at all.

**Score:** 3/10 (evidence too thin; mandatory and frequent, but a single province, unknown count, low willingness to pay and local-only distribution)

**Sources:**
- https://www.trthaber.com/haber/ekonomi/istanbulda-ikinci-el-esya-ve-hurda-alim-satimina-belge-zorunlulugu-getirildi-890780.html
- https://www.hurriyet.com.tr/yerel-haberler/istanbul/istanbulda-ikinci-el-esya-ve-hurda-alim-satimi-42617276
- https://www.cumhuriyet.com.tr/ekonomi/ikinci-el-esya-ve-hurda-alim-satimina-belge-zorunlulugu-getirildi-2276496
- https://www.ntv.com.tr/ntvpara/ikinci-el-esyalarda-belgesiz-satis-yapilamayacak,Cbldz_CSFEWJEGk02inj0A
- https://www.yenisafak.com/gundem/istanbulda-ikinci-el-esya-alim-satim-icin-belge-sarti-geldi-4661421

## 3. Rejected

None were rejected on evidence in this pass. The country report's existing rejections (HKS, U-ETDS, OSGB, pharmacies, GEKAP and others) still stand.

## 4. Method notes

- A Turkish query on the specific obligation ("ikinci el eşya ... alım satım belgesi ... valilik") surfaced the rule straight away through news reports of a governor's decision.
- A generic query ("hurda alım satım defteri emniyet") returned only accounting and vehicle-scrappage noise.
- In Turkey, quiet-industry obligations seem to appear as **provincial governor (valilik) decisions**, not national registers. Future passes should query "valilik kararı" together with the trade name, province by province.
- The search quota ran out on the 4th call, so the domestic-worker, animal, field-trade and agricultural-labour groups remain unscreened.
