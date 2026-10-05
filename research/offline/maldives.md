# Maldives: Offline-Industries Pass

**Date:** 2026-10-05
**Market class:** Microstate, about 0.5m residents (roughly 0.38m Maldivians plus a large expatriate workforce). The economy rests on tourism and fisheries. Many licences are issued from Malé, by bodies such as MMA, MIRA, the Tourism Ministry and the Transport Authority.
**Search budget:** 8. The run was interrupted by an API usage limit and then resumed. In the resumed session, 3 WebSearch calls were made. Only one returned results (money changers). The other two failed with "You've hit your usage limit". Following the instructions ("if a search is refused, stop and write up what you have"), I stopped there. No record of searches from before the interruption survived, so the total may be under 8 or unknown, but it did not exceed 8.
**Evidence quality:** Only the money-changer row rests on a source fetched in this pass. The other rows rest on the existing country report (`research/countries/maldives.md`) or on general knowledge, and are marked **unverified** where that applies. Treat every count other than the MMA licence cap as an estimate.

**Bottom line:** No quiet industry in the Maldives supports a standalone indie software product. The best-evidenced quiet, regulated trade is **money changing**. Since 1 Oct 2024 it has run under a new MMA regulation with a two-tier licence and a **hard cap of 50 new licences**. That makes the buyer pool at most about 50 firms, all Maldivian-owned, all with Maldivian-only staff. AML/CFT reporting probably applies (unverified). This is a real obligation in a very small market, sold to people who need a local relationship. One possible angle is an expat-domestic-worker compliance tracker for **household employers**. It overlaps with the Xpat tracker already scored 4/10 in the country report, and its key facts could not be verified because of the search outage. Section 2 is therefore empty on purpose. Don't re-report the country report's ideas: MGIS/TIMS/Green Tax for guesthouses, the Xpat quota tracker, overseas-operator GST, FIS catch certificates, payroll and e-invoicing.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Money changers (non-bank) | MMA Regulation on Money Changing Businesses, in force 1 Oct 2024. Tier 1 is a five-year licence open only to 100% Maldivian-owned companies with Maldivian-only staff, with an application fee of MVR 20,000 and an annual fee of MVR 24,000. Cash is capped at MVR 50,000 per customer per day. Existing operators had to re-apply by 1 Dec 2024. Tourism-Act registrants that change money for tourists are exempt. | Small counter businesses in Malé. No software listings found. A daily per-customer cap implies a customer/transaction register (the form of reporting to MMA is unverified). | **At most 50 new licences** (MMA cap, per CTL Strategies / Edition.mv) | Reject (watch) | It's a real recurring register and cap-monitoring duty, but the market tops out at about 50 buyers paying for a narrow tool. It also needs a local presence and an MMA reporting format that hasn't been verified. |
| Household employers of expat domestic workers (housemaids, drivers, caregivers) | Households hire through the Xpat system: quota, work permit, medical and visa renewals, and the employment agreement (per the existing report's Xpat findings; the household-specific rules are **unverified**) | Households rely on recruitment agents who file on their behalf. Filing is portal-based but done by intermediaries. | Unknown. Thousands of households (estimate, unverified) | Reject | It duplicates the country report's Xpat tracker (4/10). Households pay agents per transaction and won't buy software. |
| Recruitment agents for expatriate workers | Licensed agency obligations under the expatriate employment regulations, plus filing quotas and permits for clients | Paper document packs, notarised declarations (new from Jan 2026, per the country report), WhatsApp contact with clients | Unknown. No public list found (unverified) | Reject | Already covered in the country report. The market is small and its pricing is per transaction. |
| Taxi operators (Malé, Hulhumalé) | Vehicle and taxi-permit registration with the Transport Authority, plus a taxi-centre affiliation | Counter and portal renewal. Dispatch is mostly by phone through taxi centres (general knowledge, unverified). | Low thousands of taxis in Greater Malé (estimate, unverified) | Reject | Licensing is annual or periodic with no per-trip filing. Ride-hailing and dispatch apps are the substitute. |
| Dhoni / launch / ferry and safari-vessel operators | Vessel registration and seaworthiness surveys with the Transport Authority. Liveaboards also need a tourism licence. | Surveys and renewals happen at the counter (unverified) | Hundreds of vessels (estimate) | Reject | Renewals are infrequent. Liveaboards are already covered as Green Tax/MGIS registrants in the country report. |
| Dive centres / water-sports operators | Tourism Ministry registration, dive-safety rules (unverified) | Dive logs are kept on paper or in dive-shop software | About 100–200 registered centres (estimate; tourism.gov.mv registered facilities list) | Reject | Dive-shop software is international and mature. No new filing trigger was found. |
| Fishermen selling own catch / small fish buyers | Fishing-vessel licence and catch logbooks in the government FIS | The government FIS already covers logbooks and purchases (country report) | Thousands of fishers (estimate) | Reject | The government system is the substitute, and fishers wouldn't pay. |
| Scrap metal / second-hand / pawn dealers | No police dealer register found. Pawnbroking is not covered by the MMA money-changer result. | Not found | Very few (estimate) | Reject | No obligation found in the budget. Scrap goes out through occasional export shipments. |
| Livestock / slaughter / beekeeping | Minimal. Livestock is mostly poultry and goats on a few islands. | Not applicable | Very small | Reject | No meaningful sector. Halal assurance on imported meat sits with importers. |
| Barbers / salons / small food producers on islands | Island-council business permit and health (HPA) inspection (unverified) | Handled at the council counter | Hundreds (estimate) | Reject | Annual counter licence only, with nothing recurring to automate. |
| Tattoo studios | Not applicable. The activity is restricted or illegal in practice (unverified). | Not applicable | 0 | Reject | No legal market. |
| Cemeteries / burial | Death registration with the civil registry. Burial is managed by island councils. | Done at the counter | No commercial funeral sector | Reject | No commercial operators. |
| Desalination / small island water and sewer operators | UREA (Utility Regulatory Authority) licence and water-quality reporting (unverified) | Operated by state utilities (FENAKA, MWSC) | A handful of operators, all state-owned | Reject | Buyers are state utilities, so this would be enterprise procurement. |

Three of these groups are specific to the Maldives rather than taken from the seed list: money changers under the MMA tier licence, dhoni/safari-vessel operators and dive centres. Money changing is the only one confirmed against a regulator source in this pass.

## 2. Strongest opportunities

None. No candidate met the bar. A real candidate needs identifiable buyers at scale, a recurring mandatory filing, willingness to pay and an offline channel. The closest one is below as an indication, not a recommendation.

- **Money-changer register and MMA daily-cap compliance log.** Buyer: about 50 MMA-licensed money changers. Trigger: the 2024 regulation, with its cap of MVR 50,000 per customer per day and the five-year Tier 1 licence. Substitute: a paper or Excel ledger plus a local accountant, or bank-grade AML tools, which would be overkill. Offline channel: the MMA's published licensee list (not verified to exist publicly) and visits to counters in Malé. Market count: at most 50 (MMA cap). Willingness to pay: probably only for a done-for-you service. The founder would need to be local. **Indicative score: 2/10.** It stays at that level unless it is folded into a regional money-changer/AML tool, for example one also covering Sri Lanka.

## 3. Rejected

- **Money-changer compliance tool:** at most 50 buyers, local-only ownership, and an unverified reporting format. The substitute is a paper or Excel ledger plus an accountant.
- **Household employer of expat domestic workers:** it duplicates the Xpat tracker in the country report. Recruitment agents do the work per transaction.
- **Taxi / dhoni / vessel licensing:** renewals are periodic counter visits with no recurring report. Dispatch apps and the counter are the substitutes.
- **Dive centres:** mature international dive-shop software, and no new trigger.
- **Fishermen / fish buyers:** the government FIS is the substitute.
- **Utilities, cemeteries, scrap, livestock, tattoo:** the buyer is the state, there is no commercial sector, or there is no obligation.

## 4. Method notes

- The regulator-first pattern worked once: searching "Maldives Monetary Authority licensed money changers regulation" went straight to the gazetted regulation, through CTL Strategies (a law-firm regulatory tracker) and Edition.mv. CTL Strategies' "latest regulation" summaries and the old.mvlaw.gov.mv gazette PDFs look like the best regulator-first sources for the Maldives.
- Two of the three searches in this session failed with a usage-limit error. Household-employer and Transport Authority licensing could not be verified, so those rows rest on the country report or on estimates.
- Dhivehi-language queries were not attempted. Gazette texts are in Dhivehi, but English summaries from law firms exist.
- The Maldives publishes few public licensing registers. The Tourism Ministry facility directory is the main exception, and it was already used in the country report.

## Sources

- CTL Strategies, "Regulation on Money Changing Businesses": https://www.ctlstrategies.com/latest/regulation-on-money-changing-businesses/
- Edition.mv, "MMA gazettes money changing business regulations, raises fees": https://edition.mv/business/36426
- MMA regulation PDF (gazette archive, not opened): https://old.mvlaw.gov.mv/pdf/gavaid/MMA/8.pdf
- Existing country report for the Xpat, tourism and fisheries context: `research/countries/maldives.md`
