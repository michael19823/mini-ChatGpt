# Indonesia: Indie-Hacker Opportunity Research

Research date: 2026-10-04. Brief: `research/brief.md`. Track: Indonesia (Bahasa Indonesia and English sources).

---

## Read first: limits on the evidence

- **Search budget.** The shared WebSearch cap (200 calls across all 22 parallel agents) ran out after this track's 11th search. No more searches were possible.
- **Fetching.** The egress proxy blocked WebFetch on every Indonesian government, news and vendor domain tried. That includes imigrasi.go.id, bpjph.halal.go.id, kompas.com, bisnis.com, ddtc.co.id, ikpi.or.id, becikapp.com, notarisapp.id, indonesiavisas.id, baliexpat.com and ukmindonesia.id. Only github.com could be reached.
- **Evidence tags used below.**
  - **[V]**: verified this session from the search engine's result text for the cited URL. The page was summarized by the search tool, not read in full.
  - **[PK]**: prior knowledge from the model's training data (to mid-2026), not checked again this session. Treat it as a hypothesis to confirm before interviews.
- **Where diligence is complete.** Competitor checks are solid only for notary/PPAT software and Bali villa tooling. The halal and LKPM competitor checks are incomplete, so those scores are marked *provisional*.
- **How to use this.** The ranking is a useful direction, but confirm every [PK] claim before any customer interview.

---

## Industries screened

| # | Industry | Workflow looked at | Verdict | One-line reason | Evidence |
|---|---|---|---|---|---|
| 1 | Lodging: villas, guesthouses, homestays, kos, serviced apartments | Report each foreign guest in APOA within 24h (check-in and check-out), plus monthly PBJT hotel-service tax to each regency | **Opportunity #1** | Mandatory per-guest task with no API (relaunched 2025), and 2025–26 local-tax pressure on villas. The only competitor found has automation "on the roadmap" | V |
| 2 | F&B SMEs, caterers/central kitchens, restaurant & café chains | Keeping a halal certificate valid: SJPH upkeep, supplier halal evidence, change reporting in SIHALAL | **Opportunity #2 (provisional)** | Halal becomes mandatory for micro/small F&B on 17/18 Oct 2026. Upkeep after certification looks unserved, but the competitor check is incomplete | V (mandate) / PK (workflow, competitors) |
| 3 | PT PMA (foreign-owned companies), served by corporate-service providers (CSPs) and accountants | Quarterly LKPM investment-activity report in OSS, filed per project | **Opportunity #3 (provisional)** | Mandatory every quarter and split per project. CSPs re-type it from accounting data by hand. Not verified this session | PK |
| 4 | Notaries / PPAT (land-deed officials) | Monthly deed reports to KPP (tax), BPN (land) and Bapenda (regional tax); e-BPHTB validation | Rejected: too competitive | At least 6 local notary apps already auto-generate the monthly reports, at Rp199k–999k/month | V |
| 5 | Pharmacies (apotek) | Monthly SIPNAP narcotics/psychotropics report, due before the 10th | Rejected (provisional) | The requirement is real. Pharmacy POS systems such as VMedis reportedly already export SIPNAP files, so the gap is thin | V (requirement) / PK (competitor) |
| 6 | All VAT-registered SMEs | Coretax e-Faktur, e-Bupot and returns (Coretax live since Jan 2025) | Too competitive | Licensed PJAP vendors (OnlinePajak, Pajakku, Klikpajak by Mekari) and accounting suites already cover it | PK |
| 7 | Employers | Monthly PPh 21 (TER method) and BPJS | Too competitive | Mekari Talenta, Gadjian and many HRIS products already do this | PK |
| 8 | Clinics / small hospitals | SATUSEHAT electronic-medical-record integration | Too competitive | Dozens of SIMRS/clinic-system vendors already advertise SATUSEHAT bridging | PK |
| 9 | Coffee, cocoa and palm exporters | EUDR geolocation and due-diligence packs | Too competitive / poor distribution | Koltiva, Satelligence and others are active. EU application has slipped to 30 Dec 2026 for large operators and 30 Jun 2027 for micro/small (verify) | PK |
| 10 | Small hazardous-waste (B3) generators: clinics, workshops, labs | Festronik e-manifests, B3 logbook/balance, SIMPEL periodic reports | Attractive problem, poor distribution | Licensed transporters and consultants own the relationship. Buyers are fragmented and willingness to pay is low | PK |
| 11 | Government vendors | Listing and updating products on e-Katalog v6 (LKPP) | Poor distribution | "Jasa e-katalog" consultants do this work, and there is no vendor-side API | PK |
| 12 | Micro F&B (self-declare halal route) | First-time halal certification | No willingness to pay | Government funds free certification (500k-business programme) | V |
| 13 | Fishery exporters to the EU | Catch certificates via EU CATCH IT (mandatory from 10 Jan 2026) | Not pursued | Validation runs through KKP and the importer-side system; few, larger exporters | PK |
| 14 | Natural-resource exporters | 100% export-proceeds (DHE SDA) retention for 12 months (PP 8/2025, from 1 Mar 2025) | Not pursued | Handled through banks; large exporters; enterprise sales | PK |

