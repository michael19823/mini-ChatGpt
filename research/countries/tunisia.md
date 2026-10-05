# Tunisia: indie software opportunity research

Researched 2026-10-05. 14 web searches (French and English). WebFetch was not used, so all facts come from search-result summaries. Anything not confirmed by a source is marked *unverified* or *estimate*.

## Summary

Tunisia's strongest 2026 "why now" is the **tax digitalisation wave**:
- **Finance Law 2026, art. 53:** mandatory El Fatoora / TTN e-invoicing (TEIF XML, XAdES signature) now covers all service providers, about 380,000 actors.
- **TEJ platform:** withholding-tax certificates must be issued digitally since 1 Jan 2026.
- **Certified connected cash registers:** phased in for cafés and restaurants from Nov 2025 and Jul 2026, then for individuals in 2027 and 2028.

The pain is real and mandatory. But the core e-invoicing market already filled up with local SaaS during 2025–26 (Finco, efacturetn, Hesabi, Shazler, Axiom Suite, Novatis, elfatoora.digital, Odoo modules). That leaves only narrow gaps that change hands quickly.

**Accessibility:** Tunisia is not under sanctions and software can legally be sold there. The practical barrier is the non-convertible dinar and exchange controls, which make it hard for local SMEs to pay a foreign SaaS by card (*details unverified*). A foreign solo founder would realistically need a local reseller or partner, or a local entity, to collect payment in TND. Treat this as a cross-cutting risk.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| E-commerce merchants | Shop order → TEIF invoice → sign → TTN | **Candidate** | No WooCommerce, PrestaShop or Shopify plugin for TTN found. Scope for B2C goods is still unclear |
| Accounting firms (experts-comptables) | Multi-client El Fatoora + TEJ + CNSS filings | **Candidate (weak)** | Real multi-client pain, but Hesabi and Jibaya are moving into the same space |
| Liberal professions (doctors, lawyers, architects, consultants) | Issuing TEIF invoices under the 2026 services extension | Too competitive | At least 6 local e-invoicing SaaS products target exactly this group |
| Government vendors | TUNEPS bid submission and keeping administrative certificates valid | **Candidate (weak)** | Mandatory, recurring and penalised if missed. Competition not verified |
| Heavy-industry exporters (steel, aluminium, fertiliser, cement) | EU CBAM embedded-emissions data for EU importers | Poor distribution | Very few buyers, enterprise or state-owned (e.g. GCT), consultant-led |
| Pharmacies | CNAM third-party-payment (tiers payant) claims | Rejected | The pain is CNAM arrears (up to 180 days, about 80M TND owed) and a contract dispute, not software |
| Payroll / all employers | CNSS quarterly declarations; Law 2025-9 (temp contracts presumed permanent, labour subcontracting banned) | Rejected | CNSS is handled by payroll and Odoo modules. Law 2025-9 forced a one-time conversion, not a recurring workflow |
| Cafés, restaurants, hotels | Certified connected cash registers | Rejected | Only approved, certified providers may sell them, and hardware is required |
| Olive-oil exporters | Export documentation and EU quota certificates | Rejected | 85% is shipped in bulk by large exporters. Quotas are political. No new traceability rule found |
| Withholding-tax issuers (all companies) | TEJ XML certificate files | Too competitive | Hesabi, Jibaya, BPS Solutions and E-Comptable already generate TEJ files |

---

### Opportunity: TTN / El Fatoora connector for e-commerce and POS-less merchants

**Industry:**
E-commerce and online B2B sellers (WooCommerce, PrestaShop, Shopify stores in Tunisia)

**Buyer:**
Owner or finance manager of a Tunisian online shop or B2B web store, or the web agency that maintains it

**Trigger / Why now:**
E-invoicing became broadly mandatory on 1 Jan 2026. Finance Law 2026 art. 53 extends it to all services. Fines are 100–500 TND per paper invoice, capped at 50,000 TND per year. An invoice not sent through TTN loses its tax value, and the customer loses the right to deduct its VAT.

**Current workflow:**
1. An order comes into WooCommerce or PrestaShop, which produces a PDF invoice.
2. Staff re-key the invoice into a separate e-invoicing SaaS or ERP, or the TTN web interface.
3. The TEIF XML is signed with a TunTrust/ANCE certificate (DigiGo or token) and submitted. The TTN reference and QR code are then copied back to the customer.
4. Rejections (format, tax ID, VAT rounding) are fixed by hand.

**Pain:**
A guide on efacturetn.com states that no major CMS (PrestaShop, WooCommerce, Shopify) natively generates TEIF, signs it or talks to TTN. My searches found Odoo modules (merkago_tn_elfatoora) and an integration guide from the agency Noqta, but no CMS plugin. Fixed entry costs are a certificate (about 350 TND per 2 years) plus the TTN subscription (10 TND per month).

**Existing solutions:**
- Odoo El Fatoora modules (merkago)
- Custom integration agencies (Noqta)
- Standalone e-invoicing SaaS: Finco, efacturetn, Hesabi, Shazler, Axiom Suite, elfatoora.digital
- ERP vendors (Sage)

