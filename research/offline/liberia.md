# Liberia: Offline-industries pass

**Date:** 2026-10-05
**Budget used:** 19 of 20 WebSearch calls. WebFetch was not used, so every claim rests on search-result snippets.
**Context:** Liberia is a small, low-income, dual-currency (USD/LRD) market. The first-round report (`research/countries/liberia.md`) covered EUDR cocoa traceability and ASYCUDA customs brokers, scoring them 3/10 and 2/10. Neither is repeated here.

**Bottom line:** I found two real regulator-driven triggers in quiet industries:

1. Mandatory Gold Traceability Vouchers for gold miners, dealers and brokers, effective **1 Oct 2026**.
2. The CBL crackdown of **July 2026** that forces street money changers into licensed forex bureaus. Those bureaus already owe weekly and monthly returns.

Both are thin markets with government systems or paper forms as the substitute. Neither would be a standalone indie SaaS. At best each is a service-plus-software play that needs a local partner. Bigger, non-quiet news: VAT replaces GST on 1 Jan 2027, with electronic fiscal devices (EFDs) being rolled out. It is noted below but is out of scope for this pass.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | Reason |
|---|---|---|---|---|---|
| Gold dealers and brokers (plus Class B/C miners) | Record every purchase, sale and transfer on OPM-issued Gold Traceability Vouchers from 1 Oct 2026. Keep the vouchers. Submit them with export documents and at licence renewal. | The vouchers are standard forms "issued directly by the Office of Precious Minerals", i.e. paper books. OPM ran in-person training sessions on 12 and 14 Aug 2026. | Unknown. A Gold and Diamond Brokers Union and a Dealers Association exist. Class C licences go only to Liberians, up to 4 per person. No register count found. | **Candidate (weak)** | Hard trigger and real enforcement (exports, renewals). But the export end is already digital (MCAS), and buyers are few, informal and cash-based. |
| Forex bureaus and money changers | Weekly declaration of operating funds in LRD and USD. Monthly purchase and sales returns to CBL. AML/CFT reporting to the FIA (STRs/CTRs, 5-year records). Street trading banned from 19 Jul 2026. | Returns are "as prescribed by the Central Bank" (form-based). A World Bank FSAP snippet says about 250 of 255 bureaus do not comply with regulatory standards. | About 255 bureaus (World Bank FSAP, via search snippet). CBL publishes a licensed-institutions list in the Official Gazette. | **Candidate (weak)** | Mandatory, recurring and enforced, with a fresh trigger. Small count, low ability to pay. CBL/FIA portals are the receiving end. |
| Diamond dealers | Kimberley Process export certificates via OPM/MCAS | Export valuation is now digital (MCAS with QR codes) | Unknown, small | Reject | The government system covers the regulated step |
| Scrap metal dealers/exporters | MOCI export restriction on scrap (Admin. Reg. MCI/NO.001/2019) | Only an export ban/restriction was found, no dealer register | Unknown | Reject | No recurring reporting workflow found |
| Commercial motorcycle and keke operators | MoT registration, compliance inspections (MoT/LNP/Fire Service) | Inspection campaigns are run in person | Contested. Dubawa fact-checked a claim of 230,000+ registered riders as exaggerated. | Reject | The union M-FOMTUL signed with Digital Liberia (Aug 2026) for digital ID and GPS tracking, which takes the gap. Riders have little money. |
| Artisanal fishing canoes | Annual NaFAA canoe licence (US$30–350 from Jan 2026) | Fees and registration handled at community level, with LAFA pushing registration | Rising (no figure) | Reject | Annual, individual payers, no admin burden worth software |
| Pharmacies and medicine stores | Pharmacy Board licensing and inspections, LMHRA product rules | Board trains proprietors in person (80+ in Bong County) and closes unlicensed stores | Unknown | Reject | Licensing is annual. I found no recurring reporting obligation. |
| Butchers, slaughter slabs, cattle traders | Police permit, vet antemortem certificate, Environmental Health slaughter licence for each slaughter | Paper certificates presented to meat inspectors | Unknown. Cattle are largely imported from Guinea/Mali. | Reject | Real paper chain, but tiny cash operators and no route to a buyer who pays |
| Household employers (domestic workers) | Decent Work Act 2015 (domestic-worker minimum wage), NASSCORP 6% contributions | Domestic work is overwhelmingly informal | Unknown | Reject | No sign that household registration is enforced |
| Private security companies | MoJ Public Safety Department licensing and compliance checks | Calls for a "full-scale assessment" of firms, so oversight is weak | Unknown, small | Reject | No recurring filing found. A private security law is still in draft. |
| Funeral homes | Removal/transit/burial permits, death registration at MoH Vital Statistics | Death certificates are issued only in Monrovia, at the counter | A handful (estimate) | Reject | Too few operators, low volume |
| Small merchants under the new VAT and EFDs | VAT registration from 1 Jul 2026, VAT live 1 Jan 2027, EFDs for merchandising | Not quiet: a mass SME obligation | Not found | Out of scope (flag for the main pass) | A strong "why now", but it is a broad tax/POS play. The EFDS contractor and accounting/POS vendors will compete for it. |