---

## Top opportunities

### Opportunity: APOA + PBJT guest-compliance router for villas and guesthouses (Bali first)

**Industry:**  
Short-stay lodging that hosts foreigners: private villas, guesthouses, homestays (pondok wisata), kos/boarding houses and serviced apartments. Start in Bali, then Lombok, Jakarta and Batam.

**Buyer:**  
- **Primary:** the operations or front-office lead at a Bali villa-management company managing 10–200 villas, often for foreign owners.
- **Also primary:** owner-operators of small villa or guesthouse businesses. Many of these are PT PMA.
- **Secondary:** small non-chain hotels.

**Trigger / Why now:**  
- **APOA relaunch [V].** Immigration relaunched APOA in March 2025 (Kompas, 27 Mar 2025). It now requires every lodging type to report foreign guests within 1×24 hours, including villas, guesthouses, kos, rental houses and company mess facilities. Bisnis.com (26 Mar 2025) reported this alongside a "new rule" on supervising foreigners. A new APOA user guide followed in Sept 2025.
- **Enforcement in Bali [V].** Ngurah Rai immigration increased checks on villas, homestays and hotels in Legian–Kuta and Pecatu–Uluwatu. Immigration offices were still campaigning on APOA check-in/check-out reporting in 2026 (Imigrasi Serang post on X).
- **Local tax pressure [V].** Regencies are chasing villas that avoid PBJT, the hotel-service tax: up to 10%, paid and reported monthly through each regency's own system. Badung Bapenda is targeting villas registered as residences, and other local governments were doing the same in 2026 (DDTC news items).
- **Tourist levy [PK].** Bali's foreign-tourist levy (Rp150k) is a further check-in data point that accommodations are asked to verify. Verify the current obligation.

**Current workflow:**  
1. A booking arrives through Airbnb, Booking.com or direct WhatsApp. Stay dates live in the OTA, channel manager or PMS.
2. At check-in, staff ask for the passport and photograph it, usually over WhatsApp. Passport-copy practice is described on Bali villa sites [V].
3. Staff log into APOA, upload the passport photo page, re-type identity fields and stay dates, and submit within 24h [V].
4. At departure, staff log in again to record the check-out [V].
5. At month-end, finance totals room revenue per property from OTA payout reports. They then file and pay PBJT on the relevant regency's e-tax system [V: monthly PBJT via local systems; PK: each regency (Badung, Gianyar, Denpasar, Tabanan…) runs its own system].
6. When immigration or Bapenda inspects, the operator reconstructs proof from WhatsApp and Excel. APOA can export reported guests to Excel [V].

**Pain:**  
- **Mandatory and per guest, with a 24h deadline.** Immigration news cites Law 6/2011: up to 3 months' detention or a Rp25m fine for not providing foreign-guest data. Some secondary sources claim up to 5 years and IDR 500m; that claim is unverified [V for both citations].
- **Volume [V].** Bali has the highest recorded foreign-guest occupancy in APOA: 47,772 foreign nationals at the time reported.
- **Double entry.** The data already exists in the OTA booking and the passport photo, yet APOA needs re-typing per guest plus a second session for check-out. Time per guest is an estimate of 3–8 minutes and is not verified.
- **Outsourcing signal [V].** Villa-management firms market "compliance, including APOA guest reporting" as a reason to hire them. That suggests owners value having the task taken off their hands.

