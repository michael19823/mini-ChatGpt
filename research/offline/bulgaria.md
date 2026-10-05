# Bulgaria: Offline-industries pass

Research date: 2026-10-05. Budget: 20 WebSearch calls. **Only 11 were made.** On the 12th call the search tool returned a usage-limit error, and the instructions say to stop and write up at that point. WebFetch was not used, so every claim below comes from search-result snippets. Where a snippet did not show a detail (exact form, filing channel, operator count), it is marked "unverified" or "estimate". Because of the cut-off, this is a short report, and none of its ideas is ready to build.

Opportunities already in `research/countries/bulgaria.md` are not repeated here: УНП transport declarations, the plant-protection e-diary (EU 2023/564) and НИСО waste ledgers. The BFSA plant-protection *announcement* platform is also covered there.

---

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| **Rakia distillers with small stills (казанджии, "малки обекти за дестилиране")** *(country-specific)* | The still must be registered with the regional customs office. It may run only 1 Jul–31 Dec, and running outside that window needs a notice to customs. Reduced excise applies to the first 30 L per household. The owner collects the excise and transfers it to Customs by bank. | Owners are sole traders or registered farmers in villages. Customs registration is done in person at the regional office. Guidance comes from still sellers' blogs (mobile1.bg) and local news. No software listings found. | **1,573 active stills** (dnes.bg article via search snippet; date of the figure unverified) | **Weak opportunity (4/10)** | Mandatory and done per customer job, but the market is tiny and seasonal. The exact register and declaration format was not confirmed. |
| **Scrap-metal buyers (търговци на отпадъци от черни и цветни метали)** | A permit or registration certificate from the regional environment inspectorate (РИОСВ) for each site. Each site keeps a purchase/intake register and a sales/export register, recording the seller's personal data, metal type, quantity, value, origin and payment-document number. A detailed stock and turnover account goes to the Ministry of Economy every six months. | Registers are kept per site. Small scrapyards buy from individuals for cash at a weighbridge. Sellers sign "declarations of origin" on paper (kolazaskrap.bg publishes a template). | Unverified. MOEW keeps a public register of waste permits with a ferrous/non-ferrous section, and each РИОСВ publishes lists of issued permits. | **Weak opportunity (4/10)** | Real per-transaction register with personal data. Overlaps with НИСО (already covered), and weighbridge software vendors are a likely substitute that I did not check. |
| **Pawnshops (заложни къщи)** | Ordinance on pawnshop activity: a register kept to a prescribed template in each shop, plus a daily registration inventory of all deals and sales. Supervised by the police (МВР) and the consumer protection commission (КЗП). Shops that deal in precious-metal items also register under the Currency Act. | The register "по образец" is kept per shop. The data protection authority (КЗЛД) has issued an opinion on a pawnshop manager's question about personal data. A 2018 criminal case also turns up in search. | Unverified. Pawnshops register only in the Commercial Register, which has no NACE filter in the snippets. | **Weak (3/10)** | Daily and mandatory, but I could not confirm whether the daily inventory is handed to the police, or in what format. The shops are few and low-margin. |
| Beekeepers (пчелари) | Apiaries register with BFSA (ОДБХ) only. The municipal double registration was abolished. Apiaries must keep records of harvest, sales and lab tests (Ordinance 9/2005), and display a fence and a sign with the registration number. | Registration happens at the regional BFSA office (ОДБХ). Records are paper diaries. | Unverified (Ordinance 10/2015 governs registration) | Reject | Registration is a one-time task. The record-keeping is light, and beekeepers will pay little. The 2025 change *reduced* the burden. |
| Livestock keepers / animal traders | Holdings register with ОДБХ. An annual inventory goes into ВетИС. Moving animals inside Bulgaria needs a veterinary movement certificate. Amendments to the Veterinary Activities Act from 1 Jul 2025 add birth notifications for animals that must be identified. | Done by the registered vet, who issues the certificate in ВетИС. Farmers' own ВетИС access is new (agri.bg explainer). | Unverified | Reject | The substitute is the contracted vet and the free ВетИС system. BFSA's "virtual herd" fraud cases point to subsidy fraud, not an admin gap. |
| Veterinary antimicrobial records (EU 2019/6) | Antimicrobial use data reported to BFSA | — | — | Not verified | Searches returned only Russian and Ukrainian results. No Bulgarian obligation was found (same result as the first-round report). |
| Households as employers (домашни помощници, детегледачки) | A standard employment contract, notified to NRA (Notice under Art. 62 of the Labour Code) | Mostly informal or undeclared (estimate) | Unverified (EU labour authority ELA has a 2026 Bulgaria document on undeclared work) | Reject | There is no special household-employer regime, and live-in care is mostly informal. The NRA portal and accountants already cover the rare formal case. |
| Gold buyers / precious-metal dealers | Registration under the Currency Act (for pawnshops and others trading precious-metal items) | — | Unverified | Not pursued | Search budget ran out. |
| Taxi operators, market traders, cemeteries/monument makers, tattoo studios, well drillers | — | — | — | Not screened | Search budget ran out before these were reached. |

