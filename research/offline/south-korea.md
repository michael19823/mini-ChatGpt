# South Korea: offline-industries pass (2026-10-05)

Evidence base: 23 WebSearch calls returned results; the 24th was refused ("usage limit"), so the research stopped there as the instructions require. That is under the 40-call budget. WebFetch is blocked, so every fact comes from search-result snippets and summaries. Anything not directly supported by a cited result is marked "unverified" or "estimate". This pass does not repeat the leads in `research/countries/south-korea.md` (fire inspection, disinfection, medical devices, safe freight rate, elevators, pesticide sales records and others).

Overall finding: Korea's quiet industries are unusually well covered by **free government systems**. Examples: the fishing-boat QR roster app 낚시해, the beef and pork traceability system mtrace, the national livestock-disease information system for livestock traders, the Korea Petroleum Quality & Distribution Authority's weekly fuel-sales report, and the planned pet lifecycle-history system. When paper persists, it is usually an **adoption** problem (elderly operators sending a photo of a paper form), not a software gap that someone will pay to close. No idea below reaches the build threshold.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Pet breeders, sellers and importers (동물생산·판매·수입업) | Report each month's dog transactions to the 시·군·구 by the 10th of the next month, keep them 2 years, plus mandatory sales-contract contents; KRW 1m fine after a correction order | Filed to the local government. No pet-shop software that files this report was found, but the reporting channel itself (paper, email or the government system) is **unverified** | 24,384 pet businesses in total; sellers are 11.4% (about 2,780); breeder count not found (MAFRA 2025 survey) | **Opportunity (weak)** | Real monthly duty with a fine, but the government is building a lifecycle-history system (2024–2026) that may absorb it |
| Tattoo and semi-permanent makeup (문신사) | From 2027-10-29: national licence, mandatory hygiene training, per-procedure records (date, site, ink type and quantity), adverse-event reports to the 시·군·구 | Activity was illegal until now, so there is no compliance tooling yet, apart from one startup (Tatlog) | 300k–600k practitioners (industry estimate in the press; very uncertain) | **Opportunity (weak, competitor already live)** | Clear why-now, but Tatlog already sells exactly this. Tattooists are Instagram-native, so this is not truly "quiet" |
| Money changers (환전영업자) | Twice-yearly business report plus a copy of the exchange ledger to customs, via the designated bank; registration can be cancelled for repeated non-submission | Enforcement keeps finding shops without the required premises or computer equipment and with missed ledger reports | 1,320 registered (June 2024, Korea Customs Service) | Opportunity (weak, small market) | Mandatory and enforced, but the market is small, filing is only twice a year, and existing exchange-ledger software was not checked (unverified) |
| Fishing-charter boats (낚시어선업) | Passenger roster filed before every departure (Fishing Act, art. 33) | **87.1% of rosters are a photo or text of a paper list; e-filing is only 1.6%** (Aug 2026, National Assembly) | Boat count not found (estimate: a few thousand) | Rejected | Free coast-guard app 낚시해 (QR), now being linked to the booking platforms 물반고기반 and 더피싱. The gap is adoption, not a missing product |
| Fuel stations (주유소) | Weekly report of fuel supply and sales transactions to the petroleum authority | The report takes 30–60 minutes without a POS | about 10–11k stations (estimate, unverified) | Rejected | 97.7% reported in the first week of the rule; POS vendors handle it. Old rule (2014) |
| Butchers and meat packers (식육판매업) | Record traceability numbers in purchase and sales ledgers (purchases kept 1 year, sales 2 years); fine up to KRW 5m | Paper ledgers are allowed | Large (tens of thousands, estimate) | Rejected | Entering data in mtrace counts as keeping the ledger, and the 이력스캔 app already auto-generates the forms |
| Livestock traders (가축거래상인) | Keep records of animal movements and trades; registration | Can be filed by entering into the national livestock-disease information system | Not found | Rejected | The government system is the default channel; no paid layer is visible |
| Scrap dealers (고물상) | None recurring. Police licensing was abolished in 1993; only large yards (≥1,000 m² in metropolitan cities, ≥2,000 m² elsewhere) file a waste notification | n/a | About 15% of yards need to file the notification | Rejected | No dealer register or transaction register to digitise |
| Gold buyers and jewellers (귀금속업) | No AML customer-due-diligence (CDD) or suspicious-transaction (STR) duty yet; Korea is one of 2 FATF members without one for these businesses | n/a | Not counted | Rejected for now / watch | Becomes interesting only if a Specific Financial Information Act (특금법) amendment covers them. The 2026 amendments targeted crypto. Watch the FATF follow-up |
| Seasonal foreign farm workers (계절근로자) | Contract, housing, departure reports; from Feb 2026, injury and wage-guarantee insurance are mandatory | Farm paperwork | 142 public-type sites with 5,039 workers in 2026; about 100k seasonal workers in total | Rejected | Public-type scheme: 농협 or the municipality is the employer and does all the admin. Small farms are moving away from direct hiring |
| Septic haulers (분뇨수집운반업) | Municipal licence; tariffs set by the municipality | Lists on each city's website | Per-city lists (e.g. Busan open data) | Rejected | No recurring multi-authority reporting pain found |
| Beekeepers (양봉) | Beekeeping Industry Act (2020) registration | n/a | Not found | Rejected | No recurring filing found |
| Gas-boiler installers (가스시설시공업) | Installation confirmation form and photos per job | A paper form is sold as a template (bizforms) | Not found | Not pursued | The search showed the record goes to the installer's own company and the gas utility, not to several authorities; ran out of searches |
| Households as employers (가사·돌봄) | Not searched | n/a | n/a | Not screened | Search budget ended. Direct household employment of domestic workers is largely outside the Labour Standards Act (unverified) |

