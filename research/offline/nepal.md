# Nepal: Offline-Industries Pass

Research date: 2026-10-05. Searches used: 20 of 20 (country budget). WebFetch was not used, so all evidence comes from search-result summaries. Figures are only as reliable as the pages cited. The country report (`research/countries/nepal.md`) already covers HIB claims, manpower agencies, SSF payroll and trekking permits. None of those are repeated here.

**Context carried over from the country report:**
- Willingness to pay is low (about NPR 1,500–8,000 per month for SME software).
- Collection needs local rails (eSewa, Khalti, Fonepay), so a foreign founder needs a local entity or partner.
- Forms are in Nepali, and dates use Bikram Sambat (BS).
- **For every idea below, a non-local solo founder cannot realistically sell alone. A Nepali co-founder or partner is required.**

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Gold/silver dealers and jewellers | KYC with ID for every purchase or sale; threshold transaction report (TTR) to the Financial Intelligence Unit (FIU) via goAML for Rs 1m+ per customer per day, within 15 days; screening for politically exposed persons (PEP); business-account-only payments (Dec 2025); monthly IRD statements; new 0.5% skill promotion fee (Finance Act 2083, procedure issued Sept 2026) | Zero suspicious-transaction reports (STRs) from the whole sector; the federation trains members on goAML in person; the federation app launched only in July 2026 and is aimed at membership and estimate bills | about 25,000 federation members, including artisans (FENEGOSIDA, 2023); 1,121 goAML-registered dealers (FIU 2024/25) | **Shortlisted** | Stacked 2025–26 triggers, a strong association channel, real fines (up to Rs 10m) |
| Licensed money changers | Foreign Nationals Management Information System (FNMIS) scan per foreign customer (from March 2026); goAML TTR/STR; Nepal Rastra Bank (NRB) licence and inspection bylaw | Small counters; FNMIS added a new per-transaction step in 2026 | 306 licensed (NRB list, Oct 2025) | **Shortlisted (weak)** | Per-transaction, multi-receiver pattern, but the market is tiny |
| Small hotels, guesthouses, homestays | FNMIS check-in of every foreign guest (all hotels and guesthouses nationwide from March 2026) | Manual entry when the guest has no QR code; only about 1,600 providers enrolled by May 2026, so most small lodges are not yet compliant | thousands (unverified; about 1,600 enrolled per Himal Press, May 2026) | Rejected (watch) | The government portal and QR scan are free; the pain is connectivity and enforcement, not missing software |
| Meat shops and small slaughterhouses | Animal Slaughterhouse and Meat Inspection Act 2055: licensed slaughter and meat inspection | Act enforced in only 3 cities after 27 years; no inspectors in big cities | unknown | Rejected (watch) | A phased nationwide rollout is announced (Kathmandu Valley first), but no inspectors exist yet, so no recurring paperwork to automate |
| Agrovets (pesticide retailers) | Pesticides Management Act 2076 and Regulations 2081: 3-year sale licence | No digital reporting found; paper licences, with provincial portals emerging (Madhesh PALMS) | about 4,000 licensed retailers (search summary, unverified) | Rejected | No recurring filing found; the licence is renewed every 3 years |
| Domestic workers (household employers) | Labour Act 2074; SSF contributions; minimum wage NPR 19,550 (July 2025) applies to live-out workers only | No separate domestic minimum wage set; protection is largely unenforced | unknown | Rejected | No enforced obligation, so households will not pay |
| Scrap dealers (kabadi) | No Nepal-specific police dealer register found | n/a | unknown | Rejected | No regime found (1 search) |
| Herb/NTFP (jadibuti) traders | District forest office collection licence, royalty receipt and 15-day "release order" transit permit | Counter-issued paper permits at district forest offices; seasonal | unknown | Rejected | The workflow is a government counter process that a third party cannot submit; trade is seasonal and the Karnali herb picking was halted |
| Public transport (microbus/bus) operators | Route permits renewed every 4 months through DoTM-registered companies; 6-monthly technical and pollution tests | Paper and counter-based; controlled by syndicates and committees | unknown | Rejected | Syndicate politics; the buyer is a committee, not an operator |
| Pharmacies (narcotic register) | Department of Drug Administration (DDA) narcotic and psychotropic register | Paper (country report) | n/a | Already covered | See country report |
| Beekeepers, street vendors, tattoo studios | none found | not searched | n/a | Not screened | Search budget spent on stronger leads |

