# Hong Kong: quiet-industries pass

Method note: this report rests on about 31 web searches, out of a budget of 40. One search was refused for a usage limit partway through, and the work resumed once the limit cleared. WebFetch was not used, so every claim comes from search snippets of official pages (gov.hk, Customs, Police, Labour Department, AFCD, FEHD, LegCo) or industry pages. Anything without a source is marked estimate or unverified.

Context from the existing country report (`research/countries/hong-kong.md`) still applies. Hong Kong is open to a foreign founder, but it is small, government often supplies free tools, and anything written in Chinese needs local review. That report already covers TSW, BMO procurement, SOPO and care homes, and none of them are repeated here.

Hong Kong is a poor fit for the "quiet industry" thesis. Its regulated small-business sectors are dense, urban and mostly online already, and the agricultural, animal and field-trade groups in the seed list are tiny here. The best quiet-industry lead is the back office of foreign-domestic-helper (FDH) employment agencies. It is driven by Philippine-side (MWO/DMW) paperwork changes in 2026, not by Hong Kong rules.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| FDH employment agencies | Labour Dept EA licence; revised Code of Practice (9 May 2024) on fee and refund agreements and briefing FDHs; ID407 contract + visa to ImmD; Philippine MWO contract verification (paper originals, new 2026 advisories) | MWO requires 2 sets of original contracts, photocopies of HKIDs with phone numbers written on them, and a printed e-visa, all submitted in person | 1,527 FDH-placing EAs at end-2021 (LCQ12, Jan 2022); about 3,000 EAs of all kinds (2017) | **Candidate (5/10)** | One placement means filings to ImmD, MWO, KJRI and an insurer; Singapore agencies pay for vertical SaaS (MAMS); no Hong Kong-specific tool found |
| Households as FDH employers | ID407 contract, visa renewal, employees' compensation insurance, wage records, ID407E termination notice | Paper contracts obtained by post or email from ImmD | about 360,000 FDHs, about 1 in 8 households (Oct 2025 report) | Reject | Buyers are consumers; DIY tools (daydayhelp, heyavo, gma.hk free ID407E filler) and agencies already serve them |
| Dealers in precious metals and stones (jewellers, gold shops) | Customs registration since 1 Apr 2023; Category B must do CDD and keep records for cash deals of HK$120,000 or more | Small shops, jade traders; enforcement in 2025 for cash dealing without Category B registration (unverified detail) | more than 2,800 registrants (Customs/The Standard, 2023); Category B share unknown | Candidate (4/10) | Real AML record-keeping, but triggered only by large cash deals, so frequency is low for most shops |
| Pawnbrokers | Police licence (HK$5,580/yr, 12 months); Pawnbrokers Ordinance and Regulations on pledges and tickets | Police licensing guide and paper application | Count not found (estimate: low hundreds, unverified) | Reject | Too few operators; workflow is a pawn-ticket ledger that existing pawn POS likely covers (unverified) |
| Taxi owners | All taxis must offer two e-payment methods from 1 Apr 2026; in-cab recording systems by end-2026 linked to a central government system | Owner-drivers, older | about 18,000 taxis (estimate, unverified) | Reject | Met with hardware from designated authorised suppliers plus payment acquirers; no software wedge |
| Red minibus owners | Transport Department PLB licensing; red-to-green conversion scheme; demand-responsive pilot | Owner-drivers; ridership falling (HKBU 2026) | about 890 RMBs registered, about 700 with active licences (LegCo reply, Jun 2026, via OpenGov Asia) | Reject | Shrinking trade with no recurring filing; the pilot app is government-led |
| Money service operators | Customs MSO licence; AMLO CDD and record-keeping | Counter businesses; list on data.gov.hk | 817 MSO premises at end-Jul 2025, down from 2,017 in 2019 (LCQ, 25 Sep 2025) | Reject | Shrinking fast; AML/CDD software is a generic, crowded category |
| Undertakers of burials | FEHD licence; statutory register of the deceased (Cap 132CB s.10), inspected by FEHD every 3 months | Paper register inspected on site | 101 licensed undertakers in 2011 (LCQ12, May 2011); 7 funeral parlours | Reject | Too few operators; a quarterly-inspected register is not enough pain to pay for |
| Livestock farms (pig, poultry) | AFCD livestock-keeping licence (Cap 139L); animal counts must match records | Paper records; AFCD checks counts against records | 43 licensed pig farms (2025, WOAH paper); 29 chicken farms (2018) | Reject | Fewer than 100 farms |
| Animal traders and dog breeders | AFCD Animal Trader Licence; Dog Breeder Licence A/B (since 2017); records of animals sold | Pet shops, small breeders | 111 ATLs and 6 breeder licences (Jun 2017) | Reject | Small, and pet-shop POS covers it (unverified) |
| Plastic and other recyclers | Proposed licensing of plastic, carton, EV-battery and tyre recycling facilities under the PRS common-framework bill (gazetted 28 Mar 2025); EPD does not licence general recyclers today | Small recyclers, many informal | Not counted; EPD Collector/Recycler Directory exists | Watch | Commencement dates not found; the trigger is not yet live |
| Licensed hawkers | FEHD fixed-pitch and itinerant licences | Elderly licensees; numbers falling | 4,848 fixed-pitch and 233 itinerant hawkers (2024, SCMP/LCQ9) | Reject | No recurring filing, and the trade is disappearing |
| Pesticide permit holders / pest control | AFCD Pesticides Ordinance licences; permit holders submit transaction records to AFCD | AFCD guidance PDFs | Not counted | Unverified | Not enough evidence gathered on the reporting burden |
| Scrap / second-hand dealers | No dealer register reported to police was found in Hong Kong (unverified) | — | — | Not applicable | No obligation found |

