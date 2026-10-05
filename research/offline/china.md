# China: Offline-Industries Pass (Quiet Industries)

**Research date:** 2026-10-05
**Depth: moderate.** 20 WebSearch calls were made. One call (the 15th) was refused for a usage limit; after a coordinator restart I ran 5 more. All searches were run in Chinese and were regulator-first.

**Headline finding:** China has plenty of quiet, regulated, paper-heavy trades. Many of them file to police (特种行业 / 治安管理). But for a non-local solo founder the market is closed, for two reasons:
1. **Licensing.** Domestic SaaS needs a VATS/ICP licence and a local entity (see the existing report, `research/countries/china.md`, section 0).
2. **The state already supplies the tool.** In almost every quiet industry screened, the receiving authority gives operators a free mandatory app or system. Examples: the police 旅馆业/民宿 治安管理信息系统 and APP; MARA's 牧运通 mini-program for livestock transport; the national veterinary-drug traceability system; the free 进销存 module on the 中国农药数字监督管理平台; MOFCOM's 家政服务信用信息平台. Where some gap is left, long-established domestic vendors fill it, for example 农销乐 (claims 100,000 farm-input dealers) and 用友畅捷通好生意.

The usual Western "one job, many receiving authorities" gap is mostly absorbed by government-built systems here. Below I list the two least-bad candidates and score them honestly. **Neither is recommended for a non-local founder.**

