# Iraq: Offline (quiet) industries pass

Researched 2026-10-05. I ran 18 of the 20 allowed WebSearch calls, nearly all in Arabic. WebFetch was not used, so every fact comes from search-result summaries. Anything I could not confirm is marked "unverified" or "estimate". This pass does not repeat the ASYCUDA, customs-broker and exporter opportunities in `research/countries/iraq.md`.

Context from the country report also applies here: payments are mostly cash or local wallets (Qi Card, FIB), Stripe does not serve Iraqi merchants (unverified), and policy changes often. A non-local solo founder would need a local partner for almost everything below.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| **Private neighbourhood generator operators (المولدات الأهلية)** | Licence (إجازة) from the administrative unit. Must charge the **monthly ampere price set by the provincial council** and give subscribers an official receipt showing that price. Fines up to IQD 5m (Baghdad, Jul 2026); prison or fine (Basra). Monthly subsidised gasoil quota per KVA from the Oil Products Distribution Co., which needs an endorsement letter from the administrative unit. | Paper receipt books. Price lists are published monthly as council letters or photos ("وثيقة"). Fuel is collected at depots. Endorsement letters are issued at the قائممقامية counter. | About 50,000 nationwide including Kurdistan (Ministry figure, Rudaw 2023). About 25,000–27,000 in Baghdad (Alsumaria 2026). Over 1,400 unlicensed in Dhi Qar alone (Al-Mada). | **Shortlisted** | It is monthly, mandatory and enforced, and every province sets a different price. But simple billing apps already exist, so the edge has to be compliance with the official price list, receipts and the fuel ledger. |
| Employers of foreign workers / licensed recruitment companies | Instructions No. 1 of 2026 (Ministry of Labour, with the Judicial Council and Interior). Work permit before starting work. **Annual renewal in the last 30 days** before expiry, through the Ur portal. Fees: IQD 4.72m for the permit, IQD 2m for residency renewal. 50% cap on foreign staff. Iraqi job-seekers must be offered the job first. Deportation campaigns. | Done through معقبين (paperwork runners) and recruitment offices. Medical certificate and notarised contract on paper. | About 45,000–47,000 licensed foreign workers (Ministry of Labour via Kurdistan24/Al-Arabiya 2026). Far more work illegally (estimate). Number of recruitment companies not found. | **Shortlisted (weak)** | There is a new 2026 rule and a renewal deadline, but the volume is small and the buyer would pay for a done-for-you service rather than software. |
| Poultry farms (حقول الدواجن) | Farm licence (over 1,000 birds) under the health and technical conditions instructions. Ministry of Agriculture marketing windows and import protection. | Licensed through the agriculture directorate. Feed and medicine bought from local stores. | About 7,000 broiler farms (licensed and unlicensed) and about 400 large egg farms (2023 statistic, via Shafaq). | **Shortlisted (weak)** | It is real and quiet, but I found no recurring filing to automate. The pain is smuggling and prices, not paperwork. |
| Money exchange companies (شركات الصيرفة A/B) | CBI requires an electronic system recording daily buy and sell transactions per customer, branch linkage, quarterly and annual accounts, and inspection cooperation. Licences were revoked in Sept 2026. | Not really quiet: the CBI already mandates an electronic system. | Several hundred (estimate, unverified) | Rejected | CBI-certified core systems and AML vendors already serve this regulated finance niche. The sales cycle and liability are too heavy for a solo founder. |
| Ration agents (وكلاء المواد الغذائية) | Deliver monthly Public Distribution System rations and keep up-to-date family lists. | The Ministry of Trade rolled out its own **"Wakeeli" (وكيلي) app** for agents nationwide, plus a citizen ration-card app. | About 40 million beneficiaries. Agent count not found. | Rejected | The government tool is the substitute and there is no money in it. |
| Gold shops / jewellers | Licence to practise the goldsmith trade. Hallmarking by the COSQC hallmark department (Law 83/1976). Official receipt with weight and karat. | Counter trade, inspection campaigns. | Not found | Rejected | No recurring filing. The pain is fraud, which is enforced by inspectors, not by paperwork. |
| Scrap metal dealers | Export ban on scrap. Approval needed to move scrap between provinces. Police seizures (Diyala, May 2025). | Informal and smuggling-dominated ("mafias" according to Jummar 2025). | Not found | Rejected | The business is informal or criminal, so the operators are not legitimate software buyers. |
| Water-well drillers | Prior approval from the Ministry of Water Resources and a hydrogeological study. Unlicensed wells are filled in. More than 200 lawsuits in 2025. | Approvals come from the ministry directorate. | About 13,000 wells regularised over 5 years. About 1,000 new wells planned for 2026. | Rejected | The volume is tiny and the state controls the process. |
| Private fuel stations | Oil Products Distribution Co. supply, POS e-payment rollout, unattended-fuelling pilot. | It is state-led digitisation. | Not found | Rejected | The state company is building the systems. There is no gap for a third party. |
| Private RO water / bottling plants | Health licence and water sampling (assumed) | My search returned only Jordanian and Egyptian results | Not found | Unverified | I could not confirm an Iraqi workflow within budget. |
| Domestic workers (households) | Same 2026 foreign-worker instructions. Households sponsor through recruitment offices. | Recruitment offices and paperwork runners. | Not found | Merged into the foreign-worker row | Same channel. Households will not buy software. |

