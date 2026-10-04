# Vietnam: Indie-Hacker Opportunity Research

*Research date: 2026-10-04. Track: Vietnam (Asia / Emerging Markets).*

## Research limitations (read first)

- **Search budget:** about 20 WebSearch calls ran before the shared session cap of 200 searches was hit, twice.
- **WebFetch:** blocked by the egress policy on every domain tried. That includes thuvienphapluat.vn, luatvietnam.vn, hethongphapluat.com, luatvietan.vn, trungtamwto.vn, vasep.com.vn, mae.gov.vn, news.tuoitre.vn, seafoodsource.com, fisheries.noaa.gov, federalregister.gov and wikipedia.org. No primary legal text was read in full. All evidence comes from search-result snippets and summaries.
- **Evidence tags used below:**
  - **[S]** means sourced in this session. The URL is listed.
  - **[B]** means background knowledge from model training data, up to mid-2026. It was not re-verified this session, so treat it as unverified.
  - No URLs were invented. Every URL below appeared in a search result this session.
- **Consequence:** competitor diligence is thinner than the brief requires. All scores are provisional. A follow-up pass with a working search budget should verify the [B] items before any customer interviews.

---

## 1. Industries screened

| # | Industry | Workflow looked at | Evidence | Verdict | One-line reason |
|---|---|---|---|---|---|
| 1 | Gold & jewelry shops | AML KYC and large-transaction reports; ≥20M VND/day bank-transfer rule (Decree 232/2025); per-transaction e-invoices | [S] | **Shortlisted (Opp 1)** | POS and e-invoice tools are crowded, but the AML/KYC and transfer-matching layer looks unserved. The press reports that almost 100% of gold businesses risk AML violations. |
| 2 | Seafood processors / exporters | Per-shipment catch documents: EU IUU S/C and C/C, US COA under Circular 74/2025 (MMPA), US SIMP data | [S] | **Shortlisted (Opp 2), downgraded** | Per-lot, mandatory and painful. However, the government eCDT system is now mandatory and the MMPA crab ban was resolved in May 2026. |
| 3 | Fruit (durian) packing houses / exporters to China | Per-lot planting-area and packing-house codes, cadmium and Auramine O test certificates, traceability | [S] | **Shortlisted (Opp 3), weak** | Strong per-lot pattern, but MAE is piloting a national durian traceability system in 2026. |
| 4 | Household businesses (retail/F&B) | Presumptive tax abolished 1/1/2026; self-declaration; cash-register e-invoices at ≥1bn VND revenue | [S] | Too competitive | MISA eShop/meInvoice, Bizzi, Sapo and KiotViet-type POS, plus free GDT tools. ARPU is very low. |
| 5 | Packaging / consumer-goods producers & importers | EPR annual registration, recycling plan, Fund contribution (Decree 05/2025) | [S] | Rejected | Packaging revenue under 30bn VND/yr is exempt, so most SMEs are out of scope. The task is annual and consultants already do it. |
| 6 | Manufacturers / hazardous-waste generators | Environmental reports, hazardous-waste handling (Circular 07/2025 amending 02/2022) | [S] partial | Not pursued | The amendments are mostly procedural. Reporting is annual and handled by consultants and licensed waste firms. No e-manifest mandate was found. |
| 7 | Fire-safety (PCCC) contractors & managed facilities | PCCC dossiers; declaring and updating data in the police PCCC database (Decree 105/2025); alarm-transmission connection by 1/7/2027 | [S] | Poor distribution | The police own the system of record (no third-party API was found). The compliance path is hardware-heavy, and contractors are fragmented with low willingness to pay. |
| 8 | Steel / fastener exporters to EU | CBAM embedded-emissions data (definitive period from 1/1/2026) | [B] | Too competitive / enterprise | Many CBAM SaaS tools and certification bodies. The exporters are mostly large firms. |
| 9 | Coffee / rubber / wood exporters | EUDR geolocation due diligence (application reported as 30/12/2026 for large/medium, 30/6/2027 for micro/small) | [B] | Too competitive | Crowded EUDR tooling, government traceability work, and large exporters building in-house. |
| 10 | Private clinics | EMR deadline (Circular 13/2025/TT-BYT, clinics reportedly by 31/12/2026); health-insurance (BHYT) XML export | [B] | Too competitive (unverified) | Crowded HIS and clinic software market. Not verified (budget). |
| 11 | Notary offices | Law on Notarization 2024 (effective 1/7/2025), e-notarization, provincial notarial databases | [B] | Unscreened lead | The search failed (budget). Possible provincial fragmentation is worth a later look. |

