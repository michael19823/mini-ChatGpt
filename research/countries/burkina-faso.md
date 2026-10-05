# Burkina Faso: indie software opportunity research

Research date: 2026-10-05. Treated as a **small, fragile market**, so the search budget was 10 searches. WebFetch was not used. Findings come from search-result summaries. Anything not confirmed by a source is marked "unverified" or "estimate".

## Accessibility check

- **Sanctions:** I found no evidence of comprehensive US, EU or UK sanctions on selling software to Burkina Faso, but I did not check this against an official sanctions list (unverified). The country is run by a military transition government. It left ECOWAS in January 2025 but is **still in UEMOA** (it keeps the CFA franc and BCEAO payment rails). The AES (Alliance of Sahel States) added a 0.5% levy on imports from outside the bloc. ([Ecofin](https://ecofinagency.com/public-management/3103-46566-aes-introduces-0-5-import-tax-to-fund-operations-and-projects), [Ecofin, ECOWAS free trade](https://ecofinagency.com/public-management/2901-46380-ecowas-keeps-free-trade-zone-with-aes-members-until-further-notice))
- **Payment rails:** taxes and social-security contributions are already paid through Orange Money, Moov/Mobicash and bank transfer (eSINTAX, eCNSS), so collecting subscriptions locally is feasible.
- **Practical barriers (important):** to get homologated for the new certified e-invoice, a vendor must submit a business registration, a tax certificate and **CNSS (social security) affiliation**. In practice that means a local entity or a local partner. The mining local-content rules require service contracts to go to Burkinabe persons. The government's messaging stresses "economic sovereignty". Security conditions limit travel outside Ouagadougou and Bobo-Dioulasso.
- **Verdict:** the market is **accessible only through a local partner or a local entity**. A foreign solo founder selling directly is weak.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| All VAT-registered firms (DGE/DME) | Certified electronic invoice (FEC) through a DGI-approved MCF module or billing unit, mandatory 2026 | **Shortlist** | Strongest why-now in the country: a hardware-plus-software mandate with phased sales from Sept to Dec 2026 and invoicing software that has to integrate |
| Accounting firms | Reconciling monthly VAT on eSINTAX against FEC invoices | **Shortlist (weak)** | Plausible follow-on pain once DGI holds invoice-level data. Not yet evidenced |
| Payroll / employers | IUTS (wage tax) plus CNSS contributions, filed through eSINTAX and eCNSS | Poor distribution / unverified | Pain is real, but buyers are small, local payroll tools exist (not diligenced), and the payment portals are government-run |
| Mining subcontractors | Local-content reporting and supplier registration under Law 016-2024 and Law 017-2024 | Rejected for a foreign founder | Local-content law favours Burkinabe providers. Only a few hundred buyers, a security problem, and state takeover of mines |
| Agricultural exporters (sesame, cashew, shea) | Phytosanitary and export documents, traceability | Rejected | Export suspensions, floor prices and state intervention. Donor projects (STDF PPG-859) address the SPS issues. EUDR does not cover these crops |
| Government vendors | Public procurement documents (ASF/ASC tax and social-security certificates, bid files) | Rejected (timing) | The state is building its own e-procurement platform with World Bank support. Too early, and the state is the platform owner |

## Opportunities

### Opportunity: FEC connector, linking existing invoicing/ERP software to the DGI MCF module

**Industry:**  
Cross-industry: medium-sized and larger VAT-registered businesses (distributors, wholesalers, construction suppliers, service firms).

**Buyer:**  
Finance director or chief accountant at a DME taxpayer that already invoices from Sage-type accounting software, a custom ERP, or Excel/Word templates. A secondary buyer is the local software publisher or IT integrator, who would white-label the connector.

**Trigger / Why now:**  
Under article 564-2 of the tax code (CGI), DGE and DME taxpayers must issue **only certified electronic invoices (FEC)**. The FEC was launched in January 2026, mandatory from 1 July 2026, and phased in by selling MCF modules and billing units: DGE taxpayers and software publishers from 7 Sept 2026, DME real-normal regime from 2 Nov 2026, and DME non-determined regime from 1 Dec 2026. Each phase gets a 30-day compliance window. DGI opened homologation of enterprise billing systems (SFE) in April/May 2026. Small businesses are due to follow in 2027 and microenterprises in 2028.

**Current workflow:**  
1. The firm buys a DGI MCF module (150,000 FCFA promotional price until 31 Dec 2026). A firm with no software buys an all-in-one billing unit instead.  
2. Its existing invoicing software must send each invoice to the MCF and print the unique identifier, QR code and timestamp it returns. Most local and legacy software cannot do this yet.  
3. Until the software is integrated, staff re-key invoices into the billing unit, so the same invoice exists twice (in the ERP and on the device). Credit notes, corrections and the matching of certified numbers back into the ledger are done by hand.

**Pain:**  
The mandate is hard and on a deadline, with failure exposing the firm to tax penalties. Its customers (especially larger firms and the state) will reject non-certified invoices. Local publishers are already running training sessions on FEC compliance (Logiciels et Services with Dexy Africa, May 2026), which shows demand. The re-entry pain is my inference from the device model, **not yet evidenced by user complaints**.

**Existing solutions:**  
- DGI billing units (all-in-one device: no integration needed, but invoices get typed twice).  
- Local publishers and integrators going through SFE homologation, such as the Logiciels et Services group and Dexy Africa.  
- Sage and other ERP resellers in West Africa. Their localized FEC support is unverified.  
- International e-invoicing vendors tracking the mandate (Edicom, Comarch). They target multinationals.  
- Benin's e-MECeF and the Congo SFEC model show regional vendors already know this architecture (unverified for Burkina).

**The gap:**  
A cheap, generic middleware (desktop agent or print-driver/CSV bridge) that takes invoices from *any* existing system (Excel, a custom ERP, Sage-type exports), sends them through the MCF, and writes the certified number and QR code back. Credit notes and rejections go to an exception queue. Local publishers will integrate their own products, but firms on custom or unsupported software are left out.

**Possible product:**  
"Certify from what you already use." A small connector with a homologated SFE profile, a re-print template that carries the QR code, and a reconciliation log showing ERP invoices against certified invoices.

**MVP:**  
A CSV/Excel-to-MCF bridge for one MCF model: certify, store, re-print the PDF with the QR code, plus a daily report of uncertified invoices. Later, take the same layer down-market as smaller taxpayers are pulled in during 2027–2028.

**Pricing hypothesis:**  
15,000–40,000 FCFA per month per company (about US$25–70), or a one-off setup fee of 100,000–250,000 FCFA plus maintenance. White-label licensing to local integrators. Estimate.

**How to find first customers:**  
Local software publishers and integrators (homologation applicants), accounting firms (Ordre des experts-comptables), the Chamber of Commerce (CCI-BF) and employer groups. DGE/DME taxpayer counts are not public (unverified; my estimate is a few thousand firms).

**Risks:**  
Homologation needs local documents (business registration, CNSS), so a local partner is required. The DGI may restrict which software can talk to the MCF. Local publishers will close the gap for their own customers quickly. Prices are low. Political and security risk.

**Kill condition:**  
Kill it if the DGI MCF spec does not allow third-party middleware, if the dominant accounting tools ship native integration before mid-2027, or if fewer than about 1,000 firms use non-integrable software.

**Score:** 5/10

**Sources:**  
- https://dgi.bf/note-fec/  
- https://burkina24.com/2026/04/08/communique-dgi-lancement-officiel-de-lhomologation-des-systemes-de-facturation-electronique-au-burkina-faso/  
- https://burkina24.com/2026/09/07/communique-facture-electronique-certifiee-la-mise-en-vente-des-systemes-de-facturation-demarre-le-7-septembre-2026-au-burkina-faso-3/  
- https://www.minute.bf/burkina-mise-en-vente-des-systemes-electroniques-certifies-de-facturation-4/  
- https://cfinance.news/index.php/fr/finances-publiques/fiscalite/819-burkina-faso-lancement-de-la-facture-electronique-certifiee-une-reforme-structurante-au-service-de-la-transparence-et-de-la-souverainete-economique  
- https://www.vatupdate.com/2026/05/28/dgi-launches-certification-process-for-enterprise-billing-systems/  
- https://faso7.com/2026/05/02/burkina-faso-le-groupe-logiciels-et-services-et-dexy-africa-outillent-des-acteurs-sur-la-conformite-des-factures-electronique-certifiee/  
- https://lookuptax.com/tax-changes/burkina-faso/facture-electronique-certifiee-2026  
- https://www.comarch.com/trade-and-services/data-management/legal-regulation-changes/burkina-faso-officially-launches-the-certified-electronic-invoice-system/  
- https://edicomgroup.com/blog/mandatory-electronic-invoicing-burkina-faso

### Opportunity: Monthly VAT reconciliation for accounting firms (FEC purchase invoices against eSINTAX returns)

**Industry:**  
Accounting firms and in-house accountants.

**Buyer:**  
Partner or senior accountant at a small accounting firm handling 20–100 client files.

**Trigger / Why now:**  
Once FEC is mandatory, every sales invoice from DGE/DME firms carries a certified ID and QR code that DGI can see. Input-VAT deductions on eSINTAX returns can then be cross-checked against certified invoices, which is the usual next step in e-invoicing regimes. That last point is my **hypothesis; no DGI cross-check announcement was found**.

**Current workflow:**  
1. The accountant collects clients' purchase invoices (paper, PDF, WhatsApp photos).  
2. They type them into the accounting software and compute deductible VAT.  
3. They file the monthly VAT return on eSINTAX. Nothing checks whether a supplier invoice is genuinely certified before it is deducted.

**Pain:**  
Penalties for deducting VAT on non-certified invoices are likely but unverified. The work is monthly and repeated across every client.

**Existing solutions:**  
Manual work. Accounting software (Sage and local tools). A possible DGI QR-verification app (unverified).

**The gap:**  
Batch scanning of QR codes or certified IDs on purchase invoices, flagging uncertified or duplicate invoices, and producing the VAT schedule ready for eSINTAX.

**Possible product:**  
A mobile QR-scan inbox for each client, a validation report, and a VAT-deduction schedule export.

**MVP:**  
A phone web app that scans FEC QR codes, parses the fields, and builds a deductible-VAT schedule per client per month in Excel.

**Pricing hypothesis:**  
10,000–25,000 FCFA per month per accounting firm (estimate).

**How to find first customers:**  
The ONECCA-BF expert-comptable directory (assumed public; unverified) and the training events run by FEC vendors.

**Risks:**  
DGI may publish its own free verification and pre-filled VAT return. Willingness to pay is low. The QR payload format is unknown.

**Kill condition:**  
Kill it if DGI pre-fills deductible VAT from FEC data, or if the QR payload cannot be parsed offline.

**Score:** 3/10

**Sources:**  
- https://dgi.bf/note-fec/  
- https://burkina24.com/2018/04/12/modernisation-de-la-fiscalite-au-burkina-esintax-lance/  
- https://www.osiris.sn/le-burkina-faso-se-dote-d-un-portail-de-declaration-et-de-paiement-des-impots.html

## Rejected after competitor research

- **Payroll IUTS/CNSS filing tool:** eSINTAX (2018) and the eCNSS web portal and mobile app (launched Oct 2025, with mobile-money payment) are government-provided. Local payroll packages and Sage-type payroll already compute IUTS. The leftover gap is small. ([eCNSS](https://fr.allafrica.com/stories/202510290346.html), [Afrotools IUTS](https://afrotools.com/fr/blog/controle-iuts-bulletin-paie-burkina-faso/))
- **Public-procurement bid-document packs:** the state is building its own e-procurement platform (World Bank P176026, Ministry of Finance session Feb 2026), so platform risk is high. ([World Bank](https://projects.worldbank.org/en/projects-operations/project-detail/P176026), [AllAfrica](https://fr.allafrica.com/stories/202602180385.html))
- **Sesame/cashew SPS export documents:** donor-funded STDF programme, state floor prices and export suspensions (shea kernels). The buyer pool is volatile. ([STDF PPG-859](https://www.standardsfacility.org/PPG-859), [AllAfrica shea](https://fr.allafrica.com/stories/202511240532.html))

## Attractive problem, poor distribution

- **Mining local-content compliance (Law 016-2024 and Law 017-2024):** real reporting burden, but only a few hundred subcontractors, local-ownership rules for service providers, security constraints, and mines moving under state control. ([Mondaq](https://www.mondaq.com/article/1530620), [Sidwaya, ABSM](https://www.sidwaya.info/alliance-des-fournisseurs-burkinabe-de-biens-et-services-miniers-il-y-a-des-domaines-ou-lexpertise-nationale-nest-pas-developpee-president-yves-zongo/))

## Too competitive

- **Generic FEC-compliant invoicing app for SMEs:** the DGI's own all-in-one billing unit (150k FCFA) plus local publishers being homologated make this a commodity.

## Overall assessment

Burkina Faso's one real why-now in 2026–2028 is the **certified e-invoice (FEC)** rollout. It is better treated as one country in a **francophone West/Central Africa "fiscal-device integration" play**: Benin e-MECeF, Congo SFEC, Burkina FEC, and similar regimes elsewhere. Sold through local integrators, that could be viable. Burkina alone, for a foreign solo founder without a local entity, is not.
