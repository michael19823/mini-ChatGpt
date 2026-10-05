# Japan - opportunity research (deep pass, 2026-10-05)

Method note: The first pass used 10 searches. This deep pass added about 45 WebSearch calls, almost all in Japanese. WebFetch is blocked, so every fact comes from search-result snippets. Anything marked "unverified" or "estimate" was not confirmed against a primary page.

Japan is open to a foreign solo founder: there are no sanctions and no software licensing regime. The real barriers are language and trust. Buyers expect a Japanese UI, Japanese support and billing with a qualified invoice (適格請求書).

Japan is a mature SaaS market. The main finding of this pass is that almost every new 2025–2026 rule we checked already has two to five vertical vendors within months of taking effect. Examples:
- trucking 実運送体制管理簿: five or more vendors;
- asbestos pre-survey reporting: four or more;
- accommodation tax: PMS vendors;
- 取適法: freee and Money Forward;
- septic maintenance: six or more legacy packages;
- Clean Wood Act: a free government system.

Scores are therefore modest. The surviving ideas are either very new (the trigger takes effect from December 2026 to April 2027) or sit in the "exception" gap that incumbents leave.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Child-facing services (放課後等デイ, 学習塾, スポーツクラブ, 認可外保育, 学童) | こども性暴力防止法 (日本版DBS) from 2026-12-25: criminal-record checks per hire, current-staff checks due by 2029-12-24, information-management rules, training, consultation and incident handling | **Candidate (best)** | Brand-new mandatory or opt-in regime. Early tools so far cover only parts of it (training, e-learning, one 放デイ cloud) |
| Industrial-waste intermediate processors | JWNET 「再資源化等の情報」 becomes mandatory 2027-04: per manifest, report disposal method, quantity per method, and downstream output types and quantities | Candidate | About 19,600 intermediate facilities. DXE already shipped support, but processors on legacy weighbridge or sales systems need a bridge |
| Plumbing (指定給水装置工事事業者) | Water-connection applications differ per water utility. MLIT issued a standard form on 2026-03-30 and utilities are moving to e-application | Candidate (weak) | Real fragmentation and a why-now. Low price point, and utilities may converge on their own systems |
| Foreign-worker agencies (監理団体 → 監理支援機関, 登録支援機関) | 育成就労 from 2027-04, plus the annual 定期届出 for 特定技能 from 2026-04 | Downgraded | G-WORKER, Linkus and several others already cover it (see the ITmedia comparison) |
| Industrial-waste collectors | Multi-prefecture permits and 5-year renewals | Poor distribution | Low frequency. 行政書士 are the gatekeepers |
| Subcontracting (取適法, 2026-01) | 60-day payment rule, ban on promissory notes, price-negotiation records | Too competitive | freee 業務委託管理 (free tier), freee サイン and Money Forward contract management all added support |
| Trucking (改正貨物自動車運送事業法 2025-04, トラック適正化二法 2026-04) | 実運送体制管理簿, contract documents; 5-year permit renewal and "appropriate cost" pricing coming later | Too competitive | トラックメイト, ロジックス, ロジポケ, AEGISAPP and 25アプリ already generate the ledger |
| Demolition / asbestos | Pre-survey report via the 石綿事前調査結果報告システム (GビズID, Excel bulk upload); 工作物 surveyor requirement from 2026-01; site posting; 3-year records | Rejected | @-Rex, アスベストONE, metalab and アスレポ already do one survey → CSV upload + posting + records |
| Fire-equipment inspection | 消防用設備等点検結果報告 to about 720 fire HQs | Rejected | Free official FDMA inspection app. マイナポータル ぴったりサービス standard form was live at 567 HQs (79%) as of 2025-04 |
| Building periodic inspection (建築基準法12条) | Reports to 特定行政庁 | Rejected (light screen) | Free 定期報告書作成支援サイト and e-application already exist. Competitor scan not finished |
| Septic / 浄化槽 maintenance | Inspection and cleaning records, prefectural ledger reporting (Tokushima moves to CSV/QR in 2026-10) | Too competitive | ミスターアクアX, 水顧電, EP3, エコまる, 穴吹ソフトプラス, 環境工学研究所 |
| Construction excavated soil | 再生資源利用促進計画, destination receipts kept 5 years, final-destination confirmation (2024-06) | Rejected (weak) | COBRIS (government) and prefectural matching systems. It is a per-project record, not a strong recurring pain signal |
| Construction (改正建設業法, full effect 2025-12) | Itemised labour cost in estimates (標準労務費) | Not pursued | The rule only says firms should try to show labour cost (努力義務). Construction ERPs and estimating tools will absorb it (unverified) |
| Lodging (宿泊税) | 120+ municipalities with their own rates, tiers and monthly returns (eLTAX) | Too competitive | HOTEL SMART, AirHost and MujInn automate tax calculation and return data |
| Pharmacies / drugstores | 指定濫用防止医薬品 sales checks become a legal duty from 2026-05-01 | Rejected | Done at the counter at the point of sale. POS vendors and chains handle it, and a stand-alone tool has low willingness to pay (WTP) |
| Timber (改正クリーンウッド法 2025-04) | Legality checks, records and information passed downstream by 第一種 businesses | Rejected | Free government クリーンウッドシステム since 2025-04-01 |
| Fisheries (水産流通適正化法, シラスウナギ from 2025-12) | Catch-number transfer and 3-year transaction records | Rejected | Denso's シラスウナギ traceability system. Tiny buyer pool |
| Steel/parts exporters (EU CBAM definitive period 2026) | Supplier emissions data for EU importers | Too competitive | Carbon-accounting SaaS (zeroboard, アスエネ and others, unverified that each offers CBAM features), plus JETRO's free calculation manual. 50 t de-minimis threshold |
| Chemical users (自律的管理, about 2,900 substances from 2026-04) | SDS inventory, risk assessment records, labels | Too competitive | ケミカン and other SDS SaaS, plus the free government CREATE-SIMPLE |
| Funeral homes | 死亡届 / 火葬許可 filing on behalf of families | Watch | Digital Agency target for online death registration is around the end of FY2026 (unverified). Most municipalities are still paper-only, so nothing to integrate with yet |
| Long-term care, CCUS, logistics-efficiency reporting, fluorocarbon logs, e-invoicing | (first pass) | Rejected / too competitive | Unchanged from the first pass; see "Rejected" below |

