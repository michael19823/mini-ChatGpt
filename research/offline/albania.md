# Albania: Offline-Industries Pass

**Date:** 2026-10-05. **Searches used:** 18 of 20 (local-language Albanian first; WebFetch not used).
**Existing report:** `research/countries/albania.md`. That report covered accommodation compliance and EPR; neither is repeated here.

**Summary verdict.** Albania is small (about 2.4M people), and most quiet industries here are either informal (domestic work, scrap pickers, furgon minibuses) or served directly by a free state platform (e-Transport for intercity buses, the state livestock database, the state fiscal-stamp producer). One quiet industry shows real, enforced, recurring pain that can be counted from a register: **licensed currency-exchange offices**. There were about 592 of them, the Bank of Albania fined 201 in 2025 and revoked 83 licences, and a 2025 regulation added ERRS periodic reporting plus AML duties. The market ceiling is low. Nothing reaches "build now". The exchange-office idea is worth a few interviews, ideally as a Western Balkans product.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Currency-exchange offices (zyra këmbimi valutor) | BoA licence; KYC/sanctions checks; transaction records; periodic reports via ERRS (2025 regulation); next-working-day reporting to DPPPP of cash transactions ≥ 1M lek (Instruction 3/2025) | Inspections found offices not identifying customers or checking sanctions lists, and some "unaware of their legal obligations"; the tools in use are fiscal POS software, not compliance software | 592 at end-2024 (BoA via Monitor/Euronews); 2025: 33 new, 83 revoked, 201 fined | **Candidate (Opp. 1)** | Enforced, recurring and countable, but only about 550 buyers |
| Veterinary pharmacies / private vets | New veterinary-medicines law (EU-aligned): antimicrobial prescriptions valid at most 5 days, ban on routine prophylaxis, record keeping (records kept 5 years on an approved model) | Records kept "according to a model approved by the competent authority"; no vet software vendors found | Unverified (no count found) | Weak candidate (Opp. 2) | Trigger is real, but the commencement date and implementing rules are unverified and buyers are tiny |
| Scrap-metal collection points (pika skrapi) | Licence under the waste laws (now Law 57/2025); register of every purchase or receipt of metal waste; site conditions | Many unlicensed points; register kept on paper (assumed, unverified) | Unverified | Weak candidate (Opp. 3) | Register exists, but it is not reported recurrently to a receiving body, and operators are semi-informal |
| Livestock farmers (identification and registration) | Ear tags within 20 days of birth; farm register; national database | Farmers keep a paper herd register; vets and state services enter data into the central database | Not found | Reject | A state database fed by official vets; the farmer has no willingness to pay |
| Intercity bus/minibus operators | Electronic ticketing through e-Transport; fiscal cycle; POS mandate | The sector is moving onto a state platform | 242 operators, 520 lines, 2,282 vehicles (DPSHTRR) | Reject | e-Transport is offered free to all operators, including fiscal ticketing |
| Taxi operators | Municipal licence (5 years, auto-renewal) | Handled at a counter by the municipality | Not found | Reject | One-time or five-yearly; no recurring report |
| Fishermen / small vessels | Logbook; landing declaration within 48h for vessels ≥10m; new draft requires VMS/AIS | Paper logbooks and declarations to the Fishing Inspectorate | 854 licensed fishing subjects in 2025 (Monitor) | Reject | Small fleet (73% small vessels are exempt or low-value); monitoring is hardware-driven; the state will specify the e-logbook |
| Small raki/wine producers (excise) | Excise stamps on caps; fiscal-warehouse authorisation; excise declarations | Stamps are ordered from Customs; there was "chaos" when the SICPA concession ended in 2025 | Not found | Reject | The pain sat with the state's stamp supply, not with a workflow software can fix; low willingness to pay |
| Households employing domestic workers / carers | Register with the regional tax office; signed contract; contributions | Paper request at the tax office; contribution booklets | Not found (mostly informal) | Reject | Very informal; households won't pay; a tiny formal segment |
| Medical / industrial cannabis licensees | New VKM (Oct 2026) and a National Registry with full traceability from seed to destruction | A new state registry | Few licensees (licensing only opened 2025) | Reject | The state runs the traceability system; few buyers |
| Medicinal and aromatic plant collectors/exporters | Collection licences, organic certificates, export documentation | Paper trade between collectors and exporters | Over 12,000 t exported in 2025; number of exporters not found | Not resolved | No 2025–26 reporting trigger found within budget; buyers' traceability demands are the possible angle |
| AML "DNFBPs" (jewellers, car dealers, real-estate agents) | DPPPP reporting (Instruction 3/2025); a new AML law is going through parliament (status unverified) | Little found | Not found | Not resolved | No enforcement evidence found; worth a later look if the new AML law passes |
| Beekeepers, cemeteries/monument makers, tattoo studios | — | — | — | Not searched | Out of budget; no Albanian trigger seen in passing |

