# Chad (Tchad): opportunity research

*Research date: 2026-10-05. Search budget: small or fragile market (10 searches used). Languages: French and English. Arabic was not searched.*

## Accessibility check

- **Sanctions:** I found no comprehensive US, EU or UK sanctions programme that covers selling software or IT services to Chadian businesses. This is from general knowledge and I did not check it against OFAC or EU lists in this session (**unverified**). Screen each counterparty against the targeted lists as usual.
- **Payment rails:** Chad uses the CFA franc (XAF) inside CEMAC. Mobile money comes from Airtel Money and Moov Money, with CEMAC interoperability through GIMACPAY ([TransFi](https://www.transfi.com/id/blog/chads-payment-rails-how-they-work---cemac-mobile-money-digital-expansion), [btw.media](https://btw.media/company-stories/airtel-grows-digital-services-in-chad-africa)). A foreign founder would find it hard to collect card or SaaS payments directly. In practice you would need a local reseller or partner (an accounting firm or integrator) to invoice and collect in XAF.
- **Practical verdict:** The market is legally accessible but hard to work in. It is small and fragile, the formal SME base is thin, buyers are concentrated in N'Djamena, and sales depend on relationships. It is accessible but low priority. It is best treated as an add-on to a CEMAC or francophone West Africa e-invoicing product (Cameroon, Benin, Côte d'Ivoire), not as a standalone market.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| All VAT-registered businesses / government suppliers | Issuing invoices through the DGI's mandatory standardized e-invoice system (FEN), with public spending blocked without a FEN invoice (2026 Finance Law) | **Candidate (weak)** | Real mandatory trigger, but the DGI provides a free web app. Whether a usable API or bulk upload exists for ERP integration could not be verified. |
| NGOs / international projects | Using FEN as issuer or recipient after the 2026 extension to NGOs and associations, plus tax withholding | **Candidate (weak)** | There are many NGOs because of the humanitarian presence and they have budgets and FX. However, their finance teams run global ERPs and use the Big-4 or local tax advisers. |
| Accountants / tax filing | Filing and paying through e-Tax (SIGI portal) | Reject | It is a government-provided free portal, payment rails are integrated (Airtel Money, UBA, Ecobank), and there is no third-party API evidence. |
| Payroll / social security (CNPS) | Monthly payroll and CNPS declarations | Reject | Sage 100 Paie and OHADA-zone payroll tools (e.g. Compta Expert) already serve this. The market is tiny and there is no new trigger. |
| Customs brokers / freight forwarders | Transit declarations (via Douala), customs filings | Reject (poor distribution / no data) | The Douala corridor is a transit pain point, but there was no evidence of a 2025–26 digital trigger. The buyer group (SYCODAF members) is small and the workflow runs in the government's customs system. |
| Oil-sector subcontractors | Local-content and vendor qualification for Esso/consortium and SHT | Reject | There is no formal local-content regulatory framework (UNCTAD), the evidence is old (2015–17), and buyers sit behind enterprise procurement. |

## Opportunities

### Opportunity: FEN bridge, from accounting/ERP invoice to Chad standardized e-invoice (FEN)

**Industry:**
Cross-industry: VAT-registered SMEs, government suppliers, NGOs and liberal professions (notaries, bailiffs)

**Buyer:**
Finance manager or chief accountant at a VAT-registered company that sells to the state, NGOs or projects. The second buyer is the local accounting firm that keeps the books for many such companies.

**Trigger / Why now:**
- The 2023 Finance Law (Loi n° 016/PT/2022) made FEN compulsory for VAT-registered taxpayers.
- The 2026 Finance Law (in force 1 Jan 2026) extended FEN to transactions involving public bodies, local authorities, NGOs, associations and liberal professions.
- No public expenditure can be processed without a valid FEN invoice.
- Tax audits are now fully digital through e-Tax.

**Current workflow:**
1. The invoice is created in Sage, Excel or a local billing tool.
2. An accountant logs into fen.finances.gouv.td and re-keys the invoice header and lines to get the FEN number and QR code.
3. They download or print the FEN invoice and send it to the client (a ministry or NGO) together with the supporting documents.
4. They reconcile the FEN numbers back into the accounting ledger and later into VAT returns on e-Tax.

**Pain:**
- Supplier payment depends on FEN, because public spending is blocked without it (sources below).
- The steps above mean double entry between the ERP and the DGI web app.
- **Unverified:** how painful this is in practice, invoice volumes, and whether the portal supports bulk or CSV upload.

**Existing solutions:**
- The DGI FEN web application. It is free, and the official guide and registration documents are on fen.finances.gouv.td.
- Sage 100 Comptabilité / Paie as used locally (no evidence of a FEN connector).
- Global e-invoicing compliance vendors that publish Chad pages (EDICOM, e-invoice.app, Docnova, Sapeinvoice). Their depth of real integration is **unverified**.
- Accountants re-keying invoices manually.

**The gap:**
- Sync from ERP or Excel into FEN, then FEN number and QR back into the ledger, and reconciliation with e-Tax VAT returns.
- This only exists if the DGI exposes an API or accepts bulk files. Without that, the product would be browser-automation scraping of a government portal, which is fragile.

**Possible product:**
A small connector that reads invoices from Sage 100 or Excel exports and submits them to FEN (by API, or by assisted bulk entry). It writes the FEN references back and produces a monthly reconciliation of FEN invoices against VAT declared.

**MVP:**
- Upload Excel or Sage export, validate it against the FEN required fields, and produce a pre-filled submission (or API push if one is available).
- Produce a reconciliation sheet of FEN numbers against the ledger.

**Pricing hypothesis:**
About 25,000–60,000 XAF/month (≈ $40–100) per company. Accounting firms would pay a multi-client tier of about 150,000 XAF/month. This is an **estimate**.

**How to find first customers:**
- Accounting firms in N'Djamena (Ordre des experts-comptables, CEMAC).
- Public-procurement supplier lists.
- NGO coordination forums (OCHA Chad).
- The DGI's FEN awareness sessions.

**Risks:**
- No public API.
- The DGI may add bulk upload itself.
- The number of VAT-registered firms is small (**unverified**, likely low thousands).
- Collecting payment from abroad.
- Political instability.
- Global vendors (EDICOM and similar) already cover larger clients.

**Kill condition:**
Interviews show that FEN has no API or bulk-file interface and the DGI forbids third-party submission, or that typical firms issue fewer than about 30 invoices a month.

**Score:** 4/10

**Sources:**
- https://edicomgroup.com/fr/blog/tchad-facturation-electronique-obligatoire
- https://tchadinfos.com/2026/01/29/loi-de-finances-2026-la-direction-generale-des-impots-detaille-les-nouvelles-mesures-fiscales/
- https://orbitax.com/news/country/article/Chads-2026-Finance-Law-introd_6e8eb302-225d-11f1-8a90-42f7e08108ee
- https://docnova.ai/fr/facturation-electronique-tchad-2026/
- https://sapeinvoice.com/fr/blog/actualites/facturation-electronique-tchad-2026/
- https://fen.finances.gouv.td/assets/landing/documents/Obligations%20g%C3%A9n%C3%A9rales%20de%20FEN.pdf
- https://forma-sigi.finances.gouv.td/fen-portail/assets/landing/documents/Inscription%20a%20FEN.pdf
- https://www.africa-press.net/tchad/economie/le-ministere-des-finances-lance-la-facture-electronique-normalisee-au-tchad
- https://www.alwihdainfo.com/tchad-la-digitalisation-des-finances-publiques-au-coeur-de-la-loi-de-finances-2026/
- https://www.e-invoice.app/country/TD

### Opportunity: NGO and project compliance pack (FEN receipt validation + tax withholding file)

**Industry:**
NGOs, international projects, UN implementing partners (Chad hosts a large humanitarian presence linked to the Sudan refugee crisis)

**Buyer:**
Country finance or admin manager of an international or national NGO in N'Djamena or Abéché

**Trigger / Why now:**
The 2026 Finance Law brings NGOs and associations explicitly into FEN, and electronic payment is being generalised. NGOs must now check that supplier invoices are valid FEN invoices before paying. They also handle their own FEN obligations alongside existing withholding and declarations on e-Tax.

**Current workflow:**
1. Collect supplier invoices on paper, PDF or WhatsApp.
2. Check them manually for FEN number and QR, and possibly look them up on the portal.
3. Enter them into the global ERP (e.g. donor-mandated systems).
4. Compile withholding schedules for the DGI and supporting documents for donor audits.

**Pain:**
- Donor audits disallow non-compliant expenses.
- The new FEN requirement adds a validation step for every supplier invoice.
- The size of the pain is **unverified** and no NGO complaints were found.

**Existing solutions:**
Big-4 and local tax advisers, NGO global ERPs (e.g. Sun Systems, Dynamics, Sage Intacct; general knowledge, **unverified** locally), manual Excel, and the DGI portal itself.

**The gap:**
Batch validation of supplier FEN invoices (QR scan to DGI check) and a monthly withholding and FEN reconciliation export formatted for both the DGI and donors.

**Possible product:**
A mobile and web tool. Scanning supplier invoice QRs validates them against FEN and builds a monthly compliance file and audit pack.

**MVP:**
A QR-scan validator, an invoice register, and an Excel export.

**Pricing hypothesis:**
$50–150/month per NGO country office (**estimate**)

**How to find first customers:**
- OCHA Chad partner lists.
- The CCO / NGO forum directories.
- Cluster contact lists.

**Risks:**
- QR validation may need no software at all (if the portal verifies for free).
- NGOs often buy through HQ procurement.
- Security conditions.
- Small number of buyers (perhaps 100–300 organisations, **estimate**).

**Kill condition:**
The FEN QR can already be verified with any phone through a public DGI page, or NGO finance teams report no change in effort since 2026.

**Score:** 3/10

**Sources:**
- https://docnova.ai/fr/facturation-electronique-tchad-2026/
- https://sapeinvoice.com/fr/blog/actualites/facturation-electronique-tchad-2026/
- https://tchadinfos.com/2025/02/26/tchad-le-ministere-des-affaires-etrangeres-et-la-direction-des-impots-presentent-des-outils-numeriques-aux-missions-diplomatiques/
- https://fen.finances.gouv.td/assets/landing/documents/FEN%20GUIDE%20UTILISATEUR%20POUR%20LES%20CONTRIBUABLES_v1.0%20-%20WEB.pdf

*I found only two opportunities worth writing up. Both are weak. There is no stronger third candidate, so this report does not include filler.*

## Rejected after competitor research

- **Tax e-filing / e-payment helper:** The DGI e-Tax portal (sigi.finances.gouv.td) is free and already integrated with Airtel Money, UBA and Ecobank OMNI. A third party adds little. ([tchadinfos](https://tchadinfos.com/2023/02/01/la-teledeclaration-et-le-telepaiement-des-impots-et-taxes-sont-operationnels-via-airtel-money-tchad/), [Alwihda/Ecobank](https://www.alwihdainfo.com/tchad-ecobank-soutient-la-digitalisation-fiscale-a-travers-l-integration-de-ses-plateformes-digitales-avec-l-a130931/))
- **Payroll and CNPS declarations:** Sage 100 Paie (local training and integrators exist) and SYSCOHADA tools such as Compta Expert already cover Chad. There is no new trigger. ([lesopportunites](https://www.lesopportunites.com/?p=138784), [OHADA.com](https://www.ohada.com/actualite/6566/parution-dun-logiciel-de-comptabilite-et-de-production-automatique-des-etats-financiers-conforme-au-systeme-comptable-ohada.html))
- **Generic e-invoicing compliance for larger firms:** EDICOM and other global e-invoicing vendors already market Chad FEN compliance to multinationals.

## Attractive problem, poor distribution

- **Customs transit documentation (Douala to N'Djamena corridor):** The pain is real (tracking and transit delays reported in the CEMAC transit discussion). However, the buyer group is small (SYCODAF member brokers), the work runs in the government customs system, and I found no 2025–26 digital trigger. ([camer.be](https://www.camer.be/92490/11:1/afrique-transit-portuaire-zone-cemac-le-tchad-deplore-linsuffisance-des-gps-et-balises-au-port-de-douala-africa.html))
- **Oil-sector local-content reporting:** There is no binding framework yet, and buyers are reached through enterprise procurement (Esso consortium, SHT). ([UNCTAD](https://unctad.org/meetings/en/Presentation/Tchad_08122016_Yorbana_Seign-Goura.pdf))

## Too competitive

- No idea in Chad was rejected mainly for competition density. The limiting factors are market size and the fact that the government provides the tools for free.

## Bottom line

Chad has one real 2026 regulatory trigger: FEN, extended by the 2026 Finance Law and made a precondition for public payment. The market behind it is very small, the government tool is free, and API access is unverified. Chad is not worth a standalone build. If someone builds a CEMAC or francophone Africa e-invoicing connector (Cameroon, Benin, Côte d'Ivoire FNE), Chad FEN could be added as a cheap extra module.