Country-specific groups added from licensing registers: precious-metals dealers (Customs DRS), money service operators (Customs MSO list) and FDH employment agencies (Labour Dept EA Portal).

## 2. Strongest opportunities

### Opportunity: Placement dossier router for FDH employment agencies (ImmD + MWO + consulate + insurer)

**Industry:**
Foreign-domestic-helper employment agencies (small, often family-run shop-front agencies in Central, Causeway Bay, Mong Kok, Yuen Long and similar districts)

**Buyer:**
Owner or office manager of a licensed employment agency that places Filipino and Indonesian helpers, typically a 2-10 person office.

**Trigger / Why now:**
- The Labour Department's revised Code of Practice for Employment Agencies (9 May 2024) requires written agreements that list fees per service category and refund or replacement terms, plus documented briefing of FDHs on immigration rules.
- The Indonesian side adds its own layer. Agencies placing Indonesian helpers need a Business Accreditation Certificate from the Indonesian Consulate General (KJRI), in addition to the Hong Kong EA licence. Since 1 Jan 2022, contract renewals and transfers submitted through accredited agents must include a family consent letter acknowledged by the village head (lurah).
- The Philippine Migrant Workers Office Hong Kong issued several 2026 advisories:
  - adjusted verification fees from 1 March 2026;
  - Advisory 05-2026: no processing of contracts unless the agency holds valid FRA accreditation;
  - Advisory 06-2026: a new release schedule for verified contracts of agency-hired workers.
- Each change alters the paperwork agencies have to assemble.

**Current workflow:**
1. The agency matches employer and helper (often through HelperChoice-type sites or its own Facebook page) and fills the ID407 standard contract (4 copies) and the ImmD visa forms.
2. It submits the visa to ImmD and waits for the e-visa.
3. For Filipino helpers it assembles the MWO pack: 2 original ID407s, a photocopy of the employer's HKID with phone number written on it, a photocopy of the helper's HKID, the original passport plus a copy, the printed e-visa and the OWWA information sheet. Someone queues at MWO and later collects the verified contract on MWO's release schedule.
4. It arranges employees' compensation insurance, keeps CoP-compliant fee and refund agreements, and tracks renewals two years later.

**Pain:**
- Each placement goes to three or four receiving bodies, each with its own format, and the Philippine side changes its rules several times a year.
- The Labour Department received 373 complaints against EAs in 2025, 202 of them for Code of Practice non-compliance.
- Licences are revoked after overcharging convictions.
- Errors in the paper pack mean extra trips to MWO and delayed deployment.

