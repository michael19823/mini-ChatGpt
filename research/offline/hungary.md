# Hungary: offline-industries pass

Researched 2026-10-05. I made **40 WebSearch calls** (the full budget). Two were refused because of a usage limit during a first attempt; the run then resumed. All queries were in Hungarian. WebFetch was not used, so every finding comes from search-result snippets of the official pages and PDFs they cite. Anything I could not confirm is marked *unverified* or *estimate*.

Context from the existing country report (`research/countries/hungary.md`): Hungary usually ships its **own free state portal**, and the same is true for most quiet industries here:

- NAV ONYA: online forms for metal trading and casual-work registration;
- NAV 185 phone line: casual-work registration;
- NÉBIH WebENAR and the NÉBIH API: livestock;
- NÉBIH EUTR-FAKIR: timber.

The surviving gaps are where a **paper or per-site record-keeping layer** still sits in front of those portals, or where one job must reach **several receiving bodies**. Every buyer, form and portal is Hungarian-only. **A non-local solo founder could not realistically sell any of these without a Hungarian-speaking partner.**

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| **Scrap-metal dealers (fémkereskedők)** | NAV metal-trading licence (Act CXL of 2013, Gov. Decree 443/2013). **Daily** NAV_F02 report of metal received and dispatched, monthly stock close, separate daily/monthly records for MOHU concession waste since 1 Jul 2023. Record-keeping software must be **NAV-authorised** (443/2013 §10–12) | Forms moved from desktop ÁNYK to online ONYA only in Jan 2026. Trade press in 2023 reported that IT admin time had "grown tenfold" under MOHU. NAV raids find missing daily reports and incomplete stock records | 619 licensees with 716 sites at end-2012 (Parliament info note 2013; dated). NAV publishes a current licensee list | **Opportunity (5/10)** | Daily, mandatory, two regimes (NAV and MOHU concession), M2M API exists. But it is a small market with authorised incumbents, and the MOHU regime is under government review |
| **Firewood / timber traders (EUTR chain)** | Registration in the NÉBIH EUTR register; a **printed, strict-numbered szállítójegy** (delivery note) for each shipment; electronic reporting of when each pad is started and finished, plus stock reports in EUTR-FAKIR; per-site traceability records kept 5 years. EUDR replaces EUTR on 30 Dec 2026 | NÉBIH's own guide says firewood traders "rely on existing paper documents and accounting records" and avoid separate traceability records because they fear the complexity. No Hungarian yard software found | ~7,100 registered chain participants in 2020 (NÉBIH via Adózóna) | **Opportunity (4/10)** | Large count, per-shipment paper, real fines. But margins are thin, the state portal is free, and EUDR exempts downstream traders from due-diligence statements (DDS) |
| **Migratory beekeepers** | Annual colony registration in TIR-ENAR by 15 Oct. **Within 72 h of moving hives, a notice to the notary (jegyző) of each destination municipality**, by registered letter or in person, with a vet certificate no older than 7 days | Municipal web pages publish paper forms and "send by registered post" instructions (Szentlőrinc, Tiszaföldvár, Kaposvár, Baracska) | ~27,000 beekeepers, ~1.5M colonies (NÉBIH register, via Adózóna). Migratory share unknown | **Weak opportunity (3/10)** | A real "one job, many receiving authorities" pattern across ~3,000 municipalities, but willingness to pay is very low and filing is free |
| Contract distilleries (bérfőzdék / pálinka) | Excise tax warehouse. Contract-distilling log, with NAV_J22 log data filed electronically on fixed dates (Apr 20 / May 20 appear) | No Hungarian distillery software found; an international product (NSC) costs €2,500 | NAV action reached "over 900 distilleries" (Adózóna) | Unproven lead | Not enough evidence on how the log is kept or what the pain is. Worth one more pass |
| Septic / sludge haulers (NKSZ public service) | Monthly report to the regional disaster-management (katasztrófavédelem) office by the 5th: volumes, properties, population, incidents | PDF decisions per municipality | Unknown | Reject | One receiving body, a monopoly appointed per municipality, monthly aggregate only. Little to automate |
| Cattle / sheep keepers (ENAR) | Movement and event notices; paper marhalevél (cattle passport) with an arrival slip | WebENAR/WebTER web interface plus NÉBIH API for farm software | Unknown | Reject | State web tool and API, with farm software already connected |
| Seasonal farm labour (EFO) | Register each casual worker with NAV before work starts. From 2026: up to 210 days of seasonal work, with higher contributions above 120 days | Can be done by phone on 185, in ONYA, and tracked in the NAV Mobile app | Unknown | Reject | Free, simple state channels. The new 120/210-day rule is a minor counting feature for payroll tools |
| Precious-metal traders, pawn/gold buyers | Registration with the Budapest Government Office (assay office); declaration of whether they accept cash of 300k HUF or more; annual turnover report by 31 May | Official register | Unknown | Reject | Annual only, so the frequency is too low |
| Household employers | Simplified registration with NAV (not searched) | — | — | Reject (desk, unverified) | Same EFO channels; simple |
| Chimney sweeps | Household sweeping is largely a state service (not searched) | — | — | Reject (desk, unverified) | No SME buyer |
| Hunting, game dealers, well drillers, tattoo studios | — | Not searched (budget) | — | Unscreened | — |