## Opportunities

### Opportunity: 日本版DBS Compliance Workbench for Small Child-Facing Operators

**Industry:**
Disability day services for children (放課後等デイサービス, 児童発達支援), cram schools (学習塾), sports and arts clubs, unlicensed childcare (認可外保育) and after-school clubs (学童).

**Buyer:**
Owner or office manager (管理者 / 事務長) of a small operator running 1–20 sites. For multi-site groups, the HR or 総務 lead.

**Trigger / Why now:**
The こども性暴力防止法 takes effect on 2026-12-25.
- Schools and child-welfare facilities, including disability services for children, are obliged by law.
- 学習塾, sports clubs and 認可外保育 enter the regime by applying for government certification (認定).
- Checks of new hires start on 2026-12-25. Checks of current staff run from 2027-04 and must be finished by 2029-12-24.
- Operators must also adopt an information-management policy (情報管理規程) and restrict access to records. They must report any leak to こども家庭庁 and the Personal Information Protection Commission.
- Guidelines also require training, consultation channels and procedures for suspected incidents.

**Current workflow:**
1. Decide which roles count as 対象業務従事者 and keep the list current as staff join, leave or change roles.
2. For each hire or transfer, request the criminal-record check through the こども家庭庁 system and wait for the 犯罪事実確認書.
3. Store the result under strict access control. Record who saw it and dispose of it on schedule.
4. Plan current-staff checks in waves before 2029-12-24.
5. Run and record mandatory training, the consultation desk, incident logs and follow-up measures.
6. For certified (認定) operators, keep the evidence needed to keep certification (exact periodic reporting is unverified).
Today this is mostly Excel, paper binders and 行政書士 help with the certification application.

**Pain:**
- The rule is new, legally sensitive and penalised: certified operators can lose certification, and leaking records has legal consequences.
- Many small operators have no HR staff.
- 行政書士 offices (for example BEGIN行政書士事務所) are selling 認定申請 support.
- Prefectures and cities are publishing preparation checklists for operators (Gifu, Nara, Matsuyama, Nishitokyo and others).
- こども家庭庁 opened an information-management help desk in 2026-10, which suggests operators are confused.
Direct evidence of hours spent is not yet available, because the regime has not started.