---

## 2. Opportunities

### Opportunity 1: Gold-shop AML and transfer-compliance layer

**Industry:**
Gold, silver and jewelry trading. This covers enterprises and household gold shops that buy and sell jewelry and gold.

**Buyer:**
The owner or compliance and accounting lead at a gold trading enterprise or a multi-branch gold shop. Single-store household shops are a secondary market. A third channel is accounting firms or tax agents that serve gold shops.

**Trigger / Why now:**
Several 2025–2026 obligations now stack up on the same transaction:
- **Bank-transfer rule.** Decree 232/2025 (Point 10, Article 4) requires gold trades of ≥20 million VND per day from one customer to go through bank payment accounts. [S]
- **Per-transaction invoices.** Tax authorities now demand an e-invoice for every gold transaction. Under Decree 70/2025 (effective 1/6/2025), cash-register e-invoices are required at ≥1bn VND annual revenue. [S]
- **AML reporting.** Precious-metal and gemstone dealers are AML reporting entities. Transactions of ≥400 million VND must be reported to the State Bank. [S]
- **Compliance gap.** Thời báo Tài chính reports that AML rules are out of step with practice. Verifying a seller's income or occupation is not feasible, so "almost 100%" of gold businesses could be in violation. [S]
- **Household tax change.** Household gold shops also lose presumptive tax from 1/1/2026. [S]

**Current workflow:**
1. A customer buys or sells gold over the counter.
2. Staff ring up the sale in the POS, which issues the e-invoice.
3. When the transaction is ≥20M VND per day per customer, staff must ensure the payment arrives from the customer's own bank account. In practice they check a transfer screenshot or app notification by hand.
4. For large or suspicious transactions, staff photocopy or scan the customer's ID and write notes. Required KYC fields, such as occupation and source of funds, are often left out.
5. Large-value transaction reports to the State Bank's AML Department are compiled manually, if they are filed at all. Daily aggregation per customer across branches is done in Excel or not done.

**Pain:**
- The press quotes the industry view that near-universal non-compliance is likely.
- Gold shops have been a 2025 tax-enforcement target.
- A missed per-customer daily aggregation breaks both the 20M bank-transfer rule and AML reporting.
- Sources: [S] thoibaotaichinhvietnam, vietnamfinance, MISA eShop summary of Decree 232.

**Existing solutions:**
- **Gold-shop POS and e-invoicing** [S]: MISA eShop, Sapo (gold/silver store management), ACMan Shop with AC-Invoice, and TH-APP gold-sales software. MISA itself publishes a "Top 13" list of gold-shop software with cash-register e-invoicing.
- **Bank AML systems:** these are for banks, not dealers. [B]
- **Law firms and consultants:** they write the internal AML rules. [B]

**The gap:**
The POS vendors compete on pricing, inventory, gold-price feeds and e-invoices. None of the search results showed any of them offering:
- per-customer daily aggregation across branches against the 20M threshold;
- matching each sale to an incoming bank transfer from the customer's own account;
- a KYC capture checklist (ID chip/QR scan, occupation, source of funds);
- a register and export for ≥400M VND large-transaction reports;
- an audit pack for the State Bank or police.

This was not fully verified. Absence from search snippets is weak evidence.

**Possible product:**
A compliance add-on that sits beside the existing gold POS. It works in four steps:
1. Ingest sales, by POS export or by reading e-invoice data.
2. Ingest bank-account notifications or statements.
3. Match each sale to its payment and flag sales that should have been paid by transfer.
4. Run KYC capture at the counter and produce AML reports and an audit trail.

**MVP:**
A web or tablet app for one shop. It has five parts:
- ID QR/chip scan with KYC fields;
- a per-customer daily total with a ≥20M alert;
- CSV import of the bank statement with auto-matching;
- a ≥400M register with report export;
- an internal AML policy template.

**Pricing hypothesis:**
- 500k–1.5M VND/month (~$20–60) per store;
- 3–5M VND/month (~$120–200) for multi-branch enterprises.
- This is an estimate.