## 2. Strongest opportunities

### Opportunity: Official-price billing, receipts and fuel-quota ledger for neighbourhood generator operators

**Industry:**
Private neighbourhood diesel generators (المولدات الأهلية) that sell amperes to households and shops.

**Buyer:**
The generator owner, or a small contractor running 1–5 generators. Often an older owner-operator who uses a جابي (collector) going door to door with a paper receipt book.

**Trigger / Why now:**
- Provincial councils publish a **new ampere price every month**. Baghdad set separate "golden 24h" and "night" rates for Jul, Sept and Oct 2026. Karbala, Basra and Dhi Qar publish their own.
- Since July 2026 Baghdad threatens **IQD 5m fines** for charging above the official price and requires an **official receipt** showing that price.
- In autumn 2026 the Ministry of Oil cut the fuel quota from 40 to 20 L/KVA. Owners need endorsement letters to register new quotas, and councils are fighting over the extra quota (Oct 2026).
- Owners in Dhi Qar report retroactive tax claims of IQD 10–20m per generator for income since 2024. The Ministry of Oil denies it and points to the General Commission for Taxes. Either way, owners now need a revenue record.

**Current workflow:**
1. Each month the owner sees the council's price letter in the news or on Facebook, or hears about it from the mukhtar.
2. The collector visits each subscriber, writes a paper receipt (amperes × rate, golden or normal) and collects cash.
3. The owner keeps a notebook of who paid, who didn't, who disconnected and who changed amperes.
4. Each month the owner gets an endorsement letter from the administrative unit, queues at the depot for the gasoil quota, and buys the rest of the fuel on the open market.
5. When an inspection team or a complaint arrives, the owner has no clean proof of prices charged or fuel received.

**Pain:**
- Fines of up to IQD 5m and possible imprisonment (Basra) for overcharging.
- Fuel shortfalls: in Baghdad the government gasoil lasts about 12 days of the month (964media), and owners threatened to shut down.
- Retroactive tax claims.
- More than 1,400 unlicensed generators in Dhi Qar face fuel cut-off.
- Some councils used price lists and fuel as leverage, so owners want proof that they complied.

**Existing solutions:**
- **"Moalidaty" (نظام مولدتي)** by Excellent Solutions, Iraq: an iOS and web app for subscriber management, paid/unpaid tracking, subscription tiers and receipts.
- **"Jawza" (جوزة)**: an iOS app for subscriptions, payments, ampere count, fuel cost and printed receipts.
- Hobby open-source generator managers on GitHub.
- Paper receipt books sold by stationers.
- Excel.

**Offline evidence:**
- Prices are published as photographed council letters ("وثيقة") and through news sites, not as data.
- Fuel is collected physically at depots against counter-issued endorsement letters.
- Collection is door to door in cash.
- Of the iOS-only apps found, neither shows evidence of large adoption (unverified).

**Offline channel:**
- Generator owners are organised locally, and Nasiriyah owners went on strike in Jan 2026, so informal owner groups and committees exist.
- Fuel depots of the Oil Products Distribution Co., where owners queue every month.
- Spare-parts and engine dealers.
- Municipal and district councils, which hold the licensed lists.
- WhatsApp or phone outreach to numbers from council complaint lines and lists (indirectly).

