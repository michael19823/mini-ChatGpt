# Armenia: offline-industries pass

Researched 2026-10-05. I used 19 of my 20 WebSearch calls. One of them, the 14th, was refused at a usage limit; the session resumed after the limit reset. I did not use WebFetch. Facts I could not confirm are marked "unverified" or "estimate". This pass does not repeat the opportunities in `research/countries/armenia.md`: E-mark marking, export traceability and medicine marking.

**Bottom line:** Armenia's quiet industries are small, and the state often does the regulated work for free. The state tags livestock and the municipality runs Yerevan's buses. The one strong regulatory trigger I found is the **tourism-provider notification platform**. It opens on 2026-10-15, criminal liability is possible, and roughly 1,700 accommodation properties are affected. Accommodation is only partly a "quiet" industry, though: hotels already use Booking.com. No idea here scores above 4/10 as a standalone Armenian business.

---

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Small hotels, guest houses, rural B&Bs | Register on notify.tourism.gov.am from 2026-10-15 and report rooms, beds and occupancy. Annual fee AMD 5,000–150,000. Working without notification carries liability from a fine up to imprisonment | A new portal. Rural family guest houses fill it in themselves or through an accountant (inferred) | ~1,700 hotel properties in 2025, 790 of them in Yerevan (HVS, citing official data) | **Candidate (4/10)** | Real trigger and penalty. But how often occupancy must be reported is unverified, and PMS vendors and accountants may absorb the work |
| Slaughterhouses and market meat sellers | Home slaughter banned since 2020-07-01. Market sellers must show documents proving the meat came from a licensed slaughterhouse | Paper documents checked in market raids. Over 1 t of meat confiscated in Dec 2024 | 101 registered slaughterhouses, about 60% operating (Azatutyun/Arka) | **Candidate, weak (3/10)** | Enforced and per batch. But too few slaughterhouses, low margins, and buyers who protest rather than pay |
| Pawnshops | Central Bank of Armenia (CBA) licence (PA-Y numbers), CBA prudential and AML reporting | Small LLCs with "Credit" in the name (Money Credit, Art Credit, VIP Credit). Their tooling is unverified | Licence numbers reach PA-Y 333 by 2025, so a few hundred licences were ever issued. Active count unknown (estimate) | **Candidate, weak (3/10)** | Regulated and recurring. But the reporting formats are CBA-set and probably already served by local accounting vendors (unverified) |
| Scrap metal collection points | Licensing for scrap handling. Points keep a register (*matyan*) of supplier, metal type, weight and price. Export ban since 2024-11-07, extended to 2026-02-01. A bill raises heavy-industry licence fees and regulates the domestic ferrous trade | Counter-based yards, Facebook and list.am ads | Unknown. Many small points (2GIS, list.am listings) | Rejected for now | The register is real, but I found no new digital-reporting trigger, and the buyers are cash businesses |
| Currency exchange offices | CBA licence. AML reporting above AMD 20M non-cash | Licence numbers reach ~867 (2025 CBA resolutions) | Several hundred points (estimate). Many are bank branches | Rejected | Dominated by banks and chains, and the CBA reporting stack is mature |
| Taxi drivers (street taxi) | Licence, yellow plates, car no older than 10 years. Electronic receipt per ride. State duty of 5% on cash rides and 4% on cashless rides from 2026-01-01. Fines of AMD 500,000 (no licence) and AMD 200,000 per missing receipt | Mostly owner-drivers | Not found | Rejected | Platforms (Yandex, gg) issue the receipts. Drivers outside platforms use eHDM apps. It's a consumer-like individual buyer |
| Yerevan minibus operators | Route contracts with the municipality | — | Shrinking | Rejected | The municipal reform replaces private operators with city-bought buses: 171 new buses in 2025, 250 e-buses planned |
| Livestock farmers (cattle and sheep tagging) | Holding and animal identification and registration (HAI&R): ear tags and an electronic database | Vets do the tagging in the field | ~800k cattle in phase 1. The Ministry of Economy tendered small-ruminant tags in July 2026 | Rejected | The state pays and trained vets do the work: "farmers do not bear any costs". No payer |
| Jewellers and gold sellers | Mandatory state hallmark on gold items. Precious-metals licensing and retail control under the Ministry of Finance. EAEU precious-metals agreement | Hallmarking done at the state assay office | Unknown | Rejected (thin evidence) | I found no recurring operator-side reporting duty. Hallmarking is a state service |
| Short-term rental hosts (single apartment) | Personal rental income tax, declared annually | — | — | Rejected | Outside the tourism-notification class, and the filing is annual only |
| Hotel classification | Voluntary or semi-mandatory star classification by the Armenian Hotel Association (Hotelstars Union criteria). Decision 1383-N of 2025-09-25 | Done through association audits | Same ~1,700 properties | Rejected as a product, **kept as a channel** | One-time or periodic audits, not a recurring workflow. The association is a useful offline channel |
| Beekeepers | Veterinary registration of apiaries: unverified for Armenia, and I found no apiary-passport rule. Pilot subsidy (Aug 2024, two years) pays 50% of new bee colonies | Small, older, rural operators averaging ~17 hives | ~11,000 beekeepers (ampop.am) | Rejected | Quiet, but I found no recurring mandatory filing. The only paperwork is a one-off subsidy claim, and there's no money in it |
| Household employers (domestic workers, nannies) | General Labour Code: written contract, SRC employee registration, monthly 20% income tax and pension withholding. Mandatory use of the Digital Employment Contract System postponed to 2027-07-01 | Households rarely formalize (inferred) | Unknown. Mostly informal (estimate) | Rejected | No household-specific regime and weak enforcement. Recheck in 2027 when e-contracts become mandatory |

