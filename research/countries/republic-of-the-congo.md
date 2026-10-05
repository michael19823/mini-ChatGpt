# Republic of the Congo (Congo-Brazzaville): opportunity research

Research date: 2026-10-05. Treated as a **small market**: about 6 million people, an oil-dominated economy, French-speaking, XAF (CEMAC) currency. I used 8 web searches, in French and English, and could not fetch pages directly. Many search results mixed up this country with the DR Congo (Kinshasa), whose separate "facture normalisée" reform started on 1 Dec 2025. I left all DRC material out of this report.

**Accessibility:** I found no US, EU or UK sanctions on selling software to the Republic of the Congo. Payment would come by bank transfer in XAF or by mobile money (MTN MoMo, Airtel Money). One point is unverified: whether DGID gives SFEC API keys to a foreign software vendor, or only to the taxpayer or a locally registered integrator. Check this before building anything.

**Main finding:** the country has one strong regulatory trigger. Decree 2026-101 of 31 March 2026 created the certified electronic invoicing system (SFEC), which went live on 1 Aug 2026. On top of that, mandatory E-TAX filing and FOUTA e-payment started on 1 Oct 2026. Both apply to companies managed by the large-enterprise unit (UGE), the medium-enterprise unit (UME) and the oil and gas subcontractors unit (USTPG). SFEC also covers **all their suppliers and service providers, whatever their size or tax residence**. The candidate market is small, but it is being forced to change now.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Oil & gas subcontractors / suppliers (Pointe-Noire) | SFEC certified invoicing from existing billing tools | **Shortlist** | Mandatory since 1 Aug 2026 for USTPG firms and their suppliers. There is an open API (API key / mTLS). Many firms bill from Excel, Sage or other legacy tools. |
| Accounting firms / outsourced bookkeeping | E-TAX filing and FOUTA payment, and checking VAT returns against SFEC invoice data | **Shortlist (weaker)** | New since 1 Oct 2026. It is a monthly task, but there are few firms and it is unclear what data E-TAX lets you export. |
| Payroll bureaus / HR in UGE/UME firms | New 2026 ITS income-tax scale (Law 42-2025), CNSS, CAMU, monthly returns | Too competitive / low gap | Congopaie, Sage Paie, Mercans and similar payroll tools, plus local consultants, already cover this. |
| Timber exporters | FLEGT/SIVL legality and traceability, EUDR | Rejected | The government already runs the SIVL system. Buyers are a few dozen large, mostly foreign-owned concession holders, and EUDR traceability vendors already sell to them. |
| Freight forwarders / customs brokers | Customs clearance via the GUOT single window and SYDONIA | Rejected | The GUOT single window is state-run. The work is concentrated among large logistics groups at Pointe-Noire, so selling would mean enterprise procurement. |
| Oil local content | Local-content reporting for subcontractors | Poor distribution / unclear | The rules are in the 2019 decrees and a framework law is still under discussion. I found no defined recurring portal or report format. Selling would go through oil-company procurement. |

## Opportunities

### Opportunity: SFEC connector for suppliers of oil & gas and large enterprises

**Industry:**
Oil & gas subcontracting and the suppliers of companies in the UGE, UME and USTPG units: engineering, catering, logistics, equipment rental, security, cleaning.

**Buyer:**
The finance or accounting manager (DAF / chef comptable) at a small or mid-size subcontractor or supplier, mostly in Pointe-Noire and Brazzaville.

**Trigger / Why now:**
Decree 2026-101 of 31 Mar 2026 made SFEC certified invoices mandatory from 1 Aug 2026 (some outlets reported 1 July). Phase 1 covers UGE, UME and USTPG companies **and all their suppliers and service providers, whatever their size or tax residence**. DGID allows the free E-Facture portal as a temporary fallback for firms whose API integration or API-key validation is delayed. That suggests many firms are still not integrated.

**Current workflow:**
1. Create the invoice in Excel, Word, Sage or a local tool.
2. Re-type it by hand into the E-Facture web portal (or a TFC terminal) to get it certified with a QR code.
3. Send the certified PDF to the client, often an oil major, which rejects invoices that are not certified.
4. Re-enter the certification number and QR reference into the accounting system, and handle credit notes and corrections by hand.

**Pain:**
Every invoice is typed twice. Oil majors and large companies will refuse invoices that are not certified, which delays payment. The fallback portal is a manual workflow and does not integrate with anything. Volumes are per invoice, which means daily or weekly.