## 2. Strongest opportunities

### Opportunity: NAV and MOHU dual-regime daily ledger for scrap-metal yards

**Industry:**
Scrap and non-ferrous metal trading (fémkereskedelem)

**Buyer:**
Owner or office manager of a licensed scrap yard, especially one that is also a MOHU "koncesszori" (concession) metal trader and must keep two separate sets of books.

**Trigger / Why now:**
- **1 Jul 2023:** waste containing licensable metal from households and public collection ("concession waste") may only be taken in by MOHU subcontractors. Dealers need a MOHU subcontract, a listing in the concession register and a separate NAV concession metal-trading licence. The concession activity must be kept as a quasi-separate site, with its own daily and monthly records.
- **Jan 2026:** all NAV metal-trading forms moved from desktop ÁNYK to online ONYA, and NAV promotes its M2M machine interface for "those who generate forms in bulk with their own software".
- **Jun 2026:** the new government ordered a review of the MOHU concession (report due 1 Sep 2026). This is both a trigger and a risk.

**Current workflow:**
1. The yard weighs each delivery and records the seller's ID and the material's FAJ (material-type) code in a NAV-authorised record program or by hand.
2. Each day it files NAV_F02, the daily report of licensable material received and dispatched (NAV_F04 for "sensitive" FAJ codes; NAV_F06 for other notices).
3. It keeps a separate ledger for MOHU concession waste and reports to NAV under the concession licence number.
4. It closes the stock records monthly.
5. On a NAV raid, it shows the stock records.

**Pain:**
- Trade-association statements in 2023 said IT admin time grew **tenfold**, reports often failed to go through, and MOHU contacts could not answer questions (Telex, 14 Jul 2023).
- NAV raids find missing daily reports and incomplete stock records; fines can reach "several million HUF".
- NAV had to publish guidance on mismatched licence numbers in concession-trader daily reports.
- Insolvencies in the waste sector rose from about 20 a year (2019–22) to 55 in 2023 and 42 in 2024.

**Existing solutions:**
- NAV ONYA: free manual web forms (since Jan 2026).
- VasLap program (vaslap.hu): an established Hungarian metal-trading record program with a published changelog. Price not found.
- femnyilvantarto.hu: a metal-ledger product. Price not found.
- General ERP and weighbridge software, and bookkeepers.

**Offline evidence:**
- A mandatory NAV software-authorisation regime, not app-store distribution.
- The two incumbent vendors are found only through small Joomla-style sites.
- The forms were desktop ÁNYK until 2026.
- Buyers are cash yards that are raided by customs officers.

**Offline channel:**
- Call yards from the NAV public licensee list ("Engedélyesek frissített listája").
- Weighbridge installers and servicers.
- The metal traders' association that protested at MOL in 2023.
- MOHU regional coordinators.

**Market count:**
619 licensed traders and 716 sites at end-2012 (Parliament library info note, 2013). The current count can be read from the NAV licensee list; not retrieved.

**The gap:**
- Incumbents were built for the single NAV regime.
- Whether they handle the **NAV-plus-MOHU split ledger**, M2M auto-submission after the ONYA move, and FAJ-code exception handling is *unverified*. That is the interview question.
- Nobody appears to sell weighbridge capture → automatic daily F02 → reconciled monthly close as one cloud flow.

**Possible product:**
A cloud ledger that captures each weighing (manual entry or a scale export) and submits the daily NAV_F02 through M2M. It keeps concession and non-concession stock separate and produces the monthly close and an inspection pack.

**MVP:**
Web form for intake (seller, FAJ code, kg) → daily F02 XML plus M2M submit → monthly close. Obtaining NAV program authorisation is a prerequisite.

**Pricing hypothesis:**
15,000–30,000 HUF/month per site (estimate, about €40–80). At roughly 700 sites that gives a ceiling of about €0.5M ARR; realistically a lifestyle business.

