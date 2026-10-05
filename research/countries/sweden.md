# Sweden - research report (deep pass, 2026-10-05)

Method note: deep pass with about 47 WebSearch calls (Swedish and English); WebFetch unavailable, so evidence comes from search summaries of official pages (regeringen.se, riksdagen.se, Lantmäteriet, Naturvårdsverket, Jordbruksverket, Försäkringskassan, Migrationsverket, Boverket, Tullverket, municipalities) and vendor sites, not full reads of the primary documents. Items marked "unverified" or "estimate" were not confirmed. Accessibility: Sweden is fully accessible (EU, no sanctions, BankID/Swish/card rails, no software licensing barrier for a foreign seller). Many government integrations need BankID or a Swedish organisation number, which is a practical hurdle for a foreign solo founder.

Overall verdict: Sweden is a highly digitised, well-served market. Regulators often ship their own free e-service, and vertical vendors move fast (for example, 10 veterinary journal systems were connected to Jordbruksverket before the 2026 horse-medication rule started). The best leads are new registers and duties where the state builds only the receiving end: the 2027 national bostadsrätt register, and municipality-fragmented F-gas reporting. No lead scores above 5/10. Interviews are needed before any build.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Housing cooperatives (BRF) / property managers | Backfill and ongoing reporting to the new Lantmäteriet bostadsrättsregister (law in force 1 Jan 2027, data due 31 Dec 2027, transfers registered within 2 weeks) | Candidate (opp. 1) | New mandatory register, ~30,000 BRFs, fines; big managers will integrate, self-managed BRFs are the gap |
| Refrigeration / HVAC contractors | F-gas leak checks and the annual köldmedierapport to each municipality (31 March) under EU 2024/573 | Candidate (opp. 2) | 290 municipalities with different intake routes (e-service, PDF upload, email, post); vendor coverage unverified |
| Independent schools (friskolor) | Monthly skolpeng reconciliation against many home municipalities; per-unit separate accounting from 1 Jul 2027 | Candidate (opp. 3) | Real fragmentation and documented municipal errors, but only ~750 school operators |
| SME employers of non-EU staff | Keeping work-permit conditions (pay, insurance) and new duty to notify Migrationsverket (1 Jun 2026) | Candidate, weak (opp. 4) | Mandatory with severe consequences, but permit volumes are falling; Deel, Jobbatical and law firms cover corporates |
| Waste collectors / retail and restaurants | New annual statistics duty for private collectors of municipal waste (from 1 Jul 2026, due 31 March) | Rejected (re-scored from 4 to 3) | Annual only; reporting through Avfall Web or Naturvårdsverket e-service; collectors run AMCS-type ERPs |
| Hazardous waste chain | Notes and reporting to Naturvårdsverket avfallsregistret within 2 working days | Too competitive | Opter, Smart Avfallsapp, El-Kretsen Verksamhetsavfallsappen, Sveriges Allmännytta app, avfallsrapport.se, plus a free e-service |
| Agriculture | Electronic sprutjournal (EU 2023/564; paper allowed in 2026, digital from 1 Jan 2027) | Rejected | Jordbruksverket will offer a free digital service by 1 Jan 2027; Dataväxt-type crop software and Datalogisk exist |
| Veterinary (equine / farm) | Reporting every medication treatment of horses to Jordbruksverket from 1 Jan 2026 | Rejected | Free Jordbruksverket e-service plus ~10 connected journal systems (PreVet, Provet Cloud, VetManager, Agitura, Djurloggen, Dolittle, VetJay ...) |
| Personal assistance (LSS) providers | Monthly time reporting to Försäkringskassan; late reports now normally not paid | Too competitive | Försäkringskassan contracts approved system suppliers for ELT (e.g., Tidvis) |
| Home care (LOV hemtjänst) providers | Re-keying municipal TES/Intraphone time records into own scheduling and payroll | Poor distribution | Municipalities dictate the systems; providers are small; Timezynk and others serve scheduling and payroll |
| Funeral homes / estate law | Electronic filing of bouppteckningar (law 1 Jul 2026, Skatteverket e-service earliest 2027) | Rejected | Wolters Kluwer's estate program is market leader with a Sveriges Begravningsbyråers Förbund partnership |
| Forestry / wood | EUDR due diligence (applies 30 Dec 2026) | Rejected | Biometria's VIOL system will carry the EUDR reference numbers; forest owner associations, SCA, Descartes, Pinja, Stratsys |
| Solar / electricians | Grid föranmälan/färdiganmälan to ~170 grid owners | Rejected | Shared portals already exist (Elsmart, föranmälan.nu); the solar market is slowing |
| Construction / service sectors | Personalliggare (electronic from 1 Jan 2026, more sectors); ROT/RUT/green-tech requests must name subcontractors from 1 Jan 2027 (prop. 2025/26:282) | Too competitive | Field changes that existing personalliggare and accounting vendors (Fortnox, Visma etc.) will absorb |
| Building owners / ventilation inspectors | OVK protocol submission to each municipality | Rejected (weak pain) | Emailing a PDF is low pain; Boverket has studied a national OVK solution (2023 report) |
| Building developers | Klimatdeklaration with limit values proposed for 2027 | Too competitive | Free BM tool (IVL), One Click LCA, consultants; per-project work |
| Customs / small importers | CCI phase 2 (1 Sep 2026), end of the EUR 150 duty relief (1 Jul 2026) | Rejected | System-to-system access needs Tullverket certification; brokers and customs software dominate |
| Fisheries | Electronic logbook for vessels under 12 m | Rejected | HaV provides an adapted e-logbook; tiny market |
| Security companies | Staff approval and notifications to Länsstyrelsen | Rejected | E-service exists; small number of authorised firms |
| Bookkeeping, pay transparency, EPR | (from first pass) | Too competitive / poor fit | Fortnox/Visma/Björn Lundén; pay transparency postponed to 1 Jan 2027 and covered by HR suites; producer responsibility organisations |

