# DR Congo (Democratic Republic of the Congo): country research

Research date: 2026-10-04/05. 18 web searches (large-market budget). French-language sources used throughout. WebFetch not used. Figures marked "unverified" or "estimate" could not be confirmed from a primary source.

## Accessibility check

- **Sanctions:** The US DRC sanctions program (31 CFR Part 547) and the EU DRC regime are **list-based, not a country embargo**. They target named individuals and entities, for example armed groups and, since 2026, the Rwanda Defence Force and some of its officers. Selling software to ordinary Congolese companies is legal. A foreign founder still has to screen customers against the sanctions lists, especially in mining, where some ownership chains include sanctioned persons. Sources: https://federal-regs.com/title/31/part-547/ , https://public-inspection.federalregister.gov/2026-09086.pdf
- **Conflict:** Eastern DRC (North and South Kivu) is affected by the M23 conflict. The viable markets are **Kinshasa** and the **Haut-Katanga/Lualaba** copper-cobalt belt (Lubumbashi, Kolwezi).
- **Payments:** The economy is heavily dollarised. Mobile money (M-Pesa/Vodacom, Airtel Money, Orange Money) is reachable through aggregators such as Onafriq. Card payments and SWIFT settlement are slow or unreliable. A foreign SaaS would probably need a local reseller, or USD bank transfers from larger customers. Sources: https://www.ecofinagency.com/news-finances/0207-57012-dr-congo-becomes-africa-s-live-test-for-dollar-settled-mobile-money , https://migrantmoney.uncdf.org/wp-content/uploads/2025/05/Payment-Infrastructure-Assessment-DRC-April2025.pdf
- **Verdict:** Accessible with caveats: a French-language product, a local partner for collections and support, and sanctions screening of customers. The buyer base is small: about **12,000 VAT-registered companies** (FEC figure reported by AllAfrica; unverified).

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| All VAT payers / accountants | Facture normalisée (DGI e-invoicing): purchase-side check of invoices before deducting VAT | **Opportunity (6/10)** | Enforced since 15 May 2026; deductions rejected and fines of 10M CDF per non-standard invoice; vendors focus on issuing invoices, not on checking purchase invoices |
| Retail, hotels, pharmacies, fuel, distributors | Facture normalisée: getting existing billing/POS systems approved by the DGI | **Opportunity (5/10)** | Only about 9 companies were approved early on; many vertical and legacy systems still need a connector to the DGI's control module (e-MCF) |
| Mining subcontracting / local content | ARSP registration certificates, subcontractor eligibility, local-content plans from 2027 | **Opportunity (5/10)** | New local-content law takes effect 1 Jan 2027, with annual audits of mining companies; ARSP ordered 1,540 subcontractors removed at KCC/Mutanda |
| Freight forwarding / importers | FERI import cargo note (OGEFREM), import/export numbers (SEGUCE) | Rejected | Many forwarders and FERI agents already sell this; SEGUCE now issues import/export numbers online for free |
| Mining traceability (3TG, cobalt) | Chain-of-custody records | Rejected | Run by iTSCi, Better Mining, and EGC's state-backed cobalt scheme; needs field operations, not a solo software play |
| Coffee/cocoa exporters | EUDR geolocation and due diligence | Poor distribution | Small export volumes, much of it from conflict-affected eastern DRC; global traceability vendors already serve this |
| Payroll / HR | CNSS, INPP and ONEM social filings | Not pursued (insufficient evidence) | Could not confirm a digital filing portal or a 2025–26 change for CNSS-RDC; searches returned Morocco, Guinea and Tunisia instead |
| Insurance brokers | ARCA regulatory reporting | Not pursued | No verifiable 2025–26 reporting obligation found; the sector is tiny |

---

### Opportunity: Purchase-invoice checks for the facture normalisée (protecting input-VAT deductions)

**Industry:**
Cross-industry: VAT-registered companies (large and mid-sized taxpayers handled by the DGE and CDI tax centres) and their outsourced accountants.

**Buyer:**
Chief accountant or finance manager (DAF) at VAT-registered companies, and accounting firms (approved and unapproved experts-comptables) that prepare monthly VAT returns for several clients.

**Trigger / Why now:**
- The facture normalisée became mandatory on 1 Dec 2025.
- The moratorium ended on 12 May 2026. From the April 2026 VAT return (due 15 May 2026), input VAT can only be deducted if it is backed by compliant standard invoices. Non-compliant invoices can no longer be corrected.
- The fine is 10M CDF per non-standard invoice.
- In Feb 2026 the DGI required "taxation group" updates and a targeted re-approval of billing systems (SFE), which creates more invoice-format churn.

