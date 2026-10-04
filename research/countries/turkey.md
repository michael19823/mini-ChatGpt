# Turkey (Türkiye) - Opportunity Research (2026-10-04)

Research depth: 8 searches, standard mode, search snippets only (WebFetch blocked). Many details are unverified. Accessibility: no sanctions barrier for a foreign solo founder. Payment and sales friction is real (TRY volatility, local e-invoicing integrators require a GİB licence, KVKK data law), but SaaS sales are feasible.

## Industries screened

| Industry | Workflow | Verdict | Reason |
|---|---|---|---|
| Retail/SME accounting | e-Invoice/e-Archive/e-İrsaliye transition (Jul 2026 thresholds) | Too competitive | Paraşüt, BirFatura, Faturaport, Sovos and other GİB-licensed integrators already bundle it |
| Retail/beverage (deposit) | Deposit (DOA) return-point registration (dbys.gov.tr) and reconciliation | Weak | Operators supply tooling; incentive-based, not a penalty workflow |
| Packaging/producers | GEKAP quarterly declarations | Maybe (unverified) | Mandatory and recurring, but accountants and ERP modules likely cover it |
| Waste transport/generators | MoTAT / TABS / KDS reporting | Maybe | Government app plus vendors (Seyir Mobil); small-operator exceptions unverified |
| Metal/aluminium/fertiliser exporters | EU CBAM emissions data (definitive period since 1 Jan 2026) | Best lead | Mandatory data demanded by EU buyers; MRV tooling mostly consultancies and enterprise (SAP) |
| Customs brokers | Declarations via BİLGE | Reject | About 92% of foreign trade goes through brokers who have established software; BİLGE is government-owned (competitor detail unverified) |
| Fuel stations | YN ÖKC (new-gen cash registers) with e-documents (VUK GT 593, May 2026) | Reject | Hardware/integrator-driven; vendors are certified |

## Opportunities

### Opportunity: CBAM Emissions-Data Pack for Turkish Metal and Fertiliser Subcontractors

**Industry:**
Steel/aluminium fabrication, fasteners, small processors exporting to the EU.

**Buyer:**
Export or sustainability manager at a small or mid-size producer (SME to mid-market) supplying EU importers.

**Trigger / Why now:**
CBAM definitive period began 1 Jan 2026; EU importers need verified installation-level embedded-emissions data, and default values are penalising. Turkey is a major EU supplier in these sectors.

**Current workflow:**
1. EU buyer sends an emissions data request (Excel template).
2. Plant staff collect energy, fuel and material data in spreadsheets.
3. A consultant or verifier reformats the data to the EU methodology.
4. Each buyer's request is answered separately, and the cycle repeats.

**Pain:**
The sources describe CBAM as an MRV test; plants unable to measure or verify data fall back on high default values.

**Existing solutions:**
SAP carbon tools, Emissary Environmental Technologies, consultancies, and generic carbon accounting software.

**The gap:**
A cheap, Turkish-language, per-product embedded-emissions calculator and buyer-specific reporting for sub-tier SMEs. This is unverified; I did not check local vendors beyond the above.

**Possible product:**
A workflow tool that turns monthly energy and production inputs into a per-shipment CBAM data package in buyer-specific formats.

**MVP:**
Excel/CSV import, default-versus-actual calculator, PDF/XML export for a few buyer templates.

**Pricing hypothesis:**
TRY equivalent of roughly 100-300 USD/month per plant (estimate).

