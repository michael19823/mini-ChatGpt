# Lithuania: quiet-industry screen (offline_v2)

Research date: 2026-10-08. Market size: medium (budget 15-25 searches; 25 used, 18 fetches). Languages: Lithuanian first, then English.

**Headline:** Lithuania has put most registers behind free state portals (PPIS, BĮIP, VVAIS, GPAIS, IMI, VDI, ŽŪIKVC), and local farm and accounting software already covers the largest obligations. I found two narrow niches with paper-style record duties and no Lithuanian-specific software in my searches: scrap-metal purchase sites and precious-metal dealers (jewellers, pawnshops, gold buyers). Both are small and low in willingness to pay. Neither is a strong standalone business. Treat the report as "weak, marginal leads", not "build".

## Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Non-ferrous scrap-metal buyers (purchase sites) | Law IX-565 on purchase of non-ferrous scrap: keep records, store only at purchase site, banned-items list; rules in Economy Ministry order 4-678 (amended by 4-60, effective 2023-03-01); ADK Art. 143 fine | Family-run yards, price-list websites only; no scrap-yard software found; exact record format not seen | Not found (no public count). Chains: Metruna "20+ branches", EMP Recycling 9 yards, UAB Metalo laužas 5 sites (company sites); info.lt category lists 222 firms (directory, not authoritative) | Shortlist (weak) | Daily mandatory records, no vertical tool found, but small market and unverified record format |
| Precious-metal dealers: jewellers, pawnshops (lombardai), gold buyers | Declare activity to Lietuvos prabavimo rūmai (Finance Min. order 1K-187 as amended by 1K-358, 2024-11-08); daily purchase list (žiniaraštis) in two copies, 10-year retention; annual statistical report by 31 January; annual inventory | Sewn paper journal required by the 2006 rules; "only computer-filled stat forms accepted" per LPR; no pawn/gold software for Lithuania found | Not found (LPR list page blocked, HTTP 403). Public list exists at lpr.lrv.lt and verslovartai.lt. Estimate: several hundred, possibly low thousands (unverified) | Shortlist (weak) | Real daily and annual duties, no local tool found, but tiny buyer pool and low willingness to pay |
| Plant-protection-product users (farms treating from 1 ha) | AAP use journal; PPIS journal mandatory from 2026-04-05 for 1 ha and up (ŽŪM/NMA snippets); fill-in deadline 15 or 30 days (sources conflict) | Many farmers need consultants; 2021 farmer-union complaint of "mission impossible" | Not found | Rejected | Geoface and CropPLAN already generate and send the journal, and PPIS is free |
| Beekeepers | Annual colony declaration 1 Sep to 31 Dec in the farm-animal register (VMVT/ŽŪIKVC) | Paper or scanned GŽ-1 form by email for first registration | Not found | Rejected | Free state register, hobbyist buyers, no WTP |
| Hunting clubs (medžioklės plotų naudotojai) | Reports and bag limits only via electronic BĮIP "Medžioklės žurnalas" from 2025 | Paper hunting sheets still allowed | Not found | Rejected | State app and portal already free |
| International road hauliers | Driver posting declarations via EU IMI public interface (Directive 2020/1057) | Small carriers use accountants and Linava | Not found for LT | Rejected | Free IMI API, plus MovingCert, move-expert, autoimisystem.com |
| Retail alcohol licensees | Municipal licence under the Alcohol Control Law; licences via licencijavimas.lt | Municipal counter service | Not found | Rejected | No recurring report to an authority found |
| Food businesses (self-control / HACCP journals) | Unclear: VMVT page says self-control documents are not mandatory since 2021-11-01 (HN 15:2021, items 5-6); commercial sites say they are | Paper journal kits sold (patogusverslas.lt) | Not found | Rejected | Legal duty unconfirmed; IMVIS may offer journals (vendor-site claim, unverified) |
| Owners of potentially hazardous equipment (lifts, cranes, pressure vessels) | Register with VDI; periodic inspection by accredited bodies | VDI emails reminders to owners | Not found | Rejected | VDI reminders plus inspection firms already cover scheduling; low pain |
| Short-term rental hosts and rural homesteads | EU Reg. 2024/1028 applies from 2026-05-20; Lithuanian national registration still described as draft in press | Mixed | Not found | Rejected | Online-savvy hosts, national scheme unclear, platforms will handle it |
| Meat sellers at markets | VMI/ministry market-sales accounting rules; the July 1 change I was asked to check could not be confirmed | Market stalls | Not found | Rejected | Could not confirm the rule or year (VMI page blocked); unverified |
| Small waste generators (GPAIS journal) and farm-animal vets (VVAIS) | See the earlier general report | n/a | n/a | Not repeated | Already covered in /home/user/mini-ChatGpt/rerun/inputs/countries/lithuania.md |
| Small drinking-water suppliers | G9 monitoring system for self-control data (VMVT) | Not examined | Not found | Not assessed | Only one search snippet; no budget left |

