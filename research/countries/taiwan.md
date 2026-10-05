# Taiwan: Country Research

Research date: 2026-10-05. 16 WebSearch calls, in Traditional Chinese and English. WebFetch and GitHub tools were not used.

**Accessibility:** Taiwan is open. There are no sanctions on software sales, card and bank payment rails are normal, and the internet is unrestricted. One practical barrier matters for several ideas below: most government portals (fire, waste, labour) require a logged-in **citizen digital certificate (自然人憑證)** or a **business certificate (工商憑證)** read from a smart card. That makes fully automated submission hard for a foreign vendor. Plan for "prepare the data and file, the human uploads" before any direct integration. All sales and UX must be in Traditional Chinese.

**Bottom line:** Taiwan's government digitised most mandatory workflows early (national e-filing systems for fire inspection, waste, food traceability, long-term care billing and foreign-worker applications). As a result, the gaps are rarely "paper to digital". They are "my system to the government system" (data conversion, code mapping and exceptions). Wherever money is obvious, such as carbon accounting or long-term care, listed Taiwanese IT firms or funded startups are already present. No idea below reaches the brief's "build" bar. Two are worth customer interviews: the food-traceability upload bridge and the renovation-waste flow-reporting tool.

---

## Industries screened

| Industry | Workflow examined | Verdict | One-line reason |
|---|---|---|---|
| Food manufacturers / importers | Mandatory upload of in/out/recipe data to TFDA "非追不可" (FTracebook) | **Opportunity (interview)** | Firms must extract data from their ERP, convert units and map it to system codes, then batch-import Excel. This is the "human as integration layer" pattern exactly. |
| Renovation / C&D waste haulers | Per-trip declaration on the "營建及裝修廢棄物流向管理平台" before the truck leaves; nationwide from 2026-07-01 | **Opportunity (interview)** | New mandatory per-job task with fines up to NT$3m. Small operators are affected. The government platform is the main substitute. |
| Fire-safety inspection firms (消防設備師/士) | Field inspection checklists, then the national 審勘及檢修申報系統 | **Weak opportunity** | Recurring and mandatory, and the reports are system-generated. Data is still re-keyed from the field, but smart-card login and a free government system limit the upside. |
| Steel / fastener exporters | EU CBAM embedded-emissions data packs for EU importers | **Weak opportunity** | About 2,600 Taiwanese firms are affected, but a 50 t importer threshold, a free MOENV service platform and many consultants shrink the gap. |
| Pest control (病媒防治業) | Application and pesticide-use records, then regulator reporting | **Weak opportunity** | Mandatory, but the market is small and the reporting format and frequency could not be fully verified. |
| Corporate carbon / GHG inventory | Scope 1–2 inventory for listed firms and their SME suppliers | **Too competitive** | 精誠, 叡揚, 倍力 and 東捷 all sell carbon platforms, and SAP serves large firms. |
| Long-term care home-service units | Service records and billing upload to the MOHW care-management platform | **Too competitive** | Jubo (Smart Ageing Tech) and apps such as 諾亞克居服 already cover scheduling and records. The government platform runs automated claim review. |
| Migrant-worker broker agencies | Permits, renewals, health checks, residence permits | **Rejected (insufficient gap evidence)** | MOL runs a free 24-hour online application system plus an employer app. I could not verify the vendor landscape, and the gap is unclear. |
| Industrial waste generators (事業廢棄物) | Monthly operating and waste reports in the MOENV system | **Rejected for now** | Long-established system served by environmental consultants. I found no 2025–26 trigger beyond the renovation-waste rule. |

---

## Opportunities

### Opportunity: "非追不可" ERP-to-FTracebook upload bridge

**Industry:**
Food manufacturing, importing and distribution (designated categories)

**Buyer:**
QA or regulatory officer, or office manager, at food manufacturers and importers in TFDA-designated categories. These are typically factory-registered firms that already run an ERP or spreadsheet inventory.