## 2. Opportunities

### Opportunity: Gold Traceability Voucher ledger and export/renewal pack for licensed gold dealers and brokers

**Industry:**
Artisanal and small-scale gold trading (dealers, brokers, Class B/C miners)

**Buyer:**
Owner of a licensed gold dealership or brokerage in Monrovia or a mining county, or the secretariat of the Gold and Diamond Brokers Union / Dealers Association, buying for its members.

**Trigger / Why now:**
The MME/Office of Precious Minerals made Gold Traceability Vouchers mandatory for Class B and C miners, dealers and brokers, **effective 1 October 2026**. Every purchase, sale and domestic transfer must be recorded on a standard OPM voucher. Vouchers must be kept, attached to export documentation, and produced at certain licence renewals. OPM trained dealers and brokers on 12 and 14 Aug 2026. Separately, the broker licence fee was cut from US$1,500 to US$500 in Oct 2025, which may increase the number of licensed brokers.

**Current workflow:**
1. A broker buys gold at a mine site and fills in an OPM voucher (paper), recording the miner, licence, weight and price.
2. The broker sells to a dealer, which needs another voucher. The dealer collects the vouchers from many brokers.
3. To export, the dealer assembles the vouchers that make up the consignment and presents them at the OPM valuation desk, where the shipment is recorded in MCAS and royalties are computed.
4. At licence renewal, the dealer or broker produces the completed vouchers.
5. Reconciling voucher weights against the consignment weight, and finding missing or illegible vouchers, is done by hand (inferred, not observed).

**Pain:**
The obligation is new, mandatory and linked to exports and renewals, so failure blocks revenue. I found no complaints yet because the system is days old. The rest of the pain is inferred.

**Existing solutions:**
- **MCAS** (the mineral cadastre system deployed at MME by the Revenue Development Foundation). It handles licences, dealer licences, export permits and the valuation module, and issues QR-coded export documents. This is the receiving system and partly a substitute.
- OPM's paper voucher books (free or fee-based, unverified).
- Exercise books and Excel kept by dealers. Some dealers use clerks.
- Generic responsible-sourcing tools (e.g. those used for OECD due diligence by refiners) are aimed at large buyers, not at Liberian brokers (unverified locally).

**Offline evidence:** OPM issues the vouchers itself, and in-person training sessions were needed. Brokers work at mine sites in cash. No software listings for Liberian gold traders exist.

**Offline channel:** The Gold and Diamond Brokers Union and the Dealers Association, which meet in Monrovia and negotiate with MME. OPM training sessions. The OPM valuation desk, where every exporting dealer turns up.

**Market count:** Not found. Class C licences are limited to Liberians, up to 4 per person, but I found no total. Exporting dealers are probably a few dozen and brokers a few hundred (estimate, unverified).

**The gap:**
MCAS starts at the valuation desk. Between the mine site and the desk, the voucher trail is on paper. A dealer has no tool to (a) log vouchers as they arrive, (b) reconcile voucher weights to a consignment, or (c) print a clean voucher schedule for export and renewal. Whether this gap survives depends on whether MCAS or OPM later digitise the vouchers themselves. The Revenue Development Foundation writes about "progress in digital traceability" in Liberia and Sierra Leone, so this is likely.

**Possible product:**
A mobile-first voucher ledger. The broker or dealer photographs each OPM voucher and keys in the main fields. The app keeps a running stock-by-weight book, links vouchers to a consignment, and outputs the voucher schedule for the OPM export and renewal files.