**How to find first customers:**
NAV licensee list → phone and site visits; weighbridge service companies.

**Risks:**
- NAV software authorisation (time and uncertainty).
- A small market.
- The two incumbents may already cover MOHU.
- The MOHU concession may be restructured after the review.
- Cash-business owners may resist paying.

**Kill condition:**
VasLap or femnyilvantarto already does M2M plus split concession ledgers for under 10k HUF/month, or NAV authorisation takes over 6 months, or the government ends the concession split.

**Score:** 5/10 (pain 7, frequency 9, mandatory 9, fragmentation 4, competition 4, gap 5, buyer access 8, willingness to pay 5, MVP 5, distribution 7). Willingness to pay: buyers already pay for authorised software, so they would pay for software, not only for a service. Founder access: needs a Hungarian speaker.

**Sources:**
- https://nav.gov.hu/ugyfeliranytu/valaszol-a-nav/femkereskedelem1
- https://nav.gov.hu/vam/femkereskedelem/hirlevelek/A_femkereskedelmi_szabalyok_valtozasa
- https://nav.gov.hu/vam/femkereskedelem/hirlevelek/A_koncesszori_femkereskedo_napi_adatszolgaltatasa
- https://kormanyhivatalok.hu/system/files/dokumentum/miniszterelnokseg/2024-11/202411_femkereskedelmi_szabalyok_kerdesek_valaszok_em_nav.pdf
- https://nav.gov.hu/sajtoszoba/hirek/Femkereskedelem_januartol_az_osszes_nyomtatvany_az_ONYA-ban
- https://www.kisalfold.hu/helyi-gazdasag/2025/11/a-femkereskedelmi-nyomtatvany-januartol-online-is-elerheto-a-nav-nal
- https://nav.gov.hu/nyomtatvanyok/letoltesek/nyomtatvanykitolto_programok/nyomtatvanykitolto_programok_nav/nav_f02
- https://nav.gov.hu/kozadat/egyedi_kozzeteteli_lista/16_Femkereskedok
- https://net.jogtar.hu/jogszabaly?docid=a1300443.kor
- http://www.vaslap.hu/ ; https://femnyilvantarto.hu/?cat=5
- https://telex.hu/gazdasag/2023/07/14/elindult-femhulladek-autoroncsok-gyujtesenek-uj-rendszere-docog-informatika-hulladek-mol-mohu
- https://telex.hu/g7/adat/2025/03/16/szaznal-is-tobb-hulladekos-vallalkozas-kerult-sullyesztobe-a-mohu-megjelenese-ota
- https://nav.gov.hu/sajtoszoba/hirek/Szemfenyveszto_femkereskedo
- https://konyvtar.parlament.hu/documents/10181/59569/Infojegyzet_2013_14_femkereskedelem.pdf/54b1a700-2ef5-44b6-9989-bff41f540215
- https://www.economx.hu/magyar-gazdasag/2026/06/09/mohu-mol-magyar-peter-hulladekgazdalkodas-magyar-kozlony/
- https://www.vg.hu/vilaggazdasag-magyar-gazdasag/2026/06/mohu-koncesszio-hulladekkoncesszio-felulvizgalat

### Opportunity: Yard-stock and delivery-note ledger for small firewood traders (EUTR to EUDR)

**Industry:**
Firewood and timber trading (EUTR "faanyag-kereskedelmi lánc", supervised by NÉBIH)

**Buyer:**
Owner-operators of firewood yards and small timber traders, often with several storage sites.

**Trigger / Why now:**
- EUTR is repealed on **30 Dec 2026** and replaced by EUDR. Micro and small firms already under EUTR start on that date rather than June 2027.
- Annual autumn NÉBIH inspection campaigns on firewood.
- Only registered traders may advertise firewood.

**Current workflow:**
1. The trader buys printed strict-numbered szállítójegy pads; NÉBIH has announced that only the new type is valid.
2. The trader reports electronically in EUTR-FAKIR when each pad is started and finished.
3. The trader fills one note per shipment by hand.
4. The trader keeps purchase, sale and stock records **per site** and files stock reports in FAKIR.
5. The trader keeps everything for 5 years for inspectors, who presume illegal origin where stock cannot be traced.

**Pain:**
- In one period, 36 cases of firewood moved without a note drew 3.75M HUF in forest-protection fines, and 6 traders were struck from the register.
- Ad screening removed 649 illegal ads and produced 44.75M HUF in fines; 427 proceedings were opened.
- NÉBIH's own guide says firewood traders avoid separate traceability records "for fear of complexity".