**Trigger / Why now:**
MOHW/TFDA keeps adding food categories that must (a) build a traceability system, (b) upload electronically to 非追不可 and (c) use e-invoices. Recently added categories include importers of frozen, chilled, dried and pickled plant products and plant-protein products. Also added are other food manufacturers with factory registration and capital of NT$30m or more, and chain lunch-box sellers. Fines run NT$30k–3m, up to suspension of the business. *The effective date of the latest batch was not verified; check the MOHW announcement.*

**Current workflow:**
1. Export purchases, sales, production and recipe data from the ERP (or an Excel ledger).
2. Convert units by hand, for example everything into kg, and translate free-text item, supplier and customer names into FTracebook system codes. Each field's code has to be looked up in advance.
3. Edit the result in the TFDA Excel template and batch-import it.
4. Fix rejected rows and repeat on every reporting cycle.

**Pain:**
Industry press describes this exact extract → convert → code-map → Excel → batch-import process. Most firms use an ERP, but the data still has to be "transformed" before upload (foodnext). The penalties are severe and the obligation recurs on every reporting cycle.

**Existing solutions:**
- Free TFDA Excel batch-import template
- In-house IT or manual staff
- General ERP vendors (whether 鼎新, 正航 and others ship a 非追不可 export module is **unverified**)
- Food-safety consultants

**The gap:**
A persistent mapping layer: remember "our item, supplier and unit" against "FTracebook code and kg factor", validate rows before upload, and diff each period's changes. It would sit between any ERP export and the government template. A direct API or web-service interface for the government system is **unverified**. If one exists, the product becomes a connector. If not, it produces a validated import file.

**Possible product:**
Upload an ERP or Excel export. The tool auto-maps it using saved mappings, flags new or unknown items, converts units and outputs a clean FTracebook import file plus an error report. It also keeps a period-by-period audit log.

**MVP:**
A CSV-in, FTracebook-Excel-out converter with a mapping table and pre-validation, covering one designated category (for example plant-product importers).

**Pricing hypothesis:**
NT$1,500–4,000/month (about US$50–130) per legal entity, or NT$20–40k/year with onboarding.

**How to find first customers:**
- TFDA's 食品業者登錄 (food business registration) data, which is publicly searchable
- Factory registration data for food manufacturers
- Taiwan Food Industry Development / food industry associations
- Importer associations

**Risks:**
- TFDA may improve its own import tool or publish an API that ERP vendors adopt quickly.
- Large ERP vendors may already ship this module.
- The number of firms in designated categories may be small (count not found).

**Kill condition:**
Interviews show the main ERPs (鼎新/Digiwin, 正航, 文中) already output FTracebook-ready files. Another kill: fewer than about 2,000 obligated firms outside large enterprises.

**Score:** 6/10

**Sources:**
- MOHW announcement on added categories: https://mohw.gov.tw/cp-16-8772-1.html , https://mohw.gov.tw/cp-2704-21482-1.html
- MOHW documents: https://mohw.gov.tw/dl-46287-5ce7c3cb-4584-4d2c-b342-b3fcb73414a3.html , https://mohw.gov.tw/dl-46284-47a1e23f-8ff5-4eaa-8471-7a7822d11b4c.html
- Data conversion workflow (foodnext): https://www.foodnext.net/science/scsource/paper/4975337730
- Platform overview: https://uptogo.com.tw/?p=562311

---

### Opportunity: Renovation-waste hauler declaration and dispatch tool

**Industry:**
Renovation and demolition waste haulage (裝修廢棄物清除業) and transfer or processing sites

**Buyer:**
Owner or dispatcher at small licensed waste-clearance firms and transfer stations. Secondary buyer: renovation contractors who subcontract the haulage.

