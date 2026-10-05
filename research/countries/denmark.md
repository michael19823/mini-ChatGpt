# Denmark: Indie-Hacker Opportunity Research

Research date: 2026-10-05. Searches used: 18 (budget for a large market). WebFetch not used; all
evidence comes from search-result snippets of the cited pages. Market accessibility: fully
accessible (EU, no sanctions, MitID Business / NemHandel are open to authorised third parties).
Danish-language searches were used throughout.

**Overall verdict:** Denmark is a highly digitised, consensus-driven market. Most new mandatory
workflows arrive with (a) a free government tool, (b) a collective scheme or industry body that
does the job for members, or (c) a fast wave of local start-ups. The 2025–2026 regulatory triggers
we found are real, but most were captured within months. The remaining openings are narrow
and modest. Nothing here reaches the brief's "5,000 buyers at $200–500/month with weak
competition" bar. The best lead is construction labour-clause and supply-chain documentation,
which is due to grow with the ID-card law passed on 3 Sept 2026.

---

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Packaging producers / importers (EPR) | Packaging-volume reporting to Dansk Producentansvar (first report due 1 Jun 2026), fees | Rejected (too competitive) | Collective schemes (Emballage Indberetning, 3,800+ members), Varefakta (free supplier data), ReCykla, MONTES WasteIT for Business Central |
| Construction: building owners / small builders | BR18 LCA climate calculation, extended to all new builds from 1 Jul 2025 | Rejected | LCAbyg is free and government-backed, and consultants/typehus firms do it as a service |
| Construction contractors | A4/A5 construction-process CO2 documentation (new 1.5 kg CO2e/m²/yr limit from 1 Jul 2025) | Too competitive | A45 (a45lca.dk), Acembee, nullcarbon, dinLCAhjælper, Climatebase all launched specifically for this |
| Construction subcontractor chains | Municipal labour clauses (arbejdsklausuler): payslips, timesheets, eIndkomst within 5 business days, whole supply chain | **Opportunity (moderate)** | Mandatory, recurring, fragmented by municipality; partly served by KK's own system and payroll tools |
| Construction: large sites | New ID-card law (passed 3 Sep 2026, sites >100m DKK), site time registration reported to Arbejdstilsynet | Watch (too early) | Expected in force 2028, reporting duty ~2029. A hybrid model with a state register plus commercial site vendors is planned |
| Waste collectors / hauliers | Affaldsdatasystemet (ADS) reporting under the new BEK 1465/2025, with new fraction codes | **Opportunity (weak)** | Small buyer pool (610 Danish-CVR actors), annual deadline. CSV/API exist, but code mapping is error-prone |
| Restaurants / food businesses | Egenkontrol (self-monitoring) temperature logs | Too competitive | ThermIT E-Kontrol, food consultants, international food-safety apps; hardware-led |
| Accountants / estate agents (AML) | Hvidvask risk assessments, KYC; Erhvervsstyrelsen 2025 enforcement decisions on small firms | Too competitive (unverified depth) | Enforcement is active, but KYC/AML tooling (e.g. Penneo, Creditro: names not verified in this session) and templates from trade bodies are widespread |
| Micro-businesses (sole traders) | Digital bookkeeping mandatory from 1 Jan 2026 for sole traders >300k DKK | Too competitive | 92 registered bookkeeping systems (Dinero, e-conomic, Billy, etc.) |

---

## Opportunities

### Opportunity: Labour-clause evidence pack for construction subcontractor chains

**Industry:**
Construction (contractors and subcontractors on public and municipal contracts)

**Buyer:**
Office manager / payroll or bookkeeping person at main contractors and mid-tier subcontractors (10–150 staff) that work for several municipalities and regions. Also the contract-compliance person at mid-size general contractors who must collect documents from every link in the chain.