Country-specific groups added from licensing registers: gold/silver dealers (FIU and IRD), money changers (NRB list), FNMIS accommodation providers (Department of Immigration), and NTFP traders (district forest offices).

---

## 2. Opportunities

### Opportunity: Counter compliance book for gold and silver dealers (KYC, Rs 1m TTR, skill promotion fee)

**Industry:**
Gold, silver and jewellery retail and wholesale (dealers in precious metals and stones).

**Buyer:**
Owner of a family-run jewellery shop (sun-chandi pasal). Mid-sized dealers in Kathmandu, Pokhara, Birgunj, Biratnagar and Butwal that already sit above the goAML threshold come first.

**Trigger / Why now:**
- FY 2024/25: goAML onboarding of the sector jumped from 121 to 1,121 reporting entities.
- April 11, 2025: registration deadline set for all licensed precious-metal dealers.
- December 2025 IRD directive: transactions only through the business's own bank account; Rs 1m+ sales must be paid from the buyer's bank account; PEP and relative identification; fines of Rs 100,000 to Rs 10m.
- IRD has made citizenship, national ID or a licence mandatory for every purchase or sale.
- Finance Act 2083 (in force July 17, 2026) added a 0.5% skill promotion fee on retail gold and silver sales. IRD issued the collection procedure in late September 2026.
- Nepal is on the FATF grey list, so IRD is under pressure to show sector supervision.

**Current workflow:**
1. The counter clerk writes the sale or purchase (old-gold buyback) in a paper register or a basic billing tool, using weight in tola/lal and the daily federation rate.
2. The clerk photocopies or photographs the customer's citizenship card or national ID.
3. The owner checks by hand whether the customer's same-day total reaches Rs 1m and whether the customer is a PEP or a PEP's relative. This is mostly not done.
4. Someone logs into goAML (web) and types the TTR within 15 days. STRs are essentially never filed.
5. The accountant compiles the monthly IRD statement and now has to compute and remit the 0.5% skill promotion fee separately.

**Pain:**
- IRD publicly said the sector's STR count is "zero" and that dealers must improve "both their understanding and intentions". That means supervisory scrutiny is coming.
- Penalties reach Rs 10m.
- FENEGOSIDA has had to run goAML training for members.
- The federation staged protests in 2025 against the new luxury tax and VAT measures. Members are sensitive to new admin load.

**Existing solutions:**
- goAML web portal (free, run by FIU-NRB): the receiving system, with manual data entry.
- IRD-certified billing tools (about 553, including Tally e-Billing Nepal Edition and BUSY): these handle VAT invoicing, not KYC or TTR aggregation.
- Indian jewellery ERPs (Online Munim, Auric Suite, OMGold): built for Indian GST, with no Nepal goAML or skill fee support (unverified for any Nepal edition).
- FENEGOSIDA website and mobile app (July 2026): membership renewal, ID cards, price history, estimate bills sent by WhatsApp. No compliance features were reported.
- The shop's accountant.

**Offline evidence:**
- Zero STRs from about 1,100 registered dealers.
- Goal training is done in person through the federation.
- Shops are traditional family businesses priced in tola.
- The federation only went digital in July 2026.
- No Nepal-specific jewellery compliance software turned up in search.

**Offline channel:**
- FENEGOSIDA: about 81 district branches and its new app. The app is a partnership or integration target, and a competitor if it adds compliance.
- goAML training sessions run with the FIU.
- Accountants who file the monthly IRD returns for jewellers.
- The cluster around New Road in Kathmandu, reached by walking in.

**Market count:**
- About 25,000 FENEGOSIDA members (2023, including artisans and non-retailers).
- 1,121 goAML-registered dealers (FIU annual report 2024/25 via Zigram).
- A realistic paying core is a few hundred to about 1,500 shops (estimate).

**The gap:**
- Nothing ties each counter transaction to: the customer ID record, the same-day aggregation for the Rs 1m threshold, the PEP flag, the bank-payment check, a goAML-ready TTR, and the monthly skill-fee total.
- Today this is split across paper, billing software, goAML and the accountant.

**Possible product:**
- A tablet or phone "counter book" in Nepali (BS dates, tola/lal).
- Per transaction, it captures the customer ID photo and payment mode.
- It flags threshold and PEP cases, produces the goAML TTR file or a copy-ready report, and outputs the monthly IRD statement plus skill promotion fee totals for the accountant.