---

## 2. Strongest opportunities

### Opportunity: Tourism-notification and occupancy-reporting service for small guest houses

**Industry:**
Accommodation: small hotels, guest houses and rural B&Bs outside Yerevan.

**Buyer:**
Owner-operator of a family guest house or small hotel (5–30 rooms), or the outsourced accountant who already files its taxes.

**Trigger / Why now:**
- The Law on Tourism (in force 2024-09-01) requires an electronic register of tourism service providers.
- On 2026-08-13 the government approved the database regulations. Decision N 136-N took effect 2026-07-01, according to a law-firm summary.
- The notification platform notify.tourism.gov.am opens on **2026-10-15**, phased by provider category.
- Accommodation providers must enter rooms, beds and occupancy. The annual fee is AMD 5,000–150,000 depending on activity type.
- Operating without notification is illegal, with liability ranging from a fine to imprisonment.

**Current workflow:**
1. The owner learns about the obligation from news, the association or an accountant.
2. The owner (or an accountant) creates the portal account and enters the property data by hand.
3. The owner pays the annual fee.
4. The notification itself does not expire, but providers "must update their information regularly" (Armenpress, Armenian edition). The update frequency is unverified. One report says the hotel fields cover occupancy; another says employment.
5. Separately, accommodation establishments answer Armstat's **quarterly accommodation survey**: arrivals and nights of residents and non-residents, with monthly bed and room occupancy. Armstat builds its sample from the Tourism Committee's register of accommodation establishments. The owner re-keys the same stays from a paper guest book, a Booking.com extranet export or Excel into both channels.

**Pain:**
A new mandatory portal with criminal-liability headlines, aimed at a sector of older, family-run rural operators. Today the pain is mainly anxiety plus a one-off setup. The recurring part is the quarterly Armstat survey, which collects monthly occupancy figures, plus the portal updates.

**Existing solutions:**
- The portal itself, which is free apart from the fee.
- Outsourced accountants, who already handle the turnover-tax returns.
- International PMS and channel managers (Cloudbeds, Exely/TravelLine and similar), which are unlikely to have built an Armenian integration yet (unverified).
- Local hotel software, if any (unverified).
- The Armenian Hotel Association and Tourism Committee guidance.

**Offline evidence:**
- The portal is brand new and has no third-party integrations yet.
- Rural guest houses are owner-run.
- The Tourism Committee had to run an awareness campaign: Prime Minister's office release in Feb 2026, news coverage warning of imprisonment.

**Offline channel:**
- The Armenian Hotel Association, which is also the authorized classification body.
- Regional tourism NGOs and the Tourism Committee's info sessions.
- Accountants who serve guest houses.
- Phone or WhatsApp outreach once the provider register goes public, if it does (unverified).

**Market count:**
~1,700 hotel properties in 2025, 790 of them in Yerevan (HVS Armenia Market Pulse 2026, citing official data). Guest houses not counted as hotels may add more (unverified).

