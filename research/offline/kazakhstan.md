# Kazakhstan: Offline-Industries Pass

Research date: 2026-10-05. Budget allowed 20 WebSearch calls. **Only 6 searches ran.** The 7th call (on wells and the new Water Code) was refused with a usage-limit error, and as the instructions require I stopped there and wrote up what I had. All queries were in Russian. WebFetch was not used. Facts come from search-result snippets. Anything not confirmed is marked *unverified* or *estimate*.

This is a **short, partial report**. Its verdicts are not final: most seed groups were never searched. The existing country report (`research/countries/kazakhstan.md`) covers ESF/SNT reconciliation, construction supervision journals and ПЭК environmental reporting, and none of those is repeated here.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Scrap metal collection points (лом черных и цветных металлов) | Notify the local akimat before starting. Meet the Ministry of Industry's requirements (base, transport, equipment, qualified staff). Keep a daily intake journal and a purchase contract or waybill for every intake. The prohibited-items list includes rails, rolling-stock parts and manhole covers from individuals. | The journal must be **"stitched, numbered and sealed"** (прошнурован, пронумерован, скреплён печатью), with daily totals, kept 3 years (adilet V2200028082; cdb.kz; uchet.kz). Paper is written into the rule. | Unknown. The akimat notification register is public in principle (e-licensing). Count not retrieved. | **Weak candidate (4/10)** | Real register and enforcement surface, but the rule mandates a paper book, the margins are thin and the count is unverified. |
| Scrap metal (regime change) | Inform.kz reports "new rules for accepting scrap metal from 30 December". Inbusiness.kz reports that rules were approved for issuing a *permit* (разрешение) to collect, process and sell scrap. | Change of regime, from notification to permit. Effective year **unverified** from snippets. | Not retrieved | Watch | If the permit regime is new for 2025–26, it is a real trigger. Not verified. |
| Livestock owners (ИСЖ animal identification) | Tagging or branding, veterinary passport, records in the state ИСЖ database. Deadlines: fish by 2026-03-01; camels in small private farms, poultry, deer, rabbits and small ruminants in private farms by 2026-09-01. | Owners buy passports and tags at vet clinics and pharmacies. **State veterinary organisations do the data entry** into ИСЖ. Passport applications have moved to the egov portal. | Millions of household farms (not counted in this session) | Rejected | The state vet is the integration layer. The owner has no software task to buy. |
| Pawnshops (ломбарды) | Subjects of financial monitoring (AFM): threshold reports (from 1m KZT) and suspicious-operation reports via the AFM web portal or XML. A new suspicious-operations list applies from 2026-04-01 (kursiv.media). | Not offline: established vertical software exists. | Not retrieved (ARDFM register) | Rejected: too competitive | SmartLombard (KZ/RU, includes ПОД/ФТ checks) and PawnShop (10,975 KZT/month per PC, includes AFM and credit-bureau uploads) already serve them, as do 1C-based products. |
| Jewellers / precious-metal dealers | Same AFM subject status (general knowledge, *not re-verified*) | Not searched | — | Not screened | Budget cut off. |
| Households employing domestic workers | Labour contract registered in ESUTD within 3 working days. Employer contributions: ИПН 10%, ОПВ 10%, ОПВР 3.5%, СО 5%, ОСМС 3%. | The search returned only generic employer (ИП/ТОО) rules. No evidence found of a separate paper workflow for households. | Not retrieved | Not established | No evidence that households actually formalise. Most domestic work is likely informal (*unverified*). |
| Well drillers / private wells (new Water Code) | — | Search refused | — | Not screened | Budget cut off. Worth a follow-up: the new Water Code reportedly changes well accounting (*unverified*). |
| Beekeepers, small abattoirs (убойные пункты), taxi/minibus, market traders, exchange offices, halal certification, hunting farms, pesticide sellers, lift inspection | — | — | — | Not screened | Budget cut off. |

## 2. Strongest opportunities

No opportunity in this pass meets the brief's decision rule. I give the one weak candidate in full template form so that a later pass can kill or confirm it quickly.

### Opportunity: Scrap-intake register and akimat/police-ready reporting for licensed scrap points

**Industry:**
Ferrous and non-ferrous scrap collection, storage and resale (пункты приема металлолома).

**Buyer:**
Owner or manager of a legal entity that runs one to a few scrap intake points. Often owner-operated (*assumption*).

**Trigger / Why now:**
New scrap-acceptance rules "from 30 December" covering equipment, siting, raw-material accounting and the list of prohibited items (inform.kz; effective year *unverified*). Inbusiness.kz reports approved rules for issuing a *permit* for scrap activity, which may tighten the earlier notification regime (*unverified*).

**Current workflow:**
1. A seller (individual, ИП or company) brings scrap. The point checks it against the prohibited list (rails, rolling-stock parts, manhole covers from individuals).
2. A purchase contract and/or waybill is drawn up.
3. The intake is written by hand into a stitched, numbered, sealed journal, with daily totals.
4. Journals are kept 3 years for inspection by the akimat or police.
5. Outgoing sales to processors are documented separately (ESF/SNT, covered by the country report).

**Pain:**
Mandatory per-transaction record keeping plus inspection exposure. No complaint evidence was gathered in this pass. Pain level is an **estimate**.

