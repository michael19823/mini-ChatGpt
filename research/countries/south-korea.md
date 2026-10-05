# South Korea - research report (deep pass, 2026-10-05)

Evidence base: about 46 WebSearch calls on this deep pass, mostly in Korean, plus about 8 on the first pass. WebFetch is blocked, so facts come from search-result snippets and summaries. Anything not directly supported by a cited result is marked "unverified" or "estimate".

Accessibility: open market, no sanctions, no barrier to a foreign vendor selling SaaS. The practical barriers are high, though. You need a Korean-language product, Korean payment rails and e-tax invoices, and trust with conservative SME owners. Many government systems (Allbaro, KFMA, MFDS UDI, NIMS) also expect Korean digital certificates (공동/금융인증서) for login, which makes browser automation on a customer's behalf harder. The domestic SaaS scene is mature, and government agencies often ship free tools. That killed several ideas below.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Fire-safety inspection contractors (소방시설관리업) | Per-job KFMA staffing report (배치신고) + 8-page statutory result report + remediation plan, handed to the building owner, who files it on 소방민원센터 within 15 days | **Opportunity (best lead, competition unverified)** | Mandatory per-job workflow spanning 2 systems + client handoff. No contractor-side vendor surfaced in 6 searches, but that is not proof of none |
| Pest control / disinfection (소독업) | Disinfection log and certificate (소독증명서) + reporting to local health centre (보건소) | Opportunity (weak) | Health centres moving from email/fax/post to e-systems one by one (Haenam Feb 2026, Gyeongju Jun 2026), so the process is fragmented by municipality. But K-works (government side) and the "안심공간" QR app (business side) exist |
| Medical-device distributors | Monthly supply report (공급내역보고) to the MFDS UDI system | Opportunity (weak) | Mandatory monthly reporting with sales-suspension penalty and real complaints. But incumbents exist (메디로워크 app, 큐머니ERP UDI module) |
| Container trucking / shippers | 2026–2028 safe-freight-rate (안전운임) compliance and per-trip settlement | Opportunity (weak) | Brought back from Jan 2026 with a KRW 5m fine per violation and complex surcharge stacking. Free calculators and forwarder platforms already exist |
| Export manufacturing (EU CBAM) | Embedded-emissions calculation and buyer templates | **Rejected (re-scored down from 4)** | Korea Customs Service offers a free CBAM-PASS calculation program, and the ministry funds on-site consulting. Glassdome and Eco365 cover the paid end |
| Apartment complexes | Unit-level fire self-inspection (세대점검), with fines from 2026-12-01 | Rejected | 아파트아이 has run mobile 세대점검 since 2023 (~1.6m households, NFA commendation). 아파트너 also supported |
| Construction subcontractors | Daily-worker attendance → retirement-mutual-aid (퇴직공제) days report + 근로내용확인신고 + 4 insurances | Too competitive | 김반장 (20 yrs, ~10k firms), 공무링크 (EDI auto-link), 일용이 파트너, e-card terminal vendors |
| Cosmetics exporters (K-beauty) | Multi-market registration (MoCRA, CPNP, NMPA) and ingredient screening | Too competitive | Cosmure, CertiCos (CDRI, 35 countries), COOA, Beauty Intelligence + subsidised KCII consulting. ~28,400 responsible sellers is a big market, but it is crowded |
| Veterinary clinics | Narcotics reporting to NIMS | Rejected | Vet EMRs (e.g. PlusVet) report to NIMS automatically |
| Clinics / pharmacies | Silson24 private-insurance claim e-transmission (phase 2 from 2025-10-25) | Rejected | The bottleneck is the EMR vendors themselves (the government is threatening fines and a FTC probe). A solo vendor cannot get into the clinic stack |
| Waste generators/haulers | Allbaro electronic manifests (전자인계서) | Rejected | Allbaro publishes an ERP-link guide. Upbox auto-generates manifests, and waste ERPs (ERPKOREA) exist |
| Elevator maintenance contractors | Monthly self-inspection entry into the national elevator information centre | Unverified / small | Mandatory monthly entry with fines (KRW 200k/500k). Entry was moved to one channel on 2025-07-01. Contractor list is public. But no API found and the buyer count is unknown |
| Freight carriers | Freight transport performance reporting (화물운송실적신고) | Rejected | Old (2013) process. 1-truck operators and international forwarders are now exempt, and freight-information networks count as reporting |
| SMEs employing foreign workers | EPS employment-change reports, permit extensions | Rejected | The next-generation EPS government system auto-fills documents. Administrative agents (행정사) handle the rest |
| Chemicals SMEs | K-REACH registration | Poor distribution | Consultant- and subsidy-led (first pass, not re-checked) |
| Small workplaces (OSH) | Serious Accidents Act / risk assessment | Too competitive | KOSHA free tools and many vendors (first pass, not re-checked) |
| Recyclers under EPR | Recycling-performance evidence to the mutual-aid associations | Not pursued | Annual result report (by 30 Apr). The workflow is association-centric and the buyer count is small |
| Pesticide retailers | Mandatory sales record (since Jul 2020) | Not pursued | Recorded in the RDA 농약안전정보시스템 or linked private inventory programs. Likely served already (unverified) |
| School-meal food suppliers | eaT e-procurement supplier documents | Not pursued | Search found enforcement against fake shell suppliers, not evidence of a recurring document-workflow pain |
| Long-term home care | NHIS claims, RFID visit tagging | Not screened (assumed crowded) | Mature market with many billing programs (vendor names unverified this pass) |

