# Kazakhstan: Indie-Hacker Opportunity Research

Research date: 2026-10-05. Budget: 16 WebSearch calls (medium market), searched mainly in Russian, the working language of Kazakh accounting and compliance. WebFetch was not used. Facts come from search-result snippets. Anything not confirmed is marked *unverified* or *estimate*.

## Accessibility check

There are no US/EU/UK sanctions on Kazakhstan as a country, and selling software there is legally open to a foreign founder. Practical frictions:
- **Signing keys.** Integrations with state systems (IS ESF, the HR.enbek labour-contract system ESUTD, the marking system IS MPT) need the client's NCA RK digital signature (ЭЦП). The product must sign on the client side (desktop or browser agent), not hold the client's keys. *(Architecture assumption, not verified against API docs.)*
- **Payments.** Local billing realistically means Kaspi or a Kazakh legal entity or reseller. Card billing via Stripe from abroad is possible but unverified for KZ cards.
- **Data storage.** Kazakhstan's personal-data law requires personal data to be stored in-country. This matters for HR and labour data, less for goods and invoice data. *(Known from general legal background, not re-verified in this session.)*
- **Sanctions exposure.** Compliance risk mainly sits with Kazakh clients who trade with Russia. It is not a blocker for selling software to them.

Verdict: **accessible.** The bigger barrier is the market itself. Most companies keep their books in 1C, and 1C partner integrators control distribution.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Wholesale / importers / accountants (all VAT payers) | Matching four records: e-invoices (ESF), goods waybills (SNT), the tax system's virtual warehouse (VS) and the EAEU import declaration (form 328.00) | **Opportunity** | New Tax Code from 2026-01-01 (VAT 16%), new SNT goods list from 2026-01-01, 158k VAT payers (+22k in H1 2026). The hotlines are full of matching questions. |
| Accounting outsourcing firms | Monitoring ESF, SNT and VS exceptions across many client tax IDs (BINs) | **Opportunity** (same core as above, sold to a different buyer) | One accountant serves many BINs. 1C works one company database at a time. |
| Construction engineering / technical supervision | Technical-supervision log, author-supervision schedule, monthly construction-progress report | **Opportunity (moderate)** | New Construction Code from 2026-07-01 with mandatory forms. Records must be electronic for state-funded projects. |
| Industrial operators (environmental) | Quarterly reports on the production environmental control programme (ПЭК) | **Opportunity (moderate, consultant-led)** | Quarterly and mandatory for category I and II sites. The work is done by consultants, who become the channel. |
| All employers (HR) | Registering labour contracts in ESUTD (via HR.enbek) | Rejected | New fines from March 2026, but HR.enbek is free and dogovor24.kz and 1C already automate it. |
| Auto-service / auto-parts retail | Motor-oil and antifreeze marking (from Feb and Sep 2026), light-industry goods marking (Dec 2026) | Too competitive | Covered by the national marking operator, 1C, POS vendors and many marking integrators. |
| Pharmacies | Prescription registers for free outpatient medicines (АЛО), reconciliation with the state single distributor SK-Pharmacy / insurance fund FSMS | Poor distribution / closed system | Locked inside state systems. Small pharmacies have no say in the workflow. |
| Retail (alcohol, fuel, refrigerators) | Virtual-warehouse SNT for goods on the mandatory list | Folded into opportunity 1 | Same core workflow. |

## Opportunities

### Opportunity: ESF/SNT/Virtual Warehouse/328.00 reconciliation and exception monitor ("VS-Sverka")

**Industry:**
Wholesale trade, importers from EAEU countries (Russia, Kyrgyzstan, Belarus) and from China via EAEU, distributors of goods on the mandatory SNT list (fuel, alcohol, refrigerators and others).

**Buyer:**
Chief accountant or warehouse accountant at VAT-registered trading companies with 5–100 staff, plus accounting outsourcing firms that serve many such companies. Job ads exist for "бухгалтер виртуального склада" (virtual-warehouse accountant), a role created only for this workflow (hh.ru vacancy 135768496).