**Existing solutions:**
- Consumer matching platforms: HelperChoice (also sells visa processing), HelperPlace, SeekHelpers (claims real-time visa tracking), JollyHelper, HelperMatch.
- DIY services for employers who skip agencies: daydayhelp (智傭易), heyavo, the free gma.hk ID407E form filler, Kwiksure guides.
- Generic recruitment software (Roubler and similar).
- Excel and paper files inside agencies.
- **Singapore maid-agency SaaS:**
  - MAMS (Maid Agency Management System) claims 500+ agencies in Singapore and Malaysia, at S$100 setup plus S$100-200 per branch per month.
  - MaidsLah covers biodata, leads, PDFs, invoices and reconciliation.
  - NetMaid is an agency data and listing app.
  - These products are built around Singapore MOM work permits. No Hong Kong-specific agency back-office product (ID407 + ImmD + MWO + KJRI) was found in four searches; that absence is unverified.

**Offline evidence:**
- MWO requires physical originals and annotated photocopies.
- ImmD still mails out ID407 contracts on request.
- The relevant rules are spread across PDF advisories on mwohk-ph.com and the Labour Dept EA Portal.
- No review-site listings for agency back-office software turned up.

**Offline channel:**
- Phone or walk-in outreach to agencies using the Labour Department's public EA search on the EA Portal (eaa.labour.gov.hk), which lists licensed agencies with addresses.
- Agency trade associations that appear in LegCo records (2014): the Hong Kong Chamber of Employment Agencies and the Association of Hong Kong Agencies for Migrant Workers Ltd. Their current status is unverified.
- Agencies cluster physically (e.g. Worldwide House and other Central/Wan Chai buildings, unverified), so door-to-door selling is feasible.

**Market count:**
1,527 licensed EAs placing FDHs at end-2021 (LCQ12, 19 Jan 2022), out of about 3,000 licensed EAs. Placements are driven by about 360,000 FDHs on two-year contracts, so roughly 150,000-180,000 contracts or renewals a year (estimate).

**Why the Singapore evidence matters:**
MAMS shows that small maid agencies do pay about S$100-200 per branch per month for vertical software, which supports willingness to pay. It also means the most likely competitor is a Singapore vendor localising to Hong Kong, so speed and Hong Kong-specific rule depth are the moat.

**The gap:**
A tool that takes one placement record (employer, helper, nationality) and produces every document pack each receiving body needs: an ID407 pre-fill, the MWO checklist with current-advisory rules (fee, FRA accreditation, release dates), a CoP-compliant fee and refund agreement, and a renewal date tracker. It would be maintained as the Philippine and Indonesian rules change.

**Possible product:**
A bilingual (English/Chinese, with Tagalog/Bahasa helper-facing pages) placement workspace. It generates the per-authority document sets, tracks each case through ImmD → MWO → deployment, and warns 3 months before contract end.

**MVP:**
ID407 + MWO verification pack generator for Filipino transfer or renewal cases, with a printable checklist reflecting 2026 MWO advisories and a renewal reminder list. Build it in weeks.

**Pricing hypothesis:**
HK$300-800/month per agency, or HK$30-60 per placement. Owners would likely pay for software only if it visibly saves staff trips. Some will want it done for them, which competes with their own core service, so the offer should be software.

**How to find first customers:**
Download or scrape the EA Portal licensed-agency search, filter to FDH agencies, then phone and visit 30 in one district.

**Risks:**
- The agency sector is shrinking as direct-hire platforms grow.
- Owners are price-sensitive.
- Rule-tracking for MWO and the Indonesian consulate is ongoing maintenance.
- Consumer platforms (HelperChoice, SeekHelpers) could add agency back-office features.
- KJRI 2025-2026 changes were not checked.

**Kill condition:**
Interviews show agencies spend under 1 hour per placement on paperwork, or a large platform already gives agencies a free dossier tool.

**Founder access:**
A non-local founder could build it. Selling needs Cantonese-speaking, in-person visits, so plan on a local partner or a part-time local sales person.

**Score:** 5/10 (willingness to pay is proven in Singapore; the sector is shrinking and a Singapore vendor could localise)