## Opportunities

### Opportunity: BRF Register Bridge (bostadsrättsregistret reporting for self-managed housing cooperatives)

**Industry:**
Housing cooperatives (bostadsrättsföreningar) / small property administration

**Buyer:**
The board (chair or treasurer) of self-managed BRFs; secondarily small independent economic managers (redovisningsbyråer that keep the books for a few dozen BRFs) without their own register integration.

**Trigger / Why now:**
The bostadsrättsregisterlag (SFS 2026:484) and its implementation act take effect on 1 Jan 2027. Lantmäteriet starts collecting data in spring 2027. Every association must submit data on units, the association, holders, pledges and notes by 31 Dec 2027, or risk a fine. During the build-up phase associations (directly or via managers) must report changes. Once the register runs, the association must register each transfer within two weeks of the membership decision. Registering a pledge in the register replaces notifying the association (denuntiation).

**Current workflow:**
1. The board keeps a lägenhetsförteckning (Excel, binder or a BRF app) with holder names, shares and pledge notes from bank letters.
2. On each sale, the board approves membership, files the transfer contract and updates the register by hand. Banks send pledge and release notices by letter or email.
3. From 2027 the same data must be cleaned (stale pledges, unit numbering), sent to Lantmäteriet in its format, reconciled with lenders during verification, and every later transfer reported within two weeks.

**Pain:**
HSB states it is helping associations clean up pledges and review unit numbers before submission. That is evidence that the existing registers are messy. Missing the deadline risks a fine. The two-week transfer deadline turns an occasional board task into a deadline-bound filing. Exact pain for small boards is unverified.

**Existing solutions:**
Large managers (HSB, Riksbyggen, SBC, Nabo with about 3,000 BRF clients, Simpleko and others) will submit for their clients. BRF portals such as SBC Hemma. Lantmäteriet will very likely provide its own e-service (technical solution under development in 2026, details unverified). Generic BRF apps (Boappa-type; names and plans unverified).

