# Russia: offline-industries pass

Research date: 2026-10-05. Searches used: 6 of 8 (inaccessible-market budget). Local-language (Russian) queries only.

## Verdict: inaccessible. No opportunities recommended.

The country report (`research/countries/russia.md`) already found that a foreign solo founder cannot sell B2B workflow software in Russia in 2026. US persons are barred by the OFAC IT-services determination under EO 14071. The EU 12th package and the UK 2025 amendment ban enterprise-management software, including cloud delivery. Stripe, Paddle, Visa and Mastercard do not serve the market. 152-FZ data localization and the import-substitution preference for registry-listed domestic software add further barriers. Nothing in this pass changes that. Quiet industries do not escape these barriers either: livestock and apiary registration, scrap acceptance logs and taxi permits are all "enterprise management / accounting / fleet" shapes, and they sit squarely inside the bans.

This pass screened the quiet industries anyway, so the global study can see what the regulatory picture looks like. It also turned up one finding that is useful elsewhere: Russia's state VetIS system makes the *regulator* do the registration work for free, through district animal-disease stations. That removes the private middleman niche the study is hunting for.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Beekeepers (apiaries) | Register the apiary in the "Horriot" component of FGIS VetIS by 1 Sept 2025 (Government Decree No. 550 of 5 Apr 2023). Each hive gets a unique number shown on a large-print tag (rule in force Sept 2025). Honey needs Mercury vet certificates to be sold. | Registration starts with a paper application to the district animal-disease station, then an on-site inspection and sampling. The vet service issues a paper apiary passport and does the Horriot entry itself (regional FSVPS news pages). | Unverified; no register count found | Reject | The state vet station does the data entry for free, so the remaining paperwork has no paying buyer. Inaccessible anyway |
| Household plots (LPKh) with livestock | Tagging and Horriot registration of animals, with deadlines staged by species: horses in LPKh by 1 Mar 2025; small ruminants, rabbits and poultry in LPKh by 1 Sept 2026. Enforced under Art. 18 of the Law on Veterinary Medicine and KoAP Art. 10.6. | Municipal paper leaflets ("pamyatka") tell owners to go to the vet station. 142 warnings were issued in three regions in 2025 and 36 LPKh violations in Tyumen. | Millions of households (estimate; unverified) | Reject | Consumers, not businesses. The vet service does the entry. Zero willingness to pay |
| Commercial livestock farms | Same Horriot tagging (industrial cattle, pigs, poultry and horses by 1 Sept 2024). Reported to be a condition for state subsidies (Dairynews) | Partly online (VetIS web UI) | Unverified | Reject | The 1C/Kontur/integrator ecosystem serves VetIS (per the country report). Inaccessible |
| Scrap metal acceptance points | A receiving/handover act (priemo-sdatochny akt) is required for every batch. Acts are logged in a register book, which may be kept electronically. The book and acts must be kept for 1 year (Rules for handling ferrous/non-ferrous scrap; Garant sample register form, Oct 2025) | Free blank forms (Word/PDF) from Moe Delo and form sites; 1C report add-ons on Infostart; Evotor POS guide | Unverified (licensed points, regional lists) | Reject | Substitutes are free forms, 1C add-ons and Evotor POS. Low pain (1-year retention). Inaccessible |
| Households employing nannies/housekeepers | An individual (non-entrepreneur) employer must sign a written labour contract and register it with the local government body (Labour Code rule for individual employers). Most use self-employed (NPD) status instead | Registration at the municipal administration counter | Unverified | Reject | NPD self-employment and the "Moy Nalog" app have largely replaced formal household employment. No pain to sell into |
| Taxi drivers / small taxi operators | Law 580-FZ (in force 1 Sept 2023): a regional permit (up to 5 years, valid in the issuing region only); self-employed drivers must work through an ordering service; regional carrier registers | Regional permit application | Unverified | Reject | Aggregators (Yandex Go) and their fleet partners own the workflow. Kontur already publishes guides. Inaccessible |
| Funeral operators / cemeteries | A planned funeral-licensing bill (regional permits); "Burial management" Gosuslugi service, live in 6 regions in 2026 and rolling out to 21 regions by 1 Dec 2026 (RUB 295.5M; 14,000 cemeteries loaded into NSPD) | Municipal cemetery books are being digitized by the state | 14,000 cemeteries (www1.ru, Aug 2026) | Reject | The state is building the system itself. The licensing bill is not confirmed as passed |
| Pawnshops | Supervised by the Bank of Russia, with AML (115-FZ) reporting (background knowledge; not searched) | Unverified | Unverified | Reject | Financial-sector reporting is served by domestic RegTech. Inaccessible |
| Small abattoirs / honey and meat sellers at markets | Mercury e-vet certificates (VetIS) | Partly online | Unverified | Reject | Covered in the country report: entrenched domestic vendors. Inaccessible |
| Hunting outfitters / game dealers | Hunting tickets and permits, production reports (background knowledge; not searched) | Unverified | Unverified | Reject | Not researched beyond screening. Inaccessible |

Russia-specific groups added: apiary hive tagging (VetIS Horriot), LPKh livestock tagging, taxi regional permits under 580-FZ, and cemetery digitization (Gosuslugi/NSPD).

## 2. Strongest opportunities

None. No quiet industry passes the brief's final decision rule, for two reasons:

