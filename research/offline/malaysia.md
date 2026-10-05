# Malaysia - Offline-industries pass (2026-10-05)

**Status: incomplete.** This pass stopped early. Two WebSearch calls succeeded, then the third was refused with a usage-limit error. Following the instructions ("if a search is refused, stop and write up what you have"), this report covers what those two searches established. The screening table is otherwise filled from background knowledge and the existing country report, and every such row is marked **unverified**. No market counts below come from a register I actually saw, except where a source is cited.

Existing country report: `research/countries/malaysia.md`. Its opportunities (eSWIS v2, DOSH CF/SSI, BOMBA fire certificate, stamp duty) are not repeated here.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Gold shops / jewellers (kedai emas), dealers in precious metals and stones (DPMS) | Reporting institutions under AMLA 2001. They follow BNM's AML/CFT/CPF and TFS policy document for DNFBPs: customer due diligence, cash threshold reports (CTR) on cash deals above RM25,000 (lowered from RM50,000), and the yearly Data and Compliance Report (DCR, regular since 2020). Verified from search snippets. | Mostly family-run Chinese, Malay and Indian goldsmith shops. No DPMS-specific Malaysian compliance software surfaced in either search (only 2 searches were run, so this is weak evidence). | Unknown. Not verified. | **Lead (4/10), needs interviews** | Mandatory, enforced by BNM, and the CTR threshold halving raises the volume. Competition and count not checked. |
| Pawnbrokers (conventional, KPKT) and Ar-Rahnu operators | Pawnbrokers Act 1972 licence, pledge books and pawn tickets. Pawnbrokers are also believed to be AMLA reporting institutions (unverified). | Unverified. | Unverified (a few hundred licensed shops is a guess). | Not screened | Search budget ran out. Ar-Rahnu is run by institutions (YaPEIM, cooperatives, banks), not small shops. |
| Second-hand and scrap metal dealers | Second-Hand Dealers Act 1946 register (unverified), local-council licence, police checks on copper-cable theft (unverified). | Unverified. | Unverified. | Not screened | No search done. Worth a regulator-first pass next time. |
| Households employing foreign domestic workers | Work permit and levy via Immigration/FWCMS, SOCSO coverage for domestic workers (unverified detail), Employment Act payslip duties (unverified). | Done by households plus licensed maid agencies. | Unverified. | Not screened | The agency is the natural intermediary and likely the buyer. Not researched. |
| Swiftlet / edible-bird's-nest ranchers | DVS registration and traceability for EBN exports to China (unverified). | Rural, owner-operated. | Unverified. | Not screened | Malaysia-specific and promising on paper. No evidence gathered. |
| Rubber dealers (MRB licence) and palm-fruit dealers (MPOB licence) | Monthly returns to the licensing board (unverified). EUDR traceability from 2026-12-30 (from the country report). | Rural dealers, paper receipts (unverified). | Unverified. | Covered by the country report | The country report already flags this as "attractive problem, poor distribution", with government platforms and EUDR vendors in place. |
| Licensed desludgers (septic) | SPAN/IWK licensing and desludging records (unverified). | Unverified. | Unverified. | Not screened | No search done. |
| Pesticide retail shops | Pesticides Board premises licence and sales records (unverified). | Unverified. | Unverified. | Not screened | No search done. |
| Fishermen and fish landing | DOF vessel licence and logbooks (unverified). | Unverified. | Unverified. | Not screened | No search done. |
| Money changers | BNM MSB licence and AML reporting. | Not quiet: well served by MSB software and banks' own tooling (unverified). | Unverified. | Likely reject | Regulated by BNM with heavy supervision. Probably already served by vendors. |
| Hawkers and market traders | Local-council (PBT) licences, typhoid jabs and food-handler courses (unverified). | Counter-based renewals. | Unverified. | Likely reject | Low ability to pay. Renewal is annual. |
| Driving schools (JPJ) | Institut memandu records (unverified). | Unverified. | Unverified. | Not screened | No search done. |

## 2. Strongest opportunity (provisional)

### Opportunity: AMLA compliance kit for kedai emas (CDD, cash-threshold reports and the yearly DCR)

**Industry:**  
Gold shops, goldsmiths and jewellers (dealers in precious metals or stones)

**Buyer:**  
The owner or second-generation manager of an independent gold shop or a small chain. That person is usually the named compliance officer.

**Trigger / Why now:**  
- BNM halved the daily cash threshold report trigger from RM50,000 to RM25,000 (The Edge, April 2024, with a January 2025 follow-up article). More transactions now need a CTR.
- The yearly Data and Compliance Report (DCR) has been mandatory since 2020.
- The record gold price in 2025–2026 makes every sale bigger, so more sales cross the threshold. This is an inference, not verified.
- A FATF mutual evaluation of Malaysia would add pressure on DNFBP supervision. Its timing is **unverified**.

