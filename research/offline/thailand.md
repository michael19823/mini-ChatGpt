# Thailand: offline-industries pass

Research date: 2026-10-05. 20 WebSearch calls were used (budget 40). The pass was cut short by an API usage limit, and the coordinator asked for the report to be written from the evidence already gathered. WebFetch was not used. Most facts come from search-engine summaries of the cited pages, mostly Thai-language government and news pages, not from reading the pages in full. Facts not tied to a cited source are marked "unverified" or "estimate". The existing country report (`research/countries/thailand.md`) already covers factory environmental reporting, waste manifests, durian packing houses, inspection firms, CBAM, EUDR, pharmacies, cannabis, trucking GPS, TM30 and foreign-worker 90-day reports. None of those are repeated here.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Households employing maids, gardeners and drivers | A draft royal decree brings them under compulsory Social Security s.33: register the employer and the worker, then pay contributions monthly | Households have never had an SSO employer account. Filing happens at the SSO counter or through e-service | Part of about 1.05M new insured persons by 2030 (Cabinet, 25 Aug 2026) | **Lead** (merged into Opp. 1) | Brand-new mandatory monthly duty for non-business employers. Low willingness to pay per household. |
| Farm employers (cultivation, forestry, livestock) | The same decree brings their employees, Thai and migrant, into s.33 | Orchards and farms run on cash wages and paper. Migrant paperwork is done by agents | Within the 1.05M (Cabinet) | **Best lead** (Opp. 1) | Business buyers with migrant workers. A new monthly SSO duty sits on top of work permits. |
| Street-stall owners with employees | The same decree covers employees of stalls with a fixed location, stall number and lease | Cash businesses with no payroll tools | Within the 1.05M (Cabinet) | Merged into Opp. 1 | Tiny buyers with low willingness to pay. Reachable only through market operators. |
| Agricultural hazardous-substance (pesticide) shops | DOA retail licence and a trained "sales controller" on site. Restricted-use glyphosate requires separate display, checking the buyer's training proof and recording quantities sold for DOA | Paper registers. A 2020 civil-society survey found the restricted-use measures were poorly followed | 36,041 farm-input shops and 2,306 Q-shops (DOA, 2026) | **Lead** (Opp. 2) | Large registered base and a DOA training pipeline. Reporting format and frequency unverified. |
| Scrap and second-hand dealers (ร้านรับซื้อของเก่า) | Annual licence from the district (DOPA) under the 1931 Auction and Antique Trading Act, with police fingerprint vetting. Purchase book open to police | Licences are renewed at the district office every December. Buy books are paper | Per-province licensed-shop datasets on gdcatalog.go.th. National total not found (unverified) | **Lead** (Opp. 3) | 2026 copper-cable theft crackdowns are revoking licences. Low willingness to pay. |
| Gold shops | AMLO s.16 reporting: identify customers at THB 100k or more, report cash deals of THB 2M or more within 7 days after each half-month, plus suspicious-transaction reports | AMLO forms (ปปง. 1-03 and others). The Gold Traders Association distributes paper guides | About 6,000 shops (per search summary of Thai news) | Weak lead (Opp. 4) | Strong association channel, but gold-shop POS vendors probably cover it (unverified). |
| Slaughterhouses | DLD licence, slaughter notification, vet inspection | Already digitised in the free DLD e-SLIMS portal | Not found | Reject | The government portal covers licensing, notification and inspection. |
| Livestock movement / traders | DLD e-Movement permits | Free government system | Not found | Reject | Carried over from the country report. No pain found. |
| Elderly-care businesses | Health Establishments Act licence (HSS), in force since 27 Jan 2021 | HSS licence lists exist | Not found | Reject | The trigger is 5 years old, and operators are more online than "quiet". |
| Driving schools | DLT certification, certificates of training results | Schools are web-present and marketing-heavy | Not found | Reject | Not a quiet industry. DLT runs the exam flow. |
| Maize collectors (ลานรับซื้อข้าวโพด) | 2026 "burn-free" rules: four Commerce regulations in force since 1 Jan 2026 require burn-free certificates and source-plot data for **imported** maize and wheat | Domestic burn-free buying runs through co-ops and feed mills | Not found | Watch | Today the duty falls on importers and large feed mills, not on small collectors. Revisit if it extends to domestic collectors. |
| Rice mills and rice traders | Commerce Ministry (DIT) stock monitoring | DIT inspections. 217 mills joined the 2025/26 stock-subsidy scheme | 217 scheme mills (MOC) | Inconclusive | No recurring mandatory stock-report form was confirmed in one search. |
| Pawnshops, money changers, massage shops, tattoo studios | Various licences | — | — | Not searched | Out of budget after the usage-limit interruption. |