## Opportunities

Both leads are weak. If the orchestrator needs a single sentence: Lithuania has no strong "quiet industry" software opportunity for a non-local solo founder; the two below are marginal, small-ticket niches that need customer interviews before any build.

### Opportunity: Scrap-yard purchase desk (seller ID, banned-items check, purchase document, record book)

**Industry:**
Non-ferrous and ferrous scrap-metal purchase sites (small yards and chain branches), many of them also waste managers.

**Buyer:**
Owner or yard manager of a licensed scrap-metal buyer. Chains (a few dozen sites) are possible secondary buyers.

**Trigger / Why now:**
No new 2026 trigger found. Standing duty under Law IX-565, with the accounting and storage order 4-678 amended on 2023-02-08 (order 4-60, effective 2023-03-01) and a statistics-reporting duty dropped from March 2023 per the GPAIS site (unverified). GPAIS is also moving to be the primary source of waste-transfer data after an i.VAZ integration (GPAIS news, unverified date); this could add pressure on yards registered as waste managers.

**Current workflow:**
1. Seller arrives; staff check ID and the list of items banned from purchase.
2. Material is weighed and priced; contamination discount applied.
3. Purchase document written by hand, in Excel or in the owner's general accounting package.
4. Payment made and personal income tax withheld for private sellers (rate unverified, one 2014-era article says 5%).
5. Records kept at the purchase site; goods sold on. Notice to police before exporting non-ferrous scrap (from the 2010 draft law text only, current rule unverified).
6. If the yard is a registered waste manager, GPAIS waste-handling accounting and transfer waybills are also needed (GPAIS guide; applicability to each yard unverified).

**Pain:**
Fine under Code of Administrative Offences Art. 143 for breaching the purchase, accounting or storage rules: EUR 550-1,500 plus possible confiscation (lrvalstybe.lt copy, undated). A search summary quoted EUR 720-1,950 for a version "effective 2024-05-31". The two figures conflict, so the amount is unverified. A Klaipėda prosecutor's release (prokuraturos.lt) describes a scrap buyer allegedly using socially marginal people's data and signatures on fictitious purchase documents, which shows why seller identity records matter. Hours lost: not found.

**Existing solutions:**
- General Lithuanian accounting/ERP: Rivilė GAMA, Finvalda, Pragma (no scrap-yard features found).
- GPAIS portal itself (free, manual entry), and go-erp.eu and Oixio GPAIS modules for Dynamics, aimed at producers and importers.
- Foreign scrap-yard systems (ScrapIT, WeighPay, scale-ticket tools) with no Lithuanian rules or GPAIS support found.
- Excel and paper books.

**The gap:**
No Lithuanian product found that combines scale ticket, seller ID capture, banned-items check, compliant purchase document and the yard record book. GPAIS integration for waste handlers was announced in 2023 as a technical specification, but I could not open it.

**Possible product:**
Web or tablet desk app for a yard: scan or enter seller ID, pick material, enter weight, auto-check the banned-items list, print the Lithuanian purchase document, keep the dated record book, and export to accounting. Later add GPAIS export for yards that must report there.

**MVP:**
Purchase document and record book for one yard, banned-items check on the current annex to order 4-678, CSV export for the accountant. No scale hardware integration and no GPAIS push in version one.

**Pricing hypothesis:**
EUR 25-60 per purchase site per month (estimate). Chains EUR 500-1,500 per year per group.

**How to find first customers:**
Public State Register of Waste Managers (ATVR, Aplinkos apsaugos agentūra) filtered for metal scrap codes; the licence/purchase-site data kept by the authority (not located); company websites and info.lt scrap category. Cold phone and email in Lithuanian, then referrals via chains.