1. **Accessibility.** For US/EU/UK persons, sales are legally blocked and payment is practically blocked (see the country report).
2. **State as the free intermediary.** In the most promising quiet-industry triggers found here (apiary and LPKh animal registration in Horriot, cemetery records), the receiving authority does the data entry or builds the portal itself, at no charge to the operator. In this study's usual pattern, a clerk or accountant does the job for a fee. That paid intermediary is missing here.

If the market were accessible, the closest candidate would be a done-for-you Horriot/Mercury service for small commercial farms and honey producers, sold through regional beekeeper unions and district vet stations. It would still score low (estimate 3/10): low willingness to pay, a free state alternative, and an entrenched 1C/Kontur ecosystem.

## 3. Rejected

- **Apiary registration and hive tagging (Horriot):** a real 2025 trigger, but the district vet station does the registration, and the remaining task (printing hive tags) is a stationery product, not software.
- **LPKh livestock tagging (deadline 1 Sept 2026):** the buyers are households, not businesses, and the state does the entry.
- **Scrap acceptance register book:** free forms, 1C add-ons, Evotor POS; 1-year retention; low pain.
- **Household employers:** the NPD self-employed regime removes the payroll workflow.
- **Taxi 580-FZ:** owned by the aggregators.
- **Funeral/cemetery records:** the state Gosuslugi/NSPD build is the substitute; the licensing law is unconfirmed.
- **All of the above:** sanctions and payment barriers make Russia inaccessible to a foreign founder.

## 4. Method notes

- Russian-language regulator queries worked well. Regional FSVPS news pages (`NN.fsvps.gov.ru`), municipal leaflet PDFs, and Consultant/Garant pages surface the obligation, its deadlines and the counter-based workflow quickly.
- Enforcement evidence shows up as Rosselkhoznadzor "warnings" (predosterezheniya) counts in regional news, not as court cases.
- Market counts were not findable within the budget. Registers (Horriot, scrap licences) are not published as downloadable lists.
- The search was deliberately shallow because the market is inaccessible. More budget would not change the verdict.

## Sources

- Garant, sample register form for scrap acceptance acts (Oct 2025): https://base.garant.ru/55742952/
- ConsultantPlus, Rules for handling ferrous and non-ferrous scrap: https://www.consultant.ru/document/cons_doc_LAW_418111/87cf846f6bb818931e486c0f9844f0c874fa9614/
- Moe Delo, blank scrap acceptance act (2025): https://www.moedelo.org/blanki/item/priemo-sdatocnyj-akt-lom-i-othody-cernyh-metallov
- Infostart, 1C report: scrap acceptance act book: https://infostart.ru/1c/reports/1921289/
- Evotor, how to accept scrap metal in 2025: https://zhiza.evotor.ru/kak-prinimat-metall-po-zakonu-v-2025-godu-i-chto-dlya-etogo-nuzhno/
- 73online, mandatory apiary registration in Horriot: https://73online.ru/r/vnimanie_pchelovodam_dan_start_obyazatelnoy_registracii_pasek_v_horriot-148330
- FSVPS (region 81), how a beekeeper gets an apiary vet passport: https://81.fsvps.gov.ru/news/kak-pchelovodu-poluchit-veterinarnyj-pasport-na-paseku/
- FSVPS (region 39), reminder on mandatory marking of bee colonies: https://39.fsvps.gov.ru/news/napominaem-ob-objazatelnoj-markirovke-pchelosemej/
- Pobeda26, registration of apiaries in Stavropol (June 2026): https://pobeda26.ru/articles/agronomy/2026-06-09/nuzhny-registratsiya-i-kommunikatsiya-kak-zaschitit-pchyol-stavropolya-ot-potrav-361723
- Vidal, animal-marking deadlines: https://www.vidal.ru/novosti/zhivotnye-na-selhozpredpriyatiyah-dolzhny-byt-promarkirovany-do-1-sentyabrya-2024-goda-12349
- MyUrist, 36 LPKh violations of Horriot rules in Tyumen: https://myurist.online/news/v-tyumenskoy-oblasti-36-lph-narushili-pravila-ucheta-v-sisteme-horriot
- Uinsk municipality, Horriot leaflet (2025): https://uinsk.ru/wp-content/uploads/2025/09/pamyatka-horriot-nov.docx
- Dairynews, state livestock support tied to animal marking: https://dairynews.today/kz/news/gospodderzhka-zhivotnovodstva-v-rossii-budet-zaviset-ot-markirovki-zhivotnykh.html
- Kontur, how taxi work is regulated in 2025: https://kontur.ru/articles/357
- Garant (harant.ru), taxi law from 1 Sept 2023: https://harant.ru/blog/dtp-gibdd-pdd/zakonotaksi/
- www1.ru, Gosuslugi cemetery digitization, RUB 295M (Aug 2026): https://www1.ru/news/2026/08/13/427951-gosuslugi-dovedut-do-kladbishha-295-mln-rublei-vlozat-v-cifrovizaciiu-zaxoronenii.html
- 360.ru, ritual digitization via Gosuslugi: https://360.ru/tekst/obschestvo/ritualnaja-tsifrovizatsija-kak-gosuslugi-izmenjat-pohoronnuju-sferu-v-rossii/
- ConsultantPlus, self-employed workers: https://www.consultant.ru/law/podborki/samozanyatye_rabotniki/
- Country report for the accessibility evidence: research/countries/russia.md