## 2. Opportunities

### Opportunity: SSO s.33 Onboarding and Monthly Contribution Desk for Farm and Household Employers

**Industry:**
Agriculture (orchards, plantations, livestock farms), households employing domestic workers, and street-stall owners.

**Buyer:**
Mainly owners of durian, longan, rubber and palm orchards and of pig, poultry and dairy farms who employ year-round workers, often migrants from Myanmar, Cambodia or Laos. The secondary buyers are urban households (including expats) employing maids and drivers.

**Trigger / Why now:**
On 25 Aug 2026 the Cabinet approved in principle a draft royal decree. It brings three previously exempt groups into compulsory Social Security s.33:
- employees in cultivation, forestry and livestock;
- employees of individual employers (maids, gardeners, drivers, house guards);
- employees of street stalls with a fixed location.

Thai and foreign workers are both covered. The Council of State extended the lead time from 60 to 180 days after publication. The ministry expects more than 1.05M new insured persons by 2030. Contributions are 5% from each side on wages of THB 1,650–17,500 (2026 ceiling). Government think-tanks have warned about the burden on employers. The decree still has to be published in the Royal Gazette, so the effective date is likely around H1 2027 (estimate).

**Current workflow:**
1. The employer registers as an SSO employer (สปส.1-01) and registers each worker (สปส.1-03) within 30 days of hiring, at the provincial SSO counter or via SSO e-service.
2. Every month the employer computes 5% plus 5% on each wage, files สปส.1-10 and pays by the 15th. The employer also reports leavers (สปส.6-09).
3. For migrant workers, the employer separately keeps the work permit, visa and 90-day report current, usually through a licensed import agent or a local "nai na" broker. Name and ID changes have to be kept consistent across DOE and SSO.

**Pain:**
- This is a new mandatory monthly duty for employers who have never run payroll. Many pay cash wages, and seasonal headcount fluctuates.
- Migrant workers' identity documents change at renewal (pink card, passport or CI), so the SSO record drifts out of line with the DOE record (estimate, based on known migrant-document churn).
- Officials and think-tanks flag cost-of-living and employer-burden concerns (Thansettakij, InfoQuest).

**Existing solutions:**
- SSO e-service and counters (free).
- Licensed migrant-worker import agencies and informal brokers, who already handle the work permits.
- Local accounting offices.
- Thai payroll SaaS (empeo, HumanSoft and others), which are built for companies with HR staff, not for an orchard owner with 6 workers.
- Maid-placement agencies, which may bundle SSO for households (unverified).

**Offline evidence:**
These employers have never filed SSO forms. Orchard wages are cash. Migrant paperwork runs through brokers and counters, not software. No Thai product aimed at "household or farm employer SSO" was found (the search was limited, so this is unverified).

**Offline channel:**
- Migrant-worker import agencies and brokers. They already hold the employer and worker files and could resell or white-label the service.
- Provincial SSO and DOE briefing sessions that will follow the decree.
- Durian and longan grower co-ops and packing houses (ล้ง), which already convene orchard owners. The country report counts 1,926 GMP-DOA packing houses.
- Fresh-market operators for stall employers.

**Market count:**
About 1.05M new insured persons by 2030 (Cabinet figure). The number of employers is not published. At an estimated 2–5 workers per employer, that is roughly 200k–500k employers (estimate).

**The gap:**
No tool combines (a) SSO registration and the monthly สปส.1-10 for an employer with no HR function, (b) seasonal joiners and leavers, and (c) migrant document expiry (work permit, visa, 90-day), in Thai, Burmese and Khmer, over LINE.

**Possible product:**
A LINE-based "employer desk":
- The owner messages a headcount change or a wage.
- The service prepares and files the SSO contribution and the joiner/leaver forms.
- It warns before work permits and 90-day reports fall due.
- It sells done-for-you per worker, through brokers.

