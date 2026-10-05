# Azerbaijan: offline-industries pass

**Researched:** 2026-10-05. I used 20 WebSearch calls, almost all in Azerbaijani (WebFetch not used). The existing report ([countries/azerbaijan.md](../countries/azerbaijan.md)) covered HACCP, pharmacy DTMS and fruit exports. None of those is repeated here.

**Bottom line:** Azerbaijan's quiet industries are regulated, but the state usually builds the system itself and puts a state employee in the loop:
- AQTA (the food safety agency) vets tag the animals and enter them into AQTİS, the agency's information system.
- The Ministry of Agriculture registers bee colonies in EKTİS, its agricultural information system, and pays a subsidy for each colony.
- Every employment contract, a household's included, is registered through the e-gov portal with an ASAN signature.
- Market traders are pushed onto the State Tax Service's online cash registers (e-kassa).

That leaves little room for a third-party "router". Only two candidates came close, and both score low:
- **Pawnshops:** a licensing law that has been pending for years.
- **Jewellers and precious-metal dealers:** AML (anti-money-laundering) and hallmarking obligations.

Neither is ready to build. A non-local solo founder would need a local partner for both: everything is in Azerbaijani, the files are signed with ASAN İmza, and sales happen in person.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Pawnshops (lombard) | Draft "Law on Pawnshops": a licence from the Central Bank (CBA), with quarterly, semi-annual and annual reports to it | No licence regime exists today, so no reporting exists either. Shops run on paper or on Excel | "Over 1,000", exact number unknown (CBA chairman via [fed.az](https://fed.az/az/maliyye/merkezi-bankin-sedrinden-lombard-sektoru-barede-aciqlama-206423)) | Watch / too early | The law has stalled for years. In May 2026 the CBA said it was still "in coordination", and a local SaaS (Lombardex) already markets "CBA compliance" |
| Jewellers / gold buyers | AML "monitoring participant" duties to the Financial Monitoring Service (FIU), plus the state hallmark on every item sold | Small family shops. Hallmarking is done at a counter of the Antimonopoly Agency | Unknown (not found) | Weak candidate | The obligation is real, but no 2026 trigger is confirmed and the count is unknown |
| Livestock farmers / traders | Animal identification and registration (HİQS) in AQTİS. Physical animal markets are moving to an electronic "exchange" | Tagging is done by AQTA vets on site. Farmers are told to visit AQTA's regional offices | 28 markets closed in Oct 2025; 20 modernised markets reopened ([azinforum](https://azinforum.az/iqtisadiyyat/azerbaycanda-enenevi-heyvan-bazarlari-baglanir-mal-qara-birjalarda-satilacaq)) | Rejected | The state does the data entry and will build the trading platform itself, so the farmer has no workflow to buy software for |
| Beekeepers | Bee-colony passports with ID codes, registered in EKTİS. Colonies must be registered before moving to summer pastures (koc.eagro.az) | A ministry commission visits the regions to do the passporting | Subsidy only for farms with 40+ colonies ([trend.az](https://az.trend.az/azerbaijan/society/2960935.html)) | Rejected | The portal is free and the state is the counterparty, so there is no money in it |
| Small abattoirs / Qurban slaughter points | Veterinary inspection and certificate before meat is sold | Seasonal tents, plus municipal and AQTA lists | 76 sale-and-slaughter, 27 sale-only and 31 slaughter-only points for Qurban 2026 ([1news.az](https://1news.az/az/news/20260521052901477-Qurban-bayrami-ile-bagli-tehlukesiz-heyvan-kesimi-ve-satishina-nezaret-guclendirilib)) | Rejected | Seasonal and tiny. AQTA vets issue the papers |
| Scrap metal collection points | A special licence for buying, processing and selling non-ferrous metals | Hundreds of yard listings on 2GIS and classified sites, none with software | Unknown | Rejected | No dealer-register or police-reporting duty found. Price-list sites are the only web presence |
| Household employers (nannies, maids) | A written employment contract registered on e-gov with an ASAN signature | The household signs through the state's own portal | >1M private-sector contracts overall; the household share is unknown ([taxes.gov.az](https://www.taxes.gov.az/az/post/4279)) | Rejected | The state portal is free and households are informal. No payroll-fund complexity like in Gulf or LatAm |
| Taxi operators | AYNA (the land transport agency) issues a permit (AZN 125) and a taxi card (AZN 25, valid 7 years), and requires a driver exam. Baku is capped at 25,000 permits | Mostly online through AYNA | 25,000 Baku cap ([fed.az](https://fed.az/az/neqliyyat/taksi-qeydiyyatinda-novbe-ayna-25-minlik-limite-dair-kriteriyalari-aciqladi-242952)) | Rejected | Mostly a one-off with a 7-year renewal. Bolt and AYNA cover the flow |
| Market and bazaar traders | Real-time online cash registers (e-kassa) for farm produce and stall sales | Cash trade at the counter | Unknown | Rejected | Cash-register vendors and the State Tax Service own this. The existing report covers e-kassa |
| Pesticide / agro-chemical sellers | Only registered products may be imported and sold. AQTA runs inspection campaigns | Shop-level inspections | Unknown | Rejected | The obligation sits on product registration (importers), not on a recurring sales register |
| Well drillers (artesian and sub-artesian) | Drilling and extraction permits from the Ministry of Ecology. The National Water Strategy plans real-time electronic monitoring of wells | Rules were "being prepared" | Unknown | Too early | The state plans its own telemetry. No operator-side filing has been found |

## 2. Opportunities

### Opportunity: Pawnshop licensing-and-reporting kit for the CBA transition

**Industry:**
Pawnshops (lombard).

**Buyer:**
The owner of a single shop or a small chain (1–5 branches), usually with an outside accountant.

**Trigger / Why now:**
The "Law on Pawnshops" draft passed its first and second readings in the Milli Majlis (parliament). Once in force it will:
- require a licence from the financial-market supervisor, now the CBA;
- give shops 6 months to come into compliance;
- impose quarterly, semi-annual and annual reports, plus charter-capital, reserve and capital-adequacy norms.

In April and May 2026 the CBA said the framework was still "in coordination" ([1news.az](https://1news.az/az/news/20260422041724927-Azerbaycanda-lombardlara-nezaret-guclendirilecek), [bakivaxti.az](https://bakivaxti.az/az/posts/detail/lombardlarla-bagli-yeni-telebler-1778152205)). Qlobal.az asked "who has been delaying the draft for four years", and the timing is unknown.

**Current workflow:**
1. The shop records each pledge (mostly gold) in a paper book or an Excel sheet.
2. The contract is printed from a template.
3. Interest and redemption are worked out by hand or in a simple program.
4. Forfeited pledges are sold off.
5. There is no regulator report today.

**Pain:**
Today the pain is low because no reporting is required. Once the law takes effect there will be a licence application, a capital check and periodic CBA reports. Unlicensed shops will have to stop trading.

**Existing solutions:**
- **Lombardex.az:** cloud SaaS for pawnshops, already advertising "in line with Central Bank requirements", with 10+ modules and a 3-day trial ([lombardex.az](https://lombardex.az/)).
- **USU-az:** pawnshop software ([usu-az.com](https://usu-az.com/pawnshop/app_for_a_pawnshop.php)).
- **1C** set up by local partners.
- Accountants and law firms, which will sell the licence application as a service.

**Offline evidence:**
- Most of the 1,000+ shops have no website.
- The number of shops is not even known to the CBA.
- Tap.az classified listings sell "pawnshop services".

**Offline channel:**
- Walk-ins in Baku, where shops cluster near markets and metro stations.
- Accountants who already serve pawnshops.
- Once a register exists, the CBA's list of licensees.

**Market count:**
"Over 1,000" according to the CBA chairman ([fed.az](https://fed.az/az/maliyye/merkezi-bankin-sedrinden-lombard-sektoru-barede-aciqlama-206423)). The exact number is unknown.

**The gap:**
The CBA's report templates do not exist yet. When they appear, Lombardex will very likely add them.

**Possible product:**
A licence-application pack and periodic-report generator built on a simple pledge register.

**MVP:**
An Excel or web pledge book that produces the CBA quarterly report in its required format.

**Pricing hypothesis:**
- AZN 40–80 a month per branch (about USD 25–50);
- or a done-for-you licence application at AZN 500–1,500, sold through accountants.

The buyer is more likely to pay for the service than for the software.

**How to find first customers:**
Walk-ins, accountants, and later the CBA register.

**Risks:**
- The law may stall indefinitely.
- An incumbent (Lombardex) is already positioned.
- Many shops may close instead of seeking a licence.
- Reports may go through a CBA portal that needs an ASAN signature.

**Kill condition:**
No law in force by mid-2027, or Lombardex ships the CBA reports at launch.

**Founder access:**
A local is needed. The work is in Azerbaijani and Russian, sold face to face, and the regulatory relationship matters.

**Score:** 3/10 (pain 3, frequency 6, mandatory 4 (not yet law), fragmentation 2, competition 4, incumbent gap 3, buyer access 5, WTP 4, MVP 7, distribution 4)

**Sources:**
- [fed.az – CBA chairman on pawnshops](https://fed.az/az/maliyye/merkezi-bankin-sedrinden-lombard-sektoru-barede-aciqlama-206423)
- [report.az – second reading](https://report.az/maliyye-xeberleri/lombardlar-haqqinda-qanun-layihesi-ii-oxunusda-qebul-edilib)
- [qlobal.az – four-year delay](https://qlobal.az/lombardlar-haqqinda-qanun-layihesini-drd-ildir-kimler-yubadir-arasdirma/)
- [sherg.az](https://sherg.az/iqtisadiyyat/lombard-fealiyyeti-ile-bagli-riskler-azalacaq)
- [lombardex.az](https://lombardex.az/)

### Opportunity: AML record-keeping for jewellers and gold buyers (FIU monitoring participants)

**Industry:**
Jewellery retail and the buying and selling of second-hand gold.

**Buyer:**
The owner of a jewellery shop or a gold-buying counter.

**Trigger / Why now:**
- Precious-metal dealers count as "monitoring participants" under the AML law. They must register with the FIU, identify customers and report, and fines reach AZN 15,000 (FIU materials surfaced by search; the exact thresholds are *unverified*).
- A new state hallmarking standard is being drafted (via AZSTAND, the standards institute under the Antimonopoly Agency) ([apa.az](https://apa.az/energy-and-industry/zergerlik-memulatlarinin-damgalanmasi-ile-bagli-yeni-standart-hazirlanir-996854)).
- No dated 2026 trigger was confirmed.

**Current workflow:**
1. The shop takes items to the state hallmarking counter (Antimonopoly Agency / SME houses).
2. It records sales and purchases in sales books.
3. For large or cash transactions it copies the customer's ID and, in theory, files a report with the FIU (whether this is actually done is *unverified*).

**Pain:**
Mostly latent. Regional hallmark inspections find violations ([azerbaijan-news.az](https://www.azerbaijan-news.az/az/posts/detail/regionlarda-aparilan-dovlet-eyar-nezareti-zamani-pozuntular-ashkarlanib-2362)), but no AML enforcement against jewellers was found.

**Existing solutions:**
- The FIU's own e-services for registration and reporting.
- Generic retail POS software and 1C.
- Accountants.

No jeweller-specific AML tool was found.

**Offline evidence:**
- Hallmarking is a counter service.
- Shops cluster in bazaars and have no web presence.

**Offline channel:**
- The queue at the hallmarking counter.
- Jewellery bazaars in Baku.
- A goldsmiths' association, if one exists (*unverified*).

**Market count:**
Unknown. Not found in 20 searches.

**The gap:**
A customer-ID log and threshold alerts tied to the jeweller's buy-back counter. It only matters if the FIU starts enforcing.

**Possible product:**
A tablet-based log of purchases and sales that scans the customer's ID and flags transactions above the threshold, ready for an FIU report.

**MVP:**
A form plus an export.

**Pricing hypothesis:**
AZN 20–40 a month. Willingness to pay is low unless fines start.

**How to find first customers:**
Walk-ins at jewellery bazaars and hallmarking counters.

**Risks:**
- No enforcement.
- The FIU portal is free.
- The trade is cash-heavy and owners avoid paper trails.

**Kill condition:**
No published FIU sanction against a dealer in precious metals.

**Founder access:**
A local only.

**Score:** 2/10

**Sources:**
- [FIU FAQ](https://www.fiu.az/faq)
- [Law on Precious Metals and Stones](https://azstand.gov.az/uploads/documents/452378211651c37052c0ba.pdf)
- [apa.az](https://apa.az/energy-and-industry/zergerlik-memulatlarinin-damgalanmasi-ile-bagli-yeni-standart-hazirlanir-996854)

## 3. Rejected

- **Livestock identification and the move to an electronic animal exchange:**
  - The trigger is strong: 28 animal markets were closed in Oct 2025 over foot-and-mouth disease and veterinary-sanitary failures, and markets will move to an exchange where buyers see identification data online.
  - But AQTA vets tag the animals and enter the data into AQTİS themselves, and the state will build the exchange.
  - So there is no private buyer for software. At most there might one day be a tender.
  - Sources: [azinforum](https://azinforum.az/iqtisadiyyat/azerbaycanda-enenevi-heyvan-bazarlari-baglanir-mal-qara-birjalarda-satilacaq), [banker.az](https://banker.az/t%C9%99s%C9%99rrufatlarda-heyvanlarin-identifikasiyasi-baslanib/), [bayraqdar.info](https://www.bayraqdar.info/2026/09/22/heyvanlarin-identifikasiyasi-v%C9%99-ucotu-uzr%C9%99-t%C9%99dbirl%C9%99r-davam-edir/).
- **Beekeeper registration in EKTİS:** a ministry commission does the passporting and the beekeeper receives a subsidy. There is nothing to sell.
- **Household employers:** the household registers the contract on the free e-gov portal with an ASAN signature, and most domestic work is informal.
- **Qurban slaughter points:** seasonal, and the paperwork is done by AQTA.
- **Scrap metal yards:** a licence exists, but no recurring register or police reporting duty was found.
- **Taxi operators:** a one-off permit renewed every 7 years. AYNA and Bolt already cover the flow.
- **Bazaar traders:** e-kassa vendors and the State Tax Service own this.
- **Pesticide sellers:** the obligation is on product registration.
- **Well drillers:** the rules are still being drafted and the state plans its own telemetry.

## 4. Method notes

- **What worked:** Azerbaijani regulator-first queries, such as "AQTA ... qeydiyyat" ("AQTA ... registration"), "lisenziya" ("licence") and "Mərkəzi Bank ... hesabat" ("Central Bank ... report"). They surfaced official news on afsa.gov.az, news-wire coverage (report.az, apa.az, fed.az) and the pawnshop law.
- **Recurring finding:** in Azerbaijan the receiving authority is usually also the data-entry operator (the vets enter the livestock data, a ministry commission does the bee passports). That undercuts the "one job, many receiving authorities" pattern.
- **What didn't work:**
  - Searches for operator-side record books ("uçot jurnalı", the accounting/record book) returned nothing.
  - Business counts were rarely published.
  - Trade associations barely surfaced.