**Existing solutions:**
- 全国学習塾協会: free 「日本版DBS対応 研修・修了証発行システム」 (training and certificates only) for its full members, released 2026-05.
- VxTech 「SASENAI for DBS」: an operations-support cloud announced about 100 days before the law takes effect, starting with 児童発達支援 and 放デイ, with free monitor users.
- Risk Monster / サイバックスUniv.: free e-learning until 2026-12-31.
- freee and HR/labour consultancies: explainer content and possibly HR features (unverified).
- 行政書士 and 社労士 offices: application and policy-drafting services.
- Childcare and 放デイ operations SaaS (コドモン, HUG and others): no confirmed DBS feature found, but they are the most likely fast followers.

**The gap:**
Nobody yet clearly offers all of the following in one place:
- a roster that knows which staff need a check and by when, including the 2027-04 to 2029-12 wave plan for current staff;
- per-hire and per-transfer triggers;
- a records vault with an access log that matches the 情報管理規程;
- training records and incident logs combined into one inspection-ready evidence pack per site.
The association's tool covers training only. SASENAI is the one direct competitor and is still at the monitor stage.

**Possible product:**
A DBS operations register: a staff roster with role-based check requirements and deadlines, a check-status tracker that stores the outcome but not the record itself where the rules forbid copying, training and incident logs, and a one-click evidence pack for each site.

**MVP:**
Staff roster CSV import, rules for which roles are in scope, a deadline calendar for new-hire and current-staff checks, a training log with certificate upload, an incident log, access logging, and a PDF evidence pack. It does not touch the government check system itself.

**Pricing hypothesis:**
3,000–8,000 yen/month per site, or 20,000–50,000 yen/month for a 10–20 site group (estimate).

**How to find first customers:**
- Prefectural and city lists of designated 障害児通所支援 operators (public designation lists).
- 全国学習塾協会 and regional 塾 associations.
- Prefectural lists of 認可外保育施設.
- こども家庭庁's register of certified operators, once it is published (unverified that it will be).
- 社労士 and 行政書士 offices that resell to their clients.

**Risks:**
- Data-handling rules may forbid storing check results in third-party cloud services or may impose heavy security requirements (unverified; needs reading the guidelines).
- Sector SaaS (HUG, コドモン) or HR suites may add the feature quickly.
- Certification is optional for 塾 and clubs, so uptake there is uncertain.
- The topic is sensitive and needs careful brand positioning.

**Kill condition:**
- こども家庭庁's own system covers roster and deadline tracking for free, or the guidelines make third-party storage impractical.
- Or HUG or コドモン ship an equivalent module before mid-2027.
- Or 10 operator interviews show that Excel plus the 行政書士 is felt to be enough.

**Score:** 6/10

**Sources:**
- https://keiyaku-watch.jp/?p=35938
- https://www.pref.gifu.lg.jp/uploaded/attachment/478973.pdf
- https://www.city.matsuyama.ehime.jp/kurashi/kosodate/boshi/kodomoseibouryoku.files/checklist.pdf
- https://www.businesslawyers.jp/lib/publications/bb3cace2b3bb87090ef0eaab889fe7ddfd77f6f49e02e20793a07d31e7bc8922
- https://begin-office.com/japan-dbs
- https://prtimes.jp/main/html/rd/p/000000025.000135904.html (SASENAI for DBS)
- https://www.shijyukukai.jp/2026/05/30169 (全国学習塾協会 training system)
- https://prtimes.jp/main/html/rd/p/000000143.000002438.html (Risk Monster e-learning)
- https://news.web.nhk/newsweb/na/nd-20261001de53745 (こども家庭庁 help desk)
- https://www.freee.co.jp/kb/kb-trend/japanese-version-dbs/

### Opportunity: JWNET 2027 "再資源化等の情報" Bridge for Intermediate Waste Processors

**Industry:**
Industrial-waste intermediate processing (crushing, sorting, RPF, incineration and similar) and final disposal.

**Buyer:**
Office manager or manifest clerk (マニフェスト担当) at small and mid-size 処分業者, especially those whose weighbridge and sales systems come from small local vendors or Excel.

**Trigger / Why now:**
- An amendment to the Waste Management Act enforcement rules was promulgated on 2025-04-22 and takes effect on 2027-04-01.
- From then, the final disposal-completion reports in electronic manifests must include, for every processing step until final disposal or recycling: the processor's name and permit number, the facility, the processing method, the quantity per method, and the type and quantity of outputs.
- The new fields have been optional in JWNET since 2025-05. They become mandatory in 2027-04.