**Trigger / Why now:**
In March 2025, MOENV started phasing in a rule in Taipei, New Taipei and Taoyuan: haulers of renovation waste must declare its source and destination online, and the waste must reach a designated facility within 2 days. From **2026-07-01** the rule applies **nationwide**. The hauler must complete the declaration on the 營建及裝修廢棄物流向管理平台 **before the vehicle leaves the site**, and the receiving facility must confirm within 1 day. Fines go up to NT$3m (up to NT$10m for illegal dumping). Taiwan produces about 800k t of renovation waste a year, 70% of it in Taipei, New Taipei and Taoyuan.

**Current workflow:**
1. Take the job (phone or LINE) and quote.
2. Before the truck leaves, re-key source, waste type, quantity, vehicle and destination into the government platform.
3. Wait for the receiving facility to confirm.
4. Reconcile with the customer invoice and the facility's tipping receipt.

**Pain:**
This is a new per-trip mandatory step with very high fines, imposed on small owner-operators. By the time of the 2025 pilot, about 50% of operators were using the platform, which implies the other half are being pushed onto it now.

**Existing solutions:**
- The free government platform (and any mobile app it offers; **unverified**)
- Paper and LINE workflows
- General ERP and accounting tools that have no link to the platform

**The gap:**
Job intake, quoting, dispatch and invoicing in one place, with the declaration fields prefilled for each trip. Also an exception queue (unconfirmed receipts, trips past the 2-day limit) and a monthly reconciliation for the hauler and for contractors who need proof of legal disposal.

**Possible product:**
A LINE-friendly job board for small haulers. Each job generates the declaration data, tracks confirmation status and produces a "legal disposal proof" PDF for the renovation customer.

**MVP:**
Job record → prefilled declaration checklist, plus status tracking and alerts for jobs approaching the 2-day limit. The user still submits on the government platform manually.

**Pricing hypothesis:**
NT$800–2,000/month (about US$25–65) per truck fleet. The buyers are price-sensitive.

**How to find first customers:**
- Local EPA lists of licensed clearance and processing firms (公民營廢棄物清除處理機構 permits are public)
- Interior-design and renovation trade associations

**Risks:**
- The government platform may be "good enough".
- Login likely needs a certificate, which blocks automation.
- Buyers are low-margin and have low software adoption.

**Kill condition:**
The government app already lets haulers create trips from templates in under a minute. Another kill: interviews show haulers simply do not pay for software.

**Score:** 5/10

**Sources:**
- Nationwide rollout from 2026-07-01 (Liberty Times): https://news.ltn.com.tw/news/Keelung/breakingnews/5510142
- 2025 phased start (PTS): https://news.pts.org.tw/article/732384
- Phased start (Yahoo News): https://tw.news.yahoo.com/%E6%B8%85%E9%81%8B%E5%8F%8A%E8%99%95%E7%90%86%E6%A5%AD%E8%80%85%E6%87%89%E5%8D%B3%E6%99%82%E7%94%B3%E5%A0%B1%E4%BE%86%E6%BA%90%E5%8F%8A%E5%8E%BB%E8%99%95-%E8%A3%9D%E6%BD%A2%E4%BF%AE%E7%B9%95%E5%BB%A2%E6%A3%84%E7%89%A9%E7%94%B3%E5%A0%B1%E6%96%B0%E8%A6%8F3%E6%9C%881%E6%97%A5%E8%B5%B7%E5%88%86%E9%9A%8E%E6%AE%B5%E4%B8%8A%E8%B7%AF-223519132.html
- Online declaration format rule (MOENV): https://oaout.moenv.gov.tw/law/LawContent.aspx?id=GL006044
- Permit rules for waste-clearance firms: https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=O0050039

---

### Opportunity: Fire-safety inspection field capture → national filing system

**Industry:**
Fire-safety equipment inspection (消防安全設備檢修)

**Buyer:**
Inspection firm owner or licensed 消防設備師/士 (fire-safety equipment engineer or technician), and their office staff.

**Trigger / Why now:**
There is no new 2026 rule. The obligation is long-standing: by law, each building category needs inspections either semi-annually or annually, with fixed filing deadlines (for example, end of March and end of September for some Class-A premises). Since 2016, reports must be generated through the national 審勘及檢修申報系統 (inspection and filing system), and online submission is replacing paper.