**MVP:**
A spreadsheet-backed back office plus a LINE OA. It covers employer registration, monthly สปส.1-10 preparation with a payment reminder, and a document-expiry calendar per worker. Filing is done by the founder's staff via SSO e-service.

**Pricing hypothesis:**
THB 100–150 per worker per month done-for-you (estimate), or THB 300–500 per month per household. Brokers currently charge one-off fees for permits (amount unverified).

**How to find first customers:**
- Partner with 3–5 migrant import agencies in Chanthaburi and Rayong (durian) and Chumphon.
- Attend packing-house and co-op meetings.
- Target expat household employers via Bangkok relocation agents.

**Risks:**
- The decree could be delayed, softened (for example, voluntary for small employers), or limited to registered businesses.
- SSO may simplify filing for these employers with a mobile app.
- Brokers may simply add the service themselves.
- A foreign founder cannot run this. It needs a Thai operator who speaks Thai and Burmese.

**Kill condition:**
The decree is not published by mid-2027, or it exempts employers below a headcount threshold, or SSO launches a one-tap household or farm employer app.

**Score:** 5/10. Pain 6, frequency 8 (monthly), mandatory 8 (once gazetted), fragmentation 4, competition 6, incumbent gap 6, buyer access 5, willingness to pay 4 (a service rather than software), MVP 7, distribution 5 (brokers). Founder access: needs a local.

**Sources:**
- https://www.bangkokbiznews.com/economics/1248966
- https://www.bangkokbiznews.com/news/news-update/1249023
- https://www.realnewsthailand.net/article/70976/
- https://thestandard.co/cabinet-expands-m33-coverage/
- https://www.thaipbs.or.th/news/content/509856
- https://www.thansettakij.com/economy/667680
- https://www.infoquest.co.th/?p=639763
- https://www.ktc.co.th/article/knowledge/salary-man/unemployed-register-sso (2026 contribution base)

### Opportunity: Restricted-Pesticide Sales Register for Farm-Input Shops

**Industry:**
Agricultural input retail (pesticides, fertiliser, seed).

**Buyer:**
Owners of licensed farm-input shops (ร้านค้าปัจจัยการผลิต) and their on-site "sales controller" (ผู้ควบคุมการขายวัตถุอันตราย).

**Trigger / Why now:**
- DOA "upgraded" the sales-controller training in 2026. Since 2025, 9,569 people have trained and 7,728 passed.
- In 2025–26, DOA and the consumer-protection police (ปคบ.) ran raids on illegal agrochemicals, including online sales.
- Glyphosate stays a restricted-use substance. The shop must keep it separate, show the restricted-use licence, have a controller present, check the buyer's training proof and record quantities sold for DOA.

**Current workflow:**
1. A farmer asks for glyphosate. The controller checks the farmer's training proof.
2. The sale is written into a paper book: buyer, ID, quantity and crop (exact fields unverified).
3. The book is periodically summarised for DOA and shown at inspection. Licence renewals and training certificates are tracked by hand.

**Pain:**
- A 2020 civil-society survey (ThaiPublica, The Active) found the restricted-use measures failed across all target groups. Enforcement is weak, but the formal duty and inspections exist.
- Raids in 2025–26 raise the risk for shops.
- The pain is moderate: there is no evidence of large fines on licensed shops.

**Existing solutions:**
- Paper books and DOA forms.
- General Thai retail POS (for example Loyverse, Ocha; not verified for agrochemical fields).
- Possibly DOA e-services for licensing.
- Large distributors' dealer programs (unverified).

**Offline evidence:**
DOA licensing documents are PDF checklists filed at the provincial DOA office. Training is onsite. No Thai software listing for "ร้านขายยาฆ่าแลง register" was found in the searches.

**Offline channel:**
- DOA sales-controller training courses, held onsite at universities such as Naresuan and PSU (the agi.nu.ac.th and natres.psu.ac.th announcements).
- Agrochemical distributors' sales reps, who visit every shop.
- The Q-shop certification program (2,306 shops).

**Market count:**
36,041 farm-input shops nationwide, 2,306 of them Q-shops (DOA, per PRD/Thansettakij 2026).

**The gap:**
No register app tied to the restricted-use rule (buyer training check plus quantity log plus DOA summary) was found.