**Market count:**
About 50,000 generators nationwide (Ministry, via Rudaw 2023). About 25,000–27,000 in Baghdad (Alsumaria 2026), for example 2,400 in al-Ma'mun subdistrict alone.

**The gap:**
The existing apps are generic subscriber-billing tools. I found no evidence that any of them:
1. auto-loads each province's **official monthly ampere price by tier** and blocks receipts above it;
2. produces a printable "compliance pack" for inspectors or councils (prices charged, receipts, subscriber count);
3. keeps a **fuel ledger** that separates quota fuel (with endorsement-letter references) from market fuel, to back requests for more quota and defend against tax claims.

These gaps are based on app-store descriptions only, so they are unverified.

**Possible product:**
An Arabic, Android-first collector app with thermal-printer or WhatsApp receipts. It is preloaded with the council's monthly official price for each province and tier. Monthly reports show amperes sold, revenue and fuel received versus fuel bought.

**MVP:**
- Subscriber list and monthly bills at the official price (the price table is maintained by hand from council letters).
- WhatsApp or SMS receipts.
- Unpaid list.
- Fuel log.
- One-page monthly PDF. Baghdad only.

**Pricing hypothesis:**
IQD 15,000–30,000 per generator per month (about $10–20), or about $100–150/year prepaid through a local agent. Owners would probably pay for software if it is cheaper than one day of a collector's time. Price competition with Moalidaty and Jawza is the main risk.

**Willingness to pay:**
Low to moderate, for software only. A done-for-you service is not needed.

**How to find first customers:**
- Visit one Baghdad subdistrict's depot queue.
- Go through spare-parts shops.
- Use a local agent recruited from collectors (جباة), who already visit every generator.

**Founder access:**
A non-local founder cannot sell this. It needs a local Arabic-speaking partner with a cash-collection path.

**Risks:**
- Two or more local apps already exist.
- Owners are often politically connected, and price compliance is "negotiated" informally (Shafaq: "secret agreements"), so some owners will not *want* records.
- National grid improvements or solar schemes shrink the market.
- Payments.

**Kill condition:**
Interviews with 15 owners in Baghdad show that Moalidaty or Jawza already cover receipts, or that owners deliberately avoid records because of tax and price exposure.

**Score:** 5/10. Pain, frequency, a mandatory price rule and a huge count are all real. But competition already exists, the price point is low, the distribution needs a local partner, and owners have an incentive *not* to document.

**Sources:**
- https://www.gedarbaghdad.com/2026/07/2026.html
- https://hathalyoum.net/articles/4241259
- https://www.lnaiq.com/2026/07/05/210774/
- https://basra.gov.iq/ar/index.php/permalink/29670.html
- https://non14.net/190333
- https://www.almaali-iraq.com/%D9%81%D8%B1%D8%B6-%D8%BA%D8%B1%D8%A7%D9%85%D8%A9-5-%D9%85%D9%84%D8%A7%D9%8A%D9%8A%D9%86-%D8%AF%D9%8A%D9%86%D8%A7%D8%B1-%D8%A8%D8%AD%D9%82-%D8%A3%D8%B5%D8%AD%D8%A7%D8%A8-%D8%A7%D9%84%D9%85%D9%88%D9%84/
- https://www.lnaiq.com/2026/10/04/218997/
- https://964media.com/717281/
- https://almadapaper.net/436638/
- https://shafaq.com/ar/%D8%A7%D9%82%D8%AA%D8%B5%D9%80%D8%A7%D8%AF/%D9%88%D8%B2%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D9%86%D9%81%D8%B7-%D9%84%D8%A7-%D8%B6%D8%B1%D8%A7-%D8%A8-%D8%B9%D9%84%D9%89-%D8%B5%D8%AD%D8%A7%D8%A8-%D8%A7%D9%84%D9%85%D9%88%D9%84%D8%AF%D8%A7%D8%AA-%D8%A7%D9%84%D8%A7%D9%87%D9%84%D9%8A%D8%A9
- https://rudaw.net/english/middleeast/iraq/17032023
- https://moalidaty.excellentsolutions.iq/
- https://apps.apple.com/us/app/%D9%86%D8%B8%D8%A7%D9%85-%D9%85%D9%88%D9%84%D8%AF%D8%AA%D9%8A-%D9%84%D8%A7%D8%AF%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D9%85%D9%88%D9%84%D8%AF%D8%A7%D8%AA/id6740159931
- https://apps.apple.com/bz/app/%D8%AC%D9%88%D8%B2%D8%A9/id6645736315
- https://shafaq.com/ar/مجتـمع/المولدات-ال-هلية-في-العراق-جشع-واتفاقات-سرية-واتهامات-تطال-جهات-حكومية

