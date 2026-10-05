# Saudi Arabia: offline-industries pass (2026-10-05)

**Status: incomplete.** The WebSearch tool returned "You've hit your usage limit" on the 7th call. Per the instructions ("If a search is refused, stop and write up what you have"), this report covers only 6 searches. No opportunity reached the evidence bar. Everything below comes from search-result snippets (WebFetch is blocked). Anything not shown in a snippet is marked "unverified" or "not researched".

The existing country report (`research/countries/saudi-arabia.md`) already covers fire-safety contractors (Salamah), NCEC environmental reports, engineering stage-supervision, Qiwa/Mudad/GOSI, MWAN waste, FASAH, TGA trucking, pharmacies (RSD), NPHIES, Shomoos, Ejar, SFDA UDI, Balady health certificates, LCGPA and ZATCA. None of these is re-reported here.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Households employing domestic workers | Domestic-worker wages must be paid electronically through Musaned's wage-protection service. Phased in during 2025 (4+ workers in Jan, 3+ in Jul, 2+ in Oct); phase 5 covers **all employers from 1 Jan 2026** (HRSD/Ajel) | Before this, wages were mostly paid in cash and recorded on paper; that is now being forced onto official channels | Millions of household employers (exact figure not retrieved; unverified) | Reject | The buyer is a consumer. The substitute is Musaned itself plus banks and wallets that offer the "domestic worker salary" transfer. There is no B2B workflow left to automate |
| Domestic-worker recruitment offices (مكاتب الاستقدام) | Licensed by HRSD and must operate through Musaned. Quarterly inspection results are published: Q3 2025 found 37 offices in violation, 10 suspended and 27 licences revoked (refund delays, unhandled complaints) | Enforcement is visible, but the workflow already runs on Musaned | Total licensed offices not retrieved (unverified; the search returned the UAE figure of 138 instead) | Not researched further | The pain (refund/complaint SLAs) is real. The likely substitute is Musaned plus existing recruitment-office ERPs (not verified) |
| Gold, jewellery and precious-metal dealers | Precious Metals and Gemstones Law plus MoC AML rules: verify the customer's and beneficial owner's identity before a transaction, issue a stamped invoice with weight and karat, keep records. MoC carried out 8,600+ inspection visits on gold outlets (MoC news, 2021) | Family-run souq shops. AML record-keeping for buy-back of used gold is largely manual (inference; unverified) | 276 new licences in H1 2021 alone (Al Arabiya/Aleqt). Total outlets unverified | Reject (weak) | Daftra and DEXEF already sell Arabic gold-shop POS with ZATCA e-invoicing and weight fields. The AML/KYC add-on is narrow, and the trigger date for the "new" beneficial-owner rule was not confirmed |
| Water-well drillers | MEWA issues three licences: a well licence (drill, deepen, clean, backfill, regularise), a water-use licence, and a licence to practise well drilling. Applied for through the MEWA e-licensing system. Drilling without a licence carries a fine of SAR 50,000–100,000+ | Rural owner-operators. Per-well licensing is done by the farm owner, often through an intermediary (unverified) | Not retrieved | Candidate, unvalidated | Fits "one job, a licence per job", but the search budget ran out before I could confirm per-well reporting duties by the driller, the count of licensed drillers, or the trigger date |
| Livestock traders / markets, camels, falcons | MEWA animal identification and market licensing (not researched) | — | — | Not researched | Budget |
| Beekeepers | MEWA beekeeper registration (not researched) | — | — | Not researched | Budget |
| Pesticide shops / applicators | MEWA pesticide trade and use licensing (not researched) | — | — | Not researched | Budget |
| Scrap / used-goods dealers | MWAN recycling licences, municipal licences (not researched) | — | — | Not researched | Budget |
| Fishermen / fish auctions | MEWA fishing licences (not researched) | — | — | Not researched | Budget |
| Barbers / salons | Balady health certificates and premises rules (covered in part by the country report) | — | — | Not researched | Budget |

Tattoo studios, minibus operators and burial societies are not relevant or not separate markets in KSA: tattooing is not a licensed trade, and transport and burial are state- or app-run (general knowledge; not searched).

## 2. Strongest opportunities

**None meet the bar.** The only lead worth a follow-up pass:

- **Water-well driller compliance pack (lead only, not scored with confidence).** MEWA has three linked licence types (well, water use, practising licence) through one e-licensing system. There are heavy fines (SAR 50k–100k+) for unlicensed drilling and a policy goal of curbing random drilling. If a follow-up pass confirms that (a) the driller must file per-well data (location, depth, completion log, meter installation) and (b) the number of licensed drillers is in the hundreds or more, the product is a per-job "licence check, drilling log, completion report" tool. It would be sold through drilling-rig and pump suppliers or through MEWA branch offices. A non-local founder would need an Arabic-speaking local partner. Provisional score: **4/10** (unverified count, unverified trigger, unverified per-job filing).
  - Sources: https://www.okaz.com.sa/ampArticle/2107525 ; https://www.mewa.gov.sa/ar/MediaCenter/News/Pages/News2652020.aspx ; https://qanoonsa.com/?p=2406

## 3. Rejected

- **Household employers / Musaned wage protection**: buyers are consumers, and Musaned plus bank and wallet transfers already serve the mandate (https://holool2030.com/?p=6030 ; https://www.hrsd.gov.sa/ar/media-center/news/130520241).
- **Gold and jewellery shop AML/KYC**: Daftra (https://www.daftra.com/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9-%D9%85%D8%AD%D9%84%D8%A7%D8%AA-%D8%A7%D9%84%D8%B0%D9%87%D8%A8-%D9%88%D8%A7%D9%84%D9%85%D8%AC%D9%88%D9%87%D8%B1%D8%A7%D8%AA) and DEXEF (https://dexef.com/apps/gold-store-accounts-software) already cover gold POS with ZATCA. The AML add-on is a feature, not a product. Background: https://mc.gov.sa/ar/mediacenter/News/Pages/04-01-21-01.aspx ; https://www.aleqt.com/2021/10/11/article_2187756.html
- **Recruitment offices**: they work inside Musaned. Enforcement is real (https://sabq.org/article/EuXiWBL ; https://www.okaz.com.sa/local/na/2244984), but the incumbent is the government platform. Not pursued.

## 4. Method notes

- Arabic regulator-first queries worked well. "مساند حماية الأجور 2026" and "مكاتب الاستقدام مخالفات" returned HRSD and Saudi press results with dates and enforcement numbers.
- Generic Arabic AML/gold queries drift to Kuwait, Qatar and the UAE. Add "السعودية" plus the MoC domain (mc.gov.sa) to keep results on Saudi sources.
- In KSA the "quiet" obligations tend to be absorbed by a single national platform (Musaned, Balady, MEWA e-licensing). That shrinks the "many receiving authorities" fragmentation the brief favours. The better hunting ground is probably MEWA-regulated rural trades (wells, livestock markets, pesticides, bees), where per-job records are still kept by the operator.
- Budget used: 6 of 40 before the tool refused. A rerun should start with the MEWA trades.
