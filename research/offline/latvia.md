# Latvia: offline-industries pass (2026-10-05)

Scope: I used 19 of the 20 allowed WebSearch calls, mostly in Latvian, in extended mode. WebFetch was not used. All evidence comes from search-result summaries of official sources (likumi.lv, vmd.gov.lv, zm.gov.lv, kp.gov.lv, pmlp.gov.lv, csdd.lv, lvportals.lv) and Latvian news. I did not read the primary documents in full. Counts are as reported in those summaries. Anything not confirmed is marked "unverified" or "estimate".

The main finding: Latvia's state has already digitised most of the quiet-industry obligations I screened, and it gives the tools away free. Examples are the "Mednis" hunting app, LZIKIS for fishing catches, LDC for beekeepers and livestock, CSDD for driving schools, the timber e-waybill and VID EDS. So the usual substitute is not paper. It is a free government app. Only one idea reaches a moderate score. The existing country report already covers EDLUS construction time recording, the AML controls of outsourced accountants, APUS waste, e-invoicing and cash registers, and I don't repeat them here.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Employers inviting third-country workers (trucking, construction, agencies, forestry) | NVA opinion before hiring (since 2025). PMLP invitation. Report changes, e.g. end of employment, to PMLP within 5 working days (new Immigration Law in force 15 Sep 2026). Invitation bans for breaches | Done by lawyers, recruitment agencies and in-house staff working through PMLP/NVA paperwork. No vertical tool found | About 2,000 inviting companies and about 23,000 third-country workers in 2025 (tv3.lv). 43 invitation bans by 20 May 2026 (lsm.lv) | **Candidate (Opp. 1)** | Fresh law, enforced bans, a defined buyer pool |
| Hunting collectives | Hunt documentation, bag registration, member lists, licence redistribution | All moved to the free state app "Mednis" (VMD) since 2024–25. Land-lease contracts and club finances are still on paper or Excel | About 850–900 hunting organisations, about 1,400 hunting territories, 20–25k hunters (search summary of LMS/press) | Weak candidate (Opp. 2) | The state app covers the compliance core. Only club admin is left |
| Scrap metal buyers | Licence for buying ferrous and non-ferrous scrap. VVD waste permits | Competition Council market study 2025 | Number of firms has halved in 10 years. TOLMETS group owns about half of the reception sites (kp.gov.lv 2025) | Reject | Consolidated. Big players run their own systems |
| Beekeepers | Report colony counts to LDC on 1 May and 1 Nov | Free LDC portal. The association (strops.lv) helps members | About 2,800 holdings, more than 3,000 beekeepers, 104,279 colonies (LDC via press) | Reject | Twice-a-year filing, free state tool, very low willingness to pay |
| Coastal and inland fishermen | Catch data into LZIKIS before first sale. Licences now issued by municipalities | State e-logbook. Paper is still allowed for inland waters | Small, a few hundred (estimate, unverified) | Reject | The state provides the tool. The market is tiny |
| Forest owners and small sawmills (EUDR) | Due-diligence statement in TRACES, with geolocation (GeoJSON). Large and medium firms from 30 Dec 2026, micro and small from 30 Jun 2027, with simplified duties | VMD is the competent authority. Buyers (LVM, large sawmills) absorb the work | About 140k private forest owners (estimate, unverified) | Reject | Latvia is classed low risk. Simplified duties for micro firms. Local vendors exist (e.g. Vandret-Digital) |
| Timber transport | Timber waybill-invoice | Electronic round-wood certificate since late 2023. Measurement by VMF Latvia | n/a | Reject | Already digitised by the industry |
| Household employers (nannies, housekeepers) | Register as employer with VID within 10 days. Register the worker before work starts. Monthly employer's report by the 17th | VID EDS. Most of this work is informal | Small (unverified) | Reject | Tiny formal market. Free VID tool |
| Chimney sweeps | Inspection report on flue technical condition, check every 5 years (Fire Safety Regulations) | Paper inspection report. LSM reports that the obligation is "mandatory but not controlled" | 67 certified sweeps (LSM, 2017) | Reject | Too few operators and no enforcement |
| Driving schools | Register training groups and lessons in the CSDD register (within 20 minutes of the class starting). E-learning only on CSDD-approved platforms | Already electronic through CSDD | About 100–200 schools (estimate, unverified) | Reject | The CSDD register is the system. Small market |
| Cemetery managers (municipalities and parishes) | Burial registers, plus a public electronic burial and plot-mapping register | Cemety.lv has digitised 534 of about 5,500 cemeteries | About 5,500 cemeteries (Cemety via press) | Reject | Cemety is the incumbent. The buyers are municipalities (procurement) |
| Home food producers | PVD registration, traceability, self-control (HACCP) | Paper self-control files | Not found | Reject | No new 2025–26 trigger. Generic HACCP apps exist |