---

### Opportunity: Foreign-worker permit and residency renewal tracker for Iraqi employers and recruitment offices (Instructions No. 1 of 2026)

**Industry:**
Recruitment and employment offices (شركات تشغيل واستقدام العمالة الأجنبية), plus SMEs that employ foreign workers: hotels, restaurants, construction subcontractors and cleaning firms.

**Buyer:**
The owner or PRO clerk of a licensed recruitment company, or the HR or admin person at a mid-size employer with 10 or more foreign workers.

**Trigger / Why now:**
- The Ministry of Labour issued Instructions No. 1 of 2026 together with the Supreme Judicial Council and the Interior Ministry.
- A work permit is required before starting work, and it must be **renewed annually in the last 30 days** through the **Ur portal**. Renewal needs a medical certificate, a notarised contract and the passport and visa.
- The rules add a 50% cap on foreign staff and a first offer to registered Iraqi job-seekers.
- A planned "employer record" will tighten scrutiny of repeat violators before new approvals (Al-Arabiya, Jan 2026).
- Deportation campaigns against violating workers are running.

**Current workflow:**
1. The office keeps passports, visas and permit expiry dates in a notebook or Excel.
2. It chases medical certificates and contract notarisation.
3. It files the renewal on the Ur portal or at the counter and pays IQD 4.72m for the permit and IQD 2m for residency.
4. It tracks the residency renewal with the Residency Directorate separately.
5. It keeps the foreign-staff ratio and the offer to Iraqi job-seekers documented.

**Pain:**
- High fees: a missed window means a new permit at the full fee, or deportation.
- Two agencies are involved: Labour for the permit and Interior for residency.
- The new employer-compliance record threatens future approvals.