**Trigger / Why now:**
- Municipalities revised their labour clauses in 2024–2025 (e.g. the joint Funen clause, Albertslund, Helsingør, Hvidovre, Svendborg). These clauses require documentation for *all employees in the entire supplier chain* within 5 business days of a request: employment contracts, payslips with account numbers, proof of digital salary payment, timesheets with start and end times, eIndkomst extracts, pension and holiday pay. Records must be kept for 12 months after the contract ends.
- Copenhagen requires suppliers and subcontractors to register in its digital registration system and has adopted ID-card clauses.
- The national ID-card law was passed on 3 Sep 2026 for sites >100m DKK. It adds per-worker registration and time registration, with reporting to Arbejdstilsynet expected from about 2029. This increases chain-documentation work over the next few years.

**Current workflow:**
1. The main contractor notifies the municipality of each subcontractor (name, CVR, contact, period) before use.
2. The municipality or its control firm sends a documentation request covering N employees across several companies.
3. The main contractor emails subcontractors and asks for payslips, timesheets and eIndkomst PDFs. Foreign subcontractors send documents in other formats and languages.
4. An office person checks whether the documents are complete and whether wages meet the collective agreement, chases missing items and translates. They zip and send everything within 5 business days.
5. They repeat this for each municipality's template and each request, and store everything for contract term + 12 months.

**Pain:**
The deadline is short (5 business days) and the request covers the whole chain. Non-compliance can lead to withheld payment or penalties under the clauses. The documentation lists differ between municipalities. No complaint data was found (unverified volume of requests per year).

**Existing solutions:**
- Københavns Kommune's own registration/control system (free, but only for KK contracts)
- Byggeriets Samfundsansvar control and documentation tool (a free question set, not a document workflow)
- Payroll systems (Danløn, Proløn, Intect, etc.), which produce payslips but not chain-wide evidence packs
- Site-access / ID vendors (e.g. Vitani Security + Partisia on Nyt Bispebjerg Hospital); the future commercial ID-card vendors
- Labour lawyers and control firms doing it manually

**The gap:**
No product found that lets a main contractor request, collect, check for completeness and package payroll evidence from every subcontractor against a *specific municipality's clause template*, with deadline tracking and 12-month retention. Municipal systems cover registration, not the evidence pack. Payroll systems stop at the company boundary.