**The gap:**
No plug-and-play CMS extension that does all of the following on order completion: maps the order to TEIF, gets it signed through the merchant's DigiGo/TunTrust certificate, submits it to TTN, stores the TTN reference and QR code on the order, and shows a queue of rejections to fix.

**Possible product:**
A WooCommerce and PrestaShop plugin plus a small cloud relay that handles signing, TTN SOAP/SFTP submission and rejection handling. It is sold through Tunisian web agencies.

**MVP:**
A WooCommerce plugin for B2B orders only (customer tax ID present). It generates TEIF 1.8.x, signs with an uploaded P12 seal, submits to the TTN web service, and writes the reference and QR code back onto the PDF invoice.

**Pricing hypothesis:**
30–80 TND per month per store, or a per-invoice tier (*estimate*). Agencies take a reseller margin.

**How to find first customers:**
- Tunisian web agencies (WooCommerce/PrestaShop partner lists)
- Stores with .tn domains running these CMS (technology-lookup scans)
- Tunisian e-commerce Facebook groups

**Risks:**
- Whether B2C sales of goods fall under the mandate (sources disagree: "all VAT-registered" vs. services/B2B/public). If B2C is exempt, the market shrinks to B2B web stores.
- Integrators may need TTN accreditation (*unverified*).
- Existing SaaS vendors could ship a plugin quickly.
- Collecting payment in TND.

**Kill condition:**
B2C goods sales are confirmed exempt, or any existing vendor (e.g. Finco or Hesabi) already offers a WooCommerce/PrestaShop extension.

**Score:** 5.5/10

**Sources:**
- https://efacturetn.com/fr/blog/facturation-electronique-tunisie-2026-guide-conformite-el-fatoora
- https://www.noqta.tn/en/blog/integration-api-ttn-el-fatoora-erp-guide-2026
- https://apps.odoo.com/apps/modules/18.0/merkago_tn_elfatoora
- https://www.challenges.tn/economie/tunisie-la-facturation-electronique-devient-obligatoire-pour-les-services-en-2026/
- https://www.lapresse.tn/2026/01/07/tout-comprendre-a-la-facture-electronique-qui-simpose-en-tunisie-en-2026/
- https://elfatoora.digital/faq.php?lang=en

---

### Opportunity: Multi-client compliance cockpit for accounting firms (El Fatoora + TEJ + filing calendar)

**Industry:**
Accounting firms / bookkeepers

**Buyer:**
Partner of a small Tunisian accounting firm (expert-comptable or comptable agréé) serving dozens to hundreds of micro-businesses and liberal professionals

**Trigger / Why now:**
Since 1 Jan 2026, about 380,000 service providers must e-invoice through TTN, and every withholding-tax certificate must be issued on TEJ. Missing a TEJ certificate costs a 30% fine, minimum 50 TND per certificate. Press in Sept 2026 describes SMEs in "chaos" as enforcement tightens in Q3 2026.

**Current workflow:**
1. Clients send Excel files, photos or paper invoices.
2. The accountant re-keys sales invoices into a TEIF tool, and withholding-tax certificates into TEJ (one by one, or by building the CCT-RS-V2 XML).
3. They collect TTN references and match purchase invoices against them for VAT deduction.
4. Monthly CNSS and tax returns are tracked in spreadsheets.

**Pain:**
- TEJ sanctions apply per certificate.
- Losing VAT deduction on invoices not sent through TTN.
- Juriguide and Socialmag (Sept 2026) call e-invoicing a "casse-tête" (headache) and "chaos" for SMEs.
- Accountants' job descriptions list invoice tracking and reconciliation tasks.

**Existing solutions:**
- Hesabi (El Fatoora + TEJ automation)
- Jibaya, BPS Solutions, E-Comptable (TEJ)
- Finco and efacturetn (e-invoicing)
- Local accounting software and Odoo

**The gap:**
A firm-level view across many clients: per-client status of TEIF submissions and TEJ certificates, bulk Excel-to-TEJ-XML conversion, and a deadline and exception queue. Most tools are single-company. Whether Hesabi already covers multi-client use is *unverified*.

**Possible product:**
A cockpit for accounting firms. It imports client spreadsheets, generates TEJ XML and TEIF drafts, tracks signing and submission per client, and flags missing or rejected items before monthly deadlines.

**MVP:**
Bulk Excel → TEJ CCT-RS-V2 XML validator and generator for many clients, with a per-client status board.

**Pricing hypothesis:**
100–300 TND per month per firm, tiered by number of clients (*estimate*).

**How to find first customers:**
- Ordre des Experts Comptables de Tunisie (OECT) member directory
- Compagnie des comptables registry
- Accountant LinkedIn and Facebook groups

**Risks:**
- Hesabi or Jibaya add multi-client features.
- Signing must use each client's own certificate, which limits automation.
- Low price points.
- Payment in TND.

**Kill condition:**
Interviews show that Hesabi, Jibaya or existing accounting suites already provide multi-client bulk TEJ and TEIF at under 50 TND per month.

**Score:** 5/10