**Existing solutions:**
- NÉBIH EUTR-FAKIR: free; handles registration, pad-usage reporting and stock reporting.
- Printed szállítójegy pads.
- Excel and bookkeepers.
- EU EUTR/EUDR SaaS (e.g., Coolset), aimed at importers, not yards.

**Offline evidence:**
Strict-numbered paper forms, NÉBIH guidance aimed at traders who keep no records, and no Hungarian yard software found in searches.

**Offline channel:**
- Call traders from the NÉBIH EUTR register; firewood advertisers.
- Forestry associations: the timber industry federation FAGOSZ publishes EUTR training material on fataj.hu, and OEE, the forestry association, posts NÉBIH EUTR news.
- Printers that sell szállítójegy pads (unverified).

**Market count:**
About 7,100 registered EUTR chain participants in 2020 (NÉBIH, via Adózóna). This figure includes forest managers and processors as well as traders.

**The gap:**
Per-site stock balance linking incoming and outgoing notes to FAKIR stock reports, kept ready for an inspector. FAKIR collects the reports but does not run the yard's daily ledger (*inference*).

**Possible product:**
A phone app in which the trader photographs or keys each szállítójegy. It keeps a running per-site stock balance and prepares the FAKIR stock report and an inspection pack.

**MVP:**
Note entry → per-site stock → export in the FAKIR format.

**Pricing hypothesis:**
3,000–6,000 HUF/month (estimate). Many buyers will want their bookkeeper to do it instead.

**How to find first customers:**
NÉBIH register, firewood ads in autumn, FAGOSZ and OEE events.

**Risks:**
- The paper note stays legally mandatory.
- EUDR simplification removes DDS duties for downstream traders, which weakens the why-now.
- NÉBIH could add the ledger to FAKIR.
- Very low margins and older owners.

**Kill condition:**
NÉBIH launches an electronic szállítójegy with automatic stock in FAKIR, or interviews show traders accept a warning rather than pay.

**Score:** 4/10 (pain 5, frequency 8, mandatory 8, fragmentation 2, competition 6, gap 4, buyer access 7, willingness to pay 2, MVP 7, distribution 5). Willingness to pay: these buyers would more likely pay a bookkeeper or for a done-for-you service than for SaaS. Founder access: needs a local.

**Sources:**
- https://portal.nebih.gov.hu/documents/10182/2114639024/Szallitojegy+hasznalati+kotelezettseg.pdf
- https://portal.nebih.gov.hu/documents/10182/1277079/EUTR+Ugyfel+Felhasznaloi+Kezikonyv.pdf
- https://portal.nebih.gov.hu/-/felhivas-jovore-mar-csak-az-uj-tipusu-szallitojegyek-hasznalhatoak
- https://portal.nebih.gov.hu/documents/10182/21442/10_05_Faanyag+nyomonk%C3%B6vet%C3%A9s%C3%A9hez+sz%C3%BCks%C3%A9ges+nyilv%C3%A1ntart%C3%A1sok+alapvet%C5%91+elemei/e8a64be3-d0ed-411a-84a8-4eb3887d1970
- https://adozona.hu/altalanos/Nebih_tuzifa_csalo_balesetbunugyrss_birsag_UDUU71
- https://portal.nebih.gov.hu/documents/10182/323140/09.30_N%C3%89BIH+K%C3%B6zlem%C3%A9ny_Fokozottan+ellen%C5%91rzi+a+t%C5%B1zifa+keresked%C5%91ket+a+N%C3%89BIH.docx/02bb1b0e-d255-4b70-bb5c-32ff2846386b
- https://www.oee.hu/hirek/agazati-szakmai/uj-bejelentes-eutr-rendszer
- https://fataj.hu/wp-content/uploads/2024/04/1_EUTR_fagosz_2024_final_.pdf
- https://adozona.hu/altalanos/Nebih_erdoirtas_unios_rendelet_EUTR_EUDR_me_Y9877X
- https://erp-recycling.org/news-and-events/2026/02/eu-deforestation-regulation-revision-and-key-changes-to-apply-in-december-2026/

### Opportunity: Hive-move notice router for migratory beekeepers

**Industry:**
Beekeeping (migratory pollination and honey flows)

**Buyer:**
Migratory beekeepers, often family operations moving hives several times a season.

**Trigger / Why now:**
No new rule. The workflow is a standing obligation: the TIR-ENAR colony registration deadline was 15 Oct 2026 this year, and every hive move needs a notice within 72 hours to each destination municipality.

