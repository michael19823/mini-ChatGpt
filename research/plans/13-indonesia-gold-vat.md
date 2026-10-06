# Plan 13: Indonesia: "faktur-ready" gold stock and VAT desk for toko emas

*Development plan written 2026-10-06. Sources: `research/offline/indonesia.md` (Opportunity A),
`research/offline-ranking.md` (row #3, 6.5/10) and `research/revisit/opus-check/C0429-indonesia.md`
(notary/PPAT reports, 6.2). I used 27 WebSearch queries, most in extended mode and in Indonesian.
WebFetch was blocked, so every fact below comes from search-result snippets. Anything I could not
confirm is marked "unverified" or "estimate". No customer has been interviewed.*

---

## 1. Verdict up front

**Kill as a standalone product. At most, test it as a Coretax-export module for tax consultants,
sold through the same company as the PPAT reporting tool.** The legal trigger is real and still
current. In 2025–2026 the rates did not move: PMK 11/2025 kept them at 1.1% / 1.65% after the 12%
VAT change. Tax offices were still holding gold-trader sessions in May 2026, and DJP published a
"tax aspects for gold traders" guide in July 2026. Two things the offline report relied on did not
survive verification, though:

1. **"No jewellery POS with tax features" is wrong.** At least eight Indonesian toko-emas software
   vendors sell today:
   - LEGOLD says it has >500 shop clients and charges Rp1.98m a year for cloud.
   - Jemari Point charges a Rp20m setup fee plus Rp500k a month.
   - Starfield charges Rp250k a month.
   - SITOKMAS sells Rp3.5–15m licences and has a "Rekapitulasi Pajak" tax recap.
   - SYIFAAHM GOLD advertises PMK 48/2023 tax reports.
   - Idea Jewelry, Indoaplikasi and Lenmarc also sell.

   The stock ledger, intake, buyback and receipts already exist. The only gap still open is narrow:
   an export split by provenance into Coretax XML (code 04/05). That is a feature these vendors can
   add in a sprint.
2. **The tax saving is smaller than the report assumed.** The lower 1.1% rate needs a *full* tax
   invoice (buyer identity included) on acquisition:
   - A summary invoice ("digunggung") does not count.
   - Resold consumer buybacks are taxed at 1.65%.
   - The Finance Minister and APPI say ~90% of producers operate outside the tax system.

   So for most shops, most stock can never qualify for 1.1%. The "1.1% instead of 1.65%" sales
   pitch only works for shops that already buy from PKP manufacturers.
3. **The scheme is still politically open.** In Oct 2025 Finance Minister Purbaya said he was
   studying APPI's proposal to collect ~3% VAT at the producer and drop collection at the consumer.
   I found no PMK enacting it by 6 Oct 2026, but the proposal has not been withdrawn either. If it
   passes, the retail deemed-rate invoicing this product automates disappears.

The original 6.5 assumed weak competition and a large, provable saving. With both corrected, the
new score is **5.0** (section 15).

---

## 2. Verification results

| Claim from report | What I found | Source | Status |
|---|---|---|---|
| PMK 48/2023 makes all gold-jewellery traders PKP regardless of turnover | Confirmed: traders must be confirmed as PKP even below the Rp4.8bn threshold. DJP and DDTC repeat this in 2025–2026 | DDTC 1805535, 1819469; pajak.go.id node/102435 | Confirmed |
| Deemed VAT is 1.1% with acquisition invoices and 1.65% without | Confirmed and still current. The 12% VAT rate briefly implied 1.2% from 1 Jan 2025 (DDTC 1807965/1808005). **PMK 11/2025** (effective 3–4 Feb 2025, retroactive to 1 Jan) restored 1.1% / 1.65%. Sales to PKP manufacturers are 0% | DDTC 1808752; mitraconsulting.co.id | Confirmed (with a 2025 detour) |
| The rate is decided per item by its provenance | Consultants' reading: each delivery is taxed by whether *that* stock came with a full invoice | DDTC 1794144 and consultation 1803277 (snippets) | Confirmed (interpretation; get a written DJP ruling) |
| Summary invoices and buybacks qualify for the lower rate | **No.** Invoices without buyer identity (Art. 13(5a)) don't qualify, so the sale is 1.65%. Resold consumer buybacks are 1.65% | pajak.go.id node/102435; DDTC consultation 1803277 | Contradicted (narrows the saving) |
| PPh 22 at 0.25% applies to "some sales" | PMK 52/2025 (in force 1 Aug 2025) **exempts sales to end consumers**, final-tax SMEs and SKB holders. For a retail shop, PPh 22 hardly matters | pajak.go.id node/117259; DPR P3DI brief Aug 2025 | Changed (smaller scope) |
| Input VAT can be credited | Input VAT on deemed-rate gold **cannot be credited**, so there is no input-VAT reconciliation pain | DDTC 1795640 | New fact (lowers pain) |
| Coretax does not calculate the deemed-rate VAT | Confirmed. The PKP computes the VAT before creating the invoice. Bulk XML import with the deemed-rate code is supported, and Kring Pajak confirms it. Code: Ortax/Kring Pajak say **05**, a DJP doc snippet says **04** (DPP nilai lain) | ortax.org; x.com/kring_pajak; pajak.go.id "Aspek Perpajakan Pedagang Emas" (Jul 2026) | Confirmed; code to be settled in testing |
| VAT may move to producers | Purbaya studied a 3% producer-level VAT in Oct 2025, with no collection from consumers. **No enacting PMK found as of Oct 2026**. A separate plan relaxes the purity threshold (99.99% to 99.9%) for the precious-metal VAT facility via a PP revision. That affects manufacturers, not retail | CNBC, Kumparan, CNN Indonesia (Oct 2025); DDTC 1822927; taxnesia weekly 5 Oct 2026 | Unresolved (open risk) |
| Enforcement is active | Confirmed for 2026: KPP Subulussalam on 6 May 2026, KP2KP Serui on 11 May 2026, DJP guide in Jul 2026, plus earlier Boyolali, Kediri, Jatim I and Jabar I sessions with APEPI | pajak.go.id news pages | Confirmed |
| No toko-emas software has tax features | **Wrong.** At least 8 vendors; SITOKMAS and SYIFAAHM advertise tax recap/PMK 48 reports. I could not verify that any exports Coretax XML | sitokmas.id; pencatatanemas.com; legold.id; jemaripoint.com; starfield.id | Contradicted |
| ~30,000 gold shops | Same Kemenperin figure ("500+ industry players and 30,000 gold shops"). The date is unclear and it is not a registry count | industry.co.id 148008 | Confirmed as a quote; stale |
| Number of PKP gold shops | **Not published.** DJP sweeps imply many are still unregistered | DDTC 1807444 | Unverified |
| goAML reporting at ≥Rp500m | Confirmed (PPATK Reg 2/2021, UU 8/2010 Art. 17), but rare for a family shop | jdih.ppatk.go.id | Confirmed, low value |
| New in 2026 | PMK 8/2026 makes Antam an ILAP that reports gold and silver sales to DJP monthly. Data-matching on gold is tightening | ortax.org | New (helps "why now" a little) |

---

## 3. Customer and problem

**Buyer.** The buyer is the owner of a family toko emas that is already PKP, usually a second-generation shop in a city market or on a high street. The user is the owner, a family bookkeeper or the outside tax consultant. The real economic buyer for a compliance tool is often the **consultant**: one consultant files for 10–40 small PKPs (estimate).

**Job to be done.** Each month, issue correct deemed-rate invoices for every sale, pay and file the VAT return on time, and prove to a KPP visitor which stock qualified for 1.1%.

**Current workflow (estimates):**

| Step | Who | Time / cost (estimate) |
|---|---|---|
| 1. Receive stock from a manufacturer or wholesaler; keep the invoice if one exists | Owner | 0, but the invoice is often missing |
| 2. Buy back old gold from consumers (no invoice) | Owner | 0 |
| 3. Sell, with a handwritten note or a POS receipt (LEGOLD, SITOKMAS etc.) | Cashier | Already done |
| 4. Month-end: list sales, mark each 1.1% / 1.65% / 0%, compute VAT | Bookkeeper / consultant | 2–6 h a month |
| 5. Key invoices into Coretax or build an XML import | Consultant | 1–4 h a month (scales with volume) |
| 6. Pay, then file the VAT return | Consultant | 0.5–1 h |
| Consultant fee | | Rp500k–2m a month per client (snippet range, not gold-specific) |

**Cost of failure.** These are standard KUP sanctions: interest on underpaid VAT, a late-filing fine (Rp500k per month for VAT returns), and a tax assessment after a KPP visit. Defaulting everything to 1.65% is safe but costs 0.55% of the qualifying turnover. For a shop selling Rp5bn a year with 20% invoiced stock, that is ~Rp5.5m a year (~US$330) (estimate). That is too small to anchor a Rp300k/month price.

---

## 4. Product definition (if pursued, as a narrow module)

**Core loop.** Import the POS sales export, or capture items at intake. Tag each item's provenance (PKP invoice number / none / buyback / to-manufacturer). The month-end engine assigns 1.1 / 1.65 / 0 and generates Coretax XML plus a working paper. The consultant uploads it.

**MVP (must-have):**
- Upload of CSV/Excel exports from LEGOLD, SITOKMAS, Jemari Point and generic POS, with column mapping.
- A provenance register: supplier, PKP invoice number, weight, karat.
- A rate engine.
- Coretax deemed-rate output-invoice XML.
- A PDF working paper.

**v1:**
- Consultant multi-client dashboard.
- Supplier invoice matching against Coretax input data (manual download).
- KPP-visit evidence pack.
- goAML ≥Rp500m flag.

**Later:** white-label API for POS vendors.

**Out of scope:** POS, receipts, barcode printing and pricing. Incumbents own these.

**Key screens:**
1. Client list with filing status for this month.
2. Import and mapping wizard.
3. Provenance register with "missing invoice" flags.
4. Month summary showing VAT by bucket and the saving versus all-1.65%.
5. XML download and checklist.

---

## 5. Technical design

- **Architecture:** a single web app (Django or Laravel + Postgres) on an Indonesian-region cloud
  (e.g. GCP/AWS Jakarta), plus object storage for uploads. No mobile app.
- **Stack:** Laravel is the most common choice among Indonesian freelancers, so it is easy to hire
  for. Django suits XML/XSD work. Either is fine for one developer.
- **Data model:** Tenant (consultant) → Client (PKP, NPWP/NIK-16) → Supplier → StockLot
  (provenance, invoice number, grams, karat) → Sale (date, buyer type, price, lot) → MonthlyRun →
  CoretaxExport.
- **Integrations:**

  | Integration | Method | Fallback |
  |---|---|---|
  | Coretax output invoices | XML import file uploaded by the user | Manual entry guide |
  | POS data | CSV/Excel mapping per vendor | Manual entry grid |
  | PJAP APIs (Pajakku/OnlinePajak) | Possible later partnership; becoming a PJAP needs DJP appointment | Stay file-based |

- **Rules engine:** versioned rate tables by effective date (PMK 48/2023, PMK 11/2025, PMK
  52/2025). Buyer-type logic: end consumer, other trader, PKP manufacturer. A flag for sales whose
  lot has no full invoice.
- **Privacy:** UU 27/2022 (PDP Law) covers buyer NIK and name. PP 71/2019 allows private
  electronic-system operators to host offshore, but must register as a PSE. I recommend Jakarta
  hosting anyway (from knowledge; verify current PSE rules).
- **Audit trail and liability:** keep immutable run snapshots and record who uploaded each file.
  The terms make the PKP and consultant responsible for filing; the tool only prepares data.
- **Localisation:** Bahasa Indonesia UI, IDR, 16-digit NPWP/NIK, the 17-digit Coretax invoice
  number.
- **Testing:** golden files validated by Coretax's own XML import in a friendly consultant's test
  PKP account. There is no public sandbox (unverified).

---

## 6. Build plan

| Week | Milestone | Dev-weeks |
|---|---|---|
| 0–2 | 12 interviews (section 13); obtain 3 real POS exports and 1 Coretax XML template | 0 |
| 3–4 | Rate engine + XML generator; validate against a real Coretax import | 2 |
| 5–6 | Import mapping for 2 POS vendors, provenance register, working paper | 2 |
| 7 | Concierge: founder/partner runs month-end for 5 shops via 2 consultants | 0.5 |
| 8–10 | First paid consultant; multi-client dashboard | 2 |
| 11–16 | v1: evidence pack, goAML flag, third POS mapping | 4 |

That is about **6 dev-weeks to the first paying consultant** and ~11 to v1. Concierge MVP: run the first months in a spreadsheet plus an XML script, operated by the local partner.

---

## 7. Go-to-market

- **First 10 customers:** tax consultants (IKPI members) and small accounting firms (KJA) in Surabaya, Bali and Central Java who already file for 5+ gold PKPs. Find them through APEPI branch secretaries (Jatim and Jabar have run DJP sessions with DJP) and the KPP outreach-session circuit.
- **Partner channel (preferred):** white-label or referral with **LEGOLD/SITOKMAS/Jemari Point**, offered as a "Coretax export" add-on to their existing clients. This is the only route to scale, and it is also the route by which they would build it themselves.
- **Outreach angles:**
  - "Your gold-shop clients' Coretax invoices in 10 minutes, not 3 hours."
  - "Evidence pack for the next KPP visit."
  - Avoid promising big savings (see section 3).
- **Timing:** the VAT return is due at month-end for the previous month. Launch before the Jan–Mar annual-return season, when consultants have the least time to evaluate tools.
- **SEO (Bahasa Indonesia):**
  - "cara membuat faktur pajak emas perhiasan di Coretax"
  - "impor XML faktur besaran tertentu emas"
  - "PPN 1,1% atau 1,65% toko emas"

  DDTC, Ortax, Pajakku and Klikpajak already rank for these, so content alone won't win.

---

## 8. Pricing and unit economics

- **Pricing tiers:**
  - Consultant plan at Rp100k per client shop per month (~US$6), minimum 5 shops.
  - Direct shop plan at Rp200k a month.
  - Anchors: Starfield Rp250k/month for a full POS; LEGOLD ~Rp165k/month for cloud; consultant
    fees Rp500k+.
- **Expected ACV:** a consultant with 10 shops pays ~Rp12m a year (~US$730). A direct shop pays
  ~Rp2.4m a year (~US$145).
- **CAC (estimate):**
  - Consultant via a partner: ~US$100–200 (travel plus commission).
  - Direct shop walk-in: ~US$50 but with high churn.
  - POS-vendor revenue share: ~30–40% of revenue.
- **Gross margin:** ~85% before the partner share, ~55% after.
- **Payment rails:** bank transfer, QRIS or VA via Xendit/Midtrans. These require an Indonesian entity. A foreign merchant of record (Paddle etc.) is a poor fit for IDR transfer-paying SMEs.
- **FX risk:** IDR has drifted around Rp16–17k per US$ (estimate). All revenue is in IDR.

---

## 9. Company and legal setup

- **Entity:** a PT PMA is needed to contract and collect locally. BKPM Reg 5/2025 lowered the minimum paid-up capital to ~Rp2.5bn (from memory; verify), which is heavy for this revenue. The alternative is a **local partner's PT (PT perorangan or CV)** as reseller, with a software-licence agreement to a foreign entity.
- **Digital-services VAT:** foreign sellers of digital services over the PMSE thresholds must collect 12% (effective 11%) VAT (PMK 60/2022; from memory). This is moot if billing runs through the local partner.
- **Contracts:** Bahasa Indonesia terms are required for consumer-facing agreements (UU 24/2009). Limit liability to fees, and state that the tool is "not a tax consultant".
- **Professional liability:** advice stays with licensed consultants (PMK 111/2014 as amended). The tool must not give tax advice directly to shops.

---

## 10. Financial model (estimates)

These are cash costs only. The founder's time is unpaid. Assumptions:
- Rp16,500 = US$1.
- Blended ARPU of Rp110k per shop per month.
- 30% channel share.
- Monthly costs of US$300 (hosting, tools, partner stipend), plus US$1.5k one-off for travel in months 1–3.
- 3% monthly churn.
- Customer growth is driven by the consultant channel.

| Period | Shops billed | MRR (US$) | Net after channel (US$) | Costs (US$) | Cumulative cash (US$) |
|---|---|---|---|---|---|
| M1 | 0 | 0 | 0 | 800 | −800 |
| M2 | 0 | 0 | 0 | 800 | −1,600 |
| M3 | 5 | 33 | 23 | 800 | −2,377 |
| M4 | 10 | 67 | 47 | 300 | −2,630 |
| M5 | 15 | 100 | 70 | 300 | −2,860 |
| M6 | 22 | 147 | 103 | 300 | −3,057 |
| M7 | 30 | 200 | 140 | 300 | −3,217 |
| M8 | 38 | 253 | 177 | 300 | −3,340 |
| M9 | 46 | 307 | 215 | 300 | −3,425 |
| M10 | 55 | 367 | 257 | 300 | −3,468 |
| M11 | 64 | 427 | 299 | 300 | −3,469 |
| M12 | 73 | 487 | 341 | 300 | −3,428 |
| Q5 (M15) | 100 | 667 | 467 | 300 | −3,053 |
| Q6 (M18) | 130 | 867 | 607 | 300 | −2,273 |
| Q7 (M21) | 160 | 1,067 | 747 | 300 | −1,073 |
| Q8 (M24) | 190 | 1,267 | 887 | 300 | +547 |

- **Month-12 MRR:** ~US$490 (Rp8m).
- **Break-even:** on cash costs, month 11. Cumulative cash turns positive around month 24. It never pays a founder salary.
- **Ceiling:** PKP gold shops are unknown; assume 8–15k (estimate). Shops using a consultant who files Coretax: ~5k. A 5–8% share gives 250–400 shops × Rp110k ≈ **US$1.7–2.7k MRR (~US$20–32k ARR)**. A POS-vendor white-label deal could raise reach, but at a lower price per shop.

---

## 11. Team and founder fit

- **Language:** fluent Bahasa Indonesia and tax vocabulary are mandatory. The trade is family- and network-based and cash-heavy.
- **Founder fit:** a non-local solo founder can build the XML engine, but cannot sell this. It needs a local partner who is a tax consultant (brevet B/C) or who comes from a gold family.
- **Shared company with the notary/PPAT idea (C0429):**
  - **Company:** the same PT can carry both.
  - **Codebase:** shared, roughly 30–40% (estimate): multi-tenant consultant dashboard, Indonesian tax calendar, Coretax/DJP file generators, PDF working papers, NPWP/NIK validation, Xendit billing.
  - **Channels:** overlap only partly. IKPI tax consultants and KPP outreach sessions touch both, but PPAT buyers come through IPPAT/INI chapters and gold shops through APEPI.
  - **Order:** lead with PPAT. It scores higher (6.2 vs 5.0), has a Rp10m-per-report fine and ~23k validated PPATs, and no comparable incumbent cluster. Add the gold module only if PPAT consultants ask for it.

---

## 12. Risks and mitigations

| Risk | Type | Mitigation |
|---|---|---|
| A 3% producer-level VAT (Purbaya/APPI) removes retail deemed-rate invoicing | Regulatory | Don't build before interviews; keep the engine generic (any "besaran tertentu" sector); watch JDIH Kemenkeu |
| POS incumbents (LEGOLD >500 shops, SITOKMAS, Jemari Point) add Coretax XML export | Competitive | Partner rather than compete; offer the engine as a licence |
| Few shops hold full PKP-manufacturer invoices, so the saving is negligible | Value | Sell time saved for consultants, not the tax saving |
| Shops avoid PKP status or under-report ("stay under the radar") | Market | Target only already-PKP shops via consultants |
| Coretax XML schema changes (DJP has updated formats several times in 2025) | Platform | Versioned templates; monthly regression against a test account |
| PT PMA cost and IDR collection | FX/payment | Bill through the local partner's entity; licence fee offshore |

---

## 13. Validation plan before writing code

- **Interview targets (12):**
  - 4 tax consultants filing for gold PKPs (IKPI Surabaya, Denpasar, Solo).
  - 4 PKP toko-emas owners (Pasar Atom/Surabaya, Boyolali, Denpasar).
  - 2 POS vendors (LEGOLD, SITOKMAS).
  - 1 APEPI branch secretary.
  - 1 PKP jewellery manufacturer.
- **Questions:**
  - What share of your stock comes with a full tax invoice?
  - How do you produce Coretax invoices today: one by one, XML, or a summary?
  - How many sales are there a month, and how many hours does month-end take?
  - What does the consultant charge?
  - Does your POS already give you a tax recap? What's missing?
  - Have you heard anything about the 3% producer scheme?
- **Pass/fail thresholds:**
  - Pass if ≥3 of 4 consultants spend ≥3 h a month per client on gold invoicing, and ≥2 say their POS export doesn't solve it.
  - Pass if ≥30% of the median shop's stock carries full invoices.
  - Fail if POS vendors say Coretax export is already on the roadmap, or if shops issue one monthly summary invoice that consultants key in 15 minutes.
- **Pre-sale test:** 3 consultants each prepay Rp1m for 3 months of concierge month-end processing for 5 clients. Alternatively, one POS vendor signs an LOI for a white-label export.

---

## 14. Expansion path

- **Same engine (other deemed-rate sectors in Indonesia):** used cars, LPG and agricultural products under PMK 64/2022 (from memory; verify).
- **Same company:** the PPAT/notary monthly reports (C0429).
- **Other countries:** gold-dealer registers and VAT schemes recur in 36–39 countries (offline ranking), but none share this exact 1.1/1.65 provenance logic.

---

## 15. Reassessment scorecard

| # | Criterion | Original | New | Reason |
|---|---|---|---|---|
| 1 | Pain | 7 | 5 | Input VAT isn't creditable and PPh 22 doesn't apply to consumer sales; the real work is invoice keying, and the saving is small |
| 2 | Frequency | 8 | 8 | Per sale and monthly |
| 3 | Mandatory nature | 8 | 7 | Statutory and enforced, but widely evaded, and the scheme may be replaced |
| 4 | Fragmentation | 4 | 3 | One system (Coretax), one rule set |
| 5 | Competition (high = weak) | 7 | 4 | ≥8 toko-emas POS vendors, two advertising tax recaps; LEGOLD >500 shops |
| 6 | Incumbent gap | 7 | 4 | Only the provenance-split Coretax XML export is missing: a feature, not a product |
| 7 | Buyer accessibility | 6 | 6 | APEPI branches, KPP sessions, consultants |
| 8 | Willingness to pay | 5 | 3 | POS anchors Rp165–500k a month for the whole system; a tax add-on is worth ~Rp100k |
| 9 | MVP simplicity | 8 | 7 | XML generator is easy; per-vendor import mapping and code 04/05 ambiguity add work |
| 10 | Distribution | 6 | 5 | The best channel (POS vendors) is also the likeliest competitor |
| | **Overall** | **6.5** | **5.0** | The criteria average 5.2; I rounded down for the open 3% producer-VAT proposal |

**Reasons for changes of 1 point or more:**
- **Competition and incumbent gap (−3 each):** the report's "no jewellery POS" claim did not survive one search.
- **Pain (−2) and willingness to pay (−2):** the 1.1% rate needs full manufacturer invoices, which 90% of producers don't issue. Buybacks and summary invoices don't qualify, and input VAT isn't creditable. That leaves little cash saving to price against.
- **Overall (−1.5):** combines the above. It now ranks below the PPAT idea (6.2) as an Indonesian entry point.

---

## Sources
- Rates and PMK 11/2025: https://news.ddtc.co.id/berita/nasional/1808752/pmk-112025-terbit-tarif-ppn-emas-perhiasan-tetap-11-dan-165 ; https://news.ddtc.co.id/berita/nasional/1807965/pedagang-kini-pungut-ppn-emas-perhiasan-dari-konsumen-lebih-tinggi ; https://mitraconsulting.co.id/peraturan-baru-terbit-tarif-ppn-emas-perhiasan-tetap-11-dan-165/
- Per-item provenance, buybacks and summary invoices: https://news.ddtc.co.id/berita/nasional/1794144/tidak-ada-faktur-pajak-lengkap-pedagang-emas-pungut-ppn-lebih-tinggi ; https://news.ddtc.co.id/review/konsultasi/1803277/jual-kembali-emas-perhiasan-tanpa-faktur-pajak-berapa-tarif-ppn-nya ; https://pajak.go.id/en/node/102435
- Input VAT not creditable: https://news.ddtc.co.id/berita/nasional/1795640/pajak-masukan-terkait-ppn-emas-perhiasan-tak-dapat-dikreditkan
- PMK 51/52 2025: https://pajak.go.id/en/node/117259 ; https://berkas.dpr.go.id/pusaka/files/info_singkat/Info%20Singkat-XVII-15-I-P3DI-Agustus-2025-2435.pdf
- Coretax: https://ortax.org/membuat-faktur-pajak-besaran-tertentu-di-coretax ; https://x.com/kring_pajak/status/2056300005796069440 ; https://x.com/kring_pajak/status/1975463921986510856 ; https://pajak.go.id/sites/default/files/2026-07/Aspek%20Perpajakan%20Pedagang%20Emas.pdf
- Producer-VAT proposal: https://www.cnbcindonesia.com/news/20251023194846-4-678767/purbaya-mau-ubah-skema-pungutan-ppn-perhiasan-konsumen-tak-kena ; https://kumparan.com/kumparanbisnis/purbaya-kaji-ppn-perusahaan-emas-jadi-3-persen-untuk-tekan-produsen-ilegal-266Qj6voez5 ; https://www.cnnindonesia.com/ekonomi/20251023202731-532-1287885/purbaya-lirik-opsi-beli-emas-bebas-ppn-demi-berantas-penjualan-ilegal ; https://news.ddtc.co.id/berita/nasional/1822927/wah-batas-kadar-emas-yang-dapat-fasilitas-ppn-bakal-dilonggarkan ; https://taxnesia.com/2026/10/05/weekly-tax-summary-05-okt-2026-penerimaan-pajak-pajak-minimum-global-pajak-digital-pajak-marketplace-sp2dk-ptkp-pph-21-pajak-emas-pembetulan-spt-dan-pengumuman-djp-serta-peraturan/
- Enforcement in 2026: https://www.pajak.go.id/id/berita/bangun-kesamaan-persepsi-pajak-subulussalam-undang-pedagang-emas-untuk-dapatkan-edukasi ; https://www.pajak.go.id/id/berita/perkuat-pemahaman-wajib-pajak-kp2kp-serui-adakan-edukasi-aturan-perpajakan-pedagang-emas ; https://news.ddtc.co.id/berita/daerah/1807444/pedagang-emas-wajib-pkp-kantor-pajak-sisir-pasar-tradisional
- Antam as ILAP (PMK 8/2026): https://ortax.org/pmk-terbaru-antam-wajib-laporkan-penjualan-emas-dan-perak-ke-djp-setiap-bulan
- Competitors: https://sitokmas.id/ ; https://store.easystem.co.id/catalog/detail_produk/60-sitokmas-aplikasi-kasir-khusus-untuk-toko-emas ; https://pencatatanemas.com/ ; https://www.legold.id/ ; https://www.jemaripoint.com/ ; https://starfield.id/software-toko-emas/ ; https://software-toko-emas.com/ ; https://indoaplikasi.com/software-toko-emas.php ; https://www.lenmarc.com/products/legold
- Market count: https://www.industry.co.id/read/148008/kemenperin-perkuat-daya-tahan-industri-perhiasan-di-tengah-kenaikan-harga-emas-dunia
- goAML: https://jdih.ppatk.go.id/dokumen/detail/608/peraturan-ppatk-nomor-2-tahun-2021-tentang-tata-cara-penyampaian-laporan-transaksi-dan-laporan-transaksi-keuangan-mencurigakan-melalui-aplikasi-goaml-bagi-penyedia-barang-danatau-jasa
- APEPI: https://apepi.id/ ; https://pajak.go.id/en/node/67587 ; https://www.pajak.go.id/en/node/100990
- Searches used: 27 of 30.