---

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Scrap-metal buyers (废旧金属收购) | Register with county police within 15 days of licence; record seller ID for "productive" scrap; fines of CNY 2,000–5,000 or suspension for not recording ([MOJ regulation library](http://xzfg.moj.gov.cn/front/law/detail?LawID=398); [Sanya PSB, 2023 rev.](https://gaj.sanya.gov.cn/gajsite/fggwxx/202510/ed7a1525d0974667ba871f303ff485f2.shtml)). New Public Security Administration Punishments Law from 2026-01-01: CNY 1,000–3,000 fine plus detention for buying railway, power, telecom or other utility scrap ([Xinhua full text](https://www.news.cn/legal/20250627/c1e6a443860a4606b98fc23496e56c8d/c.html)) | Registration at the police counter; paper 登记簿; police-side systems vary by city | Not found | Weak candidate → Opp. 1 | Real 2026 triggers. But it overlaps the recycling-station item below, and police systems are the real receiver |
| Recycling stations (再生资源回收站点) | MOFCOM filing (now automatic through company registration). New national standard 《再生资源回收站点建设管理规范》 published 2026-01-12, effective 2026-07-01: "every transaction needs an original voucher", clear ledgers ([Resolar summary](https://www.resolartech.com/news/hangyexinwen/recycling_point_regulation_20260513.html)). Hebei draft (Apr 2026): periodic reports to the government of type, quantity and destination; seller ID kept 2 years ([Resolar](https://www.resolartech.com/news/hangyexinwen/hebei_pv_recycling_202604.html)) | Small yards, cash, handwritten tickets (trade-press description; unverified first-hand) | Unknown nationally. Target: 1 point per 1,000–2,000 urban households ([solidwaste.com.cn](https://www.solidwaste.com.cn/news/355993.html)) → likely hundreds of thousands (estimate) | Weak candidate → Opp. 1 | Strongest "why now" in China. Inaccessible to a foreigner |
| Pesticide / farm-input shops (农药经营) | Purchase and sales ledgers, kept ≥2 years; fines of CNY 2,000–20,000 plus licence revocation ([Pesticide Administration Regulations, MARA](https://fgs.moa.gov.cn/flfg/202312/t20231205_6442161.htm); [Sanming Q&A](http://www.sm.gov.cn/wz/hdjlzsk/nyj/nz/202405/t20240510_2024076.htm)); real-name purchase of restricted pesticides | Paper ledgers still allowed; county inspectors check them on site ([Beijing Huairou checklist](https://www.bjhr.gov.cn/zt/xzzfxxgs/ztqzfbm/bjhrnyj/jcdny/202204/P020220511587373897919.pdf)) | National licence count not found. 农销乐 claims 100k dealer customers ([fuwu.com](https://fuwu.com/)) | Rejected (Opp. 2 for record) | Free government 进销存 on ICAMA, plus 20-year-old vendors (农资王, 农销乐, 用友好生意) |
| Veterinary-drug shops and farm medication records (兽药) | Barcode upload to the national veterinary-drug traceability system; prescription-drug sales rules; farm medication records. 2026 rectification campaign ([MARA 2026 plan via GDAAV](https://www.gdaav.org/web/article/15604.html); [MOFCOM law DB, 2025 plan](https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=102237)) | Rural vets and farm shops; inspection-driven | "406,749 related enterprises" (chinabaogao, June 2025; a company-database count, not licences; unverified) | Rejected | National system is mandatory and free; local ERP vendors |
| Livestock transport / dealers (畜禽运输) | Carrier and vehicle filing with county agriculture bureau in the 牧运通 mini-program; paperless animal B certificates nationwide since 2024-01-01 ([MARA Notice 531](https://www.moa.gov.cn/govpublic/xmsyj/202202/t20220225_6389646.htm); [gov.cn 2023 paperless notice](https://www.gov.cn/zhengce/zhengceku/202308/content_6899236.htm); [Shuicheng guide](https://www.shuicheng.gov.cn/newsite/zwgk/zdly/nync/zzygl_1/202506/t20250617_88151260.html)) | It was offline. The state digitised it directly | Not found | Rejected | Government closed the gap itself (牧运通) |
| Beekeepers (养蜂) | Voluntary 养蜂证 registration; registered beekeepers must keep a farm file and bee log (colonies, quarantine, veterinary drugs, sales) ([养蜂管理办法, Beijing gov](https://www.beijing.gov.cn/zhengce/zhengcefagui/qtwj/201706/t20170630_776730.html)) | Paper log, county counter ([Xinhua district guide](http://www.czxh.gov.cn/czxh/ADD06225/202512/74a70dead3244ada9e1eba1e6d7d388c.shtml)) | Not found | Rejected | Voluntary registration, low money, ageing migratory operators |
| Domestic workers (家政) | Real-name credit record on MOFCOM 家政服务信用信息平台; electronic "居家上门服务证"; insurance subsidy tied to it ([MOFCOM 9-ministry notice, Apr 2025](https://www.gov.cn/zhengce/zhengceku/202504/content_7019578.htm)) | It's an agency business. Households are not filing employers | 20,000+ companies, 16.7M workers on the platform (Mar 2025, [China News](https://www.chinanews.com.cn/cj/2025/04-18/10401878.shtml)) | Rejected | Free state platform and app; agencies use local SaaS (unverified) |
| Hotels / homestays (旅馆业 / 民宿) | Real-name guest registration uploaded to police; new law from 2026-01-01 fines responsible staff CNY 500–1,000; provincial rules fine operators who don't install the police app ([Beijing PSAPL 2025 text](https://gdb.beijing.gov.cn/rf_zwgk/2024zcwj/2024_qtwj/202603/t20260319_4561746.html); [Guangdong homestay measures](https://www.sz.gov.cn/cn/xxgk/zfxxgj/zcfg/content/post_8967056.html)) | Mandatory police app/terminal | Not found | Rejected | The police system *is* the product; third parties only resell certified ID readers |
| Second-hand phones / used goods (旧货) | Police filing within 15 days; must install the police-connected security management system; IMEI recording ([Hohhot measures, MOJ](https://www.moj.gov.cn/pub/sfbgw/flfggz/flfggzdfzwgz/201311/t20131119_140388.html); [T/SDECC002-2025](https://www.ttbz.org.cn/Home/PdfFileStreamGet/c3QsMTYwNzQ2)) | City-level police systems | Not found | Rejected | Mandated police-connected system; city fragmentation, closed to outsiders |
| Pawnshops (典当) | Verify certificates and register pledged goods; new law: CNY 1,000–3,000 fine plus detention ([Xinhua full text](https://www.news.cn/legal/20250627/c1e6a443860a4606b98fc23496e56c8d/c.html)) | Financial-regulator licensed; already systematised | Not found | Rejected | Financial licensing; served by local core systems (unverified) |
| Locksmiths / seal engravers (开锁 / 刻章) | Police filing; record each unlock job (customer ID, time, place). Seal engraving moved from permit to filing nationally ([Oeeee, MPS 2025](https://m.mp.oeeee.com/a/BAAFRD0000202501101043426.html); [Shanghai seal system](https://www.shanghai.gov.cn/)) | Paper service record sheets; police web system for seals | Not found | Rejected | Low volume per shop. Police system for seals; locksmiths too small to pay |
| Food workshops and stalls (小作坊 / 摊贩) | Provincial regulations (Jiangsu 2025 amendment, Hunan from 2025-03-01, Hebei): purchase-inspection records kept until 6 months after shelf life ([Jiangsu](https://policy.mofcom.gov.cn/claw/clawContent.shtml?id=102456); [Hunan via Yueyang](https://amr.yueyang.gov.cn/55704/56097/content_2255737.html); [Hebei](https://scjg.hebei.gov.cn/info/117445)) | Paper; market-supervision spot checks | Not found | Rejected | No money; provincial 阳光/智慧监管 platforms (unverified) |
| Explosive-precursor chemical sellers (易制爆, e.g. hardware and chemical shops) | Report type, quantity and destination to county police through the 易制爆 information system within 5 days of each sale or purchase; keep the buyer's ID copy for ≥3 years ([MPS measures, MOJ](https://www.moj.gov.cn/pub/sfbgw/flfggz/flfggzbmgz/202101/t20210105_146373.html)). The new 危险化学品安全法 takes effect 2026-05-01 ([Xinhua](https://www.news.cn/20251227/d84905cd63be485aa567174912250b2b/c.html); [STDaily](https://www.stdaily.com/web/gdxw/2025-12/28/content_454425.html)) | Police-run system; per-transaction filing at the county level ([Beijing filing item](http://banshi.beijing.gov.cn/pubtask/task/1/110119000000/2e3fcac4-9565-11e9-8300-507b9d3e4710.html)) | Not found | Rejected | The receiving system is a police platform; outsiders can't integrate; licensed hazmat consultancies already serve the trade |
| Funeral / cemeteries (殡葬) | Revised 殡葬管理条例 in force 2026-03-30: new institutions must be government non-profit; no new commercial funeral institutions ([gov.cn](https://www.gov.cn/zhengce/zhengceku/202601/content_7054169.htm)) | Public institutions | Not found | Rejected | Sector is being re-nationalised; buyers are public bodies (procurement) |

---

## 2. Strongest opportunities

Neither clears the bar. They are recorded so the cross-country ranking can see what the best China candidates looked like.

### Opportunity: Recycling-yard transaction ledger and multi-receiver report (再生资源回收站点 台账)

**Industry:**
Small recycling stations and scrap-metal buyers (再生资源回收站点 / 废旧金属收购).

**Buyer:**
Owner-operator of a licensed recycling yard or collection point, often family-run. Secondary buyers: recycling "system pilot" companies that run networks of points (MOFCOM listed 78 pilot companies in 32 cities) ([MOFCOM](https://ltfzs.mofcom.gov.cn/gztz/art/2025/art_cde724368b5b461c8a029be9aa18423f.html)).

**Trigger / Why now:**
- The national standard 《再生资源回收站点建设管理规范》 was published 2026-01-12 and took effect 2026-07-01. It requires clear ledgers and an original voucher for every transaction ([Resolar](https://www.resolartech.com/news/hangyexinwen/recycling_point_regulation_20260513.html)).
- The revised Public Security Administration Punishments Law took effect 2026-01-01. It raises penalties for buying utility, railway and telecom scrap to CNY 1,000–3,000 plus detention ([Xinhua](https://www.news.cn/legal/20250627/c1e6a443860a4606b98fc23496e56c8d/c.html)).
- Hebei's April 2026 draft adds periodic reporting of type, quantity and destination, and seller-ID registration kept ≥2 years ([Resolar](https://www.resolartech.com/news/hangyexinwen/hebei_pv_recycling_202604.html)). Other provinces may follow (unverified).

**Current workflow:**
1. Seller arrives with material. The yard weighs it and writes a ticket by hand.
2. For productive scrap, staff copy the seller's ID into the police 登记簿 or a city police system.
3. Monthly or periodic tonnage and destination are aggregated by hand for commerce/supply-and-marketing departments (Hebei draft).
4. Separately, the yard handles tax invoicing. Since 2024-04-29, State Taxation Administration Announcement 2024 No. 5 lets resource-recovery enterprises issue "reverse invoices" (反向开票) to individual sellers. By June 2025, 13,300 enterprises had issued 5.11 million reverse invoices to 1.67 million individuals ([Xinhua, Aug 2025](https://www.news.cn/fortune/20250812/82a0f1ceb2d9459d95ad8086922581b8/c.html); [Jiangsu tax bureau](https://jiangsu.chinatax.gov.cn/art/2024/4/25/art_23638_1640.html)).

**Pain:**
One weighing event has to feed police registration, commerce or provincial reporting, and tax documentation. Penalties are explicit: CNY 2,000–5,000 or suspension for not recording productive scrap ([MOJ](http://xzfg.moj.gov.cn/front/law/detail?LawID=398)). I found no first-hand operator complaints (budget).

**Existing solutions:**
- City police 治安管理 systems (where they exist).
- Provincial "digital recycling platforms" that governments are encouraged to build (Hebei draft).
- Generic 进销存 tools (用友好生意, 简道云 templates).
- Large platform recyclers (爱回收 and similar) for consumer goods.
- Paper 登记簿 sold by stationers.
- **Reverse-invoicing systems already do the "weigh once" step on the tax side.** 开灵科技 (Kailing) sells a system that turns scale data into purchase orders, bank-reconciled payments and reverse invoices pushed to the e-tax bureau, and it monitors each individual seller's CNY 5M cap ([Kailing](https://www.kailingteck.com/h-nd-887.html); [Sohu](https://www.sohu.com/a/966249475_121846292)). Trading platforms such as 上海边角料交易中心 publish guides for this ([irecycle.cn](http://www.irecycle.cn/h-nd-25647.html)).
- Many generic WeChat mini-program "废品回收" O2O templates (weiqing, DCloud). These are dispatch apps, not compliance ledgers.

**Offline evidence:**
The national standard itself mandates "original vouchers", which is a paper-first framing. Registration is at the county police counter. Trade press describes small yards as 粗放 (unrefined, informal).

**Offline channel:**
- County recycling associations and supply-and-marketing cooperatives (供销社). The 供销社 network runs much of rural recycling.
- Weighbridge and scale suppliers.
- MOFCOM's 30-day public filing list per city (the 公示 under the 备案 module).

Every one of these needs a Mandarin-speaking local on the ground.

**Market count:**
- 13,300 resource-recovery enterprises were issuing reverse invoices by June 2025 ([Xinhua](https://www.news.cn/fortune/20250812/82a0f1ceb2d9459d95ad8086922581b8/c.html)). These are the formal buyers.
- Small collection points are far more numerous. The siting target of 1 point per 1,000–2,000 urban households implies hundreds of thousands (estimate only).

**The gap:**
A "weigh once, file everywhere" ledger that outputs the police seller-ID record and the provincial periodic report from one ticket. The tax and invoice side is already covered by reverse-invoicing vendors (开灵科技 and others). What's left is the police and provincial-report side for small, non-invoicing points. Those are the least able to pay.

**Possible product:**
A mobile ledger with ID-card OCR and weighing input. It exports police and provincial reporting formats per city.

**MVP:**
A one-province (Hebei) ticket-plus-ID ledger that prints the 2-year register and the periodic report.

**Pricing hypothesis:**
CNY 50–150 per month per yard (estimate), sold through scale suppliers.

**How to find first customers:**
MOFCOM filing publicity lists; 供销社 recycling subsidiaries; scale dealers.

**Risks:**
- VATS/ICP licence and a local entity are mandatory.
- Police and provincial platforms may themselves become the free mandatory tool, as happened with 牧运通 in livestock.
- Low ability to pay.
- Handling ID data under PIPL.

**Kill condition:**
- The provincial platform or police system offers free direct entry (likely).
- Reverse-invoicing vendors add police and provincial export, which is a small step for them.
- No local co-founder is available.

**Score:** 3/10 for a local Chinese founder; **1/10 for a non-local solo founder** (not accessible).

**Sources:** As cited inline above.

---

### Opportunity: Farm-input shop dual ledger (农药 + 兽药 + 种子 进销台账) for village dealers

**Industry:**
Village farm-input retailers (农资店) selling pesticides, seed, fertiliser and often veterinary drugs.

**Buyer:**
Shop owner, often older and family-run.

**Trigger / Why now:**
- The 2026 MARA veterinary-drug rectification campaign checks traceability barcode uploads and prescription-drug sales ([GDAAV](https://www.gdaav.org/web/article/15604.html)).
- Pesticide ledger enforcement runs through county inspection checklists.
- Real-name purchase of restricted pesticides ([reach24h](https://www.reach24h.com/agrochemical/industry-news/restricted-pesticides-buy)).
- A revised 农药经营许可管理办法 (MARA Order 2025 No. 3) ([CIRS](https://www.cirs-group.com/cn/agrochemicals/nong-yao-jing-ying-xu-ke-guan-li-ban-fa-nong-ye-nong-cun-bu-ling-2025-nian-di-3-hao-xiu-ding-ban)).

**Current workflow:**
1. Paper or software purchase and sales ledgers, including the buyer's name for restricted products.
2. Separate barcode uploads to the national veterinary-drug traceability system.
3. Ledgers shown to the county agriculture inspector.

**Pain:**
Fines of CNY 2,000–20,000 plus licence revocation for not keeping ledgers ([MARA](https://fgs.moa.gov.cn/flfg/202312/t20231205_6442161.htm)). Two separate national systems cover pesticides and veterinary drugs.

**Existing solutions:**
- The free 农资进销存管理系统 on 中国农药数字监督管理平台 (ICAMA) ([icama.cn](https://www.icama.cn/portal/homepage/getpitai.do?id=2c9280e5635ee6ca016371c08b420dbc&type=1)).
- 农销乐 (15 years in the trade, claims 100k dealers) ([fuwu.com](https://fuwu.com/)).
- 农资王 (claims 20+ years).
- 用友畅捷通好生意 农药专版 ([chanjet](https://www.chanjet.com/sem/hangye-dp222v76rrxxrbq.html)).
- 简道云 templates.

**Offline evidence:**
Paper ledgers remain legal. Inspections are on-site at the shop counter.

**Offline channel:**
Pesticide wholesalers and distributors, county agriculture bureaus' training sessions, and supply-and-marketing cooperatives. Incumbents already use all of these.

**Market count:**
No official national licence count found in this run. One incumbent's claim of 100k customers implies a market at least that size.

**The gap:**
Small at best: one ledger feeding both the pesticide and veterinary-drug national systems. Incumbents probably already do this (unverified).

**Possible product:**
A combined pesticide and veterinary-drug compliance ledger.

**MVP:**
Not worth specifying. See the kill condition.

**Pricing hypothesis:**
CNY 300–1,000 per year (estimate, in line with incumbents).

**How to find first customers:**
Distributor networks.

**Risks:**
A free government tool plus entrenched incumbents; licensing.

**Kill condition:**
Already met. The free ICAMA system and incumbents with six-figure installed bases.

**Score:** 2/10 (rejected; kept here only as the best-documented example).

**Sources:** As cited inline above.

---

## 3. Rejected

- **Livestock transport and animal quarantine:** MARA built 牧运通 and made B certificates paperless from 2024-01-01. The gap is closed by the state.
- **Hotel and homestay guest registration:** the police app or system is mandatory. There's no room for a third-party workflow layer.
- **Domestic-worker records:** the MOFCOM credit platform and electronic service certificate are free and state-run. China has no household-as-employer payroll filing burden comparable to Europe or Latin America.
- **Second-hand phones and pawnshops:** city police-connected systems are mandated; pawnshops are under financial licensing.
- **Veterinary-drug traceability:** a national barcode system, plus local ERP.
- **Beekeepers:** registration is voluntary and there's little money.
- **Locksmiths and seal engraving:** too small, or a police web system already exists.
- **Food workshops and stalls:** no willingness to pay; provincial platforms.
- **Funeral and cemeteries:** re-nationalised by the 2026 regulation, so buyers are public institutions.
- **Explosive-precursor chemical sales registers (易制爆):** filing goes to a police information system within 5 days. The new Hazardous Chemicals Safety Law (in force 2026-05-01) is a trigger, but the receiver is a closed police platform.
- **Reverse invoicing for recyclers (反向开票):** the strongest money-backed workflow found (13,300 enterprises, a 2024 trigger), but 开灵科技 and e-invoicing incumbents already sell scale-to-invoice systems, and they need tax-platform access.

---

## 4. Method notes

- **Worked:** Chinese regulator-first queries naming the regulation (…管理办法 / 条例 + 备案 / 台账 / 处罚) reliably returned gov.cn, MOJ and provincial texts with exact obligations and fines. Queries about the 2026 law changes (治安管理处罚法 in force 2026-01-01, 殡葬管理条例 in force 2026-03-30, the recycling-station standard in force 2026-07-01) found the triggers quickly.
- **Didn't work:** national operator counts per licence type. They are rarely published, and commercial "企业数量" figures mix in unrelated firms.
- **Structural lesson:** in China the "regulator-first" lens mostly finds *state-built mandatory apps* (police systems, 牧运通, traceability platforms). The quiet-industry gap that exists elsewhere is usually closed by government, not left to vendors.
- **Budget:** 20 of 40 searches used. One call was refused for a usage limit mid-run; the run resumed and stopped early because the remaining questions were about accessibility, which further searching can't change.
- **Most useful counting source:** tax-authority press statistics (the reverse-invoicing counts) were the only hard operator count found for a quiet trade.