**Risks:**
Exact record format under order 4-678 not seen. Tiny market. Yards may already use bespoke scale software. Owners may prefer paper to avoid an audit trail (the prosecutor case suggests some do).

**Kill condition:**
The consolidated order 4-678 requires only a simple purchase document that any accounting or scale package already prints, or interviews show yards pay under EUR 15 a month for software. Also dead if buyers are not required to hold records beyond what GPAIS already captures.

**Offline evidence:**
Yard websites are price lists only; no scrap-yard software vendor surfaced in Lithuanian or English searches; compliance advice sits in tax forums (tax.lt) and a prosecutor's release.

**Offline channel:**
Outreach from the public ATVR register; scrap-chain head offices; no trade association confirmed (none found in searches).

**Market count:**
Not found. Evidence of scale: Metruna 20+ branches, EMP Recycling 9 yards, UAB Metalo laužas 5 sites (company sites), info.lt category with 222 firms (directory, includes non-buyers). Estimate: low hundreds of operators.

**Checks:**
- Competitor (4 queries): "metalo laužo supirkimas apskaita registras reikalavimai pardavėjo asmens duomenys atliekų tvarkytojai"; "metalo laužo supirkimo programa apskaita supirkimo aikštelė svėrimas programinė įranga Lietuva"; "atliekų tvarkytojų programa GPAIS integracija atliekų priėmimo aikštelė svėrimas metalo supirkimas programinė įranga"; English "scrap metal buyers software Lithuania purchase records waste GPAIS yard management scale ticket compliance". No Lithuanian scrap-yard product found. Foreign tools and ERPs listed above. Accountants do bookkeeping, not the yard record. Result: passes, with weak evidence of absence.
- Duty: Law IX-565 (Seimas, adopted 2001-10-23, Valstybės žinios 2001 No. 93-3257), e-seimas.lrs.lt shows it in force with a consolidated version from 2023-03-01. Article 4 is "Reikalavimai supirkėjui" but the page showed headings only. The wording I could read is from a 2010 draft of the law (not current): buyers must keep records "Vyriausybės ar jos įgaliotos institucijos nustatyta tvarka", store scrap only at purchase sites, not buy listed items, notify the police at least 3 working days before exporting non-ferrous scrap, and report to the Statistics Department (the last duty reportedly dropped in 2023). Penalty: ADK Art. 143 "Netauriųjų metalų laužo ir atliekų supirkimo, apskaitos ir saugojimo tvarkos pažeidimas", fine EUR 550-1,500 per lrvalstybe.lt (conflicts with EUR 720-1,950 elsewhere). The duty falls on the buyer (supirkėjas), which is the named buyer. Caveat: current article text and order 4-678 record fields not read.
- Jurisdiction and currency: Seimas of the Republic of Lithuania; Ministry of Economy and Innovation order 4-60 of 2023-02-08 (TAR 2023-02-08 No. 2385, effective 2023-03-01) amends order 4-678 of 2010-09-06; domains e-seimas.lrs.lt. Law XIII-777 (2017) amended Articles 3-4 from 2018-07-01. All Lithuanian. Consolidated text of 4-678 not opened, so currency of record details is unverified.

**Sub-scores:** Pain 5, Frequency 8, Mandatory nature 7, Fragmentation 3, Existing competition 6, Incumbent gap 6, Buyer accessibility 5, Willingness to pay 4, MVP simplicity 6, Distribution 4. Average 5.4.

**Willingness to pay:** Would pay for software only if it prints the legal purchase document and cuts fine risk; EUR 25-60 a month is a guess. The alternative is paper plus the owner's accountant. A done-for-you record service is plausible but unobserved.

**Founder access:** A non-local solo founder could sell this only with Lithuanian-language product and phone outreach; no portal integration is needed for the MVP, and a state e-identity is needed only for a later GPAIS push.

**Score:** 4.5/10 (below the sub-score average because the record format is unverified and the market is small).