**How to find first customers:**
- Provincial gold, silver and gemstone associations, and the Vietnam Gold Business Association. [B]
- State Bank licensing lists of gold-bar trading enterprises. [B]
- The tax authority's gold-shop invoice campaigns, which create urgency in each province.
- The gold-shop POS vendors listed above, approached as a channel or as integration partners.

**Risks:**
- The market size is unverified. The number of gold businesses was not found.
- Shop owners may prefer non-compliance to tooling.
- MISA or Sapo could add the feature quickly.
- AML rules for dealers may be relaxed after industry complaints.
- Bank-statement access is likely CSV or manual. Open-banking APIs are limited. [B]

**Kill condition:**
- Interviews show that shops never file AML reports and inspectors never check, so there are no consequences; or
- a dominant gold POS already ships transfer matching and KYC.

**Score:** 6/10 (provisional; market size and competitor feature diligence incomplete)

**Sources:**
- https://thoibaotaichinhvietnam.vn/quy-dinh-phong-chong-rua-tien-venh-thuc-te-hau-het-doanh-nghiep-kinh-doanh-vang-doi-mat-rui-ro-vi-pham-196110.html
- https://vietnamfinance.vn/co-quan-thue-yeu-cau-tiem-vang-xuat-hoa-don-dien-tu-cho-tung-giao-dich-d145686.html
- https://vneconomy.vn/chan-nguy-co-rua-tien-trong-giao-dich-vang.htm
- https://vietnamfinance.vn/giao-dich-tu-400-trieu-dong-tro-len-phai-bao-cao-ngan-hang-nha-nuoc-d95626.html
- https://www.misaeshop.vn/?p=13332 (MISA: "Top 13" gold-shop software with cash-register e-invoicing)
- https://www.sapo.vn/blog/phan-mem-quan-ly-cua-hang-vang-bac
- https://acman.vn/hoa-don-dien-tu-tu-may-tinh-tien-cua-hang-vang.html
- https://www.trangvangvietnam.com/sp/66939/phan-mem-quan-ly-ban-vang.html (TH-APP)
- https://pbgdpl.cantho.gov.vn/quy-dinh-ve-hoa-don-dien-tu-khoi-tao-tu-may-tinh-tien

---

### Opportunity 2: Seafood export-lot catch-document ledger (EU IUU + US COA/SIMP + Japan)

**Industry:**
Seafood processors and exporters handling wild-caught species such as tuna, squid, octopus, crab and mackerel.

**Buyer:**
The documentation/QA manager or export-documents team at a mid-size seafood processor.

**Trigger / Why now:**
- **US COA.** Circular 74/2025/TT-BNNMT, issued 26/12/2025, created a per-shipment Certificate of Admissibility for US exports under the MMPA. [S]
- **Paper-only submission.** In practice the COA dossiers were accepted only on paper at one-stop desks, even though the circular allows online filing. Shipments sat at US ports without a COA, and January 2026 tuna exports to the US fell about 14%. [S]
- **Rules in flux.** The government said it will amend two circulars to remove the bottlenecks. [S]
- **US ban mostly resolved.** On 11/5/2026 NOAA granted Vietnam's swimming-crab fisheries a comparability finding, valid to 31/12/2029. A COA is still needed when raw material comes from other origins. [S]
- **Mandatory eCDT.** Provinces made the government eCDT system mandatory for vessels from 1/1/2026, with landing receipts in eCDT from 1/3/2026. [S]
- **Durable obligations.** The EU IUU "yellow card" (since 2017) and Japan's catch certificates for squid and mackerel remain. [B]

**Current workflow:**
1. Raw material is landed at ports. Landing receipts and S/C raw-material confirmations are issued, increasingly in eCDT.
2. The plant processes lots and applies yield conversion. Raw material from several vessels and from imports is mixed.
3. For each export shipment, staff assemble a dossier:
   - EU catch certificate with deduction ("trừ lùi") of quantities against S/Cs;
   - US COA with gear and origin evidence;
   - SIMP harvest data for the US importer;
   - processing statements for imported raw material.
4. They submit to the regional fisheries authority, often on paper, and fix any rejections.
5. They send the harvest data to buyers in Excel.

