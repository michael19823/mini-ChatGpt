# Egypt: Offline / Quiet-Industries Pass (as of 2026-10-05)

**Status: incomplete, cut short by the search limit.** The 6th WebSearch call came back with "You've hit your usage limit". The instructions say to stop when a search is refused, so this report rests on **5 searches** (4 in Arabic, 1 extended), all of them read from result titles and snippets only. WebFetch was blocked. Treat everything below as a **lead list for a re-run, not as validated opportunities**. Anything not stated in a snippet is marked *unverified* or *estimate*.

This pass does not repeat the opportunities in the existing country report (`research/countries/egypt.md`): EPTTS pharma serialization, ACI air freight and the multi-client ETA monitor for accountants.

---

## 1. Quiet industries screened

| # | Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|---|
| 1 | Gold retailers and workshops (محلات وورش الذهب) | ETA e-invoice and e-receipt being activated in the gold market (2026). Assay hallmarking (الدمغة) by the Stamping & Weights Authority | In July 2026 the FEI gold chamber and the tax authority were still *preparing an awareness programme* to explain e-invoice/e-receipt to traders. That points to low adoption and counter-based, cash trade | Not found (unverified) | **Lead (best of this pass)** | Fresh 2026 trigger for a family-run, cash-heavy trade with workflows specific to gold (weight, karat, making charge, buy-back of used gold). Needs verification |
| 2 | Private tutoring centres (السناتر) | Ministry of Education move to license centres and give teachers practice licences. Centre licence term extended from 1 to 2 years. Tax collection | Governorate campaigns seal centres (e.g. 25 centres closed on day 2 of a Gharbia campaign). A court case sought to halt the licensing | Not found. "Tens of thousands" is an estimate only | **Watch** | The legal framework is contested in court and the recurring reporting obligation is unclear. Centre-management apps probably exist (unverified) |
| 3 | Domestic workers and household employers | Domestic-worker law (55 articles: contracts, wages, hours, office licensing, inspection) | No contracts are typically concluded. Workers are excluded from the Labour Law | n/a | **Reject (no trigger yet)** | Snippets describe the law only as *proposed*. No evidence it is in force in 2026 |
| 4 | Scrap and recycling importers | Investment Minister decree 78/2025 and Customs import circular 9/2025: plastic and rubber scrap may go only to IDA-licensed recyclers and needs a lab analysis certificate | Per-shipment paperwork, but the actors are importers and factories, not small dealers | Not found | **Reject (for this pass)** | Not a quiet dealer register. It is a customs-broker workflow already covered by the existing report's customs track. No police register for scrap dealers found |
| 5 | Well drillers (Water Resources Law 147/2021 licensing) | Groundwater well licensing | – | – | **Not screened** | The search was refused |
| 6–15 | Butchers and abattoirs, poultry traders, pesticide and fertiliser shops (farmer smart card), tuk-tuk and microbus operators, fishing boats (LFPDA), private nurseries (Social Solidarity), money changers, cemetery keepers (التُربي), brick kilns, beekeepers | Various | – | – | **Not screened** | Planned queries were never run because of the search limit |

---

## 2. Strongest opportunities

Only one lead has enough evidence to write up, and even this one falls short of the brief's validation standard.

### Opportunity: E-Receipt and Assay Bridge for Egyptian Gold Shops

**Industry:**
Gold jewellery retail and small manufacturing workshops (the Sagha district in Cairo, plus governorate gold markets).

**Buyer:**
The owner of a family-run gold shop or workshop, often reached through the shop's outside accountant.

**Trigger / Why now:**
- In July 2026, the board of the Gold & Precious Metals Industry Chamber at the Federation of Egyptian Industries discussed activating the ETA **e-invoice and e-receipt** systems inside the gold market.
- The chamber and the Egyptian Tax Authority are preparing an awareness programme for traders and manufacturers.
- The exact compliance deadline is *unverified*.

**Current workflow (inferred; to confirm in interviews):**
1. The customer picks a piece. The price is set as weight × daily karat price + making charge (مصنعية) + stamp.
2. The shop writes a paper invoice, or none.
3. Used-gold buy-back (شراء الكسر) and trade-ins are netted against the sale in cash.
4. Stock is tracked by weight in a ledger. Hallmarking happens at the assay office.
5. The accountant reconstructs sales for tax purposes, if at all.

Once e-receipts are mandatory, every sale has to be issued in the ETA format within the ETA time window. Generic POS software models price × quantity, not gold arithmetic (weight, karat, making charge, buy-back offsets).

**Pain:**
The evidence is indirect. Industry bodies are still at the *awareness* stage in mid-2026, which suggests most shops are not yet compliant. The trade has historically operated in cash. Penalties for non-issuance under ETA rules apply, but their size for this sector is *unverified*.

**Existing solutions:**
- ETA's free e-receipt tools (mobile app and portal).
- Accredited e-receipt POS vendors.
- General accounting and ERP software with ETA connectors (Daftra, Wafeq, Dexef, Odoo; see the existing country report).
- Egyptian gold-shop software probably exists (*unverified*; not searched).

