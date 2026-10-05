# Kuwait: Offline-industries pass

*Research date: 2026-10-05. Budget: 20 WebSearch calls. **I used 7: 6 returned results and the 7th was refused with a usage-limit error.** Under the instructions ("if a search is refused, stop and write up what you have"), I stopped there. WebFetch was not used. This is a deliberately short, honest report. Most rows are screened from what I already knew plus thin evidence, and they are marked as such. Don't treat anything marked "unverified" or "estimate" as fact.*

Context from the existing report (`research/countries/kuwait.md`), which I don't repeat here: gold dealers' and real-estate brokers' AML work (MOCI Decisions 172/173 of 2026, FATF grey list) and the Ashal/WPS employer checks. Those are Kuwait's real "why now" items. This pass looked for quieter industries beyond them.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Households employing domestic workers | Law 68/2015: contract, minimum wage, end-of-service, residency via PAM domestic-labour sector | Done at PAM counters, in the Sahel app and through recruitment offices. I found no Kuwaiti equivalent of Saudi Arabia's Musaned e-wage mandate: my Arabic search for a Kuwaiti salary-transfer mandate returned only Saudi results | Several hundred thousand domestic workers (estimate, unverified; PACI publishes the figure) | Reject (for now) | No recurring filing obligation on the household. Consumers would be the buyers, and PAM/Sahel is the free substitute. |
| Domestic-labour recruitment offices (مكاتب استقدام العمالة المنزلية) | PAM licence, guarantee and replacement period for each worker, contracts, worker files | Office-and-counter trade that runs on WhatsApp and paper files (unverified) | Kuwait count not found. The "221 accredited offices" figure I found comes from al-sharq.com, which appears to be **Qatar's** count, not Kuwait's | Weak candidate (see below) | A licensed, registered and countable trade with per-worker files, but I found no trigger in 2025–26. |
| Scrap yards (سكراب), Amghara | Municipality site licence and MOCI commercial licence | MOCI surprise raid closed 6 unlicensed shops. The Municipality is clearing Amghara and moving it to Salmi Road | Unknown (dozens to low hundreds of yards, estimate) | Reject | The trade is being relocated and cleared. The obligation is the licence itself, not a recurring register, and nobody can buy while the site is uncertain. |
| Livestock holders (جواخير) in Kabd and Wafra | PAAAF holding plot, grazing licence, subsidised-feed eligibility lists | Grazing licences are applied for in person or through the Meta appointment platform with Civil ID and a good-conduct certificate. Inspection campaigns threaten plot withdrawal and KD 10,000 fines | Unknown. "6,000 manipulators of PAAAF feed lists" suggests thousands of registered holders (Al-Jarida, date unverified) | Reject | The state runs everything (plots, feed, licences) for free. Many holders are hobby or subsidy holders, so willingness to pay is low. |
| Fishermen and the Souq Sharq fish auction | PAAAF fishing licence, catch landing | Auction floor; paper | Unknown | Not researched (budget) | — |
| Money exchange companies | CBK licensing, AML/STR to KwFIU | Not quiet: they are CBK-supervised and use core-banking-style software | Dozens (estimate) | Reject | Not small or offline. Bank-grade vendors already serve them. |
| Used-car dealers and spare-parts yards (Shuwaikh, Amghara) | MOCI licence; vehicle deregistration (تسقيط) with the traffic department | Done at counters through agents | Unknown | Not researched (my search on a possible cash ban for car sales was refused) | — |
| Barbers and salons | Municipality and MoH health licences, worker health cards | Done at counters | Unknown | Not researched | Probably a licence-only obligation (estimate). |
| Driving schools | Ministry of Interior licence | — | Few | Reject | Too few operators. |
| Tattoo studios, pawnbrokers | — | — | — | Reject | Effectively not a legal trade in Kuwait (unverified for pawnbrokers). |
| Cemeteries and burial | Municipality-run, so state-owned | — | — | Reject | There's no private operator to buy anything. |

## 2. Opportunities

**None reaches the bar.** I give one weak candidate in the template so that it can be checked if anyone revisits Kuwait.

### Opportunity: Worker-file and guarantee-period tracker for domestic-labour recruitment offices

**Industry:**
Domestic-labour recruitment offices licensed by PAM.

**Buyer:**
The owner or manager of a small recruitment office, typically a Kuwaiti licence holder with 2–10 expatriate staff.

**Trigger / Why now:**
I found none that I could verify. Kuwait regulates these offices under Law 68/2015 and PAM rules (cost caps, a guarantee/replacement period, licensing). I could not check for any change in 2025–26.

