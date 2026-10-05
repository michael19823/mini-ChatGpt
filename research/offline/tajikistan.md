# Tajikistan: offline (quiet) industries pass

Researched 2026-10-05. I used 18 of the 20 WebSearch calls, mostly in Russian, and one of them failed on a usage limit. Tajik-language queries were not tried. WebFetch was not used.

**Bottom line:** No quiet industry in Tajikistan clears the bar for a solo-founder software business. The regulator-first method mostly turned up framework laws, such as the beekeeping, veterinary and plant-protection laws on FAOLEX, and dated statistics. It found no 2024–2027 trigger that creates a new recurring filing for small operators, and no public register big enough to sell into. Two things repeat across every row:

- the receiving body is a district state vet, a plant-protection station or a ministry counter that uses paper certificates, with no portal to integrate with;
- operators are tiny, rural and price-sensitive, and many pay in cash.

Several plausible segments don't exist in Tajikistan or are closed to private firms. Private currency-exchange booths were all closed by the National Bank in 2015, and exchange now happens only inside banks. Labour emigration runs mainly through about 30 licensed agencies. I rank one weak candidate below for completeness. As in the main report, Tajikistan is at best an add-on market for a product built for Uzbekistan or Kyrgyzstan.

The main country report (`research/countries/tajikistan.md`) already covered and rejected e-VAT, ASYCUDA customs brokers, fiscal cash registers and dried-fruit export packs. I don't repeat them here.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Private employment agencies sending migrants abroad (country-specific) | Ministry of Labour licence; reporting on citizens placed abroad; a bill on private employment agencies is in preparation (OSCE/UN documents) | Ministry statistics are aggregated from agency reports; I found no agency software or portal | **30 licensed entities** placed 35,747 citizens abroad in 2025; 29 in H1 2025 (Times of Central Asia, citing the Ministry of Labour) | Weak candidate (below) | Real recurring reporting and a growing flow, but only 30 buyers |
| Beekeepers | Law "On beekeeping" (2003); a veterinary-sanitary apiary passport (owner, number of colonies, treatments) | Passport is a paper booklet issued by the district vet station | ~270,000 bee colonies; >4,620 t honey last year (Rambler/Sputnik). Number of apiaries unknown | Reject | Hobby and smallholder producers with no budget and no digital receiving body |
| Livestock owners and traders, animal bazaars (mol bozor) | Veterinary certificates for movement and slaughter; pre-slaughter certificate from the district vet station; tagging | Certificates issued on paper at vet stations (FAOLEX veterinary acts). I found no Tajik national animal-ID database | Millions of head, mostly in household plots (estimate). No trader register found | Reject | The buyer is the state vet service (donor or procurement sale), not the traders |
| Scrap metal collection points | Scrap trade and export are licensed/controlled (export licensing under government lists) | No Tajik register or 2024–2026 rule found. Searches returned only Kazakh and Kyrgyz export bans | Unknown | Reject: insufficient evidence | I found no police-register-style obligation in Tajikistan |
| Pawnshops (ломбарды) | National Bank licence as a non-bank financial organisation; prudential reporting to the NBT | NBT publishes them in its financial system reviews. I found no pawnbroker software vendor | Unknown. The NBT review counts NBFIs but my search didn't surface the number | Reject | A handful of operators; reporting to the NBT is likely a template the regulator provides (unverified) |
| Money changers | Private exchange booths banned by the NBT since late 2015; exchange happens only in banks | n/a | 1,473 booths closed in 2015 (Caravan/Meduza) | Reject | The segment no longer exists outside banks |
| Pesticide and fertiliser sellers | Law No. 1567 "On quarantine and plant protection" (2019); state registration of pesticides; permit to sell and store | Permits and the list of approved products are handled by the plant-protection authority on paper (FAOLEX) | Unknown. Kyrgyzstan is only now *proposing* sales licensing (Sept 2026) | Reject | No sales-register obligation found for retailers; tiny agro-dealer base |
| Pharmacies | Licence; inspections by the pharmaceutical supervision service | Inspections done on paper; no digital marking mandate found | ~1,470 pharmaceutical establishments inspected in 2016 (GxP News) | Reject | No new trigger. 1C-based pharmacy accounting covers stock. Low prices |
| Halal certification (food producers) | Voluntary halal standard since 2013 (Tajikstandard); import ban on non-halal meat reported | Certificates come from a state body | Only about 6 certified producers at launch (1prime, 2013) | Reject | Too few producers; the certifier is the state |
| Driving schools | Licence; MVD exams | Nothing Tajik-specific found. Results covered Kazakhstan and Uzbekistan | Unknown | Reject: insufficient evidence | No register or trigger found |
| Minibus and route-taxi operators | Transport licence, waybills | Searches surfaced only Russian Mintrans decisions on Russia–Khujand routes | Unknown | Reject: insufficient evidence | No Tajik regulator data reachable in Russian or English search |
| Households as employers (domestic workers) | Labour Code, social tax | Tajikistan exports labour rather than importing domestic workers; employment is informal | n/a | Reject | No formal household-employer obligation is enforced (estimate) |
| Dehkan (private) farms | Land use and tax registration; dehkan farms produced 34.7% of farm output in 2025 (stat.tj) | Tax and land paperwork done through district offices and khukumats | Number not found in search (stat.tj reports output share only) | Reject | Main pain is the tax and land-use administration that the main report already covers; low willingness to pay |