## 2. Opportunities

### Opportunity: Third-country worker "inviter" compliance register for small trucking and construction firms

**Industry:**
Road haulage and construction SMEs (also recruitment agencies) that employ non-EU workers

**Buyer:**
Owner or office manager (often also the bookkeeper) of a Latvian haulage or construction company with 5–100 foreign workers. Secondary buyer: the outsourced accountant or immigration consultant who does the PMLP paperwork for them.

**Trigger / Why now:**
- Since 2025, employers need an NVA opinion before inviting a foreign worker.
- A new Immigration Law took effect on 15 Sep 2026. It increases employer accountability, limits low-skilled hiring and brings stricter sanctions.
- The inviter must tell PMLP within 5 working days when the grounds for residence change, for example when employment ends.
- PMLP had imposed 43 invitation bans by 20 May 2026, with 30 in force at the end of April 2026.
- A Saeima inquiry committee on immigration was active in 2026.

**Current workflow:**
1. Before inviting, the firm registers a vacancy with NVA and gets an NVA opinion.
2. It submits the invitation to PMLP (state fee EUR 69). The worker applies for a residence permit (EUR 450 for 10-day processing).
3. It tracks each worker's permit expiry, address registration, salary threshold and job role by hand in Excel or by memory.
4. When someone quits, is dismissed, changes role or address, someone has to remember to notify PMLP within 5 working days. Payroll and VID reports are handled separately.
5. When PMLP or the State Labour Inspectorate checks, the firm puts the evidence together from scattered files.

**Pain:**
- A breach can cost the firm its ability to invite any workers at all. For a haulier whose drivers are mostly from third countries, that threatens the business.
- The 5-day deadline is per event and depends on payroll and HR events that the immigration paperwork never sees.
- Rules changed twice in about 18 months (2025 amendments, then the new law in 2026).
- I found no direct operator complaints.

**Existing solutions:**
- Immigration law firms and consultancies (e.g. Cobalt, KPMG Latvia publish guidance) work per case.
- Recruitment and staffing agencies act as the inviter.
- PMLP's own e-services and the NVA vacancy portal are free.
- Payroll and HR software (Jumis, Horizon and others) handles payroll only. I don't know whether any of them has permit-expiry or PMLP-notification logic (unverified).
- Excel.

**Offline evidence:**
- The work is done by the receiving authorities' forms and by advisers.
- I found no Latvian software listing for inviter compliance.
- Firms learn about the rules from LV portāls explainers and law-firm briefings rather than from vendor content.

**Offline channel:**
- The Latvian road hauliers' association (Latvijas Auto, unverified that it would cooperate) and the builders' partnership (latvijasbuvnieki.lv).
- Outsourced accountants who run payroll for these firms.
- Immigration consultants as resellers.
- Phone outreach to inviting companies. Lists can be built from Lursoft-style company data and from firms named in press coverage of bans.

**Market count:**
More than 2,000 companies invited about 23,000 third-country workers in 2025 (tv3.lv, citing official data). Construction and road haulage are the largest groups.

**The gap:**
Nothing links "an HR or payroll event happened" to "PMLP must be told within 5 working days, and here is what to file". Permit expiry, NVA opinion validity and salary-threshold checks per worker are also not tracked in one place. Lawyers handle each case but don't watch the ongoing obligations.

**Possible product:**
A Latvian-language register of foreign workers. For each worker it tracks permit type, expiry, NVA opinion, role, salary and address. It raises deadline alerts for PMLP notifications and renewals, prepares the notification text or form, and keeps an inspection-ready audit log.

**MVP:**
- A spreadsheet import of workers.
- A rules table covering the new law's notification triggers and expiry windows.
- Email and SMS alerts.
- A PDF evidence pack for each worker.
- No integration with PMLP at first.