---

## 2. Opportunities

### Opportunity: Kazan Book (job register and excise collection for rakia stills)

**Industry:**
Rakia distilling at small stills (малки обекти за дестилиране). Villagers bring fruit mash, and the still owner distils it for a fee.

**Buyer:**
The owner of a registered still: a sole trader (ЕТ) or registered farmer, usually in a village, often older.

**Trigger / Why now:**
There is no fresh 2026 trigger. The regime keeps being changed, and these changes were found:
- the season was limited to 1 Jul–31 Dec, with notice to Customs needed to distil outside it;
- the volume threshold for "small object" was changed to 500 L, then a budget-committee vote restored the old rules (manager.bg, investor.bg);
- a BTA report says the production limit was raised to 1,000 L per year.

So the rules move often, and owners have to keep up. The exact current values are unverified. A 2026 audit report by the National Audit Office on excise administration (bulnao.government.bg, file `07_2026_OD_Admin_akcizi`) came up in results. Whether it covers small stills is unverified.

**Current workflow:**
1. A household brings mash. The owner records the client and the batch and distils it.
2. The owner works out the reduced-rate excise on the first 30 L per household and the full rate above that, then collects the money.
3. The owner transfers the excise to Customs by bank and reports to Customs. The exact form and frequency are unverified; it is probably a register/diary plus a periodic declaration.
4. Any work outside the season needs a notice to Customs.

**Pain:**
- Every job needs a calculation and a record.
- The rules change frequently, and press coverage ("the state should rein in the still-owners", dnes.bg) points to enforcement pressure.
- Getting it wrong counts as illegal production of excise goods (mobile1.bg).
- There is no direct evidence of paperwork complaints.

**Existing solutions:**
- Paper register and calculator.
- The local accountant.
- Customs' own systems (BACIS is used for excise warehouses; whether small stills file through it is unverified).
- Still manufacturers' blogs that explain registration (mobile1.bg).
- No software listings found.

**Offline evidence:**
- Registration is done at the regional customs office.
- Owners are sole traders or registered farmers in villages.
- The only explanatory content online is local news and a still seller's blog.
- No vendor or forum discussion of tools was found.

**Offline channel:**
- Still manufacturers and sellers (mobile1.bg and others), who already publish registration guides and meet every new owner.
- Village mayors and community centres (читалища).
- Calls to registered still owners, if Customs publishes the register of small distilling objects (public availability unverified).

**Market count:**
1,573 active stills (dnes.bg, via search snippet).

**The gap:**
A pocket tool that records each client batch, applies the 30 L household allowance and the current rates, keeps the register in the prescribed format and produces the periodic Customs report. All of this depends on confirming the format, which is unverified.