**Pain:**
- Customs delays and stuck containers.
- A paper-only channel.
- Changing forms.
- Mass-balance errors across S/Cs and yields.
- Evidence [S]: congthuong, doanhnghiephoinhap and bnews reports on the COA bottleneck; nongnghiepmoitruong on falling US exports.

**Existing solutions:**
- **Government eCDT** (free, now mandatory). It covers vessel, port and authority-side documents. [S]
- **Generic ERPs and Excel.** [B]
- **Seafood traceability vendors** such as Trace Register, Wholechain and TraceVerified. These focus on chain-of-custody or buyer-side traceability. [B, except TraceVerified S]
- **VASEP support and freight/customs brokers.** [B]

**The gap:**
eCDT handles the authority's issuance chain. It likely does not handle the exporter-side work:
- a multi-market lot ledger (raw S/C → yields → finished lots → shipments);
- a remaining balance per S/C;
- processing statements for imported raw material;
- generating COA, EU and Japan dossiers plus SIMP CSVs from one record.

This is unverified. eCDT may already cover processor modules, and Hà Tĩnh says processors must register in it.

**Possible product:**
"One lot ledger → every market's catch documents." It is a processor-side mass-balance ledger that generates per-shipment dossiers for the EU, the US, Japan and buyer audits. It would import landing data from eCDT exports where possible.

**MVP:**
A spreadsheet-replacement web app covering:
- S/C and raw-material intake;
- yield factors;
- shipment allocation with a balance check;
- auto-filled dossiers for EU C/C requests and the Circular 74 COA;
- a SIMP data CSV.

**Pricing hypothesis:**
- $300–600/month per plant, or about $10–20 per shipment dossier.
- This is an estimate. A single delayed container can cost hundreds of USD.

**How to find first customers:**
- The VASEP member directory.
- The EU list of approved Vietnamese establishments (public TRACES lists). [B]
- The list of COA applicants at regional fisheries offices.
- Tuna and squid exporters in Khánh Hòa, Bình Định and Kiên Giang. [B]

**Risks:**
- eCDT expands to cover processor needs.
- The COA requirement shrinks after NOAA's May 2026 finding.
- The buyer base is small, probably low hundreds (estimate).
- Large processors have in-house ERPs.

**Kill condition:**
- eCDT already supports processor lot allocation and dossier generation; or
- fewer than about 150 exporters handle wild-caught product for regulated markets; or
- authorities refuse system-generated dossiers.

**Score:** 5/10

**Sources:**
- https://vasep.com.vn/bo-nong-nghiep-va-moi-truong/thong-tu-74-2025-tt-bnnmt-quy-dinh-chung-nhan-thuy-san-san-pham-thuy-san-xuat-khau-vao-thi-truong-hoa-ky-3473.html
- https://congthuong.vn/khan-truong-go-kho-cho-xuat-khau-thuy-san-sang-hoa-ky-441759.html
- https://doanhnghiephoinhap.vn/go-diem-nghen-coa-khan-truong-thao-kho-cho-xuat-khau-thuy-san-sang-hoa-ky-127219.html
- https://bnews.vn/go-vuong-thu-tuc-xuat-khau-thuy-san-sang-hoa-ky/407126.html
- https://baomoi.com/se-sua-2-thong-tu-de-go-vuong-xuat-khau-thuy-san-c55265124.epi
- https://nongnghiepmoitruong.vn/xuat-khau-thuy-san-sang-my-giam-do-tac-dong-tu-mmpa-d796240.html
- https://vnbusiness.vn/my-siet-mmpa-coa-va-thue-chong-ban-pha-gia-xuat-khau-thuy-san-doi-mat-con-gio-nguoc-lon.html
- https://vietnamnews.vn/economy/1781295/vietnamese-swimming-crab-exports-retain-access-to-us.html
- https://seafood.vasep.com.vn/amp/vietnam-s-swimming-crab-fisheries-recognized-as-comparable-under-the-us-mmpa-36770.html
- https://hatinh.gov.vn/vi/bai-viet/ha-tinh-trien-khai-bat-buoc-kiem-soat-tau-ca-qua-he-thong-ecdt-tu-dau-nam-2026
- https://hatinh.gov.vn/vi/bai-viet/ha-tinh-tang-toc-trien-khai-phan-mem-truy-xuat-nguon-goc-thuy-san-ecdt

---

### Opportunity 3: Durian packing-house export-lot dossier (China)