**Current workflow:**
1. The beekeeper gets a vet certificate valid for 7 days.
2. The beekeeper moves the hives.
3. Within 72 h, they fill the destination municipality's own form and send it by **registered letter** or deliver it in person to the jegyző.
4. They repeat this for every destination municipality.
5. Separately, they register colonies once a year in TIR-ENAR.

**Pain:**
- Per-move paperwork to a different municipality each time, under a 72-hour deadline.
- Forms vary by municipality.
- Movement is restricted where an area is under quarantine (e.g., American foulbrood protection zones that municipalities publish).
- No fine data found.

**Existing solutions:**
Municipal paper forms; e-Papír, the government's generic electronic submission channel (whether jegyzők accept it for this notice is *unverified*); OMME (national beekeepers' association) FAQ guidance.

**Offline evidence:**
Municipal PDFs instruct "registered letter or in person"; the procedure is free of fees.

**Offline channel:**
OMME and county beekeeper associations, beekeeping supply shops, and the vets who issue the movement certificate.

**Market count:**
About 27,000 beekeepers with 1.5M colonies in the NÉBIH register; the migratory share is unknown.

**The gap:**
One entry → the correct destination jegyző gets a compliant notice electronically, with the vet certificate attached and quarantine zones checked.

**Possible product:**
A mobile form that routes each hive-move notice to the destination municipality through e-Papír or Hivatali Kapu, the official electronic mailbox for public bodies.

**MVP:**
A form plus generated PDFs for the municipality, sent by e-Papír on the beekeeper's behalf. This needs a power of attorney (*unverified*).

**Pricing hypothesis:**
5,000–10,000 HUF/year (estimate), or a feature sold by associations to their members.

**How to find first customers:**
OMME, regional beekeeper clubs, honey buyers.

**Risks:**
- Very low willingness to pay.
- Free channels exist.
- Enforcement is weak.

**Kill condition:**
Jegyzők accept a simple e-mail, or interviews show beekeepers rarely file.

**Score:** 3/10. Willingness to pay: only as a cheap association service. Founder access: needs a local.

**Sources:**
- https://szentlorinc.hu/images/Nyomtatvanyok/Hatosagi_ugyek/allattartas_vadkar/ugymenet_mehek_beszallitasanak_bejelentese.pdf
- https://tiszafoldvar.hu/doks/szervig/meheszet_ugymenet.pdf
- https://adozona.hu/altalanos/Fontos_hatarido_mehesz_oktober_15_OEE5IB
- https://omme.hu/evcms_medias/upload/images/gyakori-kerdesek-1.pdf
- https://besenyotelek.hu/wp-content/uploads/2024/08/Mezelo-mehek-betegsege-miatt-vedokorzet-2024.pdf

## 3. Rejected

- **Livestock ENAR:** WebENAR/WebTER plus the NÉBIH API, with farm software already connected. https://portal.nebih.gov.hu/documents/10182/1166164/ENAR+tajekoztato.pdf/6cb60efd-fb63-5f17-f5bb-076b6e6d6126
- **Seasonal and casual labour (EFO):** free registration by phone (185), ONYA and NAV Mobile. The 2026 change to 210 days is a small counting feature for payroll tools. https://nav.gov.hu/sajtoszoba/hirek/2026_konnyitesek_az_egyszerusitett_foglalkoztatasban
- **Septic haulers (NKSZ):** one receiving body, a monthly aggregate report, and a monopoly provider per municipality. https://baranya.katasztrofavedelem.hu/application/uploads/documents/2022-01/77122.pdf
- **Precious-metal traders and pawn:** the turnover report is annual. https://mkeh.gov.hu/nemesfemvizsgalat/nyilvantartas
- **Contract distilleries:** an unproven lead rather than a rejection. There are about 900 distilleries and the NAV_J22 filing is electronic-only, but I found no evidence of the workflow pain or of Hungarian vendors. https://nav.gov.hu/nyomtatvanyok/letoltesek/nyomtatvanykitolto_programok/nyomtatvanykitolto_programok_nav/nav_j22
- **Household employers and chimney sweeps:** desk judgement, not searched.

## 4. Method notes

- **What worked:** Hungarian regulator-first queries naming the specific form or term (NAV_F02, szállítójegy, bérfőzési napló, beszállítás bejelentése jegyző). NAV newsletters (hírlevelek), NÉBIH notices, Adózóna summaries and municipal procedure PDFs (ügymenet) carried most of the evidence.
- **What didn't:** searches for local vendors and prices (VasLap and femnyilvantarto exist, but no prices surfaced) and current operator counts (NAV and NÉBIH registers exist, but the totals are not in snippets).
- **Without WebFetch,** market counts are dated (2012 for metal, 2020 for timber).

Research model: Opus