## 2. Strongest opportunities

### Opportunity: Exchange-office compliance pack (KYC/sanctions log + ERRS reports + DPPPP cash reporting)

**Industry:**
Licensed currency-exchange offices (non-bank)

**Buyer:**
Owner-administrator of a one- to three-counter exchange office. Many are family-run, in Tirana, Durrës, border towns and tourist zones.

**Trigger / Why now:**
- **2025:** BoA amended its exchange-office regulation. Minimum capital doubled (2.5M to 5M lek). Cash transactions over 1M lek are banned (they must go through a bank). There is a daily cash-holding cap. Fines rose from 20k–100k to up to 1M lek. Periodic reports now go through the ERRS electronic regulatory reporting system.
- **DPPPP Instruction No. 3 (24 Jan 2025):** cash transactions ≥ 1M lek are reported electronically by the next working day.
- **2025 enforcement:** 201 offices fined and 83 licences revoked, for failures in customer identification, transaction monitoring, sanctions-list checks and reporting.
- A new AML/CFT law aligned with the EU and FATF (status in 2026 unverified) will add further duties.

**Current workflow:**
1. The cashier runs the exchange on certified fiscal POS software (needed for fiscalization).
2. ID is photocopied or noted in a paper or Excel register. Sanctions and PEP lists are checked by hand, or not at all.
3. The administrator or an external accountant compiles the periodic statistics and returns, and uploads them to BoA ERRS.
4. Reportable cash transactions and suspicions are entered separately into the DPPPP system.
5. At a BoA inspection, the office has to show the KYC files and screening evidence for sampled transactions.

**Pain:**
- One-third of the market was fined in a single year (201 of about 592), and 83 were shut.
- Fines now reach 1M lek, about €10k.
- Inspection findings name exactly the steps that are missing: identification, monitoring, sanctions screening, reporting.
- Sources: Euronews, Monitor, Oranews 2026; Exit.al.

**Existing solutions:**
- **Fiscalization/POS vendors** (devPOS, bills.al, vos.al, local custom builds; SoftExpres has a currency-exchange module). These cover rates, the till and fiscal receipts, but no screening or regulatory returns were found.
- **Generic AML screening APIs** (sanctions.io, Facctum, iDenfy). These are English-language and enterprise-priced, with no Albanian ERRS or DPPPP formats.
- **Consultants** (AlProfit Consult publishes guides to the 2025 changes) and accountants.
- **BoA ERRS and DPPPP portals** themselves, which accept the submissions but do none of the preparation.

**Offline evidence:**
- The BoA inspection findings say some offices were "unaware of their legal obligations".
- The supporting tooling is fiscal POS, not compliance software.
- No Albanian-language AML product for exchange bureaus turned up in searches.

**Offline channel:**
- Phone or visit offices from the BoA public list of licensed exchange offices (BoA publishes licensed-entity lists; the exact list format is unverified).
- Partner with a fiscal-POS vendor that already sells to them.
- Go through accountants and consultants such as AlProfit Consult who advise on the 2025 regulation.
- Contact any exchange-office association (none was found; unverified).