Korea-specific groups added beyond the seed list: fishing-charter boats, money changers, fuel stations, tattoo licensing.

## 2. Opportunities

### Opportunity: Monthly dog-transaction report and records pack for pet breeders and pet shops

**Industry:**  
Companion-animal breeding (동물생산업), retail (동물판매업) and import (동물수입업)

**Buyer:**  
Owner-operator of a licensed puppy farm or pet shop. These are often small family businesses, and breeders are often rural and older (unverified).

**Trigger / Why now:**  
- The 2023 MAFRA "pet-business management strengthening plan" was followed by tighter operator rules (Animal Protection Act enforcement rules, appendix 12, amended 2025-08-07).
- CCTV is now mandatory at every pet business, and breeders must register parent dogs.
- A lifecycle-history system linking parent-dog and puppy numbers is planned for 2024–2026.
- Pet sellers moved from registration to a permit system.

**Current workflow:**  
1. Record each dog bought or sold: date, species and count, source and buyer.
2. By the 10th of the following month, submit the month's transaction list to the 시·군·구. The channel (paper, email or the system) is unverified.
3. Write a sales contract with the legally required fields (licence number, birth date, vaccinations and vet treatment records).
4. Keep everything for 2 years; respond to inspections.

**Pain:**  
Monthly and mandatory. Non-filing leads to a correction order and then a KRW 1m fine. The same dog data appears in the contract, the monthly report and the animal registration. No complaint quotes were found.

**Existing solutions:**  
- Paper or Excel.
- The government's national animal protection information system (animal.go.kr).
- Generic pet-business software (Collar), with no evidence it supports this report.
- An old generic "분양 관리 프로그램" (sales-management program).

**Offline evidence:**  
Filing goes to the municipal animal-welfare desk. No Korean pet-shop software listing mentions the monthly 거래내역 report. Operators are not on SaaS review sites.

**Offline channel:**  
- The public licence list: the open-data API "행정안전부_동물_동물판매업" (data.go.kr 15155083) gives every seller's name and address, for phone outreach.
- The pet-auction houses (반려견 경매장), which every breeder sells through. One auction house could supply 100+ breeders (estimate).

**Market count:**  
24,384 pet businesses in total. About 2,780 are sellers (11.4%). Breeders and importers are not counted; the total obliged is an estimate of 4–5k. Source: MAFRA 2025 pet welfare survey (fnnews 2026-06-29).

**The gap:**  
One record per dog should produce the contract, the monthly municipal report and the 2-year archive. Nobody visibly does this.

**Possible product:**  
A tablet or phone app for the pet shop counter. It captures each dog once (including its microchip number) and prints the contract. On the 1st of each month it generates the transaction report in the municipality's format.

**MVP:**  
- Dog intake and sale form.
- Contract PDF.
- Monthly report as Excel or PDF.

**Pricing hypothesis:**  
KRW 20–30k/month (about USD 15–22). Breeders might only pay for a done-for-you service run through the auction house. Willingness to pay for software is doubtful.

**How to find first customers:**  
The data.go.kr seller list (phone outreach), auction houses and pet-supply wholesalers.

**Risks:**  
- The government lifecycle-history system (2024–2026) may make the report automatic.
- The sector is shrinking: sellers fell 10.5% and breeders 4.5% year on year.
- The sector has a poor reputation.
- A non-Korean solo founder cannot sell this; it needs a Korean speaker doing phone sales.

**Kill condition:**  
The monthly report is already filed by ticking boxes in the animal-registration system, or the lifecycle system goes live in 2026.

**Score:** 4/10

