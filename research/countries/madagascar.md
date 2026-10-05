# Madagascar: Indie-Hacker Opportunity Research

**Date:** 2026-10-04 | **Market size class:** small (10 searches used) | **Languages searched:** French, English

## Summary verdict

Madagascar is a **weak standalone market** for a foreign solo founder. The country is open in the legal sense: we found no US, EU or UK sanctions that block selling software there. But the operating environment is fragile:
- A military-led transition took power after the October 2025 Gen Z protests, and the African Union suspended the country.
- Coface and other risk agencies report administrative paralysis.
- AGOA expired in September 2025, which hits the garment and vanilla exporters who would otherwise be buyers.
- The formal SME base is small and buyers are price-sensitive.

The one real "why now" is **mandatory B2B/B2G e-invoicing**. A decree was published on 2 July 2025, and in March 2026 the DGI signed an agreement with Rwanda's RRA to adopt Rwanda's EBM system. Its rollout is tiered: large firms within 6 months of platform launch, mid-size within 1 year, small within 2 years. Even this is a thin opportunity, because the state platform and certified-device model may leave little room for third parties. All ideas below are rated **interview-only**. None is worth building yet.

**Accessibility:**
- No comprehensive sanctions found. The risks are AU suspension and possible targeted sanctions on coup actors, not on commerce.
- Payments would most likely come through local bank transfer or mobile money (MVola, Orange Money, Airtel Money). We did not verify whether foreign merchants can access these rails.
- In practice, a foreign founder would need a local reseller or accounting-firm partner.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| All VAT-registered SMEs / accountants | DGI e-invoicing (decree of 2 Jul 2025) and EBM rollout with Rwanda RRA (MoU of 30 Mar 2026) | Candidate (weak) | Real mandatory trigger, but the platform's spec, API and certification are unpublished; the state may provide free tools |
| Payroll bureaus / accounting firms | Monthly Déclaration des Salaires: IRSA, CNaPS, OSTIE, FMFP due by the 15th | Candidate (weak) | Monthly and mandatory, but Sage Paie (local integrator SRA Madagascar) and local tools already cover it; low willingness to pay |
| Vanilla exporters | Annual export agrément, campaign export docs, quality and traceability for buyers | Candidate (weak) | About 80 to 300 approved exporters; sector in oversupply and price crisis; rules change by ministerial note each campaign |
| Cocoa / coffee exporters | EUDR geolocation and due-diligence data for EU buyers | Poor distribution / too competitive | Few dozen exporters; EUDR deferred again (large operators end-2026, small mid-2027, per the Dec 2025 amendment; verify); global traceability SaaS already serve this |
| Fisheries / seafood exporters | ASH (Autorité Sanitaire Halieutique) health certificates, HACCP records, EU export docs | Rejected: too few buyers | About 24 EU-approved establishments; consultants and in-house QA handle it |
| Customs brokers / freight forwarders | TradeNet / GasyNet declarations | Rejected | GasyNet is a state–SGS PPP single window; integration is closed and the incumbent controls the rails |
| Textile EPZ exporters | US/EU origin documentation | Rejected | AGOA lapsed in Sep 2025; segment is shrinking, not adding workflows |

---

### Opportunity: E-invoice readiness connector for Malagasy SMEs on Sage / Excel invoicing

**Industry:**
Cross-industry (VAT-registered wholesalers, distributors, services). Sold through accounting firms.

**Buyer:**
Mid-size VAT-registered companies (finance manager / DAF) and the "cabinets d'expertise comptable" that keep their books.

**Trigger / Why now:**
- Decree of 2 July 2025 makes e-invoicing mandatory for all B2B and B2G transactions, VAT-exempt ones included.
- A central DGI platform issues, receives and archives invoices, and pre-fills VAT returns.
- Phase-in: large firms ≤6 months after platform launch, mid-size ≤1 year, small ≤2 years.
- DGI signed a cooperation agreement with Rwanda Revenue Authority on 30 March 2026 to deploy the EBM (Electronic Billing Machine) system.
- The LF 2026 information sessions with operators led with e-invoicing.

**Current workflow:**
1. Invoices are produced in Sage 100 Gestion Commerciale, a local ERP, Excel or Word.
2. The accountant re-keys sales and purchase ledgers for the monthly VAT return on the DGI e-filing portal (impots.mg).
3. Once the platform is live, each invoice must also be issued or registered via the DGI platform or an EBM device or software, which is a new duplicate-entry step.

**Pain:**
- Mandatory, per-invoice, with VAT-deduction consequences: invoices not on the platform risk being non-deductible (unverified detail).
- Many SMEs run old Sage 100 or Excel set-ups that will not natively talk to a new DGI API.

