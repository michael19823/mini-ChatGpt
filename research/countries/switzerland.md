# Switzerland

Research depth: shallow (4 searches, WebFetch blocked). Accessible market (no sanctions or rail issues), but high-wage and mature, with strong incumbent vertical software. Most claims below are unverified beyond the search snippets cited.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Customs brokers / forwarders / importers | e-dec to Passar migration (export live 1 Jan 2026, import pilots from Q2 2026, full replacement by end of 2026) | Maybe (weak) | Real trigger, but customs software vendors and ERP modules (Abacus-type) will ship Passar adapters; unverified |
| Food businesses | Self-control (HACCP, traceability) documentation, cantonal registration | Reject | Requirement is old and stable, no new trigger found; many existing HACCP tools (unverified names) |
| SME VAT | ePortal filing mandatory since 2025; optional annual reporting | Reject | Fully covered by Abacus, bexio and similar accounting software, plus the free ESTV ePortal |
| Supply-chain due diligence / ESG (NUFG) | Draft Federal Act on Sustainable Business Management, consultation closed 9 Jul 2026, in force 2027-28 | Poor timing | Law not yet final, targets large firms (>1,000 staff or >CHF 450m), and ESG tools already compete |
| Waste / hazardous materials, pest control, funeral, vets | Not researched (search budget) | Not screened | No evidence gathered |

## Opportunities

### Opportunity: Passar import-declaration bridge for small customs agents and importers

**Industry:**  
Customs brokerage / freight forwarding / import-export SMEs

**Buyer:**  
Small customs brokers, forwarders and importers who file their own declarations, currently on e-dec Import.

**Trigger / Why now:**  
BAZG is replacing e-dec with Passar. Export and transit moved over (Passar 1.0 in June 2023; e-dec Export replaced 1 Jan 2026). Passar 2.0 (standard import) opens to pilots from Q2 2026, and e-dec is to be fully replaced by end of 2026. Registration in the BAZG ePortal is required.

**Current workflow:**  
1. Goods data sits in ERP, shipping documents or spreadsheets.
2. Declaration is built in e-dec, or in an ERP or broker module.
3. Corrections and exceptions are handled manually in the new Passar web tools.

**Pain:**  
Forced migration of a daily workflow. Evidence is limited to the BAZG Passar pages and the BAZG business-group minutes; the extent of real SME pain is unverified.

**Existing solutions:**  
BAZG's own Passar web tools (Declar app, Activ app), ERP and customs-software vendors (names not verified), and consultants.

**The gap:**  
Possibly small shops with spreadsheets or legacy tools that need a Passar-ready import from CSV. Unverified, and likely closed by incumbents quickly.

**Possible product:**  
CSV/PDF-invoice to Passar declaration helper for low-volume importers.

**MVP:**  
Needs Passar API access and certification as a software supplier. Access terms are unverified, which makes the MVP difficulty medium to high.

**Pricing hypothesis:**  
CHF 50-150 per month, or per declaration. Estimate.

**How to find first customers:**  
Customs broker associations (for example SPEDLOGSWISS, unverified) and trade directories.

**Risks:**  
Incumbents ship updates, the transition is temporary, the market is small, and API access may be restricted.

**Kill condition:**  
Dominant ERP and customs vendors already cover Passar import for small users, or BAZG does not open the API to small suppliers.

**Score:** 3/10

**Sources:**  
- https://www.weka.ch/themen/recht/transport-und-verkehr/zoll/article/passar-das-ist-das-neue-verzollungssystem/
- https://www.bazg.admin.ch/de/passar-einfuhr
- https://www.bazg.admin.ch/de/services-fuer-einfuhr-ausfuhr-durchfuhr

## Rejected after competitor research

- Swiss VAT filing helper: mandatory ePortal filing since 2025, but accounting software and the free ESTV ePortal cover it (https://www.avalara.com/us/en/vatlive/country-guides/europe/switzerland/swiss-vat-returns.html).
- Food self-control / traceability software: no new trigger, and an old, well-served requirement (https://www.fr.ch/de/lsvw/energie-landwirtschaft-und-umwelt/landwirtschaft-und-nutztiere/selbstkontrolle-bei-lebensmitteln-zusatzstoffen-und-gebrauchsgegenstaenden).

## Attractive problem, poor distribution

- NUFG supplier ESG data requests to SMEs: the law is not final and the buyers are large firms (https://www.scalemetrics.ai/de/schweizer-gesetz-unternehmensverantwortung-was-kmu-2026-wissen-muessen/).

## Too competitive

- SME accounting and VAT tooling (Abacus, bexio and similar, unverified).

## Not covered

Waste manifests (VeVA), pesticide records, cantonal permits, health and veterinary reporting, and construction were not searched. A deeper pass could look there.