**Sources:**
- https://e-seimas.lrs.lt/portal/legalAct/lt/TAD/TAIS.153237 (Law IX-565, in force; consolidated from 2023-03-01)
- https://e-seimas.lrs.lt/portal/legalAct/lt/TAD/f41531a2a7f111ed924fd817f8fa798e (order 4-60 of 2023-02-08 amending order 4-678)
- https://e-seimas.lrs.lt/rs/legalact/TAP/TAIS.373290/ (2010 draft of the law; not current, used only for the list of duties, unverified)
- https://lrvalstybe.lt/istatymai/straipsnis/143-straipsnis-netauriuju-metalu-lauzo-ir-atlieku-itrauktu-i-d (ADK Art. 143)
- https://www.prokuraturos.lt/lt/metalo-supirkimo-aferos-uostamiestyje-asocialus-asmenys-ir-galimas-mokesciu-vengimas/8759
- https://aaa.lrv.lt/lt/veiklos-sritys/atliekos/atlieku-tvarkytojai/atlieku-tvarkytoju-valstybes-registras-gpais-atnaujinta-2024-05-10/
- https://www.gpais.eu/documents/20143/37003658/Atlieku+tvarkymo+apskaita_GPAIS+IP+vadovas_LT.pdf
- https://www.metruna.eu/ ; https://emp.lt/paslaugos/atlieku-supirkimas-supirktuvese/ ; https://metalolauzas.lt/

### Opportunity: Precious-metal dealer log (jewellers, pawnshops, gold buyers)

**Industry:**
Businesses that make, repair, sell, pawn or buy precious metals and gemstones (jewellery shops and workshops, pawnshops, gold buyers).

**Buyer:**
Owner or manager of a jewellery shop, pawnshop (lombardas) or gold-buying point registered on the Lietuvos prabavimo rūmai (Assay Office) list.

**Trigger / Why now:**
No 2025-2026 trigger found. The declaration rules were rewritten by Finance Minister order 1K-358 of 2024-11-08 (list of economic entities, electronic submission possible). The annual statistical report is due 31 January each year (LPR instruction, 2024 document); the next is due 2027-01-31.

**Current workflow:**
1. Customer sells or pledges gold or silver; staff check photo ID and age (buying from minors is banned).
2. A purchase document or pledge ticket is written in two copies.
3. A daily purchase list (žiniaraštis) is filled in for each working day in two copies and entered in a numbered journal signed by the head and stamped (2006 rules).
4. Quantities by purity, mass and gemstone are tracked in accounting registers; a stocktake is done at least yearly.
5. By 31 January the business submits the statistical report (acquired, produced, submitted for hallmarking, sold, with stock date) on a computer-filled LPR form.

**Pain:**
Sanctions exist but no fine amounts found (Law I-996 Art. 25 allows administrative penalties, confiscation and suspension of activity; the 2006 rules refer to liability under that law). Hours lost and complaints: not found. Evidence of pain is thin.

**Existing solutions:**
- General accounting (Finvalda, Pragma, Rivilė) without pawn or hallmark features in the listings seen.
- Foreign pawn and gold-buying tools (PawnSoft, Gold Manager Pro, aimed at the US and other markets; Lithuania not listed).
- Excel and the bound journal; accountants preparing the annual report (unverified).

**The gap:**
No Lithuanian tool found that produces the compliant purchase document, daily list, pledge register and the annual LPR statistical report in one place.

**Possible product:**
Simple web app: intake form with ID, item, purity, mass, price; daily list print; pledge tickets and redemption tracking; year-end LPR statistics export and stocktake sheet.

**MVP:**
Purchase document and daily list in the legal layout, plus an annual statistics sheet matching the LPR form. No loan accounting in the first version.

**Pricing hypothesis:**
EUR 10-25 per outlet per month (estimate). Annual-report-only tier around EUR 60-100 per year.

**How to find first customers:**
Outreach from the public LPR list of economic entities (lpr.lrv.lt) and the verslovartai.lt directory run by the Assay Office with Versli Lietuva; pawnshop and gold-buyer websites.

**Risks:**
Very small ticket; buyers may only pay an accountant. The 2006 rules may have been replaced (the page opened shows only the 2006 text). LPR may offer its own form or tool.

**Kill condition:**
Current rules no longer require the paper daily list, or LPR already provides a free web form and most dealers use general POS systems that print the list. Or fewer than about 300 active entities on the list.

**Offline evidence:**
2006 rules require a sewn, stamped journal and two paper copies; LPR accepts only computer-filled stat forms but declarations can still be delivered in person or by email; no Lithuanian pawn software surfaced.

**Offline channel:**
Outreach from the public LPR register and verslovartai.lt; no association confirmed.

**Market count:**
Not found (LPR pages returned HTTP 403 to my fetches). Estimate: several hundred to low thousands (unverified).