**Possible product:**
A LINE/mobile register:
- scan the farmer's ID or training card;
- log the restricted product and quantity;
- auto-produce the DOA summary;
- track licence and controller-certificate expiry.

**MVP:**
A mobile form with a product list for restricted substances (glyphosate) and a printable monthly summary in DOA's format.

**Pricing hypothesis:**
THB 150–300 per month per shop (estimate). It could also be paid for by a distributor as a dealer perk.

**How to find first customers:**
Training cohorts (thousands per year), distributor reps, and the Q-shop list.

**Risks:**
- The DOA reporting duty may be lax or annual only (unverified).
- Shops may prefer under-reporting.
- DOA may build its own app.

**Kill condition:**
DOA confirms there is no recurring sales report and inspections do not check the register, or an existing ag-shop POS already prints it.

**Score:** 4/10. A big, reachable base, but the obligation and its enforcement are not verified. Founder access: needs a local.

**Sources:**
- https://www.prd.go.th/th/content/category/detail/id/9/iid/479277
- https://www.thansettakij.com/economy/trade-agriculture/651992
- https://gcc.go.th/2026/02/20/
- https://www.thansettakij.com/economy/trade-agriculture/644821
- https://thaipublica.org/2020/08/measures-to-strict-use-of-glyphosate-failed/
- https://theactive.thaipbs.or.th/news/20200828-2
- https://www.agi.nu.ac.th/?p=8047

### Opportunity: Digital Buy-Book and Licence Renewal for Licensed Scrap Dealers

**Industry:**
Scrap and second-hand dealers (ร้านรับซื้อของเก่า).

**Buyer:**
Owner-operators of licensed junk and scrap shops, especially copper and cable buyers.

**Trigger / Why now:**
In 2026 police ran copper-cable theft cases:
- In Korat, more than 70 cell-tower cable thefts since early 2026, with damage over THB 10M. Police inspected the buying scrap shops.
- In Ayutthaya, 13 arrests, with police moving to revoke the licences of scrap shops that bought from the thieves.

The licence under the 1931 Act expires on 31 December every year and is renewed at the district office.

**Current workflow:**
1. Renew the licence at the district each December. Fees run THB 5,000–12,000 a year by category, per an accountant's guide (unverified figure).
2. Record each purchase (seller, ID, item, weight) in a book that police can inspect.
3. When police come asking about stolen cable, search the book by hand.

**Pain:**
Licence revocation and receiving-stolen-goods charges are the risk. Shops that can prove "who sold what" have a defence (inference).

**Existing solutions:**
- Paper ledger books.
- Generic weighing-scale POS.
- In other countries, police-mandated digital registers (New Zealand, Dutch DOR). No Thai equivalent was found.

**Offline evidence:**
Licensing is at DOPA district offices, with fingerprinting at the police station. Provinces publish licensed-shop lists as open data. No Thai scrap-register software was found in two searches.

**Offline channel:**
Provincial licence lists on gdcatalog.go.th (name and address), visits in person, scale and baler equipment suppliers, and police station community meetings.

**Market count:**
Per-province datasets on gdcatalog. The national total was not found (unverified). An estimate is tens of thousands, including unlicensed shops.

**The gap:**
A searchable photo, ID and weight log that a shop can show police in seconds.

**Possible product:**
A phone app: photograph the seller's ID and the goods, record the weight and price, keep a searchable history, flag high-risk items (copper cable, transformer parts), and remind the owner of the December licence renewal.

**MVP:**
A LINE LIFF form with photo and ID capture, plus a CSV/PDF export by date.

**Pricing hypothesis:**
THB 99–199 per month (estimate). Willingness to pay is low, and these shops lean on cash and informality.

**How to find first customers:**
gdcatalog provincial lists, then cold visits in provinces with cable-theft news (Nakhon Ratchasima, Ayutthaya).

**Risks:**
- Many dealers prefer no record.
- Police do not require a digital format.
- Telecom operators might fund their own scheme.

**Kill condition:**
Ten shop interviews show that none will pay and that police accept the paper book.

**Score:** 4/10. A real trigger, but weak willingness to pay and an unverified market count. Founder access: needs a local.