**The gap:**
Self-managed BRFs and small bookkeeping firms have no system that (a) imports a messy Excel register, (b) flags inconsistencies (orphan pledges, unit numbers that don't match the economic plan, missing personal ID numbers), (c) produces the Lantmäteriet submission, and (d) then triggers the two-week transfer filing from the membership decision. Whether Lantmäteriet's own e-service makes (c) and (d) trivial is the key unknown.

**Possible product:**
A register clean-up and filing assistant. Upload the current lägenhetsförteckning and bank pledge letters. Get a validated dataset and a pledge clean-up task list (letters to lenders), plus filing support. Then a simple transfer workflow with deadline reminders.

**MVP:**
An Excel/CSV import with validation rules and a pledge reconciliation checklist and letter generator for lenders, exporting in whatever format Lantmäteriet publishes for 2027 collection. Transfer-deadline reminders later.

**Pricing hypothesis:**
SEK 1,500-4,000 one-off clean-up per association, then SEK 49-149/month for ongoing transfer filings (estimate). Bookkeeping firms: SEK 200-400 per association per year (estimate).

**How to find first customers:**
Bolagsverket's register of economic associations (all BRFs with board contacts); Bostadsrätterna (the BRF members' association) and its newsletters; BRF board Facebook groups; small bookkeeping firms advertising BRF accounting.

**Risks:**
Lantmäteriet's e-service may be good enough. Most volume is captured by large managers. Self-managed boards are volunteers with low willingness to pay. Most of the value sits in a one-time 2027 backfill. Registration API access for third parties is unverified.

**Kill condition:**
Lantmäteriet publishes a free e-service with Excel import and validation and a simple transfer form, or interviews show most self-managed BRFs will hand the job to their bookkeeper or bank.

**Score:** 5/10

**Sources:**
- https://www.lantmateriet.se/sv/bostadsrattsregistret/om-bostadsrattsregistret/
- https://www.lantmateriet.se/sv/bostadsrattsregistret/
- https://www.riksdagen.se/sv/dokument-och-lagar/dokument/proposition/ett-register-for-alla-bostadsratter_hd03112/html/
- https://svenskforfattningssamling.se/sites/default/files/sfs/2026-05/SFS2026-485.pdf
- https://www.hsb.se/nyheter-och-tips/kunskapsbank/overgang-till-ett-nationellt-bostadsrattsregister/
- https://tidningenkonsulten.se/artiklar/klart-med-centralt-register-for-bostadsratter-det-har-behover-du-veta/
- https://www.faronline.se/dokument/rattserien/redovisa-ratt/l/rr_lagenhetsforteckning/

### Opportunity: F-gas Report Router (köldmedierapport to 290 municipalities)

**Industry:**
Refrigeration, heat-pump and HVAC contractors (certified kylföretag)

**Buyer:**
Owner or service manager of small and mid-size certified refrigeration firms that do leak checks for shops, restaurants, property owners and industry. Secondarily, multi-site operators such as grocery chains and property companies.

**Trigger / Why now:**
EU F-gas Regulation 2024/573 replaced 517/2014. Swedish municipalities updated guidance. Operators with equipment of 14 t CO2e or more must submit an annual control report to the municipal environment office by 31 March. Equipment of 5 t CO2e or more must be leak-checked at least yearly by a certified company.

**Current workflow:**
1. The technician records leak checks, refills and recoveries per unit (paper protocol or service app).
2. Each winter the refrigeration firm compiles per-site annual reports (inventory, leak-check dates, refilled and recovered amounts, certificate numbers) for each customer.
3. The operator signs, and the report goes to the right municipality: Stockholm wants a PDF in an e-service, others by email with "Kontrollrapport om köldmedia" in the subject line, others by post or their own e-service.

**Pain:**
A March deadline crunch for contractors serving many customers. Reports must be signed by the operator. Missing reports trigger municipal supervision. Intake varies across Stockholm, Nacka, Alingsås, Östhammar, Kristianstad, Partille and others (seen in search results). Hours spent per report: unverified.

**Existing solutions:**
Field-service and work-order systems used by contractors (names and F-gas modules unverified). Excel/Word templates from industry bodies. INCERT certification register (not a reporting tool). Municipal e-services (intake only). Competitor diligence was inconclusive, so this is the main open question.

**The gap:**
No product found that takes a contractor's year of leak-check records and produces signed, municipality-specific annual reports, routed to the right intake channel with tracking. This rests on absence of evidence, so treat it as unverified.

**Possible product:**
Log leak checks per unit during the year (or import them), auto-generate each site's annual köldmedierapport, collect the operator's e-signature, and route it to the correct municipality, with a status dashboard per customer.