## Opportunities

### Opportunity: Fire-inspection job-to-paperwork pipeline for 소방시설관리업 contractors

**Industry:**  
Fire-safety facility management and inspection contractors (소방시설관리업, general and specialist)

**Buyer:**  
Owner or office manager (공무/사무 담당) of a small or mid-size fire-facility management firm doing statutory operational (작동) and comprehensive (종합) inspections for buildings and apartment complexes

**Trigger / Why now:**  
- The 2022 Fire Facilities Act split put contractor staffing reports through the Korea Fire Facility Management Association system (fpsm.kfma.kr). That system feeds the published annual inspection-capability rating (점검능력 평가, 2025 results published), so contractors are rated on their reporting data.
- Building owners must file the result report and remediation plan within 15 days, via 소방민원센터 (safeland.go.kr) or on paper. The contractor cannot file it directly, so the contractor has to produce a complete package for the client.
- Apartment unit-inspection fines start 2026-12-01 after the grace period was extended. That raises the attention of apartment and complex clients on fire paperwork.
- A 2026 amendment reportedly introduces standard inspection-fee disclosure, starting with the public sector. This comes from a search summary only and is unverified.

**Current workflow:**  
1. Schedule the inspection, then file the per-job staffing report (점검인력 배치신고) on the KFMA system against its staffing rules (the KFMA offers a "simulator" to check compliance).
2. Technicians inspect on site with paper checklists or photos.
3. Office staff transcribe the results into the statutory result report form (별지 제9호서식, 8 pages), plus the remediation plan and inspection record card (점검기록표).
4. Send the package to the building owner. The owner (관계인) uploads it to 소방민원센터 within 15 days and posts the record card for 30 days.
5. Track remediation (이행완료 보고) and the next cycle.

**Pain:**  
- The process is mandatory per job, with deadlines, and the same data is entered at least twice (KFMA staffing, then the statutory report), plus a client handoff.
- Fines: the general non-compliance fine for inspection-category and staffing-standard violations is cited as up to KRW 3m (search summary, unverified against the law text).
- Contractors bid low for public inspections (358 open public tenders listed on one bid site), so the margin pressure makes office labour costly.
- No direct complaint quotes were found this pass. The pain level is inferred from the workflow and needs interviews.

**Existing solutions:**  
- KFMA's own system (staffing reports only, as far as found).
- 소방민원센터 (government filing portal for owners).
- Generic field-workforce apps with fire-inspection content (Shopl Works / Hada Works blogs on fire-inspection duties).
- Excel/HWP templates published by fire HQs.
- Possibly Korean niche apps not surfaced by search (unverified).
- Foreign analogues (InspectPoint, ServiceTitan) are not localised.

**The gap:**  
No product was found that takes one field inspection and produces three outputs: (a) a KFMA staffing report that passes the staffing rules, (b) a pre-filled 별지 9 report, remediation plan and record card, and (c) an owner-ready filing pack with a 15-day deadline tracker. This is the same "one inspection → multiple outputs" pattern as the US fire-inspection benchmark. **Unverified that no Korean vendor does this.**