**Existing solutions:**
- The government's free E-Facture portal and TFC/TCC terminals (docs.sfec.gouv.cg).
- TMR Computing "Congo SFEC" (tmrcomputing.com).
- Oopidi, which publishes an SFEC guide and an invoicing tool.
- Almathe, which publishes an SFEC resource page and offering.
- Odoo integrators offering approved SFEC modules.
- An unofficial community PHP client on Packagist (rubensalban/sfec-client-php).
- Large ERPs (SAP and others) at the majors, built in-house or by integrators.

**The gap:**
The free portal covers invoices typed by hand, and ERP integrators cover Odoo or SAP shops. Nothing clearly serves the middle: firms that keep billing from **Excel or Sage 100 / Saari** but don't want to re-type. Their needs are bulk certification of invoices exported from those tools, credit-note handling, attaching the certified PDF to the client's own supplier-portal submission, and writing the SFEC reference back into the accounting system. I could not verify how much TMR, Oopidi and Almathe already cover, which makes this the key diligence item.

**Possible product:**
A web app that takes invoices exported from Sage, Excel/CSV or QuickBooks, checks them against SFEC rules (tax ID, VAT, mandatory fields), certifies them through the SFEC API, and returns certified PDFs with QR codes plus a reconciliation file for the accounting system. It would also flag rejected invoices and suggest fixes.

**MVP:**
CSV/Excel upload, field mapping, validation, a call to the SFEC API with the client's own API key, a certified PDF and a log you can export, for one format (Sage 100 export).

**Pricing hypothesis:**
XAF 30,000–100,000 per month (about USD 50–170) by invoice volume, plus a setup fee. This is an estimate.

**How to find first customers:**
- USTPG and UGE taxpayer lists (unverified whether these are public).
- The Pointe-Noire chamber of commerce and the Union Patronale et Interprofessionnelle du Congo (UNICONGO) employers' federation.
- Supplier lists for TotalEnergies EP Congo, Eni Congo and Perenco.
- Chartered accountants and tax firms (CLG Global and similar) who advise these firms.

**Risks:**
- API access may be limited to the taxpayer or to approved integrators, and homologation may be needed.
- The market is small: probably a few hundred to low thousands of firms in phase 1 (estimate).
- Local integrators and Odoo partners are already active.
- Sage may ship an official SFEC module.
- Collecting payments from abroad.

**Kill condition:**
If DGID requires homologation of every software product, or a local legal entity, before it issues API access. Or if Sage, or an existing local vendor, already offers a cheap bulk SFEC connector.

**Score:** 6/10

**Sources:**
- https://sfec.gouv.cg/ and https://sfec.gouv.cg/conformite
- https://docs.sfec.gouv.cg/ and https://docs.sfec.gouv.cg/efacture
- https://www.finances.gouv.cg/fr/syst%C3%A8me-de-facturation-%C3%A9lectronique-certifi%C3%A9-sfec
- https://fr.apanews.net/technologies/congo-le-systeme-de-facturation-electronique-certifiee-entre-en-vigueur-le-1er-aout/
- https://clgglobal.com/tax-alert-mise-en-place-du-systeme-de-facturation-electronique-certifie-sfec-en-republique-du-congo/
- https://www.vatupdate.com/2026/08/11/certified-electronic-invoicing-system-mandatory-in-the-republic-of-the-congo-from-august-1-2026/
- https://www.panoramik-actu.com/sfec-le-congo-rend-la-facturation-electronique-certifiee-obligatoire-des-le-1er-juillet-2026/
- https://www.tmrcomputing.com/fr/congo-sfec
- https://oopidi.com/congo/sfec
- https://almathe.net/ressources/sfec-facture-electronique-congo.html
- https://packagist.org/packages/rubensalban/sfec-client-php

### Opportunity: Check VAT filings against SFEC data before E-TAX/FOUTA submission (accounting firms)

**Industry:**
Accounting firms and outsourced tax-compliance services.

**Buyer:**
The partner or manager at a Congolese accounting firm or tax advisory firm that handles monthly filings for clients in the UGE, UME and USTPG units. The in-house chief accountant at a mid-size company is a second buyer.

**Trigger / Why now:**
From 1 Oct 2026, companies in the UGE, UME and USTPG units must file on E-TAX and pay all taxes, VAT included, only through FOUTA. Combined with SFEC, the tax office now holds invoice-level data and can cross-check what companies declare.