## 2. Strongest opportunities

Only one candidate made it this far, and it is weak.

### Opportunity: Placement-reporting and candidate-file tracker for licensed labour-migration agencies

**Industry:**
Private employment agencies licensed to place Tajik citizens in jobs abroad (Russia, Kazakhstan, Gulf, South Korea, Japan, UK seasonal work).

**Buyer:**
Director or office manager of a licensed private employment agency in Dushanbe or Khujand.

**Trigger / Why now:**
- Organised placements roughly doubled in 2025: 35,747 citizens, up 18,805 on the year before.
- The Ministry of Labour is negotiating nine new bilateral agreements (Georgia, Poland, Serbia, Saudi Arabia, Croatia and others).
- A law on private employment agencies is being drafted (OSCE/UN reports). It would add obligations on pre-departure training and reporting (details unverified).

**Current workflow:**
1. Collect each candidate's documents: passport, medical certificate, police clearance, training and language certificates.
2. Match candidates to foreign employers' quotas or contracts.
3. Track the visa and work-permit steps for each destination's process.
4. Report placements to the Ministry of Labour, Migration and Employment periodically (format unverified, assumed Excel or paper).
5. Follow up on workers abroad when complaints or returns happen.

**Pain:**
Volume per agency is about 1,200 placements a year on average (35,747 / 30). Each destination has different document rules. I found no direct complaint evidence (unverified).