**Pricing hypothesis:**
EUR 2–4 per foreign worker per month, with a minimum of EUR 30 per month (estimate). An accountant or consultant plan would cost EUR 100–200 per month. Buyers may prefer to pay for a service done for them. A software tool plus a partner immigration consultant is the realistic model.

**How to find first customers:**
Accountants who run payroll for hauliers, the hauliers' and builders' associations, and immigration consultants who would resell it. Founder access: a non-local founder would struggle. The product needs Latvian legal content and a Latvian partner (a lawyer or accountant) for credibility.

**Risks:**
- The market is small (about 2,000 firms, and many have only 1–5 workers).
- PMLP could add notifications to its own portal.
- Law firms or HR suites could add it as a feature.
- Interest in hiring foreign workers may fall as the policy tightens.
- I don't know the exact penalties for a late notification (unverified).

**Kill condition:**
Interviews show the firms already outsource all of this to an agency or lawyer on a fixed fee. Or PMLP's portal already reminds inviters about deadlines. Or fewer than about 300 firms have more than 5 foreign workers.

**Score:** 5/10

**Sources:**
- https://lvportals.lv/skaidrojumi/394430-stajas-speka-jaunais-imigracijas-likums-2026
- https://lvportals.lv/viedokli/394381-jaunais-imigracijas-likums-vel-astonas-izmainas-par-kuram-jazina-arzemniekiem-un-vinu-uzaicinatajiem-2026
- https://www.cobalt.legal/lv/news-cases/jaunais-imigracijas-likums-darba-devejiem-investoriem-terminuzturesanas-atlauju-turetajiem/
- https://www.lsm.lv/raksts/zinas/ekonomika/30.04.2026-sobrid-30-uznemumiem-latvija-parkapumu-del-aizliegts-aicinat-darba-arzemniekus.a645269/
- https://tv3.lv/zinas/latvija/neka-personiga/latvija-pern-registreti-nepilni-23-tukstosi-treso-valstu-stradnieku-kurus-surp-ataicinaja-vairak-neka-2000-uznemumi/
- https://www.apollo.lv/8442657/video-raidijums-visvairak-treso-valstu-stradnieku-latvija-nonak-pec-buvnieku-kravu-parvadataju-un-darba-iekartosanas-agenturu-aicinajumiem
- https://kpmg.com/lv/lv/petijumi-un-publikacijas/2025/03/ieviestas-stingrakas-prasibas-arvalstu-darbaspeka-piesaistisanai-latvija.html
- https://www.pmlp.gov.lv/en/employer-invites-foreigner
- https://pik-imigracija.saeima.lv/wp-content/uploads/2026/04/PR_2026_17_03_PIK.pdf

### Opportunity: Hunting-collective admin (land-lease contracts, dues, meat distribution) alongside "Mednis"

**Industry:**
Hunting collectives (registered associations)

**Buyer:**
Chair or treasurer of a hunting collective. These are mostly older volunteers.

**Trigger / Why now:**
From 1 Apr 2024–25, all game must be registered in the VMD "Mednis" app. Paper bag journals and permit reports to VMD were abolished. Collectives are now used to digital tools, but the app only covers the state's needs. Hunting-territory size, and so licence allocation, depends on lease contracts with many landowners.

**Current workflow:**
1. Keep dozens of hunting-rights lease contracts with private landowners on paper. Track their expiry and rent payments.
2. Collect members' dues and fines, and organise work days, in Excel or a notebook.
3. Share out meat and trophies among members, and distribute wild-boar ASF compensation, by hand.
4. Do compliance in Mednis: registering hunts and bags, and licence redistribution.

**Pain:**
Real but low stakes. If a lease lapses, the territory shrinks and with it the licence allocation. For wild boar, a minimum of 1,000 ha applies. I found no complaints about the admin work.

**Existing solutions:**
- Mednis (free, VMD) for the compliance core.
- The hunters' union LMS and the "medibam.lv" and "medniekiem.lv" communities for templates.
- Forest-owner cooperatives such as Mežsaimnieks, which manage hunting contracts for their members.
- Excel and paper.

**Offline evidence:**
Volunteer-run associations with older members. Leases are signed in person with farmers. The only software is the state app.

**Offline channel:**
Latvian Hunters' Union (LMS) and the hunter-training centre LMAC. Hunting-equipment shops. VMD regional offices. LVM, which leases 930 territories.

**Market count:**
About 850–900 hunting organisations and about 1,400 registered territories (search summary of press and LMS data; unverified).