**Existing solutions:**
- The DGI's own platform, possibly with a free web portal for small taxpayers.
- Rwanda-style EBM devices or certified VSDC software.
- Sage partners (SRA Madagascar / Interface Technologie) are likely to ship connectors for their base.
- International e-invoicing vendors (EDICOM, Voxel, Comarch) are tracking the mandate for multinationals.

**The gap:**
- No visible lightweight connector for mid-size firms on older Sage, Excel or other local invoicing tools.
- No exception queue for rejected or failed invoice registrations.
- Unknown until the technical spec is published.

**Possible product:**
A small bridge that reads invoices from Sage 100 or Excel exports and pushes them to the DGI platform or EBM interface. It would show a rejection/exception dashboard and reconcile platform-registered invoices against the VAT return.

**MVP:**
CSV/Sage export → DGI-format validator and submitter, with an error list, for one accounting firm's client portfolio.

**Pricing hypothesis:**
About 50,000–150,000 MGA per client company per month (about US$11–33, estimate). Or a per-accounting-firm licence of about US$100–200/month.

**How to find first customers:**
- Members of the Ordre des Experts-Comptables et Financiers de Madagascar (OECFM), the national accountants' body (not verified that its directory is public).
- DGI "grandes entreprises" lists.
- Attendees of the Cecom/DGI "Journée de la fiscalité".

**Risks:**
- The platform launch date is unknown, and political instability could delay it.
- The EBM model may require certified software or devices, which locks out small vendors.
- The DGI may offer a free portal.
- Low willingness to pay.
- Sage partners may close the gap first.

**Kill condition:**
- The DGI publishes no public API or third-party certification route, or provides a free bulk-upload tool.
- Or certification requires a local legal entity or audit costing more than US$10k.

**Score:** 5/10

**Sources:**
- https://edicomgroup.com/blog/madagascar-implementation-mandatory-electronic-invoicing
- https://www.comarch.com/trade-and-services/data-management/legal-regulation-changes/madagascar-moves-to-implement-comprehensive-e-invoicing-mandate/
- https://www.newtimes.co.rw/article/34494/news/technology/madagascar-becomes-fifth-country-to-adopt-rwandas-ebm-tax-system
- https://taarifa.rw/2026/03/30/rwanda-madagascar-sign-agreement-to-strengthen-revenue-systems/
- https://www.theeastafrican.co.ke/tea/business-tech/kigali-stakes-claim-as-africa-tax-tech-hub-with-madagascar-deal-5415418
- https://fr.allafrica.com/stories/202604170575.html
- https://www.madagascar-services.com/blog/en/2025/12/18/changes-introduced-by-the-2026-finance-act-in-madagascar/
- https://www.impots.mg/accueil
- https://erpresearch.com/sage-partners/interface-technologie-sra-madagascar

---

### Opportunity: Vanilla exporter campaign-compliance and buyer document pack

**Industry:**
Vanilla export (Sava region, Antalaha / Sambava).

**Buyer:**
Approved vanilla exporters: the general manager or export administrator of small and mid-size exporting houses.

**Trigger / Why now:**
- 2025–2026 reforms: the number of agréments is rising from about 80 to nearly 300.
- Agrément applications are made by email for each campaign, and approved lists are published every 15 days.
- The campaign runs from 15 Oct 2025 to 30 Jun 2026.
- An 18-month relaunch plan targets traceability and quality.
- The new 2026–2027 campaign rules are expected around October 2026 (unverified).

**Current workflow:**
1. Apply for the annual agrément by email with a dossier.
2. For each shipment, assemble the export authorisation, quality / phytosanitary certificates and customs (TradeNet) data.
3. Send buyers (US/EU flavour houses) traceability and quality files, often in Excel or PDF.

**Pain:**
- Rules change every campaign, and operators publicly opposed the January 2026 reforms.
- Buyers increasingly ask for traceability.
- Failures mean blocked shipments.

**Existing solutions:**
- Excel and consultants.
- Buyer-run sustainability programmes (Symrise, Givaudan, McCormick direct sourcing) that push their own tools.
- General ag-traceability SaaS (Farmforce, SourceMap; not verified as used in Malagasy vanilla).

**The gap:**
Small, newly approved exporters lack a dossier and shipment-document system tailored to Malagasy campaign rules. This is a hypothesis; no direct complaint was found.

**Possible product:**
A shipment file builder that keeps a lot register from collector to exporter, generates the ministry, customs and buyer document set, and tracks agrément renewal.

**MVP:**
Lot register plus a per-shipment checklist and PDF pack for 5–10 exporters.

**Pricing hypothesis:**
About US$50–150/month per exporter, or per shipment (estimate).