**Possible product:**  
Mobile inspection checklist mapped one-to-one to the statutory form items. It auto-generates the statutory HWP/PDF report and the remediation plan, checks staffing against KFMA standards before the visit, and sends the owner a filing pack with deadline reminders.

**MVP:**  
A web/mobile checklist for 작동점검 of apartments and mid-size buildings that outputs the 8-page 별지 9 PDF, the remediation plan and a staffing-rule check. KFMA entry stays manual, but a copy-ready summary is provided.

**Pricing hypothesis:**  
KRW 100–300k per month per firm, or about KRW 3–5k per inspected building per cycle (estimate).

**How to find first customers:**  
- The KFMA inspection-capability disclosure (public list of rated firms).
- Municipal and provincial fire-facility business datasets on data.go.kr.
- Public tender winners on bid aggregators.
- 소방시설관리사 associations and study communities.

**Risks:**  
- KFMA or the NFA could add report generation to their systems.
- An unknown Korean incumbent may already do this.
- Government portals need digital-certificate login, so automation is hard.
- The buyer count is uncertain (estimate: low thousands of firms, unverified).
- Price-sensitive buyers.

**Kill condition:**  
Interviews with about 10 firms show that most already use a domestic app that generates the 별지 9 report. Or the KFMA system already produces the statutory report from the staffing entry.

**Score:** 5/10

**Sources:**  
- https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=1574&ccfNo=4&cciNo=4&cnpClsNo=1
- https://thecheck.co.kr/?p=6595
- https://law.go.kr/LSW/flDownload.do?flSeq=121925859&bylClsCd=110202
- https://fpsm.kfma.kr/
- https://fpsm.kfma.kr/batch/info/
- https://www.kfma.kr/business/inspectBatch
- https://www.kfma.kr/noticeFile/menual.pdf
- https://www.kfma.kr/bbs/1/view/16056
- https://safeland.go.kr/somin/infoCivilAplSubmitDetail.do
- https://joeunenc.com/fire-inspection-target-cycle-report-guide/
- https://v.daum.net/v/20251219103124328
- https://www.shoplworks.com/blog-insight/fire-inspection-obligation-guide-jun
- https://www.sankun.com/bid-industry/전문소방시설관리업

### Opportunity: Disinfection / pest-control compliance pack (소독증명서 + 보건소 reporting router)

**Industry:**  
Disinfection and pest-control businesses registered under the Infectious Disease Control and Prevention Act (소독업)

**Buyer:**  
Owner-operator of a small 소독업 firm serving restaurants, apartments, offices and other facilities legally required to be disinfected

**Trigger / Why now:**  
- Health centres are moving one by one from emailed, posted or faxed disinfection ledgers to electronic certification: Haenam (first in Jeonnam, Feb 2026), Gyeongju (pilot from Jun 2026), Namhae (first in Gyeongnam).
- Each municipality chooses its own system, or none, so a firm working across districts deals with mixed channels.

**Current workflow:**  
1. Perform the disinfection job.
2. Hand-write or print a 소독증명서 for the client, who must keep it as proof.
3. Record the job in the disinfection ledger (소독실시대장).
4. Submit the ledger to each relevant 보건소 by email, post or fax, or enter it in that 보건소's e-system where one exists.

**Pain:**  
- Health centres themselves describe the old process as manual ledgers, with risk of missing records.
- Exact reporting frequency and penalty were not verified this pass (unverified).
- Revenue link: clients need a valid certificate to pass their own inspections.

**Existing solutions:**  
- K-works 전자소독증명서 (sold to municipalities).
- "안심공간" QR e-disinfection app (auto-submits to health centres and saves a PDF certificate).
- Service companies with built-in reporting (Sacle advertises automatic legal-disinfection reporting for its own clients).
- 방플 marketplace.
- Paper and Excel.

**The gap:**  
A firm-side tool that issues the certificate once and routes the record to whichever channel each 보건소 uses (e-system, email or fax template), with renewal scheduling for recurring clients. It is unclear whether 안심공간 already covers multi-municipality routing.

**Possible product:**  
A job app for small disinfection firms covering client roster, legally required frequency schedule, one-tap certificate issuance, and per-보건소 submission output.

**MVP:**  
Certificate PDF generator + ledger + export in the submission format of the 2–3 largest metro health centres.