**The gap:**
Lease-contract and landowner registry with expiry and area totals, plus dues and meat ledgers. Mednis does not do these (as far as the search results show).

**Possible product:**
A simple club-admin web app with map-linked lease registry and member ledger.

**MVP:**
Lease register (landowner, cadastre number, ha, expiry, rent) with expiry alerts and total-area check against the 1,000 ha wild-boar threshold; dues ledger.

**Pricing hypothesis:**
EUR 5–10 per club per month (estimate). Willingness to pay is very low because volunteer treasurers often won't pay at all.

**How to find first customers:**
LMS events, hunting fairs, LMAC courses. Founder access: needs a local hunter-insider.

**Risks:**
VMD extends Mednis to cover leases. The market is tiny. Volunteers resist paying.

**Kill condition:**
Mednis or LVM already holds the lease data, or fewer than 10% of clubs would pay EUR 5 per month.

**Score:** 3/10

**Sources:**
- https://www.vmd.gov.lv/lv/lietotnes-mednis-izmantosana
- https://www.medibam.lv/lietotnes-mednis-pamaciba-atbildiga-persona-un-medibu-sadalas-parvaldiba
- https://www.apollo.lv/7990944/no-1-aprila-stajas-speka-virkne-izmainu-medibu-noteikumos
- https://www.mezsaimnieks.lv/medibu-ligumi/
- https://www.medniekiem.lv/discussion/2586/desc/
- https://www.lms.org.lv/

## 3. Rejected

- **Scrap metal register or software:** the market is consolidated. TOLMETS owns about half of the reception sites, and the number of firms halved in 10 years (Competition Council 2025: https://kp.gov.lv/lv/media/13658/download?attachment=). Licensing rules: https://likumi.lv/ta/id/241854
- **Beekeeper reporting:** free LDC reporting twice a year, about 3,000 beekeepers, and the association already helps (https://www.strops.lv/aktualitates/bisu-saimju-skaita-zinosana-ldc).
- **Fishermen's e-logbook:** the state LZIKIS is mandatory for coastal fishing (https://www.zm.gov.lv/lv/jaunums/piekrastes-paspaterina-zvejnieku-zvejas-datu-registresana-zemkopibas-ministrijas-valsts-informacijas-sistema-latvijas-zivsaimniecibas-integreta-kontroles-un-informacijas-sistema-lzikis).
- **EUDR for forest owners and small sawmills:** Latvia is classed low risk, and micro firms have simplified duties from June 2027. The statement goes into TRACES with VMD support. Buyers absorb the work, and local vendors exist (https://www.zm.gov.lv/lv/es-atmezosanas-regula-eudr, https://vandretdigital.eu/par-eudr).
- **Timber waybills:** already electronic through the industry system (https://db.lv/zinas/apalkoksne-parvietojas-ar-elektronisko-dokumentu).
- **Household employers:** VID EDS is free, most of the work is informal, and the formal market is tiny (https://www.vid.gov.lv/lv/darba-nemeju-un-darba-deveju-registracija).
- **Chimney sweeps:** 67 certified sweeps and no enforcement (https://www.lsm.lv/raksts/zinas/latvija/skurstenu-tirisana-ir-obligata-bet-kontroleta-netiek.a204540/).
- **Driving schools:** the CSDD register is the system of record (https://www.csdd.lv/jaunumi/dalu-teorijas-apmacibas-autoskolas-vares-apgut-e-vide).
- **Cemeteries:** Cemety.lv is the incumbent, and the buyers are municipalities (https://www.apollo.lv/7061539/latvija-digitalizets-jau-miljons-apbedijuma-vietu).
- **Home food producers:** no 2025–26 trigger and generic HACCP tools exist.

## 4. Method notes

- **What worked:** Latvian-language queries naming the regulator (VMD, LDC, PMLP, CSDD, ZM) together with the obligation. The best sources were LV portāls explainers and LSM news. The regulator-first approach quickly showed that most quiet sectors already have a free state tool.
- **What didn't work:** queries asking for counts of operators in registers. Exact numbers rarely appeared in the summaries. Searches for the "paper register sold by a stationer" pattern found nothing either: in Latvia the state took over the register.
- **Lesson:** in small, highly digitised EU states, the gap moves from "paper vs software" to "event in system A must trigger filing in state system B". The immigration case is the clearest example.

Research model: Opus