**Trigger / Why now:**
- New Tax Code in force from 2026-01-01: VAT rose from 12% to 16%, the registration threshold is 10,000 MRP (about 43m KZT), and new administration rules apply.
- Ministry of Finance order No. 657 of 2025-10-31: new SNT forms, rules and goods list from 2026-01-01. SNT through the virtual-warehouse module is mandatory for fuel, alcohol, refrigerators and freezers.
- VAT payers grew from 135,845 to 158,194 in H1 2026, so more than 22k companies are new to VAT, ESF and SNT discipline.
- SNT fines under Code of Administrative Offences art. 283-1: 5 MRP up to 40 MRP for wrong data.

**Current workflow:**
1. Goods arrive from an EAEU supplier. The buyer issues an import SNT in IS ESF.
2. Goods are credited to the buyer's virtual warehouse, but only if the SNT is right. When the supplier issued no SNT or issued it wrongly, goods "hang" waiting.
3. By the 20th of the following month the accountant files form 328.00 (import declaration and indirect-tax payment) and manually matches each 328.00 to one or more SNTs. "How do I match several SNTs to one 328.00?" is a standing hotline question.
4. Outgoing ESFs must reference the SNT or 328.00 number and the source of origin. Stock in 1C and stock in the virtual warehouse must be kept in sync, including kitting and write-offs.
5. At month or quarter end the accountant reconciles 1C stock against virtual-warehouse balances, chases suppliers for missing SNTs, and fixes reserves and write-offs before VAT return form 300.

**Pain:**
- Recurring hotline questions on pro1c.kz, cdb.kz and uchet.kz: missing SNTs, matching 328.00 to SNTs, writing goods off the virtual warehouse before 328.00 is filed, and ESF without an SNT reference.
- Dedicated job role ("virtual-warehouse accountant").
- Paid seminars from accounting-information services on "how not to make mistakes with ESF/SNT/VS".
- Fines per document, a risk that goods are treated as unbacked ("бестоварные") transactions, and VAT-credit risk, which now costs more at 16%.