**MVP:**
CSV/Excel import of unit inventory and service events, then PDF annual report per site, e-sign link to the operator, and a lookup table of 290 municipal intake addresses and e-services with a "sent" log.

**Pricing hypothesis:**
SEK 50-100 per report, or SEK 500-1,500/month per contractor (estimate).

**How to find first customers:**
INCERT's public register of certified refrigeration firms; Svenska Kyl & Värmepumpföretagen members; municipal environment offices that publish guidance (as a channel and partner).

**Risks:**
Annual peak work, so churn between seasons. Existing service systems may already have F-gas modules. Operators, not contractors, are legally responsible, which may weaken the buyer's motivation. Municipal digitisation could standardise intake.

**Kill condition:**
Interviews show the dominant contractor service systems already generate these reports, or that contractors don't do the reports on behalf of customers.

**Score:** 4/10

**Sources:**
- https://tillstand.stockholm/tillstand-regler-och-tillsyn/lokal-och-fastigheter/koldmedier/
- https://www.nacka.se/naringsliv-foretag/tillstandsguiden/alla-tillstand/koldmedier-om-regler-och-rapportering/
- https://www.uppsala.se/foretag-och-naringsliv/tillstand-regler-och-tillsyn/kemikalier-och-koldmedia/koldmedier-i-kyl-och-varmepumpanlaggningar/
- https://www.alingsas.se/naringsliv-och-arbete/tillstand-regler-och-tillsyn/koldmedier/rapportering-koldmedia/
- https://www.kungalv.se/foretagande/tillstandsguide/koldmedier--arsrapport-kontroller/
- https://www.regeringen.se/contentassets/4e9cc871d3b541c4a92840ac40af1d4e/incert.pdf

### Opportunity: Skolpeng Reconciler for independent schools

**Industry:**
Independent schools and preschools (fristående skolor/förskolor)

**Buyer:**
CFO, finance administrator or principal of a small or mid-size enskild huvudman, especially upper-secondary schools (gymnasier) with pupils from many home municipalities.

**Trigger / Why now:**
Prop. 2025/26:292 (Skärpta villkor för friskolesektorn) introduces separate accounting per school or preschool unit, a ban on value transfers, and a duty to repay grants in some cases. Proposed to take effect 1 Jul 2027. A national skolpeng norm was investigated (dir. 2023:153). Riksrevisionen found most municipal grant decisions are unclear and many do not meet ordinance requirements.

**Current workflow:**
1. The school reports enrolled pupils to each home municipality through that municipality's own process or portal (for example, an Edlevo registration in Vellinge).
2. Each month, payments arrive from many municipalities at different rates (grundbelopp plus additions). Staff match them against pupil lists in Excel.
3. Discrepancies (moves, missed pupils, wrong programme rate) are chased by email. Annual grant decisions are reviewed to decide whether to appeal.

**Pain:**
Riksrevisionen calls the decisions unclear. A Friskolornas riksförbund study found only 2 of 32 municipalities followed the law on grant calculation. Payments are monthly and errors directly cost revenue. Hours per month: unverified.

**Existing solutions:**
School administration systems (IST/Edlevo, Schoolsoft and others: pupil registers, not payment reconciliation, unverified). Accounting systems. Friskolornas riksförbund analyses. Consultants and lawyers for appeals. Large groups (AcadeMedia and others) have in-house finance teams.

**The gap:**
No found tool reconciles expected skolpeng (pupil × home municipality × programme × published rate) against actual payments and produces claim letters per municipality. Combined with the 2027 per-unit accounting, that gives one dataset for both duties.

**Possible product:**
Monthly expected-versus-received skolpeng matcher with a municipal rate library, discrepancy queue, claim-letter generator, and per-unit revenue allocation export for the 2027 separate-accounting rule.

**MVP:**
Import pupil list (CSV from the school system) and bank payments (CSV/SIE), maintain a rate table for the school's top 20 municipalities, and output a discrepancy report.

**Pricing hypothesis:**
SEK 1,000-3,000/month per operator (estimate); higher for multi-municipality gymnasier.

**How to find first customers:**
Skolverket's skolenhetsregister (all independent units and operators); Friskolornas riksförbund and Idéburna skolors riksförbund members; Skolinspektionen permit decisions (new schools).