**Offline evidence:**
The chamber needs to run in-person awareness sessions. Trade is counter-based and cash-based. Shops are clustered in physical gold markets.

**Offline channel:**
- FEI Gold Chamber (شعبة صناعة الذهب) and the Chamber of Commerce gold division (الشعبة العامة للذهب): co-host or sponsor the awareness sessions.
- Walk-in sales in the Sagha district.
- Accountants who serve gold shops.

**Market count:**
Not found. A registry count from the Stamping & Weights Authority or the gold chamber is needed.

**The gap:**
Hypothesis only: an e-receipt flow that natively handles weight, karat, making charge, buy-back netting and daily price, and that maps cleanly to ETA item codes. This may already be solved by gold-specific POS vendors, which were not checked.

**Possible product:**
A tablet or phone counter app. The shopkeeper enters the weight, karat and making charge. The app fetches the day's price, computes the total, nets out any buy-back, and issues a compliant ETA e-receipt. It also keeps a weight-based stock ledger the accountant can export.

**MVP:**
A sale and buy-back calculator that issues receipts through the ETA e-receipt API (via a registered POS integration), plus a daily weight reconciliation report.

**Pricing hypothesis:**
EGP 500–1,500 per shop per month (*estimate*). It may need to be sold as a service through accountants.

**How to find first customers:**
Gold chamber awareness sessions, the Sagha market in Cairo, and accountants.

**Risks:**
- An ETA POS accreditation requirement for issuers.
- Incumbent gold POS vendors.
- A cash-trade culture that resists recording sales.
- The buyer is price sensitive in EGP.
- A non-local founder could not sell this. It needs an Arabic-speaking local on the ground.

**Kill condition:**
Kill the idea if any of these turns out to be true:
- two or more Egyptian gold-shop POS products already issue ETA e-receipts at an affordable price;
- ETA accreditation for a new POS issuer takes more than about 6 months;
- the gold e-receipt mandate is postponed indefinitely.

**Score:** 4/10. Evidence is thin. Competition, market count and deadline are all unverified.

**Sources:**
- [Amwal Al Ghad, 19 Jul 2026: gold industry plan to roll out e-invoice and e-receipt](https://amwalalghad.com/2026/07/19/%d8%b5%d9%86%d8%a7%d8%b9%d8%a9-%d8%a7%d9%84%d8%b0%d9%87%d8%a8-%d8%ae%d8%b7%d8%a9-%d9%84%d8%aa%d8%b9%d9%85%d9%8a%d9%85-%d8%a7%d9%84%d9%81%d8%a7%d8%aa%d9%88%d8%b1%d8%a9-%d9%88%d8%a7%d9%84/)
- [Akhbar El Yom: metals chamber discusses activating the e-invoice and e-receipt](https://m.akhbarelyom.com/news/NewDetails/4853295/1/-شعبة-المعادن-تناقش-تفعيل-الفاتورة-والإي)
- [Al-Sharq (2015): gold traders' losses from assay stamping delays](https://al-sharq.com/article/15/03/2015/تجار-الذهب-مهددون-بخسائر-فادحة-بسبب-تأخر-عملية-دمغة-المشغولات), background only

---

## 3. Rejected

- **Domestic-worker payroll and contracts:** the law is still a proposal (Dostor, Al-Bawaba snippets). There is no in-force obligation.
- **Scrap-import documentation (decree 78/2025):** the actors are importers and recyclers, not quiet dealers, and customs brokers already handle this ([ISS Shipping advisory](https://www.iss-shipping.com/advisories/new-regulations-on-scrap-material-inspections-in-egypt/), [Al Mal News](https://almalnews.com/1979975/)).
- **Tutoring-centre licensing compliance:** this is a watch item, not a reject. The licensing is contested in court ([Akhbar El Yom](https://akhbarelyom.com/news/newdetails/4090339/1/18-يونيو-الحكم-في-دعوى-وقف-ترخيص-مراكز-ا)). Enforcement so far means sealing campaigns ([El Watan](https://www.elwatannews.com/news/details/5164298)), not a recurring filing. Revisit once a licensing regulation with periodic reporting is issued ([Al-Sharq, Oct 2025](https://al-sharq.com/article/02/10/2025/تراخيص-لمزاولة-مهنة-معلمي-مراكز-دروس-التقوية)).

## 4. Method notes

- Arabic regulator-first queries returned mostly news-site snippets. Gulf results (Oman, UAE, Saudi Arabia) often crowded out Egyptian ones, so the next run should add "مصر" plus the authority's name.
- The FEI and Chamber of Commerce sector divisions (شعبة) proved a good signal of new obligations reaching quiet trades.
- Planned next queries:
  - groundwater well licensing (Law 147/2021);
  - the smart-card register for pesticide and fertiliser shops;
  - tuk-tuk licensing and replacement;
  - butchers and veterinary slaughter certificates;
  - nursery licensing (Social Solidarity);
  - a count of gold shops and existing gold POS vendors.