**Current workflow:**
1. Pull the sales and purchase ledgers from the client's accounting system.
2. Work out VAT and withholdings in Excel.
3. Enter the totals by hand into the E-TAX forms.
4. Pay through FOUTA.
5. Answer the tax office when declared VAT does not match the SFEC invoice totals.

**Pain:**
Monthly deadlines with penalties. Mismatches between declared VAT and certified invoices are now detectable. Accountants re-type the same totals for every client. This is inferred from the rules; I found no direct complaints.

**Existing solutions:**
- Excel, plus the official E-TAX and FOUTA portals.
- Sage accounting and local accounting software.
- The big audit and tax firms with in-house procedures.
- Comarch and other enterprise e-invoicing vendors, at the large-enterprise end.

**The gap:**
No tool I could find checks a firm's ledger against its SFEC invoice records before it files on E-TAX. But it is unverified whether SFEC or E-TAX let you export data for that check.

**Possible product:**
A monthly pre-filing check for each client: compare ledger VAT with the SFEC invoice log, flag gaps, and produce figures ready to enter in E-TAX.

**MVP:**
Upload the ledger plus the SFEC export, get a mismatch report and a VAT summary laid out like the E-TAX form.

**Pricing hypothesis:**
XAF 15,000–40,000 per client company per month, sold to accounting firms. This is an estimate.

**How to find first customers:**
The professional order of chartered accountants (ONECCA Congo) member list, and Brazzaville / Pointe-Noire accounting firms.

**Risks:**
- There are probably fewer than 100 relevant firms (estimate).
- Getting the data out may be impossible.
- The market is too small to support a standalone product, so it may only work as an add-on to the first opportunity.

**Kill condition:**
If no SFEC or E-TAX data can be exported, or if accountants say mismatches are rare.

**Score:** 4/10

**Sources:**
- https://lookuptax.com/tax-changes/congo-brazzaville/fouta-mandatory-epayment-2026
- https://news.bloombergtax.com/daily-tax-report/republic-of-the-congo-issues-circular-on-requirements-deadlines-for-companies-paying-taxes-levies-electronically
- https://www.comarch.com/trade-and-services/data-management/legal-regulation-changes/republic-of-the-congo-rolls-out-certified-e-invoicing-and-digital-services-vat-rules/
- https://sfec.gouv.cg/conformite

## Rejected after competitor research

- **Payroll for the new 2026 ITS scale (Law 42-2025), CNSS and CAMU.** The pain is real and the rule changed for 2026. But Congopaie, Mercans, Sage Paie and local payroll consultants already cover it, and the market is small.
  Sources: https://congopaie.com/blog, https://dsr.mercans.com/?p=889, https://africarrieres.com/congo/fr/guide/employeur-entreprise/employer-taxes
- **Timber legality, traceability and EUDR.** The government's SIVL system (with FLEGT VPA support) already covers legality and traceability. The buyers are a few dozen large concession holders, and enterprise EUDR vendors serve them.
  Sources: https://www.atibt.org/en/news/13870/republic-of-the-congo-publication-of-the-2025-joint-annual-report-on-the-flegt-vpa, https://www.atibt.org/files/upload/Annexe_9_-_D_-_Guide_Utilisateur_SIVL_-_Fiscalite_-_Role_Entreprises_V1-0.pdf
- **Customs and forwarding documentation.** The state-run GUOT single window and SYDONIA already digitise the process, and the volume sits with large logistics groups at Pointe-Noire.
  Source: https://cio-mag.com/eugene-rufin-bouya-le-guot-a-eu-un-impact-significatif-sur-le-commerce-transfrontalier-entre-le-congo-et-ses-voisins/

## Attractive problem, poor distribution

- **Local-content compliance for oil subcontractors.** Approval by activity type, the 30% Congolese shareholding rule and staff-localisation rules all exist. But I found no standard recurring portal or report format, and selling would go through oil-company procurement.
  Sources: https://fr.allafrica.com/stories/202403240167.html, https://www.labase-lextenso.fr/l-essentiel-droits-africains-des-affaires/2020-n2/congo-reglementation-des-activites-dans-le-secteur-petrolier-DAA112v9

## Too competitive

- **Payroll and social-security returns.** See the payroll item above.

## Overall note

This is a small market. The only real "why now" is SFEC plus E-TAX/FOUTA. The best way to sell here is probably as a **CEMAC/francophone add-on**: the same kind of product could serve Gabon, Cameroon and the DR Congo, which are all bringing in certified invoicing or fiscal-device rules. It is not strong enough to stand alone as a business.