**How to find first customers:**
Exporter association member lists (e.g. steel/aluminium exporters' associations), Ministry of Trade and customs export records via brokers; LinkedIn.

**Risks:**
Methodology complexity and verifier acceptance; consultancies; scope changes in the EU (downstream extensions); a purely technical-calculation product risks being generic.

**Kill condition:**
If buyers accept only verifier-produced data and the consultants bundle the tool free, or if fewer than 20 SME plants pay for help in interviews.

**Score:** 6/10

**Sources:**
- https://www.forbes.com.tr/ekonomi/is-dunyasi-icin-ab-ile-gumrukte-yeni-devir-zor-sinav
- https://hukukcularevi.com/danismanlik/cbam-skdm-2026-ab-ihracatci-uyum/
- https://www.sap.com/turkey/resources/cbam-carbon-border-adjustment-mechanism

### Opportunity: Small Waste Generator/Transporter Compliance Layer (MoTAT, TABS, KDS)

**Industry:**
Hazardous-waste transport and small generators (auto repair, clinics, restaurants).

**Buyer:**
Licensed waste transporters/collectors and environmental consultancies managing many small generator clients.

**Trigger / Why now:**
There is no new 2026 trigger in the sources I found; the existing system is long-running (MoTAT since 2016, about 24 million tonnes tracked).

**Current workflow:**
1. The generator declares waste in TABS.
2. The transporter records each trip in the MoTAT app.
3. Disposal facility confirmation, then annual declarations and mass-balance (KDS).
4. Consultants repeat this for dozens of clients.

**Pain:**
Mandatory, per-shipment frequency. Pain evidence is thin (unverified).

**Existing solutions:**
Official MoTAT/TABS app, Seyir Mobil (MoTAT telematics), Teltonika telematics, and consultants.

**The gap:**
A multi-client dashboard for consultants with deadline tracking and document archive. Unproven.

**Possible product:**
Multi-client compliance tracker for environmental consultants.

**MVP:**
Client register, waste-code deadline calendar, document vault, TABS export checklist.

**Pricing hypothesis:**
Roughly 30-80 USD/month per consultancy (estimate).

**How to find first customers:**
Ministry of Environment licensed collector/consultancy lists (existence of the lists unverified).

**Risks:**
No official API (unverified), so it would be a checklist tool; low willingness to pay.

**Kill condition:**
No official integration or export is possible, or interviews show consultants already use spreadsheets happily.

**Score:** 4/10

**Sources:**
- https://seyirmobil.com/en/motat-mobile-hazardous-waste-transportation
- https://www.benguturk.com/ekonomi/mobil-atik-takip-sistemi-ile-9-yilda-24-milyon-ton-tehlikeli-atik-guvenle-206494h

### Opportunity: GEKAP and Deposit (DOA) Obligation Tracker for Packaged-Goods Sellers

**Industry:**
Packaged-goods and beverage retailers/importers.

**Buyer:**
Accountants (SMMM) serving small producers, importers and retailers.

**Trigger / Why now:**
The deposit system (DOA) started 1 Jul 2026 and requires registration on dbys.gov.tr and the choice of an operator; GEKAP rates are revalued every January and declared quarterly.

**Current workflow:**
1. Classify products by GEKAP category and weight.
2. Calculate the quarterly levy in a spreadsheet.
3. File the declaration with the tax office and pay.
4. Separately handle DOA registration and operator contracts.

**Pain:**
Mandatory and recurring; however, evidence of tool complaints was not found.

**Existing solutions:**
Accounting/ERP modules, accountants, and operator portals (unverified).

**The gap:**
Product-level weight/category master data to GEKAP calculation. Unverified.

**Possible product:**
A calculator and filing-prep tool importing sales or import data.

**MVP:**
CSV import, category mapping, quarterly summary.

**Pricing hypothesis:**
About 15-40 USD/month per client company (estimate).

**How to find first customers:**
Accountant networks, importer directories.

**Risks:**
Probably served inside existing ERPs; a tiny willingness to pay.

**Kill condition:**
Major ERPs and pre-accounting programs already include GEKAP.

**Score:** 3/10

**Sources:**
- https://hukukcularevi.com/gekap-geri-kazanim-katilim-payi-sifir-atik/
- https://www.dha.com.tr/gundem/isletmeler-icin-depozito-bilgi-yonetim-sistemine-kayit-sureci-basladi-2868535

## Rejected after competitor research

- E-İrsaliye/e-Fatura for SMEs (July 2026 thresholds: 3M TL turnover for e-invoice/e-archive, 10M TL for e-irsaliye): Paraşüt, BirFatura, Faturaport and Sovos serve this cheaply. Sources: https://sovos.com/tr/blog/kdv/sirketler-icin-2026-e-donusum-takvimi-ve-zorunluluklar/ , https://birfatura.com/hizli-e-irsaliye-basvuru-secenekleri/
- Customs declaration software: government BİLGE plus established broker systems; brokers handle about 92% of trade. Source: https://ticaret.gov.tr/gumruk-islemleri/sikca-sorulan-sorular/ticari/gumruk-musavirleri
- YN ÖKC e-document integration: certified hardware vendors (VUK GT 593, May 2026).

## Attractive problem, poor distribution

- Deposit return-point tooling for small markets: millions of small points, low willingness to pay, operator-controlled.

## Too competitive

- E-invoice/e-archive/e-İrsaliye and pre-accounting for SMEs.

## Gaps in this research

Not screened for lack of search budget: pharmacies, veterinary, food/agriculture exporters, İSG (occupational safety), VERBİS/KVKK, textile exporters. Treat Turkey as under-researched.