**Sources:**  
- https://mafra.go.kr/bbs/home/792/570622/download.do
- https://www.dailyvet.co.kr/news/policy/184849
- https://law.go.kr/flDownload.do?gubun=&flSeq=159546865&bylClsCd=110201
- https://www.dailian.co.kr/news/view/1506635/
- https://fnnews.com/news/202606291009453650
- https://www.data.go.kr/data/15155083/openapi.do
- https://m.korea.kr/briefing/policyBriefingView.do?newsId=156587552

### Opportunity: Tattoo Act (문신사법) procedure-record and adverse-event pack for semi-permanent makeup studios

**Industry:**  
Tattoo and semi-permanent makeup (반영구화장). The two are merged into one licence.

**Buyer:**  
Owner of a small semi-permanent makeup or eyebrow studio, often attached to a beauty salon. This segment is less Instagram-native and more counter-based than tattoo artists (assumption).

**Trigger / Why now:**  
- The Tattoo Act was promulgated on 2025-10-28 and takes effect on **2027-10-29**.
- Existing practitioners get a 2-year grace period if they meet hygiene and facility standards and complete training.
- The first national exam is expected in late 2027.
- The ministry issued standard procedure guidelines in July 2026.

**Current workflow:**  
Today no records are kept, or a paper consent form is used. After the Act takes effect:
1. Record the procedure date, site and area, and the ink and medicines used with quantities.
2. Keep the records.
3. Report serious adverse reactions to the 시·군·구.
4. Use certified products only.
5. Complete hygiene training.

**Pain:**  
- New and mandatory, with a penalty under the Act.
- Practitioners are moving from illegal to licensed, so the anxiety is high.
- No direct complaint evidence was found.

**Existing solutions:**  
- **Tatlog (tatlog.co.kr)**: procedure records with ink and needle lot numbers, e-consent and law guides. It is already live.
- Booking apps (타투어때, 타투쉐어).
- Salon booking and POS apps (not checked; they may add a module).

**Offline evidence:**  
Weak. Semi-permanent studios are not on SaaS review sites, but the trade is marketed on Instagram and Naver. It is only partly "quiet".

**Offline channel:**  
- The mandatory hygiene-training providers and the practitioner associations (e.g. the groups that lobbied for the Act).
- Ink and needle suppliers, who must sell certified products.

**Market count:**  
Press estimates of 300k–600k practitioners. This is unverified and probably inflated, and many will leave the trade. There will be no licence register until 2027.

**The gap:**  
Tatlog targets tattoo artists. Beauty-salon semi-permanent studios with older owners may need a simpler record-plus-report tool sold through the supply channel. That segment is thin, and it is only a narrow positioning gap.

**Possible product:**  
A tablet consent and procedure-record form with scanning of the ink lot barcode, plus an adverse-event report template for the 시·군·구.

**MVP:**  
- E-consent.
- Procedure record.
- Export of the 2-year archive.

**Pricing hypothesis:**  
KRW 10–20k/month, or sold bundled through an ink supplier.

**How to find first customers:**  
- Hygiene-training cohorts (2026–2027).
- Ink and needle distributors.
- Licence lists, once they exist (from 2027).

**Risks:**  
- Tatlog and the salon apps.
- The enforcement rules (시행규칙) may change the record format.
- The trigger is a year away.
- It needs a Korean-speaking founder.

**Kill condition:**  
The salon-booking incumbents add a "문신사법 기록" module before 2027, or the ministry ships a free form or app.

**Score:** 4/10

**Sources:**  
- https://v.daum.net/v/20250925185150762
- https://www.korea.kr/news/policyNewsView.do?newsId=148958160
- https://m.medigatenews.com/news/3135938149
- https://tatlog.co.kr/notice/munsinsa-law-2027
- https://tatlog.co.kr/
- https://www.mt.co.kr/thebio/2025/09/25/2025092515542490693
- https://www.tsisalaw.com/news/article.html?no=26459

### Opportunity: Exchange-ledger and twice-yearly report kit for small money changers

**Industry:**  
Licensed currency exchange (환전영업자), including hotel desks, tourist-area exchange shops and travel agencies.

**Buyer:**  
Owner of a small exchange shop (Myeongdong, Itaewon, Busan, airports and similar).

**Trigger / Why now:**  
- Supervision moved from the Bank of Korea to 31 customs offices.
- Ledger-submission duties are written into the registration certificate, so repeated non-submission can lead to cancellation.
- Crackdowns found 31 offenders between Oct 2025 and Feb 2026, and 107 in earlier campaigns.

**Current workflow:**  
1. Record each exchange in the ledger (electronic or paper).
2. Twice a year, by the 10th of the following month, send the business report plus a copy of the ledger to customs through the designated bank.
3. Comply with the required premises and computer equipment.
4. Prepare for customs inspections.

