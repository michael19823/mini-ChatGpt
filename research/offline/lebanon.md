# Lebanon: Offline (quiet) industries pass

*Research date: 2026-10-05. Budget: 20 WebSearch calls (18 used). WebFetch and GitHub tools not used. Read alongside `research/countries/lebanon.md`, which covers stamp duty (G20/S17), payroll/NSSF, DNFBP AML, MediTrack and customs. None of those are repeated here.*

## Bottom line

The accessibility caveats in the country report still apply to everything below: FATF grey list, no Stripe or PayPal for Lebanese merchants, a cash USD economy, and Hezbollah-linked sanctions screening.

Lebanon has one quiet industry with a fresh, enforced, monthly, per-customer obligation: **private neighbourhood generator operators**, about 7,000 of them. The obligations are:
- bill every subscriber by individual meter at the Energy Ministry's monthly tariff;
- issue an official invoice;
- fit filters;
- face Economy Ministry inspections.

Prime Minister's Circular 31/2025 set a 45-day regularisation deadline from 13 Aug 2025. Raids and legal notices followed, and new Ministry of Economy (MoET) enforcement against tariff and invoice violations is running in Sept–Oct 2026. It is the best quiet-industry lead in Lebanon, but it is **not a clean gap**:
- cheap or bespoke billing apps already exist (Moteur, HEWIS, Iraq's Moalidaty, and generic subscription billing tools);
- operators are politically powerful and resist transparency;
- the market shrinks if EDL supply improves.

**Score 5/10. It needs a local founder.**

The second lead is **money changers**. BDL Decision 13837 (18 Aug 2026, attached to Basic Circular 6) now requires an electronic accounting system, KYC, transaction records and periodic reporting, with a one-year compliance window. It is real but AML/sanctions-sensitive and small. Score 4/10.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Private neighbourhood generator operators ("moteur") | Monthly metered billing at the MoEW tariff (fixed fee by amperage + kWh × tariff, separate rural/>700 m rate); official invoice; meters + filters + permits (Circular 31/2025); MoET inspections | Cash collection door to door; readings taken on foot; MoET fines cite "failure to issue official invoices" | ~7,000 generators (MoET, via L'Orient Today) | **Opportunity (5/10)** | Monthly, per-subscriber, enforced, tariff changes monthly; but cheap substitutes exist and operators resist transparency |
| Money changers (sarrafs) | BDL Decision 13837 / Basic Circular 6: licence category, capital, KYC, electronic accounting system, transaction records, periodic reporting; 1-year (+6 months) compliance window | Cash counters; regulator had to *mandate* an e-accounting system | Unverified (only "about ten" Category A per Le Commerce du Levant; total licensed count not found) | **Weak opportunity (4/10)** | Fresh 2026 trigger, but small count, AML/sanctions exposure, BDL-centred |
| Households employing migrant domestic workers | Annual MoL work permit + General Security residency renewal, notarised contract, insurance policy, medical tests | Counter filing at GS and notary; done by recruitment agencies or intermediaries | Agencies: 441 meeting legal standards of 700+ (MoL, 2016; dated) | Rejected | Annual only; agencies already do it as part of their fee; consumer buyer; kafala reform politics |
| Domestic-worker recruitment agencies | Same renewals in bulk for clients, plus MoL licence | Paper/counter at MoL and GS | ~441 legal agencies (2016; dated); ~200 shut down (Al Bawaba, date unverified) | Rejected (for now) | Small count, reputationally toxic sector, no new digital filing trigger found |
| Scrap metal dealers | No Lebanese dealer register or 2025–26 rule found (the 2025 scrap export ban found was **Syria's**) | Informal yards | Unknown | Rejected | No Lebanese regulatory trigger found within budget |
| Well drillers / private wells | MoEW licence to drill (paper application forms on MoEW site) | Paper forms; widespread unlicensed drilling, bribery reported (An-Nahar) | Unknown (illegal wells widespread) | Rejected | Enforcement is corrupt rather than paperwork-driven; operators avoid recording |
| Water tanker operators | No registration or reporting regime found | Cash, informal | Unknown | Rejected | No obligation found |
| Butchers / small abattoirs / livestock importers | MoA resolutions on slaughter conditions (2401/2009) and live-animal import conditions (829/2010); veterinary certificates | Paper vet certificates | Unknown | Rejected | Only old rules found, no 2024–26 trigger or enforcement evidence |
| Jewellers / gold buyers | AML record-keeping (covered in country report) | Paper ID copies | — | Already covered | See DNFBP idea in country report (4/10) |
| Pharmacies | MediTrack (covered in country report) | — | ~3,000 (estimate) | Already covered | See country report (3/10) |
| Beekeepers, farriers, kennels, tattoo studios, chimney sweeps, backflow testers | No Lebanese register or reporting regime surfaced | — | — | Not screened in depth | No regulator trace; skipped to save budget |

## 2. Strongest opportunities

### Opportunity: Generator-operator billing and inspection-ready invoicing ("Moteur compliance")

**Industry:**  
Private neighbourhood diesel generator operators. They are the de facto second electricity utility in Lebanon.

**Buyer:**  
Owner-operator of one or several neighbourhood generators, typically with 100–1,000+ subscribers (estimate), usually family-run, with a few collectors and electricians.

**Trigger / Why now:**  
- Prime Minister Nawaf Salam's **Circular 31/2025** gave operators 45 days from 13 Aug 2025 to regularise. They must apply the MoEW official tariff, install approved individual electronic meters, fit anti-pollution filters, and obtain operating permits. Penalties include fines (محاضر ضبط), seizure and confiscation of generators, and referral to prosecutors.
- MoET (Minister Amer Bisat) raided non-compliant operators after the deadline. He said "meters are no longer optional", and that about one third of ~7,000 generators failed at least one requirement (MoET survey of 750 generators, early 2025).
- Enforcement is continuing in 2026. The tariff is republished **every month**: Sept 2026 is LBP 52,840/kWh urban and LBP 58,124/kWh for villages above 700 m, plus fixed fees of LBP 385,000 for 5 A and LBP 685,000 for 10 A. MoET North issued citations in Halba, Bqarsouna and Tripoli for tariff violations and **not issuing official invoices**. L'Orient Today reports that the government "turns on the profiteers" as bills soar in late 2026.

**Current workflow:**  
1. A collector walks the route each month and writes down each subscriber's meter reading, on paper or in a notebook (some smart meters are read remotely).
2. The owner waits for the MoEW tariff announcement, usually around the 1st of the month, which varies by zone (urban below 700 m vs rural above 700 m) and by amperage.
3. Bills are computed: fixed fee by amperage plus kWh × tariff, in LBP, often quoted or collected in USD at a market rate. They are usually hand-written or done in Excel or a basic app.
4. Cash is collected door to door, and arrears are tracked informally.
5. MoET inspectors check bills against the tariff and ask for official invoices and meter evidence. Fines follow if there is a mismatch.

**Pain:**  
- Recurring monthly recalculation against a changing tariff, for hundreds of subscribers each.
- Real enforcement: citations, seizure threats, prosecutors.
- Subscriber disputes over the LBP/USD conversion.
- Not every operator feels this pain. Many overcharge deliberately, and for them accurate billing *reduces* revenue. The obligation pushes them to comply, but their incentive does not.

**Existing solutions:**  
- **Moteur** (open-source project on GitHub: metered generator billing, Arabic-first, phone-run; staff enter readings on the route, issue bills, record cash and expenses). It is a single-generator build, not a commercial SaaS as far as found.
- **HEWIS** app (generator status monitoring + billing transparency for households/buildings).
- **Moalidaty / مولدتي** (Excellent Solutions, Iraq): a generator subscriber-billing system for the very similar Iraqi neighbourhood-generator market. It could enter Lebanon.
- Generic subscription-billing tools (Daftra, e-bill.site) and Excel.
- Tariff trackers (smartioleb.com) that do the tariff lookup for free.
- Smart-meter vendors bundling reading software (unverified, not identified by name).

**Offline evidence:**  
- Readings are walked and collected in cash.
- MoET citations explicitly cite missing official invoices.
- The tariff is published as a .doc/.pdf on energyandwater.gov.lb and relayed through news sites each month, not through an API.
- No SaaS review pages, and no vendor marketing aimed at Lebanese operators beyond hobby or one-off apps.

**The gap:**  
Combine four things:
1. auto-load each month's MoEW tariff by zone;
2. turn route readings into tariff-correct invoices in Arabic, with the reading, tariff and exchange rate printed;
3. keep an **inspection pack**: per-subscriber meter history plus the invoices issued, ready to show a MoET inspector;
4. take USD/LBP cash collection with WhatsApp receipts.

Existing apps do pieces of this (billing), but none was found marketing tariff-compliance and inspection evidence to Lebanese operators.

**Possible product:**  
A phone-first app for generator owners and collectors that:
- records readings offline on the route;
- pulls in the official monthly tariff;
- issues compliant bills by WhatsApp or SMS, or as printed receipts from a Bluetooth printer;
- produces a compliance file for MoET inspections.

**MVP:**  
- Subscriber list import from Excel.
- Offline reading entry.
- Manually updated monthly tariff table (urban/rural, 5/10 A, etc.).
- Bill PDF/WhatsApp message.
- Cash ledger.
- "Inspection report" PDF per month.

**Pricing hypothesis:**  
$15–40/month per generator, or roughly $0.05–0.10 per subscriber per month. Software alone may sell to the larger multi-generator operators. Smaller ones may want a done-for-you service: an assistant who enters readings and prints bills. Payment in cash USD through a local reseller.

**How to find first customers:**  
Visible field presence: every neighbourhood has an operator, and the generator sits on the street with a phone number painted on it.

**Offline channel:**  
- WhatsApp or phone outreach to operators, whose numbers are on the generators and on every subscriber's bill.
- Electricians and meter installers who fitted the mandated meters (they already visit every operator).
- The generator owners' grouping, which has publicly negotiated with MoET; its exact name and leadership were not verified this session.
- Municipalities, which issue local permits and handle complaints.
- Diesel distributors who supply operators weekly.

**Market count:**  
About 7,000 private neighbourhood generators (MoET figure via L'Orient Today, 2025). The number of distinct owners is lower, since many own several. Not verified.

**Risks:**  
- Operators may prefer opacity (overcharging is common and politically protected, described as a "generator mafia" in An-Nahar).
- Enforcement may lapse after the news cycle.
- The market shrinks if EDL supply hours rise.
- A cheap Iraqi or local competitor, or a free open-source build.
- Payment collection.
- War disruption, since the south and Bekaa are conflict-affected.
- Sanctions screening of operators in Hezbollah-controlled areas.

**Kill condition:**  
- Fewer than 3 of 15 interviewed operators will pay $15+/month.
- Or MoET inspections do not actually ask for invoice and meter records.
- Or an established local app is already in wide use.

**Willingness to pay:**  
Moderate for multi-generator operators facing inspections. Small operators would likely only pay for a done-for-you service.

**Founder access:**  
Needs a local Lebanese founder or partner: Arabic, cash collection, field visits, and sensitivity about which operators are politically connected. A non-local solo founder could not realistically sell this.

**Score:** 5/10

**Sources:**  
- https://today.lorientlejour.com/article/1478454/economy-minister-bisat-warns-private-generator-owners-compliance-mandatory-or-face-sanctions.html
- https://today.lorientlejour.com/article/1479298/private-generators-as-regularization-deadline-passes-8-legal-notices-distributed-across-beirut.html
- https://today.lorientlejour.com/article/1473509/cabinet-announces-stricter-measures-against-generator-operators.html
- https://today.lorientlejour.com/article/1546592/in-light-of-soaring-private-generator-bills-lebanese-government-turns-on-the-profiteers.html
- https://v7cdn.lbcgroup.tv/news/news-bulletin-reports/881516/new-regulations-lebanon-clamps-down-on-noncompliant-power-generator-ow/en
- https://www.annahar.com/Lebanon/Politics/237380/ (Salam circular)
- https://www.annahar.com/economy/256151/ (operators ignore official decisions)
- https://www.lebanondebate.com/article/884109 (September 2026 tariff, invoices under oversight)
- https://dailybeirut.com/ (MoET North citations: Halba, Bqarsouna, Tripoli, tariff + no official invoices)
- https://kataeb.org/ (July 2026 tariff) and https://energyandwater.gov.lb/mediafiles/prices/2-2026-02-05.doc (tariff published as a .doc)
- https://economy.gov.lb/en/announcements/regarding-the-necessary-measures-and-procedures-to-be-taken-to-control-the-private-electricity-generators--tariff
- https://github.com/elias-khalil-eng/moteur-billing (existing billing build)
- https://www.wow.hewis.live/news (HEWIS)
- https://moalidaty.excellentsolutions.iq/ (Iraqi generator billing system)
- https://smartioleb.com/generator-tariff-lebanon/ (free tariff tracker)

### Opportunity: BDL Decision 13837 compliance kit for small money changers

**Industry:**  
Licensed money-exchange institutions (Category B counters especially; also A, A1, A2).

**Buyer:**  
Owner or compliance officer of a small exchange office.

**Trigger / Why now:**  
BDL Decision 13837 of 18 Aug 2026 (attached to Basic Circular 6) overhauls the sector:
- new licence categories, including A1 cash/precious-metal shipping and A2 informal money transfer;
- higher capital;
- ID verification with approved documents;
- a **mandatory electronic accounting system**;
- transaction recording and record-keeping;
- displayed rates;
- AML/CFT organisation and compliance;
- **periodic reporting** to BDL, with penalties.

Existing changers have one year, renewable once for six months, to comply or leave the market. FATF grey-list pressure is behind it.

**Current workflow:**  
1. Counter cash exchange, with the rate posted by hand.
2. The ledger is kept on paper or in Excel; ID copies are taken inconsistently.
3. Under the earlier Sayrafa regime, changers already reported daily transactions and cash positions to BDL through its app. Whether a reporting channel still exists after the new rules is unverified.
4. An external accountant prepares the financials.

**Pain:**  
- A new legal obligation with a market-exit threat.
- Small counters lack compliance staff.
- No complaints were found directly; pain is inferred from the rule's design.

**Existing solutions:**  
- The BDL platform/app (Sayrafa precedent).
- Regional exchange-house core systems (vendors not identified within budget, so unverified).
- Local accounting packages and AML screening vendors (Sanction Scanner, AML Watcher, per the country report).
- Accountants and compliance consultants.

**Offline evidence:**  
- Counter-based cash trade.
- The regulator had to mandate an electronic accounting system, which implies many counters do not have one.
- No Lebanese money-changer software listings found.

**The gap:**  
A cheap, Arabic counter app that logs each exchange with an ID scan, keeps the mandated ledger, and outputs BDL periodic-report formats. The formats were not seen, so this is unverified.

**Possible product:**  
Tablet counter app with ID capture, rate board, transaction ledger, threshold alerts and sanctions screening, plus a monthly BDL report export.

**MVP:**  
Transaction log + ID photo + daily position + report export template.

**Pricing hypothesis:**  
$50–150/month per counter.

**How to find first customers:**  
- BDL's published list of licensed institutions (assumed to exist; not verified).
- The money changers' syndicate (name not verified).
- Accountants serving changers.

**Offline channel:**  
The syndicate, accountants, and walk-ins in Hamra and other exchange clusters.

**Market count:**  
Unverified. Only "about ten" Category A holders were found (Le Commerce du Levant); the total licensed count was not found.

**Risks:**  
- Sanctions and AML exposure for the vendor (Hezbollah-linked exchange networks are a known US enforcement target).
- BDL may impose or certify specific systems.
- Market consolidation shrinks the count.
- Informal changers stay out of scope.

**Kill condition:**  
- BDL publishes an approved-vendor list that excludes small entrants.
- Or it provides its own mandatory app covering accounting.
- Or there are fewer than ~150 licensed counters.

**Willingness to pay:**  
Moderate, since exit from the market is the alternative.

**Founder access:**  
Local founder required. Not suitable for a non-local founder because of sanctions and AML risk.

**Score:** 4/10

**Sources:**  
- https://today.lorientlejour.com/article/1545922/bdl-further-tightens-rules-on-money-changers.html
- https://www.aljadeed.tv/news/localnews/587059/new-rules-for-money-changers-in-lebanon-what-do-they-include/en
- https://www.almodon.com/economy/2026/08/28/ (BDL tightens licensing conditions)
- https://www.bdl.gov.lb/CB%20Com/Laws%20And%20Regulations/Basic%20Circulars/Decision_13837_AR%C2%A712034_1.pdf
- https://today.lorientlejour.com/article/1262044/the-central-bank-has-launched-its-currency-exchange-platform-for-money-changers.html
- https://www.lecommercedulevant.com/article/29507-money-changers-the-new-kings-of-the-dollar

## 3. Rejected

- **Domestic-worker employer renewals (households).** The obligations are real and annual: MoL work permit LBP 6M, GS residency LBP 18M/24M, notarised contract, insurance and medical tests. But the buyer is a consumer, the task is annual, and recruitment agencies and intermediaries already bundle it into their fee. No new digital filing trigger was found. Sources: https://www.general-security.gov.lb/en/posts/23, https://www.general-security.gov.lb/en/posts/168
- **Recruitment agencies.** The market is small and dated (441 legal agencies, 2016), the sector carries a reputational risk, and there is no new reporting trigger.
- **Scrap metal dealers.** No Lebanese register or 2024–26 rule was found. The 2025 scrap export ban in the results was Syria's. Source: https://english.enabbaladi.net/archives/2025/05/ministry-of-economy-prevents-export-of-scrap-and-metal-alloys/
- **Well drillers.** The MoEW licence form exists on paper, but illegal drilling and bribery dominate, so operators avoid any record. Source: https://www.annahar.com/arabic/article/813180
- **Butchers, abattoirs and livestock importers.** Only 2009–2010 MoA resolutions were found. There was no recent trigger or enforcement.
- **Water tankers.** No obligation was found.

## 4. Method notes

- **Worked:** Arabic queries on enforcement vocabulary ("محاضر ضبط", "تسعيرة", "تعميم", "مهلة") surfaced the generator regime immediately; Lebanese news sites relay every ministry decision. English L'Orient Today articles gave counts and dates. BDL circular PDFs are indexed.
- **Didn't work:** Arabic queries returned Saudi or Gulf results for domestic-worker topics, and Syrian or Egyptian results for scrap and abattoirs. Adding "لبنان" is not enough, and "الأمن العام" or named ministries work better. No public licence registers (counts) surfaced for any sector. Counts come from ministry statements to the press.
- Lebanon's quiet regulated sectors are mostly crisis-born: generators, money changers. Their obligations come from enforcement campaigns rather than from portals.

Research model: Opus
