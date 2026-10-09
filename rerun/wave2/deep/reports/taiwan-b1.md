# Taiwan B1: Soil-hauling e-manifest, GPS and dispatch tool for small haulers

## Re-assessment (owner's criteria)

**Verdict: maybe. New score: 4/10. Old score: 3/10.**

**The case.** The free state system issues the manifest numbers and receives the GPS tracks. But it does not keep the hauler's or yard's own books. Contractors must file monthly flow reports per project and collect proof of disposal before completion. Haulers and soil subcontractors (土頭) must match trips to yard fees across many projects. No local product was found that links trips, state manifests and fees in one ledger. The opening is a modest, LINE-first trip ledger for soil subcontractors and yards. But there is no API, I found no evidence of pain with the portal itself, and the reachable revenue is small, so this is a weak "maybe", not a "go".

### Room for improvement over the portal or current practice

- **Monthly flow reports per project.** County rules make contractors file the source, destination, type and volume of soil online by the end of each month. The authority then checks it by the 5th of the next month. Chiayi City, Taitung and Taichung are examples ([Chiayi City ordinance](https://soilmove.nlma.gov.tw/files/text3/嘉義市營建剩餘土石方管理自治條例1130616.pdf); [Taitung ordinance](https://soilmove.nlma.gov.tw/files/text3/臺東縣營建剩餘土石方管理自治條例.pdf); [Taichung review rules](https://soilmove.nlma.gov.tw/files/text3/各縣市現有法規/臺中市公共工程賸餘土石方督導考核原則.pdf)). I saw these only in search summaries, because the PDFs blocked my fetches (unverified in full text). A tool could build these totals from a trip log.
- **Two-sided matching.** Both the outbound site and the receiving yard file data, and the state system cross-checks the two ([NLMA certificate forms](https://www.nlma.gov.tw/uploads/files/938e7a31f0d7b30ecd9173774e59dbbe.pdf), from a search summary). Mismatches have to be traced back to trips. The portal flags them but does not keep the hauler's trip records (unverified).
- **Completion file.** In Taichung, at the end of a building project the owner or builder must hand in a site record, proof of haulage, a disposal record and the system's monthly flow report ([Taichung UD document](https://www.ud.taichung.gov.tw/media/299781/6391047357.pdf)). That is a per-project document pack a tool could assemble.
- **Yard gate work.** In Tainan, yard staff check the e-manifest against GPS, the plate and the soil type, then scan a QR code and stamp before unloading. Bookings, payment and time slots go through the Public Works Bureau ([UDN money](https://money.udn.com/money/story/5621/9468612)). Yards also need heavy-metal and dioxin test reports for each source ([same](https://money.udn.com/money/story/5621/9468612)). A gate log tied to fees and test reports is a natural add-on.
- **Money at stake per trip.** Before 2026, transport ran at about NT$237/m³ and yard fees at about NT$184/m³ ([NCU study](https://rcsc.ncu.edu.tw/downloads/國內營造業營建剩餘土石方分包作業與成本組成分析之研究-全_250623.pdf)). Haulage costs then rose 5–10 times ([Sinotrade](https://www.sinotrade.com.tw/richclub/hotstock/%E5%9C%9F%E7%9F%B3%E6%96%B9%E6%B8%85%E9%81%8B%E6%96%B0%E5%88%B6%E6%98%AF%E4%BB%80%E9%BA%BC-%E7%82%BA%E4%BD%95%E5%BC%95%E7%88%86-%E6%B8%85%E9%81%8B%E6%B5%B7%E5%98%AF---%E5%8F%AF%E5%AF%A7%E8%A1%9B-%E6%B3%B0%E9%9C%96%E8%82%A1%E5%83%B9%E7%82%BA%E4%BD%95%E6%9A%B4%E8%A1%9D--%E8%82%A1%E5%B8%82%E8%A9%B1%E9%A1%8C-6964b36740a06825dbfa332d)). So a single missed or disputed trip is worth thousands of NT$ (unverified per-trip figure). Getting the trips and fees to reconcile has real value.
- **Evidence of portal pain is thin.** The 2026 "土方之亂" was about missing GPS units, full yards and costs, not about the e-manifest app itself ([UDN](https://udn.com/news/story/7314/9249045); [UDN, NLMA reply](https://udn.com/news/story/7238/9287792); [CNA](https://www.cna.com.tw/news/aipl/202601140206.aspx?topic=4874)). My searches for app crashes, user complaints or paid filing help found nothing (unverified, not proven absent). The NLMA itself promised to "simplify transport procedures", which suggests the process is felt as heavy ([UDN](https://udn.com/news/story/7238/9287792)).

### Competitor reality check

- **State soilmove system and app (free).** These issue serials, take e-manifests and receive GPS feeds ([NLMA forms](https://www.nlma.gov.tw/uploads/files/8f6891bc8b80c58f924e818423481113.pdf); [NLMA type approval](https://www.nlma.gov.tw/uploads/files/9b6e8f7f212c52a4b5872e8ea0d949fb.pdf)). They do not do dispatch, fee ledgers, statements or invoices (unverified; the system manual blocked my fetch).
- **瞰車大 (GPS vendor).** It lists a soil GPS unit at $380 and a fleet service at $350, with no cadence shown. It offers live tracking, trip reports, exception reports and "dispatch monitoring". It claims 30,000+ commercial vehicles. The page does not mention e-manifests, fees or billing ([LINE page](https://page.line.me/mhb6106n)). So it covers tracking, not the ledger. It is cheap and already in the truck, which makes it a strong partner or a fast follower.
- **天眼衛星 (SkyEyes).** It built Taichung's soil GPS app for drivers and police ([Taichung manual](https://conwast1.taichung.gov.tw/Upload/1110930APP操作手冊.pdf)). It sells a general fleet and transport-management system with dispatch, customer records and reminders ([SkyEyes products](https://www.skyeyes.tw/en/product.aspx); [App Store](https://apps.apple.com/tw/app/%E5%A4%A9%E7%9C%BC%E8%BB%8A%E9%9A%8A%E7%AE%A1%E7%90%86/id548129757)). I found no soil-specific ledger in its offer. Price is not public.
- **General driver-task apps.** One example is 展輝's 司機任務管理. It is a free B2B delivery app with no soil or manifest features and too few ratings to show ([App Store](https://apps.apple.com/tw/app/%E5%8F%B8%E6%A9%9F%E4%BB%BB%E5%8B%99%E7%AE%A1%E7%90%86/id6458100632)).
- **Foreign tools.** Tread, Dump Truck Dispatcher and Soil Connect eRegulatory do this exact job (dispatch, e-tickets, duplicate-ticket checks, manifests, invoicing) ([ForConstructionPros, Tread](https://www.forconstructionpros.com/home/product/22899957/tread-dump-truck-dispatch-management); [Capterra](https://www.capterra.ae/software/183624/dump-truck-dispatcher); [Soil Connect](https://www.constructionequipmentguide.com/soil-connect-announces-eregulatory-module/52516?markdown=1)). None is in Chinese or linked to soilmove. They show the product shape works abroad.
- **Conclusion.** No local product does the whole job. The incumbents are partial: the state does the filing, and GPS vendors do the tracking. This is an opening, not a killer. The risk is that a GPS vendor adds a ledger module cheaply.

### Price per customer

- **Owner-operator (1–3 trucks).** About NT$300 per truck per month at most. That is in line with the GPS vendor's $350 fleet service, if that fee is monthly ([LINE page](https://page.line.me/mhb6106n); cadence unverified). This segment is hard to sell to.
- **Soil subcontractor or hauling firm (10–50 trucks, many projects).** NT$3,000–8,000 per month (about US$95–250). That is less than one part-time clerk, and in a 2026 market with haulage costs up 5–10x, one prevented fee dispute pays for months of it ([Sinotrade](https://www.sinotrade.com.tw/richclub/hotstock/%E5%9C%9F%E7%9F%B3%E6%96%B9%E6%B8%85%E9%81%8B%E6%96%B0%E5%88%B6%E6%98%AF%E4%BB%80%E9%BA%BC-%E7%82%BA%E4%BD%95%E5%BC%95%E7%88%86-%E6%B8%85%E9%81%8B%E6%B5%B7%E5%98%AF---%E5%8F%AF%E5%AF%A7%E8%A1%9B-%E6%B3%B0%E9%9C%96%E8%82%A1%E5%83%B9%E7%82%BA%E4%BD%95%E6%9A%B4%E8%A1%9D--%E8%82%A1%E5%B8%82%E8%A9%B1%E9%A1%8C-6964b36740a06825dbfa332d)) (price unverified, no market quote found).
- **Soil yard (土資場).** NT$8,000–15,000 per month for a gate log, a fee ledger and a test-report file (unverified).
- **Fines as an anchor.** Hauling without a certificate costs NT$60,000–300,000 ([Changhua decision](https://general.chcg.gov.tw/files/20220307143655187_111－102%20違反廢棄物清理法事件.pdf)). Local fines for late monthly reports were not found (unverified).

### Revenue estimate (year 3)

- **Hauling firms.** No official count exists. With about 15,000 trucks ([Sinotrade](https://www.sinotrade.com.tw/richclub/hotstock/%E5%9C%9F%E7%9F%B3%E6%96%B9%E6%B8%85%E9%81%8B%E6%96%B0%E5%88%B6%E6%98%AF%E4%BB%80%E9%BA%BC-%E7%82%BA%E4%BD%95%E5%BC%95%E7%88%86-%E6%B8%85%E9%81%8B%E6%B5%B7%E5%98%AF---%E5%8F%AF%E5%AF%A7%E8%A1%9B-%E6%B3%B0%E9%9C%96%E8%82%A1%E5%83%B9%E7%82%BA%E4%BD%95%E6%9A%B4%E8%A1%9D--%E8%82%A1%E5%B8%82%E8%A9%B1%E9%A1%8C-6964b36740a06825dbfa332d)), I assume about 1,000 firms or 土頭 with 5+ trucks (unverified). 1,000 × 5% share = 50 firms × NT$5,000/month × 12 = **NT$3.0M**.
- **Yards.** About 140 yards ([CTEE](https://www.ctee.com.tw/news/20260105700140-439901)). 140 × 10% = 14 yards × NT$10,000/month × 12 = **NT$1.68M**.
- **Owner-operators (cross-check).** About 7,600 trucks were cleared to haul by 25 January 2026 ([UDN](https://udn.com/news/story/7238/9287792)). 7,600 × 3% = 228 trucks × NT$300 × 12 = NT$0.82M. I leave this out of the base case, because these buyers are hard to reach.
- **Total.** About **NT$4.7M a year (about US$145,000)** in year 3, at roughly NT$32 per US$ (rate unverified). With a GPS-vendor resale deal, this could be higher (unverified).

### Ease of implementation and sale

- **Build: medium.** A LINE bot trip log, photo or QR capture of manifests, per-project statements, monthly report totals and Excel export are simple to build. But there is no public API, and soilmove blocked automated access twice in this research. So users would still type data into the portal (no fetch succeeded; API absence unverified).
- **Sale: low to medium.** The trade is local, relationship-driven and partly informal ([NCU study](https://rcsc.ncu.edu.tw/downloads/國內營造業營建剩餘土石方分包作業與成本組成分析之研究-全_250623.pdf)). Selling needs Traditional Chinese, LINE support and in-person visits. Yards are the easiest door: there are about 140, and every truck passes their gate.
- **Channels.** GPS installers (who are also the likely competitors), yards, and contractor associations ([wantrich](https://wantrich.chinatimes.com/news/20260109900674-420501)).

### Remaining risks

- **Bundling.** GPS vendors with 30,000+ vehicles can add a ledger ([LINE page](https://page.line.me/mhb6106n)).
- **No API.** This means double entry, and no "file for me" feature is possible (unverified).
- **Rule churn.** Fixes have kept coming: dual-track GPS, small trucks allowed, A-to-C direct haul, and draft temporary-storage rules ([UDN](https://udn.com/news/story/7238/9287792); [CNA](https://www.cna.com.tw/news/aipl/202601140206.aspx?topic=4874)).
- **Correction to the first pass.** The April 2026 temporary-storage and CCTV rules were a draft amendment, decided in principle on 17 April, not final law ([wantrich](https://wantrich.chinatimes.com/news/20260418900068-420501)). Taiwan News reported that developers "welcomed the postponement of full enforcement to 2030". The article did not name an official decision or say which parts it covers ([Taiwan News](https://www.taiwannews.com.tw/news/6283440)). If part of the regime is phased to 2030, the urgency drops (unverified). In April 2026 the GPS and e-reporting duty was still described as in force ([wantrich](https://wantrich.chinatimes.com/news/20260418900068-420501)).
- **Updated GPS numbers.** By 25 January 2026, 6,512 trucks had applied and 5,888 were cleared. Adding 1,715 MOENV-equipped trucks gives 7,603 ([UDN](https://udn.com/news/story/7238/9287792)).

### New sources

- https://udn.com/news/story/7238/9287792
- https://www.cna.com.tw/news/aipl/202601140206.aspx?topic=4874
- https://www.taiwannews.com.tw/news/6283440
- https://wantrich.chinatimes.com/news/20260418900068-420501
- https://money.udn.com/money/story/5621/9468612
- https://page.line.me/mhb6106n
- https://soilmove.nlma.gov.tw/files/text3/嘉義市營建剩餘土石方管理自治條例1130616.pdf
- https://soilmove.nlma.gov.tw/files/text3/臺東縣營建剩餘土石方管理自治條例.pdf
- https://soilmove.nlma.gov.tw/files/text3/各縣市現有法規/臺中市公共工程賸餘土石方督導考核原則.pdf
- https://www.nlma.gov.tw/uploads/files/938e7a31f0d7b30ecd9173774e59dbbe.pdf
- https://www.ud.taichung.gov.tw/media/299781/6391047357.pdf
- https://www.skyeyes.tw/en/product.aspx
- https://apps.apple.com/tw/app/%E5%A4%A9%E7%9C%BC%E8%BB%8A%E9%9A%8A%E7%AE%A1%E7%90%86/id548129757
- https://apps.apple.com/tw/app/%E5%8F%B8%E6%A9%9F%E4%BB%BB%E5%8B%99%E7%AE%A1%E7%90%86/id6458100632
- https://www.forconstructionpros.com/home/product/22899957/tread-dump-truck-dispatch-management
- https://www.capterra.ae/software/183624/dump-truck-dispatcher
- https://www.constructionequipmentguide.com/soil-connect-announces-eregulatory-module/52516?markdown=1

## Summary

**Verdict: no-go. Score: 3/10.**

The duty is real and applies to every trip. Since 1 January 2026, every truck carrying construction surplus soil needs a type-approved GPS unit and a numbered transport certificate (e-manifest), under the NLMA's nationwide "full-flow" regime ([CTEE, 5 Jan 2026](https://www.ctee.com.tw/news/20260105700140-439901); [UDN, 29 Jan 2026](https://udn.com/news/story/124743/9296469)). But the state does the compliance part itself, for free. Manifest numbers are issued inside the state's soilmove system ([NLMA form notes](https://www.nlma.gov.tw/uploads/files/8f6891bc8b80c58f924e818423481113.pdf)). The GPS boxes send their tracks straight to an IP and port that the NLMA assigns ([NLMA type-approval procedure](https://www.nlma.gov.tw/uploads/files/9b6e8f7f212c52a4b5872e8ea0d949fb.pdf)). What is left for a newcomer is generic dispatch and billing for a fragmented, informal, regionally controlled trade. GPS vendors with installed fleets already sell that layer ([瞰車大 LINE page](https://page.line.me/mhb6106n)). No public API was found. The named killer: **the filing duty is fully covered by free state tools plus mandatory GPS hardware whose vendors own the customer relationship, so a compliance tool has nothing to sell; what remains is a plain fleet-software play.**

## Duty

- **Legal basis.**
  - Article 9(3) of the Enforcement Rules of the Waste Disposal Act (廢棄物清理法施行細則) lets the central competent authority set the format of the certificates that show where surplus soil came from and where it is going ([NLMA forms](https://www.nlma.gov.tw/uploads/files/8f6891bc8b80c58f924e818423481113.pdf); [Changhua appeal decision](https://general.chcg.gov.tw/files/20220307143655187_111－102%20違反廢棄物清理法事件.pdf)).
  - Waste Disposal Act Art. 9 and Art. 49(2) punish hauling soil without the certificate on board. The fine is NT$60,000–300,000, and the vehicle can be confiscated ([Changhua appeal decision](https://general.chcg.gov.tw/files/20220307143655187_111－102%20違反廢棄物清理法事件.pdf); summary of the [search results citing it](https://general.chcg.gov.tw/files/20220502120737812_111-304因違反廢棄物清理法事件.pdf)).
  - Media say trucks without approved GPS face the same NT$60,000–300,000 range ([ctee.com.tw coverage via search](https://www.ctee.com.tw/news/20260105700140-439901), the figure itself is unverified on that page).
  - The policy framework is the MOI's Construction Surplus Soil Handling Plan (營建剩餘土石方處理方案). The MOI treats it as an administrative rule. Enforcement is a local self-government matter ([Taipei law interpretation](https://laws.gov.taipei/law/Interpretation/Content/FE214927)).
- **The MOI rules behind the 2026 regime.**
  - On 18 July 2025 the MOI issued the vehicle real-time tracking spec (清除機具應裝置即時追蹤系統規範) ([thenewslens](https://www.thenewslens.com/article/263608)).
  - The certificate formats were dated around 31 July / 1 August 2025 and took effect on 1 January 2026 ([NLMA forms PDF](https://www.nlma.gov.tw/uploads/files/8f6891bc8b80c58f924e818423481113.pdf)).
- **What must be filed or kept.**
  - The NLMA publishes three certificate types: private works, public works, and yard-outbound. Each records the project or yard flow-control number, the head and trailer plates, the driver's name and ID, the route, the volume in m³, the soil code (B1–B7), the receiving site, and three timestamped signatures ([NLMA forms](https://www.nlma.gov.tw/uploads/files/8f6891bc8b80c58f924e818423481113.pdf)).
  - Serial numbers are valid only once the authority approves them in the 營建剩餘土石方資訊服务中心 system at soilmove.nlma.gov.tw ([same](https://www.nlma.gov.tw/uploads/files/8f6891bc8b80c58f924e818423481113.pdf)).
  - Each trip must carry proof that the truck's tracking unit is approved and working normally ([same](https://www.nlma.gov.tw/uploads/files/8f6891bc8b80c58f924e818423481113.pdf)).
- **The GPS spec.**
  - Units must report every 30 seconds, and every 5 seconds on command. They must store 90 hours of track and run 72 hours on a backup battery. They must signal power cuts and tilt alarms.
  - Units send data to the IP and port the NLMA assigns to its "全國營建剩餘土石方即時追蹤流向管控系統". The NLMA publishes the approved models ([NLMA type-approval procedure](https://www.nlma.gov.tw/uploads/files/9b6e8f7f212c52a4b5872e8ea0d949fb.pdf)).
  - The tracking data therefore goes from the box to the state. No hauler software sits in between.
- **Frequency.** The duty applies to every trip, at every entry and exit point ([CTEE](https://www.ctee.com.tw/news/20260105700140-439901)). At receiving yards, staff check the e-manifest (GPS), the plate and the soil, then scan a QR code before the truck may unload. Tainan is one example ([UDN money](https://money.udn.com/money/story/5621/9468612)).
- **Enforcement and turbulence.**
  - The launch caused the "土方之亂". At first, only about 2,000 of roughly 15,000 trucks were compliant ([Sinotrade](https://www.sinotrade.com.tw/richclub/hotstock/%E5%9C%9F%E7%9F%B3%E6%96%B9%E6%B8%85%E9%81%8B%E6%96%B0%E5%88%B6%E6%98%AF%E4%BB%80%E9%BA%BC-%E7%82%BA%E4%BD%95%E5%BC%95%E7%88%86-%E6%B8%85%E9%81%8B%E6%B5%B7%E5%98%AF---%E5%8F%AF%E5%AF%A7%E8%A1%9B-%E6%B3%B0%E9%9C%96%E8%82%A1%E5%83%B9%E7%82%BA%E4%BD%95%E6%9A%B4%E8%A1%9D--%E8%82%A1%E5%B8%82%E8%A9%B1%E9%A1%8C-6964b36740a06825dbfa332d)).
  - The Premier then approved "GPS dual-track" operation, voluntary GPS for small trucks, and temporary storage sites ([UDN, 29 Jan 2026](https://udn.com/news/story/124743/9296469)).
  - The NLMA gave a GPS buffer to the end of February ([UDN](https://udn.com/news/story/7314/9249045)).
  - In April 2026 the GPS requirement was extended to trucks serving new temporary storage sites, which also need CCTV ([China Times wantrich, 18 Apr 2026](https://wantrich.chinatimes.com/news/20260418900068-420501)). The regime has not been repealed.
  - I found no national count of fines issued under the new regime (unverified).
- **Local add-ons.**
  - Taoyuan's ordinance amendment adds e-manifests and GPS that must "work normally". It sets fines up to NT$100,000 per violation, and the building owner (起造人) is jointly liable ([UDN, Nov 2025](https://udn.com/news/story/7324/9157385)). Whether it was passed is unverified.
  - Taoyuan runs its own official app ([App Store](https://apps.apple.com/tw/app/%E6%A1%83%E5%9C%92%E5%B8%82%E7%87%9F%E5%BB%BA%E5%89%A9%E9%A4%98%E5%9C%9F%E7%9F%B3%E6%96%B9%E7%AE%A1%E7%90%86%E7%B3%BB%E7%B5%B1/id6445807036)), and so does Taichung ([Taichung app manual](https://conwast1.taichung.gov.tw/Upload/1110930APP操作手冊.pdf)).
- **Upcoming change.**
  - The Waste Disposal Act amendment passed third reading around 16 June 2026. It raises the maximum prison term for illegal dumping to 7 years ([PTS topic page](https://news.pts.org.tw/hotTopic/674); [PTS article](https://news.pts.org.tw/article/811457)).
  - The draft explanatory note listed "surplus soil flow tracking" and "electronic fence enforcement" among its aims ([Taichung-hosted draft note](https://www.links.taichung.gov.tw/media/1237531/廢棄物清理法部分條文修正草案總說明.pdf)). The 2025 draft would have let the MOI set national flow-reporting rules and penalties ([CTEE, Mar 2025](https://www.ctee.com.tw/news/20250318701255-430104)).
  - Whether the final text kept the soil clause is unverified. If it did, the direction is more state-run tracking, not less.

## Buyers

- **Trucks.**
  - There are about 15,000 gravel and soil trucks nationwide ([Sinotrade](https://www.sinotrade.com.tw/richclub/hotstock/%E5%9C%9F%E7%9F%B3%E6%96%B9%E6%B8%85%E9%81%8B%E6%96%B0%E5%88%B6%E6%98%AF%E4%BB%80%E9%BA%BC-%E7%82%BA%E4%BD%95%E5%BC%95%E7%88%86-%E6%B8%85%E9%81%8B%E6%B5%B7%E5%98%AF---%E5%8F%AF%E5%AF%A7%E8%A1%9B-%E6%B3%B0%E9%9C%96%E8%82%A1%E5%83%B9%E7%82%BA%E4%BD%95%E6%9A%B4%E8%A1%9D--%E8%82%A1%E5%B8%82%E8%A9%B1%E9%A1%8C-6964b36740a06825dbfa332d)).
  - The NLMA estimates about 6,000 trucks are needed per day. By 13 January 2026, 4,260 trucks had been fitted and cleared. Installs were running at about 200 trucks a day, and the NLMA said "over 34,000 vehicles" are under management ([NOWnews, 14 Jan 2026](https://www.nownews.com/news/6775655)).
  - Small trucks of 3.5–8 t may now carry soil if they have GPS ([same](https://www.nownews.com/news/6775655)).
- **Volume.** Surplus soil output was 36.86 million m³ in 2025, about 40 million m³ in a normal year, and 59.1% of it comes from the north ([NOWnews](https://www.nownews.com/news/6775655)). There are about 140 soil yards with an approved capacity of 100.88 million m³ ([CTEE](https://www.ctee.com.tw/news/20260105700140-439901)).
- **Firms.**
  - I found no official count of hauling firms (unverified). Many trucks are owner-operated or attached to a carrier (靠行) (unverified).
  - A National Central University study based on interviews with practitioners with 25+ years' experience gives this picture ([NCU study, 2025](https://rcsc.ncu.edu.tw/downloads/國內營造業營建剩餘土石方分包作業與成本組成分析之研究-全_250623.pdf)):
    - Main contractors hand soil work to local or regional soil subcontractors (土頭).
    - Quotes allow for local "soil associations, including unregistered ones" and "regional power figures".
    - Local players often agree among themselves before tendering.
  - This is a relationship-driven trade, partly informal.
- **How they comply today.**
  - Contractors and yards register projects on soilmove and get flow-control numbers. Authorities issue the certificate serials.
  - Drivers use the state e-manifest app. Yards scan QR codes at the gate.
  - GPS vendors install and register the boxes ([NLMA forms](https://www.nlma.gov.tw/uploads/files/8f6891bc8b80c58f924e818423481113.pdf); [UDN money, Tainan](https://money.udn.com/money/story/5621/9468612)).
  - Dispatch and billing are handled by phone and LINE, on paper or in Excel, or in the GPS vendor's platform (unverified, inferred).

## Competition

- **Free state tools.** soilmove.nlma.gov.tw handles project and yard registration and certificate serials. The state e-manifest app covers exit, entry and roadside checks ([newtalk](https://newtalk.tw/news/view/2025-05-22/972478); [NLMA forms](https://www.nlma.gov.tw/uploads/files/8f6891bc8b80c58f924e818423481113.pdf)). **The free state tool covers the filing itself.**
- **City systems.** Taoyuan has its own official app ([App Store](https://apps.apple.com/tw/app/%E6%A1%83%E5%9C%92%E5%B8%82%E7%87%9F%E5%BB%BA%E5%89%A9%E9%A4%98%E5%9C%9F%E7%9F%B3%E6%96%B9%E7%AE%A1%E7%90%86%E7%B3%BB%E7%B5%B1/id6445807036)). Taichung has an app built by 天眼衛星 ([manual](https://conwast1.taichung.gov.tw/Upload/1110930APP操作手冊.pdf)). New Taipei uses RFID gates at sites and yards ([Security World Market](https://www.securityworldmarket.com/int/Newsarchive/hundure-helps-city-manage-construction-waste)).
- **GPS vendors with fleet platforms.**
  - 瞰車大 lists its "營建剩餘土石方GPS" at $380 and its fleet management service at $350. The page does not say whether these are monthly or one-off.
  - It claims one box meets both the NLMA and MOENV specs. Its platform offers reports, live tracking, trip history and barcode-scanner integration. It claims 30,000+ commercial vehicles ([LINE page](https://page.line.me/mhb6106n)).
  - Other approved vendors exist, but I did not obtain the NLMA's approved list (unverified).
  - These vendors already sit in every compliant truck. They are the natural owners of any dispatch add-on.
- **Foreign dump-truck software.** SoilFLO, TRED, Toro TMS and Dump Truck Dispatcher do e-tickets and dispatch ([Tunneling Online](https://tunnelingonline.com/soilflo-replacing-paper-truck-tickets-with-real-time-load-tracking-software-for-tunneling-projects/); [Toro TMS](https://www.torotms.com/feature/dump-truck-software); [Capterra](https://www.capterra.com/p/183624/Dump-Truck-Dispatcher/)). None is localized to Taiwan or linked to soilmove.
- **Gap.** I found no Taiwanese SaaS that links dispatch, state manifests and yard fees in one ledger. But that gap is not a compliance duty.

## Willingness to pay

- **Fines.** Hauling without the certificate costs NT$60,000–300,000 under WDA Art. 49(2) ([Changhua decision](https://general.chcg.gov.tw/files/20220307143655187_111－102%20違反廢棄物清理法事件.pdf)). Taoyuan's draft adds up to NT$100,000 per violation, payable by the owner ([UDN](https://udn.com/news/story/7324/9157385)). These fines push haulers to buy GPS and use the free app, not third-party software.
- **Cost of haulage.**
  - Hauling costs rose 5–10x in early 2026 ([Sinotrade](https://www.sinotrade.com.tw/richclub/hotstock/%E5%9C%9F%E7%9F%B3%E6%96%B9%E6%B8%85%E9%81%8B%E6%96%B0%E5%88%B6%E6%98%AF%E4%BB%80%E9%BA%BC-%E7%82%BA%E4%BD%95%E5%BC%95%E7%88%86-%E6%B8%85%E9%81%8B%E6%B5%B7%E5%98%AF---%E5%8F%AF%E5%AF%A7%E8%A1%9B-%E6%B3%B0%E9%9C%96%E8%82%A1%E5%83%B9%E7%82%BA%E4%BD%95%E6%9A%B4%E8%A1%9D--%E8%82%A1%E5%B8%82%E8%A9%B1%E9%A1%8C-6964b36740a06825dbfa332d)).
  - Before that, public-works budgets showed transport at about NT$237/m³ and yard fees at about NT$184/m³ ([NCU study](https://rcsc.ncu.edu.tw/downloads/國內營造業營建剩餘土石方分包作業與成本組成分析之研究-全_250623.pdf)). Taipei Port charges NT$240/m³ ([same](https://rcsc.ncu.edu.tw/downloads/國內營造業營建剩餘土石方分包作業與成本組成分析之研究-全_250623.pdf)).
  - The money is in the soil fees, not in admin time.
- **Software price anchor.** The approved GPS vendor's fleet service is listed at about $350, cadence unclear ([LINE page](https://page.line.me/mhb6106n)). A plausible separate dispatch and ledger SaaS might fetch NT$300–800 per truck per month (unverified). The only cost it saves is clerk time on reconciliation.

## Channels

- **GPS installers and approved vendors.** They are the strongest channel, because every compliant truck passes through them ([NLMA type approval](https://www.nlma.gov.tw/uploads/files/9b6e8f7f212c52a4b5872e8ea0d949fb.pdf)). They are also the most likely competitors.
- **Soil yards (土資場, about 140).** They are a natural hub because every truck checks in at their gates ([CTEE](https://www.ctee.com.tw/news/20260105700140-439901)). A yard-side gate, weighing and billing tool could reach many haulers through a few yards.
- **Associations.** The developers' federation (台灣省不動產建築開發商業同業公會聯合會) has been vocal ([wantrich](https://wantrich.chinatimes.com/news/20260109900674-420501)). Local soil associations exist, some unregistered ([NCU study](https://rcsc.ncu.edu.tw/downloads/國內營造業營建剩餘土石方分包作業與成本組成分析之研究-全_250623.pdf)). Gravel-truck associations probably exist too (unverified).
- **Contractors' safety and environment staff.** These are main contractors that must prove soil disposal before a use permit is issued (unverified).

## Risks

- **The state owns the core.** Certificates are serialized in soilmove, and GPS feeds go straight to the NLMA ([NLMA forms](https://www.nlma.gov.tw/uploads/files/8f6891bc8b80c58f924e818423481113.pdf); [type approval](https://www.nlma.gov.tw/uploads/files/9b6e8f7f212c52a4b5872e8ea0d949fb.pdf)). The state could add features at any time.
- **No public API.** I found no API or data-export spec. The soilmove site rejected automated access during this research. Any integration would mean double entry or scraping (unverified).
- **Incumbents bundle.** Approved GPS vendors with large fleets can add dispatch cheaply ([LINE page](https://page.line.me/mhb6106n)).
- **Market structure.** The trade is small, fragmented and relationship-driven, with informal local power ([NCU study](https://rcsc.ncu.edu.tw/downloads/國內營造業營建剩餘土石方分包作業與成本組成分析之研究-全_250623.pdf)). Owner-operators are price-sensitive.
- **Rule churn.** The regime has already changed several times: dual-track GPS, small trucks allowed in, storage sites added, and the WDA amended in June 2026 ([UDN](https://udn.com/news/story/124743/9296469); [wantrich](https://wantrich.chinatimes.com/news/20260418900068-420501); [PTS](https://news.pts.org.tw/hotTopic/674)).
- **Language and trust.** A foreign founder would need Traditional Chinese, LINE-first support and local presence.
- **Liability.** A wrong manifest could expose users to the NT$60,000–300,000 fines.

## First product

Do not build a compliance filer. The only defensible angle is a **yard-side or subcontractor ledger**. If tested at all, it should do this:

1. **Trip log.** Capture each trip: plate, driver, project flow number, soil code, m³, yard, fee. Input could come from a photo of the e-manifest or QR screen, or from a LINE bot. No state integration in v1.
2. **Statements.** Produce per-project and per-truck statements, with yard-fee reconciliation. Export to Excel and invoice drafts.
3. **Pilot with yards.** Offer a gate log for yards that ties trips to fees owed by each subcontractor.

**30 days.** Spend the first 2 weeks on interviews: 10 soil subcontractors, 5 yards and 2 GPS vendors. Confirm the pain and whether a vendor partnership (white-label) is possible. Then build a LINE-bot trip logger and a Google-Sheets-style ledger. Charge a pilot fee. Stop if the GPS vendors already offer it or if no yard will pilot.

## Open questions

- Does soilmove or the e-manifest app offer any API or batch export to authorized third parties? (unverified)
- What is the full NLMA list of approved GPS vendors, and which of them bundle dispatch and billing? (unverified)
- Did the WDA text passed in June 2026 add national soil-flow reporting duties and penalties? When do they start? (unverified)
- How many registered hauling firms are there, and how many are owner-operators? (unverified)
- How many fines have been issued under the new regime? (unverified)

## Sources

- https://www.nlma.gov.tw/uploads/files/8f6891bc8b80c58f924e818423481113.pdf
- https://www.nlma.gov.tw/uploads/files/9b6e8f7f212c52a4b5872e8ea0d949fb.pdf
- https://general.chcg.gov.tw/files/20220307143655187_111－102%20違反廢棄物清理法事件.pdf
- https://general.chcg.gov.tw/files/20220502120737812_111-304因違反廢棄物清理法事件.pdf
- https://laws.gov.taipei/law/Interpretation/Content/FE214927
- https://www.ctee.com.tw/news/20260105700140-439901
- https://www.ctee.com.tw/news/20250318701255-430104
- https://udn.com/news/story/124743/9296469
- https://udn.com/news/story/7314/9249045
- https://udn.com/news/story/7324/9157385
- https://money.udn.com/money/story/5621/9468612
- https://www.nownews.com/news/6775655
- https://wantrich.chinatimes.com/news/20260418900068-420501
- https://wantrich.chinatimes.com/news/20260109900674-420501
- https://news.pts.org.tw/hotTopic/674
- https://news.pts.org.tw/article/811457
- https://www.links.taichung.gov.tw/media/1237531/廢棄物清理法部分條文修正草案總說明.pdf
- https://www.thenewslens.com/article/263608
- https://newtalk.tw/news/view/2025-05-22/972478
- https://www.sinotrade.com.tw/richclub/hotstock/ (土石方清運新制 article, full URL above)
- https://rcsc.ncu.edu.tw/downloads/國內營造業營建剩餘土石方分包作業與成本組成分析之研究-全_250623.pdf
- https://page.line.me/mhb6106n
- https://apps.apple.com/tw/app/%E6%A1%83%E5%9C%92%E5%B8%82%E7%87%9F%E5%BB%BA%E5%89%A9%E9%A4%98%E5%9C%9F%E7%9F%B3%E6%96%B9%E7%AE%A1%E7%90%86%E7%B3%BB%E7%B5%B1/id6445807036
- https://conwast1.taichung.gov.tw/Upload/1110930APP操作手冊.pdf
- https://www.securityworldmarket.com/int/Newsarchive/hundure-helps-city-manage-construction-waste
- https://tunnelingonline.com/soilflo-replacing-paper-truck-tickets-with-real-time-load-tracking-software-for-tunneling-projects/
- https://www.torotms.com/feature/dump-truck-software
- https://www.capterra.com/p/183624/Dump-Truck-Dispatcher/