**Existing solutions:**
- IS ESF web portal (free, the state's own tool). Manual, one company at a time.
- 1C:Бухгалтерия для Казахстана plus the "1C:ЭСФ для Казахстана" service, which exchange ESF, SNT and VS data from 1C. This is the dominant incumbent.
- 1C integrators and consultants (1cbit.kz, pro1c.kz), who configure and fix it for a fee.
- Online accounting services (mybuh.kz) and the paid information system cdb.kz for guidance.
- Commercial ERP/WMS tools (MoySklad and others): ESF/SNT support depth *unverified*.

**The gap:**
1C *sends and receives* the documents. It does not give a cross-document **exception view** that matches SNT ↔ 328.00 ↔ VS balance ↔ ESF ↔ 1C stock and lists what is broken: hanging goods, supplier SNTs not received, unfiled 328.00s close to the 20th, and VS-versus-1C quantity gaps by product. It does not do this across **many BINs** for an outsourcing accountant either. IS ESF offers API methods for current VS balances and balance changes (kgd.gov.kz), so the data can be reached.

**Possible product:**
A read-mostly monitor connected to the IS ESF API, using the client's signature through a local signing agent. Each night it pulls ESF, SNT and VS balances for each BIN, imports 1C stock (file upload or OData), and shows a ranked exception queue with deadlines, ready-made supplier chase messages, and draft 328.00 match lists.

**MVP:**
Single BIN, import flows only. Pull SNTs and VS balances, upload the 1C stock report (Excel), flag (a) import SNTs not matched to any 328.00, (b) VS-versus-1C quantity differences per product, (c) days left to the 20th. Then add multi-BIN for outsourcers.

**Pricing hypothesis:**
15,000–30,000 KZT/month per BIN (about $30–60) for a trading SME. Outsourcers pay 5,000–8,000 KZT per client BIN per month. *(Estimate; benchmark against 1C ITS subscription prices.)*

**How to find first customers:**
- Accounting outsourcing firms, through accountant communities and seminars (cdb.kz, uchet.kz, mybuh.kz audiences), professional accountant associations, and Telegram/WhatsApp accountant groups *(unverified group sizes)*.
- Importers of mandatory-list goods (fuel, alcohol licence holders, appliance distributors) from public licence registers.
- Partnering with 1C franchisees as resellers.

**Risks:**
- 1C or 1C partners add a reconciliation report. This is the most likely failure mode.
- KGD changes the IS ESF API or limits third-party access.
- Signing-key handling.
- Price-sensitive market.
- Russian-language-only support is acceptable, Kazakh UI may be expected.

**Kill condition:**
- 1C:Бухгалтерия для Казахстана already ships a VS-versus-accounting reconciliation with SNT↔328 matching that accountants say is adequate (check in 10 accountant interviews).
- Or the IS ESF API is not available to third-party non-1C systems.

**Score:** 6/10. Strong mandatory, monthly pain with a fresh trigger. Heavily capped by 1C dominance and channel control.

**Sources:**
- https://bes.media/news/nalogoviy-kodeks-2026-chto-izmenitsya-dlya-biznesa-rk-v-novom-godu/
- https://inbusiness.kz/ru/news/v-kazahstane-zarabotal-novyj-nalogovyj-kodeks-chto-vazhno-znat
- https://prg.kz/document/?doc_id=38355510 (SNT: new forms, rules and goods list from 2026)
- https://uchet.kz/news/snt-2026-perechen-tovarov-i-poryadok-oformleniya/
- https://mybuh.kz/useful/virtualnyy-sklad-snt-spisanie-tovarov-2026.html
- https://www.1cbit.kz/blog/novyy-poryadok-oformleniya-snt-i-esf-rasshirenie-perechnya-tovarov-cherez-virtualnyy-sklad/
- https://kgd.gov.kz/ru/content/virtualnyy-sklad-1 (VS API methods for balances)
- https://pro1c.kz/hotline/tipovye-resheniya/kak-vypolnit-sopostavlenie-neskolkikh-snt-s-odnoy-fno-328-00-/
- https://pro1c.kz/hotline/tipovye-resheniya/kak-iz-1s-korrektno-zavesti-tovary-na-vs-v-is-esf-esli-postavshchik-ne-pereshel-na-vypisku-snt/
- https://cdb.kz/sistema/pravovaya-baza/vprave-li-organizatsiya-spisat-tovar-s-virtualnogo-sklada-do-sdachi-formy-328-00/
- https://cdb.kz/sistema/video-seminary/kak-ne-dopustit-oshibok-pri-rabote-s-esf-snt-modulem-virtualnyy-sklad-/
- https://hh.ru/vacancy/135768496 (virtual-warehouse accountant vacancy)
- https://pro1c.kz/news/avtomatizatsiya/novyy-servis-1s-esf-dlya-kazakhstana/ (incumbent)
- https://bizmedia.kz/2026-04-27-chislo-platelshhikov-nds-vyroslo-za-i-kvartal-na-9-v-kazahstane-zhumangarin/
- https://mybuh.kz/news/v-kazakhstane-stalo-bolshe-platelshchikov-nds-v-1-polugodii/

---

### Opportunity: Construction technical-supervision journals and monthly progress report under the 2026 Construction Code

**Industry:**
Construction: engineering and technical-supervision firms (инжиниринговые компании / технадзор), general contractors on state-funded projects.

**Buyer:**
Director or lead engineer of a licensed engineering or technical-supervision firm, and the site engineer (ПТО) at a contractor.

**Trigger / Why now:**
- Construction Code No. 253-VIII, signed 2026-01-09, in force 2026-07-01.
- New rules for engineering services from 2026-07-01, with mandatory forms: technical-supervision log, author-supervision log and schedule, and a **monthly construction-progress report**.
- For projects with state investment, all as-built technical documentation must be kept **only in electronic form**.

**Current workflow:**
1. The supervision engineer records inspections and defects on site (paper or Word).
2. Entries are re-typed into the prescribed log form.
3. Each month the engineer compiles the progress report from the logs, photos, contractor acts and the schedule.
4. The report is sent to the client (often a state customer) and signed with ЭЦП, possibly through a state construction information system. The state-system name and whether it has an API are *unverified*.

**Pain:**
The forms are new and mandatory, and engineering firms carry more liability under the Code. Evidence of manual pain is mostly inferred from the new forms. No complaints were found in this session (*unverified*).

**Existing solutions:**
- trustme.kz (e-signing, actively marketing to the new Code).
- Generic Word and Excel templates from legal information systems (prg.kz).
- Russian as-built documentation tools: not adapted to KZ forms (*unverified*).
- A state construction portal: *unverified*.
- 1C construction modules.

**The gap:**
No KZ-form-specific tool was found that turns site inspection entries (mobile, with photos) into the prescribed log and an auto-built monthly report, signed with ЭЦП.

**Possible product:**
A mobile inspection-entry app for supervision engineers. It produces the statutory technical-supervision log and monthly progress report in the approved KZ formats, signs them with ЭЦП, and keeps an audit trail per project.

**MVP:**
A web form plus a PDF/DOCX generator for the technical-supervision log and the monthly report, with photo attachments, for one firm with 3–5 projects.

**Pricing hypothesis:**
20,000–50,000 KZT per active project per month (*estimate*).

**How to find first customers:**
The register of accredited engineering organisations (technical supervision requires accreditation), winners of state construction tenders on goszakup.gov.kz, and construction industry associations.

**Risks:**
- The state may launch its own mandatory e-journal system, which would remove the opportunity or reduce it to integration.
- Forms may change.
- Sales are tied to state projects.

**Kill condition:**
A state information system already hosts these journals for state-funded projects and contractors must use it directly.

**Score:** 5/10.

**Sources:**
- https://blog.trustme.kz/stroitelnyy-kodeks-rk-253-viii-2026/
- https://zakon.uchet.kz/rus/docs/K2600000253
- https://adilet.zan.kz/rus/docs/R2600000012
- https://gz.mcfr.kz/news/4040-s-1-iyulya-2026-goda-v-kazahstane-vstupyat-v-silu-novye-pravila-okazaniya-inzhiniringovyh-uslug-v-stroitelstve
- https://finance.kz/articles/v-kazahstane-s-iyulya-2026-goda-vvodyat-stroitelnyy-kodeks-klyuchevye-izmeneniya

---

### Opportunity: Multi-client quarterly ПЭК reporting tool for environmental consultants

**Industry:**
Environmental compliance for operators of category I and II facilities: industry, mining subcontractors, boiler houses, asphalt plants and similar.

**Buyer:**
Environmental consulting firms, which already prepare ПЭК programmes and reports for many operators, and in-house ecologists at mid-size operators.

**Trigger / Why now:**
- Environmental Code art. 182 requires ПЭК for category I and II operators.
- Reports are due **quarterly**, by the 1st of the second month after the quarter, in the authorised body's information system (ecoportal).
- The rules for ПЭК programmes and reporting were amended by order (adilet V2300032614).
- No specific 2026 change was found (*weak why-now*).

**Current workflow:**
1. Lab measurements and internal records (emissions, discharges, waste) arrive as PDFs and Excel.
2. The consultant transfers them into the report form.
3. The consultant compares results with permitted limits.
4. The report is uploaded to the state information system each quarter for each client.

**Pain:**
Quarterly and mandatory, with many operators per consultant. Specific complaint evidence was not found (*unverified*).

**Existing solutions:**
Consultants using Excel, the state portal itself, and Russian ecology software (e.g. "Integral"-type suites; KZ form support *unverified*).

**The gap:**
A multi-client tracker that turns lab results into ПЭК report tables, with limit checks and a deadline calendar. Existence in KZ is *unverified*.

**Possible product:**
Upload lab protocols per site, then get automatic limit-exceedance flags, quarterly report tables in the KZ format, and a deadline board across all clients.

**MVP:**
An Excel-in, report-out generator with limit checks for one consultant's 20 clients.

**Pricing hypothesis:**
30,000–60,000 KZT/month per consultant seat (*estimate*).

**How to find first customers:**
Public-hearing documents on ecoportal.kz list the developers (consultants) of ПЭК programmes, which gives a scrapeable prospect list. The licensed environmental design and regulation firms register is another source.

**Risks:**
- Small number of consultants.
- The state portal may add structured entry or an API that changes the workflow.
- Weak "why now".

**Kill condition:**
The ecoportal report is short structured entry that takes less than an hour per site per quarter, or consultants already use a KZ-specific tool.

**Score:** 4.5/10.

**Sources:**
- https://adilet.zan.kz/rus/docs/V2300032614
- https://zakon.uchet.kz/rus/docs/K070000212_
- https://ecoportal.kz/Public/PubHearings/LoadFile/39151 (example ПЭК programme 2022–2026)

## Rejected after competitor research

- **ESUTD labour-contract registration sync.** The trigger is real: Code of Administrative Offences art. 98 fines for late or incorrect contract registration from March 2026, with no warning option. It was killed by competitors:
  - HR.enbek.kz is free and offers an e-contract constructor with automatic ESUTD registration.
  - **dogovor24.kz** registers contracts in ESUTD automatically after e-signing.
  - **1C:ЗУП для Казахстана** has ESUTD integration (pro1c.kz).
  - Sources: https://dogovor24.kz/info/products/esutd/, https://pro1c.kz/articles/trud-zarplata-kadry/registratsiya-trudovykh-dogovorov-v-edinoy-sisteme-ucheta-trudovykh-dogovorov-esutd/, https://kpmg.com/kz/ru/insights/2026/03/nf-march-03.html
- **Plain ESF issuing or e-invoicing.** Killed by IS ESF (free), 1C:ЭСФ, and every Kazakh accounting system. Only the reconciliation and exception layer (opportunity 1) remains open.

## Too competitive

- **Product-marking compliance** for motor oils, antifreeze and brake fluid (from Sep 2026), beer (from Feb 2026), dietary supplements, and light-industry goods (from Dec 2026), including auto-service stations (СТО) that sell oil.
  - New fine for a receipt missing the marking code (CAO art. 284, from 2026-01-19).
  - Already served by the national marking operator's tools, 1C, POS and cash-register vendors, marking integrators (e.g. uppersetup.com, Cleverence), and Russian Chestny ZNAK know-how.
  - More than 380 participants are already registered for oils, mostly importers.
  - Sources: https://www.gov.kz/memleket/entities/mti/press/news/details/1234294?lang=ru, https://uppersetup.com/ru/blog/product-marking-and-traceability-in-kazakhstan-motor-oils, https://cdb.kz/sistema/novosti/novye_tovary_podlezhashchie_markirovke_s_1_sentyabrya_2026_goda/

## Attractive problem, poor distribution

- **Pharmacies dispensing free outpatient medicines (АЛО).**
  - Monthly prescription registers go to the state single distributor SK-Pharmacy by the 10th of the following month, and payment depends on them.
  - The workflow is controlled by state systems, SK-Pharmacy and the insurance fund FSMS. Individual pharmacies cannot change tooling, and large chains build their own.
  - Sources: https://informburo.kz/novosti/besplatnye-lekarstva-na-223-mlrd-tenge-postupili-v-medorganizacii-kazahstana.html, https://www.caravan.kz/gazeta/v-skfarmacii-nauchilis-schitat-tabletki-poshtuchno-88134/
- **ПЭК environmental reporting** (opportunity 3) is borderline: the buyers are reachable only through a small consultant channel.

## Notes and limits

- Not screened for lack of budget: agriculture subsidies (qoldau), grain export phytosanitary documents, private schools (per-capita funding reporting), security companies, freight and customs brokers.
- Kazakhstan's dominant structural fact is **1C**. Almost any accounting or HR compliance idea must either sit on top of 1C (a complement) or target the large non-1C segment of small firms and outsourcers. Validate which before building.