**Checks:**
- Competitor (3 queries): "tauriųjų metalų supirkimo programa lombardų juvelyrų apskaitos programa supirkimo žiniaraštis auksas"; "lombardo programa užstatų apskaita sutartys programinė įranga lombardams auksas ūkio subjektų sąrašas prabavimo rūmai"; English "pawn shop gold buyer jeweller software Lithuania precious metals purchase log hallmarking house statistical report". No Lithuanian vertical software found; general accounting packages and foreign pawn tools only; the authority has an e-service for the declaration only.
- Duty: Finance Minister order 1K-360 of 2006-10-27 (rules on sale, purchase, processing, storage, accounting of precious metals), opened at e-seimas.lrs.lt: purchase documents "surašomi 2 (dviem) egzemplioriais"; a list of purchases is filled in "už kiekvieną darbo dieną 2 egzemplioriais"; lists are kept in a numbered, sewn, stamped journal; purchase documents, lists and journal kept 10 years; inventory at least once a year; no purchases from minors; liability under the supervision law, with no amounts. Law I-996 (1995) Art. 20 requires accounting registers by purity, mass and quantity and statistical reports "nustatyta tvarka"; LPR's instruction sets 31 January for the previous year-end position (search summary of a 2024 LPR document). The duty falls on the business owner (ūkio subjektas), which is the named buyer.
- Jurisdiction and currency: Lithuanian Finance Minister orders and Seimas law on e-seimas.lrs.lt. Order 1K-358 of 2024-11-08 (signed Gintarė Skaistė) is the current rule for the entity list. Currency of the 2006 order and of Law I-996 as amended is NOT confirmed: the pages opened show original or 2006 text without consolidation notes, and the LPR legal-acts page was blocked. Mark all daily-list details "unverified as current".

**Sub-scores:** Pain 4, Frequency 6, Mandatory nature 7, Fragmentation 2, Existing competition 6, Incumbent gap 6, Buyer accessibility 7, Willingness to pay 3, MVP simplicity 8, Distribution 4. Average 5.3.

**Willingness to pay:** More likely to pay an accountant or do nothing than buy software; software only if free or under about EUR 15 a month.

**Founder access:** A non-local solo founder could build it; selling needs Lithuanian-language outreach, with no e-identity needed for a stand-alone log.

**Score:** 4.0/10 (below the average because the market is tiny, willingness to pay is low and rule currency is unverified).

**Sources:**
- https://e-seimas.lrs.lt/rs/legalact/TAD/TAIS.285920/ (order 1K-360 of 2006, rules on precious-metal purchase and accounting)
- https://e-seimas.lrs.lt/rs/legalact/TAD/bab288f09e1111ef9db2c9aaf9c67042/ (order 1K-358 of 2024-11-08, entity list rules)
- https://e-seimas.lrs.lt/rs/legalact/TAD/TAIS.18382/ (Law I-996, original 1995 text)
- https://lpr.lrv.lt/lt/ukio-subjektu-sarasas/ and https://lpr.lrv.lt/lt/statistine-ataskaita/statistine-forma-ir-pildymo-rekomendacijos/ (seen only through search results; fetch blocked)
- https://www.15min.lt/verslas/naujiena/versli-lietuva/norintieji-dirbti-su-tauriaisiais-metalais-dokumentus-teikia-per-el-pranesimu-dezute-543-390069

## Rejected