**Possible product:**
A phone app (or a printed register plus app) for still owners. It logs jobs and computes excise per household. It prints the register and the Customs report at the end of each period.

**MVP:**
- Job entry form with the household ID, the 30 L allowance tracker and the excise calculation.
- A season summary formatted like the Customs declaration.

**Pricing hypothesis:**
€30–60 per season (estimate). Realistically, it would sell better as a service through a still manufacturer or an accountant than as software.

**How to find first customers:**
- Partner with still manufacturers and sellers.
- Contact owners through the regional customs offices' lists, if those are public.

**Willingness to pay:**
- Low. Owners would pay for done-for-you bookkeeping (an accountant) more readily than for software.

**Founder access:**
- A non-local solo founder could not sell this. It needs Bulgarian, village-level selling and a partner such as a still manufacturer.

**Risks:**
- The total market is about €50–90k a year (1,573 × €30–60), so it is a lifestyle tool at best.
- Customs may add a free e-service.
- Rules change through politics, and the obligations may be lighter than assumed.

**Kill condition:**
The Customs report turns out to be a simple yearly form, or still owners say the regional customs office fills it in for them.

**Score:** 4/10 (Pain 4, Frequency 6 per job in season, Mandatory 8, Fragmentation 2, Competition 7 (none found), Gap 5, Buyer access 5, WTP 2, MVP 8, Distribution 4)

**Sources:**
- https://www.dnes.bg/a/214-sponsorirani-publikatsii/297560-darzhavnitsite-tryabva-da-stegnat-kazandzhiite
- https://mobile1.bg/blog/kazani/registraciya/registraciya-na-kazan-za-rakia/
- https://mobile1.bg/blog/kazani/registraciya/neobhodimi-dokumenti-za-kazan-za-rakia/
- https://www.investor.bg/a/333-byudzhet-i-finansi/231972-byudzhetnata-komisiya-odobri-vrashtane-na-starite-pravila-za-kazanite-za-rakiya
- https://www.dunavmost.com/novini/danachnite-napomniha-za-aktsiza-varhu-domashnata-rakiya
- https://www.bta.bg/en/news//134458-Small-Distilleries-Production-Increased-to-1-000-Litres-Annually
- https://www.bulnao.government.bg/bg/documents/17574/07_2026_OD_Admin_akcizi-inet-3.pdf (relevance unverified)

---

### Opportunity: Scrapyard Site Register (purchase/sales registers and six-monthly Ministry of Economy report)

**Industry:**
Small licensed scrap-metal buyers (ferrous and non-ferrous) that buy from individuals.

**Buyer:**
The owner or site manager of a 1–5 site scrapyard business.

**Trigger / Why now:**
No 2025–2026 trigger was found. The obligations come from the Ordinance on trading in ferrous and non-ferrous metal waste:
- every site keeps a purchase/intake register and a sales/export register;
- purchases from individuals must record the seller's personal data, metal type, value, quantity, origin and payment-document number;
- a detailed stock and turnover account goes to the Ministry of Economy every six months.

**Current workflow:**
1. A seller arrives and the metal is weighed.
2. The site records the seller's ID details and has them sign a declaration of origin on paper (kolazaskrap.bg publishes a template). It pays cash or by transfer.
3. The site keeps the purchase register (paper or Excel) and the sales register.
4. Every six months, someone compiles the stock and turnover account for the Ministry of Economy. Waste data also has to go into НИСО (covered in the first-round report).

**Pain:**
- Per-transaction personal-data capture.
- The same weight data goes into three places: the register, the six-monthly report and НИСО.
- No enforcement data was found in this pass (unverified).

**Existing solutions:**
- Weighbridge and scale software from local vendors (not checked; likely substitute).
- Excel.
- Environmental consultants who file НИСО.
- Paper declaration templates.

**Offline evidence:**
- Seller declarations and registers are paper templates.
- Permits are issued per site by each regional environment inspectorate (РИОСВ).
- No SaaS listings were found in the snippets.

