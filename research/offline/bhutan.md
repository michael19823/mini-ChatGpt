# Bhutan: offline-industries pass

**Searches used:** 8 of 8 (reduced budget for a small market). WebFetch not used.
**Bottom line:** Bhutan has real "quiet" regulated trades: meat shops, taxis, foreign-worker recruitment agents, cordyceps collectors, pharmacies and micro traders. But each one is tiny in absolute numbers. In most of them the government has already built the digital channel (IBLS, the Foreign Workers Management System, the RSTA permit system) or deliberately removed the obligation (micro trade is de-licensed). No quiet industry reaches the build threshold. The two "strongest" below score 2/10 and are recorded so the cross-country ranking can see that they were checked. A non-local solo founder cannot realistically sell in any of these segments without a Bhutanese partner.

---

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Foreign worker recruitment agents (FWRAs) | Recruit, renew work permits and add foreign workers for construction and other employers; licensed by the labour ministry | The Foreign Workers Management System is new: MoICE was still training agents on it in Sarpang in Mar 2026 | Unverified nationally. 8 FWRAs in Gelephu alone (BBS, Mar 2026) | Weak (Opp 1) | The government portal is the substitute and is being rolled out right now. The agent count is likely in the tens |
| Households employing foreign domestic workers | Contract signed at the ROICE point of entry, annual work-permit renewal, 3-year term | Counter process at regional MoICE offices | Unverified, likely small (FDWs are only allowed for childcare, elderly, sick and disabled care) | Reject | Too few employers, once-a-year task, and the ministry handles it at the counter |
| Meat shops / butchers / abattoirs | Livestock Bill 2025: meat shops only in designated zones, abattoir categorisation and technical clearance. BAFRA movement permits for imported meat at border gates | Paper movement permits issued by BAFRA inspectors at entry gates. The Bill was still in re-deliberation in Jun 2026 | Unverified (probably a few hundred shops) | Reject for now | Rules not final. Religious sensitivity around slaughter in Bhutan makes it a poor target for an outside vendor |
| Livestock / meat importers | BAFRA inspection and movement permit per consignment at the border | Physical inspection at the gate, permit issued on the spot | Unverified | Reject | The work is inspection, not paperwork. The permit is issued by the inspector |
| Taxi operators | Taxi Operating Permit (TOP) before purchase, region marked on the body, fares fixed by RSTA (Regs 2021 s.255) | Registration handled by RSTA/BCTA. Fares set by public notification | Unverified (Thimphu and Phuentsholing are capped) | Reject | No recurring filing. The fare is fixed by the regulator, so there is nothing to compute |
| Cordyceps collectors | Collection permit, mandatory declaration at the auction yard, royalty Nu 8,400/kg | Physical auction yards. Under-declaration is reported to dodge royalty | About 3,000+ permits a year, but only about 1,300–2,300 sellers attend (Bhutanese/BBS) | Reject | Highland villagers selling once a year. Royalty evasion is the "pain", and nobody pays software to declare more |
| Pharmacies / drug vendors (including traditional pharmacies) | Bhutan Medicines Rules and Regulation 2025 set the records and registers licensees must keep, plus regulatory inspection (Ch. XII) | Register keeping set by the rules. BFDA suspended Yuthok Traditional Pharmacy after 4 inspection rounds (Jan 2026) | Unverified (estimate: low hundreds of licensed outlets) | Weak (Opp 2) | Real new rules and real enforcement, but a tiny buyer base and the Indian pharmacy POS tools are the substitute |
| Micro traders / street vendors | Micro trade (turnover under Nu 1M) is de-licensed. Street-vending rules with designated locations are being discussed | Thromde / MoICE / BCCI discussions, no system yet | Unverified | Reject | No obligation to file and no money |
| Scrap dealers / second-hand dealers | No Bhutan-specific register found | The search returned only UK results | Unknown | Reject (no evidence) | No regulator trace found within the budget |
| Tour operators (already in the country report) | Licensing on IBLS, SDF on the Tourism Services Portal | Already online | About 2,800 registered | Out of scope | Covered in research/countries/bhutan.md |