**Current workflow:**
1. Inspect on site with paper or Excel checklists, one per equipment type, recording the instruments used and their calibration dates.
2. Re-key the results into the national system, which generates the checklists, report and improvement plan.
3. Log in with a 工商憑證 (business certificate) on a card reader and submit to the local fire bureau.
4. Track re-inspections and the 15-day bureau review.

**Pain:**
High volume per firm (many sites, each with a checklist per equipment type) and hard deadlines twice a year. I found no direct complaint evidence.

**Existing solutions:**
- The free national system
- Excel templates
- Local inspection software (**unverified**; none found in 2 searches)

**The gap:**
Offline mobile capture that outputs the national system's checklist structure, plus deadline and re-inspection tracking across hundreds of client buildings.

**Possible product:**
A tablet checklist app built on the 作業基準 (official inspection standard) item list. It produces upload-ready data and a client deadline calendar.

**MVP:**
Mobile checklists for the 5 most common equipment types, export files formatted for the national system, and a calendar of client deadlines.

**Pricing hypothesis:**
NT$1,500–3,000/month per firm.

**How to find first customers:**
- The NFA 專業技術人員管理系統 (professional registry)
- City associations of fire-safety engineers and technicians (Taipei publishes an association roster)
- Lists of registered inspection firms

**Risks:**
- Bulk import into the national system may not be possible.
- Certificate login blocks automation.
- Small market (number of firms not found).

**Kill condition:**
The national system has no import path, so data must be typed regardless. Another kill: an incumbent local app already exists.

**Score:** 4.5/10

**Sources:**
- Inspection frequency and deadline table: https://gazette.nat.gov.tw/EG_FileManager/eguploadpub/eg029037/ch02/type1/gov10/num2/images/Eg01.pdf
- Taichung online filing notice: https://www.fire.taichung.gov.tw/df_ufiles/d/受理網路申報消防安全設備檢修申報書注意事項.pdf
- Inspection and filing standard: https://www.rootlaw.com.tw/LawArticle.aspx?LawID=A040040131003500-1090821
- Fire bureau filing system: https://safeap.tfd.gov.tw/
- NFA review rules: https://law.nfa.gov.tw/MOBILE/law.aspx?LSID=FL026675
- Taipei fire bureau filing page: https://www.119.gov.taipei/cp.aspx?n=275D6D08C0F5EA31&s=47F8A98FA45B47B5

---

### Opportunity: CBAM embedded-emissions data pack for fastener / steel SME exporters

**Industry:**
Steel products and fasteners (Kaohsiung and Tainan clusters)

**Buyer:**
Export sales or admin manager at SME fastener and steel-product makers shipping to EU importers.

**Trigger / Why now:**
The CBAM definitive period started in 2026. About 2,600 Taiwanese firms are affected, mainly in fasteners and stainless and carbon steel products, and more than 5,000 data submissions in the transitional period came from Taiwan. However, the EU's 2026 simplification limits reporting to importers bringing in 50 t or more a year and postpones certificate purchases to February 2027.

**Current workflow:**
1. An EU customer emails a CBAM communication template.
2. The SME gathers its electricity, gas and steel-input data and its suppliers' wire-rod emissions.
3. A consultant fills in the template.
4. The process repeats per customer and per period.

**Pain:**
Real, but reduced by the 50 t threshold.

**Existing solutions:**
- The MOENV CBAM service platform (free guidance on calculation, verification and carbon-fee offset)
- IDB low-carbon workshops for the fastener industry
- Consultants such as SGS (not verified in this research)
- Global CBAM SaaS
- Local carbon platforms (倍力 碳管家, 精誠 Carbon Envision and others)

**The gap:**
A cheap, per-shipment tool that turns one plant-level dataset into the EU communication template for many importers, with default-value fallbacks.