**Current workflow:**
1. Supplier invoices arrive on paper, as PDFs or by WhatsApp. They are a mix of standard invoices with a DEF number, QR code and fiscal signature, and non-compliant ones.
2. The accountant checks each QR code one at a time, using the DGI web interface or the mobile app.
3. The accountant re-keys amounts into Excel or the ERP, and separates invoices that can be deducted from those that can't.
4. The accountant chases suppliers for compliant replacement invoices, then files the VAT return.

**Pain:**
Every purchase invoice that fails the check costs the buyer its VAT (16%). The FEC/DGI joint committee logged operational problems including interconnection failures, devices that didn't work, and sector-specific issues in mining, insurance and e-money. The tax authority rejects deductions that aren't supported by compliant invoices. Checking happens per invoice and every month.

**Existing solutions:**
- The DGI's free QR verification web page and mobile app (one invoice at a time).
- The DGI's free e-UF (for companies without billing software) and e-MCF.
- Approved billing systems: DEGE ERP, DexyCG (a Sage integration from MTI Congo), and ADE Labs' Odoo e-MECeF/SFE module. These all focus on *issuing* invoices.
- Big-4 firms and local accountants doing the checks by hand.

**The gap:**
None of the approved vendors found does bulk checking of *received* invoices. The missing pieces are: scan or OCR a batch, check each against the DGI, tie out to the purchase ledger, build the list of deductible and blocked VAT, and track supplier follow-up. Note that the DGI already holds every standard invoice through its platform, so its risk is that it starts pre-filling deductible VAT itself.

**Possible product:**
A multi-client app for accountants. Upload a month's purchase invoices (photo or PDF) and it reads the QR codes and checks them in bulk. It then matches them to the ledger, marks which VAT is deductible and which is at risk, and produces a supplier follow-up list plus a VAT-return working file.

**MVP:**
A web app with QR decoding from photos and PDFs, a link to the DGI verification page (if access allows), an Excel ledger import, and a deductible-VAT report. French only.

**Pricing hypothesis:**
$50–150 per month per company, or $300–800 per month for an accounting firm with 10–30 clients (estimate).

**How to find first customers:**
- FEC members (FEC runs facture-normalisée training sessions in Kinshasa and Lualaba).
- The ONEC register of experts-comptables.
- Accounting firms in Kinshasa and Lubumbashi.
- Co-selling with approved SFE vendors that don't handle the purchase side.

**Risks:**
- No public bulk verification API (unverified). Screen-scraping DGI pages could break or be blocked.
- The DGI could pre-fill deductible VAT from its own platform, which would remove most of the value.
- Small market of about 12,000 VAT payers (unverified).
- Collecting payment.

**Kill condition:**
The DGI's VAT return pre-fills or automatically checks input invoices against the platform, or QR verification can't be automated.

**Score:** 6/10

**Sources:**
- https://deskeco.com/index.php/2026/05/12/facture-normalisee-en-rdc-le-ministere-des-finances-met-fin-au-moratoire-et-annonce-lapplication-des
- https://www.vatupdate.com/2026/05/03/dr-congo-fully-enforces-e-invoicing-grace-period-ends-stricter-compliance-for-taxpayers-begins/
- https://lookuptax.com/tax-changes/congo-kinshasa/normalised-invoice-moratorium-end-2026
- https://lookuptax.com/tax-changes/congo-kinshasa/vat-taxation-groups-update-2026
- https://bankable.africa/en/climat-des-affaires/0504-2691-facture-normalisee-la-rdc-passe-a-une-mise-en-conformite-renforcee
- https://dgi.gouv.cd/reforme-de-la-facture-normalisee/
- https://fec-rdc.com/wp-content/uploads/2025/08/TABLEAU-RENCONTRANT-LES-PREOCCUPATIONS-TECHNIQUES-ET-OPERATIONNELLES-DES-ENTREPRISES-PAR-RAPPORT-A-LA-MISE-EN-OEUVRE-DE-LA-REFORME-SUR-LA-FACTURE-NORMALISE-1.pdf
- https://fec-rdc.com/fin-du-moratoire-sur-les-sanctions-relatives-a-la-facture-normalisee-la-fec-fait-le-point-avec-ses-membres/
- https://dddinvoices.com/learn/e-invoicing-in-dr-congo-2026-facture-normalise-requirements

---

### Opportunity: Facture-normalisée connector for vertical and legacy billing systems

**Industry:**
Pharmacies, hotels, fuel stations, distributors and wholesalers. These businesses run their own local POS or invoicing software, or QuickBooks or Excel.

**Buyer:**
The owner or finance manager of a mid-sized VAT-registered business. Alternatively, the local software house whose POS or invoicing product needs approval (a B2B2B route).