**Pricing hypothesis:**  
KRW 30–80k per month (estimate). Low ticket.

**How to find first customers:**  
- National and regional 소독업체 datasets on data.go.kr (for example, the Chungnam list showed 473 firms).
- 한국방역협회 members.

**Risks:**  
- Municipal e-systems could become a de facto national standard (K-works).
- Low willingness to pay.
- 안심공간 already exists.

**Kill condition:**  
The 안심공간 app or K-works already cover most health centres nationally, or firms report that health centres accept a simple email of the ledger without friction.

**Score:** 4/10

**Sources:**  
- https://www.heraldk.com/article/2026022318240023861
- https://www.idomin.com/news/articleView.html?idxno=932785
- https://www.sisa-news.com/news/article.html?no=270728
- https://kworks.co.kr/solution/solution12.do
- https://apps.apple.com/kr/app/%EC%95%88%EC%8B%AC%EA%B3%B5%EA%B0%84-qr%EC%BD%94%EB%93%9C-%EC%86%8C%EB%8F%85%EC%9D%84-%EC%A6%9D%EB%AA%85%ED%95%98%EB%8B%A4/id6446073784?l=en-GB
- https://www.sacle.co.kr/home
- https://bangple.co.kr/
- https://www.data.go.kr/data/15069639/fileData.do

### Opportunity: Monthly medical-device supply-report reconciler for small distributors

**Industry:**  
Medical-device wholesalers, distributors and importers (의료기기 판매·임대·수입업)

**Buyer:**  
Owner or admin staff of a small device distributor supplying clinics and hospitals, often via GPO intermediaries (간납사)

**Trigger / Why now:**  
- Reporting was phased in by class from 2020 and has covered all classes since Jul 2023.
- MFDS revised its supply-report and UDI FAQ casebooks on 2026-08-19 to address "repeated complaints". That signals continuing confusion.
- Penalty: 15-day sales suspension and KRW 500k fine for non-reporting (search summary).

**Current workflow:**  
1. Export the month's sales from ERP or Excel.
2. Map each line to a UDI-DI plus production identifiers (lot/serial) taken from barcodes.
3. Fill the MFDS bulk-upload template.
4. Upload by the end of the following month.
5. Fix rows marked "부적합" (non-compliant). Avoid duplicates, because deleting the upload does not delete already-generated reports.

**Pain:**  
- Wholesalers report extra work: stock audits, device classification, and GPOs pushing the reporting onto suppliers.
- Common UDI-only uploads fail with a missing production-identifier error.
- The duplicate-report trap is documented by MFDS itself.

**Existing solutions:**  
- MFDS UDI system with Excel bulk upload (free).
- 메디로워크 (barcode/QR scan app with scheduled automatic reporting).
- 큐머니ERP (UDI supply-report module).
- Larger ERPs.
- GPOs doing it for some.

**The gap:**  
Possibly the reconciliation layer for multi-channel small distributors: catching missing lot/serial data before upload, de-duplicating, and matching GPO-reported against own-reported lines. Unverified that 메디로워크 and the ERPs lack this.

**Possible product:**  
An upload pre-checker plus month-end reconciliation that validates rows against MFDS rules and flags duplicates and missing production identifiers before filing.

**MVP:**  
Excel-in, validated MFDS-template-out, with an error report.

**Pricing hypothesis:**  
KRW 50–150k per month (estimate).

**How to find first customers:**  
- MFDS licence lists of distributors (public licence search).
- 한국의료기기산업협회 and distributor associations.
- Medical trade press.

**Risks:**  
Mature regulation with entrenched apps and ERPs. The number of affected small distributors is unverified.

**Kill condition:**  
Interviews show 메디로워크 or ERP modules already solve validation and de-duplication, or MFDS adds pre-validation.

**Score:** 4/10

**Sources:**  
- https://www.dailypharm.com/user/news/63475
- https://dailypharm.com/user/news/65850
- https://www.mt.co.kr/thebio/2026/08/19/2026081908480498567
- https://www.donggu.go.kr/dg/download/viewer/1626960265265/index.html
- https://emedi.mfds.go.kr/msismext/udi/min/mainView.do
- http://qerp.co.kr/bbs/content.php?co_id=feature_4
- https://apps.apple.com/gt/app/%EB%A9%94%EB%94%94%EB%A1%9C%EC%9B%8C%ED%81%AC-%EC%9D%98%EB%A3%8C%EA%B8%B0%EA%B8%B0-%EA%B3%B5%EA%B8%89%EB%82%B4%EC%97%AD%EB%B3%B4%EA%B3%A0-%EC%8A%A4%EB%A7%88%ED%8A%B8/id6444394535?l=es-MX

