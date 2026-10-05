# Jordan: Offline (Quiet) Industries Pass

*Research date: 2026-10-05. Budget: 20 WebSearch calls (all used, almost all in Arabic, extended mode). WebFetch and GitHub tools were not used. Anything a search result did not confirm is marked **unverified** or **estimate**. This pass does not repeat the opportunities in `research/countries/jordan.md`: TPA claims, the migrant-worker permit tracker for factories, pharma serialization and JoFotara for professionals.*

**Headline:** Jordan's quiet industries are small, and most are regulated by **in-person inspection** (governor's committees, Ministry of Agriculture field committees, Ministry of Water raids) rather than by **recurring filings**. That leaves little structured data for software to move. The best leads are three registered, countable groups with an association or a public list to sell through: about 900 jewellers under AML instructions, 161 licensed domestic-worker recruitment offices, and 1,227 licensed nurseries under the new 2024 Nursery Regulation. None scores above 4.5/10. Each is a small Jordanian market, so it works only as a cheap, narrow product, or as a Levant/Gulf add-on.

---

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Gold and jewellery shops (الصاغة) | AML/CFT instructions for jewellery and precious-metal shops (2014 instructions; increased judicial bond and penalties); customer ID and due diligence | Paper sale and purchase books; specialist software covers weight and karat but not AML files (see opportunity) | ~900 shops (hala.jo, Dec 2025) | **Candidate** | Countable, has a syndicate, enforced obligation; but a small market and existing gold POS vendors |
| Domestic-worker recruitment offices (مكاتب استقدام) | MoL licence; per-worker cycle (visa, medical, work permit, residency, replacement guarantee) | MoL directorate handles licensing in person at Abdali; office list published as a static MoL page | 161 licensed offices (MoL list, date **unverified**) | **Candidate** | Public list plus an association (raa.jo); Saudi-built tools exist but are tuned to Musaned/ZATCA, not MoL/JoFotara |
| Nurseries (دور الحضانة), including new home nurseries | Nursery Regulation 2024 plus instructions now in force: licence, renewal, inspection, mandatory CCTV for private nurseries (art. 9) | Licence applications "on paper or electronically" at the field directorate; KinJo portal only lists nurseries and takes home-nursery applications | 1,227 licensed nurseries, 42,945 children (2024, reformjo.org) | **Candidate (weak)** | New regulation and a countable register; but low willingness to pay and a generic childcare-software trap |
| Households employing domestic workers | Work permit and residency renewals; domestic workers are **excluded** from mandatory SSC | Done through recruitment offices or expediters | Count not found in this pass | Rejected as its own segment | No payroll or social-security filing to automate; renewals are covered via recruitment offices (above) and the country report's permit tracker |
| Scrap metal dealers (الخردة/السكراب) | Interior Minister ordered governors to check licences and security clearances; inspection committees per governorate | Al Rai reports that "all scrap shops are unlicensed and not followed by governors" | Trade volume claimed at JOD 50M (jordanzad, older) | Rejected | No working register or recurring filing; enforcement is ad hoc raids after cable theft |
| Sheep and goat keepers / livestock traders | National electronic tagging (chips) through the MoA and the Sanad app; feed subsidy only for tagged flocks; 3 valid vaccinations in 2026 | Field committees tag animals; holding books (دفاتر حيازة) renewed in person | 3.956M sheep (2024, Ammon) | Rejected | Government runs the system end to end; herders are low-income and the subsidy is the incentive, not software |
| Olive presses (معاصر الزيتون) | MoA Instructions 11/ز of 2024 (licensing and operation, season set by minister); zibar (wastewater) disposal enforced by governors | Seasonal; fines by governors; ARIJ investigation on illegal zibar dumping | 147 presses (owners' statement, hala.jo Oct 2024); 99–130 in other sources | Rejected (watch) | Too few buyers, a 3-month season, and no confirmed recurring filing |
| Water tankers and private wells | Groundwater Control Regulation; selling well water needs secretary-general approval; drilling rigs need a licence | Enforcement is by raids (seized pumps, citations) | Not found | Rejected | No filing workflow found for Jordan; the tanker GPS and platform obligation found was Saudi, not Jordanian |
| Pesticide shops | MoA shop licence (JOD 20 to open, JOD 10 to renew) | Licensing at agriculture directorates; inspection campaigns | Not found | Rejected | No mandatory sales register confirmed for Jordan (the detailed requirements in results were Egyptian) |
| Poultry farms / veterinary medicines | Veterinary Medicines Control Regulation | ARIJ reports antibiotics put in drinking water "without any controls" | Not found | Rejected | No record-keeping obligation that is actually enforced was found |
| Taxi and service (سرفيس) operators | LTRC; 2025 smart-app regulation (JOD 100k bank guarantee for platforms) | Individual licence holders | Not found | Rejected | The obligations fall on platforms and the LTRC's own smart systems, not on small operators |
| Money changers | CBJ AML supervision | Not offline: a bank-supervised sector | Not counted | Rejected (not quiet) | Supervised by the CBJ with established vendors; not a quiet industry |

---

## 2. Strongest opportunities

### Opportunity: Used-gold purchase register and AML file for Jordanian jewellers

**Industry:**
Gold and jewellery retail and workshops (محلات تجارة وصياغة الحلي والمجوهرات).

**Buyer:**
Owner or son-of-owner of a 1–3-shop family jeweller, mostly in downtown Amman, Irbid and Zarqa gold souqs.

**Trigger / Why now:**
Jordanian jewellery shops are subject to AML/CFT instructions issued for "jewellery-making and precious-metal and gemstone shops" (2014). The government later added a higher judicial bond and tougher action against violators (Al Mamlaka). Gold prices hit records in 2025–2026, which raises the value of each used-gold purchase and makes customer due diligence heavier. A new 2025–2026 Jordanian AML amendment for this sector is **unverified**. The 2026 ministerial decisions 172/173 found in search are **Kuwaiti**, not Jordanian. They show a regional trend only.

**Current workflow:**
1. A customer sells old gold. The jeweller weighs and tests it, then pays cash.
2. The jeweller copies the customer's national ID or passport details into a paper purchase book, or photographs the ID on a phone (**unverified** which is typical).
3. The sale side goes through a gold POS or accounting program, now with JoFotara clearance.
4. For a suspicious transaction, the owner must report to the AML Unit. Records must be produced at inspection.

**Pain:**
The obligation is enforced through bonds and penalties. Customer data sits in paper books that can't be searched. A purchase from someone selling stolen gold exposes the shop to police seizure (**unverified** frequency). Direct evidence of complaints was not found in this pass.

**Existing solutions:**
- Gold-shop POS and accounting with weight and karat fields: DEXEF, Daysum Gold ERP, Al-Waseet (Saudi), plus general JoFotara-ready tools (Qoyod, Fawtraplus).
- The paper purchase book (stationer).
- The syndicate's guidance and workshops with the Ministry of Industry, Trade and Supply.

**Offline evidence:**
The syndicate communicates through Instagram and in-person workshops. No Jordanian AML tool for jewellers appeared in search. Software listings cover inventory and invoicing only.

**Offline channel:**
The General Syndicate of Jewellery Shop Owners (founded 1972, Amman; public phone listing on dellooni). A demo at a syndicate workshop. Walk-ins in the gold souqs (Amman downtown has dense clusters). Partnership with a gold POS vendor as an add-on.

**Market count:**
About 900 shops (hala.jo, December 2025).

**The gap:**
Gold POS tools record what is bought (weight, karat, price) but not a structured customer due-diligence file: an ID scan, a check against the UN/local sanctions list, a repeat-seller flag, a risk score per transaction, and an export the inspector accepts.

**Possible product:**
A tablet "buy-from-customer" screen: scan the ID, weigh, photograph the item, and get an automatic sanctions/PEP check. Repeat-seller and threshold flags apply, and a monthly register PDF is produced for inspection. It exports purchases to the shop's POS or JoFotara tool.

**MVP:**
An Arabic web app on a phone or tablet with ID-photo OCR, a purchase register, a sanctions-list match, and a PDF register export.

**Pricing hypothesis:**
JOD 10–20/month per shop (**estimate**). Software only; owners won't pay for a service at this price point.

**How to find first customers:**
The syndicate and walk-ins in the souqs.

**Risks:**
- Owners may prefer cash anonymity and resist recording.
- The ministry or the syndicate could issue a free form.
- POS vendors can add the feature.
- At about 900 shops × JOD 15, the ceiling is roughly JOD 160k a year.
- Founder access: needs a local Arabic-speaking seller with credibility in the souq; a non-local solo founder is unrealistic.

**Kill condition:**
Interviews show that inspectors never ask for customer records, or that the dominant gold POS already captures ID scans.

**Score:** 4/10 (pain 4, frequency 8, mandatory 6, fragmentation 2, competition 5, incumbent gap 5, buyer access 7, WTP 3, MVP 8, distribution 6 via the syndicate)

**Sources:**
- 900 shops: https://www.hala.jo/2025/12/900-%D9%85%D8%AA%D8%AC%D8%B1-%D9%84%D8%A8%D9%8A%D8%B9-%D8%A7%D9%84%D8%AD%D9%84%D9%8A-%D9%88%D8%A7%D9%84%D9%85%D8%AC%D9%88%D9%87%D8%B1%D8%A7%D8%AA-%D9%81%D9%8A-%D8%A7%D9%84%D8%A3%D8%B1%D8%AF%D9%86/
- Government applies AML instructions to gold shops: https://almamlakatv.com/news/153485
- 2014 AML instructions for jewellery shops: https://alrai.com/article/661193
- Syndicate: https://www.instagram.com/jordanianjewelerssyndicate/ ; https://dellooni.com/ar-jo/u/17432/
- Competitors: https://dexef.com/apps/gold-store-accounts-software/ ; https://daysum.net/gold-erp-ar/ ; https://al-waseet.com.sa/gold/
- Kuwaiti 2026 decisions (regional precedent only): https://sarmad.com/341933/

---

### Opportunity: Case tracker for domestic-worker recruitment offices (MoL + residency + JoFotara)

**Industry:**
Domestic-worker recruitment offices (مكاتب استقدام واستخدام العاملين في المنازل).

**Buyer:**
Owner or office manager of a licensed recruitment office (usually 2–8 staff).

**Trigger / Why now:**
In 2026 the MoL is moving its services online, but electronic work-permit renewal is restricted (see the country report). The MoL re-opened licensing to non-Jordanian-owned offices after a freeze dating from 2012 (husna.fm), so new offices are entering. JoFotara invoicing is mandatory for these offices as service businesses.

**Current workflow:**
1. Take the household's order and deposit, and select a worker CV from the source-country agent.
2. Track visa, entry, the medical test, the MoL work permit, and the residency permit with the Residency and Borders department, each on a separate deadline.
3. Manage the replacement or guarantee period if the worker leaves early; refund or replace.
4. Renew permits and residency yearly for client households (a recurring fee).
5. Invoice through JoFotara; keep the files in folders and WhatsApp.

**Pain:**
Every worker is a multi-agency case with fixed deadlines, and fines fall on the household or office when a permit lapses (amounts **unverified**). Direct complaint evidence was not found in this pass.

**Existing solutions:**
- Saudi recruitment-office software: Istqdam (Arabia), Jusoor ERP, Microtec, Salis ERP. All are built around Saudi Musaned contracts and ZATCA.
- Daftra and Qoyod "recruitment office" modules (generic accounting; both serve Jordan for JoFotara).
- Excel, paper files and expediters (معقبين).

**Offline evidence:**
MoL licensing happens in person at the Domestic Workers Directorate in Abdali. The office list is a static MoL web page. Jordanian offices advertise through phone-number directories (ayyamco, masajo), not software.

**Offline channel:**
The MoL's public list of 161 licensed offices (names, owners, addresses, active or suspended), with phone or WhatsApp outreach. The recruitment offices' association site raa.jo publishes "licensed offices" (that it is the owners' association is **unverified**). Visits in Amman, where the offices cluster.

**Market count:**
161 licensed offices (MoL list; snapshot date **unverified**).

**The gap:**
Saudi-built tools model Musaned steps that don't exist in Jordan. Daftra and Qoyod handle accounting, not the per-worker deadline chain across the MoL, the medical test and residency, or the guarantee-period clock.

**Possible product:**
A per-worker case board with a Jordan-specific step template (visa → medical → permit → residency → guarantee end → annual renewal). It sends WhatsApp reminders to client households and does JoFotara-cleared invoicing for fees and renewals.

**MVP:**
Case list, step checklist with due dates, a household reminder list, and a CSV/Excel import. JoFotara is handled through an existing connector.

**Pricing hypothesis:**
JOD 30–60/month per office (**estimate**). Software is plausible because offices earn per-worker fees, but a done-for-you renewal service would compete with expediters.

**How to find first customers:**
The MoL list and raa.jo.

**Risks:**
- The market is tiny: 161 × JOD 45 ≈ JOD 87k a year at most.
- It overlaps with the country report's migrant-worker permit tracker; these should be merged into one product with a domestic-worker mode.
- Daftra could add a Jordan template.
- Founder access: a local partner is needed.

**Kill condition:**
Five of ten offices already use Daftra or Qoyod and are satisfied, or MoL shifts renewals online in bulk.

**Score:** 4/10 (pain 5, frequency 7, mandatory 7, fragmentation 4, competition 5, incumbent gap 5, buyer access 9, WTP 4, MVP 7, distribution 7 via MoL list)

**Sources:**
- MoL list of recruitment offices: https://mol.gov.jo/AR/List/%D9%85%D9%83%D8%A7%D8%AA%D8%A8_%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85_%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D9%84%D9%8A%D9%86_%D8%A8%D8%A7%D9%84%D9%85%D9%86%D8%B2%D9%84
- Licensing conditions and the 161-office count: https://husna.fm/%D9%85%D8%AD%D9%84%D9%8A/%D8%B4%D8%B1%D9%88%D8%B7-%D8%A7%D8%B3%D8%AA%D9%82%D8%AF%D8%A7%D9%85-%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D9%84%D9%8A%D9%86-%D9%81%D9%8A-%D8%A7%D9%84%D9%85%D9%86%D8%A7%D8%B2%D9%84
- Licensed offices list: https://raa.jo/authnticated/
- Licensing service (gov portal): https://portal.jordan.gov.jo/wps/portal/Home/GovernmentEntities/Ministries/MinistryServiceDetails_ar/ministry%20of%20labor/services/licensing%20recruitment%20of%20foreign%20workers%20working%20in%20homes%20offices?lang=ar
- Domestic workers excluded from mandatory SSC: https://www.mol.gov.jo/AR/Modules/FAQ
- Competitors: https://istqdam.com/ ; https://jusoor-tech.com/muhasaba-makatib-istqdam.html ; https://www.daftra.com/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9-%D8%B4%D8%B1%D9%83%D8%A7%D8%AA-%D9%88%D9%85%D9%83%D8%A7%D8%AA%D8%A8-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%82%D8%AF%D8%A7%D9%85/ ; https://qoyod.com/blog/qoyod-sectors/%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D8%AC-%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9-%D9%85%D9%83%D8%A7%D8%AA%D8%A8-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%82%D8%AF%D8%A7%D9%85

---

### Opportunity: Licence-renewal and inspection-file kit for nurseries under the 2024 Nursery Regulation

**Industry:**
Private, workplace and home nurseries (دور الحضانة الخاصة والمنزلية وحضانات أماكن العمل).

**Buyer:**
Owner-director of a private nursery; HR manager of an employer obliged to provide a workplace nursery under the Labour Law; a woman running a newly licensed home nursery (up to 10 children).

**Trigger / Why now:**
The Cabinet approved the Nursery Regulation 2024 (Official Gazette, end of February 2024), and its implementing instructions are now in force. It covers licensing of all nursery types, inspection, violations, mandatory CCTV for private nurseries (art. 9), and a new simplified home-nursery category. The MoSD offers grants to set up and upgrade private nurseries. The KinJo portal (donor-supported, **unverified** funder) takes home-nursery applications.

**Current workflow:**
1. Submit the licence application or renewal on paper or electronically at the MoSD field directorate; pay the JOD 200 fee at the Central Bank (as stated on KinJo).
2. Keep child files, staff qualification files, a CCTV system and safety evidence for inspections.
3. Respond to inspection findings and violations.
4. Bill parents monthly (and, under JoFotara, clear invoices).

**Pain:**
Inspection and violations are explicit in the regulation. Paper child and staff files are typical (**unverified**). The pain is moderate and mostly once a year (renewal) plus inspection visits.

**Existing solutions:**
- KinJo portal (free; registry plus home-nursery applications).
- The MoSD e-service for licensing and renewal on the government portal.
- Generic childcare apps (global and regional; specific Jordanian vendors not verified in this pass).
- JoFotara connectors for billing.

**Offline evidence:**
The MoSD accepts paper applications at field directorates. Fees are paid at the Central Bank. Nursery directories (ikidsjordan) explain licensing by blog post, which suggests owners lack a tool.

**Offline channel:**
The KinJo public registry of licensed nurseries (names and locations across 12 governorates) for phone or WhatsApp outreach. The MoSD nursery-grant cohort. IFC/Reform-unit workshops for nursery owners.

**Market count:**
1,227 licensed nurseries, 42,945 children (cumulative, 2024; reformjo.org).

**The gap:**
No tool maps the 2024 regulation's checklist (staffing ratios, space, CCTV, child files) to a ready inspection file plus a renewal calendar. Generic childcare apps target parent communication.

**Possible product:**
Arabic nursery admin: child and staff register in the regulation's format, a renewal and inspection checklist, an incident log, and parent billing with JoFotara via a connector.

**MVP:**
A checklist plus registers for one nursery type (private), PDF inspection-pack export, and renewal reminders.

**Pricing hypothesis:**
JOD 10–25/month (**estimate**). Home nurseries pay less than JOD 5, or nothing.

**How to find first customers:**
The KinJo registry and the MoSD grant cohort.

**Risks:**
- This slides into generic childcare management (a brief trap).
- Willingness to pay is low.
- The donor-backed KinJo portal may add records features for free.
- Founder access: needs a local seller; a non-local solo founder could only sell it through a donor programme.

**Kill condition:**
Inspectors only check physical premises, not files, or KinJo adds a free record-keeping module.

**Score:** 3.5/10

**Sources:**
- Nursery Regulation 2024: https://reformjo.org/ar-jo/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA/%D8%A7%D9%84%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1/%D9%86%D8%B8%D8%A7%D9%85-%D8%AF%D9%88%D8%B1-%D8%A7%D9%84%D8%AD%D8%B6%D8%A7%D9%86%D8%A9-%D9%84%D8%B3%D9%86%D8%A9-2024-%D9%84%D8%AA%D8%A3%D9%85%D9%8A%D9%86-%D8%A8%D9%8A%D8%A6%D8%A9-%D8%A2%D9%85%D9%86%D8%A9-%D9%84%D9%84%D8%B7%D9%81%D9%84-%D9%88%D8%AA%D9%85%D9%83%D9%8A%D9%86-%D8%A7%D9%84%D9%85%D8%B1%D8%A3%D8%A9/
- Regulation text (MoSD PDF): https://www.mosd.gov.jo/ebv4.0/root_storage/ar/eb_list_page/%D9%86%D8%B8%D8%A7%D9%85_%D8%AF%D9%88%D8%B1_%D8%A7%D9%84%D8%AD%D8%B6%D8%A7%D9%86%D8%A9.pdf
- Instructions in force: https://alghad.com/Section-199/%D8%A7%D9%84%D8%BA%D8%AF-%D8%A7%D9%84%D8%A3%D8%B1%D8%AF%D9%86%D9%8A/%D8%AF%D8%AE%D9%88%D9%84-%D8%AA%D8%B9%D9%84%D9%8A%D9%85%D8%A7%D8%AA-%D8%AA%D9%86%D8%B8%D9%8A%D9%85-%D8%AF%D9%88%D8%B1-%D8%A7%D9%84%D8%AD%D8%B6%D8%A7%D9%86%D8%A7%D8%AA-%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9-%D8%AD%D9%8A%D8%B2-%D8%A7%D9%84%D8%AA%D9%86%D9%81%D9%8A%D8%B0-1767454
- KinJo portal: https://www.kinjordan.org/
- MoSD grants: https://a5r5br.net/jordan/local-news/8180087
- Licensing e-service: https://portal.jordan.gov.jo/wps/portal/Home/GovernmentEntities/Ministries/MinistryServiceDetails_ar/ministry+of+social+development/services/serv10?lang=ar

---

## 3. Rejected

- **Scrap-metal dealer register.** It looked like a perfect police-register case, given cable and transformer theft and the new 2025 Electricity Law with tougher penalties. But Al Rai reports that scrap yards are essentially unlicensed and unmonitored. The Interior Ministry's response is security clearances and governor inspection committees, not a transaction register. There is no recurring filing to automate, and buyers wouldn't pay.
- **Livestock tagging and traders.** The MoA runs electronic chip tagging through field committees and the Sanad app, tied to the feed subsidy. The substitute is the government system itself, and herders have low willingness to pay.
- **Olive-press compliance.** The 2024 instructions are real, but there are only about 147 presses, the season lasts about 3 months, and zibar enforcement is by governor fines. No recurring report was found.
- **Water tankers and well drillers.** Enforcement takes the form of raids on illegal abstraction. The tanker GPS and platform rule found was Saudi (MEWA), not Jordanian.
- **Household employers (payroll and social security).** Domestic workers are excluded from mandatory SSC, so there is nothing to file monthly. Permit renewals are covered by the recruitment-office idea and the country report.
- **Pesticide shops, poultry farms and veterinary medicines.** No enforced sales or treatment register was confirmed for Jordan.
- **Taxi, service and minibus operators.** The 2025 regulation targets ride-hailing platforms, and the LTRC deploys its own smart systems.
- **Money changers.** They are CBJ-supervised with established AML vendors, so they are not quiet.

## 4. Method notes

- Arabic queries naming the regulator plus the trade (وزارة الزراعة + معاصر, وزارة العمل + مكاتب استقدام) worked. Count queries like "عدد ... في الأردن" surfaced hala.jo and Ammon statistics stories.
- Generic Arabic queries were flooded with **Saudi, Kuwaiti and Egyptian** results (MEWA, MoCI, youm7). Adding "الأردن" plus a Jordanian body name (المفرق, سلطة المياه, ammanchamber) helped.
- In Jordan, enforcement shows up as **raids and governor committees** rather than filings. That is a signal that most quiet industries here lack a recurring data workflow.
- Official instruction PDFs exist on moa.gov.jo and mosd.gov.jo, but their text couldn't be read without WebFetch, so record-keeping clauses remain **unverified**.