**MVP:**
An Android app with offline capture of voucher photos and fields, a consignment builder with a weight-reconciliation check, and PDF/Excel export of the voucher schedule.

**Pricing hypothesis:**
US$20–50 per month per dealer, or a per-consignment fee (estimate). Realistically sold as a service through the dealers' association.

**How to find first customers:**
Introduction through the Gold and Diamond Brokers Union / Dealers Association. Attending OPM sessions. Being at the valuation desk in Monrovia.

**Risks:**
- MME/RDF extends MCAS down to vouchers, which would kill the gap.
- Founder access: needs a trusted local partner. A non-local solo founder cannot sell this.
- AML/illicit-flow sensitivity: gold traders may resist a digital trail.
- Very small market.
- The voucher system may be enforced loosely.

**Kill condition:**
Kill the idea if OPM announces digital vouchers in MCAS, or if fewer than about 50 dealers export each year.

**Score:** 3/10 (pain 6, frequency 8, mandatory 9, fragmentation 2, competition 4, incumbent gap 5, buyer access 4, WTP 3 (service only), MVP 8, distribution 4 (association plus valuation desk). Heavily discounted for market size and government-system risk.)

**Sources:**
- https://gnnliberia.com/mme-launches-gold-trade-regulations-introduces-traceability-system/
- https://www.liberianobserver.com/news/sama-mineral-holdings-commends-ministry-of-mines-for-gold-traceability-reforms/article_025797cd-048e-4fca-893c-832f29721e62.html
- https://frontpageafricaonline.com/liberia-sama-mineral-holdings-commends-mines-ministry-for-gold-traceability-reforms-calls-for-stronger-transparency-and-inclusive-mineral-governance/
- https://allafrica.com/stories/202510240565.html (broker licence fee cut to US$500)
- https://mag.wcoomd.org/magazine/wco-news-110-issue-2-2026/digitalizing-diamond-and-gold-export-controls/ (MCAS)
- https://revenuedevelopment.org/progress-in-digital-traceability-in-liberia-and-sierra-leone/
- https://mme.gov.lr/page_info.php?e49c7921cb156014099756961908d03f94e3584c=NDU4 (OPM overview)

### Opportunity: CBL weekly/monthly returns and FIA AML book-keeping for small forex bureaus

**Industry:**
Foreign exchange bureaus and money changers

**Buyer:**
The owner-operator of a Category B (single outlet) or Category A (up to 4 outlets) CBL-licensed forex bureau, mostly in Monrovia.

**Trigger / Why now:**
From **19 July 2026**, the CBL, together with the Justice Ministry, Immigration Service and Monrovia City Corporation, bans street money changing. Licensed and unlicensed changers must move into bureaus. Unlicensed bureaus face closure and confiscation of funds. Bureaus already owe the CBL a **weekly** declaration of operating funds (LRD and USD) and **monthly** returns of FX purchases and sales. As reporting entities under the AML/CFT Act 2021, they also owe threshold and suspicious transaction reports to the FIA and must keep records for 5 years. Liberia faces another round of AML scrutiny (third-round mutual evaluation), and the FIU has threatened non-compliant DNFBPs with fines and licence revocation.

**Current workflow:**
1. The teller records each buy or sell in a counter book or notebook (inferred).
2. At week end, the owner totals LRD and USD cash and declares it to the CBL.
3. At month end, the owner compiles purchases and sales into the CBL return template.
4. Customer ID and threshold or suspicious cases are recorded on paper, if at all, and reported to the FIA.

**Pain:**
A World Bank FSAP snippet says about 250 of 255 bureaus do not comply with regulatory standards, an AML/CFT risk. Enforcement is now active (the July 2026 crackdown). A pain gap that is real but unverified: newly formalised street changers will have no bookkeeping at all.

**Existing solutions:**
- CBL return templates and the FIA reporting channel (substitute and receiving end; format unverified).
- Paper counter books and Excel.
- Commercial bureau software from other markets (e.g. Kenyan/Ugandan forex-bureau systems; vendors unverified for Liberia).
- Accountants who prepare monthly returns.

**Offline evidence:** Cash, counter-based trade. A 98% non-compliance rate. Until July 2026, much of the activity was on the street. I found no Liberian forex software listing.

**Offline channel:** The CBL's Gazette list of licensed institutions gives names and street addresses, so door-to-door visits on Monrovia's bureau streets are possible. CBL compliance outreach. A money changers' association, if one exists (unverified).