**Current workflow (assumed, unverified):**
1. The office matches a household with a worker from a sending-country agency.
2. It tracks visa, arrival, medical and residency steps through PAM, the Sahel app and the Ministry of Interior.
3. It tracks the guarantee period and replaces or refunds the worker if the worker runs away or is rejected.
4. It keeps files on paper, in Excel and on WhatsApp.

**Pain:**
Unverified. Disputes over refunds and replacements are commonly reported in the GCC press. I have no Kuwait-specific evidence from this pass.

**Existing solutions:**
- Generic recruitment-office ERPs sold across the GCC (none verified for Kuwait in this pass).
- Excel.
- PAM and Sahel themselves.

**Offline evidence:**
A counter-based trade. Its online presence is consumer marketing (gccdomestic.com-style guides), not operator tooling.

**Offline channel:**
- Walk-ins at office clusters.
- A PAM licence list, if one is published (unverified).
- The union of recruitment-office owners, if one exists in Kuwait (unverified).

**Market count:**
Unknown for Kuwait. The 221 figure I found is probably Qatar's.

**The gap:**
Unknown until I can confirm what tools offices already use.

**Possible product:**
A per-worker file covering stage, documents, guarantee expiry and refund status, with Arabic and English output for the household.

**MVP:**
A multi-worker pipeline board with guarantee-expiry alerts.

**Pricing hypothesis:**
KWD 20–40 per office per month (estimate).

**How to find first customers:**
Visit office clusters in person. This needs an Arabic-speaking local.

**Risks:**
- No mandatory recurring filing to a regulator, so this is a productivity tool, not compliance.
- Generic GCC recruitment ERPs may already cover it.

**Kill condition:**
Kuwait has fewer than about 300 offices, or GCC recruitment ERPs already serve them.

**Founder access:**
Needs a local Arabic speaker. A non-local solo founder couldn't realistically sell this.

**Willingness to pay:**
Low to moderate. Owners would more likely pay for software than for a service.

**Score:** 3/10

**Sources:**
- https://al-sharq.com/article/04/09/2026/221-مكتباً-معتمداً-لاستقدام-العمالة-المنزلية (probably Qatar; not a Kuwait count)
- https://www.gccdomestic.com/ar/blog/how-to-open-domestic-labour-office-kuwait-2026-ar/
- https://lawskw.com/section/قانون-العمالة-المنزلية

## 3. Rejected

- **Household-employer payroll for domestic workers.** I found no Kuwaiti equivalent of the Saudi Musaned e-wage mandate (Saudi phases ran to 1 Jan 2026). Without a recurring legal obligation, households don't buy.
  - https://sabq.org/article/sHvQiQs (Saudi, used for comparison)
- **Scrap yards.** The trade is being cleared and relocated from Amghara to Salmi Road. The enforcement is about licences, not record-keeping.
  - https://www.alanba.com.kw/1317567
  - https://www.alraimedia.com/article/154201/
  - https://www.aljarida.com/articles/1462328926897530400
- **Livestock holders.** PAAAF runs the holding plots, grazing licences and subsidised feed lists for free, through counters and the Meta app. The holders are subsidy-driven and willingness to pay is low.
  - https://www.alraimedia.com/article/1773791/
  - https://www.alanba.com.kw/1368251
  - https://www.aljarida.com/article/22264
  - https://www.aljarida.com/articles/1659812366752272700
- **Money exchangers.** Not quiet; bank-grade vendors serve them.
- **Cemeteries.** State-run.
- **Tattoo studios and pawnbrokers.** Not a viable legal trade.
- **Driving schools.** Too few operators.

## 4. Method notes

- **Arabic queries without a domain filter were swamped by Saudi, Egyptian and Qatari results.** "الكويت" in the query isn't enough: two of my first four queries returned other countries' data. Restricting to Kuwaiti press domains (alraimedia.com, alanba.com.kw, aljarida.com, alseyassah.com) worked well and returned PAAAF enforcement news straight away.
- **Kuwait's quiet trades are mostly state-dependent** (plots, feed subsidies, a single state cemetery operator, Municipality relocations). The regulator usually *is* the service provider, so there is little "filing burden on a small business" for software to remove. Kuwait's real quiet-industry wedge stays the DNFBP AML work covered in the main report (gold dealers, real-estate brokers).
- **Not screened because the search was refused:** used-car and spare-parts dealers (a possible cash-ban extension), fishermen, barbers and salons, small food producers, the Friday market. These are the next queries if anyone revisits Kuwait.

Research model: Opus