**Market count:**
About 592 licensed offices at end-2024. 2025 was net -50 (33 new, 83 revoked), so there are probably about 540 now (estimate). Source: Bank of Albania supervision data via Monitor and Euronews.

**The gap:**
No product ties one transaction record to all of its compliance outputs: the KYC record, sanctions/PEP hit evidence, ERRS periodic tables and the DPPPP cash or suspicious-transaction report. Today these are separate manual steps beside the fiscal POS.

**Possible product:**
An Albanian-language add-on next to the existing fiscal POS. It imports or captures each transaction, scans the ID, screens against UN, EU and Albanian lists, keeps an inspection-ready register, and generates the ERRS and DPPPP files.

**MVP:**
CSV import from one or two popular POS systems, ID capture with automatic screening, and an exportable inspection register. Add the ERRS report template once a real report format is obtained from interviews.

**Pricing hypothesis:**
€30–60 per office per month. A done-for-you monthly reporting service (software plus an accountant partner) at €80–120 is probably what sells. Owners pay to avoid a €10k fine and licence revocation, but many prefer a person to software.

**How to find first customers:**
- The BoA licensed list.
- Walk-ins in Tirana's Blloku and around the bus terminals.
- Referrals from fiscal-POS resellers.

**Risks:**
- The ceiling is small: about 550 × €40 × 12 ≈ €260k/yr at 100% share. It needs Kosovo, North Macedonia and Montenegro to matter.
- The 1M-lek cash ban cuts the volume of cash-transaction reports.
- A POS vendor could add screening cheaply.
- It needs a local Albanian founder or partner; a non-local solo founder could not realistically sell it.
- The ERRS format is not public (unverified).

**Kill condition:**
- The main POS vendors already ship KYC/sanctions screening and ERRS export, or
- interviews show that owners rely on their accountant and will not pay more than €15/month.

**Score:** 5/10 (Pain 7, Frequency 9, Mandatory 9, Fragmentation 4, Competition 6, Incumbent gap 6, Buyer access 7, WTP 4, MVP 7, Distribution 6; capped by market size)

**Sources:**
- https://www.oranews.tv/vendi/bie-numri-i-zyrave-te-kembimit-valutor-ne-shqiperi-banka-e-shqiperise-revo-i1336606
- https://euronews.al/shkeljet-dhe-evazioni-ne-pikat-e-kembimit-valutor-bsh-heq-83-licenca/
- https://monitor.al/bsh-hoqi-licencat-per-80-zyra-kembimi-valutor-numri-i-tyre-ra-per-here-te-pare-ne-tete-vjet/
- https://euronews.al/jo-me-veprime-cash-mbi-1mln-leke-miratohet-rregullorja-per-zyrat-e-kembimit-valutor/
- https://top-channel.tv/2025/05/27/kufizohen-transaksionet-cash-rregullorja-e-re-e-bankes-kembim-valutor-mbi-1-mln-leke-vetem-nepermjet-bankave/
- https://alprofitconsult.al/ndryshimet-2025-ne-rregulloren-e-zyrave-te-kembimit-valutor/
- https://fiu.gov.al/wp-content/uploads/2025/02/Udhezim-NR3-2025-01-24.pdf
- https://exit.al/en/bank-of-albania-revokes-12-foreign-exchange-licenses-in-fight-against-money-laundering
- https://www.tatime.gov.al/d/424/493/0/1544/pyetje-pergjigje-nga-kompanite-e-kembimit-valutor
- https://www.softexpres.com/en/

### Opportunity: Antimicrobial prescription and treatment register for private vets (new veterinary-medicines law)

**Industry:**
Private veterinarians and veterinary pharmacies serving livestock

**Buyer:**
Owner-vet of a rural veterinary pharmacy or clinic