**Industry:**
Fruit packing houses and exporters, starting with durian sold to China.

**Buyer:**
The owner or QA lead at a packing facility that holds a GACC-registered packing-house code. A secondary buyer is the export trading company that consolidates lots.

**Trigger / Why now:**
- **Per-lot testing.** China requires cadmium and Auramine O testing on Vietnamese durian. Recognised labs are a bottleneck: by early May 2026, 16 of 21 cadmium labs were operating. [S]
- **New testing jam.** MAE issued urgent directives in mid-2026 when testing jammed again. [S]
- **Traceability for all farm produce.** From 2026 all agricultural products must be traceable. [S]
- **Government pilot.** MAE is piloting a national traceability system for durian in H1 2026 and plans to expand it from 1/7/2026. [S]
- **Weak code oversight.** Only 40.8% of planting areas and 17% of packing houses were monitored after their codes were issued. [S]

**Current workflow:**
1. Packers buy fruit from several planting areas, each with its own planting-area code. Codes are sometimes "borrowed" from other farms.
2. They sample each lot and send it to a recognised lab, then wait for the test certificate.
3. They compile the planting-area codes, packing-house code, test certificate and phytosanitary certificate per container.
4. They answer buyer and border queries. Codes are revoked for violations.

**Pain:**
- Rejected or returned containers.
- Lab queues.
- Suspension of codes.
- Evidence [S]: trungtamwto, diendandoanhnghiep and thuehaiquan articles on testing jams and code fraud.

**Existing solutions:**
- **MAE national traceability pilot** (government, free). [S]
- **TraceVerified.** [S]
- **QR-label traceability vendors** such as iCheck and VNPT Check. [B]
- **Excel and Zalo groups.** [B]

**The gap:**
The government system targets farm-to-label traceability and QR codes for regulators and consumers. The packer's operational need is different:
- receiving-to-lot mapping across multiple planting codes;
- tracking lab samples and certificates per lot;
- warnings before code misuse;
- a per-container document pack.

This gap may close as the national system expands.

**Possible product:**
A packing-house lot ledger. It links each intake to its planting-area code, tracks lab samples and results, blocks shipment without a valid certificate, and prints the container dossier. It would feed the national system.

**MVP:**
A mobile intake form with planting-code validation, a lab-sample tracker, and a container PDF pack.

**Pricing hypothesis:**
- 1–3M VND/month (~$40–120) per packing house.
- Seasonal, so revenue is weighted to harvest months.
- This is an estimate.

**How to find first customers:**
- The packing-house code lists. About 1,588 packing-house codes and 6,883 planting-area codes had been issued nationally; the date of these figures is unclear. [S]
- GACC's public registrations. [B]
- The Vietnam Fruit and Vegetables Association (Vinafruit).

**Risks:**
- The government system becomes mandatory and covers packer workflows. This is high risk.
- Seasonality.
- Low willingness to pay among informal operators.
- China's rules change often.

**Kill condition:**
- MAE's national system includes packer intake and lab tracking for free, with mandatory use; or
- packers say the lab queue, not documentation, is the only pain.

**Score:** 4/10

**Sources:**
- https://trungtamwto.vn/chuyen-de/32375-sau-rieng-xuat-khau-lai-bi-ach-tac-kiem-nghiem-bo-nong-nghiep-va-moi-truong-chi-dao-nong
- https://tuoitre.vn/du-luong-cadimi.html
- https://diendandoanhnghiep.vn/sau-rieng-ket-dau-ra-vi-cadimi-thu-truong-bo-nong-nghiep-va-moi-truong-noi-gi-10178496.html
- https://thuehaiquan.tapchikinhtetaichinh.vn/go-nut-that-kiem-nghiem-cac-tinh-phia-nam-cuu-dau-ra-cho-sau-rieng-xuat-khau-155472.html
- https://thoibaotaichinhvietnam.vn/siet-chat-quan-ly-ma-so-vung-trong-thuc-day-xuat-khau-nong-san-ben-vung-134641.html
- https://bbw.vn/thi-diem-truy-xuat-nguon-goc-nong-san-dau-tien-la-qua-sau-rieng-55705.html
- https://vneconomy.vn/truy-xuat-nguon-goc-dien-tu-doanh-nghiep-dang-manh-me-hoi-nhap.htm
- https://scandasia.com/10838-danida-supports-electronic-traceability-system-for-vietnamese-food-exporters/

