# Taiwan: Offline-industries pass

Research date: 2026-10-05. 24 WebSearch calls in Traditional Chinese. The search tool returned a usage-limit error on call 25, so I stopped there, below the 40-call budget. WebFetch and GitHub tools were not used. Some counts below come only from search-result snippets and are marked as such.

**Bottom line:** Taiwan's regulators digitised quiet industries early and often **gave the software away**. The pesticide-dealer register is a free government POS, used by about 75% of retail dealers. Fish landing declarations have a free government web page and app. Motorcycle emission stations upload in real time. The egg-washing traceability system belongs to the government. As a result, most quiet industries here have no paper gap to close. The remaining gaps are small: daily anti-theft logs plus a monthly declaration at recycling yards, and breeding-limit record-keeping at licensed pet breeders. **Nothing reaches the "build" bar.** The two best ideas would need a Mandarin-speaking local and face a small market with thin margins.

---

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Recycling yards (應回收廢棄物回收業) | Monthly operating declaration (by the 15th) to the registration authority; **daily** log of waste cable, iron doors, manhole covers and other designated items (item, quantity, date, source, destination), kept 5 years | Declaration is online, but the daily log is kept by the yard in any form it likes. General inventory tools and Chinese weighbridge systems exist; I found no Taiwan-specific product that produces the log | Register exists as an open dataset (data.gov.tw 6358); count **not verified** | **Weak opportunity** | Real recurring duty tied to cable theft, but buyers are small cash businesses and the monthly declaration portal is free |
| Licensed pet breeders / sellers / boarders (特定寵物業) | Breeding log (mating, litters) kept 3 years; sales log kept 3 years; **quarterly microchip-usage report** to the county (by end Jan/Apr/Jul/Oct); breeding limits (≥1 yr old, ≤3 litters in 2 years, ≤7 lifetime, neuter at >7 yrs) | County bureaus publish paper record templates (Taichung, Hsinchu) | Taipei 193 licensed (Taipei animal-protection office); national list on data.gov.tw 97070, total **not verified** | **Weak opportunity** | Paper templates and breeding-limit rules suit software, but the market is small, there is no 2025–26 trigger, and fines (NT$40k–200k) are rarely reported |
| Septic tank cleaning (化糞池 / 水肥) | Building owners or managers must clean every 1–2 years through a licensed hauler and declare it to the county environmental bureau (New Taipei: keep the drop-off station record, then fill in the bureau's declaration page) | Declaration form differs by county; Keelung uses a downloadable form | Haulers: listed in the MOENV licensed-facility system, count **not verified** | **Weak** | Fragmented by county, but the obliged party is the building owner and the frequency is annual; the hauler doing it as a courtesy is the substitute |
| Pesticide dealers (農藥販賣業) | Record every purchase and sale; real-name buyer registration since 2021-07-01; quarterly report (Jan/Apr/Jul/Oct 15) or continuous POS reporting; fines NT$15k–150k | **Not offline:** about 75% of retailers already use the government-promoted POS; the free 農藥販賣管理資訊系統 is installed at 600+ dealers; equipment was subsidised up to NT$15k | About 3,614 operating of about 5,840 registered (Control Yuan figure via MOA page) | **Rejected** | Regulator built and subsidised the software |
| Egg-washing stations (洗選場) | From 2026-07-01, every washed egg must be printed and logged daily in the national egg-traceability system before shipping; fines up to NT$30k per violation | Government system; data entry by farm batch | 102 washing sites (up from 42) | **Rejected** | Strong 2026 trigger, but only about 100 buyers |
| Coastal fishing vessels | Landing declarations (卸魚聲明); paper plus new web and app channels | Reporting rate around 50%, target 80% | About 3,500 vessels (Fisheries Agency, via 農傳媒) | **Rejected** | Free government app; fishers won't pay |
| Motorcycle emission test stations | Annual test for bikes over 5 years old; results uploaded | Real-time upload to MOENV from certified stations | 3,770 stations | **Rejected** | Already fully electronic |
| Home childminders (居家托育人員) | Report enrolment changes within 7 days; contract and change notices under the quasi-public scheme; annual evaluation | Visits and paperwork run through government-funded childcare service centres | Count **not found** | **Rejected** | The service centre acts as a free clerk, and childminders have little to spend |
| Jewellers (銀樓業) | AML: identify customer and report cash transactions ≥NT$500k to the MJIB within 5 business days | MOEA publishes guidance booklets | Count **not found** | **Rejected** | Trigger events are rare for small shops; low frequency |
| Pawnshops (當舖業) | Pawn register (當簿); copies to police every two weeks; licences capped by population | Paper register sent to police | Count **not found** | **Not assessed** | Searches ran out before I could check the software landscape. The number of shops is capped, so the market is small |
| Household employers of foreign caregivers | Fixed monthly wage (NT$20,000), employment stabilisation fee (NT$2,000), NHI, occupational injury insurance | Brokers (仲介) handle the paperwork for a monthly service fee | Count **not verified** (the search hit the usage limit) | **Rejected (provisional)** | The broker is the substitute; the amounts are fixed, so there is little to compute |
| Funeral ritual services (殯葬禮儀服務業) | 殯葬管理條例 | Searches returned PRC rules (effective 2026-03-30), not Taiwan rules | Not found | **Not assessed** | No Taiwanese trigger found |

---

## 2. Opportunities

### Opportunity: Recycling-yard daily theft-item log and monthly declaration helper

**Industry:**
Registered recycling yards (應回收廢棄物回收業) buying scrap metal, cable and household recyclables.

**Buyer:**
Owner-operator of a family recycling yard (資源回收場), usually older, who runs a weighbridge and pays cash.

**Trigger / Why now:**
There is no 2026 trigger for the daily log, which is a standing rule. A possible future trigger is the Waste Disposal Act and Resource Circulation Promotion Act amendments, which the Executive Yuan passed in April 2026 and sent to the Legislative Yuan. Whether they apply to small yards is **unverified**. Cable theft from Taipower is an ongoing enforcement theme.

**Current workflow:**
1. A seller arrives and the load is weighed on the weighbridge. A paper or simple-POS purchase slip is written.
2. Yard staff record each designated item (waste cable, iron doors, manhole covers and others) in a daily log with quantity, date, source and destination, and keep it 5 years.
3. Each month, before the 15th, someone keys the previous month's operating figures into the MOENV online declaration system.

**Pain:**
The daily log is mandatory and can be inspected. MOENV inspectors have found stolen Taipower high-voltage aluminium cable (2,731 kg) at a yard (e-info.org.tw). The monthly declaration is a second keying of the same data. Hours lost and fine levels for a missing log are **not verified**.

**Existing solutions:**
- MOENV / 資源循環署 online declaration system (free).
- Generic Taiwanese inventory software (普大, free single-PC tools discussed on Mobile01).
- Weighbridge-integrated recycling systems (autoidasia material-recovery weighing; Chinese recycling-factory systems such as Simplico's), which do weigh, receipt and stock but aren't tied to Taiwan's designated-item log.
- Paper notebooks.

**Offline evidence:**
The log format is left to the yard. I found no Taiwan vendor that markets a "回收業逐日紀錄" product. Operators don't appear on forums.

**Offline channel:**
The public register of recycling yards (data.gov.tw 6358) has addresses, so the first 10 can be reached by phone or visit. Weighbridge installers and calibration firms visit every yard. A recycling association exists but was **not verified**.

**Market count:**
Registered yards are listed in data.gov.tw dataset 6358. The total is **not verified**. My estimate is low thousands.

**The gap:**
One weigh-in record could produce both the designated-item daily log (in a format inspectors accept) and the monthly declaration figures. Nobody joins these today.

**Possible product:**
A tablet app at the weighbridge. Staff photograph the seller ID and the load, pick the item category, and the scale weight is entered. The app keeps the 5-year designated-item log and exports the monthly declaration totals.

**MVP:**
A mobile form with a fixed category list, a seller-ID photo, a printable daily log PDF, and a monthly summary laid out like the declaration screens.

**Pricing hypothesis:**
NT$500–1,000/month (about US$15–30). Buyers would mostly pay for a done-for-you service plus a printed log, not for software alone.

**How to find first customers:**
Phone outreach from the data.gov.tw register, partnership with weighbridge suppliers, visits in one county.

**Risks:**
Cash businesses avoid recording seller identity. The MOENV system may add its own log. A non-local founder can't sell this; it needs a Mandarin or Taiwanese speaker who visits yards.

**Kill condition:**
Inspectors accept any notebook and yards are never fined for the log, or the register shows fewer than about 1,000 yards.

**Score:** 4/10

**Sources:**
- https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=O0050051 (回收處理業管理辦法: monthly declaration, daily designated-item log, 5 years)
- https://data.gov.tw/dataset/6358
- https://www.reca.gov.tw/OnlineDeclaration
- https://e-info.org.tw/node/20300
- https://ncsd.ndc.gov.tw/Fore/News_detail/7d7b86b1-36d6-4697-b905-18df5777db54
- https://www.autoidasia.com/material-recovery-weighing-system/

### Opportunity: Breeding-limit register and quarterly chip report for licensed pet breeders

**Industry:**
Licensed dog and cat breeders and sellers (特定寵物業: 繁殖, 買賣).

**Buyer:**
Owner of a small licensed kennel or cattery, or of a pet shop selling puppies and kittens.

**Trigger / Why now:**
There is no 2025–26 trigger. The rules date from the 2017 amendment, later extended to cats. The why-now is weak.

**Current workflow:**
1. Fill in county paper templates: the care-record form (飼養管理與照護紀錄表), mating and litter records, and the sales record form. Keep them 3 years.
2. Track each breeding animal's age, litters in the last 2 years, lifetime litters, and neutering after age 7, by hand.
3. Before the end of January, April, July and October, compile the microchip-usage table and send it to the county authority.

**Pain:**
Breeding limits are easy to breach without a per-animal count. The fine range is NT$40k–200k. How often fines are actually imposed was **not verified**.

**Existing solutions:**
- County paper templates (Taichung, Hsinchu).
- The national pet registration system (寵物登記管理資訊網), for chip registration.
- Marketplaces such as stork.pet that target licensed sellers.
- Generic kennel software (not Taiwan-specific).

**Offline evidence:**
Counties publish downloadable paper record templates. Accountants (for example a vocus.cc guide by a CPA) handle licensing.

**Offline channel:**
The legal-operator list on data.gov.tw (97070) and city lists (Taipei 193) give names and addresses. County animal-protection offices run annual training, which licensed staff must attend.

**Market count:**
Taipei has 193 licensed operators. The national total is **not verified**. My estimate is 2,000–4,000, and many of those are boarding-only.

**The gap:**
No Taiwanese tool turns per-animal records into an automatic breeding-limit check plus the quarterly chip table and records in county format.

**Possible product:**
A per-animal register that warns before a mating that would breach a limit and generates the quarterly chip-usage table and record forms.

**MVP:**
A mobile web app with animal profiles, litters, sales and chip numbers, plus PDF export of the county templates.

**Pricing hypothesis:**
NT$300–600/month. Low willingness to pay.

**How to find first customers:**
Phone the data.gov.tw licensed list; attend county training sessions.

**Risks:**
The government may add these functions to the pet registration system. The market is small. Breeders sensitive to enforcement may prefer paper. A local founder is needed.

**Kill condition:**
Fewer than about 1,500 breeding and selling licences nationally, or counties never check the breeding-limit records.

**Score:** 4/10

**Sources:**
- https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=M0060031
- https://www.moa.gov.tw/ws.php?id=19296
- https://data.gov.tw/dataset/97070
- https://www.tcapo.gov.taipei/cp.aspx?n=760A1BD5107F3CCC
- https://www.animal.taichung.gov.tw/media/1275776/%E9%A3%BC%E9%A4%8A%E7%AE%A1%E7%90%86%E6%89%80%E9%9C%80%E6%96%87%E4%BB%B6-%E5%85%A8.pdf
- https://apc.hsinchu.gov.tw/%E7%89%B9%E5%AE%9A%E5%AF%B5%E7%89%A9%E6%A5%AD%E7%AE%A1%E7%90%86%E7%9B%B8%E9%97%9C%E8%A1%A8%E5%96%AE/

---

## 3. Rejected

- **Pesticide dealer register (農藥販賣業).** This looked ideal: about 3,614 small shops, real-name sales since 2021, quarterly reports and fines of NT$15k–150k. It was killed because the regulator supplies the software. About 75% of retailers use a government-promoted POS that reports continuously, the free 農藥販賣管理資訊系統 is installed at 600+ dealers, and hardware was subsidised. Sources: https://www.moa.gov.tw/ws.php?id=2504874 , https://www.agriharvest.tw/archives/62390/ , https://www.moa.gov.tw/ws.php?id=2503151
- **Egg-washing traceability (2026-07-01).** The trigger and the daily duty are real, but there are only 102 washing sites, and the logging system belongs to the government. Sources: https://newtalk.tw/news/view/2026-09-13/1059479 , https://health.udn.com/health/story/5999/9599526
- **Coastal fishing landing declarations.** About 3,500 vessels; a free government app and web channel; fishers won't pay. Source: https://www.agriharvest.tw/archives/60336/
- **Motorcycle emission test stations.** 3,770 stations already upload in real time to MOENV. Source: https://free.com.tw/motorim/
- **Septic declarations.** The obligation sits with building owners and recurs once a year. The hauler or building manager handles it. Source: https://www.epd.ntpc.gov.tw/Article/Info?ID=9654
- **Household caregiver employers.** Wage and fees are fixed, and brokers do the paperwork for a monthly fee. Market size was not verified. Source: https://www.21manpower.com.tw/foreign-workers/482/
- **Jewellers' AML.** The NT$500k cash threshold makes reportable events rare for small shops. Source: https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=J0080049
- **Home childminders.** Government-funded service centres already act as the clerk.

## 4. Method notes

- What worked: Traditional Chinese queries naming the specific 管理辦法 or 申報 term (for example "農藥管理法第三十五條 定期陳報", "回收業 逐日記錄"). They led straight to the law database, open-data registers (data.gov.tw) and MOA explainers that state adoption rates.
- The decisive check in Taiwan is "has the regulator already shipped a free system or POS?" The answer was usually yes.
- What didn't work: Taiwan funeral queries returned PRC results. Industry counts are rarely in snippets; data.gov.tw datasets hold them, but WebFetch was blocked so I couldn't open them. The search tool hit a usage limit after 24 calls, so I never checked the pawnshop or caregiver counts.