**Offline channel:**
- Phone outreach from the public permit lists of the 16 РИОСВ offices and the MOEW waste registers.
- Weighbridge suppliers and calibration firms.
- Environmental consultants who already file НИСО for scrapyards.

**Market count:**
Unverified. It can be counted from the MOEW and РИОСВ permit registers (ferrous/non-ferrous section).

**The gap:**
One weigh-in record that fills the site register, the six-monthly report and the НИСО ledger, plus ID capture.

**Possible product:**
A tablet app at the weighbridge. It scans the ID, records the weight and grade, and prints the signed declaration of origin. It exports the six-monthly report and the НИСО entries.

**MVP:**
- Intake form plus declaration PDF.
- Register export in the prescribed columns.
- Six-monthly summary.

**Pricing hypothesis:**
€30–50 per site per month (estimate).

**How to find first customers:**
- The MOEW and РИОСВ permit registers.
- Consultants who file НИСО.

**Willingness to pay:**
- Moderate for software. A bundle with a НИСО-filing service would be stronger.

**Founder access:**
- Needs Bulgarian. A non-local founder would need a local partner, probably an environmental consultant.

**Risks:**
- Weighbridge software vendors may already do this (not checked).
- Overlaps with the first-round НИСО idea, so it should probably be merged into it.

**Kill condition:**
The common Bulgarian weighbridge software already prints the register and the declaration.

**Score:** 4/10 (Pain 5, Frequency 9, Mandatory 8, Fragmentation 3, Competition unknown (assumed 4), Gap 4, Buyer access 7, WTP 4, MVP 7, Distribution 5)

**Sources:**
- https://www.ciela.net/svobodna-zona-normativi/view/2135495790
- https://kolazaskrap.bg/deklaratsia-za-proizhod-na-otpadatsi/
- https://www.moew.government.bg/bg/otpaduci/registri/
- https://stz.riew.gov.bg/Izdadeni-c238
- https://www.lawsbg.com/proceduri/721-udostoverenie-deinost-cvetni-metali.html
- https://www.mediapool.bg/cherni-i-tsvetni-metali-na-vtorichni-surovini-samo-sas-sertifikat-news166101.html

**Recommendation:**
Treat this as a feature of the first-round НИСО ledger idea, not as a separate product.

---

## 3. Rejected

- **Pawnshop daily inventory:** the obligation is real (a register to a prescribed template plus a daily registration inventory, supervised by the police and the consumer protection commission). I could not confirm whether or how it is submitted, the number of pawnshops is unknown, and the sector is small. Sources: kik-info.com ordinance page, cpdp.bg opinion, advokatami.bg.
- **Beekeepers:** BFSA registration is a one-time task, the 2025 reform reduced the burden, and beekeepers will pay little.
- **Livestock movement and inventory:** the vet does the work in the free ВетИС system.
- **Household employers:** no special regime exists, the sector is mostly informal, and the NRA portal and accountants cover formal cases.
- **Veterinary antimicrobial reporting:** no Bulgarian obligation found (second pass with the same result).

## 4. Method notes

- Bulgarian-language queries naming the specific ordinance (наредба) or register worked best. They surfaced ciela.net and kik-info ordinance texts, РИОСВ permit lists, and the farm press (agri.bg, bgfermer.bg).
- Seller and manufacturer blogs (mobile1.bg for stills, kolazaskrap.bg for scrap) were the best source of real workflow detail.
- English or generic queries, and the veterinary antimicrobial query, returned Russian and Ukrainian results.
- The search tool hit a usage limit after 11 calls. Taxis, market traders, cemeteries, gold buyers and tattoo studios were not screened.
- **Next step if budget returns:** confirm the small stills' Customs register and declaration format (ЗАДС and its implementing rules), and count pawnshops and scrap sites from the registers.

Research model: Opus