**Sources:**
- https://maidagencysoftware.com/maid-agency-software-pricing-singapore ; https://www.maidslah.com/ ; https://www.netmaid.com.sg/
- https://www.info.gov.hk/gia/general/201402/12/P201402120309_print.htm (KJRI business accreditation certificate)
- https://ddhk.org/en/as-of-January-1%2C-2022%2C-the-signature-of-the-work-contract-requires-written-approval-from-the-family-known-to-the-village-head-or-lurah/
- https://www.legco.gov.hk/yr13-14/english/panels/mp/minutes/mp20140227.pdf (agency associations)
- https://www.immd.gov.hk/eng/services/visas/fdh/smartrenewal.html (online FDH visa / e-Visa)
- https://www.info.gov.hk/gia/general/202201/19/P2022011900232p.htm (LCQ12: 1,527 FDH agencies end-2021)
- https://www.legco.gov.hk/yr16-17/english/panels/mp/papers/mp20170221cb2-827-4-e.pdf (3,023 EAs, 1,416 FDH)
- https://www.info.gov.hk/gia/general/202605/13/P2026051300278.htm (2025 EA complaint figures)
- https://www.news.gov.hk/eng/2024/05/20240509/20240509_130443_661.html (revised CoP 2024)
- https://mwohk-ph.com/verification-of-employment-contracts/
- https://mwohk-ph.com/advisory-05-2026-mandatory-non-processing-of-contracts-without-valid-fra-accreditation/
- https://mwohk-ph.com/advisory-06-2026-new-releasing-schedule-of-verified-employment-contracts-for-agency-hired-ofws/
- https://mwohk-ph.com/tag/2026/ (verification fee adjustment from 1 Mar 2026)
- https://www.immd.gov.hk/hkt/services/visas/foreign_domestic_helpers.html
- https://investinchina.chinaservicesinfo.com/s/202510/20/WS68f64582498e3685503366b5/360-000-foreign-domestic-helpers-in-hong-kong-make-contribution-to-families-society.html
- https://seekhelpers.com/visa-support ; https://www.helperchoice.com/c/visa-processing-domestic-helpers-hong-kong ; https://gma.hk/zh/tools/id407e

### Opportunity: Category B CDD and record kit for small jewellery and gold dealers

**Industry:**
Dealers in precious metals and stones (DPMS): jewellery and gold shops, jade traders, small diamond dealers.

**Buyer:**
Owner of a small jewellery or gold shop or jade stall that is registered (or should be) as Category B because it takes cash payments of HK$120,000 or more.

**Trigger / Why now:**
- The DPMS registration regime has run since 1 April 2023.
- Category B registrants fall under AMLO Schedule 2 (CDD, record-keeping), and Customs can impose pecuniary penalties under a published Disciplinary Action Guideline.
- Customs announced enforcement in 2025 against dealers that made cash transactions without Category B registration (the details of these cases are unverified).

**Current workflow:**
1. When a cash sale reaches the HK$120,000 threshold, staff photocopy the customer's ID and fill an in-house form.
2. Staff decide by hand whether the deal is linked or split (several smaller payments adding up).
3. Paper files are kept for Customs inspection, and suspicious transactions are reported to the JFIU (STREAMS) separately.

**Pain:**
- Pecuniary penalties and disciplinary action apply.
- Linked-transaction rules are easy to miss.
- Older family-run shops have no compliance staff.

**Existing solutions:**
- Customs guidelines and templates on the DRS portal.
- AML/KYC regtech vendors that target banks, TCSPs and estate agents (product names unverified).
- Accountants and compliance consultants.
- Paper ID photocopies.

**Offline evidence:**
- Registration and guidance live on a Customs portal.
- Industry outreach goes through associations (the Hong Kong Jade Association publicly backed the regime).
- No DPMS-specific Hong Kong software was found (unverified).

**Offline channel:**
Hong Kong Jade Association and jewellers' and goldsmiths' trade bodies (names other than the Jade Association unverified), Customs DRS industry seminars, and jewellery trade fairs.

**Market count:**
More than 2,800 registrants by 2023 (Customs, via The Standard). The Category B subset is unknown and probably a minority (estimate).

**The gap:**
A cheap, Chinese-first tool that captures CDD at the counter (ID scan, beneficial-owner question, PEP/sanctions screening), flags linked transactions and produces an inspection-ready file.

**Possible product:**
A tablet form plus a ledger that records each threshold transaction, runs a sanctions-list check, and exports a Customs-ready record and a draft STR.

**MVP:**
A bilingual counter-side CDD form with threshold and linked-sale logic and a 5-year record archive.

**Pricing hypothesis:**
HK$200-500/month per shop (estimate). Many shops would rather pay an accountant once a year.

**How to find first customers:**
The public DPMS register on the Customs DRS site (it lists registrants; unverified whether category is shown) plus association outreach.

**Risks:**
- Usage is low-frequency for most shops.
- Large chains (Chow Tai Fook and similar) build their own.
- Generic AML vendors can add a DPMS template.