---

## 3. Rejected after competitor research

**Household-business tax self-declaration (from 1/1/2026).**
- About 5 million household businesses move from presumptive tax to declaration.
- Cash-register e-invoices are required at ≥1bn VND annual revenue; households at or below 1bn VND are reported as exempt from VAT and PIT.
- Killed by **MISA (eShop, meInvoice)**, **Bizzi**, POS vendors such as Sapo and KiotViet [B], and free GDT tools. ARPU is tiny.
- One sub-niche remains untested: multi-client filing for tax agents, plus reconciliation of e-commerce platform-withheld tax (Decree 117/2025 [B]).
- Sources:
  - https://thoibaotaichinhvietnam.vn/five-million-household-businesses-to-adopt-self-declared-tax-system-188612.html
  - https://vietnamnews.vn/economy/1717654/abolishing-presumptive-tax-ensures-greater-fairness-and-transparency-experts.html
  - https://voh.com.vn/kinh-te/tu-112026-chinh-thuc-bo-thue-khoan-chuyen-sang-ke-khai-thue-642709.html
  - https://bizzi.vn/en/business-tax-write-off/
  - https://www.misaeshop.vn/29617/loi-ich-ho-kinh-doanh-chuyen-tu-thue-khoan-sang-ke-khai/

**Gold-shop e-invoicing / POS.**
- Killed by MISA eShop, Sapo, ACMan/AC-Invoice, TH-APP and others. MISA lists 13 tools.
- Only the AML and transfer-matching layer survives, as Opportunity 1.

**EPR packaging and product reporting (Decree 05/2025).**
- Packaging revenue under 30bn VND/yr is exempt, the filing is annual (by 31 March), and most firms simply pay the Fund contribution.
- Consultants and the industry PRO cover the rest, so this is not an SME software market.
- Sources:
  - https://vietnamfinance.vn/doanh-thu-ban-san-pham-bao-bi-duoi-30-ty-nam-duoc-loai-tru-trach-nhiem-epr-d124196.html
  - https://vietnamnews.vn/economy/1694613/enterprises-strengthen-environmental-responsibility-through-epr-implementation.html
  - https://kpmg.com/vn/vi/home/phan-tich-chuyen-sau/2025/02/key-amendments-to-vietnam-environment-protection-regulations.html

## 4. Attractive problem, poor distribution

**Fire safety (PCCC) under the 2024 Fire Law and Decree 105/2025 (effective 1/7/2025).**
- Facilities must keep PCCC dossiers and declare and update data in the police PCCC database.
- They must connect fire-alarm transmission devices to it by 1/7/2027.
- There are periodic reports on fire equipment and maintenance minutes from contractors.
- Why distribution is poor:
  - the system of record is police-owned, with no third-party API found;
  - the compliance path is hardware-led;
  - contractors are fragmented and price-sensitive.
- Sources:
  - https://hoatieu.vn/phap-luat/nghi-dinh-105-2025-nd-cp-232154
  - https://lsvn.vn/lo-trinh-xu-ly-doi-voi-cac-co-so-khong-bao-dam-yeu-cau-ve-phong-chay-chua-chay-a158204.html
  - https://thietbipcccbinhduong.com/bien-ban-nghiem-thu-bao-tri-pccc/

**Seafood COA (part of Opportunity 2).** The pain is acute, but there are only a few hundred exporters and the state system (eCDT) is expanding.

## 5. Too competitive (mostly [B], not re-verified)

- **CBAM for steel and fastener exporters:** many CBAM SaaS tools and certification bodies; enterprise buyers.
- **EUDR for coffee, rubber and wood:** crowded EUDR platforms plus government and large-exporter in-house systems.
- **Clinic EMR (Circular 13/2025/TT-BYT) and BHYT XML export:** many HIS and clinic vendors.
- **Pharmacy drug-database and e-prescription connection:** pharmacy POS vendors already integrate.

## 6. Unscreened leads for a follow-up pass

- **Notary offices:** Law on Notarization 2024, e-notarization, provincial databases.
- **Multi-client household-tax filing for tax agents**, including reconciliation of platform-withheld tax.
- **Number of gold businesses:** needed to size Opportunity 1.