**Existing solutions:**
- Pre-printed paper journals from stationers (*assumed*, not verified).
- 1C configurations or generic weighbridge software (*unverified* for KZ).
- Russian scrap-yard software (several RU vendors exist; KZ presence *unverified*).

**Offline evidence:**
The regulation itself requires a physical stitched and sealed journal. The akimat notification is filed through e-licensing, but intake records stay on paper.

**Offline channel:**
The public notification and permit register on e-licensing.kz gives names and addresses, followed by phone or WhatsApp outreach. Weighbridge (scale) suppliers and verification labs that visit every point are another route. Processors (the large buyers of scrap) could push the tool to their supplier network. None of these channels was verified.

**Market count:**
Not retrieved. *Estimate*: hundreds to low thousands of points nationally. Needs a register pull.

**The gap:**
A tablet intake log that produces the printed daily journal page, the purchase act and the prohibited-item check, all from one entry. It could later add photo evidence of the seller's ID and the scrap.

**Possible product:**
A tablet or phone intake app that records seller, ID, weight and category, blocks prohibited items, and prints the daily journal sheet and acts in the legal format.

**MVP:**
Intake form, prohibited-item rules, daily printout, 3-year archive.

**Pricing hypothesis:**
5,000–10,000 KZT/month per point (*estimate*, benchmarked against PawnShop's 10,975 KZT/month). Buyers would pay for software only if it replaces the paper journal at inspection. Otherwise they will pay little.

**How to find first customers:**
The e-licensing register, 2GIS listings of "прием металлолома", and introductions from processors.

**Risks:**
- The legal requirement for a sealed paper journal may mean software cannot replace it, only produce a printout.
- Grey-market operators prefer *fewer* records.
- Large processors (for example, KazChermet-type groups) may already provide forms to their suppliers.

**Founder access:**
Needs a Russian- or Kazakh-speaking local for sales by phone and field visits. A non-local solo founder is unrealistic.

**Kill condition:**
- An electronic journal is not accepted at inspection; or
- fewer than about 500 registered points exist.

**Score:** 4/10 (Pain 5, Frequency 9, Mandatory 8, Fragmentation 3, Competition unknown, Gap 4, Buyer accessibility 6, WTP 3, MVP 8, Distribution 4)

**Sources:**
- https://adilet.zan.kz/rus/docs/V2200028082
- https://adilet.zan.kz/rus/docs/V2000020584
- https://cdb.kz/sistema/novosti/ustanovleny_trebovaniya_k_yuridicheskim_litsam_po_sboru_i_realizatsii_loma_i_otkhodov_tsvetnykh_i_ch/
- https://uchet.kz/news/s-24-maya-vvodyatsya-trebovaniya-k-deyatelnosti-yuridicheskikh-lits-osushchestvlyayushchikh-deyateln/
- https://www.inform.kz/ru/novie-pravila-priema-metalloloma-vvedut-v-kazahstane-s-30-dekabrya-32d6253a
- https://inbusiness.kz/ru/last/v-kazahstane-utverdili-pravila-vydachi-razresheniya-na-sbor-pererabotku-i-prodazhu-metalloloma
- https://exclusive.kz/skupshhikam-metalloloma-zapretjat-prinimat-relsy-i-ljuki-u-naselenija-a-punkty-prijoma-otodvinut-ot-zhilyh-zon/

## 3. Rejected

- **Livestock identification (ИСЖ):** state veterinary organisations enter the data. Owners only buy tags and passports, and the egov portal handles passport applications. There is a 2026-09-01 deadline for camels, poultry, rabbits and other animals in private farms, but no software buyer. Sources: https://www.zakon.kz/pravo/6477480-identifikatsiya-molodnyaka-selskokhozyaystvennykh-zhivotnykh-vneseny-izmeneniya.html, https://adilet.zan.kz/rus/docs/V1500011127, https://vkabinet.kz/gosudarstvennye-sluzhby/iszh/
- **Pawnshop AFM reporting:** the obligation is real, and a new suspicious-operations list applies from 2026-04-01, but vertical software already covers it: SmartLombard, PawnShop (10,975 KZT/month), and 1C-Lombard products. Sources: https://kz.kursiv.media/2026-01-05/fvfv-finmonitoring-usilivayut-afm-obnovilo-perechen-podozritelnyh-operaciy/, https://smartlombard.ru/, https://lombard.algo-rithm.com/lwchshie-programmy-dlya-lombarda-kazahstana/
- **Household employers of domestic workers:** no evidence of a household-specific formal workflow, and informality is likely (*unverified*). Labour-contract registration in ESUTD is already free (HR.enbek); the country report rejected that workflow.

## 4. Method notes

- Russian-language regulator queries worked well. adilet.zan.kz (the legal database) and accountant news sites (uchet.kz, cdb.kz, mybuh.kz) surface the exact obligations, including the paper-journal wording.
- Counts did not appear in snippets. A follow-up needs targeted searches on the e-licensing.kz registers and stat.gov.kz.
- The budget ended after 6 of 20 searches because of a usage-limit refusal. These were not screened: wells under the new Water Code, beekeepers, small abattoirs, exchange offices, halal certification, taxi/minibus, market traders and hunting farms. Wells and abattoirs are the best follow-up candidates.