Country-specific groups added, as the instructions require: FWRAs, cordyceps collectors and the BAFRA meat-movement permits.

---

## 2. Strongest opportunities (both below threshold)

### Opportunity: Work-permit renewal desk for foreign-worker recruitment agents

**Industry:**
Foreign-worker recruitment (mostly Indian labour for construction and hydropower)

**Buyer:**
Owners of licensed Foreign Workers Recruitment Agents, and the construction contractors who use them

**Trigger / Why now:**
In 2026 MoICE launched the Foreign Workers Management System. Agents now apply for recruitment, renew work permits and request additional workers online. Agents were still being trained on it in Mar 2026.

**Current workflow:**
1. The agent collects each worker's documents (ID/voter card, medical, police clearance) on paper from the contractor or the worker.
2. The agent types them into the new FWMS (previously paper at the regional office).
3. The agent tracks permit expiry dates by hand and re-applies each year.
4. The agent coordinates entry and exit at the border and the regional office.

**Pain:**
Unverified. Expiry tracking across many workers per contractor is plausible pain, but I found no complaints. NC reports on illegal immigration suggest permit lapses matter to enforcement.

**Existing solutions:**
- The Foreign Workers Management System (government, free)
- Excel / paper files kept by each agent
- Generic HR tools

**Offline evidence:**
Agents had to be trained in person on the portal (BBS, Mar 2026). Before that, permits went through counter applications at regional offices.

**Offline channel:**
The MoICE training sessions and regional offices (Gelephu, Phuentsholing, Sarpang). The agent list held by the Department of Labour. Calling agents directly from that list.

**Market count:**
Unverified. 8 agents in Gelephu (BBS). National count is estimated at tens, not hundreds.

**The gap:**
FWMS may not have bulk expiry alerts or document reuse (unverified).

**Possible product:**
A worker roster with document vault and expiry alerts that pre-fills FWMS renewal fields.

**MVP:**
Spreadsheet import plus a WhatsApp/SMS expiry reminder sent 60 and 30 days before expiry.

**Pricing hypothesis:**
Nu 1,000–2,000 per month per agent (about US$12–24). The buyer would more likely pay for a done-for-you service than for software.

**How to find first customers:**
The Department of Labour FWRA list. Agents attending MoICE training.

**Risks:**
- The government portal adds reminders
- A tiny market
- A local partner is needed
- No FWMS API

**Kill condition:**
Either of these kills it:
- FWMS already sends expiry reminders
- Fewer than 50 active agents nationally

**Founder access:**
Needs a local partner. Not sellable by a non-local solo founder.

**Score:** 2/10

**Sources:**
- https://www.bbs.bt/?p=180092 (FWMS training for agents, 8 FWRAs in Gelephu, Mar 2026)
- https://sep.nlcs.gov.bt/public/sop/08102020_3uv1430m0.pdf (labour SOP)
- https://www.doi.gov.bt/wp-content/uploads/2021/05/Issuance-and-Renewal-of-Work-Permit.pdf
- https://thebhutanese.bt/nc-highlights-illegal-immigration-into-bhutan/

### Opportunity: Register-keeping for pharmacies under the Medicines Rules 2025

**Industry:**
Retail and traditional pharmacies

**Buyer:**
Licensed pharmacy / drug-vendor owner (the competent person named on the licence)

**Trigger / Why now:**
The Bhutan Food and Drug Authority issued the Bhutan Medicines Rules and Regulation 2025, published by OAG in Jul 2026. The rules prescribe the records and registers licensees must keep, and Chapter XII covers inspection. Enforcement is visible: Yuthok Traditional Pharmacy was suspended for 3 months in Jan 2026 after violations in 4 inspection rounds.

**Current workflow:**
1. The pharmacy keeps paper registers (purchases, sales of controlled or prescription items, unregistered-product checks) as the rules prescribe.
2. It checks products against the BFDA registered-product list by hand.
3. It presents the registers to the inspector during visits.

**Pain:**
Suspension risk is real (Yuthok case). How long the registers take to maintain is unverified.