### Opportunity: Safe-freight-rate settlement auditor for container trucking (2026–2028)

**Industry:**  
Import/export container haulage, plus shippers and forwarders that pay it

**Buyer:**  
Settlement or dispatch manager at a small container trucking company (운수사), or the logistics manager at a mid-size exporter

**Trigger / Why now:**  
- The safe-freight-rate system came back in Jan 2026 for import/export containers and cement, for 3 years (2026–2028).
- Shippers must pay at least the safe transport rate, and carriers must pay owner-drivers at least the safe consignment rate.
- The fine is KRW 5m per case.
- The trade press reports a major overhaul of the detailed criteria, and confusion in the field.

**Current workflow:**  
1. Dispatch each trip.
2. Look up the route and distance rate in the published tariff (or a free calculator).
3. Apply surcharges: weight bands, reefer, night and others. Only the top 3 surcharges apply, with the 2nd and 3rd at 50%.
4. Invoice the shipper and settle with the owner-driver.
5. Reconcile disputes by hand.

**Pain:**  
- Per-trip calculation with stacking rules, two rate layers (shipper→carrier and carrier→driver), and heavy fines.
- No direct complaint data was gathered beyond the trade-press confusion.

**Existing solutions:**  
- Free calculators: safe-freight.com, Tradlinx inland tariff lookup, forwarder.kr surcharge tables.
- Funded freight platforms (Logi-Spot, Portlogics).
- In-house TMS and Excel.

**The gap:**  
Batch audit of a month of trips (from a dispatch export) against both rate layers, producing driver settlement statements and a compliance file. Calculators handle only one trip at a time. Unverified whether the TMS vendors already do this.

**Possible product:**  
Upload a dispatch log and get, per trip, the minimum shipper rate and minimum driver rate, the variance, and an evidence pack.

**MVP:**  
Container-only tariff engine + CSV import + monthly variance report.

**Pricing hypothesis:**  
KRW 100–200k per month per carrier (estimate).

**How to find first customers:**  
- Container trucking associations (컨테이너 운송사업자 단체).
- Port-area carrier lists in Busan and Incheon.
- KCCI regional briefings on the rate system (Jeju KCCI published one in Apr 2026).

**Risks:**  
- Sunset after 2028 limits payback.
- The niche is narrow.
- Platforms may bundle this for free.

**Kill condition:**  
The main TMS and dispatch tools used by Busan carriers already apply the safe-rate tariff automatically.

**Score:** 4/10

**Sources:**  
- https://www.korea.kr/news/policyNewsView.do?newsId=148957729
- https://portlogics.com/ko/insights/safe-freight-rate-2026
- https://www.klnews.co.kr/news/articleView.html?idxno=320755
- https://safe-freight.com/
- https://www.tradlinx.com/ko/container-inland-tariff
- https://www.forwarder.kr/content/safe_tariff
- https://logi-spot.com/en/%EC%95%88%EC%A0%84%EC%9A%B4%EC%9E%84%EC%A0%9C-%EC%A4%80%EB%B9%84%EB%90%90%EB%82%98%EC%9A%94/
- https://jcci.korcham.net/file/dext5uploaddata/2026/260416%20화물자동차%20안전운임제%20설명자료_.pdf

## Rejected after competitor research