**Trigger / Why now:**
- From 1 Jul 2025 only approved billing systems may be used by VAT payers.
- The re-approval round in Feb 2026 and the published lists of approved DEF/SFE providers keep pushing changes.
- As of Nov 2025 no system had yet been approved and there were only two accredited physical-device suppliers. About 9 companies had completed approval at a later point.
- Some businesses waiting for approval were exempted from the May 2026 deadline, so there is a backlog.

**Current workflow:**
1. Invoice in the existing POS or Excel.
2. Re-key each invoice into the free DGI e-UF, or into a physical device.
3. Reprint or attach the QR code.
4. Reconcile the two systems at month end.

**Pain:**
Every sale is keyed twice; this is high-frequency, per-transaction work. Fines of 10M CDF per non-standard invoice. FEC-documented complaints about the DEF devices not working and about interconnection.

**Existing solutions:**
DGI's free e-UF and e-MCF; DEGE ERP; DexyCG (standalone SFE plus Sage 100/1000/X3); the ADE Labs Odoo module; physical-device suppliers.

**The gap:**
- No approved connector was found for local or vertical POS systems, QuickBooks or Excel workflows.
- Small businesses must either switch ERP (DEGE/Odoo) or re-key into e-UF.

**Possible product:**
An approved "SFE middleware". It takes invoices from a CSV export or a lightweight local agent, sends them to the e-MCF, and pushes the fiscal signature and QR code back onto the printed invoice.

**MVP:**
CSV/Excel to e-MCF submission with a printable QR invoice. Supports one popular vertical POS.

**Pricing hypothesis:**
$30–80 per month per point of sale, or a per-invoice fee (estimate).

**How to find first customers:**
- The DGI list of approved DEF/SFE providers, used to see who is missing.
- FEC sector committees.
- Pharmacy and fuel-station distributor networks in Kinshasa.

**Risks:**
- DGI approval is required: a physical application file, a review commission and in-person presence. This is close to a licensing barrier for a foreign solo founder.
- Odoo partners and DEGE can move quickly into this space.
- The product would have to keep pace with DGI rule changes.

**Kill condition:**
- Approval requires a local legal entity or physical presence that the founder can't provide.
- Or the free DGI e-UF gains a CSV import or API.

**Score:** 5/10

**Sources:**
- https://bankable.africa/en/climat-des-affaires/1906-1335-facturation-seuls-les-logiciels-homologues-autorises-des-le-1er-juillet-en-rdc
- https://lehautpanel.com/dgi-lancement-officiel-de-lhomologation-des-systemes-de-facturation-dentreprise-en-rdc/
- https://dege.one/
- https://www.mti-congo.com/solutions/dexycg-certification
- https://odoo-emecef-sfe.ade-labs.com/
- https://fr.allafrica.com/stories/202512020653.html
- https://fec-rdc.com/facture-normalisee-le-ministere-des-finances-et-la-fec-conviennent-de-mesures-dajustement-pour-une-mise-en-oeuvre-plus-fluide/

---

### Opportunity: Subcontractor eligibility and local-content evidence tracker (copper belt)

**Industry:**
Mining subcontracting and other subcontracting-heavy sectors (cement, telecoms, brewing).

**Buyer:**
The procurement or compliance manager at mid-tier main contractors. Examples: Chinese-owned or mid-size mines in Haut-Katanga and Lualaba, EPC contractors, and logistics firms. Secondarily, Congolese subcontractors that need to keep their eligibility file up to date.

**Trigger / Why now:**
- The local-content law takes effect **1 Jan 2027**. It brings triennial local-content plans, sanctions, and **annual ARSP audits of major mining companies from 2027**.
- Enforcement actions so far:
  - 1,540 subcontractors ordered removed at KCC and Mutanda.
  - Glencore, Kipushi and Sicomines were told to submit corrective plans.
  - Decision 025/2026 (Sept 2026) required Kai Pen Mining and Comilu to regularise their contracts within 30 days.
  - About 1,200 subcontracting companies were struck off.
- In June 2026 ARSP moved its registration certificates online, with QR codes and validity extended to 5 years.

**Current workflow:**
1. Collect each subcontractor's documents: ARSP certificate, Congolese-ownership (shareholder) evidence, tax and social-security certificates (most of this list is unverified).
2. Keep them in Excel or shared drives.
3. Check by hand that ownership is at least 51% Congolese and that certificates are valid.
4. When ARSP inspects, assemble the evidence by hand. From 2027, also compile local-content plans and reports.

**Pain:**
- Fines of 50–150M CDF.
- Closures of up to 6 months.
- Forced cancellation of contracts.
- High-profile enforcement against named mining companies in 2025–26.