**Existing solutions:**  
- **APOA web portal.** Free, with manual entry and an Excel export. No evidence was found of bulk upload or a public API [V].
- **Becik** (becikapp.com). A WhatsApp-native villa-management tool for Bali [V]:
  - It captures passport and visa scans.
  - It tracks PHR/PBJT (10%), BPJS, NIB validity and Pondok Wisata renewals.
  - Automated foreign-guest ("STM") reporting is only "on the roadmap".
- **Villa-management companies** doing it by hand as part of their fee [V that the service exists; fee level PK].
- **Global PMS and channel managers** (Hostaway, Guesty, Lodgify) and guest-registration tools (Chekin). No evidence of APOA support was found, but this was not checked exhaustively (unverified).
- **"SIPA".** One villa-marketing page mentions "automated guest reporting systems (SIPA)". It is unidentified; check whether it is a competitor or a misnomer.

**The gap:**  
No verified product closes this loop across many properties:

> booking + passport photo → APOA check-in → APOA check-out → audit proof → monthly PBJT worksheet per regency

OTAs and PMSs hold the stay dates and APOA holds the legal record. Today a human bridges the two for every guest, twice.

**Possible product:**  
1. **Guest pre-check-in link.** Sent by WhatsApp or email, it collects the passport photo and consent and reads the passport's machine-readable zone.
2. **APOA task queue.** A queue of check-in and check-out tasks per property, with a browser extension that pre-fills APOA so staff submit with one click.
3. **Nightly reconciliation.** Flags any booking that has no APOA receipt.
4. **Month-end PBJT workbook.** Built per regency from OTA payout CSVs.

**MVP:**  
- A Chrome extension plus a small web app.
- **Inputs:** iCal or OTA CSV import for stays, and a guest upload link.
- **Processing:** OCR of the passport's machine-readable zone.
- **Outputs:** one-click APOA pre-fill at check-in and check-out, an "unreported guests" dashboard, and a PDF proof log.
- **Out of scope for v1:** PBJT filing (worksheet only).

**Pricing hypothesis:**  
- US$6–10 per unit per month (about Rp100k–160k), minimum US$30/month.
- A villa manager with 30–100 units would pay about US$200–600/month.
- Alternative: Rp3k–5k per reported guest.

**How to find first customers:**  
- **Villa-management companies** in Bali, via directory and comparison pages such as shortstaybali.com and balivillahub.com, plus Google Maps.
- **Multi-listing Airbnb/Booking hosts** in Canggu, Uluwatu, Ubud and Seminyak.
- **Associations:** Bali Villa Association and PHRI Bali [PK].
- **Facebook groups** for Bali villa owners.
- **CSPs** that set up PT PMA villa companies (they can also resell).
- **Immigration outreach events** run by the Ngurah Rai, Denpasar and Singaraja offices.
- **Market size:** not verified. Pull BPS Bali accommodation counts and Airbnb listing counts before interviews.

**Risks:**  
- **Anti-automation.** APOA could add captcha or per-submission OTP, which would cancel out the pre-fill.
- **Data protection.** Storing passports falls under UU PDP 27/2022 [PK], which requires consent, minimal retention and encryption.
- **Competitors ship first.** Becik or a PMS could ship APOA automation before us.
- **Traveller-side reporting.** The government could shift stay reporting to travellers. Bali.live reports a new digital check-in system for foreign travellers; its content is unverified.
- **Price sensitivity.** Small homestays may not pay.

**Kill condition:**  
Drop the idea quickly if any of these turns out true:
- (a) APOA blocks pre-fill or requires an OTP for each submission.
- (b) Immigration publishes an API or bulk upload that the major PMSs adopt.
- (c) At least 5 of 10 villa-manager interviews say APOA takes under 1 hour/week or is not enforced.
- (d) Becik ships automated APOA and wins the villa-manager segment first.

**Score:** 6.5/10

| Criterion | Score |
|---|---|
| Pain | 6 |
| Frequency | 9 |
| Mandatory | 9 |
| Fragmentation | 6 |
| Competition | 7 |
| Gap | 7 |
| Buyer access | 8 |
| Willingness to pay | 5 |
| MVP simplicity | 5 |
| Distribution | 7 |