**Pain:**  
Enforced, with cancellation as the penalty. Shops are repeatedly caught without computer equipment.

**Existing solutions:**  
Customs-office forms; specialist exchange-ledger software was not checked (unverified).

**Offline evidence:**  
Filing goes through the bank; enforcement findings show shops without computer equipment.

**Offline channel:**  
The customs registry of money changers and walk-in visits to tourist districts. The designated banks are a possible referral channel.

**Market count:**  
1,320 registered (June 2024).

**The gap:**  
Unknown. Not enough searches were left to check incumbent exchange-ledger software.

**Possible product:**  
A ledger with automatic generation of the twice-yearly report and the ledger copy, plus large-transaction flags.

**MVP:**  
- Transaction entry with ID capture.
- Twice-yearly report export.

**Pricing hypothesis:**  
KRW 50–100k/month.

**How to find first customers:**  
The customs registry and walk-in visits.

**Risks:**  
- The market is tiny.
- Filing is only twice a year.
- AML liability.
- Banks may supply tools.

**Kill condition:**  
Banks or a customs system already provide the ledger tool, or more than 3 incumbent ledger vendors exist.

**Score:** 3/10

**Sources:**  
- https://www.law.go.kr/LSW/admRulLsInfoP.do?admRulSeq=2100000197999
- https://www.taxtimes.co.kr/mobile/article.html?no=215849
- https://taxtimes.co.kr/news/article.html?no=275880
- https://newsseoul.co.kr/news/view/1065585018364418
- https://eiec.kdi.re.kr/policy/materialView.do?num=243183

## 3. Rejected

- **Fishing-charter passenger rosters (낚시어선 승선자명부):** this is the strongest *offline evidence* in Korea. 87.1% of rosters are still photos of paper lists and only 1.6% are e-filed (Aug 2026). But the coast guard's free QR app 낚시해 exists, and the government is connecting it to the booking platforms 물반고기반 and 더피싱. Captains won't pay to fix a free government process. Sources: http://www.haesanews.com/news/articleView.html?idxno=151515 ; https://edaily.co.kr/News/Read?mediaCodeNo=257&newsId=02351766625935544 ; https://www.hkbs.co.kr/news/articleView.html?idxno=646937 ; https://news.nate.com/view/20260929n21588
- **Fuel-station weekly sales reports:** POS-solved since 2014, with a 97.7% first-week report rate. Sources: https://www.sateconomy.co.kr/news/view/179590008778525 ; https://www.etoday.co.kr/news/view/924826
- **Butcher traceability ledgers:** the mtrace system counts as the ledger, and the 이력스캔 app auto-generates the report forms. Sources: http://mtrace.go.kr/pdf/beef_traceability_distribution_manuList.pdf ; https://apps.apple.com/us/app/id6468613693
- **Livestock traders:** records can be entered in the national livestock-disease information system. Source: https://www.law.go.kr/LSW//lsLawLinkInfo.do?lsJoLnkSeq=900067648&chrClsCd=010202
- **Scrap dealers:** no register since the 1993 abolition of police licensing. Sources: https://www.korea.kr/news/policyNewsView.do?newsId=148765631 ; https://www.hankookilbo.com/news/article/199306220065347589
- **Gold and jewellery AML:** no customer-due-diligence or suspicious-transaction duty yet for these dealers; revisit if a Specific Financial Information Act (특금법) amendment covers them. Sources: https://www.bkl.co.kr/newsLetter/itemUrl.do?itemNo=6437 ; https://www.kofiu.go.kr/kor/policy/iois02.do
- **Seasonal farm workers:** admin is handled by the public-type employers (농협 or the municipality). Source: https://www.korea.kr/news/policyNewsView.do?newsId=148956178
- **Septic haulers, beekeepers:** no recurring reporting pain was found.

## 4. Method notes

- What worked: Korean queries naming the exact legal term (거래내역 신고, 환전장부, 승선자명부, 시술기록) plus "과태료" or "의무". They surfaced the law text, ministry press releases and trade press (dailyvet, haesanews). National Assembly audit stories (국정감사, September and October) gave the best hard offline statistics, such as the 1.6% e-filing rate.
- What didn't work: queries for counts of operators (registers live in data.go.kr files that can't be fetched), and searches for incumbent software in niche trades, which return generic or foreign results.
- The recurring Korean pattern: the regulator already gives away a free portal or app. Paper persists because of adoption, not because a product is missing.
- The search quota was refused at about call 24, so households as employers, gas-boiler installers, rural guesthouses and fishermen's catch reporting were not screened.