**Possible product:**
A "fill once, send to all EU buyers" generator built on the EU template.

**MVP:**
The EU template generator plus a library of wire-rod supplier emission factors.

**Pricing hypothesis:**
NT$2,000–5,000/month, or a per-customer-pack fee.

**How to find first customers:**
- Taiwan Industrial Fasteners Institute and association member lists
- Fastener World magazine directories

**Risks:**
- Government subsidies and free tools
- Consultants bundle verification
- Global SaaS competitors
- The EU keeps changing the rules

**Kill condition:**
Most Taiwanese SME exporters' EU buyers fall under the 50 t threshold or use default values.

**Score:** 4/10

**Sources:**
- Fastener industry and CBAM 2026: https://fastener-world.com/en/article/9424.html
- CBAM relief measures: https://fastener-world.com/en/article/9527.html
- MOENV CBAM service platform (Commercial Times): https://www.ctee.com.tw/news/20260301700568-431401
- About 2,600 affected firms (Commercial Times): https://www.ctee.com.tw/news/20240423700122-431304
- CBAM impact on Taiwan (DHL): https://www.dhl.com/discover/zh-tw/logistics-advice/import-export-advice/how-the-eu-cbam-impacts-taiwan-businesses

---

## Rejected after competitor research

- **SME GHG inventory and supplier carbon-data SaaS.** Rejected because the market is already crowded. 精誠 (Carbon Envision), 叡揚 (NetZero 零碳雲), 倍力 (碳管家) and 東捷 (碳捷流) all compete, and SAP covers large firms. The FSC roadmap (all listed companies complete GHG inventory by 2027, verification by 2029) drives demand, but incumbents are already selling into it. Sources: https://www.techbang.com/posts/106566-dongjie-grabs-carbon-inventory-business-opportunities-2 , https://www.cw.com.tw/article/5119837
- **Long-term care home-service billing and records.** Rejected because the MOHW care-management platform already runs automated claim review with self-check and resubmission, and Jubo (Smart Ageing Tech) sells home-care scheduling and record SaaS, alongside other apps such as 諾亞克居服. Sources: https://mohw.gov.tw/cp-16-36705-1.html , https://www.chanchao.com.tw/ATLife/en/visitorProductDetail.asp?no=210220 , https://apps.apple.com/tw/app/%E8%AB%BE%E4%BA%9E%E5%85%8B%E5%B1%85%E6%9C%8D/id1453627596
- **Migrant-worker broker paperwork.** Rejected because MOL provides a free 24-hour online application system and a foreign-worker management app, and agencies go through annual evaluation. I could not confirm a specific software gap, and the commercial agency-software landscape is unverified. Source: https://www.mol.gov.tw/1607/1632/1640/13288/post

## Attractive problem, poor distribution

- **Renovation-waste haulers.** The trigger is strong (nationwide from 2026-07-01), but the buyers are small, price-sensitive owner-operators with low software adoption, and the free government platform is the substitute.
- **Pest control (病媒防治業) record reporting.** Operators must report application and pesticide-use records, but the market is small (operator count not found) and the reporting channel is a government system. Source: https://www.epd.ntpc.gov.tw/UploadFile/Infofreedom/20240812170623947772.pdf

## Too competitive

- Carbon / GHG inventory platforms (listed IT firms plus SAP)
- Long-term care home-service management (Jubo and others)

## Not researched / notes

- I did not search customs brokerage, e-invoicing, NHI clinic claims, pharmacy controlled-drug reporting or accounting. Taiwan's customs and e-invoice ecosystems (for example TradeVan / 關貿網路) are mature, so they are low priority, but this was **not verified** in this research.
- The 2026 amendment to the Waste Disposal Act (廢棄物清理法) appeared in results (https://announce.yzu.edu.tw/files/ps/2026/202607/檢附環境部公告修正廢棄物清理法之修正總說明/廢棄物清理法之修正_Attach2.pdf) but I did not analyse it. It may create further reporting duties.