**Market count:** About 255 bureaus (World Bank Liberia FSAP, via search snippet; date unclear). More may join as street changers are pushed in.

**The gap:**
A cheap counter-book app that produces the CBL weekly and monthly returns and an FIA-ready threshold/STR log directly from daily trades, built for a one-till, cash-only operator using Android phones.

**Possible product:**
A teller app on Android: log each trade with rate and currency → daily cash position → one-tap CBL weekly declaration and monthly return → customer-ID capture above the threshold, with an export file for the FIA.

**MVP:**
An offline Android app and a printable/Excel CBL return generator. No CBL integration.

**Pricing hypothesis:**
US$10–25 per month per bureau (estimate). The total addressable revenue is under US$75k a year even at full uptake.

**How to find first customers:**
The CBL Gazette list of licensed institutions, walking Monrovia's bureau streets, and offering to file the first returns as a service.

**Risks:**
- Tiny market, low ability to pay.
- CBL may mandate its own reporting system.
- Owners may avoid recording to protect informal margins.
- Founder access: needs someone on the ground.

**Kill condition:**
Kill the idea if CBL returns are a single simple form that owners already complete in minutes, or if the CBL launches its own bureau reporting app.

**Score:** 3/10 (pain 5, frequency 9, mandatory 8, fragmentation 2, competition 5, gap 5, buyer access 6 (Gazette list), WTP 2, MVP 9, distribution 5 (street-level, register). Capped by market size.)

**Sources:**
- https://cbl.org.lr/sites/default/files/documents/Amdlicensingfxbureaus_1.pdf (bureau categories, weekly and monthly returns)
- https://cbl.org.lr/sites/default/files/documents/foreignexchange.pdf
- https://thenewdawnliberia.com/cbl-issues-ultimatum (July 2026 street ban)
- https://bushchicken.com/economic-management-team-and-street-vendors-agree-on-restrictions
- https://www.cbl.org.lr/sites/default/files/documents/licensed_financial_institutions.pdf (Gazette list)
- https://documents1.worldbank.org/curated/en/099051526151542694/pdf/BOSIB-71e035d3-a630-4118-8f7d-bf2d5539da0d.pdf (FSAP: about 255 bureaus, about 250 non-compliant; snippet only)
- https://thenewdawnliberia.com/?p=55110 (FIU threatens DNFBP sanctions)
- https://blog.voveid.com/kyc-aml-compliance-in-liberia-2026-getting-ready-for-a-third-round-of-scrutiny/

## 3. Rejected

- **Diamond dealers' export documentation:** MCAS issues QR-coded export documents at the valuation desk, so the government system already does the job.
- **Motorcycle/keke operator registration:** M-FOMTUL has already partnered with Digital Liberia (Aug 2026) for digital ID and GPS. Riders cannot pay.
- **Artisanal canoe licensing (NaFAA):** an annual fee of US$30–350 with individual payers. Nothing to automate that is worth paying for.
- **Butcher and slaughter permit chain:** the paper chain is real (police permit, vet antemortem certificate, slaughter licence), but operators are tiny and cash-based, and USAID-funded slaughterhouse projects set the norms.
- **Scrap dealers:** I found only an export restriction and no dealer register or reporting duty.
- **Domestic-worker employers:** the Decent Work Act covers them, but I found no enforcement or registration workflow.
- **Pharmacies, private security and funeral homes:** I found only annual licensing and no recurring filing, and the counts are small.
- **SME VAT/EFD compliance (1 Jan 2027):** not a quiet industry. It is a strong trigger but a broad POS/tax play with a government EFDS contractor. I passed it to the main ranking as an open question.

## 4. Method notes

- **Worked:** the regulator-plus-year pattern in English (e.g. "Ministry of Mines … 2026", "Central Bank of Liberia forex bureaus … 2026"). Liberian news sites (allAfrica, FrontPage Africa, Liberian Observer, New Dawn, GNN) report regulator notices almost verbatim. Ministry pages and CBL PDFs surface well.
- **Didn't work:** any query for operator counts. Registers are not online, so counts came only from donor documents (World Bank FSAP). Local-language search does not apply because English is the official language.
- 19 of 20 searches were used, and there was no WebFetch, so the content of the vouchers and of the CBL return forms was not verified directly.

Research model: Opus
