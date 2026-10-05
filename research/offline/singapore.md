# Singapore: offline (quiet) industries pass

Date: 2026-10-05. Method: about 28 web searches, English only. WebFetch was blocked, and the search tool hit a usage limit partway through, so this is a short report. Claims rest on search-result snippets of official pages (police.gov.sg, acd.mlaw.gov.sg, rop.mlaw.gov.sg, MUIS, PUB, EMA, SFA, AVS) and on law-firm and press notes. Anything not tied to a source is marked "unverified" or "estimate". This report doesn't repeat the opportunities in `research/countries/singapore.md` (BCRS, FSSA traceability, cleaning licence, WFA).

Context: Singapore has few truly "offline" industries. Almost every regulator runs a Singpass/Corppass portal (SHOTS for second-hand dealers, myPal for precious-metal dealers, ELISE for electrical licences, MOM e-services for household employers). So the quiet part is rarely the filing channel. It is the *record keeping before the filing*: counter staff at family-run shops writing customer details on paper or in a POS that doesn't talk to the regulator's portal. The best lead is in the precious-metals and second-hand counter trade, where 2026 brought new obligations aimed at stopping scams.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Jewellers, goldsmiths, bullion and pre-owned watch dealers (PSMDs) | PSPM Act registration (Class A/B, S$250/S$350 per outlet per year); CDD/ECDD; cash transaction reports (CTR) at S$20,000+ including same-day aggregation; STRs; semi-annual returns on myPal; revised Guidelines v5.0 (13 Feb 2026); scam Code of Practice with "ACT" intervention (2 Apr 2026) | Family-run counters (People's Park, South Bridge Rd, Little India); first prosecution (Kim Heng, S$35k fine) was over staff who skipped checks; MinLaw publishes guidance in Mandarin and runs onboarding briefings through the Singapore Jewellers Association | 1,475 registration applications covering 1,889 outlets by Sep 2019 (MinLaw); current public list exists (count unverified); SJA has about 230 members | **Candidate (best)** | New 2026 scam obligations at the counter, real enforcement, multiple registers (MinLaw + police SHOTS for trade-ins) |
| Second-hand goods dealers (phones, gold buy-back, watches, electronics) | SGDA 2007: same-day record of every purchase of scheduled goods; enter customer and transaction in police SHOTS; screen serial numbers/IMEI in SHOTS before buying; fine up to S$20,000 or 12 months' jail | Counter trade at Far East Plaza, Sim Lim and others; SHOTS is a separate web or mobile entry, apart from the shop's POS | Unverified (licence list not found) | Candidate (weak, best as a module of the PSMD idea) | Per-transaction duplicate entry, but SHOTS is free and the gain is minutes per item |
| Food shops, coffee shops, hawker stalls (grease traps and sanitary systems) | PUB: monthly visual checks, maintenance records shown on random audit; NEA/PUB approval for grease traps | Paper logs kept by premises, cleaning done by small grease-trap contractors | Tens of thousands of food premises (estimate) | Weak candidate | Records only, nothing is filed; no recurring submission, so low willingness to pay |
| Households employing migrant domestic workers | Monthly levy (S$60-450), S$60k medical and PA insurance, 6-monthly medical exams, security bond, rest-day rules | Households, often older employers | Roughly 300,000 MDWs (commonly cited figure, unverified here) | Reject | Levy runs on GIRO; agencies and insurers bundle the paperwork; MOM sends reminders; consumer buyer |
| Pawnbrokers | MinLaw Registry of Pawnbrokers: licence conditions say "all operations shall be computerised", 14-day change notices, CCTV, CTR under s.74A Pawnbrokers Act | Already computerised by rule | About 200 outlets (estimate, unverified) | Reject | Mandatory computerisation means existing pawn systems already cover it; S$100k deposit means few, larger chains |
| Money changers | MAS Notice 3001 AML/CFT, CDD, STRs, training | 26+ booths in one arcade at Raffles Place; family businesses | 231 licences (Aug 2022, via data.gov.sg / press) | Reject | Small count; MAS-regulated, so AML vendors (e.g. Biz4x) and consultants already target them |
| Massage establishments | Massage Establishments Act 2017; stricter "fit and proper" and layout rules from H2 2026 | Small operators; police raids | Unverified | Reject | Licence-level change, not a recurring filing; vice-enforcement context; low willingness to pay for software |
| Halal-certified eating establishments | MUIS HalMQ documentation, ingredient control, annual or biennial renewal | Hawker stalls and small eateries | 1,200+ certified establishments (secondary source) | Reject | Small count, MUIS's own eHalal process; halal consultants and trainers fill the gap |
| Licensed farms (vegetable, fish, eggs) | SFA farm licence, production and food-safety records | Small operators in Lim Chu Kang and sea-based farms | About 90+ land-based vegetable farms plus sea-based farms (SFA lists, 2026) | Reject | Too few buyers; SFA works with farms directly through grants |
| Pet breeders, boarders, pet shops | AVS licensing conditions (since Apr 2022) incl. traceability; public registries | Small family operators | Registries exist (count unverified) | Reject | No new 2025-2026 trigger found; small count |
| Cat owners (Cat Management Framework) | Licensing and microchipping by 31 Aug 2026 | Consumers | 111,000+ cats licensed by Sep 2026 (Malay Mail) | Reject | Consumer, one-off, free AVS portal |
| Electrical installation licence holders (factories, shops >45 kVA) | Annual LEW inspection; renewal on EMA ELISE | The owner relies on the appointed LEW | Unverified | Reject | The LEW already renews "on your behalf"; the LEW firm is the intermediary, and LEW tools are a crowded field-service niche |
| Scrap metal dealers | Not verified (search refused) | n/a | n/a | Not screened | Search budget ended by usage limit |

Groups specific to Singapore that were found through registers: PSMD regulated dealers (MinLaw list), SHOTS second-hand dealers (SPF), money changers (MAS / data.gov.sg), pawnbrokers (Registry of Pawnbrokers), halal establishments (MUIS).

## 2. Strongest opportunities

### Opportunity: Counter Compliance Kit for Jewellers and Gold/Watch Dealers (PSPM CDD, CTR aggregation, scam "ACT" log, semi-annual return, SHOTS trade-ins)

**Industry:**
Precious stones and precious metals dealers: family jewellers and goldsmiths, gold bullion shops, pre-owned luxury watch dealers.

**Buyer:**
Owner or "compliance officer" (often a family member or senior counter staff) at registered dealers with 1-5 outlets.

**Trigger / Why now:**
- 13 Feb 2026: revised Guidelines for Regulated Dealers (v5.0) on AML/CFT/CPF take effect.
- 2 Apr 2026: the Registrar issues the Code of Practice on scam-related money laundering. Counter staff must follow the "ACT" framework: ask the customer why they are buying, check customer information, and respond to red flags. It targets gold, jewellery and luxury-watch purchases made under scammer pressure.
- Enforcement is real. Kim Heng Jewellers was fined S$35,000 because staff sold S$313k of goods, partly paid with scam money, without checks. SPME and its CEO paid S$420,000 in composition sums for failing to do ECDD and ongoing monitoring.

**Current workflow:**
1. At the counter, staff decide whether the sale is above S$20,000 in cash, or whether the customer's same-day purchases add up to that. MinLaw expects dealers to "consider having monitoring tools or procedures to identify and consolidate all cash transactions".
2. If CDD is triggered, they photocopy the NRIC or passport, fill a CDD form (MinLaw provides templates, including Mandarin versions), screen names against sanctions lists, and file the paper.
3. A CTR is filed with STRO within the deadline. STRs are filed when staff suspect something.
4. When a customer trades in gold or a watch, the purchase is also a second-hand transaction: it must be recorded the same day in police SHOTS, and serial numbers screened.
5. Every six months, transaction totals are compiled from the POS or books and submitted on myPal within 30 days (periods end 30 Jun and 31 Dec).
6. From April 2026, staff should record the scam intervention ("ACT") questions and the outcome for at-risk purchases (how much must be recorded is unverified).

**Pain:**
Criminal liability for the business and staff. MinLaw inspections look for risk assessments, CDD records and ongoing monitoring. The same customer and transaction are captured on paper, in the POS, in SHOTS and in the semi-annual return. Staff turnover at counters makes training hard. Direct complaints from dealers were not found (unverified).

**Existing solutions:**
- MinLaw's free compliance toolkit (1 Jul 2025 version), forms and guidance papers; the myPal portal.
- Sanctions and screening tools for non-banks: Ingenique Solutions, AlgoCandy (aimed at Singapore DNFBPs), and generic tools such as sanctions.io.
- Jewellery POS systems with gold buy-in logging (e.g. PrismaNote, a European vendor whose Singapore presence is unverified; local jewellery POS resellers, unverified).
- AML consultants and corporate-services firms; SJA briefings; guides such as Mintcover's PSPM registration guide.

**The gap:**
No product was found that fits a small jeweller's counter. The missing piece is one tablet flow that does all of these:
- capture the customer once;
- add up same-day cash automatically against S$20k;
- prompt the ACT scam questions;
- prepare the CTR and the SHOTS record for trade-ins;
- produce the semi-annual return figures and an inspection-ready file.

Screening vendors stop at name checks. POS systems stop at the sale.

**Offline evidence:**
MinLaw publishes CDD forms on paper, including Mandarin versions. MinLaw's own case study says SJA was its partner in onboarding the sector. The first prosecution concerned counter staff who didn't do checks, not missing software. Dealers cluster in physical malls (People's Park Complex, Chinatown, Little India), and no review-site listings for "PSMD compliance software" were found.

**Offline channel:**
- Singapore Jewellers Association (about 230 members; it runs MinLaw briefings and received a MinLaw "Star Partner" award).
- Walk-in visits to clustered jewellery malls.
- Phone or WhatsApp outreach from MinLaw's public List of Registered Dealers.
- Referrals from accountants and corporate-secretarial firms who already do registration paperwork.

**Market count:**
1,475 dealer applications covering 1,889 outlets as of 15 Sep 2019 (MinLaw press release). A current list was published as of June 2026, but its count is unverified. Not all dealers are small (Class A dealers selling under S$2,000 per item have lighter exposure).

**Possible product:**
A bilingual (English/Mandarin) counter app. Staff enter or scan the customer ID once. The app keeps a cash-aggregation counter per customer per day, runs the ACT scam checklist with a signed record, screens sanctions lists, drafts the CTR and the SHOTS entry, and exports the semi-annual return figures plus an inspection pack.

**MVP:**
A tablet form for CDD plus the ACT checklist, with daily cash aggregation and CTR alerts, and a monthly PDF register. No integrations: just CSV export for the semi-annual return and a printable SHOTS data sheet.

**Pricing hypothesis:**
S$49-99 per outlet per month (estimate), or a done-for-you service tier (S$150-300/month, estimate) that includes the semi-annual return and an annual risk assessment. Many owners will pay for a done-for-you service, not for software alone.

**How to find first customers:**
The MinLaw List of Registered Dealers (PDF). SJA events. Walking the jewellery clusters with a Mandarin-speaking partner. Pre-owned watch dealers, who are younger and more digital, as early adopters.

**Willingness to pay:**
Likely for the service and inspection-readiness, weaker for software alone. The usual substitute is "a binder plus a consultant once a year".

**Founder access:**
A non-local founder could build it, but selling needs a local partner, ideally Mandarin-speaking, because buyers are older family businesses reached in person.

**Risks:**
- Small market (about 1,500-1,900 outlets, many with few CTR-size cash sales).
- MinLaw could add forms to myPal.
- SHOTS and myPal have no public API (unverified), so the product prepares data but staff still key it in.
- Screening vendors could add a "jeweller mode".

**Kill condition:**
Interviews show most dealers see fewer than 2 or 3 CDD-trigger events a month and treat ACT as verbal only, with no record expected. Or MinLaw confirms that its free toolkit and forms are enough at inspection.

**Score:** 5/10

**Sources:**
- https://www.allenandgledhill.com/sg/publication/articles/32979/minlaw-issues-code-of-practice-on-anti-money-laundering-measures-for-precious-stones-and-precious-metals-dealers-to-combat-scam-related-money-laundering-cases
- https://acd.mlaw.gov.sg/news/amendments-to-guidelines-13-feb-2026/
- https://acd.mlaw.gov.sg/regulated-dealers/list-of-registered-dealers/
- https://www.mlaw.gov.sg/news/press-releases/commencement-of-pspmd-act1/
- https://www.allenandgledhill.com/sg/publication/articles/22783/minlaw-issues-registrar-notice-on-regulatory-reforms-in-precious-stones-and-precious-metals-dealers-sector
- https://acd.mlaw.gov.sg/news/reporting-requirement-for-regulated-dealers-with-effect-from-1-january-2021/
- https://acd.mlaw.gov.sg/files/compliance_toolkit_for_psmd_20250701.pdf
- https://acd.mlaw.gov.sg/files/FD.pdf
- https://www.police.gov.sg/advisories/commercial-crimes/suspicious-transaction-reporting-office/cash-transaction-reporting
- https://singaporelawwatch.sg/Headlines/store-fined-35k-after-its-workers-sold-jewellery-to-customers-who-paid-with-scam-proceeds
- https://acd.mlaw.gov.sg/news/enforcement/mlaw-imposes-composition-sum-on-spme-and-its-ceo
- https://insight.mlaw.gov.sg/articles/our-people/2021-06-09-the-precious-battle-against-money-laundering-and-terrorism-financing/
- https://www.sja.org.sg/?p=590
- https://www.trustradius.com/products/algocandy

### Opportunity: SHOTS Bridge for Second-hand Phone, Gold and Electronics Buyers

**Industry:**
Licensed second-hand goods dealers (phone and electronics trade-in shops, gold buy-back, pre-owned luxury).

**Buyer:**
Shop owner or manager at small counter shops (Far East Plaza, Sim Lim Square, heartland malls).

**Trigger / Why now:**
There is no new 2026 rule (an amendment was searched for and not found). The trigger is ongoing scam and stolen-goods enforcement. SHOTS now runs on mobile devices, and dealers must screen serial numbers and IMEIs before buying.

**Current workflow:**
1. The customer brings a device. Staff check the IMEI or serial number in SHOTS.
2. Staff record the seller's ID and the transaction in SHOTS on the same day.
3. The same purchase is entered again in the shop's POS or inventory, and again at resale.

**Pain:**
Fines up to S$20,000 or 12 months' jail; police enforcement checks (e.g. 2018 operation). The duplicate entry costs minutes per item. Volume per shop is unverified.

**Existing solutions:**
SHOTS (free, police-run, web and mobile); shop POS and inventory tools; larger buy-back platforms (Carousell, Mister Mobile and others) that have their own systems.

**The gap:**
Capture the ID and item once, then prefill both SHOTS and the POS. This depends on whether SHOTS accepts bulk upload or an API (unverified). If it doesn't, the product saves little.

**Offline evidence:**
Counter trade with walk-in sellers; the police landing page is the only "software" these dealers are told about.

**Offline channel:**
Walking the mall clusters; the police licence list (availability unverified); phone-repair parts suppliers.

**Market count:**
Unverified (SPF licence count not found).

**Possible product:**
A phone app that scans the NRIC or MyInfo and the IMEI once, keeps the shop's purchase register, and prepares SHOTS entries.

**MVP:**
A purchase register with ID scan plus a SHOTS-format copy sheet. Best sold as a module of the PSMD kit for gold and watch buyers.

**Pricing hypothesis:**
S$20-40/month (estimate).

**Willingness to pay:**
Low for software; this is a feature, not a product.

**Founder access:**
Needs a local partner for walk-in sales.

**Risks:**
SHOTS is free and has gone mobile; no API.

**Kill condition:**
No bulk or API path into SHOTS.

**Score:** 3/10

**Sources:**
- https://eservices1.police.gov.sg/phub/eservices/landingpage/secondhand-goods-dealers-transaction-records-system
- https://www.police.gov.sg/Business-E-Services/Submit-Secondhand-Goods-Transaction-Record
- https://sso.agc.gov.sg/SL/SGDA2007-R1?DocDate=20230727
- https://police.gov.sg/Media-Room/News/20181024_arrest_SIX_ARRESTED_IN_TWO_DAY_ENFORCEMENT_A

### Opportunity: Sanitary and Grease-Trap Maintenance Log for Food Premises (via grease-trap contractors)

**Industry:**
Coffee shops, food courts, restaurants; grease-trap cleaning contractors.

**Buyer:**
A grease-trap or sanitary-maintenance contractor (the contractor issues the record and holds the relationship), selling to coffee-shop operators.

**Trigger / Why now:**
No new 2026 trigger was found. PUB does random audits and requires maintenance records on request, plus monthly visual checks.

**Current workflow:**
1. The contractor cleans the grease trap and leaves a paper service chit.
2. The premises keeps a paper log, or doesn't.
3. On a PUB audit, the operator searches for the chits.

**Pain:**
Low. No recurring submission was found; only records on request.

**Existing solutions:**
Paper chits, generic field-service apps, FacilityBot-style facilities tools.

**The gap:**
A digital service record handed from contractor to premises. It is a thin gap.

**Offline evidence:**
Paper service chits; no PUB e-submission.

**Offline channel:**
Grease-trap contractors; coffee-shop operator groups. Named associations were not verified.

**Market count:**
Tens of thousands of food premises (estimate); contractor count unverified.

**Possible product:**
A contractor app that issues a digital service certificate to the premises' log.

**MVP:**
A photo, timestamp and PDF certificate.

**Pricing hypothesis:**
S$30-60 per contractor technician per month (estimate).

**Willingness to pay:**
Low.

**Founder access:**
Possible remotely through contractors, but weak.

**Risks:**
Generic field-service apps; no mandate to submit.

**Kill condition:**
PUB audits are rare or records are not checked.

**Score:** 2/10

**Sources:**
- https://www.pub.gov.sg/Professionals/Requirements/Used-Water/Grease-Trap

## 3. Rejected

- **Household MDW employers:** levy is on GIRO; insurers bundle the S$60k medical cover and the bond; agencies and MOM e-services handle the rest; the buyer is a consumer.
- **Pawnbrokers:** licence conditions already require full computerisation; there are few operators with high capital (S$100k deposit), and they use pawn systems already.
- **Money changers:** about 231 licences (2022); MAS-supervised AML is already targeted by vendors such as Biz4x and by consultants.
- **Massage establishments:** the H2 2026 change is to fit-and-proper and layout rules, with no recurring filing; it sits in a vice-enforcement setting.
- **Halal eateries:** 1,200+ establishments; MUIS process; halal consultants and trainers.
- **Farms:** about 90+ land farms plus sea farms; too few; SFA works with them directly.
- **Pet breeders and boarders:** no new trigger since 2022; small registries.
- **Cat licensing:** consumer, one-off, free portal.
- **Electrical installation licence owners:** the LEW renews on the owner's behalf on ELISE; the LEW is the intermediary.
- **Scrap metal dealers:** not screened, because the search budget ran out.

## 4. Method notes

What worked:
- Searching regulator portal names ("SHOTS", "myPal", "List of Registered Dealers", "Registry of Pawnbrokers").
- Law-firm notes (Allen & Gledhill) for 2026 triggers.
- Enforcement searches ("fined", "composition sum").

What didn't work:
- Market counts. Singapore registers are mostly PDFs or portals, and snippets rarely give totals.
- Searches for 2026 amendments to older Acts (SGDA, Massage Establishments Act) returned foreign results.

Overall, Singapore's quiet trades file through state portals, so the remaining gap is counter-side record capture before the filing, not the filing itself. The search tool's usage limit cut the pass at about 28 searches.