**Kill condition:**
Interviews show most Category B shops do fewer than 5 threshold cash deals a month.

**Founder access:**
Needs Cantonese and in-person sales. A non-local founder would need a local partner.

**Score:** 4/10

**Sources:**
- https://www.drs.customs.gov.hk/img/medias/New_Registration_Regime_for_DPMS_en.pdf
- https://www.thestandard.com.hk/news/article/204290/New-Registration-Regime-for-Dealers-in-Precious-Metals-and-Stones-Act-Now-for-Any-Transactions-with-Total-Value-at-or-above-HKD120000
- https://www.thestandard.com.hk/news/article/206943/Hong-Kong-Jade-Association-supports-the-registration-regime-for-dealers-in-precious-metals-and-stones
- https://www.info.gov.hk/gia/general/202507/31/P2025073100553.htm (2025 Customs enforcement; detail unverified)
- https://www.customs.gov.hk/en/customs-announcement/press-release/index_id_4924.html

## 3. Rejected

- **Household FDH employer payroll and contract tool:** about 360,000 helpers, but the buyer is a consumer household. Obligations are light (FDHs are exempt from MPF; there is one insurance policy and a two-year contract). DIY services such as daydayhelp, heyavo and gma.hk, plus agencies, already cover it. This idea depends on consumer behaviour.
- **Taxi e-payment and in-cab camera compliance:** real mandates (e-payment from 1 Apr 2026, cameras by end-2026 linked to a government system), but they are met with hardware from designated suppliers and payment acquirers. There is no software wedge.
- **Pawnbrokers:** a police-licensed, paper-heavy trade, but too few operators (count unverified) and likely covered by pawn POS software.
- **Money service operators:** premises fell from 2,017 (2019) to 817 (Jul 2025) (https://www.info.gov.hk/gia/general/202509/25/P2025092400905.htm). The trade is shrinking and AML/CDD software is a generic, crowded category.
- **Undertakers, livestock farms, animal traders and breeders:** all have real registers and inspections, but too few operators: about 101 undertakers, 43 pig farms and about 117 AFCD trader and breeder licences (2017). Sources: https://www.info.gov.hk/gia/general/201105/25/P201105250206_print.htm, https://rr-asia.woah.org/app/uploads/2025/08/Hong-Kong-SAR_East-Asia-CVO-meeting_TADs_ASFother-diseases-1.pdf, https://www.info.gov.hk/gia/general/201707/12/P2017071200511p.htm
- **Red minibuses and hawkers:** shrinking trades with no recurring filing. There are about 700 active red minibus licences (https://opengovasia.com/hong-kong-reviews-public-light-bus-policy-amid-driver-shortages-and-electrification-plans/) and 4,848 fixed-pitch hawkers (https://www.scmp.com/news/hong-kong/society/article/3316600/hong-kongs-hawkers-could-disappear-2033-unless-licensing-rules-are-eased-lawmaker).
- **Watch, not reject: plastic and other recycler licensing.** The PRS common-framework bill (gazetted 28 Mar 2025) adds licensing for plastic, carton, EV-battery and tyre recycling facilities. Commencement dates were not found. Revisit once the subsidiary legislation sets record and return obligations (https://www.info.gov.hk/gia/general/202503/28/P2025032700206p.htm).

## 4. Method notes

- What worked:
  - Government press releases and LegCo answers (LCQ) gave counts and enforcement figures.
  - The Philippine MWO Hong Kong site exposed a fast-changing paper workflow that the Hong Kong-side sources hide.
  - Customs pages exposed the newer AML registers (DPMS, MSO).
- What didn't work:
  - Chinese queries for operator counts (pawnbrokers, FDH totals) returned guides, not numbers.
  - Hong Kong-specific searches for agency back-office software returned only consumer platforms.
- Hong Kong's quiet trades are mostly too small (fewer than 150 operators each) or shrinking. Regulators publish the counts in LegCo replies (LCQ), which made it quick to reject them.
- Searching for the same trade in a neighbouring market (Singapore maid-agency software) was the most useful step for competitor diligence and willingness to pay.
- Two next steps for a follow-up pass:
  - count operators from the data.gov.hk registers (the MSO list and the EA Portal search);
  - check KJRI Hong Kong rule changes for 2025-2026 and whether MAMS or MaidsLah sell in Hong Kong.