**Possible product:**
A subcontractor evidence portal. The main contractor adds a contract (choosing the municipality's clause template) and invites subcontractors. Subcontractors upload payslips, timesheets and eIndkomst monthly, and the system flags gaps. When a request arrives, it generates the exact pack in under an hour.

**MVP:**
Templates for 5 large clause families (KK, joint Funen clause, Aarhus, Odense, Region Hovedstaden). Per-subcontractor upload links, a per-employee/month completeness checklist, deadline countdown and zip export with an index. No payroll integration at first.

**Pricing hypothesis:**
DKK 800–2,000/month per main contractor (about $115–290), or DKK 300–500 per active public contract per month. Subcontractors are free.

**How to find first customers:**
Public tender award notices (udbud.dk / TED award notices list winning contractors). Municipal supplier lists, Dansk Byggeri / DI Byggeri / TEKNIQ member directories, and Byggeriets Samfundsansvar network.

**Risks:**
Copenhagen or the new state ID-card register may grow into evidence collection. Requests may be rarer than assumed (random spot checks). Sensitive personal data (GDPR, joint data responsibility terms). The market is mid-size contractors only, perhaps a few hundred to ~2,000 firms (estimate).

**Kill condition:**
Interviews show that fewer than ~2 documentation requests per contractor per year arrive, or that contractors already handle them adequately via payroll exports plus email.

**Score:** 5/10

**Sources:**
- Langeland Kommune labour-clause guidelines: https://langelandkommune.dk/p/Erhverv%20-%20Dokumenter%20/Indk%C3%B8b%20og%20Udbud/Bilag-2---Retningslinjer-for-anvendelse-af-arbejdsklausuler-i-Langeland-Kommune.pdf
- Joint Funen labour clause (Faaborg-Midtfyn): https://www.fmk.dk/media/anxfilcl/revideret-faelles-fynsk-arbejdsklausul_webtilgaengelig.docx
- Albertslund labour clause 2025: https://albertslund.dk/media/5qei53tx/bilag-12_arbejdsklausul-ak-skaeve-boliger.pdf
- Helsingør Kommune labour clause: https://www.helsingor.dk/Media/639011290382385434/helsingør-kommunes-arbejdsklausul-a.pdf
- Copenhagen registration clause (2026): https://socialdumping.kk.dk/sites/default/files/2026-01/Kontraktbestemmelser%20om%20registrering%20af%20virksomheder%20og%20medarbejdere%20%28entrepren%C3%B8rer%29.pdf
- Copenhagen labour clause overview: https://socialdumping.kk.dk/overblik/leverandoerer-til-koebenhavns-kommune/arbejdsklausulen
- Byggeriets Samfundsansvar documentation tool: https://www.byggerietssamfundsansvar.dk/case/klausuler-og-dokumentationsredskaber/
- ID-card law adopted (Dansk Erhverv, Sep 2026): https://www.danskerhverv.dk/presse-og-nyheder/nyheder/2026/september/nye-krav-om-id-kort-pa-storre-byggepladser/
- Dagens Byggeri on adoption: https://dagensbyggeri.dk/arbejdsmarked/folketinget-vedtager-krav-om-id-kort/
- DA on the hybrid model: https://www.da.dk/politik-og-analyser/arbejdsmiljoe-og-sundhed/2026/arbejdsmarkedets-parter-enige-om-enkel-og-effektiv-model-for-id-kort/
- Region H / Vitani + Partisia digital site identity: https://www.securityworldmarket.com/dk/Nyheder/Erhvervsnyheder/digital-identitet-skal-styrke-sikkerheden-ved-byggepladsbyggeri

---

### Opportunity: ID-card time-registration bridge for small subcontractors (watch-list)

**Industry:**
Construction subcontractors (trades: painters, electricians, carpenters) working on large sites

**Buyer:**
Owner/office manager of small trade firms (5–50 staff) that rotate workers between large sites and need to register workers and time under whatever site-specific ID system each building owner chooses.

**Trigger / Why now:**
The ID-card law was passed on 3 Sep 2026 for sites >100m DKK excl. VAT. The building owner must ensure that everyone wears a card. Workers' time on site must be registered and reported to Arbejdstilsynet. Under the hybrid model, the state runs a base ID and central register, while commercial vendors offer site-specific solutions. An industry-run scheme is expected to take effect in 2028, with the reporting duty around 2029 (a state card around 2030 if the industry fails). DI's trade sections (painters, technical installation) are already briefing members.

**Current workflow:**
(Future) 1. Each site uses its own access/ID vendor. 2. The subcontractor registers each worker (photo, nationality, function, mandatory training, CVR/RUT) per site. 3. Time on site is captured by site systems and must reconcile with the firm's own time/payroll system. 4. The same worker data is re-entered across multiple site vendors.

**Pain:**
Expected duplicate entry across site vendors, plus reconciliation with payroll for labour-clause checks. This pain is not yet observed and is inferred from the law's design.

**Existing solutions:**
Future commercial ID vendors, the state base-ID/register, field-service and time apps (Ordrestyring, Minuba, Apacta: names known but competitive position not verified in this session), and payroll systems.

**The gap:**
A single source of worker credentials (training certificates, CVR/RUT) pushed to many site-specific systems, reconciled with timesheets. Whether a gap exists depends on whether the central register makes this redundant.

**Possible product:**
A worker-credential wallet plus sync for small trade firms, feeding site vendors and the firm's time app.

**MVP:**
Not buildable until the technical specification of the register and vendor interfaces is published (2027–2028).

**Pricing hypothesis:**
DKK 30–60 per worker/month (estimate).

**How to find first customers:**
DI Malersektionen, TEKNIQ and Dansk Byggeri member lists, and subcontractor lists on large public projects.

**Risks:**
Timing (2028–2029). The central register may solve multi-site re-entry. Integration access to site vendors is uncertain. Existing field-service apps may add it.

**Kill condition:**
The central register exposes a single credential profile that all site vendors must accept, or the major time/field-service apps announce integrations.

**Score:** 3/10 (watch; revisit when the executive order and technical specs are published)

**Sources:**
- Draft bill, Lov om id-kort på byggepladser: https://www.ft.dk/samling/20251/almdel/beu/bilag/33/3087446.pdf
- Bill text: https://www.retsinformation.dk/eli/ft/202522L00019/dan/pdf
- DI Malersektionen on ID card (Sep 2026): https://www.danskindustri.dk/medlemsforeninger/malersektionen/nyheder/2026/nyt-id-kort-pa-byggepladser-det-betyder-det-for-malervirksomheder/
- DI Teknik og Installation: https://www.danskindustri.dk/brancher/di-teknik-og-installation/nyhedsarkiv/2026/nyt-id-kort-hvad-betyder-det-for-din-virksomhed/
- Bygtek, "Lange udsigter til id-kort": https://bygtek.dk/artikel/politik/lange-udsigter-til-id-kort-p-byggepladser

---

### Opportunity: ADS waste-data reporting helper for small waste collectors

**Industry:**
Waste collection / skip hire / scrap and demolition collectors

**Buyer:**
Owner or office manager at small registered waste collectors (Affaldsregistret) that lack an enterprise waste-management system.

**Trigger / Why now:**
The new Bekendtgørelse om Affaldsdatasystemet (BEK 1465 of 28/11/2025) took effect on 1 Jan 2026. It clarifies who must report (§5) for 2026 data, with the first report under the clarified duty due 1 Feb 2027. The annual deadline is 1 Feb, and the fraction codes (H/E codes) have changed. Miljøstyrelsen is tightening data quality, and waste producers rely on collectors to report under the correct facility number.

**Current workflow:**
1. The collector records collections in its own system or a spreadsheet (customer, address/facility number, fraction, tonnes, destination).
2. At year end, the data is mapped to ADS fraction codes and facility identifiers.
3. Upload by CSV or manual entry (an API exists), with authorisation via MitID Business.
4. Fix rejections and corrections.

**Pain:**
Code mapping and facility-number matching are error-prone. The new codes create rework, and waste producers push collectors for correct reporting. Evidence of pain is regulatory, not complaint-based.

**Existing solutions:**
Enterprise waste systems (Stena, MONTES WasteIT for Business Central; AMCS and other ERPs, not verified locally), Miljøstyrelsen's own manual/CSV upload, and large collectors' in-house IT.

**The gap:**
A cheap validator/converter for small collectors: spreadsheet in, validated ADS CSV out, with the new codes and facility-number lookup.

**Possible product:**
A web tool that ingests an Excel/CSV collection log, maps fractions to the new ADS codes, validates facility numbers and outputs an ADS-ready CSV (later via API) with an error report.

**MVP:**
A single-page converter plus validation rules for the 2026 code list.

**Pricing hypothesis:**
DKK 2,000–5,000 per year per collector (annual task), or about DKK 300/month with continuous reporting.

**How to find first customers:**
Affaldsregistret (public register: 1,264 actors, 610 with a Danish CVR/VAT number) and DAKOFA network.

**Risks:**
The buyer pool is tiny (about 600). The workflow is annual. Miljøstyrelsen may improve its own CSV validation, and accounting/fleet vendors could add an export.

**Kill condition:**
Fewer than about 100 collectors lack a system that already exports ADS files, or MST's CSV validator already gives clear errors.

**Score:** 3/10

**Sources:**
- BEK 1465/2025: https://www.retsinformation.dk/eli/lta/2025/1465/pdf
- Stena Recycling on ADS changes: https://www.stenarecycling.com/da/nyheder-indsigt/indsigt-inspiration/vejledningsartikler/andringer-i-ads/
- DAKOFA on tightened ADS rules: https://dakofa.dk/nyhed/miljoestyrelsen-praeciserer-reglerne-for-indberetning-til-affaldsdatasystemet
- Miljøstyrelsen reporting page: https://mst.dk/erhverv/groen-produktion-og-affald/affald-og-genanvendelse/affaldshaandtering/affaldsdata-og-affaldsdatasystemet/indberet-affaldsdata
- Number of registered waste actors (Københavns Kommune): https://www.kk.dk/erhverv/erhvervsaffald/dokumentation-af-affaldshaandtering
- MONTES WasteIT flyer: https://montes.dk/media/uk5p3cgn/flyer-monteswasteit-01.pdf

---

## Rejected after competitor research

- **Packaging EPR reporting (Dansk Producentansvar, first report 1 Jun 2026).** This looked ideal: new, mandatory, affects all companies placing packaging on the market. It was killed by the collective schemes (Emballage Indberetning, 3,800+ members, with its own software), Varefakta Packaging (free for suppliers), ReCykla and MONTES WasteIT (Business Central module).
  https://thehub.io/startups/emballage-indberetning · https://vana.dk/media/xvrdg1ye/one-pager-varefakta-packaging-dk.pdf · https://www.danskindustri.dk/politik-og-analyser/di-mener/miljoenergi/cirkular-okonomi/cirkularitetcases/recykla-webbaseret-platform-til-handtering-af-producentansvar-pa-emballage-rapportering-oget-cirkularitet-og-reducerede-afgifter/ · https://www.danskerhverv.dk/presse-og-nyheder/nyheder/2026/februar/regningen-i-producentansvaret-for-emballage-sankes-vigtigt-skridt-men-mere-skal-gores/
- **A4/A5 construction-process CO2 documentation (BR18 from 1 Jul 2025).** This was a perfect regulatory trigger with per-project, monthly data collection from contractors. It was killed by a wave of dedicated tools: A45 (invoice scanning + BR18 table calculations), Acembee, nullcarbon, dinLCAhjælper and Climatebase.
  https://www.a45lca.dk/ · https://www.acembee.com/en/blog/lca-a5-rapportering-for-byggepladser-en-praktisk-guide · https://www.nullcarbon.dk/docs/compliance/byggeprocessen-lca-guide · https://xn--dinlcahjlper-edb.dk/blog/a4-a5-dokumentation · https://sbst.dk/Media/638731490173267243/VCBK_Guide_Byggeprocessen_fra_1._juli_2025-a[1].pdf
- **LCA for single-family houses / summer houses (all new builds from 1 Jul 2025).** Killed by LCAbyg, which is free and government-backed, plus consultants and typehus companies doing it in-house. The obligation sits with the building owner and is a one-off per project.
  https://www.bdo.dk/da-dk/faglig-info/advisory/csr-og-baeredygtighed/nye-klimakrav-til-byggeriet-pr-1-juli-2025 · https://www.bolius.dk/skal-dit-hus-have-et-co2-regnskab-bliv-klogere-paa-lca-97945

## Too competitive

- **Digital bookkeeping for sole traders (mandatory 1 Jan 2026):** 92 registered systems.
  https://www.danskerhverv.dk/presse-og-nyheder/nyheder/2025/april/digital-bogforing-bliver-ogsa-obligatorisk-for-personligt-ejede-virksomheder-og-for-eninger-fra-1.-januar-2026
- **Food egenkontrol / temperature logging:** ThermIT E-Kontrol plus consultants (Food Consult Nordic, 600+ clients) and international apps. https://nordsoeposten.dk/nyt-nordjysk-samarbejde-om-digital-foedevaresikkerhed
- **AML/KYC for accountants and estate agents:** Erhvervsstyrelsen enforcement is active in 2025 (e.g. De Små Revisorer ApS, Wilstrup Bolig ApS), but generic KYC/AML tooling is mature across the EU. Danish vendor coverage was not verified in this session. https://www.lovguiden.dk/praksisoversigt/hvidvasktilsyn

## Attractive problem, poor distribution / timing

- **ID-card multi-site credential sync:** real future pain, but no spec yet and in force only 2028–2029. The central register may remove the need (listed above as a watch-list item).
- **ADS reporting for small waste collectors:** a real compliance task, but only about 600 Danish buyers and an annual frequency.

## Not screened (budget)

Funeral homes, veterinary/VetStat antibiotic reporting, pharmacies (highly concentrated, single-system sector), private daycare, agriculture (SEGES / Dansk Landbrugsrådgivning dominates farm compliance tools; not verified this session).