**Risks:**
Small market (~754 enskilda huvudmän in 2022: 570 compulsory, 208 upper-secondary). Many compulsory-school pupils come from one municipality, so pain is limited. Politics (profit restrictions) may shrink the sector. Rates are published in non-standard PDFs.

**Kill condition:**
Interviews show reconciliation takes under a few hours per month, or school-admin vendors already offer payment matching.

**Score:** 4/10

**Sources:**
- https://www.riksrevisionen.se/granskningar/granskningsrapporter/2022/skolpengen---effektivitet-och-konsekvenser.html
- https://www.friskola.se/wp-content/uploads/2023/10/Ar-friskolorna-overkompenserade-En-studie-av-32-kommuner.pdf
- https://regeringen.se/rattsliga-dokument/proposition/2026/06/prop.-202526292
- https://www.regeringen.se/pressmeddelanden/2026/05/regeringen-foreslar-vardeoverforingsforbud-och-ytterligare-skarpta-regler-for-friskolesektorn/
- https://vellinge.se/globalassets/rutiner-for-skolpeng-.pdf
- https://skr.se/skolakulturfritid/forskolagrundochgymnasieskola/vagledningsvarpavanligafragor/fristaendeskolorbidrag/fragorochsvarfristaendeskolorbidrag.14178.html
- https://www.skolverket.se/download/18.68c99c081804c5929ea58cf/1655292646380/pdf9573.pdf

### Opportunity: Work-permit Condition Monitor for SME employers

**Industry:**
Restaurants, cleaning, construction, IT and care SMEs employing non-EU staff

**Buyer:**
Owner or HR/payroll administrator at SMEs with 1-30 work-permit holders; small payroll bureaus and immigration advisers serving them.

**Trigger / Why now:**
New work-permit rules took effect 1 Jun 2026: a salary floor of 90% of the median wage (75% for about 20 exempted occupations), refusals based on employer shortcomings, and a new duty to notify Migrationsverket if the worker has not started within four months. Migrationsverket can audit pay and insurance during the permit (efterkontroll) and revoke permits if conditions were not met. A 2026 Riksrevisionen report criticised the controls, which signals more enforcement.

**Current workflow:**
1. An adviser or the employer files the application with salary, hours and insurance terms.
2. Monthly payroll runs in Fortnox/Visma etc. with no link to permit terms; insurance changes go unnoticed.
3. At extension or efterkontroll, staff assemble payslips and insurance certificates for 24 months and discover any shortfall, which can lead to revocation.

**Pain:**
Revocation means losing a trained employee. Earlier well-known cases ("kompetensutvisningar") came from small payroll errors. Advisers charge per application (amount unverified).

**Existing solutions:**
Immigration law firms and relocation providers (Fragomen-type, unverified for Sweden); Jobbatical (renewal tracking and salary-compliance monitoring for Sweden); Deel (permit dashboards for EOR clients); payroll systems (no permit-rule checks found).

**The gap:**
For SMEs not using EOR/relocation firms: a monthly check of actual pay, hours and insurance against each permit's stated terms and current thresholds, plus deadline tracking (4-month start notice, expiry, extension pack).

**Possible product:**
Connect payroll (SIE/AGI export or Fortnox API), enter permit terms once, get monthly red/amber flags and a one-click extension and efterkontroll evidence pack.

**MVP:**
Manual permit-term entry plus monthly payslip CSV import, rule checks (salary floor, agreed salary, insurance present), deadline reminders, PDF evidence pack.

**Pricing hypothesis:**
SEK 99-199 per permit-holder per month, or SEK 500-1,500/month for an adviser's portfolio (estimate).

**How to find first customers:**
Migrationsverket's list of certified employers/agents (certifieringsförfarandet; availability of a public list unverified); immigration advisers and payroll bureaus as channel partners; restaurant and cleaning trade associations.

**Risks:**
Shrinking market: about 23,000 work-related permits including family in 2025, and the higher salary floor pushes out low-wage SME hiring. Sensitive personal data under GDPR. Advisers may keep the work in-house.

**Kill condition:**
Interviews show SMEs rely fully on their adviser, or permit-holder counts per SME are too small to justify a subscription.

**Score:** 4/10