**The gap:**
A cheap done-for-you notification service, plus, *if occupancy is periodic*, a tool that turns a guest book or Booking/Airbnb export into the portal's occupancy entry and the Armstat return in one step.

**Possible product:**
A "register me" service at a fixed price, followed by a monthly occupancy sync: one stay ledger feeding the Tourism Committee portal and the Armstat statistical return.

**MVP:**
A concierge service: the founder files notifications for the first 20 guest houses by hand. Then a spreadsheet template and a Booking.com CSV converter that produce the portal values and the Armstat form values.

**Pricing hypothesis:**
AMD 10,000–20,000 one-off for notification. AMD 3,000–8,000 (~$8–20) per month for occupancy reporting, only if it is periodic. The buyer would pay for a done-for-you service, not for software.

**How to find first customers:**
Armenian Hotel Association members, guest houses listed on Booking.com in Dilijan, Goris, Gyumri and Jermuk, and accountant referrals.

**Founder access:**
Needs an Armenian speaker. The portal and the owners work in Armenian, and the selling is by phone or in person. A non-local solo founder could not realistically do this.

**Risks:**
- Notification may be a once-a-year step with no periodic occupancy data, which would make this a one-time workflow.
- The portal may be simple enough that nobody pays.
- PMS vendors or the association may offer it free.
- Tiny revenue per customer.

**Kill condition:**
Kill the idea if the Decision 136-N text or the portal shows that the portal needs no periodic data, and the Armstat survey turns out to cover only a sample that excludes small guest houses, or if 5 guest-house owners say they filled it in themselves in under 30 minutes.

**Score:** 4/10

**Sources:**
- https://armenpress.am/en/article/1258248
- https://arka.am/en/news/tourism/in-armenia-working-in-the-tourism-sector-without-notification-may-result-in-criminal-liability/
- https://www.primeminister.am/en/press-release/item/2026/02/12/Cabinet-meeting/
- https://armenian-lawyer.com/immigration/armenia-short-term-rental-rules/
- https://www.translation-centre.am/pdf/Trans_ru/HH_Orenq/Official/HO-4-N_22122023_en.pdf (Law on Tourism)
- https://translation-centre.am/pdf/Trans_ru/HH_KVV/Officials/HHKV_N_1383-N_25092025_en.pdf (hotel qualification decision)
- https://www.hvs.com/article/10480/armenia-market-pulse-2026
- https://armenpress.am/hy/article/1258248 (notification does not expire, regular updates)
- https://armstat.am/file/doc/99501893.pdf (quarterly accommodation survey, monthly occupancy, Tourism Committee register)

---

### Opportunity: Meat-provenance document trail from slaughterhouse to market stall

**Industry:**
Small licensed slaughterhouses, including mobile and modular units, and the meat sellers at markets who buy from them.

**Buyer:**
The slaughterhouse manager, who issues the documents, and the market administration, which must show inspectors that its stalls are compliant. The stall sellers themselves won't pay.

**Trigger / Why now:**
- The home-slaughter ban has applied since 2020-07-01. Enforcement resumed in December 2024: sanitary inspectors raided Yerevan markets, checked documents certifying that meat came from licensed slaughterhouses, and confiscated over 1 t of meat. Vendors protested and police made eight arrests.
- The government subsidizes leasing of mobile and modular slaughterhouses from 2024-09-01 to 2026-12-31, so new small operators are appearing.

**Current workflow:**
1. A farmer brings animals to a slaughterhouse.
2. A vet inspects them, and the slaughterhouse issues a paper certificate or accompanying document per carcass or batch. The exact form is unverified.
3. The seller keeps the paper at the stall.
4. An inspector checks the paper against the meat on the counter, and meat without valid paper is confiscated.

**Pain:**
Confiscation is a direct, per-batch loss. Paper documents are easily lost or forged, and the economy minister publicly said the requirement "was not working". The evidence is news-level, and the document format is unverified.

**Existing solutions:**
- Paper certificates.
- The Food Safety Inspection Body's own procedures. Whether an FSIB e-system for vet certificates exists is unverified.
- The HAI&R animal database, which tags cattle but does not track carcasses to the stall (unverified).

**Offline evidence:**
Markets and stalls, cash trade, documents checked in physical raids, and protests rather than online complaints.

**Offline channel:**
The 101 registered slaughterhouses (FSIB list), market administrations in Yerevan (for example the Gum market), and the mobile-slaughterhouse leasing companies that receive the subsidy.