**Sources:**
- https://www.dopa.go.th/public_service/service_guide349/view350
- https://gdcatalog.go.th/dataset/gdpublish-dataset_1_28
- https://gdcatalog.go.th/dataset/gdpublish-dataset_10_217
- https://siamrath.co.th/regional/152784
- https://www.khaoayutthaya.com/archives/32790/
- https://inflowaccount.co.th/how-to-register-an-antique-shop/

### Opportunity: AMLO KYC and Cash-Transaction Reporting Kit for Independent Gold Shops

**Industry:**
Gold retail (ร้านทอง).

**Buyer:**
Owners of family gold shops, especially provincial shops outside chains.

**Trigger / Why now:**
Under AMLA s.16, gold traders must:
- identify customers on purchases or sales of THB 100k or more;
- report cash transactions of THB 2M or more within 7 days after each half-month;
- file suspicious-transaction reports.

AMLO supervision offices publish reporting guidance (2025 attachments on sed.amlo.go.th). No new 2026 rule was found.

**Current workflow:**
The shop photocopies the ID, fills AMLO forms (ปปง. 1-03 and others), and submits them via AMLO e-filing or on paper.

**Pain:**
Moderate. Exact penalties were not confirmed in this pass.

**Existing solutions:**
- AMLO's own forms and e-filing (free).
- The Gold Traders Association's guide.
- Gold-shop POS programs, which likely include customer records (unverified).

**Offline evidence:**
The association distributes PDF guides. Shops are family-run.

**Offline channel:**
The Gold Traders Association (สมาคมค้าทองคำ) and its downloads page and events.

**Market count:**
About 6,000 shops (per search summary of Thai news, unverified).

**The gap:**
Not established.

**Possible product:**
A KYC capture step and an auto-filled AMLO report, as a POS add-on.

**MVP:**
An ID card reader plus AMLO form export.

**Pricing hypothesis:**
THB 300–500 per month (estimate).

**How to find first customers:**
Through the association.

**Risks:**
POS incumbents. The required format comes from AMLO.

**Kill condition:**
The leading gold-shop POS already exports AMLO reports.

**Score:** 3/10. Founder access: needs a local.

**Sources:**
- https://goldtraders.or.th/amlo-law-and-gold-shops
- https://classic.goldtraders.or.th/downloads/amlo/AMLO-Gold.pdf
- https://www.pptvhd36.com/wealth/trick-trend/280199
- https://www.chiangmainews.co.th/news/3973166/
- https://sed.amlo.go.th/uploads/content_attachfile/attach_202505071627_681b278b196cf.pdf

## 3. Rejected

- **Slaughterhouses:** DLD e-SLIMS already handles licensing, slaughter notification and vet inspection. Source: https://certify.dld.go.th/index.php?Itemid=456&catid=253&id=771%3Adld-e-slims&lang=th&option=com_content&view=article
- **Elderly-care business licensing:** the law has been in force since Jan 2021, so there is no fresh trigger, and HSS publishes licence lists. Sources: https://www.hfocus.org/content/2021/01/20949, https://healthserv.net/healthupdate/14096
- **Driving schools:** not a quiet industry (heavily web-marketed), and DLT controls the flow.
- **Maize "burn-free" traceability:** the 2026 rules bind importers and feed mills (few and large), not small domestic collectors. Watch for extension to domestic collectors. Sources: https://www.prd.go.th/th/content/category/detail/id/39/iid/463848, https://www.thebangkokinsight.com/news/business/economics/1699253/
- **Rice-mill stock reporting:** no recurring mandatory form was confirmed. Source: https://chainat.moc.go.th/th/content/category/detail/id/112/iid/129913
- **Livestock movement (e-Movement):** carried over from the country report. A free DLD system.

## 4. Method notes

- The best yield came from Thai-language Cabinet and ministry news (bangkokbiznews, thansettakij, prd.go.th). That route surfaced the s.33 extension, the strongest trigger in this pass.
- DOA training announcements gave a clean shop count. gdcatalog.go.th has open per-province licence lists, which are usable as prospect sources.
- Searches for Thai vertical software (scrap POS, gold-shop AMLO features) failed, because the search tool is US-centric and returns Shopify and English results. Competitor diligence for Thai SMB software is therefore weak and marked "unverified".
- Statistics by sector (DOE migrant counts) were not reachable through search snippets.
- The pass was interrupted by an API usage limit after 20 searches. Pawnshops, money changers, massage shops and tattoo studios were not screened.

Research model: Opus