**Existing solutions:**
- Excel and Telegram (assumed)
- 1C for accounting
- Destination-side systems (Korea's EPS through the state channel, UK sponsor portals) that the agency doesn't control
- The Ministry of Labour's own reporting templates
- Generic recruitment ATS products (Bitrix24 is widely used in the CIS; unverified for these agencies)

**Offline evidence:**
- The ministry publishes only aggregate numbers.
- I found no vertical software, and no portal for agency reporting.

**Offline channel:**
- The Ministry of Labour's list of licensed agencies; the licence register is likely available on request, unverified.
- IOM and OSCE migration projects that train these agencies.
- Walk-ins in Dushanbe.

**Market count:**
30 licensed entities in 2025 (Ministry of Labour, via Times of Central Asia).

**The gap:**
Candidate-file checklists that differ by destination, plus a one-click export of the ministry placement report. Only matters if the new law makes reporting mandatory and structured.

**Possible product:**
A Russian-language case tracker for each candidate, with document checklists per destination, expiry alerts and a ministry report export.

**MVP:**
A spreadsheet-import case board with destination templates and a monthly report generator.

**Pricing hypothesis:**
USD 30–80 a month per agency (estimate). More likely sold as a done-for-you setup plus support, through a local partner.

**How to find first customers:**
- The ministry's list of licensed agencies.
- IOM Tajikistan and OSCE programme events.
- Telegram channels of the agencies.

**Willingness to pay:**
Low to moderate. Agencies earn per placement, but would probably pay only for software that saves a visibly rejected or delayed file.

**Founder access:**
Needs a local Russian- and Tajik-speaking partner. A non-local solo founder could not realistically sell this.

**Risks:**
- The market is 30 buyers.
- The ministry may build its own e-register (likely with donor money).
- Payment collection is hard (see the main report).
- The same product is better aimed at Kyrgyzstan (~143–150 agencies) and Uzbekistan, with Tajikistan as an add-on.

**Kill condition:**
Any of these:
- the new law does not add structured reporting;
- the ministry or IOM supplies a free case-management system;
- fewer than 5 of 10 agencies interviewed handle more than 300 placements a year.

**Score:** 2/10. Tajikistan alone is far too small; this is worth checking only as part of a Kyrgyzstan or Uzbekistan product.

**Sources:**
- Ministry of Labour figures (30 entities, 35,747 placements in 2025; 29 entities in H1 2025): https://timesca.com/tajikistan-seeks-to-expand-the-geography-of-labor-migration/ ; https://timesca.com/tajik-government-seeks-new-destinations-for-labor-migrants/
- Draft laws on labour migration and private employment agencies (OSCE): https://www.osce.org/files/f/documents/4/c/34313.pdf
- Kyrgyz comparison (~143–150 agencies): https://economist.kg/society/2026/07/30/trudoustroystvo-za-rubezhom-chastnye-agentstva/

## 3. Rejected

- **Livestock movement and veterinary certificates:** the receiving body is the state vet service, which issues paper certificates. Any digitisation would be a donor or government procurement project, which is closed to a solo founder (FAOLEX veterinary acts: https://faolex.fao.org/docs/pdf/taj186150.pdf).
- **Beekeeper apiary passports:** about 270k colonies, but the buyers are smallholders and the passport is a vet-issued booklet. The state subsidy for buying colonies was only 400k somoni (https://weekend.rambler.ru/people/56480343-den-pchel-s-kakoy-porodoy-rabotayut-bolshinstvo-pasek-v-tadzhikistane/ ; law: https://faolex.fao.org/docs/pdf/taj111456.pdf).
- **Money changers:** private booths have been abolished since 2015, and exchange happens only in banks (https://www.caravan.kz/news/nacbank-tadzhikistana-zakryl-vse-obmennye-punkty-strany-359841/).
- **Pawnshops:** few operators, and they report to the NBT using its formats (https://nbt.tj/files/suboti-moliyavi/1%20квартал%202026%20ru%20_%20Обзор%20финансовой%20системы.pdf).
- **Pesticide sellers:** state registration exists (Law No. 1567, 2019), but I found no retail sales register and no new trigger (https://faolex.fao.org/docs/pdf/taj181180.pdf).
- **Pharmacies:** about 1,470 establishments, but no marking or e-reporting trigger, and 1C covers stock (https://gxpnews.net/2017/01/za-god-v-tadzhikistane-bylo-izyato-iz-prodazhi-bolee-15-tysyach-naimenovanij-lekarstv/?amp=1).
- **Halal certification:** too few certified producers, and the certifier is the state (https://1prime.ru/20130608/763988651.html).
- **Scrap metal, driving schools, route taxis:** no Tajik register or 2024–2026 obligation was found. These are not proven absent, only not reachable with Russian and English search.

## 4. Method notes

- **Worked:** English searches on Times of Central Asia for Ministry of Labour statistics; Russian searches that surface FAOLEX copies of Tajik laws; stat.tj for agricultural shares.
- **Didn't work:** Russian regulator-first queries ("лицензия", "журнал учета", "количество") mostly returned Kazakh, Kyrgyz, Uzbek or Russian pages. Tajik regulators publish few registers online, and Tajik-language queries were not tried.
- **For any follow-up:** use Tajik-language queries against the ministry websites (mehnat.tj, vet and food-security committee sites). Request registers directly, which needs a local partner.