**Sources:**
- https://www.migrationsverket.se/arbetsgivare/nyhetsarkiv-for-arbetsgivare/nyheter/2026-06-01-nya-regler-for-arbetstillstand-trader-i-kraft.html
- https://www.migrationsverket.se/nyheter/nyhetsarkiv/2026-04-17-nya-regler-for-arbetstillstand-fran-1-juni-2026.html
- https://www.migrationsverket.se/arbetsgivare/under-anstallningstiden/kontroller-under-anstallningstiden.html
- https://www.riksrevisionen.se/granskningar/granskningsrapporter/2026/migrationsverkets-kontroller-av-arbetstillstand---stor-risk-for-fel-och-missbruk.html
- https://www.regeringen.se/pressmeddelanden/2026/05/regeringen-presenterar-undantag-fran-det-nya-lonekravet/
- https://www.migrationsverket.se/nyhetsarkiv/nyhetsarkiv/2026-01-09-farre-beviljade-uppehallstillstand-2025.html
- https://www.jobbatical.com/services/sweden-intra-company-transfer-permit

## Rejected after competitor research

- **Commercial waste / municipal-waste collector statistics (first-pass opportunity, 4 → 3, rejected):** confirmed that from 1 Jul 2026 professional collectors of municipal waste must report quantities by type and treatment annually (by 31 March). But it is annual only, there are two existing channels (Avfall Sverige's Avfall Web and the Naturvårdsverket e-service), and collectors run waste ERPs such as AMCS. Sources: https://www.naturvardsverket.se/vagledning-och-stod/avfall/kommunalt-avfall/att-lamna-uppgifter-om-kommunalt-avfall/ ; https://www.avfallsverige.se/for-medlemmar/vagledning-och-stod/avfall-web/ ; https://www.partille.se/bygga-bo--miljo/avfall-och-atervinning/avfallshantering-for-foretag/avfallshantering-for-verksamheter/
- **Hazardous-waste register reporting:** Opter integration, Smart Avfallsapp, El-Kretsen Verksamhetsavfallsappen, Sveriges Allmännytta's app, avfallsrapport.se, plus a free e-service. https://docs.opter.com/sv/Content/integration-008.htm ; https://www.smartavfallsapp.se/ ; https://www.el-kretsen.se/verksamhetsavfallsappen
- **Electronic sprutjournal (EU 2023/564):** Jordbruksverket will provide a free digital service by 1 Jan 2027; LRF guidance; existing crop software (Datalogisk etc.). https://jordbruksverket.se/download/18.4e6ce58b19bb54fa9451010c/1772628781867/Sa-fyller-du-i-sprutjournalen-tga.pdf ; https://www.lrf.se/nyheter/nya-regler-om-elektroniska-sprutjournaler/
- **Vet medication reporting (horses, from 1 Jan 2026):** free Jordbruksverket e-service, and about 10 connected journal systems including PreVet, Provet Cloud, VetManager, Agitura. https://jordbruksverket.se/djur/lantbruksdjur-och-hastar/nya-krav-for-veterinarer-att-lamna-uppgifter-om-behandlingar-med-lakemedel ; https://www.veterinarmagazinet.se/2025/12/prevet-lanserar-journalforing-integrerad-med-jordbruksverket-infor-nya-regler-2026/
- **Personal-assistance time reporting (ELT):** a strong 2026 trigger (late reports no longer paid), but Försäkringskassan-approved system suppliers such as Tidvis cover it. https://www.forsakringskassan.se/nyhetsarkiv/nyheter-press/2026-05-22-andring-i-reglerna-om-redovisning-av-utford-assistans ; https://tidvis.se/en/sectors/personal-assistance
- **Digital bouppteckning filing:** Wolters Kluwer's estate program leads with the funeral homes' association partnership; SBF members prepare about 30,000 estate inventories a year. https://www.wolterskluwer.com/sv-se/solutions/skatt-ekonomi/juristbyraer ; https://www.skatteverket.se/omoss/pressochmedia/nyheter/2026/nyheter/forandringarsomrorbouppteckning.5.3129d65419ef1497c0615a8.html
- **EUDR for Swedish wood:** Biometria VIOL will require valid reference numbers; forest owner associations and SCA handle it; Descartes, Pinja and Stratsys sell tools. https://www.biometria.se/publikationer/informationsmaterial/avskogningsfoerordningen-eudr/ ; https://www.skogsstyrelsen.se/lag-och-tillsyn/avskogningsforordningen/
- **Solar grid notifications:** Elsmart and föranmälan.nu already consolidate grid-owner portals. https://foranmalan.nu/ ; https://www.vattenfall.se/fokus/solceller/foranmalan-fardiganmalan-matarbyte/
- **Customs CCI phase 2 / low-value imports (first-pass opportunity, 3, rejected):** confirmed CCI part 2 (simplified and supplementary declarations, entry in declarant's records) from 1 Sep 2026, but it needs Tullverket system certification and brokers or customs software dominate. https://tullverket.se/special/utkast/mia/scheduleforintroductionoftheunioncustomscode.4.7822c3691951848489354a79.html
- **OVK protocol routing:** low pain (PDF by email or e-service), and Boverket has studied a national digital OVK solution. https://www.boverket.se/sv/om-boverket/publikationer/2023/digitalisering-av-obligatorisk-ventilationskontroll/
- **Small-vessel electronic fish logbook:** HaV provides the adapted e-logbook. https://www.havochvatten.se/download/18.7d4f2b16198cd6eed1b5f450/1756301205676/Remiss%20_Elektronisk%20fiskeloggbok%20f%C3%B6r%20fartyg%20under%2012%20m%20Dnr%202025-002401.pdf

## Attractive problem, poor distribution

- **LOV home-care providers:** private providers must record visits in the municipality's chosen system (TES, Intraphone etc.) and then re-key the same hours into their own scheduling, payroll and invoicing. The pain is real, but each municipality controls the source system (no third-party access) and providers are small. Timezynk and similar tools already cover the provider side. https://www.falkoping.se/download/18.126386df18adc128daf6588/1701331625031/Bilaga%2014%20Regler%20och%20rutiner%20f%C3%B6r%20rapportering%20i%20Intraphone%202023-09-28.pdf ; https://www.spiris.se/integrationer/partner/timezynk
- **Personalliggare for micro firms (hairdressers, vehicle service, wholesalers):** electronic registers required from 1 Jan 2026 and more sectors covered, but buyers are tiny with low willingness to pay and many vendors exist (vendor list unverified). https://regeringen.se/contentassets/b387d0f4eefc4ffa8f90a5523038aaf3/effektivare-kontrollmojligheter-i-systemen-for-rot-rut-gron-teknik-och-personalliggare-prop.-202526282

## Too competitive

- ROT/RUT/green-tech request changes (subcontractor disclosure from 1 Jan 2027): accounting and invoicing vendors (Fortnox, Visma) will add the field.
- Bookkeeping, e-invoicing and ViDA tooling; Skatteverket remote audit access; pay transparency (postponed to 1 Jan 2027, mainly firms with more than 100 staff).
- Packaging and battery producer responsibility (producer responsibility organisations and compliance vendors).
- Klimatdeklaration with 2027 limit values (proposed): free BM tool, One Click LCA, consultants. https://www.regeringen.se/contentassets/eee4559302dc4ac5a904c92df5e836de/skanska-sverige-ab.pdf

## Inaccessible markets

None. Sweden is accessible. The practical hurdle is that many state integrations require Swedish e-ID (BankID) or a Swedish organisation number.

## Pass history

- First pass (6 searches): two opportunities, commercial waste reporting (4/10) and customs CCI helper (3/10), with thin competitor diligence.
- Deep pass (this rewrite, about 47 searches, Swedish-language focus):
  - Verified the waste reform details. Collectors report annually by 31 March via Avfall Web or the Naturvårdsverket e-service, and hazardous-waste reporting already has many tools. The waste idea is re-scored 4 → 3 and moved to rejected.
  - Confirmed the CCI timeline and kept customs rejected.
  - Screened 15+ new workflows and killed several 2026 triggers: sprutjournal, vet medication, ELT, bouppteckning, EUDR, solar notifications and fish logbooks each have a free government tool or an entrenched vendor.
  - Added four new candidates: the 2027 bostadsrättsregister (5/10), municipal F-gas reports (4/10), skolpeng reconciliation (4/10) and the work-permit condition monitor (4/10).
  - Personalliggare and klimatdeklaration claims are now partly verified.