**Current workflow (assumed, needs interviews):**  
1. Customer pays cash for gold. The counter staff photocopy the customer's IC and write the sale in the shop ledger.
2. For cash over RM25,000, the owner fills in and submits a CTR to BNM's FIED (the submission channel is unverified).
3. Once a year the owner answers the DCR questionnaire, pulling counts of customers, CTRs and STRs from paper ledgers.
4. Sanctions screening (TFS) is done ad hoc or not at all (unverified).

**Pain:**  
- Mandatory and enforced by BNM. The penalty scale under AMLA is high, but the actual enforcement on gold shops is **unverified**.
- Older owners, paper ledgers and IC photocopies, which is assumed and needs interviews.

**Existing solutions:**  
Not researched. Likely substitutes, to verify:
- BNM's own guidance and reporting channel.
- Jeweller trade associations' AML briefings. A national goldsmith and jeweller federation exists (name not verified in this pass).
- Generic AML/KYC SaaS sold to banks and fintechs (too expensive and too broad for a shop).
- Jewellery POS vendors that may add IC capture.
- Company secretaries and compliance consultants.

**Offline evidence:**  
- Owner-operated family shops with counter sales.
- No DPMS-specific Malaysian tool surfaced in the two searches run (weak evidence).

**Offline channel:**  
- Jeweller and goldsmith associations and their AML briefings.
- Gold wholesalers and refiners who supply many shops.
- Jewellery POS vendors as resellers.
- Walk-in visits along gold-shop streets, which are concentrated in a few streets per town.

None of these channels was verified.

**Market count:**  
Unknown. BNM's count of DPMS reporting institutions was not found.

**The gap (hypothesis):**  
A counter-side tool that does all of the following:
- captures the IC (MyKad) at the sale;
- screens the customer against the domestic and UN sanctions lists;
- totals cash per customer per day against RM25,000 and pre-fills the CTR;
- builds the yearly DCR figures from the same records.

**Possible product:**  
A tablet or phone app at the counter with MyKad capture, a running daily cash total, CTR draft, TFS screening log and a one-click DCR data sheet.

**MVP:**  
- A sales log with IC photo.
- Daily cash aggregation with a RM25,000 alert.
- CTR draft as a PDF or Excel file.
- DCR figures summary.

**Pricing hypothesis:**  
RM50–150 per shop per month (estimate). Owners may prefer a done-for-you yearly DCR service at RM300–800 (estimate).

**How to find first customers:**  
Association member lists and gold-wholesaler customer lists (both unverified), and street-by-street visits.

**Risks:**  
- Shop owners may underreport rather than pay for compliance.
- BNM may provide a free simple form.
- Jewellery POS vendors may already have the feature.
- Chinese-language and Malay-language selling needs a local.

**Founder access:**  
A non-local solo founder would struggle. It needs a local who speaks Malay and/or Chinese and has trust in the trade.

**Kill condition:**  
- BNM statistics show few DPMS file CTRs or DCRs.
- Jewellery POS systems already do CTR aggregation.
- Interviews show owners won't pay more than about RM30 a month.

**Score:** 4/10 (provisional, based on 2 searches)

**Sources:**  
- https://theedgemalaysia.com/article/threshold-cash-transaction-report-lowered-half (CTR threshold cut to RM25,000)
- https://www.theedgemarkets.com/article/threshold-cash-transaction-report-lowered-half
- https://sarawakadvocates.com.my/media/article/119/1.DCR_Circular_General.pdf (DCR, regular reporting since 2020, mandatory DCR 2024. Seen through the legal-profession circular; DPMS applicability is inferred from the same DNFBP policy document.)
- https://www.theedgemalaysia.com/article/bank-negara-receives-over-five-million-ctrs-worth-rm483b (CTR volumes)

## 3. Rejected

- **Money changers:** not quiet. BNM-supervised MSBs are likely already served by vendors (unverified).
- **Hawkers and market traders:** low ability to pay, and the duty is an annual council renewal.
- **Rubber and palm dealers / EUDR:** already covered by the country report, with government platforms and EUDR vendors in place.

## 4. Method notes

- The one Malay-language query for gold-shop AML duties returned mostly Indonesian results, because "pedagang emas" and Indonesian tax news dominate.
- The English regulator-first query ("BNM DNFBP dealers in precious metals cash threshold") worked straight away.
- The pass was cut short by a usage limit after 2 searches.
- Rerun priorities, in regulator-first form:
  - KPKT's list of licensed pawnbrokers;
  - DVS swiftlet premises registration;
  - police enforcement under the Second-Hand Dealers Act and copper theft;
  - SPAN licensed desludgers;
  - the domestic-worker SOCSO scheme;
  - BNM's count of DPMS reporting institutions.