**Current workflow:**
1. Receive loads against primary manifests; weigh them in the weighbridge or sales system.
2. Process mixed loads; ship outputs to several downstream processors under secondary manifests.
3. Today, report completion in JWNET by hand or through the vendor's EDI.
4. From 2027-04, also work out which methods and outputs belong to each primary manifest. This means allocating mixed-batch outputs back to many incoming manifests, then entering the result.

**Pain:**
- JWNET has published a dedicated input guide, FAQ and leaflets, and is running briefings for processors on adapting their systems.
- Consultancies (イーバリュー, 木下カンセー, ksystem) publish "what to prepare now" articles.
- About 19,600 intermediate processing facilities exist (MoE survey, as of 2023-04-01), and about 242,000 waste-industry permits.
- The allocation problem is real arithmetic that is hard to do by hand at volume.
Complaint volumes are unverified.

**Existing solutions:**
- JWNET itself: web entry, with pattern-style settings (as far as the snippets show).
- DXE 「DXE Station 処分業者」: already released with 「再資源化項目対応機能」 (pattern registration, linking primary and secondary manifests, automatic date management for multiple secondary manifests).
- Large waste-industry systems and other JWNET EDI vendors (names unverified).
- Consultants.

**The gap:**
A bridge for processors who will not switch platforms: import weighbridge or sales CSVs, apply allocation rules per process line, and produce the JWNET entries or EDI files. DXE asks processors to adopt its station product; legacy-system users need a bolt-on. Whether JWNET's own pattern registration already covers simple single-line plants is unverified.

**Possible product:**
A "manifest allocation engine": define the plant's process patterns once, upload daily intake and outbound records, and get the 再資源化 fields for each manifest, ready for JWNET bulk entry or EDI.

**MVP:**
Pattern editor, CSV import of intake and outbound records, allocation by ratio or mass balance, and export in JWNET's CSV or bulk-entry format, plus a discrepancy report.

**Pricing hypothesis:**
15,000–40,000 yen/month per facility (estimate).

**How to find first customers:**
- Prefectural and city registers of licensed 処分業者, which are public.
- 全国産業資源循環連合会 and prefectural association member lists.
- 優良認定 processor listings (産廃情報ネット, unverified as a listing).

**Risks:**
- An EDI connection to JWNET needs vendor registration and testing.
- DXE and the big vendors are ahead.
- Many processors may simply let their existing vendor upgrade them.
- Allocation rules may be simpler in practice than assumed.

**Kill condition:**
- Interviews show that most small processors have a single process line, so JWNET's pattern registration is enough.
- Or their existing vendors all ship 2027 support at no extra cost.

**Score:** 5/10

**Sources:**
- https://www.jwnet.or.jp/jwnet/about/assets/files/leaflet_tsuika_g.pdf
- https://www.jwnet.or.jp/jwnet/about/assets/files/tsuika_tebiki.pdf
- https://www.jwnet.or.jp/jwnet/about/assets/files/tsuika_faq_20250502.pdf
- https://www.city.chiba.jp/kankyo/junkan/sangyohaikibutsu/20251212_tuuti.html
- https://prtimes.jp/main/html/rd/p/000000022.000108896.html (DXE)
- https://www.env-value.co.jp/column/lawamendment/column-211
- https://www.env.go.jp/press/111095.html (permit and facility counts)

### Opportunity: Multi-Utility Water-Connection Application Assistant for Plumbing Contractors

**Industry:**
Plumbing: water-supply and drainage connection work.

**Buyer:**
Owner or office staff of small 指定給水装置工事事業者 (often also 排水設備 指定工事店) working across several neighbouring water utilities.

**Trigger / Why now:**
- Water-connection application forms differ even between neighbouring utilities.
- On 2026-03-30, MLIT sent utilities a technical advisory with a standard application form (20 items), and is considering funding utilities' e-application systems through 上下水道DX.
- Utilities are going online one by one, each in its own way: Yokohama made it system-only and updated its e-application in 2026-03; Tokyo runs its own system; Suita and 大阪広域水道企業団 have moved online; Kagoshima uses LoGoフォーム.