**Sources:**
- https://idaraty.tn/fr/procedures/elaboration-certificats-retenue-a-la-source-plateforme-tej
- https://www.webmanagercenter.com/2026/01/25/560572/plateforme-tej-tunisie-mode-demploi-guide-pratique-2026/
- https://jibaya.tn/wp-content/uploads/2024/05/TEJ-CCT-RS-V2.pdf
- https://hesabi.tn/tej-retenue-source-tunisie
- https://bps-solutions.tn/tej-declaration/
- https://www.juriguide.com/2026/09/21/facturation-electronique-veritable-casse-tete-pme/
- https://www.socialmag.news/21/09/2026/facturation-electronique-obligatoire-pme-face-chaos/
- https://axiomsuite.cloud/blog/facture-electronique-ttn-generalisation-t3-2026

---

### Opportunity: Bid-readiness and certificate-validity tracker for TUNEPS government vendors

**Industry:**
Government vendors: construction subcontractors, suppliers, service firms

**Buyer:**
Owner or tender manager at an SME that regularly bids on Tunisian public tenders

**Trigger / Why now:**
TUNEPS has been mandatory for all public buyers since Sept 2018, so this is not a new trigger. New 2026 requirements (TTN e-invoicing for invoices to the State, TEJ certificates) add more documents that must be valid at bid and payment time.

**Current workflow:**
1. Monitor TUNEPS and newspapers for tenders.
2. Collect administrative documents: tax clearance, CNSS certificate, RNE extract, guarantees. Each has its own validity period.
3. Upload administrative, technical and financial files to TUNEPS by the deadline. Files over the size limit are partly sent offline.
4. A bid is rejected if a document is missing or expired.

**Pain:**
Mandatory online submission, with rejection for incomplete files. Evidence of pain specific to SMEs is thin (only state-led SME training is mentioned).

**Existing solutions:**
- TUNEPS itself
- Tender-alert aggregators and consultants (*not verified by search*)
- Spreadsheets

**The gap:**
Probably a document-expiry calendar plus a per-tender checklist built from the tender documents. Not validated.

**Possible product:**
A tender-watch feed plus a vault of company certificates with expiry alerts, and a checklist generator for each tender.

**MVP:**
A certificate vault with expiry alerts and a manual per-tender checklist.

**Pricing hypothesis:**
50–150 TND per month (*estimate*).

**How to find first customers:**
- TUNEPS-registered supplier lists
- Award notices on pm.gov.tn
- Construction contractor registries (agrément BTP)

**Risks:**
- Generic "document collection" trap.
- Low willingness to pay.
- Competition unverified.

**Kill condition:**
Existing Tunisian tender-alert services already bundle document management, or interviews show rejections for expired documents are rare.

**Score:** 3.5/10

**Sources:**
- https://www.webmanagercenter.com/2018/06/20/421235/le-tuneps-systeme-dachat-public-en-ligne-obligatoire-en-tunisie-des-le-1er-septembre-2018/
- https://www.telediffusion.net.tn/pdf/01-2025-DQDR-fr.pdf

---

## Rejected after competitor research

- **E-invoicing SaaS for liberal professions and service SMEs:** killed by Finco, efacturetn, Hesabi, Shazler, Axiom Suite, Novatis, elfatoora.digital and Sage, all launched for the 2026 services extension.
- **Standalone TEJ withholding-certificate generator:** killed by Hesabi, Jibaya, BPS Solutions and E-Comptable.
- **CNSS declaration automation:** killed by payroll software and the Odoo `cnss_declaration` module (https://apps.odoo.com/apps/modules/18.0/cnss_declaration).
- **Pharmacy CNAM claims tool:** the real problem is CNAM payment arrears and a suspended contract (tiers payant suspended Oct/Dec 2025, threatened again from 1 Jul 2026), not workflow. Sources: https://lapresse.tn/2025/10/28/plus-de-90-des-pharmacies-se-plaignent-du-retard-de-paiement-de-la-cnam/ and https://fr.allafrica.com/stories/202606260440.html
- **Labour-law (Law 2025-9) compliance tool:** a one-time conversion of contracts. Source: https://managers.tn/2025/03/14/cdd-automatiquement-convertis-en-cdi-une-nouvelle-loi-entre-en-vigueur

## Attractive problem, poor distribution

- **EU CBAM emissions data for Tunisian steel, aluminium, fertiliser and cement exporters:** the definitive phase started 1 Jan 2026. Buyers are few, large or state-owned, and served by consultants and global CBAM tools. Source: https://beancount.io/blog/2026/08/04/eu-cbam-carbon-border-tax-2026-small-exporters-steel-aluminum-fertilizer-guide
- **Certified connected cash registers (cafés, restaurants, hotels; individuals 2027–28):** huge mandatory market, but limited to approved, certified providers and requires hardware. Source: https://www.lapresse.tn/2026/07/01/restauration-et-hotellerie-entree-en-vigueur-de-lobligation-des-caisses-enregistreuses-numeriques-certifiees-des-aujourdhui/

## Too competitive

- Core El Fatoora / TEIF invoicing SaaS (see the competitors listed above).
- TEJ certificate generation.