**Trigger / Why now:**
- A new EU-aligned law on veterinary medicines. Its date of entry into force is unverified.
- It bans hormones and routine antibiotic prophylaxis, and limits antimicrobial prescriptions to 5 days' validity.
- It creates a national pharmacovigilance database and adds antimicrobial-use reporting, mirroring EU Regulation 2019/6.

**Current workflow:**
1. The vet writes a paper prescription.
2. The pharmacy logs sales in a register, using the model approved by AKU, and keeps it 5 years.
3. Inspectors check the paper register.
4. Any antimicrobial-use data would have to be compiled by hand.

**Pain:**
Mostly prospective. No enforcement evidence was found within budget.

**Existing solutions:**
- Paper registers on the AKU model.
- General pharmacy and fiscal POS.
- No Albanian vet-specific software was found.
- An EU-style state database may become the reporting endpoint.

**Offline evidence:**
- The paper register on an approved model.
- No vendor listings found.

**Offline channel:**
- Veterinary distributors and importers (the MARD list of authorised veterinary products, April 2026, names the companies).
- The Order of Veterinarians (unverified).
- AKU training sessions.

**Market count:**
Not found. Estimate: a few hundred veterinary pharmacies and clinics (unverified).

**The gap:**
Nothing links a prescription to a dispensing record and to an antimicrobial-use report.

**Possible product:**
A phone app for e-prescription and dispensing logs that produces an inspection-ready register and antimicrobial-use summaries.

**MVP:**
A digital version of the AKU register model, with 5-day prescription validity checks and an annual summary export.

**Pricing hypothesis:**
€10–20/month. Buyers would probably only pay if a distributor bundles it.

**How to find first customers:**
Through veterinary-medicine distributors' sales reps.

**Risks:**
- The state builds its own e-prescription system (as it did for human medicine).
- Willingness to pay is low.
- The implementing rules are unknown.
- It needs a local founder.

**Kill condition:**
- The implementing acts mandate a state e-prescription portal, or
- no enforcement date is set.

**Score:** 3/10

**Sources:**
- https://rtsh.al/shqiperia-me-ligj-te-ri-per-barnat-veterinare-perafrohet-legjislacioni-me-be-ne-ndalohen-hormonet-dhe-ashpersohen-rregullat-per-antibiotiket/
- https://aku.gov.al/wp-content/uploads/2016/06/Rregullore-PMV.pdf
- https://bujqesia.gov.al/wp-content/uploads/2026/04/Lista-e-Produkteve-Mjekesore-Veterinare-date-27.4.2026.pdf

### Opportunity: Scrap-metal point licensing and purchase register

**Industry:**
Scrap-metal collection and treatment points

**Buyer:**
Owner of a licensed scrap yard

**Trigger / Why now:**
- Law 57/2025 on integrated waste management.
- A draft government decision on metal waste sets siting distances (1,000 m from protected areas, 500 m from settlements), site conditions and a 6-month transition to licensing.
- Operators must keep a register of every purchase or receipt of metal waste.
- The decision's adoption date is unverified; similar rules date back to a 2020 VKM.

**Current workflow:**
1. Buy metal from collectors for cash.
2. Write it in a register.
3. Weigh and sell to a smelter or exporter.
4. Hold a licence from the National Environmental Agency.

**Pain:**
Unlicensed points face fines up to €500k (per the press). The register itself is not reported recurrently to a receiving body.

**Existing solutions:**
- Paper books.
- Weighbridge software.
- Fiscal POS for purchase invoices (purchases from individuals require a self-invoice under fiscalization).

**Offline evidence:**
A semi-informal cash trade; no software listings.

**Offline channel:**
- Large smelters and exporters (for example, buyers that feed the steel plant in Elbasan; unverified).
- Weighbridge suppliers.

**Market count:**
Not found.

**The gap:**
Linking purchase-register entries to fiscal self-invoices and waste-flow reports.

**Possible product:**
A tablet register at the scale. It captures the seller's ID, weight and photo, issues the fiscal self-invoice and keeps the waste register.