**Current workflow:**
1. Survey the site and draw the plan (CAD or by hand).
2. Fill in that utility's 給水装置工事申込書, plus a separate 排水設備 application for sewers, in different formats.
3. Submit on paper or through that utility's portal, answer queries, and book the completion inspection.
4. Submit the as-built drawing (竣工図) and completion report.

**Pain:**
MLIT itself cites contractor requests for standardisation because of the variation in forms. Per-job frequency is high for active firms. The evidence is otherwise indirect.

**Existing solutions:**
- Plumbing CAD packages, some with utility-specific forms (names unverified).
- Each utility's own portal.
- Manual Excel and paper.

**The gap:**
One job record that can produce the standard form, each utility's local variant and the drainage application, and that tracks status across utilities. This is unverified as unserved, because the CAD vendors were not fully screened.

**Possible product:**
A job-based form generator and tracker that maps one job's data onto each utility's form or portal fields, with a per-utility rules library.

**MVP:**
Ten utilities in one metropolitan area, standard form and local variants as PDF and Excel output, a status board and inspection reminders.

**Pricing hypothesis:**
3,000–6,000 yen/month per firm (estimate).

**How to find first customers:**
Each utility publishes its list of designated contractors (指定給水装置工事事業者一覧). Local 管工事業協同組合 (plumbing contractors' cooperatives) are a channel.

**Risks:**
- Standardisation may remove most of the fragmentation within a few years.
- Portals may not accept automated submission.
- Firms are very small and price-sensitive.
- CAD vendors may already do this.

**Kill condition:**
If the main CAD vendors already output every local form, or if most utilities in the target area adopt the standard form and a shared e-application platform by 2027.

**Score:** 4/10

**Sources:**
- https://www.mlit.go.jp/mizukokudo/watersupply/content/001975043.pdf
- https://www.nikoukei.co.jp/news/detail/550340
- https://www.city.yokohama.lg.jp/business/bunyabetsu/suido/kyuusui-souchi/oshirase/default2022081710545.html
- https://www.city.suita.osaka.jp/kurashi/1018513/1018521/1041651.html
- https://www.wsa-osaka.jp/soshiki/tondabayashi/tondabayashi/tetsuduki/13205.html
- https://www.city.kagoshima.lg.jp/suido/soumu/kyuhaisui/gesuido/nyusatsu/jigyosha/yoshiki.html

### Opportunity: 育成就労 / 特定技能 Support-Agency Workbench (downgraded)

**Industry:**
Foreign-worker supervising and registered-support organisations.

**Buyer:**
Small 監理団体 (becoming 監理支援機関) and 登録支援機関, and their administrative staff.

**Trigger / Why now:**
- 育成就労 starts on 2027-04. Agencies must re-apply for permission as 監理支援機関 (applications opened 2026-04-15), add external auditors, and may not supervise just one company.
- For 特定技能, periodic filings moved from quarterly to annual in 2025-04, using a new combined form (参考様式第3-6号). The first filing period under the new system is 2026-04-01 to 2026-05-31.

**Current workflow:**
1. Collect each client company's documents and worker plans.
2. Log visits, audits and support records.
3. File audit reports (within 2 months of an audit, for technical interns) and periodic filings.
4. Keep everything in Excel and paper.

**Pain:**
The rules are new and stricter. Hours spent and complaint volume are unverified.

**Existing solutions:**
- G-WORKER (ファイブテクノロジー): cloud for 監理団体, with deadlines and procedure lists.
- Linkus (BEENOS HR Link): 特定技能 support management, updated for the 2025-04 and 2026-04 changes.
- ITmedia's comparison of foreign-employment management systems lists further vendors.
- Mynavi Global content.
- 行政書士 offices.

**The gap:**
Narrow. Possibly a lighter or cheaper tool for very small agencies, or one dedicated to 育成就労 transition paperwork. Incumbents are already updating, so this is unverified.

**Possible product:**
A register and report generator for agencies with fewer than 50 workers.

**MVP:**
Client and worker register, visit and audit log, templates for the new forms.

**Pricing hypothesis:**
15,000–40,000 yen/month per agency (estimate).

**How to find first customers:**
The published lists of 登録支援機関 (Immigration Services Agency) and 監理団体 (OTIT).

**Risks:**
Incumbents already exist, the buyer pool is relationship-driven, and the topic carries policy and reputational sensitivity.

**Kill condition:**
If small agencies already use G-WORKER, Linkus or similar at under 20,000 yen/month.

**Score:** 4/10

**Sources:**
- https://office-tree.jp/blog/immigration/ikusei-shuro-kanri-shien-kikan/
- https://www.itmedia.co.jp/itselect/employment-management-system-for-foreigners/
- https://beenos.com/file/press-release/6764/20250401_2_BHR.pdf
- https://www.beenos.com/file/press-release/7386/20260331_bhr_pr.pdf
- https://www.moj.go.jp/isa/content/001454514.pdf

## Rejected after competitor research

- **取適法 compliance ledger** (the first pass's top idea, 5/10, now rejected): freee 業務委託管理 launched a free plan (one partner per month) aimed at 取適法. freee サイン updated its plans for the law, and Money Forward publishes contract and 取適法 tooling. A stand-alone checker would be a feature, not a product.
- **Trucking 実運送体制管理簿 / contract documents:** トラックメイトPro5, ロジックス (アセンド), ロジポケ (X Mile), AEGISAPP and 25アプリ (ロジテック) already generate the ledger automatically.
- **Asbestos pre-survey to report, posting and records:** @-Rex (houtec), アスベストONE, metalab and アスレポ. The government system also accepts Excel bulk upload.
- **Fire-equipment inspection reports:** a free FDMA/総務省 inspection app that outputs a PDF, plus a standard ぴったりサービス e-form at 79% of fire HQs.
- **Septic maintenance records and prefectural ledger feeds:** at least six vertical packages (ミスターアクアX, 水顧電, EP3, エコまる, 穴吹ソフトプラス, 環境工学研究所).
- **Clean Wood Act legality records:** the free government クリーンウッドシステム (from 2025-04-01).
- **シラスウナギ traceability:** Denso's support system, and a tiny buyer pool.
- **Accommodation tax returns:** HOTEL SMART, AirHost and MujInn already automate calculation and return data.
- **Fluorocarbon logs:** RaMS and MELflo (first pass).
- **CCUS:** the official system and card readers (first pass).
- **Care-plan data exchange:** the free national system (first pass).
- **Logistics Efficiency Act reporting:** large shippers only, filed via e-Gov (first pass).

## Attractive problem, poor distribution

- **Industrial-waste collector multi-prefecture permits** (was 4/10): renewals every 5 years are too infrequent, and 行政書士 own the relationship.
- **Water-connection applications:** many tiny plumbing firms with low willingness to pay (kept above at 4/10 only because the MLIT standard form is a fresh trigger).
- **Funeral-home death registration (watch item):** a strong pattern similar to US EDRS, but online 死亡届 is not yet live in most municipalities. Revisit when the Digital Agency rollout (target around end of FY2026, unverified) actually starts.

## Too competitive

- Invoice and e-bookkeeping compliance: Money Forward, freee, Yayoi.
- Payroll and labour compliance, including stress checks: established HR SaaS.
- Chemical SDS and risk-assessment management (2026-04 expansion to about 2,900 substances): ケミカン and other SDS SaaS, plus the free CREATE-SIMPLE.
- EU CBAM emissions data for exporters: carbon-accounting SaaS and JETRO's free calculation manual. The 50 t threshold also shrinks the SME pool.
- Pharmacy 指定濫用防止医薬品 sales checks (2026-05): handled in POS and counter procedures.

## Inaccessible markets

None. Japan is open to foreign vendors, but a Japanese-language product, support and qualified-invoice billing are essential.

## Pass history

- **First pass (2026-10-04, 10 searches):** top ideas were 取適法 ledger 5/10, 育成就労 agencies 5/10 and waste-collector permits 4/10.
- **Deep pass (2026-10-05, about 45 searches, Japanese-language):**
  - Screened 15 more industries: trucking, asbestos, fire inspection, 12条 inspection, septic, construction soil, construction labour-cost rules, lodging tax, pharmacies, timber, fisheries, CBAM, chemicals, funeral, water connections.
  - Added two new opportunities: 日本版DBS workbench (6/10, now the top idea) and the JWNET 2027 再資源化 bridge (5/10).
  - Added the water-connection assistant (4/10).
  - Rejected 取適法: competitor diligence found the freee free plan and Money Forward tooling.
  - Downgraded 育成就労 to 4/10 after finding G-WORKER and Linkus.
  - Moved waste-collector permits to poor distribution.
  - Verified competitor names that were unverified in the first pass, where found. Remaining unverified items are marked inline.