**MVP:**
- A Nepali Android app with a customer register keyed by citizenship or national ID number.
- A same-day aggregation alert at Rs 1m.
- A monthly PDF/Excel pack: sales, buybacks, skill fee and TTR list.
- No goAML API at first: export in goAML XML if the schema is public, otherwise a guided manual entry.

**Pricing hypothesis:**
- NPR 1,000–3,000 per month per shop (about USD 7–22).
- Alternatively, sold through the federation as a member benefit with a per-member fee.
- Many shops would only pay for a done-for-you filing by the accountant. Price a service tier through accountants at NPR 3,000–5,000 per month.

**How to find first customers:**
- FENEGOSIDA central office and district associations.
- Visit New Road dealers in person.
- Accountants serving jewellers.
- Ask FIU or IRD for a slot at the next goAML training.

**Risks:**
- Dealers may prefer non-compliance. Zero STRs suggests intent, not just tooling.
- The federation app could add the same features.
- goAML XML import may not be enabled for this sector.
- Very low prices.
- A non-local founder cannot sell this. It requires a Nepali partner with federation trust.

**Kill condition:**
- IRD does no inspections or fines in the sector during FY 2083/84, or
- FENEGOSIDA announces KYC/TTR features in its own app, or
- fewer than 5 of 20 interviewed dealers record ID for each transaction at all.

**Score:** 5/10

**Sources:**
- https://www.zigram.tech/?p=35163 (goAML entities 121 to 1,121)
- https://nrb.org.np/fiu/threshold-transactions-reporting-guidelines
- https://www.b360nepal.com/fenegosida-provides-training-for-businesspersons-on-goaml-software
- https://english.ratopati.com/story/62226/there-is-zero-suspicious-transactions-in-gold-and-silver-businessmen-need-to-improve-both-their-understanding-and-intentions
- https://ekantipur.com/business/2025/12/09/en/stricter-regulations-on-gold-and-silver-trading-here-are-the-new-regulations-44-20.html
- https://ekantipur.com/business/2025/12/08/en/gold-and-silver-traders-instructed-not-to-transact-business-through-personal-accounts-16-36.html
- https://beemadarpan.com/news/78686 (ID mandatory)
- https://pradhanlaw.com/publications/income-tax-rates-2083-84-2026-27-ad (0.5% skill promotion fee)
- https://nepalnews.com/2026/09/29/procedure-issued-to-regulate-skill-promotion-fees-for-gold-and-silver-jewelry-sales/
- https://ekantipur.com/business/2026/07/21/en/gold-and-silver-business-to-become-modern-and-systematic-with-digital-technology-39-38.html
- https://fenegosida.org/aboutus.php?id=2 (about 25,000 members)

---

### Opportunity: One-scan back office for licensed money changers (FNMIS + goAML + NRB returns)

**Industry:**
Licensed money changers (FX counters, mostly in Thamel, Pokhara and border towns).

**Buyer:**
Owner or manager of an NRB-licensed money-changer company.

**Trigger / Why now:**
- FNMIS became mandatory for licensed money exchange counters: in the Kathmandu Valley from January 1, 2026, and nationwide from March 1, 2026. Each foreign customer's QR code must be scanned, or their details typed in manually if they have none.
- Money changers are also goAML reporting entities. Grey-list pressure applies here too.

**Current workflow:**
1. Copy the passport and fill in the exchange receipt or encashment form.
2. Scan the FNMIS QR code, or type the details in manually.
3. Record the transaction in the FX ledger for the NRB returns (format unverified).
4. File goAML TTRs/STRs where they apply.

The same customer and transaction data is entered three or four times.

**Pain:**
- Per-transaction duplicate entry at peak tourist season.
- Licence-cancellation risk: NRB cancelled 5 licences in one action, and the count fell from 314 to 306 during 2025.
- Direct complaints were not found (unverified).

**Existing solutions:**
- The FNMIS portal (free).
- goAML (free).
- Local FX counter software (not identified in search, so assume some exists).
- Excel.

**Offline evidence:**
- Small counter businesses with no online footprint.
- The 2026 FNMIS step is new and manual when the customer has no QR code.

**Offline channel:**
- The NRB-published list of licensed entities (names and offices), followed by walking into Thamel and Pokhara counters.
- The money changers' association (name unverified).

**Market count:**
306 licensed money changers (NRB, October 17, 2025).

**The gap:**
One passport/QR capture that fills the receipt, the ledger, the goAML TTR candidate list and the FNMIS entry. FNMIS integration has no known public API, so in practice this is a helper rather than a true integration.