**MVP:**
A register app with CSV export.

**Pricing hypothesis:**
€20–40/month.

**How to find first customers:**
Lists of licensed operators from the environment agency (unverified that these exist).

**Risks:**
- Operators are informal.
- Fiscal POS vendors may already cover the self-invoice.
- No recurring report.

**Kill condition:**
The licensed operator count is under 100, or there is no reporting to a body.

**Score:** 3/10

**Sources:**
- https://www.monitor.al/menaxhimi-mbetjeve-metalike-detyrime-te-reja-per-pikat-e-skrapit-gati-vendimi/
- https://sot.com.al/ekonomia/qeveria-zhduk-pikat-e-skrapit-ne-rruge-dhe-zona-te-mbrojtura-kushte-te-reja/
- https://ikmt.gov.al/wp-content/uploads/2026/04/ligj-Nr.57-date-2025-10-16-57-PER-MENAXHIMIN-E-INTEGRUAR-TE-MBETJEVE.pdf

## 3. Rejected

- **Intercity bus/minibus ticketing and reporting.** e-Transport (DPSHTRR) is free to all 242 operators and handles fiscal e-ticketing, schedules and vehicle and driver data. (https://www.dpshtrr.al/te-reja/lajme/e-transport-e-ardhmja-digjitale-e-transportit-rrugor-nderqytetes-te-udhetareve)
- **Livestock identification and herd registers.** The state database is fed by official vets, and farmers have no willingness to pay. (https://bujqesia.gov.al/wp-content/uploads/2019/11/SOP-MANUALI-I-PROCEDURAVE-P%C3%8BR-IDENTIFIKIMIN-E-KAFSH%C3%8BVE-DHE-RREGJISTRIMIN-E-FERMAVE-BLEGTORALE.pdf)
- **Fishing logbooks and landing declarations.** Only 854 licensed subjects; the new rules are VMS/AIS hardware; an e-logbook will be specified by the state. (https://monitor.al/prodhimi-ne-sektorin-e-peshkimit-ra-me-79-teksa-numri-i-anijeve-u-rrit-ne-2025/, https://scantv.al/lajme/shqiperia/ndryshojne-rregullat-per-anijet-e-peshkimit-drafti-detyrim-insta-i31547)
- **Small raki and wine producers' excise stamps.** Stamps come from a state producer since March 2025, and the pain sits in supply, not in workflow. (https://dogana.gov.al/dokument/5963/udhezim-2025-03-27-9, https://acp.al/news/26069/)
- **Household employers of domestic workers.** The tax-office registration exists, but the sector is overwhelmingly informal. (https://www.tatime.gov.al/shkarko.php?id=14664)
- **Medical cannabis traceability.** The state National Registry (VKM, Oct 2026) is the traceability system, and there are few licensees. (https://www.gazetatema.net/sociale/krijohet-regjistri-kombetar-per-kanabisin-mjekesor-e-industrial-monitori-i576861)
- **Taxi licensing.** A five-year municipal licence, so there is no recurring workflow. (https://www.dpshtrr.al/sites/default/files/downloads/dokumente/Udh%C3%ABzues%20p%C3%ABr%20Sh%C3%ABrbimin%20Taksi.pdf)

## 4. Method notes

- **Albanian queries that worked:** regulator plus enforcement terms such as "BSH heq licenca", "gjoba", "rregullore e re", "udhëzim", "detyrime të reja". These surfaced Bank of Albania supervision data and DPPPP instructions quickly.
- **Most productive sources:** monitor.al and euronews.al rewrites of regulator reports.
- **Domestic workers, DNFBPs and vet counts:** queries returned only old laws or generic results.
- **Recurring outcome:** many Albanian quiet sectors are being absorbed by free state platforms (e-Transport, livestock database, cannabis registry, auto-filed VAT). Always check for a state platform first.
- **Operator counts:** these were rarely published, except for exchange offices, fishing and intercity transport.