**Market count:**
101 registered slaughterhouses, about 60% of them operating, with more than half in or near Yerevan and Kotayk.

**The gap:**
A QR-coded batch document that the slaughterhouse prints and the inspector or market can verify. It only has value if the FSIB accepts it. Without regulator acceptance it has no value.

**Possible product:**
Slaughterhouse batch log: animal tag ID, carcass ID, a printed QR certificate, and a market-side "stall compliance" view.

**MVP:**
A web form plus QR label printing for one slaughterhouse and one market.

**Pricing hypothesis:**
AMD 20,000–50,000 per month per slaughterhouse. That works out to only ~60 payers.

**How to find first customers:**
The FSIB slaughterhouse register, and the mobile-slaughterhouse leasing beneficiaries.

**Founder access:**
Needs a local, and needs the FSIB's cooperation.

**Risks:**
- The FSIB builds or mandates its own system.
- A tiny market.
- Political sensitivity: protests over the ban.

**Kill condition:**
Kill the idea if the FSIB does not accept a third-party document, or if fewer than 10 slaughterhouses would pay.

**Score:** 3/10

**Sources:**
- https://www.azatutyun.am/a/33239196.html
- https://arka.am/en/news/business/requirement_of_law_on_mandatory_slaughter_of_livestock_at_abattoir_not_working_economy_minister/
- https://civilnet.am/en/news/381678
- https://arlis.am/en/acts/229528 (leasing subsidy)

---

## 3. Rejected

- **Livestock ear-tagging and registration.** The state buys the tags (tender in July 2026) and trained vets do the work at no cost to farmers. Nobody would pay. Sources: arka.am cattle numbering articles, https://www.tendersontime.com/tenders-details/small-cattle-animal-ears-labels-8aca53b/
- **Street-taxi compliance** (licence, receipt per ride, 5% cash duty in 2026). Platforms handle receipts for most rides, and the remaining drivers are individuals who use eHDM apps. Source: https://www.arka.am/en/news/business/new_taxi_regulations_in_armenia_to_take_effect_on_september_1
- **Minibus operators.** The municipality is replacing private operators with its own bus purchases. Source: https://arka.am/en/news/economy/yerevan-authorities-are-preparing-to-purchase-250-electric-buses-slated-for-2026/
- **Scrap-metal dealer register.** A paper register exists, but I found no new digital trigger. The export ban helps domestic mills, not the paperwork. Sources: https://www.bigmint.co/intel/detail/armenia-extends-scrap-metal-export-ban-until-feb-26-33621, https://arka.am/en/news/economy/armenia-plans-to-double-the-basic-fee-for-heavy-industry-production-licenses
- **Pawnshops and exchange offices.** Licensed by the CBA and recurring, but few independent operators, mature CBA reporting, and likely covered by local accounting vendors (unverified). I'd revisit them only with access to the CBA's reporting form list. Sources: https://arlis.am/en/acts/182322, regalert.today CBA resolutions
- **Beekeeper registers.** ~11,000 small beekeepers, but I found no recurring mandatory filing. Source: https://ampop.am/en/beekeeping-and-honey-production-in-armenia/
- **Household-employer payroll.** No household-specific regime, and most of the work is informal. The Digital Employment Contract System becomes mandatory on 2027-07-01, so this could be a future trigger. Source: https://armenian-lawyer.com/immigration/hiring-your-first-employee-in-armenia-contracts-registration-payroll-withholding-and-compliance/
- **Jewellery hallmarking.** It's a state assay service, and I found no recurring operator-side filing. Source: https://minfin.am/en/page/precious_metals_sphere

## 4. Method notes

- English queries on arka.am and armenpress.am gave the best regulator news. Arlis.am (the legal database) and regalert.today surfaced CBA licence acts. The Armenian-language query on scrap returned mostly ads and old acts.
- Searching for licence registers gave licence *numbers*, not counts. Real counts need the CBA or FSIB registers directly.
- The best trigger in this pass (tourism notification, 2026-10-15) came from a law-firm guide plus news, not from a regulator page.
- One call (the 14th) was refused at a usage limit; the session resumed after the limit reset, for 19 calls in total. Armenian-language queries mostly returned the Armenian versions of English news.
- The Armstat sector-review PDF was the best source for recurring hotel reporting. CBA licence acts on regalert.today give no total counts of pawnshops or exchange offices.