The average is 6.9; I took 0.4 off for integration risk and the chance the government replaces host reporting.

**Sources:**  
- [Ditjen Imigrasi: lodging managers must report foreign guests via APOA (ANTARA Papua)](https://papua.antaranews.com/berita/740385/ditjen-imigrasi-minta-pengelola-penginapan-wajib-laporkan-keberadaan-tamu-asing-lewat-apoa)
- [Imigrasi: Pengelola Penginapan Wajib Lapor Keberadaan Tamu Asing Lewat APOA (official, imigrasi.go.id)](https://imigrasi.go.id/berita/pengelola-penginapan-wajib-lapor-keberadaan-tamu-asing-lewat-apoa)
- [Same notice on Kanim Batam site](https://batam.imigrasi.go.id/category/berita-utama/pengelola-penginapan-wajib-lapor-keberadaan-tamu-asing-lewat-apoa)
- [Kompas, 27 Mar 2025: Ditjen Imigrasi launches APOA](https://biz.kompas.com/read/2025/03/27/214049628/ditjen-imigrasi-luncurkan-aplikasi-apoa-untuk-data-keberadaan-tamu-asing)
- [Bisnis.com, 26 Mar 2025: new rule on supervising foreigners / APOA](https://kabar24.bisnis.com/read/20250326/15/1864968/ada-aturan-baru-prabowo-bakal-awasi-gerak-gerik-orang-asing-di-ri)
- [APOA user guide for hotels (Kanim Yogyakarta, Sept 2025 PDF)](https://jogja.imigrasi.go.id/wp-content/uploads/2025/09/Panduan-Aplikasi-APOA-1.pdf)
- [Kanim Yogyakarta APOA page](https://jogja.imigrasi.go.id/aplikasi-pelaporan-orang-asing-apoa/)
- [Imigrasi Serang on X (2026 campaign: register, check-in, check-out online)](https://x.com/imigrasi_serang/status/2074384864774901811)
- [DPR research brief, May 2025 (foreigner supervision)](https://berkas.dpr.go.id/pusaka/files/isu_sepekan/Isu%20Sepekan---IV-PUSLIT-Mei-2025-193.pdf)
- [Imigrasi Pangkalpinang requires hotels to report foreigners (ANTARA Babel)](https://babel.antaranews.com/berita/444225/imigrasi-pangkalpinang-mewajibkan-hotel-laporkan-wna)
- [Bali Expat, 9 Jun 2025: accommodation providers required to report foreign guests](https://baliexpat.com/2025/06/09/accommodation-providers-required-to-report-foreign-guests/)
- [The Bali Sun: new Bali rules require all accommodations to report tourists to immigration](https://thebalisun.com/new-bali-rules-requires-all-accommodations-to-report-tourists-to-immigration/)
- [IndonesiaVisas: APOA explainer](https://indonesiavisas.id/immigration-news/apoa-indonesias-foreign-nationals-reporting-application/)
- [Becik, Bali villa management software features (competitor)](https://becikapp.com/features/)
- [ShortStayBali: villa management 2026, compliance claims](https://shortstaybali.com/best-villa-management-services-bali-2026/)
- [BaliVillaHub: do Bali villas require a passport copy at check-in?](https://www.balivillahub.com/blog/do-bali-villas-require-passport-copy-at-check-in)
- [Bali.live: Indonesia rolls out digital system for foreign visitors (risk to check)](https://bali.live/p/smile-youre-registered-indonesia-rolls-out-digital-system-for-foreign-visitors)
- [Airbnb: Hosting responsibly in Indonesia (PBJT up to 10%, monthly, local system)](https://fr.airbnb.be/e/ppap_indonesiahosting)
- [detikBali: Bapenda Badung targets villas disguised as residences](https://www.detik.com/bali/bisnis/d-6824801/bapenda-badung-incar-vila-berkedok-rumah-mewah-cegah-pajak-bocor)
- [DDTC News: local government will sweep villas posing as residences](https://news.ddtc.co.id/berita/daerah/1799613/kejar-pajak-daerah-ini-akan-sisir-vila-yang-berkedok-rumah-tinggal)
- [DDTC News: city maximises villa tax potential](https://news.ddtc.co.id/berita/daerah/1806779/tingkatkan-pendapatan-daerah-pemkot-maksimalkan-potensi-pajak-vila)
- [XPND: Bali PBJT compliance for foreign companies](https://xpnd.co.id/blogs/tax-compliance-bali-foreign-company-pbjt-entertainment/)

---

### Opportunity: Halal "stay-certified" desk: supplier halal evidence and change control for SME food producers and multi-outlet F&B (provisional)

**Industry:**  
- **Now:** food and beverage manufacturing (bakeries, frozen food, sauces, snacks), catering and central kitchens, and restaurant/café chains.
- **Later:** cosmetics and supplement makers as later halal phases come due.

**Buyer:**  
- The owner or QA lead acting as *Penyelia Halal* (halal supervisor) at a small or medium F&B producer handling 20–300 materials.
- The ops or QA manager at a restaurant or café chain with 3–50 outlets.
- **Channel:** halal consultants who manage many clients.

**Trigger / Why now:**  
- **Deadline [V].** Halal certification becomes mandatory for micro and small business F&B products from **18 Oct 2026**; the phase-in ends 17 Oct 2026. Medium and large businesses have been covered since 17 Oct 2024. The legal basis is UU 33/2014 and PP 42/2024. BPJPH told DPR the October 2026 deadline will be implemented as staged.
- **Next phases [V scope; PK dates].** Later phases cover cosmetics, herbal medicines, quasi-drugs and supplements, chemical products, raw materials/additives/processing aids, consumer goods and class-A medical devices. Dates vary by category.
- **Market fear [V].** Legal commentary (Oct 2025) warns that uncertified products may be treated as illegal after the deadline.

**Current workflow:** (PK; validate in interviews)  
1. The Penyelia Halal keeps an Excel *daftar bahan* (materials list): each material, its supplier, and the halal certificate number, issuer and expiry.
2. For each new supplier or material, they request the certificate, check it on BPJPH's lookup and file the PDF. Foreign halal certificates must be registered with BPJPH and carry expiry dates.
3. For any recipe, material or process change, they judge whether the certificate must change, then file a product addition or amendment in SIHALAL.
4. They keep purchase, training and internal-audit records for BPJPH supervision and audits by the halal inspection body (LPH).
5. Chains repeat this per outlet or central kitchen, and staff turnover breaks continuity.

**Pain:**  
- **Deadline [V].** The mandate is 13 days away as of this report.
- **Cohort size [V].** A large cohort of newly certified firms must keep records afterwards; Kementerian UMKM alone is funding free certification for 500,000 businesses.
- **Indefinite validity cuts both ways [PK].** Certificates stay valid indefinitely only while composition and process are unchanged. That turns upkeep into continuous change control.
- **Scattered documents [PK].** Supplier documents live in WhatsApp and email.
- **Not yet measured.** Hours spent and how often the file is touched are unverified.

**Existing solutions:** (PK unless noted)  
- **SIHALAL**, BPJPH's portal: registration and amendment only, not a maintenance tool.
- **LPH systems** for certification audits, such as LPPOM MUI's CEROL.
- **Halal consultants and self-declare facilitators (PPH)**, often free under government programmes [V that free programmes exist].
- **Excel / Google Sheets.**
- **Enterprise supplier-compliance suites** such as TraceGains and Trustwell FoodLogiQ. They are not localized and not linked to BPJPH.
- **General ERPs** such as Accurate and Odoo: no halal-evidence module out of the box (unverified).
- **Local halal-maintenance apps:** search incomplete. This must be checked before going further.

**The gap:**  
The limited search found no tool that does all of the following:
- checks supplier halal evidence against BPJPH records on an ongoing basis;
- flags expiring foreign or legacy MUI certificates;
- detects recipe or material changes that trigger a SIHALAL amendment;
- outputs an audit-ready SJPH file.

**Possible product:**  
- A materials register linked to recipes.
- A supplier link where each supplier uploads its certificate once.
- Expiry and "certificate does not cover this material" alerts.
- A change-impact check that pre-fills amendment packs for SIHALAL.
- An audit-binder export.
- **Later:** the reverse side, where an ingredient supplier sends one halal evidence pack to many customers.

**MVP:**  
- **Import:** materials and recipes from Excel.
- **Storage:** certificate fields plus a PDF vault, and a supplier upload link.
- **Alerts:** expiring or unknown certificate status, via WhatsApp or email.
- **Output:** a one-click "SJPH evidence binder" PDF.
- **Out of scope for v1:** SIHALAL integration.

**Pricing hypothesis:**  
- Rp250k–500k/month per production site (US$15–30).
- Rp1.5–4m/month for chains and central kitchens.
- A consultant plan at about Rp1m/month for 10 clients.

**How to find first customers:**  
- **BPJPH's public search of certified businesses**, filterable by region and category [PK].
- **Associations:** GAPMMI (food and beverage), APKRINDO (cafés and restaurants) and PHRI [PK].
- **Referrers:** Penyelia Halal training providers and LPH auditors.
- **University halal centres.**
- **Market size:** Indonesia has roughly 64m MSMEs [PK]. The paying segment is SME producers and chains on the regular (non-self-declare) route; that count is unverified.

**Risks:**  
- Low willingness to pay.
- Soft enforcement after the deadline, or another postponement; it was already pushed back once in 2024 [PK].
- BPJPH adds these features to SIHALAL, or LPHs and consultants bundle a free tool.
- The competitor check is incomplete.

**Kill condition:**  
Drop the idea quickly if any of these turns out true:
- (a) A local SJPH SaaS already serves SMEs for under Rp200k/month.
- (b) SIHALAL adds supplier-certificate validation and expiry alerts.
- (c) Interviews show certified SMEs open their halal file only for audits, fewer than 4 times a year.
- (d) The 17 Oct 2026 deadline is postponed again.

**Score:** 5.5/10 (provisional)

| Criterion | Score |
|---|---|
| Pain | 5 |
| Frequency | 6 |
| Mandatory | 9 |
| Fragmentation | 4 |
| Competition | 6 (unverified) |
| Gap | 6 |
| Buyer access | 7 |
| Willingness to pay | 4 |
| MVP simplicity | 8 |
| Distribution | 6 |

The average is 6.1; I took 0.6 off for the unverified competition and the risk of soft enforcement.

**Sources:**  
- [BPJPH: by 17 Oct 2026 micro/small F&B products must be halal-certified; foreign products](https://bpjph.halal.go.id/detail/bpjph-17-oktober-2026-produk-makanan-minuman-umk-harus-sudah-bersertifikat-halal-bagaimana-dengan-produk-luar-negeri/)
- [BPJPH: head urges halal compliance ahead of Oct 2026](https://bpjph.halal.go.id/read/sambut-wajib-halal-oktober-2026-kepala-bpjph-serukan-tertib-halal-sebagai-strategi-penguatan-bisnis)
- [BPJPH: hearing with DPR, Oct 2026 implementation per stages](https://bpjph.halal.go.id/read/raker-dengan-dpr-kepala-bpjph-pastikan-implementasi-wajib-halal-oktober-2026-sesuai-tahapan)
- [Gebrak.id: from 18 Oct 2026 restaurants and micro/small products must be halal-certified](https://www.gebrak.id/?p=52805)
- [UKM Indonesia: Wajib Halal Oktober 2026 explainer](https://ukmindonesia.id/baca-deskripsi-posts/wajib-halal-oktober-2026-kewajiban-sertifikasi-halal-segera-berlaku-untuk-usaha-mikro-dan-kecil-ini-yang-perlu-kamu-tahu)
- [SmartLegal, 14 Oct 2025: can uncertified products be deemed illegal?](https://smartlegal.id/perizinan/2025/10/14/benarkah-produk-tidak-memiliki-sertifikat-halal-bisa-dianggap-ilegal-sl-gt/)
- [Izin.co.id: BPJPH certification 2026, obligations, process, cost](https://izin.co.id/blog/sertifikat-halal-adalah/)
- [GNFI: Kementerian UMKM funds free halal certification for 500k businesses](https://www.goodnewsfromindonesia.id/network/content/kementerian-umkm-gratiskan-sertifikasi-halal-bagi-500-ribu-pelaku-usaha-JsM9GE)

---

### Opportunity: LKPM quarterly-report desk for corporate-service and accounting firms serving PT PMA (provisional; prior knowledge)

**Industry:**  
Corporate secretarial, accounting and tax consultancies serving foreign-owned PT PMA companies, including the many Bali villa and F&B PT PMAs.

**Buyer:**  
- The compliance manager or partner at a CSP or accounting firm handling 30–500 client entities.
- The finance manager at a mid-size PT PMA.

**Trigger / Why now:** (PK; not verified this session)  
- **New licensing regulation.** PP 28/2025 replaced PP 5/2021 on risk-based business licensing (OSS-RBA) in mid-2025, with new BKPM implementing rules.
- **LKPM still required.** It remains mandatory each quarter for medium and large businesses (every six months for small ones), reported per OSS "project" (business line × location).
- **Due now.** The Q3-2026 report is due around 10 Oct 2026.
- **Possibly more firms in scope.** The minimum paid-up capital for a PT PMA was reportedly lowered in 2025, which would bring more small foreign-owned companies into scope (verify).

**Current workflow:** (PK)  
1. The client sends a trial balance, fixed-asset list and headcount by Excel, email or WhatsApp.
2. Staff map accounts to LKPM categories: land, building, machinery, other fixed assets and working capital.
3. Staff compute cumulative realization and allocate it across each OSS project.
4. Staff log into each client's OSS account and re-type investment, manpower (Indonesian and foreign), production/sales and "problems faced".
5. Staff handle correction requests, archive receipts and chase the next quarter.

**Pain:** (PK)  
- The same data is re-entered for each project.
- Cumulative figures must stay consistent quarter to quarter.
- Sanctions escalate from written warnings to suspension or revocation of the business licence.
- CSPs bill per quarter for this, which shows it is routinely outsourced.

**Existing solutions:** (PK)  
- The OSS portal itself (manual entry).
- CSPs and accounting firms doing it by hand, e.g. InCorp/Cekindo and Emerhub.
- Accounting software (Accurate, Jurnal by Mekari, Xero) with no LKPM output (unverified).
- Excel templates.

**The gap:**  
No known tool turns accounting data into per-project, cumulative LKPM figures, reconciles them against the prior quarter, and pre-fills OSS across many client accounts.

**Possible product:**  
- A multi-client workspace with accounting import and reusable mapping templates.
- Per-project allocation and variance checks against the prior quarter.
- A browser extension that fills the OSS LKPM forms.
- A deadline calendar and receipt vault.

**MVP:**  
- An Excel-in, Excel-out mapping engine that produces a filled LKPM worksheet per project.
- Validation against the previous quarter.
- Staff still paste into OSS; the browser extension comes in v2.

**Pricing hypothesis:**  
Rp75k–150k per entity per quarter, or Rp1.5–5m/month per CSP.

**How to find first customers:**  
- CSPs in Jakarta and Bali, found through Google and Google Maps.
- The IKPI tax-consultant member directory [PK].
- Bali PT PMA set-up agencies.
- LinkedIn.
- **Market size:** unverified; BKPM publishes quarterly realization statistics.

**Risks:**  
- OSS adds anti-automation measures.
- OSS pre-populates LKPM from Coretax or financial-statement data.
- Low value per entity.
- CSPs keep using internal spreadsheets.

**Kill condition:**  
Drop the idea quickly if any of these turns out true:
- (a) LKPM under PP 28/2025 is auto-filled or simplified.
- (b) CSP interviews show it takes under 30 minutes per entity per quarter.
- (c) OSS blocks extension pre-fill.

**Score:** 5.5/10 (provisional; based entirely on prior knowledge)

| Criterion | Score |
|---|---|
| Pain | 6 |
| Frequency | 6 |
| Mandatory | 9 |
| Fragmentation | 6 |
| Competition | 7 |
| Gap | 7 |
| Buyer access | 7 |
| Willingness to pay | 5 |
| MVP simplicity | 5 |
| Distribution | 6 |

The average is 6.4; I took about 1 point off because nothing here was verified this session.

**Sources:**  
- No URLs were verified this session, because the search budget was exhausted.
- These official portals come from prior knowledge and were not fetched: OSS (https://oss.go.id) and BKPM/Kementerian Investasi (https://www.bkpm.go.id).
- Confirm against PP 28/2025 on peraturan.bpk.go.id before relying on any of this.

---

## Rejected after competitor research

1. **Notary/PPAT monthly multi-agency reports** (KPP tax, BPN land and Bapenda; e-BPHTB).
   - **The pain is real [V]:**
     - PPATs must report monthly. Formats are due by the 10th; the KPP report falls under PMK 261/2016, and one source gives a 20-day deadline.
     - DJP found many notaries and PPATs who do not report to the KPP every month.
     - KPP Pratama Singaraja now accepts the monthly report as a spreadsheet sent by email.
     - Each regency runs its own e-BPHTB system (for example Bekasi's "Sisvalen", Batu and Surakarta), with PDF upload of monthly reports. There is also BPN's Mitra Kerja and DJP's e-PHTB.
   - **Killed by** an already crowded local market [V]:
     - **Notaris App:** automatic notary and PPAT monthly reports including tax data; Starter Rp199k/month, Pro Rp499k/month.
     - **Notaree:** Rp299k–999k/month.
     - **Sinotis Fusion:** Rp2.5m licence; its monthly report is auto-split by KPP region.
     - **ScribaeBook:** Rp1.5–2.3m.
     - **Others:** Notarius, Starfield, xsatriya, and the open-source Sinotaris on GitHub.
   - **What is left:** submitting into about 500 different regency e-BPHTB portals. That is only worth doing as an add-on with an existing notary app, given price points of Rp199k–999k/month.
2. **SIPNAP pharmacy narcotics/psychotropics report.**
   - The requirement is verified: a monthly online report, imported before the 10th of the following month [V].
   - **Killed (provisionally) by** pharmacy POS/inventory systems that export SIPNAP files, e.g. VMedis [PK; verify].
   - The remaining gap is too thin to justify a standalone product.
3. **Coretax wrappers** (e-Faktur, e-Bupot, returns since the Jan 2025 Coretax launch).
   - **Killed by** licensed PJAP incumbents OnlinePajak, Pajakku and Klikpajak (Mekari), plus accounting suites with tax modules [PK].

## Too competitive

- **Notary/PPAT practice software**: see the vendor list above [V].
- **Payroll, PPh 21 (TER method) and BPJS**: Mekari Talenta, Gadjian and many HRIS products [PK].
- **SATUSEHAT integration for clinics**: many SIMRS/clinic vendors already advertise bridging [PK].
- **EUDR traceability for coffee, cocoa and palm**: Koltiva (KoltiTrace), Satelligence and others, plus Indonesia's national commodity dashboard. The EU timeline has slipped as well [PK].

## Attractive problem, poor distribution

- **B3 hazardous waste for small generators** (clinics, auto workshops, labs) [PK]:
  - The work is Festronik e-manifests, B3 logbooks/balances and SIMPEL periodic reports.
  - Licensed transporters own the customer relationship and often prepare the manifests, and willingness to pay is low.
  - The only plausible channel is selling through transporters.
- **Halal for micro, self-declare businesses**: the state pays for certification (500k-business programme) [V], so there is effectively no willingness to pay.
- **e-Katalog v6 product listings for government vendors**: consultant-driven, with no vendor API [PK].
- **ISPO/EUDR smallholder documentation**: the buyers are cooperatives funded by mills or NGOs, with little budget [PK].
- **EU catch certificates (CATCH IT, from 10 Jan 2026)**: validation runs through KKP; exporters are few and enterprise-like [PK].

## Verify next, if this track continues

1. Read the APOA user guide PDF: confirm there is no bulk upload or API, and check for captcha or OTP.
2. Check whether Becik has shipped APOA automation, and whether Chekin, Hostaway or Guesty support Indonesia.
3. Search "aplikasi SJPH" / "software penyelia halal", and check whether BPJPH's certificate lookup can be queried by software.
4. Confirm LKPM rules under PP 28/2025 (reporting period, per-project filing, sanctions) and real CSP fees.
5. Confirm VMedis and other pharmacy POS systems export SIPNAP files.