**Existing solutions:**
- Paperwork runners (معقبين) and law firms (for example the Iraqi Lawyers Network's guidance).
- The recruitment offices themselves.
- The Ur portal.
- Generic HR software (Odoo partners), which has no Iraq permit logic.

**Offline evidence:**
- Counter filing and notarisation.
- The field is dominated by معقبين.
- No Iraq-specific permit-tracking software was found in searches.

**Offline channel:**
- The licensed recruitment-company list held by the Ministry of Labour's employment department (it exists, but I did not find it public).
- Hotel and restaurant associations in Baghdad, Erbil and Karbala.
- Law firms that publish guides on the 2026 instructions.

**Market count:**
About 45,000–47,000 licensed foreign workers (Ministry of Labour, 2026), so about 47,000 renewals a year. The number of recruitment companies is unknown.

**The gap:**
Nobody tracks the Labour permit, the Interior residency and the medical-certificate expiries together, or keeps the ratio and Iraqi-first evidence that the new employer record will judge.

**Possible product:**
A deadline tracker per worker with document checklists and ratio reporting, sold to recruitment offices for multiple clients.

**MVP:**
- Worker register with expiry alerts (WhatsApp).
- Checklist for each renewal.
- A ratio sheet per employer.

**Pricing hypothesis:**
$30–80/month per recruitment office. More realistically, a per-renewal service fee bundled with a local agent.

**Willingness to pay:**
For software, low. For a service, yes, because businesses already pay معقبين.

**Founder access:**
Needs a local. The work is counter-based and relationship-based.

**Risks:**
- Low volume.
- Most foreign labour is illegal and never enters the system.
- The Ur portal may add its own alerts.

**Kill condition:**
Recruitment offices say they manage fewer than 50 active workers each, or that the Ur portal already sends expiry reminders.

**Score:** 3/10. It is a real 2026 trigger, but the volume is small and the pain is mostly absorbed by paid runners.

**Sources:**
- https://kerbalacss.uokerbala.edu.iq/wp/blog/archives/11121
- https://shofnews.com/135310/
- https://www.almasryingulf.com/%D8%AA%D8%AC%D8%AF%D9%8A%D8%AF-%D8%A5%D8%AC%D8%A7%D8%B2%D8%A9-%D8%A7%D9%84%D8%B9%D9%85%D9%84-%D9%81%D9%8A-%D8%A7%D9%84%D8%B9%D8%B1%D8%A7%D9%82/
- https://iraqilawyersnetwork.com/%D8%A5%D8%AC%D8%A7%D8%B2%D8%A9-%D8%B9%D9%85%D9%84-%D8%A7%D9%84%D8%A3%D8%AC%D8%A7%D9%86%D8%A8-%D9%81%D9%8A-%D8%A7%D9%84%D8%B9%D8%B1%D8%A7%D9%82-2026%D8%AA%D8%B9%D9%84%D9%8A%D9%85%D8%A7%D8%AA-%D8%AC/
- https://www.kurdistan24.net/ar/story/892853/
- https://www.alarabiya.net/aswaq/economy/2026/01/07/%D8%AA%D8%B1%D8%AD%D9%8A%D9%84-%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84%D8%A9-%D8%A7%D9%84%D8%A7%D8%AC%D9%86%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D8%AE%D8%A7%D9%84%D9%81%D8%A9-%D9%88%D8%B3%D9%8A%D9%84%D8%A9-%D9%84%D8%AA%D9%88%D9%81%D9%8A%D8%B1-%D9%81%D8%B1%D8%B5-%D8%A7%D9%84%D8%B9%D9%85%D9%84-%D9%84%D9%84%D8%B9%D8%B1%D8%A7%D9%82%D9%8A%D9%8A%D9%86

## 3. Rejected

- **Ration agents (PDS):** the Ministry of Trade's own "Wakeeli" agent app and the citizen ration-card app are the substitute. Source: https://www.almaali-iraq.com/%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D8%A9-40-%D9%85%D9%84%D9%8A%D9%88%D9%86-%D9%85%D8%B4%D9%85%D9%88%D9%84-%D8%A8%D8%A7%D9%84%D8%A8%D8%B7%D8%A7%D9%82%D8%A9-%D8%A7%D9%84%D8%AA%D9%85%D9%88%D9%8A%D9%86/
- **Money exchange companies:** the CBI already mandates electronic transaction systems, the field is regulated finance with heavy AML liability, and licences are revoked often. It is not a solo-founder market. Source: https://cbi.iq/news/view/1779 (summary)
- **Gold shops:** there is a hallmarking law, but no recurring filing. Enforcement is by inspection campaigns. Source: https://ina.iq/ar/economie/265843-.html
- **Scrap metal:** there is an export ban and inter-province movement needs approval, but the trade is dominated by smuggling networks. Source: https://jummar.media/ar/2025/12/07/
- **Water-well drilling:** about 1,000 approved wells a year and the state controls the process. Source: https://www.alsumaria.tv/news/localnews/563407/
- **Private fuel stations:** the Oil Products Distribution Co. runs the POS and automation rollout. Source: https://oil.gov.iq/index.php?article=1951
- **Poultry farms:** about 7,000 farms but no recurring filing found, and the pain is smuggling and prices. Source: https://shafaq.com/ar/تقارير-وتحليلات/التهريب-شبح-يطارد-زراعة-الدواجن-في-العراق-ويهدد-العاملين-فيها

## 4. Method notes

- **What worked:** Arabic queries naming the exact local term plus the regulator action, for example "تسعيرة الأمبير مجلس المحافظة غرامة" or "تعليمات رقم 1 لسنة 2026". Iraqi news sites (Shafaq, Al-Mada, 964media, provincial government sites) publish regulator letters almost verbatim, and gave counts and fines.
- **What didn't work:** Iraqi licensing registers are not online, so no register-based counts. Generic queries about water plants or fuel stations returned other Arab countries. Exchange-company searches returned only CBI pages without counts.
- **Iraq-specific insight:** the strongest "quiet" obligations here are set **monthly by provincial councils** (generator prices) and **by ministry-allocated quotas** (fuel), not by national registers. Several regulators (Trade, Oil, CBI) build their own apps, which removes the third-party gap.

Research model: Opus
