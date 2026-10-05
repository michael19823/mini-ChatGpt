# Togo: indie software opportunity research

Research date: 2026-10-05. Search budget: small market, 10 WebSearch calls used. WebFetch was not used.
Sources are in French and English.

## Market context and accessibility

- Togo is a small WAEMU/UEMOA economy (currency XOF/FCFA, French-speaking). I found no US/EU/UK sanctions on selling software or IT services there. Nothing in the searches points to a data-localization or licensing regime that would block a foreign solo founder. One exception: a certified e-invoicing platform will probably need OTR approval (see below). **Accessible.**
- Market size is the main limit. The VAT registration threshold rose from 60M to 100M FCFA on 2025-01-01 ([OTR circular 001/2025](https://otr.tg/images/2025/PDF/01/CIRCULAIRE-N001-2025-OTR-CG-CI-REHAUSSEMENT-SEUIL-D-ASSUJETTISSEMENT-TAXE-SUR-LA-TVA.pdf)). As a result, the pool of VAT-registered businesses is small. **Estimate, unverified: low thousands.** I could not find an official count.
- Practical conclusion: Togo works best as **one module in a francophone West Africa product** (with Benin, Côte d'Ivoire and Senegal) rather than as a standalone market.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| All VAT-registered SMEs (via accountants) | Certified B2B e-invoicing, new in the 2026 Finance Law | **Candidate (watch)** | This is a real 2026 mandate, but the decrees (formats, calendar, platform) are still pending, and the OTR may offer a free national platform. |
| Accounting firms / payroll bureaus | Monthly CNSS DRC (contributions plus AMU) and OTR salary-tax withholding | Weak candidate | The CNSS already accepts an Excel import. The market is small, and Sage-type tools and accountants already cover it. |
| Coffee/cocoa exporters and cooperatives | EUDR plot geolocation and lot traceability | Weak candidate | The pain is real, but there are only a few dozen buyers, the volume collapsed (cocoa exports down 64% in 2025-26), and the national system is being built with EU and state support. |
| Customs brokers / freight forwarders (Port of Lomé) | Clearance declarations via the SEGUCE single window | Rejected | SEGUCE, owned by Bureau Veritas BIVAC and Soget, is a single integrated platform. Brokers' work runs through it, so there is little room for a third-party layer. |
| Government vendors | Public-procurement bid files | Not enough evidence | I found no verifiable Togo e-procurement portal or 2025-26 e-submission mandate. Not scored. |

## Opportunities

### Opportunity: Certified e-invoicing connector for SMEs and accountants (Togo module of a WAEMU e-invoicing bridge)

**Industry:**
Cross-industry. Targets VAT-registered SMEs (distributors, wholesalers, service providers invoicing B2B), sold mainly through accounting firms.

**Buyer:**
Managers (DAF, chief accountant) at VAT-registered SMEs that use Excel, Sage-type or locally built invoicing tools. The secondary buyer is the accounting firm (cabinet comptable) that keeps the books for many such SMEs.

**Trigger / Why now:**
The 2026 Finance Law creates mandatory certified e-invoicing for B2B transactions between VAT-registered businesses and for VAT-bearing advance payments. The OTR may run a national platform and/or approve private platforms and certified invoicing software. It may also receive transaction data in real time or periodically. Each certified invoice must carry a unique number, a QR code and a digital fingerprint. The OTR officially started deployment with the employers' federation CNP-Togo in 2026. Formats and the rollout calendar are left to ministerial decrees, and paper "factures normalisées" stay valid until the system is fully in place.

**Current workflow:**
1. Invoices are produced in Excel/Word, in an off-the-shelf accounting package, or on pre-printed standardized invoice books.
2. Under certification, each invoice will have to be keyed into, or pushed to, the OTR platform (or an approved private platform) to get a number, QR code and fingerprint.
3. Accountants then reconcile the certified invoices with VAT returns on the OTR e-services portal.
4. Exceptions such as credit notes, advance payments and corrections are handled by hand.

**Pain:**
The press describes the reform as "bousculant les entreprises" (shaking up businesses) and forcing them to "revoir leurs systèmes" (overhaul their systems). The CNP-Togo is running a private-sector transition consultation. The obligation is mandatory and per invoice (very high frequency), and it is backed by tax-control consequences. Large companies must connect their ERP directly to the OTR servers. SMEs with homemade tools have no such connector.

**Existing solutions:**
- The OTR's planned national platform (free, manual entry). This is the most likely substitute.
- EDICOM, an international e-invoicing vendor that is already publishing on the Togo mandate (enterprise-focused).
- CassKai, an accounting and invoicing SaaS marketed for Togo.
- Sage and other ERP vendors, plus local IT integrators (likely to add OTR modules; not individually verified).
- In nearby countries with similar regimes, local "certified invoicing" vendors grew up quickly after the mandates (analogy only; not verified for Togo).

**The gap:**
SMEs that keep Excel or legacy local software will need a cheap way to push invoices to the OTR, or to bulk-certify them, without retyping each one into a government web form. Accountants with 20 to 100 clients will need a multi-client view (certification status, rejected invoices, reconciliation with the VAT return). Enterprise vendors such as EDICOM will not price for these firms.

**Possible product:**
A lightweight bridge. It takes invoices from Excel/CSV, a simple invoicing UI or common accounting exports, sends them to the OTR certification API (or works as an approved private platform), stores the certified PDF with the QR code, and gives accountants a multi-client exception queue and a VAT reconciliation report.

**MVP:**
CSV/Excel upload, OTR certification call, certified PDF output, and an accountant dashboard listing the failed or rejected invoices. This should only be built after the OTR publishes the technical spec and API.

**Pricing hypothesis:**
SMEs: 10,000 to 25,000 FCFA (about $17 to $42) per month. Accounting firms: 50,000 to 150,000 FCFA per month for multi-client use. A per-invoice tier is also possible. All figures are estimates.

**How to find first customers:**
CNP-Togo member companies and its e-invoicing transition sessions; the Ordre des Experts-Comptables of Togo (accountant directory, not verified); and OTR outreach events. Approved-vendor lists, if the OTR publishes them, would also serve as a channel.

**Risks:**
- The decrees may be delayed or may cover only large taxpayers at first.
- The OTR platform may be free and good enough for SMEs.
- Private-platform approval may be needed, with local presence or certification costs.
- Small total addressable market (TAM).
- Collecting payment in FCFA.

**Kill condition:**
Any one of these ends the idea:
- The OTR publishes no API or private-platform approval route.
- The free national portal supports bulk CSV import and multi-client accountant access.
- The rollout covers only large taxpayers until after 2027.

**Score:** 5/10. The trigger and mandate are strong. The TAM is small, the specifications are not yet known, and a free government tool is a likely substitute. It is attractive only as part of a multi-country WAEMU e-invoicing product.

**Sources:**
- https://edicomgroup.com/fr/blog/facture-electronique-certifiee-togo
- https://www.togofirst.com/fr/gouvernance-economique/1409-20045-togo-les-entreprises-se-preparent-au-passage-a-la-facture-electronique-certifiee
- https://www.capmad.com/article/togo-lotr-enclenche-la-facturation-electronique-certifiee-et-force-les-entreprises-a-revoir-leurs-systemes
- https://www.afrique-sur7.fr/togo-la-facturation-electronique-bouscule-les-entreprises
- https://www.cnp.tg/facturation-electronique-certifiee-le-secteur-prive-se-prepare-a-la-transition/
- https://www.lqdd.org/facture-electronique-certifiee-togo-2026/
- https://vatabout.com/fr/facturation-electronique-certifiee-au-togo-loi-de-finances-2026
- https://beancount.io/fr/blog/2026/09/16/togo-finance-law-certified-e-invoicing-b2b-otr-platform-guide
- https://casskai.app/solutions/togo
- https://otr.tg/images/2025/PDF/01/CIRCULAIRE-N001-2025-OTR-CG-CI-REHAUSSEMENT-SEUIL-D-ASSUJETTISSEMENT-TAXE-SUR-LA-TVA.pdf

---

### Opportunity: EUDR due-diligence package for Togolese coffee/cocoa exporters

**Industry:**
Coffee and cocoa exporting and the cooperatives that supply it.

**Buyer:**
Export manager or quality/traceability officer at a CCFCC-approved exporter (for example GEBANA Togo or Tan Agro Togo), and cooperative union managers.

**Trigger / Why now:**
Under the EU Deforestation Regulation (EUDR), EU buyers need plot geolocation and lot traceability. For the 2026-27 campaign, Togolese authorities named plot geolocation, producer identification and traceability as priorities. The EU is working with the CCFCC (the coffee-cocoa coordination committee) on a producer census and plot geolocation. Note that the EUDR application date has been postponed before, so the current date needs checking.

**Current workflow:**
1. NGOs or cooperatives map plots with GPS apps, and the results end up in spreadsheets.
2. Exporters match purchase receipts to producers and plots by hand.
3. They then build per-shipment due-diligence files (geolocation, lot records) for each EU buyer, in whatever format that buyer wants.

**Pain:**
Traceability is a stated sector priority. Smuggling and unregistered buyers break the chain of custody: cocoa exports fell from 24,625 t to 8,841 t in 2025-26. The task is per shipment, and EU market access depends on it.

**Existing solutions:**
- The national traceability system being built with EU and state support through the CCFCC.
- International farm-traceability platforms used by exporters across West Africa (Koltiva, Farmforce, SourceTrace and others; not verified as deployed in Togo).
- Systems run by the buyers themselves (multinational traders, Fairtrade networks such as AVSF/Ethiquable).
- NGO projects (AVSF supports 38 cooperatives in Ghana and Togo).

**The gap:**
A cheap tool that turns existing plot and purchase data into buyer-specific EUDR due-diligence statements for mid-size exporters that have no global trader's systems. The national system may close this gap.

**Possible product:**
A shipment-level EUDR file builder. It imports plot polygons and purchase receipts, links lots to plots, flags plots without geolocation, and exports the due-diligence data in each EU buyer's format.

**MVP:**
Spreadsheet plus GeoJSON import, lot-to-plot linking, and output of the EU information-system geolocation file and a buyer PDF.

**Pricing hypothesis:**
$150 to $400 per month per exporter during the campaign (estimate).

**How to find first customers:**
The CCFCC's published list of approved exporters (with contacts) on ccfcc.tg.

**Risks:**
- Only a few dozen buyers, and export volume is falling.
- The national system and trader-provided tools are free substitutes.
- EUDR timing remains uncertain.

**Kill condition:**
The CCFCC/EU national system issues exporter-ready due-diligence files, or EU buyers require their own platforms.

**Score:** 3/10. The problem is real, but there are too few buyers and too many free or sponsored substitutes. It only makes sense as an add-on to a regional (Ghana/Côte d'Ivoire) EUDR product.

**Sources:**
- https://afrique.le360.ma/economie/togo-les-exportations-de-cacao-baisse-de-64-en-2025-2026_KQVMSUQVY5ANLICRJ3MF3H55PY/
- https://www.icr-facility.eu/wp-content/uploads/2025/11/20250418-Livrable-1-Rapport-danalyse-sur-le-cafe-et-le-cacao-au-Togo.pdf
- https://www.icr-facility.eu/wp-content/uploads/2025/11/20250710-Livrable-2-Opportunites-de-marche-Cafe-Cacao-Togo.pdf
- https://www.avsf.org/app/uploads/2026/03/Fiche-projet-site-AVSF.pdf
- https://ccfcc.tg/statistiques-publications/
- https://fr.allafrica.com/stories/202604130201.html

---

### Opportunity: One payroll run to CNSS DRC and OTR salary-tax filings for accounting firms

**Industry:**
Accounting firms and payroll bureaus.

**Buyer:**
A small accounting firm that runs payroll for SME clients, or an SME HR/accounting lead.

**Trigger / Why now:**
Universal health insurance (AMU) contributions (5% employer and 5% employee) were added through the CNSS in January 2024, and the CNSS has moved monthly contribution filing (the DRC) online. Employers also withhold salary income tax monthly for the OTR and file an annual salary statement (DAS).

**Current workflow:**
1. Payroll is calculated in Excel or a payroll package.
2. The DRC is filled in online, or the CNSS Excel template is filled and imported.
3. Tax withholdings are declared and paid to the OTR separately.
4. The annual DAS is produced, and the totals are reconciled across all of these.

**Pain:**
Monthly, mandatory and duplicated across two agencies. However, the CNSS already provides an Excel import template, which takes away most of the re-keying.

**Existing solutions:**
- The CNSS e-services portal with the DRC Excel import guide.
- Sage-type payroll packages (presence in Togo not individually verified).
- Accounting firms doing it by hand.
- Global employer-of-record and payroll providers (Rivermate, Mercans, Ontop) for foreign employers.

**The gap:**
A narrow one: producing the CNSS DRC Excel file and the OTR salary-tax schedule from a single payroll file, then reconciling them. This is a small convenience, not a strong pain point.

**Possible product:**
A Togo payroll compliance exporter: upload the payroll spreadsheet and get a valid DRC import file, the tax-withholding schedule and an annual DAS draft.

**MVP:**
Spreadsheet in, CNSS DRC .xlsx plus tax schedule out, with validation errors flagged.

**Pricing hypothesis:**
5,000 to 15,000 FCFA per client company per month, sold to accounting firms (estimate).

**How to find first customers:**
The Ordre des Experts-Comptables directory and CNP-Togo members (unverified).

**Risks:**
- Very small market.
- Easily copied as a spreadsheet macro.
- Local payroll vendors already exist.

**Kill condition:**
Interviews show that accountants already have macros or local software that produce the DRC file.

**Score:** 3/10.

**Sources:**
- https://cnss.tg/cnss-media/2024/01/GUIDE-EXCEL_DRC.pdf
- https://cio-mag.com/togo-la-caisse-nationale-de-securite-sociale-accelere-sa-dematerialisation/
- https://afrotools.com/blog/togo-paye-tax-2026/
- https://rivermate.com/fr/guides/togo/impots
- https://dsr.mercans.com/payroll-dossiers/togo/

## Rejected after competitor research

- **Customs-broker declaration automation (Port of Lomé):** blocked by the SEGUCE Togo single window, run by Bureau Veritas BIVAC and Soget. It is the mandatory, integrated platform for all import, export and transit formalities, which leaves no realistic third-party integration layer for a solo founder. Sources: https://verigates.bureauveritas.com/node/61, https://tfadatabase.org/en/uploads/thematicdiscussiondocument/Mise_en_oeuvre_de_lAFE-par_le_CNFE_Togo_Corrige.pdf
- **Payroll and social filings as a standalone product:** made largely unnecessary by the CNSS's own Excel import for the DRC, plus existing payroll packages and accountants. Kept above only at 3/10.

## Attractive problem, poor distribution

- **EUDR traceability for cocoa and coffee:** only a few dozen approved exporters, cocoa volumes down 64%, and free or sponsored national and EU systems. Could work as an add-on to a Ghana/Côte d'Ivoire product.

## Too competitive

- None confirmed in Togo. For e-invoicing, the threat is a free OTR platform plus international vendors (EDICOM) and regional accounting SaaS (CassKai), not saturation.

## Not enough evidence

- **Public-procurement bid-file preparation:** I could not verify a Togo e-procurement portal or a 2025-26 e-submission mandate within the search budget.

## Bottom line

Togo has one real 2026 regulatory trigger: certified B2B e-invoicing under the 2026 Finance Law. The decrees and technical specifications are still pending, and the market is small. There is no strong standalone opportunity. The recommendation is to treat Togo as a later module of a francophone WAEMU e-invoicing and tax-compliance bridge, and to re-check once the OTR publishes the decree and any approval rules for private platforms.