**How to find first customers:**
- Ministry of Commerce published lists of approved exporters (every 15 days).
- GEVM (vanilla exporters' group; not verified).

**Risks:**
- The sector is in a price and oversupply crisis.
- Rules are politically volatile.
- Payment capacity is tight.
- Large buyers may impose their own platforms.

**Kill condition:**
- Interviews show that exporters rely on buyers' tools or a freight forwarder for documents.
- Or fewer than about 100 exporters remain active.

**Score:** 4/10

**Sources:**
- https://fr.allafrica.com/stories/202601210250.html
- https://www.lexpress.mg/2025/11/exportation-un-plan-sur-18-mois-pour.html
- https://newsmada.com/?p=157224
- https://www.ecofinagency.com/news-agriculture/2306-56699-madagascar-s-vanilla-buyback-plan-may-fail-to-solve-oversupply-crisis-exporters-say
- https://www.lexpress.mg/2024/08/filiere-vanille-hausse-du-nombre.html

---

### Opportunity: Monthly payroll-declaration (DS: IRSA/CNaPS/OSTIE/FMFP) workbench for accounting firms

**Industry:**
Payroll bureaus / accounting firms.

**Buyer:**
Small cabinets comptables handling payroll for 20–200 SME clients.

**Trigger / Why now:**
- No new 2026 trigger was found. This is a recurring monthly obligation: declaration and payment by the 15th of the following month.
- The DGI digitalisation push, including the LF 2026 changes, may tighten e-filing (unverified).

**Current workflow:**
1. Compute payroll in Excel or Sage Paie.
2. Fill the IRSA return for the DGI and the separate CNaPS (social security) and OSTIE (occupational health) declarations on different forms or portals.
3. Reconcile payments.

**Pain:**
- Monthly, multi-agency, with penalties for late filing.
- Evidence of duplicate entry is inferred, not documented.

**Existing solutions:**
- Sage 100 Paie & RH via SRA Madagascar.
- EOR and payroll providers (Rivermate, Pebl) for foreign employers.
- Local payroll software (names not verified).
- Manual Excel.

**The gap:**
Generating all agency formats from one payroll run for multiple clients. This is unconfirmed.

**Possible product:**
A multi-client payroll declaration generator that outputs IRSA, CNaPS, OSTIE and FMFP files with a deadline tracker.

**MVP:**
Excel payroll import → four declaration outputs → status board.

**Pricing hypothesis:**
About US$30–80/month per firm (estimate).

**How to find first customers:**
OECFM member firms; Antananarivo accounting-firm listings.

**Risks:**
- Low prices.
- Sage dominance in the formal segment.
- Agency format changes.
- Small market.

**Kill condition:**
- Local payroll tools already generate all four filings.
- Or agencies accept a single unified upload.

**Score:** 3/10

**Sources:**
- https://hellopebl.com/resources/blog/payroll-tax-in-madagascar/
- https://erpresearch.com/sage-partners/interface-technologie-sra-madagascar
- https://rivermate.com/fr/guides/madagascar/calculateur-cout-employe

---

## Rejected after competitor research

- **Customs declaration automation (TradeNet).** The GasyNet single window is a state and SGS public-private partnership connecting Customs, brokers, banks and ministries. Integration is controlled by the incumbent, so there is no room for a third-party bridge. Sources: https://newsmada.com/?p=134449, https://miga.org/project/gasy-community-network-services-sa-gsynet
- **Cocoa/coffee EUDR traceability for Malagasy exporters.**
  - Very few exporters and cooperatives.
  - Global traceability SaaS and NGO programmes (AVSF/Ethiquable, Fairtrade) already target this.
  - EU deadlines were postponed again.
  - NGOs note that Malagasy cooperatives are "left to their own devices", which points to low ability to pay, not a market.
  - Sources: https://www.avsf.org/app/uploads/2025/12/note-avsf-ethiquable-RDUE_FR.pdf, https://www.fairtrade.net/content/dam/fairtrade/max-havelaar-france/engagement-entreprises/rdue/FR_Cocoa.pdf
- **Seafood export health-certificate workflow.** Only about 24 EU-approved establishments. ASH and in-house HACCP/QA staff handle it. Source: https://rr-africa.woah.org/app/uploads/2012/03/19_madagascar.pdf (older data)

## Attractive problem, poor distribution

- Smallholder cocoa / vanilla plot-level traceability: real pain, but buyers are cooperatives with no budget, and the paying parties are foreign buyers who run their own systems.

## Too competitive

- Payroll and accounting for formal mid-market firms: Sage 100 / Sage Paie via the local integrator SRA Madagascar.

## Notes on accessibility

- Political: military-led "Refondation" since 17 Oct 2025; AU suspension; Coface reports administrative paralysis. Sources: https://www.coface.com/news-economy-and-insights/business-risk-dashboard/country-risk-files/madagascar, https://www.afrique-sur7.fr/coup-detat-a-madagascar-le-pays-suspendu-de-lua
- No US/EU/UK sanctions on software sales found. A local partner (an accounting firm) is the realistic route. Madagascar is better treated as an **add-on to a francophone Africa e-invoicing / EBM product**, for example alongside Rwanda-model EBM markets or francophone neighbours, than as a standalone market.