- **Plant-protection and fertiliser journals for farmers (PPIS):** duty exists (journal in PPIS for users treating 1 ha and up from 2026-04-05 per ministry/NMA summaries; deadline 15 or 30 days, sources conflict), but Geoface generates the journals and can send them to the state system, CropPLAN (FarmEasy) advertises the same, and the state PPIS journal is free (paseliai.vic.lt). Core job already done. Sources: https://www.geoface.com/lt/2025/02/24/geoface-lietuviska-ukio-valdymo-programa/ ; https://farmeasy.lt/produktai/cropplan/ ; https://zudc.lt/iki-gruodzio-1-d-uzpildykite-panaudotu-augalu-apsaugos-produktu-duomenis-augalu-apsaugos-produktu-naudojimo-apskaitos-zurnale/ . Near-miss only for farms too small or unskilled to use Geoface, but willingness to pay is low (2021 farmer-union complaints; fines EUR 60-120 rising).
- **Posting-of-drivers declarations (haulage):** EU public interface and API exist; MovingCert, move-expert.com and autoimisystem.com sell automation. Sources: https://www.movingcert.com/en/ ; https://move-expert.com/imi-posting-declaration/ ; https://ltsa.lrv.lt/lt/naujienos/naujos-mobilumo-paketo-nuostatos/
- **Hunting clubs:** free electronic Medžioklės žurnalas (BĮIP) and a mobile app already in use. Source: https://www.miske.lt/medziotojai-kvieciami-naudotis-elektroniniu-medziokles-zurnalu-biip/
- **Beekeepers:** free state register, hobbyist customers. Source: https://vmvt.lrv.lt/lt/paslaugos/gyvunu-zenklinimas-ir-registracija/bityno-uzregistravimas/
- **Food HACCP journals:** duty status contradictory (VMVT says self-control documents not mandatory from 2021-11-01), paper kits and possibly IMVIS functionality exist. Source: https://vmvt.lt/maisto-sauga/verslui/imoniu-savikontrole-rvasvt
- **Potentially hazardous equipment owners (VDI register):** VDI emails reminders, accredited bodies (e.g. Kiwa Inspecta, DEKRA Industrial per the ministry page) handle inspections. Source: https://socmin.lrv.lt/lt/veiklos-sritys/darbo-rinka-uzimtumas/potencialiai-pavojingu-irenginiu-prieziura/
- **Short-term rental registration (Reg. 2024/1028):** applies from 2026-05-20; Lithuanian scheme unclear, hosts are online-savvy. Source: https://eur-lex.europa.eu/LT/legal-content/summary/online-short-term-accommodation-rental-services-data-collection-and-sharing.html
- **Pawnshop licensing by the Bank of Lithuania:** nothing found; pawnshops are on the Assay Office list, not a financial licence (covered in the precious-metals lead).
- **Extra ideas, not screened (budget):** garden and housing associations, dental X-ray radiation logs, temporary-work agencies.

## Search log

**WebSearch calls:** 25. **WebFetch calls:** 18 (9 returned HTTP 403: zum.lrv.lt, vmi.lt, lpr.lrv.lt x4, nma.lrv.lt, infolex.lt, leap.unep.org; the rest worked). Where fetch failed I used search results and said so.

Competitor queries run (Lithuanian unless marked English):
1. metalo laužo supirkimo programa apskaita supirkimo aikštelė svėrimas programinė įranga Lietuva
2. atliekų tvarkytojų programa GPAIS integracija atliekų priėmimo aikštelė svėrimas metalo supirkimas programinė įranga
3. scrap metal buyers software Lithuania purchase records waste GPAIS yard management scale ticket compliance (English)
4. tauriųjų metalų supirkimo programa lombardų juvelyrų apskaitos programa supirkimo žiniaraštis auksas
5. lombardo programa užstatų apskaita sutartys programinė įranga lombardams auksas ūkio subjektų sąrašas prabavimo rūmai
6. pawn shop gold buyer jeweller software Lithuania precious metals purchase log hallmarking house statistical report (English)
7. purškimo žurnalas programėlė ūkininkams augalų apsaugos produktų apskaita sinchronizacija PPIS Geoface Agrolink
8. vežėjai komandiruotų vairuotojų deklaracijos IMI programa transporto įmonėms Lietuva automatizavimas
9. HACCP savikontrolės žurnalai elektroniniai programa maisto tvarkymo subjektams VMVT

Other queries covered duty, count and rule currency (scrap-metal rules, precious-metal rules, LPR list and statistical report, PPIS journal deadlines, beekeeper register, hunting rules, alcohol licences, short-term rentals, hazardous equipment, market meat traders, lombard supervision, scrap-buyer register).

Query patterns that worked here:
- Lithuanian obligation words ("apskaita", "žurnalas", "registras", "taisyklės") plus the register or authority name returned official gazette pages and ministry notices quickly.
- Searching the penalty article ("Art. 143 ... supirkimo, apskaitos ir saugojimo tvarkos pažeidimas") and the amending order number gave the legal chain; e-seimas.lrs.lt could be fetched, but often showed original or heading-only text, so currency stays partly unverified.
- "Programa / programėlė + obligation" surfaced farm software (Geoface, CropPLAN) but nothing for scrap yards or pawnshops; English software queries returned only US pawn tools. LPR, VMI, ZUM and NMA sites block WebFetch (HTTP 403), so counts from LPR could not be read.