**Existing solutions:**
- Paper registers
- Indian pharmacy POS software (Marg ERP-type tools; not verified in Bhutan)
- The approved GST invoicing vendors' POS tools

**Offline evidence:**
Registers are physical and inspections are in person. I found no Bhutan pharmacy software listings within the budget.

**Offline channel:**
Joining BFDA inspection-awareness sessions, distributors and wholesalers in Phuentsholing who supply every pharmacy, and calling pharmacies from the licence list.

**Market count:**
Unverified. Estimated in the low hundreds of licensed outlets.

**The gap:**
Automatically checking each sale or purchase against the BFDA registered-product list, so unregistered products never get sold. This is the exact violation that suspended Yuthok.

**Possible product:**
A POS add-on that blocks or flags items not on the BFDA register and prints the prescribed registers.

**MVP:**
Barcode/item list matched against the BFDA register, plus a printable register in the format the rules prescribe.

**Pricing hypothesis:**
About US$15–30 per month.

**How to find first customers:**
The BFDA licensee list and the distributors.

**Risks:**
- A tiny market
- The BFDA product-register data may not be machine-readable
- Indian POS vendors can add this cheaply

**Kill condition:**
Either of these kills it:
- Fewer than 150 licensed outlets
- The BFDA register is not available as data

**Founder access:**
Needs a local partner.

**Score:** 2/10

**Sources:**
- https://oag.gov.bt/wp-content/uploads/2026/07/Bhutan-Medicine-Rules-and-Regulation-2025.pdf
- https://www.bbs.bt/?p=235538 (Yuthok Traditional Pharmacy suspension, Jan 2026)
- https://journals.tdl.org/regsci/index.php/regsci/article/view/91

---

## 3. Rejected

- **Meat shops / abattoirs:** the Livestock Bill 2025 was still in re-deliberation in Jun 2026. Slaughter is religiously sensitive, the shop count is small, and the BAFRA permits are issued by inspectors. Sources: https://thebhutanese.bt/national-assembly-accepts-ncs-changes-in-livestock-bill-of-bhutan-2025/, https://asianews.network/?p=279462, https://thebhutanese.bt/despite-bafra-assurances-meat-vendors-and-restaurants-sell-and-serve-rotting-meat/
- **Taxi operators:** RSTA handles the permit, fares are fixed by public notification, and there is no recurring filing. Sources: https://thebhutanese.bt/rsta-to-top-the-number-of-taxis-using-top/, https://bcta.gov.bt/issue-of-taxi-operating-permit/, https://thebhutanese.bt/taxi-drivers-defend-charging-higher-rates-at-night-but-rsta-regulations-of-2021-prohibit-it/
- **Cordyceps collectors:** a once-a-year auction for village sellers, and the incentive runs against declaring. Sources: https://thebhutanese.bt/cordyceps-prices-hits-all-time-high-but-yield-is-low-in-few-places/, https://www.bbs.bt/?p=52791
- **Foreign domestic-worker employers:** an annual counter process for a small eligible group. Source: https://thebhutanese.bt/foreign-domestic-workers-now-allowed-for-the-elderly-sick-and-disabled-too/
- **Micro traders / street vendors:** micro trade is de-licensed and the street-vending rules are not yet written. Sources: https://leap.unep.org/en/countries/bt/national-legislation/bhutan-micro-trade-regulation-2006, https://thebhutanese.bt/moice-minister-says-street-vendors-will-be-allowed-but-with-rules-and-specified-locations/
- **Scrap / second-hand dealers:** no Bhutanese regulator trace found.

## 4. Method notes

- What worked: Bhutanese news sites (thebhutanese.bt, bbs.bt, kuenselonline) are the best regulator proxy. They report new bills, training sessions on new portals, and enforcement such as the BFDA suspension. OAG's legal-document uploads (oag.gov.bt) hold the new rules.
- What didn't work: generic "<industry> licence Bhutan" queries for scrap dealers drifted to UK councils. Official registers with counts are rarely indexed, so most counts are unverified.
- Structural finding: the government is digitising quiet sectors itself (IBLS, FWMS, the Tourism Services Portal), which leaves little gap for a third party.