**Possible product:**
A counter app that reads the passport MRZ or FNMIS QR once and produces the receipt, daily NRB ledger and goAML list.

**MVP:**
Passport MRZ capture, receipt printing, and daily and monthly ledger exports.

**Pricing hypothesis:**
NPR 3,000–6,000 per month per counter.

**How to find first customers:**
The NRB licensed-entity list; walk the Thamel counters.

**Risks:**
- Only 306 buyers, so the ceiling is about USD 15k ARR.
- FNMIS and NRB formats are controlled by the government and may change.
- Needs a local founder.

**Kill condition:**
The NRB return format is already produced by a dominant local FX package, or FNMIS cannot be pre-filled.

**Score:** 3/10

**Sources:**
- https://www.nrb.org.np/fxm/licensed-entities-by-nrb-for-fx-transactions-as-on-asoj-end-2082-october-17-2025
- https://aawaajnews.com/nepal-news/nrb-cancels-licenses-for-five-money-exchange-companies/
- https://ekantipur.com/news/2026/01/01/en/immigrations-foreign-citizen-management-information-system-to-be-implemented-from-today-55-52.html
- https://www.envoyglobal.com/news-alert/nepal-introduces-foreign-nationals-management-information-system/

---

## 3. Rejected

- **FNMIS check-in helper for small guesthouses and homestays:**
  - The trigger is real: FNMIS is mandatory for all hotels and guesthouses nationwide from March 2026, and only about 1,600 providers had enrolled by May 2026.
  - It was killed because the government portal and QR scan are free and quick.
  - The real barrier is connectivity and enforcement, not missing software, and a hotel PMS would absorb any integration.
  - Sources: https://himalpress.com/2026/05/over-100000-foreign-nationals-tracked-in-five-months/ , https://www.thirdrockadventures.com/travel-news/nepal-tightens-oversight-as-digital-system-tracks-foreign-visitors
- **Meat shop and slaughterhouse inspection records:**
  - A phased nationwide rollout of the 1999 Act has been announced (Kathmandu Valley within 4 months, other municipalities within 6, rural municipalities within 1 year).
  - But there are no inspectors and no slaughterhouses in the big cities, so no recurring filing exists yet.
  - Revisit if municipalities start issuing licences.
  - Sources: https://english.ratopati.com/story/70641/the-animal-slaughterhouse-and-meat-inspection-act-will-be-implemented-nationwide-in-3-phases-with-the-valley-being-the-first-priority , https://ekantipur.com/News-Folder/2025/08/31/en/organized-slaughterhouses-do-not-exist-in-big-cities-38-50.html
- **Agrovet pesticide sales register:**
  - About 4,000 licensed retailers (unverified).
  - The licence runs 3 years, and no recurring sales report was found in the Regulations 2081 summaries.
  - Source: https://leap.unep.org/en/countries/np/national-legislation/pesticide-management-regulations-2081-2024
- **Household employers of domestic workers:**
  - No separate minimum wage has been set for domestic workers, and live-in workers are excluded from it. There is no enforced registration, so no buyer.
  - Source: https://www.wiego.org/sites/default/files/publications/file/WIEGO_PolicyBrief_N20_Nepal for Web.pdf
- **NTFP/herb trader permits:**
  - Permits are issued at the district forest office counter on paper (collection licence, then royalty receipt, then a 15-day release order).
  - The process sits inside government and the trade is seasonal.
  - Source: https://ansab.org.np/wp-content/uploads/2024/02/Policy-Regulatory-Environment.pdf
- **Public transport route permits:**
  - Route permits are renewed every 4 months through DoTM-registered companies, but syndicates and committees control the sector, and the most recent evidence found was from 2018.
  - Source: https://www.en.meroauto.com/department-tightens-route-permit-rules-for-public-vehicles/
- **Scrap dealers:** no Nepal police-register regime was found.

## 4. Method notes

- What worked: the regulator-first approach on AML (FIU goAML entity counts, IRD directives) and on NRB's published licensed-entity lists, which give hard counts.
- Nepali-language queries surfaced the strongest leads: the IRD "zero STR" statement and the September 2026 skill promotion fee procedure.
- Nepal's quiet-industry obligations are mostly new national AML and immigration systems (goAML, FNMIS), not local permits. The receiving portals are free, so the gap is only at the counter capture step.
- What didn't work: queries on police registers (scrap), meat inspection (unimplemented) and agrovets (only licensing, no recurring returns).
- Not screened for lack of budget: beekeepers, street vendors, tattoo studios.