**Existing solutions:**
- SAP Ariba and in-house supplier portals at the majors.
- Law firms and consultants: Daldewolf, Deloitte Afrique and local firms.
- ARSP's own online certificate and QR verification.
- Excel.

**The gap:**
- No affordable tool was found that combines ARSP certificate checks, ownership eligibility rules and expiry tracking, and turns them into an audit-ready local-content evidence pack for mid-tier main contractors.
- The majors are an enterprise sale, so mid-tier contractors are the realistic segment.

**Possible product:**
A supplier register with eligibility rules for Law 17/001 and the 2027 local-content law. It includes QR checks of ARSP certificates, expiry alerts, and generators for the local-content plan and report.

**MVP:**
Spreadsheet import of suppliers, an eligibility checklist, document vault with expiries, and a one-click audit pack (PDF/Excel) in French.

**Pricing hypothesis:**
$200–600 per month per main contractor (estimate).

**How to find first customers:**
- Mining companies named in ARSP decisions.
- Chamber of Mines / FEC Lualaba and Haut-Katanga members.
- The Kolwezi ARSP subcontracting fair.
- The ARSP database of registered subcontractors.

**Risks:**
- Enterprise procurement at the large mining companies.
- The implementing rules for the local-content law are not yet published, so the reporting format is unknown.
- Political sensitivity and sanctions screening of owners.
- Requires being on the ground in Lubumbashi or Kolwezi.

**Kill condition:**
- ARSP publishes its own mandatory reporting portal with built-in supplier checks.
- Or the 2027 implementing rules only apply to a few dozen large mining companies (too few buyers).

**Score:** 5/10

**Sources:**
- https://acp.cd/business/rdc-deux-societes-minieres-du-haut-katanga-sommees-de-regulariser-leurs-contrats-de-sous-traitance/
- https://www.miningweekly.com/article/congo-to-audit-major-miners-annually-from-2027-as-part-of-local-content-drive-regulator-says-2026-09-29
- https://news.metal.com/newscontent/104141004-drc-to-introduce-annual-subcontracting-and-local-content-audits-for-major-miners-from-2027
- https://lepoint.cd/contenu-local-en-rdc-quatre-axes-pour-preparer-lapplication-de-la-loi/
- https://actualite.cd/2026/06/27/rdc-larsp-dematerialise-la-delivrance-de-lattestation-de-sous-traitance-en-vue
- https://www.congoquotidien.com/2026/06/28/arsp-attestation-sous-traitance-numerique/
- https://beninwebtv.bj/rdc-kcc-et-mutanda-doivent-ecarter-1-540-sous-traitants-juges-non-eligibles/
- https://infos.cd/economie/kinshasa-1-200-societes-de-sous-traitance-radiees-pour-non-conformite-a-la-loi-du-pays/31538
- https://www.ccife-rdcongo.org/fileadmin/cru-1656082106/repcongo/user_upload/Re__gime_legal_de_la_sous-traitance_dans_le_secteur_prive___en_RDC_-_Romain_BATTAJON_-_Arnaud_TSHIBANGU___DALDEWOLF_20210121.pdf

---

## Rejected after competitor research

- **FERI import cargo note / import paperwork:** Mandatory for every shipment, but already sold as a service by FERI agents and forwarders (e.g., getctn.com, MOL Logistics). SEGUCE now issues import/export numbers online for free. https://getctn.com/en/guides/dr-congo-feri-comprehensive-guide , https://fr.allafrica.com/stories/202511060189.html
- **Mineral traceability (3TG/cobalt):** iTSCi, Better Mining (RCS Global) and EGC's state-run artisanal cobalt scheme (quota system since Oct 2025) control this. It depends on field operations and buyer recognition, not on software. https://impacttransform.org/en/rethinking-traceability-in-critical-mi , https://www.miningweekly.com/article/congo-produces-first-1-000-t-of-traceable-artisanal-cobalt-2025-11-13
- **Facture-normalisée issuance for companies on SAP, Sage or Odoo:** Already covered by DexyCG for Sage, the ADE Labs Odoo module and DEGE ERP. Only the purchase side and legacy/vertical connectors are left (see above).

## Attractive problem, poor distribution

- **EUDR coffee/cocoa traceability:** The obligation is real (Fairtrade cooperatives have a geolocation deadline of Jan 2027). But DRC volumes are small, production is concentrated in conflict-affected eastern provinces, and global vendors already serve exporters. https://acp.cd/business/kinshasa-les-acteurs-du-cafe-et-cacao-sensibilises-aux-exigences-des-marches-internationaux/

## Too competitive

- FERI/import documentation services (see above).

## Not pursued (insufficient evidence)

- **Payroll filings to CNSS, INPP and ONEM, and ARCA insurance-broker reporting:** Searches found no verifiable 2025–26 digital obligation in the DRC.