- **CBAM carbon-data pack for SME exporters** (first pass scored it 4/10). Korea Customs Service distributes a free CBAM-PASS emissions calculator, and the ministry funds on-site measurement consulting plus verification (support expanded from 110 to 185 firms). Glassdome and Eco365.Ai cover paid needs. Sources: https://www.fnnews.com/news/202506101016526321 ; https://www.heraldk.com/article/2026032903042640323 ; https://cbamguide.com/news/2026-08-20-korea-exporters-carbon-data-survey/
- **Apartment unit fire self-inspection (세대점검)**: killed by 아파트아이, whose mobile 세대점검 has run since 2023 and serves about 1.6m households. 아파트너 is also supported. Sources: https://v.daum.net/v/20251210005625733 ; https://www.hapt.co.kr/news/articleView.html?idxno=164214
- **Vet-clinic NIMS narcotics reporting**: killed by vet EMR integrations (PlusVet auto-reports to NIMS). Source: https://www.dailyvet.co.kr/?p=285889
- **Allbaro waste e-manifests**: killed by Upbox automatic manifest linking, waste ERPs (ERPKOREA) and Allbaro's official ERP-integration guide. Sources: https://www.mt.co.kr/future/2024/07/26/2024072610083215310 ; https://www.allbaro.or.kr/01_wsf/wsf_tran_intro.vm ; http://www.erpkorea.com/erp.php
- **Silson24 clinic and pharmacy claim integration**: participation is low (clinics and pharmacies 26.8% linked as of May 2026). But the gatekeepers are the EMR vendors, which the government is pressuring with FTC review and new fines, so there is no entry point for a solo vendor. Sources: https://dailypharm.com/user/news/338363 ; https://biz.newdaily.co.kr/site/data/html/2025/10/22/2025102200207.html
- **Foreign-worker EPS administration**: the next-generation EPS government system auto-loads documents, and 행정사 handle the rest. Source: https://www.moel.go.kr/news/enews/report/enewsView.do?news_seq=13913
- **Freight performance reporting (화물운송실적신고)**: in force since 2013 with burden-reduction exemptions, and covered by freight information networks. Source: https://www.molit.go.kr/USR/policyTarget/dtl.jsp?idx=499
- **Executive ESG / English disclosure tooling** (first pass): enterprise sales only.

## Too competitive

- **Construction daily-worker labour reporting** (퇴직공제 days, 근로내용확인신고, 4 insurances): 김반장 (한국기업진흥원; about 10k construction firms served over 20 years), 공무링크 (EDI auto-integration), 일용이 파트너, 진승정보기술 e-card systems. Sources: https://www.kbz.co.kr/ ; https://xn--ob0bs6v15a363c.com/ ; https://m.news.nate.com/view/20251222n26025 ; http://www.jinpos.co.kr/?param=bus
- **K-beauty multi-market regulatory registration**: the market is large (28,412 responsible sellers), but Cosmure, CertiCos (CDRI), COOA and Beauty Intelligence are all active, plus government-subsidised KCII consulting. Sources: https://cosmorning.com/mobile/article.html?no=52185 ; https://www.cncnews.co.kr/news/article.html?no=11322 ; https://www.cncnews.co.kr/news/article.html?no=6970 ; https://beautyintelligence.kr/en ; https://www.beautynury.com/news/view/110449/cat/10
- **Serious Accidents Act / OSH risk assessment** (first pass): KOSHA free tools and many vendors.

## Attractive problem, poor distribution

- **K-REACH chemical registration** (first pass): consultant- and subsidy-led. Disputes over shared registration costs are not something software can solve.
- **Elevator maintenance self-inspection entry**: monthly, mandatory, with fines, and the contractor list is public (data.go.kr). But the buyer count is small or unknown, no API was found, and the larger players run their own systems. Sources: https://www.hapt.co.kr/news/articleView.html?idxno=35015 ; https://www.kemic.or.kr/info/board_01_view.php?no=22&page=1&keyword=&search= ; https://www.data.go.kr/data/15123452/fileData.do

## Pass history

- **First pass (2026-10-04, ~8 searches):** a single opportunity (CBAM, 4/10) and a list of unresearched leads.
- **Deep pass (2026-10-05, ~46 searches, mostly in Korean):**
  - CBAM was downgraded to rejected after finding the free Korea Customs Service CBAM-PASS tool and the funded consulting program.
  - These leads were researched and closed: Allbaro (rejected: Upbox and ERPs), vet clinics (rejected: EMR–NIMS integration), foreign-worker EPS (rejected), and cosmetics (now "too competitive" based on export-registration startups, rather than the MFDS notification idea).
  - Newly screened: fire-inspection contractors, the disinfection industry, medical-device supply reporting, the safe-freight rate, construction labour, apartment 세대점검, Silson24, elevator maintenance, freight reporting, EPR, pesticide sales records and school-meal suppliers.
  - Four opportunities are now listed. The best lead (fire-inspection contractors, 5/10) still needs competitor confirmation by interviews.
  - No Korean opportunity reaches the brief's build threshold.
